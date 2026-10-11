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
    clear: () => local.clear(),
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

const planner = load('src/lib/study-planner.ts');
const mistakeNotebook = load('src/lib/mistake-notebook.ts');
const focusEngine = load('src/lib/focus-session.ts');

test('Section 9 Study Planner: Generates exam-version-specific plan with catch-up days and mocks', () => {
  local.clear();
  const plan = planner.generateExamStudyPlan({
    examId: 'punjab-ett',
    dailyHoursBudget: 2,
    targetExamDate: '2026-12-10',
    startDate: '2026-10-10',
  });

  assert.equal(plan.examId, 'punjab-ett');
  assert.equal(plan.dailyHoursBudget, 2);
  assert.ok(plan.totalDays >= 30, 'Plan should span allocated days');
  assert.ok(plan.catchupDaysCount > 0, 'Must include catch-up buffer days');
  assert.ok(plan.mockDaysCount > 0, 'Must include official-pattern mock days');

  // Verify catch-up cadence: every 7th day must be a catch-up day
  const day7 = plan.schedule.find(s => s.dayNumber === 7);
  assert.ok(day7);
  assert.equal(day7.type, 'catchup', 'Day 7 must be a catchup day');
  assert.ok(day7.description.en.includes('No new syllabus topics today'));

  const day14 = plan.schedule.find(s => s.dayNumber === 14);
  assert.ok(day14);
  assert.equal(day14.type, 'revision', 'Day 14 must be a revision checkpoint');

  // Verify final day is a full mock simulation
  const lastDay = plan.schedule[plan.schedule.length - 1];
  assert.equal(lastDay.type, 'mock', 'Final day must be a mock simulation');
});

test('Section 9 Study Planner: Never invents topic weights; uses official marks or states equal weight', () => {
  // Master Cadre Punjabi Paper A vs Paper B
  const paperANote = planner.getOfficialTopicWeightNote('master-cadre-punjabi', 'punjabi-paper-a-subject');
  assert.ok(paperANote.includes('Paper A Qualifying Punjabi (50 marks'));

  const paperBNote = planner.getOfficialTopicWeightNote('master-cadre-punjabi', 'punjabi-sahit-itihas');
  assert.ok(paperBNote.includes('Paper B Subject Specialization (150 marks'));

  // PSSSB Clerk
  const clerkNote = planner.getOfficialTopicWeightNote('punjab-clerk');
  assert.ok(clerkNote.includes('100 Marks (100 MCQs, 0.25 negative marking'));

  // Generic / Unspecified subtopic
  const genericNote = planner.getOfficialTopicWeightNote('general-exam');
  assert.equal(genericNote, 'Equal topic weight per official syllabus notification; no artificial marks invented');
});

test('Section 9 Study Planner: Day completion toggling and persistence', () => {
  local.clear();
  const plan = planner.getOrGenerateStudyPlan({
    examId: 'punjab-clerk',
    dailyHoursBudget: 1,
  });

  assert.equal(plan.schedule[0].completed, false);

  // Toggle Day 1
  const updated = planner.togglePlanDayCompletion('punjab-clerk', 1);
  assert.ok(updated);
  assert.equal(updated.schedule[0].completed, true);

  // Read back from storage
  const reloaded = planner.getOrGenerateStudyPlan({ examId: 'punjab-clerk' });
  assert.equal(reloaded.schedule[0].completed, true);
});

