'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [state, setState] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 flex flex-col p-6 py-12 justify-center">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-slate-300 mb-6">Start your journey to success</p>

        <form onSubmit={(e) => { e.preventDefault(); router.push('/dashboard'); }} className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" required className="form-input" />
          <input type="email" placeholder="Email Address" required className="form-input" />
          <input type="tel" placeholder="Phone Number" required className="form-input" />
          <input type="password" placeholder="Password" required className="form-input" />
          
          <select value={state} onChange={e => setState(e.target.value)} required className="form-input appearance-none">
            <option value="" disabled>Select State</option>
            <option value="punjab">Punjab</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="central">Central Govt</option>
          </select>

          <select required className="form-input appearance-none">
            <option value="" disabled>Language Preference</option>
            <option value="hi">हिंदी (Hindi)</option>
            <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
            <option value="en">English</option>
          </select>

          <label className="flex items-start gap-2 text-sm text-slate-300 mt-2">
            <input type="checkbox" required className="mt-1" />
            <span>I accept the Terms and Conditions & Privacy Policy</span>
          </label>

          <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg mt-2">
            Register Account
          </button>
        </form>

        <p className="text-center mt-6 text-slate-300">
          Already have an account? <Link href="/login" className="text-teal-400 font-bold hover:underline">Login</Link>
        </p>
      </div>
      <style jsx>{`
        .form-input {
          width: 100%;
          background-color: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(51, 65, 85, 1);
          color: white;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          outline: none;
          transition: all 0.2s;
        }
        .form-input:focus {
          border-color: #14b8a6;
        }
      `}</style>
    </div>
  );
}
