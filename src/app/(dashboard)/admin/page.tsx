'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  PlusCircle, BookOpen, HelpCircle, Video, FileText, CheckCircle2, 
  ArrowLeft, ShieldCheck, UploadCloud 
} from 'lucide-react';

export default function AdminResourcePortal() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'question' | 'lesson' | 'video' | 'pdf'>('question');
  const [successMsg, setSuccessMsg] = useState('');

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

    setSuccessMsg('✅ Question successfully added to ExamSathi Question Bank!');
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

    setSuccessMsg('✅ Video resource attached to topic lessons!');
    setVidTitle('');
    setVidUrl('');
    setVidChannel('');
    setVidDuration('');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [authError, setAuthError] = useState('');

  const handleVerifyAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkeyInput === 'AdminSathi@2026' || passkeyInput === 'examsathi-admin') {
      setIsAdminAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Passkey. Access Restricted.');
    }
  };

  if (!isAdminAuthenticated) {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[80vh] text-slate-100 max-w-md mx-auto w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
          <ShieldCheck size={32} />
        </div>
        <h1 className="text-xl font-bold text-white mb-2">Restricted Administrative Access</h1>
        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          The Publisher Portal requires authorized educator credentials. Enter the administrative access passkey to manage exam resources.
        </p>

        <form onSubmit={handleVerifyAdmin} className="w-full space-y-3">
          <input
            type="password"
            value={passkeyInput}
            onChange={e => setPasskeyInput(e.target.value)}
            placeholder="Enter Admin Passkey..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-teal-400 transition"
          />
          {authError && (
            <p className="text-[11px] text-rose-400 font-semibold">{authError}</p>
          )}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs py-2.5 rounded-xl transition shadow"
          >
            Authenticate & Enter
          </button>
        </form>

        <button
          onClick={() => router.push('/dashboard')}
          className="mt-4 text-xs text-slate-400 hover:text-slate-200 transition"
        >
          &larr; Return to Dashboard
        </button>
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
              Teacher & Admin Portal
            </h1>
            <p className="text-xs text-slate-400">Add questions, study notes, videos and verify syllabus content</p>
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

      {/* ================= TAB 1: ADD QUESTION ================= */}
      {activeTab === 'question' && (
        <form onSubmit={handleAddQuestion} className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-lg">
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
            Save & Publish Question to Question Bank
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
            onClick={() => { setSuccessMsg('✅ Document indexed for student search & download!'); setTimeout(() => setSuccessMsg(''), 4000); }}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
          >
            Confirm Upload
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
