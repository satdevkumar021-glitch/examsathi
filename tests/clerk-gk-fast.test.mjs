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
 assert.ok(q.options[q.correct]);assert.ok(q.explanation.en.length>25);assert.equal(q.year,undefined);assert.equal(q.editorialStatus,'authored');assert.deepEqual(Array.from(q.availableLanguages),['en','hi','pa']);}
 assert.deepEqual(Object.values(counts),[20,20,20,20,20]);
});
test('Clerk GK launches exactly its own 100-question pool; history exclusions exhaust it',()=>{
 const pool=getQuestionPool({examId:'punjab-clerk',topicId:'clerk-gk-fast-practice'});assert.equal(pool.length,100);
 assert.equal(getQuestionPool({examId:'punjab-ett',topicId:'clerk-gk-fast-practice'}).length,0);
 assert.equal(getQuestionPool({examId:'punjab-clerk',topicId:'clerk-gk-fast-practice',excludeKeys:pool.map(questionIdentity)}).length,0);
});
test('Five GK topic tests contain 20 disjoint questions and preserve exam scope',()=>{
 const topics=['gk-polity-foundation','gk-history-foundation','gk-geography-foundation','gk-science-foundation','gk-punjab-foundation'];
 const ids=[];
 for(const topicId of topics){const pool=getQuestionPool({examId:'punjab-clerk',topicId});assert.equal(pool.length,20);assert.ok(pool.every(q=>q.topicId===topicId));ids.push(...pool.map(q=>q.id));assert.equal(getQuestionPool({examId:'punjab-ett',topicId}).length,0);}
 assert.equal(new Set(ids).size,100);
});

test('Every GK prompt, option and explanation has real Hindi and Punjabi text',()=>{
 for(const q of qs) for(const lang of ['hi','pa']) {
  const script=lang==='hi'?/[\u0900-\u097f]/:/[\u0a00-\u0a7f]/;
  for(const value of [q.question,...Object.values(q.options),q.explanation]) {assert.ok(value[lang]?.trim()); if(!/^(?:[A-Z][a-z]?\d*)+$/.test(value.en) && /[a-z]{3}/i.test(value.en))assert.match(value[lang],script);}
  assert.equal(new Set(Object.values(q.options).map(option=>option[lang])).size,4);
 }
});
const {clerkRevisionSet,CLERK_EXTRA_QUESTIONS}=load('src/lib/data/clerk-revision-sets.ts');
test('Numbered Clerk revision sets contain exactly200 unique questions with no set overlap',()=>{
 const sets=[1,2,3,4].map(clerkRevisionSet);assert.ok(sets.every(set=>set.length===50));
 const all=sets.flat();assert.equal(new Set(all.map(q=>q.id)).size,200);assert.equal(new Set(all.map(questionIdentity)).size,200);
 assert.equal(clerkRevisionSet(0).length,0);assert.equal(clerkRevisionSet(5).length,0);assert.equal(clerkRevisionSet(1.5).length,0);
 const topicIds=['gk-polity-foundation','gk-history-foundation','gk-geography-foundation','gk-science-foundation','gk-punjab-foundation','clerk-revision-reasoning','clerk-revision-computer','clerk-revision-punjabi','clerk-revision-english'];
 for(const set of sets)for(const id of topicIds)assert.ok(set.some(q=>q.topicId===id),`set omits ${id}`);
 assert.equal(getQuestionPool({examId:'punjab-clerk',topicId:'clerk-revision-200'}).length,200);
 assert.equal(getQuestionPool({examId:'punjab-ett',topicId:'clerk-revision-200'}).length,0);
 for(const q of CLERK_EXTRA_QUESTIONS) for(const lang of ['en','hi','pa']){assert.ok(q.question[lang].trim());assert.ok(q.explanation[lang].trim());assert.equal(new Set(Object.values(q.options).map(o=>o[lang])).size,4);assert.ok(q.options[q.correct][lang]);}
});
