'use client';
import { useState, useEffect } from 'react';
import { getQuestionPool } from '@/lib/data/question_bank_engine';
import { useStore } from '@/lib/store';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Target, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getExamById, Exam, Subject, Chapter, Topic } from '@/lib/data/exams';

export default function SubjectView({ exam: examId, subject: subjectId }: { exam: string; subject: string }) {
  const exam = getExamById(examId);
  if (!exam || (exam.subjects.length > 0 && !exam.subjects.some(subject => subject.id === subjectId))) return <div className="p-6 text-slate-200"><h1 className="text-xl font-bold">Exam or subject not found</h1><Link href="/syllabus/" className="underline text-teal-300">Choose a supported exam and subject</Link></div>;
  return <SubjectContent key={`${examId}/${subjectId}`} exam={exam} subjectId={subjectId} />;
}
function SubjectContent({ exam, subjectId }: { exam: Exam; subjectId: string }) {
  const examId = exam.id;
  const router = useRouter();
  const { language } = useStore();
  const localName = (item: { name: string; nameHindi?: string; namePunjabi?: string }) => language === 'pa' ? item.namePunjabi || item.nameHindi || item.name : language === 'hi' ? item.nameHindi || item.name : item.name;
  useEffect(() => { const selected = getExamById(examId); if (selected) useStore.getState().setSelectedExam(selected.state, selected.id); }, [examId]);

  // Available subjects for this exam
  const availableSubjects: Subject[] = exam.subjects && exam.subjects.length > 0 ? exam.subjects : [
    {
      id: 'general',
      name: 'General Studies',
      nameHindi: 'सामान्य अध्ययन',
      emoji: '📚',
      chapters: [],
    },
  ];

  // Current active subject
  const initialSubject = availableSubjects.find(s => s.id === subjectId) || availableSubjects[0];
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(initialSubject.id);

  const currentSubject = availableSubjects.find(s => s.id === selectedSubjectId) || availableSubjects[0];
  const chapters: Chapter[] = currentSubject.chapters || [];

  // Active chapter tab
  const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0]?.id || '');
  const currentChapter = chapters.find(c => c.id === activeChapterId) || chapters[0];
  const topics: Topic[] = currentChapter?.topics || [];

  return (
    <div className="p-4 flex flex-col gap-5 min-h-screen bg-slate-900 pb-24 text-slate-100 max-w-xl mx-auto w-full">

      {/* Top Header with Back button */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={() => router.back()}
          className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 border border-slate-700 hover:bg-slate-700 transition shrink-0"
          aria-label="Back"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-base">{exam.emoji || '🎯'}</span>
            <h1 className="text-lg font-bold text-white truncate">{localName(exam)}</h1>
          </div>
          <p className="text-xs text-slate-400 truncate">
            {exam.body} • {exam.totalMarks} Marks • {exam.duration}
          </p>
          {exam.officialWebsite && (
            <a
              href={exam.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-teal-400 hover:text-teal-300 transition truncate"
              onClick={e => e.stopPropagation()}
            >
              📋 Official Source ↗
            </a>
          )}
        </div>
      </div>

      {exam.syllabusStatus === 'provisional-archive' && <Link href="/syllabus/punjab-ett/" className="rounded-lg border border-amber-700 p-3 text-sm text-amber-200">5994 Paper B archival reference. Upcoming notification and publisher verification pending. Qualifying Paper A is separate. Open source pages and coverage status →</Link>}

      {/* Subject Selector Tabs (if multiple subjects exist) */}
      {availableSubjects.length > 1 && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {availableSubjects.map(sub => {
            const isSelected = sub.id === selectedSubjectId;
            return (
              <button
                key={sub.id}
                onClick={() => {
                  setSelectedSubjectId(sub.id);
                  if (sub.chapters.length > 0) {
                    setActiveChapterId(sub.chapters[0].id);
                  }
                }}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-750'}`}
              >
                <span>{sub.emoji}</span>
                <span>{localName(sub)}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Chapter Tabs for Current Subject */}
      {chapters.length > 1 && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {chapters.map(ch => {
            const isActive = ch.id === (activeChapterId || chapters[0]?.id);
            return (
              <button
                key={ch.id}
                onClick={() => setActiveChapterId(ch.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition border ${isActive ? 'bg-teal-600/30 border-teal-500 text-teal-300' : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white'}`}
              >
                {localName(ch)}
              </button>
            );
          })}
        </div>
      )}

      {/* Topic List with Subtopics */}
      <div className="flex flex-col gap-3">
        {topics.length === 0 ? (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center text-slate-400 text-xs">
            No topics listed under this chapter yet.
          </div>
        ) : (
          topics.map(topic => (
            <Link
              key={topic.id}
              href={`/lesson/${topic.id}/?exam=${examId}`}
              className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/60 rounded-2xl p-4 flex flex-col gap-2.5 transition shadow group"
            >
              {/* Topic Header */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0">
                    <BookOpen size={16} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-sm truncate group-hover:text-indigo-300 transition">
                      {localName(topic)}
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {topic.nameHindi}
                      {topic.namePunjabi && ` • ${topic.namePunjabi}`}
                    </p>
                  </div>
                </div>

                <span className="bg-slate-700/80 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                  {getQuestionPool({examId, topicId: topic.id}).length} practice Qs
                </span>
              </div>

              {/* Detailed Subtopics Pill Grid */}
              {topic.materialStatus === 'pending' && <p className="text-xs text-amber-200">Detailed lesson and dedicated question bank pending · विस्तृत पाठ बाकी · ਵਿਸਥਾਰ ਵਾਲਾ ਪਾਠ ਬਾਕੀ</p>}
              {topic.subtopics && topic.subtopics.length > 0 && (
                <div className="bg-slate-900/60 rounded-xl p-2.5 border border-slate-700/50">
                  <span className="text-[10px] text-slate-400 font-semibold block mb-1.5 uppercase tracking-wider">
                    Syllabus Subtopics ({topic.subtopics.length}):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {topic.subtopics.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-slate-800 border border-slate-700/80 text-slate-300 text-[10px] px-2 py-0.5 rounded-md leading-tight"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Prompt */}
              <div className="flex justify-between items-center text-[11px] text-teal-400 pt-1 border-t border-slate-700/40">
                <span>{topic.materialStatus === 'pending' ? 'Material pending · सामग्री बाकी · ਸਮੱਗਰੀ ਬਾਕੀ' : 'Notes • Flashcards • Resources • Practice'}</span>
                <span className="flex items-center gap-0.5 font-bold group-hover:translate-x-1 transition-transform">
                  {topic.materialStatus === 'pending' ? 'View coverage status' : 'Open Study Room'} <ChevronRight size={14} />
                </span>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* CBT Mock Test CTA */}
      <Link
        href={`/mock-test?exam=${examId}`}
        className="mt-2 w-full bg-gradient-to-r from-teal-600 to-indigo-600 hover:opacity-95 text-white font-bold py-3.5 rounded-2xl shadow-lg text-center text-xs flex items-center justify-center gap-2"
      >
        <Target size={16} /> Browse available topic practice ({localName(exam)})
      </Link>

    </div>
  );
}
