'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Award, RotateCcw, CheckCircle2, AlertTriangle, Keyboard } from 'lucide-react';

const PRACTICE_PASSAGES = {
  punjabi: {
    beginner: 'ਪੰਜਾਬ ਭਾਰਤ ਦਾ ਇੱਕ ਖੁਸ਼ਹਾਲ ਸੂਬਾ ਹੈ। ਇਸ ਦੀ ਧਰਤੀ ਬਹੁਤ ਉਪਜਾਊ ਹੈ। ਪੰਜਾਬ ਵਿੱਚ ਪੰਜ ਦਰਿਆ ਵਗਦੇ ਰਹੇ ਹਨ ਜਿਨ੍ਹਾਂ ਕਾਰਨ ਇਸ ਦਾ ਨਾਮ ਪੰਜਾਬ ਪਿਆ। ਇੱਥੋਂ ਦੇ ਕਿਸਾਨ ਬਹੁਤ ਮਿਹਨਤੀ ਹਨ ਅਤੇ ਦੇਸ਼ ਦੇ ਅੰਨ ਭੰਡਾਰ ਵਿੱਚ ਵੱਡਾ ਯੋਗਦਾਨ ਪਾਉਂਦੇ ਹਨ।',
    intermediate: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਕਿਰਤ ਕਰੋ, ਨਾਮ ਜਪੋ ਅਤੇ ਵੰਡ ਛਕੋ ਦਾ ਸੰਦੇਸ਼ ਦਿੱਤਾ। ਪੰਜਾਬ ਸਰਕਾਰ ਵੱਲੋਂ ਨੌਜਵਾਨਾਂ ਨੂੰ ਸਰਕਾਰੀ ਨੌਕਰੀਆਂ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਭਰਤੀ ਮੁਹਿੰਮ ਚਲਾਈ ਗਈ ਹੈ। ਪੰਜਾਬ ਅਧੀਨ ਸੇਵਾਵਾਂ ਚੋਣ ਬੋਰਡ ਵੱਲੋਂ ਕਲਰਕ ਦੀ ਭਰਤੀ ਲਈ ਰਾਵੀ ਫੌਂਟ ਦੀ ਟਾਈਪਿੰਗ ਪ੍ਰੀਖਿਆ ਲਾਜ਼ਮੀ ਕੀਤੀ ਗਈ ਹੈ।',
    hard: 'ਪੰਜਾਬ ਸਿਵਲ ਸੇਵਾਵਾਂ ਨਿਯਮਾਂ ਅਧੀਨ ਸਮੂਹ ਬੋਰਡਾਂ ਅਤੇ ਨਿਗਮਾਂ ਵਿੱਚ ਗਰੁੱਪ ਸੀ ਦੀਆਂ ਅਸਾਮੀਆਂ ਲਈ ਉਮੀਦਵਾਰਾਂ ਨੂੰ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਵਿੱਚ ਯੋਗਤਾ ਟੈਸਟ ਪਾਸ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੋਵੇਗਾ। ਇਸ ਇਮਤਿਹਾਨ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਤੀਹ ਸ਼ਬਦ ਪ੍ਰਤੀ ਮਿੰਟ ਦੀ ਗਤੀ ਅਤੇ ਬਾਨਵੇਂ ਫੀਸਦੀ ਸ਼ੁੱਧਤਾ ਹੋਣੀ ਅਤਿ ਜ਼ਰੂਰੀ ਹੈ ਤਾਂ ਜੋ ਪ੍ਰਬੰਧਕੀ ਕੰਮਕਾਜ ਸੁਚਾਰੂ ਢੰਗ ਨਾਲ ਚਲਾਇਆ ਜਾ ਸਕੇ।',
  },
  english: {
    beginner: 'Punjab is a vibrant and culturally rich state located in northwest India. It is globally renowned for its immense agricultural contribution and rich traditions. Hard work and resilience define the true spirit of the people of Punjab.',
    intermediate: 'The Subordinate Services Selection Board of Punjab conducts regular recruitment drives for Clerk and administrative cadres. Candidates are required to demonstrate proficiency in English typing at a minimum speed of thirty words per minute with ninety-two percent accuracy.',
    hard: 'In accordance with official government directives, administrative efficiency necessitates proficient bilingual keyboard skills. The standardized assessment framework benchmarks candidates on keystroke fidelity, word pacing, and rigorous accuracy standards to ensure seamless office document processing.',
  },
};

