import Link from 'next/link';
import { TOPIC_DOCUMENTS } from '@/lib/data/topic-resources';
import { ALL_EXAMS } from '@/lib/data/exams';
import { getLessonByTopicId } from '@/lib/data/lessons';
import { getTestQuestions } from '@/lib/data/question_bank_engine';
export default function SyllabusPage() {
  return <div className="max-w-4xl mx-auto p-5 space-y-5 text-slate-200">
    <h1 className="text-2xl font-bold text-white">Exam syllabus & coverage</h1>
    <Link href="/coverage" className="block underline text-teal-300">Exam-by-exam question, lesson, PDF and video counts</Link>
    <p className="text-sm text-slate-400">Explore each supported exam by subject, chapter and subtopic. This is a preparation map; check the latest official notification for your paper, year and post. Available material is shown separately from topics still being prepared.</p>
    {Object.values(ALL_EXAMS).flat().map(exam => <details key={exam.id} className="bg-slate-800 rounded-xl p-4">
      <summary className="cursor-pointer font-bold text-teal-300">{exam.emoji} {exam.name}</summary>
      <a className="block underline text-sm my-3" href={exam.officialWebsite} target="_blank" rel="noopener noreferrer">Latest official syllabus & notification ↗</a>
      {exam.subjects.map(subject => <section key={subject.id} className="my-4 space-y-3">
        <h2 className="font-bold text-white">{subject.name}</h2>
        {subject.chapters.map(chapter => <div key={chapter.id}><h3 className="text-indigo-200">{chapter.name}</h3>
          {chapter.topics.map(topic => {
            const lesson = getLessonByTopicId(topic.id);
            const available = getTestQuestions({ topicId: topic.id, examId: exam.id, count: 150 }).length;
            return <article key={topic.id} className="my-3 border border-slate-700 rounded-lg p-3">
              <h4 className="font-semibold">{topic.name}</h4>
              <ul className="list-disc pl-5 my-2 text-sm text-slate-300">{topic.subtopics.flatMap(s => s.split(/,\s*/)).map((subtopic, i) => <li key={i}>{subtopic}</li>)}</ul>
              {(TOPIC_DOCUMENTS[topic.id] || []).map(resource => <a key={resource.url} className="block text-sm underline text-teal-300" href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title} ↗</a>)}
              <p className="text-xs text-slate-400">{lesson ? 'Study lesson available' : 'Lesson pending'} · {available} practice questions available</p>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-teal-300">
                <Link href={`/lesson/${topic.id}/`}>{lesson ? 'Read lesson' : 'View coverage status'}</Link>
                {available > 0 ? Array.from(new Set([10, 20, 50].map(count => Math.min(count, available)))).map(count => <Link key={count} href={`/mock-test/topic-${topic.id}/?exam=${exam.id}&count=${count}`}>{count}-question practice</Link>) : <span className="text-slate-400">Question set pending</span>}
              </div>
            </article>;
          })}
        </div>)}
      </section>)}
    </details>)}
    <section className="bg-slate-800 p-4 rounded-xl space-y-2">
      <h2 className="font-bold">Official learning resources</h2>
      <p className="text-sm">These public resources are linked at their publishers. Availability and reuse licences vary; ExamSathi does not rehost them.</p>
      <a className="block underline" target="_blank" rel="noopener noreferrer" href="https://ncert.nic.in/textbook.php">NCERT textbook PDFs by class, subject and chapter ↗</a>
      <a className="block underline" target="_blank" rel="noopener noreferrer" href="https://epathshala.nic.in/">ePathshala multilingual textbooks ↗</a>
      <a className="block underline" target="_blank" rel="noopener noreferrer" href="https://diksha.gov.in/">DIKSHA learning resources ↗</a>
      <a className="block underline" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/ncertofficial">NCERT official video channel ↗</a>
    </section>
  </div>;
}
