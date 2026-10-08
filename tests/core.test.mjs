import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
const cache = new Map();
const local = new Map();
const window = { localStorage: { getItem: key => local.get(key) ?? null, setItem: (key, value) => local.set(key, value), removeItem: key => local.delete(key) }, dispatchEvent() {} };
function load(file) {
  file = path.resolve(file); if (!path.extname(file)) file += '.ts';
  if (file.endsWith('.json')) return { default: JSON.parse(readFileSync(file,'utf8')) };
  if (cache.has(file)) return cache.get(file).exports;
  const loaded = { exports: {} }; cache.set(file, loaded);
  const js = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { module: loaded, exports: loaded.exports, require: name => load(name.startsWith('@/') ? path.resolve('src', name.slice(2)) : path.resolve(path.dirname(file), name)), window, Event: class Event {}, Date, Math, Set, Map, process, console });
  return loaded.exports;
}
const engine = load('src/lib/data/question_bank_engine.ts');
const lessons = load('src/lib/data/lessons.ts');
const bank = load('src/lib/data/questions.ts');
const scope = load('src/lib/data/topic-scope.ts');
const canonical = scope.canonicalTopicId;
test('all exam filters stay strict across difficulties and PYQ windows', () => {
  for (const exam of engine.AVAILABLE_EXAMS) for (const difficulty of ['easy', 'medium', 'hard']) for (const pyq20Years of [false, true]) {
    const questions = engine.getTestQuestions({ examId: exam.id, difficulty, pyq20Years, count: 50 });
    assert.ok(questions.every(q => q.difficulty === difficulty));
    assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
    if (pyq20Years) assert.ok(questions.every(q => !q.id.startsWith('gen-') && q.year >= 2004 && q.year <= 2024));
  }
});
test('topic filtering never fills with unrelated topics; unknown lessons stay missing', () => {
  for (const topic of engine.AVAILABLE_TEST_TOPICS) {
    const questions = engine.getTestQuestions({ topicId: topic.id, count: 50 });
    assert.ok(questions.every(q => scope.topicIncludes(topic.id,q.topicId)), topic.id);
  }
  assert.equal(lessons.getLessonByTopicId('missing-test-topic'), undefined);
  assert.equal(engine.getTestQuestions({ topicId: 'missing-test-topic', count: 50 }).length, 0);
});
test('question IDs and answer keys are valid', () => {
  assert.equal(new Set(bank.ALL_QUESTIONS.map(q => q.id)).size, bank.ALL_QUESTIONS.length);
  assert.ok(bank.ALL_QUESTIONS.every(q => q.options[q.correct]));
});
test('arithmetic practice offers 50 distinct questions with computed answers and no exam year', () => {
  const questions = engine.getTestQuestions({ topicId: 'percent', count: 50 });
  assert.equal(questions.length, 50);
  for (const q of questions.filter(q => q.id.startsWith('gen-quant'))) {
    const [rate, base] = q.question.en.match(/\d+/g).map(Number);
    assert.equal(Number(q.options[q.correct].en), rate * base / 100);
    assert.equal(new Set(Object.values(q.options).map(o => o.en)).size, 4);
    assert.equal(q.year, undefined);
  }
});
test('account vaults isolate authenticated users from guest records', () => {
  const { studyStorage, setStorageAccount } = load('src/lib/storage.ts');
  local.clear(); local.set('old', 'guest legacy');
  assert.equal(studyStorage.getItem('old'), 'guest legacy');
  studyStorage.setItem('progress', 'guest');
  setStorageAccount('alice'); assert.equal(studyStorage.getItem('old'), null); assert.equal(studyStorage.getItem('progress'), null);
  studyStorage.setItem('progress', 'alice');
  setStorageAccount('bob'); assert.equal(studyStorage.getItem('progress'), null);
  setStorageAccount('alice'); assert.equal(studyStorage.getItem('progress'), 'alice');
  setStorageAccount(null); assert.equal(studyStorage.getItem('progress'), 'guest');
  studyStorage.removeItem('old'); assert.equal(studyStorage.getItem('old'), null);
});
test('zero and negative scores remain valid, with exam-specific penalties', () => {
  const { computeScore } = load('src/lib/scoring.ts');
  const correct = { a: 'A', b: 'B' }, answers = { a: 'B', b: 'A' };
  assert.equal(computeScore(correct, answers, { marksPerQuestion: 1, negativeMarking: 0, totalQuestions: 2 }, 5).rawScore, 0);
  assert.equal(computeScore(correct, answers, { marksPerQuestion: 1, negativeMarking: .25, totalQuestions: 2 }, 5).rawScore, -.5);
});
test('local notes recall uses real source excerpts and never simulates uploads', () => {
  const { extractRecallQuestions, validateGeneratedQuestions } = load('src/lib/ai_gateway.ts');
  const notes = 'Gandhi returned to India in 1915 after working in South Africa. The Champaran movement took place in 1917 with indigo cultivators. The Non-Cooperation movement began in 1920 with public participation. The Quit India movement began in 1942 during the Second World War.';
  const questions = extractRecallQuestions(notes, 50);
  assert.equal(questions.length, 4);
  assert.ok(questions.every(q => q.year === undefined && notes.includes(q.explanation.en.replace('Source excerpt: ', ''))));
  assert.equal(extractRecallQuestions('Notes from Gandhi.pdf', 50).length, 0);
  assert.throws(() => validateGeneratedQuestions([{ question: {} }], notes, 5));
  const draft = { ...questions[0], sourceExcerpt: notes.split('. ')[0] };
  assert.equal(validateGeneratedQuestions([draft], notes, 5).length, 1);
  assert.throws(() => validateGeneratedQuestions([{ ...draft, sourceExcerpt: 'Invented fact not in source text' }], notes, 5));
});
test('catalogue merges duplicate exam IDs without losing topic branches', () => {
  const { ALL_EXAMS } = load('src/lib/data/exams.ts');
  const exams = Object.values(ALL_EXAMS).flat();
  assert.equal(new Set(exams.map(e => e.id)).size, exams.length);
  const cgl = exams.find(e => e.id === 'ssc-cgl');
  assert.ok(cgl.subjects.flatMap(s => s.chapters.flatMap(c => c.topics)).some(t => t.id === 'ssc-cgl-quant'));
});
test('no rank is invented without a verified candidate cohort', () => {
  const rank = engine.calculatePredictedRank(99, 49.5, 50);
  assert.equal(rank.hasEnoughData, false);
  assert.equal(rank.totalCandidates, 0);
});
test('saved generated questions survive vault lookup and custom-practice transport', () => {
  local.clear();
  const vault = load('src/lib/question-vault.ts');
  const { studyStorage } = load('src/lib/storage.ts');
  const generated = engine.getTestQuestions({ topicId: 'percent', count: 50 }).find(q => q.id.startsWith('gen-quant'));
  vault.saveCustomPractice([generated]);
  assert.equal(JSON.parse(studyStorage.getItem('examsathi_custom_cbt_questions'))[0].id, generated.id);
  assert.equal(vault.getVaultQuestions([generated.id])[0].question.en, generated.question.en);
  studyStorage.setItem('examsathi_result_example', JSON.stringify({ questions: [generated], testTitle: 'Saved review' }));
  assert.equal(vault.savedReviewQuestions('example').questions[0].id, generated.id);
  assert.equal(vault.savedReviewQuestions('missing'), null);
});
test('focus session handles sleeping tabs and pause/resume without elapsed-time drift', () => {
  const focus = load('src/lib/focus-session.ts');
  let session = focus.resumeFocus(focus.newFocus(25), 1000);
  assert.equal(focus.focusRemaining(session, 601000), 900);
  session = focus.pauseFocus(session, 601000);
  assert.equal(focus.focusRemaining(session, 9999999), 900);
  session = focus.resumeFocus(session, 2000000);
  assert.equal(focus.focusRemaining(session, 2900000), 0);
});
test('study XP awards are once-only and streak resets after missing a full day', () => {
  local.clear();
  const progress = load('src/lib/study-progress.ts');
  const auth = load('src/lib/auth.ts');
  assert.equal(progress.awardStudyXP('task-one', 20), true);
  assert.equal(progress.awardStudyXP('task-one', 20), false);
  assert.equal(auth.getStoredUser().xp, 20);
  assert.equal(progress.activityStreak(['2026-10-05', '2026-10-06'], '2026-10-07'), 2);
  assert.equal(progress.activityStreak(['2026-10-05'], '2026-10-07'), 0);
});
test('study backup restores allowed records and rejects credentials before mutation', () => {
  local.clear();
  const { studyStorage } = load('src/lib/storage.ts');
  const backup = load('src/lib/study-backup.ts');
  studyStorage.setItem('examsathi_saved_review_notes', JSON.stringify([{ id: 'one', title: 'Saved note', explanation: 'Source explanation', correctText: 'Answer' }]));
  studyStorage.setItem('examsathi_study_start_date', '2026-10-07');
  const saved = backup.exportStudyBackup();
  studyStorage.setItem('examsathi_saved_review_notes', '[]');
  backup.restoreStudyBackup(saved);
  assert.equal(JSON.parse(studyStorage.getItem('examsathi_saved_review_notes'))[0].id, 'one');
  assert.throws(() => backup.restoreStudyBackup(JSON.stringify({ version: 1, records: { 'sb-token': '{}' } })));
  assert.equal(JSON.parse(studyStorage.getItem('examsathi_saved_review_notes'))[0].id, 'one');
});
test('elementary math practice supplies 50 distinct variants with localized prompts', () => {
  const questions = engine.getTestQuestions({ topicId: 'elementary-mathematics', count: 50 });
  assert.equal(questions.length, 50);
  assert.equal(new Set(questions.map(q => q.question.en)).size, 50);
  assert.ok(questions.filter(q => q.id.startsWith('gen-quant')).every(q => q.question.hi !== q.question.en && q.question.pa !== q.question.en));
});
test('every catalogue exam only supplies its mapped syllabus topics and unknown exams stay empty', () => {
  const { ALL_EXAMS } = load('src/lib/data/exams.ts');
  for (const exam of Object.values(ALL_EXAMS).flat()) {
    const topics = new Set(exam.subjects.flatMap(s => s.chapters.flatMap(c => c.topics.flatMap(t => [...scope.topicSourceIds(t.id)]))));
    const pool = engine.getQuestionPool({ examId: exam.id });
    assert.ok(pool.every(q => topics.has(canonical(q.topicId))), exam.id);
    assert.equal(new Set(pool.map(engine.questionIdentity)).size, pool.length);
  }
  assert.deepEqual([...engine.getQuestionPool({ examId: 'unknown-exam' })], []);
});
test('fresh sets exclude completed wording across IDs and stop at exhaustion', () => {
  const pool = engine.getQuestionPool({ examId: 'ssc-cgl' });
  const first = engine.getTestQuestions({ examId: 'ssc-cgl', count: 50 });
  const excluded = first.map(engine.questionIdentity);
  const next = engine.getTestQuestions({ examId: 'ssc-cgl', count: 50, excludeKeys: excluded });
  assert.equal(first.length, 50); assert.equal(next.length, 50);
  assert.ok(next.every(q => !excluded.includes(engine.questionIdentity(q))));
  assert.equal(engine.getTestQuestions({ examId: 'ssc-cgl', excludeKeys: pool.map(engine.questionIdentity) }).length, 0);
  const q = first[0]; assert.equal(engine.questionIdentity(q), engine.questionIdentity({ ...q, id: 'other-id' }));
});
test('legacy ETT aliases resolve to the same strict pool; CTET primary does not select civics', () => {
  const keys = config => engine.getQuestionPool(config).map(engine.questionIdentity).sort();
  assert.deepEqual(keys({ examId: 'ett-punjab' }), keys({ examId: 'punjab-ett' }));
  const primary = engine.getQuestionPool({ examId: 'ctet-paper1' });
  assert.ok(!primary.some(q => canonical(q.topicId) === canonical('fundamental-rights')));
  assert.ok(primary.some(q => q.topicId === 'primary-mathematics'));
});
test('Haryana general-knowledge questions are not child-pedagogy or Punjab ETT practice', () => {
  const unrelated = new Set(['q-htet-001', 'q-htet-002', 'q-htet-003', 'q-htet-006', 'q-htet-008', 'q-htet-010']);
  for (const config of [{examId:'punjab-ett'}, {topicId:'child-development-pedagogy'}, {examId:'ctet-paper1'}]) {
    assert.ok(engine.getQuestionPool(config).every(q=>!unrelated.has(q.id)));
  }
});


