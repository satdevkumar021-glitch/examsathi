'use client';
import { useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { applyTheme, readThemeChoice, saveThemeChoice, type ThemeChoice } from '@/lib/theme';

const OPTIONS: Array<{ value: ThemeChoice; label: string; icon: typeof Sun }> = [
  { value: 'light', label: 'Light theme', icon: Sun },
  { value: 'system', label: 'Match device theme', icon: Monitor },
  { value: 'dark', label: 'Dark theme', icon: Moon },
];

/** `cycle` renders one button that steps light -> system -> dark, for tight headers. */
export default function ThemeToggle({ compact = false, cycle = false }: { compact?: boolean; cycle?: boolean }) {
  const [choice, setChoice] = useState<ThemeChoice>('system');
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Read the stored preference after mount (SSR has none).
    setChoice(readThemeChoice());
    // While on "system", follow live OS changes (e.g. sunset auto dark mode).
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const follow = () => { if (readThemeChoice() === 'system') applyTheme('system'); };
    media.addEventListener('change', follow);
    return () => media.removeEventListener('change', follow);
  }, []);
  const pick = (value: ThemeChoice) => { setChoice(value); saveThemeChoice(value); };
  if (cycle) {
    const index = OPTIONS.findIndex(o => o.value === choice);
    const next = OPTIONS[(index + 1) % OPTIONS.length];
    const Current = OPTIONS[index].icon;
    return (
      <button type="button" onClick={() => pick(next.value)} aria-label={`${OPTIONS[index].label}. Switch to: ${next.label}`} title={OPTIONS[index].label}
        className="rounded-lg border border-slate-700 bg-slate-800 p-2 text-slate-300 transition-colors hover:text-white">
        <Current size={16} aria-hidden="true" />
      </button>
    );
  }
  return (
    <div role="group" aria-label="Theme" className="inline-flex rounded-lg border border-slate-700 bg-slate-800 p-0.5">
      {OPTIONS.map(({ value, label, icon: Icon }) => (
        <button key={value} type="button" aria-label={label} aria-pressed={choice === value} title={label} onClick={() => pick(value)}
          className={`rounded-md ${compact ? 'p-1.5' : 'p-2'} transition-colors ${choice === value ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}>
          <Icon size={compact ? 14 : 16} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
