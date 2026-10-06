'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import { createClient } from '@/lib/supabase/client';
import { completeAuthCallback } from '@/lib/supabase/callback';

export default function ResetPassword() {
  const [ready, setReady] = useState(false);
  const [checking, setChecking] = useState(isSupabaseConfigured);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(() => isSupabaseConfigured() ? null : 'Password recovery is unavailable until the backend is configured.');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    let active = true;
    if (!isSupabaseConfigured()) return;
    completeAuthCallback(window.location.href).then(() => {
      if (!active) return;
      window.history.replaceState(null, '', window.location.pathname);
      setReady(true);
    }).catch(err => { if (active) setError(err instanceof Error ? err.message : 'Unable to verify this link.'); })
      .finally(() => { if (active) setChecking(false); });
    return () => { active = false; };
  }, []);
  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!ready || saving) return;
    setError(null);
    if (password.length < 8) { setError('Use at least 8 characters.'); return; }
    if (password !== confirm) { setError('The passwords do not match.'); return; }
    setSaving(true);
    try {
      const client = createClient();
      const { error: updateError } = await client.auth.updateUser({ password });
      if (updateError) { setError(updateError.message); return; }
      setPassword(''); setConfirm(''); setReady(false); setSuccess(true);
    } catch { setError('Unable to update your password. Check your connection and try again.'); }
    finally { setSaving(false); }
  };
  return <main className="min-h-screen p-6 flex flex-col justify-center gap-4"><h1 className="text-2xl font-bold">Choose a new password</h1>
    {checking && <p role="status">Verifying your recovery link…</p>}
    {error && <p role="alert" className="text-amber-200">{error}</p>}
    {success ? <><p role="status">Your password was updated successfully.</p><Link href="/dashboard" className="text-teal-300">Continue to dashboard</Link></> : ready ? <form onSubmit={save} className="flex flex-col gap-4">
      <label className="flex flex-col gap-2">New password<input className="rounded-xl p-3 bg-slate-800" type="password" autoComplete="new-password" minLength={8} required disabled={saving} value={password} onChange={e => setPassword(e.target.value)} /></label>
      <label className="flex flex-col gap-2">Confirm new password<input className="rounded-xl p-3 bg-slate-800" type="password" autoComplete="new-password" minLength={8} required disabled={saving} value={confirm} onChange={e => setConfirm(e.target.value)} /></label>
      <button disabled={saving} className="bg-teal-500 text-slate-950 rounded-xl p-3 font-bold disabled:opacity-50">{saving ? 'Updating…' : 'Update password'}</button>
    </form> : !checking && <Link href="/forgot-password" className="text-teal-300">Request a new recovery link</Link>}
  </main>;
}
