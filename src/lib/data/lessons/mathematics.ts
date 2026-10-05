import { Lesson } from './types';

export const MATHEMATICS_LESSONS: Record<string, Lesson> = {
  // -------------------------------------------------------------
  // 1. MATHEMATICS CORE (Master Cadre / Lecturer)
  // -------------------------------------------------------------
  'mathematics-core': {
    id: 'mathematics-core',
    topicId: 'mathematics-core',
    subjectId: 'mathematics',
    category: 'math',
    title: {
      hi: 'गणित: बीजगणित, कलन (Calculus), आव्यूह एवं प्रायिकता',
      pa: 'ਗਣਿਤ: ਅਲਜਬਰਾ, ਕੈਲਕੂਲਸ, ਮੈਟ੍ਰਿਕਸ ਅਤੇ ਸੰਭਾਵਨਾ',
      en: 'Mathematics Core: Algebra, Calculus, Matrices & Probability',
    },
    examRelevance: 'Punjab Master Cadre Math (150 Qs), Lecturer Cadre Math, REET Level 2 Math',
    estimatedTime: '50 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर गणित (150 अंक) का मुख्य आधार 11वीं, 12वीं और स्नातक स्तर का कलन (Calculus), द्विघात समीकरण, आव्यूह (Matrices) और प्रायिकता है। इसमें सीधे सूत्र और मानक प्रमेयों से प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. बीजगणित एवं श्रेणियाँ (Algebra & Progressions)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>द्विघात समीकरण:</strong> ax² + bx + c = 0 का विविक्तकर (Discriminant) <strong>D = b² - 4ac</strong>।</p>
              <ul class="list-disc pl-5 text-xs text-slate-300 space-y-1">
                <li>D &gt; 0: मूल वास्तविक और भिन्न (Real & Distinct)।</li>
                <li>D = 0: मूल वास्तविक और समान (Real & Equal, x = -b/2a)।</li>
                <li>D &lt; 0: मूल काल्पनिक (Complex Conjugates)।</li>
                <li>मूलों का योग: α + β = -b/a | मूलों का गुणनफल: α·β = c/a।</li>
              </ul>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">समानंतर श्रेणी (AP)</span>
                  <p class="font-mono text-teal-300">Tₙ = a + (n - 1)d</p>
                  <p class="font-mono text-teal-300">Sₙ = n/2 · [2a + (n - 1)d]</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">गुणोत्तर श्रेणी (GP)</span>
                  <p class="font-mono text-teal-300">Tₙ = a · rⁿ⁻¹</p>
                  <p class="font-mono text-teal-300">अनंत पदों का योग S∞ = a / (1 - r) [जहाँ |r| &lt; 1]</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. कलन (Differential & Integral Calculus)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>एल-हॉस्पिटल नियम (L'Hôpital's Rule):</strong> यदि सीमा (Limit) 0/0 या ∞/∞ का अनिर्धार्य रूप ले, तो अंश और हर का अलग-अलग अवकलन करते हैं जब तक कि निश्चित मान न मिल जाए: lim f(x)/g(x) = lim f'(x)/g'(x)।</p>
              <p>• <strong>उच्चिष्ठ व निम्निष्ठ (Maxima & Minima):</strong>
                <br/>1. dy/dx = 0 से क्रांतिक बिंदु (Critical points) ज्ञात करें।
                <br/>2. यदि d²y/dx² &lt; 0, तो वह बिंदु <strong>स्थानीय उच्चिष्ठ (Local Maximum)</strong> है।
                <br/>3. यदि d²y/dx² &gt; 0, तो वह बिंदु <strong>स्थानीय निम्निष्ठ (Local Minimum)</strong> है।
              </p>
              <p>• <strong>निश्चित समाकलन का राजा प्रगुण (King's Property):</strong>
                <br/><span class="font-mono text-amber-300">∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx</span> (परीक्षा के 80% समाकलन इसी प्रगुण से हल होते हैं)।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. आव्यूह, सारणिक एवं सांख्यिकी (Matrices & Statistics)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>व्युत्क्रम आव्यूह (Inverse Matrix):</strong> A⁻¹ = adj(A) / |A|, यह केवल तभी संभव है जब सारणिक |A| ≠ 0 हो (अव्युत्क्रमणीय/Non-Singular Matrix)।</p>
              <p>• <strong>परिवर्त (Transpose):</strong> (AB)ᵀ = Bᵀ · Aᵀ (रिवर्सल लॉ)।</p>
              <p>• <strong>प्रायिकता जोड़ प्रमेय:</strong> P(A ∪ B) = P(A) + P(B) - P(A ∩ B)। यदि घटनाएँ परस्पर अपवर्जी (Mutually Exclusive) हों तो P(A ∩ B) = 0।</p>
              <p>• <strong>बहुलक, माध्यिका और माध्य का आनुभविक संबंध:</strong>
                <br/><strong class="text-amber-400 font-mono text-base">बहुलक (Mode) = 3 × माध्यिका (Median) - 2 × माध्य (Mean)</strong>।
              </p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ ਮੈਥ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਕੈਲਕੂਲਸ, ਕੁਆਡ੍ਰੈਟਿਕ ਸਮੀਕਰਣ (D = b² - 4ac), ਮੈਟ੍ਰਿਕਸ, ਅਤੇ ਸਟੈਟਿਸਟਿਕਸ (Mode = 3 Median - 2 Mean)।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਕੁਆਡ੍ਰੈਟਿਕ ਸਮੀਕਰਣ:</strong> D = b² - 4ac; D=0 'ਤੇ ਮੂਲ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ।</p>
            <p>• <strong>ਕੈਲਕੂਲਸ:</strong> Maxima ਲਈ d²y/dx² &lt; 0; Minima ਲਈ d²y/dx² &gt; 0।</p>
            <p>• <strong>ਸਟੈਟਿਸਟਿਕਸ ਫਾਰਮੂਲਾ:</strong> Mode = 3 Median - 2 Mean।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Master Cadre Mathematics</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Calculus, quadratic equations, matrices, determinants, and empirical statistics constitute the highest-scoring sections in Punjab teacher recruitment exams.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Quadratic Discriminant:</strong> D = b² - 4ac determines root nature (equal when D=0; real & distinct when D&gt;0).</p>
            <p>• <strong>Calculus Maxima/Minima:</strong> First derivative test gives critical points; local maximum occurs where second derivative is negative (f''(x) &lt; 0).</p>
            <p>• <strong>Empirical Statistical Relationship:</strong> Mode = 3 × Median - 2 × Mean.</p>
            <p>• <strong>Matrix Inverse:</strong> A⁻¹ = adj(A) / |A| exists if and only if |A| ≠ 0.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'द्विघात समीकरण D = b² - 4ac, AP का nवां पद व योग, कलन में उच्चिष्ठ (d²y/dx² < 0) व निम्निष्ठ, निश्चित समाकलन प्रगुण, व्युत्क्रम आव्यूह A⁻¹ = adj(A)/|A|, और सांख्यिकी संबंध (Mode = 3 Median - 2 Mean) गणित के आधारभूत बिंदु हैं।',
      pa: 'ਕੁਆਡ੍ਰੈਟਿਕ ਸਮੀਕਰਣ, ਕੈਲਕੂਲਸ ਵਿੱਚ ਮੈਕਸਿਮਾ-ਮਿਨੀਮਾ, ਮੈਟ੍ਰਿਕਸ ਇਨਵਰਸ, ਅਤੇ ਸੰਬੰਧ (Mode = 3 Median - 2 Mean) ਗਣਿਤ ਦੇ ਮੁੱਖ ਨੁਕਤੇ ਹਨ।',
      en: 'Covers quadratic roots via discriminant D=b²-4ac, calculus extrema via second derivatives, integration properties, matrix inversion, and the empirical relation Mode = 3 Median - 2 Mean.',
    },
    keyNotes: {
      hi: [
        '📌 द्विघात समीकरण: D = 0 होने पर मूल वास्तविक व समान होते हैं।',
        '📌 बहुलक (Mode) = 3 × माध्यिका (Median) - 2 × माध्य (Mean)।',
        '📌 अनंत गुणोत्तर श्रेणी का योग S∞ = a / (1 - r) जब |r| < 1।',
        '📌 स्थानीय उच्चिष्ठ (Local Maximum) हेतु d²y/dx² < 0 होना चाहिए।',
        '📌 आव्यूह व्युत्क्रम तभी संभव है जब |A| ≠ 0 (अव्युत्क्रमणीय आव्यूह)।',
      ],
      pa: [
        "📌 D = 0 'ਤੇ ਕੁਆਡ੍ਰੈਟਿਕ ਸਮੀਕਰਣ ਦੇ ਮੂਲ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ।",
        '📌 Mode = 3 Median - 2 Mean।',
        '📌 Maxima ਲਈ d²y/dx² &lt; 0 ਹੁੰਦਾ ਹੈ।',
        '📌 ਮੈਟ੍ਰਿਕਸ ਇਨਵਰਸ ਲਈ |A| ≠ 0 ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
      ],
      en: [
        '📌 Discriminant D = 0 indicates real and equal roots.',
        '📌 Empirical Formula: Mode = 3 Median - 2 Mean.',
        '📌 Sum of infinite GP is S = a / (1 - r) for |r| < 1.',
        "📌 Second derivative test: f''(x) < 0 indicates local maximum.",
        '📌 Matrix inversion requires non-zero determinant (|A| ≠ 0).',
      ],
    },
    flashcards: [
      {
        id: 'fc-mat-1',
        q: { hi: 'माध्य (Mean), माध्यिका (Median) और बहुलक (Mode) के बीच क्या संबंध होता है?', pa: 'ਮੀਨ, ਮੀਡੀਅਨ ਅਤੇ ਮੋਡ ਵਿਚਕਾਰ ਕੀ ਸੰਬੰਧ ਹੈ?', en: 'What is the empirical relation between Mean, Median, and Mode?' },
        a: { hi: 'बहुलक (Mode) = 3 × माध्यिका (Median) - 2 × माध्य (Mean)।', pa: 'Mode = 3 Median - 2 Mean।', en: 'Mode = 3 × Median - 2 × Mean.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-mat-2',
        q: { hi: 'किसी फलन के स्थानीय उच्चिष्ठ (Local Maximum) होने के लिए द्वितीय अवकलज (Second Derivative) का चिह्न क्या होना चाहिए?', pa: 'ਲੋਕਲ ਮੈਕਸਿਮਾ ਲਈ ਦੂਜੇ ਡੈਰੀਵੇਟਿਵ ਦਾ ਚਿੰਨ੍ਹ ਕੀ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?', en: 'What must be the sign of the second derivative for a local maximum?' },
        a: { hi: 'ऋणात्मक (d²y/dx² < 0)।', pa: 'ਨੈਗੇਟਿਵ (d²y/dx² < 0)।', en: 'Negative (d²y/dx² < 0).' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Master Cadre Math Complete 150 Marks Strategy & Formulas',
        channel: 'Punjab Math Academy',
        youtubeId: 'MathMasterCadre150',
        language: 'hi',
        views: '320K',
        duration: '2:00:00',
        tags: ['Math', 'Calculus', 'Master Cadre'],
      },
    ],
    bookRefs: [
      {
        title: 'Class 11 & 12 Mathematics (NCERT / PSEB)',
        author: 'NCERT',
        chapters: 'Calculus, Matrices, Probability, Conics',
        type: 'ncert',
      },
      {
        title: 'Higher Engineering Mathematics',
        author: 'B.S. Grewal',
        chapters: 'Linear Algebra, Differential Calculus',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Mathematics Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/MathSyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Ganit (ਗਣਿਤ) Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561226_Ganit-10%28Punjabi%29.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Mathematics Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jemh1dd.zip",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · गणित पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhmh1dd.zip",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Mathematics Core Module",
            "url": "https://nios.ac.in/media/documents/SecMathCour/English/Lesson-01.pdf",
            "language": "English",
            "type": "nios"
      }
],
    syllabusReference: {
      "title": "ERD Punjab · Master Cadre Mathematics Official Syllabus PDF",
      "url": "https://erd.punjab.gov.in/master2022/Docs/MathSyllabus04_05_2022.pdf"
},
  },

  // -------------------------------------------------------------
  // 2. QUANTITATIVE APTITUDE (Clerk / Police / SSC)
  // -------------------------------------------------------------
  'quantitative-aptitude': {
    id: 'quantitative-aptitude',
    topicId: 'quantitative-aptitude',
    subjectId: 'general-aptitude',
    category: 'math',
    title: {
      hi: 'मात्रात्मक योग्यता: प्रतिशत, लाभ-हानि, समय-दूरी एवं कार्य',
      pa: 'ਕੁਆਂਟੀਟੇਟਿਵ ਐਪਟੀਚਿਊਡ: ਪ੍ਰਤੀਸ਼ਤ, ਲਾਭ-ਹਾਨੀ, ਸਮਾਂ ਤੇ ਕੰਮ',
      en: 'Quantitative Aptitude: Percentages, Profit & Loss, Time & Work',
    },
    examRelevance: 'PSSSB Clerk (25 Qs), Punjab Police Constable & SI (20 Qs), Punjab Patwari (25 Qs), SSC CHSL (25 Qs)',
    estimatedTime: '35 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब क्लर्क, पटवारी और पुलिस भर्ती में मैथ्स/क्वांट खंड मेरिट तय करता है। प्रतिशत, कार्य और समय, साधारण व चक्रवृद्धि ब्याज, और समय-गति-दूरी के शॉर्टकट ट्रिक्स परीक्षा में समय बचाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. प्रतिशत एवं लाभ-हानि शॉर्टकट ट्रिक्स</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>क्रमागत छूट (Successive Discounts):</strong> यदि दो छूट D₁% और D₂% हों, तो एकल समतुल्य छूट = <strong>(D₁ + D₂ - D₁·D₂ / 100)%</strong>।</p>
              <p>• <strong>मूल्य वृद्धि पर खपत में कमी:</strong> यदि किसी वस्तु का मूल्य R% बढ़ जाए, तो खर्च अपरिवर्तित रखने हेतु खपत में कमी = <strong>[R / (100 + R)] × 100%</strong>।</p>
              <p>• <strong>लाभ/हानि प्रतिशत:</strong> हमेशा क्रय मूल्य (Cost Price - CP) पर निकाला जाता है। लाभ% = (SP - CP)/CP × 100।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. कार्य और समय (Time & Work)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• यदि A किसी कार्य को x दिन में और B उसे y दिन में करता है, तो दोनों मिलकर कार्य पूरा करेंगे: <strong>(x · y) / (x + y) दिन</strong> में।</p>
              <p>• <strong>LCM विधि:</strong> दिनों का LCM कुल कार्य (Total Units) मान लें, फिर प्रत्येक की 1 दिन की कार्यक्षमता (Efficiency) निकालें।</p>
              <p>• <strong>पुरुष-महिला-दिन सूत्र:</strong> (M₁ · D₁ · H₁) / W₁ = (M₂ · D₂ · H₂) / W₂।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. साधारण एवं चक्रवृद्धि ब्याज (SI & CI)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>साधारण ब्याज (SI):</strong> SI = (P × R × T) / 100।</p>
              <p>• <strong>2 वर्ष के CI और SI का अंतर:</strong> Difference = <strong>P × (R / 100)²</strong>।</p>
              <p>• <strong>3 वर्ष के CI और SI का अंतर:</strong> Difference = <strong>P × (R / 100)² × (300 + R) / 100</strong>।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਕਲਰਕ ਤੇ ਪੁਲਿਸ ਮੈਥ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪ੍ਰਤੀਸ਼ਤ, ਲਾਭ-ਹਾਨੀ, ਸਮਾਂ ਤੇ ਕੰਮ (xy / x+y), ਅਤੇ 2 ਸਾਲਾਂ ਦੇ CI ਤੇ SI ਦਾ ਅੰਤਰ = P(R/100)²।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਸਮਾਂ ਤੇ ਕੰਮ:</strong> ਇਕੱਠੇ ਕੰਮ ਕਰਨ ਦਾ ਸਮਾਂ = (x × y) / (x + y)।</p>
            <p>• <strong>2 ਸਾਲਾਂ ਦੇ CI ਤੇ SI ਦਾ ਅੰਤਰ:</strong> D = P(R/100)²।</p>
            <p>• <strong>ਕੁੱਲ ਛੋਟ ਫਾਰਮੂਲਾ:</strong> D1 + D2 - (D1 × D2)/100।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Quantitative Shortcuts</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Essential for PSSSB Clerk, Punjab Patwari, Punjab Police SI, and SSC CHSL. Key formulas solve questions in seconds.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Time & Work:</strong> Combined time for A (x days) and B (y days) is (xy)/(x+y) days.</p>
            <p>• <strong>CI vs SI for 2 Years:</strong> Difference = P(R/100)².</p>
            <p>• <strong>Successive Discounts:</strong> Net discount = D₁ + D₂ - (D₁D₂)/100%.</p>
            <p>• <strong>Work Equivalence:</strong> (M₁D₁H₁)/W₁ = (M₂D₂H₂)/W₂.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'मात्रात्मक योग्यता में समतुल्य छूट [D₁ + D₂ - (D₁D₂/100)], समय व कार्य [(xy)/(x+y)], M₁D₁H₁/W₁ सूत्र, तथा 2 वर्ष के CI-SI का अंतर P(R/100)² सबसे महत्वपूर्ण शॉर्टकट हैं।',
      pa: 'ਕੁਆਂਟ ਵਿੱਚ ਕੁੱਲ ਛੋਟ, ਸਮਾਂ ਤੇ ਕੰਮ, ਅਤੇ 2 ਸਾਲਾਂ ਦੇ CI-SI ਦਾ ਅੰਤਰ P(R/100)² ਪ੍ਰਮੁੱਖ ਫਾਰਮੂਲੇ ਹਨ।',
      en: 'Key quant shortcuts include combined work (xy/(x+y)), work rate equivalence, successive discount formula, and 2-year CI-SI difference P(R/100)²',
    },
    keyNotes: {
      hi: [
        '📌 2 वर्ष के लिए CI और SI का अंतर = P × (R / 100)²।',
        '📌 A और B मिलकर कार्य पूरा करेंगे = (x · y) / (x + y) दिनों में।',
        '📌 दो क्रमागत छूटों का समतुल्य बट्टा = D₁ + D₂ - (D₁ · D₂ / 100)।',
        '📌 औसत गति (जब दूरियां समान हों) = 2xy / (x + y)।',
      ],
      pa: [
        '📌 2 ਸਾਲਾਂ ਦੇ CI ਅਤੇ SI ਦਾ ਅੰਤਰ = P(R/100)²।',
        '📌 A ਅਤੇ B ਦਾ ਇਕੱਠਾ ਸਮਾਂ = (x × y) / (x + y)।',
        '📌 ਔਸਤ ਗਤੀ = 2xy / (x + y)।',
      ],
      en: [
        '📌 2-Year CI and SI difference = P(R/100)²',
        '📌 Combined work duration = (xy)/(x+y) days.',
        '📌 Equivalent single discount = D₁ + D₂ - (D₁D₂/100)%.',
        '📌 Average speed for equal distances = 2xy/(x+y).',
      ],
    },
    flashcards: [
      {
        id: 'fc-qa-1',
        q: { hi: '2 वर्ष के लिए चक्रवृद्धि ब्याज (CI) और साधारण ब्याज (SI) के बीच अंतर का सूत्र क्या है?', pa: '2 ਸਾਲਾਂ ਲਈ CI ਅਤੇ SI ਦੇ ਅੰਤਰ ਦਾ ਫਾਰਮੂਲਾ ਕੀ ਹੈ?', en: 'What is the formula for the difference between CI and SI for 2 years?' },
        a: { hi: 'Difference = P × (R / 100)²।', pa: 'D = P(R/100)²।', en: 'Difference = P × (R / 100)².' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Quantitative Aptitude Complete Punjab Govt Exams Crash Course',
        channel: 'Maths Magic Punjab',
        youtubeId: 'QuantPunjab100Fast',
        language: 'hi',
        views: '480K',
        duration: '1:40:00',
        tags: ['Maths', 'Aptitude', 'PSSSB'],
      },
    ],
    bookRefs: [
      {
        title: 'Quantitative Aptitude for Competitive Examinations',
        author: 'R.S. Aggarwal',
        chapters: 'Percentages, Profit & Loss, Time & Work',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Mathematics Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/MathSyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "PSEB Class 10 · Ganit (ਗਣਿਤ) Complete Textbook · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561226_Ganit-10%28Punjabi%29.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NCERT Class 10 · Mathematics Textbook · English",
            "url": "https://ncert.nic.in/textbook/pdf/jemh1dd.zip",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · गणित पाठ्यपुस्तक · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhmh1dd.zip",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "NIOS Secondary · Mathematics Core Module",
            "url": "https://nios.ac.in/media/documents/SecMathCour/English/Lesson-01.pdf",
            "language": "English",
            "type": "nios"
      }
],
    syllabusReference: {
      "title": "ERD Punjab · Master Cadre Mathematics Official Syllabus PDF",
      "url": "https://erd.punjab.gov.in/master2022/Docs/MathSyllabus04_05_2022.pdf"
},
  },
};
