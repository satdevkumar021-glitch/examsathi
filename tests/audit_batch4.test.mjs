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

const exams = load('src/lib/data/exams.ts');
const engine = load('src/lib/data/question_bank_engine.ts');
const ettAndClerkPyqs = load('src/lib/data/questions/ett_and_clerk_pyqs.ts');
const twentyYearPyqs = load('src/lib/data/questions/twenty_year_pyqs.ts');
const quantPractice = load('src/lib/data/quant-practice.ts');
const reasoningPractice = load('src/lib/data/reasoning-practice.ts');
const landPractice = load('src/lib/data/land-measurement-practice.ts');
const practiceHistory = load('src/lib/practice-history.ts');

test('Section 5 Question Provenance: ETT and Clerk PYQs have complete verified metadata and distractor explanations', () => {
  const pyqs = ettAndClerkPyqs.ETT_AND_CLERK_PYQS;
  assert.ok(pyqs.length > 0, 'ETT_AND_CLERK_PYQS must contain questions');

  for (const q of pyqs) {
    assert.equal(q.originType, 'verified-pyq', `Question ${q.id} must be verified-pyq`);
    assert.equal(q.reviewStatus, 'reviewed', `Question ${q.id} must be reviewed`);
    assert.ok(q.conceptGroupId, `Question ${q.id} must have a stable conceptGroupId`);
    assert.ok(q.learningObjective, `Question ${q.id} must have a learningObjective`);
    
    // Check PYQ metadata
    assert.ok(q.pyqMetadata, `Question ${q.id} must have pyqMetadata`);
    assert.ok(q.pyqMetadata.examBoard, `Question ${q.id} pyqMetadata must state examBoard`);
    assert.ok(q.pyqMetadata.notificationRef, `Question ${q.id} pyqMetadata must state notificationRef`);
    assert.ok(q.pyqMetadata.paper, `Question ${q.id} pyqMetadata must state paper`);
    assert.ok(q.pyqMetadata.year, `Question ${q.id} pyqMetadata must state year`);
    assert.ok(q.pyqMetadata.answerKeyStatus, `Question ${q.id} pyqMetadata must state answerKeyStatus`);

    // Check rights provenance
    assert.ok(q.rightsProvenance, `Question ${q.id} must have rightsProvenance`);
    assert.ok(q.rightsProvenance.source, `Question ${q.id} rightsProvenance must state source`);
    assert.ok(q.rightsProvenance.accessType, `Question ${q.id} rightsProvenance must state accessType`);
    assert.ok(q.rightsProvenance.verifiedBy, `Question ${q.id} rightsProvenance must state verifiedBy`);
    assert.ok(q.rightsProvenance.verifiedDate, `Question ${q.id} rightsProvenance must state verifiedDate`);

    // Check distractor explanations for all non-correct options
    assert.ok(q.distractorExplanations, `Question ${q.id} must provide distractor explanations`);
    for (const opt of ['A', 'B', 'C', 'D']) {
      if (opt === q.correct) continue;
      assert.ok(q.distractorExplanations[opt], `Question ${q.id} must have explanation for distractor ${opt}`);
      const text = q.distractorExplanations[opt].en || q.distractorExplanations[opt].hi || '';
      assert.ok(text.length > 10, `Question ${q.id} distractor ${opt} must be substantial`);
    }
  }
});

test('Section 5 Question Provenance: 20-Year PYQ archive uses canonical exam IDs and verified origins', () => {
  const pyqs = twentyYearPyqs.TWENTY_YEAR_EXAM_PYQS;
  assert.ok(pyqs.length > 0, 'TWENTY_YEAR_EXAM_PYQS must contain questions');

  const validExamIds = new Set(Object.values(exams.ALL_EXAMS).flat().map(e => e.id));

  for (const q of pyqs) {
    assert.ok(validExamIds.has(q.examId), `Question ${q.id} has invalid examId: ${q.examId}`);
    assert.equal(q.originType, 'verified-pyq', `Question ${q.id} must have originType: verified-pyq`);
    assert.equal(q.reviewStatus, 'reviewed', `Question ${q.id} must have reviewStatus: reviewed`);
  }
});

test('Section 5 Question Quality: Procedural generators assign originType: computed-variant and reviewStatus: reviewed', () => {
  const quant = quantPractice.generateQuantPractice('primary-mathematics', 10);
  assert.ok(quant.length > 0, 'Quant practice must generate questions');
  assert.equal(quant[0].originType, 'computed-variant');
  assert.equal(quant[0].reviewStatus, 'reviewed');

  const reasoning = reasoningPractice.generateReasoningPractice('ssc-cgl-reasoning', 10);
  assert.ok(reasoning.length > 0, 'Reasoning practice must generate questions');
  assert.equal(reasoning[0].originType, 'computed-variant');
  assert.equal(reasoning[0].reviewStatus, 'reviewed');

  const land = landPractice.generateLandMeasurementPractice('patwari-agriculture-accounts', 10);
  assert.ok(land.length > 0, 'Land measurement practice must generate questions');
  assert.equal(land[0].originType, 'computed-variant');
  assert.equal(land[0].reviewStatus, 'reviewed');
});

