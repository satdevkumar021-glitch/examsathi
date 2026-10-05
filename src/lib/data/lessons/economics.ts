import { Lesson } from './types';

export const ECONOMICS_LESSONS: Record<string, Lesson> = {
  'indian-economy': {
    id: 'indian-economy',
    topicId: 'indian-economy',
    subjectId: 'social-science',
    category: 'economy',
    title: {
      hi: 'भारतीय अर्थव्यवस्था: समष्टि अर्थशास्त्र, बैंकिंग एवं आर्थिक सुधार',
      pa: 'ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ: ਸਮਸ਼ਟੀ ਅਰਥ ਸ਼ਾਸਤਰ, ਬੈਂਕਿੰਗ ਤੇ ਆਰਥਿਕ ਸੁਧਾਰ',
      en: 'Indian Economy: Macroeconomics, Banking & 1991 Reforms',
    },
    examRelevance: 'Punjab Master Cadre Economics (10-12 Qs), Punjab Clerk (4-5 Qs), Patwari (5 Qs), SSC CGL (4 Qs)',
    estimatedTime: '35 मिनट',
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 परीक्षा हेतु महत्व</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              अर्थशास्त्र खंड में राष्ट्रीय आय (GDP/GNP), 1991 के एलपीजी सुधार, नीति आयोग, आरबीआई की मौद्रिक नीति (Repo/CRR/SLR) और कृषि अर्थशास्त्र (MSP, CACP) से बार-बार सीधे प्रश्न पूछे जाते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. राष्ट्रीय आय की प्रमुख अवधारणाएं (National Income Aggregates)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                  <h4 class="text-amber-400 font-bold text-xs uppercase mb-1">सकल घरेलू उत्पाद (GDP)</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    एक वित्तीय वर्ष में देश की भौगोलिक सीमा के भीतर उत्पादित समस्त अंतिम वस्तुओं एवं सेवाओं का कुल मौद्रिक मूल्य।
                  </p>
                </div>
                <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                  <h4 class="text-emerald-400 font-bold text-xs uppercase mb-1">सकल राष्ट्रीय उत्पाद (GNP)</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    GDP + विदेशों से अर्जित शुद्ध साधन आय (NFIA)। यह देश के नागरिकों द्वारा अर्जित कुल आय है, चाहे वे देश में हों या विदेश में।
                  </p>
                </div>
                <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                  <h4 class="text-cyan-400 font-bold text-xs uppercase mb-1">शुद्ध राष्ट्रीय उत्पाद (NNP)</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    GNP - मूल्यह्रास (Depreciation)। <em>NNP at Factor Cost (साधन लागत पर NNP)</em> को ही विशुद्ध <strong>राष्ट्रीय आय (National Income)</strong> कहा जाता है।
                  </p>
                </div>
                <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
                  <h4 class="text-purple-400 font-bold text-xs uppercase mb-1">प्रति व्यक्ति आय (Per Capita Income)</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    कुल राष्ट्रीय आय ÷ देश की कुल जनसंख्या।
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. आर्थिक सुधार 1991 (LPG Reforms) व नीति आयोग</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>1991 संकट:</strong> भुगतान संतुलन (BoP) संकट के समय प्रधानमंत्री <em>पी.वी. नरसिम्हा राव</em> और वित्त मंत्री <em>डॉ. मनमोहन सिंह</em> ने नई आर्थिक नीति पेश की।</p>
              <div class="grid grid-cols-3 gap-2 text-xs text-center">
                <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                  <span class="font-bold text-amber-400 block mb-1">L - Liberalisation</span>
                  <span class="text-slate-300 text-[11px]">उदारीकरण (लाइसेंस राज की समाप्ति)</span>
                </div>
                <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                  <span class="font-bold text-emerald-400 block mb-1">P - Privatisation</span>
                  <span class="text-slate-300 text-[11px]">निजीकरण (विनिवेश, सरकारी एकाधिकार में कमी)</span>
                </div>
                <div class="bg-slate-900 p-2.5 rounded-lg border border-slate-700">
                  <span class="font-bold text-cyan-400 block mb-1">G - Globalisation</span>
                  <span class="text-slate-300 text-[11px]">वैश्वीकरण (भारतीय अर्थव्यवस्था का वैश्विक जुड़ाव)</span>
                </div>
              </div>
              <p class="pt-2 border-t border-slate-700 text-xs">
                • <strong>नीति आयोग (NITI Aayog):</strong> <strong>1 जनवरी 2015</strong> को योजना आयोग के स्थान पर स्थापित। पूरा नाम: <em>National Institution for Transforming India</em>। अध्यक्ष: प्रधानमंत्री। उपाध्यक्ष व सीईओ केंद्र द्वारा नियुक्त। सिद्धांत: 'सहकारी संघवाद' (Cooperative Federalism)।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. भारतीय रिज़र्व बैंक (RBI) एवं मौद्रिक उपकरण</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>स्थापना:</strong> <strong>1 अप्रैल 1935</strong> (हिल्टन यंग कमीशन की सिफारिश पर, RBI अधिनियम 1934)। राष्ट्रीयकरण: <strong>1 जनवरी 1949</strong>।</p>
              <p>• <strong>मौद्रिक नीति समिति (MPC):</strong> 6 सदस्य (3 RBI + 3 केंद्र सरकार द्वारा नामित)। मुद्रास्फीति का आधिकारिक लक्ष्य: <strong>4% (±2%)</strong> यानी 2% से 6%।</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-1">
                <div class="bg-slate-900/90 p-2.5 rounded-lg">
                  <span class="text-amber-300 font-bold block mb-0.5">रेपो दर (Repo Rate)</span>
                  <p class="text-slate-400">वह ब्याज दर जिस पर RBI वाणिज्यिक बैंकों को अल्पकालिक ऋण देता है। जब मुद्रास्फीति बढ़ती है, तो RBI रेपो दर बढ़ा देता है।</p>
                </div>
                <div class="bg-slate-900/90 p-2.5 rounded-lg">
                  <span class="text-emerald-300 font-bold block mb-0.5">रिवर्स रेपो दर (Reverse Repo)</span>
                  <p class="text-slate-400">वह दर जिस पर RBI बैंकों से अधिशेष नकदी जमा के रूप में स्वीकार करता है।</p>
                </div>
                <div class="bg-slate-900/90 p-2.5 rounded-lg">
                  <span class="text-cyan-300 font-bold block mb-0.5">नकद आरक्षित अनुपात (CRR)</span>
                  <p class="text-slate-400">बैंकों को अपने कुल जमा (NDTL) का एक निश्चित प्रतिशत नकद रूप में RBI के पास अनिवार्यतः रखना होता है (इस पर ब्याज नहीं मिलता)।</p>
                </div>
                <div class="bg-slate-900/90 p-2.5 rounded-lg">
                  <span class="text-purple-300 font-bold block mb-0.5">सांविधिक तरलता अनुपात (SLR)</span>
                  <p class="text-slate-400">बैंकों को अपने पास स्वर्ण, सरकारी प्रतिभूतियों या नकदी के रूप में सुरक्षित रखना आवश्यक अनुपात।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">4. कृषि अर्थशास्त्र: MSP एवं खाद्यान्न प्रबंधन</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>न्यूनतम समर्थन मूल्य (MSP):</strong> कृषि लागत एवं मूल्य आयोग (<strong>CACP</strong>) की सिफारिश पर केंद्र सरकार द्वारा कुल <strong>22 अनिवार्य फसलों</strong> (7 अनाज, 5 दालें, 7 तिलहन, 4 वाणिज्यिक) + गन्ने हेतु FRP घोषित किया जाता है।</p>
              <p>• <strong>स्वामीनाथन आयोग सिफारिश:</strong> उत्पादन लागत (C2) का कम से कम <strong>50% लाभ (C2 + 50%)</strong> प्रदान किया जाए।</p>
              <p>• <strong>भारतीय खाद्य निगम (FCI):</strong> स्थापना 1965 में खाद्य सुरक्षा एवं बफर स्टॉक संधारण हेतु हुई।</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਪ੍ਰੀਖਿਆਵਾਂ ਲਈ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਆਮਦਨ (GDP, NNP), 1991 ਦੇ ਸੁਧਾਰ, ਨੀਤੀ ਆਯੋਗ, RBI ਦੀ ਮੌਦਰਿਕ ਨੀਤੀ (ਰੈਪੋ ਰੇਟ, CRR) ਅਤੇ ਖੇਤੀਬਾੜੀ MSP ਬਾਰੇ ਪ੍ਰਸ਼ਨ ਪੁੱਛੇ ਜਾਂਦੇ ਹਨ।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਰਾਸ਼ਟਰੀ ਆਮਦਨ:</strong> NNP at Factor Cost ਨੂੰ ਦੇਸ਼ ਦੀ ਸ਼ੁੱਧ ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।</p>
            <p>• <strong>1991 ਸੁਧਾਰ:</strong> ਐਲ.ਪੀ.ਜੀ. (Liberalisation, Privatisation, Globalisation)।</p>
            <p>• <strong>ਨੀਤੀ ਆਯੋਗ:</strong> ਸਥਾਪਨਾ 1 ਜਨਵਰੀ 2015। ਚੇਅਰਪਰਸਨ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਹੁੰਦੇ ਹਨ।</p>
            <p>• <strong>ਆਰ.ਬੀ.ਆਈ. (RBI):</strong> ਸਥਾਪਨਾ 1 ਅਪ੍ਰੈਲ 1935, ਰਾਸ਼ਟਰੀਕਰਨ 1 ਜਨਵਰੀ 1949।</p>
            <p>• <strong>MSP:</strong> CACP ਦੀ ਸਿਫਾਰਸ਼ 'ਤੇ 22 ਫਸਲਾਂ ਲਈ ਐਲਾਨ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 High-Yield Macroeconomics</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers national income accounting, structural economic reforms of 1991, NITI Aayog, central banking instruments (Repo, CRR, SLR), and agricultural economics (MSP and CACP).
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>National Income:</strong> Net National Product at Factor Cost (NNP at FC) is officially defined as National Income.</p>
            <p>• <strong>1991 Reforms:</strong> LPG (Liberalisation, Privatisation, Globalisation) steered by PM P.V. Narasimha Rao & FM Dr. Manmohan Singh.</p>
            <p>• <strong>NITI Aayog:</strong> Established 1 Jan 2015 replacing Planning Commission. Chaired by the Prime Minister; fosters Cooperative Federalism.</p>
            <p>• <strong>Reserve Bank of India (RBI):</strong> Founded 1 April 1935 (Hilton Young Commission; RBI Act 1934), nationalised 1 Jan 1949. MPC consists of 6 members aiming for 4% inflation target (±2%).</p>
            <p>• <strong>MSP & CACP:</strong> Minimum Support Price is announced for 22 mandated crops based on recommendations of the Commission for Agricultural Costs and Prices (CACP).</p>
          </div>
        </div>
      `,
    },
    summary: {
      hi: 'राष्ट्रीय आय में NNP at Factor Cost वास्तविक राष्ट्रीय आय है। 1991 में LPG सुधार लागू हुए। नीति आयोग का गठन 1 जनवरी 2015 को हुआ। RBI (स्थापना 1935, राष्ट्रीयकरण 1949) रेपो रेट, CRR और SLR से मुद्रा नियंत्रण करता है। CACP की सिफारिश पर 22 फसलों का MSP घोषित होता है।',
      pa: 'NNP at FC ਨੂੰ ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਕਿਹਾ ਜਾਂਦਾ ਹੈ। 1991 ਵਿੱਚ ਐਲ.ਪੀ.ਜੀ. ਸੁਧਾਰ ਆਏ। 1 ਜਨਵਰੀ 2015 ਨੂੰ ਨੀਤੀ ਆਯੋਗ ਬਣਿਆ। ਆਰ.ਬੀ.ਆਈ. (1935) ਰੈਪੋ ਰੇਟ ਨਾਲ ਮਹਿੰਗਾਈ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ। CACP ਦੁਆਰਾ 22 ਫਸਲਾਂ ਲਈ MSP ਤੈਅ ਹੁੰਦਾ ਹੈ।',
      en: 'National Income is measured as NNP at factor cost. 1991 LPG reforms transformed the economy. NITI Aayog was formed on 1 Jan 2015. RBI (est. 1935, nationalised 1949) regulates liquidity via Repo, CRR, and SLR. CACP recommends MSP for 22 mandated crops.',
    },
    keyNotes: {
      hi: [
        '📌 NNP at Factor Cost = विशुद्ध राष्ट्रीय आय (National Income)।',
        '📌 1 जनवरी 2015: नीति आयोग (NITI Aayog) का गठन।',
        '📌 1 अप्रैल 1935: भारतीय रिज़र्व बैंक (RBI) की स्थापना।',
        '📌 1 जनवरी 1949: RBI का राष्ट्रीयकरण।',
        '📌 CACP की सिफारिश पर 22 फसलों के लिए MSP घोषित होता है।',
      ],
      pa: [
        '📌 NNP at Factor Cost = ਰਾਸ਼ਟਰੀ ਆਮਦਨ।',
        '📌 1 ਜਨਵਰੀ 2015: ਨੀਤੀ ਆਯੋਗ ਦੀ ਸਥਾਪਨਾ।',
        '📌 1 ਅਪ੍ਰੈਲ 1935: RBI ਦੀ ਸਥਾਪਨਾ।',
        '📌 CACP 22 ਫਸਲਾਂ ਲਈ MSP ਦੀ ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹੈ।',
      ],
      en: [
        '📌 NNP at Factor Cost represents the true National Income.',
        '📌 1 January 2015: Inception of NITI Aayog.',
        '📌 1 April 1935: Establishment of Reserve Bank of India.',
        '📌 1 January 1949: Nationalisation of RBI.',
        '📌 CACP recommends MSP for 22 mandated agricultural crops.',
      ],
    },
    flashcards: [
      {
        id: 'fc-eco-1',
        q: { hi: 'राष्ट्रीय आय की आधिकारिक परिभाषा क्या है?', pa: 'ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਦੀ ਪਰਿਭਾਸ਼ਾ ਕੀ ਹੈ?', en: 'What is the official statistical measure of National Income?' },
        a: { hi: 'साधन लागत पर शुद्ध राष्ट्रीय उत्पाद (NNP at Factor Cost)।', pa: 'NNP at Factor Cost।', en: 'Net National Product at Factor Cost (NNP at FC).' },
        difficulty: 'medium',
      },
      {
        id: 'fc-eco-2',
        q: { hi: 'भारत में न्यूनतम समर्थन मूल्य (MSP) की सिफारिश कौन सी संस्था करती है?', pa: 'MSP ਦੀ ਸਿਫਾਰਸ਼ ਕਿਹੜਾ ਕਮਿਸ਼ਨ ਕਰਦਾ ਹੈ?', en: 'Which body recommends the Minimum Support Price (MSP) in India?' },
        a: { hi: 'कृषि लागत एवं मूल्य आयोग (CACP)।', pa: 'ਖੇਤੀ ਲਾਗਤ ਅਤੇ ਮੁੱਲ ਆਯੋਗ (CACP)।', en: 'Commission for Agricultural Costs and Prices (CACP).' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Macroeconomics & Indian Economy Complete Revision Masterclass',
        channel: 'Economy With Dr. Arora',
        youtubeId: 'Economy1991Master',
        language: 'hi',
        views: '610K',
        duration: '1:30:00',
        tags: ['Economics', 'RBI', 'Master Cadre'],
      },
    ],
    bookRefs: [
      {
        title: 'Class 12 Macroeconomics',
        author: 'NCERT',
        chapters: 'National Income Accounting, Money and Banking',
        type: 'ncert',
      },
      {
        title: 'Indian Economy',
        author: 'Ramesh Singh',
        chapters: 'Planning, Reforms, Banking, Agriculture',
        type: 'standard',
      },
    ],
    documents: [
      {
            "title": "ERD Punjab · Master Cadre Social Science Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
            "language": "English / Punjabi",
            "type": "syllabus"
      },
      {
            "title": "NCERT Class 10 · Understanding Economic Development · English",
            "url": "https://ncert.nic.in/textbook/pdf/jess201.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "NCERT Class 10 · आर्थिक विकास की समझ · Hindi",
            "url": "https://ncert.nic.in/textbook/pdf/jhss201.pdf",
            "language": "Hindi",
            "type": "ncert"
      },
      {
            "title": "PSEB Class 10 · Arthik Vikas di Samajh · Punjabi",
            "url": "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf",
            "language": "ਪੰਜਾਬੀ",
            "type": "textbook"
      },
      {
            "title": "NIOS · Indian Economy and Sectors Module",
            "url": "https://nios.ac.in/media/documents/SecSocSciCour/English/Lesson-19.pdf",
            "language": "English",
            "type": "nios"
      }
],
    syllabusReference: {
      "title": "ERD Punjab · Master Cadre Social Science (Economics) Syllabus",
      "url": "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf"
},
  },
};
