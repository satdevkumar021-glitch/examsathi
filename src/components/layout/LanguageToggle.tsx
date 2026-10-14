'use client';
import { useEffect } from 'react';
import { useStore } from '@/lib/store';

export default function LanguageToggle() {
  const { language, setLanguage } = useStore();
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  
  return (
    <div className="flex rounded-lg border border-slate-700 bg-slate-800 p-0.5 sm:p-1">
      <button 
        aria-pressed={language === 'hi'} onClick={() => setLanguage('hi')}
        className={`px-2 py-1 text-xs sm:px-3 rounded-md font-medium transition-colors ${language === 'hi' ? 'bg-indigo-500 text-white shadow' : 'text-slate-400'}`}
      >
        हिंदी
      </button>
      <button 
        aria-pressed={language === 'pa'} onClick={() => setLanguage('pa')}
        className={`px-2 py-1 text-xs sm:px-3 rounded-md font-medium transition-colors ${language === 'pa' ? 'bg-indigo-500 text-white shadow' : 'text-slate-400'}`}
      >
        ਪੰਜਾਬੀ
      </button>
      <button 
        aria-pressed={language === 'en'} onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-xs sm:px-3 rounded-md font-medium transition-colors ${language === 'en' ? 'bg-indigo-500 text-white shadow' : 'text-slate-400'}`}
      >
        EN
      </button>
    </div>
  );
}
