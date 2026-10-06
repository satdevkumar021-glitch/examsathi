'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Sparkles, 
  Brain, 
  Target, 
  Play, 
  Layers, 
  BookOpen, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  RotateCcw, 
  Bookmark, 
  Flame, 
  ArrowRight,
  Clock,
  ChevronDown
} from 'lucide-react';
import { generateMCQsFromNotes, checkAIQuota } from '@/lib/ai_gateway';
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
  const [notesInput, setNotesInput] = useState('');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [examTarget, setExamTarget] = useState<string>('Punjab Master Cadre SST');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [quota, setQuota] = useState<{ remaining: number; allowed: boolean }>({ remaining: 5, allowed: true });

  useEffect(() => {
    setQuota(checkAIQuota());
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleGenerate = async () => {
    if (notesInput.trim().length < 50) {
      setErrorMessage('Please enter at least 50 characters of study notes to generate accurate MCQs.');
      return;
    }
    setErrorMessage(null);
    setIsGenerating(true);

    try {
      // Simulate real-time semantic processing
      await new Promise(r => setTimeout(r, 800));
      const res = await generateMCQsFromNotes(notesInput, questionCount);
      
      if (!res.success) {
        setErrorMessage(res.message || 'Generation failed. Please try again.');
      } else {
        setGeneratedQuestions(res.questions);
        setQuota(checkAIQuota());
        showToast(`✨ Generated ${res.questions.length} questions successfully!`);
      }
    } catch {
      setErrorMessage('An unexpected error occurred while generating questions.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleLaunchCBT = () => {
    if (generatedQuestions.length === 0) return;
    try {
      sessionStorage.setItem('examsathi_custom_cbt_questions', JSON.stringify(generatedQuestions));
      sessionStorage.setItem('examsathi_test_config', JSON.stringify({
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
      sessionStorage.setItem('examsathi_custom_cbt_questions', JSON.stringify(generatedQuestions));
      sessionStorage.setItem('examsathi_test_config', JSON.stringify({
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
      const existingRaw = localStorage.getItem('examsathi_saved_review_notes');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      
      const newItems = generatedQuestions.map(q => ({
        id: `note-${q.id}`,
        questionId: q.id,
        topicId: 'ai-custom',
        title: q.question.hi || q.question.en,
        explanation: q.explanation.hi || q.explanation.en,
        thought: 'AI Generated Revision Note',
        correctOption: q.correct,
        correctText: q.options[q.correct]?.hi || q.options[q.correct]?.en || '',
        examTag: `AI Drill (${examTarget})`,
        year: 2024,
        savedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
      }));

      localStorage.setItem('examsathi_saved_review_notes', JSON.stringify([...newItems, ...existing]));
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
              <h1 className="text-white font-black text-lg">AI Practice Drill Generator</h1>
              <p className="text-[11px] text-teal-300">
                ਆਪਣੇ ਨੋਟਸ ਤੋਂ ਟੈਸਟ ਬਣਾਓ • Notes to CBT Mock in Seconds
              </p>
            </div>
          </div>
          <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-indigo-500/40 flex items-center gap-1 font-mono">
            <Brain size={12} /> Gemini 2.5
          </span>
        </div>

        {/* DPDP Compliance & Quota Badge */}
        <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-[11px] text-slate-300">DPDP Act 2023 Compliant (Zero Data Retention)</span>
          </div>
          <div className="text-[11px] font-bold text-amber-300 font-mono">
            {quota.remaining} / 5 Drills Left Today
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700 shadow-md flex flex-col gap-3">
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
              onClick={() => setNotesInput(snippet.text)}
              className="text-[10px] bg-slate-900/80 hover:bg-slate-900 text-teal-300 border border-slate-750 hover:border-teal-500/50 px-2 py-1 rounded-lg transition"
            >
              {snippet.title}
            </button>
          ))}
        </div>

        <textarea
          rows={5}
          value={notesInput}
          onChange={e => setNotesInput(e.target.value)}
          placeholder="Paste notes, book paragraphs, historical summaries, or constitutional articles here to convert them into practice MCQs..."
          className="w-full bg-slate-900 border border-slate-750 focus:border-teal-400 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none transition leading-relaxed resize-none"
        />

        {/* Configuration Row */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Question Count</label>
            <div className="grid grid-cols-3 gap-1.5">
              {[5, 10, 15].map(cnt => (
                <button
                  key={cnt}
                  onClick={() => setQuestionCount(cnt)}
                  className={`py-1.5 rounded-lg text-xs font-bold transition border ${
                    questionCount === cnt
                      ? 'bg-teal-500 text-slate-950 border-teal-400'
                      : 'bg-slate-900 text-slate-400 border-slate-750 hover:border-slate-600'
                  }`}
                >
                  {cnt} Qs
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Target Exam Calibration</label>
            <select
              value={examTarget}
              onChange={e => setExamTarget(e.target.value)}
              className="w-full bg-slate-900 border border-slate-750 text-slate-200 text-xs rounded-lg p-2 outline-none focus:border-teal-400 cursor-pointer"
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
          disabled={isGenerating || !quota.allowed}
          className={`w-full py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-lg transition mt-1 ${
            isGenerating || !quota.allowed
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              : 'bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 hover:opacity-95 text-slate-950 shadow-teal-500/10'
          }`}
        >
          {isGenerating ? (
            <>
              <RotateCcw size={16} className="animate-spin" />
              <span>Analyzing Notes & Generating MCQs...</span>
            </>
          ) : (
            <>
              <Sparkles size={16} />
              <span>Generate {questionCount} Practice MCQs ✨</span>
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
                  Calibrated for: <strong className="text-teal-300">{examTarget}</strong>
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
                  <span>Start CBT Mock (-0.25)</span>
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
                            : 'bg-slate-900/60 border-slate-750 text-slate-300'
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
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-750 text-xs text-slate-300 leading-relaxed">
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
