'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Target, Clock, Trophy, CheckCircle2, XCircle, MinusCircle, 
  ArrowRight, RotateCcw, Layers, Award, Sparkles, AlertCircle, BookOpen
} from 'lucide-react';
import { evaluateUserLevel, UserPerformanceLevel } from '@/lib/data/question_bank_engine';

interface StoredResult {
  testId?: string;
  testTitle?: string;
  total?: number;
  correct?: number;
  wrong?: number;
  unattempted?: number;
  rawScore?: string | number;
  percentage?: number;
  accuracy?: number;
  timeTaken?: number;
  level?: UserPerformanceLevel;
  completedAt?: string;
}

export default function Results() {
  const [result, setResult] = useState<StoredResult>({
    total: 10,
    correct: 8,
    wrong: 2,
    unattempted: 0,
    timeTaken: 540,
    rawScore: '7.50',
    percentage: 80,
    accuracy: 80,
  });

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('examsathi_last_result');
      if (stored) {
        setResult(JSON.parse(stored));
      }
    } catch {
      // Fallback
    }
  }, []);

  const total = result.total || 10;
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

  const timeTaken = result.timeTaken || 360;
  const minsTaken = Math.floor(timeTaken / 60);
  const secsTaken = timeTaken % 60;

  // Evaluate candidate level if not precomputed
  const candidateLevel: UserPerformanceLevel = result.level || evaluateUserLevel(percentage, accuracy);

  const testId = result.testId || '1';
  const testTitle = result.testTitle || 'Punjab Master Cadre Practice Mock';

  const STATUS_COLORS: Record<string, string> = {
    exam_ready: 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300',
    advanced: 'border-teal-500/50 bg-teal-950/30 text-teal-300',
    intermediate: 'border-indigo-500/50 bg-indigo-950/30 text-indigo-300',
    developing: 'border-amber-500/50 bg-amber-950/30 text-amber-300',
    foundation: 'border-rose-500/50 bg-rose-950/30 text-rose-300',
  };
  const levelColor = STATUS_COLORS[candidateLevel.status] || 'border-teal-500/50 bg-teal-950/30 text-teal-300';

  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-24 text-slate-100 max-w-xl mx-auto w-full">
      
      {/* Header */}
      <div className="text-center mt-3">
        <div className="text-4xl mb-1 inline-block animate-bounce">{candidateLevel.badge}</div>
        <h1 className="text-2xl font-black text-white">Test Completed!</h1>
        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{testTitle}</p>
      </div>

      {/* Candidate Level Diagnostic Card */}
      <div className={`p-4 rounded-2xl border ${levelColor} shadow-lg backdrop-blur-sm`}>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <Award className="text-amber-400" size={20} />
            <span className="text-xs font-black tracking-wider uppercase text-slate-300">
              Candidate Diagnostic Level
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

      {/* Circular Progress Gauge */}
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
            <div className="text-[11px] font-bold text-teal-400 uppercase tracking-wider mt-0.5">{percentage}% Accuracy</div>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
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
          <div className="text-white font-bold text-base">{candidateLevel.percentile.replace('Candidates', '').replace('Competitors', '').trim()}</div>
          <div className="text-[10px] text-slate-400 uppercase font-semibold">State Rank</div>
        </div>
      </div>

      {/* Negative Marking Breakdown Card */}
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

      {/* Weak Area Diagnostic */}
      <div className="bg-rose-950/30 border border-rose-500/40 rounded-2xl p-4">
        <h4 className="text-rose-300 font-bold text-sm mb-1.5 flex items-center gap-2">
          <AlertCircle size={16} className="text-rose-400" />
          <span>Smart Revision Advice</span>
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          {wrong > 0 
            ? `You got ${wrong} questions incorrect. Active recall via 3D Flip Cards is scientifically proven to eliminate negative marking mistakes in competitive exams.`
            : `Outstanding performance with zero mistakes! Keep reviewing 3D Flip Cards periodically using spaced repetition to maintain peak retention.`}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2.5 mt-1">
        {/* Review in Flip Card Mode */}
        <Link 
          href={`/mock-test/${testId}?mode=flip`}
          className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 hover:opacity-95 text-white font-bold py-3.5 rounded-xl text-center text-xs shadow-lg flex items-center justify-center gap-2"
        >
          <Layers size={16} />
          <span>Review All Questions in 3D Flip Card Mode</span>
        </Link>

        {/* Retake Live Test */}
        <Link 
          href={`/mock-test/${testId}`}
          className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition"
        >
          <RotateCcw size={14} /> 
          <span>Retake Live CBT Mock Test</span>
        </Link>

        {/* Explore All Topic Tests */}
        <Link 
          href="/mock-test"
          className="w-full bg-slate-850 hover:bg-slate-800 border border-slate-700 text-teal-400 hover:text-teal-300 font-medium py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition"
        >
          <BookOpen size={14} /> 
          <span>Browse All 15+ Topic Mock Tests & 10-Yr PYQs</span>
        </Link>

        <Link 
          href="/dashboard"
          className="w-full text-slate-400 hover:text-white py-2 text-center text-xs"
        >
          Return to Dashboard
        </Link>
      </div>

    </div>
  );
}
