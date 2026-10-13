/**
 * Pure learner analytics over stored attempts: streak, activity and weak topics.
 * No I/O and no framework imports, so it is unit-tested directly and shared by the API and the UI types.
 */

export interface StoredTopicResult { topicId: string; total: number; correct: number; wrong: number }

export interface AttemptRow {
  exam_id: string;
  created_at: string;
  total: number;
  correct: number;
  topic_breakdown?: StoredTopicResult[] | null;
}

export interface WeakTopic {
  topicId: string;
  examId: string;
  /** Questions served for this topic in the window. */
  total: number;
  correct: number;
  accuracy: number;
}

export interface LearnerInsights {
  attempts: number;
  questionsAnswered: number;
  accuracy: number;
  streak: number;
  /** True when the learner already practised today, so the streak is safe. */
  practisedToday: boolean;
  weakTopics: WeakTopic[];
}

/** Topics that are not a syllabus area a learner can practise. */
const NOT_PRACTISABLE = new Set(['general', 'custom-notes', 'uploaded-notes', 'all']);

export const WEAK_BELOW = 60;
export const MIN_QUESTIONS = 5;
export const WINDOW_DAYS = 30;
/** The audience is in India (UTC+5:30); a "day" must not roll over at 05:30 local time. */
export const DEFAULT_TZ_OFFSET_MINUTES = 330;

/** Calendar day (YYYY-MM-DD) of an instant in the learner's timezone. */
export function dayKey(instant: number | string | Date, tzOffsetMinutes = DEFAULT_TZ_OFFSET_MINUTES): string {
  return new Date(new Date(instant).getTime() + tzOffsetMinutes * 60000).toISOString().slice(0, 10);
}

function previousDay(key: string): string {
  const d = new Date(`${key}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

/**
 * Consecutive practice days ending today, or ending yesterday when the learner has not practised yet today
 * (the streak is still alive until the day ends).
 */
export function streakFromDays(days: Iterable<string>, today: string): number {
  const seen = new Set(days);
  let cursor = seen.has(today) ? today : previousDay(today);
  let count = 0;
  while (seen.has(cursor)) { count++; cursor = previousDay(cursor); }
  return count;
}

const pct = (n: number, d: number) => (d > 0 ? Math.round((n / d) * 1000) / 10 : 0);

export function computeInsights(rows: AttemptRow[], now = Date.now(), tzOffsetMinutes = DEFAULT_TZ_OFFSET_MINUTES): LearnerInsights {
  const today = dayKey(now, tzOffsetMinutes);
  const days = rows.map(r => dayKey(r.created_at, tzOffsetMinutes));
  const cutoff = now - WINDOW_DAYS * 86400000;

  const byTopic = new Map<string, WeakTopic & { latest: number }>();
  let questionsAnswered = 0;
  let correct = 0;
  for (const row of rows) {
    questionsAnswered += row.total;
    correct += row.correct;
    const at = new Date(row.created_at).getTime();
    if (at < cutoff || !Array.isArray(row.topic_breakdown)) continue;
    for (const t of row.topic_breakdown) {
      if (!t || typeof t.topicId !== 'string' || NOT_PRACTISABLE.has(t.topicId) || !(t.total > 0)) continue;
      const entry = byTopic.get(t.topicId) ?? { topicId: t.topicId, examId: row.exam_id, total: 0, correct: 0, accuracy: 0, latest: 0 };
      entry.total += t.total;
      entry.correct += t.correct;
      if (at >= entry.latest) { entry.latest = at; entry.examId = row.exam_id; }
      byTopic.set(t.topicId, entry);
    }
  }

  const weakTopics = [...byTopic.values()]
    .map(({ latest: _latest, ...t }) => ({ ...t, accuracy: pct(t.correct, t.total) }))
    .filter(t => t.total >= MIN_QUESTIONS && t.accuracy < WEAK_BELOW)
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
    .slice(0, 3);

  return {
    attempts: rows.length,
    questionsAnswered,
    accuracy: pct(correct, questionsAnswered),
    streak: streakFromDays(days, today),
    practisedToday: days.includes(today),
    weakTopics,
  };
}
