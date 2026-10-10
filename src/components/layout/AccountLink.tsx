'use client';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';

export default function AccountLink() {
  const { user, loading } = useAuth();
  if (loading) return <span role="status" className="text-xs text-slate-400">Account…</span>;
  return <Link href={user ? '/profile' : '/login'}
    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 hover:text-white border border-indigo-500/40 text-xs font-bold transition shadow-sm"
    title={user ? 'Your student profile' : 'Student Login / Sign Up'}>
    <span aria-hidden="true">{user ? '👤' : '🔐'}</span>
    <span className="text-[11px]">{user ? 'Profile' : 'Login'}</span>
  </Link>;
}
