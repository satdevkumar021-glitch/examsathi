import { getStoredUser, saveUserSession } from './auth';
import { studyStorage } from './storage';

/** Local calendar day, so midnight UTC does not split a student's study day. */
export function studyDay(now = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
export function activityStreak(days: string[], today = studyDay()): number {
  const seen = new Set(days);
  const cursor = new Date(`${today}T12:00:00`);
  if (!seen.has(studyDay(cursor))) cursor.setDate(cursor.getDate() - 1);
  let count = 0;
  while (seen.has(studyDay(cursor))) { count++; cursor.setDate(cursor.getDate() - 1); }
  return count;
}
export function recordStudyActivity(): void {
  const days = JSON.parse(studyStorage.getItem('examsathi_activity_days') || '[]') as string[];
  const updated = Array.from(new Set([...days, studyDay()])).sort().slice(-400);
  studyStorage.setItem('examsathi_activity_days', JSON.stringify(updated));
  const user = getStoredUser();
  user.streak = activityStreak(updated);
  saveUserSession(user);
}
export function awardStudyXP(id: string, xp: number): boolean {
  const awards = JSON.parse(studyStorage.getItem('examsathi_xp_awards') || '{}') as Record<string, boolean>;
  if (awards[id]) return false;
  awards[id] = true;
  studyStorage.setItem('examsathi_xp_awards', JSON.stringify(awards));
  const user = getStoredUser();
  user.xp += xp;
  saveUserSession(user);
  recordStudyActivity();
  return true;
}
