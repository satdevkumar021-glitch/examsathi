import Link from 'next/link';
import audit from '@/lib/data/coverage-audit.json';
export default function CoveragePage() {
  return <div className="p-5 max-w-5xl mx-auto space-y-5 text-slate-200">
    <h1 className="text-2xl font-bold">Exam & topic coverage</h1>
    <p>Audited {audit.auditedOn}. Every track below is incomplete. Counts show availability, not certification that lessons cover every official subtopic. Computed variants are not authored questions or verified past papers.</p>
    <p>CTET Paper 1’s five subject areas were corrected using the <a className="underline" href="https://ctet.nic.in/document/ctet-sept-2026-information-bulletin/" target="_blank" rel="noopener noreferrer">official September 2026 bulletin</a>. Several lessons and teaching-method questions still need writing.</p>
    <p className="text-amber-200">Fresh sets never refill from unrelated exams or repeat completed questions silently. Shared syllabus topics can reuse a question from another exam; its original source label stays visible. Counts are before your completed-question exclusions.</p>
    <p className="rounded-lg bg-slate-800 p-3">{audit.summary.emptyExamPools} empty exam pools · {audit.summary.missingLessons} missing lesson slots · {audit.summary.under50Topics} topic entries below 50 · {audit.summary.examsMeetingReviewedTarget} exams meet 1,000 reviewed questions.</p>
    <Link className="underline text-teal-300" href="/syllabus">Open syllabus outline</Link>
    {audit.exams.map(exam => <details key={exam.id} className="p-4 rounded-xl bg-slate-800">
      <summary className="cursor-pointer font-bold">{exam.name} — {exam.uniqueQuestions} distinct practice questions</summary>
      <p className="text-sm mt-3">{exam.authoredQuestions} authored · {exam.reviewedQuestions} with recorded editorial review · {exam.generatedVariants} computed/lesson variants · {exam.fullSetsOf50} full sets of 50 · {exam.missingLessons} topics without lessons · {exam.under50Topics} topics below 50 questions</p>
      <p className="text-amber-200 text-xs my-2">{exam.status}</p>
      <a className="underline text-teal-300 text-sm" href={exam.officialWebsite} target="_blank" rel="noopener noreferrer">Official notification source ↗</a>
      <Link className="block underline text-teal-300 mt-2" href={`/mock-test?exam=${exam.id}`}>Practice this exam</Link>
      {exam.topics.map((topic, i) => <article key={`${topic.id}-${i}`} className="border-t border-slate-700 mt-3 pt-3">
        <h2 className="font-bold">{topic.name}</h2>
        <p className="text-xs text-slate-400">{topic.subject} / {topic.chapter} · {topic.id}</p>
        <p className="text-sm">{topic.authoredQuestions} authored + {topic.generatedVariants} variants · {topic.flashcards} flashcards · {topic.documents.length} PDF/resource links · {topic.videos.filter(v => v.url && !v.isSearch).length} direct video links · {topic.videos.filter(v => v.isSearch).length} publisher searches</p>
        <p className="text-xs text-amber-200">{topic.lesson ? `Lesson present (${topic.lessonStatus}; ${topic.englishWords} English words); depth needs review.` : 'Lesson pending.'} {topic.distinctQuestions < 50 ? 'Fewer than 50 distinct questions.' : ''}</p>
        {topic.distinctQuestions > 0 && <Link className="block underline text-teal-300 text-sm" href={`/mock-test/topic-${topic.id}?exam=${exam.id}&count=${Math.min(50,topic.distinctQuestions)}`}>Start topic practice</Link>}
        <details className="text-sm mt-2"><summary>Subtopics & resources</summary>
          <ul className="list-disc pl-5">{topic.subtopics.map((subtopic,j) => <li key={j}>{subtopic}</li>)}</ul>
          {topic.documents.map(url => <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="block underline">Publisher document ↗</a>)}
          {topic.videos.filter(v => v.url).map((video,j) => <a key={j} href={video.url!} target="_blank" rel="noopener noreferrer" className="block underline">{video.title} ↗</a>)}
        </details>
      </article>)}
    </details>)}
  </div>;
}
