'use client';
import { useState, useEffect } from 'react';
import { Bell, BellOff } from 'lucide-react';
import { apiUrl } from '@/lib/paths';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import { createClient } from '@/lib/supabase/client';
import { useStore } from '@/lib/store';

/** True only on a browser that supports Web Push and has an active service worker registration. */
async function pushSupported(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator) || !('PushManager' in window)) return false;
  const reg = await navigator.serviceWorker.ready.catch(() => null);
  return !!reg;
}

async function getCurrentEndpoint(): Promise<string | null> {
  const reg = await navigator.serviceWorker.ready.catch(() => null);
  const sub = await reg?.pushManager.getSubscription().catch(() => null);
  return sub?.endpoint ?? null;
}

async function subscribe(lang: 'en' | 'hi' | 'pa'): Promise<'success' | 'denied' | 'error'> {
  try {
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') return 'denied';
    const keyRes = await fetch(apiUrl('/api/push/key/'), { signal: AbortSignal.timeout(10000) });
    if (!keyRes.ok) return 'error';
    const { publicKey } = await keyRes.json();
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(publicKey) });
    const keys = sub.toJSON().keys ?? {};
    const token = (await createClient().auth.getSession()).data.session?.access_token;
    if (!token) return 'error';
    const res = await fetch(apiUrl('/api/push/subscribe/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ subscription: { endpoint: sub.endpoint, keys }, tzOffsetMinutes: -new Date().getTimezoneOffset(), lang }),
      signal: AbortSignal.timeout(15000),
    });
    return res.ok ? 'success' : 'error';
  } catch { return 'error'; }
}

async function unsubscribe(endpoint: string): Promise<boolean> {
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    await sub?.unsubscribe();
    const token = (await createClient().auth.getSession()).data.session?.access_token;
    if (!token) return true;
    const res = await fetch(apiUrl('/api/push/subscribe/'), {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ endpoint }),
      signal: AbortSignal.timeout(10000),
    });
    return res.ok;
  } catch { return false; }
}

function urlBase64ToUint8Array(base64: string): Uint8Array<ArrayBuffer> {
  const padded = base64.replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(padded + '='.repeat((4 - padded.length % 4) % 4));
  const bytes = new Uint8Array(new ArrayBuffer(raw.length));
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return bytes;
}

/**
 * A minimal opt-in toggle for streak reminders. Shown only when:
 * - the browser supports Web Push,
 * - Supabase is configured (so a session is possible),
 * - and the user is on the profile page or another place where they explicitly manage settings.
 */
export default function PushToggle() {
  const { language: lang } = useStore();
  const t = (en: string, hi: string, pa: string): string => ({ en, hi, pa }[lang] ?? en);

  const [supported, setSupported] = useState(false);
  const [currentEndpoint, setCurrentEndpoint] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let active = true;
    if (!isSupabaseConfigured()) return;
    void pushSupported().then(yes => { if (active && yes) { setSupported(true); void getCurrentEndpoint().then(ep => { if (active) setCurrentEndpoint(ep); }); } });
    return () => { active = false; };
  }, []);

  if (!supported) return null;
  const subscribed = !!currentEndpoint;

  const handleToggle = async () => {
    setBusy(true); setMessage('');
    if (subscribed) {
      const ok = await unsubscribe(currentEndpoint!);
      setCurrentEndpoint(null);
      setMessage(ok ? t('Reminders off.', 'रिमाइंडर बंद।', 'ਰਿਮਾਈਂਡਰ ਬੰਦ।') : t('Something went wrong.', 'कुछ गलत हुआ।', 'ਕੁਝ ਗਲਤ ਹੋਇਆ।'));
    } else {
      const result = await subscribe(lang as 'en' | 'hi' | 'pa');
      if (result === 'success') { const ep = await getCurrentEndpoint(); setCurrentEndpoint(ep); setMessage(t('Reminders on.', 'रिमाइंडर चालू।', 'ਰਿਮਾਈਂਡਰ ਚਾਲੂ।')); }
      else if (result === 'denied') setMessage(t('Permission denied.', 'अनुमति नहीं मिली।', 'ਇਜਾਜ਼ਤ ਨਹੀਂ ਮਿਲੀ।'));
      else setMessage(t('Something went wrong.', 'कुछ गलत हुआ।', 'ਕੁਝ ਗਲਤ ਹੋਇਆ।'));
    }
    setBusy(false);
  };

  return (
    <div className="flex flex-col gap-1">
      <button
        onClick={() => void handleToggle()}
        disabled={busy}
        aria-pressed={subscribed}
        className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-semibold text-white hover:border-teal-500 disabled:opacity-50 transition"
      >
        {subscribed ? <BellOff size={16} aria-hidden="true" /> : <Bell size={16} aria-hidden="true" />}
        {busy ? t('Please wait…', 'रुकें…', 'ਉਡੀਕ ਕਰੋ…')
          : subscribed ? t('Turn off reminders', 'रिमाइंडर बंद करें', 'ਰਿਮਾਈਂਡਰ ਬੰਦ ਕਰੋ')
          : t('Remind me if my streak is at risk', 'स्ट्रीक खतरे में होने पर याद दिलाएं', 'ਸਟ੍ਰੀਕ ਖਤਰੇ ਵਿੱਚ ਹੋਣ ਤੇ ਯਾਦ ਦਿਵਾਓ')}
      </button>
      {message && <p role="status" className="text-xs text-slate-300 pl-1">{message}</p>}
    </div>
  );
}
