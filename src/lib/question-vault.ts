import type { Question } from './data/questions';
import { ALL_QUESTIONS } from './data/questions';
import { studyStorage } from './storage';

const KEY = 'examsathi_question_snapshots';
export function rememberQuestions(questions: Question[]): void {
  const existing = readSnapshots();
  const staticIds = new Set(ALL_QUESTIONS.map(q => q.id));
  for (const question of questions) if (!staticIds.has(question.id)) existing[question.id] = question;
  studyStorage.setItem(KEY, JSON.stringify(existing));
}
function readSnapshots(): Record<string, Question> {
  try { return JSON.parse(studyStorage.getItem(KEY) || '{}'); } catch { return {}; }
}
export function getVaultQuestions(ids: string[]): Question[] {
  const snapshots = readSnapshots();
  // Old attempts also provide recoverable snapshots for existing saved IDs.
  try {
    const last = JSON.parse(studyStorage.getItem('examsathi_last_result') || 'null');
    for (const q of last?.questions || []) snapshots[q.id] = q;
    const history = JSON.parse(studyStorage.getItem('examsathi_mock_history') || '[]');
    for (const attempt of history) {
      const result = JSON.parse(studyStorage.getItem(`examsathi_result_${attempt.attemptId}`) || 'null');
      for (const q of result?.questions || []) snapshots[q.id] = q;
    }
  } catch { /* Ignore malformed legacy attempts. */ }
  const bank = new Map(ALL_QUESTIONS.map(q => [q.id, q]));
  return ids.flatMap(id => snapshots[id] || bank.get(id) || []).filter(Boolean);
}
export function saveCustomPractice(questions: Question[]): void {
  rememberQuestions(questions);
  studyStorage.setItem('examsathi_custom_cbt_questions', JSON.stringify(questions));
}

export function savedReviewQuestions(reviewId: string): { questions: Question[]; testTitle?: string; examId?: string } | null {
  try {
    const result = JSON.parse(studyStorage.getItem(`examsathi_result_${reviewId}`) || 'null');
    return result?.questions?.length ? result : null;
  } catch { return null; }
}
