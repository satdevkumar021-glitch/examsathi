'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store';

type Phase = 'idle' | 'inhale' | 'hold' | 'exhale' | 'complete';
export default function ExamDayCoach() {
  const { language: lang } = useStore();
  const t = (en: string, hi: string, pa: string) => ({ en, hi, pa })[lang];
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const elapsed = startedAt === null ? 0 : Math.max(0, now - startedAt);
  const cycle = Math.min(5, Math.floor(elapsed / 14000) + 1);
  const withinCycle = elapsed % 14000;
  const phase: Phase = startedAt === null ? 'idle' : elapsed >= 70000 ? 'complete' : withinCycle < 4000 ? 'inhale' : withinCycle < 8000 ? 'hold' : 'exhale';
  useEffect(() => {
    if (startedAt === null || phase === 'complete') return;
    const timer = setInterval(() => setNow(Date.now()), 200);
    return () => clearInterval(timer);
  }, [startedAt, phase]);
  const labels = {
    idle: t('Start a five-cycle breathing exercise', 'पांच चक्र का श्वास अभ्यास शुरू करें', 'ਪੰਜ ਚੱਕਰਾਂ ਦਾ ਸਾਹ ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ'),
    inhale: t('Breathe in gently — 4 seconds', 'धीरे सांस लें — 4 सेकंड', 'ਹੌਲੀ ਸਾਹ ਲਓ — 4 ਸਕਿੰਟ'),
    hold: t('Hold comfortably — 4 seconds', 'आराम से रोकें — 4 सेकंड', 'ਆਰਾਮ ਨਾਲ ਰੋਕੋ — 4 ਸਕਿੰਟ'),
    exhale: t('Breathe out slowly — 6 seconds', 'धीरे सांस छोड़ें — 6 सेकंड', 'ਹੌਲੀ ਸਾਹ ਛੱਡੋ — 6 ਸਕਿੰਟ'),
    complete: t('Five cycles complete.', 'पांच चक्र पूरे हुए।', 'ਪੰਜ ਚੱਕਰ ਪੂਰੇ ਹੋਏ।'),
  };
  const sections = [
    { title: t('Time strategy', 'समय रणनीति', 'ਸਮੇਂ ਦੀ ਰਣਨੀਤੀ'), text: t('Use your actual paper duration and question count. Reserve review time first, then divide the remaining time by the questions. Practice-set timing is not an official exam pattern.', 'अपने प्रश्नपत्र की अवधि और प्रश्न संख्या देखें। पहले समीक्षा का समय बचाएं, फिर शेष समय प्रश्नों में बांटें। अभ्यास का समय आधिकारिक परीक्षा पैटर्न नहीं है।', 'ਆਪਣੇ ਪੇਪਰ ਦਾ ਸਮਾਂ ਅਤੇ ਸਵਾਲਾਂ ਦੀ ਗਿਣਤੀ ਵੇਖੋ। ਪਹਿਲਾਂ ਸਮੀਖਿਆ ਲਈ ਸਮਾਂ ਰੱਖੋ, ਫਿਰ ਬਾਕੀ ਸਮਾਂ ਸਵਾਲਾਂ ਵਿੱਚ ਵੰਡੋ। ਅਭਿਆਸ ਦਾ ਸਮਾਂ ਅਧਿਕਾਰਕ ਪੈਟਰਨ ਨਹੀਂ ਹੈ।') },
    { title: t('Skip and return', 'छोड़ें और लौटें', 'ਛੱਡੋ ਅਤੇ ਵਾਪਸ ਆਓ'), text: t('Answer confident questions first. Mark uncertain questions and revisit them. Decide whether to guess using your paper’s actual marking rules, rather than a universal penalty.', 'पहले निश्चित प्रश्न हल करें। कठिन प्रश्न चिह्नित करके बाद में लौटें। अनुमान लगाने का निर्णय अपने प्रश्नपत्र के अंक नियम से लें।', 'ਪਹਿਲਾਂ ਪੱਕੇ ਸਵਾਲ ਕਰੋ। ਔਖੇ ਸਵਾਲ ਨਿਸ਼ਾਨ ਲਾ ਕੇ ਬਾਅਦ ਵਿੱਚ ਵੇਖੋ। ਅੰਦਾਜ਼ਾ ਲਾਉਣ ਦਾ ਫੈਸਲਾ ਆਪਣੇ ਪੇਪਰ ਦੇ ਅੰਕ ਨਿਯਮ ਅਨੁਸਾਰ ਕਰੋ।') },
    { title: t('Read and verify', 'पढ़ें और जांचें', 'ਪੜ੍ਹੋ ਅਤੇ ਜਾਂਚੋ'), text: t('Read the complete question, including NOT/EXCEPT and units. Check each statement on its facts; words such as “always” are not automatically wrong.', 'पूरा प्रश्न पढ़ें, विशेषकर नहीं/अपवाद और इकाइयां। कथन को तथ्यों से जांचें; हमेशा जैसे शब्द अपने आप गलत नहीं होते।', 'ਪੂਰਾ ਸਵਾਲ ਪੜ੍ਹੋ, ਖਾਸ ਕਰਕੇ ਨਹੀਂ/ਅਪਵਾਦ ਅਤੇ ਇਕਾਈਆਂ। ਕਥਨ ਨੂੰ ਤੱਥਾਂ ਨਾਲ ਜਾਂਚੋ; ਹਮੇਸ਼ਾ ਵਰਗੇ ਸ਼ਬਦ ਆਪਣੇ ਆਪ ਗਲਤ ਨਹੀਂ ਹੁੰਦੇ।') },
    { title: t('Exam-day checklist', 'परीक्षा दिवस सूची', 'ਪ੍ਰੀਖਿਆ ਦਿਨ ਦੀ ਸੂਚੀ'), text: t('Follow your admit card’s reporting time and permitted-item rules. Prepare required ID and documents beforehand. Confirm the venue and travel time; check instructions before answering.', 'प्रवेश पत्र का रिपोर्टिंग समय और अनुमत वस्तुओं के नियम मानें। पहचान पत्र व दस्तावेज पहले तैयार रखें। केंद्र और यात्रा समय जांचें; उत्तर देने से पहले निर्देश पढ़ें।', 'ਐਡਮਿਟ ਕਾਰਡ ਦੇ ਰਿਪੋਰਟਿੰਗ ਸਮੇਂ ਅਤੇ ਮਨਜ਼ੂਰ ਚੀਜ਼ਾਂ ਦੇ ਨਿਯਮ ਮੰਨੋ। ਪਛਾਣ ਪੱਤਰ ਤੇ ਦਸਤਾਵੇਜ਼ ਪਹਿਲਾਂ ਤਿਆਰ ਰੱਖੋ। ਕੇਂਦਰ ਅਤੇ ਯਾਤਰਾ ਸਮਾਂ ਵੇਖੋ; ਜਵਾਬ ਤੋਂ ਪਹਿਲਾਂ ਹਦਾਇਤਾਂ ਪੜ੍ਹੋ।') },
  ];
  return <div className="p-5 space-y-5 text-slate-200 pb-24">
    <h1 className="text-2xl font-bold">{t('Exam-day coach', 'परीक्षा दिवस मार्गदर्शन', 'ਪ੍ਰੀਖਿਆ ਦਿਨ ਮਾਰਗਦਰਸ਼ਨ')}</h1>
    <section className="bg-slate-800 rounded-xl p-4 space-y-3">
      <h2 className="font-bold">{t('Optional breathing break', 'वैकल्पिक श्वास विराम', 'ਵਿਕਲਪਿਕ ਸਾਹ ਵਿਰਾਮ')}</h2>
      <p role="status" aria-live="polite">{labels[phase]}{phase !== 'idle' && phase !== 'complete' ? ` · ${cycle}/5` : ''}</p>
      <button className="bg-teal-600 rounded-lg p-3" onClick={() => { if (phase === 'idle' || phase === 'complete') { const time = Date.now(); setNow(time); setStartedAt(time); } else setStartedAt(null); }}>{phase === 'idle' || phase === 'complete' ? t('Start', 'शुरू करें', 'ਸ਼ੁਰੂ ਕਰੋ') : t('Stop', 'रोकें', 'ਰੋਕੋ')}</button>
    </section>
    {sections.map((section, i) => <details key={i} className="bg-slate-800 rounded-xl p-4"><summary className="font-bold cursor-pointer">{section.title}</summary><p className="text-sm mt-3">{section.text}</p></details>)}
    <Link className="underline text-teal-300" href="/mock-test/">{t('Open practice tests', 'अभ्यास टेस्ट खोलें', 'ਅਭਿਆਸ ਟੈਸਟ ਖੋਲ੍ਹੋ')}</Link>
  </div>;
}
