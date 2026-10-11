'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Target, ArrowRight, Check } from 'lucide-react';
import { registerUser } from '@/lib/auth';
import { useStore } from '@/lib/store';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured, authRedirectUrl } from '@/lib/supabase/config';

export default function Register() {
  const router = useRouter();
  const { setUser } = useStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetExam, setTargetExam] = useState('ett-punjab');
  const state = 'punjab';
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const configured = isSupabaseConfigured();
  const [emailSent, setEmailSent] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (configured) {
      // Real Supabase sign-up
      setLoading(true);
      try {
        const supabase = createClient();
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: authRedirectUrl('/auth/callback'),
            data: { full_name: name, target_exam: targetExam, state },
          },
        });
        if (signUpError) {
          setError(signUpError.message);
          setLoading(false);
          return;
        }
        if (data.session) { router.push('/dashboard'); } else { setEmailSent(true); }
        setLoading(false);
      } catch {
        setError('An unexpected error occurred. Please try again.');
        setLoading(false);
      }
    } else {
      // Guest local profile fallback
      const newUser = registerUser({ name, email: email || '', targetExam, state });
      setUser({ name: newUser.name, streak: newUser.streak, xp: newUser.xp });
      setToastMsg(`Local profile created for ${newUser.name}! 🎓`);
      setTimeout(() => {
        router.push('/dashboard');
      }, 600);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col p-6 justify-center max-w-lg mx-auto w-full text-slate-100">
        <div className="bg-slate-900/90 backdrop-blur-xl p-7 rounded-3xl border border-teal-500/60 shadow-2xl text-center">
          <div className="w-14 h-14 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-teal-400" />
          </div>
          <h2 className="text-xl font-black text-white mb-2">Check your email!</h2>
          <p className="text-sm text-slate-300 mb-1">
            We&apos;ve sent a confirmation link to:
          </p>
          <p className="text-teal-300 font-bold text-sm mb-4">{email}</p>
          <p className="text-xs text-slate-400 mb-6">
            Click the link in the email to confirm your account and start preparing.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-2.5 px-5 rounded-xl text-sm transition"
          >
            Go to Login <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col p-6 py-10 justify-center max-w-lg mx-auto w-full text-slate-100">

      {toastMsg && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-teal-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <Check size={16} />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="bg-slate-900/90 backdrop-blur-xl p-7 rounded-3xl border border-slate-700/80 shadow-2xl">

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-tr from-teal-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-2 shadow-lg">
            🎓
          </div>
          <h2 className="text-2xl font-black text-white">
            {configured ? 'Create Account' : 'Create Local Study Profile'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {configured
              ? 'Sync your progress across devices'
              : 'Personalized 60-Day Study Roadmap & 50 Qs CBT Mock Engine'}
          </p>
        </div>

        {/* Backend not configured notice */}
        {!configured && (
          <p className="text-sm text-amber-200 mb-4">
            ⚠️ Backend not configured — running in guest/demo mode only. Profile stored in this browser only, not synced across devices.
          </p>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-950/60 border border-red-500/40 rounded-xl p-3 mb-4 text-xs text-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-3.5">
          <div className="relative">
            <User className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Full Name (आपका पूरा नाम)"
              required
              className="form-input"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input
              type="email"
              aria-label="Email address"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              required={configured}
              className="form-input"
            />
          </div>

          {configured && (
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
              <input
                type="password"
                aria-label="Password"
                autoComplete="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password (min 8 characters)"
                required
                minLength={8}
                className="form-input"
              />
            </div>
          )}

          {/* Target Exam Selection */}
          <div className="relative">
            <Target className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <select
              value={targetExam}
              onChange={e => setTargetExam(e.target.value)}
              required
              className="form-input appearance-none cursor-pointer"
            >
              <option value="ett-punjab">👶 Punjab ETT Cadre (6635 / 5994 Posts) &amp; PSTET</option>
              <option value="clerk-psssb">💼 PSSSB Clerk &amp; Raavi Typing Examination</option>
              <option value="punjab-master-cadre-sst">🌾 Punjab Master Cadre Social Studies (SST)</option>
              <option value="punjab-master-cadre-science">🔬 Punjab Master Cadre Science</option>
              <option value="punjab-master-cadre-math">📐 Punjab Master Cadre Mathematics</option>
              <option value="punjab-master-cadre-punjabi">📖 Punjab Master Cadre Punjabi</option>
              <option value="punjab-master-cadre-hindi">📚 Punjab Master Cadre Hindi</option>
              <option value="punjab-master-cadre-english">🔤 Punjab Master Cadre English</option>
              <option value="reet-level1">🏜️ Rajasthan REET Level 1 (Classes 1-5)</option>
              <option value="reet-level2-sst">🏜️ Rajasthan REET Level 2 (Social Studies)</option>
              <option value="reet-level2-science-math">📐 Rajasthan REET Level 2 (Science &amp; Math)</option>
              <option value="police-punjab">👮 Punjab Police Constable &amp; Sub-Inspector</option>
              <option value="patwari-punjab">🗺️ Punjab Revenue Patwari &amp; Accounts</option>
              <option value="ctet-p2">🏛️ Central CTET Paper 2 (CBSE)</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
            <input type="checkbox" required defaultChecked className="rounded border-slate-700 bg-slate-800 text-teal-500" />
            <span>I agree to free open study terms and community guidelines</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-white font-black py-3.5 rounded-xl shadow-lg mt-2 text-xs flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{configured ? 'Create Account' : 'Save Local Profile & Start Preparing'}</span>
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </form>

        <p className="text-center mt-6 text-xs text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="text-teal-400 font-bold hover:underline">
            Sign In here
          </Link>
        </p>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          background-color: rgba(30, 41, 59, 0.7);
          border: 1px solid rgba(51, 65, 85, 0.9);
          color: white;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem 0.75rem 2.6rem;
          outline: none;
          font-size: 0.82rem;
          transition: all 0.2s;
        }
        .form-input:focus {
          border-color: #14b8a6;
          box-shadow: 0 0 0 1px #14b8a6;
        }
      `}</style>
    </div>
  );
}
