#!/usr/bin/env node
// End-to-end smoke test against a RUNNING server.
//   npm run build && npm start           (in one terminal)
//   npm run smoke                        (in another)
// Env: SMOKE_URL (default http://localhost:3000)
//      SMOKE_STAFF_TOKEN  optional Supabase access token of a staff user -> also tests the admin workflow
import { randomUUID } from 'node:crypto';

const BASE = (process.env.SMOKE_URL || 'http://localhost:3000').replace(/\/$/, '');
const STAFF = process.env.SMOKE_STAFF_TOKEN || '';
const results = [];
let section = '';

const heading = name => { section = name; console.log(`\n${name}`); };
async function check(name, fn) {
  try {
    const note = await fn();
    results.push({ section, name, ok: true });
    console.log(`  PASS  ${name}${note ? `  (${note})` : ''}`);
  } catch (e) {
    results.push({ section, name, ok: false, error: e.message });
    console.log(`  FAIL  ${name}\n        ${e.message}`);
  }
}
const assert = (cond, msg) => { if (!cond) throw new Error(msg); };
const skip = (name, why) => { results.push({ section, name, ok: true, skipped: true }); console.log(`  SKIP  ${name}  (${why})`); };

async function call(path, { method = 'GET', body, headers = {}, redirect = 'manual' } = {}) {
  const res = await fetch(BASE + path, {
    method, redirect,
    headers: { ...(body ? { 'content-type': 'application/json' } : {}), ...headers },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch { /* html */ }
  return { status: res.status, headers: res.headers, text, json };
}
const post = (path, body, headers) => call(path, { method: 'POST', body, headers });

// ---------------------------------------------------------------- reachability
try { await fetch(BASE + '/api/health/'); } catch {
  console.error(`Cannot reach ${BASE}. Start the app first: npm run build && npm start`);
  process.exit(2);
}

heading('1. Health and security headers');
await check('GET /api/health/ is ok', async () => {
  const r = await call('/api/health/');
  assert(r.status === 200 && r.json?.status === 'ok', `status ${r.status}`);
});
await check('security headers present', async () => {
  const r = await call('/');
  for (const h of ['x-content-type-options', 'x-frame-options', 'content-security-policy', 'referrer-policy']) {
    assert(r.headers.get(h), `missing ${h}`);
  }
});

heading('2. Pages render (HTTP 200)');
const pages = ['/', '/login/', '/register/', '/forgot-password/', '/dashboard/', '/exams/', '/syllabus/', '/syllabus/punjab-ett/',
  '/mock-test/', '/library/', '/roadmap/', '/profile/', '/ai-generator/', '/exam-coach/', '/typing-practice/', '/coverage/',
  '/about/', '/contact/', '/privacy/', '/terms/', '/offline/'];
for (const p of pages) {
  await check(`GET ${p}`, async () => {
    const r = await call(p);
    assert(r.status === 200, `status ${r.status}`);
    assert(/<html/i.test(r.text), 'not an HTML document');
  });
}
await check('unknown page returns 404', async () => {
  const r = await call('/this-page-does-not-exist/');
  assert(r.status === 404, `status ${r.status}`);
});

heading('3. Question bank API (answers never leave the server early)');
let questions = [];
await check('manifest lists topic counts', async () => {
  const r = await post('/api/questions/manifest/', { examIds: ['master-cadre-sst'] });
  assert(r.json?.success, `status ${r.status}`);
  const topics = r.json.manifest['master-cadre-sst'];
  assert(topics && Object.keys(topics).length > 0, 'no topics');
  return `${Object.keys(topics).length} topics`;
});
await check('count returns pool sizes', async () => {
  const r = await post('/api/questions/count/', { queries: [{ examId: 'master-cadre-sst', topicId: 'punjab-history' }] });
  assert(r.json?.success, `status ${r.status}`);
});
await check('set returns questions WITHOUT answers', async () => {
  const r = await post('/api/questions/set/', { topicId: 'punjab-history', examId: 'master-cadre-sst', count: 5 });
  assert(r.json?.success && r.json.questions.length > 0, `status ${r.status}`);
  questions = r.json.questions;
  for (const q of questions) {
    for (const k of ['correct', 'explanation', 'thought', 'deepConceptNote', 'distractorExplanations']) {
      assert(!(k in q), `question ${q.id} leaks "${k}"`);
    }
  }
  return `${questions.length} questions`;
});
await check('lookup returns text only', async () => {
  const r = await post('/api/questions/lookup/', { ids: questions.map(q => q.id) });
  assert(r.json?.success, `status ${r.status}`);
  assert(!/"correct"/.test(r.text), 'lookup leaks the answer');
});
await check('daily question has no answer', async () => {
  const r = await post('/api/questions/daily/', { topicIds: ['punjab-history'], dayIndex: 1 });
  assert(r.json?.success, `status ${r.status}`);
  assert(!/"correct"/.test(r.text), 'daily leaks the answer');
});
await check('bad input is rejected with 400', async () => {
  const r = await post('/api/questions/lookup/', { ids: 'nope' });
  assert(r.status === 400, `status ${r.status}`);
});

heading('4. Attempt scoring is server-authoritative');
let reveals = {};
const attemptBody = answers => ({
  attemptId: randomUUID(), examId: 'master-cadre-sst', testId: 'smoke-test',
  questionIds: questions.map(q => q.id), answers, timeTakenSeconds: 120,
});
await check('reveal returns the answer key', async () => {
  const r = await post('/api/questions/reveal/', { ids: questions.map(q => q.id) });
  assert(r.json?.success, `status ${r.status}`);
  reveals = r.json.reveals;
  assert(questions.every(q => /^[A-D]$/.test(reveals[q.id]?.correct)), 'missing correct option');
});
await check('all-correct submission scores 100%', async () => {
  const answers = Object.fromEntries(questions.map(q => [q.id, reveals[q.id].correct]));
  const r = await post('/api/attempts/', attemptBody(answers));
  assert(r.json?.success, `status ${r.status} ${r.text.slice(0, 120)}`);
  assert(r.json.score.correct === questions.length, `correct=${r.json.score.correct}`);
  assert(r.json.score.percentage === 100, `pct=${r.json.score.percentage}`);
  assert(r.json.stored === false, 'guest attempt must not be stored');
});
await check('all-wrong submission applies negative marking', async () => {
  const wrong = c => ['A', 'B', 'C', 'D'].find(o => o !== c);
  const answers = Object.fromEntries(questions.map(q => [q.id, wrong(reveals[q.id].correct)]));
  const r = await post('/api/attempts/', attemptBody(answers));
  assert(r.json?.success, `status ${r.status}`);
  assert(r.json.score.wrong === questions.length, `wrong=${r.json.score.wrong}`);
  assert(r.json.score.rawScore <= 0, `rawScore=${r.json.score.rawScore}`);
});
await check('client-sent score is ignored', async () => {
  const answers = Object.fromEntries(questions.map(q => [q.id, reveals[q.id].correct]));
  const r = await post('/api/attempts/', { ...attemptBody(answers), score: 9999, percentage: 100, correct: 9999 });
  assert(r.json?.success && r.json.score.correct === questions.length, 'score was influenced by client');
});
await check('tampered attempt (unknown question) -> 422', async () => {
  const b = attemptBody({}); b.questionIds = ['q-does-not-exist'];
  const r = await post('/api/attempts/', b);
  assert(r.status === 422, `status ${r.status}`);
});
await check('answer outside the served set -> 422', async () => {
  const b = attemptBody({ 'q-not-in-attempt': 'A' });
  const r = await post('/api/attempts/', b);
  assert(r.status === 422, `status ${r.status}`);
});
await check('malformed attempt -> 400', async () => {
  const r = await post('/api/attempts/', { attemptId: 'x' });
  assert(r.status === 400, `status ${r.status}`);
});

heading('5. Auth API validation');
await check('login rejects empty credentials', async () => {
  const r = await post('/api/auth/login/', { email: '', password: '' });
  assert(r.status === 400, `status ${r.status}`);
});
await check('register rejects short password', async () => {
  const r = await post('/api/auth/register/', { email: 'smoke@example.com', password: '123' });
  assert(r.status === 400, `status ${r.status}`);
});
await check('login with wrong credentials is not a 200', async () => {
  const r = await post('/api/auth/login/', { email: 'nobody@example.com', password: 'wrong-password-123' });
  assert(r.status >= 400 && r.status < 600, `status ${r.status}`);
  return `status ${r.status}`;
});

heading('6. Admin protection');
await check('/admin/ without a session redirects to /login/', async () => {
  const r = await call('/admin/');
  assert(r.status >= 300 && r.status < 400, `status ${r.status}`);
  assert(/\/login/.test(r.headers.get('location') || ''), `location ${r.headers.get('location')}`);
});
for (const [m, body] of [['GET'], ['POST', { title: 'x', body: 'y' }], ['PATCH', { id: randomUUID(), to: 'published', role: 'superadmin' }], ['DELETE', { id: randomUUID() }]]) {
  await check(`${m} /api/admin/content/ without a token -> 401`, async () => {
    const r = await call('/api/admin/content/', { method: m, body });
    assert(r.status === 401, `status ${r.status}`);
  });
}
await check('garbage bearer token -> 401', async () => {
  const r = await call('/api/admin/content/', { headers: { authorization: 'Bearer not-a-real-token' } });
  assert(r.status === 401, `status ${r.status}`);
});

heading('7. Staff workflow (needs SMOKE_STAFF_TOKEN)');
if (!STAFF) {
  skip('create -> review -> publish', 'set SMOKE_STAFF_TOKEN to a staff user\'s access token');
} else {
  const auth = { authorization: `Bearer ${STAFF}` };
  let id = '';
  await check('staff can list content', async () => {
    const r = await call('/api/admin/content/', { headers: auth });
    assert(r.json?.success, `status ${r.status} ${r.text.slice(0, 120)}`);
  });
  await check('staff can create a draft', async () => {
    const r = await post('/api/admin/content/', { title: `Smoke ${Date.now()}`, body: 'Created by the smoke test.' }, auth);
    assert(r.json?.success, `status ${r.status} ${r.text.slice(0, 160)}`);
    id = r.json.item?.id;
    assert(id, 'no item id returned');
  });
  await check('staff can submit the draft for review', async () => {
    const r = await call('/api/admin/content/', { method: 'PATCH', body: { id, to: 'review' }, headers: auth });
    assert(r.json?.success, `status ${r.status} ${r.text.slice(0, 160)}`);
  });
  await check('staff can delete (superadmin only; 403 is also valid for lower roles)', async () => {
    const r = await call('/api/admin/content/', { method: 'DELETE', body: { id }, headers: auth });
    assert([200, 403].includes(r.status), `status ${r.status}`);
    return `status ${r.status}`;
  });
}

// ---------------------------------------------------------------- summary
const run = results.filter(r => !r.skipped);
const failed = run.filter(r => !r.ok);
const skipped = results.length - run.length;
console.log(`\n${'='.repeat(60)}\n${run.length - failed.length}/${run.length} checks passed${skipped ? `, ${skipped} skipped` : ''}`);
if (failed.length) {
  console.log('\nFailures:');
  for (const f of failed) console.log(`  [${f.section}] ${f.name}: ${f.error}`);
  process.exit(1);
}
