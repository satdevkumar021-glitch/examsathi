'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import { completeAuthCallback } from '@/lib/supabase/callback';

export default function AuthCallback() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(() => isSupabaseConfigured() ? null : 'Account access is unavailable until the backend is configured.');
  useEffect(() => {
    let active = true;
    if (!isSupabaseConfigured()) return;
    completeAuthCallback(window.location.href).then(() => {
      if (active) router.replace('/dashboard');
    }).catch(err => { if (active) setError(err instanceof Error ? err.message : 'Unable to sign in. Please try again.'); });
    return () => { active = false; };
  }, [router]);
  return <main className="min-h-screen p-6 flex flex-col justify-center gap-4"><h1 className="text-2xl font-bold">Confirming your account</h1>{error ? <><p role="alert" className="text-amber-200">{error}</p><Link href="/login" className="text-teal-300">Back to sign in</Link></> : <p role="status">Verifying your sign-in link…</p>}</main>;
}
