import { Lesson } from './types';

export const PATWARI_POLICE_LESSONS: Record<string, Lesson> = {
  // -------------------------------------------------------------
  // 1. PUNJAB PATWARI: LAND MEASUREMENT & AGRICULTURE
  // -------------------------------------------------------------
  'patwari-agriculture-accounts': {
    id: 'patwari-agriculture-accounts',
    topicId: 'patwari-agriculture-accounts',
    subjectId: 'patwari-special',
    category: 'patwari',
    title: {
      hi: 'पंजाब पटवारी: भूमि माप इकाइयां, राजस्व रिकॉर्ड एवं कृषि',
      pa: 'ਪੰਜਾਬ ਪਟਵਾਰੀ: ਜ਼ਮੀਨ ਮਿਣਤੀ ਇਕਾਈਆਂ, ਮਾਲ ਰਿਕਾਰਡ ਤੇ ਖੇਤੀਬਾੜੀ',
      en: 'Punjab Patwari: Land Measurement Units, Revenue Records & Agriculture',
    },
    examRelevance: 'Punjab Patwari Exam PSSSB (100 Qs total; 25-30 Qs from Revenue, Land Units & Agriculture)',
    estimatedTime: '40 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 पंजाब पटवारी परीक्षा का सबसे महत्वपूर्ण भाग</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब राजस्व विभाग (Revenue Department) की पटवारी भर्ती में करम, सरसाही, मरला, कनाल, किल्ला/एकड़ के परस्पर रूपांतरण, जमाबंदी, गिरदावरी, इंतकाल और पंजाब की प्रमुख नहर प्रणालियों से 25 से अधिक प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. पंजाब में भूमि माप इकाइयां (Land Measurement Units in Punjab)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">करम, सरसाही व मरला</span>
                  <p class="text-slate-300">• <strong>1 करम (Karam)</strong> = <strong>5.5 फीट</strong> (66 इंच = 1.6764 मीटर)।</p>
                  <p class="text-slate-300">• <strong>1 वर्ग करम = 1 सरसाही (Sarsahi)</strong> = 30.25 वर्ग फीट।</p>
                  <p class="text-slate-300">• <strong>9 सरसाही = 1 मरला (Marla)</strong> = <strong>272.25 वर्ग फीट</strong> (30.25 वर्ग गज)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">कनाल, किल्ला एवं एकड़</span>
                  <p class="text-slate-300">• <strong>20 मरला = 1 कनाल (Kanal)</strong> = <strong>5445 वर्ग फीट</strong> (605 वर्ग गज)।</p>
                  <p class="text-slate-300">• <strong>8 कनाल = 1 किल्ला / 1 एकड़ / 1 घुमाऊं</strong> = <strong>43,560 वर्ग फीट</strong> (4840 वर्ग गज = 4047 वर्ग मीटर)।</p>
                  <p class="text-slate-300">• 1 किल्ले की लंबाई-चौड़ाई: <strong>36 करम × 40 करम</strong> (198 फीट × 220 फीट = 1440 वर्ग करम)।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. प्रमुख राजस्व शब्दावली एवं अभिलेख (Revenue Records)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>जमाबंदी (Jamabandi - Record of Rights):</strong> भूमि के स्वामित्व (Ownership), काश्तकारी, और लगान का मुख्य सरकारी रजिस्टर, जो प्रत्येक <strong>4 वर्ष बाद</strong> नया तैयार किया जाता है।</p>
              <p>• <strong>खसरा गिरदावरी (Khasra Girdawari):</strong> फसल निरीक्षण रजिस्टर। पटवारी द्वारा वर्ष में <strong>दो बार</strong> (खरीफ फसल हेतु अक्टूबर में तथा रबी हेतु मार्च में) मौके पर जाकर दर्ज की जाती है।</p>
              <p>• <strong>इंतकाल / दाखिल-खारिज (Intiqal / Mutation):</strong> भूमि की बिक्री, वसीयत, या उत्तराधिकार के बाद राजस्व अभिलेखों में नाम परिवर्तन की कानूनी प्रक्रिया।</p>
              <p>• <strong>शजरा किश्तवार (Shajra Kishtwar / लट्ठा):</strong> कपड़े (लट्ठा) पर बना गांव का नक्शा, जिसमें प्रत्येक खसरा नंबर की सीमाएं अंकित होती हैं।</p>
              <p>• <strong>रोज़नामचा वाक्याती (Roznamcha Waqiati):</strong> पटवारी की दैनिक डायरी जिसमें गांव की प्राकृतिक आपदाओं, फसलों, विवादों की दैनिक प्रविष्टियां होती हैं।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. पंजाब कृषि एवं प्रमुख नहरें (Punjab Agriculture & Canals)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>रबी फसलें:</strong> गेहूं, सरसों, चना, जौ (अक्टूबर-नवंबर में बुवाई, बैसाखी/अप्रैल में कटाई)।</p>
              <p>• <strong>खरीफ फसलें:</strong> धान (चावल), कपास (नरमा), मक्का, गन्ना (जून-जुलाई में बुवाई, अक्टूबर में कटाई)।</p>
              <p>• <strong>हरित क्रांति (Green Revolution):</strong> 1966-67 में पंजाब से शुरुआत; जनक: डॉ. एम.एस. स्वामीनाथन (वैश्विक जनक: नॉर्मन बोरलॉग)। पंजाब एग्रीकल्चर यूनिवर्सिटी (<strong>PAU लुधियाना, स्थापना 1962</strong>) की मुख्य भूमिका।</p>
              <p>• <strong>प्रमुख नहरें:</strong>
                <br/>1. <em>सरहिंद नहर:</em> रोपड़ हेडवर्क्स (सतलुज नदी) से निकलती है (उद्घाटन 1882)।
                <br/>2. <em>ऊपरी बारी दोआब नहर (UBDC):</em> माधोपुर हेडवर्क्स (रावी नदी) से।
                <br/>3. <em>भाखड़ा मुख्य नहर:</em> नांगल से निकलती है।
              </p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਪਟਵਾਰੀ ਸਿਲੇਬਸ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਜ਼ਮੀਨ ਮਿਣਤੀ ਇਕਾਈਆਂ (ਕਰਮ 5.5 ਫੁੱਟ, ਮਰਲਾ 272.25 ਵਰਗ ਫੁੱਟ, ਕਨਾਲ 5445 ਵਰਗ ਫੁੱਟ, ਕਿੱਲਾ 8 ਕਨਾਲ), ਜਮ੍ਹਾਬੰਦੀ, ਖਸਰਾ ਗਿਰਦਾਵਰੀ, ਅਤੇ ਪੰਜਾਬ ਦੀਆਂ ਨਹਿਰਾਂ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>1 ਕਰਮ:</strong> 5.5 ਫੁੱਟ (66 ਇੰਚ)। 1 ਮਰਲਾ = 9 ਸਰਸਾਹੀਆਂ = 272.25 ਵਰਗ ਫੁੱਟ।</p>
            <p>• <strong>1 ਕਨਾਲ:</strong> 20 ਮਰਲੇ = 5445 ਵਰਗ ਫੁੱਟ। 1 ਕਿੱਲਾ/ਏਕੜ = 8 ਕਨਾਲ = 43,560 ਵਰਗ ਫੁੱਟ।</p>
            <p>• <strong>ਜਮ੍ਹਾਬੰਦੀ:</strong> ਮਾਲਕੀ ਰਿਕਾਰਡ ਹਰ 4 ਸਾਲ ਬਾਅਦ ਤਿਆਰ ਹੁੰਦਾ ਹੈ।</p>
            <p>• <strong>ਖਸਰਾ ਗਿਰਦਾਵਰੀ:</strong> ਸਾਲ ਵਿੱਚ 2 ਵਾਰ (ਸਾਉਣੀ ਅਕਤੂਬਰ ਅਤੇ ਹਾੜ੍ਹੀ ਮਾਰਚ ਵਿੱਚ)।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Punjab Patwari Exam Focus</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Comprehensive guide to revenue measurement systems, land title registers, crop surveys, and Punjab canal irrigation networks.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>1 Karam:</strong> 5.5 feet (66 inches). 1 Marla = 272.25 sq. feet (30.25 sq. yards).</p>
            <p>• <strong>1 Kanal:</strong> 20 Marlas = 5,445 sq. feet. 1 Killa / Acre = 8 Kanals = 43,560 sq. feet (4,840 sq. yards).</p>
            <p>• <strong>Jamabandi:</strong> Record of Rights prepared every 4 years.</p>
            <p>• <strong>Khasra Girdawari:</strong> Harvest inspection register updated twice annually (Kharif in Oct, Rabi in March).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'पंजाब में 1 करम = 5.5 फीट, 1 मरला = 272.25 वर्ग फीट, 1 कनाल = 20 मरला, 1 किल्ला/एकड़ = 8 कनाल = 43,560 वर्ग फीट। जमाबंदी 4 वर्ष में बनती है और गिरदावरी वर्ष में दो बार होती है। सरहिंद नहर सतलुज से रोपड़ हेडवर्क्स से निकलती है।',
      pa: "1 ਕਰਮ = 5.5 ਫੁੱਟ, 1 ਮਰਲਾ = 272.25 ਵਰਗ ਫੁੱਟ, 1 ਕਨਾਲ = 20 ਮਰਲੇ, 1 ਕਿੱਲਾ = 8 ਕਨਾਲ। ਜਮ੍ਹਾਬੰਦੀ 4 ਸਾਲ ਵਿੱਚ ਅਤੇ ਗਿਰਦਾਵਰੀ ਸਾਲ 'ਚ ਦੋ ਵਾਰ ਹੁੰਦੀ ਹੈ।",
      en: '1 Karam = 5.5 ft, 1 Marla = 272.25 sq ft, 1 Kanal = 20 Marlas, 1 Killa/Acre = 8 Kanals = 43,560 sq ft. Jamabandi is updated quadrennially, Girdawari biannually.',
    },
    keyNotes: {
      hi: [
        '📌 1 करम = 5.5 फीट (66 इंच); 1 मरला = 272.25 वर्ग फीट।',
        '📌 1 कनाल = 20 मरला (5445 वर्ग फीट)।',
        '📌 1 किल्ला / एकड़ / घुमाऊं = 8 कनाल (43,560 वर्ग फीट = 4840 वर्ग गज)।',
        '📌 जमाबंदी (Jamabandi) प्रत्येक 4 वर्ष में तैयार की जाती है।',
        '📌 खसरा गिरदावरी वर्ष में 2 बार (अक्टूबर खरीफ व मार्च रबी) होती है।',
      ],
      pa: [
        '📌 1 ਕਰਮ = 5.5 ਫੁੱਟ; 1 ਮਰਲਾ = 272.25 ਵਰਗ ਫੁੱਟ।',
        '📌 1 ਕਨਾਲ = 20 ਮਰਲੇ; 1 ਕਿੱਲਾ = 8 ਕਨਾਲ (43,560 ਵਰਗ ਫੁੱਟ)।',
        '📌 ਜਮ੍ਹਾਬੰਦੀ ਹਰ 4 ਸਾਲ ਬਾਅਦ ਤਿਆਰ ਹੁੰਦੀ ਹੈ।',
        '📌 ਖਸਰਾ ਗਿਰਦਾਵਰੀ ਸਾਲ ਵਿੱਚ 2 ਵਾਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
      ],
      en: [
        '📌 1 Karam = 5.5 feet; 1 Marla = 272.25 square feet.',
        '📌 1 Kanal = 20 Marlas (5,445 sq. ft).',
        '📌 1 Killa / Acre = 8 Kanals (43,560 sq. ft = 4,840 sq. yards).',
        '📌 Jamabandi (Record of Rights) is revised every 4 years.',
        '📌 Khasra Girdawari is conducted biannually in October and March.',
      ],
    },
    flashcards: [
      {
        id: 'fc-pat-1',
        q: { hi: 'पंजाब में 1 किल्ले या एकड़ में कुल कितने कनाल और कितने वर्ग फीट होते हैं?', pa: '1 ਕਿੱਲੇ ਵਿੱਚ ਕਿੰਨੇ ਕਨਾਲ ਤੇ ਕਿੰਨੇ ਵਰਗ ਫੁੱਟ ਹੁੰਦੇ ਹਨ?', en: 'How many Kanals and square feet are in one Killa (Acre) in Punjab?' },
        a: { hi: '8 कनाल = 43,560 वर्ग फीट (4840 वर्ग गज)।', pa: '8 ਕਨਾਲ = 43,560 ਵਰਗ ਫੁੱਟ।', en: '8 Kanals = 43,560 square feet (4,840 sq. yards).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-pat-2',
        q: { hi: 'राजस्व विभाग में "जमाबंदी" (Jamabandi) कितने वर्षों के अंतराल पर तैयार की जाती है?', pa: 'ਜਮ੍ਹਾਬੰਦੀ ਕਿੰਨੇ ਸਾਲ ਬਾਅਦ ਤਿਆਰ ਹੁੰਦੀ ਹੈ?', en: 'At what time interval is Jamabandi prepared?' },
        a: { hi: 'प्रत्येक 4 वर्ष के बाद।', pa: 'ਹਰ 4 ਸਾਲ ਬਾਅਦ।', en: 'Every 4 years.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Punjab Patwari Land Measurement Units Complete Lecture',
        channel: 'Patwari Preparation Punjab',
        youtubeId: 'PatwariMeasurementPunjab1',
        language: 'pa',
        views: '520K',
        duration: '1:15:00',
        tags: ['Patwari', 'Kanal', 'Punjab GK'],
      },
    ],
    bookRefs: [
      {
        title: 'Punjab Land Record Manual',
        author: 'Director of Land Records Punjab',
        chapters: 'Jamabandi, Girdawari, Measurement Units',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "PSSSB Patwari · Official Detailed Syllabus Notification PDF",
            "url": "https://sssb.punjab.gov.in/Downloads/2023/Patwari_Syllabus.pdf",
            "language": "Punjabi / English",
            "type": "syllabus"
      },
      {
            "title": "Punjab Police Recruitment Board · Constable & SI Official Syllabus",
            "url": "https://punjabpolice.gov.in/recruitment/syllabus_2024.pdf",
            "language": "Punjabi / English",
            "type": "syllabus"
      },
      {
            "title": "Punjab Land Records Society (PLRS) · Official Land Glossary & Manual",
            "url": "https://plrs.org.in/manual/revenue_terms_punjabi.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "official"
      },
      {
            "title": "Ministry of Law & Justice · Bharatiya Nyaya Sanhita (BNS 2023) Official Gazette",
            "url": "https://egazette.gov.in/WriteReadData/2023/250883.pdf",
            "language": "Hindi / English",
            "type": "official"
      }
],
    syllabusReference: {
      "title": "PSSSB Patwari & Punjab Police Official Examination Scheme",
      "url": "https://sssb.punjab.gov.in/Downloads/2023/Patwari_Syllabus.pdf"
},
  },

  // -------------------------------------------------------------
  // 2. POLICE LAW BASICS & CRIMINAL PROCEDURE
  // -------------------------------------------------------------
  'police-law-basics': {
    id: 'police-law-basics',
    topicId: 'police-law-basics',
    subjectId: 'police-special',
    category: 'police',
    title: {
      hi: 'पुलिस एवं विधि मूल बातें: CrPC, IPC/BNS, FIR एवं गिरफ्तारी नियम',
      pa: 'ਪੁਲਿਸ ਤੇ ਕਾਨੂੰਨ ਮੂਲ ਸਿਧਾਂਤ: ਐਫ.ਆਈ.ਆਰ., ਗ੍ਰਿਫ਼ਤਾਰੀ ਨਿਯਮ ਤੇ ਧਾਰਾਵਾਂ',
      en: 'Police & Legal Basics: FIR, Arrest Guidelines & Criminal Law',
    },
    examRelevance: 'Punjab Police Sub-Inspector (30-40 Qs), Punjab Police Constable (15-20 Qs)',
    estimatedTime: '35 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 पंजाब पुलिस भर्ती परीक्षा हेतु</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              सब-इंस्पेक्टर (SI) और कांस्टेबल परीक्षा में पुलिस संगठन, FIR की प्रक्रिया, संज्ञेय/असंज्ञेय अपराध, डी.के. बसु गिरफ्तारी दिशा-निर्देश और मानवाधिकारों से अनिवार्य प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. पुलिस प्रशासन एवं संवैधानिक स्थिति</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>संवैधानिक सूची:</strong> भारतीय संविधान की 7वीं अनुसूची के अनुसार <strong>'पुलिस' एवं 'लोक व्यवस्था' (Public Order) राज्य सूची (State List - प्रविष्टि 1 व 2)</strong> के विषय हैं।</p>
              <p>• <strong>पद सोपान (Hierarchy):</strong>
                <br/>DGP (पुलिस महानिदेशक) → ADGP → IGP → DIG → SSP/SP (जिला प्रमुख) → DSP / ACP → थाना प्रभारी / SHO (Inspector) → सब-इंस्पेक्टर (SI) → ASI → हेड कांस्टेबल → कांस्टेबल।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. प्रथम सूचना रिपोर्ट (FIR) एवं अपराध वर्गीकरण</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">संज्ञेय अपराध (Cognizable Offence)</span>
                  <p class="text-slate-300">• गंभीर अपराध (उदा. हत्या, बलात्कार, डकैती)।</p>
                  <p class="text-slate-300">• पुलिस <strong>बिना वारंट के गिरफ्तार</strong> कर सकती है और मजिस्ट्रेट की अनुमति के बिना जांच शुरू कर सकती है।</p>
                  <p class="text-slate-300">• धारा 154 CrPC (धारा 173 BNS): संज्ञेय अपराध की सूचना पर FIR दर्ज करना अनिवार्य है (ललिता कुमारी केस)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">असंज्ञेय अपराध (Non-Cognizable)</span>
                  <p class="text-slate-300">• सामान्य/कम गंभीर अपराध (उदा. साधारण मारपीट, मानहानि)।</p>
                  <p class="text-slate-300">• पुलिस बिना वारंट के गिरफ्तार नहीं कर सकती। धारा 155 CrPC के तहत NCR दर्ज होती है और जांच हेतु मजिस्ट्रेट की अनुमति अनिवार्य है।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. गिरफ्तारी दिशानिर्देश एवं संवैधानिक अधिकार</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>अनुच्छेद 22(2):</strong> गिरफ्तार किए गए व्यक्ति को <strong>24 घंटे के भीतर</strong> (यात्रा समय छोड़कर) निकटतम मजिस्ट्रेट के समक्ष पेश करना अनिवार्य है।</p>
              <p>• <strong>डी.के. बसु बनाम पश्चिम बंगाल राज्य (1997):</strong> सर्वोच्च न्यायालय द्वारा गिरफ्तारी हेतु 11 अनिवार्य दिशानिर्देश जारी किए गए:
                <br/>1. पुलिस अधिकारी स्पष्ट नेम-टैग और पदनाम धारण करेगा।
                <br/>2. गिरफ्तारी मेमो (Arrest Memo) मौके पर तैयार होगा।
                <br/>3. गिरफ्तार व्यक्ति के परिजन/मित्र को 8-12 घंटे में सूचना दी जाएगी।
                <br/>4. प्रत्येक 48 घंटे में मान्यता प्राप्त डॉक्टर से चिकित्सकीय जांच (Medical Examination) कराई जाएगी।
              </p>
              <p>• <strong>महिला गिरफ्तारी:</strong> सूर्यास्त के बाद और सूर्योदय से पहले किसी महिला को गिरफ्तार नहीं किया जाएगा (विशेष परिस्थिति में न्यायिक मजिस्ट्रेट की पूर्व अनुमति आवश्यक) और महिला पुलिस अधिकारी की उपस्थिति अनिवार्य है।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਪੁਲਿਸ ਐਸ.ਆਈ. ਲਈ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੁਲਿਸ ਰਾਜ ਸੂਚੀ ਦਾ ਵਿਸ਼ਾ ਹੈ। ਐਫ.ਆਈ.ਆਰ. (ਧਾਰਾ 154 CrPC), 24 ਘੰਟਿਆਂ ਅੰਦਰ ਮੈਜਿਸਟਰੇਟ ਸਾਹਮਣੇ ਪੇਸ਼ੀ (ਆਰਟੀਕਲ 22), ਅਤੇ ਡੀ.ਕੇ. ਬਾਸੂ ਗ੍ਰਿਫ਼ਤਾਰੀ ਨਿਯਮ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਸੰਵਿਧਾਨਕ ਸਥਿਤੀ:</strong> ਪੁਲਿਸ ਰਾਜ ਸੂਚੀ (State List) ਵਿੱਚ ਆਉਂਦੀ ਹੈ।</p>
            <p>• <strong>ਆਰਟੀਕਲ 22:</strong> ਗ੍ਰਿਫਤਾਰ ਵਿਅਕਤੀ ਨੂੰ 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਮੈਜਿਸਟ੍ਰੇਟ ਅੱਗੇ ਪੇਸ਼ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ।</p>
            <p>• <strong>ਡੀ.ਕੇ. ਬਾਸੂ ਕੇਸ (1997):</strong> ਸੁਪਰੀਮ ਕੋਰਟ ਦੁਆਰਾ ਗ੍ਰਿਫਤਾਰੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Law & Police Essentials</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Police & Public Order fall under the State List (List II). Landmark provisions include Section 154 CrPC (FIR for cognizable crimes), Article 22 constitutional safeguards, and D.K. Basu arrest guidelines.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Cognizable Offence:</strong> Police may arrest without a warrant and investigate directly; registration of FIR under Section 154 is mandatory.</p>
            <p>• <strong>Article 22(2):</strong> Production before the nearest Magistrate within 24 hours of arrest (excluding journey time) is an inviolable fundamental right.</p>
            <p>• <strong>D.K. Basu vs State of West Bengal (1997):</strong> Supreme Court formulated 11 mandatory arrest safeguards including arrest memo, medical examination, and family notification.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'पुलिस राज्य सूची का विषय है। संज्ञेय अपराधों में धारा 154 CrPC के तहत FIR अनिवार्य है और पुलिस बिना वारंट गिरफ्तार कर सकती है। अनुच्छेद 22(2) के तहत 24 घंटे में मजिस्ट्रेट के सामने पेश करना अनिवार्य है। डी.के. बसु (1997) केस में गिरफ्तारी नियम तय हुए।',
      pa: 'ਪੁਲਿਸ ਰਾਜ ਸੂਚੀ ਦਾ ਵਿਸ਼ਾ ਹੈ। ਆਰਟੀਕਲ 22 ਤਹਿਤ 24 ਘੰਟਿਆਂ ਵਿੱਚ ਮੈਜਿਸਟਰੇਟ ਸਾਹਮਣੇ ਪੇਸ਼ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ। ਡੀ.ਕੇ. ਬਾਸੂ ਕੇਸ ਵਿੱਚ ਗ੍ਰਿਫ਼ਤਾਰੀ ਨਿਯਮ ਦਿੱਤੇ ਗਏ।',
      en: 'Police is a State subject. Cognizable crimes mandate FIR under Section 154 CrPC and allow arrest without warrant. Article 22 guarantees production before magistrate within 24 hours. D.K. Basu (1997) established arrest guidelines.',
    },
    keyNotes: {
      hi: [
        '📌 पुलिस और लोक व्यवस्था भारतीय संविधान की 7वीं अनुसूची की "राज्य सूची" में आते हैं।',
        '📌 धारा 154 CrPC: संज्ञेय अपराध में FIR दर्ज करना अनिवार्य है (ललिता कुमारी केस)।',
        '📌 अनुच्छेद 22(2): गिरफ्तार व्यक्ति को 24 घंटे के भीतर मजिस्ट्रेट के समक्ष पेश करना अनिवार्य है।',
        '📌 डी.के. बसु बनाम पश्चिम बंगाल राज्य (1997): गिरफ्तारी हेतु सर्वोच्च न्यायालय के 11 दिशानिर्देश।',
      ],
      pa: [
        '📌 ਪੁਲਿਸ ਰਾਜ ਸੂਚੀ (State List) ਦਾ ਵਿਸ਼ਾ ਹੈ।',
        '📌 ਧਾਰਾ 154 CrPC ਤਹਿਤ ਐਫ.ਆਈ.ਆਰ. ਦਰਜ ਹੁੰਦੀ ਹੈ।',
        '📌 ਆਰਟੀਕਲ 22(2): 24 ਘੰਟੇ ਅੰਦਰ ਮੈਜਿਸਟ੍ਰੇਟ ਸਾਹਮਣੇ ਪੇਸ਼ੀ।',
        '📌 ਡੀ.ਕੇ. ਬਾਸੂ ਕੇਸ: 1997 ਸੁਪਰੀਮ ਕੋਰਟ ਗ੍ਰਿਫ਼ਤਾਰੀ ਨਿਯਮ।',
      ],
      en: [
        '📌 Police and Public Order are entries in the State List (List II, Seventh Schedule).',
        '📌 Section 154 CrPC mandates FIR registration for cognizable offenses.',
        '📌 Article 22(2) stipulates production before magistrate within 24 hours of arrest.',
        '📌 D.K. Basu guidelines (1997) set binding procedures for custody and arrest.',
      ],
    },
    flashcards: [
      {
        id: 'fc-pol-1',
        q: { hi: 'संविधान के अनुच्छेद 22 के तहत गिरफ्तार किए गए व्यक्ति को कितने समय में मजिस्ट्रेट के समक्ष पेश करना अनिवार्य है?', pa: 'ਗ੍ਰਿਫ਼ਤਾਰ ਵਿਅਕਤੀ ਨੂੰ ਕਿੰਨੇ ਸਮੇਂ ਵਿੱਚ ਮੈਜਿਸਟਰੇਟ ਅੱਗੇ ਪੇਸ਼ ਕਰਨਾ ਹੁੰਦਾ ਹੈ?', en: 'Within what time limit must an arrested person be produced before a Magistrate under Article 22?' },
        a: { hi: '24 घंटे के भीतर (यात्रा समय को छोड़कर)।', pa: '24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ।', en: 'Within 24 hours (excluding the time necessary for journey).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-pol-2',
        q: { hi: 'सर्वोच्च न्यायालय के किस ऐतिहासिक फैसले में पुलिस द्वारा गिरफ्तारी के 11 अनिवार्य दिशानिर्देश तय किए गए थे?', pa: 'ਕਿਹੜੇ ਕੇਸ ਵਿੱਚ ਗ੍ਰਿਫ਼ਤਾਰੀ ਨਿਯਮ ਤੈਅ ਹੋਏ?', en: 'In which landmark judgment did Supreme Court frame 11 mandatory arrest guidelines?' },
        a: { hi: 'डी.के. बसु बनाम पश्चिम बंगाल राज्य (1997)।', pa: 'ਡੀ.ਕੇ. ਬਾਸੂ ਬਨਾਮ ਪੱਛਮੀ ਬੰਗਾਲ (1997)।', en: 'D.K. Basu vs State of West Bengal (1997).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Punjab Police SI & Constable Criminal Law & Police Administration',
        channel: 'Punjab Police Academy Prep',
        youtubeId: 'PoliceLawPunjabSI1',
        language: 'pa',
        views: '460K',
        duration: '1:30:00',
        tags: ['Police', 'CrPC', 'FIR'],
      },
    ],
    bookRefs: [
      {
        title: 'The Code of Criminal Procedure (CrPC)',
        author: 'Ratanlal & Dhirajlal',
        chapters: 'Arrest of Persons & Information to Police',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "PSSSB Patwari · Official Detailed Syllabus Notification PDF",
            "url": "https://sssb.punjab.gov.in/Downloads/2023/Patwari_Syllabus.pdf",
            "language": "Punjabi / English",
            "type": "syllabus"
      },
      {
            "title": "Punjab Police Recruitment Board · Constable & SI Official Syllabus",
            "url": "https://punjabpolice.gov.in/recruitment/syllabus_2024.pdf",
            "language": "Punjabi / English",
            "type": "syllabus"
      },
      {
            "title": "Punjab Land Records Society (PLRS) · Official Land Glossary & Manual",
            "url": "https://plrs.org.in/manual/revenue_terms_punjabi.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "official"
      },
      {
            "title": "Ministry of Law & Justice · Bharatiya Nyaya Sanhita (BNS 2023) Official Gazette",
            "url": "https://egazette.gov.in/WriteReadData/2023/250883.pdf",
            "language": "Hindi / English",
            "type": "official"
      }
],
    syllabusReference: {
      "title": "PSSSB Patwari & Punjab Police Official Examination Scheme",
      "url": "https://sssb.punjab.gov.in/Downloads/2023/Patwari_Syllabus.pdf"
},
  },
};
