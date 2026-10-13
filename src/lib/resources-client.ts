import { apiUrl } from './paths';
import type { PublicResource } from './resource-content';

/** Reviewed lessons, videos and document links that educators have published for a topic. Best effort: the page works without them. */
export async function fetchResources(topicIds: string[]): Promise<PublicResource[]> {
  const topics = Array.from(new Set(topicIds.filter(Boolean))).slice(0, 4);
  if (topics.length === 0) return [];
  try {
    const response = await fetch(apiUrl(`/api/resources/?topics=${encodeURIComponent(topics.join(','))}`), { signal: AbortSignal.timeout(15000) });
    const json = await response.json().catch(() => null);
    return response.ok && json?.success && Array.isArray(json.resources) ? (json.resources as PublicResource[]) : [];
  } catch {
    return [];
  }
}
