// ============================================================
// ExamSathi - Simplified FSRS-inspired Spaced Repetition
// Based on the FSRS algorithm (open-source, better than SM-2)
// Full FSRS: https://github.com/open-spaced-repetition/fsrs4anki
// This is a client-side approximation until the backend is live.
// ============================================================

export type CardRating = 'again' | 'hard' | 'good' | 'easy';
export type CardState = 'new' | 'learning' | 'review' | 'relearning';

export interface SRSCard {
  id: string;
  state: CardState;
  stability: number;      // days until 90% retention
  difficulty: number;     // 0-10 scale
  elapsedDays: number;
  scheduledDays: number;
  reps: number;
  lapses: number;
  lastReview: string | null; // ISO date string
  dueDate: string;           // ISO date string
}

const INITIAL_STABILITY = { again: 0.4, hard: 1.0, good: 2.5, easy: 4.0 };
const RETRIEVABILITY_CONSTANT = 0.9; // target 90% retention

function addDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + Math.round(days));
  return d.toISOString().split('T')[0];
}

export function createNewCard(id: string): SRSCard {
  return {
    id,
    state: 'new',
    stability: 0,
    difficulty: 5,
    elapsedDays: 0,
    scheduledDays: 0,
    reps: 0,
    lapses: 0,
    lastReview: null,
    dueDate: new Date().toISOString().split('T')[0],
  };
}

/**
 * Process a card review and return the updated card.
 * Simplified FSRS: stability grows based on rating and current state.
 */
export function reviewCard(card: SRSCard, rating: CardRating): SRSCard {
  const today = new Date().toISOString().split('T')[0];
  const updated = { ...card, lastReview: today, reps: card.reps + 1 };

  if (card.state === 'new' || card.state === 'learning') {
    if (rating === 'again') {
      updated.state = 'learning';
      updated.stability = INITIAL_STABILITY.again;
      updated.scheduledDays = 0; // show again in 10 minutes (next session)
      updated.dueDate = today;   // due today
    } else if (rating === 'hard') {
      updated.state = 'learning';
      updated.stability = INITIAL_STABILITY.hard;
      updated.scheduledDays = 1;
      updated.dueDate = addDays(1);
    } else if (rating === 'good') {
      updated.state = 'review';
      updated.stability = INITIAL_STABILITY.good;
      updated.scheduledDays = 2;
      updated.dueDate = addDays(2);
    } else { // easy
      updated.state = 'review';
      updated.stability = INITIAL_STABILITY.easy;
      updated.scheduledDays = 4;
      updated.dueDate = addDays(4);
    }
  } else if (card.state === 'review') {
    if (rating === 'again') {
      updated.state = 'relearning';
      updated.lapses++;
      updated.stability = Math.max(0.4, card.stability * 0.5);
      updated.scheduledDays = 0;
      updated.dueDate = today;
    } else {
      // Retention-based scheduling
      const difficultyFactor = 1 + (5 - card.difficulty) * 0.1;
      const ratingMultiplier = rating === 'hard' ? 0.8 : rating === 'good' ? 1.0 : 1.3;
      updated.stability = card.stability * difficultyFactor * ratingMultiplier;
      updated.scheduledDays = Math.round(updated.stability * Math.log(RETRIEVABILITY_CONSTANT) / Math.log(0.9));
      updated.state = 'review';
      updated.dueDate = addDays(updated.scheduledDays);
    }
  } else { // relearning
    if (rating === 'again') {
      updated.stability = Math.max(0.4, card.stability * 0.3);
      updated.scheduledDays = 0;
      updated.dueDate = today;
    } else {
      updated.state = 'review';
      updated.stability = Math.max(1.0, card.stability);
      updated.scheduledDays = 1;
      updated.dueDate = addDays(1);
    }
  }

  return updated;
}

/**
 * Load all SRS card states from localStorage.
 */
export function loadSRSStates(): Record<string, SRSCard> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem('examsathi_srs_states');
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

/**
 * Save updated SRS card states to localStorage.
 */
export function saveSRSStates(states: Record<string, SRSCard>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('examsathi_srs_states', JSON.stringify(states));
  } catch {}
}

/**
 * Get cards due today or overdue.
 */
export function getDueCards(allCardIds: string[]): string[] {
  const states = loadSRSStates();
  const today = new Date().toISOString().split('T')[0];
  return allCardIds.filter(id => {
    const card = states[id];
    if (!card) return true; // new card, always due
    return card.dueDate <= today;
  });
}

/**
 * Get a summary for the progress bar.
 */
export function getSRSSummary(allCardIds: string[]): { due: number; new_: number; learning: number; review: number } {
  const states = loadSRSStates();
  const today = new Date().toISOString().split('T')[0];
  let due = 0, new_ = 0, learning = 0, review = 0;
  for (const id of allCardIds) {
    const card = states[id];
    if (!card) { new_++; due++; continue; }
    if (card.state === 'review') review++;
    else learning++;
    if (card.dueDate <= today) due++;
  }
  return { due, new_, learning, review };
}
