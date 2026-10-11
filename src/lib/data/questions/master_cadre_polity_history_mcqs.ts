import type { Question } from '../questions';

export const MASTER_CADRE_POLITY_HISTORY_MCQS: Question[] = [
    // =========================================================================
    // 1. POLITY CONCEPTS & THEORIES (sst-polity-concepts-theories) — 10 MCQs
    // =========================================================================
    {
        id: 'q-pct-1',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'According to Garner’s classical political science definition, which of the following is the exclusive fourth element that distinguishes a "State" from a "Nation" or "Government"?',
            pa: 'ਗਾਰਨਰ (Garner) ਦੀ ਰਾਜਨੀਤੀ ਸ਼ਾਸਤਰ ਦੀ ਪਰਿਭਾਸ਼ਾ ਅਨੁਸਾਰ, ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਚੌਥਾ ਤੱਤ "ਰਾਜ" (State) ਨੂੰ "ਰਾਸ਼ਟਰ" ਜਾਂ "ਸਰਕਾਰ" ਤੋਂ ਵੱਖ ਕਰਦਾ ਹੈ?',
            hi: 'गार्नर की राजनीति विज्ञान परिभाषा के अनुसार, निम्नलिखित में से कौन-सा चौथा तत्व "राज्य" (State) को "राष्ट्र" या "सरकार" से अलग करता है?'
        },
        options: {
            A: { en: 'Common linguistic heritage', pa: 'ਸਾਂਝੀ ਭਾਸ਼ਾਈ ਵਿਰਾਸਤ', hi: 'साझा भाषाई विरासत' },
            B: { en: 'Sovereignty (Internal and External supreme power)', pa: 'ਪ੍ਰਭੂਸੱਤਾ (ਅੰਦਰੂਨੀ ਅਤੇ ਬਾਹਰੀ ਸਰਵਉੱਚ ਸ਼ਕਤੀ)', hi: 'संप्रभुता (आंतरिक एवं बाह्य सर्वोच्च शक्ति)' },
            C: { en: 'A written constitution', pa: 'ਇੱਕ ਲਿਖਤੀ ਸੰਵਿਧਾਨ', hi: 'एक लिखित संविधान' },
            D: { en: 'Membership in the United Nations', pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦੀ ਮੈਂਬਰਸ਼ਿਪ', hi: 'संयुक्त राष्ट्र की सदस्यता' }
        },
        correct: 'B',
        explanation: {
            en: 'A State consists of four mandatory elements: Population, Fixed Territory, Government, and Sovereignty. Sovereignty is the supreme internal and external legal authority unique to the State.',
            pa: 'ਰਾਜ ਦੇ ਚਾਰ ਲਾਜ਼ਮੀ ਤੱਤ ਹਨ: ਜਨਸੰਖਿਆ, ਨਿਸ਼ਚਿਤ ਖੇਤਰ, ਸਰਕਾਰ ਅਤੇ ਪ੍ਰਭੂਸੱਤਾ (Sovereignty)। ਪ੍ਰਭੂਸੱਤਾ ਰਾਜ ਦਾ ਵਿਲੱਖਣ ਤੱਤ ਹੈ।',
            hi: 'राज्य के चार अनिवार्य तत्व हैं: जनसंख्या, निश्चित भू-भाग, सरकार और संप्रभुता (Sovereignty)। संप्रभुता राज्य का विशिष्ट तत्व है।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-pct-2',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'Which model of secularism is followed by the Indian Constitution, as opposed to the strict Western wall-of-separation model?',
            pa: 'ਪੱਛਮੀ ਦੇਸ਼ਾਂ ਦੇ ਸਖ਼ਤ ਵਿਛੋੜੇ ਵਾਲੇ ਮਾਡਲ ਦੇ ਉਲਟ, ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਧਰਮ-ਨਿਰਪੱਖਤਾ (Secularism) ਦੇ ਕਿਸ ਮਾਡਲ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ?',
            hi: 'पश्चिमी देशों के कठोर पृथक्करण मॉडल के विपरीत, भारतीय संविधान धर्मनिरपेक्षता (Secularism) के किस मॉडल का अनुसरण करता है?'
        },
        options: {
            A: { en: 'Complete prohibition of religious symbols in public life', pa: 'ਜਨਤਕ ਜੀਵਨ ਵਿੱਚ ਧਾਰਮਿਕ ਚਿੰਨ੍ਹਾਂ ਤੇ ਪੂਰਨ ਪਾਬੰਦੀ', hi: 'सार्वजनिक जीवन में धार्मिक प्रतीकों पर पूर्ण प्रतिबंध' },
            B: { en: 'Sarva Dharma Sambhava and Principled Distance', pa: 'ਸਰਵ ਧਰਮ ਸੰਭਾਵ ਅਤੇ ਸਿਧਾਂਤਕ ਦੂਰੀ (Principled Distance)', hi: 'सर्व धर्म समभाव और सैद्धांतिक दूरी (Principled Distance)' },
            C: { en: 'Theocratic recognition of the majority religion', pa: 'ਬਹੁਗਿਣਤੀ ਧਰਮ ਨੂੰ ਰਾਜ ਧਰਮ ਵਜੋਂ ਮਾਨਤਾ', hi: 'बहुसंख्यक धर्म को राजधर्म के रूप में मान्यता' },
            D: { en: 'State atheism banning religious institutions', pa: 'ਧਾਰਮਿਕ ਸੰਸਥਾਵਾਂ ਤੇ ਪਾਬੰਦੀ ਲਗਾਉਣ ਵਾਲਾ ਰਾਜ ਨਾਸਤਿਕਵਾद', hi: 'धार्मिक संस्थाओं पर प्रतिबंध लगाने वाला राज्य नास्तिकवाद' }
        },
        correct: 'B',
        explanation: {
            en: 'NCERT Class 11 Political Theory (Ch 8) explains that Indian secularism follows Sarva Dharma Sambhava (equal respect for all religions) and "Principled Distance", allowing the state to intervene to abolish evils like untouchability while protecting minority rights.',
            pa: 'ਭਾਰਤੀ ਧਰਮ-ਨਿਰਪੱਖਤਾ "ਸਰਵ ਧਰਮ ਸੰਭਾਵ" (ਸਾਰੇ ਧਰਮਾਂ ਦਾ ਬਰਾਬਰ ਸਤਿਕਾਰ) ਅਤੇ "ਸਿਧਾਂਤਕ ਦੂਰੀ" (Principled Distance) ਦੇ ਸਿਧਾਂਤ ਤੇ ਅਧਾਰਤ ਹੈ।',
            hi: 'भारतीय धर्मनिरपेक्षता "सर्व धर्म समभाव" और "सैद्धांतिक दूरी" (Principled Distance) पर आधारित है।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-pct-3',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Who authored the seminal 1958 essay "Two Concepts of Liberty", distinguishing between Negative Liberty (absence of external interference) and Positive Liberty (self-mastery)?',
            pa: '1958 ਦਾ ਪ੍ਰਸਿੱਧ ਨਿਬੰਧ "Two Concepts of Liberty" ਕਿਸ ਨੇ ਲਿਖਿਆ, ਜਿਸ ਵਿੱਚ ਨਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ ਅਤੇ ਸਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ ਵਿੱਚ ਅੰਤਰ ਦੱਸਿਆ ਗਿਆ?',
            hi: '1958 का प्रसिद्ध निबंध "Two Concepts of Liberty" किसने लिखा, जिसमें नकारात्मक स्वतंत्रता और सकारात्मक स्वतंत्रता के बीच अंतर स्पष्ट किया गया?'
        },
        options: {
            A: { en: 'Isaiah Berlin', pa: 'ਆਈਜ਼ਾਇਆ ਬਰਲਿਨ (Isaiah Berlin)', hi: 'यशायाह बर्लिन (Isaiah Berlin)' },
            B: { en: 'Jeremy Bentham', pa: 'ਜੇਰੇਮੀ ਬੈਂਥਮ', hi: 'जेरेमी बेंथम' },
            C: { en: 'Robert Nozick', pa: 'ਰਾਬਰਟ ਨੌਜ਼ਿਕ', hi: 'रॉबर्ट नोज़िक' },
            D: { en: 'Antonio Gramsci', pa: 'ਐਂਟੋਨੀਓ ਗ੍ਰਾਮਸ਼ੀ', hi: 'एंटोनियो ग्राम्शी' }
        },
        correct: 'A',
        explanation: {
            en: 'Isaiah Berlin in his 1958 lecture "Two Concepts of Liberty" distinguished between Negative Liberty ("freedom from" external coercion) and Positive Liberty ("freedom to" achieve self-realization).',
            pa: 'ਆਈਜ਼ਾਇਆ ਬਰਲਿਨ (Isaiah Berlin) ਨੇ 1958 ਵਿੱਚ "Two Concepts of Liberty" ਵਿੱਚ ਨਕਾਰਾਤਮਕ ਅਤੇ ਸਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ ਦਾ ਸਿਧਾਂਤ ਪੇਸ਼ ਕੀਤਾ।',
            hi: 'यशायाह बर्लिन (Isaiah Berlin) ने 1958 में "Two Concepts of Liberty" में नकारात्मक और सकारात्मक स्वतंत्रता में अंतर किया।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-pct-4',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'In John Stuart Mill’s treatise "On Liberty" (1859), what is the foundational criterion of the "Harm Principle" for restricting individual liberty?',
            pa: 'ਜੌਨ ਸਟੂਅਰਟ ਮਿੱਲ ਦੀ ਪੁਸਤਕ "On Liberty" (1859) ਵਿੱਚ ਵਿਅਕਤੀਗਤ ਸੁਤੰਤਰਤਾ ਤੇ ਪਾਬੰਦੀ ਲਗਾਉਣ ਲਈ "ਹਾਨੀ ਸਿਧਾਂਤ" (Harm Principle) ਦਾ ਮੁੱਖ ਆਧਾਰ ਕੀ ਹੈ?',
            hi: 'जॉन स्टुअर्ट मिल की पुस्तक "On Liberty" (1859) में व्यक्तिगत स्वतंत्रता को सीमित करने के लिए "हानि सिद्धांत" (Harm Principle) का मुख्य आधार क्या है?'
        },
        options: {
            A: { en: 'The state may restrict any action that offends majority customs', pa: 'ਰਾਜ ਬਹੁਗਿਣਤੀ ਰੀਤੀ-ਰਿਵਾਜਾਂ ਦੇ ਵਿਰੁੱਧ ਕਿਸੇ ਵੀ ਕੰਮ ਨੂੰ ਰੋਕ ਸਕਦਾ ਹੈ', hi: 'राज्य बहुसंख्यक रीति-रिवाजों के विरुद्ध किसी भी कार्य को रोक सकता है' },
            B: { en: 'Power can be rightfully exercised over a member of a civilized community only to prevent other-regarding harm to others', pa: 'ਸ਼ਕਤੀ ਦੀ ਵਰਤੋਂ ਸਿਰਫ਼ ਦੂਜਿਆਂ ਨੂੰ ਹੋਣ ਵਾਲੇ ਨੁਕਸਾਨ (other-regarding actions) ਨੂੰ ਰੋਕਣ ਲਈ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ', hi: 'शक्ति का प्रयोग केवल दूसरों को होने वाली हानि (other-regarding actions) को रोकने के लिए किया जा सकता है' },
            C: { en: 'Self-regarding actions must be policed by religious authorities', pa: 'ਸਵੈ-ਸਬੰਧਤ ਕੰਮਾਂ ਤੇ ਧਾਰਮਿਕ ਸੰਸਥਾਵਾਂ ਦਾ ਕੰਟਰੋਲ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ', hi: 'स्व-संबंधित कार्यों पर धार्मिक संस्थाओं का नियंत्रण होना चाहिए' },
            D: { en: 'Liberty belongs only to property-owning citizens', pa: 'ਸੁਤੰਤਰਤਾ ਸਿਰਫ਼ ਸੰਪਤੀ ਦੇ ਮਾਲਕ ਨਾਗਰਿਕਾਂ ਨੂੰ ਮਿਲਣੀ ਚਾਹੀਦੀ ਹੈ', hi: 'स्वतंत्रता केवल संपत्ति-धारक नागरिकों को मिलनी चाहिए' }
        },
        correct: 'B',
        explanation: {
            en: 'J.S. Mill divided human actions into self-regarding and other-regarding actions. Under his Harm Principle, society/state is justified in interfering only in other-regarding actions that cause concrete harm to others.',
            pa: 'ਜੇ.ਐੱਸ. ਮਿੱਲ ਦੇ "ਹਾਨੀ ਸਿਧਾਂਤ" ਅਨੁਸਾਰ ਰਾਜ ਸਿਰਫ਼ ਉਹਨਾਂ ਕੰਮਾਂ (other-regarding actions) ਵਿੱਚ ਦਖਲ ਦੇ ਸਕਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਨਾਲ ਦੂਜੇ ਵਿਅਕਤੀਆਂ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਦਾ ਹੋਵੇ।',
            hi: 'जे.एस. मिल के "हानि सिद्धांत" के अनुसार राज्य केवल उन कार्यों (other-regarding actions) में हस्तक्षेप कर सकता है जिनसे दूसरों को नुकसान पहुँचता हो।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-pct-5',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'In John Rawls’ "A Theory of Justice" (1971), what does the "Difference Principle" state regarding social and economic inequalities?',
            pa: 'ਜੌਨ ਰੌਲਜ਼ ਦੀ ਪੁਸਤਕ "A Theory of Justice" (1971) ਵਿੱਚ "ਅੰਤਰ ਸਿਧਾਂਤ" (Difference Principle) ਸਮਾਜਿਕ ਅਤੇ ਆਰਥਿਕ ਅਸਮਾਨਤਾਵਾਂ ਬਾਰੇ ਕੀ ਕਹਿੰਦਾ ਹੈ?',
            hi: 'जॉन रॉल्स की पुस्तक "A Theory of Justice" (1971) में "अंतर सिद्धांत" (Difference Principle) सामाजिक और आर्थिक असमानताओं के विषय में क्या कहता है?'
        },
        options: {
            A: { en: 'All citizens must receive identical numerical income regardless of work', pa: 'ਸਾਰੇ ਨਾਗਰਿਕਾਂ ਨੂੰ ਕੰਮ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ ਬਰਾਬਰ ਆਮਦਨ ਮਿਲਣੀ ਚਾਹੀਦੀ ਹੈ', hi: 'सभी नागरिकों को कार्य की परवाह किए बिना समान आय मिलनी चाहिए' },
            B: { en: 'Inequalities are justified only if they work to the greatest benefit of the least-advantaged members of society', pa: 'ਅਸਮਾਨਤਾਵਾਂ ਤਾਂ ਹੀ ਜਾਇਜ਼ ਹਨ ਜੇਕਰ ਉਹ ਸਮਾਜ ਦੇ ਸਭ ਤੋਂ ਪੱਛੜੇ/ਕਮਜ਼ੋਰ ਵਰਗ ਦੇ ਵੱਧ ਤੋਂ ਵੱਧ ਲਾਭ ਲਈ ਹੋਣ', hi: 'असमानताएँ तभी उचित हैं जब वे समाज के सबसे वंचित सदस्यों के अधिकतम लाभ के लिए हों' },
            C: { en: 'Market outcomes are inherently just without any state redistribution', pa: 'ਬਜ਼ਾਰ ਦੇ ਨਤੀਜੇ ਬਿਨਾਂ ਕਿਸੇ ਸਰਕਾਰੀ ਦਖਲ ਦੇ ਹਮੇਸ਼ਾ ਨਿਆਂਪੂਰਨ ਹੁੰਦੇ ਹਨ', hi: 'बाज़ार के परिणाम बिना किसी सरकारी पुनर्वितरण के स्वतः न्यायपूर्ण होते हैं' },
            D: { en: 'Justice is determined solely by hereditary social status', pa: 'ਨਿਆਂ ਸਿਰਫ਼ ਜੱਦੀ ਸਮਾਜਿਕ ਦਰਜੇ ਦੁਆਰਾ ਤੈਅ ਹੁੰਦਾ ਹੈ', hi: 'न्याय केवल वंशानुगत सामाजिक स्थिति से निर्धारित होता है' }
        },
        correct: 'B',
        explanation: {
            en: 'Chosen behind the "Veil of Ignorance", Rawls’ Difference Principle states that socio-economic inequalities are permissible only if attached to offices open to all under fair equality of opportunity and arranged to the greatest benefit of the least advantaged.',
            pa: 'ਜੌਨ ਰੌਲਜ਼ ਦੇ "ਅੰਤਰ ਸਿਧਾਂਤ" (Difference Principle) ਅਨੁਸਾਰ ਸਮਾਜਿਕ-ਆਰਥਿਕ ਅਸਮਾਨਤਾਵਾਂ ਤਾਂ ਹੀ ਜਾਇਜ਼ ਹਨ ਜੇਕਰ ਉਹ ਸਮਾਜ ਦੇ ਸਭ ਤੋਂ ਕਮਜ਼ੋਰ ਵਰਗ (least-advantaged) ਦੇ ਵੱਧ ਤੋਂ ਵੱਧ ਹਿੱਤ ਵਿੱਚ ਹੋਣ।',
            hi: 'जॉन रॉल्स के "अंतर सिद्धांत" (Difference Principle) के अनुसार सामाजिक-आर्थिक असमानताएँ तभी उचित हैं जब वे समाज के सबसे वंचित (least-advantaged) वर्ग के अधिकतम लाभ के लिए हों।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-pct-6',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which political philosopher defined Legal Monistic Sovereignty as the command of a "determinate human superior" in his 1832 work "Lectures on Jurisprudence"?',
            pa: 'ਕਿਸ ਰਾਜਨੀਤਿਕ ਚਿੰਤਕ ਨੇ ਆਪਣੀ 1832 ਦੀ ਰਚਨਾ "Lectures on Jurisprudence" ਵਿੱਚ ਕਾਨੂੰਨੀ ਪ੍ਰਭੂਸੱਤਾ ਨੂੰ "ਇੱਕ ਨਿਸ਼ਚਿਤ ਮਨੁੱਖੀ ਸਰਵਉੱਚ" (determinate human superior) ਦੇ ਹੁਕਮ ਵਜੋਂ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ?',
            hi: 'किस राजनीतिक दार्शनिक ने अपनी 1832 की कृति "Lectures on Jurisprudence" में विधिक एकलवादी संप्रभुता को "एक निश्चित मानवीय श्रेष्ठ" (determinate human superior) के आदेश के रूप में परिभाषित किया?'
        },
        options: {
            A: { en: 'Harold Laski', pa: 'ਹੈਰੋਲਡ ਲਾਸਕੀ', hi: 'हैरोल्ड लास्की' },
            B: { en: 'John Austin', pa: 'ਜੌਨ ਔਸਟਿਨ (John Austin)', hi: 'जॉन ऑस्टिन (John Austin)' },
            C: { en: 'Jean-Jacques Rousseau', pa: 'ਰੂਸੋ (Rousseau)', hi: 'रूसो (Rousseau)' },
            D: { en: 'Robert MacIver', pa: 'ਰਾਬਰਟ ਮੈਕਆਈਵਰ', hi: 'रॉबर्ट मैकाइवर' }
        },
        correct: 'B',
        explanation: {
            en: 'John Austin formulated the Monistic/Legal theory of sovereignty in 1832: if a determinate human superior, not in the habit of obedience to a like superior, receives habitual obedience from the bulk of a society, that superior is sovereign.',
            pa: 'ਜੌਨ ਔਸਟਿਨ (John Austin) ਨੇ 1832 ਵਿੱਚ ਕਾਨੂੰਨੀ/ਇਕਵਾਦੀ ਪ੍ਰਭੂਸੱਤਾ ਦਾ ਸਿਧਾਂਤ ਦਿੱਤਾ, ਜਦਕਿ ਲਾਸਕੀ ਅਤੇ ਮੈਕਆਈਵਰ ਬਹੁਲਵਾਦੀ (Pluralist) ਚਿੰਤਕ ਸਨ।',
            hi: 'जॉन ऑस्टिन (John Austin) ने 1832 में संप्रभुता का एकलवादी/विधिक सिद्धांत प्रतिपादित किया, जबकि लास्की और मैकाइवर बहुलवादी विचारक थे।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-pct-7',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Match the following Social Contract thinkers with their view of the State of Nature and Sovereign:\n1. Thomas Hobbes — (i) General Will (Popular Sovereignty)\n2. John Locke — (ii) Absolute Sovereign (Leviathan)\n3. J.J. Rousseau — (iii) Limited Constitutional Government protecting Life, Liberty, Property',
            pa: 'ਹੇਠ ਲਿਖੇ ਸਮਾਜਿਕ ਸਮਝੌਤੇ (Social Contract) ਦੇ ਚਿੰਤਕਾਂ ਦਾ ਉਹਨਾਂ ਦੇ ਵਿਚਾਰਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:\n1. ਥੌਮਸ ਹੌਬਸ — (i) ਸਧਾਰਨ ਇੱਛਾ (General Will)\n2. ਜੌਨ ਲੌਕ — (ii) ਨਿਰੰਕੁਸ਼ ਪ੍ਰਭੂਸੱਤਾ (Leviathan)\n3. ਰੂਸੋ — (iii) ਜੀਵਨ, ਸੁਤੰਤਰਤਾ ਅਤੇ ਸੰਪਤੀ ਦੀ ਰੱਖਿਆ ਕਰਨ ਵਾਲੀ ਸੀਮਤ ਸਰਕਾਰ',
            hi: 'निम्नलिखित सामाजिक समझौता विचारकों का उनके सिद्धांतों से मिलान करें:\n1. थॉमस हॉब्स — (i) सामान्य इच्छा (General Will)\n2. जॉन लॉक — (ii) निरंकुश संप्रभु (Leviathan)\n3. जे.जे. रूसो — (iii) जीवन, स्वतंत्रता और संपत्ति की रक्षा करने वाली सीमित सरकार'
        },
        options: {
            A: { en: '1-(ii), 2-(iii), 3-(i)', pa: '1-(ii), 2-(iii), 3-(i)', hi: '1-(ii), 2-(iii), 3-(i)' },
            B: { en: '1-(iii), 2-(ii), 3-(i)', pa: '1-(iii), 2-(ii), 3-(i)', hi: '1-(iii), 2-(ii), 3-(i)' },
            C: { en: '1-(i), 2-(iii), 3-(ii)', pa: '1-(i), 2-(iii), 3-(ii)', hi: '1-(i), 2-(iii), 3-(ii)' },
            D: { en: '1-(ii), 2-(i), 3-(iii)', pa: '1-(ii), 2-(i), 3-(iii)', hi: '1-(ii), 2-(i), 3-(iii)' }
        },
        correct: 'A',
        explanation: {
            en: 'Thomas Hobbes (Leviathan, 1651) advocated an absolute sovereign; John Locke (Two Treatises of Government, 1689) championed natural rights to life, liberty, and property under limited government; Rousseau (The Social Contract, 1762) introduced the General Will.',
            pa: 'ਥੌਮਸ ਹੌਬਸ -> ਲੇਵੀਆਥਨ (ਨਿਰੰਕੁਸ਼ ਪ੍ਰਭੂਸੱਤਾ); ਜੌਨ ਲੌਕ -> ਜੀਵਨ, ਸੁਤੰਤਰਤਾ ਅਤੇ ਸੰਪਤੀ ਲਈ ਸੀਮਤ ਸਰਕਾਰ; ਰੂਸੋ -> ਜਨਰਲ ਵਿੱਲ (General Will)।',
            hi: 'थॉमस हॉब्स -> लेवियाथन (निरंकुश संप्रभु); जॉन लॉक -> जीवन, स्वतंत्रता व संपत्ति की रक्षा हेतु सीमित सरकार; रूसो -> सामान्य इच्छा (General Will)।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-pct-8',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Which Italian Marxist thinker introduced the concept of "Cultural Hegemony", arguing that the ruling class maintains power not merely by economic coercion (base) but by manufacturing consent through civil society institutions (superstructure)?',
            pa: 'ਕਿਸ ਇਤਾਲਵੀ ਮਾਰਕਸਵਾਦੀ ਚਿੰਤਕ ਨੇ "ਸੱਭਿਆਚਾਰਕ ਗਲਬੇ" (Cultural Hegemony) ਦਾ ਸਿਧਾਂਤ ਦਿੱਤਾ ਕਿ ਸ਼ਾਸਕ ਵਰਗ ਸਿਰਫ਼ ਆਰਥਿਕ ਤਾਕਤ ਨਾਲ ਨਹੀਂ ਸਗੋਂ ਸਿਵਲ ਸੁਸਾਇਟੀ ਰਾਹੀਂ ਸਹਿਮਤੀ ਬਣਾ ਕੇ ਰਾਜ ਕਰਦਾ ਹੈ?',
            hi: 'किस इतालवी मार्क्सवादी विचारक ने "सांस्कृतिक वर्चस्व" (Cultural Hegemony) की अवधारणा दी कि शासक वर्ग केवल आर्थिक बल से नहीं बल्कि नागरिक समाज की संस्थाओं द्वारा सहमति निर्मित कर शासन करता है?'
        },
        options: {
            A: { en: 'Friedrich Engels', pa: 'ਫ੍ਰੈਡਰਿਕ ਏਂਗਲਜ਼', hi: 'फ़्रेडरिक एंगेल्स' },
            B: { en: 'Antonio Gramsci', pa: 'ਐਂਟੋਨੀਓ ਗ੍ਰਾਮਸ਼ੀ (Antonio Gramsci)', hi: 'एंटोनियो ग्राम्शी (Antonio Gramsci)' },
            C: { en: 'Vladimir Lenin', pa: 'ਵਲਾਦੀਮੀਰ ਲੈਨਿਨ', hi: 'व्लादिमीर लेनिन' },
            D: { en: 'Eduard Bernstein', pa: 'ਐਡਵਰਡ ਬਰਨਸਟਾਈन', hi: 'एडवर्ड बर्नस्टीन' }
        },
        correct: 'B',
        explanation: {
            en: 'In his "Prison Notebooks", Italian Neo-Marxist Antonio Gramsci developed the concept of Hegemony (ideological leadership through schools, media, church, and civil society) to explain why capitalist states survived in Western Europe.',
            pa: 'ਇਤਾਲਵੀ ਨਵ-ਮਾਰਕਸਵਾਦੀ ਐਂਟੋਨੀਓ ਗ੍ਰਾਮਸ਼ੀ (Antonio Gramsci) ਨੇ ਆਪਣੀ ਰਚਨਾ "Prison Notebooks" ਵਿੱਚ ਸੱਭਿਆਚਾਰਕ ਗਲਬੇ (Cultural Hegemony) ਦਾ ਸਿਧਾਂਤ ਦਿੱਤਾ।',
            hi: 'इतालवी नव-मार्क्सवादी एंटोनियो ग्राम्शी (Antonio Gramsci) ने अपनी "Prison Notebooks" में सांस्कृतिक वर्चस्व (Cultural Hegemony) की अवधारणा प्रस्तुत की।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-pct-9',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'In his historic final speech to the Constituent Assembly on 25 November 1949 ("Grammar of Anarchy" speech), Dr. B.R. Ambedkar warned that political democracy cannot last unless there lies at the base of it:',
            pa: '25 ਨਵੰਬਰ 1949 ਨੂੰ ਸੰਵਿਧਾਨ ਸਭਾ ਵਿੱਚ ਆਪਣੇ ਇਤਿਹਾਸਕ ਆਖਰੀ ਭਾਸ਼ਣ ਵਿੱਚ ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਨੇ ਚੇਤਾਵਨੀ ਦਿੱਤੀ ਸੀ ਕਿ ਰਾਜਨੀਤਿਕ ਲੋਕਤੰਤਰ ਉਦੋਂ ਤੱਕ ਕਾਇਮ ਨਹੀਂ ਰਹਿ ਸਕਦਾ ਜਦੋਂ ਤੱਕ ਉਸ ਦੇ ਆਧਾਰ ਵਿੱਚ ਨਾ ਹੋਵੇ:',
            hi: '25 नवंबर 1949 को संविधान सभा में अपने ऐतिहासिक अंतिम भाषण में डॉ. बी.आर. अंबेडकर ने चेतावनी दी थी कि राजनीतिक लोकतंत्र तब तक टिक नहीं सकता जब तक उसके आधार में न हो:'
        },
        options: {
            A: { en: 'A presidential form of executive government', pa: 'ਰਾਸ਼ਟਰਪਤੀ ਪ੍ਰਣਾਲੀ ਵਾਲੀ ਸਰਕਾਰ', hi: 'अध्यक्षात्मक कार्यपालिका प्रणाली' },
            B: { en: 'Social democracy recognizing Liberty, Equality, and Fraternity as an inseparable trinity', pa: 'ਸਮਾਜਿਕ ਲੋਕਤੰਤਰ ਜੋ ਸੁਤੰਤਰਤਾ, ਸਮਾਨਤਾ ਅਤੇ ਭਾਈਚਾਰੇ ਨੂੰ ਅਟੁੱਟ ਤ੍ਰਿਮੂਰਤੀ ਵਜੋਂ ਮੰਨਦਾ ਹੈ', hi: 'सामाजिक लोकतंत्र जो स्वतंत्रता, समानता और बंधुत्व को अविभाज्य त्रिमूर्ति मानता है' },
            C: { en: 'Village republics without parliamentary elections', pa: 'ਸੰਸਦੀ ਚੋਣਾਂ ਤੋਂ ਬਿਨਾਂ ਪੇਂਡੂ ਗਣਰਾਜ', hi: 'संसदीय चुनावों के बिना ग्राम गणराज्य' },
            D: { en: 'Unconditional parliamentary supremacy over Fundamental Rights', pa: 'ਮੌਲਿਕ ਅਧਿਕਾਰਾਂ ਉੱਤੇ ਸੰਸਦ ਦੀ ਨਿਰੰਕੁਸ਼ ਸਰਵਉੱਚਤਾ', hi: 'मौलिक अधिकारों पर संसद की निरंकुश सर्वोच्चता' }
        },
        correct: 'B',
        explanation: {
            en: 'Dr. B.R. Ambedkar emphasized that political democracy ("one man, one vote") must be accompanied by Social Democracy—a way of life recognizing Liberty, Equality, and Fraternity as an inseparable union.',
            pa: 'ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਨੇ ਕਿਹਾ ਸੀ ਕਿ ਰਾਜਨੀਤਿਕ ਲੋਕਤੰਤਰ ਦੀ ਮਜ਼ਬੂਤੀ ਲਈ ਸਮਾਜਿਕ ਲੋਕਤੰਤਰ (ਸੁਤੰਤਰਤਾ, ਸਮਾਨਤਾ ਅਤੇ ਭਾਈਚਾਰੇ ਦੀ ਤ੍ਰਿਮੂਰਤੀ) ਲਾਜ਼ਮੀ ਹੈ।',
            hi: 'डॉ. बी.आर. अंबेडकर ने स्पष्ट किया था कि राजनीतिक लोकतंत्र के स्थायित्व के लिए सामाजिक लोकतंत्र (स्वतंत्रता, समानता और बंधुत्व की अविभाज्य त्रिमूर्ति) अनिवार्य है।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-pct-10',
        topicId: 'sst-polity-concepts-theories',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'In Kautilya’s Arthashastra (Book VI), which of the following sets correctly represents the "Saptanga" (Seven Limbs/Elements) theory of the State?',
            pa: 'ਕੌਟੱਲਿਆ ਦੇ ਅਰਥਸ਼ਾਸਤਰ ਵਿੱਚ ਰਾਜ ਦੇ "ਸਪਤਾਂਗ ਸਿਧਾਂਤ" (Saptanga Theory — ਰਾਜ ਦੇ ਸੱਤ ਅੰਗ) ਵਿੱਚ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੇ ਸੱਤ ਤੱਤ ਸ਼ਾਮਲ ਹਨ?',
            hi: 'कौटिल्य के अर्थशास्त्र में राज्य के "सप्तांग सिद्धांत" (राज्य के सात अंग) को निम्नलिखित में से कौन-सा समूह सही रूप से दर्शाता है?'
        },
        options: {
            A: { en: 'Swami, Amatya, Janapada, Durga, Kosha, Danda (Bala), Mitra', pa: 'ਸਵਾਮੀ, ਅਮਾਤਿਆ, ਜਨਪਦ, ਦੁਰਗ, ਕੋਸ਼, ਦੰਡ (ਬਲ), ਮਿੱਤਰ', hi: 'स्वामी, अमात्य, जनपद, दुर्ग, कोष, दंड (बल), मित्र' },
            B: { en: 'Raja, Purohita, Senapati, Gramani, Sangrahitri, Bhagadugha, Akshavapa', pa: 'ਰਾਜਾ, ਪੁਰੋਹਿਤ, ਸੈਨਾਪਤੀ, ਗ੍ਰਾਮਣੀ, ਸੰਗ੍ਰਹਿਤਰੀ, ਭਾਗਦੁਘ, ਅਕਸ਼ਵਾਪ', hi: 'राजा, पुरोहित, सेनापति, ग्रामणी, संग्रहितृ, भागदुघ, अक्षवाप' },
            C: { en: 'Sabha, Samiti, Vidatha, Gana, Parishad, Ratnin, Janapada', pa: 'ਸਭਾ, ਸਮਿਤੀ, ਵਿਦਥ, ਗਣ, ਪਰਿਸ਼ਦ, ਰਤਨਿਨ, ਜਨਪਦ', hi: 'सभा, समिति, विदथ, गण, परिषद, रत्निन, जनपद' },
            D: { en: 'Dharma, Artha, Kama, Moksha, Nyaya, Niti, Danda', pa: 'ਧਰਮ, ਅਰਥ, ਕਾਮ, ਮੋਕਸ਼, ਨਿਆਂ, ਨੀਤੀ, ਦੰਡ', hi: 'धर्म, अर्थ, काम, मोक्ष, न्याय, नीति, दंड' }
        },
        correct: 'A',
        explanation: {
            en: 'Kautilya’s Saptanga theory defines the 7 organic limbs (Prakritis) of a state: Swami (Ruler), Amatya (Minister/Bureaucracy), Janapada (Territory & Population), Durga (Fortified Capital), Kosha (Treasury), Danda/Bala (Army/Force), and Mitra (Ally).',
            pa: 'ਕੌਟੱਲਿਆ ਦੇ ਸਪਤਾਂਗ ਸਿਧਾਂਤ ਅਨੁਸਾਰ ਰਾਜ ਦੇ 7 ਅੰਗ ਹਨ: ਸਵਾਮੀ (ਰਾਜਾ), ਅਮਾਤਿਆ (ਮੰਤਰੀ), ਜਨਪਦ (ਖੇਤਰ ਤੇ ਲੋਕ), ਦੁਰਗ (ਕਿਲਾ), ਕੋਸ਼ (ਖਜ਼ਾਨਾ), ਦੰਡ/ਬਲ (ਸੈਨਾ) ਅਤੇ ਮਿੱਤਰ (ਸਹਿਯੋਗੀ)।',
            hi: 'कौटिल्य के सप्तांग सिद्धांत के अनुसार राज्य के 7 अंग हैं: स्वामी, अमात्य, जनपद, दुर्ग, कोष, दंड (बल) और मित्र।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },

    // =========================================================================
    // 2. CITIZENSHIP, ELECTIONS & PARTIES (sst-citizenship-election-parties) — 10 MCQs
    // =========================================================================
    {
        id: 'q-cep-1',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'Which Constitutional Amendment Act lowered the minimum voting age for Lok Sabha and State Legislative Assembly elections in India from 21 years to 18 years?',
            pa: 'ਭਾਰਤ ਵਿੱਚ ਲੋਕ ਸਭਾ ਅਤੇ ਰਾਜ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਲਈ ਵੋਟ ਪਾਉਣ ਦੀ ਘੱਟੋ-ਘੱਟ ਉਮਰ 21 ਸਾਲ ਤੋਂ ਘਟਾ ਕੇ 18 ਸਾਲ ਕਿਸ ਸੰਵਿਧਾਨਕ ਸੋਧ ਦੁਆਰਾ ਕੀਤੀ ਗਈ?',
            hi: 'भारत में लोकसभा और राज्य विधानसभा चुनावों के लिए मतदान की न्यूनतम आयु 21 वर्ष से घटाकर 18 वर्ष किस संविधान संशोधन अधिनियम द्वारा की गई?'
        },
        options: {
            A: { en: '42nd Amendment Act, 1976', pa: '42ਵੀਂ ਸੋਧ ਐਕਟ, 1976', hi: '42वाँ संशोधन अधिनियम, 1976' },
            B: { en: '52nd Amendment Act, 1985', pa: '52ਵੀਂ ਸੋਧ ਐਕਟ, 1985', hi: '52वाँ संशोधन अधिनियम, 1985' },
            C: { en: '61st Amendment Act, 1988 (effective 1989)', pa: '61ਵੀਂ ਸੋਧ ਐਕਟ, 1988 (ਲਾਗੂ 1989)', hi: '61वाँ संशोधन अधिनियम, 1988 (प्रभावी 1989)' },
            D: { en: '86th Amendment Act, 2002', pa: '86ਵੀਂ ਸੋਧ ਐਕਟ, 2002', hi: '86वाँ संशोधन अधिनियम, 2002' }
        },
        correct: 'C',
        explanation: {
            en: 'The 61st Constitutional Amendment Act, 1988 (which came into force in March 1989) amended Article 326 of the Constitution to reduce the voting age from 21 years to 18 years.',
            pa: '61ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1988 (ਲਾਗੂ 1989) ਰਾਹੀਂ ਅਨੁਛੇਦ 326 ਵਿੱਚ ਸੋਧ ਕਰਕੇ ਵੋਟ ਪਾਉਣ ਦੀ ਉਮਰ 21 ਸਾਲ ਤੋਂ ਘਟਾ ਕੇ 18 ਸਾਲ ਕੀਤੀ ਗਈ।',
            hi: '61वें संविधान संशोधन अधिनियम, 1988 (प्रभावी 1989) द्वारा अनुच्छेद 326 में संशोधन कर मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष की गई।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-cep-2',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'Which Part and Articles of the Indian Constitution deal with Citizenship?',
            pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦਾ ਕਿਹੜਾ ਭਾਗ ਅਤੇ ਅਨੁਛੇਦ ਨਾਗਰਿਕਤਾ (Citizenship) ਨਾਲ ਸਬੰਧਤ ਹਨ?',
            hi: 'भारतीय संविधान का कौन-सा भाग और अनुच्छेद नागरिकता (Citizenship) से संबंधित हैं?'
        },
        options: {
            A: { en: 'Part I (Articles 1 to 4)', pa: 'ਭਾਗ I (ਅਨੁਛੇਦ 1 ਤੋਂ 4)', hi: 'भाग I (अनुच्छेद 1 से 4)' },
            B: { en: 'Part II (Articles 5 to 11)', pa: 'ਭਾਗ II (ਅਨੁਛੇਦ 5 ਤੋਂ 11)', hi: 'भाग II (अनुच्छेद 5 से 11)' },
            C: { en: 'Part III (Articles 12 to 35)', pa: 'ਭਾਗ III (ਅਨੁਛੇਦ 12 ਤੋਂ 35)', hi: 'भाग III (अनुच्छेद 12 से 35)' },
            D: { en: 'Part XV (Articles 324 to 329)', pa: 'ਭਾਗ XV (ਅਨੁਛੇਦ 324 ਤੋਂ 329)', hi: 'भाग XV (अनुच्छेद 324 से 329)' }
        },
        correct: 'B',
        explanation: {
            en: 'Part II of the Indian Constitution (Articles 5 to 11) deals with Citizenship at the commencement of the Constitution and empowers Parliament (Article 11) to regulate citizenship by law.',
            pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦਾ ਭਾਗ II (ਅਨੁਛੇਦ 5 ਤੋਂ 11) ਨਾਗਰਿਕਤਾ ਨਾਲ ਸਬੰਧਤ ਹੈ ਅਤੇ ਅਨੁਛੇਦ 11 ਸੰਸਦ ਨੂੰ ਨਾਗਰਿਕਤਾ ਸਬੰਧੀ ਕਾਨੂੰਨ ਬਣਾਉਣ ਦੀ ਸ਼ਕਤੀ ਦਿੰਦਾ ਹੈ।',
            hi: 'भारतीय संविधान का भाग II (अनुच्छेद 5 से 11) नागरिकता से संबंधित है और अनुच्छेद 11 संसद को नागरिकता संबंधी कानून बनाने का अधिकार देता है।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-cep-3',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which of the following Fundamental Rights are available EXCLUSIVELY to Indian citizens and NOT to foreigners (aliens)?',
            pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੇ ਮੌਲਿਕ ਅਧਿਕਾਰ ਸਿਰਫ਼ ਭਾਰਤੀ ਨਾਗਰਿਕਾਂ ਨੂੰ ਹੀ ਪ੍ਰਾਪਤ ਹਨ ਅਤੇ ਵਿਦੇਸ਼ੀਆਂ ਨੂੰ ਨਹੀਂ?',
            hi: 'निम्नलिखित में से कौन-से मौलिक अधिकार केवल भारतीय नागरिकों को प्राप्त हैं और विदेशियों को नहीं?'
        },
        options: {
            A: { en: 'Articles 14, 20, 21, 21A, and 25', pa: 'ਅਨੁਛੇਦ 14, 20, 21, 21A ਅਤੇ 25', hi: 'अनुच्छेद 14, 20, 21, 21A और 25' },
            B: { en: 'Articles 15, 16, 19, 29, and 30', pa: 'ਅਨੁਛੇਦ 15, 16, 19, 29 ਅਤੇ 30', hi: 'अनुच्छेद 15, 16, 19, 29 और 30' },
            C: { en: 'Articles 14, 15, 21, 23, and 24', pa: 'ਅਨੁਛੇਦ 14, 15, 21, 23 ਅਤੇ 24', hi: 'अनुच्छेद 14, 15, 21, 23 और 24' },
            D: { en: 'Articles 17, 18, 20, 22, and 27', pa: 'ਅਨੁਛੇਦ 17, 18, 20, 22 ਅਤੇ 27', hi: 'अनुच्छेद 17, 18, 20, 22 और 27' }
        },
        correct: 'B',
        explanation: {
            en: 'Five Fundamental Rights—Articles 15, 16, 19, 29, and 30—are available exclusively to citizens of India and are not enjoyed by foreigners.',
            pa: 'ਪੰਜ ਮੌਲਿਕ ਅਧਿਕਾਰ — ਅਨੁਛੇਦ 15, 16, 19, 29 ਅਤੇ 30 — ਸਿਰਫ਼ ਭਾਰਤੀ ਨਾਗਰਿਕਾਂ ਨੂੰ ਹੀ ਪ੍ਰਾਪਤ ਹਨ, ਵਿਦੇਸ਼ੀਆਂ ਨੂੰ ਨਹੀਂ।',
            hi: 'पाँच मौलिक अधिकार — अनुच्छेद 15, 16, 19, 29 और 30 — केवल भारतीय नागरिकों को ही प्राप्त हैं, विदेशियों को नहीं।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-cep-4',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Under the Citizenship Act, 1955, which of the following correctly lists the five statutory modes of acquiring Indian citizenship and three modes of losing it?',
            pa: 'ਨਾਗਰਿਕਤਾ ਐਕਟ, 1955 ਦੇ ਤਹਿਤ ਭਾਰਤੀ ਨਾਗਰਿਕਤਾ ਪ੍ਰਾਪਤ ਕਰਨ ਦੇ 5 ਤਰੀਕੇ ਅਤੇ ਗੁਆਉਣ ਦੇ 3 ਤਰੀਕੇ ਕਿਹੜੇ ਹਨ?',
            hi: 'नागरिकता अधिनियम, 1955 के अंतर्गत भारतीय नागरिकता प्राप्त करने की 5 विधियाँ और समाप्ति की 3 विधियाँ कौन-सी हैं?'
        },
        options: {
            A: { en: 'Acquisition: Birth, Descent, Registration, Naturalisation, Incorporation of Territory | Loss: Renunciation, Termination, Deprivation', pa: 'ਪ੍ਰਾਪਤੀ: ਜਨਮ, ਵੰਸ਼, ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਦੇਸੀਕਰਨ, ਖੇਤਰ ਦਾ ਰਲੇਵਾਂ | ਸਮਾਪਤੀ: ਤਿਆਗ, ਬਰਖਾਸਤਗੀ, ਵਾਂਝੇ ਕਰਨਾ', hi: 'अर्जन: जन्म, वंश, पंजीकरण, देशीयकरण, क्षेत्र समाविष्टि | समाप्ति: परित्याग, बर्खास्तगी, वंचन' },
            B: { en: 'Acquisition: Birth, Marriage, Property Purchase, Naturalisation, OCI | Loss: Emigration, Exile, Imprisonment', pa: 'ਪ੍ਰਾਪਤੀ: ਜਨਮ, ਵਿਆਹ, ਸੰਪਤੀ ਖਰੀਦ, ਦੇਸੀਕਰਨ, OCI | ਸਮਾਪਤੀ: ਪ੍ਰਵਾਸ, ਦੇਸ਼-ਨਿਕਾਲਾ, ਕੈਦ', hi: 'अर्जन: जन्म, विवाह, संपत्ति खरीद, देशीयकरण, OCI | समाप्ति: प्रवास, निर्वासन, कारावास' },
            C: { en: 'Acquisition: Domicile, Tax Payment, Registration, Descent, Birth | Loss: Defection, Insolvency, Deprivation', pa: 'ਪ੍ਰਾਪਤੀ: ਡੋਮੀਸਾਈਲ, ਟੈਕਸ, ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਵੰਸ਼, ਜਨਮ | ਸਮਾਪਤੀ: ਦਲ-ਬਦਲੀ, ਦਿਵਾਲੀਆਪਨ, ਵਾਂਝੇ ਕਰਨਾ', hi: 'अर्जन: अधिवास, कर भुगतान, पंजीकरण, वंश, जन्म | समाप्ति: दलबदल, दिवालियापन, वंचन' },
            D: { en: 'Acquisition: Birth, Descent, Visa, Green Card, Registration | Loss: Renunciation, Deportation, Extradition', pa: 'ਪ੍ਰਾਪਤੀ: ਜਨਮ, ਵੰਸ਼, ਵੀਜ਼ਾ, ਗ੍ਰੀਨ ਕਾਰਡ, ਰਜਿਸਟ੍ਰੇਸ਼ਨ | ਸਮਾਪਤੀ: ਤਿਆਗ, ਡਿਪੋਰਟੇਸ਼ਨ, ਹਵਾਲਗੀ', hi: 'अर्जन: जन्म, वंश, वीज़ा, ग्रीन कार्ड, पंजीकरण | समाप्ति: परित्याग, निर्वासन, प्रत्यर्पण' }
        },
        correct: 'A',
        explanation: {
            en: 'Sections 3–7 of the Citizenship Act, 1955 prescribe 5 ways to acquire citizenship (Birth, Descent, Registration, Naturalisation, Incorporation of Territory) and Sections 8–10 prescribe 3 ways of loss (Renunciation, Termination, Deprivation).',
            pa: 'ਨਾਗਰਿਕਤਾ ਐਕਟ 1955 ਦੀਆਂ ਧਾਰਾਵਾਂ 3–7 ਅਨੁਸਾਰ ਪ੍ਰਾਪਤੀ ਦੇ 5 ਤਰੀਕੇ (ਜਨਮ, ਵੰਸ਼, ਰਜਿਸਟ੍ਰੇਸ਼ਨ, ਦੇਸੀਕਰਨ, ਖੇਤਰ ਰਲੇਵਾਂ) ਅਤੇ ਧਾਰਾਵਾਂ 8–10 ਅਨੁਸਾਰ ਗੁਆਉਣ ਦੇ 3 ਤਰੀਕੇ (Renunciation, Termination, Deprivation) ਹਨ।',
            hi: 'नागरिकता अधिनियम 1955 की धारा 3–7 में अर्जन के 5 तरीके और धारा 8–10 में समाप्ति के 3 तरीके (Renunciation, Termination, Deprivation) दिए गए हैं।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-cep-5',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Under Article 324 of the Constitution, how do the security of tenure provisions for the Chief Election Commissioner (CEC) differ from those of the other Election Commissioners (ECs)?',
            pa: 'ਸੰਵਿਧਾਨ ਦੇ ਅਨੁਛੇਦ 324 ਤਹਿਤ ਮੁੱਖ ਚੋਣ ਕਮਿਸ਼ਨਰ (CEC) ਅਤੇ ਬਾਕੀ ਚੋਣ ਕਮਿਸ਼ਨਰਾਂ (ECs) ਨੂੰ ਅਹੁਦੇ ਤੋਂ ਹਟਾਉਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?',
            hi: 'संविधान के अनुच्छेद 324 के अंतर्गत मुख्य चुनाव आयुक्त (CEC) और अन्य चुनाव आयुक्तों (ECs) को पद से हटाने की प्रक्रिया में क्या अंतर है?'
        },
        options: {
            A: { en: 'Both CEC and ECs can be removed by the President at pleasure without any inquiry', pa: 'ਦੋਵਾਂ ਨੂੰ ਰਾਸ਼ਟਰਪਤੀ ਬਿਨਾਂ ਕਿਸੇ ਜਾਂਚ ਦੇ ਆਪਣੀ ਮਰਜ਼ੀ ਨਾਲ ਹਟਾ ਸਕਦਾ ਹੈ', hi: 'दोनों को राष्ट्रपति बिना किसी जाँच के अपनी इच्छा से हटा सकते हैं' },
            B: { en: 'The CEC can be removed only in the manner and on the grounds of a Supreme Court Judge, whereas other ECs can be removed by the President on the recommendation of the CEC', pa: 'CEC ਨੂੰ ਸਿਰਫ਼ ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਜੱਜ ਵਾਂਗ ਹੀ ਹਟਾਇਆ ਜਾ ਸਕਦਾ ਹੈ, ਜਦਕਿ ਬਾਕੀ ECs ਨੂੰ CEC ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਰਾਸ਼ਟਰਪਤੀ ਹਟਾ ਸਕਦਾ ਹੈ', hi: 'CEC को केवल सर्वोच्च न्यायालय के न्यायाधीश की भांति हटाया जा सकता है, जबकि अन्य ECs को CEC की सिफ़ारिश पर राष्ट्रपति हटा सकते हैं' },
            C: { en: 'Both CEC and ECs require a two-thirds majority resolution of State Assemblies', pa: 'ਦੋਵਾਂ ਨੂੰ ਹਟਾਉਣ ਲਈ ਰਾਜ ਵਿਧਾਨ ਸਭਾਵਾਂ ਦੇ ਦੋ-ਤਿਹਾਈ ਬਹੁਮਤ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ', hi: 'दोनों को हटाने के लिए राज्य विधानसभाओं के दो-तिहाई बहुमत की आवश्यकता होती है' },
            D: { en: 'The CEC is removed by the Prime Minister, while ECs are removed by the Chief Justice of India', pa: 'CEC ਨੂੰ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਅਤੇ ECs ਨੂੰ ਭਾਰਤ ਦੇ ਚੀਫ਼ ਜਸਟਿਸ ਹਟਾਉਂਦੇ ਹਨ', hi: 'CEC को प्रधानमंत्री और ECs को भारत के मुख्य न्यायाधीश हटाते हैं' }
        },
        correct: 'B',
        explanation: {
            en: 'Under the proviso to Article 324(5), the Chief Election Commissioner cannot be removed except in like manner and on the like grounds as a Judge of the Supreme Court, whereas any other Election Commissioner or Regional Commissioner cannot be removed except on the recommendation of the CEC.',
            pa: 'ਅਨੁਛੇਦ 324(5) ਅਨੁਸਾਰ ਮੁੱਖ ਚੋਣ ਕਮਿਸ਼ਨਰ (CEC) ਨੂੰ ਸਿਰਫ਼ ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਜੱਜ ਵਾਂਗ ਸੰਸਦ ਦੇ ਵਿਸ਼ੇਸ਼ ਬਹੁਮਤ ਨਾਲ ਹਟਾਇਆ ਜਾ ਸਕਦਾ ਹੈ, ਜਦਕਿ ਬਾਕੀ ਚੋਣ ਕਮਿਸ਼ਨਰਾਂ ਨੂੰ CEC ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਰਾਸ਼ਟਰਪਤੀ ਹਟਾ ਸਕਦਾ ਹੈ।',
            hi: 'अनुच्छेद 324(5) के अनुसार मुख्य चुनाव आयुक्त (CEC) को केवल सर्वोच्च न्यायालय के न्यायाधीश की भांति हटाया जा सकता है, जबकि अन्य चुनाव आयुक्तों को CEC की सिफ़ारिश पर राष्ट्रपति द्वारा हटाया जा सकता है।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-cep-6',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which Constitutional Amendment Act froze the total number of seats in the Lok Sabha and State Legislative Assemblies on the basis of the 1971 Census until the year 2026, while allowing readjustment of territorial constituencies (including SC/ST seats) based on the 2001 Census?',
            pa: 'ਕਿਸ ਸੰਵਿਧਾਨਕ ਸੋਧ ਨੇ ਲੋਕ ਸਭਾ ਅਤੇ ਵਿਧਾਨ ਸਭਾਵਾਂ ਦੀਆਂ ਕੁੱਲ ਸੀਟਾਂ ਦੀ ਗਿਣਤੀ 1971 ਦੀ ਮਰਦਮਸ਼ੁਮਾਰੀ ਦੇ ਆਧਾਰ ਤੇ 2026 ਤੱਕ ਸਥਿਰ (freeze) ਕਰ ਦਿੱਤੀ, ਪਰ 2001 ਦੀ ਮਰਦਮਸ਼ੁਮਾਰੀ ਦੇ ਆਧਾਰ ਤੇ ਹਲਕਾਬੰਦੀ (Delimitation) ਦੀ ਇਜਾਜ਼ਤ ਦਿੱਤੀ?',
            hi: 'किस संविधान संशोधन अधिनियम ने लोकसभा और विधानसभाओं की कुल सीटों की संख्या को 1971 की जनगणना के आधार पर 2026 तक स्थिर (freeze) कर दिया, किंतु 2001 की जनगणना के आधार पर परिसीमन की अनुमति दी?'
        },
        options: {
            A: { en: '84th Amendment Act, 2001 (and 87th Amendment Act, 2003 for 2001 Census)', pa: '84ਵੀਂ ਸੋਧ ਐਕਟ, 2001 (ਅਤੇ 2001 ਮਰਦਮਸ਼ੁਮਾਰੀ ਲਈ 87ਵੀਂ ਸੋਧ, 2003)', hi: '84वाँ संशोधन अधिनियम, 2001 (तथा 2001 जनगणना हेतु 87वाँ संशोधन, 2003)' },
            B: { en: '91st Amendment Act, 2003', pa: '91ਵੀਂ ਸੋਧ ਐਕਟ, 2003', hi: '91वाँ संशोधन अधिनियम, 2003' },
            C: { en: '73rd Amendment Act, 1992', pa: '73ਵੀਂ ਸੋਧ ਐਕਟ, 1992', hi: '73वाँ संशोधन अधिनियम, 1992' },
            D: { en: '97th Amendment Act, 2011', pa: '97ਵੀਂ ਸੋਧ ਐਕਟ, 2011', hi: '97वाँ संशोधन अधिनियम, 2011' }
        },
        correct: 'A',
        explanation: {
            en: 'The 84th Amendment Act, 2001 extended the freeze on the total number of seats in the Lok Sabha and State Assemblies until the first census after 2026, while the 87th Amendment Act, 2003 updated the census reference for internal constituency delimitation and SC/ST seat reservation to the 2001 Census (executed by the 4th Delimitation Commission under Justice Kuldip Singh).',
            pa: '84ਵੀਂ ਸੋਧ ਐਕਟ, 2001 ਨੇ ਕੁੱਲ ਸੀਟਾਂ ਦੀ ਗਿਣਤੀ 2026 ਤੱਕ ਸਥਿਰ ਰੱਖੀ, ਜਦਕਿ 87ਵੀਂ ਸੋਧ ਐਕਟ, 2003 ਨੇ 2001 ਦੀ ਮਰਦਮਸ਼ੁਮਾਰੀ ਦੇ ਆਧਾਰ ਤੇ ਹਲਕਿਆਂ ਦੇ ਪੁਨਰਗਠਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੱਤੀ।',
            hi: '84वें संशोधन अधिनियम, 2001 ने कुल सीटों की संख्या को 2026 तक स्थिर रखा, जबकि 87वें संशोधन अधिनियम, 2003 ने 2001 की जनगणना के आधार पर आंतरिक परिसीमन की अनुमति दी।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-cep-7',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'What two major changes did the 91st Constitutional Amendment Act, 2003 introduce to the Anti-Defection Law (Tenth Schedule) and Article 75/164?',
            pa: '91ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 2003 ਨੇ ਦਲ-ਬਦਲੀ ਵਿਰੋਧੀ ਕਾਨੂੰਨ (10ਵੀਂ ਅਨੁਸੂਚੀ) ਅਤੇ ਅਨੁਛੇਦ 75/164 ਵਿੱਚ ਕਿਹੜੀਆਂ ਦੋ ਵੱਡੀਆਂ ਤਬਦੀਲੀਆਂ ਕੀਤੀਆਂ?',
            hi: '91वें संविधान संशोधन अधिनियम, 2003 ने दलबदल विरोधी कानून (दसवीं अनुसूची) और अनुच्छेद 75/164 में कौन-से दो प्रमुख परिवर्तन किए?'
        },
        options: {
            A: { en: 'Deleted the 1/3rd party-split exemption (leaving only 2/3rd merger valid) and capped the Council of Ministers at 15% of the strength of the Lower House', pa: '1/3 ਪਾਰਟੀ-ਵੰਡ ਦੀ ਛੋਟ ਖਤਮ ਕੀਤੀ (ਸਿਰਫ਼ 2/3 ਰਲੇਵਾਂ ਜਾਇਜ਼ ਰੱਖਿਆ) ਅਤੇ ਮੰਤਰੀ ਪ੍ਰੀਸ਼ਦ ਦਾ ਆਕਾਰ ਹੇਠਲੇ ਸਦਨ ਦੀ ਕੁੱਲ ਗਿਣਤੀ ਦੇ 15% ਤੱਕ ਸੀਮਤ ਕੀਤਾ', hi: '1/3 पार्टी-विभाजन की छूट समाप्त की (केवल 2/3 विलय वैध रखा) और मंत्रिपरिषद का आकार निचले सदन की कुल संख्या के 15% तक सीमित किया' },
            B: { en: 'Transferred anti-defection adjudication from the Speaker to the Election Commission and banned independent candidates', pa: 'ਦਲ-ਬਦਲੀ ਦਾ ਫੈਸਲਾ ਸਪੀਕਰ ਤੋਂ ਚੋਣ ਕਮਿਸ਼ਨ ਨੂੰ ਸੌਂਪਿਆ ਅਤੇ ਆਜ਼ਾਦ ਉਮੀਦਵਾਰਾਂ ਤੇ ਪਾਬੰਦੀ ਲਗਾਈ', hi: 'दलबदल का निर्णय स्पीकर से चुनाव आयोग को सौंपा और निर्दलीय उम्मीदवारों पर प्रतिबंध लगाया' },
            C: { en: 'Allowed nominated members to join any political party after 2 years and fixed minimum cabinet size at 25%', pa: 'ਨਾਮਜ਼ਦ ਮੈਂਬਰਾਂ ਨੂੰ 2 ਸਾਲ ਬਾਅਦ ਪਾਰਟੀ ਬਦਲਣ ਦੀ ਛੋਟ ਦਿੱਤੀ ਅਤੇ ਮੰਤਰੀ ਮੰਡਲ ਦਾ ਘੱਟੋ-ਘੱਟ ਆਕਾਰ 25% ਕੀਤਾ', hi: 'मनोनीत सदस्यों को 2 वर्ष बाद दल में शामिल होने की अनुमति दी और मंत्रिमंडल का न्यूनतम आकार 25% किया' },
            D: { en: 'Exempted Rajya Sabha elections from party whips and abolished judicial review of Speaker decisions', pa: 'ਰਾਜ ਸਭਾ ਚੋਣਾਂ ਨੂੰ ਪਾਰਟੀ ਵ੍ਹਿਪ ਤੋਂ ਮੁਕਤ ਕੀਤਾ ਅਤੇ ਸਪੀਕਰ ਦੇ ਫੈਸਲੇ ਦੀ ਨਿਆਂਇਕ ਸਮੀਖਿਆ ਖਤਮ ਕੀਤੀ', hi: 'राज्यसभा चुनावों को पार्टी व्हिप से मुक्त किया और स्पीकर के निर्णय की न्यायिक समीक्षा समाप्त की' }
        },
        correct: 'A',
        explanation: {
            en: 'The 91st Amendment Act, 2003 omitted Paragraph 3 of the Tenth Schedule (which had protected one-third splits), leaving only a two-thirds merger exemption (Para 4), and amended Articles 75(1A) and 164(1A) to cap the Council of Ministers at 15% of the strength of the Lok Sabha / State Assembly (minimum 12 in states).',
            pa: '91ਵੀਂ ਸੋਧ (2003) ਨੇ 10ਵੀਂ ਅਨੁਸੂਚੀ ਵਿੱਚੋਂ 1/3 ਵੰਡ ਦੀ ਛੋਟ ਖਤਮ ਕਰ ਦਿੱਤੀ (ਸਿਰਫ਼ 2/3 ਰਲੇਵਾਂ ਬਰਕਰਾਰ ਰੱਖਿਆ) ਅਤੇ ਮੰਤਰੀ ਮੰਡਲ ਦਾ ਆਕਾਰ ਲੋਕ ਸਭਾ/ਵਿਧਾਨ ਸਭਾ ਦੀ ਕੁੱਲ ਗਿਣਤੀ ਦੇ 15% (ਰਾਜਾਂ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ 12) ਤੱਕ ਸੀਮਤ ਕੀਤਾ।',
            hi: '91वें संशोधन (2003) ने 10वीं अनुसूची से 1/3 विभाजन की छूट समाप्त कर दी (केवल 2/3 विलय वैध रखा) और मंत्रिपरिषद का आकार लोकसभा/विधानसभा की कुल सदस्य संख्या के 15% (राज्यों में न्यूनतम 12) तक सीमित किया।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-cep-8',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'In which landmark 1992 judgment did the Supreme Court rule that the Speaker/Chairman acting under the Tenth Schedule functions as a Tribunal whose decisions are subject to Judicial Review under Articles 136, 226, and 227?',
            pa: '1992 ਦੇ ਕਿਸ ਇਤਿਹਾਸਕ ਫੈਸਲੇ ਵਿੱਚ ਸੁਪਰੀਮ ਕੋਰਟ ਨੇ ਕਿਹਾ ਕਿ 10ਵੀਂ ਅਨੁਸੂਚੀ ਤਹਿਤ ਫੈਸਲਾ ਕਰਦਾ ਹੋਇਆ ਸਪੀਕਰ/ਚੇਅਰਮੈਨ ਇੱਕ ਟ੍ਰਿਬਿਊਨਲ ਵਜੋਂ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਉਸ ਦੇ ਫੈਸਲੇ ਨਿਆਂਇਕ ਸਮੀਖਿਆ (Judicial Review) ਦੇ ਘੇਰੇ ਵਿੱਚ ਆਉਂਦੇ ਹਨ?',
            hi: '1992 के किस ऐतिहासिक निर्णय में सर्वोच्च न्यायालय ने व्यवस्था दी कि दसवीं अनुसूची के अंतर्गत कार्य करते समय अध्यक्ष/सभापति एक अधिकरण (Tribunal) के रूप में कार्य करता है और उसका निर्णय न्यायिक समीक्षा के अधीन है?'
        },
        options: {
            A: { en: 'Kihoto Hollohan v. Zachillhu (1992)', pa: 'ਕਿਹੋਤੋ ਹੋਲੋਹਾਨ ਬਨਾਮ ਜ਼ਾਚਿਲਹੂ (Kihoto Hollohan v. Zachillhu, 1992)', hi: 'किहोतो होलोहान बनाम जाचिल्हू (Kihoto Hollohan v. Zachillhu, 1992)' },
            B: { en: 'Lily Thomas v. Union of India (2013)', pa: 'ਲਿਲੀ ਥੌਮਸ ਬਨਾਮ ਭਾਰਤ ਸੰਘ (2013)', hi: 'लिली थॉमस बनाम भारत संघ (2013)' },
            C: { en: 'PUCL v. Union of India (2013)', pa: 'ਪੀ.ਯੂ.ਸੀ.ਐੱਲ. ਬਨਾਮ ਭਾਰਤ ਸੰਘ (2013)', hi: 'पीयूसीएल बनाम भारत संघ (2013)' },
            D: { en: 'Indira Nehru Gandhi v. Raj Narain (1975)', pa: 'ਇੰਦਰਾ ਨਹਿਰੂ ਗਾਂਧੀ ਬਨਾਮ ਰਾਜ ਨਾਰਾਇਣ (1975)', hi: 'इंदिरा नेहरू गांधी बनाम राज नारायण (1975)' }
        },
        correct: 'A',
        explanation: {
            en: 'In Kihoto Hollohan v. Zachillhu (1992), a 5-judge Constitution Bench upheld the validity of the 52nd Amendment (Tenth Schedule) except Paragraph 7 (which barred court jurisdiction), holding that the Speaker acts as a tribunal subject to judicial review on grounds of mala fides or perversity.',
            pa: 'ਕਿਹੋਤੋ ਹੋਲੋਹਾਨ ਬਨਾਮ ਜ਼ਾਚਿਲਹੂ (1992) ਕੇਸ ਵਿੱਚ ਸੁਪਰੀਮ ਕੋਰਟ ਨੇ ਪੈਰਾ 7 ਨੂੰ ਰੱਦ ਕਰਦਿਆਂ ਫੈਸਲਾ ਦਿੱਤਾ ਕਿ 10ਵੀਂ ਅਨੁਸੂਚੀ ਤਹਿਤ ਸਪੀਕਰ ਦਾ ਫੈਸਲਾ ਹਾਈ ਕੋਰਟ ਅਤੇ ਸੁਪਰੀਮ ਕੋਰਟ ਦੀ ਨਿਆਂਇਕ ਸਮੀਖਿਆ ਦੇ ਅਧੀਨ ਹੈ।',
            hi: 'किहोतो होलोहान बनाम जाचिल्हू (1992) मामले में सर्वोच्च न्यायालय ने पैरा 7 को असंवैधानिक घोषित करते हुए निर्णय दिया कि 10वीं अनुसूची के तहत स्पीकर का निर्णय न्यायिक समीक्षा के अधीन है।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-cep-9',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Under Paragraph 6B of the Election Symbols (Reservation and Allotment) Order, 1968, which of the following is NOT one of the three alternative conditions for a political party to be recognized as a "National Party"?',
            pa: 'ਚੋਣ ਨਿਸ਼ਾਨ (ਰਾਖਵਾਂਕਰਨ ਅਤੇ ਅਲਾਟਮੈਂਟ) ਆਦੇਸ਼, 1968 ਦੇ ਪੈਰਾ 6B ਤਹਿਤ ਕਿਸੇ ਸਿਆਸੀ ਪਾਰਟੀ ਨੂੰ "ਰਾਸ਼ਟਰੀ ਪਾਰਟੀ" (National Party) ਵਜੋਂ ਮਾਨਤਾ ਮਿਲਣ ਦੀਆਂ ਤਿੰਨ ਵਿਕਲਪਿਕ ਸ਼ਰਤਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਸ਼ਰਤ ਸ਼ਾਮਲ ਨਹੀਂ ਹੈ?',
            hi: 'चुनाव चिह्न (आरक्षण एवं आवंटन) आदेश, 1968 के पैरा 6B के अंतर्गत किसी राजनीतिक दल को "राष्ट्रीय दल" (National Party) के रूप में मान्यता मिलने की तीन वैकल्पिक शर्तों में से कौन-सी शामिल नहीं है?'
        },
        options: {
            A: { en: '6% valid votes in 4 or more states in Lok Sabha/Assembly elections PLUS at least 4 Lok Sabha seats', pa: '4 ਜਾਂ ਵੱਧ ਰਾਜਾਂ ਵਿੱਚ 6% ਜਾਇਜ਼ ਵੋਟਾਂ ਅਤੇ ਘੱਟੋ-ਘੱਟ 4 ਲੋਕ ਸਭਾ ਸੀਟਾਂ', hi: '4 या अधिक राज्यों में 6% वैध मत तथा कम से कम 4 लोकसभा सीटें' },
            B: { en: 'Winning at least 2% of total Lok Sabha seats (11 seats) elected from at least 3 different states', pa: 'ਘੱਟੋ-ਘੱਟ 3 ਵੱਖ-ਵੱਖ ਰਾਜਾਂ ਤੋਂ ਲੋਕ ਸਭਾ ਦੀਆਂ ਕੁੱਲ ਸੀਟਾਂ ਦਾ 2% (11 ਸੀਟਾਂ) ਜਿੱਤਣਾ', hi: 'कम से कम 3 विभिन्न राज्यों से लोकसभा की कुल सीटों का 2% (11 सीटें) जीतना' },
            C: { en: 'Recognition as a State Party in at least 4 states', pa: 'ਘੱਟੋ-ਘੱਟ 4 ਰਾਜਾਂ ਵਿੱਚ "ਰਾਜ ਪਾਰਟੀ" (State Party) ਵਜੋਂ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਹੋਣਾ', hi: 'कम से कम 4 राज्यों में "राज्य स्तरीय दल" (State Party) के रूप में मान्यता प्राप्त होना' },
            D: { en: 'Winning at least 10% of the total seats in the Rajya Sabha across 5 states', pa: '5 ਰਾਜਾਂ ਵਿੱਚ ਰਾਜ ਸਭਾ ਦੀਆਂ ਕੁੱਲ ਸੀਟਾਂ ਦਾ ਘੱਟੋ-ਘੱਟ 10% ਜਿੱਤਣਾ', hi: '5 राज्यों में राज्यसभा की कुल सीटों का कम से कम 10% जीतना' }
        },
        correct: 'D',
        explanation: {
            en: 'Rajya Sabha seats are not a criterion for National Party recognition. The three alternative criteria under Para 6B of the Symbols Order 1968 are: (1) 6% valid votes in >=4 states + 4 Lok Sabha MPs; (2) 2% of Lok Sabha seats (11 seats) from >=3 states; or (3) State Party status in >=4 states.',
            pa: 'ਰਾਜ ਸਭਾ ਦੀਆਂ ਸੀਟਾਂ ਰਾਸ਼ਟਰੀ ਪਾਰਟੀ ਦੀ ਮਾਨਤਾ ਦਾ ਆਧਾਰ ਨਹੀਂ ਹਨ। ਬਾਕੀ ਤਿੰਨੇ ਸ਼ਰਤਾਂ (6% ਵੋਟਾਂ 4 ਰਾਜਾਂ ਵਿੱਚ + 4 MP; ਜਾਂ 3 ਰਾਜਾਂ ਤੋਂ 2% ਲੋਕ ਸਭਾ ਸੀਟਾਂ ਭਾਵ 11 ਸੀਟਾਂ; ਜਾਂ 4 ਰਾਜਾਂ ਵਿੱਚ ਸਟੇਟ ਪਾਰਟੀ ਦਾ ਦਰਜਾ) ਸਹੀ ਹਨ।',
            hi: 'राज्यसभा की सीटें राष्ट्रीय दल की मान्यता का मानदंड नहीं हैं। शेष तीनों विकल्प सिंबल्स ऑर्डर, 1968 के पैरा 6B की वैध शर्तें हैं।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-cep-10',
        topicId: 'sst-citizenship-election-parties',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'How does the subject-matter of the Representation of the People Act (RPA), 1950 differ from that of the Representation of the People Act (RPA), 1951?',
            pa: 'ਲੋਕ ਪ੍ਰਤੀਨਿਧਤਾ ਐਕਟ (RPA), 1950 ਅਤੇ ਲੋਕ ਪ੍ਰਤੀਨਿਧਤਾ ਐਕਟ (RPA), 1951 ਦੇ ਵਿਸ਼ਾ-ਵਸਤੂ ਵਿੱਚ ਮੁੱਖ ਅੰਤਰ ਕੀ ਹੈ?',
            hi: 'लोक प्रतिनिधित्व अधिनियम (RPA), 1950 और लोक प्रतिनिधित्व अधिनियम (RPA), 1951 की विषय-वस्तु में मुख्य अंतर क्या है?'
        },
        options: {
            A: { en: 'RPA 1950 deals with allocation of seats, delimitation, and preparation of electoral rolls; RPA 1951 deals with actual conduct of elections, qualifications/disqualifications of MPs/MLAs, corrupt practices, and registration of political parties (Sec 29A)', pa: 'RPA 1950 ਸੀਟਾਂ ਦੀ ਵੰਡ, ਹਲਕਾਬੰਦੀ ਅਤੇ ਵੋਟਰ ਸੂਚੀਆਂ ਨਾਲ ਸਬੰਧਤ ਹੈ; RPA 1951 ਚੋਣਾਂ ਦੇ ਸੰਚਾਲਨ, ਯੋਗਤਾਵਾਂ/ਅਯੋਗਤਾਵਾਂ, ਭ੍ਰਿਸ਼ਟ ਆਚਰਣ ਅਤੇ ਪਾਰਟੀਆਂ ਦੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ (ਧਾਰਾ 29A) ਨਾਲ ਸਬੰਧਤ ਹੈ', hi: 'RPA 1950 सीटों के आवंटन, परिसीमन और मतदाता सूचियों से संबंधित है; RPA 1951 चुनाव संचालन, अर्हताओं/निरर्हताओं, भ्रष्ट आचरण और दलों के पंजीकरण (धारा 29A) से संबंधित है' },
            B: { en: 'RPA 1950 applies only to Lok Sabha elections, whereas RPA 1951 applies only to State Assembly elections', pa: 'RPA 1950 ਸਿਰਫ਼ ਲੋਕ ਸਭਾ ਚੋਣਾਂ ਤੇ ਲਾਗੂ ਹੁੰਦਾ ਹੈ ਅਤੇ RPA 1951 ਸਿਰਫ਼ ਵਿਧਾਨ ਸਭਾ ਚੋਣਾਂ ਤੇ', hi: 'RPA 1950 केवल लोकसभा चुनावों पर लागू होता है और RPA 1951 केवल विधानसभा चुनावों पर' },
            C: { en: 'RPA 1950 governs Presidential and Vice-Presidential elections, whereas RPA 1951 governs Panchayat elections', pa: 'RPA 1950 ਰਾਸ਼ਟਰਪਤੀ ਚੋਣਾਂ ਨਾਲ ਸਬੰਧਤ ਹੈ ਅਤੇ RPA 1951 ਪੰਚਾਇਤੀ ਚੋਣਾਂ ਨਾਲ', hi: 'RPA 1950 राष्ट्रपति चुनावों से संबंधित है और RPA 1951 पंचायत चुनावों से' },
            D: { en: 'RPA 1950 contains the Anti-Defection Law, whereas RPA 1951 contains the Citizenship rules', pa: 'RPA 1950 ਵਿੱਚ ਦਲ-ਬਦਲੀ ਕਾਨੂੰਨ ਹੈ ਅਤੇ RPA 1951 ਵਿੱਚ ਨਾਗਰਿਕਤਾ ਨਿਯਮ ਹਨ', hi: 'RPA 1950 में दलबदल कानून है और RPA 1951 में नागरिकता नियम हैं' }
        },
        correct: 'A',
        explanation: {
            en: 'RPA 1950 provides for allocation of seats in legislatures, delimitation of constituencies, officers (CEO/DEO/ERO), and preparation of electoral rolls. RPA 1951 governs the actual conduct of elections, qualifications and disqualifications (Sec 8–11A), registration of political parties (Sec 29A), corrupt practices (Sec 123), and election petitions.',
            pa: 'RPA 1950 ਸੀਟਾਂ ਦੀ ਵੰਡ ਅਤੇ ਵੋਟਰ ਸੂਚੀਆਂ ਦੀ ਤਿਆਰੀ ਨਾਲ ਸਬੰਧਤ ਹੈ, ਜਦਕਿ RPA 1951 ਚੋਣਾਂ ਦੇ ਅਸਲ ਸੰਚਾਲਨ, ਅਯੋਗਤਾਵਾਂ (ਧਾਰਾ 8), ਸਿਆਸੀ ਪਾਰਟੀਆਂ ਦੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ (ਧਾਰਾ 29A) ਅਤੇ ਚੋਣ ਪਟੀਸ਼ਨਾਂ ਨਾਲ ਸਬੰਧਤ ਹੈ।',
            hi: 'RPA 1950 सीटों के आवंटन एवं मतदाता सूचियों से संबंधित है, जबकि RPA 1951 चुनाव संचालन, निरर्हताओं (धारा 8), राजनीतिक दलों के पंजीकरण (धारा 29A) एवं चुनाव याचिकाओं से संबंधित है।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },

    // =========================================================================
    // 3. STATE GOVT, FEDERALISM & PUNJAB LOCAL GOVT (sst-state-govt-punjab-local) — 10 MCQs
    // =========================================================================
    {
        id: 'q-sgpl-1',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'What is the total number of seats in the Punjab Vidhan Sabha (Legislative Assembly), and how many seats are reserved for Scheduled Castes (SC)?',
            pa: 'ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੀਆਂ ਸੀਟਾਂ ਹਨ ਅਤੇ ਅਨੁਸੂਚਿਤ ਜਾਤੀਆਂ (SC) ਲਈ ਕਿੰਨੀਆਂ ਸੀਟਾਂ ਰਾਖਵੀਆਂ ਹਨ?',
            hi: 'पंजाब विधानसभा में कुल कितनी सीटें हैं और अनुसूचित जातियों (SC) के लिए कितनी सीटें आरक्षित हैं?'
        },
        options: {
            A: { en: '117 total seats (34 reserved for SCs)', pa: '117 ਕੁੱਲ ਸੀਟਾਂ (34 SC ਲਈ ਰਾਖਵੀਆਂ)', hi: '117 कुल सीटें (34 SC के लिए आरक्षित)' },
            B: { en: '90 total seats (17 reserved for SCs)', pa: '90 ਕੁੱਲ ਸੀਟਾਂ (17 SC ਲਈ ਰਾਖਵੀਆਂ)', hi: '90 कुल सीटें (17 SC के लिए आरक्षित)' },
            C: { en: '117 total seats (29 reserved for SCs)', pa: '117 ਕੁੱਲ ਸੀਟਾਂ (29 SC ਲਈ ਰਾਖਵੀਆਂ)', hi: '117 कुल सीटें (29 SC के लिए आरक्षित)' },
            D: { en: '120 total seats (36 reserved for SCs)', pa: '120 ਕੁੱਲ ਸੀਟਾਂ (36 SC ਲਈ ਰਾਖਵੀਆਂ)', hi: '120 कुल सीटें (36 SC के लिए आरक्षित)' }
        },
        correct: 'A',
        explanation: {
            en: 'Punjab has a unicameral legislature (Punjab Vidhan Sabha) with 117 seats, of which 34 seats are reserved for Scheduled Castes (SC). Punjab sends 13 MPs to the Lok Sabha and 7 MPs to the Rajya Sabha.',
            pa: 'ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਵਿੱਚ ਕੁੱਲ 117 ਸੀਟਾਂ ਹਨ, ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ 34 ਸੀਟਾਂ ਅਨੁਸੂਚਿਤ ਜਾਤੀਆਂ (SC) ਲਈ ਰਾਖਵੀਆਂ ਹਨ। ਲੋਕ ਸਭਾ ਵਿੱਚ 13 ਅਤੇ ਰਾਜ ਸਭਾ ਵਿੱਚ 7 ਸੀਟਾਂ ਹਨ।',
            hi: 'पंजाब विधानसभा में कुल 117 सीटें हैं, जिनमें से 34 सीटें अनुसूचित जातियों (SC) के लिए आरक्षित हैं। लोकसभा में 13 और राज्यसभा में 7 सीटें हैं।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-sgpl-2',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'In which year was the Punjab Legislative Council (Vidhan Parishad — Upper House) abolished under Article 169 of the Constitution?',
            pa: 'ਸੰਵਿਧਾਨ ਦੇ ਅਨੁਛੇਦ 169 ਦੇ ਤਹਿਤ ਪੰਜਾਬ ਵਿਧਾਨ ਪ੍ਰੀਸ਼ਦ (ਉੱਪਰਲਾ ਸਦਨ) ਨੂੰ ਕਿਸ ਸਾਲ ਖਤਮ (abolish) ਕੀਤਾ ਗਿਆ ਸੀ?',
            hi: 'संविधान के अनुच्छेद 169 के अंतर्गत पंजाब विधान परिषद (उच्च सदन) को किस वर्ष समाप्त किया गया था?'
        },
        options: {
            A: { en: 'November 1956', pa: 'ਨਵੰਬਰ 1956', hi: 'नवंबर 1956' },
            B: { en: 'November 1966', pa: 'ਨਵੰਬਰ 1966', hi: 'नवंबर 1966' },
            C: { en: 'January 1970 (Punjab Legislative Council Abolition Act, 1969)', pa: 'ਜਨਵਰੀ 1970 (ਪੰਜਾਬ ਵਿਧਾਨ ਪ੍ਰੀਸ਼ਦ ਖਾਤਮਾ ਐਕਟ, 1969)', hi: 'जनवरी 1970 (पंजाब विधान परिषद उत्सादन अधिनियम, 1969)' },
            D: { en: 'December 1985', pa: 'ਦਸੰਬਰ 1985', hi: 'दिसंबर 1985' }
        },
        correct: 'C',
        explanation: {
            en: 'The Punjab Legislative Council (Vidhan Parishad) was abolished with effect from 7 January 1970 by the Punjab Legislative Council (Abolition) Act, 1969 passed by Parliament under Article 169.',
            pa: 'ਪੰਜਾਬ ਵਿਧਾਨ ਪ੍ਰੀਸ਼ਦ (Abolition) ਐਕਟ, 1969 ਰਾਹੀਂ ਜਨਵਰੀ 1970 ਤੋਂ ਪੰਜਾਬ ਵਿਧਾਨ ਪ੍ਰੀਸ਼ਦ ਨੂੰ ਖਤਮ ਕਰ ਦਿੱਤਾ ਗਿਆ ਅਤੇ ਪੰਜਾਬ ਦੀ ਵਿਧਾਨਪਾਲਿਕਾ ਇੱਕ-ਸਦਨੀ (Unicameral) ਬਣ ਗਈ।',
            hi: 'पंजाब विधान परिषद (उत्सादन) अधिनियम, 1969 के माध्यम से जनवरी 1970 से पंजाब विधान परिषद को समाप्त कर दिया गया।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-sgpl-3',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Under Article 200 of the Constitution, which of the following is NOT an option available to the Governor when a Money Bill passed by the State Legislature is presented for assent?',
            pa: 'ਸੰਵਿਧਾਨ ਦੇ ਅਨੁਛੇਦ 200 ਤਹਿਤ ਜਦੋਂ ਰਾਜ ਵਿਧਾਨ ਮੰਡਲ ਵੱਲੋਂ ਪਾਸ ਕੀਤਾ ਗਿਆ ਧਨ ਬਿੱਲ (Money Bill) ਰਾਜਪਾਲ ਕੋਲ ਮਨਜ਼ੂਰੀ ਲਈ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਰਾਜਪਾਲ ਕੋਲ ਕਿਹੜਾ ਵਿਕਲਪ ਨਹੀਂ ਹੁੰਦਾ?',
            hi: 'संविधान के अनुच्छेद 200 के अंतर्गत जब राज्य विधानमंडल द्वारा पारित धन विधेयक (Money Bill) राज्यपाल के समक्ष अनुमति हेतु प्रस्तुत किया जाता है, तो राज्यपाल के पास कौन-सा विकल्प उपलब्ध नहीं होता?'
        },
        options: {
            A: { en: 'Give assent to the Money Bill', pa: 'ਧਨ ਬਿੱਲ ਨੂੰ ਮਨਜ਼ੂਰੀ ਦੇਣਾ', hi: 'धन विधेयक को अनुमति देना' },
            B: { en: 'Withhold assent to the Money Bill', pa: 'ਧਨ ਬਿੱਲ ਤੇ ਮਨਜ਼ੂਰੀ ਰੋਕਣਾ', hi: 'धन विधेयक पर अनुमति रोकना' },
            C: { en: 'Return the Money Bill to the State Legislature for reconsideration', pa: 'ਧਨ ਬਿੱਲ ਨੂੰ ਰਾਜ ਵਿਧਾਨ ਸਭਾ ਕੋਲ ਮੁੜ-ਵਿਚਾਰ ਲਈ ਵਾਪਸ ਭੇਜਣਾ', hi: 'धन विधेयक को राज्य विधानमंडल के पास पुनर्विचार के लिए लौटाना' },
            D: { en: 'Reserve the Money Bill for the consideration of the President', pa: 'ਧਨ ਬਿੱਲ ਨੂੰ ਰਾਸ਼ਟਰਪਤੀ ਦੇ ਵਿਚਾਰ ਲਈ ਰਾਖਵਾਂ ਰੱਖਣਾ', hi: 'धन विधेयक को राष्ट्रपति के विचारार्थ आरक्षित रखना' }
        },
        correct: 'C',
        explanation: {
            en: 'The first proviso to Article 200 explicitly states that the Governor may return a Bill ( only if it is NOT a Money Bill ) to the House for reconsideration. Thus, a Governor cannot return a Money Bill for reconsideration.',
            pa: 'ਅਨੁਛੇਦ 200 ਦੇ ਉਪਬੰਧ ਅਨੁਸਾਰ ਰਾਜਪਾਲ ਕਿਸੇ ਸਧਾਰਨ ਬਿੱਲ ਨੂੰ ਮੁੜ-ਵਿਚਾਰ ਲਈ ਵਾਪਸ ਭੇਜ ਸਕਦਾ ਹੈ, ਪਰ ਧਨ ਬਿੱਲ (Money Bill) ਨੂੰ ਮੁੜ-ਵਿਚਾਰ ਲਈ ਵਿਧਾਨ ਸਭਾ ਕੋਲ ਵਾਪਸ ਨਹੀਂ ਭੇਜ ਸਕਦਾ।',
            hi: 'अनुच्छेद 200 के परंतुक के अनुसार राज्यपाल धन विधेयक (Money Bill) को राज्य विधानमंडल के पास पुनर्विचार के लिए वापस नहीं लौटा सकते।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-sgpl-4',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which 5 subjects were transferred from the State List to the Concurrent List (Seventh Schedule) by the 42nd Constitutional Amendment Act, 1976?',
            pa: '42ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1976 ਦੁਆਰਾ ਕਿਹੜੇ 5 ਵਿਸ਼ੇ ਰਾਜ ਸੂਚੀ (State List) ਵਿੱਚੋਂ ਕੱਢ ਕੇ ਸਮਵਰਤੀ ਸੂਚੀ (Concurrent List) ਵਿੱਚ ਪਾਏ ਗਏ ਸਨ?',
            hi: '42वें संविधान संशोधन अधिनियम, 1976 द्वारा कौन-से 5 विषय राज्य सूची (State List) से समवर्ती सूची (Concurrent List) में स्थानांतरित किए गए थे?'
        },
        options: {
            A: { en: 'Education, Forests, Weights & Measures, Protection of Wild Animals & Birds, and Administration of Justice (constitution of courts below High Court)', pa: 'ਸਿੱਖਿਆ, ਜੰਗਲ, ਨਾਪ-ਤੋਲ, ਜੰਗਲੀ ਜੀਵਾਂ ਤੇ ਪੰਛੀਆਂ ਦੀ ਸੁਰੱਖਿਆ, ਅਤੇ ਨਿਆਂ ਪ੍ਰਸ਼ਾਸਨ', hi: 'शिक्षा, वन, बाट व माप, वन्य जीव एवं पक्षी संरक्षण, तथा न्याय प्रशासन' },
            B: { en: 'Police, Public Health, Agriculture, Irrigation, and Land Revenue', pa: 'ਪੁਲਿਸ, ਜਨਤਕ ਸਿਹਤ, ਖੇਤੀਬਾੜੀ, ਸਿੰਚਾਈ ਅਤੇ ਭੂਮੀ ਮਾਲੀਆ', hi: 'पुलिस, लोक स्वास्थ्य, कृषि, सिंचाई और भू-राजस्व' },
            C: { en: 'Railways, Banking, Atomic Energy, Citizenship, and Extradition', pa: 'ਰੇਲਵੇ, ਬੈਂਕਿੰਗ, ਪ੍ਰਮਾਣੂ ਊਰਜਾ, ਨਾਗਰਿਕਤਾ ਅਤੇ ਹਵਾਲਗੀ', hi: 'रेलवे, बैंकिंग, परमाणु ऊर्जा, नागरिकता और प्रत्यर्पण' },
            D: { en: 'Panchayati Raj, Fisheries, Betting & Gambling, Theatres, and Tolls', pa: 'ਪੰਚਾਇਤੀ ਰਾਜ, ਮੱਛੀ ਪਾਲਣ, ਜੂਆ, ਸਿਨੇਮਾ ਅਤੇ ਟੋਲ ਟੈਕਸ', hi: 'पंचायती राज, मत्स्य पालन, जुआ, सिनेमा और पथकर' }
        },
        correct: 'A',
        explanation: {
            en: 'The 42nd Amendment Act, 1976 transferred 5 subjects from the State List to the Concurrent List: (1) Education, (2) Forests, (3) Weights and Measures, (4) Protection of Wild Animals and Birds, and (5) Administration of Justice / constitution and organization of all courts except the Supreme Court and High Courts.',
            pa: '42ਵੀਂ ਸੋਧ (1976) ਰਾਹੀਂ 5 ਵਿਸ਼ੇ ਰਾਜ ਸੂਚੀ ਤੋਂ ਸਮਵਰਤੀ ਸੂਚੀ ਵਿੱਚ ਤਬਦੀਲ ਕੀਤੇ ਗਏ: ਸਿੱਖਿਆ, ਜੰਗਲ, ਨਾਪ-ਤੋਲ, ਜੰਗਲੀ ਜੀਵਾਂ ਤੇ ਪੰਛੀਆਂ ਦੀ ਸੁਰੱਖਿਆ, ਅਤੇ ਨਿਆਂ ਪ੍ਰਸ਼ਾਸਨ।',
            hi: '42वें संशोधन (1976) द्वारा 5 विषय राज्य सूची से समवर्ती सूची में स्थानांतरित किए गए: शिक्षा, वन, बाट और माप, वन्य जीव एवं पक्षियों का संरक्षण, तथा न्याय का प्रशासन।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-sgpl-5',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which Article empowers the Rajya Sabha to authorize Parliament to legislate on a State List subject in the national interest, and what majority is required for such a resolution?',
            pa: 'ਕਿਹੜਾ ਅਨੁਛੇਦ ਰਾਜ ਸਭਾ ਨੂੰ ਰਾਸ਼ਟਰੀ ਹਿੱਤ ਵਿੱਚ ਰਾਜ ਸੂਚੀ ਦੇ ਕਿਸੇ ਵਿਸ਼ੇ ਤੇ ਕਾਨੂੰਨ ਬਣਾਉਣ ਲਈ ਸੰਸਦ ਨੂੰ ਅਧਿਕਾਰਤ ਕਰਨ ਦੀ ਸ਼ਕਤੀ ਦਿੰਦਾ ਹੈ, ਅਤੇ ਇਸ ਮਤੇ ਲਈ ਕਿੰਨੇ ਬਹੁਮਤ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ?',
            hi: 'कौन-सा अनुच्छेद राज्यसभा को राष्ट्रीय हित में राज्य सूची के किसी विषय पर संसद को कानून बनाने हेतु अधिकृत करने की शक्ति देता है, और इसके लिए कितने बहुमत की आवश्यकता होती है?'
        },
        options: {
            A: { en: 'Article 248 — Simple majority of members present and voting', pa: 'ਅਨੁਛੇਦ 248 — ਹਾਜ਼ਰ ਅਤੇ ਵੋਟ ਪਾਉਣ ਵਾਲੇ ਮੈਂਬਰਾਂ ਦਾ ਸਧਾਰਨ ਬਹੁਮਤ', hi: 'अनुच्छेद 248 — उपस्थित और मतदान करने वाले सदस्यों का साधारण बहुमत' },
            B: { en: 'Article 249 — Not less than two-thirds of the members present and voting (valid for 1 year at a time)', pa: 'ਅਨੁਛੇਦ 249 — ਹਾਜ਼ਰ ਅਤੇ ਵੋਟ ਪਾਉਣ ਵਾਲੇ ਮੈਂਬਰਾਂ ਦਾ ਘੱਟੋ-ਘੱਟ ਦੋ-ਤਿਹਾਈ ਬਹੁਮਤ (ਇੱਕ ਵਾਰ ਵਿੱਚ 1 ਸਾਲ ਲਈ ਵੈਧ)', hi: 'अनुच्छेद 249 — उपस्थित और मतदान करने वाले सदस्यों का कम से कम दो-तिहाई बहुमत (एक बार में 1 वर्ष हेतु वैध)' },
            C: { en: 'Article 252 — Consent of the President alone', pa: 'ਅਨੁਛੇਦ 252 — ਸਿਰਫ਼ ਰਾਸ਼ਟਰਪਤੀ ਦੀ ਸਹਿਮਤੀ', hi: 'अनुच्छेद 252 — केवल राष्ट्रपति की सहमति' },
            D: { en: 'Article 263 — Unanimous vote of all Chief Ministers', pa: 'ਅਨੁਛੇਦ 263 — ਸਾਰੇ ਮੁੱਖ ਮੰਤਰੀਆਂ ਦੀ ਸਰਬਸੰਮਤੀ', hi: 'अनुच्छेद 263 — सभी मुख्यमंत्रियों का सर्वसम्मत मत' }
        },
        correct: 'B',
        explanation: {
            en: 'Under Article 249, if the Rajya Sabha declares by a resolution supported by not less than two-thirds of the members present and voting that it is necessary or expedient in the national interest that Parliament should make laws with respect to a State List matter, Parliament becomes competent to legislate on it. Such a resolution remains in force for up to 1 year (renewable).',
            pa: 'ਅਨੁਛੇਦ 249 ਤਹਿਤ ਰਾਜ ਸਭਾ ਹਾਜ਼ਰ ਅਤੇ ਵੋਟ ਪਾਉਣ ਵਾਲੇ ਮੈਂਬਰਾਂ ਦੇ ਘੱਟੋ-ਘੱਟ 2/3 ਬਹੁਮਤ ਨਾਲ ਮਤਾ ਪਾਸ ਕਰਕੇ ਸੰਸਦ ਨੂੰ ਰਾਜ ਸੂਚੀ ਦੇ ਵਿਸ਼ੇ ਤੇ ਕਾਨੂੰਨ ਬਣਾਉਣ ਦਾ ਅਧਿਕਾਰ ਦੇ ਸਕਦੀ ਹੈ।',
            hi: 'अनुच्छेद 249 के अंतर्गत राज्यसभा उपस्थित और मतदान करने वाले सदस्यों के कम से कम दो-तिहाई (2/3) बहुमत से प्रस्ताव पारित कर संसद को राज्य सूची के विषय पर कानून बनाने हेतु अधिकृत कर सकती है।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-sgpl-6',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Under the GST Council established by Article 279A (101st Constitutional Amendment Act, 2016), what is the voting weightage of the Central Government and the State Governments respectively, and what majority is needed for a decision?',
            pa: 'ਅਨੁਛੇਦ 279A (101ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ, 2016) ਤਹਿਤ ਬਣੀ GST ਕੌਂਸਲ ਵਿੱਚ ਕੇਂਦਰ ਸਰਕਾਰ ਅਤੇ ਰਾਜ ਸਰਕਾਰਾਂ ਦੀਆਂ ਵੋਟਾਂ ਦਾ ਭਾਰ (weightage) ਕ੍ਰਮਵਾਰ ਕਿੰਨਾ ਹੈ ਅਤੇ ਫੈਸਲੇ ਲਈ ਕਿੰਨਾ ਬਹੁਮਤ ਚਾਹੀਦਾ ਹੈ?',
            hi: 'अनुच्छेद 279A (101वाँ संविधान संशोधन, 2016) के तहत गठित GST परिषद में केंद्र सरकार और राज्य सरकारों के मतों का भार (weightage) क्रमशः कितना है और निर्णय के लिए कितना बहुमत आवश्यक है?'
        },
        options: {
            A: { en: 'Centre: 1/3rd weightage, States: 2/3rd weightage; Decision requires 3/4th (75%) weighted majority', pa: 'ਕੇਂਦਰ: 1/3 ਭਾਰ, ਰਾਜ: 2/3 ਭਾਰ; ਫੈਸਲੇ ਲਈ 3/4 (75%) ਭਾਰਿਤ ਬਹੁਮਤ', hi: 'केंद्र: 1/3 भार, राज्य: 2/3 भार; निर्णय के लिए 3/4 (75%) भारित बहुमत' },
            B: { en: 'Centre: 1/2 weightage, States: 1/2 weightage; Decision requires simple 50% majority', pa: 'ਕੇਂਦਰ: 1/2 ਭਾਰ, ਰਾਜ: 1/2 ਭਾਰ; ਫੈਸਲੇ ਲਈ 50% ਸਧਾਰਨ ਬਹੁਮਤ', hi: 'केंद्र: 1/2 भार, राज्य: 1/2 भार; निर्णय के लिए 50% साधारण बहुमत' },
            C: { en: 'Centre: 2/3rd weightage, States: 1/3rd weightage; Decision requires 2/3rd majority', pa: 'ਕੇਂਦਰ: 2/3 ਭਾਰ, ਰਾਜ: 1/3 ਭਾਰ; ਫੈਸਲੇ ਲਈ 2/3 ਬਹੁਮਤ', hi: 'केंद्र: 2/3 भार, राज्य: 1/3 भार; निर्णय के लिए 2/3 बहुमत' },
            D: { en: 'Equal one-person-one-vote without weightage; Union Finance Minister has a veto', pa: 'ਬਿਨਾਂ ਕਿਸੇ ਭਾਰ ਦੇ ਇੱਕ-ਮੈਂਬਰ-ਇੱਕ-ਵੋਟ; ਕੇਂਦਰੀ ਵਿੱਤ ਮੰਤਰੀ ਕੋਲ ਵੀਟੋ ਸ਼ਕਤੀ', hi: 'बिना किसी भार के एक-व्यक्ति-एक-मत; केंद्रीय वित्त मंत्री के पास वीटो' }
        },
        correct: 'A',
        explanation: {
            en: 'Under Article 279A(9), every decision of the GST Council is taken by a majority of not less than three-fourths (75%) of the weighted votes of the members present and voting, where the Central Government’s vote has a weightage of one-third (1/3) and the votes of all State Governments taken together have a weightage of two-thirds (2/3).',
            pa: 'ਅਨੁਛੇਦ 279A(9) ਅਨੁਸਾਰ GST ਕੌਂਸਲ ਵਿੱਚ ਕੇਂਦਰ ਦੀਆਂ ਵੋਟਾਂ ਦਾ ਭਾਰ 1/3 ਅਤੇ ਸਾਰੇ ਰਾਜਾਂ ਦੀਆਂ ਵੋਟਾਂ ਦਾ ਭਾਰ 2/3 ਹੁੰਦਾ ਹੈ, ਅਤੇ ਹਰ ਫੈਸਲੇ ਲਈ ਘੱਟੋ-ਘੱਟ 3/4 (75%) ਭਾਰਿਤ ਬਹੁਮਤ ਲਾਜ਼ਮੀ ਹੈ।',
            hi: 'अनुच्छेद 279A(9) के अनुसार GST परिषद में केंद्र सरकार के मत का भार 1/3 और सभी राज्यों के संयुक्त मतों का भार 2/3 होता है, तथा प्रत्येक निर्णय के लिए 3/4 (75%) भारित बहुमत आवश्यक है।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-sgpl-7',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Under the Punjab Panchayati Raj Act, 1994 (and the Punjab Amendment Act, 2017 amending Section 12), what percentage of seats in Gram Panchayats, Panchayat Samitis, and Zila Parishads in Punjab is reserved for women?',
            pa: 'ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ, 1994 (ਅਤੇ 2017 ਦੀ ਸੋਧ) ਦੇ ਤਹਿਤ ਪੰਜਾਬ ਦੀਆਂ ਗ੍ਰਾਮ ਪੰਚਾਇਤਾਂ, ਪੰਚਾਇਤ ਸੰਮਤੀਆਂ ਅਤੇ ਜ਼ਿਲ੍ਹਾ ਪ੍ਰੀਸ਼ਦਾਂ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਕਿੰਨੇ ਪ੍ਰਤੀਸ਼ਤ ਸੀਟਾਂ ਰਾਖਵੀਆਂ ਹਨ?',
            hi: 'पंजाब पंचायती राज अधिनियम, 1994 (तथा 2017 के संशोधन) के अंतर्गत पंजाब की ग्राम पंचायतों, पंचायत समितियों और ज़िला परिषदों में महिलाओं के लिए कितने प्रतिशत सीटें आरक्षित हैं?'
        },
        options: {
            A: { en: '25%', pa: '25%', hi: '25%' },
            B: { en: '33% (one-third only)', pa: '33% (ਸਿਰਫ਼ ਇੱਕ-ਤਿਹਾਈ)', hi: '33% (केवल एक-तिहाई)' },
            C: { en: '50% (enhanced from one-third to 50% in Punjab in 2017)', pa: '50% (2017 ਵਿੱਚ ਇੱਕ-ਤਿਹਾਈ ਤੋਂ ਵਧਾ ਕੇ 50% ਕੀਤਾ ਗਿਆ)', hi: '50% (2017 में एक-तिहाई से बढ़ाकर 50% किया गया)' },
            D: { en: '40%', pa: '40%', hi: '40%' }
        },
        correct: 'C',
        explanation: {
            en: 'While Article 243D of the Constitution mandates a minimum of one-third (33%) reservation for women, Punjab enhanced women’s reservation in Panchayati Raj Institutions and Urban Local Bodies to 50% via the Punjab Panchayati Raj (Amendment) Act, 2017.',
            pa: 'ਸੰਵਿਧਾਨ ਦੇ ਅਨੁਛੇਦ 243D ਵਿੱਚ ਘੱਟੋ-ਘੱਟ 1/3 ਰਾਖਵਾਂਕਰਨ ਹੈ, ਪਰ ਪੰਜਾਬ ਸਰਕਾਰ ਨੇ 2017 ਦੀ ਸੋਧ ਰਾਹੀਂ ਪੰਚਾਇਤੀ ਰਾਜ ਸੰਸਥਾਵਾਂ ਅਤੇ ਸ਼ਹਿਰੀ ਸਥਾਨਕ ਸੰਸਥਾਵਾਂ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਰਾਖਵਾਂਕਰਨ ਵਧਾ ਕੇ 50% ਕਰ ਦਿੱਤਾ ਹੈ।',
            hi: 'संविधान के अनुच्छेद 243D में न्यूनतम 1/3 आरक्षण का प्रावधान है, किंतु पंजाब ने 2017 के संशोधन द्वारा पंचायती राज संस्थाओं एवं शहरी स्थानीय निकायों में महिलाओं का आरक्षण बढ़ाकर 50% कर दिया है।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-sgpl-8',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Under the Punjab Panchayati Raj Act, 1994, how many statutory general meetings must a Gram Sabha hold in a year, and in which months are they scheduled?',
            pa: 'ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ, 1994 ਦੇ ਤਹਿਤ ਗ੍ਰਾਮ ਸਭਾ ਦੀਆਂ ਸਾਲ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀਆਂ ਲਾਜ਼ਮੀ ਮੀਟਿੰਗਾਂ ਹੋਣੀਆਂ ਜ਼ਰੂਰੀ ਹਨ ਅਤੇ ਇਹ ਕਿਨ੍ਹਾਂ ਮਹੀਨਿਆਂ ਵਿੱਚ ਹੁੰਦੀਆਂ ਹਨ?',
            hi: 'पंजाब पंचायती राज अधिनियम, 1994 के अंतर्गत ग्राम सभा की वर्ष में कितनी वैधानिक सामान्य बैठकें होनी अनिवार्य हैं और वे किन महीनों में निर्धारित हैं?'
        },
        options: {
            A: { en: '2 meetings — Hari (June) and Sawani (December)', pa: '2 ਮੀਟਿੰਗਾਂ — ਹਾੜ੍ਹੀ (ਜੂਨ) ਅਤੇ ਸਾਉਣੀ (ਦਸੰਬਰ)', hi: '2 बैठकें — रबी (जून) और खरीफ़ (दिसंबर)' },
            B: { en: '1 annual meeting in April', pa: 'ਅਪ੍ਰੈਲ ਵਿੱਚ 1 ਸਾਲਾਨਾ ਮੀਟਿੰਗ', hi: 'अप्रैल में 1 वार्षिक बैठक' },
            C: { en: '6 meetings every alternate month', pa: 'ਹਰ ਦੂਜੇ ਮਹੀਨੇ 6 ਮੀਟਿੰਗਾਂ', hi: 'प्रत्येक दूसरे माह 6 बैठकें' },
            D: { en: '12 monthly meetings on the first Monday of every month', pa: 'ਹਰ ਮਹੀਨੇ ਦੇ ਪਹਿਲੇ ਸੋਮਵਾਰ 12 ਮੀਟਿੰਗਾਂ', hi: 'प्रत्येक माह के पहले सोमवार को 12 बैठकें' }
        },
        correct: 'A',
        explanation: {
            en: 'Section 5 of the Punjab Panchayati Raj Act, 1994 mandates at least two general meetings of the Gram Sabha every year: one in the month of December (Sawani meeting, after the Kharif harvest) and one in the month of June (Hari meeting, after the Rabi harvest).',
            pa: 'ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ, 1994 ਦੀ ਧਾਰਾ 5 ਅਨੁਸਾਰ ਗ੍ਰਾਮ ਸਭਾ ਦੀਆਂ ਸਾਲ ਵਿੱਚ ਦੋ ਲਾਜ਼ਮੀ ਆਮ ਮੀਟਿੰਗਾਂ ਹੁੰਦੀਆਂ ਹਨ: ਦਸੰਬਰ (ਸਾਉਣੀ ਮੀਟਿੰਗ) ਅਤੇ ਜੂਨ (ਹਾੜ੍ਹੀ ਮੀਟਿੰਗ)।',
            hi: 'पंजाब पंचायती राज अधिनियम, 1994 की धारा 5 के अनुसार ग्राम सभा की वर्ष में कम से कम दो सामान्य बैठकें होती हैं: दिसंबर (सावनी बैठक) और जून (हाड़ी बैठक)।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-sgpl-9',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Arrange the following Committees/Commissions on Centre-State Relations and Panchayati Raj in correct chronological order of their appointment:\n1. Sarkaria Commission\n2. Balwant Rai Mehta Committee\n3. Ashok Mehta Committee\n4. Punchhi Commission',
            pa: 'ਕੇਂਦਰ-ਰਾਜ ਸਬੰਧਾਂ ਅਤੇ ਪੰਚਾਇਤੀ ਰਾਜ ਨਾਲ ਸਬੰਧਤ ਹੇਠ ਲਿਖੀਆਂ ਕਮੇਟੀਆਂ/ਕਮਿਸ਼ਨਾਂ ਨੂੰ ਉਹਨਾਂ ਦੇ ਗਠਨ ਦੇ ਸਹੀ ਕਾਲਕ੍ਰਮ (chronological order) ਵਿੱਚ ਲਗਾਓ:\n1. ਸਰਕਾਰੀਆ ਕਮਿਸ਼ਨ\n2. ਬਲਵੰਤ ਰਾਏ ਮਹਿਤਾ ਕਮੇਟੀ\n3. ਅਸ਼ੋਕ ਮਹਿਤਾ ਕਮੇਟੀ\n4. ਪੁੰਛੀ ਕਮਿਸ਼ਨ',
            hi: 'केंद्र-राज्य संबंधों और पंचायती राज से संबंधित निम्नलिखित समितियों/आयोगों को उनके गठन के सही कालानुक्रम में व्यवस्थित करें:\n1. सरकारिया आयोग\n2. बलवंत राय मेहता समिति\n3. अशोक मेहता समिति\n4. पुंछी आयोग'
        },
        options: {
            A: { en: '2 -> 3 -> 1 -> 4', pa: '2 -> 3 -> 1 -> 4', hi: '2 -> 3 -> 1 -> 4' },
            B: { en: '3 -> 2 -> 1 -> 4', pa: '3 -> 2 -> 1 -> 4', hi: '3 -> 2 -> 1 -> 4' },
            C: { en: '2 -> 1 -> 3 -> 4', pa: '2 -> 1 -> 3 -> 4', hi: '2 -> 1 -> 3 -> 4' },
            D: { en: '1 -> 2 -> 3 -> 4', pa: '1 -> 2 -> 3 -> 4', hi: '1 -> 2 -> 3 -> 4' }
        },
        correct: 'A',
        explanation: {
            en: 'Chronological order: Balwant Rai Mehta Committee (1957) -> Ashok Mehta Committee (1977) -> Sarkaria Commission on Centre-State Relations (1983) -> Justice M.M. Punchhi Commission (2007).',
            pa: 'ਸਹੀ ਕਾਲਕ੍ਰਮ: ਬਲਵੰਤ ਰਾਏ ਮਹਿਤਾ ਕਮੇਟੀ (1957) -> ਅਸ਼ੋਕ ਮਹਿਤਾ ਕਮੇਟੀ (1977) -> ਸਰਕਾਰੀਆ ਕਮਿਸ਼ਨ (1983) -> ਪੁੰਛੀ ਕਮਿਸ਼ਨ (2007)।',
            hi: 'सही कालक्रम: बलवंत राय मेहता समिति (1957) -> अशोक मेहता समिति (1977) -> सरकारिया आयोग (1983) -> पुंछी आयोग (2007)।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-sgpl-10',
        topicId: 'sst-state-govt-punjab-local',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Which landmark Supreme Court judgment (1994) held that Secularism and Federalism are part of the Basic Structure of the Constitution and laid down strict judicial review guidelines against arbitrary imposition of President’s Rule under Article 356?',
            pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ 1994 ਦੇ ਕਿਸ ਇਤਿਹਾਸਕ ਫੈਸਲੇ ਨੇ ਧਰਮ-ਨਿਰਪੱਖਤਾ ਅਤੇ ਸੰਘਵਾਦ ਨੂੰ ਸੰਵਿਧਾਨ ਦੇ ਮੂਲ ਢਾਂਚੇ (Basic Structure) ਦਾ ਹਿੱਸਾ ਮੰਨਿਆ ਅਤੇ ਅਨੁਛੇਦ 356 (ਰਾਸ਼ਟਰਪਤੀ ਰਾਜ) ਦੀ ਦੁਰਵਰਤੋਂ ਵਿਰੁੱਧ ਸਖ਼ਤ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ ਜਾਰੀ ਕੀਤੇ?',
            hi: 'सर्वोच्च न्यायालय के 1994 के किस ऐतिहासिक निर्णय ने धर्मनिरपेक्षता और संघवाद को संविधान के मूल ढाँचे (Basic Structure) का भाग घोषित किया और अनुच्छेद 356 (राष्ट्रपति शासन) के मनमाने प्रयोग के विरुद्ध कड़े दिशा-निर्देश निर्धारित किए?'
        },
        options: {
            A: { en: 'S.R. Bommai v. Union of India (1994)', pa: 'ਐੱਸ.ਆਰ. ਬੋਮਈ ਬਨਾਮ ਭਾਰਤ ਸੰਘ (S.R. Bommai v. Union of India, 1994)', hi: 'एस.आर. बोम्मई बनाम भारत संघ (S.R. Bommai v. Union of India, 1994)' },
            B: { en: 'State of Rajasthan v. Union of India (1977)', pa: 'ਰਾਜਸਥਾਨ ਰਾਜ ਬਨਾਮ ਭਾਰਤ ਸੰਘ (1977)', hi: 'राजस्थान राज्य बनाम भारत संघ (1977)' },
            C: { en: 'Minerva Mills v. Union of India (1980)', pa: 'ਮਿਨਰਵਾ ਮਿੱਲਜ਼ ਬਨਾਮ ਭਾਰਤ ਸੰਘ (1980)', hi: 'मिनर्वा मिल्स बनाम भारत संघ (1980)' },
            D: { en: 'Shankari Prasad v. Union of India (1951)', pa: 'ਸ਼ੰਕਰੀ ਪ੍ਰਸਾਦ ਬਨਾਮ ਭਾਰਤ ਸੰਘ (1951)', hi: 'शंकरी प्रसाद बनाम भारत संघ (1951)' }
        },
        correct: 'A',
        explanation: {
            en: 'In S.R. Bommai v. Union of India (1994), a 9-judge Bench ruled that a proclamation under Article 356 is subject to judicial review, that the majority of a state government must be tested on the floor of the Assembly (not in Raj Bhavan), and that Federalism and Secularism are part of the Basic Structure.',
            pa: 'ਐੱਸ.ਆਰ. ਬੋਮਈ ਬਨਾਮ ਭਾਰਤ ਸੰਘ (1994) ਵਿੱਚ 9 ਜੱਜਾਂ ਦੇ ਸੰਵਿਧਾਨਕ ਬੈਂਚ ਨੇ ਫੈਸਲਾ ਦਿੱਤਾ ਕਿ ਅਨੁਛੇਦ 356 ਦੀ ਵਰਤੋਂ ਨਿਆਂਇਕ ਸਮੀਖਿਆ ਦੇ ਅਧੀਨ ਹੈ ਅਤੇ ਬਹੁਮਤ ਦੀ ਪਰਖ ਰਾਜ ਭਵਨ ਵਿੱਚ ਨਹੀਂ ਸਗੋਂ ਵਿਧਾਨ ਸਭਾ ਦੇ ਫਲੋਰ ਤੇ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।',
            hi: 'एस.आर. बोम्मई बनाम भारत संघ (1994) में 9-न्यायाधीशों की पीठ ने निर्णय दिया कि अनुच्छेद 356 न्यायिक समीक्षा के अधीन है और बहुमत का परीक्षण राजभवन में नहीं बल्कि विधानसभा के पटल (Floor Test) पर होना चाहिए।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },

    // =========================================================================
    // 4. FOREIGN POLICY & UNO (sst-foreign-policy-uno) — 10 MCQs
    // =========================================================================
    {
        id: 'q-fpu-1',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'Which Article of the Indian Constitution (under the Directive Principles of State Policy) directs the State to promote international peace and security, maintain just and honourable relations between nations, and encourage settlement of international disputes by arbitration?',
            pa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦਾ ਕਿਹੜਾ ਅਨੁਛੇਦ (ਰਾਜ ਦੀ ਨੀਤੀ ਦੇ ਨਿਰਦੇਸ਼ਕ ਸਿਧਾਂਤਾਂ ਤਹਿਤ) ਰਾਜ ਨੂੰ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸ਼ਾਂਤੀ ਅਤੇ ਸੁਰੱਖਿਆ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਦਾ ਨਿਰਦੇਸ਼ ਦਿੰਦਾ ਹੈ?',
            hi: 'भारतीय संविधान का कौन-सा अनुच्छेद (राज्य के नीति निदेशक तत्वों के अंतर्गत) राज्य को अंतर्राष्ट्रीय शांति और सुरक्षा की अभिवृद्धि करने का निर्देश देता है?'
        },
        options: {
            A: { en: 'Article 44', pa: 'ਅਨੁਛੇਦ 44', hi: 'अनुच्छेद 44' },
            B: { en: 'Article 48A', pa: 'ਅਨੁਛੇਦ 48A', hi: 'अनुच्छेद 48A' },
            C: { en: 'Article 50', pa: 'ਅਨੁਛੇਦ 50', hi: 'अनुच्छेद 50' },
            D: { en: 'Article 51', pa: 'ਅਨੁਛੇਦ 51', hi: 'अनुच्छेद 51' }
        },
        correct: 'D',
        explanation: {
            en: 'Article 51 in Part IV (DPSP) forms the constitutional basis of India’s foreign policy, directing the State to promote international peace and security and foster respect for international law and treaty obligations.',
            pa: 'ਭਾਗ IV (DPSP) ਵਿੱਚ ਅਨੁਛੇਦ 51 ਭਾਰਤ ਦੀ ਵਿਦੇਸ਼ ਨੀਤੀ ਦਾ ਸੰਵਿਧਾਨਕ ਆਧਾਰ ਹੈ, ਜੋ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸ਼ਾਂਤੀ ਅਤੇ ਸੁਰੱਖਿਆ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਦੀ ਗੱਲ ਕਰਦਾ ਹੈ।',
            hi: 'भाग IV (DPSP) में अनुच्छेद 51 भारत की विदेश नीति का संवैधानिक आधार है, जो अंतर्राष्ट्रीय शांति और सुरक्षा को बढ़ावा देने का निर्देश देता है।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-fpu-2',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'When was the Panchsheel Agreement (Five Principles of Peaceful Co-existence) signed, and between which two leaders?',
            pa: 'ਪੰਚਸ਼ੀਲ ਸਮਝੌਤਾ (ਸ਼ਾਂਤਮਈ ਸਹਿ-ਹੋਂਦ ਦੇ ਪੰਜ ਸਿਧਾਂਤ) ਕਦੋਂ ਅਤੇ ਕਿਨ੍ਹਾਂ ਦੋ ਨੇਤਾਵਾਂ ਵਿਚਕਾਰ ਸਹੀਬੰਦ ਹੋਇਆ ਸੀ?',
            hi: 'पंचशील समझौता (शांतिपूर्ण सह-अस्तित्व के पाँच सिद्धांत) कब और किन दो नेताओं के बीच हस्ताक्षरित हुआ था?'
        },
        options: {
            A: { en: '29 April 1954 — Jawaharlal Nehru and Zhou Enlai (Chou En-lai)', pa: '29 ਅਪ੍ਰੈਲ 1954 — ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ ਅਤੇ ਚਾਊ ਐਨ-ਲਾਈ (Zhou Enlai)', hi: '29 अप्रैल 1954 — जवाहरलाल नेहरू और चाउ एन-लाई (Zhou Enlai)' },
            B: { en: '19 September 1960 — Jawaharlal Nehru and Ayub Khan', pa: '19 ਸਤੰਬਰ 1960 — ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ ਅਤੇ ਅਯੂਬ ਖਾਨ', hi: '19 सितंबर 1960 — जवाहरलाल नेहरू और अयूब खान' },
            C: { en: '10 January 1966 — Lal Bahadur Shastri and Ayub Khan', pa: '10 ਜਨਵਰੀ 1966 — ਲਾਲ ਬਹਾਦਰ ਸ਼ਾਸਤਰੀ ਅਤੇ ਅਯੂਬ ਖਾਨ', hi: '10 जनवरी 1966 — लाल बहादुर शास्त्री और अयूब खान' },
            D: { en: '2 July 1972 — Indira Gandhi and Zulfikar Ali Bhutto', pa: '2 ਜੁਲਾਈ 1972 — ਇੰਦਰਾ ਗਾਂਧੀ ਅਤੇ ਜ਼ੁਲਫਿਕਾਰ ਅਲੀ ਭੁੱਟੋ', hi: '2 जुलाई 1972 — इंदिरा गांधी और ज़ुल्फ़िकार अली भुट्टो' }
        },
        correct: 'A',
        explanation: {
            en: 'The Panchsheel Agreement (Five Principles of Peaceful Co-existence) was signed in Beijing on 29 April 1954 between Indian PM Jawaharlal Nehru and Chinese Premier Zhou Enlai regarding trade and intercourse with the Tibet region.',
            pa: 'ਪੰਚਸ਼ੀਲ ਸਮਝੌਤਾ 29 ਅਪ੍ਰੈਲ 1954 ਨੂੰ ਭਾਰਤ ਦੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ ਅਤੇ ਚੀਨ ਦੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਚਾਊ ਐਨ-ਲਾਈ ਵਿਚਕਾਰ ਹੋਇਆ ਸੀ।',
            hi: 'पंचशील समझौता 29 अप्रैल 1954 को भारतीय प्रधानमंत्री जवाहरलाल नेहरू और चीनी प्रीमियर चाउ एन-लाई के बीच हस्ताक्षरित हुआ था।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-fpu-3',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which of the six principal organs of the United Nations is NOT headquartered in New York City, USA, and where is it located?',
            pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ (UNO) ਦੇ ਛੇ ਮੁੱਖ ਅੰਗਾਂ ਵਿੱਚੋਂ ਕਿਹੜੇ ਅੰਗ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਨਿਊਯਾਰਕ (ਅਮਰੀਕਾ) ਵਿੱਚ ਨਹੀਂ ਹੈ, ਅਤੇ ਇਹ ਕਿੱਥੇ ਸਥਿਤ ਹੈ?',
            hi: 'संयुक्त राष्ट्र (UNO) के छह प्रमुख अंगों में से किसका मुख्यालय न्यूयॉर्क (अमेरिका) में नहीं है, और वह कहाँ स्थित है?'
        },
        options: {
            A: { en: 'Security Council — Geneva, Switzerland', pa: 'ਸੁਰੱਖਿਆ ਪ੍ਰੀਸ਼ਦ — ਜਨੇਵਾ, ਸਵਿਟਜ਼ਰਲੈਂਡ', hi: 'सुरक्षा परिषद — जिनेवा, स्विट्ज़रलैंड' },
            B: { en: 'International Court of Justice (ICJ) — Peace Palace, The Hague (Netherlands)', pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ (ICJ) — ਦ ਹੇਗ, ਨੀਦਰਲੈਂਡਜ਼', hi: 'अंतर्राष्ट्रीय न्यायालय (ICJ) — द हेग, नीदरलैंड्स' },
            C: { en: 'Economic and Social Council (ECOSOC) — Vienna, Austria', pa: 'ਆਰਥਿਕ ਅਤੇ ਸਮਾਜਿਕ ਪ੍ਰੀਸ਼ਦ — ਵਿਆਨਾ, ਆਸਟਰੀਆ', hi: 'आर्थिक और सामाजिक परिषद — वियना, ऑस्ट्रिया' },
            D: { en: 'Trusteeship Council — Paris, France', pa: 'ਟਰੱਸਟੀਸ਼ਿਪ ਕੌਂਸਲ — ਪੈਰਿਸ, ਫਰਾਂਸ', hi: 'न्यास परिषद — पेरिस, फ़्रांस' }
        },
        correct: 'B',
        explanation: {
            en: 'Five of the six principal organs of the UN (General Assembly, Security Council, ECOSOC, Trusteeship Council, and Secretariat) are headquartered in New York. Only the International Court of Justice (ICJ, consisting of 15 judges elected for 9-year terms) is located at the Peace Palace in The Hague, Netherlands.',
            pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦੇ 6 ਮੁੱਖ ਅੰਗਾਂ ਵਿੱਚੋਂ ਸਿਰਫ਼ ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ (ICJ — 15 ਜੱਜ, 9 ਸਾਲ ਕਾਰਜਕਾਲ) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਦ ਹੇਗ (ਨੀਦਰਲੈਂਡਜ਼) ਵਿਖੇ ਹੈ; ਬਾਕੀ 5 ਅੰਗ ਨਿਊਯਾਰਕ ਵਿੱਚ ਹਨ।',
            hi: 'संयुक्त राष्ट्र के 6 प्रमुख अंगों में से केवल अंतर्राष्ट्रीय न्यायालय (ICJ — 15 न्यायाधीश, 9 वर्ष का कार्यकाल) का मुख्यालय द हेग (नीदरलैंड्स) में है; शेष 5 न्यूयॉर्क में हैं।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-fpu-4',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Who were the five founding leaders of the Non-Aligned Movement (NAM) whose efforts culminated in the First NAM Summit at Belgrade in September 1961?',
            pa: 'ਗੁੱਟ-ਨਿਰਲੇਪ ਲਹਿਰ (NAM — ਪਹਿਲਾ ਸੰਮੇਲਨ ਬੇਲਗ੍ਰੇਡ, 1961) ਦੇ ਪੰਜ ਸੰਸਥਾਪਕ ਨੇਤਾ ਕੌਣ ਸਨ?',
            hi: 'गुटनिरपेक्ष आंदोलन (NAM — प्रथम शिखर सम्मेलन बेलग्रेड, 1961) के पाँच संस्थापक नेता कौन थे?'
        },
        options: {
            A: { en: 'Jawaharlal Nehru (India), Josip Broz Tito (Yugoslavia), Gamal Abdel Nasser (Egypt), Sukarno (Indonesia), and Kwame Nkrumah (Ghana)', pa: 'ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ (ਭਾਰਤ), ਟੀਟੋ (ਯੂਗੋਸਲਾਵੀਆ), ਨਾਸਿਰ (ਮਿਸਰ), ਸੁਕਰਨੋ (ਇੰਡੋਨੇਸ਼ੀਆ) ਅਤੇ ਕਵਾਮੇ ਨਕਰੂਮਾ (ਘਾਨਾ)', hi: 'जवाहरलाल नेहरू (भारत), टीटो (यूगोस्लाविया), नासिर (मिस्र), सुकर्णो (इंडोनेशिया) और क्वामे नक्रूमा (घाना)' },
            B: { en: 'Jawaharlal Nehru, Zhou Enlai, Ho Chi Minh, Fidel Castro, and Nelson Mandela', pa: 'ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ, ਚਾਊ ਐਨ-ਲਾਈ, ਹੋ ਚੀ ਮਿਨ੍ਹ, ਫਿਡੇਲ ਕਾਸਤਰੋ ਅਤੇ ਨੈਲਸਨ ਮੰਡੇਲਾ', hi: 'जवाहरलाल नेहरू, चाउ एन-लाई, हो ची मिन्ह, फ़िदेल कास्त्रो और नेल्सन मंडेला' },
            C: { en: 'Mahatma Gandhi, Nikita Khrushchev, John F. Kennedy, Nasser, and Tito', pa: 'ਮਹਾਤਮਾ ਗਾਂਧੀ, ਖਰੁਸ਼ਚੇਵ, ਜੌਨ ਐੱਫ. ਕੈਨੇਡੀ, ਨਾਸਿਰ ਅਤੇ ਟੀਟੋ', hi: 'महात्मा गांधी, ख्रुश्चेव, जॉन एफ. कैनेडी, नासिर और टीटो' },
            D: { en: 'Indira Gandhi, Anwar Sadat, Kenneth Kaunda, Robert Mugabe, and Suharto', pa: 'ਇੰਦਰਾ ਗਾਂਧੀ, ਅਨਵਰ ਸਾਦਾਤ, ਕੈਨੇਥ ਕੌਂਡਾ, ਰਾਬਰਟ ਮੁਗਾਬੇ ਅਤੇ ਸੁਹਾਰਤੋ', hi: 'इंदिरा गांधी, अनवर सादात, केनेथ कौंडा, रॉबर्ट मुगाबे और सुहार्तो' }
        },
        correct: 'A',
        explanation: {
            en: 'following the Afro-Asian Conference at Bandung (1955), the Non-Aligned Movement was founded at Belgrade (1961) by five leaders: Nehru (India), Tito (Yugoslavia), Nasser (Egypt), Sukarno (Indonesia), and Kwame Nkrumah (Ghana).',
            pa: 'ਬਾਂਡੁੰਗ ਸੰਮੇਲਨ (1955) ਤੋਂ ਬਾਅਦ ਬੇਲਗ੍ਰੇਡ (1961) ਵਿੱਚ ਗੁੱਟ-ਨਿਰਲੇਪ ਲਹਿਰ (NAM) ਦੀ ਸਥਾਪਨਾ 5 ਨੇਤਾਵਾਂ ਨੇ ਕੀਤੀ: ਨਹਿਰੂ (ਭਾਰਤ), ਟੀਟੋ (ਯੂਗੋਸਲਾਵੀਆ), ਨਾਸਿਰ (ਮਿਸਰ), ਸੁਕਰਨੋ (ਇੰਡੋਨੇਸ਼ੀਆ) ਅਤੇ ਨਕਰੂਮਾ (ਘਾਨਾ)।',
            hi: 'बांडुंग सम्मेलन (1955) के पश्चात बेलग्रेड (1961) में गुटनिरपेक्ष आंदोलन (NAM) के 5 संस्थापक थे: नेहरू (भारत), टीटो (यूगोस्लाविया), नासिर (मिस्र), सुकर्णो (इंडोनेशिया) और नक्रूमा (घाना)।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-fpu-5',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'What is the core principle of the "Gujral Doctrine" (1996) propounded by I.K. Gujral regarding India’s relations with its smaller South Asian neighbours?',
            pa: 'ਆਈ.ਕੇ. ਗੁਜਰਾਲ ਵੱਲੋਂ ਪੇਸ਼ ਕੀਤੇ ਗਏ "ਗੁਜਰਾਲ ਸਿਧਾਂਤ" (Gujral Doctrine, 1996) ਦਾ ਦੱਖਣੀ ਏਸ਼ੀਆ ਦੇ ਛੋਟੇ ਗੁਆਂਢੀ ਦੇਸ਼ਾਂ ਨਾਲ ਸਬੰਧਾਂ ਬਾਰੇ ਮੁੱਖ ਸਿਧਾਂਤ ਕੀ ਹੈ?',
            hi: 'आई.के. गुजराल द्वारा प्रतिपादित "गुजराल सिद्धांत" (Gujral Doctrine, 1996) का दक्षिण एशिया के छोटे पड़ोसी देशों के साथ संबंधों के संदर्भ में मूल सिद्धांत क्या है?'
        },
        options: {
            A: { en: 'With smaller neighbours like Bangladesh, Bhutan, Maldives, Nepal, and Sri Lanka, India does not ask for strict reciprocity, but gives and accommodates what it can in good faith and trust', pa: 'ਬੰਗਲਾਦੇਸ਼, ਭੂਟਾਨ, ਮਾਲਦੀਵ, ਨੇਪਾਲ ਅਤੇ ਸ਼੍ਰੀਲੰਕਾ ਵਰਗੇ ਛੋਟੇ ਗੁਆਂਢੀਆਂ ਨਾਲ ਭਾਰਤ ਬਰਾਬਰੀ (reciprocity) ਦੀ ਸ਼ਰਤ ਨਹੀਂ ਰੱਖਦਾ, ਸਗੋਂ ਵਿਸ਼ਵਾਸ ਨਾਲ ਇੱਕ-ਪਾਸੜ ਸਹਿਯੋਗ ਦਿੰਦਾ ਹੈ', hi: 'बांग्लादेश, भूटान, मालदीव, नेपाल और श्रीलंका जैसे छोटे पड़ोसियों से भारत पारस्परिकता (reciprocity) की माँग नहीं करता, बल्कि सद्भाव से सहयोग देता है' },
            B: { en: 'India will station military bases in all neighbouring SAARC capitals', pa: 'ਭਾਰਤ ਸਾਰੇ ਸਾਰਕ ਦੇਸ਼ਾਂ ਦੀਆਂ ਰਾਜਧਾਨੀਆਂ ਵਿੱਚ ਫ਼ੌਜੀ ਅੱਡੇ ਸਥਾਪਤ ਕਰੇਗਾ', hi: 'भारत सभी सार्क देशों की राजधानियों में सैन्य अड्डे स्थापित करेगा' },
            C: { en: 'India will merge the currencies of all South Asian countries into a single rupee', pa: 'ਭਾਰਤ ਸਾਰੇ ਦੱਖਣੀ ਏਸ਼ੀਆਈ ਦੇਸ਼ਾਂ ਦੀ ਮੁਦਰਾ ਨੂੰ ਇੱਕ ਰੁਪਏ ਵਿੱਚ ਮਿਲਾ ਦੇਵੇਗਾ', hi: 'भारत सभी दक्षिण एशियाई देशों की मुद्राओं का एकीकरण करेगा' },
            D: { en: 'India will sever diplomatic ties with any neighbour trading with China', pa: 'ਚੀਨ ਨਾਲ ਵਪਾਰ ਕਰਨ ਵਾਲੇ ਕਿਸੇ ਵੀ ਗੁਆਂਢੀ ਨਾਲ ਭਾਰਤ ਕੂਟਨੀਤਕ ਸਬੰਧ ਤੋੜ ਲਵੇਗਾ', hi: 'चीन के साथ व्यापार करने वाले किसी भी पड़ोसी से भारत कूटनीतिक संबंध तोड़ लेगा' }
        },
        correct: 'A',
        explanation: {
            en: 'The five-point Gujral Doctrine (1996) states that as the largest country in South Asia, India should extend unilateral accommodation and non-reciprocity to its smaller neighbours (Bangladesh, Bhutan, Maldives, Nepal, Sri Lanka), while no South Asian country should allow its territory to be used against the interest of another.',
            pa: 'ਗੁਜਰਾਲ ਸਿਧਾਂਤ (1996) ਦੇ ਅਨੁਸਾਰ ਭਾਰਤ ਆਪਣੇ ਛੋਟੇ ਗੁਆਂਢੀਆਂ (ਨੇਪਾਲ, ਭੂਟਾਨ, ਬੰਗਲਾਦੇਸ਼, ਸ਼੍ਰੀਲੰਕਾ, ਮਾਲਦੀਵ) ਤੋਂ ਬਦਲੇ ਦੀ ਉਮੀਦ (reciprocity) ਕੀਤੇ ਬਿਨਾਂ ਸद्ਭਾਵਨਾ ਨਾਲ ਮਦਦ ਕਰਦਾ ਹੈ।',
            hi: 'गुजराल सिद्धांत (1996) के अनुसार भारत अपने छोटे पड़ोसियों (नेपाल, भूटान, बांग्लादेश, श्रीलंका, मालदीव) से पारस्परिकता (reciprocity) की अपेक्षा किए बिना सद्भाव और विश्वास से सहयोग करता है।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-fpu-6',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Under the Indus Waters Treaty (signed on 19 September 1960 in Karachi, brokered by the World Bank), which three "Eastern Rivers" were allocated to India for unrestricted use?',
            pa: 'ਸਿੰਧੂ ਜਲ ਸਮਝੌਤੇ (19 ਸਤੰਬਰ 1960, ਵਿਸ਼ਵ ਬੈਂਕ ਦੀ ਵਿਚੋਲਗੀ ਨਾਲ) ਤਹਿਤ ਕਿਹੜੇ ਤਿੰਨ "ਪੂਰਬੀ ਦਰਿਆ" ਭਾਰਤ ਨੂੰ ਦਿੱਤੇ ਗਏ ਸਨ?',
            hi: 'सिंधु जल संधि (19 सितंबर 1960, विश्व बैंक की मध्यस्थता से) के अंतर्गत कौन-सी तीन "पूर्वी नदियाँ" भारत को आवंटित की गईं?'
        },
        options: {
            A: { en: 'Indus, Jhelum, and Chenab', pa: 'ਸਿੰਧੂ, ਜੇਹਲਮ ਅਤੇ ਚਨਾਬ', hi: 'सिंधु, झेलम और चिनाब' },
            B: { en: 'Ravi, Beas, and Sutlej', pa: 'ਰਾਵੀ, ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ', hi: 'रावी, ब्यास और सतलुज' },
            C: { en: 'Chenab, Ravi, and Beas', pa: 'ਚਨਾਬ, ਰਾਵੀ ਅਤੇ ਬਿਆਸ', hi: 'चिनाब, रावी और ब्यास' },
            D: { en: 'Jhelum, Beas, and Sutlej', pa: 'ਜੇਹਲਮ, ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ', hi: 'झेलम, ब्यास और सतलुज' }
        },
        correct: 'B',
        explanation: {
            en: 'Signed by PM Jawaharlal Nehru and President Ayub Khan on 19 September 1960, the Indus Waters Treaty allocated the three Eastern Rivers (Ravi, Beas, Sutlej) to India and the three Western Rivers (Indus, Jhelum, Chenab) primarily to Pakistan.',
            pa: '19 ਸਤੰਬਰ 1960 ਦੇ ਸਿੰਧੂ ਜਲ ਸਮਝੌਤੇ ਤਹਿਤ ਤਿੰਨ ਪੂਰਬੀ ਦਰਿਆ (ਰਾਵੀ, ਬਿਆਸ, ਸਤਲੁਜ) ਭਾਰਤ ਨੂੰ ਅਤੇ ਤਿੰਨ ਪੱਛਮੀ ਦਰਿਆ (ਸਿੰਧੂ, ਜੇਹਲਮ, ਚਨਾਬ) ਪਾਕਿਸਤਾਨ ਨੂੰ ਦਿੱਤੇ ਗਏ।',
            hi: '19 सितंबर 1960 की सिंधु जल संधि के अंतर्गत तीन पूर्वी नदियाँ (रावी, ब्यास, सतलुज) भारत को तथा तीन पश्चिमी नदियाँ (सिंधु, झेलम, चिनाब) पाकिस्तान को आवंटित की गईं।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-fpu-7',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Match the following historic bilateral agreements of India with the year and signatories:\n1. Tashkent Declaration — (i) 1972 (Indira Gandhi & Z.A. Bhutto)\n2. Shimla Agreement — (ii) 1966 (Lal Bahadur Shastri & Ayub Khan)\n3. Indo-Soviet Treaty of Peace, Friendship & Cooperation — (iii) 1999 (Atal Bihari Vajpayee & Nawaz Sharif)\n4. Lahore Declaration — (iv) August 1971 (20-year treaty before Bangladesh Liberation War)',
            pa: 'ਭਾਰਤ ਦੇ ਹੇਠ ਲਿਖੇ ਇਤਿਹਾਸਕ ਦੁਵੱਲੇ ਸਮਝੌਤਿਆਂ ਦਾ ਸਾਲ ਅਤੇ ਹਸਤਾਖਰਕਰਤਾਵਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:\n1. ਤਾਸ਼ਕੰਦ ਸਮਝੌਤਾ — (i) 1972 (ਇੰਦਰਾ ਗਾਂਧੀ ਤੇ ਭੁੱਟੋ)\n2. ਸ਼ਿਮਲਾ ਸਮਝੌਤਾ — (ii) 1966 (ਲਾਲ ਬਹਾਦਰ ਸ਼ਾਸਤਰੀ ਤੇ ਅਯੂਬ ਖਾਨ)\n3. ਭਾਰਤ-ਸੋਵੀਅਤ ਮਿੱਤਰਤਾ ਸੰਧੀ — (iii) 1999 (ਅਟਲ ਬਿਹਾਰੀ ਵਾਜਪਾਈ ਤੇ ਨਵਾਜ਼ ਸ਼ਰੀਫ਼)\n4. ਲਾਹੌਰ ਐਲਾਨਨਾਮਾ — (iv) ਅਗਸਤ 1971',
            hi: 'भारत के निम्नलिखित ऐतिहासिक द्विपक्षीय समझौतों का वर्ष एवं हस्ताक्षरकर्ताओं से मिलान करें:\n1. ताशकंद घोषणा — (i) 1972 (इंदिरा गांधी व ज़ुल्फ़िकार अली भुट्टो)\n2. शिमला समझौता — (ii) 1966 (लाल बहादुर शास्त्री व अयूब खान)\n3. भारत-सोवियत शांति व मैत्री संधि — (iii) 1999 (अटल बिहारी वाजपेयी व नवाज़ शरीफ़)\n4. लाहौर घोषणा — (iv) अगस्त 1971'
        },
        options: {
            A: { en: '1-(ii), 2-(i), 3-(iv), 4-(iii)', pa: '1-(ii), 2-(i), 3-(iv), 4-(iii)', hi: '1-(ii), 2-(i), 3-(iv), 4-(iii)' },
            B: { en: '1-(i), 2-(ii), 3-(iv), 4-(iii)', pa: '1-(i), 2-(ii), 3-(iv), 4-(iii)', hi: '1-(i), 2-(ii), 3-(iv), 4-(iii)' },
            C: { en: '1-(ii), 2-(iv), 3-(i), 4-(iii)', pa: '1-(ii), 2-(iv), 3-(i), 4-(iii)', hi: '1-(ii), 2-(iv), 3-(i), 4-(iii)' },
            D: { en: '1-(iii), 2-(i), 3-(ii), 4-(iv)', pa: '1-(iii), 2-(i), 3-(ii), 4-(iv)', hi: '1-(iii), 2-(i), 3-(ii), 4-(iv)' }
        },
        correct: 'A',
        explanation: {
            en: 'Tashkent Declaration: 10 Jan 1966 (Shastri & Ayub Khan, mediated by Kosygin); Indo-Soviet Treaty: Aug 1971; Shimla Agreement: 2 July 1972 (Indira Gandhi & Z.A. Bhutto, converting Ceasefire Line into LoC); Lahore Declaration: Feb 1999 (Vajpayee & Nawaz Sharif).',
            pa: 'ਤਾਸ਼ਕੰਦ ਸਮਝੌਤਾ (10 ਜਨਵਰੀ 1966), ਭਾਰਤ-ਸੋਵੀਅਤ ਸੰਧੀ (ਅਗਸਤ 1971), ਸ਼ਿਮਲਾ ਸਮਝੌਤਾ (2 ਜੁਲਾਈ 1972), ਅਤੇ ਲਾਹੌਰ ਐਲਾਨਨਾਮਾ (ਫਰਵਰੀ 1999)।',
            hi: 'ताशकंद घोषणा (10 जनवरी 1966), भारत-सोवियत संधि (अगस्त 1971), शिमला समझौता (2 जुलाई 1972), और लाहौर घोषणा (फ़रवरी 1999)।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-fpu-8',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Which of the following statements accurately describes India’s official Nuclear Doctrine (formally adopted by the Cabinet Committee on Security in January 2003) and its stance on the NPT?',
            pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਥਨ ਭਾਰਤ ਦੇ ਅਧਿਕਾਰਤ ਪ੍ਰਮਾਣੂ ਸਿਧਾਂਤ (Nuclear Doctrine, ਜਨਵਰੀ 2003) ਅਤੇ NPT ਬਾਰੇ ਭਾਰਤ ਦੇ ਸਟੈਂਡ ਨੂੰ ਸਹੀ ਦਰਸਾਉਂਦਾ ਹੈ?',
            hi: 'निम्नलिखित में से कौन-सा कथन भारत के आधिकारिक परमाणु सिद्धांत (Nuclear Doctrine, जनवरी 2003) और NPT पर भारत के रुख का सही वर्णन करता है?'
        },
        options: {
            A: { en: 'India follows Credible Minimum Deterrence and "No First Use" (NFU) under civilian political command (Nuclear Command Authority chaired by the PM), and has refused to sign the 1968 NPT as discriminatory', pa: 'ਭਾਰਤ "ਪਹਿਲਾਂ ਵਰਤੋਂ ਨਾ ਕਰਨ" (No First Use) ਅਤੇ ਘੱਟੋ-ਘੱਟ ਭਰੋਸੇਯੋਗ ਰੋਕਥਾਮ ਦੀ ਨੀਤੀ ਰੱਖਦਾ ਹੈ (ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਦੀ ਅਗਵਾਈ ਹੇਠ) ਅਤੇ 1968 ਦੀ NPT ਨੂੰ ਭੇਦਭਾਵਪੂਰਨ ਮੰਨਦਿਆਂ ਦਸਤਖਤ ਨਹੀਂ ਕੀਤੇ', hi: 'भारत विश्वसनीय न्यूनतम प्रतिरोधक क्षमता और "नो फ़र्स्ट यूज़" (No First Use) की नीति का पालन करता है तथा 1968 की NPT को भेदभावपूर्ण मानकर उस पर हस्ताक्षर नहीं किए हैं' },
            B: { en: 'India signed the NPT in 1998 after Pokhran-II and follows a pre-emptive first-strike doctrine', pa: 'ਭਾਰਤ ਨੇ 1998 ਵਿੱਚ ਪੋਖਰਣ-II ਤੋਂ ਬਾਅਦ NPT ਤੇ ਦਸਤਖਤ ਕੀਤੇ ਅਤੇ ਪਹਿਲਾਂ ਹਮਲਾ ਕਰਨ ਦੀ ਨੀਤੀ ਰੱਖਦਾ ਹੈ', hi: 'भारत ने 1998 में पोखरण-II के बाद NPT पर हस्ताक्षर किए और प्रथम प्रहार की नीति अपनाई' },
            C: { en: 'India has delegated nuclear launch authority solely to field military commanders without civilian oversight', pa: 'ਭਾਰਤ ਨੇ ਪ੍ਰਮਾਣੂ ਹਥਿਆਰ ਚਲਾਉਣ ਦਾ ਅਧਿਕਾਰ ਬਿਨਾਂ ਸਿਆਸੀ ਨਿਗਰਾਨੀ ਦੇ ਫ਼ੌਜੀ ਕਮਾਂਡਰਾਂ ਨੂੰ ਦਿੱਤਾ ਹੈ', hi: 'भारत ने परमाणु प्रक्षेपण का अधिकार बिना नागरिक नियंत्रण के सैन्य कमांडरों को सौंप दिया है' },
            D: { en: 'India signed the CTBT in 1996 and dismantled its nuclear arsenal after 1974', pa: 'ਭਾਰਤ ਨੇ 1996 ਵਿੱਚ CTBT ਤੇ ਦਸਤਖਤ ਕੀਤੇ ਅਤੇ 1974 ਤੋਂ ਬਾਅਦ ਪ੍ਰਮਾਣੂ ਹਥਿਆਰ ਖਤਮ ਕਰ ਦਿੱਤੇ', hi: 'भारत ने 1996 में CTBT पर हस्ताक्षर किए और 1974 के बाद अपने परमाणु शस्त्रागार को समाप्त कर दिया' }
        },
        correct: 'A',
        explanation: {
            en: 'India conducted Pokhran-I (Smiling Buddha) in May 1974 and Pokhran-II (Operation Shakti) in May 1998. India’s 2003 Nuclear Doctrine rests on Credible Minimum Deterrence, No First Use (NFU), and massive retaliation authorized solely by the Political Council of the Nuclear Command Authority chaired by the Prime Minister. India refused to sign the 1968 NPT and 1996 CTBT as discriminatory between nuclear-haves and have-nots.',
            pa: 'ਭਾਰਤ ਨੇ ਮਈ 1974 (Smiling Buddha) ਅਤੇ ਮਈ 1998 (Operation Shakti) ਵਿੱਚ ਪ੍ਰਮਾਣੂ ਪਰੀਖਣ ਕੀਤੇ। ਭਾਰਤ ਦਾ 2003 ਦਾ ਪ੍ਰਮਾਣੂ ਸਿਧਾਂਤ "No First Use" ਅਤੇ "Credible Minimum Deterrence" ਤੇ ਅਧਾਰਤ ਹੈ, ਅਤੇ ਭਾਰਤ ਨੇ NPT/CTBT ਨੂੰ ਭੇਦਭਾਵਪੂਰਨ ਮੰਨ ਕੇ ਦਸਤਖਤ ਨਹੀਂ ਕੀਤੇ।',
            hi: 'भारत ने मई 1974 (स्माइलिंग बुद्धा) और मई 1998 (ऑपरेशन शक्ति) में परमाणु परीक्षण किए। भारत का 2003 का परमाणु सिद्धांत "नो फ़र्स्ट यूज़" और "विश्वसनीय न्यूनतम प्रतिरोधक क्षमता" पर आधारित है, और भारत ने भेदभावपूर्ण होने के कारण NPT/CTBT पर हस्ताक्षर नहीं किए।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-fpu-9',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Match the following Regional/Multilateral Groupings involving India with their Permanent Secretariat / Founding Year:\n1. SAARC — (i) Dhaka, Bangladesh (Founded 1997)\n2. BIMSTEC — (ii) Kathmandu, Nepal (Founded 1985 at Dhaka)\n3. SCO (Shanghai Cooperation Organisation) — (iii) Joined as permanent member at New Delhi Summit (Sept 2023)\n4. African Union in G20 — (iv) Beijing, China (Founded 2001; India joined as full member in 2017)',
            pa: 'ਭਾਰਤ ਨਾਲ ਸਬੰਧਤ ਹੇਠ ਲਿਖੇ ਖੇਤਰੀ/ਬਹੁ-ਪੱਖੀ ਸੰਗਠਨਾਂ ਦਾ ਉਹਨਾਂ ਦੇ ਸਕੱਤਰੇਤ/ਸਥਾਪਨਾ ਸਾਲ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:\n1. SAARC — (i) ਢਾਕਾ, ਬੰਗਲਾਦੇਸ਼ (ਸਥਾਪਨਾ 1997)\n2. BIMSTEC — (ii) ਕਾਠਮੰਡੂ, ਨੇਪਾਲ (ਸਥਾਪਨਾ 1985)\n3. SCO — (iii) ਨਵੀਂ ਦਿੱਲੀ G20 ਸੰਮੇਲਨ (ਸਤੰਬਰ 2023) ਵਿੱਚ ਸਥਾਈ ਮੈਂਬਰ ਬਣਿਆ\n4. G20 ਵਿੱਚ ਅਫ਼ਰੀਕੀ ਯੂਨੀਅਨ — (iv) ਬੀਜਿੰਗ, ਚੀਨ (ਸਥਾਪਨਾ 2001; ਭਾਰਤ 2017 ਵਿੱਚ ਪੂਰਨ ਮੈਂਬਰ ਬਣਿਆ)',
            hi: 'भारत से संबंधित निम्नलिखित क्षेत्रीय/बहुपक्षीय संगठनों का उनके सचिवालय/स्थापना वर्ष से मिलान करें:\n1. SAARC — (i) ढाका, बांग्लादेश (स्थापना 1997)\n2. BIMSTEC — (ii) काठमांडू, नेपाल (स्थापना 1985)\n3. SCO — (iii) नई दिल्ली G20 शिखर सम्मेलन (सितंबर 2023) में स्थायी सदस्य बना\n4. G20 में अफ़्रीकी संघ — (iv) बीजिंग, चीन (स्थापना 2001; भारत 2017 में पूर्ण सदस्य बना)'
        },
        options: {
            A: { en: '1-(ii), 2-(i), 3-(iv), 4-(iii)', pa: '1-(ii), 2-(i), 3-(iv), 4-(iii)', hi: '1-(ii), 2-(i), 3-(iv), 4-(iii)' },
            B: { en: '1-(i), 2-(ii), 3-(iv), 4-(iii)', pa: '1-(i), 2-(ii), 3-(iv), 4-(iii)', hi: '1-(i), 2-(ii), 3-(iv), 4-(iii)' },
            C: { en: '1-(ii), 2-(iv), 3-(i), 4-(iii)', pa: '1-(ii), 2-(iv), 3-(i), 4-(iii)', hi: '1-(ii), 2-(iv), 3-(i), 4-(iii)' },
            D: { en: '1-(iii), 2-(i), 3-(ii), 4-(iv)', pa: '1-(iii), 2-(i), 3-(ii), 4-(iv)', hi: '1-(iii), 2-(i), 3-(ii), 4-(iv)' }
        },
        correct: 'A',
        explanation: {
            en: 'SAARC was founded in Dhaka in Dec 1985 with its Secretariat at Kathmandu; BIMSTEC was founded in 1997 with its Secretariat at Dhaka; SCO was founded in 2001 (Secretariat in Beijing; India & Pakistan joined in June 2017 at Astana); the African Union was admitted as a permanent member of the G20 during India’s presidency at New Delhi in September 2023.',
            pa: 'SAARC (ਸਥਾਪਨਾ 1985, ਸਕੱਤਰੇਤ ਕਾਠਮੰਡੂ), BIMSTEC (ਸਥਾਪਨਾ 1997, ਸਕੱਤਰੇਤ ਢਾਕਾ), SCO (ਸਥਾਪਨਾ 2001, ਸਕੱਤਰੇਤ ਬੀਜਿੰਗ, ਭਾਰਤ 2017 ਵਿੱਚ ਮੈਂਬਰ ਬਣਿਆ), ਅਤੇ G20 ਨਵੀਂ ਦਿੱਲੀ ਸੰਮੇਲਨ 2023 ਵਿੱਚ ਅਫ਼ਰੀਕੀ ਯੂਨੀਅਨ ਸਥਾਈ ਮੈਂਬਰ ਬਣਿਆ।',
            hi: 'SAARC (स्थापना 1985, सचिवालय काठमांडू), BIMSTEC (स्थापना 1997, सचिवालय ढाका), SCO (स्थापना 2001, सचिवालय बीजिंग, भारत 2017 में सदस्य बना), तथा नई दिल्ली G20 शिखर सम्मेलन 2023 में अफ़्रीकी संघ स्थायी सदस्य बना।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-fpu-10',
        topicId: 'sst-foreign-policy-uno',
        subjectId: 'polity',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Under Article 27 of the UN Charter, how many affirmative votes are required to pass a substantive (non-procedural) resolution in the 15-member UN Security Council?',
            pa: 'ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਚਾਰਟਰ ਦੇ ਅਨੁਛੇਦ 27 ਤਹਿਤ 15 ਮੈਂਬਰੀ ਸੁਰੱਖਿਆ ਪ੍ਰੀਸ਼ਦ (UNSC) ਵਿੱਚ ਕਿਸੇ ਮਹੱਤਵਪੂਰਨ (substantive) ਮਤੇ ਨੂੰ ਪਾਸ ਕਰਨ ਲਈ ਕਿੰਨੀਆਂ ਹਾਂ-ਪੱਖੀ ਵੋਟਾਂ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ?',
            hi: 'संयुक्त राष्ट्र चार्टर के अनुच्छेद 27 के अंतर्गत 15-सदस्यीय सुरक्षा परिषद (UNSC) में किसी महत्वपूर्ण (गैर-प्रक्रियात्मक) प्रस्ताव को पारित करने के लिए कितने सकारात्मक मतों की आवश्यकता होती है?'
        },
        options: {
            A: { en: '8 affirmative votes without any veto requirement', pa: 'ਬਿਨਾਂ ਕਿਸੇ ਵੀਟੋ ਸ਼ਰਤ ਦੇ 8 ਹਾਂ-ਪੱਖੀ ਵੋਟਾਂ', hi: 'बिना किसी वीटो शर्त के 8 सकारात्मक मत' },
            B: { en: '9 affirmative votes out of 15, including the concurring votes of all 5 Permanent Members (P5 — no negative veto by USA, UK, France, Russia, or China)', pa: '15 ਵਿੱਚੋਂ 9 ਹਾਂ-ਪੱਖੀ ਵੋਟਾਂ, ਜਿਸ ਵਿੱਚ ਸਾਰੇ 5 ਸਥਾਈ ਮੈਂਬਰਾਂ (P5) ਦੀ ਸਹਿਮਤੀ (ਕੋਈ ਨਕਾਰਾਤਮਕ ਵੀਟੋ ਨਾ ਹੋਵੇ) ਸ਼ਾਮਲ ਹੋਵੇ', hi: '15 में से 9 सकारात्मक मत, जिसमें सभी 5 स्थायी सदस्यों (P5) की सहमति (किसी भी स्थायी सदस्य का नकारात्मक वीटो न हो) शामिल हो' },
            C: { en: 'Unanimous 15 out of 15 votes of both permanent and non-permanent members', pa: 'ਸਾਰੇ 15 ਸਥਾਈ ਅਤੇ ਗੈਰ-ਸਥਾਈ ਮੈਂਬਰਾਂ ਦੀਆਂ 15 ਵੋਟਾਂ', hi: 'सभी 15 स्थायी और अस्थायी सदस्यों के सर्वसम्मत 15 मत' },
            D: { en: 'Simple majority of 5 Permanent Members only', pa: 'ਸਿਰਫ਼ 5 ਸਥਾਈ ਮੈਂਬਰਾਂ ਦਾ ਸਧਾਰਨ ਬਹੁਮਤ', hi: 'केवल 5 स्थायी सदस्यों का साधारण बहुमत' }
        },
        correct: 'B',
        explanation: {
            en: 'Since the 1965 amendment to Article 27 of the UN Charter (which expanded the UNSC from 11 to 15 members), decisions on substantive matters require 9 affirmative votes out of 15, including the concurring votes of the 5 Permanent Members (meaning a single negative vote/veto by any P5 member defeats the resolution).',
            pa: 'UN ਚਾਰਟਰ ਦੇ ਅਨੁਛੇਦ 27 ਅਨੁਸਾਰ 15 ਮੈਂਬਰੀ ਸੁਰੱਖਿਆ ਪ੍ਰੀਸ਼ਦ ਵਿੱਚ ਕਿਸੇ ਮਹੱਤਵਪੂਰਨ ਮਤੇ ਲਈ 9 ਹਾਂ-ਪੱਖੀ ਵੋਟਾਂ ਚਾਹੀਦੀਆਂ ਹਨ ਅਤੇ ਕਿਸੇ ਵੀ 5 ਸਥਾਈ ਮੈਂਬਰ (ਅਮਰੀਕਾ, ਰੂਸ, ਚੀਨ, ਬ੍ਰਿਟੇਨ, ਫਰਾਂਸ) ਵੱਲੋਂ ਵੀਟੋ (ਨਕਾਰਾਤਮਕ ਵੋਟ) ਨਹੀਂ ਵਰਤੀ ਹੋਣੀ ਚਾਹੀਦੀ।',
            hi: 'UN चार्टर के अनुच्छेद 27 के अनुसार 15-सदस्यीय सुरक्षा परिषद में किसी महत्वपूर्ण प्रस्ताव को पारित करने के लिए 9 सकारात्मक मत आवश्यक हैं, बशर्ते किसी भी 5 स्थायी सदस्य (P5) ने नकारात्मक मत (वीटो) न दिया हो।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },

    // =========================================================================
    // 5. ANCIENT & MEDIEVAL PUNJAB (punjab-ancient-medieval) — 10 MCQs
    // =========================================================================
    {
        id: 'q-pam-1',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'Match the following five rivers of Punjab with their Rigvedic Sanskrit names:\n1. Jhelum — (i) Parushni\n2. Chenab — (ii) Vitasta\n3. Ravi — (iii) Asikni\n4. Beas — (iv) Shutudri\n5. Sutlej — (v) Vipasha',
            pa: 'ਪੰਜਾਬ ਦੇ ਪੰਜ ਦਰਿਆਵਾਂ ਦਾ ਉਹਨਾਂ ਦੇ ਰਿਗਵੈਦਿਕ ਨਾਵਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:\n1. ਜੇਹਲਮ — (i) ਪਰੁਸ਼ਨੀ\n2. ਚਨਾਬ — (ii) ਵਿਤਸਤਾ\n3. ਰਾਵੀ — (iii) ਅਸਿਕਨੀ\n4. ਬਿਆਸ — (iv) ਸ਼ਤੁਦਰੀ\n5. ਸਤਲੁਜ — (v) ਵਿਪਾਸ਼ਾ',
            hi: 'पंजाब की पाँच नदियों का उनके ऋग्वैदिक संस्कृत नामों से मिलान करें:\n1. झेलम — (i) परुष्णी\n2. चिनाब — (ii) वितस्ता\n3. रावी — (iii) असिक्नी\n4. ब्यास — (iv) शतुद्री\n5. सतलुज — (v) विपाशा'
        },
        options: {
            A: { en: '1-(ii), 2-(iii), 3-(i), 4-(v), 5-(iv)', pa: '1-(ii), 2-(iii), 3-(i), 4-(v), 5-(iv)', hi: '1-(ii), 2-(iii), 3-(i), 4-(v), 5-(iv)' },
            B: { en: '1-(iii), 2-(ii), 3-(i), 4-(iv), 5-(v)', pa: '1-(iii), 2-(ii), 3-(i), 4-(iv), 5-(v)', hi: '1-(iii), 2-(ii), 3-(i), 4-(iv), 5-(v)' },
            C: { en: '1-(ii), 2-(i), 3-(iii), 4-(v), 5-(iv)', pa: '1-(ii), 2-(i), 3-(iii), 4-(v), 5-(iv)', hi: '1-(ii), 2-(i), 3-(iii), 4-(v), 5-(iv)' },
            D: { en: '1-(v), 2-(iii), 3-(i), 4-(ii), 5-(iv)', pa: '1-(v), 2-(iii), 3-(i), 4-(ii), 5-(iv)', hi: '1-(v), 2-(iii), 3-(i), 4-(ii), 5-(iv)' }
        },
        correct: 'A',
        explanation: {
            en: 'Rigvedic river names: Jhelum = Vitasta, Chenab = Asikni, Ravi = Parushni, Beas = Vipasha, Sutlej = Shutudri.',
            pa: 'ਰਿਗਵੈਦਿਕ ਨਾਮ: ਜੇਹਲਮ = ਵਿਤਸਤਾ, ਚਨਾਬ = ਅਸਿਕਨੀ, ਰਾਵੀ = ਪਰੁਸ਼ਨੀ, ਬਿਆਸ = ਵਿਪਾਸ਼ਾ, ਸਤਲੁਜ = ਸ਼ਤੁਦਰੀ।',
            hi: 'ऋग्वैदिक नाम: झेलम = वितस्ता, चिनाब = असिक्नी, रावी = परुष्णी, ब्यास = विपाशा, सतलुज = शतुद्री।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-pam-2',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'On the banks of which river was the Rigvedic "Battle of Ten Kings" (Dasharajna Yuddha) fought, in which Bharata King Sudas defeated a confederacy of ten tribes?',
            pa: 'ਰਿਗਵੈਦਿਕ ਕਾਲ ਦਾ "ਦਸ ਰਾਜਿਆਂ ਦਾ ਯੁੱਧ" (Dasharajna Yuddha), ਜਿਸ ਵਿੱਚ ਭਰਤ ਕਬੀਲੇ ਦੇ ਰਾਜਾ ਸੁਦਾਸ ਨੇ ਦਸ ਕਬੀਲਿਆਂ ਦੇ ਗੱਠਜੋੜ ਨੂੰ ਹਰਾਇਆ, ਕਿਸ ਦਰਿਆ ਦੇ ਕੰਢੇ ਲੜਿਆ ਗਿਆ ਸੀ?',
            hi: 'ऋग्वैदिक काल का "दशराज्ञ युद्ध", जिसमें भरत राजा सुदास ने दस कबीलों के संघ को पराजित किया, किस नदी के तट पर लड़ा गया था?'
        },
        options: {
            A: { en: 'Vitasta (Jhelum)', pa: 'ਵਿਤਸਤਾ (ਜੇਹਲਮ)', hi: 'वितस्ता (झेलम)' },
            B: { en: 'Parushni (Ravi)', pa: 'ਪਰੁਸ਼ਨੀ (ਰਾਵੀ)', hi: 'परुष्णी (रावी)' },
            C: { en: 'Shutudri (Sutlej)', pa: 'ਸ਼ਤੁਦਰੀ (ਸਤਲੁਜ)', hi: 'शतुद्री (सतलुज)' },
            D: { en: 'Vipasha (Beas)', pa: 'ਵਿਪਾਸ਼ਾ (ਬਿਆਸ)', hi: 'विपाशा (ब्यास)' }
        },
        correct: 'B',
        explanation: {
            en: 'Described in Mandala 7 of the Rigveda, the Dasharajna Yuddha (Battle of Ten Kings) was fought on the banks of the River Parushni (modern Ravi), where King Sudas of the Tritsu-Bharata clan (advised by Vasishtha) defeated the ten-tribe alliance organized by Vishwamitra.',
            pa: 'ਰਿਗਵੇਦ ਦੇ 7ਵੇਂ ਮੰਡਲ ਵਿੱਚ ਵਰਣਿਤ ਦਸ ਰਾਜਿਆਂ ਦਾ ਯੁੱਧ ਪਰੁਸ਼ਨੀ (ਰਾਵੀ) ਦਰਿਆ ਦੇ ਕੰਢੇ ਲੜਿਆ ਗਿਆ ਸੀ।',
            hi: 'ऋग्वेद के 7वें मंडल में वर्णित दशराज्ञ युद्ध परुष्णी (रावी) नदी के तट पर लड़ा गया था।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-pam-3',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which Indus Valley Civilization site in Punjab, excavated by Dr. Y.D. Sharma in 1952–53 on the banks of the Sutlej, was the first Harappan site excavated in independent India and revealed a dog buried below a human burial?',
            pa: 'ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਕੰਢੇ ਸਥਿਤ ਪੰਜਾਬ ਦੀ ਕਿਹੜੀ ਹੜੱਪਾ ਸਾਈਟ ਦੀ ਖੁਦਾਈ 1952–53 ਵਿੱਚ ਡਾ. ਵਾਈ.ਡੀ. ਸ਼ਰਮਾ ਨੇ ਕੀਤੀ ਸੀ, ਜੋ ਆਜ਼ਾਦ ਭਾਰਤ ਵਿੱਚ ਖੁਦਾਈ ਕੀਤੀ ਪਹਿਲੀ ਹੜੱਪਾ ਸਾਈਟ ਸੀ ਅਤੇ ਜਿੱਥੋਂ ਮਨੁੱਖੀ ਕਬਰ ਦੇ ਹੇਠਾਂ ਕੁੱਤੇ ਨੂੰ ਦਫ਼ਨਾਉਣ ਦੇ ਸਬੂਤ ਮਿਲੇ?',
            hi: 'सतलुज नदी के तट पर स्थित पंजाब के किस हड़प्पा स्थल का उत्खनन 1952–53 में डॉ. वाई.डी. शर्मा ने किया था, जो स्वतंत्र भारत में उत्खनित प्रथम हड़प्पा स्थल था और जहाँ मानव कब्र के नीचे कुत्ते के दफ़नाए जाने का प्रमाण मिला?'
        },
        options: {
            A: { en: 'Sanghol (Fatehgarh Sahib)', pa: 'ਸੰਘੋਲ (ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ)', hi: 'संघोल (फ़तेहगढ़ साहिब)' },
            B: { en: 'Ropar / Rupnagar', pa: 'ਰੋਪੜ / ਰੂਪਨਗਰ', hi: 'रोपड़ / रूपनगर' },
            C: { en: 'Rohira (Malerkotla)', pa: 'ਰੋਹੀੜਾ (ਮਾਲੇਰਕੋਟਲਾ)', hi: 'रोहिड़ा (मालेरकोटला)' },
            D: { en: 'Sunet (Ludhiana)', pa: 'ਸੁਨੇਤ (ਲੁਧਿਆਣਾ)', hi: 'सुनेत (लुधियाना)' }
        },
        correct: 'B',
        explanation: {
            en: 'Ropar (Rupnagar) on the Sutlej river was excavated by Dr. Y.D. Sharma in 1952–53 (after Kotla Nihang Khan was noticed in 1929). It was the first Harappan site excavated in post-1947 India and is famous for the burial of a dog below its human master.',
            pa: 'ਰੋਪੜ (ਰੂਪਨਗਰ) ਦੀ ਖੁਦਾਈ 1952–53 ਵਿੱਚ ਡਾ. ਵਾਈ.ਡੀ. ਸ਼ਰਮਾ ਨੇ ਕੀਤੀ ਸੀ। ਇੱਥੋਂ ਮਾਲਕ ਦੇ ਨਾਲ ਕੁੱਤੇ ਨੂੰ ਦਫ਼ਨਾਉਣ ਦੇ ਸਬੂਤ, ਤਾਂਬੇ ਦੀ ਕੁਹਾੜੀ ਅਤੇ ਸਟੀਟਾਈਟ ਮੋਹਰ ਮਿਲੀ।',
            hi: 'रोपड़ (रूपनगर) का उत्खनन 1952–53 में डॉ. वाई.डी. शर्मा ने किया था। यहाँ मानव के साथ कुत्ते के शवाधान का साक्ष्य मिला।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-pam-4',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which archaeological site in Fatehgarh Sahib district of Punjab (known locally as Ucha Pind) yielded both Late Harappan habitation and a grand Kushana-era Buddhist stupa with 117 Mathura red-sandstone sculptures?',
            pa: 'ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ ਜ਼ਿਲ੍ਹੇ ਦੀ ਕਿਹੜੀ ਪੁਰਾਤੱਤਵ ਸਾਈਟ (ਜਿਸ ਨੂੰ ਉੱਚਾ ਪਿੰਡ ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ) ਤੋਂ ਉੱਤਰ-ਹੜੱਪਾ ਕਾਲ ਦੇ ਅਵਸ਼ੇਸ਼ਾਂ ਦੇ ਨਾਲ-ਨਾਲ ਕੁਸ਼ਾਣ ਕਾਲ ਦਾ ਬੋਧੀ ਸਤੂਪ ਅਤੇ ਮਥੁਰਾ ਲਾਲ ਪੱਥਰ ਦੀਆਂ 117 ਮੂਰਤੀਆਂ ਮਿਲੀਆਂ ਹਨ?',
            hi: 'फ़तेहगढ़ साहिब ज़िले के किस पुरातात्विक स्थल (जिसे उच्चा पिंड भी कहा जाता है) से उत्तर-हड़प्पाकालीन अवशेषों के साथ-साथ कुषाणकालीन बौद्ध स्तूप और मथुरा लाल बलुआ पत्थर की 117 मूर्तियाँ प्राप्त हुई हैं?'
        },
        options: {
            A: { en: 'Sanghol', pa: 'ਸੰਘੋਲ (Sanghol)', hi: 'संघोल (Sanghol)' },
            B: { en: 'Bara', pa: 'ਬਾੜਾ (Bara)', hi: 'बाड़ा (Bara)' },
            C: { en: 'Dher Majra', pa: 'ਢੇਰ ਮਾਜਰਾ (Dher Majra)', hi: 'ढेर माजरा (Dher Majra)' },
            D: { en: 'Dhalewan', pa: 'ਧਲੇਵਾਂ (Dhalewan)', hi: 'धलेवां (Dhalewan)' }
        },
        correct: 'A',
        explanation: {
            en: 'Sanghol (Ucha Pind) in Fatehgarh Sahib district, excavated by S.S. Talwar and R.S. Bisht (from 1968) and later in 1985, yielded Late Harappan/Bara pottery as well as a Dharma-Chakra pattern Kushana Buddhist stupa and 117 exquisitely carved Mathura red-sandstone railing pillars.',
            pa: 'ਸੰਘੋਲ (ਉੱਚਾ ਪਿੰਡ, ਜ਼ਿਲ੍ਹਾ ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ) ਤੋਂ ਹੜੱਪਾ ਸੱਭਿਅਤਾ ਦੇ ਅਵਸ਼ੇਸ਼ਾਂ ਤੋਂ ਇਲਾਵਾ ਕੁਸ਼ਾਣ ਕਾਲ ਦਾ ਬੋਧੀ ਸਤੂਪ ਅਤੇ ਮਥੁਰਾ ਸ਼ੈਲੀ ਦੀਆਂ 117 ਲਾਲ ਪੱਥਰ ਦੀਆਂ ਮੂਰਤੀਆਂ ਮਿਲੀਆਂ ਹਨ।',
            hi: 'संघोल (उच्चा पिंड, ज़िला फ़तेहगढ़ साहिब) से हड़प्पा अवशेषों के अतिरिक्त कुषाणकालीन बौद्ध स्तूप और मथुरा शैली की 117 लाल बलुआ पत्थर की मूर्तियाँ मिली हैं।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-pam-5',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'In May 326 BCE, Alexander the Great fought the famous Battle of Hydaspes against King Porus on the banks of which river, and at which river did Alexander’s army subsequently refuse to advance further east?',
            pa: 'ਮਈ 326 BCE ਵਿੱਚ ਸਿਕੰਦਰ ਨੇ ਰਾਜਾ ਪੋਰਸ ਵਿਰੁੱਧ ਪ੍ਰਸਿੱਧ ਹਾਈਡਸਪੀਜ਼ (Hydaspes) ਦੀ ਲੜਾਈ ਕਿਸ ਦਰਿਆ ਦੇ ਕੰਢੇ ਲੜੀ, ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਸਿਕੰਦਰ ਦੀ ਫ਼ੌਜ ਨੇ ਕਿਸ ਦਰਿਆ ਤੋਂ ਅੱਗੇ ਵਧਣ ਤੋਂ ਇਨਕਾਰ ਕਰ ਦਿੱਤਾ?',
            hi: 'मई 326 BCE में सिकंदर ने राजा पोरस के विरुद्ध प्रसिद्ध हाइडस्पेस (Hydaspes) का युद्ध किस नदी के तट पर लड़ा, और तत्पश्चात सिकंदर की सेना ने किस नदी से आगे पूर्व की ओर बढ़ने से इनकार कर दिया?'
        },
        options: {
            A: { en: 'Fought at Jhelum (Hydaspes); army stopped at Beas (Hyphasis)', pa: 'ਜੇਹਲਮ (Hydaspes) ਕੰਢੇ ਲੜਾਈ ਹੋਈ; ਬਿਆਸ (Hyphasis) ਤੋਂ ਫ਼ੌਜ ਵਾਪਸ ਮੁੜੀ', hi: 'झेलम (Hydaspes) तट पर युद्ध हुआ; ब्यास (Hyphasis) पर सेना ने आगे बढ़ने से इनकार किया' },
            B: { en: 'Fought at Chenab (Acesines); army stopped at Sutlej (Zaradros)', pa: 'ਚਨਾਬ ਕੰਢੇ ਲੜਾਈ ਹੋਈ; ਸਤਲੁਜ ਤੋਂ ਫ਼ੌਜ ਵਾਪਸ ਮੁੜੀ', hi: 'चिनाब तट पर युद्ध हुआ; सतलुज पर सेना रुकी' },
            C: { en: 'Fought at Indus; army stopped at Ravi (Hydraotes)', pa: 'ਸਿੰਧੂ ਕੰਢੇ ਲੜਾਈ ਹੋਈ; ਰਾਵੀ ਤੋਂ ਫ਼ੌਜ ਵਾਪਸ ਮੁੜੀ', hi: 'सिंधु तट पर युद्ध हुआ; रावी पर सेना रुकी' },
            D: { en: 'Fought at Ravi; army stopped at Yamuna', pa: 'ਰਾਵੀ ਕੰਢੇ ਲੜਾਈ ਹੋਈ; ਯਮੁਨਾ ਤੋਂ ਫ਼ੌਜ ਵਾਪਸ ਮੁੜੀ', hi: 'रावी तट पर युद्ध हुआ; यमुना पर सेना रुकी' }
        },
        correct: 'A',
        explanation: {
            en: 'In Greek sources, Jhelum is called Hydaspes and Beas is called Hyphasis. Alexander fought King Porus at the Battle of Hydaspes (Jhelum) in May 326 BCE, and his exhausted soldiers refused to cross the Hyphasis (Beas) river.',
            pa: 'ਯੂਨਾਨੀ ਸਰੋਤਾਂ ਵਿੱਚ ਜੇਹਲਮ ਨੂੰ ਹਾਈਡਸਪੀਜ਼ (Hydaspes) ਅਤੇ ਬਿਆਸ ਨੂੰ ਹਾਈਫਾਸਿਸ (Hyphasis) ਕਿਹਾ ਗਿਆ ਹੈ। ਸਿਕੰਦਰ ਤੇ ਪੋਰਸ ਦੀ ਲੜਾਈ ਜੇਹਲਮ ਕੰਢੇ ਹੋਈ ਅਤੇ ਸਿਕੰਦਰ ਦੀ ਫ਼ੌਜ ਬਿਆਸ ਦਰਿਆ ਤੋਂ ਵਾਪਸ ਪਰਤ ਗਈ।',
            hi: 'यूनानी स्रोतों में झेलम को हाइडस्पेस (Hydaspes) और ब्यास को हाइफ़ासिस (Hyphasis) कहा गया है। सिकंदर और पोरस का युद्ध झेलम तट पर हुआ तथा सिकंदर की सेना ब्यास नदी से लौट गई।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-pam-6',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which Indo-Greek king ruled Punjab from his capital at Sakala (Sialkot) in the 2nd century BCE and is immortalized in the Buddhist Pali text "Milinda Panho" for his philosophical dialogue with sage Nagasena?',
            pa: 'ਦੂਜੀ ਸਦੀ ਈਸਾ ਪੂਰਵ ਵਿੱਚ ਕਿਸ ਇੰਡੋ-ਗ੍ਰੀਕ (ਹਿੰਦ-ਯੂਨਾਨੀ) ਰਾਜੇ ਨੇ ਸਾਕਲ (ਸਿਆਲਕੋਟ) ਨੂੰ ਆਪਣੀ ਰਾਜਧਾਨੀ ਬਣਾ ਕੇ ਪੰਜਾਬ ਤੇ ਰਾਜ ਕੀਤਾ ਅਤੇ ਬੋਧੀ ਭਿੱਖੂ ਨਾਗਸੇਨ ਨਾਲ ਉਸ ਦਾ ਸੰਵਾਦ ਪਾਲੀ ਗ੍ਰੰਥ "ਮਿਲਿੰਦਪਨਹੋ" ਵਿੱਚ ਦਰਜ ਹੈ?',
            hi: 'दूसरी शताब्दी ईसा पूर्व में किस हिंद-यूनानी (Indo-Greek) शासक ने साकल (सियालकोट) को अपनी राजधानी बनाकर पंजाब पर शासन किया और बौद्ध भिक्षु नागसेन के साथ उसका दार्शनिक संवाद पाली ग्रंथ "मिलिंदपन्हो" में संकलित है?'
        },
        options: {
            A: { en: 'Demetrius I', pa: 'ਡਿਮੈਟ੍ਰੀਅਸ ਪਹਿਲਾ', hi: 'डेमेट्रियस प्रथम' },
            B: { en: 'Menander I (Milinda)', pa: 'ਮਿਨਾਂਡਰ ਪਹਿਲਾ (ਮਿਲਿੰਦ)', hi: 'मिनांडर प्रथम (मिलिंद)' },
            C: { en: 'Antialcidas', pa: 'ਐਂਟੀਅਲਕੀਡਸ', hi: 'एंटियालकीदस' },
            D: { en: 'Gondophernes', pa: 'ਗੋਂਡੋਫਰਨੀਜ਼', hi: 'गोंडोफ़र्नीज़' }
        },
        correct: 'B',
        explanation: {
            en: 'Menander I (known as Milinda in Indian sources, c. 165–130 BCE) ruled from Sakala (modern Sialkot). His philosophical questions to Buddhist monk Nagasena are recorded in the Pali work "Milinda Panho" (Questions of Milinda).',
            pa: 'ਇੰਡੋ-ਗ੍ਰੀਕ ਰਾਜਾ ਮਿਨਾਂਡਰ ਪਹਿਲਾ (ਮਿਲਿੰਦ) ਦੀ ਰਾਜਧਾਨੀ ਸਾਕਲ (ਸਿਆਲਕੋਟ) ਸੀ ਅਤੇ ਬੋਧੀ ਵਿਦਵਾਨ ਨਾਗਸੇਨ ਨਾਲ ਉਸ ਦੇ ਪ੍ਰਸ਼ਨ-ਉੱਤਰ "ਮਿਲਿੰਦਪਨਹੋ" ਵਿੱਚ ਦਰਜ ਹਨ।',
            hi: 'हिंद-यूनानी शासक मिनांडर प्रथम (मिलिंद) की राजधानी साकल (सियालकोट) थी और बौद्ध भिक्षु नागसेन के साथ उसके संवाद "मिलिंदपन्हो" में दर्ज हैं।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-pam-7',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Which rulers of the Hindushahi Dynasty (capital at Waihind / Udabhandapura and later Lahore)offered fierce resistance to Mahmud of Ghazni in the Battles of Peshawar (1001 CE) and Waihind (1008 CE)?',
            pa: 'ਹਿੰਦੂਸ਼ਾਹੀ ਵੰਸ਼ (ਰਾਜਧਾਨੀ ਵੈਹਿੰਦ / ਉਦਭਾਂਡਪੁਰ ਅਤੇ ਲਾਹੌਰ) ਦੇ ਕਿਹੜੇ ਸ਼ਾਸਕਾਂ ਨੇ ਪੇਸ਼ਾਵਰ (1001 CE) ਅਤੇ ਵੈਹਿੰਦ (1008 CE) ਦੀਆਂ ਲੜਾਈਆਂ ਵਿੱਚ ਮਹਿਮੂਦ ਗਜ਼ਨਵੀ ਦਾ ਡਟ ਕੇ ਮੁਕਾਬਲਾ ਕੀਤਾ?',
            hi: 'हिंदूशाही वंश (राजधानी वैहिंद / उदभांडपुर और बाद में लाहौर) के किन शासकों ने पेशावर (1001 ई.) और वैहिंद (1008 ई.) के युद्धों में महमूद गजनवी का कड़ा प्रतिरोध किया?'
        },
        options: {
            A: { en: 'Jayapala (1001 CE) and his son Anandapala (1008 CE, followed by Trilochanapala and Bhimapala)', pa: 'ਜੈਪਾਲ (1001 CE) ਅਤੇ ਉਸ ਦਾ ਪੁੱਤਰ ਅਨੰਦਪਾਲ (1008 CE, ਬਾਅਦ ਵਿੱਚ ਤ੍ਰਿਲੋਚਨਪਾਲ ਤੇ ਭੀਮਪਾਲ)', hi: 'जयपाल (1001 ई.) और उसका पुत्र आनंदपाल (1008 ई., तत्पश्चात त्रिलोचनपाल व भीमपाल)' },
            B: { en: 'Prithviraj Chauhan and Jaichand of Kannauj', pa: 'ਪ੍ਰਿਥਵੀਰਾਜ ਚੌਹਾਨ ਅਤੇ ਕਨੌਜ ਦਾ ਜੈਚੰਦ', hi: 'पृथ्वीराज चौहान और कन्नौज का जयचंद' },
            C: { en: 'Dahir of Sindh and Lalitaditya of Kashmir', pa: 'ਸਿੰਧ ਦਾ ਦਾਹਿਰ ਅਤੇ ਕਸ਼ਮੀਰ ਦਾ ਲਲਿਤਾਦਿੱਤਿਆ', hi: 'सिंध का दाहिर और कश्मीर का ललितादित्य' },
            D: { en: 'Mihira Bhoja and Mahendrapala', pa: 'ਮਿਹਿਰ ਭੋਜ ਅਤੇ ਮਹਿੰਦਰਪਾਲ', hi: 'मिहिर भोज और महेंद्रपाल' }
        },
        correct: 'A',
        explanation: {
            en: 'The Hindushahi dynasty (founded by Kallar) guarded the northwestern gateway of Punjab. King Jayapala fought Mahmud of Ghazni at Peshawar (1001 CE) and his son Anandapala fought Mahmud at Waihind (1008 CE), followed by Trilochanapala and Bhimapala before Mahmud annexed Punjab in 1021 CE.',
            pa: 'ਹਿੰਦੂਸ਼ਾਹੀ ਵੰਸ਼ ਦੇ ਰਾਜਾ ਜੈਪਾਲ (1001 CE, ਪੇਸ਼ਾਵਰ ਦੀ ਲੜਾਈ) ਅਤੇ ਉਸ ਦੇ ਪੁੱਤਰ ਅਨੰਦਪਾਲ (1008 CE, ਵੈਹਿੰਦ ਦੀ ਲੜਾਈ) ਅਤੇ ਪੋਤਰੇ ਤ੍ਰਿਲੋਚਨਪਾਲ ਨੇ ਮਹਿਮੂਦ ਗਜ਼ਨਵੀ ਦਾ ਡਟ ਕੇ ਮੁਕਾਬਲਾ ਕੀਤਾ।',
            hi: 'हिंदूशाही वंश के शासक जयपाल (1001 ई., पेशावर का युद्ध) और उसके पुत्र आनंदपाल (1008 ई., वैहिंद का युद्ध) तथा पौत्र त्रिलोचनपाल ने महमूद गजनवी का कड़ा मुकाबला किया।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-pam-8',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Which medieval fort of Punjab (known as Tabarhind in Sultanate chronicles) was captured by Muhammad Ghori in 1189 CE (triggering the Battles of Tarain) and later served as the prison of Razia Sultana in 1240 CE under rebel governor Altunia?',
            pa: 'ਪੰਜਾਬ ਦੇ ਕਿਸ ਇਤਿਹਾਸਕ ਕਿਲੇ (ਜਿਸ ਨੂੰ ਸਲਤਨਤ ਕਾਲ ਵਿੱਚ ਤਬਰਹਿੰਦ ਕਿਹਾ ਜਾਂਦਾ ਸੀ) ਤੇ 1189 CE ਵਿੱਚ ਮੁਹੰਮਦ ਗੌਰੀ ਨੇ ਕਬਜ਼ਾ ਕੀਤਾ (ਜਿਸ ਕਾਰਨ ਤਰਾਈਨ ਦੀਆਂ ਲੜਾਈਆਂ ਹੋਈਆਂ) ਅਤੇ ਜਿੱਥੇ 1240 CE ਵਿੱਚ ਗਵਰਨਰ ਅਲਤੂਨੀਆ ਨੇ ਰਜ਼ੀਆ ਸੁਲਤਾਨਾ ਨੂੰ ਕੈਦ ਰੱਖਿਆ?',
            hi: 'पंजाब के किस ऐतिहासिक किले (जिसे सल्तनत काल में तबरहिंद कहा जाता था) पर 1189 ई. में मुहम्मद गौरी ने अधिकार किया (जिससे तराइन के युद्ध हुए) और जहाँ 1240 ई. में विद्रोही सूबेदार अल्तूनिया ने रज़िया सुल्ताना को बंदी बनाया था?'
        },
        options: {
            A: { en: 'Qila Mubarak, Bathinda', pa: 'ਕਿਲਾ ਮੁਬਾਰਕ, ਬਠਿੰਡਾ', hi: 'किला मुबारक, भटिंडा' },
            B: { en: 'Phillaur Fort, Jalandhar', pa: 'ਫਿਲੌਰ ਦਾ ਕਿਲਾ, ਜਲੰਧਰ', hi: 'फिल्लौर किला, जालंधर' },
            C: { en: 'Gobindgarh Fort, Amritsar', pa: 'ਗੋਬਿੰਦਗੜ੍ਹ ਕਿਲਾ, ਅੰਮ੍ਰਿਤਸਰ', hi: 'गोविंदगढ़ किला, अमृतसर' },
            D: { en: 'Bahadurgarh Fort, Patiala', pa: 'ਬਹਾਦਰਗੜ੍ਹ ਕਿਲਾ, ਪਟਿਆਲਾ', hi: 'बहादुरगढ़ किला, पटियाला' }
        },
        correct: 'A',
        explanation: {
            en: 'Qila Mubarak at Bathinda (known as Tabarhind in medieval Persian chronicles) was captured by Muhammad Ghori in 1189 CE, prompting Prithviraj Chauhan to march to Tarain (1191). In 1240 CE, Malik Ikhtiyar-ud-din Altunia, Governor of Tabarhind (Bathinda), imprisoned Razia Sultana in Qila Mubarak.',
            pa: 'ਬਠਿੰਡਾ ਦੇ ਕਿਲਾ ਮੁਬਾਰਕ (ਮੱਧਕਾਲੀ ਨਾਮ ਤਬਰਹਿੰਦ) ਤੇ 1189 ਵਿੱਚ ਮੁਹੰਮਦ ਗੌਰੀ ਨੇ ਕਬਜ਼ਾ ਕੀਤਾ ਸੀ ਅਤੇ 1240 ਵਿੱਚ ਇੱਥੋਂ ਦੇ ਸੂਬੇਦਾਰ ਅਲਤੂਨੀਆ ਨੇ ਰਜ਼ੀਆ ਸੁਲਤਾਨਾ ਨੂੰ ਇਸੇ ਕਿਲੇ ਵਿੱਚ ਕੈਦ ਕੀਤਾ ਸੀ।',
            hi: 'भटिंडा के किला मुबारक (मध्यकालीन नाम तबरहिंद) पर 1189 ई. में मुहम्मद गौरी ने कब्ज़ा किया था और 1240 ई. में सूबेदार अल्तूनिया ने रज़िया सुल्ताना को इसी किले में बंदी बनाया था।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-pam-9',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'At which place in Gurdaspur district of Punjab was the 13-year-old Mughal prince Akbar crowned Emperor by regent Bairam Khan on a brick platform on 14 February 1556?',
            pa: 'ਪੰਜਾਬ ਦੇ ਗੁਰਦਾਸਪੁਰ ਜ਼ਿਲ੍ਹੇ ਦੇ ਕਿਸ ਸਥਾਨ ਤੇ 14 ਫਰਵਰੀ 1556 ਨੂੰ ਬੈਰਮ ਖਾਂ ਵੱਲੋਂ ਇੱਟਾਂ ਦੇ ਥੜ੍ਹੇ ਉੱਤੇ 13 ਸਾਲਾ ਮੁਗਲ ਸ਼ਹਿਜ਼ਾਦੇ ਅਕਬਰ ਦੀ ਤਾਜਪੋਸ਼ੀ ਕੀਤੀ ਗਈ ਸੀ?',
            hi: 'पंजाब के गुरदासपुर ज़िले के किस स्थान पर 14 फ़रवरी 1556 को बैरम खाँ द्वारा ईंटों के चबूतरे पर 13 वर्षीय मुग़ल राजकुमार अकबर का राज्याभिषेक किया गया था?'
        },
        options: {
            A: { en: 'Kalanaur (Gurdaspur)', pa: 'ਕਲਾਨੌਰ (ਗੁਰਦਾਸਪੁਰ)', hi: 'कलानौर (गुरदासपुर)' },
            B: { en: 'Batala (Gurdaspur)', pa: 'ਬਟਾਲਾ (ਗੁਰਦਾਸਪੁਰ)', hi: 'बटाला (गुरदासपुर)' },
            C: { en: 'Sirhind (Fatehgarh Sahib)', pa: 'ਸਰਹਿੰਦ (ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ)', hi: 'सरहिंद (फ़तेहगढ़ साहिब)' },
            D: { en: 'Sultanpur Lodhi (Kapurthala)', pa: 'ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ (ਕਪੂਰਥਲਾ)', hi: 'सुल्तानपुर लोधी (कपूरथला)' }
        },
        correct: 'A',
        explanation: {
            en: 'When Humayun died in Delhi in January 1556, Prince Akbar and his guardian Bairam Khan were campaigning in Punjab against Sikandar Shah Suri. Bairam Khan crowned Akbar at Kalanaur (in Gurdaspur district) on 14 February 1556 on the Takht-i-Akbari brick platform.',
            pa: 'ਹੁਮਾਯੂੰ ਦੀ ਮੌਤ ਸਮੇਂ ਅਕਬਰ ਪੰਜਾਬ ਵਿੱਚ ਸਿਕੰਦਰ ਸ਼ਾਹ ਸੂਰੀ ਵਿਰੁੱਧ ਮੁਹਿੰਮ ਤੇ ਸੀ। ਬੈਰਮ ਖਾਂ ਨੇ 14 ਫਰਵਰੀ 1556 ਨੂੰ ਕਲਾਨੌਰ (ਜ਼ਿਲ੍ਹਾ ਗੁਰਦਾਸਪੁਰ) ਵਿਖੇ ਤਖ਼ਤ-ਏ-ਅਕਬਰੀ ਤੇ ਅਕਬਰ ਦੀ ਤਾਜਪੋਸ਼ੀ ਕੀਤੀ।',
            hi: 'हुमायूँ की मृत्यु के समय अकबर पंजाब में सिकंदर शाह सूरी के विरुद्ध अभियान पर था। बैरम खाँ ने 14 फ़रवरी 1556 को कलानौर (ज़िला गुरदासपुर) में तख़्त-ए-अकबरी पर अकबर का राज्याभिषेक किया।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-pam-10',
        topicId: 'punjab-ancient-medieval',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Match the following Sufi Saints of Punjab with their Sufi Silsilah (Order) and key contribution:\n1. Baba Sheikh Farid Ganjshakar — (i) Qadiri Silsilah; laid the foundation stone of Harmandir Sahib (1588/89)\n2. Hazrat Mian Mir — (ii) Chishti Silsilah (Pakpattan); 112 Slokas and 4 Shabads in Sri Guru Granth Sahib Ji\n3. Shah Hussain (Madho Lal Hussain) — (iii) Qadiri Silsilah (Kasur); disciple of Shah Inayat Qadiri\n4. Baba Bulleh Shah — (iv) Qadiri/Malamati tradition (Lahore); pioneer of the Punjabi Kafi poetic form',
            pa: 'ਪੰਜਾਬ ਦੇ ਹੇਠ ਲਿਖੇ ਸੂਫ਼ੀ ਸੰਤਾਂ ਦਾ ਉਹਨਾਂ ਦੇ ਸਿਲਸਿਲੇ ਅਤੇ ਯੋਗਦਾਨ ਨਾਲ ਮਿਲਾਨ ਕਰੋ:\n1. ਬਾਬਾ ਸ਼ੇਖ ਫ਼ਰੀਦ ਗੰਜਸ਼ਕਰ — (i) ਕਾਦਰੀ ਸਿਲਸਿਲਾ; ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਨੀਂਹ ਰੱਖੀ (1588/89)\n2. ਹਜ਼ਰਤ ਮੀਆਂ ਮੀਰ — (ii) ਚਿਸ਼ਤੀ ਸਿਲਸਿਲਾ (ਪਾਕਪਟਨ); ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ 112 ਸਲੋਕ ਤੇ 4 ਸ਼ਬਦ\n3. ਸ਼ਾਹ ਹੁਸੈਨ (ਮਾਧੋ ਲਾਲ ਹੁਸੈਨ) — (iii) ਕਾਦਰੀ ਸਿਲਸਿਲਾ (ਕਸੂਰ); ਸ਼ਾਹ ਇਨਾਇਤ ਕਾਦਰੀ ਦੇ ਮੁਰੀਦ\n4. ਬਾਬਾ ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ — (iv) ਕਾਦਰੀ/ਮਲਾਮਤੀ ਪਰੰਪਰਾ (ਲਾਹੌਰ); ਪੰਜਾਬੀ ਕਾਫ਼ੀ ਕਾਵਿ-ਰੂਪ ਦੇ ਮੋਢੀ',
            hi: 'पंजाब के निम्नलिखित सूफ़ी संतों का उनके सिलसिले एवं योगदान से मिलान करें:\n1. बाबा शेख़ फ़रीद गंजशकर — (i) कादरी सिलसिला; श्री हरिमंदिर साहिब की नींव रखी (1588/89)\n2. हज़रत मियाँ मीर — (ii) चिश्ती सिलसिला (पाकपत्तन); श्री गुरु ग्रंथ साहिब में 112 श्लोक व 4 शब्द\n3. शाह हुसैन (माधो लाल हुसैन) — (iii) कादरी सिलसिला (कसूर); शाह इनायत कादरी के शिष्य\n4. बाबा बुल्ले शाह — (iv) कादरी/मलामती परंपरा (लाहौर); पंजाबी काफ़ी काव्य-रूप के प्रवर्तक'
        },
        options: {
            A: { en: '1-(ii), 2-(i), 3-(iv), 4-(iii)', pa: '1-(ii), 2-(i), 3-(iv), 4-(iii)', hi: '1-(ii), 2-(i), 3-(iv), 4-(iii)' },
            B: { en: '1-(i), 2-(ii), 3-(iv), 4-(iii)', pa: '1-(i), 2-(ii), 3-(iv), 4-(iii)', hi: '1-(i), 2-(ii), 3-(iv), 4-(iii)' },
            C: { en: '1-(ii), 2-(iv), 3-(i), 4-(iii)', pa: '1-(ii), 2-(iv), 3-(i), 4-(iii)', hi: '1-(ii), 2-(iv), 3-(i), 4-(iii)' },
            D: { en: '1-(iii), 2-(i), 3-(ii), 4-(iv)', pa: '1-(iii), 2-(i), 3-(ii), 4-(iv)', hi: '1-(iii), 2-(i), 3-(ii), 4-(iv)' }
        },
        correct: 'A',
        explanation: {
            en: 'Baba Sheikh Farid (1173–1265, Chishti order at Ajodhan/Pakpattan) authored 112 Slokas and 4 Shabads in Guru Granth Sahib; Hazrat Mian Mir (Qadiri order, Lahore) laid the foundation stone of Harmandir Sahib; Shah Hussain (1538–1599, Lahore) pioneered the Punjabi Kafi; Baba Bulleh Shah (1680–1757, Kasur, disciple of Shah Inayat Qadiri) brought Punjabi Sufi Kafi to its zenith.',
            pa: 'ਬਾਬਾ ਸ਼ੇਖ ਫ਼ਰੀਦ ਜੀ -> ਚਿਸ਼ਤੀ ਸਿਲਸਿਲਾ (112 ਸਲੋਕ ਤੇ 4 ਸ਼ਬਦ); ਹਜ਼ਰਤ ਮੀਆਂ ਮੀਰ -> ਕਾਦਰੀ ਸਿਲਸਿਲਾ (ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਨੀਂਹ); ਸ਼ਾਹ ਹੁਸੈਨ -> ਪੰਜਾਬੀ ਕਾਫ਼ੀ ਦੇ ਮੋਢੀ; ਬਾਬਾ ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ -> ਕਸੂਰ (ਮੁਰਸ਼ਦ ਸ਼ਾਹ ਇਨਾਇਤ ਕਾਦਰੀ)।',
            hi: 'बाबा शेख़ फ़रीद -> चिश्ती सिलसिला (112 श्लोक व 4 शब्द); हज़रत मियाँ मीर -> कादरी सिलसिला (हरिमंदिर साहिब की नींव); शाह हुसैन -> पंजाबी काफ़ी के प्रवर्तक; बाबा बुल्ले शाह -> कसूर (मुर्शिद शाह इनायत कादरी)।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },

    // =========================================================================
    // 6. PARTITION, PEPSU & PUNJABI SUBA (punjab-partition-suba-modern) — 10 MCQs
    // =========================================================================
    {
        id: 'q-ppsm-1',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'Out of the 29 districts of undivided British Punjab at the time of Partition in August 1947, how many districts came to East Punjab (India)?',
            pa: 'ਅਗਸਤ 1947 ਦੀ ਵੰਡ ਸਮੇਂ ਅਣਵੰਡੇ ਬ੍ਰਿਟਿਸ਼ ਪੰਜਾਬ ਦੇ ਕੁੱਲ 29 ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚੋਂ ਕਿੰਨੇ ਜ਼ਿਲ੍ਹੇ ਪੂਰਬੀ ਪੰਜਾਬ (ਭਾਰਤ) ਦੇ ਹਿੱਸੇ ਆਏ ਸਨ?',
            hi: 'अगस्त 1947 के विभाजन के समय अविभाजित ब्रिटिश पंजाब के कुल 29 ज़िलों में से कितने ज़िले पूर्वी पंजाब (भारत) के हिस्से में आए?'
        },
        options: {
            A: { en: '13 districts (approx. 38% area)', pa: '13 ਜ਼ਿਲ੍ਹੇ (ਲਗਭਗ 38% ਖੇਤਰਫਲ)', hi: '13 ज़िले (लगभग 38% क्षेत्रफल)' },
            B: { en: '16 districts (approx. 62% area)', pa: '16 ਜ਼ਿਲ੍ਹੇ (ਲਗਭਗ 62% ਖੇਤਰਫਲ)', hi: '16 ज़िले (लगभग 62% क्षेत्रफल)' },
            C: { en: '10 districts', pa: '10 ਜ਼ਿਲ੍ਹੇ', hi: '10 ज़िले' },
            D: { en: '22 districts', pa: '22 ਜ਼ਿਲ੍ਹੇ', hi: '22 ज़िले' }
        },
        correct: 'A',
        explanation: {
            en: 'Under the Radcliffe Award (August 1947), out of 29 districts in undivided British Punjab, 16 districts went to West Punjab (Pakistan) and 13 districts (~38% of the area) came to East Punjab (India).',
            pa: '1947 ਦੀ ਵੰਡ ਸਮੇਂ ਬ੍ਰਿਟਿਸ਼ ਪੰਜਾਬ ਦੇ 29 ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚੋਂ 16 ਜ਼ਿਲ੍ਹੇ ਪੱਛਮੀ ਪੰਜਾਬ (ਪਾਕਿਸਤਾਨ) ਅਤੇ 13 ਜ਼ਿਲ੍ਹੇ (ਲਗਭਗ 38% ਰਕਬਾ) ਪੂਰਬੀ ਪੰਜਾਬ (ਭਾਰਤ) ਨੂੰ ਮਿਲੇ।',
            hi: '1947 के विभाजन में ब्रिटिश पंजाब के 29 ज़िलों में से 16 ज़िले पश्चिमी पंजाब (पाकिस्तान) और 13 ज़िले (लगभग 38% क्षेत्र) पूर्वी पंजाब (भारत) को मिले।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-ppsm-2',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level B)',
        question: {
            en: 'On which date did the Punjab Reorganisation Act, 1966 come into force, trifurcating Punjab into the Punjabi-speaking state of Punjab, the Hindi-speaking state of Haryana, and the Union Territory of Chandigarh?',
            pa: 'ਪੰਜਾਬ ਪੁਨਰਗਠਨ ਐਕਟ, 1966 ਕਿਸ ਮਿਤੀ ਨੂੰ ਲਾਗੂ ਹੋਇਆ, ਜਿਸ ਤਹਿਤ ਪੰਜਾਬੀ ਬੋਲਦਾ ਸੂਬਾ ਪੰਜਾਬ, ਹਿੰਦੀ ਬੋਲਦਾ ਰਾਜ ਹਰਿਆਣਾ ਅਤੇ ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ ਚੰਡੀਗੜ੍ਹ ਹੋਂਦ ਵਿੱਚ ਆਏ?',
            hi: 'पंजाब पुनर्गठन अधिनियम, 1966 किस तिथि को लागू हुआ, जिसके अंतर्गत पंजाबी भाषी पंजाब, हिंदी भाषी हरियाणा और केंद्र शासित प्रदेश चंडीगढ़ का गठन हुआ?'
        },
        options: {
            A: { en: '15 July 1948', pa: '15 ਜੁਲਾਈ 1948', hi: '15 जुलाई 1948' },
            B: { en: '1 November 1956', pa: '1 ਨਵੰਬਰ 1956', hi: '1 नवंबर 1956' },
            C: { en: '1 November 1966', pa: '1 ਨਵੰਬਰ 1966', hi: '1 नवंबर 1966' },
            D: { en: '24 July 1985', pa: '24 ਜੁਲਾਈ 1985', hi: '24 जुलाई 1985' }
        },
        correct: 'C',
        explanation: {
            en: 'The Punjab Reorganisation Act, 1966 came into force on 1 November 1966, creating the linguistic state of Punjab, Haryana (17th state of India), and UT Chandigarh, while transferring hilly areas like Kangra and Shimla to Himachal Pradesh.',
            pa: '1 ਨਵੰਬਰ 1966 ਨੂੰ ਪੰਜਾਬ ਪੁਨਰਗਠਨ ਐਕਟ, 1966 ਲਾਗੂ ਹੋਇਆ, ਜਿਸ ਨਾਲ ਭਾਸ਼ਾਈ ਆਧਾਰ ਤੇ ਨਵਾਂ ਪੰਜਾਬ, ਹਰਿਆਣਾ ਅਤੇ ਚੰਡੀਗੜ੍ਹ (UT) ਬਣੇ।',
            hi: '1 नवंबर 1966 को पंजाब पुनर्गठन अधिनियम, 1966 लागू हुआ, जिससे भाषाई आधार पर पंजाब, हरियाणा और चंडीगढ़ (UT) का गठन हुआ।'
        },
        difficulty: 'easy',
        originType: 'authored-original'
    },
    {
        id: 'q-ppsm-3',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Who were the four High Court Judges appointed as members of the 1947 Punjab Boundary Commission chaired by Sir Cyril Radcliffe?',
            pa: '1947 ਵਿੱਚ ਸਰ ਸੀਰਿਲ ਰੈੱਡਕਲਿਫ਼ ਦੀ ਪ੍ਰਧਾਨਗੀ ਹੇਠ ਬਣੇ ਪੰਜਾਬ ਬਾਉਂਡਰੀ ਕਮਿਸ਼ਨ ਦੇ ਚਾਰ ਹਾਈ ਕੋਰਟ ਜੱਜ ਮੈਂਬਰ ਕੌਣ ਸਨ?',
            hi: '1947 में सर सिरिल रैडक्लिफ़ की अध्यक्षता में गठित पंजाब सीमा आयोग के चार उच्च न्यायालय न्यायाधीश सदस्य कौन थे?'
        },
        options: {
            A: { en: 'Justice Mehr Chand Mahajan, Justice Teja Singh, Justice Din Muhammad, and Justice Muhammad Munir', pa: 'ਜਸਟਿਸ ਮੇਹਰ ਚੰਦ ਮਹਾਜਨ, ਜਸਟਿਸ ਤੇਜਾ ਸਿੰਘ, ਜਸਟਿਸ ਦੀਨ ਮੁਹੰਮਦ ਅਤੇ ਜਸਟਿਸ ਮੁਹੰਮਦ ਮੁਨੀਰ', hi: 'न्यायमूर्ति मेहर चंद महाजन, न्यायमूर्ति तेजा सिंह, न्यायमूर्ति दीन मुहम्मद और न्यायमूर्ति मुहम्मद मुनीर' },
            B: { en: 'Justice J.C. Shah, Justice Fazl Ali, Justice H.N. Kunzru, and Justice K.M. Panikkar', pa: 'ਜਸਟਿਸ ਜੇ.ਸੀ. ਸ਼ਾਹ, ਜਸਟਿਸ ਫ਼ਜ਼ਲ ਅਲੀ, ਜਸਟਿਸ ਕੁੰਜ਼ਰੂ ਅਤੇ ਕੇ.ਐੱਮ. ਪਾਨੀਕਰ', hi: 'न्यायमूर्ति जे.सी. शाह, न्यायमूर्ति फ़ज़ल अली, एच.एन. कुंजरू और के.एम. पणिक्कर' },
            C: { en: 'Justice Gurnam Singh, Justice Kuldip Singh, Justice R.S. Sarkaria, and Justice M.M. Punchhi', pa: 'ਜਸਟਿਸ ਗੁਰਨਾਮ ਸਿੰਘ, ਜਸਟਿਸ ਕੁਲਦੀਪ ਸਿੰਘ, ਜਸਟਿਸ ਸਰਕਾਰੀਆ ਅਤੇ ਜਸਟਿਸ ਪੁੰਛੀ', hi: 'न्यायमूर्ति गुरनाम सिंह, न्यायमूर्ति कुलदीप सिंह, न्यायमूर्ति सरकारिया और न्यायमूर्ति पुंछी' },
            D: { en: 'Justice B.N. Rau, Justice Harilal Kania, Justice Zafrullah Khan, and Justice Abdur Rahim', pa: 'ਜਸਟਿਸ ਬੀ.ਐੱਨ. ਰਾਓ, ਜਸਟਿਸ ਹਰੀਲਾਲ ਕਾਨੀਆ, ਜ਼ਫ਼ਰੁੱਲਾ ਖਾਨ ਅਤੇ ਅਬਦੁਰ ਰਹੀਮ', hi: 'न्यायमूर्ति बी.एन. राव, न्यायमूर्ति हीरालाल कानिया, ज़फ़रुल्लाह खान और अब्दुर रहीम' }
        },
        correct: 'A',
        explanation: {
            en: 'The Punjab Boundary Commission (1947), chaired by Sir Cyril Radcliffe, consisted of four members: Justice Mehr Chand Mahajan and Justice Teja Singh (nominated by Congress/Sikhs) and Justice Din Muhammad and Justice Muhammad Munir (nominated by the Muslim League).',
            pa: '1947 ਦੇ ਪੰਜਾਬ ਬਾਉਂਡਰੀ ਕਮਿਸ਼ਨ (ਚੇਅਰਮੈਨ ਸਰ ਸੀਰਿਲ ਰੈੱਡਕਲਿਫ਼) ਵਿੱਚ 4 ਜੱਜ ਸਨ: ਜਸਟਿਸ ਮੇਹਰ ਚੰਦ ਮਹਾਜਨ ਤੇ ਜਸਟਿਸ ਤੇਜਾ ਸਿੰਘ (ਭਾਰਤ ਪੱਖ) ਅਤੇ ਜਸਟਿਸ ਦੀਨ ਮੁਹੰਮਦ ਤੇ ਜਸਟਿਸ ਮੁਹੰਮਦ ਮੁਨੀਰ (ਮੁਸਲਿਮ ਲੀਗ ਪੱਖ)।',
            hi: '1947 के पंजाब सीमा आयोग (अध्यक्ष सर सिरिल रैडक्लिफ़) में 4 न्यायाधीश थे: न्यायमूर्ति मेहर चंद महाजन व न्यायमूर्ति तेजा सिंह तथा न्यायमूर्ति दीन मुहम्मद व न्यायमूर्ति मुहम्मद मुनीर।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-ppsm-4',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Which eight princely states were integrated on 15 July 1948 to form PEPSU (Patiala and East Punjab States Union), and who served as its Rajpramukh and first Premier respectively?',
            pa: '15 ਜੁਲਾਈ 1948 ਨੂੰ ਕਿਹੜੀਆਂ 8 ਰਿਆਸਤਾਂ ਨੂੰ ਮਿਲਾ ਕੇ ਪੈਪਸੂ (PEPSU) ਬਣਾਇਆ ਗਿਆ ਸੀ, ਅਤੇ ਇਸ ਦੇ ਰਾਜਪ੍ਰਮੁੱਖ ਤੇ ਪਹਿਲੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ (ਮੁੱਖ ਮੰਤਰੀ) ਕ੍ਰਮਵਾਰ ਕੌਣ ਸਨ?',
            hi: '15 जुलाई 1948 को किन 8 रियासतों को मिलाकर पेप्सू (PEPSU) का गठन किया गया था, और इसके राजप्रमुख तथा प्रथम प्रीमियर (मुख्यमंत्री) क्रमशः कौन थे?'
        },
        options: {
            A: { en: 'Patiala, Jind, Nabha, Kapurthala, Faridkot, Malerkotla, Kalsia, Nalagarh | Rajpramukh: Maharaja Yadavindra Singh; First Premier: Gian Singh Rarewala', pa: 'ਪਟਿਆਲਾ, ਜੀਂਦ, ਨਾਭਾ, ਕਪੂਰਥਲਾ, ਫ਼ਰੀਦਕੋਟ, ਮਾਲੇਰਕੋਟਲਾ, ਕਲਸੀਆ, ਨਾਲਾਗੜ੍ਹ | ਰਾਜਪ੍ਰਮੁੱਖ: ਮਹਾਰਾਜਾ ਯਾਦਵਿੰਦਰ ਸਿੰਘ; ਪਹਿਲੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ: ਗਿਆਨ ਸਿੰਘ ਰਾੜੇਵਾਲਾ', hi: 'पटियाला, जींद, नाभा, कपूरथला, फ़रीदकोट, मालेरकोटला, कलसिया, नालागढ़ | राजप्रमुख: महाराजा यादविंदर सिंह; प्रथम प्रीमियर: ज्ञान सिंह रारेवाला' },
            B: { en: 'Patiala, Bahawalpur, Mandi, Chamba, Bilaspur, Sirmur, Jind, Nabha | Rajpramukh: Maharaja Bhupinder Singh; Premier: Partap Singh Kairon', pa: 'ਪਟਿਆਲਾ, ਬਹਾਵਲਪੁਰ, ਮੰਡੀ, ਚੰਬਾ, ਬਿਲਾਸਪੁਰ, ਸਿਰਮੌਰ, ਜੀਂਦ, ਨਾਭਾ | ਰਾਜਪ੍ਰਮੁੱਖ: ਮਹਾਰਾਜਾ ਭੁਪਿੰਦਰ ਸਿੰਘ; ਪ੍ਰਧਾਨ ਮੰਤਰੀ: ਪ੍ਰਤਾਪ ਸਿੰਘ ਕੈਰੋਂ', hi: 'पटियाला, बहावलपुर, मंडी, चंबा, बिलासपुर, सिरमौर, जींद, नाभा | राजप्रमुख: महाराजा भूपिंदर सिंह; प्रीमियर: प्रताप सिंह कैरों' },
            C: { en: 'Lahore, Amritsar, Jalandhar, Ludhiana, Ambala, Hisar, Rohtak, Karnal | Rajpramukh: C.M. Trivedi; Premier: Gopi Chand Bhargava', pa: 'ਲਾਹੌਰ, ਅੰਮ੍ਰਿਤਸਰ, ਜਲੰਧਰ, ਲੁਧਿਆਣਾ, ਅੰਬਾਲਾ, ਹਿਸਾਰ, ਰੋਹਤਕ, ਕਰਨਾਲ | ਰਾਜਪ੍ਰਮੁੱਖ: ਸੀ.ਐੱਮ. ਤ੍ਰਿਵੇਦੀ; ਪ੍ਰਧਾਨ ਮੰਤਰੀ: ਗੋਪੀ ਚੰਦ ਭਾਰਗਵ', hi: 'लाहौर, अमृतसर, जालंधर, लुधियाना, अंबाला, हिसार, रोहतक, करनाल | राजप्रमुख: सी.एम. त्रिवेदी; प्रीमियर: गोपी चंद भार्गव' },
            D: { en: 'Patiala, Jind, Nabha, Kangra, Kullu, Shimla, Una, Solan | Rajpramukh: Maharaja Jagatjit Singh; Premier: Bhim Sen Sachar', pa: 'ਪਟਿਆਲਾ, ਜੀਂਦ, ਨਾਭਾ, ਕਾਂਗੜਾ, ਕੁੱਲੂ, ਸ਼ਿਮਲਾ, ਊਨਾ, ਸੋਲਨ | ਰਾਜਪ੍ਰਮੁੱਖ: ਮਹਾਰਾਜਾ ਜਗਤਜੀਤ ਸਿੰਘ; ਪ੍ਰਧਾਨ ਮੰਤਰੀ: ਭੀਮ ਸੈਨ ਸੱਚਰ', hi: 'पटियाला, जींद, नाभा, कांगड़ा, कुल्लू, शिमला, ऊना, सोलन | राजप्रमुख: महाराजा जगतजीत सिंह; प्रीमियर: भीम सेन सच्चर' }
        },
        correct: 'A',
        explanation: {
            en: 'PEPSU was formed on 15 July 1948 by integrating 8 princely states (6 Salute states: Patiala, Jind, Nabha, Kapurthala, Faridkot, Malerkotla; and 2 Non-Salute states: Kalsia, Nalagarh) with Patiala as capital. Maharaja Yadavindra Singh was Rajpramukh, Maharaja Jagatjit Singh was Up-Rajpramukh, and Gian Singh Rarewala was first Premier.',
            pa: '15 ਜੁਲਾਈ 1948 ਨੂੰ 8 ਰਿਆਸਤਾਂ (ਪਟਿਆਲਾ, ਜੀਂਦ, ਨਾਭਾ, ਕਪੂਰਥਲਾ, ਫ਼ਰੀਦਕੋਟ, ਮਾਲੇਰਕੋਟਲਾ, ਕਲਸੀਆ, ਨਾਲਾਗੜ੍ਹ) ਨੂੰ ਮਿਲਾ ਕੇ ਪੈਪਸੂ ਬਣਿਆ। ਮਹਾਰਾਜਾ ਯਾਦਵਿੰਦਰ ਸਿੰਘ ਰਾਜਪ੍ਰਮੁੱਖ ਅਤੇ ਗਿਆਨ ਸਿੰਘ ਰਾੜੇਵਾਲਾ ਪਹਿਲੇ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਸਨ।',
            hi: '15 जुलाई 1948 को 8 रियासतों (पटियाला, जींद, नाभा, कपूरथला, फ़रीदकोट, मालेरकोटला, कलसिया, नालागढ़) को मिलाकर पेप्सू बना। महाराजा यादविंदर सिंह राजप्रमुख और ज्ञान सिंह रारेवाला प्रथम प्रीमियर थे।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-ppsm-5',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'What was the "Sachar Formula" announced on 1 October 1949 during the tenure of Chief Minister Bhim Sen Sachar?',
            pa: 'ਮੁੱਖ ਮੰਤਰੀ ਭੀਮ ਸੈਨ ਸੱਚਰ ਦੇ ਕਾਰਜਕਾਲ ਦੌਰਾਨ 1 ਅਕਤੂਬਰ 1949 ਨੂੰ ਐਲਾਨਿਆ ਗਿਆ "ਸੱਚਰ ਫਾਰਮੂਲਾ" ਕੀ ਸੀ?',
            hi: 'मुख्यमंत्री भीम सेन सच्चर के कार्यकाल के दौरान 1 अक्टूबर 1949 को घोषित "सच्चर फ़ॉर्मूला" क्या था?'
        },
        options: {
            A: { en: 'A language formula dividing East Punjab into a Punjabi Zone (Gurmukhi medium) and a Hindi Zone (Devanagari medium), while making the other language compulsory at the secondary stage', pa: 'ਇੱਕ ਭਾਸ਼ਾਈ ਫਾਰਮੂਲਾ ਜਿਸ ਨੇ ਪੂਰਬੀ ਪੰਜਾਬ ਨੂੰ ਪੰਜਾਬੀ ਜ਼ੋਨ (ਗੁਰਮੁਖੀ ਮਾਧਿਅਮ) ਅਤੇ ਹਿੰਦੀ ਜ਼ੋਨ (ਦੇਵਨਾਗਰੀ ਮਾਧਿਅਮ) ਵਿੱਚ ਵੰਡਿਆ ਅਤੇ ਦੂਜੀ ਭਾਸ਼ਾ ਨੂੰ ਸੈਕੰਡਰੀ ਪੱਧਰ ਤੇ ਲਾਜ਼ਮੀ ਕੀਤਾ', hi: 'एक भाषाई फ़ॉर्मूला जिसने पूर्वी पंजाब को पंजाबी ज़ोन (गुरमुखी माध्यम) और हिंदी ज़ोन (देवनागरी माध्यम) में विभाजित किया तथा दूसरी भाषा को माध्यमिक स्तर पर अनिवार्य बनाया' },
            B: { en: 'A river-water sharing formula between Punjab and Rajasthan', pa: 'ਪੰਜਾਬ ਅਤੇ ਰਾਜਸਥਾਨ ਵਿਚਕਾਰ ਦਰਿਆਈ ਪਾਣੀਆਂ ਦੀ ਵੰਡ ਦਾ ਫਾਰਮੂਲਾ', hi: 'पंजाब और राजस्थान के बीच नदी जल बंटवारे का फ़ॉर्मूला' },
            C: { en: 'A land consolidation scheme for refugee resettlement in Lahore', pa: 'ਲਾਹੌਰ ਵਿੱਚ ਸ਼ਰਨਾਰਥੀਆਂ ਦੇ ਮੁੜ-ਵਸੇਬੇ ਲਈ ਮੁਰੱਬੇਬੰਦੀ ਯੋਜਨਾ', hi: 'लाहौर में शरणार्थियों के पुनर्वास हेतु चकबंदी योजना' },
            D: { en: 'A formula to merge Himachal Pradesh into Jammu & Kashmir', pa: 'ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਨੂੰ ਜੰਮੂ-ਕਸ਼ਮੀਰ ਵਿੱਚ ਮਿਲਾਉਣ ਦਾ ਫਾਰਮੂਲਾ', hi: 'हिमाचल प्रदेश को जम्मू-कश्मीर में मिलाने का फ़ॉर्मूला' }
        },
        correct: 'A',
        explanation: {
            en: 'Signed on 1 October 1949 by Bhim Sen Sachar, Gopi Chand Bhargava, Giani Kartar Singh, and Sardar Ujjal Singh, the Sachar Formula bifurcated undivided East Punjab into a Punjabi Zone (where Punjabi in Gurmukhi script was medium of instruction up to matriculation and Hindi taught as second language) and a Hindi Zone (vice versa).',
            pa: '1 ਅਕਤੂਬਰ 1949 ਦੇ ਸੱਚਰ ਫਾਰਮੂਲੇ ਤਹਿਤ ਪੂਰਬੀ ਪੰਜਾਬ ਨੂੰ ਸਿੱਖਿਆ ਦੇ ਮਾਧਿਅਮ ਲਈ ਪੰਜਾਬੀ ਜ਼ੋਨ (ਗੁਰਮੁਖੀ ਲਿਪੀ) ਅਤੇ ਹਿੰਦੀ ਜ਼ੋਨ (ਦੇਵਨਾਗਰੀ ਲਿਪੀ) ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ ਸੀ।',
            hi: '1 अक्टूबर 1949 के सच्चर फ़ॉर्मूले के अंतर्गत पूर्वी पंजाब को शिक्षा के माध्यम हेतु पंजाबी ज़ोन (गुरमुखी लिपि) और हिंदी ज़ोन (देवनागरी लिपि) में विभाजित किया गया था।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-ppsm-6',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level I)',
        question: {
            en: 'Who became the first Chief Minister and first Governor of the reorganized linguistic state of Punjab on 1 November 1966?',
            pa: '1 ਨਵੰਬਰ 1966 ਨੂੰ ਪੁਨਰਗਠਿਤ ਭਾਸ਼ਾਈ ਸੂਬੇ ਪੰਜਾਬ ਦੇ ਪਹਿਲੇ ਮੁੱਖ ਮੰਤਰੀ ਅਤੇ ਪਹਿਲੇ ਰਾਜਪਾਲ ਕੌਣ ਬਣੇ?',
            hi: '1 नवंबर 1966 को पुनर्गठित भाषाई राज्य पंजाब के प्रथम मुख्यमंत्री और प्रथम राज्यपाल कौन बने?'
        },
        options: {
            A: { en: 'Chief Minister: Dr. Gopi Chand Bhargava | Governor: Sir Chandulal Madhavlal Trivedi', pa: 'ਮੁੱਖ ਮੰਤਰੀ: ਡਾ. ਗੋਪੀ ਚੰਦ ਭਾਰਗਵ | ਰਾਜਪਾਲ: ਚੰਦੂਲਾਲ ਮਾਧਵਲਾਲ ਤ੍ਰਿਵੇਦੀ', hi: 'मुख्यमंत्री: डॉ. गोपी चंद भार्गव | राज्यपाल: चंदूलाल माधवलाल त्रिवेदी' },
            B: { en: 'Chief Minister: Giani Gurmukh Singh Musafir | Governor: Dharma Vira', pa: 'ਮੁੱਖ ਮੰਤਰੀ: ਗਿਆਨੀ ਗੁਰਮੁਖ ਸਿੰਘ ਮੁਸਾਫ਼ਿਰ | ਰਾਜਪਾਲ: ਧਰਮ ਵੀਰ', hi: 'मुख्यमंत्री: ज्ञानी गुरमुख सिंह मुसाफ़िर | राज्यपाल: धर्म वीरा' },
            C: { en: 'Chief Minister: Partap Singh Kairon | Governor: N.V. Gadgil', pa: 'ਮੁੱਖ ਮੰਤਰੀ: ਪ੍ਰਤਾਪ ਸਿੰਘ ਕੈਰੋਂ | ਰਾਜਪਾਲ: ਐੱਨ.ਵੀ. ਗਾਡਗਿਲ', hi: 'मुख्यमंत्री: प्रताप सिंह कैरों | राज्यपाल: एन.वी. गाडगिल' },
            D: { en: 'Chief Minister: Giani Zail Singh | Governor: D.C. Pavate', pa: 'ਮੁੱਖ ਮੰਤਰੀ: ਗਿਆਨੀ ਜ਼ੈਲ ਸਿੰਘ | ਰਾਜਪਾਲ: ਡੀ.ਸੀ. ਪਾਵਟੇ', hi: 'मुख्यमंत्री: ज्ञानी ज़ैल सिंह | राज्यपाल: डी.सी. पावटे' }
        },
        correct: 'B',
        explanation: {
            en: 'While Dr. Gopi Chand Bhargava and Sir C.M. Trivedi were the first CM and Governor of East Punjab in August 1947, on 1 November 1966 Giani Gurmukh Singh Musafir became the first Chief Minister and Dharma Vira became the first Governor of reorganized Punjab.',
            pa: '15 ਅਗਸਤ 1947 ਨੂੰ ਡਾ. ਗੋਪੀ ਚੰਦ ਭਾਰਗਵ ਪਹਿਲੇ CM ਅਤੇ ਸੀ.ਐੱਮ. ਤ੍ਰਿਵੇਦੀ ਪਹਿਲੇ ਰਾਜਪਾਲ ਬਣੇ ਸਨ, ਜਦਕਿ 1 ਨਵੰਬਰ 1966 ਨੂੰ ਨਵੇਂ ਪੁਨਰਗਠਿਤ ਪੰਜਾਬ ਦੇ ਪਹਿਲੇ ਮੁੱਖ ਮੰਤਰੀ ਗਿਆਨੀ ਗੁਰਮੁਖ ਸਿੰਘ ਮੁਸਾਫ਼ਿਰ ਅਤੇ ਪਹਿਲੇ ਰਾਜਪਾਲ ਧਰਮ ਵੀਰ ਬਣੇ।',
            hi: '15 अगस्त 1947 को डॉ. गोपी चंद भार्गव प्रथम CM और सी.एम. त्रिवेदी प्रथम राज्यपाल बने थे, जबकि 1 नवंबर 1966 को पुनर्गठित पंजाब के प्रथम मुख्यमंत्री ज्ञानी गुरमुख सिंह मुसाफ़िर और प्रथम राज्यपाल धर्म वीरा बने।'
        },
        difficulty: 'medium',
        originType: 'authored-original'
    },
    {
        id: 'q-ppsm-7',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'Which Parliamentary Committee (appointed in September 1965) recommended the linguistic reorganization of Punjab in March 1966, and who were the three members of the subsequent Punjab Boundary Commission (April 1966)?',
            pa: 'ਸਤੰਬਰ 1965 ਵਿੱਚ ਬਣੀ ਕਿਸ ਸੰਸਦੀ ਕਮੇਟੀ ਨੇ ਮਾਰਚ 1966 ਵਿੱਚ ਪੰਜਾਬ ਦੇ ਭਾਸ਼ਾਈ ਪੁਨਰਗਠਨ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ, ਅਤੇ ਅਪ੍ਰੈਲ 1966 ਵਿੱਚ ਬਣੇ ਪੰਜਾਬ ਬਾਉਂਡਰੀ ਕਮਿਸ਼ਨ ਦੇ ਤਿੰਨ ਮੈਂਬਰ ਕੌਣ ਸਨ?',
            hi: 'सितंबर 1965 में गठित किस संसदीय समिति ने मार्च 1966 में पंजाब के भाषाई पुनर्गठन की सिफ़ारिश की, और अप्रैल 1966 में गठित पंजाब सीमा आयोग के तीन सदस्य कौन थे?'
        },
        options: {
            A: { en: 'Parliamentary Committee: Speaker Sardar Hukam Singh | Boundary Commission: Justice J.C. Shah (Chairman), S. Dutt, and M.M. Philip', pa: 'ਸੰਸਦੀ ਕਮੇਟੀ: ਸਪੀਕਰ ਸਰਦਾਰ ਹੁਕਮ ਸਿੰਘ | ਬਾਉਂਡਰੀ ਕਮਿਸ਼ਨ: ਜਸਟਿਸ ਜੇ.ਸੀ. ਸ਼ਾਹ (ਚੇਅਰਮੈਨ), ਐੱਸ. ਦੱਤ ਅਤੇ ਐੱਮ.ਐੱਮ. ਫਿਲਿਪ', hi: 'संसदीय समिति: स्पीकर सरदार हुकम सिंह | सीमा आयोग: न्यायमूर्ति जे.सी. शाह (अध्यक्ष), एस. दत्त और एम.एम. फिलिप' },
            B: { en: 'Parliamentary Committee: Master Tara Singh | Boundary Commission: Justice Fazl Ali, K.M. Panikkar, and H.N. Kunzru', pa: 'ਸੰਸਦੀ ਕਮੇਟੀ: ਮਾਸਟਰ ਤਾਰਾ ਸਿੰਘ | ਬਾਉਂਡਰੀ ਕਮਿਸ਼ਨ: ਜਸਟਿਸ ਫ਼ਜ਼ਲ ਅਲੀ, ਪਾਨੀਕਰ ਅਤੇ ਕੁੰਜ਼ਰੂ', hi: 'संसदीय समिति: मास्टर तारा सिंह | सीमा आयोग: न्यायमूर्ति फ़ज़ल अली, पणिक्कर और कुंजरू' },
            C: { en: 'Parliamentary Committee: Sant Fateh Singh | Boundary Commission: Justice Mathew, Justice Venkataramaiah, and Justice Desai', pa: 'ਸੰਸਦੀ ਕਮੇਟੀ: ਸੰਤ ਫ਼ਤਹਿ ਸਿੰਘ | ਬਾਉਂਡਰੀ ਕਮਿਸ਼ਨ: ਜਸਟਿਸ ਮੈਥਿਊ, ਵੈਂਕਟਰਮਈਆ ਅਤੇ ਦੇਸਾਈ', hi: 'संसदीय समिति: संत फ़तेह सिंह | सीमा आयोग: न्यायमूर्ति मैथ्यू, वेंकटरमैया और देसाई' },
            D: { en: 'Parliamentary Committee: Swaran Singh | Boundary Commission: Sir Cyril Radcliffe, Teja Singh, and Mehr Chand Mahajan', pa: 'ਸੰਸਦੀ ਕਮੇਟੀ: ਸਵਰਨ ਸਿੰਘ | ਬਾਉਂਡਰੀ ਕਮਿਸ਼ਨ: ਰੈੱਡਕਲਿਫ਼, ਤੇਜਾ ਸਿੰਘ ਅਤੇ ਮੇਹਰ ਚੰਦ ਮਹਾਜਨ', hi: 'संसदीय समिति: स्वर्ण सिंह | सीमा आयोग: रैडक्लिफ़, तेजा सिंह और मेहर चंद महाजन' }
        },
        correct: 'A',
        explanation: {
            en: 'Following the 1965 Indo-Pak War, a 22-member Parliamentary Committee on Punjabi Suba chaired by Lok Sabha Speaker Sardar Hukam Singh recommended linguistic reorganization on 18 March 1966. Thereafter, the 3-member Punjab Boundary Commission under Justice J.C. Shah (with S. Dutt and M.M. Philip) was appointed on 23 April 1966.',
            pa: 'ਲੋਕ ਸਭਾ ਸਪੀਕਰ ਸਰਦਾਰ ਹੁਕਮ ਸਿੰਘ ਦੀ ਅਗਵਾਈ ਵਾਲੀ 22 ਮੈਂਬਰੀ ਸੰਸਦੀ ਕਮੇਟੀ ਨੇ 18 ਮਾਰਚ 1966 ਨੂੰ ਭਾਸ਼ਾਈ ਪੁਨਰਗਠਨ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ, ਜਿਸ ਮਗਰੋਂ 23 ਅਪ੍ਰੈਲ 1966 ਨੂੰ ਜਸਟਿਸ ਜੇ.ਸੀ. ਸ਼ਾਹ, ਐੱਸ. ਦੱਤ ਅਤੇ ਐੱਮ.ਐੱਮ. ਫਿਲਿਪ ਵਾਲਾ ਸ਼ਾਹ ਕਮਿਸ਼ਨ ਬਣਿਆ।',
            hi: 'लोकसभा अध्यक्ष सरदार हुकम सिंह की अध्यक्षता वाली संसदीय समिति ने 18 मार्च 1966 को भाषाई पुनर्गठन की सिफ़ारिश की, जिसके पश्चात 23 अप्रैल 1966 को न्यायमूर्ति जे.सी. शाह, एस. दत्त और एम.एम. फिलिप वाला शाह आयोग गठित हुआ।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-ppsm-8',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'How did Sant Fateh Singh’s strategic framing of the Punjabi Suba demand after 1960 differ from Master Tara Singh’s earlier approach, and Which member of the 1966 Shah Commission dissented on awarding Kharar tehsil (including Chandigarh) to Haryana?',
            pa: '1960 ਤੋਂ ਬਾਅਦ ਸੰਤ ਫ਼ਤਹਿ ਸਿੰਘ ਵੱਲੋਂ ਪੰਜਾਬੀ ਸੂਬੇ ਦੀ ਮੰਗ ਨੂੰ ਪੇਸ਼ ਕਰਨ ਦਾ ਤਰੀਕਾ ਮਾਸਟਰ ਤਾਰਾ ਸਿੰਘ ਨਾਲੋਂ ਕਿਵੇਂ ਵੱਖਰਾ ਸੀ, ਅਤੇ 1966 ਦੇ ਸ਼ਾਹ ਕਮਿਸ਼ਨ ਦੇ ਕਿਸ ਮੈਂਬਰ ਨੇ ਖਰੜ ਤਹਿਸੀਲ (ਚੰਡੀਗੜ੍ਹ ਸਮੇਤ) ਹਰਿਆਣਾ ਨੂੰ ਦੇਣ ਦੇ ਫੈਸਲੇ ਨਾਲ ਅਸਹਿਮਤੀ ਪ੍ਰਗਟਾਈ ਸੀ?',
            hi: '1960 के बाद संत फ़तेह सिंह द्वारा पंजाबी सूबे की माँग को प्रस्तुत करने की रणनीति मास्टर तारा सिंह से किस प्रकार भिन्न थी, और 1966 के शाह आयोग के किस सदस्य ने खरड़ तहसील (चंडीगढ़ सहित) हरियाणा को देने के निर्णय पर असहमति जताई थी?'
        },
        options: {
            A: { en: 'Sant Fateh Singh framed the demand purely on linguistic basis (Punjabi language regardless of religious demographic percentage); S. Dutt dissented in favour of giving Kharar/Chandigarh to Punjab', pa: 'ਸੰਤ ਫ਼ਤਹਿ ਸਿੰਘ ਨੇ ਮੰਗ ਨੂੰ ਨਿਰੋਲ ਭਾਸ਼ਾਈ ਆਧਾਰ (ਪੰਜਾਬੀ ਭਾਸ਼ਾ) ਤੇ ਰੱਖਿਆ; ਐੱਸ. ਦੱਤ ਨੇ ਖਰੜ/ਚੰਡੀਗੜ੍ਹ ਪੰਜਾਬ ਨੂੰ ਦੇਣ ਦੇ ਹੱਕ ਵਿੱਚ ਅਸਹਿਮਤੀ ਨੋਟ ਲਿਖਿਆ', hi: 'संत फ़तेह सिंह ने माँग को विशुद्ध भाषाई आधार पर रखा; एस. दत्त ने खरड़/चंडीगढ़ पंजाब को देने के पक्ष में असहमति नोट लिखा' },
            B: { en: 'Sant Fateh Singh demanded merger with Himachal Pradesh; M.M. Philip dissented in favour of Punjab', pa: 'ਸੰਤ ਫ਼ਤਹਿ ਸਿੰਘ ਨੇ ਹਿਮਾਚਲ ਨਾਲ ਰਲੇਵੇਂ ਦੀ ਮੰਗ ਕੀਤੀ; ਐੱਮ.ਐੱਮ. ਫਿਲਿਪ ਨੇ ਅਸਹਿਮਤੀ ਪ੍ਰਗਟਾਈ', hi: 'संत फ़तेह सिंह ने हिमाचल के साथ विलय की माँग की; एम.एम. फिलिप ने असहमति जताई' },
            C: { en: 'Sant Fateh Singh opposed Gurmukhi script; Justice J.C. Shah dissented in favour of Punjab', pa: 'ਸੰਤ ਫ਼ਤਹਿ ਸਿੰਘ ਨੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਵਿਰੋਧ ਕੀਤਾ; ਜਸਟਿਸ ਜੇ.ਸੀ. ਸ਼ਾਹ ਨੇ ਅਸਹਿਮਤੀ ਪ੍ਰਗਟਾਈ', hi: 'संत फ़तेह सिंह ने गुरमुखी लिपि का विरोध किया; न्यायमूर्ति जे.सी. शाह ने असहमति जताई' },
            D: { en: 'Sant Fateh Singh demanded restoration of PEPSU; all 3 members of the Shah Commission voted unanimously', pa: 'ਸੰਤ ਫ਼ਤਹਿ ਸਿੰਘ ਨੇ ਪੈਪਸੂ ਦੀ ਬਹਾਲੀ ਮੰਗੀ; ਸ਼ਾਹ ਕਮਿਸ਼ਨ ਦੇ ਤਿੰਨੇ ਮੈਂਬਰ ਸਰਬਸੰਮਤ ਸਨ', hi: 'संत फ़तेह सिंह ने पेप्सू की बहाली माँगी; शाह आयोग के तीनों सदस्य सर्वसम्मत थे' }
        },
        correct: 'A',
        explanation: {
            en: 'Sant Fateh Singh emphasized that the Punjabi Suba demand was strictly linguistic (treating Punjab on par with Andhra, Maharashtra, and Gujarat) rather than communal. In the Shah Commission report (May 1966), while Justice J.C. Shah and M.M. Philip awarded Kharar tehsil (including Chandigarh) to Haryana based on the 1961 Census, member S. Dutt dissented and recommended that Kharar/Chandigarh go to Punjab.',
            pa: 'ਸੰਤ ਫ਼ਤਹਿ ਸਿੰਘ ਨੇ ਪੰਜਾਬੀ ਸੂਬੇ ਦੀ ਮੰਗ ਨੂੰ ਨਿਰੋਲ ਭਾਸ਼ਾਈ ਆਧਾਰ ਤੇ ਰੱਖਿਆ। ਸ਼ਾਹ ਕਮਿਸ਼ਨ (1966) ਵਿੱਚ ਮੈਂਬਰ ਐੱਸ. ਦੱਤ ਨੇ ਖਰੜ ਤਹਿਸੀਲ ਅਤੇ ਚੰਡੀਗੜ੍ਹ ਨੂੰ ਪੰਜਾਬ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰਨ ਦੇ ਹੱਕ ਵਿੱਚ ਆਪਣਾ ਵੱਖਰਾ ਅਸਹਿਮਤੀ ਨੋਟ (dissent note) ਦਰਜ ਕੀਤਾ ਸੀ।',
            hi: 'संत फ़तेह सिंह ने पंजाबी सूबे की माँग को विशुद्ध भाषाई आधार पर रखा। शाह आयोग (1966) में सदस्य एस. दत्त ने खरड़ तहसील और चंडीगढ़ को पंजाब में शामिल करने के पक्ष में असहमति नोट लिखा था।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-ppsm-9',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'During the tenure of which Chief Minister was the Punjab Official Language Act, 1967 enacted (on 19 December 1967), declaring Punjabi in Gurmukhi script as the sole official language of the state?',
            pa: 'ਕਿਸ ਮੁੱਖ ਮੰਤਰੀ ਦੇ ਕਾਰਜਕਾਲ ਦੌਰਾਨ 19 ਦਸੰਬਰ 1967 ਨੂੰ "ਪੰਜਾਬ ਰਾਜ ਭਾਸ਼ਾ ਐਕਟ, 1967" ਪਾਸ ਕੀਤਾ ਗਿਆ, ਜਿਸ ਰਾਹੀਂ ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ ਲਿਪੀ) ਨੂੰ ਰਾਜ ਦੀ ਇੱਕੋ-ਇੱਕ ਦਫ਼ਤਰੀ ਭਾਸ਼ਾ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ?',
            hi: 'किस मुख्यमंत्री के कार्यकाल के दौरान 19 दिसंबर 1967 को "पंजाब राजभाषा अधिनियम, 1967" पारित किया गया, जिसके द्वारा पंजाबी (गुरमुखी लिपि) को राज्य की एकमात्र राजभाषा घोषित किया गया?'
        },
        options: {
            A: { en: 'Lachhman Singh Gill', pa: 'ਲਛਮਣ ਸਿੰਘ ਗਿੱਲ (Lachhman Singh Gill)', hi: 'लछमन सिंह गिल (Lachhman Singh Gill)' },
            B: { en: 'Bhim Sen Sachar', pa: 'ਭੀਮ ਸੈਨ ਸੱਚਰ', hi: 'भीम सेन सच्चर' },
            C: { en: 'Partap Singh Kairon', pa: 'ਪ੍ਰਤਾਪ ਸਿੰਘ ਕੈਰੋਂ', hi: 'प्रताप सिंह कैरों' },
            D: { en: 'Darbara Singh', pa: 'ਦਰਬਾਰਾ ਸਿੰਘ', hi: 'दरबारा सिंह' }
        },
        correct: 'A',
        explanation: {
            en: 'The Punjab Official Language Act, 1967 was passed in December 1967 under Chief Minister Lachhman Singh Gill (who headed the Punjab Janata Party minority government), introducing Punjabi in Gurmukhi script at all administrative levels.',
            pa: 'ਮੁੱਖ ਮੰਤਰੀ ਲਛਮਣ ਸਿੰਘ ਗਿੱਲ ਦੇ ਕਾਰਜਕਾਲ ਦੌਰਾਨ ਦਸੰਬਰ 1967 ਵਿੱਚ ਪੰਜਾਬ ਰਾਜ ਭਾਸ਼ਾ ਐਕਟ, 1967 ਪਾਸ ਕੀਤਾ ਗਿਆ, ਜਿਸ ਨਾਲ ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ ਲਿਪੀ) ਨੂੰ ਪ੍ਰਸ਼ਾਸਨ ਦੇ ਸਾਰੇ ਪੱਧਰਾਂ ਤੇ ਲਾਗੂ ਕੀਤਾ ਗਿਆ।',
            hi: 'मुख्यमंत्री लछमन सिंह गिल के कार्यकाल में दिसंबर 1967 में पंजाब राजभाषा अधिनियम, 1967 पारित किया गया, जिससे पंजाबी (गुरमुखी लिपि) को सभी प्रशासनिक स्तरों पर लागू किया गया।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    },
    {
        id: 'q-ppsm-10',
        topicId: 'punjab-partition-suba-modern',
        subjectId: 'history',
        examId: 'punjab-master-cadre-sst',
        examTag: 'Punjab Master Cadre SST (Level A)',
        question: {
            en: 'When was the Rajiv–Longowal Accord (Memorandum of Settlement on Punjab) signed, and which Tribunal was constituted under Clause 9 of the Accord to adjudicate the sharing of Ravi–Beas river waters?',
            pa: 'ਰਾਜੀਵ–ਲੌਂਗੋਵਾਲ ਸਮਝੌਤਾ (ਪੰਜਾਬ ਸਮਝੌਤਾ) ਕਦੋਂ ਸਹੀਬੰਦ ਹੋਇਆ ਸੀ, ਅਤੇ ਇਸ ਸਮਝੌਤੇ ਦੀ ਧਾਰਾ 9 ਤਹਿਤ ਰਾਵੀ–ਬਿਆਸ ਦਰਿਆਈ ਪਾਣੀਆਂ ਦੀ ਵੰਡ ਦੇ ਨਿਪਟਾਰੇ ਲਈ ਕਿਹੜਾ ਟ੍ਰਿਬਿਊਨਲ ਬਣਾਇਆ ਗਿਆ ਸੀ?',
            hi: 'राजीव–लौंगोवाल समझौता (पंजाब समझौता) कब हस्ताक्षरित हुआ था, और इस समझौते की धारा 9 के अंतर्गत रावी–ब्यास नदी जल के बंटवारे के निर्णय हेतु कौन-सा अधिकरण (Tribunal) गठित किया गया था?'
        },
        options: {
            A: { en: '24 July 1985 — Justice V. Balakrishna Eradi Tribunal (while Mathew & Venkataramaiah Commissions examined territorial transfer)', pa: '24 ਜੁਲਾਈ 1985 — ਜਸਟਿਸ ਵੀ. ਬਾਲਾਕ੍ਰਿਸ਼ਨ ਇਰਾਡੀ ਟ੍ਰਿਬਿਊਨਲ (ਜਦਕਿ ਮੈਥਿਊ ਤੇ ਵੈਂਕਟਰਮਈਆ ਕਮਿਸ਼ਨ ਖੇਤਰੀ ਵੰਡ ਲਈ ਬਣੇ)', hi: '24 जुलाई 1985 — न्यायमूर्ति वी. बालकृष्ण इराडी अधिकरण (जबकि मैथ्यू व वेंकटरमैया आयोग क्षेत्रीय हस्तांतरण हेतु बने)' },
            B: { en: '18 October 1973 — Sarkaria Tribunal', pa: '18 ਅਕਤੂਬਰ 1973 — ਸਰਕਾਰੀਆ ਟ੍ਰਿਬਿਊਨਲ', hi: '18 अक्टूबर 1973 — सरकारिया अधिकरण' },
            C: { en: '1 November 1966 — Shah Water Tribunal', pa: '1 ਨਵੰਬਰ 1966 — ਸ਼ਾਹ ਜਲ ਟ੍ਰਿਬਿਊਨਲ', hi: '1 नवंबर 1966 — शाह जल अधिकरण' },
            D: { en: '15 July 1948 — Radcliffe Water Commission', pa: '15 ਜੁਲਾਈ 1948 — ਰੈੱਡਕਲਿਫ਼ ਜਲ ਕਮਿਸ਼ਨ', hi: '15 जुलाई 1948 — रैडक्लिफ़ जल आयोग' }
        },
        correct: 'A',
        explanation: {
            en: 'Signed on 24 July 1985 between PM Rajiv Gandhi and Sant Harchand Singh Longowal, the 11-point Punjab Accord led to the appointment of the Justice K.K. Mathew and Justice E.S. Venkataramaiah Commissions on territorial transfer (Chandigarh/Hindi-speaking areas) and the Justice V. Balakrishna Eradi Tribunal (1986) on Ravi-Beas water claims.',
            pa: '24 ਜੁਲਾਈ 1985 ਨੂੰ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਰਾਜੀਵ ਗਾਂਧੀ ਅਤੇ ਸੰਤ ਹਰਚੰਦ ਸਿੰਘ ਲੌਂਗੋਵਾਲ ਵਿਚਕਾਰ ਹੋਏ ਸਮਝੌਤੇ ਤਹਿਤ ਰਾਵੀ-ਬਿਆਸ ਪਾਣੀਆਂ ਲਈ ਜਸਟਿਸ ਵੀ. ਬਾਲਾਕ੍ਰਿਸ਼ਨ ਇਰਾਡੀ ਟ੍ਰਿਬਿਊਨਲ (1986) ਅਤੇ ਖੇਤਰੀ ਤਬਾਦਲੇ ਲਈ ਮੈਥਿਊ ਤੇ ਵੈਂਕਟਰਮਈਆ ਕਮਿਸ਼ਨ ਬਣਾਏ ਗਏ।',
            hi: '24 जुलाई 1985 को प्रधानमंत्री राजीव गांधी और संत हरचंद सिंह लौंगोवाल के बीच हस्ताक्षरित समझौते के तहत रावी-ब्यास जल विवाद हेतु न्यायमूर्ति वी. बालकृष्ण इराडी अधिकरण (1986) तथा क्षेत्रीय हस्तांतरण हेतु मैथ्यू व वेंकटरमैया आयोग गठित किए गए।'
        },
        difficulty: 'hard',
        originType: 'authored-original'
    }
];
