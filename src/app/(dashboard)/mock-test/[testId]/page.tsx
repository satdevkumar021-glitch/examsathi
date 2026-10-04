'use client';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, CheckCircle2, ChevronRight, ChevronLeft, AlertCircle } from 'lucide-react';
import { QUESTIONS, Question } from '@/lib/data/questions';

export default function MockTest({ params }: { params: Promise<{ testId: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  const [qIndex, setQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(15 * 60); // 15 minutes
  const [lang, setLang] = useState<'hi' | 'pa' | 'en'>('hi');

  const testQuestions = QUESTIONS;
  const currentQuestion = testQuestions[qIndex] || testQuestions[0];

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (key: string) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestion.id]: key }));
  };

  const handleClearOption = () => {
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  };

  const handleSubmitTest = () => {
    // Calculate final score
    let correctCount = 0;
    let wrongCount = 0;

    testQuestions.forEach(q => {
      const chosen = userAnswers[q.id];
      if (chosen) {
        if (chosen === q.correct) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    const unattempted = testQuestions.length - (correctCount + wrongCount);
    
    // Store in session storage
    try {
      sessionStorage.setItem('examsathi_last_result', JSON.stringify({
        testId: resolvedParams.testId,
        total: testQuestions.length,
        correct: correctCount,
        wrong: wrongCount,
        unattempted,
        timeTaken: (15 * 60) - secondsRemaining,
      }));
    } catch {
      // Fallback
    }

    router.push(`/results/${resolvedParams.testId}`);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 pb-safe text-slate-100">
      
      {/* Top Test Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800 p-4 flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-white font-bold text-sm truncate max-w-[200px]">
            Master Cadre & Clerk Mock Test #1
          </h1>
          <p className="text-[11px] text-slate-400">Total: {testQuestions.length} Questions • 15 Mins</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Lang toggle */}
          <div className="flex bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            <button 
              onClick={() => setLang('hi')} 
              className={`px-2 py-0.5 text-xs font-semibold rounded ${lang === 'hi' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              हिं
            </button>
            <button 
              onClick={() => setLang('pa')} 
              className={`px-2 py-0.5 text-xs font-semibold rounded ${lang === 'pa' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              ਪੰ
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-2 py-0.5 text-xs font-semibold rounded ${lang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            <Clock size={15} className={secondsRemaining < 120 ? 'text-rose-400 animate-pulse' : 'text-amber-400'} />
            <span className={`font-mono text-xs font-bold ${secondsRemaining < 120 ? 'text-rose-400' : 'text-white'}`}>
              {formatTimer(secondsRemaining)}
            </span>
          </div>
        </div>
      </div>

      {/* Palette Bar */}
      <div className="bg-slate-800/80 p-2.5 border-b border-slate-700/80 flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
        {testQuestions.map((q, idx) => {
          const isCurrent = idx === qIndex;
          const isAnswered = Boolean(userAnswers[q.id]);
          const isMarked = Boolean(markedForReview[q.id]);

          let btnColor = 'bg-slate-700 text-slate-300';
          if (isCurrent) {
            btnColor = 'bg-indigo-500 text-white ring-2 ring-indigo-300';
          } else if (isMarked) {
            btnColor = 'bg-amber-500 text-white';
          } else if (isAnswered) {
            btnColor = 'bg-emerald-600 text-white';
          }

          return (
            <button 
              key={q.id} 
              onClick={() => setQIndex(idx)} 
              className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center font-bold text-xs transition-all ${btnColor}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Question Statement & Options */}
      <div className="p-4 flex-1 overflow-y-auto max-w-xl mx-auto w-full">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-teal-400 font-bold text-xs">Question {qIndex + 1} of {testQuestions.length}</span>
            <span className="text-[10px] bg-slate-800 text-slate-400 border border-slate-700 px-2 py-0.5 rounded">
              {currentQuestion.examTag}
            </span>
          </div>

          <h3 className="text-base text-white font-medium mb-1 leading-relaxed">
            {currentQuestion.question[lang] || currentQuestion.question.hi || currentQuestion.question.en}
          </h3>
          {lang !== 'en' && (
            <h4 className="text-xs text-slate-400 mt-1 italic">{currentQuestion.question.en}</h4>
          )}
        </div>

        {/* Options */}
        <div className="flex flex-col gap-2.5">
          {(['A', 'B', 'C', 'D'] as const).map(key => {
            const opt = currentQuestion.options[key];
            const isSelected = userAnswers[currentQuestion.id] === key;

            return (
              <button 
                key={key} 
                onClick={() => handleSelectOption(key)}
                className={`w-full text-left p-3.5 rounded-xl border flex items-center gap-3 transition-all ${isSelected ? 'bg-indigo-600/20 border-indigo-500 shadow-md' : 'bg-slate-800/80 border-slate-700 hover:border-slate-600'}`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                  {key}
                </div>
                <div className="text-xs">
                  <p className="text-white font-medium">{opt[lang] || opt.hi || opt.en}</p>
                  {lang !== 'en' && <p className="text-slate-400 text-[10px] mt-0.5">{opt.en}</p>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation Actions */}
      <div className="p-3.5 bg-slate-900 border-t border-slate-800 shrink-0">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-2">
          
          <div className="flex gap-2">
            <button 
              onClick={handleToggleReview}
              className={`px-3 py-2 rounded-lg text-xs font-medium border transition ${markedForReview[currentQuestion.id] ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
            >
              {markedForReview[currentQuestion.id] ? 'Marked' : 'Mark Review'}
            </button>
            <button 
              onClick={handleClearOption}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-2 rounded-lg text-xs text-slate-400"
            >
              Clear
            </button>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={() => setQIndex(prev => Math.max(0, prev - 1))}
              disabled={qIndex === 0}
              className="bg-slate-800 disabled:opacity-40 border border-slate-700 px-3 py-2 rounded-lg text-xs text-white flex items-center gap-1"
            >
              <ChevronLeft size={16} /> Prev
            </button>

            {qIndex < testQuestions.length - 1 ? (
              <button 
                onClick={() => setQIndex(prev => prev + 1)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1 shadow"
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button 
                onClick={handleSubmitTest}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2 rounded-lg text-xs shadow-lg"
              >
                Submit Test
              </button>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
