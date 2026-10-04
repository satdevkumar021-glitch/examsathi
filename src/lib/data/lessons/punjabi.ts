import { Lesson } from './types';

export const PUNJABI_LESSONS: Record<string, Lesson> = {
  // -------------------------------------------------------------
  // 1. COMPULSORY PUNJABI PAPER A (QUALIFYING)
  // -------------------------------------------------------------
  'punjabi-paper-a': {
    id: 'punjabi-paper-a',
    topicId: 'punjabi-paper-a',
    subjectId: 'punjabi',
    category: 'language',
    title: {
      hi: 'अनिवार्य पंजाबी पेपर A: गुरमुखी लिपि, व्याकरण, मुहावरे व अखाण',
      pa: 'ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਪੇਪਰ ਏ: ਗੁਰਮੁਖੀ ਲਿਪੀ, ਵਿਆਕਰਨ, ਮੁਹਾਵਰੇ ਤੇ ਅਖਾਣ',
      en: 'Compulsory Punjabi Paper A: Gurmukhi Script, Grammar & Idioms',
    },
    examRelevance: 'Mandatory 50 Marks Qualifying Paper for ALL Punjab Govt Exams (PSSSB Clerk, Police, Patwari, Master Cadre)',
    estimatedTime: '40 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 पंजाब सरकार की अनिवार्य योग्यता परीक्षा</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब सरकार के नवीनतम नियमों के अनुसार, पंजाब की प्रत्येक सरकारी नौकरी (ग्रुप C, D, B, मास्टर कैडर) के लिए <strong>50 अंकों का पंजाबी पेपर A</strong> पास करना अनिवार्य है। इसमें न्यूनतम <strong>50% अंक (25 अंक)</strong> प्राप्त करने पर ही मुख्य पेपर जांचा जाता है।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਗੁਰਮੁਖੀ ਲਿਪੀ ਤੇ ਵਰਣਮਾਲਾ (Gurmukhi Alphabet & Structure)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>ਕੁੱਲ ਅੱਖਰ:</strong> ਮੂਲ ਰੂਪ ਵਿੱਚ ਗੁਰਮੁਖੀ ਵਿੱਚ <strong>35 ਅੱਖਰ</strong> ਸਨ (ਇਸ ਲਈ ਇਸਨੂੰ <em>'ਪੈਂਤੀ'</em> ਕਿਹਾ ਜਾਂਦਾ ਹੈ)। ਫ਼ਾਰਸੀ ਧੁਨੀਆਂ ਲਈ ਪੈਰ ਵਿੱਚ ਬਿੰਦੀ ਵਾਲੇ 6 ਨਵੀਨ ਅੱਖਰ (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼) ਸ਼ਾਮਲ ਕਰਨ ਨਾਲ ਹੁਣ ਕੁੱਲ <strong>41 ਅੱਖਰ</strong> ਹਨ।</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">ਸਵਰ ਵਾਹਕ (3)</span>
                  <p class="text-slate-300 text-base font-semibold text-teal-300">ੳ, ਅ, ੲ</p>
                  <p class="text-[11px] text-slate-400 mt-1">ਇਹਨਾਂ 3 ਅੱਖਰਾਂ ਤੋਂ ਹੀ 10 ਸਵਰ ਧੁਨੀਆਂ (ਲਗਾਂ) ਬਣਦੀਆਂ ਹਨ।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">ਲਗਾਂ-ਮਾਤਰਾਂ (10)</span>
                  <p class="text-slate-300 text-xs">ਮੁਕਤਾ (ਕੋਈ ਚਿੰਨ੍ਹ ਨਹੀਂ), ਕੰਨਾ (ਾ), ਸਿਹਾਰੀ (ਿ), ਬਿਹਾਰੀ (ੀ), ਔਂਕੜ (ੁ), ਦੁਲੈਂਕੜ (ੂ), ਲਾਂ (ੇ), ਦੁਲਾਵਾਂ (ੈ), ਹੋੜਾ (ੋ), ਕਨੌੜਾ (ੌ)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-cyan-400 font-bold block mb-1">ਲਗਾਖਰ (3) ਤੇ ਦੁੱਤ ਅੱਖਰ (3)</span>
                  <p class="text-slate-300 text-xs">ਲਗਾਖਰ: <strong>ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ</strong>।
                  <br/>ਦੁੱਤ ਅੱਖਰ (ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ): <strong>ਹ, ਰ, ਵ</strong> (ਜਿਵੇਂ: ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਦੇ ਅੰਗ ਤੇ ਸ਼ਬਦ ਸ਼੍ਰੇਣੀਆਂ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>ਵਿਆਕਰਨ ਦੇ 4 ਅੰਗ:</strong> ਧੁਨੀ ਬੋਧ, ਸ਼ਬਦ ਬੋਧ, ਵਾਕ ਬੋਧ, ਅਤੇ ਅਰਥ ਬੋਧ।</p>
              <p>• <strong>8 ਸ਼ਬਦ ਸ਼੍ਰੇਣੀਆਂ:</strong>
                <br/>1. <em>ਨਾਂਵ (Noun):</em> 5 ਕਿਸਮਾਂ (ਆਮ/ਜਾਤੀਵਾਚਕ, ਖ਼ਾਸ/ਨਿੱਜਵਾਚਕ, ਇਕੱਠਵਾਚਕ, ਵਸਤੂਵਾਚਕ, ਭਾਵਵਾਚਕ)।
                <br/>2. <em>ਪੜਨਾਂਵ (Pronoun):</em> 6 ਕਿਸਮਾਂ (ਪੁਰਖਵਾਚਕ, ਨਿਜਵਾਚਕ, ਨਿਸ਼ਚੇਵਾਚਕ, ਅਨਿਸ਼ਚੇਵਾਚਕ, ਸੰਬੰਧਵਾਚਕ, ਪ੍ਰਸ਼ਨਵਾਚਕ)।
                <br/>3. <em>ਵਿਸ਼ੇਸ਼ਣ (Adjective):</em> 5 ਕਿਸਮਾਂ (ਗੁਣਵਾਚਕ, ਸੰਖਿਆਵਾਚਕ, ਮਿਣਤੀ/ਪਰਿਮਾਣਵਾਚਕ, ਨਿਸ਼ਚੇਵਾਚਕ, ਪੜਨਾਂਵੀ)।
                <br/>4. <em>ਕਿਰਿਆ (Verb):</em> ਅਕਰਮਕ ਤੇ ਸਕਰਮਕ ਕਿਰਿਆ।
                <br/>5. <em>ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ (Adverb):</em> 8 ਕਿਸਮਾਂ।
                <br/>6. <em>ਸੰਬੰਧਕ, ਯੋਜਕ, ਅਤੇ ਵਿਸਮਿਕ (9 ਕਿਸਮਾਂ)।</em>
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. ਪ੍ਰਮੁੱਖ ਮੁਹਾਵਰੇ ਤੇ ਅਖਾਣ (Top Exam Idioms & Proverbs)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <div class="bg-slate-900/90 p-2.5 rounded-lg border border-slate-700">
                <span class="text-amber-300 font-bold block mb-0.5">ਉੱਲੂ ਸਿੱਧਾ ਕਰਨਾ</span>
                <p class="text-slate-300">ਆਪਣਾ ਮਤਲਬ ਕੱਢਣਾ।</p>
              </div>
              <div class="bg-slate-900/90 p-2.5 rounded-lg border border-slate-700">
                <span class="text-amber-300 font-bold block mb-0.5">ਉਂਗਲਾਂ 'ਤੇ ਨਚਾਉਣਾ</span>
                <p class="text-slate-300">ਆਪਣੀ ਮਰਜ਼ੀ ਅਨੁਸਾਰ ਚਲਾਉਣਾ।</p>
              </div>
              <div class="bg-slate-900/90 p-2.5 rounded-lg border border-slate-700">
                <span class="text-emerald-300 font-bold block mb-0.5">ਅੰਨ੍ਹੇ ਅੱਗੇ ਰੋਣਾ, ਦੀਦੇ ਗਾਲਣਾ</span>
                <p class="text-slate-300">ਬੇਤਰਸ ਜਾਂ ਮੂਰਖ ਅੱਗੇ ਦੁੱਖੜਾ ਰੋਣ ਦਾ ਕੋਈ ਲਾਭ ਨਹੀਂ।</p>
              </div>
              <div class="bg-slate-900/90 p-2.5 rounded-lg border border-slate-700">
                <span class="text-emerald-300 font-bold block mb-0.5">ਆਪੇ ਫਾਥੜੀਏ ਤੈਨੂੰ ਕੌਣ ਛੁਡਾਏ</span>
                <p class="text-slate-300">ਜਦੋਂ ਕੋਈ ਜਾਣ-ਬੁੱਝ ਕੇ ਮੁਸੀਬਤ ਵਿੱਚ ਫਸ ਜਾਵੇ।</p>
              </div>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਪੇਪਰ ਏ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਦੀਆਂ ਸਾਰੀਆਂ ਭਰਤੀਆਂ ਲਈ ਪੇਪਰ ਏ ਪਾਸ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ (50 ਵਿੱਚੋਂ 25 ਅੰਕ)। ਇਸ ਵਿੱਚ ਗੁਰਮੁਖੀ ਅੱਖਰ (41 ਅੱਖਰ, 3 ਸਵਰ ਵਾਹਕ, 10 ਲਗਾਂ, 3 ਲਗਾਖਰ, 3 ਦੁੱਤ ਅੱਖਰ) ਅਤੇ ਵਿਆਕਰਨ ਸ਼ਾਮਲ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਅੱਖਰ:</strong> ਕੁੱਲ 41 (ਮੂਲ 35 + 6 ਫਾਰਸੀ ਧੁਨੀਆਂ ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼)।</p>
            <p>• <strong>ਸਵਰ ਵਾਹਕ:</strong> ੳ, ਅ, ੲ। ਲਗਾਂ: 10। ਲਗਾਖਰ: ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ।</p>
            <p>• <strong>ਦੁੱਤ ਅੱਖਰ:</strong> ਹ, ਰ, ਵ (ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ)।</p>
            <p>• <strong>ਨਾਂਵ ਦੀਆਂ ਕਿਸਮਾਂ:</strong> 5। ਪੜਨਾਂਵ: 6। ਵਿਸ਼ੇਸ਼ਣ: 5। ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ: 8। ਵਿਸਮਿਕ: 9।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Compulsory Punjabi Paper A</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Punjab Government mandates 50% minimum passing marks (25/50) in Paper A for every candidate across PSSSB, PPSC, and Education Board examinations.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Alphabet:</strong> 41 characters (35 original 'Painti' + 6 foot-dotted Persian letters: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼).</p>
            <p>• <strong>Vowel Bearers:</strong> 3 (ੳ, ਅ, ੲ). Vowel Signs: 10 (Lagaan). Auxiliary Signs: 3 (Bindi, Tippi, Adhak).</p>
            <p>• <strong>Subjoined Characters:</strong> 3 (ਹ, ਰ, ਵ) written at the foot of consonants.</p>
            <p>• <strong>Grammar Classifications:</strong> Nouns (5 types), Pronouns (6 types), Adjectives (5 types), Adverbs (8 types), Interjections (9 types).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'अनिवार्य पंजाबी पेपर A में 50 में से 25 अंक लाना अनिवार्य है। गुरमुखी में कुल 41 अक्षर (35 मूल + 6 फारसी), 3 स्वर वाहक (ੳ, ਅ, ੲ), 10 लगें, 3 लगाखर (बिंदी, टिप्पी, अधक), 3 दुत अक्षर (ਹ, ਰ, ਵ) तथा नाम की 5 और पड़नाम की 6 किस्में होती हैं।',
      pa: 'ਪੇਪਰ ਏ ਵਿੱਚ 41 ਅੱਖਰ, 3 ਸਵਰ ਵਾਹਕ (ੳ, ਅ, ੲ), 10 ਲਗਾਂ, 3 ਲਗਾਖਰ (ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ), 3 ਦੁੱਤ ਅੱਖਰ (ਹ, ਰ, ਵ), ਨਾਂਵ 5 ਅਤੇ ਪੜਨਾਂਵ 6 ਕਿਸਮਾਂ ਦੇ ਹੁੰਦੇ ਹਨ।',
      en: 'Compulsory Paper A requires 50% pass marks. Gurmukhi script features 41 letters, 3 vowel bearers (ੳ, ਅ, ੲ), 10 vowel signs, 3 auxiliaries (Bindi, Tippi, Adhak), 3 subjoined letters (ਹ, ਰ, ਵ), 5 noun classes, and 6 pronoun types.',
    },
    keyNotes: {
      hi: [
        '📌 गुरमुखी लिपि में कुल 41 अक्षर हैं (35 मूल + 6 नवीन बिंदी वाले अक्षर)।',
        '📌 3 स्वर वाहक: ੳ, ਅ, ੲ (इनसे 10 लगें बनती हैं)।',
        '📌 3 लगाखर: बिंदी (ਂ), टिप्पी (ੰ), अधक (ੱ)।',
        '📌 3 दुत अक्षर (पैर में पड़ने वाले): ਹ, ਰ, ਵ।',
        '📌 नाम की 5, पड़नाम की 6, और विशेषण की 5 किस्में होती हैं।',
      ],
      pa: [
        '📌 ਗੁਰਮੁਖੀ ਵਿੱਚ ਕੁੱਲ 41 ਅੱਖਰ ਹਨ (35 + 6)।',
        '📌 ਸਵਰ ਵਾਹਕ 3 ਹਨ: ੳ, ਅ, ੲ।',
        '📌 ਲਗਾਖਰ 3 ਹਨ: ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ।',
        '📌 ਦੁੱਤ ਅੱਖਰ 3 ਹਨ: ਹ, ਰ, ਵ।',
        '📌 ਨਾਂਵ 5 ਕਿਸਮਾਂ ਅਤੇ ਪੜਨਾਂਵ 6 ਕਿਸਮਾਂ ਦੇ ਹੁੰਦੇ ਹਨ।',
      ],
      en: [
        '📌 Total 41 characters in modern Gurmukhi alphabet.',
        '📌 3 Vowel Bearers: ੳ, ਅ, ੲ.',
        '📌 3 Auxiliary signs (Lagaakhar): Bindi, Tippi, Adhak.',
        '📌 3 Subjoined letters (Doot Akhar): ਹ, ਰ, ਵ.',
        '📌 Nouns have 5 types, Pronouns 6 types, Adjectives 5 types.',
      ],
    },
    flashcards: [
      {
        id: 'fc-pa-1',
        q: { hi: 'गुरमुखी लिपि में पैर में पड़ने वाले (ਦੁੱਤ ਅੱਖਰ) कौन-कौन से हैं?', pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ ਦੁੱਤ ਅੱਖਰ ਕਿਹੜੇ-ਕਿਹੜੇ ਹਨ?', en: 'Which are the subjoined letters (Doot Akhar) in Gurmukhi?' },
        a: { hi: 'तीन अक्षर: ਹ, ਰ, ਵ (ਜਿਵੇਂ: ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)।', pa: 'ਤਿੰਨ ਅੱਖਰ: ਹ, ਰ, ਵ।', en: 'Three letters: ਹ, ਰ, ਵ (written at the foot of consonants).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-pa-2',
        q: { hi: 'गुरमुखी में कुल कितने लगाखर (Lagaakhar) होते हैं?', pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਲਗਾਖਰ ਹੁੰਦੇ ਹਨ?', en: 'How many auxiliary orthographic signs (Lagaakhar) exist in Gurmukhi?' },
        a: { hi: 'तीन लगाखर: बिंदी (ਂ), टिप्पी (ੰ), और अधक (ੱ)।', pa: 'ਤਿੰਨ: ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ।', en: 'Three: Bindi, Tippi, and Adhak.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Compulsory Punjabi Paper A Complete 50 Marks Full Preparation',
        channel: 'Punjab Exam Hub',
        youtubeId: 'PunjabiPaperAFull50',
        language: 'pa',
        views: '650K',
        duration: '1:45:00',
        tags: ['Punjabi', 'Paper A', 'PSSSB'],
      },
    ],
    bookRefs: [
      {
        title: 'Punjabi Vyakaran ate Rachnavali (Class 9 & 10)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'All Grammar Chapters',
        type: 'state-board',
      },
    ],
  },

  // -------------------------------------------------------------
  // 2. PUNJABI SAHITYA (Master Cadre / Lecturer)
  // -------------------------------------------------------------
  'punjabi-sahitya': {
    id: 'punjabi-sahitya',
    topicId: 'punjabi-sahitya',
    subjectId: 'punjabi',
    category: 'language',
    title: {
      hi: 'पंजाबी साहित्य का इतिहास: गुरमत, सूफी, किस्सा एवं आधुनिक साहित्य',
      pa: 'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਇਤਿਹਾਸ: ਗੁਰਮਤਿ, ਸੂਫ਼ੀ, ਕਿੱਸਾ ਤੇ ਆਧੁਨਿਕ ਕਾਵਿ',
      en: 'History of Punjabi Literature: Gurmat, Sufi, Qissa & Modern Poetry',
    },
    examRelevance: 'Punjab Master Cadre Punjabi (150 Qs), School Lecturer Punjabi (150 Qs)',
    estimatedTime: '45 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 मास्टर कैडर पंजाबी हेतु</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              मास्टर कैडर पंजाबी में गुरमत काव्य, सूफी काव्य, किस्सा काव्य, बीर काव्य और आधुनिक पंजाबी साहित्य (भाई वीर सिंह, अमृता प्रीतम, शिव कुमार बटालवी) से 150 में से अधिकांश प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਗੁਰਮਤਿ ਕਾਵਿ ਧਾਰਾ (Gurmat Literature)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ:</strong> ਜਪੁਜੀ ਸਾਹਿਬ, ਆਸਾ ਦੀ ਵਾਰ, ਸਿੱਧ ਗੋਸਟਿ, ਬਾਰਹ ਮਾਹਾ ਤੁਖਾਰੀ, ਪੱਟੀ।</p>
              <p>• <strong>ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ:</strong> ਅਨੰਦੁ ਸਾਹਿਬ (ਰਾਮਕਲੀ ਰਾਗ ਵਿੱਚ)।</p>
              <p>• <strong>ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ:</strong> ਚਾਰ ਲਾਵਾਂ (ਸੂਹੀ ਰਾਗ ਵਿੱਚ ਅਨੰਦ ਕਾਰਜ ਸਮੇਂ), ਘੋੜੀਆਂ।</p>
              <p>• <strong>ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ:</strong> ਸੁਖਮਨੀ ਸਾਹਿਬ (ਗਉੜੀ ਰਾਗ), <strong>1604 ਵਿੱਚ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਸੰਪਾਦਨਾ</strong> ਕੀਤੀ। ਪਹਿਲੇ ਹੈੱਡ ਗ੍ਰੰਥੀ ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਥਾਪੇ ਗਏ।</p>
              <p>• <strong>ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ:</strong> ਜਾਪੁ ਸਾਹਿਬ, ਅਕਾਲ ਉਸਤਤਿ, ਚੰਡੀ ਦੀ ਵਾਰ, ਜ਼ਫ਼ਰਨਾਮਾ (ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਵਿੱਚ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਚਿੱਠੀ)।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਸੂਫ਼ੀ ਅਤੇ ਕਿੱਸਾ ਕਾਵਿ (Sufi & Qissa Traditions)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">ਸੂਫ਼ੀ ਕਵੀ</span>
                  <p class="text-slate-300">• <strong>ਬਾਬਾ ਫ਼ਰੀਦ:</strong> ਪੰਜਾਬੀ ਦੇ ਪਹਿਲੇ ਪ੍ਰਮਾਣਿਕ ਕਵੀ (112 ਸਲੋਕ ਤੇ 4 ਸ਼ਬਦ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ)।</p>
                  <p class="text-slate-300">• <strong>ਸ਼ਾਹ ਹੁਸੈਨ:</strong> ਕਾਫ਼ੀਆਂ ਦੇ ਮੋਢੀ, ਮਲਾਮਤੀ ਸੂਫ਼ੀ।</p>
                  <p class="text-slate-300">• <strong>ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ:</strong> ਕਾਫ਼ੀਆਂ ਦੇ ਸਿਰਮੌਰ ਕਵੀ, ਮੁਰਸ਼ਿਦ ਸ਼ਾਹ ਇਨਾਇਤ ਕਾਦਰੀ।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">ਕਿੱਸਾ ਕਾਵਿ</span>
                  <p class="text-slate-300">• <strong>ਦਮੋਦਰ:</strong> ਪਹਿਲਾ ਹੀਰ-ਰਾਂਝਾ ਕਿੱਸਾਕਾਰ (ਅੱਖੀਂ ਡਿੱਠਾ ਕਿੱਸਾ)।</p>
                  <p class="text-slate-300">• <strong>ਵਾਰਿਸ ਸ਼ਾਹ:</strong> ਹੀਰ ਵਾਰਿਸ ਸ਼ਾਹ (ਬੈਂਤ ਛੰਦ ਵਿੱਚ, ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਸ਼ਾਹਕਾਰ)।</p>
                  <p class="text-slate-300">• <strong>ਪੀਲੂ:</strong> ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ (ਸਦ ਛੰਦ)। ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ।</p>
                  <p class="text-slate-300">• <strong>ਹਾਸ਼ਮ ਸ਼ਾਹ:</strong> ਸੱਸੀ ਪੁੰਨੂ (ਦਵੱਈਆ ਛੰਦ)।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤਕਾਰ (Modern Masters)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>ਭਾਈ ਵੀਰ ਸਿੰਘ:</strong> ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ। ਮਟਕ ਹੁਲਾਰੇ, ਰਾਣਾ ਸੂਰਤ ਸਿੰਘ (ਮਹਾਂਕਾਵਿ, ਸਿਰਖੰਡੀ ਛੰਦ)। ਸਾਹਿਤ ਅਕਾਦਮੀ ਅਵਾਰਡ (1955)।</p>
              <p>• <strong>ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ:</strong> ਪ੍ਰਸਿੱਧ ਕਵਿਤਾ <em>'ਅੱਜ ਆਖਾਂ ਵਾਰਿਸ ਸ਼ਾਹ ਨੂੰ'</em> (1947 ਵੰਡ 'ਤੇ)। 'ਸੁਨੇਹੜੇ' ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਅਵਾਰਡ (1956) ਅਤੇ 'ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ' ਲਈ <strong>ਗਿਆਨਪੀਠ ਅਵਾਰਡ (1981)</strong>।</p>
              <p>• <strong>ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ:</strong> 'ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ'। ਮਹਾਂਕਾਵਿ <strong>'ਲੂਣਾ' (1965)</strong> ਲਈ ਸਭ ਤੋਂ ਛੋਟੀ ਉਮਰ ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਅਵਾਰਡ ਪ੍ਰਾਪਤ ਕੀਤਾ।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ ਪੰਜਾਬੀ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਗੁਰਮਤਿ ਕਾਵਿ (ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ, ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ), ਸੂਫ਼ੀ ਕਾਵਿ (ਬਾਬਾ ਫ਼ਰੀਦ, ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ), ਕਿੱਸਾ ਕਾਵਿ (ਵਾਰਿਸ ਸ਼ਾਹ ਦੀ ਹੀਰ), ਅਤੇ ਆਧੁਨਿਕ ਸਾਹਿਤਕਾਰ (ਭਾਈ ਵੀਰ ਸਿੰਘ, ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ, ਸ਼ਿਵ ਬਟਾਲਵੀ)।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਬਾਬਾ ਫ਼ਰੀਦ:</strong> ਪੰਜਾਬੀ ਦੇ ਪਹਿਲੇ ਕਵੀ (112 ਸਲੋਕ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ)।</p>
            <p>• <strong>ਹੀਰ ਵਾਰਿਸ ਸ਼ਾਹ:</strong> ਬੈਂਤ ਛੰਦ ਵਿੱਚ ਰਚੀ ਗਈ।</p>
            <p>• <strong>ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ:</strong> ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜੇਤੂ (ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ)।</p>
            <p>• <strong>ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ:</strong> ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ, 'ਲੂਣਾ' ਨਾਟ-ਕਾਵਿ ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Punjabi Literature Master Cadre</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers Gurmat literature (Gurus' banis & compilation of Adi Granth in 1604), Sufi saints (Baba Farid, Bulleh Shah), Qissa romantic epics (Waris Shah's Heer), and modern laureates.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Baba Farid:</strong> Earliest recognized Punjabi poet; 112 saloks included in Guru Granth Sahib.</p>
            <p>• <strong>Waris Shah:</strong> Authored the definitive Heer in Baint meter (1766).</p>
            <p>• <strong>Amrita Pritam:</strong> First woman recipient of Sahitya Akademi Award (Sunehure, 1956) and Jnanpith Award (1981).</p>
            <p>• <strong>Shiv Kumar Batalvi:</strong> "King of Pathos" (Birha da Sultan); authored poetic play Loona (1965).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'पंजाबी साहित्य में बाबा फरीद पहले सूफी कवि हैं। 1604 में गुरु अर्जन देव जी ने आदि ग्रंथ की रचना की। वारिस शाह की हीर ब Popular बैंत छंद में है। अमृता प्रीतम को ज्ञानपीठ (कागज ते कैनवस) तथा शिव कुमार बटालवी (बिरहा दा सुल्तान) को लूणा हेतु साहित्य अकादमी पुरस्कार मिला।',
      pa: 'ਬਾਬਾ ਫਰੀਦ ਪਹਿਲੇ ਕਵੀ, 1604 ਵਿੱਚ ਆਦਿ ਗ੍ਰੰਥ ਸੰਪਾਦਨਾ। ਵਾਰਿਸ ਸ਼ਾਹ ਦੀ ਹੀਰ ਬੈਂਤ ਛੰਦ ਵਿੱਚ ਹੈ। ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਗਿਆਨਪੀਠ ਜੇਤੂ ਅਤੇ ਸ਼ਿਵ ਬਟਾਲਵੀ (ਲੂਣਾ) ਸਾਹਿਤ ਅਕਾਦਮੀ ਜੇਤੂ ਹਨ।',
      en: 'Baba Farid is the pioneer Sufi poet; Adi Granth was compiled in 1604; Waris Shah wrote the quintessential Heer in Baint meter; Amrita Pritam won the Jnanpith award and Shiv Batalvi authored Loona.',
    },
    keyNotes: {
      hi: [
        '📌 1604 ई.: गुरु अर्जन देव जी द्वारा आदि ग्रंथ साहिब का संपादन (पहले हेड ग्रंथी बाबा बुड्ढा जी)।',
        '📌 बाबा फरीद: पंजाबी के प्रथम कवि (112 श्लोक गुरु ग्रंथ साहिब में)।',
        '📌 हीर वारिस शाह: बैंत छंद (Baint Chhand) में रचित।',
        '📌 अमृता प्रीतम: ज्ञानपीठ पुरस्कार (1981, कागज़ ते कैनवस) प्राप्त करने वाली पहली पंजाबी साहित्यकार।',
        '📌 शिव कुमार बटालवी को "बिरहा दा सुल्तान" कहा जाता है (रचना: लूणा)।',
      ],
      pa: [
        '📌 1604: ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੁਆਰਾ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦੀ ਸੰਪਾਦਨਾ।',
        '📌 ਬਾਬਾ ਫ਼ਰੀਦ: ਪੰਜਾਬੀ ਦੇ ਪਹਿਲੇ ਪ੍ਰਮਾਣਿਕ ਕਵੀ।',
        '📌 ਹੀਰ ਵਾਰਿਸ ਸ਼ਾਹ ਬੈਂਤ ਛੰਦ ਵਿੱਚ ਹੈ।',
        '📌 ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ: ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ 1981।',
        '📌 ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ: ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ (ਲੂਣਾ)।',
      ],
      en: [
        '📌 1604: Guru Arjan Dev compiled the Adi Granth.',
        '📌 Baba Farid is the first canonical Punjabi poet.',
        "📌 Waris Shah's Heer is written in the Baint meter.",
        '📌 Amrita Pritam won Jnanpith in 1981 for Kagaz Te Canvas.',
        '📌 Shiv Kumar Batalvi is commemorated as Birha Da Sultan (author of Loona).',
      ],
    },
    flashcards: [
      {
        id: 'fc-ps-1',
        q: { hi: 'पंजाबी साहित्य में "बिरहा दा सुल्तान" किसे कहा जाता है और उन्हें किस कृति के लिए साहित्य अकादमी मिला?', pa: '"ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ" ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?', en: 'Who is called the "Birha da Sultan" in Punjabi literature and for which work did he win Sahitya Akademi?' },
        a: { hi: 'शिव कुमार बटालवी; उनके काव्य-नाटक "लूणा" (Loona) के लिए।', pa: 'ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ; "ਲੂਣਾ" ਲਈ।', en: 'Shiv Kumar Batalvi, for his poetic play "Loona".' },
        difficulty: 'easy',
      },
      {
        id: 'fc-ps-2',
        q: { hi: 'ज्ञानपीठ पुरस्कार जीतने वाली पहली पंजाबी साहित्यकार कौन हैं?', pa: 'ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜਿੱਤਣ ਵਾਲੇ ਪਹਿਲੇ ਪੰਜਾਬੀ ਲੇਖਕ ਕੌਣ ਹਨ?', en: 'Who is the first Punjabi author to win the Jnanpith Award?' },
        a: { hi: 'अमृता प्रीतम (1981, "कागज़ ते कैनवस" के लिए)।', pa: 'ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ("ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ" ਲਈ)।', en: 'Amrita Pritam (1981, for Kagaz Te Canvas).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Master Cadre Punjabi Complete Literature Marathon',
        channel: 'Punjabi Sahit Academy',
        youtubeId: 'PunjabiSahitMaster1',
        language: 'pa',
        views: '580K',
        duration: '2:30:00',
        tags: ['Punjabi Sahit', 'Master Cadre', 'Waris Shah'],
      },
    ],
    bookRefs: [
      {
        title: 'Punjabi Sahit da Itihas',
        author: 'Dr. Ratan Singh Jaggi',
        chapters: 'Gurmat, Sufi, Qissa, Modern Literature',
        type: 'standard',
      },
    ],
  },
};
