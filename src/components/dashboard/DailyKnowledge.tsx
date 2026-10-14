'use client';
import { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Lightbulb, GraduationCap, Cake, Sparkles, CheckCircle, HelpCircle, Award } from 'lucide-react';
import { useStore } from '@/lib/store';
import { getTodayContent } from '@/lib/data/daily_content';
import { studyStorage } from '@/lib/storage';
import { awardStudyXP } from '@/lib/study-progress';

export default function DailyKnowledge() {
  const { language } = useStore();
  const lang = (language === 'pa' ? 'pa' : language === 'en' ? 'en' : 'hi') as 'hi' | 'pa' | 'en';

  // Live date tracking: automatically updates on midnight rollover and tab refocus
  const [currentDate, setCurrentDate] = useState<Date>(() => new Date());
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    const checkDateChange = () => {
      const now = new Date();
      if (
        now.getDate() !== currentDate.getDate() ||
        now.getMonth() !== currentDate.getMonth() ||
        now.getFullYear() !== currentDate.getFullYear()
      ) {
        setCurrentDate(now);
      }
    };

    const interval = setInterval(checkDateChange, 30000);
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') checkDateChange();
    };

    window.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', checkDateChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', checkDateChange);
    };
  }, [currentDate]);

  const daily = getTodayContent(lang, currentDate);

  // Restore saved daily quiz attempt
  useEffect(() => {
    try {
      const saved = studyStorage.getItem(`examsathi_daily_quiz_${daily.dateKey}`);
      if (saved) {
        setSelectedOption(saved);
        setHasAnswered(true);
      } else {
        setSelectedOption(null);
        setHasAnswered(false);
      }
    } catch {
      // Fallback
    }
  }, [daily.dateKey]);

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    if (hasAnswered) return;
    setSelectedOption(key);
    setHasAnswered(true);
    studyStorage.setItem(`examsathi_daily_quiz_${daily.dateKey}`, key);
    
    // Award 5 XP and automatically activate today's study streak
    awardStudyXP(`daily-quiz-${daily.dateKey}`, 5);
  };

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
      {/* 1. Daily Inspirational Quote / Thought of the Day */}
      <div className="bg-gradient-to-br from-indigo-950/70 via-slate-850 to-slate-900 border border-indigo-500/30 rounded-2xl p-4 shadow-md">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <Lightbulb size={16} className="text-amber-400" />
            <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
              {lang === 'pa' ? 'ਅੱਜ ਦਾ ਪ੍ਰੇਰਣਾਦਾਇਕ ਵਿਚਾਰ' : lang === 'hi' ? 'आज का सुविचार' : 'Daily Thought of The Day'}
            </span>
          </div>
          <span className="text-[11px] text-teal-400 font-semibold bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/20">
            {daily.formattedDate[lang]}
          </span>
        </div>
        <p className="text-white font-bold text-xs sm:text-sm leading-relaxed italic">
          &ldquo;{daily.thought}&rdquo;
        </p>
        <span className="text-[11px] text-amber-300 font-medium block mt-1.5">
          — {daily.thoughtAuthor}
        </span>
      </div>

      {/* 2. Today in History & Historical Personality Birthday */}
      <div className="bg-slate-850 border border-slate-700/80 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-teal-400" />
            <h3 className="text-white font-bold text-xs">
              {lang === 'pa' ? 'ਇਤਿਹਾਸ ਦੇ ਝਰੋਖੇ ਵਿੱਚੋਂ' : lang === 'hi' ? 'आज का इतिहास एवं जयंती' : 'Today in History & Milestones'}
            </h3>
          </div>
          <span className="text-[10px] text-slate-400 font-medium">
            {daily.formattedDate[lang]}
          </span>
        </div>

        <div className="space-y-2.5 text-xs">
          {/* Historical Personality / Birthday Spotlight */}
          {daily.historicalPerson && (
            <div className="p-3 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 rounded-xl border border-amber-600/30 flex items-start gap-2.5">
              <Cake size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-white font-bold text-xs">
                    {daily.historicalPerson.name}
                  </span>
                  {daily.historicalPerson.birthYear && (
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded border border-amber-500/30">
                      {lang === 'pa' ? `ਜਨਮ: ${daily.historicalPerson.birthYear}` : lang === 'hi' ? `जन्म: ${daily.historicalPerson.birthYear}` : `Born: ${daily.historicalPerson.birthYear}`}
                    </span>
                  )}
                </div>
                <p className="text-amber-300/90 text-[11px] font-medium mt-0.5">
                  {daily.historicalPerson.title}
                </p>
                <p className="text-slate-300 text-[11px] leading-relaxed mt-1">
                  {daily.historicalPerson.significance}
                </p>
              </div>
            </div>
          )}

          {/* Key Historical Event / Milestone */}
          <div className="p-3 bg-slate-900/70 rounded-xl border border-slate-800 flex items-start gap-2.5">
            <Sparkles size={16} className="text-teal-400 shrink-0 mt-0.5" />
            <div className="min-w-0">
              <h4 className="text-white font-bold text-xs mb-1">
                {daily.gkTitle}
              </h4>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {daily.gkDescription}
              </p>
              {daily.gkSource && (
                <p className="text-[10px] text-slate-400 mt-1.5">
                  {lang === 'pa' ? 'ਸਰੋਤ: ' : lang === 'hi' ? 'स्रोत: ' : 'Source: '}{daily.gkSource}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Daily Mini-Quiz — 1-Question Streak Activator */}
      {daily.miniQuiz && (
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-teal-950/40 border border-teal-500/40 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <HelpCircle size={16} className="text-teal-400" />
              <h3 className="text-white font-bold text-xs">
                {lang === 'pa' ? 'ਅੱਜ ਦਾ ਸਵਾਲ (Daily Mini Quiz)' : lang === 'hi' ? 'आज का प्रश्न (Daily Mini Quiz)' : 'Daily Practice Question'}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
              <Award size={11} /> +5 XP
            </span>
          </div>

          <p className="text-slate-100 font-semibold text-xs leading-relaxed mb-3">
            {daily.miniQuiz.question[lang]}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5">
            {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
              const optionText = daily.miniQuiz?.options[optKey]?.[lang];
              if (!optionText) return null;
              const isSelected = selectedOption === optKey;
              const isCorrect = daily.miniQuiz?.correct === optKey;

              let btnStyle = 'bg-slate-800/90 hover:bg-slate-750 text-slate-200 border-slate-700';
              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-950/80 text-emerald-200 border-emerald-500/80 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-950/80 text-rose-200 border-rose-500/80 line-through';
                } else {
                  btnStyle = 'bg-slate-850/60 text-slate-400 border-slate-800 opacity-60';
                }
              }

              return (
                <button
                  key={optKey}
                  type="button"
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(optKey)}
                  className={`text-left px-3 py-2 rounded-xl border text-xs transition flex items-start gap-2 ${btnStyle}`}
                >
                  <span className="font-mono font-bold text-[11px] opacity-75 shrink-0">{optKey}.</span>
                  <span className="min-w-0">{optionText}</span>
                </button>
              );
            })}
          </div>

          {hasAnswered && (
            <div className={`mt-2.5 p-2.5 rounded-xl border text-[11px] leading-relaxed ${
              selectedOption === daily.miniQuiz.correct
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
            }`}>
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <CheckCircle size={13} className={selectedOption === daily.miniQuiz.correct ? 'text-emerald-400' : 'text-amber-400'} />
                <span>
                  {selectedOption === daily.miniQuiz.correct
                    ? (lang === 'pa' ? 'ਬਿਲਕੁਲ ਸਹੀ! (+5 XP ਅਤੇ ਸਟ੍ਰੀਕ ਕਿਰਿਆਸ਼ੀਲ)' : lang === 'hi' ? 'बिल्कुल सही! (+5 XP एवं लकीर सक्रिय)' : 'Correct! (+5 XP & Streak Active)')
                    : (lang === 'pa' ? `ਸਹੀ ਜਵਾਬ: ਵਿਕਲਪ ${daily.miniQuiz.correct}` : lang === 'hi' ? `सही उत्तर: विकल्प ${daily.miniQuiz.correct}` : `Correct Answer: Option ${daily.miniQuiz.correct}`)}
                </span>
              </div>
              <p className="text-slate-300">
                {daily.miniQuiz.explanation[lang]}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 4. Verified Free Govt Learning Portals */}
      <div className="bg-slate-850 border border-slate-700/80 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-indigo-400" />
            <h3 className="text-white font-bold text-xs">
              {lang === 'pa' ? 'ਸਰਕਾਰੀ ਮੁਫ਼ਤ ਅਧਿਐਨ ਪੋਰਟਲ' : lang === 'hi' ? 'प्रमाणित सरकारी अध्ययन पोर्टल' : 'Curated Free Govt Portals'}
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
                  <h4 className="text-white font-bold text-[11px] truncate">{lang === 'pa' ? res.namePa : res.name}</h4>
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