export default function TypingPracticePage() {
  const router = useRouter();
  
  const [lang, setLang] = useState<'punjabi' | 'english'>('punjabi');
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'hard'>('intermediate');
  // Official Punjab Clerk typing test: 10 minutes benchmark
  const [testDuration, setTestDuration] = useState<number>(600);
  
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(600);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const targetText = PRACTICE_PASSAGES[lang][difficulty];

  // Handle timer
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, timeLeft]);

  const handleStartTyping = (text: string) => {
    if (!isRunning && !isFinished) {
      setIsRunning(true);
    }
    setUserInput(text);

    // If typed everything
    if (text.length >= targetText.length) {
      setIsRunning(false);
      setIsFinished(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setUserInput('');
    setTimeLeft(testDuration);
    setIsRunning(false);
    setIsFinished(false);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleDurationChange = (dur: number) => {
    setTestDuration(dur);
    setTimeLeft(dur);
    setUserInput('');
    setIsRunning(false);
    setIsFinished(false);
  };

  // Metrics
  const timeElapsed = testDuration - timeLeft;
  const timeInMinutes = timeElapsed / 60;
  const totalCharsTyped = userInput.length;
  // WPM: standard formula — (chars / 5) / minutes; 5 chars = 1 word
  const wpm = timeInMinutes > 0 ? Math.round((totalCharsTyped / 5) / timeInMinutes) : 0;

  // Calculate Accuracy: correct chars vs total chars typed
  let correctChars = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === targetText[i]) {
      correctChars++;
    }
  }
  const accuracy = totalCharsTyped > 0 ? Math.round((correctChars / totalCharsTyped) * 100) : 100;
  const isPsssBQualified = wpm >= 30 && accuracy >= 92;

  return (
    <div className="p-4 flex flex-col gap-5 min-h-screen bg-slate-900 pb-20 text-slate-100 max-w-2xl mx-auto w-full">

      {/* Raavi Unicode Notice Banner */}
      <div className="bg-amber-950/40 border border-amber-700/50 rounded-xl p-3 text-xs text-amber-200">
        <strong>📋 Important:</strong> This practice uses the <strong>Raavi Unicode</strong> keyboard layout (recommended by Punjab government). If your system uses legacy ASCII Raavi (Asees font), the key positions may differ. Always check your exam hall instruction before the exam.
      </div>

      {/* Header */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()} 
            className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Keyboard size={20} className="text-teal-400" />
              PSSSB Clerk Typing Room
            </h1>
            <p className="text-xs text-slate-400">Raavi Font Punjabi & English Speed Practice Simulator</p>
          </div>
        </div>

        <button 
          onClick={handleReset}
          className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 text-slate-300"
        >
          <RotateCcw size={14} /> Reset
        </button>
      </div>

      {/* Official PSSSB Rule Banner */}
      <div className="bg-indigo-950/60 border border-indigo-500/30 p-3 rounded-xl flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Award size={16} className="text-amber-400 shrink-0" />
          <span className="text-indigo-200">
            <strong>Official Benchmark:</strong> 30 WPM with &ge;92% Accuracy in 10 mins (Raavi Font)
          </span>
        </div>
      </div>

      {/* Controls Bar: Language, Level, Time */}
      <div className="flex flex-col gap-2 text-xs">
        <div className="grid grid-cols-2 gap-2">
        {/* Language */}
        <div className="bg-slate-800/90 border border-slate-700 p-2 rounded-xl">
          <span className="text-[10px] text-slate-400 font-semibold block mb-1">Language</span>
          <div className="flex gap-1">
            <button 
              onClick={() => { setLang('punjabi'); handleReset(); }}
              className={`flex-1 py-1 rounded text-center font-bold ${lang === 'punjabi' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              ਪੰਜਾਬੀ
            </button>
            <button 
              onClick={() => { setLang('english'); handleReset(); }}
              className={`flex-1 py-1 rounded text-center font-bold ${lang === 'english' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* Difficulty */}
        <div className="bg-slate-800/90 border border-slate-700 p-2 rounded-xl">
          <span className="text-[10px] text-slate-400 font-semibold block mb-1">Level</span>
          <select 
            value={difficulty}
            onChange={e => { setDifficulty(e.target.value as any); handleReset(); }}
            className="w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-200 font-medium outline-none"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Exam Level</option>
            <option value="hard">Hard (Official)</option>
          </select>
        </div>
        </div>{/* end grid-cols-2 */}

        {/* Duration */}
        <div className="bg-slate-800/90 border border-slate-700 p-2 rounded-xl">
          <span className="text-[10px] text-slate-400 font-semibold block mb-1">Timer Preset</span>
          <div className="flex gap-1">
            <button
              onClick={() => handleDurationChange(60)}
              className={`flex-1 py-1 rounded text-center font-bold text-[10px] ${testDuration === 60 ? 'bg-teal-600 text-white' : 'text-slate-400'}`}
            >
              1m Practice
            </button>
            <button
              onClick={() => handleDurationChange(300)}
              className={`flex-1 py-1 rounded text-center font-bold text-[10px] ${testDuration === 300 ? 'bg-teal-600 text-white' : 'text-slate-400'}`}
            >
              5m Warm-up
            </button>
            <button
              onClick={() => handleDurationChange(600)}
              className={`flex-1 py-1 rounded text-center font-bold text-[10px] ${testDuration === 600 ? 'bg-amber-500 text-slate-950' : 'text-amber-400'}`}
            >
              ⭐ 10m Official
            </button>
            <button
              onClick={() => handleDurationChange(900)}
              className={`flex-1 py-1 rounded text-center font-bold text-[10px] ${testDuration === 900 ? 'bg-teal-600 text-white' : 'text-slate-400'}`}
            >
              15m Extended
            </button>
          </div>
          {testDuration === 600 && (
            <p className="text-[9px] text-amber-400 mt-1 text-center font-semibold">Punjab Clerk Benchmark — 30 WPM / 96%</p>
          )}
        </div>
      </div>

      {/* Real-time KPI Scorecard */}
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-slate-800/90 border border-slate-700 p-2.5 rounded-xl text-center">
          <span className="text-xl font-bold font-mono text-teal-400">{wpm}</span>
          <span className="text-[10px] text-slate-400 uppercase block font-semibold">Speed (WPM)</span>
        </div>
        <div className="bg-slate-800/90 border border-slate-700 p-2.5 rounded-xl text-center">
          <span className={`text-xl font-bold font-mono ${accuracy >= 92 ? 'text-emerald-400' : 'text-rose-400'}`}>{accuracy}%</span>
          <span className="text-[10px] text-slate-400 uppercase block font-semibold">Accuracy</span>
        </div>
        <div className="bg-slate-800/90 border border-slate-700 p-2.5 rounded-xl text-center">
          <span className="text-xl font-bold font-mono text-amber-400">{timeLeft}s</span>
          <span className="text-[10px] text-slate-400 uppercase block font-semibold">Time Left</span>
        </div>
        <div className="bg-slate-800/90 border border-slate-700 p-2.5 rounded-xl text-center">
          <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${isPsssBQualified ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50' : 'bg-rose-950 text-rose-300 border border-rose-500/50'}`}>
            {isPsssBQualified ? 'PASSED' : 'NEED 30/92'}
          </span>
          <span className="text-[10px] text-slate-400 uppercase block font-semibold mt-1">Status</span>
        </div>
      </div>

      {/* Target Paragraph Display */}
      <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 shadow-inner">
        <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-2 font-bold flex items-center justify-between">
          <span>Target Text Passage</span>
          <span className="text-teal-400 font-mono">{userInput.length} / {targetText.length} chars</span>
        </p>

        <div className="text-sm font-medium leading-relaxed tracking-wide select-none p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 max-h-40 overflow-y-auto">
          {targetText.split('').map((char, index) => {
            let color = 'text-slate-400';
            if (index < userInput.length) {
              color = userInput[index] === char ? 'text-emerald-400 bg-emerald-950/40' : 'text-rose-400 bg-rose-950/60 underline';
            } else if (index === userInput.length) {
              color = 'text-white bg-indigo-500/50 font-bold';
            }
            return (
              <span key={index} className={color}>
                {char}
              </span>
            );
          })}
        </div>
      </div>

      {/* User Input Area */}
      <div className="relative">
        <textarea
          ref={inputRef}
          value={userInput}
          disabled={isFinished}
          onChange={e => handleStartTyping(e.target.value)}
          placeholder={lang === 'punjabi' ? 'ਇੱਥੇ ਟਾਈਪ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ (ਟਾਈਪਿੰਗ ਸ਼ੁਰੂ ਹੁੰਦੇ ਹੀ ਟਾਈਮਰ ਚੱਲ ਪਵੇਗਾ)...' : 'Start typing here (timer triggers automatically on first keystroke)...'}
          className="w-full bg-slate-800 border-2 border-slate-700 focus:border-teal-400 rounded-2xl p-4 text-white text-sm leading-relaxed outline-none transition h-32 resize-none disabled:opacity-60"
        />
        {!isRunning && !isFinished && userInput.length === 0 && (
          <div className="absolute bottom-4 right-4 pointer-events-none text-slate-500 text-xs">
            Press any key to begin ⌨️
          </div>
        )}
      </div>

      {/* Result Modal or Summary when Finished */}
      {isFinished && (
        <div className={`p-4 rounded-2xl border ${isPsssBQualified ? 'bg-emerald-950/60 border-emerald-500/50' : 'bg-rose-950/60 border-rose-500/50'} animate-fadeIn text-center space-y-2`}>
          <div className="text-2xl mb-1">{isPsssBQualified ? '🏆' : '⚠️'}</div>
          <h3 className="font-bold text-base text-white">
            {isPsssBQualified ? 'Congratulations! You qualified PSSSB criteria!' : 'Keep practicing! Minimum 30 WPM & 92% accuracy needed.'}
          </h3>
          <p className="text-xs text-slate-300">
            Speed: <strong>{wpm} WPM</strong> | Accuracy: <strong>{accuracy}%</strong> | Chars: <strong>{totalCharsTyped}</strong>
          </p>
          <button 
            onClick={handleReset}
            className="mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-2 rounded-xl text-xs transition"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Raavi Keyboard Shortcuts Cheat Sheet */}
      <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5 text-xs text-slate-300">
        <h4 className="font-bold text-white mb-1.5 flex items-center gap-1.5">
          <span>💡</span> ਰਾਵੀ ਫੌਂਟ ਜ਼ਰੂਰੀ ਕਮਾਂਡਾਂ (Raavi Font Special Keys)
        </h4>
        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400 pt-1">
          <span>• ਪੈਰੀਂ ਰ (Subscript Ra): <strong>Shift + D</strong></span>
          <span>• ਬਿੰਦੀ: <strong>Shift + Z</strong></span>
          <span>• ਟਿੱਪੀ: <strong>Shift + X</strong></span>
          <span>• ਅੱਧਕ: <strong>Shift + U</strong></span>
          <span className="col-span-2">• ਵਿਰਾਮ ਚਿੰਨ੍ਹ (Halant ੍): <strong>Shift + D</strong> (਼ combiner)</span>
        </div>
        <p className="text-[10px] text-amber-400/80 mt-2">⚠️ Key hints are for Raavi Unicode layout. Legacy ASCII Raavi layouts differ.</p>
      </div>

    </div>
  );
}
