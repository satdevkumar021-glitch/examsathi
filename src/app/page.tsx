'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { ALL_EXAMS } from '@/lib/data/exams';

export default function LandingPage() {
  const router = useRouter();
  const { setLanguage } = useStore();

  const handleSelectLang = (lang: 'hi' | 'pa' | 'en') => {
    setLanguage(lang);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-6 text-center text-slate-100">
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="mb-6 max-w-md"
      >
        <span className="text-4xl mb-2 inline-block">🎓</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">ExamSathi</h1>
        <p className="text-lg text-teal-300 font-medium">परीक्षा साथी • ਪ੍ਰੀਖਿਆ ਸਾਥੀ</p>
        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
          Open-Access Multi-Disciplinary Exam Preparation Portal for State &amp; Central Government Examinations
        </p>
      </motion.div>

      {/* Choose Preferred Language */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center gap-2 mb-8"
      >
        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
          अपनी भाषा चुनें / ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ
        </span>
        <div className="flex gap-2.5">
          <button 
            onClick={() => handleSelectLang('hi')} 
            className="bg-slate-800/90 hover:bg-indigo-600 transition-all px-4 py-2 rounded-xl border border-slate-700 hover:border-indigo-400 text-xs font-bold flex items-center gap-1.5 shadow"
          >
            <span>🇮🇳</span> हिंदी
          </button>
          <button 
            onClick={() => handleSelectLang('pa')} 
            className="bg-slate-800/90 hover:bg-indigo-600 transition-all px-4 py-2 rounded-xl border border-slate-700 hover:border-indigo-400 text-xs font-bold flex items-center gap-1.5 shadow"
          >
            <span>🌾</span> ਪੰਜਾਬੀ
          </button>
          <button 
            onClick={() => handleSelectLang('en')} 
            className="bg-slate-800/90 hover:bg-indigo-600 transition-all px-4 py-2 rounded-xl border border-slate-700 hover:border-indigo-400 text-xs font-bold flex items-center gap-1.5 shadow"
          >
            <span>🇬🇧</span> English
          </button>
        </div>
      </motion.div>

      {/* Stats KPI */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.35, duration: 0.5 }}
        className="grid grid-cols-3 gap-3 mb-10 w-full max-w-sm"
      >
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 text-center">
          <div className="text-xl font-bold text-amber-400">
            {Object.values(ALL_EXAMS).reduce((acc, l) => acc + l.length, 0)}
          </div>
          <div className="text-[11px] text-slate-400">Recruitments</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 text-center">
          <div className="text-xl font-bold text-teal-400">20-Yr</div>
          <div className="text-[11px] text-slate-400">PYQ Archive</div>
        </div>
        <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 text-center">
          <div className="text-xl font-bold text-indigo-400">600+</div>
          <div className="text-[11px] text-slate-400">Authentic MCQs</div>
        </div>
      </motion.div>

      {/* Call to Actions */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full max-w-sm flex flex-col gap-3"
      >
        <Link 
          href="/dashboard" 
          className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-white font-bold py-3.5 rounded-xl shadow-lg transition text-sm flex items-center justify-center gap-2"
        >
          <span>Start Learning • अध्ययन शुरू करें</span>
        </Link>

        <div className="grid grid-cols-2 gap-2.5">
          <Link 
            href="/login" 
            className="w-full bg-slate-800/90 hover:bg-slate-750 text-indigo-300 hover:text-white border border-indigo-500/40 hover:border-indigo-400 font-bold py-3 rounded-xl shadow transition text-xs flex items-center justify-center gap-1.5"
          >
            <span>🔐</span> Student Login
          </Link>
          <Link 
            href="/register" 
            className="w-full bg-slate-800/90 hover:bg-slate-750 text-teal-300 hover:text-white border border-teal-500/40 hover:border-teal-400 font-bold py-3 rounded-xl shadow transition text-xs flex items-center justify-center gap-1.5"
          >
            <span>✨</span> Register Free
          </Link>
        </div>

        {/* WhatsApp Share Button */}
        <a 
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            `🎓 *ExamSathi (परीक्षा साथी · ਪ੍ਰੀਖਿਆ ਸਾਥੀ)* 🇮🇳\n\nपंजाब, राजस्थान और केंद्रीय भर्ती परीक्षाओं (Master Cadre SST, ETT, Clerk, Police, Patwari, REET, CTET) की तैयारी हेतु ExamSathi:\n\n✨ 50-Question Live CBT Mock Tests with Negative Marking\n✨ Predicted State & Category Merit Rank\n✨ 3D Spaced Repetition Flip Cards & Notes\n✨ हिंदी, ਪੰਜਾਬੀ (Gurmukhi) & English\n\n👉 Visit Platform:\nhttps://satdevkumar021-glitch.github.io/examsathi/`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl shadow transition text-xs flex items-center justify-center gap-2 border border-emerald-500/50"
        >
          <span>📲 Share on WhatsApp (व्हाट्सएप पर शेयर करें)</span>
        </a>

        <div className="flex justify-center gap-4 text-xs text-slate-400">
          <Link href="/forgot-password" className="hover:text-amber-300 transition">
            Forgot Password?
          </Link>
          <span>•</span>
          <Link href="/exams" className="hover:text-teal-300 transition">
            All State Exams
          </Link>
        </div>

        {/* Footer Policy Links for Google AdSense & DPDP Compliance */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[11px] text-slate-500">
          <Link href="/privacy-policy" className="hover:text-slate-300 transition">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-slate-300 transition">
            Terms of Service
          </Link>
          <span>•</span>
          <Link href="/about" className="hover:text-slate-300 transition">
            About Us
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-slate-300 transition">
            Contact &amp; Errata
          </Link>
        </div>
      </motion.div>

    </div>
  );
}
