'use client';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, Target, Layers, Check, ShieldAlert } from 'lucide-react';
import { completedQuestionKeys } from '@/lib/practice-history';
import { useStore } from '@/lib/store';
import { normalizePracticeExamId, practiceExam } from '@/lib/exam-context';
import { getQuestionPool, AVAILABLE_EXAMS } from '@/lib/data/question_bank_engine';

interface MockTestBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  defaultExamId?: string;
  defaultTopicId?: string;
  onExamChange?: (examId: string) => void;
}

export default function MockTestBottomSheet({
  isOpen,
  onClose,
  defaultExamId = 'master-cadre-sst',
  defaultTopicId = 'all',
  onExamChange,
}: MockTestBottomSheetProps) {
  const router = useRouter();

  const [selectedExam, setSelectedExam] = useState<string>(normalizePracticeExamId(defaultExamId));
  const rememberExam = useStore(state => state.setSelectedExam);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Reset the drawer when opened for a new exam.
    if (isOpen) setSelectedExam(normalizePracticeExamId(defaultExamId));
  }, [isOpen, defaultExamId]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [is20YearPYQ, setIs20YearPYQ] = useState<boolean>(false);
  const [questionCount, setQuestionCount] = useState<number>(50);
  const [selectedSet, setSelectedSet] = useState<number>(1);

  if (!isOpen) return null;

  const activeExam = AVAILABLE_EXAMS.find(e => e.id === selectedExam);

  const availableCount = getQuestionPool({ examId: selectedExam, topicId: defaultTopicId, difficulty: selectedDifficulty, pyq20Years: is20YearPYQ }).length;

  const freshCount = getQuestionPool({ examId: selectedExam, topicId: defaultTopicId, difficulty: selectedDifficulty, pyq20Years: is20YearPYQ, excludeKeys: completedQuestionKeys() }).length;
  const totalSets = Math.max(1, Math.ceil(availableCount / questionCount));

  const handleStartTest = (mode: 'exam' | 'flip', customSet?: number) => {
    if (!activeExam || !availableCount) return;
    const setNum = customSet || selectedSet || 1;
    const catalogue = practiceExam(selectedExam);
    if (catalogue) rememberExam(catalogue.state, catalogue.id);
    const configPayload = {
      testId: `exam-${selectedExam}`,
      examId: selectedExam,
      topicId: defaultTopicId,
      title: `${activeExam.name} - Set ${setNum} (${questionCount} Qs)`,
      titlePa: `${activeExam?.namePa} - ਸੈੱਟ ${setNum} (${questionCount} ਸਵਾਲ)`,
      count: questionCount,
      difficulty: selectedDifficulty,
      timeLimitMinutes: Math.round(questionCount * 0.9), // ~45 mins for 50 Qs
      negativeMarking: activeExam.negativeMarking,
      pyq20Years: is20YearPYQ,
      mode,
    };

    try {
      studyStorage.setItem('examsathi_test_config', JSON.stringify(configPayload));
    } catch {}

    const queryParams = new URLSearchParams({
      exam: selectedExam,
      diff: selectedDifficulty,
      count: questionCount.toString(),
      set: String(setNum),
      pyq: is20YearPYQ ? '20y' : 'all',
      mode,
      minutes: String(configPayload.timeLimitMinutes),
    });

    onClose();
    router.push(`/mock-test/topic-${defaultTopicId}?${queryParams.toString()}`);
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
              Practice settings · Availability depends on filters
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

        <p role="status" className="text-sm text-amber-200">{availableCount} distinct questions match these filters. This set will contain {Math.min(questionCount, freshCount)} unseen questions ({freshCount} remaining). Flipcards can review the full pool. Shared syllabus questions retain their source labels. This is topic practice, not a complete official paper.</p>
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
                  onClick={() => { setSelectedExam(exam.id); const chosen = practiceExam(exam.id); if (chosen) rememberExam(chosen.state, chosen.id); onExamChange?.(exam.id); }}
                  aria-pressed={isSelected}
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
            {activeExam?.syllabusSummary}
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

        {/* 5. Choose 50-Question Set */}
        {totalSets > 1 && (
          <div>
            <label className="text-xs font-bold text-slate-300 mb-2 block uppercase tracking-wider">
              5. Choose Question Set (Set 1 to Set {totalSets})
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: Math.min(totalSets, 9) }, (_, idx) => {
                const sNum = idx + 1;
                const startQ = (sNum - 1) * questionCount + 1;
                const endQ = Math.min(sNum * questionCount, availableCount);
                const isSelected = selectedSet === sNum;
                return (
                  <button
                    key={sNum}
                    onClick={() => setSelectedSet(sNum)}
                    className={`p-2 rounded-xl border text-center transition ${
                      isSelected
                        ? 'bg-teal-500/20 border-teal-400 text-white font-bold ring-1 ring-teal-400'
                        : 'bg-slate-800 border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="text-xs font-black">Set {sNum}</div>
                    <div className="text-[10px] text-slate-400">Q{startQ}–{endQ}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Negative Marking Notice */}
        <div className="bg-amber-950/30 border border-amber-500/40 rounded-xl p-2.5 flex items-center gap-2 text-xs text-amber-300">
          <ShieldAlert size={16} className="shrink-0 text-amber-400" />
          <span>
            Negative Marking: <strong>-{activeExam?.negativeMarking} Mark</strong> per wrong answer (+1.00 for correct).
          </span>
        </div>

        {/* Start Actions */}
        <div className="flex flex-col gap-2 pt-2">
          <button
            disabled={!availableCount || !activeExam}
            onClick={() => handleStartTest('exam')}
            className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 font-black py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition"
          >
            <Target size={16} />
            <span>Start Set {selectedSet} ({Math.min(questionCount, availableCount)}-Question Practice)</span>
          </button>

          <button
            disabled={!availableCount || !activeExam}
            onClick={() => handleStartTest('flip')}
            className="w-full bg-slate-800 hover:bg-slate-750 border border-slate-700 text-teal-300 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
          >
            <Layers size={15} />
            <span>Practice Set {selectedSet} in 3D Flip Card Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
}
