import type { PublicQuestion, ReviewedQuestion } from './question-types';
import { isLocalQuestionId, lookupQuestions } from './question-client';
import { studyStorage } from './storage';

const KEY = 'examsathi_question_snapshots';

/**
 * Only questions the server cannot rebuild (AI-made drills) are snapshotted in the browser.
 * Bank questions are fetched by id on demand, so the bank is never copied to the device.
 */
export function rememberQuestions(questions: ReviewedQuestion[]): void {
  const local = questions.filter(q => isLocalQuestionId(q.id));
  if (local.length === 0) return;
  const existing = readSnapshots();
  for (const question of local) existing[question.id] = question;
  studyStorage.setItem(KEY, JSON.stringify(existing));
}
function readSnapshots(): Record<string, ReviewedQuestion> {
  try { return JSON.parse(studyStorage.getItem(KEY) || '{}'); } catch { return {}; }
}

/** Saved questions by id: local snapshots first, everything else from the server (text only, no answers). */
export async function getVaultQuestions(ids: string[]): Promise<ReviewedQuestion[]> {
  const snapshots = readSnapshots();
  const missing = ids.filter(id => !snapshots[id]);
  let fetched: Record<string, PublicQuestion> = {};
  if (missing.length > 0) {
    try { fetched = Object.fromEntries((await lookupQuestions(missing)).map(q => [q.id, q])); } catch { /* Offline: show what is held locally. */ }
  }
  return ids.flatMap(id => snapshots[id] || fetched[id] || []);
}
export function saveCustomPractice(questions: ReviewedQuestion[]): void {
  rememberQuestions(questions);
  studyStorage.setItem('examsathi_custom_cbt_questions', JSON.stringify(questions));
}

export function savedReviewQuestions(reviewId: string): { questions: ReviewedQuestion[]; testTitle?: string; examId?: string } | null {
  try {
    const result = JSON.parse(studyStorage.getItem(`examsathi_result_${reviewId}`) || 'null');
    return result?.questions?.length ? result : null;
  } catch { return null; }
}
