'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, KeyRound, Lock, ArrowRight, CheckCircle2, ChevronLeft } from 'lucide-react';
import { requestPasswordReset, verifyAndResetPassword } from '@/lib/auth';

export default function ForgotPassword() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const res = requestPasswordReset(identifier);
    setGeneratedOtp(res.otp);
    setStep(2);
    setErrorMsg(null);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = verifyAndResetPassword(otp, newPassword);
    if (ok) {
      setSuccessMsg('Password reset successfully! Redirecting to login...');
      setTimeout(() => {
        router.push('/login');
      }, 1500);
    } else {
      setErrorMsg('Invalid OTP. Please enter the simulated OTP shown above or 123456.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col p-6 justify-center max-w-lg mx-auto w-full text-slate-100">
      
      <div className="bg-slate-900/90 backdrop-blur-xl p-7 rounded-3xl border border-slate-700/80 shadow-2xl">
        
        <Link href="/login" className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white mb-4">
          <ChevronLeft size={16} />
          <span>Back to Login</span>
        </Link>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-tr from-amber-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-2 shadow-lg">
            🔑
          </div>
          <h2 className="text-2xl font-black text-white">Reset Account Password</h2>
          <p className="text-xs text-slate-400 mt-1">
            {step === 1 ? 'Enter your registered email or phone to receive a reset code' : 'Enter the verification code and your new password'}
          </p>
        </div>

        {errorMsg && (
          <div className="bg-rose-950/60 border border-rose-500/50 p-2.5 rounded-xl text-rose-300 text-xs mb-4 text-center">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="bg-emerald-950/60 border border-emerald-500/50 p-3 rounded-xl text-emerald-300 text-xs mb-4 text-center flex items-center justify-center gap-1.5 font-bold">
            <CheckCircle2 size={16} />
            <span>{successMsg}</span>
          </div>
        )}

        {step === 1 ? (
          <form onSubmit={handleRequestOtp} className="flex flex-col gap-3.5">
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
              <input 
                type="text" 
                value={identifier}
                onChange={e => setIdentifier(e.target.value)}
                placeholder="Email address or phone number" 
                required 
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 placeholder-slate-500"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 font-black py-3.5 rounded-xl shadow-lg mt-2 text-xs flex items-center justify-center gap-2 transition"
            >
              <span>Send Verification Code</span>
              <ArrowRight size={15} />
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-3.5">
            {/* Simulation Notification */}
            <div className="bg-teal-950/50 border border-teal-500/40 p-2.5 rounded-xl text-center text-xs text-teal-300">
              <span>Demo Security Code: <strong>{generatedOtp || '123456'}</strong></span>
            </div>

            <div className="relative">
              <KeyRound className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
              <input 
                type="text" 
                value={otp}
                onChange={e => setOtp(e.target.value)}
                placeholder="6-digit verification code" 
                required 
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 placeholder-slate-500 font-mono tracking-widest text-center"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
              <input 
                type="password" 
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="Set New Password" 
                required 
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-11 pr-4 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 placeholder-slate-500"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:opacity-95 text-slate-950 font-black py-3.5 rounded-xl shadow-lg mt-2 text-xs flex items-center justify-center gap-2 transition"
            >
              <span>Update Password & Login</span>
              <CheckCircle2 size={15} />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
