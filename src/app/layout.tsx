import type { Metadata, Viewport } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({ 
  subsets: ['latin', 'devanagari'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'ExamSathi - परीक्षा साथी',
  description: 'Your ultimate exam preparation companion. भारत का सर्वश्रेष्ठ परीक्षा तैयारी मंच।',
  manifest: '/manifest.json'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${notoSans.className} min-h-screen antialiased`}>
        <main className="max-w-[480px] mx-auto min-h-screen bg-slate-900 relative shadow-2xl overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
