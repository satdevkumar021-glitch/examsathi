'use client';
import { useAuth } from '@/lib/hooks/useAuth';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PlusCircle, BookOpen, HelpCircle, Video, FileText, CheckCircle2, ArrowLeft, ShieldCheck, Check, X, Layers, AlertTriangle } from 'lucide-react';
import { canDelete, canEdit, canTransition, isStaffRole, type ItemType, type StaffRole, type WorkflowStatus } from '@/lib/content-workflow';
import { createContent, deleteContent, listContent, moveContent, updateContent, type ContentItem } from '@/lib/admin-client';
import QualityPanel from '@/components/admin/QualityPanel';
import { youtubeIdFrom, safeHttpsUrl } from '@/lib/resource-content';

export type AdminTopic = { id: string; titleHi: string; titleEn: string; category: string; relevance: string };
type AdminRole = StaffRole;
type PipelineItem = ContentItem;
type OptionKey = 'A' | 'B' | 'C' | 'D';
type Lang3 = { en: string; hi: string; pa: string };
const OPTION_KEYS: readonly OptionKey[] = ['A', 'B', 'C', 'D'];
const blank = (): Lang3 => ({ en: '', hi: '', pa: '' });
const blankOptions = (): Record<OptionKey, Lang3> => ({ A: blank(), B: blank(), C: blank(), D: blank() });
/** Only the languages the editor actually filled in are sent. */
const clean = (t: Lang3) => Object.fromEntries((Object.entries(t) as Array<[keyof Lang3, string]>).filter(([, v]) => v.trim()).map(([k, v]) => [k, v.trim()]));
const toLang3 = (value: unknown): Lang3 => {
  const v = (value && typeof value === 'object' ? value : {}) as Partial<Lang3>;
  return { en: v.en ?? '', hi: v.hi ?? '', pa: v.pa ?? '' };
};

/** Shows reviewers exactly what the question contains, including the key, before they approve it. */
function QuestionPreview({ data }: { data: Record<string, unknown> }) {
  const q = data as { question?: { en?: string; hi?: string }; options?: Record<string, { en?: string; hi?: string }>; correct?: string; explanation?: { en?: string; hi?: string }; difficulty?: string };
  if (!q.question || !q.options) return null;
  return (
    <div className="text-[11px] bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 space-y-1">
      <p className="text-slate-100">{q.question.en || q.question.hi}</p>
      {(['A', 'B', 'C', 'D'] as const).map(key => (
        <p key={key} className={q.correct === key ? 'text-emerald-300 font-bold' : 'text-slate-300'}>
          {key}. {q.options?.[key]?.en || q.options?.[key]?.hi}{q.correct === key ? '  ✓ correct' : ''}
        </p>
      ))}
      {q.explanation && <p className="text-slate-400">{q.explanation.en || q.explanation.hi}</p>}
      {q.difficulty && <p className="text-slate-400">Difficulty: {q.difficulty}</p>}
    </div>
  );
}

/** Shows reviewers what students would actually receive, in the same shape the public API serves. */
function ResourcePreview({ item }: { item: ContentItem }) {
  const d = item.data as Record<string, unknown>;
  const box = 'text-[11px] bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 space-y-1';
  if (item.type === 'lesson') {
    const title = d.title as { en?: string; hi?: string; pa?: string } | undefined;
    const body = d.body as { en?: string; hi?: string; pa?: string } | undefined;
    if (!title || !body) return <p className={`${box} text-amber-300`}>This item was saved in an older format and will not be shown to students until it is edited and saved again.</p>;
    return (<div className={box}>
      {(['en', 'hi', 'pa'] as const).filter(l => title[l] || body[l]).map(l => (
        <div key={l}><p className="text-slate-400 uppercase text-xs">{l}</p><p className="text-slate-100 font-semibold">{title[l]}</p><p className="text-slate-300 whitespace-pre-wrap">{body[l]}</p></div>
      ))}
    </div>);
  }
  if (item.type === 'video') {
    const id = youtubeIdFrom(d.youtubeId);
    if (!id) return <p className={`${box} text-amber-300`}>This item was saved in an older format and will not be shown to students until it is edited and saved again.</p>;
    return (<div className={box}>
      <p className="text-slate-100">YouTube video <span className="font-mono">{id}</span>{d.channel ? ` · ${String(d.channel)}` : ''}{d.duration ? ` · ${String(d.duration)}` : ''}</p>
      <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer" className="text-teal-300 underline">Check the video before approving ↗</a>
    </div>);
  }
  if (item.type === 'pdf') {
    const url = safeHttpsUrl(d.url);
    if (!url) return <p className={`${box} text-amber-300`}>This item was saved in an older format and will not be shown to students until it is edited and saved again.</p>;
    return (<div className={box}>
      <p className="text-slate-100 break-all">{url}</p>
      {d.publisher ? <p className="text-slate-400">Publisher: {String(d.publisher)}</p> : null}
      <a href={url} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-300 underline">Open the link before approving ↗</a>
    </div>);
  }
  return null;
}

