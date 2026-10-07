'use client';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Edit3, Layers, Video, CheckCircle2, HelpCircle, ChevronLeft, ChevronRight, Bookmark, Sparkles, FileText, Download, ExternalLink, ShieldCheck, Target } from 'lucide-react';
import { getLessonByTopicId, Lesson } from '@/lib/data/lessons';
import { getTestQuestions } from '@/lib/data/question_bank_engine';
import { Question } from '@/lib/data/questions';
import FlipCard from '@/components/ui/FlipCard';
import { useStore } from '@/lib/store';
import { awardStudyXP } from '@/lib/study-progress';
import { getCardState, scheduleNextReview, saveCardState, Rating } from '@/lib/fsrs';

export default function LessonView({ topicId }: { topicId: string }) {
  const lesson = getLessonByTopicId(topicId);
  if (!lesson) return <div className="p-6 text-slate-200"><h1 className="text-xl font-bold">Study material is being prepared</h1><p>This topic does not yet have a reviewed lesson. Check the syllabus and official resources.</p><Link href="/syllabus" className="text-teal-300 underline">Browse syllabus coverage</Link></div>;
  return <LessonContent key={topicId} topicId={topicId} lesson={lesson} />;
}
function LessonContent({ topicId, lesson }: { topicId: string; lesson: Lesson }) {
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<'read' | 'docs' | 'cards' | 'practice' | 'video' | 'notes'>('read');
  const { language: lang, setLanguage: setLang, markTopicComplete } = useStore();
  const [cardIndex, setCardIndex] = useState(0);
  const [isReadMarked, setIsReadMarked] = useState(false);
  
  // Interactive Practice State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  
  // Personal Notes State (persisted to LocalStorage)
  const [userNote, setUserNote] = useState('');
  const [savedNotes, setSavedNotes] = useState<Array<{ id: string; text: string; date: string }>>([]);
  const [showContributeModal, setShowContributeModal] = useState(false);
  const [contributeName, setContributeName] = useState('');
  const [contributeSubmitted, setContributeSubmitted] = useState(false);

  const [practiceCount, setPracticeCount] = useState(10);
  const [topicQuestions, setTopicQuestions] = useState(() => getTestQuestions({ topicId, count: 10 }));

  // Load saved notes from LocalStorage on mount
  useEffect(() => {
    try {
      const storageKey = `examsathi_notes_${lesson.id}`;
      const existing = studyStorage.getItem(storageKey);
      if (existing) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate client-only browser data after mount; this bounded effect does not update its own dependencies.
        setSavedNotes(JSON.parse(existing));
      }
      const readStatus = studyStorage.getItem(`examsathi_read_${lesson.id}`);
      if (readStatus === 'true') {
        setIsReadMarked(true);
      }
    } catch {
      // LocalStorage fallback
    }
  }, [lesson.id]);

  const handleSaveNote = () => {
    if (!userNote.trim()) return;
    const newNote = {
      id: Date.now().toString(),
      text: userNote.trim(),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    };
    const updated = [newNote, ...savedNotes];
    setSavedNotes(updated);
    setUserNote('');
    try {
      studyStorage.setItem(`examsathi_notes_${lesson.id}`, JSON.stringify(updated));
    } catch {
      // Fallback
    }
  };

  const handleDeleteNote = (noteId: string) => {
    const updated = savedNotes.filter(n => n.id !== noteId);
    setSavedNotes(updated);
    try {
      studyStorage.setItem(`examsathi_notes_${lesson.id}`, JSON.stringify(updated));
    } catch {
      // Fallback
    }
  };

  const handleMarkAsRead = () => {
    if (isReadMarked) return;
    setIsReadMarked(true);
    markTopicComplete(lesson.id);
    awardStudyXP(`lesson-${lesson.id}`, 50);
    try {
      studyStorage.setItem(`examsathi_read_${lesson.id}`, 'true');
    } catch {
      // Fallback
    }
  };

  const handleOptionSelect = (qId: string, optKey: string) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optKey }));
    setShowExplanation(prev => ({ ...prev, [qId]: true }));
  };

  const currentCards = lesson.flashcards && lesson.flashcards.length > 0 ? lesson.flashcards : [
    {
      q: { hi: 'क्या यह विषय परीक्षा के लिए महत्वपूर्ण है?', pa: 'ਕੀ ਇਹ ਵਿਸ਼ਾ ਇਮਤਿਹਾਨ ਲਈ ਅਹਿਮ ਹੈ?', en: 'Is this topic crucial for examination?' },
      a: { hi: 'हाँ, आधिकारिक पाठ्यक्रम के अनुसार सीधे प्रश्न पूछे जाते हैं।', pa: 'ਹਾਂ, ਅਧਿਕਾਰਤ ਸਿਲੇਬਸ ਮੁਤਾਬਕ ਸਿੱਧੇ ਸਵਾਲ ਪੁੱਛੇ ਜਾਂਦੇ ਹਨ।', en: 'Yes, directly tested per official syllabus.' },
    },
  ];

  const handleRateCard = (rating: Rating) => {
    const cardId = `fc-${lesson.id}-${cardIndex}`;
    const currentState = getCardState(cardId, lesson.id);
    const { nextState } = scheduleNextReview(currentState, rating);
    saveCardState(nextState);
    if (cardIndex < currentCards.length - 1) {
      setCardIndex(prev => prev + 1);
    }
  };

  const currentCardId = `fc-${lesson.id}-${cardIndex}`;
  const currentCardSRS = getCardState(currentCardId, lesson.id);
  const againLabel = scheduleNextReview(currentCardSRS, 1).intervalLabel;
  const hardLabel = scheduleNextReview(currentCardSRS, 2).intervalLabel;
  const goodLabel = scheduleNextReview(currentCardSRS, 3).intervalLabel;
  const easyLabel = scheduleNextReview(currentCardSRS, 4).intervalLabel;

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 pb-20 text-slate-100">
      
      {/* Sticky Top Header */}
      <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-4 pb-0">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <button 
              onClick={() => router.back()} 
              className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition shrink-0"
              aria-label="Back"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="min-w-0">
              <h1 className="text-base font-bold text-white truncate">
                {lesson.title[lang] || lesson.title.hi}
              </h1>
              <p className="text-[11px] text-teal-400 truncate">
                {lesson.estimatedTime || '30 min'} • {lesson.examRelevance}
              </p>
            </div>
          </div>

          {/* 3-Language Toggle Selector */}
          <div className="flex bg-slate-800/90 rounded-lg p-1 border border-slate-700/80 shrink-0">
            <button 
              onClick={() => setLang('hi')} 
              className={`px-2.5 py-1 text-xs font-semibold rounded transition ${lang === 'hi' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              हिंदी
            </button>
            <button 
              onClick={() => setLang('pa')} 
              className={`px-2.5 py-1 text-xs font-semibold rounded transition ${lang === 'pa' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              ਪੰਜਾਬੀ
            </button>
            <button 
              onClick={() => setLang('en')} 
              className={`px-2 py-1 text-xs font-semibold rounded transition ${lang === 'en' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* 6 Tabs: Read | Docs & PDFs | Flip Cards | Mini Mock | Videos | Notes */}
        <div className="flex w-full overflow-x-auto no-scrollbar gap-1 border-b border-slate-800">
          <button 
            onClick={() => setActiveTab('read')} 
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-all shrink-0 ${activeTab === 'read' ? 'border-teal-400 text-teal-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <BookOpen size={14} /> 
            <span>{lang === 'pa' ? 'ਪੜ੍ਹੋ (Read)' : lang === 'hi' ? 'अध्ययन (Read)' : 'Read'}</span>
          </button>

          <button 
            onClick={() => setActiveTab('docs')} 
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-all shrink-0 ${activeTab === 'docs' ? 'border-teal-400 text-teal-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <FileText size={14} /> 
            <span>{lang === 'pa' ? 'ਸਰੋਤ / PDFs' : lang === 'hi' ? 'दस्तावेज / PDFs' : 'Official PDFs'}</span>
            {lesson.documents && lesson.documents.length > 0 && (
              <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                {lesson.documents.length}
              </span>
            )}
          </button>

          <button 
            onClick={() => setActiveTab('cards')} 
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-all shrink-0 ${activeTab === 'cards' ? 'border-teal-400 text-teal-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Layers size={14} /> 
            <span>{lang === 'pa' ? 'ਫਲਿੱਪਕਾਰਡ' : lang === 'hi' ? 'फ्लिपकार्ड' : 'Flip Cards'}</span>
          </button>

          <button 
            onClick={() => setActiveTab('practice')} 
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-all shrink-0 ${activeTab === 'practice' ? 'border-teal-400 text-teal-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <HelpCircle size={14} /> 
            <span>{lang === 'pa' ? 'ਮਿੰਨੀ ਮੌਕ' : lang === 'hi' ? 'मिनी मॉक' : 'Mini Mock'}</span>
          </button>

          <button 
            onClick={() => setActiveTab('video')} 
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-all shrink-0 ${activeTab === 'video' ? 'border-teal-400 text-teal-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Video size={14} /> 
            <span>{lang === 'pa' ? 'ਵੀਡੀਓਜ਼' : lang === 'hi' ? 'वीडियो' : 'Videos'}</span>
          </button>

          <button 
            onClick={() => setActiveTab('notes')} 
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-all shrink-0 ${activeTab === 'notes' ? 'border-teal-400 text-teal-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Edit3 size={14} /> 
            <span>{lang === 'pa' ? 'ਮੇਰੇ ਨੋਟਿਸ' : lang === 'hi' ? 'मेरे नोट्स' : 'My Notes'}</span>
          </button>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="p-4 flex-1 overflow-y-auto max-w-2xl mx-auto w-full">
        
        {/* ================= TAB 1: READ ================= */}
        {activeTab === 'read' && (
          <div className="flex flex-col gap-5">
            
            {/* Official Government Syllabus Banner with Clickable PDF Link */}
            {lesson.syllabusReference && (
              <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-indigo-900/60 border border-indigo-500/40 p-3 rounded-xl flex items-center justify-between text-xs shadow-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                        {lang === 'pa' ? 'ਸਰਕਾਰੀ ਸਿਲੇਬਸ ਨਾਲ ਪ੍ਰਮਾਣਿਤ' : 'आधिकारिक सरकारी पाठ्यक्रम से मैप किया गया'}
                      </span>
                      {lesson.syllabusReference.body && (
                        <span className="text-[10px] bg-indigo-900/60 text-indigo-200 px-1.5 py-0.5 rounded border border-indigo-600/40 font-medium">
                          🏛️ {lesson.syllabusReference.body}
                        </span>
                      )}
                      {lesson.syllabusReference.verifiedOn && (
                        <span className="text-[10px] bg-emerald-950/60 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-600/40 font-medium flex items-center gap-1">
                          <CheckCircle2 size={10} className="text-emerald-400" />
                          Verified on {lesson.syllabusReference.verifiedOn}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-200 font-medium truncate text-xs mt-0.5">
                      {lesson.syllabusReference.title}
                    </p>
                  </div>
                </div>
                <a 
                  href={lesson.syllabusReference.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/50 px-2.5 py-1.5 rounded-lg font-bold text-[11px] flex items-center gap-1 shrink-0 transition"
                >
                  <span>PDF</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}

            {/* Exam Target & Read Status Pill */}
            <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-amber-400 shrink-0" />
                <span className="text-slate-200 font-medium">{lesson.examRelevance}</span>
              </div>
              {isReadMarked && (
                <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> {lang === 'pa' ? 'ਪੂਰਾ ਹੋ ਗਿਆ' : 'पूर्ण'}
                </span>
              )}
            </div>

            {/* Quick Shortcut to Official Documents Tab */}
            {lesson.documents && lesson.documents.length > 0 && (
              <div 
                onClick={() => setActiveTab('docs')}
                className="cursor-pointer bg-teal-950/40 hover:bg-teal-950/60 border border-teal-500/40 p-2.5 rounded-xl flex items-center justify-between text-xs transition"
              >
                <div className="flex items-center gap-2">
                  <FileText size={15} className="text-teal-400" />
                  <span className="text-teal-200 font-medium">
                    {lang === 'pa' ? `ਇਸ ਪਾਠ ਲਈ ${lesson.documents.length} ਅਧਿਕਾਰਤ PSEB/NCERT/NIOS ਕਿਤਾਬਾਂ ਉਪਲਬਧ ਹਨ` : `इस पाठ हेतु ${lesson.documents.length} आधिकारिक PSEB/NCERT/NIOS पुस्तकें उपलब्ध हैं`}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-teal-400 underline">
                  {lang === 'pa' ? 'ਦੇਖੋ →' : 'देखें →'}
                </span>
              </div>
            )}

            {/* Injected Detailed Rich Content */}
            <div 
              className="text-slate-200 leading-relaxed text-sm space-y-4"
              dangerouslySetInnerHTML={{ __html: lesson.content[lang] || lesson.content.hi || lesson.content.en }} 
            />

            {/* Quick Summary Card */}
            {lesson.summary && (
              <div className="bg-blue-950/50 border-l-4 border-blue-500 p-4 rounded-r-xl my-2">
                <h4 className="text-blue-300 font-bold text-sm mb-1.5 flex items-center gap-1.5">
                  <span>📋</span> {lang === 'pa' ? 'ਸੰਖੇਪ (Summary)' : lang === 'hi' ? 'सारांश (Summary)' : 'Topic Summary'}
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {lesson.summary[lang] || lesson.summary.hi || lesson.summary.en}
                </p>
              </div>
            )}

            {/* Key Notes / Mnemonics */}
            {lesson.keyNotes && (
              <div className="bg-gradient-to-br from-amber-950/40 to-slate-900 border border-amber-500/40 rounded-xl p-4 shadow-md">
                <h4 className="text-amber-300 font-bold text-sm mb-3 flex items-center gap-2">
                  <span>🔑</span> {lang === 'pa' ? 'ਯਾਦ ਰੱਖਣ ਯੋਗ ਮੁੱਖ ਤੱਥ (Key Points)' : lang === 'hi' ? 'परीक्षा में याद रखने योग्य तथ्य (Key Points)' : 'Crucial Key Notes'}
                </h4>
                <div className="space-y-2 text-xs text-slate-200">
                  {(lesson.keyNotes[lang] || lesson.keyNotes.hi || lesson.keyNotes.en || []).map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/60">
                      <span className="text-amber-400 font-bold shrink-0">{i + 1}.</span>
                      <p className="leading-relaxed">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommended Standard Books & NCERT references */}
            {lesson.bookRefs && lesson.bookRefs.length > 0 && (
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
                <h4 className="text-teal-300 font-bold text-sm mb-3 flex items-center gap-2">
                  <Bookmark size={15} /> {lang === 'pa' ? 'ਸਿਫ਼ਾਰਿਸ਼ ਕੀਤੀਆਂ ਕਿਤਾਬਾਂ (Book References)' : 'प्रमाणिक संदर्भ पुस्तकें (Recommended Books)'}
                </h4>
                <div className="space-y-2.5">
                  {lesson.bookRefs.map((b, i) => (
                    <div key={i} className="flex items-start justify-between text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/40">
                      <div>
                        <p className="font-semibold text-white">{b.title}</p>
                        <p className="text-slate-400 text-[11px]">{b.author}</p>
                      </div>
                      <span className="text-teal-400 font-medium text-[11px] bg-teal-950/80 px-2 py-0.5 rounded">
                        {b.chapters}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mark as Read CTA */}
            <button 
              onClick={handleMarkAsRead}
              className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${isReadMarked ? 'bg-emerald-700 text-white' : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white'}`}
            >
              <CheckCircle2 size={18} />
              <span>{isReadMarked ? (lang === 'pa' ? 'ਪੜ੍ਹ ਲਿਆ ਗਿਆ (+50 XP)' : 'अध्ययन पूर्ण (+50 XP)') : (lang === 'pa' ? 'ਪੜ੍ਹ ਲਿਆ ਗਿਆ ਮਾਰਕ ਕਰੋ (+50 XP)' : 'Mark as Read & Earn +50 XP')}</span>
            </button>

            {/* Share Lesson */}
            <div className="flex gap-2 mt-2">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `📚 *${lesson.title.hi}*\n\nExamSathi पर मुफ्त पढ़ें (Free Lesson):\n${lesson.summary?.hi?.slice(0, 200) || ''}...\n\n👉 https://satdevkumar021-glitch.github.io/examsathi/lesson/${lesson.topicId}/\n\nAll exams free: ExamSathi 🎓`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-600/40 text-emerald-300 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition"
              >
                📲 Share on WhatsApp
              </a>
              <button
                onClick={() => window.print()}
                className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition"
              >
                🖨️ Print / Save PDF
              </button>
            </div>

            {/* Test Your Level & Practice Banner */}
            <div className="bg-gradient-to-br from-indigo-950/70 via-slate-800 to-teal-950/70 border border-teal-500/40 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-black uppercase text-teal-300 flex items-center gap-1.5">
                  <Target size={14} className="text-teal-400" />
                  <span>{lang === 'pa' ? 'ਆਪਣੀ ਤਿਆਰੀ ਦਾ ਪੱਧਰ ਜਾਂਚੋ' : 'तैयारी का स्तर जाँचें'}</span>
                </span>
                <span className="bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  20-Yr Archive + -0.25 Marking
                </span>
              </div>
              
              <h4 className="text-white font-bold text-sm mb-1.5">
                {lang === 'pa' ? 'ਇਸ ਵਿਸ਼ੇ ਦਾ ਲਾਈਵ ਮੌਕ ਟੈਸਟ ਦਿਓ' : 'इस टॉपिक का लाइव मॉक टेस्ट दें'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {lang === 'pa' 
                  ? `${lesson.examRelevance || 'ਅਧਿਕਾਰਤ ਭਰਤੀ ਪ੍ਰੀਖਿਆ'} ਦੇ ਪੈਟਰਨ ਅਤੇ ਕਠਿਨਾਈ ਪੱਧਰਾਂ (Easy, Moderate, Hard) ਮੁਤਾਬਕ ਆਪਣੀ ਰੈਂਕ ਜਾਂਚੋ।`
                  : `${lesson.examRelevance || 'आधिकारिक भर्ती परीक्षा'} के पैटर्न एवं वास्तविक कठिनाई स्तरों (Easy, Moderate, Hard) पर अपनी तैयारी और मेरिट रैंक चेक करें।`}
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <Link
                  href={`/mock-test/topic-${topicId}`}
                  className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow transition"
                >
                  <Target size={14} />
                  <span>{lang === 'pa' ? 'ਲਾਈਵ ਟੈਸਟ' : 'लाइव टेस्ट'}</span>
                </Link>
                <Link
                  href={`/mock-test/topic-${topicId}?mode=flip`}
                  className="bg-slate-700/80 hover:bg-slate-650 border border-slate-600 text-teal-300 font-bold text-xs py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 transition"
                >
                  <Layers size={14} />
                  <span>{lang === 'pa' ? 'ਫਲਿੱਪ ਕਾਰਡ' : 'फ्लिप कार्ड्स'}</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: OFFICIAL DOCUMENTS & TEXTBOOKS ================= */}
        {activeTab === 'docs' && (
          <div className="flex flex-col gap-4">
            
            <div className="bg-gradient-to-r from-slate-800 to-slate-800/90 border border-slate-700 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-1.5">
                <FileText size={18} className="text-teal-400" />
                <h3 className="text-white font-bold text-sm">
                  {lang === 'pa' ? 'ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਦਸਤਾਵੇਜ਼ ਅਤੇ ਪਾਠ ਪੁਸਤਕਾਂ' : 'आधिकारिक सरकारी दस्तावेज एवं पाठ्यपुस्तकें (Official PDFs)'}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'pa' 
                  ? 'ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ (PSEB), NCERT ਅਤੇ NIOS ਵੱਲੋਂ ਪ੍ਰਮਾਣਿਤ ਮੁਫ਼ਤ ਪੀਡੀਐਫ ਡਾਊਨਲੋਡ ਕਰੋ ਅਤੇ ਸਿੱਧਾ ਅਧਿਐਨ ਕਰੋ।' 
                  : 'पंजाब स्कूल शिक्षा बोर्ड (PSEB), NCERT एवं NIOS द्वारा प्रमाणित आधिकारिक पीडीएफ दस्तावेज सीधे डाउनलोड अथवा ऑनलाइन पढ़ें।'}
              </p>
            </div>

            {/* Official Syllabus Reference Card */}
            {lesson.syllabusReference && (
              <div className="bg-indigo-950/50 border border-indigo-500/50 rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">
                        🏛️ {lesson.syllabusReference.body || 'Official Notification'}
                      </span>
                      {lesson.syllabusReference.verifiedOn && (
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={11} className="text-emerald-400" />
                          Verified on {lesson.syllabusReference.verifiedOn}
                        </span>
                      )}
                    </div>
                    <h4 className="text-white font-bold text-sm">
                      {lesson.syllabusReference.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-1">
                      {lang === 'pa' ? 'ਸਰਕਾਰੀ ਭਰਤੀ ਬੋਰਡ ਵੱਲੋਂ ਜਾਰੀ ਅਸਲ ਸਿਲੇਬਸ' : 'भर्ती बोर्ड द्वारा जारी अधिकृत मूल पाठ्यक्रम'}
                    </p>
                  </div>
                  <a
                    href={lesson.syllabusReference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 shadow shrink-0 transition"
                  >
                    <span>{lang === 'pa' ? 'ਦੇਖੋ' : 'देखें'}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            )}

            {/* List of Official Textbooks & Modules */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
                {lang === 'pa' ? 'ਸੰਬੰਧਿਤ ਪੁਸਤਕਾਂ ਅਤੇ ਅਧਿਆਇ' : 'संबंधित पाठ्य सामग्री एवं मॉड्यूल'} ({lesson.documents?.length || 0})
              </h4>

              {(!lesson.documents || lesson.documents.length === 0) ? (
                <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 text-center text-slate-400 text-xs">
                  {lang === 'pa' ? 'ਕੋਈ ਦਸਤਾਵੇਜ਼ ਨਹੀਂ ਮਿਲਿਆ' : 'इस टॉपिक के लिए अभी अतिरिक्त दस्तावेज लोड हो रहे हैं।'}
                </div>
              ) : (
                lesson.documents.map((doc, dIdx) => (
                  <div key={dIdx} className="bg-slate-800 border border-slate-700/80 rounded-xl p-3.5 flex items-center justify-between gap-3 shadow hover:border-slate-600 transition">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                        <FileText size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] bg-slate-700 text-slate-200 px-2 py-0.5 rounded font-medium">
                            {doc.language}
                          </span>
                          <span className="text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-700/40 px-1.5 py-0.5 rounded uppercase font-bold">
                            {doc.type || 'PDF'}
                          </span>
                        </div>
                        <h5 className="text-white font-semibold text-xs leading-snug truncate">
                          {doc.title}
                        </h5>
                      </div>
                    </div>

                    <a 
                      href={doc.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-700 hover:bg-slate-600 text-teal-300 hover:text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shrink-0 transition"
                      title="Open PDF"
                    >
                      <Download size={13} />
                      <span>{lang === 'pa' ? 'ਖੋਲ੍ਹੋ' : 'खोलें'}</span>
                    </a>
                  </div>
                ))
              )}
            </div>

            {/* Recommended Hardcover Books List */}
            {lesson.bookRefs && lesson.bookRefs.length > 0 && (
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 mt-2">
                <h4 className="text-amber-300 font-bold text-xs mb-3 flex items-center gap-1.5">
                  <Bookmark size={14} />
                  <span>{lang === 'pa' ? 'ਸਿਫਾਰਿਸ਼ ਕੀਤੀਆਂ ਸਟੈਂਡਰਡ ਕਿਤਾਬਾਂ' : 'सत्यापित स्टैंडर्ड किताबें (Physical Reference Books)'}</span>
                </h4>
                <div className="space-y-2">
                  {lesson.bookRefs.map((b, i) => (
                    <div key={i} className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/40 text-xs">
                      <div>
                        <p className="text-white font-medium">{b.title}</p>
                        <p className="text-slate-400 text-[11px]">{b.author}</p>
                      </div>
                      <span className="text-teal-400 text-[11px] font-mono bg-teal-950 px-2 py-0.5 rounded">
                        {b.chapters}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* ================= TAB 3: FLASHCARDS (FLIP CARDS) ================= */}
        {activeTab === 'cards' && (
          <div className="flex flex-col items-center gap-5">
            <div className="w-full flex justify-between items-center text-xs text-slate-400 px-1">
              <span>{lang === 'pa' ? 'ਕਲਿੱਕ ਕਰਕੇ ਉੱਤਰ ਦੇਖੋ' : 'क्लिक करके उत्तर देखें (Flip Card)'}</span>
              <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-teal-400">
                {cardIndex + 1} / {currentCards.length}
              </span>
            </div>
            
            <div className="w-full flex justify-center">
              <FlipCard key={`${lesson.id}-${cardIndex}`}
                question={currentCards[cardIndex]?.q[lang] || currentCards[cardIndex]?.q.hi || currentCards[cardIndex]?.q.en} 
                answer={currentCards[cardIndex]?.a[lang] || currentCards[cardIndex]?.a.hi || currentCards[cardIndex]?.a.en} 
              />
            </div>

            {/* Navigation & Spaced Repetition Buttons */}
            <div className="w-full max-w-sm flex items-center justify-between gap-3 mt-4">
              <button 
                onClick={() => setCardIndex(prev => Math.max(0, prev - 1))}
                disabled={cardIndex === 0}
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 disabled:opacity-40 flex items-center justify-center text-white"
                aria-label="Previous card"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="grid grid-cols-4 gap-2 flex-1">
                <button 
                  onClick={() => handleRateCard(1)}
                  className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 py-2.5 rounded-lg text-xs font-bold text-center transition"
                  title="Needs repetition (< 10m)"
                >
                  Again <br/><span className="text-[9px] font-normal text-slate-300 font-mono">{againLabel}</span>
                </button>
                <button 
                  onClick={() => handleRateCard(2)}
                  className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 py-2.5 rounded-lg text-xs font-bold text-center transition"
                  title="Difficult recall"
                >
                  Hard <br/><span className="text-[9px] font-normal text-slate-300 font-mono">{hardLabel}</span>
                </button>
                <button 
                  onClick={() => handleRateCard(3)}
                  className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 py-2.5 rounded-lg text-xs font-bold text-center transition"
                  title="Correct recall"
                >
                  Good <br/><span className="text-[9px] font-normal text-slate-300 font-mono">{goodLabel}</span>
                </button>
                <button 
                  onClick={() => handleRateCard(4)}
                  className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/40 py-2.5 rounded-lg text-xs font-bold text-center transition"
                  title="Effortless recall"
                >
                  Easy <br/><span className="text-[9px] font-normal text-slate-300 font-mono">{easyLabel}</span>
                </button>
              </div>

              <button 
                onClick={() => setCardIndex(prev => Math.min(currentCards.length - 1, prev + 1))}
                disabled={cardIndex === currentCards.length - 1}
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 disabled:opacity-40 flex items-center justify-center text-white"
                aria-label="Next card"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <p className="text-slate-500 text-[11px] mt-2">
              ⚡ FSRS Spaced Repetition Algorithm enabled
            </p>
          </div>
        )}

        {/* ================= TAB 4: MINI MOCK / PRACTICE ================= */}
        {activeTab === 'practice' && (
          <div className="flex flex-col gap-6">
            <label className="flex items-center gap-3 text-slate-200">Practice set
              <select aria-label="Practice question count" value={practiceCount} onChange={e => { const count = Number(e.target.value); setPracticeCount(count); setTopicQuestions(getTestQuestions({ topicId, count })); setSelectedAnswers({}); setShowExplanation({}); }} className="bg-slate-800 p-2 rounded">
                {[10, 20, 50].map(count => <option key={count} value={count}>{count} questions</option>)}
              </select>
            </label>
            <p className="text-xs text-slate-400">{topicQuestions.length} matching questions available in this set. Short sets stay within this topic.</p>

            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-white font-bold text-sm">
                  {lang === 'pa' ? 'ਅਭਿਆਸ ਪ੍ਰਸ਼ਨ (Topic Practice)' : 'टॉपिक अभ्यास प्रश्न (Practice MCQs)'}
                </h3>
                <p className="text-xs text-slate-400">
                  {topicQuestions.length} {lang === 'pa' ? 'ਸਵਾਲ ਉਪਲਬਧ ਹਨ' : 'महत्वपूर्ण प्रश्न'} • 20-Yr Archive (2004–2024)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/mock-test/topic-${topicId}`}
                  className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow"
                >
                  <Target size={14} />
                  <span>{lang === 'pa' ? 'ਪੂਰਾ ਲਾਈਵ ਟੈਸਟ ਸ਼ੁਰੂ ਕਰੋ' : 'फुल लाइव CBT टेस्ट (-0.25)'}</span>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {topicQuestions.map((q: Question, idx: number) => {
                const isAnswered = Boolean(selectedAnswers[q.id]);
                const chosen = selectedAnswers[q.id];
                const isCorrect = chosen === q.correct;

                return (
                  <div key={q.id} className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-4 shadow-sm">
                    
                    {/* Question Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-teal-400">Q{idx + 1}</span>
                      <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                        {q.examTag}
                      </span>
                    </div>

                    {/* Question Statement */}
                    <p className="text-white font-medium text-sm mb-4 leading-relaxed">
                      {q.question[lang] || q.question.hi || q.question.en}
                    </p>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 gap-2.5">
                      {(['A', 'B', 'C', 'D'] as const).map(optKey => {
                        const optText = q.options[optKey][lang] || q.options[optKey].hi || q.options[optKey].en;
                        
                        let btnStyle = 'bg-slate-900/60 border-slate-700 hover:border-slate-600 text-slate-200';
                        if (isAnswered) {
                          if (optKey === q.correct) {
                            btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                          } else if (chosen === optKey && !isCorrect) {
                            btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                          }
                        }

                        return (
                          <button
                            key={optKey}
                            disabled={isAnswered}
                            onClick={() => handleOptionSelect(q.id, optKey)}
                            className={`w-full text-left p-3 rounded-lg border text-xs flex items-center gap-3 transition-colors ${btnStyle}`}
                          >
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 ${isAnswered && optKey === q.correct ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-300'}`}>
                              {optKey}
                            </span>
                            <span className="flex-1">{optText}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Instant Explanation Box */}
                    {showExplanation[q.id] && (
                      <div className={`mt-3 p-3 rounded-lg text-xs border ${isCorrect ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' : 'bg-rose-950/30 border-rose-500/40 text-slate-300'}`}>
                        <p className="font-bold mb-1">
                          {isCorrect ? '✅ सही उत्तर (Correct!)' : `❌ गलत! सही उत्तर: विकल्प ${q.correct}`}
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                          {q.explanation[lang] || q.explanation.hi || q.explanation.en}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= TAB 5: VIDEOS ================= */}
        {activeTab === 'video' && (
          <div className="flex flex-col gap-4">
            <div className="bg-slate-800/80 border border-slate-700 p-3.5 rounded-xl">
              <h3 className="text-white font-bold text-sm mb-1">
                {lang === 'pa' ? 'ਚੁਣਿੰਦਾ ਵੀਡੀਓ ਲੈਕਚਰ (Curated Video Resources)' : 'सत्यापित वीडियो लेक्चर्स (Curated YouTube Resources)'}
              </h3>
              <p className="text-xs text-slate-400">
                Single Source of Truth: आपको यूट्यूब पर अलग-अलग भटकने की जरूरत नहीं है।
              </p>
            </div>

            {lesson.videos.length === 0 ? (
              <div className="space-y-3">
                <div className="bg-amber-950/40 border border-amber-700/50 rounded-xl p-4">
                  <p className="text-amber-200 text-sm font-bold mb-1">📹 Curated videos for this topic coming soon</p>
                  <p className="text-amber-300/80 text-xs">Meanwhile, use these official free resources:</p>
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'DIKSHA (Govt. of India)', url: 'https://diksha.gov.in', desc: 'Official e-learning content by NCERT & State Boards', emoji: '🏛️' },
                    { name: 'SWAYAM — Free Courses', url: 'https://swayam.gov.in', desc: 'Free certified online courses by IITs and central universities', emoji: '🎓' },
                    { name: 'NCERT Textbooks (Free PDF)', url: 'https://ncert.nic.in/textbook.php', desc: 'Download all NCERT books Class 1-12 for free', emoji: '📚' },
                    { name: 'e-Pathshala (NCERT)', url: 'https://epathshala.nic.in', desc: 'NCERT audio-visual learning resources, all subjects', emoji: '📖' },
                    { name: 'NIOS (Open School)', url: 'https://nios.ac.in', desc: 'National Institute of Open Schooling — free study material', emoji: '🌐' },
                  ].map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-teal-500/50 rounded-xl p-3.5 flex items-start gap-3 transition group"
                    >
                      <span className="text-xl shrink-0">{res.emoji}</span>
                      <div>
                        <p className="text-white font-bold text-xs group-hover:text-teal-300 transition">{res.name}</p>
                        <p className="text-slate-400 text-[11px] mt-0.5">{res.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 text-center pt-1">
                  Found a good video for this topic? <Link href="/contact" className="text-teal-400 underline">Suggest it to us ↗</Link>
                </p>
              </div>
            ) : (
              lesson.videos.map((vid, i) => {
                const ytId = vid.youtubeId || (vid.url?.includes('watch?v=') ? vid.url.split('watch?v=')[1]?.split('&')[0] : undefined);

                return (
                  <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg">
                    {/* YouTube Player Embed */}
                    {ytId && <div className="relative aspect-video w-full bg-black">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1`}
                        title={vid.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>}
                    <div className="p-3.5">
                      {vid.tags && vid.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {vid.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-[10px] px-2 py-0.5 rounded font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h4 className="text-white font-bold text-sm mb-1 line-clamp-2">{vid.title}</h4>
                      <div className="flex justify-between text-slate-400 text-xs">
                        <span>{vid.channel}</span>
                        <span>{vid.duration || 'Full Lecture'}</span>
                      </div>
                      <a
                        href={vid.url || `https://www.youtube.com/watch?v=${ytId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold transition"
                      >
                        <span>▶</span> Watch on YouTube ↗
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* ================= TAB 6: MY NOTES ================= */}
        {activeTab === 'notes' && (
          <div className="flex flex-col gap-4">
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                <Edit3 size={16} className="text-teal-400" />
                <span>{lang === 'pa' ? 'ਇਸ ਵਿਸ਼ੇ ਲਈ ਨਿੱਜੀ ਨੋਟ ਲਿਖੋ' : 'इस टॉपिक के लिए अपने पर्सनल नोट्स बनाएं'}</span>
              </h3>
              <textarea 
                value={userNote}
                onChange={e => setUserNote(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white text-xs h-32 focus:outline-none focus:border-teal-500 placeholder-slate-500 resize-none leading-relaxed" 
                placeholder={lang === 'pa' ? 'ਆਪਣੇ ਨੋਟਿਸ ਇੱਥੇ ਲਿਖੋ ਅਤੇ ਸੇਵ ਕਰੋ...' : 'महत्वपूर्ण बातें, फॉर्मूले या ट्रिक्स यहाँ लिखें...'}
              />
              <div className="flex justify-between items-center mt-3">
                <span className="text-[11px] text-slate-500">Auto-saved to device memory</span>
                <button 
                  onClick={handleSaveNote}
                  disabled={!userNote.trim()}
                  className="bg-teal-600 hover:bg-teal-500 disabled:opacity-40 text-white font-bold px-4 py-2 rounded-lg text-xs transition"
                >
                  Save Note
                </button>
              </div>
            </div>

            {/* Saved Notes List */}
            <div className="space-y-3">
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                {lang === 'pa' ? 'ਸੰਭਾਲੇ ਹੋਏ ਨੋਟਿਸ' : 'सहेजे गए नोट्स'} ({savedNotes.length})
              </h4>
              {savedNotes.length === 0 ? (
                <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 text-center text-slate-500 text-xs">
                  अभी तक कोई नोट नहीं लिखा गया है।
                </div>
              ) : (
                savedNotes.map(n => (
                  <div key={n.id} className="bg-slate-800 border border-slate-700/80 rounded-xl p-3.5 flex justify-between items-start gap-3">
                    <div className="flex-1 text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
                      {n.text}
                      <p className="text-[10px] text-slate-500 mt-2">Saved on: {n.date}</p>
                    </div>
                    <button 
                      onClick={() => handleDeleteNote(n.id)}
                      className="text-slate-500 hover:text-rose-400 text-xs shrink-0 transition"
                      title="Delete Note"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Community Contribution CTA */}
            <div className="bg-gradient-to-br from-teal-950/40 to-indigo-950/40 border border-teal-700/40 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <p className="text-teal-300 font-bold text-sm">Share your notes with all students</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Have great notes on this topic? Contribute them! After our team reviews, your notes will be available to thousands of students preparing for this exam.
                  </p>
                  <button
                    onClick={() => setShowContributeModal(true)}
                    className="mt-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition"
                  >
                    Contribute My Notes 🌟
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Contribution Modal */}
      {showContributeModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-sm p-5">
            {contributeSubmitted ? (
              <div className="text-center py-4">
                <span className="text-4xl block mb-3">🙏</span>
                <h3 className="text-white font-bold text-lg mb-2">Thank you!</h3>
                <p className="text-slate-400 text-sm">Your contribution has been submitted for review. We will notify you when it is published.</p>
                <button
                  onClick={() => { setShowContributeModal(false); setContributeSubmitted(false); }}
                  className="mt-4 bg-teal-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-base">Contribute Your Notes</h3>
                  <button onClick={() => setShowContributeModal(false)} className="text-slate-400 hover:text-white text-xl leading-none">×</button>
                </div>
                <p className="text-slate-400 text-xs mb-3 leading-relaxed">
                  Your saved notes on <strong className="text-teal-300">{lesson.title[lang]}</strong> will be submitted to our editorial team. Once reviewed, they become available to all students.
                </p>
                <div className="mb-3">
                  <label className="text-xs text-slate-400 mb-1 block">Your name or initials (optional, for credit)</label>
                  <input
                    type="text"
                    value={contributeName}
                    onChange={e => setContributeName(e.target.value)}
                    placeholder="e.g. Gurpreet S. (optional)"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-teal-500"
                  />
                </div>
                <div className="bg-slate-800/60 rounded-xl p-3 mb-3 text-xs text-slate-400 border border-slate-700">
                  <p className="font-bold text-slate-300 mb-1">What will be shared:</p>
                  <ul className="space-y-0.5">
                    <li>• Your {savedNotes.length} saved note{savedNotes.length !== 1 ? 's' : ''} on this topic</li>
                    <li>• Topic: {lesson.title.en}</li>
                    <li>• Your name/initials (if provided)</li>
                  </ul>
                  <p className="mt-2 text-[11px] text-slate-500">Your email or personal data is NOT shared.</p>
                </div>
                {savedNotes.length === 0 ? (
                  <p className="text-amber-400 text-xs text-center mb-3">You have no saved notes yet. Write and save some notes first!</p>
                ) : (
                  <button
                    onClick={() => {
                      // In static mode: save to localStorage as a pending submission
                      try {
                        const submissions = JSON.parse(studyStorage.getItem('examsathi_pending_contributions') || '[]');
                        submissions.push({
                          topicId: lesson.topicId,
                          topicTitle: lesson.title.en,
                          notes: savedNotes,
                          creditName: contributeName || 'Anonymous',
                          submittedAt: new Date().toISOString(),
                          status: 'pending',
                        });
                        studyStorage.setItem('examsathi_pending_contributions', JSON.stringify(submissions));
                      } catch {}
                      setContributeSubmitted(true);
                    }}
                    className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 rounded-xl text-sm transition"
                  >
                    Submit for Review ✓
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
