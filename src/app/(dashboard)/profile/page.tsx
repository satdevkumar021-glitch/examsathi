'use client';
import { useState, useEffect } from 'react';
import { Settings, LogOut, Award, Flame, User as UserIcon, Bookmark, Trash2, ChevronRight, FileText, Star, Compass, Library } from 'lucide-react';
import Link from 'next/link';
import { getStoredUser, logoutUser, AuthUser } from '@/lib/auth';

interface SavedNoteItem {
  id: string;
  questionId: string;
  topicId: string;
  title: string;
  explanation: string;
  thought?: string;
  correctOption: string;
  correctText: string;
  examTag?: string;
  year?: number;
  savedAt: string;
}

export default function Profile() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [savedNotes, setSavedNotes] = useState<SavedNoteItem[]>([]);
  const [selectedNote, setSelectedNote] = useState<SavedNoteItem | null>(null);

  useEffect(() => {
    try {
      const u = getStoredUser();
      setUser(u);

      const raw = localStorage.getItem('examsathi_saved_review_notes');
      if (raw) {
        setSavedNotes(JSON.parse(raw));
      }
    } catch {}
  }, []);

  const handleDeleteNote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = savedNotes.filter(n => n.id !== id);
    setSavedNotes(updated);
    try {
      localStorage.setItem('examsathi_saved_review_notes', JSON.stringify(updated));
    } catch {}
    if (selectedNote?.id === id) setSelectedNote(null);
  };

  const handleLogout = () => {
    logoutUser();
    window.location.href = '/login';
  };

  const avatarInitial = user?.name ? user.name.charAt(0).toUpperCase() : '🎓';

  return (
    <div className="p-4 flex flex-col gap-6 max-w-xl mx-auto w-full pb-24 text-slate-100">
      
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-white">Profile & Study Vault</h1>
          <p className="text-xs text-slate-400">Personal Performance & Saved Question Bank</p>
        </div>
        <Link 
          href="/login" 
          className="text-xs bg-slate-800 text-teal-300 px-3 py-1.5 rounded-xl border border-slate-700 hover:border-teal-500/50 transition font-semibold"
        >
          Switch Account
        </Link>
      </div>

      <div className="flex flex-col items-center gap-3 mt-1">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-teal-500 p-1 shadow-lg">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-4 border-slate-900">
            <span className="text-2xl font-black text-teal-300">{avatarInitial}</span>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold text-white">{user?.name || 'Aspirant Candidate'}</h2>
          <p className="text-slate-400 text-xs">{user?.email || 'aspirant@examsathi.in'}</p>
        </div>
        <div className="bg-slate-800 text-teal-400 px-3 py-1 rounded-full text-xs font-semibold border border-slate-700">
          Target: {user?.targetExam ? user.targetExam.toUpperCase().replace('-', ' ') : 'PUNJAB GOVT EXAMS'}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2.5 mt-1">
        <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700 flex flex-col items-center justify-center text-center">
          <Flame size={18} className="text-amber-500 mb-0.5" />
          <span className="text-lg font-black text-white">{user?.streak || 14}d</span>
          <span className="text-slate-400 text-[10px] uppercase font-semibold">Streak</span>
        </div>
        <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700 flex flex-col items-center justify-center text-center">
          <Star size={18} className="text-amber-400 mb-0.5" />
          <span className="text-lg font-black text-white">{user?.favoriteQuestionIds?.length || 0}</span>
          <span className="text-slate-400 text-[10px] uppercase font-semibold">Favorites</span>
        </div>
        <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700 flex flex-col items-center justify-center text-center">
          <FileText size={18} className="text-indigo-400 mb-0.5" />
          <span className="text-lg font-black text-white">{savedNotes.length}</span>
          <span className="text-slate-400 text-[10px] uppercase font-semibold">Notes</span>
        </div>
        <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700 flex flex-col items-center justify-center text-center">
          <Library size={18} className="text-teal-400 mb-0.5" />
          <span className="text-lg font-black text-white">{user?.libraryHours || 0}h</span>
          <span className="text-slate-400 text-[10px] uppercase font-semibold">Library</span>
        </div>
      </div>

      {/* Saved Exam Notes Section */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Bookmark className="text-amber-400" size={18} />
            <h3 className="text-white font-bold text-sm">Saved Question Explanations & Notes</h3>
          </div>
          <span className="text-[11px] text-teal-400 font-bold">{savedNotes.length} Saved</span>
        </div>

        {savedNotes.length === 0 ? (
          <div className="bg-slate-900/50 rounded-xl p-6 text-center text-xs text-slate-400 border border-slate-800">
            <p className="mb-1">No explanations saved yet.</p>
            <p className="text-[11px] text-slate-500">
              When taking CBT mock tests, click <strong>"Save to Notes 📝"</strong> on any question to review it here anytime!
            </p>
          </div>
        ) : (
          <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
            {savedNotes.map(note => (
              <div 
                key={note.id}
                onClick={() => setSelectedNote(selectedNote?.id === note.id ? null : note)}
                className="bg-slate-900/70 hover:bg-slate-900 p-3 rounded-xl border border-slate-800 hover:border-slate-700 cursor-pointer transition flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="text-[9px] bg-slate-800 text-teal-300 px-1.5 py-0.5 rounded font-mono">
                      {note.examTag || 'PYQ'}
                    </span>
                    <span className="text-[10px] text-slate-400">{note.savedAt}</span>
                  </div>
                  <button 
                    onClick={(e) => handleDeleteNote(note.id, e)}
                    className="text-slate-500 hover:text-rose-400 p-1"
                    title="Remove Note"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>

                <h4 className="text-xs font-semibold text-white line-clamp-1">
                  {note.title}
                </h4>

                {/* Expanded Note Details */}
                {selectedNote?.id === note.id && (
                  <div className="mt-2 pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-2">
                    <div className="bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/30 text-emerald-300 text-[11px]">
                      <strong>Correct Answer ({note.correctOption}):</strong> {note.correctText}
                    </div>
                    <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-200 leading-relaxed text-[11px]">
                      <span className="text-amber-400 font-bold block mb-0.5">Explanation:</span>
                      {note.explanation}
                    </div>
                    {note.thought && (
                      <div className="bg-indigo-950/40 p-2.5 rounded-lg border border-indigo-700/40 text-indigo-200 leading-relaxed text-[11px]">
                        <span className="text-teal-300 font-bold block mb-0.5">🧠 Examiner Mindset:</span>
                        {note.thought}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <Link href="/roadmap" className="flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <div className="flex items-center gap-3">
            <Compass size={18} className="text-indigo-400" />
            <span className="text-slate-200 text-xs font-medium">60-Day Prep Roadmap & Today's Plan (🧭)</span>
          </div>
          <ChevronRight size={16} className="text-slate-500" />
        </Link>
        <Link href="/library" className="flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <div className="flex items-center gap-3">
            <Library size={18} className="text-teal-400" />
            <span className="text-slate-200 text-xs font-medium">Virtual Study Library & Pomodoro Room (🏛️)</span>
          </div>
          <ChevronRight size={16} className="text-slate-500" />
        </Link>
        <Link href="/mock-test" className="flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <div className="flex items-center gap-3">
            <Award size={18} className="text-teal-400" />
            <span className="text-slate-200 text-xs font-medium">Take 50 Qs CBT Mock Test</span>
          </div>
          <ChevronRight size={16} className="text-slate-500" />
        </Link>
        <Link href="/dashboard" className="flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <div className="flex items-center gap-3">
            <UserIcon size={18} className="text-indigo-400" />
            <span className="text-slate-200 text-xs font-medium">Dashboard Overview</span>
          </div>
          <ChevronRight size={16} className="text-slate-500" />
        </Link>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-4 hover:bg-slate-750 transition-colors text-rose-400 text-xs text-left"
        >
          <LogOut size={18} />
          <span className="font-medium">Logout / Clear Session</span>
        </button>
      </div>

    </div>
  );
}
