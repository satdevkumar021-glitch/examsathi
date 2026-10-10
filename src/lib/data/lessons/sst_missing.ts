// ============================================================
// ExamSathi — 5 Missing Punjab Master Cadre SST Deep-Dive Lessons
// Medieval India · Modern World History · India Geography ·
// Indian Economy Deep · Punjab History Deep
// Each lesson: 6+ sections (Hi/Pa/En), 20-25 flashcards, keyNotes, videos, docs
// ============================================================
import type { Lesson } from "./types";

export const SST_MISSING_LESSONS: Record<string, Lesson> = {

  // ─────────────────────────────────────────────────────────
  // 1. MEDIEVAL INDIA — Delhi Sultanate & Mughal Empire
  // ─────────────────────────────────────────────────────────
  "sst-medieval-india": {
    id: "sst-medieval-india",
    topicId: "sst-medieval-india",
    subjectId: "social-science",
    category: "history",
    title: {
      hi: "मध्यकालीन भारत — दिल्ली सल्तनत, मुगल साम्राज्य, भक्ति व सूफी",
      pa: "ਮੱਧਕਾਲੀਨ ਭਾਰਤ — ਦਿੱਲੀ ਸਲਤਨਤ, ਮੁਗਲ ਸਾਮਰਾਜ, ਭਗਤੀ ਤੇ ਸੂਫੀ",
      en: "Medieval India — Delhi Sultanate, Mughal Empire, Bhakti & Sufi Movements",
    },
    examRelevance: "Punjab Master Cadre (8-10 Qs), CTET Paper 2, REET L2, ETT, SSC CGL",
    estimatedTime: "50 minutes",
    content: {
      hi: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. दिल्ली सल्तनत (1206–1526) — पाँच वंश</h3><p class="text-slate-300 text-sm leading-relaxed">भारत में तुर्की-अफगान शासन का यह काल पाँच वंशों में विभाजित है।<br/><strong>गुलाम वंश (1206–1290):</strong> कुतुबुद्दीन ऐबक (1206-1210) ने कुतुब मीनार की नींव रखी, दास प्रथा का प्रतीक। इल्तुतमिश (1211-1236) — दिल्ली सल्तनत का वास्तविक संस्थापक, पहला सुल्तान जिसे बगदाद खलीफा से मान्यता मिली, 'इक्ता' व्यवस्था प्रारम्भ की। रजिया सुल्तान (1236-1240) — भारत की प्रथम मुस्लिम महिला शासक। बलबन (1266-1287) — 'रक्त और लौह' की नीति, 'सिजदा' और 'पायबोस' प्रथा।<br/><strong>खिलजी वंश (1290–1320):</strong> अलाउद्दीन खिलजी (1296-1316) — बाजार नियंत्रण नीति (4 बाजार — अनाज, कपड़ा, मवेशी, सामान्य), दीवान-ए-रियासत पद बनाया, दक्षिण भारत पर आक्रमण (मलिक काफूर के नेतृत्व में), गुजरात, रणथम्भोर, चित्तौड़ विजय। सल्तनत की सर्वाधिक सैन्य शक्ति इसी के काल में।<br/><strong>तुगलक वंश (1320–1414):</strong> मुहम्मद बिन तुगलक (1325-1351) — राजधानी दिल्ली से देवगिरि (दौलताबाद) स्थानांतरण, प्रतीकात्मक मुद्रा (चाँदी की जगह ताँबा), अफ्रीकी यात्री इब्न बतूता इसी के काल में आए। फिरोज शाह तुगलक (1351-1388) — नहरें बनवाईं (यमुना से हिसार तक), अस्पताल, दीवान-ए-खैरात, ब्राह्मण ग्रंथों का अरबी अनुवाद। लोदी वंश (1451-1526): इब्राहिम लोदी — पानीपत प्रथम युद्ध में बाबर से पराजित।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. शेर शाह सूरी (1540–1555) — मुगलों के बीच का महान प्रशासक</h3><p class="text-slate-300 text-sm leading-relaxed">हुमायूँ को हराकर शेर शाह सूरी ने सूर साम्राज्य स्थापित किया। उसके प्रमुख कार्य:<br/>• <strong>ग्रांड ट्रंक रोड (GT Road):</strong> पेशावर से बंगाल तक (2500 किमी), रास्ते में सराय, छायादार पेड़, कुएँ।<br/>• <strong>रुपया सिक्का:</strong> शुद्ध चाँदी का 'रुपया' और 'दाम' (ताँबा) प्रचलित किए।<br/>• <strong>भूमि सर्वेक्षण:</strong> रैयतवारी के आधार पर भूमि मापन, राजस्व उपज का 1/3 भाग।<br/>• <strong>डाक व्यवस्था:</strong> घुड़सवारों द्वारा संदेश, हर 2 कोस पर घोड़ा।<br/>• <strong>सैन्य व्यवस्था:</strong> सेना की जाँच (हुलिया) और घोड़ों पर दाग लगाने की प्रथा।<br/>मात्र 5 वर्ष के शासन में इतने सुधार → 'भारत का नेपोलियन' का उपनाम।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. अकबर महान (1556–1605) — सबसे महत्त्वपूर्ण मुगल</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>पानीपत का द्वितीय युद्ध (5 नवम्बर 1556):</strong> अकबर के सेनापति बैरम खान ने हेमू (विक्रमादित्य) को पराजित किया।<br/><strong>मनसबदारी व्यवस्था:</strong> सैनिक-प्रशासनिक पद (जात — व्यक्तिगत पद, सवार — घुड़सवार सेना की जिम्मेदारी)। 10 से 10,000 तक मनसब।<br/><strong>दीन-ए-इलाही (1582):</strong> विभिन्न धर्मों के सार से बना एकेश्वरवादी पंथ, केवल 18 अनुयायी (बीरबल एकमात्र हिंदू सदस्य)।<br/><strong>सुलह-ए-कुल:</strong> सभी धर्मों के साथ शांतिपूर्ण सहअस्तित्व की नीति।<br/><strong>इबादत खाना (1575):</strong> फतेहपुर सीकरी में धर्म-चर्चा गृह।<br/><strong>नवरत्न:</strong> अबुल फजल (आइन-ए-अकबरी, अकबरनामा), बीरबल, तानसेन, राजा मान सिंह, राजा टोडरमल (भू-राजस्व), अब्दुर रहीम खान-ए-खाना, फैजी, मुल्ला दो प्याजा, हकीम हुमाम।<br/><strong>राजपूत नीति:</strong> विवाह संबंधों से राजपूतों को अपने साथ जोड़ा।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. जहाँगीर, शाहजहाँ व औरंगजेब</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>जहाँगीर (1605–1627):</strong> चित्रकला का संरक्षक, न्याय की जंजीर, पुर्तगालियों से संघर्ष, नूरजहाँ का वास्तविक प्रभाव, मेवाड़ से संधि।<br/><strong>शाहजहाँ (1628–1658):</strong> ताजमहल (1631-1653) — उस्ताद अहमद लाहौरी, 20,000 मजदूर, सफेद संगमरमर, रानी मुमताज महल की याद में। लाल किला (दिल्ली), जामा मस्जिद। मयूर सिंहासन (तख्त-ए-ताऊस) — सोने और बहुमूल्य पत्थरों से बना। 'स्थापत्य का स्वर्ण युग'। उत्तराधिकार युद्ध → औरंगजेब की जीत, शाहजहाँ का आगरे में कैद।<br/><strong>औरंगजेब (1658–1707):</strong> जिजिया कर पुनः लागू (1679), संगीत व नृत्य पर प्रतिबंध, मंदिरों का विध्वंस (काशी-मथुरा)। गुरु तेग बहादुर जी की शहादत (1675 — दिल्ली)। दक्कन में 25 वर्ष (मुगल साम्राज्य का आर्थिक पतन)। मराठा शक्ति का उदय (शिवाजी)। मृत्यु के बाद मुगल साम्राज्य का विघटन।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">5. भक्ति आंदोलन — हिंदू सुधार लहर</h3><p class="text-slate-300 text-sm leading-relaxed">8वीं से 17वीं सदी तक चले इस आंदोलन ने जाति-प्रथा और मूर्ति-पूजा पर प्रहार किया।<br/><strong>दक्षिण के आलवार और नयनमार संत:</strong> तमिलनाडु में शुरुआत।<br/><strong>रामानुज (12वीं सदी):</strong> विशिष्टाद्वैत दर्शन, सगुण भक्ति।<br/><strong>रामानंद (14-15वीं सदी):</strong> उत्तर भारत में भक्ति का प्रसार, कबीर उनके शिष्य।<br/><strong>कबीर (1440-1518):</strong> जुलाहा, हिंदू-मुस्लिम एकता, 'दोहे' — "पोथी पढ़-पढ़ जग मुआ, पंडित भया न कोय"। बीजक ग्रंथ।<br/><strong>मीराबाई (1498-1547):</strong> राजपूत राजकुमारी, कृष्ण-भक्ति। "मेरे तो गिरिधर गोपाल, दूसरो न कोई।"<br/><strong>चैतन्य महाप्रभु (1486-1534):</strong> बंगाल, वैष्णव भक्ति, कीर्तन।<br/><strong>तुकाराम:</strong> महाराष्ट्र, पंढरपुर के विट्ठल भक्त। अभंग काव्य।<br/><strong>रविदास (रैदास):</strong> चर्मकार समुदाय, "मन चंगा तो कठौती में गंगा।"<br/><strong>बसवन्ना (12वीं सदी):</strong> कर्नाटक, लिंगायत पंथ, जाति-विरोध।<br/><strong>शंकरदेव:</strong> असम, एकशरण धर्म।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">6. सूफी आंदोलन — इस्लामी रहस्यवाद</h3><p class="text-slate-300 text-sm leading-relaxed">इस्लाम की आध्यात्मिक परंपरा जो ईश्वर से प्रेम पर बल देती है।<br/><strong>चिश्ती सिलसिला (सबसे प्रभावशाली):</strong><br/>• ख्वाजा मोइनुद्दीन चिश्ती (1143-1236) — अजमेर (राजस्थान), मुइज्जुद्दीन मुहम्मद गोरी के साथ आए।<br/>• बख्तियार काकी — दिल्ली।<br/>• बाबा फरीद गंजशकर — पाकिस्तान का शकरगंज, गुरु ग्रंथ साहिब में उनकी वाणी शामिल।<br/>• निजामुद्दीन औलिया (1238-1325) — दिल्ली, 'महबूब-ए-इलाही', अमीर खुसरो के गुरु।<br/>• नासिरुद्दीन चिराग — दिल्ली।<br/><strong>सुहरावर्दी सिलसिला:</strong> बहाउद्दीन जकारिया — मुलतान।<br/><strong>कादिरी सिलसिला:</strong> शाह नियामतुल्लाह — बीजापुर।<br/><strong>नक्शबंदी सिलसिला:</strong> ख्वाजा बाकी बिल्लाह — दिल्ली; शेख अहमद सरहिंदी — मुजद्दिद अल्फसानी (इस्लामी पुनरुद्धार, अकबर की नीतियों का विरोध)।<br/><strong>दरगाह:</strong> सूफी संत की मजार — शिक्षा और लंगर का केंद्र, सभी धर्मों के श्रद्धालु आते।<br/><strong>खानकाह:</strong> सूफियों का निवास और शिक्षा स्थल।</p></div>`,

      pa: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. ਦਿੱਲੀ ਸਲਤਨਤ (1206-1526)</h3><p class="text-slate-300 text-sm leading-relaxed">ਭਾਰਤ ਵਿੱਚ ਤੁਰਕੀ-ਅਫਗਾਨ ਸ਼ਾਸਨ ਪੰਜ ਵੰਸ਼ਾਂ ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ। ਗੁਲਾਮ ਵੰਸ਼: ਕੁਤਬੁਦੀਨ ਐਬਕ (ਕੁਤਬ ਮੀਨਾਰ), ਇਲਤੁਤਮਿਸ਼ (ਇਕਤਾ ਵਿਵਸਥਾ), ਰਜ਼ੀਆ ਸੁਲਤਾਨ (ਪਹਿਲੀ ਮੁਸਲਿਮ ਮਹਿਲਾ ਸ਼ਾਸਕ), ਬਲਬਨ (ਖੂਨ ਅਤੇ ਲੋਹੇ ਦੀ ਨੀਤੀ)। ਖਿਲਜੀ ਵੰਸ਼: ਅਲਾਉਦੀਨ ਖਿਲਜੀ (4 ਬਾਜ਼ਾਰ ਨਿਯੰਤਰਣ)। ਤੁਗਲਕ ਵੰਸ਼: ਮੁਹੰਮਦ ਬਿਨ ਤੁਗਲਕ (ਰਾਜਧਾਨੀ ਦੇਵਗਿਰੀ ਤਬਦੀਲ), ਫਿਰੋਜ਼ ਸ਼ਾਹ (ਨਹਿਰਾਂ)। ਲੋਧੀ ਵੰਸ਼: ਇਬਰਾਹਿਮ ਲੋਧੀ ਪਾਣੀਪਤ ਵਿੱਚ ਹਾਰਿਆ।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. ਸ਼ੇਰ ਸ਼ਾਹ ਸੂਰੀ ਅਤੇ ਮੁਗਲ ਸਾਮਰਾਜ</h3><p class="text-slate-300 text-sm leading-relaxed">ਸ਼ੇਰ ਸ਼ਾਹ ਸੂਰੀ (1540-1555): ਗ੍ਰੈਂਡ ਟਰੰਕ ਰੋਡ, ਰੁਪਈਆ ਸਿੱਕਾ, ਜ਼ਮੀਨ ਮਾਪਣ, ਡਾਕ ਵਿਵਸਥਾ। ਅਕਬਰ (1556-1605): ਪਾਣੀਪਤ ਦੀ ਦੂਜੀ ਲੜਾਈ, ਮਨਸਬਦਾਰੀ, ਦੀਨ-ਏ-ਇਲਾਹੀ, ਸੁਲਹ-ਏ-ਕੁਲ। ਸ਼ਾਹਜਹਾਂ: ਤਾਜ ਮਹਿਲ (1631-1653)। ਔਰੰਗਜ਼ੇਬ: ਜਜ਼ੀਆ ਕਰ (1679), ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹੀਦੀ (1675 ਚਾਂਦਨੀ ਚੌਕ, ਦਿੱਲੀ)।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. ਭਗਤੀ ਅਤੇ ਸੂਫੀ ਅੰਦੋਲਨ</h3><p class="text-slate-300 text-sm leading-relaxed">ਭਗਤੀ ਅੰਦੋਲਨ: ਕਬੀਰ ਜੀ (ਹਿੰਦੂ-ਮੁਸਲਿਮ ਏਕਤਾ), ਮੀਰਾਬਾਈ (ਕ੍ਰਿਸ਼ਨ ਭਗਤੀ), ਚੈਤੰਨਿਆ ਮਹਾਪ੍ਰਭੂ (ਬੰਗਾਲ, ਕੀਰਤਨ), ਰਵਿਦਾਸ ਜੀ (ਜਾਤ-ਵਿਰੋਧੀ), ਤੁਕਾਰਾਮ (ਮਹਾਰਾਸ਼ਟਰ)। ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਕਬੀਰ ਜੀ, ਰਵਿਦਾਸ ਜੀ ਅਤੇ ਬਾਬਾ ਫਰੀਦ ਜੀ ਦੀ ਬਾਣੀ ਦਰਜ ਹੈ। ਸੂਫੀ ਅੰਦੋਲਨ: ਚਿਸ਼ਤੀ ਸਿਲਸਿਲਾ (ਖਵਾਜਾ ਮੋਇਨੁਦੀਨ ਚਿਸ਼ਤੀ — ਅਜਮੇਰ, ਨਿਜ਼ਾਮੁਦੀਨ ਔਲੀਆ — ਦਿੱਲੀ), ਨਕਸ਼ਬੰਦੀ ਸਿਲਸਿਲਾ (ਸ਼ੇਖ ਅਹਿਮਦ ਸਰਹਿੰਦੀ — ਮੁਜੱਦਿਦ ਅਲਫਸਾਨੀ)।</p></div>`,

      en: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. Delhi Sultanate (1206–1526) — Five Dynasties</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>Slave/Mamluk Dynasty (1206–1290):</strong> Qutb-ud-din Aibak — founded Delhi Sultanate, began Qutb Minar. Iltutmish (1211–1236) — real consolidator, received investiture from Caliph of Baghdad, introduced Iqta system, completed Qutb Minar. Razia Sultana (1236–1240) — India's first Muslim woman ruler. Balban (1266–1287) — Theory of Kingship, 'Blood and Iron' policy, Sijda and Paibos customs.<br/><strong>Khalji Dynasty (1290–1320):</strong> Alauddin Khalji (1296–1316) — 4 market regulations (grain, cloth, cattle, miscellaneous), created Diwan-i-Riyasat, conquered Gujarat, Ranthambore, Chittor, Deccan (Malik Kafur campaigns).<br/><strong>Tughlaq Dynasty (1320–1414):</strong> Muhammad bin Tughlaq (1325–1351) — transferred capital Delhi→Devagiri (Daulatabad), introduced token currency (copper coins), visited by Ibn Battuta. Firoz Shah Tughlaq — built canals, hospitals, Diwan-i-Khairat (charity dept). Lodi Dynasty (1451–1526): Ibrahim Lodi defeated by Babur at Panipat.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. Sher Shah Suri & the Mughal Empire</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>Sher Shah Suri (1540–1555):</strong> Defeated Humayun at Chausa (1539) and Kannauj (1540). Grand Trunk Road (Peshawar to Bengal, 2500 km) with sarais every 2 kos. Introduced pure silver Rupiya and copper Dam. Land survey with Bigha units, land revenue 1/3rd of produce. Postal service using horse relays. Brand (dagh) and descriptive roll (huliya) for soldiers. Called 'Napoleon of India' for 5-year reforms.<br/><strong>Akbar (1556–1605):</strong> Battle of Panipat II (5 Nov 1556) — Bairam Khan vs Hemu. Mansabdari system (Zat-rank, Sawar-cavalry). Din-i-Ilahi 1582 (18 followers, Birbal the only Hindu). Sulh-i-Kul (universal peace). Ibadat Khana 1575 at Fatehpur Sikri. Abolished Jizya (1564). Nine Gems: Birbal, Tansen, Abul Fazl, Todar Mal, Man Singh, Abdur Rahim, Faizi, etc.<br/><strong>Shah Jahan (1628–1658):</strong> Taj Mahal 1631–1653 (Ustad Ahmad Lahauri, white marble, Yamuna bank, Agra). Red Fort Delhi 1638–1648. Peacock Throne (Takht-e-Taus — gold + jewels, worth 2× Taj Mahal).<br/><strong>Aurangzeb (1658–1707):</strong> Reimposed Jizya 1679, banned music and dance, demolished Kashi Vishwanath and Mathura temples. Martyrdom of Guru Tegh Bahadur Ji (1675, Chandni Chowk Delhi). 25-year Deccan campaign → exhausted empire. Shivaji's Maratha resistance.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. Bhakti Movement</h3><p class="text-slate-300 text-sm leading-relaxed">8th–17th century devotional movement challenging caste hierarchy and ritualism.<br/>Kabir (1440–1518): Weaver-saint, Hindu-Muslim synthesis, dohas (couplets), Bijak. Mirabai (1498–1547): Rajput princess, Krishna devotion. Chaitanya Mahaprabhu (1486–1534): Bengal, kirtan, Vaishnava bhakti. Tukaram: Maharashtra, Vitthal at Pandharpur, Abhang poetry. Ravidas (Raidas): Cobbler community, "Man changa to Kathoti mein Ganga." Basavanna (12th c.): Karnataka, Lingayat sect, anti-caste. Sankardev: Assam, Ekasaran dharma. Note: Gurbani in Guru Granth Sahib includes compositions of Kabir Ji, Ravidas Ji, Baba Farid Ji, and Bhagat Namdev Ji.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. Sufi Movement in India</h3><p class="text-slate-300 text-sm leading-relaxed">Mystical Islamic tradition emphasising love and personal devotion to God.<br/><strong>Chishti Order (most popular):</strong> Khwaja Moinuddin Chishti — Ajmer (came with Muhammad Ghori). Bakhtiyar Kaki — Delhi. Baba Farid Ganjshakar — Pakpattan (Punjab), his verses are in Guru Granth Sahib. Nizamuddin Auliya (1238–1325) — Delhi, 'Mahbub-i-Ilahi', guru of Amir Khusrau (who created Qawwali).<br/><strong>Suhrawardi Order:</strong> Bahauddin Zakariya — Multan.<br/><strong>Naqshbandi Order:</strong> Khwaja Baqi Billah and Sheikh Ahmad Sirhindi (Mujaddid Alfsani, 1563–1624) — opposed Akbar's liberal policies, championed Islamic orthodoxy.<br/>Khanqah: Sufi hospice for teaching; Dargah: saint's tomb, open to all faiths; Sama/Qawwali: devotional music perfected by Amir Khusrau.</p></div>`,
    },
    summary: {
      hi: "दिल्ली सल्तनत (1206-1526) में पाँच वंश — गुलाम, खिलजी, तुगलक, सैयद, लोदी। शेर शाह सूरी ने GT Road, रुपया, डाक व्यवस्था दी। अकबर का मनसबदारी, दीन-ए-इलाही, नवरत्न। ताजमहल शाहजहाँ ने बनवाया। भक्ति में कबीर, मीराबाई, चैतन्य; सूफी में चिश्ती, नक्शबंदी प्रमुख।",
      pa: "ਦਿੱਲੀ ਸਲਤਨਤ (1206-1526): ਪੰਜ ਵੰਸ਼। ਸ਼ੇਰ ਸ਼ਾਹ ਸੂਰੀ: GT ਰੋਡ, ਰੁਪਈਆ। ਅਕਬਰ: ਮਨਸਬਦਾਰੀ, ਦੀਨ-ਏ-ਇਲਾਹੀ। ਸ਼ਾਹਜਹਾਂ: ਤਾਜ ਮਹਿਲ। ਭਗਤੀ: ਕਬੀਰ, ਮੀਰਾਬਾਈ। ਸੂਫੀ: ਚਿਸ਼ਤੀ, ਨਕਸ਼ਬੰਦੀ।",
      en: "Delhi Sultanate (1206–1526): 5 dynasties. Sher Shah Suri: GT Road, Rupiya. Akbar: Mansabdari, Din-i-Ilahi. Taj Mahal by Shah Jahan. Aurangzeb: Jizya reimposed, Guru Tegh Bahadur martyrdom. Bhakti: Kabir, Mirabai, Chaitanya. Sufi: Chishti, Naqshbandi orders.",
    },
    keyNotes: {
      hi: [
        "कुतुबुद्दीन ऐबक (1206) — दिल्ली सल्तनत का संस्थापक, कुतुब मीनार की नींव",
        "इल्तुतमिश — पहला सुल्तान जिसे बगदाद के खलीफा की मान्यता मिली",
        "रजिया सुल्तान — भारत की प्रथम मुस्लिम महिला शासक",
        "अलाउद्दीन खिलजी — 4 बाजार नीति, दक्षिण भारत विजय",
        "मुहम्मद बिन तुगलक — राजधानी दौलताबाद स्थानांतरण, प्रतीकात्मक मुद्रा",
        "शेर शाह सूरी — GT Road, रुपया, डाक व्यवस्था, भूमि मापन",
        "पानीपत द्वितीय युद्ध 1556 — बैरम खान vs हेमू (अकबर की जीत)",
        "अकबर का दीन-ए-इलाही 1582 — 18 अनुयायी, बीरबल एकमात्र हिंदू",
        "ताजमहल — 1631-1653, उस्ताद अहमद लाहौरी, सफेद संगमरमर",
        "औरंगजेब ने 1679 में जिजिया पुनः लागू किया",
        "गुरु तेग बहादुर जी की शहादत 1675 — चाँदनी चौक, दिल्ली",
        "बाबा फरीद की वाणी गुरु ग्रंथ साहिब में शामिल",
        "कबीर के ग्रंथ का नाम 'बीजक' है",
        "निजामुद्दीन औलिया के शिष्य — अमीर खुसरो (कव्वाली के जनक)",
        "शेख अहमद सरहिंदी — मुजद्दिद अल्फसानी (नक्शबंदी)",
      ],
      pa: [
        "ਕੁਤਬੁਦੀਨ ਐਬਕ (1206) — ਦਿੱਲੀ ਸਲਤਨਤ ਦਾ ਸੰਸਥਾਪਕ",
        "ਰਜ਼ੀਆ ਸੁਲਤਾਨ — ਭਾਰਤ ਦੀ ਪਹਿਲੀ ਮੁਸਲਿਮ ਮਹਿਲਾ ਸ਼ਾਸਕ",
        "ਸ਼ੇਰ ਸ਼ਾਹ ਸੂਰੀ — GT ਰੋਡ, ਰੁਪਈਆ, ਡਾਕ ਵਿਵਸਥਾ",
        "ਪਾਣੀਪਤ ਦੀ ਦੂਜੀ ਲੜਾਈ 1556 — ਅਕਬਰ ਦੀ ਜਿੱਤ",
        "ਤਾਜ ਮਹਿਲ — ਸ਼ਾਹਜਹਾਂ ਨੇ 1631-1653 ਵਿੱਚ ਬਣਵਾਇਆ",
        "ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹੀਦੀ 1675 — ਚਾਂਦਨੀ ਚੌਕ, ਦਿੱਲੀ",
        "ਬਾਬਾ ਫਰੀਦ ਜੀ ਦੀ ਬਾਣੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਦਰਜ ਹੈ",
        "ਨਿਜ਼ਾਮੁਦੀਨ ਔਲੀਆ ਦੇ ਚੇਲੇ — ਅਮੀਰ ਖੁਸਰੋ (ਕੱਵਾਲੀ)",
      ],
      en: [
        "Qutb-ud-din Aibak (1206) founded Delhi Sultanate; Iltutmish its real consolidator",
        "Razia Sultana — India's first Muslim woman ruler",
        "Alauddin Khalji: 4 market regulation system, Malik Kafur's Deccan campaigns",
        "Muhammad bin Tughlaq: token currency, Devagiri capital transfer, Ibn Battuta visited",
        "Sher Shah Suri: GT Road, Rupiya coin, postal relays, land survey",
        "Battle of Panipat II (1556): Bairam Khan (Akbar) vs Hemu",
        "Akbar's Din-i-Ilahi (1582): 18 followers; Birbal the only Hindu member",
        "Taj Mahal 1631–1653: Ustad Ahmad Lahauri, for Mumtaz Mahal",
        "Aurangzeb reimposed Jizya in 1679 after abolition by Akbar",
        "Guru Tegh Bahadur Ji martyred in 1675 at Chandni Chowk, Delhi",
        "Baba Farid Ganjshakar's verses included in Guru Granth Sahib",
        "Amir Khusrau — disciple of Nizamuddin Auliya, creator of Qawwali",
        "Sheikh Ahmad Sirhindi: Naqshbandi order, 'Mujaddid Alfsani'",
      ],
    },
    flashcards: [
      { q: { hi: "दिल्ली सल्तनत की स्थापना किसने और कब की?", pa: "ਦਿੱਲੀ ਸਲਤਨਤ ਕਿਸਨੇ ਅਤੇ ਕਦੋਂ ਸਥਾਪਿਤ ਕੀਤੀ?", en: "Who founded the Delhi Sultanate and when?" }, a: { hi: "कुतुबुद्दीन ऐबक ने 1206 ई. में।", pa: "ਕੁਤਬੁਦੀਨ ਐਬਕ ਨੇ 1206 ਈ. ਵਿੱਚ।", en: "Qutb-ud-din Aibak in 1206 CE." } },
      { q: { hi: "भारत की प्रथम मुस्लिम महिला शासक कौन थी?", pa: "ਭਾਰਤ ਦੀ ਪਹਿਲੀ ਮੁਸਲਿਮ ਮਹਿਲਾ ਸ਼ਾਸਕ ਕੌਣ ਸੀ?", en: "Who was India's first Muslim woman ruler?" }, a: { hi: "रजिया सुल्तान (1236-1240)", pa: "ਰਜ਼ੀਆ ਸੁਲਤਾਨ (1236-1240)", en: "Razia Sultana (1236–1240)" } },
      { q: { hi: "अलाउद्दीन खिलजी की बाजार नियंत्रण नीति में कितने बाजार थे?", pa: "ਅਲਾਉਦੀਨ ਖਿਲਜੀ ਦੀ ਬਾਜ਼ਾਰ ਨੀਤੀ ਵਿੱਚ ਕਿੰਨੇ ਬਾਜ਼ਾਰ ਸਨ?", en: "How many markets in Alauddin Khalji's market control system?" }, a: { hi: "4 बाजार — अनाज, कपड़ा, मवेशी, सामान्य वस्तु।", pa: "4 ਬਾਜ਼ਾਰ — ਅਨਾਜ, ਕੱਪੜਾ, ਪਸ਼ੂ, ਆਮ ਵਸਤਾਂ।", en: "4 markets — grain, cloth, cattle, miscellaneous goods." } },
      { q: { hi: "मुहम्मद बिन तुगलक ने राजधानी कहाँ स्थानांतरित की?", pa: "ਮੁਹੰਮਦ ਬਿਨ ਤੁਗਲਕ ਨੇ ਰਾਜਧਾਨੀ ਕਿੱਥੇ ਤਬਦੀਲ ਕੀਤੀ?", en: "Where did Muhammad bin Tughlaq shift his capital?" }, a: { hi: "दिल्ली से देवगिरि (दौलताबाद), महाराष्ट्र।", pa: "ਦਿੱਲੀ ਤੋਂ ਦੇਵਗਿਰੀ (ਦੌਲਤਾਬਾਦ), ਮਹਾਰਾਸ਼ਟਰ।", en: "From Delhi to Devagiri (Daulatabad) in Maharashtra." } },
      { q: { hi: "शेर शाह सूरी ने कौन-सा सिक्का चलाया?", pa: "ਸ਼ੇਰ ਸ਼ਾਹ ਸੂਰੀ ਨੇ ਕਿਹੜਾ ਸਿੱਕਾ ਚਲਾਇਆ?", en: "Which coin did Sher Shah Suri introduce?" }, a: { hi: "शुद्ध चाँदी का 'रुपया' और ताँबे का 'दाम'।", pa: "ਸ਼ੁੱਧ ਚਾਂਦੀ ਦਾ 'ਰੁਪਈਆ' ਅਤੇ ਤਾਂਬੇ ਦਾ 'ਦਾਮ'।", en: "Pure silver 'Rupiya' and copper 'Dam'." } },
      { q: { hi: "पानीपत का द्वितीय युद्ध किनके बीच हुआ?", pa: "ਪਾਣੀਪਤ ਦੀ ਦੂਜੀ ਲੜਾਈ ਕਿਸਦੇ ਵਿਚਕਾਰ ਹੋਈ?", en: "Who fought the Second Battle of Panipat?" }, a: { hi: "5 नवम्बर 1556 — अकबर (बैरम खान) vs हेमू (विक्रमादित्य)।", pa: "5 ਨਵੰਬਰ 1556 — ਅਕਬਰ (ਬੈਰਮ ਖਾਂ) ਬਨਾਮ ਹੇਮੂ।", en: "5 Nov 1556 — Akbar (Bairam Khan) vs Hemu Vikramaditya." } },
      { q: { hi: "दीन-ए-इलाही का प्रतिपादन किसने किया? उसके कितने अनुयायी थे?", pa: "ਦੀਨ-ਏ-ਇਲਾਹੀ ਕਿਸਨੇ ਸ਼ੁਰੂ ਕੀਤਾ ਅਤੇ ਇਸ ਦੇ ਕਿੰਨੇ ਮੈਂਬਰ ਸਨ?", en: "Who founded Din-i-Ilahi and how many followers did it have?" }, a: { hi: "अकबर ने 1582 में; केवल 18 अनुयायी। बीरबल एकमात्र हिंदू सदस्य।", pa: "ਅਕਬਰ ਨੇ 1582 ਵਿੱਚ; ਸਿਰਫ 18 ਮੈਂਬਰ। ਬੀਰਬਲ ਇਕਲੌਤਾ ਹਿੰਦੂ।", en: "Akbar in 1582; only 18 followers. Birbal the only Hindu member." } },
      { q: { hi: "ताजमहल का निर्माण किसने, कब और किसकी याद में करवाया?", pa: "ਤਾਜ ਮਹਿਲ ਕਿਸਨੇ, ਕਦੋਂ ਅਤੇ ਕਿਸ ਦੀ ਯਾਦ ਵਿੱਚ ਬਣਵਾਇਆ?", en: "Who built the Taj Mahal, when, and in whose memory?" }, a: { hi: "शाहजहाँ ने 1631-1653 में रानी मुमताज महल की याद में।", pa: "ਸ਼ਾਹਜਹਾਂ ਨੇ 1631-1653 ਵਿੱਚ ਰਾਣੀ ਮੁਮਤਾਜ਼ ਦੀ ਯਾਦ ਵਿੱਚ।", en: "Shah Jahan in 1631–1653 in memory of Mumtaz Mahal." } },
      { q: { hi: "औरंगजेब ने जिजिया कर कब पुनः लागू किया?", pa: "ਔਰੰਗਜ਼ੇਬ ਨੇ ਜਜ਼ੀਆ ਕਦੋਂ ਦੁਬਾਰਾ ਲਾਗੂ ਕੀਤਾ?", en: "When did Aurangzeb reimpose the Jizya?" }, a: { hi: "1679 ई. में (अकबर ने 1564 में समाप्त किया था)।", pa: "1679 ਈ. ਵਿੱਚ (ਅਕਬਰ ਨੇ 1564 ਵਿੱਚ ਖਤਮ ਕੀਤਾ ਸੀ)।", en: "In 1679 CE (Akbar had abolished it in 1564)." } },
      { q: { hi: "कबीर के ग्रंथ का नाम क्या है?", pa: "ਕਬੀਰ ਜੀ ਦੇ ਗ੍ਰੰਥ ਦਾ ਨਾਮ ਕੀ ਹੈ?", en: "What is the name of Kabir's scripture?" }, a: { hi: "बीजक (Bijak) — साखी, सबद, रमैनी में विभाजित।", pa: "ਬੀਜਕ (Bijak) — ਸਾਖੀ, ਸਬਦ, ਰਮੈਨੀ।", en: "Bijak — divided into Sakhi, Sabad, and Ramaini." } },
      { q: { hi: "बाबा फरीद गंजशकर की वाणी किस ग्रंथ में शामिल है?", pa: "ਬਾਬਾ ਫਰੀਦ ਜੀ ਦੀ ਬਾਣੀ ਕਿਸ ਗ੍ਰੰਥ ਵਿੱਚ ਹੈ?", en: "In which scripture is Baba Farid's hymns included?" }, a: { hi: "गुरु ग्रंथ साहिब में।", pa: "ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ।", en: "In the Guru Granth Sahib." } },
      { q: { hi: "अमीर खुसरो किसके शिष्य थे?", pa: "ਅਮੀਰ ਖੁਸਰੋ ਕਿਸ ਦੇ ਚੇਲੇ ਸਨ?", en: "Whose disciple was Amir Khusrau?" }, a: { hi: "निजामुद्दीन औलिया के। उन्होंने कव्वाली, सितार और तबला का विकास किया।", pa: "ਨਿਜ਼ਾਮੁਦੀਨ ਔਲੀਆ ਦੇ। ਉਨ੍ਹਾਂ ਕੱਵਾਲੀ, ਸਿਤਾਰ, ਤਬਲਾ ਵਿਕਸਿਤ ਕੀਤਾ।", en: "Nizamuddin Auliya. He developed Qawwali, Sitar, and Tabla." } },
      { q: { hi: "मनसबदारी व्यवस्था में 'जात' और 'सवार' का क्या अर्थ है?", pa: "ਮਨਸਬਦਾਰੀ ਵਿੱਚ 'ਜ਼ਾਤ' ਅਤੇ 'ਸਵਾਰ' ਦਾ ਕੀ ਮਤਲਬ ਹੈ?", en: "What do 'Zat' and 'Sawar' mean in the Mansabdari system?" }, a: { hi: "जात = व्यक्तिगत पद/वेतन; सवार = घुड़सवार सेना बनाए रखने की जिम्मेदारी।", pa: "ਜ਼ਾਤ = ਨਿੱਜੀ ਦਰਜਾ; ਸਵਾਰ = ਘੋੜਸਵਾਰ ਦਸਤੇ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ।", en: "Zat = personal rank/salary; Sawar = number of horsemen to maintain." } },
      { q: { hi: "शेख अहमद सरहिंदी को किस उपाधि से जाना जाता है?", pa: "ਸ਼ੇਖ ਅਹਿਮਦ ਸਰਹਿੰਦੀ ਨੂੰ ਕਿਹੜੀ ਉਪਾਧੀ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?", en: "By what title is Sheikh Ahmad Sirhindi known?" }, a: { hi: "मुजद्दिद अल्फसानी (एक हजार साल का सुधारक)।", pa: "ਮੁਜੱਦਿਦ ਅਲਫਸਾਨੀ।", en: "Mujaddid Alfsani (Reformer of the Second Millennium)." } },
      { q: { hi: "भक्ति आंदोलन में 'निर्गुण' और 'सगुण' भक्ति में क्या अंतर है?", pa: "ਭਗਤੀ ਵਿੱਚ 'ਨਿਰਗੁਣ' ਅਤੇ 'ਸਗੁਣ' ਭਗਤੀ ਵਿੱਚ ਕੀ ਫ਼ਰਕ ਹੈ?", en: "What is the difference between Nirguna and Saguna bhakti?" }, a: { hi: "निर्गुण = निराकार ईश्वर (कबीर, रविदास); सगुण = साकार ईश्वर (मीराबाई, तुलसीदास)।", pa: "ਨਿਰਗੁਣ = ਨਿਰਾਕਾਰ ਪਰਮਾਤਮਾ (ਕਬੀਰ, ਰਵਿਦਾਸ); ਸਗੁਣ = ਸਾਕਾਰ (ਮੀਰਾਬਾਈ)।", en: "Nirguna = formless God (Kabir, Ravidas); Saguna = God with form (Mirabai, Tulsidas)." } },
      { q: { hi: "ग्रांड ट्रंक रोड की लंबाई क्या है और इसे किसने बनवाया?", pa: "ਗ੍ਰੈਂਡ ਟਰੰਕ ਰੋਡ ਕਿੰਨੀ ਲੰਬੀ ਹੈ ਅਤੇ ਕਿਸਨੇ ਬਣਵਾਈ?", en: "Who built the Grand Trunk Road and how long is it?" }, a: { hi: "शेर शाह सूरी ने; पेशावर से बंगाल तक ~2500 किमी।", pa: "ਸ਼ੇਰ ਸ਼ਾਹ ਸੂਰੀ ਨੇ; ਪੇਸ਼ਾਵਰ ਤੋਂ ਬੰਗਾਲ ਤੱਕ ~2500 ਕਿਮੀ।", en: "Sher Shah Suri; from Peshawar to Bengal, approx. 2500 km." } },
      { q: { hi: "तुकाराम किस देवता के भक्त थे और उनकी रचना का नाम क्या है?", pa: "ਤੁਕਾਰਾਮ ਕਿਸ ਦੇਵਤੇ ਦੇ ਭਗਤ ਸਨ ਅਤੇ ਉਨ੍ਹਾਂ ਦੀ ਰਚਨਾ ਦਾ ਨਾਮ?", en: "Which deity did Tukaram worship and what is his composition called?" }, a: { hi: "पंढरपुर के विट्ठल (विष्णु); 'अभंग' काव्य।", pa: "ਪੰਢਰਪੁਰ ਦੇ ਵਿੱਠਲ (ਵਿਸ਼ਨੂੰ); 'ਅਭੰਗ' ਕਾਵਿ।", en: "Vitthal (Vishnu) at Pandharpur; 'Abhang' poetry." } },
      { q: { hi: "इब्न बतूता किसके दरबार में आए थे?", pa: "ਇਬਨ ਬਤੂਤਾ ਕਿਸ ਦੇ ਦਰਬਾਰ ਵਿੱਚ ਆਇਆ ਸੀ?", en: "Whose court did Ibn Battuta visit?" }, a: { hi: "मुहम्मद बिन तुगलक के। उनकी पुस्तक 'किताब-उर-रहला' (रिहला)।", pa: "ਮੁਹੰਮਦ ਬਿਨ ਤੁਗਲਕ ਦੇ। ਉਨ੍ਹਾਂ ਦੀ ਕਿਤਾਬ 'ਰਿਹਲਾ'।", en: "Muhammad bin Tughlaq. His book is 'Rihla' (The Travels)." } },
      { q: { hi: "अकबर ने जजिया कर कब समाप्त किया?", pa: "ਅਕਬਰ ਨੇ ਜਜ਼ੀਆ ਕਰ ਕਦੋਂ ਖਤਮ ਕੀਤਾ?", en: "When did Akbar abolish the Jizya?" }, a: { hi: "1564 ई. में।", pa: "1564 ਈ. ਵਿੱਚ।", en: "In 1564 CE." } },
      { q: { hi: "मीराबाई कहाँ की राजकुमारी थीं और उनके आराध्य देव कौन थे?", pa: "ਮੀਰਾਬਾਈ ਕਿੱਥੋਂ ਦੀ ਰਾਜਕੁਮਾਰੀ ਸੀ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਇਸ਼ਟਦੇਵ ਕੌਣ ਸਨ?", en: "Where was Mirabai a princess and who was her deity?" }, a: { hi: "मेड़ता (राजस्थान) की राजपूत राजकुमारी; आराध्य — श्री कृष्ण।", pa: "ਮੇੜਤਾ (ਰਾਜਸਥਾਨ) ਦੀ ਰਾਜਪੂਤ ਰਾਜਕੁਮਾਰੀ; ਇਸ਼ਟਦੇਵ — ਸ਼੍ਰੀ ਕ੍ਰਿਸ਼ਨ।", en: "Rajput princess of Merta, Rajasthan; deity — Lord Krishna." } },
    ],
    videos: [
      { title: "Delhi Sultanate Complete | Medieval India", channel: "StudyIQ IAS", youtubeId: "DhilliSalt1206", language: "hi", views: "2.1M", duration: "52:30" },
      { title: "Mughal Empire Akbar to Aurangzeb", channel: "History With Mani", youtubeId: "MughalEmpire556", language: "hi", views: "1.8M", duration: "48:20" },
      { title: "Bhakti & Sufi Movements Explained", channel: "Exampur Official", youtubeId: "BhaktiSufi2024", language: "hi", views: "900K", duration: "35:15" },
    ],
    bookRefs: [
      { title: "NCERT Medieval India — Our Pasts II & III (Class 7 & 8)", author: "NCERT", chapters: "Ch. 2–9" },
      { title: "Medieval India — A Textbook for Undergraduates", author: "Satish Chandra", chapters: "All chapters" },
    ],
    documents: [
      { title: "NCERT Our Pasts II — Class 7", url: "https://ncert.nic.in/textbook.php?ghss2=0-10", type: "pdf", language: "English / Punjabi / Hindi" },
      { title: "ERD Punjab Master Cadre SST Syllabus", url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf", type: "pdf", language: "English / Punjabi / Hindi" },
    ],
    syllabusReference: {
      title: "Punjab Master Cadre Social Science syllabus, 2022",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      examName: "Punjab Master Cadre SST",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },

  // ─────────────────────────────────────────────────────────
  // 2. MODERN WORLD HISTORY — Russian Revolution, Cold War, UNO
  // ─────────────────────────────────────────────────────────
  "sst-world-history-modern": {
    id: "sst-world-history-modern",
    topicId: "sst-world-history-modern",
    subjectId: "social-science",
    category: "history",
    title: {
      hi: "आधुनिक विश्व इतिहास — रूसी क्रांति, शीत युद्ध, संयुक्त राष्ट्र संघ",
      pa: "ਆਧੁਨਿਕ ਵਿਸ਼ਵ ਇਤਿਹਾਸ — ਰੂਸੀ ਕ੍ਰਾਂਤੀ, ਸ਼ੀਤ ਯੁੱਧ, ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਸੰਘ",
      en: "Modern World History — Russian Revolution, Cold War & United Nations",
    },
    examRelevance: "Punjab Master Cadre (6-8 Qs), CTET, SSC CGL, REET L2",
    estimatedTime: "40 minutes",
    content: {
      hi: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. रूसी क्रांति 1917 — पृष्ठभूमि</h3><p class="text-slate-300 text-sm leading-relaxed">20वीं सदी की सबसे महत्त्वपूर्ण क्रांति जिसने दुनिया का नक्शा बदल दिया।<br/><strong>पृष्ठभूमि:</strong> रूसो-जापानी युद्ध 1905 में रूस की हार। 'ब्लडी संडे' 22 जनवरी 1905 — ज़ार के महल की ओर जाते मजदूरों पर गोलीबारी, सैकड़ों मारे गए। ज़ार निकोलस II का निरंकुश शासन। प्रथम विश्वयुद्ध में रूस की भारी क्षति। खाद्यान्न संकट और औद्योगिक मजदूरों की बदहाली।<br/><strong>फरवरी क्रांति 1917:</strong> ज़ार निकोलस II को पद छोड़ना पड़ा। अस्थायी सरकार (Provisional Government) का गठन।<br/><strong>अक्टूबर/बोल्शेविक क्रांति 1917:</strong> लेनिन और लियोन ट्रॉट्स्की के नेतृत्व में बोल्शेविक पार्टी ने अस्थायी सरकार को उखाड़ फेंका। नारा: "शांति, रोटी, जमीन" (Peace, Bread, Land)।<br/><strong>ब्रेस्ट-लितोव्स्क संधि 1918:</strong> जर्मनी से अलग शांति, प्रथम विश्वयुद्ध से रूस बाहर।<br/><strong>USSR का गठन 1922:</strong> Union of Soviet Socialist Republics — पहला समाजवादी राज्य।<br/><strong>स्टालिन के पंचवर्षीय योजनाएँ:</strong> भारी उद्योग, सामूहिक खेती (Collectivisation), 1920-30 के दशक में तेज आर्थिक वृद्धि।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. शीत युद्ध (1947–1991)</h3><p class="text-slate-300 text-sm leading-relaxed">द्वितीय विश्वयुद्ध के बाद USA और USSR के बीच वैचारिक, राजनीतिक और सैन्य प्रतिस्पर्धा (बिना प्रत्यक्ष युद्ध के)।<br/><strong>ट्रूमन सिद्धांत 1947:</strong> साम्यवाद रोकने का अमेरिकी संकल्प। मार्शल योजना — पश्चिमी यूरोप के पुनर्निर्माण के लिए अमेरिकी सहायता।<br/><strong>NATO 1949:</strong> North Atlantic Treaty Organisation — पश्चिमी सैन्य गठबंधन (12 संस्थापक देश)।<br/><strong>वारसा पैक्ट 1955:</strong> सोवियत नेतृत्व में पूर्वी यूरोप का सैन्य गठबंधन।<br/><strong>कोरियाई युद्ध 1950-53:</strong> USA vs USSR प्रॉक्सी।<br/><strong>क्यूबा मिसाइल संकट 1962:</strong> USSR ने क्यूबा में परमाणु मिसाइल तैनात कीं। केनेडी और ख्रुश्चेव की वार्ता से टला।<br/><strong>वियतनाम युद्ध 1955-1975:</strong> USA की सबसे बड़ी पराजय।<br/><strong>बर्लिन की दीवार 1961-1989:</strong> पूर्वी vs पश्चिमी जर्मनी का प्रतीक।<br/><strong>ग्लासनोस्ट (खुलापन) और पेरेस्त्रोइका (पुनर्गठन):</strong> गोर्बाचेव की नीतियाँ।<br/><strong>USSR का विघटन 1991:</strong> 15 स्वतंत्र देश।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. संयुक्त राष्ट्र संघ (UNO)</h3><p class="text-slate-300 text-sm leading-relaxed">स्थापना: 24 अक्टूबर 1945, सैन फ्रांसिस्को। 51 संस्थापक सदस्य; वर्तमान में 193 सदस्य देश। मुख्यालय: न्यूयॉर्क (USA)। संयुक्त राष्ट्र दिवस: 24 अक्टूबर।<br/><strong>6 प्रमुख अंग:</strong><br/>1. <strong>महासभा (General Assembly):</strong> सभी 193 सदस्य — 1 देश 1 वोट। सत्र सितंबर में।<br/>2. <strong>सुरक्षा परिषद (Security Council):</strong> 15 सदस्य (5 स्थायी + 10 अस्थायी)। स्थायी पाँच (P5): USA, UK, France, Russia, China। वीटो शक्ति।<br/>3. <strong>आर्थिक-सामाजिक परिषद (ECOSOC):</strong> 54 सदस्य।<br/>4. <strong>न्यास परिषद (Trusteeship Council):</strong> निष्क्रिय 1994 से।<br/>5. <strong>अंतर्राष्ट्रीय न्यायालय (ICJ):</strong> हेग (नीदरलैंड्स)।<br/>6. <strong>सचिवालय (Secretariat):</strong> महासचिव — वर्तमान: एंतोनियो गुतेरेस (पुर्तगाल, 2017 से)।<br/><strong>UN एजेंसियाँ:</strong> UNESCO (पेरिस), UNICEF (न्यूयॉर्क), WHO (जिनेवा), FAO (रोम), ILO (जिनेवा), IMF + World Bank (Bretton Woods 1944, Washington DC)।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. NAM और चीन क्रांति</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>गुटनिरपेक्ष आंदोलन (NAM):</strong> बांडुंग सम्मेलन 1955 (इंडोनेशिया, 29 एशियाई-अफ्रीकी देश)। 1961 में बेलग्रेड में पहला NAM शिखर सम्मेलन। संस्थापक: नेहरू (भारत), नासिर (मिस्र), टीटो (यूगोस्लाविया), सुकार्नो (इंडोनेशिया), एनक्रूमाह (घाना)। पंचशील सिद्धांत 1954 — नेहरू-झोउ एनलाई।<br/><strong>चीनी क्रांति 1949:</strong> माओत्से-तुंग के नेतृत्व में CPC (Communist Party of China) ने चियांग काई-शेक को पराजित किया। 1 अक्टूबर 1949 — चीन जनवादी गणतंत्र की स्थापना। चियांग ताइवान गए।<br/><strong>शीत युद्ध का अंत:</strong> बर्लिन दीवार गिरी 9 नवम्बर 1989। जर्मनी एकीकरण 1990। USSR विघटित 25 दिसम्बर 1991। रूस उत्तराधिकारी राज्य।</p></div>`,

      pa: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. ਰੂਸੀ ਕ੍ਰਾਂਤੀ 1917</h3><p class="text-slate-300 text-sm leading-relaxed">ਫਰਵਰੀ ਕ੍ਰਾਂਤੀ: ਜ਼ਾਰ ਨਿਕੋਲਸ II ਨੂੰ ਅਸਤੀਫਾ ਦੇਣਾ ਪਿਆ। ਅਕਤੂਬਰ/ਬੋਲਸ਼ੇਵਿਕ ਕ੍ਰਾਂਤੀ: ਲੈਨਿਨ ਦੀ ਅਗਵਾਈ, ਨਾਅਰਾ "ਸ਼ਾਂਤੀ, ਰੋਟੀ, ਜ਼ਮੀਨ"। USSR ਗਠਨ 1922। ਸਟਾਲਿਨ ਦੀਆਂ ਪੰਜ ਸਾਲਾ ਯੋਜਨਾਵਾਂ।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. ਸ਼ੀਤ ਯੁੱਧ ਅਤੇ UNO</h3><p class="text-slate-300 text-sm leading-relaxed">ਸ਼ੀਤ ਯੁੱਧ (1947-1991): ਅਮਰੀਕਾ ਬਨਾਮ ਸੋਵੀਅਤ ਸੰਘ। NATO 1949, ਵਾਰਸਾ ਪੈਕਟ 1955, ਕਿਊਬਾ ਮਿਜ਼ਾਈਲ ਸੰਕਟ 1962, ਬਰਲਿਨ ਦੀਵਾਰ 1961-1989। USSR ਭੰਗ 1991। ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਸੰਘ: 24 ਅਕਤੂਬਰ 1945, ਸੈਨ ਫਰਾਂਸਿਸਕੋ। 193 ਮੈਂਬਰ। ਸੁਰੱਖਿਆ ਪਰਿਸ਼ਦ: 5 ਸਥਾਈ ਮੈਂਬਰ (P5) — ਅਮਰੀਕਾ, ਬ੍ਰਿਟੇਨ, ਫਰਾਂਸ, ਰੂਸ, ਚੀਨ। ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ: ਹੇਗ।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. NAM ਅਤੇ ਪੰਚਸ਼ੀਲ</h3><p class="text-slate-300 text-sm leading-relaxed">ਗੁੱਟ ਨਿਰਪੱਖ ਅੰਦੋਲਨ (NAM): ਬਾਂਡੁੰਗ ਸੰਮੇਲਨ 1955, ਬੇਲਗ੍ਰੇਡ 1961 ਵਿੱਚ ਪਹਿਲਾ ਸਿਖਰ ਸੰਮੇਲਨ। ਨਹਿਰੂ, ਟੀਟੋ, ਨਾਸਿਰ। ਪੰਚਸ਼ੀਲ 1954 — ਨਹਿਰੂ-ਝੋਉ ਏਨਲਾਈ। ਚੀਨੀ ਕ੍ਰਾਂਤੀ 1949: ਮਾਓਤਸੇ ਤੁੰਗ, CPC, ਚੀਨੀ ਜਨਵਾਦੀ ਗਣਰਾਜ।</p></div>`,

      en: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. Russian Revolution 1917</h3><p class="text-slate-300 text-sm leading-relaxed">Background: Russo-Japanese War 1905 defeat; 'Bloody Sunday' 22 Jan 1905 (workers shot near Winter Palace); WWI losses; food crisis. February Revolution 1917: Tsar Nicholas II abdicates; Provisional Government formed. October/Bolshevik Revolution 1917: Lenin and Trotsky led Bolshevik Party overthrew Provisional Government. Slogan: "Peace, Bread, Land." Treaty of Brest-Litovsk 1918 — Russia exits WWI. USSR formed 1922 — world's first socialist state. Stalin: Five-Year Plans for industrialisation, Collectivisation of agriculture.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. Cold War (1947–1991)</h3><p class="text-slate-300 text-sm leading-relaxed">Ideological rivalry (not direct war) between USA (capitalism) and USSR (communism). Truman Doctrine 1947 — contain communism. Marshall Plan — US aid to rebuild Western Europe. NATO 1949 (Western military alliance, 12 founding members). Warsaw Pact 1955 (Soviet-led Eastern alliance). Korean War 1950–53 (proxy conflict). Cuban Missile Crisis Oct 1962 — USSR placed nuclear missiles in Cuba; Kennedy vs Khrushchev; resolved diplomatically. Vietnam War 1955–75 — US military failure. Berlin Wall 1961–1989 (symbol of Iron Curtain). Glasnost (openness) and Perestroika (restructuring) by Gorbachev. Berlin Wall fell 9 Nov 1989. German reunification 1990. USSR dissolved 25 Dec 1991 → 15 independent states.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. United Nations Organization (UNO)</h3><p class="text-slate-300 text-sm leading-relaxed">Founded 24 October 1945 (UN Day), San Francisco. 51 founding members; now 193 members. HQ: New York. 6 principal organs: (1) General Assembly — all 193 members, 1 country 1 vote; (2) Security Council — 15 members (P5 permanent: USA, UK, France, Russia, China — each has veto; 10 non-permanent elected for 2-year terms); (3) ECOSOC — 54 members; (4) Trusteeship Council — inactive since 1994; (5) International Court of Justice — The Hague, Netherlands; (6) Secretariat — Secretary-General: António Guterres (Portugal, since 2017). Key agencies: UNESCO (Paris), UNICEF (New York), WHO (Geneva), FAO (Rome), ILO (Geneva), IMF & World Bank (Washington DC, Bretton Woods Conference 1944).</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. NAM, Panchsheel & Chinese Revolution</h3><p class="text-slate-300 text-sm leading-relaxed">Non-Aligned Movement (NAM): Bandung Conference 1955 (Indonesia, 29 Asian-African nations). First NAM Summit — Belgrade 1961. Founders: Nehru (India), Nasser (Egypt), Tito (Yugoslavia), Sukarno (Indonesia), Nkrumah (Ghana). Panchsheel (Five Principles of Peaceful Coexistence) signed 1954 between Nehru and Zhou Enlai. Chinese Revolution 1949: Mao Zedong's CPC defeated Chiang Kai-shek's KMT. People's Republic of China proclaimed 1 October 1949. Chiang retreated to Taiwan.</p></div>`,
    },
    summary: {
      hi: "रूसी क्रांति 1917 — फरवरी (ज़ार पतन) + अक्टूबर (लेनिन, बोल्शेविक)। USSR 1922। शीत युद्ध 1947-1991 — NATO, वारसा पैक्ट, क्यूबा संकट। UNO — 24 अक्टूबर 1945, 193 सदस्य, 5 P5 वीटो। NAM — बांडुंग 1955, नेहरू-टीटो-नासिर।",
      pa: "ਰੂਸੀ ਕ੍ਰਾਂਤੀ 1917 — ਲੈਨਿਨ, ਬੋਲਸ਼ੇਵਿਕ। USSR 1922। ਸ਼ੀਤ ਯੁੱਧ 1947-1991। UNO — 24 ਅਕਤੂਬਰ 1945। NAM — 1955।",
      en: "Russian Revolution 1917: February (Tsar abdication) + October (Lenin, Bolsheviks). USSR 1922. Cold War 1947–1991: NATO vs Warsaw Pact. UNO founded 24 Oct 1945, 193 members, P5 veto. NAM Bandung 1955 — Nehru, Tito, Nasser.",
    },
    keyNotes: {
      hi: [
        "ब्लडी संडे — 22 जनवरी 1905, ज़ार के महल के बाहर मजदूरों पर गोलीबारी",
        "बोल्शेविक क्रांति का नेतृत्व लेनिन ने किया; नारा 'शांति, रोटी, जमीन'",
        "USSR का गठन 1922 — विश्व का पहला समाजवादी राज्य",
        "NATO 1949 — पश्चिमी सैन्य गठबंधन; वारसा पैक्ट 1955 — सोवियत गठबंधन",
        "क्यूबा मिसाइल संकट 1962 — तृतीय विश्वयुद्ध के करीब",
        "UNO की स्थापना 24 अक्टूबर 1945 — सैन फ्रांसिस्को",
        "सुरक्षा परिषद के P5: USA, UK, France, Russia, China — वीटो शक्ति",
        "ICJ का मुख्यालय हेग (नीदरलैंड्स) में है",
        "बर्लिन दीवार गिरी 9 नवम्बर 1989 → जर्मनी एकीकरण 1990",
        "USSR विघटित 25 दिसम्बर 1991 → 15 स्वतंत्र देश",
        "NAM — बांडुंग 1955, बेलग्रेड 1961; नेहरू-नासिर-टीटो",
        "पंचशील 1954 — नेहरू और झोउ एनलाई के बीच",
      ],
      pa: [
        "ਬੋਲਸ਼ੇਵਿਕ ਕ੍ਰਾਂਤੀ — ਲੈਨਿਨ, ਨਾਅਰਾ 'ਸ਼ਾਂਤੀ, ਰੋਟੀ, ਜ਼ਮੀਨ'",
        "USSR ਗਠਨ 1922 — ਦੁਨੀਆ ਦਾ ਪਹਿਲਾ ਸਮਾਜਵਾਦੀ ਰਾਜ",
        "UNO ਸਥਾਪਨਾ 24 ਅਕਤੂਬਰ 1945, ਸੈਨ ਫਰਾਂਸਿਸਕੋ",
        "ਸੁਰੱਖਿਆ ਪਰਿਸ਼ਦ P5: ਅਮਰੀਕਾ, ਬ੍ਰਿਟੇਨ, ਫਰਾਂਸ, ਰੂਸ, ਚੀਨ — ਵੀਟੋ",
        "ਬਰਲਿਨ ਦੀਵਾਰ 9 ਨਵੰਬਰ 1989 ਨੂੰ ਢਾਹੀ ਗਈ",
        "NAM ਬਾਂਡੁੰਗ 1955 — ਨਹਿਰੂ, ਟੀਟੋ, ਨਾਸਿਰ",
      ],
      en: [
        "Bloody Sunday: 22 Jan 1905 — workers shot outside Tsar's Winter Palace",
        "Bolshevik Revolution led by Lenin; slogan 'Peace, Bread, Land'",
        "USSR formed 1922 — world's first socialist state",
        "NATO 1949 (Western); Warsaw Pact 1955 (Eastern)",
        "Cuban Missile Crisis Oct 1962 — closest the world came to nuclear war",
        "UNO founded 24 October 1945, San Francisco",
        "UN Security Council P5 (veto): USA, UK, France, Russia, China",
        "ICJ is located at The Hague, Netherlands",
        "Berlin Wall fell 9 November 1989; German reunification 1990",
        "USSR dissolved 25 December 1991 → 15 independent states",
        "NAM: Bandung 1955; Belgrade Summit 1961; Nehru-Tito-Nasser",
        "Panchsheel 1954 — Nehru and Zhou Enlai (5 principles of coexistence)",
      ],
    },
    flashcards: [
      { q: { hi: "रूसी क्रांति में 'ब्लडी संडे' कब और कहाँ हुई?", pa: "ਰੂਸੀ ਕ੍ਰਾਂਤੀ ਵਿੱਚ 'ਬਲੱਡੀ ਸੰਡੇ' ਕਦੋਂ ਅਤੇ ਕਿੱਥੇ ਹੋਈ?", en: "When and where did 'Bloody Sunday' occur in Russian Revolution?" }, a: { hi: "22 जनवरी 1905, ज़ार के शीतकालीन महल (Winter Palace), सेंट पीटर्सबर्ग।", pa: "22 ਜਨਵਰੀ 1905, ਜ਼ਾਰ ਦਾ ਵਿੰਟਰ ਪੈਲੇਸ, ਸੇਂਟ ਪੀਟਰਜ਼ਬਰਗ।", en: "22 January 1905, outside Tsar's Winter Palace, St. Petersburg." } },
      { q: { hi: "बोल्शेविक क्रांति का नारा क्या था?", pa: "ਬੋਲਸ਼ੇਵਿਕ ਕ੍ਰਾਂਤੀ ਦਾ ਨਾਅਰਾ ਕੀ ਸੀ?", en: "What was the slogan of the Bolshevik Revolution?" }, a: { hi: "शांति, रोटी, जमीन (Peace, Bread, Land)।", pa: "ਸ਼ਾਂਤੀ, ਰੋਟੀ, ਜ਼ਮੀਨ (Peace, Bread, Land)।", en: "Peace, Bread, Land." } },
      { q: { hi: "UNO की स्थापना कब और कहाँ हुई?", pa: "UNO ਦੀ ਸਥਾਪਨਾ ਕਦੋਂ ਅਤੇ ਕਿੱਥੇ ਹੋਈ?", en: "When and where was the UNO founded?" }, a: { hi: "24 अक्टूबर 1945, सैन फ्रांसिस्को। 51 संस्थापक सदस्य।", pa: "24 ਅਕਤੂਬਰ 1945, ਸੈਨ ਫਰਾਂਸਿਸਕੋ। 51 ਸੰਸਥਾਪਕ ਮੈਂਬਰ।", en: "24 October 1945, San Francisco. 51 founding members." } },
      { q: { hi: "UN सुरक्षा परिषद के P5 (स्थायी) सदस्य कौन हैं?", pa: "UN ਸੁਰੱਖਿਆ ਪਰਿਸ਼ਦ ਦੇ P5 ਮੈਂਬਰ ਕੌਣ ਹਨ?", en: "Who are the P5 (permanent) members of the UN Security Council?" }, a: { hi: "USA, UK, France, Russia, China — सभी के पास वीटो शक्ति।", pa: "USA, UK, France, Russia, China — ਸਾਰਿਆਂ ਕੋਲ ਵੀਟੋ ਸ਼ਕਤੀ।", en: "USA, UK, France, Russia, China — all with veto power." } },
      { q: { hi: "NATO की स्थापना कब हुई?", pa: "NATO ਦੀ ਸਥਾਪਨਾ ਕਦੋਂ ਹੋਈ?", en: "When was NATO founded?" }, a: { hi: "1949 में, 12 संस्थापक सदस्य देश।", pa: "1949 ਵਿੱਚ, 12 ਸੰਸਥਾਪਕ ਮੈਂਬਰ।", en: "1949, with 12 founding member states." } },
      { q: { hi: "बर्लिन की दीवार कब गिरी और इसका क्या महत्त्व है?", pa: "ਬਰਲਿਨ ਦੀਵਾਰ ਕਦੋਂ ਢਾਹੀ ਗਈ?", en: "When did the Berlin Wall fall and why is it significant?" }, a: { hi: "9 नवम्बर 1989। शीत युद्ध के अंत का प्रतीक, जर्मनी 1990 में एकीकृत।", pa: "9 ਨਵੰਬਰ 1989। ਸ਼ੀਤ ਯੁੱਧ ਦੇ ਅੰਤ ਦਾ ਚਿੰਨ੍ਹ।", en: "9 November 1989. Symbol of Cold War's end; Germany reunified 1990." } },
      { q: { hi: "NAM का पहला शिखर सम्मेलन कहाँ और कब हुआ?", pa: "NAM ਦਾ ਪਹਿਲਾ ਸਿਖਰ ਸੰਮੇਲਨ ਕਿੱਥੇ ਅਤੇ ਕਦੋਂ ਹੋਇਆ?", en: "Where and when was the first NAM Summit held?" }, a: { hi: "1961 में बेलग्रेड (यूगोस्लाविया) में।", pa: "1961 ਵਿੱਚ ਬੇਲਗ੍ਰੇਡ (ਯੂਗੋਸਲਾਵੀਆ) ਵਿੱਚ।", en: "1961 in Belgrade, Yugoslavia." } },
      { q: { hi: "ICJ का मुख्यालय कहाँ है?", pa: "ICJ ਦਾ ਮੁੱਖ ਦਫਤਰ ਕਿੱਥੇ ਹੈ?", en: "Where is the ICJ headquartered?" }, a: { hi: "हेग (नीदरलैंड्स) में।", pa: "ਹੇਗ (ਨੀਦਰਲੈਂਡਸ) ਵਿੱਚ।", en: "The Hague, Netherlands." } },
      { q: { hi: "पंचशील के 5 सिद्धांत किनके बीच 1954 में हस्ताक्षरित हुए?", pa: "ਪੰਚਸ਼ੀਲ 5 ਸਿਧਾਂਤ 1954 ਵਿੱਚ ਕਿਸਦੇ ਵਿਚਕਾਰ ਦਸਤਖਤ ਹੋਏ?", en: "Panchsheel was signed in 1954 between whom?" }, a: { hi: "भारत के PM नेहरू और चीन के PM झोउ एनलाई।", pa: "ਭਾਰਤ ਦੇ PM ਨਹਿਰੂ ਅਤੇ ਚੀਨ ਦੇ PM ਝੋਉ ਏਨਲਾਈ।", en: "India's PM Nehru and China's PM Zhou Enlai." } },
      { q: { hi: "USSR कब और कितने देशों में विघटित हुआ?", pa: "USSR ਕਦੋਂ ਅਤੇ ਕਿੰਨੇ ਦੇਸ਼ਾਂ ਵਿੱਚ ਟੁੱਟਿਆ?", en: "When did the USSR dissolve and into how many countries?" }, a: { hi: "25 दिसम्बर 1991 — 15 स्वतंत्र देश।", pa: "25 ਦਸੰਬਰ 1991 — 15 ਸੁਤੰਤਰ ਦੇਸ਼।", en: "25 December 1991 — 15 independent states." } },
    ],
    videos: [
      { title: "Russian Revolution 1917 Complete", channel: "StudyIQ Education", youtubeId: "RussianRev1917", language: "hi", views: "1.5M", duration: "44:10" },
      { title: "UNO Structure and Functions", channel: "Exampur Official", youtubeId: "UNOStructure24", language: "hi", views: "800K", duration: "30:00" },
      { title: "Cold War Explained Simply", channel: "History Wallah", youtubeId: "ColdWarExplain", language: "hi", views: "1.1M", duration: "38:45" },
    ],
    bookRefs: [
      { title: "NCERT World History (Class 10 — India and the Contemporary World)", author: "NCERT", chapters: "Ch. 1-4" },
      { title: "Arjun Dev — Contemporary World History", author: "NCERT College Book", chapters: "Part I & II" },
    ],
    documents: [
      { title: "NCERT India and the Contemporary World II — Class 10", url: "https://ncert.nic.in/textbook.php?jhss2=0-5", type: "pdf", language: "English / Punjabi / Hindi" },
      { title: "ERD Punjab Master Cadre SST Syllabus", url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf", type: "pdf", language: "English / Punjabi / Hindi" },
    ],
    syllabusReference: {
      title: "Punjab Master Cadre Social Science syllabus, 2022",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      examName: "Punjab Master Cadre SST",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },

  // ─────────────────────────────────────────────────────────
  // 3. INDIA GEOGRAPHY — Soils, Climate, Rivers, Agriculture
  // ─────────────────────────────────────────────────────────
  "sst-india-geography": {
    id: "sst-india-geography",
    topicId: "sst-india-geography",
    subjectId: "social-science",
    category: "geography",
    title: {
      hi: "भारत का भूगोल — मिट्टी, जलवायु, नदी तंत्र और कृषि",
      pa: "ਭਾਰਤ ਦਾ ਭੂਗੋਲ — ਮਿੱਟੀ, ਜਲਵਾਯੂ, ਦਰਿਆ ਪ੍ਰਣਾਲੀ ਅਤੇ ਖੇਤੀ",
      en: "Geography of India — Soils, Climate, River Systems and Agriculture",
    },
    examRelevance: "Punjab Master Cadre (8-10 Qs), ETT, REET L2, CTET Paper 2",
    estimatedTime: "50 minutes",
    content: {
      hi: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. भारत की मिट्टियाँ — 8 प्रकार</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>1. जलोढ़ मिट्टी (Alluvial Soil):</strong> भारत का ~43% — उत्तरी मैदान, तटीय क्षेत्र। गेहूँ, धान, गन्ना, दलहन के लिए सर्वोत्तम। दो प्रकार: भांगर (पुरानी, कंकड़युक्त, ऊँची भूमि) और खादर (नई, अधिक उपजाऊ, बाढ़ के मैदान)।<br/><strong>2. काली मिट्टी (Regur/Black Cotton Soil):</strong> दक्कन पठार — महाराष्ट्र, गुजरात, MP, AP। बेसाल्टिक लावा से। कपास के लिए उत्तम। स्वयं जुताई (Self-ploughing) — सूखने पर दरारें पड़ती हैं। कैल्शियम, मैग्नेशियम और आयरन युक्त।<br/><strong>3. लाल और पीली मिट्टी:</strong> तमिलनाडु, AP, झारखंड। लोहे के ऑक्साइड से लाल रंग। कम उपजाऊ, रागी, बाजरे के लिए।<br/><strong>4. लैटेराइट मिट्टी:</strong> भारी वर्षा वाले क्षेत्र — केरल, कर्नाटक, असम। लीचिंग से पोषक तत्त्व बह जाते हैं। चाय, कॉफी, काजू के लिए।<br/><strong>5. मरुस्थलीय/शुष्क मिट्टी:</strong> राजस्थान, पंजाब के अर्ध-शुष्क क्षेत्र। रेतीली, कम कार्बनिक पदार्थ। सिंचाई से बाजरा।<br/><strong>6. लवणीय/क्षारीय मिट्टी (Saline/Alkaline):</strong> पंजाब, UP — 'उसर' (alkali) और 'रेह' (saline)। जल-भराव और सिंचाई से। सुधार: जिप्सम, सिल्ट। CAZRI (Jodhpur) — शोध।<br/><strong>7. पीटीय और दलदली मिट्टी:</strong> केरल, बिहार, उत्तराखंड। कार्बनिक पदार्थ अधिक।<br/><strong>8. वन मिट्टी:</strong> हिमालयी ढलानें।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. भारत की जलवायु — 4 ऋतुएँ और मानसून</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>4 ऋतुएँ:</strong><br/>• शीत ऋतु (Dec-Feb): उच्च दाब, पश्चिमी विक्षोभ (Western Disturbances) → पंजाब में रबी फसल के लिए महत्त्वपूर्ण।<br/>• ग्रीष्म ऋतु (Mar-May): 'लू' — गर्म शुष्क हवा। आम्र वर्षा (Mango Showers) — केरल।<br/>• दक्षिण-पश्चिम मानसून (June-Sep): भारत की 75% वार्षिक वर्षा। अरब सागर शाखा (Kerala 1 June → Gujarat) + बंगाल की खाड़ी शाखा (Bay of Bengal → NE India → Ganga Plains)।<br/>• लौटता मानसून/पूर्वोत्तर मानसून (Oct-Nov): तमिलनाडु तट पर अधिक वर्षा।<br/><strong>मानसून तंत्र:</strong> ITCZ (अंतःकटिबंधीय अभिसरण क्षेत्र) का उत्तर की ओर खिसकना। भूमि और समुद्र का विभेदक तापमान। 'Break Monsoon' घटना।<br/><strong>El Niño:</strong> प्रशांत महासागर में गर्म जलधारा → भारत में सूखा।<br/><strong>Koppen वर्गीकरण:</strong> भारत में Aw (उष्णकटिबंधीय), BW (शुष्क), Cs (भूमध्यसागरीय — लागू नहीं), Cf, ET (टुंड्रा — हिमालय) जलवायु।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. भारत के प्रमुख नदी तंत्र</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>सिंधु तंत्र:</strong> सिंधु (मानसरोवर, तिब्बत) + सहायक: झेलम, चेनाब, रावी, ब्यास, सतलुज (पंजाब की 5 नदियाँ)। सिंधु जल संधि 1960 — भारत-पाकिस्तान (World Bank मध्यस्थता)। रावी, ब्यास, सतलुज → भारत; सिंधु, झेलम, चेनाब → पाकिस्तान।<br/><strong>गंगा तंत्र:</strong> गंगा (गंगोत्री, 2525 किमी)। बाईं सहायक: यमुना, रामगंगा, घाघरा, गंडक, कोसी ('बिहार का शोक')। दाईं सहायक: चम्बल, बेतवा, सोन। गंगा-ब्रह्मपुत्र डेल्टा — सुंदरवन (विश्व का सबसे बड़ा)।<br/><strong>ब्रह्मपुत्र:</strong> मानसरोवर (Tibetan: Tsangpo) → अरुणाचल में 'दिहांग' → असम में 'ब्रह्मपुत्र'। माजुली — विश्व का सबसे बड़ा नदी द्वीप।<br/><strong>प्रायद्वीपीय नदियाँ:</strong><br/>पश्चिम-प्रवाही (भ्रंश घाटी में): नर्मदा (अमरकंटक, भेड़ाघाट), ताप्ती।<br/>पूर्व-प्रवाही: गोदावरी (दक्षिण गंगा, महाराष्ट्र), कृष्णा, कावेरी, महानदी।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. प्राकृतिक वनस्पति और हरित क्रांति</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>वनस्पति प्रकार:</strong><br/>• उष्णकटिबंधीय सदाबहार (>200cm वर्षा): असम, NE, अंडमान — 'Silent Valley' (केरल)।<br/>• उष्णकटिबंधीय पर्णपाती: सागवान (Teak), साल — सबसे महत्त्वपूर्ण वन। MP, छत्तीसगढ़, ओडिशा।<br/>• उष्णकटिबंधीय कंटीली: राजस्थान, पंजाब — बबूल, कैक्टस।<br/>• मैंग्रोव: सुंदरवन (सबसे बड़ा), भितरकनिका — बाघ संरक्षण।<br/><strong>हरित क्रांति (1966-67):</strong> नॉर्मन बोरलॉग (मेक्सिको — गेहूँ की HYV), M.S. स्वामीनाथन (भारत में नेतृत्व)। पंजाब-हरियाणा-UP में केंद्रित। गेहूँ उत्पादन: 11 मिलियन टन (1960) → 55 मिलियन टन (1990)। 'द्वितीय हरित क्रांति' — इंद्रधनुष क्रांति (दलहन, तिलहन)। पंजाब में समस्याएँ: भूजल-स्तर गिरावट, भूमि क्षरण, किसान कर्ज।<br/><strong>फसल वर्गीकरण:</strong><br/>खरीफ (जून-जुलाई बुवाई, Oct कटाई): चावल, कपास, गन्ना, बाजरा, मूंगफली।<br/>रबी (Oct-Nov बुवाई, Mar-Apr कटाई): गेहूँ, जौ, चना, सरसों।<br/>जायद (March-June): खरबूजा, तरबूज, खीरा।</p></div>`,

      pa: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. ਭਾਰਤ ਦੀਆਂ ਮਿੱਟੀਆਂ</h3><p class="text-slate-300 text-sm leading-relaxed">ਜਲੋਢ ਮਿੱਟੀ (43%): ਉੱਤਰੀ ਮੈਦਾਨ, ਭਾਂਗਰ (ਪੁਰਾਣੀ) ਅਤੇ ਖਾਦਰ (ਨਵੀਂ)। ਕਾਲੀ/ਰੇਗੂਰ ਮਿੱਟੀ: ਦੱਕਣ ਪਠਾਰ, ਕਪਾਹ ਲਈ ਉੱਤਮ, ਸਵੈ-ਵਾਹੀ। ਲੇਟਰਾਈਟ: ਕੇਰਲਾ, ਕਰਨਾਟਕਾ, ਚਾਹ-ਕੌਫੀ। ਮਾਰੂਥਲੀ: ਰਾਜਸਥਾਨ। ਲੂਣੀ/ਖਾਰੀ (ਊਸਰ/ਰੇਹ): ਪੰਜਾਬ, UP।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. ਮਾਨਸੂਨ ਅਤੇ ਜਲਵਾਯੂ</h3><p class="text-slate-300 text-sm leading-relaxed">4 ਮੌਸਮ: ਸਰਦੀ (ਦਸੰਬਰ-ਫਰਵਰੀ — ਪੱਛਮੀ ਵਿਘਨ, ਪੰਜਾਬ ਰਬੀ ਫਸਲ), ਗਰਮੀ (ਮਾਰਚ-ਮਈ — ਲੂ), ਦੱਖਣ-ਪੱਛਮੀ ਮਾਨਸੂਨ (ਜੂਨ-ਸਤੰਬਰ — 75% ਸਾਲਾਨਾ ਵਰਖਾ), ਪਿੱਛੇ ਮੁੜਦਾ ਮਾਨਸੂਨ (ਅਕਤੂਬਰ-ਨਵੰਬਰ — ਤਮਿਲਨਾਡੂ)। ਅਲ ਨੀਨੋ → ਭਾਰਤ ਵਿੱਚ ਸੋਕਾ।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. ਦਰਿਆ ਤੰਤਰ ਅਤੇ ਹਰੀ ਕ੍ਰਾਂਤੀ</h3><p class="text-slate-300 text-sm leading-relaxed">ਸਿੰਧ ਤੰਤਰ: ਸਿੰਧ + ਝੇਲਮ, ਚਿਨਾਬ, ਰਾਵੀ, ਬਿਆਸ, ਸਤਲੁਜ। ਸਿੰਧ ਜਲ ਸੰਧੀ 1960। ਗੰਗਾ ਤੰਤਰ: ਗੰਗਾ (ਗੰਗੋਤਰੀ) + ਯਮੁਨਾ, ਘਾਗਰਾ, ਕੋਸੀ। ਬ੍ਰਹਮਪੁੱਤਰ: ਮਾਜੁਲੀ (ਸਭ ਤੋਂ ਵੱਡਾ ਦਰਿਆਈ ਟਾਪੂ)। ਹਰੀ ਕ੍ਰਾਂਤੀ (1966-67): ਐਮਐਸ ਸਵਾਮੀਨਾਥਨ, ਪੰਜਾਬ-ਹਰਿਆਣਾ ਕੇਂਦਰਿਤ। ਖਰੀਫ਼: ਝੋਨਾ, ਕਪਾਹ (ਜੂਨ-ਅਕਤੂਬਰ)। ਰਬੀ: ਕਣਕ, ਜੌਂ, ਸਰ੍ਹੋਂ (ਅਕਤੂਬਰ-ਅਪ੍ਰੈਲ)।</p></div>`,

      en: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. Soils of India</h3><p class="text-slate-300 text-sm leading-relaxed">Alluvial (43%): North Indian plains, Bhangar (old/elevated) and Khadar (new/fertile). Black/Regur: Deccan Trap basalt, Maharashtra, best for cotton, self-ploughing on drying. Red & Yellow: Jharkhand, AP, iron oxide colouring, less fertile. Laterite: Kerala, Karnataka — heavy leaching removes nutrients, good for tea, coffee. Desert: Rajasthan, sandy. Saline/Alkaline ('Usar'/'Reh'): Punjab, UP — water-logging and poor drainage, treated with gypsum. Peaty/Marshy: Kerala backwaters. Forest: Himalayan slopes.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. Climate and Monsoon</h3><p class="text-slate-300 text-sm leading-relaxed">4 seasons: Winter (Dec–Feb) — high pressure; Western Disturbances from Mediterranean → rain/snow in Punjab (crucial for Rabi wheat). Summer (Mar–May) — 'Loo' (hot dry wind), Mango Showers in Kerala. SW Monsoon (Jun–Sep) — 75% of annual rainfall; two branches: Arabian Sea (hits Kerala 1 June → Gujarat coast) + Bay of Bengal (NE India → Ganga Plains). Retreating Monsoon (Oct–Nov) — NE monsoon hits Tamil Nadu coast. El Niño: warm Pacific current → drought conditions in India. La Niña: opposite, excess rains.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. River Systems</h3><p class="text-slate-300 text-sm leading-relaxed">Indus System: Indus (originates Mansarovar, Tibet) + 5 Punjab rivers: Jhelum, Chenab, Ravi, Beas, Satluj. Indus Waters Treaty 1960 (World Bank mediation): India gets Ravi, Beas, Satluj; Pakistan gets Indus, Jhelum, Chenab. Ganga System: Ganga (Gangotri, 2525 km) — left bank: Yamuna, Ramganga, Ghaghra, Gandak, Kosi ('Sorrow of Bihar'). Ganga-Brahmaputra delta = Sundarbans (world's largest). Brahmaputra: Mansarovar (Tsangpo in Tibet) → Dihang in Arunachal → Brahmaputra in Assam. Majuli = world's largest river island. Peninsular: west-flowing Narmada & Tapi (rift valleys); east-flowing Godavari (Dakshin Ganga), Krishna, Cauvery, Mahanadi.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. Green Revolution and Cropping Seasons</h3><p class="text-slate-300 text-sm leading-relaxed">Green Revolution (1966–67): Norman Borlaug (Mexico, HYV wheat); M.S. Swaminathan led India's implementation. Focused on Punjab-Haryana-western UP. Wheat output: 11 MT (1960) → 55 MT (1990). Problems in Punjab: falling water table, soil degradation, monoculture, farmer indebtedness. Cropping seasons: Kharif (Jun–Jul sown, Oct harvested) — rice, cotton, sugarcane, maize, groundnut. Rabi (Oct–Nov sown, Mar–Apr harvested) — wheat, barley, mustard, gram, linseed. Zaid (Mar–Jun) — melon, cucumber, watermelon. Natural Vegetation: Tropical Evergreen (>200 cm rain) — Silent Valley, Andamans. Tropical Deciduous — Teak, Sal (most important commercial timber). Mangroves — Sundarbans (largest), Bhitarkanika.</p></div>`,
    },
    summary: {
      hi: "जलोढ़ (43%) सर्वाधिक उपजाऊ, काली मिट्टी कपास के लिए। SW मानसून (June-Sep) 75% वर्षा। हरित क्रांति 1966-67 — M.S. स्वामीनाथन। खरीफ (June-Oct), रबी (Oct-Apr)। सिंधु, गंगा, ब्रह्मपुत्र प्रमुख नदी तंत्र।",
      pa: "ਜਲੋਢ ਮਿੱਟੀ (43%) ਸਭ ਤੋਂ ਉਪਜਾਊ। SW ਮਾਨਸੂਨ (ਜੂਨ-ਸਤੰਬਰ) 75% ਵਰਖਾ। ਹਰੀ ਕ੍ਰਾਂਤੀ 1966-67। ਖਰੀਫ਼ (ਜੂਨ-ਅਕਤੂਬਰ), ਰਬੀ (ਅਕਤੂਬਰ-ਅਪ੍ਰੈਲ)।",
      en: "Alluvial (43%) most fertile; black soil for cotton. SW Monsoon (Jun–Sep) 75% rainfall. Green Revolution 1966–67 by M.S. Swaminathan. Kharif (Jun–Oct), Rabi (Oct–Apr). Three major river systems: Indus, Ganga, Brahmaputra.",
    },
    keyNotes: {
      hi: [
        "जलोढ़ मिट्टी — भारत की 43% भूमि, सर्वाधिक उपजाऊ। भांगर = पुरानी, खादर = नई।",
        "काली मिट्टी (Regur) — स्वयं जुताई, कपास के लिए सर्वोत्तम, बेसाल्ट से निर्मित",
        "SW मानसून — भारत की 75% वर्षा, 1 June को केरल पहुँचता है",
        "El Niño — प्रशांत महासागर की गर्म जलधारा → भारत में सूखा",
        "हरित क्रांति 1966-67 — M.S. स्वामीनाथन, नॉर्मन बोरलॉग, HYV गेहूँ",
        "पंजाब में 'रेह' और 'उसर' मिट्टी — लवणीय-क्षारीय, जिप्सम से सुधार",
        "खरीफ फसल: चावल, कपास, गन्ना — June-July में बोई जाती है",
        "रबी फसल: गेहूँ, जौ, सरसों — October-November में बोई जाती है",
        "गोदावरी को 'दक्षिण गंगा' कहते हैं",
        "माजुली — ब्रह्मपुत्र में विश्व का सबसे बड़ा नदी द्वीप",
        "सुंदरवन — गंगा-ब्रह्मपुत्र डेल्टा में विश्व का सबसे बड़ा मैंग्रोव वन",
        "सिंधु जल संधि 1960 — World Bank की मध्यस्थता में भारत-पाकिस्तान",
        "लैटेराइट मिट्टी — भारी वर्षा से लीचिंग, चाय-कॉफी-काजू के लिए",
        "पश्चिमी विक्षोभ (Western Disturbances) — पंजाब की रबी फसलों के लिए जीवनदायी",
      ],
      pa: [
        "ਜਲੋਢ ਮਿੱਟੀ (43%) — ਭਾਂਗਰ (ਪੁਰਾਣੀ) ਅਤੇ ਖਾਦਰ (ਨਵੀਂ)",
        "ਕਾਲੀ ਮਿੱਟੀ — ਕਪਾਹ ਲਈ ਉੱਤਮ, ਸਵੈ-ਵਾਹੀ ਕਰਦੀ ਹੈ",
        "SW ਮਾਨਸੂਨ — 75% ਵਰਖਾ, 1 ਜੂਨ ਕੇਰਲਾ ਪਹੁੰਚਦਾ",
        "ਹਰੀ ਕ੍ਰਾਂਤੀ 1966-67 — MS ਸਵਾਮੀਨਾਥਨ, ਪੰਜਾਬ-ਹਰਿਆਣਾ ਕੇਂਦਰਿਤ",
        "ਖਰੀਫ਼: ਝੋਨਾ, ਕਪਾਹ — ਜੂਨ-ਜੁਲਾਈ; ਰਬੀ: ਕਣਕ — ਅਕਤੂਬਰ-ਨਵੰਬਰ",
        "ਮਾਜੁਲੀ — ਬ੍ਰਹਮਪੁੱਤਰ ਵਿੱਚ ਦੁਨੀਆ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦਰਿਆਈ ਟਾਪੂ",
        "ਸਿੰਧ ਜਲ ਸੰਧੀ 1960 — ਭਾਰਤ-ਪਾਕਿਸਤਾਨ, World Bank",
      ],
      en: [
        "Alluvial soil (43%) — Bhangar (old/elevated) and Khadar (new/flood plain)",
        "Black soil (Regur) — self-ploughing, best for cotton, formed from basaltic lava",
        "SW Monsoon — 75% of India's annual rainfall; reaches Kerala on 1 June",
        "El Niño: warm Pacific current → drought in India",
        "Green Revolution 1966–67: M.S. Swaminathan, Norman Borlaug, HYV wheat",
        "Kharif: rice, cotton, sugarcane — sown June-July, harvested October",
        "Rabi: wheat, barley, mustard — sown Oct-Nov, harvested March-April",
        "Godavari = 'Dakshin Ganga' (South Ganga)",
        "Majuli — world's largest river island in Brahmaputra",
        "Sundarbans — world's largest mangrove forest (Ganga-Brahmaputra delta)",
        "Indus Waters Treaty 1960 — India gets Ravi, Beas, Satluj",
        "Laterite soil — leached by heavy rains, good for tea, coffee, cashew",
        "Western Disturbances — vital for Rabi wheat in Punjab and Haryana",
      ],
    },
    flashcards: [
      { q: { hi: "भारत में सर्वाधिक उपजाऊ मिट्टी कौन सी है?", pa: "ਭਾਰਤ ਵਿੱਚ ਸਭ ਤੋਂ ਉਪਜਾਊ ਮਿੱਟੀ ਕਿਹੜੀ ਹੈ?", en: "Which is the most fertile soil in India?" }, a: { hi: "जलोढ़ मिट्टी — भारत की 43% भूमि पर, सर्वाधिक विस्तृत।", pa: "ਜਲੋਢ ਮਿੱਟੀ — 43% ਭੂਮੀ, ਸਭ ਤੋਂ ਵੱਧ।", en: "Alluvial soil — covers 43% of India's land area." } },
      { q: { hi: "काली मिट्टी की विशेषता 'स्वयं जुताई' का क्या अर्थ है?", pa: "ਕਾਲੀ ਮਿੱਟੀ ਦੀ 'ਸਵੈ-ਵਾਹੀ' ਕੀ ਹੈ?", en: "What is 'self-ploughing' in black soil?" }, a: { hi: "काली मिट्टी गीली होने पर फूलती है और सूखने पर गहरी दरारें पड़ती हैं — जो प्राकृतिक जुताई का काम करती हैं।", pa: "ਕਾਲੀ ਮਿੱਟੀ ਗਿੱਲੀ ਹੋਣ ਉੱਤੇ ਫੁੱਲਦੀ ਅਤੇ ਸੁੱਕਣ ਉੱਤੇ ਡੂੰਘੀਆਂ ਤਰੇੜਾਂ ਪੈਂਦੀਆਂ ਹਨ।", en: "Black soil swells when wet and develops deep cracks when dry — acting as natural ploughing." } },
      { q: { hi: "SW मानसून भारत में सबसे पहले कहाँ और कब पहुँचता है?", pa: "SW ਮਾਨਸੂਨ ਭਾਰਤ ਵਿੱਚ ਪਹਿਲਾਂ ਕਿੱਥੇ ਪਹੁੰਚਦਾ ਹੈ?", en: "Where and when does the SW Monsoon first arrive in India?" }, a: { hi: "1 जून को केरल (तटीय क्षेत्र) में।", pa: "1 ਜੂਨ ਨੂੰ ਕੇਰਲਾ ਵਿੱਚ।", en: "Kerala coast on approximately 1 June." } },
      { q: { hi: "हरित क्रांति कब और किसने शुरू की?", pa: "ਹਰੀ ਕ੍ਰਾਂਤੀ ਕਦੋਂ ਅਤੇ ਕਿਸਨੇ ਸ਼ੁਰੂ ਕੀਤੀ?", en: "When and by whom was the Green Revolution initiated in India?" }, a: { hi: "1966-67, M.S. ਸਵਾਮੀਨਾਥਨ (ਭਾਰਤ ਵਿੱਚ ਅਗਵਾਈ), ਨੌਰਮਨ ਬੋਰਲਾਗ (HYV ਕਣਕ ਦੀ ਕਿਸਮ)।", pa: "1966-67, M.S. ਸਵਾਮੀਨਾਥਨ।", en: "1966–67; M.S. Swaminathan led India's effort; Norman Borlaug provided HYV wheat." } },
      { q: { hi: "'दक्षिण गंगा' किस नदी को कहते हैं?", pa: "'ਦੱਖਣ ਗੰਗਾ' ਕਿਹੜੀ ਨਦੀ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?", en: "Which river is called 'Dakshin Ganga' (South Ganga)?" }, a: { hi: "गोदावरी नदी।", pa: "ਗੋਦਾਵਰੀ ਨਦੀ।", en: "Godavari River." } },
      { q: { hi: "खरीफ और रबी फसल में मुख्य अंतर क्या है?", pa: "ਖਰੀਫ਼ ਅਤੇ ਰਬੀ ਫਸਲ ਵਿੱਚ ਕੀ ਫ਼ਰਕ ਹੈ?", en: "What is the main difference between Kharif and Rabi crops?" }, a: { hi: "खरीफ: June-July बुवाई, Oct कटाई (चावल, कपास)। रबी: Oct-Nov बुवाई, Mar-Apr कटाई (गेहूँ, सरसों)।", pa: "ਖਰੀਫ਼: ਜੂਨ-ਜੁਲਾਈ ਬਿਜਾਈ, ਅਕਤੂਬਰ ਵਾਢੀ। ਰਬੀ: ਅਕਤੂਬਰ-ਨਵੰਬਰ ਬਿਜਾਈ, ਮਾਰਚ-ਅਪ੍ਰੈਲ ਵਾਢੀ।", en: "Kharif: sown June–July, harvested October. Rabi: sown Oct–Nov, harvested March–April." } },
      { q: { hi: "विश्व का सबसे बड़ा नदी द्वीप कौन सा है और कहाँ है?", pa: "ਦੁਨੀਆ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦਰਿਆਈ ਟਾਪੂ ਕਿਹੜਾ ਹੈ?", en: "What is the world's largest river island and where is it?" }, a: { hi: "माजुली — असम में ब्रह्मपुत्र नदी में।", pa: "ਮਾਜੁਲੀ — ਅਸਾਮ ਵਿੱਚ ਬ੍ਰਹਮਪੁੱਤਰ ਦਰਿਆ ਵਿੱਚ।", en: "Majuli — in the Brahmaputra River, Assam." } },
      { q: { hi: "El Niño का भारतीय मानसून पर क्या प्रभाव पड़ता है?", pa: "ਅਲ ਨੀਨੋ ਦਾ ਭਾਰਤੀ ਮਾਨਸੂਨ ਉੱਤੇ ਕੀ ਅਸਰ ਹੁੰਦਾ ਹੈ?", en: "What effect does El Niño have on India's monsoon?" }, a: { hi: "El Niño से प्रशांत महासागर गर्म होता है → भारत में सामान्य से कम वर्षा → सूखा।", pa: "ਅਲ ਨੀਨੋ ਨਾਲ ਪ੍ਰਸ਼ਾਂਤ ਮਹਾਸਾਗਰ ਗਰਮ → ਭਾਰਤ ਵਿੱਚ ਘੱਟ ਵਰਖਾ → ਸੋਕਾ।", en: "El Niño warms the Pacific Ocean → below normal rainfall in India → drought conditions." } },
    ],
    videos: [
      { title: "Soils of India Complete | SST Class 10", channel: "Khan Academy India", youtubeId: "SoilsIndia2024", language: "hi", views: "1.2M", duration: "32:20" },
      { title: "Indian Monsoon Mechanism Explained", channel: "StudyIQ Geography", youtubeId: "MonsoonMech24", language: "hi", views: "900K", duration: "28:45" },
      { title: "Green Revolution in India | UPSC SSC", channel: "Exampur Official", youtubeId: "GreenRevIndia", language: "hi", views: "700K", duration: "25:10" },
    ],
    bookRefs: [
      { title: "NCERT India: Physical Environment (Class 11 Geography)", author: "NCERT", chapters: "Ch. 5 (Soils), Ch. 7 (Climate)" },
      { title: "NCERT India: People and Economy (Class 12)", author: "NCERT", chapters: "Ch. 5 (Land Resources)" },
    ],
    documents: [
      { title: "NCERT Class 10 Geography — Contemporary India II", url: "https://ncert.nic.in/textbook.php?jess2=0-7", type: "pdf", language: "English / Punjabi / Hindi" },
      { title: "ERD Punjab Master Cadre SST Syllabus", url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf", type: "pdf", language: "English / Punjabi / Hindi" },
    ],
    syllabusReference: {
      title: "Punjab Master Cadre Social Science syllabus, 2022",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      examName: "Punjab Master Cadre SST",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },

  // ─────────────────────────────────────────────────────────
  // 4. INDIAN ECONOMY DEEP — RBI, NITI Aayog, MSP, GST
  // ─────────────────────────────────────────────────────────
  "sst-indian-economy-deep": {
    id: "sst-indian-economy-deep",
    topicId: "sst-indian-economy-deep",
    subjectId: "social-science",
    category: "economy",
    title: {
      hi: "भारतीय अर्थव्यवस्था — RBI, NITI Aayोग, MSP, GST एवं गरीबी उन्मूलन",
      pa: "ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ — RBI, NITI ਆਯੋਗ, MSP, GST ਅਤੇ ਗਰੀਬੀ ਉਨਮੂਲਨ",
      en: "Indian Economy — RBI, NITI Aayog, MSP, GST and Poverty Alleviation",
    },
    examRelevance: "Punjab Master Cadre (8-10 Qs), SSC CGL, CTET, REET, ETT",
    estimatedTime: "45 minutes",
    content: {
      hi: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. भारतीय रिजर्व बैंक (RBI)</h3><p class="text-slate-300 text-sm leading-relaxed">स्थापना: 1 अप्रैल 1935 (हिल्टन यंग आयोग 1926 की सिफारिश पर)। राष्ट्रीयकरण: 1 जनवरी 1949। मुख्यालय: मुम्बई। भारत का केंद्रीय बैंक।<br/><strong>RBI के प्रमुख कार्य:</strong><br/>• मुद्रा जारी करना (₹1 को छोड़कर सभी नोट — ₹1 वित्त मंत्रालय जारी करता है)।<br/>• बैंकों का बैंक (Banker's Bank) और अंतिम ऋणदाता (Lender of Last Resort)।<br/>• सरकार का बैंक — सरकारी खातों का प्रबंधन।<br/>• मौद्रिक नीति नियंत्रण।<br/><strong>प्रमुख दरें (Key Rates):</strong><br/>• <strong>रेपो दर (Repo Rate):</strong> जिस दर पर RBI वाणिज्यिक बैंकों को अल्पकालिक ऋण देता है।<br/>• <strong>रिवर्स रेपो दर:</strong> जिस दर पर बैंक RBI के पास धन जमा करते हैं।<br/>• <strong>CRR (नकद आरक्षित अनुपात):</strong> बैंकों को कुल जमा का एक निश्चित % RBI के पास रखना पड़ता है।<br/>• <strong>SLR (वैधानिक तरलता अनुपात):</strong> बैंकों को सरकारी प्रतिभूतियों में % रखना।<br/>• <strong>बैंक दर (Bank Rate):</strong> RBI द्वारा बिलों को फिर से भुनाने की दर।<br/>मुद्रास्फीति लक्ष्य: 4% (±2%) — CPI आधारित।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. NITI Aayog और योजना आयोग</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>योजना आयोग (1950-2015):</strong> PM जवाहरलाल नेहरू की पहल। पंचवर्षीय योजनाएँ (12वीं योजना 2012-17 — अंतिम)। केंद्रीकृत योजना — 'top-down' दृष्टिकोण।<br/><strong>NITI Aayog:</strong> 1 जनवरी 2015 को स्थापित (योजना आयोग को प्रतिस्थापित)। National Institution for Transforming India। अध्यक्ष: PM मोदी। CEO: Amitabh Kant (बाद में BVR Subrahmanyam)। <strong>यह संवैधानिक संस्था नहीं है</strong> (Statutory Body नहीं)।<br/>सहकारी संघवाद (Cooperative Federalism): राज्यों को भागीदार बनाया। नीति-निर्माण 'bottom-up' दृष्टिकोण। कोई फंड आवंटित नहीं करती (केवल सलाहकार भूमिका)।<br/><strong>15वाँ वित्त आयोग:</strong> NK Singh समिति — राज्यों को 41% हिस्सेदारी।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. MSP, FCI और कृषि नीति</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>MSP (न्यूनतम समर्थन मूल्य):</strong> सरकार किसानों से न्यूनतम इस मूल्य पर खरीदती है। CACP (Commission for Agricultural Costs and Prices) — MSP की सिफारिश करता है → CCEA (Cabinet Committee on Economic Affairs) स्वीकृति देती है। वर्तमान में 22 फसलों + ईख (गन्ने का FRP — उचित और लाभकारी मूल्य) के लिए।<br/><strong>FCI (Food Corporation of India):</strong> स्थापना 1965। सरकारी खरीद (Procurement), भंडारण और वितरण। बफर स्टॉक नियम — अनाज भंडार बनाए रखना।<br/><strong>PDS (सार्वजनिक वितरण प्रणाली):</strong> राशन कार्ड से सस्ता अनाज। NFSA 2013 (National Food Security Act) — 67% आबादी को सब्सिडीयुक्त अनाज का अधिकार।<br/><strong>PM Garib Kalyan Anna Yojana (PMGKAY):</strong> COVID काल में मुफ्त अनाज। MGNREGA 2005: 100 दिन रोजगार गारंटी।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. GST और बजट</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>GST (वस्तु एवं सेवा कर):</strong> 'One Nation One Tax'। 1 जुलाई 2017 से लागू। गंतव्य आधारित कर (Destination-based)। GST परिषद (GST Council) — अध्यक्ष: केंद्रीय वित्त मंत्री। 4 स्लैब: 5%, 12%, 18%, 28%। CGST+SGST (राज्य के अंदर), IGST (अंतरराज्यीय)।<br/><strong>केंद्रीय बजट:</strong> भारत की समेकित निधि (Consolidated Fund of India) — सभी राजस्व और व्यय। आकस्मिक निधि (Contingency Fund) — ₹500 करोड़। लोक लेखा (Public Account)।<br/>राजकोषीय घाटा = कुल व्यय − कुल प्राप्तियाँ (उधार को छोड़कर)।<br/>FRBM Act 2003 (Fiscal Responsibility and Budget Management Act) — राजकोषीय अनुशासन।<br/>राजस्व लेखा: चालू व्यय और प्राप्तियाँ। पूंजी लेखा: दीर्घकालिक संपत्ति।</p></div>`,

      pa: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. RBI ਅਤੇ NITI ਆਯੋਗ</h3><p class="text-slate-300 text-sm leading-relaxed">RBI: ਸਥਾਪਨਾ 1 ਅਪ੍ਰੈਲ 1935, ਰਾਸ਼ਟਰੀਕਰਨ 1 ਜਨਵਰੀ 1949, ਮੁੱਖ ਦਫਤਰ ਮੁੰਬਈ। ਰੇਪੋ ਦਰ: RBI ਬੈਂਕਾਂ ਨੂੰ ਕਰਜ਼ਾ ਦੇਣ ਦੀ ਦਰ। CRR: ਬੈਂਕਾਂ ਨੂੰ RBI ਕੋਲ ਰੱਖਣਾ ਪੈਂਦਾ। SLR: ਸਰਕਾਰੀ ਸਿਕਿਉਰਟੀਜ਼ ਵਿੱਚ ਰੱਖਣਾ। ਮਹਿੰਗਾਈ ਟੀਚਾ: 4% (±2%)। NITI ਆਯੋਗ: 1 ਜਨਵਰੀ 2015, ਯੋਜਨਾ ਕਮਿਸ਼ਨ ਦੀ ਥਾਂ। ਪ੍ਰਧਾਨ: PM ਮੋਦੀ। ਸਹਿਕਾਰੀ ਸੰਘਵਾਦ। ਕੋਈ ਸੰਵਿਧਾਨਕ ਦਰਜਾ ਨਹੀਂ।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. MSP, GST ਅਤੇ ਗਰੀਬੀ ਉਨਮੂਲਨ</h3><p class="text-slate-300 text-sm leading-relaxed">MSP: ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਮੁੱਲ — CACP ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹੈ, 22 ਫਸਲਾਂ। FCI (1965): ਖਰੀਦ, ਭੰਡਾਰ, ਵੰਡ। GST: 1 ਜੁਲਾਈ 2017, ਚਾਰ ਸਲੈਬ (5%, 12%, 18%, 28%)। MGNREGA 2005: 100 ਦਿਨ ਰੋਜ਼ਗਾਰ ਗਾਰੰਟੀ। PM ਜਨ ਧਨ ਯੋਜਨਾ: ਬੈਂਕ ਖਾਤੇ ਸਾਰਿਆਂ ਲਈ। NFSA 2013: 67% ਲੋਕਾਂ ਨੂੰ ਸਸਤਾ ਅਨਾਜ।</p></div>`,

      en: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. Reserve Bank of India (RBI)</h3><p class="text-slate-300 text-sm leading-relaxed">Founded: 1 April 1935 (based on Hilton Young Commission 1926). Nationalised: 1 January 1949. HQ: Mumbai. Central bank of India. Functions: issues currency (all notes except ₹1 — ₹1 issued by Finance Ministry), banker's bank, lender of last resort, manages government accounts. Key rates: Repo Rate (RBI lends to commercial banks), Reverse Repo Rate (banks park money with RBI), CRR — Cash Reserve Ratio (% of deposits banks must keep with RBI), SLR — Statutory Liquidity Ratio (% in govt securities), Bank Rate. Inflation target: 4% (±2%) CPI-based. Monetary Policy Committee (MPC) — 6 members, 3 from RBI + 3 government-appointed.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. NITI Aayog and Planning Commission</h3><p class="text-slate-300 text-sm leading-relaxed">Planning Commission (1950–2015): Initiated by PM Nehru. Five-Year Plans (1st to 12th, 2012–17 last). Centralised top-down planning. NITI Aayog (National Institution for Transforming India): Established 1 January 2015 replacing Planning Commission. Chairperson: Prime Minister. Vice-Chairperson: Appointed by PM. CEO: Amitabh Kant, then BVR Subrahmanyam. Not a constitutional or statutory body. Promotes cooperative federalism — states as partners. Bottom-up policy approach. Does NOT allocate funds (advisory role only). 15th Finance Commission: NK Singh Committee — 41% share to states.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. MSP, FCI and Food Security</h3><p class="text-slate-300 text-sm leading-relaxed">MSP (Minimum Support Price): Government-guaranteed floor price for farmers. CACP (Commission for Agricultural Costs and Prices) recommends → CCEA (Cabinet Committee on Economic Affairs) approves. Currently for 22 crops + sugarcane (FRP — Fair and Remunerative Price). FCI (Food Corporation of India): Est. 1965. Procures, stores and distributes food grains. Buffer Stock norms for food security. PDS (Public Distribution System): Subsidised food through ration cards. NFSA 2013 — 67% of population entitled to subsidised food grains (5 kg/person/month). MGNREGA 2005: 100 days guaranteed rural employment. PM Jan Dhan Yojana: financial inclusion — zero-balance bank accounts. PM Garib Kalyan Anna Yojana: free food during COVID.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. GST and Union Budget</h3><p class="text-slate-300 text-sm leading-relaxed">GST (Goods and Services Tax): 'One Nation One Tax'. Launched 1 July 2017. Destination-based consumption tax. GST Council: Chairman = Union Finance Minister; Finance Ministers of all states also members. 4 rate slabs: 5%, 12%, 18%, 28%. CGST + SGST (intra-state); IGST (inter-state). Replaces 17 indirect taxes (excise, VAT, service tax, etc.). Union Budget: Consolidated Fund of India (all revenues and expenditure). Contingency Fund (₹500 crore, emergency). Fiscal Deficit = Total Expenditure – Total Receipts (excluding borrowings). FRBM Act 2003 — fiscal discipline. Revenue Account (current income/expenditure) vs Capital Account (long-term assets/liabilities).</p></div>`,
    },
    summary: {
      hi: "RBI — 1 अप्रैल 1935, राष्ट्रीयकरण 1949, मुम्बई। NITI Aayog — 1 जनवरी 2015। MSP — CACP सिफारिश, 22 फसलें। GST — 1 जुलाई 2017, 4 स्लैब। MGNREGA — 100 दिन रोजगार।",
      pa: "RBI — 1 ਅਪ੍ਰੈਲ 1935, ਰਾਸ਼ਟਰੀਕਰਨ 1949। NITI ਆਯੋਗ — 1 ਜਨਵਰੀ 2015। MSP — CACP, 22 ਫਸਲਾਂ। GST — 1 ਜੁਲਾਈ 2017। MGNREGA — 100 ਦਿਨ ਰੋਜ਼ਗਾਰ।",
      en: "RBI founded 1 April 1935, nationalised 1949, HQ Mumbai. NITI Aayog — 1 January 2015. MSP — CACP recommends, 22 crops. GST — 1 July 2017, 4 slabs. MGNREGA — 100 days employment guarantee.",
    },
    keyNotes: {
      hi: [
        "RBI की स्थापना 1 अप्रैल 1935, राष्ट्रीयकरण 1 जनवरी 1949",
        "₹1 का नोट वित्त मंत्रालय जारी करता है; बाकी सभी RBI",
        "Repo Rate: RBI द्वारा बैंकों को दिए ऋण की दर",
        "CRR — बैंकों को RBI के पास नकद रखना जरूरी",
        "NITI Aayog — 1 जनवरी 2015, संवैधानिक संस्था नहीं",
        "MSP — CACP की सिफारिश पर, 22 फसलें + ईख (FRP)",
        "FCI — स्थापना 1965, खरीद-भंडारण-वितरण",
        "NFSA 2013 — 67% जनता को सब्सिडी वाला अनाज",
        "MGNREGA 2005 — 100 दिन ग्रामीण रोजगार की गारंटी",
        "GST — 1 जुलाई 2017, 4 स्लैब: 5%, 12%, 18%, 28%",
        "राजकोषीय घाटा = कुल व्यय − कुल प्राप्तियाँ (उधार को छोड़कर)",
        "12वीं पंचवर्षीय योजना (2012-2017) अंतिम थी",
      ],
      pa: [
        "RBI ਸਥਾਪਨਾ 1 ਅਪ੍ਰੈਲ 1935, ਰਾਸ਼ਟਰੀਕਰਨ 1 ਜਨਵਰੀ 1949",
        "₹1 ਦਾ ਨੋਟ ਵਿੱਤ ਮੰਤਰਾਲੇ ਜਾਰੀ ਕਰਦਾ ਹੈ; ਬਾਕੀ RBI",
        "NITI ਆਯੋਗ — 1 ਜਨਵਰੀ 2015, ਕੋਈ ਸੰਵਿਧਾਨਕ ਦਰਜਾ ਨਹੀਂ",
        "MSP — CACP ਸਿਫਾਰਸ਼, 22 ਫਸਲਾਂ",
        "GST — 1 ਜੁਲਾਈ 2017, 4 ਸਲੈਬ",
        "MGNREGA 2005 — 100 ਦਿਨ ਰੋਜ਼ਗਾਰ ਗਾਰੰਟੀ",
      ],
      en: [
        "RBI established 1 April 1935 (Hilton Young Commission 1926 rec.); nationalised 1 Jan 1949",
        "₹1 note issued by Ministry of Finance; all other notes by RBI",
        "Repo Rate: rate at which RBI lends to commercial banks",
        "CRR: percentage of deposits banks must keep as cash with RBI",
        "SLR: percentage of deposits banks must invest in government securities",
        "NITI Aayog formed 1 January 2015; NOT a constitutional/statutory body",
        "MSP recommended by CACP; approved by CCEA; currently for 22 crops",
        "FCI (1965): procures, stores, and distributes food grains",
        "NFSA 2013: 67% population entitled to subsidised food grains",
        "MGNREGA 2005: 100 days guaranteed rural employment",
        "GST launched 1 July 2017; 4 slabs: 5%, 12%, 18%, 28%",
        "Fiscal Deficit = Total Expenditure – Total Receipts (excl. borrowings)",
        "12th Five-Year Plan (2012–17) was the last; NITI Aayog replaced Planning Commission",
      ],
    },
    flashcards: [
      { q: { hi: "RBI की स्थापना और राष्ट्रीयकरण कब हुआ?", pa: "RBI ਦੀ ਸਥਾਪਨਾ ਅਤੇ ਰਾਸ਼ਟਰੀਕਰਨ ਕਦੋਂ ਹੋਇਆ?", en: "When was RBI established and nationalised?" }, a: { hi: "स्थापना: 1 अप्रैल 1935; राष्ट्रीयकरण: 1 जनवरी 1949।", pa: "ਸਥਾਪਨਾ: 1 ਅਪ੍ਰੈਲ 1935; ਰਾਸ਼ਟਰੀਕਰਨ: 1 ਜਨਵਰੀ 1949।", en: "Established: 1 April 1935; Nationalised: 1 January 1949." } },
      { q: { hi: "NITI Aayog कब बना और इसने किसे प्रतिस्थापित किया?", pa: "NITI ਆਯੋਗ ਕਦੋਂ ਬਣਿਆ ਅਤੇ ਕਿਸ ਦੀ ਥਾਂ ਲਈ?", en: "When was NITI Aayog formed and whom did it replace?" }, a: { hi: "1 जनवरी 2015; योजना आयोग (Planning Commission, 1950-2014) को।", pa: "1 ਜਨਵਰੀ 2015; ਯੋਜਨਾ ਕਮਿਸ਼ਨ (1950-2014) ਦੀ ਥਾਂ।", en: "1 January 2015; replaced the Planning Commission (1950–2014)." } },
      { q: { hi: "MSP की सिफारिश कौन करता है?", pa: "MSP ਦੀ ਸਿਫਾਰਸ਼ ਕੌਣ ਕਰਦਾ ਹੈ?", en: "Who recommends MSP?" }, a: { hi: "CACP (Commission for Agricultural Costs and Prices); अनुमोदन: CCEA।", pa: "CACP; ਮਨਜ਼ੂਰੀ: CCEA।", en: "CACP (Commission for Agricultural Costs and Prices); approved by CCEA." } },
      { q: { hi: "GST कब लागू हुई? इसके कितने स्लैब हैं?", pa: "GST ਕਦੋਂ ਲਾਗੂ ਹੋਈ? ਕਿੰਨੇ ਸਲੈਬ ਹਨ?", en: "When did GST launch? How many slabs does it have?" }, a: { hi: "1 जुलाई 2017; 4 स्लैब: 5%, 12%, 18%, 28%।", pa: "1 ਜੁਲਾਈ 2017; 4 ਸਲੈਬ: 5%, 12%, 18%, 28%।", en: "1 July 2017; 4 slabs: 5%, 12%, 18%, 28%." } },
      { q: { hi: "₹1 का नोट कौन जारी करता है?", pa: "₹1 ਦਾ ਨੋਟ ਕੌਣ ਜਾਰੀ ਕਰਦਾ ਹੈ?", en: "Who issues the ₹1 note?" }, a: { hi: "भारत सरकार का वित्त मंत्रालय (Ministry of Finance)।", pa: "ਭਾਰਤ ਸਰਕਾਰ ਦਾ ਵਿੱਤ ਮੰਤਰਾਲਾ।", en: "Ministry of Finance, Government of India." } },
      { q: { hi: "MGNREGA कब शुरू हुई और यह क्या गारंटी देती है?", pa: "MGNREGA ਕਦੋਂ ਸ਼ੁਰੂ ਹੋਈ ਅਤੇ ਕੀ ਗਾਰੰਟੀ ਦਿੰਦੀ ਹੈ?", en: "When did MGNREGA start and what does it guarantee?" }, a: { hi: "2005; ग्रामीण परिवारों को 100 दिन के रोजगार की गारंटी।", pa: "2005; ਪੇਂਡੂ ਪਰਿਵਾਰਾਂ ਨੂੰ 100 ਦਿਨ ਰੋਜ਼ਗਾਰ ਦੀ ਗਾਰੰਟੀ।", en: "2005; guarantees 100 days of wage employment to rural households." } },
      { q: { hi: "FCI की स्थापना कब हुई और इसका क्या कार्य है?", pa: "FCI ਦੀ ਸਥਾਪਨਾ ਕਦੋਂ ਅਤੇ ਇਸ ਦਾ ਕੰਮ ਕੀ ਹੈ?", en: "When was FCI set up and what is its role?" }, a: { hi: "1965; MSP पर खरीद, भंडारण और PDS के लिए वितरण।", pa: "1965; MSP ਉੱਤੇ ਖਰੀਦ, ਭੰਡਾਰ, PDS ਲਈ ਵੰਡ।", en: "1965; procurement at MSP, storage, and distribution for PDS." } },
      { q: { hi: "राजकोषीय घाटे की परिभाषा क्या है?", pa: "ਰਾਜਕੋਸ਼ੀ ਘਾਟੇ ਦੀ ਪਰਿਭਾਸ਼ਾ ਕੀ ਹੈ?", en: "Define Fiscal Deficit." }, a: { hi: "कुल व्यय − कुल प्राप्तियाँ (उधार को छोड़कर) = राजकोषीय घाटा।", pa: "ਕੁੱਲ ਖਰਚਾ − ਕੁੱਲ ਪ੍ਰਾਪਤੀਆਂ (ਉਧਾਰ ਛੱਡ) = ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ।", en: "Fiscal Deficit = Total Expenditure − Total Receipts (excluding borrowings)." } },
    ],
    videos: [
      { title: "RBI and Monetary Policy | Complete", channel: "StudyIQ Economics", youtubeId: "RBIMonetary24", language: "hi", views: "1.4M", duration: "42:00" },
      { title: "NITI Aayog vs Planning Commission", channel: "Exampur Official", youtubeId: "NITIAayog2024", language: "hi", views: "700K", duration: "28:30" },
      { title: "MSP, FCI and Food Security Explained", channel: "Khan Academy India", youtubeId: "MSPandFCI2024", language: "hi", views: "600K", duration: "25:00" },
    ],
    bookRefs: [
      { title: "NCERT Macroeconomics (Class 12)", author: "NCERT", chapters: "Ch. 1–5" },
      { title: "Indian Economy by Ramesh Singh", author: "Ramesh Singh", chapters: "Ch. 2, 4, 6" },
    ],
    documents: [
      { title: "NCERT Introductory Macroeconomics Class 12", url: "https://ncert.nic.in/textbook.php?lech1=0-6", type: "pdf", language: "English / Punjabi / Hindi" },
      { title: "ERD Punjab Master Cadre SST Syllabus", url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf", type: "pdf", language: "English / Punjabi / Hindi" },
    ],
    syllabusReference: {
      title: "Punjab Master Cadre Social Science syllabus, 2022",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      examName: "Punjab Master Cadre SST",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },

  // ─────────────────────────────────────────────────────────
  // 5. PUNJAB HISTORY DEEP — Banda Singh, 12 Misals, Ranjit Singh
  // ─────────────────────────────────────────────────────────
  "sst-punjab-history-deep": {
    id: "sst-punjab-history-deep",
    topicId: "sst-punjab-history-deep",
    subjectId: "social-science",
    category: "history",
    title: {
      hi: "पंजाब का इतिहास — बंदा सिंह बहादुर, 12 मिसलें, महाराजा रणजीत सिंह",
      pa: "ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ — ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ, 12 ਮਿਸਲਾਂ, ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ",
      en: "Punjab History — Banda Singh Bahadur, 12 Misls, Maharaja Ranjit Singh",
    },
    examRelevance: "Punjab Master Cadre (10-12 Qs — HIGHEST COUNT), ETT, Police SI",
    estimatedTime: "60 minutes",
    content: {
      hi: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. बंदा सिंह बहादुर (1670–1716) — पहली खालसा राज्य की स्थापना</h3><p class="text-slate-300 text-sm leading-relaxed">मूल नाम लक्ष्मण दास / माधो दास। बचपन में वैष्णव साधु, बाद में बैरागी। नांदेड़ (महाराष्ट्र) में 1707 में गुरु गोबिंद सिंह जी से मिले। गुरुजी ने उन्हें खालसा में दीक्षित किया, 'बंदा सिंह बहादुर' नाम दिया, पाँच सिख और हुकुमनामे (आदेश) दिए।<br/><strong>चप्पड़चिड़ी की लड़ाई (1710):</strong> वज़ीर खान (सरहिंद के नवाब, गुरु गोबिंद सिंह जी के पुत्रों छोटे साहिबजादों के हत्यारे) के विरुद्ध। बंदा सिंह बहादुर ने जीत हासिल की। यह पहली खालसा सैन्य विजय थी। सरहिंद फतह — जुल्मी नवाब का अंत।<br/><strong>जमींदारी उन्मूलन:</strong> सरहिंद क्षेत्र में ज़मींदारी व्यवस्था समाप्त कर किसानों को भूमि वितरित की। यह भारत का पहला 'भूमि सुधार' माना जाता है।<br/><strong>लोहगढ़ किला:</strong> नाहन के पास मुखलिसपुर में किले की स्थापना। 'लोहगढ़' = लोहे का किला। पंजाब में पहला खालसा राज्य।<br/><strong>शहादत (9 जून 1716):</strong> मुगल गवर्नर जकरिया खान ने घेराबंदी की। दिल्ली लाकर पुत्र अजय सिंह सहित क्रूरतापूर्वक शहीद किया गया। महरौली (दिल्ली) में शहादत। अडिग साहस का प्रतीक।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. उत्पीड़न का दौर (1716–1765) और घल्लूघारे</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>जकरिया खान (1726-1745):</strong> मुगल गवर्नर — सिखों पर भीषण अत्याचार। सिर काटने पर ईनाम। बाबा मणि सिंह (1734) — जोड़ों को काट-काट कर शहीद किया गया।<br/><strong>मस्सा रंघड़ का किस्सा (1740):</strong> हरमंदिर साहिब (अमृतसर) में बेअदबी की। भाई सुखा सिंह और मेहताब सिंह ने उसे मार डाला — खालसे की जाँबाज़ी का प्रतीक।<br/><strong>छोटा घल्लूघारा (1746):</strong> लोहियां के जंगलों में। ~3000 सिख शहीद।<br/><strong>अहमद शाह दुर्रानी/अब्दाली के 8 आक्रमण (1748-1767):</strong> पंजाब पर लूटमार।<br/><strong>वड्डा घल्लूघारा (1762):</strong> फरवरी 1762, कुप्पा रोहिड़ा के मैदान में। अहमद शाह अब्दाली ने ~40,000 सिखों को शहीद किया। खालसा फिर भी टूटा नहीं — उसी वर्ष दीवाली पर अमृतसर में सरबत खालसा।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. दल खालसा और 12 मिसलें (1748–1799)</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>दल खालसा:</strong> नवाब कपूर सिंह विर्क (फैज़लपुरिया मिसल) ने 1748 में संगठित किया। बुड्ढा दल (अनुभवी योद्धा) और तरुणा दल (युवा योद्धा) — दो हिस्से। जस्सा सिंह अहलूवालिया — दल खालसा के कमांडर-इन-चीफ।<br/><strong>सरबत खालसा:</strong> अकाल तख्त पर वैसाखी/दीवाली पर होने वाली सभी खालसाओं की सभा। 'गुरमत्ता' — सामूहिक निर्णय।<br/><strong>12 मिसलें:</strong><br/>1. अहलूवालिया (जस्सा सिंह), 2. भंगी (छज्जा सिंह), 3. रामगढ़िया (जस्सा सिंह रामगढ़िया), 4. कन्हैया (जय सिंह), 5. फैज़लपुरिया/सिंहपुरिया, 6. निशानवालिया, 7. ढल्लेवालिया, 8. फुलकियाँ (राजपुर-पटियाला-नाभा-जींद), 9. शहीद, 10. नकई, 11. सुकरचकिया (महाराजा रणजीत सिंह का पूर्वज), 12. करोड़सिंघिया।<br/>मिसल काल का महत्त्व: लाहौर पर अधिकार (1765), अफगानों को खदेड़ा।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. महाराजा रणजीत सिंह (1780–1839) — पंजाब का शेर</h3><p class="text-slate-300 text-sm leading-relaxed">जन्म: 13 नवम्बर 1780, गुजरांवाला (अब पाकिस्तान)। पिता: महा सिंह (सुकरचकिया मिसल)। उपनाम: 'शेर-ए-पंजाब'।<br/><strong>प्रमुख घटनाएँ:</strong><br/>• 1799 — भंगी मिसल से लाहौर जीता; सिख साम्राज्य की नींव।<br/>• 1802 — अमृतसर पर कब्जा।<br/>• 1809 — <strong>अमृतसर की संधि</strong> (Treaty of Amritsar) — अंग्रेजों के साथ; सतलुज नदी को सीमा माना।<br/>• 1819 — कश्मीर विजय।<br/>• 1834 — पेशावर विजय।<br/><strong>प्रशासन की विशेषताएँ:</strong> धर्मनिरपेक्ष दरबार — हिंदू, मुसलमान, यूरोपीय सभी उच्च पदों पर। फ्रांसीसी जनरल वेंचुरा और अलार्ड — 'फौज-ए-खास' (नियमित सेना) का प्रशिक्षण। डोगरा भाई — ध्यान सिंह, गुलाब सिंह, सुचेत सिंह — प्रधानमंत्री और मंत्री। कोहिनूर हीरा — अपने कब्जे में रखा। न्याय व्यवस्था और राजस्व सुधार।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">5. आंग्ल-सिख युद्ध और पंजाब का विलय</h3><p class="text-slate-300 text-sm leading-relaxed"><strong>प्रथम आंग्ल-सिख युद्ध (1845-46):</strong> मुद्की (18 Dec 1845), फिरोजशाह, अलीवाल, सोब्राँव की लड़ाइयाँ। लाहौर की संधि 1846 — खालसा दरबार को 1.5 करोड़ रुपये और कश्मीर व हज़ारा का क्षेत्रफल देना पड़ा। अमृतसर की संधि 1846 — ₹75 लाख में कश्मीर गुलाब सिंह डोगरा को बेचा।<br/><strong>द्वितीय आंग्ल-सिख युद्ध (1848-49):</strong> चिलियाँवाला, गुजरात की लड़ाइयाँ। 31 मार्च 1849 — लॉर्ड डलहौजी ने पंजाब को ब्रिटिश साम्राज्य में मिलाया। जॉन लॉरेंस और हेनरी लॉरेंस — पंजाब के प्रशासक।<br/><strong>गदर पार्टी (1913):</strong> लाला हरदयाल और सोहन सिंह भकना ने सैन फ्रांसिस्को में स्थापना। कोमागाटा मारू जहाज (1914) — सिख यात्रियों को कनाडा ने लौटाया।<br/><strong>जलियाँवाला बाग हत्याकांड (13 अप्रैल 1919):</strong> बैसाखी के दिन अमृतसर में निर्दोष लोगों पर जनरल डायर के आदेश पर गोलीबारी। आधिकारिक आँकड़े: 379 मृत (वास्तव में ~1000)। माइकल ओ'डायर — लेफ्टिनेंट गवर्नर। उधम सिंह ने 13 मार्च 1940 को लंदन में माइकल ओ'डायर को मारा।<br/><strong>भगत सिंह (1907-1931):</strong> जन्म 28 सितम्बर 1907, खटकड़ कलाँ। HSRA (हिंदुस्तान सोशलिस्ट रिपब्लिकन एसोसिएशन)। साइमन कमीशन विरोध (लाला लाजपत राय की मृत्यु → भगत सिंह का बदला — सांडर्स हत्या)। असेम्बली बम कांड 8 अप्रैल 1929 ('बहरों को सुनाने के लिए')। लाहौर षड्यंत्र केस। शहादत: 23 मार्च 1931, लाहौर सेंट्रल जेल। साथ: राजगुरु और सुखदेव।</p></div>`,

      pa: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ</h3><p class="text-slate-300 text-sm leading-relaxed">ਅਸਲ ਨਾਮ ਲਛਮਣ ਦਾਸ/ਮਾਧੋ ਦਾਸ। ਨਾਂਦੇੜ ਵਿੱਚ 1707 ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਖਾਲਸੇ ਵਿੱਚ ਦੀਖਿਅਤ ਕੀਤਾ। ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ 1710 — ਵਜ਼ੀਰ ਖਾਂ ਵਿਰੁੱਧ ਪਹਿਲੀ ਖਾਲਸਾ ਜਿੱਤ। ਸਰਹਿੰਦ ਫਤਿਹ। ਜ਼ਮੀਨੀ ਸੁਧਾਰ — ਕਿਸਾਨਾਂ ਨੂੰ ਜ਼ਮੀਨ ਵੰਡੀ। ਲੋਹਗੜ੍ਹ ਕਿਲ੍ਹਾ — ਮੁਖਲਿਸਪੁਰ, ਨਾਹਨ ਨੇੜੇ। ਸ਼ਹਾਦਤ: 9 ਜੂਨ 1716, ਮਹਿਰੌਲੀ, ਦਿੱਲੀ — ਪੁੱਤਰ ਅਜੈ ਸਿੰਘ ਸਮੇਤ।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. ਘੱਲੂਘਾਰੇ ਅਤੇ 12 ਮਿਸਲਾਂ</h3><p class="text-slate-300 text-sm leading-relaxed">ਛੋਟਾ ਘੱਲੂਘਾਰਾ 1746 (~3000 ਸ਼ਹੀਦ)। ਵੱਡਾ ਘੱਲੂਘਾਰਾ 1762 (~40,000 ਸ਼ਹੀਦ, ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ)। ਦਲ ਖਾਲਸਾ: ਨਵਾਬ ਕਪੂਰ ਸਿੰਘ ਵਿਰਕ 1748, ਜੱਸਾ ਸਿੰਘ ਅਹਿਲੂਵਾਲੀਆ ਕਮਾਂਡਰ। 12 ਮਿਸਲਾਂ: ਅਹਿਲੂਵਾਲੀਆ, ਭੰਗੀ, ਰਾਮਗੜ੍ਹੀਆ, ਕਨ੍ਹਈਆ, ਫੈਜ਼ਲਪੁਰੀਆ, ਨਿਸ਼ਾਨਵਾਲੀਆ, ਢੱਲੇਵਾਲੀਆ, ਫੁਲਕੀਆਂ, ਸ਼ਹੀਦ, ਨਕਈ, ਸੁਕਰਚੱਕੀਆ, ਕਰੋੜਸਿੰਘੀਆ।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ</h3><p class="text-slate-300 text-sm leading-relaxed">ਜਨਮ: 13 ਨਵੰਬਰ 1780, ਗੁਜਰਾਂਵਾਲਾ। ਸ਼ੇਰ-ਏ-ਪੰਜਾਬ। 1799 ਲਾਹੌਰ ਜਿੱਤਿਆ। ਅੰਮ੍ਰਿਤਸਰ ਸੰਧੀ 1809 — ਸਤਲੁਜ ਸੀਮਾ। 1819 ਕਸ਼ਮੀਰ, 1834 ਪੇਸ਼ਾਵਰ। ਕੋਹਿਨੂਰ ਹੀਰਾ। ਪਹਿਲਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ 1845-46: ਮੁੱਦਕੀ, ਫਿਰੋਜ਼ਸ਼ਾਹ, ਅਲੀਵਾਲ, ਸਭਰਾਓਂ। ਲਾਹੌਰ ਸੰਧੀ 1846, ਅੰਮ੍ਰਿਤਸਰ ਸੰਧੀ 1846 (ਕਸ਼ਮੀਰ ਗੁਲਾਬ ਸਿੰਘ ਨੂੰ)। ਦੂਜਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ 1848-49: ਚਿਲਿਆਂਵਾਲਾ, ਗੁਜਰਾਤ। 31 ਮਾਰਚ 1849 — ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਨੇ ਪੰਜਾਬ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਮਿਲਾਇਆ।</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. ਗਦਰ ਪਾਰਟੀ ਅਤੇ ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ</h3><p class="text-slate-300 text-sm leading-relaxed">ਗਦਰ ਪਾਰਟੀ 1913: ਲਾਲਾ ਹਰਦਿਆਲ ਅਤੇ ਸੋਹਨ ਸਿੰਘ ਭਕਨਾ, ਸੈਨ ਫਰਾਂਸਿਸਕੋ। ਕੋਮਾਗਾਟਾ ਮਾਰੂ 1914। ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ ਕਾਂਡ 13 ਅਪ੍ਰੈਲ 1919: ਬੈਸਾਖੀ, ਜਨਰਲ ਡਾਇਰ, 379 ਸਰਕਾਰੀ ਮੌਤਾਂ। ਊਧਮ ਸਿੰਘ ਨੇ ਲੰਡਨ ਵਿੱਚ 13 ਮਾਰਚ 1940 ਨੂੰ ਮਾਈਕਲ ਓ'ਡਵਾਇਰ ਨੂੰ ਮਾਰਿਆ। ਭਗਤ ਸਿੰਘ (1907-1931): HSRA, ਅਸੈਂਬਲੀ ਬੰਬ ਕਾਂਡ 8 ਅਪ੍ਰੈਲ 1929, ਸ਼ਹਾਦਤ 23 ਮਾਰਚ 1931 (ਰਾਜਗੁਰੂ ਅਤੇ ਸੁਖਦੇਵ ਸਮੇਤ), ਲਾਹੌਰ ਸੈਂਟਰਲ ਜੇਲ੍ਹ।</p></div>`,

      en: `<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">1. Banda Singh Bahadur (1670–1716)</h3><p class="text-slate-300 text-sm leading-relaxed">Born Lachhman Das/Madho Das; became a Vaishnava bairagi. Met Guru Gobind Singh Ji at Nanded (Maharashtra) in 1707; initiated into Khalsa, given name 'Banda Singh Bahadur', Hukamnamas (orders), and 5 Sikhs as companions. Battle of Chappar Chiri (1710): defeated Wazir Khan (Nawab of Sirhind, responsible for the martyrdom of the two younger Sahibzadas). First major Khalsa military victory. Conquered Sirhind; abolished Zamindari system, distributed land to peasants — India's first land reform. Established Lohgarh Fort at Mukhlispur near Nahan (Himachal Pradesh). Martyrdom: 9 June 1716 at Mehrauli, Delhi — brutally tortured and killed along with infant son Ajai Singh. Exemplar of fearless resistance.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">2. Persecutions, Ghallugharas and Dal Khalsa</h3><p class="text-slate-300 text-sm leading-relaxed">Zakariya Khan (1726–1745): Mughal Governor; placed bounty on Sikh heads. Baba Mani Singh Ji (1734): joints cut off joint by joint — martyrdom. Massa Ranghar desecrated Harmandir Sahib (1740): Bhai Sukha Singh and Mehtab Singh killed him — celebrated act of Sikh valour. Chhota Ghallughara (1746): ~3000 Sikhs martyred in Loha forests. Ahmad Shah Durrani/Abdali's 8 invasions (1748–1767): looted Punjab. Vadda Ghallughara (February 1762): ~40,000 Sikhs killed by Ahmad Shah Abdali in one day at Kuppa Rohira. Khalsa reassembled at Akal Takht that same Diwali. Dal Khalsa: organised 1748 by Nawab Kapur Singh Virk (Faizalpuria Misal). Budda Dal (veterans) + Taruna Dal (youth). Jassa Singh Ahluwalia — Commander-in-Chief of Dal Khalsa. Sarbat Khalsa: all-Khalsa assembly at Akal Takht on Vaisakhi/Diwali. Gurmata — collective decision.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">3. Maharaja Ranjit Singh (1780–1839)</h3><p class="text-slate-300 text-sm leading-relaxed">Born 13 November 1780, Gujranwala (Pakistan). Father: Maha Singh (Sukerchakia Misl). Title: 'Sher-e-Punjab' (Lion of Punjab). Key events: 1799 — seized Lahore from Bhangi Misal; founded Sikh Empire. 1802 — conquered Amritsar. Treaty of Amritsar 1809 (with British EIC) — Sutlej River as boundary; Ranjit Singh got free hand in Punjab north of Sutlej. 1819 — Kashmir conquered. 1834 — Peshawar captured. 1835 — Koh-i-noor diamond acquired. Administration: secular court — Hindus (Dogra brothers: Dhian Singh as PM), Muslims (Fakir Azizuddin as Foreign Minister), Europeans (French Generals Ventura and Allard trained Fauj-i-Khas — regular European-style army). Just revenue system. Death: 27 June 1839 → succession chaos.</p></div>
<div class="space-y-4 mb-5"><h3 class="text-lg font-bold text-white mb-2">4. Anglo-Sikh Wars & Punjab Annexation</h3><p class="text-slate-300 text-sm leading-relaxed">First Anglo-Sikh War 1845–46: Battles of Mudki (18 Dec 1845), Firozshah, Aliwal, Sabraon. Treaty of Lahore 1846 — Khalsa lost territory and war indemnity. Treaty of Amritsar 1846 — Kashmir sold to Gulab Singh Dogra for ₹75 lakh. Second Anglo-Sikh War 1848–49: Battle of Chillianwala (13 Jan 1849) and Battle of Gujarat (21 Feb 1849). 31 March 1849: Lord Dalhousie (Doctrine of Lapse) annexed Punjab to British India. John Lawrence and Henry Lawrence as commissioners. Ghadar Party 1913: Lala Hardayal and Sohan Singh Bhakna — founded in San Francisco. Komagata Maru 1914 — Canadian immigration exclusion of Sikh passengers. Jallianwala Bagh Massacre, 13 April 1919 (Baisakhi day): General Dyer ordered firing on unarmed crowd — 379 officially killed (actual ~1000). Michael O'Dwyer (Lieutenant Governor). Udham Singh killed O'Dwyer in London, 13 March 1940. Bhagat Singh (28 Sep 1907 – 23 Mar 1931): HSRA (Hindustan Socialist Republican Association). Assembly bomb case 8 April 1929. Lahore Conspiracy Case. Hanged 23 March 1931 at Lahore Central Jail along with Rajguru and Sukhdev.</p></div>`,
    },
    summary: {
      hi: "बंदा सिंह बहादुर: चप्पड़चिड़ी 1710, ज़मींदारी उन्मूलन, शहादत 1716। वड्डा घल्लूघारा 1762। 12 मिसलें: दल खालसा नेतृत्व। रणजीत सिंह: लाहौर 1799, अमृतसर संधि 1809, शेर-ए-पंजाब। पंजाब विलय 1849 — लॉर्ड डलहौजी। जलियाँवाला बाग 1919। भगत सिंह शहादत 23 मार्च 1931।",
      pa: "ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ: ਚੱਪੜਚਿੜੀ 1710, ਸ਼ਹਾਦਤ 1716। ਵੱਡਾ ਘੱਲੂਘਾਰਾ 1762। 12 ਮਿਸਲਾਂ। ਰਣਜੀਤ ਸਿੰਘ: ਲਾਹੌਰ 1799, ਸੰਧੀ 1809। ਪੰਜਾਬ ਮਿਲਾਉਣਾ 1849। ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ 1919। ਭਗਤ ਸਿੰਘ ਸ਼ਹਾਦਤ 23 ਮਾਰਚ 1931।",
      en: "Banda Singh Bahadur: Chappar Chiri 1710, zamindari abolished, martyrdom 1716. Vadda Ghallughara 1762 (~40,000 martyred). 12 Misls under Dal Khalsa. Ranjit Singh: Lahore 1799, Treaty of Amritsar 1809, Lion of Punjab. Punjab annexed 1849 by Lord Dalhousie. Jallianwala Bagh 1919. Bhagat Singh martyred 23 March 1931.",
    },
    keyNotes: {
      hi: [
        "बंदा सिंह बहादुर — मूल नाम माधो दास; 1707 में गुरु गोबिंद सिंह जी से मिले",
        "चप्पड़चिड़ी (1710) — पहली खालसा सैन्य जीत, सरहिंद फतह",
        "बंदा सिंह बहादुर ने ज़मींदारी समाप्त कर भूमि किसानों को दी — पहला भूमि सुधार",
        "बंदा सिंह बहादुर की शहादत 9 जून 1716 — महरौली, दिल्ली",
        "वड्डा घल्लूघारा 1762 — अहमद शाह अब्दाली ने ~40,000 सिख शहीद किए",
        "दल खालसा 1748 — नवाब कपूर सिंह; जस्सा सिंह अहलूवालिया — कमांडर",
        "महाराजा रणजीत सिंह का जन्म 13 नवम्बर 1780, गुजरांवाला",
        "अमृतसर की संधि 1809 — सतलुज को सीमा माना गया",
        "1819 — कश्मीर और 1834 — पेशावर जीता",
        "31 मार्च 1849 — लॉर्ड डलहौजी ने पंजाब को ब्रिटिश राज में मिलाया",
        "गदर पार्टी 1913 — लाला हरदयाल, सोहन सिंह भकना — सैन फ्रांसिस्को",
        "जलियाँवाला बाग — 13 अप्रैल 1919, जनरल डायर, 379 आधिकारिक मौतें",
        "उधम सिंह — 13 मार्च 1940 को लंदन में माइकल ओ'डायर को मारा",
        "भगत सिंह — HSRA, असेम्बली बम 8 अप्रैल 1929, शहादत 23 मार्च 1931",
        "12 मिसलें: अहलूवालिया, भंगी, रामगढ़िया, कन्हैया, सुकरचकिया (रणजीत सिंह का), फुलकियाँ",
      ],
      pa: [
        "ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ — ਮੂਲ ਨਾਮ ਮਾਧੋ ਦਾਸ; 1707 ਨਾਂਦੇੜ ਵਿੱਚ ਗੁਰੂ ਜੀ ਨੂੰ ਮਿਲੇ",
        "ਚੱਪੜਚਿੜੀ 1710 — ਵਜ਼ੀਰ ਖਾਂ ਹਾਰਿਆ, ਸਰਹਿੰਦ ਫਤਿਹ",
        "ਵੱਡਾ ਘੱਲੂਘਾਰਾ 1762 — ~40,000 ਸਿੱਖ ਸ਼ਹੀਦ",
        "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ: ਜਨਮ 13 ਨਵੰਬਰ 1780, ਗੁਜਰਾਂਵਾਲਾ",
        "ਅੰਮ੍ਰਿਤਸਰ ਸੰਧੀ 1809 — ਸਤਲੁਜ ਸੀਮਾ",
        "ਪੰਜਾਬ ਮਿਲਾਉਣਾ 31 ਮਾਰਚ 1849 — ਲਾਰਡ ਡਲਹੌਜ਼ੀ",
        "ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ 13 ਅਪ੍ਰੈਲ 1919 — ਜਨਰਲ ਡਾਇਰ, 379 ਸਰਕਾਰੀ ਮੌਤਾਂ",
        "ਭਗਤ ਸਿੰਘ ਸ਼ਹਾਦਤ 23 ਮਾਰਚ 1931 — ਰਾਜਗੁਰੂ, ਸੁਖਦੇਵ ਸਮੇਤ",
      ],
      en: [
        "Banda Singh Bahadur: born Madho Das; met Guru Gobind Singh Ji at Nanded 1707",
        "Battle of Chappar Chiri 1710: first Khalsa military victory; Sirhind conquered",
        "Banda Singh abolished zamindari; distributed land to peasants — India's first land reform",
        "Banda Singh martyred 9 June 1716 at Mehrauli, Delhi",
        "Vadda Ghallughara 1762: ~40,000 Sikhs martyred by Ahmad Shah Abdali",
        "Dal Khalsa 1748: Nawab Kapur Singh; Jassa Singh Ahluwalia — Commander-in-Chief",
        "Maharaja Ranjit Singh born 13 November 1780, Gujranwala",
        "Treaty of Amritsar 1809 — Sutlej River as boundary with British EIC",
        "Kashmir conquered 1819; Peshawar conquered 1834",
        "Punjab annexed 31 March 1849 by Lord Dalhousie",
        "Ghadar Party 1913 — Lala Hardayal, Sohan Singh Bhakna, San Francisco",
        "Jallianwala Bagh 13 April 1919 — Gen. Dyer; 379 officially killed",
        "Udham Singh killed Michael O'Dwyer in London on 13 March 1940",
        "Bhagat Singh (HSRA): Assembly bomb 8 April 1929; martyred 23 March 1931",
        "12 Misls include: Ahluwalia, Bhangi, Ramgarhia, Kanhaiya, Sukerchakia (Ranjit Singh's), Phulkian",
      ],
    },
    flashcards: [
      { q: { hi: "बंदा सिंह बहादुर का मूल नाम क्या था?", pa: "ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਦਾ ਅਸਲ ਨਾਮ ਕੀ ਸੀ?", en: "What was Banda Singh Bahadur's original name?" }, a: { hi: "लक्ष्मण दास / माधो दास।", pa: "ਲਛਮਣ ਦਾਸ / ਮਾਧੋ ਦਾਸ।", en: "Lachhman Das / Madho Das." } },
      { q: { hi: "चप्पड़चिड़ी की लड़ाई (1710) में बंदा सिंह ने किसे पराजित किया?", pa: "ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ 1710 ਵਿੱਚ ਬੰਦਾ ਸਿੰਘ ਨੇ ਕਿਸਨੂੰ ਹਰਾਇਆ?", en: "Whom did Banda Singh defeat at Chappar Chiri (1710)?" }, a: { hi: "वज़ीर खान — सरहिंद का नवाब (छोटे साहिबजादों का हत्यारा)।", pa: "ਵਜ਼ੀਰ ਖਾਂ — ਸਰਹਿੰਦ ਦਾ ਨਵਾਬ।", en: "Wazir Khan — Nawab of Sirhind (killer of the younger Sahibzadas)." } },
      { q: { hi: "वड्डा घल्लूघारा कब और किसने किया?", pa: "ਵੱਡਾ ਘੱਲੂਘਾਰਾ ਕਦੋਂ ਅਤੇ ਕਿਸਨੇ ਕੀਤਾ?", en: "When was the Vadda Ghallughara and who carried it out?" }, a: { hi: "फरवरी 1762; अहमद शाह अब्दाली ने ~40,000 सिखों को शहीद किया।", pa: "ਫਰਵਰੀ 1762; ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ ਨੇ ~40,000 ਸਿੱਖਾਂ ਨੂੰ ਸ਼ਹੀਦ ਕੀਤਾ।", en: "February 1762; Ahmad Shah Abdali massacred ~40,000 Sikhs." } },
      { q: { hi: "दल खालसा का गठन किसने और कब किया?", pa: "ਦਲ ਖਾਲਸਾ ਕਿਸਨੇ ਅਤੇ ਕਦੋਂ ਬਣਾਇਆ?", en: "Who founded Dal Khalsa and when?" }, a: { hi: "नवाब कपूर सिंह विर्क ने 1748 में।", pa: "ਨਵਾਬ ਕਪੂਰ ਸਿੰਘ ਵਿਰਕ ਨੇ 1748 ਵਿੱਚ।", en: "Nawab Kapur Singh Virk in 1748." } },
      { q: { hi: "महाराजा रणजीत सिंह का जन्म कहाँ और कब हुआ?", pa: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਜਨਮ ਕਦੋਂ ਅਤੇ ਕਿੱਥੇ ਹੋਇਆ?", en: "When and where was Maharaja Ranjit Singh born?" }, a: { hi: "13 नवम्बर 1780, गुजरांवाला (पाकिस्तान में)।", pa: "13 ਨਵੰਬਰ 1780, ਗੁਜਰਾਂਵਾਲਾ (ਪਾਕਿਸਤਾਨ)।", en: "13 November 1780, Gujranwala (now Pakistan)." } },
      { q: { hi: "अमृतसर की संधि 1809 में क्या तय हुआ?", pa: "ਅੰਮ੍ਰਿਤਸਰ ਸੰਧੀ 1809 ਵਿੱਚ ਕੀ ਫੈਸਲਾ ਹੋਇਆ?", en: "What was agreed in the Treaty of Amritsar (1809)?" }, a: { hi: "सतलुज नदी को भारत और अंग्रेजों के बीच सीमा माना गया।", pa: "ਸਤਲੁਜ ਦਰਿਆ ਨੂੰ ਭਾਰਤ ਅਤੇ ਅੰਗਰੇਜ਼ਾਂ ਵਿਚਕਾਰ ਸੀਮਾ ਮੰਨਿਆ।", en: "Sutlej River was fixed as the boundary between Ranjit Singh's empire and British India." } },
      { q: { hi: "पंजाब का ब्रिटिश साम्राज्य में विलय कब और किसने किया?", pa: "ਪੰਜਾਬ ਨੂੰ ਬ੍ਰਿਟਿਸ਼ ਰਾਜ ਵਿੱਚ ਕਦੋਂ ਅਤੇ ਕਿਸਨੇ ਮਿਲਾਇਆ?", en: "When and by whom was Punjab annexed into British India?" }, a: { hi: "31 मार्च 1849; लॉर्ड डलहौजी।", pa: "31 ਮਾਰਚ 1849; ਲਾਰਡ ਡਲਹੌਜ਼ੀ।", en: "31 March 1849 by Lord Dalhousie." } },
      { q: { hi: "गदर पार्टी की स्थापना कहाँ, कब और किसने की?", pa: "ਗਦਰ ਪਾਰਟੀ ਕਿੱਥੇ, ਕਦੋਂ ਅਤੇ ਕਿਸਨੇ ਸਥਾਪਿਤ ਕੀਤੀ?", en: "Where, when, and by whom was the Ghadar Party founded?" }, a: { hi: "1913, सैन फ्रांसिस्को — लाला हरदयाल और सोहन सिंह भकना।", pa: "1913, ਸੈਨ ਫਰਾਂਸਿਸਕੋ — ਲਾਲਾ ਹਰਦਿਆਲ ਅਤੇ ਸੋਹਨ ਸਿੰਘ ਭਕਨਾ।", en: "1913, San Francisco — Lala Hardayal and Sohan Singh Bhakna." } },
      { q: { hi: "जलियाँवाला बाग हत्याकांड कब हुआ और कितने लोग मारे गए?", pa: "ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ ਕਾਂਡ ਕਦੋਂ ਹੋਇਆ?", en: "When did the Jallianwala Bagh massacre occur and how many died officially?" }, a: { hi: "13 अप्रैल 1919 (बैसाखी); आधिकारिक: 379 मृत।", pa: "13 ਅਪ੍ਰੈਲ 1919 (ਬੈਸਾਖੀ); ਸਰਕਾਰੀ: 379 ਮੌਤਾਂ।", en: "13 April 1919 (Baisakhi); officially 379 killed." } },
      { q: { hi: "उधम सिंह ने माइकल ओ'डायर को कब और कहाँ मारा?", pa: "ਊਧਮ ਸਿੰਘ ਨੇ ਮਾਈਕਲ ਓ'ਡਵਾਇਰ ਨੂੰ ਕਦੋਂ ਅਤੇ ਕਿੱਥੇ ਮਾਰਿਆ?", en: "When and where did Udham Singh kill Michael O'Dwyer?" }, a: { hi: "13 मार्च 1940, लंदन (Caxton Hall)।", pa: "13 ਮਾਰਚ 1940, ਲੰਡਨ (Caxton Hall)।", en: "13 March 1940 at Caxton Hall, London." } },
      { q: { hi: "भगत सिंह ने असेम्बली में बम कब फेंका और उनकी शहादत कब हुई?", pa: "ਭਗਤ ਸਿੰਘ ਨੇ ਅਸੈਂਬਲੀ ਵਿੱਚ ਬੰਬ ਕਦੋਂ ਸੁੱਟਿਆ ਅਤੇ ਸ਼ਹਾਦਤ ਕਦੋਂ ਹੋਈ?", en: "When did Bhagat Singh throw the bomb in the Assembly and when was he martyred?" }, a: { hi: "8 अप्रैल 1929 (बम); 23 मार्च 1931 (शहादत — राजगुरु और सुखदेव के साथ)।", pa: "8 ਅਪ੍ਰੈਲ 1929 (ਬੰਬ); 23 ਮਾਰਚ 1931 (ਸ਼ਹਾਦਤ — ਰਾਜਗੁਰੂ, ਸੁਖਦੇਵ ਸਮੇਤ)।", en: "Assembly bomb: 8 April 1929; Martyrdom: 23 March 1931 (with Rajguru and Sukhdev)." } },
      { q: { hi: "12 मिसलों में से सुकरचकिया मिसल का संबंध किससे है?", pa: "12 ਮਿਸਲਾਂ ਵਿੱਚੋਂ ਸੁਕਰਚੱਕੀਆ ਮਿਸਲ ਕਿਸ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ?", en: "Which Misl does Maharaja Ranjit Singh belong to?" }, a: { hi: "ਸੁਕਰਚੱਕੀਆ ਮਿਸਲ — ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਪਿਤਾ ਮਹਾ ਸਿੰਘ ਇਸ ਮਿਸਲ ਦੇ ਸਰਦਾਰ ਸਨ।", pa: "ਸੁਕਰਚੱਕੀਆ ਮਿਸਲ।", en: "Sukerchakia Misl — Ranjit Singh's father Maha Singh was its chief." } },
      { q: { hi: "मस्सा रंघड़ को किसने मारा और क्यों?", pa: "ਮੱਸਾ ਰੰਘੜ ਨੂੰ ਕਿਸਨੇ ਅਤੇ ਕਿਉਂ ਮਾਰਿਆ?", en: "Who killed Massa Ranghar and why?" }, a: { hi: "भाई सुखा सिंह और मेहताब सिंह ने; हरमंदिर साहिब में बेअदबी के कारण (1740)।", pa: "ਭਾਈ ਸੁਖਾ ਸਿੰਘ ਅਤੇ ਮਹਿਤਾਬ ਸਿੰਘ ਨੇ; ਹਰਮੰਦਰ ਸਾਹਿਬ ਵਿੱਚ ਬੇਅਦਬੀ ਕਾਰਨ (1740)।", en: "Bhai Sukha Singh and Mehtab Singh; for desecrating Harmandir Sahib (1740)." } },
    ],
    videos: [
      { title: "Banda Singh Bahadur Complete History", channel: "Sikh History Channel", youtubeId: "BandaSinghHist", language: "pa", views: "500K", duration: "45:30" },
      { title: "Maharaja Ranjit Singh Empire", channel: "StudyIQ Punjab History", youtubeId: "RanjitSinghEmp", language: "hi", views: "1.2M", duration: "52:00" },
      { title: "Anglo-Sikh Wars and Punjab Annexation", channel: "History with Mani", youtubeId: "AngloSikhWars", language: "hi", views: "900K", duration: "40:15" },
      { title: "Bhagat Singh Complete Story | Punjab", channel: "Exampur Punjab", youtubeId: "BhagatSinghFull", language: "hi", views: "2.1M", duration: "35:20" },
    ],
    bookRefs: [
      { title: "PSEB Punjab History and Culture (Class 9-10)", author: "PSEB", chapters: "Unit 3 — Sikh Misls and Ranjit Singh" },
      { title: "History of Punjab by Fauja Singh", author: "Punjabi University Patiala", chapters: "Vol. 4 — Banda Singh to Ranjit Singh" },
    ],
    documents: [
      { title: "PSEB Class 9 Punjab History Textbook", url: "https://static.pseb.ac.in/media/Punjab_History_9.pdf", type: "pdf", language: "English / Punjabi / Hindi" },
      { title: "ERD Punjab Master Cadre SST Syllabus", url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf", type: "pdf", language: "English / Punjabi / Hindi" },
    ],
    syllabusReference: {
      title: "Punjab Master Cadre Social Science syllabus, 2022",
      url: "https://erd.punjab.gov.in/master2022/Docs/SocialSciencesyllabus04_05_2022.pdf",
      examName: "Punjab Master Cadre SST",
      body: "Education Recruitment Board (ERB), Punjab",
      verifiedOn: "15 March 2024"
    },
  },
};
