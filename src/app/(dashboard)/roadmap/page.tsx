'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { studyStorage, STORAGE_EVENT } from '@/lib/storage';
import { SYLLABUS_TOPICS } from '@/lib/data/curriculum';
import { ALL_QUESTIONS } from '@/lib/data/questions';
import { getTestQuestions } from '@/lib/data/question_bank_engine';
import { getLessonByTopicId } from '@/lib/data/lessons';
import { getStoredUser } from '@/lib/auth';
import { getSRSSummary, loadSRSStates } from '@/lib/srs';
import { awardStudyXP, studyDay } from '@/lib/study-progress';

const tracks = [
  { id: 'punjab-ett', label: { en: 'Punjab ETT', hi: 'पंजाब ETT', pa: 'ਪੰਜਾਬ ETT' } },
  { id: 'punjab-clerk', label: { en: 'PSSSB Clerk', hi: 'PSSSB क्लर्क', pa: 'PSSSB ਕਲਰਕ' } },
  { id: 'punjab-master-cadre', label: { en: 'Master Cadre', hi: 'मास्टर कैडर', pa: 'ਮਾਸਟਰ ਕੈਡਰ' } },
  { id: 'reet', label: { en: 'REET', hi: 'REET', pa: 'REET' } },
  { id: 'ssc-cgl', label: { en: 'SSC CGL', hi: 'SSC CGL', pa: 'SSC CGL' } },
];