test('Section 9 Mistake Notebook: Automatic recording of quiz mistakes and lapse counts', () => {
  local.clear();
  const sampleQuestions = [
    {
      id: 'q-history-1',
      topicId: 'punjab-history',
      question: { en: 'In which year did the Battle of Chappar Chiri take place?', hi: 'चप्पर चिड़ी का युद्ध किस वर्ष हुआ?', pa: 'ਚੱਪੜ ਚਿੜੀ ਦੀ ਲੜਾਈ ਕਿਸ ਸਾਲ ਹੋਈ?' },
      options: {
        A: { en: '1708', hi: '1708', pa: '1708' },
        B: { en: '1710', hi: '1710', pa: '1710' },
        C: { en: '1712', hi: '1712', pa: '1712' },
        D: { en: '1715', hi: '1715', pa: '1715' },
      },
      correct: 'B',
      explanation: { en: 'The battle took place in May 1710.', hi: 'युद्ध मई 1710 में हुआ था।', pa: 'ਲੜਾਈ ਮਈ 1710 ਵਿੱਚ ਹੋਈ ਸੀ।' },
    },
    {
      id: 'q-history-2',
      topicId: 'punjab-history',
      question: { en: 'Who founded the city of Amritsar?', hi: 'अमृतसर शहर की स्थापना किसने की?', pa: 'ਅੰਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਕਿਸਨੇ ਕੀਤੀ?' },
      options: {
        A: { en: 'Guru Ram Das Ji', hi: 'गुरु राम दास जी', pa: 'ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ' },
        B: { en: 'Guru Amar Das Ji', hi: 'गुरु अमर दास जी', pa: 'ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ' },
        C: { en: 'Guru Arjan Dev Ji', hi: 'गुरु अर्जुन देव जी', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' },
        D: { en: 'Guru Nanak Dev Ji', hi: 'गुरु नानक देव जी', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
      },
      correct: 'A',
      explanation: { en: 'Guru Ram Das Ji founded Amritsar in 1577.', hi: 'गुरु राम दास जी ने 1577 में स्थापना की।', pa: 'ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਨੇ 1577 ਵਿੱਚ ਸਥਾਪਨਾ ਕੀਤੀ।' },
    },
  ];

  // User answered q1 wrong (A instead of B) and q2 correct (A)
  const userAnswers = {
    'q-history-1': 'A',
    'q-history-2': 'A',
  };

  const recorded = mistakeNotebook.recordQuizMistakes('learner-1', 'punjab-clerk', sampleQuestions, userAnswers);
  assert.equal(recorded, 1, 'Only the incorrect answer (q1) should be recorded');

  // Verify mistake entry
  const mistakes = mistakeNotebook.getMistakeNotebook({ examId: 'punjab-clerk' });
  assert.equal(mistakes.length, 1);
  assert.equal(mistakes[0].questionId, 'q-history-1');
  assert.equal(mistakes[0].userAnswer, 'A');
  assert.equal(mistakes[0].correctAnswer, 'B');
  assert.equal(mistakes[0].resolved, false);
  assert.equal(mistakes[0].lapsesCount, 1);

  // User retakes and answers wrong again (C instead of B) -> lapse count increments
  mistakeNotebook.recordQuizMistakes('learner-1', 'punjab-clerk', sampleQuestions, { 'q-history-1': 'C' });
  const updatedMistakes = mistakeNotebook.getMistakeNotebook({ examId: 'punjab-clerk' });
  assert.equal(updatedMistakes.length, 1);
  assert.equal(updatedMistakes[0].lapsesCount, 2, 'Lapses count should increment on repeated failure');
  assert.equal(updatedMistakes[0].userAnswer, 'C');
});

test('Section 9 Mistake Notebook: Resolution, reopening, and multi-field search', () => {
  local.clear();
  const sampleQuestion = {
    id: 'q-math-1',
    topicId: 'fractions',
    question: { en: 'What is 3/4 + 1/2?', hi: '3/4 + 1/2 क्या है?', pa: '3/4 + 1/2 ਕੀ ਹੈ?' },
    options: {
      A: { en: '5/4', hi: '5/4', pa: '5/4' },
      B: { en: '4/6', hi: '4/6', pa: '4/6' },
      C: { en: '1', hi: '1', pa: '1' },
      D: { en: '7/4', hi: '7/4', pa: '7/4' },
    },
    correct: 'A',
    explanation: { en: '3/4 + 2/4 = 5/4', hi: '3/4 + 2/4 = 5/4', pa: '3/4 + 2/4 = 5/4' },
  };

  mistakeNotebook.recordQuizMistakes('learner-1', 'punjab-ett', [sampleQuestion], { 'q-math-1': 'B' });

  // Search by text keyword
  let searchResults = mistakeNotebook.getMistakeNotebook({ examId: 'punjab-ett', searchQuery: '3/4' });
  assert.equal(searchResults.length, 1);

  // Annotate with personal note
  mistakeNotebook.annotateMistake('q-math-1', 'punjab-ett', 'Forgot to find common denominator');
  const withNote = mistakeNotebook.getMistakeNotebook({ examId: 'punjab-ett', searchQuery: 'denominator' });
  assert.equal(withNote.length, 1);

  // Resolve mistake
  const resSuccess = mistakeNotebook.resolveMistake('q-math-1', 'punjab-ett');
  assert.equal(resSuccess, true);

  const activeMistakes = mistakeNotebook.getMistakeNotebook({ examId: 'punjab-ett', resolved: false });
  assert.equal(activeMistakes.length, 0, 'Resolved mistake should be excluded from active list');

  const resolvedMistakes = mistakeNotebook.getMistakeNotebook({ examId: 'punjab-ett', resolved: true });
  assert.equal(resolvedMistakes.length, 1);

  // Reopen mistake
  mistakeNotebook.reopenMistake('q-math-1', 'punjab-ett');
  const reopened = mistakeNotebook.getMistakeNotebook({ examId: 'punjab-ett', resolved: false });
  assert.equal(reopened.length, 1);
  assert.equal(reopened[0].resolved, false);
});

test('Section 9 Four-Tier Mastery Matrix: Strict separation of read, complete, practiced, and sustained mastery', () => {
  local.clear();
  const topicId = 'ett-pedagogy-stages';
  const examId = 'punjab-ett';

  // Initial state: unseen
  let mastery = mistakeNotebook.getTopicMastery(topicId, examId);
  assert.equal(mastery.tier, 'unseen');

  // 1. Reading lesson
  mastery = mistakeNotebook.updateTopicMastery({ topicId, examId, action: 'read' });
  assert.equal(mastery.tier, 'read');
  assert.ok(mastery.basisExplanation.includes('Lesson content read'));

  // 2. Marking complete
  mastery = mistakeNotebook.updateTopicMastery({ topicId, examId, action: 'mark_complete' });
  assert.equal(mastery.tier, 'marked_complete');
  assert.ok(mastery.basisExplanation.includes('Topic marked as complete'));

  // 3. Practicing once in quiz
  mastery = mistakeNotebook.updateTopicMastery({
    topicId,
    examId,
    action: 'quiz_result',
    quizStats: { correct: 4, total: 5, fsrsStabilityDays: 1.2 },
  });
  assert.equal(mastery.tier, 'practiced_once');
  assert.ok(mastery.basisExplanation.includes('Practiced in quiz: 4/5 correct'));

  // 4. Sustained mastery (requires >= 80% accuracy, >= 10 attempts, and FSRS stability >= 3.0 days)
  mastery = mistakeNotebook.updateTopicMastery({
    topicId,
    examId,
    action: 'quiz_result',
    quizStats: { correct: 9, total: 10, fsrsStabilityDays: 4.5 },
  });
  assert.equal(mastery.tier, 'sustained_mastery');
  assert.ok(mastery.basisExplanation.includes('Sustained Mastery verified'));
  assert.ok(mastery.basisExplanation.includes('memory stability 4.5 days'));
});

test('Section 9 Focus Session Engine: Break sessions, reset, and configurable non-punitive nudges', () => {
  local.clear();
  // New focus
  let session = focusEngine.newFocus(25);
  assert.equal(session.minutes, 25);
  assert.equal(session.remaining, 1500);
  assert.equal(session.sessionType, 'focus');

  // Start break
  const breakSession = focusEngine.newBreak(5);
  assert.equal(breakSession.minutes, 5);
  assert.equal(breakSession.remaining, 300);
  assert.equal(breakSession.sessionType, 'break');

  // Reset focus session
  session = focusEngine.resumeFocus(session, 1000);
  session = focusEngine.pauseFocus(session, 601000);
  assert.equal(focusEngine.focusRemaining(session), 900);

  const reset = focusEngine.resetFocus(session);
  assert.equal(reset.remaining, 1500, 'Reset must restore full time');
  assert.equal(reset.deadline, null);
  assert.equal(reset.completed, false);

  // Configurable non-punitive nudges
  assert.equal(focusEngine.areNudgesEnabled(), true);
  focusEngine.setNudgesEnabled(false);
  assert.equal(focusEngine.areNudgesEnabled(), false);
  focusEngine.setNudgesEnabled(true);
  assert.equal(focusEngine.areNudgesEnabled(), true);
});
