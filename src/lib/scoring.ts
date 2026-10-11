// ============================================================
// ExamSathi - Scoring Engine (pure functions, no side effects)
// These functions must match server-side scoring exactly.
// When a real backend is added, the server uses these same formulas.
// ============================================================

export interface ScoreResult {
  total: number;
  correct: number;
  wrong: number;
  unattempted: number;
  rawScore: number;
  maxScore: number;
  percentage: number;
  accuracy: number; // correct / attempted (not total)
  timeTakenSeconds: number;
}

export interface ScoringConfig {
  marksPerQuestion: number;   // e.g. 1
  negativeMarking: number;    // e.g. 0.25 (deducted per wrong answer)
  totalQuestions: number;
  examId?: string;
  scoringModel?: 'standard' | 'reet-2024-omr';
}

export interface ReetOmrScoreResult extends ScoreResult {
  omrOptionECount: number;            // Intentionally unattempted questions with 5th bubble (E) marked
  whollyUnmarkedCount: number;         // Wholly unmarked questions (none of 5 bubbles filled)
  whollyUnmarkedDeduction: number;     // Total marks deducted for wholly unmarked items (1/3 per question)
  isDisqualified: boolean;             // Disqualification flag (>10% unmarked)
  disqualificationReason?: string;
}

/**
 * Computes REET 2024 5-Option OMR scoring with official penalty & disqualification semantics.
 * Official Rajasthan Board notification rules (reet2024final121224.PDF):
 * - Options A–D: standard question options.
 * - Option E: intentionally unattempted question (no deduction).
 * - Incorrect answers (A–D): 0 negative marks (no ordinary negative marking).
 * - Wholly unmarked items (no option marked): 1/3 (0.33) marks deducted per question.
 * - > 10% of total questions wholly unmarked: Candidate is disqualified.
 */
export function computeReet2024Score(
  correctAnswers: Record<string, string>,
  userAnswers: Record<string, string>,
  config: ScoringConfig,
  timeTakenSeconds: number
): ReetOmrScoreResult {
  const questionIds = Object.keys(correctAnswers);
  let correct = 0;
  let wrong = 0;
  let omrOptionECount = 0;
  let whollyUnmarkedCount = 0;

  for (const qId of questionIds) {
    const userAns = (userAnswers[qId] || '').trim().toUpperCase();
    const correctAns = (correctAnswers[qId] || '').trim().toUpperCase();

    if (userAns === 'E') {
      omrOptionECount++;
    } else if (!userAns || userAns === 'NONE' || userAns === 'UNMARKED') {
      whollyUnmarkedCount++;
    } else if (userAns === correctAns) {
      correct++;
    } else {
      wrong++;
    }
  }

  const marksPerQuestion = config.marksPerQuestion || 1;
  const whollyUnmarkedDeduction = parseFloat((whollyUnmarkedCount * (marksPerQuestion / 3)).toFixed(2));
  const rawScore = parseFloat((correct * marksPerQuestion - whollyUnmarkedDeduction).toFixed(2));
  const maxScore = (config.totalQuestions || questionIds.length) * marksPerQuestion;
  const attempted = correct + wrong + omrOptionECount;
  const unattempted = omrOptionECount + whollyUnmarkedCount;
  const percentage = maxScore > 0 ? parseFloat(((rawScore / maxScore) * 100).toFixed(1)) : 0;
  const accuracy = (correct + wrong) > 0 ? parseFloat(((correct / (correct + wrong)) * 100).toFixed(1)) : 0;

  const totalQuestions = config.totalQuestions || questionIds.length || 150;
  const isDisqualified = whollyUnmarkedCount > (totalQuestions * 0.10);
  const disqualificationReason = isDisqualified
    ? `Disqualified under REET-2024 Rule: ${whollyUnmarkedCount} questions (>10% of ${totalQuestions}) were left completely unmarked without darkening Option E.`
    : undefined;

  return {
    total: questionIds.length,
    correct,
    wrong,
    unattempted,
    omrOptionECount,
    whollyUnmarkedCount,
    whollyUnmarkedDeduction,
    isDisqualified,
    disqualificationReason,
    rawScore,
    maxScore,
    percentage,
    accuracy,
    timeTakenSeconds,
  };
}

/**
 * Computes the score for a completed mock attempt.
 * correctAnswers: map of questionId -> correct option ('A'|'B'|'C'|'D'|'E')
 * userAnswers: map of questionId -> selected option ('A'|'B'|'C'|'D'|'E')
 * NOTE: correctAnswers must NEVER be sent to the client before submission.
 * In production, this function runs server-side only.
 */
