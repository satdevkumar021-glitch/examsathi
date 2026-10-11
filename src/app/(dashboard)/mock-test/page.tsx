'use client';
import { useStore } from '@/lib/store';
import { normalizePracticeExamId, practiceExam } from '@/lib/exam-context';
import { getQuestionPool } from '@/lib/data/question_bank_engine';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Target, Clock, Layers, Award, CheckCircle2, Play, BookOpen, ChevronRight, Flame, Calendar, Sparkles, SlidersHorizontal } from 'lucide-react';
import { getExamTopics, AVAILABLE_EXAMS } from '@/lib/data/question_bank_engine';
import MockTestBottomSheet from '@/components/ui/MockTestBottomSheet';

export default function MockTestHub() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [testMode, setTestMode] = useState<'exam' | 'flip'>('exam');
  const [questionCount, setQuestionCount] = useState<number>(50);
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [selectedExamForDrawer, setSelectedExamForDrawer] = useState<string>('punjab-clerk');
  const [lastLevel, setLastLevel] = useState<{ level: number; title: string; badge: string; percentage: number; rankText?: string } | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const exam = normalizePracticeExamId(query.get('exam') || useStore.getState().selectedExam || 'punjab-clerk');
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Restore explicit route or saved exam context after mount.
    setSelectedExamForDrawer(exam);
    setTestMode(query.get('mode') === 'flip' ? 'flip' : 'exam');
    try {
      const stored = studyStorage.getItem('examsathi_last_result');
      if (stored) {
        const parsed = JSON.parse(stored);
        const percentage = parsed.percentage ?? Math.round((parsed.correct / (parsed.total || 1)) * 100);
        let level = 3;
        let title = 'Intermediate Aspirant 🥉';
        let badge = 'Foundation practice';
        if (percentage >= 80) {
          level = 5;
          title = 'Strong practice result 🏆';
          badge = 'Gold Merit Tier';
        } else if (percentage >= 65) {
          level = 4;
          title = 'Advanced Competitor 🥈';
          badge = 'Developing practice';
        } else if (percentage < 35) {
          level = 1;
          title = 'Foundation Stage 🔰';
          badge = 'Study Required';
        }

        const rankText = 'Practice level — not a candidate rank';

        setLastLevel({ level, title, badge, percentage, rankText });
      }
    } catch {
      // Fallback
    }
  }, []);

  const [topicSearch, setTopicSearch] = useState('');
  const [showUnavailable, setShowUnavailable] = useState(false);
  const examTopics = useMemo(
    () =>
      getExamTopics(selectedExamForDrawer).map(topic => {
        const scopedCount = getQuestionPool({
          examId: selectedExamForDrawer,
          topicId: topic.id,
          difficulty: difficultyFilter,
        }).length;
        const fallbackCount =
          scopedCount > 0
            ? scopedCount
            : getQuestionPool({
                topicId: topic.id,
                difficulty: difficultyFilter,
              }).length;
        return {
          ...topic,
          availableCount: fallbackCount,
        };
      }),
    [selectedExamForDrawer, difficultyFilter]
  );
  const subjects = ['All', ...new Set(examTopics.map(topic => topic.subject))];
  const filteredTopics = examTopics.filter(topic => (selectedSubject === 'All' || topic.subject === selectedSubject) && (showUnavailable || topic.availableCount > 0) && `${topic.name} ${topic.namePa} ${topic.subject}`.toLowerCase().includes(topicSearch.toLowerCase()));

  const ppscClerkMegaCount = useMemo(
    () => getQuestionPool({ topicId: 'ppsc-clerk-mega' }).length,
    []
  );
  const punjabGkPunjabiMegaCount = useMemo(
    () => getQuestionPool({ topicId: 'punjab-gk-punjabi-mega' }).length,
    []
  );

  const startTopicTest = (topicId: string, customMode?: 'exam' | 'flip', isPyq = false, setNum?: number) => {
    const mode = customMode || testMode;
    const payload = JSON.stringify({
      topicId,
      examId: selectedExamForDrawer,
      mode,
      count: questionCount,
      difficulty: difficultyFilter,
      pyqOnly: isPyq,
      timeLimitMinutes: Math.round(questionCount * 0.9), // 45 mins for 50 Qs
    });
    try {
      sessionStorage.setItem('examsathi_test_config', payload);
    } catch {}
    try {
      studyStorage.setItem('examsathi_test_config', payload);
    } catch {}

    const query = new URLSearchParams({
      exam: selectedExamForDrawer,
      diff: difficultyFilter,
      count: questionCount.toString(),
      pyq: isPyq ? '20y' : 'all',
      mode,
    });
    if (setNum && setNum > 0) {
      query.set('set', String(setNum));
    }

    router.push(`/mock-test/topic-${topicId}?${query.toString()}`);
  };

  const openDrawerForExam = (examId: string) => {
    setSelectedExamForDrawer(examId);
    setSelectedSubject('All');
    const chosen = practiceExam(examId);
    if (chosen) useStore.getState().setSelectedExam(chosen.state, chosen.id);
    setIsBottomSheetOpen(true);
  };

  return (
    <div className="p-4 flex flex-col gap-5 min-h-screen bg-slate-900 pb-24 text-slate-100 max-w-xl mx-auto w-full">
      
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div>
          <h1 className="text-xl font-black text-white">Practice in 1 Click · अभ्यास · ਅਭਿਆਸ</h1>
          <p className="text-xs text-slate-300 mt-0.5">
            Choose any 50-question Set (Set 1 → Set 2 → Set 3 → Set 4...) or pick a topic below. Available in English • ਪੰਜਾਬੀ • हिंदी.
          </p>
        </div>
        <Link
          href="/results/latest"
          className="text-xs font-bold bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 px-3 py-1.5 rounded-xl transition"
        >
          📊 Last Scorecard
        </Link>
      </div>

      {/* 🔥 TODAY'S TWO LIVE FLAGSHIP MOCK TEST SUITES (50-50 SETS) */}
      <section className="rounded-2xl border-2 border-amber-500/70 bg-gradient-to-br from-indigo-950/90 via-slate-900 to-teal-950/90 p-4 space-y-4 shadow-xl">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
              🔴 LIVE EXAM SPECIAL
            </span>
            <h2 className="text-sm sm:text-base font-black text-white">
              Punjab PPSC & PSSSB Clerical + Punjabi Live 50-50 Mock Sets
            </h2>
          </div>
          <span className="text-[11px] font-bold text-teal-300">
            ਪੰਜਾਬੀ • हिंदी • English
          </span>
        </div>

        {/* LIVE SUITE 1: Punjab PPSC & PSSSB Clerical Mega Mock */}
        <div className="rounded-xl bg-slate-900/90 border border-teal-500/50 p-3.5 space-y-2.5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-400 block">
                Live Test 1 • All Clerical & PPSC Subjects Combined ({ppscClerkMegaCount} Qs Bank)
              </span>
              <h3 className="text-sm font-black text-white">
                💼 Punjab PPSC & PSSSB Clerk Full Syllabus Mega Mock (50-Q Sets)
              </h3>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Polity, History, Geography, Economy, Science, Current Affairs, Sports, Cinema/Lit, Punjabi, English, Computer/MS Office, Reasoning & Quant.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
            {[1, 2, 3, 4, 5, 6].map((setNum) => {
              const startQ = (setNum - 1) * 50 + 1;
              const endQ = setNum * 50;
              return (
                <Link
                  key={setNum}
                  href={`/mock-test/ppsc-clerk?exam=punjab-clerk&count=50&set=${setNum}&mode=exam`}
                  className={`rounded-xl px-3 py-2.5 text-xs font-extrabold text-center border transition flex items-center justify-center gap-1 shadow ${
                    setNum === 1
                      ? 'bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 border-teal-300'
                      : 'bg-slate-800 hover:bg-slate-700 text-teal-200 border-teal-500/40'
                  }`}
                >
                  <Play size={12} className="shrink-0" />
                  <span>Set {setNum} ({startQ}–{endQ})</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* LIVE SUITE 2: Punjab GK & Compulsory Punjabi (Paper A + B) Mega Mock */}
        <div className="rounded-xl bg-slate-900/90 border border-amber-500/50 p-3.5 space-y-2.5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">
                Live Test 2 • Punjab GK + Compulsory Punjabi Paper A & B ({punjabGkPunjabiMegaCount} Qs Bank)
              </span>
              <h3 className="text-sm font-black text-white">
                🪯 Punjab GK, 10 Sikh Gurus & Punjabi Grammar Mega Mock (50-Q Sets)
              </h3>
              <p className="text-[11px] text-slate-300 mt-0.5">
                10 Sikh Gurus, Banda Singh Bahadur, Maharaja Ranjit Singh, Punjab Rivers/Districts, Folk Culture, Gurmukhi Script, Grammar, Idioms & Proverbs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
            {[1, 2, 3, 4, 5].map((setNum) => {
              const startQ = (setNum - 1) * 50 + 1;
              const endQ = setNum * 50;
              return (
                <Link
                  key={setNum}
                  href={`/mock-test/punjab-gk-punjabi?exam=punjab-clerk&count=50&set=${setNum}&mode=exam`}
                  className={`rounded-xl px-3 py-2.5 text-xs font-extrabold text-center border transition flex items-center justify-center gap-1 shadow ${
                    setNum === 1
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 border-amber-300'
                      : 'bg-slate-800 hover:bg-slate-700 text-amber-200 border-amber-500/40'
                  }`}
                >
                  <Play size={12} className="shrink-0" />
                  <span>Set {setNum} ({startQ}–{endQ})</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <label className="text-sm text-teal-200 font-semibold">Selected exam (ਪ੍ਰੀਖਿਆ ਚੁਣੋ / परीक्षा चुनें)
        <select aria-label="Selected exam" value={selectedExamForDrawer} onChange={event => { const id = event.target.value; setSelectedExamForDrawer(id); setSelectedSubject('All'); const exam = AVAILABLE_EXAMS.find(e => e.id === id); if (exam) { const catalogue = practiceExam(id); if (catalogue) useStore.getState().setSelectedExam(catalogue.state, id); } }} className="block w-full bg-slate-800 border border-slate-700 rounded-xl p-3 mt-1.5 text-white font-bold">
          {AVAILABLE_EXAMS.map(exam => <option key={exam.id} value={exam.id}>{exam.name}</option>)}
        </select>
      </label>
      <p className="text-xs text-amber-200">Only questions mapped to this exam’s current topic outline are shown. Coverage is incomplete; shared topics can use questions labelled from another exam. See the coverage report before treating this as a full mock.</p>
      <section className="my-1 rounded-2xl border border-emerald-500 bg-emerald-950/40 p-4 space-y-3">
        <h2 className="text-base font-bold text-emerald-200">⚡ Clerk GK — 100-question revision test</h2>
        <p className="text-xs text-slate-200">Polity, Indian History, Geography, Science and Punjab GK · 20 questions each.</p>
        <p className="text-[11px] text-amber-200">English · हिंदी · ਪੰਜਾਬੀ questions, options and explanations. AI-assisted original practice; independent editorial and translation review pending. Not a PYQ, current-affairs set, or official full-paper mock. 90-minute practice timer; +1 correct, −0.25 wrong, 0 skipped.</p>
        <div className="flex flex-wrap gap-2">
          <Link className="rounded-lg bg-emerald-600 px-3.5 py-2.5 text-xs font-bold text-white" href="/mock-test/topic-clerk-gk-fast-practice/?exam=punjab-clerk&count=100&mode=exam&fresh=1">Start 100-question GK test →</Link>
          <Link className="rounded-lg bg-teal-600 px-3.5 py-2.5 text-xs font-bold text-white" href="/mock-test/topic-clerk-gk-fast-practice/?exam=punjab-clerk&count=50&set=1&mode=exam">Set 1 (Q1–50) →</Link>
          <Link className="rounded-lg bg-teal-600 px-3.5 py-2.5 text-xs font-bold text-white" href="/mock-test/topic-clerk-gk-fast-practice/?exam=punjab-clerk&count=50&set=2&mode=exam">Set 2 (Q51–100) →</Link>
          <Link className="rounded-lg border border-emerald-500 px-3.5 py-2.5 text-xs text-emerald-200" href="/mock-test/topic-clerk-gk-fast-practice/?exam=punjab-clerk&count=20&mode=exam&fresh=1">Quick 20-question practice</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">{Object.entries({Polity:'gk-polity-foundation',History:'gk-history-foundation',Geography:'gk-geography-foundation',Science:'gk-science-foundation','Punjab GK':'gk-punjab-foundation'}).map(([name,id])=><Link key={id} className="rounded-lg bg-slate-800 hover:bg-slate-700 p-2.5 text-xs font-semibold text-emerald-200 border border-slate-700" href={`/mock-test/topic-${id}/?exam=punjab-clerk&count=20&mode=exam&fresh=1`}>{name} · 20 questions →</Link>)}</div>
      </section>
      <Link href="/coverage" className="underline text-teal-300 text-xs">Check topic coverage & available fresh sets</Link>
      <details className="rounded-xl border border-slate-700 p-4"><summary className="cursor-pointer font-bold text-sm">More options: difficulty, test length, AI and previous result</summary><div className="mt-4 flex flex-col gap-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-900/70 via-slate-800 to-teal-900/50 p-5 rounded-2xl border border-indigo-700/40 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <Target size={22} />
            </span>
            <div>
              <h1 className="text-white font-extrabold text-lg">Mock Test & PYQ Portal</h1>
              <p className="text-[11px] text-slate-300">ਟੈਸਟ ਪੋਰਟਲ — Historical labels under review & topic practice</p>
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
            <span>Take a topic practice set to diagnose your <strong>practice accuracy</strong>.</span>
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
                ⚡ Exam-specific practice sets
              </h2>
              <p className="text-[11px] text-teal-300">
                Practice settings • Historical labels under review • Exam-specific scoring
              </p>
            </div>
          </div>
          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-500/30">
            Up to 50 Qs
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Open the interactive drawer to configure your test by target exam (Master Cadre SST, PSSSB Clerk, Punjab Police, Patwari, REET, CTET) with Simple, Mid, or Hard questions.
        </p>

        <button
          onClick={() => openDrawerForExam(selectedExamForDrawer)}
          className="w-full bg-gradient-to-r from-teal-400 via-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 font-black py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition"
        >
          <SlidersHorizontal size={15} />
          <span>Open Exam Configurator</span>
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
              <span className="text-[9px] bg-teal-500/20 text-teal-300 font-bold px-1.5 py-0.5 rounded border border-teal-500/30 font-mono">Cloud AI drafts</span>
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
            1. Configure selected examination
          </h2>
          <span className="text-[10px] text-teal-400 font-semibold">Coverage under review</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2.5">
          {AVAILABLE_EXAMS.filter(exam => exam.id === selectedExamForDrawer).map(exam => (
            <button type="button"
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
                    {getQuestionPool({examId: exam.id}).length} available
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
            </button>
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
              Timed practice with clearly stated marking and answer review.
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

      </div></details>
      {/* Topic Filter Chips & Topic-Wise Tests */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
            Ready topic tests ({filteredTopics.length} Topics)
          </h2>
          <span className="text-[10px] text-teal-400 font-semibold">Topic availability below</span>
        </div>
        
        <label className="block text-sm mb-3">Find a topic / विषय खोजें / ਵਿਸ਼ਾ ਲੱਭੋ
          <input type="search" aria-label="Find a topic" value={topicSearch} onChange={event=>setTopicSearch(event.target.value)} placeholder="History, Science, Punjab…" className="block w-full rounded-lg bg-slate-800 p-3 mt-1" />
        </label>
        <label className="flex gap-2 text-xs text-slate-300 mb-3"><input type="checkbox" checked={showUnavailable} onChange={event=>setShowUnavailable(event.target.checked)} />Show topics still being prepared ({examTopics.filter(topic=>!topic.availableCount).length})</label>
        {!filteredTopics.length && <p role="status" className="p-4 text-amber-200">No ready tests match this selection. Try another subject or clear the search. Topics still being prepared have no usable questions yet.</p>}
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
                    {false && topic.isPYQRich && (
                      <span className="bg-emerald-500/20 text-emerald-300 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                        <Calendar size={10} /> 20-Yr Archive
                      </span>
                    )}
                    <span className="text-teal-400 text-[10px] font-semibold">
                      {topic.availableCount} available questions
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

              {/* Multi-Set 50-Q Pills when topic has > 50 questions */}
              {topic.availableCount > 50 && (
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
                  <span className="text-[10px] font-bold text-slate-400 shrink-0">50-Q Sets:</span>
                  {Array.from({ length: Math.min(Math.ceil(topic.availableCount / 50), 8) }, (_, idx) => {
                    const sNum = idx + 1;
                    const startQ = (sNum - 1) * 50 + 1;
                    const endQ = Math.min(sNum * 50, topic.availableCount);
                    return (
                      <button
                        key={sNum}
                        onClick={() => startTopicTest(topic.id, 'exam', false, sNum)}
                        className="px-2 py-1 rounded-md text-[10px] font-bold shrink-0 bg-slate-900 hover:bg-teal-500 text-teal-300 hover:text-slate-950 border border-teal-500/40 transition"
                      >
                        Set {sNum} ({startQ}–{endQ})
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-700/60">
                <button
                  disabled={!topic.availableCount}
                  onClick={() => startTopicTest(topic.id, 'exam', false, 1)}
                  className="flex-1 bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-slate-950 border border-teal-500/40 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Play size={12} /> {topic.availableCount ? `Start ${Math.min(questionCount, topic.availableCount)} questions` : 'Questions coming soon'}
                </button>
                <button
                  disabled={!topic.availableCount}
                  onClick={() => startTopicTest(topic.id, 'flip', false, 1)}
                  className="flex-1 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/40 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Layers size={12} /> Flip cards
                </button>
                <Link
                  href={`/lesson/${topic.id}?exam=${selectedExamForDrawer}`}
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
        onExamChange={setSelectedExamForDrawer}
      />

    </div>
  );
}
