import { ALL_EXAMS } from '@/lib/data/exams';
import SubjectViewClient from './SubjectViewClient';
import Link from 'next/link';

export function generateStaticParams() {
  const paramsList: Array<{ exam: string; subject: string }> = [];
  Object.values(ALL_EXAMS).flat().forEach(exam => {
    if (exam.subjects && exam.subjects.length > 0) {
      exam.subjects.forEach(subject => {
        paramsList.push({ exam: exam.id, subject: subject.id });
      });
    } else {
      paramsList.push({ exam: exam.id, subject: 'general' });
    }
  });
  return [...paramsList, { exam: 'punjab-ett', subject: 'ett-core' }];
}

export default async function StudySubjectPage({ params }: { params: Promise<{ exam: string; subject: string }> }) {
  const resolved = await params;
  if (resolved.exam === 'punjab-ett' && resolved.subject === 'ett-core') return <div className="p-6 text-slate-200"><h1 className="text-xl font-bold">ETT subjects have been reorganised</h1><p>The old mixed preparation map has been replaced by a versioned Paper B reference.</p><Link className="underline text-teal-300" href="/syllabus/punjab-ett/">Open the ETT syllabus map</Link></div>;
  return <SubjectViewClient exam={resolved.exam} subject={resolved.subject} />;
}
