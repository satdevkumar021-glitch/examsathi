'use client';
import { useState } from 'react';
import { ALL_EXAMS } from '@/lib/data/exams';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';

export default function ExamsHome() {
  const [search, setSearch] = useState('');
  const matches = Object.values(ALL_EXAMS).flat().filter(e => `${e.name} ${e.nameHindi} ${e.namePunjabi || ''} ${e.body}`.toLowerCase().includes(search.trim().toLowerCase()));
  const states = [
    { id: 'punjab', name: 'Punjab', icon: '🌾', count: 7, color: 'from-amber-600 to-orange-700' },
    { id: 'rajasthan', name: 'Rajasthan', icon: '🏜️', count: 8, color: 'from-rose-600 to-pink-700' },
    { id: 'central', name: 'Central Govt', icon: '🏛️', count: 5, color: 'from-blue-600 to-indigo-700' },
    { id: 'haryana', name: 'Haryana', icon: '🏖️', count: 2, color: 'from-sky-600 to-cyan-700' },
  ];

  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Select Goal</h1>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 text-slate-400" size={20} />
        <input 
          type="search"
          aria-label="Search exams"
          value={search}
          onChange={e => setSearch(e.target.value)} 
          placeholder="Search exams (e.g. Master Cadre)" 
          className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="flex flex-col gap-4">
        {search.trim() ? matches.length ? matches.map(exam => <Link key={exam.id} className="rounded-xl bg-slate-800 p-4 text-white" href={`/study/${exam.id}/${exam.subjects[0]?.id}`}>{exam.emoji} {exam.name}<span className="block text-sm text-slate-400">{exam.nameHindi}</span></Link>) : <p role="status" className="text-slate-300">No exams match your search.</p> : states.map(state => (
          <Link key={state.id} href={`/exams/${state.id}`} className="group relative overflow-hidden bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-slate-500 transition-colors flex items-center justify-between">
            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${state.color}`}></div>
            <div className="flex items-center gap-4 ml-2">
              <div className="text-4xl">{state.icon}</div>
              <div>
                <h3 className="text-white font-bold text-lg">{state.name}</h3>
                <p className="text-slate-400 text-sm">{ALL_EXAMS[state.id as keyof typeof ALL_EXAMS].length} Exams available</p>
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
