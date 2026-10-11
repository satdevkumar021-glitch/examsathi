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
import {
  getOrGenerateStudyPlan,
  togglePlanDayCompletion,
  PersonalizedStudyPlan,
} from '@/lib/study-planner';
import {
  getMistakeNotebook,
  resolveMistake,
  reopenMistake,
  MistakeRecord,
  getTopicMastery,
  TopicMasteryRecord,
} from '@/lib/mistake-notebook';
import {
  Calendar,
  CheckCircle2,
  Clock,
  RotateCcw,
  Sparkles,
  Layers,
  Search,
} from 'lucide-react';

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
  
  const [activeTab, setActiveTab] = useState<'plan' | 'mistakes' | 'mastery'>('plan');
  const [track, setTrack] = useState('punjab-master-cadre');
  const [day, setDay] = useState(1);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [answer, setAnswer] = useState<string | null>(null);
  const [date, setDate] = useState(studyDay);
  const [queue, setQueue] = useState({ due: 0, new_: 0, learning: 0, review: 0 });

  // Personalized Planning state
  const [dailyHours, setDailyHours] = useState<number>(2);
  const [targetDate, setTargetDate] = useState<string>('');
  const [studyPlan, setStudyPlan] = useState<PersonalizedStudyPlan | null>(null);

  // Mistake Notebook state
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [mistakeSearch, setMistakeSearch] = useState<string>('');

  useEffect(() => {
    const refresh = () => {
      setQueue(getSRSSummary(Object.keys(loadSRSStates())));
      setDate(studyDay());
      setMistakes(getMistakeNotebook({ examId: track, searchQuery: mistakeSearch }));
    };
    const query = new URLSearchParams(window.location.search);
    const examParam = query.get('exam');
    const storeExam = useStore.getState().selectedExam;
    const target = getStoredUser().targetExam;
    const rawTrack = examParam || storeExam || target || 'punjab-master-cadre';
    const resolvedTrack = rawTrack.includes('reet') ? 'reet' : rawTrack.includes('ssc') ? 'ssc-cgl' : rawTrack.includes('clerk') ? 'punjab-clerk' : rawTrack.includes('ett') ? 'punjab-ett' : 'punjab-master-cadre';
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate browser-only profile and saved plan once.
    setTrack(resolvedTrack);
    try {
      setCompleted(JSON.parse(studyStorage.getItem('examsathi_roadmap_completed_v2') || '{}'));
      const start = studyStorage.getItem('examsathi_study_start_date') || studyDay();
      const normalized = start.slice(0, 10);
      const days = Math.floor((Date.parse(`${studyDay()}T12:00:00`) - Date.parse(`${normalized}T12:00:00`)) / 86400000) + 1;
      setDay(Number.isFinite(days) ? Math.max(1, Math.min(60, days)) : 1);
      studyStorage.setItem('examsathi_study_start_date', normalized);
      
      const loadedPlan = getOrGenerateStudyPlan({
        examId: resolvedTrack,
        dailyHoursBudget: dailyHours,
        targetExamDate: targetDate || undefined,
      });
      setStudyPlan(loadedPlan);
      setMistakes(getMistakeNotebook({ examId: resolvedTrack, searchQuery: mistakeSearch }));
    } catch { /* A damaged plan starts fresh. */ }
    refresh();
    window.addEventListener(STORAGE_EVENT, refresh);
    window.addEventListener('focus', refresh);
    return () => { window.removeEventListener(STORAGE_EVENT, refresh); window.removeEventListener('focus', refresh); };
  }, [track, dailyHours, targetDate, mistakeSearch]);

  const handleUpdatePlan = (newHours: number, newDate?: string) => {
    setDailyHours(newHours);
    if (newDate !== undefined) setTargetDate(newDate);
    const updated = getOrGenerateStudyPlan({
      examId: track,
      dailyHoursBudget: newHours,
      targetExamDate: newDate !== undefined ? newDate : targetDate || undefined,
    });
    setStudyPlan(updated);
  };

  const handleToggleDay = (dayNum: number) => {
    const updated = togglePlanDayCompletion(track, dayNum);
    if (updated) {
      setStudyPlan(updated);
      const dayItem = updated.schedule.find(s => s.dayNumber === dayNum);
      if (dayItem?.completed) {
        awardStudyXP(`plan-${track}-day-${dayNum}`, 25);
      }
    }
  };

  const handleToggleResolveMistake = (qId: string, currentResolved: boolean) => {
    if (currentResolved) {
      reopenMistake(qId, track);
    } else {
      resolveMistake(qId, track);
    }
    setMistakes(getMistakeNotebook({ examId: track, searchQuery: mistakeSearch }));
  };

  const entries = SYLLABUS_TOPICS.filter(e => e.exam.id === track || (track === 'punjab-master-cadre' && e.exam.id.startsWith('punjab-master-cadre')) || (track === 'reet' && e.exam.id.startsWith('reet')) || (track === 'punjab-ett' && e.exam.id.includes('ett')) || (track === 'punjab-clerk' && e.exam.id.includes('clerk')));
  const unique = entries.filter((e, i) => entries.findIndex(other => other.topic.id === e.topic.id) === i);
  const topic = unique[(day - 1) % Math.max(1, unique.length)]?.topic;
  const lesson = topic ? getLessonByTopicId(topic.id) : undefined;
  const available = topic ? getTestQuestions({ topicId: topic.id, examId: track, count: 50 }).length : 0;
  const topicName = topic ? (lang === 'hi' ? topic.nameHindi : lang === 'pa' ? topic.namePunjabi || topic.name : topic.name) : '';
  const challengePool = unique.flatMap(e => ALL_QUESTIONS.filter(q => q.topicId === e.topic.id));
  const dailyIndex = Math.floor(Date.parse(`${date}T12:00:00`) / 86400000);
  const challenge = challengePool.length ? challengePool[dailyIndex % challengePool.length] : undefined;
  
  const tasks = topic ? [
    { id: 'read', title: t('Read topic and subtopics', 'विषय और उपविषय पढ़ें', 'ਵਿਸ਼ਾ ਅਤੇ ਉਪਵਿਸ਼ੇ ਪੜ੍ਹੋ'), href: `/lesson/${topic.id}/`, ready: Boolean(lesson), xp: 20 },
    { id: 'practice', title: t(`Practice up to ${Math.min(20, available)} available questions`, `उपलब्ध ${Math.min(20, available)} प्रश्नों का अभ्यास`, `ਉਪਲਬਧ ${Math.min(20, available)} ਸਵਾਲਾਂ ਦਾ ਅਭਿਆਸ`), href: `/mock-test/topic-${topic.id}/?exam=${track}&count=20`, ready: available > 0, xp: 30 },
    { id: 'review', title: t('Review topic cards', 'विषय कार्ड दोहराएं', 'ਵਿਸ਼ੇ ਦੇ ਕਾਰਡ ਦੁਹਰਾਓ'), href: `/mock-test/topic-${topic.id}/?mode=flip&exam=${track}&count=20`, ready: available > 0, xp: 10 },
  ] : [];

  const mark = (id: string, xp: number) => {
    const key = `${track}-${day}-${id}`;
    const updated = { ...completed, [key]: !completed[key] };
    setCompleted(updated);
    studyStorage.setItem('examsathi_roadmap_completed_v2', JSON.stringify(updated));
    if (updated[key]) awardStudyXP(`roadmap-${key}`, xp);
  };

  // Collect mastery records for syllabus topics
  const masteryRecords: TopicMasteryRecord[] = unique.map(u => getTopicMastery(u.topic.id, track));

  return (
    <div className="p-5 space-y-6 text-slate-200 pb-24 max-w-4xl mx-auto">
      {/* Title & Track Selector */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">
          {t('Personalized Study Roadmap & Revision', 'व्यक्तिगत अध्ययन योजना और पुनरावृत्ति', 'ਨਿੱਜੀ ਅਧਿਐਨ ਯੋਜਨਾ ਅਤੇ ਦੁਹਰਾਈ')}
        </h1>
        <p className="text-sm text-slate-400">
          {t(
            'Exam-version-specific schedule featuring catch-up consolidation days, spaced revisions, mistake tracking, and honest content readiness.',
            'परीक्षा-विशिष्ट योजना जिसमें बैकलॉग दिवस, अंतराल पुनरावृत्ति, त्रुटि ट्रैकिंग और वास्तविक सामग्री स्थिति शामिल है।',
            'ਪ੍ਰੀਖਿਆ-ਅਧਾਰਿਤ ਯੋਜਨਾ ਜਿਸ ਵਿੱਚ ਬੈਕਲਾਗ ਦਿਨ, ਦੁਹਰਾਈ, ਗਲਤੀ ਟਰੈਕਿੰਗ ਅਤੇ ਅਸਲ ਸਮੱਗਰੀ ਸਥਿਤੀ ਸ਼ਾਮਲ ਹੈ।'
          )}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tracks.map(item => (
            <button
              key={item.id}
              aria-pressed={track === item.id}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                track === item.id ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              onClick={() => {
                setTrack(item.id);
                setAnswer(null);
                useStore.getState().setSelectedExam('punjab', item.id);
                const p = getOrGenerateStudyPlan({ examId: item.id, dailyHoursBudget: dailyHours });
                setStudyPlan(p);
                setMistakes(getMistakeNotebook({ examId: item.id }));
              }}
            >
              {item.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="flex border-b border-slate-700 gap-2">
        <button
          onClick={() => setActiveTab('plan')}
          className={`pb-2.5 px-3 text-sm font-bold border-b-2 transition ${
            activeTab === 'plan' ? 'border-teal-400 text-teal-300' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          📅 {t('Personalized Plan', 'व्यक्तिगत योजना', 'ਨਿੱਜੀ ਯੋਜਨਾ')}
        </button>
        <button
          onClick={() => setActiveTab('mistakes')}
          className={`pb-2.5 px-3 text-sm font-bold border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'mistakes' ? 'border-amber-400 text-amber-300' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          📖 {t('Mistake Notebook', 'त्रुटि नोटबुक', 'ਗਲਤੀ ਨੋਟਬੁੱਕ')}
          {mistakes.filter(m => !m.resolved).length > 0 && (
            <span className="bg-amber-500/20 text-amber-300 text-xs px-1.5 py-0.5 rounded-full font-mono">
              {mistakes.filter(m => !m.resolved).length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('mastery')}
          className={`pb-2.5 px-3 text-sm font-bold border-b-2 transition ${
            activeTab === 'mastery' ? 'border-purple-400 text-purple-300' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          🏆 {t('Mastery Matrix (4 Tiers)', 'दक्षता मैट्रिक्स (4 स्तर)', 'ਮਹਾਰਤ ਮੈਟ੍ਰਿਕਸ (4 ਪੱਧਰ)')}
        </button>
      </div>

      {/* TAB 1: PERSONALIZED PLAN */}
      {activeTab === 'plan' && (
        <div className="space-y-5">
          {/* Controls Bar */}
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                <Clock size={16} className="text-teal-400" />
                {t('Daily Time Budget:', 'दैनिक अध्ययन समय:', 'ਰੋਜ਼ਾਨਾ ਅਧਿਐਨ ਸਮਾਂ:')}
                <select
                  value={dailyHours}
                  onChange={e => handleUpdatePlan(Number(e.target.value))}
                  className="bg-slate-900 border border-slate-600 rounded-lg p-1.5 text-xs text-white"
                >
                  <option value={1}>1 {t('Hour / day', 'घंटा / दिन', 'ਘੰਟਾ / ਦਿਨ')}</option>
                  <option value={2}>2 {t('Hours / day', 'घंटे / दिन', 'ਘੰਟੇ / ਦਿਨ')}</option>
                  <option value={4}>4 {t('Hours / day (Intensive)', 'घंटे / दिन (गहन)', 'ਘੰਟੇ / ਦਿਨ (ਡੂੰਘਾ)')}</option>
                </select>
              </label>

              <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                <Calendar size={16} className="text-teal-400" />
                {t('Target Exam Date:', 'लक्ष्य परीक्षा तिथि:', 'ਟੀਚਾ ਪ੍ਰੀਖਿਆ ਮਿਤੀ:')}
                <input
                  type="date"
                  value={targetDate}
                  onChange={e => handleUpdatePlan(dailyHours, e.target.value)}
                  className="bg-slate-900 border border-slate-600 rounded-lg p-1.5 text-xs text-white"
                />
              </label>
            </div>

            <button
              onClick={() => {
                const refreshed = getOrGenerateStudyPlan({ examId: track, dailyHoursBudget: dailyHours, targetExamDate: targetDate });
                setStudyPlan(refreshed);
              }}
              className="text-xs text-teal-300 hover:text-teal-200 flex items-center gap-1 font-semibold"
            >
              <RotateCcw size={14} /> {t('Regenerate Schedule', 'शेड्यूल रीसेट करें', 'ਸ਼ਡਿਊਲ ਰੀਸੈਟ ਕਰੋ')}
            </button>
          </div>

          {/* Plan Summary Metrics */}
          {studyPlan && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <div className="text-xl font-bold text-white font-mono">{studyPlan.totalDays}</div>
                <div className="text-[11px] text-slate-400">{t('Total Plan Days', 'कुल योजना दिन', 'ਕੁੱਲ ਯੋਜਨਾ ਦਿਨ')}</div>
              </div>
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <div className="text-xl font-bold text-teal-400 font-mono">{studyPlan.topicDaysCount}</div>
                <div className="text-[11px] text-slate-400">{t('Topic Study Days', 'विषय अध्ययन दिन', 'ਵਿਸ਼ਾ ਅਧਿਐਨ ਦਿਨ')}</div>
              </div>
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <div className="text-xl font-bold text-indigo-400 font-mono">{studyPlan.catchupDaysCount}</div>
                <div className="text-[11px] text-slate-400">{t('Catch-up Buffer Days', 'बैकलॉग बफर दिन', 'ਬੈਕਲਾਗ ਦਿਨ')}</div>
              </div>
              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                <div className="text-xl font-bold text-amber-400 font-mono">{studyPlan.revisionDaysCount + studyPlan.mockDaysCount}</div>
                <div className="text-[11px] text-slate-400">{t('Revisions & Mocks', 'पुनरावृत्ति व मॉक', 'ਦੁਹਰਾਈ ਅਤੇ ਮੌਕ')}</div>
              </div>
            </div>
          )}

          {/* Interactive Day Schedule */}
          {studyPlan && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers size={18} className="text-teal-400" />
                  {t('Syllabus Schedule & Milestones', 'पाठ्यक्रम शेड्यूल और पड़ाव', 'ਸਿਲੇਬਸ ਸ਼ਡਿਊਲ ਅਤੇ ਮੀਲ ਪੱਥਰ')}
                </h2>
                <span className="text-xs text-slate-400">
                  {studyPlan.schedule.filter(s => s.completed).length} / {studyPlan.schedule.length} {t('Completed', 'पूरा हुआ', 'ਪੂਰਾ ਹੋਇਆ')}
                </span>
              </div>

              <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                {studyPlan.schedule.map(item => {
                  let badgeClass = 'bg-teal-500/10 text-teal-300 border-teal-500/30';
                  let typeLabel = t('Topic', 'विषय', 'ਵਿਸ਼ਾ');
                  if (item.type === 'catchup') {
                    badgeClass = 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
                    typeLabel = t('Catch-up & Rest', 'बैकलॉग व विश्राम', 'ਬੈਕਲਾਗ ਤੇ ਆਰਾਮ');
                  } else if (item.type === 'revision') {
                    badgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
                    typeLabel = t('Spaced Revision', 'अंतराल पुनरावृत्ति', 'ਦੁਹਰਾਈ');
                  } else if (item.type === 'mock') {
                    badgeClass = 'bg-purple-500/20 text-purple-300 border-purple-500/40';
                    typeLabel = t('Official Mock Simulation', 'आधिकारिक मॉक सिमुलेशन', 'ਅਧਿਕਾਰਕ ਮੌਕ');
                  }

                  return (
                    <div
                      key={item.dayNumber}
                      className={`p-4 rounded-xl border transition ${
                        item.completed
                          ? 'bg-slate-850/60 border-emerald-500/30 opacity-75'
                          : item.type === 'catchup'
                          ? 'bg-slate-800/90 border-indigo-500/30'
                          : item.type === 'mock'
                          ? 'bg-slate-800/90 border-purple-500/30'
                          : 'bg-slate-800/90 border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => handleToggleDay(item.dayNumber)}
                            className="mt-1 w-4 h-4 rounded text-teal-500 focus:ring-0 cursor-pointer"
                            aria-label={`Mark Day ${item.dayNumber} complete`}
                          />
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-white text-sm">
                                {item.title[lang] || item.title.en}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeClass}`}>
                                {typeLabel}
                              </span>
                              {item.contentReadiness.lessonReady ? (
                                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
                                  ✓ {t('Lesson Ready', 'पाठ उपलब्ध', 'ਪਾਠ ਉਪਲਬਧ')}
                                </span>
                              ) : (
                                <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30 font-semibold">
                                  ⏳ {t('Lesson Pending', 'पाठ लंबित', 'ਪਾਠ ਬਾਕੀ')}
                                </span>
                              )}
                            </div>

                            <p className="text-xs text-slate-300 mt-1">
                              {item.description[lang] || item.description.en}
                            </p>

                            <div className="flex items-center gap-4 text-[11px] text-slate-400 mt-2 flex-wrap">
                              <span>⏱ {item.targetMinutes} {t('mins target', 'मिनट लक्ष्य', 'ਮਿੰਟ ਟੀਚਾ')}</span>
                              <span className="text-slate-500">•</span>
                              <span className="text-teal-300/80 font-mono text-[10px]">
                                ⚖ {item.officialWeightNote}
                              </span>
                            </div>
                          </div>
                        </div>

                        {item.topicId && (
                          <div className="flex flex-col gap-1.5 shrink-0">
                            <Link
                              href={`/lesson/${item.topicId}/`}
                              className="text-xs bg-slate-700 hover:bg-slate-600 text-teal-300 px-2.5 py-1 rounded-lg font-semibold text-center"
                            >
                              {t('Read', 'पढ़ें', 'ਪੜ੍ਹੋ')}
                            </Link>
                            <Link
                              href={`/mock-test/topic-${item.topicId}/?exam=${track}&count=20`}
                              className="text-xs bg-teal-600/30 hover:bg-teal-600/40 text-teal-200 px-2.5 py-1 rounded-lg font-semibold text-center"
                            >
                              {t('Practice', 'अभ्यास', 'ਅਭਿਆਸ')}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Classic Single-Day Focus Widget (Preserved for compatibility) */}
          <div className="border-t border-slate-750 pt-5 space-y-3">
            <h2 className="text-sm font-bold text-slate-300">{t('Direct Day Navigator', 'सीधा दिन नेविगेटर', 'ਸਿੱਧਾ ਦਿਨ ਨੈਵੀਗੇਟਰ')}</h2>
            <div className="flex items-center gap-3">
              <label className="text-xs text-slate-400">
                {t('Study day', 'अध्ययन दिवस', 'ਅਧਿਐਨ ਦਿਨ')}:
              </label>
              <select
                aria-label={t('Study day', 'अध्ययन दिवस', 'ਅਧਿਐਨ ਦਿਨ')}
                className="bg-slate-800 p-2 text-xs rounded-lg text-white"
                value={day}
                onChange={e => setDay(Number(e.target.value))}
              >
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            <section className="bg-slate-800 rounded-xl p-4 space-y-3">
              <h3 className="font-bold text-sm">{day}/60 · {topicName}</h3>
              <ul className="list-disc pl-5 text-xs text-slate-300 space-y-1">
                {topic?.subtopics.map((sub, i) => <li key={i} lang="en">{sub}</li>)}
              </ul>
              {tasks.map(task => {
                const done = Boolean(completed[`${track}-${day}-${task.id}`]);
                return (
                  <div key={task.id} className="border-t border-slate-700 py-2.5 flex justify-between gap-3 text-xs">
                    <label className="flex gap-2 items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={done}
                        disabled={!task.ready}
                        onChange={() => mark(task.id, task.xp)}
                        className="rounded text-teal-500"
                      />
                      <span>{task.title} · +{task.xp} XP</span>
                    </label>
                    <Link className="text-teal-300 underline" href={task.href}>
                      {task.ready ? t('Open', 'खोलें', 'ਖੋਲ੍ਹੋ') : t('Coverage pending', 'सामग्री लंबित', 'ਸਮੱਗਰੀ ਬਾਕੀ')}
                    </Link>
                  </div>
                );
              })}
              {!topic && <Link className="text-xs text-teal-300 underline" href="/syllabus/">{t('Browse syllabus', 'पाठ्यक्रम देखें', 'ਸਿਲੇਬਸ ਵੇਖੋ')}</Link>}
            </section>
          </div>

          {/* Flashcard Due Queue Status */}
          <div className="bg-slate-850 p-4 rounded-xl border border-slate-700 flex items-center justify-between">
            <span role="status" className="text-xs text-slate-300">
              🗂 {t('Reviewed flashcards', 'दोहराए गए कार्ड', 'ਦੁਹਰਾਏ ਕਾਰਡ')}: <strong className="text-white">{queue.due}</strong> {t('due', 'बाकी', 'ਬਾਕੀ')} · <strong className="text-teal-300">{queue.review}</strong> {t('scheduled', 'निर्धारित', 'ਨਿਰਧਾਰਤ')}
            </span>
            <Link className="text-xs text-teal-300 underline font-semibold" href={`/library/?exam=${track}`}>
              {t('Open study timer', 'अध्ययन टाइमर खोलें', 'ਅਧਿਐਨ ਟਾਈਮਰ ਖੋਲ੍ਹੋ')}
            </Link>
          </div>

          {/* Daily Challenge Question */}
          <section className="bg-slate-800 p-4 rounded-xl space-y-3 border border-slate-700">
            <h2 className="font-bold text-sm">{t('Daily practice question', 'दैनिक अभ्यास प्रश्न', 'ਰੋਜ਼ਾਨਾ ਅਭਿਆਸ ਸਵਾਲ')} · {date}</h2>
            {challenge ? (
              <div key={`${track}-${date}-${challenge.id}`}>
                <p className="text-sm">{challenge.question[lang] || challenge.question.en}</p>
                <div className="grid gap-2 mt-3">
                  {Object.entries(challenge.options).map(([key, text]) => (
                    <button
                      key={key}
                      disabled={answer !== null}
                      aria-pressed={answer === key}
                      className={`p-3 text-left rounded-lg text-xs transition ${
                        answer !== null && key === challenge.correct
                          ? 'bg-emerald-800 text-white font-bold'
                          : 'bg-slate-900 text-slate-200 hover:bg-slate-750'
                      }`}
                      onClick={() => {
                        setAnswer(key);
                        awardStudyXP(`challenge-${track}-${date}`, key === challenge.correct ? 10 : 0);
                      }}
                    >
                      {key}. {text[lang] || text.en}
                    </button>
                  ))}
                </div>
                {answer && <p role="status" className="mt-3 text-xs text-emerald-300">{challenge.explanation[lang] || challenge.explanation.en}</p>}
              </div>
            ) : (
              <p className="text-xs text-slate-400">{t('No reviewed question available for this track yet.', 'इस परीक्षा के लिए अभी प्रश्न उपलब्ध नहीं है।', 'ਇਸ ਪ੍ਰੀਖਿਆ ਲਈ ਅਜੇ ਸਵਾਲ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।')}</p>
            )}
          </section>
        </div>
      )}

      {/* TAB 2: MISTAKE NOTEBOOK */}
      {activeTab === 'mistakes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                📖 {t('Mistake Notebook & Spaced Recall', 'त्रुटि नोटबुक और अंतराल स्मरण', 'ਗਲਤੀ ਨੋਟਬੁੱਕ ਅਤੇ ਦੁਹਰਾਈ')}
              </h2>
              <p className="text-xs text-slate-400">
                {t(
                  'Every incorrect quiz answer is automatically logged here. Review and resolve to ensure sustained mastery.',
                  'प्रत्येक गलत प्रश्न उत्तर यहां स्वचालित रूप से दर्ज होता है। पूर्ण दक्षता के लिए समीक्षा और समाधान करें।',
                  'ਹਰ ਗਲਤ ਸਵਾਲ ਦਾ ਜਵਾਬ ਇੱਥੇ ਆਪਣੇ ਆਪ ਦਰਜ ਹੁੰਦਾ ਹੈ। ਪੂਰੀ ਮਹਾਰਤ ਲਈ ਦੁਹਰਾਓ ਅਤੇ ਹੱਲ ਕਰੋ।'
                )}
              </p>
            </div>

            {mistakes.filter(m => !m.resolved).length > 0 && (
              <Link
                href={`/mock-test/custom/?exam=${track}&mode=exam&count=10`}
                className="bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow"
              >
                <Sparkles size={14} /> {t('Start Mistakes Drill', 'त्रुटि अभ्यास शुरू करें', 'ਗਲਤੀ ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ')}
              </Link>
            )}
          </div>

          {/* Search filter */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder={t('Search mistakes by keyword...', 'कीवर्ड द्वारा खोजें...', 'ਸ਼ਬਦ ਦੁਆਰਾ ਖੋਜੋ...')}
              value={mistakeSearch}
              onChange={e => setMistakeSearch(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Mistake List */}
          {mistakes.length === 0 ? (
            <div className="text-center p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <CheckCircle2 size={36} className="text-emerald-400 mx-auto mb-2" />
              <h3 className="text-base font-bold text-white">
                {t('No unresolved mistakes recorded!', 'कोई अनसुलझी त्रुटि दर्ज नहीं है!', 'ਕੋਈ ਅਣਸੁਲਝੀ ਗਲਤੀ ਦਰਜ ਨਹੀਂ ਹੈ!')}
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                {t(
                  'Take mock tests or mini mocks. Any incorrect answer will be captured here for targeted revision.',
                  'मॉक टेस्ट दें। कोई भी गलत उत्तर लक्षित पुनरावृत्ति के लिए यहां दर्ज किया जाएगा।',
                  'ਮੌਕ ਟੈਸਟ ਦਿਓ। ਕੋਈ ਵੀ ਗਲਤ ਜਵਾਬ ਦੁਹਰਾਈ ਲਈ ਇੱਥੇ ਦਰਜ ਕੀਤਾ ਜਾਵੇਗਾ।'
                )}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {mistakes.map(m => (
                <div
                  key={m.id}
                  className={`p-4 rounded-xl border transition ${
                    m.resolved
                      ? 'bg-slate-850 border-slate-700/60 opacity-60'
                      : 'bg-slate-800 border-amber-500/30 shadow'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          m.resolved
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}>
                          {m.resolved ? t('Resolved ✓', 'हल किया गया ✓', 'ਹੱਲ ਕੀਤਾ ✓') : t('Lapsed (Review Needed)', 'समीक्षा आवश्यक', 'ਦੁਹਰਾਈ ਚਾਹੀਦੀ')}
                        </span>
                        {m.lapsesCount > 1 && (
                          <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full font-mono">
                            {m.lapsesCount} {t('lapses', 'बार चूके', 'ਵਾਰ ਖੁੰਝੇ')}
                          </span>
                        )}
                        <span className="text-[10px] text-slate-400">
                          {new Date(m.timestamp).toLocaleDateString('en-IN')}
                        </span>
                      </div>

                      <h4 className="text-sm font-semibold text-white">
                        {m.questionText[lang] || m.questionText.en}
                      </h4>

                      <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                        <div className="bg-red-950/40 border border-red-800/40 p-2 rounded-lg">
                          <span className="text-[10px] text-red-400 font-bold block">
                            ✕ {t('Your Answer:', 'आपका उत्तर:', 'ਤੁਹਾਡਾ ਜਵਾਬ:')}
                          </span>
                          <span className="text-slate-200">
                            {m.userAnswer}: {m.options[m.userAnswer]?.[lang] || m.options[m.userAnswer]?.en || m.userAnswer}
                          </span>
                        </div>
                        <div className="bg-emerald-950/40 border border-emerald-800/40 p-2 rounded-lg">
                          <span className="text-[10px] text-emerald-400 font-bold block">
                            ✓ {t('Correct Answer:', 'सही उत्तर:', 'ਸਹੀ ਜਵਾਬ:')}
                          </span>
                          <span className="text-slate-200">
                            {m.correctAnswer}: {m.options[m.correctAnswer]?.[lang] || m.options[m.correctAnswer]?.en}
                          </span>
                        </div>
                      </div>

                      <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-750 text-xs text-slate-300">
                        <strong className="text-teal-300 block mb-0.5 font-semibold">
                          💡 {t('Explanation & Reasoning:', 'व्याख्या:', 'ਵਿਆਖਿਆ:')}
                        </strong>
                        {m.explanation[lang] || m.explanation.en}
                      </div>
                    </div>

                    <button
                      onClick={() => handleToggleResolveMistake(m.questionId, m.resolved)}
                      className={`text-xs px-3 py-1.5 rounded-xl font-bold transition shrink-0 ${
                        m.resolved
                          ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow'
                      }`}
                    >
                      {m.resolved ? t('Reopen', 'पुनः खोलें', 'ਮੁੜ ਖੋਲ੍ਹੋ') : t('Mark Resolved', 'हल चिह्नित करें', 'ਹੱਲ ਨਿਸ਼ਾਨ ਲਾਓ')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: 4-TIER MASTERY MATRIX */}
      {activeTab === 'mastery' && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              🏆 {t('Topic Mastery Matrix (4 Tiers)', 'विषय दक्षता मैट्रिक्स (4 स्तर)', 'ਵਿਸ਼ਾ ਮਹਾਰਤ ਮੈਟ੍ਰਿਕਸ (4 ਪੱਧਰ)')}
            </h2>
            <p className="text-xs text-slate-400">
              {t(
                'Reading, marking complete, answering correctly once, and sustained mastery are strictly tracked as separate states.',
                'पढ़ना, पूरा चिह्नित करना, एक बार सही उत्तर देना और निरंतर दक्षता अलग-अलग स्तरों पर ट्रैक की जाती है।',
                'ਪੜ੍ਹਨਾ, ਪੂਰਾ ਨਿਸ਼ਾਨ ਲਾਉਣਾ, ਇਕ ਵਾਰ ਸਹੀ ਜਵਾਬ ਦੇਣਾ ਅਤੇ ਨਿਰੰਤਰ ਮਹਾਰਤ ਵੱਖਰੇ ਪੱਧਰਾਂ ਤੇ ਟਰੈਕ ਹੁੰਦੀ ਹੈ।'
              )}
            </p>
          </div>

          {/* 4 Tiers Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
              <span className="text-[10px] text-blue-400 font-bold block">1. 📖 {t('Read', 'पढ़ा गया', 'ਪੜ੍ਹਿਆ')}</span>
              <span className="text-[11px] text-slate-300">{t('Lesson content opened', 'पाठ सामग्री खोली गई', 'ਪਾਠ ਸਮੱਗਰੀ ਖੋਲ੍ਹੀ ਗਈ')}</span>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
              <span className="text-[10px] text-teal-400 font-bold block">2. ✅ {t('Marked Complete', 'पूर्ण चिह्नित', 'ਪੂਰਾ ਨਿਸ਼ਾਨ')}</span>
              <span className="text-[11px] text-slate-300">{t('Manually confirmed', 'पुष्टि की गई', 'ਤਸਦੀਕ ਕੀਤਾ')}</span>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
              <span className="text-[10px] text-amber-400 font-bold block">3. 🎯 {t('Practiced Once', 'एक बार अभ्यास', 'ਇਕ ਵਾਰ ਅਭਿਆਸ')}</span>
              <span className="text-[11px] text-slate-300">{t('Answered correctly in quiz', 'प्रश्नोत्तरी में सही उत्तर दिया', 'ਕਵਿਜ਼ ਵਿੱਚ ਸਹੀ ਜਵਾਬ')}</span>
            </div>
            <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700">
              <span className="text-[10px] text-emerald-400 font-bold block">4. 🏆 {t('Sustained Mastery', 'निरंतर दक्षता', 'ਨਿਰੰਤਰ ਮਹਾਰਤ')}</span>
              <span className="text-[11px] text-slate-300">{t('High accuracy + FSRS stability', 'उच्च सटीकता + स्मृति स्थिरता', 'ਉੱਚ ਸ਼ੁੱਧਤਾ + ਯਾਦ ਸਥਿਰਤਾ')}</span>
            </div>
          </div>

          {/* Topic-by-Topic Mastery Table */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            <div className="p-3 border-b border-slate-700 text-xs font-bold text-slate-300">
              {t('Exam Topics & Transparent Progression Basis', 'परीक्षा विषय और पारदर्शी प्रगति आधार', 'ਪ੍ਰੀਖਿਆ ਵਿਸ਼ੇ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਆਧਾਰ')}
            </div>
            <div className="divide-y divide-slate-750">
              {unique.map(u => {
                const mastery = masteryRecords.find(m => m.topicId === u.topic.id);
                const tier = mastery?.tier || 'unseen';

                let tierBadge = (
                  <span className="bg-slate-700 text-slate-400 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                    {t('Unseen', 'अनदेखा', 'ਅਣਵੇਖਿਆ')}
                  </span>
                );
                if (tier === 'read') {
                  tierBadge = (
                    <span className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                      📖 {t('Read', 'पढ़ा गया', 'ਪੜ੍ਹਿਆ')}
                    </span>
                  );
                } else if (tier === 'marked_complete') {
                  tierBadge = (
                    <span className="bg-teal-500/20 text-teal-300 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                      ✅ {t('Marked Complete', 'पूर्ण', 'ਪੂਰਾ')}
                    </span>
                  );
                } else if (tier === 'practiced_once') {
                  tierBadge = (
                    <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                      🎯 {t('Practiced Once', 'अभ्यास हुआ', 'ਅਭਿਆਸ ਹੋਇਆ')}
                    </span>
                  );
                } else if (tier === 'sustained_mastery') {
                  tierBadge = (
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                      🏆 {t('Sustained Mastery', 'निरंतर दक्षता', 'ਨਿਰੰਤਰ ਮਹਾਰਤ')}
                    </span>
                  );
                }

                return (
                  <div key={u.topic.id} className="p-3.5 flex items-start justify-between gap-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-white">{u.topic.name}</strong>
                        {tierBadge}
                      </div>
                      <p className="text-slate-400 text-[11px] mt-1">
                        {mastery?.basisExplanation || t('No practice recorded yet.', 'अभी कोई अभ्यास दर्ज नहीं है।', 'ਅਜੇ ਕੋਈ ਅਭਿਆਸ ਦਰਜ ਨਹੀਂ ਹੈ।')}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={`/lesson/${u.topic.id}/`}
                        className="text-[11px] text-teal-300 hover:underline font-semibold"
                      >
                        {t('Lesson', 'पाठ', 'ਪਾਠ')}
                      </Link>
                      <span className="text-slate-600">•</span>
                      <Link
                        href={`/mock-test/topic-${u.topic.id}/?exam=${track}&count=20`}
                        className="text-[11px] text-teal-300 hover:underline font-semibold"
                      >
                        {t('Practice', 'अभ्यास', 'ਅਭਿਆਸ')}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
