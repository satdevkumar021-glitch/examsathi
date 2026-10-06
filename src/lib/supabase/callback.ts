import type { Session } from '@supabase/supabase-js';
import { createClient } from './client';

// React Strict Mode can mount twice. A one-use PKCE code must be exchanged once.
let pending: { href: string; promise: Promise<Session> } | undefined;
export function completeAuthCallback(href: string): Promise<Session> {
  if (pending?.href === href) return pending.promise;
  const promise = exchange(href);
  pending = { href, promise };
  return promise;
}

async function exchange(href: string): Promise<Session> {
  const url = new URL(href);
  const hash = new URLSearchParams(url.hash.slice(1));
  if (url.searchParams.has('error') || hash.has('error') || hash.has('error_code')) throw new Error('This link has expired or is invalid. Request a new link.');
  const client = createClient();
  const code = url.searchParams.get('code');
  let session: Session | null = null;
  if (code) {
    const result = await client.auth.exchangeCodeForSession(code);
    if (result.error) throw new Error('This link has expired, was already used, or was opened in a different browser. Request a new link and open it in the browser that requested it.');
    session = result.data.session;
  } else {
    // Accept legacy implicit email links as well as the current PKCE flow.
    const access_token = hash.get('access_token');
    const refresh_token = hash.get('refresh_token');
    if (!access_token || !refresh_token) throw new Error('Open the link from your confirmation or recovery email to continue.');
    if (url.pathname.includes('/reset-password') && hash.get('type') !== 'recovery') throw new Error('Please use a password recovery link.');
    const result = await client.auth.setSession({ access_token, refresh_token });
    if (result.error) throw new Error('This link has expired or is invalid. Request a new link.');
    session = result.data.session;
  }
  if (!session) throw new Error('No session was created. Request a new link.');
  const { data, error } = await client.auth.getUser();
  if (error || !data.user) throw new Error('Unable to verify this session. Please sign in again.');
  return session;
}
