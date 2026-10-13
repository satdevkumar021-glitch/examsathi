import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(source) {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL(source, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, Object, Array, Set, Map, Math, Number, Date, JSON, parseFloat });
  return exports;
}

const { computeInsights, dayKey, streakFromDays } = load('../src/lib/learner-insights.ts');
const TZ = 330; // IST: UTC+5:30

const day = (daysBack = 0) => new Date(Date.now() - daysBack * 86400000).toISOString();

const attempt = (daysBack, examId = 'punjab-clerk', total = 50, correct = 25, topics = []) => ({
  exam_id: examId,
  created_at: day(daysBack),
  total,
  correct,
  topic_breakdown: topics,
});

test('dayKey rounds to IST calendar day', () => {
  const utcMidnight = new Date('2025-07-04T18:30:00Z').getTime(); // 00:00 IST on 2025-07-05
  assert.equal(dayKey(utcMidnight, 330), '2025-07-05');
});

test('streakFromDays counts today as day 1', () => {
  const today = dayKey(Date.now(), TZ);
  assert.equal(streakFromDays([today], today), 1);
});

test('streakFromDays handles an unbroken multi-day run', () => {
  const today = dayKey(Date.now(), TZ);
  const yesterday = dayKey(Date.now() - 86400000, TZ);
  const twoDaysAgo = dayKey(Date.now() - 86400000 * 2, TZ);
  assert.equal(streakFromDays([today, yesterday, twoDaysAgo], today), 3);
});

test('streakFromDays keeps a gap from breaking a run', () => {
  const today = dayKey(Date.now(), TZ);
  const twoDaysAgo = dayKey(Date.now() - 86400000 * 2, TZ);
  assert.equal(streakFromDays([today, twoDaysAgo], today), 1);
});

test('streakFromDays counts yesterday as alive when not yet practised today', () => {
  const yesterday = dayKey(Date.now() - 86400000, TZ);
  const twoDaysAgo = dayKey(Date.now() - 86400000 * 2, TZ);
  const today = dayKey(Date.now(), TZ);
  assert.equal(streakFromDays([yesterday, twoDaysAgo], today), 2);
});

test('computeInsights returns zeros for empty history', () => {
  const r = computeInsights([], Date.now(), TZ);
  assert.equal(r.streak, 0);
  assert.equal(r.attempts, 0);
  assert.equal(r.weakTopics.length, 0);
});

test('computeInsights computes streak from attempt timestamps', () => {
  const rows = [attempt(0), attempt(1), attempt(2)];
  const { streak } = computeInsights(rows, Date.now(), TZ);
  assert.equal(streak, 3);
});

test('practisedToday is true when there is an attempt today', () => {
  const { practisedToday } = computeInsights([attempt(0)], Date.now(), TZ);
  assert.equal(practisedToday, true);
});

test('practisedToday is false when last attempt was yesterday', () => {
  const { practisedToday } = computeInsights([attempt(1)], Date.now(), TZ);
  assert.equal(practisedToday, false);
});

test('computeInsights identifies weak topics from topic_breakdown', () => {
  const topics = [
    { topicId: 'punjab-history', total: 10, correct: 2, wrong: 8 },
    { topicId: 'general-science', total: 10, correct: 9, wrong: 1 },
  ];
  const { weakTopics } = computeInsights([attempt(0, 'punjab-clerk', 20, 11, topics)], Date.now(), TZ);
  assert.equal(weakTopics.length, 1);
  assert.equal(weakTopics[0].topicId, 'punjab-history');
  assert.equal(weakTopics[0].accuracy, 20);
});

test('computeInsights ignores non-practisable topic ids', () => {
  const topics = [{ topicId: 'general', total: 10, correct: 2, wrong: 8 }];
  const { weakTopics } = computeInsights([attempt(0, 'punjab-clerk', 10, 2, topics)], Date.now(), TZ);
  assert.equal(weakTopics.length, 0);
});

test('computeInsights requires MIN_QUESTIONS for a weak-topic entry', () => {
  const topics = [{ topicId: 'polity', total: 4, correct: 0, wrong: 4 }];
  const { weakTopics } = computeInsights([attempt(0, 'punjab-clerk', 4, 0, topics)], Date.now(), TZ);
  assert.equal(weakTopics.length, 0);
});

test('computeInsights merges the same topic across multiple attempts', () => {
  const topicA = [{ topicId: 'polity', total: 5, correct: 1, wrong: 4 }];
  const topicB = [{ topicId: 'polity', total: 5, correct: 1, wrong: 4 }];
  const rows = [attempt(0, 'punjab-clerk', 5, 1, topicA), attempt(1, 'punjab-clerk', 5, 1, topicB)];
  const { weakTopics } = computeInsights(rows, Date.now(), TZ);
  assert.equal(weakTopics.length, 1);
  assert.equal(weakTopics[0].total, 10);
});

test('accuracy is overall correct / questionsAnswered', () => {
  const rows = [attempt(0, 'e', 10, 7)];
  const { accuracy } = computeInsights(rows, Date.now(), TZ);
  assert.equal(accuracy, 70);
});
