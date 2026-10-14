import { ALL_EXAMS } from '@/lib/data/exams';
import LandingPage from './LandingClient';

export default function Page() {
  // Count here so the 190 KB exam catalogue stays out of the landing-page bundle.
  const recruitmentCount = Object.values(ALL_EXAMS).reduce((acc, list) => acc + list.length, 0);
  return <LandingPage recruitmentCount={recruitmentCount} />;
}
