'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, isActive } from './navItems';

/** Phone navigation. Hidden from the lg breakpoint, where the sidebar takes over. */
export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Bottom Navigation" className="fixed bottom-0 inset-x-0 z-40 border-t border-slate-800 bg-slate-900/95 backdrop-blur pb-safe lg:hidden">
      <div className="mx-auto flex h-16 max-w-2xl items-center justify-around">
        {NAV_ITEMS.map(item => {
          const Icon = item.icon;
          const active = isActive(pathname, item);
          return (
            <Link key={item.name} href={item.path} aria-current={active ? 'page' : undefined}
              className={`flex h-full w-full flex-col items-center justify-center gap-1 ${active ? 'text-teal-400' : 'text-slate-400 hover:text-slate-300'}`}>
              <Icon size={20} className={active ? 'fill-teal-400/20' : ''} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
