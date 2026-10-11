import { studyStorage } from './storage';
import { Question } from './data/questions';

// ============================================================
// ExamSathi - Mistake Notebook & Spaced Mastery Tracking
// Compliant with Master AI Specification Section 9:
// - Mistake notebook & spaced revision queue based on recall attempts,
//   lapse history, and weak concepts.
// - Reading, marking complete, answering correctly once, and sustained
//   mastery are tracked as separate, distinct states with transparent basis.
// - Revisions are fully usable in all 3 learning languages (EN/HI/PA).
// ============================================================

export interface MistakeRecord {
  id: string; // `mistake-${questionId}`
  questionId: string;
  examId: string;
  topicId: string;
  userAnswer: string;
  correctAnswer: string;
  questionText: { en: string; hi: string; pa?: string };
  options: Record<string, { en: string; hi: string; pa?: string }>;
  explanation: { en: string; hi: string; pa?: string };
  examTag?: string;
  timestamp: number;
  lapsesCount: number;
  resolved: boolean;
  resolvedAt?: number;
  userNotes?: string;
}

export type MasteryTier = 'unseen' | 'read' | 'marked_complete' | 'practiced_once' | 'sustained_mastery';

export interface TopicMasteryRecord {
  topicId: string;
  examId: string;
  tier: MasteryTier;
  readAt?: number;
  markedCompleteAt?: number;
  lastPracticedAt?: number;
  correctCount: number;
  totalAttempts: number;
  fsrsStabilityDays: number;
  basisExplanation: string;
}

const STORAGE_MISTAKES_PREFIX = 'examsathi_mistakes_';
const STORAGE_MASTERY_PREFIX = 'examsathi_mastery_';

function getMistakesKey(examId: string): string {
  const safe = (examId || 'general').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '_');
  return `${STORAGE_MISTAKES_PREFIX}${safe}`;
}

function getMasteryKey(examId: string, topicId: string): string {
  const safeExam = (examId || 'general').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '_');
  const safeTopic = (topicId || 'general').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '_');
  return `${STORAGE_MASTERY_PREFIX}${safeExam}_${safeTopic}`;
}

