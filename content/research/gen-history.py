# -*- coding: utf-8 -*-
import json, pathlib

lessons = [
  {
    "id": "history-maurya-empire",
    "subject": "History",
    "unit": "Ancient India",
    "title": {"hi": "मौर्य साम्राज्य: चंद्रगुप्त से अशोक तक", "pa": "ਮੌਰਿਆ ਸਾਮਰਾਜ: ਚੰਦਰਗੁਪਤ ਤੋਂ ਅਸ਼ੋਕ ਤੱਕ", "en": "Maurya Empire: From Chandragupta to Ashoka"},
    "sections": [
      {
        "heading": {"hi": "मौर्य साम्राज्य का उदय", "pa": "ਮੌਰਿਆ ਸਾਮਰਾਜ ਦਾ ਉਦੈ", "en": "Rise of the Maurya Empire"},
        "text": {
          "hi": "मौर्य साम्राज्य की स्थापना लगभग 322 ईसा पूर्व में चंद्रगुप्त मौर्य ने की थी। उन्होंने अपने गुरु चाणक्य (कौटिल्य) की सहायता से नंद वंश को पराजित करके मगध पर अधिकार किया।\n\nचाणक्य ने 'अर्थशास्त्र' नामक ग्रंथ लिखा जो शासन, कूटनीति और अर्थव्यवस्था पर आधारित था। यह ग्रंथ आज भी प्रशासन के क्षेत्र में महत्वपूर्ण माना जाता है।\n\nचंद्रगुप्त ने सेल्यूकस निकेटर को भी हराया और पश्चिमोत्तर क्षेत्र प्राप्त किए। उनकी राजधानी पाटलिपुत्र (आधुनिक पटना) थी।",
          "pa": "ਮੌਰਿਆ ਸਾਮਰਾਜ ਦੀ ਸਥਾਪਨਾ ਲਗਭਗ 322 ਈਸਾ ਪੂਰਵ ਵਿੱਚ ਚੰਦਰਗੁਪਤ ਮੌਰਿਆ ਨੇ ਕੀਤੀ। ਉਸਨੇ ਚਾਣਕਯ ਦੀ ਮਦਦ ਨਾਲ ਨੰਦ ਵੰਸ਼ ਨੂੰ ਹਰਾਇਆ।\n\nਚਾਣਕਯ ਨੇ 'ਅਰਥਸ਼ਾਸਤਰ' ਲਿਖੀ। ਰਾਜਧਾਨੀ ਪਾਟਲੀਪੁਤਰ ਸੀ।",
          "en": "The Maurya Empire was founded around 322 BCE by Chandragupta Maurya, who defeated the Nanda dynasty with help from his mentor Chanakya (Kautilya).\n\nChanakya wrote the 'Arthashastra', a key treatise on governance and diplomacy. Chandragupta defeated Seleucus Nicator and gained northwest territories. The capital was Pataliputra (modern Patna)."
        }
      },
      {
        "heading": {"hi": "चंद्रगुप्त का प्रशासन", "pa": "ਚੰਦਰਗੁਪਤ ਦਾ ਪ੍ਰਸ਼ਾਸਨ", "en": "Chandragupta's Administration"},
        "text": {
          "hi": "मौर्य प्रशासन सुव्यवस्थित था। साम्राज्य प्रांतों में बंटा था। यूनानी राजदूत मेगस्थनीज ने 'इंडिका' लिखी जो मौर्य काल का महत्वपूर्ण स्रोत है।\n\nकर-व्यवस्था सुदृढ़ थी — किसान उपज का 1/6 भाग कर देते थे। सेना में पैदल, घुड़सवार, हाथी और नौका — चार अंग थे।",
          "pa": "ਯੂਨਾਨੀ ਰਾਜਦੂਤ ਮੈਗਸਥਨੀਜ਼ ਨੇ 'ਇੰਡਿਕਾ' ਲਿਖੀ। ਕਿਸਾਨ ਉਪਜ ਦਾ 1/6 ਭਾਗ ਟੈਕਸ ਦਿੰਦੇ ਸਨ।",
          "en": "Maurya administration was well organized. Greek ambassador Megasthenes visited and wrote 'Indica'. Farmers paid 1/6 of produce as tax. The army had four divisions: infantry, cavalry, elephants, navy."
        }
      },
      {
        "heading": {"hi": "अशोक और कलिंग युद्ध", "pa": "ਅਸ਼ੋਕ ਅਤੇ ਕਲਿੰਗਾ ਯੁੱਧ", "en": "Ashoka and the Kalinga War"},
        "text": {
          "hi": "अशोक ने 273-232 ईसा पूर्व शासन किया। 261 ईसा पूर्व में कलिंग युद्ध में एक लाख से अधिक लोग मारे गए। इस विनाश को देखकर अशोक का हृदय परिवर्तन हुआ।\n\nउन्होंने बौद्ध धर्म अपनाया और 'धम्म' का प्रचार किया — सत्य, अहिंसा, दान और करुणा। अशोक के शिलालेख और स्तंभलेख पूरे भारत में मिलते हैं। सारनाथ का स्तंभ भारत का राजचिह्न बना।",
          "pa": "ਅਸ਼ੋਕ ਨੇ 261 ਈਸਾ ਪੂਰਵ ਵਿੱਚ ਕਲਿੰਗਾ ਯੁੱਧ ਲੜਿਆ। ਯੁੱਧ ਤੋਂ ਬਾਅਦ ਬੁੱਧ ਧਰਮ ਅਪਣਾਇਆ ਅਤੇ ਧੰਮ ਦਾ ਪ੍ਰਚਾਰ ਕੀਤਾ। ਸਾਰਨਾਥ ਦਾ ਥੰਮ੍ਹ ਭਾਰਤ ਦਾ ਰਾਜਚਿੰਨ੍ਹ ਬਣਿਆ।",
          "en": "Ashoka ruled 273-232 BCE. The 261 BCE Kalinga War killed over 100,000 people, transforming Ashoka. He adopted Buddhism and promoted 'Dhamma' (truth, non-violence, charity, compassion). The Ashoka pillar at Sarnath became India's national emblem."
        }
      },
      {
        "heading": {"hi": "साम्राज्य का पतन और विरासत", "pa": "ਸਾਮਰਾਜ ਦਾ ਪਤਨ ਅਤੇ ਵਿਰਾਸਤ", "en": "Decline and Legacy"},
        "text": {
          "hi": "अशोक के बाद साम्राज्य कमजोर हुआ। 185 ईसा पूर्व में पुष्यमित्र शुंग ने अंतिम मौर्य राजा बृहद्रथ को मारा। मौर्य काल की देन: ब्राह्मी लिपि का प्रसार, व्यापार मार्गों का विकास, बौद्ध धर्म का प्रसार।",
          "pa": "185 ਈਸਾ ਪੂਰਵ ਵਿੱਚ ਪੁਸ਼ਯਮਿੱਤਰ ਸ਼ੁੰਗ ਨੇ ਆਖਰੀ ਮੌਰਿਆ ਰਾਜਾ ਬ੍ਰਿਹਦਰਥ ਨੂੰ ਮਾਰਿਆ।",
          "en": "After Ashoka, the empire weakened. In 185 BCE, Pushyamitra Shunga killed the last Maurya king Brihadratha. Mauryan legacy: spread of Brahmi script, trade routes, Buddhism, and monumental architecture."
        }
      }
    ],
    "keypoints": [
      {"hi": "स्थापना: 322 ईसा पूर्व, संस्थापक: चंद्रगुप्त मौर्य", "pa": "ਸਥਾਪਨਾ: 322 ਈਸਾ ਪੂਰਵ, ਚੰਦਰਗੁਪਤ ਮੌਰਿਆ", "en": "Founded: 322 BCE by Chandragupta Maurya"},
      {"hi": "चाणक्य का ग्रंथ: अर्थशास्त्र", "pa": "ਚਾਣਕਯ ਦੀ ਕਿਤਾਬ: ਅਰਥਸ਼ਾਸਤਰ", "en": "Chanakya's text: Arthashastra"},
      {"hi": "मेगस्थनीज ने इंडिका लिखी", "pa": "ਮੈਗਸਥਨੀਜ਼ ਨੇ ਇੰਡਿਕਾ ਲਿਖੀ", "en": "Megasthenes wrote Indica"},
      {"hi": "कलिंग युद्ध: 261 ईसा पूर्व", "pa": "ਕਲਿੰਗਾ ਯੁੱਧ: 261 ਈਸਾ ਪੂਰਵ", "en": "Kalinga War: 261 BCE"},
      {"hi": "सारनाथ स्तंभ = भारत का राजचिह्न", "pa": "ਸਾਰਨਾਥ ਥੰਮ੍ਹ = ਭਾਰਤ ਦਾ ਰਾਜਚਿੰਨ੍ਹ", "en": "Sarnath pillar = India's national emblem"},
      {"hi": "धम्म: सत्य, अहिंसा, दान, करुणा", "pa": "ਧੰਮ: ਸੱਚ, ਅਹਿੰਸਾ, ਦਾਨ, ਦਇਆ", "en": "Dhamma: truth, non-violence, charity, compassion"},
      {"hi": "अंत: 185 ईसा पूर्व, पुष्यमित्र शुंग", "pa": "ਅੰਤ: 185 ਈਸਾ ਪੂਰਵ, ਪੁਸ਼ਯਮਿੱਤਰ ਸ਼ੁੰਗ", "en": "End: 185 BCE, Pushyamitra Shunga"}
    ],
    "summary": {
      "hi": "मौर्य साम्राज्य (322-185 ईसा पूर्व) भारत का पहला विशाल साम्राज्य था। संस्थापक चंद्रगुप्त, गुरु चाणक्य। अशोक सबसे महान — कलिंग युद्ध (261 ईसा पूर्व) के बाद धम्म अपनाया। सारनाथ स्तंभ आज भारत का राजचिह्न है।",
      "pa": "ਮੌਰਿਆ ਸਾਮਰਾਜ (322-185 ਈਸਾ ਪੂਰਵ)। ਚੰਦਰਗੁਪਤ ਨੇ ਸਥਾਪਿਤ ਕੀਤਾ। ਅਸ਼ੋਕ ਨੇ ਕਲਿੰਗਾ ਤੋਂ ਬਾਅਦ ਧੰਮ ਅਪਣਾਇਆ।",
      "en": "The Maurya Empire (322–185 BCE) was India's first major empire. Chandragupta founded it; Ashoka was the greatest ruler. After the Kalinga War (261 BCE) Ashoka adopted Dhamma. The Sarnath pillar is India's national emblem today."
    },
    "flashcards": [
      {"question": {"hi":"मौर्य साम्राज्य कब स्थापित हुआ?","pa":"ਮੌਰਿਆ ਸਾਮਰਾਜ ਕਦੋਂ ਸਥਾਪਿਤ ਹੋਇਆ?","en":"When was the Maurya Empire founded?"}, "answer": {"hi":"322 ईसा पूर्व — चंद्रगुप्त मौर्य","pa":"322 ਈਸਾ ਪੂਰਵ — ਚੰਦਰਗੁਪਤ ਮੌਰਿਆ","en":"322 BCE by Chandragupta Maurya"}},
      {"question": {"hi":"चाणक्य की पुस्तक का नाम?","pa":"ਚਾਣਕਯ ਦੀ ਕਿਤਾਬ ਦਾ ਨਾਮ?","en":"Name of Chanakya's book?"}, "answer": {"hi":"अर्थशास्त्र","pa":"ਅਰਥਸ਼ਾਸਤਰ","en":"Arthashastra"}},
      {"question": {"hi":"कलिंग युद्ध कब हुआ?","pa":"ਕਲਿੰਗਾ ਯੁੱਧ ਕਦੋਂ ਹੋਇਆ?","en":"When was the Kalinga War?"}, "answer": {"hi":"261 ईसा पूर्व","pa":"261 ਈਸਾ ਪੂਰਵ","en":"261 BCE"}},
      {"question": {"hi":"भारत का राजचिह्न कहाँ से लिया गया?","pa":"ਭਾਰਤ ਦਾ ਰਾਜਚਿੰਨ੍ਹ ਕਿੱਥੋਂ ਲਿਆ?","en":"From where is India's national emblem taken?"}, "answer": {"hi":"सारनाथ का अशोक स्तंभ","pa":"ਸਾਰਨਾਥ ਦਾ ਅਸ਼ੋਕ ਥੰਮ੍ਹ","en":"Ashoka pillar at Sarnath"}},
      {"question": {"hi":"मेगस्थनीज ने कौन सी पुस्तक लिखी?","pa":"ਮੈਗਸਥਨੀਜ਼ ਦੀ ਕਿਤਾਬ?","en":"Megasthenes' book?"}, "answer": {"hi":"इंडिका","pa":"ਇੰਡਿਕਾ","en":"Indica"}},
      {"question": {"hi":"धम्म के 4 सिद्धांत?","pa":"ਧੰਮ ਦੇ 4 ਸਿਧਾਂਤ?","en":"4 principles of Dhamma?"}, "answer": {"hi":"सत्य, अहिंसा, दान, करुणा","pa":"ਸੱਚ, ਅਹਿੰਸਾ, ਦਾਨ, ਦਇਆ","en":"Truth, non-violence, charity, compassion"}},
      {"question": {"hi":"मौर्य साम्राज्य किसने समाप्त किया?","pa":"ਮੌਰਿਆ ਸਾਮਰਾਜ ਕਿਸਨੇ ਸਮਾਪਤ ਕੀਤਾ?","en":"Who ended the Maurya Empire?"}, "answer": {"hi":"पुष्यमित्र शुंग, 185 ईसा पूर्व","pa":"ਪੁਸ਼ਯਮਿੱਤਰ ਸ਼ੁੰਗ, 185 ਈਸਾ ਪੂਰਵ","en":"Pushyamitra Shunga, 185 BCE"}},
      {"question": {"hi":"मौर्य राजधानी?","pa":"ਮੌਰਿਆ ਰਾਜਧਾਨੀ?","en":"Maurya capital?"}, "answer": {"hi":"पाटलिपुत्र (पटना)","pa":"ਪਾਟਲੀਪੁਤਰ (ਪਟਨਾ)","en":"Pataliputra (Patna)"}}
    ],
    "questions": [
      {"id":"q-mau-01","prompt":{"hi":"मौर्य साम्राज्य की स्थापना किसने की?","pa":"ਮੌਰਿਆ ਸਾਮਰਾਜ ਦੀ ਸਥਾਪਨਾ ਕਿਸਨੇ ਕੀਤੀ?","en":"Who founded the Maurya Empire?"},"options":[{"hi":"अशोक","pa":"ਅਸ਼ੋਕ","en":"Ashoka"},{"hi":"चंद्रगुप्त मौर्य","pa":"ਚੰਦਰਗੁਪਤ ਮੌਰਿਆ","en":"Chandragupta Maurya"},{"hi":"बृहद्रथ","pa":"ਬ੍ਰਿਹਦਰਥ","en":"Brihadratha"},{"hi":"बिंदुसार","pa":"ਬਿੰਦੂਸਾਰ","en":"Bindusara"}],"answerIndex":1,"explanation":{"hi":"322 ईसा पूर्व में चंद्रगुप्त मौर्य ने स्थापना की।","pa":"322 ਈਸਾ ਪੂਰਵ ਵਿੱਚ ਚੰਦਰਗੁਪਤ ਮੌਰਿਆ ਨੇ ਸਥਾਪਨਾ ਕੀਤੀ।","en":"Chandragupta Maurya founded the empire in 322 BCE."}},
      {"id":"q-mau-02","prompt":{"hi":"कलिंग युद्ध कब हुआ?","pa":"ਕਲਿੰਗਾ ਯੁੱਧ ਕਦੋਂ ਹੋਇਆ?","en":"When did the Kalinga War occur?"},"options":[{"hi":"322 ईसापूर्व","pa":"322 ਈਸਾ ਪੂਰਵ","en":"322 BCE"},{"hi":"273 ईसापूर्व","pa":"273 ਈਸਾ ਪੂਰਵ","en":"273 BCE"},{"hi":"261 ईसापूर्व","pa":"261 ਈਸਾ ਪੂਰਵ","en":"261 BCE"},{"hi":"185 ईसापूर्व","pa":"185 ਈਸਾ ਪੂਰਵ","en":"185 BCE"}],"answerIndex":2,"explanation":{"hi":"कलिंग युद्ध 261 ईसा पूर्व में हुआ। इसके बाद अशोक ने धम्म अपनाया।","pa":"ਕਲਿੰਗਾ ਯੁੱਧ 261 ਈਸਾ ਪੂਰਵ ਵਿੱਚ ਹੋਇਆ।","en":"Kalinga War occurred in 261 BCE, after which Ashoka adopted Dhamma."}},
      {"id":"q-mau-03","prompt":{"hi":"चाणक्य का ग्रंथ कौन सा है?","pa":"ਚਾਣਕਯ ਦਾ ਗ੍ਰੰਥ ਕਿਹੜਾ ਹੈ?","en":"What is Chanakya's treatise?"},"options":[{"hi":"इंडिका","pa":"ਇੰਡਿਕਾ","en":"Indica"},{"hi":"अर्थशास्त्र","pa":"ਅਰਥਸ਼ਾਸਤਰ","en":"Arthashastra"},{"hi":"महाभारत","pa":"ਮਹਾਭਾਰਤ","en":"Mahabharata"},{"hi":"रामायण","pa":"ਰਾਮਾਯਣ","en":"Ramayana"}],"answerIndex":1,"explanation":{"hi":"चाणक्य ने 'अर्थशास्त्र' लिखा।","pa":"ਚਾਣਕਯ ਨੇ 'ਅਰਥਸ਼ਾਸਤਰ' ਲਿਖੀ।","en":"Chanakya wrote the 'Arthashastra'."}},
      {"id":"q-mau-04","prompt":{"hi":"भारत का राष्ट्रीय प्रतीक कहाँ से लिया गया है?","pa":"ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰੀ ਚਿੰਨ੍ਹ ਕਿੱਥੋਂ ਲਿਆ ਗਿਆ?","en":"India's national emblem is taken from where?"},"options":[{"hi":"बोधगया","pa":"ਬੋਧਗਯਾ","en":"Bodh Gaya"},{"hi":"सारनाथ अशोक स्तंभ","pa":"ਸਾਰਨਾਥ ਅਸ਼ੋਕ ਥੰਮ੍ਹ","en":"Sarnath Ashoka Pillar"},{"hi":"अमरावती","pa":"ਅਮਰਾਵਤੀ","en":"Amaravati"},{"hi":"पाटलिपुत्र","pa":"ਪਾਟਲੀਪੁਤਰ","en":"Pataliputra"}],"answerIndex":1,"explanation":{"hi":"सारनाथ के अशोक स्तंभ के शीर्ष (चार शेर) से भारत का राजचिह्न बनाया गया।","pa":"ਸਾਰਨਾਥ ਦੇ ਅਸ਼ੋਕ ਥੰਮ੍ਹ ਤੋਂ ਭਾਰਤ ਦਾ ਰਾਜਚਿੰਨ੍ਹ ਬਣਾਇਆ ਗਿਆ।","en":"India's national emblem (four lions) comes from the top of the Ashoka pillar at Sarnath."}},
      {"id":"q-mau-05","prompt":{"hi":"मेगस्थनीज कौन था?","pa":"ਮੈਗਸਥਨੀਜ਼ ਕੌਣ ਸੀ?","en":"Who was Megasthenes?"},"options":[{"hi":"मौर्य राजा","pa":"ਮੌਰਿਆ ਰਾਜਾ","en":"Maurya king"},{"hi":"बौद्ध भिक्षु","pa":"ਬੁੱਧ ਭਿਕਸ਼ੂ","en":"Buddhist monk"},{"hi":"यूनानी राजदूत","pa":"ਯੂਨਾਨੀ ਰਾਜਦੂਤ","en":"Greek ambassador"},{"hi":"चीनी यात्री","pa":"ਚੀਨੀ ਯਾਤਰੀ","en":"Chinese traveller"}],"answerIndex":2,"explanation":{"hi":"मेगस्थनीज एक यूनानी राजदूत था जो चंद्रगुप्त के दरबार में आया।","pa":"ਮੈਗਸਥਨੀਜ਼ ਇੱਕ ਯੂਨਾਨੀ ਰਾਜਦੂਤ ਸੀ।","en":"Megasthenes was a Greek ambassador at Chandragupta's court."}},
      {"id":"q-mau-06","prompt":{"hi":"अशोक ने बौद्ध धर्म कब अपनाया?","pa":"ਅਸ਼ੋਕ ਨੇ ਬੁੱਧ ਧਰਮ ਕਦੋਂ ਅਪਣਾਇਆ?","en":"When did Ashoka adopt Buddhism?"},"options":[{"hi":"राज्यारोहण पर","pa":"ਗੱਦੀ ਤੇ ਬੈਠਣ ਵੇਲੇ","en":"At coronation"},{"hi":"कलिंग युद्ध के बाद","pa":"ਕਲਿੰਗਾ ਯੁੱਧ ਤੋਂ ਬਾਅਦ","en":"After Kalinga War"},{"hi":"बाल्यकाल में","pa":"ਬਚਪਨ ਵਿੱਚ","en":"In childhood"},{"hi":"मृत्यु से पहले","pa":"ਮੌਤ ਤੋਂ ਪਹਿਲਾਂ","en":"Before death"}],"answerIndex":1,"explanation":{"hi":"261 ईसापूर्व कलिंग युद्ध के बाद अशोक ने बौद्ध धर्म अपनाया।","pa":"261 ਈਸਾ ਪੂਰਵ ਕਲਿੰਗਾ ਯੁੱਧ ਤੋਂ ਬਾਅਦ ਅਸ਼ੋਕ ਨੇ ਬੁੱਧ ਧਰਮ ਅਪਣਾਇਆ।","en":"Ashoka adopted Buddhism after the Kalinga War of 261 BCE."}},
      {"id":"q-mau-07","prompt":{"hi":"मौर्य काल में किसानों से कितना कर लिया जाता था?","pa":"ਮੌਰਿਆ ਕਾਲ ਵਿੱਚ ਕਿਸਾਨਾਂ ਤੋਂ ਕਿੰਨਾ ਟੈਕਸ?","en":"How much tax did farmers pay in Maurya period?"},"options":[{"hi":"1/3","pa":"1/3","en":"1/3"},{"hi":"1/6","pa":"1/6","en":"1/6"},{"hi":"1/4","pa":"1/4","en":"1/4"},{"hi":"1/10","pa":"1/10","en":"1/10"}],"answerIndex":1,"explanation":{"hi":"उपज का 1/6 भाग कर था।","pa":"ਉਪਜ ਦਾ 1/6 ਭਾਗ ਟੈਕਸ ਸੀ।","en":"Tax was 1/6 of the produce."}},
      {"id":"q-mau-08","prompt":{"hi":"मौर्य साम्राज्य का अंत किसने किया?","pa":"ਮੌਰਿਆ ਸਾਮਰਾਜ ਦਾ ਅੰਤ ਕਿਸਨੇ ਕੀਤਾ?","en":"Who ended the Maurya Empire?"},"options":[{"hi":"सेल्यूकस","pa":"ਸੇਲਿਊਕਸ","en":"Seleucus"},{"hi":"पुष्यमित्र शुंग","pa":"ਪੁਸ਼ਯਮਿੱਤਰ ਸ਼ੁੰਗ","en":"Pushyamitra Shunga"},{"hi":"कनिष्क","pa":"ਕਨਿਸ਼ਕ","en":"Kanishka"},{"hi":"समुद्रगुप्त","pa":"ਸਮੁੰਦਰਗੁਪਤ","en":"Samudragupta"}],"answerIndex":1,"explanation":{"hi":"185 ईसापूर्व में पुष्यमित्र शुंग ने बृहद्रथ को मारकर शुंग वंश बनाया।","pa":"185 ਈਸਾ ਪੂਰਵ ਵਿੱਚ ਪੁਸ਼ਯਮਿੱਤਰ ਸ਼ੁੰਗ ਨੇ ਬ੍ਰਿਹਦਰਥ ਨੂੰ ਮਾਰਿਆ।","en":"In 185 BCE Pushyamitra Shunga killed Brihadratha and founded the Shunga dynasty."}},
      {"id":"q-mau-09","prompt":{"hi":"अशोक के पुत्र जो श्रीलंका गए?","pa":"ਅਸ਼ੋਕ ਦਾ ਪੁੱਤਰ ਜੋ ਸ਼੍ਰੀਲੰਕਾ ਗਿਆ?","en":"Ashoka's son who went to Sri Lanka?"},"options":[{"hi":"राहुल","pa":"ਰਾਹੁਲ","en":"Rahul"},{"hi":"महेंद्र","pa":"ਮਹੇਂਦਰ","en":"Mahendra"},{"hi":"बिंदुसार","pa":"ਬਿੰਦੂਸਾਰ","en":"Bindusara"},{"hi":"कुणाल","pa":"ਕੁਣਾਲ","en":"Kunala"}],"answerIndex":1,"explanation":{"hi":"पुत्र महेंद्र और पुत्री संघमित्रा श्रीलंका गए।","pa":"ਪੁੱਤਰ ਮਹੇਂਦਰ ਅਤੇ ਧੀ ਸੰਘਮਿੱਤਰਾ ਸ਼੍ਰੀਲੰਕਾ ਗਏ।","en":"Son Mahendra and daughter Sanghamitra went to Sri Lanka."}},
      {"id":"q-mau-10","prompt":{"hi":"अशोक का धम्म किसमें शामिल नहीं था?","pa":"ਅਸ਼ੋਕ ਦੇ ਧੰਮ ਵਿੱਚ ਕੀ ਸ਼ਾਮਲ ਨਹੀਂ ਸੀ?","en":"What was NOT part of Ashoka's Dhamma?"},"options":[{"hi":"सत्य","pa":"ਸੱਚ","en":"Truth"},{"hi":"अहिंसा","pa":"ਅਹਿੰਸਾ","en":"Non-violence"},{"hi":"युद्ध","pa":"ਯੁੱਧ","en":"War"},{"hi":"करुणा","pa":"ਦਇਆ","en":"Compassion"}],"answerIndex":2,"explanation":{"hi":"धम्म में युद्ध नहीं था — बल्कि कलिंग के बाद अशोक ने युद्ध त्यागा।","pa":"ਧੰਮ ਵਿੱਚ ਯੁੱਧ ਨਹੀਂ ਸੀ।","en":"War was not part of Dhamma — Ashoka renounced war after Kalinga."}}
    ],
    "sources": [{"title": "NCERT History XI", "url": "https://ncert.nic.in/textbook.php?lhis1=0-9"}],
    "videos": [{"title": "Maurya Empire - NIOS History (YouTube)", "url": "https://www.youtube.com/watch?v=E5yBBfOEBdw"}],
    "documents": []
  },
  {
    "id": "history-mughal-empire",
    "subject": "History",
    "unit": "Medieval India",
    "title": {"hi": "मुगल साम्राज्य: बाबर से औरंगजेब तक", "pa": "ਮੁਗਲ ਸਾਮਰਾਜ: ਬਾਬਰ ਤੋਂ ਔਰੰਗਜ਼ੇਬ ਤੱਕ", "en": "Mughal Empire: Babur to Aurangzeb"},
    "sections": [
      {
        "heading": {"hi": "बाबर और मुगल साम्राज्य की नींव", "pa": "ਬਾਬਰ ਅਤੇ ਮੁਗਲ ਸਾਮਰਾਜ ਦੀ ਨੀਂਹ", "en": "Babur and the Foundation of Mughal Empire"},
        "text": {
          "hi": "मुगल साम्राज्य की स्थापना 1526 में बाबर ने पानीपत की पहली लड़ाई में इब्राहिम लोदी को हराकर की। बाबर तैमूर और चंगेज खान का वंशज था।\n\nबाबर के पास तोपखाना था जो भारत में नई बात थी। उसने 'बाबरनामा' लिखी जो आत्मकथा का एक उत्कृष्ट उदाहरण है।\n\nबाबर के बाद हुमायूं राजा बना, लेकिन वह शेरशाह सूरी से पराजित होकर 15 वर्ष के लिए निर्वासित हो गया। 1555 में हुमायूं ने पुनः दिल्ली पर अधिकार किया।",
          "pa": "ਮੁਗਲ ਸਾਮਰਾਜ ਦੀ ਸਥਾਪਨਾ 1526 ਵਿੱਚ ਬਾਬਰ ਨੇ ਪਾਣੀਪਤ ਦੀ ਪਹਿਲੀ ਲੜਾਈ ਵਿੱਚ ਇਬਰਾਹੀਮ ਲੋਧੀ ਨੂੰ ਹਰਾ ਕੇ ਕੀਤੀ। ਬਾਬਰ ਨੇ 'ਬਾਬਰਨਾਮਾ' ਲਿਖੀ।",
          "en": "The Mughal Empire was founded in 1526 by Babur, who defeated Ibrahim Lodi in the First Battle of Panipat. Babur was a descendant of Timur and Genghis Khan.\n\nBabur introduced gunpowder artillery, new to India. He wrote the 'Baburnama', an outstanding autobiography. After Babur, Humayun lost to Sher Shah Suri and was exiled for 15 years, reclaiming Delhi in 1555."
        }
      },
      {
        "heading": {"hi": "अकबर: साम्राज्य का स्वर्ण काल", "pa": "ਅਕਬਰ: ਸਾਮਰਾਜ ਦਾ ਸੁਨਹਿਰੀ ਕਾਲ", "en": "Akbar: The Golden Age"},
        "text": {
          "hi": "अकबर (1556-1605) मुगल वंश का सबसे महान शासक था। उसने हिंदू-मुस्लिम एकता के लिए 'दीन-ए-इलाही' धर्म चलाया। सभी धर्मों के विद्वानों को इबादतखाना में बुलाया।\n\nअकबर ने राजपूतों से वैवाहिक संबंध स्थापित किए। राजपूत राजा मान सिंह उसके सेनापति थे। जजिया कर समाप्त किया।\n\nनवरत्न: अबुल फजल, फैजी, बीरबल, तानसेन, राजा मान सिंह, टोडरमल, अब्दुर रहीम खान-ए-खाना, मुल्ला दो प्याज़ा, फकीर अज़ियाओ दिन।\n\nआइन-ए-अकबरी और अकबरनामा अबुल फजल ने लिखे — अकबर के शासन का प्रमुख स्रोत।",
          "pa": "ਅਕਬਰ (1556-1605) ਮੁਗਲ ਵੰਸ਼ ਦਾ ਸਭ ਤੋਂ ਮਹਾਨ ਸ਼ਾਸਕ ਸੀ। 'ਦੀਨ-ਏ-ਇਲਾਹੀ' ਧਰਮ ਚਲਾਇਆ। ਜਜ਼ੀਆ ਟੈਕਸ ਖਤਮ ਕੀਤਾ। ਨੌ-ਰਤਨ ਉਸਦੇ ਦਰਬਾਰ ਵਿੱਚ ਸਨ।",
          "en": "Akbar (1556-1605) was the greatest Mughal ruler. He promoted Hindu-Muslim unity through 'Din-i-Ilahi'. He abolished jizya (tax on non-Muslims) and formed matrimonial alliances with Rajputs. His court had the Nine Jewels (Navratna) including Birbal, Tansen, Todar Mal. Abul Fazl wrote Ain-i-Akbari and Akbarnama — key sources."
        }
      },
      {
        "heading": {"hi": "जहाँगीर, शाहजहाँ और कला-स्थापत्य", "pa": "ਜਹਾਂਗੀਰ, ਸ਼ਾਹਜਹਾਂ ਅਤੇ ਕਲਾ", "en": "Jahangir, Shah Jahan and Art & Architecture"},
        "text": {
          "hi": "जहाँगीर (1605-1627) अपनी चित्रकला की रुचि के लिए प्रसिद्ध था। उसकी पत्नी नूरजहाँ बहुत प्रभावशाली थीं। उसने 'तुज़क-ए-जहाँगीरी' लिखी।\n\nशाहजहाँ (1628-1658) को वास्तुकला से विशेष प्रेम था। उसने ताजमहल, लाल किला और जामा मस्जिद बनवाई। ताजमहल उसकी पत्नी मुमताज महल की याद में बनाया।\n\nशाहजहाँ के काल को 'मुगल स्थापत्य का स्वर्ण युग' कहा जाता है। उसके दरबार में संगीत और साहित्य का भी विकास हुआ।",
          "pa": "ਸ਼ਾਹਜਹਾਂ ਨੇ ਤਾਜਮਹਲ, ਲਾਲ ਕਿਲ੍ਹਾ ਅਤੇ ਜਾਮਾ ਮਸਜਿਦ ਬਣਵਾਈ। ਤਾਜਮਹਲ ਮੁਮਤਾਜ਼ ਦੀ ਯਾਦ ਵਿੱਚ ਬਣਾਇਆ।",
          "en": "Jahangir (1605-1627) was known for his love of painting. He wrote 'Tuzk-i-Jahangiri'. Shah Jahan (1628-1658) built the Taj Mahal (in memory of Mumtaz Mahal), Red Fort and Jama Masjid. His era is called the 'Golden Age of Mughal Architecture'."
        }
      },
      {
        "heading": {"hi": "औरंगजेब और साम्राज्य का पतन", "pa": "ਔਰੰਗਜ਼ੇਬ ਅਤੇ ਸਾਮਰਾਜ ਦਾ ਪਤਨ", "en": "Aurangzeb and Decline"},
        "text": {
          "hi": "औरंगजेब (1658-1707) ने शाहजहाँ को कैद करके सत्ता प्राप्त की। वह कट्टर सुन्नी मुसलमान था। उसने जजिया कर फिर लगाया और अनेक मंदिर तोड़े।\n\nदक्षिण में 27 साल लड़ने के बाद मराठा शक्ति को दबा नहीं सका। शिवाजी ने मराठा साम्राज्य खड़ा किया जो मुगलों के लिए बड़ी चुनौती थी।\n\nऔरंगजेब की मृत्यु के बाद साम्राज्य तेजी से टूटा। 1739 में नादिरशाह ने दिल्ली लूटी। 1857 के बाद अंग्रेजों ने अंतिम मुगल बहादुर शाह जफर को निर्वासित किया।",
          "pa": "ਔਰੰਗਜ਼ੇਬ (1658-1707) ਨੇ ਜਜ਼ੀਆ ਟੈਕਸ ਵਾਪਸ ਲਾਇਆ। ਸ਼ਿਵਾਜੀ ਦੀ ਮਰਾਠਾ ਸ਼ਕਤੀ ਮੁਗਲਾਂ ਲਈ ਵੱਡੀ ਚੁਣੌਤੀ ਸੀ।",
          "en": "Aurangzeb (1658-1707) reimposed jizya and destroyed temples. He spent 27 years fighting Marathas led by Shivaji but could not subdue them. After his death the empire collapsed rapidly. In 1739 Nadir Shah plundered Delhi. The last Mughal Bahadur Shah Zafar was exiled by British in 1858."
        }
      }
    ],
    "keypoints": [
      {"hi": "पानीपत प्रथम: 1526, बाबर ने इब्राहिम लोदी को हराया", "pa": "ਪਾਣੀਪਤ ਪਹਿਲੀ: 1526, ਬਾਬਰ ਜਿੱਤਿਆ", "en": "First Panipat: 1526, Babur defeated Ibrahim Lodi"},
      {"hi": "अकबर ने दीन-ए-इलाही चलाया, जजिया हटाया", "pa": "ਅਕਬਰ ਨੇ ਦੀਨ-ਏ-ਇਲਾਹੀ ਅਤੇ ਜਜ਼ੀਆ ਹਟਾਇਆ", "en": "Akbar started Din-i-Ilahi and abolished jizya"},
      {"hi": "ताजमहल: शाहजहाँ ने मुमताज की याद में बनाया", "pa": "ਤਾਜਮਹਲ: ਸ਼ਾਹਜਹਾਂ ਨੇ ਮੁਮਤਾਜ਼ ਦੀ ਯਾਦ ਵਿੱਚ ਬਣਾਇਆ", "en": "Taj Mahal: Built by Shah Jahan in memory of Mumtaz"},
      {"hi": "अकबरनामा और आइन-ए-अकबरी: अबुल फजल द्वारा", "pa": "ਅਕਬਰਨਾਮਾ ਅਤੇ ਆਇਨ-ਏ-ਅਕਬਰੀ: ਅਬੁਲ ਫਜ਼ਲ", "en": "Akbarnama and Ain-i-Akbari written by Abul Fazl"},
      {"hi": "औरंगजेब ने जजिया वापस लगाया", "pa": "ਔਰੰਗਜ਼ੇਬ ਨੇ ਜਜ਼ੀਆ ਵਾਪਸ ਲਾਇਆ", "en": "Aurangzeb reimposed jizya tax"}
    ],
    "summary": {
      "hi": "मुगल साम्राज्य (1526-1858) — बाबर ने 1526 में स्थापित किया। अकबर (1556-1605) सबसे महान। दीन-ए-इलाही, जजिया हटाया, नवरत्न। शाहजहाँ ने ताजमहल बनाया। औरंगजेब की कठोर नीति से साम्राज्य कमजोर हुआ।",
      "pa": "ਮੁਗਲ ਸਾਮਰਾਜ 1526-1858। ਅਕਬਰ ਸਭ ਤੋਂ ਮਹਾਨ। ਤਾਜਮਹਲ ਸ਼ਾਹਜਹਾਂ ਨੇ ਬਣਾਇਆ।",
      "en": "Mughal Empire (1526-1858) — Founded by Babur. Akbar was greatest (Din-i-Ilahi, no jizya, Navratna). Shah Jahan built Taj Mahal. Aurangzeb's harsh policies weakened the empire."
    },
    "flashcards": [
      {"question": {"hi":"मुगल साम्राज्य की स्थापना कब और किसने की?","pa":"ਮੁਗਲ ਸਾਮਰਾਜ ਕਦੋਂ ਅਤੇ ਕਿਸਨੇ ਸਥਾਪਿਤ ਕੀਤਾ?","en":"When and by whom was the Mughal Empire founded?"}, "answer": {"hi":"1526 ई. में बाबर ने — पानीपत की पहली लड़ाई","pa":"1526 ਵਿੱਚ ਬਾਬਰ — ਪਾਣੀਪਤ ਦੀ ਪਹਿਲੀ ਲੜਾਈ","en":"1526 CE by Babur — First Battle of Panipat"}},
      {"question": {"hi":"ताजमहल किसने और क्यों बनाया?","pa":"ਤਾਜਮਹਲ ਕਿਸਨੇ ਅਤੇ ਕਿਉਂ ਬਣਾਇਆ?","en":"Who built the Taj Mahal and why?"}, "answer": {"hi":"शाहजहाँ ने अपनी पत्नी मुमताज महल की याद में","pa":"ਸ਼ਾਹਜਹਾਂ ਨੇ ਆਪਣੀ ਪਤਨੀ ਮੁਮਤਾਜ਼ ਦੀ ਯਾਦ ਵਿੱਚ","en":"Shah Jahan built it in memory of his wife Mumtaz Mahal"}},
      {"question": {"hi":"अकबर का 'दीन-ए-इलाही' क्या था?","pa":"ਅਕਬਰ ਦਾ 'ਦੀਨ-ਏ-ਇਲਾਹੀ' ਕੀ ਸੀ?","en":"What was Akbar's 'Din-i-Ilahi'?"}, "answer": {"hi":"सभी धर्मों की अच्छाइयों को मिलाकर बनाया धर्म","pa":"ਸਾਰੇ ਧਰਮਾਂ ਦੀਆਂ ਚੰਗਿਆਈਆਂ ਤੋਂ ਬਣਾਇਆ ਧਰਮ","en":"A religion combining the best of all faiths, promoted by Akbar"}},
      {"question": {"hi":"'अकबरनामा' किसने लिखी?","pa":"'ਅਕਬਰਨਾਮਾ' ਕਿਸਨੇ ਲਿਖੀ?","en":"Who wrote the 'Akbarnama'?"}, "answer": {"hi":"अबुल फजल","pa":"ਅਬੁਲ ਫਜ਼ਲ","en":"Abul Fazl"}},
      {"question": {"hi":"औरंगजेब ने कौन सा कर फिर लगाया?","pa":"ਔਰੰਗਜ਼ੇਬ ਨੇ ਕਿਹੜਾ ਟੈਕਸ ਵਾਪਸ ਲਾਇਆ?","en":"Which tax did Aurangzeb reimpose?"}, "answer": {"hi":"जजिया (गैर-मुसलमानों पर कर)","pa":"ਜਜ਼ੀਆ (ਗੈਰ-ਮੁਸਲਮਾਨਾਂ 'ਤੇ ਟੈਕਸ)","en":"Jizya (tax on non-Muslims)"}}
    ],
    "questions": [
      {"id":"q-mug-01","prompt":{"hi":"मुगल साम्राज्य की स्थापना कब हुई?","pa":"ਮੁਗਲ ਸਾਮਰਾਜ ਦੀ ਸਥਾਪਨਾ ਕਦੋਂ?","en":"When was the Mughal Empire founded?"},"options":[{"hi":"1498","pa":"1498","en":"1498"},{"hi":"1526","pa":"1526","en":"1526"},{"hi":"1556","pa":"1556","en":"1556"},{"hi":"1605","pa":"1605","en":"1605"}],"answerIndex":1,"explanation":{"hi":"1526 में पानीपत की पहली लड़ाई में बाबर ने इब्राहिम लोदी को हराकर मुगल साम्राज्य की स्थापना की।","pa":"1526 ਵਿੱਚ ਬਾਬਰ ਨੇ ਸਥਾਪਨਾ ਕੀਤੀ।","en":"In 1526, Babur defeated Ibrahim Lodi in First Battle of Panipat."}},
      {"id":"q-mug-02","prompt":{"hi":"ताजमहल कहाँ स्थित है?","pa":"ਤਾਜਮਹਲ ਕਿੱਥੇ ਸਥਿਤ ਹੈ?","en":"Where is the Taj Mahal located?"},"options":[{"hi":"दिल्ली","pa":"ਦਿੱਲੀ","en":"Delhi"},{"hi":"आगरा","pa":"ਆਗਰਾ","en":"Agra"},{"hi":"लखनऊ","pa":"ਲਖਨਊ","en":"Lucknow"},{"hi":"जयपुर","pa":"ਜੈਪੁਰ","en":"Jaipur"}],"answerIndex":1,"explanation":{"hi":"ताजमहल आगरा में स्थित है, यमुना नदी के किनारे।","pa":"ਤਾਜਮਹਲ ਆਗਰਾ ਵਿੱਚ ਯਮੁਨਾ ਦੇ ਕਿਨਾਰੇ ਹੈ।","en":"The Taj Mahal is located in Agra on the banks of the Yamuna river."}},
      {"id":"q-mug-03","prompt":{"hi":"'आइन-ए-अकबरी' किसने लिखी?","pa":"'ਆਇਨ-ਏ-ਅਕਬਰੀ' ਕਿਸਨੇ ਲਿਖੀ?","en":"Who wrote 'Ain-i-Akbari'?"},"options":[{"hi":"बीरबल","pa":"ਬੀਰਬਲ","en":"Birbal"},{"hi":"अबुल फजल","pa":"ਅਬੁਲ ਫਜ਼ਲ","en":"Abul Fazl"},{"hi":"तानसेन","pa":"ਤਾਨਸੇਨ","en":"Tansen"},{"hi":"फैजी","pa":"ਫੈਜ਼ੀ","en":"Faizi"}],"answerIndex":1,"explanation":{"hi":"अबुल फजल ने 'अकबरनामा' और 'आइन-ए-अकबरी' लिखी।","pa":"ਅਬੁਲ ਫਜ਼ਲ ਨੇ 'ਅਕਬਰਨਾਮਾ' ਅਤੇ 'ਆਇਨ-ਏ-ਅਕਬਰੀ' ਲਿਖੀ।","en":"Abul Fazl wrote both 'Akbarnama' and 'Ain-i-Akbari'."}},
      {"id":"q-mug-04","prompt":{"hi":"अकबर ने जजिया कर क्यों हटाया?","pa":"ਅਕਬਰ ਨੇ ਜਜ਼ੀਆ ਕਿਉਂ ਹਟਾਇਆ?","en":"Why did Akbar abolish jizya?"},"options":[{"hi":"आर्थिक कारण","pa":"ਆਰਥਿਕ ਕਾਰਨ","en":"Economic reasons"},{"hi":"हिंदू-मुस्लिम एकता के लिए","pa":"ਹਿੰਦੂ-ਮੁਸਲਿਮ ਏਕਤਾ ਲਈ","en":"For Hindu-Muslim unity"},{"hi":"मंदिरों को बचाने","pa":"ਮੰਦਰਾਂ ਨੂੰ ਬਚਾਉਣ","en":"To protect temples"},{"hi":"विदेशी दबाव","pa":"ਵਿਦੇਸ਼ੀ ਦਬਾਅ","en":"Foreign pressure"}],"answerIndex":1,"explanation":{"hi":"अकबर ने सभी धर्मों में समानता और हिंदू-मुस्लिम एकता को बढ़ावा देने के लिए जजिया हटाया।","pa":"ਅਕਬਰ ਨੇ ਹਿੰਦੂ-ਮੁਸਲਿਮ ਏਕਤਾ ਲਈ ਜਜ਼ੀਆ ਹਟਾਇਆ।","en":"Akbar abolished jizya to promote equality among religions and Hindu-Muslim unity."}},
      {"id":"q-mug-05","prompt":{"hi":"'बाबरनामा' क्या है?","pa":"'ਬਾਬਰਨਾਮਾ' ਕੀ ਹੈ?","en":"What is 'Baburnama'?"},"options":[{"hi":"अकबर की जीवनी","pa":"ਅਕਬਰ ਦੀ ਜੀਵਨੀ","en":"Biography of Akbar"},{"hi":"बाबर की आत्मकथा","pa":"ਬਾਬਰ ਦੀ ਆਤਮਕਥਾ","en":"Babur's autobiography"},{"hi":"एक युद्ध का वर्णन","pa":"ਇੱਕ ਯੁੱਧ ਦਾ ਵਰਣਨ","en":"Description of a battle"},{"hi":"इतिहास ग्रंथ","pa":"ਇਤਿਹਾਸ ਗ੍ਰੰਥ","en":"History book"}],"answerIndex":1,"explanation":{"hi":"बाबरनामा बाबर की आत्मकथा है — मुगल काल के बारे में एक महत्वपूर्ण प्राथमिक स्रोत।","pa":"ਬਾਬਰਨਾਮਾ ਬਾਬਰ ਦੀ ਆਤਮਕਥਾ ਹੈ।","en":"Baburnama is Babur's autobiography — an important primary source on the Mughal period."}}
    ],
    "sources": [{"title": "NCERT History Class 12 - Themes in Indian History", "url": "https://ncert.nic.in/textbook.php?lhis1=0-9"}],
    "videos": [],
    "documents": []
  },
  {
    "id": "geography-physical-india",
    "subject": "Geography",
    "unit": "Physical geography",
    "title": {"hi": "भारत का भौतिक भूगोल: पर्वत, नदियाँ और मैदान", "pa": "ਭਾਰਤ ਦਾ ਭੌਤਿਕ ਭੂਗੋਲ: ਪਹਾੜ, ਨਦੀਆਂ ਅਤੇ ਮੈਦਾਨ", "en": "Physical Geography of India: Mountains, Rivers and Plains"},
    "sections": [
      {
        "heading": {"hi": "हिमालय पर्वत श्रृंखला", "pa": "ਹਿਮਾਲਿਆ ਪਰਬਤ ਲੜੀ", "en": "The Himalayan Mountain Ranges"},
        "text": {
          "hi": "हिमालय विश्व की सबसे नई और सबसे ऊँची पर्वत श्रृंखला है। यह उत्तर में भारत की सीमा बनाती है। इसमें तीन मुख्य श्रृंखलाएं हैं:\n\n1. हिमाद्रि (महान हिमालय): सबसे ऊँची — माउंट एवरेस्ट (8848 मीटर), K2 (8611 मीटर) यहीं हैं।\n2. हिमाचल (मध्य हिमालय): धौलाधार, पीर पंजाल, शिमला यहाँ हैं।\n3. शिवालिक (बाह्य हिमालय): सबसे दक्षिणी, दून, पटना, देहरादून जैसी घाटियाँ।\n\nहिमालय भारत के मानसून में महत्वपूर्ण भूमिका निभाता है। यह ठंडी उत्तरी हवाओं को रोकता है।",
          "pa": "ਹਿਮਾਲਿਆ ਵਿਸ਼ਵ ਦੀ ਸਭ ਤੋਂ ਨਵੀਂ ਅਤੇ ਉੱਚੀ ਪਰਬਤ ਲੜੀ ਹੈ। ਤਿੰਨ ਮੁੱਖ ਲੜੀਆਂ: ਹਿਮਾਦ੍ਰੀ, ਹਿਮਾਚਲ, ਸ਼ਿਵਾਲਿਕ। ਮਾਊਂਟ ਏਵਰੈਸਟ 8848 ਮੀਟਰ।",
          "en": "The Himalayas are the world's youngest and highest mountain range, forming India's northern boundary. Three main ranges:\n1. Himadri (Great Himalaya): Highest — Mt Everest (8848m), K2 (8611m).\n2. Himachal (Middle Himalaya): Dhauladhar, Pir Panjal.\n3. Shivalik (Outer Himalaya): Southernmost, with doon valleys.\n\nHimalayas play a key role in India's monsoon and block cold northern winds."
        }
      },
      {
        "heading": {"hi": "उत्तरी मैदान और प्रायद्वीपीय पठार", "pa": "ਉੱਤਰੀ ਮੈਦਾਨ ਅਤੇ ਪ੍ਰਾਇਦੀਪੀ ਪਠਾਰ", "en": "Northern Plains and Peninsular Plateau"},
        "text": {
          "hi": "उत्तरी मैदान गंगा, यमुना और ब्रह्मपुत्र नदियों की जलोढ़ मिट्टी से बना है। यह भारत का सबसे उपजाऊ क्षेत्र है — 7 लाख वर्ग किमी क्षेत्र।\n\nपश्चिम में पंजाब मैदान (सतलज-व्यास-रावी), मध्य में गंगा मैदान, पूर्व में ब्रह्मपुत्र मैदान।\n\nप्रायद्वीपीय पठार: यह पुरानी क्रिस्टलीय शैलों से बना है। दक्कन पठार इसका प्रमुख भाग है। औसत ऊंचाई 600-900 मीटर। पश्चिमी घाट और पूर्वी घाट इसकी सीमाएं बनाते हैं।",
          "pa": "ਉੱਤਰੀ ਮੈਦਾਨ ਗੰਗਾ, ਯਮੁਨਾ ਅਤੇ ਬ੍ਰਹਮਪੁੱਤਰ ਨਦੀਆਂ ਦੀ ਮਿੱਟੀ ਨਾਲ ਬਣਿਆ ਹੈ। ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਉਪਜਾਊ ਖੇਤਰ।",
          "en": "The Northern Plains are formed by alluvial deposits of the Ganga, Yamuna and Brahmaputra rivers. Most fertile region of India — 7 lakh sq km.\n\nWest: Punjab plain (Sutlej-Beas-Ravi), Central: Ganga plain, East: Brahmaputra plain.\n\nPeninsular Plateau: Made of ancient crystalline rocks. Deccan Plateau is its main part (600-900m elevation). Bounded by Western and Eastern Ghats."
        }
      },
      {
        "heading": {"hi": "भारत की प्रमुख नदियाँ", "pa": "ਭਾਰਤ ਦੀਆਂ ਮੁੱਖ ਨਦੀਆਂ", "en": "Major Rivers of India"},
        "text": {
          "hi": "हिमालय से निकलने वाली नदियाँ (बारहमासी):\n- गंगा: गंगोत्री से बंगाल की खाड़ी तक, 2525 किमी\n- यमुना: यमुनोत्री से प्रयागराज में गंगा में मिलती है\n- ब्रह्मपुत्र: तिब्बत से — भारत की सबसे बड़ी नदी (चौड़ाई में)\n- सिंधु: तिब्बत से — पाकिस्तान होते हुए अरब सागर\n\nप्रायद्वीपीय नदियाँ (मौसमी):\n- नर्मदा, महानदी, गोदावरी, कृष्णा, कावेरी — अरब सागर/बंगाल की खाड़ी\n\nपंजाब की नदियाँ: सतलज, व्यास, रावी (पाकिस्तान होते हुए सिंधु में)।",
          "pa": "ਗੰਗਾ: 2525 ਕਿਮੀ, ਗੰਗੋਤਰੀ ਤੋਂ ਬੰਗਾਲ ਦੀ ਖਾੜੀ। ਪੰਜਾਬ ਦੀਆਂ ਨਦੀਆਂ: ਸਤਲਜ, ਬਿਆਸ, ਰਾਵੀ।",
          "en": "Himalayan Rivers (perennial): Ganga (2525km, Gangotri to Bay of Bengal), Yamuna, Brahmaputra (widest river), Indus.\n\nPeninsular Rivers (seasonal): Narmada, Godavari, Krishna, Kaveri.\n\nPunjab Rivers: Sutlej, Beas, Ravi (part of Indus system)."
        }
      },
      {
        "heading": {"hi": "जलवायु क्षेत्र और परीक्षा बिंदु", "pa": "ਜਲਵਾਯੂ ਖੇਤਰ ਅਤੇ ਪਰੀਖਿਆ ਬਿੰਦੂ", "en": "Climate Regions and Exam Points"},
        "text": {
          "hi": "भारत में मुख्य जलवायु क्षेत्र:\n1. उष्णकटिबंधीय मानसूनी (अधिकांश भारत)\n2. उष्णकटिबंधीय शुष्क (राजस्थान)\n3. अर्ध-शुष्क (पंजाब, हरियाणा)\n4. उष्णकटिबंधीय आर्द्र (पश्चिमी तट)\n5. पर्वतीय (हिमालय)\n\nभारत की भौगोलिक स्थिति: अक्षांश 8°4' से 37°6' उत्तर, देशांतर 68°7' से 97°25' पूर्व। कर्क रेखा मध्य से गुजरती है।\n\nपरीक्षा में अक्सर पूछे जाने वाले: भारत की सबसे लंबी नदी (गंगा), सबसे बड़ा पठार (दक्कन), सबसे ऊँची चोटी (K2 — भारत में, K2 POK में है)।",
          "pa": "ਭਾਰਤ ਵਿੱਚ ਮੁੱਖ ਜਲਵਾਯੂ: ਊਸ਼ਣਕਟਿਬੰਧੀ ਮਾਨਸੂਨ, ਸ਼ੁਸ਼ਕ, ਪਹਾੜੀ। ਕਰਕ ਰੇਖਾ ਭਾਰਤ ਦੇ ਵਿਚਕਾਰੋਂ ਲੰਘਦੀ ਹੈ।",
          "en": "India's main climate zones: Tropical monsoon (most of India), Tropical dry (Rajasthan), Semi-arid (Punjab, Haryana), Tropical wet (western coast), Alpine (Himalaya).\n\nIndia's location: 8°4' to 37°6'N, 68°7' to 97°25'E. Tropic of Cancer passes through the middle.\n\nFrequently asked: Longest river in India (Ganga), largest plateau (Deccan), highest peak in India (Kangchenjunga — within India)."
        }
      }
    ],
    "keypoints": [
      {"hi": "हिमालय की तीन श्रृंखलाएं: हिमाद्रि, हिमाचल, शिवालिक", "pa": "ਹਿਮਾਲਿਆ ਦੀਆਂ ਤਿੰਨ ਲੜੀਆਂ: ਹਿਮਾਦ੍ਰੀ, ਹਿਮਾਚਲ, ਸ਼ਿਵਾਲਿਕ", "en": "Three Himalayan ranges: Himadri, Himachal, Shivalik"},
      {"hi": "उत्तरी मैदान: सबसे उपजाऊ क्षेत्र, जलोढ़ मिट्टी", "pa": "ਉੱਤਰੀ ਮੈਦਾਨ: ਸਭ ਤੋਂ ਉਪਜਾਊ, ਜਲੋਢ਼ ਮਿੱਟੀ", "en": "Northern Plains: Most fertile, alluvial soil"},
      {"hi": "गंगा: भारत की सबसे लंबी नदी (2525 किमी)", "pa": "ਗੰਗਾ: ਭਾਰਤ ਦੀ ਸਭ ਤੋਂ ਲੰਬੀ ਨਦੀ (2525 ਕਿਮੀ)", "en": "Ganga: India's longest river (2525 km)"},
      {"hi": "ਦੱਕਨ ਪਠਾਰ: ਪ੍ਰਾਇਦੀਪੀ ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਪਠਾਰ", "pa": "ਦੱਕਨ ਪਠਾਰ: ਸਭ ਤੋਂ ਵੱਡਾ ਪਠਾਰ", "en": "Deccan Plateau: Largest plateau of peninsular India"},
      {"hi": "ਕਰਕ ਰੇਖਾ ਭਾਰਤ ਦੇ ਵਿਚਕਾਰੋਂ ਲੰਘਦੀ ਹੈ", "pa": "ਕਰਕ ਰੇਖਾ ਭਾਰਤ ਵਿੱਚੋਂ ਲੰਘਦੀ ਹੈ", "en": "Tropic of Cancer passes through the middle of India"}
    ],
    "summary": {
      "hi": "भारत का भूगोल: उत्तर में हिमालय (तीन श्रृंखलाएं), बीच में उपजाऊ मैदान, दक्षिण में दक्कन पठार। प्रमुख नदियाँ: गंगा, यमुना, ब्रह्मपुत्र (हिमालय से), गोदावरी, कावेरी (प्रायद्वीप)। पंजाब की नदियाँ: सतलज, व्यास, रावी।",
      "pa": "ਭਾਰਤ: ਉੱਤਰ ਵਿੱਚ ਹਿਮਾਲਿਆ, ਵਿਚਕਾਰ ਮੈਦਾਨ, ਦੱਖਣ ਵਿੱਚ ਦੱਕਨ ਪਠਾਰ। ਪੰਜਾਬ ਦੀਆਂ ਨਦੀਆਂ: ਸਤਲਜ, ਬਿਆਸ, ਰਾਵੀ।",
      "en": "India's geography: Himalayas in north (3 ranges), fertile plains in middle, Deccan plateau in south. Key rivers: Ganga, Yamuna, Brahmaputra (Himalayan); Godavari, Kaveri (peninsular). Punjab rivers: Sutlej, Beas, Ravi."
    },
    "flashcards": [
      {"question": {"hi":"हिमालय की तीन श्रृंखलाएं?","pa":"ਹਿਮਾਲਿਆ ਦੀਆਂ ਤਿੰਨ ਲੜੀਆਂ?","en":"Three ranges of Himalayas?"}, "answer": {"hi":"हिमाद्रि, हिमाचल, शिवालिक","pa":"ਹਿਮਾਦ੍ਰੀ, ਹਿਮਾਚਲ, ਸ਼ਿਵਾਲਿਕ","en":"Himadri, Himachal, Shivalik"}},
      {"question": {"hi":"माउंट एवरेस्ट की ऊंचाई?","pa":"ਮਾਊਂਟ ਏਵਰੈਸਟ ਦੀ ਉਚਾਈ?","en":"Height of Mount Everest?"}, "answer": {"hi":"8848 मीटर (नेपाल में)","pa":"8848 ਮੀਟਰ (ਨੇਪਾਲ ਵਿੱਚ)","en":"8848 metres (in Nepal)"}},
      {"question": {"hi":"गंगा की लंबाई?","pa":"ਗੰਗਾ ਦੀ ਲੰਬਾਈ?","en":"Length of Ganga?"}, "answer": {"hi":"2525 किमी","pa":"2525 ਕਿਮੀ","en":"2525 km"}},
      {"question": {"hi":"पंजाब की प्रमुख नदियाँ?","pa":"ਪੰਜਾਬ ਦੀਆਂ ਮੁੱਖ ਨਦੀਆਂ?","en":"Punjab's major rivers?"}, "answer": {"hi":"सतलज, व्यास, रावी","pa":"ਸਤਲਜ, ਬਿਆਸ, ਰਾਵੀ","en":"Sutlej, Beas, Ravi"}},
      {"question": {"hi":"भारत का सबसे उपजाऊ क्षेत्र?","pa":"ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਉਪਜਾਊ ਖੇਤਰ?","en":"Most fertile region of India?"}, "answer": {"hi":"उत्तरी मैदान (गंगा-यमुना मैदान)","pa":"ਉੱਤਰੀ ਮੈਦਾਨ","en":"Northern Plains (Ganga-Yamuna plains)"}},
      {"question": {"hi":"दक्कन पठार किससे बना है?","pa":"ਦੱਕਨ ਪਠਾਰ ਕਿਸ ਤੋਂ ਬਣਿਆ?","en":"What is the Deccan Plateau made of?"}, "answer": {"hi":"पुरानी क्रिस्टलीय शैलों (प्राचीन पठार)","pa":"ਪੁਰਾਣੀਆਂ ਕ੍ਰਿਸਟਲੀ ਚੱਟਾਨਾਂ","en":"Ancient crystalline rocks (oldest plateau)"}}
    ],
    "questions": [
      {"id":"q-geo-01","prompt":{"hi":"हिमालय की सबसे ऊँची श्रृंखला कौन सी है?","pa":"ਹਿਮਾਲਿਆ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਲੜੀ ਕਿਹੜੀ ਹੈ?","en":"Which is the highest Himalayan range?"},"options":[{"hi":"शिवालिक","pa":"ਸ਼ਿਵਾਲਿਕ","en":"Shivalik"},{"hi":"हिमाचल","pa":"ਹਿਮਾਚਲ","en":"Himachal"},{"hi":"हिमाद्रि","pa":"ਹਿਮਾਦ੍ਰੀ","en":"Himadri"},{"hi":"पीर पंजाल","pa":"ਪੀਰ ਪੰਜਾਲ","en":"Pir Panjal"}],"answerIndex":2,"explanation":{"hi":"हिमाद्रि (महान हिमालय) सबसे ऊँची श्रृंखला है जहाँ एवरेस्ट और K2 हैं।","pa":"ਹਿਮਾਦ੍ਰੀ ਸਭ ਤੋਂ ਉੱਚੀ ਲੜੀ ਹੈ।","en":"Himadri (Great Himalaya) is the highest range, containing Everest and K2."}},
      {"id":"q-geo-02","prompt":{"hi":"गंगा नदी की कुल लंबाई कितनी है?","pa":"ਗੰਗਾ ਨਦੀ ਦੀ ਕੁੱਲ ਲੰਬਾਈ?","en":"What is the total length of the Ganga river?"},"options":[{"hi":"2000 किमी","pa":"2000 ਕਿਮੀ","en":"2000 km"},{"hi":"2525 किमी","pa":"2525 ਕਿਮੀ","en":"2525 km"},{"hi":"3000 किमी","pa":"3000 ਕਿਮੀ","en":"3000 km"},{"hi":"1800 किमी","pa":"1800 ਕਿਮੀ","en":"1800 km"}],"answerIndex":1,"explanation":{"hi":"गंगा की लंबाई 2525 किमी है। यह गंगोत्री से बंगाल की खाड़ी तक बहती है।","pa":"ਗੰਗਾ ਦੀ ਲੰਬਾਈ 2525 ਕਿਮੀ ਹੈ।","en":"The Ganga is 2525 km long, flowing from Gangotri to the Bay of Bengal."}},
      {"id":"q-geo-03","prompt":{"hi":"पंजाब की प्रमुख नदियाँ कौन सी हैं?","pa":"ਪੰਜਾਬ ਦੀਆਂ ਮੁੱਖ ਨਦੀਆਂ ਕਿਹੜੀਆਂ ਹਨ?","en":"Which are the major rivers of Punjab?"},"options":[{"hi":"गंगा, यमुना, सरस्वती","pa":"ਗੰਗਾ, ਯਮੁਨਾ, ਸਰਸਵਤੀ","en":"Ganga, Yamuna, Saraswati"},{"hi":"सतलज, व्यास, रावी","pa":"ਸਤਲਜ, ਬਿਆਸ, ਰਾਵੀ","en":"Sutlej, Beas, Ravi"},{"hi":"नर्मदा, महानदी, कावेरी","pa":"ਨਰਮਦਾ, ਮਹਾਂਨਦੀ, ਕਾਵੇਰੀ","en":"Narmada, Mahanadi, Kaveri"},{"hi":"सिंधु, झेलम, चिनाब","pa":"ਸਿੰਧ, ਝੇਲਮ, ਚਨਾਬ","en":"Indus, Jhelum, Chenab"}],"answerIndex":1,"explanation":{"hi":"पंजाब की मुख्य नदियाँ सतलज, व्यास और रावी हैं। ये सभी सिंधु की सहायक नदियाँ हैं।","pa":"ਪੰਜਾਬ ਦੀਆਂ ਮੁੱਖ ਨਦੀਆਂ ਸਤਲਜ, ਬਿਆਸ ਅਤੇ ਰਾਵੀ ਹਨ।","en":"Punjab's major rivers are Sutlej, Beas and Ravi, all tributaries of the Indus."}},
      {"id":"q-geo-04","prompt":{"hi":"दक्कन पठार किसका हिस्सा है?","pa":"ਦੱਕਨ ਪਠਾਰ ਕਿਸ ਦਾ ਹਿੱਸਾ ਹੈ?","en":"The Deccan Plateau is part of which region?"},"options":[{"hi":"उत्तरी मैदान","pa":"ਉੱਤਰੀ ਮੈਦਾਨ","en":"Northern Plains"},{"hi":"प्रायद्वीपीय भारत","pa":"ਪ੍ਰਾਇਦੀਪੀ ਭਾਰਤ","en":"Peninsular India"},{"hi":"हिमालयी क्षेत्र","pa":"ਹਿਮਾਲਿਆਈ ਖੇਤਰ","en":"Himalayan region"},{"hi":"तटीय क्षेत्र","pa":"ਤੱਟੀ ਖੇਤਰ","en":"Coastal region"}],"answerIndex":1,"explanation":{"hi":"दक्कन पठार प्रायद्वीपीय भारत का मुख्य पठार है, जो पुरानी क्रिस्टलीय शैलों से बना है।","pa":"ਦੱਕਨ ਪਠਾਰ ਪ੍ਰਾਇਦੀਪੀ ਭਾਰਤ ਦਾ ਮੁੱਖ ਪਠਾਰ ਹੈ।","en":"The Deccan Plateau is the main plateau of peninsular India, made of ancient crystalline rocks."}},
      {"id":"q-geo-05","prompt":{"hi":"उत्तरी मैदान किस प्रकार की मिट्टी से बना है?","pa":"ਉੱਤਰੀ ਮੈਦਾਨ ਕਿਸ ਮਿੱਟੀ ਨਾਲ ਬਣਿਆ ਹੈ?","en":"What type of soil forms the Northern Plains?"},"options":[{"hi":"लाल मिट्टी","pa":"ਲਾਲ ਮਿੱਟੀ","en":"Red soil"},{"hi":"जलोढ़ मिट्टी","pa":"ਜਲੋਢ਼ ਮਿੱਟੀ","en":"Alluvial soil"},{"hi":"काली मिट्टी","pa":"ਕਾਲੀ ਮਿੱਟੀ","en":"Black soil"},{"hi":"लेटराइट मिट्टी","pa":"ਲੈਟਰਾਈਟ ਮਿੱਟੀ","en":"Laterite soil"}],"answerIndex":1,"explanation":{"hi":"उत्तरी मैदान नदियों द्वारा लाई गई जलोढ़ मिट्टी से बना है, इसीलिए यह भारत का सबसे उपजाऊ क्षेत्र है।","pa":"ਉੱਤਰੀ ਮੈਦਾਨ ਜਲੋਢ਼ ਮਿੱਟੀ ਨਾਲ ਬਣਿਆ ਹੈ।","en":"The Northern Plains are formed of alluvial soil brought by rivers, making it India's most fertile region."}}
    ],
    "sources": [{"title": "NCERT Geography XI - Fundamentals of Physical Geography", "url": "https://ncert.nic.in/textbook.php?kegy1=0-7"}],
    "videos": [],
    "documents": []
  }
]

pathlib.Path('content/research/history-geo-lessons.json').write_text(json.dumps(lessons, ensure_ascii=False, indent=2))
print(f'Written {len(lessons)} lessons')