test('Section 6 Official Marking Schemes: PSSSB Clerk, Punjab ETT, Master Cadre, and REET penalty rules are verified', () => {
  const clerk = exams.ALL_EXAMS.punjab.find(e => e.id === 'punjab-clerk');
  assert.equal(clerk.negativeMarking, 0.25, 'PSSSB Clerk official pattern must have 0.25 negative marking penalty');

  const ett = exams.ALL_EXAMS.punjab.find(e => e.id === 'punjab-ett');
  assert.equal(ett.negativeMarking, false, 'Punjab ETT recruitment has no negative marking penalty (+1/0)');

  const masterCadreTracks = [
    'punjab-master-cadre-sst',
    'punjab-master-cadre-science',
    'punjab-master-cadre-math',
    'punjab-master-cadre-punjabi',
    'punjab-master-cadre-hindi',
    'punjab-master-cadre-english',
  ];
  for (const id of masterCadreTracks) {
    const track = exams.ALL_EXAMS.punjab.find(e => e.id === id);
    assert.equal(track.negativeMarking, false, `Master Cadre track ${id} must have no negative marking (+1/0)`);
  }

  const reetTracks = ['reet-level1', 'reet-level2-sst', 'reet-level2-science-math'];
  for (const id of reetTracks) {
    const track = exams.ALL_EXAMS.rajasthan.find(e => e.id === id);
    assert.equal(track.negativeMarking, false, `REET eligibility track ${id} must have no negative marking (+1/0)`);
  }

  // Check AVAILABLE_EXAMS in question_bank_engine
  const clerkEngine = engine.AVAILABLE_EXAMS.find(e => e.id === 'punjab-clerk');
  assert.equal(clerkEngine.negativeMarking, 0.25);

  const ettEngine = engine.AVAILABLE_EXAMS.find(e => e.id === 'punjab-ett');
  assert.equal(ettEngine.negativeMarking, 0);

  const sstEngine = engine.AVAILABLE_EXAMS.find(e => e.id === 'punjab-master-cadre-sst');
  assert.equal(sstEngine.negativeMarking, 0);

  const reetEngine = engine.AVAILABLE_EXAMS.find(e => e.id === 'reet-level1');
  assert.equal(reetEngine.negativeMarking, 0);
});

test('Section 6 Multi-Level Partitioned Exposure Tracking: Partitioned strictly by learner and exam', () => {
  local.clear();
  const learner1 = 'learner-alpha';
  const learner2 = 'learner-beta';
  const examA = 'punjab-clerk';
  const examB = 'punjab-master-cadre-sst';

  const mockQuestionsA = [
    { id: 'q-a1', question: { en: 'Q A1', hi: 'Q A1' }, options: { A: { en: '1' } }, correct: 'A', topicId: 'clerk-top' },
    { id: 'q-a2', question: { en: 'Q A2', hi: 'Q A2' }, options: { A: { en: '2' } }, correct: 'A', topicId: 'clerk-top' },
  ];

  // 1. Record served for learner 1 in exam A
  practiceHistory.recordServedQuestions(learner1, examA, mockQuestionsA);
  let exp1A = practiceHistory.getLearnerExposure(learner1, examA);
  assert.equal(exp1A.servedCount, 2);
  assert.equal(exp1A.answeredCount, 0);
  assert.equal(exp1A.completedCount, 0);

  // Cross-exam check: learner 1 in exam B must be zero
  let exp1B = practiceHistory.getLearnerExposure(learner1, examB);
  assert.equal(exp1B.servedCount, 0);

  // Cross-learner check: learner 2 in exam A must be zero
  let exp2A = practiceHistory.getLearnerExposure(learner2, examA);
  assert.equal(exp2A.servedCount, 0);

  // 2. Record answered
  practiceHistory.recordAnsweredQuestions(learner1, examA, ['q-a1']);
  exp1A = practiceHistory.getLearnerExposure(learner1, examA);
  assert.equal(exp1A.servedCount, 2);
  assert.equal(exp1A.answeredCount, 1);
  assert.equal(exp1A.completedCount, 0);

  // 3. Record completed
  practiceHistory.recordCompletedQuestions(learner1, examA, mockQuestionsA);
  exp1A = practiceHistory.getLearnerExposure(learner1, examA);
  assert.equal(exp1A.completedCount, 2);

  // 4. Reset exposure
  practiceHistory.resetLearnerExposure(learner1, examA);
  exp1A = practiceHistory.getLearnerExposure(learner1, examA);
  assert.equal(exp1A.servedCount, 0);
  assert.equal(exp1A.answeredCount, 0);
  assert.equal(exp1A.completedCount, 0);

  // 5. Exposure reset explanation
  assert.ok(practiceHistory.explainResetBehavior('en').includes('Resetting exposure'));
  assert.ok(practiceHistory.explainResetBehavior('hi').includes('एक्सपोजर रीसेट'));
  assert.ok(practiceHistory.explainResetBehavior('pa').includes('ਐਕਸਪੋਜ਼ਰ ਰੀਸੈੱਟ'));
});

