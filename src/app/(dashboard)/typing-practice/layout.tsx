import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PSSSB Raavi Punjabi Typing Practice Benchmark (10 Min)',
  description: 'Practice official PSSSB Raavi Inscript Unicode typing with 10-minute speed benchmark, WPM calculation, accuracy percentage, and key cheat sheets.',
};

export default function TypingPracticeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
