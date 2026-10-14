'use client';
import { useEffect, useState } from 'react';
import { fetchCounts, fetchManifest, type CountQuery, type Manifest } from './question-client';

/** Per-topic available-question counts for the given exams. `null` until loaded. */
export function useManifest(examIds: string[]): Manifest | null {
  const key = [...new Set(examIds)].sort().join('|');
  const [state, setState] = useState<{ key: string; manifest: Manifest } | null>(null);
  useEffect(() => {
    if (!key) return;
    let live = true;
    fetchManifest(key.split('|')).then(manifest => { if (live) setState({ key, manifest }); }).catch(() => { if (live) setState({ key, manifest: {} }); });
    return () => { live = false; };
  }, [key]);
  return state?.key === key ? state.manifest : null;
}

/** Filtered pool counts, one number per query. `null` until loaded; failures read as 0. */
export function useCounts(queries: CountQuery[], excludeKeys: string[] = []): number[] | null {
  // The completed-key list only changes when its length does; keying on it avoids refetching on every render.
  const key = JSON.stringify([queries, excludeKeys.length]);
  const [state, setState] = useState<{ key: string; counts: number[] } | null>(null);
  useEffect(() => {
    let live = true;
    const [q] = JSON.parse(key) as [CountQuery[], number];
    fetchCounts(q, excludeKeys).then(counts => { if (live) setState({ key, counts }); }).catch(() => { if (live) setState({ key, counts: q.map(() => 0) }); });
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- excludeKeys is represented by its length in `key`.
  }, [key]);
  return state?.key === key ? state.counts : null;
}
