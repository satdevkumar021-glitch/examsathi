'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import {
  OFFICIAL_PHYSICAL_STANDARDS,
  PHYSICAL_MEDICAL_DISCLAIMER,
} from '@/lib/physical-standards';
import {
  Heart,
  Clock,
  ShieldAlert,
  FastForward,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

type Phase = 'idle' | 'inhale' | 'hold' | 'exhale' | 'complete';
type BreathingTechnique = 'box' | 'gentle'; // 'box' includes comfortable hold; 'gentle' has no hold

export default function ExamDayCoach() {
  const { language: lang } = useStore();
  const t = (en: string, hi: string, pa: string) => ({ en, hi, pa })[lang];

  // Breathing state
  const [technique, setTechnique] = useState<BreathingTechnique>('box');
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const [cycleOffset, setCycleOffset] = useState(0);

  // Time Strategy Calculator state
  const [calcDuration, setCalcDuration] = useState(100); // 100 mins
  const [calcQuestions, setCalcQuestions] = useState(100); // 100 qs
  const [calcBuffer, setCalcBuffer] = useState(15); // 15 mins buffer

  // Physical standards accordion
  const [selectedPhysicalKey, setSelectedPhysicalKey] = useState<string>('punjab-police-constable');

  // Compute elapsed & phase based on selected technique
  // Box: 4s inhale + 4s hold + 6s exhale = 14s cycle (5 cycles = 70s)
  // Gentle: 4s inhale + 4s exhale = 8s cycle (5 cycles = 40s)
  const cycleDurationMs = technique === 'box' ? 14000 : 8000;
  const totalDurationMs = cycleDurationMs * 5;

  const rawElapsed = startedAt === null ? 0 : Math.max(0, now - startedAt + cycleOffset);
  const cycle = Math.min(5, Math.floor(rawElapsed / cycleDurationMs) + 1);
  const withinCycle = rawElapsed % cycleDurationMs;

  let phase: Phase = 'idle';
  if (startedAt !== null) {
    if (rawElapsed >= totalDurationMs) {
      phase = 'complete';
    } else if (technique === 'box') {
      phase = withinCycle < 4000 ? 'inhale' : withinCycle < 8000 ? 'hold' : 'exhale';
    } else {
      // Gentle rhythm (no hold)
      phase = withinCycle < 4000 ? 'inhale' : 'exhale';
    }
  }

  useEffect(() => {
    if (startedAt === null || phase === 'complete') return;
    const timer = setInterval(() => setNow(Date.now()), 200);
    return () => clearInterval(timer);
  }, [startedAt, phase]);

  const handleStartStop = () => {
    if (phase === 'idle' || phase === 'complete') {
      const time = Date.now();
      setNow(time);
      setCycleOffset(0);
      setStartedAt(time);
    } else {
      setStartedAt(null);
      setCycleOffset(0);
    }
  };

  const handleSkipCycle = () => {
    if (startedAt === null || phase === 'complete') return;
    const nextOffset = cycle * cycleDurationMs;
    setCycleOffset(nextOffset);
  };

  const handleResetBreathing = () => {
    setStartedAt(null);
    setCycleOffset(0);
  };

  const labels = {
    idle: t('Start an optional 5-cycle breathing exercise', 'वैकल्पिक 5 चक्र का श्वास अभ्यास शुरू करें', 'ਵਿਕਲਪਿਕ 5 ਚੱਕਰਾਂ ਦਾ ਸਾਹ ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ'),
    inhale: t('Breathe in gently — 4 seconds', 'धीरे सांस लें — 4 सेकंड', 'ਹੌਲੀ ਸਾਹ ਲਓ — 4 ਸਕਿੰਟ'),
    hold: t('Hold comfortably — 4 seconds', 'आराम से रोकें — 4 सेकंड', 'ਆਰਾਮ ਨਾਲ ਰੋਕੋ — 4 ਸਕਿੰਟ'),
    exhale: technique === 'box' ? t('Breathe out slowly — 6 seconds', 'धीरे सांस छोड़ें — 6 सेकंड', 'ਹੌਲੀ ਸਾਹ ਛੱਡੋ — 6 ਸਕਿੰਟ') : t('Breathe out gently — 4 seconds', 'धीरे सांस छोड़ें — 4 सेकंड', 'ਹੌਲੀ ਸਾਹ ਛੱਡੋ — 4 ਸਕਿੰਟ'),
    complete: t('Five cycles complete. Take a sip of water.', 'पांच चक्र पूरे हुए। थोड़ा पानी पिएं।', 'ਪੰਜ ਚੱਕਰ ਪੂਰੇ ਹੋਏ। ਥੋੜ੍ਹਾ ਪਾਣੀ ਪੀਓ।'),
  };

  // Pacing calculations
  const netTimeMinutes = Math.max(1, calcDuration - calcBuffer);
  const secondsPerQuestion = Math.round((netTimeMinutes * 60) / Math.max(1, calcQuestions));

  const sections = [
    {
      title: t('Skip and return', 'छोड़ें और लौटें', 'ਛੱਡੋ ਅਤੇ ਵਾਪਸ ਆਓ'),
      text: t(
        'Answer confident questions first. Mark uncertain questions and revisit them. Decide whether to guess using your paper’s actual marking rules, rather than a universal penalty.',
        'पहले निश्चित प्रश्न हल करें। कठिन प्रश्न चिह्नित करके बाद में लौटें। अनुमान लगाने का निर्णय अपने प्रश्नपत्र के अंक नियम से लें।',
        'ਪਹਿਲਾਂ ਪੱਕੇ ਸਵਾਲ ਕਰੋ। ਔਖੇ ਸਵਾਲ ਨਿਸ਼ਾਨ ਲਾ ਕੇ ਬਾਅਦ ਵਿੱਚ ਵੇਖੋ। ਅੰਦਾਜ਼ਾ ਲਾਉਣ ਦਾ ਫੈਸਲਾ ਆਪਣੇ ਪੇਪਰ ਦੇ ਅੰਕ ਨਿਯਮ ਅਨੁਸਾਰ ਕਰੋ।'
      ),
    },
    {
      title: t('Read and verify', 'पढ़ें और जांचें', 'ਪੜ੍ਹੋ ਅਤੇ ਜਾਂਚੋ'),
      text: t(
        'Read the complete question, including NOT/EXCEPT and units. Check each statement on its facts; words such as “always” are not automatically wrong.',
        'पूरा प्रश्न पढ़ें, विशेषकर नहीं/अपवाद और इकाइयां। कथन को तथ्यों से जांचें; हमेशा जैसे शब्द अपने आप गलत नहीं होते।',
        'ਪੂਰਾ ਸਵਾਲ ਪੜ੍ਹੋ, ਖਾਸ ਕਰਕੇ ਨਹੀਂ/ਅਪਵਾਦ ਅਤੇ ਇਕਾਈਆਂ। ਕਥਨ ਨੂੰ ਤੱਥਾਂ ਨਾਲ ਜਾਂਚੋ; ਹਮੇਸ਼ਾ ਵਰਗੇ ਸ਼ਬਦ ਆਪਣੇ ਆਪ ਗਲਤ ਨਹੀਂ ਹੁੰਦੇ।'
      ),
    },
    {
      title: t('Exam-day checklist', 'परीक्षा दिवस सूची', 'ਪ੍ਰੀਖਿਆ ਦਿਨ ਦੀ ਸੂਚੀ'),
      text: t(
        'Follow your admit card’s reporting time and permitted-item rules. Prepare required ID and documents beforehand. Confirm the venue and travel time; check instructions before answering.',
        'प्रवेश पत्र का रिपोर्टिंग समय और अनुमत वस्तुओं के नियम मानें। पहचान पत्र व दस्तावेज पहले तैयार रखें। केंद्र और यात्रा समय जांचें; उत्तर देने से पहले निर्देश पढ़ें।',
        'ਐਡਮਿਟ ਕਾਰਡ ਦੇ ਰਿਪੋਰਟਿੰਗ ਸਮੇਂ ਅਤੇ ਮਨਜ਼ੂਰ ਚੀਜ਼ਾਂ ਦੇ ਨਿਯਮ ਮੰਨੋ। ਪਛਾਣ ਪੱਤਰ ਤੇ ਦਸਤਾਵੇਜ਼ ਪਹਿਲਾਂ ਤਿਆਰ ਰੱਖੋ। ਕੇਂਦਰ ਅਤੇ ਯਾਤਰਾ ਸਮਾਂ ਵੇਖੋ; ਜਵਾਬ ਤੋਂ ਪਹਿਲਾਂ ਹਦਾਇਤਾਂ ਪੜ੍ਹੋ।'
      ),
    },
  ];

  const currentPhysical = OFFICIAL_PHYSICAL_STANDARDS[selectedPhysicalKey] || OFFICIAL_PHYSICAL_STANDARDS['punjab-police-constable'];

  return (
    <div className="p-5 space-y-6 text-slate-200 pb-28 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          {t('Exam-Day Coach & Readiness Guide', 'परीक्षा दिवस मार्गदर्शन और तैयारी', 'ਪ੍ਰੀਖਿਆ ਦਿਨ ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਤਿਆਰੀ')}
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          {t(
            'Calming arousal regulation, realistic pacing calculator, official physical standards, and admit card verification protocols.',
            'तनाव नियंत्रण तकनीक, परीक्षा समय सारिणी कैलकुलेटर, शारीरिक परीक्षण मानक और सत्यापन सूची।',
            'ਤਣਾਅ ਕੰਟਰੋਲ ਤਕਨੀਕ, ਪੇਪਰ ਸਮਾਂ ਕੈਲਕੁਲੇਟਰ, ਸਰੀਰਕ ਮਾਪਦੰਡ ਅਤੇ ਤਸਦੀਕ ਸੂਚੀ।'
          )}
        </p>
      </div>

      {/* 1. COMFORTABLE BREATHING BREAK (Evidence-based arousal regulation) */}
      <section className="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Heart size={20} className="text-rose-400" />
            <h2 className="font-bold text-base text-white">
              {t('Optional Breathing Break', 'वैकल्पिक श्वास विराम', 'ਵਿਕਲਪਿਕ ਸਾਹ ਵਿਰਾਮ')}
            </h2>
          </div>

          {/* Technique toggle */}
          <div className="flex bg-slate-900 p-1 rounded-xl text-xs border border-slate-750">
            <button
              onClick={() => { setTechnique('box'); handleResetBreathing(); }}
              className={`px-3 py-1 rounded-lg font-semibold transition ${
                technique === 'box' ? 'bg-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('Calming (4-4-6)', 'शांत (4-4-6)', 'ਸ਼ਾਂਤ (4-4-6)')}
            </button>
            <button
              onClick={() => { setTechnique('gentle'); handleResetBreathing(); }}
              className={`px-3 py-1 rounded-lg font-semibold transition ${
                technique === 'gentle' ? 'bg-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('Gentle Flow (No Hold)', 'सहज (रोकने बिना)', 'ਸਹਿਜ (ਰੋਕਣ ਬਿਨਾਂ)')}
            </button>
          </div>
        </div>

        {/* Status display */}
        <div className="text-center py-4 bg-slate-850 rounded-xl border border-slate-750">
          <p role="status" aria-live="polite" className="text-base font-bold text-teal-300">
            {labels[phase]}
            {phase !== 'idle' && phase !== 'complete' ? ` · Cycle ${cycle}/5` : ''}
          </p>
          <p className="text-[11px] text-slate-400 mt-1 max-w-md mx-auto">
            {technique === 'box'
              ? t(
                  'Breathe in for 4s, hold gently for 4s, breathe out slowly for 6s. If holding breath feels uncomfortable, switch to Gentle Flow above.',
                  '4 सेकंड सांस लें, 4 सेकंड आराम से रोकें, 6 सेकंड धीरे छोड़ें। असुविधा होने पर सहज मोड चुनें।',
                  '4 ਸਕਿੰਟ ਸਾਹ ਲਓ, 4 ਸਕਿੰਟ ਰੋਕੋ, 6 ਸਕਿੰਟ ਛੱਡੋ। ਜੇ ਰੋਕਣਾ ਔਖਾ ਲੱਗੇ ਤਾਂ ਸਹਿਜ ਮੋਡ ਚੁਣੋ।'
                )
              : t(
                  'Continuous rhythmic breathing without breath retention: 4 seconds gentle inhale, 4 seconds slow exhale.',
                  'बिना रोके निरंतर लयबद्ध श्वास: 4 सेकंड सांस लें, 4 सेकंड छोड़ें।',
                  'ਬਿਨਾਂ ਰੋਕੇ ਲਗਾਤਾਰ ਸਾਹ: 4 ਸਕਿੰਟ ਸਾਹ ਲਓ, 4 ਸਕਿੰਟ ਛੱਡੋ।'
                )}
          </p>
        </div>

        {/* Controls: Start/Stop, Skip, Reset */}
        <div className="flex items-center gap-3 justify-center flex-wrap">
          <button
            onClick={handleStartStop}
            className={`px-6 py-2.5 rounded-xl font-bold text-xs transition shadow ${
              phase === 'idle' || phase === 'complete'
                ? 'bg-teal-600 hover:bg-teal-500 text-white'
                : 'bg-rose-600 hover:bg-rose-500 text-white'
            }`}
          >
            {phase === 'idle' || phase === 'complete' ? t('Start Exercise', 'अभ्यास शुरू करें', 'ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ') : t('Stop', 'रोकें', 'ਰੋਕੋ')}
          </button>

          {startedAt !== null && phase !== 'complete' && (
            <button
              onClick={handleSkipCycle}
              className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-xl text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition"
            >
              <FastForward size={14} /> {t('Skip to Next Cycle', 'अगला चक्र', 'ਅਗਲਾ ਚੱਕਰ')}
            </button>
          )}

          {startedAt !== null && (
            <button
              onClick={handleResetBreathing}
              className="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-xl text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition"
            >
              <RotateCcw size={14} /> {t('Reset', 'रीसेट', 'ਰੀਸੈਟ')}
            </button>
          )}
        </div>

        <p className="text-[10px] text-slate-500 text-center">
          * {t(
            'Physiological relaxation guide based on autonomic calming research. Does not constitute medical therapy or guarantee exam selection.',
            'तनाव नियंत्रण मार्गदर्शिका। यह चिकित्सा उपचार नहीं है और चयन की गारंटी नहीं देता।',
            'ਸਰੀਰਕ ਸ਼ਾਂਤੀ ਮਾਰਗਦਰਸ਼ਨ। ਇਹ ਡਾਕਟਰੀ ਇਲਾਜ ਨਹੀਂ ਹੈ ਅਤੇ ਚੋਣ ਦੀ ਗਾਰੰਟੀ ਨਹੀਂ ਦਿੰਦਾ।'
          )}
        </p>
      </section>

      {/* 2. REALISTIC TIME STRATEGY CALCULATOR */}
      <section className="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow space-y-4">
        <div className="flex items-center gap-2">
          <Clock size={20} className="text-teal-400" />
          <h2 className="font-bold text-base text-white">
            {t('Exam Time Strategy Calculator', 'समय रणनीति कैलकुलेटर', 'ਸਮਾਂ ਰਣਨੀਤੀ ਕੈਲਕੁਲੇਟਰ')}
          </h2>
        </div>

        <p className="text-xs text-slate-300">
          {t(
            'Use your actual notification paper duration and question count. Always reserve a final review buffer first, then divide remaining minutes among questions.',
            'अपने प्रश्नपत्र की वास्तविक अवधि और प्रश्नों की संख्या दर्ज करें। पहले समीक्षा का बफर समय बचाएं, फिर शेष समय प्रश्नों में विभाजित करें।',
            'ਆਪਣੇ ਪੇਪਰ ਦਾ ਅਸਲ ਸਮਾਂ ਅਤੇ ਸਵਾਲਾਂ ਦੀ ਗਿਣਤੀ ਦਰਜ ਕਰੋ। ਪਹਿਲਾਂ ਸਮੀਖਿਆ ਦਾ ਸਮਾਂ ਰੱਖੋ, ਫਿਰ ਬਾਕੀ ਸਮਾਂ ਸਵਾਲਾਂ ਵਿੱਚ ਵੰਡੋ।'
          )}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label className="text-xs text-slate-300 block">
            <span className="font-semibold block mb-1">{t('Total Duration (Minutes):', 'कुल अवधि (मिनट):', 'ਕੁੱਲ ਸਮਾਂ (ਮਿੰਟ):')}</span>
            <input
              type="number"
              min={30}
              max={240}
              value={calcDuration}
              onChange={e => setCalcDuration(Math.max(1, Number(e.target.value)))}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono text-xs"
            />
          </label>

          <label className="text-xs text-slate-300 block">
            <span className="font-semibold block mb-1">{t('Total Questions:', 'कुल प्रश्न:', 'ਕੁੱਲ ਸਵਾਲ:')}</span>
            <input
              type="number"
              min={20}
              max={300}
              value={calcQuestions}
              onChange={e => setCalcQuestions(Math.max(1, Number(e.target.value)))}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono text-xs"
            />
          </label>

          <label className="text-xs text-slate-300 block">
            <span className="font-semibold block mb-1">{t('Review Buffer (Minutes):', 'समीक्षा बफर (मिनट):', 'ਸਮੀਖਿਆ ਬਫਰ (ਮਿੰਟ):')}</span>
            <input
              type="number"
              min={0}
              max={60}
              value={calcBuffer}
              onChange={e => setCalcBuffer(Math.max(0, Number(e.target.value)))}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white font-mono text-xs"
            />
          </label>
        </div>

        {/* Calculated Pacing Card */}
        <div className="bg-slate-900 p-4 rounded-xl border border-slate-750 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-lg font-bold text-teal-400 font-mono">{secondsPerQuestion}s</div>
            <div className="text-[11px] text-slate-400">{t('Pacing per Question', 'प्रति प्रश्न समय', 'ਪ੍ਰਤੀ ਸਵਾਲ ਸਮਾਂ')}</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white font-mono">{netTimeMinutes}m</div>
            <div className="text-[11px] text-slate-400">{t('Net Answering Window', 'शुद्ध उत्तर समय', 'ਸ਼ੁੱਧ ਜਵਾਬ ਸਮਾਂ')}</div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="text-lg font-bold text-amber-400 font-mono">{calcBuffer}m</div>
            <div className="text-[11px] text-slate-400">{t('Reserved OMR/Review Buffer', 'सुरक्षित समीक्षा समय', 'ਸੁਰੱਖਿਅਤ ਸਮੀਖਿਆ ਸਮਾਂ')}</div>
          </div>
        </div>
      </section>

      {/* 3. PHYSICAL TEST SCREENING STANDARDS */}
      <section className="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-amber-400" />
            <h2 className="font-bold text-base text-white">
              {t('Official Physical Screening Standards', 'आधिकारिक शारीरिक परीक्षण मानक', 'ਅਧਿਕਾਰਕ ਸਰੀਰਕ ਮਾਪਦੰਡ')}
            </h2>
          </div>

          <select
            value={selectedPhysicalKey}
            onChange={e => setSelectedPhysicalKey(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-xs text-white"
          >
            {Object.entries(OFFICIAL_PHYSICAL_STANDARDS).map(([key, item]) => (
              <option key={key} value={key}>{item.recruitmentName}</option>
            ))}
          </select>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-750 space-y-3">
          <div className="text-xs">
            <span className="text-teal-300 font-bold block">{currentPhysical.recruitmentName}</span>
            <span className="text-[11px] text-slate-400 block">{currentPhysical.officialNotification} ({currentPhysical.publishedDate})</span>
          </div>

          {/* Height Standards */}
          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
              <span className="text-[10px] text-slate-400 block font-semibold">♂ Male Height Requirement:</span>
              <strong className="text-white text-xs">{currentPhysical.heightRequirement.male}</strong>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
              <span className="text-[10px] text-slate-400 block font-semibold">♀ Female Height Requirement:</span>
              <strong className="text-white text-xs">{currentPhysical.heightRequirement.female}</strong>
            </div>
          </div>

          {/* Events Table */}
          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-bold text-slate-300 block">Qualifying Physical Events:</span>
            {currentPhysical.events.map((ev, i) => (
              <div key={i} className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-xs flex items-center justify-between gap-3">
                <div>
                  <strong className="text-white">{ev.eventName}</strong>
                  <span className="text-slate-400 block text-[11px]">{ev.category} • {ev.notes || `Allowed attempts: ${ev.attemptsAllowed}`}</span>
                </div>
                <span className="text-teal-300 font-bold shrink-0">{ev.standard}</span>
              </div>
            ))}
          </div>

          <div className="bg-amber-950/30 border border-amber-800/40 p-2.5 rounded-lg text-[11px] text-amber-200">
            <ShieldAlert size={14} className="inline mr-1 text-amber-400" />
            {PHYSICAL_MEDICAL_DISCLAIMER}
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC EXAM-DAY PRINCIPLES */}
      <div className="space-y-3">
        {sections.map((section, i) => (
          <details key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <summary className="font-bold text-sm text-white cursor-pointer">{section.title}</summary>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">{section.text}</p>
          </details>
        ))}
      </div>

      <div className="pt-2">
        <Link className="underline text-teal-300 font-semibold text-xs" href="/mock-test/">
          ← {t('Return to Practice Tests', 'अभ्यास टेस्ट पर लौटें', 'ਅਭਿਆਸ ਟੈਸਟ ਤੇ ਵਾਪਸ ਜਾਓ')}
        </Link>
      </div>
    </div>
  );
}
