import type { Metadata } from 'next';
import Link from 'next/link';
import BottomNav from '@/components/layout/BottomNav';
import SideNav from '@/components/layout/SideNav';
import ThemeToggle from '@/components/layout/ThemeToggle';
import LanguageToggle from '@/components/layout/LanguageToggle';
import AccountBoundary from '@/components/layout/AccountBoundary';
import AccountLink from '@/components/layout/AccountLink';
import OnboardingGuideModal from '@/components/ui/OnboardingGuideModal';

export const metadata: Metadata = {
  title: 'Dashboard | ExamSathi',
  description: 'Your personal exam preparation dashboard. Track progress, start mock tests, and study topic-wise for Punjab, Rajasthan and Central government exams.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-slate-900">
      <SideNav />
      <div className="flex min-w-0 flex-1 flex-col pb-20 lg:pb-0">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/90 px-3 py-2.5 backdrop-blur-md sm:px-4 sm:py-3">
          {/* Brand: shown on phones only; the sidebar carries it on desktop. */}
          <Link href="/dashboard" className="group flex min-w-0 items-center gap-1.5 lg:hidden">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-600 to-indigo-600 text-base font-bold text-white shadow-md transition-transform group-hover:scale-105">
              🎓
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-extrabold leading-tight tracking-tight text-white">ExamSathi</span>
              <span className="hidden truncate text-xs font-semibold leading-tight text-teal-400 min-[420px]:block">परीक्षा साथी</span>
            </div>
          </Link>
          <div className="hidden lg:block" />
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Link href="/syllabus" className="hidden text-xs text-teal-300 underline sm:inline lg:hidden">Syllabus</Link>
            <div className="lg:hidden"><ThemeToggle cycle /></div>
            <LanguageToggle />
            <AccountLink />
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <AccountBoundary>{children}</AccountBoundary>
          </div>
        </main>
      </div>

      <OnboardingGuideModal />
      <BottomNav />
    </div>
  );
}
