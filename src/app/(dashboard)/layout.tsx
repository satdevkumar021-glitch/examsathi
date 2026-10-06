import type { Metadata } from 'next';
import Link from 'next/link';
import BottomNav from '@/components/layout/BottomNav';
import LanguageToggle from '@/components/layout/LanguageToggle';
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
    <div className="flex flex-col min-h-screen bg-slate-900 pb-20">
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex justify-between items-center">
        <Link href="/dashboard" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-md shadow-indigo-950 group-hover:scale-105 transition-transform">
            🎓
          </div>
          <div className="flex flex-col">
            <span className="text-white text-base font-extrabold leading-tight tracking-tight">
              ExamSathi
            </span>
            <span className="text-teal-400 text-[11px] font-semibold leading-tight">
              परीक्षा साथी • ਪ੍ਰੀਖਿਆ ਸਾਥੀ
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Link
            href="/login"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 hover:text-white border border-indigo-500/40 text-xs font-bold transition shadow-sm"
            title="Student Login / Sign Up"
          >
            <span>🔐</span>
            <span className="text-[11px]">Login</span>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      <OnboardingGuideModal />
      <BottomNav />
    </div>
  );
}
