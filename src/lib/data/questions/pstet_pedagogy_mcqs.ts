import type { Question } from '../questions';

const PSTET_RIGHTS_PROVENANCE = {
    source: 'ExamSathi Authentic PSTET Pedagogy Expert Development Cell',
    accessType: 'educational-original' as const,
    verifiedBy: 'Punjab TET Academic Specialist Board',
    verifiedDate: '2026-10-14'
};

const PSTET_SOURCE = {
    title: 'PSEB & SCERT Punjab Teacher Eligibility Test Pedagogy Curriculum',
    url: 'https://pstet.pseb.ac.in'
};

export const PSTET_PEDAGOGY_MCQS: Question[] = [
    // =========================================================================
    // 1. CHILD DEVELOPMENT & PEDAGOGY (pstet-cdp-core) — 10 MCQs
    // =========================================================================
    {
        id: 'q-pstet-cdp-01',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: 'Principles of Motor Development (Proximodistal Trend)',
            pa: 'ਮੋਟਰ ਵਿਕਾਸ ਦੇ ਸਿਧਾਂਤ (ਕੇਂਦਰ ਤੋਂ ਬਾਹਰ ਵੱਲ)',
            hi: 'गामक विकास के सिद्धांत (समीप-दूरस्थ प्रवृत्ति)'
        },
        question: {
            en: 'In a pre-primary school in Bathinda, the teacher observes that 4-year-old Kabir can catch a large football using his entire arms and chest, but cannot yet grip a thin pencil to write letters neatly. Which developmental principle explains Kabir’s physical coordination?',
            pa: 'ਬਠਿੰਡਾ ਦੇ ਇੱਕ ਪ੍ਰੀ-ਪ੍ਰਾਇਮਰੀ ਸਕੂਲ ਵਿੱਚ ਅਧਿਆਪਕਾ ਵੇਖਦੀ ਹੈ ਕਿ 4 ਸਾਲ ਦਾ ਕਬੀਰ ਵੱਡੀ ਫੁੱਟਬਾਲ ਨੂੰ ਦੋਵੇਂ ਬਾਹਾਂ ਅਤੇ ਛਾਤੀ ਨਾਲ ਫੜ ਲੈਂਦਾ ਹੈ, ਪਰ ਬਾਰੀਕ ਪੈਨਸਿਲ ਪਕੜ ਕੇ ਅੱਖਰ ਸਹੀ ਨਹੀਂ ਲਿਖ ਪਾਉਂਦਾ। ਵਿਕਾਸ ਦਾ ਕਿਹੜਾ ਸਿਧਾਂਤ ਕਬੀਰ ਦੇ ਇਸ ਤਾਲਮੇਲ ਦੀ ਵਿਆਖਿਆ ਕਰਦਾ ਹੈ?',
            hi: 'बठिंडा के एक प्री-प्राइमरी विद्यालय में शिक्षिका देखती है कि 4 वर्षीय कबीर बड़ी फुटबॉल को दोनों बाजुओं और छाती से पकड़ लेता है, किंतु पतली पेंसिल पकड़कर अक्षर ठीक से नहीं लिख पाता। विकास का कौन सा सिद्धांत कबीर के इस समन्वय की व्याख्या करता है?'
        },
        options: {
            A: {
                en: 'Cephalocaudal principle (development proceeding from head to toe)',
                pa: 'ਸਿਰ ਤੋਂ ਪੈਰ ਵੱਲ ਦਾ ਸਿਧਾਂਤ (Cephalocaudal Trend)',
                hi: 'मस्तकाधोमुखी सिद्धांत (सिर से पैर की ओर विकास)'
            },
            B: {
                en: 'Proximodistal principle (development proceeding from central torso outward to fingers)',
                pa: 'ਕੇਂਦਰ ਤੋਂ ਬਾਹਰ ਵੱਲ ਦਾ ਸਿਧਾਂਤ (Proximodistal Trend)',
                hi: 'समीप-दूरस्थ सिद्धांत (केंद्र/धड़ से बाहर उंगलियों की ओर विकास)'
            },
            C: {
                en: 'Principle of sensory integration and perceptual acuity',
                pa: 'ਇੰਦਰੀ ਏਕੀਕਰਨ ਅਤੇ ਸੰਵੇਦੀ ਸੁਚੇਤਨਾ ਦਾ ਸਿਧਾਂਤ',
                hi: 'संवेदी एकीकरण एवं प्रत्यक्षीकरण तीव्रता का सिद्धांत'
            },
            D: {
                en: 'Principle of discontinuous cognitive transitions',
                pa: 'ਅਸੰਤੁਲਿਤ ਬੌਧਿਕ ਤਬਦੀਲੀਆਂ ਦਾ ਸਿਧਾਂਤ',
                hi: 'असतत संज्ञानात्मक संक्रमण का सिद्धांत'
            }
        },
        correct: 'B',
        explanation: {
            en: 'The Proximodistal trend dictates that muscular control develops from the central axis/torso outward to the extremities. Gross motor skills (arms, chest) develop before fine motor coordination (fingers, wrist).',
            pa: 'ਪ੍ਰੌਕਸੀਮੋਡਿਸਟਲ ਸਿਧਾਂਤ ਅਨੁਸਾਰ ਸਰੀਰਕ ਵਿਕਾਸ ਕੇਂਦਰ (ਧੜ/ਰੀੜ੍ਹ) ਤੋਂ ਬਾਹਰ ਬਾਹਾਂ ਅਤੇ ਅੰਤ ਵਿੱਚ ਉਂਗਲਾਂ ਵੱਲ ਵਧਦਾ ਹੈ। ਵੱਡੇ ਮਾਸਪੇਸ਼ੀ ਅੰਗ ਛੋਟੀਆਂ ਉਂਗਲਾਂ ਤੋਂ ਪਹਿਲਾਂ ਕਾਬੂ ਵਿੱਚ ਆਉਂਦੇ ਹਨ।',
            hi: 'समीप-दूरस्थ सिद्धांत के अनुसार गामक नियंत्रण शरीर के केंद्र (धड़/रीढ़) से बाहर परिधि (उंगलियों) की ओर विकसित होता है। स्थूल गामक कौशल सूक्ष्म गामक कौशल से पहले विकसित होते हैं।'
        },
        thought: {
            en: 'Examiner trap: Cephalocaudal refers to head-to-toe progression (holding head before walking); Proximodistal refers to center-to-periphery (torso/arms before fingers).',
            pa: 'ਪ੍ਰੀਖਿਅਕ ਟ੍ਰੈਪ: ਸਿਰ ਤੋਂ ਪੈਰ ਵੱਲ ਸਿਧਾਂਤ ਵਿੱਚ ਪਹਿਲਾਂ ਸਿਰ ਤੇ ਧੌਣ ਸੰਭਲਦੀ ਹੈ; ਕੇਂਦਰ ਤੋਂ ਬਾਹਰ ਵਿੱਚ ਬਾਹਾਂ ਤੋਂ ਬਾਅਦ ਉਂਗਲਾਂ ਦਾ ਕੰਟਰੋਲ ਹੁੰਦਾ ਹੈ।',
            hi: 'परीक्षक जाल: मस्तकाधोमुखी सिर से पैर की ओर होता है; समीप-दूरस्थ केंद्र से बाहर उंगलियों के सूक्ष्म नियंत्रण से संबंधित है।'
        }
    },
    {
        id: 'q-pstet-cdp-02',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: "Piaget's Cognitive Stages (Pre-operational Centration)",
            pa: 'ਜੀਨ ਪਿਆਜੇ ਦੇ ਬੌਧਿਕ ਪੜਾਅ (ਕੇਂਦਰੀਕਰਨ)',
            hi: 'जीन पियाजे की संज्ञानात्मक अवस्थाएँ (केंद्रीकरण)'
        },
        question: {
            en: 'A Class 2 teacher pours 250 ml of juice from a wide short tumbler into a tall narrow glass in front of 6-year-old Meena. Meena insists that the tall glass contains more juice because the liquid level is higher. According to Jean Piaget, which cognitive limitation explains Meena’s judgment?',
            pa: 'ਦੂਜੀ ਜਮਾਤ ਦੀ ਅਧਿਆਪਕਾ 6 ਸਾਲਾਂ ਦੀ ਮੀਨਾ ਦੇ ਸਾਹਮਣੇ ਇੱਕ ਚੌੜੇ ਛੋਟੇ ਗਿਲਾਸ ਵਿੱਚੋਂ 250 ਮਿ.ਲੀ. ਜੂਸ ਇੱਕ ਲੰਬੇ ਪਤਲੇ ਗਿਲਾਸ ਵਿੱਚ ਉਲਟਦੀ ਹੈ। ਮੀਨਾ ਜ਼ਿੱਦ ਕਰਦੀ ਹੈ ਕਿ ਲੰਬੇ ਗਿਲਾਸ ਵਿੱਚ ਜੂਸ ਜ਼ਿਆਦਾ ਹੈ ਕਿਉਂਕਿ ਇਹ ਉੱਚਾ ਹੈ। ਜੀਨ ਪਿਆਜੇ ਅਨੁਸਾਰ ਮੀਨਾ ਦੀ ਸੋਚ ਵਿੱਚ ਕਿਹੜੀ ਕਮੀ ਹੈ?',
            hi: 'कक्षा 2 की शिक्षिका 6 वर्षीय मीना के सामने एक चौड़े छोटे गिलास से 250 मिली जूस एक लंबे पतले गिलास में उड़ेलती है। मीना हठ करती है कि लंबे गिलास में जूस अधिक है क्योंकि इसका स्तर ऊँचा है। जीन पियाजे के अनुसार मीना के निर्णय में कौन सी संज्ञानात्मक सीमा है?'
        },
        options: {
            A: {
                en: 'Lack of object permanence and sensory motor circularity',
                pa: 'ਵਸਤੂ ਸਥਿਰਤਾ ਅਤੇ ਇੰਦਰੀ ਸੰਚਾਲਨ ਦੀ ਘਾਟ',
                hi: 'वस्तु स्थायित्व एवं संवेदी-गामक चक्रीयता का अभाव'
            },
            B: {
                en: 'Centration (focusing exclusively on height while ignoring width)',
                pa: 'ਕੇਂਦਰੀਕਰਨ (ਚੌੜਾਈ ਨੂੰ ਨਜ਼ਰਅੰਦਾਜ਼ ਕਰਕੇ ਸਿਰਫ਼ ਉਚਾਈ ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਨਾ)',
                hi: 'केंद्रीकरण (चौड़ाई की उपेक्षा कर केवल ऊँचाई पर ध्यान केंद्रित करना)'
            },
            C: {
                en: 'Hypothetico-deductive reasoning failure',
                pa: 'ਪਰਿਕਲਪਨਾਤਮਕ-ਨਿਗਮਨਾਤਮਕ ਤਰਕ ਦੀ ਅਸਫ਼ਲਤਾ',
                hi: 'परिकल्पनात्मक-निगमनात्मक तर्क की विफलता'
            },
            D: {
                en: 'Transitive inference and hierarchical seriation deficit',
                pa: 'ਲੜੀਬੱਧਤਾ ਅਤੇ ਸੰਕਰਮਣ ਅਨੁਮਾਨ ਦੀ ਘਾਟ',
                hi: 'संक्रमणीय अनुमान एवं पदानुक्रमित श्रेणीबद्धता की कमी'
            }
        },
        correct: 'B',
        explanation: {
            en: 'In Piaget’s Pre-operational stage (2–7 years), children exhibit Centration — centering attention on one salient perceptual dimension (height) while neglecting other relevant dimensions (width), leading to failure in conservation of liquid volume.',
            pa: 'ਪਿਆਜੇ ਦੇ ਪੂਰਵ-ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ (2-7 ਸਾਲ) ਵਿੱਚ ਬੱਚੇ ਕੇਂਦਰੀਕਰਨ (Centration) ਦਿਖਾਉਂਦੇ ਹਨ — ਉਹ ਚੌੜਾਈ ਨੂੰ ਭੁੱਲ ਕੇ ਸਿਰਫ਼ ਉਚਾਈ ਤੇ ਧਿਆਨ ਦਿੰਦੇ ਹਨ, ਜਿਸ ਕਾਰਨ ਸੰਰਖਿਆ (Conservation) ਨਹੀਂ ਕਰ ਪਾਉਂਦੇ।',
            hi: 'पियाजे की पूर्व-संक्रियात्मक अवस्था (2-7 वर्ष) में बालक केंद्रीकरण (Centration) प्रदर्शित करते हैं — वे चौड़ाई की उपेक्षा कर केवल ऊँचाई पर ध्यान केंद्रित करते हैं, जिससे आयतन संरक्षण नहीं हो पाता।'
        },
        thought: {
            en: 'Conservation failure is caused by Centration and Irreversibility in the Pre-operational stage.',
            pa: 'ਪੂਰਵ-ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ ਵਿੱਚ ਕੇਂਦਰੀਕਰਨ ਅਤੇ ਅਪਲਟਾਵੀ ਸੋਚ ਕਾਰਨ ਸੰਰਖਿਆ ਦੀ ਘਾਟ ਹੁੰਦੀ ਹੈ।',
            hi: 'पूर्व-संक्रियात्मक अवस्था में केंद्रीकरण एवं अपलटावी सोच के कारण संरक्षण का अभाव होता है।'
        }
    },
    {
        id: 'q-pstet-cdp-03',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: 'Vygotsky Sociocultural Theory (Scaffolding & ZPD)',
            pa: 'ਵਾਈਗੋਤਸਕੀ ਦਾ ਸਿਧਾਂਤ (ਸਕੈਫੋਲਡਿੰਗ ਅਤੇ ZPD)',
            hi: 'वाइगोत्स्की का सिद्धांत (पाड़ एवं ZPD)'
        },
        question: {
            en: 'In a Class 5 mathematics period in Patiala, Gurpreet struggles to solve word problems involving fractions on his own. His teacher provides him with a structured hint card and asks guiding questions. As Gurpreet begins to solve problems successfully, the teacher gradually withdraws the hint card. What pedagogical concept does this represent?',
            pa: 'ਪਟਿਆਲਾ ਦੇ ਇੱਕ ਸਕੂਲ ਵਿੱਚ ਪੰਜਵੀਂ ਜਮਾਤ ਦਾ ਗੁਰਪ੍ਰੀਤ ਭਿੰਨਾਂ ਦੇ ਇਬਾਰਤੀ ਸਵਾਲ ਇਕੱਲਾ ਹੱਲ ਨਹੀਂ ਕਰ ਪਾ ਰਿਹਾ। ਅਧਿਆਪਕ ਉਸ ਨੂੰ ਇੱਕ ਸੰਕੇਤ-ਕਾਰਡ ਦਿੰਦਾ ਹੈ ਅਤੇ ਸਵਾਲ ਪੁੱਛ ਕੇ ਸੇਧ ਦਿੰਦਾ ਹੈ। ਜਿਵੇਂ ਹੀ ਗੁਰਪ੍ਰੀਤ ਸਵਾਲ ਹੱਲ ਕਰਨ ਲੱਗਦਾ ਹੈ, ਅਧਿਆਪਕ ਹੌਲੀ-ਹੌਲੀ ਸੰਕੇਤ-ਕਾਰਡ ਵਾਪਸ ਲੈ ਲੈਂਦਾ ਹੈ। ਇਹ ਕਿਹੜਾ ਸੰਕਲਪ ਹੈ?',
            hi: 'पटियाला के एक विद्यालय में कक्षा 5 का गुरप्रीत भिन्नों के शाब्दिक प्रश्न स्वयं हल करने में कठिनाई महसूस करता है। शिक्षक उसे एक संकेत-कार्ड देता है तथा मार्गदर्शक प्रश्न पूछता है। जैसे ही गुरप्रीत सफलता से हल करने लगता है, शिक्षक धीरे-धीरे सहायता हटा लेता है। यह किस संप्रत्यय को दर्शाता है?'
        },
        options: {
            A: {
                en: 'Classical conditioning through positive reinforcers',
                pa: 'ਸਕਾਰਾਤਮਕ ਪੁਨਰਬਲਨ ਰਾਹੀਂ ਅਨੁਕੂਲਨ',
                hi: 'सकारात्मक पुनर्बलन द्वारा शास्त्रीय अनुबंधन'
            },
            B: {
                en: 'Scaffolding within the Zone of Proximal Development (ZPD)',
                pa: 'ਸਮੀਪਸਥ ਵਿਕਾਸ ਦੇ ਖੇਤਰ (ZPD) ਵਿੱਚ ਸਕੈਫੋਲਡਿੰਗ (ਪਾੜ)',
                hi: 'समीपस्थ विकास के क्षेत्र (ZPD) में पाड़ / ढाँचा (Scaffolding)'
            },
            C: {
                en: 'Vicarious observational learning via symbolic modeling',
                pa: 'ਪ੍ਰਤੀਕਾਤਮਕ ਮਾਡਲਿੰਗ ਰਾਹੀਂ ਨਿਰੀਖਣਮਈ ਸਿੱਖਣਾ',
                hi: 'प्रतीकात्मक मॉडलिंग द्वारा अवलोकनात्मक अधिगम'
            },
            D: {
                en: 'Rote algorithmic internalization',
                pa: 'ਫਾਰਮੂਲੇ ਰਟਣ ਦੀ ਅੰਦਰੂਨੀ ਪ੍ਰਕਿਰਿਆ',
                hi: 'यांत्रिक कलन-विधि का आंतरीकरण'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Scaffolding is temporary, adjustable instructional support provided by a More Knowledgeable Other (MKO) within the learner’s Zone of Proximal Development (ZPD), which is gradually faded as independent mastery is achieved.',
            pa: 'ਸਕੈਫੋਲਡਿੰਗ (ਪਾੜ) ਉਹ ਆਰਜ਼ੀ ਸਹਾਇਤਾ ਹੈ ਜੋ ਕਿਸੇ ਮਾਹਿਰ (MKO) ਵੱਲੋਂ ZPD ਦੇ ਦਾਇਰੇ ਵਿੱਚ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਬੱਚੇ ਦੀ ਮੁਹਾਰਤ ਵਧਣ ਤੇ ਹਟਾ ਲਈ ਜਾਂਦੀ ਹੈ।',
            hi: 'पाड़ (Scaffolding) बालक के ZPD के भीतर किसी कुशल व्यक्ति (MKO) द्वारा दी जाने वाली अस्थायी सहायता है, जिसे स्वतंत्रता प्राप्त होने पर हटा लिया जाता है।'
        },
        thought: {
            en: 'Temporary cues + fading assistance = Scaffolding (Bruner/Vygotsky).',
            pa: 'ਆਰਜ਼ੀ ਮਦਦ ਦੇਣਾ ਅਤੇ ਹੌਲੀ-ਹੌਲੀ ਹਟਾ ਲੈਣਾ = ਸਕੈਫੋਲਡਿੰਗ।',
            hi: 'अस्थायी संकेत देना और धीरे-धीरे वापस लेना = पाड़ (Scaffolding)।'
        }
    },
    {
        id: 'q-pstet-cdp-04',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'hard',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: 'Kohlberg Moral Reasoning (Conventional Stage 4)',
            pa: 'ਕੋਹਲਬਰਗ ਦਾ ਨੈਤਿਕ ਵਿਕਾਸ (ਪੜਾਅ 4: ਕਾਨੂੰਨ ਤੇ ਵਿਵਸਥਾ)',
            hi: 'कोहलबर्ग का नैतिक विकास (अवस्था 4: कानून एवं व्यवस्था)'
        },
        question: {
            en: 'When a teacher asks 12-year-old Jaspreet why students should not copy answers during an examination, Jaspreet explains: "Rules must be followed by everyone without exception; if students break rules, the entire school system will breakdown into chaos." According to Lawrence Kohlberg, at which stage of moral reasoning is Jaspreet operating?',
            pa: 'ਜਦੋਂ ਅਧਿਆਪਕ 12 ਸਾਲ ਦੇ ਜਸਪ੍ਰੀਤ ਨੂੰ ਪੁੱਛਦਾ ਹੈ ਕਿ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਨਕਲ ਕਿਉਂ ਨਹੀਂ ਕਰਨੀ ਚਾਹੀਦੀ, ਤਾਂ ਜਸਪ੍ਰੀਤ ਕਹਿੰਦਾ ਹੈ: "ਨਿਯਮ ਸਾਰਿਆਂ ਲਈ ਬਰਾਬਰ ਹਨ; ਜੇ ਹਰ ਕੋਈ ਨਿਯਮ ਤੋੜੇਗਾ ਤਾਂ ਸਕੂਲ ਦਾ ਸਾਰਾ ਪ੍ਰਬੰਧ ਵਿਗੜ ਜਾਵੇਗਾ।" ਲਾਰੈਂਸ ਕੋਹਲਬਰਗ ਅਨੁਸਾਰ ਜਸਪ੍ਰੀਤ ਨੈਤਿਕ ਵਿਕਾਸ ਦੇ ਕਿਸ ਪੜਾਅ ਤੇ ਹੈ?',
            hi: 'जब शिक्षक 12 वर्षीय जसप्रीत से पूछता है कि परीक्षा में नकल क्यों नहीं करनी चाहिए, तो जसप्रीत कहता है: "नियमों का पालन सभी को बिना अपवाद करना चाहिए; यदि सभी नियम तोड़ेंगे तो संपूर्ण विद्यालय व्यवस्था ध्वस्त हो जाएगी।" लॉरेंस कोहलबर्ग के अनुसार जसप्रीत नैतिक तर्कणा की किस अवस्था में है?'
        },
        options: {
            A: {
                en: 'Stage 1: Punishment and Obedience Orientation',
                pa: 'ਪੜਾਅ 1: ਸਜ਼ਾ ਅਤੇ ਆਗਿਆਪਾਲਣ ਮੁਖੀਕਰਨ',
                hi: 'अवस्था 1: दंड एवं आज्ञापालन उन्मुखीकरण'
            },
            B: {
                en: 'Stage 2: Individualism and Instrumental Exchange',
                pa: 'ਪੜਾਅ 2: ਸਾਧਨਾਤਮਕ ਸਾਪੇਖਤਾਵਾਦੀ (ਸੁਆਰਥੀ ਅਦਲਾ-ਬਦਲੀ)',
                hi: 'अवस्था 2: साधनात्मक सापेक्षतावादी (व्यक्तिगत विनिमय)'
            },
            C: {
                en: 'Stage 3: Good Boy / Nice Girl Interpersonal Conformity',
                pa: 'ਪੜਾਅ 3: ਚੰਗਾ ਲੜਕਾ / ਚੰਗੀ ਲੜਕੀ ਅਨੁਕੂਲਤਾ',
                hi: 'अवस्था 3: अच्छा लड़का / अच्छी लड़की पारस्परिक अनुरूपता'
            },
            D: {
                en: 'Stage 4: Law and Order / Social System Maintenance Orientation',
                pa: 'ਪੜਾਅ 4: ਕਾਨੂੰਨ ਅਤੇ ਸਮਾਜਿਕ ਵਿਵਸਥਾ ਬਣਾਈ ਰੱਖਣ ਦਾ ਮੁਖੀਕਰਨ',
                hi: 'अवस्था 4: कानून एवं सामाजिक व्यवस्था बनाए रखने का उन्मुखीकरण'
            }
        },
        correct: 'D',
        explanation: {
            en: 'Stage 4 (Conventional Morality) is characterized by Law and Order orientation. Morality is defined by doing one\'s duty, showing respect for authority, and maintaining the social order for its own sake to prevent societal breakdown.',
            pa: 'ਕੋਹਲਬਰਗ ਦੇ ਪੜਾਅ 4 (ਕਾਨੂੰਨ ਅਤੇ ਵਿਵਸਥਾ) ਵਿੱਚ ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ ਸਮਾਜਿਕ ਵਿਵਸਥਾ ਨੂੰ ਕਾਇਮ ਰੱਖਣ ਲਈ ਬਿਨਾਂ ਕਿਸੇ ਛੋਟ ਦੇ ਜ਼ਰੂਰੀ ਮੰਨੀ ਜਾਂਦੀ ਹੈ।',
            hi: 'कोहलबर्ग की अवस्था 4 (कानून एवं व्यवस्था) में नियमों का पालन सामाजिक व्यवस्था को सुचारू बनाए रखने एवं अराजकता रोकने हेतु परम कर्तव्य माना जाता है।'
        },
        thought: {
            en: 'Upholding social rules to prevent system breakdown = Stage 4 (Social system maintenance).',
            pa: 'ਸਿਸਟਮ ਨੂੰ ਟੁੱਟਣ ਤੋਂ ਬਚਾਉਣ ਲਈ ਨਿਯਮਾਂ ਦੀ ਪਾਲਣਾ = ਪੜਾਅ 4।',
            hi: 'व्यवस्था बनाए रखने हेतु नियमों की अनिवार्यता = अवस्था 4।'
        }
    },
    {
        id: 'q-pstet-cdp-05',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: 'Inclusive Education (Dyslexia Accommodation)',
            pa: 'ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ (ਡਿਸਲੈਕਸੀਆ ਅਨੁਕੂਲਨ)',
            hi: 'समावेशी शिक्षा (डिस्लेक्सिया अनुकूलन)'
        },
        question: {
            en: 'In a Class 4 inclusive classroom, an educator observes that Harjot frequently confuses letters like "b" and "d", reads words in reverse ("was" as "saw"), and hesitates significantly during oral reading despite having sharp comprehension when listening to stories. What is the most appropriate pedagogical accommodation for Harjot?',
            pa: 'ਚੌਥੀ ਜਮਾਤ ਵਿੱਚ ਅਧਿਆਪਕ ਵੇਖਦਾ ਹੈ ਕਿ ਹਰਜੋਤ ਅਕਸਰ "b" ਅਤੇ "d" ਵਿੱਚ ਉਲਝ ਜਾਂਦਾ ਹੈ, "was" ਨੂੰ "saw" ਪੜ੍ਹਦਾ ਹੈ, ਅਤੇ ਪੜ੍ਹਦੇ ਸਮੇਂ ਅਟਕਦਾ ਹੈ, ਪਰ ਕਹਾਣੀ ਸੁਣ ਕੇ ਪੂਰੀ ਸਮਝ ਰੱਖਦਾ ਹੈ। ਹਰਜੋਤ ਦੀ ਸਹਾਇਤਾ ਲਈ ਸਭ ਤੋਂ ਢੁਕਵਾਂ ਸਿੱਖਿਅਕ ਤਰੀਕਾ ਕੀ ਹੈ?',
            hi: 'कक्षा 4 के समावेशी कक्ष में शिक्षक देखता है कि हरजोत प्रायः "b" और "d" में भ्रमित होता है, "was" को "saw" पढ़ता है, और सस्वर पठन में हिचकिचाता है, किंतु कहानी सुनकर सटीक समझ रखता है। हरजोत हेतु सर्वाधिक उपयुक्त शैक्षणिक समायोजन क्या है?'
        },
        options: {
            A: {
                en: 'Isolating him into a separate special school for slow learners',
                pa: 'ਉਸ ਨੂੰ ਆਮ ਜਮਾਤ ਵਿੱਚੋਂ ਕੱਢ ਕੇ ਵਿਸ਼ੇਸ਼ ਸਕੂਲ ਵਿੱਚ ਭੇਜਣਾ',
                hi: 'उसे सामान्य कक्षा से अलग कर विशेष विद्यालय में भेजना'
            },
            B: {
                en: 'Providing multisensory phonics instruction, assistive audiobooks, and additional reading time',
                pa: 'ਬਹੁ-ਇੰਦਰੀ ਧੁਨੀ ਅਭਿਆਸ, ਆਡੀਓ ਕਿਤਾਬਾਂ ਅਤੇ ਪੜ੍ਹਨ ਲਈ ਵਾਧੂ ਸਮਾਂ ਪ੍ਰਦਾਨ ਕਰਨਾ',
                hi: 'बहु-संवेदी ध्वनि अभ्यास, सहायक ऑडियो-पुस्तकें तथा पठन हेतु अतिरिक्त समय देना'
            },
            C: {
                en: 'Penalizing him with repeated handwriting drills until letter reversals cease',
                pa: 'ਗਲਤੀਆਂ ਸੁਧਰਨ ਤੱਕ ਉਸ ਨੂੰ ਵਾਰ-ਵਾਰ ਲਿਖਾਈ ਦੀ ਸਜ਼ਾ ਦੇਣਾ',
                hi: 'त्रुटि दूर होने तक उसे बार-बार सुलेख लिखने का दंड देना'
            },
            D: {
                en: 'Excusing him from all literacy instruction and restricting him only to sports',
                pa: 'ਉਸ ਨੂੰ ਪੜ੍ਹਾਈ ਤੋਂ ਛੋਟ ਦੇ ਕੇ ਸਿਰਫ਼ ਖੇਡਾਂ ਵਿੱਚ ਲਗਾ ਦੇਣਾ',
                hi: 'उसे पठन-पाठन से मुक्त कर केवल खेलों में लगाना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Harjot exhibits signs of Dyslexia (specific reading disability). Inclusive pedagogical best practices recommend multisensory structured phonics (visual, auditory, tactile), assistive audiobooks, and extended time without stigmatizing segregation.',
            pa: 'ਇਹ ਡਿਸਲੈਕਸੀਆ ਦੇ ਲੱਛਣ ਹਨ। ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ ਮੁਤਾਬਕ ਬੱਚੇ ਨੂੰ ਵੱਖ ਕਰਨ ਦੀ ਬਜਾਏ ਆਡੀਓ ਕਿਤਾਬਾਂ, ਬਹੁ-ਇੰਦਰੀ ਅਭਿਆਸ ਅਤੇ ਵਾਧੂ ਸਮਾਂ ਦਿੱਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।',
            hi: 'यह डिस्लेक्सिया के लक्षण हैं। समावेशी शिक्षा के अनुसार पृथक्करण के स्थान पर बहु-संवेदी शिक्षण, ऑडियो-पुस्तकें एवं अतिरिक्त समय प्रदान करना सर्वोत्तम रणनीति है।'
        },
        thought: {
            en: 'Inclusive education never isolates or punishes; it accommodates with assistive technology and multisensory learning.',
            pa: 'ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ ਵਿੱਚ ਅਲੱਗ ਕਰਨਾ ਜਾਂ ਸਜ਼ਾ ਦੇਣਾ ਗਲਤ ਹੈ; ਸਹਾਇਕ ਸਮੱਗਰੀ ਦੇਣਾ ਸਹੀ ਹੈ।',
            hi: 'समावेशी शिक्षा में पृथक्करण या दंड वर्जित है; बहु-संवेदी सहायता उचित उत्तर है।'
        }
    },
    {
        id: 'q-pstet-cdp-06',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: 'Assessment Paradigms (Assessment FOR Learning)',
            pa: 'ਮੁਲਾਂਕਣ ਪ੍ਰਣਾਲੀਆਂ (ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ)',
            hi: 'आकलन प्रणालियाँ (अधिगम के लिए आकलन)'
        },
        question: {
            en: 'During an ongoing unit on community helpers in Class 3, Teacher Sunita uses exit slips and classroom observation checklists to identify which concepts students are finding difficult, using this evidence to adjust the next day’s lesson plan. This assessment practice is an example of:',
            pa: 'ਤੀਜੀ ਜਮਾਤ ਵਿੱਚ ਸਮਾਜਿਕ ਮਦਦਗਾਰਾਂ ਬਾਰੇ ਪੜ੍ਹਾਉਂਦੇ ਸਮੇਂ ਅਧਿਆਪਕਾ ਸੁਨੀਤਾ ਜਮਾਤ ਦੌਰਾਨ ਛੋਟੇ ਪ੍ਰਸ਼ਨਾਂ ਅਤੇ ਨਿਰੀਖਣ ਸੂਚੀਆਂ ਰਾਹੀਂ ਇਹ ਪਤਾ ਲਗਾਉਂਦੀ ਹੈ ਕਿ ਬੱਚਿਆਂ ਨੂੰ ਕਿੱਥੇ ਮੁਸ਼ਕਲ ਆ ਰਹੀ ਹੈ, ਤਾਂ ਜੋ ਅਗਲੇ ਦਿਨ ਦੀ ਪੜ੍ਹਾਈ ਵਿੱਚ ਸੁਧਾਰ ਕੀਤਾ ਜਾ ਸਕੇ। ਇਹ ਮੁਲਾਂਕਣ ਕਿਸ ਦੀ ਉਦਾਹਰਨ ਹੈ?',
            hi: 'कक्षा 3 में हमारे मददगार विषय पढ़ाते समय शिक्षिका सुनीता कक्षा के दौरान निकास पर्चियों (exit slips) एवं अवलोकन सूचियों द्वारा छात्रों की कठिनाइयों की पहचान करती है ताकि अगले दिन की शिक्षण योजना में सुधार कर सके। यह आकलन किसका उदाहरण है?'
        },
        options: {
            A: {
                en: 'Assessment OF Learning (Summative Evaluation)',
                pa: 'ਸਿੱਖਣ ਦਾ ਮੁਲਾਂਕਣ (ਸੰਕਲਨਾਤਮਕ ਮੁਲਾਂਕਣ)',
                hi: 'अधिगम का आकलन (योगात्मक मूल्यांकन)'
            },
            B: {
                en: 'Assessment FOR Learning (Formative Diagnostic Evaluation)',
                pa: 'ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ (ਰਚਨਾਤਮਕ ਨਿਦਾਨਾਤਮਕ ਮੁਲਾਂਕਣ)',
                hi: 'अधिगम के लिए आकलन (रचनात्मक निदानात्मक मूल्यांकन)'
            },
            C: {
                en: 'Norm-Referenced Standardized Testing',
                pa: 'ਮਿਆਰੀ ਮਾਨਕ-ਸੰਦਰਭਿਤ ਟੈਸਟਿੰਗ',
                hi: 'मानक-संदर्भित मानकीकृत परीक्षण'
            },
            D: {
                en: 'High-Stakes Accountability Audit',
                pa: 'ਸਾਲਾਨਾ ਗ੍ਰੇਡਿੰਗ ਆਡਿਟ',
                hi: 'वार्षिक प्रमाणीकरण लेखा-परीक्षा'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Assessment FOR Learning is formative and ongoing during the instructional process. Its primary aim is to identify learning gaps and provide immediate feedback to adjust teaching and learning, rather than assigning terminal grades.',
            pa: 'ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ (Assessment FOR learning) ਪੜ੍ਹਾਉਣ ਦੇ ਦੌਰਾਨ ਹੀ ਹੁੰਦਾ ਹੈ ਤਾਂ ਜੋ ਕਮੀਆਂ ਪਛਾਣ ਕੇ ਅਧਿਆਪਨ ਵਿਧੀ ਵਿੱਚ ਸੁਧਾਰ ਕੀਤਾ ਜਾ ਸਕੇ।',
            hi: 'अधिगम के लिए आकलन (Assessment FOR learning) शिक्षण-अधिगम प्रक्रिया के दौरान निरंतर चलता है ताकि शिक्षण विधियों में सुधार कर अधिगम को सुगम बनाया जा सके।'
        },
        thought: {
            en: 'Ongoing adjustment during unit = Assessment FOR learning (Formative). End of term grading = Assessment OF learning.',
            pa: 'ਪੜ੍ਹਾਉਣ ਦੌਰਾਨ ਸੁਧਾਰ = ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ (Formative)। ਸੈਸ਼ਨ ਦੇ ਅੰਤ ਵਿੱਚ ਗ੍ਰੇਡ = ਸਿੱਖਣ ਦਾ ਮੁਲਾਂਕਣ।',
            hi: 'शिक्षण के दौरान सुधारात्मक प्रतिपुष्टि = अधिगम के लिए आकलन (रचनात्मक)। सत्रांत ग्रेडिंग = अधिगम का आकलन।'
        }
    },
    {
        id: 'q-pstet-cdp-07',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: 'RTE Act 2009 (Pupil-Teacher Ratio Norms)',
            pa: 'ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਐਕਟ 2009 (ਅਧਿਆਪਕ-ਵਿਦਿਆਰਥੀ ਅਨੁਪਾਤ)',
            hi: 'शिक्षा का अधिकार अधिनियम 2009 (छात्र-शिक्षक अनुपात)'
        },
        question: {
            en: 'A government primary school in a border district of Punjab has a total enrolled strength of 115 children across Classes 1 to 5. According to the statutory norms prescribed in the Schedule of the Right to Education (RTE) Act 2009, what is the minimum number of full-time teachers required for this school?',
            pa: 'ਪੰਜਾਬ ਦੇ ਇੱਕ ਸਰਹੱਦੀ ਜ਼ਿਲ੍ਹੇ ਦੇ ਸਰਕਾਰੀ ਪ੍ਰਾਇਮਰੀ ਸਕੂਲ ਵਿੱਚ ਪਹਿਲੀ ਤੋਂ ਪੰਜਵੀਂ ਜਮਾਤ ਤੱਕ ਕੁੱਲ 115 ਵਿਦਿਆਰਥੀ ਦਾਖ਼ਲ ਹਨ। ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਐਕਟ 2009 ਦੇ ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਇਸ ਸਕੂਲ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੇ ਪੂਰੇ ਸਮੇਂ ਦੇ ਅਧਿਆਪਕ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ?',
            hi: 'पंजाब के एक सीमावर्ती जिले के सरकारी प्राथमिक विद्यालय में कक्षा 1 से 5 तक कुल 115 छात्र नामांकित हैं। शिक्षा का अधिकार अधिनियम (RTE) 2009 की अनुसूची के अनुसार इस विद्यालय हेतु न्यूनतम कितने पूर्णकालिक शिक्षकों की आवश्यकता है?'
        },
        options: {
            A: { en: '2 teachers', pa: '2 ਅਧਿਆਪਕ', hi: '2 शिक्षक' },
            B: { en: '3 teachers', pa: '3 ਅਧਿਆਪਕ', hi: '3 शिक्षक' },
            C: { en: '4 teachers', pa: '4 ਅਧਿਆਪਕ', hi: '4 शिक्षक' },
            D: { en: '5 teachers plus a full-time Head Teacher', pa: '5 ਅਧਿਆਪਕ ਅਤੇ ਇੱਕ ਮੁੱਖ ਅਧਿਆਪਕ', hi: '5 शिक्षक एवं एक पूर्णकालिक प्रधानाध्यापक' }
        },
        correct: 'C',
        explanation: {
            en: 'Under the Schedule to the RTE Act 2009 for Primary Schools (Classes 1–5): Up to 60 students = 2 teachers; 61 to 90 = 3 teachers; 91 to 120 = 4 teachers; 121 to 200 = 5 teachers; above 150 = 5 teachers + 1 Head Teacher. For 115 students, exactly 4 teachers are mandated.',
            pa: 'RTE ਐਕਟ 2009 ਮੁਤਾਬਕ ਪ੍ਰਾਇਮਰੀ ਸਕੂਲ ਲਈ: 60 ਤੱਕ = 2 ਅਧਿਆਪਕ; 61 ਤੋਂ 90 = 3; 91 ਤੋਂ 120 = 4 ਅਧਿਆਪਕ। ਇਸ ਲਈ 115 ਵਿਦਿਆਰਥੀਆਂ ਲਈ 4 ਅਧਿਆਪਕ ਲਾਜ਼ਮੀ ਹਨ।',
            hi: 'RTE अधिनियम 2009 के अनुसार प्राथमिक विद्यालय में: 60 तक = 2 शिक्षक; 61 से 90 = 3 शिक्षक; 91 से 120 = 4 शिक्षक। अतः 115 छात्रों हेतु 4 शिक्षक अनिवार्य हैं।'
        },
        thought: {
            en: 'RTE Primary PTR slabs: 1-60 (2), 61-90 (3), 91-120 (4). 115 falls in the 91-120 bracket = 4 teachers.',
            pa: 'RTE ਸਲੈਬ: 91 ਤੋਂ 120 ਵਿਦਿਆਰਥੀ = 4 ਅਧਿਆਪਕ।',
            hi: 'RTE स्लैब: 91 से 120 छात्र = 4 शिक्षक।'
        }
    },
    {
        id: 'q-pstet-cdp-08',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: 'NEP 2020 (Foundational Stage Structure & Medium)',
            pa: 'NEP 2020 (ਮੁੱਢਲਾ ਪੜਾਅ ਅਤੇ ਸਿੱਖਿਆ ਦਾ ਮਾਧਿਅਮ)',
            hi: 'NEP 2020 (बुनियादी चरण संरचना एवं माध्यम)'
        },
        question: {
            en: 'Under the National Education Policy (NEP) 2020, what is the age bracket and duration of the Foundational Stage, and what is the mandated guideline regarding the medium of instruction?',
            pa: 'ਰਾਸ਼ਟਰੀ ਸਿੱਖਿਆ ਨੀਤੀ (NEP) 2020 ਅਧੀਨ ਬੁਨਿਆਦੀ ਪੜਾਅ (Foundational Stage) ਦਾ ਸਮਾਂ ਅਤੇ ਉਮਰ ਵਰਗ ਕੀ ਹੈ, ਅਤੇ ਸਿੱਖਿਆ ਦੇ ਮਾਧਿਅਮ ਸੰਬੰਧੀ ਕੀ ਨਿਰਦੇਸ਼ ਹੈ?',
            hi: 'राष्ट्रीय शिक्षा नीति (NEP) 2020 के तहत बुनियादी चरण (Foundational Stage) की आयु सीमा व अवधि क्या है, तथा शिक्षण के माध्यम संबंधी क्या निर्देश है?'
        },
        options: {
            A: {
                en: 'Ages 3 to 8 (5 years duration); medium of instruction in mother tongue / home language at least up to Grade 5',
                pa: 'ਉਮਰ 3 ਤੋਂ 8 ਸਾਲ (5 ਸਾਲ ਦੀ ਮਿਆਦ); ਘੱਟੋ-ਘੱਟ 5ਵੀਂ ਜਮਾਤ ਤੱਕ ਸਿੱਖਿਆ ਦਾ ਮਾਧਿਅਮ ਮਾਤ-ਭਾਸ਼ਾ / ਘਰੇਲੂ ਭਾਸ਼ਾ',
                hi: 'आयु 3 से 8 वर्ष (5 वर्ष की अवधि); कम से कम कक्षा 5 तक शिक्षण का माध्यम मातृभाषा / गृहभाषा'
            },
            B: {
                en: 'Ages 6 to 11 (5 years duration); medium of instruction exclusively in English from Class 1',
                pa: 'ਉਮਰ 6 ਤੋਂ 11 ਸਾਲ (5 ਸਾਲ); ਪਹਿਲੀ ਜਮਾਤ ਤੋਂ ਹੀ ਸਿਰਫ਼ ਅੰਗਰੇਜ਼ੀ ਮਾਧਿਅਮ',
                hi: 'आयु 6 से 11 वर्ष (5 वर्ष); कक्षा 1 से अनिवार्य अंग्रेज़ी माध्यम'
            },
            C: {
                en: 'Ages 5 to 10 (5 years duration); bilingual Hindi-English formula strictly without regional dialects',
                pa: 'ਉਮਰ 5 ਤੋਂ 10 ਸਾਲ; ਬਿਨਾਂ ਖੇਤਰੀ ਭਾਸ਼ਾ ਦੇ ਸਿਰਫ਼ ਹਿੰਦੀ-ਅੰਗਰੇਜ਼ੀ ਫਾਰਮੂਲਾ',
                hi: 'आयु 5 से 10 वर्ष; बिना क्षेत्रीय भाषा के केवल हिंदी-अंग्रेज़ी फॉर्मूला'
            },
            D: {
                en: 'Ages 2 to 6 (4 years duration); vocational technical crafts as the sole core medium',
                pa: 'ਉਮਰ 2 ਤੋਂ 6 ਸਾਲ (4 ਸਾਲ); ਸਿਰਫ਼ ਕਿੱਤਾਮੁਖੀ ਹੁਨਰ',
                hi: 'आयु 2 से 6 वर्ष (4 वर्ष); केवल व्यावसायिक कौशल'
            }
        },
        correct: 'A',
        explanation: {
            en: 'NEP 2020 restructures school education into 5+3+3+4. The Foundational Stage covers 5 years (ages 3–8: 3 years Anganwadi/Balvatika + Classes 1 & 2) with play-based learning and instruction in the child’s mother tongue/regional language at least up to Grade 5.',
            pa: 'NEP 2020 ਦੇ 5+3+3+4 ਢਾਂਚੇ ਵਿੱਚ ਮੁੱਢਲਾ ਪੜਾਅ 5 ਸਾਲ (ਉਮਰ 3 ਤੋਂ 8 ਸਾਲ) ਦਾ ਹੈ ਜਿਸ ਵਿੱਚ ਖੇਡ-ਅਧਾਰਿਤ ਸਿੱਖਿਆ ਅਤੇ ਘੱਟੋ-ਘੱਟ 5ਵੀਂ ਤੱਕ ਮਾਤ-ਭਾਸ਼ਾ ਮਾਧਿਅਮ ਨਿਰਧਾਰਿਤ ਹੈ।',
            hi: 'NEP 2020 के 5+3+3+4 ढाँचे में बुनियादी चरण 5 वर्ष (आयु 3 से 8 वर्ष) का है जिसमें खेल-आधारित शिक्षा तथा कक्षा 5 तक मातृभाषा माध्यम अनिवार्य है।'
        },
        thought: {
            en: 'Foundational Stage = 5 years (3y Anganwadi + Gr 1-2, ages 3-8) + Mother tongue medium.',
            pa: 'ਮੁੱਢਲਾ ਪੜਾਅ = 5 ਸਾਲ (ਉਮਰ 3-8) + ਮਾਤ-ਭਾਸ਼ਾ ਮਾਧਿਅਮ।',
            hi: 'बुनियादी चरण = 5 वर्ष (आयु 3-8) + मातृभाषा माध्यम।'
        }
    },
    {
        id: 'q-pstet-cdp-09',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: 'Inclusive Education (ADHD Classroom Strategy)',
            pa: 'ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ (ADHD ਲਈ ਰਣਨੀਤੀ)',
            hi: 'समावेशी शिक्षा (ADHD हेतु रणनीति)'
        },
        question: {
            en: 'In a Class 3 classroom, Rohan demonstrates a very short attention span, constantly fidgets with his stationery, frequently interrupts ongoing class discussions, and cannot sit still for longer than 8–10 minutes. Which pedagogical strategy is most effective for a child with suspected ADHD?',
            pa: 'ਤੀਜੀ ਜਮਾਤ ਵਿੱਚ ਰੋਹਨ ਦਾ ਧਿਆਨ ਬਹੁਤ ਜਲਦੀ ਭਟਕ ਜਾਂਦਾ ਹੈ, ਉਹ ਡੈਸਕ ਤੇ ਚੈਨ ਨਾਲ ਨਹੀਂ ਬੈਠਦਾ, ਵਾਰ-ਵਾਰ ਗੱਲਬਾਤ ਵਿੱਚ ਦਖ਼ਲ ਦਿੰਦਾ ਹੈ ਅਤੇ 8-10 ਮਿੰਟ ਤੋਂ ਵੱਧ ਇੱਕ ਥਾਂ ਟਿਕ ਕੇ ਨਹੀਂ ਬੈਠ ਸਕਦਾ। ADHD ਵਾਲੇ ਬੱਚੇ ਲਈ ਸਭ ਤੋਂ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਸਿੱਖਿਆ ਰਣਨੀਤੀ ਕਿਹੜੀ ਹੈ?',
            hi: 'कक्षा 3 में रोहन का अवधान बहुत कम समय टिकता है, वह डेस्क पर बेचैन रहता है, कक्षा चर्चा में बार-बार बाधा डालता है और 8-10 मिनट से अधिक स्थिर नहीं बैठ पाता। ADHD से प्रभावित बालक हेतु सर्वाधिक प्रभावी शैक्षणिक रणनीति कौन सी है?'
        },
        options: {
            A: {
                en: 'Making him stand outside the classroom for the entire period as disciplinary detention',
                pa: 'ਅਨੁਸ਼ਾਸਨ ਵਜੋਂ ਉਸ ਨੂੰ ਪੂਰਾ ਪੀਰੀਅਡ ਜਮਾਤ ਤੋਂ ਬਾਹਰ ਖੜ੍ਹਾ ਰੱਖਣਾ',
                hi: 'अनुशासन हेतु उसे संपूर्ण कालांश कक्षा से बाहर खड़ा रखना'
            },
            B: {
                en: 'Breaking academic tasks into short 10-minute structured segments with purposeful movement breaks',
                pa: 'ਕੰਮ ਨੂੰ ਛੋਟੇ 10-ਮਿੰਟ ਦੇ ਹਿੱਸਿਆਂ ਵਿੱਚ ਵੰਡਣਾ ਅਤੇ ਵਿਚਕਾਰ ਉਦੇਸ਼ਪੂਰਨ ਹਰਕਤ/ਵਿਰਾਮ ਦੇਣਾ',
                hi: 'अध्ययन कार्यों को 10-10 मिनट के छोटे खंडों में विभाजित करना तथा उद्देश्यपूर्ण गतिशीलता विराम देना'
            },
            C: {
                en: 'Ignoring his condition and giving him long monotonous copying tasks from the blackboard',
                pa: 'ਉਸ ਦੀ ਹਾਲਤ ਨੂੰ ਨਜ਼ਰਅੰਦਾਜ਼ ਕਰਕੇ ਬੋਰਡ ਤੋਂ ਲੰਬੇ ਲਿਖਤੀ ਕੰਮ ਦੇਣਾ',
                hi: 'उसकी स्थिति की उपेक्षा कर श्यामपट्ट से लंबी नकल का कार्य देना'
            },
            D: {
                en: 'Assigning a peer monitor to physically restrict him to his bench',
                pa: 'ਕਿਸੇ ਹੋਰ ਵਿਦਿਆਰਥੀ ਨੂੰ ਉਸ ਨੂੰ ਬੈਂਚ ਤੇ ਜ਼ਬਰਦਸਤੀ ਬਿਠਾਈ ਰੱਖਣ ਲਈ ਕਹਿਣਾ',
                hi: 'किसी सहपाठी को उसे बलपूर्वक बेंच पर बांधे रखने का दायित्व देना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Children with Attention Deficit Hyperactivity Disorder (ADHD) thrive when learning activities are partitioned into brief, structured intervals with clear visual expectations and structured movement breaks to discharge physical restlessness.',
            pa: 'ADHD ਵਾਲੇ ਬੱਚਿਆਂ ਲਈ ਲੰਬੇ ਕੰਮ ਬੋਝ ਬਣ ਜਾਂਦੇ ਹਨ। ਕੰਮ ਨੂੰ ਛੋਟੇ-ਛੋਟੇ ਹਿੱਸਿਆਂ ਵਿੱਚ ਵੰਡਣਾ ਅਤੇ ਕਲਾਸ ਵਿੱਚ ਸਰਗਰਮ ਭੂਮਿਕਾ ਦੇਣਾ ਸਭ ਤੋਂ ਵਧੀਆ ਹੁੰਦਾ ਹੈ।',
            hi: 'ADHD से प्रभावित बालकों हेतु कार्यों को 10-15 मिनट के छोटे, संरचित खंडों में बाँटना तथा बीच-बीच में शारीरिक गतिशीलता के अवसर देना सर्वोत्तम वैज्ञानिक उपाय है।'
        },
        thought: {
            en: 'ADHD remedy = Short manageable tasks + structured physical movement breaks.',
            pa: 'ADHD ਦਾ ਹੱਲ = ਛੋਟੇ ਕੰਮ + ਹਰਕਤ ਦੇ ਮੌਕੇ।',
            hi: 'ADHD समाधान = छोटे खंडों में कार्य + गतिशीलता विराम।'
        }
    },
    {
        id: 'q-pstet-cdp-10',
        topicId: 'pstet-cdp-core',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'hard',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Child Development & Pedagogy',
            pa: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'बाल विकास एवं शिक्षा शास्त्र'
        },
        subtopic: {
            en: "Piaget's Formal Operational Stage (Hypothetico-Deductive Reasoning)",
            pa: 'ਪਿਆਜੇ ਦਾ ਅਮੂਰਤ ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ (ਪਰਿਕਲਪਨਾਤਮਕ ਤਰਕ)',
            hi: 'पियाजे की औपचारिक संक्रियात्मक अवस्था (परिकल्पनात्मक तर्क)'
        },
        question: {
            en: 'A teacher presents a hypothetical problem to Class 8 students: "Suppose there is an alien planet where metals float on water and wood sinks. If we place an iron key and a wooden plank into a lake on that planet, what will happen?" A student who systematically reasons through the hypothetical premises contrary to direct real-world experience has reached which Piagetian stage?',
            pa: 'ਅੱਠਵੀਂ ਜਮਾਤ ਦੀ ਅਧਿਆਪਕਾ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਇੱਕ ਕਾਲਪਨਿਕ ਸਵਾਲ ਪੁੱਛਦੀ ਹੈ: "ਮੰਨ ਲਓ ਇੱਕ ਅਜਿਹਾ ਗ੍ਰਹਿ ਹੈ ਜਿੱਥੇ ਧਾਤਾਂ ਪਾਣੀ ਤੇ ਤੈਰਦੀਆਂ ਹਨ ਅਤੇ ਲੱਕੜ ਡੁੱਬ ਜਾਂਦੀ ਹੈ। ਜੇ ਅਸੀਂ ਉਸ ਗ੍ਰਹਿ ਦੀ ਝੀਲ ਵਿੱਚ ਲੋਹੇ ਦੀ ਚਾਬੀ ਅਤੇ ਲੱਕੜ ਦਾ ਫੱਟਾ ਸੁੱਟੀਏ ਤਾਂ ਕੀ ਹੋਵੇਗਾ?" ਜਿਹੜਾ ਵਿਦਿਆਰਥੀ ਅਸਲ ਜ਼ਿੰਦਗੀ ਦੇ ਤਜਰਬੇ ਤੋਂ ਉਲਟ ਇਸ ਕਲਪਨਾ ਦੇ ਆਧਾਰ ਤੇ ਤਰਕਪੂਰਨ ਸਿੱਟਾ ਕੱਢ ਲੈਂਦਾ ਹੈ, ਉਹ ਪਿਆਜੇ ਦੇ ਕਿਸ ਪੜਾਅ ਤੇ ਹੈ?',
            hi: 'कक्षा 8 की शिक्षिका एक काल्पनिक समस्या प्रस्तुत करती है: "मान लीजिए एक ऐसा ग्रह है जहाँ धातुएँ पानी पर तैरती हैं और लकड़ी डूब जाती है। यदि हम उस ग्रह की झील में लोहे की चाबी और लकड़ी का तख्ता डालें तो क्या होगा?" जो छात्र प्रत्यक्ष अनुभव के विपरीत काल्पनिक मान्यताओं के आधार पर तार्किक निष्कर्ष निकालता है, वह पियाजे की किस अवस्था में है?'
        },
        options: {
            A: {
                en: 'Sensorimotor Stage',
                pa: 'ਇੰਦਰੀ-ਗਿਆਨਕ ਪੜਾਅ (Sensorimotor Stage)',
                hi: 'संवेदी-गामक अवस्था (Sensorimotor)'
            },
            B: {
                en: 'Pre-operational Stage',
                pa: 'ਪੂਰਵ-ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ (Pre-operational Stage)',
                hi: 'पूर्व-संक्रियात्मक अवस्था (Pre-operational)'
            },
            C: {
                en: 'Concrete Operational Stage',
                pa: 'ਮੂਰਤ ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ (Concrete Operational Stage)',
                hi: 'मूर्त संक्रियात्मक अवस्था (Concrete Operational)'
            },
            D: {
                en: 'Formal Operational Stage (Hypothetico-Deductive Reasoning)',
                pa: 'ਅਮੂਰਤ ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ (ਪਰਿਕਲਪਨਾਤਮਕ-ਨਿਗਮਨਾਤਮਕ ਤਰਕ)',
                hi: 'औपचारिक संक्रियात्मक अवस्था (परिकल्पनात्मक-निगमनात्मक तर्क)'
            }
        },
        correct: 'D',
        explanation: {
            en: 'In Piaget\'s Formal Operational stage (11+ years), adolescents develop Hypothetico-Deductive reasoning. They can operate on abstract, hypothetical, counter-factual propositions without needing concrete physical objects.',
            pa: 'ਪਿਆਜੇ ਦੇ ਅਮੂਰਤ ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ (11+ ਸਾਲ) ਵਿੱਚ ਬੱਚਾ ਅਸਲੀਅਤ ਤੋਂ ਪਰੇ ਕਲਪਨਾਤਮਕ ਸ਼ਰਤਾਂ ਤੇ ਵੀ ਤਾਰਕਿਕ ਨਿਯਮ ਲਗਾਉਣ ਦੀ ਸਮਰੱਥਾ ਰੱਖਦਾ ਹੈ।',
            hi: 'पियाजे की औपचारिक संक्रियात्मक अवस्था (11+ वर्ष) में किशोर परिकल्पनात्मक-निगमनात्मक तर्क द्वारा अमूर्त एवं प्रत्यक्ष अनुभव से परे की स्थितियों पर भी तार्किक चिंतन कर सकते हैं।'
        },
        thought: {
            en: 'Counter-factual / hypothetical deduction = Formal operational stage.',
            pa: 'ਕਾਲਪਨਿਕ ਧਾਰਨਾਵਾਂ ਤੇ ਅਮੂਰਤ ਤਰਕ = ਅਮੂਰਤ ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ।',
            hi: 'काल्पनिक एवं अमूर्त परिस्थितियों पर तार्किक चिंतन = औपचारिक संक्रियात्मक अवस्था।'
        }
    },

    // =========================================================================
    // 2. PUNJABI BHASHA SIKHIA (pstet-punjabi-pedagogy) — 10 MCQs
    // =========================================================================
    {
        id: 'q-pstet-pun-01',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Principles of Mother Tongue Pedagogy (Naturalness)',
            pa: 'ਮਾਤ-ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਦੇ ਸਿਧਾਂਤ (ਸੁਭਾਵਿਕਤਾ)',
            hi: 'मातृभाषा शिक्षण के सिद्धांत (स्वाभाविकता)'
        },
        question: {
            en: 'In a primary school in Amritsar, a Class 1 Punjabi teacher spends the first few weeks encouraging children to share village stories, sing nursery rhymes, and chat casually before introducing written Gurmukhi letters. Which core principle of language teaching is she applying?',
            pa: 'ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਇੱਕ ਪ੍ਰਾਇਮਰੀ ਸਕੂਲ ਵਿੱਚ ਪਹਿਲੀ ਜਮਾਤ ਦੀ ਅਧਿਆਪਕਾ ਲਿਖਤੀ ਗੁਰਮੁਖੀ ਅੱਖਰ ਸ਼ੁਰੂ ਕਰਵਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਕੁਝ ਹਫ਼ਤੇ ਬੱਚਿਆਂ ਨੂੰ ਘਰ-ਪਰਿਵਾਰ ਦੀਆਂ ਗੱਲਾਂ ਕਰਨ, ਬਾਲ-ਗੀਤ ਗਾਉਣ ਅਤੇ ਕਹਾਣੀਆਂ ਸੁਣਾਉਣ ਲਈ ਪ੍ਰੇਰਿਤ ਕਰਦੀ ਹੈ। ਉਹ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਦੇ ਕਿਸ ਮੂਲ ਸਿਧਾਂਤ ਦੀ ਪਾਲਣਾ ਕਰ ਰਹੀ ਹੈ?',
            hi: 'अमृतसर के एक प्राथमिक विद्यालय में कक्षा 1 की शिक्षिका गुरुमुखी अक्षर लिखवाने से पूर्व कुछ सप्ताह बच्चों को घर की बातें करने, बालगीत गाने और कहानियाँ सुनाने हेतु प्रेरित करती है। वह भाषा शिक्षण के किस मूल सिद्धांत का अनुपालन कर रही है?'
        },
        options: {
            A: {
                en: 'Principle of Mechanical Memorization and Calligraphy',
                pa: 'ਯਾਂਤਰਿਕ ਰੱਟੇਬਾਜ਼ੀ ਅਤੇ ਸੁਲੇਖ ਦਾ ਸਿਧਾਂਤ',
                hi: 'यांत्रिक रटंत एवं सुलेख का सिद्धांत'
            },
            B: {
                en: 'Principle of Naturalness (Oral immersion preceding formal literacy)',
                pa: 'ਸੁਭਾਵਿਕਤਾ ਦਾ ਸਿਧਾਂਤ (ਲਿਖਤੀ ਤੋਂ ਪਹਿਲਾਂ ਮੌਖਿਕ ਸੰਚਾਰ ਦੀ ਸਹਿਜਤਾ)',
                hi: 'स्वाभाविकता का सिद्धांत (औपचारिक लेखन से पूर्व मौखिक संप्रेषण की सहजता)'
            },
            C: {
                en: 'Principle of Deductive Grammatical Abstraction',
                pa: 'ਨਿਗਮਨਾਤਮਕ ਵਿਆਕਰਨਿਕ ਅਮੂਰਤਤਾ ਦਾ ਸਿਧਾਂਤ',
                hi: 'निगमनात्मक व्याकरणिक अमूर्तता का सिद्धांत'
            },
            D: {
                en: 'Principle of Translation-Equivalence Isolation',
                pa: 'ਅਨੁਵਾਦਕ ਸਮਾਨਤਾ ਅਤੇ ਵਖਰੇਵੇਂ ਦਾ ਸਿਧਾਂਤ',
                hi: 'अनुवाद समानता एवं पृथक्करण का सिद्धांत'
            }
        },
        correct: 'B',
        explanation: {
            en: 'The Principle of Naturalness (ਸੁਭਾਵਿਕਤਾ ਦਾ ਸਿਧਾਂਤ) emphasizes that children acquire their mother tongue organically through listening and speaking in a natural, supportive environment before progressing to formal written literacy.',
            pa: 'ਸੁਭਾਵਿਕਤਾ ਦੇ ਸਿਧਾਂਤ ਅਨੁਸਾਰ ਮਾਤ-ਭਾਸ਼ਾ ਸਿੱਖਣ ਦਾ ਕੁਦਰਤੀ ਢੰਗ ਪਹਿਲਾਂ ਸੁਣਨਾ ਅਤੇ ਬੋਲਣਾ ਹੈ। ਰਸਮੀ ਲਿਖਤ ਤੋਂ ਪਹਿਲਾਂ ਮੌਖਿਕ ਗੱਲਬਾਤ ਰਾਹੀਂ ਝਿਜਕ ਦੂਰ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ।',
            hi: 'स्वाभाविकता के सिद्धांत के अनुसार बालक मातृभाषा को प्राकृतिक वातावरण में सुनकर और बोलकर सरलता से सीखता है। लेखन से पूर्व मौखिक कार्य आवश्यक है।'
        },
        thought: {
            en: 'Natural mother tongue acquisition order = Oral communication before formal writing.',
            pa: 'ਮਾਤ-ਭਾਸ਼ਾ ਦਾ ਸੁਭਾਵਿਕ ਕ੍ਰਮ = ਲਿਖਣ ਤੋਂ ਪਹਿਲਾਂ ਸੁਣਨਾ ਤੇ ਬੋਲਣਾ।',
            hi: 'मातृभाषा का स्वाभाविक क्रम = औपचारिक लेखन से पूर्व मौखिक कार्य।'
        }
    },
    {
        id: 'q-pstet-pun-02',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Classification of Language Skills (Receptive Skills)',
            pa: 'ਭਾਸ਼ਾਈ ਕੌਸ਼ਲਾਂ ਦਾ ਵਰਗੀਕਰਨ (ਗ੍ਰਹਿਣਆਤਮਕ ਕੌਸ਼ਲ)',
            hi: 'भाषा कौशलों का वर्गीकरण (ग्रहणात्मक कौशल)'
        },
        question: {
            en: 'In language pedagogy, which pair of language skills is classified as "Receptive Skills" (ਗ੍ਰਹਿਣਆਤਮਕ ਕੌਸ਼ਲ) through which a learner absorbs and comprehends linguistic input?',
            pa: 'ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ ਵਿੱਚ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਜੋੜਾ "ਗ੍ਰਹਿਣਆਤਮਕ ਕੌਸ਼ਲ" (Receptive Skills) ਅਖਵਾਉਂਦਾ ਹੈ ਜਿਸ ਰਾਹੀਂ ਵਿਦਿਆਰਥੀ ਗਿਆਨ ਗ੍ਰਹਿਣ ਕਰਦਾ ਹੈ?',
            hi: 'भाषा शिक्षण शास्त्र में निम्नलिखित में से कौन सा युग्म "ग्रहणात्मक कौशल" (Receptive Skills) कहलाता है जिसके माध्यम से शिक्षार्थी ज्ञान ग्रहण करता है?'
        },
        options: {
            A: {
                en: 'Speaking and Writing (ਬੋਲਣਾ ਅਤੇ ਲਿਖਣਾ)',
                pa: 'ਬੋਲਣਾ ਅਤੇ ਲਿਖਣਾ',
                hi: 'बोलना और लिखना'
            },
            B: {
                en: 'Listening and Reading (ਸੁਣਨਾ ਅਤੇ ਪੜ੍ਹਨਾ)',
                pa: 'ਸੁਣਨਾ ਅਤੇ ਪੜ੍ਹਨਾ',
                hi: 'सुनना और पढ़ना'
            },
            C: {
                en: 'Speaking and Reading (ਬੋਲਣਾ ਅਤੇ ਪੜ੍ਹਨਾ)',
                pa: 'ਬੋਲਣਾ ਅਤੇ ਪੜ੍ਹਨਾ',
                hi: 'बोलना और पढ़ना'
            },
            D: {
                en: 'Listening and Writing (ਸੁਣਨਾ ਅਤੇ ਲਿਖਣਾ)',
                pa: 'ਸੁਣਨਾ ਅਤੇ ਲਿਖਣਾ',
                hi: 'सुनना और लिखना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Listening (ਸੁਣਨਾ) and Reading (ਪੜ੍ਹਨਾ) are Receptive (input) skills because the learner receives and decodes information. Speaking and Writing are Productive (output) skills.',
            pa: 'ਸੁਣਨਾ ਅਤੇ ਪੜ੍ਹਨਾ ਗ੍ਰਹਿਣਆਤਮਕ (Receptive) ਕੌਸ਼ਲ ਹਨ ਕਿਉਂਕਿ ਇਹਨਾਂ ਰਾਹੀਂ ਅਸੀਂ ਵਿਚਾਰ ਗ੍ਰਹਿਣ ਕਰਦੇ ਹਾਂ। ਬੋਲਣਾ ਅਤੇ ਲਿਖਣਾ ਉਤਪਾਦਕ (Productive) ਕੌਸ਼ਲ ਹਨ।',
            hi: 'सुनना और पढ़ना ग्रहणात्मक (Receptive) कौशल हैं क्योंकि इनके द्वारा विचारों को ग्रहण किया जाता है। बोलना और लिखना उत्पादक (Productive) कौशल हैं।'
        },
        thought: {
            en: 'Receptive = Listening + Reading; Productive = Speaking + Writing.',
            pa: 'ਗ੍ਰਹਿਣਆਤਮਕ = ਸੁਣਨਾ + ਪੜ੍ਹਨਾ; ਉਤਪਾਦਕ = ਬੋਲਣਾ + ਲਿਖਣਾ।',
            hi: 'ग्रहणात्मक = सुनना + पढ़ना; उत्पादक = बोलना + लिखना।'
        }
    },
    {
        id: 'q-pstet-pun-03',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Reading Pedagogy (Silent Reading / ਮੌਨ ਪਾਠ)',
            pa: 'ਵਾਚਨ ਸਿੱਖਿਆ (ਮੌਨ ਪਾਠ ਦਾ ਮੁੱਖ ਮੰਤਵ)',
            hi: 'पठन शिक्षण (मौन वाचन का उद्देश्य)'
        },
        question: {
            en: 'A Punjabi teacher in Class 6 instructs students to practice Silent Reading (ਮੌਨ ਪਾਠ) during a prose lesson. What is the primary psychological and educational benefit of silent reading over loud reading at the middle school stage?',
            pa: 'ਛੇਵੀਂ ਜਮਾਤ ਦਾ ਪੰਜਾਬੀ ਅਧਿਆਪਕ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਵਾਰਤਕ ਪਾਠ ਦਾ ਮੌਨ ਪਾਠ (Silent Reading) ਕਰਨ ਲਈ ਕਹਿੰਦਾ ਹੈ। ਮਿਡਲ ਪੱਧਰ ਤੇ ਉੱਚੀ ਪਾਠ ਦੇ ਮੁਕਾਬਲੇ ਮੌਨ ਪਾਠ ਦਾ ਮੁੱਖ ਮਨੋਵਿਗਿਆਨਕ ਅਤੇ ਵਿੱਦਿਅਕ ਲਾਭ ਕੀ ਹੈ?',
            hi: 'कक्षा 6 का पंजाबी शिक्षक गद्य पाठ के दौरान छात्रों को मौन वाचन (Silent Reading) करने का निर्देश देता है। उच्च प्राथमिक स्तर पर सस्वर वाचन की तुलना में मौन वाचन का प्रमुख मनोवैज्ञानिक व शैक्षणिक लाभ क्या है?'
        },
        options: {
            A: {
                en: 'It enables the teacher to rest without having to manage the classroom',
                pa: 'ਇਸ ਨਾਲ ਅਧਿਆਪਕ ਨੂੰ ਕਲਾਸ ਸੰਭਾਲਣ ਤੋਂ ਬਿਨਾਂ ਆਰਾਮ ਮਿਲ ਜਾਂਦਾ ਹੈ',
                hi: 'इससे शिक्षक को कक्षा प्रबंधन किए बिना विश्राम मिल जाता है'
            },
            B: {
                en: 'It allows reading at higher speed with deeper comprehension while conserving vocal energy',
                pa: 'ਇਹ ਬਿਨਾਂ ਬੁੱਲ੍ਹ ਹਿਲਾਏ ਤੇਜ਼ ਗਤੀ ਨਾਲ ਪੜ੍ਹਨ, ਡੂੰਘਾ ਵਿਚਾਰ ਬੋਧ ਕਰਨ ਅਤੇ ਊਰਜਾ ਬਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ',
                hi: 'यह तीव्र गति से पठन, गहन अर्थबोध तथा वाक-ऊर्जा के संरक्षण में सहायक है'
            },
            C: {
                en: 'It directly helps in eliminating articulation errors in oral pronunciation',
                pa: 'ਇਸ ਨਾਲ ਉਚਾਰਨ ਦੀਆਂ ਮੌਖਿਕ ਗਲਤੀਆਂ ਸਿੱਧੇ ਤੌਰ ਤੇ ਦੂਰ ਹੋ ਜਾਂਦੀਆਂ ਹਨ',
                hi: 'इससे मौखिक उच्चारण की त्रुटियाँ स्वतः दूर हो जाती हैं'
            },
            D: {
                en: 'It prevents students from developing independent critical thinking',
                pa: 'ਇਹ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਆਲੋਚਨਾਤਮਕ ਸੋਚ ਨੂੰ ਰੋਕਦਾ ਹੈ',
                hi: 'यह छात्रों के स्वतंत्र आलोचनात्मक चिंतन को रोकता है'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Silent reading eliminates vocal cord fatigue, dramatically accelerates reading speed (words per minute), and focuses the mind entirely on cognitive decoding and deep comprehension.',
            pa: 'ਮੌਨ ਪਾਠ ਪੜ੍ਹਨ ਦੀ ਰਫ਼ਤਾਰ ਵਧਾਉਂਦਾ ਹੈ, ਡੂੰਘੇ ਵਿਚਾਰ ਬੋਧ ਵਿੱਚ ਸਹਾਇਕ ਹੁੰਦਾ ਹੈ ਅਤੇ ਬੋਲਣ ਵਾਲੀ ਊਰਜਾ ਦੀ ਬੱਚਤ ਕਰਦਾ ਹੈ।',
            hi: 'मौन वाचन पठन गति में वृद्धि करता है, एकाग्रता एवं गहन अर्थबोध को सुगम बनाता है तथा वाक-ऊर्जा की बचत करता है।'
        },
        thought: {
            en: 'Silent reading = Speed + Deep Comprehension + Energy conservation. Loud reading = Pronunciation.',
            pa: 'ਮੌਨ ਪਾਠ = ਤੇਜ਼ ਗਤੀ + ਡੂੰਘੀ ਸਮਝ। ਉੱਚੀ ਪਾਠ = ਸ਼ੁੱਧ ਉਚਾਰਨ।',
            hi: 'मौन वाचन = तीव्र गति + गहन बोध। सस्वर वाचन = उच्चारण सुधार।'
        }
    },
    {
        id: 'q-pstet-pun-04',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Writing Pedagogy (Dictation / ਸ਼ਰੁਤੀਲੇਖ)',
            pa: 'ਲੇਖਨ ਸਿੱਖਿਆ (ਸ਼ਰੁਤੀਲੇਖ / ਇਮਲਾ)',
            hi: 'लेखन शिक्षण (श्रुतलेख / इमला)'
        },
        question: {
            en: 'In primary Punjabi pedagogy, what is the principal objective of conducting regular Dictation (ਸ਼ਰੁਤੀਲੇਖ / ਇਮਲਾ) exercises in the classroom?',
            pa: 'ਪ੍ਰਾਇਮਰੀ ਪੱਧਰ ਤੇ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਵਿੱਚ ਜਮਾਤ ਵਿੱਚ ਨਿਯਮਿਤ ਸ਼ਰੁਤੀਲੇਖ (ਇਮਲਾ) ਕਰਵਾਉਣ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਕੀ ਹੈ?',
            hi: 'प्राथमिक स्तर पर पंजाबी भाषा शिक्षण में नियमित श्रुतलेख (इमला) कराने का मुख्य उद्देश्य क्या है?'
        },
        options: {
            A: {
                en: 'To test students’ physical handwriting speed under extreme pressure',
                pa: 'ਦਬਾਅ ਹੇਠ ਵਿਦਿਆਰਥੀਆਂ ਦੀ ਲਿਖਣ ਦੀ ਰਫ਼ਤਾਰ ਪਰਖਣਾ',
                hi: 'दबाव में छात्रों की लिखने की गति की परीक्षा लेना'
            },
            B: {
                en: 'To train auditory discrimination and eliminate orthographic spelling errors (ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ)',
                pa: 'ਧਿਆਨ ਨਾਲ ਸੁਣ ਕੇ ਧੁਨੀਆਂ ਦੀ ਪਛਾਣ ਕਰਨਾ ਅਤੇ ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ ਲਿਖਣ ਦਾ ਅਭਿਆਸ ਕਰਵਾਉਣਾ',
                hi: 'ध्यानपूर्वक सुनकर ध्वनियों की पहचान करना तथा वर्तनी शुद्धि का अभ्यास कराना'
            },
            C: {
                en: 'To punish students who speak their home dialect in school',
                pa: 'ਉਹਨਾਂ ਬੱਚਿਆਂ ਨੂੰ ਸਜ਼ਾ ਦੇਣਾ ਜੋ ਸਕੂਲ ਵਿੱਚ ਘਰੇਲੂ ਬੋਲੀ ਬੋਲਦੇ ਹਨ',
                hi: 'उन छात्रों को दंडित करना जो विद्यालय में घरेलू बोली बोलते हैं'
            },
            D: {
                en: 'To avoid teaching literature and save instructional time',
                pa: 'ਸਾਹਿਤ ਪੜ੍ਹਾਉਣ ਤੋਂ ਬਚਣਾ ਅਤੇ ਸਮਾਂ ਬਚਾਉਣਾ',
                hi: 'साहित्य शिक्षण से बचना तथा समय बचाना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Dictation (ਸ਼ਰੁਤੀਲੇਖ) requires active auditory listening, mental grapheme-phoneme mapping, and precise orthographic transcription, making it the premier tool for remedying spelling errors.',
            pa: 'ਸ਼ਰੁਤੀਲੇਖ ਦਾ ਮੁੱਖ ਮੰਤਵ ਧਿਆਨ ਨਾਲ ਸੁਣਨ ਦੀ ਆਦਤ ਪਾਉਣਾ ਅਤੇ ਸ਼ਬਦ-ਜੋੜਾਂ ਦੀਆਂ ਗਲਤੀਆਂ ਦੂਰ ਕਰਕੇ ਸ਼ੁੱਧ ਲਿਖਣਾ ਸਿਖਾਉਣਾ ਹੈ।',
            hi: 'श्रुतलेख का मुख्य उद्देश्य ध्यानपूर्वक श्रवण का विकास करना तथा वर्तनी की अशुद्धियों का निवारण करना है।'
        },
        thought: {
            en: 'Shrutilikh / Dictation = Orthographic spelling accuracy + auditory discrimination.',
            pa: 'ਸ਼ਰੁਤੀਲੇਖ = ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ ਅਤੇ ਸ਼੍ਰਵਣ ਧਿਆਨ।',
            hi: 'श्रुतलेख = वर्तनी शुद्धि एवं श्रवण एकाग्रता।'
        }
    },
    {
        id: 'q-pstet-pun-05',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Poetry Pedagogy (Aesthetic Appreciation / ਰਸ ਸੁਆਦ)',
            pa: 'ਕਵਿਤਾ ਸਿੱਖਿਆ (ਰਸ ਸੁਆਦ ਅਤੇ ਸੁਹਜ-ਸੁਆਦ)',
            hi: 'कविता शिक्षण (रसानुभूति एवं सौंदर्यबोध)'
        },
        question: {
            en: 'When teaching a patriotic Punjabi poem to Class 5 students, what should be the primary objective of the teacher?',
            pa: 'ਪੰਜਵੀਂ ਜਮਾਤ ਵਿੱਚ ਦੇਸ਼-ਭਗਤੀ ਦੀ ਪੰਜਾਬੀ ਕਵਿਤਾ ਪੜ੍ਹਾਉਂਦੇ ਸਮੇਂ ਅਧਿਆਪਕ ਦਾ ਪ੍ਰਮੁੱਖ ਉਦੇਸ਼ ਕੀ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?',
            hi: 'कक्षा 5 में देशभक्ति की पंजाबी कविता पढ़ाते समय शिक्षक का प्रमुख उद्देश्य क्या होना चाहिए?'
        },
        options: {
            A: {
                en: 'To dissect every line for grammatical parsing and sandhi rules',
                pa: 'ਹਰ ਲਾਈਨ ਵਿੱਚੋਂ ਵਿਆਕਰਨਿਕ ਨਿਯਮ ਅਤੇ ਸੰਧੀ ਰਟਾਉਣਾ',
                hi: 'प्रत्येक पंक्ति का व्याकरणिक विश्लेषण करना'
            },
            B: {
                en: 'To evoke aesthetic appreciation (ਰਸ ਸੁਆਦ), rhythm, and emotional imagination',
                pa: 'ਭਾਵਨਾਤਮਕ ਕਲਪਨਾ ਸ਼ਕਤੀ, ਸੰਗੀਤਮਈ ਲੈਅ ਅਤੇ ਰਸ ਸੁਆਦ (Aesthetic appreciation) ਦਾ ਸੰਚਾਰ ਕਰਨਾ',
                hi: 'भावात्मक कल्पना शक्ति, लयात्मकता एवं रसानुभूति का संचार करना'
            },
            C: {
                en: 'To make students memorize the poet’s birth date and ancestral village',
                pa: 'ਕਵੀ ਦੀ ਜਨਮ ਮਿਤੀ ਅਤੇ ਪਿੰਡ ਦਾ ਨਾਂ ਰਟਾਉਣਾ',
                hi: 'कवि की जन्म तिथि एवं गाँव का नाम कंठस्थ कराना'
            },
            D: {
                en: 'To convert the poem into prose and demand word-by-word translation',
                pa: 'ਕਵਿਤਾ ਨੂੰ ਵਾਰਤਕ ਵਿੱਚ ਬਦਲ ਕੇ ਸ਼ਬਦ-ਦਰ-ਸ਼ਬਦ ਅਨੁਵਾਦ ਕਰਵਾਉਣਾ',
                hi: 'कविता को गद्य में बदलकर शब्दशः अर्थ लिखवाना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'The core aim of teaching poetry (ਕਵਿਤਾ ਸਿੱਖਿਆ) is aesthetic enjoyment (ਰਸ ਅਨੁਭਵ), emotional sensitivity, rhythm, and imaginative development. Dry grammatical analysis ruins the aesthetic beauty of poetry.',
            pa: 'ਕਵਿਤਾ ਸਿੱਖਿਆ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਰਸ ਸੁਆਦ, ਕਲਪਨਾ ਸ਼ਕਤੀ ਅਤੇ ਸੁਹਜ-ਸੁਆਦ ਦਾ ਅਨੰਦ ਮਾਣਨਾ ਹੈ, ਨਾ ਕਿ ਖ਼ੁਸ਼ਕ ਵਿਆਕਰਨ ਸਿਖਾਉਣਾ।',
            hi: 'कविता शिक्षण का मुख्य उद्देश्य रसानुभूति, भावात्मक विकास एवं सौंदर्यबोध जाग्रत करना है, न कि शुष्क व्याकरण रटाना।'
        },
        thought: {
            en: 'Poetry aim = Rasa / Aesthetic appreciation / Rhythm, NOT grammatical dissection.',
            pa: 'ਕਵਿਤਾ ਦਾ ਉਦੇਸ਼ = ਰਸ ਸੁਆਦ ਤੇ ਕਲਪਨਾ।',
            hi: 'कविता का उद्देश्य = रसानुभूति एवं कल्पना शक्ति।'
        }
    },
    {
        id: 'q-pstet-pun-06',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Grammar Pedagogy (Inductive Method / ਆਗਮਨ ਪ੍ਰਣਾਲੀ)',
            pa: 'ਵਿਆਕਰਨ ਸਿੱਖਿਆ (ਆਗਮਨ ਪ੍ਰਣਾਲੀ)',
            hi: 'व्याकरण शिक्षण (आगमन प्रणाली)'
        },
        question: {
            en: 'To teach the grammatical concept of Adjectives (ਵਿਸ਼ੇਸ਼ਣ) in Punjabi, Teacher Gurmukh first writes multiple sentences on the blackboard describing children\'s uniforms and fruits ("ਲਾਲ ਸੇਬ", "ਮਿੱਠਾ ਅੰਬ", "ਸਿਆਣਾ ਮੁੰਡਾ"). He guides students to notice words showing quality, and together they formulate the definition. Which grammar teaching method did he use?',
            pa: 'ਪੰਜਾਬੀ ਵਿੱਚ \'ਵਿਸ਼ੇਸ਼ਣ\' ਪੜ੍ਹਾਉਣ ਲਈ ਅਧਿਆਪਕ ਗੁਰਮੁਖ ਸਿੰਘ ਪਹਿਲਾਂ ਬੋਰਡ ਤੇ ਕਈ ਉਦਾਹਰਨਾਂ ਲਿਖਦਾ ਹੈ ("ਲਾਲ ਸੇਬ", "ਮਿੱਠਾ ਅੰਬ", "ਸਿਆਣਾ ਮੁੰਡਾ")। ਉਹ ਬੱਚਿਆਂ ਨੂੰ ਇਹਨਾਂ ਗੁਣ ਦੱਸਣ ਵਾਲੇ ਸ਼ਬਦਾਂ ਵੱਲ ਪ੍ਰੇਰਦਾ ਹੈ ਅਤੇ ਵਿਦਿਆਰਥੀ ਆਪ ਵਿਸ਼ੇਸ਼ਣ ਦੀ ਪਰਿਭਾਸ਼ਾ ਬਣਾਉਂਦੇ ਹਨ। ਉਸ ਨੇ ਕਿਹੜੀ ਵਿਧੀ ਵਰਤੀ?',
            hi: 'पंजाबी में \'विशेषण\' पढ़ाने हेतु शिक्षक गुरमुख सिंह पहले श्यामपट्ट पर कई उदाहरण लिखता है ("ਲਾਲ ਸੇਬ", "ਮਿੱਠਾ ਅੰਬ", "ਸਿਆਣਾ ਮੁੰਡਾ")। वह छात्रों को गुण दर्शाने वाले शब्दों को रेखांकित करवाता है और छात्र स्वयं परिभाषा निकालते हैं। उसने कौन सी विधि प्रयुक्त की?'
        },
        options: {
            A: {
                en: 'Deductive Method / ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ (Rule to Examples)',
                pa: 'ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ (ਨਿਯਮ ਤੋਂ ਉਦਾਹਰਨ ਵੱਲ)',
                hi: 'निगमन प्रणाली (नियम से उदाहरण की ओर)'
            },
            B: {
                en: 'Inductive Method / ਆਗਮਨ ਪ੍ਰਣਾਲੀ (Examples to Rule)',
                pa: 'ਆਗਮਨ ਪ੍ਰਣਾਲੀ (ਉਦਾਹਰਨ ਤੋਂ ਨਿਯਮ ਵੱਲ)',
                hi: 'आगमन प्रणाली (उदाहरण से नियम की ओर)'
            },
            C: {
                en: 'Classical Rote Translation Method',
                pa: 'ਰਵਾਇਤੀ ਰੱਟਾ-ਅਨੁਵਾਦ ਪ੍ਰਣਾਲੀ',
                hi: 'पारंपरिक रटंत-अनुवाद विधि'
            },
            D: {
                en: 'Mechanical Substitution Drill',
                pa: 'ਯਾਂਤਰਿਕ ਬਦਲਵੀਂ ਅਭਿਆਸ ਪ੍ਰਣਾਲੀ',
                hi: 'यांत्रिक प्रतिस्थापन अभ्यास'
            }
        },
        correct: 'B',
        explanation: {
            en: 'The Inductive Method (ਆਗਮਨ ਪ੍ਰਣਾਲੀ) moves from Concrete to Abstract, Particular to General, and Examples to Rule. Students actively analyze concrete examples to derive the general grammatical rule.',
            pa: 'ਆਗਮਨ ਪ੍ਰਣਾਲੀ ਉਦਾਹਰਨਾਂ ਤੋਂ ਨਿਯਮ ਵੱਲ (Example to Rule) ਜਾਂਦੀ ਹੈ। ਇਹ ਸਭ ਤੋਂ ਵਿਗਿਆਨਕ ਅਤੇ ਮਨੋਵਿਗਿਆਨਕ ਵਿਧੀ ਹੈ।',
            hi: 'आगमन प्रणाली (Inductive Method) उदाहरण से नियम की ओर ले जाती है। यह सर्वाधिक वैज्ञानिक एवं मनोवैज्ञानिक विधि है।'
        },
        thought: {
            en: 'Examples -> Rule = Inductive (Agaman). Rule -> Examples = Deductive (Nigaman).',
            pa: 'ਉਦਾਹਰਨ ਤੋਂ ਨਿਯਮ = ਆਗਮਨ ਪ੍ਰਣਾਲੀ।',
            hi: 'उदाहरण से नियम = आगमन प्रणाली।'
        }
    },
    {
        id: 'q-pstet-pun-07',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Diagnostic Testing & Remedial Teaching (ਨਿਦਾਨਾਤਮਕ ਅਤੇ ਉਪਚਾਰਾਤਮਕ)',
            pa: 'ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ ਅਤੇ ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ',
            hi: 'निदानात्मक परीक्षण एवं उपचारात्मक शिक्षण'
        },
        question: {
            en: 'In a government school in Mansa, several Class 4 students persistently interchange "ਸ" and "ਸ਼" in their writing (writing "ਸ਼ੇਰ" as "ਸੇਰ", "ਸਕੂਲ" as "ਸ਼ਕੂਲ"). What sequence of educational steps should the teacher adopt to resolve this issue?',
            pa: 'ਮਾਨਸਾ ਦੇ ਇੱਕ ਸਕੂਲ ਵਿੱਚ ਚੌਥੀ ਜਮਾਤ ਦੇ ਵਿਦਿਆਰਥੀ ਲਿਖਣ ਸਮੇਂ "ਸ" ਅਤੇ "ਸ਼" ਵਿੱਚ ਲਗਾਤਾਰ ਗਲਤੀਆਂ ਕਰਦੇ ਹਨ ("ਸ਼ੇਰ" ਨੂੰ "ਸੇਰ", "ਸਕੂਲ" ਨੂੰ "ਸ਼ਕੂਲ")। ਇਸ ਸਮੱਸਿਆ ਨੂੰ ਹੱਲ ਕਰਨ ਲਈ ਅਧਿਆਪਕ ਨੂੰ ਕਿਹੜੇ ਕਦਮ ਕ੍ਰਮਵਾਰ ਚੁੱਕਣੇ ਚਾਹੀਦੇ ਹਨ?',
            hi: 'मानसा के एक विद्यालय में कक्षा 4 के छात्र लिखते समय "ਸ" और "ਸ਼" में निरंतर त्रुटि करते हैं ("ਸ਼ੇਰ" को "ਸੇਰ", "ਸਕੂਲ" को "ਸ਼ਕੂਲ")। इस समस्या के समाधान हेतु शिक्षक को कौन से चरण क्रमशः अपनाने चाहिए?'
        },
        options: {
            A: {
                en: 'Administering a Diagnostic Test to pinpoint the root cause, followed by individualized Remedial Teaching with phonetic contrast pairs',
                pa: 'ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ ਰਾਹੀਂ ਕਮਜ਼ੋਰੀ ਦੀ ਜੜ੍ਹ ਲੱਭਣਾ, ਫਿਰ ਧੁਨੀ-ਜੋੜਿਆਂ ਦੇ ਅਭਿਆਸ ਨਾਲ ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ ਦੇਣਾ',
                hi: 'निदानात्मक परीक्षण द्वारा कारण पहचानना, फिर ध्वनि-युग्मों के अभ्यास द्वारा उपचारात्मक शिक्षण देना'
            },
            B: {
                en: 'Deducting 10 marks in the final examination to deter future spelling errors',
                pa: 'ਸਾਲਾਨਾ ਪ੍ਰੀਖਿਆ ਵਿੱਚੋਂ 10 ਨੰਬਰ ਕੱਟ ਕੇ ਡਰਾਉਣਾ',
                hi: 'वार्षिक परीक्षा में 10 अंक काटकर भयभीत करना'
            },
            C: {
                en: 'Instructing children to memorize the entire dictionary word list alphabetically',
                pa: 'ਬੱਚਿਆਂ ਨੂੰ ਪੂਰਾ ਸ਼ਬਦ-ਕੋਸ਼ ਰਟਣ ਲਈ ਕਹਿਣਾ',
                hi: 'छात्रों को संपूर्ण शब्दकोश रटने का निर्देश देना'
            },
            D: {
                en: 'Assuming this dialectal flaw is permanent and impossible to correct',
                pa: 'ਇਹ ਮੰਨ ਲੈਣਾ ਕਿ ਇਹ ਖੇਤਰੀ ਕਮਜ਼ੋਰੀ ਕਦੇ ਠੀਕ ਨਹੀਂ ਹੋ ਸਕਦੀ',
                hi: 'यह मान लेना कि यह बोलीगत दोष कभी सुधर नहीं सकता'
            }
        },
        correct: 'A',
        explanation: {
            en: 'The diagnostic-remedial cycle requires first conducting a Diagnostic Test (ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ) to isolate the phonetic/orthographic deficit, followed by targeted Remedial Teaching (ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ) using minimal pairs.',
            pa: 'ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ ਰਾਹੀਂ ਇਹ ਵੇਖਿਆ ਜਾਂਦਾ ਹੈ ਕਿ ਕਮੀ ਉਚਾਰਨ ਵਿੱਚ ਹੈ ਜਾਂ ਲਿਖਤ ਵਿੱਚ, ਫਿਰ ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ ਰਾਹੀਂ ਵਿਸ਼ੇਸ਼ ਅਭਿਆਸ ਕਰਵਾਇਆ ਜਾਂਦਾ ਹੈ।',
            hi: 'सर्वप्रथम निदानात्मक परीक्षण द्वारा त्रुटि के स्वरूप की पहचान की जाती है, तत्पश्चात उपचारात्मक शिक्षण द्वारा सुधारात्मक अभ्यास कराया जाता है।'
        },
        thought: {
            en: 'Diagnostic test (find disease) -> Remedial teaching (cure disease).',
            pa: 'ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ (ਬਿਮਾਰੀ ਦੀ ਜਾਂਚ) -> ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ (ਇਲਾਜ)।',
            hi: 'निदानात्मक परीक्षण (कारण खोजना) -> उपचारात्मक शिक्षण (निवारण)।'
        }
    },
    {
        id: 'q-pstet-pun-08',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Teaching Learning Materials (Language Lab / ਭਾਸ਼ਾ ਲੈਬ)',
            pa: 'ਸਿੱਖਣ ਸਹਾਇਕ ਸਮੱਗਰੀ (ਭਾਸ਼ਾ ਪ੍ਰਯੋਗਸ਼ਾਲਾ)',
            hi: 'शिक्षण सहायक सामग्री (भाषा प्रयोगशाला)'
        },
        question: {
            en: 'What unique pedagogical advantage does a Language Laboratory (ਭਾਸ਼ਾ ਪ੍ਰਯੋਗਸ਼ਾਲਾ) offer over a conventional chalk-and-talk classroom for teaching Punjabi phonetics and tones?',
            pa: 'ਪੰਜਾਬੀ ਧੁਨੀ ਵਿਉਂਤ ਅਤੇ ਸੁਰਾਂ (Tones) ਸਿਖਾਉਣ ਲਈ ਆਮ ਬਲੈਕਬੋਰਡ ਜਮਾਤ ਦੇ ਮੁਕਾਬਲੇ ਭਾਸ਼ਾ ਪ੍ਰਯੋਗਸ਼ਾਲਾ (Language Lab) ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਵਿਲੱਖਣ ਲਾਭ ਕੀ ਹੈ?',
            hi: 'पंजाबी ध्वनियों एवं सुरों (Tones) के शिक्षण हेतु सामान्य श्यामपट्ट कक्षा की तुलना में भाषा प्रयोगशाला (Language Lab) का सर्वाधिक विशिष्ट लाभ क्या है?'
        },
        options: {
            A: {
                en: 'It completely eliminates the need for any human teacher in school',
                pa: 'ਇਸ ਨਾਲ ਸਕੂਲ ਵਿੱਚ ਕਿਸੇ ਵੀ ਅਧਿਆਪਕ ਦੀ ਲੋੜ ਨਹੀਂ ਰਹਿੰਦੀ',
                hi: 'इससे विद्यालय में किसी शिक्षक की आवश्यकता ही समाप्त हो जाती है'
            },
            B: {
                en: 'It provides individual headsets for hearing standard pronunciation models and recording/comparing speech without peer embarrassment',
                pa: 'ਵਿਦਿਆਰਥੀ ਹੈੱਡਫ਼ੋਨਾਂ ਰਾਹੀਂ ਮਿਆਰੀ ਟਕਸਾਲੀ ਉਚਾਰਨ ਸੁਣ ਸਕਦੇ ਹਨ ਅਤੇ ਬਿਨਾਂ ਝਿਜਕ ਆਪਣੀ ਆਵਾਜ਼ ਰਿਕਾਰਡ ਕਰਕੇ ਤੁਲਨਾ ਕਰ ਸਕਦੇ ਹਨ',
                hi: 'विद्यार्थी हेडफ़ोन द्वारा मानक उच्चारण सुन सकते हैं तथा बिना संकोच अपनी ध्वनि रिकॉर्ड कर तुलना कर सकते हैं'
            },
            C: {
                en: 'It guarantees that all students score 100% in written grammar tests',
                pa: 'ਇਹ ਲਿਖਤੀ ਵਿਆਕਰਨ ਵਿੱਚ 100% ਨੰਬਰ ਆਉਣ ਦੀ ਗਰੰਟੀ ਦਿੰਦੀ ਹੈ',
                hi: 'यह लिखित व्याकरण में 100% अंक लाने की गारंटी देती है'
            },
            D: {
                en: 'It enforces complete silence and stops students from speaking',
                pa: 'ਇਹ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਬੋਲਣ ਤੋਂ ਰੋਕ ਕੇ ਚੁੱਪ ਕਰਵਾਉਂਦੀ ਹੈ',
                hi: 'यह छात्रों को बोलने से रोकती है'
            }
        },
        correct: 'B',
        explanation: {
            en: 'A language lab provides individual acoustic headsets where students listen to native acoustic models of Punjabi tones (High, Low, Level) and record their own voices to self-correct pronunciation privately.',
            pa: 'ਭਾਸ਼ਾ ਲੈਬ ਵਿੱਚ ਬੱਚਾ ਇਕਾਂਤ ਵਿੱਚ ਹੈੱਡਫ਼ੋਨ ਲਗਾ ਕੇ ਮਿਆਰੀ ਸੁਰਾਂ ਸੁਣਦਾ ਹੈ, ਆਪਣੀ ਆਵਾਜ਼ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ ਅਤੇ ਬਿਨਾਂ ਕਿਸੇ ਸ਼ਰਮ ਦੇ ਉਚਾਰਨ ਸੁਧਾਰਦਾ ਹੈ।',
            hi: 'भाषा प्रयोगशाला में प्रत्येक छात्र हेडफ़ोन द्वारा मानक उच्चारण सुनता है तथा अपनी ध्वनि रिकॉर्ड कर बिना संकोच आत्म-सुधार कर सकता है।'
        },
        thought: {
            en: 'Language lab = Acoustic modeling + recording + self-evaluation in phonetic training.',
            pa: 'ਭਾਸ਼ਾ ਲੈਬ = ਮਿਆਰੀ ਉਚਾਰਨ ਸੁਣਨਾ + ਆਵਾਜ਼ ਰਿਕਾਰਡ ਕਰਕੇ ਸੁਧਾਰਨਾ।',
            hi: 'भाषा प्रयोगशाला = मानक उच्चारण श्रवण + ध्वनि रिकॉर्डिंग एवं आत्म-मूल्यांकन।'
        }
    },
    {
        id: 'q-pstet-pun-09',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Dialects in Classroom (ਉਪਭਾਸ਼ਾ ਬਨਾਮ ਟਕਸਾਲੀ ਪੰਜਾਬੀ)',
            pa: 'ਜਮਾਤ ਵਿੱਚ ਉਪਭਾਸ਼ਾਵਾਂ ਦਾ ਸਥਾਨ',
            hi: 'कक्षा में बोलियों का स्थान'
        },
        question: {
            en: 'In a government school in Rupnagar (Puadh region), a Class 3 child says in Puadhi dialect: "ਮ੍ਹਾਰੇ ਘਰੇ ਗੈਲ ਚੱਲੋ" instead of standard Taksali Punjabi "ਮੇਰੇ ਘਰ ਨਾਲ ਚੱਲੋ". According to modern linguistic pedagogy and NCF 2005, how should the teacher respond?',
            pa: 'ਰੂਪਨਗਰ (ਪੁਆਧ ਖੇਤਰ) ਦੇ ਇੱਕ ਸਕੂਲ ਵਿੱਚ ਤੀਜੀ ਜਮਾਤ ਦਾ ਬੱਚਾ ਆਪਣੀ ਪੁਆਧੀ ਉਪਭਾਸ਼ਾ ਵਿੱਚ ਕਹਿੰਦਾ ਹੈ: "ਮ੍ਹਾਰੇ ਘਰੇ ਗੈਲ ਚੱਲੋ" (ਟਕਸਾਲੀ: ਮੇਰੇ ਘਰ ਨਾਲ ਚੱਲੋ)। ਆਧੁਨਿਕ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ ਅਤੇ NCF 2005 ਅਨੁਸਾਰ ਅਧਿਆਪਕ ਦਾ ਕੀ ਰਵੱਈਆ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?',
            hi: 'रूपनगर (पुआध क्षेत्र) के एक विद्यालय में कक्षा 3 का बालक अपनी पुआधी बोली में कहता है: "ਮ੍ਹਾਰੇ ਘਰੇ ਗੈਲ ਚੱਲੋ" (मानक: ਮੇਰੇ ਘਰ ਨਾਲ ਚੱਲੋ)। आधुनिक भाषा शिक्षण शास्त्र एवं NCF 2005 के अनुसार शिक्षक को क्या करना चाहिए?'
        },
        options: {
            A: {
                en: 'Scold the child publicly and impose a fine for using non-standard dialect',
                pa: 'ਬੱਚੇ ਨੂੰ ਜਮਾਤ ਵਿੱਚ ਝਿੜਕਣਾ ਅਤੇ ਉਪਭਾਸ਼ਾ ਬੋਲਣ ਤੇ ਜੁਰਮਾਨਾ ਲਗਾਉਣਾ',
                hi: 'बालक को डांटना तथा बोली बोलने पर अर्थदंड लगाना'
            },
            B: {
                en: 'Respect the child’s native expression, acknowledge the meaning, and gently model the standard Taksali form in context without humiliating the child',
                pa: 'ਬੱਚੇ ਦੇ ਵਿਚਾਰ ਨੂੰ ਸਵੀਕਾਰ ਕਰਨਾ, ਉਪਭਾਸ਼ਾ ਦਾ ਸਤਿਕਾਰ ਕਰਨਾ ਅਤੇ ਸੰਦਰਭ ਵਿੱਚ ਹੌਲੀ-ਹੌਲੀ ਟਕਸਾਲੀ ਰੂਪ ਨਾਲ ਜਾਣੂ ਕਰਵਾਉਣਾ',
                hi: 'बालक के भाव को स्वीकार करना, उसकी बोली का सम्मान करना तथा संदर्भ में सहजता से मानक रूप से परिचित कराना'
            },
            C: {
                en: 'Ask other students to laugh at the regional word to discourage its use',
                pa: 'ਬਾਕੀ ਬੱਚਿਆਂ ਨੂੰ ਉਸ ਤੇ ਹੱਸਣ ਲਈ ਕਹਿਣਾ ਤਾਂ ਜੋ ਉਹ ਦੁਬਾਰਾ ਨਾ ਬੋਲੇ',
                hi: 'अन्य छात्रों से उसका उपहास करवाना ताकि वह पुनः न बोले'
            },
            D: {
                en: 'Immediately refer the student to a speech pathology clinic',
                pa: 'ਉਸ ਨੂੰ ਬੋਲਣ ਦੀ ਬਿਮਾਰੀ ਦਾ ਮਰੀਜ਼ ਸਮਝ ਕੇ ਕਲੀਨਿਕ ਭੇਜਣਾ',
                hi: 'उसे वाक् विकार का रोगी मानकर क्लिनिक भेजना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'NCF 2005 and linguistic science establish that regional dialects are rich linguistic resources. Teachers must validate children\'s home dialects and naturally bridge them towards standard Taksali Punjabi without humiliation or stigmatization.',
            pa: 'ਉਪਭਾਸ਼ਾਵਾਂ ਸਿੱਖਣ ਵਿੱਚ ਰੁਕਾਵਟ ਨਹੀਂ ਸਗੋਂ ਸਰੋਤ (Resource) ਹਨ। ਅਧਿਆਪਕ ਨੂੰ ਬੱਚੇ ਦਾ ਮਨੋਬਲ ਡੇਗਣ ਦੀ ਥਾਂ ਪਿਆਰ ਨਾਲ ਟਕਸਾਲੀ ਸ਼ਬਦ ਸਿਖਾਉਣੇ ਚਾਹੀਦੇ ਹਨ।',
            hi: 'क्षेत्रीय बोलियाँ सीखने में बाधा नहीं अपितु संसाधन हैं। शिक्षक को बालक की अभिव्यक्ति का सम्मान करते हुए सहज रूप से मानक भाषा की ओर प्रेरित करना चाहिए।'
        },
        thought: {
            en: 'Dialect in classroom = Rich resource, never a penalized error.',
            pa: 'ਉਪਭਾਸ਼ਾ = ਕੀਮਤੀ ਸਾਧਨ, ਸਜ਼ਾ ਯੋਗ ਗਲਤੀ ਨਹੀਂ।',
            hi: 'बोली = समृद्ध संसाधन, दंडनीय त्रुटि नहीं।'
        }
    },
    {
        id: 'q-pstet-pun-10',
        topicId: 'pstet-punjabi-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Punjabi Language Pedagogy',
            pa: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पंजाबी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Prose Teaching Steps (ਵਾਰਤਕ ਸਿੱਖਿਆ ਦੇ ਪੜਾਅ)',
            pa: 'ਵਾਰਤਕ ਸਿੱਖਿਆ ਦੇ ਪੜਾਅ (ਆਦਰਸ਼ ਵਾਚਨ)',
            hi: 'गद्य शिक्षण के चरण (आदर्श वाचन)'
        },
        question: {
            en: 'In the pedagogical methodology of teaching Punjabi prose (ਵਾਰਤਕ ਸਿੱਖਿਆ), which stage directly follows the Teacher’s Model Reading (ਅਧਿਆਪਕ ਦਾ ਆਦਰਸ਼ ਵਾਚਨ)?',
            pa: 'ਪੰਜਾਬੀ ਵਾਰਤਕ ਸਿੱਖਿਆ ਵਿੱਚ ਅਧਿਆਪਕ ਦੇ "ਆਦਰਸ਼ ਵਾਚਨ" (Model Reading) ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ ਕਿਹੜਾ ਪੜਾਅ ਆਉਂਦਾ ਹੈ?',
            hi: 'पंजाबी गद्य शिक्षण में शिक्षक के "आदर्श वाचन" (Model Reading) के तुरंत बाद कौन सा चरण आता है?'
        },
        options: {
            A: {
                en: 'Summative Terminal Examination',
                pa: 'ਸਾਲਾਨਾ ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ',
                hi: 'वार्षिक लिखित परीक्षा'
            },
            B: {
                en: 'Imitation Reading by Students (ਵਿਦਿਆਰਥੀਆਂ ਵੱਲੋਂ ਅਨੁਕਰਨ ਵਾਚਨ)',
                pa: 'ਵਿਦਿਆਰਥੀਆਂ ਵੱਲੋਂ ਅਨੁਕਰਨ ਵਾਚਨ (Imitation Reading)',
                hi: 'छात्रों द्वारा अनुकरण वाचन (Imitation Reading)'
            },
            C: {
                en: 'Word translation into foreign languages',
                pa: 'ਵਿਦੇਸ਼ੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਅਨੁਵਾਦ',
                hi: 'विदेशी भाषाओं में अनुवाद'
            },
            D: {
                en: 'Homework assignment writing',
                pa: 'ਘਰ ਦਾ ਕੰਮ ਲਿਖਣਾ',
                hi: 'गृहकार्य लेखन'
            }
        },
        correct: 'B',
        explanation: {
            en: 'In prose pedagogy, after the teacher demonstrates Model Reading (ਆਦਰਸ਼ ਵਾਚਨ) with correct pronunciation and pause, students perform Imitation Reading (ਅਨੁਕਰਨ ਵਾਚਨ) to practice fluency before proceeding to word exposition (ਸ਼ਬਦਾਰਥ) and comprehension questions.',
            pa: 'ਵਾਰਤਕ ਸਿੱਖਿਆ ਵਿੱਚ ਅਧਿਆਪਕ ਦੇ ਆਦਰਸ਼ ਵਾਚਨ ਤੋਂ ਬਾਅਦ ਵਿਦਿਆਰਥੀ ਅਨੁਕਰਨ ਵਾਚਨ ਕਰਦੇ ਹਨ ਤਾਂ ਜੋ ਸ਼ੁੱਧ ਉਚਾਰਨ ਅਤੇ ਵਾਕ-ਲਹਿਜ਼ਾ ਸਿੱਖ ਸਕਣ।',
            hi: 'गद्य शिक्षण में शिक्षक के आदर्श वाचन के उपरांत छात्र अनुकरण वाचन करते हैं ताकि शुद्ध उच्चारण व विराम चिह्नों का अभ्यास हो सके।'
        },
        thought: {
            en: 'Prose sequence: Model Reading (Teacher) -> Imitation Reading (Students) -> Word exposition -> Comprehension.',
            pa: 'ਵਾਰਤਕ ਕ੍ਰਮ: ਆਦਰਸ਼ ਵਾਚਨ (ਅਧਿਆਪਕ) -> ਅਨੁਕਰਨ ਵਾਚਨ (ਵਿਦਿਆਰਥੀ) -> ਸ਼ਬਦਾਰਥ -> ਬੋਧ ਪ੍ਰਸ਼ਨ।',
            hi: 'गद्य क्रम: आदर्श वाचन -> अनुकरण वाचन -> शब्दार्थ स्पष्टीकरण -> बोध प्रश्न।'
        }
    },

    // =========================================================================
    // 3. ENGLISH LANGUAGE PEDAGOGY (pstet-english-pedagogy) — 10 MCQs
    // =========================================================================
    {
        id: 'q-pstet-eng-01',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Bilingual Method (Dr. C.J. Dodson)',
            pa: 'ਦੋ-ਭਾਸ਼ੀ ਵਿਧੀ (ਡਾ. ਸੀ.ਜੇ. ਡੌਡਸਨ)',
            hi: 'द्विभाषी विधि (डॉ. सी.जे. डॉडसन)'
        },
        question: {
            en: 'In an upper-primary school in Moga, an English teacher introduces the sentence "The soil is remarkably fertile." She briefly states the equivalent meaning in Punjabi as "ਮਿੱਟੀ ਬਹੁਤ ਉਪਜਾਊ ਹੈ" herself, but does not allow the students to speak Punjabi, insisting that all student responses and drills must be entirely in English. Which language teaching method is being implemented?',
            pa: 'ਮੋਗਾ ਦੇ ਇੱਕ ਸਕੂਲ ਵਿੱਚ ਅਧਿਆਪਕਾ ਅੰਗਰੇਜ਼ੀ ਵਾਕ "The soil is remarkably fertile" ਪੜ੍ਹਾਉਂਦੇ ਸਮੇਂ ਆਪ ਪੰਜਾਬੀ ਵਿੱਚ ਅਰਥ ਦੱਸਦੀ ਹੈ "ਮਿੱਟੀ ਬਹੁਤ ਉਪਜਾਊ ਹੈ", ਪਰ ਬੱਚਿਆਂ ਨੂੰ ਪੰਜਾਬੀ ਬੋਲਣ ਦੀ ਆਗਿਆ ਨਹੀਂ ਦਿੰਦੀ ਅਤੇ ਉਹਨਾਂ ਤੋਂ ਸਿਰਫ਼ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹੀ ਅਭਿਆਸ ਕਰਵਾਉਂਦੀ ਹੈ। ਇਹ ਕਿਹੜੀ ਅਧਿਆਪਨ ਵਿਧੀ ਹੈ?',
            hi: 'मोगा के एक विद्यालय में शिक्षिका अंग्रेज़ी वाक्य "The soil is remarkably fertile" पढ़ाते समय स्वयं पंजाबी में अर्थ बताती है "ਮਿੱਟੀ ਬਹੁਤ ਉਪਜਾਊ ਹੈ", किंतु छात्रों को पंजाबी बोलने की अनुमति नहीं देती और केवल अंग्रेज़ी में अभ्यास कराती है। यह कौन सी शिक्षण विधि है?'
        },
        options: {
            A: {
                en: 'Grammar-Translation Method (GTM)',
                pa: 'ਵਿਆਕਰਨ-ਅਨੁਵਾਦ ਪ੍ਰਣਾਲੀ (GTM)',
                hi: 'व्याकरण-अनुवाद विधि (GTM)'
            },
            B: {
                en: 'Direct Method (Natural Method)',
                pa: 'ਸਿੱਧੀ ਵਿਧੀ (Direct Method)',
                hi: 'प्रत्यक्ष विधि (Direct Method)'
            },
            C: {
                en: 'Dr. C.J. Dodson’s Bilingual Method',
                pa: 'ਡਾ. ਸੀ.ਜੇ. ਡੌਡਸਨ ਦੀ ਦੋ-ਭਾਸ਼ੀ ਵਿਧੀ (Bilingual Method)',
                hi: 'डॉ. सी.जे. डॉडसन की द्विभाषी विधि (Bilingual Method)'
            },
            D: {
                en: 'Suggestopedia Method',
                pa: 'ਸਜੈਸਟੋਪੀਡੀਆ ਵਿਧੀ',
                hi: 'सजेस्टोपीडिया विधि'
            }
        },
        correct: 'C',
        explanation: {
            en: 'Dr. C.J. Dodson’s Bilingual Method permits ONLY the teacher to use the mother tongue (L1) to swiftly explain meanings at the sentence level, while students are strictly required to practice and communicate only in the target language (L2/English).',
            pa: 'ਡਾ. ਸੀ.ਜੇ. ਡੌਡਸਨ ਦੀ ਦੋ-ਭਾਸ਼ੀ ਵਿਧੀ ਵਿੱਚ ਸਿਰਫ਼ ਅਧਿਆਪਕ ਮਾਤ-ਭਾਸ਼ਾ ਵਿੱਚ ਅਰਥ ਦੱਸ ਸਕਦਾ ਹੈ, ਜਦਕਿ ਵਿਦਿਆਰਥੀ ਕੇਵਲ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹੀ ਬੋਲਦੇ ਅਤੇ ਅਭਿਆਸ ਕਰਦੇ ਹਨ।',
            hi: 'डॉ. सी.जे. डॉडसन की द्विभाषी विधि में केवल शिक्षक मातृभाषा में भावार्थ स्पष्ट करता है, जबकि छात्र पूर्णतः अंग्रेज़ी में ही अभ्यास करते हैं।'
        },
        thought: {
            en: 'Teacher uses L1 + Students use L2 only = Dodson’s Bilingual Method.',
            pa: 'ਸਿਰਫ਼ ਅਧਿਆਪਕ ਮਾਤ-ਭਾਸ਼ਾ ਵਰਤੇ + ਵਿਦਿਆਰਥੀ ਸਿਰਫ਼ ਅੰਗਰੇਜ਼ੀ ਬੋਲਣ = ਦੋ-ਭਾਸ਼ੀ ਵਿਧੀ।',
            hi: 'केवल शिक्षक मातृभाषा प्रयुक्त करे + छात्र केवल अंग्रेज़ी बोलें = द्विभाषी विधि।'
        }
    },
    {
        id: 'q-pstet-eng-02',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Grammar-Translation Method Inadequacy',
            pa: 'GTM ਵਿਧੀ ਦੀ ਕਮੀ',
            hi: 'GTM विधि की कमी'
        },
        question: {
            en: 'An English teacher relies exclusively on translating textbook paragraphs line-by-line into Punjabi and teaching tense tables deductively. While students score good marks on written fill-in-the-blank tests, they cannot hold a simple English conversation. What is the fundamental defect of this method?',
            pa: 'ਇੱਕ ਅੰਗਰੇਜ਼ੀ ਅਧਿਆਪਕ ਸਿਰਫ਼ ਪਾਠ ਦਾ ਪੰਜਾਬੀ ਵਿੱਚ ਸ਼ਬਦ-ਦਰ-ਸ਼ਬਦ ਅਨੁਵਾਦ ਕਰਵਾਉਂਦਾ ਹੈ ਅਤੇ ਟੈਂਸਾਂ ਦੇ ਨਿਯਮ ਰਟਾਉਂਦਾ ਹੈ। ਬੱਚੇ ਲਿਖਤੀ ਪੇਪਰ ਵਿੱਚ ਨੰਬਰ ਤਾਂ ਲੈ ਲੈਂਦੇ ਹਨ ਪਰ ਆਮ ਗੱਲਬਾਤ ਨਹੀਂ ਕਰ ਪਾਉਂਦੇ। ਇਸ ਵਿਧੀ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਕਮੀ ਕੀ ਹੈ?',
            hi: 'एक अंग्रेज़ी शिक्षक केवल पाठ का पंजाबी में शब्दशः अनुवाद कराता है और टेंस के नियम रटाता है। छात्र लिखित परीक्षा में अंक तो ले आते हैं किंतु अंग्रेज़ी में बात नहीं कर पाते। इस विधि का मुख्य दोष क्या है?'
        },
        options: {
            A: {
                en: 'It completely neglects listening and speaking skills, preventing oral communicative fluency',
                pa: 'ਇਹ ਸੁਣਨ ਅਤੇ ਬੋਲਣ ਦੇ ਕੌਸ਼ਲ ਨੂੰ ਅਣਗੌਲਿਆ ਕਰਦੀ ਹੈ ਜਿਸ ਨਾਲ ਮੌਖਿਕ ਰਵਾਨਗੀ ਨਹੀਂ ਆਉਂਦੀ',
                hi: 'यह श्रवण एवं वाचन कौशलों की उपेक्षा करती है जिससे संप्रेषण प्रवाह नहीं आ पाता'
            },
            B: {
                en: 'It places excessive emphasis on English pronunciation phonetics',
                pa: 'ਇਹ ਅੰਗਰੇਜ਼ੀ ਉਚਾਰਨ ਤੇ ਬਹੁਤ ਜ਼ਿਆਦਾ ਜ਼ੋਰ ਦਿੰਦੀ ਹੈ',
                hi: 'यह उच्चारण पर अत्यधिक बल देती है'
            },
            C: {
                en: 'It prohibits the use of chalkboards and notebooks',
                pa: 'ਇਹ ਕਾਪੀਆਂ ਅਤੇ ਬਲੈਕਬੋਰਡ ਦੀ ਵਰਤੋਂ ਰੋਕਦੀ ਹੈ',
                hi: 'यह श्यामपट्ट के प्रयोग को रोकती है'
            },
            D: {
                en: 'It forces students to participate in excessive drama and debates',
                pa: 'ਇਹ ਵਿਦਿਆਰਥੀਆਂ ਤੋਂ ਬਹੁਤ ਜ਼ਿਆਦਾ ਨਾਟਕ ਕਰਵਾਉਂਦੀ ਹੈ',
                hi: 'यह छात्रों से अत्यधिक वाद-विवाद करवाती है'
            }
        },
        correct: 'A',
        explanation: {
            en: 'The Grammar-Translation Method (GTM) prioritizes written reading and grammatical parsing while almost totally ignoring listening comprehension and spontaneous oral speech.',
            pa: 'GTM ਵਿਧੀ ਸੁਣਨ ਅਤੇ ਬੋਲਣ ਨੂੰ ਬਿਲਕੁਲ ਨਜ਼ਰਅੰਦਾਜ਼ ਕਰਦੀ ਹੈ, ਜਿਸ ਕਾਰਨ ਵਿਦਿਆਰਥੀ ਅੰਗਰੇਜ਼ੀ ਬੋਲਣ ਵਿੱਚ ਝਿਜਕਦੇ ਹਨ।',
            hi: 'व्याकरण-अनुवाद विधि (GTM) श्रवण एवं वाचन कौशलों की उपेक्षा करती है, जिससे मौखिक संप्रेषण क्षमता विकसित नहीं हो पाती।'
        },
        thought: {
            en: 'GTM flaw = Oral-aural neglect. Produces mute learners who can translate on paper but cannot converse.',
            pa: 'GTM ਦੀ ਕਮਜ਼ੋਰੀ = ਸੁਣਨ ਅਤੇ ਬੋਲਣ ਦੀ ਅਣਦੇਖੀ।',
            hi: 'GTM का मुख्य दोष = मौखिक संप्रेषण की उपेक्षा।'
        }
    },
    {
        id: 'q-pstet-eng-03',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Communicative Language Teaching (CLT & Information Gap)',
            pa: 'ਸੰਚਾਰਾਤਮਕ ਭਾਸ਼ਾ ਅਧਿਆਪਨ (CLT ਅਤੇ ਇਨਫਰਮੇਸ਼ਨ ਗੈਪ)',
            hi: 'संप्रेषणात्मक भाषा शिक्षण (CLT एवं सूचना अंतराल)'
        },
        question: {
            en: 'In a Class 7 English period, the teacher divides the class into pairs. Student A has a bus timetable with departure times missing, while Student B has the arrival times missing. They must ask and answer questions in English to complete each other\'s charts. This classroom task is rooted in which pedagogical approach?',
            pa: 'ਸੱਤਵੀਂ ਜਮਾਤ ਵਿੱਚ ਅਧਿਆਪਕ ਵਿਦਿਆਰਥੀਆਂ ਦੇ ਜੋੜੇ ਬਣਾਉਂਦਾ ਹੈ। ਵਿਦਿਆਰਥੀ A ਕੋਲ ਇੱਕ ਬੱਸ ਟਾਈਮ-ਟੇਬਲ ਹੈ ਜਿਸ ਵਿੱਚ ਚੱਲਣ ਦਾ ਸਮਾਂ ਗਾਇਬ ਹੈ, ਅਤੇ ਵਿਦਿਆਰਥੀ B ਕੋਲ ਪਹੁੰਚਣ ਦਾ ਸਮਾਂ ਗਾਇਬ ਹੈ। ਉਹ ਇੱਕ-ਦੂਜੇ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਸਵਾਲ ਪੁੱਛ ਕੇ ਆਪਣਾ ਚਾਰਟ ਪੂਰਾ ਕਰਦੇ ਹਨ। ਇਹ ਕਿਰਿਆ ਕਿਸ ਪਹੁੰਚ ਤੇ ਆਧਾਰਿਤ ਹੈ?',
            hi: 'कक्षा 7 में शिक्षिका छात्रों के जोड़े बनाती है। छात्र A के पास बस समय-सारणी है जिसमें प्रस्थान समय गायब है, तथा छात्र B के पास आगमन समय गायब है। वे अंग्रेज़ी में प्रश्न पूछकर एक-दूसरे की सारणी पूर्ण करते हैं। यह गतिविधि किस उपागम पर आधारित है?'
        },
        options: {
            A: {
                en: 'Audiolingual Pattern Drill Method',
                pa: 'ਆਡੀਓਲਿੰਗੁਅਲ ਪੈਟਰਨ ਡ੍ਰਿਲ ਵਿਧੀ',
                hi: 'श्रव्य-भाषीय पैटर्न अभ्यास विधि'
            },
            B: {
                en: 'Communicative Language Teaching (CLT) with an Information-Gap activity',
                pa: 'ਇਨਫਰਮੇਸ਼ਨ-ਗੈਪ ਗਤੀਵਿਧੀ ਵਾਲੀ ਸੰਚਾਰਾਤਮਕ ਭਾਸ਼ਾ ਸਿੱਖਿਆ (CLT)',
                hi: 'सूचना-अंतराल (Information-Gap) गतिविधि आधारित संप्रेषणात्मक शिक्षण (CLT)'
            },
            C: {
                en: 'Structural Substitution Table Method',
                pa: 'ਸੰਰਚਨਾਤਮਕ ਬਦਲਵੀਂ ਸਾਰਣੀ ਵਿਧੀ',
                hi: 'संरचनात्मक प्रतिस्थापन तालिका विधि'
            },
            D: {
                en: 'Classical Prussian Grammar Method',
                pa: 'ਰਵਾਇਤੀ ਪਰੂਸ਼ੀਅਨ ਵਿਆਕਰਨ ਵਿਧੀ',
                hi: 'पारंपरिक प्रशियाई व्याकरण विधि'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Communicative Language Teaching (CLT) emphasizes communicative competence (Dell Hymes) using authentic real-world tasks. An Information-Gap activity requires genuine communication where learners bridge gaps in data using English.',
            pa: 'CLT (Communicative Language Teaching) ਵਿੱਚ ਵਿਆਕਰਨ ਰਟਣ ਦੀ ਬਜਾਏ ਅਸਲ ਸੰਚਾਰ (Information-Gap) ਰਾਹੀਂ ਅੰਗਰੇਜ਼ੀ ਬੋਲਣ ਦੀ ਰਵਾਨਗੀ ਸਿਖਾਈ ਜਾਂਦੀ ਹੈ।',
            hi: 'संप्रेषणात्मक भाषा शिक्षण (CLT) में वास्तविक जीवन की सूचना-अंतराल (Information-Gap) गतिविधियों द्वारा स्वाभाविक भाषा संप्रेषण कराया जाता है।'
        },
        thought: {
            en: 'Pair work + real-life timetable + missing info = CLT Information-gap task.',
            pa: 'ਜੋੜਿਆਂ ਵਿੱਚ ਕੰਮ + ਟਾਈਮ-ਟੇਬਲ + ਜਾਣਕਾਰੀ ਦਾ ਆਦਾਨ-ਪ੍ਰਦਾਨ = CLT ਇਨਫਰਮੇਸ਼ਨ ਗੈਪ।',
            hi: 'युग्म कार्य + समय-सारणी + सूचना आदान-प्रदान = CLT सूचना अंतराल।'
        }
    },
    {
        id: 'q-pstet-eng-04',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Reading Sub-skills (Skimming vs Scanning)',
            pa: 'ਪੜ੍ਹਨ ਦੇ ਉਪ-ਕੌਸ਼ਲ (ਸਕਿਮਿੰਗ ਬਨਾਮ ਸਕੈਨਿੰਗ)',
            hi: 'पठन उप-कौशल (स्किमिंग बनाम स्कैनिंग)'
        },
        question: {
            en: 'An English teacher hands out a magazine article on environmental pollution. She instructs: "Spend just 45 seconds reading quickly to identify the central theme of the author, without worrying about individual unfamiliar words." Which specific reading sub-skill is the teacher training?',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਅਧਿਆਪਕਾ ਪ੍ਰਦੂਸ਼ਣ ਬਾਰੇ ਇੱਕ ਲੇਖ ਦੇ ਕੇ ਕਹਿੰਦੀ ਹੈ: "ਔਖੇ ਸ਼ਬਦਾਂ ਤੇ ਅਟਕੇ ਬਿਨਾਂ ਸਿਰਫ਼ 45 ਸੈਕਿੰਡ ਵਿੱਚ ਤੇਜ਼ੀ ਨਾਲ ਪੜ੍ਹ ਕੇ ਦੱਸੋ ਕਿ ਲੇਖਕ ਦਾ ਮੁੱਖ ਸੰਦੇਸ਼ (Central theme) ਕੀ ਹੈ।" ਅਧਿਆਪਕਾ ਪੜ੍ਹਨ ਦੇ ਕਿਹੜੇ ਉਪ-ਕੌਸ਼ਲ ਦਾ ਅਭਿਆਸ ਕਰਵਾ ਰਹੀ ਹੈ?',
            hi: 'शिक्षिका प्रदूषण पर एक लेख देकर कहती है: "कठिन शब्दों पर अटके बिना केवल 45 सेकंड में तेजी से पढ़कर बताएं कि लेखक का मुख्य विचार (Central theme) क्या है।" शिक्षिका किस पठन उप-कौशल का अभ्यास करा रही है?'
        },
        options: {
            A: {
                en: 'Scanning (locating a specific phone number or isolated fact)',
                pa: 'ਸਕੈਨਿੰਗ (Scanning - ਕੋਈ ਖ਼ਾਸ ਅੰਕੜਾ ਜਾਂ ਨਾਂ ਲੱਭਣਾ)',
                hi: 'स्कैनिंग (विशिष्ट तथ्य खोजना)'
            },
            B: {
                en: 'Skimming (rapid reading to grasp the overall gist or central idea)',
                pa: 'ਸਕਿਮਿੰਗ (Skimming - ਮੁੱਖ ਭਾਵ ਜਾਂ ਸਾਰ ਜਾਣਨ ਲਈ ਤੇਜ਼ੀ ਨਾਲ ਪੜ੍ਹਨਾ)',
                hi: 'स्किमिंग (मुख्य सार या केंद्रीय भाव जानने हेतु तीव्र पठन)'
            },
            C: {
                en: 'Proofreading for punctuation errors',
                pa: 'ਵਿਰਾਮ ਚਿੰਨ੍ਹਾਂ ਦੀ ਪਰਖ ਕਰਨਾ',
                hi: 'विराम चिह्नों की त्रुटियाँ खोजना'
            },
            D: {
                en: 'Sub-vocalization and phonetic transcription',
                pa: 'ਮਨ ਵਿੱਚ ਉਚਾਰਨ ਕਰਨਾ',
                hi: 'मन में बुदबुदाना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Skimming is glancing rapidly through a text to extract the central theme, gist, or general overview. Scanning, by contrast, is searching for a specific, isolated piece of data (such as a date, train number, or name).',
            pa: 'ਸਕਿਮਿੰਗ (Skimming) ਪੂਰੇ ਪਾਠ ਦਾ ਕੇਂਦਰੀ ਭਾਵ (Gist) ਸਮਝਣ ਲਈ ਤੇਜ਼ੀ ਨਾਲ ਪੜ੍ਹਨਾ ਹੈ। ਸਕੈਨਿੰਗ (Scanning) ਕਿਸੇ ਖ਼ਾਸ ਜਾਣਕਾਰੀ ਨੂੰ ਲੱਭਣਾ ਹੁੰਦਾ ਹੈ।',
            hi: 'स्किमिंग (Skimming) पाठ का मुख्य सार (Gist) जानने हेतु तीव्र गति से पढ़ना है। स्कैनिंग किसी विशिष्ट तथ्य को खोजने हेतु होती है।'
        },
        thought: {
            en: 'Overall theme/gist = Skimming. Specific isolated fact/date = Scanning.',
            pa: 'ਮੁੱਖ ਭਾਵ/ਸਾਰ = ਸਕਿਮਿੰਗ। ਖ਼ਾਸ ਤਾਰੀਖ਼/ਜਾਣਕਾਰੀ = ਸਕੈਨਿੰਗ।',
            hi: 'केंद्रीय भाव/सार = स्किमिंग। विशिष्ट तथ्य = स्कैनिंग।'
        }
    },
    {
        id: 'q-pstet-eng-05',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Stephen Krashen (Input Hypothesis: i + 1)',
            pa: 'ਸਟੀਫਨ ਕ੍ਰੈਸ਼ਨ (ਸਮਝਣਯੋਗ ਇਨਪੁਟ i + 1)',
            hi: 'स्टीफन क्रैशन (बोधगम्य निवेश i + 1)'
        },
        question: {
            en: 'According to Stephen Krashen’s Second Language Acquisition theory, under what pedagogical condition does true language acquisition take place in the classroom?',
            pa: 'ਸਟੀਫਨ ਕ੍ਰੈਸ਼ਨ ਦੇ ਦੂਜੀ ਭਾਸ਼ਾ ਗ੍ਰਹਿਣ ਸਿਧਾਂਤ ਅਨੁਸਾਰ ਜਮਾਤ ਵਿੱਚ ਭਾਸ਼ਾ ਦਾ ਅਸਲ ਗ੍ਰਹਿਣ (Acquisition) ਕਿਸ ਹਾਲਤ ਵਿੱਚ ਹੁੰਦਾ ਹੈ?',
            hi: 'स्टीफन क्रैशन के द्वितीय भाषा अर्जन सिद्धांत के अनुसार कक्षा में वास्तविक भाषा अर्जन (Acquisition) किस परिस्थिति में होता है?'
        },
        options: {
            A: {
                en: 'When the learner is punished for every minor grammatical mistake in public',
                pa: 'ਜਦੋਂ ਹਰ ਵਿਆਕਰਨਿਕ ਗਲਤੀ ਤੇ ਵਿਦਿਆਰਥੀ ਨੂੰ ਸਜ਼ਾ ਦਿੱਤੀ ਜਾਵੇ',
                hi: 'जब प्रत्येक व्याकरणिक त्रुटि पर छात्र को दंड दिया जाए'
            },
            B: {
                en: 'When the learner receives Comprehensible Input that is one step beyond their current competence level (i + 1) in a low-anxiety environment',
                pa: 'ਜਦੋਂ ਤਣਾਅ-ਮੁਕਤ ਮਾਹੌਲ ਵਿੱਚ ਵਿਦਿਆਰਥੀ ਨੂੰ ਉਸ ਦੇ ਮੌਜੂਦਾ ਪੱਧਰ ਤੋਂ ਇੱਕ ਕਦਮ ਅੱਗੇ (i + 1) ਸਮਝਣਯੋਗ ਸਮੱਗਰੀ (Comprehensible Input) ਮਿਲੇ',
                hi: 'जब तनावमुक्त परिवेश में शिक्षार्थी को उसके वर्तमान स्तर से एक कदम आगे (i + 1) की बोधगम्य सामग्री प्राप्त हो'
            },
            C: {
                en: 'When the learner memorizes bilingual dictionaries by heart',
                pa: 'ਜਦੋਂ ਵਿਦਿਆਰਥੀ ਪੂਰਾ ਡਿਕਸ਼ਨਰੀ ਰੱਟ ਲਵੇ',
                hi: 'जब शिक्षार्थी संपूर्ण शब्दकोश कंठस्थ कर ले'
            },
            D: {
                en: 'When grammar rules are taught exclusively through formal deductive tests',
                pa: 'ਜਦੋਂ ਵਿਆਕਰਨ ਦੇ ਨਿਯਮ ਸਿਰਫ਼ ਪ੍ਰੀਖਿਆਵਾਂ ਰਾਹੀਂ ਰਟਾਏ ਜਾਣ',
                hi: 'जब व्याकरण नियम केवल औपचारिक परीक्षाओं द्वारा रटाए जाएँ'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Krashen’s Input Hypothesis states that language acquisition occurs when learners are exposed to Comprehensible Input ($i + 1$) slightly higher than their current competence level ($i$), coupled with a low Affective Filter (low anxiety, high motivation).',
            pa: 'ਕ੍ਰੈਸ਼ਨ ਦਾ ਸਮਝਣਯੋਗ ਇਨਪੁਟ ਸਿਧਾਂਤ ਕਹਿੰਦਾ ਹੈ ਕਿ ਬੱਚਾ ਭਾਸ਼ਾ ਉਦੋਂ ਗ੍ਰਹਿਣ ਕਰਦਾ ਹੈ ਜਦੋਂ ਉਸ ਨੂੰ ਮੌਜੂਦਾ ਸਮਝ (i) ਤੋਂ ਇੱਕ ਦਰਜਾ ਉੱਚੀ (i + 1) ਸਮੱਗਰੀ ਤਣਾਅ-ਮੁਕਤ ਮਾਹੌਲ ਵਿੱਚ ਮਿਲੇ।',
            hi: 'क्रैशन के इनपुट सिद्धांत के अनुसार भाषा अर्जन तब होता है जब शिक्षार्थी को उसके वर्तमान स्तर (i) से थोड़ा आगे (i + 1) की बोधगम्य सामग्री तनावमुक्त वातावरण में दी जाए।'
        },
        thought: {
            en: 'Krashen core = Comprehensible Input (i + 1) + Low Affective Filter.',
            pa: 'ਕ੍ਰੈਸ਼ਨ ਦਾ ਸੂਤਰ = i + 1 ਸਮਝਣਯੋਗ ਇਨਪੁਟ + ਘੱਟ ਤਣਾਅ।',
            hi: 'क्रैशन सूत्र = बोधगम्य निवेश (i + 1) + निम्न भावात्मक फ़िल्टर।'
        }
    },
    {
        id: 'q-pstet-eng-06',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Krashen’s Affective Filter Hypothesis',
            pa: 'ਸਟੀਫਨ ਕ੍ਰੈਸ਼ਨ ਦਾ ਇਮੋਸ਼ਨਲ ਫਿਲਟਰ ਸਿਧਾਂਤ',
            hi: 'स्टीफन क्रैशन का भावात्मक फ़िल्टर सिद्धांत'
        },
        question: {
            en: 'A Class 7 student understands written English stories very well, but completely freezes and cannot speak when asked to stand in front of the class because the teacher publicly ridicules pronunciation slips. According to Stephen Krashen, what is inhibiting this student’s speech output?',
            pa: 'ਸੱਤਵੀਂ ਜਮਾਤ ਦਾ ਵਿਦਿਆਰਥੀ ਅੰਗਰੇਜ਼ੀ ਕਹਾਣੀਆਂ ਚੰਗੀ ਤਰ੍ਹਾਂ ਸਮਝ ਲੈਂਦਾ ਹੈ, ਪਰ ਸਾਰੀ ਜਮਾਤ ਸਾਹਮਣੇ ਬੋਲਣ ਲੱਗਿਆਂ ਡਰ ਕਾਰਨ ਚੁੱਪ ਹੋ ਜਾਂਦਾ ਹੈ ਕਿਉਂਕਿ ਅਧਿਆਪਕ ਗਲਤ ਉਚਾਰਨ ਤੇ ਮਜ਼ਾਕ ਉਡਾਉਂਦਾ ਹੈ। ਸਟੀਫਨ ਕ੍ਰੈਸ਼ਨ ਅਨੁਸਾਰ ਇਸ ਬੱਚੇ ਦੇ ਬੋਲਣ ਵਿੱਚ ਕੀ ਰੁਕਾਵਟ ਬਣ ਰਿਹਾ ਹੈ?',
            hi: 'कक्षा 7 का छात्र अंग्रेज़ी कहानियाँ भली-भांति समझ लेता है, किंतु कक्षा के सम्मुख बोलते समय भयभीत होकर चुप हो जाता है क्योंकि शिक्षक उच्चारण की त्रुटि पर उपहास करता है। स्टीफन क्रैशन के अनुसार इस छात्र के बोलने में क्या बाधा बन रहा है?'
        },
        options: {
            A: {
                en: 'Organic damage to the biological Language Acquisition Device',
                pa: 'ਦਿਮਾਗ਼ ਦੇ ਭਾਸ਼ਾ ਯੰਤਰ (LAD) ਵਿੱਚ ਨੁਕਸ',
                hi: 'जैविक भाषा अर्जन तंत्र (LAD) में शारीरिक क्षति'
            },
            B: {
                en: 'A high Affective Filter (anxiety and fear blocking the output process)',
                pa: 'ਉੱਚਾ ਇਮੋਸ਼ਨਲ/ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਫਿਲਟਰ (ਡਰ ਅਤੇ ਘਬਰਾਹਟ ਕਾਰਨ ਭਾਸ਼ਾ ਰੁਕਣਾ)',
                hi: 'उच्च भावात्मक फ़िल्टर (भय एवं चिंता द्वारा भाषा अभिव्यक्ति का अवरुद्ध होना)'
            },
            C: {
                en: 'Lack of native English genetic inheritance',
                pa: 'ਅੰਗਰੇਜ਼ੀ ਜੈਨੇਟਿਕਸ ਦੀ ਘਾਟ',
                hi: 'जन्मजात अंग्रेज़ी आनुवंशिकता का अभाव'
            },
            D: {
                en: 'Absence of formal Latin-Greek etymology training',
                pa: 'ਲਾਤੀਨੀ ਭਾਸ਼ਾ ਦੇ ਗਿਆਨ ਦੀ ਕਮੀ',
                hi: 'लैटिन भाषा के ज्ञान की कमी'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Krashen’s Affective Filter Hypothesis posits that high anxiety, lack of self-confidence, and public fear raise a mental filter that blocks input from converting into spontaneous language output.',
            pa: 'ਕ੍ਰੈਸ਼ਨ ਦੇ ਅਨੁਸਾਰ ਡਰ, ਘਬਰਾਹਟ ਅਤੇ ਸ਼ਰਮਿੰਦਗੀ ਭਾਵਨਾਤਮਕ ਫਿਲਟਰ (Affective filter) ਨੂੰ ਉੱਚਾ ਕਰ ਦਿੰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਬੱਚਾ ਸਮਝਦੇ ਹੋਏ ਵੀ ਬੋਲ ਨਹੀਂ ਪਾਉਂਦਾ।',
            hi: 'क्रैशन के भावात्मक फ़िल्टर सिद्धांत के अनुसार भय एवं उपहास का डर फ़िल्टर को ऊँचा कर देता है, जिससे समझ होते हुए भी बालक बोल नहीं पाता।'
        },
        thought: {
            en: 'Fear / anxiety / public mockery = High Affective Filter.',
            pa: 'ਡਰ ਅਤੇ ਘਬਰਾਹਟ = ਹਾਈ ਅਫੈਕਟਿਵ ਫਿਲਟਰ (High Affective Filter)।',
            hi: 'भय व उपहास का तनाव = उच्च भावात्मक फ़िल्टर।'
        }
    },
    {
        id: 'q-pstet-eng-07',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'hard',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Noam Chomsky (LAD & Generative Grammar)',
            pa: 'ਨੋਅਮ ਚੋਮਸਕੀ (LAD ਅਤੇ ਯੂਨੀਵਰਸਲ ਗ੍ਰਾਮਰ)',
            hi: 'नोआम चॉम्स्की (LAD एवं सार्वभौमिक व्याकरण)'
        },
        question: {
            en: 'A 4-year-old child in Bathinda who has never heard adults say "breaked" or "foots" spontaneously produces the sentence "My doll breaked its foots." This creative overgeneralization of plural and tense rules directly supports which theory of language acquisition?',
            pa: 'ਬਠਿੰਡਾ ਦਾ ਇੱਕ 4 ਸਾਲਾ ਬੱਚਾ ਜਿਸ ਨੇ ਕਦੇ ਵੱਡਿਆਂ ਦੇ ਮੂੰਹੋਂ "breaked" ਜਾਂ "foots" ਨਹੀਂ ਸੁਣਿਆ, ਅਚਾਨਕ ਬੋਲਦਾ ਹੈ: "My doll breaked its foots." ਬੱਚੇ ਵੱਲੋਂ ਆਪਣੇ ਆਪ ਨਿਯਮ ਘੜਨ ਦੀ ਇਹ ਪ੍ਰਵਿਰਤੀ ਕਿਸ ਭਾਸ਼ਾ ਸਿਧਾਂਤ ਦਾ ਸਿੱਧਾ ਸਬੂਤ ਹੈ?',
            hi: 'बठिंडा का एक 4 वर्षीय बालक जिसने कभी बड़ों से "breaked" या "foots" नहीं सुना, स्वयं कहता है: "My doll breaked its foots." बालक द्वारा नियमों का यह रचनात्मक अति-सामान्यीकरण किस भाषा सिद्धांत का प्रत्यक्ष प्रमाण है?'
        },
        options: {
            A: {
                en: 'B.F. Skinner’s Behaviorist Operant Conditioning through mechanical imitation',
                pa: 'ਬੀ.ਐਫ. ਸਕਿਨਰ ਦਾ ਨਕਲ ਰਾਹੀਂ ਵਿਵਹਾਰਵਾਦੀ ਅਨੁਕੂਲਨ ਸਿਧਾਂਤ',
                hi: 'बी.एफ. स्किनर का यांत्रिक नकल द्वारा व्यवहारवादी अनुबंधन'
            },
            B: {
                en: 'Noam Chomsky’s Innatist Theory of an innate Language Acquisition Device (LAD)',
                pa: 'ਨੋਅਮ ਚੋਮਸਕੀ ਦਾ ਜਨਮਜਾਤ ਭਾਸ਼ਾ ਯੰਤਰ (LAD) ਅਤੇ ਰਚਨਾਤਮਕ ਵਿਆਕਰਨ ਸਿਧਾਂਤ',
                hi: 'नोआम चॉम्स्की का जन्मजात भाषा अर्जन यंत्र (LAD) एवं सार्वभौमिक व्याकरण'
            },
            C: {
                en: 'Bloomfield’s Structural Taxonomic Phonology',
                pa: 'ਬਲੂਮਫੀਲਡ ਦਾ ਸੰਰਚਨਾਤਮਕ ਵਰਗੀਕਰਨ',
                hi: 'ब्लूमफील्ड का संरचनात्मक वर्गीकरण'
            },
            D: {
                en: 'Pavlovian Classical Stimulus Association',
                pa: 'ਪਾਵਲੋਵ ਦਾ ਸ਼ਰਤੀਆ ਪ੍ਰਤੀਕਿਰਿਆ ਸਿਧਾਂਤ',
                hi: 'पावलोव का शास्त्रीय उद्दीपक साहचर्य'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Children do not merely imitate adult speech (which refutes Skinner\'s behaviorism). As Chomsky proved, children possess an innate Language Acquisition Device (LAD) that actively abstracts underlying syntactic rules and creatively generates novel forms like "breaked" (overregularization).',
            pa: 'ਚੋਮਸਕੀ ਨੇ ਸਿੱਧ ਕੀਤਾ ਕਿ ਬੱਚੇ ਸਿਰਫ਼ ਰੱਟਾ ਜਾਂ ਨਕਲ ਨਹੀਂ ਕਰਦੇ (ਜਿਵੇਂ ਸਕਿਨਰ ਕਹਿੰਦਾ ਸੀ), ਸਗੋਂ ਦਿਮਾਗ਼ ਵਿਚਲੇ ਜਨਮਜਾਤ ਯੰਤਰ (LAD) ਰਾਹੀਂ ਖ਼ੁਦ ਨਿਯਮ ਬਣਾ ਕੇ ਨਵੇਂ ਵਾਕ ਸਿਰਜਦੇ ਹਨ।',
            hi: 'चॉम्स्की ने सिद्ध किया कि बच्चे केवल वयस्कों की नकल नहीं करते, बल्कि जन्मजात LAD द्वारा अंतर्निहित नियमों का विश्लेषण कर "breaked" जैसे नए रूप स्वयं रचते हैं।'
        },
        thought: {
            en: 'Child generates novel un-heard forms like "breaked" = Chomsky LAD (creative generation, anti-Skinner).',
            pa: 'ਬੱਚੇ ਵੱਲੋਂ ਅਣਸੁਣੇ ਸ਼ਬਦ ਆਪ ਘੜਨਾ = ਚੋਮਸਕੀ ਦਾ LAD ਸਿਧਾਂਤ।',
            hi: 'बालक द्वारा अनसुने शब्दों की स्वयं रचना = चॉम्स्की का LAD सिद्धांत।'
        }
    },
    {
        id: 'q-pstet-eng-08',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Structural Approach & Substitution Tables',
            pa: 'ਸੰਰਚਨਾਤਮਕ ਪਹੁੰਚ ਅਤੇ ਬਦਲਵੀਂ ਸਾਰਣੀ',
            hi: 'संरचनात्मक उपागम एवं प्रतिस्थापन तालिका'
        },
        question: {
            en: 'An English teacher writes a Substitution Table on the blackboard: [The boy / The girl / The teacher] + [reads / writes / likes] + [a story / a poem / a book] and has pupils construct 27 varied sentences orally through systematic repetition. What is the pedagogical foundation of this practice?',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਅਧਿਆਪਕ ਬੋਰਡ ਤੇ ਇੱਕ ਬਦਲਵੀਂ ਸਾਰਣੀ (Substitution Table) ਲਿਖਦਾ ਹੈ: [The boy / The girl / The teacher] + [reads / writes / likes] + [a story / a poem / a book] ਅਤੇ ਵਿਦਿਆਰਥੀਆਂ ਤੋਂ ਦੁਹਰਾਈ ਰਾਹੀਂ 27 ਵਾਕ ਬਣਵਾਉਂਦਾ ਹੈ। ਇਹ ਕਿਹੜੀ ਪਹੁੰਚ ਹੈ?',
            hi: 'अंग्रेज़ी शिक्षक श्यामपट्ट पर प्रतिस्थापन तालिका (Substitution Table) लिखता है: [The boy / The girl] + [reads / writes] + [a book / a letter] और छात्रों से दोहराव द्वारा अनेक वाक्य बनवाता है। यह किस उपागम पर आधारित है?'
        },
        options: {
            A: {
                en: 'Structural Approach focusing on sentence pattern habit formation',
                pa: 'ਵਾਕ-ਬਣਤਰ ਦੀਆਂ ਆਦਤਾਂ ਪੱਕੀਆਂ ਕਰਨ ਵਾਲੀ ਸੰਰਚਨਾਤਮਕ ਪਹੁੰਚ (Structural Approach)',
                hi: 'वाक्य-संरचना की आदतों के निर्माण पर केंद्रित संरचनात्मक उपागम (Structural Approach)'
            },
            B: {
                en: 'Suggestopedia subliminal music immersion',
                pa: 'ਸਜੈਸਟੋਪੀਡੀਆ ਸੰਗੀਤਕ ਵਿਧੀ',
                hi: 'सजेस्टोपीडिया संगीत विधि'
            },
            C: {
                en: 'Classical Grammar-Translation Prussian Method',
                pa: 'ਰਵਾਇਤੀ ਵਿਆਕਰਨ-ਅਨੁਵਾਦ ਪ੍ਰਣਾਲੀ',
                hi: 'पारंपरिक व्याकरण-अनुवाद प्रणाली'
            },
            D: {
                en: 'Natural immersion without any grammatical structure',
                pa: 'ਬਿਨਾਂ ਕਿਸੇ ਨਿਯਮ ਦੇ ਕੁਦਰਤੀ ਖੁੱਲ੍ਹ',
                hi: 'बिना किसी संरचना के प्राकृतिक विसर्जन'
            }
        },
        correct: 'A',
        explanation: {
            en: 'The Structural Approach emphasizes mastering graded sentence structures and vocabulary patterns through systematic oral drills and Substitution Tables to build linguistic habits.',
            pa: 'ਸੰਰਚਨਾਤਮਕ ਪਹੁੰਚ (Structural Approach) ਵਿੱਚ ਬਦਲਵੀਂ ਸਾਰਣੀ (Substitution Tables) ਰਾਹੀਂ ਵਾਕਾਂ ਦੇ ਢਾਂਚੇ ਵਾਰ-ਵਾਰ ਬੋਲ ਕੇ ਭਾਸ਼ਾਈ ਆਦਤ ਬਣਾਈ ਜਾਂਦੀ ਹੈ।',
            hi: 'संरचनात्मक उपागम (Structural Approach) में प्रतिस्थापन तालिकाओं (Substitution Tables) द्वारा वाक्य प्रतिमानों का अभ्यास कराकर भाषा की आदत डाली जाती है।'
        },
        thought: {
            en: 'Substitution table + sentence patterns = Structural Approach.',
            pa: 'ਬਦਲਵੀਂ ਸਾਰਣੀ + ਵਾਕ ਢਾਂਚਾ = ਸੰਰਚਨਾਤਮਕ ਪਹੁੰਚ (Structural Approach)।',
            hi: 'प्रतिस्थापन तालिका + वाक्य प्रतिमान = संरचनात्मक उपागम।'
        }
    },
    {
        id: 'q-pstet-eng-09',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Error Analysis (Interlingual L1 Transfer)',
            pa: 'ਤਰੁੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ (ਮਾਤ-ਭਾਸ਼ਾ ਦਾ ਪ੍ਰਭਾਵ)',
            hi: 'त्रुटि विश्लेषण (मातृभाषा का प्रभाव)'
        },
        question: {
            en: 'A Punjabi-medium student learning English produces the sentence: "I daily morning tea drink" instead of "I drink tea every morning." The teacher recognizes this as an Interlingual Error. What is the exact linguistic cause of this error?',
            pa: 'ਪੰਜਾਬੀ ਮਾਧਿਅਮ ਦਾ ਇੱਕ ਵਿਦਿਆਰਥੀ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਲਿਖਦਾ ਹੈ: "I daily morning tea drink" (ਅਸਲ: "I drink tea every morning")। ਅਧਿਆਪਕ ਇਸ ਨੂੰ ਮਾਤ-ਭਾਸ਼ਾ ਦਾ ਪ੍ਰਭਾਵ ਮੰਨਦਾ ਹੈ। ਇਸ ਤਰੁੱਟੀ ਦਾ ਮੁੱਖ ਕਾਰਨ ਕੀ ਹੈ?',
            hi: 'पंजाबी माध्यम का छात्र अंग्रेज़ी में लिखता है: "I daily morning tea drink" (शुद्ध: "I drink tea every morning")। शिक्षक इसे अंतर-भाषाई त्रुटि मानता है। इस त्रुटि का मूल भाषाई कारण क्या है?'
        },
        options: {
            A: {
                en: 'Transfer of Punjabi SOV (Subject-Object-Verb) word order onto English SVO (Subject-Verb-Object) syntax',
                pa: 'ਪੰਜਾਬੀ ਦੇ ਕਰਤਾ-ਕਰਮ-ਕਿਰਿਆ (SOV) ਵਾਕ-ਕ੍ਰਮ ਦਾ ਅੰਗਰੇਜ਼ੀ ਦੇ SVO ਵਾਕ-ਕ੍ਰਮ ਉੱਤੇ ਨਕਾਰਾਤਮਕ ਪ੍ਰਭਾਵ',
                hi: 'पंजाबी के कर्ता-कर्म-क्रिया (SOV) वाक्य क्रम का अंग्रेज़ी के SVO क्रम पर नकारात्मक अंतरण'
            },
            B: {
                en: 'Dyspraxic fine-motor cognitive deficit',
                pa: 'ਮੋਟਰ ਕੰਟਰੋਲ ਦੀ ਦਿਮਾਗੀ ਕਮਜ਼ੋਰੀ',
                hi: 'गामक नियंत्रण की विकासात्मक कमी'
            },
            C: {
                en: 'Lack of Latin prefix memorization',
                pa: 'ਅਗੇਤਰਾਂ ਦੇ ਗਿਆਨ ਦੀ ਕਮੀ',
                hi: 'उपसर्गों के ज्ञान का अभाव'
            },
            D: {
                en: 'Total absence of auditory acuity',
                pa: 'ਸੁਣਨ ਸ਼ਕਤੀ ਦਾ ਪੂਰਨ ਅਭਾਵ',
                hi: 'श्रवण शक्ति की पूर्ण कमी'
            }
        },
        correct: 'A',
        explanation: {
            en: 'Punjabi is a Subject-Object-Verb (SOV) language ("ਮੈਂ ਰੋਜ਼ ਸਵੇਰੇ ਚਾਹ ਪੀਂਦਾ ਹਾਂ"), whereas English is a Subject-Verb-Object (SVO) language. The learner negatively transfers Punjabi word order onto English syntax (Interlingual interference).',
            pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਕਰਤਾ ਤੋਂ ਬਾਅਦ ਕਰਮ ਅਤੇ ਅੰਤ ਵਿੱਚ ਕਿਰਿਆ ਆਉਂਦੀ ਹੈ (SOV), ਜਦਕਿ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕਰਤਾ ਤੋਂ ਬਾਅਦ ਕਿਰਿਆ ਆਉਂਦੀ ਹੈ (SVO)। ਮਾਤ-ਭਾਸ਼ਾ ਦੇ ਵਾਕ-ਕ੍ਰਮ ਦਾ ਪ੍ਰਭਾਵ ਹੀ ਇਸ ਗਲਤੀ ਦਾ ਕਾਰਨ ਹੈ।',
            hi: 'पंजाबी भाषा का वाक्य क्रम SOV (कर्ता-कर्म-क्रिया) है, जबकि अंग्रेज़ी SVO (कर्ता-क्रिया-कर्म) है। बालक ने पंजाबी के वाक्य क्रम का अंग्रेज़ी में अंतरण कर दिया।'
        },
        thought: {
            en: 'L1 syntax transfer = Interlingual error (Punjabi SOV applied to English SVO).',
            pa: 'ਪੰਜਾਬੀ ਵਾਕ-ਕ੍ਰਮ SOV ਨੂੰ ਅੰਗਰੇਜ਼ੀ SVO ਤੇ ਲਗਾਉਣਾ = ਮਾਤ-ਭਾਸ਼ਾ ਦਾ ਪ੍ਰਭਾਵ (Interlingual error)।',
            hi: 'मातृभाषा के SOV क्रम को अंग्रेज़ी के SVO पर थोपना = अंतर-भाषाई प्रभाव।'
        }
    },
    {
        id: 'q-pstet-eng-10',
        topicId: 'pstet-english-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'English Language Pedagogy',
            pa: 'ਅੰਗਰੇਜ਼ੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'अंग्रेज़ी भाषा शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Process Approach to Writing',
            pa: 'ਲਿਖਣ ਕੌਸ਼ਲ ਦੀ ਪ੍ਰਕਿਰਿਆਤਮਕ ਪਹੁੰਚ',
            hi: 'प्रक्रियात्मक लेखन उपागम'
        },
        question: {
            en: 'When assigning a creative composition on "My Village" in Class 6, Teacher Anita takes students through five stages: Brainstorming ideas in groups, Drafting paragraphs, Peer review, Revising content, and Proofreading punctuation before final publication. This pedagogy is known as:',
            pa: 'ਛੇਵੀਂ ਜਮਾਤ ਵਿੱਚ "ਮੇਰਾ ਪਿੰਡ" ਵਿਸ਼ੇ ਤੇ ਲੇਖ ਲਿਖਵਾਉਣ ਲਈ ਅਧਿਆਪਕਾ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਪੰਜ ਪੜਾਵਾਂ ਵਿੱਚੋਂ ਲੰਘਾਉਂਦੀ ਹੈ: ਵਿਚਾਰ ਮੰਥਨ (Brainstorming), ਕੱਚਾ ਖਰੜਾ (Drafting), ਸਾਥੀਆਂ ਤੋਂ ਪੜ੍ਹਾਉਣਾ (Peer review), ਸੋਧਣਾ (Revising) ਅਤੇ ਅੰਤ ਵਿੱਚ ਵਿਰਾਮ ਚਿੰਨ੍ਹਾਂ ਦੀ ਸਫ਼ਾਈ। ਇਸ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
            hi: 'कक्षा 6 में "मेरा गाँव" विषय पर निबंध लेखन हेतु शिक्षिका पाँच चरणों का अनुसरण कराती है: विचार-मंथन, प्रारूपण (Drafting), सहपाठी समीक्षा, पुनरीक्षण एवं संपादन। यह उपागम क्या कहलाता है?'
        },
        options: {
            A: {
                en: 'Product Approach to Writing',
                pa: 'ਉਤਪਾਦ ਪਹੁੰਚ (Product Approach)',
                hi: 'उत्पाद उपागम (Product Approach)'
            },
            B: {
                en: 'Process Approach to Writing',
                pa: 'ਪ੍ਰਕਿਰਿਆਤਮਕ ਪਹੁੰਚ (Process Approach to Writing)',
                hi: 'प्रक्रियात्मक लेखन उपागम (Process Approach)'
            },
            C: {
                en: 'Mechanical Transcription Copying',
                pa: 'ਯਾਂਤਰਿਕ ਨਕਲ ਵਿਧੀ',
                hi: 'यांत्रिक अनुलेखन विधि'
            },
            D: {
                en: 'Deductive Rote Orthography',
                pa: 'ਰੱਟੇਬਾਜ਼ੀ ਲਿਖਾਈ ਵਿਧੀ',
                hi: 'रटंत वर्तनी विधि'
            }
        },
        correct: 'B',
        explanation: {
            en: 'The Process Approach treats writing not as an isolated single-attempt exam product, but as a recursive cognitive process involving Pre-writing/Brainstorming, Drafting, Revising, Editing, and Publishing.',
            pa: 'ਪ੍ਰਕਿਰਿਆਤਮਕ ਪਹੁੰਚ (Process Approach) ਵਿੱਚ ਲਿਖਣ ਨੂੰ ਸਿਰਫ਼ ਇੱਕ ਅੰਤਿਮ ਨਤੀਜਾ ਮੰਨਣ ਦੀ ਬਜਾਏ ਵਿਚਾਰ-ਮੰਥਨ, ਖਰੜਾ, ਸੋਧ ਅਤੇ ਸੰਪਾਦਨ ਦੀ ਇੱਕ ਸਿੱਖਣ ਪ੍ਰਕਿਰਿਆ ਵਜੋਂ ਲਿਆ ਜਾਂਦਾ ਹੈ।',
            hi: 'प्रक्रियात्मक लेखन उपागम (Process Approach) में लेखन को केवल अंतिम उत्पाद न मानकर विचार-मंथन, प्रारूपण, पुनरीक्षण एवं संपादन की चक्रीय प्रक्रिया माना जाता है।'
        },
        thought: {
            en: 'Brainstorm -> Draft -> Revise -> Edit -> Publish = Process Approach to Writing.',
            pa: 'ਵਿਚਾਰ ਮੰਥਨ -> ਖਰੜਾ -> ਸੋਧ -> ਸੰਪਾਦਨ = ਪ੍ਰਕਿਰਿਆਤਮਕ ਪਹੁੰਚ।',
            hi: 'विचार-मंथन -> प्रारूपण -> पुनरीक्षण -> संपादन = प्रक्रियात्मक लेखन उपागम।'
        }
    },

    // =========================================================================
    // 4. MATHEMATICS PEDAGOGY (pstet-math-pedagogy) — 10 MCQs
    // =========================================================================
    {
        id: 'q-pstet-mat-01',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'NCF 2005 Core Vision (Mathematisation of Thought)',
            pa: 'NCF 2005 ਦਾ ਮੁੱਖ ਉਦੇਸ਼ (ਸੋਚ ਦਾ ਗਣਿਤੀਕਰਨ)',
            hi: 'NCF 2005 का प्रमुख ध्येय (चिंतन का गणितीकरण)'
        },
        question: {
            en: 'According to the National Curriculum Framework (NCF 2005), what is the primary higher aim of teaching mathematics in school education?',
            pa: 'ਰਾਸ਼ਟਰੀ ਪਾਠਕ੍ਰਮ ਰੂਪ-ਰੇਖਾ (NCF 2005) ਅਨੁਸਾਰ ਸਕੂਲੀ ਸਿੱਖਿਆ ਵਿੱਚ ਗਣਿਤ ਪੜ੍ਹਾਉਣ ਦਾ ਪ੍ਰਮੁੱਖ ਉੱਚੇਰਾ ਉਦੇਸ਼ ਕੀ ਹੈ?',
            hi: 'राष्ट्रीय पाठ्यचर्या की रूपरेखा (NCF 2005) के अनुसार विद्यालयी शिक्षा में गणित शिक्षण का प्रमुख उच्चतर उद्देश्य क्या है?'
        },
        options: {
            A: {
                en: 'To train children to memorize multiplication tables and algorithms rapidly for competitive exams',
                pa: 'ਮੁਕਾਬਲੇ ਦੀਆਂ ਪ੍ਰੀਖਿਆਵਾਂ ਲਈ ਪਹਾੜੇ ਅਤੇ ਫਾਰਮੂਲੇ ਤੇਜ਼ੀ ਨਾਲ ਰਟਵਾਉਣਾ',
                hi: 'प्रतियोगी परीक्षाओं हेतु पहाड़े एवं कलन-विधि तेजी से रटाना'
            },
            B: {
                en: 'Mathematisation of the child’s thought processes, developing problem-solving and logical reasoning abilities',
                pa: 'ਬੱਚੇ ਦੀਆਂ ਸੋਚ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦਾ ਗਣਿਤੀਕਰਨ ਕਰਨਾ, ਸਮੱਸਿਆ-ਹੱਲ ਅਤੇ ਤਾਰਕਿਕ ਚਿੰਤਨ ਦਾ ਵਿਕਾਸ ਕਰਨਾ',
                hi: 'बालक की चिंतन प्रक्रियाओं का गणितीकरण करना तथा समस्या-समाधान व तार्किक क्षमता का विकास करना'
            },
            C: {
                en: 'To teach only commercial bookkeeping and financial accounting',
                pa: 'ਸਿਰਫ਼ ਦੁਕਾਨਦਾਰੀ ਦਾ ਹਿਸਾਬ-ਕਿਤਾਬ ਸਿਖਾਉਣਾ',
                hi: 'केवल व्यावसायिक बहीखाता एवं वित्तीय लेखांकन सिखाना'
            },
            D: {
                en: 'To restrict mathematics strictly to abstract theorems without any concrete manipulatives',
                pa: 'ਗਣਿਤ ਨੂੰ ਬਿਨਾਂ ਕਿਸੇ ਸਮੱਗਰੀ ਦੇ ਸਿਰਫ਼ ਅਮੂਰਤ ਥਿਊਰਮਾਂ ਤੱਕ ਸੀਮਤ ਰੱਖਣਾ',
                hi: 'गणित को बिना किसी सामग्री के केवल अमूर्त प्रमेयों तक सीमित रखना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'NCF 2005 explicitly states that the higher goal of school mathematics is the "Mathematisation of the child\'s thought processes" — nurturing problem-solving, pattern recognition, logical deduction, and abstract reasoning rather than mere algorithmic drills.',
            pa: 'NCF 2005 ਅਨੁਸਾਰ ਗਣਿਤ ਦਾ ਮੁੱਖ ਮਕਸਦ ਫਾਰਮੂਲੇ ਰਟਣਾ ਨਹੀਂ, ਸਗੋਂ ਬੱਚੇ ਦੀ ਸੋਚ ਦਾ ਗਣਿਤੀਕਰਨ ਕਰਨਾ ਅਤੇ ਤਾਰਕਿਕ ਦਲੀਲ ਵਿਕਸਿਤ ਕਰਨਾ ਹੈ।',
            hi: 'NCF 2005 के अनुसार गणित शिक्षण का उच्चतर उद्देश्य यांत्रिक गणना के स्थान पर "बालक के चिंतन का गणितीकरण" तथा तार्किक क्षमता का विकास करना है।'
        },
        thought: {
            en: 'NCF 2005 higher goal = Mathematisation of thought processes.',
            pa: 'NCF 2005 ਦਾ ਉੱਚਾ ਟੀਚਾ = ਸੋਚ ਦਾ ਗਣਿਤੀਕਰਨ।',
            hi: 'NCF 2005 का उच्चतर लक्ष्य = चिंतन का गणितीकरण।'
        }
    },
    {
        id: 'q-pstet-mat-02',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Inductive Method (Angle Sum Property of Triangle)',
            pa: 'ਆਗਮਨ ਵਿਧੀ (ਤਿਕੋਣ ਦੇ ਕੋਣਾਂ ਦਾ ਜੋੜ)',
            hi: 'आगमन विधि (त्रिभुज के कोणों का योग)'
        },
        question: {
            en: 'A Class 6 teacher wants to introduce the theorem: "The sum of the three interior angles of a triangle is 180°". She distributes cardboard cutouts of acute, obtuse, and right-angled triangles to groups of students, has them measure all angles with protractors, sum them up, and observe that every triangle yields 180°. Only then does she write the theorem on the board. Which method did she adopt?',
            pa: 'ਛੇਵੀਂ ਜਮਾਤ ਦੀ ਅਧਿਆਪਕਾ ਸਿਧਾਂਤ ਪੜ੍ਹਾਉਣਾ ਚਾਹੁੰਦੀ ਹੈ ਕਿ "ਤਿਕੋਣ ਦੇ ਤਿੰਨਾਂ ਅੰਦਰੂਨੀ ਕੋਣਾਂ ਦਾ ਜੋੜ 180° ਹੁੰਦਾ ਹੈ"। ਉਹ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਨਿਊਨ ਕੋਣ, ਅਧਿਕ ਕੋਣ ਅਤੇ ਸਮਕੋਣ ਤਿਕੋਣਾਂ ਦੇ ਕਾਗਜ਼ੀ ਮਾਡਲ ਦੇ ਕੇ ਡੀ (ਪ੍ਰੋਟ੍ਰੈਕਟਰ) ਨਾਲ ਕੋਣ ਮਿਣ ਕੇ ਜੋੜਨ ਲਈ ਕਹਿੰਦੀ ਹੈ। ਸਾਰੇ ਬੱਚੇ ਵੇਖਦੇ ਹਨ ਕਿ ਜੋੜ ਹਮੇਸ਼ਾ 180° ਆਉਂਦਾ ਹੈ। ਫਿਰ ਅਧਿਆਪਕਾ ਸਿਧਾਂਤ ਲਿਖਦੀ ਹੈ। ਉਸ ਨੇ ਕਿਹੜੀ ਵਿਧੀ ਵਰਤੀ?',
            hi: 'कक्षा 6 की शिक्षिका प्रमेय पढ़ाना चाहती है कि "त्रिभुज के तीनों अंतःकोणों का योग 180° होता है"। वह छात्रों के समूहों को विभिन्न त्रिभुज देकर चांदे (डी) से कोण मापकर जोड़ने को कहती है। सभी छात्र पाते हैं कि योग 180° ही आता है। इसके बाद वह श्यामपट्ट पर प्रमेय लिखती है। उसने कौन सी विधि अपनाई?'
        },
        options: {
            A: {
                en: 'Deductive Method (General rule to specific application)',
                pa: 'ਨਿਗਮਨ ਵਿਧੀ (ਨਿਯਮ ਤੋਂ ਉਦਾਹਰਨ ਵੱਲ)',
                hi: 'निगमन विधि (नियम से उदाहरण की ओर)'
            },
            B: {
                en: 'Inductive Method (Concrete observation to general abstraction)',
                pa: 'ਆਗਮਨ ਵਿਧੀ (ਸਥੂਲ ਉਦਾਹਰਨਾਂ ਤੋਂ ਆਮ ਨਿਯਮ ਵੱਲ)',
                hi: 'आगमन विधि (मूर्त उदाहरणों से सामान्य नियम की ओर)'
            },
            C: {
                en: 'Mechanical Algorithm Conditioning',
                pa: 'ਯਾਂਤਰਿਕ ਕਲਨ-ਵਿਧੀ',
                hi: 'यांत्रिक कलन-विधि'
            },
            D: {
                en: 'Synthetic Proof Method',
                pa: 'ਸੰਸਲੇਸ਼ਣ ਵਿਧੀ',
                hi: 'संश्लेषण विधि'
            }
        },
        correct: 'B',
        explanation: {
            en: 'The Inductive Method leads pupils from concrete specific observations (measuring multiple triangles) to the formulation of a generalized rule or theorem (sum = 180°).',
            pa: 'ਆਗਮਨ ਵਿਧੀ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ ਸਥੂਲ ਉਦਾਹਰਨਾਂ ਦੀ ਜਾਂਚ ਕਰਕੇ ਆਮ ਫਾਰਮੂਲਾ ਜਾਂ ਸਿਧਾਂਤ ਕੱਢਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ ਖੋਜ-ਆਧਾਰਿਤ ਹੈ।',
            hi: 'आगमन विधि में विशिष्ट मूर्त उदाहरणों का अवलोकन कर सामान्य नियम/प्रमेय का प्रतिपादन किया जाता है।'
        },
        thought: {
            en: 'Measure triangles first -> derive 180° rule = Inductive Method (Concrete to Abstract).',
            pa: 'ਪਹਿਲਾਂ ਤਿਕੋਣਾਂ ਮਿਣਨਾ -> ਫਿਰ 180° ਨਿਯਮ ਕੱਢਣਾ = ਆਗਮਨ ਵਿਧੀ।',
            hi: 'पहले त्रिभुजों को मापना -> फिर 180° का नियम निकालना = आगमन विधि।'
        }
    },
    {
        id: 'q-pstet-mat-03',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Mathematics Manipulatives (Geoboard)',
            pa: 'ਗਣਿਤ ਸਹਾਇਕ ਸਮੱਗਰੀ (ਜੀਓਬੋਰਡ)',
            hi: 'गणित शिक्षण सामग्री (जियोबोर्ड)'
        },
        question: {
            en: 'A primary teacher wants her Class 4 students to explore 2D geometric shapes, compare perimeters of different rectangles, and explore line symmetry hands-on. Which mathematical apparatus is best suited for this objective?',
            pa: 'ਇੱਕ ਪ੍ਰਾਇਮਰੀ ਅਧਿਆਪਕਾ ਚੌਥੀ ਜਮਾਤ ਦੇ ਬੱਚਿਆਂ ਨੂੰ 2D ਜਿਓਮੈਟਰੀ ਆਕਾਰ, ਵੱਖ-ਵੱਖ ਆਇਤਾਂ ਦੇ ਘੇਰੇ (Perimeter) ਦੀ ਤੁਲਨਾ ਅਤੇ ਸਮਮਿਤੀ (Symmetry) ਖ਼ੁਦ ਕਰ ਕੇ ਸਿਖਾਉਣਾ ਚਾਹੁੰਦੀ ਹੈ। ਇਸ ਕੰਮ ਲਈ ਸਭ ਤੋਂ ਉੱਤਮ ਗਣਿਤਕ ਸੰਦ ਕਿਹੜਾ ਹੈ?',
            hi: 'प्राथमिक शिक्षिका कक्षा 4 के छात्रों को 2D ज्यामितीय आकृतियाँ, आयतों के परिमाप की तुलना एवं सममिति मूर्त रूप से सिखाना चाहती है। इसके लिए सर्वाधिक उपयुक्त उपकरण कौन सा है?'
        },
        options: {
            A: {
                en: 'Abacus (ਗਿਣਤਾਰਾ)',
                pa: 'ਗਿਣਤਾਰਾ (Abacus)',
                hi: 'गिनतारा (Abacus)'
            },
            B: {
                en: 'Geoboard with rubber bands',
                pa: 'ਰਬੜ ਬੈਂਡਾਂ ਵਾਲਾ ਜੀਓਬੋਰਡ (Geoboard)',
                hi: 'रबर बैंड वाला जियोबोर्ड (Geoboard)'
            },
            C: {
                en: 'Napier’s Bones rods',
                pa: 'ਨੇਪੀਅਰ ਹੱਡੀਆਂ (Napier’s Bones)',
                hi: 'नेपियर बोन्स'
            },
            D: {
                en: 'Clinometer',
                pa: 'ਕਲੀਨੋਮੀਟਰ (Clinometer)',
                hi: 'क्लीनोमीटर'
            }
        },
        correct: 'B',
        explanation: {
            en: 'A Geoboard is a pegboard with rubber bands designed specifically for teaching 2D geometry, perimeter, area, polygons, angles, and symmetry in elementary mathematics.',
            pa: 'ਜੀਓਬੋਰਡ (Geoboard) ਕਿੱਲਾਂ ਵਾਲਾ ਬੋਰਡ ਹੁੰਦਾ ਹੈ ਜਿਸ ਉੱਤੇ ਰਬੜ ਬੈਂਡ ਚੜ੍ਹਾ ਕੇ 2D ਆਕਾਰ, ਘੇਰਾ, ਖੇਤਰਫਲ ਅਤੇ ਸਮਮਿਤੀ ਸਿਖਾਈ ਜਾਂਦੀ ਹੈ।',
            hi: 'जियोबोर्ड (Geoboard) कीलों वाला बोर्ड होता है जिस पर रबर बैंड द्वारा 2D आकृतियाँ, परिमाप, क्षेत्रफल एवं सममिति सिखाई जाती है।'
        },
        thought: {
            en: '2D shapes + perimeter + symmetry = Geoboard. (Abacus = Place value; Napier bones = Multiplication).',
            pa: '2D ਆਕਾਰ + ਘੇਰਾ + ਸਮਮਿਤੀ = ਜੀਓਬੋਰਡ। (ਗਿਣਤਾਰਾ = ਸਥਾਨਕ ਮੁੱਲ)।',
            hi: '2D आकृतियाँ + परिमाप + सममिति = जियोबोर्ड। (गिनतारा = स्थानीय मान)।'
        }
    },
    {
        id: 'q-pstet-mat-04',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Mathematics Manipulatives (Abacus / ਗਿਣਤਾਰਾ)',
            pa: 'ਗਣਿਤ ਸਹਾਇਕ ਸਮੱਗਰੀ (ਗਿਣਤਾਰਾ)',
            hi: 'गणित शिक्षण सामग्री (गिनतारा)'
        },
        question: {
            en: 'When teaching the concept of Place Value (units, tens, hundreds) and column regrouping to young learners, especially accommodating visually impaired students, which tactile apparatus is most effective?',
            pa: 'ਛੋਟੇ ਬੱਚਿਆਂ ਨੂੰ ਸਥਾਨਕ ਮੁੱਲ (ਇਕਾਈ, ਦਹਾਈ, ਸੈਂਕੜਾ) ਅਤੇ ਹਾਸਲ ਵਾਲਾ ਜੋੜ ਸਿਖਾਉਣ ਲਈ, ਖ਼ਾਸ ਕਰਕੇ ਨੇਤਰਹੀਣ ਬੱਚਿਆਂ ਦੇ ਸਮਾਵੇਸ਼ ਲਈ, ਕਿਹੜਾ ਛੂਹਣਯੋਗ (Tactile) ਸੰਦ ਸਭ ਤੋਂ ਵੱਧ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਹੈ?',
            hi: 'छोटे बालकों को स्थानीय मान (इकाई, दहाई, सैकड़ा) एवं हासिल वाला जोड़ सिखाने हेतु, विशेषकर दृष्टिबाधित बच्चों के समावेश हेतु, कौन सा स्पर्शनीय उपकरण सर्वाधिक प्रभावी है?'
        },
        options: {
            A: {
                en: 'Abacus (ਗਿਣਤਾਰਾ)',
                pa: 'ਗਿਣਤਾਰਾ (Abacus)',
                hi: 'गिनतारा (Abacus)'
            },
            B: {
                en: 'Protractor and compass set',
                pa: 'ਪ੍ਰਕਾਰ ਅਤੇ ਡੀ',
                hi: 'परकार एवं चांदा'
            },
            C: {
                en: 'Tangram 7-piece puzzle',
                pa: 'ਟੈਨਗ੍ਰਾਮ ਪਹੇਲੀ',
                hi: 'टैनग्राम पहेली'
            },
            D: {
                en: 'Flat 1-meter measuring tape',
                pa: 'ਮੀਟਰ ਟੇਪ',
                hi: 'मापक फीता'
            }
        },
        correct: 'A',
        explanation: {
            en: 'An Abacus (ਗਿਣਤਾਰਾ) uses parallel wires with beads representing place value columns (units, tens, hundreds). It is the premier tactile manipulative for counting, place value, and regrouping for all learners including visually impaired children.',
            pa: 'ਗਿਣਤਾਰਾ (Abacus) ਸਥਾਨਕ ਮੁੱਲ (ਇਕਾਈ, ਦਹਾਈ, ਸੈਂਕੜਾ) ਅਤੇ ਗਿਣਤੀ ਸਿਖਾਉਣ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਛੂਹਣਯੋਗ ਸੰਦ ਹੈ।',
            hi: 'गिनतारा (Abacus) मनकों द्वारा स्थानीय मान एवं जोड़-घटाव सिखाने हेतु दृष्टिबाधित बच्चों सहित सभी हेतु सर्वोत्तम उपकरण है।'
        },
        thought: {
            en: 'Place value + tactile counting / visually impaired = Abacus.',
            pa: 'ਸਥਾਨਕ ਮੁੱਲ + ਨੇਤਰਹੀਣ ਬੱਚੇ = ਗਿਣਤਾਰਾ (Abacus)।',
            hi: 'स्थानीय मान + दृष्टिबाधित छात्र = गिनतारा (Abacus)।'
        }
    },
    {
        id: 'q-pstet-mat-05',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Fraction Misconceptions (Whole Number Bias)',
            pa: 'ਭਿੰਨਾਂ ਦਾ ਭੁਲੇਖਾ (ਪੂਰਨ ਸੰਖਿਆ ਪੱਖਪਾਤ)',
            hi: 'भिन्नों की भ्रांति (पूर्ण संख्या पूर्वाग्रह)'
        },
        question: {
            en: 'A Class 5 teacher presents the addition problem: 1/2 + 1/3. Multiple students write 2/5 as the answer. What is the fundamental cognitive misconception underlying this error, and how should it be remediated?',
            pa: 'ਪੰਜਵੀਂ ਜਮਾਤ ਦੀ ਅਧਿਆਪਕਾ ਸਵਾਲ ਦਿੰਦੀ ਹੈ: 1/2 + 1/3। ਕਈ ਵਿਦਿਆਰਥੀ ਉੱਤਰ 2/5 ਲਿਖ ਦਿੰਦੇ ਹਨ। ਇਸ ਗਲਤੀ ਪਿੱਛੇ ਬੱਚਿਆਂ ਦਾ ਕਿਹੜਾ ਗਣਿਤਕ ਭੁਲੇਖਾ ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ ਅਤੇ ਇਸ ਦਾ ਸੁਧਾਰ ਕਿਵੇਂ ਹੋਵੇਗਾ?',
            hi: 'कक्षा 5 की शिक्षिका जोड़ का प्रश्न देती है: 1/2 + 1/3। कई छात्र उत्तर 2/5 लिखते हैं। इस त्रुटि के पीछे कौन सी वैचारिक भ्रांति है और इसका निवारण कैसे किया जाए?'
        },
        options: {
            A: {
                en: 'Lack of pencil-holding motor coordination; remediate through calligraphy copying',
                pa: 'ਪੈਨਸਿਲ ਪਕੜ ਦੀ ਕਮੀ; ਸੁਲੇਖ ਰਾਹੀਂ ਸੁਧਾਰ',
                hi: 'पेंसिल पकड़ने की कमी; सुलेख द्वारा निवारण'
            },
            B: {
                en: 'Whole Number Bias (treating numerator and denominator as independent whole numbers to be added directly); remediate using concrete fraction strips and paper-folding',
                pa: 'ਪੂਰਨ ਸੰਖਿਆ ਪੱਖਪਾਤ (ਅੰਸ਼ ਅਤੇ ਹਰ ਨੂੰ ਆਮ ਸੰਖਿਆਵਾਂ ਸਮਝ ਕੇ ਸਿੱਧਾ ਜੋੜ ਦੇਣਾ); ਕਾਗਜ਼ ਮੋੜ ਕੇ ਅਤੇ ਭਿੰਨ-ਪੱਟੀਆਂ ਰਾਹੀਂ ਠੋਸ ਰੂਪ ਵਿੱਚ ਸੁਧਾਰ ਕਰਨਾ',
                hi: 'पूर्ण संख्या पूर्वाग्रह (अंश व हर को अलग-अलग पूर्ण संख्या मानकर सीधे जोड़ना); भिन्न-पट्टियों व कागज मोड़कर मूर्त रूप से समझाना'
            },
            C: {
                en: 'Deficiency in memorizing 1 to 20 multiplication tables; remediate by repeated chanting',
                pa: 'ਪਹਾੜੇ ਯਾਦ ਨਾ ਹੋਣਾ; ਪਹਾੜੇ ਰਟਵਾਉਣਾ',
                hi: 'पहाड़े याद न होना; बार-बार पहाड़े रटाना'
            },
            D: {
                en: 'Inability to write digits in Gurmukhi numerals; remediate through script drills',
                pa: 'ਗੁਰਮੁਖੀ ਅੰਕ ਨਾ ਲਿਖ ਸਕਣਾ',
                hi: 'गुरुमुखी अंक न लिख पाना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'This classic error stems from "Whole Number Bias", where students misapply whole-number arithmetic rules to fractions ($1+1=2$ and $2+3=5$). It is corrected by using fraction strips or circle cutouts showing that half plus a third cannot equal two-fifths (which is less than half).',
            pa: 'ਇਸ ਨੂੰ ਪੂਰਨ ਸੰਖਿਆ ਪੱਖਪਾਤ (Whole number bias) ਕਹਿੰਦੇ ਹਨ ਜਿੱਥੇ ਬੱਚਾ ਅੰਸ਼ ਵਿੱਚ ਅੰਸ਼ ਅਤੇ ਹਰ ਵਿੱਚ ਹਰ ਜੋੜ ਦਿੰਦਾ ਹੈ। ਕਾਗਜ਼ ਮੋੜ ਕੇ ਜਾਂ ਫਰੈਕਸ਼ਨ ਸਟ੍ਰਿਪਸ ਨਾਲ ਇਸ ਦਾ ਸਹੀ ਸੰਕਲਪ ਸਮਝਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।',
            hi: 'इसे पूर्ण संख्या पूर्वाग्रह कहते हैं जहाँ छात्र भिन्नों पर पूर्ण संख्या का नियम लगाकर 1+1=2 और 2+3=5 कर देते हैं। भिन्न-पट्टियों द्वारा इसका संप्रत्ययात्मक निवारण आवश्यक है।'
        },
        thought: {
            en: '1/2 + 1/3 = 2/5 is classic Whole Number Bias. Remedy = Concrete fraction strips.',
            pa: '1/2 + 1/3 = 2/5 ਪੂਰਨ ਸੰਖਿਆ ਦਾ ਭੁਲੇਖਾ ਹੈ। ਸੁਧਾਰ = ਭਿੰਨ-ਪੱਟੀਆਂ।',
            hi: '1/2 + 1/3 = 2/5 पूर्ण संख्या पूर्वाग्रह है। निवारण = भिन्न-पट्टियाँ।'
        }
    },
    {
        id: 'q-pstet-mat-06',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Decimal Misconceptions (Whole Number Length Bias)',
            pa: 'ਦਸ਼ਮਲਵ ਦਾ ਭੁਲੇਖਾ (ਲੰਬਾਈ ਦਾ ਪੱਖਪਾਤ)',
            hi: 'दशमलव की भ्रांति (संख्या लंबाई पूर्वाग्रह)'
        },
        question: {
            en: 'When a teacher asks: "Which number is larger: 0.4 or 0.175?", a Class 5 student immediately answers: "0.175 is larger because 175 has three digits and is much greater than 4." What conceptual misunderstanding does this answer reveal?',
            pa: 'ਜਦੋਂ ਅਧਿਆਪਕ ਪੁੱਛਦਾ ਹੈ: "0.4 ਅਤੇ 0.175 ਵਿੱਚੋਂ ਕਿਹੜਾ ਵੱਡਾ ਹੈ?", ਤਾਂ ਪੰਜਵੀਂ ਜਮਾਤ ਦਾ ਬੱਚਾ ਕਹਿੰਦਾ ਹੈ: "0.175 ਵੱਡਾ ਹੈ ਕਿਉਂਕਿ 175 ਤਿੰਨ ਅੰਕਾਂ ਵਾਲਾ ਹੈ ਅਤੇ 4 ਨਾਲੋਂ ਬਹੁਤ ਵੱਡਾ ਹੈ।" ਬੱਚੇ ਦੀ ਇਹ ਸੋਚ ਗਣਿਤ ਦੇ ਕਿਹੜੇ ਸੰਕਲਪ ਦੀ ਘਾਟ ਦਰਸਾਉਂਦੀ ਹੈ?',
            hi: 'जब शिक्षक पूछता है: "0.4 और 0.175 में कौन बड़ा है?", तो कक्षा 5 का छात्र उत्तर देता है: "0.175 बड़ा है क्योंकि 175 तीन अंकों की संख्या है और 4 से बहुत बड़ी है।" छात्र का यह उत्तर किस संप्रत्ययात्मक भ्रांति को दर्शाता है?'
        },
        options: {
            A: {
                en: 'The student understands place value but made a careless subtraction mistake',
                pa: 'ਬੱਚੇ ਨੂੰ ਸਥਾਨਕ ਮੁੱਲ ਪਤਾ ਹੈ ਪਰ ਘਟਾਓ ਵਿੱਚ ਗਲਤੀ ਹੋ ਗਈ',
                hi: 'छात्र स्थानीय मान जानता है किंतु घटाव में चूक गया'
            },
            B: {
                en: 'The student treats decimal portions as standalone whole numbers, ignoring place value of tenths vs thousandths',
                pa: 'ਬੱਚਾ ਦਸ਼ਮਲਵ ਦੇ ਹਿੱਸੇ ਨੂੰ ਵੱਖਰੀ ਪੂਰਨ ਸੰਖਿਆ ਸਮਝ ਰਿਹਾ ਹੈ ਅਤੇ ਦਸਵੇਂ ਤੇ ਹਜ਼ਾਰਵੇਂ ਹਿੱਸੇ ਦੇ ਸਥਾਨਕ ਮੁੱਲ ਨੂੰ ਨਜ਼ਰਅੰਦਾਜ਼ ਕਰ ਰਿਹਾ ਹੈ',
                hi: 'छात्र दशमलव भाग को स्वतंत्र पूर्ण संख्या मान रहा है तथा दशांश व सहस्रांश के स्थानीय मान की उपेक्षा कर रहा है'
            },
            C: {
                en: 'The student has severe dyscalculia and cannot recognize numerical digits',
                pa: 'ਬੱਚੇ ਨੂੰ ਗੰਭੀਰ ਡਿਸਕੈਲਕੁਲੀਆ ਹੈ ਅਤੇ ਉਹ ਅੰਕ ਨਹੀਂ ਪਛਾਣ ਸਕਦਾ',
                hi: 'छात्र को गंभीर डिस्कैलकुलिया है और वह अंक नहीं पहचानता'
            },
            D: {
                en: 'The student correctly applied scientific exponential notation',
                pa: 'ਬੱਚੇ ਨੇ ਵਿਗਿਆਨਕ ਨਿਯਮ ਸਹੀ ਲਗਾਇਆ ਹੈ',
                hi: 'छात्र ने वैज्ञानिक संकेतन सही लगाया है'
            }
        },
        correct: 'B',
        explanation: {
            en: 'The student suffers from decimal length misconception (interpreting 0.175 as 175 and 0.4 as 4). Remediation requires a 10x10 grid demonstrating that 0.4 is 4 tenths (40 hundredths / 400 thousandths), which is vastly larger than 175 thousandths.',
            pa: 'ਬੱਚਾ ਦਸ਼ਮਲਵ ਨੂੰ ਆਮ ਸੰਖਿਆ ਸਮਝ ਰਿਹਾ ਹੈ (175 > 4)। ਉਸ ਨੂੰ 10x10 ਗਰਿੱਡ ਤੇ ਦਿਖਾਉਣਾ ਚਾਹੀਦਾ ਹੈ ਕਿ 0.4 ਦਾ ਮਤਲਬ 400 ਹਜ਼ਾਰਵੇਂ ਹੈ ਜੋ 175 ਹਜ਼ਾਰਵੇਂ ਨਾਲੋਂ ਬਹੁਤ ਵੱਡਾ ਹੈ।',
            hi: 'छात्र दशमलव को पूर्ण संख्या की तरह पढ़ रहा है (175 > 4)। $10 \\times 10$ ग्रिड पर 0.400 और 0.175 का मूर्त प्रदर्शन कर यह भ्रांति दूर की जानी चाहिए।'
        },
        thought: {
            en: 'Thinking 0.175 > 0.4 = Decimal length misconception (whole number logic applied to decimals).',
            pa: '0.175 ਨੂੰ 0.4 ਤੋਂ ਵੱਡਾ ਮੰਨਣਾ = ਦਸ਼ਮਲਵ ਵਿੱਚ ਪੂਰਨ ਸੰਖਿਆ ਦਾ ਭੁਲੇਖਾ।',
            hi: '0.175 को 0.4 से बड़ा मानना = दशमलव लंबाई की वैचारिक भ्रांति।'
        }
    },
    {
        id: 'q-pstet-mat-07',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'hard',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Analytic Method in Geometric Proofs (Unknown to Known)',
            pa: 'ਵਿਸ਼ਲੇਸ਼ਣ ਵਿਧੀ (ਅਗਿਆਤ ਤੋਂ ਗਿਆਤ ਵੱਲ)',
            hi: 'विश्लेषण विधि (अज्ञात से ज्ञात की ओर)'
        },
        question: {
            en: 'While guiding Class 8 students to prove that "The diagonals of a rhombus bisect each other at right angles", Teacher Parminder begins by asking: "To prove that the angle formed at the center is 90°, what relationship between adjacent triangles must we establish first?" This process of working backward from the conclusion to the known conditions is known as:',
            pa: 'ਅੱਠਵੀਂ ਜਮਾਤ ਵਿੱਚ ਇਹ ਸਿੱਧ ਕਰਨ ਲਈ ਕਿ "ਸਮਚਤੁਰਭੁਜ ਦੇ ਵਿਕਰਨ ਇੱਕ-ਦੂਜੇ ਨੂੰ ਸਮਕੋਣ ਤੇ ਦੁਭਾਜਿਤ ਕਰਦੇ ਹਨ", ਅਧਿਆਪਕ ਪੁੱਛਦਾ ਹੈ: "ਕੇਂਦਰ ਵਿੱਚ 90° ਦਾ ਕੋਣ ਸਿੱਧ ਕਰਨ ਲਈ ਸਾਨੂੰ ਨਾਲ ਲੱਗਦੀਆਂ ਤਿਕੋਣਾਂ ਵਿੱਚ ਕਿਹੜਾ ਸੰਬੰਧ ਸਿੱਧ ਕਰਨਾ ਪਵੇਗਾ?" ਸਿੱਟੇ (ਅਗਿਆਤ) ਤੋਂ ਸ਼ੁਰੂ ਕਰਕੇ ਗਿਆਤ ਤੱਥਾਂ ਵੱਲ ਪਿੱਛੇ ਜਾਣ ਦੀ ਇਸ ਵਿਧੀ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
            hi: 'कक्षा 8 में यह सिद्ध करने हेतु कि "समचतुर्भुज के विकर्ण परस्पर समकोण पर समद्विभाजित करते हैं", शिक्षक पूछता है: "केंद्र में 90° सिद्ध करने हेतु हमें आसन्न त्रिभुजों में पहले क्या संबंध सिद्ध करना होगा?" निष्कर्ष (अज्ञात) से ज्ञात शर्तों की ओर पीछे चलने की यह विधि क्या कहलाती है?'
        },
        options: {
            A: {
                en: 'Synthetic Method (Known to Unknown)',
                pa: 'ਸੰਸਲੇਸ਼ਣ ਵਿਧੀ (ਗਿਆਤ ਤੋਂ ਅਗਿਆਤ ਵੱਲ)',
                hi: 'संश्लेषण विधि (ज्ञात से अज्ञात की ओर)'
            },
            B: {
                en: 'Analytic Method (Unknown to Known)',
                pa: 'ਵਿਸ਼ਲੇਸ਼ਣ ਵਿਧੀ (ਅਗਿਆਤ ਤੋਂ ਗਿਆਤ ਵੱਲ)',
                hi: 'विश्लेषण विधि (अज्ञात से ज्ञात की ओर)'
            },
            C: {
                en: 'Lecture-Drill Method',
                pa: 'ਭਾਸ਼ਣ-ਰੱਟਾ ਵਿਧੀ',
                hi: 'व्याख्यान-अभ्यास विधि'
            },
            D: {
                en: 'Rote Axiomatic Imposition',
                pa: 'ਸਵੈ-ਸਿੱਧ ਰੱਟੇਬਾਜ਼ੀ',
                hi: 'यांत्रिक अभिगृहीत विधि'
            }
        },
        correct: 'B',
        explanation: {
            en: 'The Analytic Method works backward from the Unknown (what is to be proved) to the Known (hypotheses/axioms) by breaking down the problem. It fosters genuine investigative thinking, unlike the Synthetic method which merely synthesizes known facts forward.',
            pa: 'ਵਿਸ਼ਲੇਸ਼ਣ ਵਿਧੀ (Analytic Method) ਵਿੱਚ ਅਗਿਆਤ (ਜੋ ਸਿੱਧ ਕਰਨਾ ਹੈ) ਤੋਂ ਗਿਆਤ ਵੱਲ ਸਮੱਸਿਆ ਨੂੰ ਤੋੜ ਕੇ ਸੋਚਿਆ ਜਾਂਦਾ ਹੈ। ਜਿਓਮੈਟਰੀ ਲਈ ਇਹ ਸਰਵੋਤਮ ਖੋਜ ਵਿਧੀ ਹੈ।',
            hi: 'विश्लेषण विधि (Analytic Method) अज्ञात (जो सिद्ध करना है) से ज्ञात की ओर समस्या को विभाजित करते हुए आगे बढ़ती है।'
        },
        thought: {
            en: 'Working backward from unknown to known = Analytic Method.',
            pa: 'ਅਗਿਆਤ ਤੋਂ ਗਿਆਤ ਵੱਲ ਪਿੱਛੇ ਚੱਲਣਾ = ਵਿਸ਼ਲੇਸ਼ਣ ਵਿਧੀ।',
            hi: 'अज्ञात से ज्ञात की ओर पीछे चलना = विश्लेषण विधि।'
        }
    },
    {
        id: 'q-pstet-mat-08',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'George Pólya’s Problem Solving (Looking Back Stage)',
            pa: 'ਜਾਰਜ ਪੋਲੀਆ ਦੇ ਸਮੱਸਿਆ ਹੱਲ ਪੜਾਅ (ਪੜਚੋਲ ਕਰਨਾ)',
            hi: 'जॉर्ज पोल्या के समस्या-समाधान चरण (पुनरावलोकन)'
        },
        question: {
            en: 'In George Pólya’s classic 4-stage mathematical problem-solving model (1. Understand, 2. Devise a plan, 3. Carry out, 4. Look back), what is the primary educational goal of the final stage, "Looking Back"?',
            pa: 'ਜਾਰਜ ਪੋਲੀਆ ਦੇ ਗਣਿਤਕ ਸਮੱਸਿਆ ਹੱਲ ਦੇ 4 ਪੜਾਵਾਂ ਵਿੱਚੋਂ ਆਖ਼ਰੀ ਪੜਾਅ "ਪੜਚੋਲ ਕਰਨਾ / ਪਿੱਛੇ ਵੇਖਣਾ" (Looking back) ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਕੀ ਹੈ?',
            hi: 'जॉर्ज पोल्या के 4-चरणीय गणितीय समस्या-समाधान मॉडल में अंतिम चरण "पुनरावलोकन" (Looking back) का मुख्य उद्देश्य क्या है?'
        },
        options: {
            A: {
                en: 'To verify the solution, check the reasoning steps, and explore if the method can solve other related problems',
                pa: 'ਉੱਤਰ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨਾ, ਹੱਲ ਦੀਆਂ ਦਲੀਲਾਂ ਦੀ ਪੜਚੋਲ ਕਰਨਾ ਅਤੇ ਇਹ ਵੇਖਣਾ ਕਿ ਕੀ ਇਹ ਤਰੀਕਾ ਹੋਰ ਸਵਾਲਾਂ ਵਿੱਚ ਵੀ ਕੰਮ ਆ ਸਕਦਾ ਹੈ',
                hi: 'उत्तर की पुष्टि करना, तर्कों की समीक्षा करना तथा यह देखना कि क्या यह विधि अन्य प्रश्नों में भी उपयोगी है'
            },
            B: {
                en: 'To immediately erase the blackboard so students cannot copy',
                pa: 'ਬਲੈਕਬੋਰਡ ਤੁਰੰਤ ਸਾਫ਼ ਕਰ ਦੇਣਾ ਤਾਂ ਜੋ ਬੱਚੇ ਨਕਲ ਨਾ ਕਰਨ',
                hi: 'श्यामपट्ट को तुरंत मिटा देना ताकि छात्र नकल न करें'
            },
            C: {
                en: 'To penalize students who used an alternative method',
                pa: 'ਦੂਜਾ ਤਰੀਕਾ ਵਰਤਣ ਵਾਲੇ ਬੱਚਿਆਂ ਨੂੰ ਸਜ਼ਾ ਦੇਣਾ',
                hi: 'वैकल्पिक विधि प्रयुक्त करने वाले छात्रों को दंडित करना'
            },
            D: {
                en: 'To convert the math problem into a history narrative',
                pa: 'ਸਵਾਲ ਨੂੰ ਇਤਿਹਾਸ ਦੀ ਕਹਾਣੀ ਵਿੱਚ ਬਦਲਣਾ',
                hi: 'प्रश्न को इतिहास की कहानी में बदलना'
            }
        },
        correct: 'A',
        explanation: {
            en: 'Pólya’s fourth step, "Looking Back" (Reflection), is crucial for metacognition: it consolidates learning by verifying the result, checking the correctness of the argument, and abstracting generalizable strategies for future problems.',
            pa: 'ਪੋਲੀਆ ਦਾ ਚੌਥਾ ਪੜਾਅ "Looking back" ਵਿਦਿਆਰਥੀ ਨੂੰ ਆਪਣੇ ਕੰਮ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ, ਗਲਤੀਆਂ ਲੱਭਣ ਅਤੇ ਇਸ ਵਿਧੀ ਨੂੰ ਹੋਰ ਸਵਾਲਾਂ ਲਈ ਆਮ ਬਣਾਉਣ ਦੀ ਸੂਝ ਦਿੰਦਾ ਹੈ।',
            hi: 'पोल्या का चौथा चरण "पुनरावलोकन" समाधान के सत्यापन, तार्किक चरणों की समीक्षा तथा विधि के सामान्यीकरण हेतु अत्यंत महत्वपूर्ण है।'
        },
        thought: {
            en: 'Pólya Step 4 = Verify result + reflect on argument + generalize method.',
            pa: 'ਪੋਲੀਆ ਪੜਾਅ 4 = ਉੱਤਰ ਦੀ ਜਾਂਚ + ਤਰੀਕੇ ਦੀ ਪੜਚੋਲ।',
            hi: 'पोल्या चरण 4 = उत्तर का सत्यापन + विधि की समीक्षा।'
        }
    },
    {
        id: 'q-pstet-mat-09',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Tangram as a Spatial Learning Tool',
            pa: 'ਟੈਨਗ੍ਰਾਮ (Tangram) ਦੇ ਸਿੱਖਿਅਕ ਲਾਭ',
            hi: 'टैनग्राम (Tangram) के शैक्षणिक लाभ'
        },
        question: {
            en: 'What specific mathematical cognitive benefit does a Chinese 7-piece Tangram puzzle offer to primary school learners?',
            pa: 'ਚੀਨੀ 7 ਟੁਕੜਿਆਂ ਵਾਲੀ ਟੈਨਗ੍ਰਾਮ (Tangram) ਪਹੇਲੀ ਪ੍ਰਾਇਮਰੀ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਗਣਿਤ ਵਿੱਚ ਕਿਹੜਾ ਵਿਸ਼ੇਸ਼ ਲਾਭ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ?',
            hi: 'चीनी 7 टुकड़ों वाली टैनग्राम (Tangram) पहेली प्राथमिक स्तर पर गणित में क्या विशिष्ट लाभ प्रदान करती है?'
        },
        options: {
            A: {
                en: 'It directly teaches multi-digit long division algorithms',
                pa: 'ਇਹ ਲੰਬੀ ਵੰਡ ਦੇ ਫਾਰਮੂਲੇ ਸਿਖਾਉਂਦੀ ਹੈ',
                hi: 'यह लंबी भाग की कलन-विधि सिखाती है'
            },
            B: {
                en: 'It develops spatial visualization, geometric decomposition, and intuitive conservation of area',
                pa: 'ਇਹ ਸਥਾਨਕ ਸੂਝ (Spatial reasoning), ਜਿਓਮੈਟਰੀ ਆਕਾਰਾਂ ਦੀ ਬਣਤਰ ਅਤੇ ਖੇਤਰਫਲ ਸੰਭਾਲ ਦੀ ਸਮਝ ਵਿਕਸਿਤ ਕਰਦੀ ਹੈ',
                hi: 'यह स्थानिक समझ (Spatial reasoning), ज्यामितीय आकृतियों के संयोजन एवं क्षेत्रफल संरक्षण की समझ विकसित करती है'
            },
            C: {
                en: 'It measures the exact volume of liquid chemicals',
                pa: 'ਇਹ ਤਰਲ ਪਦਾਰਥਾਂ ਦਾ ਆਇਤਨ ਮਾਪਦੀ ਹੈ',
                hi: 'यह द्रवों का आयतन मापती है'
            },
            D: {
                en: 'It memorizes tables from 11 to 19',
                pa: 'ਇਹ 11 ਤੋਂ 19 ਤੱਕ ਪਹਾੜੇ ਰਟਾਉਂਦੀ ਹੈ',
                hi: 'यह 11 से 19 तक पहाड़े रटाती है'
            }
        },
        correct: 'B',
        explanation: {
            en: 'A Tangram consists of 7 flat geometric shapes (5 triangles, 1 square, 1 parallelogram). Rearranging them to form diverse composite figures fosters spatial reasoning, shape transformation, and understanding that area remains constant regardless of spatial arrangement.',
            pa: 'ਟੈਨਗ੍ਰਾਮ ਦੇ 7 ਜਿਓਮੈਟਰੀ ਟੁਕੜਿਆਂ ਨੂੰ ਜੋੜ ਕੇ ਨਵੇਂ ਆਕਾਰ ਬਣਾਉਣ ਨਾਲ ਬੱਚੇ ਵਿੱਚ ਸਥਾਨਕ ਸੂਝ ਅਤੇ ਖੇਤਰਫਲ ਸੰਭਾਲ (Conservation of area) ਦੀ ਪੱਕੀ ਸਮਝ ਬਣਦੀ ਹੈ।',
            hi: 'टैनग्राम के 7 ज्यामितीय टुकड़ों को जोड़कर नई आकृतियाँ बनाने से स्थानिक समझ (Spatial sense) एवं क्षेत्रफल संरक्षण की अवधारणा पुष्ट होती है।'
        },
        thought: {
            en: 'Tangram = Spatial visualization + shape composition + conservation of area.',
            pa: 'ਟੈਨਗ੍ਰਾਮ = ਸਥਾਨਕ ਸੂਝ + ਆਕਾਰਾਂ ਦੀ ਬਣਤਰ + ਖੇਤਰਫਲ ਸੰਭਾਲ।',
            hi: 'टैनग्राम = स्थानिक समझ + आकृतियों का संयोजन + क्षेत्रफल संरक्षण।'
        }
    },
    {
        id: 'q-pstet-mat-10',
        topicId: 'pstet-math-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'hard',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Mathematics Pedagogy',
            pa: 'ਗਣਿਤ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'गणित शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Newman’s Error Analysis (Mathematical Transformation Stage)',
            pa: 'ਨਿਊਮੈਨ ਦਾ ਤਰੁੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ (ਗਣਿਤਕ ਰੂਪਾਂਤਰਨ ਪੜਾਅ)',
            hi: 'न्यूमैन का त्रुटि विश्लेषण (गणितीय रूपांतरण चरण)'
        },
        question: {
            en: 'A student reads a mathematical word problem accurately and comprehends the text: "A farmer has 120 eggs and packs 6 eggs per carton. How many cartons are needed?". However, the student incorrectly writes the mathematical equation as $120 \\times 6 = 720$. According to Newman’s Error Analysis (NEA), at which stage did the student’s error occur?',
            pa: 'ਇੱਕ ਵਿਦਿਆਰਥੀ ਇਬਾਰਤੀ ਸਵਾਲ ਬਿਲਕੁਲ ਸਹੀ ਪੜ੍ਹਦਾ ਹੈ ਅਤੇ ਸਮਝਦਾ ਹੈ: "ਇੱਕ ਕਿਸਾਨ ਕੋਲ 120 ਅੰਡੇ ਹਨ ਅਤੇ ਉਹ ਇੱਕ ਡੱਬੇ ਵਿੱਚ 6 ਅੰਡੇ ਪੈਕ ਕਰਦਾ ਹੈ। ਕਿੰਨੇ ਡੱਬਿਆਂ ਦੀ ਲੋੜ ਪਵੇਗੀ?"। ਪਰ ਉਹ ਗਣਿਤਕ ਸਮੀਕਰਨ $120 \\times 6 = 720$ ਲਿਖ ਦਿੰਦਾ ਹੈ। ਨਿਊਮੈਨ ਦੇ ਤਰੁੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ (NEA) ਅਨੁਸਾਰ ਇਹ ਗਲਤੀ ਕਿਸ ਪੜਾਅ ਤੇ ਹੋਈ?',
            hi: 'एक छात्र शाब्दिक प्रश्न को शुद्ध पढ़ता है और समझता है: "एक किसान के पास 120 अंडे हैं और वह प्रति डिब्बा 6 अंडे रखता है। कुल कितने डिब्बों की आवश्यकता होगी?"। किंतु वह समीकरण $120 \\times 6 = 720$ लिख देता है। न्यूमैन त्रुटि विश्लेषण (NEA) के अनुसार त्रुटि किस स्तर पर हुई?'
        },
        options: {
            A: {
                en: 'Reading Stage (ਕ੍ਰਿਪਾ ਕਰਕੇ ਪੜ੍ਹਨ ਦਾ ਪੜਾਅ)',
                pa: 'ਪੜ੍ਹਨ ਦਾ ਪੜਾਅ (Reading stage)',
                hi: 'पठन स्तर (Reading stage)'
            },
            B: {
                en: 'Comprehension Stage (ਸਮਝ ਦਾ ਪੜਾਅ)',
                pa: 'ਬੋਧ ਪੜਾਅ (Comprehension stage)',
                hi: 'बोध स्तर (Comprehension stage)'
            },
            C: {
                en: 'Mathematical Transformation Stage (ਚੁਣੌਤੀ ਨੂੰ ਸਹੀ ਸੰਕਿਰਿਆ ਵਿੱਚ ਬਦਲਣ ਦਾ ਪੜਾਅ)',
                pa: 'ਗਣਿਤਕ ਰੂਪਾਂਤਰਨ ਪੜਾਅ (Transformation stage - ਭਾਗ ਦੀ ਥਾਂ ਗੁਣਾ ਚੁਣਨਾ)',
                hi: 'गणितीय रूपांतरण स्तर (Transformation stage - भाग के स्थान पर गुणा चुनना)'
            },
            D: {
                en: 'Encoding Stage (ਲਿਖਤੀ ਉੱਤਰ ਲਿਖਣ ਦਾ ਪੜਾਅ)',
                pa: 'ਇਨਕੋਡਿੰਗ ਪੜਾਅ (Encoding stage)',
                hi: 'संकेतीकरण स्तर (Encoding stage)'
            }
        },
        correct: 'C',
        explanation: {
            en: 'In Anne Newman’s Error Analysis (Reading -> Comprehension -> Transformation -> Process Skills -> Encoding), the Transformation stage is where the student decides which mathematical operation (+, -, x, /) to apply. Choosing multiplication instead of division represents a failure in Mathematical Transformation.',
            pa: 'ਨਿਊਮੈਨ ਦੇ ਸਿਧਾਂਤ ਅਨੁਸਾਰ ਜਦੋਂ ਬੱਚਾ ਸਵਾਲ ਸਮਝ ਲੈਂਦਾ ਹੈ ਪਰ ਗਲਤ ਗਣਿਤਕ ਨਿਸ਼ਾਨ (ਵੰਡ ਦੀ ਥਾਂ ਗੁਣਾ) ਚੁਣ ਲੈਂਦਾ ਹੈ, ਤਾਂ ਇਹ ਗਣਿਤਕ ਰੂਪਾਂਤਰਨ (Transformation stage) ਦੀ ਗਲਤੀ ਹੁੰਦੀ ਹੈ।',
            hi: 'न्यूमैन त्रुटि विश्लेषण में जब छात्र प्रश्न समझकर भी गलत गणितीय संक्रिया (भाग के स्थान पर गुणा) चुनता है, तो यह गणितीय रूपांतरण (Transformation stage) की त्रुटि कहलाती है।'
        },
        thought: {
            en: 'Understands text but chooses wrong operation (x instead of /) = Transformation error in Newman analysis.',
            pa: 'ਸਵਾਲ ਸਮਝਿਆ ਪਰ ਵੰਡ ਦੀ ਥਾਂ ਗੁਣਾ ਚੁਣਿਆ = ਗਣਿਤਕ ਰੂਪਾਂਤਰਨ ਗਲਤੀ।',
            hi: 'प्रश्न समझकर गलत संक्रिया चुनना = गणितीय रूपांतरण त्रुटि।'
        }
    },

    // =========================================================================
    // 5. ENVIRONMENTAL STUDIES (EVS) PEDAGOGY (pstet-evs-pedagogy) — 10 MCQs
    // =========================================================================
    {
        id: 'q-pstet-evs-01',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'EVS Curriculum Design in Classes 1 & 2',
            pa: 'ਕਲਾਸ 1 ਅਤੇ 2 ਵਿੱਚ EVS ਪਾਠਕ੍ਰਮ ਦੀ ਯੋਜਨਾ',
            hi: 'कक्षा 1 व 2 में EVS पाठ्यक्रम संरचना'
        },
        question: {
            en: 'A primary school educator notices that there is no separate Environmental Studies (EVS) textbook prescribed by PSEB/NCERT for Classes 1 and 2. What is the official statutory curriculum rationale under NCF 2005 for this design?',
            pa: 'ਇੱਕ ਪ੍ਰਾਇਮਰੀ ਅਧਿਆਪਕ ਵੇਖਦਾ ਹੈ ਕਿ ਪਹਿਲੀ ਅਤੇ ਦੂਜੀ ਜਮਾਤ ਲਈ PSEB/NCERT ਵੱਲੋਂ ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ (EVS) ਦੀ ਕੋਈ ਵੱਖਰੀ ਪਾਠ-ਪੁਸਤਕ ਨਹੀਂ ਲਗਾਈ ਗਈ। NCF 2005 ਅਨੁਸਾਰ ਇਸ ਪਿੱਛੇ ਕੀ ਸਿੱਖਿਅਕ ਤਰਕ ਹੈ?',
            hi: 'एक प्राथमिक शिक्षक देखता है कि कक्षा 1 और 2 हेतु PSEB/NCERT द्वारा पर्यावरण अध्ययन (EVS) की कोई पृथक पाठ्यपुस्तक निर्धारित नहीं है। NCF 2005 के अनुसार इस व्यवस्था का क्या शैक्षणिक औचित्य है?'
        },
        options: {
            A: {
                en: 'Young children in Classes 1 and 2 are incapable of observing their natural surroundings',
                pa: 'ਪਹਿਲੀ-ਦੂਜੀ ਦੇ ਬੱਚੇ ਆਪਣੇ ਆਲੇ-ਦੁਆਲੇ ਨੂੰ ਸਮਝਣ ਦੇ ਸਮਰੱਥ ਨਹੀਂ ਹੁੰਦੇ',
                hi: 'कक्षा 1 और 2 के बच्चे अपने परिवेश को समझने में असमर्थ होते हैं'
            },
            B: {
                en: 'Environmental concepts are integrated naturally into Language and Mathematics to prevent curriculum overload',
                pa: 'ਬੱਚਿਆਂ ਤੇ ਬਸਤੇ ਦਾ ਬੋਝ ਘਟਾਉਣ ਲਈ ਵਾਤਾਵਰਨ ਦੇ ਸੰਕਲਪ ਭਾਸ਼ਾ ਅਤੇ ਗਣਿਤ ਵਿੱਚ ਹੀ ਸੁਭਾਵਿਕ ਤੌਰ ਤੇ ਏਕੀਕ੍ਰਿਤ ਕੀਤੇ ਗਏ ਹਨ',
                hi: 'बस्ते का बोझ घटाने हेतु पर्यावरण की अवधारणाएँ भाषा एवं गणित में ही स्वाभाविक रूप से एकीकृत की गई हैं'
            },
            C: {
                en: 'Primary schools lack qualified science teachers for infant grades',
                pa: 'ਪ੍ਰਾਇਮਰੀ ਸਕੂਲਾਂ ਵਿੱਚ ਵਿਗਿਆਨ ਅਧਿਆਪਕਾਂ ਦੀ ਘਾਟ ਹੈ',
                hi: 'प्राथमिक विद्यालयों में विज्ञान शिक्षकों का अभाव है'
            },
            D: {
                en: 'Environmental protection is only relevant for secondary and higher classes',
                pa: 'ਵਾਤਾਵਰਨ ਸੁਰੱਖਿਆ ਸਿਰਫ਼ ਵੱਡੀਆਂ ਜਮਾਤਾਂ ਦਾ ਵਿਸ਼ਾ ਹੈ',
                hi: 'पर्यावरण संरक्षण केवल उच्च कक्षाओं का विषय है'
            }
        },
        correct: 'B',
        explanation: {
            en: 'NCF 2005 explicitly mandates that for Classes 1 and 2, environmental studies is not taught via a separate textbook; instead, environmental understanding is holistically woven into Language and Mathematics to avoid subject fragmentation and schoolbag burden.',
            pa: 'NCF 2005 ਮੁਤਾਬਕ ਪਹਿਲੀ-ਦੂਜੀ ਜਮਾਤ ਦੇ ਬੱਚਿਆਂ ਤੇ ਕਿਤਾਬਾਂ ਦਾ ਬੋਝ ਨਾ ਪਾਉਣ ਲਈ ਵਾਤਾਵਰਨ ਨੂੰ ਭਾਸ਼ਾ ਅਤੇ ਗਣਿਤ ਰਾਹੀਂ ਸਹਿਜ ਰੂਪ ਵਿੱਚ ਪੜ੍ਹਾਇਆ ਜਾਂਦਾ ਹੈ।',
            hi: 'NCF 2005 के अनुसार कक्षा 1 और 2 में बस्ते का बोझ घटाने एवं समग्र दृष्टिकोण विकसित करने हेतु EVS को भाषा एवं गणित में ही समाहित किया गया है।'
        },
        thought: {
            en: 'No separate EVS book in Class 1-2 because EVS is integrated into Language & Math (NCF 2005).',
            pa: 'ਕਲਾਸ 1-2 ਵਿੱਚ EVS ਦੀ ਵੱਖਰੀ ਕਿਤਾਬ ਨਹੀਂ ਹੁੰਦੀ ਕਿਉਂਕਿ ਇਹ ਭਾਸ਼ਾ ਤੇ ਗਣਿਤ ਵਿੱਚ ਸ਼ਾਮਲ ਹੈ।',
            hi: 'कक्षा 1-2 में अलग पुस्तक नहीं क्योंकि EVS भाषा व गणित में एकीकृत है।'
        }
    },
    {
        id: 'q-pstet-evs-02',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'The 6 Core EVS Themes & Nested Sub-themes',
            pa: 'EVS ਦੇ 6 ਮੁੱਖ ਥੀਮ ਅਤੇ ਉਪ-ਥੀਮ',
            hi: 'EVS के 6 मुख्य थीम एवं उप-थीम'
        },
        question: {
            en: 'In the NCERT/PSEB Environmental Studies syllabus for Classes 3 to 5, the primary theme "Family and Friends" contains four nested sub-themes. Which of the following accurately lists these four sub-themes?',
            pa: 'ਤੀਜੀ ਤੋਂ ਪੰਜਵੀਂ ਜਮਾਤ ਦੇ EVS ਪਾਠਕ੍ਰਮ ਵਿੱਚ ਮੁੱਖ ਥੀਮ "ਪਰਿਵਾਰ ਅਤੇ ਮਿੱਤਰ" ਦੇ ਅੰਦਰ ਚਾਰ ਉਪ-ਥੀਮ ਆਉਂਦੇ ਹਨ। ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਕਲਪ ਇਹਨਾਂ ਚਾਰਾਂ ਉਪ-ਥੀਮਾਂ ਨੂੰ ਸਹੀ ਦਰਸਾਉਂਦਾ ਹੈ?',
            hi: 'कक्षा 3 से 5 के EVS पाठ्यक्रम में मुख्य थीम "परिवार और मित्र" के अंतर्गत चार उप-थीम आते हैं। निम्नलिखित में से कौन सा विकल्प इन चारों उप-थीमों को सही दर्शाता है?'
        },
        options: {
            A: {
                en: 'Water, Shelter, Travel, and Food',
                pa: 'ਪਾਣੀ, ਰੈਣ-ਬਸੇਰਾ, ਯਾਤਰਾ ਅਤੇ ਭੋਜਨ',
                hi: 'जल, आवास, यात्रा और भोजन'
            },
            B: {
                en: 'Relationships, Work and Play, Animals, and Plants',
                pa: 'ਆਪਸੀ ਰਿਸ਼ਤੇ, ਕੰਮ ਅਤੇ ਖੇਡਾਂ, ਜਾਨਵਰ, ਅਤੇ ਪੌਦੇ',
                hi: 'पारस्परिक संबंध, कार्य और खेल, पशु (पशु-पक्षी), और पौधे'
            },
            C: {
                en: 'Science, History, Geography, and Civics',
                pa: 'ਵਿਗਿਆਨ, ਇਤਿਹਾਸ, ਭੂਗੋਲ ਅਤੇ ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ',
                hi: 'विज्ञान, इतिहास, भूगोल और नागरिक शास्त्र'
            },
            D: {
                en: 'Soil, Minerals, Electricity, and Magnetism',
                pa: 'ਮਿੱਟੀ, ਖਣਿਜ, ਬਿਜਲੀ ਅਤੇ ਚੁੰਬਕ',
                hi: 'मृदा, खनिज, विद्युत और चुंबकत्व'
            }
        },
        correct: 'B',
        explanation: {
            en: 'The primary umbrella theme "Family and Friends" encompasses 4 nested sub-themes: (1) Relationships, (2) Work and Play, (3) Animals, and (4) Plants. Water, Shelter, Travel, Food, and Things We Make and Do are independent primary themes.',
            pa: '"ਪਰਿਵਾਰ ਅਤੇ ਮਿੱਤਰ" ਥੀਮ ਅਧੀਨ 4 ਉਪ-ਥੀਮ ਹਨ: (1) ਆਪਸੀ ਰਿਸ਼ਤੇ, (2) ਕੰਮ ਅਤੇ ਖੇਡਾਂ, (3) ਜਾਨਵਰ, ਅਤੇ (4) ਪੌਦੇ।',
            hi: '"परिवार और मित्र" मुख्य थीम के अंतर्गत 4 उप-थीम हैं: (1) संबंध, (2) कार्य और खेल, (3) पशु, तथा (4) पौधे।'
        },
        thought: {
            en: 'Sub-themes under Family & Friends = Relationships, Work & Play, Animals, Plants.',
            pa: 'ਪਰਿਵਾਰ ਅਤੇ ਮਿੱਤਰ ਦੇ ਉਪ-ਥੀਮ = ਰਿਸ਼ਤੇ, ਕੰਮ ਤੇ ਖੇਡਾਂ, ਜਾਨਵਰ, ਪੌਦੇ।',
            hi: 'परिवार व मित्र के उप-थीम = संबंध, कार्य व खेल, पशु, पौधे।'
        }
    },
    {
        id: 'q-pstet-evs-03',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Process Skills in EVS (Observation & Classification)',
            pa: 'EVS ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲ (ਨਿਰੀਖਣ ਅਤੇ ਵਰਗੀਕਰਨ)',
            hi: 'EVS प्रक्रिया कौशल (अवलोकन एवं वर्गीकरण)'
        },
        question: {
            en: 'In an EVS class on the theme "Food", Teacher Kamal asks Class 4 students to bring different fresh leaves (mint, coriander, basil/tulsi, neem) from home, rub them gently between their fingers with eyes closed, smell their aroma, and group them into two baskets based on scent and texture. Which core EVS process skills are being nurtured?',
            pa: 'ਚੌਥੀ ਜਮਾਤ ਵਿੱਚ "ਭੋਜਨ" ਥੀਮ ਪੜ੍ਹਾਉਂਦੇ ਸਮੇਂ ਅਧਿਆਪਕ ਕਮਲ ਬੱਚਿਆਂ ਨੂੰ ਘਰੋਂ ਪੁਦੀਨਾ, ਧਨੀਆ, ਤੁਲਸੀ ਅਤੇ ਨਿੰਮ ਦੇ ਪੱਤੇ ਲਿਆਉਣ ਲਈ ਕਹਿੰਦਾ ਹੈ। ਉਹ ਅੱਖਾਂ ਬੰਦ ਕਰਕੇ ਪੱਤਿਆਂ ਨੂੰ ਮਸਲ ਕੇ ਸੁੰਘਦੇ ਹਨ ਅਤੇ ਸੁਗੰਧ ਤੇ ਛੂਹ ਦੇ ਆਧਾਰ ਤੇ ਦੋ ਵੱਖਰੀਆਂ ਟੋਕਰੀਆਂ ਵਿੱਚ ਵੰਡਦੇ ਹਨ। ਇਸ ਗਤੀਵਿਧੀ ਨਾਲ ਕਿਹੜੇ ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲ ਵਿਕਸਿਤ ਹੋ ਰਹੇ ਹਨ?',
            hi: 'कक्षा 4 में "भोजन" थीम पढ़ाते समय शिक्षक कमल छात्रों से पुदीना, धनिया, तुलसी व नीम के पत्ते मंगवाते हैं। छात्र आँखें बंद कर पत्तों को मसलकर सूंघते हैं तथा सुगंध व स्पर्श के आधार पर दो टोकरियों में छाँटते हैं। इस गतिविधि द्वारा किन प्रक्रिया कौशलों का विकास हो रहा है?'
        },
        options: {
            A: {
                en: 'Observation using senses and Classification into categories',
                pa: 'ਗਿਆਨ ਇੰਦਰੀਆਂ ਰਾਹੀਂ ਨਿਰੀਖਣ (Observation) ਅਤੇ ਵਰਗੀਕਰਨ (Classification)',
                hi: 'इंद्रियों द्वारा अवलोकन (Observation) एवं श्रेणियों में वर्गीकरण (Classification)'
            },
            B: {
                en: 'Mathematical trigonometric computation',
                pa: 'ਤਿਕੋਣਮਿਤੀ ਗਣਨਾ',
                hi: 'त्रिकोणमितीय गणना'
            },
            C: {
                en: 'Rote memorization of scientific Latin botanical binomials',
                pa: 'ਵਿਗਿਆਨਕ ਬਨਸਪਤੀ ਨਾਂ ਰਟਣਾ',
                hi: 'वानस्पतिक वैज्ञानिक नाम रटना'
            },
            D: {
                en: 'Passive copying from the textbook summary',
                pa: 'ਕਿਤਾਬ ਵਿੱਚੋਂ ਨਕਲ ਮਾਰਨਾ',
                hi: 'पुस्तक से यांत्रिक नकल करना'
            }
        },
        correct: 'A',
        explanation: {
            en: 'Rubbing and smelling engages sensory Observation, while sorting leaves into baskets based on aroma and touch exemplifies Classification — two foundational process skills emphasized in primary EVS pedagogy.',
            pa: 'ਸੁੰਘ ਕੇ ਅਤੇ ਛੂਹ ਕੇ ਵੇਖਣਾ "ਨਿਰੀਖਣ" ਕੌਸ਼ਲ ਹੈ, ਅਤੇ ਗੁਣਾਂ ਦੇ ਆਧਾਰ ਤੇ ਟੋਕਰੀਆਂ ਵਿੱਚ ਵੱਖ ਕਰਨਾ "ਵਰਗੀਕਰਨ" ਕੌਸ਼ਲ ਹੈ।',
            hi: 'सूंघना व स्पर्श करना "अवलोकन" कौशल है तथा विशेषताओं के आधार पर छाँटना "वर्गीकरण" कौशल है।'
        },
        thought: {
            en: 'Sensory smelling = Observation; sorting into groups = Classification.',
            pa: 'ਸੁੰਘਣਾ = ਨਿਰੀਖਣ; ਵੱਖ-ਵੱਖ ਕਰਨਾ = ਵਰਗੀਕਰਨ।',
            hi: 'सूंघना = अवलोकन; समूहों में बाँटना = वर्गीकरण।'
        }
    },
    {
        id: 'q-pstet-evs-04',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Community as a Learning Resource & Field Visits',
            pa: 'ਕਮਿਊਨਿਟੀ ਸਾਧਨ ਅਤੇ ਸਥਾਨਕ ਦੌਰੇ',
            hi: 'सामुदायिक संसाधन एवं क्षेत्र भ्रमण'
        },
        question: {
            en: 'While exploring the theme "Things We Make and Do", a primary school teacher takes Class 5 students to visit a local potter (ਘੁਮਿਆਰ) in the village, letting them observe the potter\'s wheel and talk to him about clay sourcing. What is the chief educational value of utilizing such community resources in EVS?',
            pa: 'ਚੀਜ਼ਾਂ ਜੋ ਅਸੀਂ ਬਣਾਉਂਦੇ ਹਾਂ ਤੇ ਕਰਦੇ ਹਾਂ ਥੀਮ ਪੜ੍ਹਾਉਂਦੇ ਸਮੇਂ ਅਧਿਆਪਕ ਬੱਚਿਆਂ ਨੂੰ ਪਿੰਡ ਦੇ ਘੁਮਿਆਰ ਕੋਲ ਲੈ ਕੇ ਜਾਂਦਾ ਹੈ। ਬੱਚੇ ਚੱਕ ਘੁੰਮਦੇ ਵੇਖਦੇ ਹਨ ਅਤੇ ਮਿੱਟੀ ਤਿਆਰ ਕਰਨ ਬਾਰੇ ਗੱਲਬਾਤ ਕਰਦੇ ਹਨ। EVS ਵਿੱਚ ਕਮਿਊਨਿਟੀ ਸਾਧਨਾਂ ਦੀ ਅਜਿਹੀ ਵਰਤੋਂ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਸਿੱਖਿਅਕ ਲਾਭ ਕੀ ਹੈ?',
            hi: '"हम चीजें कैसे बनाते हैं और करते हैं" थीम पढ़ाते समय शिक्षक छात्रों को गाँव के कुम्हार के पास ले जाता है। छात्र चाक घूमते देखते हैं और मिट्टी तैयार करने पर चर्चा करते हैं। EVS में सामुदायिक संसाधनों के ऐसे प्रयोग का प्रमुख शैक्षणिक लाभ क्या है?'
        },
        options: {
            A: {
                en: 'It fulfills an administrative formality without contributing to real learning',
                pa: 'ਇਹ ਸਿਰਫ਼ ਇੱਕ ਕਾਗ਼ਜ਼ੀ ਖ਼ਾਨਾਪੂਰਤੀ ਹੈ',
                hi: 'यह केवल एक प्रशासनिक औपचारिकता है'
            },
            B: {
                en: 'It bridges classroom knowledge with authentic real-world experiences and fosters respect for community labor',
                pa: 'ਇਹ ਜਮਾਤ ਦੇ ਗਿਆਨ ਨੂੰ ਅਸਲ ਜ਼ਿੰਦਗੀ ਨਾਲ ਜੋੜਦਾ ਹੈ ਅਤੇ ਕਿਰਤ ਪ੍ਰਤੀ ਸਤਿਕਾਰ ਦੀ ਭਾਵਨਾ ਪੈਦਾ ਕਰਦਾ ਹੈ',
                hi: 'यह किताबी ज्ञान को वास्तविक जीवन से जोड़ता है तथा श्रम के प्रति सम्मान जाग्रत करता है'
            },
            C: {
                en: 'It forces students to purchase pottery products from the market',
                pa: 'ਇਹ ਬੱਚਿਆਂ ਨੂੰ ਭਾਂਡੇ ਖ਼ਰੀਦਣ ਲਈ ਮਜਬੂਰ ਕਰਦਾ ਹੈ',
                hi: 'यह छात्रों को बर्तन खरीदने को बाध्य करता है'
            },
            D: {
                en: 'It replaces the need to study language and arithmetic',
                pa: 'ਇਸ ਨਾਲ ਭਾਸ਼ਾ ਅਤੇ ਗਣਿਤ ਪੜ੍ਹਨ ਦੀ ਲੋੜ ਖ਼ਤਮ ਹੋ ਜਾਂਦੀ ਹੈ',
                hi: 'इससे भाषा और गणित पढ़ने की आवश्यकता समाप्त हो जाती है'
            }
        },
        correct: 'B',
        explanation: {
            en: 'NCF 2005 advocates using the community as a rich educational resource. Connecting school knowledge to the child\'s real community environment breaks textbook monotony, verifies scientific principles empirically, and instills dignity of labor.',
            pa: 'ਕਮਿਊਨਿਟੀ ਸਾਧਨ ਬੱਚੇ ਦੀ ਕਿਤਾਬੀ ਪੜ੍ਹਾਈ ਨੂੰ ਅਸਲ ਜੀਵਨ ਨਾਲ ਜੋੜਦੇ ਹਨ ਅਤੇ ਸਮਾਜ ਵਿੱਚ ਮਿਹਨਤ-ਮਜ਼ਦੂਰੀ ਕਰਨ ਵਾਲਿਆਂ ਪ੍ਰਤੀ ਆਦਰ-ਸਤਿਕਾਰ ਦੀ ਭਾਵਨਾ ਪੈਦਾ ਕਰਦੇ ਹਨ।',
            hi: 'सामुदायिक संसाधन किताबी ज्ञान को वास्तविक जीवन से जोड़ते हैं, अनुभवजन्य अधिगम कराते हैं तथा श्रम की गरिमा के प्रति संवेदनशीलता विकसित करते हैं।'
        },
        thought: {
            en: 'Community resource / potter visit = Connect school to real world + Dignity of labor.',
            pa: 'ਘੁਮਿਆਰ ਦਾ ਦੌਰਾ = ਕਿਤਾਬ ਨੂੰ ਅਸਲ ਜ਼ਿੰਦਗੀ ਨਾਲ ਜੋੜਨਾ + ਕਿਰਤ ਦਾ ਸਤਿਕਾਰ।',
            hi: 'कुम्हार के पास भ्रमण = विद्यालयी ज्ञान को वास्तविक जीवन से जोड़ना + श्रम की गरिमा।'
        }
    },
    {
        id: 'q-pstet-evs-05',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Formative Assessment Tools (Anecdotal Records)',
            pa: 'ਰਚਨਾਤਮਕ ਮੁਲਾਂਕਣ ਸੰਦ (ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ)',
            hi: 'रचनात्मक मूल्यांकन उपकरण (उपाख्यानात्मक अभिलेख)'
        },
        question: {
            en: 'During the recess break, an EVS teacher notices 8-year-old Jasleen carefully tending to a sparrow with an injured wing, placing a few drops of water near it from her bottle cap. The teacher writes down a brief, dated, factual description of this episode in her observation file. What is this evaluation instrument called?',
            pa: 'ਅੱਧੀ ਛੁੱਟੀ ਦੌਰਾਨ EVS ਅਧਿਆਪਕਾ ਵੇਖਦੀ ਹੈ ਕਿ 8 ਸਾਲਾਂ ਦੀ ਜਸਲੀਨ ਇੱਕ ਜ਼ਖ਼ਮੀ ਚਿੜੀ ਨੂੰ ਸੰਭਾਲ ਰਹੀ ਹੈ ਅਤੇ ਆਪਣੀ ਬੋਤਲ ਦੇ ਢੱਕਣ ਵਿੱਚ ਪਾਣੀ ਪਾ ਕੇ ਉਸ ਅੱਗੇ ਰੱਖ ਰਹੀ ਹੈ। ਅਧਿਆਪਕਾ ਇਸ ਘਟਨਾ ਦਾ ਮਿਤੀ ਸਮੇਤ ਇੱਕ ਸੰਖੇਪ ਨਿਰਪੱਖ ਵੇਰਵਾ ਆਪਣੀ ਡਾਇਰੀ ਵਿੱਚ ਲਿਖ ਲੈਂਦੀ ਹੈ। ਇਸ ਮੁਲਾਂਕਣ ਸੰਦ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
            hi: 'मध्यांतर के दौरान शिक्षिका देखती है कि 8 वर्षीय जसलीन एक घायल पंख वाली गौरैया की देखभाल कर रही है तथा अपनी बोतल के ढक्कन में जल रखकर उसे पिला रही है। शिक्षिका इस घटना का तिथिबद्ध संक्षिप्त वस्तुनिष्ठ विवरण अपनी डायरी में दर्ज करती है। इस मूल्यांकन उपकरण को क्या कहा जाता है?'
        },
        options: {
            A: {
                en: 'Norm-Referenced Grading Sheet',
                pa: 'ਮਾਨਕ-ਸੰਦਰਭਿਤ ਗ੍ਰੇਡ ਸ਼ੀਟ',
                hi: 'मानक-संदर्भित अंक तालिका'
            },
            B: {
                en: 'Anecdotal Record (ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ)',
                pa: 'ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ (Anecdotal Record)',
                hi: 'उपाख्यानात्मक अभिलेख (Anecdotal Record)'
            },
            C: {
                en: 'Diagnostic OMR Scan Sheet',
                pa: 'ਓ.ਐਮ.ਆਰ. ਸਕੈਨ ਸ਼ੀਟ',
                hi: 'ओएमआर स्कैन शीट'
            },
            D: {
                en: 'Cumulative Academic Ledger',
                pa: 'ਅਕਾਦਮਿਕ ਖ਼ਾਤਾ-ਵਹੀ',
                hi: 'वार्षिक अंक रजिस्टर'
            }
        },
        correct: 'B',
        explanation: {
            en: 'An Anecdotal Record (ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ) is a dated, objective narrative recording of a significant incident of student behavior in natural settings, capturing social empathy, attitudes, and emotional growth.',
            pa: 'ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ (Anecdotal Record) ਕਿਸੇ ਵਿਦਿਆਰਥੀ ਦੇ ਸੁਭਾਵਿਕ ਵਤੀਰੇ ਜਾਂ ਦਇਆ ਭਰੀ ਘਟਨਾ ਦਾ ਮਿਤੀ-ਵਾਰ ਨਿਰਪੱਖ ਲਿਖਤੀ ਵੇਰਵਾ ਹੁੰਦਾ ਹੈ।',
            hi: 'उपाख्यानात्मक अभिलेख (Anecdotal Record) किसी छात्र के व्यवहार की किसी महत्वपूर्ण घटना का तिथिबद्ध वस्तुनिष्ठ विवरण होता है जो संवेदनशीलता व मूल्यों का आकलन करता है।'
        },
        thought: {
            en: 'Dated factual incident note of child behavior = Anecdotal Record.',
            pa: 'ਬੱਚੇ ਦੇ ਵਤੀਰੇ ਦੀ ਘਟਨਾ ਦਾ ਮਿਤੀ-ਵਾਰ ਲਿਖਤੀ ਨੋਟ = ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ (Anecdotal record)।',
            hi: 'छात्र के आचरण की तिथिबद्ध संक्षिप्त घटना का विवरण = उपाख्यानात्मक अभिलेख।'
        }
    },
    {
        id: 'q-pstet-evs-06',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Hands-on Inquiry (Experiments with Water)',
            pa: 'ਕਰ ਕੇ ਸਿੱਖਣਾ (ਪਾਣੀ ਦੇ ਪ੍ਰਯੋਗ)',
            hi: 'करके सीखना (जल संबंधी प्रयोग)'
        },
        question: {
            en: 'To teach Class 4 students why certain objects float while others sink in water, which pedagogical approach is most consistent with constructivist EVS learning?',
            pa: 'ਚੌਥੀ ਜਮਾਤ ਦੇ ਬੱਚਿਆਂ ਨੂੰ ਇਹ ਸਿਖਾਉਣ ਲਈ ਕਿ ਪਾਣੀ ਵਿੱਚ ਕੁਝ ਚੀਜ਼ਾਂ ਕਿਉਂ ਤੈਰਦੀਆਂ ਹਨ ਅਤੇ ਕੁਝ ਕਿਉਂ ਡੁੱਬ ਜਾਂਦੀਆਂ ਹਨ, ਰਚਨਾਤਮਕ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ ਅਨੁਸਾਰ ਸਭ ਤੋਂ ਢੁਕਵਾਂ ਤਰੀਕਾ ਕਿਹੜਾ ਹੈ?',
            hi: 'कक्षा 4 के छात्रों को यह सिखाने हेतु कि जल में कुछ वस्तुएँ क्यों तैरती हैं और कुछ क्यों डूब जाती हैं, रचनावादी EVS शिक्षण के अनुसार सर्वाधिक उपयुक्त तरीका कौन सा है?'
        },
        options: {
            A: {
                en: 'Writing Archimedes\' buoyant force formula on the board and asking students to copy it three times',
                pa: 'ਬੋਰਡ ਤੇ ਆਰਕੀਮੀਡੀਜ਼ ਦੇ ਉਛਾਲ ਬਲ ਦਾ ਫਾਰਮੂਲਾ ਲਿਖ ਕੇ ਤਿੰਨ ਵਾਰ ਨਕਲ ਕਰਨ ਲਈ ਕਹਿਣਾ',
                hi: 'श्यामपट्ट पर आर्किमिडीज का उत्प्लावन बल का सूत्र लिखकर तीन बार नकल कराना'
            },
            B: {
                en: 'Providing bowls of water and varied everyday objects (lemon, iron nail, plastic cap, chalk, leaf) and having children predict, test, and record their findings in an observation chart',
                pa: 'ਪਾਣੀ ਦੇ ਕਟੋਰੇ ਅਤੇ ਰੋਜ਼ਾਨਾ ਵਰਤੋਂ ਦੀਆਂ ਚੀਜ਼ਾਂ (ਲਿੰਬੂ, ਕਿੱਲ, ਪਲਾਸਟਿਕ ਢੱਕਣ, ਚਾਕ, ਪੱਤਾ) ਦੇ ਕੇ ਬੱਚਿਆਂ ਤੋਂ ਅੰਦਾਜ਼ਾ ਲਗਵਾਉਣਾ, ਪ੍ਰਯੋਗ ਕਰਵਾਉਣਾ ਅਤੇ ਚਾਰਟ ਵਿੱਚ ਨਿਰੀਖਣ ਦਰਜ ਕਰਵਾਉਣਾ',
                hi: 'पानी के कटोरे तथा रोजमर्रा की वस्तुएँ (नींबू, कील, ढक्कन, चॉक, पत्ता) देकर छात्रों से अनुमान लगवाना, प्रयोग कराना तथा अवलोकन सारणी में दर्ज कराना'
            },
            C: {
                en: 'Threatening that anyone who cannot define density will fail the exam',
                pa: 'ਇਹ ਡਰਾਵਾ ਦੇਣਾ ਕਿ ਜਿਸ ਨੇ ਘਣਤਾ ਦੀ ਪਰਿਭਾਸ਼ਾ ਨਾ ਸੁਣਾਈ ਉਹ ਫੇਲ੍ਹ ਹੋ ਜਾਵੇਗਾ',
                hi: 'यह भय दिखाना कि जो घनत्व की परिभाषा नहीं सुनाएगा वह अनुत्तीर्ण होगा'
            },
            D: {
                en: 'Skipping the topic entirely because Physics should only be taught in secondary school',
                pa: 'ਇਸ ਵਿਸ਼ੇ ਨੂੰ ਛੱਡ ਦੇਣਾ ਕਿਉਂਕਿ ਵਿਗਿਆਨ ਵੱਡੀਆਂ ਜਮਾਤਾਂ ਦਾ ਕੰਮ ਹੈ',
                hi: 'इस विषय को छोड़ देना क्योंकि भौतिकी केवल उच्च कक्षाओं का विषय है'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Constructivist EVS pedagogy emphasizes hands-on inquiry where learners engage their process skills (predicting, testing, observing, classifying) using concrete familiar materials rather than abstract formulas.',
            pa: 'ਰਚਨਾਤਮਕ ਸਿੱਖਿਆ ਮੁਤਾਬਕ ਫਾਰਮੂਲੇ ਰਟਾਉਣ ਦੀ ਥਾਂ ਬੱਚਿਆਂ ਨੂੰ ਖ਼ੁਦ ਚੀਜ਼ਾਂ ਪਾਣੀ ਵਿੱਚ ਪਾ ਕੇ ਵੇਖਣ ਅਤੇ ਨਤੀਜਾ ਕੱਢਣ ਦਾ ਮੌਕਾ ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ।',
            hi: 'रचनावादी उपागम के अनुसार अमूर्त सूत्रों को रटाने के स्थान पर छात्रों को स्वयं प्रयोग करके देखने, अनुमान लगाने एवं निष्कर्ष निकालने का अवसर देना चाहिए।'
        },
        thought: {
            en: 'Hands-on testing with lemon/nail/water tub = Constructivist EVS.',
            pa: 'ਕਟੋਰੇ ਵਿੱਚ ਚੀਜ਼ਾਂ ਪਾ ਕੇ ਖ਼ੁਦ ਵੇਖਣਾ = ਰਚਨਾਤਮਕ EVS ਸਿੱਖਿਆ।',
            hi: 'पानी में वस्तुएँ डालकर स्वयं देखना = रचनावादी अधिगम।'
        }
    },
    {
        id: 'q-pstet-evs-07',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'EVS Assessment Philosophy (Open-ended Inquiry)',
            pa: 'EVS ਮੁਲਾਂਕਣ ਦਰਸ਼ਨ (ਖੁੱਲ੍ਹੇ ਪ੍ਰਸ਼ਨ)',
            hi: 'EVS मूल्यांकन दर्शन (मुक्त अंत वाले प्रश्न)'
        },
        question: {
            en: 'Which of the following test questions is most pedagogically aligned with the philosophy of Continuous and Comprehensive Evaluation (CCE) in primary Environmental Studies?',
            pa: 'ਪ੍ਰਾਇਮਰੀ ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ (EVS) ਵਿੱਚ ਨਿਰੰਤਰ ਅਤੇ ਵਿਆਪਕ ਮੁਲਾਂਕਣ (CCE) ਦੇ ਉਦੇਸ਼ਾਂ ਅਨੁਸਾਰ ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪ੍ਰਸ਼ਨ ਸਭ ਤੋਂ ਉੱਤਮ ਹੈ?',
            hi: 'प्राथमिक पर्यावरण अध्ययन में सतत एवं व्यापक मूल्यांकन (CCE) के उद्देश्यों के अनुसार निम्नलिखित में से कौन सा प्रश्न सर्वाधिक उपयुक्त है?'
        },
        options: {
            A: {
                en: '"Write the exact textbook definition of photosynthesis in 25 words."',
                pa: '"ਪ੍ਰਕਾਸ਼-ਸੰਸਲੇਸ਼ਣ ਦੀ ਕਿਤਾਬੀ ਪਰਿਭਾਸ਼ਾ 25 ਸ਼ਬਦਾਂ ਵਿੱਚ ਲਿਖੋ।"',
                hi: '"प्रकाश-संश्लेषण की किताबी परिभाषा 25 शब्दों में लिखिए।"'
            },
            B: {
                en: '"If there were no trees left in your village or town for a month, what difficulties would animals and humans face, and what can you do to conserve trees?"',
                pa: '"ਜੇ ਤੁਹਾਡੇ ਪਿੰਡ ਜਾਂ ਸ਼ਹਿਰ ਵਿੱਚ ਇੱਕ ਮਹੀਨੇ ਲਈ ਕੋਈ ਰੁੱਖ ਨਾ ਬਚੇ, ਤਾਂ ਜੀਵ-ਜੰਤੂਆਂ ਅਤੇ ਮਨੁੱਖਾਂ ਨੂੰ ਕੀ ਮੁਸ਼ਕਲਾਂ ਆਉਣਗੀਆਂ, ਅਤੇ ਤੁਸੀਂ ਰੁੱਖ ਬਚਾਉਣ ਲਈ ਕੀ ਕਰ ਸਕਦੇ ਹੋ?"',
                hi: '"यदि आपके गाँव या शहर में एक माह तक कोई वृक्ष न बचे, तो पशुओं और मनुष्यों को क्या कठिनाइयाँ होंगी, तथा आप वृक्ष संरक्षण हेतु क्या कर सकते हैं?"'
            },
            C: {
                en: '"Name the year in which the Indian Forest Act was enacted."',
                pa: '"ਭਾਰਤੀ ਜੰਗਲਾਤ ਕਾਨੂੰਨ ਕਿਸ ਸਾਲ ਪਾਸ ਹੋਇਆ ਸੀ, ਸਾਲ ਲਿਖੋ।"',
                hi: '"भारतीय वन अधिनियम किस वर्ष पारित हुआ, वर्ष लिखिए।"'
            },
            D: {
                en: '"List five Latin botanical names of evergreen trees."',
                pa: '"ਸਦਾਬਹਾਰ ਰੁੱਖਾਂ ਦੇ ਪੰਜ ਲਾਤੀਨੀ ਬਨਸਪਤੀ ਨਾਂ ਲਿਖੋ।"',
                hi: '"सदाबहार वृक्षों के पाँच लैटिन वानस्पतिक नाम लिखिए।"'
            }
        },
        correct: 'B',
        explanation: {
            en: 'Primary EVS assessment completely rejects factual recall and rote memorization of definitions. Divergent, open-ended questions based on real-world hypothetical dilemmas stimulate critical thinking, empathy, and environmental problem-solving.',
            pa: 'EVS ਵਿੱਚ ਪਰਿਭਾਸ਼ਾਵਾਂ ਰਟਣ ਵਾਲੇ ਸਵਾਲਾਂ ਦੀ ਥਾਂ ਅਜਿਹੇ ਖੁੱਲ੍ਹੇ ਵਿਚਾਰ ਵਾਲੇ ਪ੍ਰਸ਼ਨ ਪੁੱਛੇ ਜਾਂਦੇ ਹਨ ਜੋ ਬੱਚੇ ਦੀ ਕਲਪਨਾ ਸ਼ਕਤੀ ਅਤੇ ਵਾਤਾਵਰਨ ਪ੍ਰਤੀ ਚਿੰਤਾ ਨੂੰ ਜਗਾਉਣ।',
            hi: 'EVS में परिभाषाओं को रटने वाले प्रश्नों के स्थान पर ऐसे मुक्त-अंत वाले काल्पनिक प्रश्न पूछे जाते हैं जो आलोचनात्मक चिंतन, संवेदनशीलता एवं समस्या-समाधान को बढ़ावा दें।'
        },
        thought: {
            en: 'Open-ended hypothetical environmental question = Divergent thinking in EVS.',
            pa: 'ਖੁੱਲ੍ਹਾ ਪ੍ਰਸ਼ਨ ਜੋ ਸੋਚਣ ਲਈ ਮਜਬੂਰ ਕਰੇ = EVS ਦਾ ਸਹੀ ਮੁਲਾਂਕਣ।',
            hi: 'मुक्त-अंत वाला संवेदनशीलता बढ़ाने वाला प्रश्न = EVS का सही मूल्यांकन।'
        }
    },
    {
        id: 'q-pstet-evs-08',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Integrated Nature of EVS (Science + Social Studies + Env. Education)',
            pa: 'EVS ਦਾ ਏਕੀਕ੍ਰਿਤ ਸੁਭਾਅ',
            hi: 'EVS की एकीकृत प्रकृति'
        },
        question: {
            en: 'While exploring the theme "Water", a primary teacher discusses how clouds cause rain (Science), how water conflicts occur between states and communities (Social Studies/Civics), and traditional water-harvesting stepwells/toba systems in Punjab (Environmental Conservation). This multi-faceted lesson best illustrates which core curriculum characteristic of EVS?',
            pa: '"ਪਾਣੀ" ਥੀਮ ਪੜ੍ਹਾਉਂਦੇ ਹੋਏ ਅਧਿਆਪਕ ਮੀਂਹ ਕਿਵੇਂ ਪੈਂਦਾ ਹੈ (ਵਿਗਿਆਨ), ਰਾਜਾਂ ਵਿਚਕਾਰ ਪਾਣੀ ਦੇ ਝਗੜੇ (ਸਮਾਜਿਕ ਸਿੱਖਿਆ/ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ), ਅਤੇ ਪੰਜਾਬ ਵਿੱਚ ਛੱਪੜਾਂ/ਟੋਭਿਆਂ ਦੀ ਸੰਭਾਲ (ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ) ਨੂੰ ਇੱਕਠਾ ਪੜ੍ਹਾਉਂਦਾ ਹੈ। ਇਹ EVS ਦੇ ਕਿਸ ਮੁੱਖ ਗੁਣ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ?',
            hi: '"जल" थीम पढ़ाते समय शिक्षक बादलों से वर्षा की प्रक्रिया (विज्ञान), राज्यों के मध्य जल विवाद (सामाजिक अध्ययन/नागरिक शास्त्र) तथा पंजाब में पारंपरिक जल संरक्षण (पर्यावरण शिक्षा) को एक साथ पढ़ाता है। यह EVS के किस प्रमुख गुण को दर्शाता है?'
        },
        options: {
            A: {
                en: 'Compartmentalized Subject Specialization',
                pa: 'ਵੱਖ-ਵੱਖ ਵਿਸ਼ਿਆਂ ਦਾ ਸੁਤੰਤਰ ਵਖਰੇਵਾਂ',
                hi: 'खंडित विषय विशेषज्ञता'
            },
            B: {
                en: 'Integrated and Multidisciplinary Nature of EVS',
                pa: 'EVS ਦਾ ਏਕੀਕ੍ਰਿਤ ਅਤੇ ਅੰਤਰ-ਅਨੁਸ਼ਾਸਨੀ ਸੁਭਾਅ (Integrated Nature)',
                hi: 'EVS की एकीकृत एवं बहु-विषयक प्रकृति (Integrated Nature)'
            },
            C: {
                en: 'Exclusive Focus on Theoretical Physics',
                pa: 'ਸਿਰਫ਼ ਸਿਧਾਂਤਕ ਭੌਤਿਕ ਵਿਗਿਆਨ ਤੇ ਜ਼ੋਰ',
                hi: 'केवल सैद्धांतिक भौतिकी पर बल'
            },
            D: {
                en: 'Rote Memorization of River Treaties',
                pa: 'ਦਰਿਆਈ ਸਮਝੌਤੇ ਰਟਾਉਣਾ',
                hi: 'नदी जल समझौतों को रटाना'
            }
        },
        correct: 'B',
        explanation: {
            en: 'EVS at the primary level is fundamentally integrated; it intentionally blends Natural Science, Social Science, and Environmental Education into a single thematic continuum so young children view their world holistically rather than in fractured fragments.',
            pa: 'ਪ੍ਰਾਇਮਰੀ ਪੱਧਰ ਤੇ EVS ਵਿਗਿਆਨ, ਸਮਾਜਿਕ ਅਧਿਐਨ ਅਤੇ ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਦਾ ਸੁਮੇਲ ਹੈ ਤਾਂ ਜੋ ਬੱਚਾ ਆਪਣੇ ਆਲੇ-ਦੁਆਲੇ ਨੂੰ ਇੱਕ ਸਮੁੱਚੀ ਇਕਾਈ ਵਜੋਂ ਵੇਖ ਸਕੇ।',
            hi: 'प्राथमिक स्तर पर EVS विज्ञान, सामाजिक अध्ययन तथा पर्यावरण शिक्षा को एक समग्र विषय के रूप में एकीकृत करता है ताकि बालक परिवेश को समग्र रूप में समझ सके।'
        },
        thought: {
            en: 'Science + Social Studies + Env. Education unified = Integrated nature of EVS.',
            pa: 'ਵਿਗਿਆਨ + ਸਮਾਜਿਕ ਸਿੱਖਿਆ + ਵਾਤਾਵਰਨ ਇਕੱਠੇ = EVS ਦਾ ਏਕੀਕ੍ਰਿਤ ਸੁਭਾਅ।',
            hi: 'विज्ञान + सामाजिक अध्ययन + पर्यावरण शिक्षा का समन्वय = EVS की एकीकृत प्रकृति।'
        }
    },
    {
        id: 'q-pstet-evs-09',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Process Skills (Inference & Data Deduction)',
            pa: 'ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲ (ਸਿੱਟਾ ਕੱਢਣਾ / ਅਨੁਮਾਨ)',
            hi: 'प्रक्रिया कौशल (निष्कर्ष निकालना)'
        },
        question: {
            en: 'Class 5 students in Ludhiana record daily weather observations for 15 days in August. They observe: "Every day when morning humidity exceeds 85% and dark clouds gather, rain showers occur by the afternoon." Formulating the statement: "High humidity accompanied by dense cloud cover in August in Punjab indicates a high likelihood of rain" is an example of which process skill?',
            pa: 'ਲੁਧਿਆਣਾ ਦੇ ਪੰਜਵੀਂ ਜਮਾਤ ਦੇ ਬੱਚੇ ਅਗਸਤ ਮਹੀਨੇ ਵਿੱਚ 15 ਦਿਨ ਮੌਸਮ ਦਾ ਰਿਕਾਰਡ ਰੱਖਦੇ ਹਨ। ਉਹ ਵੇਖਦੇ ਹਨ ਕਿ ਜਦੋਂ ਵੀ ਸਵੇਰੇ ਨਮੀ 85% ਤੋਂ ਵੱਧ ਹੁੰਦੀ ਹੈ ਅਤੇ ਕਾਲੇ ਬੱਦਲ ਛਾਉਂਦੇ ਹਨ, ਦੁਪਹਿਰ ਤੱਕ ਮੀਂਹ ਪੈ ਜਾਂਦਾ ਹੈ। ਇਹ ਕਹਿਣਾ ਕਿ "ਪੰਜਾਬ ਵਿੱਚ ਅਗਸਤ ਵਿੱਚ ਜ਼ਿਆਦਾ ਨਮੀ ਅਤੇ ਬੱਦਲ ਮੀਂਹ ਦੀ ਪੂਰੀ ਸੰਭਾਵਨਾ ਦਰਸਾਉਂਦੇ ਹਨ" ਕਿਹੜਾ ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲ ਹੈ?',
            hi: 'लुधियाना के कक्षा 5 के छात्र अगस्त में 15 दिनों तक मौसम का अवलोकन दर्ज करते हैं। वे पाते हैं कि जब भी प्रातः आर्द्रता 85% से अधिक होती है और काले बादल घिरते हैं, दोपहर तक वर्षा होती है। यह निष्कर्ष निकालना कि "अगस्त में उच्च आर्द्रता और बादल वर्षा की संभावना दर्शाते हैं" किस प्रक्रिया कौशल का उदाहरण है?'
        },
        options: {
            A: {
                en: 'Blind speculation without evidence',
                pa: 'ਬਿਨਾਂ ਸਬੂਤ ਦੇ ਤੁੱਕਾ ਲਗਾਉਣਾ',
                hi: 'बिना साक्ष्य के अनुमान लगाना'
            },
            B: {
                en: 'Scientific Inference and Deduction from empirical observed data',
                pa: 'ਇਕੱਠੇ ਕੀਤੇ ਅੰਕੜਿਆਂ ਦੇ ਆਧਾਰ ਤੇ ਵਿਗਿਆਨਕ ਸਿੱਟਾ ਕੱਢਣਾ (Inference / Deduction)',
                hi: 'अवलोकित साक्ष्यों के आधार पर वैज्ञानिक निष्कर्ष निकालना (Inference / Deduction)'
            },
            C: {
                en: 'Mechanical rote transcription',
                pa: 'ਯਾਂਤਰਿਕ ਨਕਲ ਕਰਨਾ',
                hi: 'यांत्रिक नकल करना'
            },
            D: {
                en: 'Chemical volumetric titration',
                pa: 'ਰਸਾਇਣਕ ਮਾਪਣਾ',
                hi: 'रासायनिक अनुमापन'
            }
        },
        correct: 'B',
        explanation: {
            en: 'An Inference (ਸਿੱਟਾ ਕੱਢਣਾ) is an evidence-based conclusion or explanation derived logically from systematic empirical observations and collected data patterns.',
            pa: 'ਇਕੱਠੇ ਕੀਤੇ ਤੱਥਾਂ ਅਤੇ ਲਗਾਤਾਰ ਨਿਰੀਖਣਾਂ ਦੇ ਆਧਾਰ ਤੇ ਤਾਰਕਿਕ ਨਤੀਜਾ ਕੱਢਣ ਨੂੰ "ਸਿੱਟਾ ਕੱਢਣਾ" (Inference) ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
            hi: 'व्यवस्थित अवलोकनों एवं आँकड़ों के विश्लेषण से तार्किक परिणाम निकालना "निष्कर्ष" (Inference) कौशल कहलाता है।'
        },
        thought: {
            en: 'Logical deduction from recorded observational patterns = Inference.',
            pa: 'ਰਿਕਾਰਡ ਕੀਤੇ ਤੱਥਾਂ ਤੋਂ ਨਤੀਜਾ ਕੱਢਣਾ = ਸਿੱਟਾ ਕੱਢਣਾ (Inference)।',
            hi: 'तथ्यों के आधार पर परिणाम निकालना = निष्कर्ष (Inference)।'
        }
    },
    {
        id: 'q-pstet-evs-10',
        topicId: 'pstet-evs-pedagogy',
        subjectId: 'pstet-pedagogy',
        examId: 'punjab-pstet',
        examTag: 'Punjab PSTET Paper 1 & 2',
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: PSTET_RIGHTS_PROVENANCE,
        source: PSTET_SOURCE,
        topicName: {
            en: 'Environmental Studies Pedagogy',
            pa: 'ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
            hi: 'पर्यावरण अध्ययन शिक्षण शास्त्र'
        },
        subtopic: {
            en: 'Formative Assessment Tools (Student Portfolio / ਪੋਰਟਫੋਲੀਓ)',
            pa: 'ਮੁਲਾਂਕਣ ਸੰਦ (ਵਿਦਿਆਰਥੀ ਪੋਰਟਫੋਲੀਓ)',
            hi: 'मूल्यांकन उपकरण (छात्र पोर्टफोलियो)'
        },
        question: {
            en: 'An EVS teacher maintains a personalized file folder for each Class 4 student containing their best drawings of local ecosystems, leaf collections with handwritten labels, interviews with family elders about village changes, and self-reflection notes over the entire year. What is this evaluation instrument called, and why is it preferred over a single written annual exam?',
            pa: 'ਇੱਕ EVS ਅਧਿਆਪਕਾ ਚੌਥੀ ਜਮਾਤ ਦੇ ਹਰੇਕ ਬੱਚੇ ਦੀ ਇੱਕ ਵਿਸ਼ੇਸ਼ ਫ਼ਾਈਲ ਰੱਖਦੀ ਹੈ ਜਿਸ ਵਿੱਚ ਸਾਲ ਭਰ ਦੇ ਉਸ ਦੇ ਸਭ ਤੋਂ ਵਧੀਆ ਚਿੱਤਰ, ਪੱਤਿਆਂ ਦੇ ਨਮੂਨੇ, ਬਜ਼ੁਰਗਾਂ ਨਾਲ ਕੀਤੀਆਂ ਗੱਲਾਂ ਦੀਆਂ ਰਿਪੋਰਟਾਂ ਅਤੇ ਸਵੈ-ਮੁਲਾਂਕਣ ਨੋਟ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ। ਇਸ ਸੰਦ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਸਾਲਾਨਾ ਲਿਖਤੀ ਪ੍ਰੀਖਿਆ ਨਾਲੋਂ ਇਹ ਕਿਉਂ ਉੱਤਮ ਹੈ?',
            hi: 'एक शिक्षिका कक्षा 4 के प्रत्येक छात्र की एक विशेष फ़ाइल रखती है जिसमें वर्ष भर के उसके सर्वोत्तम चित्र, पत्तों के नमूने, बुजुर्गों के साक्षात्कारों के नोट्स तथा आत्म-मूल्यांकन पत्र संकलित होते हैं। इस उपकरण को क्या कहा जाता है और यह वार्षिक परीक्षा से क्यों श्रेष्ठ है?'
        },
        options: {
            A: {
                en: 'It is a Portfolio, providing authentic cumulative evidence of a child’s holistic learning progress and creativity over time',
                pa: 'ਇਹ ਇੱਕ ਪੋਰਟਫੋਲੀਓ (Portfolio) ਹੈ, ਜੋ ਸਮੇਂ ਦੇ ਨਾਲ ਬੱਚੇ ਦੇ ਸਮੁੱਚੇ ਵਿਕਾਸ, ਸਿਰਜਣਾਤਮਕਤਾ ਅਤੇ ਸਿੱਖਣ ਪ੍ਰਕਿਰਿਆ ਦਾ ਪ੍ਰਮਾਣਿਕ ਸਬੂਤ ਦਿੰਦਾ ਹੈ',
                hi: 'यह पोर्टफोलियो (Portfolio) है, जो समय के साथ बालक के समग्र विकास, रचनात्मकता एवं सीखने की प्रगति का प्रामाणिक साक्ष्य देता है'
            },
            B: {
                en: 'It is a punishment dossier used to notify parents of misconduct',
                pa: 'ਇਹ ਮਾਪਿਆਂ ਨੂੰ ਸ਼ਿਕਾਇਤ ਭੇਜਣ ਵਾਲੀ ਸਜ਼ਾ-ਫ਼ਾਈਲ ਹੈ',
                hi: 'यह शिकायतों वाली अनुशासन फ़ाइल है'
            },
            C: {
                en: 'It is an administrative attendance sheet for calculating mid-day meals',
                pa: 'ਇਹ ਮਿਡ-ਡੇ-ਮੀਲ ਵਾਲਾ ਹਾਜ਼ਰੀ ਰਜਿਸਟਰ ਹੈ',
                hi: 'यह मध्याह्न भोजन का उपस्थिति रजिस्टर है'
            },
            D: {
                en: 'It is an unscientific scrap folder that has no place in formal evaluation',
                pa: 'ਇਹ ਇੱਕ ਰੱਦੀ ਫ਼ਾਈਲ ਹੈ ਜਿਸ ਦਾ ਪੜ੍ਹਾਈ ਵਿੱਚ ਕੋਈ ਕੰਮ ਨਹੀਂ',
                hi: 'यह एक व्यर्थ रद्दी फ़ाइल है जिसका मूल्यांकन में कोई स्थान नहीं'
            }
        },
        correct: 'A',
        explanation: {
            en: 'A Portfolio (ਪੋਰਟਫੋਲੀਓ) is a purposeful, systematic collection of student work demonstrating effort, progress, and achievement over time. Unlike a snapshot one-day written exam, it provides authentic longitudinal evidence of holistic growth in cognitive, affective, and creative domains.',
            pa: 'ਪੋਰਟਫੋਲੀਓ ਬੱਚੇ ਦੇ ਸਾਲ ਭਰ ਦੇ ਸਭ ਤੋਂ ਵਧੀਆ ਕੰਮਾਂ ਦਾ ਯੋਜਨਾਬੱਧ ਸੰਗ੍ਰਹਿ ਹੁੰਦਾ ਹੈ, ਜੋ ਇੱਕ ਦਿਨ ਦੀ ਪ੍ਰੀਖਿਆ ਦੀ ਬਜਾਏ ਬੱਚੇ ਦੇ ਸਮੁੱਚੇ ਵਿਕਾਸ ਦਾ ਸੱਚਾ ਸਬੂਤ ਪੇਸ਼ ਕਰਦਾ ਹੈ।',
            hi: 'पोर्टफोलियो छात्र के वर्ष भर के श्रेष्ठ कार्यों का सुव्यवस्थित संकलन है, जो एक दिन की परीक्षा की तुलना में बालक के समग्र विकास का सतत व प्रामाणिक साक्ष्य प्रस्तुत करता है।'
        },
        thought: {
            en: 'Curated collection of student work over time = Portfolio (authentic longitudinal assessment).',
            pa: 'ਬੱਚੇ ਦੇ ਸਰਵੋਤਮ ਕੰਮਾਂ ਦਾ ਸਾਲ ਭਰ ਦਾ ਸੰਗ੍ਰਹਿ = ਪੋਰਟਫੋਲੀਓ (Portfolio)।',
            hi: 'छात्र के कार्यों का सुव्यवस्थित दीर्घकालिक संकलन = पोर्टफोलियो (Portfolio)।'
        }
    }
];
