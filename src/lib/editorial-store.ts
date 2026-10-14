import 'server-only';
import type { Question } from './question-types';
import type { PublicResource } from './resource-content';

// Published editorial questions held in memory. This file has no database or network dependency so the
// question engine can import it cheaply; `editorial-loader.ts` fills it from the database.

/** An unpublished question stays gradable for a day so a learner mid-test is never failed by an edit. */
const GRACE_MS = 24 * 60 * 60 * 1000;

let published: Question[] = [];
let byId = new Map<string, Question>();
const retired = new Map<string, { question: Question; until: number }>();
let version = 0;

/** Questions currently served to learners. */
export const editorialQuestions = (): readonly Question[] => published;

/** Resolves a published question, or a recently unpublished one (for grading and review only). */
export function editorialQuestion(id: string): Question | undefined {
  const live = byId.get(id);
  if (live) return live;
  const old = retired.get(id);
  if (!old) return undefined;
  if (old.until < Date.now()) { retired.delete(id); return undefined; }
  return old.question;
}

/** Bumps whenever the published set changes, so derived caches can drop themselves. */
export const editorialVersion = () => version;

/** Replaces the served set. Questions that disappear stay gradable for the grace window. */
export function setEditorialQuestions(next: Question[]): boolean {
  const nextIds = new Set(next.map(q => q.id));
  for (const q of published) if (!nextIds.has(q.id)) retired.set(q.id, { question: q, until: Date.now() + GRACE_MS });
  const changed = next.length !== published.length || next.some((q, i) => JSON.stringify(q) !== JSON.stringify(published[i]));
  if (changed) { published = next; byId = new Map(next.map(q => [q.id, q])); version++; }
  return changed;
}

// Published lessons, videos and document links. Served read-only to students; they carry no answers, so
// unlike questions there is nothing to keep gradable after they are unpublished.
let resources: PublicResource[] = [];

/** Published resources for any of the given topics (empty list means all, used by tests). */
export function editorialResources(topicIds: readonly string[]): PublicResource[] {
  return resources.filter(item => topicIds.includes(item.topicId));
}

export function setEditorialResources(next: PublicResource[]): void { resources = next; }