export function computeScore(
  correctAnswers: Record<string, string>,
  userAnswers: Record<string, string>,
  config: ScoringConfig,
  timeTakenSeconds: number
): ScoreResult | ReetOmrScoreResult {
  const isReet = config.scoringModel === 'reet-2024-omr' || (config.examId && config.examId.toLowerCase().includes('reet'));
  if (isReet) {
    return computeReet2024Score(correctAnswers, userAnswers, config, timeTakenSeconds);
  }

  const questionIds = Object.keys(correctAnswers);
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  for (const qId of questionIds) {
    const userAns = userAnswers[qId];
    const correctAns = correctAnswers[qId];
    if (!userAns) {
      unattempted++;
    } else if (userAns === correctAns) {
      correct++;
    } else {
      wrong++;
    }
  }

  const rawScore = parseFloat(
    (correct * config.marksPerQuestion - wrong * config.negativeMarking).toFixed(2)
  );
  const maxScore = config.totalQuestions * config.marksPerQuestion;
  const attempted = correct + wrong;
  const percentage = maxScore > 0 ? parseFloat(((rawScore / maxScore) * 100).toFixed(1)) : 0;
  const accuracy = attempted > 0 ? parseFloat(((correct / attempted) * 100).toFixed(1)) : 0;

  return {
    total: questionIds.length,
    correct,
    wrong,
    unattempted,
    rawScore,
    maxScore,
    percentage,
    accuracy,
    timeTakenSeconds,
  };
}

/**
 * Computes topic-wise performance breakdown.
 */
export interface TopicBreakdown {
  topicId: string;
  total: number;
  correct: number;
  wrong: number;
  accuracy: number;
}

export function computeTopicBreakdown(
  questions: Array<{ id: string; topicId: string }>,
  correctAnswers: Record<string, string>,
  userAnswers: Record<string, string>
): TopicBreakdown[] {
  const byTopic: Record<string, { total: number; correct: number; wrong: number }> = {};

  for (const q of questions) {
    if (!byTopic[q.topicId]) byTopic[q.topicId] = { total: 0, correct: 0, wrong: 0 };
    byTopic[q.topicId].total++;
    const ua = userAnswers[q.id];
    const ca = correctAnswers[q.id];
    if (ua) {
      if (ua === ca) byTopic[q.topicId].correct++;
      else byTopic[q.topicId].wrong++;
    }
  }

  return Object.entries(byTopic).map(([topicId, stats]) => ({
    topicId,
    total: stats.total,
    correct: stats.correct,
    wrong: stats.wrong,
    accuracy: stats.total > 0 ? parseFloat(((stats.correct / stats.total) * 100).toFixed(1)) : 0,
  }));
}

/**
 * Calculates standard exam time allowance per question in seconds
 * based on official board notification guidelines (e.g., REET/CTET = 1 min/q, SSC Tier 1 = 36s/q).
 */
export function getOfficialTimePerQuestionSeconds(examId?: string): number {
  if (!examId) return 60;
  const id = examId.toLowerCase();
  if (id.includes('ssc-cgl') || id.includes('ssc-chsl')) return 36; // 60 mins for 100 questions
  if (id.includes('agniveer') || id.includes('capf')) return 45; // 60 mins for 80 questions / 50 questions
  if (id.includes('police') || id.includes('patwari')) return 72; // 120 mins for 100 questions
  if (id.includes('reet') || id.includes('ctet') || id.includes('pstet') || id.includes('htet') || id.includes('utet')) return 60; // 150 mins for 150 questions (1.0 min/q)
  if (id.includes('master-cadre') || id.includes('ett') || id.includes('clerk')) return 60; // 100-150 mins for 100-150 questions (1.0 min/q)
  return 60;
}

/**
 * Derives official allocated duration in seconds for a given question set count and exam.
 */
export function computeOfficialAllocatedSeconds(questionCount: number, examId?: string, overrideMinutes?: number): number {
  if (overrideMinutes !== undefined && Number.isFinite(overrideMinutes)) {
    return Math.max(60, Math.min(10800, Math.round(overrideMinutes * 60)));
  }
  const perQuestionSeconds = getOfficialTimePerQuestionSeconds(examId);
  return Math.max(300, Math.round(questionCount * perQuestionSeconds));
}
