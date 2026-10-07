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
  if (cache.has(file)) return cache.get(file).exports;
  const loaded = { exports: {} }; cache.set(file, loaded);
  const js = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { module: loaded, exports: loaded.exports, require: name => load(name.startsWith('@/') ? path.resolve('src', name.slice(2)) : path.resolve(path.dirname(file), name)), window, Event: class Event {}, Date, Math, Set, Map, process, console });
  return loaded.exports;
}
const engine = load('src/lib/data/question_bank_engine.ts');
const lessons = load('src/lib/data/lessons.ts');
const bank = load('src/lib/data/questions.ts');
const canonical = id => lessons.TOPIC_ALIASES[id] || id;
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
    assert.ok(questions.every(q => canonical(q.topicId) === canonical(topic.id)), topic.id);
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
