import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(source) {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL(source, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, Object, Array, Set, Map, Math, Number, JSON });
  return exports;
}
const { analyzeQuestions, buildReport, severity, MIN_ANSWERS } = load('../src/lib/question-quality.ts');

// Deterministic generator so the simulated cohorts never flake.
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const LETTERS = ['A', 'B', 'C', 'D'];

/**
 * Simulates `learners` learners with ability in 0..1 taking one test of the given items.
 * An item has { id, key (what the server grades by), truth (what knowledgeable learners actually believe is right), p(ability) -> chance of picking truth }.
 */
function simulate(items, learners, seed = 7) {
  const rand = rng(seed);
  const attempts = [];
  for (let i = 0; i < learners; i++) {
    const ability = rand();
    const answers = {};
    let correct = 0;
    for (const item of items) {
      const knows = rand() < item.pKnow(ability);
      const wrongs = LETTERS.filter(l => l !== item.truth);
      const pick = knows ? item.truth : wrongs[Math.floor(rand() * wrongs.length)];
      answers[item.id] = pick;
      if (pick === item.key) correct++;
    }
    attempts.push({ total: items.length, correct, answers });
  }
  return attempts;
}

const item = (id, over = {}) => ({ id, key: 'A', truth: 'A', difficulty: 'medium', topicId: 'polity', pKnow: ab => 0.25 + 0.7 * ab, ...over });
// 40 good filler questions so each learner's "rest" score has a real signal.
const filler = Array.from({ length: 40 }, (_, i) => item(`ok-${i}`, { key: LETTERS[i % 4], truth: LETTERS[i % 4] }));
const lookupFor = items => id => { const it = items.find(x => x.id === id); return it && { correct: it.key, difficulty: it.difficulty, topicId: it.topicId }; };
const run = (extra, learners = 400) => {
  const items = [...filler, ...extra];
  return analyzeQuestions(simulate(items, learners), lookupFor(items));
};
const byId = (stats, id) => stats.find(s => s.id === id);

test('a sound question is not flagged and discriminates positively', () => {
  const s = byId(run([item('sound')]), 'sound');
  assert.deepEqual([...s.flags], []);
  assert.ok(s.discrimination > 0.3, `discrimination ${s.discrimination}`);
  assert.ok(s.pCorrect > 0.4 && s.pCorrect < 0.9);
});

test('a wrongly keyed question is caught: strong learners pick another option', () => {
  // Knowledgeable learners believe C; the key says A.
  const s = byId(run([item('badkey', { key: 'A', truth: 'C' })]), 'badkey');
  assert.ok(s.flags.includes('key-suspect'), JSON.stringify(s));
  assert.ok(s.upperCounts.C > s.upperCounts.A);
  assert.ok(s.discrimination < 0);
});

test('a question nobody can answer is flagged too-hard', () => {
  const s = byId(run([item('impossible', { pKnow: () => 0 , truth: 'A'})]), 'impossible');
  assert.ok(s.flags.includes('too-hard'), JSON.stringify(s));
});

test('a question everybody answers is flagged too-easy', () => {
  const s = byId(run([item('trivial', { pKnow: () => 1 })]), 'trivial');
  assert.ok(s.flags.includes('too-easy'), JSON.stringify(s));
});

test('a question labelled easy that most learners miss is a difficulty mismatch', () => {
  const s = byId(run([item('mislabel', { difficulty: 'easy', pKnow: ab => 0.05 + 0.3 * ab })]), 'mislabel');
  assert.ok(s.flags.includes('difficulty-mismatch'), JSON.stringify(s));
});

test('a question that is answered at random does not discriminate and is not called a bad key', () => {
  const s = byId(run([item('noise', { pKnow: () => 0.25 })]), 'noise');
  assert.ok(Math.abs(s.discrimination) < 0.25);
  assert.ok(!s.flags.includes('key-suspect'));
});

