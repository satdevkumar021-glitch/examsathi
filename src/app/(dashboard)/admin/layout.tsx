import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Publisher Portal',
  description: 'Restricted administrative and publishing portal for verified ExamSathi educators.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
