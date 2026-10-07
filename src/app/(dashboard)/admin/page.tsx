'use client';
import { useAuth } from '@/lib/hooks/useAuth';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  PlusCircle, BookOpen, HelpCircle, Video, FileText, CheckCircle2, 
  ArrowLeft, ShieldCheck, UploadCloud, Eye, AlertCircle, Clock, 
  Check, X, Filter, UserCheck, RefreshCw, Layers
} from 'lucide-react';
import { ALL_LESSONS } from '@/lib/data/lessons';

export type AdminRole = 'educator' | 'reviewer' | 'superadmin';
export type WorkflowStatus = 'draft' | 'review' | 'published' | 'rejected';

export interface PipelineItem {
  id: string;
  type: 'question' | 'lesson' | 'video' | 'pdf';
  title: string;
  topicId: string;
  author: string;
  role: AdminRole;
  status: WorkflowStatus;
  createdAt: string;
  reviewedBy?: string;
  feedback?: string;
  data: Record<string, unknown>;
}

const DEFAULT_PIPELINE: PipelineItem[] = [
  {
    id: 'pipe-01',
    type: 'question',
    title: 'Punjab Master Cadre: Battle of Chappar Chiri & Lohgarh Fort (1710)',
    topicId: 'punjab-history',
    author: 'Prof. Harpreet Kaur (Educator)',
    role: 'educator',
    status: 'review',
    createdAt: '2024-03-14 10:30',
    data: {
      questionHi: 'चप्पड़चिड़ी के युद्ध (1710) के पश्चात बाबा बंदा सिंह बहादुर ने प्रथम खालसा राजधानी कहाँ स्थापित की?',
      correctOpt: 'B',
      explanation: 'बंदा सिंह बहादुर ने मुखलिसपुर किले का जीर्णोद्धार कर उसका नाम लोहगढ़ रखा।'
    }
  },
  {
    id: 'pipe-02',
    type: 'lesson',
    title: 'Cognitive Development: Piaget 4 Stages vs Vygotsky Scaffolding',
    topicId: 'child-development-pedagogy',
    author: 'Dr. R. Sharma (Educator)',
    role: 'educator',
    status: 'draft',
    createdAt: '2024-03-14 14:15',
    data: {
      summary: 'Detailed comparative analysis for ETT & PSTET 2024'
    }
  },
  {
    id: 'pipe-03',
    type: 'question',
    title: 'Polity: Art 72 Presidential Pardon Judicial Review Scope',
    topicId: 'fundamental-rights',
    author: 'Adv. Manjit Singh (Senior Reviewer)',
    role: 'reviewer',
    status: 'published',
    createdAt: '2024-03-13 18:00',
    reviewedBy: 'Superadmin (Verified against Epuru Sudhakar 2006)',
    data: {
      questionHi: 'क्या राष्ट्रपति की क्षमादान शक्ति (अनुच्छेद 72) न्यायिक समीक्षा के अधीन है?',
      correctOpt: 'C',
      explanation: 'ईपुरु सुधाकर मामले (2006) के तहत दुर्भावनापूर्ण आधारों पर सीमित न्यायिक समीक्षा संभव है।'
    }
  }
];

