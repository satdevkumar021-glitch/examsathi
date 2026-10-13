import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(source, dependencies = {}) {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL(source, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, require: name => dependencies[name], Object, Array, Set, Number, Math, parseFloat });
  return exports;
}
const scoring = load('../src/lib/scoring.ts');
const { validateAttemptBody, scoreSubmission } = load('../src/lib/attempt-scoring.ts', { './scoring': scoring });

const ID = '123e4567-e89b-42d3-a456-426614174000';
const valid = (over = {}) => ({ attemptId: ID, examId: 'punjab-clerk', testId: 't1', questionIds: ['q1', 'q2', 'q3'], answers: { q1: 'A', q2: 'B' }, timeTakenSeconds: 120.4, ...over });
const key = { q1: 'A', q2: 'C', q3: 'D' };
const lookup = id => key[id];

test('accepts a well-formed submission and rounds time', () => {
  const r = validateAttemptBody(valid());
  assert.equal(r.ok, true);
  assert.equal(r.value.timeTakenSeconds, 120);
});

test('rejects malformed submissions', () => {
  for (const bad of [
    null, 'x', valid({ attemptId: 'nope' }), valid({ examId: '' }), valid({ testId: 'x'.repeat(201) }),
    valid({ timeTakenSeconds: -1 }), valid({ timeTakenSeconds: 99999 }), valid({ timeTakenSeconds: NaN }),
    valid({ questionIds: [] }), valid({ questionIds: ['a', 'a'] }), valid({ questionIds: [1] }),
    valid({ questionIds: Array.from({ length: 301 }, (_, i) => `q${i}`) }),
    valid({ answers: [] }), valid({ answers: { q1: 'E' } }), valid({ answers: { q1: 'a' } }), valid({ answers: { q1: 1 } }),
  ]) assert.equal(validateAttemptBody(bad).ok, false);
});

test('server scores from its own key and ignores any client-supplied score', () => {
  const input = valid({ rawScore: 999, percentage: 100, correct: 3 });
  const parsed = validateAttemptBody(input);
  const r = scoreSubmission(parsed.value, lookup, 0.25);
  assert.equal(r.ok, true);
  assert.equal(r.score.correct, 1);
  assert.equal(r.score.wrong, 1);
  assert.equal(r.score.unattempted, 1);
  assert.equal(r.score.rawScore, 0.75);
  assert.equal(r.score.total, 3);
});

test('rejects unknown questions and answers outside the served set', () => {
  assert.equal(scoreSubmission(validateAttemptBody(valid({ questionIds: ['q1', 'ghost'] })).value, lookup, 0).ok, false);
  assert.equal(scoreSubmission(validateAttemptBody(valid({ answers: { q1: 'A', q9: 'A' } })).value, lookup, 0).ok, false);
});

test('REET attempts use the REET scoring model', () => {
  const parsed = validateAttemptBody(valid({ examId: 'reet-level1', answers: { q1: 'A' } }));
  const r = scoreSubmission(parsed.value, lookup, 0.25);
  assert.equal(r.ok, true);
  assert.equal(r.score.whollyUnmarkedCount, 2);
});

test('attempt route scores on the server for everyone and stores only for verified users', () => {
  const route = readFileSync(new URL('../src/app/api/attempts/route.ts', import.meta.url), 'utf8');
  for (const needle of ["import 'server-only'", 'auth.getUser(token)', 'SUPABASE_SERVICE_ROLE_KEY', 'jsonRoute(', 'maxBytes: 100000', 'penaltyFor(input.examId)', "'23505'", 'scoreSubmission(', 'toReveal(']) assert.ok(route.includes(needle), needle);
  assert.ok(!route.includes('NEXT_PUBLIC_SUPABASE_SERVICE'), 'service key must not be public');
});

test('migration keeps attempts read-only for users and enforces RLS', () => {
  const sql = readFileSync(new URL('../supabase/migrations/202610110001_attempts.sql', import.meta.url), 'utf8');
  assert.match(sql, /enable row level security/);
  assert.match(sql, /revoke all on public\.examsathi_attempts from anon, authenticated/);
  assert.match(sql, /grant select on public\.examsathi_attempts to authenticated/);
  assert.doesNotMatch(sql, /grant (insert|update|delete)/i);
  assert.match(sql, /auth\.uid\(\)\) = user_id/);
});

test('client sends raw answers only and AI drills are scored locally, never sent', () => {
  const client = readFileSync(new URL('../src/lib/question-client.ts', import.meta.url), 'utf8');
  const submission = client.slice(client.indexOf('export interface AttemptSubmission'), client.indexOf('}', client.indexOf('export interface AttemptSubmission')));
  assert.doesNotMatch(submission, /rawScore|percentage|score/);
  const page = readFileSync(new URL('../src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx', import.meta.url), 'utf8');
  assert.ok(page.includes('localScoringRef.current'), 'AI drills carry their own answers');
  assert.ok(page.includes('submitAttemptAsLearner('));
});