export default function AdminResourcePortal({ uniqueTopics }: { uniqueTopics: AdminTopic[] }) {
  const { user: verifiedUser, loading: authLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'pipeline' | 'quality' | 'question' | 'lesson' | 'video' | 'pdf'>('pipeline');
  const [successMsg, setSuccessMsg] = useState('');
  
  // Auth & Role Management
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminRole, setAdminRole] = useState<AdminRole>('educator');
  const [loadError, setLoadError] = useState('');
  const [busy, setBusy] = useState(false);

  // Content Pipeline Store
  const [pipeline, setPipeline] = useState<PipelineItem[]>([]);
  const [pipelineFilter, setPipelineFilter] = useState<'all' | WorkflowStatus>('all');

  // Question Form States
  const [qTopic, setQTopic] = useState('punjab-history');
  const [qText, setQText] = useState<Lang3>(blank());
  const [opts, setOpts] = useState<Record<OptionKey, Lang3>>(blankOptions());
  const [correctOpt, setCorrectOpt] = useState<OptionKey>('A');
  const [explanation, setExplanation] = useState<Lang3>(blank());
  // Off: options and explanation are typed once and shown in English and Hindi. On: each language is edited separately.
  const [perLang, setPerLang] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [examTag, setExamTag] = useState('Punjab Master Cadre 2024');

  // Resource form states (lesson, video, document link)
  const [vidTitle, setVidTitle] = useState('');
  const [vidUrl, setVidUrl] = useState('');
  const [vidChannel, setVidChannel] = useState('');
  const [vidDuration, setVidDuration] = useState('');
  const [lessonTitle, setLessonTitle] = useState<Lang3>(blank());
  const [lessonBody, setLessonBody] = useState<Lang3>(blank());
  const [docTitle, setDocTitle] = useState('');
  const [docUrl, setDocUrl] = useState('');
  const [docPublisher, setDocPublisher] = useState('');
  const [resLang, setResLang] = useState<'hi' | 'pa' | 'en'>('hi');
  const [editingType, setEditingType] = useState<ItemType | null>(null);

  // The role comes from the verified session; the pipeline lives in the database, not the browser.
  const trustedRole = verifiedUser?.app_metadata?.role;
  const userId = verifiedUser?.id;
  useEffect(() => {
    if (!userId || !isStaffRole(trustedRole)) return;
    let live = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Adopt the verified identity, then load the server pipeline.
    setIsAdminAuthenticated(true); setAdminRole(trustedRole);
    listContent()
      .then(result => { if (live) { setPipeline(result.items); setAdminRole(result.role); setLoadError(''); } })
      .catch(error => { if (live) setLoadError(error instanceof Error ? error.message : 'Could not load the pipeline.'); });
    return () => { live = false; };
  }, [userId, trustedRole]);

  const flash = (message: string) => { setSuccessMsg(message); setTimeout(() => setSuccessMsg(''), 4000); };
  const fail = (error: unknown) => { setLoadError(error instanceof Error ? error.message : 'Request failed.'); setTimeout(() => setLoadError(''), 6000); };

  // The server re-checks every action; these only hide buttons the caller cannot use.
  const may = (item: PipelineItem, to: WorkflowStatus) =>
    canTransition({ id: userId || '', role: adminRole }, { authorId: item.mine ? userId || '' : 'not-the-viewer', status: item.status }, to);

  // Pipeline Actions
  const handleUpdateStatus = async (id: string, newStatus: WorkflowStatus, note?: string) => {
    if (busy) return;
    setBusy(true);
    try {
      const { item } = await moveContent(id, newStatus, note);
      setPipeline(prev => prev.map(i => i.id === id ? item : i));
      flash(`✅ Item status changed to "${newStatus.toUpperCase()}"!`);
    } catch (error) { fail(error); } finally { setBusy(false); }
  };

  const handleDeletePipelineItem = async (id: string) => {
    if (busy || !confirm('Delete this item permanently?')) return;
    setBusy(true);
    try {
      await deleteContent(id);
      setPipeline(prev => prev.filter(i => i.id !== id));
      flash('🗑️ Item removed from editorial pipeline.');
    } catch (error) { fail(error); } finally { setBusy(false); }
  };

  const submitItem = async (input: Parameters<typeof createContent>[0], reset: () => void, label: string) => {
    if (busy) return;
    setBusy(true);
    try {
      const { item } = await createContent(input);
      setPipeline(prev => [item, ...prev]);
      reset();
      setActiveTab('pipeline');
      flash(`✅ ${label} recorded as "${input.status.toUpperCase()}"!`);
    } catch (error) { fail(error); } finally { setBusy(false); }
  };

  const resetQuestionForm = () => { setQText(blank()); setOpts(blankOptions()); setExplanation(blank()); setCorrectOpt('A'); setPerLang(false); setEditingId(null); setEditingType(null); };

  const questionPayload = () => {
    const shared = (t: Lang3): Lang3 => (perLang ? t : { en: t.en || t.hi, hi: t.en || t.hi, pa: '' });
    const text = clean(qText);
    return {
      title: `${examTag}: ${(qText.hi || qText.en || qText.pa).slice(0, 45)}...`,
      topicId: qTopic,
      data: {
        question: text,
        options: Object.fromEntries(OPTION_KEYS.map(key => [key, clean(shared(opts[key]))])),
        correct: correctOpt, explanation: clean(shared(explanation)), difficulty, examTag,
      },
    };
  };

  // Submit Question
  const handleAddQuestion = (submitStatus: WorkflowStatus) => {
    if (!qText.hi && !qText.en && !qText.pa) return;
    if (submitStatus === 'published' && !confirm('Publish now? Students will see this question as soon as it is saved.')) return;
    void submitItem({ type: 'question', status: submitStatus, ...questionPayload() }, resetQuestionForm, 'Question');
  };

  const startEdit = (item: PipelineItem) => {
    const d = item.data as { question?: unknown; options?: Record<string, unknown>; correct?: string; explanation?: unknown; difficulty?: 'easy' | 'medium' | 'hard'; examTag?: string };
    const nextOpts = blankOptions();
    for (const key of OPTION_KEYS) nextOpts[key] = toLang3(d.options?.[key]);
    const nextExplanation = toLang3(d.explanation);
    // Never collapse text that differs by language into one box: that would overwrite it on save.
    const differs = (t: Lang3) => !!t.pa || (!!t.hi && t.en !== t.hi);
    setQText(toLang3(d.question)); setOpts(nextOpts); setExplanation(nextExplanation);
    setPerLang(OPTION_KEYS.some(key => differs(nextOpts[key])) || differs(nextExplanation));
    setCorrectOpt(OPTION_KEYS.includes(d.correct as OptionKey) ? (d.correct as OptionKey) : 'A');
    setDifficulty(d.difficulty ?? 'medium'); setExamTag(d.examTag ?? ''); setQTopic(item.topicId);
    setEditingId(item.id); setEditingType('question'); setActiveTab('question');
  };

  const saveEdit = async (thenReview: boolean) => {
    if (busy || !editingId) return;
    setBusy(true);
    try {
      let { item } = await updateContent({ id: editingId, ...questionPayload() });
      if (thenReview) item = (await moveContent(editingId, 'review')).item;
      setPipeline(prev => prev.map(i => i.id === item.id ? item : i));
      resetQuestionForm();
      setActiveTab('pipeline');
      flash(thenReview ? '✅ Changes saved and submitted for review.' : '✅ Changes saved.');
    } catch (error) { fail(error); } finally { setBusy(false); }
  };

  const resetResourceForms = () => {
    setVidTitle(''); setVidUrl(''); setVidChannel(''); setVidDuration('');
    setLessonTitle(blank()); setLessonBody(blank());
    setDocTitle(''); setDocUrl(''); setDocPublisher(''); setResLang('hi');
    setEditingId(null); setEditingType(null);
  };

  /** The exact payload for the resource form that is open. The server validates it again. */
  const resourcePayload = (type: 'lesson' | 'video' | 'pdf') => {
    if (type === 'lesson') {
      const title = clean(lessonTitle);
      return { title: (lessonTitle.en || lessonTitle.hi || lessonTitle.pa).slice(0, 200), topicId: qTopic, data: { title, body: clean(lessonBody) } };
    }
    if (type === 'video') return { title: vidTitle, topicId: qTopic, data: { youtubeId: vidUrl, channel: vidChannel, duration: vidDuration, language: resLang } };
    return { title: docTitle, topicId: qTopic, data: { url: docUrl, publisher: docPublisher, language: resLang } };
  };

  const handleAddResource = (type: 'lesson' | 'video' | 'pdf', submitStatus: WorkflowStatus) => {
    const payload = resourcePayload(type);
    if (!payload.title.trim()) return;
    if (submitStatus === 'published' && !confirm('Publish now? Students will see this as soon as it is saved.')) return;
    void submitItem({ type, status: submitStatus, ...payload }, resetResourceForms, type === 'lesson' ? 'Lesson' : type === 'video' ? 'Video' : 'Link');
  };

  const startEditResource = (item: PipelineItem) => {
    const d = item.data as Record<string, unknown>;
    resetResourceForms();
    setQTopic(item.topicId);
    // Items saved before the structured formats existed keep their text so nothing has to be retyped.
    if (item.type === 'lesson') {
      setLessonTitle(d.title ? toLang3(d.title) : { ...blank(), hi: String(d.lessonTitle ?? item.title) });
      setLessonBody(d.body ? toLang3(d.body) : { ...blank(), hi: String(d.lessonContent ?? '') });
    } else if (item.type === 'video') {
      setVidTitle(item.title); setVidUrl(String(d.youtubeId ?? d.vidUrl ?? '')); setVidChannel(String(d.channel ?? d.vidChannel ?? '')); setVidDuration(String(d.duration ?? d.vidDuration ?? ''));
      setResLang(d.language === 'pa' || d.language === 'en' ? d.language : 'hi');
    } else {
      setDocTitle(item.title); setDocUrl(String(d.url ?? '')); setDocPublisher(String(d.publisher ?? ''));
      setResLang(d.language === 'pa' || d.language === 'en' ? d.language : 'hi');
    }
    setEditingId(item.id); setEditingType(item.type);
    setActiveTab(item.type === 'pdf' ? 'pdf' : item.type);
  };

  const saveResourceEdit = async (thenReview: boolean) => {
    if (busy || !editingId || !editingType || editingType === 'question') return;
    setBusy(true);
    try {
      let { item } = await updateContent({ id: editingId, ...resourcePayload(editingType) });
      if (thenReview) item = (await moveContent(editingId, 'review')).item;
      setPipeline(prev => prev.map(i => i.id === item.id ? item : i));
      resetResourceForms();
      setActiveTab('pipeline');
      flash(thenReview ? '✅ Changes saved and submitted for review.' : '✅ Changes saved.');
    } catch (error) { fail(error); } finally { setBusy(false); }
  };

  // Filtered Pipeline Items
  const filteredPipeline = pipelineFilter === 'all' 
    ? pipeline 
    : pipeline.filter(i => i.status === pipelineFilter);

  if (authLoading || !isAdminAuthenticated) return <div className="max-w-xl mx-auto p-6 text-slate-200 space-y-3">
    <h1 className="text-xl font-bold">Educator workspace</h1>
    <p>{authLoading ? 'Checking access…' : verifiedUser ? 'This account does not have educator access. Roles are assigned by an administrator.' : 'Sign in with an educator or administrator account. Access roles must be assigned by the server.'}</p>
    <a href="../login/" className="text-teal-300 underline">Sign in</a>
    <p className="text-sm text-slate-400">Drafts and reviews are stored on the server and every action is checked against your assigned role.</p>
  </div>;

  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-24 text-slate-100 max-w-3xl mx-auto w-full">
      
      {/* Header with Role Badge & Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()} 
            className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck size={20} className="text-teal-400" />
              Publisher & Review Portal
            </h1>
            <p className="text-xs text-slate-400">Editorial Quality Control • Draft &rarr; Review &rarr; Publish Pipeline</p>
          </div>
        </div>

        {/* Role comes from the server and cannot be changed here */}
        <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
          <span className="text-xs text-slate-400 font-bold px-1.5 uppercase">Role:</span>
          <span className={`px-2 py-1 rounded-lg text-xs font-black uppercase ${adminRole === 'educator' ? 'bg-amber-500 text-slate-950' : adminRole === 'reviewer' ? 'bg-indigo-600 text-white' : 'bg-emerald-700 text-white'}`}>
            {adminRole}
          </span>
        </div>
      </div>

      {loadError && (
        <div role="alert" className="bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs p-3.5 rounded-xl">{loadError}</div>
      )}

      {/* Success Notification */}
      {successMsg && (
        <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs p-3.5 rounded-xl flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Primary Category Selector */}
      <div className={`grid ${adminRole === 'educator' ? 'grid-cols-5' : 'grid-cols-3 sm:grid-cols-6'} gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700`}>
        <button 
          onClick={() => setActiveTab('pipeline')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'pipeline' ? 'bg-teal-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <Layers size={14} /> Pipeline ({pipeline.length})
        </button>
        {adminRole !== 'educator' && (
          <button
            onClick={() => setActiveTab('quality')}
            className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'quality' ? 'bg-teal-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            <AlertTriangle size={14} /> Quality
          </button>
        )}
        <button 
          onClick={() => setActiveTab('question')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'question' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <HelpCircle size={14} /> +Question
        </button>
        <button 
          onClick={() => setActiveTab('lesson')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'lesson' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <BookOpen size={14} /> +Lesson
        </button>
        <button 
          onClick={() => setActiveTab('video')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'video' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <Video size={14} /> +Video
        </button>
        <button 
          onClick={() => setActiveTab('pdf')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'pdf' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <FileText size={14} /> +Link
        </button>
      </div>

      {activeTab === 'quality' && adminRole !== 'educator' && <QualityPanel />}

      {/* ================= TAB 0: EDITORIAL PIPELINE & REVIEW QUEUE ================= */}
      {activeTab === 'pipeline' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers size={16} className="text-teal-400" />
                Editorial Review Pipeline
              </h2>
              <p className="text-[11px] text-slate-400">
                Manage questions and notes through mandatory editorial review stages.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700 text-xs">
              {(['all', 'draft', 'review', 'published', 'rejected'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setPipelineFilter(f)}
                  className={`px-2 py-0.5 rounded capitalize font-bold transition ${pipelineFilter === f ? 'bg-slate-700 text-teal-300' : 'text-slate-300'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredPipeline.map(item => {
              const statusColors = {
                draft: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
                review: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
                published: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
                rejected: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
              };

              return (
                <div key={item.id} className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border uppercase ${statusColors[item.status]}`}>
                          {item.status}
                        </span>
                        <span className="text-xs bg-slate-900 text-slate-300 px-2 py-0.5 rounded font-mono">
                          {item.type.toUpperCase()}
                        </span>
                        <span className="text-xs text-teal-400 font-mono truncate">
                          #{item.topicId}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-white leading-snug">{item.title}</h3>
                      <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                        <span>Created by: <strong>{item.author}</strong></span>
                        <span>•</span>
                        <span>{new Date(item.createdAt).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}</span>
                      </div>
                    </div>

                    {canDelete(adminRole) && (
                      <button 
                        onClick={() => handleDeletePipelineItem(item.id)}
                        className="text-slate-400 hover:text-rose-400 p-1"
                        title="Delete item"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {item.type === 'question' ? <QuestionPreview data={item.data} /> : <ResourcePreview item={item} />}

                  {item.reviewedBy && (
                    <div className="text-xs bg-slate-900/60 p-2 rounded-lg border border-slate-800 text-slate-300">
                      <strong>Audit Trail:</strong> Last action by {item.reviewedBy}
                      {item.feedback && <div className="text-amber-300 mt-0.5">Note: {item.feedback}</div>}
                    </div>
                  )}

                  {/* Actions according to Role */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-750 text-xs">
                    {/* Questions can be corrected while they are drafts or were sent back. Withdraw or unpublish first for anything else. */}
                    {canEdit({ id: userId || '', role: adminRole }, { authorId: item.mine ? userId || '' : 'not-the-viewer', status: item.status }) && (
                      <button disabled={busy} onClick={() => (item.type === 'question' ? startEdit(item) : startEditResource(item))} className="bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold px-3 py-1.5 rounded-lg text-[11px] transition">
                        Edit
                      </button>
                    )}

                    {/* Author can pull their own item back from review to keep editing */}
                    {item.status === 'review' && item.mine && may(item, 'draft') && (
                      <button disabled={busy} onClick={() => handleUpdateStatus(item.id, 'draft')} className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-3 py-1.5 rounded-lg text-[11px] transition">
                        Withdraw to draft
                      </button>
                    )}

                    {/* Educator can submit Draft to Review */}
                    {may(item, 'review') && (
                      <button
                        disabled={busy}
                        onClick={() => handleUpdateStatus(item.id, 'review')}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-lg text-[11px] transition"
                      >
                        Submit for Review &rarr;
                      </button>
                    )}

                    {/* Reviewer / Superadmin can Approve or Reject */}
                    {item.status === 'review' && may(item, 'published') && (
                      <>
                        <button
                          onClick={() => handleUpdateStatus(item.id, 'published')}
                          className="bg-emerald-700 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-[11px] transition flex items-center gap-1"
                        >
                          <Check size={13} /> Approve & Publish
                        </button>
                        <button
                          onClick={() => {
                            const note = prompt('Enter editorial revision feedback:');
                            if (note) handleUpdateStatus(item.id, 'rejected', note);
                          }}
                          className="bg-rose-900/60 hover:bg-rose-800 text-rose-200 border border-rose-500/40 font-bold px-3 py-1.5 rounded-lg text-[11px] transition flex items-center gap-1"
                        >
                          <X size={13} /> Request Changes
                        </button>
                      </>
                    )}

                    {/* Superadmin can toggle Published state */}
                    {may(item, 'draft') && item.status === 'published' && (
                      <button
                        onClick={() => handleUpdateStatus(item.id, 'draft', 'Unpublished by administrator')}
                        className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-3 py-1.5 rounded-lg text-[11px] transition"
                      >
                        Unpublish to Draft
                      </button>
                    )}

                    {/* If rejected, educator can send back to draft */}
                    {item.status === 'rejected' && may(item, 'draft') && (
                      <button
                        onClick={() => handleUpdateStatus(item.id, 'draft')}
                        className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-3 py-1.5 rounded-lg text-[11px] transition"
                      >
                        Re-open as Draft
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= TAB 1: ADD / EDIT QUESTION ================= */}
      {activeTab === 'question' && (
        <form onSubmit={(e) => { e.preventDefault(); if (editingId) void saveEdit(false); else handleAddQuestion(adminRole === 'superadmin' ? 'published' : 'review'); }} className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <PlusCircle size={16} className="text-teal-400" />
              {editingId ? 'Edit question' : 'Add Multiple Choice Question (MCQ)'}
            </h2>
            <span className="text-xs text-slate-400 font-mono">Total Topics: {uniqueTopics.length}</span>
          </div>
          {editingId && (
            <div className="flex items-center justify-between gap-2 text-[11px] bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 rounded-lg p-2.5">
              <span>Editing a saved question. Saving keeps its place in the pipeline.</span>
              <button type="button" onClick={() => { resetQuestionForm(); setActiveTab('pipeline'); }} className="underline shrink-0">Cancel</button>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="q-topic" className="text-[11px] text-slate-300 font-semibold block mb-1">Target Topic (All {uniqueTopics.length} Topics)</label>
              <select id="q-topic" value={qTopic} onChange={e => setQTopic(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500 max-h-48">
                {uniqueTopics.map(topic => (
                  <option key={topic.id} value={topic.id}>{topic.titleHi} ({topic.titleEn})</option>
                ))}
                {!uniqueTopics.some(topic => topic.id === qTopic) && <option value={qTopic}>{qTopic}</option>}
              </select>
            </div>
            <div>
              <label htmlFor="q-tag" className="text-[11px] text-slate-300 font-semibold block mb-1">Exam Tag (PYQ / Recruiting Body)</label>
              <input id="q-tag" type="text" value={examTag} onChange={e => setExamTag(e.target.value)} placeholder="e.g. Punjab Master Cadre 2024 / PSSSB Clerk" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500" />
            </div>
          </div>

          <fieldset className="space-y-3">
            <legend className="text-[11px] text-slate-300 font-semibold mb-1">Question statement (at least one of Hindi or English)</legend>
            {([['hi', 'Hindi (हिन्दी)', 'प्रश्न यहाँ टाइप करें...'], ['en', 'English', 'Type the question...'], ['pa', 'Punjabi (ਪੰਜਾਬੀ)', 'ਸਵਾਲ ਇੱਥੇ ਲਿਖੋ...']] as const).map(([lang, label, placeholder]) => (
              <div key={lang}>
                <label htmlFor={`q-text-${lang}`} className="text-[11px] text-slate-400 block mb-1">{label}</label>
                <textarea id={`q-text-${lang}`} rows={2} value={qText[lang]} onChange={e => setQText(prev => ({ ...prev, [lang]: e.target.value }))} placeholder={placeholder} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500 resize-none" />
              </div>
            ))}
          </fieldset>

          <label className="flex items-center gap-2 text-[11px] text-slate-300">
            <input type="checkbox" checked={perLang} onChange={e => setPerLang(e.target.checked)} />
            Write options and explanation separately in Hindi, English and Punjabi
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OPTION_KEYS.map(key => (
              <fieldset key={key} className="space-y-1.5 border border-slate-700/70 rounded-lg p-2.5">
                <legend className="text-[11px] text-slate-300 font-semibold px-1">Option {key}</legend>
                {(perLang ? (['en', 'hi', 'pa'] as const) : (['en'] as const)).map(lang => (
                  <input key={lang} aria-label={`Option ${key}${perLang ? ` (${lang})` : ''}`} type="text" value={opts[key][lang]} placeholder={perLang ? lang.toUpperCase() : 'Shown in every language'}
                    onChange={e => setOpts(prev => ({ ...prev, [key]: { ...prev[key], [lang]: e.target.value } }))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white" />
                ))}
              </fieldset>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="q-correct" className="text-[11px] text-slate-300 font-semibold block mb-1">Correct Answer</label>
              <select id="q-correct" value={correctOpt} onChange={e => setCorrectOpt(e.target.value as OptionKey)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white">
                {OPTION_KEYS.map(key => <option key={key} value={key}>Option {key}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="q-difficulty" className="text-[11px] text-slate-300 font-semibold block mb-1">Difficulty Level</label>
              <select id="q-difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white">
                <option value="easy">Easy (Direct Fact)</option>
                <option value="medium">Medium (Standard)</option>
                <option value="hard">Hard (Conceptual / Deep)</option>
              </select>
            </div>
          </div>

          <fieldset className="space-y-1.5">
            <legend className="text-[11px] text-slate-300 font-semibold mb-1">Detailed Explanation / Rationale</legend>
            {(perLang ? (['en', 'hi', 'pa'] as const) : (['en'] as const)).map(lang => (
              <textarea key={lang} aria-label={`Explanation${perLang ? ` (${lang})` : ''}`} rows={2} value={explanation[lang]} placeholder={perLang ? lang.toUpperCase() : 'Why this option is correct, historical context...'}
                onChange={e => setExplanation(prev => ({ ...prev, [lang]: e.target.value }))}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500 resize-none" />
            ))}
          </fieldset>

          {/* Workflow Submission Options */}
          {editingId ? (
            <div className="flex gap-2 pt-2">
              <button type="button" disabled={busy} onClick={() => void saveEdit(false)} className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-2.5 rounded-xl text-xs transition">Save changes</button>
              <button type="button" disabled={busy} onClick={() => void saveEdit(true)} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs shadow transition">Save and submit for review</button>
            </div>
          ) : (
            <div className="flex gap-2 pt-2">
              <button type="button" onClick={() => handleAddQuestion('draft')} className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-2.5 rounded-xl text-xs transition">
                Save as Draft (कच्चा प्रारूप)
              </button>
              <button type="button" onClick={() => handleAddQuestion('review')} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs shadow transition">
                Submit for Review (समीक्षा हेतु भेजें)
              </button>
              {adminRole === 'superadmin' && (
                <button type="submit" className="flex-1 bg-teal-700 hover:bg-teal-500 text-white font-bold py-2.5 rounded-xl text-xs shadow-lg transition">
                  Publish Directly (प्रकाशित करें)
                </button>
              )}
            </div>
          )}
        </form>
      )}

      {/* ================= RESOURCE FORMS: VIDEO, LINK, LESSON ================= */}
      {(activeTab === 'video' || activeTab === 'pdf' || activeTab === 'lesson') && (() => {
        const type = activeTab === 'video' ? 'video' : activeTab === 'pdf' ? 'pdf' : 'lesson';
        const editing = !!editingId && editingType === type;
        const heading = type === 'video' ? 'YouTube video for a topic' : type === 'pdf' ? 'Link to an official document or study handout' : 'Write a short lesson';
        const hint = type === 'video'
          ? 'Students watch it inside ExamSathi. Only YouTube links are accepted.'
          : type === 'pdf'
            ? 'Students open the link in a new tab. Use the publisher’s own page (for example the recruitment board or NCERT). Files are not uploaded to ExamSathi.'
            : 'Plain text only. A new line starts a new paragraph. Formatting and links are not supported, which keeps the page safe for students.';
        return (
          <form onSubmit={(e) => { e.preventDefault(); if (editing) void saveResourceEdit(false); else handleAddResource(type, adminRole === 'superadmin' ? 'published' : 'review'); }} className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-lg">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              {type === 'video' ? <Video size={16} className="text-teal-400" /> : type === 'pdf' ? <FileText size={16} className="text-teal-400" /> : <BookOpen size={16} className="text-teal-400" />}
              {editing ? 'Edit' : 'Add'}: {heading}
            </h2>
            <p className="text-[11px] text-slate-400">{hint}</p>
            {editing && (
              <div className="flex items-center justify-between gap-2 text-[11px] bg-indigo-950/60 border border-indigo-500/40 text-indigo-200 rounded-lg p-2.5">
                <span>Editing a saved item. Saving keeps its place in the pipeline.</span>
                <button type="button" onClick={() => { resetResourceForms(); setActiveTab('pipeline'); }} className="underline shrink-0">Cancel</button>
              </div>
            )}

            <div>
              <label htmlFor="r-topic" className="text-[11px] text-slate-300 font-semibold block mb-1">Target Topic</label>
              <select id="r-topic" value={qTopic} onChange={e => setQTopic(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500">
                {uniqueTopics.map(topic => (<option key={topic.id} value={topic.id}>{topic.titleHi} ({topic.titleEn})</option>))}
                {!uniqueTopics.some(topic => topic.id === qTopic) && <option value={qTopic}>{qTopic}</option>}
              </select>
            </div>

            {type === 'video' && (<>
              <div>
                <label htmlFor="v-title" className="text-[11px] text-slate-300 font-semibold block mb-1">Video title</label>
                <input id="v-title" type="text" value={vidTitle} onChange={e => setVidTitle(e.target.value)} maxLength={300} placeholder="e.g. Ten Sikh Gurus in one lecture" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500" required />
              </div>
              <div>
                <label htmlFor="v-url" className="text-[11px] text-slate-300 font-semibold block mb-1">YouTube link or video id</label>
                <input id="v-url" type="text" value={vidUrl} onChange={e => setVidUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=… or the 11-character id" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500" required />
                {vidUrl && (youtubeIdFrom(vidUrl)
                  ? <p className="text-[11px] text-emerald-300 mt-1">Video id: <span className="font-mono">{youtubeIdFrom(vidUrl)}</span></p>
                  : <p className="text-[11px] text-amber-300 mt-1">This is not a YouTube link or video id yet.</p>)}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="v-channel" className="text-[11px] text-slate-300 font-semibold block mb-1">Channel (optional)</label>
                  <input id="v-channel" type="text" value={vidChannel} onChange={e => setVidChannel(e.target.value)} maxLength={100} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500" />
                </div>
                <div>
                  <label htmlFor="v-duration" className="text-[11px] text-slate-300 font-semibold block mb-1">Duration (optional)</label>
                  <input id="v-duration" type="text" value={vidDuration} onChange={e => setVidDuration(e.target.value)} maxLength={20} placeholder="1:15:30" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500" />
                </div>
              </div>
            </>)}

            {type === 'pdf' && (<>
              <div>
                <label htmlFor="d-title" className="text-[11px] text-slate-300 font-semibold block mb-1">Title</label>
                <input id="d-title" type="text" value={docTitle} onChange={e => setDocTitle(e.target.value)} maxLength={300} placeholder="e.g. PSEB Class 10 Social Science textbook" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500" required />
              </div>
              <div>
                <label htmlFor="d-url" className="text-[11px] text-slate-300 font-semibold block mb-1">Link (https)</label>
                <input id="d-url" type="url" value={docUrl} onChange={e => setDocUrl(e.target.value)} placeholder="https://…" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500" required />
                {docUrl && !safeHttpsUrl(docUrl) && <p className="text-[11px] text-amber-300 mt-1">Use a public https link. Plain http, IP addresses, localhost and links with a password are not accepted.</p>}
              </div>
              <div>
                <label htmlFor="d-publisher" className="text-[11px] text-slate-300 font-semibold block mb-1">Publisher (optional)</label>
                <input id="d-publisher" type="text" value={docPublisher} onChange={e => setDocPublisher(e.target.value)} maxLength={120} placeholder="e.g. NCERT" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500" />
              </div>
            </>)}

            {type !== 'lesson' && (
              <div>
                <label htmlFor="r-lang" className="text-[11px] text-slate-300 font-semibold block mb-1">Language of the resource</label>
                <select id="r-lang" value={resLang} onChange={e => setResLang(e.target.value as 'hi' | 'pa' | 'en')} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500">
                  <option value="hi">Hindi</option><option value="pa">Punjabi</option><option value="en">English</option>
                </select>
              </div>
            )}

            {type === 'lesson' && (<>
              {([['hi', 'Hindi (हिन्दी)'], ['en', 'English'], ['pa', 'Punjabi (ਪੰਜਾਬੀ)']] as const).map(([lang, label]) => (
                <fieldset key={lang} className="space-y-1.5 border border-slate-700/70 rounded-lg p-2.5">
                  <legend className="text-[11px] text-slate-300 font-semibold px-1">{label}</legend>
                  <input aria-label={`Lesson title (${lang})`} type="text" value={lessonTitle[lang]} maxLength={200} placeholder="Title" onChange={e => setLessonTitle(prev => ({ ...prev, [lang]: e.target.value }))} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500" />
                  <textarea aria-label={`Lesson text (${lang})`} rows={5} value={lessonBody[lang]} maxLength={6000} placeholder="Lesson text" onChange={e => setLessonBody(prev => ({ ...prev, [lang]: e.target.value }))} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500 resize-y" />
                </fieldset>
              ))}
              <p className="text-[11px] text-slate-400">Fill in Hindi or English at least. Students see their own language and fall back to the other.</p>
            </>)}

            <div className="flex gap-2 pt-2">
              {editing ? (<>
                <button type="button" disabled={busy} onClick={() => void saveResourceEdit(false)} className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-2.5 rounded-xl text-xs transition">Save changes</button>
                <button type="button" disabled={busy} onClick={() => void saveResourceEdit(true)} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs transition">Save and submit for review</button>
              </>) : (<>
                <button type="button" onClick={() => handleAddResource(type, 'draft')} className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-2.5 rounded-xl text-xs transition">Save as Draft</button>
                <button type="button" onClick={() => handleAddResource(type, 'review')} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs transition">Submit for Review</button>
                {adminRole === 'superadmin' && (
                  <button type="submit" className="flex-1 bg-teal-700 hover:bg-teal-500 text-white font-bold py-2.5 rounded-xl text-xs transition shadow">Publish Directly</button>
                )}
              </>)}
            </div>
          </form>
        );
      })()}

    </div>
  );
}
