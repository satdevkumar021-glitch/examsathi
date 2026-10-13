// Weak-topic and streak loop against a running app wired to scripts/dev/fake-supabase.mjs. See docs/LOCAL_TESTING.md.
import { randomUUID } from 'node:crypto';
const B = process.env.SMOKE_URL || 'http://localhost:3200';
const j = async (m, p, body, tok) => { const r = await fetch(B + p, { method: m, headers: { 'content-type': 'application/json', ...(tok ? { authorization: 'Bearer ' + tok } : {}) }, body: body ? JSON.stringify(body) : undefined }); const t = await r.text(); let o = null; try { o = JSON.parse(t); } catch {} return { s: r.status, o, t }; };
// LEGACY_DB=1 targets a database without migration 202610110003: attempts and streaks work, weak topics stay empty.
const LEGACY = !!process.env.LEGACY_DB;
let pass = 0, failn = 0; const ok = (n, c, x = '') => { if (c) pass++; else failn++; console.log((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  ' + x)); };

let r = await j('GET', '/api/learner/profile/');
ok('profile needs a session (401)', r.s === 401, r.t);
r = await j('GET', '/api/learner/profile/', null, 'garbage');
ok('garbage token is rejected (401)', r.s === 401, r.t);

r = await j('GET', '/api/learner/profile/', null, 'tok-learner');
ok('new learner has an empty profile', r.s === 200 && r.o.insights.attempts === 0 && r.o.insights.streak === 0 && r.o.insights.weakTopics.length === 0, r.t);

// Take a real topic test: serve a set, answer every question wrongly, submit as the learner.
const topic = 'punjab-freedom-movements';
const set = await j('POST', '/api/questions/set/', { topicId: topic, count: 10, examId: 'master-cadre-sst' });
const qs = set.o?.questions || [];
ok('a topic set is served, all in one topic', qs.length >= 5 && qs.every(q => q.topicId === topic), set.t.slice(0, 150));
const ids = qs.map(q => q.id);
const rev = await j('POST', '/api/questions/reveal/', { ids });
const key = rev.o?.reveals || {};
const wrong = Object.fromEntries(ids.map(id => [id, key[id]?.correct === 'A' ? 'B' : 'A']));
const submit = (answers, tok = 'tok-learner', attemptId = randomUUID()) =>
  j('POST', '/api/attempts/', { attemptId, examId: 'master-cadre-sst', testId: 'topic-' + topic, questionIds: ids, answers, timeTakenSeconds: 60 }, tok);

const first = randomUUID();
r = await submit(wrong, 'tok-learner', first);
ok('attempt is scored and stored for the learner', r.o?.stored === true && r.o.score.correct === 0, r.t.slice(0, 200));
r = await submit(wrong, 'tok-learner', first);
ok('a retry of the same attempt is idempotent', r.o?.stored === true, r.t.slice(0, 200));

r = await j('GET', '/api/learner/profile/', null, 'tok-learner');
const i = r.o?.insights;
ok('one attempt counted (retry not double-counted)', i?.attempts === 1, r.t);
ok('streak is 1 and practised today', i?.streak === 1 && i?.practisedToday === true, r.t);
if (LEGACY) {
  ok('without the migration, weak topics degrade to empty (no crash)', i?.weakTopics?.length === 0 && i?.accuracy === 0, r.t);
} else {
  ok('all-wrong topic shows as the weak topic', i?.weakTopics?.[0]?.topicId === topic && i.weakTopics[0].accuracy === 0, r.t);
  ok('weak topic carries the exam for the practice link', i?.weakTopics?.[0]?.examId === 'master-cadre-sst', r.t);
}

r = await j('GET', '/api/learner/profile/', null, 'tok-other');
ok("another learner cannot see this learner's data", r.o?.insights?.attempts === 0, r.t);

// Improve: a perfect attempt lifts accuracy above the threshold and the topic stops being weak.
const right = Object.fromEntries(ids.map(id => [id, key[id].correct]));
for (let n = 0; n < 3; n++) await submit(right);
r = await j('GET', '/api/learner/profile/', null, 'tok-learner');
ok('improved topic leaves the weak list', r.o?.insights?.weakTopics?.length === 0, r.t);
ok('streak stays one day for same-day attempts', r.o?.insights?.streak === 1 && r.o.insights.attempts === 4, r.t);

r = await submit(wrong, null);
ok('guests are still scored but nothing is stored', r.o?.stored === false && r.o?.score?.total === ids.length, r.t.slice(0, 200));
r = await j('GET', '/api/learner/profile/?tz=99999', null, 'tok-learner');
ok('an absurd timezone falls back instead of failing', r.s === 200, r.t);

console.log(`\n${pass} passed, ${failn} failed`);
process.exit(failn ? 1 : 0);
