import { ALL_EXAMS } from '@/lib/data/exams';
import SubjectViewClient from './SubjectViewClient';

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
  return paramsList;
}

export default async function StudySubjectPage({ params }: { params: Promise<{ exam: string; subject: string }> }) {
  const resolved = await params;
  return <SubjectViewClient exam={resolved.exam} subject={resolved.subject} />;
}
