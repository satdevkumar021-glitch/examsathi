'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import type { User, Session } from '@supabase/supabase-js';

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isGuest: boolean;
  error: string | null;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(isSupabaseConfigured);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!isSupabaseConfigured()) return;
    let active = true;
    let revision = 0;
    let unsubscribe: (() => void) | undefined;
    async function initialize() {
      try {
        const supabase = createClient();
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, next) => {
          revision++;
          if (!active) return;
          setSession(next); setUser(next?.user ?? null); setError(null); setLoading(false);
        });
        unsubscribe = () => subscription.unsubscribe();
        const initialRevision = revision;
        const { data, error: sessionError } = await supabase.auth.getSession();
        if (!active || revision !== initialRevision) return;
        if (sessionError) throw sessionError;
        setSession(data.session); setUser(data.session?.user ?? null); setLoading(false);
      } catch {
        if (!active) return;
        setError('Unable to restore your account session. Please try signing in again.');
        setLoading(false);
      }
    }
    void initialize();
    return () => { active = false; unsubscribe?.(); };
  }, []);
  // Session state is for UI only; database policies must enforce authorization.
  return { user, session, loading, isGuest: !user, error };
}
