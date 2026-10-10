import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://chatgpt.com/g/g-p-6842f08a2bb08191817df29b44ec3b46-exam-saathi';

export const metadata: Metadata = {
  title: 'Exam Saathi · पढ़ें, समझें, अभ्यास करें',
  description:
    'Hindi, Punjabi and English exam preparation for Punjab Master Cadre, ETT, PSTET, PSSSB, REET, CTET and SSC — source-linked lessons, practice questions, flashcards, typing practice and personal notes.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Exam Saathi · पढ़ें, समझें, अभ्यास करें',
    description:
      'Free exam preparation for Punjab, Rajasthan and Central government exams. Lessons in Hindi, Punjabi and English with practice questions, flashcards and personal notes.',
    url: BASE_URL,
    siteName: 'Exam Saathi',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Exam Saathi logo',
      },
    ],
    locale: 'hi_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Exam Saathi · पढ़ें, समझें, अभ्यास करें',
    description:
      'Free Hindi/Punjabi/English exam prep for Punjab, Rajasthan and Central government exams.',
    images: ['/icon-512.png'],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/icon-192.png',
  },
  manifest: '/manifest.webmanifest',
  keywords: [
    'Punjab Master Cadre', 'ETT', 'PSTET', 'PSSSB Clerk', 'REET', 'CTET', 'SSC CGL',
    'exam preparation', 'Hindi medium', 'Punjabi medium', 'सरकारी नौकरी', 'ਸਰਕਾਰੀ ਨੌਕਰੀ',
    'government exam', 'practice questions', 'MCQ', 'flashcards',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
