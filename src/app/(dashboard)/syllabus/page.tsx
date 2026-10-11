import { CLERK_SYLLABUS_EVIDENCE } from '@/lib/data/clerk-shared-outline';
import Link from 'next/link';
import { TOPIC_DOCUMENTS } from '@/lib/data/topic-resources';
import { ALL_EXAMS } from '@/lib/data/exams';
import { getLessonByTopicId } from '@/lib/data/lessons';
import { getTestQuestions } from '@/lib/data/question_bank_engine';
export default function SyllabusPage() {
  return <div className="max-w-4xl mx-auto p-5 space-y-5 text-slate-200">
    <h1 className="text-2xl font-bold text-white">Exam syllabus & coverage</h1>
    <Link href="/coverage" className="block underline text-teal-300">Exam-by-exam question, lesson, PDF and video counts</Link>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <Link href="/syllabus/punjab-master-cadre-sst/" className="block rounded-xl border border-indigo-600 bg-indigo-950/30 p-4 text-indigo-200 hover:bg-indigo-950/50 transition">
        🌍 <strong>Punjab Master Cadre SST Blueprint:</strong> Trust levels, per-year exam pattern &amp; complete B→I→A topic tree →
      </Link>
      <Link href="/syllabus/punjab-master-cadre-science/" className="block rounded-xl border border-emerald-600 bg-emerald-950/30 p-4 text-emerald-200 hover:bg-emerald-950/50 transition">
        🔬 <strong>Punjab Master Cadre Science Blueprint:</strong> 64-heading audit, M.Sc. red flags &amp; B→I→H→G(/P) curriculum →
      </Link>
      <Link href="/syllabus/punjab-ett/" className="block rounded-xl border border-teal-600 bg-teal-950/30 p-4 text-teal-200 hover:bg-teal-950/50 transition">
        📘 <strong>Punjab ETT Recruitment Blueprint:</strong> Paper A+B audit, 28 SST headings, corrupted-text decoder &amp; 14 B→I→A modules →
      </Link>
    </div>
    <p className="text-sm text-slate-400">Explore each supported exam by subject, chapter and subtopic. This is a preparation map; check the latest official notification for your paper, year and post. Available material is shown separately from topics still being prepared.</p>
    {Object.values(ALL_EXAMS).flat().map(exam => <details key={exam.id} className="bg-slate-800 rounded-xl p-4">
      <summary className="cursor-pointer font-bold text-teal-300">{exam.emoji} {exam.name}</summary>
      {exam.id === 'punjab-master-cadre-sst' && <p className="my-3 rounded-lg border border-indigo-600/60 bg-indigo-950/40 p-3 text-sm text-indigo-200">Complete ERB Punjab Social Science (SST) blueprint with <strong>Level B (Class 6–8) → Level I (Class 9–10) → Level A (Class 11–12 / Graduation)</strong> trilingual lessons and Topic Mini Mocks across Polity (15 headings), Economics (16 headings), History, and Geography. <Link className="underline font-semibold text-teal-300" href="/syllabus/punjab-master-cadre-sst/">Open full Master Cadre SST Syllabus Blueprint &amp; Per-Year Pattern →</Link></p>}
      {exam.id === 'punjab-master-cadre-science' && <p className="my-3 rounded-lg border border-emerald-600/60 bg-emerald-950/40 p-3 text-sm text-emerald-200">Complete ERB Punjab Science (64 official headings across Physics, Physical/Inorganic/Organic Chemistry, Botany, Zoology &amp; Lab Foundation) in <strong>Level B/I (Class 6–10) → Level H (Class 11–12) → Level G (B.Sc. Graduation) → Level P (Flagged Postgraduate)</strong> progression with code-verified numerical Topic Mini Mocks. <Link className="underline font-semibold text-teal-300" href="/syllabus/punjab-master-cadre-science/">Open full Master Cadre Science Blueprint, Red-Flag Audit &amp; SI Constants Sheet →</Link></p>}
      {exam.id === 'punjab-ett' && <p className="my-3 rounded-lg border border-amber-700 bg-amber-950/30 p-3 text-sm text-amber-200">Complete <strong>Punjab ETT Teacher Recruitment Blueprint</strong> resolving 4 coaching-source problems (100 vs 200 marks Paper B discrepancy, 28 missing Social Studies official headings, machine-translation corruption decoder for <em>&ldquo;Uptasha&rdquo; / &ldquo;Metter&rdquo; / &ldquo;Two Exponential Equations&rdquo; / &ldquo;Directional Numerals&rdquo;</em>) with <strong>14 B→I→A trilingual modules &amp; 150 ETT MCQs</strong> across Paper A Qualifying Punjabi and Paper B Merit. <Link className="underline font-semibold text-teal-300" href="/syllabus/punjab-ett/">Open full Punjab ETT Recruitment Blueprint &amp; 96-Heading Archival Map →</Link></p>}
      {exam.id === 'punjab-clerk' && <p className="my-3 rounded-lg border border-amber-700 bg-amber-950/30 p-3 text-sm text-amber-200">
        Regular Clerk · {CLERK_SYLLABUS_EVIDENCE.notification}. {CLERK_SYLLABUS_EVIDENCE.warning} Hindi/Punjabi topic titles are available; subtopic translations and lesson depth still require review. Part A and Part B follow different scoring rules; the generic practice timer is not a certified full-paper simulation. <a href={CLERK_SYLLABUS_EVIDENCE.mirrorUrl} className="underline" target="_blank" rel="noopener noreferrer">Inspect archival syllabus mirror ↗</a>
      </p>}
      <a className="block underline text-sm my-3" href={exam.officialWebsite} target="_blank" rel="noopener noreferrer">Latest official syllabus & notification ↗</a>
      {exam.subjects.map(subject => <section key={subject.id} className="my-4 space-y-3">
        <h2 className="font-bold text-white">{subject.name}</h2>
        {subject.chapters.map(chapter => <div key={chapter.id}><h3 className="text-indigo-200">{chapter.name}</h3>
          {chapter.topics.map(topic => {
            const lesson = getLessonByTopicId(topic.id);
            const available = getTestQuestions({ topicId: topic.id, examId: exam.id, count: 150 }).length;
            return <article key={topic.id} className="my-3 border border-slate-700 rounded-lg p-3">
              <h4 className="font-semibold">{topic.name}</h4>
              {exam.id === 'punjab-ett' && topic.sourcePages?.map(page => <a key={page} className="text-xs underline text-teal-300" href={`https://entri.app/blog/wp-content/uploads/2022/12/SyllabusPaperB01_12_2022.pdf#page=${page}`} target="_blank" rel="noopener noreferrer">Archival mirror · page {page} ↗ </a>)}
              <ul className="list-disc pl-5 my-2 text-sm text-slate-300">{topic.subtopics.flatMap(s => s.split(/,\s*/)).map((subtopic, i) => <li key={i}>{subtopic}</li>)}</ul>
              {(TOPIC_DOCUMENTS[topic.id] || []).map(resource => <a key={resource.url} className="block text-sm underline text-teal-300" href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title} ↗</a>)}
              <p className="text-xs text-slate-400">{lesson ? lesson.coverageStatus === 'foundation' ? 'Foundation module; full alignment pending' : 'Study lesson available; depth unverified' : 'Lesson pending'} · {available} practice questions available</p>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-teal-300">
                <Link href={`/lesson/${topic.id}/?exam=${exam.id}`}>{lesson ? 'Read lesson' : 'View coverage status'}</Link>
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
