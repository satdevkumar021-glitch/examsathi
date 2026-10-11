import { Lesson } from './types';

export const PEDAGOGY_LESSONS: Record<string, Lesson> = {
  'child-development-pedagogy': {
    id: 'child-development-pedagogy',
    topicId: 'child-development-pedagogy',
    subjectId: 'pedagogy',
    category: 'pedagogy',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      hi: 'बाल विकास एवं शिक्षाशास्त्र: पियाजे, वाइगोत्स्की, कोहलबर्ग व RTE 2009',
      pa: 'ਬਾਲ ਵਿਕਾਸ ਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ: ਪਿਆਜੇ, ਵਾਈਗੋਤਸਕੀ, ਕੋਹਲਬਰਗ ਤੇ RTE 2009',
      en: 'Child Development & Pedagogy: Piaget, Vygotsky, Kohlberg & RTE 2009',
    },
    examRelevance: 'Compulsory 30-50 Marks Section in Punjab ETT 5994, PSTET, REET (L1/L2), CTET (P1/P2) & Teaching Methodology',
    estimatedTime: '45 मिनट',
    prerequisites: {
      hi: [
        'वृद्धि (Growth) और विकास (Development) के बीच मूलभूत अंतर की समझ।',
        'बाल्यावस्था की विभिन्न विकासशील अवस्थाओं (शैशवावस्था, बाल्यावस्था, किशोरावस्था) का प्राथमिक ज्ञान।',
        'प्राथमिक विद्यालयीय शिक्षण परिवेश एवं बाल-केंद्रित शिक्षा का दृष्टिकोण।',
      ],
      pa: [
        'ਵਾਧਾ (Growth) ਅਤੇ ਵਿਕਾਸ (Development) ਵਿਚਲੇ ਮੁੱਢਲੇ ਅੰਤਰ ਦੀ ਸਮਝ।',
        'ਬਚਪਨ ਦੇ ਵੱਖ-ਵੱਖ ਵਿਕਾਸ ਪੜਾਵਾਂ (ਸ਼ਿਸ਼ੂ ਕਾਲ, ਬਾਲ ਅਵਸਥਾ, ਕਿਸ਼ੋਰ ਅਵਸਥਾ) ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ।',
        'ਪ੍ਰਾਇਮਰੀ ਸਕੂਲ ਵਾਤਾਵਰਨ ਅਤੇ ਬਾਲ-ਕੇਂਦਰਿਤ ਸਿੱਖਿਆ ਦੀ ਧਾਰਨਾ।',
      ],
      en: [
        'Distinction between quantitative physical growth and progressive qualitative development.',
        'Elementary knowledge of developmental stages (infancy, early childhood, middle childhood, adolescence).',
        'Fundamental orientation towards child-centred classroom practices.',
      ],
    },
    learningObjectives: {
      hi: [
        'जीन पियाजे की चारों संज्ञानात्मक अवस्थाओं (संवेदी-पेशीय, पूर्व-संक्रियात्मक, मूर्त, अमूर्त) और उनके संज्ञानात्मक घटकों (स्कीमा, आत्मसातीकरण, समायोजन) का विश्लेषण करना।',
        'लेव वाइगोत्स्की के सामाजिक-सांस्कृतिक सिद्धांत, समीपस्थ विकास क्षेत्र (ZPD), पाड़/मचान (Scaffolding), और निजी वार्ता (Private Speech) के शैक्षणिक उपयोग को पहचानना।',
        'लॉरेंस कोहलबर्ग के नैतिक विकास के 3 स्तरों और 6 चरणों का नैतिक दुविधाओं (Heinz Dilemma) के संदर्भ में मूल्यांकन करना।',
        'समावेशी कक्षा में विशिष्ट अधिगम अक्षमताओं (डिस्लेक्सिया, डिस्ग्राफिया, डिस्कैलकुलिया, ADHD) का सटीक निदान करना।',
        'निःशुल्क एवं अनिवार्य बाल शिक्षा का अधिकार अधिनियम (RTE Act, 2009) के वैधानिक मापदंडों (धारा 21A, PTR, EWS आरक्षण, धारा 28) को परीक्षा प्रश्नों पर लागू करना।',
      ],
      pa: [
        'ਜੀਨ ਪਿਆਜੇ ਦੀਆਂ ਚਾਰ ਸੰਗਿਆਨਾਤਮਕ ਅਵਸਥਾਵਾਂ ਅਤੇ ਸੰਕਲਪਾਂ (ਸਕੀਮਾ, ਆਤਮਸਾਤ, ਸਮਾਯੋਜਨ) ਦਾ ਡੂੰਘਾਈ ਨਾਲ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
        'ਵਾਈਗੋਤਸਕੀ ਦੇ ਸਮਾਜਿਕ-ਸੱਭਿਆਚਾਰਕ ਸਿਧਾਂਤ, ਸੰਭਾਵੀ ਵਿਕਾਸ ਖੇਤਰ (ZPD), ਸਕੈਫੋਲਡਿੰਗ (ਆਰਜ਼ੀ ਸਹਾਇਤਾ) ਅਤੇ ਨਿੱਜੀ ਗੱਲਬਾਤ ਦੀ ਸਮਝ ਬਣਾਉਣਾ।',
        'ਲੌਰੈਂਸ ਕੋਹਲਬਰਗ ਦੇ ਨੈਤਿਕ ਵਿਕਾਸ ਦੇ 3 ਪੱਧਰਾਂ ਅਤੇ 6 ਪੜਾਵਾਂ ਦਾ ਮੁਲਾਂਕਣ ਕਰਨਾ।',
        'ਸਮਾਵੇਸ਼ੀ ਜਮਾਤ ਵਿੱਚ ਸਿੱਖਣ ਅਸਮਰੱਥਾਵਾਂ (ਡਿਸਲੈਕਸੀਆ, ਡਿਸਗ੍ਰਾਫੀਆ, ਡਿਸਕੈਲਕੁਲੀਆ) ਦੀ ਪਛਾਣ ਕਰਨਾ।',
        'ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਕਾਨੂੰਨ (RTE 2009) ਦੇ ਮੁੱਖ ਨਿਯਮਾਂ (ਧਾਰਾ 21A, ਵਿਦਿਆਰਥੀ-ਅਧਿਆਪਕ ਅਨੁਪਾਤ, EWS ਕੋਟਾ) ਨੂੰ ਹੱਲ ਕਰਨਾ।',
      ],
      en: [
        'Analyze Jean Piaget’s four stages of cognitive development and core mechanisms (Schema, Assimilation, Accommodation, Equilibration).',
        'Evaluate Lev Vygotsky’s socio-cultural constructivism, Zone of Proximal Development (ZPD), scaffolding, and private speech.',
        'Classify moral reasoning across Lawrence Kohlberg’s 3 levels and 6 developmental stages using moral dilemmas.',
        'Diagnose specific learning disabilities (Dyslexia, Dysgraphia, Dyscalculia) in inclusive classroom scenarios.',
        'Apply statutory provisions of the Right to Education (RTE) Act 2009 including Article 21A mandates, PTR norms, and section restrictions.',
      ],
    },
    content: {
      hi: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 शिक्षक भर्ती पात्रता परीक्षा का मेरुदंड (Core Pillar)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              सीटेट (CTET), रीट (REET) और पंजाब ईटीटी (ETT) व मास्टर कैडर में बाल विकास एवं शिक्षण विधियों (CDP) से 30 से 50 प्रश्न अनिवार्य रूप से पूछे जाते हैं। इसमें जीन पियाजे, लेव वाइगोत्स्की, लॉरेंस कोहलबर्ग, समावेशी शिक्षा और RTE अधिनियम 2009 से सर्वाधिक प्रश्न आते हैं।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. जीन पियाजे का संज्ञानात्मक विकास सिद्धांत (Cognitive Development)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>चार प्रमुख अवस्थाएं:</strong></p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">1. संवेदी-पेशीय अवस्था (0 - 2 वर्ष)</span>
                  <p class="text-slate-300">• ज्ञानेंद्रियों द्वारा सीखना।</p>
                  <p class="text-slate-300 font-semibold text-teal-300">• वस्तु स्थायित्व (Object Permanence) का गुण विकसित होता है।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">2. पूर्व-संक्रियात्मक अवस्था (2 - 7 वर्ष)</span>
                  <p class="text-slate-300">• जीववाद (Animism) - निर्जीव को सजीव मानना।</p>
                  <p class="text-slate-300">• आत्मकेंद्रित व्यवहार (Egocentrism), अनुत्क्रमणीयता (Irreversibility - पलटावी गुण का अभाव)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-cyan-400 font-bold block mb-1">3. मूर्त संक्रियात्मक अवस्था (7 - 11 वर्ष)</span>
                  <p class="text-slate-300">• <strong>संरक्षण (Conservation)</strong> व पलटावी (Reversibility) की समझ।</p>
                  <p class="text-slate-300">• वर्गीकरण (Classification) एवं क्रमबद्धता (Seriation)। मूर्त चिंतन की शुरुआत।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-purple-400 font-bold block mb-1">4. अमूर्त / औपचारिक संक्रियात्मक (11 वर्ष+)</span>
                  <p class="text-slate-300">• अमूर्त चिंतन (Abstract thinking)।</p>
                  <p class="text-slate-300">• परिकल्पनात्मक निगमनात्मक तर्कणा (Hypothetico-Deductive Reasoning)।</p>
                </div>
              </div>
              <p class="text-xs text-slate-300 pt-2 border-t border-slate-700">
                • <strong>स्कीमा (Schema):</strong> मानसिक संरचना जिसमें सूचनाएं व्यवस्थित होती हैं।
                <br/>• <strong>आत्मसातीकरण (Assimilation):</strong> नए ज्ञान को पुरानी स्कीमा में सीधे जोड़ना बिना बदलाव के।
                <br/>• <strong>समायोजन (Accommodation):</strong> नए ज्ञान के कारण पुरानी स्कीमा में संशोधन/बदलाव करना।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. लेव वाइगोत्स्की एवं लॉरेंस कोहलबर्ग के सिद्धांत</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">लेव वाइगोत्स्की (सामाजिक-सांस्कृतिक सिद्धांत)</span>
                  <p class="text-slate-300">• बच्चा समाज व संस्कृति के साथ अंतःक्रिया (Social Interaction) से सीखता है।</p>
                  <p class="text-slate-300">• <strong>ZPD (Zone of Proximal Development):</strong> वास्तविक विकास स्तर और संभावित विकास स्तर के बीच का अंतर।</p>
                  <p class="text-slate-300">• <strong>पाड़ / मचान (Scaffolding):</strong> समस्या समाधान हेतु बड़ों/MKO द्वारा दी जाने वाली <em>अस्थायी सहायता (Temporary Support)</em>।</p>
                  <p class="text-slate-300">• <strong>निजी वार्ता (Private Speech):</strong> बच्चा अपने कार्यों को दिशा देने हेतु स्वयं से बोलकर बात करता है।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">लॉरेंस कोहलबर्ग (नैतिक विकास सिद्धांत)</span>
                  <p class="text-slate-300">• 'हाइन्ज दुविधा' (Heinz Dilemma) और नैतिक तर्कणा (Moral Reasoning) पर आधारित।</p>
                  <div class="space-y-1.5 pt-1 text-[11px] text-slate-300">
                    <p class="font-bold text-amber-300">स्तर 1: पूर्व-पारंपरिक स्तर (4-10 वर्ष)</p>
                    <p>• चरण 1: आज्ञाकारिता एवं दंड अभिविन्यास (दण्ड से बचाव)।</p>
                    <p>• चरण 2: वैयक्तिकता एवं विनिमय (जैसे को तैसा, व्यक्तिगत हित)।</p>
                    <p class="font-bold text-teal-300 pt-1">स्तर 2: पारंपरिक स्तर (10-13 वर्ष)</p>
                    <p>• चरण 3: अच्छा लड़का-अच्छी लड़की अभिविन्यास (दूसरों की प्रशंसा)।</p>
                    <p>• चरण 4: कानून एवं सामाजिक व्यवस्था बनाए रखना (नियम सर्वोपरि)।</p>
                    <p class="font-bold text-indigo-300 pt-1">स्तर 3: उत्तर-पारंपरिक स्तर (13+ वर्ष)</p>
                    <p>• चरण 5: सामाजिक अनुबंध एवं व्यक्तिगत अधिकार।</p>
                    <p>• चरण 6: सार्वभौमिक नैतिक सिद्धांत (अंतरात्मा के मूल्य)।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. समावेशी शिक्षा एवं शिक्षा का अधिकार (RTE Act, 2009)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>अधिगम अक्षमताएं (Learning Disabilities):</strong>
                <br/>1. <em>डिस्लेक्सिया (Dyslexia):</em> पठन विकार (Reading disability, 'b' और 'd' में भ्रम)।
                <br/>2. <em>डिस्ग्राफिया (Dysgraphia):</em> लेखन संबंधी विकार (Writing disability, असंगत लिखावट)।
                <br/>3. <em>डिस्कैलकुलिया (Dyscalculia):</em> गणितीय गणना विकार (Math disability)।
                <br/>4. <em>ADHD:</em> अवधान न्यूनता अतिक्रियाशीलता विकार (Attention Deficit Hyperactivity Disorder)।
              </p>
              <p>• <strong>शिक्षा का अधिकार अधिनियम (RTE Act, 2009):</strong>
                <br/>1. <strong>1 अप्रैल 2010</strong> को संपूर्ण भारत में लागू (अनुच्छेद 21A के अंतर्गत मौलिक अधिकार)।
                <br/>2. <strong>6 से 14 वर्ष</strong> के बच्चों को निःशुल्क एवं अनिवार्य शिक्षा (दिव्यांगों हेतु 6 से 18 वर्ष RPwD Act)।
                <br/>3. गैर-सहायता प्राप्त निजी स्कूलों में आर्थिक रूप से कमजोर वर्ग (EWS) हेतु <strong>25% सीटें आरक्षित</strong> (धारा 12(1)(c))।
                <br/>4. छात्र-शिक्षक अनुपात (PTR): प्राथमिक स्तर पर <strong>30 : 1</strong> तथा उच्च प्राथमिक पर <strong>35 : 1</strong>।
                <br/>5. शिक्षकों द्वारा निजी ट्यूशन (Private Tuition) लेना पूर्णतः प्रतिबंधित (धारा 28)।
                <br/>6. बालक को शारीरिक दंड अथवा मानसिक प्रताड़ना देना प्रतिबंधित (धारा 17)।
              </p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਪੰਜਾਬ ਈ.ਟੀ.ਟੀ. ਅਤੇ ਅਧਿਆਪਕ ਭਰਤੀ ਦਾ ਮੂਲ ਧੁਰਾ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਈਟੀਟੀ (ETT 5994), ਪੀਐਸਟੈੱਟ (PSTET) ਅਤੇ ਰੀਟ (REET) ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ (CDP) ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਵਿਸ਼ਾ ਹੈ। ਇਸ ਵਿੱਚੋਂ ਜੀਨ ਪਿਆਜੇ, ਵਾਈਗੋਤਸਕੀ, ਕੋਹਲਬਰਗ, ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ ਅਤੇ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਐਕਟ 2009 (RTE) ਵਿੱਚੋਂ ਸਿੱਧੇ ਸਿਧਾਂਤਕ ਅਤੇ ਵਿਵਹਾਰਕ ਪ੍ਰਸ਼ਨ ਪੁੱਛੇ ਜਾਂਦੇ ਹਨ।
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. ਜੀਨ ਪਿਆਜੇ ਦਾ ਸੰਗਿਆਨਾਤਮਕ ਵਿਕਾਸ ਸਿਧਾਂਤ (Piaget Cognitive Theory)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>ਚਾਰ ਮੁੱਖ ਵਿਕਾਸ ਅਵਸਥਾਵਾਂ:</strong></p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">1. ਸੰਵੇਦੀ-ਪੇਸ਼ੀ ਅਵਸਥਾ (0 - 2 ਸਾਲ)</span>
                  <p class="text-slate-300">• ਬੱਚਾ ਗਿਆਨ-ਇੰਦਰੀਆਂ ਅਤੇ ਗਤੀਵਿਧੀਆਂ ਰਾਹੀਂ ਸਿੱਖਦਾ ਹੈ।</p>
                  <p class="text-teal-300 font-semibold">• <strong>ਵਸਤੂ ਸਥਿਰਤਾ (Object Permanence)</strong> ਦਾ ਗੁਣ ਪੈਦਾ ਹੁੰਦਾ ਹੈ।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">2. ਪੂਰਵ-ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ (2 - 7 ਸਾਲ)</span>
                  <p class="text-slate-300">• ਜੀਵਵਾਦ (Animism) - ਬੇਜਾਨ ਵਸਤੂਆਂ ਨੂੰ ਜਿਊਂਦਾ ਸਮਝਣਾ।</p>
                  <p class="text-slate-300">• ਸਵੈ-ਕੇਂਦਰਿਤਤਾ (Egocentrism) ਅਤੇ ਉਲਟਾਉਣ ਦੀ ਅਸਮਰੱਥਾ (Irreversibility)।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-cyan-400 font-bold block mb-1">3. ਮੂਰਤ ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ (7 - 11 ਸਾਲ)</span>
                  <p class="text-slate-300">• <strong>ਸੰਭਾਲ/ਸੰਰਖਣ (Conservation)</strong> ਅਤੇ ਪਲਟਾਵੀਪਣ (Reversibility) ਦੀ ਸਮਝ।</p>
                  <p class="text-slate-300">• ਵਰਗੀਕਰਨ (Classification) ਅਤੇ ਕ੍ਰਮਬੱਧਤਾ (Seriation)। ਪ੍ਰਤੱਖ ਵਸਤਾਂ ਉੱਤੇ ਤਰਕ।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-purple-400 font-bold block mb-1">4. ਅਮੂਰਤ / ਰਸਮੀ ਸੰਕ੍ਰਿਆਤਮਕ (11 ਸਾਲ ਤੋਂ ਉੱਪਰ)</span>
                  <p class="text-slate-300">• ਅਮੂਰਤ ਚਿੰਤਨ (Abstract Thinking)।</p>
                  <p class="text-slate-300">• ਪਰਿਕਲਪਨਾਤਮਕ ਨਿਗਮਨਾਤਮਕ ਤਰਕ (Hypothetico-Deductive Reasoning)।</p>
                </div>
              </div>
              <p class="text-xs text-slate-300 pt-2 border-t border-slate-700">
                • <strong>ਸਕੀਮਾ (Schema):</strong> ਦਿਮਾਗ ਵਿੱਚ ਜਾਣਕਾਰੀ ਦਾ ਸੰਗਠਿਤ ਢਾਂਚਾ।
                <br/>• <strong>ਆਤਮਸਾਤਕਰਨ (Assimilation):</strong> ਨਵੀਂ ਜਾਣਕਾਰੀ ਨੂੰ ਪੁਰਾਣੇ ਸਕੀਮਾ ਵਿੱਚ ਬਿਨਾਂ ਬਦਲਾਅ ਸ਼ਾਮਲ ਕਰਨਾ।
                <br/>• <strong>ਸਮਾਯੋਜਨ (Accommodation):</strong> ਨਵੇਂ ਅਨੁਭਵ ਕਾਰਨ ਪੁਰਾਣੇ ਸਕੀਮਾ ਵਿੱਚ ਸੋਧ ਜਾਂ ਨਵਾਂ ਸਕੀਮਾ ਬਣਾਉਣਾ।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. ਲੇਵ ਵਾਈਗੋਤਸਕੀ ਅਤੇ ਲੌਰੈਂਸ ਕੋਹਲਬਰਗ ਦੇ ਸਿਧਾਂਤ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">ਲੇਵ ਵਾਈਗੋਤਸਕੀ (ਸਮਾਜਿਕ-ਸੱਭਿਆਚਾਰਕ ਸਿਧਾਂਤ)</span>
                  <p class="text-slate-300">• ਬੱਚੇ ਦਾ ਵਿਕਾਸ ਸਮਾਜਿਕ ਅੰਤਰ-ਕਿਰਿਆ ਅਤੇ ਭਾਸ਼ਾ ਰਾਹੀਂ ਹੁੰਦਾ ਹੈ।</p>
                  <p class="text-slate-300">• <strong>ZPD (Zone of Proximal Development):</strong> ਉਹ ਦੂਰੀ ਜੋ ਬੱਚਾ ਇਕੱਲਾ ਕਰ ਸਕਦਾ ਹੈ ਅਤੇ ਕਿਸੇ ਮਦਦ ਨਾਲ ਕਰ ਸਕਦਾ ਹੈ।</p>
                  <p class="text-slate-300">• <strong>ਸਕੈਫੋਲਡਿੰਗ (Scaffolding):</strong> ਬੱਚੇ ਨੂੰ ਕਿਸੇ ਮੁਸ਼ਕਲ ਕੰਮ ਲਈ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ <em>ਆਰਜ਼ੀ ਮਦਦ (Temporary Support)</em>।</p>
                  <p class="text-slate-300">• <strong>ਨਿੱਜੀ ਬੋਲ (Private Speech):</strong> ਬੱਚਾ ਆਪਣੇ ਕੰਮ ਨੂੰ ਨਿਰਦੇਸ਼ਿਤ ਕਰਨ ਲਈ ਉੱਚੀ ਆਵਾਜ਼ ਵਿੱਚ ਆਪਣੇ ਨਾਲ ਗੱਲਾਂ ਕਰਦਾ ਹੈ।</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">ਲੌਰੈਂਸ ਕੋਹਲਬਰਗ (ਨੈਤਿਕ ਵਿਕਾਸ ਦੇ ਪੜਾਅ)</span>
                  <p class="text-slate-300">• ਹਾਈਨਜ਼ ਦੁਵਿਧਾ (Heinz Dilemma) ਉੱਤੇ ਆਧਾਰਿਤ।</p>
                  <div class="space-y-1.5 pt-1 text-[11px] text-slate-300">
                    <p class="font-bold text-amber-300">ਪੱਧਰ 1: ਪੂਰਵ-ਰਵਾਇਤੀ (4-10 ਸਾਲ)</p>
                    <p>• ਪੜਾਅ 1: ਆਗਿਆਕਾਰੀ ਤੇ ਸਜ਼ਾ ਤੋਂ ਬਚਾਅ।</p>
                    <p>• ਪੜਾਅ 2: ਨਿੱਜੀ ਹਿੱਤ ਅਤੇ ਅਦਲਾ-ਬਦਲੀ (ਜਿਵੇਂ ਨੂੰ ਤੈਸਾ)।</p>
                    <p class="font-bold text-teal-300 pt-1">ਪੱਧਰ 2: ਰਵਾਇਤੀ ਪੱਧਰ (10-13 ਸਾਲ)</p>
                    <p>• ਪੜਾਅ 3: ਚੰਗਾ ਮੁੰਡਾ-ਚੰਗੀ ਕੁੜੀ ਅਨੁਕੂਲਣ (ਦੂਜਿਆਂ ਦੀ ਪ੍ਰਸ਼ੰਸਾ)।</p>
                    <p>• ਪੜਾਅ 4: ਕਾਨੂੰਨ ਅਤੇ ਸਮਾਜਿਕ ਵਿਵਸਥਾ ਦੀ ਪਾਲਣਾ।</p>
                    <p class="font-bold text-indigo-300 pt-1">ਪੱਧਰ 3: ਉੱਤਰ-ਰਵਾਇਤੀ (13+ ਸਾਲ)</p>
                    <p>• ਪੜਾਅ 5: ਸਮਾਜਿਕ ਸਮਝੌਤਾ ਅਤੇ ਨਿੱਜੀ ਅਧਿਕਾਰ।</p>
                    <p>• ਪੜਾਅ 6: ਵਿਸ਼ਵਵਿਆਪੀ ਨੈਤਿਕ ਸਿਧਾਂਤ (ਜ਼ਮੀਰ ਦੇ ਫ਼ੈਸਲੇ)।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ ਅਤੇ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ (RTE 2009)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>ਸਿੱਖਣ ਅਸਮਰੱਥਾਵਾਂ (Learning Disabilities):</strong>
                <br/>1. <em>ਡਿਸਲੈਕਸੀਆ (Dyslexia):</em> ਪੜ੍ਹਨ ਸੰਬੰਧੀ ਵਿਕਾਰ (ਅੱਖਰਾਂ ਨੂੰ ਉਲਟਾ ਪੜ੍ਹਨਾ, ਜਿਵੇਂ was ਨੂੰ saw)।
                <br/>2. <em>ਡਿਸਗ੍ਰਾਫੀਆ (Dysgraphia):</em> ਲਿਖਣ ਸੰਬੰਧੀ ਵਿਕਾਰ (ਅਸਪਸ਼ਟ ਲਿਖਤ ਤੇ ਕੰਬਦੇ ਹੱਥ)।
                <br/>3. <em>ਡਿਸਕੈਲਕੁਲੀਆ (Dyscalculia):</em> ਹਿਸਾਬ/ਗਣਿਤ ਸੰਬੰਧੀ ਵਿਕਾਰ।
              </p>
              <p>• <strong>ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਐਕਟ 2009 (RTE Act, 2009):</strong>
                <br/>1. <strong>1 ਅਪ੍ਰੈਲ 2010</strong> ਨੂੰ ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਲਾਗੂ ਹੋਇਆ (ਸੰਵਿਧਾਨ ਦੀ ਧਾਰਾ 21A ਅਧੀਨ ਮੌਲਿਕ ਅਧਿਕਾਰ)।
                <br/>2. <strong>6 ਤੋਂ 14 ਸਾਲ</strong> ਦੇ ਹਰ ਬੱਚੇ ਲਈ ਮੁਫ਼ਤ ਅਤੇ ਲਾਜ਼ਮੀ ਸਿੱਖਿਆ (ਦਿਵਿਆਂਗ ਬੱਚਿਆਂ ਲਈ 6 ਤੋਂ 18 ਸਾਲ)।
                <br/>3. ਪ੍ਰਾਈਵੇਟ ਸਕੂਲਾਂ ਵਿੱਚ ਗ਼ਰੀਬ ਤੇ ਕਮਜ਼ੋਰ ਵਰਗਾਂ (EWS) ਲਈ <strong>25% ਸੀਟਾਂ ਰਾਖਵੀਆਂ</strong>।
                <br/>4. ਵਿਦਿਆਰਥੀ-ਅਧਿਆਪਕ ਅਨੁਪਾਤ (PTR): ਪ੍ਰਾਇਮਰੀ ਪੱਧਰ 'ਤੇ <strong>30 : 1</strong> ਅਤੇ ਅੱਪਰ ਪ੍ਰਾਇਮਰੀ 'ਤੇ <strong>35 : 1</strong>।
                <br/>5. ਸਰਕਾਰੀ ਅਧਿਆਪਕਾਂ ਵੱਲੋਂ ਪ੍ਰਾਈਵੇਟ ਟਿਊਸ਼ਨ ਪੜ੍ਹਾਉਣ 'ਤੇ ਪੂਰਨ ਪਾਬੰਦੀ (ਧਾਰਾ 28)।
                <br/>6. ਸਰੀਰਕ ਸਜ਼ਾ ਅਤੇ ਮਾਨਸਿਕ ਤਸੀਹੇ ਦੇਣ 'ਤੇ ਪਾਬੰਦੀ (ਧਾਰਾ 17)।
              </p>
            </div>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Core Academic Foundation for Teacher Recruitment</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Child Development & Pedagogy (CDP) constitutes a decisive 30 to 50 marks block across Punjab ETT (5994), PSTET, REET (Levels 1 and 2), and CTET. High-frequency conceptual questions evaluate cognitive theories (Piaget, Vygotsky), moral reasoning (Kohlberg), inclusive education practices, learning disabilities, and statutory provisions of the RTE Act 2009.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">1. Jean Piaget's Theory of Cognitive Development</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <p>• <strong>Four Invariant Developmental Stages:</strong></p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">1. Sensorimotor Stage (0 to 2 years)</span>
                  <p class="text-slate-300">• Knowledge constructed through sensory impressions and motor activities.</p>
                  <p class="text-teal-300 font-semibold">• Emergence of <strong>Object Permanence</strong> (understanding objects exist even when unseen).</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">2. Preoperational Stage (2 to 7 years)</span>
                  <p class="text-slate-300">• Symbolic play and language development.</p>
                  <p class="text-slate-300">• Marked by <strong>Animism</strong>, <strong>Egocentrism</strong>, and <strong>Irreversibility of thought</strong>.</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-cyan-400 font-bold block mb-1">3. Concrete Operational Stage (7 to 11 years)</span>
                  <p class="text-slate-300">• Mastery of <strong>Conservation</strong> (mass, volume, number) and <strong>Reversibility</strong>.</p>
                  <p class="text-slate-300">• Ability to classify (Classification) and order items along dimensions (Seriation).</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-purple-400 font-bold block mb-1">4. Formal Operational Stage (11+ years)</span>
                  <p class="text-slate-300">• Abstract thinking and hypothetical problem solving.</p>
                  <p class="text-slate-300">• <strong>Hypothetico-Deductive Reasoning</strong> and systematic testing of variables.</p>
                </div>
              </div>
              <p class="text-xs text-slate-300 pt-2 border-t border-slate-700">
                • <strong>Schema:</strong> Cohesive, repeatable action or mental category for organizing knowledge.
                <br/>• <strong>Assimilation:</strong> Integrating new experiences directly into existing schemas without modification.
                <br/>• <strong>Accommodation:</strong> Modifying existing cognitive structures or creating new ones in response to novel experiences.
                <br/>• <strong>Equilibration:</strong> The self-regulatory mechanism restoring balance between cognitive schemas and the environment.
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. Vygotsky's Socio-Cultural Theory & Kohlberg's Moral Stages</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-3 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-amber-400 font-bold block mb-1">Lev Vygotsky (Socio-Cultural Constructivism)</span>
                  <p class="text-slate-300">• Cognitive development originates through social interaction and cultural tools (especially language).</p>
                  <p class="text-slate-300">• <strong>ZPD (Zone of Proximal Development):</strong> The distance between independent problem-solving capacity and potential problem-solving under guided assistance.</p>
                  <p class="text-slate-300">• <strong>Scaffolding:</strong> Graduated, temporary instructional support offered by an MKO (More Knowledgeable Other).</p>
                  <p class="text-slate-300">• <strong>Private Speech:</strong> Self-directed overt verbalization used by children to regulate cognitive actions.</p>
                </div>
                <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
                  <span class="text-emerald-400 font-bold block mb-1">Lawrence Kohlberg (Moral Development Stages)</span>
                  <p class="text-slate-300">• Evaluated moral reasoning through dilemmas (e.g. The Heinz Dilemma).</p>
                  <div class="space-y-1.5 pt-1 text-[11px] text-slate-300">
                    <p class="font-bold text-amber-300">Level 1: Pre-Conventional (Ages 4–10)</p>
                    <p>• Stage 1: Punishment and Obedience Orientation (fear of authority).</p>
                    <p>• Stage 2: Instrumental Relativist / Individualism (tit-for-tat self-interest).</p>
                    <p class="font-bold text-teal-300 pt-1">Level 2: Conventional (Ages 10–13)</p>
                    <p>• Stage 3: Good Boy / Nice Girl Orientation (interpersonal conformity).</p>
                    <p>• Stage 4: Law and Order / Maintaining Social Order.</p>
                    <p class="font-bold text-indigo-300 pt-1">Level 3: Post-Conventional (Ages 13+)</p>
                    <p>• Stage 5: Social Contract and Individual Rights.</p>
                    <p>• Stage 6: Universal Ethical Principles (internalized conscience).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. Inclusive Education & The Right to Education Act, 2009</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>Specific Learning Disabilities:</strong>
                <br/>1. <em>Dyslexia:</em> Difficulty with accurate/fluent word recognition and decoding (reading disability).
                <br/>2. <em>Dysgraphia:</em> Impaired fine-motor coordination leading to distorted or illegible handwriting.
                <br/>3. <em>Dyscalculia:</em> Severe difficulty comprehending arithmetic operations and number sense.
                <br/>4. <em>ADHD:</em> Persistent inattention, impulsivity, and motor hyperactivity.
              </p>
              <p>• <strong>Right of Children to Free and Compulsory Education (RTE) Act, 2009:</strong>
                <br/>1. Enacted 2009, <strong>enforced on 1 April 2010</strong> under Article 21A as a fundamental constitutional right.
                <br/>2. Universal free and compulsory schooling for ages <strong>6 to 14</strong> (extended to 6–18 for children with disabilities under the RPwD Act 2016).
                <br/>3. Mandates <strong>25% reservation</strong> for economically weaker sections (EWS) in unaided private schools (Section 12(1)(c)).
                <br/>4. Pupil-Teacher Ratio (PTR): <strong>30 : 1</strong> for Primary (Classes 1–5), <strong>35 : 1</strong> for Upper Primary (Classes 6–8).
                <br/>5. Strict statutory ban on private tuition by school teachers (Section 28).
                <br/>6. Zero tolerance for physical punishment and mental harassment (Section 17).
              </p>
            </div>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          hi: 'उदाहरण 1: पियाजे का संरक्षण (Conservation) परीक्षण',
          pa: 'ਉਦਾਹਰਨ 1: ਪਿਆਜੇ ਦਾ ਸੰਰਖਣ (Conservation) ਪ੍ਰੀਖਣ',
          en: 'Worked Example 1: Piaget’s Conservation of Liquid Experiment',
        },
        problem: {
          hi: 'एक 5 वर्षीय बालक के सामने दो समान चौड़े गिलासों A और B में बराबर पानी भरा जाता है। बालक स्वीकार करता है कि दोनों में बराबर पानी है। फिर परीक्षक B का पानी एक संकरे तथा ऊंचे गिलास C में उलट देता है। बालक कहता है कि "C में पानी अधिक है"। पियाजे के अनुसार बालक किस विकासात्मक अवस्था में है और उसमें किस संक्रिया का अभाव है?',
          pa: 'ਇੱਕ 5 ਸਾਲਾਂ ਦੇ ਬੱਚੇ ਦੇ ਸਾਹਮਣੇ ਦੋ ਇੱਕੋ ਜਿਹੇ ਗਲਾਸਾਂ A ਅਤੇ B ਵਿੱਚ ਬਰਾਬਰ ਪਾਣੀ ਪਾਇਆ ਜਾਂਦਾ ਹੈ। ਬੱਚਾ ਮੰਨਦਾ ਹੈ ਕਿ ਦੋਵਾਂ ਵਿੱਚ ਪਾਣੀ ਬਰਾਬਰ ਹੈ। ਫਿਰ B ਦਾ ਪਾਣੀ ਲੰਬੇ ਅਤੇ ਪਤਲੇ ਗਲਾਸ C ਵਿੱਚ ਪਲਟ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ। ਬੱਚਾ ਕਹਿੰਦਾ ਹੈ ਕਿ "C ਵਿੱਚ ਪਾਣੀ ਵੱਧ ਹੈ"। ਪਿਆਜੇ ਅਨੁਸਾਰ ਬੱਚਾ ਕਿਸ ਅਵਸਥਾ ਵਿੱਚ ਹੈ ਅਤੇ ਉਸ ਵਿੱਚ ਕਿਸ ਗੁਣ ਦੀ ਘਾਟ ਹੈ?',
          en: 'A 5-year-old child observes two identical beakers, A and B, filled with equal amounts of water. The child agrees they contain the same amount. The tester then pours the water from B into a tall, narrow cylinder C. The child insists that cylinder C has more water. According to Piaget, which stage is the child in, and what cognitive operation is absent?',
        },
        steps: {
          hi: [
            'कदम 1: बच्चे की आयु 5 वर्ष है, जो पियाजे की "पूर्व-संक्रियात्मक अवस्था" (Preoperational Stage, 2-7 वर्ष) में आती है।',
            'कदम 2: पूर्व-संक्रियात्मक अवस्था में बच्चा केवल एक ही पहलू (ऊंचाई) पर ध्यान केंद्रित करता है (Centration) और चौड़ाई की उपेक्षा करता है।',
            'कदम 3: उसमें "संरक्षण" (Conservation - यह समझना कि पात्र बदलने से मात्रा नहीं बदलती) और "पलटावीपन" (Reversibility - दिमाग में पानी को वापस B में न लौटा पाना) का अभाव है।',
          ],
          pa: [
            'ਕਦਮ 1: ਬੱਚੇ ਦੀ ਉਮਰ 5 ਸਾਲ ਹੈ, ਜੋ ਪਿਆਜੇ ਦੀ "ਪੂਰਵ-ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ" (Preoperational Stage, 2-7 ਸਾਲ) ਵਿੱਚ ਆਉਂਦੀ ਹੈ।',
            'ਕਦਮ 2: ਇਸ ਪੜਾਅ ਉੱਤੇ ਬੱਚਾ ਸਿਰਫ਼ ਇੱਕ ਪਹਿਲੂ (ਉਚਾਈ) ਉੱਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਦਾ ਹੈ (Centration)।',
            'ਕਦਮ 3: ਬੱਚੇ ਵਿੱਚ "ਸੰਰਖਣ" (Conservation) ਅਤੇ "ਉਲਟਾਉਣਯੋਗਤਾ" (Reversibility) ਦੀ ਘਾਟ ਹੈ।',
          ],
          en: [
            'Step 1: Identify age (5 years), placing the child squarely in Piaget’s Preoperational Stage (2 to 7 years).',
            'Step 2: Recognize the perceptual error as Centration (focusing exclusively on the single dimension of height while ignoring width).',
            'Step 3: Conclude that the child lacks Conservation (invariance of volume across perceptual transformations) and Reversibility.',
          ],
        },
        solution: {
          hi: 'बालक "पूर्व-संक्रियात्मक अवस्था" में है तथा उसमें "संरक्षण" (Conservation) एवं "पलटावीपन" (Reversibility) की क्षमता का अभाव है।',
          pa: 'ਬੱਚਾ "ਪੂਰਵ-ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ" ਵਿੱਚ ਹੈ ਅਤੇ ਉਸ ਵਿੱਚ "ਸੰਰਖਣ" (Conservation) ਤੇ "ਉਲਟਾਉਣਯੋਗਤਾ" ਦੀ ਘਾਟ ਹੈ।',
          en: 'The child is in the Preoperational Stage and lacks Conservation and Reversibility.',
        },
        takeaway: {
          hi: 'संरक्षण और पलटावीपन का विकास 7 से 11 वर्ष की "मूर्त संक्रियात्मक अवस्था" में होता है।',
          pa: 'ਸੰਰਖਣ ਅਤੇ ਉਲਟਾਉਣਯੋਗਤਾ ਦਾ ਵਿਕਾਸ 7 ਤੋਂ 11 ਸਾਲ ਦੀ "ਮੂਰਤ ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ" ਵਿੱਚ ਹੁੰਦਾ ਹੈ।',
          en: 'Conservation and reversibility are acquired systematically during the Concrete Operational Stage (7 to 11 years).',
        },
      },
      {
        title: {
          hi: 'उदाहरण 2: वाइगोत्स्की का ZPD एवं पाड़ (Scaffolding) निर्धारण',
          pa: 'ਉਦਾਹਰਨ 2: ਵਾਈਗੋਤਸਕੀ ਦਾ ZPD ਅਤੇ ਸਕੈਫੋਲਡਿੰਗ ਨਿਰਧਾਰਨ',
          en: 'Worked Example 2: Classroom Diagnosis of Vygotsky’s ZPD and Scaffolding',
        },
        problem: {
          hi: 'कक्षा 3 का छात्र रमन बिना किसी सहायता के एक अंक का जोड़ (जैसे 4 + 5 = 9) स्वतंत्र रूप से हल कर लेता है, लेकिन जब उसे हासिल वाला दो अंकों का जोड़ (जैसे 27 + 15) दिया जाता है तो वह अटक जाता है। अध्याਪਿਕਾ उसे केवल इकाई के अंकों को जोड़ने और दहाई के अंक को हासिल के रूप में ऊपर लिखने का संकेत (Prompt) देती है, जिसके बाद रमन सवाल तुरंत सही हल कर लेता है। अध्यापिका का यह सहयोग क्या कहलाता है और यह किस क्षेत्र में आता है?',
          pa: 'ਜਮਾਤ 3 ਦਾ ਵਿਦਿਆਰਥੀ ਰਮਨ ਇਕੱਲਾ ਇਕਹਿਰੇ ਅੰਕਾਂ ਦਾ ਜੋੜ ਸਹੀ ਕਰ ਲੈਂਦਾ ਹੈ, ਪਰ ਹਾਸਲ ਵਾਲੇ ਦੋ ਅੰਕੀ ਜੋੜ ਵਿੱਚ ਉਲਝ ਜਾਂਦਾ ਹੈ। ਅਧਿਆਪਕਾ ਉਸਨੂੰ ਹਾਸਲ ਵਾਲਾ ਅੰਕ ਉੱਪਰ ਲਿਖਣ ਦਾ ਸੰਕੇਤ (Hint) ਦਿੰਦੀ ਹੈ ਅਤੇ ਰਮਨ ਸਵਾਲ ਹੱਲ ਕਰ ਲੈਂਦਾ ਹੈ। ਇਸ ਸਹਾਇਤਾ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?',
          en: 'Raman, a Grade 3 student, independently solves single-digit addition but struggles with two-digit addition with regrouping (carrying). When his teacher provides a verbal cue and models placing the carried ten into the tens column, Raman completes the problem correctly. What is this assistance termed, and within what zone does it operate?',
        },
        steps: {
          hi: [
            'कदम 1: रमन का स्वतंत्र प्रदर्शन (Single digit addition) उसका "वास्तविक विकास स्तर" (Actual Developmental Level) है।',
            'कदम 2: मार्गदर्शक की सहायता से हासिल वाला जोड़ कर पाना उसका "संभावित विकास स्तर" (Potential Developmental Level) है।',
            'कदम 3: वास्तविक और संभावित स्तर के बीच का फासला "समीपस्थ विकास क्षेत्र" (ZPD) कहलाता है।',
            'कदम 4: अध्यापिका द्वारा दिया गया अस्थायी संकेत "पाड़/मचान" (Scaffolding) कहलाता है।',
          ],
          pa: [
            'ਕਦਮ 1: ਰਮਨ ਦਾ ਇਕੱਲੇ ਕੰਮ ਕਰਨਾ ਉਸਦਾ "ਅਸਲ ਵਿਕਾਸ ਪੱਧਰ" ਹੈ।',
            'ਕਦਮ 2: ਸਹਾਇਤਾ ਨਾਲ ਹਾਸਲ ਵਾਲਾ ਜੋੜ ਕਰਨਾ ਉਸਦਾ "ਸੰਭਾਵੀ ਵਿਕਾਸ ਪੱਧਰ" ਹੈ।',
            'ਕਦਮ 3: ਇਹਨਾਂ ਦੋਹਾਂ ਵਿਚਲੀ ਦੂਰੀ ZPD (ਸੰਭਾਵੀ ਵਿਕਾਸ ਖੇਤਰ) ਹੈ।',
            'ਕਦਮ 4: ਅਧਿਆਪਕਾ ਵੱਲੋਂ ਦਿੱਤੀ ਆਰਜ਼ੀ ਮਦਦ ਨੂੰ ਸਕੈਫੋਲਡਿੰਗ (Scaffolding) ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
          ],
          en: [
            'Step 1: Raman’s unassisted performance represents his Actual Level of Development.',
            'Step 2: His assisted success with regrouping represents his Potential Level of Development.',
            'Step 3: The conceptual gap between these two boundaries is the Zone of Proximal Development (ZPD).',
            'Step 4: The targeted, fading instructional cue provided by the teacher is Scaffolding.',
          ],
        },
        solution: {
          hi: 'अध्यापिका का सहयोग "पाड़ / मचान (Scaffolding)" कहलाता है और यह रमन के "समीपस्थ विकास क्षेत्र (ZPD)" में संचालित होता है।',
          pa: 'ਅਧਿਆਪਕਾ ਦੀ ਸਹਾਇਤਾ ਨੂੰ "ਸਕੈਫੋਲਡਿੰਗ (Scaffolding)" ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇਹ ZPD ਦੇ ਦਾਇਰੇ ਵਿੱਚ ਆਉਂਦਾ ਹੈ।',
          en: 'The support is "Scaffolding" operating directly within the student’s "Zone of Proximal Development (ZPD)".',
        },
        takeaway: {
          hi: 'पाड़ (Scaffolding) स्थायी नहीं होती; जैसे ही छात्र कौशल में दक्ष होता है, सहायता वापस ले ली जाती है।',
          pa: 'ਸਕੈਫੋਲਡਿੰਗ ਪੱਕੀ ਨਹੀਂ ਹੁੰਦੀ; ਵਿਦਿਆਰਥੀ ਦੇ ਸਿੱਖਣ ਉਪਰੰਤ ਇਹ ਹੌਲੀ-ਹੌਲੀ ਹਟਾ ਲਈ ਜਾਂਦੀ ਹੈ।',
          en: 'Scaffolding is inherently temporary; it fades progressively as learner autonomy increases.',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          hi: 'भ्रांति: वृद्धि (Growth) और विकास (Development) एक ही अर्थ वाले शब्द हैं।',
          pa: 'ਭੁਲੇਖਾ: ਵਾਧਾ (Growth) ਅਤੇ ਵਿਕਾਸ (Development) ਇੱਕੋ ਚੀਜ਼ ਹਨ।',
          en: 'Misconception: Growth and Development are synonymous and interchangeable.',
        },
        correction: {
          hi: 'सत्य: वृद्धि केवल मात्रात्मक (शारीरिक लंबाई, भार) होती है जो परिपक्वता आने पर रुक जाती है। विकास गुणात्मक व मात्रात्मक दोनों है, जो जीवनपर्यंत (Womb to Tomb) चलने वाली प्रगतिशील प्रक्रिया है।',
          pa: 'ਸੱਚ: ਵਾਧਾ ਸਿਰਫ਼ ਮਿਣਤੀਯੋਗ/ਸਰੀਰਕ ਹੁੰਦਾ ਹੈ ਅਤੇ ਪਰਿਪੱਕਤਾ ਉਪਰੰਤ ਰੁਕ ਜਾਂਦਾ ਹੈ। ਵਿਕਾਸ ਗੁਣਾਤਮਕ ਹੁੰਦਾ ਹੈ ਅਤੇ ਜੀਵਨ ਭਰ ਚੱਲਦਾ ਹੈ।',
          en: 'Correction: Growth is purely quantitative (height, weight, body dimensions) and ceases with biological maturity. Development is both qualitative and quantitative, continuing progressively from conception to death.',
        },
        whyItMatters: {
          hi: 'परीक्षा में "विकास की प्रकृति" पर सीधे प्रश्न आते हैं जहाँ गुणात्मक बनाम मात्रात्मक का चयन निर्णायक होता है।',
          pa: 'ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਵਿਕਾਸ ਦੇ ਲੱਛਣਾਂ ਸੰਬੰਧੀ ਗੁਣਾਤਮਕ ਬਨਾਮ ਮਾਤਰਾਤਮਕ ਉੱਤੇ ਸਿੱਧਾ ਸਵਾਲ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          en: 'Examiners frequently test whether development is continuous and qualitative, which traps candidates treating it as mere physical growth.',
        },
      },
      {
        misconception: {
          hi: 'भ्रांति: डिस्लेक्सिया से पीड़ित बच्चा मानसिक रूप से मंदित या कमजोर बुद्धि वाला होता है।',
          pa: 'ਭੁਲੇਖਾ: ਡਿਸਲੈਕਸੀਆ ਵਾਲਾ ਬੱਚਾ ਮਾਨਸਿਕ ਤੌਰ ਤੇ ਕਮਜ਼ੋਰ ਜਾਂ ਮੰਦਬੁੱਧੀ ਹੁੰਦਾ ਹੈ।',
          en: 'Misconception: Dyslexia indicates low general intelligence or mental deficiency.',
        },
        correction: {
          hi: 'सत्य: डिस्लेक्सिया एक विशिष्ट स्नायविक (न्यूरोलॉजिकल) पठन अक्षमता है। डिस्लेक्सिक बालकों की बुद्धि लब्धि (IQ) सामान्य या उससे भी अधिक हो सकती है; उन्हें केवल अक्षरों व ध्वनियों को जोड़ने में कठिनाई होती है।',
          pa: 'ਸੱਚ: ਡਿਸਲੈਕਸੀਆ ਸਿਰਫ਼ ਇੱਕ ਨਿਊਰੋਲੋਜੀਕਲ ਪੜ੍ਹਨ ਸੰਬੰਧੀ ਅਸਮਰੱਥਾ ਹੈ। ਇਹਨਾਂ ਬੱਚਿਆਂ ਦਾ IQ ਆਮ ਜਾਂ ਉੱਚਾ ਹੋ ਸਕਦਾ ਹੈ।',
          en: 'Correction: Dyslexia is a specific learning disorder of neurological origin impacting word decoding. Dyslexic individuals typically have average or above-average intellectual ability.',
        },
        whyItMatters: {
          hi: 'समावेशी शिक्षा के प्रश्नों में डिस्लेक्सिया को बौद्धिक मंदता बताने वाले विकल्प अक्सर भ्रामक नकारात्मक विकल्प होते हैं।',
          pa: 'ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ ਦੇ ਪ੍ਰਸ਼ਨਾਂ ਵਿੱਚ ਡਿਸਲੈਕਸੀਆ ਨੂੰ ਮੰਦਬੁੱਧੀ ਦੱਸਣਾ ਗ਼ਲਤ ਵਿਕਲਪ ਹੁੰਦਾ ਹੈ।',
          en: 'TET questions on inclusive education regularly present low IQ as an incorrect distractor for dyslexia.',
        },
      },
      {
        misconception: {
          hi: 'भ्रांति: RTE अधिनियम 2009 12वीं कक्षा तक के सभी विद्यार्थियों के लिए निःशुल्क शिक्षा सुनिश्चित करता है।',
          pa: 'ਭੁਲੇਖਾ: RTE ਐਕਟ 2009 ਬਾਰ੍ਹਵੀਂ ਜਮਾਤ ਤੱਕ ਦੇ ਸਾਰੇ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਮੁਫ਼ਤ ਸਿੱਖਿਆ ਦਿੰਦਾ ਹੈ।',
          en: 'Misconception: The RTE Act 2009 covers secondary and higher secondary schooling up to Class 12.',
        },
        correction: {
          hi: 'सत्य: RTE अधिनियम 2009 केवल प्रारंभिक शिक्षा (कक्षा 1 से 8, आयु 6 से 14 वर्ष) तक लागू होता है। (केवल दिव्यांग बालकों हेतु आयु सीमा 18 वर्ष है)।',
          pa: 'ਸੱਚ: RTE 2009 ਸਿਰਫ਼ ਐਲੀਮੈਂਟਰੀ ਸਿੱਖਿਆ (ਜਮਾਤ 1 ਤੋਂ 8, ਉਮਰ 6 ਤੋਂ 14 ਸਾਲ) ਤੱਕ ਲਾਗੂ ਹੁੰਦਾ ਹੈ।',
          en: 'Correction: RTE Act 2009 strictly applies to Elementary Education (Classes 1 to 8, chronological ages 6 to 14, or up to 18 only for children with disabilities under the RPwD Act).',
        },
        whyItMatters: {
          hi: 'परीक्षा में विकल्प "6 से 18 वर्ष" या "कक्षा 1 से 12" देकर परीक्षार्थियों को भ्रमित किया जाता है।',
          pa: 'ਪ੍ਰੀਖਿਆ ਵਿੱਚ "6 ਤੋਂ 18 ਸਾਲ" ਦਾ ਵਿਕਲਪ ਆਮ ਬੱਚਿਆਂ ਲਈ ਗ਼ਲਤ ਹੁੰਦਾ ਹੈ।',
          en: 'Standard questions test the exact statutory age bracket (6–14 general vs 6–18 for disabled children).',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        hi: [
          'जीन पियाजे: संज्ञानात्मक विकास (4 अवस्थाएं) - वस्तु स्थायित्व (0-2 वर्ष), जीववाद/आत्मकेंद्रिता (2-7 वर्ष), संरक्षण/पलटावी (7-11 वर्ष), अमूर्त चिंतन (11+ वर्ष)।',
          'लेव वाइगोत्स्की: सामाजिक-सांस्कृतिक सिद्धांत - ZPD (संभावित विकास क्षेत्र), पाड़/मचान (अस्थायी सहायता), निजी वार्ता (Private Speech)।',
          'लॉरेंस कोहलबर्ग: नैतिक विकास (3 स्तर, 6 चरण) - स्तर 1 (पूर्व-पारंपरिक), स्तर 2 (पारंपरिक - अच्छा लड़का/लड़की व कानून-व्यवस्था), स्तर 3 (उत्तर-पारंपरिक)।',
          'अधिगम अक्षमताएं: डिस्लेक्सिया (पठन विकार), डिस्ग्राफिया (लेखन विकार), डिस्कैलकुलिया (गणित विकार)।',
          'RTE Act 2009: 1 अप्रैल 2010 को लागू (अनुच्छेद 21A), 6-14 वर्ष के बच्चों हेतु मुफ्त व अनिवार्य शिक्षा, प्राथमिक PTR 30:1, उच्च प्राथमिक PTR 35:1, निजी स्कूलों में 25% EWS आरक्षण।',
        ],
        pa: [
          'ਜੀਨ ਪਿਆਜੇ: 4 ਅਵਸਥਾਵਾਂ - ਵਸਤੂ ਸਥਿਰਤਾ (0-2 ਸਾਲ), ਜੀਵਵਾਦ (2-7 ਸਾਲ), ਸੰਰਖਣ/ਪਲਟਾਵੀ (7-11 ਸਾਲ), ਅਮੂਰਤ ਤਰਕ (11+ ਸਾਲ)।',
          'ਵਾਈਗੋਤਸਕੀ: ਸਮਾਜਿਕ-ਸੱਭਿਆਚਾਰਕ ਸਿਧਾਂਤ - ZPD, ਸਕੈਫੋਲਡਿੰਗ (ਆਰਜ਼ੀ ਮਦਦ), ਨਿੱਜੀ ਬੋਲ।',
          'ਕੋਹਲਬਰਗ: ਨੈਤਿਕ ਵਿਕਾਸ (3 ਪੱਧਰ, 6 ਪੜਾਅ) - ਪੂਰਵ-ਰਵਾਇਤੀ, ਰਵਾਇਤੀ (ਚੰਗਾ ਮੁੰਡਾ/ਕੁੜੀ), ਉੱਤਰ-ਰਵਾਇਤੀ।',
          'ਸਿੱਖਣ ਵਿਕਾਰ: ਡਿਸਲੈਕਸੀਆ (ਪੜ੍ਹਨ), ਡਿਸਗ੍ਰਾਫੀਆ (ਲਿਖਣ), ਡਿਸਕੈਲਕੁਲੀਆ (ਹਿਸਾਬ)।',
          'RTE 2009: 1 ਅਪ੍ਰੈਲ 2010 ਨੂੰ ਲਾਗੂ, 6-14 ਸਾਲ ਉਮਰ, PTR ਪ੍ਰਾਇਮਰੀ 30:1, ਅੱਪਰ ਪ੍ਰਾਇਮਰੀ 35:1, 25% EWS ਰਾਖਵਾਂਕਰਨ।',
        ],
        en: [
          'Piaget’s 4 Stages: Sensorimotor (0-2y, Object Permanence), Preoperational (2-7y, Animism/Egocentrism), Concrete (7-11y, Conservation/Reversibility), Formal (11y+, Abstract Deduction).',
          'Vygotsky: Socio-cultural theory, ZPD, Scaffolding (temporary assistance by MKO), Private speech for self-regulation.',
          'Kohlberg: Moral reasoning (3 levels, 6 stages) - Pre-conventional (fear/reward), Conventional (conformity/law & order), Post-conventional (ethical principles).',
          'Learning Disorders: Dyslexia (Reading), Dysgraphia (Writing), Dyscalculia (Arithmetic).',
          'RTE Act 2009: Enforced 1 April 2010 (Art 21A), free schooling for ages 6–14, primary PTR 30:1, upper primary PTR 35:1, 25% EWS quota in private schools.',
        ],
      },
      keyFormulasOrRules: {
        hi: [
          'छात्र-शिक्षक अनुपात (Primary PTR): 30:1 (60 छात्रों तक 2 शिक्षक, 61-90 तक 3, 91-120 तक 4, 150+ पर 5 शिक्षक + 1 प्रधानाध्यापक)।',
          'छात्र-शिक्षक अनुपात (Upper Primary PTR): 35:1 (प्रति कक्षा न्यूनतम 1 शिक्षक - गणित/विज्ञान, सामाजिक, भाषा)।',
          'न्यूनतम कार्य दिवस प्रति वर्ष: प्राथमिक स्तर हेतु 200 दिन (800 घंटे); उच्च प्राथमिक हेतु 220 दिन (1000 घंटे)।',
          'शिक्षकों हेतु कार्य के घंटे: प्रति सप्ताह तैयारी के घंटों सहित न्यूनतम 45 कार्य घंटे।',
        ],
        pa: [
          'ਵਿਦਿਆਰਥੀ-ਅਧਿਆਪਕ ਅਨੁਪਾਤ (ਪ੍ਰਾਇਮਰੀ PTR): 30:1 (60 ਬੱਚਿਆਂ ਤੱਕ 2 ਅਧਿਆਪਕ, 150 ਤੋਂ ਉੱਪਰ 5 ਅਧਿਆਪਕ + 1 ਮੁੱਖ ਅਧਿਆਪਕ)।',
          'ਅੱਪਰ ਪ੍ਰਾਇਮਰੀ PTR: 35:1।',
          'ਸਾਲਾਨਾ ਕੰਮਕਾਜੀ ਦਿਨ: ਪ੍ਰਾਇਮਰੀ ਲਈ 200 ਦਿਨ (800 ਘੰਟੇ), ਅੱਪਰ ਪ੍ਰਾਇਮਰੀ ਲਈ 220 ਦਿਨ (1000 ਘੰਟੇ)।',
          'ਅਧਿਆਪਕਾਂ ਲਈ ਹਫ਼ਤਾਵਾਰੀ ਘੰਟੇ: ਤਿਆਰੀ ਸਮੇਤ ਘੱਟੋ-ਘੱਟ 45 ਘੰਟੇ ਪ੍ਰਤੀ ਹਫ਼ਤਾ।',
        ],
        en: [
          'Primary PTR Norm: 30:1 (up to 60 students: 2 teachers; 150+ students: 5 teachers + 1 Head Teacher).',
          'Upper Primary PTR Norm: 35:1 with dedicated subject specialists.',
          'Minimum Instructional Days/Hours: Primary = 200 days / 800 hours; Upper Primary = 220 days / 1000 hours per academic year.',
          'Teacher Working Hours: Minimum 45 teaching-cum-preparation hours per week.',
        ],
      },
      examTraps: {
        hi: [
          'धोखा: "आत्मसातीकरण" (Assimilation) और "समायोजन" (Accommodation) में अंतर - स्कीमा में बिना बदलाव सीधे जोड़ना आत्मसातीकरण है, जबकि पुराने स्कीमा को बदलना या नया बनाना समायोजन है।',
          'धोखा: स्कैफोल्डिंग शब्द जेरोम ब्रूनर ने गढ़ा था, किंतु इसे सामाजिक-सांस्कृतिक सिद्धांत में विस्तार लेव वाइगोत्स्की ने दिया।',
          'धोखा: कोहलबर्ग के अनुसार बच्चे का "अच्छा लड़का/अच्छी लड़की" अभिविन्यास स्तर 2 (पारंपरिक) में आता है, स्तर 1 में नहीं।',
        ],
        pa: [
          'ਧੋਖਾ: ਆਤਮਸਾਤਕਰਨ (Assimilation) ਬਿਨਾਂ ਬਦਲਾਅ ਜਾਣਕਾਰੀ ਜੋੜਨਾ ਹੈ; ਸਮਾਯੋਜਨ (Accommodation) ਪੁਰਾਣੇ ਸਕੀਮਾ ਨੂੰ ਸੋਧਣਾ ਜਾਂ ਨਵਾਂ ਬਣਾਉਣਾ ਹੈ।',
          'ਧੋਖਾ: ਸਕੈਫੋਲਡਿੰਗ ਸ਼ਬਦ ਬਰੂਨਰ ਨੇ ਦਿੱਤਾ ਸੀ, ਪਰ ਵਿਕਾਸ ਸਿਧਾਂਤ ਵਿੱਚ ਵਾਈਗੋਤਸਕੀ ਨੇ ਵਰਤਿਆ।',
          'ਧੋਖਾ: ਚੰਗਾ ਮੁੰਡਾ/ਚੰਗੀ ਕੁੜੀ ਪੜਾਅ ਰਵਾਇਤੀ ਪੱਧਰ (ਪੱਧਰ 2) ਵਿੱਚ ਆਉਂਦਾ ਹੈ।',
        ],
        en: [
          'Trap: Assimilation fits new info into existing schemas without modification; Accommodation alters the schema or forms a new structure.',
          'Trap: The term "Scaffolding" was originally coined by Jerome Bruner et al., but operationalized in socio-cultural constructivism by Lev Vygotsky.',
          'Trap: "Good boy-nice girl" orientation belongs to Level 2 (Conventional), NOT Level 1.',
        ],
      },
    },
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      verifiedSyllabusDenominator: 'ERB Punjab ETT 5994 & BSER REET Level 1/2 CDP Official Syllabi',
      correctionHistory: [
        {
          date: '2026-10-10',
          description: 'Expanded comprehensive trilingual content (EN/HI/PA), added worked examples, misconceptions, and quick revision sheet.',
        },
      ],
    },
    summary: {
      hi: 'पियाजे की 4 अवस्थाओं में वस्तु स्थायित्व (0-2 वर्ष) और संरक्षण (7-11 वर्ष) मुख्य हैं। वाइगोत्स्की ने ZPD और स्केफोल्डिंग (अस्थायी सहायता) दी। डिस्लेक्सिया पठन विकार है। RTE अधिनियम 2009, 1 अप्रैल 2010 को लागू हुआ (6-14 वर्ष के बच्चों हेतु मुफ्त शिक्षा)।',
      pa: 'ਪਿਆਜੇ ਦੀਆਂ 4 ਸਟੇਜਾਂ, ਵਾਈਗੋਤਸਕੀ ਦਾ ZPD ਤੇ ਸਕੈਫੋਲਡਿੰਗ। ਡਿਸਲੈਕਸੀਆ ਪੜ੍ਹਨ ਦੀ ਸਮੱਸਿਆ ਹੈ। RTE 2009 1 ਅਪ੍ਰੈਲ 2010 ਨੂੰ ਲਾਗੂ ਹੋਇਆ।',
      en: 'Piaget formulated 4 cognitive stages (Object permanence 0-2, Conservation 7-11). Vygotsky coined ZPD and scaffolding. Dyslexia is reading difficulty. RTE Act 2009 was enforced on 1 April 2010 for ages 6-14 under Article 21A.',
    },
    keyNotes: {
      hi: [
        '📌 जीन पियाजे: वस्तु स्थायित्व (Object Permanence) संवेदी-पेशीय अवस्था (0-2 वर्ष) में आता है।',
        '📌 संरक्षण (Conservation) व पलटावी गुण मूर्त संक्रियात्मक अवस्था (7-11 वर्ष) में विकसित होता है।',
        '📌 लेव वाइगोत्स्की: पाड़/मचान (Scaffolding) बड़ों द्वारा दी जाने वाली अस्थायी सहायता है।',
        '📌 डिस्लेक्सिया (Dyslexia) पठन संबंधी विकार (Reading Disability) है।',
        '📌 1 अप्रैल 2010: शिक्षा का अधिकार अधिनियम (RTE Act, 2009) संपूर्ण देश में लागू हुआ।',
      ],
      pa: [
        '📌 ਪਿਆਜੇ: ਆਬਜੈਕਟ ਪਰਮਾਨੈਂਸ 0-2 ਸਾਲ ਵਿੱਚ ਹੁੰਦੀ ਹੈ।',
        '📌 ਸਕੈਫੋਲਡਿੰਗ ਵਾਈਗੋਤਸਕੀ ਦਾ ਸੰਕਲਪ ਹੈ।',
        '📌 ਡਿਸਲੈਕਸੀਆ ਪੜ੍ਹਨ ਦਾ ਵਿਕਾਰ ਹੈ।',
        '📌 1 ਅਪ੍ਰੈਲ 2010 ਨੂੰ RTE ਲਾਗੂ ਹੋਇਆ।',
      ],
      en: [
        '📌 Object permanence develops in the sensorimotor stage (0-2 years).',
        '📌 Conservation and reversibility are acquired in the concrete operational stage (7-11 years).',
        '📌 Scaffolding is temporary instructional support formulated by Vygotsky and Bruner.',
        '📌 Dyslexia refers specifically to reading difficulty.',
        '📌 RTE Act 2009 came into force on 1 April 2010 under Article 21A.',
      ],
    },
    flashcards: [
      {
        id: 'fc-cdp-1',
        q: { hi: 'जीन पियाजे के अनुसार "संरक्षण" (Conservation) और पलटावी (Reversibility) का गुण किस अवस्था में विकसित होता है?', pa: 'ਪਿਆਜੇ ਅਨੁਸਾਰ ਕੰਜ਼ਰਵੇਸ਼ਨ ਕਿਸ ਸਟੇਜ ਵਿੱਚ ਆਉਂਦੀ ਹੈ?', en: 'According to Piaget, in which stage does the child develop Conservation and Reversibility?' },
        a: { hi: 'मूर्त संक्रियात्मक अवस्था में (7 से 11 वर्ष)।', pa: 'ਮੂਰਤ ਸੰਕ੍ਰਿਆਤਮਕ ਅਵਸਥਾ (7-11 ਸਾਲ)।', en: 'Concrete Operational Stage (7 to 11 years).' },
        difficulty: 'easy',
      },
      {
        id: 'fc-cdp-2',
        q: { hi: 'शिक्षा का अधिकार अधिनियम (RTE Act, 2009) किस तिथि को लागू हुआ था?', pa: 'RTE ਐਕਟ 2009 ਕਦੋਂ ਲਾਗੂ ਹੋਇਆ?', en: 'On which date did the Right to Education (RTE) Act 2009 come into force?' },
        a: { hi: '1 अप्रैल 2010 को।', pa: '1 ਅਪ੍ਰੈਲ 2010।', en: '1 April 2010.' },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Child Development & Pedagogy — Piaget, Vygotsky, Kohlberg',
        channel: 'Lets LEARN',
        youtubeId: 'X6P1pNpHg7M',
        language: 'hi',
        duration: '55 min',
        tags: ['Piaget', 'Vygotsky', 'CDP', 'ETT', 'CTET', 'PSTET'],
      },
    ],
    bookRefs: [
      {
        title: 'Child Development and Pedagogy',
        author: 'Himanshi Singh / Pearson',
        chapters: 'Theories of Piaget, Vygotsky, Kohlberg, Inclusive Education',
        type: 'standard',
      },
    ],
    documents: [
      {
        title: 'CBSE CTET · Child Development & Pedagogy Detailed Syllabus PDF',
        url: 'https://ctet.nic.in/document/information-bulletin-ctet-2024.pdf',
        language: 'English / Hindi',
        type: 'syllabus',
        publisher: 'Central Board of Secondary Education (CBSE)',
        chapterOrPage: 'Section 4 (Syllabus Structure)',
        accessNotes: 'Official curriculum scope for Child Development and Inclusive Education.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
      {
        title: 'ERD Punjab ETT 6635 · Teaching Methodology Official Syllabus PDF',
        url: 'https://erd.punjab.gov.in/ETT6635/Docs/ETT6635Syllabus13_08_2021.pdf',
        language: 'Punjabi / English',
        type: 'syllabus',
        publisher: 'Education Recruitment Board (ERB), Punjab',
        chapterOrPage: 'Official 5994 / 6635 CDP Component',
        accessNotes: 'Prescribed syllabus for Punjab primary cadre recruitment.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
      {
        title: 'NCERT Class 11 Psychology — Human Development (Chapter 4)',
        url: 'https://ncert.nic.in/textbook/pdf/kepy104.pdf',
        language: 'English',
        type: 'ncert',
        publisher: 'National Council of Educational Research and Training (NCERT)',
        chapterOrPage: 'Chapter 4 (pp. 64–84)',
        accessNotes: 'Covers physical, cognitive (Piaget), and moral (Kohlberg) developmental milestones.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
      {
        title: 'Right to Free and Compulsory Education Act (RTE 2009) Gazette',
        url: 'https://dsel.education.gov.in/rte',
        language: 'Hindi / English',
        type: 'official',
        publisher: 'Department of School Education & Literacy (GoI)',
        chapterOrPage: 'Act No. 35 of 2009',
        accessNotes: 'Statutory mandate for Article 21A, PTR norms, and continuous evaluation.',
        lastChecked: '2026-10-10',
        availability: 'verified',
      },
    ],
    syllabusReference: {
      title: 'Punjab ETT Elementary Cadre (6635 / 5994) & PSTET Official CDP Syllabus',
      url: 'https://educationrecruitmentboard.com/',
      body: 'Education Recruitment Board (ERB), Punjab',
      verifiedOn: '15 March 2024',
    },
  },
};
