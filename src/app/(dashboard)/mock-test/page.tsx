'use client';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Target, 
  Clock, 
  Layers, 
  Award, 
  CheckCircle2, 
  Play, 
  BookOpen, 
  ChevronRight, 
  Flame, 
  HelpCircle,
  Filter,
  BarChart3,
  Calendar,
  Sparkles,
  SlidersHorizontal,
  GraduationCap,
  Briefcase,
  ShieldAlert
} from 'lucide-react';
import { AVAILABLE_TEST_TOPICS, AVAILABLE_EXAMS, TopicMeta, ExamInfo } from '@/lib/data/question_bank_engine';
import MockTestBottomSheet from '@/components/ui/MockTestBottomSheet';

export default function MockTestHub() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [testMode, setTestMode] = useState<'exam' | 'flip'>('exam');
  const [questionCount, setQuestionCount] = useState<number>(50);
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [selectedExamForDrawer, setSelectedExamForDrawer] = useState<string>('master-cadre-sst');
  const [lastLevel, setLastLevel] = useState<{ level: number; title: string; badge: string; percentage: number; rankText?: string } | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('examsathi_last_result') || studyStorage.getItem('examsathi_last_result');
      if (stored) {
        const parsed = JSON.parse(stored);
        const percentage = parsed.percentage ?? Math.round((parsed.correct / (parsed.total || 1)) * 100);
        let level = 3;
        let title = 'Intermediate Aspirant 🥉';
        let badge = 'Bronze Rank';
        if (percentage >= 80) {
          level = 5;
          title = 'Master Cadre Exam Ready 🏆';
          badge = 'Gold Merit Tier';
        } else if (percentage >= 65) {
          level = 4;
          title = 'Advanced Competitor 🥈';
          badge = 'Silver Rank';
        } else if (percentage < 35) {
          level = 1;
          title = 'Foundation Stage 🔰';
          badge = 'Study Required';
        }

        const rankText = parsed.predictedRank?.stateRank 
          ? `Rank #${parsed.predictedRank.stateRank}` 
          : undefined;

        // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate client-only browser data after mount; this bounded effect does not update its own dependencies.
        setLastLevel({ level, title, badge, percentage, rankText });
      }
    } catch {
      // Fallback
    }
  }, []);

  const subjects = ['All', 'History', 'Civics', 'Geography', 'Economics', 'Science', 'Punjabi'];

  const filteredTopics = AVAILABLE_TEST_TOPICS.filter(t => 
    selectedSubject === 'All' ? true : t.subject.toLowerCase() === selectedSubject.toLowerCase()
  );

  const startTopicTest = (topicId: string, customMode?: 'exam' | 'flip', isPyq = false) => {
    const mode = customMode || testMode;
    try {
      sessionStorage.setItem('examsathi_test_config', JSON.stringify({
        topicId,
        mode,
        count: questionCount,
        difficulty: difficultyFilter,
        pyqOnly: isPyq,
        timeLimitMinutes: Math.round(questionCount * 0.9), // 45 mins for 50 Qs
      }));
    } catch {}

    const query = new URLSearchParams({
      diff: difficultyFilter,
      count: questionCount.toString(),
      pyq: isPyq ? '20y' : 'all',
      mode,
    });

    router.push(`/mock-test/topic-${topicId}?${query.toString()}`);
  };

  const openDrawerForExam = (examId: string) => {
    setSelectedExamForDrawer(examId);
    setIsBottomSheetOpen(true);
  };

  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-24 text-slate-100 max-w-xl mx-auto w-full">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-900/70 via-slate-800 to-teal-900/50 p-5 rounded-2xl border border-indigo-700/40 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <Target size={22} />
            </span>
            <div>
              <h1 className="text-white font-extrabold text-lg">Mock Test & PYQ Portal</h1>
              <p className="text-[11px] text-slate-300">ਟੈਸਟ ਪੋਰਟਲ — 20-Year PYQ Archive (2004–2024) & Dynamic CBT Sets</p>
            </div>
          </div>
          <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
            <Flame size={12} /> Live CBT
          </span>
        </div>

        {/* Level Status Card */}
        {lastLevel ? (
          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between bg-slate-900/60 p-3 rounded-xl">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Latest Performance</span>
              <div className="text-sm font-bold text-teal-300 flex items-center gap-1.5 mt-0.5">
                <Award size={16} className="text-amber-400" />
                {lastLevel.title}
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-white">{lastLevel.percentage}% Score</span>
              <div className="text-[10px] text-teal-400 font-medium">
                {lastLevel.rankText || lastLevel.badge}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span>Take your first 50-question mock test to diagnose your <strong>State Merit Rank</strong>.</span>
          </div>
        )}
      </div>

      {/* Prominent CBT Bottom Sheet Launcher Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-850 to-indigo-950 p-4 rounded-2xl border-2 border-teal-500/60 shadow-xl flex flex-col gap-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-teal-500/20 text-teal-300 rounded-xl">
              <Sparkles size={18} />
            </span>
            <div>
              <h2 className="text-white font-extrabold text-sm sm:text-base">
                ⚡ 50-Question CBT Mock Test Simulator
              </h2>
              <p className="text-[11px] text-teal-300">
                Official Exam Pattern • 20-Year Archive (2004–2024) • Negative Marking
              </p>
            </div>
          </div>
          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-500/30">
            50 Qs Set
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Open the interactive drawer to configure your test by target exam (Master Cadre SST, PSSSB Clerk, Punjab Police, Patwari, REET, CTET) with Simple, Mid, or Hard questions.
        </p>

        <button
          onClick={() => openDrawerForExam('master-cadre-sst')}
          className="w-full bg-gradient-to-r from-teal-400 via-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 font-black py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition"
        >
          <SlidersHorizontal size={15} />
          <span>Open Exam Configurator & Launch 50 Qs Set</span>
        </button>
      </div>

      {/* AI Drill Generator Banner */}
      <Link
        href="/ai-generator"
        className="bg-gradient-to-r from-indigo-950 via-slate-800 to-teal-950 p-4 rounded-2xl border border-indigo-500/50 hover:border-indigo-400 shadow-lg flex items-center justify-between gap-3 group transition"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
            <Sparkles size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-bold text-xs sm:text-sm">AI Drill Generator ✨</h3>
              <span className="text-[9px] bg-teal-500/20 text-teal-300 font-bold px-1.5 py-0.5 rounded border border-teal-500/30 font-mono">Gemini 2.5</span>
            </div>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Paste handwritten notes, PDF text, or coaching material to generate custom CBT drills instantly.
            </p>
          </div>
        </div>
        <ChevronRight size={18} className="text-slate-400 group-hover:text-teal-300 transition shrink-0" />
      </Link>

      {/* Target Exam Quick Cards (Launches Bottom Sheet with that Exam pre-selected) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
            1. Select Target Examination (20-Year Archive)
          </h2>
          <span className="text-[10px] text-teal-400 font-semibold">2004 – 2024 Archive</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2.5">
          {AVAILABLE_EXAMS.map(exam => (
            <div
              key={exam.id}
              onClick={() => openDrawerForExam(exam.id)}
              className="cursor-pointer bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-teal-400/60 p-3 rounded-xl flex flex-col justify-between transition group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-bold text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/20">
                    {exam.badge}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">
                    50 Qs
                  </span>
                </div>
                <h3 className="text-white font-bold text-xs group-hover:text-teal-300 transition line-clamp-1">
                  {exam.name}
                </h3>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                  {exam.pyqSpan}
                </p>
              </div>

              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-700/60 text-[10px] text-teal-400 font-bold">
                <span>Configure Test</span>
                <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Category Filter (Simple / Mid / Hard) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
            2. Question Difficulty Tier
          </h2>
          <span className="text-[10px] text-slate-400">Exam Grading Filter</span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { id: 'all', label: 'Balanced', desc: 'Standard Mix', color: 'border-slate-600 text-teal-300' },
            { id: 'easy', label: 'Simple 🟢', desc: 'Direct Facts', color: 'border-emerald-500/60 text-emerald-300' },
            { id: 'medium', label: 'Mid 🟡', desc: 'Competitive', color: 'border-amber-500/60 text-amber-300' },
            { id: 'hard', label: 'Hard 🔴', desc: 'Merit Maker', color: 'border-rose-500/60 text-rose-300' },
          ].map(diff => {
            const isSelected = difficultyFilter === diff.id;
            return (
              <button
                key={diff.id}
                onClick={() => setDifficultyFilter(diff.id as 'all' | 'easy' | 'medium' | 'hard')}
                className={`p-2.5 rounded-xl border text-center transition ${
                  isSelected
                    ? 'bg-slate-750 border-teal-400 text-white ring-1 ring-teal-400 shadow-md'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className={`text-xs font-bold ${diff.color}`}>{diff.label}</div>
                <div className="text-[9px] text-slate-400 mt-0.5">{diff.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Practice Mode Selector Pill */}
      <div>
        <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">3. Practice Format</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setTestMode('exam')}
            className={`p-3.5 rounded-xl border flex flex-col gap-1.5 text-left transition ${
              testMode === 'exam'
                ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-950'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm flex items-center gap-1.5">
                <Clock size={16} className="text-indigo-400" /> Live Exam Mode
              </span>
              {testMode === 'exam' && <CheckCircle2 size={16} className="text-indigo-400" />}
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Timed CBT simulation, -0.25 negative marking, rank prediction & report.
            </p>
          </button>

          <button
            onClick={() => setTestMode('flip')}
            className={`p-3.5 rounded-xl border flex flex-col gap-1.5 text-left transition ${
              testMode === 'flip'
                ? 'bg-amber-600/20 border-amber-500 text-white shadow-md shadow-amber-950'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm flex items-center gap-1.5">
                <Layers size={16} className="text-amber-400" /> 3D Flip Card Mode
              </span>
              {testMode === 'flip' && <CheckCircle2 size={16} className="text-amber-400" />}
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              3D card flip practice with instant explanations and FSRS spaced repetition.
            </p>
          </button>
        </div>
      </div>

      {/* Question Set Size Selector */}
      <div className="bg-slate-800/70 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-white block">Question Set Size</span>
          <span className="text-[11px] text-slate-400">Choose a practice length; availability depends on filters</span>
        </div>
        <div className="flex gap-1.5">
          {[50, 25, 10].map((count) => (
            <button
              key={count}
              onClick={() => setQuestionCount(count)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                questionCount === count
                  ? 'bg-teal-500 text-slate-950 shadow'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {count} Qs {count === 50 && '⭐'}
            </button>
          ))}
        </div>
      </div>

      {/* Topic Filter Chips & Topic-Wise Tests */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
            4. Topic-Wise Question Bank ({filteredTopics.length} Topics)
          </h2>
          <span className="text-[10px] text-teal-400 font-semibold">600+ PYQs & Drills</span>
        </div>
        
        {/* Subject Filter Pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition ${
                selectedSubject === sub
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Topic Test List */}
        <div className="flex flex-col gap-2.5 mt-2">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-teal-500/50 rounded-xl p-3.5 flex flex-col gap-2.5 transition shadow-sm group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-slate-700 text-slate-300 text-[9px] font-bold uppercase px-2 py-0.5 rounded">
                      {topic.subject}
                    </span>
                    {topic.isPYQRich && (
                      <span className="bg-emerald-500/20 text-emerald-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                        <Calendar size={10} /> 20-Yr Archive
                      </span>
                    )}
                    <span className="text-teal-400 text-[10px] font-semibold">
                      Weightage: {topic.examWeightage}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-xs leading-snug">
                    {topic.name}
                  </h3>
                  <p className="text-slate-400 text-[11px] mt-0.5 truncate">
                    {topic.namePa}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-700/60">
                <button
                  onClick={() => startTopicTest(topic.id, 'exam')}
                  className="flex-1 bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-slate-950 border border-teal-500/40 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Play size={12} /> Live {questionCount} Qs CBT
                </button>
                <button
                  onClick={() => startTopicTest(topic.id, 'flip')}
                  className="flex-1 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/40 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Layers size={12} /> 3D Flip Cards
                </button>
                <Link
                  href={`/lesson/${topic.id}`}
                  className="p-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition"
                  title="Study Lesson First"
                >
                  <BookOpen size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Bottom Sheet */}
      <MockTestBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        defaultExamId={selectedExamForDrawer}
      />

    </div>
  );
}
