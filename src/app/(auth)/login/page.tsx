'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock, Sparkles, Check, ArrowRight, ShieldCheck, GraduationCap } from 'lucide-react';
import { loginUser, instantDemoLogin } from '@/lib/auth';
import { useStore } from '@/lib/store';

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const router = useRouter();
  const { setUser } = useStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    let cloudUser: any = null;
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: identifier, password }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user) {
          cloudUser = data.user;
        }
      }
    } catch {
      // Running in static export or offline mode
    }

    const user = loginUser(identifier, password);
    const resolvedName = cloudUser?.name || user.name;
    setUser({ name: resolvedName, streak: user.streak, xp: user.xp });
    setToastMsg(`Welcome back, ${resolvedName}! 🚀`);
    setIsLoading(false);
    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  const handleDemoLogin = (role: 'ett' | 'clerk' | 'master-cadre') => {
    const user = instantDemoLogin(role);
    setUser({ name: user.name, streak: user.streak, xp: user.xp });
    setToastMsg(`Logged in as ${user.name}! 🎓`);
    setTimeout(() => {
      router.push('/dashboard');
    }, 500);
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
          <h2 className="text-2xl font-black text-white">Student Login</h2>
          <p className="text-xs text-slate-400 mt-1">
            Access your 50 Qs CBT Mock Tests, Saved Notes & Library Vault
          </p>
        </div>

        {/* 1-Click Instant Demo Login Selector */}
        <div className="bg-slate-800/80 p-3 rounded-2xl border border-indigo-500/30 mb-6">
          <div className="flex items-center gap-1.5 text-xs font-bold text-teal-300 mb-2">
            <Sparkles size={14} className="text-amber-400" />
            <span>1-Click Instant Demo Access (No Typing):</span>
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
        </div>

        {/* Traditional Credentials Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-3.5">
          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input 
              type="text" 
              value={identifier}
              onChange={e => setIdentifier(e.target.value)}
              placeholder="Email address or mobile number" 
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-slate-500"
              required 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input 
              type={showPwd ? "text" : "password"} 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password" 
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-11 pr-11 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-slate-500"
              required 
            />
            <button 
              type="button" 
              onClick={() => setShowPwd(!showPwd)} 
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white"
            >
              {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-1.5 text-slate-400 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-slate-700 bg-slate-800 text-teal-500" />
              <span>Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-teal-400 hover:text-teal-300 font-semibold">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 font-black py-3.5 rounded-xl shadow-lg mt-2 text-xs flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            <span>{isLoading ? 'Authenticating...' : 'Login to ExamSathi'}</span>
            <ArrowRight size={15} />
          </button>
        </form>

        <p className="text-center mt-6 text-xs text-slate-400">
          New aspirant? <Link href="/register" className="text-amber-400 font-bold hover:underline">Register Free Account</Link>
        </p>

        <div className="mt-4 text-center">
          <Link href="/dashboard" className="text-[11px] text-slate-500 hover:text-slate-400">
            Continue as Guest (No Login Required) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
