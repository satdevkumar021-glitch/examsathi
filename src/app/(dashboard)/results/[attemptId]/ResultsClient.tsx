'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Target, Clock, Trophy, CheckCircle2, XCircle, MinusCircle, ArrowRight, RotateCcw } from 'lucide-react';

export default function Results() {
  const [result, setResult] = useState({
    total: 10,
    correct: 8,
    wrong: 2,
    unattempted: 0,
    timeTaken: 720, // 12 mins in seconds
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
  
  const accuracy = total > 0 ? Math.round((correct / (correct + wrong || 1)) * 100) : 0;
  const percentage = Math.round((correct / total) * 100);
  const minsTaken = Math.floor(result.timeTaken / 60);
  const secsTaken = result.timeTaken % 60;

  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-20 text-slate-100 max-w-xl mx-auto w-full">
      
      {/* Header */}
      <div className="text-center mt-4">
        <span className="text-3xl mb-1 inline-block">🎉</span>
        <h1 className="text-2xl font-bold text-white">Test Completed!</h1>
        <p className="text-xs text-slate-400 mt-1">Detailed Performance & Readiness Analysis</p>
      </div>

      {/* Circular Progress Gauge */}
      <div className="flex justify-center my-2">
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
            <div className="text-4xl font-extrabold text-white font-mono">{correct}/{total}</div>
            <div className="text-[11px] font-bold text-teal-400 uppercase tracking-widest mt-0.5">{percentage}% Score</div>
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
          <div className="text-white font-bold text-base">Top 12%</div>
          <div className="text-[10px] text-slate-400 uppercase font-semibold">State Rank</div>
        </div>
      </div>

      {/* Section Breakdown */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-md">
        <h3 className="text-white font-bold text-sm mb-3.5">Question Breakdown</h3>
        
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span className="text-slate-300">Correct Answers (+1 Mark each)</span>
            </div>
            <span className="text-emerald-400 font-bold text-sm">{correct}</span>
          </div>

          <div className="flex items-center justify-between text-xs bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2">
              <XCircle size={16} className="text-rose-400" />
              <span className="text-slate-300">Incorrect Answers</span>
            </div>
            <span className="text-rose-400 font-bold text-sm">{wrong}</span>
          </div>

          <div className="flex items-center justify-between text-xs bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2">
              <MinusCircle size={16} className="text-slate-400" />
              <span className="text-slate-300">Unattempted Questions</span>
            </div>
            <span className="text-slate-400 font-bold text-sm">{unattempted}</span>
          </div>
        </div>
      </div>

      {/* Weak Area Diagnostic */}
      <div className="bg-rose-950/30 border border-rose-500/40 rounded-2xl p-4">
        <h4 className="text-rose-300 font-bold text-sm mb-1.5 flex items-center gap-2">
          <span>⚠️</span> Weak Area Identified
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          Based on your answers, revision is suggested for <strong>Punjab History & Sikh Gurus Timeline</strong> and <strong>1857 Revolt Leaders</strong>. Use Flashcards to reinforce memory retention!
        </p>
        <Link 
          href="/lesson/punjab-history"
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-rose-300 hover:text-rose-200 font-bold"
        >
          Review Punjab History Lesson <ArrowRight size={14} />
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2.5 mt-2">
        <Link 
          href="/lesson/modern-india"
          className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 hover:opacity-95 text-white font-bold py-3.5 rounded-xl text-center text-xs shadow-lg flex items-center justify-center gap-2"
        >
          Review Mistakes with Flipcards 🃏
        </Link>
        <Link 
          href="/mock-test/1"
          className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 transition"
        >
          <RotateCcw size={14} /> Retake Practice Test
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
