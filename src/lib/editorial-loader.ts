import 'server-only';
import type { Question } from './question-types';
import { buildQuestion, validateQuestionData } from './question-content';
import { setEditorialQuestions, setEditorialResources } from './editorial-store';
import { toPublicResource, type PublicResource } from './resource-content';
import { serviceClient } from './server-auth';

// Keeps the in-memory editorial store in step with the database. A publish reaches the instance that
// handled it immediately (`invalidateEditorial`) and every other instance within TTL_MS. If the database
// is unreachable the last good copy keeps serving.
const TTL_MS = 60_000;

let loadedAt = 0;
let inflight: Promise<void> | null = null;

/** Forces the next read to reload (called after any change to the pipeline). */
export function invalidateEditorial() { loadedAt = 0; }

async function load() {
  const db = serviceClient();
  if (!db) { loadedAt = Date.now(); return; }
  const [questions, items] = await Promise.all([
    db.from('examsathi_content_items').select('id, topic_id, data').eq('type', 'question').eq('status', 'published').order('created_at', { ascending: true }).limit(2000),
    db.from('examsathi_content_items').select('id, type, title, topic_id, data').in('type', ['lesson', 'video', 'pdf']).eq('status', 'published').order('created_at', { ascending: true }).limit(1000),
  ]);
  // Both or neither: a partial load would silently drop one kind of content. Keep the last good copy and retry.
  if (questions.error || !questions.data || items.error || !items.data) return;
  const nextQuestions: Question[] = [];
  for (const row of questions.data as Array<{ id: string; topic_id: string; data: unknown }>) {
    const checked = validateQuestionData(row.data);
    if (checked.ok) nextQuestions.push(buildQuestion(row.id, row.topic_id, checked.value)); // malformed rows are never served
  }
  const nextResources: PublicResource[] = [];
  for (const row of items.data as Array<{ id: string; type: string; title: string; topic_id: string; data: unknown }>) {
    const resource = toPublicResource({ id: row.id, type: row.type, title: row.title, topicId: row.topic_id, data: row.data });
    if (resource) nextResources.push(resource);
  }
  setEditorialQuestions(nextQuestions);
  setEditorialResources(nextResources);
  loadedAt = Date.now();
}

/** Call before reading questions in a request. Cheap when fresh; concurrent callers share one load. */
export async function refreshEditorial(): Promise<void> {
  if (Date.now() - loadedAt < TTL_MS) return;
  if (!inflight) inflight = load().catch(() => undefined).finally(() => { inflight = null; });
  await inflight;
}
