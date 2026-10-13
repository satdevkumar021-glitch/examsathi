import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(source, dependencies = {}, globals = {}) {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL(source, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, require: name => dependencies[name], URL, JSON, Object, Array, String, RegExp, Map, Set, Date, Promise, Number, ...globals }, {});
  return exports;
}
const src = file => readFileSync(new URL(`../src/${file}`, import.meta.url), 'utf8');
const code = text => text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
const c = load('../src/lib/question-content.ts');

const good = () => ({
  question: { en: 'Capital of Punjab?', hi: 'पंजाब की राजधानी?' },
  options: { A: { en: 'Chandigarh' }, B: { en: 'Amritsar' }, C: { en: 'Ludhiana' }, D: { en: 'Patiala' } },
  correct: 'A',
  explanation: { en: 'Chandigarh is shared by Punjab and Haryana.' },
  difficulty: 'easy',
  examTag: 'Punjab GK',
});

test('a complete question validates and is normalised', () => {
  const r = c.validateQuestionData(good());
  assert.equal(r.ok, true);
  assert.equal(r.value.correct, 'A');
  assert.equal(r.value.difficulty, 'easy');
});

test('difficulty and exam tag default sensibly', () => {
  const d = good(); delete d.difficulty; delete d.examTag;
  const r = c.validateQuestionData(d);
  assert.equal(r.ok, true);
  assert.equal(r.value.difficulty, 'medium');
  assert.equal(r.value.examTag, 'Editorial');
});

test('incomplete or malformed questions are rejected with a reason', () => {
  const cases = {
    'no question text': d => { d.question = { en: '', hi: '' }; },
    'missing option': d => { delete d.options.C; },
    'blank option': d => { d.options.B = { en: '   ' }; },
    'duplicate options': d => { d.options.B = { en: 'chandigarh' }; },
    'bad key': d => { d.correct = 'E'; },
    'no key': d => { delete d.correct; },
    'no explanation': d => { d.explanation = {}; },
    'bad difficulty': d => { d.difficulty = 'impossible'; },
    'non-string text': d => { d.question = { en: 5 }; },
    'oversized question': d => { d.question = { en: 'x'.repeat(1001) }; },
    'oversized option': d => { d.options.A = { en: 'x'.repeat(301) }; },
    'array as options map': d => { d.options = []; },
  };
  for (const [name, mutate] of Object.entries(cases)) {
    const d = good(); mutate(d);
    const r = c.validateQuestionData(d);
    assert.equal(r.ok, false, name);
    assert.ok(r.message.length > 0, name);
  }
  for (const bad of [null, undefined, 'x', 5, []]) assert.equal(c.validateQuestionData(bad).ok, false);
});

test('unknown fields cannot smuggle data into a served question', () => {
  const d = good(); d.id = 'q-pun-2'; d.topicId = 'other'; d.year = 2024; d.pyqMetadata = { x: 1 };
  const q = c.buildQuestion('abc', 'punjab-history', c.validateQuestionData(d).value);
  assert.equal(q.id, 'cms-abc', 'ids are always namespaced');
  assert.equal(q.topicId, 'punjab-history', 'topic comes from the item, not the payload');
  assert.equal(q.year, undefined);
  assert.equal(q.pyqMetadata, undefined);
});

test('a built question has the full bank shape and never claims to be a past paper', () => {
  const q = c.buildQuestion('abc', 'punjab-history', c.validateQuestionData(good()).value);
  assert.equal(c.isEditorialQuestionId(q.id), true);
  assert.equal(c.isEditorialQuestionId('q-pun-2'), false);
  assert.equal(q.originType, 'authored-original');
  assert.equal(q.question.hi, 'पंजाब की राजधानी?');
  assert.equal(q.options.A.hi, 'Chandigarh', 'a missing language falls back to the other so the UI never shows blanks');
  assert.equal(q.options.A.en, 'Chandigarh');
  assert.equal(JSON.stringify([...q.availableLanguages].sort()), JSON.stringify(['en']), 'only languages present on every option are advertised');
});

test('text is trimmed and Punjabi is kept when supplied', () => {
  const d = good(); d.question.pa = '  ਪੰਜਾਬ ਦੀ ਰਾਜਧਾਨੀ?  ';
  const q = c.buildQuestion('abc', 't', c.validateQuestionData(d).value);
  assert.equal(q.question.pa, 'ਪੰਜਾਬ ਦੀ ਰਾਜਧਾਨੀ?');
});

