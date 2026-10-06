'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Phone, Lock, Target, ArrowRight, Check } from 'lucide-react';
import { registerUser } from '@/lib/auth';
import { useStore } from '@/lib/store';

export default function Register() {
  const router = useRouter();
  const { setUser } = useStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [targetExam, setTargetExam] = useState('ett-punjab');
  const [state, setState] = useState('punjab');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = registerUser({
      name,
      email,
      phone,
      password,
      targetExam,
      state,
    });
    setUser({ name: newUser.name, streak: newUser.streak, xp: newUser.xp });
    setToastMsg(`Account created for ${newUser.name}! 🎓`);
    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

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
          <h2 className="text-2xl font-black text-white">Create Aspirant Account</h2>
          <p className="text-xs text-slate-400 mt-1">
            Personalized 60-Day Study Roadmap & 50 Qs CBT Mock Engine
          </p>
        </div>

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
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="Email Address (ਈਮੇਲ)" 
              required 
              className="form-input" 
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input 
              type="tel" 
              value={phone} 
              onChange={e => setPhone(e.target.value)} 
              placeholder="Mobile Number (Optional)" 
              className="form-input" 
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Set Password" 
              required 
              className="form-input" 
            />
          </div>

          {/* Target Exam Selection */}
          <div className="relative">
            <Target className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <select 
              value={targetExam} 
              onChange={e => setTargetExam(e.target.value)} 
              required 
              className="form-input appearance-none cursor-pointer"
            >
              <option value="ett-punjab">👶 Punjab ETT Cadre (6635 / 5994 Posts) & PSTET</option>
              <option value="clerk-psssb">💼 PSSSB Clerk & Raavi Typing Examination</option>
              <option value="master-cadre-sst">🌾 Punjab Master Cadre Social Studies (SST)</option>
              <option value="police-punjab">👮 Punjab Police Constable & Sub-Inspector</option>
              <option value="patwari-punjab">🗺️ Punjab Revenue Patwari & Accounts</option>
              <option value="reet-l2">🏜️ REET Level 2 & Rajasthan Teacher</option>
              <option value="ctet-p2">🏛️ Central CTET Paper 2 (CBSE)</option>
            </select>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
            <input type="checkbox" required defaultChecked className="rounded border-slate-700 bg-slate-800 text-teal-500" />
            <span>I agree to free open study terms and community guidelines</span>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 font-black py-3.5 rounded-xl shadow-lg mt-2 text-xs flex items-center justify-center gap-2 transition"
          >
            <span>Create Account & Start Preparing</span>
            <ArrowRight size={15} />
          </button>
        </form>

        <p className="text-center mt-6 text-xs text-slate-400">
          Already have an account? <Link href="/login" className="text-teal-400 font-bold hover:underline">Sign In here</Link>
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
