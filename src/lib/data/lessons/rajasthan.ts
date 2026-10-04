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
  },
};