// ---- editorial store behaviour -------------------------------------------------

function makeStore({ rows, failing = false, now = { t: 1_000_000 } }) {
  let calls = 0;
  const state = { rows, failing };
  const db = {
    from: () => ({
      select: () => ({ eq: () => ({ eq: () => ({ order: () => ({ limit: async () => { calls++; return state.failing ? { data: null, error: { message: 'down' } } : { data: state.rows, error: null }; } }) }) }) }),
    }),
  };
  const content = load('../src/lib/question-content.ts');
  const clock = { Date: { now: () => now.t } };
  const mem = load('../src/lib/editorial-store.ts', { 'server-only': {} }, clock);
  const loader = load('../src/lib/editorial-loader.ts', {
    'server-only': {},
    './question-content': content,
    './editorial-store': mem,
    './server-auth': { serviceClient: () => db },
  }, clock);
  const store = { ...mem, ...loader };
  return { store, state, now, calls: () => calls };
}
const row = (id, topic = 'punjab-history', data = good()) => ({ id, topic_id: topic, data });

test('published questions load, resolve by id and are exposed to the pool', async () => {
  const { store } = makeStore({ rows: [row('a'), row('b', 'modern-india')] });
  assert.equal(store.editorialQuestions().length, 0, 'nothing before the first load');
  await store.refreshEditorial();
  assert.equal(JSON.stringify(store.editorialQuestions().map(q => q.id)), JSON.stringify(['cms-a', 'cms-b']));
  assert.equal(store.editorialQuestion('cms-b').topicId, 'modern-india');
  assert.equal(store.editorialQuestion('cms-zzz'), undefined);
});

test('reads are cached for the TTL and reload after it', async () => {
  const h = makeStore({ rows: [row('a')] });
  await h.store.refreshEditorial(); await h.store.refreshEditorial(); await h.store.refreshEditorial();
  assert.equal(h.calls(), 1);
  h.now.t += 61_000;
  await h.store.refreshEditorial();
  assert.equal(h.calls(), 2);
});

test('invalidate forces an immediate reload and a new version', async () => {
  const h = makeStore({ rows: [row('a')] });
  await h.store.refreshEditorial();
  const v1 = h.store.editorialVersion();
  h.state.rows = [row('a'), row('b')];
  h.store.invalidateEditorial();
  await h.store.refreshEditorial();
  assert.equal(h.store.editorialQuestions().length, 2);
  assert.ok(h.store.editorialVersion() > v1);
});

test('an unchanged reload does not bump the version, so caches stay warm', async () => {
  const h = makeStore({ rows: [row('a')] });
  await h.store.refreshEditorial();
  const v = h.store.editorialVersion();
  h.store.invalidateEditorial();
  await h.store.refreshEditorial();
  assert.equal(h.store.editorialVersion(), v);
});

test('concurrent requests share one database load', async () => {
  const h = makeStore({ rows: [row('a')] });
  await Promise.all([1, 2, 3, 4, 5].map(() => h.store.refreshEditorial()));
  assert.equal(h.calls(), 1);
});

test('malformed rows are skipped, never served', async () => {
  const bad = row('bad', 'punjab-history', { question: { en: 'x' } });
  const { store } = makeStore({ rows: [bad, row('ok')] });
  await store.refreshEditorial();
  assert.equal(JSON.stringify(store.editorialQuestions().map(q => q.id)), JSON.stringify(['cms-ok']));
});

test('a database outage keeps serving the last good copy', async () => {
  const h = makeStore({ rows: [row('a')] });
  await h.store.refreshEditorial();
  h.state.failing = true;
  h.now.t += 61_000;
  await h.store.refreshEditorial();
  assert.equal(JSON.stringify(h.store.editorialQuestions().map(q => q.id)), JSON.stringify(['cms-a']));
});

test('an unpublished question leaves the pool but stays gradable for a day, then disappears', async () => {
  const h = makeStore({ rows: [row('a'), row('b')] });
  await h.store.refreshEditorial();
  h.state.rows = [row('b')];
  h.store.invalidateEditorial();
  await h.store.refreshEditorial();
  assert.equal(JSON.stringify(h.store.editorialQuestions().map(q => q.id)), JSON.stringify(['cms-b']), 'no longer served to new learners');
  assert.equal(h.store.editorialQuestion('cms-a')?.correct, 'A', 'a learner mid-test can still be graded');
  h.now.t += 25 * 60 * 60 * 1000;
  assert.equal(h.store.editorialQuestion('cms-a'), undefined, 'expires after the grace window');
});

