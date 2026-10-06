'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Target, Clock, Trophy, CheckCircle2, XCircle, MinusCircle, 
  ArrowRight, RotateCcw, Layers, Award, Sparkles, AlertCircle, 
  BookOpen, Brain, BookmarkCheck, Bookmark, Check, SlidersHorizontal,
  FileText, Share2, Flame, HelpCircle
} from 'lucide-react';
import { 
  evaluateUserLevel, 
  calculatePredictedRank, 
  UserPerformanceLevel, 
  PredictedRankReport 
} from '@/lib/data/question_bank_engine';
import { Question } from '@/lib/data/questions';
import MockTestBottomSheet from '@/components/ui/MockTestBottomSheet';

interface StoredResult {
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
  questions?: Question[];
  userAnswers?: Record<string, string>;
  completedAt?: string;
}

export default function Results() {
  const [result, setResult] = useState<StoredResult>({
    total: 50,
    correct: 42,
    wrong: 8,
    unattempted: 0,
    timeTaken: 2100,
    rawScore: '40.00',
    percentage: 84,
    accuracy: 84,
  });

  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');
  const [reviewLang, setReviewLang] = useState<'hi' | 'pa' | 'en'>('hi');
  const [savedNoteIds, setSavedNoteIds] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('examsathi_last_result') || localStorage.getItem('examsathi_last_result');
      if (stored) {
        setResult(JSON.parse(stored));
      }
      
      // Load saved notes index
      const savedNotesRaw = localStorage.getItem('examsathi_saved_review_notes');
      if (savedNotesRaw) {
        const parsed = JSON.parse(savedNotesRaw);
        const map: Record<string, boolean> = {};
        parsed.forEach((item: any) => {
          if (item.questionId) map[item.questionId] = true;
        });
        setSavedNoteIds(map);
      }
    } catch {
      // Fallback
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const total = result.total || 50;
  const correct = result.correct || 0;
  const wrong = result.wrong || 0;
  const unattempted = result.unattempted ?? Math.max(0, total - (correct + wrong));
  
  const accuracy = result.accuracy ?? (total > 0 ? Math.round((correct / (correct + wrong || 1)) * 100) : 0);
  const percentage = result.percentage ?? Math.round((correct / total) * 100);
  
  // Calculate or retrieve raw score with -0.25 negative marking
  const penalty = (wrong * 0.25).toFixed(2);
  const rawScore = result.rawScore 
    ? typeof result.rawScore === 'number' ? result.rawScore.toFixed(2) : result.rawScore 
    : Math.max(0, correct - (wrong * 0.25)).toFixed(2);

  const numericRawScore = parseFloat(rawScore.toString());

  const timeTaken = result.timeTaken || 2100;
  const minsTaken = Math.floor(timeTaken / 60);
  const secsTaken = timeTaken % 60;

  // Evaluate candidate level and predicted rank if not precomputed
  const candidateLevel: UserPerformanceLevel = result.level || evaluateUserLevel(percentage, accuracy);
  const predictedRank: PredictedRankReport = result.predictedRank || calculatePredictedRank(percentage, numericRawScore, total);

  const testId = result.testId || '1';
  const testTitle = result.testTitle || 'Punjab Master Cadre 50-Question CBT Simulation';
  const questions = result.questions || [];
  const userAnswers = result.userAnswers || {};

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

  // Filter questions for detailed review
  const filteredQuestions = questions.filter(q => {
    const isAnswered = Boolean(userAnswers[q.id]);
    const isCorrect = userAnswers[q.id] === q.correct;
    if (reviewFilter === 'wrong') return isAnswered && !isCorrect;
    if (reviewFilter === 'correct') return isCorrect;
    return true; // 'all'
  });

  // Handler: Save single question explanation to notes
  const handleSaveToNotes = (q: Question) => {
    try {
      const existingRaw = localStorage.getItem('examsathi_saved_review_notes');
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
      const topicRaw = localStorage.getItem(topicNotesKey);
      const topicNotes = topicRaw ? JSON.parse(topicRaw) : [];
      topicNotes.unshift({
        id: noteEntry.id,
        text: `📌 [MCQ Review - ${q.examTag || 'Exam'}]\n\nप्रश्न: ${q.question.hi}\n\nसही उत्तर (${q.correct}): ${noteEntry.correctText}\n\nव्याख्या: ${noteEntry.explanation}${noteEntry.thought ? `\n\nपरीक्षक विचार: ${noteEntry.thought}` : ''}`,
        date: noteEntry.savedAt,
      });
      localStorage.setItem(topicNotesKey, JSON.stringify(topicNotes));

      // Append to global saved review notes
      const filtered = existing.filter((item: any) => item.questionId !== q.id);
      filtered.unshift(noteEntry);
      localStorage.setItem('examsathi_saved_review_notes', JSON.stringify(filtered));

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
      const existingRaw = localStorage.getItem('examsathi_saved_review_notes');
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
        const topicRaw = localStorage.getItem(topicNotesKey);
        const topicNotes = topicRaw ? JSON.parse(topicRaw) : [];
        topicNotes.unshift({
          id: noteEntry.id,
          text: `📌 [Mistake Review - ${q.examTag || 'Exam'}]\n\nप्रश्न: ${q.question.hi}\n\nसही उत्तर (${q.correct}): ${noteEntry.correctText}\n\nव्याख्या: ${noteEntry.explanation}${noteEntry.thought ? `\n\nपरीक्षक विचार: ${noteEntry.thought}` : ''}`,
          date: noteEntry.savedAt,
        });
        localStorage.setItem(topicNotesKey, JSON.stringify(topicNotes));
        existing.unshift(noteEntry);
      });

      localStorage.setItem('examsathi_saved_review_notes', JSON.stringify(existing));

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
                Official Competitive Benchmark
              </span>
              <h2 className="text-base font-black text-white">Predicted State Merit Rank</h2>
            </div>
          </div>
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black px-2.5 py-1 rounded-full">
            Top {100 - predictedRank.percentile}% Tier
          </span>
        </div>

        {/* State Rank & Percentile Big Stats */}
        <div className="grid grid-cols-2 gap-3 bg-slate-900/70 p-3.5 rounded-xl border border-slate-700/60">
          <div>
            <span className="text-[10px] text-slate-400 font-semibold block uppercase">Predicted State Rank</span>
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
            Category-Wise Merit Projection
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
          <div className="text-white font-bold text-base">#{predictedRank.stateRank}</div>
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
              {difficultyStats.easy.correct} / {difficultyStats.easy.total || (total ? Math.round(total * 0.3) : 15)}
            </div>
            <span className="text-[9px] text-slate-400">
              {difficultyStats.easy.total > 0 
                ? `${Math.round((difficultyStats.easy.correct / difficultyStats.easy.total) * 100)}% Acc` 
                : 'Direct Facts'}
            </span>
          </div>

          {/* Mid / Medium */}
          <div className="bg-slate-900/60 p-3 rounded-xl border border-amber-500/30 text-center">
            <span className="text-[10px] font-bold text-amber-300 block mb-0.5">Mid 🟡</span>
            <div className="text-base font-black text-white">
              {difficultyStats.medium.correct} / {difficultyStats.medium.total || (total ? Math.round(total * 0.5) : 25)}
            </div>
            <span className="text-[9px] text-slate-400">
              {difficultyStats.medium.total > 0 
                ? `${Math.round((difficultyStats.medium.correct / difficultyStats.medium.total) * 100)}% Acc` 
                : 'Competitive'}
            </span>
          </div>

          {/* Hard */}
          <div className="bg-slate-900/60 p-3 rounded-xl border border-rose-500/30 text-center">
            <span className="text-[10px] font-bold text-rose-300 block mb-0.5">Hard 🔴</span>
            <div className="text-base font-black text-white">
              {difficultyStats.hard.correct} / {difficultyStats.hard.total || (total ? Math.round(total * 0.2) : 10)}
            </div>
            <span className="text-[9px] text-slate-400">
              {difficultyStats.hard.total > 0 
                ? `${Math.round((difficultyStats.hard.correct / difficultyStats.hard.total) * 100)}% Acc` 
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
            -0.25 Mark Penalty
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
              <span className="text-slate-300">Incorrect Penalty (-0.25 Mark)</span>
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
          <div className="flex gap-1.5">
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
                          <XCircle size={12} /> Incorrect (-0.25)
                        </span>
                      )}
                    </div>
                  </div>

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

                  {/* Action Bar: Save Explanation into Notes */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-700/60">
                    <span className="text-[11px] text-slate-400">
                      Correct: <strong className="text-emerald-400">Option ({q.correct})</strong>
                      {userChoice && (
                        <span> • Your Answer: <strong className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>({userChoice})</strong></span>
                      )}
                    </span>

                    <button
                      onClick={() => handleSaveToNotes(q)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                        isSaved
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                      }`}
                    >
                      {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                      <span>{isSaved ? 'Saved in Notes ✓' : 'Save to Notes 📝'}</span>
                    </button>
                  </div>

                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 7. ACTION BUTTONS */}
      <div className="flex flex-col gap-2.5 mt-2">
        {/* Review in Flip Card Mode */}
        <Link 
          href={`/mock-test/${testId}?mode=flip`}
          className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 hover:opacity-95 text-white font-bold py-3.5 rounded-xl text-center text-xs shadow-lg flex items-center justify-center gap-2"
        >
          <Layers size={16} />
          <span>Review Entire 50 Qs Set in 3D Flip Card Mode</span>
        </Link>

        {/* Retake Live Test */}
        <Link 
          href={`/mock-test/${testId}`}
          className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition"
        >
          <RotateCcw size={14} /> 
          <span>Retake CBT Mock Test (Shuffle Questions)</span>
        </Link>

        {/* Configure Another Mock Test (Drawer) */}
        <button 
          onClick={() => setIsBottomSheetOpen(true)}
          className="w-full bg-slate-850 hover:bg-slate-800 border border-teal-500/40 text-teal-300 font-bold py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition"
        >
          <SlidersHorizontal size={14} />
          <span>Configure Another Exam Test (Bottom Sheet)</span>
        </button>

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
