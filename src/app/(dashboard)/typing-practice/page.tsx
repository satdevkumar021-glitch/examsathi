'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, Clock, Award, RotateCcw, CheckCircle2, 
  AlertTriangle, Keyboard, Info, Check, HelpCircle 
} from 'lucide-react';

const PRACTICE_PASSAGES = {
  punjabi: {
    beginner: `ਪੰਜਾਬ ਭਾਰਤ ਦਾ ਇੱਕ ਅਤਿਅੰਤ ਖੁਸ਼ਹਾਲ ਅਤੇ ਇਤਿਹਾਸਕ ਸੂਬਾ ਹੈ। ਇਸ ਦੀ ਪਵਿੱਤਰ ਧਰਤੀ ਬਹੁਤ ਹੀ ਉਪਜਾਊ ਅਤੇ ਜਰਖੇਜ਼ ਹੈ। ਪੰਜਾਬ ਵਿੱਚ ਸਦੀਆਂ ਤੋਂ ਪੰਜ ਮਹਾਨ ਦਰਿਆ ਵਗਦੇ ਰਹੇ ਹਨ ਜਿਨ੍ਹਾਂ ਕਾਰਨ ਇਸ ਧਰਤੀ ਨੂੰ ਪੰਚ-ਨਦ ਜਾਂ ਪੰਜਾਬ ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਇੱਥੋਂ ਦੇ ਮਿਹਨਤੀ ਕਿਸਾਨਾਂ ਨੇ ਦੇਸ਼ ਦੇ ਅੰਨ ਭੰਡਾਰ ਨੂੰ ਭਰਨ ਵਿੱਚ ਹਮੇਸ਼ਾ ਵੱਡਾ ਯੋਗਦਾਨ ਪਾਇਆ ਹੈ। ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਕਿਰਤ ਕਰੋ, ਨਾਮ ਜਪੋ ਅਤੇ ਵੰਡ ਛਕੋ ਦਾ ਅਮਰ ਸੰਦੇਸ਼ ਦਿੱਤਾ ਜਿਸ ਨੇ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਦੀ ਨੀਂਹ ਰੱਖੀ। ਪੰਜਾਬ ਸਰਕਾਰ ਵੱਲੋਂ ਨੌਜਵਾਨਾਂ ਲਈ ਸਰਕਾਰੀ ਰੁਜ਼ਗਾਰ ਦੇ ਮੌਕੇ ਪ੍ਰਦਾਨ ਕੀਤੇ ਜਾ ਰਹੇ ਹਨ। ਪ੍ਰਸ਼ਾਸਨਿਕ ਕੰਮਕਾਜ ਨੂੰ ਸੁਚਾਰੂ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਬਣਾਉਣ ਲਈ ਕੰਪਿਊਟਰ ਅਤੇ ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਦਾ ਗਿਆਨ ਬਹੁਤ ਲਾਜ਼ਮੀ ਕੀਤਾ ਗਿਆ ਹੈ। ਹਰੇਕ ਉਮੀਦਵਾਰ ਨੂੰ ਰੋਜ਼ਾਨਾ ਅਭਿਆਸ ਕਰਕੇ ਆਪਣੀ ਰਫ਼ਤਾਰ ਅਤੇ ਸ਼ੁੱਧਤਾ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ।`,
    
    intermediate: `ਪੰਜਾਬ ਅਧੀਨ ਸੇਵਾਵਾਂ ਚੋਣ ਬੋਰਡ ਵੱਲੋਂ ਵੱਖ-ਵੱਖ ਵਿਭਾਗਾਂ ਵਿੱਚ ਕਲਰਕ ਅਤੇ ਡਾਟਾ ਐਂਟਰੀ ਆਪਰੇਟਰਾਂ ਦੀ ਭਰਤੀ ਲਈ ਰਾਵੀ ਫੌਂਟ ਵਿੱਚ ਟਾਈਪਿੰਗ ਪ੍ਰੀਖਿਆ ਲਾਜ਼ਮੀ ਕਰਾਰ ਦਿੱਤੀ ਗਈ ਹੈ। ਇਸ ਸਰਕਾਰੀ ਇਮਤਿਹਾਨ ਵਿੱਚ ਸਫਲਤਾ ਹਾਸਲ ਕਰਨ ਲਈ ਉਮੀਦਵਾਰ ਨੂੰ ਦਸ ਮਿੰਟਾਂ ਦੇ ਸਮੇਂ ਅੰਦਰ ਘੱਟੋ-ਘੱਟ ਤੀਹ ਸ਼ਬਦ ਪ੍ਰਤੀ ਮਿੰਟ ਦੀ ਗਤੀ ਅਤੇ ਬਾਨਵੇਂ ਫੀਸਦੀ ਸ਼ੁੱਧਤਾ ਬਣਾ ਕੇ ਰੱਖਣੀ ਹੁੰਦੀ ਹੈ। ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸ਼ੁੱਧ ਟਾਈਪ ਕਰਨ ਲਈ ਰਾਵੀ ਯੂਨੀਕੋਡ ਇਨਸਕ੍ਰਿਪਟ ਕੀਬੋਰਡ ਦੀ ਜਾਣਕਾਰੀ ਹੋਣੀ ਅਤਿਅੰਤ ਜ਼ਰੂਰੀ ਹੈ। ਦੁੱਤ ਅੱਖਰ ਜਿਵੇਂ ਕਿ ਪੈਰ ਵਿੱਚ ਰਾਰਾ, ਹਾਹਾ ਜਾਂ ਵਾਵਾ ਪਾਉਣ ਲਈ ਹਲੰਤ ਕੁੰਜੀ ਦੀ ਸਹੀ ਵਰਤੋਂ ਕਰਨੀ ਪੈਂਦੀ ਹੈ। ਜਦੋਂ ਅਸੀਂ ਕਿਸੇ ਸ਼ਬਦ ਵਿੱਚ ਪੈਰੀਂ ਅੱਖਰ ਲਿਖਣਾ ਹੋਵੇ ਤਾਂ ਪਹਿਲਾਂ ਮੁੱਖ ਅੱਖਰ ਦਬਾ ਕੇ ਹਲੰਤ ਕੁੰਜੀ ਦਬਾਈ ਜਾਂਦੀ ਹੈ ਅਤੇ ਉਸ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ ਸੰਬੰਧਿਤ ਅੱਖਰ ਦਬਾਇਆ ਜਾਂਦਾ ਹੈ। ਮਿਸਾਲ ਵਜੋਂ ਪ੍ਰਕਾਸ਼ ਸ਼ਬਦ ਲਿਖਣ ਲਈ ਪੱਪਾ, ਹਲੰਤ ਅਤੇ ਰਾਰਾ ਦਬਾਉਣਾ ਪੈਂਦਾ ਹੈ। ਪੰਜਾਬ ਸਰਕਾਰ ਦੇ ਸਾਰੇ ਦਫ਼ਤਰਾਂ ਵਿੱਚ ਹੁਣ ਈ-ਆਫਿਸ ਪ੍ਰਣਾਲੀ ਲਾਗੂ ਹੋ ਚੁੱਕੀ ਹੈ ਜਿਸ ਕਾਰਨ ਦਫ਼ਤਰੀ ਨੋਟਿੰਗ ਅਤੇ ਡਰਾਫਟਿੰਗ ਕੇਵਲ ਪੰਜਾਬੀ ਯੂਨੀਕੋਡ ਵਿੱਚ ਹੀ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਨਿਰੰਤਰ ਅਭਿਆਸ ਅਤੇ ਸਹੀ ਉਂਗਲਾਂ ਦੀ ਸਥਿਤੀ ਨਾਲ ਕੋਈ ਵੀ ਵਿਦਿਆਰਥੀ ਇਸ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਮੈਰਿਟ ਸਥਾਨ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦਾ ਹੈ। ਪ੍ਰੀਖਿਆ ਕੇਂਦਰ ਵਿੱਚ ਸ਼ਾਂਤ ਚਿੱਤ ਰਹਿ ਕੇ ਟਾਈਪ ਕਰਨਾ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹੈ ਤਾਂ ਜੋ ਗਲਤੀਆਂ ਦੀ ਦਰ ਘੱਟ ਤੋਂ ਘੱਟ ਰਹੇ।`,
    
    hard: `ਪੰਜਾਬ ਸਿਵਲ ਸੇਵਾਵਾਂ ਪ੍ਰਬੰਧਕੀ ਨਿਯਮਾਵਲੀ ਅਧੀਨ ਸਮੂਹ ਵਿਭਾਗਾਂ, ਬੋਰਡਾਂ ਅਤੇ ਨਿਗਮਾਂ ਵਿੱਚ ਗਰੁੱਪ ਸੀ ਦੀਆਂ ਅਸਾਮੀਆਂ ਲਈ ਉਮੀਦਵਾਰਾਂ ਨੂੰ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ ਯੋਗਤਾ ਟੈਸਟ ਪਾਸ ਕਰਨਾ ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਲਾਜ਼ਮੀ ਹੈ। ਇਸ ਇਮਤਿਹਾਨ ਦਾ ਮੁੱਖ ਮੰਤਵ ਸਰਕਾਰੀ ਦਫ਼ਤਰਾਂ ਵਿੱਚ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੇ ਕਾਨੂੰਨੀ ਪ੍ਰਯੋਗ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੈ। ਸਰਕਾਰੀ ਨੋਟੀਫਿਕੇਸ਼ਨਾਂ, ਗਜ਼ਟ ਆਦੇਸ਼ਾਂ ਅਤੇ ਅਦਾਲਤੀ ਫੈਸਲਿਆਂ ਦੀ ਤਿਆਰੀ ਵਿੱਚ ਸ਼ੁੱਧ ਗੁਰਮੁਖੀ ਲਿਪੀ, ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹਾਂ ਅਤੇ ਵਿਆਕਰਣਿਕ ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨਾ ਪ੍ਰਸ਼ਾਸਨਿਕ ਜ਼ਿੰਮੇਵਾਰੀ ਦਾ ਅਹਿਮ ਹਿੱਸਾ ਹੈ। ਰਾਵੀ ਯੂਨੀਕੋਡ ਪ੍ਰਣਾਲੀ ਵਿੱਚ ਬਿੰਦੀ, ਟਿੱਪੀ ਅਤੇ ਅੱਧਕ ਦੀ ਵਰਤੋਂ ਬੜੀ ਸੁਚੇਤਤਾ ਨਾਲ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ ਕਿਉਂਕਿ ਇੱਕ ਮਾਤਰਾ ਦੀ ਗਲਤੀ ਨਾਲ ਸ਼ਬਦ ਦਾ ਸੰਪੂਰਨ ਅਰਥ ਬਦਲ ਸਕਦਾ ਹੈ। ਉਦਾਹਰਨ ਵਜੋਂ 'ਜਗ' ਅਤੇ 'ਜੱਗ' ਜਾਂ 'ਸਤ' ਅਤੇ 'ਸੱਤ' ਵਿਚਲਾ ਅੰਤਰ ਕੇਵਲ ਅੱਧਕ ਦੀ ਵਰਤੋਂ 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ। ਪੰਜਾਬ ਅਧੀਨ ਸੇਵਾਵਾਂ ਚੋਣ ਬੋਰਡ ਵੱਲੋਂ ਤੈਅ ਕੀਤੇ ਮਾਪਦੰਡਾਂ ਅਨੁਸਾਰ ਤੀਹ ਸ਼ਬਦ ਪ੍ਰਤੀ ਮਿੰਟ ਦੀ ਰਫ਼ਤਾਰ ਅਤੇ ਅੱਠ ਫੀਸਦੀ ਤੋਂ ਘੱਟ ਗਲਤੀਆਂ ਦੀ ਸੀਮਾ ਨਿਰਧਾਰਤ ਹੈ। ਪੁਰਾਣੇ ਰੈਮਿੰਗਟਨ ਜਾਂ ਅਸੀਸ ਫੌਂਟ ਦੀ ਬਜਾਏ ਭਾਰਤ ਸਰਕਾਰ ਦੇ ਮਿਆਰੀ ਇਨਸਕ੍ਰਿਪਟ ਕੀਬੋਰਡ ਨੂੰ ਅਪਣਾਉਣ ਨਾਲ ਰਾਸ਼ਟਰੀ ਪੱਧਰ 'ਤੇ ਡਿਜੀਟਲ ਇਕਸਾਰਤਾ ਕਾਇਮ ਰਹਿੰਦੀ ਹੈ। ਨਿਯਮਤ ਅਭਿਆਸੀ ਉਮੀਦਵਾਰ ਸਮੇਂ ਦੇ ਪ੍ਰਬੰਧਨ ਅਤੇ ਸ਼ੁੱਧਤਾ ਦੇ ਸੁਮੇਲ ਰਾਹੀਂ ਸੁਚੱਜੇ ਪ੍ਰਸ਼ਾਸਨਿਕ ਸੇਵਕ ਬਣਨ ਦੇ ਯੋਗ ਸਿੱਧ ਹੁੰਦੇ ਹਨ।`,
  },
  english: {
    beginner: `Punjab is a historically renowned and vibrant state situated in northwest India. Its fertile land is nourished by the perennial waters of the Himalayan rivers, which earned the region its historic name of the land of five rivers. The hardworking farmers of Punjab have served as the backbone of national food security for decades. Revered spiritual leaders and freedom fighters have shaped the progressive mindset of its people. The Government of Punjab is actively organizing recruitment drives to induct capable and disciplined candidates into administrative cadres. Professional typing proficiency and computer literacy are vital skills required for ensuring seamless public service delivery. Consistent daily practice with proper keyboard posture is essential for achieving higher speed and accuracy.`,
    
    intermediate: `The Punjab Subordinate Services Selection Board conducts mandatory bilingual typing examinations for recruitment to Clerk and Junior Assistant cadres across state departments. Candidates are required to demonstrate a minimum typing speed of thirty words per minute with at least ninety-two percent accuracy during an uninterrupted ten-minute assessment period. In modern administrative governance, computer literacy and rapid keystroke accuracy are imperative for handling official documentation, citizen charters, and internal memos. With the widespread adoption of the e-Office digital workflow, administrative files and cabinet notes are processed electronically, making bilingual proficiency in English and Punjabi Unicode InScript indispensable for ministerial staff. Regular practice with standard keyboard layouts enables aspirants to maintain consistent rhythm, minimize backspace dependency, and eliminate errors. Focused preparation and endurance will guarantee success in qualifying the official state benchmarks.`,
    
    hard: `In accordance with statutory administrative guidelines, recruitment to ministerial and secretarial services in the state government mandates strict demonstration of bilingual typing competence. Standardized assessment protocols evaluate candidates on keystroke fidelity, word pacing, and rigorous error tolerances to ensure the smooth handling of sensitive administrative records, legislative bills, and financial statements. Modern public administration requires staff who can seamlessly transcribe technical terminology, legal statutes, and statistical appendices under strict deadlines. The transition from legacy non-Unicode fonts to standardized Unicode keyboard layouts guarantees cross-platform interoperability across state and central digital portals. Candidates must cultivate systematic typing ergonomics, avoiding looking at the keyboard while maintaining rhythmic hand movements across the home row. Rigorous adherence to punctuation, capitalization, and numerical fidelity differentiates high-ranking candidates in competitive public service selections.`,
  },
};

