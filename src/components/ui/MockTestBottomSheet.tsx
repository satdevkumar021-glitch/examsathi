'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  X, Target, Layers, Sparkles, Check, 
  HelpCircle, ShieldAlert, BookOpen, Clock
} from 'lucide-react';
import { AVAILABLE_EXAMS, ExamInfo } from '@/lib/data/question_bank_engine';

interface MockTestBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  defaultExamId?: string;
  defaultTopicId?: string;
}

export default function MockTestBottomSheet({
  isOpen,
  onClose,
  defaultExamId = 'master-cadre-sst',
  defaultTopicId = 'all',
}: MockTestBottomSheetProps) {
  const router = useRouter();

  const [selectedExam, setSelectedExam] = useState<string>(defaultExamId);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [is20YearPYQ, setIs20YearPYQ] = useState<boolean>(true);
  const [questionCount, setQuestionCount] = useState<number>(50);

  if (!isOpen) return null;

  const activeExam = AVAILABLE_EXAMS.find(e => e.id === selectedExam) || AVAILABLE_EXAMS[0];

  const handleStartTest = (mode: 'exam' | 'flip') => {
    const configPayload = {
      testId: `exam-${selectedExam}`,
      examId: selectedExam,
      topicId: defaultTopicId,
      title: `${activeExam.name} - ${questionCount} Qs ${is20YearPYQ ? '(20-Yr PYQs)' : 'Simulator'}`,
      titlePa: `${activeExam.namePa} - ${questionCount} ਸਵਾਲ`,
      count: questionCount,
      difficulty: selectedDifficulty,
      timeLimitMinutes: Math.round(questionCount * 0.9), // ~45 mins for 50 Qs
      negativeMarking: activeExam.negativeMarking,
      pyq20Years: is20YearPYQ,
      mode,
    };

    try {
      sessionStorage.setItem('examsathi_test_config', JSON.stringify(configPayload));
    } catch {}

    const queryParams = new URLSearchParams({
      exam: selectedExam,
      diff: selectedDifficulty,
      count: questionCount.toString(),
      pyq: is20YearPYQ ? '20y' : 'all',
      mode,
    });

    onClose();
    router.push(`/mock-test/topic-all?${queryParams.toString()}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg bg-slate-900 border-t border-slate-700/80 rounded-t-3xl p-5 max-h-[92vh] overflow-y-auto shadow-2xl text-slate-100 flex flex-col gap-4"
        onClick={e => e.stopPropagation()}
      >
        {/* Pull Handle */}
        <div className="w-12 h-1.5 bg-slate-650 rounded-full mx-auto" />

        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🎯</span>
              <h2 className="text-base font-black text-white">Configure CBT Mock Test</h2>
            </div>
            <p className="text-[11px] text-slate-400">
              Official Exam Pattern · 20-Year Archive (2004–2024) · 50 Qs Set
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-full bg-slate-800 border border-slate-700"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* 1. Target Examination Selector */}
        <div>
          <label className="text-xs font-bold text-slate-300 mb-2 block uppercase tracking-wider">
            1. Select Target Examination
          </label>
          <div className="grid grid-cols-2 gap-2">
            {AVAILABLE_EXAMS.map(exam => {
              const isSelected = selectedExam === exam.id;
              return (
                <button
                  key={exam.id}
                  onClick={() => setSelectedExam(exam.id)}
                  className={`p-2.5 rounded-xl border text-left transition flex flex-col gap-1 ${
                    isSelected 
                      ? 'bg-teal-500/15 border-teal-500 text-white shadow-md' 
                      : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-bold text-teal-400">{exam.badge}</span>
                    {isSelected && <Check size={14} className="text-teal-400" />}
                  </div>
                  <span className="text-xs font-bold line-clamp-1">{exam.name}</span>
                  <span className="text-[10px] text-slate-400">{exam.pyqSpan}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-2 p-2.5 bg-slate-800/60 rounded-xl border border-slate-700/60 text-[11px] text-slate-300">
            <span className="font-semibold text-teal-300">Syllabus Scope: </span>
            {activeExam.syllabusSummary}
          </div>
        </div>

        {/* 2. Difficulty Level Selector (Simple / Mid / Hard) */}
        <div>
          <label className="text-xs font-bold text-slate-300 mb-2 block uppercase tracking-wider">
            2. Difficulty Level
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { id: 'all', label: 'Balanced', desc: 'Standard Mix', color: 'border-slate-600 text-teal-300' },
              { id: 'easy', label: 'Simple', desc: 'Direct Facts', color: 'border-emerald-500/60 text-emerald-300' },
              { id: 'medium', label: 'Mid', desc: 'Competition', color: 'border-amber-500/60 text-amber-300' },
              { id: 'hard', label: 'Hard', desc: 'Merit Maker', color: 'border-rose-500/60 text-rose-300' },
            ].map(diff => {
              const isSelected = selectedDifficulty === diff.id;
              return (
                <button
                  key={diff.id}
                  onClick={() => setSelectedDifficulty(diff.id as 'all' | 'easy' | 'medium' | 'hard')}
                  className={`p-2 rounded-xl border text-center transition ${
                    isSelected
                      ? 'bg-slate-750 border-teal-400 text-white ring-1 ring-teal-400'
                      : 'bg-slate-800 border-slate-700/80 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className={`text-xs font-bold ${diff.color}`}>{diff.label}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">{diff.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Question Archive Filter (20 Years) */}
        <div>
          <label className="text-xs font-bold text-slate-300 mb-2 block uppercase tracking-wider">
            3. Question Bank Pool
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setIs20YearPYQ(true)}
              className={`flex-1 p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                is20YearPYQ
                  ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
            >
              <span>📜 Last 20 Years PYQs (2004–2024)</span>
            </button>
            <button
              onClick={() => setIs20YearPYQ(false)}
              className={`flex-1 p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                !is20YearPYQ
                  ? 'bg-teal-950/60 border-teal-500 text-teal-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
            >
              <span>⚡ Complete Practice Pool</span>
            </button>
          </div>
        </div>

        {/* 4. Set Size (50 Questions Default) */}
        <div>
          <label className="text-xs font-bold text-slate-300 mb-2 block uppercase tracking-wider">
            4. Question Set Size
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { count: 50, label: '50 Questions', sub: 'Full CBT Set (45m)' },
              { count: 25, label: '25 Questions', sub: 'Half Set (22m)' },
              { count: 10, label: '10 Questions', sub: 'Quick Drill (9m)' },
            ].map(item => {
              const isSelected = questionCount === item.count;
              return (
                <button
                  key={item.count}
                  onClick={() => setQuestionCount(item.count)}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    isSelected
                      ? 'bg-teal-500/20 border-teal-400 text-white font-bold ring-1 ring-teal-400'
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-black">{item.label}</div>
                  <div className="text-[10px] text-slate-400">{item.sub}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Negative Marking Notice */}
        <div className="bg-amber-950/30 border border-amber-500/40 rounded-xl p-2.5 flex items-center gap-2 text-xs text-amber-300">
          <ShieldAlert size={16} className="shrink-0 text-amber-400" />
          <span>
            Negative Marking: <strong>-{activeExam.negativeMarking} Mark</strong> per wrong answer (+1.00 for correct).
          </span>
        </div>

        {/* Start Actions */}
        <div className="flex flex-col gap-2 pt-2">
          <button
            onClick={() => handleStartTest('exam')}
            className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 font-black py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition"
          >
            <Target size={16} />
            <span>Start {questionCount}-Question Live CBT Exam</span>
          </button>

          <button
            onClick={() => handleStartTest('flip')}
            className="w-full bg-slate-800 hover:bg-slate-750 border border-slate-700 text-teal-300 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
          >
            <Layers size={15} />
            <span>Practice this Set in 3D Flip Card Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
}