test('foundation content has honest attribution and unambiguous option labels', () => {
  const { FOUNDATION_QUESTIONS } = load('src/lib/data/foundation-content.ts');
  assert.equal(FOUNDATION_QUESTIONS.length, 449);
  for (const q of FOUNDATION_QUESTIONS) {
    assert.equal(q.editorialStatus, 'authored');
    assert.equal(q.year, undefined);
    assert.ok(q.source.url.startsWith('https://'));
    assert.ok(q.explanation.en.length > 20);
    assert.equal(new Set(Object.values(q.options).map(o => o.en.toLowerCase().trim())).size, 4, q.id);
    assert.ok(q.availableLanguages.length);
  }
});
test('every catalogue slot has study material and every track has eligible practice', () => {
  const { ALL_EXAMS } = load('src/lib/data/exams.ts');
  for (const exam of Object.values(ALL_EXAMS).flat()) {
    assert.ok(engine.getQuestionPool({examId:exam.id}).length > 0, exam.id);
    for (const subject of exam.subjects) for (const chapter of subject.chapters) for (const topic of chapter.topics) {
      assert.ok(lessons.getLessonByTopicId(topic.id)?.content.en, topic.id);
    }
  }
  assert.equal(bank.getQuestionsByTopic('unknown-unrelated-topic').length, 0);
});
test('all 1000 reasoning exercises pass independent numerical and coding checks', () => {
  const { generateReasoningPractice } = load('src/lib/data/reasoning-practice.ts');
  const qs = generateReasoningPractice('ssc-cgl-reasoning', 2000);
  assert.equal(qs.length, 1000);
  assert.equal(new Set(qs.map(q => engine.questionIdentity(q))).size, 1000);
  const keys = new Map();
  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  for (const q of qs) {
    const prompt = q.question.en, nums = (prompt.match(/\d+/g) || []).map(Number);
    const actual = q.options[q.correct].en;
    const kind = q.subtopic.en;
    if (!keys.has(kind)) keys.set(kind, new Set());
    keys.get(kind).add(q.correct);
    if (kind === 'Number series') assert.equal(Number(actual), nums[2]+(nums[1]-nums[0]));
    if (kind === 'Letter coding') {
      const word = prompt.match(/How is ([A-Z]+) coded/)[1];
      const expected = [...word].map(c => String.fromCharCode(65+(c.charCodeAt(0)-65+nums[0])%26)).join('');
      assert.equal(actual, expected);
    }
    if (kind === 'Ranking') assert.equal(Number(actual), nums[0]-nums[1]+1);
    if (kind === 'Calendar cycles') {
      const start = days.findIndex(day => prompt.includes(`Today is ${day}.`));
      assert.equal(actual, days[(start+nums[0])%7]);
    }
    if (kind === 'Directions and displacement') assert.equal(Number(actual), nums[0]-nums[1]);
    if (kind === 'Sets and overlap') assert.equal(Number(actual), nums[0]+nums[1]-nums[2]);
    if (kind === 'Classification') {
      assert.notEqual(Number(actual)%nums[0],0);
      for (const [key,value] of Object.entries(q.options)) if (key !== q.correct) assert.equal(Number(value.en)%nums[0],0);
    }
    if (kind === 'Number analogy') assert.equal(Number(actual), nums.at(-1)**2);
    assert.equal(new Set(Object.values(q.options).map(o => o.en)).size,4,q.id);
    assert.equal(q.year,undefined);
  }
  assert.equal(keys.size,8);
  for (const positions of keys.values()) assert.equal(positions.size,4);
});

test('UGC NET no longer borrows the school child-development bank', () => {
  const qs = engine.getQuestionPool({examId:'ugc-net'});
  assert.ok(qs.length > 0);
  assert.ok(qs.every(q => q.topicId !== 'child-development-pedagogy'));
});
