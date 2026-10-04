'use client';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';

export default function ExamsHome() {
  const states = [
    { id: 'punjab', name: 'Punjab', icon: '🌾', count: 7, color: 'from-amber-600 to-orange-700' },
    { id: 'rajasthan', name: 'Rajasthan', icon: '🏜️', count: 8, color: 'from-rose-600 to-pink-700' },
    { id: 'central', name: 'Central Govt', icon: '🏛️', count: 5, color: 'from-blue-600 to-indigo-700' },
  ];

  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Select Goal</h1>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search exams (e.g. Master Cadre)" 
          className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="flex flex-col gap-4">
        {states.map(state => (
          <Link key={state.id} href={`/exams/${state.id}`} className="group relative overflow-hidden bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-500 transition-colors flex items-center justify-between">
            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${state.color}`}></div>
            <div className="flex items-center gap-4 ml-2">
              <div className="text-4xl">{state.icon}</div>
              <div>
                <h3 className="text-white font-bold text-lg">{state.name}</h3>
                <p className="text-slate-400 text-sm">{state.count} Exams available</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-slate-600 transition-colors">
              <ChevronRight size={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
