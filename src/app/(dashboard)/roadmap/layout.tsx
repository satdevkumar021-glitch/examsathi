import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '60-Day Structured Syllabus Roadmap | ExamSathi',
  description: 'Follow day-by-day study milestones and revision schedules for Master Cadre SST, ETT 5994, and PSSSB Clerk recruitment.',
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
