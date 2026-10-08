import { studyStorage } from './storage';
import { questionIdentity } from './data/question_bank_engine';
import type { Question } from './data/questions';
const KEY = 'examsathi_completed_question_keys';
export function completedQuestionKeys(): string[] {
  try {
    const value = JSON.parse(studyStorage.getItem(KEY) || '{}');
    return Object.keys(value).filter(key => value[key] === true);
  } catch { return []; }
}
export function rememberCompletedQuestions(questions: Question[]): void {
  const keys = new Set([...completedQuestionKeys(), ...questions.map(questionIdentity)]);
  studyStorage.setItem(KEY, JSON.stringify(Object.fromEntries([...keys].map(key => [key, true]))));
}