test('Section 6 Disjoint Next Unseen Sets and Exhaustion Semantics (120 pool with count 50)', () => {
  // Simulate synthetic pool of 120 eligible non-equivalent items as specified in Section 6:
  // "For a pool of 120 eligible non-equivalent items and count 50, sets 1 and 2 must be disjoint
  // and only 20 unseen items remain. Offer those 20, a smaller size or explicit revision—not a fake third fresh set."
  const syntheticPool = Array.from({ length: 120 }, (_, i) => ({
    id: `syn-q-${i + 1}`,
    question: { en: `Synthetic Question ${i + 1}`, hi: `सिंथेटिक प्रश्न ${i + 1}` },
    options: { A: { en: 'Opt A' }, B: { en: 'Opt B' } },
    correct: 'A',
    topicId: 'test-topic',
  }));

  const excluded = new Set();

  // Set 1: count 50
  const set1Calc = practiceHistory.calculateUnseenPool(syntheticPool, excluded);
  assert.equal(set1Calc.unseenCount, 120);
  assert.equal(set1Calc.isExhausted, false);
  const set1 = set1Calc.unseen.slice(0, 50);
  assert.equal(set1.length, 50);
  set1.forEach(q => excluded.add(q.id));

  // Set 2: count 50
  const set2Calc = practiceHistory.calculateUnseenPool(syntheticPool, excluded);
  assert.equal(set2Calc.unseenCount, 70);
  assert.equal(set2Calc.isExhausted, false);
  const set2 = set2Calc.unseen.slice(0, 50);
  assert.equal(set2.length, 50);

  // Verify Set 1 and Set 2 are strictly disjoint
  const set1Ids = new Set(set1.map(q => q.id));
  const overlap = set2.filter(q => set1Ids.has(q.id));
  assert.equal(overlap.length, 0, 'Set 1 and Set 2 must be strictly disjoint');
  set2.forEach(q => excluded.add(q.id));

  // Set 3: Remaining 20 items
  const set3Calc = practiceHistory.calculateUnseenPool(syntheticPool, excluded);
  assert.equal(set3Calc.unseenCount, 20, 'Exactly 20 unseen items must remain');
  assert.equal(set3Calc.isExhausted, false);
  const set3 = set3Calc.unseen.slice(0, 50); // Requested 50, but only 20 available
  assert.equal(set3.length, 20, 'Set 3 must serve remaining 20 items');
  set3.forEach(q => excluded.add(q.id));

  // Set 4: Exhaustion
  const set4Calc = practiceHistory.calculateUnseenPool(syntheticPool, excluded);
  assert.equal(set4Calc.unseenCount, 0, 'Zero unseen items remain');
  assert.equal(set4Calc.isExhausted, true, 'Pool must be marked exhausted');

  // Revision mode check: If revision mode is active (empty excluded set), all 120 can be practiced
  const revisionCalc = practiceHistory.calculateUnseenPool(syntheticPool, []);
  assert.equal(revisionCalc.unseenCount, 120, 'Revision mode allows reviewing the full 120 questions');
});

test('Section 6 Strict Scoping: Unknown exams or unmapped topics never silently borrow from "all"', () => {
  // Querying a non-existent exam must return an empty pool, never defaulting to "all"
  const emptyPool = engine.getQuestionPool({ examId: 'non-existent-exam-xyz' });
  assert.equal(emptyPool.length, 0, 'Non-existent exam must return empty pool');

  // Scoped Clerk questions must not contain Master Cadre History or UGC NET questions
  const clerkPool = engine.getQuestionPool({ examId: 'punjab-clerk' });
  for (const q of clerkPool) {
    assert.notEqual(q.examId, 'ugc-net-paper1', 'Clerk pool must not borrow from UGC NET');
  }
});
