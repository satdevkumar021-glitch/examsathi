'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  BookOpen, Clock, Play, Pause, RotateCcw, Volume2, VolumeX, 
  CheckCircle2, Target, Award, Sparkles, User, Coffee, 
  Flame, HelpCircle, Layers, ArrowRight, ShieldCheck
} from 'lucide-react';
import { getStoredUser, saveUserSession } from '@/lib/auth';

interface LibrarySeat {
  id: number;
  label: string;
  type: 'quiet' | 'cbt' | 'pod';
}

export default function VirtualStudyLibrary() {
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('child-development-pedagogy');
  const [timerMode, setTimerMode] = useState<25 | 45 | 60>(25);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [sessionCompleted, setSessionCompleted] = useState<boolean>(false);
  const [totalHours, setTotalHours] = useState<number>(0.0);

  const SEATS: LibrarySeat[] = [
    { id: 1, label: 'Focus Desk 01', type: 'quiet' },
    { id: 2, label: 'Focus Desk 02', type: 'quiet' },
    { id: 3, label: 'Silent Pod 03', type: 'quiet' },
    { id: 4, label: 'Silent Pod 04', type: 'quiet' },
    { id: 5, label: 'Reading Desk 05', type: 'quiet' },
    { id: 6, label: 'Reading Desk 06', type: 'quiet' },
    { id: 7, label: 'Window Desk 07', type: 'quiet' },
    { id: 8, label: 'Window Desk 08', type: 'quiet' },
    { id: 9, label: 'CBT Terminal 09', type: 'cbt' },
    { id: 10, label: 'CBT Terminal 10', type: 'cbt' },
    { id: 11, label: 'CBT Terminal 11', type: 'cbt' },
    { id: 12, label: 'Typing Lab Desk 12', type: 'cbt' },
    { id: 13, label: 'Typing Lab Desk 13', type: 'cbt' },
    { id: 14, label: 'Deep Study Pod 14', type: 'pod' },
    { id: 15, label: 'Deep Study Pod 15', type: 'pod' },
    { id: 16, label: 'Deep Study Pod 16', type: 'pod' },
  ];

  const TOPIC_OPTIONS = [
    { id: 'child-development-pedagogy', label: '👶 ETT Child Psychology (Piaget, Vygotsky, RTE 2009)', testUrl: '/mock-test/topic-child-development-pedagogy' },
    { id: 'environment-ecology', label: '🌿 ETT Environmental Studies & Punjab Ramsar Wetlands', testUrl: '/mock-test/topic-environment-ecology' },
    { id: 'computer-awareness', label: '💻 PSSSB Clerk Computer IT & MS Office Shortcuts', testUrl: '/mock-test/topic-computer-awareness' },
    { id: 'punjabi-grammar-lit', label: '⌨️ PSSSB Raavi Typing Rules & Paper A Punjabi Vyakaran', testUrl: '/mock-test/topic-punjabi-grammar-lit' },
    { id: 'punjab-history', label: '🌾 Punjab History: 10 Gurus, Misals & Ranjit Singh', testUrl: '/mock-test/topic-punjab-history' },
    { id: 'fundamental-rights', label: '⚖️ Indian Constitution, Writs & Fundamental Rights', testUrl: '/mock-test/topic-fundamental-rights' },
  ];

  const [nudge, setNudge] = useState<{ type: 'eyes' | 'hydration' | 'stretch' | null; snoozed: boolean }>({ type: null, snoozed: false });
  const [minutesElapsed, setMinutesElapsed] = useState(0);
  const nudgeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    try {
      const user = getStoredUser();
      if (user.libraryHours) setTotalHours(user.libraryHours);
      const savedSeat = localStorage.getItem('examsathi_library_seat');
      if (savedSeat) setSelectedSeat(parseInt(savedSeat, 10));
    } catch {}
  }, []);

  const handleSelectSeat = (id: number) => {
    setSelectedSeat(id);
    try {
      localStorage.setItem('examsathi_library_seat', String(id));
    } catch {}
  };

  // Web Audio ambient sound synthesizer (offline pink noise simulation)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let audioCtx: any = null;
    let whiteNoise: any = null;

    if (soundEnabled && isRunning) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
          const bufferSize = audioCtx.sampleRate * 2;
          const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let b0 = 0, b1 = 0, b2 = 0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            output[i] = (b0 + b1 + b2 + white * 0.1) * 0.015;
          }
          whiteNoise = audioCtx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;
          const filter = audioCtx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.value = 650;
          whiteNoise.connect(filter);
          filter.connect(audioCtx.destination);
          whiteNoise.start();
        }
      } catch {}
    }

    return () => {
      try {
        if (whiteNoise) whiteNoise.stop?.();
        if (audioCtx && audioCtx.state !== 'closed') audioCtx.close?.();
      } catch {}
    };
  }, [soundEnabled, isRunning]);

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (isRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => {
          const nextSec = prev - 1;
          return nextSec;
        });
      }, 1000);
    } else if (secondsRemaining === 0 && isRunning) {
      setIsRunning(false);
      setSessionCompleted(true);
      const updatedHours = parseFloat((totalHours + timerMode / 60).toFixed(1));
      setTotalHours(updatedHours);
      try {
        const user = getStoredUser();
        user.libraryHours = updatedHours;
        user.xp += 50;
        saveUserSession(user);
      } catch {}
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsRemaining, timerMode, totalHours]);

  // Wellness nudge logic — triggers every 20 minutes (eyes) and 45 minutes (stretch+water)
  useEffect(() => {
    if (!isRunning) return;

    nudgeTimerRef.current = setInterval(() => {
      setMinutesElapsed(prev => {
        const next = prev + 1;
        if (next % 45 === 0) {
          setNudge({ type: 'stretch', snoozed: false });
        } else if (next % 20 === 0) {
          setNudge({ type: 'eyes', snoozed: false });
        }
        return next;
      });
    }, 60 * 1000); // every real minute

    return () => { if (nudgeTimerRef.current) clearInterval(nudgeTimerRef.current); };
  }, [isRunning]);

  const setTimerPreset = (mins: 25 | 45 | 60) => {
    setTimerMode(mins);
    setSecondsRemaining(mins * 60);
    setIsRunning(false);
    setSessionCompleted(false);
    setMinutesElapsed(0);
    setNudge({ type: null, snoozed: false });
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = Math.round(((timerMode * 60 - secondsRemaining) / (timerMode * 60)) * 100);

  const activeTopicObj = TOPIC_OPTIONS.find(t => t.id === selectedTopic) || TOPIC_OPTIONS[0];

  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-28 text-slate-100 max-w-xl mx-auto w-full">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-teal-950 via-slate-850 to-indigo-950 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-teal-500/20 text-teal-300 rounded-xl">
              <BookOpen size={22} />
            </span>
            <div>
              <h1 className="text-white font-extrabold text-lg">Virtual Study Library &amp; Desk</h1>
              <p className="text-[11px] text-teal-300">
                Claim your Desk • Set Session Focus • Deep Work Pomodoro Timer
              </p>
            </div>
          </div>
          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1 font-mono">
            <Flame size={12} /> {totalHours > 0 ? `${totalHours}h Studied` : '0.0h Studied'}
          </span>
        </div>
      </div>

      {/* 1. INTERACTIVE DESK / SEAT RESERVATION SELECTOR */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-lg flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User size={16} className="text-teal-400" />
            <h2 className="text-sm font-bold text-white">1. Select Your Library Desk</h2>
          </div>
          <span className="text-[10px] text-teal-300 font-semibold">
            {selectedSeat ? `Desk #${selectedSeat.toString().padStart(2, '0')} Claimed` : 'No Desk Claimed (Choose a desk below)'}
          </span>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[10px] text-slate-400 border-b border-slate-750 pb-2">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 ring-2 ring-teal-400/30" /> Your Claimed Seat
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" /> Open Desk (Available)
          </span>
        </div>

        {/* Seating Grid (4x4 = 16 Desks, all authentic) */}
        <div className="grid grid-cols-4 gap-2">
          {SEATS.map(seat => {
            const isSelected = selectedSeat === seat.id;

            let seatClass = 'bg-slate-800 border-slate-700 hover:border-slate-500 text-slate-300';
            if (isSelected) {
              seatClass = 'bg-teal-500/20 border-teal-400 text-teal-300 ring-2 ring-teal-400 font-bold shadow-lg';
            }

            return (
              <button
                key={seat.id}
                onClick={() => handleSelectSeat(seat.id)}
                className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between min-h-[64px] ${seatClass}`}
                title="Click to claim this desk"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-bold font-mono">#{seat.id.toString().padStart(2, '0')}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />}
                </div>

                <div className="text-[10px] leading-tight truncate">
                  {isSelected ? 'Your Desk (Active)' : 'Open Desk'}
                </div>
              </button>
            );
          })}
        </div>
        <p className="text-xs text-slate-500">Showing your desk. Real-time presence coming soon.</p>
      </div>

      {/* 2. CHOOSE TOPIC FOR THIS SESSION */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-lg flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target size={16} className="text-teal-400" />
            <h2 className="text-sm font-bold text-white">2. Topic Goal for this Desk Session</h2>
          </div>
          <span className="text-[10px] text-teal-400 font-semibold">Active Focus</span>
        </div>

        <select
          value={selectedTopic}
          onChange={e => setSelectedTopic(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white text-xs font-medium focus:outline-none focus:border-teal-400 appearance-none cursor-pointer"
        >
          {TOPIC_OPTIONS.map(opt => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* 3. INTEGRATED POMODORO DEEP WORK TIMER */}
      <div className="bg-gradient-to-br from-slate-850 via-slate-900 to-indigo-950/60 rounded-2xl p-5 border-2 border-slate-700/80 shadow-xl flex flex-col items-center gap-4 text-center">
        
        {/* Preset Selector */}
        <div className="flex gap-2">
          {[
            { mins: 25, label: '25m Pomodoro' },
            { mins: 45, label: '45m CBT Test Mode' },
            { mins: 60, label: '60m Deep Study' },
          ].map(preset => (
            <button
              key={preset.mins}
              onClick={() => setTimerPreset(preset.mins as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                timerMode === preset.mins
                  ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Circular Countdown Ring */}
        <div className="relative w-48 h-48 flex items-center justify-center my-2">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path 
              className="text-slate-800" 
              strokeWidth="3" 
              stroke="currentColor" 
              fill="none" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
            />
            <path 
              className="text-teal-400 transition-all duration-1000" 
              strokeDasharray={`${progressPercentage}, 100`} 
              strokeWidth="3" 
              strokeLinecap="round" 
              stroke="currentColor" 
              fill="none" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
            />
          </svg>

          <div className="absolute text-center flex flex-col items-center">
            <span className="text-4xl font-black text-white font-mono tracking-tight">
              {formatTimer(secondsRemaining)}
            </span>
            <span className="text-[10px] text-teal-300 font-bold uppercase tracking-wider mt-1">
              {isRunning ? 'Desk Focus Active' : 'Session Paused'}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {selectedSeat ? `Desk #${selectedSeat.toString().padStart(2, '0')}` : 'No Desk Claimed'}
            </span>
          </div>
        </div>

        {/* Timer Control Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-6 py-3 rounded-xl font-black text-xs flex items-center gap-2 shadow-lg transition ${
              isRunning
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                : 'bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950'
            }`}
          >
            {isRunning ? <Pause size={16} /> : <Play size={16} />}
            <span>{isRunning ? 'Pause Timer' : 'Start Focus Session'}</span>
          </button>

          <button
            onClick={() => setTimerPreset(timerMode)}
            className="p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-xl transition"
            title="Reset Timer"
          >
            <RotateCcw size={16} />
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-3 rounded-xl border transition ${
              soundEnabled
                ? 'bg-teal-500/20 border-teal-400 text-teal-300'
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
            title="Toggle Library Ambience White Noise"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>

        {nudge.type && !nudge.snoozed && (
          <div className={`rounded-xl p-4 border flex flex-col gap-2 ${
            nudge.type === 'eyes' ? 'bg-blue-950/40 border-blue-700/50' : 'bg-green-950/40 border-green-700/50'
          }`}>
            {nudge.type === 'eyes' && (
              <>
                <p className="text-blue-200 font-bold text-sm">👁️ 20-20-20 Eye Rest</p>
                <p className="text-blue-300 text-xs">You have been studying for 20 minutes. Look at something 20 feet away for 20 seconds to rest your eyes.</p>
              </>
            )}
            {nudge.type === 'stretch' && (
              <>
                <p className="text-green-200 font-bold text-sm">🧘 Time for a Break!</p>
                <p className="text-green-300 text-xs">45 minutes done! Stand up, stretch, drink some water, and take a 5-minute walk. Your brain will thank you.</p>
              </>
            )}
            {nudge.type === 'hydration' && (
              <>
                <p className="text-cyan-200 font-bold text-sm">💧 Hydration Reminder</p>
                <p className="text-cyan-300 text-xs">Remember to drink water! Staying hydrated improves focus and memory retention.</p>
              </>
            )}
            <div className="flex gap-2 mt-1">
              <button onClick={() => setNudge({ type: null, snoozed: false })} className="bg-slate-700 hover:bg-slate-600 text-white text-xs px-3 py-1.5 rounded-lg font-semibold">
                ✓ Got it
              </button>
              <button onClick={() => setNudge(n => ({ ...n, snoozed: true }))} className="text-slate-400 text-xs px-3 py-1.5 rounded-lg hover:text-slate-300">
                Snooze 5 min
              </button>
            </div>
          </div>
        )}

        {sessionCompleted && (
          <div className="bg-emerald-950/60 border border-emerald-500/50 p-3 rounded-xl text-emerald-300 text-xs flex items-center justify-center gap-2 font-bold animate-bounce">
            <CheckCircle2 size={16} />
            <span>Bravo! Completed {timerMode} mins focus{selectedSeat ? ` on Desk #${selectedSeat}` : ''}! (+50 XP)</span>
          </div>
        )}
      </div>

      {/* 4. ATTEMPT TOPIC TEST FROM THIS DESK */}
      <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 flex flex-col gap-2.5">
        <h3 className="text-xs font-bold text-white flex items-center gap-2">
          <span>🎯</span> Ready to test your mastery from this Desk?
        </h3>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Launch a targeted 25 or 50 question CBT mock test specifically covering this desk&apos;s topic: <strong>{activeTopicObj.label}</strong>.
        </p>

        <div className="flex gap-2 mt-1">
          <Link
            href={`${activeTopicObj.testUrl}?count=25`}
            className="flex-1 bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-slate-950 border border-teal-500/40 py-2.5 rounded-xl text-center text-xs font-bold transition flex items-center justify-center gap-1.5"
          >
            <Play size={13} />
            <span>25 Qs Speed Drill</span>
          </Link>
          <Link
            href={`${activeTopicObj.testUrl}?count=50`}
            className="flex-1 bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 font-black py-2.5 rounded-xl text-center text-xs transition flex items-center justify-center gap-1.5 shadow"
          >
            <Target size={13} />
            <span>50 Qs CBT Mock (-0.25)</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
