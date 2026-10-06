'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Compass, Calendar, CheckCircle2, Circle, Flame, Target, 
  Sparkles, Award, ArrowRight, Clock, BookOpen, Layers, 
  ShieldAlert, Brain, ChevronRight, Check
} from 'lucide-react';
import { getStoredUser } from '@/lib/auth';

interface RoadmapTask {
  id: string;
  title: string;
  titlePa: string;
  category: 'concept' | 'mcq' | 'flip' | 'cbt';
  estimatedMinutes: number;
  link: string;
  linkText: string;
  xp: number;
}

interface RoadmapDay {
  dayNumber: number;
  phase: string;
  theme: string;
  tasks: RoadmapTask[];
}

export default function StudyRoadmap() {
  const [selectedTrack, setSelectedTrack] = useState<'ett' | 'clerk' | 'master-cadre'>('ett');
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const [activeDay, setActiveDay] = useState<number>(14);
  const [dailyChallengeAnswer, setDailyChallengeAnswer] = useState<string | null>(null);
  const [showChallengeSolution, setShowChallengeSolution] = useState(false);

  useEffect(() => {
    try {
      const storedUser = getStoredUser();
      if (storedUser.targetExam.includes('clerk')) setSelectedTrack('clerk');
      else if (storedUser.targetExam.includes('master')) setSelectedTrack('master-cadre');
      else setSelectedTrack('ett');

      const saved = localStorage.getItem('examsathi_roadmap_completed');
      if (saved) setCompletedTasks(JSON.parse(saved));
    } catch {}
  }, []);

  const toggleTask = (taskId: string) => {
    const updated = { ...completedTasks, [taskId]: !completedTasks[taskId] };
    setCompletedTasks(updated);
    try {
      localStorage.setItem('examsathi_roadmap_completed', JSON.stringify(updated));
    } catch {}
  };

  const TRACK_ROADMAPS: Record<string, { name: string; badge: string; days: RoadmapDay[]; dailyChallenge: any }> = {
    ett: {
      name: 'Punjab ETT Elementary Cadre (6635 / 5994)',
      badge: '👶 ETT Track',
      dailyChallenge: {
        id: 'chal-ett-1',
        title: 'Daily Merit-Decider: Vygotsky Scaffolding in Punjabi Classroom',
        question: 'ਪ੍ਰਾਇਮਰੀ ਸਕੂਲ ਵਿੱਚ ਬੱਚੇ ਨੂੰ ਗਣਿਤ ਦਾ ਸਵਾਲ ਹੱਲ ਕਰਨ ਵੇਲੇ ਅਧਿਆਪਕ ਵੱਲੋਂ ਦਿੱਤਾ ਗਿਆ ਆਰਜ਼ੀ ਇਸ਼ਾਰਾ (Cue/Prompt) ਵਾਈਗੋਤਸਕੀ ਮੁਤਾਬਕ ਕੀ ਅਖਵਾਉਂਦਾ ਹੈ?',
        options: {
          A: 'ਕੰਡੀਸ਼ਨਿੰਗ (Conditioning)',
          B: 'ਸਕੈਫੋਲਡਿੰਗ / ਪਾੜ (Scaffolding)',
          C: 'ਈਗੋਸੈਂਟ੍ਰਿਕ ਭਾਸ਼ਣ (Egocentric speech)',
          D: 'ਆਤਮਸਾਤਕਰਨ (Assimilation)',
        },
        correct: 'B',
        rationale: 'ਸਕੈਫੋਲਡਿੰਗ (Scaffolding) ਉਹ ਆਰਜ਼ੀ ਮਦਦ ਹੈ ਜੋ ਅਧਿਆਪਕ ਬੱਚੇ ਨੂੰ ZPD ਵਿੱਚ ਸੁਤੰਤਰ ਕੰਮ ਕਰਨ ਲਈ ਦਿੰਦਾ ਹੈ।',
        xp: 50,
      },
      days: [
        {
          dayNumber: 14,
          phase: 'Phase 1: Pedagogy & Child Psychology Foundations',
          theme: 'Cognitive Theories: Piaget Stages vs Vygotsky Social Interaction',
          tasks: [
            {
              id: 'ett-t1',
              title: 'Revise Piaget Concrete Operational Stage (7-11 yrs)',
              titlePa: 'ਪਿਆਜੇ ਦੇ 4 ਪੜਾਅ ਅਤੇ ਸੰਭਾਲ (Conservation) ਸਿਧਾਂਤ',
              category: 'concept',
              estimatedMinutes: 25,
              link: '/study/punjab-master-cadre/social-science',
              linkText: 'Read Lesson Notes',
              xp: 40,
            },
            {
              id: 'ett-t2',
              title: 'Drill 25 Child Pedagogy MCQs (2012-2024 PYQs)',
              titlePa: '25 ਬਾਲ ਮਨੋਵਿਗਿਆਨ MCQs ਹੱਲ ਕਰੋ',
              category: 'mcq',
              estimatedMinutes: 20,
              link: '/mock-test/topic-ett-child-pedagogy?count=25',
              linkText: 'Start 25 Qs Drill',
              xp: 60,
            },
            {
              id: 'ett-t3',
              title: 'Memorize 20 EVS & Punjab Wetland Flashcards in 3D Flip',
              titlePa: 'ਹਰੀਕੇ, ਰੋਪੜ ਤੇ ਕਾਂਜਲੀ ਵੈਟਲੈਂਡਜ਼ ਫਲਿੱਪ ਕਾਰਡ',
              category: 'flip',
              estimatedMinutes: 15,
              link: '/mock-test/topic-ett-evs-science?mode=flip',
              linkText: 'Practice 3D Cards',
              xp: 35,
            },
            {
              id: 'ett-t4',
              title: 'Attempt 50 Qs ETT Cadre CBT Test (Check State Merit Rank)',
              titlePa: '50 ਸਵਾਲਾਂ ਦਾ ਫੁੱਲ ਲਾਈਵ CBT ਟੈਸਟ (-0.25 ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ)',
              category: 'cbt',
              estimatedMinutes: 45,
              link: '/mock-test/topic-all?exam=ett-punjab&count=50',
              linkText: 'Take 50 Qs CBT',
              xp: 100,
            },
          ],
        },
      ],
    },
    clerk: {
      name: 'PSSSB Clerk & Senior Assistant Mission',
      badge: '💼 Clerk Track',
      dailyChallenge: {
        id: 'chal-clerk-1',
        title: 'Daily Merit-Decider: IPv4 vs IPv6 Structure Trap',
        question: 'PSSSB ਕੰਪਿਊਟਰ ਪ੍ਰੀਖਿਆ: IPv4 ਐਡਰੈੱਸ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਬਿੱਟਸ (Bits) ਹੁੰਦੇ ਹਨ ਅਤੇ ਇਸ ਨੂੰ ਕਿੰਨੇ ਔਕਟੇਟਸ (Octets) ਵਿੱਚ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ?',
        options: {
          A: '16 ਬਿੱਟਸ (2 ਔਕਟੇਟਸ)',
          B: '32 ਬਿੱਟਸ (4 ਔਕਟੇਟਸ)',
          C: '64 ਬਿੱਟਸ (8 ਔਕਟੇਟਸ)',
          D: '128 ਬਿੱਟਸ (16 ਔਕਟੇਟਸ)',
        },
        correct: 'B',
        rationale: 'IPv4 32 ਬਿੱਟਸ (4 ਬਾਈਟਸ/ਔਕਟੇਟਸ) ਦਾ ਹੁੰਦਾ ਹੈ, ਜਿਵੇਂ 192.168.1.1। IPv6 128 ਬਿੱਟਸ ਦਾ ਹੁੰਦਾ ਹੈ।',
        xp: 50,
      },
      days: [
        {
          dayNumber: 14,
          phase: 'Phase 1: Computer IT & Raavi Typing Mastery',
          theme: 'MS Office Advanced Shortcuts, Binary/ASCII & Inscript Halant Rules',
          tasks: [
            {
              id: 'clk-t1',
              title: 'Master Raavi Unicode Doot Akhar (Halant \'d\' Key Rules)',
              titlePa: 'ਰਾਵੀ ਫੌਂਟ ਵਿੱਚ ਪੈਰੀਂ ਅੱਖਰ ਪਾਉਣ ਦੇ ਨਿਯਮ',
              category: 'concept',
              estimatedMinutes: 20,
              link: '/typing-practice',
              linkText: 'Open Typing Lab',
              xp: 40,
            },
            {
              id: 'clk-t2',
              title: 'Attempt 25 Computer & IT MCQs (2012-2024 PSSSB Papers)',
              titlePa: '25 ਕੰਪਿਊਟਰ ਅਤੇ ਆਈ.ਟੀ. ਸਵਾਲ ਹੱਲ ਕਰੋ',
              category: 'mcq',
              estimatedMinutes: 20,
              link: '/mock-test/topic-psssb-computer-it?count=25',
              linkText: 'Start 25 Qs Drill',
              xp: 60,
            },
            {
              id: 'clk-t3',
              title: 'Practice 15 minutes Raavi Speed Drill (Target: 30 WPM)',
              titlePa: '15 ਮਿੰਟ ਰਾਵੀ ਟਾਈਪਿੰਗ ਅਭਿਆਸ (30 WPM ਲਕਸ਼)',
              category: 'flip',
              estimatedMinutes: 15,
              link: '/typing-practice',
              linkText: 'Raavi Simulator',
              xp: 45,
            },
            {
              id: 'clk-t4',
              title: 'Launch 50-Question PSSSB Clerk CBT Simulation',
              titlePa: '50 ਸਵਾਲਾਂ ਦਾ PSSSB ਕਲਰਕ ਮੌਕ ਟੈਸਟ (-0.25 ਮਾਰਕ)',
              category: 'cbt',
              estimatedMinutes: 45,
              link: '/mock-test/topic-all?exam=clerk-psssb&count=50',
              linkText: 'Launch 50 Qs CBT',
              xp: 100,
            },
          ],
        },
      ],
    },
    'master-cadre': {
      name: 'Punjab Master Cadre SST (History, Civics, Geo, Eco)',
      badge: '🌾 Master Cadre',
      dailyChallenge: {
        id: 'chal-sst-1',
        title: 'Daily Merit-Decider: Chappar Chiri & Lohgarh Fortress',
        question: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ 1710 ਦੀ ਚੱਪੜਚਿੜੀ ਲੜਾਈ ਤੋਂ ਬਾਅਦ ਖਾਲਸਾ ਰਾਜ ਦੀ ਪਹਿਲੀ ਰਾਜਧਾਨੀ ਕਿੱਥੇ ਸਥਾਪਿਤ ਕੀਤੀ ਸੀ?',
        options: {
          A: 'ਸਰਹਿੰਦ (Sirhind)',
          B: 'ਮੁਖਲਿਸਪੁਰ / ਲੋਹਗੜ੍ਹ (Lohgarh)',
          C: 'ਅੰਮ੍ਰਿਤਸਰ (Amritsar)',
          D: 'ਸਮਾਣਾ (Samana)',
        },
        correct: 'B',
        rationale: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਮੁਖਲਿਸਪੁਰ ਕਿਲ੍ਹੇ ਦੀ ਮੁਰੰਮਤ ਕਰਕੇ ਇਸ ਦਾ ਨਾਂ ਲੋਹਗੜ੍ਹ ਰੱਖਿਆ ਅਤੇ ਖਾਲਸਾ ਸਿੱਕੇ ਜਾਰੀ ਕੀਤੇ।',
        xp: 50,
      },
      days: [
        {
          dayNumber: 14,
          phase: 'Phase 2: Punjab History & 12 Misls Intensive',
          theme: 'Banda Singh Bahadur, Dal Khalsa & Maharaja Ranjit Singh Reforms',
          tasks: [
            {
              id: 'sst-t1',
              title: 'Deep Study: 12 Sikh Misals & Anglo-Sikh Wars (1845-1849)',
              titlePa: '12 ਮਿਸਲਾਂ ਅਤੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਡੂੰਘਾਈ ਨਾਲ ਪੜ੍ਹੋ',
              category: 'concept',
              estimatedMinutes: 30,
              link: '/lesson/punjab-history',
              linkText: 'Read Deep Notes',
              xp: 50,
            },
            {
              id: 'sst-t2',
              title: 'Solve 25 Polity & Fundamental Rights Questions',
              titlePa: '25 ਸੰਵਿਧਾਨਕ ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਟੈਸਟ ਦਿਓ',
              category: 'mcq',
              estimatedMinutes: 25,
              link: '/mock-test/topic-fundamental-rights?count=25',
              linkText: 'Start Polity Drill',
              xp: 60,
            },
            {
              id: 'sst-t3',
              title: 'Flipcard Review: 20 Punjab River Doabs & Soil Types',
              titlePa: 'ਦਰਿਆ, ਦੁਆਬੇ ਅਤੇ ਮਿੱਟੀ ਫਲਿੱਪ ਕਾਰਡ',
              category: 'flip',
              estimatedMinutes: 15,
              link: '/mock-test/topic-punjab-geography?mode=flip',
              linkText: 'Review Flipcards',
              xp: 35,
            },
            {
              id: 'sst-t4',
              title: 'Full 50-Question Master Cadre CBT Simulation',
              titlePa: 'ਮਾਸਟਰ ਕੈਡਰ 50 ਸਵਾਲਾਂ ਦਾ ਲਾਈਵ ਟੈਸਟ (-0.25)',
              category: 'cbt',
              estimatedMinutes: 45,
              link: '/mock-test/topic-all?exam=master-cadre-sst&count=50',
              linkText: 'Launch 50 Qs CBT',
              xp: 100,
            },
          ],
        },
      ],
    },
  };

  const activeRoadmap = TRACK_ROADMAPS[selectedTrack] || TRACK_ROADMAPS.ett;
  const currentDayData = activeRoadmap.days[0];
  const dayTasks = currentDayData.tasks;
  const completedCount = dayTasks.filter(t => completedTasks[t.id]).length;
  const completionPercentage = Math.round((completedCount / dayTasks.length) * 100);

  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-28 text-slate-100 max-w-xl mx-auto w-full">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-850 to-teal-950 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <Compass size={22} />
            </span>
            <div>
              <h1 className="text-white font-extrabold text-lg">Daily Preparation Roadmap</h1>
              <p className="text-[11px] text-teal-300">
                60-Day Day-by-Day Master Schedule • ETT, Clerk & Master Cadre
              </p>
            </div>
          </div>
          <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-1 rounded-full border border-amber-500/40 flex items-center gap-1">
            <Flame size={12} /> Day {activeDay} of 60
          </span>
        </div>

        {/* Track Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 mt-1">
          {[
            { id: 'ett', label: '👶 ETT Punjab', desc: '6635/5994' },
            { id: 'clerk', label: '💼 PSSSB Clerk', desc: 'Raavi & IT' },
            { id: 'master-cadre', label: '🌾 Master Cadre', desc: 'SST 150 Qs' },
          ].map(track => {
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id as any)}
                className={`p-2 rounded-xl border text-center transition ${
                  isSelected
                    ? 'bg-teal-500/20 border-teal-400 text-white font-bold ring-1 ring-teal-400'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="text-xs font-black block leading-snug">{track.label}</span>
                <span className="text-[9px] text-slate-400">{track.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TODAY'S ACTION PLAN CHECKLIST CARD */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-lg flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-teal-400" />
              <h2 className="text-sm font-bold text-white">Today\'s Action Plan (दिन का लक्ष्य)</h2>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {completedCount} of {dayTasks.length} tasks completed ({completionPercentage}%)
            </p>
          </div>
          <span className="text-xs font-black text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/30 font-mono">
            +{completedCount * 50} XP Today
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-700/60">
          <div 
            className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full transition-all duration-500 rounded-full"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>

        {/* Task List */}
        <div className="space-y-2.5 mt-1">
          {dayTasks.map(task => {
            const isDone = Boolean(completedTasks[task.id]);

            return (
              <div 
                key={task.id}
                className={`p-3 rounded-xl border transition flex items-start justify-between gap-3 ${
                  isDone 
                    ? 'bg-emerald-950/30 border-emerald-500/40 opacity-80' 
                    : 'bg-slate-900/70 border-slate-750 hover:border-slate-650'
                }`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className="mt-0.5 shrink-0 text-teal-400 hover:scale-110 transition-transform"
                >
                  {isDone ? <CheckCircle2 size={18} className="text-emerald-400" /> : <Circle size={18} className="text-slate-500" />}
                </button>

                <div className="flex-1 min-w-0">
                  <h3 className={`text-xs font-bold leading-snug ${isDone ? 'line-through text-slate-400' : 'text-white'}`}>
                    {task.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {task.titlePa}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1 font-mono">
                      <Clock size={11} /> {task.estimatedMinutes}m
                    </span>
                    <span>•</span>
                    <span className="text-amber-400 font-bold">+{task.xp} XP</span>
                  </div>
                </div>

                <Link
                  href={task.link}
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white rounded-lg text-[10px] font-bold border border-slate-700 shrink-0 transition flex items-center gap-1"
                >
                  <span>{task.linkText}</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* DAILY HARD MERIT CHALLENGE (आज की कठिन चुनौती) */}
      <div className="bg-gradient-to-br from-rose-950/40 via-slate-850 to-indigo-950/40 rounded-2xl p-4 border border-rose-500/40 shadow-lg flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-rose-500/20 text-rose-300 rounded-lg">
              <Brain size={16} />
            </span>
            <div>
              <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">
                Daily Merit-Maker Question
              </span>
              <h3 className="text-xs font-black text-white">{activeRoadmap.dailyChallenge.title}</h3>
            </div>
          </div>
          <span className="bg-rose-500/20 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-500/30">
            Hard 🔴
          </span>
        </div>

        <p className="text-xs font-semibold text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
          {activeRoadmap.dailyChallenge.question}
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {Object.entries(activeRoadmap.dailyChallenge.options).map(([key, label]: [string, any]) => {
            const isSelected = dailyChallengeAnswer === key;
            const isCorrect = key === activeRoadmap.dailyChallenge.correct;

            let optStyle = 'bg-slate-900/80 border-slate-750 text-slate-300';
            if (showChallengeSolution) {
              if (isCorrect) optStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
              else if (isSelected && !isCorrect) optStyle = 'bg-rose-950/60 border-rose-500 text-rose-200 line-through';
            } else if (isSelected) {
              optStyle = 'bg-indigo-600/30 border-indigo-500 text-white font-bold';
            }

            return (
              <button
                key={key}
                onClick={() => {
                  setDailyChallengeAnswer(key);
                  setShowChallengeSolution(true);
                }}
                className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2 ${optStyle}`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold shrink-0">
                  {key}
                </span>
                <span className="truncate">{label}</span>
              </button>
            );
          })}
        </div>

        {showChallengeSolution && (
          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-750 text-xs text-slate-300 leading-relaxed">
            <span className="text-amber-400 font-bold block mb-0.5">Examiner Solution:</span>
            {activeRoadmap.dailyChallenge.rationale}
          </div>
        )}
      </div>

      {/* 60-DAY PHASE TIMELINE OVERVIEW */}
      <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 shadow-md flex flex-col gap-3">
        <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
          60-Day Strategic Timeline for {activeRoadmap.name}
        </h3>

        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-750 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center text-[10px]">P1</span>
              <div>
                <strong className="text-white block">Days 1 – 15: Core Foundations</strong>
                <span className="text-[10px] text-slate-400">Theory, CDP / IT & Key Notes</span>
              </div>
            </div>
            <span className="text-teal-400 text-[10px] font-bold">Current Phase</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-[10px]">P2</span>
              <div>
                <strong className="text-white block">Days 16 – 30: 12-Year Past Papers</strong>
                <span className="text-[10px] text-slate-400">Topic-by-topic PYQ drills</span>
              </div>
            </div>
            <span className="text-slate-500 text-[10px]">Upcoming</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center text-[10px]">P3</span>
              <div>
                <strong className="text-white block">Days 31 – 45: Speed & Accuracy</strong>
                <span className="text-[10px] text-slate-400">Eliminating -0.25 Negative Marking</span>
              </div>
            </div>
            <span className="text-slate-500 text-[10px]">Upcoming</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-between opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-[10px]">P4</span>
              <div>
                <strong className="text-white block">Days 46 – 60: Full 50/150 CBT Drills</strong>
                <span className="text-[10px] text-slate-400">Simulations & State Rank Maximization</span>
              </div>
            </div>
            <span className="text-slate-500 text-[10px]">Final Sprint</span>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex gap-2.5">
        <Link
          href="/library"
          className="flex-1 bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 font-black py-3 rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow transition"
        >
          <BookOpen size={14} />
          <span>Open Virtual Study Library & Desk</span>
        </Link>
        <Link
          href="/mock-test"
          className="bg-slate-800 hover:bg-slate-750 border border-slate-700 text-teal-300 font-bold px-4 py-3 rounded-xl text-center text-xs flex items-center justify-center gap-1 transition"
        >
          <Target size={14} />
          <span>CBT Tests</span>
        </Link>
      </div>

    </div>
  );
}