test('with no database configured the store is simply empty', async () => {
  const content = load('../src/lib/question-content.ts');
  const mem = load('../src/lib/editorial-store.ts', { 'server-only': {} });
  const store = { ...mem, ...load('../src/lib/editorial-loader.ts', { 'server-only': {}, './question-content': content, './editorial-store': mem, './server-auth': { serviceClient: () => null } }) };
  await store.refreshEditorial();
  assert.equal(store.editorialQuestions().length, 0);
});

// ---- wiring ---------------------------------------------------------------------

test('every question route refreshes editorial content before reading the bank', () => {
  for (const file of ['set', 'reveal', 'count', 'lookup', 'manifest']) {
    assert.ok(code(src(`app/api/questions/${file}/route.ts`)).includes('editorial: true'), file);
  }
  assert.ok(code(src('app/api/attempts/route.ts')).includes('editorial: true'), 'attempts must grade against the same bank');
  assert.ok(code(src('app/api/questions/daily/route.ts')).includes('refreshEditorial()'));
  assert.ok(code(src('lib/api-route.ts')).includes('await refreshEditorial()'));
});

test('the bank, lookup and caches all include editorial content', () => {
  assert.ok(code(src('lib/data/question_bank_engine.ts')).includes('...editorialQuestions()'));
  const service = code(src('lib/question-service.ts'));
  assert.ok(service.includes('editorialQuestion(id)'));
  assert.ok(service.includes('countCache.clear()') && service.includes('manifestCache.clear()'));
});

test('the admin API validates questions on create and invalidates on every publish change', () => {
  const route = code(src('app/api/admin/content/route.ts'));
  assert.ok(route.includes('validateQuestionData(item.data)'));
  assert.equal((route.match(/invalidateEditorial\(\)/g) || []).length, 3, 'create-as-published, transition, delete');
});

test('editorial questions never reach the browser with answers', () => {
  const service = code(src('lib/question-service.ts'));
  assert.ok(service.includes('questions.map(toPublic)'), 'sets are stripped');
  // the store is server-only, so the bundle cannot include it
  assert.ok(src('lib/editorial-store.ts').startsWith("import 'server-only'"));
  assert.ok(src('lib/editorial-loader.ts').startsWith("import 'server-only'"));
  assert.ok(!/from '\.\/server-auth'|supabase/i.test(code(src('lib/editorial-store.ts'))), 'the engine-facing store must stay dependency-free');
});

test('a Punjabi-only option set is valid and served in Punjabi with Hindi/English filled from it', () => {
  const data = { ...good(), question: { pa: 'x', hi: 'पंजाब?' }, options: { A: { hi: 'चंडीगढ़', pa: 'ਚੰਡੀਗੜ੍ਹ' }, B: { hi: 'अमृतसर', pa: 'ਅੰਮ੍ਰਿਤਸਰ' }, C: { hi: 'लुधियाना', pa: 'ਲੁਧਿਆਣਾ' }, D: { hi: 'पटियाला', pa: 'ਪਟਿਆਲਾ' } } };
  const r = c.validateQuestionData(data);
  assert.equal(r.ok, true, r.message);
  const q = c.buildQuestion('abc', 'topic', r.value);
  assert.equal(q.options.A.pa, 'ਚੰਡੀਗੜ੍ਹ');
  assert.equal(q.options.A.en, 'चंडीगढ़', 'missing English falls back to Hindi');
});

test('an option with only Punjabi text is rejected (English or Hindi is required)', () => {
  const data = { ...good(), options: { ...good().options, B: { pa: 'ਅੰਮ੍ਰਿਤਸਰ' } } };
  assert.equal(c.validateQuestionData(data).ok, false);
});

test('the edit form never collapses text that differs by language', () => {
  const page = src('app/(dashboard)/admin/page.tsx');
  assert.ok(page.includes('const differs ='), 'edit decides between single and per-language view');
  assert.match(page, /!!t\.pa \|\| \(!!t\.hi && t\.en !== t\.hi\)/, 'Punjabi, Hindi-only or differing text opens the per-language view');
  assert.ok(page.includes('updateContent('), 'saving an edit calls the PUT API');
});
