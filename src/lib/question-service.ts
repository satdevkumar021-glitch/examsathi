import 'server-only';
import { ALL_QUESTIONS } from '@/lib/data/questions';
import { getExamTopics } from '@/lib/data/exam-catalog';
import type { PublicQuestion, Question, QuestionReveal } from '@/lib/question-types';
import {
  generateProceduralQuestions,
  getOrderedSetQuestions,
  getQuestionPool,
  getTestQuestions,
} from '@/lib/data/question_bank_engine';
import { generateQuantPractice } from '@/lib/data/quant-practice';
import { generateReasoningPractice } from '@/lib/data/reasoning-practice';
import { generateLandMeasurementPractice } from '@/lib/data/land-measurement-practice';
import { editorialQuestion, editorialVersion } from '@/lib/editorial-store';

export type Difficulty = 'all' | 'easy' | 'medium' | 'hard';

/** Strips everything that reveals the answer. */
export function toPublic(q: Question): PublicQuestion {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { correct, explanation, thought, deepConceptNote, distractorExplanations, ...rest } = q;
  return rest;
}

export function toReveal(q: Question): QuestionReveal {
  const reveal: QuestionReveal = { correct: q.correct, explanation: q.explanation };
  if (q.thought) reveal.thought = q.thought;
  if (q.deepConceptNote) reveal.deepConceptNote = q.deepConceptNote;
  if (q.distractorExplanations) reveal.distractorExplanations = q.distractorExplanations;
  return reveal;
}

let bank: Map<string, Question> | null = null;
const generatedCache = new Map<string, Map<string, Question>>();

function indexOf(questions: Question[]): Map<string, Question> {
  return new Map(questions.map(q => [q.id, q]));
}

/** Generated practice is deterministic, so any generated id can be rebuilt on demand. */
function generatedQuestion(id: string): Question | undefined {
  let kind: string, topicId: string, build: () => Question[];
  let match: RegExpMatchArray | null;
  if ((match = id.match(/^gen-quant-(.+)-\d+$/))) {
    kind = 'quant'; topicId = match[1]; build = () => generateQuantPractice(topicId, 150);
  } else if ((match = id.match(/^gen-reasoning-(.+)-\d+$/))) {
    kind = 'reasoning'; topicId = match[1]; build = () => generateReasoningPractice(topicId, 1000);
  } else if (/^gen-land-\d+$/.test(id)) {
    kind = 'land'; topicId = 'patwari-agriculture-accounts'; build = () => generateLandMeasurementPractice(topicId, 100);
  } else if ((match = id.match(/^gen-(.+)-fc-\d+$/))) {
    kind = 'fc'; topicId = match[1]; build = () => generateProceduralQuestions(topicId, 150);
  } else return undefined;
  const key = `${kind}:${topicId}`;
  let index = generatedCache.get(key);
  if (!index) { index = indexOf(build()); generatedCache.set(key, index); }
  return index.get(id);
}

/** The authoritative lookup for any question id the server may have served. */
export function findQuestion(id: string): Question | undefined {
  if (!bank) bank = indexOf(ALL_QUESTIONS);
  return bank.get(id) ?? editorialQuestion(id) ?? generatedQuestion(id);
}

export interface SetRequest {
  topicId: string;
  examId?: string;
  difficulty: Difficulty;
  pyq20Years: boolean;
  pyqOnly: boolean;
  count: number;
  /** Deterministic numbered set (>= 1), or 0 for a random draw. */
  setNumber: number;
  /** Mega-topic mocks are always served as ordered sets. */
  ordered: boolean;
  isRevision: boolean;
  isFresh: boolean;
  excludeKeys: string[];
}

export interface SetResponse {
  questions: PublicQuestion[];
  effective: { difficulty: Difficulty; pyq20Years: boolean; pyqOnly: boolean };
  setNumber: number;
  totalSets: number;
  totalPoolCount: number;
  isRevisionMode: boolean;
  isRemainingSubset: boolean;
}

