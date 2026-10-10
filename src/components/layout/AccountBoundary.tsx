'use client';
import { useEffect } from 'react';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/hooks/useAuth';

export default function AccountBoundary({ children }: { children: React.ReactNode }) {
  const { loading, user, error } = useAuth();
  useEffect(() => { if (!loading) { void useStore.persist.rehydrate(); } }, [loading, user?.id]);
  if (loading) return <p role="status" className="p-6 text-slate-300">Loading your study space…</p>;
  return <div key={user?.id || 'guest'}>
    {error && <p role="alert" className="p-3 text-amber-200">{error}</p>}
    {children}
  </div>;
}
