'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, CheckCircle2, Circle, Clock, BookOpen, Layers, 
  Target, ChevronRight, Sparkles, Award 
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getExamById, ALL_EXAMS, Exam, Subject, Chapter, Topic } from '@/lib/data/exams';

export default function SubjectView({ params }: { params: Promise<{ exam: string, subject: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();

  // Find exam
  const exam: Exam = getExamById(resolvedParams.exam) || ALL_EXAMS.punjab[0];
  
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
  const initialSubject = availableSubjects.find(s => s.id === resolvedParams.subject) || availableSubjects[0];
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
            <h1 className="text-lg font-bold text-white truncate">{exam.name}</h1>
          </div>
          <p className="text-xs text-slate-400 truncate">
            {exam.body} • {exam.totalMarks} Marks • {exam.duration}
          </p>
        </div>
      </div>

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
                <span>{sub.name}</span>
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
                {ch.nameHindi ? `${ch.name} (${ch.nameHindi})` : ch.name}
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
              href={`/lesson/${topic.id}`}
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
                      {topic.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {topic.nameHindi}
                      {topic.namePunjabi && ` • ${topic.namePunjabi}`}
                    </p>
                  </div>
                </div>

                <span className="bg-slate-700/80 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                  {topic.examQuestions} Qs
                </span>
              </div>

              {/* Detailed Subtopics Pill Grid */}
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
                <span>Notes • 3D Flipcards • Videos • Test</span>
                <span className="flex items-center gap-0.5 font-bold group-hover:translate-x-1 transition-transform">
                  Open Study Room <ChevronRight size={14} />
                </span>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* CBT Mock Test CTA */}
      <Link 
        href="/mock-test/1" 
        className="mt-2 w-full bg-gradient-to-r from-teal-600 to-indigo-600 hover:opacity-95 text-white font-bold py-3.5 rounded-2xl shadow-lg text-center text-xs flex items-center justify-center gap-2"
      >
        <Target size={16} /> Take Sectional Mock Test ({exam.name})
      </Link>

    </div>
  );
}
