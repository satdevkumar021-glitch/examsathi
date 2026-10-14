/**
 * Mastery, Priority and Spaced Repetition Engine.
 * Enforces Master Prompt v2 Part 3F:
 * 1. Mastery and priority are strictly separated.
 * 2. Mastery per topic requires a minimum sample (>= 10 attempted questions across >= 2 sessions).
 * 3. Time (speed) is a separate signal beside mastery, not subtracted from it.
 * 4. Priority = exam weightage x (1 - mastery) x recency-of-study factor.
 * 5. Standard SuperMemo SM-2 algorithm for flashcard scheduling.
 * 6. Explainable one-line recommendation reasons for students.
 */

export interface TopicAttemptSession {
  sessionId: string;
  timestamp: number; // Unix ms
  total: number;
  correct: number;
  avgTimeSeconds?: number;
}

export type MasteryStatus = 'insufficient-data' | 'weak' | 'moderate' | 'mastered';

export interface TopicMastery {
  topicId: string;
  status: MasteryStatus;
  totalAttempted: number;
  sessionCount: number;
  accuracy: number; // 0–100%
  recencyWeightedAccuracy: number; // 0–100%
  avgTimePerQuestionSeconds: number; // Speed signal shown beside mastery
  explanation: string;
}

export const MIN_MASTERY_QUESTIONS = 10;
export const MIN_MASTERY_SESSIONS = 2;

/**
 * Computes topic mastery with strict minimum-sample gating.
 * Part 3F.2: at least 10 attempted questions across at least 2 sessions
 * before labelling "weak" or "mastered"; below that, reports "insufficient-data".
 */
export function computeTopicMastery(
  topicId: string,
  sessions: TopicAttemptSession[],
  topicTitle = topicId
): TopicMastery {
  const totalAttempted = sessions.reduce((acc, s) => acc + s.total, 0);
  const totalCorrect = sessions.reduce((acc, s) => acc + s.correct, 0);
  const sessionCount = sessions.length;

  let totalTime = 0;
  let timeWeight = 0;
  for (const s of sessions) {
    if (typeof s.avgTimeSeconds === 'number' && s.avgTimeSeconds > 0) {
      totalTime += s.avgTimeSeconds * s.total;
      timeWeight += s.total;
    }
  }
  const avgTimePerQuestionSeconds = timeWeight > 0 ? Math.round((totalTime / timeWeight) * 10) / 10 : 0;

  // Gating: Minimum sample requirement
  if (totalAttempted < MIN_MASTERY_QUESTIONS || sessionCount < MIN_MASTERY_SESSIONS) {
    const rawAcc = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 1000) / 10 : 0;
    return {
      topicId,
      status: 'insufficient-data',
      totalAttempted,
      sessionCount,
      accuracy: rawAcc,
      recencyWeightedAccuracy: rawAcc,
      avgTimePerQuestionSeconds,
      explanation: `Need at least ${MIN_MASTERY_QUESTIONS} questions across ${MIN_MASTERY_SESSIONS} separate sessions to determine mastery (${totalAttempted}/${MIN_MASTERY_QUESTIONS} questions, ${sessionCount}/${MIN_MASTERY_SESSIONS} sessions completed).`,
    };
  }

  // Recency-weighted accuracy: later sessions have higher weight
  let weightedCorrect = 0;
  let weightedTotal = 0;
  const sortedSessions = [...sessions].sort((a, b) => a.timestamp - b.timestamp);
  sortedSessions.forEach((s, idx) => {
    const weight = 1 + (idx / Math.max(1, sortedSessions.length - 1)) * 0.5; // 1.0x to 1.5x recency boost
    weightedCorrect += s.correct * weight;
    weightedTotal += s.total * weight;
  });

  const accuracy = Math.round((totalCorrect / totalAttempted) * 1000) / 10;
  const recencyWeightedAccuracy = Math.round((weightedCorrect / weightedTotal) * 1000) / 10;

  let status: MasteryStatus;
  let label: string;
  if (recencyWeightedAccuracy < 60) {
    status = 'weak';
    label = 'Needs Focus (Weak)';
  } else if (recencyWeightedAccuracy < 80) {
    status = 'moderate';
    label = 'Developing (Moderate)';
  } else {
    status = 'mastered';
    label = 'Exam Ready (Mastered)';
  }

  return {
    topicId,
    status,
    totalAttempted,
    sessionCount,
    accuracy,
    recencyWeightedAccuracy,
    avgTimePerQuestionSeconds,
    explanation: `${topicTitle}: ${label} based on ${recencyWeightedAccuracy}% accuracy across ${totalAttempted} questions in ${sessionCount} sessions.`,
  };
}

export type PriorityLevel = 'critical' | 'high' | 'medium' | 'low';

