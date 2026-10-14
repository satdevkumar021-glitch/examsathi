import { computeScore, type ScoreResult } from './scoring';

export interface AttemptInput {
  attemptId: string;
  examId: string;
  testId: string;
  /** Every question served in the attempt, answered or not. */
  questionIds: string[];
  /** Only the questions the learner answered. */
  answers: Record<string, string>;
  timeTakenSeconds: number;
}

export type AttemptValidation = { ok: true; value: AttemptInput } | { ok: false; message: string };

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MAX_QUESTIONS = 300;

/** Strict shape check for an untrusted submission body. */
export function validateAttemptBody(body: unknown): AttemptValidation {
  if (!body || typeof body !== 'object') return { ok: false, message: 'Invalid request.' };
  const { attemptId, examId, testId, questionIds, answers, timeTakenSeconds } = body as Record<string, unknown>;
  if (typeof attemptId !== 'string' || !UUID.test(attemptId)) return { ok: false, message: 'Invalid attempt id.' };
  if (typeof examId !== 'string' || !examId || examId.length > 100) return { ok: false, message: 'Invalid exam.' };
  if (typeof testId !== 'string' || !testId || testId.length > 200) return { ok: false, message: 'Invalid test.' };
  if (typeof timeTakenSeconds !== 'number' || !Number.isFinite(timeTakenSeconds) || timeTakenSeconds < 0 || timeTakenSeconds > 21600) return { ok: false, message: 'Invalid time.' };
  if (!Array.isArray(questionIds) || questionIds.length === 0 || questionIds.length > MAX_QUESTIONS) return { ok: false, message: 'Invalid question list.' };
  if (!questionIds.every(id => typeof id === 'string' && id.length > 0 && id.length <= 200)) return { ok: false, message: 'Invalid question id.' };
  if (new Set(questionIds).size !== questionIds.length) return { ok: false, message: 'Duplicate question ids.' };
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) return { ok: false, message: 'Invalid answers.' };
  const clean: Record<string, string> = {};
  for (const [id, value] of Object.entries(answers as Record<string, unknown>)) {
    if (typeof value !== 'string' || !/^[A-D]$/.test(value)) return { ok: false, message: 'Invalid answer.' };
    clean[id] = value;
  }
  return { ok: true, value: { attemptId, examId, testId, questionIds: questionIds as string[], answers: clean, timeTakenSeconds: Math.round(timeTakenSeconds) } };
}

export type ServerScore = { ok: true; score: ScoreResult } | { ok: false; message: string };

/**
 * Re-scores a submission against the server's answer key, ignoring any score the client computed.
 * Unknown question ids and answers outside the served set are rejected.
 * `lookup` maps a question id to its correct option.
 */
export function scoreSubmission(
  input: AttemptInput,
  lookup: (id: string) => string | undefined,
  penalty: number,
): ServerScore {
  const correctAnswers: Record<string, string> = {};
  for (const id of input.questionIds) {
    const correct = lookup(id);
    if (!correct) return { ok: false, message: 'Unknown question in submission.' };
    correctAnswers[id] = correct;
  }
  for (const id of Object.keys(input.answers)) if (!(id in correctAnswers)) return { ok: false, message: 'Answer for a question outside this attempt.' };
  const score = computeScore(
    correctAnswers,
    input.answers,
    { marksPerQuestion: 1, negativeMarking: penalty, totalQuestions: input.questionIds.length, examId: input.examId },
    input.timeTakenSeconds,
  );
  return { ok: true, score };
}
