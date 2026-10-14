import { getStoredUser, saveUserSession } from './auth';
import { studyStorage } from './storage';

/** Local calendar day (YYYY-MM-DD), so midnight UTC does not split a student's study day. */
export function studyDay(now = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

/**
 * Calculates current active study streak.
 * If today has study activity, counts today + consecutive prior days.
 * If today has not yet been studied, checks yesterday: if yesterday was active,
 * streak is preserved while awaiting today's study.
 */
export function activityStreak(days: string[], today = studyDay()): number {
  const seen = new Set(days);
  const cursor = new Date(`${today}T12:00:00`);
  if (!seen.has(studyDay(cursor))) cursor.setDate(cursor.getDate() - 1);
  let count = 0;
  while (seen.has(studyDay(cursor))) {
    count++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

/**
 * Check if the user has already studied today.
 */
export function isStudiedToday(days?: string[], today = studyDay()): boolean {
  const recorded = days || (JSON.parse(studyStorage.getItem('examsathi_activity_days') || '[]') as string[]);
  return recorded.includes(today);
}

/**
 * Record study activity for today across any app feature (lessons, practice, tests, flashcards, typing).
 */
export function recordStudyActivity(): void {
  const today = studyDay();
  const days = JSON.parse(studyStorage.getItem('examsathi_activity_days') || '[]') as string[];
  const updated = Array.from(new Set([...days, today])).sort().slice(-400);
  studyStorage.setItem('examsathi_activity_days', JSON.stringify(updated));
  
  const user = getStoredUser();
  user.streak = activityStreak(updated);
  saveUserSession(user);

  // Dispatch browser event so reactive UI badges and widgets update instantly
  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(new CustomEvent('examsathi_streak_updated', {
        detail: { streak: user.streak, today, days: updated }
      }));
      window.dispatchEvent(new Event('storage'));
    } catch {
      // Environments without full DOM Event support (e.g. headless tests)
    }
  }
}

/**
 * Awards study XP once per unique task ID.
 * Returns true on first award, false on duplicate.
 * Always records today's study activity.
 */
export function awardStudyXP(id: string, xp: number): boolean {
  recordStudyActivity();
  const awards = JSON.parse(studyStorage.getItem('examsathi_xp_awards') || '{}') as Record<string, boolean>;
  if (awards[id]) return false;
  awards[id] = true;
  studyStorage.setItem('examsathi_xp_awards', JSON.stringify(awards));
  const user = getStoredUser();
  user.xp += xp;
  saveUserSession(user);
  return true;
}

export interface DayStreakStatus {
  date: string;
  dayIndex: number;
  dayLabel: { en: string; hi: string; pa: string };
  dayNumber: number;
  active: boolean;
  isToday: boolean;
}

/**
 * Returns 7-day rolling activity status (past 6 days + today).
 */
export function getWeeklyStreakStatus(days?: string[], today = studyDay()): DayStreakStatus[] {
  const recorded = new Set(days || (JSON.parse(studyStorage.getItem('examsathi_activity_days') || '[]') as string[]));
  const dayNamesEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayNamesHi = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'];
  const dayNamesPa = ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁੱਧ', 'ਵੀਰ', 'ਸ਼ੁੱਕਰ', 'ਸ਼ਨਿੱਚਰ'];

  const result: DayStreakStatus[] = [];
  const baseDate = new Date(`${today}T12:00:00`);

  // Past 6 days to today (7 days total)
  for (let i = 6; i >= 0; i--) {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() - i);
    const dateStr = studyDay(d);
    const dIdx = d.getDay();
    result.push({
      date: dateStr,
      dayIndex: dIdx,
      dayLabel: {
        en: dayNamesEn[dIdx],
        hi: dayNamesHi[dIdx],
        pa: dayNamesPa[dIdx],
      },
      dayNumber: d.getDate(),
      active: recorded.has(dateStr),
      isToday: i === 0,
    });
  }
  return result;
}

/**
 * Returns streak milestone message and next target.
 */
export function getStreakMilestone(streak: number): {
  nextMilestone: number;
  message: { en: string; hi: string; pa: string };
} {
  const milestones = [3, 7, 14, 21, 30, 50, 75, 100, 150, 200, 365];
  const nextMilestone = milestones.find(m => m > streak) || (streak + 30);

  if (streak === 0) {
    return {
      nextMilestone: 1,
      message: {
        en: 'Start your study streak today! Read a lesson or take a quiz.',
        hi: 'आज ही अपनी अध्ययन लकीर शुरू करें! कोई पाठ पढ़ें या टेस्ट दें।',
        pa: 'ਅੱਜ ਹੀ ਆਪਣੀ ਅਧਿਐਨ ਸਟ੍ਰੀਕ ਸ਼ੁਰੂ ਕਰੋ! ਕੋਈ ਪਾਠ ਪੜ੍ਹੋ ਜਾਂ ਕੁਇਜ਼ ਦਿਓ।',
      },
    };
  }

  if (streak >= 30) {
    return {
      nextMilestone,
      message: {
        en: `Unstoppable ${streak}-day streak! You are in the top 1% of dedicated aspirants.`,
        hi: `शानदार ${streak} दिन की लकीर! आप शीर्ष 1% अनुशासित अभ्यर्थियों में शामिल हैं।`,
        pa: `ਸ਼ਾਨਦਾਰ ${streak} ਦਿਨਾਂ ਦੀ ਸਟ੍ਰੀਕ! ਤੁਸੀਂ ਸਿਖਰਲੇ 1% ਮਿਹਨਤੀ ਉਮੀਦਵਾਰਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹੋ।`,
      },
    };
  }

  if (streak >= 7) {
    return {
      nextMilestone,
      message: {
        en: `Incredible ${streak}-day consistency! Next milestone is ${nextMilestone} days.`,
        hi: `अद्भुत ${streak} दिन की निरंतरता! अगला लक्ष्य ${nextMilestone} दिन है।`,
        pa: `ਲਾਜਵਾਬ ${streak} ਦਿਨਾਂ ਦੀ ਨਿਰੰਤਰਤਾ! ਅਗਲਾ ਟੀਚਾ ${nextMilestone} ਦਿਨ ਹੈ।`,
      },
    };
  }

  return {
    nextMilestone,
    message: {
      en: `Great pace! Keep studying daily to hit your ${nextMilestone}-day streak milestone.`,
      hi: `बहुत बढ़िया शुरुआत! ${nextMilestone} दिन की लकीर छूने के लिए दैनिक अभ्यास जारी रखें।`,
      pa: `ਵਧੀਆ ਸ਼ੁਰੂਆਤ! ${nextMilestone} ਦਿਨਾਂ ਦੀ ਸਟ੍ਰੀਕ ਪੂਰੀ ਕਰਨ ਲਈ ਰੋਜ਼ਾਨਾ ਅਭਿਆਸ ਜਾਰੀ ਰੱਖੋ।`,
    },
  };
}
