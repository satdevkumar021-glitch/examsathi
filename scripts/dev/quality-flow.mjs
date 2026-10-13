import { randomUUID } from 'node:crypto';
// Quality-report pipeline against a running app wired to scripts/dev/fake-supabase.mjs.
// Tests the analytics API (reviewer access, data isolation, empty state) without requiring a real database.
const B = process.env.SMOKE_URL || 'http://localhost:3200';
const j = async (m, p, body, tok, base = B) => { const r = await fetch(base + p, { method: m, headers: { 'content-type': 'application/json', ...(tok ? { authorization: 'Bearer ' + tok } : {}) }, body: body ? JSON.stringify(body) : undefined }); const t = await r.text(); let o = null; try { o = JSON.parse(t); } catch {} return { s: r.status, o, t }; };
let pass = 0, failn = 0; const ok = (n, c, x = '') => { if (c) pass++; else failn++; console.log((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  ' + x)); };

// Authorization
let r = await j('GET', '/api/admin/quality/');
ok('unauthenticated request returns 401', r.s === 401, r.t);
r = await j('GET', '/api/admin/quality/', null, 'garbage');
ok('garbage token returns 401', r.s === 401, r.t);
r = await j('GET', '/api/admin/quality/', null, 'tok-educator');
ok('educators cannot see the quality report (403)', r.s === 403, r.t);

// Reviewer and superadmin access
r = await j('GET', '/api/admin/quality/', null, 'tok-reviewer');
ok('reviewer sees the quality report', r.s === 200 && r.o?.success === true, r.t);
ok('report has the expected shape', r.o?.report && typeof r.o.report.analysed === 'number' && Array.isArray(r.o.report.items), r.t);

r = await j('GET', '/api/admin/quality/', null, 'tok-super');
ok('superadmin also sees the report', r.s === 200, r.t);

// Empty state
ok('no attempts: report says nothing is flagged', r.o?.attemptsAnalysed === 0 || r.o?.report?.flagged === 0, r.t);

// Populate with some attempts, then request again.
const topic = 'modern-india';
const set = await j('POST', '/api/questions/set/', { topicId: topic, count: 50, examId: 'master-cadre-sst' });
const qs = set.o?.questions || [];
ok('a topic set for the analysis was served', qs.length >= 5, set.t.slice(0, 100));
const rev = await j('POST', '/api/questions/reveal/', { ids: qs.map(q => q.id) });
const key = rev.o?.reveals || {};
const allRight = Object.fromEntries(qs.map(q => [q.id, key[q.id]?.correct]));
const allWrong = Object.fromEntries(qs.map(q => [q.id, key[q.id]?.correct === 'A' ? 'B' : 'A']));
const attempt = (answers, tok = 'tok-learner') => j('POST', '/api/attempts/', { attemptId: randomUUID(), examId: 'master-cadre-sst', testId: 'topic-' + topic, questionIds: qs.map(q => q.id), answers, timeTakenSeconds: 30 }, tok);
// Submit 20 attempts with correct answers (strong learners) and 20 with wrong answers (weaker).
for (let i = 0; i < 20; i++) await attempt(allRight);
for (let i = 0; i < 20; i++) await attempt(allWrong);
const guest = await attempt(allRight, null);
ok('guest attempts are scored but never stored for analysis', guest.o?.stored === false, guest.t.slice(0, 100));

r = await j('GET', '/api/admin/quality/', null, 'tok-reviewer');
ok('report reflects stored attempts', r.o?.attemptsAnalysed >= 40, `analysed=${r.o?.attemptsAnalysed}`);
ok('questions seen in the attempts were analysed', r.o?.report?.analysed >= qs.length, `analysed=${r.o?.report?.analysed} served=${qs.length}`);
ok('exactly the stored attempts were counted (guest excluded)', r.o?.attemptsAnalysed === 40, `analysed=${r.o?.attemptsAnalysed}`);

// End to end: plant a question whose key disagrees with what strong learners pick, and expect it to be caught.
// Strong = high score on the OTHER questions. Strong learners pick the rival option on the target question, weak ones
// scatter. This uses an isolated topic so the 40 earlier attempts (which all got the target "right") do not dilute it.
const probeSet = await j('POST', '/api/questions/set/', { topicId: 'punjab-freedom-movements', count: 14, examId: 'master-cadre-sst' });
// Questions the earlier all-right/all-wrong attempts already touched would dilute the planted signal, so leave them out.
const touched = new Set(qs.map(q => q.id));
const pq = (probeSet.o?.questions || []).filter(q => !touched.has(q.id));
ok('enough untouched questions to plant a case', pq.length >= 4, `untouched=${pq.length}`);
const prev = await j('POST', '/api/questions/reveal/', { ids: pq.map(q => q.id) });
const pkey = prev.o?.reveals || {};
const target = pq[0];
const targetKey = pkey[target.id]?.correct;
const rival = targetKey === 'C' ? 'D' : 'C';
const wrongOf = id => (pkey[id].correct === 'A' ? 'B' : 'A');
const planted = [];
for (let i = 0; i < 160; i++) {
  const strong = i % 2 === 0;
  const answers = { [target.id]: strong ? rival : ['A', 'B', 'C', 'D'][i % 4] };
  let correct = answers[target.id] === targetKey ? 1 : 0;
  pq.slice(1).forEach((q, k) => { const right = strong ? true : k % 3 === 0; answers[q.id] = right ? pkey[q.id].correct : wrongOf(q.id); if (right) correct++; });
  planted.push({ total: pq.length, correct, answers });
}
const plant = await j('POST', '/__test/attempts', { userId: '44444444-4444-4444-8444-444444444444', rows: planted }, null, process.env.FAKE_URL || 'http://127.0.0.1:54321');
ok('planted attempts were accepted', plant.s === 201, plant.t);
r = await j('GET', '/api/admin/quality/', null, 'tok-reviewer');
const flagged = r.o?.report?.items?.find(i => i.id === target.id);
ok('a planted bad key is flagged end to end', !!flagged && (flagged.flags.includes('key-suspect') || flagged.flags.includes('negative-discrimination')), JSON.stringify(flagged || r.o?.report?.items?.slice(0, 2)));
ok('the flag shows where strong learners went', !!flagged && flagged.upperCounts[rival] > flagged.upperCounts[targetKey], JSON.stringify(flagged?.upperCounts));
ok('a sound question from the same attempts is not flagged', !r.o?.report?.items?.some(i => i.id === pq[1].id && i.flags.includes('key-suspect')), JSON.stringify(r.o?.report?.items?.find(i => i.id === pq[1].id)));

// No learner identity should ever appear in the response.
ok('no user_id or learner identity in the report', !/user_id|learner_id|email/.test(r.t), 'identity found in report');
// Answers are aggregated: the raw answer-to-question mapping must not appear.
const has_raw_answers = r.t.includes('"answers":{') && r.t.includes(':\"A\"');
ok('raw answer maps are not in the response', !has_raw_answers, 'raw answers found');

console.log(`\n${pass} passed, ${failn} failed`);
process.exit(failn ? 1 : 0);
