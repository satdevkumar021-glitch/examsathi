'use client';
import QuestionSyllabusScope from '@/components/ui/QuestionSyllabusScope';
import { getQuestionPool } from '@/lib/data/question_bank_engine';
import { 
  completedQuestionKeys, 
  getLearnerExposure, 
  resetLearnerExposure, 
  explainResetBehavior 
} from '@/lib/practice-history';
import { normalizePracticeExamId } from '@/lib/exam-context';
import { rememberQuestions } from '@/lib/question-vault';
import { useStore } from '@/lib/store';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Target, Clock, Trophy, CheckCircle2, XCircle, MinusCircle, RotateCcw, Layers, Award, Sparkles, BookOpen, Brain, BookmarkCheck, Bookmark, Check, FileText, Share2, Star, Lightbulb, Compass, Library } from 'lucide-react';
import { evaluateUserLevel, calculatePredictedRank, UserPerformanceLevel, PredictedRankReport } from '@/lib/data/question_bank_engine';
import { Question } from '@/lib/data/questions';
import { toggleFavoriteQuestion, toggleBookmarkQuestion, getStoredUser } from '@/lib/auth';
import MockTestBottomSheet from '@/components/ui/MockTestBottomSheet';
import { computeTopicBreakdown, TopicBreakdown } from '@/lib/scoring';

interface StoredResult {
  attemptId?: string;
  scoringConfig?: { marksPerQuestion: number; negativeMarking: number; totalQuestions: number };
  sourceConfig?: { count: number; pyq20Years: boolean; pyqOnly: boolean };
  testId?: string;
  testTitle?: string;
  examId?: string;
  difficulty?: 'all' | 'easy' | 'medium' | 'hard';
  total?: number;
  correct?: number;
  wrong?: number;
  unattempted?: number;
  rawScore?: string | number;
  percentage?: number;
  accuracy?: number;
  timeTaken?: number;
  level?: UserPerformanceLevel;
  predictedRank?: PredictedRankReport;
  topicBreakdown?: TopicBreakdown[];
  questions?: Question[];
  userAnswers?: Record<string, string>;
  completedAt?: string;
}

