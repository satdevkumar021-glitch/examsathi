'use client';

import Link from 'next/link';
import { useStore } from '@/lib/store';
import {
  ETT_REFERENCE_SUBJECTS,
  ETT_SCIENCE_UNITS,
  ETT_MAPPED_GROUPS,
  ETT_ARCHIVAL_HEADING_COUNT,
  ETT_SYLLABUS_REFERENCE as reference,
} from '@/lib/data/ett-syllabus';
import {
  ETT_EXAM_DISAMBIGUATION,
  ETT_TRUST_LEVELS,
  ETT_SOURCE_PROBLEMS,
  ETT_CORRUPTED_TEXT_DECODER,
  ETT_EXAM_PATTERN_JSON,
  ETT_BLUEPRINT_MODULES,
  ETT_PAST_PAPER_CHECKLIST,
  ETT_STUDENT_STRATEGY,
} from '@/lib/data/ett-blueprint';
import { getQuestionPool } from '@/lib/data/question_bank_engine';
import { getLessonByTopicId } from '@/lib/data/lessons';

export default function EttSyllabus() {
  const { language, setLanguage } = useStore();
  const label = (en: string, hi: string, pa: string) =>
    language === 'pa' ? pa : language === 'hi' ? hi : en;

  const available = getQuestionPool({
    topicId: 'ett-light-reflection',
    examId: 'punjab-ett',
  }).length;

  const paperAModules = ETT_BLUEPRINT_MODULES.filter(
    (m) => m.paper === 'Paper A (Qualifying)'
  );
  const paperBModules = ETT_BLUEPRINT_MODULES.filter(
    (m) => m.paper === 'Paper B (Merit)'
  );

  return (
    <main className="max-w-6xl mx-auto p-5 space-y-8 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/syllabus/" className="text-teal-300 underline text-sm">
          ← {label('All syllabi', 'सभी पाठ्यक्रम', 'ਸਾਰੇ ਪਾਠਕ੍ਰਮ')}
        </Link>
        <div className="flex gap-2" aria-label="Lesson language">
          {(['en', 'hi', 'pa'] as const).map((lang) => (
            <button
              key={lang}
              aria-pressed={language === lang}
              onClick={() => setLanguage(lang)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                language === lang
                  ? 'bg-teal-700 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : 'ਪੰਜਾਬੀ'}
            </button>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="rounded-2xl border border-teal-700/60 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/40 p-6 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-300">
          <span className="rounded-full bg-teal-900/70 px-3 py-1 border border-teal-600/50">
            ERB Punjab · 5994 / 6635 Cadre
          </span>
          <span className="rounded-full bg-amber-900/60 px-3 py-1 border border-amber-600/50 text-amber-200">
            Paper A (100M Qualifying) + Paper B (200M Merit)
          </span>
          <span className="rounded-full bg-indigo-900/60 px-3 py-1 border border-indigo-600/50 text-indigo-200">
            14 B → I → A Modules · 150 Scoped MCQs
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          {label(
            'Punjab ETT (Elementary Teacher Training) Recruitment — Syllabus Blueprint & Archival Research',
            'पंजाब ईटीटी (ETT) शिक्षक भर्ती — पाठ्यक्रम ब्लूप्रिंट और अभिलेखीय अनुसंधान',
            'ਪੰਜਾਬ ਈਟੀਟੀ (ETT) ਅਧਿਆਪਕ ਭਰਤੀ — ਸਿਲੇਬਸ ਬਲੂਪ੍ਰਿੰਟ ਅਤੇ ਪਾਠਕ੍ਰਮ ਖੋਜ'
          )}
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          {label(
            'Complete high-trust blueprint for the Education Recruitment Board (ERB) Punjab ETT Teacher Recruitment Exam. Includes the 3-Exam Disambiguation Guide, Trust Levels Audit, Resolution of the 4 Coaching-Source Problems (including the Machine-Translation Corruption Decoder), Per-Year Two-Paper Pattern JSON Store, 14 Trilingual B → I → A Lessons with 60-Second Shortcuts, and the 96-Heading Visual Archival Map.',
            'एजुकेशन रिक्रूटमेंट बोर्ड (ERB) पंजाब ईटीटी शिक्षक भर्ती परीक्षा के लिए संपूर्ण उच्च-विश्वास ब्लूप्रिंट। इसमें 3-परीक्षा अंतर गाइड, ट्रस्ट लेवल ऑडिट, 4 स्रोत समस्याओं का समाधान (मशीनी अनुवाद सुधार तालिका सहित), प्रति-वर्ष दो-पेपर पैटर्न JSON, 14 त्रिभाषी B → I → A पाठ और 96-शीर्षक अभिलेखीय मानचित्र शामिल हैं।',
            'ਐਜੂਕੇਸ਼ਨ ਰਿਕਰੂਟਮੈਂਟ ਬੋਰਡ (ERB) ਪੰਜਾਬ ETT ਅਧਿਆਪਕ ਭਰਤੀ ਪ੍ਰੀਖਿਆ ਲਈ ਸੰਪੂਰਨ ਬਲੂਪ੍ਰਿੰਟ। ਇਸ ਵਿੱਚ 3 ਪ੍ਰੀਖਿਆਵਾਂ ਦਾ ਫ਼ਰਕ, ਟਰੱਸਟ ਲੈਵਲ ਆਡਿਟ, 4 ਕੋਚਿੰਗ-ਸਰੋਤ ਸਮੱਸਿਆਵਾਂ ਦਾ ਹੱਲ (ਮਸ਼ੀਨੀ ਅਨੁਵਾਦ ਸੁਧਾਰ ਸਾਰਣੀ ਸਮੇਤ), ਪੇਪਰ A + ਪੇਪਰ B ਪੈਟਰਨ JSON, 14 ਤਿੰਨ-ਭਾਸ਼ਾਈ B → I → A ਪਾਠ (60-ਸਕਿੰਟ ਸ਼ਾਰਟਕੱਟਾਂ ਸਮੇਤ) ਅਤੇ 96-ਸਿਰਲੇਖਾਂ ਦਾ ਪੁਰਾਣਾ ਨਕਸ਼ਾ ਸ਼ਾਮਲ ਹੈ।'
          )}
        </p>
      </header>

      {/* Notice / Provenance Banner */}
      <section className="rounded-xl border border-amber-700 bg-amber-950/20 p-4 space-y-2">
        <h2 className="font-bold text-amber-200">
          {label(
            'Upcoming notification pending · Read Trust Levels & Source Audit first',
            'आगामी भर्ती की अधिसूचना लंबित · पहले विश्वास स्तर और स्रोत जाँच पढ़ें',
            'ਆਉਣ ਵਾਲੀ ਭਰਤੀ ਦੀ ਸੂਚਨਾ ਦੀ ਉਡੀਕ · ਪਹਿਲਾਂ ਟਰੱਸਟ ਲੈਵਲ ਅਤੇ ਸਰੋਤ ਜਾਂਚ ਪੜ੍ਹੋ'
          )}
        </h2>
        <p className="text-sm">
          {label(
            'Reference: 5994-post recruitment, Paper B, archival filename dated 1 December 2022. This is not confirmation of the upcoming exam pattern. Punjabi qualifying Paper A is separate; its revised notice and eligibility rules still need verification.',
            'संदर्भ: 5994 पदों की भर्ती, पेपर B, 1 दिसंबर 2022 की फ़ाइल-तिथि वाली पुरानी प्रति। यह आगामी परीक्षा के पैटर्न की पुष्टि नहीं है। पंजाबी अर्हता पेपर A अलग है; संशोधित सूचना और पात्रता नियमों का सत्यापन बाकी है।',
            'ਹਵਾਲਾ: 5994 ਅਸਾਮੀਆਂ ਦੀ ਭਰਤੀ, ਪੇਪਰ B, 1 ਦਸੰਬਰ 2022 ਦੀ ਫ਼ਾਈਲ-ਮਿਤੀ ਵਾਲੀ ਪੁਰਾਣੀ ਨਕਲ। ਇਹ ਆਉਣ ਵਾਲੀ ਪ੍ਰੀਖਿਆ ਦੇ ਢਾਂਚੇ ਦੀ ਪੁਸ਼ਟੀ ਨਹੀਂ ਹੈ। ਪੰਜਾਬੀ ਯੋਗਤਾ ਪੇਪਰ A ਵੱਖਰਾ ਹੈ; ਸੋਧੀ ਸੂਚਨਾ ਅਤੇ ਯੋਗਤਾ ਨਿਯਮਾਂ ਦੀ ਜਾਂਚ ਬਾਕੀ ਹੈ।'
          )}
        </p>
        <p className="text-sm text-slate-300">
          {label(
            'Government publisher could not be reached on 9 October 2026. The available copy is hosted by a third party and remains provisional. Recruitment ETT and PSTET/D.El.Ed entrance are different exams.',
            '9 अक्टूबर 2026 को सरकारी प्रकाशक तक पहुँच नहीं बनी। उपलब्ध प्रति तीसरे पक्ष की वेबसाइट पर है और अभी अस्थायी संदर्भ है। ईटीटी भर्ती, पीएसटेट और डीएलएड प्रवेश अलग परीक्षाएँ हैं।',
            '9 ਅਕਤੂਬਰ 2026 ਨੂੰ ਸਰਕਾਰੀ ਪ੍ਰਕਾਸ਼ਕ ਤੱਕ ਪਹੁੰਚ ਨਹੀਂ ਬਣੀ। ਮੌਜੂਦ ਨਕਲ ਤੀਜੀ ਧਿਰ ਦੀ ਵੈੱਬਸਾਈਟ ਉੱਤੇ ਹੈ ਅਤੇ ਹਾਲੇ ਅਸਥਾਈ ਹਵਾਲਾ ਹੈ। ਈਟੀਟੀ ਭਰਤੀ, ਪੀਐੱਸਟੈੱਟ ਅਤੇ ਡੀਐੱਲਐੱਡ ਦਾਖ਼ਲਾ ਵੱਖਰੀਆਂ ਪ੍ਰੀਖਿਆਵਾਂ ਹਨ।'
          )}
        </p>
        <div className="flex flex-wrap gap-4 text-teal-300 underline text-sm">
          <a href={reference.publisher} target="_blank" rel="noopener noreferrer">
            {label(
              'Government recruitment portal',
              'सरकारी भर्ती पोर्टल',
              'ਸਰਕਾਰੀ ਭਰਤੀ ਪੋਰਟਲ'
            )}{' '}
            ↗
          </a>
          <a href={reference.mirror} target="_blank" rel="noopener noreferrer">
            {label(
              'Archival PDF: third-party mirror',
              'पुराना PDF: तीसरे पक्ष की प्रति',
              'ਪੁਰਾਣਾ PDF: ਤੀਜੀ ਧਿਰ ਦੀ ਨਕਲ'
            )}{' '}
            ↗
          </a>
        </div>
      </section>

      {/* Exam Disambiguation Matrix (ETT Recruitment vs D.El.Ed CET vs PSTET-1) */}
      <section className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 space-y-4">
        <h2 className="text-xl font-bold text-white">
          {label(
            'Confirm Which "ETT" Exam You Are Preparing For (3 Different Punjab Exams)',
            'पुष्टि करें कि आप किस "ETT" परीक्षा की तैयारी कर रहे हैं (3 अलग-अलग पंजाब परीक्षाएँ)',
            'ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਸੀਂ ਕਿਸ "ETT" ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ ਕਰ ਰਹੇ ਹੋ (3 ਵੱਖ-ਵੱਖ ਪ੍ਰੀਖਿਆਵਾਂ)'
          )}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ETT_EXAM_DISAMBIGUATION.map((item) => (
            <div
              key={item.examName.en}
              className={`rounded-xl border p-4 space-y-2 ${
                item.isThisBlueprint
                  ? 'border-teal-500/80 bg-teal-950/25'
                  : 'border-slate-700 bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    item.isThisBlueprint
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-700 text-slate-300'
                  }`}
                >
                  {item.isThisBlueprint
                    ? label('THIS BLUEPRINT', 'यह ब्लूप्रिंट', 'ਇਹ ਬਲੂਪ੍ਰਿੰਟ')
                    : label('SEPARATE EXAM', 'अलग परीक्षा', 'ਵੱਖਰੀ ਪ੍ਰੀਖਿਆ')}
                </span>
              </div>
              <h3 className="font-bold text-white text-base">
                {item.examName[language]}
              </h3>
              <p className="text-xs text-teal-300 font-medium">
                {item.conductingBody[language]}
              </p>
              <p className="text-xs text-slate-300">{item.purpose[language]}</p>
              <p className="text-xs text-amber-200/90 border-t border-slate-700/70 pt-2">
                {item.patternSummary[language]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Levels Table */}
      <section className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 space-y-4">
        <h2 className="text-xl font-bold text-white">
          {label(
            'Trust Levels & Source Verification Matrix',
            'विश्वास स्तर और स्रोत सत्यापन तालिका',
            'ਟਰੱਸਟ ਲੈਵਲ ਅਤੇ ਸਰੋਤ ਪੁਸ਼ਟੀ ਸਾਰਣੀ'
          )}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-slate-300 bg-slate-800/60">
                <th className="p-3 font-semibold">
                  {label('Blueprint Part', 'ब्लूप्रिंट भाग', 'ਬਲੂਪ੍ਰਿੰਟ ਭਾਗ')}
                </th>
                <th className="p-3 font-semibold">
                  {label('Source', 'स्रोत', 'ਸਰੋਤ')}
                </th>
                <th className="p-3 font-semibold">
                  {label('Trust & Action', 'विश्वास स्तर और निर्देश', 'ਭਰੋਯੋਗਤਾ ਅਤੇ ਹਦਾਇਤ')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {ETT_TRUST_LEVELS.map((row) => (
                <tr key={row.part.en} className="hover:bg-slate-800/30">
                  <td className="p-3 font-medium text-teal-200">
                    {row.part[language]}
                  </td>
                  <td className="p-3 text-slate-300">{row.source[language]}</td>
                  <td className="p-3 text-slate-200">{row.trust[language]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4 Problems Found in Coaching Sources & Archival Resolution */}
      <section className="rounded-xl border border-rose-700/60 bg-rose-950/15 p-5 space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-rose-200">
            {label(
              '4 Problems Found in Coaching Sources — Resolved via Archival PDF Inspection',
              'कोचिंग स्रोतों में मिलीं 4 समस्याएँ — पुराने PDF निरीक्षण द्वारा समाधान',
              'ਕੋਚਿੰਗ ਸਰੋਤਾਂ ਵਿੱਚ ਮਿਲੀਆਂ 4 ਸਮੱਸਿਆਵਾਂ — ਪੁਰਾਣੇ PDF ਦੀ ਜਾਂਚ ਰਾਹੀਂ ਹੱਲ'
            )}
          </h2>
          <p className="text-xs text-slate-300">
            {label(
              'Coaching summaries (e.g., CareerPower) contain mathematical contradictions, missing subject syllabi, and corrupted machine translations. Here is how ExamSathi resolves each issue:',
              'कोचिंग सारांशों में अंकों का विरोधाभास, गायब विषय सूची और मशीनी अनुवाद की गलतियाँ हैं। ExamSathi ने इनका समाधान नीचे किया है:',
              'ਕੋਚਿੰਗ ਸਾਰਾਂ ਵਿੱਚ ਅੰਕਾਂ ਦਾ ਵਿਰੋਧਾਭਾਸ, ਗਾਇਬ ਵਿਸ਼ਾ ਸੂਚੀ ਅਤੇ ਮਸ਼ੀਨੀ ਅਨੁਵਾਦ ਦੀਆਂ ਗਲਤੀਆਂ ਹਨ। ExamSathi ਨੇ ਇਹਨਾਂ ਦਾ ਹੱਲ ਹੇਠਾਂ ਕੀਤਾ ਹੈ:'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ETT_SOURCE_PROBLEMS.map((prob) => (
            <div
              key={prob.id}
              className="rounded-xl border border-slate-700 bg-slate-900/80 p-4 space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-amber-300 text-sm">
                  {prob.title[language]}
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded bg-teal-900/70 text-teal-200 border border-teal-700 shrink-0">
                  {prob.status === 'resolved-with-archive'
                    ? label('Archival Resolved', 'अभिलेख से हल', 'ਪੁਰਾਣੇ PDF ਤੋਂ ਹੱਲ')
                    : label('Verify on Notice', 'विज्ञापन से जांचें', 'ਨੋਟਿਸ ਤੋਂ ਜਾਂਚੋ')}
                </span>
              </div>
              <p className="text-xs text-rose-200/90">
                <strong>
                  {label('Coaching Issue: ', 'कोचिंग त्रुटि: ', 'ਕੋਚਿੰਗ ਗਲਤੀ: ')}
                </strong>
                {prob.coachingClaim[language]}
              </p>
              <p className="text-xs text-emerald-200/95 border-t border-slate-800 pt-2">
                <strong>
                  {label(
                    'ExamSathi Resolution: ',
                    'ExamSathi समाधान: ',
                    'ExamSathi ਹੱਲ: '
                  )}
                </strong>
                {prob.archivalResolution[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Machine-Translation Corruption Decoder Table */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 space-y-3">
          <h3 className="font-bold text-teal-200 text-base">
            {label(
              'Problem 3 Decoder: Corrupted Machine-Translated Coaching Terms vs Authentic Gurmukhi / Official Terms',
              'समस्या 3 डिकोडर: विकृत मशीनी-अनुवादित कोचिंग शब्द बनाम प्रामाणिक गुरुमुखी / आधिकारिक शब्दावली',
              'ਸਮੱਸਿਆ 3 ਡੀਕੋਡਰ: ਵਿਗੜੇ ਮਸ਼ੀਨੀ-ਅਨੁਵਾਦ ਸ਼ਬਦ ਬਨਾਮ ਅਸਲ ਗੁਰਮੁਖੀ / ਅਧਿਕਾਰਤ ਸ਼ਬਦਾਵਲੀ'
            )}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/80 text-slate-300">
                  <th className="p-2.5 font-semibold">
                    {label('Corrupted Coaching Term', 'विकृत कोचिंग शब्द', 'ਵਿਗੜਿਆ ਕੋਚਿੰਗ ਸ਼ਬਦ')}
                  </th>
                  <th className="p-2.5 font-semibold">
                    {label('Subject', 'विषय', 'ਵਿਸ਼ਾ')}
                  </th>
                  <th className="p-2.5 font-semibold">
                    {label('Authentic Gurmukhi & Hindi', 'प्रामाणिक गुरुमुखी व हिंदी', 'ਅਸਲ ਗੁਰਮੁਖੀ ਅਤੇ ਹਿੰਦੀ')}
                  </th>
                  <th className="p-2.5 font-semibold">
                    {label('Correct Official Topic', 'सही आधिकारिक विषय', 'ਸਹੀ ਅਧਿਕਾਰਤ ਵਿਸ਼ਾ')}
                  </th>
                  <th className="p-2.5 font-semibold">
                    {label('Study Link', 'अध्ययन लिंक', 'ਪਾਠ ਲਿੰਕ')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {ETT_CORRUPTED_TEXT_DECODER.map((item) => (
                  <tr key={item.corruptedCoachingText} className="hover:bg-slate-800/40">
                    <td className="p-2.5 font-mono text-rose-300 font-semibold">
                      {item.corruptedCoachingText}
                    </td>
                    <td className="p-2.5 text-slate-300">
                      {item.subject[language]}
                    </td>
                    <td className="p-2.5 text-amber-200 font-medium">
                      <div>{item.authenticGurmukhiTerm}</div>
                      <div className="text-xs text-slate-400">
                        {item.authenticHindiTerm}
                      </div>
                    </td>
                    <td className="p-2.5 text-slate-200">
                      <div className="font-semibold text-teal-200">
                        {item.correctEnglishTerm}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {item.whyCorrupted[language]}
                      </div>
                    </td>
                    <td className="p-2.5">
                      <Link
                        href={`/lesson/${item.mappedTopicId}/?exam=punjab-ett`}
                        className="text-teal-300 underline font-medium whitespace-nowrap"
                      >
                        {label('Open Lesson →', 'पाठ खोलें →', 'ਪਾਠ ਖੋਲ੍ਹੋ →')}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 1 & 7.5: Two-Paper Exam Pattern & Per-Year JSON Store */}
      <section className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 space-y-4">
        <h2 className="text-xl font-bold text-white">
          {label(
            '1. Exam Pattern: Two-Paper Structure (Paper A Qualifying + Paper B Merit)',
            '1. परीक्षा पैटर्न: दो-पेपर संरचना (पेपर A अर्हता + पेपर B मेरिट)',
            '1. ਪ੍ਰੀਖਿਆ ਪੈਟਰਨ: ਦੋ-ਪੇਪਰ ਢਾਂਚਾ (ਪੇਪਰ A ਯੋਗਤਾ + ਪੇਪਰ B ਮੈਰਿਟ)'
          )}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800/70 text-slate-200">
                <th className="p-3 font-semibold">{label('Paper', 'पेपर', 'ਪੇਪਰ')}</th>
                <th className="p-3 font-semibold">{label('Subject', 'विषय', 'ਵਿਸ਼ਾ')}</th>
                <th className="p-3 font-semibold">{label('Questions', 'प्रश्न', 'ਸਵਾਲ')}</th>
                <th className="p-3 font-semibold">
                  {label('Marks (Archival Table)', 'अंक (अभिलेखीय तालिका)', 'ਅੰਕ (ਪੁਰਾਣੀ ਸਾਰਣੀ)')}
                </th>
                <th className="p-3 font-semibold">
                  {label('Share of Merit', 'मेरिट में हिस्सा', 'ਮੈਰਿਟ ਵਿੱਚ ਹਿੱਸਾ')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr className="bg-amber-950/20">
                <td className="p-3 font-bold text-amber-300">
                  {label('Paper A (Qualifying)', 'पेपर A (अर्हता)', 'ਪੇਪਰ A (ਯੋਗਤਾ ਪੇਪਰ)')}
                </td>
                <td className="p-3 font-semibold text-white">
                  {label(
                    'Compulsory Punjabi Language & Grammar',
                    'अनिवार्य पंजाबी भाषा और व्याकरण',
                    'ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਅਤੇ ਵਿਆਕਰਨ'
                  )}
                </td>
                <td className="p-3">100</td>
                <td className="p-3 font-semibold text-amber-200">
                  100 (1 mark/Q)
                </td>
                <td className="p-3 text-xs text-amber-200">
                  {label(
                    'Qualifying Gate (50% = 50 marks required; not added to merit)',
                    'अर्हता गेट (50% = 50 अंक आवश्यक; मेरिट में नहीं जुड़ते)',
                    'ਯੋਗਤਾ ਗੇਟ (50% = 50 ਅੰਕ ਲਾਜ਼ਮੀ; ਮੈਰਿਟ ਵਿੱਚ ਨਹੀਂ ਜੁੜਦੇ)'
                  )}
                </td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-teal-300">Paper B (Merit)</td>
                <td className="p-3">{label('Punjabi', 'पंजाबी', 'ਪੰਜਾਬੀ')}</td>
                <td className="p-3">20</td>
                <td className="p-3 font-semibold">40 (2 marks/Q)</td>
                <td className="p-3 text-teal-300 font-semibold">20%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-teal-300">Paper B (Merit)</td>
                <td className="p-3">{label('Mathematics (Class 9–10)', 'गणित (कक्षा 9–10)', 'ਗਣਿਤ (ਜਮਾਤ 9–10)')}</td>
                <td className="p-3">20</td>
                <td className="p-3 font-semibold">40 (2 marks/Q)</td>
                <td className="p-3 text-teal-300 font-semibold">20%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-teal-300">Paper B (Merit)</td>
                <td className="p-3">{label('General Science (Class 9–10)', 'सामान्य विज्ञान (कक्षा 9–10)', 'ਜਨਰਲ ਸਾਇੰਸ (ਜਮਾਤ 9–10)')}</td>
                <td className="p-3">20</td>
                <td className="p-3 font-semibold">40 (2 marks/Q)</td>
                <td className="p-3 text-teal-300 font-semibold">20%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-teal-300">Paper B (Merit)</td>
                <td className="p-3">{label('Social Studies (28 Archival Units)', 'सामाजिक विज्ञान (28 इकाइयाँ)', 'ਸਮਾਜਿਕ ਵਿਗਿਆਨ (28 ਇਕਾਈਆਂ)')}</td>
                <td className="p-3">20</td>
                <td className="p-3 font-semibold">40 (2 marks/Q)</td>
                <td className="p-3 text-teal-300 font-semibold">20%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-teal-300">Paper B (Merit)</td>
                <td className="p-3">{label('English', 'अंग्रेज़ी', 'ਅੰਗਰੇਜ਼ੀ')}</td>
                <td className="p-3">10</td>
                <td className="p-3 font-semibold">20 (2 marks/Q)</td>
                <td className="p-3 text-slate-300">10%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-teal-300">Paper B (Merit)</td>
                <td className="p-3">{label('Hindi', 'हिंदी', 'ਹਿੰਦੀ')}</td>
                <td className="p-3">10</td>
                <td className="p-3 font-semibold">20 (2 marks/Q)</td>
                <td className="p-3 text-slate-300">10%</td>
              </tr>
              <tr className="bg-slate-800/80 font-bold text-white">
                <td className="p-3">{label('Paper B Total (Merit)', 'पेपर B कुल (मेरिट)', 'ਪੇਪਰ B ਕੁੱਲ (ਮੈਰਿਟ)')}</td>
                <td className="p-3">{label('6 Subjects (100 Minutes)', '6 विषय (100 मिनट)', '6 ਵਿਸ਼ੇ (100 ਮਿੰਟ)')}</td>
                <td className="p-3">100</td>
                <td className="p-3 text-teal-300">200 Marks</td>
                <td className="p-3 text-teal-300">100% Merit</td>
              </tr>
            </tbody>
          </table>
        </div>

        <details className="rounded-lg border border-slate-700 bg-slate-950/70 p-3">
          <summary className="cursor-pointer text-xs font-mono text-teal-300">
            {label(
              'Section 7.5: View Per-Exam & Per-Year Pattern JSON Schema (Never Hard-Code One Pattern)',
              'अनुभाग 7.5: प्रति-परीक्षा और प्रति-वर्ष पैटर्न JSON स्कीमा देखें',
              'ਭਾਗ 7.5: ਪ੍ਰਤੀ-ਪ੍ਰੀਖਿਆ ਅਤੇ ਪ੍ਰਤੀ-ਸਾਲ ਪੈਟਰਨ JSON ਡਾਟਾ ਦੇਖੋ'
            )}
          </summary>
          <pre className="mt-2 overflow-x-auto text-xs text-slate-300 font-mono p-3 bg-slate-900 rounded">
            {JSON.stringify(ETT_EXAM_PATTERN_JSON, null, 2)}
          </pre>
        </details>
      </section>

      {/* Section 3: Complete Expanded B -> I -> A Interactive Topic Modules */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white">
            {label(
              '3. Expanded B → I → A Topic Tree, 60-Second Shortcuts & Topic Mini Mocks',
              '3. विस्तारित B → I → A विषय वृक्ष, 60-सेकंड शॉर्टकट और टॉपिक मिनी मॉक',
              '3. ਵਿਸਤ੍ਰਿਤ B → I → A ਵਿਸ਼ਾ ਰੁੱਖ, 60-ਸਕਿੰਟ ਸ਼ਾਰਟਕੱਟ ਅਤੇ ਟੌਪਿਕ ਮਿਨੀ ਮੌਕ'
            )}
          </h2>
          <p className="text-sm text-slate-400">
            {label(
              'Level tags: B = Basic foundation, I = Intermediate (Class 9–10 exam level), A = Advanced (tricky questions & 60-second shortcuts). Every module below includes a complete trilingual lesson, worked examples, misconceptions, flashcards, and a 10–20 question Topic Mini Mock.',
              'स्तर टैग: B = बुनियादी, I = मध्यम (कक्षा 9–10 परीक्षा स्तर), A = उन्नत (कठिन प्रश्न और 60-सेकंड शॉर्टकट)। नीचे प्रत्येक मॉड्यूल में संपूर्ण त्रिभाषी पाठ, हल किए गए उदाहरण, फ्लैशकार्ड और 10–20 प्रश्नों का मिनी मॉक शामिल है।',
              'ਪੱਧਰ ਟੈਗ: B = ਮੁੱਢਲਾ, I = ਦਰਮਿਆਨਾ (ਜਮਾਤ 9–10 ਪ੍ਰੀਖਿਆ ਪੱਧਰ), A = ਉੱਚ (ਔਖੇ ਸਵਾਲ ਅਤੇ 60-ਸਕਿੰਟ ਸ਼ਾਰਟਕੱਟ)। ਹੇਠਾਂ ਹਰੇਕ ਮੋਡੀਊਲ ਵਿੱਚ ਪੂਰਾ ਤਿੰਨ-ਭਾਸ਼ਾਈ ਪਾਠ, ਹੱਲ ਕੀਤੀਆਂ ਉਦਾਹਰਣਾਂ, ਫਲੈਸ਼ਕਾਰਡ ਅਤੇ 10–20 ਸਵਾਲਾਂ ਦਾ ਟੌਪਿਕ ਮਿਨੀ ਮੌਕ ਸ਼ਾਮਲ ਹੈ।'
            )}
          </p>
        </div>

        {/* Paper A Qualifying Modules */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-amber-300 border-b border-amber-800/60 pb-2">
            {label(
              '3.1 Paper A (Qualifying Gate): Compulsory Punjabi Language (100 Questions · 100 Marks)',
              '3.1 पेपर A (अर्हता गेट): अनिवार्य पंजाबी भाषा (100 प्रश्न · 100 अंक)',
              '3.1 ਪੇਪਰ A (ਯੋਗਤਾ ਪੇਪਰ): ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਭਾਸ਼ਾ (100 ਸਵਾਲ · 100 ਅੰਕ)'
            )}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paperAModules.map((mod) => {
              const poolCount = getQuestionPool({
                topicId: mod.topicId,
                examId: 'punjab-ett',
              }).length;
              return (
                <article
                  key={mod.topicId}
                  className="rounded-xl border border-amber-700/60 bg-slate-900/90 p-4 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="rounded bg-amber-900/70 px-2.5 py-0.5 text-amber-200 font-semibold border border-amber-600/50">
                        {mod.subject[language]}
                      </span>
                      <span className="text-slate-400">{mod.marksWeight}</span>
                    </div>
                    <h4 className="font-bold text-white text-base">
                      {mod.title[language]}
                    </h4>
                    <ul className="list-disc pl-5 text-xs text-slate-300 space-y-1">
                      {mod.officialHeadingsCovered[language].map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
                      <div>
                        <span className="inline-block w-6 font-bold text-emerald-300">
                          [B]
                        </span>{' '}
                        <span className="text-slate-300">
                          {mod.levelBreakdown.B[language]}
                        </span>
                      </div>
                      <div>
                        <span className="inline-block w-6 font-bold text-sky-300">
                          [I]
                        </span>{' '}
                        <span className="text-slate-300">
                          {mod.levelBreakdown.I[language]}
                        </span>
                      </div>
                      <div>
                        <span className="inline-block w-6 font-bold text-purple-300">
                          [A]
                        </span>{' '}
                        <span className="text-slate-300">
                          {mod.levelBreakdown.A[language]}
                        </span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-teal-950/40 border border-teal-800/60 p-2.5 text-xs text-teal-200">
                      <strong>⚡ 60s Shortcut: </strong>
                      {mod.sixtySecondShortcut[language]}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800">
                    <Link
                      href={`/lesson/${mod.topicId}/?exam=punjab-ett`}
                      className="rounded-lg bg-teal-700 hover:bg-teal-600 text-white px-3 py-1.5 text-xs font-semibold transition"
                    >
                      📖 {label('Read B→I→A Lesson', 'B→I→A पाठ पढ़ें', 'B→I→A ਪਾਠ ਪੜ੍ਹੋ')}
                    </Link>
                    <Link
                      href={`/mock-test/topic-${mod.topicId}/?exam=punjab-ett&count=10`}
                      className="rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white px-3 py-1.5 text-xs font-semibold transition"
                    >
                      🎯 {poolCount || mod.questionCount}{' '}
                      {label('Q Topic Mini Mock', 'प्रश्नों का मिनी मॉक', 'ਸਵਾਲਾਂ ਦਾ ਮਿਨੀ ਮੌਕ')}
                    </Link>
                    <Link
                      href={`/mock-test/topic-${mod.topicId}/?exam=punjab-ett&mode=flip&count=10`}
                      className="rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 px-3 py-1.5 text-xs font-semibold transition"
                    >
                      🃏 {label('Flip Cards', 'फ्लैशकार्ड', 'ਫਲੈਸ਼ਕਾਰਡ')}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Paper B Merit Modules */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-teal-300 border-b border-teal-800/60 pb-2">
            {label(
              '3.2–3.6 Paper B (Merit Exam): All 6 Subjects — Punjabi, Mathematics, General Science, Social Studies, English & Hindi (100 Qs · 200 Marks)',
              '3.2–3.6 पेपर B (मेरिट परीक्षा): सभी 6 विषय — पंजाबी, गणित, सामान्य विज्ञान, सामाजिक विज्ञान, अंग्रेज़ी और हिंदी (100 प्रश्न · 200 अंक)',
              '3.2–3.6 ਪੇਪਰ B (ਮੈਰਿਟ ਪ੍ਰੀਖਿਆ): ਸਾਰੇ 6 ਵਿਸ਼ੇ — ਪੰਜਾਬੀ, ਗਣਿਤ, ਜਨਰਲ ਸਾਇੰਸ, ਸਮਾਜਿਕ ਵਿਗਿਆਨ, ਅੰਗਰੇਜ਼ੀ ਅਤੇ ਹਿੰਦੀ (100 ਸਵਾਲ · 200 ਅੰਕ)'
            )}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paperBModules.map((mod) => {
              const poolCount = getQuestionPool({
                topicId: mod.topicId,
                examId: 'punjab-ett',
              }).length;
              return (
                <article
                  key={mod.topicId}
                  className="rounded-xl border border-slate-700 bg-slate-900/90 p-4 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="rounded bg-teal-900/70 px-2.5 py-0.5 text-teal-200 font-semibold border border-teal-600/50">
                        {mod.subject[language]}
                      </span>
                      <span className="text-slate-400">{mod.marksWeight}</span>
                    </div>
                    <h4 className="font-bold text-white text-base">
                      {mod.title[language]}
                    </h4>
                    <ul className="list-disc pl-5 text-xs text-slate-300 space-y-1">
                      {mod.officialHeadingsCovered[language].map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
                      <div>
                        <span className="inline-block w-6 font-bold text-emerald-300">
                          [B]
                        </span>{' '}
                        <span className="text-slate-300">
                          {mod.levelBreakdown.B[language]}
                        </span>
                      </div>
                      <div>
                        <span className="inline-block w-6 font-bold text-sky-300">
                          [I]
                        </span>{' '}
                        <span className="text-slate-300">
                          {mod.levelBreakdown.I[language]}
                        </span>
                      </div>
                      <div>
                        <span className="inline-block w-6 font-bold text-purple-300">
                          [A]
                        </span>{' '}
                        <span className="text-slate-300">
                          {mod.levelBreakdown.A[language]}
                        </span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-teal-950/40 border border-teal-800/60 p-2.5 text-xs text-teal-200">
                      <strong>⚡ 60s Shortcut: </strong>
                      {mod.sixtySecondShortcut[language]}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800">
                    <Link
                      href={`/lesson/${mod.topicId}/?exam=punjab-ett`}
                      className="rounded-lg bg-teal-700 hover:bg-teal-600 text-white px-3 py-1.5 text-xs font-semibold transition"
                    >
                      📖 {label('Read B→I→A Lesson', 'B→I→A पाठ पढ़ें', 'B→I→A ਪਾਠ ਪੜ੍ਹੋ')}
                    </Link>
                    <Link
                      href={`/mock-test/topic-${mod.topicId}/?exam=punjab-ett&count=10`}
                      className="rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white px-3 py-1.5 text-xs font-semibold transition"
                    >
                      🎯 {poolCount || mod.questionCount}{' '}
                      {label('Q Topic Mini Mock', 'प्रश्नों का मिनी मॉक', 'ਸਵਾਲਾਂ ਦਾ ਮਿਨੀ ਮੌਕ')}
                    </Link>
                    <Link
                      href={`/mock-test/topic-${mod.topicId}/?exam=punjab-ett&mode=flip&count=10`}
                      className="rounded-lg bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 px-3 py-1.5 text-xs font-semibold transition"
                    >
                      🃏 {label('Flip Cards', 'फ्लैशकार्ड', 'ਫਲੈਸ਼ਕਾਰਡ')}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3.7 & Section 6: Past-Paper Checklist & Student Strategy */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 space-y-3">
          <h2 className="text-lg font-bold text-white">
            {label(
              '3.7 Items to Verify in Past OMR Papers',
              '3.7 पिछले OMR प्रश्नपत्रों में जाँचने योग्य बिंदु',
              '3.7 ਪੁਰਾਣੇ OMR ਪੇਪਰਾਂ ਵਿੱਚ ਜਾਂਚਣਯੋਗ ਨੁਕਤੇ'
            )}
          </h2>
          <div className="space-y-3">
            {ETT_PAST_PAPER_CHECKLIST.map((row) => (
              <div
                key={row.item.en}
                className="rounded-lg border border-slate-800 bg-slate-800/50 p-3 space-y-1"
              >
                <div className="font-semibold text-teal-200 text-sm">
                  {row.item[language]}
                </div>
                <p className="text-xs text-slate-300">{row.status[language]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 space-y-3">
          <h2 className="text-lg font-bold text-white">
            {label(
              '6. Student Strategy & Offline OMR Bubbling Guide',
              '6. छात्र रणनीति और ऑफ़लाइन OMR अभ्यास गाइड',
              '6. ਵਿਦਿਆਰਥੀ ਰਣਨੀਤੀ ਅਤੇ ਆਫ਼ਲਾਈਨ OMR ਅਭਿਆਸ ਗਾਈਡ'
            )}
          </h2>
          <div className="space-y-3">
            {ETT_STUDENT_STRATEGY.map((st) => (
              <div
                key={st.step}
                className="rounded-lg border border-slate-800 bg-slate-800/50 p-3 space-y-1"
              >
                <div className="font-semibold text-amber-200 text-sm">
                  {st.title[language]}
                </div>
                <p className="text-xs text-slate-300">{st.detail[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archival Subject Index (Preserved + Live Status) */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          {label(
            'Paper B subject index · archival total 200 marks',
            'पेपर B विषय सूची · पुराने दस्तावेज़ में कुल 200 अंक',
            'ਪੇਪਰ B ਵਿਸ਼ਾ ਸੂਚੀ · ਪੁਰਾਣੇ ਦਸਤਾਵੇਜ਼ ਵਿੱਚ ਕੁੱਲ 200 ਅੰਕ'
          )}
        </h2>
        <p className="text-sm text-slate-400">
          {label(
            'Subject marks are from the archival copy. They are not topic weights, question counts or a simulation of the upcoming exam.',
            'विषय के अंक पुराने दस्तावेज़ से हैं। ये विषयांश का भार, प्रश्नों की संख्या या आगामी परीक्षा का अनुकरण नहीं हैं।',
            'ਵਿਸ਼ਿਆਂ ਦੇ ਅੰਕ ਪੁਰਾਣੇ ਦਸਤਾਵੇਜ਼ ਤੋਂ ਹਨ। ਇਹ ਉਪਵਿਸ਼ਿਆਂ ਦਾ ਭਾਰ, ਸਵਾਲਾਂ ਦੀ ਗਿਣਤੀ ਜਾਂ ਆਉਣ ਵਾਲੀ ਪ੍ਰੀਖਿਆ ਦਾ ਨਮੂਨਾ ਨਹੀਂ ਹਨ।'
          )}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {ETT_REFERENCE_SUBJECTS.map((subject) => (
            <article
              key={subject.name}
              className="rounded-lg border border-slate-700 bg-slate-900/50 p-3"
            >
              <h3 className="font-semibold text-teal-200">
                {label(subject.name, subject.hi, subject.pa)} · {subject.marks}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {label(
                  'Archival headings mapped; core B→I→A blueprint modules active above',
                  'पुराने शीर्षक सूचीबद्ध; मुख्य B→I→A ब्लूप्रिंट मॉड्यूल ऊपर सक्रिय',
                  'ਪੁਰਾਣੇ ਸਿਰਲੇਖ ਦਰਜ; ਮੁੱਖ B→I→A ਬਲੂਪ੍ਰਿੰਟ ਮੋਡੀਊਲ ਉੱਪਰ ਸਰਗਰਮ'
                )}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 96 Archival Headings Mapped Across Six Subjects */}
      <section className="space-y-3" aria-label="Mapped archival subjects">
        <h2 className="text-xl font-bold">
          {ETT_ARCHIVAL_HEADING_COUNT}{' '}
          {label(
            'archival headings mapped across six subjects',
            'पुराने शीर्षक छह विषयों में सूचीबद्ध',
            'ਪੁਰਾਣੇ ਸਿਰਲੇਖ ਛੇ ਵਿਸ਼ਿਆਂ ਵਿੱਚ ਦਰਜ'
          )}
        </h2>
        <p className="text-sm text-slate-400">
          {label(
            'All four scanned pages were visually inspected. Titles paraphrase archival headings. Teaching outlines are our proposed breakdown, not extra government requirements. Units with completed B → I → A lessons and dedicated question banks provide direct links below.',
            'चारों स्कैन पृष्ठ देखकर जाँचे गए हैं। शीर्षक पुराने पाठ्यक्रम का अर्थानुसार रूप हैं। जिन इकाइयों के विस्तृत B → I → A पाठ और प्रश्न बैंक तैयार हैं, उनके सीधे लिंक नीचे दिए गए हैं।',
            'ਚਾਰੇ ਸਕੈਨ ਸਫ਼ੇ ਵੇਖ ਕੇ ਜਾਂਚੇ ਗਏ ਹਨ। ਸਿਰਲੇਖ ਪੁਰਾਣੇ ਪਾਠਕ੍ਰਮ ਦੇ ਅਰਥ ਅਨੁਸਾਰ ਰੂਪ ਹਨ। ਜਿਨ੍ਹਾਂ ਇਕਾਈਆਂ ਦੇ B → I → A ਪਾਠ ਅਤੇ ਸਵਾਲ ਬੈਂਕ ਤਿਆਰ ਹਨ, ਉਨ੍ਹਾਂ ਦੇ ਸਿੱਧੇ ਲਿੰਕ ਹੇਠਾਂ ਦਿੱਤੇ ਗਏ ਹਨ।'
          )}
        </p>
        {ETT_MAPPED_GROUPS.map((group) => (
          <details
            key={group.id}
            className="rounded-xl border border-slate-700 p-4"
          >
            <summary className="font-semibold text-teal-200 cursor-pointer">
              {group.title[language]} · {group.units.length}{' '}
              {label('headings', 'शीर्षक', 'ਸਿਰਲੇਖ')}
            </summary>
            <div className="mt-3 space-y-3">
              {group.units.map((unit) => {
                const hasLesson = Boolean(getLessonByTopicId(unit.id));
                const unitPool = getQuestionPool({
                  topicId: unit.id,
                  examId: 'punjab-ett',
                }).length;
                return (
                  <details
                    key={unit.id}
                    open={hasLesson}
                    className="rounded-lg bg-slate-800 p-3"
                  >
                    <summary className="cursor-pointer font-medium">
                      {unit.title[language]}{' '}
                      {hasLesson && (
                        <span className="ml-2 text-xs rounded bg-teal-900 px-2 py-0.5 text-teal-200">
                          ✓ {label('Lesson & Mini Mock Ready', 'पाठ व मॉक तैयार', 'ਪਾਠ ਤੇ ਮੌਕ ਤਿਆਰ')}
                        </span>
                      )}
                    </summary>
                    <a
                      className="mt-2 block text-sm underline text-teal-300"
                      href={`${reference.mirror}#page=${unit.sourcePage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label(
                        'Archival mirror · page',
                        'पुरानी प्रति · पृष्ठ',
                        'ਪੁਰਾਣੀ ਨਕਲ · ਸਫ਼ਾ'
                      )}{' '}
                      {unit.sourcePage} ↗
                    </a>
                    {unit.studyTopics[language].length > 0 && (
                      <>
                        <p className="mt-3 text-xs text-slate-400">
                          {label(
                            'Proposed teaching breakdown',
                            'प्रस्तावित अध्ययन विभाजन',
                            'ਸੁਝਾਈ ਅਧਿਐਨ ਵੰਡ'
                          )}
                        </p>
                        <ul className="list-disc pl-5 text-sm mt-1">
                          {unit.studyTopics[language].map((topic) => (
                            <li key={topic}>{topic}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {hasLesson ? (
                      <div className="mt-3 flex flex-wrap gap-3 pt-2 border-t border-slate-700 text-sm">
                        <Link
                          href={`/lesson/${unit.id}/?exam=punjab-ett`}
                          className="underline text-teal-300 font-semibold"
                        >
                          📖 {label('Open Trilingual Lesson', 'त्रिभाषी पाठ खोलें', 'ਤਿੰਨ-ਭਾਸ਼ਾਈ ਪਾਠ ਖੋਲ੍ਹੋ')}
                        </Link>
                        {unitPool > 0 && (
                          <Link
                            href={`/mock-test/topic-${unit.id}/?exam=punjab-ett&count=10`}
                            className="underline text-indigo-300 font-semibold"
                          >
                            🎯 10{' '}
                            {label(
                              'question mini mock',
                              'प्रश्नों का मिनी मॉक',
                              'ਸਵਾਲਾਂ ਦਾ ਮਿਨੀ ਮੌਕ'
                            )}{' '}
                            ({unitPool} {label('in pool', 'उपलब्ध', 'ਉਪਲਬਧ')})
                          </Link>
                        )}
                      </div>
                    ) : (
                      <p className="mt-3 text-sm text-amber-200">
                        {label(
                          'Granular unit-specific bank pending; covered in the consolidated subject blueprint module above. No unrelated mock is offered for this unit.',
                          'इकाई-विशिष्ट बैंक बाकी; ऊपर समेकित विषय ब्लूप्रिंट मॉड्यूल में शामिल। इस इकाई के लिए असंबंधित मॉक नहीं दिया गया है।',
                          'ਇਕਾਈ-ਵਿਸ਼ੇਸ਼ ਸਵਾਲ ਬੈਂਕ ਬਾਕੀ; ਉੱਪਰ ਦਿੱਤੇ ਵਿਸ਼ਾ ਬਲੂਪ੍ਰਿੰਟ ਮੋਡੀਊਲ ਵਿੱਚ ਕਵਰ ਕੀਤਾ ਗਿਆ ਹੈ। ਇਸ ਇਕਾਈ ਲਈ ਬੇਸੰਬੰਧ ਮੌਕ ਨਹੀਂ ਦਿੱਤਾ ਗਿਆ।'
                        )}
                      </p>
                    )}
                  </details>
                );
              })}
            </div>
          </details>
        ))}
      </section>

      {/* General Science 26 Archival Units */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          {label(
            'General Science → 26 archival units → teaching subtopics',
            'सामान्य विज्ञान → 26 इकाइयाँ → अध्ययन उपविषय',
            'ਆਮ ਵਿਗਿਆਨ → 26 ਇਕਾਈਆਂ → ਅਧਿਐਨ ਉਪਵਿਸ਼ੇ'
          )}
        </h2>
        <p className="text-sm text-slate-400">
          {label(
            '26 unit headings appear on pages 1–2 of the archival copy. Subtopics below are ExamSathi’s teaching breakdown; they are not verbatim government requirements.',
            'पुरानी प्रति के पृष्ठ 1–2 में 26 इकाई शीर्षक हैं। नीचे के उपविषय ExamSathi का अध्ययन विभाजन हैं, सरकारी शब्दशः सूची नहीं।',
            'ਪੁਰਾਣੀ ਨਕਲ ਦੇ ਸਫ਼ੇ 1–2 ਉੱਤੇ 26 ਇਕਾਈ ਸਿਰਲੇਖ ਹਨ। ਹੇਠਲੇ ਉਪਵਿਸ਼ੇ ExamSathi ਦੀ ਅਧਿਐਨ ਵੰਡ ਹਨ, ਸਰਕਾਰੀ ਸੂਚੀ ਦੇ ਅਸਲ ਸ਼ਬਦ ਨਹੀਂ।'
          )}
        </p>
        {ETT_SCIENCE_UNITS.map(([id, en, hi, pa, subtopics]) => {
          const unitTopicId = `ett-science-${id}`;
          const unitHasLesson = Boolean(getLessonByTopicId(unitTopicId));
          const unitPoolCount = getQuestionPool({
            topicId: unitTopicId,
            examId: 'punjab-ett',
          }).length;
          return (
            <details
              key={id}
              open={id === 'light' || unitHasLesson}
              className="rounded-xl bg-slate-800 p-4"
            >
              <summary className="cursor-pointer font-semibold text-teal-200">
                {label(en, hi, pa)}
                {unitHasLesson && (
                  <span className="ml-2 text-xs rounded bg-teal-900 px-2 py-0.5 text-teal-200">
                    ✓ {label('Lesson & Mini Mock Ready', 'पाठ व मॉक तैयार', 'ਪਾਠ ਤੇ ਮੌਕ ਤਿਆਰ')}
                  </span>
                )}
              </summary>
              {unitHasLesson && (
                <div className="mt-3 flex flex-wrap gap-4 rounded-lg bg-slate-900/70 p-3 text-sm">
                  <Link
                    href={`/lesson/${unitTopicId}/?exam=punjab-ett`}
                    className="underline text-teal-300 font-semibold"
                  >
                    📖 {label(en, hi, pa)} —{' '}
                    {label('Open B→I→A Lesson', 'B→I→A पाठ खोलें', 'B→I→A ਪਾਠ ਖੋਲ੍ਹੋ')}
                  </Link>
                  {unitPoolCount > 0 && (
                    <Link
                      href={`/mock-test/topic-${unitTopicId}/?exam=punjab-ett&count=10`}
                      className="underline text-indigo-300 font-semibold"
                    >
                      🎯 10{' '}
                      {label(
                        'question mini mock',
                        'प्रश्नों का मिनी मॉक',
                        'ਸਵਾਲਾਂ ਦਾ ਮਿਨੀ ਮੌਕ'
                      )}{' '}
                      ({unitPoolCount})
                    </Link>
                  )}
                </div>
              )}
              <ul className="mt-3 space-y-3">
                {subtopics.map((subtopic, index) => (
                  <li key={subtopic} className="border-l-2 border-slate-600 pl-3">
                    {id === 'light' && index === 0 ? (
                      <>
                        <Link
                          href="/lesson/ett-light-reflection/?exam=punjab-ett"
                          className="underline text-teal-300"
                        >
                          {label(
                            'Reflection and plane mirrors',
                            'परावर्तन और समतल दर्पण',
                            'ਪਰਾਵਰਤਨ ਅਤੇ ਸਮਤਲ ਦਰਪਣ'
                          )}
                        </Link>
                        <p className="text-sm my-2">
                          {label(
                            'English, Hindi and Punjabi · 6 explanation sections · 6 flashcards · original practice, not verified PYQs',
                            'अंग्रेज़ी, हिंदी और पंजाबी · 6 व्याख्या खंड · 6 फ्लैशकार्ड · मौलिक अभ्यास, सत्यापित पुराने प्रश्न नहीं',
                            'ਅੰਗਰੇਜ਼ੀ, ਹਿੰਦੀ ਅਤੇ ਪੰਜਾਬੀ · 6 ਵਿਆਖਿਆ ਭਾਗ · 6 ਫਲੈਸ਼ਕਾਰਡ · ਮੌਲਿਕ ਅਭਿਆਸ, ਪ੍ਰਮਾਣਿਤ ਪੁਰਾਣੇ ਸਵਾਲ ਨਹੀਂ'
                          )}{' '}
                          · {available}
                        </p>
                        <div className="flex gap-4 text-teal-300">
                          {[10, 20]
                            .filter((count) => count <= available)
                            .map((count) => (
                              <Link
                                key={count}
                                href={`/mock-test/topic-ett-light-reflection/?exam=punjab-ett&count=${count}`}
                              >
                                {count}{' '}
                                {label(
                                  'question mini mock',
                                  'प्रश्नों का मिनी मॉक',
                                  'ਸਵਾਲਾਂ ਦਾ ਮਿਨੀ ਮੌਕ'
                                )}
                              </Link>
                            ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <span>{subtopic}</span>
                        <p className="text-xs text-slate-400">
                          {unitHasLesson
                            ? label(
                                'Covered in the consolidated unit lesson above',
                                'ऊपर समेकित इकाई पाठ में शामिल',
                                'ਉੱਪਰ ਦਿੱਤੇ ਇਕਾਈ ਪਾਠ ਵਿੱਚ ਕਵਰ ਕੀਤਾ ਗਿਆ'
                              )
                            : label(
                                'Covered in General Science I/II Blueprint modules above; standalone subtopic bank pending',
                                'ऊपर सामान्य विज्ञान I/II ब्लूप्रिंट मॉड्यूल में शामिल; अलग उपविषय बैंक बाकी',
                                'ਉੱਪਰ ਜਨਰਲ ਸਾਇੰਸ I/II ਬਲੂਪ੍ਰਿੰਟ ਮੋਡੀਊਲ ਵਿੱਚ ਸ਼ਾਮਲ; ਵੱਖਰਾ ਉਪਵਿਸ਼ਾ ਬੈਂਕ ਬਾਕੀ'
                              )}
                        </p>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </section>

      <p className="text-sm text-slate-400">
        {label(
          'Next: verify the publisher copy and Paper A on the next official ERB notice, tag scanned OMR past papers using Section 4 rules, and expand remaining granular subtopics one unit at a time.',
          'अगला चरण: आगामी आधिकारिक ERB सूचना पर सरकारी प्रति और पेपर A सत्यापित करें, अनुभाग 4 के नियमों से स्कैन किए गए OMR प्रश्नपत्र टैग करें, और शेष उपविषयों का विस्तार करें।',
          'ਅਗਲਾ ਪੜਾਅ: ਆਉਣ ਵਾਲੀ ਅਧਿਕਾਰਤ ERB ਸੂਚਨਾ ਉੱਤੇ ਸਰਕਾਰੀ ਨਕਲ ਅਤੇ ਪੇਪਰ A ਦੀ ਜਾਂਚ ਕਰੋ, ਭਾਗ 4 ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਸਕੈਨ ਕੀਤੇ OMR ਪੇਪਰ ਟੈਗ ਕਰੋ, ਅਤੇ ਬਾਕੀ ਉਪਵਿਸ਼ਿਆਂ ਦਾ ਵਿਸਥਾਰ ਕਰੋ।'
        )}
      </p>
    </main>
  );
}
