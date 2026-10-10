# -*- coding: utf-8 -*-
import json, pathlib

lessons = [
  {
    "id": "physics-laws-of-motion",
    "subject": "Physics",
    "unit": "Mechanics",
    "title": {"hi": "न्यूटन के गति के नियम", "pa": "ਨਿਊਟਨ ਦੇ ਗਤੀ ਦੇ ਨਿਯਮ", "en": "Newton's Laws of Motion"},
    "sections": [
      {
        "heading": {"hi": "पहला नियम: जड़ता का नियम", "pa": "ਪਹਿਲਾ ਨਿਯਮ: ਜੜਤਾ ਦਾ ਨਿਯਮ", "en": "First Law: Law of Inertia"},
        "text": {
          "hi": "न्यूटन का पहला नियम (जड़ता का नियम): प्रत्येक वस्तु अपनी विरामावस्था या एकसमान गति की अवस्था में तब तक बनी रहती है जब तक कि उस पर कोई बाह्य बल न लगाया जाए।\n\nजड़ता (Inertia): किसी वस्तु का अपनी अवस्था में बदलाव का विरोध करने का गुण जड़ता कहलाता है। द्रव्यमान जड़ता का माप है।\n\nउदाहरण: बस के अचानक रुकने पर यात्री आगे की ओर गिरते हैं (गति की जड़ता)। बस के अचानक चलने पर यात्री पीछे झुकते हैं (विरामावस्था की जड़ता)।\n\nइस नियम को 'गैलीलियो का नियम' भी कहते हैं क्योंकि न्यूटन से पहले गैलीलियो ने इसकी खोज की थी।",
          "pa": "ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਨਿਯਮ (ਜੜਤਾ ਦਾ ਨਿਯਮ): ਹਰ ਵਸਤੂ ਆਪਣੀ ਅਵਸਥਾ ਵਿੱਚ ਤਦ ਤੱਕ ਰਹਿੰਦੀ ਹੈ ਜਦੋਂ ਤੱਕ ਕੋਈ ਬਾਹਰੀ ਬਲ ਨਾ ਲੱਗੇ।\n\nਉਦਾਹਰਨ: ਬੱਸ ਦੇ ਅਚਾਨਕ ਰੁਕਣ 'ਤੇ ਯਾਤਰੀ ਅੱਗੇ ਡਿੱਗਦੇ ਹਨ।",
          "en": "Newton's First Law (Law of Inertia): Every object remains in its state of rest or uniform motion unless acted upon by an external force.\n\nInertia: The property of an object to resist change in its state. Mass is the measure of inertia.\n\nExamples: Passengers fall forward when a bus stops suddenly (inertia of motion). Passengers tilt backward when bus starts suddenly (inertia of rest).\n\nAlso called 'Galileo's Law' as Galileo discovered it before Newton."
        }
      },
      {
        "heading": {"hi": "दूसरा नियम: बल का नियम", "pa": "ਦੂਜਾ ਨਿਯਮ: ਬਲ ਦਾ ਨਿਯਮ", "en": "Second Law: Law of Force"},
        "text": {
          "hi": "न्यूटन का दूसरा नियम: किसी वस्तु का त्वरण (acceleration) उस पर लगाए गए बल के समानुपाती और उसके द्रव्यमान के व्युत्क्रमानुपाती होता है।\n\nसूत्र: F = ma\nजहाँ F = बल (newton में), m = द्रव्यमान (kg में), a = त्वरण (m/s² में)\n\nमहत्वपूर्ण बिंदु: बल वेक्टर (vector) राशि है। SI इकाई: न्यूटन (N)। 1 N = 1 kg × 1 m/s²\n\nसंवेग (Momentum): p = mv। बल = संवेग में परिवर्तन की दर: F = dp/dt\n\nउदाहरण: क्रिकेट गेंद को मारते समय खिलाड़ी हाथ पीछे खींचता है — बल का समय बढ़ाकर प्रभाव कम करता है।",
          "pa": "ਨਿਊਟਨ ਦਾ ਦੂਜਾ ਨਿਯਮ: F = ma\n\nਜਿੱਥੇ F = ਬਲ (newton), m = ਪੁੰਜ (kg), a = ਪ੍ਰਵੇਗ (m/s²)\n\nਸੰਵੇਗ = p = mv। ਬਲ = ਸੰਵੇਗ ਵਿੱਚ ਬਦਲਾਅ ਦੀ ਦਰ।",
          "en": "Newton's Second Law: The acceleration of an object is directly proportional to the net force and inversely proportional to its mass.\n\nFormula: F = ma\n(F = Force in newtons, m = mass in kg, a = acceleration in m/s²)\n\nMomentum: p = mv. Force = rate of change of momentum: F = dp/dt\n\nExample: A cricket fielder pulls the hand back while catching — increases time of force application, reduces impact."
        }
      },
      {
        "heading": {"hi": "तीसरा नियम: क्रिया-प्रतिक्रिया", "pa": "ਤੀਜਾ ਨਿਯਮ: ਕਿਰਿਆ-ਪ੍ਰਤੀਕਿਰਿਆ", "en": "Third Law: Action and Reaction"},
        "text": {
          "hi": "न्यूटन का तीसरा नियम: प्रत्येक क्रिया के बराबर और विपरीत दिशा में प्रतिक्रिया होती है।\n\n'Every action has an equal and opposite reaction.'\n\nमहत्वपूर्ण: क्रिया और प्रतिक्रिया एक ही वस्तु पर नहीं बल्कि अलग-अलग वस्तुओं पर लगती हैं।\n\nउदाहरण:\n1. बंदूक से गोली निकलने पर बंदूक पीछे झटका करती है (recoil)\n2. रॉकेट — नीचे गैस छोड़ता है, ऊपर जाता है\n3. तैराक — पानी को पीछे धकेलता है, आगे बढ़ता है\n4. उड़ता पक्षी — नीचे को वायु धकेलता है, ऊपर उठता है",
          "pa": "ਨਿਊਟਨ ਦਾ ਤੀਜਾ ਨਿਯਮ: ਹਰ ਕਿਰਿਆ ਦੇ ਬਰਾਬਰ ਅਤੇ ਉਲਟ ਦਿਸ਼ਾ ਵਿੱਚ ਪ੍ਰਤੀਕਿਰਿਆ ਹੁੰਦੀ ਹੈ।\n\nਉਦਾਹਰਨ: ਬੰਦੂਕ ਤੋਂ ਗੋਲੀ ਨਿਕਲਣ 'ਤੇ ਬੰਦੂਕ ਪਿੱਛੇ ਜਾਂਦੀ ਹੈ। ਰਾਕੇਟ ਗੈਸ ਹੇਠਾਂ ਛੱਡਦਾ ਹੈ, ਉੱਪਰ ਜਾਂਦਾ ਹੈ।",
          "en": "Newton's Third Law: Every action has an equal and opposite reaction.\n\nKey point: Action and reaction forces act on different objects, not the same object.\n\nExamples:\n1. Gun recoils when bullet is fired\n2. Rocket — pushes gas downward, moves upward\n3. Swimmer — pushes water backward, moves forward\n4. Bird — pushes air downward, rises upward"
        }
      },
      {
        "heading": {"hi": "दैनिक जीवन में अनुप्रयोग", "pa": "ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਉਪਯੋਗ", "en": "Applications in Daily Life"},
        "text": {
          "hi": "न्यूटन के नियमों के दैनिक जीवन में उपयोग:\n\n1. सीट बेल्ट: दुर्घटना में जड़ता के कारण शरीर आगे जाता है — सीट बेल्ट रोकती है।\n2. वाहन की ब्रेकिंग: F = ma — ब्रेक बल लगाकर त्वरण कम करते हैं।\n3. कुशीदार मैट: खिलाड़ी गिरने पर मैट बल का समय बढ़ाता है, चोट कम होती है।\n\nपरीक्षा में अक्सर पूछे जाने वाले:\n- F = ma का सूत्र और इकाई\n- जड़ता के उदाहरण\n- तीसरे नियम के उदाहरण (रॉकेट, बंदूक)\n- संवेग की परिभाषा और सूत्र",
          "pa": "ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਉਪਯੋਗ:\n1. ਸੀਟ ਬੈਲਟ: ਜੜਤਾ ਤੋਂ ਬਚਾਅ\n2. ਬ੍ਰੇਕਿੰਗ: F = ma\n3. ਕੁਸ਼ਨ ਮੈਟ: ਬਲ ਦਾ ਸਮਾਂ ਵਧਾ ਕੇ ਸੱਟ ਘੱਟ ਕਰਨਾ",
          "en": "Applications of Newton's Laws:\n1. Seat belts: Stop forward motion due to inertia in accidents\n2. Vehicle braking: F = ma — apply braking force to reduce acceleration\n3. Cushioned mats: Increase time of force application, reduce injury\n\nFrequently asked in exams:\n- Formula F = ma and units\n- Examples of inertia\n- Third law examples (rocket, gun)\n- Definition and formula of momentum"
        }
      }
    ],
    "keypoints": [
      {"hi": "पहला नियम: बाह्य बल के बिना अवस्था नहीं बदलती (जड़ता)", "pa": "ਪਹਿਲਾ ਨਿਯਮ: ਬਾਹਰੀ ਬਲ ਬਿਨਾਂ ਅਵਸਥਾ ਨਹੀਂ ਬਦਲਦੀ", "en": "First Law: State doesn't change without external force (inertia)"},
      {"hi": "दूसरा नियम: F = ma (बल = द्रव्यमान × त्वरण)", "pa": "ਦੂਜਾ ਨਿਯਮ: F = ma", "en": "Second Law: F = ma (Force = mass × acceleration)"},
      {"hi": "तीसरा नियम: प्रत्येक क्रिया की बराबर-विपरीत प्रतिक्रिया", "pa": "ਤੀਜਾ ਨਿਯਮ: ਹਰ ਕਿਰਿਆ ਦੀ ਬਰਾਬਰ-ਉਲਟ ਪ੍ਰਤੀਕਿਰਿਆ", "en": "Third Law: Every action has equal and opposite reaction"},
      {"hi": "बल की SI इकाई: न्यूटन (N) = kg·m/s²", "pa": "ਬਲ ਦੀ SI ਇਕਾਈ: ਨਿਊਟਨ (N)", "en": "SI unit of force: Newton (N) = kg·m/s²"},
      {"hi": "संवेग = द्रव्यमान × वेग (p = mv)", "pa": "ਸੰਵੇਗ = ਪੁੰਜ × ਵੇਗ (p = mv)", "en": "Momentum = mass × velocity (p = mv)"},
      {"hi": "रॉकेट का सिद्धांत: न्यूटन का तीसरा नियम", "pa": "ਰਾਕੇਟ ਦਾ ਸਿਧਾਂਤ: ਤੀਜਾ ਨਿਯਮ", "en": "Rocket works on Newton's Third Law"}
    ],
    "summary": {
      "hi": "न्यूटन के तीन गति नियम: (1) जड़ता — बाह्य बल के बिना अवस्था नहीं बदलती। (2) F = ma — बल द्रव्यमान और त्वरण का गुणनफल। (3) क्रिया-प्रतिक्रिया — प्रत्येक क्रिया की बराबर-विपरीत प्रतिक्रिया। ये नियम यांत्रिकी के आधार हैं।",
      "pa": "ਨਿਊਟਨ ਦੇ ਤਿੰਨ ਨਿਯਮ: (1) ਜੜਤਾ, (2) F = ma, (3) ਕਿਰਿਆ-ਪ੍ਰਤੀਕਿਰਿਆ।",
      "en": "Newton's Three Laws: (1) Inertia — state doesn't change without force. (2) F = ma — force equals mass times acceleration. (3) Action-reaction — every action has equal and opposite reaction. These are the foundation of classical mechanics."
    },
    "flashcards": [
      {"question": {"hi":"न्यूटन का पहला नियम क्या है?","pa":"ਨਿਊਟਨ ਦਾ ਪਹਿਲਾ ਨਿਯਮ ਕੀ ਹੈ?","en":"What is Newton's First Law?"}, "answer": {"hi":"किसी वस्तु की अवस्था तब तक नहीं बदलती जब तक बाह्य बल न लगे — जड़ता का नियम","pa":"ਬਾਹਰੀ ਬਲ ਤੋਂ ਬਿਨਾਂ ਅਵਸਥਾ ਨਹੀਂ ਬਦਲਦੀ — ਜੜਤਾ ਦਾ ਨਿਯਮ","en":"An object's state doesn't change without external force — Law of Inertia"}},
      {"question": {"hi":"F = ma में F, m, a क्या हैं?","pa":"F = ma ਵਿੱਚ F, m, a ਕੀ ਹਨ?","en":"In F = ma, what are F, m, a?"}, "answer": {"hi":"F = बल (Newton), m = द्रव्यमान (kg), a = त्वरण (m/s²)","pa":"F = ਬਲ (N), m = ਪੁੰਜ (kg), a = ਪ੍ਰਵੇਗ (m/s²)","en":"F = Force (Newtons), m = mass (kg), a = acceleration (m/s²)"}},
      {"question": {"hi":"न्यूटन का तीसरा नियम?","pa":"ਨਿਊਟਨ ਦਾ ਤੀਜਾ ਨਿਯਮ?","en":"Newton's Third Law?"}, "answer": {"hi":"प्रत्येक क्रिया के बराबर और विपरीत दिशा में प्रतिक्रिया होती है","pa":"ਹਰ ਕਿਰਿਆ ਦੇ ਬਰਾਬਰ ਅਤੇ ਉਲਟ ਪ੍ਰਤੀਕਿਰਿਆ ਹੁੰਦੀ ਹੈ","en":"Every action has an equal and opposite reaction"}},
      {"question": {"hi":"रॉकेट किस नियम पर काम करता है?","pa":"ਰਾਕੇਟ ਕਿਸ ਨਿਯਮ 'ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ?","en":"Which law does a rocket work on?"}, "answer": {"hi":"न्यूटन का तीसरा नियम — गैस नीचे, रॉकेट ऊपर","pa":"ਨਿਊਟਨ ਦਾ ਤੀਜਾ ਨਿਯਮ — ਗੈਸ ਹੇਠਾਂ, ਰਾਕੇਟ ਉੱਪਰ","en":"Newton's Third Law — gas goes down, rocket goes up"}},
      {"question": {"hi":"संवेग का सूत्र?","pa":"ਸੰਵੇਗ ਦਾ ਸੂਤਰ?","en":"Formula for momentum?"}, "answer": {"hi":"p = mv (द्रव्यमान × वेग)","pa":"p = mv (ਪੁੰਜ × ਵੇਗ)","en":"p = mv (mass × velocity)"}},
      {"question": {"hi":"बल की SI इकाई?","pa":"ਬਲ ਦੀ SI ਇਕਾਈ?","en":"SI unit of force?"}, "answer": {"hi":"न्यूटन (N) = 1 kg × 1 m/s²","pa":"ਨਿਊਟਨ (N) = 1 kg × 1 m/s²","en":"Newton (N) = 1 kg × 1 m/s²"}}
    ],
    "questions": [
      {"id":"q-phy-01","prompt":{"hi":"न्यूटन के दूसरे नियम का सूत्र क्या है?","pa":"ਨਿਊਟਨ ਦੇ ਦੂਜੇ ਨਿਯਮ ਦਾ ਸੂਤਰ ਕੀ ਹੈ?","en":"What is the formula for Newton's Second Law?"},"options":[{"hi":"F = mv","pa":"F = mv","en":"F = mv"},{"hi":"F = ma","pa":"F = ma","en":"F = ma"},{"hi":"F = m/a","pa":"F = m/a","en":"F = m/a"},{"hi":"F = a/m","pa":"F = a/m","en":"F = a/m"}],"answerIndex":1,"explanation":{"hi":"न्यूटन का दूसरा नियम: F = ma। बल = द्रव्यमान × त्वरण।","pa":"F = ma। ਬਲ = ਪੁੰਜ × ਪ੍ਰਵੇਗ।","en":"Newton's Second Law: F = ma. Force = mass × acceleration."}},
      {"id":"q-phy-02","prompt":{"hi":"बस के अचानक रुकने पर यात्री आगे क्यों झुकते हैं?","pa":"ਬੱਸ ਦੇ ਅਚਾਨਕ ਰੁਕਣ 'ਤੇ ਯਾਤਰੀ ਅੱਗੇ ਕਿਉਂ ਝੁਕਦੇ ਹਨ?","en":"Why do passengers lean forward when a bus stops suddenly?"},"options":[{"hi":"गुरुत्वाकर्षण के कारण","pa":"ਗੁਰੂਤਾਕਰਸ਼ਣ ਕਾਰਨ","en":"Due to gravity"},{"hi":"जड़ता के कारण","pa":"ਜੜਤਾ ਕਾਰਨ","en":"Due to inertia"},{"hi":"घर्षण के कारण","pa":"ਘਰਸ਼ਣ ਕਾਰਨ","en":"Due to friction"},{"hi":"तीसरे नियम के कारण","pa":"ਤੀਜੇ ਨਿਯਮ ਕਾਰਨ","en":"Due to third law"}],"answerIndex":1,"explanation":{"hi":"न्यूटन के पहले नियम के अनुसार — गति की जड़ता। यात्री का शरीर गतिमान था, बस रुकने पर भी शरीर आगे जाना चाहता है।","pa":"ਗਤੀ ਦੀ ਜੜਤਾ — ਯਾਤਰੀ ਦਾ ਸਰੀਰ ਗਤੀਮਾਨ ਸੀ।","en":"Due to inertia of motion (Newton's First Law). The passenger's body was in motion; it continues forward when bus stops."}},
      {"id":"q-phy-03","prompt":{"hi":"रॉकेट का सिद्धांत किस नियम पर आधारित है?","pa":"ਰਾਕੇਟ ਦਾ ਸਿਧਾਂਤ ਕਿਸ ਨਿਯਮ 'ਤੇ ਆਧਾਰਿਤ ਹੈ?","en":"Rocket's principle is based on which law?"},"options":[{"hi":"पहला नियम","pa":"ਪਹਿਲਾ ਨਿਯਮ","en":"First Law"},{"hi":"दूसरा नियम","pa":"ਦੂਜਾ ਨਿਯਮ","en":"Second Law"},{"hi":"तीसरा नियम","pa":"ਤੀਜਾ ਨਿਯਮ","en":"Third Law"},{"hi":"तीनों नियम","pa":"ਤਿੰਨੇ ਨਿਯਮ","en":"All three laws"}],"answerIndex":2,"explanation":{"hi":"रॉकेट न्यूटन के तीसरे नियम पर काम करता है — गैस नीचे (क्रिया), रॉकेट ऊपर (प्रतिक्रिया)।","pa":"ਰਾਕੇਟ ਤੀਜੇ ਨਿਯਮ 'ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ।","en":"Rocket works on Newton's Third Law — gas downward (action), rocket upward (reaction)."}},
      {"id":"q-phy-04","prompt":{"hi":"बल की SI इकाई क्या है?","pa":"ਬਲ ਦੀ SI ਇਕਾਈ ਕੀ ਹੈ?","en":"What is the SI unit of force?"},"options":[{"hi":"जूल (J)","pa":"ਜੂਲ (J)","en":"Joule (J)"},{"hi":"वाट (W)","pa":"ਵਾਟ (W)","en":"Watt (W)"},{"hi":"न्यूटन (N)","pa":"ਨਿਊਟਨ (N)","en":"Newton (N)"},{"hi":"पास्कल (Pa)","pa":"ਪਾਸਕਲ (Pa)","en":"Pascal (Pa)"}],"answerIndex":2,"explanation":{"hi":"बल की SI इकाई न्यूटन (N) है। 1 N = 1 kg × 1 m/s²।","pa":"ਬਲ ਦੀ SI ਇਕਾਈ ਨਿਊਟਨ (N) ਹੈ।","en":"The SI unit of force is Newton (N). 1 N = 1 kg·m/s²."}},
      {"id":"q-phy-05","prompt":{"hi":"5 kg की वस्तु पर 10 N बल लगाने से त्वरण कितना होगा?","pa":"5 kg ਦੀ ਵਸਤੂ 'ਤੇ 10 N ਬਲ ਲਾਉਣ ਨਾਲ ਪ੍ਰਵੇਗ?","en":"What acceleration will 10 N force produce on a 5 kg object?"},"options":[{"hi":"50 m/s²","pa":"50 m/s²","en":"50 m/s²"},{"hi":"2 m/s²","pa":"2 m/s²","en":"2 m/s²"},{"hi":"0.5 m/s²","pa":"0.5 m/s²","en":"0.5 m/s²"},{"hi":"15 m/s²","pa":"15 m/s²","en":"15 m/s²"}],"answerIndex":1,"explanation":{"hi":"F = ma → a = F/m = 10/5 = 2 m/s²","pa":"a = F/m = 10/5 = 2 m/s²","en":"F = ma → a = F/m = 10/5 = 2 m/s²"}},
      {"id":"q-phy-06","prompt":{"hi":"जड़ता का माप क्या है?","pa":"ਜੜਤਾ ਦਾ ਮਾਪ ਕੀ ਹੈ?","en":"What is the measure of inertia?"},"options":[{"hi":"वेग","pa":"ਵੇਗ","en":"Velocity"},{"hi":"त्वरण","pa":"ਪ੍ਰਵੇਗ","en":"Acceleration"},{"hi":"द्रव्यमान","pa":"ਪੁੰਜ","en":"Mass"},{"hi":"बल","pa":"ਬਲ","en":"Force"}],"answerIndex":2,"explanation":{"hi":"द्रव्यमान जड़ता का माप है। अधिक द्रव्यमान = अधिक जड़ता = अवस्था बदलने में अधिक बल चाहिए।","pa":"ਪੁੰਜ ਜੜਤਾ ਦਾ ਮਾਪ ਹੈ।","en":"Mass is the measure of inertia. Greater mass = greater inertia = more force needed to change state."}},
      {"id":"q-phy-07","prompt":{"hi":"संवेग का सूत्र क्या है?","pa":"ਸੰਵੇਗ ਦਾ ਸੂਤਰ ਕੀ ਹੈ?","en":"What is the formula for momentum?"},"options":[{"hi":"p = F/t","pa":"p = F/t","en":"p = F/t"},{"hi":"p = mv","pa":"p = mv","en":"p = mv"},{"hi":"p = ma","pa":"p = ma","en":"p = ma"},{"hi":"p = Fv","pa":"p = Fv","en":"p = Fv"}],"answerIndex":1,"explanation":{"hi":"संवेग p = mv (द्रव्यमान × वेग)। संवेग की SI इकाई kg·m/s है।","pa":"ਸੰਵੇਗ p = mv।","en":"Momentum p = mv (mass × velocity). SI unit of momentum is kg·m/s."}}
    ],
    "sources": [{"title": "NCERT Physics XI", "url": "https://ncert.nic.in/textbook.php?keph1=0-8"}],
    "videos": [{"title": "Newton's Laws of Motion - Physics Wallah (YouTube)", "url": "https://www.youtube.com/watch?v=zBJplhVLRQo"}],
    "documents": []
  },
  {
    "id": "economics-indian-economy",
    "subject": "Economics",
    "unit": "Indian economy",
    "title": {"hi": "भारतीय अर्थव्यवस्था: कृषि, उद्योग और सेवाएं", "pa": "ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ: ਖੇਤੀਬਾੜੀ, ਉਦਯੋਗ ਅਤੇ ਸੇਵਾਵਾਂ", "en": "Indian Economy: Agriculture, Industry and Services"},
    "sections": [
      {
        "heading": {"hi": "मिश्रित अर्थव्यवस्था की विशेषताएं", "pa": "ਮਿਸ਼ਰਤ ਅਰਥਵਿਵਸਥਾ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ", "en": "Features of Mixed Economy"},
        "text": {
          "hi": "भारत की मिश्रित अर्थव्यवस्था है जिसमें सार्वजनिक और निजी दोनों क्षेत्र काम करते हैं। 1991 में आर्थिक उदारीकरण (LPG — Liberalisation, Privatisation, Globalisation) के बाद अर्थव्यवस्था खुली।\n\nGDP (सकल घरेलू उत्पाद): एक वर्ष में देश में उत्पादित सभी वस्तुओं और सेवाओं का कुल मूल्य। भारत वर्तमान में विश्व की पांचवीं सबसे बड़ी अर्थव्यवस्था है।\n\nतीन क्षेत्र: प्राथमिक (कृषि, खनन), द्वितीयक (उद्योग, निर्माण), तृतीयक (सेवाएं, बैंकिंग, IT)।",
          "pa": "ਭਾਰਤ ਦੀ ਮਿਸ਼ਰਤ ਅਰਥਵਿਵਸਥਾ ਹੈ। 1991 ਵਿੱਚ LPG ਸੁਧਾਰ ਆਏ। GDP = ਦੇਸ਼ ਵਿੱਚ ਇੱਕ ਸਾਲ ਵਿੱਚ ਉਤਪਾਦਿਤ ਸਾਰੀਆਂ ਵਸਤਾਂ ਅਤੇ ਸੇਵਾਵਾਂ ਦਾ ਕੁੱਲ ਮੁੱਲ।",
          "en": "India has a mixed economy where both public and private sectors operate. Economic liberalization (LPG — Liberalisation, Privatisation, Globalisation) opened the economy in 1991.\n\nGDP (Gross Domestic Product): Total value of all goods and services produced in a country in one year. India is currently the 5th largest economy.\n\nThree sectors: Primary (agriculture, mining), Secondary (industry, manufacturing), Tertiary (services, banking, IT)."
        }
      },
      {
        "heading": {"hi": "कृषि क्षेत्र और हरित क्रांति", "pa": "ਖੇਤੀਬਾੜੀ ਅਤੇ ਹਰੀ ਕ੍ਰਾਂਤੀ", "en": "Agriculture and the Green Revolution"},
        "text": {
          "hi": "भारत में 50% से अधिक जनसंख्या कृषि पर निर्भर है। कृषि GDP में लगभग 16-17% योगदान देती है।\n\nहरित क्रांति (1960-70 के दशक): HYV बीज, सिंचाई, रासायनिक उर्वरक। इससे गेहूं और चावल उत्पादन में क्रांतिकारी वृद्धि हुई। M.S. स्वामीनाथन को हरित क्रांति का जनक कहा जाता है।\n\nपंजाब और हरियाणा हरित क्रांति के प्रमुख लाभार्थी थे। इन्हें 'भारत का अनाज भंडार' कहते हैं।\n\nचुनौतियाँ: सिंचाई पर निर्भरता, भूमि की उर्वरता में कमी, छोटी जोत, किसान कर्ज।",
          "pa": "ਭਾਰਤ ਵਿੱਚ 50% ਤੋਂ ਵੱਧ ਲੋਕ ਖੇਤੀ 'ਤੇ ਨਿਰਭਰ ਹਨ। ਹਰੀ ਕ੍ਰਾਂਤੀ (1960-70): HYV ਬੀਜ, ਸਿੰਚਾਈ, ਖਾਦਾਂ। M.S. ਸਵਾਮੀਨਾਥਨ ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੇ ਪਿਤਾਮਾ। ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ ਭਾਰਤ ਦਾ ਅੰਨ ਭੰਡਾਰ।",
          "en": "More than 50% of India's population depends on agriculture. Agriculture contributes ~16-17% to GDP.\n\nGreen Revolution (1960s-70s): HYV seeds, irrigation, chemical fertilizers — revolutionary increase in wheat and rice production. M.S. Swaminathan is called the Father of Green Revolution.\n\nPunjab and Haryana were major beneficiaries — called 'India's granary'.\n\nChallenges: dependence on irrigation, soil degradation, small landholdings, farmer debt."
        }
      },
      {
        "heading": {"hi": "उद्योग और सेवा क्षेत्र", "pa": "ਉਦਯੋਗ ਅਤੇ ਸੇਵਾ ਖੇਤਰ", "en": "Industry and Service Sector"},
        "text": {
          "hi": "उद्योग क्षेत्र GDP का लगभग 28% है। प्रमुख उद्योग: कपड़ा, इस्पात, ऑटोमोबाइल, फार्मास्यूटिकल।\n\nसेवा क्षेत्र: भारत की GDP का सबसे बड़ा हिस्सा (~55%)। IT उद्योग में भारत विश्व में अग्रणी — बेंगलुरु को 'भारत का सिलिकॉन वैली' कहते हैं।\n\nNSE और BSE भारत के प्रमुख शेयर बाजार हैं। RBI (भारतीय रिजर्व बैंक) केंद्रीय बैंक है — मौद्रिक नीति नियंत्रित करता है।",
          "pa": "ਸੇਵਾ ਖੇਤਰ GDP ਦਾ ~55% ਹੈ। IT ਵਿੱਚ ਭਾਰਤ ਵਿਸ਼ਵ ਵਿੱਚ ਅਗ੍ਰਣੀ। RBI ਕੇਂਦਰੀ ਬੈਂਕ ਹੈ।",
          "en": "Industry sector contributes ~28% to GDP. Major industries: textiles, steel, automobiles, pharmaceuticals.\n\nService sector: Largest share of India's GDP (~55%). India is a global leader in IT — Bengaluru is called 'India's Silicon Valley'.\n\nNSE and BSE are India's major stock exchanges. RBI (Reserve Bank of India) is the central bank — controls monetary policy."
        }
      },
      {
        "heading": {"hi": "विकास के संकेतक और परीक्षा बिंदु", "pa": "ਵਿਕਾਸ ਦੇ ਸੂਚਕ ਅਤੇ ਪਰੀਖਿਆ ਬਿੰਦੂ", "en": "Development Indicators and Exam Points"},
        "text": {
          "hi": "आर्थिक विकास के प्रमुख संकेतक:\n1. GDP (सकल घरेलू उत्पाद)\n2. GNP (सकल राष्ट्रीय उत्पाद)\n3. HDI (मानव विकास सूचकांक) — शिक्षा, स्वास्थ्य, आय\n4. प्रति व्यक्ति आय\n5. गरीबी रेखा\n\nयोजना आयोग (अब नीति आयोग): 1950 में स्थापित। 2015 में नीति आयोग ने बदला।\n\nपंजाब की अर्थव्यवस्था: प्रति व्यक्ति आय में अग्रणी राज्यों में। कृषि, टेक्सटाइल, खेल उपकरण उद्योग मुख्य।\n\nपरीक्षा में बार-बार पूछे जाने वाले: GDP, HDI, हरित क्रांति, LPG, RBI, बैंक राष्ट्रीयकरण (1969 — 14 बैंक इंदिरा गांधी ने)।",
          "pa": "ਆਰਥਿਕ ਵਿਕਾਸ ਦੇ ਸੂਚਕ: GDP, GNP, HDI। ਯੋਜਨਾ ਕਮਿਸ਼ਨ 1950 ਵਿੱਚ ਸਥਾਪਿਤ; 2015 ਵਿੱਚ ਨੀਤੀ ਆਯੋਗ ਬਣਿਆ।",
          "en": "Key development indicators:\n1. GDP (Gross Domestic Product)\n2. GNP (Gross National Product)\n3. HDI (Human Development Index — education, health, income)\n4. Per capita income\n5. Poverty line\n\nPlanning Commission (now NITI Aayog): Established 1950; replaced by NITI Aayog in 2015.\n\nFrequently asked: GDP, HDI, Green Revolution, LPG reforms, RBI, Bank nationalization (1969 — 14 banks by Indira Gandhi)."
        }
      }
    ],
    "keypoints": [
      {"hi": "भारत: मिश्रित अर्थव्यवस्था, 1991 में LPG सुधार", "pa": "ਭਾਰਤ: ਮਿਸ਼ਰਤ ਅਰਥਵਿਵਸਥਾ, 1991 LPG ਸੁਧਾਰ", "en": "India: Mixed economy, LPG reforms in 1991"},
      {"hi": "हरित क्रांति के जनक: M.S. स्वामीनाथन", "pa": "ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੇ ਪਿਤਾਮਾ: M.S. ਸਵਾਮੀਨਾਥਨ", "en": "Father of Green Revolution: M.S. Swaminathan"},
      {"hi": "पंजाब-हरियाणा: भारत का अनाज भंडार", "pa": "ਪੰਜਾਬ-ਹਰਿਆਣਾ: ਭਾਰਤ ਦਾ ਅੰਨ ਭੰਡਾਰ", "en": "Punjab-Haryana: India's granary"},
      {"hi": "सेवा क्षेत्र: GDP का 55% — सबसे बड़ा", "pa": "ਸੇਵਾ ਖੇਤਰ: GDP ਦਾ 55%", "en": "Service sector: 55% of GDP — largest"},
      {"hi": "RBI: भारत का केंद्रीय बैंक, मौद्रिक नीति", "pa": "RBI: ਭਾਰਤ ਦਾ ਕੇਂਦਰੀ ਬੈਂਕ", "en": "RBI: India's central bank, monetary policy"},
      {"hi": "HDI: शिक्षा + स्वास्थ्य + आय", "pa": "HDI: ਸਿੱਖਿਆ + ਸਿਹਤ + ਆਮਦਨ", "en": "HDI: Education + Health + Income"}
    ],
    "summary": {
      "hi": "भारत मिश्रित अर्थव्यवस्था है। तीन क्षेत्र: कृषि (16-17% GDP), उद्योग (28%), सेवाएं (55%)। हरित क्रांति ने कृषि उत्पादन बढ़ाया — M.S. स्वामीनाथन। 1991 में LPG सुधार। RBI केंद्रीय बैंक। HDI = शिक्षा + स्वास्थ्य + आय।",
      "pa": "ਭਾਰਤ ਮਿਸ਼ਰਤ ਅਰਥਵਿਵਸਥਾ। ਖੇਤੀ 16-17%, ਉਦਯੋਗ 28%, ਸੇਵਾਵਾਂ 55% GDP। ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੇ ਪਿਤਾਮਾ ਸਵਾਮੀਨਾਥਨ।",
      "en": "India has a mixed economy. Three sectors: Agriculture (16-17% GDP), Industry (28%), Services (55%). Green Revolution increased agricultural output — M.S. Swaminathan. LPG reforms in 1991. RBI is central bank. HDI = Education + Health + Income."
    },
    "flashcards": [
      {"question": {"hi":"भारत की अर्थव्यवस्था किस प्रकार की है?","pa":"ਭਾਰਤ ਦੀ ਅਰਥਵਿਵਸਥਾ ਕਿਸ ਕਿਸਮ ਦੀ ਹੈ?","en":"What type of economy does India have?"}, "answer": {"hi":"मिश्रित अर्थव्यवस्था (सार्वजनिक + निजी क्षेत्र)","pa":"ਮਿਸ਼ਰਤ ਅਰਥਵਿਵਸਥਾ (ਜਨਤਕ + ਨਿੱਜੀ)","en":"Mixed economy (public + private sector)"}},
      {"question": {"hi":"हरित क्रांति के जनक कौन हैं?","pa":"ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੇ ਪਿਤਾਮਾ ਕੌਣ ਹਨ?","en":"Who is the Father of Green Revolution?"}, "answer": {"hi":"M.S. स्वामीनाथन","pa":"M.S. ਸਵਾਮੀਨਾਥਨ","en":"M.S. Swaminathan"}},
      {"question": {"hi":"LPG का मतलब?","pa":"LPG ਦਾ ਮਤਲਬ?","en":"What does LPG stand for in economics?"}, "answer": {"hi":"Liberalisation (उदारीकरण), Privatisation (निजीकरण), Globalisation (वैश्वीकरण)","pa":"Liberalisation, Privatisation, Globalisation","en":"Liberalisation, Privatisation, Globalisation"}},
      {"question": {"hi":"RBI क्या है?","pa":"RBI ਕੀ ਹੈ?","en":"What is RBI?"}, "answer": {"hi":"भारतीय रिजर्व बैंक — भारत का केंद्रीय बैंक","pa":"ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ — ਭਾਰਤ ਦਾ ਕੇਂਦਰੀ ਬੈਂਕ","en":"Reserve Bank of India — India's central bank"}},
      {"question": {"hi":"HDI में कौन से तीन कारक हैं?","pa":"HDI ਵਿੱਚ ਕਿਹੜੇ ਤਿੰਨ ਕਾਰਕ ਹਨ?","en":"What three factors make up HDI?"}, "answer": {"hi":"शिक्षा, स्वास्थ्य और जीवन स्तर (आय)","pa":"ਸਿੱਖਿਆ, ਸਿਹਤ ਅਤੇ ਜੀਵਨ ਪੱਧਰ (ਆਮਦਨ)","en":"Education, health and standard of living (income)"}}
    ],
    "questions": [
      {"id":"q-eco-01","prompt":{"hi":"हरित क्रांति का संबंध किससे है?","pa":"ਹਰੀ ਕ੍ਰਾਂਤੀ ਦਾ ਸੰਬੰਧ ਕਿਸ ਨਾਲ ਹੈ?","en":"Green Revolution is associated with?"},"options":[{"hi":"उद्योग","pa":"ਉਦਯੋਗ","en":"Industry"},{"hi":"कृषि","pa":"ਖੇਤੀਬਾੜੀ","en":"Agriculture"},{"hi":"सेवाएं","pa":"ਸੇਵਾਵਾਂ","en":"Services"},{"hi":"तकनीक","pa":"ਤਕਨੀਕ","en":"Technology"}],"answerIndex":1,"explanation":{"hi":"हरित क्रांति कृषि क्षेत्र में थी — HYV बीज, सिंचाई, उर्वरक से उत्पादन बढ़ाया।","pa":"ਹਰੀ ਕ੍ਰਾਂਤੀ ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਸੀ।","en":"Green Revolution was in agriculture — HYV seeds, irrigation, fertilizers increased production."}},
      {"id":"q-eco-02","prompt":{"hi":"भारत की अर्थव्यवस्था में सबसे बड़ा क्षेत्र कौन सा है?","pa":"ਭਾਰਤ ਦੀ ਅਰਥਵਿਵਸਥਾ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਡਾ ਖੇਤਰ?","en":"Which is the largest sector of India's economy?"},"options":[{"hi":"कृषि","pa":"ਖੇਤੀਬਾੜੀ","en":"Agriculture"},{"hi":"उद्योग","pa":"ਉਦਯੋਗ","en":"Industry"},{"hi":"सेवाएं","pa":"ਸੇਵਾਵਾਂ","en":"Services"},{"hi":"खनन","pa":"ਖਣਨ","en":"Mining"}],"answerIndex":2,"explanation":{"hi":"सेवा क्षेत्र भारत के GDP में सबसे बड़ा हिस्सा (लगभग 55%) देता है।","pa":"ਸੇਵਾ ਖੇਤਰ GDP ਦਾ ~55% ਹੈ।","en":"The service sector contributes the largest share (~55%) to India's GDP."}},
      {"id":"q-eco-03","prompt":{"hi":"LPG सुधार कब हुए?","pa":"LPG ਸੁਧਾਰ ਕਦੋਂ ਆਏ?","en":"When did LPG reforms occur?"},"options":[{"hi":"1947","pa":"1947","en":"1947"},{"hi":"1969","pa":"1969","en":"1969"},{"hi":"1991","pa":"1991","en":"1991"},{"hi":"2000","pa":"2000","en":"2000"}],"answerIndex":2,"explanation":{"hi":"1991 में नरसिंह राव सरकार ने LPG सुधार लागू किए — भारत की अर्थव्यवस्था खोली।","pa":"1991 ਵਿੱਚ LPG ਸੁਧਾਰ।","en":"LPG reforms were implemented in 1991 under the Narasimha Rao government — opening India's economy."}},
      {"id":"q-eco-04","prompt":{"hi":"RBI का पूरा नाम क्या है?","pa":"RBI ਦਾ ਪੂਰਾ ਨਾਮ ਕੀ ਹੈ?","en":"Full form of RBI?"},"options":[{"hi":"Regional Bank of India","pa":"Regional Bank of India","en":"Regional Bank of India"},{"hi":"Reserve Bank of India","pa":"Reserve Bank of India","en":"Reserve Bank of India"},{"hi":"Rural Bank of India","pa":"Rural Bank of India","en":"Rural Bank of India"},{"hi":"Retail Bank of India","pa":"Retail Bank of India","en":"Retail Bank of India"}],"answerIndex":1,"explanation":{"hi":"RBI = Reserve Bank of India (भारतीय रिजर्व बैंक) — 1935 में स्थापित, भारत का केंद्रीय बैंक।","pa":"RBI = Reserve Bank of India।","en":"RBI = Reserve Bank of India, established 1935, India's central bank."}},
      {"id":"q-eco-05","prompt":{"hi":"GDP का पूरा नाम?","pa":"GDP ਦਾ ਪੂਰਾ ਨਾਮ?","en":"Full form of GDP?"},"options":[{"hi":"Gross Domestic Product","pa":"Gross Domestic Product","en":"Gross Domestic Product"},{"hi":"Global Development Plan","pa":"Global Development Plan","en":"Global Development Plan"},{"hi":"Government Development Price","pa":"Government Development Price","en":"Government Development Price"},{"hi":"General Domestic Production","pa":"General Domestic Production","en":"General Domestic Production"}],"answerIndex":0,"explanation":{"hi":"GDP = Gross Domestic Product (सकल घरेलू उत्पाद) — देश की आर्थिक शक्ति का मुख्य संकेतक।","pa":"GDP = Gross Domestic Product।","en":"GDP = Gross Domestic Product — the primary indicator of a country's economic strength."}}
    ],
    "sources": [{"title": "NCERT Economics X - Understanding Economic Development", "url": "https://ncert.nic.in/textbook.php?jecs2=0-5"}],
    "videos": [],
    "documents": []
  }
]

pathlib.Path('content/research/science-eco-lessons.json').write_text(json.dumps(lessons, ensure_ascii=False, indent=2))
print(f'Written {len(lessons)} lessons to science-eco-lessons.json')
