import { Flame } from 'lucide-react';

export default function StreakBadge({ streak = 0 }: { streak?: number }) {
  return (
    <div className="flex items-center gap-1.5 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full shadow-inner">
      {streak > 0 ? (
        <Flame size={16} className="text-amber-500 fill-amber-500" />
      ) : (
        <Flame size={16} className="text-slate-500" />
      )}
      <span className={streak > 0 ? "text-amber-400 font-bold text-sm" : "text-slate-400 font-bold text-sm"}>{streak}</span>
    </div>
  );
}
