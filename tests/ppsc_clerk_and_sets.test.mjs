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

test('PPSC Clerk Mega Suite provides at least 6 disjoint 50-question trilingual sets (300+ questions)', () => {
  const megaPool = getBalancedOrderedPool({ examId: 'all', topicId: 'ppsc-clerk-mega' });
  assert.ok(megaPool.length >= 300, `Expected >= 300 questions in ppsc-clerk-mega, got ${megaPool.length}`);

  const seenIds = new Set();
  for (let setNum = 1; setNum <= 6; setNum++) {
    const setInfo = getOrderedSetQuestions({
      examId: 'all',
      topicId: 'ppsc-clerk-mega',
      setNumber: setNum,
      setSize: 50,
    });
    assert.equal(setInfo.setNumber, setNum);
    assert.equal(setInfo.questions.length, 50, `Set ${setNum} must have 50 questions`);

    for (const q of setInfo.questions) {
      assert.ok(!seenIds.has(q.id), `Duplicate question ${q.id} across PPSC Clerk sets`);
      seenIds.add(q.id);
      assert.ok(q.question.en && q.question.pa && q.question.hi, `Question ${q.id} missing en/pa/hi text`);
      assert.notEqual(q.question.pa, q.question.en, `Question ${q.id} in Set ${setNum} must have real Punjabi text`);
      for (const opt of ['A', 'B', 'C', 'D']) {
        assert.ok(q.options[opt].en && q.options[opt].pa && q.options[opt].hi, `Option ${opt} of ${q.id} missing en/pa/hi`);
      }
      assert.ok(q.explanation.en && q.explanation.pa && q.explanation.hi, `Explanation of ${q.id} missing en/pa/hi`);
    }
  }
});

test('Punjab GK & Compulsory Punjabi Mega Suite provides at least 5 disjoint 50-question trilingual sets (250+ questions)', () => {
  const megaPool = getBalancedOrderedPool({ examId: 'all', topicId: 'punjab-gk-punjabi-mega' });
  assert.ok(megaPool.length >= 250, `Expected >= 250 questions in punjab-gk-punjabi-mega, got ${megaPool.length}`);

  const seenIds = new Set();
  for (let setNum = 1; setNum <= 5; setNum++) {
    const setInfo = getOrderedSetQuestions({
      examId: 'all',
      topicId: 'punjab-gk-punjabi-mega',
      setNumber: setNum,
      setSize: 50,
    });
    assert.equal(setInfo.setNumber, setNum);
    assert.equal(setInfo.questions.length, 50, `Set ${setNum} must have 50 questions`);

    for (const q of setInfo.questions) {
      assert.ok(!seenIds.has(q.id), `Duplicate question ${q.id} across Punjab GK & Punjabi sets`);
      seenIds.add(q.id);
      assert.ok(q.question.en && q.question.pa && q.question.hi, `Question ${q.id} missing en/pa/hi text`);
      assert.notEqual(q.question.pa, q.question.en, `Question ${q.id} in Set ${setNum} must have real Punjabi text`);
    }
  }
});

test('All 38 Punjab Clerk syllabus topics are unlocked with lessons and >= 10 questions', () => {
  const clerk = getExamById('punjab-clerk');
  assert.ok(clerk, 'punjab-clerk exam must exist');

  const topics = clerk.subjects.flatMap(s => s.chapters.flatMap(c => c.topics));
  assert.ok(topics.length >= 38, `Expected >= 38 topics in punjab-clerk, got ${topics.length}`);

  for (const t of topics) {
    assert.notEqual(t.materialStatus, 'pending', `Clerk topic ${t.id} should not be pending`);
    const lesson = getLessonByTopicId(t.id);
    assert.ok(lesson && lesson.content?.en, `Clerk topic ${t.id} must have a lesson`);
    const pool = getQuestionPool({ examId: 'punjab-clerk', topicId: t.id });
    assert.ok(pool.length >= 10, `Clerk topic ${t.id} must have >= 10 questions, got ${pool.length}`);
  }
});
