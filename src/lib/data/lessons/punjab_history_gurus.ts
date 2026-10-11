import type { Lesson } from './types';

// ============================================================================
// PUNJAB HISTORY & SIKH GURUS — DEEP-DIVE CURRICULUM PACKAGES
// Comprehensive Academic-Grade Lessons in English, Punjabi & Hindi
// Prescribed for Punjab Master Cadre (SST), PSSSB Clerk, ETT & Patwari
// ============================================================================

export const PUNJAB_HISTORY_GURUS_LESSONS: Record<string, Lesson> = {
  // ==========================================================================
  // TOPIC 1: SRI GURU NANAK DEV JI (1469 - 1539)
  // ==========================================================================
  'guru-nanak-dev-ji': {
    id: 'guru-nanak-dev-ji',
    topicId: 'guru-nanak-dev-ji',
    subjectId: 'social-science',
    category: 'history',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Sri Guru Nanak Dev Ji (1469–1539): Life, Four Udasis, Bani & Philosophy',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (1469–1539): ਜੀਵਨ, ਚਾਰ ਉਦਾਸੀਆਂ, ਬਾਣੀ ਅਤੇ ਫ਼ਲਸਫ਼ਾ',
      hi: 'श्री गुरु नानक देव जी (1469–1539): जीवन, चार उदासियां, बाणी एवं दर्शन',
    },
    examRelevance: 'Punjab Master Cadre SST (3–4 Qs), PSSSB Clerk (2–3 Qs), Punjab ETT, Patwari & Police',
    estimatedTime: '45 mins',
    prerequisites: {
      en: [
        'Political and socio-religious landscape of 15th–16th century Punjab under the Lodi Sultanate (Bahlul Lodi, Sikandar Lodi, Ibrahim Lodi) and Babur’s Mughal invasions.',
        'Understanding of the Bhakti Movement and Sufi traditions that challenged caste orthodoxy and empty ritualism.',
      ],
      pa: [
        '15ਵੀਂ-16ਵੀਂ ਸਦੀ ਦੇ ਪੰਜਾਬ ਦੀ ਰਾਜਨੀਤਿਕ ਹਾਲਤ (ਲੋਧੀ ਵੰਸ਼: ਬਹਿਲੋਲ ਲੋਧੀ, ਸਿਕੰਦਰ ਲੋਧੀ, ਇਬਰਾਹਿਮ ਲੋਧੀ ਅਤੇ ਬਾਬਰ ਦੇ ਹਮਲੇ)।',
        'ਮੱਧਕਾਲੀ ਭਗਤੀ ਲਹਿਰ ਅਤੇ ਸੂਫ਼ੀ ਪਰੰਪਰਾਵਾਂ ਦੁਆਰਾ ਜਾਤ-ਪਾਤ ਅਤੇ ਕਰਮਕਾਂਡਾਂ ਦੇ ਵਿਰੋਧ ਦੀ ਮੁੱਢਲੀ ਸਮਝ।',
      ],
      hi: [
        '15वीं–16वीं शताब्दी के पंजाब की राजनीतिक स्थिति (लोदी वंश: बहलोल लोदी, सिकंदर लोदी, इब्राहिम लोदी तथा बाबर के आक्रमण)।',
        'मध्यकालीन भक्ति आंदोलन और सूफी परंपराओं द्वारा जातिवाद व कर्मकांडों के विरोध की समझ।',
      ],
    },
    learningObjectives: {
      en: [
        'Chronicle the early life of Sri Guru Nanak Dev Ji at Talwandi (Nankana Sahib) and Sultanpur Lodhi, including the Kali Bein enlightenment.',
        'Map all Four Udasis (missionary journeys) across directional routes, sacred dialogues, and historical rulers encountered.',
        'Analyze the three foundational pillars (Naam Japna, Kirat Karo, Wand Chhako) and social institutions (Sangat, Pangat, Langar, Dharamsal).',
        'Identify Guru Nanak Dev Ji’s 974 hymns across 19 Raags, including Japji Sahib, Asa di Var, Sidh Gosht, Baburvani, and Barah Maha.',
        'Explain the historical significance of Kartarpur Sahib and the succession of Bhai Lehna Ji as Guru Angad Dev Ji in 1539.',
      ],
      pa: [
        'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਤਲਵੰਡੀ (ਨਨਕਾਣਾ ਸਾਹਿਬ) ਅਤੇ ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ ਦੇ ਜੀਵਨ ਅਤੇ ਵੇਈਂ ਨਦੀ ਦੇ ਗਿਆਨ ਪ੍ਰਾਪਤੀ ਪ੍ਰਸੰਗ ਨੂੰ ਸਮਝਣਾ।',
        'ਚਾਰ ਉਦਾਸੀਆਂ (ਪੂਰਬ, ਦੱਖਣ, ਉੱਤਰ, ਪੱਛਮ) ਦੇ ਮਾਰਗਾਂ, ਇਤਿਹਾਸਕ ਸਥਾਨਾਂ ਅਤੇ ਸੰਵਾਦਾਂ ਦਾ ਵੇਰਵਾ ਜਾਣਨਾ।',
        'ਸਿੱਖ ਧਰਮ ਦੇ ਤਿੰਨ ਬੁਨਿਆਦੀ ਸਿਧਾਂਤਾਂ (ਨਾਮ ਜਪਣਾ, ਕਿਰਤ ਕਰਨੀ, ਵੰਡ ਛਕਣਾ) ਅਤੇ ਸੰਸਥਾਵਾਂ (ਸੰਗਤ, ਪੰਗਤ, ਲੰਗਰ, ਧਰਮਸਾਲ) ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
        '19 ਰਾਗਾਂ ਵਿੱਚ ਦਰਜ 974 ਸ਼ਬਦਾਂ ਅਤੇ ਪ੍ਰਮੁੱਖ ਬਾਣੀਆਂ (ਜਪੁਜੀ ਸਾਹਿਬ, ਆਸਾ ਦੀ ਵਾਰ, ਸਿੱਧ ਗੋਸ਼ਟਿ, ਬਾਬਰਵਾਣੀ, ਬਾਰਹ ਮਾਹਾ) ਦੀ ਪਛਾਣ ਕਰਨਾ।',
        'ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ ਅਤੇ 1539 ਵਿੱਚ ਭਾਈ ਲਹਿਣਾ ਜੀ (ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ) ਨੂੰ ਗੁਰਗੱਦੀ ਸੌਂਪਣ ਦੇ ਇਤਿਹਾਸਕ ਮਹੱਤਵ ਨੂੰ ਸਮਝਣਾ।',
      ],
      hi: [
        'श्री गुरु नानक देव जी के तलवंडी (ननकाना साहिब) व सुल्तानपुर लोधी के प्रारंभिक जीवन तथा काली बेईं नदी के ज्ञान प्राप्ति प्रसंग को समझना।',
        'चारों उदासियों (पूर्व, दक्षिण, उत्तर, पश्चिम) के मार्गों, प्रमुख संवादों और ऐतिहासिक स्थलों का सटीक मानचित्रण करना।',
        'सिख दर्शन के तीन स्तंभों (नाम जपना, कीरत करना, वंड छकना) तथा प्रमुख संस्थाओं (संगत, पंगत, लंगर, धर्मसाल) का विश्लेषण करना।',
        '19 रागों में रचित 974 शब्दों तथा प्रमुख बाणियों (जपुजी साहिब, आसा दी वार, सिद्ध गोष्ठ, बाबरवाणी, बारह माहा) का अध्ययन करना।',
        'करतारपुर साहिब की स्थापना और 1539 में भाई लहणा जी (गुरु अंगद देव जी) के उत्तराधिकार के महत्व को जानना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌟 1. Early Life & Family Background (1469–1499)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              <strong>Sri Guru Nanak Dev Ji</strong>, the founder of Sikhism and the first of the Ten Sikh Gurus, was born on <strong>15 April 1469</strong> (celebrated traditionally on Kartik Purnima) at <strong>Rai Bhoi di Talwandi</strong> (now known as <strong>Nankana Sahib</strong> in Sheikhupura district, Pakistan).
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Parents & Lineage:</strong> Born into the Bedi Khatri clan to father <strong>Mehta Kalu Ji</strong> (Kalyan Chand Das Bedi, a village revenue patwari under Muslim feudal chief <strong>Rai Bular Bhatti</strong>) and mother <strong>Mata Tripta Ji</strong>.</li>
              <li><strong>Family:</strong> Elder sister <strong>Bebe Nanaki Ji</strong> (first person to recognize Guru Ji's spiritual greatness; married to Jai Ram at Sultanpur Lodhi). Married <strong>Mata Sulakhni Ji</strong> (daughter of Mul Chand Chona of Batala) in 1487 CE. They had two sons: <strong>Baba Sri Chand</strong> (born 1494, who later founded the ascetic <em>Udasi sect</em>) and <strong>Baba Lakhmi Das</strong> (born 1497).</li>
              <li><strong>Childhood Incidents:</strong>
                <br/>• <em>Teachers:</em> Studied Hindi/Arithmetic with Pandit Gopal, Sanskrit with Pandit Brij Nath, and Persian/Arabic with Maulvi Qutb-ud-din.
                <br/>• <em>Refusal of Janeu (Sacred Thread):</em> At age 9, when family priest <strong>Pandit Hardyal</strong> came to invest him with the sacred thread, Guru Nanak recited the famous hymn: <em>"Daya kapah santokh soot, jat gandhi sat vatt"</em> (Make compassion the cotton, contentment the thread, modesty the knot, and truth the twist).
                <br/>• <em>Sacha Sauda (True Bargain):</em> Mehta Kalu gave him <strong>20 rupees</strong> to conduct a profitable trade at Chuharkana; Guru Nanak spent the entire sum feeding hungry mendicants (Sadhus), calling it <em>Sacha Sauda</em> (now Gurdwara Sacha Sauda).
              </li>
              <li><strong>Sultanpur Lodhi & Kali Bein Enlightenment (c. 1499):</strong> At the invitation of brother-in-law Jai Ram, Guru Ji moved to <strong>Sultanpur Lodhi</strong> and worked as storekeeper in the <strong>Modikhana</strong> (state granary) of <strong>Nawab Daulat Khan Lodhi</strong>. While weighing grain, upon reaching the number 13 (<em>Tera</em> — meaning both "thirteen" and "I am Thine, O Lord"), he entered deep spiritual absorption. At age 30 (c. 1499), while bathing in the <strong>Kali Bein</strong> rivulet, he disappeared for three days, experienced direct communion with Akal Purakh, revealed the <strong>Mool Mantar</strong> (<em>Ik Onkar Satnam Kartapurakh...</em>), and uttered his first historic proclamation: <strong>"Na Koi Hindu, Na Koi Musalman"</strong> (Before God, all human beings are equal beyond sectarian labels).</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">🗺️ 2. The Four Udasis (Missionary Journeys, c. 1500–1521)</h3>
            <p class="text-slate-300 text-sm mb-3">
              Accompanied by his lifelong companion <strong>Bhai Mardana</strong> (a Muslim minstrel who played the <em>Rabab</em>), Guru Nanak Dev Ji undertook four extensive missionary journeys (<em>Udasis</em>) spanning over 28,000 km across Asia to dispel superstition, caste arrogance, and hypocrisy:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-amber-400 font-bold text-sm mb-1.5">1️⃣ First Udasi — East & South-East (c. 1500–1506)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Saidpur (Eminabad):</strong> Stayed with humble low-caste carpenter <strong>Bhai Lalo</strong> and declined the sumptuous feast of corrupt official <strong>Malik Bhago</strong>, demonstrating that Lalo's coarse bread contained the "milk of honest labor" while Bhago's rich food contained the "blood of the poor."</li>
                  <li><strong>Talumba (Multan):</strong> Reformed the notorious robber <strong>Sajjan Thug</strong> into a true devotee (first Dharamsal built there).</li>
                  <li><strong>Kurukshetra & Haridwar:</strong> At Kurukshetra (solar eclipse fair) and Haridwar (Ganga), when priests threw water towards the rising sun in the East for ancestors, Guru Ji threw water towards the <strong>West</strong> (claiming to water his fields in Kartarpur/Punjab), exposing hollow ritualism.</li>
                  <li><strong>Gorakhmata (Nanakmata), Banaras, Gaya, Kamrup & Puri:</strong> Debated Siddhas at Gorakhmata; Pandit Chatur Das at Banaras; reformed sorceress <strong>Nurshah</strong> in Kamrup (Assam); and at <strong>Jagannath Puri</strong> (Odisha), composed the cosmic Aarti: <em>"Gagan mein thaal, rav chand deepak bane..."</em></li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-emerald-400 font-bold text-sm mb-1.5">2️⃣ Second Udasi — South to Sri Lanka (c. 1506–1513)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Route:</strong> Sirsa, Bikaner, Ajmer (Pushkar), Mount Abu, Ujjain, Nanded, Bidar (Karnataka — where he touched a rock to release fresh drinking water, celebrated as <strong>Gurdwara Nanak Jhira Sahib</strong>), Rameshwaram.</li>
                  <li><strong>Sangladip (Ceylon / Sri Lanka):</strong> Visited Jaffna and Batticaloa during the reign of <strong>King Shivnabh</strong>, establishing a Sangat recommended Earlier by merchant Mansukh.</li>
                  <li><strong>Return via Western Coast:</strong> Returned through Somnath, Dwarka, Sindh, and Pakpattan (where he held spiritual discussions with <strong>Sheikh Brahm / Sheikh Ibrahim</strong>, 12th descendant of Baba Farid, preserving Baba Farid's saloks).</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-sky-400 font-bold text-sm mb-1.5">3️⃣ Third Udasi — North & Himalayas (c. 1514–1518)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Route:</strong> Himachal Pradesh (Kangra, Jwalamukhi, Kullu, Manikaran), Kashmir, Ladakh (<strong>Gurdwara Pathar Sahib</strong> at Leh), and Tibet.</li>
                  <li><strong>Mattan (Kashmir):</strong> Transformed arrogant Sanskrit scholar <strong>Pandit Brahm Das</strong> (who walked with two camel-loads of scriptures) to spiritual humility.</li>
                  <li><strong>Mount Sumeru (Kailash-Mansarovar):</strong> Held the historic philosophical dialogue with the <strong>84 Siddhas</strong> (Gorakhnath, Charpatnath, Bhangarnath, Loharipa), recorded in the celebrated Bani <strong>Sidh Gosht</strong> (Raag Ramkali), rejecting escapist forest renunciation in favor of living purely amidst the world like a lotus in water.</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-purple-400 font-bold text-sm mb-1.5">4️⃣ Fourth Udasi — West & Islamic World (c. 1518–1521)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Mecca & Medina:</strong> Dressed in the blue robes of a Hajj pilgrim carrying a staff and ablution pot; at <strong>Mecca</strong>, when <strong>Qazi Rukn-ud-din</strong> (and Jiwan) objected to his sleeping with feet pointing toward the Kaaba, Guru Ji asked him to turn his feet in a direction where God is not present—teaching God's omnipresence.</li>
                  <li><strong>Baghdad (Iraq):</strong> Held spiritual discourse with <strong>Pir Dastgir</strong> and <strong>Sheikh Bahlol Dana</strong> on the existence of countless universes (<em>"Patala patal lakh agasa agas"</em>).</li>
                  <li><strong>Saidpur Invasion of Babur (1520–21):</strong> Witnessed Mughal conqueror <strong>Babur's third invasion</strong> and the brutal massacre of civilians at Saidpur (Eminabad); imprisoned briefly alongside Bhai Mardana; composed the poignant <strong>Baburvani</strong> (4 hymns in Asa and Tilang Raags), calling Babur's army a <em>"Paap ki Janj"</em> (marriage party of sin) and condemning the Lodi rulers as negligent hounds who ruined a priceless jewel (Hindustan).</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">🏛️ 3. Kartarpur Sahib (1521–1539), Three Pillars & Institutions</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2.5">
              <p>• <strong>Foundation of Kartarpur ("City of the Creator"):</strong> Established around 1521 CE on the right bank of <strong>River Ravi</strong> on land donated by millionaire devotee Karoria (Duni Chand). Here Guru Nanak shed his Udasi robes, wore the dress of an ordinary householder (<em>Grihastha</em>), and farmed the land himself for the final 18 years of his life.</p>
              <p>• <strong>Three Golden Pillars of Sikhism:</strong>
                <br/>1. <strong>Naam Japna:</strong> Constant remembrance and meditation on the One Formless God (<em>Ik Onkar</em>).
                <br/>2. <strong>Kirat Karo:</strong> Earning an honest livelihood through hard physical and mental labor, shunning begging, bribery, and exploitation.
                <br/>3. <strong>Wand Chhako:</strong> Sharing one's honest earnings with the poor and needy.
              </p>
              <p>• <strong>Transformative Social Institutions:</strong>
                <br/>- <strong>Sangat (Holy Congregation):</strong> Mixed assembly where people of all castes (Brahmin, Khatri, Shudra) and faiths sat together as equals to sing Kirtan.
                <br/>- <strong>Pangat & Langar (Community Kitchen):</strong> Sitting in a single unbroken row on the floor to eat food prepared collectively—striking a direct blow at caste untouchability.
                <br/>- <strong>Dharamsal:</strong> Network of spiritual centers for prayer and community welfare (later called <em>Gurdwaras</em> from the time of Guru Hargobind Ji).
              </p>
              <p>• <strong>Champion of Women's Dignity:</strong> Against medieval patriarchal disdain that labeled women impure, Guru Nanak proclaimed in <em>Asa di Var</em>: <strong>"So kyon manda aakhiye jit jammé rajan"</strong> (Why call her inferior who gives birth to kings and great men?).</p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">📜 4. Sacred Bani (974 Hymns in 19 Raags) & Succession (1539)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>Total Compositions:</strong> Guru Nanak Dev Ji composed <strong>974 hymns (Shabads/Saloks)</strong> across <strong>19 classical Raags</strong> preserved in Sri Guru Granth Sahib Ji (using the poetic signature <em>"Nanak"</em>).</p>
              <p>• <strong>Major Banis & Their Raags:</strong>
                <br/>1. <strong>Japji Sahib:</strong> Opening morning prayer of Guru Granth Sahib; Raag-free; starts with <em>Mool Mantar</em>, followed by <strong>38 Pauris (stanzas)</strong> and 2 Saloks; explains the <strong>5 Khands (Spiritual Realms)</strong>: <em>Dharam Khand, Gian Khand, Saram Khand, Karam Khand, and Sach Khand</em>.
                <br/>2. <strong>Asa di Var:</strong> 24 Pauris in Raag Asa (sung to the tune of the heroic ballad of <em>Tunda Asraja</em>).
                <br/>3. <strong>Sidh Gosht:</strong> 73 stanzas in <em>Raag Ramkali</em> detailing his philosophical debate with the Nath Yogis.
                <br/>4. <strong>Dakhni Oankar:</strong> 54 stanzas in <em>Raag Ramkali</em> (dialogue with Pandit Gopal at Omkaleshwar).
                <br/>5. <strong>Barah Maha:</strong> Composed in <strong>Raag Tukhari</strong> (depicting the soul's longing for God across the 12 months of the Bikrami calendar, starting with <em>Chet</em>; note: Guru Arjan Dev Ji later composed a second Barah Maha in <em>Raag Majh</em>).
                <br/>6. <strong>Patti:</strong> Acrostic poem in <em>Raag Asa</em> based on the 35 letters of the Gurmukhi alphabet.
                <br/>7. <strong>Varan (3 Vars):</strong> <em>Asa di Var, Majh ki Var,</em> and <em>Malar ki Var</em>.
              </p>
              <p>• <strong>Succession & Jyoti-Jot (22 September 1539):</strong> Bypassing his two biological sons who failed tests of humility and obedience, Guru Nanak Dev Ji selected his devoted disciple <strong>Bhai Lehna Ji</strong>, bowed before him by placing 5 paisa and a coconut, asked <strong>Baba Buddha Ji</strong> to apply the ceremonial tilak, and renamed him <strong>Guru Angad</strong> ("Limb of my very body"). Guru Nanak Dev Ji merged into the Eternal Light (<em>Jyoti-Jot</em>) at Kartarpur on <strong>22 September 1539</strong>.</p>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌟 1. ਮੁੱਢਲਾ ਜੀਵਨ ਅਤੇ ਪਰਿਵਾਰਕ ਪਿਛੋਕੜ (1469–1499)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਸਿੱਖ ਧਰਮ ਦੇ ਬਾਨੀ ਅਤੇ ਪਹਿਲੇ ਪਾਤਸ਼ਾਹ <strong>ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ</strong> ਦਾ ਪ੍ਰਕਾਸ਼ <strong>15 ਅਪ੍ਰੈਲ 1469</strong> (ਪਰੰਪਰਾ ਅਨੁਸਾਰ ਕੱਤਕ ਦੀ ਪੂਰਨਮਾਸ਼ੀ) ਨੂੰ <strong>ਰਾਇ ਭੋਇ ਦੀ ਤਲਵੰਡੀ</strong> (ਮੌਜੂਦਾ <strong>ਸ੍ਰੀ ਨਨਕਾਣਾ ਸਾਹਿਬ</strong>, ਜ਼ਿਲ੍ਹਾ ਸ਼ੇਖੂਪੁਰਾ, ਪਾਕਿਸਤਾਨ) ਵਿਖੇ ਹੋਇਆ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਮਾਤਾ-ਪਿਤਾ ਅਤੇ ਕੁਲ:</strong> ਬੇਦੀ ਖੱਤਰੀ ਕੁਲ ਵਿੱਚ ਪਿਤਾ <strong>ਮਹਿਤਾ ਕਾਲੂ ਜੀ</strong> (ਕਲਿਆਣ ਚੰਦ ਦਾਸ ਬੇਦੀ, ਜੋ ਭੱਟੀ ਮੁਸਲਮਾਨ ਸਰਦਾਰ <strong>ਰਾਇ ਬੁਲਾਰ</strong> ਦੇ ਪਟਵਾਰੀ ਸਨ) ਅਤੇ ਮਾਤਾ <strong>ਤ੍ਰਿਪਤਾ ਜੀ</strong> ਦੇ ਗ੍ਰਹਿ ਵਿਖੇ ਜਨਮ ਹੋਇਆ।</li>
              <li><strong>ਪਰਿਵਾਰ:</strong> ਵੱਡੀ ਭੈਣ <strong>ਬੇਬੇ ਨਾਨਕੀ ਜੀ</strong> (ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਗੁਰੂ ਜੀ ਦੀ ਅਧਿਆਤਮਕ ਵਡਿਆਈ ਨੂੰ ਪਛਾਣਿਆ; ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ ਦੇ ਦੀਵਾਨ ਜੈ ਰਾਮ ਨਾਲ ਵਿਆਹੇ)। 1487 ਈ. ਵਿੱਚ ਬਟਾਲਾ ਦੇ ਮੂਲ ਚੰਦ ਚੋਣਾ ਦੀ ਸਪੁੱਤਰੀ <strong>ਮਾਤਾ ਸੁਲੱਖਣੀ ਜੀ</strong> ਨਾਲ ਵਿਆਹ ਹੋਇਆ। ਦੋ ਸਪੁੱਤਰ ਹੋਏ: <strong>ਬਾਬਾ ਸ੍ਰੀ ਚੰਦ</strong> (1494, ਉਦਾਸੀ ਸੰਪਰਦਾਇ ਦੇ ਮੋਢੀ) ਅਤੇ <strong>ਬਾਬਾ ਲਖਮੀ ਦਾਸ</strong> (1497)।</li>
              <li><strong>ਬਚਪਨ ਦੀਆਂ ਇਤਿਹਾਸਕ ਘਟਨਾਵਾਂ:</strong>
                <br/>• <em>ਅਧਿਆਪਕ:</em> ਪੰਡਿਤ ਗੋਪਾਲ (ਹਿੰਦੀ/ਗਣਿਤ), ਪੰਡਿਤ ਬ੍ਰਿਜ ਨਾਥ (ਸੰਸਕ੍ਰਿਤ) ਅਤੇ ਮੌਲਵੀ ਕੁਤਬੁੱਦੀਨ (ਫ਼ਾਰਸੀ)।
                <br/>• <em>ਜਨੇਊ ਦੀ ਰਸਮ ਦਾ ਖੰਡਨ:</em> 9 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਜਦੋਂ ਕੁਲ ਪੁਰੋਹਿਤ <strong>ਪੰਡਿਤ ਹਰਦਿਆਲ</strong> ਜਨੇਊ ਪਾਉਣ ਲੱਗੇ ਤਾਂ ਗੁਰੂ ਜੀ ਨੇ ਉਚਾਰਿਆ: <em>"ਦਇਆ ਕਪਾਹ ਸੰਤੋਖੁ ਸੂਤੁ ਜਤੁ ਗੰਢੀ ਸਤੁ ਵਟੁ॥"</em>
                <br/>• <em>ਸੱਚਾ ਸੌਦਾ:</em> ਪਿਤਾ ਮਹਿਤਾ ਕਾਲੂ ਜੀ ਵੱਲੋਂ ਵਪਾਰ ਕਰਨ ਲਈ ਦਿੱਤੇ <strong>20 ਰੁਪਏ</strong> ਨਾਲ ਚੂਹੜਕਾਣਾ ਵਿਖੇ ਭੁੱਖੇ ਸਾਧੂਆਂ ਨੂੰ ਭੋਜਨ ਛਕਾਇਆ, ਜਿਸ ਨੂੰ 'ਸੱਚਾ ਸੌਦਾ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ।
              </li>
              <li><strong>ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ ਅਤੇ ਵੇਈਂ ਨਦੀ ਪ੍ਰਵੇਸ਼ (ਲਗਭਗ 1499 ਈ.):</strong> ਜੀਜਾ ਜੈ ਰਾਮ ਦੇ ਬੁਲਾਵੇ 'ਤੇ ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ ਪੁੱਜੇ ਅਤੇ <strong>ਨਵਾਬ ਦੌਲਤ ਖਾਂ ਲੋਧੀ</strong> ਦੇ <strong>ਮੋਦੀਖਾਨੇ</strong> ਵਿੱਚ ਮੋਦੀ (ਭੰਡਾਰੀ) ਵਜੋਂ ਸੇਵਾ ਕੀਤੀ। ਤੋਲਦੇ ਸਮੇਂ 13 ('ਤੇਰਾ') ਅੰਕ 'ਤੇ ਪਹੁੰਚ ਕੇ ਪ੍ਰਭੂ ਭਗਤੀ ਵਿੱਚ ਲੀਨ ਹੋ ਜਾਂਦੇ ਸਨ। 30 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ <strong>ਕਾਲੀ ਵੇਈਂ</strong> ਨਦੀ ਵਿੱਚ ਇਸ਼ਨਾਨ ਕਰਦੇ ਸਮੇਂ 3 ਦਿਨ ਅਲੋਪ ਰਹੇ, ਅਕਾਲ ਪੁਰਖ ਦਾ ਸਿੱਧਾ ਦੀਦਾਰ ਕਰਕੇ <strong>ਮੂਲ ਮੰਤਰ</strong> ਉਚਾਰਿਆ ਅਤੇ ਪਹਿਲਾ ਇਤਿਹਾਸਕ ਬਚਨ ਕੀਤਾ: <strong>"ਨਾ ਕੋਈ ਹਿੰਦੂ, ਨਾ ਕੋਈ ਮੁਸਲਮਾਨ"</strong>।</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">🗺️ 2. ਚਾਰ ਉਦਾਸੀਆਂ (ਧਰਮ ਪ੍ਰਚਾਰ ਯਾਤਰਾਵਾਂ, 1500–1521 ਈ.)</h3>
            <p class="text-slate-300 text-sm mb-3">
              ਆਪਣੇ ਜੀਵਨ ਸਾਥੀ <strong>ਭਾਈ ਮਰਦਾਨਾ ਜੀ</strong> (ਰਬਾਬੀ) ਨਾਲ ਗੁਰੂ ਜੀ ਨੇ ਅਗਿਆਨਤਾ, ਜਾਤ-ਪਾਤ ਅਤੇ ਵਹਿਮਾਂ-ਭਰਮਾਂ ਨੂੰ ਦੂਰ ਕਰਨ ਲਈ ਚਾਰ ਦਿਸ਼ਾਵਾਂ ਵਿੱਚ ਚਾਰ ਮਹਾਨ ਉਦਾਸੀਆਂ ਕੀਤੀਆਂ:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-amber-400 font-bold text-sm mb-1.5">1️⃣ ਪਹਿਲੀ ਉਦਾਸੀ — ਪੂਰਬ ਅਤੇ ਦੱਖਣ-ਪੂਰਬ (1500–1506)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>ਸੈਦਪੁਰ (ਐਮਨਾਬਾਦ):</strong> ਗਰੀਬ ਤਰਖਾਣ <strong>ਭਾਈ ਲਾਲੋ</strong> ਦੇ ਘਰ ਠਹਿਰੇ ਅਤੇ ਹੰਕਾਰੀ ਹਾਕਮ <strong>ਮਲਿਕ ਭਾਗੋ</strong> ਦੇ ਬ੍ਰਹਮ-ਭੋਜ ਨੂੰ ਠੁਕਰਾਇਆ; ਲਾਲੋ ਦੀ ਕੋਧਰੇ ਦੀ ਰੋਟੀ ਵਿੱਚੋਂ ਦੁੱਧ (ਹੱਕ ਦੀ ਕਮਾਈ) ਅਤੇ ਭਾਗੋ ਦੀਆਂ ਪੂੜੀਆਂ ਵਿੱਚੋਂ ਲਹੂ (ਗਰੀਬਾਂ ਦਾ ਸ਼ੋਸ਼ਣ) ਨਿਚੋੜ ਕੇ ਦਿਖਾਇਆ।</li>
                  <li><strong>ਤੁਲੰਭਾ (ਮੁਲਤਾਨ):</strong> <strong>ਸੱਜਣ ਠੱਗ</strong> ਦਾ ਹਿਰਦਾ ਪਰਿਵਰਤਨ ਕੀਤਾ (ਇੱਥੇ ਪਹਿਲੀ ਧਰਮਸਾਲ ਬਣੀ)।</li>
                  <li><strong>ਕੁਰੂਕਸ਼ੇਤਰ ਅਤੇ ਹਰਿਦੁਆਰ:</strong> ਹਰਿਦੁਆਰ ਵਿਖੇ ਜਦੋਂ ਲੋਕ ਪੂਰਬ ਵੱਲ ਸੂਰਜ ਨੂੰ ਪਾਣੀ ਦੇ ਰਹੇ ਸਨ, ਗੁਰੂ ਜੀ ਨੇ <strong>ਪੱਛਮ</strong> (ਪੰਜਾਬ ਦੇ ਖੇਤਾਂ) ਵੱਲ ਪਾਣੀ ਦੇ ਕੇ ਫੋਕੇ ਕਰਮਕਾਂਡਾਂ ਦਾ ਖੰਡਨ ਕੀਤਾ।</li>
                  <li><strong>ਗੋਰਖਮਤਾ (ਨਾਨਕਮਤਾ), ਬਨਾਰਸ, ਗਯਾ, ਕਾਮਰੂਪ (ਅਸਾਮ) ਅਤੇ ਜਗਨਨਾਥ ਪੁਰੀ:</strong> ਬਨਾਰਸ ਵਿੱਚ ਪੰਡਿਤ ਚਤੁਰ ਦਾਸ ਨਾਲ ਗੋਸ਼ਟੀ; ਕਾਮਰੂਪ ਵਿੱਚ ਜਾਦੂਗਰਨੀ <strong>ਨੂਰਸ਼ਾਹ</strong> ਦਾ ਉਧਾਰ; ਅਤੇ ਜਗਨਨਾਥ ਪੁਰੀ ਵਿਖੇ ਆਰਤੀ ਉਚਾਰੀ: <em>"ਗਗਨ ਮੈ ਥਾਲੁ ਰਵਿ ਚੰਦੁ ਦੀਪਕ ਬਨੇ..."</em></li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-emerald-400 font-bold text-sm mb-1.5">2️⃣ ਦੂਜੀ ਉਦਾਸੀ — ਦੱਖਣ ਅਤੇ ਸ੍ਰੀਲੰਕਾ (1506–1513)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>ਮਾਰਗ:</strong> ਸਿਰਸਾ, ਬੀਕਾਨੇਰ, ਅਜਮੇਰ, ਆਬੂ ਪਰਬਤ, ਉੱਜੈਨ, ਬਿਦਰ (ਕਰਨਾਟਕ — ਜਿੱਥੇ ਚੱਟਾਨ ਹਟਾ ਕੇ ਮਿੱਠੇ ਪਾਣੀ ਦਾ ਚਸ਼ਮਾ ਚਲਾਇਆ, <strong>ਗੁਰਦੁਆਰਾ ਨਾਨਕ ਝੀਰਾ ਸਾਹਿਬ</strong>), ਰਾਮੇਸ਼ਵਰਮ।</li>
                  <li><strong>ਸੰਗਲਾਦੀਪ (ਸ੍ਰੀਲੰਕਾ):</strong> <strong>ਰਾਜਾ ਸ਼ਿਵਨਾਭ</strong> ਦੇ ਰਾਜ ਵਿੱਚ ਪੁੱਜੇ ਅਤੇ ਸੰਗਤ ਸਥਾਪਿਤ ਕੀਤੀ।</li>
                  <li><strong>ਵਾਪਸੀ:</strong> ਦੁਆਰਕਾ, ਸਿੰਧ ਅਤੇ ਪਾਕਪਟਨ (ਜਿੱਥੇ ਬਾਬਾ ਫ਼ਰੀਦ ਜੀ ਦੀ ਗੱਦੀ ਦੇ 12ਵੇਂ ਜਾਨਸ਼ੀਨ <strong>ਸ਼ੇਖ਼ ਬ੍ਰਹਮ / ਸ਼ੇਖ਼ ਇਬਰਾਹਿਮ</strong> ਨਾਲ ਅਧਿਆਤਮਕ ਵਿਚਾਰ-ਵਟਾਂਦਰਾ ਕੀਤਾ)।</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-sky-400 font-bold text-sm mb-1.5">3️⃣ ਤੀਜੀ ਉਦਾਸੀ — ਉੱਤਰ ਅਤੇ ਹਿਮਾਲਿਆ (1514–1518)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>ਮਾਰਗ:</strong> ਹਿਮਾਚਲ (ਕਾਂਗੜਾ, ਜਵਾਲਾਮੁਖੀ, ਕੁੱਲੂ, ਮਣੀਕਰਨ), ਕਸ਼ਮੀਰ, ਲੱਦਾਖ (ਲੇਹ ਵਿਖੇ <strong>ਗੁਰਦੁਆਰਾ ਪੱਥਰ ਸਾਹਿਬ</strong>) ਅਤੇ ਤਿੱਬਤ।</li>
                  <li><strong>ਮੱਟਨ (ਕਸ਼ਮੀਰ):</strong> ਹੰਕਾਰੀ ਵਿਦਵਾਨ <strong>ਪੰਡਿਤ ਬ੍ਰਹਮ ਦਾਸ</strong> ਨੂੰ ਨਿਮਰਤਾ ਤੇ ਸੱਚੇ ਗਿਆਨ ਦਾ ਉਪਦੇਸ਼ ਦਿੱਤਾ।</li>
                  <li><strong>ਸੁਮੇਰ ਪਰਬਤ (ਕੈਲਾਸ਼):</strong> 84 ਸਿੱਧਾਂ (ਗੋਰਖਨਾਥ, ਚਰਪਟ ਨਾਥ, ਭੰਗਰ ਨਾਥ) ਨਾਲ ਇਤਿਹਾਸਕ ਸੰਵਾਦ ਕੀਤਾ ਜੋ <strong>'ਸਿੱਧ ਗੋਸ਼ਟਿ'</strong> (ਰਾਗੁ ਰਾਮਕਲੀ) ਬਾਣੀ ਵਿੱਚ ਦਰਜ ਹੈ; ਗ੍ਰਹਿਸਥ ਵਿੱਚ ਰਹਿ ਕੇ ਕਮਲ ਦੇ ਫੁੱਲ ਵਾਂਗ ਨਿਰਲੇਪ ਜੀਵਨ ਜਿਊਣ ਦਾ ਸੰਦੇਸ਼ ਦਿੱਤਾ।</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-purple-400 font-bold text-sm mb-1.5">4️⃣ ਚੌਥੀ ਉਦਾਸੀ — ਪੱਛਮ ਅਤੇ ਇਸਲਾਮੀ ਦੇਸ਼ (1518–1521)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>ਮੱਕਾ ਅਤੇ ਮਦੀਨਾ:</strong> ਨੀਲੇ ਬਸਤਰ ਪਹਿਨ ਕੇ ਹਾਜੀ ਦੇ ਭੇਖ ਵਿੱਚ ਗਏ; ਮੱਕੇ ਵਿਖੇ ਜਦੋਂ <strong>ਕਾਜ਼ੀ ਰੁਕਨੁੱਦੀਨ</strong> (ਅਤੇ ਜੀਵਨ) ਨੇ ਕਾਅਬੇ ਵੱਲ ਪੈਰ ਪਸਾਰ ਕੇ ਸੌਣ ਦਾ ਵਿਰੋਧ ਕੀਤਾ, ਤਾਂ ਗੁਰੂ ਜੀ ਨੇ ਕਿਹਾ ਕਿ ਮੇਰੇ ਪੈਰ ਉਸ ਪਾਸੇ ਘੁੰਮਾ ਦਿਓ ਜਿੱਥੇ ਖ਼ੁਦਾ ਦਾ ਘਰ ਨਹੀਂ ਹੈ।</li>
                  <li><strong>ਬਗ਼ਦਾਦ (ਇਰਾਕ):</strong> <strong>ਪੀਰ ਦਸਤਗੀਰ</strong> ਅਤੇ <strong>ਬਹਿਲੋਲ ਦਾਨਾ</strong> ਨਾਲ ਲੱਖਾਂ ਪਾਤਾਲਾਂ ਅਤੇ ਆਕਾਸ਼ਾਂ (<em>"ਪਾਤਾਲਾ ਪਾਤਾਲ ਲਖ ਆਗਾਸਾ ਆਗਾਸ"</em>) ਬਾਰੇ ਸੰਵਾਦ ਰਚਾਇਆ।</li>
                  <li><strong>ਸੈਦਪੁਰ (ਐਮਨਾਬਾਦ) ਵਿਖੇ ਬਾਬਰ ਦਾ ਹਮਲਾ (1520–21):</strong> ਮੁਗ਼ਲ ਹਮਲਾਵਰ <strong>ਬਾਬਰ ਦੇ ਤੀਜੇ ਹਮਲੇ</strong> ਅਤੇ ਸੈਦਪੁਰ ਦੇ ਕਤਲੇਆਮ ਨੂੰ ਅੱਖੀਂ ਦੇਖਿਆ; ਬਾਬਰ ਦੀ ਫ਼ੌਜ ਨੂੰ <em>"ਪਾਪ ਕੀ ਜੰਞ"</em> ਕਿਹਾ ਅਤੇ 4 ਸ਼ਬਦਾਂ ਵਾਲੀ <strong>'ਬਾਬਰਵਾਣੀ'</strong> ਉਚਾਰੀ।</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">🏛️ 3. ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ (1521–1539), ਤਿੰਨ ਸਿਧਾਂਤ ਅਤੇ ਸੰਸਥਾਵਾਂ</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2.5">
              <p>• <strong>ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ:</strong> 1521 ਈ. ਦੇ ਲਗਭਗ <strong>ਰਾਵੀ ਦਰਿਆ</strong> ਦੇ ਕੰਢੇ ਕਰਤਾਰਪੁਰ ਵਸਾਇਆ। ਇੱਥੇ ਗੁਰੂ ਜੀ ਨੇ ਉਦਾਸੀ ਭੇਖ ਉਤਾਰ ਕੇ ਗ੍ਰਹਿਸਥੀ ਪਹਿਰਾਵਾ ਧਾਰਨ ਕੀਤਾ ਅਤੇ 18 ਸਾਲ ਖੇਤੀਬਾੜੀ ਕਰਕੇ ਕਿਰਤ ਕਰਨ ਦਾ ਵਿਹਾਰਕ ਨਮੂਨਾ ਪੇਸ਼ ਕੀਤਾ।</p>
              <p>• <strong>ਸਿੱਖ ਧਰਮ ਦੇ ਤਿੰਨ ਸੁਨਹਿਰੀ ਥੰਮ੍ਹ:</strong> 1. <strong>ਨਾਮ ਜਪਣਾ</strong> (ਅਕਾਲ ਪੁਰਖ ਦਾ ਸਿਮਰਨ), 2. <strong>ਕਿਰਤ ਕਰਨੀ</strong> (ਈਮਾਨਦਾਰੀ ਅਤੇ ਮਿਹਨਤ ਨਾਲ ਰੋਜ਼ੀ ਕਮਾਉਣਾ), 3. <strong>ਵੰਡ ਛਕਣਾ</strong> (ਲੋੜਵੰਦਾਂ ਨਾਲ ਆਪਣੀ ਕਮਾਈ ਸਾਂਝੀ ਕਰਨੀ)।</p>
              <p>• <strong>ਪ੍ਰਮੁੱਖ ਸੰਸਥਾਵਾਂ:</strong> <strong>ਸੰਗਤ</strong> (ਸਮਾਨਤਾ ਨਾਲ ਬੈਠ ਕੇ ਕੀਰਤਨ ਸੁਣਨਾ), <strong>ਪੰਗਤ ਅਤੇ ਲੰਗਰ</strong> (ਊਚ-ਨੀਚ ਮਿਟਾ ਕੇ ਇੱਕ ਕਤਾਰ ਵਿੱਚ ਬੈਠ ਕੇ ਪ੍ਰਸ਼ਾਦਾ ਛਕਣਾ), ਅਤੇ <strong>ਧਰਮਸਾਲ</strong>।</p>
              <p>• <strong>ਇਸਤਰੀ ਜਾਤੀ ਦਾ ਸਤਿਕਾਰ:</strong> ਆਸਾ ਦੀ ਵਾਰ ਵਿੱਚ ਔਰਤ ਦੇ ਹੱਕ ਵਿੱਚ ਆਵਾਜ਼ ਬੁਲੰਦ ਕੀਤੀ: <strong>"ਸੋ ਕਿਉ ਮੰਦਾ ਆਖੀਐ ਜਿਤੁ ਜੰਮਹਿ ਰਾਜਾਨ॥"</strong></p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">📜 4. ਪਵਿੱਤਰ ਬਾਣੀ (19 ਰਾਗਾਂ ਵਿੱਚ 974 ਸ਼ਬਦ) ਅਤੇ ਗੁਰਗੱਦੀ (1539)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>ਕੁੱਲ ਬਾਣੀ:</strong> ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ <strong>19 ਰਾਗਾਂ ਵਿੱਚ 974 ਸ਼ਬਦ</strong> ਦਰਜ ਹਨ।</p>
              <p>• <strong>ਪ੍ਰਮੁੱਖ ਰਚਨਾਵਾਂ:</strong>
                <br/>1. <strong>ਜਪੁਜੀ ਸਾਹਿਬ:</strong> ਰਾਗ-ਮੁਕਤ ਬਾਣੀ, <strong>38 ਪਉੜੀਆਂ</strong> ਅਤੇ 2 ਸਲੋਕ; ਇਸ ਵਿੱਚ <strong>5 ਖੰਡਾਂ</strong> (ਧਰਮ ਖੰਡ, ਗਿਆਨ ਖੰਡ, ਸਰਮ ਖੰਡ, ਕਰਮ ਖੰਡ, ਸੱਚ ਖੰਡ) ਦਾ ਵਰਣਨ ਹੈ।
                <br/>2. <strong>ਆਸਾ ਦੀ ਵਾਰ (24 ਪਉੜੀਆਂ):</strong> ਰਾਗ ਆਸਾ ਵਿੱਚ (ਟੁੰਡੇ ਅਸਰਾਜੇ ਦੀ ਧੁਨੀ ਉੱਤੇ ਗਾਉਣ ਦਾ ਆਦੇਸ਼)। ਤਿੰਨ ਵਾਰਾਂ: ਆਸਾ ਦੀ ਵਾਰ, ਮਾਝ ਕੀ ਵਾਰ, ਮਲਾਰ ਕੀ ਵਾਰ।
                <br/>3. <strong>ਸਿੱਧ ਗੋਸ਼ਟਿ</strong> ਤੇ <strong>ਦੱਖਣੀ ਓਅੰਕਾਰ</strong> (ਰਾਗੁ ਰਾਮਕਲੀ)।
                <br/>4. <strong>ਬਾਰਹ ਮਾਹਾ</strong> (<strong>ਰਾਗੁ ਤੁਖਾਰੀ</strong> ਵਿੱਚ — ਚੇਤ ਮਹੀਨੇ ਤੋਂ ਆਰੰਭ)।
                <br/>5. <strong>ਪੱਟੀ</strong> (ਰਾਗੁ ਆਸਾ ਵਿੱਚ 35 ਅੱਖਰਾਂ ਉੱਤੇ ਆਧਾਰਿਤ)।
              </p>
              <p>• <strong>ਗੁਰਗੱਦੀ ਅਤੇ ਜੋਤੀ-ਜੋਤਿ (22 ਸਤੰਬਰ 1539):</strong> ਆਪਣੇ ਪੁੱਤਰਾਂ ਦੀ ਥਾਂ ਨਿਸ਼ਕਾਮ ਸੇਵਕ <strong>ਭਾਈ ਲਹਿਣਾ ਜੀ</strong> ਨੂੰ ਪਰਖ ਵਿੱਚ ਪੂਰੇ ਉਤਰਨ 'ਤੇ 5 ਪੈਸੇ ਅਤੇ ਨਾਰੀਅਲ ਰੱਖ ਕੇ ਮੱਥਾ ਟੇਕਿਆ, ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਪਾਸੋਂ ਤਿਲਕ ਲਗਵਾ ਕੇ <strong>'ਗੁਰੂ ਅੰਗਦ'</strong> ਨਾਮ ਦਿੱਤਾ ਅਤੇ <strong>22 ਸਤੰਬਰ 1539</strong> ਨੂੰ ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਜੋਤੀ-ਜੋਤਿ ਸਮਾ ਗਏ।</p>
            </div>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌟 1. प्रारंभिक जीवन एवं पारिवारिक पृष्ठभूमि (1469–1499)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              सिख धर्म के संस्थापक एवं प्रथम पातशाह <strong>श्री गुरु नानक देव जी</strong> का जन्म <strong>15 अप्रैल 1469</strong> (परंपरानुसार कार्तिक पूर्णिमा) को <strong>राय भोए की तलवंडी</strong> (वर्तमान <strong>श्री ननकाना साहिब</strong>, जिला शेखूपुरा, पाकिस्तान) में हुआ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>माता-पिता व कुल:</strong> बेदी खत्री वंश में पिता <strong>मेहता कालू जी</strong> (कल्याण चंद दास बेदी, जो मुस्लिम सामंत <strong>राय बुलार भट्टी</strong> के पटवारी थे) और माता <strong>तृप्ता जी</strong> के घर जन्म हुआ।</li>
              <li><strong>परिवार:</strong> बड़ी बहन <strong>बेबे नानकी जी</strong> (जिन्होंने सर्वप्रथम गुरु जी की आध्यात्मिक महानता को पहचाना; सुल्तानपुर लोधी के दीवान जयराम से विवाहित)। 1487 ई. में बटाला के मूलचंद चोणा की पुत्री <strong>माता सुलखनी जी</strong> से विवाह हुआ। दो पुत्र हुए: <strong>बाबा श्री चंद</strong> (1494, जिन्होंने 'उदासी संप्रदाय' चलाया) और <strong>बाबा लखमी दास</strong> (1497)।</li>
              <li><strong>बचपन के ऐतिहासिक प्रसंग:</strong>
                <br/>• <em>शिक्षक:</em> पंडित गोपाल (हिंदी व गणित), पंडित बृजनाथ (संस्कृत) तथा मौलवी कुतुबुद्दीन (फारसी)।
                <br/>• <em>जनेऊ संस्कार का खंडन:</em> 9 वर्ष की आयु में जब कुल पुरोहित <strong>पंडित हरदयाल</strong> जनेऊ पहनाने लगे, तो गुरु जी ने बाहरी सूत के धागे के स्थान पर आत्मिक गुणों के जनेऊ का उपदेश दिया: <em>"दया कपाह संतोखु सूतु जतु गंढी सतु वटु"</em>।
                <br/>• <em>सच्चा सौदा:</em> पिता मेहता कालू जी द्वारा व्यापार हेतु दिए गए <strong>20 रुपये</strong> से चूहड़काना में भूखे संतों को भोजन कराया, जिसे इतिहास में 'सच्चा सौदा' कहा जाता है।
              </li>
              <li><strong>सुल्तानपुर लोधी एवं काली बेईं ज्ञान प्राप्ति (लगभग 1499 ई.):</strong> बहनोई जयराम के बुलावे पर सुल्तानपुर लोधी गए और <strong>नवाब दौलत खां लोधी</strong> के <strong>मोदीखाने</strong> (अनाज भंडार) में मोदी के रूप में कार्य किया। अनाज तौलते समय 13 ('तेरा') की गिनती पर पहुँचकर वे "मैं तेरा हूँ प्रभु" कहते हुए समाधिस्थ हो जाते थे। 30 वर्ष की आयु में <strong>काली बेईं नदी</strong> में स्नान करते समय 3 दिन तक अंतर्ध्यान रहे, अकाल पुरख का साक्षात्कार कर <strong>मूल मंत्र</strong> (<em>इक ओंकार सतिनामु करता पुरखु...</em>) का उच्चारण किया और पहला ऐतिहासिक उद्घोष किया: <strong>"ना कोई हिंदू, ना कोई मुसलमान"</strong>।</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">🗺️ 2. चार उदासियां (धर्म प्रचार यात्राएं, 1500–1521 ई.)</h3>
            <p class="text-slate-300 text-sm mb-3">
              अपने आजीवन साथी <strong>भाई मरदाना जी</strong> (रबाबी) के साथ गुरु नानक देव जी ने जातिगत अहंकार, आडंबर और अंधविश्वास को मिटाने के लिए चारों दिशाओं में 4 महान उदासियां (यात्राएं) कीं:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-amber-400 font-bold text-sm mb-1.5">1️⃣ पहली उदासी — पूर्व एवं दक्षिण-पूर्व (1500–1506)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>सैदपुर (एमनाबाद):</strong> गरीब बढ़ई <strong>भाई लालो</strong> के घर ठहरे और अहंकारी अधिकारी <strong>मलिक भागो</strong> के राजसी भोज को अस्वीकार किया; लालो की सूखी रोटी से दूध (ईमानदारी का पसीना) और भागो की पूड़ियों से खून (गरीबों का शोषण) निचोड़कर दिखाया।</li>
                  <li><strong>तुलम्भा (मुल्तान):</strong> कुख्यात <strong>सज्जन ठग</strong> का हृदय परिवर्तन किया (यहाँ पहली धर्मसाल बनी)।</li>
                  <li><strong>कुरुक्षेत्र व हरिद्वार:</strong> हरिद्वार में जब लोग पूर्व में सूर्य को जल अर्पित कर रहे थे, गुरु जी ने <strong>पश्चिम</strong> (पंजाब के अपने खेतों) की ओर पानी उछालकर अंधे कर्मकांड का तर्कपूर्ण खंडन किया।</li>
                  <li><strong>गोरखमता (नानकमता), बनारस, गया, कामरूप (असम) व जगन्नाथ पुरी:</strong> बनारस में पंडित चतुर दास से संवाद; कामरूप में जादूगरनी <strong>नूरशाह</strong> का उद्धार; तथा जगन्नाथ पुरी में ब्रह्मांडीय आरती का गायन किया: <em>"गगन मै थालु रवि चंदु दीपक बने..."</em></li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-emerald-400 font-bold text-sm mb-1.5">2️⃣ दूसरी उदासी — दक्षिण एवं श्रीलंका (1506–1513)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>मार्ग:</strong> सिरसा, बीकानेर, अजमेर (पुष्कर), माउंट आबू, उज्जैन, बीदर (कर्नाटक — जहाँ चट्टान छूकर मीठे जल का झरना प्रवाहित किया, आज <strong>गुरुद्वारा नानक झीरा साहिब</strong> है), रामेश्वरम।</li>
                  <li><strong>संगलादीप (श्रीलंका):</strong> <strong>राजा शिवनाभ</strong> के राज्य में पहुँचे और संगत स्थापित की।</li>
                  <li><strong>वापसी:</strong> द्वारका, सिंध और पाकपट्टन (जहाँ बाबा फरीद की गद्दी के 12वें उत्तराधिकारी <strong>शेख ब्रह्म / शेख इब्राहिम</strong> से आध्यात्मिक संवाद किया और बाबा फरीद के श्लोक प्राप्त किए)।</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-sky-400 font-bold text-sm mb-1.5">3️⃣ तीसरी उदासी — उत्तर एवं हिमालय (1514–1518)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>मार्ग:</strong> हिमाचल (कांगड़ा, ज्वालामुखी, कुल्लू, मणिकर्ण), कश्मीर, लद्दाख (लेह में <strong>गुरुद्वारा पत्थर साहिब</strong>) तथा तिब्बत।</li>
                  <li><strong>मट्टन (कश्मीर):</strong> अहंकारी संस्कृत विद्वान <strong>पंडित ब्रह्म दास</strong> को विनम्रता और सच्चे ज्ञान का बोध कराया।</li>
                  <li><strong>सुमेरु पर्वत (कैलाश-मानसरोवर):</strong> 84 सिद्धों (गोरखनाथ, चर्पटनाथ, भंगरनाथ) के साथ ऐतिहासिक दार्शनिक संवाद किया जो <strong>'सिद्ध गोष्ठ'</strong> (राग रामकली) में दर्ज है; वन पलायन के स्थान पर गृहस्थ में कमल के फूल की भांति निर्लिप्त रहने का मार्ग दिखाया।</li>
                </ul>
              </div>

              <div class="bg-slate-800/90 border border-slate-700 p-4 rounded-xl">
                <h4 class="text-purple-400 font-bold text-sm mb-1.5">4️⃣ चौथी उदासी — पश्चिम एवं इस्लामी विश्व (1518–1521)</h4>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>मक्का एवं मदीना:</strong> नीले वस्त्र धारण कर हाजी के भेष में पहुँचे; मक्का में जब <strong>काजी रुकनुद्दीन</strong> (और जीवन) ने काबा की ओर पैर करके सोने पर आपत्ति जताई, तो गुरु जी ने कहा कि मेरे पैर उस दिशा में घुमा दो जहाँ खुदा मौजूद न हो—जिससे ईश्वर की सर्वव्यापकता का बोध कराया।</li>
                  <li><strong>बगदाद (इराक):</strong> <strong>पीर दस्तगीर</strong> व <strong>बहलोल दाना</strong> से अनंत ब्रह्मांडों (<em>"पाताला पाताल लख आगासा आगास"</em>) पर चर्चा की।</li>
                  <li><strong>सैदपुर (एमनाबाद) पर बाबर का आक्रमण (1520–21):</strong> मुग़ल आक्रमणकारी <strong>बाबर के तीसरे आक्रमण</strong> और नरसंहार को प्रत्यक्ष देखा; बाबर की सेना को <em>"पाप की जंञ"</em> (पाप की बारात) कहा और 4 शब्दों वाली प्रसिद्ध <strong>'बाबरवाणी'</strong> की रचना की।</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">🏛️ 3. करतारपुर साहिब (1521–1539), तीन स्तंभ एवं संस्थाएं</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2.5">
              <p>• <strong>करतारपुर साहिब की स्थापना:</strong> 1521 ई. के आसपास <strong>रावी नदी</strong> के दाहिने तट पर करतारपुर ("करतार का नगर") बसाया। यहाँ गुरु जी ने उदासी वस्त्र त्यागकर गृहस्थ वेश धारण किया और अंतिम 18 वर्ष स्वयं खेती करके श्रम की गरिमा स्थापित की।</p>
              <p>• <strong>सिख धर्म के तीन स्वर्णिम स्तंभ:</strong> 1. <strong>नाम जपना</strong> (अकाल पुरख का स्मरण), 2. <strong>कीरत करना</strong> (ईमानदारी व परिश्रम से आजीविका कमाना), 3. <strong>वंड छकना</strong> (अपनी कमाई जरूरतमंदों के साथ बांटना)।</p>
              <p>• <strong>प्रमुख संस्थाएं:</strong> <strong>संगत</strong> (जाति-धर्म के भेद बिना साथ बैठकर कीर्तन करना), <strong>पंगत एवं लंगर</strong> (छुआछूत मिटाकर एक ही पंक्ति में बैठकर भोजन करना), तथा <strong>धर्मसाल</strong>।</p>
              <p>• <strong>नारी सम्मान की उद्घोषणा:</strong> आसा दी वार में स्त्री के सम्मान में ऐतिहासिक वाणी रची: <strong>"सो किउ मंदा आखीऐ जितु जंमहि राजान॥"</strong></p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">📜 4. पवित्र बाणी (19 रागों में 974 शब्द) एवं उत्तराधिकार (1539)</h3>
            <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-xl text-xs text-slate-300 space-y-2">
              <p>• <strong>कुल रचनाएं:</strong> श्री गुरु ग्रंथ साहिब जी में गुरु नानक देव जी के <strong>19 रागों में 974 शब्द</strong> दर्ज हैं।</p>
              <p>• <strong>प्रमुख बाणियां:</strong>
                <br/>1. <strong>जपुजी साहिब:</strong> राग-मुक्त प्रारंभिक बाणी, <strong>38 पौड़ियां</strong> और 2 श्लोक; इसमें <strong>5 आध्यात्मिक खंडों</strong> (धर्म खंड, ज्ञान खंड, सरम खंड, करम खंड, सच खंड) का वर्णन है।
                <br/>2. <strong>आसा दी वार (24 पौड़ियां):</strong> राग आसा में (टुंडे असराजे की धुन पर)। तीन वारें: आसा दी वार, माझ की वार, मलार की वार।
                <br/>3. <strong>सिद्ध गोष्ठ</strong> एवं <strong>दक्खनी ओंकार</strong> (राग रामकली)।
                <br/>4. <strong>बारह माहा</strong> (<strong>राग तुखारी</strong> में — चेत मास से प्रारंभ)।
                <br/>5. <strong>पट्टी</strong> (राग आसा में 35 गुरुमुखी अक्षरों पर आधारित)।
              </p>
              <p>• <strong>उत्तराधिकार एवं ज्योति-जोत (22 सितंबर 1539):</strong> अपने पुत्रों के स्थान पर अनन्य सेवक <strong>भाई लहणा जी</strong> को निष्काम सेवा व आज्ञाकारिता की परीक्षा में खरा उतरने पर 5 पैसे व नारियल रखकर माथा टेका, बाबा बुड्ढा जी से तिलक लगवाकर <strong>'गुरु अंगद'</strong> नाम दिया और <strong>22 सितंबर 1539</strong> को करतारपुर में ज्योति-जोत समा गए।</p>
            </div>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Worked Analysis 1: Matching Guru Nanak Dev Ji’s Four Udasis with Key Historical Dialogues',
          pa: 'ਹੱਲ ਕੀਤੀ ਉਦਾਹਰਨ 1: ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀਆਂ ਚਾਰ ਉਦਾਸੀਆਂ ਅਤੇ ਇਤਿਹਾਸਕ ਸੰਵਾਦਾਂ ਦਾ ਮਿਲਾਨ',
          hi: 'हल किया गया विश्लेषण 1: गुरु नानक देव जी की चार उदासियों व ऐतिहासिक संवादों का मिलान',
        },
        problem: {
          en: 'In Punjab Master Cadre and PSSSB exams, candidates are asked to match the Udasi direction with the specific figure encountered: (1) Malik Bhago & Bhai Lalo, (2) King Shivnabh, (3) Pandit Brahm Das & 84 Siddhas, (4) Qazi Rukn-ud-din & Pir Dastgir. Identify the exact Udasi and direction for each.',
          pa: 'ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਉਦਾਸੀ ਦੀ ਦਿਸ਼ਾ ਅਤੇ ਮਿਲੇ ਇਤਿਹਾਸਕ ਵਿਅਕਤੀਆਂ ਦਾ ਮਿਲਾਨ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ: (1) ਮਲਿਕ ਭਾਗੋ ਤੇ ਭਾਈ ਲਾਲੋ, (2) ਰਾਜਾ ਸ਼ਿਵਨਾਭ, (3) ਪੰਡਿਤ ਬ੍ਰਹਮ ਦਾਸ ਤੇ 84 ਸਿੱਧ, (4) ਕਾਜ਼ੀ ਰੁਕਨੁੱਦੀਨ ਤੇ ਪੀਰ ਦਸਤਗੀਰ।',
          hi: 'परीक्षाओं में उदासी की दिशा और प्रमुख व्यक्तित्वों का मिलान पूछा जाता है: (1) मलिक भागो व भाई लालो, (2) राजा शिवनाभ, (3) पंडित ब्रह्म दास व 84 सिद्ध, (4) काजी रुकनुद्दीन व पीर दस्तगीर।',
        },
        steps: {
          en: [
            'Step 1 (East — 1st Udasi): Guru Ji visited Saidpur (Eminabad), where he stayed with carpenter Bhai Lalo and rejected Malik Bhago’s feast, before traveling East to Haridwar, Banaras, Kamrup (Nurshah), and Jagannath Puri.',
            'Step 2 (South — 2nd Udasi): Guru Ji traveled south through Bidar (Nanak Jhira) to Sangladip (Sri Lanka), then ruled by King Shivnabh.',
            'Step 3 (North — 3rd Udasi): Guru Ji traveled into the Himalayas—meeting Pandit Brahm Das at Mattan (Kashmir) and the 84 Siddhas on Mount Sumeru (Kailash).',
            'Step 4 (West — 4th Udasi): Guru Ji traveled to the Islamic Middle East—encountering Qazi Rukn-ud-din in Mecca and Pir Dastgir / Bahlol Dana in Baghdad.',
          ],
          pa: [
            'ਕਦਮ 1 (ਪੂਰਬ — ਪਹਿਲੀ ਉਦਾਸੀ): ਸੈਦਪੁਰ (ਐਮਨਾਬਾਦ) ਵਿਖੇ ਭਾਈ ਲਾਲੋ ਤੇ ਮਲਿਕ ਭਾਗੋ, ਅਤੇ ਅੱਗੇ ਹਰਿਦੁਆਰ, ਕਾਮਰੂਪ (ਨੂਰਸ਼ਾਹ) ਤੇ ਜਗਨਨਾਥ ਪੁਰੀ।',
            'ਕਦਮ 2 (ਦੱਖਣ — ਦੂਜੀ ਉਦਾਸੀ): ਬਿਦਰ (ਨਾਨਕ ਝੀਰਾ) ਤੋਂ ਹੁੰਦੇ ਹੋਏ ਸ੍ਰੀਲੰਕਾ (ਸੰਗਲਾਦੀਪ) ਦੇ ਰਾਜਾ ਸ਼ਿਵਨਾਭ ਕੋਲ ਪੁੱਜੇ।',
            'ਕਦਮ 3 (ਉੱਤਰ — ਤੀਜੀ ਉਦਾਸੀ): ਕਸ਼ਮੀਰ (ਮੱਟਨ) ਵਿਖੇ ਪੰਡਿਤ ਬ੍ਰਹਮ ਦਾਸ ਅਤੇ ਸੁਮੇਰ ਪਰਬਤ ਉੱਤੇ 84 ਸਿੱਧਾਂ ਨਾਲ ਸਿੱਧ ਗੋਸ਼ਟਿ।',
            'ਕਦਮ 4 (ਪੱਛਮ — ਚੌਥੀ ਉਦਾਸੀ): ਮੱਕੇ ਵਿਖੇ ਕਾਜ਼ੀ ਰੁਕਨੁੱਦੀਨ ਅਤੇ ਬਗ਼ਦਾਦ ਵਿਖੇ ਪੀਰ ਦਸਤਗੀਰ ਨਾਲ ਸੰਵਾਦ।',
          ],
          hi: [
            'कदम 1 (पूर्व — पहली उदासी): सैदपुर (एमनाबाद) में भाई लालो व मलिक भागो, और आगे हरिद्वार, कामरूप (नूरशाह) व जगन्नाथ पुरी।',
            'कदम 2 (दक्षिण — दूसरी उदासी): बीदर (नानक झीरा) होते हुए श्रीलंका (संगलादीप) के राजा शिवनाभ के राज्य में पहुँचे।',
            'कदम 3 (उत्तर — तीसरी उदासी): कश्मीर (मट्टन) में पंडित ब्रह्म दास तथा सुमेरु पर्वत पर 84 सिद्धों से संवाद (सिद्ध गोष्ठ)।',
            'कदम 4 (पश्चिम — चौथी उदासी): मक्का में काजी रुकनुद्दीन और बगदाद में पीर दस्तगीर से संवाद।',
          ],
        },
        solution: {
          en: 'Mnemonic Order of Directions: E-S-N-W (East → South → North → West). (1) 1st East, (2) 2nd South, (3) 3rd North, (4) 4th West.',
          pa: 'ਦਿਸ਼ਾਵਾਂ ਦਾ ਸਹੀ ਕ੍ਰਮ: ਪੂਰਬ → ਦੱਖਣ → ਉੱਤਰ → ਪੱਛਮ (E-S-N-W)।',
          hi: 'दिशाओं का सही क्रम: पूर्व → दक्षिण → उत्तर → पश्चिम (E-S-N-W)।',
        },
        takeaway: {
          en: 'Remember the compass sequence E → S → N → W to never confuse the order of the Four Udasis in chronology questions.',
          pa: 'ਚਾਰ ਉਦਾਸੀਆਂ ਦਾ ਕ੍ਰਮ ਯਾਦ ਰੱਖਣ ਲਈ ਪੂਰਬ → ਦੱਖਣ → ਉੱਤਰ → ਪੱਛਮ सूत्र ਯਾਦ ਰੱਖੋ।',
          hi: 'चारों उदासियों का क्रम याद रखने हेतु पूर्व → दक्षिण → उत्तर → पश्चिम (E-S-N-W) सूत्र सदैव याद रखें।',
        },
      },
      {
        title: {
          en: 'Worked Analysis 2: Distinguishing Barah Maha Compositions in Guru Granth Sahib',
          pa: 'ਹੱਲ ਕੀਤੀ ਉਦਾਹਰਨ 2: ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਦਰਜ ਦੋ ਬਾਰਹ ਮਾਹਾ ਬਾਣੀਆਂ ਦਾ ਅੰਤਰ',
          hi: 'हल किया गया विश्लेषण 2: श्री गुरु ग्रंथ साहिब में दर्ज दो बारह माहा बाणियों का अंतर',
        },
        problem: {
          en: 'In which Raag did Sri Guru Nanak Dev Ji compose "Barah Maha", and how does it differ from Sri Guru Arjan Dev Ji’s "Barah Maha"?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਕਿਹੜੇ ਰਾਗ ਵਿੱਚ "ਬਾਰਹ ਮਾਹਾ" ਬਾਣੀ ਰਚੀ ਅਤੇ ਇਹ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੇ "ਬਾਰਹ ਮਾਹਾ" ਤੋਂ ਕਿਵੇਂ ਵੱਖਰੀ ਹੈ?',
          hi: 'श्री गुरु नानक देव जी ने किस राग में "बारह माहा" की रचना की और यह गुरु अर्जुन देव जी के "बारह माहा" से किस प्रकार भिन्न है?',
        },
        steps: {
          en: [
            'Step 1: Sri Guru Nanak Dev Ji composed the first Barah Maha in Punjabi literature in "Raag Tukhari" (Barah Maha Tukhari).',
            'Step 2: Sri Guru Arjan Dev Ji (5th Guru) later composed a second Barah Maha in "Raag Majh" (Barah Maha Majh, recited on Sangrand).',
            'Step 3: Both start with the Bikrami month of "Chet" and end with "Phalgun".',
          ],
          pa: [
            'ਕਦਮ 1: ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਪਹਿਲਾ ਬਾਰਹ ਮਾਹਾ "ਰਾਗੁ ਤੁਖਾਰੀ" ਵਿੱਚ ਰਚਿਆ।',
            'ਕਦਮ 2: ਪੰਜਵੇਂ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਦੂਜਾ ਬਾਰਹ ਮਾਹਾ "ਰਾਗੁ ਮਾਝ" ਵਿੱਚ ਰਚਿਆ (ਜੋ ਸੰਗਰਾਂਦ ਨੂੰ ਪੜ੍ਹਿਆ ਜਾਂਦਾ ਹੈ)।',
            'ਕਦਮ 3: ਦੋਵੇਂ ਬਾਣੀਆਂ ਦੇਸੀ ਮਹੀਨੇ "ਚੇਤ" ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ "ਫੱਗਣ" ਉੱਤੇ ਸਮਾਪਤ ਹੁੰਦੀਆਂ ਹਨ।',
          ],
          hi: [
            'कदम 1: श्री गुरु नानक देव जी ने पंजाबी साहित्य का प्रथम बारह माहा "राग तुखारी" में रचा।',
            'कदम 2: पंचम पातशाह श्री गुरु अर्जुन देव जी ने दूसरा बारह माहा "राग माझ" में रचा।',
            'कदम 3: दोनों रचनाएं देसी महीने "चेत" से प्रारंभ होकर "फाल्गुन" पर समाप्त होती हैं।',
          ],
        },
        solution: {
          en: 'Guru Nanak Dev Ji = Barah Maha in Raag Tukhari; Guru Arjan Dev Ji = Barah Maha in Raag Majh.',
          pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ = ਰਾਗੁ ਤੁਖਾਰੀ; ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ = ਰਾਗੁ ਮਾਝ।',
          hi: 'गुरु नानक देव जी = राग तुखारी; गुरु अर्जुन देव जी = राग माझ।',
        },
        takeaway: {
          en: 'Examiners frequently set Raag Majh as a trap option when asking for Guru Nanak Dev Ji’s Barah Maha—always select Raag Tukhari for the First Guru.',
          pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਬਾਰਹ ਮਾਹਾ ਲਈ ਹਮੇਸ਼ਾ "ਰਾਗੁ ਤੁਖਾਰੀ" ਚੁਣੋ।',
          hi: 'गुरु नानक देव जी के बारह माहा के लिए सदैव "राग तुखारी" का चयन करें।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Misconception: Kartarpur Sahib founded by Sri Guru Nanak Dev Ji in 1521 is located in Jalandhar district (Doaba).',
          pa: 'ਭੁਲੇਖਾ: ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਵੱਲੋਂ 1521 ਵਿੱਚ ਵਸਾਇਆ ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ ਜਲੰਧਰ ਨੇੜੇ ਸਥਿਤ ਹੈ।',
          hi: 'भ्रांति: गुरु नानक देव जी द्वारा 1521 में बसाया गया करतारपुर साहिब जालंधर (दोआबा) में स्थित है।',
        },
        correction: {
          en: 'Correction: There are TWO historical towns named Kartarpur. (1) Kartarpur on the banks of River Ravi (now in Narowal district, Pakistan) was founded by Sri Guru Nanak Dev Ji in 1521. (2) Kartarpur in Jalandhar district (Doaba, India) was founded later by the 5th Guru, Sri Guru Arjan Dev Ji in 1594.',
          pa: 'ਸੱਚ: ਇਤਿਹਾਸ ਵਿੱਚ ਦੋ ਕਰਤਾਰਪੁਰ ਹਨ: (1) ਰਾਵੀ ਦਰਿਆ ਕੰਢੇ ਕਰਤਾਰਪੁਰ (ਹੁਣ ਨਾਰੋਵਾਲ, ਪਾਕਿਸਤਾਨ) ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ 1521 ਵਿੱਚ ਵਸਾਇਆ। (2) ਜਲੰਧਰ (ਦੁਆਬਾ) ਵਾਲਾ ਕਰਤਾਰਪੁਰ ਪੰਜਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ 1594 ਵਿੱਚ ਵਸਾਇਆ।',
          hi: 'सत्य: इतिहास में दो करतारपुर हैं: (1) रावी नदी तट पर स्थित करतारपुर (नारोवाल, पाकिस्तान) गुरु नानक देव जी ने 1521 में बसाया। (2) जालंधर (दोआबा) स्थित करतारपुर पांचवें गुरु श्री गुरु अर्जुन देव जी ने 1594 में बसाया।',
        },
        whyItMatters: {
          en: 'Distinguishing Kartarpur (Ravi - 1st Guru) from Kartarpur (Jalandhar - 5th Guru) is a classic high-yield question in Master Cadre and PSSSB exams.',
          pa: 'ਮਾਸਟਰ ਕੈਡਰ ਅਤੇ PSSSB ਵਿੱਚ ਇਹ ਦੋਵੇਂ ਸ਼ਹਿਰਾਂ ਦਾ ਅੰਤਰ ਵਾਰ-ਵਾਰ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'मास्टर कैडर और PSSSB परीक्षाओं में इन दोनों नगरों का अंतर बार-बार पूछा जाता है।',
        },
      },
      {
        misconception: {
          en: 'Misconception: Japji Sahib is composed in Raag Asa or Raag Sri.',
          pa: 'ਭੁਲੇਖਾ: ਜਪੁਜੀ ਸਾਹਿਬ ਬਾਣੀ ਰਾਗ ਆਸਾ ਜਾਂ ਸ੍ਰੀ ਰਾਗ ਵਿੱਚ ਦਰਜ ਹੈ।',
          hi: 'भ्रांति: जपुजी साहिब बाणी राग आसा या श्री राग में रचित है।',
        },
        correction: {
          en: 'Correction: Japji Sahib is completely Raag-free (Mukt-Raag). It stands at the very beginning of Sri Guru Granth Sahib Ji (Ang 1 to 8) before the first musical measure, Sri Raag, begins.',
          pa: 'ਸੱਚ: ਜਪੁਜੀ ਸਾਹਿਬ ਬਾਣੀ ਰਾਗ-ਮੁਕਤ ਹੈ। ਇਹ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਆਰੰਭ ਵਿੱਚ (ਅੰਗ 1 ਤੋਂ 8) ਸ੍ਰੀ ਰਾਗ ਸ਼ੁਰੂ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਦਰਜ ਹੈ।',
          hi: 'सत्य: जपुजी साहिब पूरी तरह से राग-मुक्त बाणी है। यह श्री गुरु ग्रंथ साहिब जी के प्रारंभ में (अंग 1 से 8) पहले राग (श्री राग) से पूर्व दर्ज है।',
        },
        whyItMatters: {
          en: 'Questions asking "Which Bani of Guru Nanak Dev Ji is not set to any Raag?" directly test this fact.',
          pa: '"ਕਿਹੜੀ ਬਾਣੀ ਕਿਸੇ ਵੀ ਰਾਗ ਵਿੱਚ ਨਹੀਂ ਹੈ?" ਇਹ ਪ੍ਰਸ਼ਨ ਪੰਜਾਬੀ ਅਤੇ ਇਤਿਹਾਸ ਦੋਵਾਂ ਵਿੱਚ ਆਉਂਦਾ ਹੈ।',
          hi: '"कौन-सी बाणी किसी भी राग में नहीं है?" यह प्रश्न पंजाबी और इतिहास दोनों में पूछा जाता है।',
        },
      },
    ],
    summary: {
      en: 'Sri Guru Nanak Dev Ji (15 April 1469 – 22 September 1539) founded Sikhism on the principles of monotheism (Ik Onkar), universal brotherhood, women’s equality, and honest householder labor (Naam Japna, Kirat Karo, Wand Chhako). Through Four Udasis with Bhai Mardana, he carried his message across India, Sri Lanka, the Himalayas, and Mecca-Baghdad. Settling at Kartarpur on the Ravi in 1521, he institutionalized Sangat, Pangat (Langar), and Dharamsal, composed 974 hymns in 19 Raags, and appointed Bhai Lehna Ji as Guru Angad Dev Ji before his Jyoti-Jot in 1539.',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (15 ਅਪ੍ਰੈਲ 1469 – 22 ਸਤੰਬਰ 1539) ਨੇ ਇੱਕ ਅਕਾਲ ਪੁਰਖ (ੴ), ਸਰਬ-ਸਾਂਝੀਵਾਲਤਾ, ਇਸਤਰੀ ਸਨਮਾਨ ਅਤੇ ਕਿਰਤ ਦੇ ਸਿਧਾਂਤ (ਨਾਮ ਜਪੋ, ਕਿਰਤ ਕਰੋ, ਵੰਡ ਛਕੋ) ਉੱਤੇ ਸਿੱਖ ਧਰਮ ਦੀ ਨੀਂਹ ਰੱਖੀ। ਭਾਈ ਮਰਦਾਨਾ ਜੀ ਨਾਲ ਚਾਰ ਉਦਾਸੀਆਂ ਰਾਹੀਂ ਦੇਸ਼-ਵਿਦੇਸ਼ ਵਿੱਚ ਸੱਚ ਦਾ ਪ੍ਰਚਾਰ ਕੀਤਾ। 1521 ਵਿੱਚ ਰਾਵੀ ਕੰਢੇ ਕਰਤਾਰਪੁਰ ਵਸਾ ਕੇ ਸੰਗਤ, ਪੰਗਤ (ਲੰਗਰ) ਤੇ ਧਰਮਸਾਲ ਦੀਆਂ ਸੰਸਥਾਵਾਂ ਚਲਾਈਆਂ, 19 ਰਾਗਾਂ ਵਿੱਚ 974 ਸ਼ਬਦ ਰਚੇ ਅਤੇ ਭਾਈ ਲਹਿਣਾ ਜੀ ਨੂੰ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਵਜੋਂ ਗੁਰਗੱਦੀ ਸੌਂਪੀ।',
      hi: 'श्री गुरु नानक देव जी (15 अप्रैल 1469 – 22 सितंबर 1539) ने एकेश्वरवाद (इक ओंकार), मानव समानता, नारी सम्मान और ईमानदारी के श्रम (नाम जपो, कीरत करो, वंड छको) पर सिख धर्म की नींव रखी। भाई मरदाना के साथ चार उदासियों के माध्यम से भारत, श्रीलंका, हिमालय और मक्का-बगदाद तक सत्य का प्रचार किया। 1521 में रावी तट पर करतारपुर बसाकर संगत, पंगत (लंगर) और धर्मसाल संस्थाएं स्थापित कीं, 19 रागों में 974 शब्द रचे और 1539 में भाई लहणा जी को गुरु अंगद देव जी के रूप में उत्तराधिकारी नियुक्त किया।',
    },
    keyNotes: {
      en: [
        '📌 Birth: 15 April 1469 at Rai Bhoi di Talwandi (Nankana Sahib); Parents: Mehta Kalu Ji & Mata Tripta Ji.',
        '📌 Sister: Bebe Nanaki Ji; Wife: Mata Sulakhni Ji; Sons: Baba Sri Chand (Udasi sect) & Baba Lakhmi Das.',
        '📌 Sultanpur Lodhi: Served at Nawab Daulat Khan Lodhi’s Modikhana; Enlightenment at Kali Bein rivulet (c. 1499).',
        '📌 Four Udasis (E-S-N-W) with Bhai Mardana (Rabab): East (Eminabad/Lalo, Haridwar, Puri), South (Bidar, Sri Lanka), North (Mattan, Mount Sumeru), West (Mecca, Baghdad, Saidpur).',
        '📌 Contemporaries: Bahlul Lodi, Sikandar Lodi, Ibrahim Lodi, Mughal Emperor Babur (Baburvani composed after 1520 Saidpur massacre), and Kabir/Chaitanya.',
        '📌 Kartarpur Sahib: Founded in 1521 on River Ravi; institutions of Sangat, Pangat (Langar), and Dharamsal.',
        '📌 Bani: 974 hymns in 19 Raags; Japji Sahib (38 Pauris, Raag-free, 5 Khands), Asa di Var (24 Pauris), Sidh Gosht (Ramkali), Barah Maha (Tukhari).',
        '📌 Succession & Jyoti-Jot: Appointed Bhai Lehna Ji as Guru Angad Dev Ji; Jyoti-Jot on 22 September 1539 at Kartarpur.',
      ],
      pa: [
        '📌 ਪ੍ਰਕਾਸ਼: 15 ਅਪ੍ਰੈਲ 1469, ਰਾਇ ਭੋਇ ਦੀ ਤਲਵੰਡੀ (ਨਨਕਾਣਾ ਸਾਹਿਬ); ਮਾਤਾ ਤ੍ਰਿਪਤਾ ਜੀ ਤੇ ਪਿਤਾ ਮਹਿਤਾ ਕਾਲੂ ਜੀ।',
        '📌 ਭੈਣ: ਬੇਬੇ ਨਾਨਕੀ ਜੀ; ਪਤਨੀ: ਮਾਤਾ ਸੁਲੱਖਣੀ ਜੀ; ਸਪੁੱਤਰ: ਬਾਬਾ ਸ੍ਰੀ ਚੰਦ (ਉਦਾਸੀ ਮੱਤ) ਅਤੇ ਬਾਬਾ ਲਖਮੀ ਦਾਸ।',
        '📌 ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ: ਨਵਾਬ ਦੌਲਤ ਖਾਂ ਲੋਧੀ ਦੇ ਮੋਦੀਖਾਨੇ ਵਿੱਚ ਸੇਵਾ; ਕਾਲੀ ਵੇਈਂ ਨਦੀ ਵਿੱਚੋਂ ਗਿਆਨ ਪ੍ਰਾਪਤੀ (1499)।',
        '📌 ਚਾਰ ਉਦਾਸੀਆਂ (ਪੂਰਬ-ਦੱਖਣ-ਉੱਤਰ-ਪੱਛਮ): ਭਾਈ ਮਰਦਾਨਾ ਜੀ (ਰਬਾਬੀ) ਨਾਲ।',
        '📌 ਸਮਕਾਲੀ ਸ਼ਾਸਕ: ਬਹਿਲੋਲ ਲੋਧੀ, ਸਿਕੰਦਰ ਲੋਧੀ, ਇਬਰਾਹਿਮ ਲੋਧੀ ਅਤੇ ਮੁਗ਼ਲ ਬਾਦਸ਼ਾਹ ਬਾਬਰ (ਸੈਦਪੁਰ ਕਤਲੇਆਮ 1520 ਮਗਰੋਂ ਬਾਬਰਵਾਣੀ ਉਚਾਰੀ)।',
        '📌 ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ: 1521 ਵਿੱਚ ਰਾਵੀ ਦਰਿਆ ਕੰਢੇ ਵਸਾਇਆ; ਸੰਗਤ, ਪੰਗਤ (ਲੰਗਰ) ਅਤੇ ਧਰਮਸਾਲ ਦੀ ਸਥਾਪਨਾ।',
        '📌 ਬਾਣੀ: 19 ਰਾਗਾਂ ਵਿੱਚ 974 ਸ਼ਬਦ; ਜਪੁਜੀ ਸਾਹਿਬ (38 ਪਉੜੀਆਂ, 5 ਖੰਡ, ਰਾਗ-ਮੁਕਤ), ਆਸਾ ਦੀ ਵਾਰ (24 ਪਉੜੀਆਂ), ਸਿੱਧ ਗੋਸ਼ਟਿ (ਰਾਮਕਲੀ), ਬਾਰਹ ਮਾਹਾ (ਤੁਖਾਰੀ)।',
        '📌 ਗੁਰਗੱਦੀ ਤੇ ਜੋਤੀ-ਜੋਤਿ: ਭਾਈ ਲਹਿਣਾ ਜੀ (ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ) ਨੂੰ ਗੁਰਗੱਦੀ ਸੌਂਪੀ; 22 ਸਤੰਬਰ 1539 ਨੂੰ ਕਰਤਾਰਪੁਰ ਵਿਖੇ ਜੋਤੀ-ਜੋਤਿ ਸਮਾਏ।',
      ],
      hi: [
        '📌 जन्म: 15 अप्रैल 1469, राय भोए की तलवंडी (ननकाना साहिब); माता तृप्ता जी व पिता मेहता कालू जी।',
        '📌 बहन: बेबे नानकी जी; पत्नी: माता सुलखनी जी; पुत्र: बाबा श्री चंद (उदासी संप्रदाय) व बाबा लखमी दास।',
        '📌 सुल्तानपुर लोधी: नवाब दौलत खां लोधी के मोदीखाने में कार्य; काली बेईं नदी में ज्ञान प्राप्ति (1499)।',
        '📌 चार उदासियां (पूर्व-दक्षिण-उत्तर-पश्चिम): भाई मरदाना (रबाबी) के साथ।',
        '📌 समकालीन शासक: बहलोल लोदी, सिकंदर लोदी, इब्राहिम लोदी तथा मुग़ल शासक बाबर (1520 सैदपुर आक्रमण पर बाबरवाणी रची)।',
        '📌 करतारपुर साहिब: 1521 में रावी तट पर बसाया; संगत, पंगत (लंगर) और धर्मसाल संस्थाएं।',
        '📌 बाणी: 19 रागों में 974 शब्द; जपुजी साहिब (38 पौड़ियां, 5 खंड, राग-मुक्त), आसा दी वार (24 पौड़ियां), सिद्ध गोष्ठ (रामकली), बारह माहा (तुखारी)।',
        '📌 उत्तराधिकार व ज्योति-जोत: भाई लहणा जी (गुरु अंगद देव जी) को गद्दी सौंपी; 22 सितंबर 1539 को करतारपुर में ज्योति-जोत समाए।',
      ],
    },
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Chronology: 15 April 1469 (Birth at Rai Bhoi di Talwandi / Nankana Sahib) → 1487 (Marriage to Mata Sulakhni Ji at Batala) → 1499 (Kali Bein enlightenment at Sultanpur Lodhi) → 1500–1521 (Four Udasis with Bhai Mardana) → 1520–21 (Baburvani at Saidpur) → 1521 (Founded Kartarpur Sahib on Ravi) → 22 Sept 1539 (Appointed Bhai Lehna as Guru Angad Dev Ji; Jyoti-Jot at Kartarpur).',
          'Five Spiritual Realms (5 Khands in Japji Sahib, Pauris 34–37): 1. Dharam Khand (Righteous Duty) → 2. Gian Khand (Spiritual Knowledge) → 3. Saram Khand (Spiritual Effort & Humility) → 4. Karam Khand (Divine Grace) → 5. Sach Khand (Abode of Eternal Truth).',
          'Sacred Bani: 974 hymns across 19 Raags — Japji Sahib (Raag-free, 38 Pauris + 2 Saloks), Asa di Var (24 Pauris, Tunda Asraja dhuni), Sidh Gosht (Raag Ramkali, 73 stanzas), Dakhni Onkar (54 stanzas), Barah Maha (Raag Tukhari), Patti (Raag Asa), Sohila.',
        ],
        pa: [
          'ਜੀਵਨ ਕਾਲਕ੍ਰਮ: 15 ਅਪ੍ਰੈਲ 1469 (ਤਲਵੰਡੀ/ਨਨਕਾਣਾ ਸਾਹਿਬ ਵਿਖੇ ਪ੍ਰਕਾਸ਼) → 1487 (ਬਟਾਲਾ ਵਿਖੇ ਮਾਤਾ ਸੁਲੱਖਣੀ ਜੀ ਨਾਲ ਵਿਆਹ) → 1499 (ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ ਵਿਖੇ ਕਾਲੀ ਵੇਈਂ ਵਿੱਚੋਂ ਗਿਆਨ ਪ੍ਰਾਪਤੀ) → 1500–1521 (ਭਾਈ ਮਰਦਾਨਾ ਜੀ ਨਾਲ ਚਾਰ ਉਦਾਸੀਆਂ) → 1520–21 (ਸੈਦਪੁਰ ਵਿਖੇ ਬਾਬਰਵਾਣੀ) → 1521 (ਰਾਵੀ ਕੰਢੇ ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ) → 22 ਸਤੰਬਰ 1539 (ਭਾਈ ਲਹਿਣਾ ਜੀ ਨੂੰ ਗੁਰਗੱਦੀ ਤੇ ਜੋਤੀ-ਜੋਤਿ)।',
          'ਜਪੁਜੀ ਸਾਹਿਬ ਦੇ ਪੰਜ ਖੰਡ (ਪੌੜੀਆਂ 34–37): 1. ਧਰਮ ਖੰਡ → 2. ਗਿਆਨ ਖੰਡ → 3. ਸਰਮ ਖੰਡ → 4. ਕਰਮ ਖੰਡ → 5. ਸੱਚ ਖੰਡ।',
          'ਪਵਿੱਤਰ ਬਾਣੀ: 19 ਰਾਗਾਂ ਵਿੱਚ 974 ਸ਼ਬਦ — ਜਪੁਜੀ ਸਾਹਿਬ (ਰਾਗ-ਮੁਕਤ, 38 ਪਉੜੀਆਂ), ਆਸਾ ਦੀ ਵਾਰ (24 ਪਉੜੀਆਂ), ਸਿੱਧ ਗੋਸ਼ਟਿ (ਰਾਮਕਲੀ), ਦਖਣੀ ਓਅੰਕਾਰੁ, ਬਾਰਹ ਮਾਹਾ (ਤੁਖਾਰੀ)।',
        ],
        hi: [
          'जीवन कालक्रम: 15 अप्रैल 1469 (तलवंडी/ननकाना साहिब में जन्म) → 1487 (बटाला में माता सुलखनी जी से विवाह) → 1499 (सुल्तानपुर लोधी में काली बेईं नदी में ज्ञान प्राप्ति) → 1500–1521 (भाई मरदाना के साथ चार उदासियां) → 1520–21 (सैदपुर में बाबरवाणी) → 1521 (रावी तट पर करतारपुर साहिब की स्थापना) → 22 सितंबर 1539 (भाई लहणा को गुरगद्दी एवं ज्योति-जोत)।',
          'जपुजी साहिब के पांच खंड (पौड़ियां 34–37): 1. धर्म खंड → 2. ज्ञान खंड → 3. सरम खंड → 4. करम खंड → 5. सच खंड।',
          'पवित्र बाणी: 19 रागों में 974 शब्द — जपुजी साहिब (राग-मुक्त, 38 पौड़ियां), आसा दी वार (24 पौड़ियां), सिद्ध गोष्ठ (रामकली), दखनी ओअंकार, बारह माहा (तुखारी)।',
        ],
      },
      examTraps: {
        en: [
          'Trap: Barah Maha of Guru Nanak Dev Ji is in Raag Tukhari, whereas Barah Maha of Guru Arjan Dev Ji is in Raag Majh.',
          'Trap: Kartarpur on River Ravi (Pakistan) was founded by Guru Nanak Dev Ji (1521); Kartarpur in Jalandhar (Doaba) was founded by Guru Arjan Dev Ji (1594).',
        ],
        pa: [
          'ਧੋਖਾ: ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਬਾਰਹ ਮਾਹਾ "ਰਾਗੁ ਤੁਖਾਰੀ" ਵਿੱਚ ਹੈ, ਜਦਕਿ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦਾ ਬਾਰਹ ਮਾਹਾ "ਰਾਗੁ ਮਾਝ" ਵਿੱਚ ਹੈ।',
          'ਧੋਖਾ: ਰਾਵੀ ਕੰਢੇ ਕਰਤਾਰਪੁਰ (1521) ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਵਸਾਇਆ, ਜਦਕਿ ਜਲੰਧਰ ਵਾਲਾ ਕਰਤਾਰਪੁਰ (1594) ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਵਸਾਇਆ।',
        ],
        hi: [
          'धोखा: गुरु नानक देव जी का बारह माहा "राग तुखारी" में है, जबकि गुरु अर्जन देव जी का बारह माहा "राग माझ" में है।',
          'धोखा: रावी तट वाला करतारपुर (1521) गुरु नानक देव जी ने बसाया, जबकि जालंधर वाला करतारपुर (1594) गुरु अर्जन देव जी ने बसाया।',
        ],
      },
    },
    flashcards: [
      {
        id: 'fc-gn-1',
        q: {
          en: 'In which rivulet did Sri Guru Nanak Dev Ji attain spiritual enlightenment at Sultanpur Lodhi?',
          pa: 'ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੂੰ ਕਿਹੜੀ ਨਦੀ ਵਿੱਚ ਗਿਆਨ ਪ੍ਰਾਪਤੀ ਹੋਈ ਸੀ?',
          hi: 'सुल्तानपुर लोधी में श्री गुरु नानक देव जी को किस नदी में ज्ञान की प्राप्ति हुई थी?',
        },
        a: {
          en: 'Kali Bein (or Veyi) rivulet around 1499 CE, after which he proclaimed "Na Koi Hindu, Na Koi Musalman".',
          pa: 'ਕਾਲੀ ਵੇਈਂ ਨਦੀ ਵਿੱਚ (ਲਗਭਗ 1499 ਈ.), ਜਿਸ ਮਗਰੋਂ ਆਪ ਜੀ ਨੇ "ਨਾ ਕੋਈ ਹਿੰਦੂ, ਨਾ ਕੋਈ ਮੁਸਲਮਾਨ" ਦਾ ਉਪਦੇਸ਼ ਦਿੱਤਾ।',
          hi: 'काली बेईं नदी में (लगभग 1499 ई.), जिसके पश्चात उन्होंने "ना कोई हिंदू, ना कोई मुसलमान" का उद्घोष किया।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-gn-2',
        q: {
          en: 'Which Bani of Guru Nanak Dev Ji records his philosophical debate with the 84 Nath Yogis on Mount Sumeru?',
          pa: 'ਸੁਮੇਰ ਪਰਬਤ ਉੱਤੇ 84 ਸਿੱਧਾਂ ਨਾਲ ਹੋਏ ਸੰਵਾਦ ਨੂੰ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਕਿਹੜੀ ਬਾਣੀ ਵਿੱਚ ਦਰਜ ਕੀਤਾ ਗਿਆ ਹੈ?',
          hi: 'सुमेरु पर्वत पर 84 सिद्धों के साथ हुए संवाद को गुरु नानक देव जी की किस बाणी में दर्ज किया गया है?',
        },
        a: {
          en: 'Sidh Gosht (composed in Raag Ramkali, comprising 73 stanzas).',
          pa: 'ਸਿੱਧ ਗੋਸ਼ਟਿ (ਰਾਗੁ ਰਾਮਕਲੀ ਵਿੱਚ, 73 ਪਦੇ)।',
          hi: 'सिद्ध गोष्ठ (राग रामकली में रचित, 73 पदे)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-gn-3',
        q: {
          en: 'How many total hymns and in how many Raags did Sri Guru Nanak Dev Ji compose in Sri Guru Granth Sahib Ji?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਕੁੱਲ ਕਿੰਨੇ ਸ਼ਬਦ ਅਤੇ ਕਿੰਨੇ ਰਾਗਾਂ ਵਿੱਚ ਦਰਜ ਹਨ?',
          hi: 'श्री गुरु ग्रंथ साहिब जी में गुरु नानक देव जी के कुल कितने शब्द और कितने रागों में दर्ज हैं?',
        },
        a: {
          en: '974 hymns (Shabads/Saloks) across 19 Raags.',
          pa: '19 ਰਾਗਾਂ ਵਿੱਚ ਕੁੱਲ 974 ਸ਼ਬਦ।',
          hi: '19 रागों में कुल 974 शब्द।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-gn-4',
        q: {
          en: 'In which Bani does the famous verse honoring women — "So kyon manda aakhiye jit jammé rajan" — appear?',
          pa: 'ਇਸਤਰੀ ਜਾਤੀ ਦੇ ਸਨਮਾਨ ਵਿੱਚ ਉਚਾਰੀ ਪੰਕਤੀ "ਸੋ ਕਿਉ ਮੰਦਾ ਆਖੀਐ ਜਿਤੁ ਜੰਮਹਿ ਰਾਜਾਨ" ਕਿਹੜੀ ਬਾਣੀ ਵਿੱਚ ਦਰਜ ਹੈ?',
          hi: 'नारी सम्मान में रचित प्रसिद्ध पंक्ति "सो किउ मंदा आखीऐ जितु जंमहि राजान" किस बाणी में दर्ज है?',
        },
        a: {
          en: 'Asa di Var ( composed by Sri Guru Nanak Dev Ji in Raag Asa, 24 Pauris).',
          pa: 'ਆਸਾ ਦੀ ਵਾਰ (ਰਾਗੁ ਆਸਾ, 24 ਪਉੜੀਆਂ)।',
          hi: 'आसा दी वार (राग आसा, 24 पौड़ियां)।',
        },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Sri Guru Nanak Dev Ji: Life, Udasis & Teachings | PSEB & Master Cadre History',
        channel: 'NCERT / PSEB Official Archive',
        url: 'https://www.youtube.com/results?search_query=Sri+Guru+Nanak+Dev+Ji+History+of+Punjab+PSEB+Class+10',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'History and Culture of Punjab (Class 9 & 10)',
        author: 'Punjab School Education Board (PSEB), Mohali',
        chapters: 'Chapter: Sri Guru Nanak Dev Ji and His Teachings',
        type: 'state-board',
      },
      {
        title: 'A History of the Sikhs (Volume 1: 1469–1839)',
        author: 'Khushwant Singh (Oxford University Press)',
        chapters: 'Part I: The Birth of Sikhism & Guru Nanak',
        type: 'standard',
      },
    ],
    syllabusReference: {
      title: 'ERB Punjab Master Cadre Social Science & PSSSB Punjab History Syllabus',
      url: 'https://educationrecruitmentboard.com',
      body: 'Education Recruitment Board (ERB) & PSSSB, Govt of Punjab',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 2: CONSOLIDATION OF SIKHISM — GURU ANGAD DEV JI, GURU AMAR DAS JI & GURU RAM DAS JI (1539 - 1581)
  // ==========================================================================
  'guru-angad-amar-ram-das': {
    id: 'guru-angad-amar-ram-das',
    topicId: 'guru-angad-amar-ram-das',
    subjectId: 'social-science',
    category: 'history',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Guru Angad Dev Ji, Guru Amar Das Ji & Guru Ram Das Ji (1539–1581): Institutional Consolidation',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ, ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਅਤੇ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (1539–1581): ਸਿੱਖ ਸੰਸਥਾਵਾਂ ਦਾ ਵਿਕਾਸ',
      hi: 'श्री गुरु अंगद देव जी, गुरु अमरदास जी एवं गुरु रामदास जी (1539–1581): सिख संस्थाओं का सुदृढ़ीकरण',
    },
    examRelevance: 'Punjab Master Cadre SST (3–4 Qs), PSSSB Clerk (2–3 Qs), ETT, Patwari & Punjab Police',
    estimatedTime: '45 mins',
    prerequisites: {
      en: [
        'Foundational teachings of Sri Guru Nanak Dev Ji at Kartarpur Sahib and the succession of Bhai Lehna Ji in 1539.',
        'Mughal-Afghan conflict in India (Sher Shah Suri vs Humayun, and Emperor Akbar’s religious policy).',
      ],
      pa: [
        'ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਅਤੇ 1539 ਵਿੱਚ ਭਾਈ ਲਹਿਣਾ ਜੀ ਦੀ ਚੋਣ।',
        'ਮੁਗ਼ਲ-ਅਫ਼ਗਾਨ ਸੰਘਰਸ਼ (ਹੁਮਾਯੂੰ ਅਤੇ ਸ਼ੇਰ ਸ਼ਾਹ ਸੂਰੀ) ਅਤੇ ਸਮਰਾਟ ਅਕਬਰ ਦੀ ਧਾਰਮਿਕ ਨੀਤੀ।',
      ],
      hi: [
        'करतारपुर साहिब में श्री गुरु नानक देव जी की शिक्षाएं तथा 1539 में भाई लहणा जी का उत्तराधिकार।',
        'मुगल-अफगान संघर्ष (हुमायूं व शेरशाह सूरी) और सम्राट अकबर की धार्मिक नीति।',
      ],
    },
    learningObjectives: {
      en: [
        'Detail Guru Angad Dev Ji’s standardization of Gurmukhi script, Mal Akhara, Langar expansion by Mata Khivi Ji, and rejection of Baba Sri Chand’s ascetic Udasi sect.',
        'Analyze Guru Amar Das Ji’s social reforms (abolition of Sati, Purdah, female infanticide), construction of the 84-step Baoli at Goindwal, the 22 Manjis & 52 Pirhas administration, and Anand Sahib.',
        'Trace Guru Ram Das Ji’s foundation of Ramdaspur (Amritsar), excavation of Santokhsar and Amritsar Sarovars, the Masand system, and composition of the 4 Laavan for Anand Karaj.',
      ],
      pa: [
        'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਦੁਆਰਾ ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਮਿਆਰੀਕਰਨ, ਮੱਲ ਅਖਾੜਾ, ਮਾਤਾ ਖੀਵੀ ਜੀ ਦਾ ਲੰਗਰ ਵਿੱਚ ਯੋਗਦਾਨ ਅਤੇ ਉਦਾਸੀ ਮੱਤ ਤੋਂ ਨਿਖੇੜਾ ਸਮਝਣਾ।',
        'ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦੇ ਸਮਾਜਿਕ ਸੁਧਾਰ (ਸਤੀ ਪ੍ਰਥਾ, ਪਰਦਾ ਪ੍ਰਥਾ ਦਾ ਵਿਰੋਧ), ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਦੀ 84 ਪੌੜੀਆਂ ਵਾਲੀ ਬਾਉਲੀ, 22 ਮੰਜੀਆਂ ਅਤੇ ਅਨੰਦੁ ਸਾਹਿਬ ਦੀ ਰਚਨਾ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
        'ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਦੁਆਰਾ ਰਾਮਦਾਸਪੁਰ (ਅੰਮ੍ਰਿਤਸਰ) ਦੀ ਸਥਾਪਨਾ, ਸੰਤੋਖਸਰ ਅਤੇ ਅੰਮ੍ਰਿਤਸਰ ਸਰੋਵਰ, ਮਸੰਦ ਪ੍ਰਥਾ ਅਤੇ ਚਾਰ ਲਾਵਾਂ ਦੀ ਰਚਨਾ ਨੂੰ ਜਾਣਨਾ।',
      ],
      hi: [
        'गुरु अंगद देव जी द्वारा गुरमुखी लिपि का मानकीकरण, मल्ल अखाड़ा, माता खीवी जी का लंगर योगदान और उदासी मत से पृथक्करण को समझना।',
        'गुरु अमरदास जी के समाज सुधार (सती प्रथा, पर्दा प्रथा विरोध), गोइंदवाल की 84 सीढ़ियों वाली बावली, 22 मंजियां और अनंद साहिब का अध्ययन करना।',
        'गुरु रामदास जी द्वारा रामदासपुर (अमृतसर) की स्थापना, संतोखसर व अमृतसर सरोवर, मसंद प्रथा और चार लावां की रचना को जानना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">1️⃣ Second Guru: Sri Guru Angad Dev Ji (Guruship: 1539–1552)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              Born as <strong>Bhai Lehna Ji</strong> on <strong>31 March 1504</strong> at <strong>Matte di Sarai</strong> (Sri Muktsar Sahib district) to father <strong>Pheru Mal</strong> (a Trehan Khatri merchant) and mother <strong>Mata Sabhirai (Ramo) Ji</strong>. Married to <strong>Mata Khivi Ji</strong> (1520), they had two sons (<strong>Dasu</strong> and <strong>Datu</strong>) and two daughters (<strong>Bibi Amro</strong> and <strong>Bibi Anokhi</strong>).
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Headquarters at Khadur Sahib:</strong> Initially a devotee of Goddess Durga, Bhai Lehna met Guru Nanak Dev Ji at Kartarpur and became his most obedient disciple, earning the name <em>Angad</em> ("part of my own body/limb"). To avoid succession friction with Guru Nanak's sons, Guru Angad shifted his headquarters to <strong>Khadur Sahib</strong> (Tarn Taran district).</li>
              <li><strong>Standardization of Gurmukhi Script (Paintees Akhari):</strong> Guru Angad Dev Ji reorganized and standardized the indigenous Landa/Takri characters into the <strong>35-letter Gurmukhi alphabet</strong>, adding vowel signs (<em>Laga Matra</em>), and established Gurmukhi schools (Pathshalas) for children, breaking the priestly monopoly over Sanskrit.</li>
              <li><strong>Preservation of Guru Nanak’s Bani & Early Janamsakhis:</strong> Collected Guru Nanak Dev Ji's hymns and composed <strong>62 (or 63) Saloks</strong> (recorded in Vars of Guru Granth Sahib; he composed no full Shabads, only Saloks).</li>
              <li><strong>Mata Khivi Ji & Expansion of Langar:</strong> His wife <strong>Mata Khivi Ji</strong> is the <strong>only Guru's consort mentioned by name in Sri Guru Granth Sahib Ji</strong> (by Bhai Satta and Balwand in <em>Raag Ramkali</em>, praising her generous distribution of <em>Kheer</em> with clarified butter).</li>
              <li><strong>Mal Akhara (Physical Fitness):</strong> Instituted the <strong>Mal Akhara</strong> (wrestling arena) at Khadur Sahib under the motto <em>"A sound mind in a sound body."</em></li>
              <li><strong>Rejection of Udasi Asceticism:</strong> Clearly separated householder Sikhism from the ascetic <em>Udasi sect</em> founded by Baba Sri Chand, affirming that active family and social responsibility is mandatory for a Sikh.</li>
              <li><strong>Meeting with Emperor Humayun (1540):</strong> After being defeated by Sher Shah Suri at the Battle of Kanauj (1540), Mughal Emperor <strong>Humayun</strong> visited Guru Angad Dev Ji at Khadur Sahib. Foundation of <strong>Goindwal Sahib</strong> was laid in 1546 on the banks of River Beas by his devout disciple Bhai Amar Das Ji.</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">2️⃣ Third Guru: Sri Guru Amar Das Ji (Guruship: 1552–1574)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              Born on <strong>5 May 1479</strong> at village <strong>Basarke Gillan</strong> (Amritsar district) into the Bhalla Khatri clan to father <strong>Tej Bhan Bhalla</strong> and mother <strong>Mata Bakht Kaur (Sulakhni) Ji</strong>. Married to <strong>Mata Mansa Devi Ji</strong>; they had two sons (<strong>Baba Mohan</strong> and <strong>Baba Mohri</strong>) and two daughters (<strong>Bibi Dani</strong> and <strong>Bibi Bhani</strong>). He became a Sikh at age 61 after hearing Guru Nanak’s Bani recited by <strong>Bibi Amro</strong> (Guru Angad’s daughter) and assumed Guruship at age 73.
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Headquarters & Baoli at Goindwal Sahib (1559):</strong> Shifted headquarters to <strong>Goindwal Sahib</strong> and constructed the historic <strong>Baoli Sahib</strong> with <strong>84 steps</strong> (completed in 1559 CE), symbolizing liberation from the cycle of 84 lakh life-forms upon reciting <em>Japji Sahib</em> on each step.</li>
              <li><strong>"Pehle Pangat Phir Sangat" & Emperor Akbar's Visit:</strong> Made sitting in the communal <em>Pangat</em> (Langar row) mandatory before meeting the Guru in <em>Sangat</em>. When Mughal Emperor <strong>Akbar</strong> visited Goindwal Sahib, he partook of coarse rice in the Pangat first. Akbar offered royal revenue-free land (Jagir) for Langar, which Guru Ji declined; Akbar then gifted the pargana of several villages as a marriage gift to Guru Ji’s daughter <strong>Bibi Bhani</strong>.</li>
              <li><strong>The Manji & Pirha Administrative System:</strong> As Sikhism spread rapidly, Guru Amar Das Ji divided the Sikh spiritual empire into <strong>22 Manjis</strong> (dioceses/preaching districts, including women preachers like Bibi Matho and Mai Sewan) and <strong>52 Pirhas</strong> (sub-centres).</li>
              <li><strong>Radical Social Reforms:</strong>
                <br/>• Strictly prohibited <strong>Sati</strong> (widow burning), declaring: <em>"Satiian eh na aakhiyan jo marhiyan lag jalann..."</em> (They are not Satis who burn themselves on the pyre; true Satis bear the shock of separation with moral fortitude).
                <br/>• Abolished <strong>Purdah</strong> (veiling of women), condemned <strong>female infanticide</strong>, and promoted <strong>widow remarriage</strong>.
              </li>
              <li><strong>Bani, Goindwal Pothis & Festivals:</strong> Composed <strong>907 hymns across 17 Raags</strong>, most famously the 40-stanza <strong>Anand Sahib</strong> (in <em>Raag Ramkali</em>). Compiled the <strong>Goindwal Pothis (Mohan Pothis)</strong> in two volumes. Fixed <strong>Baisakhi</strong> and <strong>Diwali</strong> (and Maghi) for annual congregational gatherings at Goindwal.</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">3️⃣ Fourth Guru: Sri Guru Ram Das Ji (Guruship: 1574–1581)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              Born as <strong>Bhai Jetha Ji</strong> ("first-born") on <strong>24 September 1534</strong> at <strong>Chuna Mandi, Lahore</strong> into the Sodhi Khatri clan to father <strong>Hari Das Sodhi</strong> and mother <strong>Mata Daya Kaur (Anup Devi) Ji</strong>. Orphaned at age 7, he grew up with his maternal grandmother at Basarke, earning an honest living selling boiled gram (<em>Ghungnian</em>). Married <strong>Bibi Bhani Ji</strong> (daughter of Guru Amar Das Ji) in 1554; they had three sons: <strong>Prithi Chand</strong>, <strong>Mahadev</strong>, and <strong>Arjan Dev</strong>.
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Foundation of Amritsar (Chakk Guru / Ramdaspur, 1577):</strong> Under Guru Amar Das Ji's instructions, Bhai Jetha established a new settlement in <strong>1574/1577 CE</strong> initially called <strong>Guru Ka Chakk</strong> or <strong>Chakk Ramdas / Ramdaspur</strong>. He began excavating two sacred tanks: <strong>Santokhsar</strong> and <strong>Amritsar</strong> ("Pool of Nectar of Immortality"), overseen by <strong>Baba Buddha Ji</strong>. To make Ramdaspur a thriving economic hub, he invited <strong>52 different trades and crafts</strong> (leading to the historic <em>Guru Bazaar</em>).</li>
              <li><strong>The Masand System:</strong> Instituted the <strong>Masand system</strong> (from Persian <em>Masnad-i-Ali</em>, meaning "His Excellency") — authorized deputies sent across distant provinces to preach Sikhism and collect voluntary offerings from Sikhs for the construction of the Sarovars and Langar.</li>
              <li><strong>Reconciliation with the Udasi Sect:</strong> Baba Sri Chand (elder son of Guru Nanak Dev Ji) visited Guru Ram Das Ji. Impressed by Guru Ram Das Ji’s extraordinary humility (wiping Sri Chand's feet with his long beard), Baba Sri Chand ended Udasi estrangement.</li>
              <li><strong>Bani, Laavan & Musical Contribution:</strong> Composed <strong>679 hymns in 30 Raags</strong> (introducing 11 new Raags to Sikh musicology). Authored the <strong>4 Laavan</strong> in <em>Raag Suhi</em> (establishing the distinct Sikh marriage ceremony, <strong>Anand Karaj</strong>) and the <em>Ghorian</em> (wedding songs).</li>
              <li><strong>Succession (1581):</strong> Bypassing his ambitious eldest son <strong>Prithi Chand</strong> (who founded the rival <em>Mina</em> sect) and ascetic middle son Mahadev, Guru Ram Das Ji appointed his youngest son <strong>Guru Arjan Dev Ji</strong> as the Fifth Guru on 1 September 1581 at Goindwal Sahib. From this point onward, Guruship remained within the <strong>Sodhi lineage</strong>.</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-bold text-white mb-3">📊 4. Comparative Matrix: Gurus 2, 3 & 4</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-slate-700">
                <thead>
                  <tr class="bg-slate-800 text-indigo-300">
                    <th class="p-2 border border-slate-700">Attribute</th>
                    <th class="p-2 border border-slate-700">Guru Angad Dev Ji (2nd)</th>
                    <th class="p-2 border border-slate-700">Guru Amar Das Ji (3rd)</th>
                    <th class="p-2 border border-slate-700">Guru Ram Das Ji (4th)</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300">
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">Original Name & Clan</td>
                    <td class="p-2">Bhai Lehna (Trehan Khatri)</td>
                    <td class="p-2">Amar Das (Bhalla Khatri)</td>
                    <td class="p-2">Bhai Jetha (Sodhi Khatri)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">Birthplace & Year</td>
                    <td class="p-2">Matte di Sarai (1504)</td>
                    <td class="p-2">Basarke Gillan (1479)</td>
                    <td class="p-2">Chuna Mandi, Lahore (1534)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">Guruship Tenure</td>
                    <td class="p-2">1539–1552 (Khadur Sahib)</td>
                    <td class="p-2">1552–1574 (Goindwal Sahib)</td>
                    <td class="p-2">1574–1581 (Ramdaspur/Amritsar)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">Key Institutions</td>
                    <td class="p-2">Gurmukhi (35 letters), Mal Akhara</td>
                    <td class="p-2">84-step Baoli, 22 Manjis, 52 Pirhas</td>
                    <td class="p-2">Amritsar & Santokhsar, Masand System</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold text-white">Hymns in Guru Granth Sahib</td>
                    <td class="p-2">62 (or 63) Saloks</td>
                    <td class="p-2">907 Hymns in 17 Raags (Anand Sahib)</td>
                    <td class="p-2">679 Hymns in 30 Raags (4 Laavan)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold text-white">Mughal Contemporary</td>
                    <td class="p-2">Humayun & Sher Shah Suri</td>
                    <td class="p-2">Emperor Akbar</td>
                    <td class="p-2">Emperor Akbar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">1️⃣ ਦੂਜੇ ਗੁਰੂ: ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ (ਗੁਰਗੱਦੀ ਕਾਲ: 1539–1552)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ (ਮੁੱਢਲਾ ਨਾਮ <strong>ਭਾਈ ਲਹਿਣਾ ਜੀ</strong>) ਦਾ ਜਨਮ <strong>31 ਮਾਰਚ 1504</strong> ਨੂੰ <strong>ਮੱਤੇ ਦੀ ਸਰਾਂ</strong> (ਜ਼ਿਲ੍ਹਾ ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ) ਵਿਖੇ ਪਿਤਾ <strong>ਬਾਬਾ ਫੇਰੂ ਮੱਲ ਜੀ</strong> (ਤ੍ਰੇਹਨ ਖੱਤਰੀ) ਅਤੇ ਮਾਤਾ <strong>ਸਭਿਰਾਈ (ਰਾਮੋ) ਜੀ</strong> ਦੇ ਘਰ ਹੋਇਆ। ਉਹਨਾਂ ਦਾ ਵਿਆਹ <strong>ਮਾਤਾ ਖੀਵੀ ਜੀ</strong> ਨਾਲ ਹੋਇਆ ਅਤੇ ਉਹਨਾਂ ਦੇ ਦੋ ਸਪੁੱਤਰ (<strong>ਦਾਸੂ ਜੀ</strong> ਅਤੇ <strong>ਦਾਤੂ ਜੀ</strong>) ਤੇ ਦੋ ਸਪੁੱਤਰੀਆਂ (<strong>ਬੀਬੀ ਅਮਰੋ ਜੀ</strong> ਅਤੇ <strong>ਬੀਬੀ ਅਨੋਖੀ ਜੀ</strong>) ਸਨ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਖਡੂਰ ਸਾਹਿਬ ਨੂੰ ਕੇਂਦਰ ਬਣਾਉਣਾ:</strong> ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਉਹਨਾਂ ਦੀ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਵੇਖ ਕੇ ਉਹਨਾਂ ਨੂੰ ਆਪਣਾ 'ਅੰਗ' ਸਮਝਦਿਆਂ 'ਅੰਗਦ' ਨਾਮ ਦਿੱਤਾ। ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਸਪੁੱਤਰਾਂ ਨਾਲ ਕਿਸੇ ਟਕਰਾਅ ਤੋਂ ਬਚਣ ਲਈ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ <strong>ਖਡੂਰ ਸਾਹਿਬ</strong> (ਜ਼ਿਲ੍ਹਾ ਤਰਨਤਾਰਨ) ਨੂੰ ਆਪਣਾ ਮੁੱਖ ਪ੍ਰਚਾਰ ਕੇਂਦਰ ਬਣਾਇਆ।</li>
              <li><strong>ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਮਿਆਰੀਕਰਨ (ਪੈਂਤੀ ਅੱਖਰੀ):</strong> ਗੁਰੂ ਜੀ ਨੇ ਪੰਜਾਬ ਦੀ ਪ੍ਰਾਚੀਨ ਲੰਡੇ/ਟਾਕਰੀ ਲਿਪੀ ਨੂੰ ਸੋਧ ਕੇ <strong>35 ਅੱਖਰਾਂ ਵਾਲੀ ਗੁਰਮੁਖੀ ਲਿਪੀ</strong> ਨੂੰ ਨਿਯਮਬੱਧ ਕੀਤਾ, ਲਗਾਂ-ਮਾਤਰਾਵਾਂ ਲਗਾਈਆਂ ਅਤੇ ਬੱਚਿਆਂ ਲਈ ਬਾਲ-ਬੋਧ/ਪਾਠਸ਼ਾਲਾਵਾਂ ਸ਼ੁਰੂ ਕੀਤੀਆਂ।</li>
              <li><strong>ਬਾਣੀ ਸੰਭਾਲ ਅਤੇ ਸਲੋਕ:</strong> ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਬਾਣੀ ਇਕੱਤਰ ਕੀਤੀ ਅਤੇ ਆਪ <strong>62 (ਜਾਂ 63) ਸਲੋਕਾਂ</strong> ਦੀ ਰਚਨਾ ਕੀਤੀ ਜੋ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀਆਂ ਵੱਖ-ਵੱਖ ਵਾਰਾਂ ਵਿੱਚ ਦਰਜ ਹਨ।</li>
              <li><strong>ਮਾਤਾ ਖੀਵੀ ਜੀ ਅਤੇ ਲੰਗਰ ਪ੍ਰਥਾ:</strong> ਮਾਤਾ ਖੀਵੀ ਜੀ ਨੇ ਲੰਗਰ ਦੀ ਸੇਵਾ ਨਿਭਾਈ। ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ <strong>ਸਿਰਫ਼ ਮਾਤਾ ਖੀਵੀ ਜੀ ਦਾ ਨਾਮ</strong> ਹੀ ਗੁਰੂ-ਮਹਿਲ ਵਜੋਂ ਦਰਜ ਹੈ (ਭਾਈ ਸੱਤਾ ਅਤੇ ਬਲਵੰਡ ਦੀ ਵਾਰ, ਰਾਗੁ ਰਾਮਕਲੀ ਵਿੱਚ ਘਿਉ ਵਾਲੀ ਖੀਰ ਦੇ ਲੰਗਰ ਦਾ ਜ਼ਿਕਰ)।</li>
              <li><strong>ਮੱਲ ਅਖਾੜਾ ਅਤੇ ਉਦਾਸੀ ਮੱਤ ਤੋਂ ਨਿਖੇੜਾ:</strong> ਸਰੀਰਕ ਤੰਦਰੁਸਤੀ ਲਈ ਖਡੂਰ ਸਾਹਿਬ ਵਿਖੇ <strong>ਮੱਲ ਅਖਾੜਾ</strong> (ਕੁਸ਼ਤੀ) ਸ਼ੁਰੂ ਕੀਤਾ। ਬਾਬਾ ਸ੍ਰੀ ਚੰਦ ਜੀ ਦੇ ਤਿਆਗੀ 'ਉਦਾਸੀ ਮੱਤ' ਨੂੰ ਸਿੱਖੀ ਦੇ ਗ੍ਰਹਿਸਥ ਮਾਰਗ ਤੋਂ ਸਪੱਸ਼ਟ ਤੌਰ 'ਤੇ ਵੱਖ ਰੱਖਿਆ।</li>
              <li><strong>ਹੁਮਾਯੂੰ ਨਾਲ ਮੁਲਾਕਾਤ (1540):</strong> ਕਨੌਜ ਦੀ ਲੜਾਈ ਵਿੱਚ ਸ਼ੇਰ ਸ਼ਾਹ ਸੂਰੀ ਹੱਥੋਂ ਹਾਰਨ ਮਗਰੋਂ ਮੁਗ਼ਲ ਬਾਦਸ਼ਾਹ <strong>ਹੁਮਾਯੂੰ</strong> ਖਡੂਰ ਸਾਹਿਬ ਵਿਖੇ ਗੁਰੂ ਜੀ ਦੇ ਦਰਬਾਰ ਵਿੱਚ ਆਇਆ। 1546 ਵਿੱਚ ਬਿਆਸ ਦਰਿਆ ਦੇ ਕੰਢੇ <strong>ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ</strong> ਦੀ ਨੀਂਹ ਰੱਖੀ ਗਈ।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">2️⃣ ਤੀਜੇ ਗੁਰੂ: ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (ਗੁਰਗੱਦੀ ਕਾਲ: 1552–1574)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਜਨਮ <strong>5 ਮਈ 1479</strong> ਨੂੰ ਪਿੰਡ <strong>ਬਾਸਰਕੇ ਗਿੱਲਾਂ</strong> (ਜ਼ਿਲ੍ਹਾ ਅੰਮ੍ਰਿਤਸਰ) ਵਿਖੇ ਭੱਲਾ ਖੱਤਰੀ ਪਰਿਵਾਰ ਵਿੱਚ ਪਿਤਾ <strong>ਤੇਜ ਭਾਨ ਭੱਲਾ ਜੀ</strong> ਅਤੇ ਮਾਤਾ <strong>ਬਖ਼ਤ ਕੌਰ (ਸੁਲੱਖਣੀ) ਜੀ</strong> ਦੇ ਘਰ ਹੋਇਆ। ਪਤਨੀ <strong>ਮਾਤਾ ਮਨਸਾ ਦੇਵੀ ਜੀ</strong>; ਦੋ ਸਪੁੱਤਰ (<strong>ਬਾਬਾ ਮੋਹਨ</strong> ਅਤੇ <strong>ਬਾਬਾ ਮੋਹਰੀ</strong>) ਅਤੇ ਦੋ ਸਪੁੱਤਰੀਆਂ (<strong>ਬੀਬੀ ਦਾਨੀ</strong> ਅਤੇ <strong>ਬੀਬੀ ਭਾਨੀ</strong>)। ਬੀਬੀ ਅਮਰੋ ਜੀ ਦੇ ਮੁੱਖੋਂ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਬਾਣੀ ਸੁਣ ਕੇ 61 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਦੇ ਸਿੱਖ ਬਣੇ ਅਤੇ 73 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰਗੱਦੀ ਸੰਭਾਲੀ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਦੀ ਬਾਉਲੀ (1559):</strong> ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਵਿਖੇ <strong>84 ਪੌੜੀਆਂ ਵਾਲੀ ਇਤਿਹਾਸਕ ਬਾਉਲੀ</strong> ਦਾ ਨਿਰਮਾਣ ਕਰਵਾਇਆ (ਸਿੱਖ ਇਤਿਹਾਸ ਦਾ ਪਹਿਲਾ ਤੀਰਥ ਕੇਂਦਰ)।</li>
              <li><strong>"ਪਹਿਲੇ ਪੰਗਤ ਪਾਛੈ ਸੰਗਤ" ਅਤੇ ਅਕਬਰ ਦੀ ਫੇਰੀ:</strong> ਨਿਯਮ ਬਣਾਇਆ ਕਿ ਗੁਰੂ ਦੇ ਦਰਸ਼ਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹਰ ਵਿਅਕਤੀ ਲੰਗਰ ਦੀ ਪੰਗਤ ਵਿੱਚ ਬੈਠ ਕੇ ਪ੍ਰਸ਼ਾਦਾ ਛਕੇਗਾ। ਮੁਗ਼ਲ ਸਮਰਾਟ <strong>ਅਕਬਰ</strong> ਅਤੇ ਹਰਿਦੁਆਰ ਦੇ ਰਾਜੇ ਨੇ ਵੀ ਪੰਗਤ ਵਿੱਚ ਬੈਠ ਕੇ ਲੰਗਰ ਛਕਿਆ। ਅਕਬਰ ਨੇ ਲੰਗਰ ਲਈ ਜਗੀਰ ਦੇਣੀ ਚਾਹੀ ਪਰ ਗੁਰੂ ਜੀ ਨੇ ਇਨਕਾਰ ਕਰ ਦਿੱਤਾ, ਜਿਸ ਪਿੱਛੋਂ ਅਕਬਰ ਨੇ ਉਹ ਜ਼ਮੀਨ <strong>ਬੀਬੀ ਭਾਨੀ ਜੀ</strong> ਦੇ ਨਾਮ ਲਗਵਾ ਦਿੱਤੀ।</li>
              <li><strong>22 ਮੰਜੀਆਂ ਅਤੇ 52 ਪੀੜ੍ਹੇ:</strong> ਸਿੱਖੀ ਦੇ ਪ੍ਰਚਾਰ ਲਈ ਪੂਰੇ ਖੇਤਰ ਨੂੰ <strong>22 ਮੰਜੀਆਂ</strong> (ਪ੍ਰਚਾਰਕ ਖੇਤਰਾਂ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਇਸਤਰੀਆਂ ਨੂੰ ਵੀ ਮੰਜੀਦਾਰ ਬਣਾਇਆ) ਅਤੇ <strong>52 ਪੀੜ੍ਹਿਆਂ</strong> ਵਿੱਚ ਵੰਡਿਆ।</li>
              <li><strong>ਕ੍ਰਾਂਤੀਕਾਰੀ ਸਮਾਜਿਕ ਸੁਧਾਰ:</strong> <strong>ਸਤੀ ਪ੍ਰਥਾ</strong> ਦਾ ਸਖ਼ਤ ਵਿਰੋਧ ਕੀਤਾ (<em>"ਸਤੀਆ ਏਹਿ ਨ ਆਖੀਅਨਿ ਜੋ ਮੜਿਆ ਲਗਿ ਜਲੰਨਿ॥"</em>), <strong>ਪਰਦਾ ਪ੍ਰਥਾ</strong> (ਘੁੰਡ ਕੱਢਣ) ਨੂੰ ਬੰਦ ਕੀਤਾ, <strong>ਕੁੜੀਮਾਰ ਪ੍ਰਥਾ</strong> ਦੀ ਨਿਖੇਧੀ ਕੀਤੀ ਅਤੇ <strong>ਵਿਧਵਾ ਵਿਆਹ</strong> ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ।</li>
              <li><strong>ਬਾਣੀ ਅਤੇ ਗੋਇੰਦਵਾਲ ਦੀਆਂ ਪੋਥੀਆਂ:</strong> <strong>17 ਰਾਗਾਂ ਵਿੱਚ 907 ਸ਼ਬਦ</strong> ਉਚਾਰੇ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ <strong>'ਅਨੰਦੁ ਸਾਹਿਬ'</strong> (ਰਾਗੁ ਰਾਮਕਲੀ, 40 ਪਉੜੀਆਂ) ਪ੍ਰਮੁੱਖ ਹੈ। ਬਾਬਾ ਮੋਹਨ ਜੀ ਕੋਲ ਸੰਭਾਲੀਆਂ <strong>ਗੋਇੰਦਵਾਲ ਦੀਆਂ ਪੋਥੀਆਂ</strong> ਤਿਆਰ ਕਰਵਾਈਆਂ ਅਤੇ ਵਿਸਾਖੀ ਤੇ ਦੀਵਾਲੀ ਦੇ ਜੋੜ-ਮੇਲੇ ਸ਼ੁਰੂ ਕੀਤੇ।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">3️⃣ ਚੌਥੇ ਗੁਰੂ: ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (ਗੁਰਗੱਦੀ ਕਾਲ: 1574–1581)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਮੁੱਢਲਾ ਨਾਮ <strong>ਭਾਈ ਜੇਠਾ ਜੀ</strong>; ਜਨਮ <strong>24 ਸਤੰਬਰ 1534</strong> ਨੂੰ <strong>ਚੂਨਾ ਮੰਡੀ, ਲਾਹੌਰ</strong> ਵਿਖੇ ਸੋਢੀ ਖੱਤਰੀ ਪਰਿਵਾਰ ਵਿੱਚ ਪਿਤਾ <strong>ਹਰੀ ਦਾਸ ਜੀ</strong> ਅਤੇ ਮਾਤਾ <strong>ਦਇਆ ਕੌਰ (ਅਨੂਪ ਦੇਵੀ) ਜੀ</strong> ਦੇ ਘਰ ਹੋਇਆ। ਬਚਪਨ ਵਿੱਚ ਮਾਤਾ-ਪਿਤਾ ਦੇ ਚਲਾਣੇ ਮਗਰੋਂ ਨਾਨੀ ਜੀ ਕੋਲ ਬਾਸਰਕੇ ਰਹੇ ਅਤੇ ਘੁੰਗਣੀਆਂ ਵੇਚ ਕੇ ਦਸਾਂ ਨੌਹਾਂ ਦੀ ਕਿਰਤ ਕੀਤੀ। 1554 ਵਿੱਚ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦੀ ਸਪੁੱਤਰੀ <strong>ਬੀਬੀ ਭਾਨੀ ਜੀ</strong> ਨਾਲ ਵਿਆਹ ਹੋਇਆ; ਤਿੰਨ ਸਪੁੱਤਰ ਹੋਏ: <strong>ਪ੍ਰਿਥੀ ਚੰਦ</strong>, <strong>ਮਹਾਦੇਵ</strong> ਅਤੇ <strong>ਅਰਜਨ ਦੇਵ ਜੀ</strong>।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਅੰਮ੍ਰਿਤਸਰ (ਰਾਮਦਾਸਪੁਰ) ਦੀ ਸਥਾਪਨਾ (1577):</strong> ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦੀ ਆਗਿਆ ਨਾਲ <strong>ਗੁਰੂ ਕਾ ਚੱਕ / ਚੱਕ ਰਾਮਦਾਸ (ਰਾਮਦਾਸਪੁਰ)</strong> ਦੀ ਨੀਂਹ ਰੱਖੀ। ਇੱਥੇ ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਦੀ ਨਿਗਰਾਨੀ ਹੇਠ ਦੋ ਪਵਿੱਤਰ ਸਰੋਵਰਾਂ — <strong>ਸੰਤੋਖਸਰ</strong> ਅਤੇ <strong>ਅੰਮ੍ਰਿਤਸਰ</strong> — ਦੀ ਖੁਦਾਈ ਆਰੰਭ ਕਰਵਾਈ ਅਤੇ ਸ਼ਹਿਰ ਦੇ ਵਪਾਰਕ ਵਿਕਾਸ ਲਈ <strong>52 ਕਿੱਤਿਆਂ ਦੇ ਵਪਾਰੀਆਂ</strong> ਨੂੰ ਵਸਾਇਆ (ਗੁਰੂ ਬਾਜ਼ਾਰ)।</li>
              <li><strong>ਮਸੰਦ ਪ੍ਰਥਾ ਦੀ ਸ਼ੁਰੂਆਤ:</strong> ਸਰੋਵਰਾਂ ਦੀ ਉਸਾਰੀ ਅਤੇ ਸਿੱਖੀ ਦੇ ਪ੍ਰਚਾਰ ਲਈ ਦੂਰ-ਦੁਰਾਡੇ ਇਲਾਕਿਆਂ ਵਿੱਚ <strong>ਮਸੰਦ</strong> (ਫ਼ਾਰਸੀ ਸ਼ਬਦ 'ਮਸਨਦ-ਏ-ਆਲੀ' ਤੋਂ) ਨਿਯੁਕਤ ਕੀਤੇ ਜੋ ਸੰਗਤ ਤੋਂ ਭੇਟਾ ਇਕੱਤਰ ਕਰਕੇ ਕੇਂਦਰ ਵਿੱਚ ਪਹੁੰਚਾਉਂਦੇ ਸਨ।</li>
              <li><strong>ਉਦਾਸੀ ਸੰਪਰਦਾਇ ਨਾਲ ਮੇਲ:</strong> ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਵੱਡੇ ਸਪੁੱਤਰ <strong>ਬਾਬਾ ਸ੍ਰੀ ਚੰਦ ਜੀ</strong> ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਦੀ ਨਿਮਰਤਾ ਤੋਂ ਬਹੁਤ ਪ੍ਰਭਾਵਿਤ ਹੋਏ, ਜਿਸ ਨਾਲ ਉਦਾਸੀ ਸੰਪਰਦਾਇ ਨਾਲ ਦੂਰੀ ਖ਼ਤਮ ਹੋਈ।</li>
              <li><strong>ਬਾਣੀ ਅਤੇ ਚਾਰ ਲਾਵਾਂ:</strong> <strong>30 ਰਾਗਾਂ ਵਿੱਚ 679 ਸ਼ਬਦਾਂ</strong> ਦੀ ਰਚਨਾ ਕੀਤੀ। ਸਿੱਖ ਵਿਆਹ ਪੱਧਤੀ (ਅਨੰਦ ਕਾਰਜ) ਲਈ <strong>ਰਾਗੁ ਸੂਹੀ ਵਿੱਚ 'ਚਾਰ ਲਾਵਾਂ'</strong> ਅਤੇ 'ਘੋੜੀਆਂ' ਦੀ ਰਚਨਾ ਕੀਤੀ।</li>
              <li><strong>ਗੁਰਗੱਦੀ ਸੌਂਪਣਾ (1581):</strong> ਵੱਡੇ ਪੁੱਤਰ ਪ੍ਰਿਥੀ ਚੰਦ (ਜਿਸ ਨੇ 'ਮੀਣਾ' ਸੰਪਰਦਾਇ ਚਲਾਈ) ਦੀ ਥਾਂ ਸਭ ਤੋਂ ਛੋਟੇ ਯੋਗ ਸਪੁੱਤਰ <strong>ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ</strong> ਨੂੰ 1581 ਵਿੱਚ ਪੰਜਵੇਂ ਗੁਰੂ ਥਾਪਿਆ। ਇੱਥੋਂ ਗੁਰਗੱਦੀ <strong>ਸੋਢੀ ਵੰਸ਼</strong> ਵਿੱਚ ਰਹੀ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">1️⃣ द्वितीय गुरु: श्री गुरु अंगद देव जी (गुरुगद्दी काल: 1539–1552)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              मूल नाम <strong>भाई लहणा जी</strong>; जन्म <strong>31 मार्च 1504</strong> को <strong>मत्ते दी सरां</strong> (जिला श्री मुक्तसर साहिब) में पिता <strong>फेरू मल्ल जी</strong> (त्रेहन खत्री) और माता <strong>सभिराई (रामो) जी</strong> के घर हुआ। पत्नी <strong>माता खीवी जी</strong>; दो पुत्र (<strong>दासू</strong> व <strong>दातू</strong>) और दो पुत्रियां (<strong>बीबी अमरो</strong> व <strong>बीबी अनोखी</strong>)।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>खडूर साहिब मुख्यालय:</strong> गुरु नानक देव जी ने उनकी अनन्य भक्ति देखकर उन्हें अपने शरीर का 'अंग' मानते हुए <strong>'अंगद'</strong> नाम दिया। बाबा श्रीचंद से किसी विवाद से बचने हेतु उन्होंने <strong>खडूर साहिब</strong> (तरनतारन) को अपना केंद्र बनाया।</li>
              <li><strong>गुरमुखी लिपि का मानकीकरण (35 अक्खरी):</strong> प्रचलित लंडे/टाकरी अक्षरों को परिष्कृत कर <strong>35 अक्षरों वाली गुरमुखी लिपि (पैंती अक्खरी)</strong> को मानक रूप दिया और बच्चों के लिए गुरमुखी पाठशालाएं खोलीं।</li>
              <li><strong>माता खीवी जी एवं लंगर विस्तार:</strong> माता खीवी जी ने लंगर व्यवस्था का संचालन किया। श्री गुरु ग्रंथ साहिब जी में नाम सहित उल्लेखित होने वाली वे <strong>एकमात्र गुरु-पत्नी</strong> हैं (सत्ता व बलवंड की वार में घी युक्त खीर परोसने का उल्लेख)।</li>
              <li><strong>मल्ल अखाड़ा एवं उदासी मत से अलगाव:</strong> शारीरिक स्वास्थ्य हेतु <strong>मल्ल अखाड़ा</strong> (कुश्ती) प्रारंभ किया। बाबा श्रीचंद के संन्यासी 'उदासी मत' को सिख गृहस्थ मार्ग से स्पष्टतः अलग रखा।</li>
              <li><strong>बाणी एवं हुमायूं से भेंट (1540):</strong> <strong>62 (या 63) सलोकों</strong> की रचना की। कन्नौज युद्ध (1540) में शेरशाह सूरी से पराजित होने के बाद मुगल बादशाह <strong>हुमायूं</strong> खडूर साहिब में गुरु जी से आशीर्वाद लेने आया।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">2️⃣ तृतीय गुरु: श्री गुरु अमरदास जी (गुरुगद्दी काल: 1552–1574)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              जन्म <strong>5 मई 1479</strong> को ग्राम <strong>बासरके गिल्लां</strong> (अमृतसर) में भल्ला खत्री वंश में पिता <strong>तेज भान भल्ला</strong> और माता <strong>बख्त कौर जी</strong> के घर हुआ। पत्नी <strong>माता मनसा देवी जी</strong>; पुत्र <strong>बाबा मोहन</strong> व <strong>बाबा मोहरी</strong>, पुत्रियां <strong>बीबी दानी</strong> व <strong>बीबी भानी</strong>। 73 वर्ष की आयु में गुरुगद्दी संभाली।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>गोइंदवाल साहिब की बावली (1559):</strong> ब्यास नदी के तट पर <strong>गोइंदवाल साहिब</strong> में <strong>84 सीढ़ियों वाली ऐतिहासिक बावली</strong> का निर्माण करवाया (प्रथम सिख तीर्थ केंद्र)।</li>
              <li><strong>"पहिले पंगत पाछै संगत" और अकबर की भेंट:</strong> नियम बनाया कि गुरु दर्शन से पूर्व लंगर की पंगत में बैठकर भोजन करना अनिवार्य है। मुगल सम्राट <strong>अकबर</strong> ने भी पंगत में बैठकर लंगर छका और <strong>बीबी भानी जी</strong> के नाम कई गांवों की जागीर भेंट की।</li>
              <li><strong>22 मंजियां एवं 52 पीढ़े:</strong> सिख धर्म के व्यवस्थित प्रचार हेतु साम्राज्य को <strong>22 मंजियों</strong> (प्रचार क्षेत्रों, जिनमें महिलाएं भी नियुक्त थीं) तथा <strong>52 पीढ़ों</strong> में विभाजित किया।</li>
              <li><strong>क्रांतिकारी समाज सुधार:</strong> <strong>सती प्रथा</strong> का कड़ा विरोध किया, <strong>पर्दा प्रथा</strong> तथा <strong>कन्या भ्रूण हत्या</strong> को समाप्त किया और <strong>विधवा पुनर्विवाह</strong> को बढ़ावा दिया।</li>
              <li><strong>बाणी एवं गोइंदवाल पोथियां:</strong> <strong>17 रागों में 907 शब्द</strong> रचे, जिनमें 40 पौड़ियों की <strong>'अनंद साहिब'</strong> (राग रामकली) सर्वाधिक प्रसिद्ध है। बाबा मोहन जी के पास सुरक्षित <strong>गोइंदवाल पोथियां</strong> संकलित करवाईं।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">3️⃣ चतुर्थ गुरु: श्री गुरु रामदास जी (गुरुगद्दी काल: 1574–1581)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              मूल नाम <strong>भाई जेठा जी</strong>; जन्म <strong>24 सितंबर 1534</strong> को <strong>चूना मंडी, लाहौर</strong> में सोढी खत्री परिवार में पिता <strong>हरि दास सोढी</strong> और माता <strong>दया कौर (अनूप देवी) जी</strong> के घर हुआ। विवाह गुरु अमरदास जी की सुपुत्री <strong>बीबी भानी जी</strong> से हुआ; तीन पुत्र: <strong>पृथी चंद</strong>, <strong>महादेव</strong> और <strong>अर्जुन देव</strong>।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>अमृतसर (रामदासपुर) की स्थापना (1577):</strong> <strong>गुरु का चक्क / चक्क रामदास (रामदासपुर)</strong> की नींव रखी। बाबा बुड्ढा जी की देखरेख में <strong>संतोखसर</strong> और <strong>अमृतसर सरोवर</strong> की खुदाई शुरू करवाई तथा नगर में <strong>52 व्यवसायों के व्यापारियों</strong> को बसाया (गुरु बाज़ार)।</li>
              <li><strong>मसंद प्रथा का प्रारंभ:</strong> सरोवर निर्माण एवं धर्म प्रचार हेतु दूरस्थ क्षेत्रों में <strong>मसंद</strong> (फारसी 'मसनद-ए-आली' से) नियुक्त किए जो संगत से स्वैच्छिक भेंट एकत्र करते थे।</li>
              <li><strong>उदासी संप्रदाय से समन्वय:</strong> गुरु नानक देव जी के ज्येष्ठ पुत्र <strong>बाबा श्रीचंद जी</strong> गुरु रामदास जी की विनम्रता से अत्यंत प्रभावित हुए और उदासी मत का विरोध शांत हुआ।</li>
              <li><strong>बाणी एवं चार लावां:</strong> <strong>30 रागों में 679 शब्द</strong> रचे। सिख विवाह संस्कार (आनंद कारज) के लिए <strong>राग सूही में 'चार लावां'</strong> तथा 'घोड़ियां' की रचना की।</li>
              <li><strong>उत्तराधिकार (1581):</strong> बड़े पुत्र पृथी चंद ('मीणा' संप्रदाय के प्रवर्तक) को छोड़कर सबसे छोटे सुपुत्र <strong>श्री गुरु अर्जुन देव जी</strong> को पांचवां गुरु नियुक्त किया।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Distinguishing Manji System vs Masand System',
          pa: 'ਮੰਜੀ ਪ੍ਰਥਾ ਅਤੇ ਮਸੰਦ ਪ੍ਰਥਾ ਵਿੱਚ ਅੰਤਰ',
          hi: 'मंजी प्रथा और मसंद प्रथा में अंतर',
        },
        problem: {
          en: 'Match the Sikh administrative institution with the Guru who founded it and its primary purpose: (1) 22 Manjis, (2) Masand System.',
          pa: 'ਸਿੱਖ ਸੰਸਥਾਵਾਂ ਦਾ ਉਹਨਾਂ ਦੇ ਬਾਨੀ ਗੁਰੂ ਸਾਹਿਬਾਨ ਅਤੇ ਮੁੱਖ ਉਦੇਸ਼ ਨਾਲ ਮਿਲਾਨ ਕਰੋ: (1) 22 ਮੰਜੀਆਂ, (2) ਮਸੰਦ ਪ੍ਰਥਾ।',
          hi: 'सिख प्रशासनिक संस्थाओं का उनके संस्थापक गुरु और मुख्य उद्देश्य से मिलान कीजिए: (1) 22 मंजियां, (2) मसंद प्रथा।',
        },
        steps: {
          en: [
            'Step 1: Recall that Guru Amar Das Ji (3rd Guru) needed regional spiritual dioceses as the Panth expanded beyond central Punjab; he established 22 Manjis and 52 Pirhas.',
            'Step 2: Recall that Guru Ram Das Ji (4th Guru) needed regular financial resources and outreach for excavating the Amritsar and Santokhsar tanks; he instituted the Masand system.',
            'Step 3: Note that Guru Arjan Dev Ji later codified Dasvandh (1/10th income) through Masands, and Guru Gobind Singh Ji abolished the Masand system in 1698–99 due to corruption.',
          ],
          pa: [
            'ਕਦਮ 1: ਤੀਜੇ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਨੇ ਸਿੱਖੀ ਦੇ ਪ੍ਰਚਾਰ ਲਈ 22 ਮੰਜੀਆਂ ਅਤੇ 52 ਪੀੜ੍ਹਿਆਂ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।',
            'ਕਦਮ 2: ਚੌਥੇ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਨੇ ਅੰਮ੍ਰਿਤਸਰ ਸਰੋਵਰ ਦੀ ਖੁਦਾਈ ਅਤੇ ਪ੍ਰਚਾਰ ਲਈ ਮਸੰਦ ਪ੍ਰਥਾ ਸ਼ੁਰੂ ਕੀਤੀ।',
            'ਕਦਮ 3: ਪੰਜਵੇਂ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਦਸਵੰਧ ਲਾਗੂ ਕੀਤਾ ਅਤੇ ਦਸਵੇਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਮਸੰਦ ਪ੍ਰਥਾ ਖ਼ਤਮ ਕੀਤੀ।',
          ],
          hi: [
            'चरण 1: तृतीय गुरु अमरदास जी ने धर्म प्रचार के लिए 22 मंजियों और 52 पीढ़ों की स्थापना की।',
            'चरण 2: चतुर्थ गुरु रामदास जी ने अमृतसर सरोवर निर्माण एवं प्रचार हेतु मसंद प्रथा शुरू की।',
            'चरण 3: पंचम गुरु अर्जुन देव जी ने दसवंध लागू किया और दशम गुरु गोबिंद सिंह जी ने मसंद प्रथा समाप्त की।',
          ],
        },
        solution: {
          en: '22 Manjis → Founded by Guru Amar Das Ji (3rd Guru) for regional preaching. Masand System → Founded by Guru Ram Das Ji (4th Guru) for preaching and collecting offerings for Ramdaspur/Amritsar.',
          pa: '22 ਮੰਜੀਆਂ → ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (ਧਰਮ ਪ੍ਰਚਾਰ ਲਈ); ਮਸੰਦ ਪ੍ਰਥਾ → ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (ਪ੍ਰਚਾਰ ਅਤੇ ਸਰੋਵਰਾਂ ਲਈ ਭੇਟਾ ਇਕੱਤਰ ਕਰਨ ਲਈ)।',
          hi: '22 मंजियां → गुरु अमरदास जी (क्षेत्रीय धर्म प्रचार हेतु); मसंद प्रथा → गुरु रामदास जी (प्रचार व अमृतसर निर्माण हेतु भेंट संग्रह)।',
        },
      },
      {
        title: {
          en: 'Liturgical Compositions in Anand Karaj',
          pa: 'ਅਨੰਦ ਕਾਰਜ ਨਾਲ ਸਬੰਧਤ ਬਾਣੀਆਂ ਦੀ ਪਛਾਣ',
          hi: 'आनंद कारज से संबंधित बाणियों की पहचान',
        },
        problem: {
          en: 'Students often confuse who composed "Anand Sahib" versus who composed the "Four Laavan" recited during the Sikh marriage ceremony (Anand Karaj). Differentiate both.',
          pa: 'ਅਕਸਰ ਪ੍ਰੀਖਿਆ ਵਿੱਚ "ਅਨੰਦੁ ਸਾਹਿਬ" ਅਤੇ "ਚਾਰ ਲਾਵਾਂ" ਦੇ ਰਚਨਹਾਰ ਗੁਰੂ ਸਾਹਿਬਾਨ ਬਾਰੇ ਭੁਲੇਖਾ ਪੈਂਦਾ ਹੈ। ਦੋਵਾਂ ਨੂੰ ਸਪੱਸ਼ਟ ਕਰੋ।',
          hi: '"अनंद साहिब" और "चार लावां" के रचयिता गुरु साहिबान का अंतर स्पष्ट कीजिए।',
        },
        steps: {
          en: [
            'Step 1: "Anand Sahib" (40 Pauris in Raag Ramkali) was composed by the 3rd Guru, Sri Guru Amar Das Ji.',
            'Step 2: The "Four Laavan" (Har Pehliari Laav... in Raag Suhi) were composed by the 4th Guru, Sri Guru Ram Das Ji, specifically for the Sikh wedding ceremony.',
          ],
          pa: [
            'ਕਦਮ 1: "ਅਨੰਦੁ ਸਾਹਿਬ" (ਰਾਗੁ ਰਾਮਕਲੀ, 40 ਪਉੜੀਆਂ) ਤੀਜੇ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦੀ ਰਚਨਾ ਹੈ।',
            'ਕਦਮ 2: "ਚਾਰ ਲਾਵਾਂ" (ਰਾਗੁ ਸੂਹੀ) ਚੌਥੇ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਦੀ ਰਚਨਾ ਹਨ।',
          ],
          hi: [
            'चरण 1: "अनंद साहिब" (राग रामकली, 40 पौड़ियां) तृतीय गुरु श्री गुरु अमरदास जी की रचना है।',
            'चरण 2: "चार लावां" (राग सूही) चतुर्थ गुरु श्री गुरु रामदास जी की रचना हैं।',
          ],
        },
        solution: {
          en: 'Anand Sahib (Raag Ramkali) = Guru Amar Das Ji (3rd Guru); Four Laavan (Raag Suhi) = Guru Ram Das Ji (4th Guru).',
          pa: 'ਅਨੰਦੁ ਸਾਹਿਬ (ਰਾਗੁ ਰਾਮਕਲੀ) = ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ; ਚਾਰ ਲਾਵਾਂ (ਰਾਗੁ ਸੂਹੀ) = ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ।',
          hi: 'अनंद साहिब (राग रामकली) = गुरु अमरदास जी; चार लावां (राग सूही) = गुरु रामदास जी।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Guru Angad Dev Ji invented the Gurmukhi script from scratch.',
          pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਬਿਲਕੁਲ ਨਵੇਂ ਸਿਰੇ ਤੋਂ ਬਣਾਈ ਸੀ।',
          hi: 'गुरु अंगद देव जी ने गुरमुखी लिपि का शून्य से आविष्कार किया था।',
        },
        correction: {
          en: 'Proto-Gurmukhi letters already existed in Punjab (used by Guru Nanak Dev Ji in Patti Bani). Guru Angad Dev Ji standardized, modified, and arranged the 35 letters (Paintees Akhari) with systematic vowel symbols (Laga Matra) and popularized it through schools.',
          pa: 'ਗੁਰਮੁਖੀ ਦੇ ਮੁੱਢਲੇ ਅੱਖਰ ਪਹਿਲਾਂ ਤੋਂ ਮੌਜੂਦ ਸਨ (ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਪੱਟੀ ਬਾਣੀ ਰਚੀ ਸੀ)। ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਲੰਡੇ ਅੱਖਰਾਂ ਨੂੰ ਸੋਧ ਕੇ 35 ਅੱਖਰਾਂ ਅਤੇ ਲਗਾਂ-ਮਾਤਰਾਵਾਂ ਨਾਲ ਮਿਆਰੀ ਰੂਪ ਦਿੱਤਾ।',
          hi: 'प्रारंभिक गुरमुखी अक्षर पहले से प्रचलित थे (गुरु नानक देव जी ने पट्टी बाणी रची थी)। गुरु अंगद देव जी ने लंडे अक्षरों को संशोधित कर 35 अक्षरों और मात्राओं के साथ मानकीकृत किया।',
        },
        whyItMatters: {
          en: 'Assertion-Reason questions in Master Cadre SST test whether Gurmukhi was standardized or newly invented.',
          pa: 'ਮਾਸਟਰ ਕੈਡਰ ਵਿੱਚ ਕਥਨ-ਕਾਰਨ ਵਾਲੇ ਪ੍ਰਸ਼ਨਾਂ ਵਿੱਚ ਇਹ ਤੱਥ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'मास्टर कैडर के कथन-कारण प्रश्नों में यह सूक्ष्म अंतर पूछा जाता है।',
        },
      },
      {
        misconception: {
          en: 'Guru Arjan Dev Ji founded the city of Amritsar.',
          pa: 'ਅੰਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਕੀਤੀ ਸੀ।',
          hi: 'अमृतसर शहर की स्थापना गुरु अर्जुन देव जी ने की थी।',
        },
        correction: {
          en: 'The city of Amritsar (originally Guru Ka Chakk / Ramdaspur) and the excavation of the Amritsar Sarovar were founded by the 4th Guru, Sri Guru Ram Das Ji, in 1577. Guru Arjan Dev Ji later completed the masonry of the Sarovar and built Sri Harmandir Sahib in its centre in 1588.',
          pa: 'ਅੰਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ (ਗੁਰੂ ਕਾ ਚੱਕ / ਰਾਮਦਾਸਪੁਰ) ਦੀ ਸਥਾਪਨਾ ਚੌਥੇ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਨੇ 1577 ਵਿੱਚ ਕੀਤੀ ਸੀ। ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਸਰੋਵਰ ਪੱਕਾ ਕਰਵਾਇਆ ਅਤੇ 1588 ਵਿੱਚ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਉਸਾਰੀ ਕਰਵਾਈ।',
          hi: 'अमृतसर नगर (रामदासपुर) की स्थापना चौथे गुरु श्री गुरु रामदास जी ने 1577 में की थी। गुरु अर्जुन देव जी ने सरोवर को पक्का करवाया और 1588 में श्री हरिमंदिर साहिब की नींव रखवाई।',
        },
        whyItMatters: {
          en: 'Distinguishing the founder of the city (Guru Ram Das Ji) from the builder of Harmandir Sahib (Guru Arjan Dev Ji) is a classic PSSSB question.',
          pa: 'ਸ਼ਹਿਰ ਦੇ ਬਾਨੀ (ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ) ਅਤੇ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੇ ਨਿਰਮਾਤਾ (ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ) ਦਾ ਫ਼ਰਕ ਬਹੁਤ ਮਹੱਤਵਪੂਰਨ ਹੈ।',
          hi: 'नगर के संस्थापक (गुरु रामदास जी) और हरिमंदिर साहिब के निर्माता (गुरु अर्जुन देव जी) का अंतर परीक्षाओं में बार-बार पूछा जाता है।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Guru Angad Dev Ji (Bhai Lehna, 1539–1552): Born at Matte di Sarai (1504); HQ Khadur Sahib; standardized Gurmukhi (35 letters); Mal Akhara; Mata Khivi Ji (only Guru consort named in Guru Granth Sahib); 62/63 Saloks.',
          'Guru Amar Das Ji (1552–1574): Born at Basarke (1479); HQ Goindwal Sahib; 84-step Baoli (1559); "Pehle Pangat Phir Sangat" (Akbar visited); 22 Manjis & 52 Pirhas; abolished Sati & Purdah; composed Anand Sahib (Raag Ramkali, 40 Pauris) & 907 hymns in 17 Raags.',
          'Guru Ram Das Ji (Bhai Jetha, 1574–1581): Born at Chuna Mandi Lahore (1534); Sodhi clan; married Bibi Bhani; founded Ramdaspur/Amritsar (1577); excavated Santokhsar & Amritsar; Masand system; composed 4 Laavan (Raag Suhi) & 679 hymns in 30 Raags.',
        ],
        pa: [
          'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ (ਭਾਈ ਲਹਿਣਾ ਜੀ, 1539–1552): ਜਨਮ ਮੱਤੇ ਦੀ ਸਰਾਂ (1504); ਕੇਂਦਰ ਖਡੂਰ ਸਾਹਿਬ; ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਮਿਆਰੀਕਰਨ; ਮੱਲ ਅਖਾੜਾ; ਮਾਤਾ ਖੀਵੀ ਜੀ; 62/63 ਸਲੋਕ।',
          'ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (1552–1574): ਜਨਮ ਬਾਸਰਕੇ (1479); ਕੇਂਦਰ ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ; 84 ਪੌੜੀਆਂ ਵਾਲੀ ਬਾਉਲੀ (1559); "ਪਹਿਲੇ ਪੰਗਤ ਪਾਛੈ ਸੰਗਤ" (ਅਕਬਰ ਦੀ ਫੇਰੀ); 22 ਮੰਜੀਆਂ ਤੇ 52 ਪੀੜ੍ਹੇ; ਅਨੰਦੁ ਸਾਹਿਬ (40 ਪਉੜੀਆਂ) ਤੇ 907 ਸ਼ਬਦ।',
          'ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (ਭਾਈ ਜੇਠਾ ਜੀ, 1574–1581): ਜਨਮ ਚੂਨਾ ਮੰਡੀ ਲਾਹੌਰ (1534); ਬੀਬੀ ਭਾਨੀ ਜੀ ਨਾਲ ਵਿਆਹ; ਰਾਮਦਾਸਪੁਰ/ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸਥਾਪਨਾ (1577); ਸੰਤੋਖਸਰ ਤੇ ਅੰਮ੍ਰਿਤਸਰ ਸਰੋਵਰ; ਮਸੰਦ ਪ੍ਰਥਾ; 4 ਲਾਵਾਂ (ਰਾਗੁ ਸੂਹੀ) ਤੇ 679 ਸ਼ਬਦ।',
        ],
        hi: [
          'गुरु अंगद देव जी (भाई लहणा, 1539–1552): जन्म मत्ते दी सरां (1504); केंद्र खडूर साहिब; गुरमुखी लिपि मानकीकरण; मल्ल अखाड़ा; माता खीवी जी; 62/63 सलोक।',
          'गुरु अमरदास जी (1552–1574): जन्म बासरके (1479); केंद्र गोइंदवाल साहिब; 84 सीढ़ियों वाली बावली (1559); "पहिले पंगत पाछै संगत" (अकबर भेंट); 22 मंजियां व 52 पीढ़े; अनंद साहिब व 907 शब्द।',
          'गुरु रामदास जी (भाई जेठा, 1574–1581): जन्म चूना मंडी लाहौर (1534); बीबी भानी जी से विवाह; रामदासपुर/अमृतसर स्थापना (1577); संतोखसर व अमृतसर सरोवर; मसंद प्रथा; 4 लावां व 679 शब्द।',
        ],
      },
      examTraps: {
        en: [
          'Trap: Prithi Chand (eldest son of Guru Ram Das Ji) founded the rival "Mina" sect, while Baba Sri Chand (son of Guru Nanak) founded the "Udasi" sect.',
          'Trap: Guru Angad Dev Ji composed ONLY Saloks (62/63), not full multi-stanza Shabads.',
        ],
        pa: [
          'ਧੋਖਾ: ਬਾਬਾ ਸ੍ਰੀ ਚੰਦ ਨੇ "ਉਦਾਸੀ ਮੱਤ" ਚਲਾਇਆ, ਜਦਕਿ ਪ੍ਰਿਥੀ ਚੰਦ (ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਦੇ ਵੱਡੇ ਪੁੱਤਰ) ਨੇ "ਮੀਣਾ ਸੰਪਰਦਾਇ" ਚਲਾਈ।',
          'ਧੋਖਾ: ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਕੇਵਲ ਸਲੋਕ (62/63) ਰਚੇ ਹਨ।',
        ],
        hi: [
          'धोखा: बाबा श्रीचंद ने "उदासी मत" चलाया, जबकि पृथी चंद (गुरु रामदास जी के बड़े पुत्र) ने "मीणा संप्रदाय" चलाया।',
          'धोखा: गुरु अंगद देव जी ने केवल सलोक (62/63) रचे हैं।',
        ],
      },
    },
    summary: {
      en: 'Between 1539 and 1581, Guru Angad Dev Ji standardized Gurmukhi and established Mal Akhara at Khadur Sahib; Guru Amar Das Ji built the 84-step Baoli at Goindwal, instituted 22 Manjis, enforced "Pehle Pangat Phir Sangat", and abolished Sati; and Guru Ram Das Ji founded Ramdaspur (Amritsar), excavated Santokhsar and Amritsar tanks, started the Masand system, and composed the 4 Laavan.',
      pa: '1539 ਤੋਂ 1581 ਦੌਰਾਨ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਅਤੇ ਮੱਲ ਅਖਾੜਾ, ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਨੇ ਗੋਇੰਦਵਾਲ ਦੀ ਬਾਉਲੀ, 22 ਮੰਜੀਆਂ ਅਤੇ ਸਮਾਜਿਕ ਸੁਧਾਰ, ਅਤੇ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਨੇ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸਥਾਪਨਾ, ਮਸੰਦ ਪ੍ਰਥਾ ਅਤੇ ਚਾਰ ਲਾਵਾਂ ਰਾਹੀਂ ਸਿੱਖ ਪੰਥ ਨੂੰ ਮਜ਼ਬੂਤ ਕੀਤਾ।',
      hi: '1539 से 1581 के मध्य गुरु अंगद देव जी ने गुरमुखी लिपि व मल्ल अखाड़ा, गुरु अमरदास जी ने गोइंदवाल की बावली, 22 मंजियां व समाज सुधार, तथा गुरु रामदास जी ने अमृतसर की स्थापना, मसंद प्रथा और चार लावां के माध्यम से सिख पंथ को सुदृढ़ किया।',
    },
    keyNotes: {
      en: [
        '📌 Bhai Lehna Ji → Guru Angad Dev Ji (2nd Guru, 1539–1552), HQ at Khadur Sahib, standardized 35-letter Gurmukhi script.',
        '📌 Mata Khivi Ji → Wife of Guru Angad Dev Ji; only Guru consort mentioned by name in Guru Granth Sahib.',
        '📌 Guru Amar Das Ji (3rd Guru, 1552–1574) → HQ at Goindwal Sahib; 84-step Baoli (1559); 22 Manjis & 52 Pirhas; Anand Sahib (Raag Ramkali).',
        '📌 Bhai Jetha Ji → Guru Ram Das Ji (4th Guru, 1574–1581); founded Ramdaspur/Amritsar (1577); Masand System; 4 Laavan (Raag Suhi).',
      ],
      pa: [
        '📌 ਭਾਈ ਲਹਿਣਾ ਜੀ → ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ (ਦੂਜੇ ਗੁਰੂ, 1539–1552), ਖਡੂਰ ਸਾਹਿਬ, ਗੁਰਮੁਖੀ ਲਿਪੀ ਅਤੇ ਮੱਲ ਅਖਾੜਾ।',
        '📌 ਮਾਤਾ ਖੀਵੀ ਜੀ → ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਨਾਮ ਸਹਿਤ ਦਰਜ ਇੱਕੋ-ਇੱਕ ਗੁਰੂ ਮਹਿਲ।',
        '📌 ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (ਤੀਜੇ ਗੁਰੂ, 1552–1574) → ਗੋਇੰਦਵਾਲ ਦੀ 84 ਪੌੜੀਆਂ ਵਾਲੀ ਬਾਉਲੀ, 22 ਮੰਜੀਆਂ, ਅਨੰਦੁ ਸਾਹਿਬ।',
        '📌 ਭਾਈ ਜੇਠਾ ਜੀ → ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (ਚੌਥੇ ਗੁਰੂ, 1574–1581), ਰਾਮਦਾਸਪੁਰ (ਅੰਮ੍ਰਿਤਸਰ), ਮਸੰਦ ਪ੍ਰਥਾ, 4 ਲਾਵਾਂ।',
      ],
      hi: [
        '📌 भाई लहणा जी → गुरु अंगद देव जी (द्वितीय गुरु, 1539–1552), खडूर साहिब, गुरमुखी लिपि व मल्ल अखाड़ा।',
        '📌 माता खीवी जी → गुरु ग्रंथ साहिब में नाम सहित उल्लेखित एकमात्र गुरु-पत्नी।',
        '📌 गुरु अमरदास जी (तृतीय गुरु, 1552–1574) → गोइंदवाल की 84 सीढ़ियों वाली बावली, 22 मंजियां, अनंद साहिब।',
        '📌 भाई जेठा जी → गुरु रामदास जी (चतुर्थ गुरु, 1574–1581), रामदासपुर (अमृतसर), मसंद प्रथा, 4 लावां।',
      ],
    },
    flashcards: [
      {
        id: 'fc-gaar-1',
        q: {
          en: 'Which Sikh Guru established the 22 Manjis and built the 84-step Baoli at Goindwal Sahib?',
          pa: 'ਕਿਹੜੇ ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬ ਨੇ 22 ਮੰਜੀਆਂ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਅਤੇ ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਵਿਖੇ 84 ਪੌੜੀਆਂ ਵਾਲੀ ਬਾਉਲੀ ਬਣਵਾਈ?',
          hi: 'किस सिख गुरु ने 22 मंजियों की स्थापना की और गोइंदवाल साहिब में 84 सीढ़ियों वाली बावली बनवाई?',
        },
        a: {
          en: '3rd Guru, Sri Guru Amar Das Ji (1552–1574).',
          pa: 'ਤੀਜੇ ਗੁਰੂ, ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (1552–1574)।',
          hi: 'तृतीय गुरु, श्री गुरु अमरदास जी (1552–1574)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-gaar-2',
        q: {
          en: 'What was the original name of the 4th Sikh Guru, Sri Guru Ram Das Ji, and which two sacred tanks did he begin excavating?',
          pa: 'ਚੌਥੇ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਦਾ ਮੁੱਢਲਾ ਨਾਮ ਕੀ ਸੀ ਅਤੇ ਉਹਨਾਂ ਨੇ ਕਿਹੜੇ ਦੋ ਪਵਿੱਤਰ ਸਰੋਵਰਾਂ ਦੀ ਖੁਦਾਈ ਸ਼ੁਰੂ ਕਰਵਾਈ?',
          hi: 'चौथे गुरु श्री गुरु रामदास जी का मूल नाम क्या था और उन्होंने किन दो पवित्र सरोवरों की खुदाई शुरू करवाई?',
        },
        a: {
          en: 'Bhai Jetha Ji; he initiated the excavation of Santokhsar and Amritsar Sarovars.',
          pa: 'ਭਾਈ ਜੇਠਾ ਜੀ; ਸੰਤੋਖਸਰ ਅਤੇ ਅੰਮ੍ਰਿਤਸਰ ਸਰੋਵਰ।',
          hi: 'भाई जेठा जी; संतोखसर और अमृतसर सरोवर।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-gaar-3',
        q: {
          en: 'Who is the only Guru’s consort mentioned by name in Sri Guru Granth Sahib Ji?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਨਾਮ ਸਹਿਤ ਦਰਜ ਇੱਕੋ-ਇੱਕ ਗੁਰੂ-ਮਹਿਲ ਕੌਣ ਹਨ?',
          hi: 'श्री गुरु ग्रंथ साहिब जी में नाम सहित उल्लेखित एकमात्र गुरु-पत्नी कौन हैं?',
        },
        a: {
          en: 'Mata Khivi Ji (consort of the 2nd Guru, Sri Guru Angad Dev Ji, mentioned in Ramkali ki Var by Satta and Balwand).',
          pa: 'ਮਾਤਾ ਖੀਵੀ ਜੀ (ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਦੇ ਮਹਿਲ)।',
          hi: 'माता खीवी जी (श्री गुरु अंगद देव जी की धर्मपत्नी)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-gaar-4',
        q: {
          en: 'In which Raag did Sri Guru Ram Das Ji compose the Four Laavan for the Sikh marriage ceremony (Anand Karaj)?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਨੇ ਅਨੰਦ ਕਾਰਜ ਲਈ ਚਾਰ ਲਾਵਾਂ ਦੀ ਰਚਨਾ ਕਿਹੜੇ ਰਾਗ ਵਿੱਚ ਕੀਤੀ?',
          hi: 'श्री गुरु रामदास जी ने आनंद कारज हेतु चार लावां की रचना किस राग में की?',
        },
        a: {
          en: 'Raag Suhi (while Anand Sahib by Guru Amar Das Ji is in Raag Ramkali).',
          pa: 'ਰਾਗੁ ਸੂਹੀ (ਜਦਕਿ ਅਨੰਦੁ ਸਾਹਿਬ ਰਾਗੁ ਰਾਮਕਲੀ ਵਿੱਚ ਹੈ)।',
          hi: 'राग सूही (जबकि अनंद साहिब राग रामकली में है)।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Consolidation of Sikhism: Guru Angad Dev Ji, Guru Amar Das Ji & Guru Ram Das Ji',
        channel: 'PSEB / NCERT History Archive',
        url: 'https://www.youtube.com/results?search_query=Guru+Angad+Guru+Amar+Das+Guru+Ram+Das+Punjab+History',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'History and Culture of Punjab (Class 10)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Chapter 3: Development of Sikhism under Guru Angad Dev Ji, Guru Amar Das Ji and Guru Ram Das Ji',
        type: 'state-board',
      },
    ],
    syllabusReference: {
      title: 'ERB Punjab Master Cadre SST & PSSSB Clerk History Syllabus',
      url: 'https://educationrecruitmentboard.com',
      body: 'Education Recruitment Board (ERB) & PSSSB',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 3: SRI GURU ARJAN DEV JI (1563 - 1606)
  // ==========================================================================
  'guru-arjan-dev-ji': {
    id: 'guru-arjan-dev-ji',
    topicId: 'guru-arjan-dev-ji',
    subjectId: 'social-science',
    category: 'history',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Sri Guru Arjan Dev Ji (1563–1606): Harmandir Sahib, Adi Granth Compilation & Martyrdom',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (1563–1606): ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ, ਆਦਿ ਗ੍ਰੰਥ ਦਾ ਸੰਕਲਨ ਅਤੇ ਸ਼ਹਾਦਤ',
      hi: 'श्री गुरु अर्जुन देव जी (1563–1606): श्री हरिमंदिर साहिब, आदि ग्रंथ संकलन एवं शहादत',
    },
    examRelevance: 'Punjab Master Cadre SST (3–4 Qs), PSSSB Clerk (2–3 Qs), ETT, Patwari & Police',
    estimatedTime: '45 mins',
    prerequisites: {
      en: [
        'Foundation of Ramdaspur and the Masand system under Sri Guru Ram Das Ji.',
        'Transition of Mughal rule from Emperor Akbar’s religious tolerance to Emperor Jahangir’s orthodoxy in 1605.',
      ],
      pa: [
        'ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਦੁਆਰਾ ਰਾਮਦਾਸਪੁਰ ਦੀ ਸਥਾਪਨਾ ਅਤੇ ਮਸੰਦ ਪ੍ਰਥਾ।',
        'ਮੁਗ਼ਲ ਬਾਦਸ਼ਾਹ ਅਕਬਰ ਦੀ ਉਦਾਰ ਨੀਤੀ ਤੋਂ 1605 ਵਿੱਚ ਜਹਾਂਗੀਰ ਦੀ ਕੱਟੜ ਨੀਤੀ ਵੱਲ ਬਦਲਾਅ।',
      ],
      hi: [
        'श्री गुरु रामदास जी द्वारा रामदासपुर की स्थापना और मसंद प्रथा।',
        'मुगल सम्राट अकबर की उदार नीति से 1605 में जहांगीर की नीति में परिवर्तन।',
      ],
    },
    learningObjectives: {
      en: [
        'Trace the early life of Sri Guru Arjan Dev Ji at Goindwal Sahib, his title "Dohta Bani Ka Bohitha," and the hostility of Prithi Chand (Mina sect).',
        'Explain the architectural and spiritual significance of Sri Harmandir Sahib (1588/1589) and foundation of Tarn Taran, Kartarpur (Doaba), Hargobindpur, and Chheharta Sahib.',
        'Analyze the compilation of the Adi Granth (Pothi Sahib) in 1604 at Ramsar Sarovar with Bhai Gurdas Ji as scribe and Baba Buddha Ji as the first Granthi.',
        'Examine the causes and historical impact of Guru Arjan Dev Ji’s martyrdom at Lahore on 30 May 1606 under Emperor Jahangir.',
      ],
      pa: [
        'ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੇ ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ ਵਿਖੇ ਮੁੱਢਲੇ ਜੀਵਨ, "ਦੋਹਤਾ ਬਾਣੀ ਕਾ ਬੋਹਿਥਾ" ਖਿਤਾਬ ਅਤੇ ਪ੍ਰਿਥੀ ਚੰਦ (ਮੀਣਾ ਸੰਪਰਦਾਇ) ਦੇ ਵਿਰੋਧ ਨੂੰ ਸਮਝਣਾ।',
        'ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ (1588) ਦੀ ਉਸਾਰੀ (ਸਾਈਂ ਮੀਆਂ ਮੀਰ ਜੀ ਦੁਆਰਾ ਨੀਂਹ) ਅਤੇ ਤਰਨਤਾਰਨ, ਕਰਤਾਰਪੁਰ (ਦੁਆਬਾ), ਹਰਗੋਬਿੰਦਪੁਰ ਤੇ ਛੇਹਰਟਾ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ ਜਾਣਨਾ।',
        '1604 ਵਿੱਚ ਰਾਮਸਰ ਸਰੋਵਰ ਦੇ ਕੰਢੇ ਆਦਿ ਗ੍ਰੰਥ (ਪੋਥੀ ਸਾਹਿਬ) ਦੇ ਸੰਕਲਨ (ਲਿਖਾਰੀ ਭਾਈ ਗੁਰਦਾਸ ਜੀ, ਪਹਿਲੇ ਗ੍ਰੰਥੀ ਬਾਬਾ ਬੁੱਢਾ ਜੀ) ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
        '30 ਮਈ 1606 ਨੂੰ ਲਾਹੌਰ ਵਿਖੇ ਜਹਾਂਗੀਰ ਦੇ ਹੁਕਮ ਨਾਲ ਹੋਈ ਗੁਰੂ ਜੀ ਦੀ ਅਦੁੱਤੀ ਸ਼ਹਾਦਤ ਦੇ ਕਾਰਨਾਂ ਅਤੇ ਪ੍ਰਭਾਵਾਂ ਨੂੰ ਸਮਝਣਾ।',
      ],
      hi: [
        'श्री गुरु अर्जुन देव जी के गोइंदवाल साहिब के प्रारंभिक जीवन, "दोहता बाणी का बोहिथा" उपाधि और पृथी चंद के विरोध को समझना।',
        'श्री हरिमंदिर साहिब (1588, साईं मियां मीर द्वारा नींव) तथा तरनतारन, करतारपुर (दोआबा), हरगोबिंदपुर व छेहरटा साहिब की स्थापना जानना।',
        '1604 में रामसर सरोवर के तट पर आदि ग्रंथ के संकलन (लिपिक भाई गुरदास जी, प्रथम ग्रंथी बाबा बुड्ढा जी) का अध्ययन करना।',
        '30 मई 1606 को लाहौर में जहांगीर के आदेश पर हुई गुरु जी की शहादत के कारणों और ऐतिहासिक प्रभाव का विश्लेषण करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌟 1. Early Life & Succession (1563–1581)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              <strong>Sri Guru Arjan Dev Ji</strong>, the Fifth Sikh Guru and the <strong>First Martyr of the Sikh faith (Shaheedan-de-Sartaj)</strong>, was born on <strong>15 April 1563</strong> at <strong>Goindwal Sahib</strong> to father <strong>Sri Guru Ram Das Ji</strong> (4th Guru) and mother <strong>Mata Bhani Ji</strong> (daughter of 3rd Guru Amar Das Ji).
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>"Dohta Bani Ka Bohitha":</strong> His maternal grandfather, Guru Amar Das Ji, blessed young Arjan Dev with the prophetic title <em>"Dohta Bani Ka Bohitha"</em> ("This maternal grandson shall be a great ship/vessel of Divine Bani to carry humanity across the ocean of existence").</li>
              <li><strong>Family:</strong> Married <strong>Mata Ganga Ji</strong> (of Mau Sahib, Phillaur); their son <strong>Hargobind Ji</strong> (later the 6th Guru) was born on 19 June 1595 at <strong>Wadali Guru</strong> (Amritsar) after the blessings of <strong>Baba Buddha Ji</strong>.</li>
              <li><strong>Opposition of Prithi Chand (Mina Sect):</strong> Guru Arjan Dev Ji’s eldest brother <strong>Prithi Chand</strong> fiercely opposed his succession in 1581, colluded with corrupt local officials (like Sulhi Khan), intercepted offerings brought by pilgrims, and started composing spurious hymns under the name "Nanak" (founding the <em>Mina</em> sect).</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🕌 2. Sri Harmandir Sahib, New Towns & Dasvandh</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Foundation of Sri Harmandir Sahib (Golden Temple, 1588/1589):</strong> After completing the brick masonry of the Amritsar and Santokhsar tanks, Guru Arjan Dev Ji designed <strong>Sri Harmandir Sahib</strong> ("Abode of God") in the centre of the Amritsar Sarovar. In <strong>December 1588 (or January 1589)</strong>, the Guru invited the revered Qadiri Sufi saint <strong>Hazrat Mian Mir of Lahore</strong> to lay its foundation stone, symbolizing interfaith harmony.
                <br/>• <em>Architectural Philosophy:</em> Built on a <strong>lower level</strong> than the surrounding land (requiring devotees to walk down steps in humility) and designed with <strong>Four Doors (Chaur-Darwaza)</strong> facing North, South, East, and West, signifying that the house of God is open to all four castes and all directions equally.
              </li>
              <li><strong>Foundation of New Cities & Water Reservoirs:</strong>
                <br/>• <strong>Tarn Taran Sahib (1590):</strong> Founded in the Majha tract with the largest Sarovar and established a leper asylum/dispensary (<em>Kusht Ashram</em>).
                <br/>• <strong>Kartarpur Sahib (Doaba, 1594):</strong> Founded near Jalandhar (distinct from Guru Nanak Dev Ji's Kartarpur on the Ravi). Constructed the historic <strong>Gangsar</strong> well here.
                <br/>• <strong>Sri Hargobindpur (1595):</strong> Founded on the banks of River Beas in celebration of the birth of his son Hargobind.
                <br/>• <strong>Chheharta Sahib (near Amritsar):</strong> Constructed a massive well fitted with <strong>six Persian wheels (Chhe-Harta)</strong> to solve acute irrigation and drinking water shortages for farmers.
                <br/>• <strong>Baoli Sahib at Dabbi Bazaar, Lahore (1599):</strong> Built a sacred stepwell in Lahore.
              </li>
              <li><strong>Institutionalization of Dasvandh:</strong> Reformed the Masand system by institutionalizing <strong>Dasvandh</strong> — every Sikh voluntarily contributing <strong>one-tenth (10%)</strong> of their honest income to the Guru's treasury (<em>Golak</em>) for public welfare, Langar, and construction projects. Also encouraged Sikhs to enter the lucrative Central Asian <strong>horse trade</strong>.</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">📖 3. Compilation of the Adi Granth (Pothi Sahib, 1601–1604)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              To preserve the pristine purity of Gurbani against the forged compositions of Prithi Chand (Minas), Guru Arjan Dev Ji undertook the monumental compilation of the <strong>Adi Granth (Pothi Sahib)</strong> at the serene banks of <strong>Ramsar Sarovar</strong> in Amritsar:
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Source Manuscripts & Scribe:</strong> Obtained the authentic <em>Goindwal Pothis</em> from <strong>Baba Mohan Ji</strong> at Goindwal. <strong>Bhai Gurdas Ji</strong> served as the chief amanuensis (scribe) as Guru Arjan Dev Ji dictated and organized the scripture according to <strong>30 musical Raags</strong> (the 31st Raag, <em>Jaijawanti</em>, was added later by Guru Gobind Singh Ji with Guru Tegh Bahadur Ji's hymns).</li>
              <li><strong>First Parkash (Installation — August/September 1604):</strong> Installed inside Sri Harmandir Sahib in <strong>1604 CE</strong> with revered octogenarian Sikh <strong>Baba Buddha Ji</strong> appointed as the <strong>First Granthi (Head Priest)</strong>. The original 1604 manuscript (<em>Kartarpuri Bir</em>) is preserved at Kartarpur (Jalandhar).</li>
              <li><strong>Contributors in the Adi Granth:</strong>
                <br/>• <strong>First 5 Sikh Gurus:</strong> Guru Nanak (974), Guru Angad (62 Saloks), Guru Amar Das (907), Guru Ram Das (679), and <strong>Guru Arjan Dev Ji (2,218 hymns — the largest single contributor!)</strong>.
                <br/>• <strong>15 Bhagats & Sufi Saints (Bhagat Bani):</strong> Kabir, Farid, Namdev, Ravidas, Dhanna, Trilochan, Beni, Sain, Pipa, Sadhna, Ramanand, Parmanand, Surdas, Jaidev, and Bhikhan.
                <br/>• <strong>11 Bhatts (Bards) & 4 Gursikhs:</strong> Kalshar, Balh, Gayand, Mathura, etc. (who composed 123 <em>Bhatt Savaiye</em>), along with Baba Sundar, Satta, Balwand, and Mardana.
                <br/>• <em>Rejected Poets:</em> Guru Ji rejected the egoistic compositions of four contemporary Lahore poets: <strong>Kahna, Chhajju, Shah Hussain, and Peelu</strong>, because their verses contradicted Gurmat philosophy.
              </li>
              <li><strong>Major Compositions of Guru Arjan Dev Ji:</strong> Authored <strong>2,218 Shabads in 30 Raags</strong>, including the universally cherished <strong>Sukhmani Sahib</strong> ("Psalm of Peace" in <em>Raag Gauri</em>, 24 Ashtpadis), <strong>Barah Maha (Raag Majh)</strong>, <strong>Bavan Akhari</strong>, and <strong>6 Vars</strong>.</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🔥 4. Supreme Martyrdom at Lahore (30 May 1606)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              While Emperor Akbar deeply respected Guru Arjan Dev Ji (visiting him at Goindwal in 1598 and remitting Punjab's land revenue on the Guru's plea during famine), the ascension of <strong>Emperor Jahangir</strong> in <strong>1605</strong> changed the political climate drastically:
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Causes of Martyrdom:</strong>
                <br/>1. <em>Religious Bigotry of Jahangir & Naqshbandi Revivalists:</em> In his autobiography <strong>Tuzuk-i-Jahangiri</strong>, Jahangir openly wrote that for three or four generations the Sikh Gurus had been running a "shop of falsehood" at Goindwal where both Hindus and Muslims were flocking, and that he had long wanted either to close it down or bring Guru Arjan into the fold of Islam. Revivalist cleric <strong>Shaikh Ahmad Sirhindi (Mujaddid-i-Alf-i-Sani)</strong> further instigated the Emperor.
                <br/>2. <em>Prince Khusrau’s Rebellion (1606):</em> Jahangir’s rebellious son <strong>Prince Khusrau</strong> fled toward Punjab and sought shelter/langar and blessings from Guru Arjan Dev Ji at Goindwal/Tarn Taran, which Jahangir used as an immediate political pretext.
                <br/>3. <em>Intrigues of Prithi Chand & Chandu Shah:</em> Hostility from Prithi Chand and imperial Diwan <strong>Chandu Shah</strong> (whose arrogant marriage proposal for his daughter to young Hargobind had been declined by the Sangat).
              </li>
              <li><strong>Torture & Execution (May 1606):</strong> Jahangir imposed a fine of 2 lakh rupees and ordered the Guru to alter hymns in the Adi Granth; Guru Ji firmly refused both. Handed over to Murtaza Khan in <strong>Lahore</strong> under the law of <em>Yasa</em> (execution without shedding blood), the Guru was made to sit on a red-hot iron plate while burning sand was poured over his head and boiled in a cauldron for five days. Calmly reciting <em>"Tera Kiya Meetha Laage, Har Naam Padarath Nanak Maange,"</em> Guru Arjan Dev Ji attained martyrdom in the waters of the <strong>River Ravi</strong> on <strong>30 May 1606</strong> (Gurdwara Dera Sahib, Lahore).</li>
              <li><strong>Historical Impact:</strong> This watershed martyrdom transformed the peaceful Sikh Panth into a saint-soldier movement, leading directly to Guru Hargobind Sahib Ji's adoption of <strong>Miri-Piri</strong> and the building of the <strong>Akal Takht</strong>.</li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌟 1. ਮੁੱਢਲਾ ਜੀਵਨ ਅਤੇ ਗੁਰਗੱਦੀ (1563–1581)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਸਿੱਖ ਧਰਮ ਦੇ ਪੰਜਵੇਂ ਗੁਰੂ ਅਤੇ <strong>'ਸ਼ਹੀਦਾਂ ਦੇ ਸਰਤਾਜ' ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ</strong> ਦਾ ਜਨਮ <strong>15 ਅਪ੍ਰੈਲ 1563</strong> ਨੂੰ <strong>ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ</strong> ਵਿਖੇ ਪਿਤਾ <strong>ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ</strong> ਅਤੇ ਮਾਤਾ <strong>ਬੀਬੀ ਭਾਨੀ ਜੀ</strong> ਦੇ ਘਰ ਹੋਇਆ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>"ਦੋਹਤਾ ਬਾਣੀ ਕਾ ਬੋਹਿਥਾ":</strong> ਨਾਨਾ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਨੇ ਬਾਲਕ ਅਰਜਨ ਦੇਵ ਜੀ ਨੂੰ <em>"ਦੋਹਤਾ ਬਾਣੀ ਕਾ ਬੋਹਿਥਾ"</em> (ਬਾਣੀ ਦਾ ਜਹਾਜ਼) ਕਹਿ ਕੇ ਵਰਦਾਨ ਦਿੱਤਾ ਸੀ।</li>
              <li><strong>ਪਰਿਵਾਰ:</strong> ਉਹਨਾਂ ਦਾ ਵਿਆਹ <strong>ਮਾਤਾ ਗੰਗਾ ਜੀ</strong> (ਮਉ ਸਾਹਿਬ, ਫਿਲੌਰ) ਨਾਲ ਹੋਇਆ। ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਦੇ ਅਸ਼ੀਰਵਾਦ ਨਾਲ 1595 ਵਿੱਚ <strong>ਗੁਰੂ ਕੀ ਵਡਾਲੀ</strong> (ਅੰਮ੍ਰਿਤਸਰ) ਵਿਖੇ ਸਪੁੱਤਰ <strong>ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ</strong> ਦਾ ਜਨਮ ਹੋਇਆ।</li>
              <li><strong>ਪ੍ਰਿਥੀ ਚੰਦ (ਮੀਣਾ ਸੰਪਰਦਾਇ) ਦਾ ਵਿਰੋਧ:</strong> ਵੱਡੇ ਭਰਾ <strong>ਪ੍ਰਿਥੀ ਚੰਦ</strong> ਨੇ ਗੁਰਗੱਦੀ ਨਾ ਮਿਲਣ ਕਾਰਨ ਸਖ਼ਤ ਵਿਰੋਧ ਕੀਤਾ, 'ਮੀਣਾ' ਸੰਪਰਦਾਇ ਚਲਾਈ ਅਤੇ 'ਨਾਨਕ' ਛਾਪ ਹੇਠ ਕੱਚੀ ਬਾਣੀ ਰਚਣੀ ਸ਼ੁਰੂ ਕਰ ਦਿੱਤੀ।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🕌 2. ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ, ਨਵੇਂ ਨਗਰ ਅਤੇ ਦਸਵੰਧ ਪ੍ਰਥਾ</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਨੀਂਹ (1588/1589):</strong> ਅੰਮ੍ਰਿਤਸਰ ਸਰੋਵਰ ਦੇ ਵਿਚਕਾਰ <strong>ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ</strong> ਦੀ ਉਸਾਰੀ ਕਰਵਾਈ। ਧਾਰਮਿਕ ਸਦਭਾਵਨਾ ਵਜੋਂ <strong>ਦਸੰਬਰ 1588 (ਜਾਂ ਜਨਵਰੀ 1589)</strong> ਵਿੱਚ ਲਾਹੌਰ ਦੇ ਪ੍ਰਸਿੱਧ ਕਾਦਰੀ ਸੂਫ਼ੀ ਫ਼ਕੀਰ <strong>ਸਾਈਂ ਮੀਆਂ ਮੀਰ ਜੀ</strong> ਤੋਂ ਨੀਂਹ-ਪੱਥਰ ਰਖਵਾਇਆ। ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੇ <strong>ਚਾਰ ਦਰਵਾਜ਼ੇ</strong> ਚਾਰਾਂ ਦਿਸ਼ਾਵਾਂ ਅਤੇ ਚਾਰਾਂ ਵਰਣਾਂ ਦੀ ਬਰਾਬਰੀ ਦੇ ਪ੍ਰਤੀਕ ਹਨ।</li>
              <li><strong>ਨਵੇਂ ਸ਼ਹਿਰਾਂ ਅਤੇ ਸਰੋਵਰਾਂ ਦਾ ਨਿਰਮਾਣ:</strong>
                <br/>• <strong>ਤਰਨਤਾਰਨ ਸਾਹਿਬ (1590):</strong> ਮਾਝੇ ਵਿੱਚ ਵਿਸ਼ਾਲ ਸਰੋਵਰ ਅਤੇ ਕੋਹੜੀਆਂ ਲਈ ਦਵਾਖਾਨਾ (ਕੁਸ਼ਟ ਆਸ਼ਰਮ) ਬਣਾਇਆ।
                <br/>• <strong>ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ (ਦੁਆਬਾ, 1594):</strong> ਜਲੰਧਰ ਨੇੜੇ ਵਸਾਇਆ ਅਤੇ ਇੱਥੇ <strong>ਗੰਗਸਰ</strong> ਖੂਹ ਲਗਵਾਇਆ।
                <br/>• <strong>ਸ੍ਰੀ ਹਰਗੋਬਿੰਦਪੁਰ (1595):</strong> ਬਿਆਸ ਦਰਿਆ ਦੇ ਕੰਢੇ ਵਸਾਇਆ।
                <br/>• <strong>ਛੇਹਰਟਾ ਸਾਹਿਬ:</strong> ਕਿਸਾਨਾਂ ਦੀ ਪਾਣੀ ਦੀ ਲੋੜ ਲਈ <strong>ਛੇ-ਹਰਟਾਂ ਵਾਲਾ ਵਿਸ਼ਾਲ ਖੂਹ</strong> ਲਗਵਾਇਆ।
                <br/>• <strong>ਲਾਹੌਰ ਦੀ ਬਾਉਲੀ (1599):</strong> ਡੱਬੀ ਬਾਜ਼ਾਰ ਲਾਹੌਰ ਵਿਖੇ ਬਾਉਲੀ ਸਾਹਿਬ ਬਣਵਾਈ।
              </li>
              <li><strong>ਦਸਵੰਧ ਪ੍ਰਥਾ:</strong> ਹਰ ਸਿੱਖ ਲਈ ਆਪਣੀ ਨੇਕ ਕਮਾਈ ਦਾ <strong>ਦਸਵਾਂ ਹਿੱਸਾ (1/10 ਜਾਂ 10%)</strong> ਗੁਰੂ ਦੀ ਗੋਲਕ ਵਿੱਚ ਭੇਟ ਕਰਨਾ ਨਿਯਮਿਤ ਕੀਤਾ ਅਤੇ ਸਿੱਖਾਂ ਨੂੰ ਘੋੜਿਆਂ ਦੇ ਵਪਾਰ ਲਈ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">📖 3. ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ (ਪੋਥੀ ਸਾਹਿਬ) ਦਾ ਸੰਕਲਨ (1601–1604)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਰਾਮਸਰ ਸਰੋਵਰ ਅਤੇ ਲਿਖਾਰੀ:</strong> ਗੁਰਬਾਣੀ ਦੀ ਸ਼ੁੱਧਤਾ ਕਾਇਮ ਰੱਖਣ ਲਈ ਅੰਮ੍ਰਿਤਸਰ ਵਿਖੇ <strong>ਰਾਮਸਰ ਸਰੋਵਰ</strong> ਦੇ ਕੰਢੇ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦੀ ਸੰਪਾਦਨਾ ਕੀਤੀ। ਗੋਇੰਦਵਾਲ ਤੋਂ <strong>ਬਾਬਾ ਮੋਹਨ ਜੀ</strong> ਕੋਲੋਂ ਪੋਥੀਆਂ ਪ੍ਰਾਪਤ ਕੀਤੀਆਂ ਅਤੇ <strong>ਭਾਈ ਗੁਰਦਾਸ ਜੀ</strong> ਨੇ ਲਿਖਾਰੀ ਦੀ ਸੇਵਾ ਨਿਭਾਈ।</li>
              <li><strong>ਪਹਿਲਾ ਪ੍ਰਕਾਸ਼ (1604):</strong> ਭਾਦੋਂ ਸੁਦੀ ਏਕਮ <strong>1604 ਈ.</strong> ਨੂੰ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਵਿਖੇ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦਾ ਪਹਿਲਾ ਪ੍ਰਕਾਸ਼ ਕੀਤਾ ਗਿਆ ਅਤੇ <strong>ਬਾਬਾ ਬੁੱਢਾ ਜੀ</strong> ਨੂੰ <strong>ਪਹਿਲੇ ਗ੍ਰੰਥੀ</strong> ਨਿਯੁਕਤ ਕੀਤਾ ਗਿਆ।</li>
              <li><strong>ਬਾਣੀਕਾਰਾਂ ਦਾ ਵੇਰਵਾ:</strong> ਆਦਿ ਗ੍ਰੰਥ ਵਿੱਚ ਪਹਿਲੇ 5 ਗੁਰੂ ਸਾਹਿਬਾਨ, <strong>15 ਭਗਤਾਂ/ਸੂਫ਼ੀ ਸੰਤਾਂ</strong> (ਕਬੀਰ ਜੀ, ਫ਼ਰੀਦ ਜੀ, ਨਾਮਦੇਵ ਜੀ, ਰਵਿਦਾਸ ਜੀ, ਧੰਨਾ ਜੀ ਆਦਿ), <strong>11 ਭੱਟਾਂ</strong> ਅਤੇ <strong>4 ਗੁਰਸਿੱਖਾਂ</strong> (ਸੁੰਦਰ ਜੀ, ਸੱਤਾ, ਬਲਵੰਡ, ਮਰਦਾਨਾ ਜੀ) ਦੀ ਬਾਣੀ <strong>30 ਰਾਗਾਂ</strong> ਵਿੱਚ ਦਰਜ ਕੀਤੀ ਗਈ। ਗੁਰੂ ਜੀ ਨੇ ਲਾਹੌਰ ਦੇ ਚਾਰ ਕਵੀਆਂ — <strong>ਕਾਹਨਾ, ਛੱਜੂ, ਸ਼ਾਹ ਹੁਸੈਨ ਅਤੇ ਪੀਲੂ</strong> — ਦੀਆਂ ਰਚਨਾਵਾਂ ਨੂੰ ਗੁਰਮਤਿ ਅਨੁਕੂਲ ਨਾ ਹੋਣ ਕਾਰਨ ਸ਼ਾਮਲ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਕਰ ਦਿੱਤਾ।</li>
              <li><strong>ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਬਾਣੀ:</strong> ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ <strong>2,218 ਸ਼ਬਦ (30 ਰਾਗਾਂ ਵਿੱਚ)</strong> ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੇ ਹਨ। ਪ੍ਰਮੁੱਖ ਰਚਨਾਵਾਂ: <strong>ਸੁਖਮਨੀ ਸਾਹਿਬ</strong> (ਰਾਗੁ ਗਉੜੀ, 24 ਅਸਟਪਦੀਆਂ), <strong>ਬਾਰਹ ਮਾਹਾ (ਰਾਗੁ ਮਾਝ)</strong>, <strong>ਬਾਵਨ ਅੱਖਰੀ</strong> ਅਤੇ 6 ਵਾਰਾਂ।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🔥 4. ਅਦੁੱਤੀ ਸ਼ਹਾਦਤ (30 ਮਈ 1606, ਲਾਹੌਰ)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਸ਼ਹਾਦਤ ਦੇ ਕਾਰਨ:</strong> ਮੁਗ਼ਲ ਸਮਰਾਟ <strong>ਜਹਾਂਗੀਰ</strong> ਦੀ ਧਾਰਮਿਕ ਕੱਟੜਤਾ (ਜਿਸ ਦਾ ਜ਼ਿਕਰ ਉਸ ਨੇ ਆਪਣੀ ਆਤਮਕਥਾ <em>'ਤੁਜ਼ੁਕ-ਏ-ਜਹਾਂਗੀਰੀ'</em> ਵਿੱਚ ਕੀਤਾ ਹੈ), ਨਕਸ਼ਬੰਦੀ ਕੱਟੜਪੰਥੀ <strong>ਸ਼ੇਖ਼ ਅਹਿਮਦ ਸਰਹਿੰਦੀ</strong> ਦੀ ਚੁੱਕਣਾ, ਬਾਗ਼ੀ <strong>ਸ਼ਹਿਜ਼ਾਦਾ ਖੁਸਰੋ</strong> ਦੀ ਮਦਦ ਦਾ ਬਹਾਨਾ, ਅਤੇ ਪ੍ਰਿਥੀ ਚੰਦ ਤੇ <strong>ਚੰਦੂ ਸ਼ਾਹ</strong> ਦੀ ਸਾਜ਼ਿਸ਼।</li>
              <li><strong>ਤਸੀਹੇ ਅਤੇ ਸ਼ਹਾਦਤ:</strong> ਜਹਾਂਗੀਰ ਨੇ ਯਾਸਾ ਦੇ ਕਾਨੂੰਨ ਤਹਿਤ ਗੁਰੂ ਜੀ ਨੂੰ ਮੁਰਤਜ਼ਾ ਖ਼ਾਨ ਦੇ ਹਵਾਲੇ ਕੀਤਾ। ਲਾਹੌਰ ਵਿਖੇ ਗੁਰੂ ਜੀ ਨੂੰ ਤੱਤੀ ਤਵੀ 'ਤੇ ਬਿਠਾਇਆ ਗਿਆ, ਸੀਸ ਵਿੱਚ ਤੱਤਾ ਰੇਤਾ ਪਾਇਆ ਗਿਆ ਅਤੇ ਦੇਗ ਵਿੱਚ ਉਬਾਲਿਆ ਗਿਆ। <em>"ਤੇਰਾ ਕੀਆ ਮੀਠਾ ਲਾਗੈ॥"</em> ਉਚਾਰਦਿਆਂ <strong>30 ਮਈ 1606</strong> ਨੂੰ ਰਾਵੀ ਦਰਿਆ ਦੇ ਕੰਢੇ (ਗੁਰਦੁਆਰਾ ਡੇਰਾ ਸਾਹਿਬ, ਲਾਹੌਰ) ਗੁਰੂ ਜੀ ਜੋਤੀ-ਜੋਤਿ ਸਮਾ ਗਏ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌟 1. प्रारंभिक जीवन एवं उत्तराधिकार (1563–1581)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              सिख धर्म के पंचम गुरु एवं <strong>'शहीदां दे सरताज' (प्रथम शहीद) श्री गुरु अर्जुन देव जी</strong> का जन्म <strong>15 अप्रैल 1563</strong> को <strong>गोइंदवाल साहिब</strong> में पिता <strong>श्री गुरु रामदास जी</strong> और माता <strong>बीबी भानी जी</strong> के घर हुआ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>"दोहता बाणी का बोहिथा":</strong> नाना गुरु अमरदास जी ने बालक अर्जुन देव को <em>"दोहता बाणी का बोहिथा"</em> (बाणी का जहाज) कहकर आशीर्वाद दिया था।</li>
              <li><strong>परिवार एवं विरोध:</strong> विवाह <strong>माता गंगा जी</strong> से हुआ; बाबा बुड्ढा जी के आशीर्वाद से 1595 में <strong>गुरु की वडाली</strong> में पुत्र <strong>हरगोबिंद जी</strong> का जन्म हुआ। बड़े भाई <strong>पृथी चंद</strong> ने गुरुगद्दी न मिलने पर 'मीणा संप्रदाय' चलाया और विरोध किया।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🕌 2. श्री हरिमंदिर साहिब, नए नगर एवं दसवंध प्रथा</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>श्री हरिमंदिर साहिब की नींव (1588/1589):</strong> अमृतसर सरोवर के मध्य में श्री हरिमंदिर साहिब का निर्माण करवाया और <strong>दिसंबर 1588 (या जनवरी 1589)</strong> में लाहौर के प्रसिद्ध कादरी सूफी संत <strong>हज़रत मियां मीर जी</strong> से नींव का पत्थर रखवाया। इसके <strong>चार दरवाजे</strong> चारों दिशाओं और चारों वर्णों की समानता के प्रतीक हैं।</li>
              <li><strong>नए नगरों की स्थापना:</strong> <strong>तरनतारन साहिब (1590)</strong> (कुष्ठ आश्रम व विशाल सरोवर), <strong>करतारपुर साहिब (दोआबा, 1594)</strong> (जालंधर के पास, गंगसर कुआं), <strong>श्री हरगोबिंदपुर (1595)</strong> (ब्यास नदी तट पर), <strong>छेहरटा साहिब</strong> (छह रहटों वाला विशाल कुआं) तथा डब्बी बाज़ार लाहौर में बावली।</li>
              <li><strong>दसवंध प्रथा:</strong> प्रत्येक सिख के लिए अपनी नेक कमाई का <strong>दसवां भाग (1/10 या 10%)</strong> गुरु की गोलक में देना अनिवार्य किया।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">📖 3. आदि ग्रंथ (पोथी साहिब) का संकलन (1601–1604)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>रामसर सरोवर एवं संपादन:</strong> अमृतसर में <strong>रामसर सरोवर</strong> के तट पर <strong>भाई गुरदास जी</strong> से आदि ग्रंथ लिखवाया। गोइंदवाल से बाबा मोहन जी से पोथियां प्राप्त कीं।</li>
              <li><strong>प्रथम प्रकाश (1604):</strong> <strong>1604 ई.</strong> में श्री हरिमंदिर साहिब में आदि ग्रंथ का प्रथम प्रकाश किया गया और <strong>बाबा बुड्ढा जी</strong> को <strong>प्रथम ग्रंथी</strong> नियुक्त किया गया।</li>
              <li><strong>योगदानकर्ता एवं प्रमुख बाणी:</strong> प्रथम 5 गुरुओं, <strong>15 भक्तों/सूफी संतों</strong>, <strong>11 भट्टों</strong> और <strong>4 गुरसिखों</strong> की बाणी 30 रागों में संकलित की। काहना, छज्जू, शाह हुसैन और पीलू की रचनाएं अस्वीकार कर दीं। गुरु अर्जुन देव जी ने सर्वाधिक <strong>2,218 शब्द (30 रागों में)</strong> रचे, जिनमें <strong>सुखमनी साहिब</strong> (राग गौड़ी, 24 अष्टपदी), <strong>बारह माहा (राग माझ)</strong> और <strong>बावन अक्खरी</strong> प्रमुख हैं।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🔥 4. लाहौर में सर्वोच्च शहादत (30 मई 1606)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>कारण:</strong> मुगल सम्राट <strong>जहांगीर</strong> की धार्मिक असहिष्णुता (आत्मकथा <em>'तुजुक-ए-जहांगीरी'</em> में उल्लेख), शेख अहमद सरहिंदी का उकसावा, विद्रोही <strong>शहज़ादा खुसरो</strong> की सहायता का आरोप, तथा पृथी चंद और <strong>चंदू शाह</strong> का षड्यंत्र।</li>
              <li><strong>शहादत:</strong> लाहौर में यासा कानून के तहत तपती तवी पर बैठाकर और उबलती देग की यातनाएं सहते हुए <strong>30 मई 1606</strong> को रावी नदी के तट (गुरुद्वारा डेरा साहिब, लाहौर) पर गुरु जी ने शहादत प्राप्त की।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Distinguishing the Two Kartarpurs & Two Barah Mahas in Sikh History',
          pa: 'ਦੋ ਕਰਤਾਰਪੁਰ ਅਤੇ ਦੋ ਬਾਰਹ ਮਾਹਾ ਬਾਣੀਆਂ ਵਿੱਚ ਅੰਤਰ',
          hi: 'दो करतारपुर नगरों एवं दो बारह माहा बाणियों में अंतर',
        },
        problem: {
          en: 'Explain the difference between: (a) Kartarpur founded by Guru Nanak Dev Ji vs Kartarpur founded by Guru Arjan Dev Ji, and (b) Barah Maha of Guru Nanak Dev Ji vs Barah Maha of Guru Arjan Dev Ji.',
          pa: '(ੳ) ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਅਤੇ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੁਆਰਾ ਵਸਾਏ ਕਰਤਾਰਪੁਰ ਸ਼ਹਿਰਾਂ, ਅਤੇ (ਅ) ਦੋਵਾਂ ਗੁਰੂ ਸਾਹਿਬਾਨਾਂ ਦੀਆਂ ਬਾਰਹ ਮਾਹਾ ਬਾਣੀਆਂ ਦੇ ਰਾਗਾਂ ਵਿੱਚ ਅੰਤਰ ਦੱਸੋ।',
          hi: '(क) गुरु नानक देव जी व गुरु अर्जुन देव जी द्वारा बसाए गए करतारपुर नगरों, तथा (ख) दोनों गुरुओं की बारह माहा बाणियों के रागों में अंतर बताइए।',
        },
        steps: {
          en: [
            'Step 1: Guru Nanak Dev Ji founded Kartarpur Sahib on the right bank of River Ravi (now in Narowal, Pakistan) in 1521. Guru Arjan Dev Ji founded Kartarpur Sahib in the Jalandhar Doab (Punjab, India) in 1594.',
            'Step 2: Guru Nanak Dev Ji composed Barah Maha in Raag Tukhari. Guru Arjan Dev Ji composed Barah Maha in Raag Majh (the one traditionally recited on Sangrand).',
          ],
          pa: [
            'ਕਦਮ 1: ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ 1521 ਵਿੱਚ ਰਾਵੀ ਦਰਿਆ ਦੇ ਕੰਢੇ (ਪਾਕਿਸਤਾਨ) ਕਰਤਾਰਪੁਰ ਵਸਾਇਆ, ਜਦਕਿ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ 1594 ਵਿੱਚ ਜਲੰਧਰ (ਦੁਆਬਾ) ਨੇੜੇ ਕਰਤਾਰਪੁਰ ਵਸਾਇਆ।',
            'ਕਦਮ 2: ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਬਾਰਹ ਮਾਹਾ "ਰਾਗੁ ਤੁਖਾਰੀ" ਵਿੱਚ ਹੈ, ਜਦਕਿ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦਾ ਬਾਰਹ ਮਾਹਾ "ਰਾਗੁ ਮਾਝ" ਵਿੱਚ ਹੈ।',
          ],
          hi: [
            'चरण 1: गुरु नानक देव जी ने 1521 में रावी नदी के तट पर (पाकिस्तान) करतारपुर बसाया, जबकि गुरु अर्जुन देव जी ने 1594 में जालंधर (दोआबा) के पास करतारपुर बसाया।',
            'चरण 2: गुरु नानक देव जी का बारह माहा "राग तुखारी" में है, जबकि गुरु अर्जुन देव जी का बारह माहा "राग माझ" में है।',
          ],
        },
        solution: {
          en: 'Kartarpur (Ravi, 1521) & Barah Maha (Raag Tukhari) = Guru Nanak Dev Ji; Kartarpur (Doaba/Jalandhar, 1594) & Barah Maha (Raag Majh) = Guru Arjan Dev Ji.',
          pa: 'ਕਰਤਾਰਪੁਰ (ਰਾਵੀ, 1521) ਤੇ ਬਾਰਹ ਮਾਹਾ (ਰਾਗੁ ਤੁਖਾਰੀ) = ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ; ਕਰਤਾਰਪੁਰ (ਜਲੰਧਰ, 1594) ਤੇ ਬਾਰਹ ਮਾਹਾ (ਰਾਗੁ ਮਾਝ) = ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ।',
          hi: 'करतारपुर (रावी, 1521) व बारह माहा (राग तुखारी) = गुरु नानक देव जी; करतारपुर (जालंधर, 1594) व बारह माहा (राग माझ) = गुरु अर्जुन देव जी।',
        },
      },
      {
        title: {
          en: 'Key Contributors and Structure of the 1604 Adi Granth',
          pa: '1604 ਦੇ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦੇ ਪ੍ਰਮੁੱਖ ਤੱਥ',
          hi: '1604 के आदि ग्रंथ साहिब के प्रमुख तथ्य',
        },
        problem: {
          en: 'Identify (1) the Scribe, (2) the First Granthi, (3) the site of compilation, and (4) the Guru with the maximum number of hymns in the Adi Granth (1604).',
          pa: 'ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ (1604) ਦੇ (1) ਲਿਖਾਰੀ, (2) ਪਹਿਲੇ ਗ੍ਰੰਥੀ, (3) ਸੰਪਾਦਨਾ ਅਸਥਾਨ ਅਤੇ (4) ਸਭ ਤੋਂ ਵੱਧ ਸ਼ਬਦਾਂ ਵਾਲੇ ਗੁਰੂ ਸਾਹਿਬ ਦਾ ਨਾਮ ਦੱਸੋ।',
          hi: 'आदि ग्रंथ साहिब (1604) के (1) लिपिक, (2) प्रथम ग्रंथी, (3) संकलन स्थल और (4) सर्वाधिक शब्दों वाले गुरु का नाम बताइए।',
        },
        steps: {
          en: [
            'Step 1: Bhai Gurdas Ji wrote the manuscript as dictated by Guru Arjan Dev Ji at Ramsar Sarovar, Amritsar.',
            'Step 2: Baba Buddha Ji was appointed the First Granthi at Harmandir Sahib in 1604.',
            'Step 3: Guru Arjan Dev Ji contributed 2,218 hymns out of ~5,894 total hymns, making him the single largest contributor.',
          ],
          pa: [
            'ਕਦਮ 1: ਰਾਮਸਰ ਸਰੋਵਰ ਦੇ ਕੰਢੇ ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਨੇ ਲਿਖਾਰੀ ਦੀ ਸੇਵਾ ਨਿਭਾਈ।',
            'ਕਦਮ 2: 1604 ਵਿੱਚ ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਪਹਿਲੇ ਗ੍ਰੰਥੀ ਬਣੇ।',
            'ਕਦਮ 3: ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੇ ਸਭ ਤੋਂ ਵੱਧ 2,218 ਸ਼ਬਦ ਦਰਜ ਹਨ।',
          ],
          hi: [
            'चरण 1: रामसर सरोवर के तट पर भाई गुरदास जी ने लिपिक की सेवा निभाई।',
            'चरण 2: 1604 में बाबा बुड्ढा जी प्रथम ग्रंथी नियुक्त हुए।',
            'चरण 3: गुरु अर्जुन देव जी के सर्वाधिक 2,218 शब्द दर्ज हैं।',
          ],
        },
        solution: {
          en: 'Scribe: Bhai Gurdas Ji | First Granthi: Baba Buddha Ji | Site: Ramsar Sarovar | Largest Contributor: Sri Guru Arjan Dev Ji (2,218 hymns).',
          pa: 'ਲਿਖਾਰੀ: ਭਾਈ ਗੁਰਦਾਸ ਜੀ | ਪਹਿਲੇ ਗ੍ਰੰਥੀ: ਬਾਬਾ ਬੁੱਢਾ ਜੀ | ਅਸਥਾਨ: ਰਾਮਸਰ ਸਰੋਵਰ | ਸਭ ਤੋਂ ਵੱਧ ਬਾਣੀ: ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (2,218 ਸ਼ਬਦ)।',
          hi: 'लिपिक: भाई गुरदास जी | प्रथम ग्रंथी: बाबा बुड्ढा जी | स्थल: रामसर सरोवर | सर्वाधिक बाणी: श्री गुरु अर्जुन देव जी (2,218 शब्द)।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'The original 1604 Adi Granth included the hymns of the 9th Guru, Sri Guru Tegh Bahadur Ji.',
          pa: '1604 ਦੇ ਆਦਿ ਗ੍ਰੰਥ ਵਿੱਚ ਨੌਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ ਸ਼ਾਮਲ ਸੀ।',
          hi: '1604 के मूल आदि ग्रंथ में नौवें गुरु श्री गुरु तेग बहादुर जी की बाणी शामिल थी।',
        },
        correction: {
          en: 'The 1604 Adi Granth contained the hymns of the first 5 Gurus, 15 Bhagats, 11 Bhatts, and 4 Gursikhs across 30 Raags. The 115 hymns (59 Shabads + 56 Saloks) of the 9th Guru, Sri Guru Tegh Bahadur Ji, and the 31st Raag (Jaijawanti) were added in 1705–06 by Sri Guru Gobind Singh Ji at Damdama Sahib (Talwandi Sabo) in the Damdami Bir.',
          pa: '1604 ਦੇ ਆਦਿ ਗ੍ਰੰਥ ਵਿੱਚ ਪਹਿਲੇ 5 ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀ ਬਾਣੀ ਸੀ। ਨੌਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ (ਅਤੇ 31ਵਾਂ ਰਾਗ ਜੈਜਾਵੰਤੀ) 1705–06 ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਦਮਦਮਾ ਸਾਹਿਬ ਵਿਖੇ ਸ਼ਾਮਲ ਕੀਤੀ।',
          hi: '1604 के आदि ग्रंथ में प्रथम 5 गुरुओं की बाणी थी। नौवें गुरु श्री गुरु तेग बहादुर जी की बाणी (तथा 31वां राग जैजावंती) 1705–06 में श्री गुरु गोबिंद सिंह जी ने दमदमा साहिब में जोड़ी।',
        },
        whyItMatters: {
          en: 'Crucial distinction between the Kartarpuri Bir (1604, 30 Raags) and the Damdami Bir (1706, 31 Raags).',
          pa: 'ਕਰਤਾਰਪੁਰੀ ਬੀੜ (1604) ਅਤੇ ਦਮਦਮੀ ਬੀੜ (1706) ਦਾ ਇਹ ਅੰਤਰ ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਬਹੁਤ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'करतारपुरी बीड़ (1604) और दमदमी बीड़ (1706) का यह अंतर परीक्षाओं में बार-बार पूछा जाता है।',
        },
      },
      {
        misconception: {
          en: 'Guru Arjan Dev Ji was martyred during the reign of Emperor Aurangzeb.',
          pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਸ਼ਹਾਦਤ ਔਰੰਗਜ਼ੇਬ ਦੇ ਸਮੇਂ ਹੋਈ ਸੀ।',
          hi: 'गुरु अर्जुन देव जी की शहादत औरंगज़ेब के शासनकाल में हुई थी।',
        },
        correction: {
          en: 'Guru Arjan Dev Ji (5th Guru) was martyred on 30 May 1606 at Lahore under the orders of Mughal Emperor Jahangir. It was the 9th Guru, Sri Guru Tegh Bahadur Ji, who was martyred on 11 November 1675 at Chandni Chowk, Delhi under Emperor Aurangzeb.',
          pa: 'ਪੰਜਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਸ਼ਹਾਦਤ 30 ਮਈ 1606 ਨੂੰ ਲਾਹੌਰ ਵਿਖੇ ਜਹਾਂਗੀਰ ਦੇ ਹੁਕਮ ਨਾਲ ਹੋਈ ਸੀ, ਜਦਕਿ ਨੌਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹਾਦਤ 1675 ਵਿੱਚ ਦਿੱਲੀ ਵਿਖੇ ਔਰੰਗਜ਼ੇਬ ਦੇ ਸਮੇਂ ਹੋਈ ਸੀ।',
          hi: 'पांचवें गुरु श्री गुरु अर्जुन देव जी की शहादत 30 मई 1606 को लाहौर में जहांगीर के आदेश से हुई थी, जबकि नौवें गुरु श्री गुरु तेग बहादुर जी की शहादत 1675 में दिल्ली में औरंगज़ेब के काल में हुई थी।',
        },
        whyItMatters: {
          en: 'Avoids mixing up the Mughal rulers responsible for the two Guru martyrdoms (1606 Jahangir vs 1675 Aurangzeb).',
          pa: 'ਦੋਵਾਂ ਗੁਰੂ ਸਾਹਿਬਾਨਾਂ ਦੀਆਂ ਸ਼ਹਾਦਤਾਂ ਦੇ ਸਮਕਾਲੀ ਮੁਗ਼ਲ ਸ਼ਾਸਕਾਂ (1606 ਜਹਾਂਗੀਰ ਬਨਾਮ 1675 ਔਰੰਗਜ਼ੇਬ) ਦਾ ਨਿਖੇੜਾ।',
          hi: 'दोनों गुरु शहादतों के समकालीन मुगल शासकों (1606 जहांगीर बनाम 1675 औरंगज़ेब) का स्पष्ट अंतर।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Birth: 15 April 1563 at Goindwal Sahib; Parents: Guru Ram Das Ji & Mata Bhani Ji; Title by Guru Amar Das Ji: "Dohta Bani Ka Bohitha".',
          'Harmandir Sahib (1588/89): Foundation stone laid by Sufi saint Hazrat Mian Mir of Lahore; 4 doors symbolizing universal equality.',
          'Towns Founded: Tarn Taran (1590), Kartarpur Doaba (1594), Sri Hargobindpur (1595), Chheharta Sahib (6-wheel well), Baoli at Dabbi Bazaar Lahore (1599).',
          'Adi Granth (1604): Compiled at Ramsar Sarovar; Scribe: Bhai Gurdas Ji; First Granthi: Baba Buddha Ji; Guru Arjan Dev Ji composed 2,218 hymns (Sukhmani Sahib in Raag Gauri, Barah Maha in Raag Majh).',
          'Martyrdom: 30 May 1606 at Lahore (River Ravi / Gurdwara Dera Sahib) under Emperor Jahangir (recorded in Tuzuk-i-Jahangiri).',
        ],
        pa: [
          'ਜਨਮ: 15 ਅਪ੍ਰੈਲ 1563 (ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ); ਮਾਤਾ-ਪਿਤਾ: ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਅਤੇ ਬੀਬੀ ਭਾਨੀ ਜੀ; ਖਿਤਾਬ: "ਦੋਹਤਾ ਬਾਣੀ ਕਾ ਬੋਹਿਥਾ" ਤੇ "ਸ਼ਹੀਦਾਂ ਦੇ ਸਰਤਾਜ"।',
          'ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ (1588/89): ਨੀਂਹ ਪੱਥਰ ਸੂਫ਼ੀ ਫ਼ਕੀਰ ਸਾਈਂ ਮੀਆਂ ਮੀਰ ਜੀ ਦੁਆਰਾ; 4 ਦਰਵਾਜ਼ੇ।',
          'ਨਵੇਂ ਨਗਰ: ਤਰਨਤਾਰਨ (1590), ਕਰਤਾਰਪੁਰ ਦੁਆਬਾ (1594), ਸ੍ਰੀ ਹਰਗੋਬਿੰਦਪੁਰ (1595), ਛੇਹਰਟਾ ਸਾਹਿਬ।',
          'ਆਦਿ ਗ੍ਰੰਥ (1604): ਰਾਮਸਰ ਸਰੋਵਰ; ਲਿਖਾਰੀ: ਭਾਈ ਗੁਰਦਾਸ ਜੀ; ਪਹਿਲੇ ਗ੍ਰੰਥੀ: ਬਾਬਾ ਬੁੱਢਾ ਜੀ; 2,218 ਸ਼ਬਦ (ਸੁਖਮਨੀ ਸਾਹਿਬ - ਰਾਗੁ ਗਉੜੀ)।',
          'ਸ਼ਹਾਦਤ: 30 ਮਈ 1606 ਲਾਹੌਰ (ਗੁਰਦੁਆਰਾ ਡੇਰਾ ਸਾਹਿਬ) ਜਹਾਂਗੀਰ ਦੇ ਹੁਕਮ ਨਾਲ।',
        ],
        hi: [
          'जन्म: 15 अप्रैल 1563 (गोइंदवाल साहिब); माता-पिता: गुरु रामदास जी व बीबी भानी जी; उपाधि: "दोहता बाणी का बोहिथा" व "शहीदां दे सरताज"।',
          'श्री हरिमंदिर साहिब (1588/89): नींव पत्थर सूफी संत हज़रत मियां मीर द्वारा; 4 दरवाजे।',
          'नए नगर: तरनतारन (1590), करतारपुर दोआबा (1594), श्री हरगोबिंदपुर (1595), छेहरटा साहिब।',
          'आदि ग्रंथ (1604): रामसर सरोवर; लिपिक: भाई गुरदास जी; प्रथम ग्रंथी: बाबा बुड्ढा जी; 2,218 शब्द (सुखमनी साहिब - राग गौड़ी)।',
          'शहादत: 30 मई 1606 लाहौर (गुरुद्वारा डेरा साहिब) जहांगीर के आदेश से।',
        ],
      },
      examTraps: {
        en: [
          'Trap: Four rejected contemporary poets were Kahna, Chhajju, Shah Hussain, and Peelu.',
          'Trap: Sukhmani Sahib is in Raag Gauri (24 Ashtpadis), whereas Anand Sahib is in Raag Ramkali (40 Pauris).',
        ],
        pa: [
          'ਧੋਖਾ: ਆਦਿ ਗ੍ਰੰਥ ਵਿੱਚ ਕਾਹਨਾ, ਛੱਜੂ, ਸ਼ਾਹ ਹੁਸੈਨ ਅਤੇ ਪੀਲੂ ਦੀਆਂ ਰਚਨਾਵਾਂ ਸ਼ਾਮਲ ਨਹੀਂ ਕੀਤੀਆਂ ਗਈਆਂ।',
          'ਧੋਖਾ: ਸੁਖਮਨੀ ਸਾਹਿਬ ਰਾਗੁ ਗਉੜੀ (24 ਅਸਟਪਦੀਆਂ) ਵਿੱਚ ਹੈ।',
        ],
        hi: [
          'धोखा: आदि ग्रंथ में काहना, छज्जू, शाह हुसैन और पीलू की रचनाएं शामिल नहीं की गईं।',
          'धोखा: सुखमनी साहिब राग गौड़ी (24 अष्टपदी) में है।',
        ],
      },
    },
    summary: {
      en: 'Sri Guru Arjan Dev Ji (1563–1606), the 5th Sikh Guru, built Sri Harmandir Sahib (foundation laid by Sufi saint Mian Mir in 1588), founded Tarn Taran, Kartarpur (Doaba), and Sri Hargobindpur, institutionalized Dasvandh (1/10th offering), compiled the Adi Granth in 1604 with Bhai Gurdas Ji and Baba Buddha Ji (contributing 2,218 hymns including Sukhmani Sahib), and became the first Sikh martyr at Lahore on 30 May 1606 under Emperor Jahangir.',
      pa: 'ਪੰਜਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (1563–1606) ਨੇ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਉਸਾਰੀ ਕਰਵਾਈ, ਤਰਨਤਾਰਨ ਤੇ ਕਰਤਾਰਪੁਰ ਵਸਾਏ, ਦਸਵੰਧ ਪ੍ਰਥਾ ਚਲਾਈ, 1604 ਵਿੱਚ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦਾ ਸੰਕਲਨ ਕੀਤਾ (2,218 ਸ਼ਬਦ ਅਤੇ ਸੁਖਮਨੀ ਸਾਹਿਬ) ਅਤੇ 30 ਮਈ 1606 ਨੂੰ ਲਾਹੌਰ ਵਿਖੇ ਸ਼ਹਾਦਤ ਪ੍ਰਾਪਤ ਕੀਤੀ।',
      hi: 'पांचवें गुरु श्री गुरु अर्जुन देव जी (1563–1606) ने श्री हरिमंदिर साहिब का निर्माण करवाया, तरनतारन व करतारपुर बसाए, दसवंध प्रथा लागू की, 1604 में आदि ग्रंथ का संकलन किया (2,218 शब्द व सुखमनी साहिब) तथा 30 मई 1606 को लाहौर में प्रथम सिख शहादत दी।',
    },
    keyNotes: {
      en: [
        '📌 1588/1589 — Foundation of Sri Harmandir Sahib laid by Hazrat Mian Mir of Lahore.',
        '📌 1604 — Compilation of Adi Granth at Ramsar Sarovar (Scribe: Bhai Gurdas Ji; First Granthi: Baba Buddha Ji).',
        '📌 2,218 Hymns — Composed by Guru Arjan Dev Ji across 30 Raags (largest contributor to Guru Granth Sahib).',
        '📌 30 May 1606 — Martyred at Lahore under Emperor Jahangir; revered as "Shaheedan-de-Sartaj".',
      ],
      pa: [
        '📌 1588/1589 — ਸਾਈਂ ਮੀਆਂ ਮੀਰ ਜੀ ਦੁਆਰਾ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਨੀਂਹ।',
        '📌 1604 — ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦਾ ਸੰਕਲਨ (ਲਿਖਾਰੀ: ਭਾਈ ਗੁਰਦਾਸ ਜੀ; ਪਹਿਲੇ ਗ੍ਰੰਥੀ: ਬਾਬਾ ਬੁੱਢਾ ਜੀ)।',
        '📌 2,218 ਸ਼ਬਦ — ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੁਆਰਾ ਰਚਿਤ (ਸੁਖਮਨੀ ਸਾਹਿਬ - 24 ਅਸਟਪਦੀਆਂ)।',
        '📌 30 ਮਈ 1606 — ਲਾਹੌਰ ਵਿਖੇ ਜਹਾਂਗੀਰ ਦੇ ਹੁਕਮ ਨਾਲ ਸ਼ਹਾਦਤ (ਸ਼ਹੀਦਾਂ ਦੇ ਸਰਤਾਜ)।',
      ],
      hi: [
        '📌 1588/1589 — साईं मियां मीर द्वारा श्री हरिमंदिर साहिब की नींव।',
        '📌 1604 — आदि ग्रंथ का संकलन (लिपिक: भाई गुरदास जी; प्रथम ग्रंथी: बाबा बुड्ढा जी)।',
        '📌 2,218 शब्द — गुरु अर्जुन देव जी द्वारा रचित (सुखमनी साहिब - 24 अष्टपदी)।',
        '📌 30 मई 1606 — लाहौर में जहांगीर के आदेश से शहादत (शहीदां दे सरताज)।',
      ],
    },
    flashcards: [
      {
        id: 'fc-gad-1',
        q: {
          en: 'Who laid the foundation stone of Sri Harmandir Sahib (Golden Temple) in 1588/1589 at the invitation of Sri Guru Arjan Dev Ji?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੇ ਸੱਦੇ ਉੱਤੇ 1588/1589 ਵਿੱਚ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦਾ ਨੀਂਹ-ਪੱਥਰ ਕਿਸ ਨੇ ਰੱਖਿਆ?',
          hi: 'श्री गुरु अर्जुन देव जी के निमंत्रण पर 1588/1589 में श्री हरिमंदिर साहिब की नींव किसने रखी?',
        },
        a: {
          en: 'Hazrat Mian Mir (the revered Qadiri Sufi saint of Lahore).',
          pa: 'ਸਾਈਂ ਮੀਆਂ ਮੀਰ ਜੀ (ਲਾਹੌਰ ਦੇ ਪ੍ਰਸਿੱਧ ਸੂਫ਼ੀ ਫ਼ਕੀਰ)।',
          hi: 'हज़रत मियां मीर जी (लाहौर के प्रसिद्ध कादरी सूफी संत)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-gad-2',
        q: {
          en: 'Who acted as the scribe (amanuensis) and who became the first Granthi of the Adi Granth in 1604?',
          pa: '1604 ਵਿੱਚ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦੇ ਲਿਖਾਰੀ ਕੌਣ ਸਨ ਅਤੇ ਪਹਿਲੇ ਗ੍ਰੰਥੀ ਕੌਣ ਬਣੇ?',
          hi: '1604 में आदि ग्रंथ साहिब के लिपिक कौन थे और प्रथम ग्रंथी कौन बने?',
        },
        a: {
          en: 'Bhai Gurdas Ji was the scribe, and Baba Buddha Ji was appointed the First Granthi.',
          pa: 'ਲਿਖਾਰੀ ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਸਨ ਅਤੇ ਪਹਿਲੇ ਗ੍ਰੰਥੀ ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਬਣੇ।',
          hi: 'लिपिक भाई गुरदास जी थे और प्रथम ग्रंथी बाबा बुड्ढा जी बने।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-gad-3',
        q: {
          en: 'How many Ashtpadis (cantos) and in which Raag is Sukhmani Sahib composed by Sri Guru Arjan Dev Ji?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੁਆਰਾ ਰਚਿਤ ਸੁਖਮਨੀ ਸਾਹਿਬ ਕਿਹੜੇ ਰਾਗ ਵਿੱਚ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਕਿੰਨੀਆਂ ਅਸਟਪਦੀਆਂ ਹਨ?',
          hi: 'श्री गुरु अर्जुन देव जी द्वारा रचित सुखमनी साहिब किस राग में है और इसमें कितनी अष्टपदियां हैं?',
        },
        a: {
          en: 'Composed in Raag Gauri, containing 24 Ashtpadis.',
          pa: 'ਰਾਗੁ ਗਉੜੀ ਵਿੱਚ, ਕੁੱਲ 24 ਅਸਟਪਦੀਆਂ।',
          hi: 'राग गौड़ी में, कुल 24 अष्टपदियां।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-gad-4',
        q: {
          en: 'Which four contemporary poets of Lahore had their compositions rejected by Guru Arjan Dev Ji during the compilation of the Adi Granth?',
          pa: 'ਆਦਿ ਗ੍ਰੰਥ ਦੇ ਸੰਕਲਨ ਸਮੇਂ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਲਾਹੌਰ ਦੇ ਕਿਹੜੇ ਚਾਰ ਸਮਕਾਲੀ ਕਵੀਆਂ ਦੀਆਂ ਰਚਨਾਵਾਂ ਸ਼ਾਮਲ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਕਰ ਦਿੱਤਾ ਸੀ?',
          hi: 'आदि ग्रंथ संकलन के समय गुरु अर्जुन देव जी ने लाहौर के किन चार समकालीन कवियों की रचनाएं अस्वीकार कर दी थीं?',
        },
        a: {
          en: 'Kahna, Chhajju, Shah Hussain, and Peelu.',
          pa: 'ਕਾਹਨਾ, ਛੱਜੂ, ਸ਼ਾਹ ਹੁਸੈਨ ਅਤੇ ਪੀਲੂ।',
          hi: 'काहना, छज्जू, शाह हुसैन और पीलू।',
        },
        difficulty: 'hard',
      },
    ],
    videos: [
      {
        title: 'Sri Guru Arjan Dev Ji: Harmandir Sahib, Adi Granth & Martyrdom',
        channel: 'PSEB / NCERT History Archive',
        url: 'https://www.youtube.com/results?search_query=Sri+Guru+Arjan+Dev+Ji+History+of+Punjab',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'History and Culture of Punjab (Class 10)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Chapter 4: Sri Guru Arjan Dev Ji and His Martyrdom',
        type: 'state-board',
      },
    ],
    syllabusReference: {
      title: 'ERB Punjab Master Cadre SST & PSSSB History Syllabus',
      url: 'https://educationrecruitmentboard.com',
      body: 'Education Recruitment Board (ERB) & PSSSB',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 4: GURU HARGOBIND SAHIB JI TO GURU TEGH BAHADUR JI (1606 - 1675)
  // ==========================================================================
  'guru-hargobind-to-tegh-bahadur': {
    id: 'guru-hargobind-to-tegh-bahadur',
    topicId: 'guru-hargobind-to-tegh-bahadur',
    subjectId: 'social-science',
    category: 'history',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Guru Hargobind Sahib Ji to Guru Tegh Bahadur Ji (1606–1675): Miri-Piri, Akal Takht & Hind di Chadar',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਤੋਂ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ (1606–1675): ਮੀਰੀ-ਪੀਰੀ, ਅਕਾਲ ਤਖ਼ਤ ਅਤੇ ਹਿੰਦ ਦੀ ਚਾਦਰ',
      hi: 'श्री गुरु हरगोबिंद साहिब जी से गुरु तेग बहादुर जी (1606–1675): मीरी-पीरी, अकाल तख्त एवं हिंद दी चादर',
    },
    examRelevance: 'Punjab Master Cadre SST (3–4 Qs), PSSSB Clerk (2–3 Qs), ETT, Patwari & Police',
    estimatedTime: '45 mins',
    prerequisites: {
      en: [
        'Martyrdom of Sri Guru Arjan Dev Ji in 1606 and his parting injunction to young Hargobind to "sit fully armed on the throne and maintain an army."',
        'Mughal imperial policies under Jahangir, Shah Jahan, and Aurangzeb.',
      ],
      pa: [
        '1606 ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਸ਼ਹਾਦਤ ਅਤੇ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ ਨੂੰ ਸ਼ਸਤਰਧਾਰੀ ਹੋਣ ਦਾ ਅੰਤਿਮ ਸੰਦੇਸ਼।',
        'ਜਹਾਂਗੀਰ, ਸ਼ਾਹਜਹਾਂ ਅਤੇ ਔਰੰਗਜ਼ੇਬ ਦੀਆਂ ਧਾਰਮਿਕ ਅਤੇ ਰਾਜਨੀਤਿਕ ਨੀਤੀਆਂ।',
      ],
      hi: [
        '1606 में श्री गुरु अर्जुन देव जी की शहादत और बालक हरगोबिंद को शस्त्रधारी होने का अंतिम संदेश।',
        'जहांगीर, शाहजहां और औरंगज़ेब की धार्मिक व राजनीतिक नीतियां।',
      ],
    },
    learningObjectives: {
      en: [
        'Analyze Guru Hargobind Sahib Ji’s New Policy (Miri and Piri), construction of Sri Akal Takht Sahib (1606/1609) and Lohgarh Fort, Bandi Chhor Diwas (Gwalior Fort), and his 4 defensive battles against Mughal forces.',
        'Trace the peaceful consolidation under the 7th Guru, Sri Guru Har Rai Ji (Dara Shikoh episode, Ayurvedic dispensary at Kiratpur Sahib, Ram Rai’s disownment) and the 8th Guru, Sri Guru Har Krishan Ji (Bal Guru, service at Delhi Bangla Sahib).',
        'Examine the life, travels, Bani (115 hymns, including Raag Jaijawanti), foundation of Chak Nanaki (Anandpur Sahib), and the supreme martyrdom of the 9th Guru, Sri Guru Tegh Bahadur Ji ("Hind di Chadar") at Chandni Chowk, Delhi on 11 November 1675.',
      ],
      pa: [
        'ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੀ ਮੀਰੀ-ਪੀਰੀ ਦੀ ਨੀਤੀ, ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ (1606/1609), ਕਿਲ੍ਹਾ ਲੋਹਗੜ੍ਹ, ਬੰਦੀ ਛੋੜ ਦਿਵਸ (ਗਵਾਲੀਅਰ ਕਿਲ੍ਹਾ) ਅਤੇ ਮੁਗ਼ਲਾਂ ਵਿਰੁੱਧ 4 ਲੜਾਈਆਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
        'ਸੱਤਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ (ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਦਾ ਦਵਾਖਾਨਾ, ਦਾਰਾ ਸ਼ਿਕੋਹ ਪ੍ਰਸੰਗ) ਅਤੇ ਅੱਠਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਜੀ (ਬਾਲ ਗੁਰੂ, ਦਿੱਲੀ ਬੰਗਲਾ ਸਾਹਿਬ) ਦੇ ਜੀਵਨ ਨੂੰ ਜਾਣਨਾ।',
        'ਨੌਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ("ਹਿੰਦ ਦੀ ਚਾਦਰ") ਦੁਆਰਾ ਚੱਕ ਨਾਨਕੀ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ) ਦੀ ਸਥਾਪਨਾ, 115 ਸ਼ਬਦ/ਸਲੋਕ, ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਦੀ ਰੱਖਿਆ ਅਤੇ 11 ਨਵੰਬਰ 1675 ਨੂੰ ਚਾਂਦਨੀ ਚੌਕ ਦਿੱਲੀ ਵਿਖੇ ਹੋਈ ਸ਼ਹਾਦਤ ਦਾ ਅਧਿਐਨ ਕਰਨਾ।',
      ],
      hi: [
        'श्री गुरु हरगोबिंद साहिब जी की मीरी-पीरी नीति, श्री अकाल तख्त साहिब, किला लोहगढ़, बंदी छोड़ दिवस (ग्वालियर किला) और 4 रक्षात्मक युद्धों का विश्लेषण करना।',
        'सातवें गुरु श्री गुरु हरिराय जी और आठवें गुरु श्री गुरु हरिकृष्ण जी (बाल गुरु, बंगला साहिब दिल्ली) के योगदान को समझना।',
        'नौवें गुरु श्री गुरु तेग बहादुर जी ("हिंद दी चादर") द्वारा चक्क नानकी (आनंदपुर साहिब) की स्थापना, 115 शब्द/सलोक, कश्मीरी पंडितों की रक्षा और 11 नवंबर 1675 को चांदनी चौक दिल्ली में हुई शहादत का अध्ययन करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚔️ 1. Sixth Guru: Sri Guru Hargobind Sahib Ji (Guruship: 1606–1644)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              Born on <strong>19 June 1595</strong> at <strong>Wadali Guru</strong> (Amritsar) to <strong>Sri Guru Arjan Dev Ji</strong> and <strong>Mata Ganga Ji</strong>. Following his father's martyrdom in May 1606, 11-year-old Hargobind Sahib ascended the Guruship and inaugurated a martial transformation to defend righteousness against tyranny.
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Concept of Miri and Piri:</strong> At his coronation conducted by <strong>Baba Buddha Ji</strong>, instead of the traditional woolen cord (<em>Seli</em>), Guru Hargobind Sahib wore <strong>Two Swords</strong>:
                <br/>• <strong>Piri</strong> (Spiritual Authority) and <strong>Miri</strong> (Temporal/Political Sovereignty).
                <br/>• Adopted royal emblems: an aigrette (<em>Kalgi</em>) on his turban, a royal umbrella (<em>Chhatar</em>), a hawk (<em>Baaj</em>), and a standing cavalry bodyguard of 52 warriors.
              </li>
              <li><strong>Sri Akal Takht Sahib (1606 / Completed 1609) & Lohgarh Fort:</strong> Built the <strong>Akal Takht (Akal Bunga — "Throne of the Timeless One")</strong> directly facing Sri Harmandir Sahib with a 12-foot high platform (higher than the Mughal imperial throne in Agra/Delhi) to adjudicate temporal and political affairs, where <em>Dhadi</em> bards (<strong>Abdullah and Natha Mal</strong>) sang heroic ballads (<em>Vars</em>). Also fortified Amritsar and built <strong>Lohgarh Fort</strong>.</li>
              <li><strong>Imprisonment at Gwalior Fort & Bandi Chhor Diwas:</strong> Alarmed by the Guru’s royal style and unpaid fine, Emperor <strong>Jahangir</strong> imprisoned Guru Hargobind Sahib in <strong>Gwalior Fort</strong>. Upon persuasion by Sufi saint Mian Mir and Wazir Khan, Jahangir ordered his release; however, the Guru refused to leave unless <strong>52 imprisoned Hindu Rajput Princes</strong> were also freed. Jahangir decreed that whoever held onto the Guru's cloak could go free; the Guru wore a specially stitched <strong>cloak with 52 tassels (Kaliyan والا Chola)</strong>, freeing all 52 kings and earning the title <strong>"Bandi Chhor"</strong> (Deliverer from Bondage; celebrated on Diwali as <em>Bandi Chhor Diwas</em>).</li>
              <li><strong>Four Defensive Battles Against Shah Jahan’s Forces:</strong>
                <br/>1. <strong>Battle of Rohilla (1621):</strong> Defeated Governor Abdul Khan on the banks of River Beas (over Sri Hargobindpur).
                <br/>2. <strong>Battle of Amritsar (1634):</strong> Fought over the capture of a royal hawk; Mughal commander <strong>Mukhlis Khan</strong> was killed.
                <br/>3. <strong>Battle of Lahira / Mehraj (December 1634):</strong> Fought in Malwa (Bathinda) over two horses (<em>Dilbagh and Gulbagh</em> seized by Mughals and recovered by <strong>Bhai Bidhi Chand</strong>); Mughal generals Qamar Beg and Lalla Beg were defeated.
                <br/>4. <strong>Battle of Kartarpur (April 1635):</strong> Defeated renegade Painda Khan and Kale Khan.
              </li>
              <li><strong>Shift to Kiratpur Sahib (1635):</strong> Founded by his eldest son <strong>Baba Gurditta Ji</strong> in the Shivalik foothills (Ropar district), Kiratpur Sahib became the Guru's headquarters until his passing in 1644.</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🌿 2. Seventh & Eighth Gurus: Sri Guru Har Rai Ji & Sri Guru Har Krishan Ji (1644–1664)</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>7th Guru — Sri Guru Har Rai Ji (Guruship: 1644–1661):</strong>
                <br/>• Born on 16 January 1630 at <strong>Kiratpur Sahib</strong> to <strong>Baba Gurditta Ji</strong> (son of Guru Hargobind Ji) and <strong>Mata Nihal Kaur (Ananti) Ji</strong>.
                <br/>• Known as a compassionate man of peace who maintained a cavalry of <strong>2,200 horsemen</strong> but avoided armed conflict. Established a famous <strong>Ayurvedic herbal dispensary (Dawa Khana) and wildlife sanctuary</strong> at Kiratpur Sahib, supplying rare medicinal herbs that cured Shah Jahan's eldest son <strong>Prince Dara Shikoh</strong>.
                <br/>• Established missionary <strong>Bakhshishes</strong> (preaching centres like Suthre Shah, Sangatia, Bhagwan Gir).
                <br/>• <em>Disowning of Ram Rai:</em> When summoned by Emperor <strong>Aurangzeb</strong> to Delhi, the Guru sent his elder son <strong>Ram Rai</strong>. To please Aurangzeb, Ram Rai altered a word in Guru Nanak’s hymn from <em>"Mitti Musalman ki"</em> to <em>"Mitti Beiman ki."</em> Guru Har Rai Ji declared that no mortal has the right to alter Gurbani, disowned Ram Rai (who settled at <em>Dehradun</em>), and appointed his 5-year-old younger son <strong>Har Krishan Ji</strong> as the 8th Guru.
              </li>
              <li><strong>8th Guru — Sri Guru Har Krishan Ji (Guruship: 1661–1664):</strong>
                <br/>• Born on 7 July 1656 at Kiratpur Sahib to Guru Har Rai Ji and <strong>Mata Krishan Kaur (Sulakhni) Ji</strong>. Became Guru at age <strong>5</strong>, earning the title <strong>"Bal Guru" (Child Prophet)</strong>.
                <br/>• Summoned to <strong>Delhi</strong> by Aurangzeb (instigated by Ram Rai), he stayed at the bungalow of <strong>Raja Jai Singh of Amber</strong> (now <strong>Gurdwara Bangla Sahib</strong>). There he selflessly tended to victims of a devastating <strong>smallpox and cholera epidemic</strong>, contracted smallpox himself, and before passing away on <strong>30 March 1664</strong> (at age 8, at Gurdwara Bala Sahib), uttered the historic words <strong>"Baba Bakale"</strong> — indicating that the next Guru (his grand-uncle Tegh Bahadur Ji) resided at the village of <strong>Bakala</strong>.
              </li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🛡️ 3. Ninth Guru: Sri Guru Tegh Bahadur Ji — "Hind di Chadar" (Guruship: 1664–1675)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              Born as <strong>Tyag Mal</strong> on <strong>1 April 1621</strong> at <strong>Guru Ke Mahal, Amritsar</strong> to <strong>Sri Guru Hargobind Sahib Ji</strong> (youngest of 5 sons) and <strong>Mata Nanaki Ji</strong>. Married to <strong>Mata Gujri Ji</strong> (daughter of Lal Chand of Kartarpur) in 1632. For showing extraordinary valor with the sword in the <strong>Battle of Kartarpur (1635)</strong> at age 14, his father renamed him <strong>Tegh Bahadur ("Hero of the Sword")</strong>.
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>20 Years of Meditation & Discovery by Makhan Shah Lubana (1664):</strong> Meditated for ~20 years in an underground cellar (<em>Bhora Sahib</em>) at <strong>Bakala</strong> (Amritsar district). After Guru Har Krishan Ji uttered "Baba Bakale," 22 impostor Sodhis (led by Dhir Mal) set up rival thrones at Bakala. Rich merchant <strong>Makhan Shah Lubana</strong> (who had vowed 500 gold mohars when his ship was sinking) tested each claimant with 2 mohars; only Guru Tegh Bahadur Ji asked for the remaining promised 498 mohars, leading Makhan Shah to proclaim from the rooftop: <strong>"Guru Ladho Re! Guru Ladho Re!"</strong> ("I have found the true Guru!").</li>
              <li><strong>Foundation of Chak Nanaki (Anandpur Sahib, 1665) & Eastern Travels:</strong> Purchased land at Makhowal from the Rani of Bilaspur (Kahlur) in <strong>1665 CE</strong> and founded <strong>Chak Nanaki</strong> (named after his mother Mata Nanaki Ji, later expanded as <strong>Anandpur Sahib</strong>). Undertook extensive missionary tours across Malwa, Bangar, Kurukshetra, Mathura, Agra, Prayagraj, Banaras, <strong>Patna</strong> (where son <strong>Gobind Rai</strong> was born on 22 December 1666), Bengal, and <strong>Dhubri (Assam)</strong> (where he brokered peace between Mughal general Raja Ram Singh and the Ahom King Chakradhwaj Singha).</li>
              <li><strong>Bani in Sri Guru Granth Sahib Ji:</strong> Composed <strong>115 hymns (59 Shabads and 56 Saloks) across 15 Raags</strong>, introducing the 31st Raag, <strong>Raag Jaijawanti</strong>. His Bani is renowned for detachment (<em>Vairag</em>) and fearlessness: <em>"Bhai kahu ko det neh, neh bhai manat aan."</em></li>
              <li><strong>Defense of Kashmiri Pandits & Supreme Martyrdom (11 November 1675):</strong>
                <br/>• Under Emperor <strong>Aurangzeb’s</strong> zealot policy of forced conversions executed by Kashmir Governor <strong>Iftikhar Khan</strong>, a delegation of 500 <strong>Kashmiri Pandits</strong> led by <strong>Pandit Kirpa Ram Dutt of Mattan</strong> visited Chak Nanaki (Anandpur Sahib) on 25 May 1675 to seek Guru Tegh Bahadur Ji's protection.
                <br/>• Nine-year-old <strong>Gobind Rai</strong> remarked that no one could be worthier than Guru Ji himself to make the supreme sacrifice for <em>Tilak and Janju</em> (freedom of conscience and religion).
                <br/>• Arrested at Malikpur Rangharan (near Ropar) / Agra and brought in an iron cage to <strong>Kotwali, Chandni Chowk, Delhi</strong>. When the Guru refused to perform miracles or embrace Islam, three devoted disciples were martyred before his eyes:
                  <br/>&nbsp;&nbsp;1. <strong>Bhai Mati Das Ji:</strong> Sawn alive into two halves.
                  <br/>&nbsp;&nbsp;2. <strong>Bhai Dayala Ji:</strong> Boiled alive in a cauldron of water.
                  <br/>&nbsp;&nbsp;3. <strong>Bhai Sati Das Ji:</strong> Wrapped in cotton wool and burnt alive.
                <br/>• On <strong>11 November 1675</strong>, Guru Tegh Bahadur Ji was publicly beheaded by executioner <strong>Jalal-ud-din of Samana</strong> at <strong>Chandni Chowk, Delhi</strong> (now <strong>Gurdwara Sis Ganj Sahib</strong>).
                <br/>• <strong>Lakhi Shah Vanjara</strong> carried the Guru’s sacred body in his cotton cart and cremated it by setting his own house on fire at Raisina village (now <strong>Gurdwara Rakab Ganj Sahib</strong>, near Parliament House).
                <br/>• <strong>Bhai Jaita Ji (Baba Jiwan Singh)</strong> heroically carried the Guru’s severed head (<em>Sis</em>) from Delhi to Chak Nanaki (Anandpur Sahib), where Guru Gobind Singh Ji embraced him, declaring: <strong>"Rangrete Guru Ke Bete"</strong> ("The Rangretas are the Guru's own sons").
              </li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚔️ 1. ਛੇਵੇਂ ਗੁਰੂ: ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ (ਗੁਰਗੱਦੀ ਕਾਲ: 1606–1644)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਜਨਮ <strong>19 ਜੂਨ 1595</strong> ਨੂੰ <strong>ਗੁਰੂ ਕੀ ਵਡਾਲੀ</strong> (ਅੰਮ੍ਰਿਤਸਰ) ਵਿਖੇ ਪਿਤਾ <strong>ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ</strong> ਅਤੇ ਮਾਤਾ <strong>ਗੰਗਾ ਜੀ</strong> ਦੇ ਘਰ ਹੋਇਆ। ਪਿਤਾ ਗੁਰੂ ਜੀ ਦੀ ਸ਼ਹਾਦਤ ਮਗਰੋਂ 11 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰਗੱਦੀ ਸੰਭਾਲੀ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਮੀਰੀ ਅਤੇ ਪੀਰੀ ਦੀ ਨੀਤੀ:</strong> ਗੁਰਗੱਦੀ ਸਮੇਂ ਰਵਾਇਤੀ 'ਸੇਲੀ-ਟੋਪੀ' ਦੀ ਥਾਂ ਦੋ ਤਲਵਾਰਾਂ ਧਾਰਨ ਕੀਤੀਆਂ — <strong>'ਪੀਰੀ'</strong> (ਅਧਿਆਤਮਿਕ ਸ਼ਕਤੀ) ਅਤੇ <strong>'ਮੀਰੀ'</strong> (ਰਾਜਨੀਤਿਕ/ਦੁਨਿਆਵੀ ਸ਼ਕਤੀ)। ਦਸਤਾਰ ਉੱਤੇ ਕਲਗੀ ਸਜਾਈ ਅਤੇ ਸਿੱਖਾਂ ਨੂੰ ਸ਼ਸਤਰ ਅਤੇ ਘੋੜੇ ਭੇਟ ਕਰਨ ਦਾ ਹੁਕਮ ਦਿੱਤਾ।</li>
              <li><strong>ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ (1606/1609) ਅਤੇ ਕਿਲ੍ਹਾ ਲੋਹਗੜ੍ਹ:</strong> ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੇ ਸਾਹਮਣੇ 12 ਫੁੱਟ ਉੱਚੇ ਥੜ੍ਹੇ ਵਾਲਾ <strong>ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ (ਅਕਾਲ ਬੁੰਗਾ)</strong> ਉਸਾਰਿਆ, ਜਿੱਥੇ ਢਾਡੀ <strong>ਅਬਦੁੱਲਾ ਅਤੇ ਨੱਥਾ ਮੱਲ</strong> ਬੀਰ-ਰਸੀ ਵਾਰਾਂ ਗਾਉਂਦੇ ਸਨ। ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੁਰੱਖਿਆ ਲਈ <strong>ਕਿਲ੍ਹਾ ਲੋਹਗੜ੍ਹ</strong> ਬਣਵਾਇਆ।</li>
              <li><strong>ਬੰਦੀ ਛੋੜ ਦਿਵਸ (ਗਵਾਲੀਅਰ ਕਿਲ੍ਹਾ):</strong> ਜਹਾਂਗੀਰ ਨੇ ਗੁਰੂ ਜੀ ਨੂੰ <strong>ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ</strong> ਵਿੱਚ ਨਜ਼ਰਬੰਦ ਕੀਤਾ। ਰਿਹਾਈ ਸਮੇਂ ਗੁਰੂ ਜੀ ਨੇ <strong>52 ਕਲੀਆਂ ਵਾਲਾ ਚੋਲਾ</strong> ਪਹਿਨ ਕੇ ਕਿਲ੍ਹੇ ਵਿੱਚ ਕੈਦ <strong>52 ਪਹਾੜੀ ਰਾਜਿਆਂ</strong> ਨੂੰ ਵੀ ਆਜ਼ਾਦ ਕਰਵਾਇਆ, ਜਿਸ ਕਾਰਨ ਆਪ ਜੀ ਨੂੰ <strong>'ਬੰਦੀ ਛੋੜ'</strong> ਕਿਹਾ ਜਾਂਦਾ ਹੈ।</li>
              <li><strong>ਮੁਗ਼ਲਾਂ ਵਿਰੁੱਧ ਚਾਰ ਲੜਾਈਆਂ:</strong> (1) <strong>ਰੋਹਿਲਾ ਦੀ ਲੜਾਈ (1621)</strong>, (2) <strong>ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਲੜਾਈ (1634)</strong> (ਬਾਜ਼ ਦੇ ਕਾਰਨ, ਮੁਖ਼ਲਿਸ ਖ਼ਾਨ ਮਾਰਿਆ ਗਿਆ), (3) <strong>ਲਹਿਰਾ/ਮਹਿਰਾਜ ਦੀ ਲੜਾਈ (1634)</strong> (ਦਿਲਬਾਗ਼ ਤੇ ਗੁਲਬਾਗ਼ ਘੋੜਿਆਂ ਕਾਰਨ, ਭਾਈ ਬਿਧੀ ਚੰਦ ਦੀ ਬਹਾਦਰੀ), (4) <strong>ਕਰਤਾਰਪੁਰ ਦੀ ਲੜਾਈ (1635)</strong> (ਪੈਂਦੇ ਖ਼ਾਨ ਦੀ ਹਾਰ)। 1635 ਵਿੱਚ <strong>ਕੀਰਤਪੁਰ ਸਾਹਿਬ</strong> ਨੂੰ ਆਪਣਾ ਕੇਂਦਰ ਬਣਾਇਆ।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🌿 2. ਸੱਤਵੇਂ ਅਤੇ ਅੱਠਵੇਂ ਗੁਰੂ: ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਜੀ (1644–1664)</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>ਸੱਤਵੇਂ ਗੁਰੂ — ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ (1644–1661):</strong> ਬਾਬਾ ਗੁਰਦਿੱਤਾ ਜੀ ਅਤੇ ਮਾਤਾ ਨਿਹਾਲ ਕੌਰ ਜੀ ਦੇ ਸਪੁੱਤਰ। 2,200 ਘੋੜਸਵਾਰ ਰੱਖੇ ਪਰ ਸ਼ਾਂਤੀਪੂਰਵਕ ਪ੍ਰਚਾਰ ਕੀਤਾ। ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਪ੍ਰਸਿੱਧ <strong>ਆਯੁਰਵੈਦਿਕ ਦਵਾਖਾਨਾ</strong> ਅਤੇ ਬਾਗ਼ ਬਣਾਇਆ (ਜਿੱਥੋਂ ਦਾਰਾ ਸ਼ਿਕੋਹ ਦੇ ਇਲਾਜ ਲਈ ਦਵਾਈ ਭੇਜੀ)। ਵੱਡੇ ਪੁੱਤਰ <strong>ਰਾਮ ਰਾਇ</strong> ਵੱਲੋਂ ਔਰੰਗਜ਼ੇਬ ਦੇ ਦਰਬਾਰ ਵਿੱਚ ਗੁਰਬਾਣੀ ਦੀ ਤੁਕ <em>"ਮਿਟੀ ਮੁਸਲਮਾਨ ਕੀ"</em> ਨੂੰ ਬਦਲ ਕੇ <em>"ਮਿਟੀ ਬੇਈਮਾਨ ਕੀ"</em> ਕਹਿਣ ਕਾਰਨ ਉਸ ਨੂੰ ਤਿਆਗ ਦਿੱਤਾ।</li>
              <li><strong>ਅੱਠਵੇਂ ਗੁਰੂ — ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਜੀ (1661–1664):</strong> 5 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰਗੱਦੀ ਸੰਭਾਲੀ (<strong>'ਬਾਲ ਗੁਰੂ'</strong>)। ਦਿੱਲੀ ਵਿਖੇ ਰਾਜਾ ਜੈ ਸਿੰਘ ਦੇ ਬੰਗਲੇ (<strong>ਗੁਰਦੁਆਰਾ ਬੰਗਲਾ ਸਾਹਿਬ</strong>) ਵਿੱਚ ਠਹਿਰੇ ਅਤੇ ਚੇਚਕ ਤੇ ਹੈਜ਼ੇ ਦੇ ਮਰੀਜ਼ਾਂ ਦੀ ਸੇਵਾ ਕੀਤੀ। 8 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਜੋਤੀ-ਜੋਤਿ ਸਮਾਉਣ ਸਮੇਂ <strong>"ਬਾਬਾ ਬਕਾਲੇ"</strong> ਕਹਿ ਕੇ ਅਗਲੇ ਗੁਰੂ ਵੱਲ ਸੰਕੇਤ ਕੀਤਾ।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🛡️ 3. ਨੌਵੇਂ ਗੁਰੂ: ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ — 'ਹਿੰਦ ਦੀ ਚਾਦਰ' (1664–1675)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਜਨਮ <strong>1 ਅਪ੍ਰੈਲ 1621</strong> ਨੂੰ <strong>ਗੁਰੂ ਕੇ ਮਹਿਲ, ਅੰਮ੍ਰਿਤਸਰ</strong> ਵਿਖੇ ਪਿਤਾ <strong>ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ</strong> ਅਤੇ ਮਾਤਾ <strong>ਨਾਨਕੀ ਜੀ</strong> ਦੇ ਘਰ ਹੋਇਆ। ਬਚਪਨ ਦਾ ਨਾਮ <strong>ਤਿਆਗ ਮੱਲ</strong> ਸੀ; 1635 ਦੀ ਕਰਤਾਰਪੁਰ ਦੀ ਲੜਾਈ ਵਿੱਚ ਤਲਵਾਰ ਦੇ ਜੌਹਰ ਦਿਖਾਉਣ ਕਾਰਨ ਪਿਤਾ ਜੀ ਨੇ <strong>'ਤੇਗ ਬਹਾਦਰ'</strong> ਨਾਮ ਦਿੱਤਾ। ਪਤਨੀ: <strong>ਮਾਤਾ ਗੁਜਰੀ ਜੀ</strong>।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>"ਗੁਰੂ ਲਾਧੋ ਰੇ" (1664) ਅਤੇ ਚੱਕ ਨਾਨਕੀ (1665):</strong> ਬਕਾਲਾ ਵਿਖੇ 20 ਸਾਲ ਭੋਰੇ ਵਿੱਚ ਤਪੱਸਿਆ ਕੀਤੀ। ਵਪਾਰੀ <strong>ਮੱਖਣ ਸ਼ਾਹ ਲੁਬਾਣਾ</strong> ਨੇ 22 ਨਕਲੀ ਗੁਰੂਆਂ ਵਿੱਚੋਂ ਸੱਚੇ ਗੁਰੂ ਦੀ ਪਛਾਣ ਕਰਕੇ <em>"ਗੁਰੂ ਲਾਧੋ ਰੇ"</em> ਦਾ ਹੋਕਾ ਦਿੱਤਾ। <strong>1665 ਵਿੱਚ</strong> ਬਿਲਾਸਪੁਰ ਦੇ ਰਾਜੇ ਤੋਂ ਮਾਖੋਵਾਲ ਦੀ ਜ਼ਮੀਨ ਖਰੀਦ ਕੇ ਮਾਤਾ ਨਾਨਕੀ ਜੀ ਦੇ ਨਾਮ 'ਤੇ <strong>ਚੱਕ ਨਾਨਕੀ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ)</strong> ਵਸਾਇਆ।</li>
              <li><strong>ਬਾਣੀ ਰਚਨਾ:</strong> ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ <strong>15 ਰਾਗਾਂ ਵਿੱਚ 115 ਸ਼ਬਦ/ਸਲੋਕ</strong> (59 ਸ਼ਬਦ ਅਤੇ 57/56 ਸਲੋਕ) ਦਰਜ ਹਨ, ਅਤੇ 31ਵਾਂ ਰਾਗ <strong>'ਰਾਗੁ ਜੈਜਾਵੰਤੀ'</strong> ਵਰਤਿਆ।</li>
              <li><strong>ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਦੀ ਪੁਕਾਰ ਅਤੇ ਸ਼ਹਾਦਤ (11 ਨਵੰਬਰ 1675):</strong> ਔਰੰਗਜ਼ੇਬ ਅਤੇ ਕਸ਼ਮੀਰ ਦੇ ਸੂਬੇਦਾਰ ਇਫ਼ਤਿਖਾਰ ਖ਼ਾਨ ਦੇ ਜ਼ੁਲਮਾਂ ਤੋਂ ਤੰਗ ਆ ਕੇ <strong>ਪੰਡਿਤ ਕਿਰਪਾ ਰਾਮ ਦੱਤ (ਮੱਟਨ)</strong> ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਕਸ਼ਮੀਰੀ ਪੰਡਿਤ ਚੱਕ ਨਾਨਕੀ ਆਏ। ਧਰਮ ਦੀ ਆਜ਼ਾਦੀ ਖਾਤਰ ਗੁਰੂ ਜੀ ਨੇ ਦਿੱਲੀ ਜਾ ਕੇ ਕੁਰਬਾਨੀ ਦੇਣ ਦਾ ਫ਼ੈਸਲਾ ਕੀਤਾ।
                <br/>• <strong>ਚਾਂਦਨੀ ਚੌਕ, ਦਿੱਲੀ (ਗੁਰਦੁਆਰਾ ਸੀਸ ਗੰਜ ਸਾਹਿਬ)</strong> ਵਿਖੇ ਗੁਰੂ ਜੀ ਦੇ ਸਾਹਮਣੇ <strong>ਭਾਈ ਮਤੀ ਦਾਸ ਜੀ</strong> ਨੂੰ ਆਰੇ ਨਾਲ ਚੀਰਿਆ ਗਿਆ, <strong>ਭਾਈ ਦਿਆਲਾ ਜੀ</strong> ਨੂੰ ਉਬਲਦੀ ਦੇਗ ਵਿੱਚ ਉਬਾਲਿਆ ਗਿਆ ਅਤੇ <strong>ਭਾਈ ਸਤੀ ਦਾਸ ਜੀ</strong> ਨੂੰ ਰੂੰ ਵਿੱਚ ਲਪੇਟ ਕੇ ਸਾੜਿਆ ਗਿਆ।
                <br/>• <strong>11 ਨਵੰਬਰ 1675</strong> ਨੂੰ ਜੱਲਾਦ <strong>ਜਲਾਲ-ਉਦ-ਦੀਨ (ਸਮਾਣਾ)</strong> ਨੇ ਗੁਰੂ ਜੀ ਨੂੰ ਸ਼ਹੀਦ ਕੀਤਾ।
                <br/>• <strong>ਭਾਈ ਜੈਤਾ ਜੀ (ਬਾਬਾ ਜੀਵਨ ਸਿੰਘ)</strong> ਗੁਰੂ ਜੀ ਦਾ ਪਵਿੱਤਰ ਸੀਸ ਲੈ ਕੇ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਪਹੁੰਚੇ, ਜਿਨ੍ਹਾਂ ਨੂੰ ਬਾਲ ਗੋਬਿੰਦ ਰਾਇ ਜੀ ਨੇ ਛਾਤੀ ਨਾਲ ਲਗਾ ਕੇ <strong>"ਰੰਗਰੇਟੇ ਗੁਰੂ ਕੇ ਬੇਟੇ"</strong> ਕਿਹਾ।
                <br/>• <strong>ਲੱਖੀ ਸ਼ਾਹ ਵਣਜਾਰਾ</strong> ਨੇ ਗੁਰੂ ਜੀ ਦੇ ਧੜ ਦਾ ਸਸਕਾਰ ਆਪਣੇ ਘਰ ਨੂੰ ਅੱਗ ਲਗਾ ਕੇ ਕੀਤਾ (ਜਿੱਥੇ ਅੱਜ <strong>ਗੁਰਦੁਆਰਾ ਰਕਾਬ ਗੰਜ ਸਾਹਿਬ</strong> ਹੈ)।
              </li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">⚔️ 1. छठे गुरु: श्री गुरु हरगोबिंद साहिब जी (1606–1644)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>जन्म एवं मीरी-पीरी:</strong> जन्म 19 जून 1595 को <strong>गुरु की वडाली</strong> (अमृतसर) में। पिता की शहादत के बाद 1606 में <strong>'मीरी'</strong> (राजनीतिक शक्ति) और <strong>'पीरी'</strong> (आध्यात्मिक शक्ति) की दो तलवारें धारण कीं।</li>
              <li><strong>श्री अकाल तख्त साहिब (1606/1609) एवं लोहगढ़ किला:</strong> श्री हरिमंदिर साहिब के सामने 12 फुट ऊंचे मंच वाला <strong>श्री अकाल तख्त साहिब (अकाल बुंगा)</strong> बनवाया, जहां ढाडी <strong>अब्दुल्ला और नत्था मल्ल</strong> वीर रस की वारें गाते थे। अमृतसर की रक्षा हेतु <strong>लोहगढ़ किला</strong> बनवाया।</li>
              <li><strong>बंदी छोड़ दिवस (ग्वालियर किला):</strong> जहांगीर द्वारा ग्वालियर किले में कैद किए जाने पर रिहाई के समय <strong>52 कलियों वाला चोला</strong> पहनकर <strong>52 हिंदू राजपूत राजाओं</strong> को मुक्त करवाया (<strong>'बंदी छोड़'</strong>)।</li>
              <li><strong>चार युद्ध:</strong> रोहिला (1621), अमृतसर (1634, मुखलिस खान मारा गया), लहिरा/महिराज (1634, दिलबाग व गुलबाग घोड़े), करतारपुर (1635, पैंदे खान पराजित)। अंतिम वर्ष <strong>कीरतपुर साहिब</strong> में बिताए।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🌿 2. सातवें व आठवें गुरु: श्री गुरु हरिराय जी एवं श्री गुरु हरिकृष्ण जी (1644–1664)</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>7वें गुरु — श्री गुरु हरिराय जी (1644–1661):</strong> कीरतपुर साहिब में प्रसिद्ध आयुर्वेदिक दवाखाना स्थापित किया (दारा शिकोह का उपचार)। बड़े पुत्र <strong>राम राय</strong> द्वारा औरंगज़ेब को खुश करने के लिए गुरबाणी की पंक्ति <em>"मिट्टी मुसलमान की"</em> को <em>"मिट्टी बेईमान की"</em> कहने पर उसे त्याग दिया।</li>
              <li><strong>8वें गुरु — श्री गुरु हरिकृष्ण जी (1661–1664):</strong> 5 वर्ष की आयु में गुरु बने (<strong>'बाल गुरु'</strong>)। दिल्ली में राजा जयसिंह के बंगले (<strong>गुरुद्वारा बंगला साहिब</strong>) में चेचक पीड़ितों की सेवा करते हुए 8 वर्ष की आयु में <strong>"बाबा बकाले"</strong> कहकर ज्योति-जोत समाए।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🛡️ 3. नौवें गुरु: श्री गुरु तेग बहादुर जी — 'हिंद दी चादर' (1664–1675)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>जन्म, "गुरु लाधो रे" एवं चक्क नानकी (1665):</strong> जन्म 1 अप्रैल 1621 को अमृतसर में (मूल नाम <strong>त्याग मल्ल</strong>; करतारपुर युद्ध 1635 में वीरता पर 'तेग बहादुर' नाम मिला)। बकाला में 20 वर्ष तपस्या की, जहां <strong>मक्खन शाह लुबाना</strong> ने उन्हें पहचान कर <em>"गुरु लाधो रे"</em> पुकारा। <strong>1665 में</strong> बिलासपुर राज्य से भूमि खरीदकर <strong>चक्क नानकी (आनंदपुर साहिब)</strong> बसाया।</li>
              <li><strong>बाणी:</strong> गुरु ग्रंथ साहिब में <strong>15 रागों में 115 शब्द/सलोक</strong> दर्ज हैं तथा 31वां राग <strong>'जैजावंती'</strong> प्रयुक्त किया।</li>
              <li><strong>कश्मीरी पंडित एवं शहादत (11 नवंबर 1675):</strong> <strong>पंडित किरपा राम दत्त (मट्टन)</strong> के नेतृत्व में आए कश्मीरी पंडितों की धार्मिक स्वतंत्रता की रक्षा हेतु दिल्ली गए। चांदनी चौक (गुरुद्वारा सीस गंज साहिब) में उनके सामने <strong>भाई मती दास</strong> (आरे से चीरे गए), <strong>भाई दयाला जी</strong> (देग में उबाले गए) और <strong>भाई सती दास</strong> (रुई में लपेटकर जलाए गए) शहीद हुए। <strong>11 नवंबर 1675</strong> को जल्लाद जलालुद्दीन (समाना) द्वारा गुरु जी ने शहादत दी। <strong>भाई जैता जी (बाबा जीवन सिंह)</strong> पवित्र सीस आनंदपुर साहिब लाए (<em>"रंगरेटे गुरु के बेटे"</em>) और <strong>लक्खी शाह वणजारा</strong> ने अपने घर को अग्नि देकर पार्थिव देह का संस्कार किया (<strong>गुरुद्वारा रकाब गंज साहिब</strong>)।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Matching Martyrs & Disciples of Chandni Chowk (1675)',
          pa: 'ਚਾਂਦਨੀ ਚੌਕ ਦਿੱਲੀ (1675) ਦੇ ਸ਼ਹੀਦਾਂ ਅਤੇ ਸੇਵਕਾਂ ਦਾ ਮਿਲਾਨ',
          hi: 'चांदनी चौक दिल्ली (1675) के शहीदों एवं सेवकों का मिलान',
        },
        problem: {
          en: 'Match the historical figures of the 1675 Delhi martyrdom with their exact role/sacrifice: (1) Bhai Mati Das, (2) Bhai Dayala, (3) Bhai Sati Das, (4) Bhai Jaita, (5) Lakhi Shah Vanjara.',
          pa: '1675 ਦੀ ਦਿੱਲੀ ਸ਼ਹਾਦਤ ਨਾਲ ਸਬੰਧਤ ਸ਼ਖ਼ਸੀਅਤਾਂ ਦਾ ਉਹਨਾਂ ਦੀ ਕੁਰਬਾਨੀ/ਸੇਵਾ ਨਾਲ ਮਿਲਾਨ ਕਰੋ: (1) ਭਾਈ ਮਤੀ ਦਾਸ, (2) ਭਾਈ ਦਿਆਲਾ, (3) ਭਾਈ ਸਤੀ ਦਾਸ, (4) ਭਾਈ ਜੈਤਾ, (5) ਲੱਖੀ ਸ਼ਾਹ ਵਣਜਾਰਾ।',
          hi: '1675 की दिल्ली शहादत से जुड़े व्यक्तित्वों का उनके बलिदान/सेवा से मिलान कीजिए: (1) भाई मती दास, (2) भाई दयाला, (3) भाई सती दास, (4) भाई जैता, (5) लक्खी शाह वणजारा।',
        },
        steps: {
          en: [
            'Step 1: Bhai Mati Das Ji was sawn alive in two with an iron saw.',
            'Step 2: Bhai Dayala Ji was boiled alive in a cauldron of water.',
            'Step 3: Bhai Sati Das Ji was wrapped in cotton wool and burnt alive.',
            'Step 4: Bhai Jaita Ji (Baba Jiwan Singh) carried the Guru’s severed Sis to Anandpur Sahib.',
            'Step 5: Lakhi Shah Vanjara cremated the Guru’s body by burning his own house at Rakab Ganj.',
          ],
          pa: [
            'ਕਦਮ 1: ਭਾਈ ਮਤੀ ਦਾਸ ਜੀ ਨੂੰ ਆਰੇ ਨਾਲ ਚੀਰਿਆ ਗਿਆ।',
            'ਕਦਮ 2: ਭਾਈ ਦਿਆਲਾ ਜੀ ਨੂੰ ਉਬਲਦੀ ਦੇਗ ਵਿੱਚ ਉਬਾਲਿਆ ਗਿਆ।',
            'ਕਦਮ 3: ਭਾਈ ਸਤੀ ਦਾਸ ਜੀ ਨੂੰ ਰੂੰ ਵਿੱਚ ਲਪੇਟ ਕੇ ਸਾੜਿਆ ਗਿਆ।',
            'ਕਦਮ 4: ਭਾਈ ਜੈਤਾ ਜੀ ਸੀਸ ਲੈ ਕੇ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਪਹੁੰਚੇ ("ਰੰਗਰੇਟੇ ਗੁਰੂ ਕੇ ਬੇਟੇ")।',
            'ਕਦਮ 5: ਲੱਖੀ ਸ਼ਾਹ ਵਣਜਾਰਾ ਨੇ ਧੜ ਦਾ ਸਸਕਾਰ ਆਪਣੇ ਘਰ ਨੂੰ ਅੱਗ ਲਗਾ ਕੇ ਕੀਤਾ (ਰਕਾਬ ਗੰਜ ਸਾਹਿਬ)।',
          ],
          hi: [
            'चरण 1: भाई मती दास जी को आरे से चीरा गया।',
            'चरण 2: भाई दयाला जी को उबलती देग में उबाला गया।',
            'चरण 3: भाई सती दास जी को रुई में लपेटकर जलाया गया।',
            'चरण 4: भाई जैता जी पवित्र सीस आनंदपुर साहिब लाए ("रंगरेटे गुरु के बेटे")।',
            'चरण 5: लक्खी शाह वणजारा ने अपने घर को जलाकर धड़ का संस्कार किया (रकाब गंज साहिब)।',
          ],
        },
        solution: {
          en: 'Mati Das = Sawn alive | Dayala = Boiled in cauldron | Sati Das = Burnt in cotton | Bhai Jaita = Brought Sis to Anandpur | Lakhi Shah Vanjara = Cremated body at Rakab Ganj.',
          pa: 'ਮਤੀ ਦਾਸ = ਆਰੇ ਨਾਲ ਚੀਰੇ ਗਏ | ਦਿਆਲਾ ਜੀ = ਦੇਗ ਵਿੱਚ ਉਬਾਲੇ ਗਏ | ਸਤੀ ਦਾਸ = ਰੂੰ ਵਿੱਚ ਸਾੜੇ ਗਏ | ਭਾਈ ਜੈਤਾ = ਸੀਸ ਅਨੰਦਪੁਰ ਲਿਆਏ | ਲੱਖੀ ਸ਼ਾਹ ਵਣਜਾਰਾ = ਧੜ ਦਾ ਸਸਕਾਰ।',
          hi: 'मती दास = आरे से चीरे गए | दयाला जी = देग में उबाले गए | सती दास = रुई में जलाए गए | भाई जैता = सीस आनंदपुर लाए | लक्खी शाह वणजारा = धड़ का संस्कार।',
        },
      },
      {
        title: {
          en: 'Chronological Sequence of Guru Hargobind Sahib Ji’s Four Battles',
          pa: 'ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੀਆਂ ਚਾਰ ਲੜਾਈਆਂ ਦਾ ਕਾਲਕ੍ਰਮ',
          hi: 'गुरु हरगोबिंद साहिब जी के चार युद्धों का कालक्रम',
        },
        problem: {
          en: 'Arrange the four battles fought by the 6th Guru, Sri Guru Hargobind Sahib Ji, in chronological order and name the Mughal commanders defeated.',
          pa: 'ਛੇਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੁਆਰਾ ਲੜੀਆਂ ਚਾਰ ਲੜਾਈਆਂ ਨੂੰ ਕਾਲਕ੍ਰਮ ਅਨੁਸਾਰ ਲਿਖੋ।',
          hi: 'छठे गुरु श्री गुरु हरगोबिंद साहिब जी द्वारा लड़े गए चार युद्धों को कालक्रमानुसार व्यवस्थित कीजिए।',
        },
        steps: {
          en: [
            'Step 1: Battle of Rohilla (1621) — Abdul Khan defeated.',
            'Step 2: Battle of Amritsar (1634) — Mukhlis Khan killed (fought over the royal hawk).',
            'Step 3: Battle of Lahira / Mehraj (Dec 1634) — Qamar Beg & Lalla Beg defeated (fought over horses Dilbagh & Gulbagh).',
            'Step 4: Battle of Kartarpur (April 1635) — Painda Khan & Kale Khan defeated.',
          ],
          pa: [
            'ਕਦਮ 1: ਰੋਹਿਲਾ ਦੀ ਲੜਾਈ (1621) — ਅਬਦੁਲ ਖ਼ਾਨ ਦੀ ਹਾਰ।',
            'ਕਦਮ 2: ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਲੜਾਈ (1634) — ਮੁਖ਼ਲਿਸ ਖ਼ਾਨ ਮਾਰਿਆ ਗਿਆ।',
            'ਕਦਮ 3: ਲਹਿਰਾ / ਮਹਿਰਾਜ ਦੀ ਲੜਾਈ (ਦਸੰਬਰ 1634) — ਕਮਰ ਬੇਗ਼ ਤੇ ਲੱਲਾ ਬੇਗ਼ ਦੀ ਹਾਰ।',
            'ਕਦਮ 4: ਕਰਤਾਰਪੁਰ ਦੀ ਲੜਾਈ (ਅਪ੍ਰੈਲ 1635) — ਪੈਂਦੇ ਖ਼ਾਨ ਦੀ ਹਾਰ।',
          ],
          hi: [
            'चरण 1: रोहिला का युद्ध (1621) — अब्दुल खान पराजित।',
            'चरण 2: अमृतसर का युद्ध (1634) — मुखलिस खान मारा गया।',
            'चरण 3: लहिरा / महिराज का युद्ध (दिसंबर 1634) — कमर बेग व लल्ला बेग पराजित।',
            'चरण 4: करतारपुर का युद्ध (अप्रैल 1635) — पैंदे खान पराजित।',
          ],
        },
        solution: {
          en: 'Rohilla (1621) → Amritsar (1634) → Lahira/Mehraj (1634) → Kartarpur (1635).',
          pa: 'ਰੋਹਿਲਾ (1621) → ਅੰਮ੍ਰਿਤਸਰ (1634) → ਲਹਿਰਾ/ਮਹਿਰਾਜ (1634) → ਕਰਤਾਰਪੁਰ (1635)।',
          hi: 'रोहिला (1621) → अमृतसर (1634) → लहिरा/महिराज (1634) → करतारपुर (1635)।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Anandpur Sahib was founded by the 10th Guru, Sri Guru Gobind Singh Ji.',
          pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ ਦਸਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਕੀਤੀ ਸੀ।',
          hi: 'आनंदपुर साहिब की स्थापना दसवें गुरु श्री गुरु गोबिंद सिंह जी ने की थी।',
        },
        correction: {
          en: 'Anandpur Sahib was originally founded in 1665 as "Chak Nanaki" (named after Mata Nanaki Ji) by the 9th Guru, Sri Guru Tegh Bahadur Ji, on land purchased at Makhowal from the ruler of Bilaspur (Kahlur). Guru Gobind Singh Ji later fortified it with 5 forts (Anandgarh, Lohgarh, Holgarh, Fatehgarh, Taragarh).',
          pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਮੂਲ ਸਥਾਪਨਾ 1665 ਵਿੱਚ ਨੌਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਨੇ ਬਿਲਾਸਪੁਰ (ਕਹਿਲੂਰ) ਤੋਂ ਮਾਖੋਵਾਲ ਦੀ ਜ਼ਮੀਨ ਖਰੀਦ ਕੇ ਆਪਣੀ ਮਾਤਾ ਜੀ ਦੇ ਨਾਮ ਉੱਤੇ "ਚੱਕ ਨਾਨਕੀ" ਵਜੋਂ ਕੀਤੀ ਸੀ।',
          hi: 'आनंदपुर साहिब की मूल स्थापना 1665 में नौवें गुरु श्री गुरु तेग बहादुर जी ने बिलासपुर (कहलूर) से माखोवाल की भूमि खरीदकर अपनी माता के नाम पर "चक्क नानकी" के रूप में की थी।',
        },
        whyItMatters: {
          en: 'High-frequency PSSSB and Master Cadre question asking the original name and founder of Anandpur Sahib.',
          pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦਾ ਪੁਰਾਣਾ ਨਾਮ (ਚੱਕ ਨਾਨਕੀ) ਅਤੇ ਬਾਨੀ (ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ) ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਅਕਸਰ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'आनंदपुर साहिब का प्राचीन नाम (चक्क नानकी) और संस्थापक (गुरु तेग बहादुर जी) परीक्षाओं में अक्सर पूछा जाता है।',
        },
      },
      {
        misconception: {
          en: 'Guru Hargobind Sahib Ji, Guru Har Rai Ji, and Guru Har Krishan Ji composed hymns in Sri Guru Granth Sahib Ji.',
          pa: 'ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ, ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ ਅਤੇ ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਜੀ ਦੀ ਬਾਣੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਦਰਜ ਹੈ।',
          hi: 'गुरु हरगोबिंद साहिब जी, गुरु हरिराय जी और गुरु हरिकृष्ण जी की बाणी गुरु ग्रंथ साहिब में दर्ज है।',
        },
        correction: {
          en: 'Only 6 of the 10 Sikh Gurus have hymns recorded in Sri Guru Granth Sahib Ji: the first five Gurus (Guru Nanak, Guru Angad, Guru Amar Das, Guru Ram Das, Guru Arjan Dev) and the 9th Guru (Guru Tegh Bahadur Ji). The 6th, 7th, and 8th Gurus did not compose Bani in Guru Granth Sahib.',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਕੇਵਲ 6 ਗੁਰੂ ਸਾਹਿਬਾਨਾਂ (ਪਹਿਲੇ ਪੰਜ ਗੁਰੂ ਅਤੇ ਨੌਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ) ਦੀ ਬਾਣੀ ਦਰਜ ਹੈ। 6ਵੇਂ, 7ਵੇਂ ਅਤੇ 8ਵੇਂ ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀ ਕੋਈ ਬਾਣੀ ਦਰਜ ਨਹੀਂ ਹੈ।',
          hi: 'श्री गुरु ग्रंथ साहिब जी में केवल 6 गुरुओं (प्रथम पांच गुरु और नौवें गुरु श्री गुरु तेग बहादुर जी) की बाणी दर्ज है। 6वें, 7वें और 8वें गुरुओं की बाणी दर्ज नहीं है।',
        },
        whyItMatters: {
          en: 'Classic question: "How many Sikh Gurus’ Bani is included in Sri Guru Granth Sahib Ji?" Answer: 6 Gurus.',
          pa: '"ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਕਿੰਨੇ ਗੁਰੂ ਸਾਹਿਬਾਨਾਂ ਦੀ ਬਾਣੀ ਦਰਜ ਹੈ?" ਸਹੀ ਉੱਤਰ: 6 ਗੁਰੂ ਸਾਹਿਬਾਨ।',
          hi: '"श्री गुरु ग्रंथ साहिब में कितने गुरुओं की बाणी दर्ज है?" सही उत्तर: 6 गुरु।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          '6th Guru — Guru Hargobind Sahib Ji (1606–1644): Born Wadali (1595); Miri-Piri (2 swords); built Akal Takht (1606/1609) & Lohgarh; First Dhadi: Abdullah & Natha Mal; Bandi Chhor Diwas (freed 52 Rajas from Gwalior); 4 Battles (Rohilla, Amritsar, Lahira, Kartarpur).',
          '7th Guru — Guru Har Rai Ji (1644–1661): Born Kiratpur (1630); 2,200 horsemen; Ayurvedic dispensary cured Dara Shikoh; disowned son Ram Rai for altering Gurbani word.',
          '8th Guru — Guru Har Krishan Ji (1661–1664): "Bal Guru" (Guru at age 5); served smallpox patients at Bangla Sahib Delhi; uttered "Baba Bakale" before passing at age 8.',
          '9th Guru — Guru Tegh Bahadur Ji (1664–1675): Original name Tyag Mal; discovered at Bakala by Makhan Shah Lubana ("Guru Ladho Re"); founded Chak Nanaki / Anandpur Sahib (1665); 115 hymns in 15 Raags (added 31st Raag Jaijawanti); martyred at Chandni Chowk Delhi on 11 Nov 1675 under Aurangzeb protecting Kashmiri Pandits (led by Pandit Kirpa Ram).',
        ],
        pa: [
          '6ਵੇਂ ਗੁਰੂ — ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ (1606–1644): ਮੀਰੀ-ਪੀਰੀ; ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ (1606/1609); ਕਿਲ੍ਹਾ ਲੋਹਗੜ੍ਹ; ਬੰਦੀ ਛੋੜ ਦਿਵਸ (ਗਵਾਲੀਅਰ ਤੋਂ 52 ਰਾਜੇ ਰਿਹਾਅ); 4 ਲੜਾਈਆਂ।',
          '7ਵੇਂ ਗੁਰੂ — ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ (1644–1661): ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਦਵਾਖਾਨਾ (ਦਾਰਾ ਸ਼ਿਕੋਹ ਦਾ ਇਲਾਜ); ਰਾਮ ਰਾਇ ਨੂੰ ਤਿਆਗਿਆ।',
          '8ਵੇਂ ਗੁਰੂ — ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਜੀ (1661–1664): ਬਾਲ ਗੁਰੂ (5 ਸਾਲ ਦੀ ਉਮਰ); ਬੰਗਲਾ ਸਾਹਿਬ ਦਿੱਲੀ; "ਬਾਬਾ ਬਕਾਲੇ"।',
          '9ਵੇਂ ਗੁਰੂ — ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ (1664–1675): ਬਚਪਨ ਦਾ ਨਾਮ ਤਿਆਗ ਮੱਲ; ਮੱਖਣ ਸ਼ਾਹ ਲੁਬਾਣਾ ("ਗੁਰੂ ਲਾਧੋ ਰੇ"); ਚੱਕ ਨਾਨਕੀ/ਅਨੰਦਪੁਰ ਸਾਹਿਬ (1665); 115 ਸ਼ਬਦ/ਸਲੋਕ (ਰਾਗੁ ਜੈਜਾਵੰਤੀ); 11 ਨਵੰਬਰ 1675 ਚਾਂਦਨੀ ਚੌਕ ਦਿੱਲੀ ਵਿਖੇ ਸ਼ਹਾਦਤ ("ਹਿੰਦ ਦੀ ਚਾਦਰ")।',
        ],
        hi: [
          '6वें गुरु — गुरु हरगोबिंद साहिब जी (1606–1644): मीरी-पीरी; अकाल तख्त (1606/1609); लोहगढ़ किला; बंदी छोड़ दिवस (ग्वालियर से 52 राजा मुक्त); 4 युद्ध।',
          '7वें गुरु — गुरु हरिराय जी (1644–1661): कीरतपुर साहिब दवाखाना (दारा शिकोह का इलाज); राम राय को त्यागा।',
          '8वें गुरु — गुरु हरिकृष्ण जी (1661–1664): बाल गुरु (5 वर्ष की आयु); बंगला साहिब दिल्ली; "बाबा बकाले"।',
          '9वें गुरु — गुरु तेग बहादुर जी (1664–1675): मूल नाम त्याग मल्ल; मक्खन शाह लुबाना ("गुरु लाधो रे"); चक्क नानकी/आनंदपुर साहिब (1665); 115 शब्द/सलोक (राग जैजावंती); 11 नवंबर 1675 चांदनी चौक दिल्ली में शहादत ("हिंद दी चादर")।',
        ],
      },
      examTraps: {
        en: [
          'Trap: Pandit Kirpa Ram of Mattan led the Kashmiri Pandit delegation in 1675 (he later took Amrit as Bhai Kirpa Singh and died fighting as a martyr in the Battle of Chamkaur Sahib in 1704!).',
          'Trap: Gurdwara Sis Ganj Sahib (Chandni Chowk) marks the site of beheading, whereas Gurdwara Rakab Ganj Sahib marks the site where Lakhi Shah Vanjara cremated the Guru’s body.',
        ],
        pa: [
          'ਧੋਖਾ: ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਦੇ ਜਥੇ ਦੀ ਅਗਵਾਈ ਮੱਟਨ ਦੇ ਪੰਡਿਤ ਕਿਰਪਾ ਰਾਮ ਨੇ ਕੀਤੀ ਸੀ (ਜੋ ਬਾਅਦ ਵਿੱਚ ਸਿੰਘ ਸਜ ਕੇ ਭਾਈ ਕਿਰਪਾ ਸਿੰਘ ਵਜੋਂ ਚਮਕੌਰ ਦੀ ਗੜ੍ਹੀ ਵਿੱਚ ਸ਼ਹੀਦ ਹੋਏ)।',
          'ਧੋਖਾ: ਸੀਸ ਗੰਜ ਸਾਹਿਬ (ਚਾਂਦਨੀ ਚੌਕ) ਸ਼ਹੀਦੀ ਅਸਥਾਨ ਹੈ ਅਤੇ ਰਕਾਬ ਗੰਜ ਸਾਹਿਬ ਧੜ ਦੇ ਸਸਕਾਰ ਦਾ ਅਸਥਾਨ ਹੈ।',
        ],
        hi: [
          'धोखा: कश्मीरी पंडितों के दल का नेतृत्व मट्टन के पंडित किरपा राम ने किया था (जो बाद में भाई किरपा सिंह बनकर चमकौर के युद्ध में शहीद हुए)।',
          'धोखा: सीस गंज साहिब (चांदनी चौक) बलिदान स्थल है और रकाब गंज साहिब पार्थिव देह के संस्कार का स्थल है।',
        ],
      },
    },
    summary: {
      en: 'From 1606 to 1675, Guru Hargobind Sahib Ji institutionalized Miri-Piri, built Sri Akal Takht Sahib, freed 52 Rajas from Gwalior Fort, and won 4 battles; Guru Har Rai Ji and Bal Guru Har Krishan Ji consolidated the Panth with compassion; and Guru Tegh Bahadur Ji founded Chak Nanaki (Anandpur Sahib), composed 115 hymns, and gave his supreme martyrdom at Chandni Chowk, Delhi on 11 November 1675 as "Hind di Chadar" to defend freedom of conscience.',
      pa: '1606 ਤੋਂ 1675 ਤੱਕ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਨੇ ਮੀਰੀ-ਪੀਰੀ ਅਤੇ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ; ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ ਅਤੇ ਬਾਲ ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਜੀ ਨੇ ਸੇਵਾ ਤੇ ਸਿਮਰਨ ਦਾ ਪ੍ਰਸਾਰ ਕੀਤਾ; ਅਤੇ ਨੌਵੇਂ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਨੇ ਚੱਕ ਨਾਨਕੀ ਵਸਾਇਆ ਅਤੇ 11 ਨਵੰਬਰ 1675 ਨੂੰ ਚਾਂਦਨੀ ਚੌਕ ਦਿੱਲੀ ਵਿਖੇ ਧਰਮ ਦੀ ਆਜ਼ਾਦੀ ਲਈ ਸ਼ਹਾਦਤ ਦਿੱਤੀ।',
      hi: '1606 से 1675 के मध्य गुरु हरगोबिंद साहिब जी ने मीरी-पीरी व अकाल तख्त की स्थापना की; गुरु हरिराय जी व बाल गुरु हरिकृष्ण जी ने सेवा का प्रसार किया; तथा नौवें गुरु तेग बहादुर जी ने चक्क नानकी बसाया और 11 नवंबर 1675 को चांदनी चौक दिल्ली में धार्मिक स्वतंत्रता की रक्षा हेतु सर्वोच्च बलिदान दिया।',
    },
    keyNotes: {
      en: [
        '📌 1606/1609 — Guru Hargobind Sahib Ji wore Miri-Piri swords and built Sri Akal Takht Sahib.',
        '📌 Bandi Chhor Diwas — Guru Hargobind Sahib Ji freed 52 Rajput kings from Gwalior Fort using a 52-tassel cloak.',
        '📌 1665 — Guru Tegh Bahadur Ji founded Chak Nanaki (Anandpur Sahib) after being discovered at Bakala by Makhan Shah Lubana.',
        '📌 11 November 1675 — Martyrdom of Sri Guru Tegh Bahadur Ji at Chandni Chowk, Delhi ("Hind di Chadar").',
      ],
      pa: [
        '📌 1606/1609 — ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੁਆਰਾ ਮੀਰੀ-ਪੀਰੀ ਦੀਆਂ ਦੋ ਤਲਵਾਰਾਂ ਅਤੇ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਉਸਾਰੀ।',
        '📌 ਬੰਦੀ ਛੋੜ ਦਿਵਸ — ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ ਤੋਂ 52 ਪਹਾੜੀ ਰਾਜਿਆਂ ਦੀ ਰਿਹਾਈ।',
        '📌 1665 — ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੁਆਰਾ ਚੱਕ ਨਾਨਕੀ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ) ਦੀ ਸਥਾਪਨਾ।',
        '📌 11 ਨਵੰਬਰ 1675 — ਚਾਂਦਨੀ ਚੌਕ ਦਿੱਲੀ ਵਿਖੇ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹਾਦਤ ("ਹਿੰਦ ਦੀ ਚਾਦਰ")।',
      ],
      hi: [
        '📌 1606/1609 — गुरु हरगोबिंद साहिब जी द्वारा मीरी-पीरी की दो तलवारें और श्री अकाल तख्त साहिब का निर्माण।',
        '📌 बंदी छोड़ दिवस — ग्वालियर किले से 52 राजपूत राजाओं की रिहाई।',
        '📌 1665 — गुरु तेग बहादुर जी द्वारा चक्क नानकी (आनंदपुर साहिब) की स्थापना।',
        '📌 11 नवंबर 1675 — चांदनी चौक दिल्ली में गुरु तेग बहादुर जी की शहादत ("हिंद दी चादर")।',
      ],
    },
    flashcards: [
      {
        id: 'fc-ghtb-1',
        q: {
          en: 'Who were the first two Dhadi bards who sang heroic ballads (Vars) at Sri Akal Takht Sahib during the time of Guru Hargobind Sahib Ji?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੇ ਸਮੇਂ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਉੱਤੇ ਬੀਰ-ਰਸੀ ਵਾਰਾਂ ਗਾਉਣ ਵਾਲੇ ਪਹਿਲੇ ਦੋ ਢਾਡੀ ਕੌਣ ਸਨ?',
          hi: 'श्री गुरु हरगोबिंद साहिब जी के समय श्री अकाल तख्त साहिब पर वीर-रस की वारें गाने वाले प्रथम दो ढाडी कौन थे?',
        },
        a: {
          en: 'Bhai Abdullah and Bhai Natha Mal.',
          pa: 'ਭਾਈ ਅਬਦੁੱਲਾ ਅਤੇ ਭਾਈ ਨੱਥਾ ਮੱਲ।',
          hi: 'भाई अब्दुल्ला और भाई नत्था मल्ल।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-ghtb-2',
        q: {
          en: 'Who discovered the 9th Guru, Sri Guru Tegh Bahadur Ji, at Bakala and proclaimed "Guru Ladho Re"?',
          pa: 'ਬਕਾਲਾ ਵਿਖੇ ਨੌਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਨੂੰ ਕਿਸ ਨੇ ਪਛਾਣਿਆ ਅਤੇ "ਗੁਰੂ ਲਾਧੋ ਰੇ" ਦਾ ਹੋਕਾ ਦਿੱਤਾ?',
          hi: 'बकाला में नौवें गुरु श्री गुरु तेग बहादुर जी को किसने पहचाना और "गुरु लाधो रे" की घोषणा की?',
        },
        a: {
          en: 'Bhai Makhan Shah Lubana (in 1664).',
          pa: 'ਭਾਈ ਮੱਖਣ ਸ਼ਾਹ ਲੁਬਾਣਾ (1664 ਵਿੱਚ)।',
          hi: 'भाई मक्खन शाह लुबाना (1664 में)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ghtb-3',
        q: {
          en: 'Who carried the severed head (Sis) of Sri Guru Tegh Bahadur Ji from Chandni Chowk, Delhi to Anandpur Sahib, earning the blessing "Rangrete Guru Ke Bete"?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦਾ ਪਵਿੱਤਰ ਸੀਸ ਦਿੱਲੀ ਤੋਂ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਕੌਣ ਲੈ ਕੇ ਆਇਆ, ਜਿਸ ਨੂੰ "ਰੰਗਰੇਟੇ ਗੁਰੂ ਕੇ ਬੇਟੇ" ਦਾ ਸਨਮਾਨ ਮਿਲਿਆ?',
          hi: 'श्री गुरु तेग बहादुर जी का पवित्र सीस दिल्ली से आनंदपुर साहिब कौन लेकर आया, जिन्हें "रंगरेटे गुरु के बेटे" कहा गया?',
        },
        a: {
          en: 'Bhai Jaita Ji (later baptized as Baba Jiwan Singh Ji).',
          pa: 'ਭਾਈ ਜੈਤਾ ਜੀ (ਬਾਅਦ ਵਿੱਚ ਬਾਬਾ ਜੀਵਨ ਸਿੰਘ ਜੀ)।',
          hi: 'भाई जैता जी (बाद में बाबा जीवन सिंह जी)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ghtb-4',
        q: {
          en: 'Which 31st Raag was introduced into Sri Guru Granth Sahib Ji through the compositions of Sri Guru Tegh Bahadur Ji?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ ਰਾਹੀਂ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਕਿਹੜਾ 31ਵਾਂ ਰਾਗ ਸ਼ਾਮਲ ਹੋਇਆ?',
          hi: 'श्री गुरु तेग बहादुर जी की बाणी के माध्यम से श्री गुरु ग्रंथ साहिब जी में कौन-सा 31वां राग जुड़ा?',
        },
        a: {
          en: 'Raag Jaijawanti (4 Shabads composed by Guru Tegh Bahadur Ji).',
          pa: 'ਰਾਗੁ ਜੈਜਾਵੰਤੀ (4 ਸ਼ਬਦ)।',
          hi: 'राग जैजावंती (4 शब्द)।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Miri-Piri to Hind di Chadar: Guru Hargobind Sahib Ji to Guru Tegh Bahadur Ji',
        channel: 'PSEB / NCERT History Archive',
        url: 'https://www.youtube.com/results?search_query=Guru+Hargobind+Guru+Tegh+Bahadur+History+of+Punjab',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'History and Culture of Punjab (Class 10)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Chapters 5 & 6: Guru Hargobind Sahib Ji and Martyrdom of Guru Tegh Bahadur Ji',
        type: 'state-board',
      },
    ],
    syllabusReference: {
      title: 'ERB Punjab Master Cadre SST & PSSSB History Syllabus',
      url: 'https://educationrecruitmentboard.com',
      body: 'Education Recruitment Board (ERB) & PSSSB',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 5: SRI GURU GOBIND SINGH JI (1666 - 1708) & CREATION OF KHALSA
  // ==========================================================================
  'guru-gobind-singh-ji': {
    id: 'guru-gobind-singh-ji',
    topicId: 'guru-gobind-singh-ji',
    subjectId: 'social-science',
    category: 'history',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Sri Guru Gobind Singh Ji (1666–1708): Creation of Khalsa, Battles, Sahibzadas & Eternal Guruship',
      pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (1666–1708): ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ, ਜੰਗਾਂ, ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹਾਦਤ ਅਤੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ',
      hi: 'श्री गुरु गोबिंद सिंह जी (1666–1708): खालसा पंथ की स्थापना, युद्ध, साहिबज़ादों की शहादत एवं शाश्वत गुरुगद्दी',
    },
    examRelevance: 'Punjab Master Cadre SST (4–5 Qs), PSSSB Clerk (3–4 Qs), ETT, Patwari & Punjab Police',
    estimatedTime: '50 mins',
    prerequisites: {
      en: [
        'Supreme martyrdom of the 9th Guru, Sri Guru Tegh Bahadur Ji, at Chandni Chowk, Delhi in 1675.',
        'Hostility of the Shivalik Hill Chiefs (Raja Bhim Chand of Bilaspur/Kahlur) and Emperor Aurangzeb’s imperial governors in Sirhind and Lahore.',
      ],
      pa: [
        '1675 ਵਿੱਚ ਚਾਂਦਨੀ ਚੌਕ ਦਿੱਲੀ ਵਿਖੇ ਨੌਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹਾਦਤ।',
        'ਸ਼ਿਵਾਲਿਕ ਦੇ ਪਹਾੜੀ ਰਾਜਿਆਂ (ਬਿਲਾਸਪੁਰ ਦੇ ਰਾਜਾ ਭੀਮ ਚੰਦ) ਅਤੇ ਔਰੰਗਜ਼ੇਬ ਦੇ ਸੂਬੇਦਾਰਾਂ ਦੀ ਦੁਸ਼ਮਣੀ।',
      ],
      hi: [
        '1675 में चांदनी चौक दिल्ली में नौवें गुरु श्री गुरु तेग बहादुर जी की शहादत।',
        'शिवालिक के पहाड़ी राजाओं (बिलासपुर के राजा भीम चंद) और औरंगज़ेब के सूबेदारों की शत्रुता।',
      ],
    },
    learningObjectives: {
      en: [
        'Chronicle Guru Gobind Singh Ji’s early life at Patna Sahib, literary court of 52 poets at Paonta Sahib, and the Pre-Khalsa battles of Bhangani (1688) and Nadaun (1691).',
        'Detail the historic Creation of the Khalsa on Baisakhi (30 March / 13 April 1699) at Kesgarh Sahib, Anandpur — including the Panj Pyare (with their names, castes, and regions) and the Five Ks (Panj Kakar).',
        'Sequence the Post-Khalsa battles (Anandpur, Nirmohgarh, Basoli, Chamkaur Sahib 1704, Khidrana/Muktsar 1705), the martyrdom of the Four Sahibzadas, the Zafarnama, and the conferral of eternal Guruship upon Sri Guru Granth Sahib Ji at Nanded (1708).',
      ],
      pa: [
        'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਪਟਨਾ ਸਾਹਿਬ ਦੇ ਬਚਪਨ, ਪਾਉਂਟਾ ਸਾਹਿਬ ਵਿਖੇ 52 ਕਵੀਆਂ ਦੇ ਦਰਬਾਰ ਅਤੇ ਭੰਗਾਣੀ (1688) ਤੇ ਨਦੌਣ (1691) ਦੀਆਂ ਲੜਾਈਆਂ ਦਾ ਅਧਿਐਨ ਕਰਨਾ।',
        'ਵਿਸਾਖੀ (1699) ਨੂੰ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ) ਵਿਖੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ, ਪੰਜ ਪਿਆਰਿਆਂ ਦੇ ਨਾਮ/ਸਥਾਨ ਅਤੇ ਪੰਜ ਕਕਾਰਾਂ ਦਾ ਵੇਰਵਾ ਜਾਣਨਾ।',
        'ਚਮਕੌਰ ਸਾਹਿਬ (1704), ਸਰਹਿੰਦ ਵਿਖੇ ਚਾਰ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹਾਦਤ, ਜ਼ਫ਼ਰਨਾਮਾ, ਖਿਦਰਾਣਾ/ਮੁਕਤਸਰ (1705, 40 ਮੁਕਤੇ) ਅਤੇ ਨਾਂਦੇੜ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਗੁਰਗੱਦੀ ਸੌਂਪਣ (1708) ਦੇ ਇਤਿਹਾਸ ਨੂੰ ਸਮਝਣਾ।',
      ],
      hi: [
        'श्री गुरु गोबिंद सिंह जी के पटना साहिब के प्रारंभिक जीवन, पांवटा साहिब के 52 कवियों के दरबार तथा भंगाणी (1688) व नदौन (1691) के युद्धों का अध्ययन करना।',
        'बैसाखी (1699) को केसगढ़ साहिब (आनंदपुर साहिब) में खालसा पंथ की स्थापना, पंज प्यारों के नाम/स्थान और पांच ककारों को जानना।',
        'चमकौर साहिब (1704), चार साहिबज़ादों की शहादत, ज़फ़रनामा, खिदराना/मुक्तसर (1705, 40 मुक्ते) और नांदेड़ में श्री गुरु ग्रंथ साहिब जी को शाश्वत गुरु घोषित करने (1708) का विश्लेषण करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌟 1. Early Life, Paonta Sahib & Pre-Khalsa Battles (1666–1698)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              <strong>Sri Guru Gobind Singh Ji</strong> (childhood name <strong>Gobind Rai</strong>), the Tenth and last human Guru of the Sikhs, was born on <strong>22 December 1666</strong> at <strong>Patna Sahib</strong> (Bihar) to the 9th Guru <strong>Sri Guru Tegh Bahadur Ji</strong> and <strong>Mata Gujri Ji</strong>. Muslim Sufi saint <strong>Pir Bhikhan Shah</strong> of Ghuram bowed toward the East at his birth and visited Patna with two bowls (milk and water); the infant touched both, signifying spiritual universality.
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Guruship (1675) & Education:</strong> Ascended the Guruship at age 9 following his father's martyrdom in Nov 1675. Mastered Sanskrit, Persian, Braj Bhasha, Gurmukhi, horsemanship, and archery at Chak Nanaki (Anandpur Sahib). Installed the massive war-drum <strong>Ranjit Nagara</strong> ("Drum of Victory") at Anandpur.</li>
              <li><strong>Four Sahibzadas (Sons):</strong>
                <br/>• <strong>Baba Ajit Singh Ji</strong> (born 1687 to Mata Sundari Ji)
                <br/>• <strong>Baba Jujhar Singh Ji</strong> (born 1691 to Mata Jito Ji)
                <br/>• <strong>Baba Zorawar Singh Ji</strong> (born 1696 to Mata Jito Ji)
                <br/>• <strong>Baba Fateh Singh Ji</strong> (born 1699 to Mata Jito Ji)
                <br/>• <strong>Mata Sahib Devan (Mata Sahib Kaur Ji)</strong> was declared the <em>Spiritual Mother of the Khalsa</em>.
              </li>
              <li><strong>Paonta Sahib (1685–1688):</strong> At the invitation of <strong>Raja Medini Prakash of Nahan (Sirmaur)</strong>, Guru Ji built the fort of <strong>Paonta Sahib</strong> on the banks of <strong>River Yamuna</strong>. Here he maintained a royal court of <strong>52 Poets (Bavan Kavi)</strong>, including Bhai Nand Lal Goya, Senapati, and Alam.</li>
              <li><strong>Pre-Khalsa Battles:</strong>
                <br/>1. <strong>Battle of Bhangani (September 1688):</strong> Fought near Paonta Sahib against <strong>Raja Fateh Shah of Garhwal</strong>, <strong>Raja Bhim Chand of Bilaspur (Kahlur)</strong>, Hari Chand of Handur, and 500 renegade Pathans (led by Hayat Khan & Kale Khan). Sufi saint <strong>Pir Budhu Shah of Sadhaura</strong> (along with his 4 sons and 700 disciples) and the Udasi mahant <strong>Kirpal Das</strong> (who killed Hayat Khan with a wooden club/mahant's staff) fought heroically for the Guru, securing a decisive Sikh victory (described in <em>Bachittar Natak</em>).
                <br/>2. <strong>Battle of Nadaun (1691):</strong> Fought on the banks of River Beas where Guru Gobind Singh Ji assisted the Hill Rajas in defeating Mughal commander <strong>Alif Khan</strong>.
                <br/>3. <strong>Fortification of Anandpur Sahib:</strong> Returning to Anandpur, the Guru built five defensive forts: <strong>Anandgarh, Lohgarh, Holgarh, Fatehgarh, and Taragarh (plus Kesgarh)</strong>, and abolished the corrupt <strong>Masand system</strong> in 1698–99.
              </li>
            </ul>
          </div>

          <div class="bg-amber-950/50 border border-amber-500/30 p-5 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">🦁 2. Creation of the Khalsa Panth (Baisakhi — 30 March / 13 April 1699)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              On the historic day of <strong>Baisakhi, 1699 CE</strong> at <strong>Kesgarh Sahib (Anandpur Sahib)</strong> before a congregation of 80,000 Sikhs, Guru Gobind Singh Ji drew his flashing sword and demanded the head of a Sikh willing to die for Dharma. Five devotees stepped forward one by one and were initiated as the <strong>Panj Pyare (The Five Beloved Ones)</strong>:
            </p>
            <div class="overflow-x-auto mb-3">
              <table class="w-full text-xs text-left border-collapse border border-slate-700">
                <thead>
                  <tr class="bg-slate-800 text-amber-300">
                    <th class="p-2 border border-slate-700">#</th>
                    <th class="p-2 border border-slate-700">Original Name → Khalsa Name</th>
                    <th class="p-2 border border-slate-700">Original Caste / Profession</th>
                    <th class="p-2 border border-slate-700">Native City & Region</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300">
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold">1</td>
                    <td class="p-2 font-bold text-white">Daya Ram → Bhai Daya Singh Ji</td>
                    <td class="p-2">Khatri (Shopkeeper)</td>
                    <td class="p-2">Lahore (Punjab)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold">2</td>
                    <td class="p-2 font-bold text-white">Dharam Das → Bhai Dharam Singh Ji</td>
                    <td class="p-2">Jat (Peasant)</td>
                    <td class="p-2">Hastinapur / Meerut (Uttar Pradesh)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold">3</td>
                    <td class="p-2 font-bold text-white">Himmat Rai → Bhai Himmat Singh Ji</td>
                    <td class="p-2">Jhiwar (Water-carrier)</td>
                    <td class="p-2">Jagannath Puri (Odisha)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold">4</td>
                    <td class="p-2 font-bold text-white">Mohkam Chand → Bhai Mohkam Singh Ji</td>
                    <td class="p-2">Chhimba (Calico-printer / Tailor)</td>
                    <td class="p-2">Dwarka (Gujarat)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold">5</td>
                    <td class="p-2 font-bold text-white">Sahib Chand → Bhai Sahib Singh Ji</td>
                    <td class="p-2">Nai (Barber)</td>
                    <td class="p-2">Bidar (Karnataka)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Khande di Pahul (Amrit Sanchar):</strong> Guru Ji prepared sacred nectar (<em>Amrit</em>) in an iron bowl stirred with a double-edged sword (<em>Khanda</em>) while reciting 5 Banis (<strong>Japji Sahib, Jaap Sahib, Tav-Prasad Savaiye, Chaupai Sahib, Anand Sahib</strong>), as <strong>Mata Jito Ji (or Mata Sahib Kaur Ji)</strong> added sugar crystals (<em>Patase</em>) to infuse sweetness with valor.</li>
              <li><strong>"Aape Gur Chela":</strong> After initiating the Panj Pyare, Guru Gobind Rai knelt before them and begged to be initiated by them, transforming his own name to <strong>Guru Gobind Singh</strong> — earning the immortal tribute by Bhai Gurdas Singh: <em>"Waho Waho Gobind Singh, Aape Gur Chela!"</em></li>
              <li><strong>The Five Ks (Panj Kakar), Titles & Code of Conduct (Rehat):</strong> Every baptized Sikh took the surname <strong>Singh</strong> ("Lion") for men and <strong>Kaur</strong> ("Princess") for women, wore the <strong>5 Ks</strong> — <strong>Kesh</strong> (unshorn hair), <strong>Kangha</strong> (wooden comb), <strong>Kara</strong> (iron bracelet), <strong>Kachhera</strong> (breeches), and <strong>Kirpan</strong> (sword) — and observed strict prohibition against <strong>4 Bajjar Kurehats</strong> (cutting hair, using tobacco/intoxicants, eating Halal/Kutha meat, and adultery). Greeting instituted: <em>"Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh!"</em> Also instituted the martial festival of <strong>Hola Mohalla</strong> at Anandpur Sahib (1701).</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">⚔️ 3. Post-Khalsa Battles, Martyrdom of Sahibzadas & Zafarnama (1700–1706)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>First & Second Battles of Anandpur (1700–1704), Nirmohgarh (1700) & Basoli (1702):</strong> Alarmed by the rise of the egalitarian Khalsa, Bhim Chand of Bilaspur allied with Emperor <strong>Aurangzeb’s</strong> governors of Sirhind (<strong>Wazir Khan</strong>) and Lahore (Zabardast Khan) to besiege Anandpur Sahib in 1704. After months of starvation, the Mughals swore on the Quran and Hill Rajas on the sacred cow offering safe passage.</li>
              <li><strong>Evacuation of Anandpur & Separation at River Sarsa (December 1704 / Poh):</strong> Breaking their solemn oaths, imperial forces attacked the Sikhs at the flooded <strong>River Sarsa</strong> on the icy night of 20–21 December 1704. Priceless literary manuscripts were swept away, and the Guru's family was separated into three groups.</li>
              <li><strong>Battle of Chamkaur Sahib (22 December 1704):</strong> With only <strong>40 Sikhs</strong> and his two elder sons inside the mud fortress (<em>Kachhi Garhi</em>) of Chamkaur against a vast Mughal army led by Wazir Khan and Nahar Khan, both elder Sahibzadas — <strong>Baba Ajit Singh Ji (age 17)</strong> and <strong>Baba Jujhar Singh Ji (age 14)</strong> — along with 3 Panj Pyare (Bhai Himmat Singh, Bhai Mohkam Singh, Bhai Sahib Singh) fought with unmatched valor and attained martyrdom. Obeying the Hukam (order) of the surviving 5 Singhs, Guru Ji left Chamkaur in the night through the thorny forests of <strong>Machhiwara</strong> (assisted by Muslim devotees <strong>Nabi Khan and Ghani Khan</strong> as <em>"Uch da Pir"</em>).</li>
              <li><strong>Martyrdom of the Younger Sahibzadas at Sirhind (26 December 1704):</strong> Betrayed by their former cook <strong>Gangu Brahmin</strong> at Saheri village, <strong>Mata Gujri Ji</strong> and the two younger sons — <strong>Baba Zorawar Singh Ji (age 9)</strong> and <strong>Baba Fateh Singh Ji (age 7)</strong> — were imprisoned in the freezing <strong>Thanda Burj</strong> at Sirhind. Despite the noble protest ("<em>Haah da Naara</em>") by <strong>Nawab Sher Muhammad Khan of Malerkotla</strong>, Subedar <strong>Wazir Khan</strong> (advised by Sucha Nand) ordered the boys <strong>bricked alive into a wall</strong> and martyred on 26 December 1704. Mata Gujri Ji also breathed her last in the Thanda Burj. Rich merchant <strong>Diwan Todar Mal</strong> purchased land to cremate their sacred bodies by covering the ground with <strong>standing gold coins (Asharfis)</strong> — the most expensive piece of land in world history (Gurdwara Jyoti Sarup, Fatehgarh Sahib).</li>
              <li><strong>Mahi Singh, Rai Kalha & The Zafarnama at Dina Kangar (1705):</strong> At Raikot, Muslim chief <strong>Rai Kalha</strong> hosted the Guru; herdsman Noora Mahi brought news of Sirhind, upon which the Guru uprooted a <em>Kahi</em> grass blade prophesying the uprooting of Mughal tyranny. At village <strong>Dina (Kangar)</strong> in Moga district, Guru Ji wrote the immortal <strong>Zafarnama ("Epistle of Victory")</strong> in <strong>111 Persian verses</strong> addressed to Emperor <strong>Aurangzeb</strong> (delivered to Ahmadnagar by Bhai Daya Singh and Bhai Dharam Singh), famously declaring: <em>"Chun kar az hama heelte dar guzasht, Halal ast burdan ba-shamshir dast"</em> ("When all peaceful remedies have failed, it is righteous to put one's hand to the hilt of the sword").</li>
              <li><strong>Battle of Khidrana / Sri Muktsar Sahib (May 1705):</strong> At Khidrana Dhab, the 40 Sikhs who had earlier signed a disclaimer (<em>Bedawa</em>) at Anandpur returned after being shamed and inspired by the heroic warrior-woman <strong>Mai Bhago (Mata Bhag Kaur Ji)</strong>. Led by <strong>Bhai Maha Singh</strong>, they fought Wazir Khan's army to the last drop of blood. Moved by Bhai Maha Singh’s dying wish, the Guru tore up the <em>Bedawa</em> right before his eyes, blessing them as the <strong>Chali Mukte ("The Forty Liberated Ones")</strong> and naming the site <strong>Muktsar ("Pool of Liberation")</strong>.</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">📖 4. Damdama Sahib ("Guru Ki Kashi"), Literary Works & Eternal Guruship at Nanded (1706–1708)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Damdama Sahib (Talwandi Sabo, 1706):</strong> Resting at Talwandi Sabo (Bathinda), Guru Gobind Singh Ji dictated the complete recension of Sri Guru Granth Sahib Ji (the <strong>Damdami Bir</strong>) from memory to <strong>Bhai Mani Singh Ji</strong>, adding the <strong>115 hymns of the 9th Guru, Sri Guru Tegh Bahadur Ji</strong>, with <strong>Baba Deep Singh Ji</strong> preparing copies. He blessed Damdama Sahib as <strong>"Guru Ki Kashi"</strong> (seat of Sikh scholarship).</li>
              <li><strong>Literary Masterpieces (Dasam Granth):</strong> Composed in Braj, Punjabi, and Persian (none of which he included in Guru Granth Sahib out of humility): <strong>Jaap Sahib, Akal Ustat, Bachittar Natak (Autobiography), Chandi di Var (in Punjabi), Chandi Charitar, Shabad Hazare, 33 Savaiye, Chaupai Sahib, and Zafarnama</strong>.</li>
              <li><strong>Journey to the Deccan, Banda Singh Bahadur & Eternal Guruship (October 1708):</strong> After Aurangzeb's death (1707), Guru Ji helped Prince Muazzam become <strong>Emperor Bahadur Shah I</strong> in the Battle of Jajau and traveled to <strong>Nanded (Abchalnagar / Takht Sri Hazur Sahib)</strong> on the banks of <strong>River Godavari</strong> in Maharashtra.
                <br/>• In September 1708, he baptized ascetic Madho Das Bairagi as <strong>Gurbakhsh Singh (Baba Banda Singh Bahadur)</strong> and dispatched him to Punjab to punish Wazir Khan.
                <br/>• Attacked by two Pathan assassins (Jamshed Khan and Wasil Beg, sent by Wazir Khan of Sirhind), before ascending to his heavenly abode on <strong>7 October 1708</strong>, Guru Gobind Singh Ji ended the line of human Gurus forever and invested eternal Guruship in <strong>Sri Guru Granth Sahib Ji</strong> (<em>Guru Granth</em>) and the collective Khalsa (<em>Guru Panth</em>), proclaiming: <strong>"Sab Sikhan Ko Hukam Hai, Guru Manyo Granth!"</strong>
              </li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌟 1. ਮੁੱਢਲਾ ਜੀਵਨ, ਪਾਉਂਟਾ ਸਾਹਿਬ ਅਤੇ ਪੂਰਵ-ਖ਼ਾਲਸਾ ਲੜਾਈਆਂ (1666–1698)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਸਿੱਖ ਧਰਮ ਦੇ ਦਸਵੇਂ ਗੁਰੂ <strong>ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ</strong> (ਬਚਪਨ ਦਾ ਨਾਮ <strong>ਗੋਬਿੰਦ ਰਾਇ</strong>) ਦਾ ਜਨਮ <strong>22 ਦਸੰਬਰ 1666</strong> ਨੂੰ <strong>ਪਟਨਾ ਸਾਹਿਬ (ਬਿਹਾਰ)</strong> ਵਿਖੇ ਪਿਤਾ <strong>ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ</strong> ਅਤੇ ਮਾਤਾ <strong>ਗੁਜਰੀ ਜੀ</strong> ਦੇ ਘਰ ਹੋਇਆ। ਸੂਫ਼ੀ ਫ਼ਕੀਰ <strong>ਪੀਰ ਭੀਖਣ ਸ਼ਾਹ</strong> ਨੇ ਪਟਨਾ ਜਾ ਕੇ ਬਾਲਕ ਗੁਰੂ ਦੇ ਦਰਸ਼ਨ ਕੀਤੇ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਚਾਰ ਸਾਹਿਬਜ਼ਾਦੇ:</strong> (1) <strong>ਬਾਬਾ ਅਜੀਤ ਸਿੰਘ ਜੀ</strong> (1687), (2) <strong>ਬਾਬਾ ਜੁਝਾਰ ਸਿੰਘ ਜੀ</strong> (1691), (3) <strong>ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ</strong> (1696), ਅਤੇ (4) <strong>ਬਾਬਾ ਫ਼ਤਹਿ ਸਿੰਘ ਜੀ</strong> (1699)। <strong>ਮਾਤਾ ਸਾਹਿਬ ਕੌਰ ਜੀ</strong> ਨੂੰ 'ਖ਼ਾਲਸੇ ਦੀ ਮਾਤਾ' ਦਾ ਦਰਜਾ ਦਿੱਤਾ ਗਿਆ।</li>
              <li><strong>ਪਾਉਂਟਾ ਸਾਹਿਬ (1685–1688):</strong> ਨਾਹਨ (ਸਿਰਮੌਰ) ਦੇ ਰਾਜਾ <strong>ਮੇਦਨੀ ਪ੍ਰਕਾਸ਼</strong> ਦੇ ਸੱਦੇ 'ਤੇ ਯਮੁਨਾ ਨਦੀ ਦੇ ਕੰਢੇ ਪਾਉਂਟਾ ਸਾਹਿਬ ਕਿਲ੍ਹਾ ਬਣਾਇਆ, ਜਿੱਥੇ ਗੁਰੂ ਜੀ ਦੇ ਦਰਬਾਰ ਵਿੱਚ <strong>52 ਕਵੀ</strong> (ਭਾਈ ਨੰਦ ਲਾਲ ਗੋਯਾ, ਸੈਨਾਪਤੀ ਆਦਿ) ਸਨ।</li>
              <li><strong>ਭੰਗਾਣੀ ਦੀ ਲੜਾਈ (1688) ਅਤੇ ਨਦੌਣ ਦੀ ਲੜਾਈ (1691):</strong> 1688 ਵਿੱਚ ਭੰਗਾਣੀ ਵਿਖੇ ਗੜ੍ਹਵਾਲ ਦੇ ਰਾਜਾ ਫ਼ਤਹਿ ਸ਼ਾਹ ਅਤੇ ਬਿਲਾਸਪੁਰ ਦੇ ਰਾਜਾ <strong>ਭੀਮ ਚੰਦ</strong> ਨੂੰ ਹਰਾਇਆ (ਸਢੌਰੇ ਦੇ ਸੂਫ਼ੀ <strong>ਪੀਰ ਬੁੱਧੂ ਸ਼ਾਹ</strong> ਦੇ ਪੁੱਤਰਾਂ ਅਤੇ ਮਹੰਤ ਕਿਰਪਾਲ ਦਾਸ ਨੇ ਬਹਾਦਰੀ ਦਿਖਾਈ)। 1691 ਵਿੱਚ <strong>ਨਦੌਣ ਦੀ ਲੜਾਈ</strong> ਵਿੱਚ ਮੁਗ਼ਲ ਸੈਨਾਪਤੀ ਅਲਿਫ਼ ਖ਼ਾਨ ਨੂੰ ਹਰਾਇਆ। ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਪੰਜ ਕਿਲ੍ਹੇ (ਅਨੰਦਗੜ੍ਹ, ਲੋਹਗੜ੍ਹ, ਹੋਲਗੜ੍ਹ, ਫ਼ਤਹਿਗੜ੍ਹ, ਤਾਰਾਗੜ੍ਹ) ਉਸਾਰੇ ਅਤੇ <strong>ਮਸੰਦ ਪ੍ਰਥਾ</strong> ਖ਼ਤਮ ਕੀਤੀ।</li>
            </ul>
          </div>

          <div class="bg-amber-950/50 border border-amber-500/30 p-5 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">🦁 2. ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ (ਵਿਸਾਖੀ — 30 ਮਾਰਚ / 13 ਅਪ੍ਰੈਲ 1699)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              <strong>1699 ਦੀ ਵਿਸਾਖੀ</strong> ਵਾਲੇ ਦਿਨ <strong>ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ)</strong> ਵਿਖੇ ਗੁਰੂ ਜੀ ਨੇ ਸੀਸ ਦੀ ਮੰਗ ਕੀਤੀ ਅਤੇ ਪੰਜ ਪਿਆਰਿਆਂ ਦੀ ਚੋਣ ਕਰਕੇ ਖੰਡੇ-ਬਾਟੇ ਦਾ ਅੰਮ੍ਰਿਤ ਛਕਾਇਆ:
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਪੰਜ ਪਿਆਰੇ:</strong> (1) <strong>ਭਾਈ ਦਇਆ ਸਿੰਘ ਜੀ</strong> (ਦਇਆ ਰਾਮ, ਖੱਤਰੀ — ਲਾਹੌਰ), (2) <strong>ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ</strong> (ਧਰਮ ਦਾਸ, ਜੱਟ — ਹਸਤਨਾਪੁਰ/ਮੇਰਠ), (3) <strong>ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ</strong> (ਹਿੰਮਤ ਰਾਇ, ਝੀਵਰ — ਜਗਨਨਾਥ ਪੁਰੀ, ਉੜੀਸਾ), (4) <strong>ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ</strong> (ਮੋਹਕਮ ਚੰਦ, ਛੀਂਬਾ — ਦੁਆਰਕਾ, ਗੁਜਰਾਤ), (5) <strong>ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ</strong> (ਸਾਹਿਬ ਚੰਦ, ਨਾਈ — ਬੀਦਰ, ਕਰਨਾਟਕ)।</li>
              <li><strong>"ਆਪੇ ਗੁਰ ਚੇਲਾ" ਅਤੇ ਪੰਜ ਕਕਾਰ:</strong> ਅੰਮ੍ਰਿਤ ਤਿਆਰ ਕਰਨ ਸਮੇਂ 5 ਬਾਣੀਆਂ (ਜਪੁਜੀ ਸਾਹਿਬ, ਜਾਪੁ ਸਾਹਿਬ, ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸਵੱਈਏ, ਚੌਪਈ ਸਾਹਿਬ, ਅਨੰਦੁ ਸਾਹਿਬ) ਦਾ ਪਾਠ ਕੀਤਾ ਅਤੇ ਮਾਤਾ ਜੀਤੋ ਜੀ (ਮਾਤਾ ਸਾਹਿਬ ਕੌਰ ਜੀ) ਨੇ ਪਤਾਸੇ ਪਾਏ। ਪੰਜ ਪਿਆਰਿਆਂ ਤੋਂ ਆਪ ਅੰਮ੍ਰਿਤ ਛਕ ਕੇ 'ਗੋਬਿੰਦ ਰਾਇ' ਤੋਂ <strong>'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ'</strong> ਬਣੇ। ਮਰਦਾਂ ਦੇ ਨਾਮ ਨਾਲ <strong>'ਸਿੰਘ'</strong> ਅਤੇ ਇਸਤਰੀਆਂ ਦੇ ਨਾਮ ਨਾਲ <strong>'ਕੌਰ'</strong> ਲਗਾਇਆ ਅਤੇ <strong>ਪੰਜ ਕਕਾਰ (ਕੇਸ, ਕੰਘਾ, ਕੜਾ, ਕਛਹਿਰਾ, ਕਿਰਪਾਨ)</strong> ਧਾਰਨ ਕਰਨ ਦਾ ਹੁਕਮ ਦਿੱਤਾ।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">⚔️ 3. ਚਮਕੌਰ ਸਾਹਿਬ, ਚਾਰ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹਾਦਤ, ਜ਼ਫ਼ਰਨਾਮਾ ਅਤੇ ਮੁਕਤਸਰ (1704–1705)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਸਰਸਾ ਨਦੀ ਦਾ ਵਿਛੋੜਾ ਅਤੇ ਚਮਕੌਰ ਦੀ ਲੜਾਈ (ਦਸੰਬਰ 1704):</strong> ਦਸੰਬਰ 1704 ਵਿੱਚ ਕਿਲ੍ਹਾ ਅਨੰਦਗੜ੍ਹ ਛੱਡਣ ਸਮੇਂ <strong>ਸਰਸਾ ਨਦੀ</strong> ਦੇ ਕੰਢੇ ਪਰਿਵਾਰ ਵਿਛੜ ਗਿਆ। <strong>22 ਦਸੰਬਰ 1704</strong> ਨੂੰ ਚਮਕੌਰ ਦੀ ਕੱਚੀ ਗੜ੍ਹੀ ਵਿੱਚ ਕੇਵਲ 40 ਸਿੰਘਾਂ ਨਾਲ ਦਸ ਲੱਖ ਮੁਗ਼ਲ ਫ਼ੌਜ ਦਾ ਮੁਕਾਬਲਾ ਕਰਦਿਆਂ ਵੱਡੇ ਸਾਹਿਬਜ਼ਾਦੇ <strong>ਬਾਬਾ ਅਜੀਤ ਸਿੰਘ ਜੀ (17 ਸਾਲ)</strong> ਅਤੇ <strong>ਬਾਬਾ ਜੁਝਾਰ ਸਿੰਘ ਜੀ (14 ਸਾਲ)</strong> ਅਤੇ ਤਿੰਨ ਪਿਆਰੇ (ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ, ਮੋਹਕਮ ਸਿੰਘ, ਸਾਹਿਬ ਸਿੰਘ) ਸ਼ਹੀਦ ਹੋਏ।</li>
              <li><strong>ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹਾਦਤ (26 ਦਸੰਬਰ 1704, ਸਰਹਿੰਦ):</strong> ਰਸੋਈਏ <strong>ਗੰਗੂ ਬ੍ਰਾਹਮਣ</strong> ਦੀ ਗ਼ੱਦਾਰੀ ਕਾਰਨ ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਅਤੇ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ — <strong>ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ (9 ਸਾਲ)</strong> ਅਤੇ <strong>ਬਾਬਾ ਫ਼ਤਹਿ ਸਿੰਘ ਜੀ (7 ਸਾਲ)</strong> — ਨੂੰ ਸਰਹਿੰਦ ਦੇ <strong>ਠੰਢੇ ਬੁਰਜ</strong> ਵਿੱਚ ਕੈਦ ਕੀਤਾ ਗਿਆ। ਮਲੇਰਕੋਟਲੇ ਦੇ ਨਵਾਬ <strong>ਸ਼ੇਰ ਮੁਹੰਮਦ ਖ਼ਾਨ</strong> ਵੱਲੋਂ 'ਹਾਅ ਦਾ ਨਾਅਰਾ' ਮਾਰਨ ਦੇ ਬਾਵਜੂਦ ਸੂਬੇਦਾਰ <strong>ਵਜ਼ੀਰ ਖ਼ਾਨ</strong> ਨੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਨੂੰ ਨੀਂਹਾਂ ਵਿੱਚ ਚਿਣਵਾ ਕੇ ਸ਼ਹੀਦ ਕਰ ਦਿੱਤਾ। <strong>ਦੀਵਾਨ ਟੋਡਰ ਮੱਲ</strong> ਨੇ ਖੜ੍ਹੀਆਂ ਸੋਨੇ ਦੀਆਂ ਮੋਹਰਾਂ ਵਿਛਾ ਕੇ ਸਸਕਾਰ ਲਈ ਜ਼ਮੀਨ ਖਰੀਦੀ।</li>
              <li><strong>ਜ਼ਫ਼ਰਨਾਮਾ (ਦੀਨਾ ਕਾਂਗੜ, 1705) ਅਤੇ ਮੁਕਤਸਰ ਦੀ ਲੜਾਈ (ਮਈ 1705):</strong> ਪਿੰਡ <strong>ਦੀਨਾ ਕਾਂਗੜ</strong> (ਮੋਗਾ) ਤੋਂ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਫ਼ਾਰਸੀ ਵਿੱਚ 111 ਸ਼ਿਅਰਾਂ ਵਾਲਾ <strong>'ਜ਼ਫ਼ਰਨਾਮਾ'</strong> (ਜਿੱਤ ਦੀ ਚਿੱਠੀ) ਭਾਈ ਦਇਆ ਸਿੰਘ ਹੱਥ ਭੇਜਿਆ। <strong>ਮਈ 1705</strong> ਵਿੱਚ <strong>ਖਿਦਰਾਣੇ ਦੀ ਢਾਬ (ਸ੍ਰੀ ਮੁਕਤਸਰ ਸਾਹਿਬ)</strong> ਵਿਖੇ <strong>ਮਾਈ ਭਾਗੋ ਜੀ</strong> ਦੀ ਪ੍ਰੇਰਨਾ ਨਾਲ ਵਾਪਸ ਆਏ 40 ਸਿੰਘਾਂ (ਜਥੇਦਾਰ <strong>ਭਾਈ ਮਹਾਂ ਸਿੰਘ</strong>) ਨੇ ਸ਼ਹਾਦਤ ਦਿੱਤੀ; ਗੁਰੂ ਜੀ ਨੇ 'ਬੇਦਾਵਾ' ਪਾੜ ਕੇ ਉਹਨਾਂ ਨੂੰ <strong>'ਚਾਲੀ ਮੁਕਤੇ'</strong> ਨਿਵਾਜਿਆ।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">📖 4. ਦਮਦਮਾ ਸਾਹਿਬ ('ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ') ਅਤੇ ਨਾਂਦੇੜ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਨੂੰ ਗੁਰਗੱਦੀ (1706–1708)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਦਮਦਮਾ ਸਾਹਿਬ (ਤਲਵੰਡੀ ਸਾਬੋ, 1706):</strong> ਇੱਥੇ ਗੁਰੂ ਜੀ ਨੇ ਆਪਣੀ ਕੰਠ-ਸ਼ਕਤੀ ਨਾਲ <strong>ਭਾਈ ਮਨੀ ਸਿੰਘ ਜੀ</strong> ਤੋਂ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਸੰਪੂਰਨ ਬੀੜ (<strong>ਦਮਦਮੀ ਬੀੜ</strong>) ਲਿਖਵਾਈ ਅਤੇ ਨੌਵੇਂ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ ਸ਼ਾਮਲ ਕੀਤੀ। ਇਸ ਅਸਥਾਨ ਨੂੰ <strong>'ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ'</strong> ਦਾ ਵਰ ਦਿੱਤਾ।</li>
              <li><strong>ਪ੍ਰਮੁੱਖ ਬਾਣੀਆਂ:</strong> ਜਾਪੁ ਸਾਹਿਬ, ਅਕਾਲ ਉਸਤਤਿ, ਬਚਿੱਤਰ ਨਾਟਕ (ਆਤਮਕਥਾ), ਚੰਡੀ ਦੀ ਵਾਰ, ਜ਼ਫ਼ਰਨਾਮਾ, ਸ਼ਬਦ ਹਜ਼ਾਰੇ, 33 ਸਵੱਈਏ, ਚੌਪਈ ਸਾਹਿਬ।</li>
              <li><strong>ਨਾਂਦੇੜ (ਹਜ਼ੂਰ ਸਾਹਿਬ, ਅਕਤੂਬਰ 1708):</strong> ਗੋਦਾਵਰੀ ਨਦੀ ਦੇ ਕੰਢੇ ਨਾਂਦੇੜ ਵਿਖੇ ਮਾਧੋ ਦਾਸ ਬੈਰਾਗੀ ਨੂੰ ਅੰਮ੍ਰਿਤ ਛਕਾ ਕੇ <strong>ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ</strong> ਬਣਾ ਕੇ ਪੰਜਾਬ ਭੇਜਿਆ। <strong>7 ਅਕਤੂਬਰ 1708</strong> ਨੂੰ ਜੋਤੀ-ਜੋਤਿ ਸਮਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਦੇਹਧਾਰੀ ਗੁਰੂ ਪਰੰਪਰਾ ਸਮਾਪਤ ਕਰਕੇ <strong>ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ</strong> ਨੂੰ ਜੁਗੋ-ਜੁਗ ਅਟੱਲ ਗੁਰੂ ਥਾਪਿਆ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🌟 1. प्रारंभिक जीवन, पांवटा साहिब एवं पूर्व-खालसा युद्ध (1666–1698)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>जन्म एवं परिवार:</strong> जन्म <strong>22 दिसंबर 1666</strong> को <strong>पटना साहिब (बिहार)</strong> में पिता श्री गुरु तेग बहादुर जी व माता गुजरी जी के घर (बचपन का नाम <strong>गोबिंद राय</strong>)। चार साहिबज़ादे: <strong>बाबा अजीत सिंह (1687), बाबा जुझार सिंह (1691), बाबा ज़ोरावर सिंह (1696) और बाबा फतेह सिंह (1699)</strong>। माता साहिब कौर जी को 'खालसा की माता' घोषित किया।</li>
              <li><strong>पांवटा साहिब (1685–1688) व पूर्व-खालसा युद्ध:</strong> नाहन के राजा <strong>मेदनी प्रकाश</strong> के निमंत्रण पर यमुना नदी तट पर पांवटा साहिब बसाया जहां दरबार में <strong>52 कवि</strong> थे। <strong>भंगाणी के युद्ध (1688)</strong> में राजा भीम चंद और फतेह शाह को हराया (पीर बुद्धू शाह और महंत कृपाल दास ने साथ दिया)। <strong>नदौन के युद्ध (1691)</strong> में मुगल सेनापति अलिफ खान को पराजित किया। आनंदपुर साहिब में 5 किले (आनंदगढ़, लोहगढ़, होलगढ़, फतेहगढ़, तारागढ़) बनवाए और <strong>मसंद प्रथा</strong> समाप्त की।</li>
            </ul>
          </div>

          <div class="bg-amber-950/50 border border-amber-500/30 p-5 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">🦁 2. खालसा पंथ की स्थापना (बैसाखी — 30 मार्च / 13 अप्रैल 1699)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>पंज प्यारे (केसगढ़ साहिब, आनंदपुर):</strong> (1) <strong>भाई दया सिंह</strong> (दया राम, खत्री — लाहौर), (2) <strong>भाई धरम सिंह</strong> (धरम दास, जाट — हस्तिनापुर/मेरठ), (3) <strong>भाई हिम्मत सिंह</strong> (हिम्मत राय, झीवर — जगन्नाथ पुरी, ओडिशा), (4) <strong>भाई मोहकम सिंह</strong> (मोहकम चंद, छींबा — द्वारका, गुजरात), (5) <strong>भाई साहिब सिंह</strong> (साहिब चंद, नाई — बीदर, कर्नाटक)।</li>
              <li><strong>पांच ककार एवं "आपे गुर चेला":</strong> 5 बाणियों के पाठ के साथ खंडे-बाटे का अमृत तैयार किया (माता जीतो जी ने बताशे डाले)। पंज प्यारों से स्वयं अमृत छककर गोबिंद राय से <strong>'गुरु गोबिंद सिंह'</strong> बने। पुरुषों को <strong>'सिंह'</strong> व महिलाओं को <strong>'कौर'</strong> उपनाम तथा <strong>पांच ककार (केश, कंघा, कड़ा, कछहरा, कृपाण)</strong> दिए।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">⚔️ 3. चमकौर युद्ध, साहिबज़ादों की शहादत, ज़फ़रनामा एवं मुक्तसर (1704–1705)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>चमकौर का युद्ध (22 दिसंबर 1704):</strong> सरसा नदी पर परिवार बिछड़ने के बाद चमकौर की कच्ची गढ़ी में मात्र 40 सिखों के साथ लड़ते हुए बड़े साहिबज़ादे <strong>बाबा अजीत सिंह (17 वर्ष)</strong> व <strong>बाबा जुझार सिंह (14 वर्ष)</strong> और तीन प्यारे शहीद हुए।</li>
              <li><strong>सरहिंद की शहादत (26 दिसंबर 1704):</strong> गंगू ब्राह्मण के विश्वासघात के बाद सरहिंद के नवाब <strong>वज़ीर खान</strong> ने छोटे साहिबज़ादों <strong>बाबा ज़ोरावर सिंह (9 वर्ष)</strong> व <strong>बाबा फतेह सिंह (7 वर्ष)</strong> को दीवार में जिंदा चिनवाकर शहीद कर दिया (मलेरकोटला के नवाब <strong>शेर मुहम्मद खान</strong> ने 'हाअ दा नारा' लगाया; <strong>दीवान टोडर मल्ल</strong> ने खड़ी अशर्फियां बिछाकर अंतिम संस्कार हेतु भूमि खरीदी)।</li>
              <li><strong>ज़फ़रनामा एवं मुक्तसर का युद्ध (मई 1705):</strong> ग्राम <strong>दीना कांगड़</strong> से औरंगज़ेब को फारसी में 111 छंदों का <strong>'ज़फ़रनामा'</strong> भेजा। मई 1705 में <strong>खिदराना (श्री मुक्तसर साहिब)</strong> में <strong>माई भागो</strong> की प्रेरणा से लौटे 40 सिखों (जत्थेदार <strong>भाई महा सिंह</strong>) की शहादत पर बेदावा फाड़कर उन्हें <strong>'चाली मुक्ते'</strong> घोषित किया।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">📖 4. दमदमा साहिब ('गुरु की काशी') एवं नांदेड़ में शाश्वत गुरुगद्दी (1706–1708)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>दमदमा साहिब (तलवंडी साबो, 1706):</strong> यहां <strong>भाई मनी सिंह जी</strong> से श्री गुरु ग्रंथ साहिब की संपूर्ण <strong>दमदमी बीड़</strong> लिखवाई (जिसमें गुरु तेग बहादुर जी की बाणी जोड़ी गई)। इसे <strong>'गुरु की काशी'</strong> कहा जाता है।</li>
              <li><strong>नांदेड़ (हज़ूर साहिब, अक्टूबर 1708):</strong> गोदावरी नदी तट पर माधो दास बैरागी को <strong>बाबा बंदा सिंह बहादुर</strong> बनाकर पंजाब भेजा और <strong>7 अक्टूबर 1708</strong> को ज्योति-जोत समाने से पूर्व <strong>श्री गुरु ग्रंथ साहिब जी</strong> को शाश्वत गुरु घोषित किया।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Matching the Panj Pyare with Their Native Regions and Castes',
          pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਦਾ ਉਹਨਾਂ ਦੇ ਮੂਲ ਸ਼ਹਿਰਾਂ ਅਤੇ ਜਾਤਾਂ ਨਾਲ ਮਿਲਾਨ',
          hi: 'पंज प्यारों का उनके मूल नगरों एवं जातियों से मिलान',
        },
        problem: {
          en: 'Match the five Panj Pyare initiated in 1699 with their respective cities and regions: (1) Bhai Daya Singh, (2) Bhai Dharam Singh, (3) Bhai Himmat Singh, (4) Bhai Mohkam Singh, (5) Bhai Sahib Singh.',
          pa: '1699 ਵਿੱਚ ਸਾਜੇ ਗਏ ਪੰਜ ਪਿਆਰਿਆਂ ਦਾ ਉਹਨਾਂ ਦੇ ਮੂਲ ਸ਼ਹਿਰਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ: (1) ਭਾਈ ਦਇਆ ਸਿੰਘ, (2) ਭਾਈ ਧਰਮ ਸਿੰਘ, (3) ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ, (4) ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ, (5) ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ।',
          hi: '1699 में दीक्षित पंज प्यारों का उनके मूल नगरों से मिलान कीजिए: (1) भाई दया सिंह, (2) भाई धरम सिंह, (3) भाई हिम्मत सिंह, (4) भाई मोहकम सिंह, (5) भाई साहिब सिंह।',
        },
        steps: {
          en: [
            'Step 1: Daya Ram (Khatri) was from Lahore (North — Punjab).',
            'Step 2: Dharam Das (Jat) was from Hastinapur / Meerut (North-Central — UP).',
            'Step 3: Himmat Rai (Jhiwar) was from Jagannath Puri (East — Odisha).',
            'Step 4: Mohkam Chand (Chhimba) was from Dwarka (West — Gujarat).',
            'Step 5: Sahib Chand (Nai) was from Bidar (South — Karnataka).',
          ],
          pa: [
            'ਕਦਮ 1: ਭਾਈ ਦਇਆ ਸਿੰਘ (ਦਇਆ ਰਾਮ, ਖੱਤਰੀ) — ਲਾਹੌਰ (ਪੰਜਾਬ)।',
            'ਕਦਮ 2: ਭਾਈ ਧਰਮ ਸਿੰਘ (ਧਰਮ ਦਾਸ, ਜੱਟ) — ਹਸਤਨਾਪੁਰ / ਮੇਰਠ (ਉੱਤਰ ਪ੍ਰਦੇਸ਼)।',
            'ਕਦਮ 3: ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ (ਹਿੰਮਤ ਰਾਇ, ਝੀਵਰ) — ਜਗਨਨਾਥ ਪੁਰੀ (ਉੜੀਸਾ)।',
            'ਕਦਮ 4: ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ (ਮੋਹਕਮ ਚੰਦ, ਛੀਂਬਾ) — ਦੁਆਰਕਾ (ਗੁਜਰਾਤ)।',
            'ਕਦਮ 5: ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ (ਸਾਹਿਬ ਚੰਦ, ਨਾਈ) — ਬੀਦਰ (ਕਰਨਾਟਕ)।',
          ],
          hi: [
            'चरण 1: भाई दया सिंह (दया राम, खत्री) — लाहौर (पंजाब)।',
            'चरण 2: भाई धरम सिंह (धरम दास, जाट) — हस्तिनापुर / मेरठ (उत्तर प्रदेश)।',
            'चरण 3: भाई हिम्मत सिंह (हिम्मत राय, झीवर) — जगन्नाथ पुरी (ओडिशा)।',
            'चरण 4: भाई मोहकम सिंह (मोहकम चंद, छींबा) — द्वारका (गुजरात)।',
            'चरण 5: भाई साहिब सिंह (साहिब चंद, नाई) — बीदर (कर्नाटक)।',
          ],
        },
        solution: {
          en: 'Daya Singh = Lahore | Dharam Singh = Hastinapur | Himmat Singh = Puri (Odisha) | Mohkam Singh = Dwarka (Gujarat) | Sahib Singh = Bidar (Karnataka).',
          pa: 'ਦਇਆ ਸਿੰਘ = ਲਾਹੌਰ | ਧਰਮ ਸਿੰਘ = ਹਸਤਨਾਪੁਰ | ਹਿੰਮਤ ਸਿੰਘ = ਜਗਨਨਾਥ ਪੁਰੀ | ਮੋਹਕਮ ਸਿੰਘ = ਦੁਆਰਕਾ | ਸਾਹਿਬ ਸਿੰਘ = ਬੀਦਰ।',
          hi: 'दया सिंह = लाहौर | धरम सिंह = हस्तिनापुर | हिम्मत सिंह = जगन्नाथ पुरी | मोहकम सिंह = द्वारका | साहिब सिंह = बीदर।',
        },
      },
      {
        title: {
          en: 'Chronological Order of Guru Gobind Singh Ji’s Major Battles',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀਆਂ ਪ੍ਰਮੁੱਖ ਲੜਾਈਆਂ ਦਾ ਕਾਲਕ੍ਰਮ',
          hi: 'श्री गुरु गोबिंद सिंह जी के प्रमुख युद्धों का कालक्रम',
        },
        problem: {
          en: 'Arrange the following battles in chronological order: (A) Battle of Chamkaur Sahib, (B) Battle of Bhangani, (C) Battle of Khidrana (Muktsar), (D) Battle of Nadaun.',
          pa: 'ਹੇਠ ਲਿਖੀਆਂ ਲੜਾਈਆਂ ਨੂੰ ਸਹੀ ਕਾਲਕ੍ਰਮ ਵਿੱਚ ਲਗਾਓ: (A) ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਲੜਾਈ, (B) ਭੰਗਾਣੀ ਦੀ ਲੜਾਈ, (C) ਖਿਦਰਾਣਾ (ਮੁਕਤਸਰ) ਦੀ ਲੜਾਈ, (D) ਨਦੌਣ ਦੀ ਲੜਾਈ।',
          hi: 'निम्नलिखित युद्धों को सही कालक्रम में व्यवस्थित कीजिए: (A) चमकौर साहिब का युद्ध, (B) भंगाणी का युद्ध, (C) खिदराना (मुक्तसर) का युद्ध, (D) नदौन का युद्ध।',
        },
        steps: {
          en: [
            'Step 1: Battle of Bhangani (Sept 1688) and Battle of Nadaun (1691) belong to the Pre-Khalsa period (before 1699).',
            'Step 2: Battle of Chamkaur Sahib (Dec 1704) and Battle of Khidrana/Muktsar (May 1705) belong to the Post-Khalsa period.',
          ],
          pa: [
            'ਕਦਮ 1: ਭੰਗਾਣੀ ਦੀ ਲੜਾਈ (1688) ਅਤੇ ਨਦੌਣ ਦੀ ਲੜਾਈ (1691) ਖ਼ਾਲਸਾ ਸਾਜਨਾ (1699) ਤੋਂ ਪਹਿਲਾਂ ਦੀਆਂ ਹਨ।',
            'ਕਦਮ 2: ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਲੜਾਈ (ਦਸੰਬਰ 1704) ਅਤੇ ਖਿਦਰਾਣਾ/ਮੁਕਤਸਰ ਦੀ ਲੜਾਈ (ਮਈ 1705) ਖ਼ਾਲਸਾ ਸਾਜਨਾ ਤੋਂ ਬਾਅਦ ਦੀਆਂ ਹਨ।',
          ],
          hi: [
            'चरण 1: भंगाणी का युद्ध (1688) और नदौन का युद्ध (1691) खालसा स्थापना (1699) से पूर्व के हैं।',
            'चरण 2: चमकौर साहिब का युद्ध (दिसंबर 1704) और खिदराना/मुक्तसर का युद्ध (मई 1705) खालसा स्थापना के बाद के हैं।',
          ],
        },
        solution: {
          en: 'Bhangani (1688) → Nadaun (1691) → Chamkaur Sahib (Dec 1704) → Khidrana / Muktsar (May 1705).',
          pa: 'ਭੰਗਾਣੀ (1688) → ਨਦੌਣ (1691) → ਚਮਕੌਰ ਸਾਹਿਬ (ਦਸੰਬਰ 1704) → ਖਿਦਰਾਣਾ / ਮੁਕਤਸਰ (ਮਈ 1705)।',
          hi: 'भंगाणी (1688) → नदौन (1691) → चमकौर साहिब (दिसंबर 1704) → खिदराना / मुक्तसर (मई 1705)।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Guru Gobind Singh Ji’s compositions (such as Jaap Sahib, Chaupai Sahib, and Zafarnama) are included in Sri Guru Granth Sahib Ji.',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀਆਂ ਰਚਨਾਵਾਂ (ਜਿਵੇਂ ਜਾਪੁ ਸਾਹਿਬ, ਚੌਪਈ ਸਾਹਿਬ) ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ ਹਨ।',
          hi: 'श्री गुरु गोबिंद सिंह जी की रचनाएं (जैसे जाप साहिब, चौपई साहिब) श्री गुरु ग्रंथ साहिब जी में दर्ज हैं।',
        },
        correction: {
          en: 'When Guru Gobind Singh Ji prepared the final Damdami Bir at Talwandi Sabo (1706), he added the 115 hymns of his father, the 9th Guru Sri Guru Tegh Bahadur Ji, to Sri Guru Granth Sahib Ji, but did NOT include his own compositions. His compositions were later compiled separately by Bhai Mani Singh Ji into the Dasam Granth.',
          pa: '1706 ਵਿੱਚ ਦਮਦਮਾ ਸਾਹਿਬ ਵਿਖੇ ਬੀੜ ਤਿਆਰ ਕਰਵਾਉਣ ਸਮੇਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਨੌਵੇਂ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ ਸ਼ਾਮਲ ਕੀਤੀ ਸੀ, ਪਰ ਆਪਣੀ ਬਾਣੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਕੀਤੀ। ਆਪ ਜੀ ਦੀਆਂ ਰਚਨਾਵਾਂ ਦਸਮ ਗ੍ਰੰਥ ਵਿੱਚ ਹਨ।',
          hi: '1706 में दमदमा साहिब में बीड़ तैयार करवाते समय गुरु गोबिंद सिंह जी ने नौवें गुरु तेग बहादुर जी की बाणी जोड़ी थी, किंतु अपनी रचनाएं गुरु ग्रंथ साहिब में शामिल नहीं कीं। उनकी रचनाएं दशम ग्रंथ में संकलित हैं।',
        },
        whyItMatters: {
          en: 'Frequently tested in Punjab Master Cadre & PSSSB exams.',
          pa: 'ਮਾਸਟਰ ਕੈਡਰ ਅਤੇ ਪੀ.ਐੱਸ.ਐੱਸ.ਐੱਸ.ਬੀ. ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਇਹ ਪ੍ਰਸ਼ਨ ਅਕਸਰ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'मास्टर कैडर और पीएसएसएसबी परीक्षाओं में यह प्रश्न बार-बार पूछा जाता है।',
        },
      },
      {
        misconception: {
          en: 'All four Sahibzadas attained martyrdom at Sirhind.',
          pa: 'ਚਾਰੇ ਸਾਹਿਬਜ਼ਾਦੇ ਸਰਹਿੰਦ ਵਿਖੇ ਸ਼ਹੀਦ ਹੋਏ ਸਨ।',
          hi: 'चारों साहिबज़ादे सरहिंद में शहीद हुए थे।',
        },
        correction: {
          en: 'The two Elder Sahibzadas (Baba Ajit Singh Ji, age 17, and Baba Jujhar Singh Ji, age 14) died fighting on the battlefield at the Battle of Chamkaur Sahib (22 Dec 1704). The two Younger Sahibzadas (Baba Zorawar Singh Ji, age 9, and Baba Fateh Singh Ji, age 7) were bricked alive and martyred at Sirhind / Fatehgarh Sahib (26 Dec 1704).',
          pa: 'ਵੱਡੇ ਸਾਹਿਬਜ਼ਾਦੇ (ਬਾਬਾ ਅਜੀਤ ਸਿੰਘ ਜੀ ਅਤੇ ਬਾਬਾ ਜੁਝਾਰ ਸਿੰਘ ਜੀ) ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ (22 ਦਸੰਬਰ 1704) ਵਿੱਚ ਜੂਝਦਿਆਂ ਸ਼ਹੀਦ ਹੋਏ, ਜਦਕਿ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦੇ (ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ ਅਤੇ ਬਾਬਾ ਫ਼ਤਹਿ ਸਿੰਘ ਜੀ) ਸਰਹਿੰਦ (ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ) ਵਿਖੇ (26 ਦਸੰਬਰ 1704) ਨੀਂਹਾਂ ਵਿੱਚ ਚਿਣੇ ਗਏ।',
          hi: 'बड़े साहिबज़ादे (बाबा अजीत सिंह व बाबा जुझार सिंह) चमकौर साहिब के युद्ध (22 दिसंबर 1704) में लड़ते हुए शहीद हुए, जबकि छोटे साहिबज़ादे (बाबा ज़ोरावर सिंह व बाबा फतेह सिंह) सरहिंद (फतेहगढ़ साहिब) में (26 दिसंबर 1704) दीवार में चिनवाए गए।',
        },
        whyItMatters: {
          en: 'Essential distinction between the martyrs of Chamkaur Sahib and Fatehgarh Sahib (Sirhind).',
          pa: 'ਵੱਡੇ ਅਤੇ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੇ ਸ਼ਹੀਦੀ ਅਸਥਾਨਾਂ (ਚਮਕੌਰ ਸਾਹਿਬ ਬਨਾਮ ਸਰਹਿੰਦ) ਦਾ ਸਪੱਸ਼ਟ ਅੰਤਰ।',
          hi: 'बड़े और छोटे साहिबज़ादों के बलिदान स्थलों (चमकौर साहिब बनाम सरहिंद) का स्पष्ट अंतर।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Birth: 22 Dec 1666 at Patna Sahib; Parents: Guru Tegh Bahadur Ji & Mata Gujri Ji; Paonta Sahib (Yamuna bank, 52 poets); Pre-Khalsa Battles: Bhangani (1688, Pir Budhu Shah helped) & Nadaun (1691).',
          'Creation of Khalsa: Baisakhi 1699 at Kesgarh Sahib, Anandpur; Panj Pyare (Daya Singh-Lahore, Dharam Singh-Hastinapur, Himmat Singh-Puri, Mohkam Singh-Dwarka, Sahib Singh-Bidar); 5 Ks; abolished Masand system.',
          'Chamkaur Sahib (22 Dec 1704): Elder Sahibzadas (Baba Ajit Singh & Baba Jujhar Singh) + 3 Panj Pyare martyred; Sirhind (26 Dec 1704): Younger Sahibzadas (Baba Zorawar Singh & Baba Fateh Singh) bricked alive by Wazir Khan (Nawab Sher Muhammad Khan of Malerkotla protested; Diwan Todar Mal bought cremation land with gold coins).',
          'Zafarnama (1705): Written in Persian at Dina Kangar to Aurangzeb; Battle of Khidrana / Muktsar (May 1705): Mai Bhago & Bhai Maha Singh (40 Mukte, Bedawa torn); Damdama Sahib (1706, "Guru Ki Kashi", Bhai Mani Singh wrote Damdami Bir); Nanded (Oct 1708, Eternal Guruship to Sri Guru Granth Sahib Ji).',
        ],
        pa: [
          'ਜਨਮ: 22 ਦਸੰਬਰ 1666 (ਪਟਨਾ ਸਾਹਿਬ); ਪਾਉਂਟਾ ਸਾਹਿਬ (52 ਕਵੀ); ਪੂਰਵ-ਖ਼ਾਲਸਾ ਲੜਾਈਆਂ: ਭੰਗਾਣੀ (1688, ਪੀਰ ਬੁੱਧੂ ਸ਼ਾਹ) ਅਤੇ ਨਦੌਣ (1691)।',
          'ਖ਼ਾਲਸਾ ਸਾਜਨਾ: ਵਿਸਾਖੀ 1699 (ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ, ਅਨੰਦਪੁਰ); ਪੰਜ ਪਿਆਰੇ; ਪੰਜ ਕਕਾਰ; ਮਸੰਦ ਪ੍ਰਥਾ ਦਾ ਅੰਤ।',
          'ਚਮਕੌਰ ਸਾਹਿਬ (22 ਦਸੰਬਰ 1704): ਵੱਡੇ ਸਾਹਿਬਜ਼ਾਦੇ (ਬਾਬਾ ਅਜੀਤ ਸਿੰਘ ਤੇ ਬਾਬਾ ਜੁਝਾਰ ਸਿੰਘ) ਸ਼ਹੀਦ; ਸਰਹਿੰਦ (26 ਦਸੰਬਰ 1704): ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦੇ (ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਤੇ ਬਾਬਾ ਫ਼ਤਹਿ ਸਿੰਘ) ਸ਼ਹੀਦ (ਮਲੇਰਕੋਟਲਾ ਦੇ ਨਵਾਬ ਸ਼ੇਰ ਮੁਹੰਮਦ ਖ਼ਾਨ ਦਾ ਹਾਅ ਦਾ ਨਾਅਰਾ; ਦੀਵਾਨ ਟੋਡਰ ਮੱਲ ਵੱਲੋਂ ਸੋਨੇ ਦੀਆਂ ਮੋਹਰਾਂ ਨਾਲ ਜ਼ਮੀਨ ਖਰੀਦ)।',
          'ਜ਼ਫ਼ਰਨਾਮਾ (ਦੀਨਾ ਕਾਂਗੜ, 1705, ਫ਼ਾਰਸੀ); ਖਿਦਰਾਣਾ/ਮੁਕਤਸਰ (ਮਈ 1705, ਮਾਈ ਭਾਗੋ ਤੇ ਭਾਈ ਮਹਾਂ ਸਿੰਘ, 40 ਮੁਕਤੇ); ਦਮਦਮਾ ਸਾਹਿਬ (1706, ਭਾਈ ਮਨੀ ਸਿੰਘ ਤੋਂ ਦਮਦਮੀ ਬੀੜ); ਨਾਂਦੇੜ (7 ਅਕਤੂਬਰ 1708, ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਨੂੰ ਗੁਰਗੱਦੀ)।',
        ],
        hi: [
          'जन्म: 22 दिसंबर 1666 (पटना साहिब); पांवटा साहिब (52 कवि); पूर्व-खालसा युद्ध: भंगाणी (1688, पीर बुद्धू शाह) व नदौन (1691)।',
          'खालसा स्थापना: बैसाखी 1699 (केसगढ़ साहिब, आनंदपुर); पंज प्यारे; पांच ककार; मसंद प्रथा समाप्त।',
          'चमकौर साहिब (22 दिसंबर 1704): बड़े साहिबज़ादे (बाबा अजीत सिंह व बाबा जुझार सिंह) शहीद; सरहिंद (26 दिसंबर 1704): छोटे साहिबज़ादे (बाबा ज़ोरावर सिंह व बाबा फतेह सिंह) शहीद (मलेरकोटला नवाब शेर मुहम्मद खान का विरोध; दीवान टोडर मल्ल द्वारा स्वर्ण मुद्राओं से भूमि खरीद)।',
          'ज़फ़रनामा (दीना कांगड़, 1705, फारसी); खिदराना/मुक्तसर (मई 1705, माई भागो व भाई महा सिंह, 40 मुक्ते); दमदमा साहिब (1706, भाई मनी सिंह द्वारा दमदमी बीड़); नांदेड़ (7 अक्टूबर 1708, श्री गुरु ग्रंथ साहिब को गुरुगद्दी)।',
        ],
      },
      examTraps: {
        en: [
          'Trap: Guru Gobind Singh Ji’s autobiography is "Bachittar Natak" (part of Dasam Granth), whereas "Zafarnama" is his Persian epistle to Aurangzeb written at Dina Kangar.',
          'Trap: Bhai Mani Singh Ji was the scribe of the Damdami Bir (1706), whereas Bhai Gurdas Ji was the scribe of the original Adi Granth (1604).',
        ],
        pa: [
          'ਧੋਖਾ: ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਆਤਮਕਥਾ "ਬਚਿੱਤਰ ਨਾਟਕ" ਹੈ, ਜਦਕਿ "ਜ਼ਫ਼ਰਨਾਮਾ" ਦੀਨਾ ਕਾਂਗੜ ਤੋਂ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਲਿਖਿਆ ਫ਼ਾਰਸੀ ਪੱਤਰ ਹੈ।',
          'ਧੋਖਾ: 1706 ਦੀ ਦਮਦਮੀ ਬੀੜ ਦੇ ਲਿਖਾਰੀ ਭਾਈ ਮਨੀ ਸਿੰਘ ਜੀ ਸਨ (1604 ਦੇ ਆਦਿ ਗ੍ਰੰਥ ਦੇ ਲਿਖਾਰੀ ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਸਨ)।',
        ],
        hi: [
          'धोखा: गुरु गोबिंद सिंह जी की आत्मकथा "बचित्तर नाटक" है, जबकि "ज़फ़रनामा" दीना कांगड़ से औरंगज़ेब को लिखा फारसी पत्र है।',
          'धोखा: 1706 की दमदमी बीड़ के लिपिक भाई मनी सिंह जी थे (1604 के आदि ग्रंथ के लिपिक भाई गुरदास जी थे)।',
        ],
      },
    },
    summary: {
      en: 'Sri Guru Gobind Singh Ji (1666–1708), the 10th Sikh Guru, fought the battles of Bhangani (1688) and Nadaun (1691), created the Khalsa Panth on Baisakhi 1699 at Anandpur Sahib by initiating the Panj Pyare with Khande di Pahul and the 5 Ks, sacrificed all four Sahibzadas at Chamkaur Sahib and Sirhind (1704), wrote the Zafarnama at Dina Kangar (1705), blessed the 40 Mukte at Muktsar (1705), finalized the Damdami Bir at Talwandi Sabo (1706), and conferred eternal Guruship upon Sri Guru Granth Sahib Ji at Nanded in October 1708.',
      pa: 'ਦਸਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (1666–1708) ਨੇ 1699 ਦੀ ਵਿਸਾਖੀ ਨੂੰ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ ਕੀਤੀ, ਧਰਮ ਅਤੇ ਮਨੁੱਖੀ ਆਜ਼ਾਦੀ ਲਈ ਚਾਰੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਅਤੇ ਸਰਬੰਸ ਦੀ ਕੁਰਬਾਨੀ ਦਿੱਤੀ, ਦੀਨਾ ਕਾਂਗੜ ਤੋਂ ਜ਼ਫ਼ਰਨਾਮਾ ਲਿਖਿਆ, ਦਮਦਮਾ ਸਾਹਿਬ ਵਿਖੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦੀ ਸੰਪੂਰਨ ਬੀੜ ਤਿਆਰ ਕਰਵਾਈ ਅਤੇ 1708 ਵਿੱਚ ਨਾਂਦੇੜ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਜੁਗੋ-ਜੁਗ ਅਟੱਲ ਗੁਰੂ ਥਾਪਿਆ।',
      hi: 'दसवें गुरु श्री गुरु गोबिंद सिंह जी (1666–1708) ने 1699 की बैसाखी को आनंदपुर साहिब में खालसा पंथ की स्थापना की, धर्म रक्षार्थ चारों साहिबज़ादों और सर्वस्व का बलिदान दिया, दीना कांगड़ से ज़फ़रनामा लिखा, दमदमा साहिब में संपूर्ण बीड़ तैयार करवाई और 1708 में नांदेड़ में श्री गुरु ग्रंथ साहिब जी को शाश्वत गुरु घोषित किया।',
    },
    keyNotes: {
      en: [
        '📌 22 Dec 1666 — Sri Guru Gobind Singh Ji born at Patna Sahib (Bihar); 1688 — Battle of Bhangani.',
        '📌 Baisakhi 1699 — Creation of Khalsa at Kesgarh Sahib, Anandpur; Panj Pyare & 5 Ks.',
        '📌 Dec 1704 — Martyrdom of Elder Sahibzadas at Chamkaur Sahib & Younger Sahibzadas at Sirhind.',
        '📌 1705–1708 — Zafarnama at Dina Kangar; 40 Mukte at Muktsar; Damdami Bir (1706); Eternal Guruship to Guru Granth Sahib at Nanded (1708).',
      ],
      pa: [
        '📌 22 ਦਸੰਬਰ 1666 — ਪਟਨਾ ਸਾਹਿਬ ਵਿਖੇ ਜਨਮ; 1688 — ਭੰਗਾਣੀ ਦੀ ਲੜਾਈ।',
        '📌 ਵਿਸਾਖੀ 1699 — ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ) ਵਿਖੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ।',
        '📌 ਦਸੰਬਰ 1704 — ਚਮਕੌਰ ਸਾਹਿਬ ਵਿਖੇ ਵੱਡੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਅਤੇ ਸਰਹਿੰਦ ਵਿਖੇ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹਾਦਤ।',
        '📌 1705–1708 — ਦੀਨਾ ਕਾਂਗੜ ਤੋਂ ਜ਼ਫ਼ਰਨਾਮਾ; ਮੁਕਤਸਰ ਦੇ 40 ਮੁਕਤੇ; ਦਮਦਮੀ ਬੀੜ (1706); ਨਾਂਦੇੜ ਵਿਖੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਨੂੰ ਗੁਰਗੱਦੀ (1708)।',
      ],
      hi: [
        '📌 22 दिसंबर 1666 — पटना साहिब में जन्म; 1688 — भंगाणी का युद्ध।',
        '📌 बैसाखी 1699 — केसगढ़ साहिब (आनंदपुर साहिब) में खालसा पंथ की स्थापना।',
        '📌 दिसंबर 1704 — चमकौर साहिब में बड़े साहिबज़ादों और सरहिंद में छोटे साहिबज़ादों की शहादत।',
        '📌 1705–1708 — दीना कांगड़ से ज़फ़रनामा; मुक्तसर के 40 मुक्ते; दमदमी बीड़ (1706); नांदेड़ में गुरु ग्रंथ साहिब को गुरुगद्दी (1708)।',
      ],
    },
    flashcards: [
      {
        id: 'fc-ggs-1',
        q: {
          en: 'From which village and in which language did Sri Guru Gobind Singh Ji write the "Zafarnama" to Emperor Aurangzeb?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਔਰੰਗਜ਼ੇਬ ਨੂੰ "ਜ਼ਫ਼ਰਨਾਮਾ" ਕਿਹੜੇ ਪਿੰਡ ਤੋਂ ਅਤੇ ਕਿਹੜੀ ਭਾਸ਼ਾ ਵਿੱਚ ਲਿਖਿਆ ਸੀ?',
          hi: 'श्री गुरु गोबिंद सिंह जी ने औरंगज़ेब को "ज़फ़रनामा" किस गांव से और किस भाषा में लिखा था?',
        },
        a: {
          en: 'From village Dina Kangar (Moga district) in the Persian language (111 verses), delivered by Bhai Daya Singh and Bhai Dharam Singh.',
          pa: 'ਪਿੰਡ ਦੀਨਾ ਕਾਂਗੜ (ਜ਼ਿਲ੍ਹਾ ਮੋਗਾ) ਤੋਂ ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਵਿੱਚ (111 ਸ਼ਿਅਰ)।',
          hi: 'ग्राम दीना कांगड़ (जिला मोगा) से फारसी भाषा में (111 छंद)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ggs-2',
        q: {
          en: 'Which Nawab raised a voice of protest ("Haah da Naara") against Wazir Khan’s order to brick alive the two younger Sahibzadas at Sirhind?',
          pa: 'ਸਰਹਿੰਦ ਵਿਖੇ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਨੂੰ ਨੀਂਹਾਂ ਵਿੱਚ ਚਿਣਵਾਉਣ ਦੇ ਹੁਕਮ ਵਿਰੁੱਧ ਕਿਹੜੇ ਨਵਾਬ ਨੇ "ਹਾਅ ਦਾ ਨਾਅਰਾ" ਮਾਰਿਆ ਸੀ?',
          hi: 'सरहिंद में छोटे साहिबज़ादों को दीवार में चिनवाने के आदेश के विरुद्ध किस नवाब ने "हाअ दा नारा" लगाया था?',
        },
        a: {
          en: 'Nawab Sher Muhammad Khan of Malerkotla.',
          pa: 'ਮਲੇਰਕੋਟਲਾ ਦੇ ਨਵਾਬ ਸ਼ੇਰ ਮੁਹੰਮਦ ਖ਼ਾਨ ਨੇ।',
          hi: 'मलेरकोटला के नवाब शेर मुहम्मद खान ने।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ggs-3',
        q: {
          en: 'Who acted as the scribe when Sri Guru Gobind Singh Ji dictated the complete Damdami Bir of Sri Guru Granth Sahib Ji at Damdama Sahib (Talwandi Sabo) in 1706?',
          pa: '1706 ਵਿੱਚ ਦਮਦਮਾ ਸਾਹਿਬ (ਤਲਵੰਡੀ ਸਾਬੋ) ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਉਚਾਰੀ ਦਮਦਮੀ ਬੀੜ ਦੇ ਲਿਖਾਰੀ ਕੌਣ ਸਨ?',
          hi: '1706 में दमदमा साहिब (तलवंडी साबो) में श्री गुरु गोबिंद सिंह जी द्वारा लिखवाई गई दमदमी बीड़ के लिपिक कौन थे?',
        },
        a: {
          en: 'Bhai Mani Singh Ji (while Baba Deep Singh Ji prepared copies and arranged ink/paper).',
          pa: 'ਭਾਈ ਮਨੀ ਸਿੰਘ ਜੀ (ਅਤੇ ਬਾਬਾ ਦੀਪ ਸਿੰਘ ਜੀ ਨੇ ਉਤਾਰੇ ਤਿਆਰ ਕੀਤੇ)।',
          hi: 'भाई मनी सिंह जी (तथा बाबा दीप सिंह जी ने प्रतियां तैयार कीं)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-ggs-4',
        q: {
          en: 'What is the title of Sri Guru Gobind Singh Ji’s autobiography included in the Dasam Granth?',
          pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਆਤਮਕਥਾ (ਸਵੈ-ਜੀਵਨੀ) ਦਾ ਨਾਮ ਕੀ ਹੈ?',
          hi: 'श्री गुरु गोबिंद सिंह जी की आत्मकथा का नाम क्या है?',
        },
        a: {
          en: 'Bachittar Natak (Wondrous Drama).',
          pa: 'ਬਚਿੱਤਰ ਨਾਟਕ (ਅਪਨੀ ਕਥਾ)।',
          hi: 'बचित्तर नाटक (अपनी कथा)।',
        },
        difficulty: 'easy',
      },
    ],
    videos: [
      {
        title: 'Sri Guru Gobind Singh Ji: Creation of Khalsa, Battles & Legacy',
        channel: 'PSEB / NCERT History Archive',
        url: 'https://www.youtube.com/results?search_query=Sri+Guru+Gobind+Singh+Ji+History+of+Punjab',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'History and Culture of Punjab (Class 10)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Chapter 7: Sri Guru Gobind Singh Ji, Creation of the Khalsa and His Battles',
        type: 'state-board',
      },
    ],
    syllabusReference: {
      title: 'ERB Punjab Master Cadre SST & PSSSB History Syllabus',
      url: 'https://educationrecruitmentboard.com',
      body: 'Education Recruitment Board (ERB) & PSSSB',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 6: BABA BANDA SINGH BAHADUR, DAL KHALSA & THE 12 SIKH MISLS (1708 - 1799)
  // ==========================================================================
  'banda-singh-bahadur-misls': {
    id: 'banda-singh-bahadur-misls',
    topicId: 'banda-singh-bahadur-misls',
    subjectId: 'social-science',
    category: 'history',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Baba Banda Singh Bahadur, Dal Khalsa, Ghallugharas & The 12 Sikh Misls (1708–1799)',
      pa: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ, ਦਲ ਖ਼ਾਲਸਾ, ਘੱਲੂਘਾਰੇ ਅਤੇ 12 ਸਿੱਖ ਮਿਸਲਾਂ (1708–1799)',
      hi: 'बाबा बंदा सिंह बहादुर, दल खालसा, घल्लूघारे एवं 12 सिख मिसलें (1708–1799)',
    },
    examRelevance: 'Punjab Master Cadre SST (3–4 Qs), PSSSB Clerk (2–3 Qs), ETT, Patwari & Police',
    estimatedTime: '45 mins',
    prerequisites: {
      en: [
        'Commissioning of Banda Singh Bahadur by Sri Guru Gobind Singh Ji at Nanded in September 1708.',
        'Decline of the Mughal Empire after Aurangzeb (Bahadur Shah I, Farrukhsiyar) and Afghan invasions of Nadir Shah (1739) and Ahmad Shah Abdali (1748–1767).',
      ],
      pa: [
        'ਸਤੰਬਰ 1708 ਵਿੱਚ ਨਾਂਦੇੜ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੂੰ ਪੰਜਾਬ ਭੇਜਣਾ।',
        'ਔਰੰਗਜ਼ੇਬ ਤੋਂ ਬਾਅਦ ਮੁਗ਼ਲ ਸਾਮਰਾਜ ਦਾ ਪਤਨ ਅਤੇ ਨਾਦਰ ਸ਼ਾਹ (1739) ਤੇ ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ (1748–1767) ਦੇ ਹਮਲੇ।',
      ],
      hi: [
        'सितंबर 1708 में नांदेड़ में श्री गुरु गोबिंद सिंह जी द्वारा बंदा सिंह बहादुर को पंजाब भेजना।',
        'औरंगज़ेब के बाद मुगल साम्राज्य का पतन तथा नादिर शाह (1739) व अहमद शाह अब्दाली (1748–1767) के आक्रमण।',
      ],
    },
    learningObjectives: {
      en: [
        'Trace Baba Banda Singh Bahadur’s early life (Lachhman Dev / Madho Das), military conquests (Samana, Sadhaura, Battle of Chappar Chiri 1710), first Sikh sovereign state at Lohgarh, abolition of the Zamindari system, and martyrdom in 1716.',
        'Analyze the 18th-century Sikh struggle under Zakariya Khan, Mir Mannu, and Ahmad Shah Abdali, including the Chhota Ghallughara (1746) and Vadda Ghallughara (1762).',
        'Examine the organization of the Buddha Dal, Taruna Dal, Dal Khalsa (1748), Sarbat Khalsa, Gurmata, Rakhi system, and all 12 Sikh Misls with their founders and capitals.',
      ],
      pa: [
        'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਦੇ ਮੁੱਢਲੇ ਜੀਵਨ (ਲਛਮਣ ਦੇਵ / ਮਾਧੋ ਦਾਸ), ਜਿੱਤਾਂ (ਸਮਾਣਾ, ਸਢੌਰਾ, ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ 1710), ਰਾਜਧਾਨੀ ਲੋਹਗੜ੍ਹ, ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਦੇ ਖ਼ਾਤਮੇ ਅਤੇ 1716 ਦੀ ਸ਼ਹਾਦਤ ਨੂੰ ਸਮਝਣਾ।',
        'ਛੋਟਾ ਘੱਲੂਘਾਰਾ (1746, ਕਾਹਨੂੰਵਾਨ) ਅਤੇ ਵੱਡਾ ਘੱਲੂਘਾਰਾ (1762, ਕੁੱਪ ਰੋਹੀੜਾ) ਅਤੇ ਬੁੱਢਾ ਦਲ, ਤਰੁਣਾ ਦਲ, ਦਲ ਖ਼ਾਲਸਾ (1748), ਗੁਰਮਤਾ ਤੇ ਰਾਖੀ ਪ੍ਰਣਾਲੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
        '12 ਸਿੱਖ ਮਿਸਲਾਂ ਦੇ ਬਾਨੀਆਂ, ਰਾਜਧਾਨੀਆਂ ਅਤੇ ਪ੍ਰਮੁੱਖ ਆਗੂਆਂ ਦੀ ਪਛਾਣ ਕਰਨਾ।',
      ],
      hi: [
        'बाबा बंदा सिंह बहादुर के प्रारंभिक जीवन (लक्ष्मण देव / माधो दास), सैन्य विजयों (समाना, सढौरा, चप्पड़चिड़ी युद्ध 1710), राजधानी लोहगढ़, ज़मींदारी प्रथा उन्मूलन और 1716 की शहादत को समझना।',
        'छोटा घल्लूघारा (1746, काहनूवान) व वड्डा घल्लूघारा (1762, कुप्प रोहीड़ा) तथा बुड्ढा दल, तरुणा दल, दल खालसा (1748), गुरमता व राखी प्रणाली का अध्ययन करना।',
        '12 सिख मिसलों के संस्थापकों, क्षेत्रों और प्रमुख नेताओं का सटीक मिलान करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🦁 1. Baba Banda Singh Bahadur (1670–1716): First Sovereign Sikh Rule</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              Born as <strong>Lachhman Dev</strong> on <strong>27 October 1670</strong> at <strong>Rajouri</strong> (Poonch, Jammu & Kashmir) to Rajput farmer Ram Dev. After remorse over hunting a pregnant doe, he became a Bairagi ascetic named <strong>Madho Das Bairagi</strong> and established a monastery at <strong>Nanded</strong> on the banks of River Godavari.
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Meeting Guru Gobind Singh Ji at Nanded (Sept 1708):</strong> Upon meeting the Tenth Guru, Madho Das surrendered saying, <em>"I am your Banda (slave)."</em> The Guru baptized him with Khande di Pahul as <strong>Baba Gurbakhsh Singh (popularly Baba Banda Singh Bahadur)</strong>, appointed him Jathedar of the Khalsa, and gave him:
                <br/>• <strong>Five Arrows</strong> from his own quiver, a <strong>Nishan Sahib</strong> (flag), and a <strong>Nagara</strong> (war drum).
                <br/>• A <strong>Five-Member Advisory Council (Panj Pyare):</strong> <strong>Bhai Binod Singh, Bhai Kahan Singh, Bhai Baj Singh, Bhai Daya Singh, and Bhai Ram Singh</strong>, along with 20 other Singhs and Hukamnamas to the Sikhs of Punjab.
              </li>
              <li><strong>Military Conquests in Punjab (1709–1710):</strong>
                <br/>• <strong>Sonepat & Kaithal (1709):</strong> Looted the royal Mughal treasury to fund his campaign.
                <br/>• <strong>Conquest of Samana (Nov 1709):</strong> Punished the town of Samana (home of Jalal-ud-din, executioner of Guru Tegh Bahadur Ji, and Shashal Beg & Bashal Beg, executioners of the younger Sahibzadas). Appointed <strong>Fateh Singh</strong> as Faujdar of Samana.
                <br/>• <strong>Ghudaam, Kapuri & Sadhaura (1709–1710):</strong> Punished <strong>Usman Khan of Sadhaura</strong> (who had tortured Sufi saint <strong>Pir Budhu Shah</strong> to death for helping Guru Gobind Singh Ji at Bhangani); the mass grave of Mughals there became known as <em>Qatl-Garhi</em>.
                <br/>• <strong>Battle of Chappar Chiri & Conquest of Sirhind (12–14 May 1710):</strong> In the decisive Battle of <strong>Chappar Chiri</strong> (now in Mohali district), <strong>Fateh Singh and Baj Singh</strong> slew the tyrant Subedar of Sirhind, <strong>Wazir Khan</strong>. Sirhind was captured on 14 May 1710, Diwan <strong>Sucha Nand</strong> and treacherous <strong>Gangu</strong> were punished, and <strong>Bhai Baj Singh</strong> was appointed Governor of Sirhind (with Ali Singh as deputy).
              </li>
              <li><strong>Sovereign Administration & Abolition of Zamindari System:</strong>
                <br/>• <strong>Capital at Lohgarh (Mukhlisgarh):</strong> Established the first Sikh capital at <strong>Mukhlisgarh</strong> (in the Shivalik hills, Yamunanagar), renaming its fort <strong>Lohgarh ("Fort of Steel")</strong>.
                <br/>• <strong>Sikh Coinage, Official Seal & Calendar:</strong> Struck coins and issued an official seal in the names of <strong>Guru Nanak Dev Ji and Guru Gobind Singh Ji</strong> (<em>"Deg-o-Tegh-o-Fateh..."</em>) and introduced a new calendar starting from the conquest of Sirhind (1710).
                <br/>• <strong>Abolition of Zamindari ("Land to the Tiller"):</strong> In a revolutionary socio-economic reform, Banda Singh Bahadur <strong>abolished the oppressive Mughal Zamindari system</strong> and granted direct proprietorship rights to the actual peasant cultivators (tillers of the soil).
              </li>
              <li><strong>Siege of Gurdas Nangal (1715) & Supreme Martyrdom at Delhi (9 June 1716):</strong> Besieged for 8 months inside the haveli of Duni Chand at <strong>Gurdas Nangal</strong> (Gurdaspur) by Mughal Governor <strong>Abdus Samad Khan</strong> under Emperor <strong>Farrukhsiyar</strong>. Starved to the point of eating grass and tree bark, Banda Singh and 740 Sikhs were captured in Dec 1715 and paraded in Delhi. Not a single Sikh renounced his faith. On <strong>9 June 1716</strong> near the shrine of Qutbuddin Bakhtiyar Kaki at <strong>Mehrauli, Delhi</strong>, Banda Singh Bahadur's 4-year-old son <strong>Ajai Singh</strong> was hacked to pieces before him and his quivering heart thrust into Banda's mouth; Banda Singh remained unshaken in divine Hukam and was martyred by having his flesh torn with red-hot pincers.</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🔥 2. Persecution, Martyrs, Ghallugharas & Dal Khalsa (1716–1767)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Nawab Kapur Singh, Buddha Dal & Taruna Dal (1733–1734):</strong> To pacify the Sikhs, Lahore Governor <strong>Zakariya Khan</strong> offered a Jagir and the title of <strong>"Nawab"</strong> in 1733, which the Panth conferred upon humble सेवादार <strong>Kapur Singh Faizullapuria</strong>. In 1734, Nawab Kapur Singh organized the Khalsa warriors into two wings: <strong>Buddha Dal</strong> (veterans above 40, guarding Gurdwaras) and <strong>Taruna Dal</strong> (youth below 40, divided into 5 Jathas for active combat).</li>
              <li><strong>Immortal Martyrs of the 18th Century:</strong>
                <br/>• <strong>Bhai Tara Singh Wan (1726)</strong>
                <br/>• <strong>Bhai Mani Singh Ji (1737/1738):</strong> Head Granthi of Harmandir Sahib; martyred at Nakhas Chowk, Lahore by being cut joint-by-joint (<em>Band-Band</em>) for refusing to pay an unjust tax on the Diwali congregation.
                <br/>• <strong>Bhai Bota Singh & Bhai Garja Singh (1739):</strong> Levied sovereign tax at Serai Nurdin to prove the Khalsa was alive after Nadir Shah's invasion.
                <br/>• <strong>Bhai Mehtab Singh & Bhai Sukha Singh (1740):</strong> Beheaded <strong>Massa Ranghar</strong>, who had desecrated the sanctum of Sri Harmandir Sahib.
                <br/>• <strong>Bhai Taru Singh Ji (1745):</strong> Had his scalp (<em>Khopri</em>) scraped off rather than allow his sacred Kesh (hair) to be cut under Zakariya Khan.
                <br/>• <strong>Subeg Singh & Shahbaz Singh (1745):</strong> Father and son broken on the rotating spiked wheels (<em>Charkhadi</em>) under Yahiya Khan.
                <br/>• <strong>Baba Deep Singh Ji (1757):</strong> Martyred at age 75 fighting Afghans (Jahan Khan) with his severed head on his palm to liberate Sri Harmandir Sahib.
              </li>
              <li><strong>The Two Ghallugharas (Holocausts):</strong>
                <br/>1. <strong>Chhota Ghallughara (Small Holocaust — May 1746):</strong> Under Lahore Governor <strong>Yahiya Khan</strong> and his Hindu Diwan <strong>Lakhpat Rai</strong> (seeking revenge for the death of his brother Jaspat Rai), around <strong>7,000–10,000 Sikhs</strong> were massacred in the swampy reeds of <strong>Kahnuwan Chhamb</strong> (Gurdaspur district).
                <br/>2. <strong>Vadda Ghallughara (Great Holocaust — 5 February 1762):</strong> During his 6th invasion, Afghan ruler <strong>Ahmad Shah Abdali (Durrani)</strong> (aided by Zain Khan of Sirhind) surrounded a moving column of Sikhs and their families at village <strong>Kup Rohira</strong> (near Malerkotla). Protecting women and children inside a human wall while fighting on the move, <strong>25,000–30,000 Sikhs</strong> were martyred in a single day under the leadership of <strong>Jassa Singh Ahluwalia</strong> (who sustained 22 wounds). Yet within 3 months, the Khalsa bounced back and defeated Zain Khan of Sirhind (1764).
              </li>
              <li><strong>Foundation of Dal Khalsa (Baisakhi, 29 March 1748) & Rakhi System (1753):</strong> On Baisakhi 1748 at Amritsar, <strong>Nawab Kapur Singh</strong> unified all 65 Sikh Jathas into a single national army called the <strong>Dal Khalsa</strong>, divided into <strong>11 (later 12) Misls</strong> under the supreme command of <strong>Sultan-ul-Qaum Jassa Singh Ahluwalia</strong>. Through the bi-annual <strong>Sarbat Khalsa</strong> (at Akal Takht on Baisakhi and Diwali), binding resolutions called <strong>Gurmatas</strong> were passed. In 1753, the Sikhs introduced the <strong>Rakhi System</strong> — offering village protection against Afghan/Mughal plunder in exchange for <strong>one-fifth (1/5th) of the produce</strong>.</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🏛️ 3. The 12 Sikh Misls (Confederacies): Complete Exam Directory</h4>
            <p class="text-slate-300 text-sm mb-3">
              The word <strong>Misl</strong> (Arabic for "Equal" or "File/Record" kept at Akal Takht) denotes the <strong>12 sovereign Sikh confederacies</strong> (11 inside Dal Khalsa + Phulkian Misl in Malwa):
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse border border-slate-700">
                <thead>
                  <tr class="bg-slate-800 text-emerald-300">
                    <th class="p-2 border border-slate-700">#</th>
                    <th class="p-2 border border-slate-700">Misl Name</th>
                    <th class="p-2 border border-slate-700">Founder & Famous Leader</th>
                    <th class="p-2 border border-slate-700">Capital / Key Territory & Exam Fact</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300">
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold">1</td>
                    <td class="p-2 font-bold text-white">Faizullapuria (Singhpuria)</td>
                    <td class="p-2"><strong>Nawab Kapur Singh</strong> (Khushal Singh)</td>
                    <td class="p-2">Jalandhar / Faizullapur (First Misl established)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold">2</td>
                    <td class="p-2 font-bold text-white">Ahluwalia Misl</td>
                    <td class="p-2">Baghel Singh / <strong>Jassa Singh Ahluwalia</strong></td>
                    <td class="p-2"><strong>Kapurthala</strong> (Supreme Commander of Dal Khalsa; title <em>Sultan-ul-Qaum</em>; captured Lahore 1761 & Red Fort Delhi 1783)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold">3</td>
                    <td class="p-2 font-bold text-white">Bhangi Misl</td>
                    <td class="p-2">Chhajja Singh / Hari Singh, <strong>Jhanda Singh, Ganda Singh</strong></td>
                    <td class="p-2"><strong>Amritsar, Lahore & Multan</strong> (Most powerful Misl initially; possessed the famous <em>Zamzama</em> / Bhangian-wali Toap)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold">4</td>
                    <td class="p-2 font-bold text-white">Ramgarhia Misl</td>
                    <td class="p-2">Khushal Singh / <strong>Jassa Singh Ramgarhia</strong></td>
                    <td class="p-2"><strong>Sri Hargobindpur & Batala</strong> (Defended Fort Ram Rauni / Ramgarh)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold">5</td>
                    <td class="p-2 font-bold text-white">Sukerchakia Misl</td>
                    <td class="p-2"><strong>Charat Singh</strong> → Maha Singh → <strong>Maharaja Ranjit Singh</strong></td>
                    <td class="p-2"><strong>Gujranwala</strong> (Unified Punjab into the sovereign Sikh Empire in 1799)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold">6</td>
                    <td class="p-2 font-bold text-white">Kanhaiya (Kanheya) Misl</td>
                    <td class="p-2"><strong>Jai Singh Kanhaiya</strong> → <strong>Sada Kaur</strong></td>
                    <td class="p-2"><strong>Sohian & Batala/Gurdaspur</strong> (Sada Kaur was Maharaja Ranjit Singh’s mother-in-law and political mentor)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold">7</td>
                    <td class="p-2 font-bold text-white">Phulkian Misl</td>
                    <td class="p-2"><strong>Chaudhary Phul</strong> → <strong>Baba Ala Singh</strong></td>
                    <td class="p-2"><strong>Patiala, Nabha & Jind</strong> (Cis-Sutlej Malwa; only Misl NOT part of Dal Khalsa)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold">8</td>
                    <td class="p-2 font-bold text-white">Karorasinghia (Panjgarhia)</td>
                    <td class="p-2">Karora Singh → <strong>Baghel Singh</strong></td>
                    <td class="p-2">Hoshiarpur / Hariana (Baghel Singh conquered Red Fort Delhi in March 1783 & built historic Delhi Gurdwaras)</td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold">9</td>
                    <td class="p-2 font-bold text-white">Shaheed (Nihang) Misl</td>
                    <td class="p-2"><strong>Baba Deep Singh Ji</strong> (Sudha Singh, Karam Singh)</td>
                    <td class="p-2"><strong>Damdama Sahib (Talwandi Sabo)</strong> & Shahzadpur</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold">10</td>
                    <td class="p-2 font-bold text-white">Dallewalia Misl</td>
                    <td class="p-2"><strong>Gulab Singh</strong> → <strong>Tara Singh Ghaiba</strong></td>
                    <td class="p-2"><strong>Rahon (Nawanshahr) & Nakodar</strong></td>
                  </tr>
                  <tr class="border-b border-slate-800">
                    <td class="p-2 font-bold">11</td>
                    <td class="p-2 font-bold text-white">Nakai Misl</td>
                    <td class="p-2"><strong>Hira Singh Nakai</strong> (Ran Singh)</td>
                    <td class="p-2"><strong>Chunian / Baharwal</strong> (Nakka tract between Ravi and Sutlej; Raj Kaur married Ranjit Singh)</td>
                  </tr>
                  <tr class="border-b border-slate-800 bg-slate-900/50">
                    <td class="p-2 font-bold">12</td>
                    <td class="p-2 font-bold text-white">Nishanwalia Misl</td>
                    <td class="p-2"><strong>Dasaundha Singh & Sangat Singh</strong></td>
                    <td class="p-2"><strong>Ambala & Shahabad Markanda</strong> (Standard-bearers carrying the Nishan Sahib of Dal Khalsa)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🦁 1. ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ (1670–1716): ਪਹਿਲਾ ਸੁਤੰਤਰ ਸਿੱਖ ਰਾਜ</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਜਨਮ <strong>27 ਅਕਤੂਬਰ 1670</strong> ਨੂੰ <strong>ਰਾਜੌਰੀ (ਪੁਣਛ, ਜੰਮੂ-ਕਸ਼ਮੀਰ)</strong> ਵਿਖੇ ਹੋਇਆ। ਬਚਪਨ ਦਾ ਨਾਮ <strong>ਲਛਮਣ ਦੇਵ</strong> ਸੀ; ਵੈਰਾਗੀ ਬਣਨ ਮਗਰੋਂ <strong>ਮਾਧੋ ਦਾਸ ਬੈਰਾਗੀ</strong> ਅਖਵਾਏ। ਸਤੰਬਰ 1708 ਵਿੱਚ ਨਾਂਦੇੜ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਅੰਮ੍ਰਿਤ ਛਕਾ ਕੇ <strong>ਗੁਰਬਖ਼ਸ਼ ਸਿੰਘ (ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ)</strong> ਨਾਮ ਦਿੱਤਾ ਅਤੇ 5 ਤੀਰ, ਨਿਸ਼ਾਨ ਸਾਹਿਬ, ਨਗਾਰਾ ਅਤੇ 5 ਸਿੰਘਾਂ ਦੀ ਸਲਾਹਕਾਰ ਕਮੇਟੀ (<strong>ਭਾਈ ਬਿਨੋਦ ਸਿੰਘ, ਭਾਈ ਕਾਹਨ ਸਿੰਘ, ਭਾਈ ਬਾਜ ਸਿੰਘ, ਭਾਈ ਦਇਆ ਸਿੰਘ, ਭਾਈ ਰਾਮ ਸਿੰਘ</strong>) ਦੇ ਕੇ ਪੰਜਾਬ ਭੇਜਿਆ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਪ੍ਰਮੁੱਖ ਜਿੱਤਾਂ (1709–1710):</strong> ਸੋਨੀਪਤ ਤੇ ਕੈਥਲ ਤੋਂ ਬਾਅਦ <strong>ਸਮਾਣਾ (ਨਵੰਬਰ 1709)</strong>, ਘੁੜਾਮ, ਕਪੂਰੀ ਅਤੇ <strong>ਸਢੌਰਾ</strong> (ਉਸਮਾਨ ਖ਼ਾਨ ਨੂੰ ਸਜ਼ਾ ਦਿੱਤੀ ਜਿੱਥੇ ਕਤਲਗੜ੍ਹੀ ਬਣੀ) ਜਿੱਤੇ। <strong>12 ਮਈ 1710 ਨੂੰ ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ</strong> ਵਿੱਚ ਸਰਹਿੰਦ ਦੇ ਜ਼ਾਲਮ ਸੂਬੇਦਾਰ <strong>ਵਜ਼ੀਰ ਖ਼ਾਨ</strong> ਨੂੰ ਮਾਰ ਕੇ ਸਰਹਿੰਦ ਫ਼ਤਹਿ ਕੀਤਾ ਅਤੇ <strong>ਭਾਈ ਬਾਜ ਸਿੰਘ</strong> ਨੂੰ ਸਰਹਿੰਦ ਦਾ ਸੂਬੇਦਾਰ ਬਣਾਇਆ।</li>
              <li><strong>ਰਾਜਧਾਨੀ ਲੋਹਗੜ੍ਹ ਅਤੇ ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਦਾ ਅੰਤ:</strong> ਮੁਖ਼ਲਿਸਗੜ੍ਹ ਨੂੰ ਆਪਣੀ ਰਾਜਧਾਨੀ ਬਣਾ ਕੇ ਉਸ ਦਾ ਨਾਮ <strong>'ਲੋਹਗੜ੍ਹ'</strong> ਰੱਖਿਆ। ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਅਤੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਨਾਮ 'ਤੇ ਸਿੱਕੇ ਅਤੇ ਮੋਹਰ ਜਾਰੀ ਕੀਤੀ। ਮੁਗ਼ਲਾਂ ਦੀ <strong>ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਖ਼ਤਮ ਕਰਕੇ</strong> ਹਲ ਵਾਹੁਣ ਵਾਲੇ ਕਿਸਾਨਾਂ ਨੂੰ ਜ਼ਮੀਨਾਂ ਦੇ ਮਾਲਕ ਬਣਾਇਆ।</li>
              <li><strong>ਗੁਰਦਾਸ ਨੰਗਲ ਦੀ ਗੜ੍ਹੀ (1715) ਅਤੇ ਸ਼ਹਾਦਤ (9 ਜੂਨ 1716):</strong> ਦੁਨੀ ਚੰਦ ਦੀ ਹਵੇਲੀ (ਗੁਰਦਾਸ ਨੰਗਲ) ਵਿੱਚ 8 ਮਹੀਨੇ ਦੇ ਘੇਰੇ ਮਗਰੋਂ ਸੂਬੇਦਾਰ ਅਬਦੁਸ ਸਮਦ ਖ਼ਾਨ ਵੱਲੋਂ ਗ੍ਰਿਫ਼ਤਾਰ ਕੀਤੇ ਗਏ। <strong>9 ਜੂਨ 1716</strong> ਨੂੰ ਦਿੱਲੀ (ਮਹਿਰੌਲੀ) ਵਿਖੇ ਬਾਦਸ਼ਾਹ ਫ਼ਰੁਖ਼ਸੀਅਰ ਦੇ ਹੁਕਮ ਨਾਲ 4 ਸਾਲਾ ਪੁੱਤਰ <strong>ਅਜੈ ਸਿੰਘ</strong> ਦੀ ਸ਼ਹਾਦਤ ਤੋਂ ਬਾਅਦ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੂੰ ਜੰਬੂਰਾਂ ਨਾਲ ਮਾਸ ਨੋਚ ਕੇ ਸ਼ਹੀਦ ਕੀਤਾ ਗਿਆ।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🔥 2. ਬੁੱਢਾ ਦਲ, ਤਰੁਣਾ ਦਲ, ਦਲ ਖ਼ਾਲਸਾ ਅਤੇ ਦੋ ਘੱਲੂਘਾਰੇ (1716–1767)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਨਵਾਬ ਕਪੂਰ ਸਿੰਘ (1733–34):</strong> 1733 ਵਿੱਚ ਜ਼ਕਰੀਆ ਖ਼ਾਨ ਵੱਲੋਂ ਦਿੱਤੀ ਨਵਾਬੀ ਭਾਈ ਕਪੂਰ ਸਿੰਘ ਨੂੰ ਸੌਂਪੀ ਗਈ। 1734 ਵਿੱਚ ਉਹਨਾਂ ਨੇ ਖ਼ਾਲਸਾ ਫ਼ੌਜ ਨੂੰ ਦੋ ਹਿੱਸਿਆਂ ਵਿੱਚ ਵੰਡਿਆ — <strong>ਬੁੱਢਾ ਦਲ</strong> (40 ਸਾਲ ਤੋਂ ਵੱਧ ਉਮਰ) ਅਤੇ <strong>ਤਰੁਣਾ ਦਲ</strong> (40 ਸਾਲ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਨੌਜਵਾਨ, 5 ਜਥੇ)।</li>
              <li><strong>ਛੋਟਾ ਘੱਲੂਘਾਰਾ (ਮਈ 1746):</strong> ਲਾਹੌਰ ਦੇ ਸੂਬੇਦਾਰ <strong>ਯਹੀਆ ਖ਼ਾਨ</strong> ਅਤੇ ਉਸ ਦੇ ਦੀਵਾਨ <strong>ਲਖਪਤ ਰਾਇ</strong> ਦੇ ਹਮਲੇ ਵਿੱਚ <strong>ਕਾਹਨੂੰਵਾਨ ਛੰਭ</strong> (ਜ਼ਿਲ੍ਹਾ ਗੁਰਦਾਸਪੁਰ) ਵਿਖੇ ਲਗਭਗ <strong>7,000–10,000 ਸਿੱਖ</strong> ਸ਼ਹੀਦ ਹੋਏ।</li>
              <li><strong>ਵੱਡਾ ਘੱਲੂਘਾਰਾ (5 ਫ਼ਰਵਰੀ 1762):</strong> ਅਫ਼ਗਾਨ ਹਮਲਾਵਰ <strong>ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ</strong> ਦੇ ਛੇਵੇਂ ਹਮਲੇ ਦੌਰਾਨ ਮਲੇਰਕੋਟਲਾ ਨੇੜੇ ਪਿੰਡ <strong>ਕੁੱਪ ਰੋਹੀੜਾ</strong> ਵਿਖੇ ਲਗਭਗ <strong>25,000–30,000 ਸਿੱਖ</strong> (ਇਸਤਰੀਆਂ ਅਤੇ ਬੱਚਿਆਂ ਸਮੇਤ) ਸ਼ਹੀਦ ਹੋਏ।</li>
              <li><strong>ਦਲ ਖ਼ਾਲਸਾ (ਵਿਸਾਖੀ, 29 ਮਾਰਚ 1748) ਅਤੇ ਰਾਖੀ ਪ੍ਰਥਾ (1753):</strong> 1748 ਦੀ ਵਿਸਾਖੀ ਨੂੰ ਅੰਮ੍ਰਿਤਸਰ ਵਿਖੇ 65 ਜਥਿਆਂ ਨੂੰ ਮਿਲਾ ਕੇ <strong>ਦਲ ਖ਼ਾਲਸਾ</strong> ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਗਈ, ਜਿਸ ਦੇ ਪ੍ਰਧਾਨ ਸੈਨਾਪਤੀ <strong>ਸੁਲਤਾਨ-ਉਲ-ਕੌਮ ਜੱਸਾ ਸਿੰਘ ਆਹਲੂਵਾਲੀਆ</strong> ਬਣੇ। 1753 ਵਿੱਚ <strong>ਰਾਖੀ ਪ੍ਰਥਾ</strong> ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ (ਉਪਜ ਦਾ 1/5 ਹਿੱਸਾ ਲੈ ਕੇ ਪਿੰਡਾਂ ਦੀ ਸੁਰੱਖਿਆ)।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🏛️ 3. 12 ਸਿੱਖ ਮਿਸਲਾਂ ਅਤੇ ਉਹਨਾਂ ਦੇ ਬਾਨੀ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li>1. <strong>ਫ਼ੈਜ਼ੁੱਲਾਪੁਰੀਆ (ਸਿੰਘਪੁਰੀਆ) ਮਿਸਲ:</strong> ਬਾਨੀ <strong>ਨਵਾਬ ਕਪੂਰ ਸਿੰਘ</strong> (ਜਲੰਧਰ/ਫ਼ੈਜ਼ੁੱਲਾਪੁਰ — ਸਭ ਤੋਂ ਪਹਿਲੀ ਮਿਸਲ)।</li>
              <li>2. <strong>ਆਹਲੂਵਾਲੀਆ ਮਿਸਲ:</strong> ਬਾਨੀ <strong>ਜੱਸਾ ਸਿੰਘ ਆਹਲੂਵਾਲੀਆ</strong> (ਰਾਜਧਾਨੀ ਕਪੂਰਥਲਾ)।</li>
              <li>3. <strong>ਭੰਗੀ ਮਿਸਲ:</strong> ਬਾਨੀ ਛੱਜਾ ਸਿੰਘ / ਹਰੀ ਸਿੰਘ, ਝੰਡਾ ਸਿੰਘ ਤੇ ਗੰਡਾ ਸਿੰਘ (ਅੰਮ੍ਰਿਤਸਰ, ਲਾਹੌਰ, ਮੁਲਤਾਨ — ਜ਼ਮਜ਼ਮਾ ਤੋਪ)।</li>
              <li>4. <strong>ਰਾਮਗੜ੍ਹੀਆ ਮਿਸਲ:</strong> ਖੁਸ਼ਹਾਲ ਸਿੰਘ / <strong>ਜੱਸਾ ਸਿੰਘ ਰਾਮਗੜ੍ਹੀਆ</strong> (ਸ੍ਰੀ ਹਰਗੋਬਿੰਦਪੁਰ ਤੇ ਬਟਾਲਾ)।</li>
              <li>5. <strong>ਸ਼ੁਕਰਚੱਕੀਆ ਮਿਸਲ:</strong> ਬਾਨੀ <strong>ਚੜ੍ਹਤ ਸਿੰਘ</strong> → ਮਹਾਂ ਸਿੰਘ → <strong>ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ</strong> (ਗੁਜਰਾਂਵਾਲਾ)।</li>
              <li>6. <strong>ਕਨ੍ਹਈਆ ਮਿਸਲ:</strong> ਬਾਨੀ <strong>ਜੈ ਸਿੰਘ ਕਨ੍ਹਈਆ</strong> → ਰਾਣੀ <strong>ਸਦਾ ਕੌਰ</strong> (ਬਟਾਲਾ/ਗੁਰਦਾਸਪੁਰ)।</li>
              <li>7. <strong>ਫੂਲਕੀਆ ਮਿਸਲ:</strong> ਬਾਨੀ <strong>ਚੌਧਰੀ ਫੂਲ / ਬਾਬਾ ਆਲਾ ਸਿੰਘ</strong> (ਪਟਿਆਲਾ, ਨਾਭਾ, ਜੀਂਦ — ਇਹ ਦਲ ਖ਼ਾਲਸਾ ਦਾ ਹਿੱਸਾ ਨਹੀਂ ਸੀ)।</li>
              <li>8. <strong>ਕਰੋੜਸਿੰਘੀਆ (ਪੰਜਗੜ੍ਹੀਆ) ਮਿਸਲ:</strong> ਕਰੋੜਾ ਸਿੰਘ → <strong>ਬਘੇਲ ਸਿੰਘ</strong> (1783 ਵਿੱਚ ਦਿੱਲੀ ਦਾ ਲਾਲ ਕਿਲ੍ਹਾ ਫ਼ਤਹਿ ਕੀਤਾ ਤੇ ਦਿੱਲੀ ਦੇ ਇਤਿਹਾਸਕ ਗੁਰਦੁਆਰੇ ਉਸਾਰੇ)।</li>
              <li>9. <strong>ਸ਼ਹੀਦ (ਨਿਹੰਗ) ਮਿਸਲ:</strong> ਬਾਨੀ <strong>ਬਾਬਾ ਦੀਪ ਸਿੰਘ ਜੀ</strong> (ਦਮਦਮਾ ਸਾਹਿਬ)।</li>
              <li>10. <strong>ਡੱਲੇਵਾਲੀਆ ਮਿਸਲ:</strong> ਬਾਨੀ ਗੁਲਾਬ ਸਿੰਘ → <strong>ਤਾਰਾ ਸਿੰਘ ਘੇਬਾ</strong> (ਰਾਹੋਂ)।</li>
              <li>11. <strong>ਨਕਈ ਮਿਸਲ:</strong> ਬਾਨੀ <strong>ਹੀਰਾ ਸਿੰਘ ਨਕਈ</strong> (ਚੂਨੀਆਂ / ਬਹਿੜਵਾਲ)।</li>
              <li>12. <strong>ਨਿਸ਼ਾਨਵਾਲੀਆ ਮਿਸਲ:</strong> ਬਾਨੀ <strong>ਦਸੌਂਧਾ ਸਿੰਘ ਤੇ ਸੰਗਤ ਸਿੰਘ</strong> (ਅੰਬਾਲਾ ਤੇ ਸ਼ਾਹਾਬਾਦ)।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🦁 1. बाबा बंदा सिंह बहादुर (1670–1716): प्रथम संप्रभु सिख राज्य</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>जन्म एवं नांदेड़ मिलन (1708):</strong> जन्म 27 अक्टूबर 1670 को <strong>राजौरी (जम्मू-कश्मीर)</strong> में (बचपन का नाम <strong>लक्ष्मण देव</strong>, वैरागी नाम <strong>माधो दास</strong>)। सितंबर 1708 में नांदेड़ में गुरु गोबिंद सिंह जी ने अमृत छकाकर <strong>बाबा बंदा सिंह बहादुर (गुरबख्श सिंह)</strong> नाम दिया और 5 तीर, निशान साहिब, नगाड़ा व 5 सिखों की सलाहकार परिषद (बिनोद सिंह, काहन सिंह, बाज सिंह, दया सिंह, राम सिंह) के साथ पंजाब भेजा।</li>
              <li><strong>चप्पड़चिड़ी का युद्ध एवं सरहिंद विजय (12–14 मई 1710):</strong> समाना (नवंबर 1709) और सढौरा जीतने के बाद <strong>12 मई 1710 को चप्पड़चिड़ी के युद्ध</strong> में सरहिंद के सूबेदार <strong>वज़ीर खान</strong> को मारकर सरहिंद फतह किया (<strong>भाई बाज सिंह</strong> को सरहिंद का सूबेदार बनाया)।</li>
              <li><strong>राजधानी लोहगढ़ व ज़मींदारी उन्मूलन:</strong> मुखलिसगढ़ का नाम <strong>'लोहगढ़'</strong> रखकर राजधानी बनाया, गुरु नानक देव जी व गुरु गोबिंद सिंह जी के नाम पर सिक्के व मुहर चलाई और मुगल <strong>ज़मींदारी प्रथा समाप्त कर</strong> किसानों को भूमि का स्वामी बनाया। <strong>गुरदास नंगल की गढ़ी (1715)</strong> के घेरे के बाद <strong>9 जून 1716</strong> को दिल्ली (महरौली) में फर्रुखसियर के आदेश से पुत्र अजय सिंह सहित शहीद हुए।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🔥 2. दल खालसा, दो घल्लूघारे एवं 12 सिख मिसलें (1716–1799)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>नवाब कपूर सिंह एवं दल खालसा (29 मार्च 1748):</strong> 1734 में <strong>बुड्ढा दल</strong> व <strong>तरुणा दल</strong> बनाया। बैसाखी 1748 को अमृतसर में 65 जत्थों को मिलाकर <strong>दल खालसा</strong> की स्थापना की जिसके सर्वोच्च सेनापति <strong>सुल्तान-उल-कौम जस्सा सिंह आहलूवालिया</strong> बने। 1753 में <strong>राखी प्रणाली</strong> (उपज का 1/5 भाग लेकर सुरक्षा) शुरू की।</li>
              <li><strong>छोटा घल्लूघारा (मई 1746):</strong> सूबेदार याहिया खान और दीवान <strong>लखपत राय</strong> द्वारा <strong>काहनूवान छंभ (गुरदासपुर)</strong> में 7,000–10,000 सिखों का नरसंहार।</li>
              <li><strong>वड्डा घल्लूघारा (5 फरवरी 1762):</strong> <strong>अहमद शाह अब्दाली</strong> द्वारा मलेरकोटला के पास <strong>कुप्प रोहीड़ा</strong> में 25,000–30,000 सिखों का नरसंहार।</li>
              <li><strong>12 सिख मिसलें:</strong> (1) फैजुल्लापुरिया — नवाब कपूर सिंह, (2) आहलूवालिया — जस्सा सिंह आहलूवालिया (कपूरथला), (3) भंगी — हरि सिंह/झंडा सिंह (अमृतसर/लाहौर, ज़मज़मा तोप), (4) रामगढ़िया — जस्सा सिंह रामगढ़िया, (5) सुकरचकिया — चरत सिंह/महाराजा रणजीत सिंह (गुजरांवाला), (6) कन्हैया — जय सिंह कन्हैया/सदा कौर, (7) फूलकिया — चौधरी फूल/बाबा आला सिंह (पटियाला — दल खालसा से बाहर), (8) करोड़सिंघिया — करौरा सिंह/बघेल सिंह (1783 लाल किला विजय), (9) शहीद — बाबा दीप सिंह (दमदमा साहिब), (10) डल्लेवालिया — गुलाब सिंह/तारा सिंह घेबा, (11) नकई — हीरा सिंह नकई, (12) निशानवालिया — दसौंधा सिंह।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Comparing Chhota Ghallughara (1746) vs Vadda Ghallughara (1762)',
          pa: 'ਛੋਟਾ ਘੱਲੂਘਾਰਾ (1746) ਅਤੇ ਵੱਡਾ ਘੱਲੂਘਾਰਾ (1762) ਦੀ ਤੁਲਨਾ',
          hi: 'छोटा घल्लूघारा (1746) एवं वड्डा घल्लूघारा (1762) की तुलना',
        },
        problem: {
          en: 'Differentiate between Chhota Ghallughara and Vadda Ghallughara on the basis of: (1) Year, (2) Location, and (3) Perpetrator/Ruler.',
          pa: 'ਛੋਟਾ ਘੱਲੂਘਾਰਾ ਅਤੇ ਵੱਡਾ ਘੱਲੂਘਾਰਾ ਵਿੱਚ (1) ਸਾਲ, (2) ਸਥਾਨ ਅਤੇ (3) ਹਮਲਾਵਰ/ਸ਼ਾਸਕ ਦੇ ਆਧਾਰ ਉੱਤੇ ਅੰਤਰ ਦੱਸੋ।',
          hi: 'छोटा घल्लूघारा और वड्डा घल्लूघारा में (1) वर्ष, (2) स्थान और (3) आक्रमणकारी/शासक के आधार पर अंतर स्पष्ट कीजिए।',
        },
        steps: {
          en: [
            'Step 1: Chhota Ghallughara occurred in May 1746 at Kahnuwan Chhamb (Gurdaspur) under Mughal Governor Yahiya Khan and his Diwan Lakhpat Rai (~7,000–10,000 Sikhs martyred).',
            'Step 2: Vadda Ghallughara occurred on 5 February 1762 at village Kup Rohira (near Malerkotla) during the 6th invasion of Afghan ruler Ahmad Shah Abdali (~25,000–30,000 Sikhs martyred).',
          ],
          pa: [
            'ਕਦਮ 1: ਛੋਟਾ ਘੱਲੂਘਾਰਾ ਮਈ 1746 ਵਿੱਚ ਕਾਹਨੂੰਵਾਨ ਛੰਭ (ਗੁਰਦਾਸਪੁਰ) ਵਿਖੇ ਸੂਬੇਦਾਰ ਯਹੀਆ ਖ਼ਾਨ ਅਤੇ ਦੀਵਾਨ ਲਖਪਤ ਰਾਇ ਸਮੇਂ ਵਾਪਰਿਆ।',
            'ਕਦਮ 2: ਵੱਡਾ ਘੱਲੂਘਾਰਾ 5 ਫ਼ਰਵਰੀ 1762 ਨੂੰ ਪਿੰਡ ਕੁੱਪ ਰੋਹੀੜਾ (ਮਲੇਰਕੋਟਲਾ ਨੇੜੇ) ਵਿਖੇ ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ ਦੇ ਹਮਲੇ ਸਮੇਂ ਵਾਪਰਿਆ।',
          ],
          hi: [
            'चरण 1: छोटा घल्लूघारा मई 1746 में काहनूवान छंभ (गुरदासपुर) में सूबेदार याहिया खान और दीवान लखपत राय के समय हुआ।',
            'चरण 2: वड्डा घल्लूघारा 5 फरवरी 1762 को ग्राम कुप्प रोहीड़ा (मलेरकोटला के पास) में अहमद शाह अब्दाली के आक्रमण के समय हुआ।',
          ],
        },
        solution: {
          en: 'Chhota Ghallughara = May 1746, Kahnuwan (Gurdaspur), Yahiya Khan & Lakhpat Rai | Vadda Ghallughara = 5 Feb 1762, Kup Rohira (Malerkotla), Ahmad Shah Abdali.',
          pa: 'ਛੋਟਾ ਘੱਲੂਘਾਰਾ = ਮਈ 1746, ਕਾਹਨੂੰਵਾਨ (ਗੁਰਦਾਸਪੁਰ), ਯਹੀਆ ਖ਼ਾਨ ਤੇ ਲਖਪਤ ਰਾਇ | ਵੱਡਾ ਘੱਲੂਘਾਰਾ = 5 ਫ਼ਰਵਰੀ 1762, ਕੁੱਪ ਰੋਹੀੜਾ (ਮਲੇਰਕੋਟਲਾ), ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ।',
          hi: 'छोटा घल्लूघारा = मई 1746, काहनूवान (गुरदासपुर), याहिया खान व लखपत राय | वड्डा घल्लूघारा = 5 फरवरी 1762, कुप्प रोहीड़ा (मलेरकोटला), अहमद शाह अब्दाली।',
        },
      },
      {
        title: {
          en: 'Identifying Misl Founders and Relationships to Maharaja Ranjit Singh',
          pa: 'ਸਿੱਖ ਮਿਸਲਾਂ ਦੇ ਬਾਨੀ ਅਤੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਨਾਲ ਸਬੰਧ',
          hi: 'सिख मिसलों के संस्थापक एवं महाराजा रणजीत सिंह से संबंध',
        },
        problem: {
          en: '(a) Which Misl did Maharaja Ranjit Singh belong to? (b) Which Misl did his mother-in-law Sada Kaur lead? (c) Which was the only Misl NOT part of the Dal Khalsa?',
          pa: '(ੳ) ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਕਿਸ ਮਿਸਲ ਨਾਲ ਸਬੰਧਤ ਸਨ? (ਅ) ਉਹਨਾਂ ਦੀ ਸੱਸ ਰਾਣੀ ਸਦਾ ਕੌਰ ਕਿਸ ਮਿਸਲ ਦੀ ਮੁਖੀ ਸੀ? (ੲ) ਕਿਹੜੀ ਮਿਸਲ ਦਲ ਖ਼ਾਲਸਾ ਦਾ ਹਿੱਸਾ ਨਹੀਂ ਸੀ?',
          hi: '(क) महाराजा रणजीत सिंह किस मिसल से संबंधित थे? (ख) उनकी सास रानी सदा कौर किस मिसल की प्रमुख थीं? (ग) कौन-सी मिसल दल खालसा का हिस्सा नहीं थी?',
        },
        steps: {
          en: [
            'Step 1: Maharaja Ranjit Singh belonged to the Sukerchakia Misl (founded by his grandfather Charat Singh at Gujranwala).',
            'Step 2: Rani Sada Kaur (mother of Mehtab Kaur) led the Kanhaiya Misl (founded by Jai Singh Kanhaiya).',
            'Step 3: The Phulkian Misl (Patiala, Nabha, Jind — founded by Chaudhary Phul / Baba Ala Singh) in Malwa was the only Misl outside Dal Khalsa.',
          ],
          pa: [
            'ਕਦਮ 1: ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਸ਼ੁਕਰਚੱਕੀਆ ਮਿਸਲ (ਬਾਨੀ ਚੜ੍ਹਤ ਸਿੰਘ) ਨਾਲ ਸਬੰਧਤ ਸਨ।',
            'ਕਦਮ 2: ਰਾਣੀ ਸਦਾ ਕੌਰ ਕਨ੍ਹਈਆ ਮਿਸਲ (ਬਾਨੀ ਜੈ ਸਿੰਘ ਕਨ੍ਹਈਆ) ਦੀ ਮੁਖੀ ਸੀ।',
            'ਕਦਮ 3: ਫੂਲਕੀਆ ਮਿਸਲ (ਪਟਿਆਲਾ, ਨਾਭਾ, ਜੀਂਦ) ਦਲ ਖ਼ਾਲਸਾ ਦਾ ਹਿੱਸਾ ਨਹੀਂ ਸੀ।',
          ],
          hi: [
            'चरण 1: महाराजा रणजीत सिंह सुकरचकिया मिसल (संस्थापक चरत सिंह) से संबंधित थे।',
            'चरण 2: रानी सदा कौर कन्हैया मिसल (संस्थापक जय सिंह कन्हैया) की प्रमुख थीं।',
            'चरण 3: फूलकिया मिसल (पटियाला, नाभा, जींद) दल खालसा का हिस्सा नहीं थी।',
          ],
        },
        solution: {
          en: '(a) Sukerchakia Misl | (b) Kanhaiya Misl | (c) Phulkian Misl.',
          pa: '(ੳ) ਸ਼ੁਕਰਚੱਕੀਆ ਮਿਸਲ | (ਅ) ਕਨ੍ਹਈਆ ਮਿਸਲ | (ੲ) ਫੂਲਕੀਆ ਮਿਸਲ।',
          hi: '(क) सुकरचकिया मिसल | (ख) कन्हैया मिसल | (ग) फूलकिया मिसल।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Banda Singh Bahadur struck coins in his own name as sovereign.',
          pa: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਆਪਣੇ ਨਾਮ ਦੇ ਸਿੱਕੇ ਚਲਾਏ ਸਨ।',
          hi: 'बाबा बंदा सिंह बहादुर ने अपने नाम के सिक्के चलाए थे।',
        },
        correction: {
          en: 'Banda Singh Bahadur never claimed kingship for himself; regarding himself strictly as the "Banda" (servant) of the Guru, he struck coins and issued his royal seal solely in the names of Sri Guru Nanak Dev Ji and Sri Guru Gobind Singh Ji.',
          pa: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਕਦੇ ਵੀ ਆਪਣੇ ਨਾਮ ਦਾ ਸਿੱਕਾ ਨਹੀਂ ਚਲਾਇਆ; ਉਹਨਾਂ ਨੇ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਨਾਮ ਉੱਤੇ ਸਿੱਕੇ ਅਤੇ ਮੋਹਰ ਜਾਰੀ ਕੀਤੀ।',
          hi: 'बाबा बंदा सिंह बहादुर ने कभी अपने नाम का सिक्का नहीं चलाया; उन्होंने केवल श्री गुरु नानक देव जी और श्री गुरु गोबिंद सिंह जी के नाम पर सिक्के और मुहर जारी की।',
        },
        whyItMatters: {
          en: 'Frequently asked statement-verification question in Master Cadre SST.',
          pa: 'ਮਾਸਟਰ ਕੈਡਰ ਵਿੱਚ ਸਹੀ/ਗ਼ਲਤ ਕਥਨਾਂ ਦੀ ਪਛਾਣ ਵਿੱਚ ਇਹ ਤੱਥ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'मास्टर कैडर के कथन-सत्यापन प्रश्नों में यह तथ्य पूछा जाता है।',
        },
      },
      {
        misconception: {
          en: 'Banda Singh Bahadur was captured at the Fort of Lohgarh in 1715.',
          pa: 'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੂੰ 1715 ਵਿੱਚ ਲੋਹਗੜ੍ਹ ਦੇ ਕਿਲ੍ਹੇ ਤੋਂ ਗ੍ਰਿਫ਼ਤਾਰ ਕੀਤਾ ਗਿਆ ਸੀ।',
          hi: 'बंदा सिंह बहादुर को 1715 में लोहगढ़ के किले से गिरफ्तार किया गया था।',
        },
        correction: {
          en: 'Lohgarh (Mukhlisgarh) was Banda Singh Bahadur’s capital, which he evacuated in 1710. His final 8-month siege and capture in December 1715 took place at the Haveli of Duni Chand in village Gurdas Nangal (Gurdaspur district).',
          pa: 'ਲੋਹਗੜ੍ਹ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਦੀ ਰਾਜਧਾਨੀ ਸੀ। ਉਹਨਾਂ ਦੀ ਅੰਤਿਮ ਗ੍ਰਿਫ਼ਤਾਰੀ ਦਸੰਬਰ 1715 ਵਿੱਚ ਗੁਰਦਾਸ ਨੰਗਲ ਦੀ ਗੜ੍ਹੀ (ਦੁਨੀ ਚੰਦ ਦੀ ਹਵੇਲੀ, ਜ਼ਿਲ੍ਹਾ ਗੁਰਦਾਸਪੁਰ) ਤੋਂ ਹੋਈ ਸੀ।',
          hi: 'लोहगढ़ बंदा सिंह बहादुर की राजधानी थी। उनकी अंतिम गिरफ्तारी दिसंबर 1715 में गुरदास नंगल की गढ़ी (दुनी चंद की हवेली, गुरदासपुर) से हुई थी।',
        },
        whyItMatters: {
          en: 'Distinguishes Capital (Lohgarh/Mukhlisgarh) from Site of Final Siege (Gurdas Nangal).',
          pa: 'ਰਾਜਧਾਨੀ (ਲੋਹਗੜ੍ਹ) ਅਤੇ ਅੰਤਿਮ ਘੇਰੇ ਦੇ ਸਥਾਨ (ਗੁਰਦਾਸ ਨੰਗਲ) ਦਾ ਅੰਤਰ।',
          hi: 'राजधानी (लोहगढ़) और अंतिम घेरे के स्थल (गुरदास नंगल) का अंतर।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Banda Singh Bahadur (1670–1716): Born Rajouri (Lachhman Dev / Madho Das); Battle of Chappar Chiri (12 May 1710, Wazir Khan killed, Baj Singh made Governor of Sirhind); Capital: Lohgarh (Mukhlisgarh); abolished Zamindari system; captured at Gurdas Nangal (1715); martyred at Mehrauli Delhi (9 June 1716 under Farrukhsiyar).',
          'Nawab Kapur Singh: Received Nawab title (1733); formed Buddha Dal & Taruna Dal (1734); founded Dal Khalsa on Baisakhi 29 March 1748 under Supreme Commander Jassa Singh Ahluwalia; Rakhi System (1753, 1/5th produce).',
          'Chhota Ghallughara: May 1746 at Kahnuwan (Gurdaspur) by Yahiya Khan & Lakhpat Rai (~10,000 martyred).',
          'Vadda Ghallughara: 5 Feb 1762 at Kup Rohira (Malerkotla) by Ahmad Shah Abdali (~30,000 martyred).',
        ],
        pa: [
          'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ (1670–1716): ਬਚਪਨ ਦਾ ਨਾਮ ਲਛਮਣ ਦੇਵ (ਮਾਧੋ ਦਾਸ); ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ (12 ਮਈ 1710, ਵਜ਼ੀਰ ਖ਼ਾਨ ਮਾਰਿਆ ਗਿਆ); ਰਾਜਧਾਨੀ ਲੋਹਗੜ੍ਹ; ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਦਾ ਅੰਤ; ਗੁਰਦਾਸ ਨੰਗਲ ਦੀ ਗੜ੍ਹੀ (1715); ਸ਼ਹਾਦਤ 9 ਜੂਨ 1716 (ਦਿੱਲੀ, ਫ਼ਰੁਖ਼ਸੀਅਰ ਦੇ ਸਮੇਂ)।',
          'ਨਵਾਬ ਕਪੂਰ ਸਿੰਘ: ਬੁੱਢਾ ਦਲ ਤੇ ਤਰੁਣਾ ਦਲ (1734); ਦਲ ਖ਼ਾਲਸਾ ਦੀ ਸਥਾਪਨਾ (29 ਮਾਰਚ 1748, ਪ੍ਰਧਾਨ ਸੈਨਾਪਤੀ ਜੱਸਾ ਸਿੰਘ ਆਹਲੂਵਾਲੀਆ); ਰਾਖੀ ਪ੍ਰਥਾ (1753, ਉਪਜ ਦਾ 1/5 ਹਿੱਸਾ)।',
          'ਛੋਟਾ ਘੱਲੂਘਾਰਾ: ਮਈ 1746, ਕਾਹਨੂੰਵਾਨ ਛੰਭ (ਗੁਰਦਾਸਪੁਰ), ਯਹੀਆ ਖ਼ਾਨ ਤੇ ਲਖਪਤ ਰਾਇ।',
          'ਵੱਡਾ ਘੱਲੂਘਾਰਾ: 5 ਫ਼ਰਵਰੀ 1762, ਕੁੱਪ ਰੋਹੀੜਾ (ਮਲੇਰਕੋਟਲਾ), ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ।',
        ],
        hi: [
          'बाबा बंदा सिंह बहादुर (1670–1716): मूल नाम लक्ष्मण देव (माधो दास); चप्पड़चिड़ी का युद्ध (12 मई 1710, वज़ीर खान मारा गया); राजधानी लोहगढ़; ज़मींदारी प्रथा समाप्त; गुरदास नंगल (1715); शहादत 9 जून 1716 (दिल्ली, फर्रुखसियर के काल में)।',
          'नवाब कपूर सिंह: बुड्ढा दल व तरुणा दल (1734); दल खालसा स्थापना (29 मार्च 1748, प्रधान सेनापति जस्सा सिंह आहलूवालिया); राखी प्रणाली (1753, उपज का 1/5 भाग)।',
          'छोटा घल्लूघारा: मई 1746, काहनूवान छंभ (गुरदासपुर), याहिया खान व लखपत राय।',
          'वड्डा घल्लूघारा: 5 फरवरी 1762, कुप्प रोहीड़ा (मलेरकोटला), अहमद शाह अब्दाली।',
        ],
      },
      examTraps: {
        en: [
          'Trap: Baghel Singh (Karorasinghia Misl), Jassa Singh Ahluwalia, and Jassa Singh Ramgarhia conquered the Red Fort in Delhi in March 1783 (under Mughal Emperor Shah Alam II), and Baghel Singh built the historic Delhi Gurdwaras (Sis Ganj, Rakab Ganj, Bangla Sahib).',
          'Trap: Phulkian Misl was the ONLY Misl out of the 12 that was not part of the Dal Khalsa.',
        ],
        pa: [
          'ਧੋਖਾ: ਮਾਰਚ 1783 ਵਿੱਚ ਬਘੇਲ ਸਿੰਘ (ਕਰੋੜਸਿੰਘੀਆ ਮਿਸਲ), ਜੱਸਾ ਸਿੰਘ ਆਹਲੂਵਾਲੀਆ ਅਤੇ ਜੱਸਾ ਸਿੰਘ ਰਾਮਗੜ੍ਹੀਆ ਨੇ ਦਿੱਲੀ ਦਾ ਲਾਲ ਕਿਲ੍ਹਾ ਫ਼ਤਹਿ ਕੀਤਾ ਅਤੇ ਬਘੇਲ ਸਿੰਘ ਨੇ ਦਿੱਲੀ ਦੇ ਇਤਿਹਾਸਕ ਗੁਰਦੁਆਰੇ ਉਸਾਰੇ।',
          'ਧੋਖਾ: 12 ਮਿਸਲਾਂ ਵਿੱਚੋਂ ਕੇਵਲ ਫੂਲਕੀਆ ਮਿਸਲ ਹੀ ਦਲ ਖ਼ਾਲਸਾ ਦਾ ਹਿੱਸਾ ਨਹੀਂ ਸੀ।',
        ],
        hi: [
          'धोखा: मार्च 1783 में बघेल सिंह (करोड़सिंघिया मिसल), जस्सा सिंह आहलूवालिया और जस्सा सिंह रामगढ़िया ने दिल्ली का लाल किला जीता और बघेल सिंह ने दिल्ली के ऐतिहासिक गुरुद्वारों का निर्माण करवाया।',
          'धोखा: 12 मिसलों में से केवल फूलकिया मिसल ही दल खालसा का हिस्सा नहीं थी।',
        ],
      },
    },
    summary: {
      en: 'Between 1708 and 1799, Baba Banda Singh Bahadur defeated Wazir Khan at Chappar Chiri (1710), established the first Sikh sovereign state with its capital at Lohgarh, abolished the Zamindari system, and attained martyrdom in 1716; subsequently, the Sikhs endured the Chhota (1746) and Vadda (1762) Ghallugharas, organized the Dal Khalsa (1748) under Nawab Kapur Singh and Jassa Singh Ahluwalia, instituted the Rakhi system, and established the 12 Sikh Misls across Punjab.',
      pa: '1708 ਤੋਂ 1799 ਦੌਰਾਨ ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਚੱਪੜਚਿੜੀ (1710) ਵਿੱਚ ਵਜ਼ੀਰ ਖ਼ਾਨ ਨੂੰ ਮਾਰ ਕੇ ਪਹਿਲਾ ਸਿੱਖ ਰਾਜ (ਰਾਜਧਾਨੀ ਲੋਹਗੜ੍ਹ) ਸਥਾਪਿਤ ਕੀਤਾ ਅਤੇ ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਖ਼ਤਮ ਕੀਤੀ; ਉਸ ਮਗਰੋਂ ਸਿੱਖਾਂ ਨੇ ਛੋਟਾ (1746) ਤੇ ਵੱਡਾ (1762) ਘੱਲੂਘਾਰਾ ਝੱਲਦਿਆਂ ਦਲ ਖ਼ਾਲਸਾ (1748) ਅਤੇ 12 ਸਿੱਖ ਮਿਸਲਾਂ ਰਾਹੀਂ ਪੰਜਾਬ ਉੱਤੇ ਖਾਲਸਾਈ ਰਾਜ ਕਾਇਮ ਕੀਤਾ।',
      hi: '1708 से 1799 के मध्य बाबा बंदा सिंह बहादुर ने चप्पड़चिड़ी (1710) में वज़ीर खान को परास्त कर प्रथम सिख राज्य (राजधानी लोहगढ़) स्थापित किया व ज़मींदारी प्रथा समाप्त की; तत्पश्चात सिखों ने छोटा (1746) व वड्डा (1762) घल्लूघारा सहते हुए दल खालसा (1748) और 12 सिख मिसलों के माध्यम से पंजाब पर प्रभुत्व स्थापित किया।',
    },
    keyNotes: {
      en: [
        '📌 12 May 1710 — Battle of Chappar Chiri: Banda Singh Bahadur defeated & killed Wazir Khan of Sirhind.',
        '📌 Lohgarh (Mukhlisgarh) — Capital of Banda Singh Bahadur; abolished Zamindari system; martyred 9 June 1716.',
        '📌 29 March 1748 — Dal Khalsa founded at Amritsar; Jassa Singh Ahluwalia appointed Supreme Commander.',
        '📌 1746 & 1762 — Chhota Ghallughara (Kahnuwan) & Vadda Ghallughara (Kup Rohira, 5 Feb 1762).',
      ],
      pa: [
        '📌 12 ਮਈ 1710 — ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ: ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਸਰਹਿੰਦ ਦੇ ਸੂਬੇਦਾਰ ਵਜ਼ੀਰ ਖ਼ਾਨ ਨੂੰ ਮਾਰਿਆ।',
        '📌 ਲੋਹਗੜ੍ਹ (ਮੁਖ਼ਲਿਸਗੜ੍ਹ) — ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਦੀ ਰਾਜਧਾਨੀ; ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਦਾ ਅੰਤ; ਸ਼ਹਾਦਤ 9 ਜੂਨ 1716।',
        '📌 29 ਮਾਰਚ 1748 — ਦਲ ਖ਼ਾਲਸਾ ਦੀ ਸਥਾਪਨਾ (ਪ੍ਰਧਾਨ ਸੈਨਾਪਤੀ: ਜੱਸਾ ਸਿੰਘ ਆਹਲੂਵਾਲੀਆ)।',
        '📌 1746 ਅਤੇ 1762 — ਛੋਟਾ ਘੱਲੂਘਾਰਾ (ਕਾਹਨੂੰਵਾਨ) ਅਤੇ ਵੱਡਾ ਘੱਲੂਘਾਰਾ (ਕੁੱਪ ਰੋਹੀੜਾ, 5 ਫ਼ਰਵਰੀ 1762)।',
      ],
      hi: [
        '📌 12 मई 1710 — चप्पड़चिड़ी का युद्ध: बंदा सिंह बहादुर ने सरहिंद के सूबेदार वज़ीर खान को परास्त किया।',
        '📌 लोहगढ़ (मुखलिसगढ़) — बंदा सिंह बहादुर की राजधानी; ज़मींदारी प्रथा का अंत; शहादत 9 जून 1716।',
        '📌 29 मार्च 1748 — दल खालसा की स्थापना (प्रधान सेनापति: जस्सा सिंह आहलूवालिया)।',
        '📌 1746 एवं 1762 — छोटा घल्लूघारा (काहनूवान) एवं वड्डा घल्लूघारा (कुप्प रोहीड़ा, 5 फरवरी 1762)।',
      ],
    },
    flashcards: [
      {
        id: 'fc-bsb-1',
        q: {
          en: 'In which battle did Baba Banda Singh Bahadur defeat and kill Wazir Khan, the Mughal Subedar of Sirhind?',
          pa: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਸਰਹਿੰਦ ਦੇ ਸੂਬੇਦਾਰ ਵਜ਼ੀਰ ਖ਼ਾਨ ਨੂੰ ਕਿਹੜੀ ਲੜਾਈ ਵਿੱਚ ਹਰਾ ਕੇ ਮਾਰਿਆ ਸੀ?',
          hi: 'बाबा बंदा सिंह बहादुर ने सरहिंद के सूबेदार वज़ीर खान को किस युद्ध में परास्त कर मारा था?',
        },
        a: {
          en: 'Battle of Chappar Chiri (12 May 1710), after which Bhai Baj Singh was appointed Governor of Sirhind.',
          pa: 'ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ (12 ਮਈ 1710), ਜਿਸ ਮਗਰੋਂ ਭਾਈ ਬਾਜ ਸਿੰਘ ਨੂੰ ਸਰਹਿੰਦ ਦਾ ਸੂਬੇਦਾਰ ਬਣਾਇਆ ਗਿਆ।',
          hi: 'चप्पड़चिड़ी का युद्ध (12 मई 1710), जिसके बाद भाई बाज सिंह को सरहिंद का सूबेदार नियुक्त किया गया।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-bsb-2',
        q: {
          en: 'Where and in which year did the Vadda Ghallughara (Great Holocaust) take place?',
          pa: 'ਵੱਡਾ ਘੱਲੂਘਾਰਾ ਕਦੋਂ ਅਤੇ ਕਿੱਥੇ ਵਾਪਰਿਆ ਸੀ?',
          hi: 'वड्डा घल्लूघारा (बड़ा नरसंहार) कब और कहां हुआ था?',
        },
        a: {
          en: 'On 5 February 1762 at village Kup Rohira (near Malerkotla) during the 6th invasion of Ahmad Shah Abdali.',
          pa: '5 ਫ਼ਰਵਰੀ 1762 ਨੂੰ ਪਿੰਡ ਕੁੱਪ ਰੋਹੀੜਾ (ਮਲੇਰਕੋਟਲਾ ਨੇੜੇ) ਵਿਖੇ ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ ਦੇ ਹਮਲੇ ਦੌਰਾਨ।',
          hi: '5 फरवरी 1762 को ग्राम कुप्प रोहीड़ा (मलेरकोटला के पास) में अहमद शाह अब्दाली के आक्रमण के दौरान।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-bsb-3',
        q: {
          en: 'Who was the founder of the Sukerchakia Misl (the Misl of Maharaja Ranjit Singh)?',
          pa: 'ਸ਼ੁਕਰਚੱਕੀਆ ਮਿਸਲ (ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੀ ਮਿਸਲ) ਦਾ ਮੋਢੀ/ਬਾਨੀ ਕੌਣ ਸੀ?',
          hi: 'सुकरचकिया मिसल (महाराजा रणजीत सिंह की मिसल) का संस्थापक कौन था?',
        },
        a: {
          en: 'Sardar Charat Singh (grandfather of Maharaja Ranjit Singh), with headquarters at Gujranwala.',
          pa: 'ਸਰਦਾਰ ਚੜ੍ਹਤ ਸਿੰਘ (ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਦਾਦਾ ਜੀ, ਕੇਂਦਰ ਗੁਜਰਾਂਵਾਲਾ)।',
          hi: 'सरदार चरत सिंह (महाराजा रणजीत सिंह के दादा, मुख्यालय गुजरांवाला)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-bsb-4',
        q: {
          en: 'What share of agricultural produce was collected by the Dal Khalsa under the "Rakhi System" in exchange for village protection?',
          pa: '"ਰਾਖੀ ਪ੍ਰਥਾ" ਅਧੀਨ ਦਲ ਖ਼ਾਲਸਾ ਵੱਲੋਂ ਪਿੰਡਾਂ ਦੀ ਸੁਰੱਖਿਆ ਬਦਲੇ ਉਪਜ ਦਾ ਕਿੰਨਾ ਹਿੱਸਾ ਲਿਆ ਜਾਂਦਾ ਸੀ?',
          hi: '"राखी प्रणाली" के अंतर्गत दल खालसा द्वारा गांवों की सुरक्षा के बदले उपज का कितना भाग लिया जाता था?',
        },
        a: {
          en: 'One-fifth (1/5th or 20%) of the produce twice a year (after Rabi and Kharif harvests).',
          pa: 'ਉਪਜ ਦਾ ਪੰਜਵਾਂ ਹਿੱਸਾ (1/5 ਜਾਂ 20%)।',
          hi: 'उपज का पांचवां भाग (1/5 या 20%)।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Baba Banda Singh Bahadur, Dal Khalsa & The 12 Sikh Misls',
        channel: 'PSEB / NCERT History Archive',
        url: 'https://www.youtube.com/results?search_query=Banda+Singh+Bahadur+and+12+Sikh+Misls+Punjab+History',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'History and Culture of Punjab (Class 10)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Chapters 8 & 9: Banda Singh Bahadur and Sikh Struggle for Sovereignty / Misls',
        type: 'state-board',
      },
    ],
    syllabusReference: {
      title: 'ERB Punjab Master Cadre SST & PSSSB History Syllabus',
      url: 'https://educationrecruitmentboard.com',
      body: 'Education Recruitment Board (ERB) & PSSSB',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 7: MAHARAJA RANJIT SINGH & THE ANGLO-SIKH WARS (1780 - 1849)
  // ==========================================================================
  'maharaja-ranjit-singh-empire': {
    id: 'maharaja-ranjit-singh-empire',
    topicId: 'maharaja-ranjit-singh-empire',
    subjectId: 'social-science',
    category: 'history',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Maharaja Ranjit Singh (1780–1839), Sikh Empire Administration & The Anglo-Sikh Wars (1845–1849)',
      pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (1780–1839), ਖ਼ਾਲਸਾ ਰਾਜ ਦਾ ਪ੍ਰਸ਼ਾਸਨ ਅਤੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–1849)',
      hi: 'महाराजा रणजीत सिंह (1780–1839), सिख साम्राज्य का प्रशासन एवं आंग्ल-सिख युद्ध (1845–1849)',
    },
    examRelevance: 'Punjab Master Cadre SST (4–5 Qs), PSSSB Clerk (3–4 Qs), ETT, Patwari & Police',
    estimatedTime: '50 mins',
    prerequisites: {
      en: [
        'Rise of the 12 Sikh Misls (specifically Sukerchakia, Kanhaiya, and Bhangi Misls) in late 18th-century Punjab.',
        'East India Company’s expansion toward the Sutlej border under Lord Wellesley, Lord Minto, Lord Hardinge, and Lord Dalhousie.',
      ],
      pa: [
        '18ਵੀਂ ਸਦੀ ਦੇ ਅੰਤ ਵਿੱਚ 12 ਸਿੱਖ ਮਿਸਲਾਂ (ਖ਼ਾਸ ਕਰਕੇ ਸ਼ੁਕਰਚੱਕੀਆ, ਕਨ੍ਹਈਆ ਅਤੇ ਭੰਗੀ ਮਿਸਲ) ਦੀ ਸਥਿਤੀ।',
        'ਈਸਟ ਇੰਡੀਆ ਕੰਪਨੀ ਦਾ ਸਤਲੁਜ ਦਰਿਆ ਵੱਲ ਪਸਾਰ (ਲਾਰਡ ਮਿੰਟੋ, ਲਾਰਡ ਹਾਰਡਿੰਗ ਅਤੇ ਲਾਰਡ ਡਲਹੌਜ਼ੀ)।',
      ],
      hi: [
        '18वीं शताब्दी के अंत में 12 सिख मिसलों (विशेषकर सुकरचकिया, कन्हैया और भंगी मिसल) की स्थिति।',
        'ईस्ट इंडिया कंपनी का सतलुज नदी की ओर विस्तार (लॉर्ड मिंटो, लॉर्ड हार्डिंग और लॉर्ड डलहौज़ी)।',
      ],
    },
    learningObjectives: {
      en: [
        'Chronicle Maharaja Ranjit Singh’s conquests (Lahore 1799, Amritsar 1805, Kangra 1809, Attock 1813, Multan 1818, Kashmir 1819, Peshawar 1834, Jamrud 1837) and Anglo-Sikh treaties (Treaty of Amritsar 1809, Tripartite Treaty 1838).',
        'Analyze the civil, revenue, judicial, and modernized military administration (Fauj-i-Ain, Fauj-i-Khas under Ventura & Allard, Nanakshahi coins, Sarkar-i-Khalsa).',
        'Detail the First Anglo-Sikh War (1845–46: Mudki, Ferozeshah, Baddowal, Aliwal, Sobraon; Treaties of Lahore & Bhairowal) and Second Anglo-Sikh War (1848–49: Ramnagar, Chillianwala, Gujrat "Battle of Guns"; Annexation on 29 March 1849).',
      ],
      pa: [
        'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੀਆਂ ਜਿੱਤਾਂ (ਲਾਹੌਰ 1799, ਅੰਮ੍ਰਿਤਸਰ 1805, ਕਾਂਗੜਾ 1809, ਅਟਕ 1813, ਮੁਲਤਾਨ 1818, ਕਸ਼ਮੀਰ 1819, ਪਿਸ਼ਾਵਰ 1834, ਜਮਰੌਦ 1837) ਅਤੇ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (1809) ਨੂੰ ਸਮਝਣਾ।',
        'ਸਰਕਾਰ-ਏ-ਖ਼ਾਲਸਾ ਦੇ ਸਿਵਲ, ਲਗਾਨ ਅਤੇ ਸੈਨਿਕ ਪ੍ਰਸ਼ਾਸਨ (ਫ਼ੌਜ-ਏ-ਆਇਨ, ਫ਼ੌਜ-ਏ-ਖ਼ਾਸ, ਵੈਂਤੂਰਾ ਤੇ ਐਲਾਰਡ, ਨਾਨਕਸ਼ਾਹੀ ਸਿੱਕੇ) ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
        'ਪਹਿਲੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–46: ਮੁਦਕੀ, ਫ਼ਿਰੋਜ਼ਸ਼ਾਹ, ਬੱਦੋਵਾਲ, ਅਲੀਵਾਲ, ਸਭਰਾਉਂ; ਲਾਹੌਰ ਤੇ ਭੈਰੋਵਾਲ ਦੀਆਂ ਸੰਧੀਆਂ) ਅਤੇ ਦੂਜੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1848–49: ਰਾਮਨਗਰ, ਚਿੱਲੀਆਂਵਾਲਾ, ਗੁਜਰਾਤ; 29 ਮਾਰਚ 1849 ਨੂੰ ਪੰਜਾਬ ਦਾ ਰਲੇਵਾਂ) ਦਾ ਅਧਿਐਨ ਕਰਨਾ।',
      ],
      hi: [
        'महाराजा रणजीत सिंह की विजयों (लाहौर 1799, अमृतसर 1805, कांगड़ा 1809, अटक 1813, मुल्तान 1818, कश्मीर 1819, पेशावर 1834, जमरूद 1837) और अमृतसर की संधि (1809) को समझना।',
        'सरकार-ए-खालसा के नागरिक, राजस्व और सैन्य प्रशासन (फौज-ए-आइन, फौज-ए-खास, वेंचुरा व एलार्ड, नानकशाही सिक्के) का विश्लेषण करना।',
        'प्रथम आंग्ल-सिख युद्ध (1845–46: मुदकी, फिरोजशाह, बद्दोवाल, अलीवाल, सबराओं) और द्वितीय आंग्ल-सिख युद्ध (1848–49: रामनगर, चिल्लियांवाला, गुजरात; 29 मार्च 1849 को पंजाब का विलय) का अध्ययन करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🦁 1. Rise & Conquests of Sher-e-Punjab Maharaja Ranjit Singh (1780–1839)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              Born on <strong>13 November 1780</strong> at <strong>Gujranwala</strong> (named <strong>Budh Singh</strong> at birth, renamed <strong>Ranjit Singh</strong> — "Victor in Battle" — after his father's victory at Rasulnagar) into the <strong>Sukerchakia Misl</strong> to father <strong>Sardar Maha Singh</strong> and mother <strong>Raj Kaur</strong> (daughter of Raja Gajpat Singh of Jind). Smallpox in childhood blinded his left eye. Succeeding his father at age 12 (1792), his early Regency Council ("<em>Tikaaddaari / Trio Regency</em>") comprised his mother Raj Kaur, Diwan Lakhpat Rai, and his mother-in-law <strong>Rani Sada Kaur</strong> (leader of the Kanhaiya Misl, described as the <em>"ladder by which Ranjit Singh climbed to supreme power"</em>).
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Chronology of Major Military Conquests:</strong>
                <br/>• <strong>Conquest of Lahore (7 July 1799):</strong> Invited by Lahore's Muslim, Hindu, and Sikh citizens tired of the misrule of the three Bhangi Sardars (<strong>Chet Singh, Sahib Singh, and Mohar Singh</strong>), Ranjit Singh and Sada Kaur captured Lahore in July 1799, making it his political capital. Held his formal coronation on <strong>Baisakhi, 12 April 1801</strong> (tilak applied by <strong>Baba Sahib Singh Bedi</strong>; refused to wear a royal crown or sit on a throne, calling his government <strong>Sarkar-i-Khalsa</strong>).
                <br/>• <strong>Conquest of Amritsar (1805):</strong> Defeated Mai Sukhan (widow of Gulab Singh Bhangi) with the help of Jodh Singh Ramgarhia and Fateh Singh Ahluwalia; acquired the historic <strong>Zamzama cannon</strong> and the religious capital of the Sikhs.
                <br/>• <strong>Conquest of Kasur (1807):</strong> Defeated Qutb-ud-din Khan.
                <br/>• <strong>Conquest of Kangra (1809):</strong> Expelled Gurkha commander <strong>Amar Singh Thapa</strong> and took Kangra Fort from Sansar Chand Katoch.
                <br/>• <strong>Battle of Attock / Chuch (July 1813):</strong> <strong>Diwan Mohkam Chand</strong> defeated Afghan Wazir Fateh Khan Barakzai; same year Ranjit Singh acquired the world-famous <strong>Koh-i-Noor diamond</strong> from exiled Afghan King <strong>Shah Shuja Durrani</strong> (and Queen Wafa Begum) in Lahore.
                <br/>• <strong>Conquest of Multan (June 1818):</strong> Led by <strong>Misr Diwan Chand</strong> (who earned the title <em>Zafar-Jang-Bahadur</em>), Prince Kharak Singh, and <strong>Akali Phula Singh</strong>; Afghan Governor <strong>Nawab Muzaffar Khan</strong> died fighting.
                <br/>• <strong>Conquest of Kashmir (July 1819):</strong> Defeated Afghan Governor <strong>Jabbar Khan</strong> in the Battle of Shopian.
                <br/>• <strong>Battle of Nowshera / Tibba Tehri (March 1823):</strong> Defeated Azim Khan Barakzai; fearless Nihang chief <strong>Akali Phula Singh</strong> attained martyrdom here.
                <br/>• <strong>Conquest of Peshawar (1834) & Battle of Jamrud (April 1837):</strong> Annexed Peshawar under <strong>Sardar Hari Singh Nalwa</strong> (who built Jamrud Fort at the mouth of the Khyber Pass and attains martyrdom at the Battle of Jamrud in April 1837 after permanently sealing the frontier against Afghan invasions).
              </li>
              <li><strong>Anglo-Sikh Relations & Treaties:</strong>
                <br/>• <strong>Treaty of Amritsar (25 April 1809):</strong> Signed between Maharaja Ranjit Singh and British envoy <strong>Charles T. Metcalfe</strong> (under Governor-General <strong>Lord Minto I</strong>). Fixed the <strong>River Sutlej</strong> as the permanent boundary — placing Cis-Sutlej (Malwa) states under British protection while leaving Ranjit Singh free to expand northward and westward.
                <br/>• <strong>Ropar Meeting (Oct 1831):</strong> Historic diplomatic meeting with Governor-General <strong>Lord William Bentinck</strong> on the banks of the Sutlej.
                <br/>• <strong>Tripartite Treaty (June 1838):</strong> Signed between Ranjit Singh, Lord Auckland, and Shah Shuja prior to the First Anglo-Afghan War.
              </li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🏛️ 2. Civil, Revenue & Military Administration of Sarkar-i-Khalsa</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Secular Cabinet & Twelve Daftars:</strong> Ranjit Singh ran an exemplary secular administration: Foreign Minister was a Muslim (<strong>Faqir Aziz-ud-din</strong>), Prime Minister (Wazir) was Dogra Rajput <strong>Raja Dhian Singh</strong>, Finance Ministers included <strong>Diwan Bhawani Das, Diwan Ganga Ram, and Diwan Dina Nath</strong>, and Royal Physician was <strong>Faqir Nur-ud-din</strong>. Struck <strong>Nanakshahi & Gobindshahi coins</strong> (never putting his own name or effigy on coins) and covered <strong>Sri Harmandir Sahib in gold leaf</strong> (earning it the name <em>Swaran Mandir / Golden Temple</em>) as well as donating gold to Kashi Vishwanath Temple and Jawalamukhi.</li>
              <li><strong>Provincial Hierarchy:</strong> Empire divided into <strong>4 Subas (Provinces)</strong> — <strong>Lahore, Multan, Kashmir, and Peshawar</strong> (headed by a <em>Nazim</em>) → <strong>Parganas / Taaluqas</strong> (headed by a <em>Kardar</em>, the key revenue & administrative officer) → <strong>Mauzas (Villages)</strong> (<em>Muqaddam, Patwari, Chowkidar</em>).</li>
              <li><strong>Land Revenue & Judicial System:</strong> Land revenue (1/3rd to 2/5th of produce) was assessed via <strong>Batai</strong> (crop sharing — up to 1823), <strong>Kankut</strong> (appraisal of standing crops — 1824–1834), and <strong>Zabt / Cash Assessment</strong>. Highest court at Lahore was the <strong>Adalat-i-Ala</strong> (High Court), with Qazis and Panchayats at local levels; capital punishment (death sentence) was completely abolished!</li>
              <li><strong>Military Modernization (Fauj-i-Ain & Fauj-i-Khas):</strong>
                <br/>• <strong>Fauj-i-Ain (Regular Army):</strong> Comprised Infantry (<em>Paltan</em>), Cavalry (<em>Ghorcharhas</em>), and Artillery (<em>Topkhana</em> — led by Muslim generals <strong>Mian Ghausa</strong> and <strong>Ilahi Bakhsh</strong>). Monthly cash salary was paid through the <strong>Mahadari system</strong>.
                <br/>• <strong>Fauj-i-Khas (Model Brigade, 1822):</strong> Elite European-trained brigade drilled on the French Napoleonic model by French generals <strong>Jean-Francois Allard (Cavalry)</strong>, <strong>Jean-Baptiste Ventura (Infantry)</strong>, <strong>Claude Auguste Court (Artillery)</strong>, and Italian general <strong>Paolo Avitabile</strong> (Governor of Wazirabad & Peshawar).
                <br/>• <strong>Fauj-i-Be-Qawaid (Irregular Army):</strong> Included the fearless <em>Akalis / Nihangs</em> led by Akali Phula Singh and Jagirdari cavalry.
              </li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">⚔️ 3. The Two Anglo-Sikh Wars & British Annexation of Punjab (1839–1849)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              Following Maharaja Ranjit Singh’s death on <strong>27 June 1839</strong>, bloody court intrigues saw the rapid succession of <strong>Kharak Singh</strong>, <strong>Kanwar Nau Nihal Singh</strong>, <strong>Maharani Chand Kaur</strong>, and <strong>Maharaja Sher Singh</strong> (assassinated in 1843), placing 5-year-old <strong>Maharaja Duleep Singh</strong> on the throne with his mother <strong>Maharani Jind Kaur (Mai Jindan)</strong> as Regent, Lal Singh as Wazir, and Tej Singh as Commander-in-Chief.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div class="bg-slate-900/80 border border-slate-700 p-4 rounded-xl">
                <h5 class="text-amber-300 font-bold text-xs mb-1.5">1️⃣ First Anglo-Sikh War (Dec 1845 – March 1846)</h5>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Governor-General:</strong> <strong>Lord Hardinge</strong> | <strong>British C-in-C:</strong> <strong>Sir Hugh Gough</strong>.</li>
                  <li><strong>Sikh Traitor Commanders:</strong> <strong>Lal Singh & Tej Singh</strong> (secretly colluded with the British).</li>
                  <li><strong>Five Battles in Exact Sequence:</strong>
                    <br/>1. <strong>Battle of Mudki (18 Dec 1845):</strong> Lal Singh fled; British General Sir Robert Sale killed.
                    <br/>2. <strong>Battle of Ferozeshah (Ferozeshahr, 21 Dec 1845):</strong> Fiercest night battle; Tej Singh retreated when victory was in sight.
                    <br/>3. <strong>Battle of Baddowal (21 Jan 1846):</strong> <strong>Ranjodh Singh Majithia</strong> & Ajit Singh Ladwa defeated Sir Harry Smith (<strong>Sikh Victory</strong>).
                    <br/>4. <strong>Battle of Aliwal (28 Jan 1846):</strong> Sir Harry Smith defeated Ranjodh Singh.
                    <br/>5. <strong>Battle of Sobraon (10 Feb 1846):</strong> On the Sutlej; Tej Singh destroyed the boat bridge. Aged general <strong>Sardar Sham Singh Attariwala</strong> fought dressed in white shrouds to a heroic martyrdom.
                  </li>
                  <li><strong>Treaties:</strong>
                    <br/>• <strong>Treaty of Lahore (9 March 1846):</strong> Jalandhar Doab annexed; war indemnity of 1.5 crore (Kashmir sold to <strong>Gulab Singh Dogra</strong> for 75 lakh via Treaty of Amritsar, 16 March 1846); <strong>Sir Henry Lawrence</strong> appointed British Resident.
                    <br/>• <strong>Treaty of Bhairowal (16 Dec 1846):</strong> Maharani Jindan removed as Regent and pensioned to Sheikhupura/Chunar; 8-member Council of Regency under Henry Lawrence took full control.
                  </li>
                </ul>
              </div>

              <div class="bg-slate-900/80 border border-slate-700 p-4 rounded-xl">
                <h5 class="text-rose-300 font-bold text-xs mb-1.5">2️⃣ Second Anglo-Sikh War (1848–1849) & Annexation</h5>
                <ul class="text-xs text-slate-300 space-y-1 list-disc pl-4">
                  <li><strong>Governor-General:</strong> <strong>Lord Dalhousie</strong> | <strong>British C-in-C:</strong> <strong>Lord Hugh Gough</strong>.</li>
                  <li><strong>Immediate Spark:</strong> Revolt of <strong>Diwan Mulraj</strong> (Governor of Multan, April 1848) and <strong>Sardar Chattar Singh Attariwala & Raja Sher Singh Attariwala</strong> in Hazara.</li>
                  <li><strong>Four Major Battles:</strong>
                    <br/>1. <strong>Battle of Ramnagar (22 Nov 1848):</strong> On River Chenab; Sher Singh Attariwala defeated British cavalry (General Cureton killed).
                    <br/>2. <strong>Battle of Chillianwala (13 Jan 1849):</strong> On River Jhelum; Sher Singh Attariwala inflicted devastating casualties (~2,400 British troops lost, 3 regiments lost their colors).
                    <br/>3. <strong>Siege of Multan (Jan 1849):</strong> General Whish captured Multan from Diwan Mulraj.
                    <br/>4. <strong>Battle of Gujrat (21 Feb 1849 — "Battle of Guns"):</strong> Decisive artillery battle on River Chenab; Sikh forces defeated.
                  </li>
                  <li><strong>Annexation of Punjab (29 March 1849):</strong> By proclamation of <strong>Lord Dalhousie</strong> at Lahore Darbar, Punjab was annexed to British India. Young <strong>Maharaja Duleep Singh</strong> was deposed on a pension and exiled to England, the <strong>Koh-i-Noor diamond</strong> was taken for Queen Victoria, and a 3-member <strong>Board of Administration</strong> (<strong>Henry Lawrence, John Lawrence, Charles Mansel</strong>) was set up (later replaced by John Lawrence as Chief Commissioner in 1853).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🦁 1. ਸ਼ੇਰ-ਏ-ਪੰਜਾਬ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਉਭਾਰ ਅਤੇ ਜਿੱਤਾਂ (1780–1839)</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              ਜਨਮ <strong>13 ਨਵੰਬਰ 1780</strong> ਨੂੰ <strong>ਗੁਜਰਾਂਵਾਲਾ</strong> ਵਿਖੇ <strong>ਸ਼ੁਕਰਚੱਕੀਆ ਮਿਸਲ</strong> ਦੇ ਮੁਖੀ <strong>ਸਰਦਾਰ ਮਹਾਂ ਸਿੰਘ</strong> ਅਤੇ ਮਾਤਾ <strong>ਰਾਜ ਕੌਰ</strong> ਦੇ ਘਰ ਹੋਇਆ (ਬਚਪਨ ਦਾ ਨਾਮ <strong>ਬੁੱਧ ਸਿੰਘ</strong>)। ਸ਼ੁਰੂਆਤੀ ਦੌਰ ਵਿੱਚ ਤਿੱਕੜੀ ਸਰਪ੍ਰਸਤੀ (ਮਾਤਾ ਰਾਜ ਕੌਰ, ਦੀਵਾਨ ਲਖਪਤ ਰਾਇ ਅਤੇ ਸੱਸ <strong>ਰਾਣੀ ਸਦਾ ਕੌਰ</strong>) ਨੇ ਰਾਜ ਪ੍ਰਬੰਧ ਚਲਾਇਆ।
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਪ੍ਰਮੁੱਖ ਜਿੱਤਾਂ ਦਾ ਕਾਲਕ੍ਰਮ:</strong>
                <br/>• <strong>ਲਾਹੌਰ ਦੀ ਜਿੱਤ (7 ਜੁਲਾਈ 1799):</strong> ਤਿੰਨ ਭੰਗੀ ਸਰਦਾਰਾਂ (ਚੇਤ ਸਿੰਘ, ਸਾਹਿਬ ਸਿੰਘ, ਮੋਹਰ ਸਿੰਘ) ਨੂੰ ਹਰਾ ਕੇ ਲਾਹੌਰ ਨੂੰ ਰਾਜਧਾਨੀ ਬਣਾਇਆ। <strong>12 ਅਪ੍ਰੈਲ 1801 (ਵਿਸਾਖੀ)</strong> ਨੂੰ ਬਾਬਾ ਸਾਹਿਬ ਸਿੰਘ ਬੇਦੀ ਨੇ ਤਿਲਕ ਲਗਾਇਆ (ਆਪਣੇ ਰਾਜ ਨੂੰ <strong>'ਸਰਕਾਰ-ਏ-ਖ਼ਾਲਸਾ'</strong> ਕਿਹਾ ਅਤੇ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਨਾਮ 'ਤੇ <strong>ਨਾਨਕਸ਼ਾਹੀ ਸਿੱਕੇ</strong> ਚਲਾਏ)।
                <br/>• <strong>ਅੰਮ੍ਰਿਤਸਰ (1805):</strong> ਮਾਈ ਸੁੱਖਣ (ਭੰਗੀ ਮਿਸਲ) ਤੋਂ ਜਿੱਤਿਆ ਅਤੇ <strong>ਜ਼ਮਜ਼ਮਾ ਤੋਪ</strong> ਪ੍ਰਾਪਤ ਕੀਤੀ।
                <br/>• <strong>ਕਸੂਰ (1807)</strong> ਅਤੇ <strong>ਕਾਂਗੜਾ (1809, ਗੋਰਖਾ ਸੈਨਾਪਤੀ ਅਮਰ ਸਿੰਘ ਥਾਪਾ ਨੂੰ ਹਰਾਇਆ)</strong>।
                <br/>• <strong>ਅਟਕ ਦੀ ਲੜਾਈ (1813):</strong> ਦੀਵਾਨ ਮੋਹਕਮ ਚੰਦ ਨੇ ਫ਼ਤਹਿ ਖ਼ਾਨ ਨੂੰ ਹਰਾਇਆ; ਇਸੇ ਸਾਲ ਅਫ਼ਗਾਨ ਸ਼ਾਹ ਸ਼ੁਜਾ ਤੋਂ <strong>ਕੋਹਿਨੂਰ ਹੀਰਾ</strong> ਪ੍ਰਾਪਤ ਕੀਤਾ।
                <br/>• <strong>ਮੁਲਤਾਨ (1818):</strong> ਮਿਸਰ ਦੀਵਾਨ ਚੰਦ ਅਤੇ ਅਕਾਲੀ ਫੂਲਾ ਸਿੰਘ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਨਵਾਬ ਮੁਜ਼ੱਫ਼ਰ ਖ਼ਾਨ ਨੂੰ ਹਰਾਇਆ।
                <br/>• <strong>ਕਸ਼ਮੀਰ (1819):</strong> ਜੱਬਰ ਖ਼ਾਨ ਨੂੰ ਹਰਾ ਕੇ ਕਸ਼ਮੀਰ ਜਿੱਤਿਆ।
                <br/>• <strong>ਨੌਸ਼ਹਿਰਾ ਦੀ ਲੜਾਈ (1823):</strong> ਇੱਥੇ <strong>ਅਕਾਲੀ ਫੂਲਾ ਸਿੰਘ ਜੀ</strong> ਸ਼ਹੀਦ ਹੋਏ।
                <br/>• <strong>ਪਿਸ਼ਾਵਰ (1834) ਅਤੇ ਜਮਰੌਦ ਦੀ ਲੜਾਈ (ਅਪ੍ਰੈਲ 1837):</strong> ਮਹਾਨ ਜਰਨੈਲ <strong>ਸਰਦਾਰ ਹਰੀ ਸਿੰਘ ਨਲਵਾ</strong> ਨੇ ਜਮਰੌਦ ਦੀ ਲੜਾਈ ਵਿੱਚ ਸ਼ਹਾਦਤ ਦੇ ਕੇ ਦੱਰਾ ਖ਼ੈਬਰ ਨੂੰ ਹਮੇਸ਼ਾ ਲਈ ਬੰਦ ਕਰ ਦਿੱਤਾ।
              </li>
              <li><strong>ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (25 ਅਪ੍ਰੈਲ 1809):</strong> ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਅੰਗਰੇਜ਼ ਦੂਤ <strong>ਚਾਰਲਸ ਮੈਟਕਾਫ਼</strong> (ਗਵਰਨਰ ਜਨਰਲ <strong>ਲਾਰਡ ਮਿੰਟੋ ਪਹਿਲਾ</strong>) ਵਿਚਕਾਰ ਹੋਈ, ਜਿਸ ਨਾਲ <strong>ਸਤਲੁਜ ਦਰਿਆ</strong> ਨੂੰ ਸੀਮਾ ਮੰਨਿਆ ਗਿਆ।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🏛️ 2. ਸਰਕਾਰ-ਏ-ਖ਼ਾਲਸਾ ਦਾ ਸਿਵਲ ਅਤੇ ਸੈਨਿਕ ਪ੍ਰਸ਼ਾਸਨ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਧਰਮ-ਨਿਰਪੱਖ ਮੰਤਰੀ ਮੰਡਲ ਅਤੇ ਸੂਬੇ:</strong> ਵਿਦੇਸ਼ ਮੰਤਰੀ <strong>ਫ਼ਕੀਰ ਅਜ਼ੀਜ਼-ਉਦ-ਦੀਨ</strong>, ਪ੍ਰਧਾਨ ਮੰਤਰੀ <strong>ਰਾਜਾ ਧਿਆਨ ਸਿੰਘ ਡੋਗਰਾ</strong>, ਅਤੇ ਵਿੱਤ ਮੰਤਰੀ <strong>ਦੀਵਾਨ ਭਵਾਨੀ ਦਾਸ ਤੇ ਦੀਵਾਨ ਦੀਨਾ ਨਾਥ</strong> ਸਨ। ਰਾਜ ਨੂੰ <strong>4 ਸੂਬਿਆਂ (ਲਾਹੌਰ, ਮੁਲਤਾਨ, ਕਸ਼ਮੀਰ, ਪਿਸ਼ਾਵਰ)</strong> ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ ਸੀ ਜਿਨ੍ਹਾਂ ਦੇ ਮੁਖੀ ਨੂੰ <strong>'ਨਾਜ਼ਿਮ'</strong> ਅਤੇ ਪਰਗਣੇ ਦੇ ਮੁਖੀ ਨੂੰ <strong>'ਕਾਰਦਾਰ'</strong> ਕਿਹਾ ਜਾਂਦਾ ਸੀ। ਸਰਵਉੱਚ ਅਦਾਲਤ <strong>'ਅਦਾਲਤ-ਏ-ਆਲਾ'</strong> ਸੀ।</li>
              <li><strong>ਫ਼ੌਜ-ਏ-ਆਇਨ ਅਤੇ ਫ਼ੌਜ-ਏ-ਖ਼ਾਸ (1822):</strong> ਫ਼ਰਾਂਸੀਸੀ ਜਰਨੈਲਾਂ <strong>ਵੈਂਤੂਰਾ (ਪੈਦਲ ਫ਼ੌਜ)</strong>, <strong>ਐਲਾਰਡ (ਘੋੜਸਵਾਰ)</strong>, <strong>ਕੋਰਟ (ਤੋਪਖਾਨਾ)</strong> ਅਤੇ ਇਤਾਲਵੀ ਜਰਨੈਲ <strong>ਐਵੀਟੇਬਲ</strong> ਦੀ ਮਦਦ ਨਾਲ ਆਧੁਨਿਕ <strong>'ਫ਼ੌਜ-ਏ-ਖ਼ਾਸ'</strong> ਤਿਆਰ ਕੀਤੀ। ਤੋਪਖਾਨੇ ਦੇ ਮੁਖੀ ਮੀਆਂ ਗ਼ੌਸਾ ਅਤੇ ਇਲਾਹੀ ਬਖ਼ਸ਼ ਸਨ।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">⚔️ 3. ਪਹਿਲਾ ਅਤੇ ਦੂਜਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਅਤੇ ਪੰਜਾਬ ਦਾ ਰਲੇਵਾਂ (1845–1849)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਪਹਿਲਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–1846 | ਗਵਰਨਰ ਜਨਰਲ: ਲਾਰਡ ਹਾਰਡਿੰਗ):</strong> ਲਾਲ ਸਿੰਘ ਅਤੇ ਤੇਜ ਸਿੰਘ ਦੀ ਗ਼ੱਦਾਰੀ ਕਾਰਨ ਸਿੱਖ ਫ਼ੌਜ ਨੂੰ ਹਾਰ ਦਾ ਸਾਹਮਣਾ ਕਰਨਾ ਪਿਆ। ਪੰਜ ਲੜਾਈਆਂ: (1) <strong>ਮੁਦਕੀ (18 ਦਸੰਬਰ 1845)</strong>, (2) <strong>ਫ਼ਿਰੋਜ਼ਸ਼ਾਹ (21 ਦਸੰਬਰ 1845)</strong>, (3) <strong>ਬੱਦੋਵਾਲ (21 ਜਨਵਰੀ 1846 — ਰਣਜੋਧ ਸਿੰਘ ਮਜੀਠੀਆ ਦੀ ਜਿੱਤ)</strong>, (4) <strong>ਅਲੀਵਾਲ (28 ਜਨਵਰੀ 1846)</strong>, ਅਤੇ (5) <strong>ਸਭਰਾਉਂ (10 ਫ਼ਰਵਰੀ 1846 — ਸਰਦਾਰ ਸ਼ਾਮ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ ਦੀ ਸ਼ਹਾਦਤ)</strong>।
                <br/>• <strong>ਲਾਹੌਰ ਦੀ ਸੰਧੀ (9 ਮਾਰਚ 1846)</strong> ਅਤੇ <strong>ਭੈਰੋਵਾਲ ਦੀ ਸੰਧੀ (16 ਦਸੰਬਰ 1846)</strong> ਰਾਹੀਂ ਮਹਾਰਾਣੀ ਜਿੰਦ ਕੌਰ ਨੂੰ ਹਟਾ ਕੇ <strong>ਹੈਨਰੀ ਲਾਰੈਂਸ</strong> ਅਧੀਨ ਰੀਜੈਂਸੀ ਕੌਂਸਲ ਬਣਾਈ ਗਈ।
              </li>
              <li><strong>ਦੂਜਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1848–1849 | ਗਵਰਨਰ ਜਨਰਲ: ਲਾਰਡ ਡਲਹੌਜ਼ੀ):</strong> ਮੁਲਤਾਨ ਦੇ <strong>ਦੀਵਾਨ ਮੂਲਰਾਜ</strong> ਅਤੇ ਹਜ਼ਾਰਾ ਦੇ <strong>ਚਤਰ ਸਿੰਘ ਤੇ ਸ਼ੇਰ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ</strong> ਦੇ ਵਿਦਰੋਹ ਨਾਲ ਸ਼ੁਰੂ ਹੋਇਆ। ਚਾਰ ਲੜਾਈਆਂ: (1) <strong>ਰਾਮਨਗਰ (22 ਨਵੰਬਰ 1848)</strong>, (2) <strong>ਚਿੱਲੀਆਂਵਾਲਾ (13 ਜਨਵਰੀ 1849 — ਜੇਹਲਮ ਕੰਢੇ ਸਿੱਖਾਂ ਨੇ ਅੰਗਰੇਜ਼ਾਂ ਦਾ ਭਾਰੀ ਨੁਕਸਾਨ ਕੀਤਾ)</strong>, (3) <strong>ਮੁਲਤਾਨ (ਜਨਵਰੀ 1849)</strong>, ਅਤੇ (4) <strong>ਗੁਜਰਾਤ ਦੀ ਲੜਾਈ (21 ਫ਼ਰਵਰੀ 1849 — 'ਤੋਪਾਂ ਦੀ ਲੜਾਈ')</strong>।</li>
              <li><strong>ਪੰਜਾਬ ਦਾ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਰਲੇਵਾਂ (29 ਮਾਰਚ 1849):</strong> <strong>ਲਾਰਡ ਡਲਹੌਜ਼ੀ</strong> ਨੇ ਬਾਲਕ <strong>ਮਹਾਰਾਜਾ ਦਲੀਪ ਸਿੰਘ</strong> ਨੂੰ ਗੱਦੀਓਂ ਲਾਹ ਕੇ ਪੰਜਾਬ ਦਾ ਅੰਗਰੇਜ਼ੀ ਸਾਮਰਾਜ ਵਿੱਚ ਰਲੇਵਾਂ ਕਰ ਲਿਆ ਅਤੇ ਤਿੰਨ ਮੈਂਬਰੀ <strong>ਪ੍ਰਸ਼ਾਸਕੀ ਬੋਰਡ (ਹੈਨਰੀ ਲਾਰੈਂਸ, ਜੌਨ ਲਾਰੈਂਸ, ਚਾਰਲਸ ਮੈਂਸਲ)</strong> ਬਣਾਇਆ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🦁 1. शेर-ए-पंजाब महाराजा रणजीत सिंह का उदय एवं विजय अभियान (1780–1839)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>जन्म एवं लाहौर विजय (1799):</strong> जन्म <strong>13 नवंबर 1780</strong> को <strong>गुजरांवाला</strong> में <strong>सुकरचकिया मिसल</strong> के प्रमुख <strong>महां सिंह</strong> और माता <strong>राज कौर</strong> के घर (बचपन का नाम <strong>बुद्ध सिंह</strong>)। सास <strong>रानी सदा कौर</strong> (कन्हैया मिसल) की सहायता से <strong>7 जुलाई 1799</strong> को भंगी सरदारों (चेत सिंह, साहिब सिंह, मोहर सिंह) से <strong>लाहौर</strong> जीता और 12 अप्रैल 1801 को राज्याभिषेक करवाया (बाबा साहिब सिंह बेदी द्वारा तिलक)।</li>
              <li><strong>प्रमुख विजय अभियान:</strong> <strong>अमृतसर (1805, ज़मज़मा तोप प्राप्त)</strong>, <strong>कसूर (1807)</strong>, <strong>कांगड़ा (1809, गोरखा सेनापति अमर सिंह थापा पराजित)</strong>, <strong>अटक (1813, शाह शुजा से कोहिनूर हीरा प्राप्त)</strong>, <strong>मुल्तान (1818, मिसर दीवान चंद ने मुज़फ्फर खान को हराया)</strong>, <strong>कश्मीर (1819, जब्बर खान पराजित)</strong>, <strong>नौशेरा (1823, अकाली फूला सिंह शहीद)</strong>, <strong>पेशावर (1834) व जमरूद का युद्ध (अप्रैल 1837, सरदार हरि सिंह नलवा शहीद)</strong>।</li>
              <li><strong>अमृतसर की संधि (25 अप्रैल 1809):</strong> महाराजा रणजीत सिंह और ब्रिटिश दूत <strong>चार्ल्स मेटकाफ</strong> (गवर्नर जनरल <strong>लॉर्ड मिंटो प्रथम</strong>) के बीच हुई, जिससे <strong>सतलुज नदी</strong> को सीमा निर्धारित किया गया।</li>
            </ul>
          </div>

          <div class="bg-slate-800/90 border border-slate-700 p-5 rounded-xl">
            <h4 class="text-amber-400 font-bold text-base mb-2">🏛️ 2. सरकार-ए-खालसा का प्रशासन एवं सैन्य आधुनिकीकरण</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>धर्मनिरपेक्ष मंत्रिमंडल व प्रांत:</strong> विदेश मंत्री <strong>फकीर अज़ीज़ुद्दीन</strong>, प्रधानमंत्री <strong>राजा ध्यान सिंह डोगरा</strong> और वित्त मंत्री <strong>दीवान भवानी दास व दीवान दीना नाथ</strong> थे। साम्राज्य <strong>4 सूबों (लाहौर, मुल्तान, कश्मीर, पेशावर)</strong> में बंटा था (प्रमुख: <strong>नाज़िम</strong>; परगना प्रमुख: <strong>कारदार</strong>; सर्वोच्च न्यायालय: <strong>अदालत-ए-आला</strong>)। गुरु नानक व गुरु गोबिंद सिंह जी के नाम पर <strong>नानकशाही सिक्के</strong> चलाए।</li>
              <li><strong>फौज-ए-आइन एवं फौज-ए-खास (1822):</strong> फ्रांसीसी सेनापतियों <strong>वेंचुरा (पैदल सेना)</strong>, <strong>एलार्ड (घुड़सवार)</strong>, <strong>कोर्ट (तोपखाना)</strong> और इतालवी जनरल <strong>एविटेबल</strong> की सहायता से यूरोपीय तर्ज पर <strong>'फौज-ए-खास'</strong> का गठन किया।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">⚔️ 3. प्रथम एवं द्वितीय आंग्ल-सिख युद्ध तथा पंजाब का विलय (1845–1849)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>प्रथम आंग्ल-सिख युद्ध (1845–1846 | गवर्नर जनरल: लॉर्ड हार्डिंग):</strong> लाल सिंह और तेज सिंह के विश्वासघात के कारण सिख सेना पराजित हुई। पांच युद्ध: (1) <strong>मुदकी (18 दिसंबर 1845)</strong>, (2) <strong>फिरोजशाह (21 दिसंबर 1845)</strong>, (3) <strong>बद्दोवाल (21 जनवरी 1846 — रणजोध सिंह मजीठिया की विजय)</strong>, (4) <strong>अलीवाल (28 जनवरी 1846)</strong>, और (5) <strong>सबराओं (10 फरवरी 1846 — सरदार शाम सिंह अटारीवाला की वीरगति)</strong>। इसके बाद <strong>लाहौर की संधि (9 मार्च 1846)</strong> और <strong>भैरोवाल की संधि (16 दिसंबर 1846)</strong> हुई।</li>
              <li><strong>द्वितीय आंग्ल-सिख युद्ध (1848–1849 | गवर्नर जनरल: लॉर्ड डलहौज़ी):</strong> मुल्तान के <strong>दीवान मूलराज</strong> व हजारा के <strong>चतर सिंह व शेर सिंह अटारीवाला</strong> के विद्रोह से प्रारंभ। चार युद्ध: (1) <strong>रामनगर (22 नवंबर 1848)</strong>, (2) <strong>चिल्लियांवाला (13 जनवरी 1849 — झेलम तट पर अंग्रेजों को भारी क्षति)</strong>, (3) <strong>मुल्तान (जनवरी 1849)</strong>, और (4) <strong>गुजरात का युद्ध (21 फरवरी 1849 — 'तोपों का युद्ध')</strong>।</li>
              <li><strong>पंजाब का ब्रिटिश विलय (29 मार्च 1849):</strong> <strong>लॉर्ड डलहौज़ी</strong> ने बालक <strong>महाराजा दलीप सिंह</strong> को अपदस्थ कर पंजाब का ब्रिटिश साम्राज्य में विलय कर लिया और तीन सदस्यीय <strong>प्रशासनिक बोर्ड (हेनरी लॉरेंस, जॉन लॉरेंस, चार्ल्स मैंसल)</strong> गठित किया।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Matching European Generals of Maharaja Ranjit Singh’s Fauj-i-Khas',
          pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੀ ਫ਼ੌਜ-ਏ-ਖ਼ਾਸ ਦੇ ਯੂਰਪੀਅਨ ਜਰਨੈਲਾਂ ਦਾ ਮਿਲਾਨ',
          hi: 'महाराजा रणजीत सिंह की फौज-ए-खास के यूरोपीय जनरलों का मिलान',
        },
        problem: {
          en: 'Match the European officers employed by Maharaja Ranjit Singh with their military branch: (1) Jean-Baptiste Ventura, (2) Jean-Francois Allard, (3) Claude Auguste Court & Alexander Gardner, (4) Paolo Avitabile.',
          pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਯੂਰਪੀਅਨ ਅਫ਼ਸਰਾਂ ਦਾ ਉਹਨਾਂ ਦੇ ਵਿਭਾਗਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ: (1) ਵੈਂਤੂਰਾ, (2) ਐਲਾਰਡ, (3) ਕਲੌਡ ਅਗਸਤ ਕੋਰਟ ਤੇ ਗਾਰਡਨਰ, (4) ਪਾਓਲੋ ਐਵੀਟੇਬਲ।',
          hi: 'महाराजा रणजीत सिंह के यूरोपीय अधिकारियों का उनके सैन्य विभागों से मिलान कीजिए: (1) वेंचुरा, (2) एलार्ड, (3) क्लॉड अगस्त कोर्ट व गार्डनर, (4) पाओलो एविटेबल।',
        },
        steps: {
          en: [
            'Step 1: General Ventura (French/Italian) organized and trained the Fauj-i-Khas Infantry (Paltan).',
            'Step 2: General Allard (French) trained the Fauj-i-Khas Cavalry (Lancers & Dragoons).',
            'Step 3: General Court (French) and Col. Gardner (American) modernized the Artillery (Topkhana) and cannon foundries.',
            'Step 4: General Avitabile (Italian) served as civil & military Governor of Wazirabad and Peshawar.',
          ],
          pa: [
            'ਕਦਮ 1: ਜਨਰਲ ਵੈਂਤੂਰਾ ਨੇ ਪੈਦਲ ਫ਼ੌਜ (Infantry) ਨੂੰ ਸਿਖਲਾਈ ਦਿੱਤੀ।',
            'ਕਦਮ 2: ਜਨਰਲ ਐਲਾਰਡ ਨੇ ਘੋੜਸਵਾਰ ਫ਼ੌਜ (Cavalry) ਨੂੰ ਤਿਆਰ ਕੀਤਾ।',
            'ਕਦਮ 3: ਜਨਰਲ ਕੋਰਟ ਅਤੇ ਕਰਨਲ ਗਾਰਡਨਰ ਨੇ ਤੋਪਖਾਨੇ (Artillery) ਦਾ ਆਧੁਨਿਕੀਕਰਨ ਕੀਤਾ।',
            'ਕਦਮ 4: ਜਨਰਲ ਐਵੀਟੇਬਲ ਵਜ਼ੀਰਾਬਾਦ ਅਤੇ ਪਿਸ਼ਾਵਰ ਦਾ ਗਵਰਨਰ ਰਿਹਾ।',
          ],
          hi: [
            'चरण 1: जनरल वेंचुरा ने पैदल सेना (Infantry) को प्रशिक्षित किया।',
            'चरण 2: जनरल एलार्ड ने घुड़सवार सेना (Cavalry) को तैयार किया।',
            'चरण 3: जनरल कोर्ट और कर्नल गार्डनर ने तोपखाने (Artillery) का आधुनिकीकरण किया।',
            'चरण 4: जनरल एविटेबल वज़ीराबाद और पेशावर का गवर्नर रहा।',
          ],
        },
        solution: {
          en: 'Ventura = Infantry | Allard = Cavalry | Court & Gardner = Artillery | Avitabile = Governor of Peshawar/Wazirabad.',
          pa: 'ਵੈਂਤੂਰਾ = ਪੈਦਲ ਫ਼ੌਜ | ਐਲਾਰਡ = ਘੋੜਸਵਾਰ ਫ਼ੌਜ | ਕੋਰਟ ਤੇ ਗਾਰਡਨਰ = ਤੋਪਖਾਨਾ | ਐਵੀਟੇਬਲ = ਪਿਸ਼ਾਵਰ ਦਾ ਗਵਰਨਰ।',
          hi: 'वेंचुरा = पैदल सेना | एलार्ड = घुड़सवार सेना | कोर्ट व गार्डनर = तोपखाना | एविटेबल = पेशावर का गवर्नर।',
        },
      },
      {
        title: {
          en: 'Distinguishing Battles of the 1st vs 2nd Anglo-Sikh Wars',
          pa: 'ਪਹਿਲੇ ਅਤੇ ਦੂਜੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਦੀਆਂ ਲੜਾਈਆਂ ਦੀ ਪਛਾਣ',
          hi: 'प्रथम एवं द्वितीय आंग्ल-सिख युद्ध के युद्धों की पहचान',
        },
        problem: {
          en: 'Classify the following battles into First Anglo-Sikh War (1845–46) or Second Anglo-Sikh War (1848–49) and identify which battle is called the "Battle of Guns": Mudki, Chillianwala, Sobraon, Aliwal, Gujrat, Ferozeshah, Ramnagar.',
          pa: 'ਹੇਠ ਲਿਖੀਆਂ ਲੜਾਈਆਂ ਨੂੰ ਪਹਿਲੇ (1845–46) ਅਤੇ ਦੂਜੇ (1848–49) ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਵਿੱਚ ਵੰਡੋ ਅਤੇ ਦੱਸੋ ਕਿ ਕਿਹੜੀ ਲੜਾਈ ਨੂੰ "ਤੋਪਾਂ ਦੀ ਲੜਾਈ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ: ਮੁਦਕੀ, ਚਿੱਲੀਆਂਵਾਲਾ, ਸਭਰਾਉਂ, ਅਲੀਵਾਲ, ਗੁਜਰਾਤ, ਫ਼ਿਰੋਜ਼ਸ਼ਾਹ, ਰਾਮਨਗਰ।',
          hi: 'निम्नलिखित युद्धों को प्रथम (1845–46) व द्वितीय (1848–49) आंग्ल-सिख युद्ध में वर्गीकृत कीजिए और बताइए कि किस युद्ध को "तोपों का युद्ध" कहा जाता है: मुदकी, चिल्लियांवाला, सबराओं, अलीवाल, गुजरात, फिरोजशाह, रामनगर।',
        },
        steps: {
          en: [
            'Step 1: 1st Anglo-Sikh War (1845–46) battles (Mnemonic: M-F-B-A-S): Mudki (Dec 1845), Ferozeshah (Dec 1845), Baddowal (Jan 1846), Aliwal (Jan 1846), Sobraon (Feb 1846).',
            'Step 2: 2nd Anglo-Sikh War (1848–49) battles (Mnemonic: R-C-M-G): Ramnagar (Nov 1848), Chillianwala (Jan 1849), Multan (Jan 1849), Gujrat (21 Feb 1849 — known as the "Battle of Guns").',
          ],
          pa: [
            'ਕਦਮ 1: ਪਹਿਲੇ ਯੁੱਧ ਦੀਆਂ ਲੜਾਈਆਂ (M-F-B-A-S): ਮੁਦਕੀ, ਫ਼ਿਰੋਜ਼ਸ਼ਾਹ, ਬੱਦੋਵਾਲ, ਅਲੀਵਾਲ, ਸਭਰਾਉਂ।',
            'ਕਦਮ 2: ਦੂਜੇ ਯੁੱਧ ਦੀਆਂ ਲੜਾਈਆਂ (R-C-M-G): ਰਾਮਨਗਰ, ਚਿੱਲੀਆਂਵਾਲਾ, ਮੁਲਤਾਨ, ਗੁਜਰਾਤ (21 ਫ਼ਰਵਰੀ 1849 — "ਤੋਪਾਂ ਦੀ ਲੜਾਈ")।',
          ],
          hi: [
            'चरण 1: प्रथम युद्ध (M-F-B-A-S): मुदकी, फिरोजशाह, बद्दोवाल, अलीवाल, सबराओं।',
            'चरण 2: द्वितीय युद्ध (R-C-M-G): रामनगर, चिल्लियांवाला, मुल्तान, गुजरात (21 फरवरी 1849 — "तोपों का युद्ध")।',
          ],
        },
        solution: {
          en: '1st War: Mudki, Ferozeshah, Baddowal, Aliwal, Sobraon | 2nd War: Ramnagar, Chillianwala, Multan, Gujrat ("Battle of Guns").',
          pa: 'ਪਹਿਲਾ ਯੁੱਧ: ਮੁਦਕੀ, ਫ਼ਿਰੋਜ਼ਸ਼ਾਹ, ਬੱਦੋਵਾਲ, ਅਲੀਵਾਲ, ਸਭਰਾਉਂ | ਦੂਜਾ ਯੁੱਧ: ਰਾਮਨਗਰ, ਚਿੱਲੀਆਂਵਾਲਾ, ਮੁਲਤਾਨ, ਗੁਜਰਾਤ ("ਤੋਪਾਂ ਦੀ ਲੜਾਈ")।',
          hi: 'प्रथम युद्ध: मुदकी, फिरोजशाह, बद्दोवाल, अलीवाल, सबराओं | द्वितीय युद्ध: रामनगर, चिल्लियांवाला, मुल्तान, गुजरात ("तोपों का युद्ध")।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'The Treaty of Amritsar (1809) was signed between Maharaja Ranjit Singh and Lord William Bentinck.',
          pa: 'ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (1809) ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਲਾਰਡ ਵਿਲੀਅਮ ਬੈਂਟਿੰਕ ਵਿਚਕਾਰ ਹੋਈ ਸੀ।',
          hi: 'अमृतसर की संधि (1809) महाराजा रणजीत सिंह और लॉर्ड विलियम बेंटिंक के बीच हुई थी।',
        },
        correction: {
          en: 'The Treaty of Amritsar (25 April 1809) was signed with British envoy Charles T. Metcalfe during the tenure of Governor-General Lord Minto I. Lord William Bentinck met Maharaja Ranjit Singh much later at the Ropar Meeting in October 1831.',
          pa: 'ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (25 ਅਪ੍ਰੈਲ 1809) ਗਵਰਨਰ ਜਨਰਲ ਲਾਰਡ ਮਿੰਟੋ ਪਹਿਲੇ ਦੇ ਦੂਤ ਚਾਰਲਸ ਮੈਟਕਾਫ਼ ਨਾਲ ਹੋਈ ਸੀ। ਲਾਰਡ ਵਿਲੀਅਮ ਬੈਂਟਿੰਕ ਨਾਲ ਮੁਲਾਕਾਤ ਅਕਤੂਬਰ 1831 ਵਿੱਚ ਰੋਪੜ ਵਿਖੇ ਹੋਈ ਸੀ।',
          hi: 'अमृतसर की संधि (25 अप्रैल 1809) गवर्नर जनरल लॉर्ड मिंटो प्रथम के दूत चार्ल्स मेटकाफ के साथ हुई थी। लॉर्ड विलियम बेंटिंक से भेंट अक्टूबर 1831 में रोपड़ में हुई थी।',
        },
        whyItMatters: {
          en: 'One of the most frequent distractors in Punjab PCS, Master Cadre, and PSSSB Clerk exams.',
          pa: 'ਪੰਜਾਬ ਦੀਆਂ ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਇਹ ਸਭ ਤੋਂ ਵੱਧ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਪ੍ਰਸ਼ਨ ਹੈ।',
          hi: 'पंजाब की प्रतियोगी परीक्षाओं में यह सर्वाधिक पूछा जाने वाला प्रश्न है।',
        },
      },
      {
        misconception: {
          en: 'Sardar Hari Singh Nalwa died in the Anglo-Sikh Wars.',
          pa: 'ਸਰਦਾਰ ਹਰੀ ਸਿੰਘ ਨਲਵਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧਾਂ ਵਿੱਚ ਸ਼ਹੀਦ ਹੋਏ ਸਨ।',
          hi: 'सरदार हरि सिंह नलवा आंग्ल-सिख युद्धों में शहीद हुए थे।',
        },
        correction: {
          en: 'Sardar Hari Singh Nalwa attained martyrdom in April 1837 at the Battle of Jamrud (near Khyber Pass against Afghan forces of Dost Muhammad Khan), during the lifetime of Maharaja Ranjit Singh. It was Sardar Sham Singh Attariwala who died heroically in the Battle of Sobraon (10 Feb 1846) during the First Anglo-Sikh War.',
          pa: 'ਸਰਦਾਰ ਹਰੀ ਸਿੰਘ ਨਲਵਾ ਅਪ੍ਰੈਲ 1837 ਵਿੱਚ ਜਮਰੌਦ ਦੀ ਲੜਾਈ (ਅਫ਼ਗਾਨਾਂ ਵਿਰੁੱਧ) ਵਿੱਚ ਸ਼ਹੀਦ ਹੋਏ ਸਨ, ਜਦਕਿ ਪਹਿਲੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਦੀ ਸਭਰਾਉਂ ਦੀ ਲੜਾਈ (10 ਫ਼ਰਵਰੀ 1846) ਵਿੱਚ ਸਰਦਾਰ ਸ਼ਾਮ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ ਸ਼ਹੀਦ ਹੋਏ ਸਨ।',
          hi: 'सरदार हरि सिंह नलवा अप्रैल 1837 में जमरूद के युद्ध (अफगानों के विरुद्ध) में शहीद हुए थे, जबकि प्रथम आंग्ल-सिख युद्ध के सबराओं युद्ध (10 फरवरी 1846) में सरदार शाम सिंह अटारीवाला शहीद हुए थे।',
        },
        whyItMatters: {
          en: 'Prevents confusing Battle of Jamrud (1837, Hari Singh Nalwa) with Battle of Sobraon (1846, Sham Singh Attariwala).',
          pa: 'ਜਮਰੌਦ ਦੀ ਲੜਾਈ (1837, ਹਰੀ ਸਿੰਘ ਨਲਵਾ) ਅਤੇ ਸਭਰਾਉਂ ਦੀ ਲੜਾਈ (1846, ਸ਼ਾਮ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ) ਦਾ ਸਪੱਸ਼ਟ ਫ਼ਰਕ।',
          hi: 'जमरूद युद्ध (1837, हरि सिंह नलवा) और सबराओं युद्ध (1846, शाम सिंह अटारीवाला) का स्पष्ट अंतर।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Maharaja Ranjit Singh (1780–1839): Born 13 Nov 1780 at Gujranwala (Sukerchakia Misl); Parents: Maha Singh & Raj Kaur; Mother-in-law: Sada Kaur (Kanhaiya Misl).',
          'Conquests: Lahore (1799 from Bhangi Sardars), Amritsar (1805), Kasur (1807), Kangra (1809), Attock (1813 + Koh-i-Noor from Shah Shuja), Multan (1818, Muzaffar Khan), Kashmir (1819, Jabbar Khan), Nowshera (1823, Akali Phula Singh martyred), Peshawar (1834), Jamrud (1837, Hari Singh Nalwa martyred).',
          'Treaty of Amritsar (25 April 1809): Signed with Charles Metcalfe (Lord Minto I); Sutlej fixed as eastern boundary.',
          '1st Anglo-Sikh War (1845–46, Lord Hardinge): Mudki, Ferozeshah, Baddowal (Sikh win), Aliwal, Sobraon (Sham Singh Attariwala martyred); Treaties of Lahore (9 March 1846) & Bhairowal (16 Dec 1846).',
          '2nd Anglo-Sikh War (1848–49, Lord Dalhousie): Ramnagar, Chillianwala, Multan, Gujrat (21 Feb 1849, "Battle of Guns"); Annexation of Punjab on 29 March 1849 (Maharaja Duleep Singh deposed).',
        ],
        pa: [
          'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (1780–1839): ਜਨਮ 13 ਨਵੰਬਰ 1780 (ਗੁਜਰਾਂਵਾਲਾ, ਸ਼ੁਕਰਚੱਕੀਆ ਮਿਸਲ); ਪਿਤਾ ਮਹਾਂ ਸਿੰਘ, ਮਾਤਾ ਰਾਜ ਕੌਰ; ਸੱਸ ਰਾਣੀ ਸਦਾ ਕੌਰ (ਕਨ੍ਹਈਆ ਮਿਸਲ)।',
          'ਜਿੱਤਾਂ: ਲਾਹੌਰ (1799), ਅੰਮ੍ਰਿਤਸਰ (1805), ਕਾਂਗੜਾ (1809), ਅਟਕ (1813, ਸ਼ਾਹ ਸ਼ੁਜਾ ਤੋਂ ਕੋਹਿਨੂਰ), ਮੁਲਤਾਨ (1818), ਕਸ਼ਮੀਰ (1819), ਨੌਸ਼ਹਿਰਾ (1823, ਅਕਾਲੀ ਫੂਲਾ ਸਿੰਘ ਸ਼ਹੀਦ), ਪਿਸ਼ਾਵਰ (1834), ਜਮਰੌਦ (1837, ਹਰੀ ਸਿੰਘ ਨਲਵਾ ਸ਼ਹੀਦ)।',
          'ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (25 ਅਪ੍ਰੈਲ 1809): ਚਾਰਲਸ ਮੈਟਕਾਫ਼ (ਲਾਰਡ ਮਿੰਟੋ ਪਹਿਲਾ) ਨਾਲ; ਸਤਲੁਜ ਦਰਿਆ ਸਰਹੱਦ।',
          'ਪਹਿਲਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–46, ਲਾਰਡ ਹਾਰਡਿੰਗ): ਮੁਦਕੀ, ਫ਼ਿਰੋਜ਼ਸ਼ਾਹ, ਬੱਦੋਵਾਲ, ਅਲੀਵਾਲ, ਸਭਰਾਉਂ (ਸ਼ਾਮ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ ਸ਼ਹੀਦ); ਲਾਹੌਰ ਤੇ ਭੈਰੋਵਾਲ ਦੀਆਂ ਸੰਧੀਆਂ (1846)।',
          'ਦੂਜਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1848–49, ਲਾਰਡ ਡਲਹੌਜ਼ੀ): ਰਾਮਨਗਰ, ਚਿੱਲੀਆਂਵਾਲਾ, ਮੁਲਤਾਨ, ਗੁਜਰਾਤ ("ਤੋਪਾਂ ਦੀ ਲੜਾਈ"); 29 ਮਾਰਚ 1849 ਨੂੰ ਪੰਜਾਬ ਦਾ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਰਲੇਵਾਂ।',
        ],
        hi: [
          'महाराजा रणजीत सिंह (1780–1839): जन्म 13 नवंबर 1780 (गुजरांवाला, सुकरचकिया मिसल); पिता महां सिंह, माता राज कौर; सास सदा कौर (कन्हैया मिसल)।',
          'विजय अभियान: लाहौर (1799), अमृतसर (1805), कांगड़ा (1809), अटक (1813, शाह शुजा से कोहिनूर), मुल्तान (1818), कश्मीर (1819), नौशेरा (1823, अकाली फूला सिंह शहीद), पेशावर (1834), जमरूद (1837, हरि सिंह नलवा शहीद)।',
          'अमृतसर की संधि (25 अप्रैल 1809): चार्ल्स मेटकाफ (लॉर्ड मिंटो प्रथम) के साथ; सतलुज नदी सीमा।',
          'प्रथम आंग्ल-सिख युद्ध (1845–46, लॉर्ड हार्डिंग): मुदकी, फिरोजशाह, बद्दोवाल, अलीवाल, सबराओं (शाम सिंह अटारीवाला शहीद); लाहौर व भैरोवाल की संधियां (1846)।',
          'द्वितीय आंग्ल-सिख युद्ध (1848–49, लॉर्ड डलहौज़ी): रामनगर, चिल्लियांवाला, मुल्तान, गुजरात ("तोपों का युद्ध"); 29 मार्च 1849 को पंजाब का विलय।',
        ],
      },
      examTraps: {
        en: [
          'Trap: Faqir Aziz-ud-din was Foreign Minister, whereas Diwan Dina Nath was Finance Minister and Raja Dhian Singh was Prime Minister (Wazir).',
          'Trap: First British Resident at Lahore (1846) and President of the 1849 Board of Administration was Sir Henry Lawrence, whereas Sir John Lawrence became the First Chief Commissioner of Punjab in 1853.',
        ],
        pa: [
          'ਧੋਖਾ: ਫ਼ਕੀਰ ਅਜ਼ੀਜ਼-ਉਦ-ਦੀਨ ਵਿਦੇਸ਼ ਮੰਤਰੀ ਸਨ, ਜਦਕਿ ਦੀਵਾਨ ਦੀਨਾ ਨਾਥ ਵਿੱਤ ਮੰਤਰੀ ਅਤੇ ਧਿਆਨ ਸਿੰਘ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਸਨ।',
          'ਧੋਖਾ: 1849 ਦੇ ਪ੍ਰਸ਼ਾਸਕੀ ਬੋਰਡ ਦਾ ਪ੍ਰਧਾਨ ਸਰ ਹੈਨਰੀ ਲਾਰੈਂਸ ਸੀ, ਜਦਕਿ 1853 ਵਿੱਚ ਪੰਜਾਬ ਦਾ ਪਹਿਲਾ ਚੀਫ਼ ਕਮਿਸ਼ਨਰ ਸਰ ਜੌਨ ਲਾਰੈਂਸ ਬਣਿਆ।',
        ],
        hi: [
          'धोखा: फकीर अज़ीज़ुद्दीन विदेश मंत्री थे, जबकि दीवान दीना नाथ वित्त मंत्री और ध्यान सिंह प्रधानमंत्री थे।',
          'धोखा: 1849 के प्रशासनिक बोर्ड के अध्यक्ष सर हेनरी लॉरेंस थे, जबकि 1853 में पंजाब के प्रथम चीफ कमिश्नर सर जॉन लॉरेंस बने।',
        ],
      },
    },
    summary: {
      en: 'Maharaja Ranjit Singh (1780–1839) unified Punjab by capturing Lahore (1799), Amritsar (1805), Multan (1818), Kashmir (1819), and Peshawar (1834), signed the Treaty of Amritsar (1809) with Charles Metcalfe, and built a secular empire (Sarkar-i-Khalsa) and modernized army (Fauj-i-Khas). Following his death in 1839, court intrigues and the First (1845–46) and Second (1848–49) Anglo-Sikh Wars culminated in Lord Dalhousie’s annexation of Punjab on 29 March 1849.',
      pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (1780–1839) ਨੇ ਲਾਹੌਰ (1799), ਅੰਮ੍ਰਿਤਸਰ (1805), ਮੁਲਤਾਨ (1818), ਕਸ਼ਮੀਰ (1819) ਅਤੇ ਪਿਸ਼ਾਵਰ (1834) ਜਿੱਤ ਕੇ ਵਿਸ਼ਾਲ ਖ਼ਾਲਸਾ ਰਾਜ ਕਾਇਮ ਕੀਤਾ ਅਤੇ 1809 ਵਿੱਚ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ ਕੀਤੀ। ਉਹਨਾਂ ਦੇ ਅਕਾਲ ਚਲਾਣੇ ਮਗਰੋਂ ਪਹਿਲੇ (1845–46) ਅਤੇ ਦੂਜੇ (1848–49) ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧਾਂ ਤੋਂ ਬਾਅਦ 29 ਮਾਰਚ 1849 ਨੂੰ ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਨੇ ਪੰਜਾਬ ਦਾ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਰਲੇਵਾਂ ਕਰ ਲਿਆ।',
      hi: 'महाराजा रणजीत सिंह (1780–1839) ने लाहौर (1799), अमृतसर (1805), मुल्तान (1818), कश्मीर (1819) और पेशावर (1834) जीतकर विशाल सिख साम्राज्य स्थापित किया तथा 1809 में अमृतसर की संधि की। उनके निधन के पश्चात प्रथम (1845–46) और द्वितीय (1848–49) आंग्ल-सिख युद्धों के बाद 29 मार्च 1849 को लॉर्ड डलहौज़ी ने पंजाब का ब्रिटिश भारत में विलय कर लिया।',
    },
    keyNotes: {
      en: [
        '📌 1799 — Maharaja Ranjit Singh captured Lahore; 25 April 1809 — Treaty of Amritsar (with Charles Metcalfe).',
        '📌 1818 & 1819 — Conquest of Multan (1818) & Kashmir (1819); 1837 — Battle of Jamrud (Hari Singh Nalwa martyred).',
        '📌 1845–46 — First Anglo-Sikh War (Mudki, Ferozeshah, Baddowal, Aliwal, Sobraon; Treaty of Lahore & Bhairowal).',
        '📌 29 March 1849 — Annexation of Punjab by Lord Dalhousie after Second Anglo-Sikh War (Battle of Gujrat).',
      ],
      pa: [
        '📌 1799 — ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਵੱਲੋਂ ਲਾਹੌਰ ਜਿੱਤ; 25 ਅਪ੍ਰੈਲ 1809 — ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (ਚਾਰਲਸ ਮੈਟਕਾਫ਼)।',
        '📌 1818 ਅਤੇ 1819 — ਮੁਲਤਾਨ (1818) ਅਤੇ ਕਸ਼ਮੀਰ (1819) ਦੀ ਜਿੱਤ; 1837 — ਜਮਰੌਦ ਦੀ ਲੜਾਈ (ਹਰੀ ਸਿੰਘ ਨਲਵਾ ਸ਼ਹੀਦ)।',
        '📌 1845–46 — ਪਹਿਲਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (ਮੁਦਕੀ, ਫ਼ਿਰੋਜ਼ਸ਼ਾਹ, ਬੱਦੋਵਾਲ, ਅਲੀਵਾਲ, ਸਭਰਾਉਂ; ਲਾਹੌਰ ਤੇ ਭੈਰੋਵਾਲ ਸੰਧੀਆਂ)।',
        '📌 29 ਮਾਰਚ 1849 — ਦੂਜੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਮਗਰੋਂ ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਦੁਆਰਾ ਪੰਜਾਬ ਦਾ ਰਲੇਵਾਂ।',
      ],
      hi: [
        '📌 1799 — महाराजा रणजीत सिंह द्वारा लाहौर विजय; 25 अप्रैल 1809 — अमृतसर की संधि (चार्ल्स मेटकाफ)।',
        '📌 1818 एवं 1819 — मुल्तान (1818) व कश्मीर (1819) विजय; 1837 — जमरूद का युद्ध (हरि सिंह नलवा शहीद)।',
        '📌 1845–46 — प्रथम आंग्ल-सिख युद्ध (मुदकी, फिरोजशाह, बद्दोवाल, अलीवाल, सबराओं; लाहौर व भैरोवाल संधियां)।',
        '📌 29 मार्च 1849 — द्वितीय आंग्ल-सिख युद्ध के बाद लॉर्ड डलहौज़ी द्वारा पंजाब का ब्रिटिश विलय।',
      ],
    },
    flashcards: [
      {
        id: 'fc-mrs-1',
        q: {
          en: 'Between whom and on what date was the Treaty of Amritsar (1809) signed, and which river was fixed as the boundary?',
          pa: 'ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (1809) ਕਦੋਂ ਅਤੇ ਕਿਸ-ਕਿਸ ਵਿਚਕਾਰ ਹੋਈ ਅਤੇ ਕਿਹੜੇ ਦਰਿਆ ਨੂੰ ਸਰਹੱਦ ਮੰਨਿਆ ਗਿਆ?',
          hi: 'अमृतसर की संधि (1809) कब और किसके बीच हुई तथा किस नदी को सीमा माना गया?',
        },
        a: {
          en: 'Signed on 25 April 1809 between Maharaja Ranjit Singh and British envoy Charles T. Metcalfe (under Lord Minto I), fixing the River Sutlej as the boundary.',
          pa: '25 ਅਪ੍ਰੈਲ 1809 ਨੂੰ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਅਤੇ ਚਾਰਲਸ ਮੈਟਕਾਫ਼ (ਲਾਰਡ ਮਿੰਟੋ ਪਹਿਲਾ) ਵਿਚਕਾਰ; ਸਤਲੁਜ ਦਰਿਆ ਨੂੰ ਸਰਹੱਦ ਮੰਨਿਆ ਗਿਆ।',
          hi: '25 अप्रैल 1809 को महाराजा रणजीत सिंह और चार्ल्स मेटकाफ (लॉर्ड मिंटो प्रथम) के बीच; सतलुज नदी को सीमा माना गया।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-mrs-2',
        q: {
          en: 'Who was the Foreign Minister of Maharaja Ranjit Singh’s Sarkar-i-Khalsa?',
          pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੀ ਸਰਕਾਰ-ਏ-ਖ਼ਾਲਸਾ ਦਾ ਵਿਦੇਸ਼ ਮੰਤਰੀ ਕੌਣ ਸੀ?',
          hi: 'महाराजा रणजीत सिंह की सरकार-ए-खालसा का विदेश मंत्री कौन था?',
        },
        a: {
          en: 'Faqir Aziz-ud-din.',
          pa: 'ਫ਼ਕੀਰ ਅਜ਼ੀਜ਼-ਉਦ-ਦੀਨ।',
          hi: 'फकीर अज़ीज़ुद्दीन।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-mrs-3',
        q: {
          en: 'Which Sikh general attained heroic martyrdom in the Battle of Sobraon (10 February 1846) during the First Anglo-Sikh War?',
          pa: 'ਪਹਿਲੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਦੌਰਾਨ ਸਭਰਾਉਂ ਦੀ ਲੜਾਈ (10 ਫ਼ਰਵਰੀ 1846) ਵਿੱਚ ਕਿਹੜਾ ਸਿੱਖ ਜਰਨੈਲ ਸ਼ਹੀਦ ਹੋਇਆ?',
          hi: 'प्रथम आंग्ल-सिख युद्ध के दौरान सबराओं के युद्ध (10 फरवरी 1846) में कौन-सा सिख सेनापति शहीद हुआ?',
        },
        a: {
          en: 'Sardar Sham Singh Attariwala.',
          pa: 'ਸਰਦਾਰ ਸ਼ਾਮ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ।',
          hi: 'सरदार शाम सिंह अटारीवाला।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-mrs-4',
        q: {
          en: 'Which battle of the Second Anglo-Sikh War (fought on 21 February 1849) is famous in history as the "Battle of Guns"?',
          pa: 'ਦੂਜੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਦੀ ਕਿਹੜੀ ਲੜਾਈ (21 ਫ਼ਰਵਰੀ 1849) ਨੂੰ ਇਤਿਹਾਸ ਵਿੱਚ "ਤੋਪਾਂ ਦੀ ਲੜਾਈ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
          hi: 'द्वितीय आंग्ल-सिख युद्ध के किस युद्ध (21 फरवरी 1849) को इतिहास में "तोपों का युद्ध" कहा जाता है?',
        },
        a: {
          en: 'Battle of Gujrat (21 February 1849), after which Lord Dalhousie annexed Punjab on 29 March 1849.',
          pa: 'ਗੁਜਰਾਤ ਦੀ ਲੜਾਈ (21 ਫ਼ਰਵਰੀ 1849), ਜਿਸ ਤੋਂ ਬਾਅਦ 29 ਮਾਰਚ 1849 ਨੂੰ ਪੰਜਾਬ ਦਾ ਰਲੇਵਾਂ ਹੋਇਆ।',
          hi: 'गुजरात का युद्ध (21 फरवरी 1849), जिसके बाद 29 मार्च 1849 को पंजाब का विलय हुआ।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Maharaja Ranjit Singh, Sarkar-i-Khalsa & Anglo-Sikh Wars',
        channel: 'PSEB / NCERT History Archive',
        url: 'https://www.youtube.com/results?search_query=Maharaja+Ranjit+Singh+and+Anglo+Sikh+Wars+Punjab+History',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'History and Culture of Punjab (Class 10)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Chapters 10–13: Maharaja Ranjit Singh and Anglo-Sikh Wars',
        type: 'state-board',
      },
    ],
    syllabusReference: {
      title: 'ERB Punjab Master Cadre SST & PSSSB History Syllabus',
      url: 'https://educationrecruitmentboard.com',
      body: 'Education Recruitment Board (ERB) & PSSSB',
      verifiedOn: '2026-10-10',
    },
  },

  // ==========================================================================
  // TOPIC 8: PUNJAB IN THE FREEDOM STRUGGLE & SOCIO-RELIGIOUS REFORM MOVEMENTS (1849 - 1947)
  // ==========================================================================
  'punjab-freedom-movements': {
    id: 'punjab-freedom-movements',
    topicId: 'punjab-freedom-movements',
    subjectId: 'social-science',
    category: 'history',
    coverageStatus: 'complete',
    editorialStatus: 'authored',
    title: {
      en: 'Punjab in the Freedom Struggle (1849–1947): Kuka, Singh Sabha, Ghadar, Akali Morchas & Bhagat Singh',
      pa: 'ਆਜ਼ਾਦੀ ਸੰਘਰਸ਼ ਵਿੱਚ ਪੰਜਾਬ ਦਾ ਯੋਗਦਾਨ (1849–1947): ਕੂਕਾ ਲਹਿਰ, ਸਿੰਘ ਸਭਾ, ਗ਼ਦਰ ਪਾਰਟੀ, ਅਕਾਲੀ ਮੋਰਚੇ ਅਤੇ ਭਗਤ ਸਿੰਘ',
      hi: 'स्वतंत्रता संग्राम में पंजाब का योगदान (1849–1947): कूका आंदोलन, सिंह सभा, गदर पार्टी, अकाली मोर्चे एवं भगत सिंह',
    },
    examRelevance: 'Punjab Master Cadre SST (4–5 Qs), PSSSB Clerk (3–4 Qs), ETT, Patwari & Police',
    estimatedTime: '50 mins',
    prerequisites: {
      en: [
        'British annexation of Punjab on 29 March 1849 and colonial administrative policies (Canal Colonies, Christian missionary activity).',
        'Nationalist awakening across India and overseas Punjabi diaspora in North America and East Asia.',
      ],
      pa: [
        '29 ਮਾਰਚ 1849 ਨੂੰ ਪੰਜਾਬ ਦਾ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਰਲੇਵਾਂ ਅਤੇ ਬਸਤੀਵਾਦੀ ਨੀਤੀਆਂ।',
        'ਭਾਰਤੀ ਰਾਸ਼ਟਰੀ ਜਾਗ੍ਰਿਤੀ ਅਤੇ ਵਿਦੇਸ਼ਾਂ (ਅਮਰੀਕਾ, ਕੈਨੇਡਾ) ਵਿੱਚ ਵਸਦੇ ਪੰਜਾਬੀਆਂ ਦਾ ਸੰਘਰਸ਼।',
      ],
      hi: [
        '29 मार्च 1849 को पंजाब का ब्रिटिश विलय और औपनिवेशिक नीतियां।',
        'राष्ट्रीय जागृति तथा उत्तरी अमेरिका व कनाडा में प्रवासी पंजाबियों का संघर्ष।',
      ],
    },
    learningObjectives: {
      en: [
        'Analyze socio-religious reform movements in Punjab: Nirankari (Baba Dayal Das), Namdhari/Kuka (Baba Ram Singh, 1857, Swadeshi boycott, Malerkotla executions 1872), Arya Samaj (1877), and Singh Sabha Movement (Amritsar 1873 vs Lahore 1879, Chief Khalsa Diwan 1902, Anand Marriage Act 1909).',
        'Detail the agrarian unrest (Pagri Sambhal Jatta 1907), Ghadar Party (1913, Baba Sohan Singh Bhakna, Lala Har Dayal, Kartar Singh Sarabha), Komagata Maru (1914, Baba Gurdit Singh), and Jallianwala Bagh Massacre (13 April 1919).',
        'Examine the Gurdwara Reform / Akali Movement (SGPC 1920, Nankana Sahib, Keys Morcha, Guru Ka Bagh, Jaito Morcha, Sikh Gurdwaras Act 1925), Babbar Akali Movement, Shaheed Bhagat Singh (Naujawan Bharat Sabha 1926, HSRA 1928, 23 March 1931), and Shaheed Udham Singh (1940).',
      ],
      pa: [
        'ਸਮਾਜਿਕ-ਧਾਰਮਿਕ ਸੁਧਾਰ ਲਹਿਰਾਂ: ਨਿਰੰਕਾਰੀ (ਬਾਬਾ ਦਿਆਲ ਦਾਸ), ਨਾਮਧਾਰੀ/ਕੂਕਾ (ਬਾਬਾ ਰਾਮ ਸਿੰਘ, 1857, ਮਲੇਰਕੋਟਲਾ ਸਾਕਾ 1872) ਅਤੇ ਸਿੰਘ ਸਭਾ ਲਹਿਰ (ਅੰਮ੍ਰਿਤਸਰ 1873 ਤੇ ਲਾਹੌਰ 1879, ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ 1902, ਅਨੰਦ ਮੈਰਿਜ ਐਕਟ 1909) ਨੂੰ ਸਮਝਣਾ।',
        'ਪਗੜੀ ਸੰਭਾਲ ਜੱਟਾ (1907), ਗ਼ਦਰ ਪਾਰਟੀ (1913, ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ, ਲਾਲਾ ਹਰਦਿਆਲ, ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ), ਕਾਮਾਗਾਟਾਮਾਰੂ (1914, ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ) ਅਤੇ ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ ਸਾਕਾ (13 ਅਪ੍ਰੈਲ 1919) ਦਾ ਅਧਿਐਨ ਕਰਨਾ।',
        'ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ (ਅਕਾਲੀ) ਲਹਿਰ (SGPC 1920, ਸਾਕਾ ਨਨਕਾਣਾ ਸਾਹਿਬ, ਚਾਬੀਆਂ ਦਾ ਮੋਰਚਾ, ਗੁਰੂ ਕਾ ਬਾਗ਼, ਜੈਤੋ ਦਾ ਮੋਰਚਾ, ਸਿੱਖ ਗੁਰਦੁਆਰਾ ਐਕਟ 1925), ਬੱਬਰ ਅਕਾਲੀ ਲਹਿਰ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ (23 ਮਾਰਚ 1931) ਅਤੇ ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ (1940) ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।',
      ],
      hi: [
        'सामाजिक-धार्मिक सुधार आंदोलनों: निरंकारी (बाबा दयाल दास), नामधारी/कूका (बाबा राम सिंह, 1857, मलेरकोटला कांड 1872) और सिंह सभा आंदोलन (अमृतसर 1873 व लाहौर 1879, चीफ खालसा दीवान 1902, आनंद मैरिज एक्ट 1909) को समझना।',
        'पगड़ी संभाल जट्टा (1907), गदर पार्टी (1913, बाबा सोहन सिंह भकना, लाला हरदयाल, करतार सिंह सराभा), कामागाटामारू (1914, बाबा गुरदित्त सिंह) और जलियांवाला बाग हत्याकांड (13 अप्रैल 1919) का अध्ययन करना।',
        'गुरुद्वारा सुधार (अकाली) आंदोलन (SGPC 1920, ननकाना साहिब, चाबियों का मोर्चा, गुरु का बाग, जैतो का मोर्चा, सिख गुरुद्वारा अधिनियम 1925), बब्बर अकाली आंदोलन, शहीद भगत सिंह (23 मार्च 1931) और शहीद उधम सिंह (1940) का विश्लेषण करना।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🕊️ 1. Socio-Religious Reform Movements in 19th-Century Punjab</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Nirankari Movement (1851):</strong> Founded at <strong>Rawalpindi</strong> by <strong>Baba Dayal Das</strong> (succeeded by Baba Darbara Singh and Ratta Ji). Preached worship of formless God (<em>Dhan Nirankar</em>), rejected Brahmanical rituals and idol worship, and introduced the simple Sikh marriage ceremony (later codified in the <strong>Anand Marriage Act of 1909</strong>).</li>
              <li><strong>Namdhari / Kuka Movement (12 April 1857):</strong> Founded on Baisakhi 1857 at <strong>Bhaini Sahib (Ludhiana)</strong> by <strong>Baba Ram Singh</strong> (disciple of Baba Balak Singh of Hazro).
                <br/>• <em>Pioneers of Swadeshi & Non-Cooperation:</em> Decades before Mahatma Gandhi, the Kukas boycotted British courts, British schools, British postal services (establishing their own postal courier system and <em>Subas</em>), and foreign mill-made cloth (wearing hand-spun white khadi and tying turbans horizontally — <em>Sidhi Pag</em>). Published the journal <em>Satyug</em>.
                <br/>• <em>Malerkotla Tragedy (January 1872):</em> Following clashes with slaughterhouses at Amritsar, Raikot, and Malerkotla, Deputy Commissioner of Ludhiana <strong>L. Cowan</strong> (supported by Commissioner Forsyth) executed <strong>66 Kuka Sikhs</strong> (including 12-year-old boy <strong>Bishan Singh</strong>) by <strong>blowing them from the mouths of cannons</strong> without trial on 17–18 January 1872. Baba Ram Singh was exiled to <strong>Rangoon (Burma)</strong>.
              </li>
              <li><strong>Singh Sabha Movement (1873 & 1879) & Chief Khalsa Diwan (1902):</strong>
                <br/>• <strong>Amritsar Singh Sabha (1873):</strong> Triggered by Christian conversion attempts on 4 Sikh students of Mission School Amritsar and derogatory remarks by Shardha Ram Phillauri. Founded in Oct 1873 with <strong>Thakur Singh Sandhawalia</strong> as President and <strong>Giani Gian Singh</strong> as Secretary.
                <br/>• <strong>Lahore Singh Sabha (1879):</strong> Founded by <strong>Prof. Gurmukh Singh</strong> and <strong>Bhai Ditt Singh</strong> (editor of <em>Khalsa Akhbar</em>); more egalitarian and progressive, championing lower-caste equality and founding <strong>Khalsa College, Amritsar in 1892</strong>.<strong>Bhai Kahn Singh Nabha</strong> authored the landmark <em>"Hum Hindu Nahin"</em> (1898) and the encyclopedic <em>"Mahan Kosh"</em> (1930).
                <br/>• <strong>Chief Khalsa Diwan (30 October 1902):</strong> Merged the Singh Sabhas with <strong>Bhai Arjan Singh Bagrian</strong> as President and <strong>Sardar Sundar Singh Majithia</strong> as Secretary; instrumental in passing the <strong>Anand Marriage Act (1909)</strong> and led spiritually by <strong>Bhai Vir Singh</strong> (Father of Modern Punjabi Literature; founded <em>Khalsa Tract Society</em> 1894 & <em>Khalsa Samachar</em> 1899).
              </li>
            </ul>
          </div>

          <div class="bg-amber-950/50 border border-amber-500/30 p-5 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">🔥 2. Pagri Sambhal Jatta (1907), Ghadar Party (1913), Komagata Maru (1914) & Jallianwala Bagh (1919)</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Agrarian Agitation — "Pagri Sambhal Jatta" (1907):</strong> Against the British <em>Punjab Colonisation Bill (1906)</em> and increased Bari Doab canal water rates, <strong>Sardar Ajit Singh</strong> (uncle of Shaheed Bhagat Singh, founder of <strong>Bharat Mata Society / Anjuman-i-Muhibban-i-Watan</strong>) and <strong>Lala Lajpat Rai</strong> led massive peasant rallies at Lyallpur (1907), where Banke Dayal sang the iconic anthem <em>"Pagri Sambhal Jatta."</em> Both leaders were deported to <strong>Mandalay Jail (Burma)</strong> before Lord Minto vetoed the bill.</li>
              <li><strong>The Ghadar Party (1913):</strong> Founded by Punjabi immigrants in the USA and Canada (initially as <em>Pacific Coast Hindi Association</em> at Astoria, Oregon in May 1913, headquartered at <strong>Yugantar Ashram, 436 Hill Street, San Francisco</strong>):
                <br/>• <strong>Founding President:</strong> <strong>Baba Sohan Singh Bhakna</strong> | <strong>General Secretary:</strong> <strong>Lala Har Dayal</strong> | <strong>Treasurer:</strong> Kanshi Ram | <strong>Youth Icon:</strong> <strong>Kartar Singh Sarabha</strong> (who ran the printing press for the weekly paper <strong>"The Ghadar"</strong>, first published in Urdu on 1 Nov 1913 and Gurmukhi on 9 Dec 1913).
                <br/>• <em>Ghadar Uprising (Feb 1915):</em> Planned an armed mutiny across Indian cantonments on 21/19 February 1915 with <strong>Rash Behari Bose</strong>; leaked by traitor <strong>Kirpal Singh</strong>. In the <strong>First Lahore Conspiracy Case (1915)</strong>, 19-year-old <strong>Kartar Singh Sarabha</strong>, Vishnu Ganesh Pingle, and Kanshi Ram were hanged on <strong>16 November 1915</strong>.
              </li>
              <li><strong>Komagata Maru Incident (1914):</strong> Challenging Canada’s discriminatory <em>"Continuous Passage Regulation"</em>, wealthy contractor <strong>Baba Gurdit Singh of Sarhali</strong> chartered the Japanese steamship <strong>Komagata Maru</strong> (renamed <em>Guru Nanak Jahaz</em>) from Hong Kong in April 1914 with <strong>376 passengers</strong> (340 Sikhs, 24 Muslims, 12 Hindus). Denied entry at <strong>Vancouver</strong> for two months, the ship was forced back to <strong>Budge Budge harbour (Calcutta) on 29 September 1914</strong>, where British police opened fire, killing 19 passengers.</li>
              <li><strong>Rowlatt Satyagraha & Jallianwala Bagh Massacre (Baisakhi, 13 April 1919):</strong> Protesting the draconian Rowlatt Act ("No Dalil, No Vakil, No Appeal") and the arrest of Amritsar leaders <strong>Dr. Saifuddin Kitchlew and Dr. Satyapal</strong> on 10 April 1919, a peaceful crowd gathered at <strong>Jallianwala Bagh, Amritsar</strong> on <strong>Baisakhi, 13 April 1919</strong> (betrayed by Hans Raj). Under Lieutenant-Governor <strong>Sir Michael O'Dwyer</strong>, <strong>Brigadier-General Reginald Dyer</strong> blocked the single narrow exit and ordered 1,650 rounds of unprovoked firing for 10 minutes, killing hundreds (Rabindranath Tagore renounced his Knighthood; the <strong>Hunter Commission</strong> investigated it).</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🏛️ 3. Gurdwara Reform (Akali) Movement (1920–1925) & Babbar Akalis</h4>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              Launched to liberate historic Sikh Gurdwaras from corrupt, British-backed hereditary <strong>Mahants (Udasi custodians)</strong>. Led to the foundation of the <strong>Shiromani Gurdwara Parbandhak Committee (SGPC) on 15 November 1920</strong> (First President: <strong>Sardar Sundar Singh Majithia</strong>; later <strong>Baba Kharak Singh</strong>) and the <strong>Shiromani Akali Dal on 14 December 1920</strong> (First President: <strong>Sardar Sarmukh Singh Jhabal</strong>):
            </p>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Saka Nankana Sahib (20 February 1921):</strong> Notorious <strong>Mahant Narain Das</strong> hired Pathan mercenaries and massacred/burnt alive ~150 peaceful Akali reformers led by <strong>Bhai Lachhman Singh Dharowali</strong> inside Janam Asthan Nankana Sahib.</li>
              <li><strong>Keys Morcha / Chabian da Morcha (Nov 1921 – Jan 1922):</strong> When the Deputy Commissioner of Amritsar seized the keys of the Harmandir Sahib <em>Toshakhana</em> (treasury), Akalis led by <strong>Baba Kharak Singh</strong> launched a massive agitation. The British surrendered the keys in Jan 1922, prompting Mahatma Gandhi to telegraph Baba Kharak Singh: <strong>"First decisive battle for India's freedom won. Congratulations."</strong></li>
              <li><strong>Guru Ka Bagh Morcha (August–November 1922):</strong> At Ghukewali (Amritsar), <strong>Mahant Sundar Das</strong> had Akalis arrested for cutting dry acacia (Kikar) wood for Langar. Batches of non-violent Akalis endured brutal police lathi-charges (witnessed by <strong>Rev. C.F. Andrews</strong>) until Sir Ganga Ram intervened and the Gurdwaras were freed.</li>
              <li><strong>Saka Panja Sahib (30 October 1922):</strong> <strong>Bhai Partap Singh and Bhai Karam Singh</strong> lay down on the railway tracks at Hasan Abdal, sacrificing their lives to stop a train carrying hungry Akali prisoners so they could be fed Langar.</li>
              <li><strong>Jaito Morcha (1923–1925):</strong> Protesting the forced abdication of pro-Akali <strong>Maharaja Ripudaman Singh of Nabha</strong> and the disruption of an Akhand Path at Gurdwara Gangsar, Jaito (witnessed by Jawaharlal Nehru, who was jailed at Nabha).</li>
              <li><strong>Sikh Gurdwaras Act (July 1925):</strong> Enacted during the governorship of <strong>Sir Malcolm Hailey</strong> (came into force 1 Nov 1925), legally transferring control of all historic Gurdwaras to the democratically elected <strong>SGPC</strong>.</li>
              <li><strong>Babbar Akali Movement (1921–1926):</strong> Militant wing formed in Hoshiarpur/Jalandhar Doab by <strong>Kishan Singh Gargaj</strong> and <strong>Master Mota Singh</strong> (newspaper: <em>Babbar Akali Doaba</em>) to eliminate British touts (<em>Jholi-Chuks</em>) and officials responsible for the Nankana and Guru Ka Bagh atrocities.</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🇮🇳 4. Shaheed-e-Azam Bhagat Singh, Shaheed Udham Singh & Partition (1926–1947)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Shaheed-e-Azam Bhagat Singh (1907–1931):</strong> Born on <strong>28 September 1907</strong> at Banga (Lyallpur) to Kishan Singh and Vidyavati.
                <br/>• Founded the <strong>Naujawan Bharat Sabha</strong> at Lahore in <strong>March 1926</strong> (with Chhabil Das and Bhagwati Charan Vohra) and restructured the HRA into the <strong>Hindustan Socialist Republican Association (HSRA)</strong> at Ferozeshah Kotla, Delhi in <strong>September 1928</strong> (with Chandrashekhar Azad and Sukhdev).
                <br/>• <strong>Saunders Execution (17 December 1928):</strong> After <strong>Lala Lajpat Rai</strong> died from lathi blows inflicted by Superintendent James A. Scott during the anti-Simon Commission protest at Lahore (30 Oct 1928), Bhagat Singh, Rajguru, and Chandrashekhar Azad shot Assistant Superintendent <strong>J.P. Saunders</strong> in Lahore.
                <br/>• <strong>Central Legislative Assembly Bombing (8 April 1929):</strong> Bhagat Singh and <strong>Batukeshwar Dutt</strong> threw two non-lethal smoke bombs in the Central Assembly, Delhi (against the Public Safety Bill & Trade Disputes Bill) and courted arrest shouting <em>"Inquilab Zindabad!"</em> ("to make the deaf hear").
                <br/>• <strong>Lahore Conspiracy Case & Martyrdom (23 March 1931):</strong> Following a historic 116-day prison hunger strike (in which <strong>Jatindra Nath Das</strong> died on the 63rd day), <strong>Shaheed Bhagat Singh, Shivaram Rajguru, and Sukhdev Thapar</strong> were hanged in Lahore Central Jail on <strong>23 March 1931</strong> and cremated on the banks of the Sutlej at <strong>Hussainiwala (Ferozepur)</strong>. Authored the famous essay <em>"Why I Am an Atheist"</em> and Jail Notebook.
              </li>
              <li><strong>Praja Mandal Movement (1928):</strong> Punjab Riyasti Praja Mandal founded at Mansa on 17 July 1928 with <strong>Sewa Singh Thikriwala</strong> as President to fight autocracy in the princely states (Patiala, Nabha, Jind).</li>
              <li><strong>Shaheed Udham Singh ("Ram Mohammad Singh Azad", 1899–1940):</strong> Born at <strong>Sunam</strong> (Sangrur); after waiting 21 years to avenge the Jallianwala Bagh massacre, he shot dead former Punjab Lt.-Governor <strong>Sir Michael O'Dwyer</strong> at <strong>Caxton Hall, London on 13 March 1940</strong> and was hanged at Pentonville Prison on <strong>31 July 1940</strong>.</li>
              <li><strong>Radcliffe Boundary Commission (1947):</strong> Chaired by <strong>Sir Cyril Radcliffe</strong> (with Justice Teja Singh, Justice Mehr Chand Mahajan, Justice Din Muhammad, and Justice Muhammad Munir), partitioning Punjab in August 1947 into East Punjab (India) and West Punjab (Pakistan).</li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🕊️ 1. 19ਵੀਂ ਸਦੀ ਦੀਆਂ ਸਮਾਜਿਕ-ਧਾਰਮਿਕ ਸੁਧਾਰ ਲਹਿਰਾਂ</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>ਨਿਰੰਕਾਰੀ ਲਹਿਰ (1851):</strong> <strong>ਬਾਬਾ ਦਿਆਲ ਦਾਸ</strong> ਵੱਲੋਂ <strong>ਰਾਵਲਪਿੰਡੀ</strong> ਵਿਖੇ ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ ("ਧੰਨ ਨਿਰੰਕਾਰ")। ਮੂਰਤੀ ਪੂਜਾ ਅਤੇ ਬ੍ਰਾਹਮਣੀ ਰਸਮਾਂ ਦਾ ਵਿਰੋਧ ਕੀਤਾ ਅਤੇ ਅਨੰਦ ਕਾਰਜ ਰੀਤ ਨੂੰ ਪ੍ਰਚਲਿਤ ਕੀਤਾ।</li>
              <li><strong>ਨਾਮਧਾਰੀ / ਕੂਕਾ ਲਹਿਰ (12 ਅਪ੍ਰੈਲ 1857):</strong> <strong>ਬਾਬਾ ਰਾਮ ਸਿੰਘ ਜੀ</strong> ਵੱਲੋਂ ਵਿਸਾਖੀ 1857 ਨੂੰ <strong>ਭੈਣੀ ਸਾਹਿਬ (ਲੁਧਿਆਣਾ)</strong> ਵਿਖੇ ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ। ਅੰਗਰੇਜ਼ੀ ਅਦਾਲਤਾਂ, ਸਕੂਲਾਂ, ਡਾਕ-ਪ੍ਰਣਾਲੀ ਅਤੇ ਵਿਦੇਸ਼ੀ ਕੱਪੜਿਆਂ ਦਾ ਬਾਈਕਾਟ ਕਰਕੇ ਸਵਦੇਸ਼ੀ ਲਹਿਰ ਚਲਾਈ। <strong>ਜਨਵਰੀ 1872 ਵਿੱਚ ਮਲੇਰਕੋਟਲਾ</strong> ਵਿਖੇ ਡਿਪਟੀ ਕਮਿਸ਼ਨਰ <strong>ਕੋਵਨ (Cowan)</strong> ਨੇ <strong>66 ਕੂਕਾ ਸਿੰਘਾਂ</strong> ਨੂੰ ਤੋਪਾਂ ਅੱਗੇ ਉਡਾ ਕੇ ਸ਼ਹੀਦ ਕੀਤਾ ਅਤੇ ਬਾਬਾ ਰਾਮ ਸਿੰਘ ਨੂੰ ਰੰਗੂਨ (ਬਰਮਾ) ਜਲਾਵਤਨ ਕਰ ਦਿੱਤਾ।</li>
              <li><strong>ਸਿੰਘ ਸਭਾ ਲਹਿਰ (1873 ਅਤੇ 1879) ਤੇ ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ (1902):</strong>
                <br/>• <strong>ਅੰਮ੍ਰਿਤਸਰ ਸਿੰਘ ਸਭਾ (1873):</strong> ਪ੍ਰਧਾਨ <strong>ਠਾਕੁਰ ਸਿੰਘ ਸੰਧਾਵਾਲੀਆ</strong> ਅਤੇ ਸਕੱਤਰ <strong>ਗਿਆਨੀ ਗਿਆਨ ਸਿੰਘ</strong>।
                <br/>• <strong>ਲਾਹੌਰ ਸਿੰਘ ਸਭਾ (1879):</strong> <strong>ਪ੍ਰੋ. ਗੁਰਮੁਖ ਸਿੰਘ</strong> ਅਤੇ <strong>ਭਾਈ ਦਿੱਤ ਸਿੰਘ</strong> (ਸੰਪਾਦਕ 'ਖ਼ਾਲਸਾ ਅਖ਼ਬਾਰ')। 1892 ਵਿੱਚ <strong>ਖ਼ਾਲਸਾ ਕਾਲਜ, ਅੰਮ੍ਰਿਤਸਰ</strong> ਦੀ ਸਥਾਪਨਾ ਹੋਈ। <strong>ਭਾਈ ਕਾਨ੍ਹ ਸਿੰਘ ਨਾਭਾ</strong> ਨੇ 'ਹਮ ਹਿੰਦੂ ਨਹੀਂ' (1898) ਅਤੇ 'ਮਹਾਨ ਕੋਸ਼' (1930) ਰਚਿਆ।
                <br/>• <strong>ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ (30 ਅਕਤੂਬਰ 1902):</strong> ਪ੍ਰਧਾਨ ਭਾਈ ਅਰਜਨ ਸਿੰਘ ਬਾਗੜੀਆਂ ਅਤੇ ਸਕੱਤਰ <strong>ਸਰਦਾਰ ਸੁੰਦਰ ਸਿੰਘ ਮਜੀਠੀਆ</strong>; <strong>ਅਨੰਦ ਮੈਰਿਜ ਐਕਟ (1909)</strong> ਪਾਸ ਕਰਵਾਇਆ।
              </li>
            </ul>
          </div>

          <div class="bg-amber-950/50 border border-amber-500/30 p-5 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">🔥 2. ਪਗੜੀ ਸੰਭਾਲ ਜੱਟਾ (1907), ਗ਼ਦਰ ਪਾਰਟੀ (1913), ਕਾਮਾਗਾਟਾਮਾਰੂ (1914) ਅਤੇ ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ (1919)</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>ਪਗੜੀ ਸੰਭਾਲ ਜੱਟਾ (1907):</strong> ਅੰਗਰੇਜ਼ਾਂ ਦੇ ਆਬਾਦਕਾਰੀ ਬਿੱਲ (Colonisation Bill) ਵਿਰੁੱਧ <strong>ਸਰਦਾਰ ਅਜੀਤ ਸਿੰਘ</strong> (ਭਾਰਤ ਮਾਤਾ ਸੁਸਾਇਟੀ) ਅਤੇ <strong>ਲਾਲਾ ਲਾਜਪਤ ਰਾਇ</strong> ਨੇ ਅੰਦੋਲਨ ਚਲਾਇਆ (ਗੀਤਕਾਰ: ਬਾਂਕੇ ਦਿਆਲ)। ਦੋਵਾਂ ਆਗੂਆਂ ਨੂੰ ਮਾਂਡਲੇ ਜੇਲ੍ਹ (ਬਰਮਾ) ਭੇਜਿਆ ਗਿਆ।</li>
              <li><strong>ਗ਼ਦਰ ਪਾਰਟੀ (1913):</strong> ਅਮਰੀਕਾ ਦੇ <strong>ਸੈਨ ਫਰਾਂਸਿਸਕੋ (ਯੁਗਾਂਤਰ ਆਸ਼ਰਮ)</strong> ਵਿਖੇ ਸਥਾਪਿਤ। ਬਾਨੀ ਪ੍ਰਧਾਨ: <strong>ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ</strong>, ਜਨਰਲ ਸਕੱਤਰ: <strong>ਲਾਲਾ ਹਰਦਿਆਲ</strong>, ਅਤੇ ਪ੍ਰਮੁੱਖ ਨੌਜਵਾਨ ਆਗੂ: <strong>ਸ਼ਹੀਦ ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ</strong> (ਅਖ਼ਬਾਰ: 'ਗ਼ਦਰ')। ਕਿਰਪਾਲ ਸਿੰਘ ਦੀ ਗ਼ੱਦਾਰੀ ਕਾਰਨ ਫ਼ਰਵਰੀ 1915 ਦਾ ਵਿਦਰੋਹ ਅਸਫ਼ਲ ਰਿਹਾ ਅਤੇ <strong>16 ਨਵੰਬਰ 1915</strong> ਨੂੰ ਲਾਹੌਰ ਵਿਖੇ 19 ਸਾਲਾ ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ ਨੂੰ ਫਾਂਸੀ ਦਿੱਤੀ ਗਈ।</li>
              <li><strong>ਕਾਮਾਗਾਟਾਮਾਰੂ ਸਾਕਾ (1914):</strong> <strong>ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ ਸਰਹਾਲੀ</strong> ਨੇ <strong>376 ਮੁਸਾਫ਼ਰਾਂ</strong> ਨਾਲ ਜਾਪਾਨੀ ਜਹਾਜ਼ ਕਾਮਾਗਾਟਾਮਾਰੂ (ਗੁਰੂ ਨਾਨਕ ਜਹਾਜ਼) ਹਾਂਗਕਾਂਗ ਤੋਂ ਵੈਨਕੂਵਰ (ਕੈਨੇਡਾ) ਲਿਆਂਦਾ। ਵਾਪਸੀ 'ਤੇ <strong>29 ਸਤੰਬਰ 1914 ਨੂੰ ਬਜਬਜ ਘਾਟ (ਕਲਕੱਤਾ)</strong> ਵਿਖੇ ਪੁਲਿਸ ਗੋਲੀਬਾਰੀ ਵਿੱਚ 19 ਯਾਤਰੀ ਸ਼ਹੀਦ ਹੋਏ।</li>
              <li><strong>ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ ਸਾਕਾ (13 ਅਪ੍ਰੈਲ 1919):</strong> ਰੌਲਟ ਐਕਟ ਅਤੇ ਡਾ. ਸੈਫ਼ਉੱਦੀਨ ਕਿਚਲੂ ਤੇ ਡਾ. ਸੱਤਿਆਪਾਲ ਦੀ ਗ੍ਰਿਫ਼ਤਾਰੀ ਦੇ ਵਿਰੋਧ ਵਿੱਚ ਵਿਸਾਖੀ ਵਾਲੇ ਦਿਨ ਇਕੱਠੇ ਹੋਏ ਨਿਹੱਥੇ ਲੋਕਾਂ ਉੱਤੇ <strong>ਜਨਰਲ ਰੈਜੀਨਾਲਡ ਡਾਇਰ</strong> (ਲੈਫ਼ਟੀਨੈਂਟ ਗਵਰਨਰ <strong>ਮਾਈਕਲ ਓਡਵਾਇਰ</strong> ਦੇ ਸਮੇਂ) ਨੇ ਗੋਲੀਆਂ ਚਲਾਈਆਂ।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🏛️ 3. ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ (ਅਕਾਲੀ) ਲਹਿਰ (1920–1925) ਅਤੇ ਬੱਬਰ ਅਕਾਲੀ</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>SGPC (15 ਨਵੰਬਰ 1920) ਅਤੇ ਸ਼੍ਰੋਮਣੀ ਅਕਾਲੀ ਦਲ (14 ਦਸੰਬਰ 1920):</strong> ਭ੍ਰਿਸ਼ਟ ਮਹੰਤਾਂ ਤੋਂ ਗੁਰਦੁਆਰੇ ਆਜ਼ਾਦ ਕਰਵਾਉਣ ਲਈ ਸਥਾਪਨਾ।</li>
              <li><strong>ਪ੍ਰਮੁੱਖ ਮੋਰਚੇ:</strong> (1) <strong>ਸਾਕਾ ਨਨਕਾਣਾ ਸਾਹਿਬ (20 ਫ਼ਰਵਰੀ 1921)</strong> — ਮਹੰਤ ਨਰਾਇਣ ਦਾਸ ਨੇ ਭਾਈ ਲਛਮਣ ਸਿੰਘ ਧਾਰੋਵਾਲੀ ਸਮੇਤ ~150 ਸਿੰਘ ਸ਼ਹੀਦ ਕੀਤੇ; (2) <strong>ਚਾਬੀਆਂ ਦਾ ਮੋਰਚਾ (1921–22)</strong> — ਬਾਬਾ ਖੜਕ ਸਿੰਘ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਜਿੱਤ (ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ ਇਸ ਨੂੰ "ਭਾਰਤ ਦੀ ਆਜ਼ਾਦੀ ਦੀ ਪਹਿਲੀ ਲੜਾਈ ਦੀ ਜਿੱਤ" ਕਿਹਾ); (3) <strong>ਗੁਰੂ ਕਾ ਬਾਗ਼ ਮੋਰਚਾ (1922)</strong> — ਮਹੰਤ ਸੁੰਦਰ ਦਾਸ ਵਿਰੁੱਧ; (4) <strong>ਸਾਕਾ ਪੰਜਾ ਸਾਹਿਬ (30 ਅਕਤੂਬਰ 1922)</strong> — ਭਾਈ ਪ੍ਰਤਾਪ ਸਿੰਘ ਤੇ ਭਾਈ ਕਰਮ ਸਿੰਘ ਦੀ ਸ਼ਹਾਦਤ; (5) <strong>ਜੈਤੋ ਦਾ ਮੋਰਚਾ (1923–25)</strong> — ਨਾਭਾ ਦੇ ਮਹਾਰਾਜਾ ਰਿਪੁਦਮਨ ਸਿੰਘ ਦੇ ਹੱਕ ਵਿੱਚ।</li>
              <li><strong>ਸਿੱਖ ਗੁਰਦੁਆਰਾ ਐਕਟ (1925):</strong> ਗਵਰਨਰ ਮੈਲਕਮ ਹੇਲੀ ਦੇ ਸਮੇਂ ਪਾਸ ਹੋਇਆ। <strong>ਬੱਬਰ ਅਕਾਲੀ ਲਹਿਰ (1921):</strong> ਕਿਸ਼ਨ ਸਿੰਘ ਗੜਗੱਜ ਅਤੇ ਮਾਸਟਰ ਮੋਟਾ ਸਿੰਘ ਵੱਲੋਂ ਸ਼ੁਰੂ।</li>
            </ul>
          </div>

          <div class="bg-rose-950/50 border border-rose-500/30 p-5 rounded-xl">
            <h4 class="text-rose-300 font-bold text-base mb-2">🇮🇳 4. ਸ਼ਹੀਦ-ਏ-ਆਜ਼ਮ ਭਗਤ ਸਿੰਘ, ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ ਅਤੇ ਪੰਜਾਬ ਦੀ ਵੰਡ (1926–1947)</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ (1907–1931):</strong> ਮਾਰਚ 1926 ਵਿੱਚ ਲਾਹੌਰ ਵਿਖੇ <strong>ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ</strong> ਅਤੇ 1928 ਵਿੱਚ ਦਿੱਲੀ ਵਿਖੇ <strong>HSRA</strong> ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ। ਲਾਲਾ ਲਾਜਪਤ ਰਾਇ ਦੀ ਸ਼ਹਾਦਤ ਦਾ ਬਦਲਾ ਲੈਣ ਲਈ <strong>17 ਦਸੰਬਰ 1928</strong> ਨੂੰ ਸਾਂਡਰਸ ਨੂੰ ਮਾਰਿਆ, <strong>8 ਅਪ੍ਰੈਲ 1929</strong> ਨੂੰ ਬਟੁਕੇਸ਼ਵਰ ਦੱਤ ਨਾਲ ਕੇਂਦਰੀ ਅਸੈਂਬਲੀ ਵਿੱਚ ਬੰਬ ਸੁੱਟਿਆ ਅਤੇ <strong>23 ਮਾਰਚ 1931</strong> ਨੂੰ ਭਗਤ ਸਿੰਘ, ਰਾਜਗੁਰੂ ਅਤੇ ਸੁਖਦੇਵ ਨੇ ਲਾਹੌਰ ਜੇਲ੍ਹ ਵਿੱਚ ਸ਼ਹਾਦਤ ਪ੍ਰਾਪਤ ਕੀਤੀ (ਸਸਕਾਰ: ਹੁਸੈਨੀਵਾਲਾ)।</li>
              <li><strong>ਪਰਜਾ ਮੰਡਲ ਲਹਿਰ (1928):</strong> <strong>ਸੇਵਾ ਸਿੰਘ ਠੀਕਰੀਵਾਲਾ</strong> ਦੀ ਪ੍ਰਧਾਨਗੀ ਹੇਠ ਮਾਨਸਾ ਵਿਖੇ ਸਥਾਪਿਤ।</li>
              <li><strong>ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ (1899–1940):</strong> ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ ਸਾਕੇ ਦਾ ਬਦਲਾ ਲੈਣ ਲਈ <strong>13 ਮਾਰਚ 1940</strong> ਨੂੰ ਲੰਡਨ ਦੇ ਕੈਕਸਟਨ ਹਾਲ ਵਿੱਚ <strong>ਮਾਈਕਲ ਓਡਵਾਇਰ</strong> ਨੂੰ ਗੋਲੀ ਮਾਰੀ (31 ਜੁਲਾਈ 1940 ਨੂੰ ਫਾਂਸੀ)।</li>
              <li><strong>ਰੈੱਡਕਲਿਫ਼ ਕਮਿਸ਼ਨ (1947):</strong> ਸਰ ਸਿਰਿਲ ਰੈੱਡਕਲਿਫ਼ ਦੀ ਪ੍ਰਧਾਨਗੀ ਹੇਠ ਅਗਸਤ 1947 ਵਿੱਚ ਪੰਜਾਬ ਦੀ ਵੰਡ ਹੋਈ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-5 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-2">🕊️ 1. 19वीं शताब्दी के सामाजिक-धार्मिक सुधार आंदोलन</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>निरंकारी आंदोलन (1851):</strong> <strong>बाबा दयाल दास</strong> द्वारा <strong>रावलपिंडी</strong> में प्रारंभ ("धन निरंकार")। मूर्ति पूजा का विरोध किया और आनंद कारज विवाह पद्धति को बढ़ावा दिया।</li>
              <li><strong>नामधारी / कूका आंदोलन (12 अप्रैल 1857):</strong> <strong>बाबा राम सिंह जी</strong> द्वारा बैसाखी 1857 को <strong>भैणी साहिब (लुधियाना)</strong> में प्रारंभ। अंग्रेजी अदालतों, स्कूलों, डाक व विदेशी कपड़ों का बहिष्कार कर स्वदेशी आंदोलन चलाया। <strong>जनवरी 1872 में मलेरकोटला</strong> में डिप्टी कमिश्नर <strong>कोवन (Cowan)</strong> ने <strong>66 कूका सिखों</strong> को तोप से उड़ाकर शहीद किया और बाबा राम सिंह को रंगून (बर्मा) निर्वासित कर दिया।</li>
              <li><strong>सिंह सभा आंदोलन (1873 व 1879) एवं चीफ खालसा दीवान (1902):</strong>
                <br/>• <strong>अमृतसर सिंह सभा (1873):</strong> अध्यक्ष <strong>ठाकुर सिंह संधावालिया</strong> व सचिव <strong>ज्ञानी ज्ञान सिंह</strong>।
                <br/>• <strong>लाहौर सिंह सभा (1879):</strong> <strong>प्रो. गुरमुख सिंह</strong> व <strong>भाई दित्त सिंह</strong>। 1892 में <strong>खालसा कॉलेज, अमृतसर</strong> की स्थापना हुई। <strong>भाई कान्ह सिंह नाभा</strong> ने 'हम हिंदू नहीं' (1898) व 'महान कोश' (1930) लिखा।
                <br/>• <strong>चीफ खालसा दीवान (30 अक्टूबर 1902):</strong> अध्यक्ष भाई अर्जन सिंह बागड़ियां व सचिव <strong>सुंदर सिंह मजीठिया</strong>; <strong>आनंद मैरिज एक्ट (1909)</strong> पारित करवाया।
              </li>
            </ul>
          </div>

          <div class="bg-amber-950/50 border border-amber-500/30 p-5 rounded-xl">
            <h4 class="text-amber-300 font-bold text-base mb-2">🔥 2. पगड़ी संभाल जट्टा (1907), गदर पार्टी (1913), कामागाटामारू (1914) व जलियांवाला बाग (1919)</h4>
            <ul class="text-xs text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>पगड़ी संभाल जट्टा (1907):</strong> ब्रिटिश कॉलोनाइजेशन बिल के विरुद्ध <strong>सरदार अजीत सिंह</strong> (भारत माता सोसाइटी) और <strong>लाला लाजपत राय</strong> ने किसान आंदोलन चलाया (गीतकार: बांके दयाल); दोनों को मांडले जेल (बर्मा) भेजा गया।</li>
              <li><strong>गदर पार्टी (1913):</strong> <strong>सैन फ्रांसिस्को (युगांतर आश्रम)</strong> में स्थापित। संस्थापक अध्यक्ष: <strong>बाबा सोहन सिंह भकना</strong>, महासचिव: <strong>लाला हरदयाल</strong>, तथा प्रमुख युवा क्रांतिकारी: <strong>शहीद करतार सिंह सराभा</strong> (साप्ताहिक पत्र: 'गदर')। किरपाल सिंह की मुखबिरी से फरवरी 1915 का विद्रोह विफल रहा और <strong>16 नवंबर 1915</strong> को लाहौर में करतार सिंह सराभा को फांसी दी गई।</li>
              <li><strong>कामागाटामारू प्रकरण (1914):</strong> <strong>बाबा गुरदित्त सिंह सरहाली</strong> ने <strong>376 यात्रियों</strong> के साथ जापानी जहाज कामागाटामारू (गुरु नानक जहाज) हांगकांग से वैंकूवर (कनाडा) ले गए। वापसी पर <strong>29 सितंबर 1914 को बजबज घाट (कलकत्ता)</strong> पर पुलिस गोलीबारी में 19 यात्री शहीद हुए।</li>
              <li><strong>जलियांवाला बाग हत्याकांड (13 अप्रैल 1919):</strong> रौलेट एक्ट तथा डॉ. सैफुद्दीन किचलू व डॉ. सत्यपाल की गिरफ्तारी के विरोध में बैसाखी पर एकत्र निहत्थे लोगों पर <strong>जनरल रेजिनाल्ड डायर</strong> (लेफ्टिनेंट गवर्नर <strong>माइकल ओ'ड्वायर</strong> के काल में) ने गोलियां चलाईं।</li>
            </ul>
          </div>

          <div class="bg-emerald-950/50 border border-emerald-500/30 p-5 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-base mb-2">🏛️ 3. गुरुद्वारा सुधार (अकाली) आंदोलन (1920–1925) एवं शहीद भगत सिंह</h4>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>SGPC (15 नवंबर 1920) व शिरोमणि अकाली दल (14 दिसंबर 1920):</strong> भ्रष्ट महंतों से गुरुद्वारों की मुक्ति हेतु। प्रमुख मोर्चे: <strong>साका ननकाना साहिब (20 फरवरी 1921, महंत नारायण दास, शहीद लक्ष्मण सिंह धारोवाली)</strong>, <strong>चाबियों का मोर्चा (1921–22, बाबा खड़क सिंह)</strong>, <strong>गुरु का बाग मोर्चा (1922, महंत सुंदर दास)</strong>, <strong>साका पंजा साहिब (30 अक्टूबर 1922, भाई प्रताप सिंह व भाई करम सिंह)</strong>, <strong>जैतो का मोर्चा (1923–25, नाभा महाराजा रिपुदमन सिंह)</strong> और <strong>सिख गुरुद्वारा अधिनियम (1925)</strong>।</li>
              <li><strong>शहीद-ए-आज़म भगत सिंह (1907–1931):</strong> मार्च 1926 में लाहौर में <strong>नौजवान भारत सभा</strong> और 1928 में <strong>HSRA</strong> की स्थापना; 17 दिसंबर 1928 को सांडर्स वध; 8 अप्रैल 1929 को बटुकेश्वर दत्त के साथ केंद्रीय असेंबली में बम फेंका; <strong>23 मार्च 1931</strong> को भगत सिंह, राजगुरु व सुखदेव को लाहौर जेल में फांसी।</li>
              <li><strong>शहीद उधम सिंह (1899–1940):</strong> <strong>13 मार्च 1940</strong> को लंदन के कैक्सटन हॉल में <strong>माइकल ओ'ड्वायर</strong> का वध किया।</li>
            </ul>
          </div>
        </div>
      `,
    },
    workedExamples: [
      {
        title: {
          en: 'Matching Gurdwara Reform Morchas with Their Historical Context',
          pa: 'ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ ਲਹਿਰ ਦੇ ਮੋਰਚਿਆਂ ਦਾ ਇਤਿਹਾਸਕ ਤੱਥਾਂ ਨਾਲ ਮਿਲਾਨ',
          hi: 'गुरुद्वारा सुधार आंदोलन के मोर्चों का ऐतिहासिक तथ्यों से मिलान',
        },
        problem: {
          en: 'Match the following Akali Morchas with their key person/event: (1) Saka Nankana Sahib (Feb 1921), (2) Keys Morcha (1921–22), (3) Guru Ka Bagh Morcha (1922), (4) Jaito Morcha (1923–24).',
          pa: 'ਹੇਠ ਲਿਖੇ ਅਕਾਲੀ ਮੋਰਚਿਆਂ ਦਾ ਉਹਨਾਂ ਨਾਲ ਸਬੰਧਤ ਪ੍ਰਮੁੱਖ ਵਿਅਕਤੀ/ਘਟਨਾ ਨਾਲ ਮਿਲਾਨ ਕਰੋ: (1) ਸਾਕਾ ਨਨਕਾਣਾ ਸਾਹਿਬ (1921), (2) ਚਾਬੀਆਂ ਦਾ ਮੋਰਚਾ (1921–22), (3) ਗੁਰੂ ਕਾ ਬਾਗ਼ ਮੋਰਚਾ (1922), (4) ਜੈਤੋ ਦਾ ਮੋਰਚਾ (1923–24)।',
          hi: 'निम्नलिखित अकाली मोर्चों का उनसे संबंधित प्रमुख व्यक्ति/घटना से मिलान कीजिए: (1) साका ननकाना साहिब (1921), (2) चाबियों का मोर्चा (1921–22), (3) गुरु का बाग मोर्चा (1922), (4) जैतो का मोर्चा (1923–24)।',
        },
        steps: {
          en: [
            'Step 1: Saka Nankana Sahib (20 Feb 1921) — Mahant Narain Das martyred Bhai Lachhman Singh Dharowali and ~150 Sikhs.',
            'Step 2: Keys Morcha (Nov 1921–Jan 1922) — Led by Baba Kharak Singh over the Harmandir Sahib Toshakhana keys (Gandhi called it "First decisive battle for India’s freedom won").',
            'Step 3: Guru Ka Bagh Morcha (1922) — Against Mahant Sundar Das over cutting wood for Langar (witnessed by C.F. Andrews).',
            'Step 4: Jaito Morcha (1923–24) — Triggered by forced abdication of Maharaja Ripudaman Singh of Nabha and disrupted Akhand Path at Gurdwara Gangsar.',
          ],
          pa: [
            'ਕਦਮ 1: ਸਾਕਾ ਨਨਕਾਣਾ ਸਾਹਿਬ (20 ਫ਼ਰਵਰੀ 1921) — ਮਹੰਤ ਨਰਾਇਣ ਦਾਸ ਵਿਰੁੱਧ, ਭਾਈ ਲਛਮਣ ਸਿੰਘ ਧਾਰੋਵਾਲੀ ਦੀ ਸ਼ਹਾਦਤ।',
            'ਕਦਮ 2: ਚਾਬੀਆਂ ਦਾ ਮੋਰਚਾ (1921–22) — ਬਾਬਾ ਖੜਕ ਸਿੰਘ ਦੀ ਅਗਵਾਈ ਵਿੱਚ ਤੋਸ਼ਾਖਾਨੇ ਦੀਆਂ ਚਾਬੀਆਂ ਦੀ ਜਿੱਤ।',
            'ਕਦਮ 3: ਗੁਰੂ ਕਾ ਬਾਗ਼ ਮੋਰਚਾ (1922) — ਮਹੰਤ ਸੁੰਦਰ ਦਾਸ ਵਿਰੁੱਧ ਲੰਗਰ ਲਈ ਲੱਕੜਾਂ ਕੱਟਣ ਦਾ ਮੋਰਚਾ।',
            'ਕਦਮ 4: ਜੈਤੋ ਦਾ ਮੋਰਚਾ (1923–24) — ਨਾਭਾ ਦੇ ਮਹਾਰਾਜਾ ਰਿਪੁਦਮਨ ਸਿੰਘ ਅਤੇ ਗੁਰਦੁਆਰਾ ਗੰਗਸਰ ਦੇ ਅਖੰਡ ਪਾਠ ਨਾਲ ਸਬੰਧਤ।',
          ],
          hi: [
            'चरण 1: साका ननकाना साहिब (20 फरवरी 1921) — महंत नारायण दास के विरुद्ध, भाई लक्ष्मण सिंह धारोवाली की शहादत।',
            'चरण 2: चाबियों का मोर्चा (1921–22) — बाबा खड़क सिंह के नेतृत्व में तोशाखाना की चाबियों की विजय।',
            'चरण 3: गुरु का बाग मोर्चा (1922) — महंत सुंदर दास के विरुद्ध लंगर हेतु लकड़ी काटने का मोर्चा।',
            'चरण 4: जैतो का मोर्चा (1923–24) — नाभा महाराजा रिपुदमन सिंह एवं गुरुद्वारा गंगसर के अखंड पाठ से संबंधित।',
          ],
        },
        solution: {
          en: 'Nankana Sahib = Mahant Narain Das / Bhai Lachhman Singh | Keys Morcha = Baba Kharak Singh | Guru Ka Bagh = Mahant Sundar Das | Jaito Morcha = Maharaja Ripudaman Singh of Nabha.',
          pa: 'ਨਨਕਾਣਾ ਸਾਹਿਬ = ਮਹੰਤ ਨਰਾਇਣ ਦਾਸ / ਭਾਈ ਲਛਮਣ ਸਿੰਘ | ਚਾਬੀਆਂ ਦਾ ਮੋਰਚਾ = ਬਾਬਾ ਖੜਕ ਸਿੰਘ | ਗੁਰੂ ਕਾ ਬਾਗ਼ = ਮਹੰਤ ਸੁੰਦਰ ਦਾਸ | ਜੈਤੋ ਦਾ ਮੋਰਚਾ = ਮਹਾਰਾਜਾ ਰਿਪੁਦਮਨ ਸਿੰਘ (ਨਾਭਾ)।',
          hi: 'ननकाना साहिब = महंत नारायण दास / भाई लक्ष्मण सिंह | चाबियों का मोर्चा = बाबा खड़क सिंह | गुरु का बाग = महंत सुंदर दास | जैतो का मोर्चा = महाराजा रिपुदमन सिंह (नाभा)।',
        },
      },
      {
        title: {
          en: 'Distinguishing Reginald Dyer vs Michael O’Dwyer (1919 & 1940)',
          pa: 'ਜਨਰਲ ਰੈਜੀਨਾਲਡ ਡਾਇਰ ਅਤੇ ਮਾਈਕਲ ਓਡਵਾਇਰ ਵਿੱਚ ਅੰਤਰ',
          hi: 'जनरल रेजिनाल्ड डायर एवं माइकल ओ’ड्वायर में अंतर',
        },
        problem: {
          en: 'In exam questions on Jallianwala Bagh (1919) and Shaheed Udham Singh (1940), students often confuse Brigadier-General Reginald Dyer with Sir Michael O’Dwyer. Clarify their exact roles and fates.',
          pa: 'ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ ਸਾਕੇ (1919) ਅਤੇ ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ (1940) ਬਾਰੇ ਪ੍ਰਸ਼ਨਾਂ ਵਿੱਚ ਜਨਰਲ ਰੈਜੀਨਾਲਡ ਡਾਇਰ ਅਤੇ ਸਰ ਮਾਈਕਲ ਓਡਵਾਇਰ ਵਿਚਕਾਰ ਅੰਤਰ ਸਪੱਸ਼ਟ ਕਰੋ।',
          hi: 'जलियांवाला बाग (1919) और शहीद उधम सिंह (1940) के प्रश्नों में ब्रिगेडियर-जनरल रेजिनाल्ड डायर और सर माइकल ओ’ड्वायर का अंतर स्पष्ट कीजिए।',
        },
        steps: {
          en: [
            'Step 1: Brigadier-General Reginald Dyer was the military commander on the ground at Amritsar who ordered troops to fire on the crowd inside Jallianwala Bagh on 13 April 1919; he died of cerebral hemorrhage/paralysis in 1927.',
            'Step 2: Sir Michael O’Dwyer was the Lieutenant-Governor of Punjab (1913–1919) who imposed martial law and endorsed Dyer’s massacre; he was assassinated by Shaheed Udham Singh at Caxton Hall, London on 13 March 1940.',
          ],
          pa: [
            'ਕਦਮ 1: ਬ੍ਰਿਗੇਡੀਅਰ-ਜਨਰਲ ਰੈਜੀਨਾਲਡ ਡਾਇਰ ਫ਼ੌਜੀ ਅਫ਼ਸਰ ਸੀ ਜਿਸ ਨੇ 13 ਅਪ੍ਰੈਲ 1919 ਨੂੰ ਬਾਗ਼ ਦੇ ਅੰਦਰ ਗੋਲੀ ਚਲਾਉਣ ਦਾ ਹੁਕਮ ਦਿੱਤਾ ਸੀ (ਉਸ ਦੀ ਮੌਤ 1927 ਵਿੱਚ ਅਧਰੰਗ ਨਾਲ ਹੋਈ)।',
            'ਕਦਮ 2: ਸਰ ਮਾਈਕਲ ਓਡਵਾਇਰ ਉਸ ਸਮੇਂ ਪੰਜਾਬ ਦਾ ਲੈਫ਼ਟੀਨੈਂਟ-ਗਵਰਨਰ ਸੀ, ਜਿਸ ਨੂੰ ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ ਨੇ 13 ਮਾਰਚ 1940 ਨੂੰ ਲੰਡਨ ਦੇ ਕੈਕਸਟਨ ਹਾਲ ਵਿੱਚ ਗੋਲੀ ਮਾਰ ਕੇ ਮਾਰਿਆ।',
          ],
          hi: [
            'चरण 1: ब्रिगेडियर-जनरल रेजिनाल्ड डायर वह सैन्य कमांडर था जिसने 13 अप्रैल 1919 को बाग के भीतर गोली चलाने का आदेश दिया (उसकी मृत्यु 1927 में पक्षाघात से हुई)।',
            'चरण 2: सर माइकल ओ’ड्वायर उस समय पंजाब का लेफ्टिनेंट-गवर्नर था, जिसे शहीद उधम सिंह ने 13 मार्च 1940 को लंदन के कैक्सटन हॉल में गोली मारी।',
          ],
        },
        solution: {
          en: 'Reginald Dyer = Military Commander who fired inside Jallianwala Bagh (died 1927) | Sir Michael O’Dwyer = Lt.-Governor of Punjab shot dead by Shaheed Udham Singh in London (13 March 1940).',
          pa: 'ਰੈਜੀਨਾਲਡ ਡਾਇਰ = ਬਾਗ਼ ਵਿੱਚ ਗੋਲੀ ਚਲਾਉਣ ਵਾਲਾ ਫ਼ੌਜੀ ਅਫ਼ਸਰ (ਮੌਤ 1927) | ਮਾਈਕਲ ਓਡਵਾਇਰ = ਪੰਜਾਬ ਦਾ ਲੈਫ਼ਟੀਨੈਂਟ-ਗਵਰਨਰ ਜਿਸ ਨੂੰ ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ ਨੇ 1940 ਵਿੱਚ ਲੰਡਨ ਵਿਖੇ ਮਾਰਿਆ।',
          hi: 'रेजिनाल्ड डायर = बाग में गोली चलाने वाला सैन्य कमांडर (मृत्यु 1927) | माइकल ओ’ड्वायर = पंजाब का लेफ्टिनेंट-गवर्नर जिसे शहीद उधम सिंह ने 1940 में लंदन में मारा।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Lala Har Dayal was the first President of the Ghadar Party in 1913.',
          pa: '1913 ਵਿੱਚ ਗ਼ਦਰ ਪਾਰਟੀ ਦੇ ਪਹਿਲੇ ਪ੍ਰਧਾਨ ਲਾਲਾ ਹਰਦਿਆਲ ਸਨ।',
          hi: '1913 में गदर पार्टी के प्रथम अध्यक्ष लाला हरदयाल थे।',
        },
        correction: {
          en: 'Baba Sohan Singh Bhakna was the founding President of the Ghadar Party (1913), while Lala Har Dayal was the founding General Secretary.',
          pa: 'ਗ਼ਦਰ ਪਾਰਟੀ (1913) ਦੇ ਬਾਨੀ ਪ੍ਰਧਾਨ ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ ਸਨ, ਜਦਕਿ ਲਾਲਾ ਹਰਦਿਆਲ ਜਨਰਲ ਸਕੱਤਰ ਸਨ।',
          hi: 'गदर पार्टी (1913) के संस्थापक अध्यक्ष बाबा सोहन सिंह भकना थे, जबकि लाला हरदयाल महासचिव (General Secretary) थे।',
        },
        whyItMatters: {
          en: 'One of the most common pitfalls in Punjab competitive exams.',
          pa: 'ਪੰਜਾਬ ਦੀਆਂ ਪ੍ਰੀਖਿਆਵਾਂ ਵਿੱਚ ਇਹ ਪ੍ਰਸ਼ਨ ਬਹੁਤ ਵਾਰ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'पंजाब की प्रतियोगी परीक्षाओं में यह प्रश्न बार-बार पूछा जाता है।',
        },
      },
      {
        misconception: {
          en: 'Amritsar Singh Sabha (1873) and Lahore Singh Sabha (1879) were founded by the same leaders.',
          pa: 'ਅੰਮ੍ਰਿਤਸਰ ਸਿੰਘ ਸਭਾ (1873) ਅਤੇ ਲਾਹੌਰ ਸਿੰਘ ਸਭਾ (1879) ਇੱਕੋ ਆਗੂਆਂ ਨੇ ਬਣਾਈਆਂ ਸਨ।',
          hi: 'अमृतसर सिंह सभा (1873) और लाहौर सिंह सभा (1879) एक ही नेताओं द्वारा स्थापित की गई थीं।',
        },
        correction: {
          en: 'Amritsar Singh Sabha (1873) was founded by ठाकुर Singh Sandhawalia and Giani Gian Singh (representing traditional aristocrats), whereas Lahore Singh Sabha (1879) was founded by Prof. Gurmukh Singh and Bhai Ditt Singh (representing progressive, egalitarian scholars). Both later united under the Chief Khalsa Diwan in 1902.',
          pa: 'ਅੰਮ੍ਰਿਤਸਰ ਸਿੰਘ ਸਭਾ (1873) ਦੇ ਮੋਢੀ ਠਾਕੁਰ ਸਿੰਘ ਸੰਧਾਵਾਲੀਆ ਅਤੇ ਗਿਆਨੀ ਗਿਆਨ ਸਿੰਘ ਸਨ, ਜਦਕਿ ਲਾਹੌਰ ਸਿੰਘ ਸਭਾ (1879) ਦੇ ਮੋਢੀ ਪ੍ਰੋ. ਗੁਰਮੁਖ ਸਿੰਘ ਅਤੇ ਭਾਈ ਦਿੱਤ ਸਿੰਘ ਸਨ।',
          hi: 'अमृतसर सिंह सभा (1873) के संस्थापक ठाकुर सिंह संधावालिया व ज्ञानी ज्ञान सिंह थे, जबकि लाहौर सिंह सभा (1879) के संस्थापक प्रो. गुरमुख सिंह व भाई दित्त सिंह थे।',
        },
        whyItMatters: {
          en: 'Essential for Master Cadre SST questions on socio-religious reform movements in Punjab.',
          pa: 'ਮਾਸਟਰ ਕੈਡਰ ਐੱਸ.ਐੱਸ.ਟੀ. ਵਿੱਚ ਸਿੰਘ ਸਭਾ ਲਹਿਰ ਦੇ ਪ੍ਰਸ਼ਨਾਂ ਲਈ ਬਹੁਤ ਮਹੱਤਵਪੂਰਨ ਹੈ।',
          hi: 'मास्टर कैडर एसएसटी में सिंह सभा आंदोलन के प्रश्नों के लिए अत्यंत महत्वपूर्ण है।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Reform Movements: Nirankari (1851, Rawalpindi, Baba Dayal Das); Namdhari/Kuka (1857, Bhaini Sahib, Baba Ram Singh; 66 Kukas blown from cannons at Malerkotla in Jan 1872 by Cowan); Singh Sabha (Amritsar 1873 & Lahore 1879); Chief Khalsa Diwan (1902); Anand Marriage Act (1909).',
          'Pagri Sambhal Jatta (1907): Sardar Ajit Singh & Lala Lajpat Rai (song by Banke Dayal).',
          'Ghadar Party (1913, San Francisco): President Baba Sohan Singh Bhakna, Gen. Sec. Lala Har Dayal, Youth Icon Kartar Singh Sarabha (martyred 16 Nov 1915).',
          'Komagata Maru (1914): Chartered by Baba Gurdit Singh Sarhali (376 passengers; Budge Budge firing 29 Sept 1914).',
          'Jallianwala Bagh (13 April 1919): Gen. Reginald Dyer fired; Lt.-Gov. Michael O’Dwyer (killed by Shaheed Udham Singh in London on 13 March 1940).',
          'Akali Movement: SGPC (15 Nov 1920), Akali Dal (14 Dec 1920), Nankana Sahib (20 Feb 1921), Keys Morcha (1921–22), Guru Ka Bagh (1922), Panja Sahib (Oct 1922), Jaito Morcha (1923–25), Sikh Gurdwaras Act (1925).',
          'Shaheed Bhagat Singh: Naujawan Bharat Sabha (1926), HSRA (1928), Saunders killing (17 Dec 1928), Assembly Bomb (8 April 1929), Martyred with Rajguru & Sukhdev on 23 March 1931.',
        ],
        pa: [
          'ਸੁਧਾਰ ਲਹਿਰਾਂ: ਨਿਰੰਕਾਰੀ (1851, ਰਾਵਲਪਿੰਡੀ, ਬਾਬਾ ਦਿਆਲ ਦਾਸ); ਨਾਮਧਾਰੀ/ਕੂਕਾ (1857, ਭੈਣੀ ਸਾਹਿਬ, ਬਾਬਾ ਰਾਮ ਸਿੰਘ; ਮਲੇਰਕੋਟਲਾ ਸਾਕਾ ਜਨਵਰੀ 1872); ਸਿੰਘ ਸਭਾ (ਅੰਮ੍ਰਿਤਸਰ 1873 ਤੇ ਲਾਹੌਰ 1879); ਚੀਫ਼ ਖ਼ਾਲਸਾ ਦੀਵਾਨ (1902); ਅਨੰਦ ਮੈਰਿਜ ਐਕਟ (1909)।',
          'ਪਗੜੀ ਸੰਭਾਲ ਜੱਟਾ (1907): ਸਰਦਾਰ ਅਜੀਤ ਸਿੰਘ ਤੇ ਲਾਲਾ ਲਾਜਪਤ ਰਾਇ (ਗੀਤ: ਬਾਂਕੇ ਦਿਆਲ)।',
          'ਗ਼ਦਰ ਪਾਰਟੀ (1913, ਸੈਨ ਫਰਾਂਸਿਸਕੋ): ਪ੍ਰਧਾਨ ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ, ਸਕੱਤਰ ਲਾਲਾ ਹਰਦਿਆਲ, ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ (ਸ਼ਹਾਦਤ 16 ਨਵੰਬਰ 1915)।',
          'ਕਾਮਾਗਾਟਾਮਾਰੂ (1914): ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ ਸਰਹਾਲੀ (376 ਯਾਤਰੀ; ਬਜਬਜ ਘਾਟ 29 ਸਤੰਬਰ 1914)।',
          'ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ (13 ਅਪ੍ਰੈਲ 1919): ਜਨਰਲ ਡਾਇਰ ਅਤੇ ਮਾਈਕਲ ਓਡਵਾਇਰ (ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ ਵੱਲੋਂ 13 ਮਾਰਚ 1940 ਨੂੰ ਲੰਡਨ ਵਿੱਚ ਵਧ)।',
          'ਅਕਾਲੀ ਲਹਿਰ: SGPC (15 ਨਵੰਬਰ 1920), ਅਕਾਲੀ ਦਲ (14 ਦਸੰਬਰ 1920), ਸਾਕਾ ਨਨਕਾਣਾ ਸਾਹਿਬ (20 ਫ਼ਰਵਰੀ 1921), ਚਾਬੀਆਂ ਦਾ ਮੋਰਚਾ, ਗੁਰੂ ਕਾ ਬਾਗ਼ (1922), ਪੰਜਾ ਸਾਹਿਬ, ਜੈਤੋ ਦਾ ਮੋਰਚਾ, ਸਿੱਖ ਗੁਰਦੁਆਰਾ ਐਕਟ (1925)।',
          'ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ: ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ (1926), HSRA (1928), ਅਸੈਂਬਲੀ ਬੰਬ (8 ਅਪ੍ਰੈਲ 1929), ਸ਼ਹਾਦਤ (23 ਮਾਰਚ 1931)।',
        ],
        hi: [
          'सुधार आंदोलन: निरंकारी (1851, रावलपिंडी, बाबा दयाल दास); नामधारी/कूका (1857, भैणी साहिब, बाबा राम सिंह; मलेरकोटला कांड जनवरी 1872); सिंह सभा (अमृतसर 1873 व लाहौर 1879); चीफ खालसा दीवान (1902); आनंद मैरिज एक्ट (1909)।',
          'पगड़ी संभाल जट्टा (1907): सरदार अजीत सिंह व लाला लाजपत राय (गीत: बांके दयाल)।',
          'गदर पार्टी (1913, सैन फ्रांसिस्को): अध्यक्ष बाबा सोहन सिंह भकना, महासचिव लाला हरदयाल, करतार सिंह सराभा (शहादत 16 नवंबर 1915)।',
          'कामागाटामारू (1914): बाबा गुरदित्त सिंह सरहाली (376 यात्री; बजबज घाट 29 सितंबर 1914)।',
          'जलियांवाला बाग (13 अप्रैल 1919): जनरल डायर व माइकल ओ’ड्वायर (शहीद उधम सिंह द्वारा 13 मार्च 1940 को लंदन में वध)।',
          'अकाली आंदोलन: SGPC (15 नवंबर 1920), अकाली दल (14 दिसंबर 1920), साका ननकाना साहिब (20 फरवरी 1921), चाबियों का मोर्चा, गुरु का बाग (1922), पंजा साहिब, जैतो का मोर्चा, सिख गुरुद्वारा अधिनियम (1925)।',
          'शहीद भगत सिंह: नौजवान भारत सभा (1926), HSRA (1928), असेंबली बम (8 अप्रैल 1929), शहादत (23 मार्च 1931)।',
        ],
      },
      examTraps: {
        en: [
          'Trap: Bhai Kahn Singh Nabha authored "Hum Hindu Nahin" (1898) and "Gurshabad Ratnakar Mahan Kosh" (1930), whereas Bhai Vir Singh founded the Khalsa Tract Society (1894).',
          'Trap: Sewa Singh Thikriwala was the founding President of the Punjab Riyasti Praja Mandal (1928).',
        ],
        pa: [
          'ਧੋਖਾ: ਭਾਈ ਕਾਨ੍ਹ ਸਿੰਘ ਨਾਭਾ ਨੇ "ਹਮ ਹਿੰਦੂ ਨਹੀਂ" (1898) ਅਤੇ "ਮਹਾਨ ਕੋਸ਼" (1930) ਰਚਿਆ, ਜਦਕਿ ਭਾਈ ਵੀਰ ਸਿੰਘ ਨੇ ਖ਼ਾਲਸਾ ਟ੍ਰੈਕਟ ਸੁਸਾਇਟੀ (1894) ਬਣਾਈ।',
          'ਧੋਖਾ: ਪੰਜਾਬ ਰਿਆਸਤੀ ਪਰਜਾ ਮੰਡਲ (1928) ਦੇ ਬਾਨੀ ਪ੍ਰਧਾਨ ਸੇਵਾ ਸਿੰਘ ਠੀਕਰੀਵਾਲਾ ਸਨ।',
        ],
        hi: [
          'धोखा: भाई कान्ह सिंह नाभा ने "हम हिंदू नहीं" (1898) और "महान कोश" (1930) लिखा, जबकि भाई वीर सिंह ने खालसा ट्रैक्ट सोसाइटी (1894) स्थापित की।',
          'धोखा: पंजाब रियासती प्रजा मंडल (1928) के संस्थापक अध्यक्ष सेवा सिंह ठीकरीवाला थे।',
        ],
      },
    },
    summary: {
      en: 'From 1849 to 1947, Punjab spearhead India’s socio-religious awakening and freedom struggle through the Nirankari (1851), Namdhari/Kuka (1857), and Singh Sabha (1873/1879) movements; the Pagri Sambhal Jatta agitation (1907); the Ghadar Party (1913) and Komagata Maru (1914); the Jallianwala Bagh massacre (1919); the non-violent Gurdwara Reform Morchas culminating in the Sikh Gurdwaras Act (1925); and the revolutionary sacrifices of Kartar Singh Sarabha (1915), Shaheed Bhagat Singh, Rajguru, and Sukhdev (1931), and Shaheed Udham Singh (1940).',
      pa: '1849 ਤੋਂ 1947 ਤੱਕ ਪੰਜਾਬ ਨੇ ਨਿਰੰਕਾਰੀ, ਕੂਕਾ (1857) ਅਤੇ ਸਿੰਘ ਸਭਾ ਲਹਿਰਾਂ, ਪਗੜੀ ਸੰਭਾਲ ਜੱਟਾ (1907), ਗ਼ਦਰ ਪਾਰਟੀ (1913), ਕਾਮਾਗਾਟਾਮਾਰੂ (1914), ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ ਸਾਕੇ (1919), ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ ਅਕਾਲੀ ਮੋਰਚਿਆਂ (1920–25) ਅਤੇ ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ, ਰਾਜਗੁਰੂ, ਸੁਖਦੇਵ (1931) ਤੇ ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ (1940) ਦੀਆਂ ਕੁਰਬਾਨੀਆਂ ਰਾਹੀਂ ਭਾਰਤ ਦੀ ਆਜ਼ਾਦੀ ਵਿੱਚ ਮੋਹਰੀ ਯੋਗਦਾਨ ਪਾਇਆ।',
      hi: '1849 से 1947 तक पंजाब ने निरंकारी, कूका (1857) व सिंह सभा आंदोलनों, पगड़ी संभाल जट्टा (1907), गदर पार्टी (1913), कामागाटामारू (1914), जलियांवाला बाग (1919), गुरुद्वारा सुधार मोर्चों (1920–25) तथा करतार सिंह सराभा, शहीद भगत सिंह, राजगुरु, सुखदेव (1931) और शहीद उधम सिंह (1940) के बलिदानों से भारतीय स्वतंत्रता संग्राम में अग्रणी भूमिका निभाई।',
    },
    keyNotes: {
      en: [
        '📌 1857 — Namdhari (Kuka) Movement founded by Baba Ram Singh at Bhaini Sahib; Jan 1872 — 66 Kukas martyred at Malerkotla.',
        '📌 1913 & 1914 — Ghadar Party (San Francisco; Sohan Singh Bhakna, Lala Har Dayal, Kartar Singh Sarabha) & Komagata Maru (Baba Gurdit Singh).',
        '📌 13 April 1919 — Jallianwala Bagh Massacre; 1920–25 — Akali Gurdwara Reform Movement & Sikh Gurdwaras Act 1925.',
        '📌 23 March 1931 — Martyrdom of Bhagat Singh, Rajguru & Sukhdev; 13 March 1940 — Udham Singh assassinated Michael O’Dwyer.',
      ],
      pa: [
        '📌 1857 — ਬਾਬਾ ਰਾਮ ਸਿੰਘ ਵੱਲੋਂ ਭੈਣੀ ਸਾਹਿਬ ਵਿਖੇ ਕੂਕਾ ਲਹਿਰ ਦੀ ਸ਼ੁਰੂਆਤ; ਜਨਵਰੀ 1872 — ਮਲੇਰਕੋਟਲਾ ਵਿਖੇ 66 ਕੂਕਿਆਂ ਦੀ ਸ਼ਹਾਦਤ।',
        '📌 1913 ਅਤੇ 1914 — ਗ਼ਦਰ ਪਾਰਟੀ (ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ, ਲਾਲਾ ਹਰਦਿਆਲ, ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ) ਅਤੇ ਕਾਮਾਗਾਟਾਮਾਰੂ (ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ)।',
        '📌 13 ਅਪ੍ਰੈਲ 1919 — ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ਼ ਸਾਕਾ; 1920–25 — ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ ਲਹਿਰ ਅਤੇ ਸਿੱਖ ਗੁਰਦੁਆਰਾ ਐਕਟ 1925।',
        '📌 23 ਮਾਰਚ 1931 — ਭਗਤ ਸਿੰਘ, ਰਾਜਗੁਰੂ ਤੇ ਸੁਖਦੇਵ ਦੀ ਸ਼ਹਾਦਤ; 13 ਮਾਰਚ 1940 — ਊਧਮ ਸਿੰਘ ਵੱਲੋਂ ਮਾਈਕਲ ਓਡਵਾਇਰ ਦਾ ਵਧ।',
      ],
      hi: [
        '📌 1857 — बाबा राम सिंह द्वारा भैणी साहिब में कूका आंदोलन प्रारंभ; जनवरी 1872 — मलेरकोटला में 66 कूकों की शहादत।',
        '📌 1913 एवं 1914 — गदर पार्टी (सोहन सिंह भकना, लाला हरदयाल, करतार सिंह सराभा) व कामागाटामारू (बाबा गुरदित्त सिंह)।',
        '📌 13 अप्रैल 1919 — जलियांवाला बाग हत्याकांड; 1920–25 — गुरुद्वारा सुधार आंदोलन एवं सिख गुरुद्वारा अधिनियम 1925।',
        '📌 23 मार्च 1931 — भगत सिंह, राजगुरु व सुखदेव की शहादत; 13 मार्च 1940 — उधम सिंह द्वारा माइकल ओ’ड्वायर का वध।',
      ],
    },
    flashcards: [
      {
        id: 'fc-pfm-1',
        q: {
          en: 'Who founded the Namdhari (Kuka) Movement on Baisakhi 1857 at Bhaini Sahib (Ludhiana)?',
          pa: '1857 ਦੀ ਵਿਸਾਖੀ ਨੂੰ ਭੈਣੀ ਸਾਹਿਬ (ਲੁਧਿਆਣਾ) ਵਿਖੇ ਨਾਮਧਾਰੀ (ਕੂਕਾ) ਲਹਿਰ ਦੀ ਸ਼ੁਰੂਆਤ ਕਿਸ ਨੇ ਕੀਤੀ?',
          hi: '1857 की बैसाखी को भैणी साहिब (लुधियाना) में नामधारी (कूका) आंदोलन की शुरुआत किसने की?',
        },
        a: {
          en: 'Satguru Baba Ram Singh Ji.',
          pa: 'ਸਤਿਗੁਰੂ ਬਾਬਾ ਰਾਮ ਸਿੰਘ ਜੀ ਨੇ।',
          hi: 'सतगुरु बाबा राम सिंह जी ने।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-pfm-2',
        q: {
          en: 'Who was the founding President and who was the General Secretary of the Ghadar Party established in San Francisco in 1913?',
          pa: '1913 ਵਿੱਚ ਸੈਨ ਫਰਾਂਸਿਸਕੋ ਵਿਖੇ ਬਣੀ ਗ਼ਦਰ ਪਾਰਟੀ ਦੇ ਬਾਨੀ ਪ੍ਰਧਾਨ ਅਤੇ ਜਨਰਲ ਸਕੱਤਰ ਕੌਣ ਸਨ?',
          hi: '1913 में सैन फ्रांसिस्को में स्थापित गदर पार्टी के संस्थापक अध्यक्ष और महासचिव कौन थे?',
        },
        a: {
          en: 'Founding President: Baba Sohan Singh Bhakna; General Secretary: Lala Har Dayal.',
          pa: 'ਬਾਨੀ ਪ੍ਰਧਾਨ: ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ; ਜਨਰਲ ਸਕੱਤਰ: ਲਾਲਾ ਹਰਦਿਆਲ।',
          hi: 'संस्थापक अध्यक्ष: बाबा सोहन सिंह भकना; महासचिव: लाला हरदयाल।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-pfm-3',
        q: {
          en: 'Regarding which Akali Morcha did Mahatma Gandhi send a telegram to Baba Kharak Singh stating: "First decisive battle for India’s freedom won. Congratulations"?',
          pa: 'ਕਿਹੜੇ ਅਕਾਲੀ ਮੋਰਚੇ ਦੀ ਜਿੱਤ ਉੱਤੇ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ ਬਾਬਾ ਖੜਕ ਸਿੰਘ ਨੂੰ ਤਾਰ ਭੇਜ ਕੇ "ਭਾਰਤ ਦੀ ਆਜ਼ਾਦੀ ਦੀ ਪਹਿਲੀ ਲੜਾਈ ਦੀ ਜਿੱਤ" ਦੀ ਵਧਾਈ ਦਿੱਤੀ ਸੀ?',
          hi: 'किस अकाली मोर्चे की विजय पर महात्मा गांधी ने बाबा खड़क सिंह को तार भेजकर "भारत की स्वतंत्रता की पहली निर्णायक लड़ाई जीतने" की बधाई दी थी?',
        },
        a: {
          en: 'Keys Morcha (Chabian da Morcha, Nov 1921 – Jan 1922).',
          pa: 'ਚਾਬੀਆਂ ਦਾ ਮੋਰਚਾ (ਨਵੰਬਰ 1921 – ਜਨਵਰੀ 1922)।',
          hi: 'चाबियों का मोर्चा (नवंबर 1921 – जनवरी 1922)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-pfm-4',
        q: {
          en: 'Who was the compiler of the encyclopedic dictionary of Sikh literature "Gurshabad Ratnakar Mahan Kosh" (1930) and author of "Hum Hindu Nahin" (1898)?',
          pa: '"ਗੁਰਸ਼ਬਦ ਰਤਨਾਕਰ ਮਹਾਨ ਕੋਸ਼" (1930) ਅਤੇ "ਹਮ ਹਿੰਦੂ ਨਹੀਂ" (1898) ਦੇ ਮਹਾਨ ਲੇਖਕ ਕੌਣ ਸਨ?',
          hi: '"गुरशब्द रत्नाकर महान कोश" (1930) और "हम हिंदू नहीं" (1898) के महान लेखक कौन थे?',
        },
        a: {
          en: 'Bhai Kahn Singh Nabha.',
          pa: 'ਭਾਈ ਕਾਨ੍ਹ ਸਿੰਘ ਨਾਭਾ।',
          hi: 'भाई कान्ह सिंह नाभा।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [
      {
        title: 'Punjab in the Freedom Struggle: Kuka, Ghadar, Akali Movement & Bhagat Singh',
        channel: 'PSEB / NCERT History Archive',
        url: 'https://www.youtube.com/results?search_query=Punjab+Freedom+Struggle+Ghadar+Party+Akali+Movement+PSEB',
        language: 'Punjabi / English / Hindi',
      },
    ],
    bookRefs: [
      {
        title: 'History and Culture of Punjab (Class 10)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Chapter 14: Contribution of Punjab towards Struggle for Freedom',
        type: 'state-board',
      },
    ],
    syllabusReference: {
      title: 'ERB Punjab Master Cadre SST & PSSSB History Syllabus',
      url: 'https://educationrecruitmentboard.com',
      body: 'Education Recruitment Board (ERB) & PSSSB',
      verifiedOn: '2026-10-10',
    },
  },
};


