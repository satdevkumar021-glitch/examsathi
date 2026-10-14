/**
 * Item analysis over stored attempts: which questions are too hard, too easy, mis-labelled or probably keyed wrongly.
 * Pure (no I/O, no framework imports) so it is unit-tested directly. Aggregates only: no learner identity is used.
 */

export type Letter = 'A' | 'B' | 'C' | 'D';
export const LETTERS: readonly Letter[] = ['A', 'B', 'C', 'D'];

export interface AttemptSample {
  /** Questions served in the attempt (including unanswered). */
  total: number;
  /** Questions answered correctly, as scored by the server at submission. */
  correct: number;
  answers: Record<string, string>;
}

export interface QuestionInfo { correct: Letter; difficulty: 'easy' | 'medium' | 'hard'; topicId: string }

export type FlagKind = 'key-suspect' | 'negative-discrimination' | 'too-hard' | 'difficulty-mismatch' | 'too-easy';

export interface QuestionStat {
  id: string;
  topicId: string;
  declaredDifficulty: QuestionInfo['difficulty'];
  key: Letter;
  /** Learners who answered. */
  n: number;
  /** Share answering correctly (0-1). */
  pCorrect: number;
  /** pCorrect of the top 27% minus the bottom 27% (by score on the other questions). null when groups are too small. */
  discrimination: number | null;
  counts: Record<Letter, number>;
  /** Picks among the top 27%, to show where strong learners went. */
  upperCounts: Record<Letter, number>;
  flags: FlagKind[];
}

/** Below this many answers a statistic is noise, so nothing is flagged. */
export const MIN_ANSWERS = 30;
/** Each of the upper and lower groups needs at least this many learners. */
export const MIN_GROUP = 8;
const GROUP_SHARE = 0.27;

const SEVERITY: Record<FlagKind, number> = { 'key-suspect': 5, 'negative-discrimination': 4, 'too-hard': 3, 'difficulty-mismatch': 2, 'too-easy': 1 };
export const severity = (s: QuestionStat) => Math.max(0, ...s.flags.map(f => SEVERITY[f]));

const empty = (): Record<Letter, number> => ({ A: 0, B: 0, C: 0, D: 0 });
const isLetter = (v: string): v is Letter => v === 'A' || v === 'B' || v === 'C' || v === 'D';
const round = (n: number, places = 3) => Math.round(n * 10 ** places) / 10 ** places;

interface Observation { rest: number; pick: Letter }

export function analyzeQuestions(attempts: AttemptSample[], lookup: (id: string) => QuestionInfo | undefined): QuestionStat[] {
  const byQuestion = new Map<string, Observation[]>();
  for (const attempt of attempts) {
    // Ability is the score on the OTHER questions, so an item is never graded against itself.
    if (!(attempt.total > 1) || attempt.correct < 0 || attempt.correct > attempt.total) continue;
    for (const [id, pick] of Object.entries(attempt.answers)) {
      if (!isLetter(pick)) continue;
      const info = lookup(id);
      if (!info) continue;
      const wasCorrect = pick === info.correct ? 1 : 0;
      const rest = (attempt.correct - wasCorrect) / (attempt.total - 1);
      const list = byQuestion.get(id);
      if (list) list.push({ rest, pick }); else byQuestion.set(id, [{ rest, pick }]);
    }
  }

  const stats: QuestionStat[] = [];
  for (const [id, observations] of byQuestion) {
    const info = lookup(id)!;
    const n = observations.length;
    const counts = empty();
    for (const o of observations) counts[o.pick]++;
    const pCorrect = counts[info.correct] / n;

    let discrimination: number | null = null;
    const upperCounts = empty();
    const size = Math.floor(n * GROUP_SHARE);
    if (size >= MIN_GROUP) {
      const ranked = [...observations].sort((a, b) => a.rest - b.rest);
      const lower = ranked.slice(0, size);
      const upper = ranked.slice(n - size);
      for (const o of upper) upperCounts[o.pick]++;
      const rate = (group: Observation[]) => group.filter(o => o.pick === info.correct).length / group.length;
      discrimination = round(rate(upper) - rate(lower));
    }

    const flags: FlagKind[] = [];
    if (n >= MIN_ANSWERS) {
      const topUpper = LETTERS.reduce((best, l) => (upperCounts[l] > upperCounts[best] ? l : best), 'A' as Letter);
      // Strong learners prefer a different option. A z-score >= 2.5 on a 2-proportion test keeps the false-positive
      // rate under ~2% even at n=100 while catching every clear wrong key at n≥200.
      const a = upperCounts[topUpper], b = upperCounts[info.correct];
      const poolSize = a + b;
      const zScore = poolSize > 0 ? (a - b) / Math.sqrt(poolSize) : 0;
      if (discrimination !== null && topUpper !== info.correct && zScore >= 2.5) flags.push('key-suspect');
      else if (discrimination !== null && discrimination <= -0.15) flags.push('negative-discrimination');
      if (pCorrect < 0.15) flags.push('too-hard');
      if ((info.difficulty === 'easy' && pCorrect < 0.35) || (info.difficulty === 'hard' && pCorrect > 0.85)) flags.push('difficulty-mismatch');
      if (pCorrect > 0.97) flags.push('too-easy');
    }

    stats.push({ id, topicId: info.topicId, declaredDifficulty: info.difficulty, key: info.correct, n, pCorrect: round(pCorrect), discrimination, counts, upperCounts, flags });
  }
  return stats;
}

export interface QualityReport {
  analysed: number;
  flagged: number;
  byFlag: Record<FlagKind, number>;
  /** Flagged questions, worst first. */
  items: QuestionStat[];
}

export function buildReport(stats: QuestionStat[], limit = 100): QualityReport {
  const flagged = stats.filter(s => s.flags.length > 0).sort((a, b) => severity(b) - severity(a) || b.n - a.n);
  const byFlag: Record<FlagKind, number> = { 'key-suspect': 0, 'negative-discrimination': 0, 'too-hard': 0, 'difficulty-mismatch': 0, 'too-easy': 0 };
  for (const s of flagged) for (const f of s.flags) byFlag[f]++;
  return { analysed: stats.length, flagged: flagged.length, byFlag, items: flagged.slice(0, limit) };
}
