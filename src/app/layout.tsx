import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ExamSathi — परीक्षा साथी | Free Exam Preparation',
    template: '%s | ExamSathi'
  },
  description: 'Free exam preparation for Punjab, Rajasthan and Central government exams. Master Cadre, ETT, PSSSB Clerk, Police, REET, CTET and more. Study notes, MCQs, mock tests and flip cards.',
  keywords: ['Punjab Master Cadre', 'ETT Punjab', 'PSSSB Clerk', 'REET', 'CTET', 'mock test', 'exam preparation India'],
  manifest: '/manifest.json',
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
  themeColor: '#14b8a6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans+Gurmukhi:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased bg-slate-900 text-slate-100">
        <main className="max-w-[480px] mx-auto min-h-screen bg-slate-900 relative shadow-2xl overflow-x-hidden">
          {children}
        </main>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function() {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
