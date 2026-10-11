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


const { CLERK_DATA_PRACTICE: questions } = load('src/lib/data/clerk-data-practice.ts');
const { CLERK_DATA_LESSONS } = load('src/lib/data/lessons/clerk-data-analysis.ts');
const { getExamById } = load('src/lib/data/exams.ts');
const { getQuestionPool } = load('src/lib/data/question_bank_engine.ts');

test('Clerk data exercises have correct independent arithmetic and distinct choices', () => {
  assert.equal(questions.length, 50);
  assert.equal(new Set(questions.map(q => q.id)).size, 50);
  assert.equal(new Set(questions.map(q => q.question.en)).size, 50);
  for (const q of questions) {
    const [, p, r, s] = q.question.en.match(/P = (\d+), Q = (\d+), R = (\d+)/);
    const [a,b,c] = [p,r,s].map(Number);
    const answers = { total:a+b+c, difference:c-b, mean:(a+b+c)/3, share:c/(a+b+c)*100, change:(b-a)/a*100 };
    assert.equal(Number(q.options[q.correct].en), answers[q.learningObjective], q.id);
    assert.equal(new Set(Object.values(q.options).map(o => o.en)).size, 4, q.id);
    assert.equal(q.originType, 'computed-variant');
    assert.equal(q.reviewStatus, 'draft');
    assert.equal(q.year, undefined);
    for (const language of ['en','hi','pa']) {
      assert.ok(q.question[language]); assert.ok(q.explanation[language]);
      for (const key of ['A','B','C','D']) assert.ok(q.distractorExplanations[key][language]);
    }
  }
});

test('Clerk exposes all major subject paths without duplicate topic IDs', () => {
  const exam = getExamById('punjab-clerk');
  assert.equal(exam.syllabusStatus, 'provisional-archive');
  const ids = exam.subjects.flatMap(s => s.chapters.flatMap(c => c.topics.map(t => t.id)));
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ['constitution','ssc-cgl-reasoning','quantitative-aptitude','english-grammar-lit','punjabi-grammar','computer-awareness','punjab-history','clerk-data-analysis']) assert.ok(ids.includes(id), id);
});

test('Data practice is reachable for Clerk and never leaks into an unrelated ETT topic', () => {
  const clerk = getQuestionPool({examId:'punjab-clerk',topicId:'clerk-data-analysis'});
  assert.equal(clerk.length, 50);
  assert.ok(clerk.every(q => q.topicId === 'clerk-data-analysis'));
  assert.equal(getQuestionPool({examId:'punjab-ett',topicId:'clerk-data-analysis'}).length, 0);
  const excluded = getQuestionPool({examId:'punjab-clerk',topicId:'clerk-data-analysis',excludeKeys:clerk.map(q => q.id)});
  assert.equal(excluded.length, 0);
  assert.equal(CLERK_DATA_LESSONS['clerk-data-analysis'].coverageStatus,'foundation');
});
