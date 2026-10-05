import type { Metadata, Viewport } from 'next';
import './globals.css';

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
      <body className="min-h-screen antialiased bg-slate-900 text-slate-100">
        <main className="max-w-[480px] mx-auto min-h-screen bg-slate-900 relative shadow-2xl overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
