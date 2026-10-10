import { Lesson } from './types';

export const ENGLISH_LESSONS: Record<string, Lesson> = {
  'english-grammar-lit': {
    id: 'english-grammar-lit',
    topicId: 'english-grammar-lit',
    subjectId: 'english',
    category: 'language',
    title: {
      hi: 'अंग्रेजी व्याकरण एवं साहित्य: नियम, वॉइस, नरेशन व प्रमुख युग',
      pa: 'ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਤੇ ਸਾਹਿਤ: ਨਿਯਮ, ਵਾਇਸ, ਨਰੇਸ਼ਨ ਤੇ ਸਾਹਿਤਕ ਕਾਲ',
      en: 'English Grammar & Literature: Voice, Narration & Literary Eras',
    },
    examRelevance: 'Punjab Master Cadre English (150 Qs), PSSSB Clerk (12 Qs), SSC CHSL (25 Qs), CTET English',
    estimatedTime: '40 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर इंग्लिश में शेक्सपियर, रोमांटिक युग (वर्ड्सवर्थ, कीट्स) और व्याकरण में Subject-Verb Agreement, Active-Passive Voice, और Direct-Indirect Speech से सर्वाधिक अंक पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. अनिवार्य व्याकरण नियम (Subject-Verb Agreement & Error Spotting)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>'As well as', 'Along with', 'Together with':</strong> क्रिया हमेशा <em>प्रथम कर्ता (First Subject)</em> के अनुसार आती है।
                <br/><span class="text-xs text-amber-300 italic">उदा: "The teacher, along with the students, <strong>was</strong> present." (not were)</span>
              </p>
              <p>• <strong>'Either...or', 'Neither...nor', 'Not only...but also':</strong> क्रिया हमेशा <em>निकटतम कर्ता (Nearest Subject)</em> के अनुसार आती है।
                <br/><span class="text-xs text-amber-300 italic">उदा: "Neither the captain nor the players <strong>were</strong> ready."</span>
              </p>
              <p>• <strong>'Each', 'Every', 'Everyone', 'Neither of':</strong> हमेशा <em>एकवचन क्रिया (Singular Verb)</em> लेते हैं।
                <br/><span class="text-xs text-amber-300 italic">उदा: "Each of the answers <strong>is</strong> correct." (not are)</span>
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. Active-Passive Voice एवं Narration ट्रांसफॉर्मेशन</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-amber-400 font-bold block mb-1">Active vs Passive Voice</span>
                <p class="text-slate-300">• Passive में हमेशा मुख्य क्रिया की <strong>3rd Form (Past Participle - V3)</strong> आती है।</p>
                <p class="text-slate-300">• Present Perfect: has/have + been + V3।</p>
                <p class="text-slate-300">• Imperative Sentence: <em>"Close the door"</em> → <strong>"Let the door be closed."</strong></p>
              </div>
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-emerald-400 font-bold block mb-1">Direct to Indirect Speech</span>
                <p class="text-slate-300">• जब Reporting Verb भूतकाल में हो (said): Simple Present → Simple Past; Present Perfect → Past Perfect।</p>
                <p class="text-slate-300">• प्रश्नवाचक वाक्यों में: 'that' के स्थान पर <strong>'if' / 'whether'</strong> लगता है और वाक्य साधारण (Assertive) बन जाता है।</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. अंग्रेजी साहित्य के प्रमुख काल एवं लेखक (Literature)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>विलियम शेक्सपियर (1564 - 1616):</strong> कुल 37 नाटक और <strong>154 सॉनेट (Sonnets)</strong>। 4 महान त्रासदियां (Four Great Tragedies): <em>Hamlet, Othello, King Lear, Macbeth</em> (याद रखने की ट्रिक: <strong>H-O-L-M</strong>)। शेक्सपिरियन सॉनेट राइम स्कीम: <strong>ABAB CDCD EFEF GG</strong>।</p>
              <p>• <strong>रोमांटिक युग (1798 - 1837):</strong>
                <br/>1798 में विलियम वर्ड्सवर्थ और एस.टी. कोलरिज की संयुक्त कृति <strong>'Lyrical Ballads'</strong> के प्रकाशन से प्रारंभ।
                <br/>वर्ड्सवर्थ की परिभाषा: <em>"Poetry is the spontaneous overflow of powerful feelings."</em>
                <br/>जॉन कीट्स: <em>"A thing of beauty is a joy forever"</em> (Endymion)।
              </p>
              <p>• <strong>प्रमुख साहित्यिक अलंकार (Figures of Speech):</strong>
                <br/>1. <em>Simile:</em> 'as' या 'like' से सीधी तुलना (as brave as a lion)।
                <br/>2. <em>Metaphor:</em> बिना 'as/like' के प्रत्यक्ष आरोप (Life is a dream)।
                <br/>3. <em>Oxymoron:</em> दो परस्पर विरोधी शब्दों का युग्म (deafening silence, bittersweet)।
              </p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ ਅੰਗਰੇਜ਼ੀ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਸ਼ੇਕਸਪੀਅਰ (154 ਸੌਨੇਟ, 4 ਟ੍ਰੈਜਡੀਜ਼: ਹੈਮਲੈਟ, ਓਥੈਲੋ, ਕਿੰਗ ਲੀਅਰ, ਮੈਕਬੈਥ), ਰੋਮਾਂਟਿਕ ਕਾਲ (ਲਿਰਿਕਲ ਬੈਲਡਜ਼ 1798), ਅਤੇ ਵਿਆਕਰਨ ਦੇ ਨਿਯਮ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਸ਼ੇਕਸਪੀਅਰ:</strong> 154 ਸੌਨੇਟਸ (ਰਾਈਮ ਸਕੀਮ: ABAB CDCD EFEF GG)।</p>
            <p>• <strong>ਰੋਮਾਂਟਿਕ ਯੁੱਗ:</strong> 1798 ਵਿੱਚ 'Lyrical Ballads' (ਵਰਡਜ਼ਵਰਥ ਤੇ ਕਾਲਰਿਜ) ਨਾਲ ਸ਼ੁਰੂ ਹੋਇਆ।</p>
            <p>• <strong>ਸਬਜੈਕਟ-ਵਰਬ ਐਗਰੀਮੈਂਟ:</strong> 'Each of', 'Neither of' ਨਾਲ ਹਮੇਸ਼ਾ ਸਿੰਗੁਲਰ ਵਰਬ ਲੱਗਦੀ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 High-Yield English Syllabus</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Shakespearean tragedies, Romantic era lyrical poetics, Subject-Verb agreement concord, and voice-narration transforms.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Shakespeare:</strong> 154 Sonnets (Rhyme scheme: ABAB CDCD EFEF GG). The 4 great tragedies: Hamlet, Othello, King Lear, Macbeth.</p>
            <p>• <strong>Romantic Era (1798):</strong> Inaugurated by Wordsworth & Coleridge's 'Lyrical Ballads'. Keats coined "A thing of beauty is a joy forever".</p>
            <p>• <strong>Concord Rules:</strong> Expressions like 'as well as' concord with first subject; 'neither...nor' concords with closest subject; 'each' takes a singular verb.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'शेक्सपियर ने 154 सॉनेट लिखे (ABAB CDCD EFEF GG)। 1798 में लिरिकल बैलाड्स से रोमांटिक युग शुरू हुआ। Subject-Verb Agreement में "along with" प्रथम कर्ता के अनुसार चलता है तथा "Each of" के साथ हमेशा एकवचन क्रिया आती है।',
      pa: "ਸ਼ੇਕਸਪੀਅਰ ਦੇ 154 ਸੌਨੇਟ ਹਨ। 1798 ਵਿੱਚ ਲਿਰਿਕਲ ਬੈਲਡਜ਼ ਨਾਲ ਰੋਮਾਂਟਿਕ ਕਾਲ ਸ਼ੁਰੂ ਹੋਇਆ। 'Each of' ਨਾਲ ਸਿੰਗੁਲਰ ਵਰਬ ਲੱਗਦੀ ਹੈ।",
      en: "Shakespeare wrote 154 sonnets and 4 primary tragedies (HOLM). The Romantic era began in 1798 with Lyrical Ballads. Grammar rules require singular agreement with 'Each of' and nearest concord with 'neither...nor'.",
    },
    keyNotes: {
      hi: [
        '📌 शेक्सपियर के सॉनेट की तुकबंदी (Rhyme Scheme): ABAB CDCD EFEF GG।',
        '📌 शेक्सपियर की 4 महान त्रासदियां: Hamlet, Othello, King Lear, Macbeth (HOLM)।',
        '📌 1798: वर्ड्सवर्थ और कोलरिज द्वारा "Lyrical Ballads" का प्रकाशन।',
        '📌 "Each of", "Neither of", "Everyone" के साथ हमेशा एकवचन क्रिया (Singular Verb) आती है।',
        '📌 "As well as" या "Along with" से जुड़े वाक्यों में क्रिया प्रथम कर्ता के अनुसार आती है।',
      ],
      pa: [
        '📌 ਸ਼ੇਕਸਪੀਅਰ ਦੇ 154 ਸੌਨੇਟਸ ਹਨ।',
        '📌 1798 ਵਿੱਚ Lyrical Ballads ਛਪੀ।',
        "📌 'Each of' ਨਾਲ ਹਮੇਸ਼ਾ Singular Verb ਆਉਂਦੀ ਹੈ।",
      ],
      en: [
        '📌 Shakespearean sonnet rhyme scheme: ABAB CDCD EFEF GG.',
        '📌 Shakespeare four great tragedies: Hamlet, Othello, King Lear, Macbeth (HOLM).',
        '📌 1798: Publication of Lyrical Ballads by Wordsworth and Coleridge.',
        '📌 Phrases introduced by "along with" do not alter the number of the original subject.',
        '📌 Indefinite pronouns like "each" and "neither" take singular verbs.',
      ],
    },
    flashcards: [
      {
        id: 'fc-eng-1',
        q: { hi: 'विलियम शेक्सपियर के सॉनेट (Shakespearean Sonnet) की राइम स्कीम क्या होती है?', pa: 'ਸ਼ੇਕਸਪੀਅਰ ਦੇ ਸੌਨੇਟ ਦੀ ਰਾਈਮ ਸਕੀਮ ਕੀ ਹੈ?', en: 'What is the rhyme scheme of a Shakespearean Sonnet?' },
        a: { hi: 'ABAB CDCD EFEF GG (3 चतुष्पदी / Quatrains + 1 दोहा / Couplet)।', pa: 'ABAB CDCD EFEF GG।', en: 'ABAB CDCD EFEF GG (Three quatrains and a final rhyming couplet).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-eng-2',
        q: { hi: 'अंग्रेजी साहित्य में "रोमांटिक युग" (Romantic Era) किस वर्ष और किस कृति के प्रकाशन से शुरू माना जाता है?', pa: 'ਰੋਮਾਂਟਿਕ ਕਾਲ ਕਦੋਂ ਸ਼ੁਰੂ ਹੋਇਆ?', en: 'Which year and publication mark the commencement of the Romantic Era?' },
        a: { hi: '1798 में, वर्ड्सवर्थ और कोलरिज के "Lyrical Ballads" के प्रकाशन से।', pa: '1798 ਵਿੱਚ Lyrical Ballads ਨਾਲ।', en: '1798, marked by the publication of "Lyrical Ballads" by Wordsworth & Coleridge.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Master Cadre English Complete Literature & Grammar Marathon',
        channel: 'English Literature Zone Punjab',
        youtubeId: 'EnglishMasterCadreFull1',
        language: 'en',
        views: '420K',
        duration: '1:50:00',
        tags: ['English', 'Shakespeare', 'Master Cadre'],
      },
    ],
    bookRefs: [
      {
        title: 'High School English Grammar and Composition',
        author: 'Wren & Martin',
        chapters: 'Subject-Verb Agreement, Active-Passive, Narration',
        type: 'standard',
      },
      {
        title: 'A Critical History of English Literature',
        author: 'David Daiches',
        chapters: 'Elizabethan Drama & Romantic Poetry',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre English Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/EnglishSyllabus04_05_2022.pdf",
            "language": "English",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · English Grammar and Composition · English",
            "url": "https://static.pseb.ac.in/media/1670561605_English%20Grammar-10.pdf",
            "language": "English",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · First Flight (Literature Textbook)",
            "url": "https://ncert.nic.in/textbook/pdf/jeff1dd.zip",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · Footprints Without Feet (Supplementary Reader)",
            "url": "https://ncert.nic.in/textbook/pdf/jefp1dd.zip",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · English Core Language Module",
            "url": "https://nios.ac.in/media/documents/SecEngCour/English/Lesson-01.pdf",
            "language": "English",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "ERD Punjab · Master Cadre English Official Syllabus PDF",
      url: "https://erd.punjab.gov.in/master2022/Docs/EnglishSyllabus04_05_2022.pdf",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },
};
