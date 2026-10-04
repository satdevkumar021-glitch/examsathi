'use client';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, BookOpen, Edit3, Layers, Video, CheckCircle2, 
  HelpCircle, ChevronLeft, ChevronRight, Bookmark, RotateCcw, 
  Sparkles, Award, Play
} from 'lucide-react';
import { LESSONS, getLessonByTopicId } from '@/lib/data/lessons';
import { getQuestionsByTopic, Question } from '@/lib/data/questions';
import FlipCard from '@/components/ui/FlipCard';

export default function LessonView({ params }: { params: Promise<{ topicId: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<'read' | 'cards' | 'practice' | 'video' | 'notes'>('read');
  const [lang, setLang] = useState<'hi' | 'pa' | 'en'>('hi');
  const [cardIndex, setCardIndex] = useState(0);
  const [isReadMarked, setIsReadMarked] = useState(false);
  
  // Interactive Practice State
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  
  // Personal Notes State (persisted to LocalStorage)
  const [userNote, setUserNote] = useState('');
  const [savedNotes, setSavedNotes] = useState<Array<{ id: string; text: string; date: string }>>([]);

  const lesson = getLessonByTopicId(resolvedParams.topicId) || LESSONS['modern-india'];
  const topicQuestions = getQuestionsByTopic(resolvedParams.topicId);

  // Load saved notes from LocalStorage on mount
  useEffect(() => {
    try {
      const storageKey = `examsathi_notes_${lesson.id}`;
      const existing = localStorage.getItem(storageKey);
      if (existing) {
        setSavedNotes(JSON.parse(existing));
      }
      const readStatus = localStorage.getItem(`examsathi_read_${lesson.id}`);
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
      localStorage.setItem(`examsathi_notes_${lesson.id}`, JSON.stringify(updated));
    } catch {
      // Fallback
    }
  };

  const handleDeleteNote = (noteId: string) => {
    const updated = savedNotes.filter(n => n.id !== noteId);
    setSavedNotes(updated);
    try {
      localStorage.setItem(`examsathi_notes_${lesson.id}`, JSON.stringify(updated));
    } catch {
      // Fallback
    }
  };

  const handleMarkAsRead = () => {
    setIsReadMarked(true);
    try {
      localStorage.setItem(`examsathi_read_${lesson.id}`, 'true');
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
      q: { hi: 'क्या यह विषय महत्वपूर्ण है?', pa: 'ਕੀ ਇਹ ਵਿਸ਼ਾ ਅਹਿਮ ਹੈ?', en: 'Is this topic important?' },
      a: { hi: 'हाँ, परीक्षा में बार-बार पूछा जाता है।', pa: 'ਹਾਂ, ਇਮਤਿਹਾਨ ਵਿੱਚ ਅਕਸਰ ਆਉਂਦਾ ਹੈ।', en: 'Yes, heavily tested.' },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 pb-20 text-slate-100">
      
      {/* Sticky Header */}
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

          {/* 3-Language Selector */}
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

        {/* Scrollable Tabs */}
        <div className="flex w-full overflow-x-auto no-scrollbar gap-1 border-b border-slate-800">
          <button 
            onClick={() => setActiveTab('read')} 
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-all shrink-0 ${activeTab === 'read' ? 'border-teal-400 text-teal-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <BookOpen size={14} /> 
            <span>{lang === 'pa' ? 'ਪੜ੍ਹੋ (Read)' : lang === 'hi' ? 'अध्ययन (Read)' : 'Read'}</span>
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
        
        {/* ================= READ TAB ================= */}
        {activeTab === 'read' && (
          <div className="flex flex-col gap-6">
            
            {/* Exam Target Alert */}
            <div className="bg-gradient-to-r from-indigo-900/60 to-teal-950/60 border border-indigo-500/30 p-3.5 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-amber-400 shrink-0" />
                <span className="text-indigo-200 font-medium">{lesson.examRelevance}</span>
              </div>
              {isReadMarked && (
                <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> Completed
                </span>
              )}
            </div>

            {/* Injected Rich Content */}
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
          </div>
        )}

        {/* ================= FLASHCARDS (FLIPKART) TAB ================= */}
        {activeTab === 'cards' && (
          <div className="flex flex-col items-center gap-5">
            <div className="w-full flex justify-between items-center text-xs text-slate-400 px-1">
              <span>{lang === 'pa' ? 'ਕਲਿੱਕ ਕਰਕੇ ਉੱਤਰ ਦੇਖੋ' : 'क्लिक करके उत्तर देखें (Flip Card)'}</span>
              <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-teal-400">
                {cardIndex + 1} / {currentCards.length}
              </span>
            </div>
            
            <div className="w-full flex justify-center">
              <FlipCard 
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
                  onClick={() => setCardIndex(prev => Math.min(currentCards.length - 1, prev + 1))}
                  className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 py-2.5 rounded-lg text-xs font-bold text-center"
                >
                  Again <br/><span className="text-[9px] font-normal text-slate-400">1m</span>
                </button>
                <button 
                  onClick={() => setCardIndex(prev => Math.min(currentCards.length - 1, prev + 1))}
                  className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 py-2.5 rounded-lg text-xs font-bold text-center"
                >
                  Hard <br/><span className="text-[9px] font-normal text-slate-400">10m</span>
                </button>
                <button 
                  onClick={() => setCardIndex(prev => Math.min(currentCards.length - 1, prev + 1))}
                  className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 py-2.5 rounded-lg text-xs font-bold text-center"
                >
                  Good <br/><span className="text-[9px] font-normal text-slate-400">1d</span>
                </button>
                <button 
                  onClick={() => setCardIndex(prev => Math.min(currentCards.length - 1, prev + 1))}
                  className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/40 py-2.5 rounded-lg text-xs font-bold text-center"
                >
                  Easy <br/><span className="text-[9px] font-normal text-slate-400">4d</span>
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

        {/* ================= MINI MOCK / PRACTICE TAB ================= */}
        {activeTab === 'practice' && (
          <div className="flex flex-col gap-6">
            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-sm">
                  {lang === 'pa' ? 'ਅਭਿਆਸ ਪ੍ਰਸ਼ਨ (Topic Practice)' : 'टॉपिक अभ्यास प्रश्न (Practice MCQs)'}
                </h3>
                <p className="text-xs text-slate-400">
                  {topicQuestions.length} {lang === 'pa' ? 'ਸਵਾਲ ਉਪਲਬਧ ਹਨ' : 'महत्वपूर्ण प्रश्न'}
                </p>
              </div>
              <span className="bg-teal-500/20 text-teal-300 text-xs px-2.5 py-1 rounded-full font-bold">
                PYQs Included
              </span>
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

        {/* ================= VIDEOS TAB ================= */}
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

            {lesson.videos.map((vid, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg">
                {/* Embed YouTube player or Fallback preview */}
                <div className="relative aspect-video w-full bg-black">
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${vid.youtubeId}?rel=0&modestbranding=1`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-3.5">
                  <div className="flex gap-1.5 mb-2">
                    {vid.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-[10px] px-2 py-0.5 rounded font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1 line-clamp-2">{vid.title}</h4>
                  <div className="flex justify-between text-slate-400 text-xs">
                    <span>{vid.channel}</span>
                    <span>{vid.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= MY NOTES TAB ================= */}
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
          </div>
        )}

      </div>
    </div>
  );
}