function readMistakes(examId: string): MistakeRecord[] {
  try {
    const raw = studyStorage.getItem(getMistakesKey(examId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeMistakes(examId: string, records: MistakeRecord[]): void {
  try {
    studyStorage.setItem(getMistakesKey(examId), JSON.stringify(records));
  } catch {}
}

/** Automatically extracts and records mistakes from a test attempt. */
export function recordQuizMistakes(
  learnerId: string,
  examId: string,
  questions: Question[],
  userAnswers: Record<string, string>
): number {
  if (!questions || questions.length === 0 || !userAnswers) return 0;

  const mistakes = readMistakes(examId);
  const mistakeMap = new Map<string, MistakeRecord>(mistakes.map(m => [m.questionId, m]));
  let newMistakesCount = 0;

  for (const q of questions) {
    const userAns = userAnswers[q.id];
    if (userAns && userAns !== q.correct) {
      const existing = mistakeMap.get(q.id);
      if (existing) {
        existing.lapsesCount = (existing.lapsesCount || 1) + 1;
        existing.userAnswer = userAns;
        existing.resolved = false;
        existing.resolvedAt = undefined;
        existing.timestamp = Date.now();
      } else {
        const newRecord: MistakeRecord = {
          id: `mistake-${q.id}`,
          questionId: q.id,
          examId,
          topicId: q.topicId || 'general',
          userAnswer: userAns,
          correctAnswer: q.correct,
          questionText: { en: q.question.en, hi: q.question.hi, pa: q.question.pa },
          options: q.options as Record<string, { en: string; hi: string; pa?: string }>,
          explanation: { en: q.explanation.en, hi: q.explanation.hi, pa: q.explanation.pa },
          examTag: q.examTag,
          timestamp: Date.now(),
          lapsesCount: 1,
          resolved: false,
        };
        mistakeMap.set(q.id, newRecord);
        newMistakesCount++;
      }
    }
  }

  writeMistakes(examId, Array.from(mistakeMap.values()));
  return newMistakesCount;
}

/** Retrieves filtered mistakes with multi-field search. */
export function getMistakeNotebook(filters: {
  examId?: string;
  topicId?: string;
  resolved?: boolean;
  searchQuery?: string;
}): MistakeRecord[] {
  const examId = filters.examId || 'general';
  let list = readMistakes(examId);

  if (filters.topicId && filters.topicId !== 'all') {
    list = list.filter(m => m.topicId === filters.topicId);
  }

  if (filters.resolved !== undefined) {
    list = list.filter(m => m.resolved === filters.resolved);
  }

  if (filters.searchQuery && filters.searchQuery.trim()) {
    const q = filters.searchQuery.trim().toLowerCase();
    list = list.filter(m =>
      (m.questionText.en && m.questionText.en.toLowerCase().includes(q)) ||
      (m.questionText.hi && m.questionText.hi.toLowerCase().includes(q)) ||
      (m.questionText.pa && m.questionText.pa.toLowerCase().includes(q)) ||
      (m.userNotes && m.userNotes.toLowerCase().includes(q))
    );
  }

  return list.sort((a, b) => b.timestamp - a.timestamp);
}

/** Marks a mistake resolved upon successful recall. */
export function resolveMistake(questionId: string, examId: string): boolean {
  const list = readMistakes(examId);
  const record = list.find(m => m.questionId === questionId);
  if (!record) return false;
  record.resolved = true;
  record.resolvedAt = Date.now();
  writeMistakes(examId, list);
  return true;
}

/** Reopens a previously resolved mistake. */
export function reopenMistake(questionId: string, examId: string): boolean {
  const list = readMistakes(examId);
  const record = list.find(m => m.questionId === questionId);
  if (!record) return false;
  record.resolved = false;
  record.resolvedAt = undefined;
  record.lapsesCount = (record.lapsesCount || 1) + 1;
  writeMistakes(examId, list);
  return true;
}

/** Adds or updates personal learner notes on a specific mistake. */
export function annotateMistake(questionId: string, examId: string, userNotes: string): boolean {
  const list = readMistakes(examId);
  const record = list.find(m => m.questionId === questionId);
  if (!record) return false;
  record.userNotes = userNotes.trim();
  writeMistakes(examId, list);
  return true;
}

/** 
 * Separate 4-tier mastery tracking:
 * 'read' -> 'marked_complete' -> 'practiced_once' -> 'sustained_mastery'
 */
export function updateTopicMastery(params: {
  topicId: string;
  examId: string;
  action: 'read' | 'mark_complete' | 'unmark_complete' | 'quiz_result';
  quizStats?: {
    correct: number;
    total: number;
    fsrsStabilityDays?: number;
  };
}): TopicMasteryRecord {
  const examId = params.examId || 'general';
  const topicId = params.topicId;
  const key = getMasteryKey(examId, topicId);

  let current: TopicMasteryRecord = {
    topicId,
    examId,
    tier: 'unseen',
    correctCount: 0,
    totalAttempts: 0,
    fsrsStabilityDays: 0,
    basisExplanation: 'Topic has not yet been opened or practiced.',
  };

  try {
    const raw = studyStorage.getItem(key);
    if (raw) current = JSON.parse(raw);
  } catch {}

  const now = Date.now();

  if (params.action === 'read') {
    current.readAt = now;
    if (current.tier === 'unseen') {
      current.tier = 'read';
      current.basisExplanation = 'Lesson content read by learner.';
    }
  } else if (params.action === 'mark_complete') {
    current.markedCompleteAt = now;
    if (current.tier === 'unseen' || current.tier === 'read') {
      current.tier = 'marked_complete';
      current.basisExplanation = 'Topic marked as complete by learner.';
    }
  } else if (params.action === 'unmark_complete') {
    current.markedCompleteAt = undefined;
    if (current.tier === 'marked_complete') {
      current.tier = current.readAt ? 'read' : 'unseen';
      current.basisExplanation = current.readAt ? 'Lesson read; completion checkmark removed.' : 'Topic uncompleted.';
    }
  } else if (params.action === 'quiz_result' && params.quizStats) {
    current.lastPracticedAt = now;
    current.correctCount += params.quizStats.correct;
    current.totalAttempts += params.quizStats.total;
    if (params.quizStats.fsrsStabilityDays) {
      current.fsrsStabilityDays = params.quizStats.fsrsStabilityDays;
    }

    const accuracy = current.totalAttempts > 0 ? (current.correctCount / current.totalAttempts) : 0;

    // Check sustained mastery conditions:
    // Sustained mastery requires high accuracy (>= 80%), multiple attempts (>= 10), and FSRS stability >= 3.0 days
    if (accuracy >= 0.8 && current.totalAttempts >= 10 && current.fsrsStabilityDays >= 3.0) {
      current.tier = 'sustained_mastery';
      current.basisExplanation = `Sustained Mastery verified: ${(accuracy * 100).toFixed(0)}% accuracy across ${current.totalAttempts} questions with memory stability ${current.fsrsStabilityDays.toFixed(1)} days.`;
    } else if (params.quizStats.correct > 0) {
      if (current.tier !== 'sustained_mastery') {
        current.tier = 'practiced_once';
        current.basisExplanation = `Practiced in quiz: ${params.quizStats.correct}/${params.quizStats.total} correct. Continued spaced revision needed for sustained mastery.`;
      }
    }
  }

  try {
    studyStorage.setItem(key, JSON.stringify(current));
  } catch {}

  return current;
}

/** Retrieves the current transparent mastery record for a topic. */
export function getTopicMastery(topicId: string, examId = 'general'): TopicMasteryRecord {
  const key = getMasteryKey(examId, topicId);
  try {
    const raw = studyStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch {}

  return {
    topicId,
    examId,
    tier: 'unseen',
    correctCount: 0,
    totalAttempts: 0,
    fsrsStabilityDays: 0,
    basisExplanation: 'Topic has not yet been opened or practiced.',
  };
}