export default function Results() {
  const [result, setResult] = useState<StoredResult>({});
  const [loaded, setLoaded] = useState(false);

  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct' | 'favorites' | 'saved'>('all');
  const { language: reviewLang, setLanguage: setReviewLang } = useStore();
  const [savedNoteIds, setSavedNoteIds] = useState<Record<string, boolean>>({});
  const [favIds, setFavIds] = useState<Record<string, boolean>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [, setExposureVersion] = useState<number>(0);

  useEffect(() => {
    try {
      const attempt = new URLSearchParams(window.location.search).get('attempt');
      const stored = attempt ? studyStorage.getItem(`examsathi_result_${attempt}`) : studyStorage.getItem('examsathi_last_result');
      if (stored) {
        const parsedResult = JSON.parse(stored);
        rememberQuestions(parsedResult.questions || []);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate persisted attempt once after mount.
        setResult(parsedResult);
      }
      
      // Load saved notes index
      const savedNotesRaw = studyStorage.getItem('examsathi_saved_review_notes');
      if (savedNotesRaw) {
        const parsed = JSON.parse(savedNotesRaw);
        const map: Record<string, boolean> = {};
        parsed.forEach((item: { questionId?: string }) => {
          if (item.questionId) map[item.questionId] = true;
        });
        setSavedNoteIds(map);
      }

      // Load user favorites and bookmarks
      const user = getStoredUser();
      const fMap: Record<string, boolean> = {};
      (user.favoriteQuestionIds || []).forEach(id => { fMap[id] = true; });
      setFavIds(fMap);

      const bMap: Record<string, boolean> = {};
      (user.bookmarkedQuestionIds || []).forEach(id => { bMap[id] = true; });
      setBookmarkedIds(bMap);
    } catch {
      // Invalid or unavailable browser storage.
    } finally { setLoaded(true); }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleFavorite = (qId: string) => {
    const isFav = toggleFavoriteQuestion(qId);
    setFavIds(prev => ({ ...prev, [qId]: isFav }));
    showToast(isFav ? 'Added to ⭐ Favorite Questions!' : 'Removed from Favorites');
  };

  const handleToggleBookmark = (qId: string) => {
    const isBookmarked = toggleBookmarkQuestion(qId);
    setBookmarkedIds(prev => ({ ...prev, [qId]: isBookmarked }));
    showToast(isBookmarked ? 'Saved for Later (🔖 Bookmarked)!' : 'Removed from Saved for Later');
  };

  const total = result.total ?? 0;
  const correct = result.correct || 0;
  const wrong = result.wrong || 0;
  const unattempted = result.unattempted ?? Math.max(0, total - (correct + wrong));
  
  const accuracy = result.accuracy ?? (total > 0 ? Math.round((correct / (correct + wrong || 1)) * 100) : 0);
  const percentage = result.percentage ?? (total ? Math.round((correct / total) * 100) : 0);
  
  const negativeMarking = result.scoringConfig?.negativeMarking ?? 0.25;
  const marksPerQuestion = result.scoringConfig?.marksPerQuestion ?? 1;
  const penalty = (wrong * negativeMarking).toFixed(2);
  const rawScore = Number(result.rawScore ?? (correct * marksPerQuestion - wrong * negativeMarking)).toFixed(2);

  const numericRawScore = parseFloat(rawScore.toString());

  const timeTaken = result.timeTaken ?? 0;
  const minsTaken = Math.floor(timeTaken / 60);
  const secsTaken = timeTaken % 60;

  // Evaluate candidate level and predicted rank if not precomputed
  const candidateLevel: UserPerformanceLevel = evaluateUserLevel(percentage, accuracy);
  const predictedRank: PredictedRankReport = calculatePredictedRank(percentage, numericRawScore, total);

  const testId = result.testId || '1';
  const topicId = testId.startsWith('topic-') ? testId.slice(6) : 'all';
  const learnerId = getStoredUser().id || 'usr-default';
  const canonicalExamId = result.examId ? normalizePracticeExamId(result.examId) : 'punjab-master-cadre-sst';
  const exposureSummary = getLearnerExposure(learnerId, canonicalExamId);

  const remaining = result.examId === 'custom-notes'
    ? 0
    : getQuestionPool({
        examId: canonicalExamId,
        topicId,
        difficulty: result.difficulty,
        pyq20Years: result.sourceConfig?.pyq20Years,
        pyqOnly: result.sourceConfig?.pyqOnly,
        excludeKeys: completedQuestionKeys(),
      }).length;
  const retakeQuery = new URLSearchParams({
    exam: canonicalExamId,
    diff: result.difficulty || 'all',
    count: String(total),
    pyq: result.sourceConfig?.pyq20Years ? '20y' : 'all',
    mode: 'exam',
  }).toString();
  const testTitle = result.testTitle || 'Punjab Master Cadre 50-Question CBT Simulation';
  const questions = (result.questions && result.questions.length > 0) ? result.questions : [];
  const userAnswers = result.userAnswers || {};

  // Topic breakdown: use stored value or compute from questions
  const topicBreakdown: TopicBreakdown[] = result.topicBreakdown?.length
    ? result.topicBreakdown
    : computeTopicBreakdown(
        questions.map(q => ({ id: q.id, topicId: q.topicId || 'general' })),
        questions.reduce<Record<string, string>>((acc, q) => ({ ...acc, [q.id]: q.correct }), {}),
        userAnswers
      );

  // Difficulty performance breakdown
  const difficultyStats = {
    easy: { total: 0, correct: 0 },
    medium: { total: 0, correct: 0 },
    hard: { total: 0, correct: 0 },
  };

  questions.forEach(q => {
    const diff = (q.difficulty || 'medium') as 'easy' | 'medium' | 'hard';
    if (difficultyStats[diff]) {
      difficultyStats[diff].total++;
      if (userAnswers[q.id] === q.correct) {
        difficultyStats[diff].correct++;
      }
    }
  });

  const getLocalizedText = (obj?: { hi: string; pa?: string; en: string } | string): string => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[reviewLang] || obj.hi || obj.en || '';
  };

  // Filter questions for detailed review
  const filteredQuestions = questions.filter(q => {
    const isAnswered = Boolean(userAnswers[q.id]);
    const isCorrect = userAnswers[q.id] === q.correct;
    if (reviewFilter === 'wrong') return isAnswered && !isCorrect;
    if (reviewFilter === 'correct') return isCorrect;
    if (reviewFilter === 'favorites') return Boolean(favIds[q.id]);
    if (reviewFilter === 'saved') return Boolean(bookmarkedIds[q.id]);
    return true; // 'all'
  });

  // Handler: Save single question explanation to notes
  const handleSaveToNotes = (q: Question) => {
    try {
      const existingRaw = studyStorage.getItem('examsathi_saved_review_notes');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];

      const noteEntry = {
        id: `note-${q.id}-${Date.now()}`,
        questionId: q.id,
        topicId: q.topicId || 'general',
        title: q.question[reviewLang] || q.question.hi,
        explanation: q.explanation[reviewLang] || q.explanation.hi,
        thought: q.thought ? (q.thought[reviewLang] || q.thought.hi) : null,
        correctOption: q.correct,
        correctText: q.options[q.correct]?.[reviewLang] || q.options[q.correct]?.hi,
        examTag: q.examTag,
        year: q.year,
        savedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      };

      // Also append into topic-specific notes key for seamless LessonView access
      const topicNotesKey = `examsathi_notes_${q.topicId || 'general'}`;
      const topicRaw = studyStorage.getItem(topicNotesKey);
      const topicNotes = topicRaw ? JSON.parse(topicRaw) : [];
      topicNotes.unshift({
        id: noteEntry.id,
        text: `📌 [MCQ Review - ${q.examTag || 'Exam'}]\n\nप्रश्न: ${q.question.hi}\n\nसही उत्तर (${q.correct}): ${noteEntry.correctText}\n\nव्याख्या: ${noteEntry.explanation}${noteEntry.thought ? `\n\nपरीक्षक विचार: ${noteEntry.thought}` : ''}`,
        date: noteEntry.savedAt,
      });
      studyStorage.setItem(topicNotesKey, JSON.stringify(topicNotes));

      // Append to global saved review notes
      const filtered = existing.filter((item: { questionId?: string }) => item.questionId !== q.id);
      filtered.unshift(noteEntry);
      studyStorage.setItem('examsathi_saved_review_notes', JSON.stringify(filtered));

      setSavedNoteIds(prev => ({ ...prev, [q.id]: true }));
      showToast('Explanation & Strategic Thought saved to your Study Notes! 📝');
    } catch {
      showToast('Error saving note to local storage');
    }
  };

  // Handler: Save all mistakes to notes in one click
  const handleSaveAllMistakes = () => {
    const mistakes = questions.filter(q => userAnswers[q.id] && userAnswers[q.id] !== q.correct);
    if (mistakes.length === 0) {
      showToast('No mistakes to save! Perfect score! 🌟');
      return;
    }

    try {
      const existingRaw = studyStorage.getItem('examsathi_saved_review_notes');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];

      mistakes.forEach(q => {
        const noteEntry = {
          id: `note-${q.id}-${Date.now()}`,
          questionId: q.id,
          topicId: q.topicId || 'general',
          title: q.question[reviewLang] || q.question.hi,
          explanation: q.explanation[reviewLang] || q.explanation.hi,
          thought: q.thought ? (q.thought[reviewLang] || q.thought.hi) : null,
          correctOption: q.correct,
          correctText: q.options[q.correct]?.[reviewLang] || q.options[q.correct]?.hi,
          examTag: q.examTag,
          year: q.year,
          savedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        };

        const topicNotesKey = `examsathi_notes_${q.topicId || 'general'}`;
        const topicRaw = studyStorage.getItem(topicNotesKey);
        const topicNotes = topicRaw ? JSON.parse(topicRaw) : [];
        topicNotes.unshift({
          id: noteEntry.id,
          text: `📌 [Mistake Review - ${q.examTag || 'Exam'}]\n\nप्रश्न: ${q.question.hi}\n\nसही उत्तर (${q.correct}): ${noteEntry.correctText}\n\nव्याख्या: ${noteEntry.explanation}${noteEntry.thought ? `\n\nपरीक्षक विचार: ${noteEntry.thought}` : ''}`,
          date: noteEntry.savedAt,
        });
        studyStorage.setItem(topicNotesKey, JSON.stringify(topicNotes));
        existing.unshift(noteEntry);
      });

      studyStorage.setItem('examsathi_saved_review_notes', JSON.stringify(existing));

      const updatedIds: Record<string, boolean> = { ...savedNoteIds };
      mistakes.forEach(q => { updatedIds[q.id] = true; });
      setSavedNoteIds(updatedIds);

      showToast(`Saved all ${mistakes.length} mistakes into your Study Notes! 📝`);
    } catch {
      showToast('Error saving mistakes to notes');
    }
  };

  const STATUS_COLORS: Record<string, string> = {
    exam_ready: 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300',
    advanced: 'border-teal-500/50 bg-teal-950/30 text-teal-300',
    intermediate: 'border-indigo-500/50 bg-indigo-950/30 text-indigo-300',
    developing: 'border-amber-500/50 bg-amber-950/30 text-amber-300',
    foundation: 'border-rose-500/50 bg-rose-950/30 text-rose-300',
  };
  const levelColor = STATUS_COLORS[candidateLevel.status] || 'border-teal-500/50 bg-teal-950/30 text-teal-300';

  if (loaded && !result.questions?.length) return <div className="p-6 text-slate-300"><h1>No saved result</h1><p>Complete a practice test to see your own report.</p><Link href="/mock-test">Browse tests</Link></div>;
  if (!loaded) return <p className="p-6 text-white">Loading result…</p>;
  if (!questions.length) return <div className="p-6 text-white"><h1>No completed test yet</h1><Link href="/mock-test" className="text-teal-300">Start a practice test</Link></div>;
  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-28 text-slate-100 max-w-xl mx-auto w-full relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-teal-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <Check size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mt-3">
        <div className="text-4xl mb-1 inline-block animate-bounce">{candidateLevel.badge}</div>
        <h1 className="text-2xl font-black text-white">CBT Performance Report</h1>
        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{testTitle}</p>
      </div>

      {/* 1. PREDICTED STATE & CATEGORY RANK CARD */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-850 to-teal-950 rounded-2xl p-5 border-2 border-teal-500/60 shadow-xl flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-teal-500/20 text-teal-300 rounded-xl">
              <Trophy size={20} />
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">
                Practice feedback
              </span>
              <h2 className="text-base font-black text-white">Illustrative Practice Benchmark</h2>
            </div>
          </div>
          {predictedRank.hasEnoughData && (
            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black px-2.5 py-1 rounded-full">
              Top {100 - predictedRank.percentile}% Tier
            </span>
          )}
        </div>

        {predictedRank.hasEnoughData === false ? (
          <p className="text-sm text-slate-300 text-center py-4">
            📊 A reliable rank requires a real comparison cohort. No rank is available for this attempt.
          </p>
        ) : (
          <>
            <p className="text-sm text-amber-200">Illustrative formula using a fictional candidate pool. No live candidate or category data is available. This cannot predict selection or official merit.</p>
            {/* State Rank & Percentile Big Stats */}
            <div className="grid grid-cols-2 gap-3 bg-slate-900/70 p-3.5 rounded-xl border border-slate-700/60">
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Illustrative Rank</span>
                <div className="text-2xl font-black text-teal-300 font-mono mt-0.5">
                  #{predictedRank.stateRank.toLocaleString()}
                </div>
                <span className="text-[10px] text-slate-400">
                  out of {predictedRank.totalCandidates.toLocaleString()} Aspirants
                </span>
              </div>

              <div className="text-right border-l border-slate-800 pl-3">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">Percentile Score</span>
                <div className="text-2xl font-black text-white font-mono mt-0.5">
                  {predictedRank.percentile}%
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">
                  {predictedRank.selectionProbability}
                </span>
              </div>
            </div>

            {/* Category-Wise Predicted Ranks */}
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
                Illustrative Category Split
              </span>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block font-semibold">General</span>
                  <span className="text-xs font-black text-white font-mono">#{predictedRank.categoryRank.general}</span>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block font-semibold">SC (M&B/R&O)</span>
                  <span className="text-xs font-black text-teal-300 font-mono">#{predictedRank.categoryRank.sc}</span>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block font-semibold">BC / OBC</span>
                  <span className="text-xs font-black text-amber-300 font-mono">#{predictedRank.categoryRank.bc}</span>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block font-semibold">EWS</span>
                  <span className="text-xs font-black text-indigo-300 font-mono">#{predictedRank.categoryRank.ews}</span>
                </div>
              </div>
            </div>

            {/* Antigravity Strategic Advice */}
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
              <Brain size={16} className="text-teal-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-teal-300 block mb-0.5">Examiner Strategy Insight:</span>
                <span>{predictedRank.strategicAdvice}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 2. Candidate Diagnostic Level Card */}
      <div className={`p-4 rounded-2xl border ${levelColor} shadow-lg backdrop-blur-sm`}>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <Award className="text-amber-400" size={20} />
            <span className="text-xs font-black tracking-wider uppercase text-slate-300">
              Diagnostic Level Evaluation
            </span>
          </div>
          <span className="bg-slate-900/80 text-amber-300 border border-amber-500/30 text-[10px] font-black px-2.5 py-0.5 rounded-full">
            {candidateLevel.percentile}
          </span>
        </div>

        <div className="text-lg font-black text-white flex items-center gap-2 mb-1.5">
          <span>{candidateLevel.title}</span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-3">
          {candidateLevel.description}
        </p>

        {/* Diagnostic Recommendations */}
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700/60">
          <div className="text-[11px] font-bold text-teal-300 mb-2 flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>Recommended Next Actions:</span>
          </div>
          <ul className="space-y-1.5 text-[11px] text-slate-300">
            {candidateLevel.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-teal-400 font-bold">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. Circular Progress Gauge & KPI Grid */}
      <div className="flex justify-center my-1">
        <div className="relative w-44 h-44 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path 
              className="text-slate-800" 
              strokeWidth="3.5" 
              stroke="currentColor" 
              fill="none" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
            />
            <path 
              className="text-teal-400 transition-all duration-1000" 
              strokeDasharray={`${percentage}, 100`} 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              stroke="currentColor" 
              fill="none" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
            />
          </svg>
          <div className="absolute text-center">
            <div className="text-3xl font-black text-white font-mono">{rawScore}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Net Marks / {total}</div>
            <div className="text-[11px] font-bold text-teal-400 uppercase tracking-wider mt-0.5">{percentage}% Score</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 text-center shadow">
          <Target size={18} className="text-emerald-400 mx-auto mb-1" />
          <div className="text-white font-bold text-base">{accuracy}%</div>
          <div className="text-[10px] text-slate-400 uppercase font-semibold">Accuracy</div>
        </div>
        <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 text-center shadow">
          <Clock size={18} className="text-amber-400 mx-auto mb-1" />
          <div className="text-white font-bold text-base">{minsTaken}m {secsTaken}s</div>
          <div className="text-[10px] text-slate-400 uppercase font-semibold">Time Taken</div>
        </div>
        <div className="bg-slate-800/90 p-3.5 rounded-xl border border-slate-700 text-center shadow">
          <Trophy size={18} className="text-indigo-400 mx-auto mb-1" />
          <div className="text-white font-bold text-base">
            {predictedRank.hasEnoughData ? `#${predictedRank.stateRank}` : '—'}
          </div>
          <div className="text-[10px] text-slate-400 uppercase font-semibold">State Rank</div>
        </div>
      </div>

      {/* 4. DIFFICULTY BREAKDOWN CARD (Simple / Mid / Hard) */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-bold text-sm flex items-center gap-2">
            <span>📊</span> Difficulty Performance Breakdown
          </h3>
          <span className="text-[10px] text-slate-400">Simple vs Mid vs Hard</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {/* Simple / Easy */}
          <div className="bg-slate-900/60 p-3 rounded-xl border border-emerald-500/30 text-center">
            <span className="text-[10px] font-bold text-emerald-300 block mb-0.5">Simple 🟢</span>
            <div className="text-base font-black text-white">
              {difficultyStats.easy.correct} / {difficultyStats.easy.total}
            </div>
            <span className="text-[9px] text-slate-400">
              {difficultyStats.easy.total > 0 
                ? `${Math.round((difficultyStats.easy.correct / difficultyStats.easy.total) * 100)}% score` 
                : 'Direct Facts'}
            </span>
          </div>

          {/* Mid / Medium */}
          <div className="bg-slate-900/60 p-3 rounded-xl border border-amber-500/30 text-center">
            <span className="text-[10px] font-bold text-amber-300 block mb-0.5">Mid 🟡</span>
            <div className="text-base font-black text-white">
              {difficultyStats.medium.correct} / {difficultyStats.medium.total}
            </div>
            <span className="text-[9px] text-slate-400">
              {difficultyStats.medium.total > 0 
                ? `${Math.round((difficultyStats.medium.correct / difficultyStats.medium.total) * 100)}% score` 
                : 'Competitive'}
            </span>
          </div>

          {/* Hard */}
          <div className="bg-slate-900/60 p-3 rounded-xl border border-rose-500/30 text-center">
            <span className="text-[10px] font-bold text-rose-300 block mb-0.5">Hard 🔴</span>
            <div className="text-base font-black text-white">
              {difficultyStats.hard.correct} / {difficultyStats.hard.total}
            </div>
            <span className="text-[9px] text-slate-400">
              {difficultyStats.hard.total > 0 
                ? `${Math.round((difficultyStats.hard.correct / difficultyStats.hard.total) * 100)}% score` 
                : 'Merit Decider'}
            </span>
          </div>
        </div>
      </div>

      {/* 5. NEGATIVE MARKING BREAKDOWN */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-md">
        <div className="flex items-center justify-between mb-3.5">
          <h3 className="text-white font-bold text-sm">Negative Marking Breakdown</h3>
          <span className="text-[10px] bg-slate-700/80 text-amber-300 font-semibold px-2 py-0.5 rounded">
            -{negativeMarking} Mark Penalty
          </span>
        </div>
        
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span className="text-slate-300">Correct Answers (+1.00 Mark)</span>
            </div>
            <span className="text-emerald-400 font-bold text-sm">+{correct}</span>
          </div>

          <div className="flex items-center justify-between text-xs bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2">
              <XCircle size={16} className="text-rose-400" />
              <span className="text-slate-300">Incorrect Penalty (-{negativeMarking} Mark)</span>
            </div>
            <span className="text-rose-400 font-bold text-sm">-{penalty}</span>
          </div>

          <div className="flex items-center justify-between text-xs bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2">
              <MinusCircle size={16} className="text-slate-400" />
              <span className="text-slate-300">Unattempted Questions (0 Mark)</span>
            </div>
            <span className="text-slate-400 font-bold text-sm">{unattempted}</span>
          </div>

          <div className="flex items-center justify-between text-xs bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/40">
            <div className="flex items-center gap-2 font-bold text-emerald-300">
              <span>🏆</span>
              <span>Final Raw Score:</span>
            </div>
            <span className="text-emerald-300 font-black text-base">{rawScore} / {total}</span>
          </div>

          {/* Weak topics that need more practice */}
          {topicBreakdown.filter(t => t.accuracy < 50 && t.total >= 2).length > 0 && (
            <div className="bg-red-950/30 border border-red-800/50 rounded-xl p-3 mt-3">
              <p className="text-red-300 text-xs font-bold mb-2">⚠️ Topics Needing More Practice</p>
              {topicBreakdown.filter(t => t.accuracy < 50 && t.total >= 2).map(t => (
                <div key={t.topicId} className="flex justify-between items-center py-1">
                  <span className="text-slate-300 text-xs capitalize">{t.topicId.replace(/-/g, ' ')}</span>
                  <span className="text-red-400 text-xs font-bold">{t.accuracy}%</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 6. QUESTION-BY-QUESTION REVIEW & EXPLANATIONS INTO NOTES */}
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-white font-bold text-sm flex items-center gap-1.5">
              <span>📝</span> Detailed Question Review & Explanations
            </h3>
            <p className="text-[11px] text-slate-400">
              Review answers, examiner traps, and save explanations to your notes
            </p>
          </div>

          {/* Lang Selector */}
          <div className="flex bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            <button 
              onClick={() => setReviewLang('hi')} 
              className={`px-2 py-0.5 text-[10px] font-semibold rounded ${reviewLang === 'hi' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              हिं
            </button>
            <button 
              onClick={() => setReviewLang('pa')} 
              className={`px-2 py-0.5 text-[10px] font-semibold rounded ${reviewLang === 'pa' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              ਪੰ
            </button>
            <button 
              onClick={() => setReviewLang('en')} 
              className={`px-2 py-0.5 text-[10px] font-semibold rounded ${reviewLang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Filter Pills & Batch Save to Notes Button */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex gap-1.5 flex-wrap">
            <button
              onClick={() => setReviewFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                reviewFilter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              All ({questions.length || total})
            </button>
            <button
              onClick={() => setReviewFilter('wrong')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                reviewFilter === 'wrong'
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              Mistakes ({wrong})
            </button>
            <button
              onClick={() => setReviewFilter('correct')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                reviewFilter === 'correct'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              Correct ({correct})
            </button>
            <button
              onClick={() => setReviewFilter('favorites')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                reviewFilter === 'favorites'
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-800 text-amber-300 hover:bg-slate-750'
              }`}
            >
              <Star size={12} className={reviewFilter === 'favorites' ? 'fill-slate-950' : 'fill-amber-400'} />
              <span>Favorites ({Object.keys(favIds).filter(k => favIds[k]).length})</span>
            </button>
            <button
              onClick={() => setReviewFilter('saved')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                reviewFilter === 'saved'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-800 text-cyan-300 hover:bg-slate-750'
              }`}
            >
              <Bookmark size={12} className={reviewFilter === 'saved' ? 'fill-white' : 'fill-cyan-400'} />
              <span>Saved ({Object.keys(bookmarkedIds).filter(k => bookmarkedIds[k]).length})</span>
            </button>
          </div>

          {/* Batch Save Mistakes to Notes Button */}
          {wrong > 0 && (
            <button
              onClick={handleSaveAllMistakes}
              className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
            >
              <Bookmark size={13} />
              <span>Save All {wrong} Mistakes to Notes</span>
            </button>
          )}
        </div>

        {/* List of Questions with Explanations & Thoughts */}
        <div className="space-y-4 mt-1">
          {filteredQuestions.length === 0 ? (
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center text-xs text-slate-400">
              No questions found for this filter tab.
            </div>
          ) : (
            filteredQuestions.map((q, idx) => {
              const userChoice = userAnswers[q.id];
              const isCorrect = userChoice === q.correct;
              const isUnattempted = !userChoice;
              const isSaved = Boolean(savedNoteIds[q.id]);

              const diffBadge = q.difficulty === 'easy'
                ? { label: 'Simple 🟢', color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' }
                : q.difficulty === 'hard'
                ? { label: 'Hard 🔴', color: 'bg-rose-500/10 text-rose-300 border-rose-500/30' }
                : { label: 'Mid 🟡', color: 'bg-amber-500/10 text-amber-300 border-amber-500/30' };

              return (
                <div 
                  key={q.id}
                  className={`bg-slate-800/90 border rounded-2xl p-4 shadow-md transition flex flex-col gap-3 ${
                    isCorrect 
                      ? 'border-emerald-500/30' 
                      : isUnattempted 
                      ? 'border-slate-700' 
                      : 'border-rose-500/40'
                  }`}
                >
                  {/* Top Bar: Question Index, Exam Tag & Status */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-black text-white bg-slate-700 px-2 py-0.5 rounded">
                        Q{idx + 1}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded border font-bold ${diffBadge.color}`}>
                        {diffBadge.label}
                      </span>
                      <span className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-750 truncate max-w-[180px]">
                        {q.examTag} {q.year ? `(${q.year})` : ''}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCorrect ? (
                        <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/40 flex items-center gap-1">
                          <CheckCircle2 size={12} /> Correct (+1.00)
                        </span>
                      ) : isUnattempted ? (
                        <span className="bg-slate-700 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded">
                          Skipped (0.00)
                        </span>
                      ) : (
                        <span className="bg-rose-500/20 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded border border-rose-500/40 flex items-center gap-1">
                          <XCircle size={12} /> Incorrect (-{negativeMarking})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Topic & Subtopic Identification (Informing candidate of topic and subtopic on ALL answers) */}
                  {(q.topicName || q.subtopic || q.topicId) && (
                    <div className="bg-indigo-950/60 border border-indigo-500/40 rounded-xl px-3 py-2 flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 text-xs text-indigo-200">
                        <span className="text-amber-400 font-bold">🏷️ Topic:</span>
                        <span className="text-white font-extrabold">{getLocalizedText(q.topicName) || q.topicId}</span>
                        {q.subtopic && (
                          <>
                            <span className="text-indigo-400 font-bold">→</span>
                            <span className="text-teal-300 font-semibold">{getLocalizedText(q.subtopic)}</span>
                          </>
                        )}
                      </div>
                      <span className="text-[10px] bg-slate-900/90 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30 font-medium">
                        {isCorrect ? 'Answered Correctly ✓' : 'Revision Focus 📌'}
                      </span>
                    </div>
                  )}

                  {/* Question Text */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                      {q.question[reviewLang] || q.question.hi || q.question.en}
                    </h4>
                    {reviewLang !== 'en' && q.question.en && (
                      <p className="text-[11px] text-slate-400 mt-0.5 italic">
                        {q.question.en}
                      </p>
                    )}
                  </div>

                  {/* Options Comparison Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {(['A', 'B', 'C', 'D'] as const).map(key => {
                      const opt = q.options[key];
                      if (!opt) return null;

                      const isOptionCorrect = q.correct === key;
                      const isOptionChosen = userChoice === key;

                      let optStyle = 'bg-slate-900/60 border-slate-700/60 text-slate-300';
                      if (isOptionCorrect) {
                        optStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold ring-1 ring-emerald-500/50';
                      } else if (isOptionChosen && !isOptionCorrect) {
                        optStyle = 'bg-rose-950/60 border-rose-500 text-rose-200 line-through';
                      }

                      return (
                        <div 
                          key={key}
                          className={`p-2.5 rounded-xl border flex items-center gap-2 ${optStyle}`}
                        >
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                            isOptionCorrect 
                              ? 'bg-emerald-500 text-slate-950' 
                              : isOptionChosen 
                              ? 'bg-rose-500 text-white' 
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {key}
                          </span>
                          <span className="truncate flex-1">
                            {opt[reviewLang] || opt.hi || opt.en}
                          </span>
                          {isOptionCorrect && <Check size={14} className="text-emerald-400 shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Official Pedagogical Explanation */}
                  <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-700/80 text-xs text-slate-300 leading-relaxed">
                    <span className="text-amber-400 font-bold block mb-1">
                      📖 Detailed Conceptual Explanation:
                    </span>
                    <p>
                      {q.explanation[reviewLang] || q.explanation.hi || q.explanation.en}
                    </p>
                  </div>

                  {/* Antigravity Strategic Thought (Examiner's Mindset) */}
                  {q.thought && (
                    <div className="bg-indigo-950/50 p-3.5 rounded-xl border border-indigo-700/60 text-xs text-indigo-200 leading-relaxed">
                      <div className="flex items-center gap-1.5 text-teal-300 font-bold mb-1">
                        <Brain size={14} className="text-teal-400" />
                        <span>🧠 Antigravity Strategic Thought (Distractor & Elimination Trap):</span>
                      </div>
                      <p>
                        {q.thought[reviewLang] || q.thought.hi || q.thought.en}
                      </p>
                    </div>
                  )}

                  {/* Deep Dive Knowledge Concept Note */}
                  {q.deepConceptNote && (
                    <div className="bg-teal-950/50 p-3.5 rounded-xl border border-teal-500/40 text-xs text-teal-200 leading-relaxed shadow-sm">
                      <div className="flex items-center gap-1.5 text-teal-300 font-bold mb-1">
                        <Lightbulb size={14} className="text-amber-400 shrink-0" />
                        <span>💡 Deep Dive Knowledge & Concepts (गहन विषय ज्ञान):</span>
                      </div>
                      <p>
                        {q.deepConceptNote[reviewLang] || q.deepConceptNote.hi || q.deepConceptNote.en}
                      </p>
                    </div>
                  )}

                  {/* Action Bar: Favorite, Save for Later, and Save to Notes */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-700/60 gap-2 flex-wrap">
                    <span className="text-[11px] text-slate-400">
                      Correct: <strong className="text-emerald-400">Option ({q.correct})</strong>
                      {userChoice && (
                        <span> • Your Answer: <strong className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>({userChoice})</strong></span>
                      )}
                    </span>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {/* Favorite Button */}
                      <button
                        onClick={() => handleToggleFavorite(q.id)}
                        title="Add to Favorites"
                        className={`text-xs font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition ${
                          favIds[q.id]
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                            : 'bg-slate-700/80 hover:bg-slate-700 text-slate-300'
                        }`}
                      >
                        <Star size={13} className={favIds[q.id] ? 'fill-amber-400 text-amber-400' : ''} />
                        <span>{favIds[q.id] ? 'Favorited ⭐' : 'Favorite'}</span>
                      </button>

                      {/* Save for Later Button */}
                      <button
                        onClick={() => handleToggleBookmark(q.id)}
                        title="Save for Later"
                        className={`text-xs font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition ${
                          bookmarkedIds[q.id]
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                            : 'bg-slate-700/80 hover:bg-slate-700 text-slate-300'
                        }`}
                      >
                        <Bookmark size={13} className={bookmarkedIds[q.id] ? 'fill-cyan-400 text-cyan-400' : ''} />
                        <span>{bookmarkedIds[q.id] ? 'Saved 🔖' : 'Save for Later'}</span>
                      </button>

                      {/* Save to Notes Button */}
                      <button
                        onClick={() => handleSaveToNotes(q)}
                        className={`text-xs font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition ${
                          isSaved
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                        }`}
                      >
                        {isSaved ? <BookmarkCheck size={13} /> : <FileText size={13} />}
                        <span>{isSaved ? 'In Notes ✓' : 'Add Note 📝'}</span>
                      </button>

                      <QuestionSyllabusScope topicId={q.topicId} />
                      {/* Deep Dive Lesson Link */}
                      <Link
                        href={['custom-notes', 'uploaded-notes'].includes(q.topicId) ? '/ai-generator' : `/lesson/${q.topicId || 'modern-india'}`}
                        className="text-xs font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 transition"
                      >
                        <BookOpen size={13} />
                        <span>{['custom-notes', 'uploaded-notes'].includes(q.topicId) ? 'Notes Practice 📖' : 'Lesson Notes 📖'}</span>
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 7. ACTION BUTTONS */}
      <div className="flex flex-col gap-2.5 mt-2">
        {/* Share Score on WhatsApp */}
        <a 
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            `🎓 *ExamSathi CBT Mock Test Scorecard!* 🇮🇳\n\nमैंने अभी ExamSathi पर ${testTitle} दिया:\n📊 Score: ${rawScore}/${total} (${percentage}%)\n🎯 Accuracy: ${accuracy}%\n\nयह 100% Free Portal है (Master Cadre, Clerk, Police, Patwari, REET, CTET)।\n👉 आप भी अपना टेस्ट दें और तैयारी करें:\n${typeof window !== 'undefined' && window.location.origin ? window.location.origin : 'https://examsathi-sxj3.onrender.com'}/`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3.5 rounded-xl text-center text-xs shadow-lg flex items-center justify-center gap-2 transition"
        >
          <Share2 size={16} />
          <span>Share Score & Platform on WhatsApp 📲</span>
        </a>

        {/* Review in Flip Card Mode */}
        <Link 
          href={`/mock-test/${testId}?${retakeQuery.replace('mode=exam', 'mode=flip')}&review=${result.attemptId || ''}`}
          className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 hover:opacity-95 text-white font-bold py-3.5 rounded-xl text-center text-xs shadow-lg flex items-center justify-center gap-2"
        >
          <Layers size={16} />
          <span>Review These {total} Questions in Flip Card Mode</span>
        </Link>

        {result.examId !== 'custom-notes' && (
          <div className="p-4 bg-slate-900/80 border border-teal-700/60 rounded-xl text-sm space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-teal-300">📊 Syllabus Practice Exposure:</span>
              <span className="text-slate-400 font-mono text-[11px]">
                {exposureSummary.servedCount} served • {exposureSummary.answeredCount} answered • {exposureSummary.completedCount} completed
              </span>
            </div>
            <p className="text-xs text-slate-300">
              <span className="font-bold text-white">{remaining} unseen questions</span> remain in this exam syllabus pool ({result.difficulty || 'all'} difficulty).
            </p>
            {remaining > 0 ? (
              <Link 
                className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition"
                href={`/mock-test/${testId}?${retakeQuery}&fresh=1&count=${Math.min(total, remaining)}&set=${result.attemptId}`}
              >
                <span>Take Next Fresh Set ({Math.min(total, remaining)} Unseen Qs) →</span>
              </Link>
            ) : (
              <div className="space-y-2 pt-1 border-t border-slate-800">
                <p className="text-amber-200 text-xs font-medium">
                  ⚠️ Fresh unseen questions are currently exhausted in this pool. We never silently repeat questions in fresh sets.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <Link
                    href={`/mock-test/${testId}?${retakeQuery}&mode=revision&repeat=1`}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-3 rounded-lg text-center text-xs transition"
                  >
                    Start Revision Mode 🔁
                  </Link>
                  <button
                    onClick={() => {
                      resetLearnerExposure(learnerId, canonicalExamId);
                      setExposureVersion(v => v + 1);
                      showToast('Exposure tracking reset for this exam. You can practice from the beginning!');
                    }}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium py-2 px-3 rounded-lg text-center text-xs transition"
                  >
                    Reset Exposure 🔄
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 italic">
                  {explainResetBehavior(reviewLang as 'en' | 'hi' | 'pa')}
                </p>
              </div>
            )}
          </div>
        )}
        {/* Retake Live Test */}
        <Link 
          href={`/mock-test/${testId}?${retakeQuery}&repeat=1&set=retake-${result.attemptId}`}
          className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition"
        >
          <RotateCcw size={14} /> 
          <span>Retake CBT Mock Test (Shuffle Questions)</span>
        </Link>

        {/* View 60-Day Prep Roadmap */}
        <Link 
          href="/roadmap"
          className="w-full bg-slate-800/90 hover:bg-slate-750 border border-indigo-500/40 text-indigo-200 font-bold py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition"
        >
          <Compass size={14} className="text-indigo-400" />
          <span>Track 60-Day Prep Roadmap & Daily Plan (🧭 रोडमैप)</span>
        </Link>

        {/* Enter Virtual Study Library */}
        <Link 
          href="/library"
          className="w-full bg-slate-800/90 hover:bg-slate-750 border border-teal-500/40 text-teal-200 font-bold py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition"
        >
          <Library size={14} className="text-teal-400" />
          <span>Enter Virtual Study Library & Pomodoro Room (🏛️ लाइब्रेरी)</span>
        </Link>

        {/* Return to Dashboard */}
        <Link 
          href="/dashboard"
          className="w-full text-slate-400 hover:text-white py-2 text-center text-xs"
        >
          Return to Dashboard
        </Link>
      </div>

      {/* Interactive Bottom Sheet Configurator */}
      <MockTestBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        defaultExamId={result.examId || 'master-cadre-sst'}
      />

    </div>
  );
}
