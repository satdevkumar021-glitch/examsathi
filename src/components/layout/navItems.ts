import { Home, BookOpen, Layers, CheckCircle, User } from 'lucide-react';

export interface NavItem { name: string; path: string; icon: typeof Home }

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/dashboard', icon: Home },
  { name: 'Study', path: '/exams', icon: BookOpen },
  { name: 'Cards', path: '/mock-test?mode=flip', icon: Layers },
  { name: 'Test', path: '/mock-test', icon: CheckCircle },
  { name: 'Profile', path: '/profile', icon: User },
];

export function isActive(pathname: string, item: NavItem): boolean {
  const path = item.path.split('?')[0];
  if (item.name === 'Cards') return false; // shares /mock-test with Test; never highlighted at the same time
  if (item.path === '/exams') return pathname === '/exams' || pathname.startsWith('/exams/') || pathname.startsWith('/study/');
  return pathname.startsWith(path);
}
