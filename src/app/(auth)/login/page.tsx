'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { instantDemoLogin } from '@/lib/auth';
import { useStore } from '@/lib/store';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured, authRedirectUrl, isGoogleAuthEnabled } from '@/lib/supabase/config';

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);
  const configured = isSupabaseConfigured();
  const googleEnabled = isGoogleAuthEnabled();
  const router = useRouter();
  const { setUser } = useStore();

  const handleDemoLogin = (role: 'ett' | 'clerk' | 'master-cadre') => {
    const user = instantDemoLogin(role);
    setUser({ name: user.name, streak: user.streak, xp: user.xp });
    setToastMsg(`Logged in as ${user.name}! 🎓`);
    setTimeout(() => {
      router.push('/dashboard');
    }, 500);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSupabaseConfigured() || loading) return;
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) {
        setError(signInError.message);
        setLoading(false);
        return;
      }
      if (data.user && data.session) {
        const displayName = data.user.user_metadata?.full_name || data.user.email || 'Student';
        setUser({ name: displayName, streak: 0, xp: 0 });
        router.push('/dashboard');
      } else { setError('No account session was created. Please try again.'); setLoading(false); }
    } catch {
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!isGoogleAuthEnabled() || oauthLoading) return;
    setOauthLoading(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: authRedirectUrl('/auth/callback'),
        },
      });
      if (oauthError) {
        setError(oauthError.message);
        setOauthLoading(false);
      }
    } catch {
      setError('Google sign-in failed. Please try again.');
      setOauthLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col p-6 justify-center max-w-lg mx-auto w-full text-slate-100">

      {toastMsg && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-teal-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <Check size={16} />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="bg-slate-900/90 backdrop-blur-xl p-7 rounded-3xl border border-slate-700/80 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-tr from-teal-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-2 shadow-lg">
            🎓
          </div>
          <h2 className="text-2xl font-black text-white">ExamSathi Login</h2>
          <p className="text-xs text-slate-400 mt-1">
            Sign in to your account. Study progress currently stays in this browser.
          </p>
        </div>

        {/* Guest / Demo section */}
        <div className="bg-slate-800/80 p-3 rounded-2xl border border-indigo-500/30 mb-5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-teal-300 mb-2">
            <Sparkles size={14} className="text-amber-400" />
            <span>Guest / Demo Access — No account needed:</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleDemoLogin('ett')}
              className="bg-indigo-950/70 hover:bg-indigo-900 border border-indigo-700/50 p-2 rounded-xl text-center transition"
            >
              <span className="text-[11px] font-black text-white block">👶 ETT Punjab</span>
              <span className="text-[9px] text-teal-300">6635 / 5994</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('clerk')}
              className="bg-teal-950/70 hover:bg-teal-900 border border-teal-700/50 p-2 rounded-xl text-center transition"
            >
              <span className="text-[11px] font-black text-white block">💼 PSSSB Clerk</span>
              <span className="text-[9px] text-teal-300">Raavi & IT</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('master-cadre')}
              className="bg-amber-950/70 hover:bg-amber-900 border border-amber-700/50 p-2 rounded-xl text-center transition"
            >
              <span className="text-[11px] font-black text-white block">🌾 Master Cadre</span>
              <span className="text-[9px] text-amber-300">SST Service</span>
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 text-center">
            Guest progress is stored locally — not synced across devices.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-slate-700" />
          <span className="text-xs text-slate-500 whitespace-nowrap">— or sign in with your account —</span>
          <div className="flex-1 h-px bg-slate-700" />
        </div>

        {/* Backend not configured notice */}
        {!configured && (
          <div className="bg-amber-950/60 border border-amber-500/40 rounded-xl p-3 mb-4 text-xs text-amber-200">
            ⚠️ <strong>Backend not configured</strong> — running in guest/demo mode only. To enable real accounts, follow the{' '}
            <Link href="https://github.com/satdevkumar021-glitch/examsathi/blob/main/docs/SUPABASE_SETUP.md" className="underline text-amber-300">Supabase setup guide</Link>.
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-950/60 border border-red-500/40 rounded-xl p-3 mb-4 text-xs text-red-300">
            {error}
          </div>
        )}

        {/* Email + Password form */}
        <form onSubmit={handleSignIn} className="flex flex-col gap-3.5">
          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 text-slate-400" size={16} />
            <input
              type="email"
              aria-label="Email address"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              required
              disabled={!configured}
              className="w-full bg-slate-800/70 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3.5 top-3.5 text-slate-400" size={16} />
            <input
              type={showPwd ? 'text' : 'password'}
              aria-label="Password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              disabled={!configured}
              className="w-full bg-slate-800/70 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-10 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
            />
            <button
              type="button"
              aria-label={showPwd ? 'Hide password' : 'Show password'}
              onClick={() => setShowPwd(v => !v)}
              className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-200"
              tabIndex={-1}
            >
              {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div className="text-right">
            <Link href="/forgot-password" className="text-[11px] text-slate-400 hover:text-teal-300 underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading || !configured}
            className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-white font-black py-3 rounded-xl shadow-lg text-sm flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <>Sign In <ArrowRight size={15} /></>
            )}
          </button>
        </form>

        {/* Google OAuth */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={oauthLoading || !googleEnabled}
          className="mt-3 w-full bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {oauthLoading ? (
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </>
          )}
        </button>

        <p className="text-center mt-5 text-xs text-slate-400">
          New here?{' '}
          <Link href="/register" className="text-amber-400 font-bold hover:underline">
            Register
          </Link>
        </p>

        <div className="mt-3 text-center">
          <Link href="/dashboard" className="text-[11px] text-slate-500 hover:text-slate-400">
            Continue as Guest (No Login Required) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
