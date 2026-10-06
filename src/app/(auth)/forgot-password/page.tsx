'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return !!(url && !url.includes('your-project-ref'));
};

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [configured, setConfigured] = useState(false);

  useEffect(() => {
    setConfigured(isSupabaseConfigured());
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const supabase = createClient();
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/auth/reset-password',
      });
      if (resetError) {
        setError(resetError.message);
        setLoading(false);
        return;
      }
      setSent(true);
      setLoading(false);
    } catch {
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col p-6 justify-center max-w-lg mx-auto w-full text-slate-100">
      <div className="bg-slate-900/90 backdrop-blur-xl p-7 rounded-3xl border border-slate-700/80 shadow-2xl">

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-tr from-teal-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-2 shadow-lg">
            🔑
          </div>
          <h1 className="text-2xl font-black text-white">Reset Password</h1>
          <p className="text-xs text-slate-400 mt-1">
            Enter your email to receive a password reset link
          </p>
        </div>

        {/* Backend not configured notice */}
        {!configured && (
          <div className="bg-amber-950/60 border border-amber-500/40 rounded-xl p-3 mb-4 text-xs text-amber-200">
            ⚠️ <strong>Backend not configured</strong> — password reset is only available when Supabase is set up.
            <br />
            <Link href="/login" className="text-teal-300 underline mt-1 inline-block">
              Continue with guest or demo access →
            </Link>
          </div>
        )}

        {sent ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check size={24} className="text-teal-400" />
            </div>
            <p className="text-sm text-slate-200 font-semibold mb-1">Password reset link sent!</p>
            <p className="text-xs text-slate-400 mb-4">Check your email at <span className="text-teal-300">{email}</span></p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-xs text-teal-400 hover:text-teal-300 underline"
            >
              Back to Login <ArrowRight size={13} />
            </Link>
          </div>
        ) : (
          <>
            {error && (
              <div className="bg-red-950/60 border border-red-500/40 rounded-xl p-3 mb-4 text-xs text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleReset} className="flex flex-col gap-3.5">
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 text-slate-400" size={16} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  disabled={!configured}
                  className="w-full bg-slate-800/70 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !configured}
                className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-white font-black py-3 rounded-xl shadow-lg text-sm flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Reset Link <ArrowRight size={15} /></>
                )}
              </button>
            </form>
          </>
        )}

        <p className="text-center mt-5 text-xs text-slate-400">
          Remembered your password?{' '}
          <Link href="/login" className="text-teal-400 font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
