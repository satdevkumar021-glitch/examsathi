'use client';
import { normalizePracticeExamId, practiceExam } from '@/lib/exam-context';
import { 
  completedQuestionKeys, 
  recordServedQuestions,
  recordAnsweredQuestions,
  recordCompletedQuestions,
  resetLearnerExposure,
  explainResetBehavior,
} from '@/lib/practice-history';
import { getStoredUser } from '@/lib/auth';
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
import { getQuestionPool, getTestQuestions, getOrderedSetQuestions, evaluateUserLevel, calculatePredictedRank, AVAILABLE_TEST_TOPICS, AVAILABLE_EXAMS } from '@/lib/data/question_bank_engine';
import { computeScore, computeTopicBreakdown } from '@/lib/scoring';
import { CardRating, reviewCard, loadSRSStates, saveSRSStates, createNewCard, getSRSSummary } from '@/lib/srs';
import { recordQuizMistakes, updateTopicMastery } from '@/lib/mistake-notebook';

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
  const [isRevisionMode, setIsRevisionMode] = useState(false);
  const [isRemainingSubset, setIsRemainingSubset] = useState(false);
  const [totalPoolCount, setTotalPoolCount] = useState(0);
  const [currentTopicId, setCurrentTopicId] = useState('all');
  const [currentSetNumber, setCurrentSetNumber] = useState<number>(1);
  const [totalSetCount, setTotalSetCount] = useState<number>(1);
  const [instantFeedback, setInstantFeedback] = useState<boolean>(false);

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
      if (searchParams.get('topic')) topicId = searchParams.get('topic')!;
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
      } else if (testId === 'clerk' || testId === 'ppsc-clerk' || testId === 'punjab-clerk') {
        topicId = 'ppsc-clerk-mega';
        examId = 'punjab-clerk';
      } else if (testId === 'punjab-gk-punjabi') {
        topicId = 'punjab-gk-punjabi-mega';
        examId = 'all';
      } else if (testId === 'patwari') {
        topicId = 'punjab-patwari-prep';
        examId = 'patwari-punjab';
      } else if (testId === 'punjab-master-cadre' || testId === 'punjab-master-cadre-sst') {
        topicId = 'all';
        examId = 'punjab-master-cadre-sst';
        count = 50;
      } else if (testId === 'punjab-master-cadre-science') {
        topicId = 'all';
        examId = 'punjab-master-cadre-science';
        count = 50;
      } else if (testId === 'punjab-ett') {
        topicId = 'all';
        examId = 'punjab-ett';
        count = 50;
      }
    }

    // 3. Override with custom session config if present
    try {
      const storedConfig = studyStorage.getItem('examsathi_test_config') || (typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('examsathi_test_config') : null);
      if (storedConfig) {
        const parsed = JSON.parse(storedConfig);
        studyStorage.removeItem('examsathi_test_config');
        try { sessionStorage.removeItem('examsathi_test_config'); } catch {}
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
    if (query.has('topic')) topicId = query.get('topic') || topicId;
    if (query.has('mode')) requestedMode = query.get('mode') === 'flip' ? 'flip' : 'exam';
    if (query.has('exam')) examId = query.get('exam') || undefined;
    else if (!examId) examId = useStore.getState().selectedExam || undefined;
    if (examId && examId !== 'all') examId = normalizePracticeExamId(examId);
    if (topicId === 'punjab-gk-punjabi-mega') examId = 'all';
    if (topicId === 'ppsc-clerk-mega') examId = 'punjab-clerk';
    if (query.has('pyq')) { pyq20Years = query.get('pyq') === '20y'; pyqOnly = query.get('pyq') === 'only'; }
    if (query.has('diff')) difficulty = ['easy', 'medium', 'hard'].includes(query.get('diff') || '') ? query.get('diff') as 'easy' | 'medium' | 'hard' : 'all';
    if (query.has('count')) count = Math.max(1, Math.min(150, Number(query.get('count')) || 50));
    if (query.has('minutes')) minutes = Math.max(1, Math.min(180, Number(query.get('minutes')) || 45));
    setMode(requestedMode);
    if (examId) setActiveExamId(examId === 'all' ? 'punjab-clerk' : examId);
    setActiveDifficulty(difficulty);

    const setParam = query.get('set');
    const numericSet = setParam && /^\d+$/.test(setParam) ? parseInt(setParam, 10) : 0;
    const isFreshRequested = query.get('fresh') === '1' || numericSet >= 1;
    const isRevision = requestedMode === 'flip' || query.get('repeat') === '1' || query.get('mode') === 'revision';
    setIsRevisionMode(isRevision);
    setCurrentTopicId(topicId);

    // Resolve pool and automatic fallbacks so a mismatched stored exam or difficulty never causes 0 questions
    let effectiveExamForPool = examId === 'all' ? undefined : examId;
    let fullPool = getQuestionPool({ topicId, examId: effectiveExamForPool, difficulty, pyq20Years, pyqOnly });
    if (fullPool.length === 0 && topicId !== 'all' && effectiveExamForPool) {
      effectiveExamForPool = undefined;
      fullPool = getQuestionPool({ topicId, difficulty, pyq20Years, pyqOnly });
    }
    if (fullPool.length === 0 && difficulty !== 'all') {
      difficulty = 'all';
      fullPool = getQuestionPool({ topicId, examId: effectiveExamForPool, difficulty: 'all', pyq20Years, pyqOnly });
    }
    if (fullPool.length === 0 && (pyq20Years || pyqOnly)) {
      pyq20Years = false;
      pyqOnly = false;
      fullPool = getQuestionPool({ topicId, examId: effectiveExamForPool, difficulty });
    }

    // 4. Derive title
    const examMeta = AVAILABLE_EXAMS.find(e => e.id === examId);
    const topicMeta = AVAILABLE_TEST_TOPICS.find(t => t.id === topicId);
    const diffLabel = difficulty === 'easy' ? ' (Simple)' : difficulty === 'medium' ? ' (Mid)' : difficulty === 'hard' ? ' (Hard)' : '';

    setSourceConfig({ count, pyq20Years, pyqOnly });

    // 5. Fetch questions from Question Bank Engine (deterministic Set 1..N or standard pool)
    let loadedQuestions: Question[] = [];
    if (numericSet >= 1 || topicId === 'ppsc-clerk-mega' || topicId === 'punjab-gk-punjabi-mega') {
      const ordered = getOrderedSetQuestions({
        topicId,
        examId: effectiveExamForPool,
        difficulty,
        pyq20Years,
        pyqOnly,
        count,
        setNumber: numericSet || 1,
      });
      loadedQuestions = ordered.questions;
      setCurrentSetNumber(ordered.setNumber);
      setTotalSetCount(ordered.totalSets);
      setTotalPoolCount(ordered.totalPoolCount);
      setIsRemainingSubset(false);
    } else {
      setTotalPoolCount(fullPool.length);
      const computedTotalSets = Math.max(1, Math.ceil(fullPool.length / count));
      setTotalSetCount(computedTotalSets);
      setCurrentSetNumber(1);
      loadedQuestions = getTestQuestions({ 
        topicId, 
        examId: effectiveExamForPool,
        difficulty,
        pyq20Years,
        pyqOnly, 
        count,
        excludeKeys: (isRevision || isFreshRequested) ? [] : completedQuestionKeys(),
      });
      // Never block the user with 0 questions if the pool has questions
      if (loadedQuestions.length === 0 && fullPool.length > 0) {
        const orderedFallback = getOrderedSetQuestions({
          topicId,
          examId: effectiveExamForPool,
          difficulty,
          pyq20Years,
          pyqOnly,
          count,
          setNumber: 1,
        });
        loadedQuestions = orderedFallback.questions;
        setIsRevisionMode(true);
      }
      if (!isRevision && !isFreshRequested && loadedQuestions.length > 0 && loadedQuestions.length < count && fullPool.length > count) {
        setIsRemainingSubset(true);
      } else {
        setIsRemainingSubset(false);
      }
    }

    const setBadge = (numericSet >= 1 || topicId === 'ppsc-clerk-mega' || topicId === 'punjab-gk-punjabi-mega')
      ? ` • Set ${numericSet || 1}`
      : '';

    if (topicId === 'ppsc-clerk-mega') {
      setTestTitle(`Punjab PPSC & PSSSB Clerk Live Mock${setBadge} (${loadedQuestions.length} Qs)`);
    } else if (topicId === 'punjab-gk-punjabi-mega') {
      setTestTitle(`Punjab GK & Punjabi Special Live Mock${setBadge} (${loadedQuestions.length} Qs)`);
    } else if (topicMeta) {
      setTestTitle(`${topicMeta.name}${setBadge}${diffLabel}`);
    } else if (examMeta && topicId === 'all') {
      setTestTitle(`${examMeta.name}${setBadge} — ${loadedQuestions.length || count} Qs${diffLabel}`);
    } else if (topicId !== 'all') {
      const cleanTopic = topicId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      setTestTitle(`${cleanTopic}${setBadge} (${loadedQuestions.length || count} Qs)${diffLabel}`);
    } else {
      setTestTitle(`Topic Practice Set${setBadge}${diffLabel}`);
    }

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
      rememberQuestions(loadedQuestions);
      const learnerId = getStoredUser().id || 'usr-default';
      const targetExamId = (examId && examId !== 'all') ? examId : 'punjab-clerk';
      recordServedQuestions(learnerId, targetExamId, loadedQuestions);
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
          const eligibleIds = new Set(loadedQuestions.map(q => q.id));
          const validScope = saved?.questions?.length === loadedQuestions.length && saved?.questions?.every((q: Question) => topicId === 'ai-custom' || eligibleIds.has(q.id));
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
    const learnerId = getStoredUser().id || 'usr-default';
    recordAnsweredQuestions(learnerId, activeExamId, [currentQuestion.id]);
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

    const canonicalId = normalizePracticeExamId(activeExamId);
    const pExam = practiceExam(activeExamId);
    const examMeta = AVAILABLE_EXAMS.find(e => e.id === canonicalId || e.id === activeExamId);
    const resolvedPenalty = () => {
      if (activeExamId === 'custom-notes') return 0;
      if (pExam) {
        if (typeof pExam.negativeMarking === 'number') return pExam.negativeMarking;
        if (pExam.negativeMarking === false) return 0;
        if (pExam.negativeMarking === true) return 0.25;
      }
      if (examMeta && typeof examMeta.negativeMarking === 'number') {
        return examMeta.negativeMarking;
      }
      return 0;
    };
    const correctAnswers = questions.reduce<Record<string, string>>(
      (acc, q) => ({ ...acc, [q.id]: q.correct }),
      {}
    );
    const config = {
      marksPerQuestion: 1,
      negativeMarking: resolvedPenalty(),
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
      setNumber: currentSetNumber,
      totalSets: totalSetCount,
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
      const learnerId = getStoredUser().id || 'usr-default';
      recordCompletedQuestions(learnerId, activeExamId, questions);
      recordQuizMistakes(learnerId, activeExamId, questions, userAnswers);

      for (const breakdown of topicBreakdown) {
        if (breakdown.topicId) {
          updateTopicMastery({
            topicId: breakdown.topicId,
            examId: activeExamId,
            action: 'quiz_result',
            quizStats: {
              correct: breakdown.correct,
              total: breakdown.total,
            },
          });
        }
      }

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
    const learnerId = getStoredUser().id || 'usr-default';
    const isExhausted = totalPoolCount > 0 && !isRevisionMode;
    if (isExhausted) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-6 text-center max-w-md mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 shadow-lg">
            <CheckCircle2 size={36} />
          </div>
          <h2 className="text-white font-bold text-xl">Question Bank Fully Explored</h2>
          <p className="text-amber-300/90 text-sm font-medium">ਸਾਰੇ ਉਪਲਬਧ ਪ੍ਰਸ਼ਨ ਹੱਲ ਕੀਤੇ ਜਾ ਚੁੱਕੇ ਹਨ</p>
          <p className="text-slate-300 text-xs leading-relaxed">
            You have completed all {totalPoolCount} available questions in this syllabus bank. We never inflate counts or serve duplicate questions in fresh mock sets.
          </p>
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 text-left w-full text-[11px] text-slate-400 space-y-1">
            <div className="font-semibold text-slate-200">Exposure Policy:</div>
            <div>{explainResetBehavior(lang as 'en' | 'hi' | 'pa')}</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
            <button
              onClick={() => {
                const search = new URLSearchParams(window.location.search);
                search.set('mode', 'revision');
                search.set('repeat', '1');
                router.push(`${window.location.pathname}?${search.toString()}`);
              }}
              className="flex-1 bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-90 text-slate-950 font-bold text-xs py-3 px-4 rounded-xl transition shadow"
            >
              Start Revision Mode 🔁
            </button>
            <button
              onClick={() => {
                resetLearnerExposure(learnerId, activeExamId);
                window.location.reload();
              }}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs py-3 px-4 rounded-xl transition"
            >
              Reset Exposure History 🔄
            </button>
          </div>
          <Link href="/mock-test" className="text-xs text-slate-400 hover:text-white transition mt-2">
            ← Browse Other Mock Tests
          </Link>
        </div>
      );
    }

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
            The question set for this scoped syllabus could not be assembled in time. You can retry assembling the scoped pool or return to the directory.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <button
              onClick={() => {
                setLoadError(false);
                const loaded = getTestQuestions({ 
                  topicId: currentTopicId,
                  examId: activeExamId,
                  difficulty: activeDifficulty,
                  count: sourceConfig.count,
                  excludeKeys: isRevisionMode ? [] : completedQuestionKeys(),
                });
                if (loaded && loaded.length > 0) {
                  setQuestions(loaded);
                } else {
                  router.push('/mock-test');
                }
              }}
              className="flex-1 bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-90 text-slate-950 font-bold text-xs py-3 px-4 rounded-xl transition shadow"
            >
              Retry Scoped Pool
            </button>
            <Link
              href="/mock-test"
              className="flex-1 text-center bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs py-3 px-4 rounded-xl transition flex items-center justify-center"
            >
              Browse Mock Tests
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-100 p-6 text-center">
        <div className="animate-spin text-teal-400 mb-4">
          <RotateCw size={36} />
        </div>
        <h2 className="text-base font-bold text-white mb-1">Assembling Scoped CBT Practice Set...</h2>
        <p className="text-xs text-slate-400 mb-4 max-w-xs">
          Loading strictly scoped topic questions, verifying answer keys, and calculating unseen bank eligibility.
        </p>
        <Link
          href="/mock-test"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2 rounded-xl transition"
        >
          Return to Test Directory
        </Link>
      </div>
    );
  }

  const difficultyBadge = currentQuestion.difficulty === 'easy'
    ? { label: 'Simple 🟢', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' }
    : currentQuestion.difficulty === 'hard'
    ? { label: 'Hard 🔴', color: 'bg-rose-500/15 text-rose-300 border-rose-500/30' }
    : { label: 'Mid 🟡', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };

  const canonicalId = normalizePracticeExamId(activeExamId);
  const pExam = practiceExam(activeExamId);
  const activeExamMeta = AVAILABLE_EXAMS.find(e => e.id === canonicalId || e.id === activeExamId);
  const displayNegativeMarking = () => {
    if (activeExamId === 'custom-notes') return 0;
    if (pExam) {
      if (typeof pExam.negativeMarking === 'number') return pExam.negativeMarking;
      if (pExam.negativeMarking === false) return 0;
      if (pExam.negativeMarking === true) return 0.25;
    }
    if (activeExamMeta && typeof activeExamMeta.negativeMarking === 'number') {
      return activeExamMeta.negativeMarking;
    }
    return 0;
  };

  const switchSet = (targetSet: number) => {
    const search = new URLSearchParams(window.location.search);
    search.set('set', String(targetSet));
    search.set('count', String(sourceConfig.count || 50));
    router.push(`${window.location.pathname}?${search.toString()}`);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 pb-safe text-slate-100">

      <QuestionSyllabusScope topicId={currentQuestion.topicId} question={currentQuestion} language={lang} />
      {/* Revision Mode Banner */}
      {isRevisionMode && (
        <div className="bg-sky-950/70 border-b border-sky-700/50 px-3 py-1.5 flex items-center justify-between text-[11px] text-sky-200 shrink-0">
          <span className="flex items-center gap-1.5">
            <span>🔁</span>
            <span className="font-semibold">Revision Mode:</span>
            <span>Practicing previously seen questions. Exposure tracking is not modified.</span>
          </span>
          <span className="text-[10px] bg-sky-800/40 px-2 py-0.5 rounded border border-sky-600/30 font-mono">
            Revision Practice
          </span>
        </div>
      )}
      {/* Remaining Subset Banner */}
      {isRemainingSubset && (
        <div className="bg-amber-950/70 border-b border-amber-600/50 px-3 py-1.5 flex items-center justify-between text-[11px] text-amber-200 shrink-0">
          <span className="flex items-center gap-1.5">
            <AlertCircle size={13} className="text-amber-400 shrink-0" />
            <span className="font-semibold">Final Unseen Set:</span>
            <span>Requested {sourceConfig.count} Qs, serving remaining {questions.length} unseen questions before bank exhaustion.</span>
          </span>
          <span className="text-[10px] bg-amber-800/40 px-2 py-0.5 rounded border border-amber-600/30 font-mono">
            {questions.length} of {sourceConfig.count}
          </span>
        </div>
      )}
      {/* Exam Pattern Info Banner */}
      {loaded && questions.length > 0 && (activeExamMeta || pExam) && (
        <div className="bg-amber-950/40 border-b border-amber-700/40 px-3 py-1 flex items-center justify-between gap-2 text-[10px] text-amber-200 shrink-0">
          <span className="flex items-center gap-1.5">
            <ShieldAlert size={12} className="text-amber-400 shrink-0" />
            {displayNegativeMarking() > 0 ? (
              <><span className="font-bold text-amber-300">Negative marking:</span> -{displayNegativeMarking()} per wrong answer</>
            ) : (
              <span className="text-emerald-300 font-bold">No negative marking (+1 / 0)</span>
            )}
            {' '}|{' '}
            <span className="font-semibold">Total:</span> {questions.length} Qs
            {' '}|{' '}
            <span className="font-semibold">{Math.round(totalTimeSeconds / 60)}m</span>
          </span>
          {totalPoolCount > 0 && (
            <span className="text-teal-300 font-bold font-mono">
              Bank: {totalPoolCount} Qs
            </span>
          )}
        </div>
      )}

      {/* Top Test Header Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800 p-2.5 flex justify-between items-center shrink-0 gap-2">
        <div className="min-w-0 pr-1">
          <h1 className="text-white font-bold text-xs truncate max-w-[190px] sm:max-w-xs">
            {testTitle}
          </h1>
          <p className="text-[10px] text-slate-400">
            {questions.length} Qs • {currentSetNumber > 0 ? `Set ${currentSetNumber} of ${totalSetCount}` : mode === 'exam' ? 'Exam Mode' : '3D Flip Card'}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Instant Answer Toggle in Exam Mode */}
          {mode === 'exam' && (
            <button
              onClick={() => setInstantFeedback(prev => !prev)}
              className={`px-2 py-1 rounded-lg text-[10px] font-bold border transition ${
                instantFeedback
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
              }`}
              title="Show correct answer & explanation immediately after selecting an option"
            >
              💡 {instantFeedback ? 'Ans: ON' : 'Ans: OFF'}
            </button>
          )}

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
            title="Return to Mock Test Directory"
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
              <Clock size={12} className={secondsRemaining < 180 ? 'text-rose-400 animate-pulse' : 'text-amber-400'} />
              <span className={`font-mono text-xs font-bold ${secondsRemaining < 180 ? 'text-rose-400' : 'text-white'}`}>
                {formatTimer(secondsRemaining)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 50-Question Set Switcher Bar (Set 1: Q1-50, Set 2: Q51-100, Set 3: Q101-150, Set 4: Q151-200...) */}
      {totalSetCount > 1 && (
        <div className="bg-indigo-950/60 border-b border-indigo-500/30 px-2.5 py-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[10px] font-black uppercase tracking-wider text-teal-300 shrink-0 mr-1">
            50-Q Sets:
          </span>
          {Array.from({ length: Math.min(totalSetCount, 10) }, (_, idx) => {
            const setNum = idx + 1;
            const setSize = sourceConfig.count || 50;
            const startQ = (setNum - 1) * setSize + 1;
            const endQ = Math.min(setNum * setSize, totalPoolCount);
            const isActiveSet = (currentSetNumber || 1) === setNum;
            return (
              <button
                key={setNum}
                onClick={() => switchSet(setNum)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold shrink-0 border transition ${
                  isActiveSet
                    ? 'bg-teal-500 text-slate-950 border-teal-400 shadow'
                    : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:border-teal-500/50 hover:text-white'
                }`}
              >
                Set {setNum} ({startQ}–{endQ})
              </button>
            );
          })}
          {(currentSetNumber || 1) < totalSetCount && (
            <button
              onClick={() => switchSet((currentSetNumber || 1) + 1)}
              className="ml-auto px-2.5 py-1 rounded-lg text-[10px] font-black shrink-0 bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition"
            >
              Next 50 Qs (Set {(currentSetNumber || 1) + 1}) →
            </button>
          )}
        </div>
      )}

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
                  {currentSetNumber > 0 ? ` (Set ${currentSetNumber})` : ''}
                </span>
                
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] px-2 py-0.5 rounded border font-bold ${difficultyBadge.color}`}>
                    {difficultyBadge.label}
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded truncate max-w-[190px]">
                    {currentQuestion.examTag || 'Practice question'} {currentQuestion.year ? `(${currentQuestion.year})` : ''}
                  </span>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-white mb-1 leading-relaxed">
                {currentQuestion.question[lang] || currentQuestion.question.pa || currentQuestion.question.hi || currentQuestion.question.en}
              </h3>
              {lang !== 'en' && currentQuestion.question.en && (currentQuestion.question[lang] || currentQuestion.question.hi) !== currentQuestion.question.en && (
                <h4 className="text-xs text-slate-400 mt-1 italic">{currentQuestion.question.en}</h4>
              )}
            </div>

            {/* Options */}
            <div className="flex flex-col gap-2.5">
              {(['A', 'B', 'C', 'D'] as const).map(key => {
                const opt = currentQuestion.options[key];
                if (!opt) return null;
                const isSelected = userAnswers[currentQuestion.id] === key;
                const hasAnsweredCurrent = Boolean(userAnswers[currentQuestion.id]);
                const isCorrectOption = currentQuestion.correct === key;

                let optionStyle = isSelected
                  ? 'bg-indigo-600/20 border-indigo-500 shadow-md ring-1 ring-indigo-500'
                  : 'bg-slate-800/80 border-slate-700 hover:border-slate-600';

                let badgeStyle = isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300';

                if (instantFeedback && hasAnsweredCurrent) {
                  if (isCorrectOption) {
                    optionStyle = 'bg-emerald-600/20 border-emerald-500 shadow-md ring-1 ring-emerald-500';
                    badgeStyle = 'bg-emerald-500 text-slate-950';
                  } else if (isSelected && !isCorrectOption) {
                    optionStyle = 'bg-rose-600/20 border-rose-500 shadow-md ring-1 ring-rose-500';
                    badgeStyle = 'bg-rose-500 text-white';
                  }
                }

                return (
                  <button 
                    key={key} 
                    aria-pressed={isSelected}
                    onClick={() => handleSelectOption(key)}
                    className={`w-full text-left p-3.5 rounded-xl border flex items-center gap-3 transition-all ${optionStyle}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${badgeStyle}`}>
                      {key}
                    </div>
                    <div className="text-xs">
                      <p className="text-white font-medium">{opt[lang] || opt.pa || opt.hi || opt.en}</p>
                      {lang !== 'en' && opt.en && (opt[lang] || opt.hi) !== opt.en && <p className="text-slate-400 text-[10px] mt-0.5">{opt.en}</p>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Instant Answer & Trilingual Explanation Card when Ans: ON */}
            {instantFeedback && Boolean(userAnswers[currentQuestion.id]) && (
              <div className="mt-4 p-3.5 rounded-xl bg-slate-800/90 border border-teal-500/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${userAnswers[currentQuestion.id] === currentQuestion.correct ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {userAnswers[currentQuestion.id] === currentQuestion.correct
                      ? '✅ Correct Answer! / ਸਹੀ ਉੱਤਰ! / सही उत्तर!'
                      : `❌ Correct Option is (${currentQuestion.correct}): ${currentQuestion.options[currentQuestion.correct]?.[lang] || currentQuestion.options[currentQuestion.correct]?.en}`}
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {currentQuestion.explanation[lang] || currentQuestion.explanation.pa || currentQuestion.explanation.hi || currentQuestion.explanation.en}
                </p>
              </div>
            )}
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
                    {currentQuestion.question[lang] || currentQuestion.question.pa || currentQuestion.question.hi || currentQuestion.question.en}
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
                          <span className="truncate">{opt[lang] || opt.pa || opt.hi || opt.en}</span>
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
                    {currentQuestion.options[currentQuestion.correct]?.[lang] || currentQuestion.options[currentQuestion.correct]?.pa || currentQuestion.options[currentQuestion.correct]?.hi || currentQuestion.options[currentQuestion.correct]?.en}
                  </h4>
                  
                  {/* Detailed Explanation */}
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700 text-xs text-slate-300 leading-relaxed">
                    <span className="text-amber-400 font-bold block mb-1">Answer explanation:</span>
                    {currentQuestion.explanation[lang] || currentQuestion.explanation.pa || currentQuestion.explanation.hi || currentQuestion.explanation.en}
                  </div>

                  {/* Strategic Examiner Thought */}
                  {currentQuestion.thought && (
                    <div className="bg-indigo-950/40 p-3 rounded-xl border border-indigo-700/50 text-[11px] text-indigo-200 leading-relaxed">
                      <div className="flex items-center gap-1.5 text-indigo-300 font-bold mb-1">
                        <Brain size={13} className="text-teal-400" />
                        <span>🧠 Antigravity Strategic Thought (Examiner Mindset):</span>
                      </div>
                      <p>
                        {currentQuestion.thought[lang] || currentQuestion.thought.pa || currentQuestion.thought.hi || currentQuestion.thought.en}
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
          
          <div className="flex gap-1.5">
            {mode === 'exam' && (
              <>
                <button 
                  onClick={handleToggleReview}
                  className={`px-2.5 py-2 rounded-lg text-xs font-medium border transition ${
                    markedForReview[currentQuestion.id] 
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300' 
                      : 'bg-slate-800 border-slate-700 text-slate-300'
                  }`}
                >
                  {markedForReview[currentQuestion.id] ? 'Marked' : 'Review'}
                </button>
                <button 
                  onClick={handleClearOption}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-2.5 py-2 rounded-lg text-xs text-slate-400"
                >
                  Clear
                </button>
              </>
            )}
          </div>

          <div className="flex gap-1.5 items-center">
            <button 
              onClick={() => {
                setQIndex(prev => Math.max(0, prev - 1));
                setIsFlipped(false);
              }}
              disabled={qIndex === 0}
              className="bg-slate-800 disabled:opacity-40 border border-slate-700 px-2.5 py-2 rounded-lg text-xs text-white flex items-center gap-1"
            >
              <ChevronLeft size={15} /> Prev
            </button>

            {qIndex < questions.length - 1 && (
              <button 
                onClick={() => {
                  setQIndex(prev => prev + 1);
                  setIsFlipped(false);
                }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3.5 py-2 rounded-lg text-xs flex items-center gap-1 shadow"
              >
                Next <ChevronRight size={15} />
              </button>
            )}

            <button 
              onClick={handleSubmitTest}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3.5 py-2 rounded-lg text-xs shadow-lg flex items-center gap-1"
            >
              <Award size={14} /> {qIndex < questions.length - 1 ? 'Submit ✓' : 'Submit & Check Level'}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
