/**
 * Pure rules for the streak-at-risk reminder. No I/O: the send route supplies the data and the clock,
 * and tests drive it directly.
 */
import { dayKey, streakFromDays } from './learner-insights';

/** Local hours during which a reminder may go out: after the learner's day, before bedtime. */
export const REMINDER_FROM_HOUR = 18;
export const REMINDER_TO_HOUR = 21;
/** Below this the learner has nothing to lose, so a nudge would only be noise. */
export const MIN_STREAK_TO_PROTECT = 2;

export interface ReminderCandidate {
  /** Distinct local practice days of the learner. */
  days: string[];
  tzOffsetMinutes: number;
  /** Local day of the last reminder sent to this device, if any. */
  lastSentDay: string | null;
}

export type ReminderDecision =
  | { send: true; streak: number }
  | { send: false; reason: 'outside-window' | 'already-sent' | 'practised-today' | 'no-streak' };

export function localHour(now: number, tzOffsetMinutes: number): number {
  return new Date(now + tzOffsetMinutes * 60000).getUTCHours();
}

export function decideReminder(c: ReminderCandidate, now: number): ReminderDecision {
  const hour = localHour(now, c.tzOffsetMinutes);
  if (hour < REMINDER_FROM_HOUR || hour >= REMINDER_TO_HOUR) return { send: false, reason: 'outside-window' };
  const today = dayKey(now, c.tzOffsetMinutes);
  if (c.lastSentDay === today) return { send: false, reason: 'already-sent' };
  if (c.days.includes(today)) return { send: false, reason: 'practised-today' };
  const streak = streakFromDays(c.days, today);
  return streak >= MIN_STREAK_TO_PROTECT ? { send: true, streak } : { send: false, reason: 'no-streak' };
}

export interface ReminderMessage { title: string; body: string; url: string; tag: string }

/** Plain, specific and in the learner's language. No guilt, no emoji clutter. */
export function reminderMessage(streak: number, lang: 'en' | 'hi' | 'pa'): ReminderMessage {
  const text = {
    en: { title: `Keep your ${streak}-day streak`, body: 'One short test today keeps it going.' },
    hi: { title: `अपनी ${streak} दिन की स्ट्रीक बचाएं`, body: 'आज एक छोटा टेस्ट इसे जारी रखेगा।' },
    pa: { title: `ਆਪਣੀ ${streak} ਦਿਨ ਦੀ ਸਟ੍ਰੀਕ ਬਚਾਓ`, body: 'ਅੱਜ ਇੱਕ ਛੋਟਾ ਟੈਸਟ ਇਸਨੂੰ ਜਾਰੀ ਰੱਖੇਗਾ।' },
  }[lang] ?? { title: `Keep your ${streak}-day streak`, body: 'One short test today keeps it going.' };
  return { ...text, url: '/mock-test/', tag: 'streak-reminder' };
}

export interface SubscriptionInput { endpoint: string; p256dh: string; auth: string; tzOffsetMinutes: number; lang: 'en' | 'hi' | 'pa' }
export type SubscriptionValidation = { ok: true; value: SubscriptionInput } | { ok: false; message: string };

const B64URL = /^[A-Za-z0-9_-]+={0,2}$/;
/** Push services are well-known hosts; anything else would turn the send route into an SSRF primitive. */
const PUSH_HOSTS = [/(^|\.)googleapis\.com$/, /(^|\.)push\.services\.mozilla\.com$/, /(^|\.)push\.apple\.com$/, /(^|\.)notify\.windows\.com$/, /(^|\.)push\.mozilla\.org$/];

export function validateSubscription(body: unknown): SubscriptionValidation {
  if (!body || typeof body !== 'object') return { ok: false, message: 'Invalid request.' };
  const { subscription, tzOffsetMinutes, lang } = body as Record<string, unknown>;
  const sub = subscription as { endpoint?: unknown; keys?: { p256dh?: unknown; auth?: unknown } } | undefined;
  const endpoint = sub?.endpoint;
  if (typeof endpoint !== 'string' || endpoint.length > 600) return { ok: false, message: 'Invalid subscription.' };
  let host: string;
  try {
    const url = new URL(endpoint);
    if (url.protocol !== 'https:' || url.username || url.password) return { ok: false, message: 'Invalid subscription.' };
    host = url.hostname;
  } catch { return { ok: false, message: 'Invalid subscription.' }; }
  if (!PUSH_HOSTS.some(re => re.test(host))) return { ok: false, message: 'Unsupported push service.' };
  const p256dh = sub?.keys?.p256dh;
  const auth = sub?.keys?.auth;
  if (typeof p256dh !== 'string' || p256dh.length < 20 || p256dh.length > 200 || !B64URL.test(p256dh)) return { ok: false, message: 'Invalid subscription keys.' };
  if (typeof auth !== 'string' || auth.length < 8 || auth.length > 100 || !B64URL.test(auth)) return { ok: false, message: 'Invalid subscription keys.' };
  const tz = typeof tzOffsetMinutes === 'number' && Number.isInteger(tzOffsetMinutes) && Math.abs(tzOffsetMinutes) <= 14 * 60 ? tzOffsetMinutes : 330;
  const language = lang === 'hi' || lang === 'pa' || lang === 'en' ? lang : 'en';
  return { ok: true, value: { endpoint, p256dh, auth, tzOffsetMinutes: tz, lang: language } };
}
