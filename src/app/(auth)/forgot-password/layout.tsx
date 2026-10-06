import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password | ExamSathi',
  description: 'Reset your ExamSathi account password via secure OTP verification.',
};

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
