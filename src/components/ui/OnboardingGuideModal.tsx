'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { useStore } from '@/lib/store';
import { studyStorage } from '@/lib/storage';
export default function OnboardingGuideModal() {
  const { language: lang } = useStore();
  const pathname = usePathname();
  const t = (en: string, hi: string, pa: string) => ({ en, hi, pa })[lang];
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      const isTestOrActiveRoute = pathname?.startsWith('/mock-test') || pathname?.startsWith('/results') || pathname?.startsWith('/typing-practice');
      if (!isTestOrActiveRoute && !studyStorage.getItem('examsathi_onboarding_completed')) timer = setTimeout(() => setOpen(true), 1200);
    } catch { /* Guide is optional. */ }
    const reopen = () => { setStep(0); setOpen(true); };
    window.addEventListener('examsathi_open_onboarding', reopen);
    return () => { clearTimeout(timer); window.removeEventListener('examsathi_open_onboarding', reopen); };
  }, [pathname]);
  const close = () => { setOpen(false); studyStorage.setItem('examsathi_onboarding_completed', 'true'); };
  const steps = [
    { title: t('Welcome to ExamSathi', 'ExamSathi में आपका स्वागत है', 'ExamSathi ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ'), text: t('Browse the syllabus to see available lessons and pending coverage. The preparation map is not a substitute for your latest official exam notification.', 'पाठ्यक्रम में उपलब्ध पाठ और लंबित सामग्री देखें। तैयारी मानचित्र के साथ नवीनतम आधिकारिक परीक्षा सूचना भी जांचें।', 'ਸਿਲੇਬਸ ਵਿੱਚ ਉਪਲਬਧ ਪਾਠ ਅਤੇ ਬਾਕੀ ਸਮੱਗਰੀ ਵੇਖੋ। ਤਿਆਰੀ ਨਕਸ਼ੇ ਨਾਲ ਨਵੀਂ ਅਧਿਕਾਰਕ ਪ੍ਰੀਖਿਆ ਸੂਚਨਾ ਵੀ ਵੇਖੋ।') },
    { title: t('Topic practice and results', 'विषय अभ्यास और परिणाम', 'ਵਿਸ਼ਾ ਅਭਿਆਸ ਅਤੇ ਨਤੀਜੇ'), text: t('Choose question count and difficulty. Small pools produce smaller sets. Read marking and timing before starting. Candidate ranks are unavailable; historical question labels need source verification.', 'प्रश्न संख्या और कठिनाई चुनें। कम प्रश्न उपलब्ध होने पर छोटा सेट मिलेगा। समय और अंक नियम पहले पढ़ें। मेरिट रैंक उपलब्ध नहीं; ऐतिहासिक प्रश्नों के स्रोत सत्यापनाधीन हैं।', 'ਸਵਾਲਾਂ ਦੀ ਗਿਣਤੀ ਅਤੇ ਔਖਾਈ ਚੁਣੋ। ਘੱਟ ਸਵਾਲਾਂ ਵਾਲਾ ਸੈੱਟ ਛੋਟਾ ਹੋਵੇਗਾ। ਸਮਾਂ ਅਤੇ ਅੰਕ ਨਿਯਮ ਪਹਿਲਾਂ ਪੜ੍ਹੋ। ਮੈਰਿਟ ਰੈਂਕ ਨਹੀਂ ਹੈ; ਪੁਰਾਣੇ ਸਵਾਲਾਂ ਦੇ ਸਰੋਤ ਜਾਂਚ ਅਧੀਨ ਹਨ।') },
    { title: t('Practice from your notes', 'अपने नोट्स से अभ्यास', 'ਆਪਣੇ ਨੋਟਸ ਤੋਂ ਅਭਿਆਸ'), text: t('Paste notes or extract text from PDF, DOCX or TXT. Review extracted text first. Local recall is not AI-verified; cloud AI requires a configured backend. Scanned pages need OCR text.', 'नोट्स पेस्ट करें या PDF, DOCX, TXT से टेक्स्ट निकालें। पहले टेक्स्ट जांचें। स्थानीय अभ्यास AI-सत्यापित नहीं है; क्लाउड AI के लिए बैकएंड चाहिए। स्कैन पृष्ठों का OCR टेक्स्ट पेस्ट करें।', 'ਨੋਟਸ ਪੇਸਟ ਕਰੋ ਜਾਂ PDF, DOCX, TXT ਤੋਂ ਟੈਕਸਟ ਕੱਢੋ। ਪਹਿਲਾਂ ਟੈਕਸਟ ਵੇਖੋ। ਸਥਾਨਕ ਅਭਿਆਸ AI-ਤਸਦੀਕ ਕੀਤਾ ਨਹੀਂ ਹੈ; ਕਲਾਉਡ AI ਲਈ ਬੈਕਐਂਡ ਚਾਹੀਦਾ ਹੈ। ਸਕੈਨ ਪੰਨਿਆਂ ਦਾ OCR ਟੈਕਸਟ ਪੇਸਟ ਕਰੋ।') },
    { title: t('Save and back up your study', 'अध्ययन सहेजें और बैकअप लें', 'ਅਧਿਐਨ ਸੰਭਾਲੋ ਅਤੇ ਬੈਕਅੱਪ ਲਓ'), text: t('Star questions for revision. Use the library timer and daily topic plan. Your data stays in this browser; download a profile backup before changing devices or clearing storage.', 'दोहराव के लिए प्रश्न पसंदीदा में रखें। लाइब्रेरी टाइमर और दैनिक योजना उपयोग करें। डेटा इस ब्राउज़र में रहता है; डिवाइस बदलने या संग्रहण हटाने से पहले प्रोफाइल बैकअप लें।', 'ਦੁਹਰਾਈ ਲਈ ਸਵਾਲ ਪਸੰਦੀਦਾ ਵਿੱਚ ਰੱਖੋ। ਲਾਇਬ੍ਰੇਰੀ ਟਾਈਮਰ ਅਤੇ ਰੋਜ਼ਾਨਾ ਯੋਜਨਾ ਵਰਤੋ। ਡਾਟਾ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ; ਡਿਵਾਈਸ ਬਦਲਣ ਜਾਂ ਸਟੋਰੇਜ ਮਿਟਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਪ੍ਰੋਫਾਈਲ ਬੈਕਅੱਪ ਲਓ।') },
  ];
  return <Dialog.Root open={open} onOpenChange={value => { if (!value) close(); else setOpen(value); }}><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-black/80" /><Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-slate-900 rounded-xl p-6 text-slate-200 space-y-4"><Dialog.Title className="text-xl font-bold">{steps[step].title}</Dialog.Title><Dialog.Description className="text-sm">{steps[step].text}</Dialog.Description><p>{step + 1}/4</p><div className="flex gap-3"><button className="underline" onClick={close}>{t('Skip guide', 'मार्गदर्शन छोड़ें', 'ਮਾਰਗਦਰਸ਼ਨ ਛੱਡੋ')}</button>{step > 0 && <button onClick={() => setStep(step - 1)}>{t('Back', 'पीछे', 'ਪਿੱਛੇ')}</button>}<button className="bg-teal-600 px-4 py-2 rounded-lg" onClick={() => { if (step === 3) close(); else setStep(step + 1); }}>{step === 3 ? t('Done', 'पूरा', 'ਪੂਰਾ') : t('Next', 'आगे', 'ਅੱਗੇ')}</button></div></Dialog.Content></Dialog.Portal></Dialog.Root>;
}
