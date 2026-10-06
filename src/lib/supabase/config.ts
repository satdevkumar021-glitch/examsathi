/** Public browser configuration. Never use service-role/secret keys here. */
export function isValidSupabaseConfig(url?: string, key?: string): boolean {
  if (!url || !key || /your-project|placeholder/i.test(url) || /your-|placeholder/i.test(key)) return false;
  if (key.startsWith('sb_secret_')) return false;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' && !(parsed.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(parsed.hostname))) return false;
    if (parsed.username || parsed.password || parsed.search || parsed.hash || !['', '/'].includes(parsed.pathname)) return false;
    // Legacy JWT keys must be the public anon role, not service_role.
    if (key.startsWith('eyJ')) {
      const payload = JSON.parse(atob(key.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      return payload.role === 'anon';
    }
    return key.startsWith('sb_publishable_') && key.length > 20;
  } catch { return false; }
}

export function isSupabaseConfigured(): boolean {
  return isValidSupabaseConfig(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export function buildAuthRedirect(origin: string, path: '/auth/callback' | '/auth/reset-password', basePath: string): string {
  const base = basePath.replace(/^\/+|\/+$/g, '');
  return new URL(`${base ? `/${base}` : ''}${path}/`, origin).href;
}

export function authRedirectUrl(path: '/auth/callback' | '/auth/reset-password'): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? 'examsathi' : '');
  return buildAuthRedirect(window.location.origin, path, basePath);
}
