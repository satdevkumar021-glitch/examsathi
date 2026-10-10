import fs from 'node:fs';

const ettSstLesson = {
  id: "ett-punjab-history-geography",
  subject: "SST",
  unit: "Punjab History and Geography",
  level: "Punjab ETT Paper B Core Topic",
  title: {
    hi: "पंजाब की भौगोलिक विशेषताएँ और उनका इतिहास पर प्रभाव",
    pa: "ਪੰਜਾਬ ਦੀਆਂ ਭੂਗੋਲਿਕ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਤੇ ਉਹਨਾਂ ਦਾ ਇਤਿਹਾਸ ਉੱਤੇ ਪ੍ਰਭਾਵ",
    en: "Physical Features of Punjab and their Impact on History"
  },
  summary: {
    hi: "पंजाब के भौतिक स्वरूप, पाँच प्रमुख नदियों, दोआबों (बिस्त जालंधर, बारी, रचना, चज, सिंध सागर), उत्तर-पश्चिमी दर्रों और इतिहास पर भौगोलिक प्रभाव का संपूर्ण आधिकारिक अध्ययन।",
    pa: "ਪੰਜਾਬ ਦੀ ਭੂਗੋਲਿਕ ਬਣਤਰ, ਪੰਜ ਮੁੱਖ ਦਰਿਆਵਾਂ, ਦੁਆਬਿਆਂ (ਬਿਸਤ ਜਲੰਧਰ, ਬਾਰੀ, ਰਚਨਾ, ਚੱਜ, ਸਿੰਧ ਸਾਗਰ), ਉੱਤਰ-ਪੱਛਮੀ ਦੱਰਿਆਂ ਅਤੇ ਇਤਿਹਾਸ ਉੱਤੇ ਭੂਗੋਲਿਕ ਪ੍ਰਭਾਵ ਦਾ ਪੂਰਾ ਅਧਿਕਾਰਤ ਅਧਿਐਨ।",
    en: "Comprehensive analysis of Punjab's physical features, five historical rivers, doabs (Bist Jalandhar, Bari, Rechna, Chaj, Sindh Sagar), northwestern passes, and geographic influence on historical events."
  },
  sections: [
    {
      heading: {
        hi: "1. नामकरण और भौगोलिक स्थिति (Nomenclature & Geographical Setting)",
        pa: "1. ਨਾਮਕਰਨ ਅਤੇ ਭੂਗੋਲਿਕ ਸਥਿਤੀ (Nomenclature & Geographical Setting)",
        en: "1. Nomenclature and Geographical Setting of Punjab"
      },
      text: {
        hi: "शब्द 'पंजाब' दो फारसी शब्दों 'पंज' (अर्थात पाँच) और 'आब' (अर्थात पानी या नदी) के मेल से बना है, जिसका अर्थ है पाँच नदियों की भूमि। वैदिक काल में इस पावन क्षेत्र को 'सप्त सिंधु' (सात नदियों का देश) कहा जाता था, जिसमें सिंधु, झेलम, चिनाब, रावी, व्यास, सतलुज और सरस्वती नदियाँ शामिल थीं। यूनानियों ने इसे 'पेंटापोटामिया' (Pentapotamia) नाम दिया, जिसका अर्थ भी पाँच नदियों का प्रदेश है। रामायण और महाभारत काल में इसे 'पंचनद' और कभी-कभी 'टक देश' कहा गया। ऐतिहासिक पंजाब उत्तर में हिमालय पर्वत की श्रेणियों से लेकर दक्षिण में राजस्थान के मरुस्थल तक तथा पूर्व में यमुना नदी से पश्चिम में सिंधु नदी तक फैला हुआ था। 1947 में भारत के विभाजन के समय पंजाब को दो भागों में विभाजित किया गया — पश्चिमी पंजाब (जो पाकिस्तान में चला गया) और पूर्वी पंजाब (जो भारत में रहा)। बाद में 1 नवंबर 1966 को भाषा के आधार पर पुनर्गठन होने पर हरियाणा और हिमाचल प्रदेश के अलग होने के बाद वर्तमान भारतीय पंजाब अस्तित्व में आया, जिसमें आज 23 प्रशासनिक जिले हैं।",
        pa: "ਸ਼ਬਦ 'ਪੰਜਾਬ' ਫ਼ਾਰਸੀ ਦੇ ਦੋ ਸ਼ਬਦਾਂ 'ਪੰਜ' (ਭਾਵ ਪੰਜ) ਅਤੇ 'ਆਬ' (ਭਾਵ ਪਾਣੀ ਜਾਂ ਦਰਿਆ) ਦੇ ਸੁਮੇਲ ਤੋਂ ਬਣਿਆ ਹੈ, ਜਿਸਦਾ ਅਰਥ ਹੈ ਪੰਜ ਦਰਿਆਵਾਂ ਦੀ ਧਰਤੀ। ਵੈਦਿਕ ਕਾਲ ਵਿੱਚ ਇਸ ਖਿੱਤੇ ਨੂੰ 'ਸਪਤ ਸਿੰਧੂ' (ਸੱਤ ਦਰਿਆਵਾਂ ਦੀ ਧਰਤੀ) ਆਖਿਆ ਜਾਂਦਾ ਸੀ, ਜਿਸ ਵਿੱਚ ਸਿੰਧ, ਜਿਹਲਮ, ਚਨਾਬ, ਰਾਵੀ, ਬਿਆਸ, ਸਤਲੁਜ ਅਤੇ ਸਰਸਵਤੀ ਸ਼ਾਮਲ ਸਨ। ਯੂਨਾਨੀਆਂ ਨੇ ਇਸਨੂੰ 'ਪੈਂਟਾਪੋਟਾਮੀਆ' (Pentapotamia) ਕਿਹਾ, ਜਿਸਦਾ ਅਰਥ ਵੀ ਪੰਜ ਦਰਿਆਵਾਂ ਦਾ ਦੇਸ਼ ਹੈ। ਰਾਮਾਇਣ ਅਤੇ ਮਹਾਂਭਾਰਤ ਵਿੱਚ ਇਸਨੂੰ 'ਪੰਚਨਦ' ਅਤੇ ਕਿਸੇ ਸਮੇਂ 'ਟੱਕ ਦੇਸ਼' ਵੀ ਕਿਹਾ ਗਿਆ। ਇਤਿਹਾਸਕ ਪੰਜਾਬ ਉੱਤਰ ਵਿੱਚ ਹਿਮਾਲਿਆ ਦੀਆਂ ਉੱਚੀਆਂ ਸ਼੍ਰੇਣੀਆਂ ਤੋਂ ਦੱਖਣ ਵਿੱਚ ਰਾਜਸਥਾਨ ਦੇ ਮਾਰੂਥਲ ਤੱਕ ਅਤੇ ਪੂਰਬ ਵਿੱਚ ਯਮੁਨਾ ਤੋਂ ਪੱਛਮ ਵਿੱਚ ਸਿੰਧ ਦਰਿਆ ਤੱਕ ਫੈਲਿਆ ਹੋਇਆ ਸੀ। 1947 ਵਿੱਚ ਭਾਰਤ ਦੀ ਵੰਡ ਵੇਲੇ ਪੰਜਾਬ ਨੂੰ ਦੋ ਹਿੱਸਿਆਂ ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ — ਪੱਛਮੀ ਪੰਜਾਬ (ਜੋ ਪਾਕਿਸਤਾਨ ਵਿੱਚ ਗਿਆ) ਅਤੇ ਚੜ੍ਹਦਾ ਪੰਜਾਬ (ਜੋ ਭਾਰਤ ਦਾ ਹਿੱਸਾ ਬਣਿਆ)। ਬਾਅਦ ਵਿੱਚ 1 ਨਵੰਬਰ 1966 ਨੂੰ ਭਾਸ਼ਾਈ ਆਧਾਰ 'ਤੇ ਹਰਿਆਣਾ ਅਤੇ ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਵੱਖ ਹੋਣ ਮਗਰੋਂ ਅਜੋਕਾ ਪੰਜਾਬ ਬਣਿਆ, ਜਿਸ ਵਿੱਚ ਅੱਜ 23 ਜ਼ਿਲ੍ਹੇ ਹਨ।",
        en: "The word Punjab is derived from two Persian words: Panj meaning five and Aab meaning water or river, signifying the land of five rivers. During the Vedic period, this sacred region was renowned as Sapta Sindhu (land of seven rivers), comprising the Indus, Jhelum, Chenab, Ravi, Beas, Sutlej, and Saraswati. Greek historians and geographers referred to it as Pentapotamia, which likewise denotes an inland tract watered by five streams. In epic Sanskrit literature including the Ramayana and Mahabharata, it was termed Panchanada and occasionally Takka Desha after an ancient tribe. Historically, Punjab extended from the towering Himalayan ranges in the north to the arid Thar Desert of Rajasthan in the south, and from the Yamuna River in the east to the mighty Indus River in the west. In 1947, British partition divided the province into West Punjab (now in Pakistan) and East Punjab (in India). Subsequently, on 1 November 1966, the linguistic reorganization separated Haryana and merged hill tracts into Himachal Pradesh, creating the modern Indian Punjab which currently comprises 23 administrative districts."
      }
    },
    {
      heading: {
        hi: "2. पंजाब के तीन भौतिक विभाग (Three Physical Divisions of Punjab)",
        pa: "2. ਪੰਜਾਬ ਦੀਆਂ ਤਿੰਨ ਭੌਤਿਕ ਵੰਡਾਂ (Three Physical Divisions of Punjab)",
        en: "2. Three Physical Divisions of Historical Punjab"
      },
      text: {
        hi: "भौगोलिक दृष्टिकोण से ऐतिहासिक पंजाब को तीन प्रमुख धरातलीय भागों में बाँटा गया है: (क) हिमालय और उसकी उत्तर-पश्चिमी पर्वत श्रेणियाँ: यह क्षेत्र पंजाब के उत्तर और उत्तर-पश्चिम में स्थित है। इसमें महान हिमालय, मध्य हिमालय और शिवालिक पहाड़ियाँ आती हैं। ये पर्वत पंजाब के लिए प्राकृतिक सुरक्षा दीवार का कार्य करते रहे हैं और मानसून पवनों को रोककर प्रचुर वर्षा करवाते हैं। (ख) उप-पर्वतीय क्षेत्र (कांडी क्षेत्र या तराई प्रदेश): यह शिवालिक पहाड़ियों और मैदानी भागों के बीच की संकरी पट्टी है, जो होशियारपुर, गुरदासपुर, पठानकोट और रूपनगर (रोपड़) जिलों में फैली है। यहाँ की भूमि कंकड़-पत्थर युक्त, ढालू और चोयों (बरसाती नालों) द्वारा कटी-फटी है। (ग) विशाल जलोढ़ मैदान: यह पंजाब का सबसे उपजाऊ और विशाल भू-भाग है, जो सतलुज, व्यास, रावी, चिनाब और झेलम नदियों द्वारा लाई गई उपजाऊ जलोढ़ मिट्टी (Alluvial Soil) से बना है। इसे दो भागों में बाँटा जाता है — पूर्वी मैदान और पश्चिमी मैदान। यह क्षेत्र कृषि की दृष्टि से अत्यंत समृद्ध है और प्राचीन काल से ही सभ्यताओं का केंद्र रहा है।",
        pa: "ਭੂਗੋਲਿਕ ਦ੍ਰਿਸ਼ਟੀ ਤੋਂ ਇਤਿਹਾਸਕ ਪੰਜਾਬ ਨੂੰ ਤਿੰਨ ਮੁੱਖ ਧਰਾਤਲੀ ਭਾਗਾਂ ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ ਹੈ: (ੳ) ਹਿਮਾਲਿਆ ਅਤੇ ਇਸਦੀਆਂ ਉੱਤਰ-ਪੱਛਮੀ ਪਰਬਤ ਸ਼੍ਰੇਣੀਆਂ: ਇਹ ਖੇਤਰ ਪੰਜਾਬ ਦੇ ਉੱਤਰ ਅਤੇ ਉੱਤਰ-ਪੱਛਮ ਵਿੱਚ ਸਥਿਤ ਹੈ। ਇਸ ਵਿੱਚ ਮਹਾਨ ਹਿਮਾਲਿਆ, ਮੱਧ ਹਿਮਾਲਿਆ ਅਤੇ ਸ਼ਿਵਾਲਿਕ ਪਹਾੜੀਆਂ ਆਉਂਦੀਆਂ ਹਨ। ਇਹ ਪਰਬਤ ਪੰਜਾਬ ਲਈ ਕੁਦਰਤੀ ਰੱਖਿਆ ਕੰਧ ਦਾ ਕੰਮ ਕਰਦੇ ਰਹੇ ਹਨ ਅਤੇ ਮਾਨਸੂਨ ਪੌਣਾਂ ਨੂੰ ਰੋਕ ਕੇ ਭਰਪੂਰ ਮੀਂਹ ਵਰ੍ਹਾਉਂਦੇ ਹਨ। (ਅ) ਉਪ-ਪਰਬਤੀ ਖੇਤਰ (ਕੰਢੀ ਖੇਤਰ): ਇਹ ਸ਼ਿਵਾਲਿਕ ਪਹਾੜੀਆਂ ਅਤੇ ਮੈਦਾਨਾਂ ਵਿਚਕਾਰਲੀ ਤੰਗ ਪੱਟੀ ਹੈ, ਜੋ ਹੁਸ਼ਿਆਰਪੁਰ, ਗੁਰਦਾਸਪੁਰ, ਪਠਾਨਕੋਟ ਅਤੇ ਰੂਪਨਗਰ ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚ ਫੈਲੀ ਹੋਈ ਹੈ। ਇੱਥੋਂ ਦੀ ਜ਼ਮੀਨ ਪੱਥਰੀਲੀ, ਢਲਾਣਦਾਰ ਅਤੇ ਚੋਆਂ (ਬਰਸਾਤੀ ਨਾਲਿਆਂ) ਨਾਲ ਕੱਟੀ-ਵੱਢੀ ਹੈ। (ੲ) ਵਿਸ਼ਾਲ ਜਲੋੜ ਮੈਦਾਨ: ਇਹ ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਅਤੇ ਉਪਜਾਊ ਭਾਗ ਹੈ, ਜੋ ਸਤਲੁਜ, ਬਿਆਸ, ਰਾਵੀ, ਚਨਾਬ ਅਤੇ ਜਿਹਲਮ ਦਰਿਆਵਾਂ ਦੁਆਰਾ ਲਿਆਂਦੀ ਗਈ ਮਿੱਟੀ ਨਾਲ ਬਣਿਆ ਹੈ। ਇਸਨੂੰ ਪੂਰਬੀ ਅਤੇ ਪੱਛਮੀ ਮੈਦਾਨਾਂ ਵਿੱਚ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ ਖੇਤਰ ਖੇਤੀ ਪੱਖੋਂ ਬੇਹੱਦ ਖ਼ੁਸ਼ਹਾਲ ਰਿਹਾ ਹੈ।",
        en: "From a geomorphological standpoint, historical Punjab is classified into three principal physical divisions: First, the Himalayas and Northwestern Mountain Ranges: Situated along the northern and northwestern frontiers, these include the Greater Himalayas, Lesser Himalayas, and the outer Siwalik foothills. These immense mountain ramparts historically served as formidable natural ramparts and intercepted southwest monsoon winds, ensuring heavy orographic precipitation and perennial river flow. Second, the Sub-mountainous Tract (Kandi / Sub-Siwalik Tract): This undulating transitional zone lies between the Siwalik hills and the plains, covering tracts of Pathankot, Gurdaspur, Hoshiarpur, and Rupnagar. The soil here is stony, porous, and heavily dissected by ephemeral seasonal torrents known locally as Choes. Third, the Vast Alluvial Plains: Formed by millennia of continuous silt deposition by the Sutlej, Beas, Ravi, Chenab, and Jhelum, this fertile expanse slopes gently from northeast to southwest. Divided into eastern and western plains, this breadbasket nourished civilization, generated agricultural surplus, and sustained dense agrarian populations throughout recorded history."
      }
    },
    {
      heading: {
        hi: "3. उत्तर-पश्चिमी दर्रे और सामरिक महत्त्व (Northwestern Passes & Strategic Gateways)",
        pa: "3. ਉੱਤਰ-ਪੱਛਮੀ ਦੱਰੇ ਅਤੇ ਰਣਨੀਤਕ ਮਹੱਤਵ (Northwestern Passes & Strategic Gateways)",
        en: "3. Northwestern Mountain Passes and Strategic Gateways"
      },
      text: {
        hi: "यद्यपि हिमालय पर्वतमाला अभेद्य प्रतीत होती है, परंतु सुलेमान और किर्थार पर्वत श्रेणियों में कुछ प्राकृतिक दर्रे (Passes) मौजूद हैं, जिन्होंने भारतीय इतिहास की दिशा निर्धारित की। प्रमुख दर्रे निम्नलिखित हैं: (1) खैबर दर्रा (Khyber Pass): यह 53 किमी लंबा दर्रा काबुल और पेशावर को जोड़ता है और 3,370 फीट की ऊँचाई पर स्थित है। इतिहास में भारत पर अधिकांश विदेशी आक्रमण (सिकंदर, महमूद गजनवी, मुहम्मद गोरी, बाबर, नादिरशाह, अहमद शाह अब्दाली) इसी खैबर दर्रे से होकर हुए। (2) बोलान दर्रा (Bolan Pass): यह दर्रा कंधार को सिंध और दक्षिणी पंजाब के मुल्तान से जोड़ता है। (3) कुर्रम और गोमल दर्रे (Kurram and Gomal Passes): ये दर्रे भी मध्य एशिया और अफगानिस्तान से व्यापारिक तथा सामरिक आवागमन के लिए प्रयुक्त होते थे। (4) तोची दर्रा (Tochi Pass): यह दर्रा गजनी को बन्नू से जोड़ता था। इन दर्रों के कारण पंजाब भारत का 'प्रवेश द्वार' (Gateway of India) बन गया। जो भी आक्रांता भारत पर शासन करना चाहता था, उसे पहले पंजाब की धरती पर अपनी तलवार का लोहा मनवाना पड़ता था।",
        pa: "ਭਾਵੇਂ ਹਿਮਾਲਿਆ ਅਭੇਦ ਜਾਪਦਾ ਹੈ, ਪਰ ਸੁਲੇਮਾਨ ਅਤੇ ਕਿਰਥਾਰ ਪਰਬਤ ਲੜੀਆਂ ਵਿੱਚ ਕੁਝ ਕੁਦਰਤੀ ਦੱਰੇ (Mountain Passes) ਮੌਜੂਦ ਹਨ ਜਿਨ੍ਹਾਂ ਨੇ ਭਾਰਤੀ ਇਤਿਹਾਸ ਦਾ ਮੋੜ ਕੱਟਿਆ। ਮੁੱਖ ਦੱਰੇ ਹੇਠ ਲਿਖੇ ਹਨ: (1) ਖ਼ੈਬਰ ਦੱਰਾ (Khyber Pass): ਇਹ 53 ਕਿਲੋਮੀਟਰ ਲੰਮਾ ਦੱਰਾ ਕਾਬੁਲ ਨੂੰ ਪਿਸ਼ਾਵਰ ਨਾਲ ਜੋੜਦਾ ਹੈ ਅਤੇ ਸਮੁੰਦਰ ਤਲ ਤੋਂ 3,370 ਫੁੱਟ ਉੱਚਾ ਹੈ। ਇਤਿਹਾਸ ਵਿੱਚ ਭਾਰਤ 'ਤੇ ਬਹੁਤੇ ਵਿਦੇਸ਼ੀ ਹਮਲੇ (ਸਿਕੰਦਰ, ਮਹਿਮੂਦ ਗ਼ਜ਼ਨਵੀ, ਮੁਹੰਮਦ ਗ਼ੋਰੀ, ਬਾਬਰ, ਨਾਦਰ ਸ਼ਾਹ, ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ) ਇਸੇ ਖ਼ੈਬਰ ਦੱਰੇ ਰਾਹੀਂ ਹੋਏ। (2) ਬੋਲਾਨ ਦੱਰਾ (Bolan Pass): ਇਹ ਦੱਰਾ ਕੰਧਾਰ ਨੂੰ ਸਿੰਧ ਅਤੇ ਦੱਖਣੀ ਪੰਜਾਬ ਦੇ ਮੁਲਤਾਨ ਨਾਲ ਜੋੜਦਾ ਹੈ। (3) ਕੁੱਰਮ ਅਤੇ ਗੋਮਲ ਦੱਰੇ (Kurram and Gomal Passes): ਇਹ ਦੱਰੇ ਵੀ ਵਪਾਰ ਅਤੇ ਸੈਨਿਕ ਚੜ੍ਹਾਈਆਂ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਰਹੇ। (4) ਤੋਚੀ ਦੱਰਾ (Tochi Pass): ਇਹ ਗ਼ਜ਼ਨੀ ਨੂੰ ਬੰਨੂ ਨਾਲ ਮਿਲਾਉਂਦਾ ਸੀ। ਇਨ੍ਹਾਂ ਦੱਰਿਆਂ ਕਰਕੇ ਪੰਜਾਬ ਹਮੇਸ਼ਾ ਭਾਰਤ ਦਾ 'ਪ੍ਰਵੇਸ਼ ਦੁਆਰ' (Gateway of India) ਰਿਹਾ। ਜਿਸ ਕਿਸੇ ਨੇ ਵੀ ਦਿੱਲੀ ਦੇ ਤਖ਼ਤ 'ਤੇ ਕਬਜ਼ਾ ਕਰਨਾ ਹੁੰਦਾ ਸੀ, ਉਸਨੂੰ ਪਹਿਲਾਂ ਪੰਜਾਬ ਵਿੱਚ ਲੜਨਾ ਪੈਂਦਾ ਸੀ।",
        en: "While the Himalayas posed an insurmountable barrier, the Safed Koh, Sulaiman, and Kirthar ranges in the northwest contained critical depressions forming natural mountain corridors known as passes. Among these, the Khyber Pass was supreme: cutting 53 kilometers through rugged terrain at an elevation of 3,370 feet, it directly connected Kabul in Afghanistan with Peshawar in Punjab. Almost every major invader who conquered Northern India — including Alexander the Great, Mahmud of Ghazni, Muhammad Ghori, Babur, Nadir Shah, and Ahmad Shah Abdali — entered through the Khyber Pass. Second was the Bolan Pass, connecting Kandahar with Quetta, Sindh, and Multan in southern Punjab, frequented by mobile cavalry and merchant caravans. Third and fourth were the Kurram and Gomal Passes, through which nomadic Powindahs and tribal invaders drove trade and raiding parties. The Tochi Pass linked Ghazni to Bannu. Consequently, these breaches turned Punjab into the inevitable 'Gateway of India' and a perennial shield for the subcontinent, obliging Punjabis to absorb the primary shock of every frontier invasion."
      }
    },
    {
      heading: {
        hi: "4. पाँच दोआब और सांस्कृतिक क्षेत्र (Five Historical Doabs & Cultural Regions)",
        pa: "4. ਪੰਜ ਇਤਿਹਾਸਕ ਦੁਆਬੇ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਖੇਤਰ (Five Doabs & Cultural Regions)",
        en: "4. The Five Historical Doabs and Cultural Sub-Regions"
      },
      text: {
        hi: "मुगल सम्राट अकबर के शासनकाल में पंजाब के मैदानी भाग को पाँच दोआबों में विभाजित किया गया था। दोआब शब्द दो नदियों के बीच की उपजाऊ भूमि को दर्शाता है। नामकरण दोनों नदियों के प्रथम अक्षरों को जोड़कर किया गया: (1) बिस्त जालंधर दोआब (Bist Jalandhar Doab): व्यास (B) और सतलुज (St) के बीच का क्षेत्र, जिसमें जालंधर, होशियारपुर, कपूरथला और नवांशहर आते हैं। (2) बारी दोआब (Bari Doab): व्यास (Ba) और रावी (Ri) के बीच का क्षेत्र। इसे 'मांझा' भी कहा जाता है, जिसमें अमृतसर, तरनतारन, गुरदासपुर और लाहौर शामिल हैं। (3) रचना दोआब (Rechna Doab): रावी (R) और चिनाब (Chna) के बीच की भूमि, जिसमें गुजरांवाला और शेखूपुरा आते हैं। (4) चज दोआब (Chaj Doab): चिनाब (Ch) और झेलम (J) के मध्य का क्षेत्र, जिसमें गुजरात और शाहपुर शामिल हैं। (5) सिंध सागर दोआब (Sindh Sagar Doab): झेलम तथा सिंधु नदी के बीच का विस्तृत क्षेत्र, जो अपेक्षाकृत कम उपजाऊ था। आधुनिक पंजाब के सांस्कृतिक क्षेत्र: मांझा (रावी और व्यास के बीच), दोआबा (व्यास और सतलुज के बीच), और मालवा (सतलुज नदी के दक्षिण और पूर्व का विशाल क्षेत्र, जिसमें लुधियाना, पटियाला, बठिंडा, संगरूर, फिरोजपुर, मानसा आदि जिले आते हैं)।",
        pa: "ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਅਕਬਰ ਦੇ ਰਾਜ ਦੌਰਾਨ ਪੰਜਾਬ ਦੇ ਮੈਦਾਨਾਂ ਨੂੰ ਪੰਜ ਦੁਆਬਿਆਂ ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ ਸੀ। ਦੁਆਬ ਦੋ ਦਰਿਆਵਾਂ ਵਿਚਕਾਰਲੀ ਉਪਜਾਊ ਧਰਤੀ ਨੂੰ ਆਖਦੇ ਹਨ। ਇਨ੍ਹਾਂ ਦੇ ਨਾਂ ਦਰਿਆਵਾਂ ਦੇ ਪਹਿਲੇ ਅੱਖਰਾਂ ਨੂੰ ਮਿਲਾ ਕੇ ਰੱਖੇ ਗਏ: (1) ਬਿਸਤ ਜਲੰਧਰ ਦੁਆਬ (Bist Jalandhar Doab): ਬਿਆਸ (ਬ) ਅਤੇ ਸਤਲੁਜ (ਸਤ) ਵਿਚਕਾਰਲਾ ਖੇਤਰ, ਜਿਸ ਵਿੱਚ ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ ਅਤੇ ਨਵਾਂਸ਼ਹਿਰ ਆਉਂਦੇ ਹਨ। (2) ਬਾਰੀ ਦੁਆਬ (Bari Doab): ਬਿਆਸ (ਬਾ) ਅਤੇ ਰਾਵੀ (ਰੀ) ਵਿਚਕਾਰਲੀ ਜ਼ਮੀਨ। ਇਸਨੂੰ 'ਮਾਝਾ' ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨਤਾਰਨ, ਗੁਰਦਾਸਪੁਰ ਅਤੇ ਲਾਹੌਰ ਸ਼ਾਮਲ ਹਨ। (3) ਰਚਨਾ ਦੁਆਬ (Rechna Doab): ਰਾਵੀ (ਰ) ਅਤੇ ਚਨਾਬ (ਚਨਾ) ਵਿਚਕਾਰਲਾ ਭਾਗ (ਗੁਜਰਾਂਵਾਲਾ, ਸ਼ੇਖੂਪੁਰਾ)। (4) ਚੱਜ ਦੁਆਬ (Chaj Doab): ਚਨਾਬ (ਚ) ਅਤੇ ਜਿਹਲਮ (ਜ) ਵਿਚਕਾਰਲਾ ਹਿੱਸਾ (ਗੁਜਰਾਤ, ਸ਼ਾਹਪੁਰ)। (5) ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ (Sindh Sagar Doab): ਜਿਹਲਮ ਅਤੇ ਸਿੰਧ ਦਰਿਆ ਦੇ ਵਿਚਕਾਰਲਾ ਵੱਡਾ ਇਲਾਕਾ। ਅਜੋਕੇ ਪੰਜਾਬ ਦੇ ਸੱਭਿਆਚਾਰਕ ਖੇਤਰ: ਮਾਝਾ (ਰਾਵੀ-ਬਿਆਸ ਵਿਚਕਾਰ), ਦੁਆਬਾ (ਬਿਆਸ-ਸਤਲੁਜ ਵਿਚਕਾਰ), ਅਤੇ ਮਾਲਵਾ (ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਦੱਖਣ ਵਾਲਾ ਵੱਡਾ ਖਿੱਤਾ, ਜਿਵੇਂ ਲੁਧਿਆਣਾ, ਪਟਿਆਲਾ, ਬਠਿੰਡਾ, ਸੰਗਰੂਰ, ਫਿਰੋਜ਼ਪੁਰ ਆਦਿ)।",
        en: "During the reign of Mughal Emperor Akbar, the alluvial plains of Punjab were officially partitioned into five administrative Doabs. The term Doab denotes the fertile interfluvial tract enclosed between two rivers. Akbar ingeniously coined portmanteau names using the initial letters of bounding streams: (1) Bist Jalandhar Doab: Lying between the Beas and Sutlej rivers, encompassing modern Jalandhar, Hoshiarpur, Kapurthala, and Shaheed Bhagat Singh Nagar. (2) Bari Doab: Situated between the Beas and Ravi rivers; historically celebrated as the heartland or Majha, home to Amritsar, Tarn Taran, Gurdaspur, and Lahore. (3) Rechna Doab: The tract between the Ravi and Chenab rivers, including Gujranwala and Sheikhupura. (4) Chaj Doab: Enclosed between the Chenab and Jhelum rivers, including Gujrat and Shahpur. (5) Sindh Sagar Doab: The vast plateau between the Jhelum and the mighty Indus River, largely arid Thal desert. In contemporary cultural geography, Indian Punjab is categorized into Majha (trans-Beas Ravi corridor), Doaba (Bist interfluve), and Malwa (the expansive southern prairie south of the Sutlej, comprising Ludhiana, Patiala, Bathinda, Sangrur, and Firozpur)."
      }
    },
    {
      heading: {
        hi: "5. भूगोल का इतिहास पर प्रभाव (Impact of Geography on Historical Evolution)",
        pa: "5. ਭੂਗੋਲ ਦਾ ਇਤਿਹਾਸ ਉੱਤੇ ਪ੍ਰਭਾਵ (Geographic Impact on Historical Evolution)",
        en: "5. How Physical Geography Shaped Punjab's History"
      },
      text: {
        hi: "पंजाब की भौगोलिक स्थिति ने उसके इतिहास और जन-जीवन को गहराई से प्रभावित किया: (1) निरंतर युद्ध और रणभूमि: प्रवेश द्वार होने के कारण पंजाब को सदियों तक निरंतर युद्धों, लूटपाट और रक्तपात का सामना करना पड़ा। तराइन की लड़ाइयाँ (1191, 1192) और पानीपत के ऐतिहासिक युद्ध पंजाब के सीमांत मैदानों में लड़े गए। (2) निडर, साहसी और जुझारू चरित्र: निरंतर विदेशी हमलों ने पंजाब के निवासियों को आत्मरक्षा के लिए सदैव तत्पर, साहसी, बहादुर और संघर्षशील बना दिया। यहाँ का किसान दिन में हल चलाता था और रात में तलवार उठाने का सामर्थ्य रखता था। (3) समृद्ध कृषि और आर्थिक संपन्नता: बारहमासी नदियों और उपजाऊ जलोढ़ मिट्टी के कारण पंजाब प्राचीन काल से अन्न का कटोरा रहा, जिसने घनी आबादी को आकर्षित किया। (4) मिली-जुली संस्कृति का संगम: विभिन्न जातियों (आर्य, यूनानी, कुषाण, हूण, तुर्क, अफगान और मुगल) के आगमन से पंजाब में एक विशिष्ट, लचीली और उदार साझा संस्कृति का विकास हुआ। (5) सिख धर्म और खालसा का प्रादुर्भाव: अत्याचार और अन्याय के विरुद्ध गुरु साहिबान द्वारा आरंभ किए गए आंदोलन और गुरु गोबिंद सिंह जी द्वारा 1699 में खालसा पंथ की स्थापना को पंजाब के इसी जुझारू भौगोलिक परिवेश से असीम ऊर्जा मिली।",
        pa: "ਪੰਜਾਬ ਦੀ ਭੂਗੋਲਿਕ ਸਥਿਤੀ ਨੇ ਇਸਦੇ ਇਤਿਹਾਸ ਅਤੇ ਲੋਕਾਂ ਦੇ ਸੁਭਾਅ 'ਤੇ ਡੂੰਘੀ ਛਾਪ ਛੱਡੀ: (1) ਨਿਰੰਤਰ ਜੰਗਾਂ ਅਤੇ ਲੜਾਈਆਂ: ਭਾਰਤ ਦਾ ਮੋਹਰੀ ਸੂਬਾ ਹੋਣ ਕਰਕੇ ਪੰਜਾਬ ਨੇ ਸਦੀਆਂ ਤੱਕ ਬਾਹਰੀ ਹਮਲਾਵਰਾਂ ਦੀਆਂ ਧਾੜਾਂ ਝੱਲੀਆਂ। ਤਰਾਵੜੀ ਦੀਆਂ ਲੜਾਈਆਂ (1191, 1192) ਅਤੇ ਪਾਣੀਪਤ ਦੇ ਇਤਿਹਾਸਕ ਯੁੱਧ ਪੰਜਾਬ ਦੀਆਂ ਸਰਹੱਦਾਂ ਨੇੜੇ ਲੜੇ ਗਏ। (2) ਦਲੇਰ, ਬਹਾਦਰ ਅਤੇ ਜੁਝਾਰੂ ਸੁਭਾਅ: ਲਗਾਤਾਰ ਹਮਲਿਆਂ ਨੇ ਪੰਜਾਬੀਆਂ ਨੂੰ ਸਦਾ ਚੌਕੰਨਾ, ਨਿਡਰ ਅਤੇ ਯੋਧਾ ਬਣਾ ਦਿੱਤਾ। ਇੱਥੋਂ ਦੇ ਵਾਸੀਆਂ ਨੂੰ ਖੇਤੀ ਦੇ ਨਾਲ-ਨਾਲ ਹਥਿਆਰ ਚਲਾਉਣਾ ਸਿੱਖਣਾ ਪਿਆ। (3) ਉਪਜਾਊ ਜ਼ਮੀਨ ਅਤੇ ਆਰਥਿਕ ਖ਼ੁਸ਼ਹਾਲੀ: ਬਾਰਾਂਮਾਹੀ ਦਰਿਆਵਾਂ ਅਤੇ ਜਲੋੜ ਮਿੱਟੀ ਨੇ ਪੰਜਾਬ ਨੂੰ ਅੰਨ ਭੰਡਾਰ ਬਣਾਇਆ, ਜਿਸਨੇ ਖ਼ੁਸ਼ਹਾਲੀ ਲਿਆਂਦੀ। (4) ਸਾਂਝੇ ਸੱਭਿਆਚਾਰ ਦਾ ਕੇਂਦਰ: ਵੱਖ-ਵੱਖ ਨਸਲਾਂ (ਆਰੀਆ, ਯੂਨਾਨੀ, ਕੁਸ਼ਾਣ, ਹੂਣ, ਤੁਰਕ, ਮੁਗਲ) ਦੇ ਇੱਥੇ ਵੱਸਣ ਨਾਲ ਇੱਕ ਖੁੱਲ੍ਹ-ਦਿਲਾ ਅਤੇ ਸਾਂਝਾ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਉੱਭਰਿਆ। (5) ਸਿੱਖ ਧਰਮ ਅਤੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦਾ ਵਿਕਾਸ: ਜ਼ੁਲਮ ਅਤੇ ਬੇਇਨਸਾਫ਼ੀ ਵਿਰੁੱਧ ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਉੱਠੀ ਲਹਿਰ ਅਤੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ 1699 ਵਿੱਚ ਖ਼ਾਲਸਾ ਦੀ ਸਾਜਨਾ ਨੂੰ ਪੰਜਾਬ ਦੀ ਇਸੇ ਜੁਝਾਰੂ ਭੂਗੋਲਿਕ ਰੂਹ ਨੇ ਬੇਮਿਸਾਲ ਤਾਕਤ ਦਿੱਤੀ।",
        en: "The physical geography of Punjab exerted a definitive influence upon its historical trajectory and socio-political institutions: First, Perpetual Battlefield: Positioned as the subcontinent's northwestern threshold, Punjab endured ceaseless military campaigns, sackings, and devastating incursions for millennia. Decisive imperial clashes — such as the Battles of Tarain (1191, 1192) and the three Battles of Panipat — took place on Punjab's eastern frontier plain. Second, Martial Character and Resilience: Frequent exposure to catastrophic frontier violence forged an exceptionally resilient, self-reliant, and martial populace. Peasant proprietors learned to defend their hearths and harvest, cultivating courage and contempt for danger. Third, Agrarian Abundance: Perennial snow-fed rivers depositing rich alluvial loams turned the plains into a self-replenishing breadbasket, providing economic surplus to withstand fiscal shocks. Fourth, Cultural Synthesis: As diverse ethnic streams — Vedic Aryans, Bactrian Greeks, Kushans, Hunas, Turks, Afghans, and Mughals — traversed and settled the river valleys, a dynamic, pluralistic, and syncretic civilization evolved. Fifth, Cradle of the Sikh Faith and Khalsa: The relentless struggle against tyranny nurtured by the Sikh Gurus culminated in Guru Gobind Singh creating the Khalsa in 1699, institutionalizing armed resistance and saint-soldier ethics within Punjab's heroic soil."
      }
    }
  ],
  keypoints: [
    {
      hi: "'पंजाब' शब्द फारसी के 'पंज' (पाँच) और 'आब' (पानी) से बना है; ऋग्वेद में इसे 'सप्त सिंधु' और यूनानियों द्वारा 'पेंटापोटामिया' कहा गया।",
      pa: "'ਪੰਜਾਬ' ਸ਼ਬਦ ਫ਼ਾਰਸੀ ਦੇ 'ਪੰਜ' (ਪੰਜ) ਅਤੇ 'ਆਬ' (ਪਾਣੀ) ਤੋਂ ਬਣਿਆ ਹੈ; ਰਿਗਵੇਦ ਵਿੱਚ ਇਸਨੂੰ 'ਸਪਤ ਸਿੰਧੂ' ਅਤੇ ਯੂਨਾਨੀਆਂ ਨੇ 'ਪੈਂਟਾਪੋਟਾਮੀਆ' ਕਿਹਾ।",
      en: "The word Punjab comes from Persian Panj (five) and Aab (water); known as Sapta Sindhu in the Rigveda and Pentapotamia by Greeks."
    },
    {
      hi: "अकबर ने पंजाब के मैदानों को पाँच दोआबों में बाँटा: बिस्त जालंधर, बारी (मांझा), रचना, चज और सिंध सागर दोआब।",
      pa: "ਅਕਬਰ ਨੇ ਪੰਜਾਬ ਦੇ ਮੈਦਾਨਾਂ ਨੂੰ ਪੰਜ ਦੁਆਬਿਆਂ ਵਿੱਚ ਵੰਡਿਆ: ਬਿਸਤ ਜਲੰਧਰ, ਬਾਰੀ (ਮਾਝਾ), ਰਚਨਾ, ਚੱਜ ਅਤੇ ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ।",
      en: "Akbar divided the Punjab plains into five doabs: Bist Jalandhar, Bari (Majha), Rechna, Chaj, and Sindh Sagar."
    },
    {
      hi: "खैबर दर्रा (53 किमी) काबुल को पेशावर से जोड़ता है और इतिहास में भारत पर अधिकांश विदेशी आक्रमण इसी दर्रे से हुए।",
      pa: "ਖ਼ੈਬਰ ਦੱਰਾ (53 ਕਿਲੋਮੀਟਰ) ਕਾਬੁਲ ਨੂੰ ਪਿਸ਼ਾਵਰ ਨਾਲ ਜੋੜਦਾ ਹੈ ਅਤੇ ਇਤਿਹਾਸ ਵਿੱਚ ਬਹੁਤੇ ਵਿਦੇਸ਼ੀ ਹਮਲੇ ਇਸੇ ਦੱਰੇ ਰਾਹੀਂ ਹੋਏ।",
      en: "The Khyber Pass (53 km) connects Kabul with Peshawar and served as the primary entry route for historical invasions into India."
    },
    {
      hi: "पंजाब के तीन भौतिक भाग हैं: हिमालय पर्वतमाला, उप-पर्वतीय कांडी क्षेत्र, और विशाल जलोढ़ मैदान।",
      pa: "ਪੰਜਾਬ ਦੀਆਂ ਤਿੰਨ ਭੌਤਿਕ ਵੰਡਾਂ ਹਨ: ਹਿਮਾਲਿਆ ਪਰਬਤ, ਉਪ-ਪਰਬਤੀ ਕੰਢੀ ਖੇਤਰ, ਅਤੇ ਵਿਸ਼ਾਲ ਜਲੋੜ ਮੈਦਾਨ।",
      en: "Punjab has three physical divisions: the Himalayan ranges, the sub-mountainous Kandi tract, and the alluvial plains."
    },
    {
      hi: "आधुनिक भारतीय पंजाब 1 नवंबर 1966 को भाषा के आधार पर पुनर्गठित हुआ और वर्तमान में इसमें 23 प्रशासनिक जिले हैं।",
      pa: "ਅਜੋਕਾ ਭਾਰਤੀ ਪੰਜਾਬ 1 ਨਵੰਬਰ 1966 ਨੂੰ ਭਾਸ਼ਾਈ ਆਧਾਰ 'ਤੇ ਪੁਨਰਗਠਿਤ ਹੋਇਆ ਅਤੇ ਮੌਜੂਦਾ ਸਮੇਂ ਇਸਦੇ 23 ਪ੍ਰਸ਼ਾਸਕੀ ਜ਼ਿਲ੍ਹੇ ਹਨ।",
      en: "Modern Indian Punjab was reorganized on linguistic grounds on 1 November 1966 and currently comprises 23 administrative districts."
    },
    {
      hi: "भौगोलिक स्थिति के कारण पंजाब भारत का 'प्रवेश द्वार' बना, जिसने इसके लोगों में जुझारूपन और बहादुरी का संचार किया।",
      pa: "ਭੂਗੋਲਿਕ ਸਥਿਤੀ ਕਾਰਨ ਪੰਜਾਬ ਭਾਰਤ ਦਾ 'ਪ੍ਰਵੇਸ਼ ਦੁਆਰ' ਬਣਿਆ, ਜਿਸਨੇ ਇੱਥੋਂ ਦੇ ਵਸਨੀਕਾਂ ਵਿੱਚ ਜੁਝਾਰੂਪਨ ਅਤੇ ਦਲੇਰੀ ਭਰੀ।",
      en: "Punjab's strategic frontier position made it the 'Gateway of India', cultivating resilience, martial spirit, and defense instincts."
    }
  ],
  flashcards: [
    {
      question: {
        hi: "ऋग्वैदिक काल में पंजाब को किस नाम से जाना जाता था?",
        pa: "ਰਿਗਵੈਦਿਕ ਕਾਲ ਵਿੱਚ ਪੰਜਾਬ ਨੂੰ ਕਿਸ ਨਾਮ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਸੀ?",
        en: "What was Punjab called during the Rigvedic period?"
      },
      answer: {
        hi: "सप्त सिंधु (सात पवित्र नदियों का देश — सिंधु, झेलम, चिनाब, रावी, व्यास, सतलुज और सरस्वती)।",
        pa: "ਸਪਤ ਸਿੰਧੂ (ਸੱਤ ਪਵਿੱਤਰ ਦਰਿਆਵਾਂ ਦੀ ਧਰਤੀ — ਸਿੰਧ, ਜਿਹਲਮ, ਚਨਾਬ, ਰਾਵੀ, ਬਿਆਸ, ਸਤਲੁਜ ਅਤੇ ਸਰਸਵਤੀ)।",
        en: "Sapta Sindhu (land of seven sacred rivers: Indus, Jhelum, Chenab, Ravi, Beas, Sutlej, and Saraswati)."
      }
    },
    {
      question: {
        hi: "यूनानी इतिहासकारों ने पंजाब को क्या नाम दिया था?",
        pa: "ਯੂਨਾਨੀ ਇਤਿਹਾਸਕਾਰਾਂ ਨੇ ਪੰਜਾਬ ਨੂੰ ਕੀ ਨਾਂ ਦਿੱਤਾ ਸੀ?",
        en: "What name did Greek historians assign to Punjab?"
      },
      answer: {
        hi: "पेंटापोटामिया (Pentapotamia — पाँच नदियों का प्रदेश)।",
        pa: "ਪੈਂਟਾਪੋਟਾਮੀਆ (Pentapotamia — ਪੰਜ ਦਰਿਆਵਾਂ ਦਾ ਦੇਸ਼)।",
        en: "Pentapotamia (meaning an inland territory of five rivers)."
      }
    },
    {
      question: {
        hi: "खैबर दर्रा किन दो प्रमुख शहरों/क्षेत्रों को जोड़ता है?",
        pa: "ਖ਼ੈਬਰ ਦੱਰਾ ਕਿਨ੍ਹਾਂ ਦੋ ਮੁੱਖ ਸ਼ਹਿਰਾਂ/ਖੇਤਰਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ?",
        en: "Which two major cities/regions are linked by the Khyber Pass?"
      },
      answer: {
        hi: "काबुल (अफगानिस्तान) और पेशावर (पंजाब/पाकिस्तान); इसकी लंबाई 53 किमी है।",
        pa: "ਕਾਬੁਲ (ਅਫ਼ਗ਼ਾਨਿਸਤਾਨ) ਅਤੇ ਪਿਸ਼ਾਵਰ (ਪੰਜਾਬ/ਪਾਕਿਸਤਾਨ); ਇਸਦੀ ਲੰਬਾਈ 53 ਕਿਲੋਮੀਟਰ ਹੈ।",
        en: "Kabul (Afghanistan) and Peshawar (Punjab/Pakistan); it spans 53 kilometers."
      }
    },
    {
      question: {
        hi: "ब्यास और सतलुज नदियों के बीच स्थित दोआब का क्या नाम है?",
        pa: "ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਦਰਿਆਵਾਂ ਵਿਚਕਾਰਲੇ ਦੁਆਬੇ ਦਾ ਕੀ ਨਾਂ ਹੈ?",
        en: "What is the name of the doab situated between the Beas and Sutlej rivers?"
      },
      answer: {
        hi: "बिस्त जालंधर दोआब (जिसमें जालंधर, होशियारपुर, कपूरथला और नवांशहर जिले आते हैं)।",
        pa: "ਬਿਸਤ ਜਲੰਧਰ ਦੁਆਬ (ਜਿਸ ਵਿੱਚ ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ ਅਤੇ ਨਵਾਂਸ਼ਹਿਰ ਜ਼ਿਲ੍ਹੇ ਸ਼ਾਮਲ ਹਨ)।",
        en: "Bist Jalandhar Doab (encompassing Jalandhar, Hoshiarpur, Kapurthala, and Nawanshahr)."
      }
    },
    {
      question: {
        hi: "बारी दोआब को पंजाब के किस सांस्कृतिक अंचल के रूप में भी जाना जाता है?",
        pa: "ਬਾਰੀ ਦੁਆਬ ਨੂੰ ਪੰਜਾਬ ਦੇ ਕਿਸ ਸੱਭਿਆਚਾਰਕ ਖਿੱਤੇ ਵਜੋਂ ਵੀ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
        en: "Which cultural zone of Punjab corresponds to the Bari Doab?"
      },
      answer: {
        hi: "मांझा (Majha — रावी और ब्यास के बीच का क्षेत्र; अमृतसर और तरनतारन)।",
        pa: "ਮਾਝਾ (Majha — ਰਾਵੀ ਅਤੇ ਬਿਆਸ ਵਿਚਕਾਰਲਾ ਇਲਾਕਾ; ਅੰਮ੍ਰਿਤਸਰ ਅਤੇ ਤਰਨਤਾਰਨ)।",
        en: "Majha (the central heartland between the Ravi and Beas; Amritsar and Tarn Taran)."
      }
    },
    {
      question: {
        hi: "कांडी क्षेत्र (उप-पर्वतीय प्रदेश) की मुख्य समस्या क्या है?",
        pa: "ਕੰਢੀ ਖੇਤਰ (ਉਪ-ਪਰਬਤੀ ਇਲਾਕਾ) ਦੀ ਮੁੱਖ ਸਮੱਸਿਆ ਕੀ ਹੈ?",
        en: "What is the primary geomorphic challenge of the Kandi sub-mountain tract?"
      },
      answer: {
        hi: "बरसाती चोयों (Choes) द्वारा भूमि कटाव और कंकड़-पत्थर युक्त असमतल भूमि।",
        pa: "ਬਰਸਾਤੀ ਚੋਆਂ ਦੁਆਰਾ ਜ਼ਮੀਨੀ ਖੋਰ ਅਤੇ ਪੱਥਰੀਲੀ ਅਸਮਤਲ ਜ਼ਮੀਨ।",
        en: "Severe soil erosion caused by seasonal torrents (Choes) and stony, undulating terrain."
      }
    },
    {
      question: {
        hi: "वर्तमान भारतीय पंजाब की स्थापना कब हुई और इसमें कितने जिले हैं?",
        pa: "ਅਜੋਕੇ ਭਾਰਤੀ ਪੰਜਾਬ ਦੀ ਸਥਾਪਨਾ ਕਦੋਂ ਹੋਈ ਅਤੇ ਇਸ ਵਿੱਚ ਕਿੰਨੇ ਜ਼ਿਲ੍ਹੇ ਹਨ?",
        en: "When was modern Indian Punjab created and how many districts does it contain?"
      },
      answer: {
        hi: "1 नवंबर 1966 (भाषाई पुनर्गठन अधिनियम के तहत); वर्तमान में 23 जिले हैं (23वाँ मलेरकोटला)।",
        pa: "1 ਨਵੰਬਰ 1966 (ਭਾਸ਼ਾਈ ਪੁਨਰਗਠਨ ਐਕਟ ਅਧੀਨ); ਮੌਜੂਦਾ ਸਮੇਂ 23 ਜ਼ਿਲ੍ਹੇ ਹਨ (23ਵਾਂ ਮਲੇਰਕੋਟਲਾ)।",
        en: "1 November 1966 (under Punjab Reorganisation Act); currently 23 districts (23rd is Malerkotla)."
      }
    },
    {
      question: {
        hi: "मुगल काल में दोआबों के नामकरण का श्रेय किस सम्राट को जाता है?",
        pa: "ਮੁਗਲ ਕਾਲ ਵਿੱਚ ਦੁਆਬਿਆਂ ਦੇ ਨਾਮਕਰਨ ਦਾ ਸਿਹਰਾ ਕਿਸ ਬਾਦਸ਼ਾਹ ਨੂੰ ਜਾਂਦਾ ਹੈ?",
        en: "Which Mughal emperor is credited with officially naming the five Punjab doabs?"
      },
      answer: {
        hi: "सम्राट अकबर को, जिन्होंने संबंधित दोनों नदियों के शुरुआती अक्षरों को मिलाकर नाम रखे।",
        pa: "ਬਾਦਸ਼ਾਹ ਅਕਬਰ ਨੂੰ, ਜਿਸਨੇ ਦੋਵਾਂ ਦਰਿਆਵਾਂ ਦੇ ਪਹਿਲੇ ਅੱਖਰਾਂ ਨੂੰ ਜੋੜ ਕੇ ਨਾਂ ਰੱਖੇ।",
        en: "Emperor Akbar, who devised portmanteau names combining the starting letters of both rivers."
      }
    }
  ],
  questions: [
    {
      id: "ett-pb-q1",
      prompt: {
        hi: "ऋग्वैदिक काल में पंजाब क्षेत्र को किस नाम से जाना जाता था?",
        pa: "ਰਿਗਵੈਦਿਕ ਕਾਲ ਦੌਰਾਨ ਪੰਜਾਬ ਖੇਤਰ ਨੂੰ ਕਿਸ ਨਾਂ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਸੀ?",
        en: "By what name was the Punjab region known during the Rigvedic era?"
      },
      options: [
        { hi: "सप्त सिंधु", pa: "ਸਪਤ ਸਿੰਧੂ", en: "Sapta Sindhu" },
        { hi: "पेंटापोटामिया", pa: "ਪੈਂਟਾਪੋਟਾਮੀਆ", en: "Pentapotamia" },
        { hi: "पंचनद", pa: "ਪੰਚਨਦ", en: "Panchanada" },
        { hi: "टक देश", pa: "ਟੱਕ ਦੇਸ਼", en: "Takka Desha" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "ऋग्वेद में इस क्षेत्र को 'सप्त सिंधु' कहा गया है, जिसका अर्थ है सात नदियों की भूमि (सिंधु, झेलम, चिनाब, रावी, व्यास, सतलुज और सरस्वती)। यूनानियों ने इसे पेंटापोटामिया और महाभारत में पंचनद कहा गया।",
        pa: "ਰਿਗਵੇਦ ਵਿੱਚ ਇਸ ਖੇਤਰ ਨੂੰ 'ਸਪਤ ਸਿੰਧੂ' ਕਿਹਾ ਗਿਆ ਹੈ, ਭਾਵ ਸੱਤ ਦਰਿਆਵਾਂ ਦੀ ਧਰਤੀ (ਸਿੰਧ, ਜਿਹਲਮ, ਚਨਾਬ, ਰਾਵੀ, ਬਿਆਸ, ਸਤਲੁਜ ਅਤੇ ਸਰਸਵਤੀ)। ਯੂਨਾਨੀਆਂ ਨੇ ਪੈਂਟਾਪੋਟਾਮੀਆ ਅਤੇ ਮਹਾਂਭਾਰਤ ਵਿੱਚ ਪੰਚਨਦ ਕਿਹਾ ਗਿਆ।",
        en: "The Rigveda designated this territory Sapta Sindhu, meaning the land of seven rivers (Indus, Jhelum, Chenab, Ravi, Beas, Sutlej, and Saraswati). Greeks named it Pentapotamia, and epics called it Panchanada."
      }
    },
    {
      id: "ett-pb-q2",
      prompt: {
        hi: "'पेंटापोटामिया' नाम पंजाब को किसके द्वारा दिया गया था?",
        pa: "'ਪੈਂਟਾਪੋਟਾਮੀਆ' ਨਾਂ ਪੰਜਾਬ ਨੂੰ ਕਿਸ ਦੁਆਰਾ ਦਿੱਤਾ ਗਿਆ ਸੀ?",
        en: "Who bestowed the designation 'Pentapotamia' upon Punjab?"
      },
      options: [
        { hi: "यूनानी इतिहासकार व भूगोलवेत्ता", pa: "ਯੂਨਾਨੀ ਇਤਿਹਾਸਕਾਰ ਤੇ ਭੂਗੋਲਵੇਤਾ", en: "Greek historians and geographers" },
        { hi: "फारसी व्यापारी", pa: "ਫ਼ਾਰਸੀ ਵਪਾਰੀ", en: "Persian traders" },
        { hi: "मुगल दरबारी", pa: "ਮੁਗਲ ਦਰਬਾਰੀ", en: "Mughal courtiers" },
        { hi: "ब्रिटिश सर्वेक्षक", pa: "ਬਰਤਾਨਵੀ ਸਰਵੇਖਕ", en: "British surveyors" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "सिकंदर के आक्रमण के समय और उसके बाद यूनानी विद्वानों ने पंजाब को 'पेंटापोटामिया' कहा, जो ग्रीक भाषा में 'पाँच नदियों की भूमि' का द्योतक है।",
        pa: "ਸਿਕੰਦਰ ਦੇ ਹਮਲੇ ਸਮੇਂ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਯੂਨਾਨੀ ਵਿਦਵਾਨਾਂ ਨੇ ਪੰਜਾਬ ਨੂੰ 'ਪੈਂਟਾਪੋਟਾਮੀਆ' ਕਿਹਾ, ਜਿਸਦਾ ਯੂਨਾਨੀ ਵਿੱਚ ਅਰਥ ਪੰਜ ਦਰਿਆਵਾਂ ਦਾ ਦੇਸ਼ ਹੈ।",
        en: "Following Alexander's campaigns, Greek scholars named Punjab 'Pentapotamia', which translates from Greek as the land of five rivers."
      }
    },
    {
      id: "ett-pb-q3",
      prompt: {
        hi: "खैबर दर्रा समुद्र तल से कितनी ऊँचाई पर स्थित है और इसकी लंबाई कितनी है?",
        pa: "ਖ਼ੈਬਰ ਦੱਰਾ ਸਮੁੰਦਰ ਤਲ ਤੋਂ ਕਿੰਨੀ ਉਚਾਈ 'ਤੇ ਸਥਿਤ ਹੈ ਅਤੇ ਇਸਦੀ ਲੰਬਾਈ ਕਿੰਨੀ ਹੈ?",
        en: "What is the elevation above sea level and total length of the Khyber Pass?"
      },
      options: [
        { hi: "3,370 फीट ऊँचाई और 53 किमी लंबाई", pa: "3,370 ਫੁੱਟ ਉਚਾਈ ਅਤੇ 53 ਕਿਲੋਮੀਟਰ ਲੰਬਾਈ", en: "3,370 feet elevation and 53 km length" },
        { hi: "5,500 फीट ऊँचाई और 80 किमी लंबाई", pa: "5,500 ਫੁੱਟ ਉਚਾਈ ਅਤੇ 80 ਕਿਲੋਮੀਟਰ ਲੰਬਾਈ", en: "5,500 feet elevation and 80 km length" },
        { hi: "1,200 फीट ऊँचाई और 25 किमी लंबाई", pa: "1,200 ਫੁੱਟ ਉਚਾਈ ਅਤੇ 25 ਕਿਲੋਮੀਟਰ ਲੰਬਾਈ", en: "1,200 feet elevation and 25 km length" },
        { hi: "4,800 फीट ऊँचाई और 100 किमी लंबाई", pa: "4,800 ਫੁੱਟ ਉਚਾਈ ਅਤੇ 100 ਕਿਲੋਮੀਟਰ ਲੰਬਾਈ", en: "4,800 feet elevation and 100 km length" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "खैबर दर्रा लगभग 3,370 फीट (1,027 मीटर) की ऊँचाई पर स्थित है और इसकी लंबाई 53 किलोमीटर है। यह काबुल को पेशावर से जोड़ता है।",
        pa: "ਖ਼ੈਬਰ ਦੱਰਾ ਲਗਭਗ 3,370 ਫੁੱਟ (1,027 ਮੀਟਰ) ਦੀ ਉਚਾਈ 'ਤੇ ਹੈ ਅਤੇ ਇਸਦੀ ਲੰਬਾਈ 53 ਕਿਲੋਮੀਟਰ ਹੈ। ਇਹ ਕਾਬੁਲ ਨੂੰ ਪਿਸ਼ਾਵਰ ਨਾਲ ਜੋੜਦਾ ਹੈ।",
        en: "The Khyber Pass lies at an elevation of 3,370 feet (1,027 m) and spans 53 kilometers, linking Kabul with Peshawar."
      }
    },
    {
      id: "ett-pb-q4",
      prompt: {
        hi: "मुगल काल में पंजाब के दोआबों के नामकरण की अनूठी पद्धति क्या थी?",
        pa: "ਮੁਗਲ ਕਾਲ ਵਿੱਚ ਪੰਜਾਬ ਦੇ ਦੁਆਬਿਆਂ ਦੇ ਨਾਮਕਰਨ ਦਾ ਨਿਵੇਕਲਾ ਤਰੀਕਾ ਕੀ ਸੀ?",
        en: "What was the unique nomenclature convention used for Punjab doabs during Mughal rule?"
      },
      options: [
        { hi: "संबद्ध दोनों नदियों के प्रथम अक्षरों का संयोजन", pa: "ਸੰਬੰਧਿਤ ਦੋਵਾਂ ਦਰਿਆਵਾਂ ਦੇ ਪਹਿਲੇ ਅੱਖਰਾਂ ਦਾ ਸੁਮੇਲ", en: "Combining initial letters of the two bordering rivers" },
        { hi: "प्रसिद्ध सूफी संतों के नाम पर नामकरण", pa: "ਮਸ਼ਹੂਰ ਸੂਫ਼ੀ ਸੰਤਾਂ ਦੇ ਨਾਂ 'ਤੇ ਨਾਮਕਰਨ", en: "Naming after venerated Sufi saints" },
        { hi: "मुगल सूबेदारों के उपनामों का प्रयोग", pa: "ਮੁਗਲ ਸੂਬੇਦਾਰਾਂ ਦੇ ਲਕਬਾਂ ਦੀ ਵਰਤੋਂ", en: "Using titles of provincial Mughal governors" },
        { hi: "मिट्टी के रंगों और प्रकारों के आधार पर", pa: "ਮਿੱਟੀ ਦੇ ਰੰਗਾਂ ਅਤੇ ਕਿਸਮਾਂ ਦੇ ਆਧਾਰ 'ਤੇ", en: "Classifying by soil color and composition" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "अकबर ने दोनों नदियों के प्रारंभिक अक्षरों को जोड़कर नाम बनाए — जैसे ब्यास (ब) + सतलुज (सत) = बिस्त; ब्यास (बा) + रावी (री) = बारी।",
        pa: "ਅਕਬਰ ਨੇ ਦੋਵਾਂ ਦਰਿਆਵਾਂ ਦੇ ਮੁੱਢਲੇ ਅੱਖਰਾਂ ਨੂੰ ਜੋੜ ਕੇ ਨਾਂ ਘੜੇ — ਜਿਵੇਂ ਬਿਆਸ (ਬ) + ਸਤਲੁਜ (ਸਤ) = ਬਿਸਤ; ਬਿਆਸ (ਬਾ) + ਰਾਵੀ (ਰੀ) = ਬਾਰੀ।",
        en: "Akbar coined portmanteau designations using starting letters of adjacent rivers: Beas (B) + Sutlej (St) = Bist; Beas (Ba) + Ravi (Ri) = Bari."
      }
    },
    {
      id: "ett-pb-q5",
      prompt: {
        hi: "बारी दोआब किन दो प्रमुख नदियों के मध्य स्थित है?",
        pa: "ਬਾਰੀ ਦੁਆਬ ਕਿਨ੍ਹਾਂ ਦੋ ਮੁੱਖ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰ ਸਥਿਤ ਹੈ?",
        en: "Between which two prominent rivers is the Bari Doab situated?"
      },
      options: [
        { hi: "ब्यास और रावी", pa: "ਬਿਆਸ ਅਤੇ ਰਾਵੀ", en: "Beas and Ravi" },
        { hi: "रावी और चिनाब", pa: "ਰਾਵੀ ਅਤੇ ਚਨਾਬ", en: "Ravi and Chenab" },
        { hi: "चिनाब और झेलम", pa: "ਚਨਾਬ ਅਤੇ ਜਿਹਲਮ", en: "Chenab and Jhelum" },
        { hi: "सतलुज और घग्गर", pa: "ਸਤਲੁਜ ਅਤੇ ਘੱਗਰ", en: "Sutlej and Ghaggar" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "बारी दोआब ब्यास (Ba) और रावी (Ri) नदियों के बीच स्थित है। इसे ऐतिहासिक रूप से 'मांझा' कहा जाता है, जिसमें अमृतसर और लाहौर शामिल रहे।",
        pa: "ਬਾਰੀ ਦੁਆਬ ਬਿਆਸ (ਬਾ) ਅਤੇ ਰਾਵੀ (ਰੀ) ਦਰਿਆਵਾਂ ਵਿਚਕਾਰ ਸਥਿਤ ਹੈ। ਇਸਨੂੰ ਇਤਿਹਾਸਕ ਤੌਰ 'ਤੇ 'ਮਾਝਾ' ਆਖਿਆ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਅੰਮ੍ਰਿਤਸਰ ਤੇ ਲਾਹੌਰ ਆਉਂਦੇ ਹਨ।",
        en: "Bari Doab lies between the Beas and Ravi rivers. Historically known as Majha, its primary centers include Amritsar and Lahore."
      }
    },
    {
      id: "ett-pb-q6",
      prompt: {
        hi: "पंजाब के उप-पर्वतीय क्षेत्र में बरसाती नालों को स्थानीय भाषा में क्या कहा जाता है?",
        pa: "ਪੰਜਾਬ ਦੇ ਉਪ-ਪਰਬਤੀ ਖੇਤਰ ਵਿੱਚ ਬਰਸਾਤੀ ਨਾਲਿਆਂ ਨੂੰ ਸਥਾਨਕ ਬੋਲੀ ਵਿੱਚ ਕੀ ਆਖਿਆ ਜਾਂਦਾ ਹੈ?",
        en: "What local term denotes seasonal hill torrents causing erosion in sub-mountainous Punjab?"
      },
      options: [
        { hi: "चो (Choes)", pa: "ਚੋਅ (Choes)", en: "Choes" },
        { hi: "दोआब (Doab)", pa: "ਦੁਆਬ (Doab)", en: "Doab" },
        { hi: "खादर (Khadar)", pa: "ਖਾਦਰ (Khadar)", en: "Khadar" },
        { hi: "बांगर (Bhangar)", pa: "ਬਾਂਗਰ (Bhangar)", en: "Bhangar" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "होशियारपुर, नवांशहर और रोपड़ के शिवालिक उप-पर्वतीय (कांडी) क्षेत्र में बरसात के समय बहने वाले विध्वंसक मौसमी नालों को 'चो' (Choes) कहा जाता है।",
        pa: "ਹੁਸ਼ਿਆਰਪੁਰ, ਨਵਾਂਸ਼ਹਿਰ ਅਤੇ ਰੋਪੜ ਦੇ ਸ਼ਿਵਾਲਿਕ ਕੰਢੀ ਖੇਤਰ ਵਿੱਚ ਬਰਸਾਤ ਵੇਲੇ ਵਗਣ ਵਾਲੇ ਮੌਸਮੀ ਨਾਲਿਆਂ ਨੂੰ 'ਚੋਅ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ।",
        en: "In the sub-Siwalik Kandi tract of Hoshiarpur and Rupnagar, destructive monsoon rain-fed torrents are termed 'Choes'."
      }
    },
    {
      id: "ett-pb-q7",
      prompt: {
        hi: "भाषा के आधार पर पंजाब का पुनर्गठन किस तिथि को हुआ था?",
        pa: "ਭਾਸ਼ਾ ਦੇ ਆਧਾਰ 'ਤੇ ਪੰਜਾਬ ਦਾ ਪੁਨਰਗਠਨ ਕਿਸ ਮਿਤੀ ਨੂੰ ਹੋਇਆ ਸੀ?",
        en: "On which date did the linguistic reorganization of Punjab take effect?"
      },
      options: [
        { hi: "1 नवंबर 1966", pa: "1 ਨਵੰਬਰ 1966", en: "1 November 1966" },
        { hi: "15 अगस्त 1947", pa: "15 ਅਗਸਤ 1947", en: "15 August 1947" },
        { hi: "26 जनवरी 1950", pa: "26 ਜਨਵਰੀ 1950", en: "26 January 1950" },
        { hi: "13 अप्रैल 1969", pa: "13 ਅਪ੍ਰੈਲ 1969", en: "13 April 1969" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "1 नवंबर 1966 को पंजाब पुनर्गठन अधिनियम के अंतर्गत हरियाणा अलग राज्य बना और पहाड़ी क्षेत्र हिमाचल में जोड़े गए, जिससे वर्तमान भारतीय पंजाब बना।",
        pa: "1 ਨਵੰਬਰ 1966 ਨੂੰ ਪੰਜਾਬ ਪੁਨਰਗਠਨ ਐਕਟ ਤਹਿਤ ਹਰਿਆਣਾ ਵੱਖਰਾ ਰਾਜ ਬਣਿਆ ਅਤੇ ਪਹਾੜੀ ਇਲਾਕੇ ਹਿਮਾਚਲ ਨੂੰ ਦਿੱਤੇ ਗਏ, ਜਿਸ ਨਾਲ ਅਜੋਕਾ ਪੰਜਾਬ ਹੋਂਦ ਵਿੱਚ ਆਇਆ।",
        en: "Under the Punjab Reorganisation Act, present-day Indian Punjab was created on 1 November 1966 when Haryana was carved out."
      }
    },
    {
      id: "ett-pb-q8",
      prompt: {
        hi: "पंजाब का कौन सा सांस्कृतिक अंचल सतलुज नदी के दक्षिण में स्थित है?",
        pa: "ਪੰਜਾਬ ਦਾ ਕਿਹੜਾ ਸੱਭਿਆਚਾਰਕ ਖਿੱਤਾ ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਦੱਖਣ ਵਿੱਚ ਸਥਿਤ ਹੈ?",
        en: "Which cultural tract of Punjab is located south of the Sutlej river?"
      },
      options: [
        { hi: "मालवा", pa: "ਮਾਲਵਾ", en: "Malwa" },
        { hi: "मांझा", pa: "ਮਾਝਾ", en: "Majha" },
        { hi: "दोआबा", pa: "ਦੁਆਬਾ", en: "Doaba" },
        { hi: "पोठोहार", pa: "ਪੋਠੋਹਾਰ", en: "Pothohar" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "सतलुज नदी के दक्षिण में स्थित विशाल क्षेत्र को 'मालवा' कहा जाता है। इसमें लुधियाना, पटियाला, बठिंडा, संगरूर, मोगा, फिरोजपुर आदि जिले आते हैं।",
        pa: "ਸਤਲੁਜ ਦਰਿਆ ਦੇ ਦੱਖਣ ਵਾਲੇ ਵਿਸ਼ਾਲ ਇਲਾਕੇ ਨੂੰ 'ਮਾਲਵਾ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਲੁਧਿਆਣਾ, ਪਟਿਆਲਾ, ਬਠਿੰਡਾ, ਸੰਗਰੂਰ, ਮੋਗਾ, ਫ਼ਿਰੋਜ਼ਪੁਰ ਆਦਿ ਜ਼ਿਲ੍ਹੇ ਸ਼ਾਮਲ ਹਨ।",
        en: "The extensive prairie south of the Sutlej is Malwa, encompassing Ludhiana, Patiala, Bathinda, Sangrur, Moga, and Firozpur."
      }
    },
    {
      id: "ett-pb-q9",
      prompt: {
        hi: "बोलान दर्रा किस पर्वत श्रेणी में स्थित है और यह पंजाब के किस प्राचीन शहर से जुड़ा था?",
        pa: "ਬੋਲਾਨ ਦੱਰਾ ਕਿਸ ਪਰਬਤ ਲੜੀ ਵਿੱਚ ਸਥਿਤ ਹੈ ਅਤੇ ਇਹ ਪੰਜਾਬ ਦੇ ਕਿਸ ਪ੍ਰਾਚੀਨ ਸ਼ਹਿਰ ਨਾਲ ਜੁੜਿਆ ਸੀ?",
        en: "In which mountain range is the Bolan Pass located and which ancient Punjab city did it access?"
      },
      options: [
        { hi: "किर्थार / टोबा कक्कड़ श्रेणियाँ और मुल्तान", pa: "ਕਿਰਥਾਰ / ਟੋਬਾ ਕੱਕੜ ਸ਼੍ਰੇਣੀਆਂ ਅਤੇ ਮੁਲਤਾਨ", en: "Kirthar / Toba Kakar ranges and Multan" },
        { hi: "पीर पंजाल श्रेणी और श्रीनगर", pa: "ਪੀਰ ਪੰਜਾਲ ਸ਼੍ਰੇਣੀ ਅਤੇ ਸ਼੍ਰੀਨਗਰ", en: "Pir Panjal range and Srinagar" },
        { hi: "शिवालिक पहाड़ियाँ और रोपड़", pa: "ਸ਼ਿਵਾਲਿਕ ਪਹਾੜੀਆਂ ਅਤੇ ਰੋਪੜ", en: "Siwalik hills and Rupnagar" },
        { hi: "काराकोरम श्रेणी और लेह", pa: "ਕਾਰਾਕੋਰਮ ਸ਼੍ਰੇਣੀ ਅਤੇ ਲੇਹ", en: "Karakoram range and Leh" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "बोलान दर्रा बलूचिस्तान की पर्वत श्रेणियों में स्थित है और कंधार को सिंध तथा दक्षिणी पंजाब के प्रमुख व्यापारिक केंद्र मुल्तान से जोड़ता था।",
        pa: "ਬੋਲਾਨ ਦੱਰਾ ਬਲੋਚਿਸਤਾਨ ਦੀਆਂ ਪਰਬਤ ਲੜੀਆਂ ਵਿੱਚ ਹੈ ਅਤੇ ਕੰਧਾਰ ਨੂੰ ਸਿੰਧ ਤੇ ਦੱਖਣੀ ਪੰਜਾਬ ਦੇ ਵੱਡੇ ਵਪਾਰਕ ਸ਼ਹਿਰ ਮੁਲਤਾਨ ਨਾਲ ਜੋੜਦਾ ਸੀ।",
        en: "The Bolan Pass traverses the ranges of Balochistan, historically linking Kandahar with Sindh and the key Punjab trading hub of Multan."
      }
    },
    {
      id: "ett-pb-q10",
      prompt: {
        hi: "पंजाब का कौन सा दोआब सिंधु नदी और झेलम नदी के मध्य अवस्थित है?",
        pa: "ਪੰਜਾਬ ਦਾ ਕਿਹੜਾ ਦੁਆਬ ਸਿੰਧ ਦਰਿਆ ਅਤੇ ਜਿਹਲਮ ਦਰਿਆ ਦੇ ਵਿਚਕਾਰ ਸਥਿਤ ਹੈ?",
        en: "Which doab in historical Punjab lies between the Indus and Jhelum rivers?"
      },
      options: [
        { hi: "सिंध सागर दोआब", pa: "ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ", en: "Sindh Sagar Doab" },
        { hi: "चज दोआब", pa: "ਚੱਜ ਦੁਆਬ", en: "Chaj Doab" },
        { hi: "रचना दोआब", pa: "ਰਚਨਾ ਦੁਆਬ", en: "Rechna Doab" },
        { hi: "बारी दोआब", pa: "ਬਾਰੀ ਦੁਆਬ", en: "Bari Doab" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "सिंधु नदी और झेलम नदी के मध्य स्थित दोआब को 'सिंध सागर दोआब' कहा जाता है। इसका अधिकांश भाग थल मरुस्थल होने के कारण कम उपजाऊ था।",
        pa: "ਸਿੰਧ ਦਰਿਆ ਅਤੇ ਜਿਹਲਮ ਦਰਿਆ ਵਿਚਕਾਰਲੇ ਖੇਤਰ ਨੂੰ 'ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਇਸਦਾ ਵੱਡਾ ਹਿੱਸਾ ਥਲ ਮਾਰੂਥਲ ਹੋਣ ਕਾਰਨ ਘੱਟ ਉਪਜਾਊ ਸੀ।",
        en: "The Sindh Sagar Doab lies between the Indus and Jhelum rivers; consisting largely of the Thal desert, it was historically the least fertile."
      }
    },
    {
      id: "ett-pb-q11",
      prompt: {
        hi: "पंजाब के कांडी क्षेत्र के अंतर्गत आने वाले प्रमुख जिले कौन से हैं?",
        pa: "ਪੰਜਾਬ ਦੇ ਕੰਢੀ ਖੇਤਰ ਅਧੀਨ ਆਉਣ ਵਾਲੇ ਮੁੱਖ ਜ਼ਿਲ੍ਹੇ ਕਿਹੜੇ ਹਨ?",
        en: "Which prominent districts fall within Punjab's sub-mountainous Kandi tract?"
      },
      options: [
        { hi: "पठानकोट, होशियारपुर, रूपनगर और नवांशहर", pa: "ਪਠਾਨਕੋਟ, ਹੁਸ਼ਿਆਰਪੁਰ, ਰੂਪਨਗਰ ਅਤੇ ਨਵਾਂਸ਼ਹਿਰ", en: "Pathankot, Hoshiarpur, Rupnagar and Nawanshahr" },
        { hi: "बठिंडा, मानसा, संगरूर और बरनाला", pa: "ਬਠਿੰਡਾ, ਮਾਨਸਾ, ਸੰਗਰੂਰ ਅਤੇ ਬਰਨਾਲਾ", en: "Bathinda, Mansa, Sangrur and Barnala" },
        { hi: "अमृतसर, तरनतारन और फिरोजपुर", pa: "ਅੰਮ੍ਰਿਤਸਰ, ਤਰਨਤਾਰਨ ਅਤੇ ਫ਼ਿਰੋਜ਼ਪੁਰ", en: "Amritsar, Tarn Taran and Firozpur" },
        { hi: "पटियाला, फतेहगढ़ साहिब और लुधियाना", pa: "ਪਟਿਆਲਾ, ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ ਅਤੇ ਲੁਧਿਆਣਾ", en: "Patiala, Fatehgarh Sahib and Ludhiana" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "शिवालिक तलहटी में स्थित कांडी क्षेत्र पठानकोट, गुरदासपुर, होशियारपुर, शहीद भगत सिंह नगर (नवांशहर) और रूपनगर (रोपड़) जिलों में फैला हुआ है।",
        pa: "ਸ਼ਿਵਾਲਿਕ ਪਹਾੜੀਆਂ ਦੀ ਤਲਹਟੀ ਵਿੱਚ ਕੰਢੀ ਪੱਟੀ ਪਠਾਨਕੋਟ, ਗੁਰਦਾਸਪੁਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਨਵਾਂਸ਼ਹਿਰ ਅਤੇ ਰੂਪਨਗਰ ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚ ਫੈਲੀ ਹੋਈ ਹੈ।",
        en: "The sub-Siwalik Kandi belt extends across Pathankot, Gurdaspur, Hoshiarpur, SBS Nagar (Nawanshahr), and Rupnagar."
      }
    },
    {
      id: "ett-pb-q12",
      prompt: {
        hi: "तराइन की ऐतिहासिक लड़ाइयाँ (1191 व 1192) वर्तमान में किस राज्य/क्षेत्र की सीमा पर लड़ी गईं?",
        pa: "ਤਰਾਵੜੀ ਦੀਆਂ ਇਤਿਹਾਸਕ ਲੜਾਈਆਂ (1191 ਤੇ 1192) ਮੌਜੂਦਾ ਸਮੇਂ ਕਿਸ ਰਾਜ/ਖੇਤਰ ਦੀ ਹੱਦ 'ਤੇ ਲੜੀਆਂ ਗਈਆਂ ਸਨ?",
        en: "Near which modern region were the historic Battles of Tarain (1191 & 1192) fought?"
      },
      options: [
        { hi: "हरियाणा (करनाल/थानेसर क्षेत्र, ऐतिहासिक पंजाब सीमा)", pa: "ਹਰਿਆਣਾ (ਕਰਨਾਲ/ਥਾਨੇਸਰ ਖੇਤਰ, ਇਤਿਹਾਸਕ ਪੰਜਾਬ ਸਰਹੱਦ)", en: "Haryana (Karnal / Thanesar plain, historical Punjab border)" },
        { hi: "राजस्थान (अजमेर क्षेत्र)", pa: "ਰਾਜਸਥਾਨ (ਅਜਮੇਰ ਖੇਤਰ)", en: "Rajasthan (Ajmer sector)" },
        { hi: "उत्तर प्रदेश (पानीपत क्षेत्र)", pa: "ਉੱਤਰ ਪ੍ਰਦੇਸ਼ (ਪਾਣੀਪਤ ਖੇਤਰ)", en: "Uttar Pradesh (Panipat sector)" },
        { hi: "मध्य प्रदेश (ग्वालियर क्षेत्र)", pa: "ਮੱਧ ਪ੍ਰਦੇਸ਼ (ਗਵਾਲੀਅਰ ਖੇਤਰ)", en: "Madhya Pradesh (Gwalior sector)" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "तराइन (तरावड़ी) करनाल जिले (हरियाणा) में स्थित है, जो 1966 से पूर्व पंजाब का अभिन्न अंग था। यहाँ पृथ्वीराज चौहान और मुहम्मद गोरी के मध्य युद्ध हुए।",
        pa: "ਤਰਾਵੜੀ ਕਰਨਾਲ ਜ਼ਿਲ੍ਹੇ (ਹਰਿਆਣਾ) ਵਿੱਚ ਹੈ, ਜੋ 1966 ਤੋਂ ਪਹਿਲਾਂ ਪੰਜਾਬ ਦਾ ਹਿੱਸਾ ਸੀ। ਇੱਥੇ ਪ੍ਰਿਥਵੀਰਾਜ ਚੌਹਾਨ ਅਤੇ ਮੁਹੰਮਦ ਗ਼ੋਰੀ ਵਿਚਕਾਰ ਯੁੱਧ ਹੋਏ।",
        en: "Tarain (Taraori) is near Karnal in modern Haryana, integral to pre-1966 Punjab, where Prithviraj Chauhan battled Muhammad Ghori."
      }
    },
    {
      id: "ett-pb-q13",
      prompt: {
        hi: "पंजाब के किस मैदान को प्राचीन काल में 'अनाज का कटोरा' (Granary of India) कहा गया?",
        pa: "ਪੰਜਾਬ ਦੇ ਕਿਸ ਮੈਦਾਨ ਨੂੰ ਪ੍ਰਾਚੀਨ ਕਾਲ ਵਿੱਚ 'ਅੰਨ ਦਾ ਭੰਡਾਰ' (Granary of India) ਕਿਹਾ ਗਿਆ?",
        en: "Which landform earned historical Punjab the reputation of being the granary of India?"
      },
      options: [
        { hi: "पाँचों नदियों के जलोढ़ मैदान", pa: "ਪੰਜਾਂ ਦਰਿਆਵਾਂ ਦੇ ਜਲੋੜ ਮੈਦਾਨ", en: "Alluvial plains formed by the five rivers" },
        { hi: "शिवालिक की पथरीली पहाड़ियाँ", pa: "ਸ਼ਿਵਾਲਿਕ ਦੀਆਂ ਪੱਥਰੀਲੀਆਂ ਪਹਾੜੀਆਂ", en: "Stony Siwalik hill tracts" },
        { hi: "थार मरुस्थल की रेत की टिब्बे", pa: "ਥਾਰ ਮਾਰੂਥਲ ਦੇ ਰੇਤਲੇ ਟਿੱਬੇ", en: "Sand dunes of the Thar desert border" },
        { hi: "साल्ट रेंज की नमक की पहाड़ियाँ", pa: "ਸਾਲਟ ਰੇਂਜ ਦੀਆਂ ਲੂਣੀਆਂ ਪਹਾੜੀਆਂ", en: "Salt Range escarpments" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "सतलुज, व्यास, रावी, चिनाब और झेलम द्वारा जमा की गई उपजाऊ जलोढ़ मिट्टी के कारण पंजाब के मैदान अत्यधिक उपजाऊ रहे और भारत का अन्न भंडार कहलाए।",
        pa: "ਸਤਲੁਜ, ਬਿਆਸ, ਰਾਵੀ, ਚਨਾਬ ਅਤੇ ਜਿਹਲਮ ਦੁਆਰਾ ਲਿਆਂਦੀ ਉਪਜਾਊ ਜਲੋੜ ਮਿੱਟੀ ਕਾਰਨ ਪੰਜਾਬ ਦੇ ਮੈਦਾਨ ਹਮੇਸ਼ਾ ਭਾਰਤ ਦਾ ਅੰਨ ਭੰਡਾਰ ਰਹੇ।",
        en: "Perennial silt deposition across the five river valleys created extraordinarily fertile alluvial plains, making Punjab the subcontinental granary."
      }
    },
    {
      id: "ett-pb-q14",
      prompt: {
        hi: "पंजाब के उत्तर-पश्चिम में स्थित 'कुर्रम' और 'गोमल' दर्रे किस देश की सीमा पर स्थित हैं?",
        pa: "ਪੰਜਾਬ ਦੇ ਉੱਤਰ-ਪੱਛਮ ਵਿੱਚ ਸਥਿਤ 'ਕੁੱਰਮ' ਅਤੇ 'ਗੋਮਲ' ਦੱਰੇ ਕਿਸ ਦੇਸ਼ ਦੀ ਸਰਹੱਦ 'ਤੇ ਸਥਿਤ ਹਨ?",
        en: "Along which international frontier are the historical Kurram and Gomal passes located?"
      },
      options: [
        { hi: "अफगानिस्तान और पाकिस्तान (खैबर पख्तूनख्वा)", pa: "ਅਫ਼ਗ਼ਾਨਿਸਤਾਨ ਅਤੇ ਪਾਕਿਸਤਾਨ (ਖ਼ੈਬਰ ਪਖ਼ਤੂਨਖ਼ਵਾ)", en: "Afghanistan and Pakistan (Khyber Pakhtunkhwa)" },
        { hi: "चीन और लद्दाख सीमा", pa: "ਚੀਨ ਅਤੇ ਲੱਦਾਖ ਸਰਹੱਦ", en: "China and Ladakh border" },
        { hi: "म्यांमार और नागालैंड सीमा", pa: "ਮਿਆਂਮਾਰ ਅਤੇ ਨਾਗਾਲੈਂਡ ਸਰਹੱਦ", en: "Myanmar and Nagaland border" },
        { hi: "नेपाल और उत्तराखंड सीमा", pa: "ਨੇਪਾਲ ਅਤੇ ਉੱਤਰਾਖੰਡ ਸਰਹੱਦ", en: "Nepal and Uttarakhand border" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "कुर्रम और गोमल दर्रे सुलेमान पर्वतमाला में स्थित हैं, जो अफगानिस्तान और पाकिस्तान की सीमा पर ऐतिहासिक उत्तर-पश्चिमी सीमांत बनाते हैं।",
        pa: "ਕੁੱਰਮ ਅਤੇ ਗੋਮਲ ਦੱਰੇ ਸੁਲੇਮਾਨ ਪਰਬਤ ਲੜੀ ਵਿੱਚ ਹਨ, ਜੋ ਅਫ਼ਗ਼ਾਨਿਸਤਾਨ ਅਤੇ ਪਾਕਿਸਤਾਨ ਦੀ ਸਰਹੱਦ 'ਤੇ ਇਤਿਹਾਸਕ ਉੱਤਰ-ਪੱਛਮੀ ਸਰਹੱਦ ਬਣਾਉਂਦੇ ਹਨ।",
        en: "The Kurram and Gomal passes breach the Sulaiman Range along the historic northwestern frontier between Afghanistan and Pakistan."
      }
    },
    {
      id: "ett-pb-q15",
      prompt: {
        hi: "चज दोआब किन दो नदियों के मध्य स्थित भू-भाग है?",
        pa: "ਚੱਜ ਦੁਆਬ ਕਿਨ੍ਹਾਂ ਦੋ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰ ਸਥਿਤ ਇਲਾਕਾ ਹੈ?",
        en: "Which two rivers flank the Chaj Doab in historical Punjab?"
      },
      options: [
        { hi: "चिनाब और झेलम", pa: "ਚਨਾਬ ਅਤੇ ਜਿਹਲਮ", en: "Chenab and Jhelum" },
        { hi: "रावी और सतलुज", pa: "ਰਾਵੀ ਅਤੇ ਸਤਲੁਜ", en: "Ravi and Sutlej" },
        { hi: "ब्यास और घग्गर", pa: "ਬਿਆਸ ਅਤੇ ਘੱਗਰ", en: "Beas and Ghaggar" },
        { hi: "सिंधु और स्वात", pa: "ਸਿੰਧ ਅਤੇ ਸਵਾਤ", en: "Indus and Swat" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "चज (Chaj) दोआब चिनाब (Ch) और झेलम (J) नदियों के बीच स्थित है। इसमें गुजरात और शाहपुर जिले शामिल थे।",
        pa: "ਚੱਜ ਦੁਆਬ ਚਨਾਬ (ਚ) ਅਤੇ ਜਿਹਲਮ (ਜ) ਦਰਿਆਵਾਂ ਵਿਚਕਾਰਲੀ ਜ਼ਮੀਨ ਹੈ। ਇਸ ਵਿੱਚ ਗੁਜਰਾਤ ਅਤੇ ਸ਼ਾਹਪੁਰ ਜ਼ਿਲ੍ਹੇ ਆਉਂਦੇ ਸਨ।",
        en: "Chaj Doab is bounded by the Chenab (Ch) and Jhelum (J) rivers, historically encompassing Gujrat and Shahpur."
      }
    },
    {
      id: "ett-pb-q16",
      prompt: {
        hi: "पंजाब के निवासियों के साहसी और जुझारू चरित्र के निर्माण में सर्वाधिक योगदान किसका रहा?",
        pa: "ਪੰਜਾਬੀਆਂ ਦੇ ਦਲੇਰ ਅਤੇ ਜੁਝਾਰੂ ਸੁਭਾਅ ਦੇ ਨਿਰਮਾਣ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਡਾ ਯੋਗਦਾਨ ਕਿਸ ਚੀਜ਼ ਦਾ ਰਿਹਾ?",
        en: "What factor contributed most decisively to forging the resilient martial character of Punjabis?"
      },
      options: [
        { hi: "उत्तर-पश्चिमी सीमांत पर निरंतर विदेशी आक्रमणों का सामना करना", pa: "ਉੱਤਰ-ਪੱਛਮੀ ਸਰਹੱਦ 'ਤੇ ਲਗਾਤਾਰ ਵਿਦੇਸ਼ੀ ਹਮਲਿਆਂ ਦਾ ਸਾਹਮਣਾ ਕਰਨਾ", en: "Facing perpetual frontier invasions as India's gateway shield" },
        { hi: "पहाड़ी गुफाओं में एकांत जीवन व्यतीत करना", pa: "ਪਹਾੜੀ ਗੁਫ਼ਾਵਾਂ ਵਿੱਚ ਇਕਾਂਤ ਜੀਵਨ ਬਤੀਤ ਕਰਨਾ", en: "Living secluded ascetic lives in mountain caverns" },
        { hi: "केवल समुद्री व्यापार पर निर्भरता", pa: "ਕੇਵਲ ਸਮੁੰਦਰੀ ਵਪਾਰ 'ਤੇ ਨਿਰਭਰਤਾ", en: "Relying exclusively on maritime commerce" },
        { hi: "अन्य राज्यों से पूर्णतः अलग-थलग रहना", pa: "ਹੋਰ ਰਾਜਾਂ ਤੋਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਲੱਗ-ਥਲੱਗ ਰਹਿਣਾ", en: "Remaining geographically isolated from the subcontinent" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "भारत का प्रवेश द्वार होने के कारण पंजाब को सदियों तक हर आक्रमणकारी की पहली मार झेलनी पड़ी। इस निरंतर संघर्ष ने यहाँ के जन-जीवन को जुझारू और निर्भीक बनाया।",
        pa: "ਭਾਰਤ ਦਾ ਪ੍ਰਵੇਸ਼ ਦੁਆਰ ਹੋਣ ਕਰਕੇ ਪੰਜਾਬੀਆਂ ਨੇ ਸਦੀਆਂ ਤੱਕ ਹਰ ਹਮਲਾਵਰ ਦੀ ਪਹਿਲੀ ਚੋਟ ਝੱਲੀ। ਇਸ ਨਿਰੰਤਰ ਜੱਦੋਜਹਿਦ ਨੇ ਲੋਕਾਂ ਨੂੰ ਦਲੇਰ ਅਤੇ ਨਿਡਰ ਬਣਾਇਆ।",
        en: "Serving as the continental gateway subjected Punjabis to the primary impact of invading armies, cultivating deep martial resilience."
      }
    },
    {
      id: "ett-pb-q17",
      prompt: {
        hi: "वर्तमान भारतीय पंजाब में कुल कितने जिले हैं और सबसे नवीन 23वाँ जिला कौन सा है?",
        pa: "ਅਜੋਕੇ ਭਾਰਤੀ ਪੰਜਾਬ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਜ਼ਿਲ੍ਹੇ ਹਨ ਅਤੇ ਸਭ ਤੋਂ ਨਵਾਂ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਕਿਹੜਾ ਹੈ?",
        en: "How many districts currently exist in Indian Punjab and which is the newest 23rd district?"
      },
      options: [
        { hi: "23 जिले; मलेरकोटला 23वाँ जिला है", pa: "23 ਜ਼ਿਲ੍ਹੇ; ਮਲੇਰਕੋਟਲਾ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਹੈ", en: "23 districts; Malerkotla is the 23rd district" },
        { hi: "22 जिले; फाजिल्का 22वाँ जिला है", pa: "22 ਜ਼ਿਲ੍ਹੇ; ਫ਼ਾਜ਼ਿਲਕਾ 22ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਹੈ", en: "22 districts; Fazilka is the 22nd district" },
        { hi: "20 जिले; मोहाली 20वाँ जिला है", pa: "20 ਜ਼ਿਲ੍ਹੇ; ਮੋਹਾਲੀ 20ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਹੈ", en: "20 districts; Mohali is the 20th district" },
        { hi: "25 जिले; पठानकोट 25वाँ जिला है", pa: "25 ਜ਼ਿਲ੍ਹੇ; ਪਠਾਨਕੋਟ 25ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਹੈ", en: "25 districts; Pathankot is the 25th district" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "वर्तमान में पंजाब में 23 प्रशासनिक जिले हैं। मई 2021 में संगरूर जिले से अलग करके मलेरकोटला को राज्य का 23वाँ जिला बनाया गया था।",
        pa: "ਮੌਜੂਦਾ ਸਮੇਂ ਪੰਜਾਬ ਵਿੱਚ 23 ਪ੍ਰਸ਼ਾਸਕੀ ਜ਼ਿਲ੍ਹੇ ਹਨ। ਮਈ 2021 ਵਿੱਚ ਸੰਗਰੂਰ ਤੋਂ ਵੱਖ ਕਰਕੇ ਮਲੇਰਕੋਟਲਾ ਨੂੰ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਐਲਾਨਿਆ ਗਿਆ ਸੀ।",
        en: "Punjab presently comprises 23 administrative districts; Malerkotla was carved out of Sangrur in May 2021 as the 23rd district."
      }
    },
    {
      id: "ett-pb-q18",
      prompt: {
        hi: "पंजाब का कौन सा क्षेत्र 'बिस्त दोआब' कहलाता है?",
        pa: "ਪੰਜਾਬ ਦਾ ਕਿਹੜਾ ਖੇਤਰ 'ਬਿਸਤ ਦੁਆਬ' ਅਖਵਾਉਂਦਾ ਹੈ?",
        en: "Which interfluve territory in Indian Punjab is designated as 'Bist Doab'?"
      },
      options: [
        { hi: "ब्यास और सतलुज के बीच का जालंधर मंडल", pa: "ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰਲਾ ਜਲੰਧਰ ਮੰਡਲ", en: "The Jalandhar division between Beas and Sutlej" },
        { hi: "रावी और चिनाब के बीच का लाहौर मंडल", pa: "ਰਾਵੀ ਅਤੇ ਚਨਾਬ ਵਿਚਕਾਰਲਾ ਲਾਹੌਰ ਮੰਡਲ", en: "The Lahore division between Ravi and Chenab" },
        { hi: "सतलुज और यमुना के बीच का अंबाला मंडल", pa: "ਸਤਲੁਜ ਅਤੇ ਯਮੁਨਾ ਵਿਚਕਾਰਲਾ ਅੰਬਾਲਾ ਮੰਡਲ", en: "The Ambala division between Sutlej and Yamuna" },
        { hi: "सिंधु और झेलम के बीच का रावलपिंडी मंडल", pa: "ਸਿੰਧ ਅਤੇ ਜਿਹਲਮ ਵਿਚਕਾਰਲਾ ਰਾਵਲਪਿੰਡੀ ਮੰਡਲ", en: "The Rawalpindi division between Indus and Jhelum" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "ब्यास और सतलुज के बीच का क्षेत्र बिस्त जालंधर दोआब कहलाता है, जिसे बोलचाल में 'दोआबा' भी कहा जाता है। इसमें जालंधर, कपूरथला आदि आते हैं।",
        pa: "ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰਲਾ ਖੇਤਰ ਬਿਸਤ ਜਲੰਧਰ ਦੁਆਬ ਕਹਾਉਂਦਾ ਹੈ, ਜਿਸਨੂੰ ਆਮ ਬੋਲਚਾਲ ਵਿੱਚ 'ਦੁਆਬਾ' ਆਖਦੇ ਹਨ।",
        en: "The Bist Jalandhar Doab lies between Beas and Sutlej, colloquially called Doaba, encompassing Jalandhar and Kapurthala."
      }
    },
    {
      id: "ett-pb-q19",
      prompt: {
        hi: "रचना दोआब किन दो नदियों के मध्य स्थित है?",
        pa: "ਰਚਨਾ ਦੁਆਬ ਕਿਨ੍ਹਾਂ ਦੋ ਦਰਿਆਵਾਂ ਦੇ ਵਿਚਕਾਰ ਸਥਿਤ ਹੈ?",
        en: "Between which two rivers is the Rechna Doab located?"
      },
      options: [
        { hi: "रावी और चिनाब", pa: "ਰਾਵੀ ਅਤੇ ਚਨਾਬ", en: "Ravi and Chenab" },
        { hi: "ब्यास और सतलुज", pa: "ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ", en: "Beas and Sutlej" },
        { hi: "झेलम और सिंधु", pa: "ਜਿਹਲਮ ਅਤੇ ਸਿੰਧ", en: "Jhelum and Indus" },
        { hi: "चिनाब और झेलम", pa: "ਚਨਾਬ ਅਤੇ ਜਿਹਲਮ", en: "Chenab and Jhelum" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "रचना (Rechna) दोआब रावी (R) और चिनाब (Chna) नदियों के बीच स्थित है। इसमें गुजरांवाला और शेखूपुरा जिले आते हैं।",
        pa: "ਰਚਨਾ ਦੁਆਬ ਰਾਵੀ (ਰ) ਅਤੇ ਚਨਾਬ (ਚਨਾ) ਦਰਿਆਵਾਂ ਵਿਚਕਾਰਲੀ ਧਰਤੀ ਹੈ। ਇਸ ਵਿੱਚ ਗੁਜਰਾਂਵਾਲਾ ਅਤੇ ਸ਼ੇਖੂਪੁਰਾ ਆਉਂਦੇ ਹਨ।",
        en: "Rechna Doab is bounded by the Ravi (R) and Chenab (Chna) rivers, encompassing Gujranwala and Sheikhupura."
      }
    },
    {
      id: "ett-pb-q20",
      prompt: {
        hi: "प्राचीन काल में पंजाब के मैदानों की ओर विदेशी आक्रमणकारियों के आकर्षित होने का मुख्य आर्थिक कारण क्या था?",
        pa: "ਪ੍ਰਾਚੀਨ ਸਮਿਆਂ ਵਿੱਚ ਪੰਜਾਬ ਦੇ ਮੈਦਾਨਾਂ ਵੱਲ ਵਿਦੇਸ਼ੀ ਹਮਲਾਵਰਾਂ ਦੇ ਆਕਰਸ਼ਿਤ ਹੋਣ ਦਾ ਮੁੱਖ ਆਰਥਿਕ ਕਾਰਨ ਕੀ ਸੀ?",
        en: "What primary economic attribute attracted invader hordes to Punjab's plains throughout antiquity?"
      },
      options: [
        { hi: "बारहमासी नदियों द्वारा पोषित अत्यधिक उपजाऊ कृषि भूमि और विपुल धन-संपत्ति", pa: "ਬਾਰਾਂਮਾਹੀ ਦਰਿਆਵਾਂ ਦੁਆਰਾ ਸਿੰਜੀ ਬੇਹੱਦ ਉਪਜਾਊ ਖੇਤੀ ਜ਼ਮੀਨ ਅਤੇ ਅਥਾਹ ਧਨ-ਦੌਲਤ", en: "Vast agrarian wealth sustained by perennial rivers and fertile alluvial soils" },
        { hi: "गहन कोयला और पेट्रोलियम खदानों की उपस्थिति", pa: "ਕੋਲੇ ਅਤੇ ਪੈਟਰੋਲੀਅਮ ਦੀਆਂ ਡੂੰਘੀਆਂ ਖਾਣਾਂ ਦੀ ਮੌਜੂਦਗੀ", en: "Extensive reserves of high-grade coal and crude petroleum" },
        { hi: "गहरे प्राकृतिक समुद्री बंदरगाह", pa: "ਡੂੰਘੀਆਂ ਕੁਦਰਤੀ ਸਮੁੰਦਰੀ ਬੰਦਰਗਾਹਾਂ", en: "Deep sheltered natural oceanic harbors" },
        { hi: "हीरे और सोने की प्रचुर खुली खदानें", pa: "ਹੀਰੇ ਅਤੇ ਸੋਨੇ ਦੀਆਂ ਵੱਡੀਆਂ ਖੁੱਲ੍ਹੀਆਂ ਖਾਣਾਂ", en: "Abundant surface open-cast diamond and gold mines" }
      ],
      answerIndex: 0,
      explanation: {
        hi: "पंजाब की बारहमासी नदियाँ और उपजाऊ जलोढ़ मैदान कृषि की दृष्टि से अत्यंत संपन्न थे। इस संपन्नता और भारत की अकूत संपदा ने ही विदेशी आक्रांताओं को आकर्षित किया।",
        pa: "ਪੰਜਾਬ ਦੇ ਬਾਰਾਂਮਾਹੀ ਦਰਿਆ ਅਤੇ ਉਪਜਾਊ ਜਲੋੜ ਮੈਦਾਨ ਬਹੁਤ ਖ਼ੁਸ਼ਹਾਲ ਸਨ। ਇਸੇ ਖ਼ੁਸ਼ਹਾਲੀ ਅਤੇ ਦੌਲਤ ਨੇ ਹਮਲਾਵਰਾਂ ਨੂੰ ਖਿੱਚਿਆ।",
        en: "Punjab's reliable river systems and nutrient-rich alluvium created extraordinary agrarian wealth that repeatedly drew hungry frontier invaders."
      }
    }
  ],
  sources: [
    {
      title: "PSEB Class 10 Samajik Sikhya Part 1 · Chapter 1: Physical Features of Punjab and their Impact",
      url: "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf"
    },
    {
      title: "Education Recruitment Board Punjab · 6635 ETT Official Syllabus Document",
      url: "https://educationrecruitmentboard.com/ETT6635/Docs/ETT6635Syllabus13_08_2021.pdf"
    }
  ],
  videos: [
    {
      title: "Punjab Geography & Physical Features · In-Depth Analysis",
      url: "https://www.youtube.com/watch?v=bx54GZsEFeo"
    }
  ],
  documents: [
    {
      title: "PSEB Samajik Sikhya Class 10 (Punjabi Medium)",
      url: "https://static.pseb.ac.in/media/1670561302_Samajik%20Sikhya-10%28Punjabi%29%20Bhag-I.pdf"
    }
  ]
};

// Now read existing lessons, append/update ettSstLesson, and save
const lessonsPath = './content/lessons.json';
const existing = JSON.parse(fs.readFileSync(lessonsPath, 'utf8'));

// If it already exists, replace it, else push
const idx = existing.findIndex(l => l.id === ettSstLesson.id);
if (idx >= 0) {
  existing[idx] = ettSstLesson;
} else {
  existing.push(ettSstLesson);
}

fs.writeFileSync(lessonsPath, JSON.stringify(existing, null, 2));
console.log(`Saved ${ettSstLesson.id} successfully! Total lessons: ${existing.length}`);
