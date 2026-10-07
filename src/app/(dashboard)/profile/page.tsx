'use client';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Settings, 
  LogOut, 
  Award, 
  Flame, 
  User as UserIcon, 
  Bookmark, 
  Trash2, 
  ChevronRight, 
  FileText, 
  Star, 
  Compass, 
  Library, 
  Play, 
  Share2, 
  Layers, 
  CheckCircle2, 
  RotateCw,
  ExternalLink,
  HelpCircle,
  Brain
} from 'lucide-react';
import { 
  getStoredUser, 
  logoutUser, 
  toggleFavoriteQuestion, 
  toggleBookmarkQuestion, 
  AuthUser 
} from '@/lib/auth';
import { getQuestionsByIds, Question } from '@/lib/data/questions';
import { useAuth } from '@/lib/hooks/useAuth';
import { createClient } from '@/lib/supabase/client';
import { isSupabaseConfigured } from '@/lib/supabase/config';

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

interface MockAttempt {
  testTitle?: string;
  completedAt?: string;
  percentage?: number;
  correct?: number;
  total?: number;
}

export default function Profile() {
  const router = useRouter();
  const [logoutError, setLogoutError] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [savedNotes, setSavedNotes] = useState<SavedNoteItem[]>([]);
  const [selectedNote, setSelectedNote] = useState<SavedNoteItem | null>(null);
  const [vaultTab, setVaultTab] = useState<'notes' | 'favorites' | 'bookmarks'>('notes');
  const [favoriteQuestions, setFavoriteQuestions] = useState<Question[]>([]);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Question[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [mockHistory, setMockHistory] = useState<MockAttempt[]>([]);

  const { user: supabaseUser, isGuest, error: sessionError } = useAuth();

  useEffect(() => {
    try {
      const u = getStoredUser();
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate client-only browser data after mount; this bounded effect does not update its own dependencies.
      setUser(u);

      const raw = studyStorage.getItem('examsathi_saved_review_notes');
      if (raw) {
        setSavedNotes(JSON.parse(raw));
      }

      if (u?.favoriteQuestionIds?.length) {
        setFavoriteQuestions(getQuestionsByIds(u.favoriteQuestionIds));
      }
      if (u?.bookmarkedQuestionIds?.length) {
        setBookmarkedQuestions(getQuestionsByIds(u.bookmarkedQuestionIds));
      }

      const historyRaw = studyStorage.getItem('examsathi_mock_history');
      if (historyRaw) {
        setMockHistory(JSON.parse(historyRaw));
      }
    } catch {}
  }, []);

  const handleDeleteNote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = savedNotes.filter(n => n.id !== id);
    setSavedNotes(updated);
    try {
      studyStorage.setItem('examsathi_saved_review_notes', JSON.stringify(updated));
    } catch {}
    if (selectedNote?.id === id) setSelectedNote(null);
  };

  const handleRemoveFavorite = (qId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavoriteQuestion(qId);
    const updatedUser = getStoredUser();
    setUser(updatedUser);
    setFavoriteQuestions(getQuestionsByIds(updatedUser.favoriteQuestionIds || []));
  };

  const handleRemoveBookmark = (qId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmarkQuestion(qId);
    const updatedUser = getStoredUser();
    setUser(updatedUser);
    setBookmarkedQuestions(getQuestionsByIds(updatedUser.bookmarkedQuestionIds || []));
  };

  const handlePracticeQuestions = (qList: Question[]) => {
    if (qList.length === 0) return;
    try {
      sessionStorage.setItem('examsathi_custom_cbt_questions', JSON.stringify(qList));
      sessionStorage.setItem('examsathi_test_config', JSON.stringify({
        topicId: 'ai-custom',
        mode: 'exam',
        count: qList.length,
        timeLimitMinutes: Math.max(5, Math.round(qList.length * 0.9)),
      }));
    } catch {}
    router.push('/mock-test/topic-ai-custom');
  };

  const handleLogout = async () => {
    if (loggingOut) return;
    setLoggingOut(true);
    setLogoutError(null);
    try {
      if (isSupabaseConfigured()) {
        const { error } = await createClient().auth.signOut({ scope: 'local' });
        if (error) throw error;
      }
      logoutUser();
      router.replace('/login');
    } catch {
      setLogoutError('Unable to sign out. Check your connection and try again.');
    } finally {
      setLoggingOut(false);
    }
  };

  const displayName = supabaseUser
    ? (supabaseUser.user_metadata?.full_name || supabaseUser.email)
    : (user?.name || null);
  const displayEmail = supabaseUser ? supabaseUser.email : user?.email;
  const avatarInitial = displayName ? displayName.charAt(0).toUpperCase() : '🎓';

  return (
    <div className="p-4 flex flex-col gap-6 max-w-xl mx-auto w-full pb-24 text-slate-100">
      
      {sessionError && <p role="alert" className="text-amber-200 text-xs">{sessionError}</p>}
      {logoutError && <p role="alert" className="text-amber-200 text-xs">{logoutError}</p>}

      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-white">Profile &amp; Study Vault</h1>
          <p className="text-xs text-slate-400">Personal Performance &amp; Saved Question Bank</p>
        </div>
        <Link 
          href="/login" 
          className="text-xs bg-slate-800 text-teal-300 px-3 py-1.5 rounded-xl border border-slate-700 hover:border-teal-500/50 transition font-semibold"
        >
          Switch Account
        </Link>
      </div>

      {!displayEmail && (
        <div className="bg-amber-950/60 border border-amber-500/40 rounded-2xl p-3.5 text-xs text-amber-200 flex items-center justify-between gap-3 shadow-md">
          <span>You are browsing as a guest. Login to save your progress.</span>
          <Link
            href="/login"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-lg text-xs shrink-0 transition"
          >
            Login
          </Link>
        </div>
      )}

      {/* Avatar & Info */}
      <div className="flex flex-col items-center gap-3 mt-1">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-teal-500 p-1 shadow-lg">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-4 border-slate-900">
            <span className="text-2xl font-black text-teal-300">{avatarInitial}</span>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold text-white">{displayName || 'Aspirant Candidate'}</h2>
          <p className="text-slate-400 text-xs">{displayEmail || 'Guest Student • Register to sync across devices'}</p>
        </div>
        <div className="bg-slate-800 text-teal-400 px-3 py-1 rounded-full text-xs font-semibold border border-slate-700">
          Target: {user?.targetExam ? user.targetExam.toUpperCase().replace('-', ' ') : 'PUNJAB GOVT EXAMS'}
        </div>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-4 gap-2.5 mt-1">
        <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700 flex flex-col items-center justify-center text-center">
          <Flame size={18} className="text-amber-500 mb-0.5" />
          <span className="text-lg font-black text-white">{user?.streak || 0}d</span>
          <span className="text-slate-400 text-[10px] uppercase font-semibold">Streak</span>
        </div>
        <div className="bg-slate-800/90 rounded-xl p-3 border border-slate-700 flex flex-col items-center justify-center text-center">
          <Star size={18} className="text-amber-400 mb-0.5" />
          <span className="text-lg font-black text-white">{favoriteQuestions.length}</span>
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

      {/* XP Progress Bar */}
      {(user?.xp || 0) > 0 && (
        <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              ⭐ Experience Points (XP)
            </span>
            <span className="text-xs font-mono text-white">{user?.xp || 0} XP</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-700"
              style={{ width: `${Math.min(((user?.xp || 0) % 500) / 5, 100)}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            Level {Math.floor((user?.xp || 0) / 500) + 1} — {500 - ((user?.xp || 0) % 500)} XP to next level
          </p>
        </div>
      )}

      {/* Study Vault Interactive Hub (Notes, Starred Favorites, Bookmarks) */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-md flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="text-amber-400" size={18} />
            <h3 className="text-white font-bold text-sm">Study Vault &amp; Saved Questions</h3>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 border-b border-slate-750 pb-2">
          <button
            onClick={() => setVaultTab('notes')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              vaultTab === 'notes'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <FileText size={13} />
            <span>Notes ({savedNotes.length})</span>
          </button>
          <button
            onClick={() => setVaultTab('favorites')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              vaultTab === 'favorites'
                ? 'bg-amber-500 text-slate-950 font-black'
                : 'bg-slate-900 text-amber-300 hover:text-white'
            }`}
          >
            <Star size={13} className={vaultTab === 'favorites' ? 'fill-slate-950' : 'fill-amber-400'} />
            <span>Starred ({favoriteQuestions.length})</span>
          </button>
          <button
            onClick={() => setVaultTab('bookmarks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              vaultTab === 'bookmarks'
                ? 'bg-teal-500 text-slate-950 font-black'
                : 'bg-slate-900 text-teal-300 hover:text-white'
            }`}
          >
            <Bookmark size={13} className={vaultTab === 'bookmarks' ? 'fill-slate-950' : 'fill-teal-400'} />
            <span>Saved Later ({bookmarkedQuestions.length})</span>
          </button>
        </div>

        {/* Tab 1: Saved Notes */}
        {vaultTab === 'notes' && (
          <div>
            {savedNotes.length === 0 ? (
              <div className="bg-slate-900/50 rounded-xl p-6 text-center text-xs text-slate-400 border border-slate-800">
                <p className="mb-1 font-semibold text-slate-300">No explanations saved yet.</p>
                <p className="text-[11px] text-slate-500">
                  When taking CBT mock tests, click <strong>&quot;Save to Notes 📝&quot;</strong> on any question to review it here anytime!
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
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
        )}

        {/* Tab 2: Starred Favorites */}
        {vaultTab === 'favorites' && (
          <div className="space-y-3">
            {favoriteQuestions.length === 0 ? (
              <div className="bg-slate-900/50 rounded-xl p-6 text-center text-xs text-slate-400 border border-slate-800">
                <p className="mb-1 font-semibold text-slate-300">No favorite questions starred yet.</p>
                <p className="text-[11px] text-slate-500">
                  Click the <strong>Star ⭐</strong> icon during test results or practice drills to save high-priority questions here.
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handlePracticeQuestions(favoriteQuestions)}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition"
                >
                  <Play size={14} className="fill-slate-950" />
                  <span>Launch Practice Drill ({favoriteQuestions.length} Starred MCQs)</span>
                </button>

                <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                  {favoriteQuestions.map((q, idx) => (
                    <div 
                      key={q.id}
                      onClick={() => setSelectedQuestionId(selectedQuestionId === q.id ? null : q.id)}
                      className="bg-slate-900/70 hover:bg-slate-900 p-3 rounded-xl border border-slate-800 cursor-pointer transition flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] bg-slate-800 text-amber-300 px-1.5 py-0.5 rounded font-mono font-bold">
                            Q{idx + 1} • {q.examTag}
                          </span>
                        </div>
                        <button 
                          onClick={(e) => handleRemoveFavorite(q.id, e)}
                          className="text-slate-500 hover:text-rose-400 p-1"
                          title="Remove from Favorites"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <h4 className="text-xs font-semibold text-white line-clamp-2">
                        {q.question.hi || q.question.en}
                      </h4>

                      {selectedQuestionId === q.id && (
                        <div className="mt-2 pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-2">
                          <div className="bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/30 text-emerald-300 text-[11px]">
                            <strong>Correct Answer ({q.correct}):</strong> {q.options[q.correct]?.hi || q.options[q.correct]?.en}
                          </div>
                          <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-200 leading-relaxed text-[11px]">
                            <span className="text-amber-400 font-bold block mb-0.5">Explanation:</span>
                            {q.explanation.hi || q.explanation.en}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Tab 3: Bookmarked for Later */}
        {vaultTab === 'bookmarks' && (
          <div className="space-y-3">
            {bookmarkedQuestions.length === 0 ? (
              <div className="bg-slate-900/50 rounded-xl p-6 text-center text-xs text-slate-400 border border-slate-800">
                <p className="mb-1 font-semibold text-slate-300">No questions bookmarked yet.</p>
                <p className="text-[11px] text-slate-500">
                  Bookmark questions during mock tests to create a focused revision list for exam day.
                </p>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handlePracticeQuestions(bookmarkedQuestions)}
                  className="w-full bg-gradient-to-r from-teal-400 to-emerald-500 text-slate-950 font-black py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition"
                >
                  <Play size={14} className="fill-slate-950" />
                  <span>Launch Revision Drill ({bookmarkedQuestions.length} Bookmarked MCQs)</span>
                </button>

                <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                  {bookmarkedQuestions.map((q, idx) => (
                    <div 
                      key={q.id}
                      onClick={() => setSelectedQuestionId(selectedQuestionId === q.id ? null : q.id)}
                      className="bg-slate-900/70 hover:bg-slate-900 p-3 rounded-xl border border-slate-800 cursor-pointer transition flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] bg-slate-800 text-teal-300 px-1.5 py-0.5 rounded font-mono font-bold">
                            Q{idx + 1} • {q.examTag}
                          </span>
                        </div>
                        <button 
                          onClick={(e) => handleRemoveBookmark(q.id, e)}
                          className="text-slate-500 hover:text-rose-400 p-1"
                          title="Remove Bookmark"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <h4 className="text-xs font-semibold text-white line-clamp-2">
                        {q.question.hi || q.question.en}
                      </h4>

                      {selectedQuestionId === q.id && (
                        <div className="mt-2 pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-2">
                          <div className="bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/30 text-emerald-300 text-[11px]">
                            <strong>Correct Answer ({q.correct}):</strong> {q.options[q.correct]?.hi || q.options[q.correct]?.en}
                          </div>
                          <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-200 leading-relaxed text-[11px]">
                            <span className="text-amber-400 font-bold block mb-0.5">Explanation:</span>
                            {q.explanation.hi || q.explanation.en}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Mock Test Performance History */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Award className="text-teal-400" size={18} />
            <h3 className="text-white font-bold text-sm">Recent Mock Test Performance</h3>
          </div>
        </div>
        {mockHistory.length === 0 ? (
          <div className="bg-slate-900/50 rounded-xl p-6 text-center text-xs text-slate-400 border border-slate-800">
            <p className="mb-1">No mock tests taken yet.</p>
            <p className="text-[11px] text-slate-500">
              Complete a 50-question CBT mock test to see your performance history here.
            </p>
            <Link
              href="/mock-test"
              className="mt-3 inline-block bg-teal-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl hover:bg-teal-400 transition"
            >
              Take a Mock Test
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {mockHistory.slice(0, 5).map((attempt, i) => (
              <div key={i} className="bg-slate-900/70 rounded-xl p-3 border border-slate-800 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white truncate">{attempt.testTitle || 'Mock Test'}</p>
                  <p className="text-[10px] text-slate-400">{attempt.completedAt || 'Recently'}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-black text-teal-300">{attempt.percentage || 0}%</p>
                  <p className="text-[10px] text-slate-400">{attempt.correct || 0}/{attempt.total || 0} correct</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* WhatsApp Community & Referral Share Card */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-850 to-teal-950/80 p-4 rounded-2xl border border-emerald-500/40 shadow-lg flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-emerald-500/20 text-emerald-300 rounded-lg">
              <Share2 size={16} />
            </span>
            <h3 className="text-white font-bold text-xs sm:text-sm">Share ExamSathi with Friends &amp; Groups</h3>
          </div>
          <span className="text-[10px] text-emerald-300 font-bold px-2 py-0.5 bg-emerald-500/20 rounded-full border border-emerald-500/30">
            100% Free
          </span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Invite fellow aspirants on WhatsApp to prepare together for Punjab Master Cadre, ETT, Clerk, and REET with 20-year past papers and mock tests.
        </p>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            `🎓 *ExamSathi (परीक्षा साथी · ਪ੍ਰੀਖਿਆ ਸਾਥੀ)* 🇮🇳\n\nपंजाब, राजस्थान और केंद्रीय भर्ती परीक्षाओं (Master Cadre, ETT, Clerk, Police, Patwari, REET, CTET) की तैयारी हेतु ExamSathi:\n\n✨ 50-Question Live CBT Mock Tests with Negative Marking\n✨ Predicted State & Category Merit Rank\n✨ 3D Spaced Repetition Flip Cards & Notes\n✨ हिंदी, ਪੰਜਾਬੀ (Gurmukhi) & English\n\n👉 Platform Link:\nhttps://satdevkumar021-glitch.github.io/examsathi/`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md"
        >
          <span>Share on WhatsApp 📲</span>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <Link href="/ai-generator" className="flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-indigo-400">✨</span>
            <span className="text-slate-200 text-xs font-medium">AI Practice Drill Generator (Notes to MCQs)</span>
          </div>
          <ChevronRight size={16} className="text-slate-500" />
        </Link>
        <Link href="/roadmap" className="flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <div className="flex items-center gap-3">
            <Compass size={18} className="text-indigo-400" />
            <span className="text-slate-200 text-xs font-medium">60-Day Prep Roadmap &amp; Today&apos;s Plan (🧭)</span>
          </div>
          <ChevronRight size={16} className="text-slate-500" />
        </Link>
        <Link href="/library" className="flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <div className="flex items-center gap-3">
            <Library size={18} className="text-teal-400" />
            <span className="text-slate-200 text-xs font-medium">Virtual Study Library &amp; Pomodoro Room (🏛️)</span>
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
        <Link href="/exam-coach" className="flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors">
          <div className="flex items-center gap-3">
            <Brain size={18} className="text-blue-400" />
            <span className="text-slate-200 text-xs font-medium">Exam-Day Coach &amp; Strategy (🎯)</span>
          </div>
          <ChevronRight size={16} className="text-slate-500" />
        </Link>
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('examsathi_open_onboarding'))}
          className="w-full flex items-center justify-between p-4 border-b border-slate-700 hover:bg-slate-750 transition-colors text-teal-300 text-xs text-left"
        >
          <div className="flex items-center gap-3">
            <HelpCircle size={18} className="text-teal-400" />
            <span className="font-semibold text-slate-200">Platform Guidance &amp; Onboarding Tour (मार्गदर्शन 💡)</span>
          </div>
          <ChevronRight size={16} className="text-slate-500" />
        </button>
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full flex items-center gap-3 p-4 hover:bg-slate-750 transition-colors text-rose-400 text-xs text-left"
        >
          <LogOut size={18} />
          <span className="font-medium">Logout / Clear Session</span>
        </button>
      </div>

    </div>
  );
}
