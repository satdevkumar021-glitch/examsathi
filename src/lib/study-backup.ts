import { studyStorage } from './storage';
import { getStoredUser } from './auth';
const KEYS = [
  'examsathi_question_snapshots', 'examsathi_saved_review_notes', 'examsathi_mock_history',
  'examsathi_last_result', 'examsathi_preferences', 'examsathi_srs_states',
  'examsathi_fsrs_deck', 'examsathi_activity_days', 'examsathi_roadmap_completed_v2',
  'examsathi_xp_awards', 'examsathi_study_start_date',
  'examsathi_study_profile', 'examsathi_completed_question_keys',
];
const allowed = (key: string) => KEYS.includes(key) || /^examsathi_result_[a-f0-9-]{36}$/.test(key);
function validQuestion(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false;
  const q = value as Record<string, unknown>;
  const text = (entry: unknown) => Boolean(entry && typeof entry === 'object' && ['hi', 'pa', 'en'].every(lang => typeof (entry as Record<string, unknown>)[lang] === 'string'));
  const options = q.options as Record<string, unknown> | undefined;
  return typeof q.id === 'string' && !['__proto__', 'constructor', 'prototype'].includes(q.id) && typeof q.topicId === 'string' && text(q.question) && text(q.explanation) && Boolean(options && ['A', 'B', 'C', 'D'].every(letter => text(options[letter]))) && ['A', 'B', 'C', 'D'].includes(String(q.correct));
}
export function exportStudyBackup(): string {
  const user = getStoredUser();
  studyStorage.setItem('examsathi_study_profile', JSON.stringify({ xp: user.xp, libraryHours: user.libraryHours, librarySeconds: user.librarySeconds, favoriteQuestionIds: user.favoriteQuestionIds, bookmarkedQuestionIds: user.bookmarkedQuestionIds }));
  const history = JSON.parse(studyStorage.getItem('examsathi_mock_history') || '[]') as Array<{ attemptId?: string }>;
  const attemptKeys = history.flatMap(item => item.attemptId && allowed(`examsathi_result_${item.attemptId}`) ? [`examsathi_result_${item.attemptId}`] : []);
  const records = Object.fromEntries([...KEYS, ...attemptKeys].flatMap(key => {
    const value = studyStorage.getItem(key);
    return value === null ? [] : [[key, value]];
  }));
  return JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), records }, null, 2);
}
/** Replace only allowlisted study data. Never import credentials/account identity. */
export function restoreStudyBackup(text: string): void {
  if (text.length > 10 * 1024 * 1024) throw new Error('Backup exceeds 10 MB.');
  const backup = JSON.parse(text);
  if (backup.version !== 1 || !backup.records || typeof backup.records !== 'object' || Array.isArray(backup.records)) throw new Error('Invalid backup format.');
  const records = Object.entries(backup.records);
  for (const [key, value] of records) {
    if (!allowed(key) || typeof value !== 'string') throw new Error('Backup contains unsupported data.');
    if (key === 'examsathi_study_start_date') { if (!Number.isFinite(Date.parse(value))) throw new Error('Invalid date.'); continue; }
    const parsed = JSON.parse(value);
    if (parsed === null || (typeof parsed !== 'object' && key !== 'examsathi_study_start_date')) throw new Error('Invalid study record.');
    const arrayKeys = ['examsathi_saved_review_notes', 'examsathi_mock_history', 'examsathi_activity_days'];
    if (arrayKeys.includes(key) !== Array.isArray(parsed)) throw new Error('Invalid record shape.');
    if (key === 'examsathi_saved_review_notes' && !parsed.every((note: Record<string, unknown>) => typeof note.id === 'string' && typeof note.title === 'string' && typeof note.explanation === 'string' && typeof note.correctText === 'string')) throw new Error('Invalid saved notes.');
    if (key === 'examsathi_activity_days' && !parsed.every((day: unknown) => typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day))) throw new Error('Invalid activity dates.');
    if (key === 'examsathi_preferences' && (!parsed.state || !['en', 'hi', 'pa'].includes(parsed.state.language) || !Array.isArray(parsed.state.completedTopics) || !parsed.state.completedTopics.every((topic: unknown) => typeof topic === 'string'))) throw new Error('Invalid preferences.');
    if (key === 'examsathi_study_profile' && (!Number.isFinite(parsed.xp) || parsed.xp < 0 || !Number.isFinite(parsed.libraryHours) || parsed.libraryHours < 0 || !Array.isArray(parsed.favoriteQuestionIds) || !Array.isArray(parsed.bookmarkedQuestionIds))) throw new Error('Invalid study profile.');
    if (key === 'examsathi_study_profile' && (![...parsed.favoriteQuestionIds, ...parsed.bookmarkedQuestionIds].every(id => typeof id === 'string') || (parsed.librarySeconds !== undefined && !Number.isFinite(parsed.librarySeconds)))) throw new Error('Invalid study profile.');
    if (key === 'examsathi_question_snapshots' && !Object.values(parsed).every(validQuestion)) throw new Error('Invalid question snapshots.');
    if ((key === 'examsathi_last_result' || key.startsWith('examsathi_result_')) && (!Array.isArray(parsed.questions) || !parsed.questions.every(validQuestion))) throw new Error('Invalid attempt questions.');
    if (key === 'examsathi_mock_history' && !parsed.every((attempt: Record<string, unknown>) => attempt && (attempt.testTitle === undefined || typeof attempt.testTitle === 'string') && (attempt.attemptId === undefined || typeof attempt.attemptId === 'string') && ['percentage', 'correct', 'total'].every(field => attempt[field] === undefined || Number.isFinite(attempt[field])))) throw new Error('Invalid attempt history.');
  }
  const keys = Array.from(new Set([...KEYS, ...records.map(([key]) => key), 'examsathi_auth_user']));
  const before = new Map(keys.map(key => [key, studyStorage.getItem(key)]));
  const currentUser = getStoredUser();
  try {
    for (const key of KEYS) studyStorage.removeItem(key);
    for (const [key, value] of records) studyStorage.setItem(key, value as string);
    const profile = JSON.parse(studyStorage.getItem('examsathi_study_profile') || 'null');
    if (profile) studyStorage.setItem('examsathi_auth_user', JSON.stringify({ ...currentUser, xp: profile.xp, libraryHours: profile.libraryHours, librarySeconds: profile.librarySeconds, favoriteQuestionIds: profile.favoriteQuestionIds, bookmarkedQuestionIds: profile.bookmarkedQuestionIds }));
  } catch (error) {
    for (const key of keys) studyStorage.removeItem(key);
    for (const [key, value] of before) { if (value !== null) studyStorage.setItem(key, value); else studyStorage.removeItem(key); }
    throw error;
  }
}
