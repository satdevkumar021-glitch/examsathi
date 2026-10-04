import { Lesson } from './types';

export const HINDI_LESSONS: Record<string, Lesson> = {
  // -------------------------------------------------------------
  // 1. HINDI SAHITYA KA ITIHAS (Master Cadre / Lecturer)
  // -------------------------------------------------------------
  'hindi-sahitya': {
    id: 'hindi-sahitya',
    topicId: 'hindi-sahitya',
    subjectId: 'hindi',
    category: 'language',
    title: {
      hi: 'हिंदी साहित्य का इतिहास: आदिकाल, भक्तिकाल, रीतिकाल एवं आधुनिक काल',
      pa: 'ਹਿੰਦੀ ਸਾਹਿਤ ਦਾ ਇਤਿਹਾਸ: ਆਦਿਕਾਲ, ਭਗਤੀਕਾਲ, ਰੀਤੀਕਾਲ ਤੇ ਆਧੁਨਿਕ ਕਾਲ',
      en: 'History of Hindi Literature: Bhaktikal, Ritikal & Modern Eras',
    },
    examRelevance: 'Punjab Master Cadre Hindi (150 Qs), Lecturer Hindi (150 Qs), REET L2 Hindi',
    estimatedTime: '45 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु विशेष महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर हिंदी (150 अंक) और स्कूल लेक्चरर परीक्षा में आचार्य रामचंद्र शुक्ल के काल विभाजन, भक्तिकाल (कबीर, जायसी, सूर, तुलसी), रीतिकाल (बिहारी, केशव) और छायावाद के चार स्तंभों (प्रसाद, पंत, निराला, महादेवी) से 70% से अधिक प्रश्न आते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. काल विभाजन (आचार्य रामचंद्र शुक्ल)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">1. आदिकाल / वीरगाथा काल (सं. 1050 - 1375)</span>
                  <p class="text-slate-300">• <strong>सरहपा:</strong> हिंदी के प्रथम कवि (राहुल सांकृत्यायन अनुसार)।</p>
                  <p class="text-slate-300">• <strong>चंदबरदाई:</strong> <em>'पृथ्वीराज रासो'</em> - हिंदी का प्रथम महाकाव्य।</p>
                  <p class="text-slate-300">• <strong>अमीर खुसरो:</strong> खड़ी बोली के आदि कवि (पहेलियां व मुकरियां)।</p>
                  <p class="text-slate-300">• <strong>विद्यापति:</strong> 'मैथिल कोकिल' (कीर्तिलता, पदावली)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">2. भक्तिकाल / पूर्व मध्यकाल (सं. 1375 - 1700)</span>
                  <p class="text-slate-300 font-semibold text-teal-300">हिंदी साहित्य का 'स्वर्ण युग' (जॉर्ज ग्रियर्सन)।</p>
                  <p class="text-slate-300">• <strong>कबीरदास:</strong> <em>बीजक</em> (साखी, सबद, रमैनी) - सधुक्कड़ी/पंचमेल खिचड़ी भाषा।</p>
                  <p class="text-slate-300">• <strong>मलिक मोहम्मद जायसी:</strong> <em>पद्मावत</em> (1540 ई., अवधी भाषा का सूफी प्रेमाख्यानक महाकाव्य)।</p>
                  <p class="text-slate-300">• <strong>गोस्वामी तुलसीदास:</strong> <em>रामचरितमानस</em> (अवधी, 7 कांड), विनय पत्रिका, कवितावली।</p>
                  <p class="text-slate-300">• <strong>सूरदास:</strong> <em>सूरसागर</em>, सूरसारावली (ब्रजभाषा, वात्सल्य रस सम्राट)।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. रीतिकाल (सं. 1700 - 1900)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>केशवदास:</strong> 'कठिन काव्य के प्रेत'। प्रमुख रचनाएं: <em>कविप्रिया, रसिकप्रिया, रामचंद्रिका</em>।</p>
              <p>• <strong>बिहारीलाल:</strong> रीतिसिद्ध कवि। एकमात्र ग्रंथ: <strong>बिहारी सतसई</strong> (ब्रजभाषा में 719 दोहे - "सतसैया के दोहरे ज्यों नावक के तीर")।</p>
              <p>• <strong>भूषण:</strong> रीतिकाल में वीर रस के अप्रतिम कवि (<em>शिवा बावनी, छत्रसाल दशक</em>)।</p>
              <p>• <strong>घनानंद:</strong> रीतिमुक्त प्रेम की पीर के कवि।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. आधुनिक काल एवं छायावाद के चार स्तंभ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>भारतेंदु हरिश्चंद्र:</strong> आधुनिक हिंदी साहित्य के जनक (नाटक: <em>भारत दुर्दशा, अंधेर नगरी</em>)।</p>
              <p>• <strong>महावीर प्रसाद द्विवेदी:</strong> 'सरस्वती' पत्रिका के संपादक (1903)। मैथिलीशरण गुप्त: राष्ट्रकवि (<em>भारत-भारती, साकेत</em>)।</p>
              <p>• <strong>छायावाद (1918 - 1936) के चार स्तंभ:</strong>
                <br/>1. <strong>जयशंकर प्रसाद:</strong> छायावाद के प्रवर्तक (कामायनी - 15 सर्ग, आंसू, लहर, स्कंदगुप्त)।
                <br/>2. <strong>सूर्यकांत त्रिपाठी 'निराला':</strong> मुक्त छंद के प्रणेता (राम की शक्ति पूजा, सरोज स्मृति, जूही की कली)।
                <br/>3. <strong>सुमित्रानंदन पंत:</strong> प्रकृति के सुकुमार कवि (<em>'चिदंबरा'</em> हेतु हिंदी का पहला <strong>ज्ञानपीठ पुरस्कार, 1968</strong>)।
                <br/>4. <strong>महादेवी वर्मा:</strong> 'आधुनिक युग की मीरा' (<em>'यामा'</em> हेतु <strong>ज्ञानपीठ पुरस्कार, 1982</strong>)।
              </p>
              <p>• <strong>प्रयोगवाद:</strong> सच्चिदानंद हीरानंद वात्स्यायन 'अज्ञेय' ने 1943 में <em>'तार सप्तक'</em> का संपादन कर प्रयोगवाद की शुरुआत की।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ ਹਿੰਦੀ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਹਿੰਦੀ ਸਾਹਿਤ ਵਿੱਚ ਆਚਾਰੀਆ ਰਾਮਚੰਦਰ ਸ਼ੁਕਲਾ ਦਾ ਕਾਲ ਵੰਡ, ਭਗਤੀਕਾਲ (ਕਬੀਰ, ਤੁਲਸੀਦਾਸ, ਸੂਰਦਾਸ, ਜਾਇਸੀ), ਰੀਤੀਕਾਲ (ਬਿਹਾਰੀ ਸਤਸਈ), ਅਤੇ ਛਾਇਆਵਾਦ (ਪ੍ਰਸਾਦ, ਪੰਤ, ਨਿਰਾਲਾ, ਮਹਾਦੇਵੀ) ਮੁੱਖ ਹਨ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਸੁਨਹਿਰੀ ਕਾਲ:</strong> ਭਗਤੀਕਾਲ ਨੂੰ ਹਿੰਦੀ ਦਾ ਸੁਨਹਿਰੀ ਯੁੱਗ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।</p>
            <p>• <strong>ਤੁਲਸੀਦਾਸ:</strong> ਰਾਮਚਰਿਤਮਾਨਸ (ਅਵਧੀ ਭਾਸ਼ਾ, 7 ਕਾਂਡ)।</p>
            <p>• <strong>ਸੁਮਿੱਤਰਾਨੰਦਨ ਪੰਤ:</strong> 'ਚਿਦੰਬਰਾ' ਲਈ ਹਿੰਦੀ ਦਾ ਪਹਿਲਾ ਗਿਆਨਪੀਠ (1968)।</p>
            <p>• <strong>ਮਹਾਦੇਵੀ ਵਰਮਾ:</strong> 'ਯਾਮਾ' ਲਈ ਗਿਆਨਪੀਠ (1982)।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Hindi Literature Master Cadre</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Periodization by Ramchandra Shukla: Aadikal, Bhaktikal (Golden Age with Kabir, Jayasi, Surdas, Tulsidas), Ritikal (Bihari, Keshav), and Chhayavad (Prasad, Pant, Nirala, Mahadevi).
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Golden Era:</strong> Bhaktikal (1375–1700 Samvat) designated Golden Age by George Grierson.</p>
            <p>• <strong>Ramcharitmanas:</strong> Written by Tulsidas in Awadhi comprising 7 Cantos (Kands).</p>
            <p>• <strong>Sumitranandan Pant:</strong> First Hindi writer awarded Jnanpith (1968 for Chidambara).</p>
            <p>• <strong>Mahadevi Varma:</strong> Known as the Modern Meera; received Jnanpith in 1982 for Yama.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'हिंदी साहित्य में भक्तिकाल को स्वर्ण युग कहा जाता है। तुलसीदास ने रामचरितमानस (अवधी, 7 कांड) लिखी। बिहारी सतसई में 719 दोहे हैं। सुमित्रानंदन पंत को चिदंबरा (1968) तथा महादेवी वर्मा को यामा (1982) हेतु ज्ञानपीठ पुरस्कार मिला।',
      pa: 'ਭਗਤੀਕਾਲ ਹਿੰਦੀ ਦਾ ਸੁਨਹਿਰੀ ਯੁੱਗ ਹੈ। ਰਾਮਚਰਿਤਮਾਨਸ ਅਵਧੀ ਵਿੱਚ 7 ਕਾਂਡਾਂ ਵਿੱਚ ਹੈ। ਪੰਤ ਨੂੰ 1968 (ਚਿਦੰਬਰਾ) ਅਤੇ ਮਹਾਦੇਵੀ ਨੂੰ 1982 (ਯਾਮਾ) ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਮਿਲਿਆ।',
      en: 'Bhaktikal is recognized as the Golden Age of Hindi literature. Tulsidas authored Ramcharitmanas (Awadhi, 7 cantos). Pant won first Hindi Jnanpith for Chidambara (1968) and Mahadevi Verma for Yama (1982).',
    },
    keyNotes: {
      hi: [
        '📌 जॉर्ज ग्रियर्सन ने भक्तिकाल को हिंदी साहित्य का "स्वर्ण युग" कहा।',
        '📌 रामचरितमानस अवधी भाषा में रचित है और इसमें कुल 7 कांड हैं।',
        '📌 बिहारी सतसई (ब्रजभाषा) में कुल 719 दोहे हैं।',
        '📌 सुमित्रानंदन पंत: हिंदी के पहले ज्ञानपीठ पुरस्कार विजेता (1968, चिदंबरा)।',
        '📌 महादेवी वर्मा को "आधुनिक युग की मीरा" कहा जाता है (ज्ञानपीठ: 1982, यामा)।',
      ],
      pa: [
        '📌 ਭਗਤੀਕਾਲ ਨੂੰ "ਸੁਨਹਿਰੀ ਯੁੱਗ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
        '📌 ਰਾਮਚਰਿਤਮਾਨਸ ਅਵਧੀ ਭਾਸ਼ਾ ਵਿੱਚ 7 ਕਾਂਡ ਹਨ।',
        '📌 ਸੁਮਿੱਤਰਾਨੰਦਨ ਪੰਤ ਨੂੰ 1968 ਵਿੱਚ ਹਿੰਦੀ ਦਾ ਪਹਿਲਾ ਗਿਆਨਪੀਠ ਮਿਲਿਆ।',
        '📌 ਮਹਾਦੇਵੀ ਵਰਮਾ ਨੂੰ ਆਧੁਨਿਕ ਮੀਰਾ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      ],
      en: [
        '📌 George Grierson titled Bhaktikal the "Golden Age" of Hindi literature.',
        '📌 Ramcharitmanas is penned in Awadhi across 7 Cantos (Kands).',
        '📌 Sumitranandan Pant won the first Hindi Jnanpith in 1968 for Chidambara.',
        '📌 Mahadevi Varma is revered as Modern Meera; received Jnanpith in 1982 for Yama.',
      ],
    },
    flashcards: [
      {
        id: 'fc-hs-1',
        q: { hi: 'हिंदी भाषा के लिए प्रथम ज्ञानपीठ पुरस्कार किसे और किस कृति के लिए प्रदान किया गया था?', pa: 'ਹਿੰਦੀ ਦਾ ਪਹਿਲਾ ਗਿਆਨਪੀਠ ਕਿਸਨੂੰ ਮਿਲਿਆ?', en: 'Who won the first Jnanpith Award for Hindi and for which work?' },
        a: { hi: 'सुमित्रानंदन पंत को वर्ष 1968 में उनके काव्य संग्रह "चिदंबरा" के लिए।', pa: 'ਸੁਮਿੱਤਰਾਨੰਦਨ ਪੰਤ (1968, ਚਿਦੰਬਰਾ)।', en: 'Sumitranandan Pant in 1968 for "Chidambara".' },
        difficulty: 'easy',
      },
      {
        id: 'fc-hs-2',
        q: { hi: 'गोस्वामी तुलसीदास कृत "रामचरितमानस" किस भाषा में है और इसमें कितने कांड हैं?', pa: 'ਰਾਮਚਰਿਤਮਾਨਸ ਕਿਸ ਭਾਸ਼ਾ ਵਿੱਚ ਹੈ ਅਤੇ ਕਿੰਨੇ ਕਾਂਡ ਹਨ?', en: 'In which language is Ramcharitmanas written and how many Kandas does it contain?' },
        a: { hi: 'अवधी भाषा में; कुल 7 कांड हैं (बालकांड से उत्तरकांड तक)।', pa: 'ਅਵਧੀ ਭਾਸ਼ਾ ਵਿੱਚ; 7 ਕਾਂਡ ਹਨ।', en: 'Awadhi language; contains 7 Kandas (Cantos).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Master Cadre Hindi Complete Sahitya Ka Itihas Revision',
        channel: 'Hindi Sahitya Bharati',
        youtubeId: 'HindiSahityaMaster1',
        language: 'hi',
        views: '490K',
        duration: '2:10:00',
        tags: ['Hindi', 'Master Cadre', 'Tulsidas'],
      },
    ],
    bookRefs: [
      {
        title: 'Hindi Sahitya Ka Itihas',
        author: 'Acharya Ramchandra Shukla',
        chapters: 'Aadikal, Bhaktikal, Ritikal, Aadhunik Kal',
        type: 'standard',
      },
      {
        title: 'Hindi Sahitya Ka Saral Itihas',
        author: 'Dr. Vishwanath Tripathi',
        chapters: 'Complete Overview',
        type: 'standard',
      },
    ],
  },

  // -------------------------------------------------------------
  // 2. HINDI VYAKARAN & KAVYA SHASTRA
  // -------------------------------------------------------------
  'hindi-vyakaran': {
    id: 'hindi-vyakaran',
    topicId: 'hindi-vyakaran',
    subjectId: 'hindi',
    category: 'language',
    title: {
      hi: 'हिंदी व्याकरण एवं काव्यशास्त्र: संधि, समास, रस एवं अलंकार',
      pa: 'ਹਿੰਦੀ ਵਿਆਕਰਨ ਤੇ ਕਾਵਿ-ਸ਼ਾਸਤਰ: ਸੰਧੀ, ਸਮਾਸ, ਰਸ ਤੇ ਅਲੰਕਾਰ',
      en: 'Hindi Grammar & Poetics: Sandhi, Samas, Ras & Alankar',
    },
    examRelevance: 'Punjab Master Cadre Hindi (40-50 Qs), REET L1 & L2 (30 Qs), CTET Language (30 Qs)',
    estimatedTime: '40 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              हिंदी व्याकरण एवं काव्यशास्त्र में संधि (स्वर, व्यंजन, विसर्ग), समास के 6 भेद, भरत मुनि का रस सिद्धांत (रसराज श्रृंगार रस), और प्रमुख अलंकारों (अनुप्रास, यमक, श्लेष, उपमा, रूपक) से सीधे उदाहरण आधारित प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. संधि के नियम (Sandhi Rules)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>स्वर संधि के 5 भेद:</strong>
                <br/>1. <em>दीर्घ संधि:</em> अ/आ + अ/आ = आ (विद्या + आलय = विद्यालय)।
                <br/>2. <em>गुण संधि:</em> अ/आ + इ/ई = ए, उ/ऊ = ओ, ऋ = अर् (नर + ईश = नरेश, महा + उत्सव = महोत्सव, देव + ऋषि = देवर्षि)।
                <br/>3. <em>वृद्धि संधि:</em> अ/आ + ए/ऐ = ऐ, ओ/औ = औ (एक + एक = एकैक, महा + ओजस्वी = महौजस्वी)।
                <br/>4. <em>यण संधि:</em> इ/ई का य्, उ/ऊ का व्, ऋ का र् (यदि + अपि = यद्यपि, अनु + अय = अन्वय)।
                <br/>5. <em>अयादि संधि:</em> ए का अय्, ऐ का आय्, ओ का अव्, औ का आव् (ने + अन = नयन, पौ + अक = पावक)।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. समास के 6 भेद (Samas)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-amber-400 font-bold block mb-1">अव्ययीभाव समास</span>
                <p class="text-slate-300">पहला पद अव्यय/उपसर्ग व प्रधान (उदा. यथाशक्ति, आजन्म, प्रतिदिन)।</p>
              </div>
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-emerald-400 font-bold block mb-1">तत्पुरुष समास</span>
                <p class="text-slate-300">दूसरा पद प्रधान व कारक चिह्नों का लोप (उदा. राजपुत्र = राजा का पुत्र, गगनचुंबी)।</p>
              </div>
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-cyan-400 font-bold block mb-1">द्वंद्व समास</span>
                <p class="text-slate-300">दोनों पद प्रधान, बीच में योजक चिह्न या 'और' (उदा. माता-पिता, दिन-रात)।</p>
              </div>
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-purple-400 font-bold block mb-1">बहुव्रीहि समास</span>
                <p class="text-slate-300">कोई पद प्रधान नहीं, दोनों मिलकर तीसरे का बोध कराएं (उदा. दशानन = रावण, लंबोदर = गणेश)।</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. काव्यशास्त्र: रस एवं अलंकार</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>भरत मुनि का रस सूत्र (नाट्यशास्त्र):</strong> <em>"विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः"</em>। रसों की कुल संख्या 9 मानी गई है। <strong>श्रृंगार रस</strong> (स्थायी भाव: रति) को <strong>'रसराज'</strong> कहा जाता है।</p>
              <p>• <strong>प्रमुख अलंकार:</strong>
                <br/>1. <em>अनुप्रास:</em> वर्णों की आवृत्ति (चारु चंद्र की चंचल किरणें)।
                <br/>2. <em>यमक:</em> एक शब्द बार-बार आए पर अर्थ भिन्न हो (कनक कनक ते सौ गुनी - एक कनक = सोना, दूसरा = धतूरा)।
                <br/>3. <em>श्लेष:</em> एक शब्द के कई अर्थ चिपके हों (सुबरन को खोजत फिरत, कवि व्यभिचारी चोर)।
                <br/>4. <em>उपमा:</em> सादृश्यता की तुलना (पीपर पात सरिस मन डोला)।
                <br/>5. <em>रूपक:</em> उपमेय में उपमान का अभेद आरोप (चरन कमल बंदौ हरिराई)।
              </p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਹਿੰਦੀ ਵਿਆਕਰਨ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਸੰਧੀ (ਸਵਰ ਸੰਧੀ ਦੇ 5 ਭੇਦ), ਸਮਾਸ ਦੇ 6 ਪ੍ਰਕਾਰ (ਅਵਯਯੀਭਾਵ, ਤਤਪੁਰੁਸ਼, ਦਵੰਦਵ, ਬਹੁਵ੍ਰੀਹਿ), ਅਤੇ ਭਰਤ ਮੁਨੀ ਦਾ ਰਸ ਸਿਧਾਂਤ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਸੰਧੀ:</strong> ਨੇ + ਅਨ = ਨਯਨ (ਅਯਾਦੀ ਸੰਧੀ)।</p>
            <p>• <strong>ਸਮਾਸ:</strong> ਬਹੁਵ੍ਰੀਹਿ ਸਮਾਸ ਵਿੱਚ ਤੀਸਰਾ ਅਰਥ ਪ੍ਰਧਾਨ ਹੁੰਦਾ ਹੈ (ਜਿਵੇਂ ਦਸ਼ਾਨਨ = ਰਾਵਣ)।</p>
            <p>• <strong>ਰਸਰਾਜ:</strong> ਸ਼੍ਰਿੰਗਾਰ ਰਸ ਨੂੰ ਰਸਾਂ ਦਾ ਰਾਜਾ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Grammar & Poetics Core</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Sandhi vowel compounding, the 6 compound classes (Samas), Bharata Muni's Rasa formulation, and figures of speech (Alankar).
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Sandhi Types:</strong> Deergha, Guna, Vriddhi, Yan, and Ayadi.</p>
            <p>• <strong>Samas:</strong> Avyayibhav (adverbial prefix), Tatpurush (case-inflected), Dvandva (copulative), Bahuvrihi (exocentric compound pointing to a third entity).</p>
            <p>• <strong>Rasa:</strong> Shringar Rasa (Erotic/Romantic mood) is designated Rasaraj (King of Rasas).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'स्वर संधि के 5 भेद हैं। समास के 6 भेद होते हैं (बहुव्रीहि में तीसरा पद प्रधान होता है)। भरत मुनि के नाट्यशास्त्र में रस सूत्र वर्णित है और श्रृंगार रस को रसराज कहा जाता है। कनक-कनक में यमक अलंकार है।',
      pa: 'ਸਵਰ ਸੰਧੀ ਦੇ 5 ਭੇਦ, ਸਮਾਸ ਦੇ 6 ਭੇਦ ਹੁੰਦੇ ਹਨ। ਸ਼੍ਰਿੰਗਾਰ ਰਸ ਨੂੰ ਰਸਰਾਜ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
      en: 'Five vowel Sandhi forms, six Samas compound types (Bahuvrihi denotes a third entity), Bharata Muni Rasa theory with Shringar as Rasaraj, and figures of speech.',
    },
    keyNotes: {
      hi: [
        '📌 श्रृंगार रस (स्थायी भाव: रति) को "रसराज" कहा जाता है।',
        '📌 बहुव्रीहि समास में दोनों पद अप्रधान होते हैं और तीसरा अर्थ प्रधान होता है (उदा. दशानन)।',
        '📌 भरत मुनि ने अपने ग्रंथ "नाट्यशास्त्र" में रस निष्पत्ति का सूत्र दिया।',
        '📌 यमक अलंकार में एक ही शब्द दो बार आए और अर्थ भिन्न हो (कनक कनक ते सौ गुनी)।',
      ],
      pa: [
        '📌 ਸ਼੍ਰਿੰਗਾਰ ਰਸ ਨੂੰ ਰਸਰਾਜ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
        '📌 ਬਹੁਵ੍ਰੀਹਿ ਸਮਾਸ ਵਿੱਚ ਤੀਸਰਾ ਅਰਥ ਮੁੱਖ ਹੁੰਦਾ ਹੈ।',
        '📌 ਨਾਟਯਸ਼ਾਸਤਰ ਭਰਤ ਮੁਨੀ ਦਾ ਗ੍ਰੰਥ ਹੈ।',
      ],
      en: [
        '📌 Shringar Rasa is universally acclaimed as Rasaraj (King of Rasas).',
        '📌 In Bahuvrihi compounds, both constituent elements are subordinate to an external referent.',
        '📌 Bharata Muni formulated the classical Rasa sutra in Natyashastra.',
        '📌 Yamak involves repetition of a word with distinct meanings.',
      ],
    },
    flashcards: [
      {
        id: 'fc-hv-1',
        q: { hi: 'काव्यशास्त्र में "रसराज" (रसों का राजा) किस रस को कहा जाता है?', pa: 'ਰਸਾਂ ਦਾ ਰਾਜਾ (ਰਸਰਾਜ) ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?', en: 'Which Rasa is designated as "Rasaraj" (King of Rasas)?' },
        a: { hi: 'श्रृंगार रस को (स्थायी भाव: रति)।', pa: 'ਸ਼੍ਰਿੰਗਾਰ ਰਸ।', en: 'Shringar Rasa (Permanent emotion: Rati/Love).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-hv-2',
        q: { hi: '"दशानन" और "लंबोदर" में कौन सा समास है?', pa: '"ਦਸ਼ਾਨਨ" ਵਿੱਚ ਕਿਹੜਾ ਸਮਾਸ ਹੈ?', en: 'Which compound type (Samas) is present in "Dashanan"?' },
        a: { hi: 'बहुव्रीहि समास (तीसरे अर्थ रावण का बोध कराता है)।', pa: 'ਬਹੁਵ੍ਰੀਹਿ ਸਮਾਸ।', en: 'Bahuvrihi Samas (points to a third entity, Ravana).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Complete Hindi Vyakaran, Sandhi, Samas & Alankar Marathon',
        channel: 'Hindi Academy Official',
        youtubeId: 'HindiVyakaranFull100',
        language: 'hi',
        views: '710K',
        duration: '2:15:00',
        tags: ['Hindi Vyakaran', 'Sandhi', 'Samas'],
      },
    ],
    bookRefs: [
      {
        title: 'Samanya Hindi',
        author: 'Dr. Hardev Bahri',
        chapters: 'Sandhi, Samas, Ras, Alankar',
        type: 'standard',
      },
      {
        title: 'Hindi Vyakaran Evam Rachna',
        author: 'Dr. Vasudev Nandan Prasad',
        chapters: 'All Grammar Chapters',
        type: 'standard',
      },
    ],
  },
};