export default function StudyRoadmap() {
  const { language: lang } = useStore();
  const t = (en: string, hi: string, pa: string) => ({ en, hi, pa })[lang];
  const [track, setTrack] = useState('punjab-master-cadre');
  const [day, setDay] = useState(1);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [answer, setAnswer] = useState<string | null>(null);
  const [date, setDate] = useState(studyDay);
  const [queue, setQueue] = useState({ due: 0, new_: 0, learning: 0, review: 0 });
  useEffect(() => {
    const refresh = () => {
      setQueue(getSRSSummary(Object.keys(loadSRSStates())));
      setDate(studyDay());
    };
    const target = getStoredUser().targetExam;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate browser-only profile and saved plan once.
    setTrack(target.includes('reet') ? 'reet' : target.includes('ssc') ? 'ssc-cgl' : target.includes('clerk') ? 'punjab-clerk' : target.includes('ett') ? 'punjab-ett' : 'punjab-master-cadre');
    try {
      setCompleted(JSON.parse(studyStorage.getItem('examsathi_roadmap_completed_v2') || '{}'));
      const start = studyStorage.getItem('examsathi_study_start_date') || studyDay();
      const normalized = start.slice(0, 10);
      const days = Math.floor((Date.parse(`${studyDay()}T12:00:00`) - Date.parse(`${normalized}T12:00:00`)) / 86400000) + 1;
      setDay(Number.isFinite(days) ? Math.max(1, Math.min(60, days)) : 1);
      studyStorage.setItem('examsathi_study_start_date', normalized);
    } catch { /* A damaged plan starts fresh. */ }
    refresh();
    window.addEventListener(STORAGE_EVENT, refresh);
    window.addEventListener('focus', refresh);
    return () => { window.removeEventListener(STORAGE_EVENT, refresh); window.removeEventListener('focus', refresh); };
  }, []);
  const entries = SYLLABUS_TOPICS.filter(e => e.exam.id === track || (track === 'reet' && e.exam.id.startsWith('reet')) || (track === 'punjab-ett' && e.exam.id.includes('ett')) || (track === 'punjab-clerk' && e.exam.id.includes('clerk')));
  const unique = entries.filter((e, i) => entries.findIndex(other => other.topic.id === e.topic.id) === i);
  const topic = unique[(day - 1) % Math.max(1, unique.length)]?.topic;
  const lesson = topic ? getLessonByTopicId(topic.id) : undefined;
  const available = topic ? getTestQuestions({ topicId: topic.id, count: 50 }).length : 0;
  const topicName = topic ? (lang === 'hi' ? topic.nameHindi : lang === 'pa' ? topic.namePunjabi || topic.name : topic.name) : '';
  const challengePool = unique.flatMap(e => ALL_QUESTIONS.filter(q => q.topicId === e.topic.id));
  const dailyIndex = Math.floor(Date.parse(`${date}T12:00:00`) / 86400000);
  const challenge = challengePool.length ? challengePool[dailyIndex % challengePool.length] : undefined;
  const tasks = topic ? [
    { id: 'read', title: t('Read topic and subtopics', 'विषय और उपविषय पढ़ें', 'ਵਿਸ਼ਾ ਅਤੇ ਉਪਵਿਸ਼ੇ ਪੜ੍ਹੋ'), href: `/lesson/${topic.id}/`, ready: Boolean(lesson), xp: 20 },
    { id: 'practice', title: t(`Practice up to ${Math.min(20, available)} available questions`, `उपलब्ध ${Math.min(20, available)} प्रश्नों का अभ्यास`, `ਉਪਲਬਧ ${Math.min(20, available)} ਸਵਾਲਾਂ ਦਾ ਅਭਿਆਸ`), href: `/mock-test/topic-${topic.id}/?count=20`, ready: available > 0, xp: 30 },
    { id: 'review', title: t('Review topic cards', 'विषय कार्ड दोहराएं', 'ਵਿਸ਼ੇ ਦੇ ਕਾਰਡ ਦੁਹਰਾਓ'), href: `/mock-test/topic-${topic.id}/?mode=flip&count=20`, ready: available > 0, xp: 10 },
  ] : [];
  const mark = (id: string, xp: number) => {
    const key = `${track}-${day}-${id}`;
    const updated = { ...completed, [key]: !completed[key] };
    setCompleted(updated);
    studyStorage.setItem('examsathi_roadmap_completed_v2', JSON.stringify(updated));
    if (updated[key]) awardStudyXP(`roadmap-${key}`, xp);
  };
  return <div className="p-5 space-y-5 text-slate-200 pb-24">
    <h1 className="text-2xl font-bold">{t('60-day topic study plan', '60 दिन की विषय अध्ययन योजना', '60 ਦਿਨਾਂ ਦੀ ਵਿਸ਼ਾ ਅਧਿਐਨ ਯੋਜਨਾ')}</h1>
    <p className="text-sm text-slate-400">{t('A daily rotation through this preparation map. Pending lessons are shown honestly; check your official syllabus. Mark tasks after completing them. Each task awards XP only once.', 'तैयारी मानचित्र के विषयों की दैनिक योजना। लंबित पाठ स्पष्ट दिखते हैं; आधिकारिक पाठ्यक्रम जांचें। कार्य पूरा होने पर चिह्नित करें; XP केवल एक बार मिलता है।', 'ਤਿਆਰੀ ਨਕਸ਼ੇ ਦੇ ਵਿਸ਼ਿਆਂ ਦੀ ਰੋਜ਼ਾਨਾ ਯੋਜਨਾ। ਬਾਕੀ ਪਾਠ ਸਪਸ਼ਟ ਦਿਖਦੇ ਹਨ; ਅਧਿਕਾਰਕ ਸਿਲੇਬਸ ਵੇਖੋ। ਕੰਮ ਪੂਰਾ ਕਰਕੇ ਨਿਸ਼ਾਨ ਲਾਓ; XP ਸਿਰਫ਼ ਇੱਕ ਵਾਰ ਮਿਲਦਾ ਹੈ।')}</p>
    <div className="flex flex-wrap gap-2">{tracks.map(item => <button key={item.id} aria-pressed={track === item.id} className={`rounded-lg p-2 ${track === item.id ? 'bg-teal-700' : 'bg-slate-800'}`} onClick={() => { setTrack(item.id); setAnswer(null); }}>{item.label[lang]}</button>)}</div>
    <label className="block">{t('Study day', 'अध्ययन दिवस', 'ਅਧਿਐਨ ਦਿਨ')} <select aria-label={t('Study day', 'अध्ययन दिवस', 'ਅਧਿਐਨ ਦਿਨ')} className="bg-slate-800 p-2" value={day} onChange={e => setDay(Number(e.target.value))}>{Array.from({ length: 60 }, (_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}</select></label>
    <section className="bg-slate-800 rounded-xl p-4 space-y-3"><h2 className="font-bold">{day}/60 · {topicName}</h2>
      <ul className="list-disc pl-5 text-sm">{topic?.subtopics.map((sub, i) => <li key={i} lang="en">{sub}</li>)}</ul>
      {tasks.map(task => { const done = Boolean(completed[`${track}-${day}-${task.id}`]); return <div key={task.id} className="border-t border-slate-700 py-3 flex justify-between gap-3">
        <label className="flex gap-2"><input type="checkbox" checked={done} disabled={!task.ready} onChange={() => mark(task.id, task.xp)} /> <span>{task.title} · +{task.xp} XP</span></label>
        <Link className="text-teal-300 underline" href={task.href}>{task.ready ? t('Open', 'खोलें', 'ਖੋਲ੍ਹੋ') : t('Coverage pending', 'सामग्री लंबित', 'ਸਮੱਗਰੀ ਬਾਕੀ')}</Link>
      </div>; })}
      {!topic && <Link href="/syllabus/">{t('Browse syllabus', 'पाठ्यक्रम देखें', 'ਸਿਲੇਬਸ ਵੇਖੋ')}</Link>}
    </section>
    <p role="status">{t('Reviewed flashcards', 'दोहराए गए कार्ड', 'ਦੁਹਰਾਏ ਕਾਰਡ')}: {queue.due} {t('due', 'बाकी', 'ਬਾਕੀ')} · {queue.review} {t('scheduled', 'निर्धारित', 'ਨਿਰਧਾਰਤ')}</p>
    <section className="bg-slate-800 p-4 rounded-xl space-y-3"><h2 className="font-bold">{t('Daily practice question', 'दैनिक अभ्यास प्रश्न', 'ਰੋਜ਼ਾਨਾ ਅਭਿਆਸ ਸਵਾਲ')} · {date}</h2>
      {challenge ? <div key={`${track}-${date}-${challenge.id}`}><p>{challenge.question[lang] || challenge.question.en}</p><div className="grid gap-2 mt-3">{Object.entries(challenge.options).map(([key, text]) => <button key={key} disabled={answer !== null} aria-pressed={answer === key} className={`p-3 text-left rounded-lg ${answer !== null && key === challenge.correct ? 'bg-emerald-800' : 'bg-slate-900'}`} onClick={() => { setAnswer(key); awardStudyXP(`challenge-${track}-${date}`, key === challenge.correct ? 10 : 0); }}>{key}. {text[lang] || text.en}</button>)}</div>{answer && <p role="status" className="mt-3">{challenge.explanation[lang] || challenge.explanation.en}</p>}</div> : <p>{t('No reviewed question available for this track yet.', 'इस परीक्षा के लिए अभी प्रश्न उपलब्ध नहीं है।', 'ਇਸ ਪ੍ਰੀਖਿਆ ਲਈ ਅਜੇ ਸਵਾਲ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।')}</p>}
    </section>
    <Link className="text-teal-300 underline" href="/library/">{t('Open study timer', 'अध्ययन टाइमर खोलें', 'ਅਧਿਐਨ ਟਾਈਮਰ ਖੋਲ੍ਹੋ')}</Link>
  </div>;
}
