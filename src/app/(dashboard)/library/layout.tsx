import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24/7 Virtual Focus Study Room & Pomodoro',
  description: 'Boost exam focus with Pomodoro timers, 20-20-20 screen rest notifications, ambient soundscapes, and personal study logging.',
};

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
