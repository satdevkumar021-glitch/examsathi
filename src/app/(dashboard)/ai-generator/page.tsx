'use client';
import { studyStorage } from '@/lib/storage';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Sparkles, Brain, Play, Layers, BookOpen, ShieldCheck, AlertTriangle, CheckCircle2, RotateCcw, Bookmark, UploadCloud, Camera, Trash2 } from 'lucide-react';
import { generateMCQsFromNotes, checkAIQuota } from '@/lib/ai_gateway';
import { extractDocumentText } from '@/lib/document-text';
import { apiUrl } from '@/lib/paths';
import { createClient } from '@/lib/supabase/client';
import { Question } from '@/lib/data/questions';

const PRESET_SNIPPETS = [
  {
    title: '📜 हड़प्पा सभ्यता (Indus Valley)',
    text: 'सिंधु घाटी सभ्यता एक कांस्य युगीन सभ्यता थी। इसकी खोज 1921 में दयाराम साहनी द्वारा हड़प्पा में की गई थी। 1922 में राखालदास बनर्जी ने मोहनजोदड़ो की खोज की। मोहनजोदड़ो में विशाल स्नानागार (Great Bath) और विशाल अन्नागार मिला। हड़प्पा सभ्यता की लिपि चित्रात्मक और भावचित्रात्मक थी जिसे अभी तक पढ़ा नहीं जा सका है। चन्हूदड़ो मनके बनाने का प्रमुख केंद्र था। लोथल गुजरात में भोगवा नदी के तट पर एक प्रमुख प्राचीन बंदरगाह और डॉकयार्ड था। कालीबंगा राजस्थान के हनुमानगढ़ में स्थित है जहां जूते हुए खेत के साक्ष्य मिले हैं।'
  },
  {
    title: '⚖️ मौलिक अधिकार (Fundamental Rights)',
    text: 'भारतीय संविधान के भाग 3 में अनुच्छेद 12 से 35 तक मौलिक अधिकारों का प्रावधान है। इसे भारत का मैग्नाकार्टा कहा जाता है। संविधान में प्रारंभ में सात मौलिक अधिकार थे परंतु 44वें संविधान संशोधन 1978 द्वारा संपत्ति के अधिकार (अनुच्छेद 31) को मौलिक अधिकारों से हटाकर अनुच्छेद 300A के तहत कानूनी अधिकार बना दिया गया। अनुच्छेद 32 को डॉ. बी.आर. अंबेडकर ने संविधान की आत्मा और हृदय कहा था जिसके तहत सुप्रीम कोर्ट 5 प्रकार की रिट (बन्दी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार पृच्छा) जारी कर सकता है।'
  },
  {
    title: '🌾 ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ (Banda Singh Bahadur)',
    text: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਜੀ ਦਾ ਮੁੱਢਲਾ ਨਾਂ ਲਛਮਣ ਦਾਸ ਸੀ। ਨਾਂਦੇੜ ਵਿਖੇ 1707 ਵਿਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨਾਲ ਮੁਲਾਕਾਤ ਹੋਈ ਅਤੇ ਗੁਰੂ ਜੀ ਨੇ ਉਨ੍ਹਾਂ ਨੂੰ ਅੰਮ੍ਰਿਤ ਛਕਾ ਕੇ ਬੰਦਾ ਸਿੰਘ ਨਾਂ ਦਿੱਤਾ। 1710 ਵਿਚ ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ ਵਿਚ ਸਰਹਿੰਦ ਦੇ ਮੁਗਲ ਫੌਜਦਾਰ ਵਜ਼ੀਰ ਖਾਨ ਨੂੰ ਹਰਾ ਕੇ ਸਰਹਿੰਦ ਫਤਹਿ ਕੀਤੀ। ਉਨ੍ਹਾਂ ਨੇ ਪੰਜਾਬ ਵਿਚ ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਦਾ ਖਾਤਮਾ ਕੀਤਾ ਅਤੇ ਮੁਖਲਿਸਪੁਰ (ਲੋਹਗੜ੍ਹ) ਨੂੰ ਆਪਣੀ ਰਾਜਧਾਨੀ ਬਣਾ ਕੇ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਅਤੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਨਾਂ ਤੇ ਸਿੱਕੇ ਜਾਰੀ ਕੀਤੇ। 1716 ਵਿਚ ਦਿੱਲੀ ਵਿਖੇ ਸ਼ਹੀਦੀ ਪ੍ਰਾਪਤ ਕੀਤੀ।'
  },
  {
    title: '🏛️ भारतीय अर्थव्यवस्था व RBI (Monetary Policy)',
    text: 'भारतीय रिजर्व बैंक की स्थापना 1 अप्रैल 1935 को भारतीय रिजर्व बैंक अधिनियम 1934 के प्रावधानों के अनुसार हिल्टन यंग कमीशन की सिफारिशों पर हुई थी। 1 जनवरी 1949 को इसका राष्ट्रीयकरण किया गया। आरबीआई भारत का केंद्रीय बैंक और बैंकों का बैंक है। मौद्रिक नीति समिति (MPC) में 6 सदस्य होते हैं और इसकी अध्यक्षता आरबीआई गवर्नर करते हैं। रेपो रेट वह ब्याज दर है जिस पर आरबीआई वाणिज्यिक बैंकों को अल्पकालिक ऋण प्रदान करता है। रिवर्स रेपो दर पर बैंक अपनी अधिशेष निधि आरबीआई के पास रखते हैं। सीआरआर बैंकों की कुल जमा का वह अंश है जो नकदी रूप में आरबीआई के पास रखना अनिवार्य है।'
  }
];

