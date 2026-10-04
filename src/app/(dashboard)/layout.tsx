import BottomNav from '@/components/layout/BottomNav';
import LanguageToggle from '@/components/layout/LanguageToggle';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 pb-20">
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">R</div>
          <div className="flex flex-col">
            <span className="text-white text-sm font-semibold leading-tight">Hi, Rahul</span>
            <span className="text-teal-400 text-xs leading-tight">ExamSathi Pro</span>
          </div>
        </div>
        <LanguageToggle />
      </header>
      
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
