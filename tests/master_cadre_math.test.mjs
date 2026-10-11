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

const exams = load('src/lib/data/exams.ts');
const lessons = load('src/lib/data/lessons.ts');
const engine = load('src/lib/data/question_bank_engine.ts');
const questions = load('src/lib/data/questions.ts');

const EXPECTED_MATH_TOPICS = [
  'math-matrices-linear-algebra',
  'math-abstract-algebra-groups',
  'math-differential-calculus',
  'math-integral-calculus',
  'math-differential-equations',
  'math-coordinate-geometry-3d',
  'math-vector-mechanics',
  'math-prob-stats-distributions'
];

test('Master Cadre Math has granular syllabus hierarchy with 8 degree-level topics', () => {
  const mathExam = exams.ALL_EXAMS.punjab.find(e => e.id === 'punjab-master-cadre-math');
  assert.ok(mathExam, 'punjab-master-cadre-math must exist in ALL_EXAMS.punjab');
  assert.equal(mathExam.totalMarks, 150);
  assert.equal(mathExam.sections.length, 2);
  assert.equal(mathExam.sections[0].qualifying, true);
  assert.equal(mathExam.sections[1].marks, 150);

  const mathSubject = mathExam.subjects.find(s => s.id === 'mathematics');
  assert.ok(mathSubject, 'Mathematics subject must exist');
  
  const allTopicIds = mathSubject.chapters.flatMap(c => c.topics.map(t => t.id));
  for (const expectedId of EXPECTED_MATH_TOPICS) {
    assert.ok(allTopicIds.includes(expectedId), `Topic ${expectedId} must be present in syllabus`);
  }
});

test('Master Cadre Math topics have complete B->I->A trilingual lessons with flashcards', () => {
  for (const topicId of EXPECTED_MATH_TOPICS) {
    const lesson = lessons.getLessonByTopicId(topicId);
    assert.ok(lesson, `Lesson for ${topicId} must exist`);
    assert.ok(lesson.content.en.length > 200, `English content for ${topicId} must be comprehensive`);
    assert.ok(lesson.content.pa && lesson.content.pa.length > 100, `Punjabi Gurmukhi content for ${topicId} must exist`);
    assert.ok(lesson.content.hi && lesson.content.hi.length > 100, `Hindi content for ${topicId} must exist`);
    assert.ok(lesson.flashcards && lesson.flashcards.length >= 1, `Flashcards for ${topicId} must exist`);
  }
});

test('Master Cadre Math questions are properly tagged and isolated from SST and Science', () => {
  const mathPool = engine.getQuestionPool({ examId: 'punjab-master-cadre-math' });
  assert.ok(mathPool.length >= 50, `Math pool must have >= 50 questions, found ${mathPool.length}`);

  const sstPool = engine.getQuestionPool({ examId: 'punjab-master-cadre-sst' });
  const sciencePool = engine.getQuestionPool({ examId: 'punjab-master-cadre-science' });

  const mathQuestionIds = new Set(mathPool.map(q => q.id));
  const sstQuestionIds = new Set(sstPool.map(q => q.id));
  const scienceQuestionIds = new Set(sciencePool.map(q => q.id));

  // Pure mathematics questions (q-mc-math-*) must not be present in SST or Science pools
  for (const q of mathPool) {
    if (q.id.startsWith('q-mc-math-')) {
      assert.ok(!sstQuestionIds.has(q.id), `Math question ${q.id} must not be in SST pool`);
      assert.ok(!scienceQuestionIds.has(q.id), `Math question ${q.id} must not be in Science pool`);
    }
  }

  // SST and Science questions must not be in Math pool
  for (const q of sstPool) {
    if (q.id.startsWith('q-mc-polity-') || q.id.startsWith('q-mc-econ-')) {
      assert.ok(!mathQuestionIds.has(q.id), `SST question ${q.id} must not be in Math pool`);
    }
  }
});