export default function AIGeneratorPage() {
  const router = useRouter();
  const [inputMode, setInputMode] = useState<'text' | 'file'>('text');
  const [notesInput, setNotesInput] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [examTarget, setExamTarget] = useState<string>('Punjab Master Cadre SST');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [, setQuota] = useState<{ remaining: number; allowed: boolean }>({ remaining: 5, allowed: true });

                    // eslint-disable-next-line react-hooks/set-state-in-effect -- Hydrate client-only browser data after mount; this bounded effect does not update its own dependencies.
  useEffect(() => { setQuota(checkAIQuota()); }, []);
  useEffect(() => () => { if (filePreviewUrl) URL.revokeObjectURL(filePreviewUrl); }, [filePreviewUrl]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('File size must be under 10MB.');
      return;
    }
    setUploadedFile(file);
    setErrorMessage(null);
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setFilePreviewUrl(url);
    } else {
      setFilePreviewUrl(null);
    }
  };

  const handleGenerate = async () => {
    if (inputMode === 'file') {
      if (!uploadedFile) { setErrorMessage('Select a PDF, DOCX or text file first.'); return; }
      setIsGenerating(true);
      setErrorMessage(null);
      try {
        const extracted = await extractDocumentText(uploadedFile);
        setNotesInput(extracted);
        setInputMode('text');
        setGeneratedQuestions([]);
        showToast('Text extracted. Review it below, then generate your practice questions.');
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Could not read this document.');
      } finally { setIsGenerating(false); }
      return;
    }

    // Text Input Mode
    if (notesInput.trim().length < 50) {
      setErrorMessage('Please enter at least 50 characters of study notes to generate accurate MCQs.');
      return;
    }
    setErrorMessage(null);
    setIsGenerating(true);

    try {
      const endpoint = apiUrl('/api/ai/generate');
      if (endpoint) {
        const { data } = await createClient().auth.getSession();
        const serverRes = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...(data.session ? { Authorization: `Bearer ${data.session.access_token}` } : {}) },
          body: JSON.stringify({ content: notesInput, count: questionCount }),
          signal: AbortSignal.timeout(50000),
        });
        const dataResult = await serverRes.json();
        if (!serverRes.ok) throw new Error(dataResult.message || 'AI service unavailable.');
        if (dataResult.success && dataResult.questions?.length) {
          setGeneratedQuestions(dataResult.questions);
          showToast(`Created ${dataResult.questions.length} AI draft questions. Review source excerpts before studying.`);
          return;
        }
      }

      // Fallback to client-side semantic generator
      const res = await generateMCQsFromNotes(notesInput, questionCount);
      
      if (!res.success) {
        setErrorMessage(res.message || 'Generation failed. Please try again.');
      } else {
        setGeneratedQuestions(res.questions);
        setQuota(checkAIQuota());
        showToast(res.message || `Created ${res.questions.length} local recall questions.`);
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Could not generate questions.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleLaunchCBT = () => {
    if (generatedQuestions.length === 0) return;
    try {
      studyStorage.setItem('examsathi_custom_cbt_questions', JSON.stringify(generatedQuestions));
      studyStorage.setItem('examsathi_test_config', JSON.stringify({
        topicId: 'ai-custom',
        mode: 'exam',
        count: generatedQuestions.length,
        timeLimitMinutes: Math.max(5, Math.round(generatedQuestions.length * 0.9)),
      }));
    } catch {}

    router.push('/mock-test/topic-ai-custom');
  };

  const handleLaunchFlashcards = () => {
    if (generatedQuestions.length === 0) return;
    try {
      studyStorage.setItem('examsathi_custom_cbt_questions', JSON.stringify(generatedQuestions));
      studyStorage.setItem('examsathi_test_config', JSON.stringify({
        topicId: 'ai-custom',
        mode: 'flip',
        count: generatedQuestions.length,
      }));
    } catch {}

    router.push('/mock-test/topic-ai-custom?mode=flip');
  };

  const handleSaveAllToVault = () => {
    if (generatedQuestions.length === 0) return;
    try {
      const existingRaw = studyStorage.getItem('examsathi_saved_review_notes');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      
      const newItems = generatedQuestions.map(q => ({
        id: `note-${q.id}`,
        questionId: q.id,
        topicId: 'ai-custom',
        title: q.question.hi || q.question.en,
        explanation: q.explanation.hi || q.explanation.en,
        thought: q.examTag.startsWith('Local') ? 'Local source recall — not independently verified' : 'AI draft — review source evidence',
        correctOption: q.correct,
        correctText: q.options[q.correct]?.hi || q.options[q.correct]?.en || '',
        examTag: q.examTag,
        savedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
      }));

      studyStorage.setItem('examsathi_saved_review_notes', JSON.stringify(Array.from(new Map([...existing, ...newItems].map(item => [item.id, item])).values())));
      showToast(`⭐ Saved all ${generatedQuestions.length} questions to your Profile Study Vault!`);
    } catch {
      showToast('Error saving to Study Vault.');
    }
  };

  return (
    <div className="p-4 flex flex-col gap-6 min-h-screen bg-slate-900 pb-28 text-slate-100 max-w-xl mx-auto w-full">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-teal-500 text-slate-950 font-black text-xs px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-800 to-teal-950 p-5 rounded-2xl border border-indigo-500/40 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="p-2.5 bg-indigo-500/20 text-indigo-300 rounded-xl">
              <Sparkles size={24} />
            </span>
            <div>
              <h1 className="text-white font-black text-lg">Notes & AI Practice Generator</h1>
              <p className="text-[11px] text-teal-300">
                ਆਪਣੇ ਨੋਟਸ ਤੋਂ ਟੈਸਟ ਬਣਾਓ • Review document text and build practice
              </p>
            </div>
          </div>
          <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-indigo-500/40 flex items-center gap-1 font-mono">
            <Brain size={12} /> Notes practice
          </span>
        </div>

        {/* DPDP Compliance & Quota Badge */}
        <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-[11px] text-slate-300">Files are read on this device. Cloud AI sends reviewed text to the configured provider.</span>
          </div>
          <div className="text-[11px] font-bold text-amber-300 font-mono">
            Local recall available
          </div>
        </div>
      </div>

      {/* Input Mode Tabs: Paste Text vs Upload File */}
      <div className="flex gap-2 bg-slate-850 p-1.5 rounded-2xl border border-slate-750">
        <button
          onClick={() => setInputMode('text')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
            inputMode === 'text'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <BookOpen size={14} />
          <span>📝 Paste Notes Text</span>
        </button>
        <button
          onClick={() => setInputMode('file')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
            inputMode === 'file'
              ? 'bg-teal-500 text-slate-950 font-black shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Camera size={14} />
          <span>📄 PDF / DOCX / TXT</span>
        </button>
      </div>

      {/* Input Section */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-md flex flex-col gap-3">
        {inputMode === 'text' ? (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-white flex items-center gap-2">
                <BookOpen size={16} className="text-teal-400" />
                <span>1. Paste Study Notes or Syllabus Passage</span>
              </h2>
              <span className="text-[10px] text-slate-400 font-mono">
                {notesInput.length} chars (min 50)
              </span>
            </div>

            {/* Preset Quick Load Buttons */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] text-slate-400 self-center mr-1">Quick Presets:</span>
              {PRESET_SNIPPETS.map((snippet, idx) => (
                <button
                  key={idx}
                  onClick={() => { setNotesInput(snippet.text); setGeneratedQuestions([]); }}
                  className="text-[10px] bg-slate-900/80 hover:bg-slate-900 text-teal-300 border border-slate-750 hover:border-teal-500/50 px-2 py-1 rounded-lg transition"
                >
                  {snippet.title}
                </button>
              ))}
            </div>

            <textarea
              rows={5}
              value={notesInput}
              onChange={e => { setNotesInput(e.target.value); setGeneratedQuestions([]); }}
              placeholder="Paste notes, book paragraphs, historical summaries, or constitutional articles here to convert them into practice MCQs..."
              className="w-full bg-slate-900 border border-slate-750 focus:border-teal-400 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none transition leading-relaxed resize-none"
            />
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-white flex items-center gap-2">
                <UploadCloud size={16} className="text-teal-400" />
                <span>1. Select a PDF, DOCX or text document</span>
              </h2>
              <span className="text-[10px] text-teal-300 font-mono font-bold">
                Max 10MB
              </span>
            </div>

            {/* File Dropzone */}
            <label className="border-2 border-dashed border-slate-700 hover:border-teal-400/60 bg-slate-900/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition group">
              <input
                type="file"
                accept=".pdf,.docx,.txt,.md"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-300 border border-teal-500/20 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                <UploadCloud size={24} />
              </div>
              <p className="text-xs font-bold text-white mb-1">
                Click to select a document
              </p>
              <p className="text-[11px] text-slate-400 max-w-xs leading-relaxed">
                Use a text-based PDF, DOCX, TXT or Markdown file. For scans, paste extracted OCR text.
              </p>
            </label>

            {/* Selected File Info */}
            {uploadedFile && (
              <div className="bg-slate-900/90 border border-teal-500/40 p-3 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xl shrink-0">
                    {uploadedFile.type === 'application/pdf' ? '📄' : '📸'}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">{uploadedFile.name}</p>
                    <p className="text-[10px] text-slate-400 font-mono">
                      {(uploadedFile.size / 1024).toFixed(1)} KB • {uploadedFile.type || 'Document'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => { setUploadedFile(null); setFilePreviewUrl(null); }}
                  className="p-1.5 text-slate-400 hover:text-rose-400 transition"
                  title="Remove file"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )}
          </>
        )}

        {/* Configuration Row */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Question Count</label>
            <div className="grid grid-cols-3 gap-1.5">
              {[5, 10, 20, 50].map(cnt => (
                <button
                  key={cnt}
                  onClick={() => setQuestionCount(cnt)}
                  className={`py-1.5 rounded-lg text-xs font-bold transition border ${
                    questionCount === cnt
                      ? 'bg-teal-500 text-slate-950 border-teal-400'
                      : 'bg-slate-900 text-slate-400 border-slate-755 hover:border-slate-600'
                  }`}
                >
                  {cnt} Qs
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Exam label for your study vault</label>
            <select
              value={examTarget}
              onChange={e => setExamTarget(e.target.value)}
              className="w-full bg-slate-900 border border-slate-755 text-slate-200 text-xs rounded-lg p-2 outline-none focus:border-teal-400 cursor-pointer"
            >
              <option value="Punjab Master Cadre SST">Punjab Master Cadre SST</option>
              <option value="Punjab ETT Cadre 5994">Punjab ETT Cadre 5994</option>
              <option value="PSSSB Clerk & IT">PSSSB Clerk & IT</option>
              <option value="Punjab Police Constable">Punjab Police Constable</option>
              <option value="REET Level 2">REET Level 2</option>
              <option value="SSC CGL / CHSL">SSC CGL / CHSL</option>
              <option value="CTET Paper 2">CTET Paper 2</option>
            </select>
          </div>
        </div>

        {errorMessage && (
          <div className="bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs p-3 rounded-xl flex items-center gap-2">
            <AlertTriangle size={16} className="shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className={`w-full py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-lg transition mt-1 ${
            isGenerating
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              : 'bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 hover:opacity-95 text-slate-950 shadow-teal-500/10'
          }`}
        >
          {isGenerating ? (
            <>
              <RotateCcw size={16} className="animate-spin" />
              <span>{inputMode === 'file' ? 'Extracting document text...' : 'Analyzing Notes & Generating MCQs...'}</span>
            </>
          ) : (
            <>
              <Sparkles size={16} />
              <span>
                {inputMode === 'file' 
                  ? `Extract text for review`
                  : `Generate ${questionCount} Practice MCQs ✨`}
              </span>
            </>
          )}
        </button>
      </div>

      {/* Generated Questions Output Preview */}
      {generatedQuestions.length > 0 && (
        <div className="space-y-4">
          <div className="bg-slate-800/90 rounded-2xl p-4 border border-teal-500/40 shadow-xl flex flex-col gap-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-white font-bold text-sm flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-teal-400" />
                  <span>Generated CBT Set ({generatedQuestions.length} Questions)</span>
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Study label: <strong className="text-teal-300">{examTarget}</strong>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={handleSaveAllToVault}
                  className="bg-slate-800 hover:bg-slate-750 text-amber-300 border border-amber-500/40 text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 transition"
                >
                  <Bookmark size={14} />
                  <span>Save to Vault</span>
                </button>
                <button
                  onClick={handleLaunchFlashcards}
                  className="bg-slate-800 hover:bg-slate-750 text-teal-300 border border-teal-500/40 text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 transition"
                >
                  <Layers size={14} />
                  <span>Flipcards</span>
                </button>
                <button
                  onClick={handleLaunchCBT}
                  className="bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-black text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-lg hover:opacity-95 transition"
                >
                  <Play size={14} />
                  <span>Start notes practice</span>
                </button>
              </div>
            </div>

            {/* Candidate Awareness Notice */}
            <div className="bg-amber-950/40 border border-amber-500/40 p-2.5 rounded-xl text-amber-200 text-[11px] leading-relaxed flex items-center gap-2">
              <span className="text-sm shrink-0">ℹ️</span>
              <span>
                <strong>Candidate Notice:</strong> Questions generated from your notes are for conceptual reinforcement. Cross-verify with standard textbooks for controversial questions.
              </span>
            </div>
          </div>

          {/* List of Questions */}
          <div className="space-y-3">
            {generatedQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-sm flex flex-col gap-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-white bg-slate-700 px-2 py-0.5 rounded">
                      Q{idx + 1}
                    </span>
                    <span className="text-[10px] text-teal-300 bg-teal-500/10 border border-teal-500/30 px-2 py-0.5 rounded font-bold">
                      {q.difficulty.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Correct: Option ({q.correct})
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                  {q.question.hi || q.question.en}
                </h4>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(['A', 'B', 'C', 'D'] as const).map(key => {
                    const opt = q.options[key];
                    if (!opt) return null;
                    const isCorrect = q.correct === key;

                    return (
                      <div
                        key={key}
                        className={`p-2 rounded-xl border flex items-center gap-2 text-xs ${
                          isCorrect
                            ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200 font-bold'
                            : 'bg-slate-900/60 border-slate-755 text-slate-300'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {key}
                        </span>
                        <span className="truncate flex-1">{opt.hi || opt.en}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-755 text-xs text-slate-300 leading-relaxed">
                  <span className="text-amber-400 font-bold block mb-0.5">Explanation:</span>
                  {q.explanation.hi || q.explanation.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
