'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Flame, CheckCircle, Clock, ArrowRight, Trophy } from 'lucide-react';
import { useStore } from '@/lib/store';
import { studyStorage } from '@/lib/storage';
import {
  activityStreak,
  studyDay,
  isStudiedToday,
  getWeeklyStreakStatus,
  getStreakMilestone,
} from '@/lib/study-progress';

export default function StreakCard() {
  const { language } = useStore();
  const lang = (language === 'pa' ? 'pa' : language === 'en' ? 'en' : 'hi') as 'hi' | 'pa' | 'en';

  const [days, setDays] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);

  const syncStreak = () => {
    try {
      const recorded = JSON.parse(studyStorage.getItem('examsathi_activity_days') || '[]') as string[];
      setDays(recorded);
      setStreak(activityStreak(recorded));
    } catch {
      // Fallback
    }
  };

  useEffect(() => {
    syncStreak();
    const handleUpdate = () => syncStreak();
    window.addEventListener('examsathi_streak_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('examsathi_streak_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const studiedToday = isStudiedToday(days);
  const weeklyStatus = getWeeklyStreakStatus(days);
  const milestone = getStreakMilestone(streak);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-amber-950/30 border border-slate-700/80 hover:border-amber-500/40 rounded-2xl p-4 shadow-lg transition-all">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform ${
            streak > 0
              ? 'bg-gradient-to-tr from-amber-600 to-orange-500 text-white shadow-md shadow-orange-500/20 animate-pulse'
              : 'bg-slate-800 text-slate-500'
          }`}>
            <Flame size={22} className={streak > 0 ? 'fill-white' : ''} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-black text-base tracking-tight">
                {streak} {lang === 'pa' ? 'ਦਿਨਾਂ ਦੀ ਸਟ੍ਰੀਕ' : lang === 'hi' ? 'दिनों की लकीर' : 'Day Streak'}
              </h3>
              {studiedToday ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <CheckCircle size={10} />
                  {lang === 'pa' ? 'ਅੱਜ ਪੂਰਾ' : lang === 'hi' ? 'आज पूरा' : 'Active Today'}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                  <Clock size={10} />
                  {lang === 'pa' ? 'ਅੱਜ ਬਾਕੀ' : lang === 'hi' ? 'आज शेष' : 'Study Today'}
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {milestone.message[lang]}
            </p>
          </div>
        </div>

        <Link
          href="/mock-test"
          className="shrink-0 hidden sm:flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
        >
          {lang === 'pa' ? 'ਅਭਿਆਸ ਕਰੋ' : lang === 'hi' ? 'अभ्यास करें' : 'Practice'}
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* 7-Day Visual Activity Dots */}
      <div className="grid grid-cols-7 gap-1.5 pt-2 border-t border-slate-800/80">
        {weeklyStatus.map((day) => (
          <div
            key={day.date}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-center transition-all ${
              day.isToday
                ? day.active
                  ? 'bg-amber-500/20 border border-amber-500/50 shadow-inner'
                  : 'bg-slate-800/80 border border-dashed border-amber-500/60'
                : day.active
                ? 'bg-slate-800/60 border border-slate-700/60'
                : 'bg-slate-900/40 border border-slate-800/50'
            }`}
          >
            <span className={`text-[10px] font-semibold mb-1 ${
              day.isToday ? 'text-amber-300 font-bold' : 'text-slate-400'
            }`}>
              {day.dayLabel[lang]}
            </span>

            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
              day.active
                ? 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-sm shadow-orange-500/30'
                : day.isToday
                ? 'bg-slate-800 text-amber-400 border border-amber-400/50'
                : 'bg-slate-800/80 text-slate-500'
            }`}>
              {day.active ? '✓' : day.dayNumber}
            </div>

            <span className="text-[9px] text-slate-400 mt-1 font-mono">
              {day.isToday ? (lang === 'pa' ? 'ਅੱਜ' : lang === 'hi' ? 'आज' : 'Today') : ''}
            </span>
          </div>
        ))}
      </div>

      {/* Target Milestone Pill */}
      {streak > 0 && (
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-800">
          <div className="flex items-center gap-1.5">
            <Trophy size={13} className="text-amber-400" />
            <span>
              {lang === 'pa'
                ? `ਅਗਲਾ ਟੀਚਾ: ${milestone.nextMilestone} ਦਿਨ`
                : lang === 'hi'
                ? `अगला पड़ाव: ${milestone.nextMilestone} दिन`
                : `Next Target: ${milestone.nextMilestone} Days`}
            </span>
          </div>
          <span className="text-amber-400 font-semibold text-[10px]">
            {Math.max(0, milestone.nextMilestone - streak)} {lang === 'pa' ? 'ਦਿਨ ਬਾਕੀ' : lang === 'hi' ? 'दिन शेष' : 'days left'}
          </span>
        </div>
      )}
    </div>
  );
}
