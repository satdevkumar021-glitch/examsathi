'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Layers, CheckCircle, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();
  
  const navs = [
    { name: 'Home', path: '/dashboard', icon: Home },
    { name: 'Study', path: '/exams', icon: BookOpen },
    { name: 'Cards', path: '/lesson/modern-india', icon: Layers },
    { name: 'Test', path: '/mock-test', icon: CheckCircle },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-[480px] bg-slate-900 border-t border-slate-800 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navs.map((nav) => {
          const Icon = nav.icon;
          const isActive = pathname.startsWith(nav.path) && (nav.path !== '/exams' || pathname === '/exams' || pathname.startsWith('/exams/') || pathname.startsWith('/study/'));
          // basic active matching
          return (
            <Link key={nav.name} href={nav.path} className={`flex flex-col items-center justify-center w-full h-full gap-1 ${isActive ? 'text-teal-400' : 'text-slate-400 hover:text-slate-300'}`}>
              <Icon size={20} className={isActive ? 'fill-teal-400/20' : ''} />
              <span className="text-[10px] font-medium">{nav.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