/** Same selection rules the browser used to apply, now evaluated next to the answer key. */
export function resolveSet(request: SetRequest): SetResponse {
  const { topicId, count, isRevision, isFresh } = request;
  let { difficulty, pyq20Years, pyqOnly } = request;
  let examId = request.examId === 'all' ? undefined : request.examId;

  let fullPool = getQuestionPool({ topicId, examId, difficulty, pyq20Years, pyqOnly });
  if (fullPool.length === 0 && topicId !== 'all' && examId) {
    examId = undefined;
    fullPool = getQuestionPool({ topicId, difficulty, pyq20Years, pyqOnly });
  }
  if (fullPool.length === 0 && difficulty !== 'all') {
    difficulty = 'all';
    fullPool = getQuestionPool({ topicId, examId, difficulty: 'all', pyq20Years, pyqOnly });
  }
  if (fullPool.length === 0 && (pyq20Years || pyqOnly)) {
    pyq20Years = false;
    pyqOnly = false;
    fullPool = getQuestionPool({ topicId, examId, difficulty });
  }

  let questions: Question[];
  let setNumber = 1, totalSets: number, totalPoolCount: number;
  let isRevisionMode = isRevision;
  let isRemainingSubset = false;

  if (request.ordered || request.setNumber >= 1) {
    const ordered = getOrderedSetQuestions({ topicId, examId, difficulty, pyq20Years, pyqOnly, count, setNumber: request.setNumber || 1 });
    questions = ordered.questions;
    setNumber = ordered.setNumber;
    totalSets = ordered.totalSets;
    totalPoolCount = ordered.totalPoolCount;
  } else {
    totalPoolCount = fullPool.length;
    totalSets = Math.max(1, Math.ceil(fullPool.length / count));
    questions = getTestQuestions({
      topicId, examId, difficulty, pyq20Years, pyqOnly, count,
      excludeKeys: (isRevision || isFresh) ? [] : request.excludeKeys,
    });
    if (questions.length === 0 && fullPool.length > 0) {
      questions = getOrderedSetQuestions({ topicId, examId, difficulty, pyq20Years, pyqOnly, count, setNumber: 1 }).questions;
      isRevisionMode = true;
    }
    isRemainingSubset = !isRevision && !isFresh && questions.length > 0 && questions.length < count && fullPool.length > count;
  }

  return { questions: questions.map(toPublic), effective: { difficulty, pyq20Years, pyqOnly }, setNumber, totalSets, totalPoolCount, isRevisionMode, isRemainingSubset };
}

export interface CountQuery {
  examId?: string;
  topicId?: string;
  difficulty?: Difficulty;
  pyq20Years?: boolean;
  pyqOnly?: boolean;
  /** Exclude the questions the caller already completed (sent as excludeKeys). */
  fresh?: boolean;
  /** Cap, like a drawn test of at most this many questions. */
  limit?: number;
}

const countCache = new Map<string, number>();
let cachesFor = editorialVersion();

/** Pool sizes depend on the published editorial set, so drop them when it changes. */
function dropStaleCaches() {
  const current = editorialVersion();
  if (current === cachesFor) return;
  cachesFor = current;
  countCache.clear();
  manifestCache.clear();
}

export function poolCount(query: CountQuery, excludeKeys: string[]): number {
  dropStaleCaches();
  const cacheable = !query.fresh;
  const key = JSON.stringify([query.examId, query.topicId, query.difficulty, query.pyq20Years, query.pyqOnly, query.limit]);
  if (cacheable && countCache.has(key)) return countCache.get(key)!;
  const size = getQuestionPool({
    examId: query.examId,
    topicId: query.topicId,
    difficulty: query.difficulty,
    pyq20Years: query.pyq20Years,
    pyqOnly: query.pyqOnly,
    excludeKeys: query.fresh ? excludeKeys : undefined,
  }).length;
  const result = query.limit ? Math.min(size, Math.max(1, Math.min(150, Math.floor(query.limit)))) : size;
  if (cacheable) countCache.set(key, result);
  return result;
}

const manifestCache = new Map<string, Record<string, number>>();

/** Pool size per syllabus topic for one exam. Counts are public; answers are not involved. */
export function examManifest(examId: string): Record<string, number> {
  dropStaleCaches();
  const cached = manifestCache.get(examId);
  if (cached) return cached;
  const counts: Record<string, number> = {};
  for (const topic of getExamTopics(examId)) {
    counts[topic.id] = getQuestionPool({ examId, topicId: topic.id }).length;
  }
  manifestCache.set(examId, counts);
  return counts;
}
