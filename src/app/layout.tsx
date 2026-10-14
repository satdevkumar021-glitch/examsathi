import type { Metadata, Viewport } from 'next';
import './globals.css';
import { publicPath } from '@/lib/paths';
import { THEME_BOOT_SCRIPT } from '@/lib/theme';

export const metadata: Metadata = {
  title: {
    template: '%s | ExamSathi (परीक्षा साथी)',
    default: 'ExamSathi - परीक्षा साथी • ਮੁਫ਼ਤ ਪ੍ਰੀਖਿਆ ਤਿਆਰੀ ਮੰਚ',
  },
  description: '100% Free, High-Fidelity Exam Preparation Platform for Punjab (Master Cadre, ETT, Clerk, Police, Patwari), Rajasthan (REET, Patwar), and Central Exams (CTET, SSC). Topic practice, source-labelled historical questions, and typing practice.',
  keywords: ['Punjab Master Cadre', 'PSTET', 'ETT Punjab', 'PSSSB Clerk', 'Raavi Typing', 'REET', 'CTET', 'Free Mock Test', 'ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ'],
  manifest: publicPath('/manifest.json'),
  openGraph: {
    title: 'ExamSathi — Free Exam Preparation Platform',
    description: 'Free study material, MCQs, mock tests and flip cards for Punjab, Rajasthan and Central exams.',
    type: 'website',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ExamSathi',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1f5f9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans+Gurmukhi:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased bg-slate-900 text-slate-100">
        <div className="relative min-h-screen overflow-x-hidden bg-slate-900">
          {children}
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('${publicPath('/sw.js')}').catch(function() {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