export default function TypingPracticePage() {
  const router = useRouter();
  
  const [lang, setLang] = useState<'punjabi' | 'english'>('punjabi');
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'hard'>('intermediate');
  const [testDuration, setTestDuration] = useState<number>(600); // 10 min (Official PSSSB Benchmark)
  
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
    if (!isRunning && !isFinished && text.length > 0) {
      setIsRunning(true);
    }
    setUserInput(text);

    // If candidate has completed full target passage
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

  // Metrics calculation
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
    <div className="p-4 flex flex-col gap-5 min-h-screen bg-slate-900 pb-24 text-slate-100 max-w-2xl mx-auto w-full">
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
            <strong>Official PSSSB Benchmark:</strong> 30 WPM with &ge;92% Accuracy in 10 mins (Raavi Font)
          </span>
        </div>
      </div>

      {/* Font & Layout Clarification Banner */}
      <div className="bg-slate-800/80 border border-teal-500/30 p-3 rounded-xl text-xs text-slate-300 flex items-start gap-2.5">
        <Info size={16} className="text-teal-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed text-[11px]">
          <strong className="text-white block mb-0.5">Unicode InScript Layout (Not Legacy Remington / Asees):</strong>
          Official PSSSB Clerk exams strictly use the <strong>Government of India InScript keyboard layout</strong> in Raavi Unicode font. Legacy typing layouts like Remington or non-Unicode fonts (Asees, Joy) are NOT accepted in online government exams.
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
              ਪੰਜਾਬੀ (ਰਾਵੀ)
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
          <span className="text-[10px] text-slate-400 font-semibold block mb-1">Passage Length</span>
          <select 
            value={difficulty}
            onChange={e => { setDifficulty(e.target.value as any); handleReset(); }}
            className="w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-200 font-medium outline-none text-xs"
          >
            <option value="beginner">Short Warmup (~160 words)</option>
            <option value="intermediate">Exam Level (300+ words)</option>
            <option value="hard">Hard Gazette (360+ words)</option>
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
        <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-2 font-bold flex items-center justify-between">
          <span>Target Official Passage ({targetText.trim().split(/\s+/).length} Words)</span>
          <span className="text-teal-400 font-mono">{userInput.length} / {targetText.length} chars</span>
        </div>

        <div className="text-sm font-medium leading-relaxed tracking-wide select-none p-3.5 bg-slate-900/80 rounded-xl border border-slate-700/60 max-h-48 overflow-y-auto">
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
          className="w-full bg-slate-800 border-2 border-slate-700 focus:border-teal-400 rounded-2xl p-4 text-white text-sm leading-relaxed outline-none transition h-36 resize-none disabled:opacity-60"
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
      <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-xs text-slate-300 space-y-2">
        <h4 className="font-bold text-white flex items-center gap-1.5">
          <span>💡</span> ਰਾਵੀ ਯੂਨੀਕੋਡ ਇਨਸਕ੍ਰਿਪਟ ਕੁੰਜੀਆਂ (Raavi Unicode InScript Standard Cheat Sheet)
        </h4>
        <div className="grid grid-cols-2 gap-2.5 text-[11px] text-slate-300 pt-1">
          <div>• ਪੈਰੀਂ ਅੱਖਰ (Halant): <strong>d</strong> (ਉਦਾ: ਪ + d + ਰ = ਪ੍ਰ)</div>
          <div>• ਪੂਰਾ ਸਵਰ ਅ: <strong>Shift + D</strong></div>
          <div>• ਬਿੰਦੀ (ਂ): <strong>x</strong></div>
          <div>• ਟਿੱਪੀ (ੰ): <strong>Shift + X</strong></div>
          <div>• ਅੱਧਕ (ੱ): <strong>Shift + =</strong> (ਜਾਂ <strong>]</strong>)</div>
          <div>• ਕੰਨਾ (ਾ): <strong>e</strong></div>
          <div>• ਸਿਹਾਰੀ (ਿ): <strong>f</strong></div>
          <div>• ਬਿਹਾਰੀ (ੀ): <strong>r</strong></div>
          <div>• ਔਂਕੜ (ੁ): <strong>m</strong></div>
          <div>• ਦੁਲੈਂਕੜ (ੂ): <strong>Shift + M</strong></div>
          <div>• ਲਾਂ (ੇ): <strong>s</strong> | ਦੁਲਾਵਾਂ (ੈ): <strong>w</strong></div>
          <div>• ਹੋੜਾ (ੋ): <strong>a</strong> | ਕਨੌੜਾ (ੌ): <strong>q</strong></div>
        </div>
        <p className="text-[10px] text-amber-400/80 mt-2">⚠️ Key hints are for Raavi Unicode layout. Legacy ASCII Raavi layouts differ.</p>
      </div>

    </div>
  );
}
