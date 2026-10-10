'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';
import { STATES_CATALOG, ALL_EXAMS } from '@/lib/data/exams';
import { useStore } from '@/lib/store';

export default function ExamsHome() {
  const [query, setQuery] = useState('');
  const { language } = useStore();

  const filteredStates = STATES_CATALOG.filter(state => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    const matchName = state.name.toLowerCase().includes(q);
    const matchHi = state.nameHindi.toLowerCase().includes(q);
    const matchPa = state.namePunjabi.toLowerCase().includes(q);
    const matchTagline = state.tagline.toLowerCase().includes(q);
    const examsInState = ALL_EXAMS[state.id] || [];
    const matchExam = examsInState.some(e => 
      e.name.toLowerCase().includes(q) || 
      e.nameHindi.toLowerCase().includes(q) ||
      (e.namePunjabi && e.namePunjabi.toLowerCase().includes(q))
    );
    return matchName || matchHi || matchPa || matchTagline || matchExam;
  });

  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            {language === 'pa' ? 'ਟੀਚਾ ਚੁਣੋ' : language === 'hi' ? 'लक्ष्य चयन करें' : 'Select Goal'}
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            {language === 'pa' 
              ? 'ਪੰਜਾਬ, ਰਾਜਸਥਾਨ, ਹਰਿਆਣਾ, ਦਿੱਲੀ ਤੇ ਕੇਂਦਰੀ ਪ੍ਰੀਖਿਆਵਾਂ' 
              : language === 'hi' 
              ? 'पंजाब, राजस्थान, हरियाणा, दिल्ली व केंद्रीय भर्ती परीक्षाएं' 
              : 'Choose your state recruitment or central examination track'}
          </p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 text-slate-400" size={20} />
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={language === 'pa' ? 'ਪ੍ਰੀਖਿਆ ਖੋਜੋ (ਜਿਵੇਂ ਮਾਸਟਰ ਕੈਡਰ, ਕਲਰਕ, HTET)' : language === 'hi' ? 'परीक्षा खोजें (जैसे मास्टर कैडर, क्लर्क, HTET)' : 'Search exams (e.g. Master Cadre, HTET, Clerk)'}
          className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="flex flex-col gap-4">
        {filteredStates.map(state => {
          const count = ALL_EXAMS[state.id]?.length || 0;
          return (
            <Link 
              key={state.id} 
              href={`/exams/${state.id}`} 
              data-testid="state-card"
              className="group relative overflow-hidden bg-slate-800/95 border border-slate-700 hover:border-slate-500 rounded-2xl p-4 transition-colors flex items-center justify-between shadow-md"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${state.color}`}></div>
              <div className="flex items-center gap-3.5 ml-2">
                <div className="text-3xl shrink-0">{state.icon}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold text-base leading-snug">{state.name}</h3>
                    <span className="text-[11px] text-teal-400 font-medium">
                      {language === 'pa' ? state.namePunjabi : state.nameHindi}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">{state.tagline}</p>
                  <p className="text-indigo-400 text-[11px] font-semibold mt-1">
                    {count} {language === 'pa' ? 'ਸਰਕਾਰੀ ਪ੍ਰੀਖਿਆਵਾਂ' : language === 'hi' ? 'भर्ती परीक्षाएं उपलब्ध' : 'Recruitments active'}
                  </p>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-700/80 flex items-center justify-center text-slate-300 group-hover:bg-slate-600 transition-colors shrink-0">
                <ChevronRight size={18} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
