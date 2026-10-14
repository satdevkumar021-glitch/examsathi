import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const cache = new Map();
const local = new Map();
const window = {
  localStorage: {
    getItem: key => local.get(key) ?? null,
    setItem: (key, value) => local.set(key, value),
    removeItem: key => local.delete(key),
  },
  dispatchEvent() {},
};

function load(file) {
  file = path.resolve(file);
  if (!path.extname(file)) file += '.ts';
  if (file.endsWith('.json')) return { default: JSON.parse(readFileSync(file, 'utf8')) };
  if (cache.has(file)) return cache.get(file).exports;
  const loaded = { exports: {} };
  cache.set(file, loaded);
  const js = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(js, {
    module: loaded,
    exports: loaded.exports,
    require: name => load(name.startsWith('@/') ? path.resolve('src', name.slice(2)) : path.resolve(path.dirname(file), name)),
    window,
    Event: class Event {},
    Date,
    Math,
    Set,
    Map,
    process,
    console,
  });
  return loaded.exports;
}

const {
  getBalancedOrderedPool,
  getOrderedSetQuestions,
  getQuestionPool,
} = load('src/lib/data/question_bank_engine.ts');
const { getExamById } = load('src/lib/data/exams.ts');
const { getLessonByTopicId } = load('src/lib/data/lessons.ts');

test('Ordered sets retain explicit exam and topic scope', () => {
  for (const config of [
    { examId: 'punjab-ett', topicId: 'psssb-computer-it' },
    { examId: 'punjab-ett', topicId: 'clerk-gk-fast-practice' },
    { examId: 'punjab-clerk', topicId: 'world-history' },
  ]) {
    assert.equal(getQuestionPool(config).length, 0);
    assert.equal(getOrderedSetQuestions({ ...config, count: 10 }).questions.length, 0);
  }
});

test('Ordered sets retain historic and difficulty filters without empty-pool fallback', () => {
  const config = { examId: 'punjab-clerk', topicId: 'clerk-gk-fast-practice', pyqOnly: true, difficulty: 'hard' };
  assert.equal(getQuestionPool(config).length, 0);
  assert.equal(getOrderedSetQuestions({ ...config, count: 10 }).questions.length, 0);
});

test('Numbered sets after the last available set report exhaustion instead of wrapping', () => {
  const config = { examId: 'punjab-clerk', topicId: 'ppsc-clerk-mega', count: 50 };
  const first = getOrderedSetQuestions({ ...config, setNumber: 1 });
  assert.ok(first.questions.length > 0);
  const exhausted = getOrderedSetQuestions({ ...config, setNumber: first.totalSets + 1 });
  assert.equal(exhausted.setNumber, first.totalSets + 1);
  assert.equal(exhausted.totalSets, first.totalSets);
  assert.equal(exhausted.totalPoolCount, first.totalPoolCount);
  assert.equal(exhausted.questions.length, 0);
});
