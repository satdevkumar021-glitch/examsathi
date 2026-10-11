import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

function load(file) {
  file = path.resolve(file);
  if (!path.extname(file)) file += '.ts';
  const js = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const mod = { exports: {} };
  vm.runInNewContext(js, { module: mod, exports: mod.exports, require: () => ({}), console, Math, Date });
  return mod.exports;
}

const { computeScore, computeReet2024Score, getOfficialTimePerQuestionSeconds, computeOfficialAllocatedSeconds } = load('src/lib/scoring.ts');

test('REET 2024: Official 5-Option OMR Scoring Semantics', () => {
  // Setup 150 questions fixture
  const correctAnswers = {};
  for (let i = 1; i <= 150; i++) {
    correctAnswers[`q-${i}`] = 'A';
  }

  // Candidate attempt:
  // 100 correct (A)
  // 30 wrong (B) -> 0 negative marks for wrong answers
  // 10 marked Option E (intentionally unattempted) -> 0 penalty
  // 10 wholly unmarked -> 10 * (1/3) = 3.33 deduction
  const userAnswers = {};
  for (let i = 1; i <= 100; i++) userAnswers[`q-${i}`] = 'A';
  for (let i = 101; i <= 130; i++) userAnswers[`q-${i}`] = 'B';
  for (let i = 131; i <= 140; i++) userAnswers[`q-${i}`] = 'E';
  // q-141 to q-150 are undefined (wholly unmarked)

  const config = {
    marksPerQuestion: 1,
    negativeMarking: 0,
    totalQuestions: 150,
    scoringModel: 'reet-2024-omr',
  };

  const result = computeReet2024Score(correctAnswers, userAnswers, config, 5400);

  assert.equal(result.total, 150);
  assert.equal(result.correct, 100);
  assert.equal(result.wrong, 30);
  assert.equal(result.omrOptionECount, 10);
  assert.equal(result.whollyUnmarkedCount, 10);
  assert.equal(result.whollyUnmarkedDeduction, 3.33);
  assert.equal(result.rawScore, 96.67); // 100 - 3.33
  assert.equal(result.isDisqualified, false); // 10 unmarked <= 15 (10% of 150)
});

test('REET 2024: Disqualification triggered when >10% of questions are wholly unmarked', () => {
  const correctAnswers = {};
  for (let i = 1; i <= 150; i++) {
    correctAnswers[`q-${i}`] = 'A';
  }

  // Candidate leaves 16 questions completely unmarked (> 10% of 150 = 15)
  const userAnswers = {};
  for (let i = 1; i <= 120; i++) userAnswers[`q-${i}`] = 'A';
  for (let i = 121; i <= 134; i++) userAnswers[`q-${i}`] = 'E';
  // q-135 to q-150 (16 questions) wholly unmarked

  const config = {
    marksPerQuestion: 1,
    negativeMarking: 0,
    totalQuestions: 150,
    examId: 'reet-level1',
  };

  const result = computeScore(correctAnswers, userAnswers, config, 6000);

  assert.equal(result.whollyUnmarkedCount, 16);
  assert.equal(result.isDisqualified, true);
  assert.ok(result.disqualificationReason.includes('Disqualified under REET-2024 Rule'));
});

test('REET 2024: Time Allocation is exactly 1.0 minute per question', () => {
  assert.equal(getOfficialTimePerQuestionSeconds('reet-level1'), 60);
  assert.equal(getOfficialTimePerQuestionSeconds('reet-level2-sst'), 60);
  assert.equal(getOfficialTimePerQuestionSeconds('reet-level2-science-math'), 60);

  // Full 150 question mock test is allocated 9000 seconds = 150 minutes
  assert.equal(computeOfficialAllocatedSeconds(150, 'reet-level1'), 9000);
});
