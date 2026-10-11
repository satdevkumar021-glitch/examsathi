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
      title: "ERD Punjab · Master Cadre Mathematics Official Syllabus PDF",
      url: "https://erd.punjab.gov.in/master2022/Docs/MathSyllabus04_05_2022.pdf",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
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
      title: "ERD Punjab · Master Cadre Mathematics Official Syllabus PDF",
      url: "https://erd.punjab.gov.in/master2022/Docs/MathSyllabus04_05_2022.pdf",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },

  // -------------------------------------------------------------
  // 2. PRIMARY MATHEMATICS (Punjab ETT 5994 & REET Level 1)
  // -------------------------------------------------------------
  'primary-mathematics': {
    id: 'primary-mathematics',
    topicId: 'primary-mathematics',
    subjectId: 'primary-math',
    category: 'math',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      hi: 'प्राथमिक गणित: संख्या पद्धति, भिन्न, ल.स./म.स., ऐकिक नियम व ज्यामिति',
      pa: 'ਪ੍ਰਾਇਮਰੀ ਗਣਿਤ: ਸੰਖਿਆ ਪ੍ਰਣਾਲੀ, ਭਿੰਨਾਂ, LCM/HCF, ਇਕਾਈ ਨਿਯਮ ਤੇ ਰੇਖਾਗਣਿਤ',
      en: 'Primary Mathematics: Number Systems, Fractions, LCM/HCF, Unitary Method & Geometry',
    },
    examRelevance: 'Punjab ETT 5994 (Paper B: 40 Marks), REET Level 1 (30 Marks), CTET Paper 1 (30 Marks)',
    estimatedTime: '40 मिनट',
    prerequisites: {
      hi: [
        '1 से 1000 तक की संख्याओं की पहचान व गिनती।',
        'मूलभूत जोड़, घटाव, गुणा व भाग (Four basic arithmetic operations)।',
        'सरल द्विविमीय ज्यामितीय आकृतियों (वर्ग, आयत, वृत्त) की प्राथमिक समझ।',
      ],
      pa: [
        '1 ਤੋਂ 1000 ਤੱਕ ਦੀਆਂ ਗਿਣਤੀਆਂ ਦੀ ਪਛਾਣ।',
        'ਜੋੜ, ਘਟਾਓ, ਗੁਣਾ ਅਤੇ ਭਾਗ ਦੀਆਂ ਮੁੱਢਲੀਆਂ ਕਿਰਿਆਵਾਂ।',
        'ਮੁੱਢਲੀਆਂ ਦੋ-ਪਾਸੜ ਆਕਾਰਾਂ (ਵਰਗ, ਆਇਤ, ਚੱਕਰ) ਦੀ ਸਮਝ।',
      ],
      en: [
        'Basic numeral literacy and multi-digit whole number counting.',
        'Fluency in the four foundational operations (addition, subtraction, multiplication, division).',
        'Familiarity with basic 2D plane geometric shapes (squares, rectangles, triangles, circles).',
      ],
    },
    learningObjectives: {
      hi: [
        'स्थानीय मान (Place Value) और जातीय मान (Face Value) में अंतर समझना तथा विस्तारित रूप लिखना।',
        'अभाज्य गुणनखंडन और विभाजन विधि द्वारा LCM और HCF ज्ञात करना तथा उनके संबंध को सिद्ध करना।',
        'भिन्नों के प्रकार (उचित, अनुचित, मिश्रित) पहचानना और असमान हरों वाली भिन्नों का संक्रियात्मक हल करना।',
        'ऐकिक नियम (Unitary Method) और प्रतिशत के दैनिक जीवन से जुड़े प्रश्नों को हल करना।',
        'परिमाप (Perimeter) और क्षेत्रफल (Area) के बीच स्पष्ट भौतिक अंतर समझना और सूत्र लागू करना।',
      ],
      pa: [
        'ਸਥਾਨਕ ਮੁੱਲ (Place Value) ਅਤੇ ਅੰਕਿਤ ਮੁੱਲ (Face Value) ਵਿੱਚ ਅੰਤਰ ਸਮਝਣਾ।',
        'ਅਭਾਜ ਗੁਣਨਖੰਡ ਵਿਧੀ ਨਾਲ LCM ਅਤੇ HCF ਕੱਢਣਾ ਅਤੇ ਉਹਨਾਂ ਦੇ ਆਪਸੀ ਸੰਬੰਧ ਨੂੰ ਸਮਝਣਾ।',
        'ਭਿੰਨਾਂ ਦੀਆਂ ਕਿਸਮਾਂ ਅਤੇ ਅਸਮਾਨ ਹਰਾਂ ਵਾਲੀਆਂ ਭਿੰਨਾਂ ਦਾ ਜੋੜ/ਘਟਾਓ ਕਰਨਾ।',
        'ਇਕਾਈ ਨਿਯਮ (Unitary Method) ਅਤੇ ਪ੍ਰਤੀਸ਼ਤ ਦੇ ਵਿਹਾਰਕ ਸਵਾਲ ਹੱਲ ਕਰਨਾ।',
        'ਘੇਰਾ (Perimeter) ਅਤੇ ਖੇਤਰਫਲ (Area) ਦੇ ਸੂਤਰਾਂ ਨੂੰ ਸਮਝਣਾ ਤੇ ਲਾਗੂ ਕਰਨਾ।',
      ],
      en: [
        'Distinguish between positional place value and intrinsic face value in multi-digit integers.',
        'Compute LCM and HCF using prime factorization and division algorithms, verifying LCM × HCF = product of numbers.',
        'Classify proper, improper, and mixed fractions and solve arithmetic operations with unlike denominators.',
        'Apply the unitary method to direct and inverse proportion real-world word problems.',
        'Differentiate 1D linear perimeter from 2D plane area with correct units of measurement.',
      ],
    },
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 प्राथमिक शिक्षक भर्ती गणित का आधारस्तंभ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब ईटीटी 5994 (40 अंक) और राजस्थान रीट लेवल 1 (30 अंक) में प्राथमिक गणित से संख्या पद्धति, भिन्न, ल.स./म.स., प्रतिशत और सरल ज्यामिति से सीधे संक्रियात्मक प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. संख्या पद्धति: स्थानीय मान एवं जातीय मान</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>जातीय मान (Face Value):</strong> किसी अंक का अपना वास्तविक मान, जो स्थान बदलने पर कभी नहीं बदलता (जैसे संख्या 7482 में 4 का जातीय मान 4 ही है)।</p>
              <p>• <strong>स्थानीय मान (Place Value):</strong> किसी अंक का संख्या में उसके स्थान (इकाई, दहाई, सैकड़ा, हजार) के आधार पर मान (जैसे 7482 में 4 सैकड़े के स्थान पर है, अतः स्थानीय मान 4 × 100 = 400 है)।</p>
              <p>• <strong>रोमन संख्यांक:</strong> I=1, V=5, X=10, L=50, C=100, D=500, M=1000। V, L, D कभी दोहराए नहीं जाते और न ही घटाए जाते हैं।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. लघुत्तम समापवर्त्य (LCM) एवं महत्तम समापवर्तक (HCF)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>HCF (म.स.):</strong> वह सबसे बड़ी संख्या जो दी गई सभी संख्याओं को पूर्णतः विभाजित कर दे।</p>
              <p>• <strong>LCM (ल.स.):</strong> वह सबसे छोटी संख्या जो दी गई सभी संख्याओं से पूर्णतः विभाजित हो जाए।</p>
              <p class="text-amber-300 font-mono font-bold">• महत्वपूर्ण सूत्र: दो संख्याओं का गुणनफल = LCM × HCF (अर्थात् a × b = LCM × HCF)।</p>
              <p>• भिन्नों का LCM = (अंशों का LCM) / (हरों का HCF) | भिन्नों का HCF = (अंशों का HCF) / (हरों का LCM)।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. भिन्न एवं दशमलव संक्रियाएं</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>उचित भिन्न (Proper):</strong> अंश &lt; हर (जैसे 3/5)। मान हमेशा 1 से कम होता है।</p>
              <p>• <strong>अनुचित भिन्न (Improper):</strong> अंश ≥ हर (जैसे 7/4)। मान 1 या 1 से अधिक होता है।</p>
              <p>• <strong>मिश्रित भिन्न (Mixed):</strong> पूर्णांक और उचित भिन्न का योग (जैसे 1¾)।</p>
              <p>• असमान हरों वाली भिन्नों को जोड़ने हेतु पहले हरों का LCM लेकर समान हर बनाते हैं।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. क्षेत्रमिति: परिमाप एवं क्षेत्रफल</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>परिमाप (Perimeter):</strong> किसी बंद आकृति की बाह्य सीमा की कुल लंबाई (इकाई: मीटर, सेमी)।</p>
              <p>• <strong>क्षेत्रफल (Area):</strong> आकृति द्वारा घेरे गए समतल तल का माप (इकाई: वर्ग मीटर, वर्ग सेमी)।</p>
              <div class="grid grid-cols-2 gap-2 text-xs pt-1">
                <span class="bg-slate-900 p-2 rounded">आयत का परिमाप = 2(लंबाई + चौड़ाई)</span>
                <span class="bg-slate-900 p-2 rounded">आयत का क्षेत्रफल = लंबाई × चौड़ाई</span>
                <span class="bg-slate-900 p-2 rounded">वर्ग का परिमाप = 4 × भुजा</span>
                <span class="bg-slate-900 p-2 rounded">वर्ग का क्षेत्रफल = भुजा²</span>
              </div>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਈ.ਟੀ.ਟੀ. ਗਣਿਤ ਸਿਲੇਬਸ (40 ਅੰਕ)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਈਟੀਟੀ ਭਰਤੀ ਪੇਪਰ ਬੀ (40 ਅੰਕ) ਲਈ ਸੰਖਿਆ ਪ੍ਰਣਾਲੀ, ਭਿੰਨਾਂ, ਲ.ਸ.ਪ./ਮ.ਸ.ਪ., ਇਕਾਈ ਨਿਯਮ ਅਤੇ ਰੇਖਾਗਣਿਤ ਮੁੱਖ ਵਿਸ਼ੇ ਹਨ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਸਥਾਨਕ ਮੁੱਲ ਅਤੇ ਅੰਕਿਤ ਮੁੱਲ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>ਅੰਕਿਤ ਮੁੱਲ (Face Value):</strong> ਅੰਕ ਦਾ ਆਪਣਾ ਮੁੱਲ, ਜੋ ਕਦੇ ਨਹੀਂ ਬਦਲਦਾ (ਜਿਵੇਂ 653 ਵਿੱਚ 5 ਦਾ ਅੰਕਿਤ ਮੁੱਲ 5 ਹੀ ਹੈ)।</p>
              <p>• <strong>ਸਥਾਨਕ ਮੁੱਲ (Place Value):</strong> ਅੰਕ ਦੀ ਥਾਂ ਅਨੁਸਾਰ ਮੁੱਲ (ਜਿਵੇਂ 653 ਵਿੱਚ 5 ਦਹਾਈ ਦੇ ਸਥਾਨ ਉੱਤੇ ਹੈ, ਇਸ ਲਈ ਸਥਾਨਕ ਮੁੱਲ 50 ਹੈ)।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. LCM (ਲ.ਸ.ਪ.) ਅਤੇ HCF (ਮ.ਸ.ਪ.)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>HCF (ਮਹੱਤਮ ਸਮਾਪਵਰਤਕ):</strong> ਉਹ ਵੱਡੀ ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ ਜੋ ਦਿੱਤੀਆਂ ਸੰਖਿਆਵਾਂ ਨੂੰ ਪੂਰਾ-ਪੂਰਾ ਵੰਡੇ।</p>
              <p>• <strong>LCM (ਲਘੁੱਤਮ ਸਮਾਪਵਰਤ):</strong> ਉਹ ਛੋਟੀ ਤੋਂ ਛੋਟੀ ਸੰਖਿਆ ਜੋ ਦਿੱਤੀਆਂ ਸਾਰੀਆਂ ਸੰਖਿਆਵਾਂ ਨਾਲ ਵੰਡੀ ਜਾਵੇ।</p>
              <p class="text-amber-300 font-mono font-bold">• ਸੂਤਰ: ਪਹਿਲੀ ਸੰਖਿਆ × ਦੂਜੀ ਸੰਖਿਆ = LCM × HCF</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. ਭਿੰਨਾਂ ਅਤੇ ਦਸ਼ਮਲਵ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• ਉਚਿਤ ਭਿੰਨ: ਅੰਸ਼ &lt; ਹਰ (ਜਿਵੇਂ 2/3)।</p>
              <p>• ਅਣ-ਉਚਿਤ ਭਿੰਨ: ਅੰਸ਼ ≥ ਹਰ (ਜਿਵੇਂ 5/4)।</p>
              <p>• ਮਿਸ਼ਰਤ ਭਿੰਨ: ਪੂਰਨ ਅੰਕ + ਉਚਿਤ ਭਿੰਨ (ਜਿਵੇਂ 1¼)।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. ਘੇਰਾ ਅਤੇ ਖੇਤਰਫਲ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• ਆਇਤ ਦਾ ਘੇਰਾ = 2(ਲੰਬਾਈ + ਚੌੜਾਈ) | ਖੇਤਰਫਲ = ਲੰਬਾਈ × ਚੌੜਾਈ।</p>
              <p>• ਵਰਗ ਦਾ ਘੇਰਾ = 4 × ਭੁਜਾ | ਖੇਤਰਫਲ = ਭੁਜਾ²।</p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Primary Mathematics Core Curriculum</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Foundational mathematics for Punjab ETT (Paper B: 40 marks), REET Level 1, and CTET Paper 1, focusing on base-10 number properties, factors, multiples, fraction operations, unitary proportional reasoning, and basic 2D mensuration.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. Number System: Face Value vs Place Value</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>Face Value:</strong> The intrinsic value of a digit independent of its position (in 8,432, the face value of 4 is simply 4).</p>
              <p>• <strong>Place Value:</strong> The positional value of a digit based on powers of ten (in 8,432, 4 is in the hundreds column, so place value is 4 × 100 = 400).</p>
              <p>• <strong>Roman Numerals:</strong> I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Symbols V, L, and D are never repeated or subtracted.</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. LCM (Least Common Multiple) & HCF (Highest Common Factor)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>HCF:</strong> The largest common divisor that divides each given number without remainder.</p>
              <p>• <strong>LCM:</strong> The smallest positive integer that is a common multiple of all given numbers.</p>
              <p class="text-amber-300 font-mono font-bold">• Cardinal Rule: Product of two numbers = LCM × HCF (a × b = LCM × HCF).</p>
              <p>• LCM of fractions = (LCM of numerators) / (HCF of denominators).</p>
              <p>• HCF of fractions = (HCF of numerators) / (LCM of denominators).</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. Fractions & Rational Arithmetic</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>Proper Fraction:</strong> Numerator &lt; Denominator (e.g. 3/7, value strictly &lt; 1).</p>
              <p>• <strong>Improper Fraction:</strong> Numerator ≥ Denominator (e.g. 9/5, value ≥ 1).</p>
              <p>• <strong>Mixed Fraction:</strong> Combination of whole number and proper fraction (e.g. 1 4/5).</p>
              <p>• When adding fractions with unlike denominators, always convert to equivalent fractions using the LCM of the denominators.</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. Mensuration: Perimeter vs Area</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>Perimeter:</strong> Total linear distance around the boundary of a closed 2D shape (measured in linear units: m, cm).</p>
              <p>• <strong>Area:</strong> The amount of 2D surface enclosed within the boundary (measured in square units: m², cm²).</p>
              <div class="grid grid-cols-2 gap-2 text-xs pt-1">
                <span class="bg-slate-900 p-2 rounded">Rectangle Perimeter = 2(l + b)</span>
                <span class="bg-slate-900 p-2 rounded">Rectangle Area = l × b</span>
                <span class="bg-slate-900 p-2 rounded">Square Perimeter = 4 × s</span>
                <span class="bg-slate-900 p-2 rounded">Square Area = s²</span>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          hi: 'उदाहरण 1: दो संख्याओं का LCM, HCF और सूत्र सत्यापन',
          pa: 'ਉਦਾਹਰਨ 1: ਦੋ ਸੰਖਿਆਵਾਂ ਦਾ LCM, HCF ਅਤੇ ਸੂਤਰ ਪੜਤਾਲ',
          en: 'Worked Example 1: Finding LCM & HCF and Verifying the Product Rule',
        },
        problem: {
          hi: 'संख्या 24 और 36 का अभाज्य गुणनखंडन द्वारा HCF और LCM ज्ञात कीजिए तथा सत्यापित कीजिए कि दोनों संख्याओं का गुणनफल = HCF × LCM।',
          pa: 'ਸੰਖਿਆ 24 ਅਤੇ 36 ਦਾ ਗੁਣਨਖੰਡ ਵਿਧੀ ਨਾਲ HCF ਅਤੇ LCM ਕੱਢੋ ਅਤੇ ਸਿੱਧ ਕਰੋ ਕਿ ਸੰਖਿਆਵਾਂ ਦਾ ਗੁਣਨਫਲ = HCF × LCM।',
          en: 'Find the HCF and LCM of 24 and 36 using prime factorization, and verify that the product of the two numbers equals HCF × LCM.',
        },
        steps: {
          hi: [
            'कदम 1: 24 के अभाज्य गुणनखंड = 2³ × 3¹ = 2 × 2 × 2 × 3।',
            'कदम 2: 36 के अभाज्य गुणनखंड = 2² × 3² = 2 × 2 × 3 × 3।',
            'कदम 3: HCF = उभयनिष्ठ अभाज्य गुणनखंडों की न्यूनतम घात = 2² × 3¹ = 4 × 3 = 12।',
            'कदम 4: LCM = सभी अभाज्य गुणनखंडों की उच्चतम घात = 2³ × 3² = 8 × 9 = 72।',
            'कदम 5: सत्यापन: संख्याओं का गुणनफल = 24 × 36 = 864; HCF × LCM = 12 × 72 = 864।',
          ],
          pa: [
            'ਕਦਮ 1: 24 ਦੇ ਗੁਣਨਖੰਡ = 2³ × 3।',
            'ਕਦਮ 2: 36 ਦੇ ਗੁਣਨਖੰਡ = 2² × 3²।',
            'ਕਦਮ 3: HCF = 2² × 3 = 12।',
            'ਕਦਮ 4: LCM = 2³ × 3² = 72।',
            'ਕਦਮ 5: 24 × 36 = 864 ਅਤੇ 12 × 72 = 864।',
          ],
          en: [
            'Step 1: Express 24 in prime factor powers: 24 = 2³ × 3¹.',
            'Step 2: Express 36 in prime factor powers: 36 = 2² × 3².',
            'Step 3: HCF is product of lowest powers of common primes: 2² × 3¹ = 4 × 3 = 12.',
            'Step 4: LCM is product of highest powers of all primes: 2³ × 3² = 8 × 9 = 72.',
            'Step 5: Verification: 24 × 36 = 864; HCF × LCM = 12 × 72 = 864. Verified!',
          ],
        },
        solution: {
          hi: 'HCF = 12, LCM = 72; तथा 24 × 36 = 12 × 72 = 864 (सत्यापित)।',
          pa: 'HCF = 12, LCM = 72; ਅਤੇ 24 × 36 = 12 × 72 = 864 (ਪੜਤਾਲ ਸਹੀ)।',
          en: 'HCF = 12, LCM = 72; Product = 24 × 36 = 12 × 72 = 864 (Verified).',
        },
        takeaway: {
          hi: 'यह सूत्र केवल दो संख्याओं के लिए मान्य होता है; तीन या अधिक संख्याओं पर a × b × c = LCM × HCF लागू नहीं होता।',
          pa: 'ਇਹ ਸੂਤਰ ਸਿਰਫ਼ ਦੋ ਸੰਖਿਆਵਾਂ ਉੱਤੇ ਲਾਗੂ ਹੁੰਦਾ ਹੈ, ਤਿੰਨ ਸੰਖਿਆਵਾਂ ਉੱਤੇ ਨਹੀਂ।',
          en: 'This product identity holds strictly for two numbers; it does not apply to triples.',
        },
      },
      {
        title: {
          hi: 'उदाहरण 2: असमान हरों वाली भिन्नों का योग',
          pa: 'ਉਦਾਹਰਨ 2: ਅਸਮਾਨ ਹਰਾਂ ਵਾਲੀਆਂ ਭਿੰਨਾਂ ਦਾ ਜੋੜ',
          en: 'Worked Example 2: Addition of Fractions with Unlike Denominators',
        },
        problem: {
          hi: 'मान ज्ञात कीजिए: 3/8 + 5/12',
          pa: 'ਮੁੱਲ ਪਤਾ ਕਰੋ: 3/8 + 5/12',
          en: 'Evaluate: 3/8 + 5/12',
        },
        steps: {
          hi: [
            'कदम 1: दोनों हरों 8 और 12 का LCM ज्ञात करें: 8 और 12 का LCM = 24 है।',
            'कदम 2: पहली भिन्न 3/8 को समान हर में बदलें: (3 × 3)/(8 × 3) = 9/24।',
            'कदम 3: दूसरी भिन्न 5/12 को समान हर में बदलें: (5 × 2)/(12 × 2) = 10/24।',
            'कदम 4: दोनों समान हरों वाली भिन्नों को जोड़ें: 9/24 + 10/24 = (9 + 10)/24 = 19/24।',
          ],
          pa: [
            'ਕਦਮ 1: 8 ਅਤੇ 12 ਦਾ LCM = 24।',
            'ਕਦਮ 2: 3/8 = (3 × 3)/24 = 9/24।',
            'ਕਦਮ 3: 5/12 = (5 × 2)/24 = 10/24।',
            'ਕਦਮ 4: 9/24 + 10/24 = 19/24।',
          ],
          en: [
            'Step 1: Find the LCM of the denominators 8 and 12: LCM(8, 12) = 24.',
            'Step 2: Convert 3/8 to an equivalent fraction with denominator 24: (3 × 3)/(8 × 3) = 9/24.',
            'Step 3: Convert 5/12 to an equivalent fraction with denominator 24: (5 × 2)/(12 × 2) = 10/24.',
            'Step 4: Add numerators over the common denominator: (9 + 10) / 24 = 19/24.',
          ],
        },
        solution: {
          hi: '3/8 + 5/12 = 19/24',
          pa: '3/8 + 5/12 = 19/24',
          en: '3/8 + 5/12 = 19/24',
        },
        takeaway: {
          hi: 'भिन्नों के जोड़ में कभी भी सीधे अंश को अंश से और हर को हर से न जोड़ें (जैसे 3+5 / 8+12 गलत है)।',
          pa: 'ਭਿੰਨਾਂ ਜੋੜਨ ਵੇਲੇ ਕਦੇ ਵੀ ਸਿੱਧਾ ਅੰਸ਼ ਵਿੱਚ ਅੰਸ਼ ਅਤੇ ਹਰ ਵਿੱਚ ਹਰ ਨਾ ਜੋੜੋ।',
          en: 'Never add numerators and denominators directly across (i.e. (3+5)/(8+12) = 8/20 is an invalid student error).',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          hi: 'भ्रांति: जिस भिन्न का हर (Denominator) बड़ा होता है, वह भिन्न भी बड़ी होती है (जैसे 1/8 > 1/4 सोचना)।',
          pa: 'ਭੁਲੇਖਾ: ਵੱਡੇ ਹਰ ਵਾਲੀ ਭਿੰਨ ਵੱਡੀ ਹੁੰਦੀ ਹੈ (ਜਿਵੇਂ 1/8 ਨੂੰ 1/4 ਤੋਂ ਵੱਡਾ ਸਮਝਣਾ)।',
          en: 'Misconception: A fraction with a larger denominator is larger in value (e.g. assuming 1/8 > 1/4).',
        },
        correction: {
          hi: 'सत्य: हर यह दर्शाता है कि किसी संपूर्ण वस्तु को कितने बराबर भागों में बांटा गया है। जितने अधिक भागों में बांटेंगे, प्रत्येक भाग उतना ही छोटा होगा। अतः समान अंश होने पर बड़े हर वाली भिन्न वास्तव में छोटी होती है (1/4 > 1/8)।',
          pa: 'ਸੱਚ: ਹਰ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਇਕਾਈ ਦੇ ਕਿੰਨੇ ਟੁਕੜੇ ਕੀਤੇ ਗਏ ਹਨ। ਜਿੰਨੇ ਵੱਧ ਟੁਕੜੇ, ਓਨਾ ਹਰ ਹਿੱਸਾ ਛੋਟਾ ਹੋਵੇਗਾ। ਇਸ ਲਈ 1/4 > 1/8 ਹੈ।',
          en: 'Correction: The denominator represents the number of equal divisions made to a whole. More divisions yield smaller parts; hence for equal numerators, a larger denominator means a smaller fraction (1/4 > 1/8).',
        },
        whyItMatters: {
          hi: 'प्राथमिक शिक्षक भर्ती परीक्षाओं में भिन्नों के आरोही/अवरोही क्रम के प्रश्नों में यह सबसे आम त्रुटि है।',
          pa: 'ਭਿੰਨਾਂ ਨੂੰ ਵੱਧਦੇ-ਘਟਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾਉਣ ਵਾਲੇ ਸਵਾਲਾਂ ਵਿੱਚ ਇਹ ਸਭ ਤੋਂ ਵੱਡੀ ਗ਼ਲਤੀ ਹੁੰਦੀ ਹੈ।',
          en: 'Frequent trap in fraction ascending/descending ordering questions on ETT and REET exams.',
        },
      },
      {
        misconception: {
          hi: 'भ्रांति: परिमाप और क्षेत्रफल हमेशा एक साथ बढ़ते हैं और एक-दूसरे पर सीधे निर्भर हैं।',
          pa: 'ਭੁਲੇਖਾ: ਘੇਰਾ ਅਤੇ ਖੇਤਰਫਲ ਹਮੇਸ਼ਾ ਇਕੱਠੇ ਵਧਦੇ ਹਨ।',
          en: 'Misconception: Shapes with identical perimeters must always have identical areas.',
        },
        correction: {
          hi: 'सत्य: परिमाप बाह्य सीमा की लंबाई है जबकि क्षेत्रफल घिरे हुए तल का माप है। उदाहरण के लिए, 1m × 7m आयत का परिमाप 16m है और क्षेत्रफल 7 m² है; जबकि 4m × 4m वर्ग का भी परिमाप 16m है लेकिन क्षेत्रफल 16 m² है।',
          pa: 'ਸੱਚ: 1m × 7m ਆਇਤ ਦਾ ਘੇਰਾ 16m ਹੈ ਪਰ ਖੇਤਰਫਲ 7 m² ਹੈ। ਜਦਕਿ 4m × 4m ਵਰਗ ਦਾ ਘੇਰਾ ਵੀ 16m ਹੈ ਪਰ ਖੇਤਰਫਲ 16 m² ਹੈ।',
          en: 'Correction: Perimeter measures 1D linear boundary while area measures 2D enclosed surface. A 1×7 rectangle and a 4×4 square both have perimeter 16 m, but areas 7 m² and 16 m² respectively.',
        },
        whyItMatters: {
          hi: 'सीटेट और ईटीटी शिक्षण विधियों में ज्यामितीय भ्रांतियों पर यह प्रश्न बार-बार दोहराया जाता है।',
          pa: 'ਪ੍ਰਾਇਮਰੀ ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ ਵਿੱਚ ਇਹ ਸਵਾਲ ਬਾਰ-ਬਾਰ ਆਉਂਦਾ ਹੈ।',
          en: 'A classic pedagogical misconception tested across teacher eligibility exams.',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        hi: [
          'स्थानीय मान अंक के स्थान (इकाई, दहाई, सैकड़ा) पर निर्भर करता है; जातीय मान हमेशा स्थिर रहता है।',
          'दो संख्याओं का गुणनफल = उनका HCF × उनका LCM।',
          'अभाज्य संख्याएं: 1 न तो अभाज्य है और न ही भाज्य। 2 एकमात्र सम अभाज्य संख्या है।',
          'आयत: परिमाप = 2(l + b), क्षेत्रफल = l × b। वर्ग: परिमाप = 4a, क्षेत्रफल = a²।',
        ],
        pa: [
          'ਸਥਾਨਕ ਮੁੱਲ ਥਾਂ ਅਨੁਸਾਰ ਬਦਲਦਾ ਹੈ; ਅੰਕਿਤ ਮੁੱਲ ਕਦੇ ਨਹੀਂ ਬਦਲਦਾ।',
          'ਦੋ ਸੰਖਿਆਵਾਂ ਦਾ ਗੁਣਨਫਲ = HCF × LCM।',
          'ਅਭਾਜ ਸੰਖਿਆਵਾਂ: 1 ਨਾ ਅਭਾਜ ਹੈ ਨਾ ਭਾਜ। 2 ਇਕਲੌਤੀ ਜਿਸਤ (Even) ਅਭਾਜ ਸੰਖਿਆ ਹੈ।',
          'ਆਇਤ: ਘੇਰਾ = 2(l + b), ਖੇਤਰਫਲ = l × b। ਵਰਗ: ਘੇਰਾ = 4a, ਖੇਤਰਫਲ = a²।',
        ],
        en: [
          'Place value depends on decimal position; face value is strictly invariant.',
          'Two-number product rule: a × b = LCM(a, b) × HCF(a, b).',
          'Prime numbers: 1 is neither prime nor composite; 2 is the only even prime.',
          'Mensuration: Rectangle Perimeter = 2(l + b), Area = l × b; Square Perimeter = 4a, Area = a².',
        ],
      },
      keyFormulasOrRules: {
        hi: [
          'भिन्न का LCM = (अंशों का LCM) / (हरों का HCF)',
          'भिन्न का HCF = (अंशों का HCF) / (हरों का LCM)',
          'प्रतिशत लाभ = (लाभ / क्रय मूल्य) × 100',
          'साधारण ब्याज (SI) = (P × R × T) / 100',
        ],
        pa: [
          'ਭਿੰਨਾਂ ਦਾ LCM = (ਅੰਸ਼ਾਂ ਦਾ LCM) / (ਹਰਾਂ ਦਾ HCF)',
          'ਭਿੰਨਾਂ ਦਾ HCF = (ਅੰਸ਼ਾਂ ਦਾ HCF) / (ਹਰਾਂ ਦਾ LCM)',
          'ਪ੍ਰਤੀਸ਼ਤ ਲਾਭ = (ਲਾਭ / ਖਰੀਦ ਮੁੱਲ) × 100',
          'ਸਧਾਰਨ ਵਿਆਜ = (P × R × T) / 100',
        ],
        en: [
          'LCM of fractions = LCM(numerators) / HCF(denominators)',
          'HCF of fractions = HCF(numerators) / LCM(denominators)',
          'Percentage Profit = (Profit / Cost Price) × 100',
          'Simple Interest = (Principal × Rate × Time) / 100',
        ],
      },
      examTraps: {
        hi: [
          'धोखा: तीन संख्याओं a, b, c पर a × b × c = LCM × HCF लागू नहीं होता।',
          'धोखा: भिन्न 5/0 अपरिभाषित (Undefined) है, 0 नहीं।',
        ],
        pa: [
          'ਧੋਖਾ: ਤਿੰਨ ਸੰਖਿਆਵਾਂ ਉੱਤੇ a × b × c = LCM × HCF ਲਾਗੂ ਨਹੀਂ ਹੁੰਦਾ।',
          'ਧੋਖਾ: ਕਿਸੇ ਸੰਖਿਆ ਨੂੰ 0 ਨਾਲ ਵੰਡਣਾ ਅਣ-ਪਰਿਭਾਸ਼ਿਤ ਹੁੰਦਾ ਹੈ, 0 ਨਹੀਂ।',
        ],
        en: [
          'Trap: The identity product = LCM × HCF fails when applied to 3 or more integers.',
          'Trap: Division by zero (e.g. 5/0) is mathematically undefined, NOT zero.',
        ],
      },
    },
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      verifiedSyllabusDenominator: 'ERB Punjab ETT 5994 Mathematics Syllabus (40 Marks) & BSER REET Level 1 Math',
      correctionHistory: [
        {
          date: '2026-10-10',
          description: 'Authored complete primary-mathematics topic package with full trilingual parity (HI/PA/EN), worked examples, misconceptions, and revision sheet.',
        },
      ],
    },
    summary: {
      hi: 'प्राथमिक गणित में स्थानीय मान, LCM/HCF (गुणनफल = LCM × HCF), भिन्नों की संक्रियाएं तथा परिमाप (सीमा लंबाई) एवं क्षेत्रफल (घिरा तल) प्राथमिक शिक्षक भर्ती परीक्षा के सर्वाधिक अंकभार वाले भाग हैं।',
      pa: 'ਪ੍ਰਾਇਮਰੀ ਗਣਿਤ ਵਿੱਚ ਸਥਾਨਕ ਮੁੱਲ, LCM/HCF, ਭਿੰਨਾਂ ਅਤੇ ਘੇਰਾ ਤੇ ਖੇਤਰਫਲ ਮੁੱਖ ਵਿਸ਼ੇ ਹਨ।',
      en: 'Primary mathematics covers positional notation, prime factorization LCM/HCF, fraction operations with unlike denominators, and distinction between linear perimeter and 2D area.',
    },
    keyNotes: {
      hi: [
        '📌 स्थानीय मान स्थान के अनुसार बदलता है, जातीय मान स्थिर रहता है।',
        '📌 दो संख्याओं का गुणनफल = LCM × HCF।',
        '📌 भिन्नों को जोड़ते समय पहले हरों का LCM लिया जाता है।',
        '📌 परिमाप रैखिक इकाई (m, cm) में और क्षेत्रफल वर्ग इकाई (m², cm²) में मापा जाता है।',
      ],
      pa: [
        '📌 ਸਥਾਨਕ ਮੁੱਲ ਥਾਂ ਅਨੁਸਾਰ ਹੁੰਦਾ ਹੈ, ਅੰਕਿਤ ਮੁੱਲ ਸਥਿਰ ਰਹਿੰਦਾ ਹੈ।',
        '📌 ਦੋ ਸੰਖਿਆਵਾਂ ਦਾ ਗੁਣਨਫਲ = LCM × HCF।',
        '📌 ਘੇਰਾ ਮੀਟਰ/ਸੈਂਟੀਮੀਟਰ ਵਿੱਚ ਅਤੇ ਖੇਤਰਫਲ ਵਰਗ ਮੀਟਰ ਵਿੱਚ ਮਾਪਿਆ ਜਾਂਦਾ ਹੈ।',
      ],
      en: [
        '📌 Place value varies by position; face value is invariant.',
        '📌 Product of two numbers = LCM × HCF.',
        '📌 Always compute the LCM of denominators before adding unlike fractions.',
        '📌 Perimeter is linear (m, cm); Area is quadratic (m², cm²).',
      ],
    },
    flashcards: [
      {
        id: 'fc-pm-1',
        q: { hi: 'दो संख्याओं का गुणनफल 864 है और उनका HCF 12 है। उनका LCM क्या होगा?', pa: 'ਦੋ ਸੰਖਿਆਵਾਂ ਦਾ ਗੁਣਨਫਲ 864 ਅਤੇ HCF 12 ਹੈ। LCM ਕੀ ਹੋਵੇਗਾ?', en: 'The product of two numbers is 864 and their HCF is 12. What is their LCM?' },
        a: { hi: '72 (क्योंकि LCM = गुणनफल / HCF = 864 / 12 = 72)।', pa: '72 (LCM = 864 / 12 = 72)।', en: '72 (Since LCM = Product / HCF = 864 / 12 = 72).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-pm-2',
        q: { hi: 'संख्या 7482 में 4 के स्थानीय मान और जातीय मान का अंतर क्या है?', pa: 'ਸੰਖਿਆ 7482 ਵਿੱਚ 4 ਦੇ ਸਥਾਨਕ ਮੁੱਲ ਅਤੇ ਅੰਕਿਤ ਮੁੱਲ ਦਾ ਅੰਤਰ ਕੀ ਹੈ?', en: 'What is the difference between the place value and face value of 4 in 7,482?' },
        a: { hi: '396 (स्थानीय मान 400 - जातीय मान 4 = 396)।', pa: '396 (ਸਥਾਨਕ ਮੁੱਲ 400 - ਅੰਕਿਤ ਮੁੱਲ 4 = 396)।', en: '396 (Place value 400 − Face value 4 = 396).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'NCERT Class V Mathematics — Chapter 2: Fractions',
        channel: 'NCERT OFFICIAL',
        youtubeId: '_NcccWCcfj4',
        url: 'https://www.youtube.com/watch?v=_NcccWCcfj4',
        language: 'Source language varies',
      },
    ],
    bookRefs: [
      {
        title: 'NCERT Class 5 Math-Magic',
        author: 'NCERT',
        chapters: 'Parts and Wholes & Can You See The Pattern',
        type: 'ncert',
      },
      {
        title: 'NCERT Class 6 Mathematics',
        author: 'NCERT',
        chapters: 'Knowing Our Numbers & Fractions',
        type: 'ncert',
      },
    ],
    documents: [
      {
        title: 'NCERT Class 5 Math-Magic — Parts and Wholes',
        url: 'https://ncert.nic.in/textbook/pdf/eemh104.pdf',
        language: 'English',
        type: 'textbook',
        publisher: 'National Council of Educational Research and Training (NCERT)',
        chapterOrPage: 'Chapter 4 (pp. 50–70)',
        accessNotes: 'Fundamental fraction operations and unitary concepts for primary teaching.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
      {
        title: 'NCERT Class 10 Mathematics — Real Numbers',
        url: 'https://ncert.nic.in/textbook/pdf/jemh101.pdf',
        language: 'English',
        type: 'textbook',
        publisher: 'NCERT',
        chapterOrPage: 'Chapter 1 (pp. 1–18)',
        accessNotes: 'Euclid division lemma, Fundamental Theorem of Arithmetic, LCM/HCF relations.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
    ],
    syllabusReference: {
      title: 'ERB Punjab ETT 5994 Paper B & BSER REET L1 Primary Mathematics',
      url: 'https://educationrecruitmentboard.com/ETT5994/',
      body: 'Education Recruitment Board (ERB), Punjab',
      verifiedOn: '2026-10-10',
    },
  },
};
