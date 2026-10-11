'use client';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Edit3, Layers, Video, CheckCircle2, HelpCircle, ChevronLeft, ChevronRight, Bookmark, Sparkles, FileText, Download, ExternalLink, ShieldCheck, Target, AlertTriangle, Search, Trash2, Undo2 } from 'lucide-react';
import { getLessonByTopicId, Lesson } from '@/lib/data/lessons';
import { getTestQuestions } from '@/lib/data/question_bank_engine';
import { Question } from '@/lib/data/questions';
import FlipCard from '@/components/ui/FlipCard';
import { useStore } from '@/lib/store';
import { normalizePracticeExamId, practiceExam } from '@/lib/exam-context';
import { awardStudyXP } from '@/lib/study-progress';
import { getCardState, scheduleNextReview, saveCardState, Rating } from '@/lib/fsrs';
import {
  PersonalNote,
  createPersonalNote,
  updatePersonalNote,
  deletePersonalNote,
  restorePersonalNote,
  getPersonalNotes,
  saveNoteDraft,
  getNoteDraft,
  clearNoteDraft,
  exportPersonalNotes,
  migrateLegacyTopicNotes,
} from '@/lib/personal-notes';

export default function LessonView({ topicId }: { topicId: string }) {
  const lesson = getLessonByTopicId(topicId);
  if (!lesson) return <div className="p-6 text-slate-200"><h1 className="text-xl font-bold">Study material is being prepared</h1><p>This topic does not yet have a reviewed lesson. Check the syllabus and official resources.</p><Link href="/syllabus" className="text-teal-300 underline">Browse syllabus coverage</Link></div>;
  return <LessonContent key={topicId} topicId={topicId} lesson={lesson} />;
}
function LessonContent({ topicId, lesson }: { topicId: string; lesson: Lesson }) {
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<'read' | 'docs' | 'cards' | 'practice' | 'video' | 'notes'>('read');
  const { language: lang, setLanguage: setLang, markTopicComplete, selectedExam, setSelectedExam } = useStore();
  const [cardIndex, setCardIndex] = useState(0);
  const [isReadMarked, setIsReadMarked] = useState(false);
  
  // Interactive Practice State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  
  // Personal Notes State
  const [userNote, setUserNote] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editNoteContent, setEditNoteContent] = useState('');
  const [notesSearchQuery, setNotesSearchQuery] = useState('');
  const [personalNotes, setPersonalNotes] = useState<PersonalNote[]>([]);
  const [recentlyDeletedNote, setRecentlyDeletedNote] = useState<PersonalNote | null>(null);
  const [showContributeModal, setShowContributeModal] = useState(false);
  const [contributeName, setContributeName] = useState('');
  const [rightsConfirmed, setRightsConfirmed] = useState(false);
  const [contributeSubmitted, setContributeSubmitted] = useState(false);

  const [practiceCount, setPracticeCount] = useState(10);
  const [effectiveExamId, setEffectiveExamId] = useState<string>('all');
  const [topicQuestions, setTopicQuestions] = useState(() => {
    const storedExam = useStore.getState().selectedExam || undefined;
    const scoped = getTestQuestions({ topicId, examId: storedExam, count: 10 });
    return scoped.length > 0 ? scoped : getTestQuestions({ topicId, count: 10 });
  });

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('exam');
    const resolved = requested ? practiceExam(requested) : undefined;
    const examId = resolved ? normalizePracticeExamId(requested!) : selectedExam || undefined;
    if (resolved && selectedExam !== examId) setSelectedExam(resolved.state, resolved.id);
    const scoped = getTestQuestions({ topicId, examId, count: practiceCount });
    if (scoped.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Recompute bounded practice after preference hydration or a syllabus link changes exam context.
      setTopicQuestions(scoped);
      setEffectiveExamId(examId || 'all');
    } else {
      setTopicQuestions(getTestQuestions({ topicId, count: practiceCount }));
      setEffectiveExamId('all');
    }
    setSelectedAnswers({});
    setShowExplanation({});
  }, [topicId, selectedExam, setSelectedExam, practiceCount]);

  // Load personal notes & draft on mount or when exam/topic changes
  useEffect(() => {
    try {
      migrateLegacyTopicNotes(lesson.id, selectedExam || 'general');
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate client-only browser notes on preference or search change.
      setPersonalNotes(
        getPersonalNotes({
          examId: selectedExam || 'general',
          topicId: lesson.id,
          searchQuery: notesSearchQuery,
        })
      );

      const draft = getNoteDraft(lesson.id, selectedExam || 'general');
      if (draft) {
        setUserNote((prev) => prev || draft);
      }

      const readStatus = studyStorage.getItem(`examsathi_read_${lesson.id}`);
      if (readStatus === 'true') {
        setIsReadMarked(true);
      }
    } catch {
      // LocalStorage fallback
    }
  }, [lesson.id, selectedExam, notesSearchQuery]);

  const handleNoteInputChange = (text: string) => {
    setUserNote(text);
    saveNoteDraft(lesson.id, text, selectedExam || 'general');
  };

  const handleSaveNote = () => {
    if (!userNote.trim()) return;
    createPersonalNote({
      examId: selectedExam || 'general',
      topicId: lesson.id,
      title: `${lesson.title[lang] || lesson.title.en} Note`,
      content: userNote.trim(),
    });
    setPersonalNotes(getPersonalNotes({
      examId: selectedExam || 'general',
      topicId: lesson.id,
      searchQuery: notesSearchQuery,
    }));
    setUserNote('');
    clearNoteDraft(lesson.id, selectedExam || 'general');
  };

  const handleUpdateNote = (id: string) => {
    if (!editNoteContent.trim()) return;
    updatePersonalNote(id, selectedExam || 'general', lesson.id, { content: editNoteContent.trim() });
    setPersonalNotes(getPersonalNotes({
      examId: selectedExam || 'general',
      topicId: lesson.id,
      searchQuery: notesSearchQuery,
    }));
    setEditingNoteId(null);
    setEditNoteContent('');
  };

  const handleDeleteNote = (note: PersonalNote) => {
    deletePersonalNote(note.id, selectedExam || 'general', lesson.id, true);
    setRecentlyDeletedNote(note);
    setPersonalNotes(getPersonalNotes({
      examId: selectedExam || 'general',
      topicId: lesson.id,
      searchQuery: notesSearchQuery,
    }));
  };

  const handleRestoreNote = () => {
    if (!recentlyDeletedNote) return;
    restorePersonalNote(recentlyDeletedNote.id, selectedExam || 'general', lesson.id);
    setRecentlyDeletedNote(null);
    setPersonalNotes(getPersonalNotes({
      examId: selectedExam || 'general',
      topicId: lesson.id,
      searchQuery: notesSearchQuery,
    }));
  };

  const handleExportNotes = (format: 'markdown' | 'txt' | 'json' = 'markdown') => {
    if (personalNotes.length === 0) return;
    const content = exportPersonalNotes(personalNotes, format, lesson.title[lang] || lesson.title.en);
    const mime = format === 'json' ? 'application/json' : 'text/markdown';
    const ext = format === 'json' ? 'json' : format === 'txt' ? 'txt' : 'md';
    const blob = new Blob([content], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lesson.id}-notes.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
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
      
      {lesson.coverageStatus === 'foundation' && <div className="p-3 text-sm text-amber-200 bg-amber-950/30">Foundation module: full official syllabus alignment and independent review are pending. {lesson.availableLanguages?.length === 3 ? 'This lesson includes English, Hindi and Punjabi. It covers the named subtopic, not the full exam syllabus.' : 'Some translations remain in progress; check the available language editions.'}</div>}
      {lesson.availableLanguages && !lesson.availableLanguages.includes(lang) && <p className="p-3 text-sm text-amber-200">Translation pending. This module is available in {lesson.availableLanguages.join(', ')}.</p>}
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
                    {lang === 'pa' ? `ਇਸ ਪਾਠ ਲਈ ${lesson.documents.length} ਪਾਠ ਪੁਸਤਕ ਅਤੇ ਸਹਾਇਕ ਸਰੋਤਾਂ ਦੇ ਲਿੰਕ` : lang === 'en' ? `${lesson.documents.length} textbook and supplementary resource links for this lesson` : `इस पाठ हेतु ${lesson.documents.length} पाठ्यपुस्तक और सहायक संसाधन लिंक`}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-teal-400 underline">
                  {lang === 'pa' ? 'ਦੇਖੋ →' : 'देखें →'}
                </span>
              </div>
            )}

            {/* Topic Prerequisites & Learning Objectives */}
            {(lesson.prerequisites || lesson.learningObjectives) && (
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 shadow-md space-y-3.5">
                {lesson.prerequisites && (
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                      <BookOpen size={14} />
                      <span>{lang === 'pa' ? 'ਪੂਰਵ-ਲੋੜਾਂ (Prerequisites)' : lang === 'hi' ? 'पूर्वापेक्षाएं (Prerequisites)' : 'Prerequisites'}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {(lesson.prerequisites[lang] || lesson.prerequisites.hi || lesson.prerequisites.en || []).map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
                          <span className="text-indigo-400 font-bold text-xs shrink-0">•</span>
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {lesson.learningObjectives && (
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
                      <Target size={14} />
                      <span>{lang === 'pa' ? 'ਸਿੱਖਣ ਦੇ ਟੀਚੇ (Learning Objectives)' : lang === 'hi' ? 'अध्ययन के उद्देश्य (Learning Objectives)' : 'Learning Objectives'}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {(lesson.learningObjectives[lang] || lesson.learningObjectives.hi || lesson.learningObjectives.en || []).map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
                          <CheckCircle2 size={13} className="text-teal-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Injected Detailed Rich Content */}
            <div 
              className="text-slate-200 leading-relaxed text-sm space-y-4"
              dangerouslySetInnerHTML={{ __html: lesson.content[lang] || lesson.content.hi || lesson.content.en }} 
            />

            {/* Worked Examples & Step-by-Step Solutions */}
            {lesson.workedExamples && lesson.workedExamples.length > 0 && (
              <div className="space-y-4 my-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-teal-400" />
                    <h3 className="text-white font-bold text-sm">
                      {lang === 'pa' ? 'ਹੱਲ ਕੀਤੀਆਂ ਉਦਾਹਰਣਾਂ (Worked Examples)' : lang === 'hi' ? 'हल किए गए उदाहरण (Worked Examples)' : 'Step-by-Step Worked Examples'}
                    </h3>
                  </div>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full font-mono font-bold">
                    {lesson.workedExamples.length} {lang === 'pa' ? 'ਉਦਾਹਰਣਾਂ' : 'उदा.'}
                  </span>
                </div>

                <div className="space-y-3.5">
                  {lesson.workedExamples.map((ex, exIdx) => (
                    <div key={exIdx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 space-y-3 shadow-md">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold flex items-center justify-center shrink-0">
                          {exIdx + 1}
                        </span>
                        <h4 className="text-white font-semibold text-xs leading-snug">
                          {ex.title[lang] || ex.title.hi || ex.title.en}
                        </h4>
                      </div>

                      {/* Problem Statement */}
                      <div className="bg-slate-900/70 border border-slate-800 p-3 rounded-xl text-xs text-slate-200 leading-relaxed">
                        <span className="text-slate-400 font-bold block mb-1 uppercase text-[10px] tracking-wider">
                          {lang === 'pa' ? 'ਪ੍ਰਸ਼ਨ / ਸਵਾਲ' : lang === 'hi' ? 'प्रश्न / समस्या' : 'Problem Statement'}
                        </span>
                        <p>{ex.problem[lang] || ex.problem.hi || ex.problem.en}</p>
                      </div>

                      {/* Step-by-step reasoning */}
                      <div className="space-y-2 text-xs">
                        <span className="text-indigo-300 font-bold block uppercase text-[10px] tracking-wider">
                          {lang === 'pa' ? 'ਕਦਮ-ਦਰ-ਕਦਮ ਹੱਲ' : lang === 'hi' ? 'चरणबद्ध समाधान' : 'Step-by-Step Solution'}
                        </span>
                        {(ex.steps[lang] || ex.steps.hi || ex.steps.en || []).map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800 text-slate-300">
                            <span className="text-indigo-400 font-mono font-bold text-[11px] shrink-0 mt-0.5">
                              {sIdx + 1}.
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>

                      {/* Final Solution */}
                      <div className="bg-emerald-950/40 border border-emerald-500/40 p-2.5 rounded-xl text-xs flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-emerald-300 font-bold block text-[10px] uppercase">
                            {lang === 'pa' ? 'ਸਹੀ ਉੱਤਰ / ਨਤੀਜਾ' : lang === 'hi' ? 'अंतिम उत्तर' : 'Final Solution'}
                          </span>
                          <span className="text-slate-200 font-medium">
                            {ex.solution[lang] || ex.solution.hi || ex.solution.en}
                          </span>
                        </div>
                      </div>

                      {/* Takeaway / Mnemonic */}
                      {ex.takeaway && (
                        <div className="bg-amber-950/30 border border-amber-500/30 p-2.5 rounded-xl text-xs flex items-start gap-2">
                          <span className="text-amber-400 text-xs shrink-0">💡</span>
                          <div>
                            <span className="text-amber-300 font-bold block text-[10px] uppercase">
                              {lang === 'pa' ? 'ਮੁੱਖ ਸਿੱਖਿਆ' : lang === 'hi' ? 'परीक्षा में याद रखने योग्य' : 'Exam Takeaway'}
                            </span>
                            <span className="text-slate-300">
                              {ex.takeaway[lang] || ex.takeaway.hi || ex.takeaway.en}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Misconceptions & Traps */}
            {lesson.commonMisconceptions && lesson.commonMisconceptions.length > 0 && (
              <div className="space-y-3.5 my-2">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                  <AlertTriangle size={16} className="text-amber-400" />
                  <h3 className="text-white font-bold text-sm">
                    {lang === 'pa' ? 'ਆਮ ਭੁਲੇਖੇ ਅਤੇ ਸੁਧਾਰ (Common Misconceptions)' : lang === 'hi' ? 'सामान्य भ्रांतियां एवं प्रामाणिक तथ्य' : 'Common Misconceptions & Traps'}
                  </h3>
                </div>

                <div className="space-y-3">
                  {lesson.commonMisconceptions.map((misc, mIdx) => (
                    <div key={mIdx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3.5 space-y-2.5 shadow-md">
                      {/* Misconception */}
                      <div className="bg-rose-950/40 border border-rose-500/40 p-2.5 rounded-xl text-xs flex items-start gap-2 text-rose-200">
                        <span className="shrink-0 font-bold">❌</span>
                        <div>
                          <span className="font-bold text-[10px] uppercase text-rose-400 block">
                            {lang === 'pa' ? 'ਭੁਲੇਖਾ (Misconception)' : lang === 'hi' ? 'भ्रांति (Misconception)' : 'Misconception'}
                          </span>
                          <p className="leading-relaxed">{misc.misconception[lang] || misc.misconception.hi || misc.misconception.en}</p>
                        </div>
                      </div>

                      {/* Verified Correction */}
                      <div className="bg-emerald-950/40 border border-emerald-500/40 p-2.5 rounded-xl text-xs flex items-start gap-2 text-emerald-200">
                        <span className="shrink-0 font-bold">✅</span>
                        <div>
                          <span className="font-bold text-[10px] uppercase text-emerald-400 block">
                            {lang === 'pa' ? 'ਪ੍ਰਮਾਣਿਤ ਤੱਥ (Verified Fact)' : lang === 'hi' ? 'सत्यापित तथ्य (Verified Fact)' : 'Verified Correction'}
                          </span>
                          <p className="leading-relaxed">{misc.correction[lang] || misc.correction.hi || misc.correction.en}</p>
                        </div>
                      </div>

                      {/* Why It Matters */}
                      {misc.whyItMatters && (
                        <div className="bg-indigo-950/30 border border-indigo-500/30 p-2.5 rounded-xl text-xs flex items-start gap-2 text-slate-300">
                          <span className="shrink-0 text-indigo-400 font-bold text-xs">🎯</span>
                          <div>
                            <span className="font-bold text-[10px] uppercase text-indigo-300 block">
                              {lang === 'pa' ? 'ਪ੍ਰੀਖਿਆ ਲਈ ਮਹੱਤਵ' : lang === 'hi' ? 'परीक्षा में महत्व' : 'Why it Matters in Exams'}
                            </span>
                            <p className="leading-relaxed">{misc.whyItMatters[lang] || misc.whyItMatters.hi || misc.whyItMatters.en}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

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

            {/* Quick Revision Sheet */}
            {lesson.quickRevisionSheet && (
              <div className="bg-gradient-to-br from-indigo-950/50 via-slate-900 to-slate-900 border border-indigo-500/40 rounded-2xl p-4 shadow-xl space-y-4 my-2">
                <div className="flex items-center gap-2 border-b border-indigo-500/30 pb-2">
                  <Layers size={16} className="text-indigo-400" />
                  <div>
                    <h3 className="text-white font-bold text-sm">
                      {lang === 'pa' ? 'ਤੁਰੰਤ ਦੁਹਰਾਈ ਸ਼ੀਟ (Quick Revision Sheet)' : lang === 'hi' ? 'क्विक रिवीजन शीट (High-Yield Sheet)' : 'Quick Revision Sheet'}
                    </h3>
                    <p className="text-[10px] text-indigo-300">
                      {lang === 'pa' ? 'ਆਖਰੀ ਸਮੇਂ ਦੀ ਦੁਹਰਾਈ ਲਈ ਮੁੱਖ ਸੂਤਰ ਅਤੇ ਨੁਕਤੇ' : lang === 'hi' ? 'अंतिम समय के पुनरीक्षण हेतु उच्च-महत्व बिंदु' : 'High-yield points, key rules, and exam traps'}
                    </p>
                  </div>
                </div>

                {/* High Yield Points */}
                {lesson.quickRevisionSheet.highYieldPoints && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block">
                      📌 {lang === 'pa' ? 'ਮੁੱਖ ਨੁਕਤੇ (High-Yield Points)' : lang === 'hi' ? 'उच्च-महत्व बिंदु (High-Yield Points)' : 'High-Yield Points'}
                    </span>
                    <div className="space-y-1.5 text-xs text-slate-200">
                      {(lesson.quickRevisionSheet.highYieldPoints[lang] || lesson.quickRevisionSheet.highYieldPoints.hi || lesson.quickRevisionSheet.highYieldPoints.en || []).map((pt, pIdx) => (
                        <div key={pIdx} className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60 flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-teal-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Formulas or Rules */}
                {lesson.quickRevisionSheet.keyFormulasOrRules && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                      📐 {lang === 'pa' ? 'ਮੁੱਖ ਫਾਰਮੂਲੇ / ਨਿਯਮ' : lang === 'hi' ? 'मुख्य सूत्र एवं नियम' : 'Key Formulas & Rules'}
                    </span>
                    <div className="space-y-1.5 text-xs text-slate-200">
                      {(lesson.quickRevisionSheet.keyFormulasOrRules[lang] || lesson.quickRevisionSheet.keyFormulasOrRules.hi || lesson.quickRevisionSheet.keyFormulasOrRules.en || []).map((rule, rIdx) => (
                        <div key={rIdx} className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60 font-mono text-amber-200 text-xs">
                          {rule}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Exam Traps */}
                {lesson.quickRevisionSheet.examTraps && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-rose-300 uppercase tracking-wider block">
                      ⚠️ {lang === 'pa' ? 'ਇਮਤਿਹਾਨ ਦੇ ਧੋਖੇ / ਗਲਤੀਆਂ' : lang === 'hi' ? 'परीक्षा के धोखे / निगेटिव मार्किंग ट्रैप्स' : 'Exam Traps to Avoid'}
                    </span>
                    <div className="space-y-1.5 text-xs text-slate-200">
                      {(lesson.quickRevisionSheet.examTraps[lang] || lesson.quickRevisionSheet.examTraps.hi || lesson.quickRevisionSheet.examTraps.en || []).map((trap, tIdx) => (
                        <div key={tIdx} className="bg-rose-950/30 p-2.5 rounded-lg border border-rose-500/30 text-rose-200 flex items-start gap-2">
                          <span className="text-rose-400 shrink-0 font-bold">!</span>
                          <span className="leading-relaxed">{trap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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

            {/* Editorial Provenance Metadata */}
            {lesson.editorialRecord && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-[11px] text-slate-400 space-y-1.5">
                <div className="flex items-center justify-between text-slate-300 font-semibold border-b border-slate-800 pb-1">
                  <span>🏛️ {lang === 'pa' ? 'ਸੰਪਾਦਕੀ ਅਤੇ ਸਿਲੇਬਸ ਰਿਕਾਰਡ' : 'संपादकीय एवं पाठ्यक्रम विवरण (Editorial Provenance)'}</span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono">
                    {lesson.editorialRecord.authoringType}
                  </span>
                </div>
                {lesson.editorialRecord.verifiedSyllabusDenominator && (
                  <p>
                    <strong className="text-slate-300">{lang === 'pa' ? 'ਸਿਲੇਬਸ ਆਧਾਰ:' : 'पाठ्यक्रम आधार:'}</strong> {lesson.editorialRecord.verifiedSyllabusDenominator}
                  </p>
                )}
                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                  <span>Authored: {lesson.editorialRecord.authoredDate}</span>
                  {lesson.editorialRecord.lastUpdatedDate && <span>Updated: {lesson.editorialRecord.lastUpdatedDate}</span>}
                </div>
                {lesson.editorialRecord.reviewerRecord && (
                  <p className="text-[10px] text-teal-400">
                    Review: {lesson.editorialRecord.reviewerRecord}
                  </p>
                )}
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
                  Topic practice · source labels on each question
                </span>
              </div>
              
              <h4 className="text-white font-bold text-sm mb-1.5">
                {lang === 'pa' ? 'ਇਸ ਵਿਸ਼ੇ ਦਾ ਲਾਈਵ ਮੌਕ ਟੈਸਟ ਦਿਓ' : 'इस टॉपिक का लाइव मॉक टेस्ट दें'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {lang === 'pa' 
                  ? 'ਇਸ ਵਿਸ਼ੇ ਦੇ ਉਪਲਬਧ ਪ੍ਰਸ਼ਨਾਂ ਨਾਲ ਆਪਣੀ ਸਮਝ ਦੀ ਜਾਂਚ ਕਰੋ। ਪੂਰੇ ਅਧਿਕਾਰਤ ਪੇਪਰ ਦੀ ਕਵਰੇਜ ਹਾਲੇ ਅਧੂਰੀ ਹੈ।'
                  : 'इस विषय के उपलब्ध प्रश्नों से अपनी समझ जांचें। पूरे आधिकारिक प्रश्नपत्र की कवरेज अभी अधूरी है।'}
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <Link
                  href={`/mock-test/topic-${topicId}?exam=${effectiveExamId}`}
                  className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs py-2.5 px-3 rounded-xl text-center flex items-center justify-center gap-1.5 shadow transition"
                >
                  <Target size={14} />
                  <span>{lang === 'pa' ? 'ਲਾਈਵ ਟੈਸਟ' : 'लाइव टेस्ट'}</span>
                </Link>
                <Link
                  href={`/mock-test/topic-${topicId}?mode=flip&exam=${effectiveExamId}`}
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
                  ? 'ਪਾਠ ਪੁਸਤਕਾਂ ਅਤੇ ਸਹਾਇਕ ਸਰੋਤਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੇ ਪ੍ਰਕਾਸ਼ਕ ਦੀ ਵੈੱਬਸਾਈਟ ਉੱਤੇ ਖੋਲ੍ਹੋ। ਹਰ ਲਿੰਕ PDF ਜਾਂ ਸਰਕਾਰੀ ਸਰੋਤ ਨਹੀਂ ਹੈ।'
                  : lang === 'en' ? 'Open textbooks and supplementary resources at their publishers. Links may be web pages or PDFs; supplementary resources are not government publications.'
                  : 'पाठ्यपुस्तक और सहायक संसाधन उनके प्रकाशक की वेबसाइट पर खोलें। हर लिंक PDF या सरकारी प्रकाशन नहीं है।'}
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
                  <div key={dIdx} className="bg-slate-800 border border-slate-700/80 rounded-xl p-3.5 flex items-start justify-between gap-3 shadow hover:border-slate-600 transition">
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                        <FileText size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          <span className="text-[10px] bg-slate-700 text-slate-200 px-2 py-0.5 rounded font-medium">
                            {doc.language}
                          </span>
                          <span className="text-[10px] bg-indigo-950 text-indigo-300 border border-indigo-700/40 px-1.5 py-0.5 rounded uppercase font-bold">
                            {doc.type || 'PDF'}
                          </span>
                          {doc.publisher && (
                            <span className="text-[10px] bg-teal-950 text-teal-300 border border-teal-700/40 px-1.5 py-0.5 rounded font-medium">
                              🏛️ {doc.publisher}
                            </span>
                          )}
                          {doc.availability === 'verified' && (
                            <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-700/40 px-1.5 py-0.5 rounded font-medium">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <h5 className="text-white font-semibold text-xs leading-snug">
                          {doc.title}
                        </h5>
                        {doc.chapterOrPage && (
                          <p className="text-[11px] text-indigo-300 mt-0.5 font-medium">
                            📖 {doc.chapterOrPage}
                          </p>
                        )}
                        {doc.accessNotes && (
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                            {doc.accessNotes}
                          </p>
                        )}
                        {doc.lastChecked && (
                          <p className="text-[10px] text-slate-500 mt-0.5 font-mono">
                            Last verified: {doc.lastChecked}
                          </p>
                        )}
                      </div>
                    </div>

                    <a 
                      href={doc.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-slate-700 hover:bg-slate-600 text-teal-300 hover:text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shrink-0 transition"
                      title="Open Resource"
                    >
                      <Download size={13} />
                      <span>{lang === 'pa' ? 'ਖੋਲ੍ਹੋ' : 'खोलें'}</span>
                    </a>
                  </div>
                ))
              )}
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[10px] text-slate-400 leading-relaxed">
                ℹ️ {lang === 'pa' 
                  ? 'ਸੂਚਨਾ: ਲਿੰਕ ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਪੋਰਟਲਾਂ ਅਤੇ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਪਾਠ ਪੁਸਤਕਾਂ ਦੇ ਹਨ। ExamSathi ਕਿਸੇ ਵੀ ਕਾਪੀਰਾਈਟ ਸਮੱਗਰੀ ਨੂੰ ਰੀ-ਹੋਸਟ ਨਹੀਂ ਕਰਦਾ ਅਤੇ ਸਿੱਧਾ ਅਧਿਕਾਰਤ ਸਰੋਤ ਉੱਤੇ ਭੇਜਦਾ ਹੈ।' 
                  : 'सूचना: प्रदर्शित लिंक आधिकारिक सरकारी पोर्टलों एवं पाठ्यपुस्तकों के हैं। ExamSathi किसी भी कॉपीराइट सामग्री को री-होस्ट नहीं करता; समस्त दस्तावेज सीधे प्रकाशक के पोर्टल पर खुलते हैं।'}
              </div>
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
              <select aria-label="Practice question count" value={practiceCount} onChange={e => { const count = Number(e.target.value); setPracticeCount(count); setTopicQuestions(getTestQuestions({ topicId, examId: useStore.getState().selectedExam || undefined, count })); setSelectedAnswers({}); setShowExplanation({}); }} className="bg-slate-800 p-2 rounded">
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
                  {topicQuestions.length} {lang === 'pa' ? 'ਸਵਾਲ ਉਪਲਬਧ ਹਨ' : 'महत्वपूर्ण प्रश्न'} • Topic practice
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/mock-test/topic-${topicId}?exam=${effectiveExamId}`}
                  className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:opacity-95 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow"
                >
                  <Target size={14} />
                  <span>{lang === 'pa' ? 'ਪੂਰਾ ਲਾਈਵ ਟੈਸਟ ਸ਼ੁਰੂ ਕਰੋ' : 'पूरा टॉपिक अभ्यास शुरू करें'}</span>
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
            {/* Note Editor */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4">
              <h3 className="text-white font-bold text-sm mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Edit3 size={16} className="text-teal-400" />
                  <span>{lang === 'pa' ? 'ਇਸ ਵਿਸ਼ੇ ਲਈ ਨਿੱਜੀ ਨੋਟ ਲਿਖੋ' : 'इस टॉपिक के लिए अपने पर्सनल नोट्स बनाएं'}</span>
                </span>
                <span className="text-[10px] text-teal-400 font-mono bg-teal-950/60 border border-teal-800/40 px-2 py-0.5 rounded">
                  {selectedExam || 'general'}
                </span>
              </h3>
              <textarea 
                value={userNote}
                onChange={e => handleNoteInputChange(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white text-xs h-32 focus:outline-none focus:border-teal-500 placeholder-slate-500 resize-none leading-relaxed" 
                placeholder={lang === 'pa' ? 'ਆਪਣੇ ਨੋਟਿਸ ਇੱਥੇ ਲਿਖੋ ਅਤੇ ਸੇਵ ਕਰੋ...' : 'महत्वपूर्ण बातें, फॉर्मूले या ट्रिक्स यहाँ लिखें... (ड्राफ्ट स्वतः सहेजा जाएगा)'}
              />
              <div className="flex justify-between items-center mt-3">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <span>💾</span>
                  <span>{userNote.trim() ? 'Draft autosaved locally' : 'Private to your device'}</span>
                </span>
                <button 
                  onClick={handleSaveNote}
                  disabled={!userNote.trim()}
                  className="bg-teal-600 hover:bg-teal-500 disabled:opacity-40 text-white font-bold px-4 py-2 rounded-lg text-xs transition"
                >
                  Save Note
                </button>
              </div>
            </div>

            {/* Recoverable Deletion Undo Banner */}
            {recentlyDeletedNote && (
              <div className="bg-amber-950/70 border border-amber-600/60 rounded-xl p-3 flex justify-between items-center text-xs text-amber-200">
                <span className="truncate pr-2">
                  Note removed ({recentlyDeletedNote.title || 'Untitled'}).
                </span>
                <button 
                  onClick={handleRestoreNote} 
                  className="font-bold underline text-amber-300 hover:text-white flex items-center gap-1 shrink-0"
                >
                  <Undo2 size={13} /> Undo
                </button>
              </div>
            )}

            {/* Notes Control Bar: Search & Export */}
            <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between bg-slate-850 p-2.5 rounded-xl border border-slate-750">
              <div className="relative flex-1">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={notesSearchQuery}
                  onChange={e => setNotesSearchQuery(e.target.value)}
                  placeholder="Search in notes..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleExportNotes('markdown')}
                  disabled={personalNotes.length === 0}
                  className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 border border-slate-700 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
                  title="Export notes as Markdown document"
                >
                  <Download size={13} />
                  <span>Export MD</span>
                </button>
                <button
                  onClick={() => handleExportNotes('txt')}
                  disabled={personalNotes.length === 0}
                  className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 border border-slate-700 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
                  title="Export notes as plain text"
                >
                  <Download size={13} />
                  <span>TXT</span>
                </button>
              </div>
            </div>

            {/* Saved Notes List */}
            <div className="space-y-3">
              <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                <span>{lang === 'pa' ? 'ਸੰਭਾਲੇ ਹੋਏ ਨੋਟਿਸ' : 'सहेजे गए नोट्स'} ({personalNotes.length})</span>
                {notesSearchQuery && (
                  <button 
                    onClick={() => setNotesSearchQuery('')}
                    className="text-teal-400 hover:underline text-[10px] normal-case"
                  >
                    Clear Search
                  </button>
                )}
              </h4>
              {personalNotes.length === 0 ? (
                <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-6 text-center text-slate-500 text-xs">
                  {notesSearchQuery ? 'कोई भी नोट खोज से मेल नहीं खाता।' : 'अभी तक कोई नोट नहीं लिखा गया है।'}
                </div>
              ) : (
                personalNotes.map(n => (
                  <div key={n.id} className="bg-slate-800 border border-slate-700/80 rounded-xl p-3.5 flex flex-col gap-2">
                    {editingNoteId === n.id ? (
                      <div className="space-y-2">
                        <textarea
                          value={editNoteContent}
                          onChange={e => setEditNoteContent(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white text-xs h-24 focus:outline-none focus:border-teal-500 resize-none leading-relaxed"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setEditingNoteId(null)}
                            className="bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs px-3 py-1 rounded"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleUpdateNote(n.id)}
                            className="bg-teal-600 hover:bg-teal-500 text-white text-xs px-3 py-1 rounded font-bold"
                          >
                            Save Edit
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between items-start gap-3">
                          <div className="flex-1 text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
                            {n.content}
                            {n.sourceExcerpt && (
                              <p className="text-[11px] text-teal-300/80 mt-1.5 italic bg-slate-900/60 p-2 rounded border border-slate-800">
                                📖 {n.sourceExcerpt}
                              </p>
                            )}
                            <p className="text-[10px] text-slate-500 mt-2">
                              Saved on: {new Date(n.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              onClick={() => { setEditingNoteId(n.id); setEditNoteContent(n.content); }}
                              className="p-1.5 text-slate-400 hover:text-teal-400 transition"
                              title="Edit Note"
                            >
                              <Edit3 size={13} />
                            </button>
                            <button 
                              onClick={() => handleDeleteNote(n)}
                              className="p-1.5 text-slate-400 hover:text-rose-400 transition"
                              title="Delete Note (Recoverable)"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Community Contribution CTA */}
            <div className="bg-gradient-to-br from-teal-950/40 to-indigo-950/40 border border-teal-700/40 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <p className="text-teal-300 font-bold text-sm">Contribute notes for peer moderation</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Uploading notes is always private by default. If you wish to propose public sharing, you can submit your notes for human moderation with explicit rights confirmation.
                  </p>
                  <button
                    onClick={() => { setShowContributeModal(true); setRightsConfirmed(false); }}
                    className="mt-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition"
                  >
                    Propose Public Contribution 🌟
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
                <h3 className="text-white font-bold text-lg mb-2">Submitted for Review</h3>
                <p className="text-slate-400 text-sm">Your contribution has been received for editorial moderation. Personal notes remain private until approved.</p>
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
                  <h3 className="text-white font-bold text-base">Propose Public Contribution</h3>
                  <button onClick={() => setShowContributeModal(false)} className="text-slate-400 hover:text-white text-xl leading-none">×</button>
                </div>
                <p className="text-slate-400 text-xs mb-3 leading-relaxed">
                  Your saved notes on <strong className="text-teal-300">{lesson.title[lang] || lesson.title.en}</strong> will be submitted for editorial moderation.
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
                  <p className="font-bold text-slate-300 mb-1">Privacy Guarantee & Submission Scope:</p>
                  <ul className="space-y-0.5">
                    <li>• Personal notes are never published automatically</li>
                    <li>• Active notes on this topic: {personalNotes.length}</li>
                    <li>• Topic: {lesson.title.en} ({selectedExam || 'general'})</li>
                  </ul>
                </div>
                <label className="flex items-start gap-2.5 text-[11px] text-slate-300 cursor-pointer mb-3 p-2 bg-slate-800/40 rounded-lg border border-slate-700">
                  <input
                    type="checkbox"
                    checked={rightsConfirmed}
                    onChange={e => setRightsConfirmed(e.target.checked)}
                    className="mt-0.5 rounded border-slate-700 text-teal-500 focus:ring-0"
                  />
                  <span>I confirm that I hold full rights to share these personal notes, that they contain no copyrighted or infringing coaching materials, and I agree to open educational moderation.</span>
                </label>
                {personalNotes.length === 0 ? (
                  <p className="text-amber-400 text-xs text-center mb-3">You have no saved notes yet. Write and save some notes first!</p>
                ) : (
                  <button
                    disabled={!rightsConfirmed}
                    onClick={() => {
                      try {
                        const submissions = JSON.parse(studyStorage.getItem('examsathi_pending_contributions') || '[]');
                        submissions.push({
                          topicId: lesson.id,
                          topicTitle: lesson.title.en,
                          examId: selectedExam || 'general',
                          notes: personalNotes,
                          creditName: contributeName || 'Anonymous',
                          rightsConfirmed: true,
                          submittedAt: new Date().toISOString(),
                          status: 'pending-moderation',
                        });
                        studyStorage.setItem('examsathi_pending_contributions', JSON.stringify(submissions));
                      } catch {}
                      setContributeSubmitted(true);
                    }}
                    className="w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-bold py-3 rounded-xl text-sm transition"
                  >
                    Submit with Rights Confirmation ✓
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
