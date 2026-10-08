'use client';
import { normalizePracticeExamId } from '@/lib/exam-context';
import { completedQuestionKeys, rememberCompletedQuestions } from '@/lib/practice-history';
import QuestionSyllabusScope from '@/components/ui/QuestionSyllabusScope';
import { useStore } from '@/lib/store';
import { rememberQuestions, savedReviewQuestions } from '@/lib/question-vault';
import { recordStudyActivity } from '@/lib/study-progress';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Clock, CheckCircle2, ChevronRight, ChevronLeft, AlertCircle, Layers, RotateCw, Award, Brain, ShieldAlert } from 'lucide-react';
import { Question } from '@/lib/data/questions';
import { getQuestionPool, getTestQuestions, evaluateUserLevel, calculatePredictedRank, AVAILABLE_TEST_TOPICS, AVAILABLE_EXAMS } from '@/lib/data/question_bank_engine';
import { computeScore, computeTopicBreakdown } from '@/lib/scoring';
import { CardRating, reviewCard, loadSRSStates, saveSRSStates, createNewCard, getSRSSummary } from '@/lib/srs';

export default function MockTest({ testId }: { testId?: string }) {
  const router = useRouter();
  const searchKey = useSearchParams().toString();

  const deadlineRef = useRef(0);
  const attemptKeyRef = useRef('');
  const submitRef = useRef<() => void>(() => {});
  const submittingRef = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const { language: lang, setLanguage: setLang } = useStore();
  const [mode, setMode] = useState<'exam' | 'flip'>('exam');
  const [isFlipped, setIsFlipped] = useState(false);
  const [srsSummary, setSrsSummary] = useState({ due: 0, new_: 0, learning: 0, review: 0 });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [testTitle, setTestTitle] = useState('Master Cadre & State CBT Mock Test');
  const [secondsRemaining, setSecondsRemaining] = useState(45 * 60);
  const [totalTimeSeconds, setTotalTimeSeconds] = useState(45 * 60);
  const [, setIsSubmitting] = useState(false);
  const [activeExamId, setActiveExamId] = useState<string>('master-cadre-sst');
  const [activeDifficulty, setActiveDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [sourceConfig, setSourceConfig] = useState({ count: 50, pyq20Years: false, pyqOnly: false });
  const [loadError, setLoadError] = useState(false);

  // Initialize test configuration and questions
  useEffect(() => {
    submittingRef.current = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Reset the browser attempt when URL configuration changes.
    setUserAnswers({}); setMarkedForReview({}); setQIndex(0); setIsFlipped(false);
    let topicId = 'all';
    let count = 50;
    let minutes: number | undefined;
    let pyqOnly = false;
    let pyq20Years = false;
    let requestedMode: 'exam' | 'flip' = 'exam';
    let examId: string | undefined = undefined;
    let difficulty: 'all' | 'easy' | 'medium' | 'hard' = 'all';

    // 1. Read URL query parameters (Client-side safe for static export)
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('exam')) examId = searchParams.get('exam')!;
      if (searchParams.get('diff')) difficulty = searchParams.get('diff') as 'easy' | 'medium' | 'hard';
      if (searchParams.get('count')) {
        const parsed = parseInt(searchParams.get('count')!, 10);
        if (!isNaN(parsed)) count = parsed;
      }
      if (searchParams.get('pyq') === '20y') {
        pyq20Years = true;
      }
      if (searchParams.get('mode') === 'flip' || searchParams.get('mode') === 'exam') {
        requestedMode = searchParams.get('mode') as 'exam' | 'flip';
      }
    }

    // 2. Check testId parameter
    if (testId) {
      if (testId.startsWith('topic-')) {
        topicId = testId.replace('topic-', '');
      } else if (testId === 'clerk') {
        topicId = 'punjab-clerk-prep';
        examId = 'clerk-psssb';
      } else if (testId === 'patwari') {
        topicId = 'punjab-patwari-prep';
        examId = 'patwari-punjab';
      } else if (testId === 'punjab-master-cadre') {
        topicId = 'all';
        examId = 'master-cadre-sst';
        count = 50;
      }
    }

    // 3. Override with custom session config if present
    try {
      const storedConfig = studyStorage.getItem('examsathi_test_config');
      if (storedConfig) {
        const parsed = JSON.parse(storedConfig);
        studyStorage.removeItem('examsathi_test_config');
        if (parsed.topicId && !testId?.startsWith('topic-')) topicId = parsed.topicId;
        if (Number.isFinite(parsed.timeLimitMinutes)) minutes = parsed.timeLimitMinutes;
        if (parsed.count) count = parsed.count;
        if (parsed.mode) requestedMode = parsed.mode;
        if (parsed.pyqOnly !== undefined) pyqOnly = parsed.pyqOnly;
        if (parsed.pyq20Years !== undefined) pyq20Years = parsed.pyq20Years;
        if (parsed.examId) examId = parsed.examId;
        if (parsed.difficulty) difficulty = parsed.difficulty;
      }
    } catch {
      // Fallback
    }

    const query = new URLSearchParams(window.location.search);
    if (query.has('mode')) requestedMode = query.get('mode') === 'flip' ? 'flip' : 'exam';
    if (query.has('exam')) examId = query.get('exam') || undefined;
    else if (!examId) examId = useStore.getState().selectedExam || undefined;
    if (examId && examId !== 'all') examId = normalizePracticeExamId(examId);
    if (query.has('pyq')) { pyq20Years = query.get('pyq') === '20y'; pyqOnly = query.get('pyq') === 'only'; }
    if (query.has('diff')) difficulty = ['easy', 'medium', 'hard'].includes(query.get('diff') || '') ? query.get('diff') as 'easy' | 'medium' | 'hard' : 'all';
    if (query.has('count')) count = Math.max(1, Math.min(150, Number(query.get('count')) || 50));
    if (query.has('minutes')) minutes = Math.max(1, Math.min(180, Number(query.get('minutes')) || 45));
    setMode(requestedMode);
    if (examId) setActiveExamId(examId);
    setActiveDifficulty(difficulty);

    // 4. Derive title
    const examMeta = AVAILABLE_EXAMS.find(e => e.id === examId);
    const topicMeta = AVAILABLE_TEST_TOPICS.find(t => t.id === topicId);

    const diffLabel = difficulty === 'easy' ? ' (Simple)' : difficulty === 'medium' ? ' (Mid)' : difficulty === 'hard' ? ' (Hard)' : '';

    if (examMeta) {
      setTestTitle(`${examMeta.name} — ${count} Qs Set${diffLabel}`);
    } else if (topicMeta) {
      setTestTitle(pyqOnly || pyq20Years ? `${topicMeta.name} — Historical labels (unverified)${diffLabel}` : `${topicMeta.name}${diffLabel}`);
    } else if (pyq20Years) {
      setTestTitle(`Historical practice archive (provenance under review)${diffLabel}`);
    } else {
      setTestTitle(`Topic Practice Set${diffLabel}`);
    }

    setSourceConfig({ count, pyq20Years, pyqOnly });
    // 5. Fetch questions from Question Bank Engine
    let loadedQuestions = getTestQuestions({ 
      topicId, 
      examId,
      difficulty,
      pyq20Years,
      pyqOnly, 
      count,
      excludeKeys: requestedMode === 'exam' && query.get('repeat') !== '1' ? completedQuestionKeys() : [],
    });
    // Check custom AI-generated question drill from sessionStorage
    if (topicId === 'ai-custom') {
      try {
        const rawCustom = studyStorage.getItem('examsathi_custom_cbt_questions');
        if (rawCustom) {
          const parsed = JSON.parse(rawCustom);
          if (Array.isArray(parsed) && parsed.length > 0) {
            loadedQuestions = parsed;
            setActiveExamId('custom-notes');
            setTestTitle(`Custom Practice — ${parsed.length} Saved Questions`);
          }
        }
      } catch {}
    }

    // Saved reviews are independent of today's bank or filter availability.
    const reviewId = query.get('review');
    const review = reviewId ? savedReviewQuestions(reviewId) : null;
    if (review) {
      loadedQuestions = review.questions;
      if (review.testTitle) setTestTitle(review.testTitle);
      if (review.examId) setActiveExamId(review.examId);
    }
    if (loadedQuestions.length > 0) {
      if (examMeta && !review) setTestTitle(`${examMeta.name} — ${loadedQuestions.length} questions${diffLabel}`);
      rememberQuestions(loadedQuestions);
    setQuestions(loadedQuestions);
      setLoaded(true);
      setLoadError(false);
      const allocatedSeconds = minutes !== undefined ? Math.max(60, Math.min(10800, Math.round(minutes * 60))) : Math.max(300, loadedQuestions.length * 54);
      setTotalTimeSeconds(allocatedSeconds);
      setSecondsRemaining(allocatedSeconds);
      deadlineRef.current = Date.now() + allocatedSeconds * 1000;
      attemptKeyRef.current = `examsathi_active_attempt_${testId}_${window.location.search}`;
      if (requestedMode === 'exam' && !query.has('review')) {
        try {
          const saved = JSON.parse(studyStorage.getItem(attemptKeyRef.current) || 'null');
          const eligibleIds = new Set(getQuestionPool({ examId, topicId, difficulty, pyqOnly, pyq20Years }).map(q => q.id));
          const validScope = saved?.questions?.every((q: Question) => topicId === 'ai-custom' || eligibleIds.has(q.id));
          if (validScope && saved?.questions?.length && Number.isFinite(saved.deadline) && Number.isFinite(saved.totalTime)) {
            setQuestions(saved.questions);
            setUserAnswers(saved.answers || {});
            setMarkedForReview(saved.marked || {});
            setQIndex(Math.min(saved.index || 0, saved.questions.length - 1));
            setTotalTimeSeconds(saved.totalTime);
            deadlineRef.current = saved.deadline;
            setSecondsRemaining(Math.max(0, Math.ceil((saved.deadline - Date.now()) / 1000)));
          }
        } catch { /* A corrupt draft starts a fresh attempt. */ }
      }
    } else {
      setQuestions([]);
      setLoaded(true);
      setLoadError(false);
    }
  }, [testId, searchKey]);

  // Refresh SRS summary whenever questions load or mode switches to flip
  useEffect(() => {
    if (mode !== 'flip' || questions.length === 0) return;
    const ids = questions.map(q => q.id);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate client-only browser data after mount; this bounded effect does not update its own dependencies.
    setSrsSummary(getSRSSummary(ids));
  }, [mode, questions]);

  // Countdown timer in exam mode
  useEffect(() => {
    if (mode !== 'exam' || questions.length === 0) return;

    const tick = () => {
      const remaining = Math.max(0, Math.ceil((deadlineRef.current - Date.now()) / 1000));
      setSecondsRemaining(remaining);
      if (remaining === 0) submitRef.current();
    };
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [mode, questions]);

  useEffect(() => {
    if (!loaded || mode !== 'exam' || !questions.length || submittingRef.current) return;
    try { studyStorage.setItem(attemptKeyRef.current, JSON.stringify({ questions, answers: userAnswers, marked: markedForReview, index: qIndex, deadline: deadlineRef.current, totalTime: totalTimeSeconds })); } catch { /* Storage may be unavailable; the current attempt remains playable. */ }
  }, [loaded, mode, questions, userAnswers, markedForReview, qIndex, totalTimeSeconds]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[qIndex] || questions[0];

  const handleSelectOption = (key: string) => {
    if (!currentQuestion) return;
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: key }));
  };

  const handleClearOption = () => {
    if (!currentQuestion) return;
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  const handleToggleReview = () => {
    if (!currentQuestion) return;
    setMarkedForReview(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  const handleSubmitTest = () => {
    recordStudyActivity();
    if (submittingRef.current || questions.length === 0) return;
    submittingRef.current = true;
    setIsSubmitting(true);

    const examMeta = AVAILABLE_EXAMS.find(e => e.id === activeExamId);
    const correctAnswers = questions.reduce<Record<string, string>>(
      (acc, q) => ({ ...acc, [q.id]: q.correct }),
      {}
    );
    const config = {
      marksPerQuestion: 1,
      negativeMarking: activeExamId === 'custom-notes' ? 0 : examMeta?.negativeMarking ?? 0.25,
      totalQuestions: questions.length,
    };
    const timeTaken = Math.min(totalTimeSeconds, Math.max(0, totalTimeSeconds - Math.ceil((deadlineRef.current - Date.now()) / 1000)));
    const scored = computeScore(correctAnswers, userAnswers, config, timeTaken);
    const topicBreakdown = computeTopicBreakdown(
      questions.map(q => ({ id: q.id, topicId: q.topicId || 'general' })),
      correctAnswers,
      userAnswers
    );

    const levelInfo = evaluateUserLevel(scored.percentage, scored.accuracy);
    const predictedRank = calculatePredictedRank(scored.percentage, scored.rawScore, questions.length);

    const resultPayload = {
      attemptId: crypto.randomUUID(),
      scoringConfig: config,
      sourceConfig,
      testId: testId || 'custom',
      testTitle,
      examId: activeExamId,
      difficulty: activeDifficulty,
      total: scored.total,
      correct: scored.correct,
      wrong: scored.wrong,
      unattempted: scored.unattempted,
      rawScore: scored.rawScore.toFixed(2),
      percentage: scored.percentage,
      accuracy: scored.accuracy,
      timeTaken,
      level: levelInfo,
      predictedRank,
      topicBreakdown,
      questions,
      userAnswers,
      completedAt: new Date().toISOString(),
    };

    try {
      rememberCompletedQuestions(questions);
      studyStorage.setItem('examsathi_last_result', JSON.stringify(resultPayload));
      studyStorage.setItem(`examsathi_result_${resultPayload.attemptId}`, JSON.stringify(resultPayload));
    } catch {}

    // Append to history
    try {
      const historyRaw = studyStorage.getItem('examsathi_mock_history') || '[]';
      const history = JSON.parse(historyRaw);
      history.unshift({
        attemptId: resultPayload.attemptId,
        testTitle: testTitle,
        completedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        percentage: scored.percentage,
        correct: scored.correct,
        total: scored.total,
      });
      // Keep only last 20 attempts
      studyStorage.setItem('examsathi_mock_history', JSON.stringify(history.slice(0, 20)));
    } catch {}

    studyStorage.removeItem(attemptKeyRef.current);
    router.push(`/results/latest/?attempt=${resultPayload.attemptId}`);
  };

  useEffect(() => { submitRef.current = handleSubmitTest; });

  if (loaded && questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-6 text-center">
        <div className="text-5xl">📚</div>
        <h2 className="text-white font-bold text-lg">No questions match these filters</h2>
        <p className="text-slate-400 text-sm max-w-xs">
          No matching questions are available yet. Choose a different difficulty or practice pool; we never fill this set with unrelated questions.
        </p>
        <Link href="/mock-test" className="bg-teal-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-teal-400 transition">
          ← Browse All Mock Tests
        </Link>
      </div>
    );
  }

  if (!currentQuestion) {
    if (loadError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-100 p-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/30 shadow-lg">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-base font-bold text-white mb-1">
            Question Loading Timed Out / प्रश्न लोड करने में विलंब
          </h2>
          <p className="text-xs text-slate-400 mb-6 max-w-sm leading-relaxed">
            The question set for this topic took too long to assemble. You can load our standard 50-question simulation directly or retry.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <button
              onClick={() => {
                setLoadError(false);
                const fallback = getTestQuestions({ topicId: 'all', count: 50 });
                setQuestions(fallback);
              }}
              className="flex-1 bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-90 text-slate-950 font-bold text-xs py-3 px-4 rounded-xl transition shadow"
            >
              Load 50-Q Comprehensive Drill
            </button>
            <button
              onClick={() => {
                setLoadError(false);
                const loaded = getTestQuestions({ topicId: testId?.replace('topic-', '') || 'all', count: 50 });
                if (loaded && loaded.length > 0) {
                  setQuestions(loaded);
                } else {
                  const fallback = getTestQuestions({ topicId: 'all', count: 50 });
                  setQuestions(fallback);
                }
              }}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs py-3 px-4 rounded-xl transition"
            >
              Retry Loading Topic
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-100 p-6 text-center">
        <div className="animate-spin text-teal-400 mb-4">
          <RotateCw size={36} />
        </div>
        <h2 className="text-base font-bold text-white mb-1">Generating 50-Question CBT Set...</h2>
        <p className="text-xs text-slate-400 mb-4 max-w-xs">
          Loading topic questions, past year archives, and verifying answer keys.
        </p>
        <button
          onClick={() => {
            const fallback = getTestQuestions({ topicId: 'all', count: 50 });
            setQuestions(fallback);
          }}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2 rounded-xl transition"
        >
          Load Practice Set Directly
        </button>
      </div>
    );
  }

  const difficultyBadge = currentQuestion.difficulty === 'easy'
    ? { label: 'Simple 🟢', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' }
    : currentQuestion.difficulty === 'hard'
    ? { label: 'Hard 🔴', color: 'bg-rose-500/15 text-rose-300 border-rose-500/30' }
    : { label: 'Mid 🟡', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };

  const activeExamMeta = AVAILABLE_EXAMS.find(e => e.id === activeExamId);

  return (
    <div className="flex flex-col h-screen bg-slate-900 pb-safe text-slate-100">

      <QuestionSyllabusScope topicId={currentQuestion.topicId} />
      {/* Exam Pattern Info Banner */}
      {loaded && questions.length > 0 && activeExamMeta && (
        <div className="bg-amber-950/40 border-b border-amber-700/40 px-3 py-1.5 flex items-center gap-2 text-[10px] text-amber-200 shrink-0">
          <ShieldAlert size={12} className="text-amber-400 shrink-0" />
          <span>
            <span className="font-bold text-amber-300">⚠️ Negative marking:</span>
            {' '}-{activeExamMeta.negativeMarking} per wrong answer
            {' '}|{' '}
            <span className="font-semibold">Total:</span> {questions.length} Qs
            {' '}|{' '}
            <span className="font-semibold">{Math.round(totalTimeSeconds / 60)} minutes</span>
            {activeExamMeta.negativeMarking === 0 && (
              <span className="ml-1 text-emerald-300 font-bold">✓ No negative marking</span>
            )}
          </span>
        </div>
      )}

      {/* Top Test Header Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800 p-3.5 flex justify-between items-center shrink-0">
        <div className="min-w-0 pr-2">
          <h1 className="text-white font-bold text-xs truncate max-w-[210px]">
            {testTitle}
          </h1>
          <p className="text-[10px] text-slate-400">
            {questions.length} Questions • {mode === 'exam' ? 'Exam Mode (Practice scoring)' : '3D Flip Card Practice'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <button
            onClick={() => {
              router.push('/mock-test');
              setIsFlipped(false);
            }}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold border flex items-center gap-1 transition ${
              mode === 'flip'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
            }`}
            title="Switch between Exam CBT mode and 3D Flip Card mode"
          >
            <Layers size={12} />
            {mode === 'exam' ? 'Exit CBT' : 'Exit Flip'}
          </button>

          {/* Lang toggle */}
          <div className="flex bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            <button 
              onClick={() => setLang('hi')} 
              className={`px-1.5 py-0.5 text-[10px] font-semibold rounded ${lang === 'hi' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              हिं
            </button>
            <button 
              onClick={() => setLang('pa')} 
              className={`px-1.5 py-0.5 text-[10px] font-semibold rounded ${lang === 'pa' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              ਪੰ
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-1.5 py-0.5 text-[10px] font-semibold rounded ${lang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>

          {/* Timer (Exam Mode) */}
          {mode === 'exam' && (
            <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg border border-slate-700">
              <Clock size={13} className={secondsRemaining < 180 ? 'text-rose-400 animate-pulse' : 'text-amber-400'} />
              <span className={`font-mono text-xs font-bold ${secondsRemaining < 180 ? 'text-rose-400' : 'text-white'}`}>
                {formatTimer(secondsRemaining)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Question Palette Bar */}
      <div className="bg-slate-800/80 p-2 border-b border-slate-700/80 flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
        {questions.map((q, idx) => {
          const isCurrent = idx === qIndex;
          const isAnswered = Boolean(userAnswers[q.id]);
          const isMarked = Boolean(markedForReview[q.id]);

          let btnColor = 'bg-slate-700 text-slate-300';
          if (isCurrent) {
            btnColor = 'bg-indigo-500 text-white ring-2 ring-indigo-300 shadow';
          } else if (isMarked) {
            btnColor = 'bg-amber-500 text-white';
          } else if (isAnswered) {
            btnColor = 'bg-emerald-600 text-white';
          }

          return (
            <button 
              key={q.id} 
              onClick={() => {
                setQIndex(idx);
                setIsFlipped(false);
              }} 
              className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center font-bold text-[11px] transition-all ${btnColor}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Main Content: Dual Mode Switch (Exam CBT vs 3D Flip Card) */}
      <div className="p-4 flex-1 overflow-y-auto max-w-xl mx-auto w-full">
        {mode === 'exam' ? (
          // ==================== MODE 1: EXAM CBT ====================
          <div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2 gap-2 flex-wrap">
                <span className="text-teal-400 font-bold text-xs">
                  Question {qIndex + 1} of {questions.length}
                </span>
                
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] px-2 py-0.5 rounded border font-bold ${difficultyBadge.color}`}>
                    {difficultyBadge.label}
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded truncate max-w-[190px]">
                    {currentQuestion.examTag || 'Practice question — source unverified'} {currentQuestion.year ? `(${currentQuestion.year})` : ''}
                  </span>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-white mb-1 leading-relaxed">
                {currentQuestion.question[lang] || currentQuestion.question.hi || currentQuestion.question.en}
              </h3>
              {lang !== 'en' && currentQuestion.question.en && (
                <h4 className="text-xs text-slate-400 mt-1 italic">{currentQuestion.question.en}</h4>
              )}
            </div>

            {/* Options */}
            <div className="flex flex-col gap-2.5">
              {(['A', 'B', 'C', 'D'] as const).map(key => {
                const opt = currentQuestion.options[key];
                if (!opt) return null;
                const isSelected = userAnswers[currentQuestion.id] === key;

                return (
                  <button 
                    key={key} 
                    aria-pressed={isSelected}
                    onClick={() => handleSelectOption(key)}
                    className={`w-full text-left p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                      isSelected 
                        ? 'bg-indigo-600/20 border-indigo-500 shadow-md ring-1 ring-indigo-500' 
                        : 'bg-slate-800/80 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {key}
                    </div>
                    <div className="text-xs">
                      <p className="text-white font-medium">{opt[lang] || opt.hi || opt.en}</p>
                      {lang !== 'en' && opt.en && <p className="text-slate-400 text-[10px] mt-0.5">{opt.en}</p>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          // ==================== MODE 2: 3D FLIP CARD ====================
          <div className="flex flex-col items-center justify-center h-full gap-4">
            {/* SRS Progress Indicator */}
            <div className="w-full flex items-center justify-center gap-3 text-[11px] bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-1.5">
              <span className="text-slate-400">📅</span>
              <span className="text-amber-400"><strong>{srsSummary.due}</strong> due today</span>
              <span className="text-slate-600">|</span>
              <span className="text-blue-400"><strong>{srsSummary.learning}</strong> learning</span>
              <span className="text-slate-600">|</span>
              <span className="text-green-400"><strong>{srsSummary.review}</strong> review</span>
            </div>

            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="cursor-pointer w-full min-h-[320px] bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between shadow-xl relative hover:border-amber-500/50 transition"
            >
              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    {isFlipped ? 'Answer & Strategic Analysis' : 'Question Card (Tap to Flip)'}
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.2 rounded border font-bold ${difficultyBadge.color}`}>
                    {difficultyBadge.label}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">Card {qIndex + 1} of {questions.length}</span>
              </div>

              {!isFlipped ? (
                // Front: Question & Options Preview
                <div className="my-auto py-3">
                  <h3 className="text-sm font-bold text-white mb-3 leading-relaxed">
                    {currentQuestion.question[lang] || currentQuestion.question.hi || currentQuestion.question.en}
                  </h3>
                  
                  <div className="space-y-1.5 opacity-80 text-xs text-slate-300">
                    {(['A', 'B', 'C', 'D'] as const).map(key => {
                      const opt = currentQuestion.options[key];
                      if (!opt) return null;
                      return (
                        <div key={key} className="p-2 bg-slate-900/60 rounded-lg border border-slate-800 flex items-center gap-2">
                          <span className="w-4 h-4 bg-slate-700 rounded-full flex items-center justify-center text-[10px] font-bold">
                            {key}
                          </span>
                          <span className="truncate">{opt[lang] || opt.hi || opt.en}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                // Back: Correct Answer, Explanation & Examiner Thought
                <div className="my-auto py-2 space-y-2.5">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold">
                    <CheckCircle2 size={14} /> Correct Option: ({currentQuestion.correct})
                  </div>
                  <h4 className="text-white font-bold text-xs">
                    {currentQuestion.options[currentQuestion.correct]?.[lang] || currentQuestion.options[currentQuestion.correct]?.hi}
                  </h4>
                  
                  {/* Detailed Explanation */}
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700 text-xs text-slate-300 leading-relaxed">
                    <span className="text-amber-400 font-bold block mb-1">Answer explanation:</span>
                    {currentQuestion.explanation[lang] || currentQuestion.explanation.hi || currentQuestion.explanation.en}
                  </div>

                  {/* Strategic Examiner Thought */}
                  {currentQuestion.thought && (
                    <div className="bg-indigo-950/40 p-3 rounded-xl border border-indigo-700/50 text-[11px] text-indigo-200 leading-relaxed">
                      <div className="flex items-center gap-1.5 text-indigo-300 font-bold mb-1">
                        <Brain size={13} className="text-teal-400" />
                        <span>🧠 Antigravity Strategic Thought (Examiner Mindset):</span>
                      </div>
                      <p>
                        {currentQuestion.thought[lang] || currentQuestion.thought.hi || currentQuestion.thought.en}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <RotateCw size={12} /> Tap card to flip
                </span>
                <span className="text-teal-400 font-semibold">{currentQuestion.examTag}</span>
              </div>
            </div>

            {/* FSRS Rating Buttons when flipped */}
            {isFlipped && (
              <div className="w-full grid grid-cols-4 gap-2">
                {([
                  { rating: 'again' as CardRating, label: '🔴 Again', cls: 'bg-rose-900/40 hover:bg-rose-800/60 border-rose-700/50 text-rose-300' },
                  { rating: 'hard'  as CardRating, label: '🟠 Hard',  cls: 'bg-amber-900/40 hover:bg-amber-800/60 border-amber-700/50 text-amber-300' },
                  { rating: 'good'  as CardRating, label: '🟢 Good',  cls: 'bg-emerald-900/40 hover:bg-emerald-800/60 border-emerald-700/50 text-emerald-300' },
                  { rating: 'easy'  as CardRating, label: '🔵 Easy',  cls: 'bg-indigo-900/40 hover:bg-indigo-800/60 border-indigo-700/50 text-indigo-300' },
                ] as const).map(({ rating, label, cls }) => (
                  <button
                    key={rating}
                    onClick={() => {
                      // Persist SRS state
                      const states = loadSRSStates();
                      const existing = states[currentQuestion.id] ?? createNewCard(currentQuestion.id);
                      const updated = reviewCard(existing, rating);
                      recordStudyActivity();
                      saveSRSStates({ ...states, [currentQuestion.id]: updated });
                      // Refresh summary badge
                      const ids = questions.map(q => q.id);
                      setSrsSummary(getSRSSummary(ids));
                      // Advance to next card
                      setIsFlipped(false);
                      setQIndex(prev => Math.min(questions.length - 1, prev + 1));
                    }}
                    className={`border text-xs px-3 py-1.5 rounded-full font-bold transition ${cls}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Navigation Actions */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 shrink-0">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-2">
          
          <div className="flex gap-2">
            {mode === 'exam' && (
              <>
                <button 
                  onClick={handleToggleReview}
                  className={`px-3 py-2 rounded-lg text-xs font-medium border transition ${
                    markedForReview[currentQuestion.id] 
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  {markedForReview[currentQuestion.id] ? 'Marked' : 'Mark Review'}
                </button>
                <button 
                  onClick={handleClearOption}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-2 rounded-lg text-xs text-slate-400"
                >
                  Clear
                </button>
              </>
            )}
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => {
                setQIndex(prev => Math.max(0, prev - 1));
                setIsFlipped(false);
              }}
              disabled={qIndex === 0}
              className="bg-slate-800 disabled:opacity-40 border border-slate-700 px-3 py-2 rounded-lg text-xs text-white flex items-center gap-1"
            >
              <ChevronLeft size={16} /> Prev
            </button>

            {qIndex < questions.length - 1 ? (
              <button 
                onClick={() => {
                  setQIndex(prev => prev + 1);
                  setIsFlipped(false);
                }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1 shadow"
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button 
                onClick={handleSubmitTest}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2 rounded-lg text-xs shadow-lg flex items-center gap-1"
              >
                <Award size={14} /> Submit & Check Level
              </button>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
