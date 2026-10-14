'use client';
import { useEffect, useState } from 'react';
import { apiUrl } from './paths';
import { isSupabaseConfigured } from './supabase/config';
import { createClient } from './supabase/client';
import type { LearnerInsights } from './learner-insights';

export type InsightsState =
  | { status: 'loading' }
  | { status: 'guest' }
  | { status: 'error' }
  | { status: 'ready'; insights: LearnerInsights };

/** Server-derived streak and weak topics for the signed-in learner. Guests keep their local figures. */
export async function fetchLearnerInsights(): Promise<InsightsState> {
  if (!isSupabaseConfigured()) return { status: 'guest' };
  try {
    const token = (await createClient().auth.getSession()).data.session?.access_token;
    if (!token) return { status: 'guest' };
    const tz = -new Date().getTimezoneOffset();
    const response = await fetch(apiUrl(`/api/learner/profile/?tz=${tz}`), { headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(15000) });
    if (response.status === 401) return { status: 'guest' };
    const json = await response.json().catch(() => null);
    return response.ok && json?.success ? { status: 'ready', insights: json.insights as LearnerInsights } : { status: 'error' };
  } catch {
    return { status: 'error' };
  }
}

export function useLearnerInsights(): InsightsState {
  const [state, setState] = useState<InsightsState>({ status: 'loading' });
  useEffect(() => {
    let active = true;
    void fetchLearnerInsights().then(next => { if (active) setState(next); });
    return () => { active = false; };
  }, []);
  return state;
}
