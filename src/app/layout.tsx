import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | ExamSathi (परीक्षा साथी)',
    default: 'ExamSathi - परीक्षा साथी • ਮੁਫ਼ਤ ਪ੍ਰੀਖਿਆ ਤਿਆਰੀ ਮੰਚ',
  },
  description: '100% Free, High-Fidelity Exam Preparation Platform for Punjab (Master Cadre, ETT, Clerk, Police, Patwari), Rajasthan (REET, Patwar), and Central Exams (CTET, SSC). Real CBT drills, 20-Year PYQ archives, and Raavi typing benchmark.',
  keywords: ['Punjab Master Cadre', 'PSTET', 'ETT Punjab', 'PSSSB Clerk', 'Raavi Typing', 'REET', 'CTET', 'Free Mock Test', 'ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ'],
  manifest: '/manifest.json'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased bg-slate-900 text-slate-100">
        <main className="max-w-[480px] mx-auto min-h-screen bg-slate-900 relative shadow-2xl overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
