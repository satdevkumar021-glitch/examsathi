import { Lesson } from './types';

export const RAJASTHAN_LESSONS: Record<string, Lesson> = {
  'rajasthan-gk-heritage': {
    id: 'rajasthan-gk-heritage',
    topicId: 'rajasthan-gk-heritage',
    subjectId: 'rajasthan-gk',
    category: 'rajasthan',
    title: {
      hi: 'राजस्थान सामान्य ज्ञान: इतिहास, कला-संस्कृति, एकीकरण एवं भूगोल',
      pa: 'ਰਾਜਸਥਾਨ ਜਨਰਲ ਨਾਲੇਜ: ਇਤਿਹਾਸ, ਕਲਾ, ਸੱਭਿਆਚਾਰ ਤੇ ਭੂਗੋਲ',
      en: 'Rajasthan GK: History, Art & Culture, Integration & Geography',
    },
    examRelevance: 'Mandatory Section in REET (L1/L2 30-50 Qs), Rajasthan Patwar (30 Qs), Rajasthan Police (30 Qs), RSMSSB Clerk',
    estimatedTime: '45 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 राजस्थान प्रतियोगी परीक्षाओं का मेरुदंड</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              रीट (REET Level 1 & 2), राजस्थान पटवार, कनिष्ठ सहायक (Clerk), और पुलिस भर्ती में राजस्थान का इतिहास (मेवाड़, 1857 क्रांति, एकीकरण), कला-संस्कृति (दुर्ग, लोक देवता, घूमर), और भूगोल (अरावली, थार मरुस्थल) से सर्वाधिक प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. राजस्थान का इतिहास: मेवाड़ एवं 1857 की क्रांति</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>मेवाड़ राजवंश के गौरव:</strong></p>
              <ul class="list-disc pl-5 space-y-1 text-xs text-slate-300">
                <li><strong>राणा कुंभा:</strong> मेवाड़ के 84 में से 32 दुर्गों का निर्माता; चित्तौड़गढ़ में <em>विजय स्तंभ (Victory Tower - 9 मंजिला, 122 फीट)</em> का निर्माण कराया (सारंगपुर युद्ध विजय के उपलक्ष्य में)।</li>
                <li><strong>राणा सांगा:</strong> खानवा का युद्ध (17 मार्च 1527) बाबर के विरुद्ध लड़ा; शरीर पर 80 घाव थे ("सैनिकों का भग्नावशेष")।</li>
                <li><strong>महाराणा प्रताप:</strong> <strong>हल्दीघाटी का युद्ध (18 जून 1576)</strong> अकबर के सेनापति मानसिंह के विरुद्ध लड़ा। प्रिय अश्व: चेतक। दिवेर का युद्ध (1582) को कर्नल टॉड ने "मेवाड़ का मैराथन" कहा।</li>
              </ul>
              <p class="text-xs text-slate-300 pt-2 border-t border-slate-700">
                • <strong>राजस्थान में 1857 का संग्राम:</strong>
                <br/>1. <strong>शुरुआत:</strong> <strong>28 मई 1857</strong> को <strong>नसीराबाद छावनी (अजमेर)</strong> से 15वीं नेटिव इन्फैंट्री द्वारा।
                <br/>2. <strong>आउवा का विद्रोह:</strong> ठाकुर कुशाल सिंह चंपावत ने बिथोड़ा और चेलावास (18 सितंबर 1857 - 'गोरे-काले का युद्ध') के युद्ध में अंग्रेजों व जोधपुर की सेना को पराजित किया।
                <br/>3. <strong>कोटा में जनविद्रोह:</strong> जयदयाल और मेहराब खान के नेतृत्व में मेजर बर्टन की हत्या कर दी गई।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. राजस्थान का एकीकरण एवं किसान आंदोलन</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>बिजौलिया किसान आंदोलन (1897 - 1941):</strong> भारत का सबसे लंबा (44 वर्ष) अहिंसक किसान आंदोलन। प्रणेता: साधु सीताराम दास व <strong>विजय सिंह पथिक (भूप सिंह)</strong>। 84 प्रकार की 'लाग-बाग' (कर) के विरुद्ध।</p>
              <p>• <strong>राजस्थान का एकीकरण (7 चरण):</strong>
                <br/>1. प्रथम चरण (17 मार्च 1948): मत्स्य संघ (अलवर, भरतपुर, धौलपुर, करौली - नाम के.एम. मुंशी ने दिया)।
                <br/>2. चतुर्थ चरण (30 मार्च 1949): वृहत् राजस्थान (जयपुर, जोधपुर, बीकानेर, जैसलमेर शामिल)। <strong>30 मार्च को प्रत्येक वर्ष 'राजस्थान दिवस'</strong> मनाया जाता है।
                <br/>3. पूर्ण एकीकरण (1 नवंबर 1956): अजमेर-मेरवाड़ा और आबू-देलवाड़ा का विलय हुआ (राज्य पुनर्गठन आयोग - फजल अली की सिफारिश पर)।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. कला, संस्कृति एवं यूनेस्को विश्व धरोहर दुर्ग</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-amber-400 font-bold block mb-1">6 पहाड़ी दुर्ग (UNESCO 2013)</span>
                <p class="text-slate-300 font-semibold text-teal-300">ट्रिक: चीकू गाजर आम</p>
                <p class="text-slate-400 mt-1">1. चित्तौड़गढ़ 2. कुंभलगढ़ (36 किमी लंबी दीवार) 3. गागरोन (जल दुर्ग, झालावाड़) 4. जैसलमेर (स्वर्ण दुर्ग) 5. रणथंभौर 6. आमेर (जयपुर)।</p>
              </div>
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-emerald-400 font-bold block mb-1">पंच पीर (Panch Pir) एवं लोक नृत्य</span>
                <p class="text-slate-300">• <strong>पंच पीर:</strong> पाबूजी (ऊंटों के रक्षक, फड़ चित्रकला), रामदेवजी (रुणेचा, कामड़िया पंथ), गोगाजी, हड़बूजी, मेहाजी मांगलिया।</p>
                <p class="text-slate-300">• <strong>घूमर:</strong> राज्य नृत्य ('नृत्यों का सिरमौर')।</p>
                <p class="text-slate-300">• <strong>कालबेलिया:</strong> यूनेस्को अमूर्त सांस्कृतिक धरोहर (2010, प्रसिद्ध नृत्यांगना गुलाबो सपेरा)।</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. राजस्थान का भूगोल (Aravalli & Thar Desert)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>अरावली पर्वतमाला:</strong> विश्व की <em>प्राचीनतम वलित पर्वतमाला</em>। राजस्थान को दो भागों में बांटती है। सर्वोच्च शिखर: <strong>गुरु शिखर (1722 मीटर)</strong>, माउंट आबू (सिरोही) में (कर्नल टॉड ने 'संतों का शिखर' कहा)।</p>
              <p>• <strong>थार का मरुस्थल:</strong> राज्य के <strong>61.11% भूभाग</strong> पर विस्तृत, जिसमें 40% जनसंख्या निवास करती है। 'लाठी सीरीज' (भूगर्भीय जलपट्टी व सेवण घास) जैसलमेर में है।</p>
              <p>• <strong>चंबल नदी:</strong> राजस्थान की एकमात्र नित्यवाही (बारहमासी) नदी; उत्खात भूमि (बीहड़ / Badland topography) हेतु प्रसिद्ध।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਰਾਜਸਥਾਨ ਪ੍ਰੀਖਿਆਵਾਂ ਲਈ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਮੇਵਾੜ ਦਾ ਇਤਿਹਾਸ (ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ - ਹਲਦੀਘਾਟੀ 1576), 1857 ਦੀ ਕ੍ਰਾਂਤੀ (ਨਸੀਰਾਬਾਦ 28 ਮਈ), 30 ਮਾਰਚ ਰਾਜਸਥਾਨ ਦਿਵਸ, ਅਰਾਵਲੀ (ਗੁਰੂ ਸ਼ਿਖਰ 1722 ਮੀਟਰ), ਅਤੇ ਘੂਮਰ ਨਾਚ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਹਲਦੀਘਾਟੀ ਦਾ ਯੁੱਧ:</strong> 18 ਜੂਨ 1576 ਨੂੰ ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਅਤੇ ਅਕਬਰ ਵਿਚਕਾਰ।</p>
            <p>• <strong>ਰਾਜਸਥਾਨ ਦਿਵਸ:</strong> 30 ਮਾਰਚ। 1 ਨਵੰਬਰ 1956 ਨੂੰ ਪੂਰਾ ਏਕੀਕਰਣ ਹੋਇਆ।</p>
            <p>• <strong>ਗੁਰੂ ਸ਼ਿਖਰ:</strong> ਅਰਾਵਲੀ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ (1722 ਮੀਟਰ)।</p>
            <p>• <strong>ਘੂਮਰ:</strong> ਰਾਜਸਥਾਨ ਦਾ ਰਾਜ ਨਾਚ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Rajasthan Comprehensive Knowledge Base</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Mewar dynastic history (Haldighati 1576), 1857 uprising in Rajasthan (Nasirabad), 7 stages of integration (Rajasthan Day on March 30), 6 UNESCO Hill Forts, and the ancient Aravalli range.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Battle of Haldighati (18 June 1576):</strong> Maharana Pratap clashed with Akbar's Mughal forces led by Man Singh I.</p>
            <p>• <strong>1857 Revolution:</strong> Sparked on 28 May 1857 at Nasirabad Cantonment.</p>
            <p>• <strong>State Integration:</strong> Completed over 7 stages (1948–1956). 30 March celebrated annually as Rajasthan Day.</p>
            <p>• <strong>Guru Shikhar:</strong> Highest peak of the ancient Aravalli Range at 1,722 metres in Mount Abu (Sirohi).</p>
            <p>• <strong>Folk Heritage:</strong> Ghoomar is the state dance; Kalbelia dance inscribed on UNESCO Intangible Cultural Heritage list in 2010.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'हल्दीघाटी का युद्ध 18 जून 1576 को लड़ा गया। 28 मई 1857 को नसीराबाद से क्रांति शुरू हुई। 30 मार्च को राजस्थान दिवस मनाया जाता है और 1 नवंबर 1956 को एकीकरण पूर्ण हुआ। अरावली का सर्वोच्च शिखर गुरु शिखर (1722 मी.) है। घूमर राज्य नृत्य और कालबेलिया यूनेस्को धरोहर है।',
      pa: 'ਹਲਦੀਘਾਟੀ 18 ਜੂਨ 1576, 28 ਮਈ 1857 ਨੂੰ ਨਸੀਰਾਬਾਦ ਤੋਂ ਬਗਾਵਤ। 30 ਮਾਰਚ ਰਾਜਸਥਾਨ ਦਿਵਸ। ਗੁਰੂ ਸ਼ਿਖਰ (1722 ਮੀਟਰ) ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ। ਘੂਮਰ ਰਾਜ ਨਾਚ ਹੈ।',
      en: 'Battle of Haldighati took place on 18 June 1576. 1857 uprising began at Nasirabad on 28 May. Rajasthan Day is 30 March. Guru Shikhar (1,722m) is Aravalli highest point. Ghoomar is the state dance and Kalbelia is UNESCO-recognized.',
    },
    keyNotes: {
      hi: [
        '📌 18 जून 1576: हल्दीघाटी का ऐतिहासिक युद्ध (महाराणा प्रताप बनाम मानसिंह)।',
        '📌 28 मई 1857: नसीराबाद छावनी से राजस्थान में 1857 की क्रांति का आगाज।',
        '📌 30 मार्च: प्रतिवर्ष "राजस्थान दिवस" (Rajasthan Day) मनाया जाता है।',
        '📌 गुरु शिखर (1722 मीटर, माउंट आबू): अरावली पर्वतमाला की सर्वोच्च चोटी।',
        '📌 कालबेलिया नृत्य को 2010 में यूनेस्को अमूर्त सांस्कृतिक धरोहर सूची में शामिल किया गया।',
      ],
      pa: [
        '📌 18 ਜੂਨ 1576: ਹਲਦੀਘਾਟੀ ਦਾ ਯੁੱਧ।',
        '📌 28 ਮਈ 1857: ਨਸੀਰਾਬਾਦ ਤੋਂ ਕ੍ਰਾਂਤੀ ਸ਼ੁਰੂ।',
        '📌 30 ਮਾਰਚ: ਰਾਜਸਥਾਨ ਦਿਵਸ।',
        '📌 ਗੁਰੂ ਸ਼ਿਖਰ (1722 ਮੀਟਰ): ਅਰਾਵਲੀ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ।',
      ],
      en: [
        '📌 18 June 1576: Battle of Haldighati fought between Maharana Pratap and Man Singh.',
        '📌 28 May 1857: Outbreak of 1857 rebellion at Nasirabad cantonment.',
        '📌 30 March: Celebrated annually as Rajasthan Day.',
        '📌 Guru Shikhar (1,722 m, Mount Abu) is the highest elevation of the Aravalli range.',
        '📌 Kalbelia folk dance was inscribed on UNESCO Representative List in 2010.',
      ],
    },
    flashcards: [
      {
        id: 'fc-raj-1',
        q: { hi: 'अरावली पर्वतमाला की सबसे ऊंची चोटी कौन सी है और इसकी ऊंचाई कितनी है?', pa: 'ਅਰਾਵਲੀ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ ਕਿਹੜੀ ਹੈ?', en: 'Which is the highest peak of the Aravalli Range and what is its height?' },
        a: { hi: 'गुरु शिखर (1722 मीटर), माउंट आबू (सिरोही जिला) में।', pa: 'ਗੁਰੂ ਸ਼ਿਖਰ (1722 ਮੀਟਰ), ਮਾਊਂਟ ਆਬੂ।', en: 'Guru Shikhar (1,722 metres), located at Mount Abu in Sirohi district.' },
        difficulty: 'easy',
      },
      {
        id: 'fc-raj-2',
        q: { hi: '"राजस्थान दिवस" प्रत्येक वर्ष किस तिथि को मनाया जाता है?', pa: 'ਰਾਜਸਥਾਨ ਦਿਵਸ ਕਦੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?', en: 'On which date is Rajasthan Day celebrated every year?' },
        a: { hi: '30 मार्च को (1949 में वृहत् राजस्थान के गठन के उपलक्ष्य में)।', pa: '30 ਮਾਰਚ।', en: '30 March (marking the unification of Greater Rajasthan in 1949).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Rajasthan GK Complete History, Art & Culture Marathon',
        channel: 'Rajasthan Exam Gurukul',
        youtubeId: 'RajasthanGKComplete1',
        language: 'hi',
        views: '780K',
        duration: '2:20:00',
        tags: ['Rajasthan GK', 'REET', 'Aravalli'],
      },
    ],
    bookRefs: [
      {
        title: 'Rajasthan Aajtak / Panorama',
        author: 'H.D. Singh & Chitra Rao',
        chapters: 'History, Forts, Geography, Integration',
        type: 'standard',
      },
      {
        title: 'Rajasthan Adhyayan (Class 9 & 10)',
        author: 'Board of Secondary Education Rajasthan (RBSE)',
        chapters: 'All Heritage Modules',
        type: 'state-board',
      },
    ],
    documents: [
      {
            "title": "RBSE REET 2024 · Level 1 & Level 2 Official Syllabus PDF",
            "url": "https://rajeduboard.rajasthan.gov.in/REET2024/syllabus.pdf",
            "language": "Hindi",
            "type": "syllabus"
      },
      {
            "title": "RSMSSB · 3rd Grade Teacher & Patwar Official Syllabus",
            "url": "https://rsmssb.rajasthan.gov.in/Static/files/Syllabus_2024.pdf",
            "language": "Hindi",
            "type": "syllabus"
      },
      {
            "title": "RBSE Class 9 · राजस्थान का स्वतंत्रता आंदोलन एवं शौर्य परंपरा",
            "url": "https://rajeduboard.rajasthan.gov.in/books/class9/rajasthan_adhyayan.pdf",
            "language": "Hindi",
            "type": "textbook"
      },
      {
            "title": "RBSE Class 10 · राजस्थान का इतिहास एवं संस्कृति (Art & Culture)",
            "url": "https://rajeduboard.rajasthan.gov.in/books/class10/rajasthan_sanskriti.pdf",
            "language": "Hindi",
            "type": "textbook"
      }
],
    syllabusReference: {
      "title": "RBSE REET & RSMSSB 3rd Grade Teacher Official Syllabus",
      "url": "https://rajeduboard.rajasthan.gov.in/REET2024/syllabus.pdf"
},
  },
  'raj-history-pratap': {
    id: 'raj-history-pratap',
    topicId: 'raj-history-pratap',
    subjectId: 'social-science',
    category: 'rajasthan',
    title: {
      hi: 'महाराणा प्रताप और हल्दीघाटी का युद्ध',
      pa: 'ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਅਤੇ ਹਲਦੀਘਾਟੀ ਦੀ ਲੜਾਈ',
      en: 'Maharana Pratap and Battle of Haldighati',
    },
    examRelevance: 'REET Level 1 & 2 (5-8 Qs), Rajasthan Police, RSMSSB Patwari',
    estimatedTime: '25 min',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 राजस्थान का गौरवशाली इतिहास: महाराणा प्रताप</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              महाराणा प्रताप मेवाड़ के 54वें शासक थे जिन्होंने मुग़ल सम्राट अकबर की अधीनता कभी स्वीकार नहीं की और आजीवन मातृभूमि की स्वतंत्रता के लिए संघर्ष किया।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. जन्म एवं प्रारंभिक जीवन</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>जन्म:</strong> <strong>9 मई 1540</strong> (ज्येष्ठ शुक्ल तृतीया, वि.सं. 1597) को <strong>कुंभलगढ़ दुर्ग के बादल महल</strong> (कटारगढ़) में हुआ।</p>
              <p>• <strong>माता-पिता:</strong> पिता महाराणा उदयसिंह द्वितीय एवं माता महारानी जयवंता बाई (पाली के अखैराज सोनगरा चौहान की पुत्री) थीं।</p>
              <p>• <strong>बचपन का नाम:</strong> स्थानीय भील जनजाति में प्रताप को प्यार से <em>'कीका'</em> कहा जाता था।</p>
              <p>• <strong>राज्याभिषेक:</strong> 28 फरवरी 1572 को गोगुंदा में हुआ तथा विधिवत राज्याभिषेक समारोह कुंभलगढ़ में संपन्न हुआ।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. हल्दीघाटी का ऐतिहासिक युद्ध (18 जून 1576)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm text-slate-300">
              <p>• <strong>पृष्ठभूमि:</strong> अकबर ने प्रताप को समझाने के लिए चार शिष्टमंडल (दूत) भेजे — <em>जमाभटो (जलाल खां, मान सिंह, भगवंत दास, टोडरमल)</em>, किंतु प्रताप ने मुग़ल अधीनता अस्वीकार कर दी।</p>
              <p>• <strong>युद्ध की तिथि व स्थल:</strong> <strong>18 जून 1576</strong> को खमनौर (राजसमंद) के पास हल्दीघाटी के तंग दर्रे में लड़ा गया। (गोपीनाथ शर्मा के अनुसार 21 जून 1576)।</p>
              <p>• <strong>सेनापति:</strong> मुग़ल सेना का मुख्य सेनापति <strong>मान सिंह (आमेर)</strong> व आसफ खां था। महाराणा प्रताप की हरावल (अग्रिम) सेना का नेतृत्व अफगान सरदार <strong>हकीम खां सूरी</strong> और भील सेना का नेतृत्व <strong>राणा पूंजा भील</strong> ने किया।</p>
              <p>• <strong>उपनाम:</strong> कर्नल जेम्स टॉड ने इसे <em>'मेवाड़ की थर्मोपल्ली'</em>, अबुल फजल ने <em>'खमनौर का युद्ध'</em> तथा बदायूंनी ने <em>'गोगुंदा का युद्ध'</em> कहा।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. चेतक का बलिदान एवं छापामार युद्ध</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>चेतक का पराक्रम:</strong> प्रताप के स्वामीभक्त अश्व <em>चेतक</em> ने मानसिंह के हाथी मर्दाना पर अपने पांव टिका दिए। घायल अवस्था में बलीचा नाला पार कर चेतक ने प्राण त्याग दिए। <strong>बलीचा गाँव (राजसमंद)</strong> में चेतक का स्मारक (छतरी) बना है।</p>
              <p>• <strong>झाला बीदा (झाला मान):</strong> युद्ध में संकट के समय महाराणा प्रताप का राजमुकुट धारण कर स्वयं बलिदान दिया और प्रताप को सुरक्षित निकाला।</p>
              <p>• <strong>भामाशाह का सहयोग:</strong> चूलिया गाँव में पाली के सेठ भामाशाह व उनके भाई ताराचंद ने अपनी संपूर्ण निजी संपत्ति (25 लाख रु. व 20 हजार अशर्फियां) प्रताप को समर्पित की। भामाशाह को 'मेवाड़ का उद्धारक' व 'दानवीर' कहा जाता है।</p>
              <p>• <strong>छापामार (गुरिल्ला) युद्ध:</strong> अरावली की पहाड़ियों को केंद्र बनाकर प्रताप ने मुग़लों के विरुद्ध गुरिल्ला युद्ध जारी रखा।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. दिवेर का युद्ध एवं चावंड राजधानी</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>दिवेर का युद्ध (अक्टूबर 1582):</strong> प्रताप ने मुग़ल थानेदार सुल्तान खां को परास्त कर विजय अभियान शुरू किया। कर्नल टॉड ने इसे <em>'मेवाड़ का मैराथन'</em> कहा।</p>
              <p>• <strong>चावंड राजधानी (1585):</strong> लूणा चावंडिया को हराकर प्रताप ने चावंड को मेवाड़ की नई आपातकालीन राजधानी बनाया, जहाँ चावंड चित्रकला शैली का विकास हुआ।</p>
              <p>• <strong>महाप्रयाण:</strong> <strong>29 जनवरी 1597</strong> को चावंड में 57 वर्ष की आयु में धनुष की प्रत्यंचा चढ़ाते समय चोट लगने से प्रताप का देहांत हुआ। बांडोली (चावंड के पास) में प्रताप की 8 खंभों की छतरी स्थित है।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਅਤੇ ਹਲਦੀਘਾਟੀ ਦੀ ਲੜਾਈ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ (1540-1597) ਮੇਵਾੜ ਦੇ ਮਹਾਨ ਰਾਜਪੂਤ ਸ਼ਾਸਕ ਸਨ ਜਿਨ੍ਹਾਂ ਨੇ ਅਕਬਰ ਦੀ ਅਧੀਨਤਾ ਕਦੇ ਸਵੀਕਾਰ ਨਹੀਂ ਕੀਤੀ ਅਤੇ ਆਜ਼ਾਦੀ ਲਈ ਸੰਘਰਸ਼ ਕੀਤਾ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਜਨਮ:</strong> 9 ਮਈ 1540 ਨੂੰ ਕੁੰਭਲਗੜ੍ਹ ਦੁਰਗ ਵਿੱਚ। ਬਚਪਨ ਦਾ ਨਾਮ 'ਕੀਕਾ' ਸੀ।</p>
            <p>• <strong>ਹਲਦੀਘਾਟੀ ਦੀ ਲੜਾਈ:</strong> 18 ਜੂਨ 1576 ਨੂੰ ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਅਤੇ ਮੁਗਲ ਸੈਨਾਪਤੀ ਮਾਨ ਸਿੰਘ ਵਿਚਕਾਰ ਲੜੀ ਗਈ।</p>
            <p>• <strong>ਚੇਤਕ ਘੋੜਾ:</strong> ਪ੍ਰਤਾਪ ਦੇ ਵਫ਼ਾਦਾਰ ਘੋੜੇ ਚੇਤਕ ਨੇ ਬਲੀਚਾ ਵਿੱਚ ਪ੍ਰਾਣ ਤਿਆਗੇ ਜਿੱਥੇ ਉਸ ਦੀ ਸਮਾਧ ਬਣੀ ਹੈ।</p>
            <p>• <strong>ਭਾਮਾਸ਼ਾਹ:</strong> ਮੇਵਾੜ ਦੇ ਦਾਨਵੀਰ ਜਿਨ੍ਹਾਂ ਨੇ ਪ੍ਰਤਾਪ ਨੂੰ ਸੈਨਾ ਲਈ ਧਨ ਭੇਟ ਕੀਤਾ।</p>
            <p>• <strong>ਦਿਵੇਰ ਦੀ ਲੜਾਈ (1582):</strong> ਕਰਨਲ ਟੌਡ ਨੇ ਇਸ ਨੂੰ 'ਮੇਵਾੜ ਦਾ ਮੈਰਾਥਨ' ਕਿਹਾ।</p>
            <p>• <strong>ਦੇਹਾਂਤ:</strong> 29 ਜਨਵਰੀ 1597 ਨੂੰ ਚਾਵੰਡ ਵਿੱਚ ਹੋਇਆ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Maharana Pratap and the Battle of Haldighati</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Maharana Pratap (1540–1597) was the legendary ruler of Mewar who fiercely defended Rajput sovereignty and resisted Mughal expansion under Akbar.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Birth:</strong> 9 May 1540 at Kumbhalgarh Fort (Badal Mahal). Known as 'Kika' in childhood by the Bhil community.</p>
            <p>• <strong>Battle of Haldighati (18 June 1576):</strong> Clashed with Akbar's Mughal army led by Raja Man Singh of Amer and Asaf Khan. Hakim Khan Suri led Pratap's vanguard and Rana Punja commanded the Bhil warriors.</p>
            <p>• <strong>Chetak:</strong> Pratap's faithful warhorse who saved his master and died at Balicha, where a cenotaph stands in his honor.</p>
            <p>• <strong>Bhamashah:</strong> Financier of Mewar who donated his wealth at Chulia to rebuild Pratap's army.</p>
            <p>• <strong>Battle of Dewair (1582):</strong> Decisive victory termed the 'Marathon of Mewar' by Col. James Tod.</p>
            <p>• <strong>Capital & Death:</strong> Established emergency capital at Chavand (1585). Passed away on 29 January 1597 at age 57.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'महाराणा प्रताप (1540-1597) मेवाड़ के महान राजपूत शासक थे। हल्दीघाटी का युद्ध 18 जून 1576 को मुग़ल सेनापति मान सिंह और प्रताप के बीच लड़ा गया। चेतक ने स्वामीभक्ति का अद्वितीय उदाहरण प्रस्तुत किया। प्रताप ने अरावली की पहाड़ियों से छापामार युद्ध जारी रखा और कभी मुग़ल अधीनता स्वीकार नहीं की।',
      pa: 'ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ (1540-1597) ਮੇਵਾੜ ਦੇ ਮਹਾਨ ਰਾਜਪੂਤ ਸ਼ਾਸਕ ਸਨ। ਹਲਦੀਘਾਟੀ ਦੀ ਲੜਾਈ 18 ਜੂਨ 1576 ਨੂੰ ਮੁਗਲ ਸੈਨਾਪਤੀ ਮਾਨ ਸਿੰਘ ਅਤੇ ਪ੍ਰਤਾਪ ਵਿਚਕਾਰ ਹੋਈ। ਪ੍ਰਤਾਪ ਨੇ ਅਰਾਵਲੀ ਦੀਆਂ ਪਹਾੜੀਆਂ ਤੋਂ ਗੁਰੀਲਾ ਯੁੱਧ ਜਾਰੀ ਰੱਖਿਆ।',
      en: 'Maharana Pratap (1540-1597) was the great Rajput ruler of Mewar. Battle of Haldighati was fought on 18 June 1576 between Mughal general Man Singh and Pratap. Pratap led guerrilla resistance from the Aravallis and never surrendered.',
    },
    keyNotes: {
      hi: [
        'महाराणा प्रताप का जन्म 9 मई 1540 को कुंभलगढ़ दुर्ग में हुआ।',
        'हल्दीघाटी का युद्ध 18 जून 1576 को मान सिंह (मुग़ल सेनापति) और महाराणा प्रताप के बीच लड़ा गया।',
        'हकीम खां सूरी हरावल सेना के नायक थे और पूंजा भील ने भील सेना का नेतृत्व किया।',
        'प्रताप का प्रिय व स्वामीभक्त घोड़ा चेतक था, जिसकी छतरी बलीचा गाँव में है।',
        'कर्नल टॉड ने हल्दीघाटी को "मेवाड़ की थर्मोपल्ली" तथा दिवेर युद्ध (1582) को "मेवाड़ का मैराथन" कहा।',
        'प्रताप की मृत्यु 29 जनवरी 1597 को चावंड में हुई।',
      ],
      pa: [
        'ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਦਾ ਜਨਮ 9 ਮਈ 1540 ਨੂੰ ਕੁੰਭਲਗੜ੍ਹ ਵਿੱਚ ਹੋਇਆ।',
        'ਹਲਦੀਘਾਟੀ ਦੀ ਲੜਾਈ 18 ਜੂਨ 1576 ਨੂੰ ਹੋਈ।',
        'ਮੁਗਲ ਸੈਨਾਪਤੀ ਮਾਨ ਸਿੰਘ ਸਨ ਅਤੇ ਹਕੀਮ ਖਾਨ ਸੂਰੀ ਪ੍ਰਤਾਪ ਦੀ ਹਰਾਵਲ ਸੈਨਾ ਦੇ ਮੁਖੀ ਸਨ।',
        'ਪ੍ਰਤਾਪ ਦਾ ਵਫ਼ਾਦਾਰ ਘੋੜਾ ਚੇਤਕ ਸੀ ਜਿਸਦੀ ਸਮਾਧ ਬਲੀਚਾ ਵਿੱਚ ਹੈ।',
        'ਪ੍ਰਤਾਪ ਦੀ ਮੌਤ 29 ਜਨਵਰੀ 1597 ਨੂੰ ਚਾਵੰਡ ਵਿੱਚ ਹੋਈ।',
      ],
      en: [
        'Maharana Pratap born 9 May 1540 at Kumbhalgarh Fort.',
        'Battle of Haldighati fought 18 June 1576 between Man Singh and Pratap.',
        'Hakim Khan Suri led Pratap\'s vanguard and Rana Punja led Bhil archers.',
        'Pratap\'s faithful warhorse was Chetak, whose memorial is at Balicha.',
        'Col. Tod called Haldighati the "Thermopylae of Mewar" and Dewair the "Marathon of Mewar".',
        'Pratap died on 29 January 1597 at Chavand.',
      ],
    },
    flashcards: [
      {
        id: 'fc-pratap-1',
        q: { hi: 'हल्दीघाटी का युद्ध कब हुआ था?', pa: 'ਹਲਦੀਘਾਟੀ ਦੀ ਲੜਾਈ ਕਦੋਂ ਹੋਈ ਸੀ?', en: 'When was the Battle of Haldighati fought?' },
        a: { hi: '18 जून 1576 (खमनौर, राजसमंद)', pa: '18 ਜੂਨ 1576', en: '18 June 1576' },
        difficulty: 'easy',
      },
      {
        id: 'fc-pratap-2',
        q: { hi: 'महाराणा प्रताप के स्वामीभक्त घोड़े का क्या नाम था?', pa: 'ਮਹਾਰਾਣਾ ਪ੍ਰਤਾਪ ਦੇ ਵਫ਼ਾਦਾਰ ਘੋੜੇ ਦਾ ਕੀ ਨਾਮ ਸੀ?', en: 'What was the name of Maharana Pratap\'s loyal horse?' },
        a: { hi: 'चेतक (जिसका स्मारक बलीचा गाँव में स्थित है)', pa: 'ਚੇਤਕ', en: 'Chetak (memorial located at Balicha village)' },
        difficulty: 'easy',
      },
      {
        id: 'fc-pratap-3',
        q: { hi: 'हल्दीघाटी के युद्ध में मुग़ल सेना का मुख्य सेनापति कौन था?', pa: 'ਹਲਦੀਘਾਟੀ ਦੀ ਲੜਾਈ ਵਿੱਚ ਮੁਗਲ ਸੈਨਾ ਦਾ ਮੁੱਖ ਸੈਨਾਪਤੀ ਕੌਣ ਸੀ?', en: 'Who was the chief commander of the Mughal army at Haldighati?' },
        a: { hi: 'मान सिंह (आमेर के राजा)', pa: 'ਮਾਨ ਸਿੰਘ (ਆਮੇਰ ਦਾ ਰਾਜਾ)', en: 'Raja Man Singh of Amer' },
        difficulty: 'medium',
      },
      {
        id: 'fc-pratap-4',
        q: { hi: 'कर्नल जेम्स टॉड ने किस युद्ध को "मेवाड़ का मैराथन" कहा था?', pa: 'ਕਰਨਲ ਜੇਮਜ਼ ਟੌਡ ਨੇ ਕਿਸ ਯੁੱਧ ਨੂੰ "ਮੇਵਾੜ ਦਾ ਮੈਰਾਥਨ" ਕਿਹਾ ਸੀ?', en: 'Which battle was termed the "Marathon of Mewar" by Col. James Tod?' },
        a: { hi: 'दिवेर का युद्ध (अक्टूबर 1582)', pa: 'ਦਿਵੇਰ ਦੀ ਲੜਾਈ (1582)', en: 'Battle of Dewair (October 1582)' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Maharana Pratap & Battle of Haldighati — REET/Rajasthan Police',
        channel: 'StudyIQ IAS',
        youtubeId: 'kQN9g8oKpUc',
        language: 'hi',
        duration: '40 min',
        tags: ['REET', 'Rajasthan History', 'Maharana Pratap'],
      },
    ],
    bookRefs: [
      {
        title: 'NCERT Class 7 — Our Pasts II (Medieval India)',
        author: 'NCERT',
        chapters: 'Chapter 9: Eighteenth-Century Political Formations',
        type: 'ncert',
      },
      {
        title: 'Rajasthan History — RBSE Textbook',
        author: 'RBSE',
        chapters: 'Medieval Rajasthan: Mewar Dynastic Glory',
        type: 'state-board',
      },
    ],
    documents: [
      {
        title: 'RBSE Rajasthan History Syllabus for REET',
        url: 'https://rajeduboard.rajasthan.gov.in',
        language: 'hi',
        type: 'syllabus',
      },
    ],
  },
  'raj-geography-terrain': {
    id: 'raj-geography-terrain',
    topicId: 'raj-geography-terrain',
    subjectId: 'geography',
    category: 'rajasthan',
    title: {
      hi: 'राजस्थान का भूगोल: नदियां, मरुस्थल, अरावली एवं भौतिक प्रदेश',
      pa: 'ਰਾਜਸਥਾਨ ਦਾ ਭੂਗੋਲ: ਨਦੀਆਂ, ਮਾਰੂਥਲ ਅਤੇ ਅਰਾਵਲੀ ਪਰਬਤ',
      en: 'Rajasthan Geography: Rivers, Desert, Aravalli & Terrain',
    },
    examRelevance: 'REET Level 1 & 2 (8-10 Qs), Rajasthan Patwar (15 Qs), Rajasthan Police Constable & SI, RSMSSB CET',
    estimatedTime: '30 min',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 राजस्थान की भौतिक संरचना एवं नदी तंत्र</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              क्षेत्रफल की दृष्टि से राजस्थान भारत का सबसे बड़ा राज्य है (3,42,239 वर्ग किमी, देश का 10.41%)। राज्य में 33 जिले (नवीन पुनर्गठन अनुसार संभाग व जिले) हैं और राजधानी जयपुर ('गुलाबी नगरी') है।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. अरावली पर्वतमाला (Aravalli Range)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>विशेषता:</strong> विश्व की <em>प्राचीनतम वलित (Fold) पर्वतमाला</em>, जो प्री-कैम्ब्रियन काल में निर्मित हुई।</p>
              <p>• <strong>विस्तार:</strong> गुजरात के पालनपुर से दिल्ली की रायसीना पहाड़ी (राष्ट्रपति भवन) तक कुल <strong>692 किमी</strong>, जिसमें से <strong>550 किमी (लगभग 80%)</strong> राजस्थान में (दक्षिण-पश्चिम से उत्तर-पूर्व) विस्तृत है।</p>
              <p>• <strong>सर्वोच्च शिखर:</strong> <strong>गुरु शिखर (1722 मीटर)</strong>, माउंट आबू (सिरोही जिला)। कर्नल जेम्स टॉड ने इसे <em>'संतों का शिखर'</em> कहा था।</p>
              <p>• <strong>अन्य प्रमुख चोटियां:</strong> सेर (1597 मी., सिरोही), दिलवाड़ा (1442 मी., सिरोही), जरगा (1431 मी., उदयपुर), अचलगढ़ (1380 मी., सिरोही), रघुनाथगढ़ (1055 मी., सीकर - उत्तरी अरावली की सर्वोच्च चोटी)।</p>
              <p>• <strong>जल विभाजक:</strong> अरावली राजस्थान में बंगाल की खाड़ी और अरब सागर के अपवाह तंत्र के मध्य महान भारतीय जल विभाजक का कार्य करती है।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. थार का मरुस्थल (Great Indian Desert)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>क्षेत्रफल एवं जनसंख्या:</strong> राज्य के कुल भूभाग का <strong>61.11%</strong> क्षेत्र मरुस्थलीय है, जहाँ राज्य की <strong>40% जनसंख्या</strong> निवास करती है। यह <em>विश्व का सर्वाधिक जनघनत्व एवं जैव-विविधता वाला मरुस्थल</em> है।</p>
              <p>• <strong>जलवायु:</strong> अत्यधिक विषम जलवायु — ग्रीष्मकाल में दिन अत्यधिक गर्म और रातें रेत के शीघ्र ठंडे होने के कारण ठंडी होती हैं। दैनिक तापांतर उच्च रहता है।</p>
              <p>• <strong>लाठी सीरीज एवं सेवण घास:</strong> जैसलमेर में पोकरण से मोहनगढ़ तक फैली 60 किमी लंबी भूगर्भीय मीठे पानी की पट्टी को 'लाठी सीरीज' कहते हैं, जहाँ पौष्टिक <em>'सेवण घास' (Lasiurus scindicus)</em> पाई जाती है, जो राज्य पक्षी गोडावण की प्रजनन स्थली है।</p>
              <p>• <strong>बालुका स्तूप:</strong> बरखान (अर्धचंद्राकार गतिशील टीले), अनुप्रस्थ, अनुदैर्ध्य (सीफ) बालुका स्तूप मरुस्थल की प्रमुख विशेषताएं हैं।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. प्रमुख नदी अपवाह तंत्र (River Drainage Systems)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm text-slate-300">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">चंबल नदी (Chambal)</span>
                  <p class="text-slate-300">• <strong>उद्गम:</strong> म.प्र. में विंध्याचल पर्वत (जानापाव पहाड़ी, महू)।</p>
                  <p class="text-slate-300">• राजस्थान में चौरासीगढ़ (चित्तौड़गढ़) से प्रवेश; कोटा, बूंदी, सवाई माधोपुर, करौली, धौलपुर होते हुए यमुना में मिलती है।</p>
                  <p class="text-slate-300">• राजस्थान की एकमात्र <em>बारहमासी (नित्यवाही)</em> नदी। <strong>उत्खात भूमि (बीहड़ / Badland topography)</strong> हेतु प्रसिद्ध।</p>
                  <p class="text-slate-300">• 4 प्रमुख बांध: गांधी सागर (MP), राणा प्रताप सागर (चित्तौड़गढ़), जवाहर सागर (कोटा), कोटा बैराज।</p>
                </div>

                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">लूणी नदी (Luni)</span>
                  <p class="text-slate-300">• <strong>उद्गम:</strong> अजमेर की नाग पहाड़ी (अरावली)।</p>
                  <p class="text-slate-300">• अजमेर, नागौर, पाली, जोधपुर, बाड़मेर, जालौर में बहती हुई <strong>कच्छ के रण (गुजरात)</strong> में विलीन होती है।</p>
                  <p class="text-slate-300">• <em>'आधी मीठी, आधी खारी'</em>: बालोतरा (बाड़मेर) तक इसका जल मीठा तथा आगे खारा (saline) हो जाता है।</p>
                  <p class="text-slate-300">• पश्चिमी राजस्थान की प्रमुख नदी (मरुगंगा)।</p>
                </div>

                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-cyan-400 font-bold block mb-1">बनास नदी (Banas)</span>
                  <p class="text-slate-300">• <strong>उद्गम:</strong> राजसमंद में खमनौर की पहाड़ियों से।</p>
                  <p class="text-slate-300">• पूर्णतः राजस्थान में बहने वाली सबसे लंबी नदी (लगभग 512 किमी)।</p>
                  <p class="text-slate-300">• इसे <em>'वन की आशा' (वर्णाशा)</em> भी कहते हैं।</p>
                  <p class="text-slate-300">• सवाई माधोपुर (रामेश्वरम) में चंबल और सीप के साथ मिलकर त्रिवेणी संगम बनाती है। बीसलपुर बांध (टोंक) इसी पर है।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਰਾਜਸਥਾਨ ਦਾ ਭੂਗੋਲ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਖੇਤਰਫਲ ਵਜੋਂ ਰਾਜਸਥਾਨ ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਰਾਜ ਹੈ (3,42,239 ਵਰਗ ਕਿਮੀ)। ਰਾਜਧਾਨੀ ਜੈਪੁਰ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਅਰਾਵਲੀ ਪਰਬਤਮਾਲਾ:</strong> ਦੁਨੀਆ ਦੀ ਸਭ ਤੋਂ ਪੁਰਾਣੀ ਵਲਿਤ ਪਰਬਤ ਲੜੀ। ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ <strong>ਗੁਰੂ ਸ਼ਿਖਰ (1722 ਮੀਟਰ)</strong>, ਮਾਊਂਟ ਆਬੂ ਵਿੱਚ ਹੈ।</p>
            <p>• <strong>ਥਾਰ ਮਾਰੂਥਲ:</strong> ਰਾਜ ਦੇ 61.11% ਖੇਤਰਫਲ 'ਤੇ ਫੈਲਿਆ ਹੋਇਆ ਹੈ ਅਤੇ 40% ਆਬਾਦੀ ਰਹਿੰਦੀ ਹੈ। ਦੁਨੀਆ ਦਾ ਸਭ ਤੋਂ ਵੱਧ ਆਬਾਦੀ ਵਾਲਾ ਮਾਰੂਥਲ ਹੈ।</p>
            <p>• <strong>ਚੰਬਲ ਨਦੀ:</strong> ਵਿੰਧਿਆਚਲ ਤੋਂ ਨਿਕਲਦੀ ਹੈ, ਕੋਟਾ ਵਿੱਚੋਂ ਲੰਘਦੀ ਹੈ ਅਤੇ ਖੱਡਾਂ (Badlands) ਲਈ ਪ੍ਰਸਿੱਧ ਹੈ।</p>
            <p>• <strong>ਲੂਣੀ ਨਦੀ:</strong> ਅਜਮੇਰ ਤੋਂ ਨਿਕਲ ਕੇ ਕੱਛ ਦੇ ਰਣ ਵਿੱਚ ਜਾਂਦੀ ਹੈ। ਬਲੋਤਰਾ ਤੋਂ ਬਾਅਦ ਇਸਦਾ ਪਾਣੀ ਖਾਰਾ ਹੋ ਜਾਂਦਾ ਹੈ।</p>
            <p>• <strong>ਬਨਾਸ ਨਦੀ:</strong> ਖਮਨੌਰ ਤੋਂ ਨਿਕਲ ਕੇ ਚੰਬਲ ਵਿੱਚ ਮਿਲਦੀ ਹੈ। ਇਸ ਨੂੰ 'ਵਣ ਕੀ ਆਸ਼ਾ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Rajasthan Geography: Terrain, Rivers & Desert</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Rajasthan is the largest state of India by geographic area (342,239 sq km, ~10.41% of national area) with capital Jaipur ('Pink City').
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Aravalli Range:</strong> Oldest fold mountain range on Earth, spanning 692 km from Gujarat to Delhi (550 km in Rajasthan). Highest peak is <strong>Guru Shikhar (1,722 m)</strong> at Mount Abu (Sirohi).</p>
            <p>• <strong>Thar Desert:</strong> Spans 61.11% of the state's territory and shelters 40% of its population. Known for extreme diurnal temperature variations, barchan sand dunes, and the Lathi Series underground water reservoir.</p>
            <p>• <strong>Chambal River:</strong> Originates from Janapav hills in Vindhya range (MP), flows through Kota, famous for deep ravines and badland topography; perennial river with 4 major dams.</p>
            <p>• <strong>Luni River:</strong> Originates from Nag Pahar (Ajmer) and terminates in the Rann of Kutch; fresh water up to Balotra, turning saline downstream.</p>
            <p>• <strong>Banas River:</strong> Originates in Khamnor hills (Rajsamand), known as 'Hope of the Forest' (Varnasha), major tributary of the Chambal.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'राजस्थान भारत का सबसे बड़ा राज्य (3,42,239 वर्ग किमी) है। अरावली विश्व की सबसे प्राचीन पर्वतमाला है जिसका सर्वोच्च शिखर गुरु शिखर (1722 मी.) है। थार मरुस्थल 61.11% भूभाग घेरता है। चंबल बारहमासी नदी है जो बीहड़ बनाती है, लूणी बालोतरा के बाद खारी हो जाती है और बनास पूर्णतः राजस्थान में बहने वाली सबसे लंबी नदी है।',
      pa: 'ਰਾਜਸਥਾਨ ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਰਾਜ (3,42,239 ਵਰਗ ਕਿਮੀ) ਹੈ। ਅਰਾਵਲੀ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ ਗੁਰੂ ਸ਼ਿਖਰ (1722 ਮੀਟਰ) ਹੈ। ਥਾਰ ਮਾਰੂਥਲ 61.11% ਖੇਤਰ ਘੇਰਦਾ ਹੈ। ਚੰਬਲ ਬਾਰਾਂਮਾਹੀ ਨਦੀ ਹੈ ਅਤੇ ਲੂਣੀ ਬਲੋਤਰਾ ਤੋਂ ਬਾਅਦ ਖਾਰੀ ਹੋ ਜਾਂਦੀ ਹੈ।',
      en: 'Rajasthan is India\'s largest state by area (342,239 sq km). The Aravalli is the oldest fold mountain range with highest peak Guru Shikhar (1,722m). Thar Desert covers 61.11% area. Chambal is a perennial ravine-forming river, Luni turns saline after Balotra, and Banas is the longest river flowing entirely within the state.',
    },
    keyNotes: {
      hi: [
        'राजस्थान का कुल क्षेत्रफल 3,42,239 वर्ग किमी है (भारत के कुल क्षेत्रफल का 10.41%)।',
        'अरावली की कुल लंबाई 692 किमी है, जिसमें 550 किमी (80%) राजस्थान में है।',
        'गुरु शिखर (1722 मीटर, माउंट आबू) राजस्थान व अरावली का सर्वोच्च शिखर है।',
        'थार मरुस्थल विश्व का सबसे घनी आबादी वाला मरुस्थल है (61.11% क्षेत्रफल, 40% जनसंख्या)।',
        'चंबल नदी पर राणा प्रताप सागर, जवाहर सागर और कोटा बैराज राजस्थान में स्थित हैं।',
        'लूणी नदी बालोतरा (बाड़मेर) तक मीठी और उसके पश्चात खारी (Saline) हो जाती है।',
        'बनास नदी को "वन की आशा" (वर्णाशा) कहा जाता है।',
      ],
      pa: [
        'ਰਾਜਸਥਾਨ ਦਾ ਖੇਤਰਫਲ 3,42,239 ਵਰਗ ਕਿਮੀ ਹੈ (ਭਾਰਤ ਦਾ 10.41%)।',
        'ਅਰਾਵਲੀ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ ਗੁਰੂ ਸ਼ਿਖਰ (1722 ਮੀਟਰ) ਮਾਊਂਟ ਆਬੂ ਵਿੱਚ ਹੈ।',
        'ਥਾਰ ਮਾਰੂਥਲ ਰਾਜ ਦੇ 61.11% ਖੇਤਰਫਲ \'ਤੇ ਫੈਲਿਆ ਹੋਇਆ ਹੈ।',
        'ਚੰਬਲ ਨਦੀ ਵਿੰਧਿਆਚਲ ਪਰਬਤ ਤੋਂ ਨਿਕਲਦੀ ਹੈ ਅਤੇ ਬਾਰਾਂਮਾਹੀ ਹੈ।',
        'ਲੂਣੀ ਨਦੀ ਬਲੋਤਰਾ ਤੋਂ ਬਾਅਦ ਖਾਰੀ ਹੋ ਜਾਂਦੀ ਹੈ।',
      ],
      en: [
        'Rajasthan total area is 342,239 sq km (10.41% of India\'s total geographic area).',
        'Aravalli Range spans 692 km (550 km / 80% inside Rajasthan).',
        'Guru Shikhar (1,722 m, Mount Abu) is the highest peak in Rajasthan.',
        'Thar Desert covers 61.11% of the state and holds 40% of its population.',
        'Chambal is the only perennial river of Rajasthan, forming famous ravines and badlands.',
        'Luni River is sweet water up to Balotra, turning saline downstream towards Rann of Kutch.',
        'Banas River is known as "Hope of the Forest" (Varnasha).',
      ],
    },
    flashcards: [
      {
        id: 'fc-raj-geo-1',
        q: { hi: 'राजस्थान का कुल क्षेत्रफल कितना है और क्षेत्रफल में भारत में इसका कौन सा स्थान है?', pa: 'ਰਾਜਸਥਾਨ ਦਾ ਕੁੱਲ ਖੇਤਰਫਲ ਕਿੰਨਾ ਹੈ?', en: 'What is the total area of Rajasthan and its national rank by area?' },
        a: { hi: '3,42,239 वर्ग किमी (प्रथम स्थान - 10.41%)', pa: '3,42,239 ਵਰਗ ਕਿਮੀ (ਪਹਿਲਾ ਸਥਾਨ)', en: '342,239 sq km (Rank 1 - 10.41% of India)' },
        difficulty: 'easy',
      },
      {
        id: 'fc-raj-geo-2',
        q: { hi: 'अरावली पर्वतमाला की सबसे ऊंची चोटी का नाम एवं ऊंचाई क्या है?', pa: 'ਅਰਾਵਲੀ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਚੋਟੀ ਦਾ ਨਾਮ ਤੇ ਉਚਾਈ ਕੀ ਹੈ?', en: 'What is the highest peak of Aravalli Range and its elevation?' },
        a: { hi: 'गुरु शिखर (1722 मीटर), माउंट आबू (सिरोही)', pa: 'ਗੁਰੂ ਸ਼ਿਖਰ (1722 ਮੀਟਰ), ਮਾਊਂਟ ਆਬੂ', en: 'Guru Shikhar (1,722 metres), Mount Abu (Sirohi)' },
        difficulty: 'easy',
      },
      {
        id: 'fc-raj-geo-3',
        q: { hi: 'राजस्थान की कौन सी नदी "आधी मीठी और आधी खारी" कहलाती है?', pa: 'ਕਿਹੜੀ ਨਦੀ ਅੱਧੀ ਮਿੱਠੀ ਅਤੇ ਅੱਧੀ ਖਾਰੀ ਅਖਵਾਉਂਦੀ ਹੈ?', en: 'Which river in Rajasthan is known as half sweet and half saline?' },
        a: { hi: 'लूणी नदी (बालोतरा तक मीठी, आगे खारी)', pa: 'ਲੂਣੀ ਨਦੀ (ਬਲੋਤਰਾ ਤੱਕ ਮਿੱਠੀ, ਅੱਗੇ ਖਾਰੀ)', en: 'Luni River (fresh up to Balotra, saline downstream)' },
        difficulty: 'medium',
      },
      {
        id: 'fc-raj-geo-4',
        q: { hi: 'चंबल नदी का उद्गम स्थल कहाँ है?', pa: 'ਚੰਬਲ ਨਦੀ ਦਾ ਉਦਗਮ ਕਿੱਥੇ ਹੈ?', en: 'Where does the Chambal River originate?' },
        a: { hi: 'जानापाव पहाड़ी (विंध्याचल पर्वत, महू, मध्य प्रदेश)', pa: 'ਜਾਨਾਪਾਵ ਪਹਾੜੀ, ਵਿੰਧਿਆਚਲ (ਮੱਧ ਪ੍ਰਦੇਸ਼)', en: 'Janapav Hills (Vindhya Range, Mhow, MP)' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Rajasthan Geography — Rivers, Aravalli & Desert for REET & Patwar',
        channel: 'Utkarsh Classes',
        youtubeId: 'RajGeoRivers101',
        language: 'hi',
        duration: '50 min',
        tags: ['REET', 'Rajasthan Geography', 'Aravalli', 'Rivers'],
      },
    ],
    bookRefs: [
      {
        title: 'Geography of Rajasthan',
        author: 'Dr. H.M. Saxena',
        chapters: 'Physiography, Drainage System, Climate & Soils',
        type: 'standard',
      },
      {
        title: 'NCERT Class 11 — India: Physical Environment',
        author: 'NCERT',
        chapters: 'Drainage Systems and Physiography',
        type: 'ncert',
      },
    ],
    documents: [
      {
        title: 'RBSE Class 9 & 10 Rajasthan Geography Study Modules',
        url: 'https://rajeduboard.rajasthan.gov.in',
        language: 'hi',
        type: 'textbook',
      },
    ],
  },
  'raj-culture-festivals': {
    id: 'raj-culture-festivals',
    topicId: 'raj-culture-festivals',
    subjectId: 'social-science',
    category: 'rajasthan',
    title: {
      hi: 'राजस्थान की कला एवं संस्कृति: मेले, त्योहार, लोक नृत्य एवं वाद्य यंत्र',
      pa: 'ਰਾਜਸਥਾਨ ਦਾ ਸੱਭਿਆਚਾਰ: ਮੇਲੇ, ਤਿਉਹਾਰ, ਲੋਕ ਨਾਚ ਅਤੇ ਸਾਜ਼',
      en: 'Rajasthan Culture: Fairs, Festivals, Folk Dances & Music',
    },
    examRelevance: 'REET Level 1 & 2 (6-8 Qs), Rajasthan Police, RSMSSB Patwari, CET, RPSC Grade 2 & 3',
    estimatedTime: '30 min',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 रंगीलो राजस्थान: लोक कला, मेले एवं सांस्कृतिक धरोहर</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              राजस्थान अपनी समृद्ध सांस्कृतिक विरासत, विश्व-प्रसिद्ध मेलों (पुष्कर मेला), लोक नृत्यों (घूमर, कालबेलिया) और पारंपरिक लोक वाद्य यंत्रों (सारंगी, रावणहत्था) के लिए जाना जाता है।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. प्रमुख मेले एवं त्योहार (Fairs & Festivals)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm text-slate-300">
              <p>• <strong>पुष्कर मेला (अजमेर):</strong> <strong>कार्तिक पूर्णिमा</strong> को आयोजित होने वाला विश्व का सबसे बड़ा ऊंट व पशु मेला। इसे 'रंगीला मेला' भी कहते हैं। यहाँ भारत का एकमात्र प्रमुख <em>ब्रह्मा मंदिर</em> व पवित्र पुष्कर झील स्थित है।</p>
              <p>• <strong>तीज महोत्सव (जयपुर):</strong> <strong>श्रावण शुक्ल तृतीया</strong> को 'हरियाली तीज / छोटी तीज' मनाई जाती है। यह सुहागिन महिलाओं एवं नवविवाहिताओं का पर्व है, जिसमें माता पार्वती की सवारी निकाली जाती है। (कजली तीज भाद्रपद कृष्ण तृतीया को बूंदी में प्रसिद्ध है)।</p>
              <p>• <strong>गणगौर (Gangaur):</strong> <strong>चैत्र शुक्ल तृतीया</strong> को मनाया जाने वाला 18 दिवसीय पर्व (होली के अगले दिन से प्रारंभ)। 'गण' शिव और 'गौर' पार्वती के प्रतीक हैं। जयपुर व उदयपुर की गणगौर सवारी प्रसिद्ध है।</p>
              <p>• <strong>रामदेवरा मेला (पोकरण, जैसलमेर):</strong> भाद्रपद शुक्ल द्वितीया (बाबे री बीज) से एकादशी तक लोक देवता बाबा रामदेव का मेला; सांप्रदायिक सद्भाव का सबसे बड़ा संगम।</p>
              <p>• <strong>बेणेश्वर मेला (डूंगरपुर):</strong> माघ पूर्णिमा को सोम, माही व जाखम नदियों के त्रिवेणी संगम पर; इसे <em>'आदिवासियों का कुंभ'</em> कहा जाता है।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. प्रसिद्ध लोक नृत्य (Folk Dances of Rajasthan)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm text-slate-300">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">घूमर नृत्य (Ghoomar Dance)</span>
                  <p class="text-slate-300">• राजस्थान का <strong>राज्य नृत्य</strong> ('नृत्यों का सिरमौर / आत्मा')।</p>
                  <p class="text-slate-300">• मूलतः भील जनजाति द्वारा मां सरस्वती की आराधना हेतु शुरू किया गया था, बाद में रजवाड़ों में लोकप्रिय हुआ।</p>
                  <p class="text-slate-300">• महिलाएं 80 कली का घाघरा पहनकर वृत्ताकार घेरे में घूमते हुए (घूम) नृत्य करती हैं। सवाई गति का प्रयोग होता है।</p>
                </div>

                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">कालबेलिया नृत्य (Kalbelia Dance)</span>
                  <p class="text-slate-300">• <strong>वर्ष 2010 में यूनेस्को (UNESCO)</strong> की अमूर्त सांस्कृतिक धरोहर (Intangible Cultural Heritage) सूची में शामिल।</p>
                  <p class="text-slate-300">• सपेरा (कालबेलिया) जाति की महिलाओं द्वारा सांप जैसी लचीली देह भंगिमाओं में किया जाने वाला नृत्य।</p>
                  <p class="text-slate-300">• <strong>गुलाबो सपेरा</strong> ने इसे अंतरराष्ट्रीय ख्याति दिलाई। प्रमुख वाद्य: पूंगी और खंजरी।</p>
                </div>
              </div>

              <p class="text-xs text-slate-300 pt-2 border-t border-slate-700">
                • <strong>अन्य लोक नृत्य:</strong> तेरहताली नृत्य (कामड़ जाति की महिलाएं 13 मंजीरों के साथ बाबा रामदेव की आराधना में करती हैं), चरी नृत्य (किशनगढ़ की फलकू बाई प्रसिद्ध, सिर पर जलती चरी), अग्नि नृत्य (कतरियासर, बीकानेर के जसनाथी संप्रदाय के सिद्ध पुरुषों द्वारा अंगारों पर 'फतेह-फतेह' बोलते हुए), गैर व गवरी नृत्य (भील जनजाति)।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. पारंपरिक लोक वाद्य यंत्र (Folk Musical Instruments)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>तत वाद्य (तार वाले):</strong>
                <br/>1. <strong>सारंगी:</strong> सर्वश्रेष्ठ तत वाद्य (27 तार), लंगा व मांगणियार गायकों द्वारा प्रयुक्त।
                <br/>2. <strong>रावणहत्था:</strong> नारियल के खोल पर बकरे की खाल मढ़कर बना प्राचीन वाद्य (9 तार); पाबूजी और रामदेवजी की <em>फड़ वाचन</em> के समय भोपों द्वारा बजाया जाता है।
                <br/>3. <strong>जंतर:</strong> देवनारायण जी की फड़ वाचन में गुर्जर भोपों द्वारा प्रयुक्त।
              </p>
              <p>• <strong>सुषिर वाद्य (फूंक वाले):</strong> पूंगी (बीन), अलगोजा (राजस्थान का राज्य वाद्य यंत्र - दो बांसुरी जोड़कर), शहनाई, बांकिया।</p>
              <p>• <strong>अवनद्ध वाद्य (खाल मढ़े):</strong> मांदल, ढोलक, चंग, खंजरी, डमरू।</p>
              <p>• <strong>घन वाद्य (धातु निर्मित):</strong> मंजीरा, खड़ताल (सदीक खां मांगणियार प्रसिद्ध वादक), थाली।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਰਾਜਸਥਾਨ ਦਾ ਸੱਭਿਆਚਾਰ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੁਸ਼ਕਰ ਮੇਲਾ, ਤੀਜ, ਗਣਗੌਰ, ਘੂਮਰ ਅਤੇ ਕਾਲਬੇਲੀਆ ਨਾਚ, ਸਾਰੰਗੀ ਅਤੇ ਰਾਵਣਹੱਥਾ ਸਾਜ਼।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਪੁਸ਼ਕਰ ਮੇਲਾ:</strong> ਕਾਰਤਿਕ ਪੂਰਨਮਾਸ਼ੀ ਨੂੰ ਅਜਮੇਰ ਵਿੱਚ ਲੱਗਣ ਵਾਲਾ ਊਠਾਂ ਦਾ ਵਿਸ਼ਵ ਪ੍ਰਸਿੱਧ ਮੇਲਾ।</p>
            <p>• <strong>ਤੀਜ ਅਤੇ ਗਣਗੌਰ:</strong> ਤੀਜ ਸਾਵਣ ਮਹੀਨੇ ਅਤੇ ਗਣਗੌਰ ਚੇਤ ਮਹੀਨੇ ਔਰਤਾਂ ਦਾ ਪ੍ਰਮੁੱਖ ਤਿਉਹਾਰ ਹੈ।</p>
            <p>• <strong>ਘੂਮਰ ਨਾਚ:</strong> ਰਾਜਸਥਾਨ ਦਾ ਰਾਜ ਨਾਚ ਜੋ ਔਰਤਾਂ ਘੇਰੇ ਵਿੱਚ ਕਰਦੀਆਂ ਹਨ।</p>
            <p>• <strong>ਕਾਲਬੇਲੀਆ ਨਾਚ:</strong> 2010 ਵਿੱਚ ਯੂਨੈਸਕੋ (UNESCO) ਦੀ ਅਮੂਰਤ ਵਿਰਾਸਤ ਵਿੱਚ ਸ਼ਾਮਲ; ਗੁਲਾਬੋ ਸਪੇਰਾ ਪ੍ਰਸਿੱਧ ਨਰਤਕੀ।</p>
            <p>• <strong>ਲੋਕ ਸਾਜ਼:</strong> ਰਾਵਣਹੱਥਾ (ਪਾਬੂਜੀ ਦੀ ਫੜ ਵੇਲੇ ਵਜਾਇਆ ਜਾਂਦਾ ਹੈ) ਅਤੇ ਸਾਰੰਗੀ। ਅਲਗੋਜ਼ਾ ਰਾਜ ਸਾਜ਼ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Rajasthan Culture: Fairs, Dances & Folk Music</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Rich cultural landscape highlighted by the Pushkar Camel Fair, Teej and Gangaur festivals, Ghoomar and UNESCO-recognized Kalbelia dances, and instruments like Sarangi and Ravanahatha.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Pushkar Fair:</strong> World-renowned camel and livestock trading fair held on Kartik Purnima in Ajmer beside Pushkar Lake and Brahma Temple.</p>
            <p>• <strong>Teej & Gangaur:</strong> Teej celebrates monsoon and Goddess Parvati in Shravan; Gangaur is an 18-day celebration of Shiva & Parvati beginning after Holi in Chaitra.</p>
            <p>• <strong>Ghoomar Dance:</strong> State dance of Rajasthan, performed by women in flowing ghaghras revolving in rhythmic circles.</p>
            <p>• <strong>Kalbelia Dance:</strong> Inscribed on UNESCO Intangible Cultural Heritage in 2010, popularized globally by Gulabo Sapera.</p>
            <p>• <strong>Folk Instruments:</strong> Ravanahatha (used during Pabuji Phad recitation), Sarangi (27 strings), and Algoza (double flute, state instrument).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'पुष्कर मेला कार्तिक पूर्णिमा को ऊंट व्यापार हेतु लगता है। तीज और गणगौर राजस्थान के प्रमुख महिला उत्सव हैं। घूमर राज्य नृत्य है और कालबेलिया को 2010 में यूनेस्को धरोहर घोषित किया गया। रावणहत्था और सारंगी प्रमुख तत वाद्य तथा अलगोजा राज्य वाद्य यंत्र है।',
      pa: 'ਪੁਸ਼ਕਰ ਮੇਲਾ ਕਾਰਤਿਕ ਪੂਰਨਮਾਸ਼ੀ ਨੂੰ ਲੱਗਦਾ ਹੈ। ਘੂਮਰ ਰਾਜ ਨਾਚ ਅਤੇ ਕਾਲਬੇਲੀਆ 2010 ਯੂਨੈਸਕੋ ਵਿਰਾਸਤ ਹੈ। ਰਾਵਣਹੱਥਾ ਅਤੇ ਸਾਰੰਗੀ ਪ੍ਰਮੁੱਖ ਸਾਜ਼ ਹਨ।',
      en: 'Pushkar Fair is held on Kartik Purnima for camel trading. Teej and Gangaur are primary women\'s festivals. Ghoomar is the state dance and Kalbelia was inscribed by UNESCO in 2010. Ravanahatha and Sarangi are iconic folk string instruments.',
    },
    keyNotes: {
      hi: [
        'पुष्कर मेला (अजमेर) कार्तिक पूर्णिमा को भरता है (विश्व प्रसिद्ध ऊंट मेला)।',
        'घूमर राजस्थान का राज्य नृत्य है, जो मूलतः भील जनजाति द्वारा प्रारंभ हुआ था।',
        'कालबेलिया नृत्य को वर्ष 2010 में यूनेस्को की अमूर्त सांस्कृतिक धरोहर सूची में शामिल किया गया (गुलाबो सपेरा)।',
        'रावणहत्था नारियल के खोल से बना वाद्य है, जिससे पाबूजी की फड़ बांची जाती है।',
        'अलगोजा (दो बांसुरियों का जोड़ा) राजस्थान का आधिकारिक राज्य वाद्य यंत्र है।',
        'बेणेश्वर धाम (डूंगरपुर) को "आदिवासियों का कुंभ" कहा जाता है।',
      ],
      pa: [
        'ਪੁਸ਼ਕਰ ਮੇਲਾ ਕਾਰਤਿਕ ਪੂਰਨਮਾਸ਼ੀ ਨੂੰ ਲੱਗਦਾ ਹੈ।',
        'ਘੂਮਰ ਰਾਜਸਥਾਨ ਦਾ ਰਾਜ ਨਾਚ ਹੈ।',
        'ਕਾਲਬੇਲੀਆ ਨਾਚ ਨੂੰ 2010 ਵਿੱਚ ਯੂਨੈਸਕੋ ਨੇ ਮਾਨਤਾ ਦਿੱਤੀ।',
        'ਰਾਵਣਹੱਥਾ ਪਾਬੂਜੀ ਦੀ ਫੜ ਵੇਲੇ ਵਜਾਇਆ ਜਾਂਦਾ ਹੈ।',
        'ਅਲਗੋਜ਼ਾ ਰਾਜਸਥਾਨ ਦਾ ਰਾਜ ਸਾਜ਼ ਹੈ।',
      ],
      en: [
        'Pushkar Fair (Ajmer) takes place on Kartik Purnima (world famous camel fair).',
        'Ghoomar is the official state dance of Rajasthan, originating from Bhil traditions.',
        'Kalbelia dance was inscribed on UNESCO Representative List in 2010 (Gulabo Sapera).',
        'Ravanahatha is an ancient stringed instrument crafted from coconut shell, used for Pabuji Phad.',
        'Algoza (paired flutes) is the official state musical instrument of Rajasthan.',
        'Beneshwar Fair (Dungarpur) is revered as the "Kumbh of Tribals".',
      ],
    },
    flashcards: [
      {
        id: 'fc-raj-cult-1',
        q: { hi: 'राजस्थान के किस लोक नृत्य को 2010 में यूनेस्को अमूर्त सांस्कृतिक धरोहर सूची में शामिल किया गया?', pa: '2010 ਵਿੱਚ ਕਿਸ ਰਾਜਸਥਾਨੀ ਨਾਚ ਨੂੰ ਯੂਨੈਸਕੋ ਵਿਰਾਸਤ ਐਲਾਨਿਆ ਗਿਆ?', en: 'Which Rajasthani folk dance was inscribed on UNESCO Intangible Heritage list in 2010?' },
        a: { hi: 'कालबेलिया नृत्य (गुलाबो सपेरा)', pa: 'ਕਾਲਬੇਲੀਆ ਨਾਚ', en: 'Kalbelia Dance (popularized by Gulabo Sapera)' },
        difficulty: 'easy',
      },
      {
        id: 'fc-raj-cult-2',
        q: { hi: 'पुष्कर मेला किस माह की पूर्णिमा को आयोजित किया जाता है?', pa: 'ਪੁਸ਼ਕਰ ਮੇਲਾ ਕਿਸ ਮਹੀਨੇ ਲੱਗਦਾ ਹੈ?', en: 'Pushkar Fair is held on the full moon of which Hindu month?' },
        a: { hi: 'कार्तिक पूर्णिमा (अजमेर)', pa: 'ਕਾਰਤਿਕ ਪੂਰਨਮਾਸ਼ੀ', en: 'Kartik Purnima (Ajmer)' },
        difficulty: 'easy',
      },
      {
        id: 'fc-raj-cult-3',
        q: { hi: 'पाबूजी की फड़ बांचते समय भोपों द्वारा कौन सा वाद्य यंत्र बजाया जाता है?', pa: 'ਪਾਬੂਜੀ ਦੀ ਫੜ ਵੇਲੇ ਕਿਹੜਾ ਸਾਜ਼ ਵਜਾਇਆ ਜਾਂਦਾ ਹੈ?', en: 'Which instrument is played by priests while narrating the Phad of Pabuji?' },
        a: { hi: 'रावणहत्था (तत वाद्य)', pa: 'ਰਾਵਣਹੱਥਾ', en: 'Ravanahatha (bowed string instrument)' },
        difficulty: 'medium',
      },
      {
        id: 'fc-raj-cult-4',
        q: { hi: 'राजस्थान का आधिकारिक राज्य वाद्य यंत्र कौन सा है?', pa: 'ਰਾਜਸਥਾਨ ਦਾ ਰਾਜ ਸਾਜ਼ ਕਿਹੜਾ ਹੈ?', en: 'What is the official state musical instrument of Rajasthan?' },
        a: { hi: 'अलगोजा (सुषिर वाद्य - दोहरी बांसुरी)', pa: 'ਅਲਗੋਜ਼ਾ (ਡਬਲ ਬੰਸਰੀ)', en: 'Algoza (double fipple flute)' },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Rajasthan Art & Culture — Fairs, Folk Dances & Music for REET',
        channel: 'Sankalp Classes Barmer',
        youtubeId: 'RajCultureFairs101',
        language: 'hi',
        duration: '45 min',
        tags: ['REET', 'Rajasthan Culture', 'Ghoomar', 'Kalbelia'],
      },
    ],
    bookRefs: [
      {
        title: 'Rajasthan Lok Sanskriti Evam Kala',
        author: 'Dr. Jai Singh Neeraj',
        chapters: 'Fairs, Dances, Folk Lore and Musical Instruments',
        type: 'standard',
      },
      {
        title: 'RBSE Class 10 — Rajasthan History and Culture',
        author: 'RBSE',
        chapters: 'Chapter 2 & 3: Fairs, Festivals & Performing Arts',
        type: 'state-board',
      },
    ],
    documents: [
      {
        title: 'RBSE Class 10 Folk Arts and Culture PDF',
        url: 'https://rajeduboard.rajasthan.gov.in',
        language: 'hi',
        type: 'textbook',
      },
    ],
  },
  'reet-cdp-theories': {
    id: 'reet-cdp-theories',
    topicId: 'reet-cdp-theories',
    subjectId: 'pedagogy',
    category: 'pedagogy',
    title: {
      hi: 'बाल विकास एवं शिक्षाशास्त्र: पियाजे, वाइगोत्स्की, कोहलबर्ग, गार्डनर व RTE 2009',
      pa: 'ਬਾਲ ਵਿਕਾਸ ਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ: ਪਿਆਜੇ, ਵਾਈਗੋਤਸਕੀ, ਕੋਹਲਬਰਗ, ਗਾਰਡਨਰ ਤੇ RTE 2009',
      en: 'Child Development & Pedagogy for REET: Key Theories & RTE 2009',
    },
    examRelevance: 'REET Level 1 & 2 (Compulsory 30 Qs), HTET (30 Qs), CTET Paper 1 & 2 (30 Qs), PSTET/ETT',
    estimatedTime: '35 min',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 शिक्षक भर्ती पात्रता परीक्षा हेतु बाल विकास (CDP Master Module)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              रीट (REET) और एचटैट (HTET) में 30 अंकों का बाल विकास एवं शिक्षण विधियों का खंड अनिवार्य है। इसमें पियाजे, वाइगोत्स्की, कोहलबर्ग, हॉवर्ड गार्डनर, ब्लूम टैक्सोनॉमी और शिक्षा का अधिकार अधिनियम (RTE 2009) से सर्वाधिक प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. जीन पियाजे का संज्ञानात्मक विकास (Piaget's 4 Stages)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm text-slate-300">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">1. संवेदी-गामक अवस्था (0 - 2 वर्ष)</span>
                  <p class="text-slate-300">• ज्ञानेंद्रियों व शारीरिक गतियों द्वारा अधिगम।</p>
                  <p class="text-teal-300 font-semibold">• <strong>वस्तु स्थायित्व (Object Permanence):</strong> वस्तु सामने न होने पर भी उसके अस्तित्व को समझना।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">2. पूर्व-संक्रियात्मक अवस्था (2 - 7 वर्ष)</span>
                  <p class="text-slate-300">• <strong>जीववाद (Animism):</strong> निर्जीव गुड़िया/खिलौनों को जीवित मानना।</p>
                  <p class="text-slate-300">• <strong>आत्मकेंद्रित व्यवहार (Egocentrism):</strong> केवल अपने दृष्टिकोण से सोचना।</p>
                  <p class="text-rose-300 font-semibold">• अनुत्क्रमणीयता (Irreversibility): पलटावी चिंतन का अभाव (उदा. 2+3=5 लेकिन 5-3=2 न समझना)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-cyan-400 font-bold block mb-1">3. मूर्त संक्रियात्मक अवस्था (7 - 11 वर्ष)</span>
                  <p class="text-teal-300 font-semibold">• <strong>संरक्षण (Conservation):</strong> आकृति बदलने पर मात्रा समान रहने की समझ (जल/बर्तन प्रयोग)।</p>
                  <p class="text-slate-300">• वर्गीकरण (Classification) एवं क्रमबद्धता (Seriation) की क्षमता।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-purple-400 font-bold block mb-1">4. औपचारिक/अमूर्त संक्रियात्मक (11 वर्ष+)</span>
                  <p class="text-slate-300">• अमूर्त चिंतन (Abstract Reasoning)।</p>
                  <p class="text-teal-300 font-semibold">• परिकल्पनात्मक निगमनात्मक तर्कणा (Hypothetico-Deductive Reasoning)।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. लेव वाइगोत्स्की एवं लॉरेंस कोहलबर्ग</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm text-slate-300">
              <p>• <strong>लेव वाइगोत्स्की (सामाजिक-सांस्कृतिक सिद्धांत):</strong>
                <br/>1. <strong>ZPD (Zone of Proximal Development - समीपस्थ विकास का क्षेत्र):</strong> बालक द्वारा स्वयं किए जा सकने वाले कार्य और किसी कुशल व्यक्ति की मदद से किए जाने वाले कार्य के बीच का अंतर।
                <br/>2. <strong>पाड़ / ढांचा (Scaffolding):</strong> अधिगम के दौरान बड़ों/शिक्षक द्वारा दी जाने वाली <em>अस्थायी सहायता (Temporary Support)</em>।
                <br/>3. <strong>MKO (More Knowledgeable Other):</strong> शिक्षक, माता-पिता, साथी जो अधिक जानते हैं।
                <br/>4. <strong>निजी वार्ता (Private Speech):</strong> आत्म-नियमन हेतु स्वयं से बातचीत करना।
              </p>
              <p>• <strong>लॉरेंस कोहलबर्ग (नैतिक विकास सिद्धांत):</strong>
                <br/>— 3 स्तर व 6 अवस्थाएं (हाइन्ज दुविधा / Heinz Dilemma पर आधारित):
                <br/>1. <em>पूर्व-पारंपरिक (Pre-conventional):</em> दंड एवं आज्ञापालन, यांत्रिक सापेक्षिक (जैसे को तैसा)।
                <br/>2. <em>पारंपरिक (Conventional):</em> अच्छा लड़का/अच्छी लड़की उन्मुखीकरण, कानून एवं व्यवस्था उन्मुखीकरण।
                <br/>3. <em>उत्तर-पारंपरिक (Post-conventional):</em> सामाजिक अनुबंध, सार्वभौमिक नैतिक सिद्धांत।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. हॉवर्ड गार्डनर एवं ब्लूम का संशोधित वर्गीकरण</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>हॉवर्ड गार्डनर का बहुबुद्धि सिद्धांत (Multiple Intelligences):</strong> बुद्धि एक कारक न होकर 8 प्रकार की होती है —
                <br/>1. भाषाई (Linguistic) 2. तार्किक-गणितीय (Logical-Mathematical) 3. स्थानिक (Spatial) 4. शारीरिक-गतिक (Bodily-Kinesthetic) 5. सांगीतिक (Musical) 6. अंतर्वैयक्तिक (Interpersonal - दूसरों को समझना) 7. अंतःवैयक्तिक (Intrapersonal - स्वयं को समझना) 8. प्रकृतिवादी (Naturalistic)।
              </p>
              <p>• <strong>ब्लूम की संशोधित टैक्सोनॉमी (Anderson & Krathwohl 2001):</strong>
                <br/>संज्ञानात्मक क्षेत्र के 6 स्तर (निम्न से उच्च क्रम):
                <br/>1. <strong>याद रखना (Remembering)</strong> → 2. <strong>समझना (Understanding)</strong> → 3. <strong>लागू करना (Applying)</strong> → 4. <strong>विश्लेषण (Analyzing)</strong> → 5. <strong>मूल्यांकन (Evaluating)</strong> → 6. <strong>सृजन (Creating - सर्वोच्च स्तर)</strong>।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. समावेशी शिक्षा एवं RTE अधिनियम 2009</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>RTE Act 2009 (लागू: 1 अप्रैल 2010):</strong>
                <br/>— <strong>आयु 6 से 14 वर्ष</strong> के सभी बच्चों को निःशुल्क एवं अनिवार्य प्रारंभिक शिक्षा का मौलिक अधिकार (अनुच्छेद 21A, 86वां संविधान संशोधन 2002)। (दिव्यांग बच्चों हेतु 6 से 18 वर्ष)।
                <br/>— <strong>धारा 12(1)(c):</strong> निजी गैर-सहायता प्राप्त विद्यालयों में <strong>25% सीटें</strong> दुर्बल व वंचित वर्ग के बच्चों हेतु आरक्षित।
                <br/>— <strong>छात्र-शिक्षक अनुपात (PTR):</strong> प्राथमिक स्तर (1-5) पर 30:1, उच्च प्राथमिक (6-8) पर 35:1।
                <br/>— किसी भी बच्चे को शारीरिक दंड या मानसिक प्रताड़ना नहीं दी जा सकती (धारा 17)।
              </p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਬਾਲ ਵਿਕਾਸ ਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ (CDP for REET/HTET)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪਿਆਜੇ ਦੇ 4 ਪੜਾਅ, ਵਾਈਗੋਤਸਕੀ (ZPD ਤੇ ਸਕੈਫੋਲਡਿੰਗ), ਕੋਹਲਬਰਗ ਦੇ ਨੈਤਿਕ ਪੜਾਅ, ਗਾਰਡਨਰ ਦੀ ਬਹੁ-ਬੁੱਧੀ ਥਿਊਰੀ, ਬਲੂਮ ਟੈਕਸਾਨੋਮੀ ਅਤੇ RTE 2009।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਪਿਆਜੇ ਦੇ 4 ਪੜਾਅ:</strong> ਸੰਵੇਦੀ (0-2 ਸਾਲ, ਵਸਤੂ ਸਥਿਰਤਾ), ਪੂਰਵ-ਸੰਕ੍ਰਿਆਤਮਕ (2-7 ਸਾਲ, ਜੀਵਵਾਦ), ਮੂਰਤ ਸੰਕ੍ਰਿਆਤਮਕ (7-11 ਸਾਲ, ਸੰਰਖਿਅਣ), ਅਮੂਰਤ ਸੰਕ੍ਰਿਆਤਮਕ (11+ ਸਾਲ)।</p>
            <p>• <strong>ਵਾਈਗੋਤਸਕੀ:</strong> ZPD (ਸਮੀਪਸਥ ਵਿਕਾਸ ਦਾ ਖੇਤਰ) ਅਤੇ ਸਕੈਫੋਲਡਿੰਗ (ਆਰਜ਼ੀ ਸਹਾਇਤਾ)।</p>
            <p>• <strong>ਕੋਹਲਬਰਗ:</strong> ਨੈਤਿਕ ਵਿਕਾਸ ਦੇ 3 ਪੱਧਰ ਅਤੇ 6 ਪੜਾਅ (ਹਾਈਂਜ ਦੁਵਿਧਾ)।</p>
            <p>• <strong>ਹਾਵਰਡ ਗਾਰਡਨਰ:</strong> 8 ਪ੍ਰਕਾਰ ਦੀ ਬੁੱਧੀ।</p>
            <p>• <strong>ਬਲੂਮ ਟੈਕਸਾਨੋਮੀ:</strong> ਯਾਦ ਰੱਖਣਾ → ਸਮਝਣਾ → ਲਾਗੂ ਕਰਨਾ → ਵਿਸ਼ਲੇਸ਼ਣ → ਮੁਲਾਂਕਣ → ਸਿਰਜਣਾ (Creating)।</p>
            <p>• <strong>RTE 2009:</strong> 6-14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਮੁਫਤ ਤੇ ਲਾਜ਼ਮੀ ਸਿੱਖਿਆ; ਪ੍ਰਾਈਵੇਟ ਸਕੂਲਾਂ ਵਿੱਚ 25% ਸੀਟਾਂ ਰਾਖਵੀਆਂ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Child Development & Pedagogy (CDP) for REET/HTET</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Foundational psychological theories and policy frameworks covering Piaget, Vygotsky, Kohlberg, Howard Gardner, Bloom's Revised Taxonomy, and the RTE Act 2009.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Piaget's 4 Stages:</strong> Sensorimotor (0–2 yrs, Object Permanence), Preoperational (2–7 yrs, Animism & Egocentrism), Concrete Operational (7–11 yrs, Conservation & Reversibility), Formal Operational (11+ yrs, Abstract & Hypothetico-Deductive Reasoning).</p>
            <p>• <strong>Vygotsky's Socio-Cultural Theory:</strong> Zone of Proximal Development (ZPD), Scaffolding (temporary structured guidance by MKO), and Private Speech.</p>
            <p>• <strong>Kohlberg's Moral Development:</strong> 3 levels (Pre-conventional, Conventional, Post-conventional) across 6 stages based on the Heinz Dilemma.</p>
            <p>• <strong>Howard Gardner (Multiple Intelligences):</strong> 8 distinct intelligences (Linguistic, Logical-Math, Spatial, Kinesthetic, Musical, Interpersonal, Intrapersonal, Naturalistic).</p>
            <p>• <strong>Bloom's Revised Taxonomy:</strong> Remember → Understand → Apply → Analyze → Evaluate → Create.</p>
            <p>• <strong>RTE Act 2009:</strong> Free & compulsory education for ages 6–14 (Article 21A), 25% quota in private unaided schools for disadvantaged groups, PTR of 30:1 for primary.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'पियाजे ने संज्ञानात्मक विकास की 4 अवस्थाएं दीं (संवेदी, पूर्व, मूर्त, औपचारिक)। वाइगोत्स्की ने ZPD व पाड़ (Scaffolding) की संकल्पना दी। कोहलबर्ग ने नैतिक विकास के 3 स्तर बताए। हॉवर्ड गार्डनर ने 8 प्रकार की बहुबुद्धि प्रतिपादित की। ब्लूम के संशोधित वर्गीकरण का सर्वोच्च स्तर "सृजन" (Creating) है। RTE 2009 के तहत 6-14 वर्ष के बच्चों हेतु मुफ्त शिक्षा व 25% निजी आरक्षण अनिवार्य है।',
      pa: 'ਪਿਆਜੇ ਨੇ 4 ਪੜਾਅ ਦਿੱਤੇ। ਵਾਈਗੋਤਸਕੀ ਨੇ ZPD ਤੇ ਸਕੈਫੋਲਡਿੰਗ ਦਿੱਤੀ। ਕੋਹਲਬਰਗ ਨੇ ਨੈਤਿਕਤਾ ਦੇ 3 ਪੱਧਰ ਦੱਸੇ। ਗਾਰਡਨਰ ਨੇ 8 ਬੁੱਧੀਆਂ ਦੱਸੀਆਂ। ਬਲੂਮ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਪੱਧਰ ਸਿਰਜਣਾ (Creating) ਹੈ। RTE 2009 ਅਨੁਸਾਰ 6-14 ਸਾਲ ਮੁਫਤ ਸਿੱਖਿਆ ਅਤੇ 25% ਰਾਖਵਾਂਕਰਨ ਹੈ।',
      en: 'Piaget formulated 4 cognitive stages. Vygotsky introduced ZPD and Scaffolding. Kohlberg defined 3 levels of moral reasoning. Gardner proposed 8 Multiple Intelligences. Bloom\'s revised peak is "Creating". RTE 2009 guarantees free education for ages 6–14 with 25% private school reservation.',
    },
    keyNotes: {
      hi: [
        'जीन पियाजे: वस्तु स्थायित्व (0-2 वर्ष), संरक्षण व पलटावी गुण (7-11 वर्ष)।',
        'वाइगोत्स्की: ZPD (संभावित व वास्तविक विकास का अंतर) एवं पाड़ / Scaffolding (अस्थायी सहयोग)।',
        'कोहलबर्ग: 3 स्तर (पूर्व-पारंपरिक, पारंपरिक, उत्तर-पारंपरिक) व 6 अवस्थाएं (हाइन्ज दुविधा)।',
        'हॉवर्ड गार्डनर: 8 प्रकार की बुद्धि (Multiple Intelligences theory)।',
        'ब्लूम का संशोधित संज्ञानात्मक क्षेत्र: याद करना → समझना → लागू करना → विश्लेषण → मूल्यांकन → सृजन (Create)।',
        'RTE Act 2009: 6 से 14 वर्ष हेतु निःशुल्क शिक्षा, निजी स्कूलों में 25% आरक्षण (धारा 12(1)(c)), PTR 30:1।',
      ],
      pa: [
        'ਪਿਆਜੇ: ਵਸਤੂ ਸਥਿਰਤਾ (0-2 ਸਾਲ), ਸੰਰਖਿਅਣ (7-11 ਸਾਲ)।',
        'ਵਾਈਗੋਤਸਕੀ: ZPD ਅਤੇ ਸਕੈਫੋਲਡਿੰਗ (Scaffolding)।',
        'ਕੋਹਲਬਰਗ: 3 ਪੱਧਰ ਤੇ 6 ਪੜਾਅ।',
        'ਗਾਰਡਨਰ: 8 ਪ੍ਰਕਾਰ ਦੀ ਬੁੱਧੀ।',
        'ਬਲੂਮ: ਸਭ ਤੋਂ ਉੱਚਾ ਪੱਧਰ Creating (ਸਿਰਜਣਾ)।',
        'RTE 2009: 6-14 ਸਾਲ ਮੁਫਤ ਸਿੱਖਿਆ, 25% ਪ੍ਰਾਈਵੇਟ ਸੀਟਾਂ।',
      ],
      en: [
        'Piaget: Object permanence (0–2 yrs), Conservation and reversibility (7–11 yrs).',
        'Vygotsky: ZPD (Zone of Proximal Development) and Scaffolding (temporary support).',
        'Kohlberg: 3 levels and 6 stages of moral reasoning based on Heinz Dilemma.',
        'Howard Gardner: 8 Multiple Intelligences model.',
        'Bloom\'s Revised Taxonomy: Remember → Understand → Apply → Analyze → Evaluate → Create.',
        'RTE Act 2009: Free & compulsory education (ages 6–14), 25% private school quota, 30:1 PTR.',
      ],
    },
    flashcards: [
      {
        id: 'fc-cdp-1',
        q: { hi: 'पियाजे के अनुसार "वस्तु स्थायित्व" (Object Permanence) किस अवस्था में विकसित होता है?', pa: 'ਪਿਆਜੇ ਅਨੁਸਾਰ "ਵਸਤੂ ਸਥਿਰਤਾ" ਕਿਸ ਪੜਾਅ ਵਿੱਚ ਵਿਕਸਿਤ ਹੁੰਦੀ ਹੈ?', en: 'According to Piaget, in which stage does "Object Permanence" develop?' },
        a: { hi: 'संवेदी-गामक / संवेदी-पेशीय अवस्था (0 - 2 वर्ष)', pa: 'ਸੰਵੇਦੀ-ਪੇਸ਼ੀ ਪੜਾਅ (0 - 2 ਸਾਲ)', en: 'Sensorimotor Stage (0–2 years)' },
        difficulty: 'easy',
      },
      {
        id: 'fc-cdp-2',
        q: { hi: 'वाइगोत्स्की के सिद्धांत में "पाड़ / ढांचा" (Scaffolding) का क्या अर्थ है?', pa: 'ਵਾਈਗੋਤਸਕੀ ਦੇ ਸਿਧਾਂਤ ਵਿੱਚ ਸਕੈਫੋਲਡਿੰਗ ਦਾ ਕੀ ਅਰਥ ਹੈ?', en: 'What does "Scaffolding" mean in Vygotsky\'s theory?' },
        a: { hi: 'अधिगम में बड़ों या कुशल साथियों द्वारा दी जाने वाली अस्थायी सहायता (Temporary Support)', pa: 'ਸਿੱਖਣ ਵੇਲੇ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਆਰਜ਼ੀ ਸਹਾਇਤਾ', en: 'Temporary support provided by adults or more skilled peers during learning' },
        difficulty: 'medium',
      },
      {
        id: 'fc-cdp-3',
        q: { hi: 'ब्लूम के संशोधित वर्गीकरण (Anderson & Krathwohl 2001) का सर्वोच्च संज्ञानात्मक स्तर कौन सा है?', pa: 'ਬਲੂਮ ਦੇ ਸੋਧੇ ਵਰਗੀਕਰਨ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਪੱਧਰ ਕਿਹੜਾ ਹੈ?', en: 'Which is the highest cognitive level in Bloom\'s Revised Taxonomy?' },
        a: { hi: 'सृजन करना (Creating / Creation)', pa: 'ਸਿਰਜਣਾ (Creating)', en: 'Creating (Synthesis/Creation)' },
        difficulty: 'medium',
      },
      {
        id: 'fc-cdp-4',
        q: { hi: 'RTE Act 2009 के तहत निजी गैर-अनुदानित स्कूलों में वंचित वर्ग के बच्चों के लिए कितने प्रतिशत आरक्षण अनिवार्य है?', pa: 'RTE 2009 ਅਧੀਨ ਪ੍ਰਾਈਵੇਟ ਸਕੂਲਾਂ ਵਿੱਚ ਕਿੰਨੇ ਫੀਸਦੀ ਸੀਟਾਂ ਰਾਖਵੀਆਂ ਹਨ?', en: 'What percentage of seats are reserved for disadvantaged children in private schools under RTE 2009?' },
        a: { hi: '25% सीटें (धारा 12(1)(c) के तहत)', pa: '25% ਸੀਟਾਂ', en: '25% seats (under Section 12(1)(c))' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Child Development & Pedagogy Complete Master Revision for REET/CTET',
        channel: 'Lets LEARN',
        youtubeId: 'CDPMasterREET101',
        language: 'hi',
        duration: '1:15:00',
        tags: ['REET', 'CDP', 'Piaget', 'Vygotsky', 'RTE 2009'],
      },
    ],
    bookRefs: [
      {
        title: 'Child Development and Pedagogy',
        author: 'Himanshi Singh',
        chapters: 'Cognitive Theories, Moral Development, Inclusive Education',
        type: 'standard',
      },
      {
        title: 'Advanced Educational Psychology',
        author: 'S.K. Mangal',
        chapters: 'Theories of Intelligence and Constructivism',
        type: 'standard',
      },
    ],
    documents: [
      {
        title: 'Right to Education Act 2009 — Official Gazette Notification',
        url: 'https://mhrd.gov.in/rte',
        language: 'hi',
        type: 'official',
      },
    ],
  },
  'haryana-gk-htet': {
    id: 'haryana-gk-htet',
    topicId: 'haryana-gk-htet',
    subjectId: 'social-science',
    category: 'general',
    title: {
      hi: 'हरियाणा सामान्य ज्ञान: गठन, इतिहास, जिले, प्रतीक एवं अर्थव्यवस्था (HTET/HSSC)',
      pa: 'ਹਰਿਆਣਾ ਜਨਰਲ ਨਾਲੇਜ: ਗਠਨ, ਇਤਿਹਾਸ, ਜ਼ਿਲ੍ਹੇ ਅਤੇ ਪ੍ਰਤੀਕ (HTET/HSSC)',
      en: 'Haryana General Knowledge: Formation, History, Districts & Symbols (for HTET)',
    },
    examRelevance: 'HTET Level 1, 2 & 3 (10 Qs Haryana GK), HSSC CET (25 Qs), Haryana Police Constable & SI, Patwari',
    estimatedTime: '30 min',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 हरियाणा प्रतियोगी परीक्षाओं हेतु सामान्य ज्ञान (HTET / HSSC)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              एचटैट (HTET) और हरियाणा कर्मचारी चयन आयोग (HSSC) की परीक्षाओं में हरियाणा के गठन, ऐतिहासिक स्थलों (कुरुक्षेत्र, पानीपत), राज्य प्रतीकों और आर्थिक उपलब्धियों से संबंधित प्रश्न अनिवार्य रूप से पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. हरियाणा राज्य का गठन एवं प्रशासनिक ढांचा</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>गठन की तिथि:</strong> <strong>1 नवंबर 1966</strong> को जे.सी. शाह आयोग (Shah Commission) की सिफारिश पर 18वें संविधान संशोधन द्वारा पंजाब से अलग कर भारत का <strong>17वां राज्य</strong> बनाया गया।</p>
              <p>• <strong>राजधानी:</strong> <strong>चंडीगढ़</strong> (पंजाब और हरियाणा की संयुक्त राजधानी तथा केंद्र शासित प्रदेश)।</p>
              <p>• <strong>जिले:</strong> गठन के समय 7 जिले थे (घर जेके में - गुड़गांव, हिसार, अंबाला, रोहतक, जींद, करनाल, महेंद्रगढ़)। वर्तमान में कुल <strong>22 जिले</strong> (नवीनतम जिला: चरखी दादरी) और 6 प्रशासनिक मंडल हैं।</p>
              <p>• <strong>प्रथम मुख्यमंत्री:</strong> <strong>पंडित भगवत दयाल शर्मा</strong> (बेरी, झज्जर से)। प्रथम राज्यपाल: <strong>श्री धर्मवीर</strong>। सबसे लंबे समय तक सीएम: भजन लाल (लगातार: भूपेंद्र सिंह हुड्डा/बंसीलाल)।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ऐतिहासिक स्थल एवं महत्वपूर्ण लड़ाइयां</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm text-slate-300">
              <p>• <strong>कुरुक्षेत्र (धर्मक्षेत्र):</strong>
                <br/>— महाभारत का 18 दिवसीय महायुद्ध कुरुक्षेत्र की भूमि पर लड़ा गया।
                <br/>— ज्योतिसर में भगवान श्रीकृष्ण ने अर्जुन को <strong>श्रीमद्भगवद्गीता का अमर उपदेश</strong> वट वृक्ष के नीचे दिया।
                <br/>— <strong>ब्रह्म सरोवर:</strong> राजा कुरु द्वारा निर्मित विशाल सरोवर जिसे अबुल फजल ने 'लघु रूप सागर' कहा।
              </p>
              <p>• <strong>पानीपत (बुनकरों का शहर) की 3 ऐतिहासिक लड़ाइयां:</strong>
                <br/>1. <em>प्रथम युद्ध (21 अप्रैल 1526):</em> बाबर ने इब्राहिम लोदी को हराया (मुग़ल साम्राज्य की स्थापना, तोपखाने व तुलुगमा पद्धति का प्रयोग)।
                <br/>2. <em>द्वितीय युद्ध (5 नवंबर 1556):</em> अकबर (बैरम खां) ने हेमु (हेमचंद्र विक्रमादित्य) को पराजित किया।
                <br/>3. <em>तृतीय युद्ध (14 जनवरी 1761):</em> अहमद शाह अब्दाली (दुर्रानी) ने मराठों (सदाशिव राव भाऊ) को हराया।
              </p>
              <p>• <strong>सूरजकुंड (फरीदाबाद):</strong> तोमर वंश के राजा सूरजपाल द्वारा निर्मित; प्रतिवर्ष 1 से 15/16 फरवरी को <em>'अंतर्राष्ट्रीय सूरजकुंड हस्तशिल्प मेला'</em> आयोजित होता है।</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. हरियाणा के राज्य प्रतीक (State Symbols)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-amber-400 font-bold block mb-1">जीव-जंतु प्रतीक</span>
                <p class="text-slate-300">• <strong>राज्य पशु:</strong> <strong>काला हिरण (Blackbuck / कृष्णमृग)</strong>।</p>
                <p class="text-slate-300">• <strong>राज्य पक्षी:</strong> <strong>काला तीतर (Black Francolin)</strong>।</p>
              </div>
              <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                <span class="text-emerald-400 font-bold block mb-1">वनस्पति एवं खेल प्रतीक</span>
                <p class="text-slate-300">• <strong>राज्य पुष्प:</strong> <strong>कमल (Lotus / Nelumbo nucifera)</strong>।</p>
                <p class="text-slate-300">• <strong>राज्य वृक्ष:</strong> <strong>पीपल (Peepal / Ficus religiosa)</strong>।</p>
                <p class="text-slate-300">• <strong>राज्य खेल:</strong> <strong>कुश्ती (Wrestling)</strong>।</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. अर्थव्यवस्था एवं कृषि में अग्रणी स्थान</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>हरित क्रांति की जन्मस्थली:</strong> पंजाब के साथ हरियाणा 1960 के दशक में हरित क्रांति (Green Revolution) का प्रमुख केंद्र रहा; प्रति व्यक्ति खाद्यान्न एवं गेहूं उत्पादन में देश में शीर्ष राज्यों में शुमार।</p>
              <p>• <strong>दुग्ध उत्पादन:</strong> 'भारत की दूध की बाल्टी' (Milk Pail of India) कहा जाता है। विश्व प्रसिद्ध <strong>मुर्राह नस्ल की भैंस</strong> ('काला सोना' / Black Gold) हरियाणा की शान है।</p>
              <p>• <strong>राष्ट्रीय डेयरी अनुसंधान संस्थान (NDRI):</strong> करनाल में स्थित (1955 में बेंगलुरु से स्थानांतरित)। केंद्रीय भैंस अनुसंधान संस्थान (CIRB) हिसार में स्थित है।</p>
              <p>• <strong>औद्योगिक नगर:</strong> गुरुग्राम ('मिलेनियम सिटी' / साइबर हब), फरीदाबाद (ट्रैक्टर व उद्योग), पानीपत (हैंडलूम व रिफाइनरी)।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਹਰਿਆਣਾ ਜਨਰਲ ਨਾਲੇਜ (HTET/HSSC)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਹਰਿਆਣਾ ਰਾਜ ਦਾ ਗਠਨ 1 ਨਵੰਬਰ 1966 ਨੂੰ ਪੰਜਾਬ ਤੋਂ ਵੱਖ ਹੋ ਕੇ ਹੋਇਆ। ਰਾਜਧਾਨੀ ਚੰਡੀਗੜ੍ਹ ਹੈ। ਕੁੱਲ 22 ਜ਼ਿਲ੍ਹੇ ਹਨ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਪਹਿਲੇ ਮੁੱਖ ਮੰਤਰੀ:</strong> ਪੰਡਿਤ ਭਗਵਤ ਦਿਆਲ ਸ਼ਰਮਾ। ਪਹਿਲੇ ਰਾਜਪਾਲ: ਧਰਮਵੀਰ।</p>
            <p>• <strong>ਕੁਰੂਕਸ਼ੇਤਰ:</strong> ਮਹਾਭਾਰਤ ਦਾ ਯੁੱਧ ਖੇਤਰ, ਜੋਤੀਸਰ (ਗੀਤਾ ਉਪਦੇਸ਼ ਸਥਾਨ), ਬ੍ਰਹਮ ਸਰੋਵਰ।</p>
            <p>• <strong>ਪਾਣੀਪਤ ਦੀਆਂ 3 ਲੜਾਈਆਂ:</strong> 1526 (ਬਾਬਰ ਬਨਾਮ ਇਬਰਾਹਿਮ ਲੋਦੀ), 1556 (ਅਕਬਰ ਬਨਾਮ ਹੇਮੂ), 1761 (ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ ਬਨਾਮ ਮਰਾਠੇ)।</p>
            <p>• <strong>ਰਾਜ ਪ੍ਰਤੀਕ:</strong> ਰਾਜ ਪੰਛੀ = ਕਾਲਾ ਤੀਤਰ (Black Francolin), ਰਾਜ ਪਸ਼ੂ = ਕਾਲਾ ਹਿਰਨ (Blackbuck), ਰਾਜ ਫੁੱਲ = ਕਮਲ, ਰਾਜ ਰੁੱਖ = ਪਿੱਪਲ।</p>
            <p>• <strong>ਆਰਥਿਕਤਾ:</strong> ਦੁੱਧ ਅਤੇ ਅਨਾਜ ਉਤਪਾਦਨ ਵਿੱਚ ਮੋਹਰੀ; ਮੁਰਾਹ ਮੱਝ ਨੂੰ 'ਕਾਲਾ ਸੋਨਾ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ। NDRI ਕਰਨਾਲ ਵਿੱਚ ਸਥਿਤ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Haryana General Knowledge (for HTET & HSSC)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Comprehensive overview of Haryana\'s state formation on 1 November 1966, 22 districts, historical landmarks (Kurukshetra, Panipat), state symbols, and agrarian economy.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Formation:</strong> Carved out of Punjab on 1 November 1966 (17th state of India) on Shah Commission recommendations. Joint capital: Chandigarh. 22 districts.</p>
            <p>• <strong>First CM & Governor:</strong> First Chief Minister was Pt. Bhagwat Dayal Sharma; first Governor was Shri Dharma Vira.</p>
            <p>• <strong>Kurukshetra & Panipat:</strong> Kurukshetra was the battlefield of Mahabharata (Jyotisar: Gita discourse). Panipat hosted 3 watershed battles (1526, 1556, 1761).</p>
            <p>• <strong>State Symbols:</strong> State Bird = Black Francolin, State Animal = Blackbuck, State Flower = Lotus, State Tree = Peepal, State Sport = Wrestling.</p>
            <p>• <strong>Economy:</strong> Powerhouse of Green Revolution, leading per-capita producer of foodgrains and milk. Murrah buffalo breed is known as 'Black Gold'. NDRI is in Karnal.</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'हरियाणा का गठन 1 नवंबर 1966 को पंजाब से अलग होकर हुआ (राजधानी: चंडीगढ़, 22 जिले)। प्रथम मुख्यमंत्री पं. भगवत दयाल शर्मा थे। कुरुक्षेत्र महाभारत व गीता उपदेश की भूमि है तथा पानीपत में 3 ऐतिहासिक युद्ध लड़े गए। राज्य पशु काला हिरण, राज्य पक्षी काला तीतर, राज्य फूल कमल और राज्य वृक्ष पीपल है। हरियाणा दुग्ध व खाद्यान्न उत्पादन में अग्रणी है।',
      pa: 'ਹਰਿਆਣਾ 1 ਨਵੰਬਰ 1966 ਨੂੰ ਬਣਿਆ (ਰਾਜਧਾਨੀ ਚੰਡੀਗੜ੍ਹ, 22 ਜ਼ਿਲ੍ਹੇ)। ਪਹਿਲੇ ਸੀਐੱਮ ਭਗਵਤ ਦਿਆਲ ਸ਼ਰਮਾ ਸਨ। ਪਾਣੀਪਤ ਵਿੱਚ 3 ਲੜਾਈਆਂ ਹੋਈਆਂ। ਰਾਜ ਪੰਛੀ ਕਾਲਾ ਤੀਤਰ ਤੇ ਪਸ਼ੂ ਕਾਲਾ ਹਿਰਨ ਹੈ।',
      en: 'Haryana was formed on 1 November 1966 carved from Punjab with capital Chandigarh and 22 districts. Pt. Bhagwat Dayal Sharma was the first CM. Kurukshetra and Panipat are key historical hubs. State animal is Blackbuck, bird is Black Francolin, flower is Lotus, tree is Peepal.',
    },
    keyNotes: {
      hi: [
        'हरियाणा का गठन 1 नवंबर 1966 को हुआ (शाह आयोग की सिफारिश, 17वां राज्य)।',
        'राजधानी चंडीगढ़ (संयुक्त) है और राज्य में 22 जिले हैं।',
        'हरियाणा के प्रथम मुख्यमंत्री पंडित भगवत दयाल शर्मा तथा प्रथम राज्यपाल धर्मवीर थे।',
        'पानीपत की 3 लड़ाइयां: 1526 (बाबर-लोदी), 1556 (अकबर-हेमु), 1761 (अब्दाली-मराठा)।',
        'राज्य प्रतीक: राज्य पक्षी = काला तीतर, राज्य पशु = काला हिरण, राज्य फूल = कमल, राज्य वृक्ष = पीपल।',
        'मुर्राह नस्ल की भैंस को "काला सोना" कहा जाता है; राष्ट्रीय डेयरी अनुसंधान संस्थान (NDRI) करनाल में है।',
        'सूरजकुंड अंतर्राष्ट्रीय शिल्प मेला प्रतिवर्ष फरीदाबाद में आयोजित होता है।',
      ],
      pa: [
        'ਹਰਿਆਣਾ 1 ਨਵੰਬਰ 1966 ਨੂੰ 17ਵਾਂ ਰਾਜ ਬਣਿਆ।',
        'ਰਾਜਧਾਨੀ ਚੰਡੀਗੜ੍ਹ ਹੈ ਅਤੇ 22 ਜ਼ਿਲ੍ਹੇ ਹਨ।',
        'ਪਹਿਲੇ ਮੁੱਖ ਮੰਤਰੀ ਪੰਡਿਤ ਭਗਵਤ ਦਿਆਲ ਸ਼ਰਮਾ ਸਨ।',
        'ਪਾਣੀਪਤ ਦੀਆਂ ਲੜਾਈਆਂ: 1526, 1556, 1761।',
        'ਰਾਜ ਪੰਛੀ = ਕਾਲਾ ਤੀਤਰ, ਰਾਜ ਪਸ਼ੂ = ਕਾਲਾ ਹਿਰਨ, ਰਾਜ ਫੁੱਲ = ਕਮਲ, ਰਾਜ ਰੁੱਖ = ਪਿੱਪਲ।',
        'NDRI (ਡੇਅਰੀ ਰਿਸਰਚ ਇੰਸਟੀਚਿਊਟ) ਕਰਨਾਲ ਵਿੱਚ ਹੈ।',
      ],
      en: [
        'Haryana was formed on 1 November 1966 (17th State of India on Shah Commission recommendation).',
        'Joint capital is Chandigarh and there are 22 districts.',
        'First Chief Minister was Pt. Bhagwat Dayal Sharma; first Governor was Shri Dharma Vira.',
        'Panipat battles fought in 1526 (Babur-Lodi), 1556 (Akbar-Hemu), 1761 (Abdali-Maratha).',
        'State Symbols: Bird = Black Francolin, Animal = Blackbuck, Flower = Lotus, Tree = Peepal.',
        'Murrah buffalo breed termed "Black Gold"; National Dairy Research Institute (NDRI) is in Karnal.',
        'Surajkund International Crafts Mela is held annually in Faridabad.',
      ],
    },
    flashcards: [
      {
        id: 'fc-har-1',
        q: { hi: 'हरियाणा राज्य का गठन किस तिथि को हुआ था?', pa: 'ਹਰਿਆਣਾ ਰਾਜ ਦਾ ਗਠਨ ਕਦੋਂ ਹੋਇਆ ਸੀ?', en: 'On which date was Haryana formed as a separate state?' },
        a: { hi: '1 नवंबर 1966 (17वां राज्य, शाह आयोग की सिफारिश पर)', pa: '1 ਨਵੰਬਰ 1966', en: '1 November 1966 (17th state of India)' },
        difficulty: 'easy',
      },
      {
        id: 'fc-har-2',
        q: { hi: 'हरियाणा के प्रथम मुख्यमंत्री कौन थे?', pa: 'ਹਰਿਆਣਾ ਦੇ ਪਹਿਲੇ ਮੁੱਖ ਮੰਤਰੀ ਕੌਣ ਸਨ?', en: 'Who was the first Chief Minister of Haryana?' },
        a: { hi: 'पंडित भगवत दयाल शर्मा', pa: 'ਪੰਡਿਤ ਭਗਵਤ ਦਿਆਲ ਸ਼ਰਮਾ', en: 'Pandit Bhagwat Dayal Sharma' },
        difficulty: 'easy',
      },
      {
        id: 'fc-har-3',
        q: { hi: 'पानीपत की तीसरी लड़ाई (1761) किसके मध्य लड़ी गई थी?', pa: 'ਪਾਣੀਪਤ ਦੀ ਤੀਜੀ ਲੜਾਈ (1761) ਕਿਨ੍ਹਾਂ ਵਿਚਕਾਰ ਹੋਈ ਸੀ?', en: 'Between whom was the Third Battle of Panipat (1761) fought?' },
        a: { hi: 'अहमद शाह अब्दाली और मराठों (सदाशिव राव भाऊ) के बीच', pa: 'ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ ਅਤੇ ਮਰਾਠਿਆਂ ਵਿਚਕਾਰ', en: 'Ahmad Shah Abdali (Durrani) and the Marathas' },
        difficulty: 'medium',
      },
      {
        id: 'fc-har-4',
        q: { hi: 'हरियाणा का राज्य पक्षी एवं राज्य पशु कौन सा है?', pa: 'ਹਰਿਆਣਾ ਦਾ ਰਾਜ ਪੰਛੀ ਅਤੇ ਰਾਜ ਪਸ਼ੂ ਕਿਹੜਾ ਹੈ?', en: 'What are the official state bird and state animal of Haryana?' },
        a: { hi: 'राज्य पक्षी: काला तीतर (Black Francolin), राज्य पशु: काला हिरण (Blackbuck)', pa: 'ਰਾਜ ਪੰਛੀ: ਕਾਲਾ ਤੀਤਰ, ਰਾਜ ਪਸ਼ੂ: ਕਾਲਾ ਹਿਰਨ', en: 'State Bird: Black Francolin; State Animal: Blackbuck' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Haryana GK Complete Marathon for HTET & HSSC Exams',
        channel: 'Haryana Exam Result Guru',
        youtubeId: 'HaryanaGKFull101',
        language: 'hi',
        duration: '1:00:00',
        tags: ['HTET', 'Haryana GK', 'HSSC CET', 'Panipat'],
      },
    ],
    bookRefs: [
      {
        title: 'Haryana Samanya Gyan',
        author: 'Dr. Suresh Kumar',
        chapters: 'History, Formation, Districts, Culture and Economy',
        type: 'standard',
      },
      {
        title: 'Know Your State Haryana',
        author: 'Arihant Experts',
        chapters: 'All Modules',
        type: 'standard',
      },
    ],
    documents: [
      {
        title: 'BSEH HTET Official Syllabus and Guidelines',
        url: 'https://bseh.org.in',
        language: 'hi',
        type: 'syllabus',
      },
    ],
  },
};
