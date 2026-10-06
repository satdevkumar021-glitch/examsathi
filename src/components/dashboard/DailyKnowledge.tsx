'use client';
import { Sparkles, Calendar, ExternalLink, Lightbulb, GraduationCap } from 'lucide-react';
import { useStore } from '@/lib/store';

export default function DailyKnowledge() {
  const { language } = useStore();

  const QUOTES = {
    hi: {
      quote: 'उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।',
      meaning: 'कठिन परिश्रम और दैनिक निरंतर अभ्यास से ही सरकारी चयन संभव होता है।',
      author: 'हितोपदेश सुभाषितम्',
    },
    pa: {
      quote: 'ਮਿਹਨਤ ਤੇ ਲਗਨ ਨਾਲ ਹੀ ਮੰਜਿਲ ਮਿਲਦੀ ਹੈ।',
      meaning: 'ਰੋਜ਼ਾਨਾ ਈਮਾਨਦਾਰ ਤਿਆਰੀ ਅਤੇ ਨਿਯਮਿਤ ਅਭਿਆਸ ਹੀ ਸਰਕਾਰੀ ਮੈਰਿਟ ਸੂਚੀ ਦੀ ਕੁੰਜੀ ਹੈ।',
      author: 'ਪ੍ਰੇਰਣਾਦਾਇਕ ਵਿਚਾਰ',
    },
    en: {
      quote: 'Consistency turns ordinary efforts into extraordinary selection merit.',
      meaning: 'Daily structured revision and CBT testing build unbreakable exam confidence.',
      author: 'ExamSathi Mentor',
    },
  };

  const currentQuote = QUOTES[language] || QUOTES.hi;

  const FREE_RESOURCES = [
    {
      name: 'NCERT ePathshala',
      namePa: 'NCERT ਕਿਤਾਬਾਂ',
      desc: 'Free Class 1-12 Textbooks & Audio',
      url: 'https://epathshala.nic.in',
      tag: 'Govt Official',
      color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    },
    {
      name: 'PSEB Digital Library',
      namePa: 'ਪੰਜਾਬ ਸਕੂਲ ਬੋਰਡ ਕਿਤਾਬਾਂ',
      desc: 'Punjab Board Official Syllabus & PDFs',
      url: 'https://pseb.ac.in',
      tag: 'Punjab State',
      color: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    },
    {
      name: 'SWAYAM (MoE)',
      namePa: 'ਸਵਯਮ ਪੋਰਟਲ',
      desc: 'Free University Level Video Courses',
      url: 'https://swayam.gov.in',
      tag: 'Central Govt',
      color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {/* 1. Daily Inspirational Quote */}
      <div className="bg-gradient-to-br from-indigo-950/70 via-slate-850 to-slate-900 border border-indigo-500/30 rounded-2xl p-4 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb size={16} className="text-amber-400" />
          <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
            {language === 'pa' ? 'ਅੱਜ ਦਾ ਪ੍ਰੇਰਣਾਦਾਇਕ ਵਿਚਾਰ' : language === 'hi' ? 'आज का सुविचार' : 'Daily Thought of The Day'}
          </span>
        </div>
        <p className="text-white font-bold text-xs sm:text-sm leading-relaxed italic">
          &ldquo;{currentQuote.quote}&rdquo;
        </p>
        <p className="text-slate-300 text-[11px] mt-1.5 leading-snug">
          {currentQuote.meaning}
        </p>
        <span className="text-[10px] text-teal-400 font-medium block mt-1">
          — {currentQuote.author}
        </span>
      </div>

      {/* 2. Today in History & Exam General Awareness */}
      <div className="bg-slate-850 border border-slate-700/80 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2.5">
          <Calendar size={16} className="text-teal-400" />
          <h3 className="text-white font-bold text-xs">
            {language === 'pa' ? 'ਇਤਿਹਾਸ ਦੇ ਝਰੋਖੇ ਵਿੱਚੋਂ' : language === 'hi' ? 'आज का ऐतिहासिक तथ्य' : 'Today in History & GK'}
          </h3>
        </div>
        <div className="space-y-2 text-xs">
          <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 flex items-start gap-2.5">
            <span className="text-xs shrink-0 mt-0.5">🇮🇳</span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              <strong className="text-white">Constitutional Assembly Milestone:</strong> Drafting Committee under Dr. B.R. Ambedkar adopted key consensus articles establishing equal citizenship and universal adult suffrage (Article 326).
            </p>
          </div>
          <div className="p-2.5 bg-slate-900/60 rounded-xl border border-slate-800 flex items-start gap-2.5">
            <span className="text-xs shrink-0 mt-0.5">🌾</span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              <strong className="text-white">Punjab Heritage Fact:</strong> The historic Battle of Chappar Chiri (May 1710) led by Baba Banda Singh Bahadur defeated Wazir Khan of Sirhind and established the first sovereign peasant rule in Punjab.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Verified Free Govt Learning Portals */}
      <div className="bg-slate-850 border border-slate-700/80 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-indigo-400" />
            <h3 className="text-white font-bold text-xs">
              {language === 'pa' ? 'ਸਰਕਾਰੀ ਮੁਫ਼ਤ ਅਧਿਐਨ ਪੋਰਟਲ' : language === 'hi' ? 'प्रमाणित सरकारी अध्ययन पोर्टल' : 'Curated Free Govt Portals'}
            </h3>
          </div>
          <span className="text-[10px] text-teal-400 font-semibold">100% Free</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {FREE_RESOURCES.map(res => (
            <a
              key={res.name}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/80 hover:bg-slate-800 p-2.5 rounded-xl border border-slate-700/60 hover:border-slate-600 transition flex items-center justify-between gap-2 group"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h4 className="text-white font-bold text-[11px] truncate">{language === 'pa' ? res.namePa : res.name}</h4>
                </div>
                <p className="text-[10px] text-slate-400 truncate">{res.desc}</p>
              </div>
              <ExternalLink size={12} className="text-slate-400 group-hover:text-teal-400 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
