'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { useAuth } from '@/lib/hooks/useAuth';
import { getStoredUser, toggleFavoriteQuestion, toggleBookmarkQuestion, logoutUser } from '@/lib/auth';
import { getVaultQuestions, saveCustomPractice } from '@/lib/question-vault';
import { studyStorage } from '@/lib/storage';
import { exportStudyBackup, restoreStudyBackup } from '@/lib/study-backup';
import { readCloudStudy, saveCloudStudy, restoreCloudStudy, type CloudSnapshot } from '@/lib/cloud-study';
import { activityStreak } from '@/lib/study-progress';
import { Question } from '@/lib/data/questions';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/config';
interface Note { id: string; questionId: string; title: string; explanation: string; correctText: string; examTag?: string; thought?: string }
interface Attempt { attemptId?: string; testTitle?: string; completedAt?: string; percentage?: number; correct?: number; total?: number }
export default function Profile() {
  const router = useRouter();
  const { language: lang } = useStore();
  const { user: authUser, error: authError } = useAuth();
  const t = (en: string, hi: string, pa: string) => ({ en, hi, pa })[lang];
  const [user, setUser] = useState<ReturnType<typeof getStoredUser> | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [tab, setTab] = useState<'notes' | 'favorites' | 'bookmarks'>('notes');
  const [history, setHistory] = useState<Attempt[]>([]);
  const [status, setStatus] = useState('');
  const [streak, setStreak] = useState(0);
  const [busy, setBusy] = useState(false);
  const [cloud, setCloud] = useState<CloudSnapshot | null>(null);
  const [cloudReady, setCloudReady] = useState(false);
  const [cloudAccount, setCloudAccount] = useState<string | null>(null);
  const [cloudBusy, setCloudBusy] = useState(false);
  const [allowUpload, setAllowUpload] = useState(false);
  const [allowRestore, setAllowRestore] = useState(false);
  const cloudAction = async (action: 'refresh' | 'save' | 'restore') => {
    if (action !== 'refresh' && cloudAccount !== authUser?.id) { setStatus('Refresh cloud status for this account first.'); return; }
    setCloudBusy(true);
    try {
      if (action === 'save') { await saveCloudStudy(cloud?.version || 0); setAllowUpload(false); }
      if (action === 'restore') { await restoreCloudStudy(); window.location.reload(); return; }
      setCloud(await readCloudStudy()); setCloudAccount(authUser?.id || null); setCloudReady(true);
      setStatus(action === 'save' ? t('Cloud backup saved.', 'क्लाउड बैकअप सहेजा गया।', 'ਕਲਾਉਡ ਬੈਕਅੱਪ ਸੰਭਾਲਿਆ ਗਿਆ।') : t('Cloud status refreshed.', 'क्लाउड स्थिति अपडेट हुई।', 'ਕਲਾਉਡ ਸਥਿਤੀ ਅੱਪਡੇਟ ਹੋਈ।'));
    } catch (error) { setStatus(error instanceof Error ? error.message : 'Cloud transfer failed.'); }
    finally { setCloudBusy(false); }
  };
  useEffect(() => {
    const refresh = () => {
      try {
        const current = getStoredUser();
        setUser(current);
        setNotes(JSON.parse(studyStorage.getItem('examsathi_saved_review_notes') || '[]'));
        setHistory(JSON.parse(studyStorage.getItem('examsathi_mock_history') || '[]'));
        setQuestions(getVaultQuestions(tab === 'favorites' ? current.favoriteQuestionIds : current.bookmarkedQuestionIds));
        setStreak(activityStreak(JSON.parse(studyStorage.getItem('examsathi_activity_days') || '[]')));
      } catch { setStatus('Unable to read saved study data. Restore a valid backup.'); }
    };
    refresh();
  }, [tab, authUser?.id]);
  const practice = () => {
    try { saveCustomPractice(questions); router.push(`/mock-test/topic-ai-custom/?mode=exam&count=${questions.length}`); }
    catch { setStatus(t('Could not save this drill. Free browser storage and retry.', 'अभ्यास सहेजा नहीं जा सका। ब्राउज़र संग्रहण जांचें।', 'ਅਭਿਆਸ ਸੰਭਾਲਿਆ ਨਹੀਂ ਜਾ ਸਕਿਆ। ਬ੍ਰਾਊਜ਼ਰ ਸਟੋਰੇਜ ਵੇਖੋ।')); }
  };
  const remove = (id: string) => {
    if (tab === 'notes') { const updated = notes.filter(n => n.id !== id); studyStorage.setItem('examsathi_saved_review_notes', JSON.stringify(updated)); setNotes(updated); }
    else { if (tab === 'favorites') toggleFavoriteQuestion(id); else toggleBookmarkQuestion(id); setQuestions(questions.filter(q => q.id !== id)); setUser(getStoredUser()); }
  };
  const logout = async () => {
    setBusy(true);
    try {
      if (isSupabaseConfigured()) { const { error } = await createClient().auth.signOut({ scope: 'local' }); if (error) throw error; }
      logoutUser(); router.replace('/login/');
    } catch { setStatus(t('Sign out failed. Try again.', 'लॉगआउट विफल। पुनः प्रयास करें।', 'ਲਾਗਆਉਟ ਅਸਫਲ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।')); }
    finally { setBusy(false); }
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([exportStudyBackup()], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'examsathi-study-backup.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const restore = async (file: File | undefined) => {
    if (!file) return;
    try {
      if (file.size > 10 * 1024 * 1024) throw new Error('Maximum backup size is 10 MB.');
      restoreStudyBackup(await file.text()); window.location.reload();
    } catch { setStatus(t('Backup could not be restored. Check its format and size.', 'बैकअप बहाल नहीं हुआ। प्रारूप और आकार जांचें।', 'ਬੈਕਅੱਪ ਬਹਾਲ ਨਹੀਂ ਹੋਇਆ। ਫਾਰਮੈਟ ਅਤੇ ਆਕਾਰ ਵੇਖੋ।')); }
  };
  const labels = { notes: t('Notes', 'नोट्स', 'ਨੋਟਸ'), favorites: t('Starred', 'पसंदीदा', 'ਪਸੰਦੀਦਾ'), bookmarks: t('Saved later', 'बाद के लिए', 'ਬਾਅਦ ਲਈ') };
  return <div className="p-5 space-y-5 text-slate-200 pb-24">
    <h1 className="text-2xl font-bold">{t('Profile & study vault', 'प्रोफाइल और अध्ययन संग्रह', 'ਪ੍ਰੋਫਾਈਲ ਅਤੇ ਅਧਿਐਨ ਸੰਗ੍ਰਹਿ')}</h1>
    <p>{authUser?.user_metadata?.full_name || authUser?.email || user?.name || t('Guest student', 'अतिथि विद्यार्थी', 'ਮਹਿਮਾਨ ਵਿਦਿਆਰਥੀ')}</p>
    <p className="text-sm text-amber-200">{t('Progress is saved in this browser. Use downloaded or cloud backups to transfer it. Cloud transfers are manual; signing in does not automatically upload your notes.', 'प्रगति इस ब्राउज़र में सहेजी जाती है। स्थानांतरण के लिए फ़ाइल या क्लाउड बैकअप उपयोग करें। क्लाउड स्थानांतरण मैन्युअल है; लॉगिन से नोट्स स्वतः अपलोड नहीं होते।', 'ਤਰੱਕੀ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੰਭਾਲੀ ਜਾਂਦੀ ਹੈ। ਤਬਦੀਲੀ ਲਈ ਫਾਈਲ ਜਾਂ ਕਲਾਉਡ ਬੈਕਅੱਪ ਵਰਤੋ। ਕਲਾਉਡ ਤਬਦੀਲੀ ਹੱਥੀਂ ਹੈ; ਲਾਗਇਨ ਨਾਲ ਨੋਟਸ ਆਪਣੇ ਆਪ ਅੱਪਲੋਡ ਨਹੀਂ ਹੁੰਦੇ।')}</p>
    <p>{streak} {t('day streak', 'दिन लगातार अध्ययन', 'ਦਿਨ ਲਗਾਤਾਰ ਅਧਿਐਨ')} · {user?.xp || 0} XP · {(user?.libraryHours || 0).toFixed(1)} {t('study hours', 'अध्ययन घंटे', 'ਅਧਿਐਨ ਘੰਟੇ')}</p>
    {(status || authError) && <p role="alert">{status || authError}</p>}
    <div className="flex gap-2 flex-wrap">{(['notes', 'favorites', 'bookmarks'] as const).map(item => <button key={item} aria-pressed={tab === item} className={`p-3 rounded-lg ${tab === item ? 'bg-teal-700' : 'bg-slate-800'}`} onClick={() => setTab(item)}>{labels[item]} ({item === 'notes' ? notes.length : item === 'favorites' ? user?.favoriteQuestionIds.length || 0 : user?.bookmarkedQuestionIds.length || 0})</button>)}</div>
    {tab !== 'notes' && questions.length > 0 && <button className="p-3 bg-teal-600 rounded-lg w-full" onClick={practice}>{t('Launch revision drill', 'दोहराव अभ्यास शुरू करें', 'ਦੁਹਰਾਈ ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ')} ({questions.length})</button>}
    {tab === 'notes' ? notes.map(note => <article key={note.id} className="bg-slate-800 p-4 rounded-xl space-y-2"><details><summary className="cursor-pointer">{note.title}</summary><p className="mt-3">{note.correctText}</p><p className="text-sm">{note.explanation}</p><p className="text-xs text-slate-400">{note.examTag} · {note.thought}</p></details><button className="text-rose-300 underline" onClick={() => remove(note.id)}>{t('Remove note', 'नोट हटाएं', 'ਨੋਟ ਹਟਾਓ')}</button></article>) : questions.map(q => <article key={q.id} className="bg-slate-800 p-4 rounded-xl space-y-2"><details><summary className="cursor-pointer">{q.question[lang] || q.question.en}</summary><p className="mt-3">{q.correct}: {q.options[q.correct][lang] || q.options[q.correct].en}</p><p className="text-sm">{q.explanation[lang] || q.explanation.en}</p></details><button className="text-rose-300 underline" onClick={() => remove(q.id)}>{t('Remove from list', 'सूची से हटाएं', 'ਸੂਚੀ ਤੋਂ ਹਟਾਓ')}</button></article>)}
    {(tab === 'notes' ? notes.length === 0 : questions.length === 0) && <p>{t('No saved items in this list.', 'इस सूची में कोई सामग्री नहीं है।', 'ਇਸ ਸੂਚੀ ਵਿੱਚ ਕੋਈ ਸਮੱਗਰੀ ਨਹੀਂ ਹੈ।')}</p>}
    <section className="space-y-3"><h2 className="font-bold">{t('Recent attempts', 'हाल के प्रयास', 'ਹਾਲੀਆ ਕੋਸ਼ਿਸ਼ਾਂ')}</h2>{history.slice(0, 10).map((item, i) => <article className="bg-slate-800 rounded-lg p-3" key={item.attemptId || i}><p>{item.testTitle} · {item.percentage ?? 0}% · {item.correct ?? 0}/{item.total ?? 0}</p>{item.attemptId && <Link className="text-teal-300 underline" href={`/results/latest/?attempt=${encodeURIComponent(item.attemptId)}`}>{t('Review result', 'परिणाम देखें', 'ਨਤੀਜਾ ਵੇਖੋ')}</Link>}</article>)}</section>
    <section className="bg-slate-800 p-4 rounded-xl space-y-3"><h2 className="font-bold">{t('Study backup', 'अध्ययन बैकअप', 'ਅਧਿਐਨ ਬੈਕਅੱਪ')}</h2><button className="underline text-teal-300" onClick={download}>{t('Download backup', 'बैकअप डाउनलोड करें', 'ਬੈਕਅੱਪ ਡਾਊਨਲੋਡ ਕਰੋ')}</button><label className="block">{t('Restore backup (replaces local study records)', 'बैकअप बहाल करें (स्थानीय अध्ययन रिकॉर्ड बदलेंगे)', 'ਬੈਕਅੱਪ ਬਹਾਲ ਕਰੋ (ਸਥਾਨਕ ਅਧਿਐਨ ਰਿਕਾਰਡ ਬਦਲਣਗੇ)')}<input aria-label={t('Restore study backup', 'अध्ययन बैकअप बहाल करें', 'ਅਧਿਐਨ ਬੈਕਅੱਪ ਬਹਾਲ ਕਰੋ')} type="file" accept=".json" className="block mt-2" onChange={e => { void restore(e.target.files?.[0]); }} /></label></section>
    <section className="bg-slate-800 p-4 rounded-xl space-y-3">
      <h2 className="font-bold">{t('Cloud study backup', 'क्लाउड अध्ययन बैकअप', 'ਕਲਾਉਡ ਅਧਿਐਨ ਬੈਕਅੱਪ')}</h2>
      <p className="text-sm">{t('Up to 2 MB. Save on this device, then restore on another signed in to the same account. Download a local backup first. Restoring replaces local progress; it does not merge it.', 'अधिकतम 2 MB। इस डिवाइस से सहेजें और उसी खाते के दूसरे डिवाइस पर बहाल करें। पहले फ़ाइल बैकअप लें। बहाली स्थानीय प्रगति बदलती है; मर्ज नहीं करती।', 'ਵੱਧ ਤੋਂ ਵੱਧ 2 MB। ਇਸ ਡਿਵਾਈਸ ਤੋਂ ਸੰਭਾਲੋ ਅਤੇ ਉਸੇ ਖਾਤੇ ਦੇ ਦੂਜੇ ਡਿਵਾਈਸ ਉੱਤੇ ਬਹਾਲ ਕਰੋ। ਪਹਿਲਾਂ ਫਾਈਲ ਬੈਕਅੱਪ ਲਵੋ। ਬਹਾਲੀ ਸਥਾਨਕ ਤਰੱਕੀ ਬਦਲਦੀ ਹੈ; ਮਿਲਾਉਂਦੀ ਨਹੀਂ।')}</p>
      {!authUser ? <Link className="underline" href="/login/">{t('Sign in for cloud backup', 'क्लाउड बैकअप के लिए लॉगिन करें', 'ਕਲਾਉਡ ਬੈਕਅੱਪ ਲਈ ਲਾਗਇਨ ਕਰੋ')}</Link> : <>
        <button disabled={cloudBusy} className="underline text-teal-300" onClick={() => { void cloudAction('refresh'); }}>{t('Refresh cloud status', 'क्लाउड स्थिति अपडेट करें', 'ਕਲਾਉਡ ਸਥਿਤੀ ਅੱਪਡੇਟ ਕਰੋ')}</button>
        {cloudReady && cloudAccount === authUser.id && <p>{cloud ? `${t('Saved', 'सहेजा गया', 'ਸੰਭਾਲਿਆ ਗਿਆ')}: ${new Date(cloud.updated_at).toLocaleString()} · v${cloud.version}` : t('No cloud backup yet.', 'अभी कोई क्लाउड बैकअप नहीं है।', 'ਹਾਲੇ ਕੋਈ ਕਲਾਉਡ ਬੈਕਅੱਪ ਨਹੀਂ ਹੈ।')}</p>}
        <label className="flex gap-2"><input type="checkbox" checked={allowUpload} disabled={cloudBusy} onChange={event => setAllowUpload(event.target.checked)} />{t('Upload my notes and progress to my Supabase account, replacing its previous backup.', 'मेरे नोट्स और प्रगति मेरे Supabase खाते में अपलोड करें और पिछला बैकअप बदलें।', 'ਮੇਰੇ ਨੋਟਸ ਅਤੇ ਤਰੱਕੀ ਮੇਰੇ Supabase ਖਾਤੇ ਵਿੱਚ ਅੱਪਲੋਡ ਕਰਕੇ ਪਿਛਲਾ ਬੈਕਅੱਪ ਬਦਲੋ।')}</label>
        <button disabled={cloudBusy || !cloudReady || cloudAccount !== authUser.id || !allowUpload} className="p-2 rounded bg-teal-700 disabled:opacity-40" onClick={() => { void cloudAction('save'); }}>{t('Save to cloud', 'क्लाउड में सहेजें', 'ਕਲਾਉਡ ਵਿੱਚ ਸੰਭਾਲੋ')}</button>
        <label className="flex gap-2"><input type="checkbox" checked={allowRestore} disabled={cloudBusy} onChange={event => setAllowRestore(event.target.checked)} />{t('Replace this device’s study records with the cloud backup.', 'इस डिवाइस के अध्ययन रिकॉर्ड क्लाउड बैकअप से बदलें।', 'ਇਸ ਡਿਵਾਈਸ ਦੇ ਅਧਿਐਨ ਰਿਕਾਰਡ ਕਲਾਉਡ ਬੈਕਅੱਪ ਨਾਲ ਬਦਲੋ।')}</label>
        <button disabled={cloudBusy || !cloudReady || cloudAccount !== authUser.id || !cloud || !allowRestore} className="p-2 rounded bg-indigo-700 disabled:opacity-40" onClick={() => { void cloudAction('restore'); }}>{t('Restore from cloud', 'क्लाउड से बहाल करें', 'ਕਲਾਉਡ ਤੋਂ ਬਹਾਲ ਕਰੋ')}</button>
      </>}
    </section>
    <nav className="flex gap-4 flex-wrap"><Link href="/syllabus/">{t('Syllabus', 'पाठ्यक्रम', 'ਸਿਲੇਬਸ')}</Link><Link href="/ai-generator/">{t('Notes practice', 'नोट्स अभ्यास', 'ਨੋਟਸ ਅਭਿਆਸ')}</Link><Link href="/login/">{t('Switch account', 'खाता बदलें', 'ਖਾਤਾ ਬਦਲੋ')}</Link><button disabled={busy} onClick={() => { void logout(); }}>{t('Sign out', 'लॉगआउट', 'ਲਾਗਆਉਟ')}</button></nav>
  </div>;
}
