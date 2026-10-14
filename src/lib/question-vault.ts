import type { PublicQuestion, ReviewedQuestion } from './question-types';
import { isLocalQuestionId, lookupQuestions } from './question-client';
import { studyStorage } from './storage';

const KEY = 'examsathi_question_snapshots';
const MAX_SNAPSHOTS = 100;

/**
 * Only questions the server cannot rebuild (AI-made drills) are snapshotted in the browser.
 * Bank questions are fetched by id on demand, so the bank is never copied to the device.
 * Snapshots are capped at MAX_SNAPSHOTS to prevent LocalStorage quota overflow on mobile devices.
 */
export function rememberQuestions(questions: ReviewedQuestion[]): void {
  const local = questions.filter(q => isLocalQuestionId(q.id));
  if (local.length === 0) return;
  const existing = readSnapshots();
  for (const question of local) existing[question.id] = question;
  const keys = Object.keys(existing);
  if (keys.length > MAX_SNAPSHOTS) {
    const toRemove = keys.slice(0, keys.length - MAX_SNAPSHOTS);
    for (const k of toRemove) delete existing[k];
  }
  try {
    studyStorage.setItem(KEY, JSON.stringify(existing));
  } catch {
    // If quota exceeded, trim more aggressively (keep 50) and retry
    const trimmedKeys = Object.keys(existing);
    if (trimmedKeys.length > 50) {
      for (const k of trimmedKeys.slice(0, trimmedKeys.length - 50)) delete existing[k];
      try { studyStorage.setItem(KEY, JSON.stringify(existing)); } catch {}
    }
  }
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
