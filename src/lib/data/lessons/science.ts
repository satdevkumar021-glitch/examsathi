import { Lesson } from './types';

export const SCIENCE_LESSONS: Record<string, Lesson> = {
  // -------------------------------------------------------------
  // 1. PHYSICS CONCEPTS
  // -------------------------------------------------------------
  'physics-concepts': {
    id: 'physics-concepts',
    topicId: 'physics-concepts',
    subjectId: 'science',
    category: 'science',
    title: {
      hi: 'भौतिक विज्ञान: यांत्रिकी, ऊष्मागतिकी, प्रकाशिकी एवं विद्युत',
      pa: 'ਭੌਤਿਕ ਵਿਗਿਆਨ: ਮਕੈਨਿਕਸ, ਆਪਟਿਕਸ ਅਤੇ ਬਿਜਲੀ ਦੇ ਸਿਧਾਂਤ',
      en: 'Physics: Mechanics, Thermodynamics, Optics & Electricity',
    },
    examRelevance: 'Punjab Master Cadre Science (30-35 Qs), Lecturer Physics, ETT & REET L2 Science (15-20 Qs)',
    estimatedTime: '45 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर (Science Non-Medical) और ETT/REET लेवल-2 में भौतिक विज्ञान के 30+ प्रश्न सीधे न्यूटन के नियमों, गुरुत्वाकर्षण, दर्पण/लेंस सूत्र, ओम के नियम और ऊष्मागतिकी से पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. यांत्रिकी एवं गति के नियम (Mechanics & Laws of Motion)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-700">
                  <h4 class="text-amber-400 font-bold text-xs uppercase mb-1">प्रथम नियम (जड़त्व का नियम)</h4>
                  <p class="text-xs text-slate-300">यदि कोई वस्तु विरामावस्था या सरल रेखा में एकसमान गति में है, तो वह तब तक वैसी ही रहेगी जब तक उस पर कोई बाह्य बल न लगे। (बल की गुणात्मक परिभाषा)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-700">
                  <h4 class="text-emerald-400 font-bold text-xs uppercase mb-1">द्वितीय नियम (F = ma)</h4>
                  <p class="text-xs text-slate-300">संवेग परिवर्तन की दर लगाए गए बाह्य बल के समानुपाती होती है: <em>F = dp/dt = m·a</em>। (बल की मात्रात्मक माप)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-700">
                  <h4 class="text-cyan-400 font-bold text-xs uppercase mb-1">तृतीय नियम (क्रिया-प्रतिक्रिया)</h4>
                  <p class="text-xs text-slate-300">प्रत्येक क्रिया के बराबर और विपरीत दिशा में प्रतिक्रिया होती है। (उदाहरण: रॉकेट का प्रक्षेपण, बंदूक का पीछे हटना)।</p>
                </div>
              </div>
              <p class="text-xs text-slate-300 pt-2 border-t border-slate-700">
                • <strong>रैखिक संवेग संरक्षण:</strong> बाह्य बल की अनुपस्थिति में कुल संवेग नियत रहता है (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂)।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. गुरुत्वाकर्षण एवं ऊर्जा (Gravitation & Energy)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>सार्वत्रिक गुरुत्वाकर्षण नियम:</strong> F = G · (m₁ · m₂) / r²; जहाँ G = <strong>6.674 × 10⁻¹¹ N·m²/kg²</strong> (कैवेंडिश द्वारा मापा गया)।</p>
              <p>• <strong>गुरुत्वीय त्वरण (g):</strong> पृथ्वी की सतह पर g = <strong>9.8 m/s²</strong>। ध्रुवों (Poles) पर अधिकतम तथा भूमध्य रेखा (Equator) पर न्यूनतम; पृथ्वी के केंद्र पर g = 0 होता है।</p>
              <p>• <strong>पलायन वेग (Escape Velocity):</strong> पृथ्वी की सतह से पलायन वेग = <strong>11.2 km/s</strong> (चंद्रमा पर 2.38 km/s)।</p>
              <p>• <strong>कार्य एवं शक्ति:</strong> कार्य W = F · d · cosθ (SI मात्रक: जूल)। शक्ति P = W/t (SI मात्रक: वाट; <strong>1 अश्वशक्ति / HP = 746 वाट</strong>)।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. प्रकाशिकी (Optics: Mirrors & Lenses)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-700">
                  <h4 class="text-amber-400 font-bold mb-1">दर्पण सूत्र (Mirror Formula)</h4>
                  <p class="text-sm font-mono text-teal-300">1/f = 1/v + 1/u</p>
                  <p class="text-slate-300 mt-1">अवतल दर्पण (Concave): दाढ़ी बनाने, गाड़ियों की हेडलाइट में। उत्तल दर्पण (Convex): वाहनों में साइड रियर-व्यू मिरर (सीधा व छोटा प्रतिबिंब)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-700">
                  <h4 class="text-emerald-400 font-bold mb-1">लेंस सूत्र (Lens Formula)</h4>
                  <p class="text-sm font-mono text-teal-300">1/f = 1/v - 1/u</p>
                  <p class="text-slate-300 mt-1">लेंस की क्षमता P = 1/f(मीटर में)। मात्रक: <strong>डायोप्टर (Dioptre - D)</strong>। उत्तल लेंस हेतु धनात्मक (+), अवतल लेंस हेतु ऋणात्मक (-)।</p>
                </div>
              </div>
              <p class="text-xs text-slate-300 pt-1 border-t border-slate-700">
                • <strong>दृष्टि दोष एवं निवारण:</strong>
                <br/>1. <em>निकट दृष्टि दोष (Myopia):</em> पास का दिखता है, दूर का नहीं — <strong>अवतल लेंस (Concave Lens)</strong> द्वारा निवारण।
                <br/>2. <em>दूर दृष्टि दोष (Hypermetropia):</em> दूर का दिखता है, पास का नहीं — <strong>उत्तल लेंस (Convex Lens)</strong> द्वारा निवारण।
                <br/>3. <em>जरा दूरदर्शिता (Presbyopia):</em> वृद्धावस्था में समंजन क्षमता घटना — <strong>द्विफोकसी लेंस (Bifocal Lens)</strong>।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. विद्युत धारा एवं चुंबकत्व (Electricity & Magnetism)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>ओम का नियम (Ohm's Law):</strong> नियत ताप पर चालक के सिरों का विभवांतर उसमें प्रवाहित धारा के समानुपाती होता है: <strong>V = I·R</strong>।</p>
              <p>• <strong>प्रतिरोधकता (Resistivity):</strong> R = ρ · (l / A); ρ का मात्रक <strong>ओम-मीटर (Ω·m)</strong> है। ताप बढ़ने पर चालकों की प्रतिरोधकता बढ़ती है, जबकि अर्धचालकों (Semiconductors) की घटती है।</p>
              <p>• <strong>संयोजन:</strong> श्रेणीक्रम में R = R₁ + R₂ + R₃ (धारा समान)। समांतर क्रम में 1/R = 1/R₁ + 1/R₂ + 1/R₃ (विभवांतर समान, घरेलू वायरिंग समांतर क्रम में होती है)।</p>
              <p>• <strong>जूल का ऊष्मीय नियम:</strong> H = I² · R · t।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ ਸਾਇੰਸ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਨਿਊਟਨ ਦੇ ਗਤੀ ਦੇ ਨਿਯਮ, ਗੁਰੂਤਾਕਰਸ਼ਣ (g=9.8 m/s²), ਲੈਂਜ਼ ਫਾਰਮੂਲਾ, ਅਤੇ ਓਹਮ ਦਾ ਨਿਯਮ (V=IR) ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ ਸਾਇੰਸ ਪ੍ਰੀਖਿਆ ਦੇ ਮੁੱਖ ਵਿਸ਼ੇ ਹਨ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਗੁਰੂਤਾਕਰਸ਼ਣ:</strong> ਧਰਤੀ 'ਤੇ g = 9.8 m/s²। ਧਰੁਵਾਂ 'ਤੇ ਵੱਧ ਤੋਂ ਵੱਧ, ਭੂ-ਮੱਧ ਰੇਖਾ 'ਤੇ ਘੱਟ ਤੋਂ ਘੱਟ।</p>
            <p>• <strong>ਮਾਇਓਪੀਆ (Myopia):</strong> ਦੂਰ ਦੀਆਂ ਚੀਜ਼ਾਂ ਸਾਫ ਨਹੀਂ ਦਿਸਦੀਆਂ — ਕਨਕੇਵ (ਅਵਤਲ) ਲੈਂਜ਼ ਨਾਲ ਠੀਕ ਹੁੰਦਾ ਹੈ।</p>
            <p>• <strong>ਹਾਈਪਰਮੈਟ੍ਰੋਪੀਆ:</strong> ਕਨਵੈਕਸ (ਉੱਤਲ) ਲੈਂਜ਼ ਨਾਲ ਠੀਕ ਹੁੰਦਾ ਹੈ।</p>
            <p>• <strong>ਓਹਮ ਦਾ ਨਿਯਮ:</strong> V = I × R; ਪਾਵਰ = V × I = I²R।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Exam Blueprint</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Mechanics, Optics, and Current Electricity carry heavy weightage in Punjab Master Cadre Science and competitive teacher recruitment tests.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Newton's Laws:</strong> First law defines inertia; Second law provides force formula (F = ma); Third law asserts equal and opposite reaction.</p>
            <p>• <strong>Gravitational Constant:</strong> G = 6.674 × 10⁻¹¹ N m²/kg². Earth's surface gravity g = 9.8 m/s²; escape velocity = 11.2 km/s.</p>
            <p>• <strong>Optics:</strong> Lens formula is 1/f = 1/v - 1/u. Power P = 1/f (in dioptres). Myopia corrected by concave lens, Hypermetropia by convex lens.</p>
            <p>• <strong>Electricity:</strong> Ohm's Law V = IR. Domestic appliances are wired in parallel to maintain uniform voltage (220V in India).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'न्यूटन के गति नियम, गुरुत्वाकर्षण (g = 9.8 m/s², पलायन वेग 11.2 km/s), दर्पण व लेंस सूत्र, दृष्टि दोष निवारण (मायोपिया में अवतल, हाइपरमेट्रोपिया में उत्तल), तथा ओम का नियम (V = IR) भौतिकी के मुख्य परीक्षा बिंदु हैं।',
      pa: 'ਨਿਊਟਨ ਦੇ ਨਿਯਮ, ਗੁਰੂਤਾਕਰਸ਼ਣ, ਲੈਂਜ਼ ਫਾਰਮੂਲਾ (ਮਾਇਓਪੀਆ ਵਿੱਚ ਅਵਤਲ ਲੈਂਜ਼), ਅਤੇ ਓਹਮ ਦਾ ਨਿਯਮ (V=IR) ਮੁੱਖ ਪ੍ਰੀਖਿਆ ਵਿਸ਼ੇ ਹਨ।',
      en: "Newton's laws of motion, gravitation (g = 9.8 m/s², escape velocity 11.2 km/s), mirror and lens formulas, corrective lenses for optical defects, and Ohm's law (V = IR) constitute core physics concepts.",
    },
    keyNotes: {
      hi: [
        '📌 G = 6.674 × 10⁻¹¹ N·m²/kg² (सार्वत्रिक गुरुत्वाकर्षण नियतांक)।',
        '📌 पृथ्वी पर पलायन वेग (Escape Velocity) = 11.2 km/s।',
        '📌 1 अश्वशक्ति (Horsepower - HP) = 746 वाट।',
        '📌 निकट दृष्टि दोष (Myopia) के निवारण हेतु अवतल लेंस (Concave Lens) प्रयुक्त होता है।',
        '📌 घरेलू विद्युत वायरिंग समांतर क्रम (Parallel Circuit) में की जाती है।',
      ],
      pa: [
        '📌 ਧਰਤੀ ਦਾ ਪਲਾਇਨ ਵੇਗ = 11.2 km/s।',
        '📌 1 ਹਾਰਸਪਾਵਰ (HP) = 746 ਵਾਟ।',
        '📌 ਮਾਇਓਪੀਆ ਲਈ ਅਵਤਲ ਲੈਂਜ਼ (Concave Lens) ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
        '📌 ਘਰੇਲੂ ਵਾਇਰਿੰਗ ਸਮਾਨੰਤਰ (Parallel) ਵਿੱਚ ਹੁੰਦੀ ਹੈ।',
      ],
      en: [
        '📌 Universal Gravitational Constant G = 6.674 × 10⁻¹¹ N·m²/kg².',
        "📌 Earth's escape velocity is 11.2 km/s.",
        '📌 1 Horsepower (HP) = 746 Watts.',
        '📌 Myopia is corrected using a concave lens; Hypermetropia via a convex lens.',
        '📌 Domestic wiring is configured in parallel to provide constant voltage.',
      ],
    },
    flashcards: [
      {
        id: 'fc-phy-1',
        q: { hi: 'निकट दृष्टि दोष (Myopia) को ठीक करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?', pa: 'ਮਾਇਓਪੀਆ ਲਈ ਕਿਹੜਾ ਲੈਂਜ਼ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?', en: 'Which type of lens is used to correct Myopia (near-sightedness)?' },
        a: { hi: 'अवतल लेंस (Concave Lens)।', pa: 'ਅਵਤਲ ਲੈਂਜ਼ (Concave Lens)।', en: 'Concave lens (Diverging lens).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-phy-2',
        q: { hi: 'एक अश्वशक्ति (Horsepower) में कितने वाट होते हैं?', pa: 'ਇੱਕ ਹਾਰਸਪਾਵਰ ਵਿੱਚ ਕਿੰਨੇ ਵਾਟ ਹੁੰਦੇ ਹਨ?', en: 'How many Watts are in one Horsepower (HP)?' },
        a: { hi: '746 वाट।', pa: '746 ਵਾਟ।', en: '746 Watts.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Master Cadre Science - Physics Complete Crash Course',
        channel: 'Science Point Punjab',
        youtubeId: 'Phy100MasterMCQ',
        language: 'hi',
        views: '430K',
        duration: '1:50:00',
        tags: ['Physics', 'Master Cadre', 'Science'],
      },
    ],
    bookRefs: [
      {
        title: 'Class 9 & 10 Science (Physics Sections)',
        author: 'NCERT / PSEB',
        chapters: 'Motion, Gravitation, Light, Electricity',
        type: 'ncert',
      },
      {
        title: 'Concepts of Physics (Vol 1 & 2)',
        author: 'H.C. Verma',
        chapters: 'Mechanics, Optics, Electrodynamics',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Vigyan (ਸਾਇੰਸ) Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561141_Vigyan-10%28Punjabi%29.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Science Complete Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jesc1dd.zip",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhsc1dd.zip",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Science & Technology Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/secscicour/English/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      "title": "ERD Punjab · Master Cadre Science Official Syllabus PDF",
      "url": "https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf"
},
  },

  // -------------------------------------------------------------
  // 2. CHEMISTRY CONCEPTS
  // -------------------------------------------------------------
  'chemistry-concepts': {
    id: 'chemistry-concepts',
    topicId: 'chemistry-concepts',
    subjectId: 'science',
    category: 'science',
    title: {
      hi: 'रसायन विज्ञान: आवर्त सारणी, रासायनिक आबंधन एवं कार्बनिक यौगिक',
      pa: 'ਰਸਾਇਣ ਵਿਗਿਆਨ: ਆਵਰਤੀ ਸਾਰਣੀ, ਕੈਮੀਕਲ ਬਾਂਡਿੰਗ ਤੇ ਕਾਰਬਨ ਯੌਗਿਕ',
      en: 'Chemistry: Periodic Table, Chemical Bonding & Carbon Compounds',
    },
    examRelevance: 'Punjab Master Cadre Science (30-35 Qs), Lecturer Chemistry, ETT & REET L2 (15 Qs)',
    estimatedTime: '40 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              रसायन विज्ञान में आधुनिक आवर्त सारणी (आवर्त व वर्ग प्रवृत्तियां), रासायनिक आबंधन (आयनिक, सहसंयोजी), अम्ल-क्षार pH मान, और कार्बन के अपररूप सीधे परीक्षा में पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. आधुनिक आवर्त सारणी (Modern Periodic Table)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>जनक:</strong> हेनरी मोजले (1913) - तत्वों के गुण उनके <strong>परमाणु क्रमांक (Atomic Number - Z)</strong> के आवर्ती फलन होते हैं (मेंडलीफ ने परमाणु भार को आधार बनाया था)।</p>
              <p>• <strong>संरचना:</strong> <strong>7 क्षैतिज आवर्त (Periods)</strong> तथा <strong>18 ऊर्ध्वाधर वर्ग (Groups)</strong>।</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">आवर्त में बाएं से दाएं जाने पर:</span>
                  <p class="text-slate-300">• परमाणु त्रिज्या: घटती है।</p>
                  <p class="text-slate-300">• आयनन ऊर्जा (IE): बढ़ती है।</p>
                  <p class="text-slate-300">• विद्युत ऋणात्मकता (EN): बढ़ती है। (सर्वाधिक EN: <strong>फ्लोरीन = 4.0</strong>)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">वर्ग में ऊपर से नीचे जाने पर:</span>
                  <p class="text-slate-300">• परमाणु त्रिज्या: बढ़ती है (नए कोश जुड़ने से)।</p>
                  <p class="text-slate-300">• आयनन ऊर्जा: घटती है।</p>
                  <p class="text-slate-300">• धात्विक लक्षण (Metallic character): बढ़ता है।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. रासायनिक आबंधन एवं अम्ल-क्षार (Bonding & Acids-Bases)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>आयनिक बंध (Ionic Bond):</strong> इलेक्ट्रॉनों के पूर्ण स्थानांतरण से बनता है (उदा. NaCl, MgO)। इनके गलनांक व क्वथनांक उच्च होते हैं और जलीय विलयन में विद्युत चालन करते हैं।</p>
              <p>• <strong>सहसंयोजी बंध (Covalent Bond):</strong> इलेक्ट्रॉन युग्मों की पारस्परिक साझेदारी से (उदा. H₂O, CH₄)।</p>
              <p>• <strong>pH पैमाना (सोरेनसन, 1909):</strong> pH = -log[H⁺]।
                <br/>pH &lt; 7: अम्लीय | pH = 7: उदासीन (शुद्ध जल) | pH &gt; 7: क्षारीय।
                <br/>मानव रक्त का pH = <strong>7.35 से 7.45 (हल्का क्षारीय)</strong>। आमाशय रस (HCl) का pH = 1.5 - 2.0।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. कार्बन एवं इसके यौगिक (Carbon & Allotropes)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>शृंखलन (Catenation):</strong> कार्बन में कार्बन परमाणुओं के साथ लंबी श्रृंखला बनाने का अद्वितीय गुण होता है।</p>
              <p>• <strong>कार्बन के अपररूप (Allotropes):</strong></p>
              <ul class="list-disc pl-5 text-xs text-slate-300 space-y-1">
                <li><strong>हीरा (Diamond):</strong> sp³ संकरण, त्रिविमीय चतुष्फलकीय जालक, प्रकृति का <em>कठोरतम पदार्थ</em>, विद्युत का कुचालक (मुक्त इलेक्ट्रॉन अनुपस्थित)।</li>
                <li><strong>ग्रेफाइट (Graphite):</strong> sp² संकरण, षट्कोणीय परतीय संरचना, <em>विद्युत का सुचालक</em> (मुक्त π-इलेक्ट्रॉन उपस्थित), स्नेहक (lubricant) के रूप में प्रयुक्त।</li>
                <li><strong>फुलरीन (Fullerene - C₆₀):</strong> फुटबॉल जैसी संरचना ('बकीबॉल')।</li>
              </ul>
              <p>• <strong>हाइड्रोकार्बन:</strong>
                <br/>एल्केन (Alkanes - संतृप्त, CₙH₂ₙ₊₂) | एल्कीन (Alkenes - द्विबंध, CₙH₂ₙ) | एल्काइन (Alkynes - त्रिबंध, CₙH₂ₙ₋₂)।
              </p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ ਕੈਮਿਸਟਰੀ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਆਧੁਨਿਕ ਆਵਰਤੀ ਸਾਰਣੀ (ਮੋਜ਼ਲੇ - ਪਰਮਾਣੂ ਸੰਖਿਆ ਆਧਾਰਿਤ), ਤੇਜ਼ਾਬ-ਖਾਰ ਦਾ pH ਸਕੇਲ (ਮਨੁੱਖੀ ਖੂਨ ਦਾ pH 7.4), ਅਤੇ ਕਾਰਬਨ ਦੇ ਰੂਪ (ਹੀਰਾ, ਗ੍ਰੇਫਾਈਟ)।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਆਧੁਨਿਕ ਆਵਰਤੀ ਸਾਰਣੀ:</strong> 7 ਪੀਰੀਅਡ ਅਤੇ 18 ਗਰੁੱਪ। ਸਭ ਤੋਂ ਵੱਧ ਇਲੈਕਟ੍ਰੋਨੈਗੇਟਿਵ ਤੱਤ ਫਲੋਰੀਨ (4.0) ਹੈ।</p>
            <p>• <strong>pH ਸਕੇਲ:</strong> ਖੂਨ ਦਾ pH = 7.4। ਪਾਣੀ ਦਾ pH = 7।</p>
            <p>• <strong>ਕਾਰਬਨ ਦੇ ਰੂਪ:</strong> ਹੀਰਾ ਸਭ ਤੋਂ ਸਖ਼ਤ ਪਦਾਰਥ ਹੈ (sp³); ਗ੍ਰੇਫਾਈਟ ਬਿਜਲੀ ਦਾ ਚਾਲਕ ਹੈ (sp²)।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Chemistry High-Yield Concepts</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Modern periodic table trends, chemical bonds, acid-base pH values, and carbon allotropes (diamond, graphite, fullerenes) are fundamental exam topics.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Modern Periodic Table:</strong> Proposed by Henry Moseley (1913) arranged by Atomic Number (Z). Features 7 periods and 18 groups. Fluorine has the highest electronegativity (4.0).</p>
            <p>• <strong>pH Scale:</strong> Introduced by Sorensen (1909). Human blood pH is strictly regulated at 7.35–7.45 (slightly alkaline).</p>
            <p>• <strong>Carbon Allotropes:</strong> Diamond has sp³ hybridization (hardest substance, non-conductor); Graphite has sp² planar layers with delocalized pi electrons (good electrical conductor).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'आधुनिक आवर्त सारणी (मोजले, 18 वर्ग व 7 आवर्त) परमाणु क्रमांक पर आधारित है। फ्लोरीन सर्वाधिक विद्युत ऋणात्मक तत्व है। रक्त का pH 7.4 होता है। हीरा sp³ (कठोरतम, कुचालक) तथा ग्रेफाइट sp² (सुचालक) कार्बन के प्रमुख अपररूप हैं।',
      pa: "ਆਧੁਨਿਕ ਆਵਰਤੀ ਸਾਰਣੀ ਪਰਮਾਣੂ ਸੰਖਿਆ 'ਤੇ ਆਧਾਰਿਤ ਹੈ। ਫਲੋਰੀਨ ਸਭ ਤੋਂ ਵੱਧ ਇਲੈਕਟ੍ਰੋਨੈਗੇਟਿਵ ਹੈ। ਖੂਨ ਦਾ pH 7.4 ਹੈ। ਹੀਰਾ ਅਤੇ ਗ੍ਰੇਫਾਈਟ ਕਾਰਬਨ ਦੇ ਮੁੱਖ ਰੂਪ ਹਨ।",
      en: 'The Modern Periodic Table (Moseley, 18 groups, 7 periods) is ordered by atomic number. Fluorine is the most electronegative element. Human blood pH is ~7.4. Diamond (sp³, insulator) and graphite (sp², conductor) are primary carbon allotropes.',
    },
    keyNotes: {
      hi: [
        '📌 हेनरी मोजले (1913): आधुनिक आवर्त सारणी परमाणु क्रमांक पर आधारित है।',
        '📌 फ्लोरीन (F) आवर्त सारणी में सर्वाधिक विद्युत ऋणात्मक तत्व (EN = 4.0) है।',
        '📌 मानव रक्त का सामान्य pH = 7.35 से 7.45 (हल्का क्षारीय)।',
        '📌 ग्रेफाइट विद्युत का सुचालक है क्योंकि इसमें मुक्त π-इलेक्ट्रॉन होते हैं।',
        '📌 एल्केन (Alkanes) का सामान्य सूत्र CₙH₂ₙ₊₂ है।',
      ],
      pa: [
        "📌 ਆਧੁਨਿਕ ਆਵਰਤੀ ਸਾਰਣੀ ਪਰਮਾਣੂ ਸੰਖਿਆ 'ਤੇ ਆਧਾਰਿਤ ਹੈ।",
        '📌 ਫਲੋਰੀਨ ਸਭ ਤੋਂ ਵੱਧ ਇਲੈਕਟ੍ਰੋਨੈਗੇਟਿਵ ਤੱਤ ਹੈ।',
        '📌 ਖੂਨ ਦਾ pH = 7.35 ਤੋਂ 7.45।',
        '📌 ਗ੍ਰੇਫਾਈਟ ਬਿਜਲੀ ਦਾ ਚੰਗਾ ਚਾਲਕ ਹੈ।',
      ],
      en: [
        '📌 Modern Periodic Table is based on Atomic Number (Henry Moseley, 1913).',
        '📌 Fluorine has the highest electronegativity on the Pauling scale (4.0).',
        '📌 Human blood pH is 7.35–7.45 (slightly basic).',
        '📌 Graphite conducts electricity due to free delocalized pi-electrons.',
        '📌 General formula of alkanes is CnH2n+2.',
      ],
    },
    flashcards: [
      {
        id: 'fc-ch-1',
        q: { hi: 'आधुनिक आवर्त सारणी में सर्वाधिक विद्युत ऋणात्मक (Most Electronegative) तत्व कौन सा है?', pa: 'ਆਵਰਤੀ ਸਾਰਣੀ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਇਲੈਕਟ੍ਰੋਨੈਗੇਟਿਵ ਤੱਤ ਕਿਹੜਾ ਹੈ?', en: 'Which is the most electronegative element in the periodic table?' },
        a: { hi: 'फ्लोरीन (Fluorine - F, मान 4.0)।', pa: 'ਫਲੋਰੀਨ (F)।', en: 'Fluorine (F, value 4.0 on Pauling scale).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-ch-2',
        q: { hi: 'ग्रेफाइट विद्युत का सुचालक क्यों होता है जबकि हीरा नहीं?', pa: 'ਗ੍ਰੇਫਾਈਟ ਬਿਜਲੀ ਦਾ ਚਾਲਕ ਕਿਉਂ ਹੁੰਦਾ ਹੈ?', en: 'Why is graphite a good conductor of electricity unlike diamond?' },
        a: { hi: 'क्योंकि ग्रेफाइट में प्रत्येक कार्बन से 3 बंध बनते हैं और चौथा इलेक्ट्रॉन मुक्त (delocalized) रहता है।', pa: 'ਕਿਉਂਕਿ ਇਸ ਵਿੱਚ ਮੁਕਤ ਇਲੈਕਟ੍ਰੋਨ ਹੁੰਦੇ ਹਨ।', en: 'Due to presence of free delocalized pi-electrons in its hexagonal planar layers.' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Complete Periodic Table & Chemical Bonding Masterclass',
        channel: 'Chemistry Guru Punjab',
        youtubeId: 'ChemTable100Bond',
        language: 'hi',
        views: '390K',
        duration: '1:35:00',
        tags: ['Chemistry', 'Periodic Table', 'Master Cadre'],
      },
    ],
    bookRefs: [
      {
        title: 'Class 10 & 11 Chemistry',
        author: 'NCERT / PSEB',
        chapters: 'Periodic Classification, Chemical Bonding, Carbon',
        type: 'ncert',
      },
      {
        title: 'Modern Approach to Chemical Calculations',
        author: 'R.C. Mukherjee',
        chapters: 'Atomic Structure & Mole Concept',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Vigyan (ਸਾਇੰਸ) Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561141_Vigyan-10%28Punjabi%29.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Science Complete Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jesc1dd.zip",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhsc1dd.zip",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Science & Technology Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/secscicour/English/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      "title": "ERD Punjab · Master Cadre Science Official Syllabus PDF",
      "url": "https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf"
},
  },

  // -------------------------------------------------------------
  // 3. BIOLOGY CONCEPTS
  // -------------------------------------------------------------
  'biology-concepts': {
    id: 'biology-concepts',
    topicId: 'biology-concepts',
    subjectId: 'science',
    category: 'science',
    title: {
      hi: 'जीव विज्ञान: कोशिका, आनुवंशिकी एवं मानव शरीर क्रिया विज्ञान',
      pa: 'ਜੀਵ ਵਿਗਿਆਨ: ਸੈੱਲ ਬਾਇਓਲੋਜੀ, ਜੈਨੇਟਿਕਸ ਤੇ ਮਨੁੱਖੀ ਸਰੀਰ ਰਚਨਾ',
      en: 'Biology: Cell Biology, Genetics & Human Physiology',
    },
    examRelevance: 'Punjab Master Cadre Science (30-35 Qs), Lecturer Biology, ETT & REET L2 (15-20 Qs)',
    estimatedTime: '45 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              जीव विज्ञान पंजाब मास्टर कैडर (Medical) व सामान्य विज्ञान का सबसे स्कोरिंग खंड है। कोशिकांग (माइटोकॉन्ड्रिया, राइबोसोम), प्रकाश संश्लेषण (C3 चक्र), परिसंचरण तंत्र (हृदय, रक्त समूह), और मेंडल के आनुवंशिकी नियमों से सर्वाधिक प्रश्न आते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. कोशिका विज्ञान (Cytology & Cell Organelles)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>कोशिका सिद्धांत:</strong> श्लीडेन एवं श्वान (1839)। रुडोल्फ विरचो (1855) ने जोड़ा: <em>"Omnis cellula-e-cellula"</em> (नई कोशिकाएं पूर्ववर्ती कोशिकाओं से बनती हैं)।</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">माइटोकॉन्ड्रिया (Mitochondria)</span>
                  <p class="text-slate-300">कोशिका का 'शक्तिगृह' (Powerhouse of Cell)। कोशिकीय श्वसन द्वारा <strong>ATP</strong> का निर्माण। इसमें अपना स्वयं का DNA तथा 70S राइबोसोम होता है।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">राइबोसोम (Ribosomes)</span>
                  <p class="text-slate-300">'प्रोटीन की फैक्ट्री'। झिल्ली रहित कोशिकांग। प्रोकैरियोट्स में 70S तथा यूकैरियोट्स में 80S प्रकार के होते हैं। जॉर्ज पैलाडे द्वारा खोजा गया।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-cyan-400 font-bold block mb-1">लाइसोसोम (Lysosomes)</span>
                  <p class="text-slate-300">'आत्मघाती थैली' (Suicidal Bags)। क्रिश्चियन डी डुवे द्वारा खोज। इसमें शक्तिशाली जल-अपघटनीय एंजाइम (Hydrolytic enzymes) होते हैं।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-purple-400 font-bold block mb-1">लवक (Plastids / Chloroplast)</span>
                  <p class="text-slate-300">पादप कोशिका की 'रसोई' (Kitchen of Cell)। प्रकाश संश्लेषण हेतु क्लोरोफिल युक्त। इसमें भी अपना सर्कुलर DNA होता है।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. आनुवंशिकी एवं मेंडल के नियम (Genetics & Mendel's Laws)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>आनुवंशिकी के जनक:</strong> ग्रेगर जोहान मेंडल (उद्यान मटर - <em>Pisum sativum</em> पर 7 जोड़ी विपर्यासी लक्षणों पर प्रयोग किए)।</p>
              <p>• <strong>एकसंकर संकरण (Monohybrid Cross):</strong> लक्षणप्ररूपी अनुपात (Phenotypic Ratio) = <strong>3 : 1</strong> | जीनप्ररूपी अनुपात (Genotypic Ratio) = <strong>1 : 2 : 1</strong>।</p>
              <p>• <strong>द्विसंकर संकरण (Dihybrid Cross):</strong> F₂ लक्षणप्ररूपी अनुपात = <strong>9 : 3 : 3 : 1</strong>।</p>
              <p>• <strong>DNA की द्विकुंडली संरचना:</strong> वाटसन एवं क्रिक (1953)। एडिनिन (A) दोहरे हाइड्रोजन बंध से थाइमिन (T) से तथा ग्वानिन (G) तिहरे बंध से साइटोसिन (C) से जुड़ता है (A=T, G≡C)।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. मानव शरीर क्रिया विज्ञान (Human Physiology)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>परिसंचरण तंत्र:</strong> 4 कोष्ठीय हृदय (2 अलिंद, 2 निलय)। प्राकृतिक पेसमेकर: <strong>SA Node (साइनो-एट्रियल नोड)</strong>। सामान्य रक्तचाप: <strong>120/80 mmHg</strong>।</p>
              <p>• <strong>रक्त समूह (कार्ल लैंडस्टीनर, 1900):</strong>
                <br/><strong>O Negative (O-)</strong>: सर्वदाता (Universal Donor) - कोई एंटीजन नहीं।
                <br/><strong>AB Positive (AB+)</strong>: सर्वग्राही (Universal Recipient) - कोई एंटीबॉडी नहीं।
              </p>
              <p>• <strong>उत्सर्जन तंत्र:</strong> वृक्क (Kidney) की संरचनात्मक व क्रियात्मक इकाई <strong>नेफ्रॉन (Nephron)</strong> है। मूत्र में यूरिया पाया जाता है (यूरिया का निर्माण यकृत/Liver में होता है)।</p>
              <p>• <strong>तंत्रिका तंत्र:</strong> तंत्रिका तंत्र की मूल इकाई <strong>न्यूरॉन (Neuron)</strong> है। मानव शरीर की सबसे लंबी कोशिका।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ ਬਾਇਓਲੋਜੀ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਸੈੱਲ ਦਾ ਪਾਵਰਹਾਊਸ ਮਾਈਟੋਕੌਂਡਰੀਆ, ਮੈਂਡਲ ਦੇ ਜੈਨੇਟਿਕਸ ਨਿਯਮ (ਮੋਨੋਹਾਈਬ੍ਰਿਡ 3:1), ਖੂਨ ਦੇ ਗਰੁੱਪ (O- ਸਰਵਦਾਤਾ, AB+ ਸਰਵਗ੍ਰਾਹੀ), ਅਤੇ ਨੇਫ੍ਰੋਨ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਮਾਈਟੋਕੌਂਡਰੀਆ:</strong> ਸੈੱਲ ਦਾ ਪਾਵਰਹਾਊਸ (ATP ਬਣਾਉਂਦਾ ਹੈ)।</p>
            <p>• <strong>ਰਾਈਬੋਸੋਮ:</strong> ਪ੍ਰੋਟੀਨ ਫੈਕਟਰੀ। ਲਾਈਸੋਸੋਮ: ਆਤਮਘਾਤੀ ਥੈਲੀ।</p>
            <p>• <strong>ਮੈਂਡਲ:</strong> ਮਟਰ ਦੇ ਪੌਦੇ (Pisum sativum) 'ਤੇ ਪ੍ਰਯੋਗ ਕੀਤੇ। ਮੋਨੋਹਾਈਬ੍ਰਿਡ ਅਨੁਪਾਤ 3:1।</p>
            <p>• <strong>ਖੂਨ ਗਰੁੱਪ:</strong> O- ਨੈਗੇਟਿਵ ਸਰਵਦਾਤਾ, AB+ ਸਰਵਗ੍ਰਾਹੀ। ਦਿਲ ਦਾ ਪੇਸਮੇਕਰ SA Node ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Biology Core Topics</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Cell organelles, Mendelian inheritance, Watson-Crick DNA model, and human organ systems (heart, nephron, neuron) are essential for competitive exams.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Cell Organelles:</strong> Mitochondria (Powerhouse of cell, ATP synthesis), Ribosomes (Protein factories), Lysosomes (Suicide bags with hydrolytic enzymes).</p>
            <p>• <strong>Mendel's Laws:</strong> Monohybrid phenotypic ratio is 3:1 (genotypic 1:2:1); Dihybrid ratio is 9:3:3:1.</p>
            <p>• <strong>DNA Structure:</strong> Watson and Crick (1953) double helix where A pairs with T (2 hydrogen bonds) and G pairs with C (3 hydrogen bonds).</p>
            <p>• <strong>Human Systems:</strong> SA node acts as natural pacemaker; O- is universal red cell donor and AB+ is universal recipient; Nephron is functional unit of kidney.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'माइटोकॉन्ड्रिया कोशिका का शक्तिगृह है। राइबोसोम प्रोटीन संश्लेषण करते हैं। मेंडल के एकसंकर संकरण का लक्षणप्ररूपी अनुपात 3:1 है। DNA में A=T व G≡C युग्मन होता है। रक्त समूह O- सर्वदाता और AB+ सर्वग्राही है। वृक्क की इकाई नेफ्रॉन है।',
      pa: 'ਮਾਈਟੋਕੌਂਡਰੀਆ ਪਾਵਰਹਾਊਸ ਹੈ। ਰਾਈਬੋਸੋਮ ਪ੍ਰੋਟੀਨ ਬਣਾਉਂਦੇ ਹਨ। ਮੈਂਡਲ ਦਾ ਮੋਨੋਹਾਈਬ੍ਰਿਡ ਅਨੁਪਾਤ 3:1 ਹੈ। O- ਬਲੱਡ ਗਰੁੱਪ ਸਰਵਦਾਤਾ ਹੈ। ਗੁਰਦੇ ਦੀ ਇਕਾਈ ਨੇਫ੍ਰੋਨ ਹੈ।',
      en: 'Mitochondria produce ATP, ribosomes synthesize proteins, and lysosomes degrade waste. Mendel monohybrid phenotypic ratio is 3:1. DNA features Watson-Crick base pairing (A=T, G=C). O- is universal blood donor; nephron is the functional unit of the kidney.',
    },
    keyNotes: {
      hi: [
        '📌 माइटोकॉन्ड्रिया को कोशिका का शक्तिगृह (Powerhouse) कहा जाता है।',
        '📌 राइबोसोम कोशिका की प्रोटीन फैक्ट्री कहलाते हैं।',
        '📌 मेंडल का एकसंकर लक्षणप्ररूपी अनुपात = 3 : 1।',
        '📌 O नेगेटिव (O-) रक्त समूह सर्वदाता तथा AB पॉजिटिव (AB+) सर्वग्राही है।',
        '📌 SA Node को हृदय का प्राकृतिक पेसमेकर कहा जाता है।',
      ],
      pa: [
        '📌 ਮਾਈਟੋਕੌਂਡਰੀਆ ਸੈੱਲ ਦਾ ਪਾਵਰਹਾਊਸ ਹੈ।',
        '📌 ਰਾਈਬੋਸੋਮ ਪ੍ਰੋਟੀਨ ਫੈਕਟਰੀ ਹਨ।',
        '📌 ਮੈਂਡਲ ਦਾ ਮੋਨੋਹਾਈਬ੍ਰਿਡ ਅਨੁਪਾਤ = 3 : 1।',
        '📌 O- ਖੂਨ ਗਰੁੱਪ ਸਰਵਦਾਤਾ ਹੈ।',
        '📌 SA Node ਦਿਲ ਦਾ ਪੇਸਮੇਕਰ ਹੈ।',
      ],
      en: [
        '📌 Mitochondria is the powerhouse of the cell generating ATP.',
        '📌 Ribosomes are the protein synthesis factories of cells.',
        '📌 Monohybrid phenotypic ratio is 3:1.',
        '📌 O Negative blood is the universal donor; AB Positive is universal recipient.',
        "📌 SA Node functions as the heart's natural pacemaker.",
      ],
    },
    flashcards: [
      {
        id: 'fc-bio-1',
        q: { hi: 'कोशिका का पावरहाउस (शक्तिगृह) किसे कहा जाता है और यह क्या बनाता है?', pa: 'ਸੈੱਲ ਦਾ ਪਾਵਰਹਾਊਸ ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?', en: 'Which organelle is called the powerhouse of the cell and what does it produce?' },
        a: { hi: 'माइटोकॉन्ड्रिया; यह कोशिकीय श्वसन द्वारा ऊर्जा (ATP) उत्पन्न करता है।', pa: 'ਮਾਈਟੋਕੌਂਡਰੀਆ (ATP ਬਣਾਉਂਦਾ ਹੈ)।', en: 'Mitochondria; it synthesizes cellular energy in the form of ATP.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-bio-2',
        q: { hi: 'सार्वत्रिक रक्तदाता (Universal Blood Donor) कौन सा रक्त समूह होता है?', pa: 'ਸਰਵਦਾਤਾ ਖੂਨ ਗਰੁੱਪ ਕਿਹੜਾ ਹੈ?', en: 'Which blood group is the Universal Donor?' },
        a: { hi: 'O नेगेटिव (O Negative - O-)।', pa: 'O ਨੈਗੇਟਿਵ (O-)।', en: 'O Negative (O-).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Complete Biology for Master Cadre & Competitive Exams',
        channel: 'Biology Wallah Punjab',
        youtubeId: 'BioCompleteMaster1',
        language: 'hi',
        views: '540K',
        duration: '2:15:00',
        tags: ['Biology', 'Master Cadre', 'Science'],
      },
    ],
    bookRefs: [
      {
        title: 'Class 11 & 12 Biology',
        author: 'NCERT / PSEB',
        chapters: 'Cell Cycle, Genetics, Human Physiology',
        type: 'ncert',
      },
      {
        title: 'Trueman’s Elementary Biology (Vol 1 & 2)',
        author: 'Trueman',
        chapters: 'Cytology and Physiology',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Vigyan (ਸਾਇੰਸ) Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561141_Vigyan-10%28Punjabi%29.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Science Complete Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jesc1dd.zip",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · विज्ञान पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhsc1dd.zip",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Science & Technology Modules · Hindi/English",
            "url": "https://nios.ac.in/media/documents/secscicour/English/Lesson-01.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      "title": "ERD Punjab · Master Cadre Science Official Syllabus PDF",
      "url": "https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf"
},
  },
};
