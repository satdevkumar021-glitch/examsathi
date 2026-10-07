'use client';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Target, 
  Library, 
  Award, 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  HelpCircle 
} from 'lucide-react';

interface GuideStep {
  title: string;
  titlePa: string;
  badge: string;
  icon: React.ReactNode;
  content: string;
  contentPa: string;
  highlight: string;
}

const STEPS: GuideStep[] = [
  {
    title: '🎓 परीक्षा साथी (ExamSathi) में आपका स्वागत है!',
    titlePa: '🎓 ਪ੍ਰੀਖਿਆ ਸਾਥੀ (ExamSathi) ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ!',
    badge: '100% Free Platform',
    icon: <Sparkles className="text-amber-400" size={28} />,
    content: 'ExamSathi पंजाब, राजस्थान और केंद्रीय प्रतियोगी परीक्षाओं (Master Cadre, ETT, PSSSB Clerk, Police, Patwari, REET, CTET) के लिए बनाया गया पूर्णतः निःशुल्क परीक्षा मंच है। यहाँ बिना किसी सब्सक्रिप्शन के सम्पूर्ण अध्ययन सामग्री उपलब्ध है।',
    contentPa: 'ExamSathi ਪੰਜਾਬ ਅਤੇ ਹੋਰ ਮੁਕਾਬਲੇ ਦੀਆਂ ਪ੍ਰੀਖਿਆਵਾਂ (ਮਾਸਟਰ ਕੈਡਰ, ETT, ਕਲਰਕ, ਪੁਲਿਸ, ਪਟਵਾਰੀ, REET, CTET) ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ 100% ਮੁਫਤ ਸਟੱਡੀ ਪਲੇਟਫਾਰਮ ਹੈ।',
    highlight: 'Zero Fees • No Subscription • Trilingual (Hindi, Punjabi, English)'
  },
  {
    title: '⚡ 50-प्रश्नों का लाइव CBT मॉक टेस्ट एवं मेरिट रैंक',
    titlePa: '⚡ 50-ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਲਾਈਵ CBT ਮੌਕ ਟੈਸਟ ਅਤੇ ਰੈਂਕ',
    badge: '2004–2024 Archive',
    icon: <Target className="text-teal-400" size={28} />,
    content: 'असली परीक्षा हॉल जैसे माहौल में 50-प्रश्नों का CBT टेस्ट दें। इसमें आधिकारिक समय सीमा (45 मिनट), -0.25 नेगेटिव मार्किंग, और टेस्ट पूरा होने पर विषयवार गहन व्याख्या (Deep Dive Notes) व संभावित राज्य मेरिट रैंक (State Merit Rank) प्रदान की जाती है।',
    contentPa: 'ਅਸਲੀ ਪ੍ਰੀਖਿਆ ਵਾਂਗ 50 ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਟੈਸਟ ਦਿਓ। -0.25 ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ, ਟਾਈਮਰ ਅਤੇ ਹਰੇਕ ਪ੍ਰਸ਼ਨ ਦੀ ਡੂੰਘੀ ਵਿਆਖਿਆ ਦੇ ਨਾਲ ਆਪਣਾ ਰਾਜ ਮੈਰਿਟ ਰੈਂਕ ਦੇਖੋ।',
    highlight: 'Authentic 20-Year Past Papers • -0.25 Negative Marking • Merit Tier'
  },
  {
    title: '✨ AI प्रैक्टिस ड्रिल जेनरेटर (अपने नोट्स से टेस्ट बनाएं)',
    titlePa: '✨ AI ਪ੍ਰੈਕਟਿਸ ਡ੍ਰਿਲ ਜਨਰੇਟਰ (ਨੋਟਸ ਤੋਂ ਟੈਸਟ ਬਣਾਓ)',
    badge: 'Gemini 2.5 Engine',
    icon: <Sparkles className="text-indigo-400" size={28} />,
    content: 'क्या आपके पास अपनी हैंडराइटिंग के नोट्स या कोचिंग की पीडीएफ है? बस अपने नोट्स को कॉपी-पेस्ट करें, और हमारा AI तुरंत आधिकारिक पैटर्न के 5 से 15 अभ्यास प्रश्न उनके विस्तृत स्पष्टीकरण और परीक्षक की मानसिकता (Examiner Mindset) के साथ तैयार कर देगा।',
    contentPa: 'ਆਪਣੇ ਹੱਥ ਨਾਲ ਲਿਖੇ ਨੋਟਸ ਜਾਂ ਕੋਚਿੰਗ ਸਮੱਗਰੀ ਨੂੰ ਪੇਸਟ ਕਰੋ, ਸਾਡਾ AI ਕੁਝ ਸਕਿੰਟਾਂ ਵਿੱਚ ਅਧਿਕਾਰਤ ਪੈਟਰਨ ਦੇ MCQs ਤਿਆਰ ਕਰ ਦੇਵੇਗਾ।',
    highlight: 'Review extracted text • Source excerpts • Notes-based practice'
  },
  {
    title: '🏛️ वर्चुअल स्टडी लाइब्रेरी व पर्सनल स्टडी वॉल्ट',
    titlePa: '🏛️ ਵਰਚੁਅਲ ਸਟੱਡੀ ਲਾਇਬ੍ਰੇਰੀ ਅਤੇ ਸਟੱਡੀ ਵਾਲਟ',
    badge: 'Focus & Retention',
    icon: <Library className="text-emerald-400" size={28} />,
    content: 'शांत माहौल में पढ़ाई के लिए 16-डेस्क वाली वर्चुअल लाइब्रेरी में अपनी डेस्क बुक करें और 25-मिनट का पोमोडोरो टाइमर व पिंक नॉइज़ चलाएं। कठिन प्रश्नों को ⭐ स्टार करें या 📝 नोट्स में सेव करें ताकि परीक्षा से पहले त्वरित दोहराव कर सकें।',
    contentPa: '16-ਡੈਸਕਾਂ ਵਾਲੀ ਵਰਚੁਅਲ ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ ਆਪਣੀ ਡੈਸਕ ਚੁਣੋ, 25 ਮਿੰਟ ਦਾ ਪੋਮੋਡੋਰੋ ਟਾਈਮਰ ਲਗਾਓ ਅਤੇ ਔਖੇ ਪ੍ਰਸ਼ਨਾਂ ਨੂੰ ਆਪਣੇ ਸਟੱਡੀ ਵਾਲਟ ਵਿੱਚ ਸੰਭਾਲੋ।',
    highlight: '25m Pomodoro Room • Ambient Sound • Starred Questions Drill'
  }
];

