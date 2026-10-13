import 'server-only';
import type { Question } from './question-types';
import { buildQuestion, validateQuestionData } from './question-content';
import { setEditorialQuestions } from './editorial-store';
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
  const { data, error } = await db.from('examsathi_content_items')
    .select('id, topic_id, data').eq('type', 'question').eq('status', 'published').order('created_at', { ascending: true }).limit(2000);
  if (error || !data) return; // keep serving the previous copy and retry on the next request
  const next: Question[] = [];
  for (const row of data as Array<{ id: string; topic_id: string; data: unknown }>) {
    const checked = validateQuestionData(row.data);
    if (checked.ok) next.push(buildQuestion(row.id, row.topic_id, checked.value)); // malformed rows are never served
  }
  setEditorialQuestions(next);
  loadedAt = Date.now();
}

/** Call before reading questions in a request. Cheap when fresh; concurrent callers share one load. */
export async function refreshEditorial(): Promise<void> {
  if (Date.now() - loadedAt < TTL_MS) return;
  if (!inflight) inflight = load().catch(() => undefined).finally(() => { inflight = null; });
  await inflight;
}