test('too few answers: statistics are reported but nothing is flagged', () => {
  const stats = run([item('thin', { key: 'A', truth: 'C' })], MIN_ANSWERS - 5);
  const s = byId(stats, 'thin');
  assert.equal(s.n, MIN_ANSWERS - 5);
  assert.deepEqual([...s.flags], []);
});

test('very small groups give no discrimination figure', () => {
  const s = byId(run([item('tiny')], 20), 'tiny');
  assert.equal(s.discrimination, null);
});

test('each item is graded against the rest, not itself', () => {
  // One learner got every question right and one got none: with total=2 the rest score is the other question only.
  const a = [{ total: 2, correct: 2, answers: { q1: 'A', q2: 'A' } }];
  const stats = analyzeQuestions(a, () => ({ correct: 'A', difficulty: 'medium', topicId: 't' }));
  assert.equal(stats.length, 2);
  assert.equal(stats[0].pCorrect, 1);
});

test('malformed and unknown data is ignored, never thrown on', () => {
  const stats = analyzeQuestions([
    { total: 0, correct: 0, answers: { q1: 'A' } },
    { total: 5, correct: 9, answers: { q1: 'A' } },
    { total: 5, correct: 2, answers: { q1: 'Z', ghost: 'A', q2: 'B' } },
  ], id => (id === 'ghost' ? undefined : { correct: 'B', difficulty: 'easy', topicId: 't' }));
  assert.ok(stats.length === 1 && stats[0].id === 'q2', 'expected [q2] got ' + stats.map(s=>s.id));
  assert.equal(stats[0].n, 1);
});

test('the report orders worst first and counts each flag', () => {
  const stats = run([item('badkey', { truth: 'C' }), item('trivial', { pKnow: () => 1 }), item('impossible', { pKnow: () => 0 }), item('sound')]);
  const report = buildReport(stats);
  assert.equal(report.analysed, 44);
  assert.ok(report.items.every(i => i.flags.length > 0));
  assert.ok(!report.items.some(i => i.id === 'sound'));
  const order = report.items.map(severity);
  for(let i=1;i<order.length;i++) assert.ok(order[i-1]>=order[i], `severity dropped at ${i}: ${order}`);
  assert.equal(report.items[0].id, 'badkey');
  assert.ok(report.byFlag['key-suspect'] >= 1 && report.byFlag['too-easy'] >= 1 && report.byFlag['too-hard'] >= 1);
});

test('the report is capped', () => {
  const stats = run(Array.from({ length: 12 }, (_, i) => item(`easy-${i}`, { pKnow: () => 1 })));
  assert.equal(buildReport(stats, 5).items.length, 5);
  assert.equal(buildReport(stats, 5).flagged, 12);
});

test('false positives stay rare on a healthy test', () => {
  const stats = analyzeQuestions(simulate(filler, 600, 99), lookupFor(filler));
  const flagged = stats.filter(s => s.flags.includes('key-suspect') || s.flags.includes('negative-discrimination'));
  assert.equal(flagged.length, 0, flagged.map(s => s.id).join(','));
});

test('measured error rates stay within bounds (guards the key-suspect threshold)', () => {
  const rate = (extra, learners, pred, runs = 60) => {
    let hits = 0;
    for (let s = 1; s <= runs; s++) {
      const items = [...filler, ...extra];
      const stat = analyzeQuestions(simulate(items, learners, s * 7919), lookupFor(items)).find(x => x.id === 'probe');
      if (pred(stat)) hits++;
    }
    return hits / runs;
  };
  const suspect = s => s.flags.includes('key-suspect');
  // A question answered at random must almost never be called a bad key, even with only 100 learners.
  assert.ok(rate([item('probe', { pKnow: () => 0.25 })], 100, suspect) <= 0.06, 'noise false-positive rate');
  assert.equal(rate([item('probe')], 100, suspect), 0, 'sound question never called a bad key');
  // A clearly wrong key must be caught at a realistic sample size.
  assert.ok(rate([item('probe', { truth: 'C' })], 200, s => suspect(s) || s.flags.includes('negative-discrimination')) >= 0.95, 'bad key recall');
});
