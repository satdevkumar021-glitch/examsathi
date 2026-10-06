// ============================================================
// ExamSathi - Free Spaced Repetition Scheduler (FSRS v4.5)
// Mathematically sound memory retention model for competitive exams
// ============================================================

export type Rating = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy
export type CardState = 'new' | 'learning' | 'review' | 'relearning';

export interface CardSRSState {
  cardId: string;
  topicId: string;
  stability: number;       // S: Memory stability in days
  difficulty: number;      // D: 1.0 (easiest) to 10.0 (hardest)
  reps: number;            // Total successful reviews
  lapses: number;          // Total forgetting lapses (rated Again)
  state: CardState;
  due: string;             // ISO date string
  lastReviewedAt: string | null; // ISO date string
  history: Array<{
    rating: Rating;
    reviewedAt: string;
    intervalDays: number;
  }>;
}

// Canonical FSRS default weights (optimized for competitive educational content)
const FSRS_WEIGHTS = [
  0.4, 0.9, 2.3, 10.9,  // Initial stabilities for ratings 1, 2, 3, 4
  4.93, 0.94, 0.86, 0.01, // Difficulty params
  1.49, 0.14, 0.94,     // Review stability params
  2.18, 0.05, 0.34, 1.26 // Lapse & recall params
];

const REQUESTED_RETENTION = 0.90; // 90% target recall probability

/**
 * Calculates current retrievability R(t, S) based on elapsed time t and stability S
 */
export function calculateRetrievability(elapsedDays: number, stability: number): number {
  if (stability <= 0) return 0;
  return Math.pow(1 + elapsedDays / (9 * stability), -1);
}

/**
 * Initializes a new card's SRS state
 */
export function initializeCardSRS(cardId: string, topicId: string): CardSRSState {
  return {
    cardId,
    topicId,
    stability: 0,
    difficulty: 5.0,
    reps: 0,
    lapses: 0,
    state: 'new',
    due: new Date().toISOString(),
    lastReviewedAt: null,
    history: [],
  };
}

/**
 * Computes next review state and interval given candidate's rating
 */
export function scheduleNextReview(
  currentState: CardSRSState,
  rating: Rating,
  reviewDate: Date = new Date()
): { nextState: CardSRSState; intervalDays: number; intervalLabel: string } {
  let { stability, difficulty, reps, lapses, state, lastReviewedAt } = currentState;

  // Calculate elapsed days since last review
  const elapsedDays = lastReviewedAt
    ? Math.max(0, (reviewDate.getTime() - new Date(lastReviewedAt).getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const currentR = stability > 0 ? calculateRetrievability(elapsedDays, stability) : 0;

  let nextStability: number;
  let nextDifficulty: number;
  let nextState: CardState;

  if (state === 'new') {
    // Initial rating for brand-new card
    nextStability = FSRS_WEIGHTS[rating - 1];
    nextDifficulty = Math.min(10, Math.max(1, FSRS_WEIGHTS[4] - (rating - 3) * FSRS_WEIGHTS[5]));
    nextState = rating === 1 ? 'learning' : 'review';
    if (rating === 1) lapses += 1;
    else reps += 1;
  } else {
    // Updating difficulty with mean reversion
    const rawD = difficulty - FSRS_WEIGHTS[6] * (rating - 3);
    const meanReversionTarget = FSRS_WEIGHTS[4]; // Default D0(3)
    nextDifficulty = Math.min(10, Math.max(1, FSRS_WEIGHTS[7] * meanReversionTarget + (1 - FSRS_WEIGHTS[7]) * rawD));

    if (rating === 1) {
      // Forgotten: Card lapses into relearning
      lapses += 1;
      nextState = 'relearning';
      nextStability = Math.max(
        0.1,
        FSRS_WEIGHTS[11] *
        Math.pow(difficulty, -FSRS_WEIGHTS[12]) *
        (Math.pow(stability + 1, FSRS_WEIGHTS[13]) - 1) *
        Math.exp(FSRS_WEIGHTS[14] * (1 - currentR))
      );
    } else {
      // Recalled successfully: Stability increases
      reps += 1;
      nextState = 'review';
      const hardFactor = rating === 2 ? 0.8 : 1.0;
      const easyFactor = rating === 4 ? 1.3 : 1.0;
      nextStability = stability * (1 +
        Math.exp(FSRS_WEIGHTS[8]) *
        (11 - difficulty) *
        Math.pow(stability, -FSRS_WEIGHTS[9]) *
        (Math.exp(FSRS_WEIGHTS[10] * (1 - currentR)) - 1) *
        hardFactor *
        easyFactor
      );
    }
  }

  // Next interval I = S * 9 * (1/R - 1)
  const factor = 9 * (1 / REQUESTED_RETENTION - 1); // ~1.0 for R=0.9
  let intervalDays = Math.max(1, Math.round(nextStability * factor));
  let intervalLabel = `${intervalDays}d`;

  if (rating === 1) {
    intervalDays = 0.007; // ~10 minutes
    intervalLabel = '10m';
  } else if (intervalDays === 1) {
    intervalLabel = '1d';
  } else if (intervalDays > 30) {
    intervalLabel = `${Math.round(intervalDays / 30)}mo`;
  }

  const nextDueDate = new Date(reviewDate.getTime() + intervalDays * 24 * 60 * 60 * 1000);

  const updatedCardState: CardSRSState = {
    ...currentState,
    stability: Number(nextStability.toFixed(3)),
    difficulty: Number(nextDifficulty.toFixed(2)),
    reps,
    lapses,
    state: nextState,
    due: nextDueDate.toISOString(),
    lastReviewedAt: reviewDate.toISOString(),
    history: [
      ...currentState.history,
      {
        rating,
        reviewedAt: reviewDate.toISOString(),
        intervalDays,
      },
    ],
  };

  return { nextState: updatedCardState, intervalDays, intervalLabel };
}

// ------------------------------------------------------------
// Local Storage Persistence & Queue Managers
// ------------------------------------------------------------
const STORAGE_KEY = 'examsathi_fsrs_deck';

export function getAllCardStates(): Record<string, CardSRSState> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveCardState(cardState: CardSRSState): void {
  if (typeof window === 'undefined') return;
  try {
    const all = getAllCardStates();
    all[cardState.cardId] = cardState;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {}
}

export function getCardState(cardId: string, topicId: string): CardSRSState {
  const all = getAllCardStates();
  return all[cardId] || initializeCardSRS(cardId, topicId);
}

export function getDueCardsCount(topicId?: string): number {
  const all = getAllCardStates();
  const now = new Date();
  return Object.values(all).filter(c => {
    if (topicId && c.topicId !== topicId) return false;
    return new Date(c.due) <= now;
  }).length;
}

export function getReviewForecast(topicId?: string): { today: number; tomorrow: number; upcomingWeek: number } {
  const all = getAllCardStates();
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const week = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  let today = 0;
  let tmr = 0;
  let upcoming = 0;

  Object.values(all).forEach(c => {
    if (topicId && c.topicId !== topicId) return;
    const dueDate = new Date(c.due);
    if (dueDate <= now) today++;
    else if (dueDate <= tomorrow) tmr++;
    else if (dueDate <= week) upcoming++;
  });

  return { today, tomorrow: tmr, upcomingWeek: upcoming };
}
