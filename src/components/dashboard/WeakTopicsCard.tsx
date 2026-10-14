'use client';
import Link from 'next/link';
import { Flame, Target } from 'lucide-react';
import { useStore } from '@/lib/store';
import { useLearnerInsights } from '@/lib/learner-insights-client';

const readable = (topicId: string) => topicId.replace(/^topic-/, '').replace(/-/g, ' ');

/**
 * The daily-habit loop for signed-in learners: today's streak status and the topics to fix next.
 * Everything comes from server-scored attempts, so it follows the learner across devices.
 * Renders nothing for guests (the dashboard already invites them to sign in) or while loading.
 */
export default function WeakTopicsCard() {
  const { language: lang } = useStore();
  const t = (en: string, hi: string, pa: string) => ({ en, hi, pa })[lang];
  const state = useLearnerInsights();
  if (state.status !== 'ready') return null;
  const { insights } = state;

  if (insights.attempts === 0) {
    return (
      <section aria-label={t('Your next step', 'आपका अगला कदम', 'ਤੁਹਾਡਾ ਅਗਲਾ ਕਦਮ')} className="rounded-2xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-200">
        <p className="font-bold text-white">{t('Take your first mock test', 'अपना पहला मॉक टेस्ट दें', 'ਆਪਣਾ ਪਹਿਲਾ ਮੌਕ ਟੈਸਟ ਦਿਓ')}</p>
        <p className="mt-1 text-xs text-slate-300">{t('We will track your streak and point you to the topics that need work.', 'हम आपकी स्ट्रीक ट्रैक करेंगे और कमज़ोर विषय बताएंगे।', 'ਅਸੀਂ ਤੁਹਾਡੀ ਸਟ੍ਰੀਕ ਟ੍ਰੈਕ ਕਰਾਂਗੇ ਅਤੇ ਕਮਜ਼ੋਰ ਵਿਸ਼ੇ ਦੱਸਾਂਗੇ।')}</p>
        <Link href="/mock-test" className="mt-3 inline-block rounded-lg bg-teal-700 px-3 py-2 text-xs font-bold text-white">{t('Start a test', 'टेस्ट शुरू करें', 'ਟੈਸਟ ਸ਼ੁਰੂ ਕਰੋ')}</Link>
      </section>
    );
  }

  const atRisk = insights.streak > 0 && !insights.practisedToday;
  return (
    <section aria-label={t('Your progress', 'आपकी प्रगति', 'ਤੁਹਾਡੀ ਪ੍ਰਗਤੀ')} className="space-y-3 rounded-2xl border border-slate-700 bg-slate-800 p-4">
      <div className="flex items-center gap-3">
        <Flame size={22} className={insights.streak > 0 ? 'text-amber-500 fill-amber-500' : 'text-slate-400'} aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-sm font-bold text-white">
            {insights.streak > 0
              ? t(`${insights.streak}-day streak`, `${insights.streak} दिन की स्ट्रीक`, `${insights.streak} ਦਿਨ ਦੀ ਸਟ੍ਰੀਕ`)
              : t('Start a streak today', 'आज स्ट्रीक शुरू करें', 'ਅੱਜ ਸਟ੍ਰੀਕ ਸ਼ੁਰੂ ਕਰੋ')}
          </p>
          <p className="text-xs text-slate-300">
            {insights.practisedToday
              ? t('Done for today. See you tomorrow.', 'आज का काम पूरा। कल मिलते हैं।', 'ਅੱਜ ਦਾ ਕੰਮ ਪੂਰਾ। ਕੱਲ੍ਹ ਮਿਲਦੇ ਹਾਂ।')
              : atRisk
                ? t('Practise today to keep it alive.', 'स्ट्रीक बचाने के लिए आज अभ्यास करें।', 'ਸਟ੍ਰੀਕ ਬਚਾਉਣ ਲਈ ਅੱਜ ਅਭਿਆਸ ਕਰੋ।')
                : t('One test today starts it.', 'आज एक टेस्ट से शुरुआत करें।', 'ਅੱਜ ਇੱਕ ਟੈਸਟ ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ।')}
          </p>
        </div>
      </div>

      {insights.weakTopics.length > 0 ? (
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-300">
            <Target size={14} aria-hidden="true" /> {t('Fix these next', 'इन्हें अगला सुधारें', 'ਇਹਨਾਂ ਨੂੰ ਅਗਲਾ ਸੁਧਾਰੋ')}
          </p>
          <ul className="space-y-2">
            {insights.weakTopics.map(topic => (
              <li key={topic.topicId}>
                <Link href={`/mock-test/topic-${topic.topicId}/?exam=${encodeURIComponent(topic.examId)}&count=20`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 hover:border-teal-500">
                  <span className="min-w-0 truncate text-sm font-semibold capitalize text-white">{readable(topic.topicId)}</span>
                  <span className="shrink-0 text-xs font-bold text-rose-300">{Math.round(topic.accuracy)}% · {t('Practise', 'अभ्यास', 'ਅਭਿਆਸ')} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-xs text-slate-300">{t('No weak topics yet. Keep testing to find them.', 'अभी कोई कमज़ोर विषय नहीं। टेस्ट देते रहें।', 'ਹੁਣ ਕੋਈ ਕਮਜ਼ੋਰ ਵਿਸ਼ਾ ਨਹੀਂ। ਟੈਸਟ ਦਿੰਦੇ ਰਹੋ।')}</p>
      )}
    </section>
  );
}
