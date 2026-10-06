import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Dashboard & Today’s Plan | ExamSathi',
  description: 'Track your daily study streak, syllabus readiness, and personalized practice tasks on ExamSathi.',
};

export default function DashboardSubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
