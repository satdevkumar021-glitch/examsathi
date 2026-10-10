import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Login',
  description: 'Log in to ExamSathi to access your personalized syllabus progress, live CBT mock tests, and flashcards.',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
