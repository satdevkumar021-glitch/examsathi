'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, Clock, CheckCircle2, Heart, Target, ArrowLeft,
  Wind, Zap, BookOpen, AlertCircle, Lightbulb
} from 'lucide-react';

export default function ExamDayCoach() {
  const [breathStep, setBreathStep] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle');
  const [breathCount, setBreathCount] = useState(0);

  const startBreathing = () => {
    setBreathStep('inhale');
    setBreathCount(0);
    let count = 0;
    const cycle = () => {
      setBreathStep('inhale');
      setTimeout(() => {
        setBreathStep('hold');
        setTimeout(() => {
          setBreathStep('exhale');
          setTimeout(() => {
            count++;
            setBreathCount(count);
            if (count < 5) {
              cycle();
            } else {
              setBreathStep('idle');
            }
          }, 6000);
        }, 4000);
      }, 4000);
    };
    cycle();
  };

  const sections = [
    {
      id: 'breathing',
      icon: '🌬️',
      title: 'Calm-Down Breathing',
      titleHi: 'शांत होने के लिए सांस लेने की तकनीक',
      color: 'border-blue-500/40 bg-blue-950/20',
    },
    {
      id: 'timing',
      icon: '⏱️',
      title: 'Time-Per-Question Strategy',
      titleHi: 'प्रति प्रश्न समय रणनीति',
      color: 'border-teal-500/40 bg-teal-950/20',
    },
    {
      id: 'skip',
      icon: '↩️',
      title: 'Skip-and-Return Method',
      titleHi: 'छोड़ो और वापस आओ विधि',
      color: 'border-amber-500/40 bg-amber-950/20',
    },
    {
      id: 'speed',
      icon: '⚡',
      title: 'Speed-Solving Tips',
      titleHi: 'तेज़ हल करने के टिप्स',
      color: 'border-purple-500/40 bg-purple-950/20',
    },
    {
      id: 'week',
      icon: '📅',
      title: '1-Week Before Checklist',
      titleHi: 'परीक्षा से 1 सप्ताह पहले',
      color: 'border-green-500/40 bg-green-950/20',
    },
    {
      id: 'day',
      icon: '🌅',
      title: 'Exam Day Checklist',
      titleHi: 'परीक्षा के दिन की जाँच सूची',
      color: 'border-rose-500/40 bg-rose-950/20',
    },
  ];

  const content: Record<string, React.ReactNode> = {
    breathing: (
      <div className="space-y-3">
        <p className="text-slate-300 text-xs">Use the 4-4-6 breathing technique: inhale for 4 seconds, hold for 4, exhale for 6. Do this 5 times before entering the exam hall.</p>
        <div className={`rounded-xl border p-4 text-center transition-all duration-1000 ${
          breathStep === 'inhale' ? 'bg-blue-500/20 border-blue-400 scale-105' :
          breathStep === 'hold' ? 'bg-purple-500/20 border-purple-400' :
          breathStep === 'exhale' ? 'bg-teal-500/20 border-teal-400 scale-95' :
          'bg-slate-800 border-slate-700'
        }`}>
          {breathStep === 'idle' && <p className="text-slate-400 text-sm">Press Start to begin the 5-cycle breathing exercise</p>}
          {breathStep === 'inhale' && <p className="text-blue-300 text-lg font-bold">Inhale... 🌬️</p>}
          {breathStep === 'hold' && <p className="text-purple-300 text-lg font-bold">Hold... 🤐</p>}
          {breathStep === 'exhale' && <p className="text-teal-300 text-lg font-bold">Exhale slowly... 😌</p>}
          {breathCount > 0 && breathStep !== 'idle' && <p className="text-xs text-slate-400 mt-1">Cycle {breathCount}/5</p>}
        </div>
        {breathStep === 'idle' && (
          <button
            onClick={startBreathing}
            className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2.5 rounded-xl text-sm transition"
          >
            Start 5-Cycle Breathing
          </button>
        )}
        {breathStep !== 'idle' && breathCount === 5 && (
          <p className="text-center text-teal-300 text-sm font-bold">✓ Exercise complete. You are calm and ready! 🎯</p>
        )}
      </div>
    ),
    timing: (
      <div className="space-y-3 text-xs text-slate-300">
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700">
          <p className="font-bold text-white mb-1">Standard formula (50 Qs, 45 min):</p>
          <p>➤ 45 min ÷ 50 Qs = <strong className="text-teal-300">54 seconds per question</strong></p>
          <p className="text-slate-400 mt-1">Reserve last 5 minutes for review and to fill OMR sheet carefully.</p>
        </div>
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700">
          <p className="font-bold text-white mb-1">Time allocation by subject:</p>
          <ul className="space-y-1 text-slate-300">
            <li>• GK/Static Facts: 30 sec (recall-only)</li>
            <li>• Reasoning: 45 sec</li>
            <li>• Maths: 60-75 sec</li>
            <li>• Reading Comprehension: 90 sec</li>
          </ul>
        </div>
        <div className="bg-amber-950/40 rounded-xl p-3 border border-amber-700/50">
          <p className="font-bold text-amber-300 mb-1">⚠️ Negative marking rule:</p>
          <p>At -0.25 per wrong, you need <strong>4 correct</strong> answers to recover 1 wrong. <strong>Do not guess</strong> on questions you have zero idea about. Leave them blank.</p>
        </div>
      </div>
    ),
    skip: (
      <div className="space-y-3 text-xs text-slate-300">
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700">
          <p className="font-bold text-white mb-2">The 3-pass method:</p>
          <div className="space-y-2">
            <div className="flex gap-2 items-start">
              <span className="bg-teal-500 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded shrink-0">Pass 1</span>
              <p>Answer all questions you know confidently in under 30 seconds. Mark the rest and move on.</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded shrink-0">Pass 2</span>
              <p>Return to marked questions. Use elimination — cross out 2 clearly wrong options and guess from remaining 2 (50% chance, managed risk).</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="bg-rose-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded shrink-0">Pass 3</span>
              <p>In the last 5 minutes, skip any question where you cannot eliminate even 1 option. Negative marking will hurt you.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    speed: (
      <div className="space-y-2 text-xs text-slate-300">
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700">
          <p className="font-bold text-white mb-1">History / GK questions:</p>
          <p>Read only the last word or phrase — often the answer is in the question itself. Dates: memorize century, not exact year unless asked.</p>
        </div>
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700">
          <p className="font-bold text-white mb-1">Maths shortcut:</p>
          <p>For percentage problems: plug in answer options (reverse calculation is faster than forward). For series: check difference between consecutive terms first.</p>
        </div>
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700">
          <p className="font-bold text-white mb-1">Statement questions (True/False type):</p>
          <p>Eliminate options with absolute words: "always", "never", "only", "all". These are almost always wrong in factual exams.</p>
        </div>
        <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-700">
          <p className="font-bold text-white mb-1">Match-the-following:</p>
          <p>Find 1 pair you are 100% sure about. That eliminates 2-3 other options immediately.</p>
        </div>
      </div>
    ),
    week: (
      <div className="space-y-2 text-xs text-slate-300">
        {[
          { day: 'Day 7', text: 'Stop learning new topics. Revise only what you already know.' },
          { day: 'Day 6', text: 'Full mock test (50 Qs). Analyse every wrong answer carefully.' },
          { day: 'Day 5', text: 'Revise your saved flashcards and weak topics from the mock.' },
          { day: 'Day 4', text: 'Revise all formulas, constitutional articles, important dates. No new material.' },
          { day: 'Day 3', text: 'Light revision only. 25-question quick test. Sleep 8 hours.' },
          { day: 'Day 2', text: 'Collect your admit card, pen, ID proof, and exam hall details. Sleep by 10 PM.' },
          { day: 'Day 1', text: 'No studying after 6 PM. Eat well. Reach the exam center 30 min early.' },
        ].map(item => (
          <div key={item.day} className="flex gap-3 items-start">
            <span className="bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded border border-teal-500/30 shrink-0 mt-0.5">{item.day}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    ),
    day: (
      <div className="space-y-2 text-xs">
        {[
          { done: true, text: 'Admit card printed (2 copies) + original photo ID' },
          { done: true, text: 'Pen (blue/black) + extra pen + pencil for rough work' },
          { done: true, text: 'Reach exam center 30 minutes early' },
          { done: true, text: '5-cycle breathing exercise before entering the hall' },
          { done: true, text: 'Read all instructions on the OMR/CBT screen before starting' },
          { done: true, text: 'Start with subjects you are strongest in' },
          { done: true, text: 'Keep water bottle (check exam rules) + light snack' },
          { done: true, text: 'Do not discuss answers with others before leaving the hall' },
        ].map((item, i) => (
          <div key={i} className="flex gap-2.5 items-start">
            <CheckCircle2 size={14} className="text-teal-400 shrink-0 mt-0.5" />
            <p className="text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    ),
  };

  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="p-4 flex flex-col gap-5 max-w-xl mx-auto w-full pb-24 text-slate-100">
      <div className="flex items-center gap-3">
        <Link href="/dashboard" className="text-slate-400 hover:text-slate-300">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">Exam-Day Coach</h1>
          <p className="text-xs text-slate-400">परीक्षा के दिन की तैयारी — Be calm, be ready</p>
        </div>
      </div>

      <div className="bg-teal-950/40 border border-teal-500/30 rounded-2xl p-4 text-sm text-teal-200">
        <p className="font-bold text-teal-300 mb-1">🎯 You have prepared. Now perform.</p>
        <p className="text-xs leading-relaxed text-slate-300">Exam success is 80% preparation and 20% strategy. You have done the preparation — this page gives you the remaining 20%.</p>
      </div>

      {sections.map(section => (
        <div key={section.id} className={`border rounded-2xl overflow-hidden ${section.color}`}>
          <button
            className="w-full flex items-center justify-between p-4 text-left"
            onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{section.icon}</span>
              <div>
                <p className="text-white font-bold text-sm">{section.title}</p>
                <p className="text-slate-400 text-[11px]">{section.titleHi}</p>
              </div>
            </div>
            <span className={`text-slate-400 text-xl transition-transform duration-200 ${activeSection === section.id ? 'rotate-45' : ''}`}>+</span>
          </button>
          {activeSection === section.id && (
            <div className="px-4 pb-4">
              <div className="border-t border-slate-700/50 pt-3">
                {content[section.id]}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="mt-2 flex gap-3">
        <Link href="/mock-test" className="flex-1 bg-teal-500 text-slate-950 font-bold text-xs py-3 rounded-xl text-center hover:bg-teal-400 transition">
          Take Practice Mock Test
        </Link>
        <Link href="/roadmap" className="flex-1 bg-slate-800 text-white font-bold text-xs py-3 rounded-xl text-center border border-slate-700 hover:border-slate-500 transition">
          View Study Roadmap
        </Link>
      </div>
    </div>
  );
}
