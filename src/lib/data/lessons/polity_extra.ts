import { Lesson } from './types';

export const POLITY_EXTRA_LESSONS: Record<string, Lesson> = {
  // -------------------------------------------------------------
  // JUDICIARY (Supreme Court & High Courts)
  // -------------------------------------------------------------
  'judiciary': {
    id: 'judiciary',
    topicId: 'judiciary',
    subjectId: 'social-science',
    category: 'polity',
    title: {
      hi: 'भारतीय न्यायपालिका: सर्वोच्च न्यायालय एवं उच्च न्यायालय',
      pa: 'ਭਾਰਤੀ ਨਿਆਂਪਾਲਿਕਾ: ਸੁਪਰੀਮ ਕੋਰਟ ਅਤੇ ਹਾਈ ਕੋਰਟਾਂ',
      en: 'Indian Judiciary: Supreme Court & High Courts',
    },
    examRelevance: 'Punjab Master Cadre Civics (6-8 Qs), PSSSB Clerk (2-3 Qs), Police SI (4-5 Qs)',
    estimatedTime: '30 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              भारतीय संविधान में एकीकृत और स्वतंत्र न्यायपालिका की व्यवस्था की गई है। अनुच्छेद 124 से 147 (सर्वोच्च न्यायालय) और 214 से 231 (उच्च न्यायालय) से सीधे अनुच्छेद और क्षेत्राधिकार संबंधी प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. भारत का सर्वोच्च न्यायालय (Supreme Court of India)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>संवैधानिक प्रावधान:</strong> भाग 5, अध्याय 4, <strong>अनुच्छेद 124 से 147</strong>।</p>
              <p>• <strong>उद्घाटन:</strong> <strong>28 जनवरी 1950</strong> (भारत शासन अधिनियम 1935 के तहत स्थापित फेडरल कोर्ट के स्थान पर)।</p>
              <p>• <strong>संख्या:</strong> वर्तमान में <strong>34 न्यायाधीश</strong> (1 मुख्य न्यायाधीश CJI + 33 अन्य न्यायाधीश)।</p>
              <p>• <strong>नियुक्ति:</strong> राष्ट्रपति द्वारा <em>कॉलेजियम प्रणाली (Collegium System)</em> की सिफारिश पर।</p>
              <p>• <strong>कार्यकाल:</strong> <strong>65 वर्ष की आयु</strong> तक पद पर बने रहते हैं।</p>
              <p>• <strong>पदमुक्ति (अनुच्छेद 124(4)):</strong> संसद के दोनों सदनों में विशेष बहुमत (उपस्थित व मतदान करने वालों का 2/3 और कुल सदस्य संख्या का बहुमत) से पारित प्रस्ताव के आधार पर राष्ट्रपति द्वारा (कदाचार या अक्षमता के आधार पर)।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. सर्वोच्च न्यायालय का क्षेत्राधिकार (Jurisdiction)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                <h4 class="text-amber-400 font-bold text-sm mb-1">🏛️ मूल क्षेत्राधिकार (अनुच्छेद 131)</h4>
                <p class="text-slate-300">केंद्र और एक या अधिक राज्यों के बीच, या दो या अधिक राज्यों के परस्पर विवाद केवल सुप्रीम कोर्ट में ही सुने जा सकते हैं।</p>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                <h4 class="text-emerald-400 font-bold text-sm mb-1">📜 रिट क्षेत्राधिकार (अनुच्छेद 32)</h4>
                <p class="text-slate-300">मौलिक अधिकारों के संरक्षण हेतु 5 प्रकार की रिटें जारी करने का अधिकार (बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार-पृच्छा)।</p>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                <h4 class="text-cyan-400 font-bold text-sm mb-1">⚖️ अपीलीय क्षेत्राधिकार (अनुच्छेद 132-136)</h4>
                <p class="text-slate-300">संवैधानिक, दीवानी और आपराधिक मामलों में हाईकोर्ट के निर्णयों के विरुद्ध सर्वोच्च अपील अदालत। अनुच्छेद 136: विशेष अनुमति याचिका (SLP)।</p>
              </div>
              <div class="bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                <h4 class="text-purple-400 font-bold text-sm mb-1">💡 सलाहकारी क्षेत्राधिकार (अनुच्छेद 143)</h4>
                <p class="text-slate-300">राष्ट्रपति किसी सार्वजनिक महत्व के विधिक प्रश्न पर सुप्रीम कोर्ट से परामर्श मांग सकते हैं (राय मानने हेतु राष्ट्रपति बाध्य नहीं हैं)।</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. उच्च न्यायालय एवं महत्वपूर्ण सिद्धांत</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>अनुच्छेद 214:</strong> प्रत्येक राज्य के लिए एक उच्च न्यायालय (अनुच्छेद 231: संसद दो या अधिक राज्यों के लिए साझा हाईकोर्ट बना सकती है, जैसे पंजाब और हरियाणा हाईकोर्ट, चंडीगढ़)।</p>
              <p>• <strong>कार्यकाल:</strong> हाईकोर्ट न्यायाधीश <strong>62 वर्ष की आयु</strong> तक पद पर रहते हैं।</p>
              <p>• <strong>अनुच्छेद 226:</strong> उच्च न्यायालय का रिट क्षेत्राधिकार (यह मौलिक अधिकारों के अतिरिक्त अन्य कानूनी अधिकारों के उल्लंघन पर भी रिट जारी कर सकता है - इसका दायरा अनु. 32 से व्यापक है)।</p>
              <p>• <strong>अभिलेख न्यायालय (Court of Record):</strong> अनुच्छेद 129 (सुप्रीम कोर्ट) और अनुच्छेद 215 (हाई कोर्ट) - इनके फैसलों को कानूनी साक्ष्य माना जाता है और अवमानना पर दंड देने की शक्ति है।</p>
              <p>• <strong>मूल संरचना का सिद्धांत (Basic Structure Doctrine):</strong> <em>केशवानंद भारती बनाम केरल राज्य (24 अप्रैल 1973)</em> मामले में 13 जजों की पीठ ने निर्णय दिया कि संसद संविधान में संशोधन कर सकती है, लेकिन इसकी मूल संरचना को नहीं बदल सकती।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪ੍ਰੀਖਿਆ ਨੁਕਤੇ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਸੁਪਰੀਮ ਕੋਰਟ (ਆਰਟੀਕਲ 124-147) ਅਤੇ ਹਾਈ ਕੋਰਟ (ਆਰਟੀਕਲ 214-231)। ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ ਅਤੇ ਪੰਜਾਬ ਪੁਲਿਸ ਐਸ.ਆਈ. ਲਈ ਨਿਆਂਪਾਲਿਕਾ ਦੇ ਅਧਿਕਾਰ ਖੇਤਰ ਅਤੇ ਰਿਟਾਂ ਬਾਰੇ ਸਵਾਲ ਪੁੱਛੇ ਜਾਂਦੇ ਹਨ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਸੁਪਰੀਮ ਕੋਰਟ:</strong> ਸਥਾਪਨਾ 28 ਜਨਵਰੀ 1950। ਕੁੱਲ ਜੱਜ 34 (1 ਚੀਫ਼ ਜਸਟਿਸ + 33 ਜੱਜ)। ਰਿਟਾਇਰਮੈਂਟ ਉਮਰ 65 ਸਾਲ।</p>
            <p>• <strong>ਆਰਟੀਕਲ 32:</strong> ਸੁਪਰੀਮ ਕੋਰਟ ਦੁਆਰਾ ਮੌਲਿਕ ਅਧਿਕਾਰਾਂ ਦੀ ਰਾਖੀ ਲਈ 5 ਰਿਟਾਂ।</p>
            <p>• <strong>ਆਰਟੀਕਲ 226:</strong> ਹਾਈ ਕੋਰਟ ਦੀ ਰਿਟ ਜਾਰੀ ਕਰਨ ਦੀ ਸ਼ਕਤੀ। ਰਿਟਾਇਰਮੈਂਟ ਉਮਰ 62 ਸਾਲ।</p>
            <p>• <strong>ਕੇਸ਼ਵਾਨੰਦ ਭਾਰਤੀ ਕੇਸ (1973):</strong> ਸੰਵਿਧਾਨ ਦੇ ਮੂਲ ਢਾਂਚੇ (Basic Structure) ਦਾ ਸਿਧਾਂਤ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Examination Context</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Articles 124 to 147 govern the Supreme Court, while Articles 214 to 231 cover High Courts. Core questions focus on appointment, removal, original/appellate/advisory jurisdictions, writ powers under Article 32 & 226, and the Basic Structure Doctrine.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Supreme Court:</strong> Inaugurated 28 January 1950. Strength: 34 Judges (1 CJI + 33 puisne judges). Retirement age: 65 years.</p>
            <p>• <strong>Article 131:</strong> Original Jurisdiction (exclusive inter-state or Centre-State disputes).</p>
            <p>• <strong>Article 143:</strong> Advisory Jurisdiction (President may seek Supreme Court advice on law/fact of public importance).</p>
            <p>• <strong>Article 226 vs Article 32:</strong> High Courts issue writs for Fundamental Rights and ordinary legal rights (wider scope than SC under Art 32).</p>
            <p>• <strong>Kesavananda Bharati Case (1973):</strong> Established the Basic Structure Doctrine, limiting Parliament's amending power under Article 368.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'भारत में एकीकृत न्यायपालिका है। सर्वोच्च न्यायालय (अनुच्छेद 124-147, 34 जज, 65 वर्ष सेवानिवृत्ति) तथा उच्च न्यायालय (अनुच्छेद 214-231, 62 वर्ष सेवानिवृत्ति)। अनुच्छेद 32 व 226 के तहत रिट जारी की जाती है तथा केशवानंद भारती (1973) केस ने मूल ढांचे का सिद्धांत दिया।',
      pa: 'ਸੁਪਰੀਮ ਕੋਰਟ (ਆਰਟੀਕਲ 124-147, ਰਿਟਾਇਰਮੈਂਟ 65 ਸਾਲ) ਅਤੇ ਹਾਈ ਕੋਰਟ (ਆਰਟੀਕਲ 214-231, ਰਿਟਾਇਰਮੈਂਟ 62 ਸਾਲ)। ਸੰਵਿਧਾਨ ਦੀ ਮੂਲ ਸੰਰਚਨਾ ਕੇਸ਼ਵਾਨੰਦ ਭਾਰਤੀ (1973) ਕੇਸ ਵਿੱਚ ਤੈਅ ਹੋਈ।',
      en: 'India has an integrated judiciary. The Supreme Court (Arts 124-147, 34 judges, retires at 65) and High Courts (Arts 214-231, retire at 62). Writ powers under Art 32 & 226. Basic structure doctrine affirmed in Kesavananda Bharati (1973).',
    },
    keyNotes: {
      hi: [
        '📌 अनुच्छेद 124: सर्वोच्च न्यायालय की स्थापना व गठन।',
        '📌 अनुच्छेद 129: सर्वोच्च न्यायालय अभिलेख न्यायालय (Court of Record) होगा।',
        '📌 अनुच्छेद 131: केंद्र व राज्यों के विवादों में सुप्रीम कोर्ट का प्रारंभिक क्षेत्राधिकार।',
        '📌 अनुच्छेद 143: राष्ट्रपति की सुप्रीम कोर्ट से सलाह लेने की शक्ति।',
        '📌 24 अप्रैल 1973: केशवानंद भारती फैसला (मूल ढांचे का सिद्धांत)।',
      ],
      pa: [
        '📌 ਆਰਟੀਕਲ 124: ਸੁਪਰੀਮ ਕੋਰਟ ਦੀ ਸਥਾਪਨਾ।',
        '📌 ਆਰਟੀਕਲ 131: ਕੇਂਦਰ ਅਤੇ ਰਾਜਾਂ ਦੇ ਝਗੜਿਆਂ ਲਈ ਮੂਲ ਅਧਿਕਾਰ ਖੇਤਰ।',
        '📌 ਆਰਟੀਕਲ 143: ਰਾਸ਼ਟਰਪਤੀ ਨੂੰ ਸਲਾਹ ਦੇਣ ਦੀ ਸ਼ਕਤੀ।',
        '📌 ਕੇਸ਼ਵਾਨੰਦ ਭਾਰਤੀ ਫੈਸਲਾ: 24 ਅਪ੍ਰੈਲ 1973।',
      ],
      en: [
        '📌 Article 124: Establishment and constitution of Supreme Court.',
        '📌 Article 129: Supreme Court is a Court of Record.',
        '📌 Article 131: Original Jurisdiction over inter-state disputes.',
        '📌 Article 143: Presidential reference for advisory opinion.',
        '📌 24 April 1973: Landmark Kesavananda Bharati verdict.',
      ],
    },
    flashcards: [
      {
        id: 'fc-jud-1',
        q: { hi: 'सर्वोच्च न्यायालय के न्यायाधीश किस आयु में सेवानिवृत्त होते हैं?', pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਜੱਜ ਕਿਸ ਉਮਰ ਵਿੱਚ ਰਿਟਾਇਰ ਹੁੰਦੇ ਹਨ?', en: 'At what age do Supreme Court judges retire?' },
        a: { hi: '65 वर्ष की आयु में (जबकि उच्च न्यायालय के न्यायाधीश 62 वर्ष में)।', pa: '65 ਸਾਲ (ਹਾਈ ਕੋਰਟ ਦੇ 62 ਸਾਲ)।', en: 'At 65 years of age (High Court judges retire at 62).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-jud-2',
        q: { hi: 'राष्ट्रपति किस अनुच्छेद के तहत सर्वोच्च न्यायालय से सलाह मांग सकते हैं?', pa: 'ਰਾਸ਼ਟਰਪਤੀ ਕਿਸ ਆਰਟੀਕਲ ਤਹਿਤ ਸੁਪਰੀਮ ਕੋਰਟ ਤੋਂ ਸਲਾਹ ਮੰਗ ਸਕਦੇ ਹਨ?', en: 'Under which Article can the President seek advisory opinion from Supreme Court?' },
        a: { hi: 'अनुच्छेद 143 के तहत।', pa: 'ਆਰਟੀਕਲ 143 ਤਹਿਤ।', en: 'Under Article 143.' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Supreme Court & High Court Complete Polity Masterclass',
        channel: 'Sarkari Prep Live',
        youtubeId: 'Jud1947LawX',
        language: 'hi',
        views: '350K',
        duration: '1:12:00',
        tags: ['Judiciary', 'Polity', 'Master Cadre'],
      },
    ],
    bookRefs: [
      {
        title: 'Indian Polity (6th/7th Edition)',
        author: 'M. Laxmikanth',
        chapters: 'Supreme Court, High Court, Subordinate Courts',
        type: 'standard',
      },
      {
        title: 'Class 11 Political Science - Indian Constitution at Work',
        author: 'NCERT',
        chapters: 'Judiciary',
        type: 'ncert',
      },
    ],
    documents: [
      {
            "title": "Constitution of India · Official Edition · Legislative Department",
            "url": "https://legislative.gov.in/sites/default/files/COI_English.pdf",
            "language": "English",
            "type": "official"
      },
      {
            "title": "भारत का संविधान · आधिकारिक हिंदी संस्करण · विधायी विभाग",
            "url": "https://legislative.gov.in/sites/default/files/COI_Hindi.pdf",
            "language": "Hindi",
            "type": "official"
      },
      {
            "title": "PSEB Class 10 · Civics (ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ) Part I · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NIOS · Indian Judiciary and Local Self Government Module",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/English/Lesson-18.pdf",
            "language": "English",
            "type": "nios"
      }
],
    syllabusReference: {
      "title": "ERD Punjab · Master Cadre Civics (Judiciary & Local Govt) Syllabus",
      "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf"
},
  },

  // -------------------------------------------------------------
  // LOCAL GOVERNMENT & PANCHAYATI RAJ
  // -------------------------------------------------------------
  'local-govt': {
    id: 'local-govt',
    topicId: 'local-govt',
    subjectId: 'social-science',
    category: 'polity',
    title: {
      hi: 'स्थानीय स्वशासन: पंचायती राज एवं नगर निकाय (73वां व 74वां संशोधन)',
      pa: 'ਸਥਾਨਕ ਸਰਕਾਰ: ਪੰਚਾਇਤੀ ਰਾਜ ਅਤੇ ਨਗਰ ਪਾਲਿਕਾਵਾਂ (73ਵੀਂ ਤੇ 74ਵੀਂ ਸੋਧ)',
      en: 'Local Self-Government: Panchayati Raj & Municipalities (73rd & 74th Amendments)',
    },
    examRelevance: 'Punjab Master Cadre Civics (6-8 Qs), Punjab Patwari (5 Qs), PSSSB Clerk (2-3 Qs)',
    estimatedTime: '25 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              गांधीवादी दर्शन और लोकतांत्रिक विकेंद्रीकरण का आधार स्थानीय स्वशासन है। 73वें व 74वें संविधान संशोधन, 11वीं व 12वीं अनुसूची, बलवंत राय मेहता समिति और त्रिस्तरीय ढांचे से बारंबार प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ऐतिहासिक पृष्ठभूमि एवं समितियां</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>स्थानीय स्वशासन के जनक:</strong> लॉर्ड रिपन (1882 का स्थानीय स्वशासन प्रस्ताव भारत में मैग्नाकार्टा माना जाता है)।</p>
              <p>• <strong>अनुच्छेद 40 (DPSP):</strong> राज्य ग्राम पंचायतों के गठन हेतु कदम उठाएगा।</p>
              <p>• <strong>प्रथम राज्य:</strong> <strong>2 अक्टूबर 1959</strong> को पंडित जवाहरलाल नेहरू ने <strong>नागौर (राजस्थान)</strong> में देश की पहली त्रिस्तरीय पंचायती राज व्यवस्था का उद्घाटन किया (दूसरा राज्य: आंध्र प्रदेश)।</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-700 text-xs">
                <p>• <strong>बलवंत राय मेहता समिति (1957):</strong> त्रिस्तरीय पंचायती राज (ग्राम, ब्लॉक, जिला) की सिफारिश।</p>
                <p>• <strong>अशोक मेहता समिति (1977):</strong> द्विस्तरीय प्रणाली (मंडल पंचायत व जिला परिषद) की सिफारिश।</p>
                <p>• <strong>एल.एम. सिंघवी समिति (1986):</strong> पंचायतों को संवैधानिक मान्यता देने की सर्वप्रथम सिफारिश।</p>
                <p>• <strong>पी.के. थुंगन समिति (1988):</strong> संवैधानिक दर्जा देने की पुरजोर संस्तुति।</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. 73वां संविधान संशोधन अधिनियम, 1992</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>लागू होने की तिथि:</strong> <strong>24 अप्रैल 1993</strong> (प्रत्येक वर्ष 24 अप्रैल को <em>राष्ट्रीय पंचायती राज दिवस</em> मनाया जाता है)।</p>
              <p>• <strong>नया भाग व अनुसूची:</strong> संविधान में <strong>भाग 9</strong> तथा <strong>11वीं अनुसूची</strong> जोड़ी गई।</p>
              <p>• <strong>विषय:</strong> 11वीं अनुसूची में कुल <strong>29 विषय</strong> (कृषि, सिंचाई, ग्रामीण गृह निर्माण आदि) शामिल हैं।</p>
              <p>• <strong>अनुच्छेद:</strong> अनुच्छेद 243 से 243-O तक।</p>
              <p>• <strong>त्रिस्तरीय ढांचा (अनुच्छेद 243B):</strong>
                <br/>1. ग्राम स्तर पर <em>ग्राम पंचायत</em>
                <br/>2. मध्यवर्ती (ब्लॉक) स्तर पर <em>पंचायत समिति / क्षेत्र पंचायत</em>
                <br/>3. जिला स्तर पर <em>जिला परिषद</em> (20 लाख से कम आबादी वाले राज्यों में मध्यवर्ती स्तर छोड़ सकते हैं)।
              </p>
              <p>• <strong>महिला आरक्षण (अनुच्छेद 243D):</strong> न्यूनतम 1/3 (33%) सीटें आरक्षित (पंजाब और राजस्थान में महिलाओं हेतु 50% आरक्षण लागू है)।</p>
              <p>• <strong>कार्यकाल (अनुच्छेद 243E):</strong> प्रथम बैठक से <strong>5 वर्ष</strong>। समय पूर्व भंग होने पर <strong>6 माह</strong> के भीतर चुनाव अनिवार्य।</p>
              <p>• <strong>राज्य वित्त आयोग (अनुच्छेद 243I):</strong> राज्यपाल द्वारा प्रत्येक 5 वर्ष में गठन।</p>
              <p>• <strong>राज्य निर्वाचन आयोग (अनुच्छेद 243K):</strong> राज्य निर्वाचन आयुक्त द्वारा पंचायतों के चुनाव संपन्न कराए जाते हैं।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. 74वां संविधान संशोधन (शहरी स्थानीय निकाय)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>लागू होने की तिथि:</strong> 1 जून 1993।</p>
              <p>• <strong>भाग व अनुसूची:</strong> <strong>भाग 9A</strong> एवं <strong>12वीं अनुसूची</strong> (कुल <strong>18 विषय</strong>)।</p>
              <p>• <strong>अनुच्छेद:</strong> अनुच्छेद 243P से 243ZG।</p>
              <p>• <strong>तीन श्रेणियां:</strong> नगर पंचायत (संक्रमणकालीन क्षेत्र), नगर परिषद (छोटे शहरी क्षेत्र), नगर निगम (बड़े महानगरीय क्षेत्र)।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਚਾਇਤੀ ਰਾਜ ਪੰਜਾਬ ਪ੍ਰੀਖਿਆਵਾਂ ਲਈ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              73ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ 1992 (ਲਾਗੂ 24 ਅਪ੍ਰੈਲ 1993) ਅਤੇ 74ਵੀਂ ਸੋਧ ਸ਼ਹਿਰੀ ਲੋਕਲ ਬਾਡੀਜ਼। ਪੰਜਾਬ ਪਟਵਾਰੀ ਅਤੇ ਮਾਸਟਰ ਕੈਡਰ ਵਿੱਚ 11ਵੀਂ (29 ਵਿਸ਼ੇ) ਅਤੇ 12ਵੀਂ ਅਨੁਸੂਚੀ (18 ਵਿਸ਼ੇ) ਤੋਂ ਸਵਾਲ ਪੁੱਛੇ ਜਾਂਦੇ ਹਨ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਪਹਿਲਾ ਰਾਜ:</strong> 2 ਅਕਤੂਬਰ 1959 ਨੂੰ ਨਾਗੌਰ (ਰਾਜਸਥਾਨ)।</p>
            <p>• <strong>ਸਮਿਤੀਆਂ:</strong> ਬਲਵੰਤ ਰਾਏ ਮਹਿਤਾ ਸਮਿਤੀ (1957) ਨੇ 3-ਪੱਧਰੀ ਪ੍ਰਣਾਲੀ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ।</p>
            <p>• <strong>73ਵੀਂ ਸੋਧ:</strong> ਭਾਗ 9, 11ਵੀਂ ਅਨੁਸੂਚੀ ਵਿੱਚ 29 ਵਿਸ਼ੇ। ਪੰਜਾਬ ਵਿੱਚ ਔਰਤਾਂ ਲਈ 50% ਰਾਖਵਾਂਕਰਨ ਹੈ।</p>
            <p>• <strong>ਕੌਮੀ ਪੰਚਾਇਤੀ ਰਾਜ ਦਿਵਸ:</strong> ਹਰ ਸਾਲ 24 ਅਪ੍ਰੈਲ ਨੂੰ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 High-Yield Exam Points</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Lord Ripon is regarded as the father of local self-government in India. The 73rd and 74th Amendments gave constitutional status to Panchayati Raj and Municipalities.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>First Inauguration:</strong> 2 October 1959 at Nagaur, Rajasthan by PM Jawaharlal Nehru.</p>
            <p>• <strong>Committees:</strong> Balwant Rai Mehta (1957, 3-tier), Ashok Mehta (1977, 2-tier), L.M. Singhvi (1986, constitutional status).</p>
            <p>• <strong>73rd Amendment 1992:</strong> Added Part IX and 11th Schedule containing 29 subjects. Enacted on 24 April 1993 (National Panchayati Raj Day).</p>
            <p>• <strong>74th Amendment 1992:</strong> Added Part IX-A and 12th Schedule with 18 functional items for Municipalities.</p>
            <p>• <strong>Key Articles:</strong> 243D (reservations, minimum 1/3 for women; 50% in Punjab), 243I (State Finance Commission), 243K (State Election Commission).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'भारत में स्थानीय स्वशासन की शुरुआत 2 अक्टूबर 1959 को नागौर से हुई। 73वें संशोधन (1992) द्वारा भाग 9 व 11वीं अनुसूची (29 विषय) तथा 74वें संशोधन द्वारा भाग 9A व 12वीं अनुसूची (18 विषय) जोड़ी गई। 24 अप्रैल को राष्ट्रीय पंचायती राज दिवस मनाया जाता है।',
      pa: '2 ਅਕਤੂਬਰ 1959 ਨੂੰ ਨਾਗੌਰ (ਰਾਜਸਥਾਨ) ਤੋਂ ਪੰਚਾਇਤੀ ਰਾਜ ਸ਼ੁਰੂ ਹੋਇਆ। 73ਵੀਂ ਸੋਧ ਨਾਲ 11ਵੀਂ ਅਨੁਸੂਚੀ (29 ਵਿਸ਼ੇ) ਅਤੇ 74ਵੀਂ ਸੋਧ ਨਾਲ 12ਵੀਂ ਅਨੁਸੂਚੀ (18 ਵਿਸ਼ੇ) ਸ਼ਾਮਲ ਹੋਏ। 24 ਅਪ੍ਰੈਲ ਨੂੰ ਰਾਸ਼ਟਰੀ ਪੰਚਾਇਤੀ ਰਾਜ ਦਿਵਸ ਹੁੰਦਾ ਹੈ।',
      en: 'Panchayati Raj began in Nagaur (Rajasthan) on 2 Oct 1959 based on Balwant Rai Mehta committee. 73rd Amendment added Part IX & 11th Schedule (29 matters), while 74th Amendment added Part IX-A & 12th Schedule (18 matters). 24 April is National Panchayati Raj Day.',
    },
    keyNotes: {
      hi: [
        '📌 2 अक्टूबर 1959: नागौर (राजस्थान) में पहली पंचायती राज व्यवस्था का उद्घाटन।',
        '📌 24 अप्रैल: राष्ट्रीय पंचायती राज दिवस।',
        '📌 11वीं अनुसूची: 29 विषय (पंचायती राज)।',
        '📌 12वीं अनुसूची: 18 विषय (नगरपालिकाएं)।',
        '📌 अनुच्छेद 243D: महिलाओं हेतु न्यूनतम 33% आरक्षण (पंजाब व राजस्थान में 50%)।',
      ],
      pa: [
        '📌 2 ਅਕਤੂਬਰ 1959: ਨਾਗੌਰ (ਰਾਜਸਥਾਨ) ਵਿਖੇ ਪਹਿਲਾ ਉਦਘਾਟਨ।',
        '📌 24 ਅਪ੍ਰੈਲ: ਕੌਮੀ ਪੰਚਾਇਤੀ ਰਾਜ ਦਿਵਸ।',
        '📌 11ਵੀਂ ਅਨੁਸੂਚੀ ਵਿੱਚ 29 ਵਿਸ਼ੇ ਹਨ।',
        '📌 12ਵੀਂ ਅਨੁਸੂਚੀ ਵਿੱਚ 18 ਵਿਸ਼ੇ ਹਨ।',
      ],
      en: [
        '📌 2 October 1959: First Panchayati Raj launched at Nagaur, Rajasthan.',
        '📌 24 April: National Panchayati Raj Day.',
        '📌 11th Schedule: 29 functional items for Panchayats.',
        '📌 12th Schedule: 18 functional items for Municipalities.',
        '📌 Article 243D: Reservation of seats for SC/ST and Women (1/3rd constitutional minimum, 50% in Punjab).',
      ],
    },
    flashcards: [
      {
        id: 'fc-lg-1',
        q: { hi: 'संविधान की 11वीं अनुसूची में पंचायतों को कितने कार्य सौंपे गए हैं?', pa: '11ਵੀਂ ਅਨੁਸੂਚੀ ਵਿੱਚ ਪੰਚਾਇਤਾਂ ਨੂੰ ਕਿੰਨੇ ਵਿਸ਼ੇ ਦਿੱਤੇ ਗਏ ਹਨ?', en: 'How many functional matters are listed in the 11th Schedule for Panchayats?' },
        a: { hi: 'कुल 29 विषय (जबकि 12वीं अनुसूची में नगरपालिकाओं हेतु 18 विषय हैं)।', pa: '29 ਵਿਸ਼ੇ (12ਵੀਂ ਅਨੁਸੂਚੀ ਵਿੱਚ 18)।', en: '29 functional matters (compared to 18 in the 12th Schedule for Municipalities).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-lg-2',
        q: { hi: 'राष्ट्रीय पंचायती राज दिवस किस तिथि को मनाया जाता है और क्यों?', pa: 'ਕੌਮੀ ਪੰਚਾਇਤੀ ਰਾਜ ਦਿਵਸ ਕਦੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?', en: 'On which date is National Panchayati Raj Day celebrated and why?' },
        a: { hi: '24 अप्रैल को, क्योंकि 24 अप्रैल 1993 को 73वां संविधान संशोधन लागू हुआ था।', pa: '24 ਅਪ੍ਰੈਲ ਨੂੰ (73ਵੀਂ ਸੋਧ 1993 ਵਿੱਚ ਲਾਗੂ ਹੋਈ ਸੀ)।', en: 'On 24 April, commemorating the coming into force of the 73rd Amendment in 1993.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: '73rd & 74th Amendment Panchayati Raj Complete Lecture',
        channel: 'Civil Services Academy',
        youtubeId: 'Panchayat1992Gov',
        language: 'hi',
        views: '480K',
        duration: '55:00',
        tags: ['Panchayati Raj', '73rd Amendment', 'Polity'],
      },
    ],
    bookRefs: [
      {
        title: 'Indian Polity (6th/7th Edition)',
        author: 'M. Laxmikanth',
        chapters: 'Panchayati Raj, Municipalities',
        type: 'standard',
      },
      {
        title: 'Class 11 Political Science - Indian Constitution at Work',
        author: 'NCERT',
        chapters: 'Local Governments',
        type: 'ncert',
      },
    ],
    documents: [
      {
            "title": "Constitution of India · Official Edition · Legislative Department",
            "url": "https://legislative.gov.in/sites/default/files/COI_English.pdf",
            "language": "English",
            "type": "official"
      },
      {
            "title": "भारत का संविधान · आधिकारिक हिंदी संस्करण · विधायी विभाग",
            "url": "https://legislative.gov.in/sites/default/files/COI_Hindi.pdf",
            "language": "Hindi",
            "type": "official"
      },
      {
            "title": "PSEB Class 10 · Civics (ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ) Part I · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NIOS · Indian Judiciary and Local Self Government Module",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/English/Lesson-18.pdf",
            "language": "English",
            "type": "nios"
      }
],
    syllabusReference: {
      "title": "ERD Punjab · Master Cadre Civics (Judiciary & Local Govt) Syllabus",
      "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf"
},
  },
};
