import { studyStorage } from './storage';

// ============================================================
// ExamSathi - Focus & Pomodoro Session Engine
// Compliant with Master AI Specification Section 9:
// - Adjustable focus/break periods (25/45/60m focus, 5/10/15m break).
// - Pause/resume, background-safe timing (drift-free via deadline math).
// - Clear reset functionality.
// - Optional, non-punitive motivational nudges (opt-in/out).
// ============================================================

export interface FocusSession {
  id: string;
  minutes: 25 | 45 | 60 | 5 | 10 | 15;
  remaining: number;
  deadline: number | null;
  completed: boolean;
  sessionType?: 'focus' | 'break';
}

const STORAGE_NUDGE_KEY = 'examsathi_nudges_enabled';

export function focusRemaining(session: FocusSession, now = Date.now()): number {
  return session.deadline === null ? session.remaining : Math.max(0, Math.ceil((session.deadline - now) / 1000));
}

export function pauseFocus(session: FocusSession, now = Date.now()): FocusSession {
  return { ...session, remaining: focusRemaining(session, now), deadline: null };
}

export function resumeFocus(session: FocusSession, now = Date.now()): FocusSession {
  return { ...session, deadline: now + session.remaining * 1000 };
}

export function newFocus(minutes: 25 | 45 | 60): FocusSession {
  return {
    id: `focus-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    minutes,
    remaining: minutes * 60,
    deadline: null,
    completed: false,
    sessionType: 'focus',
  };
}

export function newBreak(minutes: 5 | 10 | 15): FocusSession {
  return {
    id: `break-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    minutes,
    remaining: minutes * 60,
    deadline: null,
    completed: false,
    sessionType: 'break',
  };
}

export function resetFocus(session: FocusSession): FocusSession {
  return {
    ...session,
    remaining: session.minutes * 60,
    deadline: null,
    completed: false,
  };
}

/** Configurable optional non-punitive nudges */
export function areNudgesEnabled(): boolean {
  try {
    const val = studyStorage.getItem(STORAGE_NUDGE_KEY);
    return val === null ? true : val === 'true';
  } catch {
    return true;
  }
}

export function setNudgesEnabled(enabled: boolean): void {
  try {
    studyStorage.setItem(STORAGE_NUDGE_KEY, String(enabled));
  } catch {}
}
