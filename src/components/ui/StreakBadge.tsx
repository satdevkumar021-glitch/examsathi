'use client';

import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import { studyStorage } from '@/lib/storage';
import { activityStreak } from '@/lib/study-progress';

export default function StreakBadge({ streak = 0 }: { streak?: number }) {
  const [currentStreak, setCurrentStreak] = useState(streak);

  useEffect(() => {
    setCurrentStreak(streak);
    const sync = () => {
      try {
        const days = JSON.parse(studyStorage.getItem('examsathi_activity_days') || '[]') as string[];
        setCurrentStreak(activityStreak(days));
      } catch {
        // Fallback
      }
    };
    sync();
    window.addEventListener('examsathi_streak_updated', sync);
    window.addEventListener('storage', sync);
    window.addEventListener('visibilitychange', sync);
    window.addEventListener('focus', sync);

    const interval = setInterval(sync, 30000);

    return () => {
      window.removeEventListener('examsathi_streak_updated', sync);
      window.removeEventListener('storage', sync);
      window.removeEventListener('visibilitychange', sync);
      window.removeEventListener('focus', sync);
      clearInterval(interval);
    };
  }, [streak]);

  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full shadow-inner transition-all ${
        currentStreak > 0
          ? 'bg-amber-950/40 border border-amber-500/40'
          : 'bg-slate-800 border border-slate-700'
      }`}
      title={`${currentStreak} day study streak`}
    >
      {currentStreak > 0 ? (
        <Flame size={16} className="text-amber-500 fill-amber-500 animate-pulse" />
      ) : (
        <Flame size={16} className="text-slate-400" />
      )}
      <span className={currentStreak > 0 ? "text-amber-400 font-bold text-sm" : "text-slate-400 font-bold text-sm"}>
        {currentStreak}
      </span>
    </div>
  );
}
