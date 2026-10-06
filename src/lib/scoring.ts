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
}

/**
 * Computes the score for a completed mock attempt.
 * correctAnswers: map of questionId -> correct option ('A'|'B'|'C'|'D')
 * userAnswers: map of questionId -> selected option ('A'|'B'|'C'|'D')
 * NOTE: correctAnswers must NEVER be sent to the client before submission.
 * In production, this function runs server-side only.
 */
export function computeScore(
  correctAnswers: Record<string, string>,
  userAnswers: Record<string, string>,
  config: ScoringConfig,
  timeTakenSeconds: number
): ScoreResult {
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