export interface StudyPriority {
  topicId: string;
  topicTitle: string;
  examId: string;
  weightagePercent: number; // e.g. 8 for 8%
  priorityScore: number;
  priorityLevel: PriorityLevel;
  reason: string;
}

/**
 * Computes study priority per Part 3F.4:
 * Priority = exam weightage x (1 - mastery) x recency-of-study factor.
 * High-weightage, low-mastery, un-revised topics rise to the top.
 */
export function computeStudyPriority(params: {
  topicId: string;
  topicTitle: string;
  examId: string;
  weightagePercent: number; // verified official weightage percentage (0–100)
  mastery: TopicMastery;
  daysSinceLastStudied: number;
}): StudyPriority {
  const { topicId, topicTitle, examId, weightagePercent, mastery, daysSinceLastStudied } = params;

  // Effective mastery factor: if insufficient data, assume neutral 0.5
  const masteryFraction = mastery.status === 'insufficient-data'
    ? 0.5
    : Math.max(0, Math.min(1, mastery.recencyWeightedAccuracy / 100));

  // Recency factor: scales from 1.0 (studied today) to 2.0 (not studied in 14+ days)
  const recencyFactor = 1.0 + Math.min(1.0, Math.max(0, daysSinceLastStudied) / 14);

  // Priority formula: Weightage * (1 - Mastery) * RecencyFactor
  const priorityScore = Math.round(weightagePercent * (1.0 - masteryFraction) * recencyFactor * 10) / 10;

  let priorityLevel: PriorityLevel;
  if (priorityScore >= 12) priorityLevel = 'critical';
  else if (priorityScore >= 7) priorityLevel = 'high';
  else if (priorityScore >= 3) priorityLevel = 'medium';
  else priorityLevel = 'low';

  // Part 3F.6: Explainable one-line recommendation reason
  let reason: string;
  if (mastery.status === 'insufficient-data') {
    reason = `${topicTitle} carries ~${weightagePercent}% of marks. You have completed only ${mastery.totalAttempted} questions so far — take a practice drill to establish baseline.`;
  } else {
    reason = `You scored ${mastery.recencyWeightedAccuracy}% across ${mastery.totalAttempted} questions in ${topicTitle}, which carries ~${weightagePercent}% of marks. Not reviewed in ${daysSinceLastStudied} days. Priority: ${priorityLevel.toUpperCase()}.`;
  }

  return {
    topicId,
    topicTitle,
    examId,
    weightagePercent,
    priorityScore,
    priorityLevel,
    reason,
  };
}

// ============================================================
// SUPERMEMO SM-2 STANDARD SPACED REPETITION (Part 3F.5)
// ============================================================

export interface Sm2Card {
  cardId: string;
  repetitions: number;
  intervalDays: number;
  easeFactor: number; // default 2.5, min 1.3
  lastReviewDate: string; // YYYY-MM-DD
  dueDate: string; // YYYY-MM-DD
}

export function createInitialSm2Card(cardId: string, today = new Date().toISOString().slice(0, 10)): Sm2Card {
  return {
    cardId,
    repetitions: 0,
    intervalDays: 1,
    easeFactor: 2.5,
    lastReviewDate: today,
    dueDate: today,
  };
}

/**
 * Standard SuperMemo SM-2 algorithm.
 * quality: 0 to 5
 * 5: perfect response
 * 4: correct response after hesitation
 * 3: correct response with serious difficulty
 * 2: incorrect response; where the correct one seemed easy to recall
 * 1: incorrect response; the correct one remembered
 * 0: complete blackout
 */
export function computeSm2Review(
  card: Sm2Card,
  quality: number,
  today = new Date().toISOString().slice(0, 10)
): Sm2Card {
  const q = Math.max(0, Math.min(5, Math.round(quality)));
  let repetitions = card.repetitions;
  let intervalDays = card.intervalDays;
  let easeFactor = card.easeFactor;

  if (q >= 3) {
    if (repetitions === 0) {
      intervalDays = 1;
    } else if (repetitions === 1) {
      intervalDays = 6;
    } else {
      intervalDays = Math.round(intervalDays * easeFactor);
    }
    repetitions++;
  } else {
    repetitions = 0;
    intervalDays = 1;
  }

  // Update Ease Factor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;
  easeFactor = Math.round(easeFactor * 100) / 100;

  // Calculate new due date
  const nextDate = new Date(today);
  nextDate.setDate(nextDate.getDate() + intervalDays);
  const dueDate = nextDate.toISOString().slice(0, 10);

  return {
    cardId: card.cardId,
    repetitions,
    intervalDays,
    easeFactor,
    lastReviewDate: today,
    dueDate,
  };
}
