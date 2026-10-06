import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Student Registration | ExamSathi',
  description: 'Create a free student account on ExamSathi to prepare for Punjab Master Cadre, ETT, PSSSB Clerk, REET, and CTET.',
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
