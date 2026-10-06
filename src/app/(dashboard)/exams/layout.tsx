import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'State & Central Exam Directory',
  description: 'Explore verified official syllabus trees, patterns, and past papers across Punjab, Rajasthan, Haryana, Delhi, and Central recruitments.',
};

export default function ExamsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
