import 'server-only';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
/** Request-scoped server client. Never reuse sessions across requests. */
export function createClient(token?: string) {
  return createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: token ? { headers: { Authorization: `Bearer ${token}` } } : undefined,
  });
}
