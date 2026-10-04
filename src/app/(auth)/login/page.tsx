'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 flex flex-col p-6 justify-center">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-slate-300 mb-8">Sign in to continue your preparation</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Email or Phone Number" 
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
              required 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type={showPwd ? "text" : "password"} 
              placeholder="Password" 
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
              required 
            />
            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-4 top-3.5 text-slate-400">
              {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-700 bg-slate-800 text-teal-500 focus:ring-teal-500" />
              Remember me
            </label>
            <Link href="#" className="text-teal-400 hover:text-teal-300">Forgot Password?</Link>
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg mt-4">
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-px bg-slate-700 flex-1"></div>
          <span className="text-slate-400 text-sm">OR</span>
          <div className="h-px bg-slate-700 flex-1"></div>
        </div>

        <button className="w-full bg-slate-800 border border-slate-700 text-white font-medium py-3 rounded-xl mt-6 hover:bg-slate-700 transition-colors">
          Login with OTP
        </button>

        <p className="text-center mt-8 text-slate-300">
          New User? <Link href="/register" className="text-amber-400 font-bold hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}
