'use client';
import { Settings, LogOut, Award, Flame, User as UserIcon } from 'lucide-react';
import Link from 'next/link';

export default function Profile() {
  return (
    <div className="p-4 flex flex-col gap-6">
      
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
        <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 border border-slate-700">
          <Settings size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-3 mt-2">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-teal-500 p-1">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-4 border-slate-900">
            <span className="text-3xl font-bold text-white">R</span>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">Rahul Sharma</h2>
          <p className="text-slate-400 text-sm">rahul.sharma@example.com</p>
        </div>
        <div className="bg-slate-800 text-teal-400 px-3 py-1 rounded-full text-xs font-medium border border-slate-700">
          Target: Punjab Master Cadre
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex flex-col gap-1">
          <Flame size={24} className="text-amber-500 mb-1" />
          <span className="text-2xl font-bold text-white">12 Days</span>
          <span className="text-slate-400 text-xs">Current Streak</span>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex flex-col gap-1">
          <Award size={24} className="text-indigo-400 mb-1" />
          <span className="text-2xl font-bold text-white">450 XP</span>
          <span className="text-slate-400 text-xs">Total Points</span>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl border border-slate-700 mt-2 overflow-hidden">
        <Link href="/profile/edit" className="flex items-center gap-3 p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <UserIcon size={20} className="text-slate-400" />
          <span className="text-slate-200 font-medium">Edit Profile</span>
        </Link>
        <div className="flex items-center gap-3 p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <Award size={20} className="text-slate-400" />
          <span className="text-slate-200 font-medium">My Badges</span>
        </div>
        <Link href="/login" className="flex items-center gap-3 p-4 hover:bg-slate-750 transition-colors text-rose-400">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </Link>
      </div>

    </div>
  );
}