export default function OnboardingGuideModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    try {
      const completed = studyStorage.getItem('examsathi_onboarding_completed');
      if (!completed) {
        // Auto show for first-time visitors after short delay
        const timer = setTimeout(() => setIsOpen(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {}

    const handleOpen = () => {
      setStepIndex(0);
      setIsOpen(true);
    };

    window.addEventListener('examsathi_open_onboarding', handleOpen);
    return () => window.removeEventListener('examsathi_open_onboarding', handleOpen);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    try {
      studyStorage.setItem('examsathi_onboarding_completed', 'true');
    } catch {}
  };

  const handleNext = () => {
    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      handleDismiss();
    }
  };

  const handlePrev = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  if (!isOpen) return null;

  const current = STEPS[stepIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-lg w-full p-6 shadow-2xl flex flex-col gap-5 text-slate-100 relative overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="onboarding-guide-title"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-slate-800 rounded-xl border border-slate-700">
              {current.icon}
            </span>
            <span className="text-[10px] font-black uppercase tracking-wider text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/30">
              {current.badge}
            </span>
          </div>

          <button 
            onClick={handleDismiss}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition"
            title="Skip Guide"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Content */}
        <div className="space-y-3">
          <h2 id="onboarding-guide-title" className="text-base sm:text-lg font-black text-white leading-snug">
            {current.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {current.content}
          </p>

          <div className="bg-slate-800/80 border border-slate-700 p-2.5 rounded-xl text-[11px] text-teal-300 font-semibold flex items-center gap-2">
            <span>💡</span>
            <span>{current.highlight}</span>
          </div>
        </div>

        {/* Dots & Nav Actions */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          {/* Step Dots */}
          <div className="flex items-center gap-1.5">
            {STEPS.map((_, idx) => (
              <span 
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  stepIndex === idx 
                    ? 'w-6 bg-teal-400' 
                    : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {stepIndex > 0 && (
              <button
                onClick={handlePrev}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition flex items-center gap-1"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-teal-400 via-teal-500 to-indigo-600 hover:opacity-95 text-slate-950 transition flex items-center gap-1.5 shadow-lg shadow-teal-500/10"
            >
              <span>{stepIndex === STEPS.length - 1 ? 'Start Learning 🚀' : 'Next'}</span>
              {stepIndex < STEPS.length - 1 && <ArrowRight size={14} />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
