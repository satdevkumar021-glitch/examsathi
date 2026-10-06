'use client';
import Link from 'next/link';
import { Compass, BookOpen, Target, ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-6 text-center text-slate-100 max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-3xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-3xl mb-4 shadow-xl">
        🧭
      </div>

      <span className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-1">
        404 • पृष्ठ नहीं मिला / ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ
      </span>
      <h1 className="text-3xl font-extrabold text-white mb-2">
        Page Not Found
      </h1>
      <p className="text-xs text-slate-400 mb-8 max-w-sm leading-relaxed">
        The exam resource, lesson syllabus, or test link you requested could not be located.
        Explore verified tracks below or return to the main dashboard.
      </p>

      <div className="grid grid-cols-2 gap-3 w-full mb-6">
        <Link 
          href="/dashboard"
          className="bg-slate-800/90 hover:bg-slate-800 p-3.5 rounded-2xl border border-slate-700 hover:border-indigo-500/50 flex flex-col items-center gap-1.5 transition text-center"
        >
          <Home size={20} className="text-teal-400" />
          <span className="text-xs font-bold text-white">Student Dashboard</span>
          <span className="text-[10px] text-slate-400">मुख्य डैशबोर्ड</span>
        </Link>

        <Link 
          href="/exams"
          className="bg-slate-800/90 hover:bg-slate-800 p-3.5 rounded-2xl border border-slate-700 hover:border-indigo-500/50 flex flex-col items-center gap-1.5 transition text-center"
        >
          <Compass size={20} className="text-amber-400" />
          <span className="text-xs font-bold text-white">Exam Directory</span>
          <span className="text-[10px] text-slate-400">पंजाब, राजस्थान, SSC</span>
        </Link>

        <Link 
          href="/mock-test"
          className="bg-slate-800/90 hover:bg-slate-800 p-3.5 rounded-2xl border border-slate-700 hover:border-indigo-500/50 flex flex-col items-center gap-1.5 transition text-center"
        >
          <Target size={20} className="text-indigo-400" />
          <span className="text-xs font-bold text-white">50-Q CBT Tests</span>
          <span className="text-[10px] text-slate-400">मॉक टेस्ट व मेरिट रैंक</span>
        </Link>

        <Link 
          href="/library"
          className="bg-slate-800/90 hover:bg-slate-800 p-3.5 rounded-2xl border border-slate-700 hover:border-indigo-500/50 flex flex-col items-center gap-1.5 transition text-center"
        >
          <BookOpen size={20} className="text-emerald-400" />
          <span className="text-xs font-bold text-white">Virtual Library</span>
          <span className="text-[10px] text-slate-400">25m फोकस टाइमर</span>
        </Link>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-teal-300 hover:text-teal-200 transition"
      >
        <ArrowLeft size={14} /> Back to ExamSathi Home
      </Link>
    </div>
  );
}
