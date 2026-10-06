'use client';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import StreakBadge from '@/components/ui/StreakBadge';
import { 
  Target, Book, Layers, CheckCircle, ArrowRight, Keyboard, 
  ShieldCheck, Compass, Sparkles, Award, GraduationCap, Briefcase, 
  Search, BookOpen, Flame, Share2, Calendar, Library
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useStore();

  return (
    <div className="p-4 flex flex-col gap-6 max-w-xl mx-auto w-full pb-20 text-slate-100">
      
      {/* Platform Banner */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-teal-600 rounded-3xl p-5 shadow-xl relative overflow-hidden border border-indigo-400/20">
        <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full -translate-y-12 translate-x-12 blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex justify-between items-start gap-3">
          <div>
            <div className="flex items-center gap-1.5 mb-1 text-xs text-teal-200 font-semibold">
              <Sparkles size={14} className="text-amber-300" />
              <span>Public Examination Knowledge Base</span>
            </div>
            <h1 className="text-white font-extrabold text-xl mb-0.5 tracking-tight">ExamSathi • परीक्षा साथी</h1>
            <p className="text-teal-100 text-xs mb-3.5">
              Comprehensive Multi-Disciplinary Exam Preparation Portal
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Link 
                href="/exams" 
                className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-lg text-white text-xs font-semibold backdrop-blur-sm inline-flex items-center gap-1"
              >
                <Compass size={13} /> Select Exam
              </Link>
              <Link 
                href="/login" 
                className="bg-teal-950/80 hover:bg-teal-900 border border-teal-400/50 px-3 py-1.5 rounded-lg text-teal-200 text-xs font-semibold inline-flex items-center gap-1 shadow-sm"
              >
                <span>🔐</span> Student Login
              </Link>
              <Link 
                href="/profile" 
                className="bg-indigo-950/70 hover:bg-indigo-900 border border-indigo-400/40 px-3 py-1.5 rounded-lg text-indigo-200 text-xs font-semibold inline-flex items-center gap-1"
              >
                <span>👤</span> Study Vault
              </Link>
            </div>
          </div>

          <StreakBadge streak={user?.streak || 14} />
        </div>
      </div>

      {/* 50-Question CBT Live Mock & 20-Year Archive Banner */}
      <Link
        href="/mock-test"
        className="bg-gradient-to-r from-teal-950 via-slate-850 to-indigo-950 p-4 rounded-2xl border-2 border-teal-500/50 shadow-xl flex items-center justify-between gap-3 group hover:border-teal-400 transition"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Target size={24} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                ⚡ 2004–2024 Archive
              </span>
              <span className="bg-teal-500/20 text-teal-300 text-[9px] font-bold px-1.5 py-0.2 rounded border border-teal-500/30">
                50 Qs Set
              </span>
            </div>
            <h3 className="text-white font-black text-sm truncate">
              Live CBT Mock Test & State Merit Rank
            </h3>
            <p className="text-[11px] text-slate-300 truncate">
              Simple, Mid & Hard sets • Master Cadre, Clerk, Police, Patwari & REET
            </p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
          <ArrowRight size={16} />
        </div>
      </Link>

      {/* Official Examination Tracks */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-white font-bold text-sm flex items-center gap-2">
            <span>🎯</span> Official Recruitment Tracks
          </h2>
          <Link href="/exams" className="text-teal-400 hover:text-teal-300 text-xs font-medium">
            View All Exams &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Track 1: School Teaching Cadres */}
          <Link 
            href="/study/punjab-master-cadre/social-science"
            className="bg-slate-800/90 border border-slate-700 hover:border-indigo-500/60 p-4 rounded-2xl flex flex-col gap-2.5 transition shadow-md group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Teaching Services</h3>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                Master Cadre, Lecturer Cadre, ETT, REET, CTET (SST, Science, Languages)
              </p>
            </div>
            <span className="text-[10px] text-teal-400 font-semibold mt-auto flex items-center gap-1">
              Explore Syllabus &rarr;
            </span>
          </Link>

          {/* Track 2: Administrative & Ministerial Cadres */}
          <Link 
            href="/study/punjab-clerk/clerk-special"
            className="bg-slate-800/90 border border-slate-700 hover:border-teal-500/60 p-4 rounded-2xl flex flex-col gap-2.5 transition shadow-md group"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
              <Briefcase size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Clerical & Ministerial</h3>
              <p className="text-[11px] text-slate-400 leading-snug mt-0.5">
                PSSSB Clerk, Patwari, Police, RSMSSB, SSC CHSL & CGL
              </p>
            </div>
            <span className="text-[10px] text-teal-400 font-semibold mt-auto flex items-center gap-1">
              Explore Syllabus &rarr;
            </span>
          </Link>
        </div>
      </div>

      {/* Preparation KPI Readiness */}
      <div className="grid grid-cols-4 gap-2.5">
        <div className="bg-slate-800/80 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-700 shadow-sm text-center">
          <span className="text-teal-400 font-bold text-lg">72%</span>
          <span className="text-slate-400 text-[10px] uppercase font-semibold">Readiness</span>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-700 shadow-sm text-center">
          <span className="text-indigo-400 font-bold text-lg">36</span>
          <span className="text-slate-400 text-[10px] uppercase font-semibold">Topics</span>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-700 shadow-sm text-center">
          <span className="text-amber-400 font-bold text-lg">520</span>
          <span className="text-slate-400 text-[10px] uppercase font-semibold">Cards</span>
        </div>
        <div className="bg-slate-800/80 rounded-xl p-3 flex flex-col items-center justify-center border border-slate-700 shadow-sm text-center">
          <span className="text-emerald-400 font-bold text-lg">84%</span>
          <span className="text-slate-400 text-[10px] uppercase font-semibold">Avg Score</span>
        </div>
      </div>

      {/* Featured Learning Modules */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-white font-bold text-sm flex items-center gap-2">
            <span>📚</span> Core Syllabus Modules
          </h2>
          <span className="text-[11px] text-slate-400">Deep-Dive Material</span>
        </div>

        <div className="flex flex-col gap-2.5">
          {/* Module 1: Punjab History */}
          <Link 
            href="/lesson/punjab-history"
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 rounded-2xl p-3.5 flex items-center justify-between gap-3 transition shadow-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm shrink-0">
                01
              </span>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-xs truncate">History of Punjab & Sikh Gurus</h4>
                <p className="text-slate-400 text-[11px] truncate">1469-1708, Khalsa 1699, Misals, Ranjit Singh & Ghadar</p>
              </div>
            </div>
            <span className="bg-slate-700 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
              12-15 Qs
            </span>
          </Link>

          {/* Module 2: Modern India */}
          <Link 
            href="/lesson/modern-india"
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-2xl p-3.5 flex items-center justify-between gap-3 transition shadow-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-sm shrink-0">
                02
              </span>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-xs truncate">Modern India (1757 - 1947)</h4>
                <p className="text-slate-400 text-[11px] truncate">Plassey, Buxar, 1857 Revolt, INC, Dandi March, 1947</p>
              </div>
            </div>
            <span className="bg-slate-700 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
              10-12 Qs
            </span>
          </Link>

          {/* Module 3: Fundamental Rights */}
          <Link 
            href="/lesson/fundamental-rights"
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 rounded-2xl p-3.5 flex items-center justify-between gap-3 transition shadow-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm shrink-0">
                03
              </span>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-xs truncate">Indian Polity — Fundamental Rights</h4>
                <p className="text-slate-400 text-[11px] truncate">Part III, Articles 12-35, 6 Categories & 5 Supreme Court Writs</p>
              </div>
            </div>
            <span className="bg-slate-700 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
              8-10 Qs
            </span>
          </Link>

          {/* Module 4: Clerk Typing & Computer */}
          <Link 
            href="/lesson/punjab-clerk-prep"
            className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-teal-500/50 rounded-2xl p-3.5 flex items-center justify-between gap-3 transition shadow-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 font-bold flex items-center justify-center text-sm shrink-0">
                04
              </span>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-xs truncate">PSSSB Clerk Prep & Raavi Typing Rules</h4>
                <p className="text-slate-400 text-[11px] truncate">30 WPM Benchmark, 92% Accuracy, MS Office Shortcuts</p>
              </div>
            </div>
            <span className="bg-slate-700 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
              20 Qs
            </span>
          </Link>
        </div>
      </div>

      {/* Structured Preparation Roadmap & Virtual Study Library */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-white font-bold text-sm flex items-center gap-2">
            <span>⚡</span> Daily Discipline & Smart Prep Suites
          </h2>
          <span className="text-[11px] text-teal-300 font-semibold">New Features</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* 60-Day Prep Roadmap */}
          <Link 
            href="/roadmap"
            className="bg-gradient-to-br from-indigo-950/80 to-slate-800/90 border border-indigo-500/40 hover:border-indigo-400 p-4 rounded-2xl flex flex-col justify-between gap-2.5 transition shadow-md group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                🧭
              </div>
              <span className="text-[9px] bg-indigo-500/20 text-indigo-300 font-bold px-2 py-0.5 rounded border border-indigo-500/30">
                60-Day Plan
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold text-xs sm:text-sm">Study Roadmap & Daily Plan</h3>
              <p className="text-[11px] text-slate-400 leading-snug mt-1">
                ETT, Clerk & Master Cadre daily milestones + merit decider challenge
              </p>
            </div>
            <span className="text-[10px] text-indigo-400 font-bold mt-auto flex items-center gap-1">
              Today's Targets &rarr;
            </span>
          </Link>

          {/* Virtual Study Library & Focus Desk */}
          <Link 
            href="/library"
            className="bg-gradient-to-br from-teal-950/80 to-slate-800/90 border border-teal-500/40 hover:border-teal-400 p-4 rounded-2xl flex flex-col justify-between gap-2.5 transition shadow-md group"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                🏛️
              </div>
              <span className="text-[9px] bg-teal-500/20 text-teal-300 font-bold px-2 py-0.5 rounded border border-teal-500/30">
                24 Desks
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold text-xs sm:text-sm">Virtual Study Library</h3>
              <p className="text-[11px] text-slate-400 leading-snug mt-1">
                Quiet reading desks, Pomodoro timer (25/45/60m) & live desk mock
              </p>
            </div>
            <span className="text-[10px] text-teal-400 font-bold mt-auto flex items-center gap-1">
              Select Your Desk &rarr;
            </span>
          </Link>
        </div>
      </div>

      {/* Practice & Examination Tools */}
      <div>
        <h2 className="text-white font-bold text-sm mb-3">Interactive Practice Suite</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link 
            href="/study/punjab-master-cadre/social-science" 
            className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 hover:bg-slate-750 transition shadow"
          >
            <div className="bg-indigo-500/20 p-2.5 rounded-full text-indigo-400">
              <Book size={20} />
            </div>
            <span className="text-slate-200 text-xs font-semibold text-center">Comprehensive Notes</span>
          </Link>

          <Link 
            href="/lesson/modern-india" 
            className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 hover:bg-slate-750 transition shadow"
          >
            <div className="bg-amber-500/20 p-2.5 rounded-full text-amber-400">
              <Layers size={20} />
            </div>
            <span className="text-slate-200 text-xs font-semibold text-center">3D Flipcards</span>
          </Link>

          <Link 
            href="/mock-test" 
            className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 hover:bg-slate-750 transition shadow"
          >
            <div className="bg-teal-500/20 p-2.5 rounded-full text-teal-400">
              <Target size={20} />
            </div>
            <span className="text-slate-200 text-xs font-semibold text-center">Topic Mock & PYQ Portal</span>
          </Link>

          <Link 
            href="/typing-practice" 
            className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-2 hover:bg-slate-750 transition shadow"
          >
            <div className="bg-purple-500/20 p-2.5 rounded-full text-purple-400">
              <Keyboard size={20} />
            </div>
            <span className="text-slate-200 text-xs font-semibold text-center">Raavi Typing Simulator</span>
          </Link>
        </div>
      </div>

      {/* Share with Friends on WhatsApp Banner */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-850 to-teal-950/80 p-4 rounded-2xl border border-emerald-500/40 shadow-lg flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <Share2 size={18} />
            </span>
            <div>
              <h3 className="text-white font-bold text-xs">Share ExamSathi with Friends & Aspirants</h3>
              <p className="text-[10px] text-emerald-300">100% Free • Open Learning Movement • Spread the Word</p>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Invite your friends, colleagues, and study groups on WhatsApp to practice 20-year PYQs, take 50-mark CBT tests, and share their feedback!
        </p>
        <a 
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            `🎓 *ExamSathi (परीक्षा साथी) — 100% Free Govt Exam Portal!* 🇮🇳\n\nदोस्तों, पंजाब और सरकारी भर्ती परीक्षाओं (Master Cadre SST, PSSSB Clerk, Police, Patwari, REET, CTET) की मुफ्त तैयारी के लिए ExamSathi देखें:\n\n✨ 20-Year Archive (2004–2024)\n✨ 50-Question Live CBT Mock Tests with Negative Marking\n✨ Predicted State & Category Merit Rank\n✨ 3D Spaced Repetition Flip Cards & Notes\n✨ हिंदी, ਪੰਜਾਬੀ & English\n\n👉 100% Free Link:\nhttps://satdevkumar021-glitch.github.io/examsathi/\n\nकृपया इसे अपने दोस्तों के साथ शेयर करें और अपना फीडबैक दें! 🙏`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-2 shadow transition"
        >
          <span>📲 Share on WhatsApp (व्हाट्सएप पर शेयर करें)</span>
        </a>
      </div>

    </div>
  );
}
