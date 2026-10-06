import { Lesson } from './types';

export const PEDAGOGY_LESSONS: Record<string, Lesson> = {
  'child-development-pedagogy': {
    id: 'child-development-pedagogy',
    topicId: 'child-development-pedagogy',
    subjectId: 'pedagogy',
    category: 'pedagogy',
    title: {
      hi: 'बाल विकास एवं शिक्षाशास्त्र: पियाजे, वाइगोत्स्की, कोहलबर्ग व RTE 2009',
      pa: 'ਬਾਲ ਵਿਕਾਸ ਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ: ਪਿਆਜੇ, ਵਾਈਗੋਤਸਕੀ, ਕੋਹਲਬਰਗ ਤੇ RTE',
      en: 'Child Development & Pedagogy: Piaget, Vygotsky, Kohlberg & RTE 2009',
    },
    examRelevance: 'Compulsory 30 Marks Section in CTET (P1/P2), REET (L1/L2), ETT (50 Qs), and Master Cadre Teaching Aptitude',
    estimatedTime: '45 मिनट',
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
                <br/>• <strong>आत्मसातीकरण (Assimilation):</strong> नए ज्ञान को पुरानी स्कीमा में सीधे जोड़ना।
                <br/>• <strong>समायोजन (Accommodation):</strong> नए ज्ञान के कारण पुरानी स्कीमा में संशोधन/बदलाव करना।
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">2. वाइगोत्स्की एवं कोहलबर्ग के सिद्धांत</h3>
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
                  <span class="text-emerald-400 font-bold block mb-1">लॉरेंस कोहलबर्ग (नैतिक विकास सिद्धांत - Moral Development)</span>
                  <p class="text-slate-300">• 'हाइन्ज दुविधा' (Heinz Dilemma) और नैतिक तर्कणा (Moral Reasoning) पर आधारित।</p>
                  <div class="space-y-1.5 pt-1 text-[11px] text-slate-300">
                    <p class="font-bold text-amber-300">स्तर 1: पूर्व-पारंपरिक स्तर (Pre-Conventional Level, 4-10 वर्ष)</p>
                    <p className="pl-2">• <em>चरण 1: आज्ञाकारिता एवं दंड अभिविन्यास (Obedience & Punishment)</em> — सजा से बचने हेतु आज्ञा मानना।</p>
                    <p className="pl-2">• <em>चरण 2: वैयक्तिकता एवं विनिमय (Individualism & Exchange / Instrumental)</em> — अपने हित साधना, जैसे को तैसा।</p>
                    <p class="font-bold text-teal-300 pt-1">स्तर 2: पारंपरिक स्तर (Conventional Level, 10-13 वर्ष)</p>
                    <p className="pl-2">• <em>चरण 3: अच्छा लड़का-अच्छी लड़की अभिविन्यास (Good Boy-Nice Girl Orientation)</em> — दूसरों की नजरों में खरा उतरना।</p>
                    <p className="pl-2">• <em>चरण 4: कानून एवं सामाजिक व्यवस्था बनाए रखना (Law & Order / Maintaining Social Order)</em> — सामाजिक नियमों का निष्ठा से पालन।</p>
                    <p class="font-bold text-indigo-300 pt-1">स्तर 3: उत्तर-पारंपरिक स्तर (Post-Conventional Level, 13+ वर्ष)</p>
                    <p className="pl-2">• <em>चरण 5: सामाजिक अनुबंध एवं व्यक्तिगत अधिकार (Social Contract & Individual Rights)</em> — समाज हित में नियमों का लचीलापन।</p>
                    <p className="pl-2">• <em>चरण 6: सार्वभौमिक नैतिक सिद्धांत (Universal Ethical Principles)</em> — अंतरात्मा के सर्वोच्च नैतिक मूल्य।</p>
                  </div>
                  <p class="text-[10px] text-slate-400 pt-1">• कैरोल गिलिगन ने महिला नैतिकता (Care of Ethics) की उपेक्षा करने पर इसकी आलोचना की।</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">3. समावेशी शिक्षा एवं शिक्षा का अधिकार (RTE Act, 2009)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
              <p>• <strong>अधिगम अक्षमताएं (Learning Disabilities):</strong>
                <br/>1. <em>डिस्लेक्सिया (Dyslexia):</em> पठन विकार (Reading disability, 'saw' को 'was' पढ़ना)।
                <br/>2. <em>डिस्ग्राफिया (Dysgraphia):</em> लेखन संबंधी विकार (Writing disability)।
                <br/>3. <em>डिस्कैलकुलिया (Dyscalculia):</em> गणितीय गणना विकार (Math disability)।
              </p>
              <p>• <strong>शिक्षा का अधिकार अधिनियम (RTE Act, 2009):</strong>
                <br/>1. <strong>1 अप्रैल 2010</strong> को संपूर्ण भारत में लागू (अनुच्छेद 21A)।
                <br/>2. <strong>6 से 14 वर्ष</strong> के बच्चों को निःशुल्क एवं अनिवार्य शिक्षा (दिव्यांगों हेतु 6 से 18 वर्ष)।
                <br/>3. निजी स्कूलों में आर्थिक रूप से कमजोर वर्ग (EWS) हेतु <strong>25% सीटें आरक्षित</strong>।
                <br/>4. छात्र-शिक्षक अनुपात (PTR): प्राथमिक स्तर पर <strong>30 : 1</strong> तथा उच्च प्राथमिक पर <strong>35 : 1</strong>।
                <br/>5. शिक्षकों द्वारा निजी ट्यूशन (Private Tuition) लेना पूर्णतः प्रतिबंधित (धारा 28)।
              </p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 ਈ.ਟੀ.ਟੀ. ਤੇ ਅਧਿਆਪਕ ਭਰਤੀ ਲਈ</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪਿਆਜੇ ਦਾ ਸੰਗਿਆਨਾਤਮਕ ਵਿਕਾਸ (4 ਸਟੇਜਾਂ), ਵਾਈਗੋਤਸਕੀ ਦਾ ZPD ਤੇ ਸਕੈਫੋਲਡਿੰਗ, ਅਤੇ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ (RTE 2009 - 1 ਅਪ੍ਰੈਲ 2010)।
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>ਪਿਆਜੇ:</strong> 0-2 ਸਾਲ ਸੰਵੇਦੀ-ਪੇਸ਼ੀ (ਆਬਜੈਕਟ ਪਰਮਾਨੈਂਸ), 2-7 ਸਾਲ ਪੂਰਵ-ਸੰਕ੍ਰਿਆਤਮਕ, 7-11 ਸਾਲ ਮੂਰਤ, 11+ ਅਮੂਰਤ।</p>
            <p>• <strong>ਵਾਈਗੋਤਸਕੀ:</strong> ZPD (ਸੰਭਾਵੀ ਵਿਕਾਸ ਖੇਤਰ) ਅਤੇ ਸਕੈਫੋਲਡਿੰਗ (ਆਰਜ਼ੀ ਮਦਦ)।</p>
            <p>• <strong>ਡਿਸਲੈਕਸੀਆ:</strong> ਪੜ੍ਹਨ ਦੀ ਸਮੱਸਿਆ। ਡਿਸਗ੍ਰਾਫੀਆ: ਲਿਖਣ ਦੀ ਸਮੱਸਿਆ।</p>
            <p>• <strong>RTE 2009:</strong> 1 ਅਪ੍ਰੈਲ 2010 ਨੂੰ ਲਾਗੂ। 6 ਤੋਂ 14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਮੁਫ਼ਤ ਸਿੱਖਿਆ।</p>
          </div>
        </div>
      `,
      en: `
        <div class="space-y-6 text-slate-200">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🎯 Pedagogy Core Essentials</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Foundational theories for CTET, REET, and ETT: Piaget's stage theory, Vygotsky's socio-cultural constructivism (ZPD & Scaffolding), Kohlberg's moral stages, learning disabilities, and the RTE Act 2009.
            </p>
          </div>

          <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl space-y-2 text-sm text-slate-300">
            <p>• <strong>Piaget's 4 Stages:</strong> Sensorimotor (0-2y, Object Permanence), Preoperational (2-7y, Egocentrism & Animism), Concrete Operational (7-11y, Conservation & Reversibility), Formal Operational (11y+, Abstract & Deductive Reasoning).</p>
            <p>• <strong>Vygotsky:</strong> Zone of Proximal Development (ZPD) and Scaffolding (temporary assistance provided by an MKO).</p>
            <p>• <strong>Learning Disabilities:</strong> Dyslexia (Reading), Dysgraphia (Writing), Dyscalculia (Mathematical arithmetic).</p>
            <p>• <strong>RTE Act 2009:</strong> Enforced on 1 April 2010; Article 21A free education for ages 6–14; mandates 25% EWS quota in private schools and 30:1 primary PTR.</p>
          </div>
        </div>
      `,
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
      {
        title: 'RTE Act 2009 — Complete Analysis for TET Exams',
        channel: 'Teach With Flair',
        youtubeId: 'UDyj1iXKgD0',
        language: 'hi',
        duration: '30 min',
        tags: ['RTE 2009', 'Right to Education', 'CTET', 'HTET', 'REET'],
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
            "title": "CBSE CTET · Child Development & Pedagogy Detailed Syllabus PDF",
            "url": "https://ctet.nic.in/document/information-bulletin-ctet-2024.pdf",
            "language": "English / Hindi",
            "type": "syllabus"
      },
      {
            "title": "ERD Punjab ETT 6635 · Teaching Methodology Official Syllabus PDF",
            "url": "https://erd.punjab.gov.in/ETT6635/Docs/ETT6635Syllabus13_08_2021.pdf",
            "language": "Punjabi / English",
            "type": "syllabus"
      },
      {
            "title": "NCERT · Learning and Development of Children Study Guide",
            "url": "https://ncert.nic.in/pdf/publication/otherpublications/Children_Learning.pdf",
            "language": "English",
            "type": "ncert"
      },
      {
            "title": "Right to Free and Compulsory Education Act (RTE 2009) Gazette",
            "url": "https://dsel.education.gov.in/rte",
            "language": "Hindi / English",
            "type": "official"
      },
      {
            "title": "NIOS D.El.Ed Course 501: Elementary Education in India",
            "url": "https://nios.ac.in/media/documents/dled/501/Block1/Unit1.pdf",
            "language": "Bilingual",
            "type": "nios"
      }
],
    syllabusReference: {
      title: "Punjab ETT Elementary Cadre (6635 / 5994) & PSTET Official CDP Syllabus",
      url: "https://educationrecruitmentboard.com/",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },
};
