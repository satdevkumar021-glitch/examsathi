import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Heart, Award, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us & Educational Mission',
  description: 'Learn about ExamSathi, our mission to democratize competitive exam education for Punjab, Haryana, Rajasthan, and Central aspirants at 100% free of cost.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">About ExamSathi (हमारे बारे में)</h1>
          <p className="text-xs text-slate-400">Our Mission • Pedagogical Methodology • Open Learning</p>
        </div>
      </div>

      <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-4 text-xs text-slate-300 leading-relaxed">
        <section className="space-y-1.5">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
            <Heart size={16} />
            <h2>1. Our Mission: 100% Free Quality Prep For All</h2>
          </div>
          <p>
            ExamSathi was founded with a singular conviction: access to high-quality exam preparation should never depend on whether a student can afford expensive coaching fees. Millions of ambitious students from villages, small towns, and working-class families across Punjab, Rajasthan, Haryana, and India dedicate years to preparing for government recruitment. ExamSathi provides them with world-class tools, completely free.
          </p>
        </section>

        <section className="space-y-1.5">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
            <BookOpen size={16} />
            <h2>2. Authoritative Pedagogical Sources</h2>
          </div>
          <p>
            Unlike uncurated question aggregators, ExamSathi anchors every topic directly to verified educational benchmarks:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Punjab School Education Board (PSEB):</strong> Classes 6 to 12 state history, geography, and Gurmukhi grammar.</li>
            <li><strong>NCERT:</strong> Canonical Indian History, Polity, Economics, and Environmental Science.</li>
            <li><strong>Board of School Education Haryana (BSEH) &amp; RBSE:</strong> State-specific pedagogical gazettes.</li>
            <li><strong>Official PYQ Gazettes:</strong> Authentic question papers from 2004 through 2024 with detailed step-by-step rationales.</li>
          </ul>
        </section>

        <section className="space-y-1.5">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Award size={16} />
            <h2>3. Scientific Learning Methodology</h2>
          </div>
          <p>
            We implement evidence-based cognitive science:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>FSRS Spaced Repetition:</strong> Optimizing card review intervals (Again, Hard, Good, Easy) to prevent memory decay.</li>
            <li><strong>Exact CBT Simulation:</strong> Real test countdowns, -0.25 negative marking penalties, and instant weak-area diagnostics.</li>
            <li><strong>Virtual Focus Room:</strong> Pomodoro timekeeping with 20-20-20 eye wellness guidelines to support candidate mental stamina.</li>
          </ul>
        </section>

        <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-700/60">
          <h2 className="text-white font-bold mb-2 flex items-center gap-2">
            <CheckCircle size={15} className="text-teal-400" />
            Comprehensive Exam Coverage
          </h2>
          <p className="text-xs text-slate-400"><strong>Punjab:</strong> Master Cadre, Lecturer Cadre, ETT, PSTET, PSSSB Clerk/Patwari, Punjab Police</p>
          <p className="text-xs text-slate-400 mt-1"><strong>Rajasthan:</strong> REET Level 1 &amp; 2, Rajasthan Police, RSMSSB exams</p>
          <p className="text-xs text-slate-400 mt-1"><strong>Haryana:</strong> HTET, Haryana Police, PRT / ETT</p>
          <p className="text-xs text-slate-400 mt-1"><strong>Central:</strong> SSC CGL/CHSL/MTS, CTET, UGC NET, Army Agniveer</p>
        </div>

        <p className="text-xs text-slate-400">
          ExamSathi is an independent educational platform and is not affiliated with any recruitment board or government body. Always check official recruiting portals for official notifications, admit cards, and results.
        </p>

        <div className="flex gap-4 pt-2 border-t border-slate-700/80">
          <Link href="/privacy/" className="text-teal-400 hover:underline">Privacy Policy</Link>
          <Link href="/terms/" className="text-teal-400 hover:underline">Terms of Service</Link>
          <Link href="/contact/" className="text-teal-400 hover:underline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
