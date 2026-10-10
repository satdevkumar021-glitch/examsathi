import fs from 'node:fs';

const ettScienceLesson = {
  id: "ett-science-light",
  subject: "Science",
  unit: "Light - Reflection and Refraction",
  level: "Punjab ETT Paper B Core Science",
  title: {
    hi: "प्रकाश: परावर्तन, अपवर्तन और गोलीय लेंस",
    pa: "ਪ੍ਰਕਾਸ਼: ਪਰਵਰਤਨ, ਅਪਵਰਤਨ ਅਤੇ ਗੋਲਾਕਾਰ ਲੈਂਜ਼",
    en: "Light: Reflection, Refraction and Spherical Lenses"
  },
  summary: {
    hi: "प्रकाश के परावर्तन और अपवर्तन के नियम, गोलीय दर्पण (अवतल व उत्तल), दर्पण सूत्र, स्नेल का नियम, अपवर्तनांक, लेंस सूत्र और लेंस की क्षमता (डायोप्टर) का संपूर्ण आधिकारिक अध्ययन।",
    pa: "ਪ੍ਰਕਾਸ਼ ਦੇ ਪਰਵਰਤਨ ਅਤੇ ਅਪਵਰਤਨ ਦੇ ਨਿਯਮ, ਗੋਲਾਕਾਰ ਦਰਪਣ (ਅਵਤਲ ਤੇ ਉੱਤਲ), ਦਰਪਣ ਸੂਤਰ, ਸਨੈਲ ਦਾ ਨਿਯਮ, ਅਪਵਰਤਨ ਅੰਕ, ਲੈਂਜ਼ ਸੂਤਰ ਅਤੇ ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ (ਡਾਇਓਪਟਰ) ਦਾ ਪੂਰਾ ਅਧਿਕਾਰਤ ਅਧਿਐਨ।",
    en: "Comprehensive coverage of reflection and refraction of light, spherical mirrors (concave/convex), mirror formula, Snell's law, refractive index, lens formula, and power of a lens."
  },
  sections: [
    {
      heading: {
        hi: "1. प्रकाश का परावर्तन और परावर्तन के नियम (Reflection of Light)",
        pa: "1. ਪ੍ਰਕਾਸ਼ ਦਾ ਪਰਵਰਤਨ ਅਤੇ ਪਰਵਰਤਨ ਦੇ ਨਿਯਮ (Reflection of Light)",
        en: "1. Reflection of Light and Fundamental Laws"
      },
      text: {
        hi: "प्रकाश ऊर्जा का एक रूप है जो हमें वस्तुओं को देखने की संवेदनशीलता प्रदान करता है। जब प्रकाश की किरण किसी चमकदार या पॉलिशदार सतह (जैसे समतल दर्पण) से टकराकर उसी माध्यम में वापस लौटती है, तो इस परिघटना को प्रकाश का परावर्तन (Reflection) कहते हैं। परावर्तन के दो मुख्य नियम हैं: (1) आपतन कोण (i) सदैव परावर्तन कोण (r) के बराबर होता है, अर्थात् ∠i = ∠r। (2) आपतित किरण, परावर्तित किरण और आपतन बिंदु पर खींचा गया अभिलंब तीनों एक ही तल (same plane) में स्थित होते हैं। समतल दर्पण द्वारा बना प्रतिबिंब सदैव आभासी (virtual), सीधा (erect), बिंब (वस्तु) के आकार के बराबर और पार्श्व परावर्तित (laterally inverted) होता है। दर्पण के पीछे प्रतिबिंब की दूरी दर्पण के सामने वस्तु की दूरी के बराबर होती है।",
        pa: "ਪ੍ਰਕਾਸ਼ ਊਰਜਾ ਦਾ ਇੱਕ ਰੂਪ ਹੈ ਜੋ ਸਾਨੂੰ ਵਸਤੂਆਂ ਨੂੰ ਦੇਖਣ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ। ਜਦੋਂ ਪ੍ਰਕਾਸ਼ ਦੀ ਕਿਰਨ ਕਿਸੇ ਚਮਕਦਾਰ ਜਾਂ ਪਾਲਿਸ਼ ਕੀਤੀ ਸਤ੍ਹਾ (ਜਿਵੇਂ ਸਮਤਲ ਦਰਪਣ) ਨਾਲ ਟਕਰਾ ਕੇ ਉਸੇ ਮਾਧਿਅਮ ਵਿੱਚ ਵਾਪਸ ਮੁੜਦੀ ਹੈ, ਤਾਂ ਇਸਨੂੰ ਪ੍ਰਕਾਸ਼ ਦਾ ਪਰਵਰਤਨ (Reflection) ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਪਰਵਰਤਨ ਦੇ ਦੋ ਮੁੱਖ ਨਿਯਮ ਹਨ: (1) ਆਪਤਨ ਕੋਣ (i) ਹਮੇਸ਼ਾ ਪਰਵਰਤਨ ਕੋਣ (r) ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ, ਭਾਵ ∠i = ∠r। (2) ਆਪਤੀ ਕਿਰਨ, ਪਰਵਰਤਿਤ ਕਿਰਨ ਅਤੇ ਆਪਤਨ ਬਿੰਦੂ 'ਤੇ ਲੰਬ (normal) ਤਿੰਨੇ ਇੱਕੋ ਤਲ ਵਿੱਚ ਹੁੰਦੇ ਹਨ। ਸਮਤਲ ਦਰਪਣ ਦੁਆਰਾ ਬਣਿਆ ਪ੍ਰਤੀਬਿੰਬ ਹਮੇਸ਼ਾ ਆਭਾਸੀ, ਸਿੱਧਾ, ਵਸਤੂ ਦੇ ਆਕਾਰ ਦੇ ਬਰਾਬਰ ਅਤੇ ਪਾਸੇ ਤੋਂ ਉਲਟਾ (laterally inverted) ਹੁੰਦਾ ਹੈ। ਦਰਪਣ ਦੇ ਪਿੱਛੇ ਪ੍ਰਤੀਬਿੰਬ ਦੀ ਦੂਰੀ ਦਰਪਣ ਦੇ ਸਾਹਮਣੇ ਵਸਤੂ ਦੀ ਦੂਰੀ ਦੇ ਬਰਾਬਰ ਹੁੰਦੀ ਹੈ।",
        en: "Light is a form of electromagnetic radiation that enables vision. When a ray of light traveling through a medium encounters a polished, reflecting interface (such as a plane mirror) and bounces back into the original medium, the phenomenon is termed reflection. The fundamental laws of reflection stipulate: First, the angle of incidence equals the angle of reflection (∠i = ∠r). Second, the incident ray, reflected ray, and the normal at the point of incidence all lie in the same geometric plane. Images formed by a plane mirror are consistently virtual, erect, equal in magnitude to the object, and laterally inverted. The image distance behind the mirror strictly matches the object distance in front."
      }
    },
    {
      heading: {
        hi: "2. गोलीय दर्पण: अवतल और उत्तल दर्पण (Spherical Mirrors)",
        pa: "2. ਗੋਲਾਕਾਰ ਦਰਪਣ: ਅਵਤਲ ਅਤੇ ਉੱਤਲ ਦਰਪਣ (Spherical Mirrors)",
        en: "2. Spherical Mirrors: Concave and Convex Geometries"
      },
      text: {
        hi: "गोलीय दर्पण किसी खोखले काँच के गोले का हिस्सा होते हैं। ये दो प्रकार के होते हैं: (क) अवतल दर्पण (Concave Mirror): इसका परावर्तक पृष्ठ अंदर की ओर दबा (धंसा) हुआ होता है। यह किरणों को एक बिंदु पर केंद्रित करता है, इसलिए इसे अभिसारी दर्पण (Converging Mirror) भी कहते हैं। इसका उपयोग वाहनों की हेडलाइट, टॉर्च, दंत चिकित्सकों (डेंटिस्ट) द्वारा और शेविंग दर्पण के रूप में किया जाता है। (ख) उत्तल दर्पण (Convex Mirror): इसका परावर्तक पृष्ठ बाहर की ओर उभरा होता है। यह किरणों को फैलाता है, अतः इसे अपसारी दर्पण (Diverging Mirror) कहते हैं। यह सदैव आभासी, सीधा और छोटा प्रतिबिंब बनाता है और इसका दृष्टि-क्षेत्र (Field of view) बहुत विस्तृत होता है। इसीलिए वाहनों में पीछे का दृश्य देखने (Rear-view mirror) के लिए उत्तल दर्पण का प्रयोग किया जाता है। मुख्य पद: ध्रुव (P), वक्रता केंद्र (C), वक्रता त्रिज्या (R), और मुख्य फोकस (F)। फोकस दूरी (f) वक्रता त्रिज्या की आधी होती है: f = R / 2।",
        pa: "ਗੋਲਾਕਾਰ ਦਰਪਣ ਕਿਸੇ ਖੋਖਲੇ ਗੋਲੇ ਦਾ ਭਾਗ ਹੁੰਦੇ ਹਨ। ਇਹ ਦੋ ਪ੍ਰਕਾਰ ਦੇ ਹਨ: (ੳ) ਅਵਤਲ ਦਰਪਣ (Concave Mirror): ਇਸਦੀ ਪਰਵਰਤਕ ਸਤ੍ਹਾ ਅੰਦਰ ਵੱਲ ਧਸੀ ਹੁੰਦੀ ਹੈ। ਇਹ ਪ੍ਰਕਾਸ਼ ਕਿਰਨਾਂ ਨੂੰ ਇੱਕ ਬਿੰਦੂ 'ਤੇ ਇਕੱਠਾ ਕਰਦਾ ਹੈ, ਇਸ ਲਈ ਇਸਨੂੰ ਅਭਿਸਾਰੀ ਦਰਪਣ (Converging Mirror) ਵੀ ਕਹਿੰਦੇ ਹਨ। ਇਸਦਾ ਉਪਯੋਗ ਗੱਡੀਆਂ ਦੀਆਂ ਹੈੱਡਲਾਈਟਾਂ, ਟਾਰਚਾਂ, ਦੰਦਾਂ ਦੇ ਡਾਕਟਰਾਂ ਵੱਲੋਂ ਅਤੇ ਦਾੜ੍ਹੀ ਬਣਾਉਣ ਵਾਲੇ ਸ਼ੀਸ਼ਿਆਂ ਵਿੱਚ ਹੁੰਦਾ ਹੈ। (ਅ) ਉੱਤਲ ਦਰਪਣ (Convex Mirror): ਇਸਦੀ ਪਰਵਰਤਕ ਸਤ੍ਹਾ ਬਾਹਰ ਵੱਲ ਉੱਭਰੀ ਹੁੰਦੀ ਹੈ। ਇਹ ਕਿਰਨਾਂ ਨੂੰ ਖਿਲਾਰਦਾ ਹੈ, ਇਸ ਲਈ ਇਸਨੂੰ ਅਪਸਾਰੀ ਦਰਪਣ ਕਹਿੰਦੇ ਹਨ। ਇਹ ਹਮੇਸ਼ਾ ਆਭਾਸੀ, ਸਿੱਧਾ ਅਤੇ ਛੋਟਾ ਪ੍ਰਤੀਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ ਇਸਦਾ ਦ੍ਰਿਸ਼ਟੀ-ਖੇਤਰ ਬਹੁਤ ਚੌੜਾ ਹੁੰਦਾ ਹੈ। ਇਸ ਕਰਕੇ ਵਾਹਨਾਂ ਵਿੱਚ ਪਿੱਛੇ ਦੇਖਣ ਵਾਲੇ ਸ਼ੀਸ਼ੇ (Rear-view mirror) ਵਜੋਂ ਉੱਤਲ ਦਰਪਣ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਫੋਕਸ ਦੂਰੀ (f) ਵਕਰਤਾ ਅਰਧ-ਵਿਆਸ ਦੀ ਅੱਧੀ ਹੁੰਦੀ ਹੈ: f = R / 2।",
        en: "Spherical mirrors form curved reflecting surfaces cut from a hollow glass sphere: (1) Concave Mirrors possess an inwardly curved reflecting surface. Functioning as converging mirrors, they bring parallel incident rays to a real focus. Concave mirrors are utilized in automotive headlights, solar furnaces, torches, and dental examination probes where magnification and parallel beam projection are critical. (2) Convex Mirrors feature an outwardly curved reflecting surface. Functioning as diverging mirrors, they consistently project diminished, erect, and virtual images over a panoramic field of view. Consequently, convex mirrors are universally deployed as rear-view mirrors in motor vehicles. Key geometrical parameters include Pole (P), Centre of Curvature (C), Radius of Curvature (R), and Principal Focus (F). For mirrors of small aperture, focal length equals half the radius of curvature: f = R / 2."
      }
    },
    {
      heading: {
        hi: "3. दर्पण सूत्र और आवर्धन (Mirror Formula & Magnification)",
        pa: "3. ਦਰਪਣ ਸੂਤਰ ਅਤੇ ਵਡਦਰਸ਼ਨ (Mirror Formula & Magnification)",
        en: "3. Cartesian Sign Convention, Mirror Formula and Magnification"
      },
      text: {
        hi: "गोलीय दर्पणों के लिए कार्तीय चिह्न परिपाटी (New Cartesian Sign Convention): सभी दूरियाँ दर्पण के ध्रुव (P) से मापी जाती हैं। आपतित प्रकाश की दिशा में मापी गई दूरियाँ धनात्मक (+) और विपरीत दिशा में ऋणात्मक (-) मानी जाती हैं। मुख्य अक्ष के ऊपर की ऊँचाई धनात्मक और नीचे की ऊँचाई ऋणात्मक होती है। अतः अवतल दर्पण की फोकस दूरी सदैव ऋणात्मक (f < 0) तथा उत्तल दर्पण की सदैव धनात्मक (f > 0) होती है। बिंब दूरी (u) सदैव ऋणात्मक होती है। दर्पण सूत्र (Mirror Formula): 1/f = 1/v + 1/u, जहाँ f = फोकस दूरी, v = प्रतिबिंब दूरी, u = बिंब (वस्तु) दूरी। रेखीय आवर्धन (Magnification, m): प्रतिबिंब की ऊँचाई (h') और बिंब की ऊँचाई (h) के अनुपात को आवर्धन कहते हैं: m = h' / h = -v / u। यदि m ऋणात्मक हो तो प्रतिबिंब वास्तविक और उल्टा होता है; यदि m धनात्मक हो तो प्रतिबिंब आभासी और सीधा होता है।",
        pa: "ਗੋਲਾਕਾਰ ਦਰਪਣਾਂ ਲਈ ਨਵੀਂ ਕਾਰਤੀਅਨ ਚਿੰਨ੍ਹ ਪ੍ਰਣਾਲੀ ਅਨੁਸਾਰ: ਸਾਰੀਆਂ ਦੂਰੀਆਂ ਦਰਪਣ ਦੇ ਧਰੁਵ (P) ਤੋਂ ਮਾਪੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਆਪਤੀ ਪ੍ਰਕਾਸ਼ ਦੀ ਦਿਸ਼ਾ ਵਿੱਚ ਮਾਪੀਆਂ ਦੂਰੀਆਂ ਧਨਾਤਮਕ (+) ਅਤੇ ਉਲਟ ਦਿਸ਼ਾ ਵਿੱਚ ਰਿਣਾਤਮਕ (-) ਹੁੰਦੀਆਂ ਹਨ। ਮੁੱਖ ਧੁਰੇ ਤੋਂ ਉੱਪਰ ਵੱਲ ਉਚਾਈ ਧਨਾਤਮਕ ਅਤੇ ਹੇਠਾਂ ਵੱਲ ਰਿਣਾਤਮਕ ਹੁੰਦੀ ਹੈ। ਇਸ ਲਈ ਅਵਤਲ ਦਰਪਣ ਦੀ ਫੋਕਸ ਦੂਰੀ ਹਮੇਸ਼ਾ ਰਿਣਾਤਮਕ (f < 0) ਅਤੇ ਉੱਤਲ ਦਰਪਣ ਦੀ ਧਨਾਤਮਕ (f > 0) ਹੁੰਦੀ ਹੈ। ਵਸਤੂ ਦੂਰੀ (u) ਹਮੇਸ਼ਾ ਰਿਣਾਤਮਕ ਹੁੰਦੀ ਹੈ। ਦਰਪਣ ਸੂਤਰ (Mirror Formula): 1/f = 1/v + 1/u, ਜਿੱਥੇ f = ਫੋਕਸ ਦੂਰੀ, v = ਪ੍ਰਤੀਬਿੰਬ ਦੂਰੀ, u = ਵਸਤੂ ਦੂਰੀ। ਵਡਦਰਸ਼ਨ (Magnification, m): ਪ੍ਰਤੀਬਿੰਬ ਦੀ ਉਚਾਈ (h') ਅਤੇ ਵਸਤੂ ਦੀ ਉਚਾਈ (h) ਦਾ ਅਨੁਪਾਤ: m = h' / h = -v / u। ਜੇਕਰ m ਰਿਣਾਤਮਕ ਹੈ ਤਾਂ ਪ੍ਰਤੀਬਿੰਬ ਵਾਸਤਵਿਕ ਤੇ ਉਲਟਾ ਹੈ; ਜੇਕਰ m ਧਨਾਤਮਕ ਹੈ ਤਾਂ ਪ੍ਰਤੀਬਿੰਬ ਆਭਾਸੀ ਤੇ ਸਿੱਧਾ ਹੁੰਦਾ ਹੈ।",
        en: "Under the New Cartesian Sign Convention: All measurements originate from the Pole (P). Distances measured in the direction of incident light are positive (+), while opposite distances are negative (-). Heights perpendicular and above the principal axis are positive (+), whereas downward heights are negative (-). Accordingly, the focal length of a concave mirror is strictly negative (f < 0), while that of a convex mirror is strictly positive (f > 0). Object distance (u) is universally negative. The Mirror Formula relates focal length, image distance, and object distance: 1/f = 1/v + 1/u. Linear Magnification (m) expresses the ratio of image height (h') to object height (h): m = h' / h = -v / u. A negative magnification value denotes a real, inverted image, whereas a positive value signifies a virtual, erect image."
      }
    },
    {
      heading: {
        hi: "4. प्रकाश का अपवर्तन और स्नेल का नियम (Refraction of Light & Snell's Law)",
        pa: "4. ਪ੍ਰਕਾਸ਼ ਦਾ ਅਪਵਰਤਨ ਅਤੇ ਸਨੈਲ ਦਾ ਨਿਯਮ (Refraction of Light & Snell's Law)",
        en: "4. Refraction of Light, Snell's Law and Optical Media"
      },
      text: {
        hi: "जब प्रकाश की किरण एक पारदर्शी माध्यम से दूसरे पारदर्शी माध्यम में तिरछी प्रवेश करती है, तो दोनों माध्यमों के सीमा पृष्ठ पर इसकी दिशा और गति बदल जाती है। प्रकाश के मुड़ने की इस परिघटना को प्रकाश का अपवर्तन (Refraction) कहते हैं। जब प्रकाश विरल माध्यम (Rarer medium, जैसे हवा) से सघन माध्यम (Denser medium, जैसे काँच या पानी) में प्रवेश करता है, तो यह अभिलंब की ओर झुक जाता है। इसके विपरीत सघन से विरल माध्यम में जाने पर यह अभिलंब से दूर हट जाता है। अपवर्तन के दो नियम हैं: (1) आपतित किरण, अपवर्तित किरण और अभिलंब एक ही तल में होते हैं। (2) स्नेल का नियम (Snell's Law): दिए गए प्रकाश के रंग तथा दिए गए माध्यमों के युग्म के लिए आपतन कोण की ज्या (sin i) और अपवर्तन कोण की ज्या (sin r) का अनुपात एक स्थिरांक होता है: sin i / sin r = n (अपवर्तनांक / Refractive Index)। निरपेक्ष अपवर्तनांक (Absolute Refractive Index): n = c / v, जहाँ c निर्वात में प्रकाश की चाल (3 × 10⁸ m/s) है और v माध्यम में प्रकाश की चाल है। जल का अपवर्तनांक 1.33 और काँच का लगभग 1.5 होता है। हीरे का अपवर्तनांक 2.42 है जो सर्वाधिक है।",
        pa: "ਜਦੋਂ ਪ੍ਰਕਾਸ਼ ਦੀ ਕਿਰਨ ਇੱਕ ਪਾਰਦਰਸ਼ੀ ਮਾਧਿਅਮ ਤੋਂ ਦੂਜੇ ਪਾਰਦਰਸ਼ੀ ਮਾਧਿਅਮ ਵਿੱਚ ਦਾਖ਼ਲ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਮਾਧਿਅਮ ਬਦਲਣ ਨਾਲ ਪ੍ਰਕਾਸ਼ ਦੀ ਚਾਲ ਅਤੇ ਦਿਸ਼ਾ ਬਦਲ ਜਾਂਦੀ ਹੈ। ਇਸਨੂੰ ਪ੍ਰਕਾਸ਼ ਦਾ ਅਪਵਰਤਨ (Refraction) ਕਹਿੰਦੇ ਹਨ। ਜਦੋਂ ਪ੍ਰਕਾਸ਼ ਵਿਰਲੇ ਮਾਧਿਅਮ (ਹਵਾ) ਤੋਂ ਸੰਘਣੇ ਮਾਧਿਅਮ (ਕੱਚ ਜਾਂ ਪਾਣੀ) ਵਿੱਚ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਇਹ ਲੰਬ (normal) ਵੱਲ ਝੁਕਦਾ ਹੈ। ਸੰਘਣੇ ਤੋਂ ਵਿਰਲੇ ਵਿੱਚ ਜਾਣ ਵੇਲੇ ਇਹ ਲੰਬ ਤੋਂ ਦੂਰ ਹਟਦਾ ਹੈ। ਅਪਵਰਤਨ ਦੇ ਨਿਯਮ: (1) ਆਪਤੀ ਕਿਰਨ, ਅਪਵਰਤਿਤ ਕਿਰਨ ਅਤੇ ਲੰਬ ਇੱਕੋ ਤਲ ਵਿੱਚ ਹੁੰਦੇ ਹਨ। (2) ਸਨੈਲ ਦਾ ਨਿਯਮ (Snell's Law): ਆਪਤਨ ਕੋਣ ਦੀ ਜਯਾ (sin i) ਅਤੇ ਅਪਵਰਤਨ ਕੋਣ ਦੀ ਜਯਾ (sin r) ਦਾ ਅਨੁਪਾਤ ਇੱਕ ਸਥਿਰ ਅੰਕ ਹੁੰਦਾ ਹੈ: sin i / sin r = n (ਅਪਵਰਤਨ ਅੰਕ)। ਪੂਰਨ ਅਪਵਰਤਨ ਅੰਕ: n = c / v, ਜਿੱਥੇ c ਨਿਰਵਾਤ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਦੀ ਗਤੀ (3 × 10⁸ ਮੀ/ਸੈ) ਹੈ ਅਤੇ v ਮਾਧਿਅਮ ਵਿੱਚ ਗਤੀ ਹੈ। ਪਾਣੀ ਦਾ ਅਪਵਰਤਨ ਅੰਕ 1.33 ਅਤੇ ਕੱਚ ਦਾ 1.5 ਹੁੰਦਾ ਹੈ। ਹੀਰੇ ਦਾ ਅਪਵਰਤਨ ਅੰਕ 2.42 ਸਭ ਤੋਂ ਵੱਧ ਹੈ।",
        en: "Refraction describes the bending of light rays as they pass obliquely across an interface separating two transparent optical media possessing different optical densities, caused by velocity variations across media. Entering an optically denser medium from a rarer medium causes light to slow down and bend toward the normal; conversely, transitioning from a denser to a rarer medium causes it to accelerate and bend away from the normal. The governing laws state: Incident ray, refracted ray, and interface normal are coplanar. Snell's Law states that the ratio of the sine of the angle of incidence to the sine of the angle of refraction is invariant for a specified wavelength and media pair: sin i / sin r = n₂₁. Absolute refractive index is defined as n = c / v, where c represents the speed of light in vacuum (3 × 10⁸ m/s) and v denotes velocity in the medium. Diamond exhibits the highest optical density among common substances with a refractive index of 2.42, water is 1.33, and crown glass is approximately 1.52."
      }
    },
    {
      heading: {
        hi: "5. गोलीय लेंस, लेंस सूत्र और लेंस की क्षमता (Lenses & Lens Power)",
        pa: "5. ਗੋਲਾਕਾਰ ਲੈਂਜ਼, ਲੈਂਜ਼ ਸੂਤਰ ਅਤੇ ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ (Lenses & Lens Power)",
        en: "5. Spherical Lenses, Lens Formula and Power of a Lens"
      },
      text: {
        hi: "गोलीय लेंस दो पृष्ठों से घिरा पारदर्शी माध्यम होता है, जिसका कम से कम एक पृष्ठ गोलीय हो। (1) उत्तल लेंस (Convex Lens): यह बीच में मोटा और किनारों पर पतला होता है। यह किरणों को अभिसरित करता है, अतः इसे अभिसारी लेंस (Converging Lens) कहते हैं। इसकी फोकस दूरी धनात्मक होती है। (2) अवतल लेंस (Concave Lens): यह बीच में पतला और किनारों पर मोटा होता है। यह किरणों को फैलाता है, अतः अपसारी लेंस (Diverging Lens) कहलाता है। इसकी फोकस दूरी ऋणात्मक होती है। लेंस सूत्र (Lens Formula): 1/f = 1/v - 1/u (ध्यान दें: दर्पण सूत्र में धन चिह्न होता है, जबकि लेंस सूत्र में ऋण चिह्न)। लेंस का आवर्धन: m = h' / h = +v / u। लेंस की क्षमता (Power of a Lens, P): किसी लेंस द्वारा प्रकाश किरणों को अभिसरित या अपसारित करने की मात्रा उसकी क्षमता कहलाती है। यह मीटर में मापी गई फोकस दूरी का व्युत्क्रम होती है: P = 1 / f (मीटर में)। लेंस की क्षमता का SI मात्रक 'डायोप्टर' (Dioptre, D) है। यदि f = 1 मीटर हो, तो P = 1 D होता है। उत्तल लेंस की क्षमता धनात्मक (+) और अवतल लेंस की क्षमता ऋणात्मक (-) होती है। उदाहरण: यदि f = -0.5 मीटर हो, तो P = 1 / (-0.5) = -2 D (निकट दृष्टि दोष निवारण हेतु अवतल लेंस)।",
        pa: "ਗੋਲਾਕਾਰ ਲੈਂਜ਼ ਦੋ ਸਤਹਾਂ ਨਾਲ ਘਿਰਿਆ ਪਾਰਦਰਸ਼ੀ ਮਾਧਿਅਮ ਹੁੰਦਾ ਹੈ। (1) ਉੱਤਲ ਲੈਂਜ਼ (Convex Lens): ਵਿਚਕਾਰੋਂ ਮੋਟਾ ਅਤੇ ਕਿਨਾਰਿਆਂ ਤੋਂ ਪਤਲਾ ਹੁੰਦਾ ਹੈ। ਇਹ ਕਿਰਨਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ, ਇਸ ਲਈ ਇਸਨੂੰ ਅਭਿਸਾਰੀ ਲੈਂਜ਼ (Converging Lens) ਕਹਿੰਦੇ ਹਨ। ਇਸਦੀ ਫੋਕਸ ਦੂਰੀ ਧਨਾਤਮਕ ਹੁੰਦੀ ਹੈ। (2) ਅਵਤਲ ਲੈਂਜ਼ (Concave Lens): ਵਿਚਕਾਰੋਂ ਪਤਲਾ ਅਤੇ ਕਿਨਾਰਿਆਂ ਤੋਂ ਮੋਟਾ ਹੁੰਦਾ ਹੈ। ਇਹ ਕਿਰਨਾਂ ਨੂੰ ਖਿਲਾਰਦਾ ਹੈ, ਇਸ ਲਈ ਅਪਸਾਰੀ ਲੈਂਜ਼ (Diverging Lens) ਕਹਾਉਂਦਾ ਹੈ। ਇਸਦੀ ਫੋਕਸ ਦੂਰੀ ਰਿਣਾਤਮਕ ਹੁੰਦੀ ਹੈ। ਲੈਂਜ਼ ਸੂਤਰ (Lens Formula): 1/f = 1/v - 1/u। ਲੈਂਜ਼ ਦਾ ਵਡਦਰਸ਼ਨ: m = h' / h = +v / u। ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ (Power of a Lens, P): ਮੀਟਰਾਂ ਵਿੱਚ ਮਾਪੀ ਫੋਕਸ ਦੂਰੀ ਦਾ ਉਲਟ-ਕ੍ਰਮ ਹੁੰਦੀ ਹੈ: P = 1 / f (ਮੀਟਰਾਂ ਵਿੱਚ)। ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ ਦੀ SI ਇਕਾਈ 'ਡਾਇਓਪਟਰ' (Dioptre, D) ਹੈ। ਉੱਤਲ ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ ਧਨਾਤਮਕ (+) ਅਤੇ ਅਵਤਲ ਲੈਂਜ਼ ਦੀ ਰਿਣਾਤਮਕ (-) ਹੁੰਦੀ ਹੈ। ਉਦਾਹਰਨ ਲਈ, ਜੇ f = +0.2 ਮੀਟਰ ਹੈ, ਤਾਂ P = 1 / 0.2 = +5 D (ਦੂਰ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ ਲਈ ਉੱਤਲ ਲੈਂਜ਼)।",
        en: "Spherical lenses comprise transparent refracting media bounded by two curved optical surfaces: (1) Convex Lenses are thicker at the optic centre than at the edges. Acting as converging lenses, they bend parallel light rays toward a real focus. Their focal length is positive (+). (2) Concave Lenses are thinner at the centre and thicker at the periphery. Acting as diverging lenses, they spread parallel light rays outward, exhibiting a negative (-) focal length. The Lens Formula is expressed as: 1/f = 1/v - 1/u (contrasting with the plus sign in mirror equations). Lens magnification is given by: m = h' / h = +v / u. Power of a Lens (P) quantifies the optical power to converge or diverge incident wavefronts, defined reciprocally as: P = 1 / f (in metres). The SI unit of lens power is the Dioptre (D). A convex lens of focal length 0.25 m possesses power P = +4.0 D, whereas a concave lens of focal length 0.5 m yields P = -2.0 D."
      }
    }
  ],
  keypoints: [
    {
      hi: "परावर्तन में आपतन कोण सदैव परावर्तन कोण के बराबर होता है (∠i = ∠r), और तीनों किरणें एक ही तल में होती हैं।",
      pa: "ਪਰਵਰਤਨ ਵਿੱਚ ਆਪਤਨ ਕੋਣ ਹਮੇਸ਼ਾ ਪਰਵਰਤਨ ਕੋਣ ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ (∠i = ∠r), ਅਤੇ ਤਿੰਨੋਂ ਕਿਰਨਾਂ ਇੱਕੋ ਤਲ ਵਿੱਚ ਹੁੰਦੀਆਂ ਹਨ।",
      en: "In reflection, angle of incidence equals angle of reflection (∠i = ∠r), and incident ray, reflected ray, and normal are coplanar."
    },
    {
      hi: "गोलीय दर्पण की फोकस दूरी वक्रता त्रिज्या की आधी होती है: f = R / 2।",
      pa: "ਗੋਲਾਕਾਰ ਦਰਪਣ ਦੀ ਫੋਕਸ ਦੂਰੀ ਵਕਰਤਾ ਅਰਧ-ਵਿਆਸ ਦੀ ਅੱਧੀ ਹੁੰਦੀ ਹੈ: f = R / 2।",
      en: "The focal length of a spherical mirror equals half its radius of curvature: f = R / 2."
    },
    {
      hi: "दर्पण सूत्र 1/f = 1/v + 1/u है, जबकि लेंस सूत्र 1/f = 1/v - 1/u होता है।",
      pa: "ਦਰਪਣ ਸੂਤਰ 1/f = 1/v + 1/u ਹੈ, ਜਦਕਿ ਲੈਂਜ਼ ਸੂਤਰ 1/f = 1/v - 1/u ਹੁੰਦਾ ਹੈ।",
      en: "The mirror formula is 1/f = 1/v + 1/u, whereas the lens formula is 1/f = 1/v - 1/u."
    },
    {
      hi: "स्नेल का नियम: आपतन कोण की ज्या और अपवर्तन कोण की ज्या का अनुपात स्थिर रहता है (sin i / sin r = n)।",
      pa: "ਸਨੈਲ ਦਾ ਨਿਯਮ: ਆਪਤਨ ਕੋਣ ਦੀ ਜਯਾ ਅਤੇ ਅਪਵਰਤਨ ਕੋਣ ਦੀ ਜਯਾ ਦਾ ਅਨੁਪਾਤ ਸਥਿਰ ਰਹਿੰਦਾ ਹੈ (sin i / sin r = n)।",
      en: "Snell's Law: The ratio of sine of incidence angle to sine of refraction angle is constant (sin i / sin r = n)."
    },
    {
      hi: "लेंस की क्षमता P = 1 / f (मीटर में) होती है और इसका SI मात्रक डायोप्टर (D) है।",
      pa: "ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ P = 1 / f (ਮੀਟਰਾਂ ਵਿੱਚ) ਹੁੰਦੀ ਹੈ ਅਤੇ ਇਸਦੀ SI ਇਕਾਈ ਡਾਇਓਪਟਰ (D) ਹੈ।",
      en: "Power of a lens P = 1 / f (in metres) with SI unit Dioptre (D); convex is positive, concave is negative."
    },
    {
      hi: "उत्तल दर्पण का उपयोग वाहनों में रियर-व्यू मिरर के रूप में होता है क्योंकि यह सदैव सीधा और छोटा प्रतिबिंब बनाता है।",
      pa: "ਉੱਤਲ ਦਰਪਣ ਦਾ ਉਪਯੋਗ ਵਾਹਨਾਂ ਵਿੱਚ ਰੀਅਰ-ਵਿਊ ਸ਼ੀਸ਼ੇ ਵਜੋਂ ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ ਇਹ ਹਮੇਸ਼ਾ ਸਿੱਧਾ ਅਤੇ ਛੋਟਾ ਪ੍ਰਤੀਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ।",
      en: "Convex mirrors are utilized as vehicle rear-view mirrors because they yield an erect, diminished image across a wide visual field."
    }
  ],
  flashcards: [
    {
      question: {
        hi: "गोलीय दर्पण की फोकस दूरी (f) और वक्रता त्रिज्या (R) में क्या संबंध है?",
        pa: "ਗੋਲਾਕਾਰ ਦਰਪਣ ਦੀ ਫੋਕਸ ਦੂਰੀ (f) ਅਤੇ ਵਕਰਤਾ ਅਰਧ-ਵਿਆਸ (R) ਵਿੱਚ ਕੀ ਸੰਬੰਧ ਹੈ?",
        en: "What is the relationship between focal length (f) and radius of curvature (R) in spherical mirrors?"
      },
      answer: {
        hi: "f = R / 2 (फोकस दूरी वक्रता त्रिज्या की आधी होती है)।",
        pa: "f = R / 2 (ਫੋਕਸ ਦੂਰੀ ਵਕਰਤਾ ਅਰਧ-ਵਿਆਸ ਦੀ ਅੱਧੀ ਹੁੰਦੀ ਹੈ)।",
        en: "f = R / 2 (focal length equals half the radius of curvature)."
      }
    },
    {
      question: {
        hi: "दर्पण सूत्र और लेंस सूत्र क्या हैं?",
        pa: "ਦਰਪਣ ਸੂਤਰ ਅਤੇ ਲੈਂਜ਼ ਸੂਤਰ ਕੀ ਹਨ?",
        en: "State the Mirror Formula and the Lens Formula."
      },
      answer: {
        hi: "दर्पण सूत्र: 1/f = 1/v + 1/u; लेंस सूत्र: 1/f = 1/v - 1/u।",
        pa: "ਦਰਪਣ ਸੂਤਰ: 1/f = 1/v + 1/u; ਲੈਂਜ਼ ਸੂਤਰ: 1/f = 1/v - 1/u।",
        en: "Mirror Formula: 1/f = 1/v + 1/u; Lens Formula: 1/f = 1/v - 1/u."
      }
    },
    {
      question: {
        hi: "लेंस की क्षमता (Power of a Lens) की परिभाषा और SI मात्रक क्या है?",
        pa: "ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ ਦੀ ਪਰਿਭਾਸ਼ਾ ਅਤੇ SI ਇਕਾਈ ਕੀ ਹੈ?",
        en: "What is the definition and SI unit of Power of a Lens?"
      },
      answer: {
        hi: "P = 1 / f (मीटर में); SI मात्रक डायोप्टर (D) है।",
        pa: "P = 1 / f (ਮੀਟਰਾਂ ਵਿੱਚ); SI ਇਕਾਈ ਡਾਇਓਪਟਰ (D) ਹੈ।",
        en: "P = 1 / f (in metres); the SI unit is Dioptre (D)."
      }
    },
    {
      question: {
        hi: "वाहनों में पीछे का दृश्य देखने (Rear-view) के लिए किस दर्पण का उपयोग किया जाता है और क्यों?",
        pa: "ਵਾਹਨਾਂ ਵਿੱਚ ਪਿੱਛੇ ਦੇਖਣ ਲਈ ਕਿਸ ਦਰਪਣ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਕਿਉਂ?",
        en: "Which mirror is deployed for rear-view observation in motor vehicles and why?"
      },
      answer: {
        hi: "उत्तल दर्पण; क्योंकि यह सदैव सीधा व छोटा प्रतिबिंब बनाता है और इसका दृष्टि-क्षेत्र बहुत विस्तृत होता है।",
        pa: "ਉੱਤਲ ਦਰਪਣ; ਕਿਉਂਕਿ ਇਹ ਹਮੇਸ਼ਾ ਸਿੱਧਾ ਤੇ ਛੋਟਾ ਪ੍ਰਤੀਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ ਇਸਦਾ ਦ੍ਰਿਸ਼ਟੀ-ਖੇਤਰ ਚੌੜਾ ਹੁੰਦਾ ਹੈ।",
        en: "Convex mirror; because it consistently produces an erect, diminished image providing a panoramic field of view."
      }
    },
    {
      question: {
        hi: "स्नेल का नियम (Snell's Law) गणितीय रूप में क्या है?",
        pa: "ਸਨੈਲ ਦਾ ਨਿਯਮ ਗਣਿਤਕ ਰੂਪ ਵਿੱਚ ਕੀ ਹੈ?",
        en: "What is the mathematical formulation of Snell's Law?"
      },
      answer: {
        hi: "sin i / sin r = स्थिरांक (n, माध्यम का अपवर्तनांक)।",
        pa: "sin i / sin r = ਸਥਿਰ ਅੰਕ (n, ਮਾਧਿਅਮ ਦਾ ਅਪਵਰਤਨ ਅੰਕ)।",
        en: "sin i / sin r = constant (n, refractive index of the medium)."
      }
    },
    {
      question: {
        hi: "दंत चिकित्सक दाँतों का बड़ा प्रतिबिंब देखने के लिए किस दर्पण का उपयोग करते हैं?",
        pa: "ਦੰਦਾਂ ਦੇ ਡਾਕਟਰ ਦੰਦਾਂ ਦਾ ਵੱਡਾ ਪ੍ਰਤੀਬਿੰਬ ਦੇਖਣ ਲਈ ਕਿਸ ਦਰਪਣ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ?",
        en: "Which mirror do dental surgeons employ to examine magnified teeth?"
      },
      answer: {
        hi: "अवतल दर्पण (Concave mirror), क्योंकि यह निकट स्थित वस्तु का सीधा व बड़ा आभासी प्रतिबिंब बनाता है।",
        pa: "ਅਵਤਲ ਦਰਪਣ (Concave mirror), ਕਿਉਂਕਿ ਇਹ ਨੇੜੇ ਪਈ ਵਸਤੂ ਦਾ ਸਿੱਧਾ ਅਤੇ ਵੱਡਾ ਪ੍ਰਤੀਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ।",
        en: "Concave mirror, because it forms a magnified, erect virtual image when placed close to teeth."
      }
    },
    {
      question: {
        hi: "सर्वाधिक अपवर्तनांक किस प्राकृतिक पदार्थ का होता है और इसका मान कितना है?",
        pa: "ਸਭ ਤੋਂ ਵੱਧ ਅਪਵਰਤਨ ਅੰਕ ਕਿਸ ਕੁਦਰਤੀ ਪਦਾਰਥ ਦਾ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਸਦਾ ਮੁੱਲ ਕਿੰਨਾ ਹੈ?",
        en: "Which natural material has the highest refractive index and what is its value?"
      },
      answer: {
        hi: "हीरा (Diamond), जिसका अपवर्तनांक 2.42 होता है।",
        pa: "ਹੀਰਾ (Diamond), ਜਿਸਦਾ ਅਪਵਰਤਨ ਅੰਕ 2.42 ਹੁੰਦਾ ਹੈ।",
        en: "Diamond, possessing a refractive index of 2.42."
      }
    },
    {
      question: {
        hi: "+2.0 D क्षमता वाले लेंस की प्रकृति और फोकस दूरी क्या होगी?",
        pa: "+2.0 D ਸਮਰੱਥਾ ਵਾਲੇ ਲੈਂਜ਼ ਦੀ ਪ੍ਰਕਿਰਤੀ ਅਤੇ ਫੋਕਸ ਦੂਰੀ ਕੀ ਹੋਵੇਗੀ?",
        en: "What is the nature and focal length of a lens with power +2.0 D?"
      },
      answer: {
        hi: "उत्तल लेंस (अभिसारी); फोकस दूरी f = 1 / P = 1 / 2 = +0.5 मीटर (+50 सेमी)।",
        pa: "ਉੱਤਲ ਲੈਂਜ਼ (ਅਭਿਸਾਰੀ); ਫੋਕਸ ਦੂਰੀ f = 1 / P = 1 / 2 = +0.5 ਮੀਟਰ (+50 ਸੈਂਟੀਮੀਟਰ)।",
        en: "Convex lens (converging); focal length f = 1 / P = 1 / 2 = +0.5 metres (+50 cm)."
      }
    }
  ],
  questions: [
    {
      id: "ett-sci-q1",
      prompt: {
        hi: "किसी गोलीय दर्पण की वक्रता त्रिज्या 32 सेमी है। इसकी फोकस दूरी क्या होगी?",
        pa: "ਕਿਸੇ ਗੋਲਾਕਾਰ ਦਰਪਣ ਦਾ ਵਕਰਤਾ ਅਰਧ-ਵਿਆਸ 32 ਸੈਂਟੀਮੀਟਰ ਹੈ। ਇਸਦੀ ਫੋਕਸ ਦੂਰੀ ਕੀ ਹੋਵੇਗੀ?",
        en: "The radius of curvature of a spherical mirror is 32 cm. What is its focal length?"
      },
      options: [
        { hi: "16 सेमी", pa: "16 ਸੈਂਟੀਮੀਟਰ", en: "16 cm" },
        { hi: "64 सेमी", pa: "64 ਸੈਂਟੀਮੀਟਰ", en: "64 cm" },
        { hi: "8 सेमी", pa: "8 ਸੈਂਟੀਮੀਟਰ", en: "8 cm" },
        { hi: "32 सेमी", pa: "32 ਸੈਂਟੀਮੀਟਰ", en: "32 cm" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "गोलीय दर्पण की फोकस दूरी f = R / 2 होती है। अतः f = 32 / 2 = 16 सेमी।",
        pa: "ਗੋਲਾਕਾਰ ਦਰਪਣ ਦੀ ਫੋਕਸ ਦੂਰੀ f = R / 2 ਹੁੰਦੀ ਹੈ। ਇਸ ਲਈ f = 32 / 2 = 16 ਸੈਂਟੀਮੀਟਰ।",
        en: "For a spherical mirror, focal length f = R / 2. Therefore, f = 32 / 2 = 16 cm."
      }
    },
    {
      id: "ett-sci-q2",
      prompt: {
        hi: "वाहनों में पश्च-दृश्य (rear-view) दर्पण के रूप में कौन सा दर्पण वरीयता से प्रयोग किया जाता है?",
        pa: "ਵਾਹਨਾਂ ਵਿੱਚ ਪਿੱਛੇ ਦੇਖਣ ਵਾਲੇ ਸ਼ੀਸ਼ੇ ਵਜੋਂ ਕਿਹੜਾ ਦਰਪਣ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
        en: "Which mirror is predominantly deployed as a rear-view mirror in motor vehicles?"
      },
      options: [
        { hi: "उत्तल दर्पण", pa: "ਉੱਤਲ ਦਰਪਣ", en: "Convex mirror" },
        { hi: "अवतल दर्पण", pa: "ਅਵਤਲ ਦਰਪਣ", en: "Concave mirror" },
        { hi: "समतल दर्पण", pa: "ਸਮਤਲ ਦਰਪਣ", en: "Plane mirror" },
        { hi: "बेलनाकार दर्पण", pa: "ਵੇਲਣਾਕਾਰ ਦਰਪਣ", en: "Cylindrical mirror" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "उत्तल दर्पण सदैव सीधा तथा छोटा प्रतिबिंब बनाता है और इसका दृष्टि-क्षेत्र बहुत व्यापक होता है, जिससे चालक पीछे का विस्तृत ट्रैफिक देख पाता है।",
        pa: "ਉੱਤਲ ਦਰਪਣ ਹਮੇਸ਼ਾ ਸਿੱਧਾ ਅਤੇ ਛੋਟਾ ਪ੍ਰਤੀਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ ਇਸਦਾ ਦ੍ਰਿਸ਼ਟੀ-ਖੇਤਰ ਵਿਸ਼ਾਲ ਹੁੰਦਾ ਹੈ।",
        en: "Convex mirrors consistently produce an erect, diminished image and provide a wide field of view, enabling drivers to survey large areas."
      }
    },
    {
      id: "ett-sci-q3",
      prompt: {
        hi: "स्नेल का अपवर्तन नियम किस समीकरण द्वारा व्यक्त किया जाता है?",
        pa: "ਸਨੈਲ ਦਾ ਅਪਵਰਤਨ ਨਿਯਮ ਕਿਸ ਸਮੀਕਰਨ ਰਾਹੀਂ ਦਰਸਾਇਆ ਜਾਂਦਾ ਹੈ?",
        en: "Which formula represents Snell's law of refraction?"
      },
      options: [
        { hi: "sin i / sin r = स्थिरांक", pa: "sin i / sin r = ਸਥਿਰ ਅੰਕ", en: "sin i / sin r = constant" },
        { hi: "cos i / cos r = स्थिरांक", pa: "cos i / cos r = ਸਥਿਰ ਅੰਕ", en: "cos i / cos r = constant" },
        { hi: "tan i / tan r = स्थिरांक", pa: "tan i / tan r = ਸਥਿਰ ਅੰਕ", en: "tan i / tan r = constant" },
        { hi: "sin i × sin r = 1", pa: "sin i × sin r = 1", en: "sin i × sin r = 1" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "स्नेल का नियम बताता है कि किन्हीं दो निश्चित माध्यमों के लिए आपतन कोण की ज्या (sin i) तथा अपवर्तन कोण की ज्या (sin r) का अनुपात स्थिर रहता है।",
        pa: "ਸਨੈਲ ਦਾ ਨਿਯਮ ਦੱਸਦਾ ਹੈ ਕਿ ਕਿਸੇ ਦੋ ਮਾਧਿਅਮਾਂ ਲਈ sin i / sin r ਦਾ ਅਨੁਪਾਤ ਸਥਿਰ ਅੰਕ ਹੁੰਦਾ ਹੈ।",
        en: "Snell's law dictates that the ratio of the sine of the angle of incidence to the sine of the angle of refraction is invariant: sin i / sin r = constant."
      }
    },
    {
      id: "ett-sci-q4",
      prompt: {
        hi: "एक लेंस की फोकस दूरी +0.50 मीटर है। इस लेंस की क्षमता क्या होगी?",
        pa: "ਇੱਕ ਲੈਂਜ਼ ਦੀ ਫੋਕਸ ਦੂਰੀ +0.50 ਮੀਟਰ ਹੈ। ਇਸ ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ ਕੀ ਹੋਵੇਗੀ?",
        en: "A lens has a focal length of +0.50 m. What is its optical power?"
      },
      options: [
        { hi: "+2.0 D", pa: "+2.0 D", en: "+2.0 D" },
        { hi: "-2.0 D", pa: "-2.0 D", en: "-2.0 D" },
        { hi: "+0.5 D", pa: "+0.5 D", en: "+0.5 D" },
        { hi: "+5.0 D", pa: "+5.0 D", en: "+5.0 D" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "लेंस की क्षमता P = 1 / f (मीटर में) = 1 / 0.50 = +2.0 डायोप्टर (+2.0 D)। धनात्मक चिह्न उत्तल लेंस दर्शाता है।",
        pa: "ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ P = 1 / f (ਮੀਟਰਾਂ ਵਿੱਚ) = 1 / 0.50 = +2.0 ਡਾਇਓਪਟਰ (+2.0 D)।",
        en: "Lens power P = 1 / f (m) = 1 / 0.50 = +2.0 Dioptres (+2.0 D). Positive power indicates a convex lens."
      }
    },
    {
      id: "ett-sci-q5",
      prompt: {
        hi: "दंत चिकित्सक दाँतों की जाँच के लिए किस दर्पण का उपयोग करते हैं?",
        pa: "ਦੰਦਾਂ ਦੇ ਡਾਕਟਰ ਦੰਦਾਂ ਦੀ ਜਾਂਚ ਲਈ ਕਿਸ ਦਰਪਣ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ?",
        en: "Which mirror do dentists use to inspect patients' teeth?"
      },
      options: [
        { hi: "अवतल दर्पण", pa: "ਅਵਤਲ ਦਰਪਣ", en: "Concave mirror" },
        { hi: "उत्तल दर्पण", pa: "ਉੱਤਲ ਦਰਪਣ", en: "Convex mirror" },
        { hi: "समतल दर्पण", pa: "ਸਮਤਲ ਦਰਪਣ", en: "Plane mirror" },
        { hi: "परवलयिक दर्पण", pa: "ਪਰਵਲਈ ਦਰਪਣ", en: "Parabolic mirror" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "जब वस्तु अवतल दर्पण के ध्रुव और फोकस के बीच रखी जाती है, तो सीधा, बड़ा और आभासी प्रतिबिंब बनता है, जिससे दंत चिकित्सक दाँत को बड़ा देख पाते हैं।",
        pa: "ਜਦੋਂ ਵਸਤੂ ਅਵਤਲ ਦਰਪਣ ਦੇ ਧਰੁਵ ਅਤੇ ਫੋਕਸ ਵਿਚਕਾਰ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਵੱਡਾ ਅਤੇ ਸਿੱਧਾ ਪ੍ਰਤੀਬਿੰਬ ਬਣਦਾ ਹੈ।",
        en: "When an object is placed between the pole and focal point of a concave mirror, it forms an erect, magnified virtual image."
      }
    },
    {
      id: "ett-sci-q6",
      prompt: {
        hi: "लेंस सूत्र (Lens Formula) निम्नलिखित में से कौन सा है?",
        pa: "ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਲੈਂਜ਼ ਸੂਤਰ (Lens Formula) ਹੈ?",
        en: "Which of the following equations correctly expresses the Lens Formula?"
      },
      options: [
        { hi: "1/f = 1/v - 1/u", pa: "1/f = 1/v - 1/u", en: "1/f = 1/v - 1/u" },
        { hi: "1/f = 1/v + 1/u", pa: "1/f = 1/v + 1/u", en: "1/f = 1/v + 1/u" },
        { hi: "1/f = u / v", pa: "1/f = u / v", en: "1/f = u / v" },
        { hi: "f = u + v", pa: "f = u + v", en: "f = u + v" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "लेंस सूत्र 1/f = 1/v - 1/u होता है। जबकि दर्पण सूत्र में धन चिह्न होता है (1/f = 1/v + 1/u)।",
        pa: "ਲੈਂਜ਼ ਸੂਤਰ 1/f = 1/v - 1/u ਹੁੰਦਾ ਹੈ। ਦਰਪਣ ਸੂਤਰ ਵਿੱਚ ਜੋੜ ਦਾ ਨਿਸ਼ਾਨ ਹੁੰਦਾ ਹੈ (1/f = 1/v + 1/u)।",
        en: "The lens formula is 1/f = 1/v - 1/u, contrasting with the mirror formula which uses addition: 1/f = 1/v + 1/u."
      }
    },
    {
      id: "ett-sci-q7",
      prompt: {
        hi: "प्रकाश की चाल सर्वाधिक किस माध्यम में होती है?",
        pa: "ਪ੍ਰਕਾਸ਼ ਦੀ ਚਾਲ ਸਭ ਤੋਂ ਵੱਧ ਕਿਸ ਮਾਧਿਅਮ ਵਿੱਚ ਹੁੰਦੀ ਹੈ?",
        en: "In which medium does light travel at maximum velocity?"
      },
      options: [
        { hi: "निर्वात (3 × 10⁸ मी/से)", pa: "ਨਿਰਵਾਤ (3 × 10⁸ ਮੀ/ਸੈ)", en: "Vacuum (3 × 10⁸ m/s)" },
        { hi: "जल", pa: "ਪਾਣੀ", en: "Water" },
        { hi: "काँच", pa: "ਕੱਚ", en: "Crown glass" },
        { hi: "हीरा", pa: "ਹੀਰਾ", en: "Diamond" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "निर्वात (Vacuum) में प्रकाश की गति उच्चतम होती है: लगभग 3 × 10⁸ मीटर प्रति सेकंड (3,00,000 किमी/सेकंड)।",
        pa: "ਨਿਰਵਾਤ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਦੀ ਚਾਲ ਸਭ ਤੋਂ ਵੱਧ 3 × 10⁸ ਮੀਟਰ/ਸੈਕਿੰਡ ਹੁੰਦੀ ਹੈ।",
        en: "Light attains its maximum possible velocity in a vacuum, exactly c ≈ 3 × 10⁸ m/s (300,000 km/s)."
      }
    },
    {
      id: "ett-sci-q8",
      prompt: {
        hi: "हीरे का निरपेक्ष अपवर्तनांक 2.42 है। इसका क्या अर्थ है?",
        pa: "ਹੀਰੇ ਦਾ ਅਪਵਰਤਨ ਅੰਕ 2.42 ਹੈ। ਇਸਦਾ ਕੀ ਅਰਥ ਹੈ?",
        en: "Diamond exhibits an absolute refractive index of 2.42. What does this imply?"
      },
      options: [
        { hi: "हीरे में प्रकाश की चाल निर्वात की चाल की 1/2.42 गुना रह जाती है", pa: "ਹੀਰੇ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਦੀ ਚਾਲ ਨਿਰਵਾਤ ਨਾਲੋਂ 1/2.42 ਗੁਣਾ ਰਹਿ ਜਾਂਦੀ ਹੈ", en: "The speed of light in diamond is 1/2.42 times that in vacuum" },
        { hi: "हीरे में प्रकाश निर्वात से 2.42 गुना तेज चलता है", pa: "ਹੀਰੇ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਨਿਰਵਾਤ ਨਾਲੋਂ 2.42 ਗੁਣਾ ਤੇਜ਼ ਚੱਲਦਾ ਹੈ", en: "Light propagates 2.42 times faster in diamond than in vacuum" },
        { hi: "हीरा प्रकाश की सभी किरणों को सोख लेता है", pa: "ਹੀਰਾ ਪ੍ਰਕਾਸ਼ ਦੀਆਂ ਸਾਰੀਆਂ ਕਿਰਨਾਂ ਸੋਖ ਲੈਂਦਾ ਹੈ", en: "Diamond absorbs 100% of incident light" },
        { hi: "हीरे का क्रांतिक कोण 90 डिग्री होता है", pa: "ਹੀਰੇ ਦਾ ਕ੍ਰਾਂਤੀਕਾਰੀ ਕੋਣ 90 ਡਿਗਰੀ ਹੁੰਦਾ ਹੈ", en: "The critical angle of diamond equals 90 degrees" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "अपवर्तनांक n = c / v होता है। अतः v = c / 2.42, अर्थात् हीरे में प्रकाश की चाल निर्वात में प्रकाश की चाल की 1/2.42 गुनी होती है।",
        pa: "ਅਪਵਰਤਨ ਅੰਕ n = c / v ਹੁੰਦਾ ਹੈ। ਇਸ ਲਈ v = c / 2.42, ਭਾਵ ਹੀਰੇ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਦੀ ਚਾਲ ਨਿਰਵਾਤ ਦੇ ਮੁਕਾਬਲੇ 1/2.42 ਗੁਣਾ ਹੁੰਦੀ ਹੈ।",
        en: "Since refractive index n = c / v, speed in diamond v = c / 2.42, which means light slows down to approximately 41% of its speed in vacuum."
      }
    },
    {
      id: "ett-sci-q9",
      prompt: {
        hi: "अवतल दर्पण द्वारा वास्तविक, उल्टा और बिंब के बराबर आकार का प्रतिबिंब कहाँ रखने पर बनता है?",
        pa: "ਅਵਤਲ ਦਰਪਣ ਦੁਆਰਾ ਵਾਸਤਵਿਕ, ਉਲਟਾ ਅਤੇ ਵਸਤੂ ਦੇ ਬਰਾਬਰ ਆਕਾਰ ਦਾ ਪ੍ਰਤੀਬਿੰਬ ਕਿੱਥੇ ਰੱਖਣ 'ਤੇ ਬਣਦਾ ਹੈ?",
        en: "Where must an object be situated in front of a concave mirror to yield an inverted image of identical size?"
      },
      options: [
        { hi: "वक्रता केंद्र (C) पर", pa: "ਵਕਰਤਾ ਕੇਂਦਰ (C) 'ਤੇ", en: "At the Centre of Curvature (C)" },
        { hi: "मुख्य फोकस (F) पर", pa: "ਮੁੱਖ ਫੋਕਸ (F) 'ਤੇ", en: "At the Principal Focus (F)" },
        { hi: "अनंत पर", pa: "ਅਨੰਤ 'ਤੇ", en: "At Infinity" },
        { hi: "ध्रुव और फोकस के बीच", pa: "ਧਰੁਵ ਅਤੇ ਫੋਕਸ ਦੇ ਵਿਚਕਾਰ", en: "Between Pole and Focus" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "जब वस्तु अवतल दर्पण के वक्रता केंद्र (C) पर रखी जाती है, तो उसका प्रतिबिंब भी वक्रता केंद्र (C) पर ही वास्तविक, उल्टा और बिंब के समान आकार का बनता है।",
        pa: "ਜਦੋਂ ਵਸਤੂ ਅਵਤਲ ਦਰਪਣ ਦੇ ਵਕਰਤਾ ਕੇਂਦਰ (C) 'ਤੇ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਪ੍ਰਤੀਬਿੰਬ ਵੀ C 'ਤੇ ਹੀ ਬਰਾਬਰ ਆਕਾਰ ਦਾ ਬਣਦਾ ਹੈ।",
        en: "When placed at the Centre of Curvature (C), a concave mirror forms a real, inverted image at C of equal dimensions (m = -1)."
      }
    },
    {
      id: "ett-sci-q10",
      prompt: {
        hi: "यदि किसी लेंस की क्षमता -4.0 D है, तो यह किस प्रकार का लेंस है और इसकी फोकस दूरी क्या है?",
        pa: "ਜੇਕਰ ਕਿਸੇ ਲੈਂਜ਼ ਦੀ ਸਮਰੱਥਾ -4.0 D ਹੈ, ਤਾਂ ਇਹ ਕਿਸ ਪ੍ਰਕਾਰ ਦਾ ਲੈਂਜ਼ ਹੈ ਅਤੇ ਇਸਦੀ ਫੋਕਸ ਦੂਰੀ ਕੀ ਹੈ?",
        en: "If a lens has optical power -4.0 D, what is its optical nature and focal length?"
      },
      options: [
        { hi: "अवतल लेंस; f = -0.25 मीटर (-25 सेमी)", pa: "ਅਵਤਲ ਲੈਂਜ਼; f = -0.25 ਮੀਟਰ (-25 ਸੈਂਟੀਮੀਟਰ)", en: "Concave lens; f = -0.25 m (-25 cm)" },
        { hi: "उत्तल लेंस; f = +0.25 मीटर (+25 सेमी)", pa: "ਉੱਤਲ ਲੈਂਜ਼; f = +0.25 ਮੀਟਰ (+25 ਸੈਂਟੀਮੀਟਰ)", en: "Convex lens; f = +0.25 m (+25 cm)" },
        { hi: "अवतल लेंस; f = -4.0 मीटर", pa: "ਅਵਤਲ ਲੈਂਜ਼; f = -4.0 ਮੀਟਰ", en: "Concave lens; f = -4.0 m" },
        { hi: "उत्तल लेंस; f = +0.40 मीटर", pa: "ਉੱਤਲ ਲੈਂਜ਼; f = +0.40 ਮੀਟਰ", en: "Convex lens; f = +0.40 m" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "ऋणात्मक क्षमता अवतल लेंस (अपसारी) को दर्शाती है। f = 1 / P = 1 / (-4.0) = -0.25 मीटर = -25 सेमी।",
        pa: "ਰਿਣਾਤਮਕ ਸਮਰੱਥਾ ਅਵਤਲ ਲੈਂਜ਼ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ। f = 1 / P = 1 / (-4.0) = -0.25 ਮੀਟਰ = -25 ਸੈਂਟੀਮੀਟਰ।",
        en: "Negative optical power denotes a concave (diverging) lens. Focal length f = 1 / P = 1 / (-4.0) = -0.25 m (-25 cm)."
      }
    },
    {
      id: "ett-sci-q11",
      prompt: {
        hi: "समतल दर्पण की फोकस दूरी (f) कितनी होती है?",
        pa: "ਸਮਤਲ ਦਰਪਣ ਦੀ ਫੋਕਸ ਦੂਰੀ (f) ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?",
        en: "What is the focal length of a flat plane mirror?"
      },
      options: [
        { hi: "अनंत (Infinity)", pa: "ਅਨੰਤ (Infinity)", en: "Infinity" },
        { hi: "शून्य (Zero)", pa: "ਸਿਫ਼ਰ (Zero)", en: "Zero" },
        { hi: "25 सेमी", pa: "25 ਸੈਂਟੀਮੀਟਰ", en: "25 cm" },
        { hi: "1 मीटर", pa: "1 ਮੀਟਰ", en: "1 metre" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "समतल दर्पण की वक्रता त्रिज्या अनंत होती है, इसलिए इसकी फोकस दूरी f = R/2 = ∞ (अनंत) होती है।",
        pa: "ਸਮਤਲ ਦਰਪਣ ਦਾ ਵਕਰਤਾ ਅਰਧ-ਵਿਆਸ ਅਨੰਤ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਫੋਕਸ ਦੂਰੀ ਅਨੰਤ ਹੁੰਦੀ ਹੈ।",
        en: "Because the radius of curvature of a planar surface is infinite, the focal length of a plane mirror is infinity."
      }
    },
    {
      id: "ett-sci-q12",
      prompt: {
        hi: "जब प्रकाश किरण विरल माध्यम से सघन माध्यम में प्रवेश करती है, तो वह:",
        pa: "ਜਦੋਂ ਪ੍ਰਕਾਸ਼ ਕਿਰਨ ਵਿਰਲੇ ਮਾਧਿਅਮ ਤੋਂ ਸੰਘਣੇ ਮਾਧਿਅਮ ਵਿੱਚ ਦਾਖ਼ਲ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਉਹ:",
        en: "When a light ray passes obliquely from an optically rarer to a denser medium, it:"
      },
      options: [
        { hi: "अभिलंब (Normal) की ओर झुकती है", pa: "ਲੰਬ (Normal) ਵੱਲ ਝੁਕਦੀ ਹੈ", en: "Bends towards the normal" },
        { hi: "अभिलंब से दूर हटती है", pa: "ਲੰਬ ਤੋਂ ਦੂਰ ਹਟਦੀ ਹੈ", en: "Bends away from the normal" },
        { hi: "बिना मुड़े सीधी निकल जाती है", pa: "ਬਿਨਾਂ ਮੁੜੇ ਸਿੱਧੀ ਨਿਕਲ ਜਾਂਦੀ ਹੈ", en: "Travels straight without deviation" },
        { hi: "पूर्णतः वापस उसी माध्यम में लौटती है", pa: "ਪੂਰੀ ਤਰ੍ਹਾਂ ਪਿਛਲੇ ਮਾਧਿਅਮ ਵਿੱਚ ਪਰਤਦੀ ਹੈ", en: "Reflects totally back into first medium" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "सघन माध्यम में प्रकाश की गति कम हो जाती है, जिससे किरण अभिलंब (Normal) की ओर मुड़ जाती है।",
        pa: "ਸੰਘਣੇ ਮਾਧਿਅਮ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਦੀ ਚਾਲ ਘਟ ਜਾਂਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਕਿਰਨ ਲੰਬ ਵੱਲ ਝੁਕਦੀ ਹੈ।",
        en: "Velocity drops in optically denser media, refracting the wavefront towards the normal."
      }
    },
    {
      id: "ett-sci-q13",
      prompt: {
        hi: "सोलर कुकर और सौर भट्टियों में सूर्य की किरणों को केंद्रित करने के लिए कौन सा दर्पण प्रयुक्त होता है?",
        pa: "ਸੋਲਰ ਕੁੱਕਰਾਂ ਅਤੇ ਸੌਰ ਭੱਠੀਆਂ ਵਿੱਚ ਸੂਰਜ ਦੀਆਂ ਕਿਰਨਾਂ ਨੂੰ ਕੇਂਦਰਿਤ ਕਰਨ ਲਈ ਕਿਹੜਾ ਦਰਪਣ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
        en: "Which mirror is utilized in solar cookers and solar furnaces to concentrate incident sunlight?"
      },
      options: [
        { hi: "बड़ा अवतल दर्पण", pa: "ਵੱਡਾ ਅਵਤਲ ਦਰਪਣ", en: "Large concave mirror" },
        { hi: "उत्तल दर्पण", pa: "ਉੱਤਲ ਦਰਪਣ", en: "Convex mirror" },
        { hi: "समतल दर्पण", pa: "ਸਮਤਲ ਦਰਪਣ", en: "Plane mirror" },
        { hi: "उत्तल लेंस", pa: "ਉੱਤਲ ਲੈਂਜ਼", en: "Convex lens" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "अवतल दर्पण अभिसारी (converging) होता है, जो समांतर सूर्य किरणों को अपने मुख्य फोकस पर केंद्रित करके उच्च तापमान उत्पन्न करता है।",
        pa: "ਅਵਤਲ ਦਰਪਣ ਅਭਿਸਾਰੀ ਹੁੰਦਾ ਹੈ, ਜੋ ਸੂਰਜ ਦੀਆਂ ਕਿਰਨਾਂ ਨੂੰ ਫੋਕਸ 'ਤੇ ਕੇਂਦਰਿਤ ਕਰਕੇ ਉੱਚ ਤਾਪਮਾਨ ਪੈਦਾ ਕਰਦਾ ਹੈ।",
        en: "Concave mirrors converge parallel solar rays onto their focal point, generating intense thermal energy."
      }
    },
    {
      id: "ett-sci-q14",
      prompt: {
        hi: "समतल दर्पण द्वारा बने प्रतिबिंब का रेखीय आवर्धन (m) कितना होता है?",
        pa: "ਸਮਤਲ ਦਰਪਣ ਦੁਆਰਾ ਬਣੇ ਪ੍ਰਤੀਬਿੰਬ ਦਾ ਵਡਦਰਸ਼ਨ (m) ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?",
        en: "What is the linear magnification (m) of an image produced by a plane mirror?"
      },
      options: [
        { hi: "+1", pa: "+1", en: "+1" },
        { hi: "-1", pa: "-1", en: "-1" },
        { hi: "> 1", pa: "> 1", en: "> 1" },
        { hi: "शून्य", pa: "ਸਿਫ਼ਰ", en: "Zero" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "समतल दर्पण में प्रतिबिंब की ऊँचाई बिंब की ऊँचाई के बराबर होती है (h' = h) और प्रतिबिंब सीधा (धनात्मक) होता है, अतः m = +1 होता है।",
        pa: "ਸਮਤਲ ਦਰਪਣ ਵਿੱਚ ਪ੍ਰਤੀਬਿੰਬ ਵਸਤੂ ਦੇ ਬਰਾਬਰ ਅਤੇ ਸਿੱਧਾ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ m = +1 ਹੁੰਦਾ ਹੈ।",
        en: "In a plane mirror, image height equals object height (h' = h) and is erect, yielding m = +1."
      }
    },
    {
      id: "ett-sci-q15",
      prompt: {
        hi: "प्रकाश के एक माध्यम से दूसरे माध्यम में जाने पर कौन सी विशेषता अपरिवर्तित रहती है?",
        pa: "ਪ੍ਰਕਾਸ਼ ਦੇ ਇੱਕ ਮਾਧਿਅਮ ਤੋਂ ਦੂਜੇ ਮਾਧਿਅਮ ਵਿੱਚ ਜਾਣ ਵੇਲੇ ਕਿਹੜੀ ਵਿਸ਼ੇਸ਼ਤਾ ਨਹੀਂ ਬਦਲਦੀ?",
        en: "Which characteristic of light remains invariant during refraction across media?"
      },
      options: [
        { hi: "आवृत्ति (Frequency)", pa: "ਆਵ੍ਰਿਤੀ (Frequency)", en: "Frequency" },
        { hi: "चाल (Velocity)", pa: "ਚਾਲ (Velocity)", en: "Velocity" },
        { hi: "तरंगदैर्ध्य (Wavelength)", pa: "ਤਰੰਗ ਲੰਬਾਈ (Wavelength)", en: "Wavelength" },
        { hi: "आयाम (Amplitude)", pa: "ਅਯਾਮ (Amplitude)", en: "Amplitude" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "अपवर्तन के दौरान प्रकाश की चाल और तरंगदैर्ध्य दोनों बदल जाते हैं, परंतु आवृत्ति (Frequency) स्रोत पर निर्भर होने के कारण अपरिवर्तित रहती है।",
        pa: "ਅਪਵਰਤਨ ਵੇਲੇ ਚਾਲ ਅਤੇ ਤਰੰਗ ਲੰਬਾਈ ਬਦਲ ਜਾਂਦੀ ਹੈ, ਪਰ ਆਵ੍ਰਿਤੀ ਨਹੀਂ ਬਦਲਦੀ।",
        en: "During refraction, wave speed and wavelength change proportionally, but frequency remains constant as it depends on the source."
      }
    },
    {
      id: "ett-sci-q16",
      prompt: {
        hi: "काँच की आयताकार सिल्ली (glass slab) से गुजरने पर निर्गत किरण आपतित किरण के सापेक्ष कैसे निकलती है?",
        pa: "ਕੱਚ ਦੀ ਸਲੈਬ ਵਿੱਚੋਂ ਲੰਘਣ ਤੋਂ ਬਾਅਦ ਨਿਰਗਤ ਕਿਰਨ ਆਪਤੀ ਕਿਰਨ ਦੇ ਸਾਪੇਖ ਕਿਵੇਂ ਨਿਕਲਦੀ ਹੈ?",
        en: "How does the emergent ray exit relative to the original incident ray through a parallel rectangular glass slab?"
      },
      options: [
        { hi: "समानांतर, पार्श्व विस्थापित होकर (Laterally shifted)", pa: "ਸਮਾਨਾਂਤਰ, ਪਾਸੇ ਵੱਲ ਵਿਸਥਾਪਿਤ ਹੋ ਕੇ (Laterally shifted)", en: "Parallel, with lateral displacement" },
        { hi: "90 डिग्री के कोण पर मुड़कर", pa: "90 ਡਿਗਰੀ ਕੋਣ 'ਤੇ ਮੁੜ ਕੇ", en: "Deflected at 90 degrees" },
        { hi: "180 डिग्री पर विपरीत लौटकर", pa: "180 ਡਿਗਰੀ 'ਤੇ ਵਾਪਸ ਮੁੜ ਕੇ", en: "Reflected backwards at 180 degrees" },
        { hi: "बिना किसी पार्श्व विस्थापन के ठीक उसी रेखा पर", pa: "ਬਿਨਾਂ ਕਿਸੇ ਵਿਸਥਾਪਨ ਦੇ ਉਸੇ ਰੇਖਾ 'ਤੇ", en: "Along the exact identical path without shift" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "सिल्ल के दोनों समानांतर फलकों पर अपवर्तन कोण बराबर होने के कारण निर्गत किरण आपतित किरण के समानांतर निकलती है, परंतु कुछ पार्श्व विस्थापन (Lateral displacement) होता है।",
        pa: "ਸਮਾਨਾਂਤਰ ਸਤਹਾਂ ਕਰਕੇ ਨਿਰਗਤ ਕਿਰਨ ਆਪਤੀ ਕਿਰਨ ਦੇ ਸਮਾਨਾਂਤਰ ਹੁੰਦੀ ਹੈ ਪਰ ਥੋੜ੍ਹੀ ਪਾਸੇ ਹੱਟ ਜਾਂਦੀ ਹੈ।",
        en: "Refraction across two parallel interfaces causes the emergent ray to emerge parallel to incident direction, shifted by a lateral displacement."
      }
    },
    {
      id: "ett-sci-q17",
      prompt: {
        hi: "+2.0 D और -1.5 D क्षमता वाले दो पतले लेंसों को संपर्क में रखने पर संयोजन की कुल क्षमता क्या होगी?",
        pa: "+2.0 D ਅਤੇ -1.5 D ਸਮਰੱਥਾ ਵਾਲੇ ਦੋ ਪਤਲੇ ਲੈਂਜ਼ਾਂ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਨ 'ਤੇ ਕੁੱਲ ਸਮਰੱਥਾ ਕੀ ਹੋਵੇਗੀ?",
        en: "Two thin lenses of powers +2.0 D and -1.5 D are placed in contact. What is the net power of the combination?"
      },
      options: [
        { hi: "+0.5 D", pa: "+0.5 D", en: "+0.5 D" },
        { hi: "+3.5 D", pa: "+3.5 D", en: "+3.5 D" },
        { hi: "-0.5 D", pa: "-0.5 D", en: "-0.5 D" },
        { hi: "-3.0 D", pa: "-3.0 D", en: "-3.0 D" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "संपर्क में रखे लेंसों की कुल क्षमता P = P₁ + P₂ होती है। अतः P = +2.0 D + (-1.5 D) = +0.5 D।",
        pa: "ਆਪਸ ਵਿੱਚ ਜੁੜੇ ਲੈਂਜ਼ਾਂ ਦੀ ਕੁੱਲ ਸਮਰੱਥਾ P = P₁ + P₂ ਹੁੰਦੀ ਹੈ: +2.0 + (-1.5) = +0.5 D।",
        en: "Net optical power of lenses in contact is additive: P = P₁ + P₂ = +2.0 D + (-1.5 D) = +0.5 D."
      }
    },
    {
      id: "ett-sci-q18",
      prompt: {
        hi: "उत्तल लेंस के सामने वस्तु को कहाँ रखने पर उसका प्रतिबिंब अनंत पर बनता है?",
        pa: "ਉੱਤਲ ਲੈਂਜ਼ ਦੇ ਸਾਹਮਣੇ ਵਸਤੂ ਨੂੰ ਕਿੱਥੇ ਰੱਖਣ 'ਤੇ ਪ੍ਰਤੀਬਿੰਬ ਅਨੰਤ 'ਤੇ ਬਣਦਾ ਹੈ?",
        en: "Where should an object be placed in front of a convex lens to project its image at infinity?"
      },
      options: [
        { hi: "मुख्य फोकस (F₁) पर", pa: "ਮੁੱਖ ਫੋਕਸ (F₁) 'ਤੇ", en: "At the Principal Focus (F₁)" },
        { hi: "2F₁ पर", pa: "2F₁ 'ਤੇ", en: "At 2F₁" },
        { hi: "प्रकाशीय केंद्र (O) पर", pa: "ਪ੍ਰਕਾਸ਼ੀ ਕੇਂਦਰ (O) 'ਤੇ", en: "At Optical Centre (O)" },
        { hi: "अनंत पर", pa: "ਅਨੰਤ 'ਤੇ", en: "At Infinity" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "जब वस्तु उत्तल लेंस के प्रथम मुख्य फोकस (F₁) पर रखी जाती है, तो अपवर्तित किरणें समानांतर हो जाती हैं और प्रतिबिंब अनंत पर बनता है।",
        pa: "ਜਦੋਂ ਵਸਤੂ ਫੋਕਸ F₁ 'ਤੇ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਅਪਵਰਤਿਤ ਕਿਰਨਾਂ ਸਮਾਨਾਂਤਰ ਹੋ ਕੇ ਅਨੰਤ 'ਤੇ ਪ੍ਰਤੀਬਿੰਬ ਬਣਾਉਂਦੀਆਂ ਹਨ।",
        en: "Light rays emerging from an object at the principal focus (F₁) emerge parallel after refraction, forming an image at infinity."
      }
    },
    {
      id: "ett-sci-q19",
      prompt: {
        hi: "पानी में आंशिक रूप से डूबी हुई पेंसिल सतह पर मुड़ी हुई क्यों दिखाई देती है?",
        pa: "ਪਾਣੀ ਵਿੱਚ ਅੰਸ਼ਕ ਤੌਰ 'ਤੇ ਡੁੱਬੀ ਪੈਨਸਿਲ ਸਤ੍ਹਾ 'ਤੇ ਮੁੜੀ ਹੋਈ ਕਿਉਂ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ?",
        en: "Why does a pencil partially immersed in water appear bent at the water surface?"
      },
      options: [
        { hi: "प्रकाश के अपवर्तन के कारण", pa: "ਪ੍ਰਕਾਸ਼ ਦੇ ਅਪਵਰਤਨ ਕਾਰਨ", en: "Due to refraction of light" },
        { hi: "प्रकाश के परावर्तन के कारण", pa: "ਪ੍ਰਕਾਸ਼ ਦੇ ਪਰਵਰਤਨ ਕਾਰਨ", en: "Due to reflection of light" },
        { hi: "प्रकाश के प्रकीर्णन के कारण", pa: "ਪ੍ਰਕਾਸ਼ ਦੇ ਖਿਲਾਰਨ ਕਾਰਨ", en: "Due to scattering of light" },
        { hi: "पानी के दबाव के कारण", pa: "ਪਾਣੀ ਦੇ ਦਬਾਅ ਕਾਰਨ", en: "Due to hydrostatic pressure" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "पानी (सघन माध्यम) से हवा (विरल माध्यम) में आते समय प्रकाश की किरणें अभिलंब से दूर मुड़ जाती हैं, जिससे पेंसिल की नोक उठी हुई और मुड़ी प्रतीत होती है।",
        pa: "ਪਾਣੀ ਤੋਂ ਹਵਾ ਵਿੱਚ ਆਉਂਦੀਆਂ ਪ੍ਰਕਾਸ਼ ਕਿਰਨਾਂ ਲੰਬ ਤੋਂ ਪਰ੍ਹੇ ਮੁੜਦੀਆਂ ਹਨ, ਜਿਸ ਕਾਰਨ ਪੈਨਸਿਲ ਮੁੜੀ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ।",
        en: "Rays emerging from water into air refract away from the normal, shifting the apparent depth and bending the pencil's appearance."
      }
    },
    {
      id: "ett-sci-q20",
      prompt: {
        hi: "कार्तीय चिह्न परिपाटी के अनुसार किस दर्पण की फोकस दूरी सदैव धनात्मक (+) होती है?",
        pa: "ਕਾਰਤੀਅਨ ਚਿੰਨ੍ਹ ਪ੍ਰਣਾਲੀ ਅਨੁਸਾਰ ਕਿਸ ਦਰਪਣ ਦੀ ਫੋਕਸ ਦੂਰੀ ਹਮੇਸ਼ਾ ਧਨਾਤਮਕ (+) ਹੁੰਦੀ ਹੈ?",
        en: "According to the Cartesian Sign Convention, which mirror strictly has a positive (+) focal length?"
      },
      options: [
        { hi: "उत्तल दर्पण", pa: "ਉੱਤਲ ਦਰਪਣ", en: "Convex mirror" },
        { hi: "अवतल दर्पण", pa: "ਅਵਤਲ ਦਰਪਣ", en: "Concave mirror" },
        { hi: "समतल दर्पण", pa: "ਸਮਤਲ ਦਰਪਣ", en: "Plane mirror" },
        { hi: "उत्तल-अवतल संयुक्त दर्पण", pa: "ਉੱਤਲ-ਅਵਤਲ ਸੰਯੁਕਤ ਦਰਪਣ", en: "Concavo-convex mirror" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "उत्तल दर्पण का मुख्य फोकस दर्पण के पीछे (आपतित प्रकाश की दिशा में) होता है, इसलिए इसकी फोकस दूरी सदैव धनात्मक (+) मानी जाती है।",
        pa: "ਉੱਤਲ ਦਰਪਣ ਦਾ ਮੁੱਖ ਫੋਕਸ ਦਰਪਣ ਦੇ ਪਿੱਛੇ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਇਸਦੀ ਫੋਕਸ ਦੂਰੀ ਹਮੇਸ਼ਾ ਧਨਾਤਮਕ ਹੁੰਦੀ ਹੈ।",
        en: "The principal focus of a convex mirror lies behind the reflecting surface along incident light direction, making its focal length positive (+)."
      }
    }
  ],
  sources: [
    {
      title: "NCERT Class 10 Science · Chapter 9: Light - Reflection and Refraction",
      url: "https://ncert.nic.in/textbook.php?jesc1=0-16"
    },
    {
      title: "Education Recruitment Board Punjab · 6635 ETT Official Syllabus Document",
      url: "https://educationrecruitmentboard.com/ETT6635/Docs/ETT6635Syllabus13_08_2021.pdf"
    }
  ],
  videos: [
    {
      title: "Reflection and Refraction of Light · Physics Fundamentals",
      url: "https://www.youtube.com/watch?v=g9Qu1l6Qx_A"
    }
  ],
  documents: [
    {
      title: "PSEB Science Class 10 Textbook",
      url: "https://www.pseb.ac.in/public/books"
    }
  ]
};

// Append or update ettScienceLesson
const lessonsPath = './content/lessons.json';
const existing = JSON.parse(fs.readFileSync(lessonsPath, 'utf8'));

const idx = existing.findIndex(l => l.id === ettScienceLesson.id);
if (idx >= 0) {
  existing[idx] = ettScienceLesson;
} else {
  existing.push(ettScienceLesson);
}

fs.writeFileSync(lessonsPath, JSON.stringify(existing, null, 2));
console.log(`Saved ${ettScienceLesson.id} successfully! Total lessons: ${existing.length}`);
