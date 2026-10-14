import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

function load(file, dependencies = {}) {
  let resolved = path.resolve(file);
  if (!path.extname(resolved)) {
    if (existsSync(resolved + '.ts')) resolved += '.ts';
    else if (existsSync(resolved + '.js')) resolved += '.js';
    else if (existsSync(resolved + '.json')) resolved += '.json';
  }
  if (resolved.endsWith('.json')) {
    const data = JSON.parse(readFileSync(resolved, 'utf8'));
    return { ...data, default: data };
  }
  const code = readFileSync(resolved, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const mod = { exports: {} };
  vm.runInNewContext(js, {
    module: mod,
    exports: mod.exports,
    require: name => {
      if (name === 'server-only') return {};
      return dependencies[name] || load(name.startsWith('@/') ? path.resolve('src', name.slice(2)) : path.resolve(path.dirname(resolved), name));
    },
    URL,
    URLSearchParams,
    atob,
    Date,
    Math,
    Set,
    Map,
    Number,
    Array,
    Object,
    String,
    RegExp,
    parseFloat,
    process,
    console,
  });
  return mod.exports;
}

const mastery = load('src/lib/mastery-priority.ts');
const studyPlanner = load('src/lib/study-planner.ts');
const examCatalog = load('src/lib/data/exam-catalog.ts');
const personalNotes = load('src/lib/personal-notes.ts');

// ============================================================
// PHASE 3 LEARNING FEATURES VERIFICATION SUITE
// ============================================================

test('Phase 3: Topic mastery strictly enforces minimum sample (>=10 questions across >=2 sessions)', () => {
  const topicId = 'sci-phy-optics';

  // Scenario 1: Only 1 session with 5 questions -> Insufficient Data
  const singleSession = [
    { sessionId: 's1', timestamp: Date.now() - 86400000, total: 5, correct: 2, avgTimeSeconds: 45 },
  ];
  const m1 = mastery.computeTopicMastery(topicId, singleSession, 'Optics');
  assert.equal(m1.status, 'insufficient-data');
  assert.ok(m1.explanation.includes('Need at least 10 questions across 2 separate sessions'));

  // Scenario 2: 2 sessions but only 8 questions total -> Insufficient Data
  const twoSessionsSmall = [
    { sessionId: 's1', timestamp: Date.now() - 86400000, total: 4, correct: 2, avgTimeSeconds: 50 },
    { sessionId: 's2', timestamp: Date.now(), total: 4, correct: 3, avgTimeSeconds: 40 },
  ];
  const m2 = mastery.computeTopicMastery(topicId, twoSessionsSmall, 'Optics');
  assert.equal(m2.status, 'insufficient-data');

  // Scenario 3: 2 sessions, 12 questions total, 40% accuracy -> Weak
  const twoSessionsWeak = [
    { sessionId: 's1', timestamp: Date.now() - 86400000, total: 6, correct: 2, avgTimeSeconds: 65 },
    { sessionId: 's2', timestamp: Date.now(), total: 6, correct: 3, avgTimeSeconds: 55 },
  ];
  const m3 = mastery.computeTopicMastery(topicId, twoSessionsWeak, 'Optics');
  assert.equal(m3.status, 'weak');
  assert.ok(m3.explanation.includes('Needs Focus (Weak)'));
  assert.equal(m3.avgTimePerQuestionSeconds, 60); // Speed shown beside mastery

  // Scenario 4: 3 sessions, 25 questions total, 92% accuracy -> Mastered
  const threeSessionsStrong = [
    { sessionId: 's1', timestamp: Date.now() - 172800000, total: 10, correct: 9, avgTimeSeconds: 30 },
    { sessionId: 's2', timestamp: Date.now() - 86400000, total: 8, correct: 8, avgTimeSeconds: 28 },
    { sessionId: 's3', timestamp: Date.now(), total: 7, correct: 6, avgTimeSeconds: 32 },
  ];
  const m4 = mastery.computeTopicMastery(topicId, threeSessionsStrong, 'Optics');
  assert.equal(m4.status, 'mastered');
  assert.ok(m4.explanation.includes('Exam Ready (Mastered)'));
});

test('Phase 3: Priority formula balances official weightage, mastery, and study recency', () => {
  // Topic A: High weightage (12%), weak mastery (40%), not revised in 14 days
  const weakMastery = {
    topicId: 'punjab-history-gurus',
    status: 'weak',
    totalAttempted: 15,
    sessionCount: 2,
    accuracy: 40,
    recencyWeightedAccuracy: 40,
    avgTimePerQuestionSeconds: 45,
    explanation: 'Needs Focus',
  };

  const pHigh = mastery.computeStudyPriority({
    topicId: 'punjab-history-gurus',
    topicTitle: 'Sikh Gurus History',
    examId: 'punjab-clerk',
    weightagePercent: 12,
    mastery: weakMastery,
    daysSinceLastStudied: 14,
  });

  // Priority score = 12 * (1 - 0.40) * (1 + 14/14) = 12 * 0.6 * 2.0 = 14.4 -> Critical
  assert.equal(pHigh.priorityLevel, 'critical');
  assert.ok(pHigh.priorityScore >= 14);
  assert.ok(pHigh.reason.includes('Sikh Gurus History'));
  assert.ok(pHigh.reason.includes('~12% of marks'));
  assert.ok(pHigh.reason.includes('Priority: CRITICAL'));

  // Topic B: Low weightage (3%), mastered (90%), studied today (0 days)
  const strongMastery = {
    topicId: 'basic-spelling',
    status: 'mastered',
    totalAttempted: 30,
    sessionCount: 3,
    accuracy: 90,
    recencyWeightedAccuracy: 90,
    avgTimePerQuestionSeconds: 20,
    explanation: 'Exam Ready',
  };

  const pLow = mastery.computeStudyPriority({
    topicId: 'basic-spelling',
    topicTitle: 'Basic Spelling',
    examId: 'punjab-clerk',
    weightagePercent: 3,
    mastery: strongMastery,
    daysSinceLastStudied: 0,
  });

  // Priority score = 3 * (1 - 0.90) * 1.0 = 0.3 -> Low
  assert.equal(pLow.priorityLevel, 'low');
  assert.ok(pLow.priorityScore < 3);
  assert.ok(pLow.reason.includes('Priority: LOW'));
});

test('Phase 3: SuperMemo SM-2 Spaced Repetition conforms to standard scheduling rules', () => {
  const cardId = 'flashcard-mc-1';
  let card = mastery.createInitialSm2Card(cardId, '2026-10-14');

  assert.equal(card.repetitions, 0);
  assert.equal(card.intervalDays, 1);
  assert.equal(card.easeFactor, 2.5);

  // Review 1: Perfect recall (quality = 5)
  card = mastery.computeSm2Review(card, 5, '2026-10-14');
  assert.equal(card.repetitions, 1);
  assert.equal(card.intervalDays, 1);
  assert.ok(card.easeFactor >= 2.5); // EF increases on quality 5

  // Review 2: Perfect recall (quality = 5) -> interval becomes 6 days
  card = mastery.computeSm2Review(card, 5, '2026-10-15');
  assert.equal(card.repetitions, 2);
  assert.equal(card.intervalDays, 6);

  // Review 3: Good recall (quality = 4) -> interval becomes round(6 * EF)
  const prevInterval = card.intervalDays;
  const prevEF = card.easeFactor;
  card = mastery.computeSm2Review(card, 4, '2026-10-21');
  assert.equal(card.repetitions, 3);
  assert.equal(card.intervalDays, Math.round(prevInterval * prevEF));

  // Review 4: Complete blackout (quality = 0) -> repetitions reset to 0, interval to 1
  card = mastery.computeSm2Review(card, 0, '2026-11-06');
  assert.equal(card.repetitions, 0);
  assert.equal(card.intervalDays, 1);
  assert.ok(card.easeFactor >= 1.3, 'Ease factor must not drop below 1.3 minimum');
});

test('Phase 3: Study planner never invents topic weights and incorporates catchup days', () => {
  // Official weight disclaimer for unweighted or qualifying topics
  const weightNote = studyPlanner.getOfficialTopicWeightNote('punjab-master-cadre-sst', 'punjabi-paper-a');
  assert.ok(weightNote.includes('Paper A Qualifying Punjabi') || weightNote.includes('50 marks'));

  // Generating a study plan
  const plan = studyPlanner.generateExamStudyPlan({
    examId: 'punjab-clerk',
    dailyHoursBudget: 2,
    baselineKnowledge: { 'clerk-computer-basics': 'beginner' },
    targetExamDate: '2026-12-31',
  });

  assert.ok(plan.schedule.length > 0);
  // Verify catchup days are scheduled every 7th day
  const catchupDays = plan.schedule.filter(d => d.type === 'catchup');
  assert.ok(catchupDays.length > 0, 'Study plan must include catchup days');
  assert.equal(plan.schedule[6].type, 'catchup', 'Day 7 must be a catchup day');
});

test('Phase 3: Honest reporting hides rankings when no verified comparison cohort exists', () => {
  // Candidate attempts test with total questions = 50, rawScore = 35
  const rankReport = examCatalog.calculatePredictedRank(70, 35, 50);

  // The engine must honestly flag whether a real cohort exists
  assert.equal(rankReport.hasEnoughData, false);
  assert.equal(rankReport.totalCandidates, 0);
  assert.equal(rankReport.cohortStatus, 'No verified comparison cohort is available.');
});
