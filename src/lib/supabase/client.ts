import { createBrowserClient } from '@supabase/ssr';
import { isSupabaseConfigured } from './config';

export function createClient() {
  if (!isSupabaseConfigured()) throw new Error('Supabase is not configured. Guest study is still available.');
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    // The static callback pages exchange codes explicitly, once per link.
    { auth: { detectSessionInUrl: false } }
  );
}
