'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, isActive } from './navItems';
import ThemeToggle from './ThemeToggle';

/** Desktop navigation, shown from the lg breakpoint. */
export default function SideNav() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-slate-800 bg-slate-900 lg:flex">
      <Link href="/dashboard" className="flex items-center gap-3 px-5 py-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-600 to-indigo-600 text-xl">🎓</span>
        <span className="flex flex-col leading-tight">
          <span className="text-base font-extrabold text-white">ExamSathi</span>
          <span className="text-[11px] font-semibold text-teal-400">परीक्षा साथी</span>
        </span>
      </Link>
      <nav aria-label="Main navigation" className="flex flex-1 flex-col gap-1 px-3">
        {NAV_ITEMS.map(item => {
          const Icon = item.icon;
          const active = isActive(pathname, item);
          return (
            <Link key={item.name} href={item.path} aria-current={active ? 'page' : undefined}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${active ? 'bg-teal-500/15 text-teal-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
              <Icon size={18} aria-hidden="true" />
              {item.name}
            </Link>
          );
        })}
        <Link href="/syllabus" className="mt-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">Syllabus</Link>
      </nav>
      <div className="flex items-center justify-between border-t border-slate-800 px-4 py-4">
        <span className="text-xs text-slate-400">Theme</span>
        <ThemeToggle compact />
      </div>
    </aside>
  );
}
