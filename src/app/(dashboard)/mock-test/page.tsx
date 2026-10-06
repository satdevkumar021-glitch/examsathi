'use client';
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
  Calendar
} from 'lucide-react';
import { AVAILABLE_TEST_TOPICS, TopicMeta } from '@/lib/data/question_bank_engine';

export default function MockTestHub() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [testMode, setTestMode] = useState<'exam' | 'flip'>('exam');
  const [questionCount, setQuestionCount] = useState<number>(25);
  const [selectedTopic, setSelectedTopic] = useState<string>('punjab-history');
  const [pyqOnly, setPyqOnly] = useState<boolean>(false);
  const [lastLevel, setLastLevel] = useState<{ level: number; title: string; badge: string; percentage: number } | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('examsathi_last_result');
      if (stored) {
        const parsed = JSON.parse(stored);
        const percentage = Math.round((parsed.correct / (parsed.total || 1)) * 100);
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
        setLastLevel({ level, title, badge, percentage });
      }
    } catch {
      // Fallback
    }
  }, []);

  const subjects = ['All', 'History', 'Civics', 'Geography', 'Economics', 'Science', 'Punjabi'];

  const filteredTopics = AVAILABLE_TEST_TOPICS.filter(t => 
    selectedSubject === 'All' ? true : t.subject.toLowerCase() === selectedSubject.toLowerCase()
  );

  const startTest = (topicId: string, customMode?: 'exam' | 'flip', isPyq = false) => {
    const mode = customMode || testMode;
    const pyq = isPyq || pyqOnly;
    // Store test session settings in sessionStorage
    try {
      sessionStorage.setItem('examsathi_test_config', JSON.stringify({
        topicId,
        mode,
        count: questionCount,
        pyqOnly: pyq,
        timeLimitMinutes: Math.round(questionCount * 1.2), // 1.2 mins per question
      }));
    } catch {}

    router.push(`/mock-test/topic-${topicId}`);
  };

  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-24 text-slate-100 max-w-xl mx-auto w-full">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-900/60 via-slate-800 to-teal-900/40 p-5 rounded-2xl border border-indigo-700/40 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <Target size={22} />
            </span>
            <div>
              <h1 className="text-white font-extrabold text-lg">Mock Test & PYQ Portal</h1>
              <p className="text-[11px] text-slate-300">ਟੈਸਟ ਪੋਰਟਲ — 100,000+ Topic MCQs & 10-Yr Past Papers</p>
            </div>
          </div>
          <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
            <Flame size={12} /> Live CBT
          </span>
        </div>

        {/* Level Status Card */}
        {lastLevel ? (
          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between bg-slate-900/50 p-3 rounded-xl">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Your Current Level</span>
              <div className="text-sm font-bold text-teal-300 flex items-center gap-1.5 mt-0.5">
                <Award size={16} className="text-amber-400" />
                {lastLevel.title}
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-white">{lastLevel.percentage}% Score</span>
              <div className="text-[10px] text-teal-400 font-medium">{lastLevel.badge}</div>
            </div>
          </div>
        ) : (
          <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span>Take your first topic test to diagnose your <strong>Master Cadre Readiness Level</strong>.</span>
          </div>
        )}
      </div>

      {/* Test Mode Selector Pill */}
      <div>
        <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">1. Choose Practice Mode</h2>
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
              Real timer, -0.25 negative marking, OMR question palette, and level score.
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
              Interactive 3D flip card practice with instant answers and FSRS algorithm.
            </p>
          </button>
        </div>
      </div>

      {/* Quick Launch Cards */}
      <div>
        <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">2. Special Exam Tracks</h2>
        <div className="grid grid-cols-2 gap-3">
          {/* Last 10 Years PYQs Card */}
          <div 
            onClick={() => startTest('all', 'exam', true)}
            className="cursor-pointer bg-gradient-to-br from-emerald-900/40 to-slate-800 border border-emerald-500/40 p-3.5 rounded-xl flex flex-col justify-between hover:border-emerald-400 transition group shadow"
          >
            <div>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 inline-block mb-1.5">
                2014 – 2024 Papers
              </span>
              <h3 className="text-white font-bold text-sm group-hover:text-emerald-300 transition">
                10-Year PYQ Live Test
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                Official Punjab Master Cadre & PSSSB past papers with rationales.
              </p>
            </div>
            <div className="flex items-center justify-between mt-3 text-emerald-400 font-bold text-xs">
              <span>Start PYQ Test</span>
              <Play size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Full CBT 150 Qs Simulator */}
          <div 
            onClick={() => startTest('all', 'exam', false)}
            className="cursor-pointer bg-gradient-to-br from-purple-900/40 to-slate-800 border border-purple-500/40 p-3.5 rounded-xl flex flex-col justify-between hover:border-purple-400 transition group shadow"
          >
            <div>
              <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-purple-500/30 inline-block mb-1.5">
                Full 150 Marks
              </span>
              <h3 className="text-white font-bold text-sm group-hover:text-purple-300 transition">
                Master Cadre Mock
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                Complete 4-section simulation (History, Polity, Geography, Economy).
              </p>
            </div>
            <div className="flex items-center justify-between mt-3 text-purple-400 font-bold text-xs">
              <span>Start 150 CBT</span>
              <Play size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Question Count Selector */}
      <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/80 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-white block">Question Length</span>
          <span className="text-[11px] text-slate-400">Select number of questions per test</span>
        </div>
        <div className="flex gap-1.5">
          {[10, 25, 50].map((count) => (
            <button
              key={count}
              onClick={() => setQuestionCount(count)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                questionCount === count
                  ? 'bg-teal-500 text-slate-950 shadow'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {count} Qs
            </button>
          ))}
        </div>
      </div>

      {/* Topic Filter Chips */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
            3. Topic-Wise Mock Tests ({filteredTopics.length})
          </h2>
          <span className="text-[10px] text-teal-400 font-semibold">Instant Evaluation</span>
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
                        <Calendar size={10} /> 10-Yr PYQs
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
                  onClick={() => startTest(topic.id, 'exam')}
                  className="flex-1 bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-slate-950 border border-teal-500/40 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Play size={12} /> Live MCQ Test
                </button>
                <button
                  onClick={() => startTest(topic.id, 'flip')}
                  className="flex-1 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/40 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Layers size={12} /> Flip Practice
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

    </div>
  );
}
