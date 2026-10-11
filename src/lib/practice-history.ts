import { studyStorage } from './storage';
import { questionIdentity, canonicalQuestionKey } from './data/question_bank_engine';
import type { Question } from './data/questions';

// ============================================================
// ExamSathi - Practice History & Learner Exposure Tracking Engine
// Compliant with Master AI Specification Section 6:
// - Multi-level exposure tracking: served vs answered vs completed
// - Strictly partitioned by learner and exam
// - Disjoint sets until pool exhaustion; explicit revision mode
// - Documented, non-destructive exposure reset behavior
// ============================================================

const GLOBAL_COMPLETED_KEY = 'examsathi_completed_question_keys';

export interface ExposureEntry {
  servedAt: number;
  answeredAt?: number;
  completedAt?: number;
}

export interface LearnerExposureSummary {
  learnerId: string;
  examId: string;
  servedCount: number;
  answeredCount: number;
  completedCount: number;
  servedKeys: string[];
  answeredKeys: string[];
  completedKeys: string[];
}

function getScopedStorageKey(learnerId: string, examId: string): string {
  const safeLearner = (learnerId || 'guest').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '_');
  const safeExam = (examId || 'all').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '_');
  return `examsathi_exposure_${safeLearner}_${safeExam}`;
}

function readScopedRecord(learnerId: string, examId: string): Record<string, ExposureEntry> {
  try {
    const raw = studyStorage.getItem(getScopedStorageKey(learnerId, examId));
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function writeScopedRecord(learnerId: string, examId: string, data: Record<string, ExposureEntry>): void {
  try {
    studyStorage.setItem(getScopedStorageKey(learnerId, examId), JSON.stringify(data));
  } catch {
    // Graceful fallback when storage is constrained
  }
}

/**
 * Legacy global completed question keys (for backward compatibility).
 */
export function completedQuestionKeys(): string[] {
  try {
    const value = JSON.parse(studyStorage.getItem(GLOBAL_COMPLETED_KEY) || '{}');
    return Object.keys(value).filter(key => value[key] === true).map(canonicalQuestionKey);
  } catch {
    return [];
  }
}

/**
 * Legacy global remember completed questions (maintains backward compatibility).
 */
export function rememberCompletedQuestions(questions: Question[]): void {
  const keys = new Set([...completedQuestionKeys(), ...questions.map(questionIdentity)]);
  try {
    studyStorage.setItem(GLOBAL_COMPLETED_KEY, JSON.stringify(Object.fromEntries([...keys].map(key => [key, true]))));
  } catch {}
}

/**
 * Returns complete exposure breakdown for a specific learner and exam.
 */
export function getLearnerExposure(learnerId: string, examId: string): LearnerExposureSummary {
  const record = readScopedRecord(learnerId, examId);
  const servedKeys: string[] = [];
  const answeredKeys: string[] = [];
  const completedKeys: string[] = [];

  for (const [key, entry] of Object.entries(record)) {
    const canon = canonicalQuestionKey(key);
    if (entry.servedAt) servedKeys.push(canon);
    if (entry.answeredAt) answeredKeys.push(canon);
    if (entry.completedAt) completedKeys.push(canon);
  }

  return {
    learnerId,
    examId,
    servedCount: servedKeys.length,
    answeredCount: answeredKeys.length,
    completedCount: completedKeys.length,
    servedKeys,
    answeredKeys,
    completedKeys,
  };
}

/**
 * Records that a batch of questions has been served in an active test set.
 */
export function recordServedQuestions(learnerId: string, examId: string, questions: Question[]): void {
  if (!questions || questions.length === 0) return;
  const record = readScopedRecord(learnerId, examId);
  const now = Date.now();

  for (const q of questions) {
    const key = questionIdentity(q);
    if (!record[key]) {
      record[key] = { servedAt: now };
    } else {
      record[key].servedAt = record[key].servedAt || now;
    }
  }

  writeScopedRecord(learnerId, examId, record);
}

/**
 * Records that the learner selected an answer for a specific question ID or canonical key.
 */
export function recordAnsweredQuestions(
  learnerId: string,
  examId: string,
  questionIdentities: string[]
): void {
  if (!questionIdentities || questionIdentities.length === 0) return;
  const record = readScopedRecord(learnerId, examId);
  const now = Date.now();

  for (const id of questionIdentities) {
    const key = canonicalQuestionKey(id);
    if (!record[key]) {
      record[key] = { servedAt: now, answeredAt: now };
    } else {
      record[key].answeredAt = now;
    }
  }

  writeScopedRecord(learnerId, examId, record);
}

/**
 * Records completed questions upon test submission, both in scoped exposure and global index.
 */
export function recordCompletedQuestions(learnerId: string, examId: string, questions: Question[]): void {
  if (!questions || questions.length === 0) return;
  const record = readScopedRecord(learnerId, examId);
  const now = Date.now();

  for (const q of questions) {
    const key = questionIdentity(q);
    if (!record[key]) {
      record[key] = { servedAt: now, completedAt: now };
    } else {
      record[key].completedAt = now;
    }
  }

  writeScopedRecord(learnerId, examId, record);
  rememberCompletedQuestions(questions);
}

/**
 * Resets exposure history for a given learner and exam.
 * Preserves past score attempts and personal notes while releasing the question bank for fresh practice.
 */
export function resetLearnerExposure(learnerId: string, examId: string): void {
  const key = getScopedStorageKey(learnerId, examId);
  try {
    studyStorage.removeItem(key);
  } catch {}
}

/**
 * Helper to calculate unseen questions in a pool given an exclusion set.
 */
export function calculateUnseenPool(
  pool: Question[],
  excludedKeys: Iterable<string>
): {
  unseen: Question[];
  totalEligible: number;
  unseenCount: number;
  isExhausted: boolean;
} {
  const excluded = new Set(Array.from(excludedKeys).map(canonicalQuestionKey));
  const seenInSet = new Set<string>();
  const unseen: Question[] = [];

  for (const q of pool) {
    const key = questionIdentity(q);
    const idKey = canonicalQuestionKey(q.id);
    if (excluded.has(key) || excluded.has(idKey)) continue;
    if (seenInSet.has(key) || seenInSet.has(idKey)) continue;
    seenInSet.add(key);
    seenInSet.add(idKey);
    unseen.push(q);
  }

  return {
    unseen,
    totalEligible: pool.length,
    unseenCount: unseen.length,
    isExhausted: unseen.length === 0,
  };
}

/**
 * Explains reset behavior for transparent learner communication.
 */
export function explainResetBehavior(language: 'en' | 'hi' | 'pa' = 'en'): string {
  switch (language) {
    case 'hi':
      return 'एक्सपोजर रीसेट करने से केवल इस परीक्षा में पहले देखे गए प्रश्नों का इतिहास साफ़ होता है। आपके पुराने मॉक टेस्ट परिणाम और सहेजे गए नोट्स पूरी तरह सुरक्षित रहेंगे।';
    case 'pa':
      return 'ਐਕਸਪੋਜ਼ਰ ਰੀਸੈੱਟ ਕਰਨ ਨਾਲ ਸਿਰਫ਼ ਇਸ ਇਮਤਿਹਾਨ ਦੇ ਪਹਿਲਾਂ ਆਏ ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਰਿਕਾਰਡ ਸਾਫ਼ ਹੁੰਦਾ ਹੈ। ਤੁਹਾਡੇ ਪੁਰਾਣੇ ਸਕੋਰ ਅਤੇ ਨੋਟਸ ਬਿਲਕੁਲ ਸੁਰੱਖਿਅਤ ਰਹਿਣਗੇ।';
    case 'en':
    default:
      return 'Resetting exposure clears only the record of previously served questions for this exam so you can practice from the start. Your historical scorecards and saved study notes remain completely intact.';
  }
}
