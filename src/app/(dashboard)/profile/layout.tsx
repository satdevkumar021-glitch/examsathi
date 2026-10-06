import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Profile & Performance Analytics | ExamSathi',
  description: 'Manage target exam preferences, study languages, performance history, and account settings on ExamSathi.',
};

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
