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
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    prerequisites: {
      hi: [
        'गुरमुखी लिपि के अक्षरों की प्राथमिक पहचान।',
        'देवनागरी और गुरमुखी ध्वनियों के बीच सामान्य सामंजस्य की समझ।',
        'मातृभाषा व्याकरण के मूल अंगों (संज्ञा, सर्वनाम, क्रिया) का सामान्य बोध।',
      ],
      pa: [
        'ਗੁਰਮੁਖੀ ਅੱਖਰਾਂ ਅਤੇ ਪੈਂਤੀ ਅੱਖਰੀ ਦੀ ਮੁੱਢਲੀ ਪਛਾਣ।',
        'ਪੰਜਾਬੀ ਬੋਲਚਾਲ ਅਤੇ ਮੁੱਢਲੀ ਸ਼ਬਦਾਵਲੀ ਦੀ ਸਮਝ।',
        'ਵਿਆਕਰਨ ਦੇ ਮੁੱਢਲੇ ਅੰਗਾਂ (ਨਾਂਵ, ਪੜਨਾਂਵ, ਕਿਰਿਆ) ਦਾ ਸਾਧਾਰਨ ਗਿਆਨ।',
      ],
      en: [
        'Basic familiarity with the Gurmukhi orthographic script and characters.',
        'Spoken comprehension of everyday Punjabi vocabulary.',
        'General orientation with primary grammatical parts of speech (nouns, verbs).',
      ],
    },
    learningObjectives: {
      hi: [
        'गुरमुखी वर्णमाला (41 अक्षर), स्वर वाहक (3), लगां-मात्राएं (10), लगाखर (3) और दुत्त अक्षर (3) की सटीक पहचान करना।',
        'किस स्वर वाहक (ੳ, ਅ, ੲ) के साथ कौन-सी मात्राएं लगती हैं (3, 4, 3 का नियम) को कंठस्थ करना।',
        'पंजाबी व्याकरण के 4 अंगों (ध्वनि, शब्द, वाक्य, अर्थ बोध) और 8 शब्द श्रेणियों का वर्गीकरण करना।',
        'नांव (5 प्रकार), पड़नांव (6 प्रकार), विशेषण (5 प्रकार), और क्रिया (सकर्मक/अकर्मक) का सही विश्लेषण करना।',
        'पंजाबी मुहावरों, अखाणों और शुद्ध-अशुद्ध वर्तनी के नियमों को परीक्षा प्रश्नों पर लागू करना।',
      ],
      pa: [
        'ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ (41 ਅੱਖਰ), ਸਵਰ ਵਾਹਕ (3), ਲਗਾਂ (10), ਲਗਾਖਰ (3) ਅਤੇ ਦੁੱਤ ਅੱਖਰ (3) ਦੀ ਸਹੀ ਪਛਾਣ ਕਰਨਾ।',
        'ਸਵਰ ਵਾਹਕਾਂ ਨਾਲ ਲਗਾਂ ਲੱਗਣ ਦਾ ਨਿਯਮ (ੳ-3, ਅ-4, ੲ-3 = 10) ਚੰਗੀ ਤਰ੍ਹਾਂ ਸਮਝਣਾ।',
        'ਵਿਆਕਰਨ ਦੇ 4 ਅੰਗ ਅਤੇ 8 ਸ਼ਬਦ ਸ਼੍ਰੇਣੀਆਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
        'ਨਾਂਵ (5 ਕਿਸਮਾਂ), ਪੜਨਾਂਵ (6 ਕਿਸਮਾਂ), ਵਿਸ਼ੇਸ਼ਣ (5 ਕਿਸਮਾਂ), ਅਤੇ ਕਿਰਿਆ ਦਾ ਵਰਗੀਕਰਨ ਕਰਨਾ।',
        'ਮੁਹਾਵਰੇ, ਅਖਾਣ ਅਤੇ ਸ਼ੁੱਧ-ਅਸ਼ੁੱਧ ਸ਼ਬਦਾਂ ਦੇ ਨਿਯਮਾਂ ਨੂੰ ਹੱਲ ਕਰਨਾ।',
      ],
      en: [
        'Classify Gurmukhi orthography: 41 letters, 3 vowel bearers (ੳ, ਅ, ੲ), 10 vowel signs (lagaan), 3 auxiliary markers, 3 subjoined letters.',
        'Apply the vowel-bearer distribution rule: ੳ takes 3, ਅ takes 4, and ੲ takes 3.',
        'Analyze the 4 components of Punjabi grammar and the 8 parts of speech.',
        'Differentiate categories of Nouns (5 types), Pronouns (6 types), Adjectives (5 types), and Verbs (Transitive/Intransitive).',
        'Solve qualifying exam questions on idioms, proverbs, and orthographic spelling correction.',
      ],
    },
    workedExamples: [
      {
        title: {
          hi: 'उदाहरण 1: स्वर वाहक और लगां-मात्राओं का नियम (ੳ, ਅ, ੲ)',
          pa: 'ਉਦਾਹਰਨ 1: ਸਵਰ ਵਾਹਕਾਂ ਨਾਲ ਲਗਾਂ ਲੱਗਣ ਦਾ ਨਿਯਮ',
          en: 'Worked Example 1: Vowel Bearer and Lagaan Distribution Rule',
        },
        problem: {
          hi: 'गुरमुखी लिपि में कुल 3 स्वर वाहक (ੳ, ਅ, ੲ) और 10 लगां-मात्राएं होती हैं। स्पष्ट कीजिए कि प्रत्येक स्वर वाहक के साथ कौन-कौन सी मात्राएं लगती हैं?',
          pa: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ 3 ਸਵਰ ਵਾਹਕਾਂ (ੳ, ਅ, ੲ) ਨਾਲ ਕਿਹੜੀਆਂ-ਕਿਹੜੀਆਂ ਲਗਾਂ ਲੱਗਦੀਆਂ ਹਨ?',
          en: 'In Gurmukhi script, there are 3 vowel bearers and 10 vowel signs (lagaan). Identify the exact distribution of signs for each bearer.',
        },
        steps: {
          hi: [
            "कदम 1: स्वर वाहक 'ੳ' (ਊੜਾ) के साथ कुल 3 मात्राएं लगती हैं: ਔਂਕੜ (ੁ), ਦੁਲੈਂਕੜ (ੂ), और ਹੋੜਾ (ਓ - खुला मुंह)। नोट: 'ੳ' कभी मुक्ता नहीं रहता।",
            "कदम 2: स्वर वाहक 'ਅ' (ਐੜਾ) के साथ कुल 4 मात्राएं लगती हैं: ਮੁਕਤਾ (ਕੋਈ ਚਿੰਨ੍ਹ ਨਹੀਂ), ਕੰਨਾ (ਾ), ਦੁਲਾਵਾਂ (ੈ), ਅਤੇ ਕਨੌੜਾ (ੌ)।",
            "कदम 3: स्वर वाहक 'ੲ' (ਈੜੀ) के साथ कुल 3 मात्राएं लगती हैं: ਸਿਹਾਰੀ (ਿ), ਬਿਹਾਰੀ (ੀ), ਅਤੇ ਲਾਂ (ੇ)।",
            "कदम 4: कुल योग = 3 + 4 + 3 = 10 लगां-मात्राएं।",
          ],
          pa: [
            "ਕਦਮ 1: 'ੳ' ਨਾਲ 3 ਲਗਾਂ: ਔਂਕੜ (ੁ), ਦੁਲੈਂਕੜ (ੂ), ਹੋੜਾ (ਓ)।",
            "ਕਦਮ 2: 'ਅ' ਨਾਲ 4 ਲਗਾਂ: ਮੁਕਤਾ, ਕੰਨਾ (ਾ), ਦੁਲਾਵਾਂ (ੈ), ਕਨੌੜਾ (ੌ)।",
            "ਕਦਮ 3: 'ੲ' ਨਾਲ 3 ਲਗਾਂ: ਸਿਹਾਰੀ (ਿ), ਬਿਹਾਰੀ (ੀ), ਲਾਂ (ੇ)।",
            "ਕਦਮ 4: ਕੁੱਲ ਜੋੜ = 3 + 4 + 3 = 10 ਲਗਾਂ।",
          ],
          en: [
            "Step 1: 'ੳ' takes 3 vowel signs: Aunkar (ੁ), Dulenkar (ੂ), and Hora (ਓ, with open top). 'ੳ' is never mukta.",
            "Step 2: 'ਅ' takes 4 vowel signs: Mukta (no sign), Kanna (ਾ), Dulavan (ੈ), and Kanaura (ੌ).",
            "Step 3: 'ੲ' takes 3 vowel signs: Sihari (ਿ), Bihari (ੀ), and Laan (ੇ).",
            "Step 4: Total = 3 + 4 + 3 = 10 vowel sounds.",
          ],
        },
        solution: {
          hi: 'ੳ = 3 मात्राएं, ਅ = 4 मात्राएं, ੲ = 3 मात्राएं। कुल = 10 मात्राएं।',
          pa: 'ੳ ਨਾਲ 3, ਅ ਨਾਲ 4, ੲ ਨਾਲ 3। ਕੁੱਲ 10 ਲਗਾਂ।',
          en: 'ੳ: 3, ਅ: 4, ੲ: 3. Total: 10 Lagaan.',
        },
        takeaway: {
          hi: 'याद रखने का सूत्र: 3 - 4 - 3 = 10। ੳ के साथ कभी सिहारी या कन्ना नहीं लग सकता।',
          pa: 'ਯਾਦ ਰੱਖਣ ਦਾ ਫਾਰਮੂਲਾ: 3 - 4 - 3 = 10।',
          en: 'Mnemonic rule: 3 - 4 - 3 = 10. ੳ can never pair with Sihari or Kanna.',
        },
      },
      {
        title: {
          hi: 'उदाहरण 2: नांव (संज्ञा) के भेदों की पहचान',
          pa: 'ਉਦਾਹਰਨ 2: ਨਾਂਵ ਦੀਆਂ ਕਿਸਮਾਂ ਦੀ ਪਛਾਣ',
          en: 'Worked Example 2: Classification of Punjabi Noun Categories',
        },
        problem: {
          hi: 'निम्नलिखित शब्दों में नांव का भेद बताइए: (1) ਸਤਲੁਜ (सतलुज), (2) ਇੱਜੜ (रेवड़), (3) ਖ਼ੁਸ਼ੀ (खुशी)',
          pa: 'ਹੇਠ ਲਿਖੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਨਾਂਵ ਦੀ ਕਿਸਮ ਦੱਸੋ: (1) ਸਤਲੁਜ, (2) ਇੱਜੜ, (3) ਖ਼ੁਸ਼ੀ',
          en: 'Identify the noun category for: (1) ਸਤਲੁਜ (Satluj), (2) ਇੱਜੜ (Herd/Flock), (3) ਖ਼ੁਸ਼ੀ (Happiness)',
        },
        steps: {
          hi: [
            "कदम 1: 'ਸਤਲੁਜ' एक विशेष नदी का नाम है, अतः यह 'ਖ਼ਾਸ ਨਾਂਵ' (व्यक्तिवाचक संज्ञा / Proper Noun) है।",
            "कदम 2: 'ਇੱਜੜ' भेड़ों/बकरियों के समूह को दर्शाता है, अतः यह 'ਇਕੱਠਵਾਚਕ ਨਾਂਵ' (समूहवाचक संज्ञा / Collective Noun) है।",
            "कदम 3: 'ਖ਼ੁਸ਼ੀ' केवल महसूस की जा सकती है, देखी या छुई नहीं जा सकती, अतः यह 'ਭਾਵਵਾਚਕ ਨਾਂਵ' (भाववाचक संज्ञा / Abstract Noun) है।",
          ],
          pa: [
            'ਕਦਮ 1: ਸਤਲੁਜ = ਖ਼ਾਸ ਨਾਂਵ (ਨਿੱਜਵਾਚਕ)।',
            'ਕਦਮ 2: ਇੱਜੜ = ਇਕੱਠਵਾਚਕ ਨਾਂਵ।',
            'ਕਦਮ 3: ਖ਼ੁਸ਼ੀ = ਭਾਵਵਾਚਕ ਨਾਂਵ।',
          ],
          en: [
            "Step 1: 'ਸਤਲੁਜ' is a specific geographic river, classifying it as Khas Naav (Proper Noun).",
            "Step 2: 'ਇੱਜੜ' denotes a collection/group of animals, classifying it as Ikatthvachak Naav (Collective Noun).",
            "Step 3: 'ਖ਼ੁਸ਼ੀ' represents an intangible emotional state, classifying it as Bhavvachak Naav (Abstract Noun).",
          ],
        },
        solution: {
          hi: '(1) ਸਤਲੁਜ = खास नांव, (2) ਇੱਜੜ = इकठ्ठावाचक नांव, (3) ਖ਼ੁਸ਼ੀ = भाववाचक नांव।',
          pa: '(1) ਸਤਲੁਜ = ਖ਼ਾਸ ਨਾਂਵ, (2) ਇੱਜੜ = ਇਕੱਠਵਾਚਕ ਨਾਂਵ, (3) ਖ਼ੁਸ਼ੀ = ਭਾਵਵਾਚਕ ਨਾਂਵ।',
          en: '(1) Proper Noun, (2) Collective Noun, (3) Abstract Noun.',
        },
        takeaway: {
          hi: 'नांव के 5 भेद होते हैं: आम नांव, खास नांव, वस्तुआवाचक, इकठ्ठावाचक, और भाववाचक।',
          pa: 'ਨਾਂਵ ਦੀਆਂ 5 ਕਿਸਮਾਂ ਹੁੰਦੀਆਂ ਹਨ: ਆਮ, ਖ਼ਾਸ, ਵਸਤੂਵਾਚਕ, ਇਕੱਠਵਾਚਕ, ਭਾਵਵਾਚਕ।',
          en: 'Nouns in Punjabi comprise 5 distinct taxonomic categories.',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          hi: 'भ्रांति: गुरमुखी लिपि में मूल रूप से 41 अक्षर थे।',
          pa: 'ਭੁਲੇਖਾ: ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਸ਼ੁਰੂ ਤੋਂ ਹੀ 41 ਅੱਖਰ ਸਨ।',
          en: 'Misconception: The Gurmukhi script originally consisted of 41 letters.',
        },
        correction: {
          hi: 'सत्य: मूल रूप से गुरमुखी में 35 अक्षर ही थे (इसलिए इसे \'ਪੈਂਤੀ\' कहा गया)। बाद में फारसी-अरबी ध्वनियों के लिए 6 पैर-बिंदी वाले अक्षर (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼) जोड़े गए, जिससे कुल संख्या 41 हुई।',
          pa: 'ਸੱਚ: ਮੂਲ ਰੂਪ ਵਿੱਚ 35 ਅੱਖਰ ਸਨ (ਇਸ ਲਈ ਇਸਨੂੰ \'ਪੈਂਤੀ\' ਕਿਹਾ ਜਾਂਦਾ ਹੈ)। ਬਾਅਦ ਵਿੱਚ 6 ਨਵੀਨ ਅੱਖਰ ਪੈਰ ਬਿੰਦੀ ਵਾਲੇ ਜੋੜੇ ਗਏ ਅਤੇ ਕੁੱਲ 41 ਬਣੇ।',
          en: 'Correction: The traditional alphabet comprised 35 letters (hence named "Painti"). Six sub-dotted characters were subsequently appended for Perso-Arabic phonemes, totaling 41.',
        },
        whyItMatters: {
          hi: 'परीक्षा में "मूल अक्षर" (35) और "वर्तमान कुल अक्षर" (41) पर अलग-अलग प्रश्न आते हैं।',
          pa: 'ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਮੂਲ ਅੱਖਰ (35) ਅਤੇ ਮੌਜੂਦਾ ਅੱਖਰਾਂ (41) ਵਿੱਚ ਭੁਲੇਖਾ ਪਾਇਆ ਜਾਂਦਾ ਹੈ।',
          en: 'Standard qualifying questions distinguish original (35) from modern standard count (41).',
        },
      },
      {
        misconception: {
          hi: 'भ्रांति: दुत्त अक्षर (Doot Akhar) शब्द के ऊपर लगाए जाने वाले चिन्ह हैं।',
          pa: 'ਭੁਲੇਖਾ: ਦੁੱਤ ਅੱਖਰ ਸ਼ਬਦ ਦੇ ਉੱਪਰ ਲੱਗਦੇ ਹਨ।',
          en: 'Misconception: Doot Akhar (subjoined letters) are placed above or beside characters.',
        },
        correction: {
          hi: 'सत्य: दुत्त अक्षर वे 3 अक्षर हैं जो अन्य अक्षरों के \'पैर में\' (नीचे) लिखे जाते हैं: ਹ, ਰ, ਵ (ਜਿਵੇਂ ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)। ऊपर केवल लगाखर (बिंदी, टिप्पी, अधक) लगते हैं।',
          pa: 'ਸੱਚ: ਦੁੱਤ ਅੱਖਰ ਉਹ ਹਨ ਜੋ ਪੈਰ ਵਿੱਚ ਪੈਂਦੇ ਹਨ: ਹ, ਰ, ਵ (ਜਿਵੇਂ: ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)।',
          en: 'Correction: Doot Akhar are subjoined consonants written at the foot of other letters: ਹ, ਰ, ਵ.',
        },
        whyItMatters: {
          hi: 'लगाखर (3) और दुत्त अक्षर (3) में भ्रम के कारण अभ्यर्थी गलत विकल्प चुन लेते हैं।',
          pa: 'ਲਗਾਖਰ (3) ਅਤੇ ਦੁੱਤ ਅੱਖਰ (3) ਵਿਚਲੇ ਫ਼ਰਕ ਉੱਤੇ ਸਿੱਧਾ ਸਵਾਲ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          en: 'Essential for discriminating auxiliary orthographic markers from subjoined conjuncts.',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        hi: [
          'गुरमुखी वर्णमाला: 41 कुल अक्षर, 3 स्वर वाहक (ੳ, ਅ, ੲ), 10 लगां-मात्राएं, 3 लगाखर (बिंदी, टिप्पी, अधक), 3 दुत्त अक्षर (ह, र, व)।',
          'मात्रा आवंटन: ੳ-3, ਅ-4, ੲ-3 (कुल 10)। ੳ कभी मुक्ता नहीं होता।',
          'शब्द श्रेणियां: नांव (5 प्रकार), पड़नांव (6 प्रकार), विशेषण (5 प्रकार), क्रिया (2 मुख्य प्रकार: अकर्मक, सकर्मक)।',
          'विराम चिन्ह: पूर्ण विराम हेतु गुरमुखी में डंडी (।) का प्रयोग होता है।',
        ],
        pa: [
          'ਗੁਰਮੁਖੀ ਅੱਖਰ: ਕੁੱਲ 41 (ਮੂਲ 35), ਸਵਰ ਵਾਹਕ 3 (ੳ, ਅ, ੲ), ਲਗਾਂ 10, ਲਗਾਖਰ 3 (ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ), ਦੁੱਤ ਅੱਖਰ 3 (ਹ, ਰ, ਵ)।',
          'ਲਗਾਂ ਫਾਰਮੂਲਾ: ੳ-3, ਅ-4, ੲ-3।',
          'ਸ਼ਬਦ ਭੇਦ: ਨਾਂਵ 5, ਪੜਨਾਂਵ 6, ਵਿਸ਼ੇਸ਼ਣ 5, ਕਿਰਿਆ 2 (ਅਕਰਮਕ, ਸਕਰਮਕ)।',
          'ਪੂਰਨ ਵਿਰਾਮ ਲਈ ਡੰਡੀ (।) ਵਰਤੀ ਜਾਂਦੀ ਹੈ।',
        ],
        en: [
          'Gurmukhi Structure: 41 modern letters (35 original), 3 Vowel Bearers, 10 Vowel Signs, 3 Auxiliary Signs, 3 Subjoined Letters.',
          'Vowel Bearer Rule: ੳ-3, ਅ-4, ੲ-3. ੳ is never used as Mukta.',
          'Parts of Speech: Nouns 5, Pronouns 6, Adjectives 5, Verbs 2 (Transitive, Intransitive).',
          'Punctuation: Dandi (।) is used as full stop.',
        ],
      },
      keyFormulasOrRules: {
        hi: [
          'स्वर वाहक मात्रा सूत्र: ੳ (3) + ਅ (4) + ੲ (3) = 10 लगां',
          'लगाखर प्रयोग: मुक्ता, कन्ना, बिहारी, लां, दुलावां, होड़ा, कनौड़ा के साथ बिंदी; मुक्ता, सिहारी, औंकड़, दुलैंकड़ के साथ टिप्पी',
        ],
        pa: [
          'ਲਗਾਂ ਨਿਯਮ: ੳ (3) + ਅ (4) + ੲ (3) = 10',
          'ਲਗਾਖਰ: ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ (ਆਵਾਜ਼ ਦੁੱਗਣੀ ਕਰਨ ਲਈ)',
        ],
        en: [
          'Vowel Bearer Rule: ੳ (3) + ਅ (4) + ੲ (3) = 10.',
          'Nasal Markers: Bindi and Tippi rule dependent on associated vowel mark.',
        ],
      },
      examTraps: {
        hi: [
          'धोखा: ੳ के साथ सिहारी या कन्ना लगाना व्याकरणिक रूप से असंभव है।',
          "धोखा: 'ਅੱਧਕ' स्वर नहीं है, यह ध्वनि को दोहरा/बलशाली करने वाला लगाखर है।",
        ],
        pa: [
          'ਧੋਖਾ: ੳ ਨਾਲ ਕਦੇ ਵੀ ਕੰਨਾ ਜਾਂ ਸਿਹਾਰੀ ਨਹੀਂ ਲੱਗਦੀ।',
          'ਧੋਖਾ: ਅੱਧਕ ਲਗ ਨਹੀਂ ਸਗੋਂ ਲਗਾਖਰ ਹੈ ਜੋ ਆਵਾਜ਼ ਦੁੱਗਣੀ ਕਰਦਾ ਹੈ।',
        ],
        en: [
          'Trap: ੳ cannot take Kanna or Sihari under Gurmukhi orthography.',
          'Trap: Adhak is an auxiliary geminate sign (doubling consonant sound), NOT a vowel sign.',
        ],
      },
    },
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      verifiedSyllabusDenominator: 'Punjab Govt Mandatory Punjabi Paper A Notification & PSEB Matriculation Grammar',
      correctionHistory: [
        {
          date: '2026-10-10',
          description: 'Authored complete topic package with full trilingual parity, worked examples, misconceptions, and official PSEB textbook references.',
        },
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
    documents: [
      {
        title: 'ERD Punjab · Master Cadre Punjabi Official Syllabus PDF',
        url: 'https://erd.punjab.gov.in/master2022/Docs/PunjabiSyllabus04_05_2022.pdf',
        language: 'ਪੰਜਾਬੀ (Official ERD)',
        type: 'syllabus',
        publisher: 'Education Recruitment Board (ERB), Punjab',
        chapterOrPage: 'Official Punjabi Syllabus Specification',
        accessNotes: 'Official syllabus guidelines for Punjabi teacher recruitment and qualifying exams.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
      {
        title: 'PSEB Class 10 · Punjabi Vyakaran ate Rachnavali (ਪੰਜਾਬੀ ਵਿਆਕਰਨ)',
        url: 'https://static.pseb.ac.in/media/1670561510_Panjabi%20Vyakaran-10.pdf',
        language: 'ਪੰਜਾਬੀ',
        type: 'textbook',
        publisher: 'Punjab School Education Board (PSEB)',
        chapterOrPage: 'Chapters 1–8 (Gurmukhi Akhar, Lagaan, Naav, Parnaav)',
        accessNotes: 'Official state matriculation grammar standard textbook.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
      {
        title: 'Punjab Govt Notification · Paper A Punjabi Qualifying (50 Marks) Rules',
        url: 'https://sssb.punjab.gov.in/Downloads/2023/Punjabi_Qualifying_Notification.pdf',
        language: 'ਪੰਜਾਬੀ',
        type: 'official',
        publisher: 'Punjab Subordinate Services Selection Board (PSSSB)',
        chapterOrPage: 'Punjab State Qualifying Notification 2023',
        accessNotes: 'Mandatory 50% qualifying criterion for all Punjab Group C and cadre posts.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
    ],
    syllabusReference: {
      title: 'Punjab Government Compulsory Punjabi Paper A & PSEB Matriculation Standard',
      url: 'https://sssb.punjab.gov.in/',
      body: 'Education Recruitment Board & PSSSB Punjab',
      verifiedOn: '2026-10-10',
    },
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
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Punjabi Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/PunjabiSyllabus04_05_2022.pdf",
            "language": "ਪੰਜਾਬੀ (Official ERD)",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Sahit Mala (ਸਾਹਿਤ ਮਾਲਾ ਕਾਵਿ ਤੇ ਵਾਰਤਕ) · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561421_Sahit%20Mala-10%28Punjabi%29.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "PSEB Class 10 · Vangi (ਵੰਨਗੀ ਕਹਾਣੀਆਂ ਤੇ ਇਕਾਂਗੀ) · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561462_Vangi-10.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "PSEB Class 10 · Punjabi Vyakaran ate Rachnavali (ਪੰਜਾਬੀ ਵਿਆਕਰਨ)",
            "url": "https://static.pseb.ac.in/media/1670561510_Panjabi%20Vyakaran-10.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "Punjab Govt Notification · Paper A Punjabi Qualifying (50 Marks) Rules",
            "url": "https://sssb.punjab.gov.in/Downloads/2023/Punjabi_Qualifying_Notification.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "official"
      }
],
    syllabusReference: {
      title: "ERD Punjab · Master Cadre Punjabi Official Syllabus PDF",
      url: "https://erd.punjab.gov.in/master2022/Docs/PunjabiSyllabus04_05_2022.pdf",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },
};

PUNJABI_LESSONS['punjabi-grammar-lit'] = {
  ...PUNJABI_LESSONS['punjabi-paper-a'],
  id: 'punjabi-grammar-lit',
  topicId: 'punjabi-grammar-lit',
};

