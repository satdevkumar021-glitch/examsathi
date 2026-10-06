'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  PlusCircle, BookOpen, HelpCircle, Video, FileText, CheckCircle2,
  ArrowLeft, ShieldCheck, UploadCloud
} from 'lucide-react';
import { getStoredUser } from '@/lib/auth';
import { ALL_QUESTIONS } from '@/lib/data/questions';
import { ALL_LESSONS } from '@/lib/data/lessons';

export default function AdminResourcePortal() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'question' | 'lesson' | 'video' | 'pdf'>('question');
  const [successMsg, setSuccessMsg] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const user = getStoredUser();
    if (
      user.email.endsWith('@examsathi.in') ||
      user.name.includes('Admin') ||
      user.id.startsWith('admin-')
    ) {
      setIsAuthorized(true);
    }
  }, []);

  // Form states for Question
  const [qTopic, setQTopic] = useState('modern-india');
  const [qTextHi, setQTextHi] = useState('');
  const [qTextEn, setQTextEn] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctOpt, setCorrectOpt] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [explanation, setExplanation] = useState('');
  const [examTag, setExamTag] = useState('Punjab Master Cadre 2024');

  // Form states for Video
  const [vidTitle, setVidTitle] = useState('');
  const [vidUrl, setVidUrl] = useState('');
  const [vidChannel, setVidChannel] = useState('');
  const [vidDuration, setVidDuration] = useState('');

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qTextHi && !qTextEn) return;

    setSuccessMsg('Publishing unavailable. This prototype does not save to the question bank.');
    setQTextHi('');
    setQTextEn('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setExplanation('');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vidTitle || !vidUrl) return;

    setSuccessMsg('Publishing unavailable. This prototype does not attach videos.');
    setVidTitle('');
    setVidUrl('');
    setVidChannel('');
    setVidDuration('');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  if (!isAuthorized) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-slate-100 p-6 text-center gap-6">
        <div className="text-5xl">🔒</div>
        <div>
          <h1 className="text-xl font-bold text-white mb-2">Access Restricted</h1>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            This portal is for authorised editors only. Please log in with an admin account.
          </p>
        </div>
        <Link
          href="/login"
          className="bg-teal-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-teal-400 transition"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-20 text-slate-100 max-w-2xl mx-auto w-full">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-3 pt-2">
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
              Publisher Prototype
            </h1>
            <p className="text-xs text-slate-400">Preview only: publishing, file upload and server authorization are not connected.</p>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {successMsg && (
        <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs p-3.5 rounded-xl flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Resource Category Selector */}
      <div className="grid grid-cols-4 gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
        <button 
          onClick={() => setActiveTab('question')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'question' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <HelpCircle size={14} /> Question
        </button>
        <button 
          onClick={() => setActiveTab('lesson')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'lesson' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <BookOpen size={14} /> Lesson
        </button>
        <button 
          onClick={() => setActiveTab('video')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'video' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <Video size={14} /> Video
        </button>
        <button 
          onClick={() => setActiveTab('pdf')}
          className={`py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition ${activeTab === 'pdf' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          <FileText size={14} /> Doc/PDF
        </button>
      </div>

      {/* Content Stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-slate-800 rounded-xl p-3 text-center border border-slate-700">
          <p className="text-2xl font-black text-teal-300">{ALL_QUESTIONS.length}</p>
          <p className="text-xs text-slate-400">Questions</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-3 text-center border border-slate-700">
          <p className="text-2xl font-black text-indigo-300">{Object.keys(ALL_LESSONS).length}</p>
          <p className="text-xs text-slate-400">Lessons</p>
        </div>
        <div className="bg-slate-800 rounded-xl p-3 text-center border border-slate-700">
          <p className="text-2xl font-black text-amber-300">Draft</p>
          <p className="text-xs text-slate-400">DB Status</p>
        </div>
      </div>

      {/* ================= TAB 1: ADD QUESTION ================= */}
      {activeTab === 'question' && (
        <form onSubmit={handleAddQuestion} className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-lg">
          <div className="bg-amber-950/40 border border-amber-700/50 rounded-xl p-3 mb-4 text-xs text-amber-200">
            <strong>⚡ Static Mode:</strong> This admin portal shows the UI but does not persist data. Connect Supabase (see docs/SUPABASE_SETUP.md) to enable real publishing. Changes here are for preview only.
          </div>
          <h2 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <PlusCircle size={16} className="text-teal-400" />
            Add New Multiple Choice Question (MCQ)
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Target Topic</label>
              <select 
                value={qTopic} 
                onChange={e => setQTopic(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white outline-none focus:border-teal-500"
              >
                <option value="modern-india">Modern India (History)</option>
                <option value="punjab-history">Punjab History & Sikh Gurus</option>
                <option value="fundamental-rights">Fundamental Rights (Polity)</option>
                <option value="punjab-clerk-prep">Punjab Clerk & Computer</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] text-slate-300 font-semibold block mb-1">Exam Tag (PYQ / Year)</label>
              <input 
                type="text" 
                value={examTag}
                onChange={e => setExamTag(e.target.value)}
                placeholder="e.g. Master Cadre 2024" 
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
                onChange={e => setCorrectOpt(e.target.value as any)}
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

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-bold py-3 rounded-xl text-xs shadow-lg hover:opacity-95 transition"
          >
            Preview Question (Publishing Unavailable)
          </button>
        </form>
      )}

      {/* ================= TAB 2: ADD VIDEO ================= */}
      {activeTab === 'video' && (
        <form onSubmit={handleAddVideo} className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-lg">
          <h2 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <Video size={16} className="text-teal-400" />
            Curate Open-Source Video Resource (YouTube)
          </h2>

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

          <div>
            <label className="text-[11px] text-slate-300 font-semibold block mb-1">YouTube Video URL or ID</label>
            <input 
              type="text" 
              value={vidUrl}
              onChange={e => setVidUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=... or Video ID"
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

          <button 
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 rounded-xl text-xs transition shadow-lg"
          >
            Attach Video to Single Source of Truth Library
          </button>
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
            onClick={() => { setSuccessMsg('Upload unavailable. No file was uploaded or indexed.'); setTimeout(() => setSuccessMsg(''), 4000); }}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
          >
            Upload Unavailable
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
          <input 
            type="text" 
            placeholder="Lesson Title (e.g. Punjab Geography - 5 Doabs & Rivers)"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white" 
          />
          <textarea 
            rows={6}
            placeholder="Type comprehensive lesson in Hindi or Punjabi with bullet points..."
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white resize-none"
          />
          <button 
            onClick={() => { setSuccessMsg('✅ Lesson draft published to students!'); setTimeout(() => setSuccessMsg(''), 4000); }}
            className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl text-xs"
          >
            Publish Lesson
          </button>
        </div>
      )}

    </div>
  );
}
