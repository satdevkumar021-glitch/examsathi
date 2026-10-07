export interface FocusSession {
  id: string;
  minutes: 25 | 45 | 60;
  remaining: number;
  deadline: number | null;
  completed: boolean;
}
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
  return { id: `focus-${Date.now()}-${Math.random().toString(36).slice(2)}`, minutes, remaining: minutes * 60, deadline: null, completed: false };
}
