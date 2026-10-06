import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CBT Mock Tests & Spaced Repetition Practice | ExamSathi',
  description: 'Simulate official computer-based tests (CBT) with exact exam timings, -0.25 negative marking, and 3D flashcards powered by FSRS.',
};

export default function MockTestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