export default function AdminResourcePortal() {
  const { user: verifiedUser, loading: authLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'pipeline' | 'question' | 'lesson' | 'video' | 'pdf'>('pipeline');
  const [successMsg, setSuccessMsg] = useState('');
  
  // Auth & Role Management
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminRole, setAdminRole] = useState<AdminRole>('educator');
  const [passkeyInput, setPasskeyInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [adminUser, setAdminUser] = useState('Educator Sathi');

  // Content Pipeline Store
  const [pipeline, setPipeline] = useState<PipelineItem[]>(DEFAULT_PIPELINE);
  const [pipelineFilter, setPipelineFilter] = useState<'all' | WorkflowStatus>('all');
  const [feedbackInput, setFeedbackInput] = useState<Record<string, string>>({});

  // Question Form States
  const [qTopic, setQTopic] = useState('punjab-history');
  const [qTextHi, setQTextHi] = useState('');
  const [qTextEn, setQTextEn] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctOpt, setCorrectOpt] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [explanation, setExplanation] = useState('');
  const [examTag, setExamTag] = useState('Punjab Master Cadre 2024');

  // Video Form States
  const [vidTitle, setVidTitle] = useState('');
  const [vidUrl, setVidUrl] = useState('');
  const [vidChannel, setVidChannel] = useState('');
  const [vidDuration, setVidDuration] = useState('');

  // Lesson Form States
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonContent, setLessonContent] = useState('');

  // Load Pipeline and Session
  useEffect(() => {
    try {
      const savedPipeline = studyStorage.getItem('examsathi_admin_pipeline');
      if (savedPipeline) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate client-only browser data after mount; this bounded effect does not update its own dependencies.
        setPipeline(JSON.parse(savedPipeline));
      }
    } catch {}
  }, []);

  const savePipeline = (updated: PipelineItem[]) => {
    setPipeline(updated);
    try {
      studyStorage.setItem('examsathi_admin_pipeline', JSON.stringify(updated));
    } catch {}
  };

  useEffect(() => {
    const trustedRole = verifiedUser?.app_metadata?.role;
    const allowed = ['educator', 'reviewer', 'superadmin'].includes(trustedRole);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate client-only browser data after mount; this bounded effect does not update its own dependencies.
    setIsAdminAuthenticated(allowed);
    if (allowed) { setAdminRole(trustedRole); setAdminUser(verifiedUser?.email || 'Educator'); }
  }, [verifiedUser]);
  const handleVerifyAdmin = (event: React.FormEvent) => {
    event.preventDefault();
    setAuthError('Administrator access requires a verified account role assigned by the server.');
  };
  const handleSwitchRole = (_role: AdminRole) => { setAuthError('Roles are managed by the server.'); };

  // Pipeline Actions
  const handleUpdateStatus = (id: string, newStatus: WorkflowStatus, note?: string) => {
    const updated = pipeline.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: newStatus,
          reviewedBy: `${adminUser} (${adminRole.toUpperCase()})`,
          feedback: note || item.feedback,
        };
      }
      return item;
    });
    savePipeline(updated);
    setSuccessMsg(`✅ Item status changed to "${newStatus.toUpperCase()}"!`);
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDeletePipelineItem = (id: string) => {
    const updated = pipeline.filter(i => i.id !== id);
    savePipeline(updated);
    setSuccessMsg('🗑️ Item removed from editorial pipeline.');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  // Submit Question
  const handleAddQuestion = (submitStatus: WorkflowStatus) => {
    if (!qTextHi && !qTextEn) return;

    const newItem: PipelineItem = {
      id: `pipe-q-${Date.now()}`,
      type: 'question',
      title: `${examTag}: ${qTextHi.slice(0, 45) || qTextEn.slice(0, 45)}...`,
      topicId: qTopic,
      author: adminUser,
      role: adminRole,
      status: submitStatus,
      createdAt: new Date().toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' }),
      data: {
        topicId: qTopic,
        questionHi: qTextHi,
        questionEn: qTextEn,
        optA, optB, optC, optD,
        correctOpt,
        explanation,
        examTag
      }
    };

    savePipeline([newItem, ...pipeline]);
    setSuccessMsg(`✅ Question recorded as "${submitStatus.toUpperCase()}"!`);
    setQTextHi('');
    setQTextEn('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setExplanation('');
    setActiveTab('pipeline');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  // Submit Video
  const handleAddVideo = (submitStatus: WorkflowStatus) => {
    if (!vidTitle || !vidUrl) return;

    const newItem: PipelineItem = {
      id: `pipe-v-${Date.now()}`,
      type: 'video',
      title: vidTitle,
      topicId: qTopic,
      author: adminUser,
      role: adminRole,
      status: submitStatus,
      createdAt: new Date().toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' }),
      data: {
        vidTitle,
        vidUrl,
        vidChannel,
        vidDuration
      }
    };

    savePipeline([newItem, ...pipeline]);
    setSuccessMsg(`✅ Video recorded as "${submitStatus.toUpperCase()}"!`);
    setVidTitle('');
    setVidUrl('');
    setVidChannel('');
    setVidDuration('');
    setActiveTab('pipeline');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  // Submit Lesson
  const handleAddLesson = (submitStatus: WorkflowStatus) => {
    if (!lessonTitle) return;

    const newItem: PipelineItem = {
      id: `pipe-l-${Date.now()}`,
      type: 'lesson',
      title: lessonTitle,
      topicId: qTopic,
      author: adminUser,
      role: adminRole,
      status: submitStatus,
      createdAt: new Date().toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' }),
      data: {
        lessonTitle,
        lessonContent
      }
    };

    savePipeline([newItem, ...pipeline]);
    setSuccessMsg(`✅ Lesson recorded as "${submitStatus.toUpperCase()}"!`);
    setLessonTitle('');
    setLessonContent('');
    setActiveTab('pipeline');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  // Topic list from ALL_LESSONS
  const topicEntries = Object.entries(ALL_LESSONS).map(([key, lesson]) => ({
    id: lesson.id || key,
    titleHi: lesson.title?.hi || lesson.id,
    titleEn: lesson.title?.en || lesson.id,
    category: lesson.category || 'General',
    relevance: lesson.examRelevance || 'All Exams'
  }));

  // Unique topics by ID
  const uniqueTopics = Array.from(new Map(topicEntries.map(item => [item.id, item])).values());

  // Filtered Pipeline Items
  const filteredPipeline = pipelineFilter === 'all' 
    ? pipeline 
    : pipeline.filter(i => i.status === pipelineFilter);

  if (authLoading || !isAdminAuthenticated) return <div className="max-w-xl mx-auto p-6 text-slate-200 space-y-3">
    <h1 className="text-xl font-bold">Educator workspace</h1>
    <p>{authLoading ? 'Checking access…' : 'Sign in with an educator or administrator account. Access roles must be assigned by the server.'}</p>
    <a href="../login/" className="text-teal-300 underline">Sign in</a>
    <p className="text-sm text-slate-400">This workspace stores local drafts. Publishing to the live question bank requires a reviewed backend workflow.</p>
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

        {/* Role Switcher Pill */}
        <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
          <span className="text-[10px] text-slate-400 font-bold px-1.5 uppercase">Role:</span>
          <button
            onClick={() => handleSwitchRole('educator')}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition ${adminRole === 'educator' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Educator
          </button>
          <button
            onClick={() => handleSwitchRole('reviewer')}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition ${adminRole === 'reviewer' ? 'bg-indigo-600 text-white font-black shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Reviewer
          </button>
          <button
            onClick={() => handleSwitchRole('superadmin')}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition ${adminRole === 'superadmin' ? 'bg-emerald-600 text-white font-black shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Superadmin
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {successMsg && (
        <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs p-3.5 rounded-xl flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Primary Category Selector */}
      <div className="grid grid-cols-5 gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
        <button 
          onClick={() => setActiveTab('pipeline')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'pipeline' ? 'bg-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <Layers size={14} /> Pipeline ({pipeline.length})
        </button>
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
          <FileText size={14} /> Doc/PDF
        </button>
      </div>

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
            <div className="flex gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700 text-[10px]">
              {(['all', 'draft', 'review', 'published', 'rejected'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setPipelineFilter(f)}
                  className={`px-2 py-0.5 rounded capitalize font-bold transition ${pipelineFilter === f ? 'bg-slate-700 text-teal-300' : 'text-slate-400'}`}
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
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase ${statusColors[item.status]}`}>
                          {item.status}
                        </span>
                        <span className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded font-mono">
                          {item.type.toUpperCase()}
                        </span>
                        <span className="text-[10px] text-teal-400 font-mono truncate">
                          #{item.topicId}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-white leading-snug">{item.title}</h3>
                      <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-3">
                        <span>Created by: <strong>{item.author}</strong></span>
                        <span>•</span>
                        <span>{item.createdAt}</span>
                      </div>
                    </div>

                    {adminRole === 'superadmin' && (
                      <button 
                        onClick={() => handleDeletePipelineItem(item.id)}
                        className="text-slate-500 hover:text-rose-400 p-1"
                        title="Delete item"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {item.reviewedBy && (
                    <div className="text-[10px] bg-slate-900/60 p-2 rounded-lg border border-slate-800 text-slate-300">
                      <strong>Audit Trail:</strong> Last action by {item.reviewedBy}
                      {item.feedback && <div className="text-amber-300 mt-0.5">Note: {item.feedback}</div>}
                    </div>
                  )}

                  {/* Actions according to Role */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-750 text-xs">
                    {/* Educator can submit Draft to Review */}
                    {item.status === 'draft' && (
                      <button
                        onClick={() => handleUpdateStatus(item.id, 'review')}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-lg text-[11px] transition"
                      >
                        Submit for Review &rarr;
                      </button>
                    )}

                    {/* Reviewer / Superadmin can Approve or Reject */}
                    {(adminRole === 'reviewer' || adminRole === 'superadmin') && item.status === 'review' && (
                      <>
                        <button
                          onClick={() => handleUpdateStatus(item.id, 'published')}
                          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-[11px] transition flex items-center gap-1"
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
                    {adminRole === 'superadmin' && item.status === 'published' && (
                      <button
                        onClick={() => handleUpdateStatus(item.id, 'draft', 'Unpublished by administrator')}
                        className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-3 py-1.5 rounded-lg text-[11px] transition"
                      >
                        Unpublish to Draft
                      </button>
                    )}

                    {/* If rejected, educator can send back to draft */}
                    {item.status === 'rejected' && (
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

      {/* ================= TAB 1: ADD QUESTION ================= */}
      {activeTab === 'question' && (
        <form onSubmit={(e) => { e.preventDefault(); handleAddQuestion(adminRole === 'superadmin' ? 'published' : 'review'); }} className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <PlusCircle size={16} className="text-teal-400" />
              Add Multiple Choice Question (MCQ)
            </h2>
            <span className="text-[10px] text-slate-400 font-mono">Total Topics: {uniqueTopics.length}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Target Topic (All {uniqueTopics.length} Topics)</label>
              <select 
                value={qTopic} 
                onChange={e => setQTopic(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500 max-h-48"
              >
                {uniqueTopics.map(topic => (
                  <option key={topic.id} value={topic.id}>
                    {topic.titleHi} ({topic.titleEn})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Exam Tag (PYQ / Recruiting Body)</label>
              <input 
                type="text" 
                value={examTag}
                onChange={e => setExamTag(e.target.value)}
                placeholder="e.g. Punjab Master Cadre 2024 / PSSSB Clerk" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">Question Statement (Hindi / Punjabi)</label>
            <textarea 
              rows={2}
              value={qTextHi}
              onChange={e => setQTextHi(e.target.value)}
              placeholder="प्रश्न यहाँ टाइप करें..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500 resize-none"
              required
            />
          </div>

          <div>
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">Question Statement (English)</label>
            <textarea 
              rows={2}
              value={qTextEn}
              onChange={e => setQTextEn(e.target.value)}
              placeholder="Type English translation..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Option A</label>
              <input 
                type="text" 
                value={optA} 
                onChange={e => setOptA(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white" 
                required 
              />
            </div>
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Option B</label>
              <input 
                type="text" 
                value={optB} 
                onChange={e => setOptB(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white" 
                required 
              />
            </div>
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Option C</label>
              <input 
                type="text" 
                value={optC} 
                onChange={e => setOptC(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white" 
                required 
              />
            </div>
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Option D</label>
              <input 
                type="text" 
                value={optD} 
                onChange={e => setOptD(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white" 
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Correct Answer</label>
              <select 
                value={correctOpt}
                onChange={e => setCorrectOpt(e.target.value as 'A' | 'B' | 'C' | 'D')}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white"
              >
                <option value="A">Option A</option>
                <option value="B">Option B</option>
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Difficulty Level</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white">
                <option value="easy">Easy (Direct Fact)</option>
                <option value="medium">Medium (Standard)</option>
                <option value="hard">Hard (Conceptual / Deep)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">Detailed Explanation / Rationale</label>
            <textarea 
              rows={2}
              value={explanation}
              onChange={e => setExplanation(e.target.value)}
              placeholder="Why this option is correct, historical context..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500 resize-none"
            />
          </div>

          {/* Workflow Submission Options */}
          <div className="flex gap-2 pt-2">
            <button 
              type="button"
              onClick={() => handleAddQuestion('draft')}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-2.5 rounded-xl text-xs transition"
            >
              Save as Draft (कच्चा प्रारूप)
            </button>
            <button 
              type="button"
              onClick={() => handleAddQuestion('review')}
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs shadow transition"
            >
              Submit for Review (समीक्षा हेतु भेजें)
            </button>
            {adminRole === 'superadmin' && (
              <button 
                type="submit"
                className="flex-1 bg-teal-600 hover:bg-teal-500 text-white font-bold py-2.5 rounded-xl text-xs shadow-lg transition"
              >
                Publish Directly (प्रकाशित करें)
              </button>
            )}
          </div>
        </form>
      )}

      {/* ================= TAB 2: ADD VIDEO ================= */}
      {activeTab === 'video' && (
        <form onSubmit={(e) => { e.preventDefault(); handleAddVideo(adminRole === 'superadmin' ? 'published' : 'review'); }} className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-lg">
          <h2 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <Video size={16} className="text-teal-400" />
            Curate Open-Source Video Resource (YouTube)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Target Topic</label>
              <select 
                value={qTopic} 
                onChange={e => setQTopic(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500"
              >
                {uniqueTopics.map(topic => (
                  <option key={topic.id} value={topic.id}>
                    {topic.titleHi} ({topic.titleEn})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Video Title</label>
              <input 
                type="text" 
                value={vidTitle}
                onChange={e => setVidTitle(e.target.value)}
                placeholder="e.g. Complete Sikh Gurus History in 1 Shot"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white" 
                required 
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">YouTube Video URL or ID</label>
            <input 
              type="text" 
              value={vidUrl}
              onChange={e => setVidUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=... or 11-char ID"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white" 
              required 
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Channel / Educator</label>
              <input 
                type="text" 
                value={vidChannel}
                onChange={e => setVidChannel(e.target.value)}
                placeholder="e.g. StudyIQ Punjab"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white" 
              />
            </div>
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Duration</label>
              <input 
                type="text" 
                value={vidDuration}
                onChange={e => setVidDuration(e.target.value)}
                placeholder="e.g. 1:15:30"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white" 
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button 
              type="button"
              onClick={() => handleAddVideo('draft')}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-2.5 rounded-xl text-xs transition"
            >
              Save as Draft
            </button>
            <button 
              type="button"
              onClick={() => handleAddVideo('review')}
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs transition"
            >
              Submit for Review
            </button>
            {adminRole === 'superadmin' && (
              <button 
                type="submit"
                className="flex-1 bg-teal-600 hover:bg-teal-500 text-white font-bold py-2.5 rounded-xl text-xs transition shadow"
              >
                Publish Directly
              </button>
            )}
          </div>
        </form>
      )}

      {/* ================= TAB 3: UPLOAD DOCS / PDF ================= */}
      {activeTab === 'pdf' && (
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 text-center space-y-4 shadow-lg">
          <UploadCloud size={40} className="text-teal-400 mx-auto" />
          <div>
            <h3 className="text-white font-bold text-sm">Upload Official Syllabus PDF or Study Handout</h3>
            <p className="text-xs text-slate-400 mt-1">Supports PSSSB Official Notices, NCERT PDF notes, PSEB Chapters</p>
          </div>
          <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 hover:border-teal-500 transition cursor-pointer">
            <span className="text-xs text-slate-400">Click to browse or drag & drop PDF, DOCX file</span>
          </div>
          <button 
            onClick={() => { setSuccessMsg('✅ Document indexed for editorial review pipeline!'); setTimeout(() => setSuccessMsg(''), 4000); }}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
          >
            Submit Document to Pipeline
          </button>
        </div>
      )}

      {/* ================= TAB 4: LESSON WRITER ================= */}
      {activeTab === 'lesson' && (
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 space-y-4 shadow-lg">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <BookOpen size={16} className="text-teal-400" />
            Create or Edit Topic Lesson Content
          </h2>
          <p className="text-xs text-slate-400">Teachers can write structured definitions, memory mnemonics, and summary points.</p>
          
          <div>
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">Target Topic</label>
            <select 
              value={qTopic} 
              onChange={e => setQTopic(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500"
            >
              {uniqueTopics.map(topic => (
                <option key={topic.id} value={topic.id}>
                  {topic.titleHi} ({topic.titleEn})
                </option>
              ))}
            </select>
          </div>

          <input 
            type="text" 
            value={lessonTitle}
            onChange={e => setLessonTitle(e.target.value)}
            placeholder="Lesson Title (e.g. Punjab Geography - 5 Doabs & Rivers)"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white" 
          />
          <textarea 
            rows={6}
            value={lessonContent}
            onChange={e => setLessonContent(e.target.value)}
            placeholder="Type comprehensive lesson in Hindi or Punjabi with bullet points..."
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white resize-none"
          />
          
          <div className="flex gap-2">
            <button 
              type="button"
              onClick={() => handleAddLesson('draft')}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-2.5 rounded-xl text-xs transition"
            >
              Save Draft
            </button>
            <button 
              type="button"
              onClick={() => handleAddLesson('review')}
              className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded-xl text-xs transition"
            >
              Submit for Review
            </button>
            {adminRole === 'superadmin' && (
              <button 
                type="button"
                onClick={() => handleAddLesson('published')}
                className="flex-1 bg-teal-600 hover:bg-teal-500 text-white font-bold py-2.5 rounded-xl text-xs transition"
              >
                Publish Directly
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
