'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  AlertCircle, 
  Layers, 
  HelpCircle,
  RotateCw,
  Award,
  Sparkles,
  ArrowRight,
  Brain,
  ShieldAlert
} from 'lucide-react';
import { Question } from '@/lib/data/questions';
import { 
  getTestQuestions, 
  evaluateUserLevel, 
  calculatePredictedRank,
  AVAILABLE_TEST_TOPICS,
  AVAILABLE_EXAMS
} from '@/lib/data/question_bank_engine';

export default function MockTest({ testId }: { testId?: string }) {
  const router = useRouter();

  const [qIndex, setQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [lang, setLang] = useState<'hi' | 'pa' | 'en'>('hi');
  const [mode, setMode] = useState<'exam' | 'flip'>('exam');
  const [isFlipped, setIsFlipped] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [testTitle, setTestTitle] = useState('Master Cadre & State CBT Mock Test');
  const [secondsRemaining, setSecondsRemaining] = useState(45 * 60);
  const [totalTimeSeconds, setTotalTimeSeconds] = useState(45 * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeExamId, setActiveExamId] = useState<string>('master-cadre-sst');
  const [activeDifficulty, setActiveDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  // Initialize test configuration and questions
  useEffect(() => {
    let topicId = 'all';
    let count = 50;
    let pyqOnly = false;
    let pyq20Years = false;
    let requestedMode: 'exam' | 'flip' = 'exam';
    let examId: string | undefined = undefined;
    let difficulty: 'all' | 'easy' | 'medium' | 'hard' = 'all';

    // 1. Read URL query parameters (Client-side safe for static export)
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('exam')) examId = searchParams.get('exam')!;
      if (searchParams.get('diff')) difficulty = searchParams.get('diff') as any;
      if (searchParams.get('count')) {
        const parsed = parseInt(searchParams.get('count')!, 10);
        if (!isNaN(parsed)) count = parsed;
      }
      if (searchParams.get('pyq') === '20y') {
        pyq20Years = true;
      }
      if (searchParams.get('mode') === 'flip' || searchParams.get('mode') === 'exam') {
        requestedMode = searchParams.get('mode') as any;
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
      const storedConfig = sessionStorage.getItem('examsathi_test_config');
      if (storedConfig) {
        const parsed = JSON.parse(storedConfig);
        if (parsed.topicId) topicId = parsed.topicId;
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
      setTestTitle(pyqOnly || pyq20Years ? `${topicMeta.name} — 20-Yr PYQs${diffLabel}` : `${topicMeta.name}${diffLabel}`);
    } else if (pyq20Years) {
      setTestTitle(`20-Year Archive PYQ Live CBT (2004-2024)${diffLabel}`);
    } else {
      setTestTitle(`Master Cadre & State 50 Qs CBT Simulator${diffLabel}`);
    }

    // 5. Fetch questions from Question Bank Engine
    const loadedQuestions = getTestQuestions({ 
      topicId, 
      examId,
      difficulty,
      pyq20Years,
      pyqOnly, 
      count 
    });
    setQuestions(loadedQuestions);

    const allocatedSeconds = Math.max(300, loadedQuestions.length * 54); // 54 seconds per question (~45 mins for 50 Qs)
    setSecondsRemaining(allocatedSeconds);
    setTotalTimeSeconds(allocatedSeconds);
  }, [testId]);

  // Countdown timer in exam mode
  useEffect(() => {
    if (mode !== 'exam' || questions.length === 0) return;

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
  }, [mode, questions]);

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
    if (isSubmitting || questions.length === 0) return;
    setIsSubmitting(true);

    let correctCount = 0;
    let wrongCount = 0;

    questions.forEach(q => {
      const chosen = userAnswers[q.id];
      if (chosen) {
        if (chosen === q.correct) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    const unattempted = questions.length - (correctCount + wrongCount);
    // Negative marking: 1 mark for correct, -0.25 for incorrect
    const rawScore = Math.max(0, correctCount - (wrongCount * 0.25));
    const percentage = Math.round((correctCount / questions.length) * 100);
    const accuracy = Math.round((correctCount / (correctCount + wrongCount || 1)) * 100);
    const levelInfo = evaluateUserLevel(percentage, accuracy);
    const predictedRank = calculatePredictedRank(percentage, rawScore, questions.length);

    const resultPayload = {
      testId: testId || 'custom',
      testTitle,
      examId: activeExamId,
      difficulty: activeDifficulty,
      total: questions.length,
      correct: correctCount,
      wrong: wrongCount,
      unattempted,
      rawScore: rawScore.toFixed(2),
      percentage,
      accuracy,
      timeTaken: totalTimeSeconds - secondsRemaining,
      level: levelInfo,
      predictedRank,
      questions,
      userAnswers,
      completedAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem('examsathi_last_result', JSON.stringify(resultPayload));
      localStorage.setItem('examsathi_last_result', JSON.stringify(resultPayload));
    } catch {}

    router.push(`/results/${testId || 'latest'}`);
  };

  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-slate-100 p-4">
        <div className="animate-spin text-teal-400 mb-3">
          <RotateCw size={32} />
        </div>
        <p className="text-sm font-semibold">Generating 50-Question CBT Set from 20-Year Archive...</p>
      </div>
    );
  }

  const difficultyBadge = currentQuestion.difficulty === 'easy'
    ? { label: 'Simple 🟢', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' }
    : currentQuestion.difficulty === 'hard'
    ? { label: 'Hard 🔴', color: 'bg-rose-500/15 text-rose-300 border-rose-500/30' }
    : { label: 'Mid 🟡', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' };

  return (
    <div className="flex flex-col h-screen bg-slate-900 pb-safe text-slate-100">
      
      {/* Top Test Header Bar */}
      <div className="bg-slate-900/95 border-b border-slate-800 p-3.5 flex justify-between items-center shrink-0">
        <div className="min-w-0 pr-2">
          <h1 className="text-white font-bold text-xs truncate max-w-[210px]">
            {testTitle}
          </h1>
          <p className="text-[10px] text-slate-400">
            {questions.length} Questions • {mode === 'exam' ? 'Exam Mode (-0.25 Mark)' : '3D Flip Card Practice'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <button
            onClick={() => {
              setMode(m => m === 'exam' ? 'flip' : 'exam');
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
            {mode === 'exam' ? 'CBT' : 'Flip'}
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
                    {currentQuestion.examTag || 'Punjab Master Cadre PYQ'} {currentQuestion.year ? `(${currentQuestion.year})` : ''}
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
                    <span className="text-amber-400 font-bold block mb-1">Official Rationalization:</span>
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
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setQIndex(prev => Math.min(questions.length - 1, prev + 1));
                  }}
                  className="bg-rose-900/40 hover:bg-rose-800/60 border border-rose-700/50 text-rose-300 p-2 rounded-xl text-center text-[10px] font-bold"
                >
                  Again (&lt;1d)
                </button>
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setQIndex(prev => Math.min(questions.length - 1, prev + 1));
                  }}
                  className="bg-amber-900/40 hover:bg-amber-800/60 border border-amber-700/50 text-amber-300 p-2 rounded-xl text-center text-[10px] font-bold"
                >
                  Hard (1d)
                </button>
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setQIndex(prev => Math.min(questions.length - 1, prev + 1));
                  }}
                  className="bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-700/50 text-emerald-300 p-2 rounded-xl text-center text-[10px] font-bold"
                >
                  Good (3d)
                </button>
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setQIndex(prev => Math.min(questions.length - 1, prev + 1));
                  }}
                  className="bg-indigo-900/40 hover:bg-indigo-800/60 border border-indigo-700/50 text-indigo-300 p-2 rounded-xl text-center text-[10px] font-bold"
                >
                  Easy (7d)
                </button>
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
