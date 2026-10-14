import { apiUrl } from './paths';
import { isSupabaseConfigured } from './supabase/config';
import { createClient } from './supabase/client';
import type { PublicQuestion, QuestionReveal, ReviewedQuestion } from './question-types';
import type { ScoreResult, TopicBreakdown } from './scoring';

/**
 * Browser access to the question bank. The bank and its answer key live on the server only;
 * everything here is a network call. Nothing in this module (or any client module) may import
 * the bank directly — tests/question-isolation.test.mjs enforces that.
 */

export class QuestionApiError extends Error {
  constructor(message: string, readonly status: number) { super(message); }
}

async function post<T>(path: string, body: unknown, headers: Record<string, string> = {}): Promise<T> {
  const endpoint = apiUrl(path);
  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30000),
    });
  } catch {
    throw new QuestionApiError('Could not reach the question service. Check your connection and try again.', 0);
  }
  const data = await response.json().catch(() => null);
  if (!response.ok || !data?.success) throw new QuestionApiError(data?.message || 'Question service error.', response.status);
  return data as T;
}

/** AI-generated questions are created in the browser together with their answers; they never come from the bank. */
export const isLocalQuestionId = (id: string): boolean => /^(notes|ai)-\d+-\d+$/.test(id);

/** Newest completed-question keys that fit the server's request limits. */
export function compactKeys(keys: string[], maxKeys = 5000, maxChars = 450000): string[] {
  const out: string[] = [];
  let chars = 0;
  for (let i = keys.length - 1; i >= 0 && out.length < maxKeys; i--) {
    const key = keys[i];
    if (key.length > 400) continue;
    chars += key.length + 3;
    if (chars > maxChars) break;
    out.push(key);
  }
  return out;
}

export type Difficulty = 'all' | 'easy' | 'medium' | 'hard';

export interface SetRequest {
  topicId: string;
  examId?: string;
  difficulty?: Difficulty;
  pyq20Years?: boolean;
  pyqOnly?: boolean;
  count?: number;
  /** >= 1 for a deterministic numbered set; omit for a random draw. */
  setNumber?: number;
  ordered?: boolean;
  isRevision?: boolean;
  isFresh?: boolean;
  excludeKeys?: string[];
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

export const fetchQuestionSet = (request: SetRequest) =>
  post<SetResponse & { success: true }>('/api/questions/set/', { ...request, excludeKeys: compactKeys(request.excludeKeys ?? []) });

const revealCache = new Map<string, QuestionReveal>();

/** Answers and explanations for specific questions (flashcards, lessons, instant feedback). */
export async function fetchReveals(ids: string[]): Promise<Record<string, QuestionReveal>> {
  const missing = [...new Set(ids)].filter(id => !revealCache.has(id));
  for (let i = 0; i < missing.length; i += 150) {
    const { reveals } = await post<{ reveals: Record<string, QuestionReveal> }>('/api/questions/reveal/', { ids: missing.slice(i, i + 150) });
    for (const [id, reveal] of Object.entries(reveals)) revealCache.set(id, reveal);
  }
  return Object.fromEntries(ids.filter(id => revealCache.has(id)).map(id => [id, revealCache.get(id)!]));
}

export function mergeReveals<T extends PublicQuestion>(questions: T[], reveals: Record<string, QuestionReveal>): ReviewedQuestion[] {
  return questions.map(q => ({ ...q, ...reveals[q.id] }));
}

/** Question text (no answers) for saved ids such as favourites and bookmarks. */
export async function lookupQuestions(ids: string[]): Promise<PublicQuestion[]> {
  const out: PublicQuestion[] = [];
  for (let i = 0; i < ids.length; i += 300) {
    const { questions } = await post<{ questions: PublicQuestion[] }>('/api/questions/lookup/', { ids: ids.slice(i, i + 300) });
    out.push(...questions);
  }
  return out;
}

export interface CountQuery {
  examId?: string;
  topicId?: string;
  difficulty?: Difficulty;
  pyq20Years?: boolean;
  pyqOnly?: boolean;
  /** Exclude questions already completed (pass the completed keys as excludeKeys). */
  fresh?: boolean;
  limit?: number;
}

export async function fetchCounts(queries: CountQuery[], excludeKeys: string[] = []): Promise<number[]> {
  const out: number[] = [];
  for (let i = 0; i < queries.length; i += 120) {
    const { counts } = await post<{ counts: number[] }>('/api/questions/count/', { queries: queries.slice(i, i + 120), excludeKeys: compactKeys(excludeKeys) });
    out.push(...counts);
  }
  return out;
}

export type Manifest = Record<string, Record<string, number>>;
const manifestCache: Manifest = {};

/** Available questions per syllabus topic for each exam (unfiltered pool sizes). */
export async function fetchManifest(examIds: string[]): Promise<Manifest> {
  const missing = [...new Set(examIds)].filter(id => !manifestCache[id]);
  for (let i = 0; i < missing.length; i += 60) {
    const { manifest } = await post<{ manifest: Manifest }>('/api/questions/manifest/', { examIds: missing.slice(i, i + 60) });
    Object.assign(manifestCache, manifest);
  }
  return Object.fromEntries(examIds.map(id => [id, manifestCache[id] ?? {}]));
}

/** Size of a drawn test for a topic: the pool capped at `limit` (default 150), like a real draw. */
export const topicAvailable = (manifest: Manifest, examId: string, topicId: string, limit = 150): number =>
  Math.min(manifest[examId]?.[topicId] ?? 0, limit);

export const fetchDailyQuestion = (topicIds: string[], dayIndex: number) =>
  post<{ question: PublicQuestion | null; poolSize: number }>('/api/questions/daily/', { topicIds, dayIndex });

export interface AttemptResult {
  stored: boolean;
  score: ScoreResult;
  topicBreakdown: TopicBreakdown[];
  reveals: Record<string, QuestionReveal>;
}

export interface AttemptSubmission {
  attemptId: string;
  examId: string;
  testId: string;
  questionIds: string[];
  answers: Record<string, string>;
  timeTakenSeconds: number;
}

/** Sends raw answers (never a score). Returns the server's score and the review material. */
export async function submitAttempt(submission: AttemptSubmission, accessToken?: string): Promise<AttemptResult> {
  const data = await post<AttemptResult & { success: true }>('/api/attempts/', submission, accessToken ? { Authorization: `Bearer ${accessToken}` } : {});
  for (const [id, reveal] of Object.entries(data.reveals)) revealCache.set(id, reveal);
  return data;
}

/** Submits as the signed-in learner when there is a session; guests are scored but not stored. */
export async function submitAttemptAsLearner(submission: AttemptSubmission): Promise<AttemptResult> {
  let token: string | undefined;
  try {
    if (isSupabaseConfigured()) token = (await createClient().auth.getSession()).data.session?.access_token;
  } catch { /* Treated as a guest. */ }
  return submitAttempt(submission, token);
}
