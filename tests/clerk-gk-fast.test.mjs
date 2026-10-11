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



const {CLERK_GK_FAST_QUESTIONS: qs}=load('src/lib/data/clerk-gk-fast.ts');
const {getQuestionPool,questionIdentity}=load('src/lib/data/question_bank_engine.ts');
test('Urgent GK set contains exactly 100 unique original questions across five subjects',()=>{
 assert.equal(qs.length,100);assert.equal(new Set(qs.map(q=>q.id)).size,100);assert.equal(new Set(qs.map(questionIdentity)).size,100);
 const counts={};for(const q of qs){counts[q.subtopic.en]=(counts[q.subtopic.en]||0)+1;
 assert.equal(new Set(Object.values(q.options).map(o=>o.en)).size,4);
 assert.ok(q.options[q.correct]);assert.ok(q.explanation.en.length>25);assert.equal(q.year,undefined);assert.equal(q.editorialStatus,'authored');assert.deepEqual(Array.from(q.availableLanguages),['en']);}
 assert.deepEqual(Object.values(counts),[20,20,20,20,20]);
});
test('Clerk GK launches exactly its own 100-question pool; history exclusions exhaust it',()=>{
 const pool=getQuestionPool({examId:'punjab-clerk',topicId:'clerk-gk-fast-practice'});assert.equal(pool.length,100);
 assert.equal(getQuestionPool({examId:'punjab-ett',topicId:'clerk-gk-fast-practice'}).length,0);
 assert.equal(getQuestionPool({examId:'punjab-clerk',topicId:'clerk-gk-fast-practice',excludeKeys:pool.map(questionIdentity)}).length,0);
});
