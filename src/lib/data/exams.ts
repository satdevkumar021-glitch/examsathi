import { CLERK_SHARED_SUBJECTS } from './clerk-shared-outline';
import { CTET_PRIMARY_SUBJECTS } from './ctet-primary-outline';
import { buildEttSubjects } from './ett-syllabus';
// ============================================================
// ExamSathi - Authoritative Examination Database & Syllabus Tree
// Compiled from official PSSSB, ERB Punjab, PPSC, RBSE, CBSE, and SSC sources
// ============================================================

export type State = 'punjab' | 'rajasthan' | 'haryana' | 'delhi' | 'central' | 'defence';

export interface Exam {
  id: string;
  state: State;
  name: string;
  nameHindi: string;
  namePunjabi?: string;
  body: string;
  level?: string;
  totalMarks: number;
  duration: string;
  negativeMarking: boolean | number;
  officialWebsite: string;
  emoji: string;
  color: string;
  sections: Section[];
  subjects: Subject[];
  syllabusStatus?: 'provisional-archive';
}

export interface Section {
  name: string;
  nameHindi: string;
  marks: number;
  questions?: number;
}

export interface Subject {
  id: string;
  name: string;
  nameHindi: string;
  namePunjabi?: string;
  emoji: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  name: string;
  nameHindi: string;
  namePunjabi?: string;
  topics: Topic[];
}

export interface Topic {
  sourcePages?: number[];
  materialStatus?: 'pending';
  id: string;
  name: string;
  nameHindi: string;
  namePunjabi?: string;
  subtopics: string[];
  examQuestions: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// ---------------------------------------------------------------------------
// 1. PUNJAB EXAMS DATABASE
// ---------------------------------------------------------------------------
export const PUNJABI_PAPER_A_SUBJECT: Subject = {
  id: 'punjabi-paper-a-subject',
  name: 'Paper A: Compulsory Punjabi',
  nameHindi: 'अनिवार्य पंजाबी पात्रता (Paper A)',
  namePunjabi: 'ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਯੋਗਤਾ (ਪੇਪਰ ਏ)',
  emoji: 'ੴ',
  chapters: [
    {
      id: 'paper-a-grammar-core',
      name: 'Paper A Gurmukhi & Grammar',
      nameHindi: 'गुरमुखी लिपि व पंजाबी व्याकरण',
      namePunjabi: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਤੇ ਪੰਜਾਬੀ ਵਿਆਕਰਨ',
      topics: [
        {
          id: 'punjabi-paper-a',
          name: 'Compulsory Punjabi Paper A: Grammar & Gurmukhi',
          nameHindi: 'अनिवार्य पंजाबी पेपर A: गुरमुखी व व्याकरण',
          namePunjabi: 'ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਪੇਪਰ ਏ',
          subtopics: [
            'Gurmukhi Alphabet: 41 total letters (35 original Painti + 6 Persian dotted: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼)',
            '3 Vowel Bearers: ੳ, ਅ, ੲ; 10 Lagaan-Matraan; 3 Lagaakhar (Bindi, Tippi, Adhak)',
            '3 Doot Akhar (foot letters): ਹ, ਰ, ਵ (e.g. ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)',
            'Grammar 4 parts: Dhuni, Shabad, Vaak, Arth; 8 parts of speech (Naam 5 types, Padnaav 6 types)',
            'Muhavare and Akhaan (Proverbs & Idioms), Shuddh-Ashuddh, Vishram Chinh',
          ],
          examQuestions: '50',
          difficulty: 'medium',
        },
      ],
    },
  ],
};

export const PUNJAB_HISTORY_SEGREGATED_TOPICS: Topic[] = [
  {
    id: 'punjab-ancient-medieval',
    name: 'Ancient & Medieval Punjab: Harappan Sites, Rigvedic Sapta Sindhu, Alexander, Sultanate, Mughals & Sufi Saints (B → I → A)',
    nameHindi: 'प्राचीन एवं मध्यकालीन पंजाब: हड़प्पा स्थल, ऋग्वैदिक सप्त सिंधु, सिकंदर, सल्तनत, मुग़ल एवं सूफ़ी संत (B → I → A)',
    namePunjabi: 'ਪ੍ਰਾਚੀਨ ਅਤੇ ਮੱਧਕਾਲੀ ਪੰਜਾਬ: ਹੜੱਪਾ ਸਾਈਟਾਂ, ਰਿਗਵੈਦਿਕ ਸਪਤ ਸਿੰਧੂ, ਸਿਕੰਦਰ, ਸਲਤਨਤ, ਮੁਗਲ ਅਤੇ ਸੂਫ਼ੀ ਸੰਤ (B → I → A)',
    subtopics: [
      '[Level B] Historical names of Punjab (Sapta Sindhu, Panchanada, Pentapotamia, Taki, Panj-Ab) & Rigvedic river names (Vitasta, Asikni, Parushni, Vipasha, Shutudri)',
      '[Level I] Harappan sites in East Punjab: Ropar (Y.D. Sharma 1952–53, dog burial), Sanghol (117 Kushana Mathura sculptures & stupa), Rohira, Sunet (30,000+ coin moulds), Kotla Nihang Khan & Bara',
      '[Level I] Dasharajna Yuddha (Battle of Ten Kings on River Parushni/Ravi), Battle of Hydaspes (May 326 BCE: Alexander vs King Porus), Menander I at Sakala (Sialkot) & Kushanas',
      '[Level A] Hindushahi Dynasty (Jayapala, Anandapala), Ghaznavid & Ghurid invasions, Sultanate/Mughal Subah of Lahore (Razia at Bathinda, Akbar’s coronation at Kalanaur 1556) & Sufi Silsilahs (Baba Farid, Mian Mir, Shah Hussain, Bulleh Shah)',
    ],
    examQuestions: '4-5',
    difficulty: 'medium',
  },
  {
    id: 'guru-nanak-dev-ji',
    name: 'Sri Guru Nanak Dev Ji (1469–1539): Life, Four Udasis, Bani & Philosophy',
    nameHindi: 'श्री गुरु नानक देव जी (1469–1539): जीवन, चार उदासियाँ, बाणी एवं दर्शन',
    namePunjabi: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (1469–1539): ਜੀਵਨ, ਚਾਰ ਉਦਾਸੀਆਂ, ਬਾਣੀ ਅਤੇ ਦਰਸ਼ਨ',
    subtopics: [
      'Birth at Rai Bhoe di Talwandi (Nankana Sahib, 1469), family & early spiritual milestones',
      'Sultanpur Lodhi period (Modikhana), Kali Bein enlightenment (1499), Kartarpur Sahib foundation (1521)',
      'Detailed route & dialogues of the Four Udasis (East, South/Sri Lanka, North/Mount Sumeru, West/Mecca-Baghdad)',
      'Sacred Bani (974 hymns in 19 Ragas: Japji Sahib, Asa di Vaar, Babur Vani, Sidh Gosht) & Three Pillars (Kirat Karo, Naam Japo, Vand Chhako)',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
  {
    id: 'guru-angad-amar-ram-das',
    name: 'Guru Angad Dev Ji, Guru Amar Das Ji & Guru Ram Das Ji (1539–1581): Institutional Consolidation',
    nameHindi: 'गुरु अंगद देव जी, गुरु अमर दास जी एवं गुरु राम दास जी (1539–1581): संस्थागत सुदृढ़ीकरण',
    namePunjabi: 'ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ, ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਅਤੇ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (1539–1581): ਸੰਸਥਾਗਤ ਵਿਕਾਸ',
    subtopics: [
      'Guru Angad Dev Ji (1539–1552): Khadur Sahib, Gurmukhi standardization, Mal Akhara, 62/63 Saloks',
      'Guru Amar Das Ji (1552–1574): Goindwal Sahib Baoli (84 steps), Pehle Pangat Phir Sangat, 22 Manjis, 52 Piris, Anand Sahib (40 Pauris, Ramkali Raga)',
      'Guru Ram Das Ji (1574–1581): Foundation of Chak Ramdas / Amritsar (1577), Masand System, 4 Laavan (Suhee Raga), 638 hymns in 30 Ragas',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
  {
    id: 'guru-arjan-dev-ji',
    name: 'Sri Guru Arjan Dev Ji (1563–1606): Harmandir Sahib, Adi Granth Compilation & Martyrdom',
    nameHindi: 'श्री गुरु अर्जन देव जी (1563–1606): हरमंदिर साहिब, आदि ग्रंथ संकलन एवं शहादत',
    namePunjabi: 'ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (1563–1606): ਹਰਿਮੰਦਰ ਸਾਹਿਬ, ਆਦਿ ਗ੍ਰੰਥ ਸੰਪਾਦਨ ਅਤੇ ਸ਼ਹਾਦਤ',
    subtopics: [
      'Foundation of Sri Harmandir Sahib (1588/1589 by Hazrat Mian Mir), Tarn Taran (1590), Kartarpur (Jalandhar, 1594), Hargobindpur & Chheharta Sahib',
      'Dasvandh (1/10th tithe) fiscal system and rebellion of Prithi Chand (Mina sect)',
      'Compilation of Adi Granth (Pothi Sahib, 1604) at Ramsar Sarovar with scribe Bhai Gurdas Ji and first Granthi Baba Buddha Ji',
      '2,218 hymns in 30 Ragas, Sukhmani Sahib (24 Ashtpadis in Gauri Raga), and supreme martyrdom at Lahore (30 May 1606) under Jahangir',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
  {
    id: 'guru-hargobind-to-tegh-bahadur',
    name: 'Guru Hargobind Sahib Ji to Guru Tegh Bahadur Ji (1606–1675): Miri-Piri, Akal Takht & Hind di Chadar',
    nameHindi: 'गुरु हरगोबिंद साहिब जी से गुरु तेग बहादुर जी (1606–1675): मीरी-पीरी, अकाल तख़्त एवं हिंद दी चादर',
    namePunjabi: 'ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਤੋਂ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ (1606–1675): ਮੀਰੀ-ਪੀਰੀ, ਅਕਾਲ ਤਖ਼ਤ ਤੇ ਹਿੰਦ ਦੀ ਚਾਦਰ',
    subtopics: [
      'Guru Hargobind Sahib Ji (1606–1644): Miri-Piri swords, Sri Akal Takht Sahib (1606), Lohgarh Fort, Bandi Chhor (Gwalior, 52 kings), 4 defensive battles & Kiratpur Sahib',
      'Guru Har Rai Ji (1644–1661): 2,200 horsemen, Kiratpur Sahib herbal Dawakhana (Dara Shikoh), Bakhshish preaching centers',
      'Guru Har Krishan Sahib Ji (1661–1664): Bala Pritam (Guruship at age 5), service during Delhi epidemic (Bangla Sahib), "Baba Bakale"',
      'Guru Tegh Bahadur Ji (1664–1675): Makhan Shah Lubana, foundation of Chak Nanaki (Anandpur Sahib, 1665), 115 hymns & 57 Saloks (Jaijaiwanti Raga), Kashmiri Pandits (Pandit Kirpa Ram) & martyrdom at Chandni Chowk (11 Nov 1675)',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
  {
    id: 'guru-gobind-singh-ji',
    name: 'Sri Guru Gobind Singh Ji (1666–1708): Creation of Khalsa, Battles, Sahibzadas & Eternal Guruship',
    nameHindi: 'श्री गुरु गोबिंद सिंह जी (1666–1708): खालसा पंथ की सृजना, युद्ध, साहिबज़ादे एवं गुरु मान्यो ग्रंथ',
    namePunjabi: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (1666–1708): ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ, ਜੰਗਾਂ, ਸਾਹਿਬਜ਼ਾਦੇ ਤੇ ਗੁਰੂ ਮਾਨਿਓ ਗ੍ਰੰਥ',
    subtopics: [
      'Birth at Patna Sahib (1666), Paonta Sahib literary court (52 poets) & Pre-Khalsa battles: Bhangani (1688, Pir Budhu Shah) and Nadaun (1691)',
      'Vaisakhi 1699 at Sri Kesgarh Sahib: Panj Pyare, Khande-di-Pahul, Five Ks (Panj Kakar), abolition of Masand system',
      'Anandpur sieges, Sirsa crossing (Dec 1704), martyrdom of Elder Sahibzadas at Chamkaur & Younger Sahibzadas at Sirhind (Nawab Sher Mohammad Khan’s Haa da Naara)',
      'Zafarnama from Dina Kangar, Battle of Muktsar (1705, Mai Bhago & 40 Mukte), Damdama Sahib recension (1706, Bhai Mani Singh) & eternal Guruship to Sri Guru Granth Sahib Ji at Nanded (1708)',
    ],
    examQuestions: '4-5',
    difficulty: 'medium',
  },
  {
    id: 'banda-singh-bahadur-misls',
    name: 'Baba Banda Singh Bahadur, Dal Khalsa, Ghallugharas & The 12 Sikh Misls (1708–1799)',
    nameHindi: 'बाबा बंदा सिंह बहादुर, दल खालसा, घल्लूघारे एवं 12 सिख मिसलें (1708–1799)',
    namePunjabi: 'ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ, ਦਲ ਖ਼ਾਲਸਾ, ਘੱਲੂਘਾਰੇ ਅਤੇ 12 ਸਿੱਖ ਮਿਸਲਾਂ (1708–1799)',
    subtopics: [
      'Baba Banda Singh Bahadur (1670–1716): Nanded baptism, Battle of Chappar Chiri (May 1710), Lohgarh capital, Nanakshahi coins, abolition of Zamindari, Gurdas Nangal siege & martyrdom (1716)',
      'Sikh persecution (Abdus Samad, Zakariya, Yahiya, Mir Mannu), martyrdoms of Bhai Mani Singh, Bhai Taru Singh, Subeg Singh & Baba Deep Singh',
      'Chhota Ghallughara (Kahnuwan, 1746) and Vadda Ghallughara (Kup Rahira, Feb 1762 against Ahmad Shah Abdali)',
      'Nawab Kapur Singh (Budha Dal & Taruna Dal, 1734), Dal Khalsa (Vaisakhi 1748 under Jassa Singh Ahluwalia), Rakhi System & all 12 Sikh Misls (founders, capitals & Red Fort 1783)',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
  {
    id: 'maharaja-ranjit-singh-empire',
    name: 'Maharaja Ranjit Singh (1780–1839), Sikh Empire Administration & The Anglo-Sikh Wars (1845–1849)',
    nameHindi: 'महाराजा रणजीत सिंह (1780–1839), सिख साम्राज्य प्रशासन एवं आंग्ल-सिख युद्ध (1845–1849)',
    namePunjabi: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (1780–1839), ਖ਼ਾਲਸਾ ਰਾਜ ਪ੍ਰਬੰਧ ਅਤੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–1849)',
    subtopics: [
      'Sukerchakia lineage, capture of Lahore (July 1799), Coronation (1801), Treaty of Amritsar (25 April 1809 with Metcalfe/Minto), Koh-i-Noor (1813) & Tripartite Treaty (1838)',
      'Major conquests: Amritsar (1805), Kasur (1807), Multan (1818), Kashmir (1819), Peshawar (1834) & Battle of Jamrud (1837 — Sardar Hari Singh Nalwa)',
      'Sarkar-i-Khalsa administration (4 Subas, Kardars, Nazims, Fakir Azizuddin, Diwan Dina Nath) & Fauj-i-Khas modernization (Allard, Ventura, Court, Avitabile)',
      'First Anglo-Sikh War (1845–46: Mudki, Ferozeshah, Baddowal, Aliwal, Sobraon — Sham Singh Attariwala; Treaties of Lahore & Bhairowal) & Second Anglo-Sikh War (1848–49: Ramnagar, Chillianwala, Multan, Gujrat "Battle of Guns" & Annexation on 29 March 1849)',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
  {
    id: 'punjab-freedom-movements',
    name: 'Punjab in the Freedom Struggle (1849–1947): Kuka, Singh Sabha, Ghadar, Akali Morchas & Bhagat Singh',
    nameHindi: 'स्वतंत्रता संग्राम में पंजाब (1849–1947): कूका, सिंह सभा, ग़दर, अकाली मोर्चे एवं भगत सिंह',
    namePunjabi: 'ਆਜ਼ਾਦੀ ਸੰਗਰਾਮ ਵਿੱਚ ਪੰਜਾਬ (1849–1947): ਕੂਕਾ, ਸਿੰਘ ਸਭਾ, ਗ਼ਦਰ, ਅਕਾਲੀ ਮੋਰਚੇ ਅਤੇ ਭਗਤ ਸਿੰਘ',
    subtopics: [
      'Nirankari (Baba Dayal), Kuka/Namdhari Movement (Satguru Ram Singh, Bhaini Sahib 1857, Malerkotla 66 martyrs 1872) & Singh Sabha Movement (Amritsar 1873, Lahore 1879)',
      'Pagri Sambhal Jatta (1907 — Sardar Ajit Singh, Lala Lajpat Rai, Banke Dayal), Ghadar Party (1913 San Francisco — Baba Sohan Singh Bhakna, Lala Har Dayal, Kartar Singh Sarabha) & Komagata Maru (1914 — Baba Gurdit Singh)',
      'Jallianwala Bagh Massacre (13 April 1919 — Dr. Kitchlew & Dr. Satyapal, Shaheed Udham Singh 1940) & Gurdwara Reform / Akali Movement (SGPC 1920, Nankana Sahib, Keys Morcha, Guru Ka Bagh, Panja Sahib, Jaito Morcha & Sikh Gurdwaras Act 1925)',
      'Babbar Akali Movement (Kishan Singh Gargaj), Naujawan Bharat Sabha (1926), HSRA (Shaheed Bhagat Singh, Rajguru, Sukhdev — 23 March 1931) & Punjab Riyasti Praja Mandal (1928 — Baba Sewa Singh Thikriwala)',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
  {
    id: 'punjab-partition-suba-modern',
    name: 'Partition of Punjab (1947), PEPSU (1948–56), Punjabi Suba Movement & Reorganisation Act (1966) (B → I → A)',
    nameHindi: 'पंजाब विभाजन (1947), पेप्सू (1948–56), पंजाबी सूबा आंदोलन एवं पुनर्गठन अधिनियम (1966) (B → I → A)',
    namePunjabi: 'ਪੰਜਾਬ ਦੀ ਵੰਡ (1947), ਪੈਪਸੂ (1948–56), ਪੰਜਾਬੀ ਸੂਬਾ ਲਹਿਰ ਅਤੇ ਪੁਨਰਗਠਨ ਐਕਟ (1966) (B → I → A)',
    subtopics: [
      '[Level B] Partition of 1947 (13 of 29 districts to East Punjab) & Linguistic Trifurcation of 1 November 1966 (Punjab, Haryana, UT Chandigarh & hilly areas to Himachal Pradesh)',
      '[Level I] Radcliffe Boundary Commission 1947 (4 Judges: Mehr Chand Mahajan, Teja Singh, Din Muhammad, Muhammad Munir) & PEPSU (15 July 1948 – 1 Nov 1956: 8 Princely States, Rajpramukh Yadavindra Singh, Premier Gian Singh Rarewala)',
      '[Level A] Sachar Formula (1 Oct 1949), Regional Formula (1956), Master Tara Singh & Sant Fateh Singh, Sardar Hukam Singh Committee & Justice J.C. Shah Commission (S. Dutt & M.M. Philip, April 1966)',
      '[Level A] First CM of Reorganized Punjab (Giani Gurmukh Singh Musafir), Punjab Official Language Act 1967 (Lachhman Singh Gill), Anandpur Sahib Resolution (1973) & Rajiv–Longowal Accord (24 July 1985)',
    ],
    examQuestions: '4-5',
    difficulty: 'medium',
  },
  {
    id: 'punjab-culture-folklore',
    name: 'Punjab Culture & Heritage: Folk Dances, Fairs & Festivals, Ornaments, Phulkari & Sufi/Qissa Literature',
    nameHindi: 'पंजाब की संस्कृति एवं विरासत: लोक नृत्य, मेले व त्योहार, आभूषण, फुलकारी एवं सूफ़ी/किस्सा साहित्य',
    namePunjabi: 'ਪੰਜਾਬ ਦਾ ਸੱਭਿਆਚਾਰ ਅਤੇ ਵਿਰਸਾ: ਲੋਕ ਨਾਚ, ਮੇਲੇ ਤੇ ਤਿਉਹਾਰ, ਗਹਿਣੇ, ਫੁਲਕਾਰੀ ਅਤੇ ਸੂਫ਼ੀ/ਕਿੱਸਾ ਸਾਹਿਤ',
    subtopics: [
      'Men’s & Women’s Folk Dances: Bhangra, Jhumar, Luddi, Malwai Giddha, Giddha, Sammi (instrument-free), Kikli & Julli',
      'Fairs, Festivals & Desi Months (Chet to Phaggan): Chhapar Mela (Gugga Pir), Jarg Mela (Sheetla Mata), Roshni Fair (Jagraon), Hola Mohalla, Maghi, Teeyan (Sawan) & Harballabh Sangeet Sammelan',
      'Traditional Punjabi Ornaments (Head-to-Toe: Saggi-Phull, Chonk-Chand, Nath, Laung, Pipal-Pattian, Kaintha, Hasli, Gokhru, Jhanjar), Folk Instruments (Algoza, Tumbi, Chimta, Kaato, Sapp) & GI-Tagged Phulkari (Bagh, Chope, Subhar)',
      'Sufi Poets (Baba Farid, Shah Hussain, Bulleh Shah), Qissa Poets (Damodar, Waris Shah, Peelu, Hashim Shah, Qadir Yar) & Modern Laureates (Bhai Vir Singh, Amrita Pritam, Gurdial Singh, Shiv Kumar Batalvi, Surjit Patar)',
    ],
    examQuestions: '4-5',
    difficulty: 'easy',
  },
];

export const CLERK_COMPUTER_SEGREGATED_TOPICS: Topic[] = [
  {
    id: 'clerk-computer-hardware',
    name: 'Computer Architecture, CPU Registers, Memory Hierarchy & Number Systems',
    nameHindi: 'कंप्यूटर आर्किटेक्चर, CPU रजिस्टर, मेमोरी पदानुक्रम एवं नंबर सिस्टम',
    namePunjabi: 'ਕੰਪਿਊਟਰ ਆਰਕੀਟੈਕਚਰ, CPU ਰਜਿਸਟਰ, ਮੈਮੋਰੀ ਪਦ-ਕ੍ਰਮ ਅਤੇ ਨੰਬਰ ਸਿਸਟਮ',
    subtopics: [
      'Five Generations of Computers (Vacuum Tubes, Transistors, ICs, VLSI, ULSI/AI) & Von Neumann Architecture',
      'CPU Special-Purpose Registers (PC, IR, MAR, MBR/MDR, Accumulator) & System Buses (Unidirectional Address Bus vs Bidirectional Data Bus)',
      'Memory Hierarchy (Registers → L1/L2/L3 SRAM Cache → DRAM Main Memory → NVMe SSD / HDD), ROM types (PROM, EPROM, EEPROM) & Booting (BIOS/UEFI POST)',
      'Number System Conversions (Binary, Octal, Decimal, Hexadecimal), 1’s & 2’s Complement Arithmetic, ASCII/Unicode & Input/Output Peripherals (MICR, OMR, OCR)',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
  {
    id: 'clerk-ms-office-mastery',
    name: 'MS Office Mastery: MS Word, MS Excel Formulas ($A$1, VLOOKUP, IF) & MS PowerPoint',
    nameHindi: 'MS Office महारत: MS Word, MS Excel फ़ॉर्मूले ($A$1, VLOOKUP, IF) एवं MS PowerPoint',
    namePunjabi: 'MS Office ਮੁਹਾਰਤ: MS Word, MS Excel ਫ਼ਾਰਮੂਲੇ ($A$1, VLOOKUP, IF) ਅਤੇ MS PowerPoint',
    subtopics: [
      'MS Word: File extensions (.docx, .dotx, .docm), Zoom (10%–500%), Gutter Margin, Mail Merge (Mailings tab), Track Changes & Complete Keyboard Shortcuts (Ctrl+Shift++, Ctrl+=, Ctrl+], F7, Shift+F7, Shift+F3)',
      'MS Excel Architecture: Cell Referencing (`A1` Relative, `$A$1` Absolute, `$A1`/`A$1` Mixed toggled via F4) & Formula Copying Rules',
      'MS Excel Functions & Errors: SUM, AVERAGE, COUNT vs COUNTA vs COUNTBLANK, COUNTIF, IF, VLOOKUP, INDEX-MATCH, LEFT/MID/RIGHT, TRIM & Error Codes (`#####`, `#DIV/0!`, `#NAME?`, `#VALUE!`, `#REF!`, `#N/A`)',
      'MS PowerPoint: Slide Master, New Slide (`Ctrl+M`) vs New Presentation (`Ctrl+N`), Slide Show (`F5` vs `Shift+F5`), Transitions vs Animations & Views',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
  {
    id: 'clerk-networking-cybersecurity',
    name: 'Computer Networks, OSI 7-Layer Model, TCP/IP Protocols, IPv4/IPv6 & Cybersecurity',
    nameHindi: 'कंप्यूटर नेटवर्क, OSI 7-लेयर मॉडल, TCP/IP प्रोटोकॉल, IPv4/IPv6 एवं साइबर सुरक्षा',
    namePunjabi: 'ਕੰਪਿਊਟਰ ਨੈੱਟਵਰਕ, OSI 7-ਲੇਅਰ ਮਾਡਲ, TCP/IP ਪ੍ਰੋਟੋਕੋਲ, IPv4/IPv6 ਅਤੇ ਸਾਈਬਰ ਸੁਰੱਖਿਆ',
    subtopics: [
      'Network Types (PAN, LAN, MAN, WAN), Topologies (Bus, Star, Ring, Mesh $N(N-1)/2$ links, Tree) & Transmission Modes (Simplex, Half-Duplex, Full-Duplex)',
      'ISO-OSI 7-Layer Reference Model (PDUs: Bits, Frames, Packets, Segments; Devices: Hub/Repeater L1, Switch/Bridge L2 MAC, Router L3 IP, Gateway)',
      'TCP/IP Protocol Suite & Port Numbers (FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, HTTP 80, POP3 110, IMAP 143, HTTPS 443) & Addressing (32-bit IPv4 Classes, `127.0.0.1` Loopback, 128-bit IPv6, 48-bit MAC)',
      'Cybersecurity & IT Act 2000: Malware (Virus vs Worm vs Trojan vs Ransomware vs Spyware), Phishing/Vishing/Smishing, DDoS, MitM, Encryption, CERT-In & Browser Shortcuts',
    ],
    examQuestions: '3-4',
    difficulty: 'medium',
  },
];

export const PUNJAB_EXAMS: Exam[] = [
  // 1.1 Punjab Master Cadre - Social Science (SST)
  {
    id: 'punjab-master-cadre-sst',
    state: 'punjab',
    name: 'Punjab Master Cadre (Social Science / SST)',
    nameHindi: 'पंजाब मास्टर कैडर (सामाजिक विज्ञान)',
    namePunjabi: 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ (ਸਮਾਜਿਕ ਸਿੱਖਿਆ)',
    body: 'Education Recruitment Board (ERB), Punjab',
    level: 'TGT - Classes 6 to 10',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://educationrecruitmentboard.com',
    emoji: '🌍',
    color: '#4338CA',
    sections: [
      { name: 'Paper A - Compulsory Punjabi Qualifying (50% min)', nameHindi: 'अनिवार्य पंजाबी पात्रता (Paper A)', marks: 50, questions: 50 },
      { name: 'Paper B - Social Science Subject Domain (Merit)', nameHindi: 'सामाजिक विज्ञान विषय डोमेन (Paper B)', marks: 150, questions: 150 },
    ],
    subjects: [
      // Subject 1: Social Science (SST)
      {
        id: 'social-science',
        name: 'Social Science (SST)',
        nameHindi: 'सामाजिक विज्ञान (SST)',
        namePunjabi: 'ਸਮਾਜਿਕ ਵਿਗਿਆਨ',
        emoji: '🌍',
        chapters: [
          {
            id: 'history',
            name: 'History',
            nameHindi: 'इतिहास',
            namePunjabi: 'ਇਤਿਹਾਸ',
            topics: [
              {
                id: 'punjab-history',
                name: 'History of Punjab & Sikh Gurus (Master Overview)',
                nameHindi: 'पंजाब का इतिहास व 10 सिख गुरु (संपूर्ण अवलोकन)',
                namePunjabi: 'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ ਤੇ 10 ਸਿੱਖ ਗੁਰੂ (ਸੰਪੂਰਨ ਸਾਰ)',
                subtopics: [
                  'Physical features of Punjab and impact on history',
                  'Life and teachings of Ten Sikh Gurus (1469-1708)',
                  'Guru Nanak Dev: 3 pillars (Naam Japna, Kirat Karo, Wand Chhako), Udasis, Sangat & Pangat',
                  'Guru Angad Dev: Gurmukhi script standardization, Mal Akhara',
                  'Guru Amar Das: Manji System (22 Manjis), Bawli at Goindwal Sahib, Anand Sahib',
                  'Guru Ram Das: Foundation of Amritsar (Ramdaspur), Masand system, Laavan',
                  'Guru Arjan Dev: Compilation of Adi Granth (1604), Golden Temple construction, Martyrdom 1606',
                  'Guru Hargobind: Miri and Piri two swords, Akal Takht construction (1606)',
                  'Guru Har Rai & Guru Harkrishan: Healing services, Bal Guru',
                  'Guru Tegh Bahadur: Hind di Chadar, Martyrdom at Chandni Chowk Delhi (1675)',
                  'Guru Gobind Singh: Creation of Khalsa (1699 at Anandpur Sahib), 5 Ks, Battles of Chamkaur and Muktsar',
                  'Banda Singh Bahadur: Battle of Chappar Chiri (1710), abolition of Zamindari, Martyrdom 1716',
                  'Dal Khalsa and 12 Misals: Nawab Kapur Singh, Jassa Singh Ahluwalia',
                  'Maharaja Ranjit Singh (1799-1839): Conquest of Lahore, Fauj-i-Khas, Treaty of Amritsar (1809)',
                  'British Annexation of Punjab (1849): Anglo-Sikh Wars, Lord Dalhousie',
                  'Freedom Fighters: Ghadar Movement (Lala Hardayal), Jallianwala Bagh (13 April 1919), Shaheed Bhagat Singh',
                ],
                examQuestions: '10-12',
                difficulty: 'medium',
              },
              ...PUNJAB_HISTORY_SEGREGATED_TOPICS,
              {
                id: 'modern-india',
                name: 'Modern Indian History (1757-1947)',
                nameHindi: 'आधुनिक भारत का इतिहास (1757-1947)',
                namePunjabi: 'ਆਧੁਨਿਕ ਭਾਰਤ ਦਾ ਇਤਿਹਾਸ',
                subtopics: [
                  'Battle of Plassey (1757) and Battle of Buxar (1764) - Treaty of Allahabad',
                  'Dual Government in Bengal (Robert Clive) and Regulating Act 1773',
                  'Socio-Religious Reform Movements: Brahmo Samaj (Raja Ram Mohan Roy), Arya Samaj (Dayanand Saraswati), Ramakrishna Mission',
                  '1857 First War of Independence: Mangal Pandey, Meerut outbreak, Bahadur Shah Zafar, Rani Laxmibai, Causes of failure',
                  'Formation of Indian National Congress (1885): A.O. Hume, W.C. Bonnerjee',
                  'Moderate Phase (1885-1905) vs Extremist Phase: Lal-Bal-Pal, Partition of Bengal (1905), Swadeshi Movement',
                  'Gandhian Movements: Champaran (1917), Kheda (1918), Non-Cooperation Movement (1920-22), Chauri Chaura incident',
                  'Civil Disobedience Movement (1930): Dandi March (12 March - 6 April 1930), Gandhi-Irwin Pact (1931)',
                  'Quit India Movement (1942): "Do or Die" call, August Kranti',
                  'Cabinet Mission Plan (1946), Mountbatten Plan (3 June 1947), Indian Independence Act 1947',
                ],
                examQuestions: '10-12',
                difficulty: 'medium',
              },
              {
                id: 'ancient-india',
                name: 'Ancient India & Indus Valley Civilization',
                nameHindi: 'प्राचीन भारत एवं सिंधु घाटी सभ्यता',
                namePunjabi: 'ਪ੍ਰਾਚੀਨ ਭਾਰਤ',
                subtopics: [
                  'Indus Valley Civilization: Harappa, Mohenjodaro, Lothal dockyard, Kalibangan, Ropar (Punjab site)',
                  'Town planning, Great Bath, Granary, Bronze Dancing Girl, Seals and script',
                  'Vedic Civilization: Rigveda, Samaveda, Yajurveda, Atharvaveda, Sabha and Samiti',
                  'Buddhism and Jainism: Gautama Buddha, 4 Noble Truths, Eightfold Path; Mahavira, Triratna',
                  'Mauryan Empire: Chandragupta Maurya, Chanakya Arthashastra, Megasthenes Indica',
                  'Ashoka the Great: Kalinga War (261 BC), Rock and Pillar Edicts, Dhamma propagation',
                  'Gupta Golden Age: Samudragupta (Napoleon of India), Chandragupta II Vikramaditya, Kalidasa',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'medieval-india',
                name: 'Medieval India & Delhi Sultanate',
                nameHindi: 'मध्यकालीन भारत एवं दिल्ली सल्तनत',
                namePunjabi: 'ਮੱਧਕਾਲੀਨ ਭਾਰਤ',
                subtopics: [
                  'Delhi Sultanate (1206-1526): Slave Dynasty (Qutb-ud-din Aibak, Iltutmish, Razia Sultana, Balban)',
                  'Khilji Dynasty: Alauddin Khilji market control regulations, military reforms',
                  'Tughlaq Dynasty: Muhammad bin Tughlaq token currency & capital transfer, Firoz Shah Tughlaq canals',
                  'Mughal Empire (1526-1707): First Battle of Panipat (1526), Babur, Humayun, Sher Shah Suri administration',
                  'Akbar the Great (1556-1605): Second Battle of Panipat (1556), Mansabdari system, Din-i-Ilahi, Sulh-i-Kul',
                  'Shah Jahan architecture (Taj Mahal, Red Fort) and Aurangzeb religious policies',
                  'Bhakti Movement: Kabir, Mirabai, Ravidas, Chaitanya Mahaprabhu',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'world-history',
                name: 'World History & Revolutions',
                nameHindi: 'विश्व इतिहास एवं प्रमुख क्रांतियां',
                namePunjabi: 'ਵਿਸ਼ਵ ਇਤਿਹਾਸ',
                subtopics: [
                  'European Renaissance: Dante, Petrarch, Leonardo da Vinci, Machiavelli',
                  'Reformation Movement: Martin Luther (1517) and 95 Theses against Catholic Church',
                  'Industrial Revolution: Inventions in Britain, Flying shuttle, Steam engine',
                  'French Revolution (1789): Storming of Bastille (14 July 1789), Liberty-Equality-Fraternity, Rousseau',
                  'Russian Revolution (1917): Lenin, Bolsheviks, October Revolution, "Peace, Bread, Land"',
                  'World War I (1914-1918): Archduke Ferdinand, Treaty of Versailles 1919, League of Nations',
                  'World War II (1939-1945): Hitler, Axis vs Allies, Atomic bombs on Hiroshima and Nagasaki',
                  'United Nations Organization (UNO): Formation (24 Oct 1945), General Assembly, Security Council',
                ],
                examQuestions: '6-8',
                difficulty: 'medium',
              },
            ],
          },
          {
            id: 'civics',
            name: 'Civics / Political Science',
            nameHindi: 'नागरिक शास्त्र / राजनीति विज्ञान',
            namePunjabi: 'ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ',
            topics: [
              {
                id: 'fundamental-rights',
                name: 'Constitution, Preamble & Fundamental Rights',
                nameHindi: 'भारतीय संविधान, प्रस्तावना एवं मौलिक अधिकार',
                namePunjabi: 'ਮੌਲਿਕ ਅਧਿਕਾਰ ਤੇ ਸੰਵਿਧਾਨ',
                subtopics: [
                  'Constituent Assembly: Dr. Sachchidananda Sinha, Dr. Rajendra Prasad, Dr. B.R. Ambedkar drafting committee',
                  'Preamble: Sovereign, Socialist, Secular, Democratic, Republic, Justice, Liberty, Equality, Fraternity (42nd Amendment 1976 additions)',
                  'Salient features of Indian Constitution: Lengthiest written constitution, federal with unitary bias',
                  'Part III Fundamental Rights (Articles 12-35): 6 fundamental rights',
                  'Article 14-18: Right to Equality, Abolition of Untouchability (Art 17), Abolition of Titles (Art 18)',
                  'Article 19: 6 democratic freedoms (Speech, Assembly, Association, Movement, Residence, Profession)',
                  'Article 21: Protection of Life and Personal Liberty (Maneka Gandhi case)',
                  'Article 21A: Right to Education (86th Amendment Act 2002)',
                  'Article 32: Right to Constitutional Remedies - Heart & Soul of Constitution (Ambedkar)',
                  '5 Types of Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto',
                  'Part IV Directive Principles of State Policy (Articles 36-51): Irish origin, Welfare state',
                  'Part IV-A Fundamental Duties (Article 51A): 42nd Amendment 1976 (Swaran Singh Committee, 11 duties)',
                ],
                examQuestions: '10-12',
                difficulty: 'medium',
              },
              {
                id: 'parliament',
                name: 'Union Parliament & Executive',
                nameHindi: 'संसद, राष्ट्रपति एवं कार्यपालिका',
                namePunjabi: 'ਸੰਸਦ ਤੇ ਰਾਸ਼ਟਰਪਤੀ',
                subtopics: [
                  'President of India (Articles 52-62): Qualifications, Electoral College, Impeachment (Article 61)',
                  'Presidential Powers: Executive, Legislative, Ordinance making (Article 123), Pardoning power (Article 72)',
                  'Emergency Provisions: National Emergency (Art 352), State Emergency / President Rule (Art 356), Financial Emergency (Art 360)',
                  'Vice President of India (Article 63): Ex-officio Chairman of Rajya Sabha (Article 64)',
                  'Prime Minister and Council of Ministers (Articles 74-75): Collective responsibility to Lok Sabha',
                  'Rajya Sabha (Council of States): Composition (245 seats, 12 nominated), Permanent house, 6-year term',
                  'Lok Sabha (House of the People): Composition (543 seats), 5-year term, Speaker and Deputy Speaker',
                  'Legislative Procedure: Ordinary Bill, Money Bill (Article 110 - certified by Speaker only), Financial Bill',
                  'Joint Sitting of Parliament (Article 108): Summoned by President, presided over by Speaker of Lok Sabha',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'judiciary',
                name: 'Judiciary: Supreme Court & High Courts',
                nameHindi: 'न्यायपालिका: सर्वोच्च न्यायालय व उच्च न्यायालय',
                namePunjabi: 'ਭਾਰਤੀ ਨਿਆਂਪਾਲਿਕਾ',
                subtopics: [
                  'Supreme Court of India (Articles 124-147): Establishment 28 Jan 1950, 34 Judges, retirement at 65 years',
                  'Appointment: Collegium system, Removal procedure (impeachment by special majority)',
                  'Jurisdiction: Original (Art 131), Appellate (Arts 132-136), Advisory (Art 143), Writ (Art 32)',
                  'High Courts (Articles 214-231): Retirement at 62 years, Article 226 writ jurisdiction',
                  'Judicial Review and Basic Structure Doctrine: Kesavananda Bharati case (24 April 1973)',
                  'Subordinate Courts, District Judges, Lok Adalats, Public Interest Litigation (PIL)',
                ],
                examQuestions: '6-8',
                difficulty: 'medium',
              },
              {
                id: 'local-govt',
                name: 'Local Government: 73rd & 74th Amendments',
                nameHindi: 'स्थानीय स्वशासन: पंचायती राज व नगर निकाय',
                namePunjabi: 'ਸਥਾਨਕ ਸਰਕਾਰ ਤੇ ਪੰਚਾਇਤੀ ਰਾਜ',
                subtopics: [
                  'Historical Evolution: Lord Ripon resolution (1882), Article 40 of DPSP',
                  'First launch: Nagaur (Rajasthan) on 2 October 1959 by Jawaharlal Nehru',
                  'Committees: Balwant Rai Mehta (1957, 3-tier), Ashok Mehta (1977, 2-tier), L.M. Singhvi (1986)',
                  '73rd Amendment Act 1992: Part IX, 11th Schedule (29 functional items), enforced 24 April 1993',
                  '3-Tier Structure: Gram Panchayat, Panchayat Samiti, Zila Parishad',
                  'Reservations: Article 243D (minimum 1/3 for women; 50% in Punjab and Rajasthan)',
                  '74th Amendment Act 1992: Part IX-A, 12th Schedule (18 functional items) for Municipalities',
                  'State Finance Commission (Article 243I) and State Election Commission (Article 243K)',
                ],
                examQuestions: '6-8',
                difficulty: 'medium',
              },
              {
                id: 'sst-polity-concepts-theories',
                name: 'Political Theory, Core Concepts & Ideologies (B → I → A)',
                nameHindi: 'राजनीतिक सिद्धांत, मूल अवधारणाएँ एवं विचारधाराएँ (B → I → A)',
                namePunjabi: 'ਰਾਜਨੀਤਿਕ ਸਿਧਾਂਤ, ਮੁੱਢਲੇ ਸੰਕਲਪ ਅਤੇ ਵਿਚਾਰਧਾਰਾਵਾਂ (B → I → A)',
                subtopics: [
                  '[Level B] State (4 Elements: Population, Territory, Govt, Sovereignty) vs Nation vs Government; Democracy, Secularism (Principled Distance) & Nationalism',
                  '[Level I] Liberty (Isaiah Berlin Negative vs Positive, J.S. Mill Harm Principle), Equality, Justice (John Rawls Veil of Ignorance & Difference Principle), Rights & Sovereignty (Austin Monistic vs Laski Pluralistic)',
                  '[Level A] Political Ideologies: Liberalism (Classical, Welfare, Neoliberal), Socialism, Marxism (Historical Materialism, Surplus Value, Gramsci Hegemony), Gandhism (Swaraj, Satyagraha, Sarvodaya, Trusteeship) & Dr. B.R. Ambedkar (Social Democracy)',
                  '[Level A] Western & Indian Political Thinkers: Plato, Aristotle, Machiavelli, Hobbes, Locke, Rousseau, J.S. Mill, Marx, Kautilya (Saptanga Theory) & M.N. Roy',
                ],
                examQuestions: '4-6',
                difficulty: 'hard',
              },
              {
                id: 'sst-citizenship-election-parties',
                name: 'Citizenship, Election Procedure & Party System in India (B → I → A)',
                nameHindi: 'नागरिकता, चुनाव प्रक्रिया एवं भारत में दलीय प्रणाली (B → I → A)',
                namePunjabi: 'ਨਾਗਰਿਕਤਾ, ਚੋਣ ਪ੍ਰਕਿਰਿਆ ਅਤੇ ਭਾਰਤ ਵਿੱਚ ਦਲ ਪ੍ਰਣਾਲੀ (B → I → A)',
                subtopics: [
                  '[Level B] Single Citizenship, Universal Adult Franchise (Article 326, 61st Amendment 1988), Secret Ballot, Constituency & Political Parties',
                  '[Level I] Part II Citizenship (Articles 5–11), Citizens-only Fundamental Rights (Arts 15, 16, 19, 29, 30), Citizenship Act 1955 (5 Acquisition & 3 Loss modes) & OCI Cardholders (Sec 7A–7D)',
                  '[Level I] Election Commission of India (Art 324, CEC tenure security), FPTP vs PR-STV, EVM (1982 Parur) + VVPAT (2013 Noksen), NOTA (PUCL 2013), Model Code of Conduct & Delimitation (Art 82, 84th/87th Amendments)',
                  '[Level A] RPA 1950 vs RPA 1951 (Sec 8, Lily Thomas 2013, Sec 29A, Sec 123), Tenth Schedule Anti-Defection Law (52nd Amendment 1985, 91st Amendment 2003, Kihoto Hollohan 1992) & ECI National/State Party Recognition Criteria (Para 6A/6B)',
                ],
                examQuestions: '5-7',
                difficulty: 'medium',
              },
              {
                id: 'sst-state-govt-punjab-local',
                name: 'State Government, Indian Federalism & Local Democracy in Punjab (B → I → A)',
                nameHindi: 'राज्य सरकार, भारतीय संघवाद एवं पंजाब में पंचायती राज (B → I → A)',
                namePunjabi: 'ਰਾਜ ਸਰਕਾਰ, ਭਾਰਤੀ ਸੰਘਵਾਦ ਅਤੇ ਪੰਜਾਬ ਵਿੱਚ ਪੰਚਾਇਤੀ ਰਾਜ (B → I → A)',
                subtopics: [
                  '[Level B] Three Tiers of Governance (Union, State, Local) & Punjab Legislature Profile: 117 Vidhan Sabha seats (34 SC reserved), 13 Lok Sabha, 7 Rajya Sabha, Vidhan Parishad abolished Jan 1970',
                  '[Level I] State Executive & Legislature: Governor (Arts 153–162, Art 200 Bills, Art 213 Ordinance), CM & Council of Ministers (15% cap under 91st Amendment) & Money Bill vs Ordinary Bill',
                  '[Level I] Indian Federal System: Seventh Schedule (Union, State, Concurrent Lists; 42nd Amendment 5 transfers), Art 249/250/252/253, Inter-State Council (Art 263), Finance Commission (Art 280), GST Council (Art 279A) & Emergencies (Arts 352, 356, 360)',
                  '[Level A] Punjab Panchayati Raj Act 1994 (Gram Sabha Hari/Sawani meetings, Gram Panchayat, Panchayat Samiti, Zila Parishad, 50% Women Reservation 2017), Sarkaria (1983) & Punchhi (2007) Commissions, S.R. Bommai (1994)',
                ],
                examQuestions: '6-8',
                difficulty: 'medium',
              },
              {
                id: 'sst-foreign-policy-uno',
                name: 'India’s Foreign Policy, Regional Groupings & The United Nations (UNO) (B → I → A)',
                nameHindi: 'भारत की विदेश नीति, क्षेत्रीय संगठन एवं संयुक्त राष्ट्र संघ (UNO) (B → I → A)',
                namePunjabi: 'ਭਾਰਤ ਦੀ ਵਿਦੇਸ਼ ਨੀਤੀ, ਖੇਤਰੀ ਸੰਗਠਨ ਅਤੇ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ (UNO) (B → I → A)',
                subtopics: [
                  '[Level B] Article 51 (DPSP), Panchsheel (29 April 1954 — Nehru & Zhou Enlai), Non-Aligned Movement (Bandung 1955, Belgrade 1961) & UN Day (24 October 1945)',
                  '[Level I] Six Principal Organs of the UNO (UNGA, UNSC P5 + 10 non-permanent, ECOSOC, Trusteeship, ICJ at The Hague — 15 Judges/9 yrs, Secretariat) & UN Specialized Agencies (UNESCO, WHO, ILO, FAO, IMF, World Bank)',
                  '[Level I] Evolution of Indian Foreign Policy: Look East (1991) to Act East (2014), Gujral Doctrine (1996 unilateral non-reciprocity) & India’s Nuclear Doctrine (Pokhran-I 1974, Pokhran-II 1998, No First Use 2003, NPT/CTBT stance)',
                  '[Level A] Neighbour Treaties (Indus Waters 1960, Tashkent 1966, Indo-Soviet 1971, Shimla 1972, Indo-Sri Lanka 1987, Land Boundary 100th Amendment 2015) & Regional Groupings (SAARC, BIMSTEC, ASEAN, SCO, BRICS, QUAD, G20 + African Union)',
                ],
                examQuestions: '4-6',
                difficulty: 'medium',
              },
            ],
          },
          {
            id: 'geography',
            name: 'Geography',
            nameHindi: 'भूगोल',
            namePunjabi: 'ਭੂਗੋਲ',
            topics: [
              {
                id: 'punjab-geography',
                name: 'Geography of Punjab: Relief, Rivers, Canals, Soils & Agro-Climatic Regions',
                nameHindi: 'पंजाब का भूगोल: नदियां, नहरें, मिट्टी व जलवायु',
                namePunjabi: 'ਪੰਜਾਬ ਦਾ ਭੂਗੋਲ, ਦਰਿਆ, ਨਹਿਰਾਂ ਤੇ ਮਿੱਟੀ',
                subtopics: [
                  'Location, Extent & Boundaries: 50,362 sq km, 23 districts (Malerkotla 23rd district in 2021)',
                  'International border: 425 km with Pakistan (Radcliffe line)',
                  'Three Perennial Rivers: Satluj (longest 440 km in Punjab), Beas, Ravi',
                  'Five Historic Doabs: Bist Doab, Bari Doab, Rechna Doab, Chaj Doab, Sindh Sagar Doab',
                  'Three Cultural Regions: Majha (4 districts), Doaba (4 districts), Malwa (15 districts, largest region)',
                  'Canal Networks: Sirhind Canal, Bhakra Canal, Harike Wetland (Ramsar site at confluence of Satluj & Beas)',
                  'Forest Cover: 3.67% (low forest cover), major wildlife sanctuaries: Abohar (Blackbuck), Harike, Bir Moti Bagh',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'physical-geography',
                name: 'Geography of India: Physiography, Drainage, Monsoon, Soils, Agriculture, Minerals & Population',
                nameHindi: 'भारत का भूगोल: भू-आकृतिक प्रदेश, अपवाह तंत्र, मानसून, मृदा, कृषि, खनिज एवं जनसंख्या',
                namePunjabi: 'ਭਾਰਤ ਦਾ ਭੂਗੋਲ: ਧਰਾਤਲ, ਜਲ-ਪ੍ਰਵਾਹ, ਮਾਨਸੂਨ, ਮਿੱਟੀ, ਖੇਤੀਬਾੜੀ ਅਤੇ ਖਣਿਜ',
                subtopics: [
                  'Six Physiographic Divisions: Northern Mountains (Himalayas), Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains, Islands',
                  'Himalayan Ranges: Himadri (Greater Himalayas), Himachal (Lesser Himalayas), Shiwaliks (Outer Himalayas)',
                  'Major Peaks: Mount Everest (8848.86 m), K2 / Godwin Austen (8611 m), Kanchenjunga (8586 m)',
                  'Major River Basins: Indus Basin, Ganga Basin, Brahmaputra Basin (Majuli largest river island)',
                  'Peninsular Rivers: East-flowing (Godavari / Dakshin Ganga, Krishna, Cauvery) vs West-flowing (Narmada, Tapi in rift valleys)',
                  'Climate of India: Southwest Monsoon mechanism, Western Disturbances (crucial for Rabi crops in Punjab)',
                  'Soil Classification: Alluvial soil (Bhangar vs Khadar), Black soil (Regur, cotton), Red & Yellow, Laterite',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'sst-geo-earth',
                name: 'Physical Geography I: Solar System, Latitudes, Longitudes, Time Zones & Earth Motions',
                nameHindi: 'भौतिक भूगोल I: सौरमंडल, अक्षांश-देशांतर, समय क्षेत्र एवं पृथ्वी की गतियाँ',
                namePunjabi: 'ਭੌਤਿਕ ਭੂਗੋਲ I: ਸੌਰ ਮੰਡਲ, ਅਕਸ਼ਾਂਸ਼-ਦੇਸ਼ਾਂਤਰ, ਸਮਾਂ ਖੇਤਰ ਅਤੇ ਧਰਤੀ ਦੀਆਂ ਗਤੀਆਂ',
                subtopics: [
                  'Universe, Solar System, Terrestrial vs Jovian planets, Rotation & Revolution, Solstices (21 June / 22 Dec) & Equinoxes (21 March / 23 Sept)',
                  'Latitudes (Tropic of Cancer 23.5°N passes through 8 Indian states) & Longitudes (1° = 4 minutes, 15° = 1 hour)',
                  'Indian Standard Time (IST 82.5°E Mirzapur, +5:30 GMT) & International Date Line (180° longitude)',
                ],
                examQuestions: '3-4',
                difficulty: 'easy',
              },
              {
                id: 'sst-geo-tectonics',
                name: 'Physical Geography II: Earth’s Interior, Rocks, Plate Tectonics, Earthquakes, Volcanoes & Landforms',
                nameHindi: 'भौतिक भूगोल II: पृथ्वी की आंतरिक संरचना, चट्टानें, प्लेट विवर्तनिकी, भूकंप, ज्वालामुखी एवं स्थलरूप',
                namePunjabi: 'ਭੌਤਿਕ ਭੂਗੋਲ II: ਧਰਤੀ ਦੀ ਅੰਦਰੂਨੀ ਬਣਤਰ, ਚੱਟਾਨਾਂ, ਪਲੇਟ ਟੈਕਟੋਨਿਕਸ, ਭੂਚਾਲ, ਜਵਾਲਾਮੁਖੀ ਅਤੇ ਧਰਾਤਲੀ ਰੂਪ',
                subtopics: [
                  'Earth’s Interior: Crust (SIAL/SIMA), Mantle (Asthenosphere), Core (NIFE); Discontinuities (Conrad, Moho, Repetti, Gutenberg, Lehmann)',
                  'Rocks & Rock Cycle: Igneous (Granite, Basalt), Sedimentary (Sandstone, Limestone, Coal), Metamorphic (Marble, Slate, Quartzite, Gneiss)',
                  'Continental Drift (Wegener) & Plate Tectonics (Convergent, Divergent, Transform boundaries), Seismic Waves (P, S, L waves) & Fluvial/Aeolian/Glacial/Karst Landforms',
                ],
                examQuestions: '4-5',
                difficulty: 'medium',
              },
              {
                id: 'sst-geo-atmosphere',
                name: 'Physical Geography III: Atmosphere, Pressure Belts, Planetary/Local Winds, Cyclones & Koeppen Climate',
                nameHindi: 'भौतिक भूगोल III: वायुमंडल, वायुदाब पेटियाँ, पवनें, चक्रवात, वर्षा एवं कोपेन जलवायु वर्गीकरण',
                namePunjabi: 'ਭੌਤਿਕ ਭੂਗੋਲ III: ਵਾਯੂਮੰਡਲ, ਹਵਾ ਦੇ ਦਬਾਅ ਦੀਆਂ ਪੇਟੀਆਂ, ਪੌਣਾਂ, ਚੱਕਰਵਾਤ ਅਤੇ ਜਲਵਾਯੂ ਵਰਗੀਕਰਨ',
                subtopics: [
                  'Composition & 5 Layers of Atmosphere: Troposphere (weather, normal lapse rate 6.5°C/km), Stratosphere (Ozone layer), Mesosphere, Thermosphere/Ionosphere, Exosphere',
                  'Insolation, Heat Budget, 7 Pressure Belts, Coriolis Force (Ferrel’s Law), Trade Winds, Westerlies (Roaring Forties) & Local Winds (Loo, Chinook, Foehn, Mistral, Sirocco, Harmattan)',
                  'Types of Rainfall (Convectional, Orographic, Cyclonic/Frontal), Tropical vs Temperate Cyclones & World Climatic Regions',
                ],
                examQuestions: '4-5',
                difficulty: 'medium',
              },
              {
                id: 'sst-geo-oceans',
                name: 'Physical Geography IV: Hydrosphere, Ocean Relief, Salinity, Tides & Warm/Cold Ocean Currents',
                nameHindi: 'भौतिक भूगोल IV: जलमंडल, महासागरीय नितल, लवणता, ज्वार-भाटा एवं गर्म/ठंडी महासागरीय धाराएँ',
                namePunjabi: 'ਭੌਤਿਕ ਭੂਗੋਲ IV: ਜਲ-ਮੰਡਲ, ਮਹਾਂਸਾਗਰੀ ਧਰਾਤਲ, ਖਾਰਾਪਣ, ਜਵਾਰ-ਭਾਟਾ ਅਤੇ ਸਮੁੰਦਰੀ ਧਾਰਾਵਾਂ',
                subtopics: [
                  'Ocean Floor Relief: Continental Shelf, Continental Slope, Deep Sea Plain, Oceanic Trenches (Mariana Trench / Challenger Deep)',
                  'Ocean Temperature & Salinity (highest in Lake Van, Dead Sea, Red Sea; average ocean salinity 35‰)',
                  'Spring Tides vs Neap Tides & Warm vs Cold Ocean Currents (Gulf Stream, Kuroshio, Labrador, Oyashio, Peru/Humboldt, Benguela, Canary, Agulhas)',
                ],
                examQuestions: '3-4',
                difficulty: 'medium',
              },
              {
                id: 'sst-geo-environment',
                name: 'Resources, Environment, Biodiversity, Protected Areas & International Environmental Agreements',
                nameHindi: 'संसाधन एवं पर्यावरण: जैव विविधता, संरक्षित क्षेत्र, पर्यावरण कानून एवं अंतर्राष्ट्रीय समझौते',
                namePunjabi: 'ਸਰੋਤ ਅਤੇ ਵਾਤਾਵਰਣ: ਜੈਵ-ਵਿਭਿੰਨਤਾ, ਰਾਸ਼ਟਰੀ ਪਾਰਕ, ਵਾਤਾਵਰਣ ਕਾਨੂੰਨ ਅਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸਮਝੌਤੇ',
                subtopics: [
                  'Resource Classification (Renewable vs Non-Renewable, Biotic vs Abiotic) & Sustainable Development (Brundtland Report 1987, 17 SDGs)',
                  'Biodiversity Conservation: In-situ (National Parks, Wildlife Sanctuaries, 18 Biosphere Reserves, 4 Biodiversity Hotspots, Ramsar Wetlands) vs Ex-situ',
                  'Indian Environmental Acts: Wildlife Protection Act (1972), Project Tiger (1973), Water Act (1974), Forest Conservation Act (1980), Environment Protection Act (1986), Biodiversity Act (2002), NGT (2010)',
                  'Global Conventions: Stockholm (1972), Ramsar (1971), Montreal Protocol (1987 — Ozone), Rio Earth Summit (1992 — UNFCCC, CBD, Agenda 21), Kyoto Protocol (1997) & Paris Agreement (2015)',
                ],
                examQuestions: '4-5',
                difficulty: 'medium',
              },
            ],
          },
          {
            id: 'economics',
            name: 'Economics (All 16 Official ERB Syllabus Headings)',
            nameHindi: 'अर्थशास्त्र (सभी 16 आधिकारिक ERB पाठ्यक्रम विषय)',
            namePunjabi: 'ਅਰਥਸ਼ਾਸਤਰ (ਸਾਰੇ 16 ਸਰਕਾਰੀ ERB ਸਿਲੇਬਸ ਵਿਸ਼ੇ)',
            topics: [
              {
                id: 'sst-econ-micro-consumer-elasticity',
                name: 'Micro vs Macro, Types of Economies, Consumer Equilibrium & Price Elasticity of Demand (B → I → A)',
                nameHindi: 'व्यष्टि बनाम समष्टि, उपभोक्ता संतुलन एवं माँग की कीमत लोच (B → I → A)',
                namePunjabi: 'ਵਿਅਸ਼ਟੀ ਬਨਾਮ ਸਮਸ਼ਟੀ, ਉਪਭੋਗਤਾ ਸੰਤੁਲਨ ਅਤੇ ਮੰਗ ਦੀ ਕੀਮਤ ਲਚਕ (B → I → A)',
                subtopics: [
                  '[Official Headings 6 & 14] Micro vs Macro (Ragnar Frisch 1933), Central Problems (What, How, For Whom), PPC (Concave due to increasing MRT), Capitalist/Socialist/Mixed Economies & Economic vs Social Infrastructure',
                  '[Official Heading 1] Consumer Equilibrium: Cardinal Utility (Marshall — TU & MU, Law of DMU, Equi-Marginal Utility MU_x/P_x = MU_y/P_y) & Ordinal Indifference Curve (Hicks-Allen — Properties, Budget Line, MRS_xy = P_x/P_y)',
                  '[Official Heading 2] Demand, Market Demand, Movement vs Shift, Giffen Paradox vs Veblen Effect & Price Elasticity of Demand (5 Degrees, Percentage, Point/Geometric, Arc & Marshall’s Total Expenditure Method)',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'sst-econ-producer-cost-market',
                name: 'Producer Behaviour (Production, Cost, Revenue, Supply), Market Forms & Price Determination (B → I → A)',
                nameHindi: 'उत्पादक व्यवहार (उत्पादन, लागत, आगम, पूर्ति), बाज़ार के रूप एवं कीमत निर्धारण (B → I → A)',
                namePunjabi: 'ਉਤਪਾਦਕ ਵਿਵਹਾਰ (ਉਤਪਾਦਨ, ਲਾਗਤ, ਆਮਦਨ, ਪੂਰਤੀ), ਬਜ਼ਾਰ ਦੇ ਰੂਪ ਅਤੇ ਕੀਮਤ ਨਿਰਧਾਰਨ (B → I → A)',
                subtopics: [
                  '[Official Heading 7] Production Function: Short-Run Law of Variable Proportions (3 Stages of TP/AP/MP — rational Stage II) & Long-Run Returns to Scale (Cobb-Douglas Q = A L^α K^β)',
                  '[Official Heading 7] Short-Run Cost Curves (TFC, TVC, TC, Rectangular Hyperbola AFC, U-shaped AVC/AC/MC cutting at minimum points), Revenue (TR, AR, MR; MR = AR(1 - 1/|e|)), Supply & Producer Equilibrium (MR = MC & MC rising; Break-Even P = Min AC vs Shut-Down P = Min AVC)',
                  '[Official Headings 8 & 9] Forms of Market (Perfect Competition, Monopoly & Pigouvian Price Discrimination, Monopolistic Competition & Excess Capacity, Oligopoly & Sweezy’s Kinked Demand Curve) & Price Determination under Perfect Competition (Price Ceiling vs MSP Price Floor)',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'sst-econ-keynesian-multiplier',
                name: 'National Income Aggregates (GDP, GNP, NDP, NNP), Keynesian Income Determination (AD–AS, MPC/MPS) & Multiplier (B → I → A)',
                nameHindi: 'राष्ट्रीय आय समुच्चय (GDP, GNP, NDP, NNP), आय एवं रोज़गार का निर्धारण (AD–AS, MPC/MPS) तथा निवेश गुणक (B → I → A)',
                namePunjabi: 'ਰਾਸ਼ਟਰੀ ਆਮਦਨ (GDP, GNP, NDP, NNP), ਆਮਦਨ ਤੇ ਰੁਜ਼ਗਾਰ ਦਾ ਨਿਰਧਾਰਨ (AD–AS, MPC/MPS) ਅਤੇ ਨਿਵੇਸ਼ ਗੁਣਕ (B → I → A)',
                subtopics: [
                  '[Official Headings 3 & 13] Circular Flow of Income, 8 National Income Aggregates (GDP, GNP, NDP, NNP at MP & FC; NNP_FC = National Income) & 3 Measurement Methods (Value Added, Income, Expenditure; GDP Deflator)',
                  '[Official Heading 4] Keynesian Consumption & Saving Functions: APC = C/Y, APS = S/Y, MPC = ΔC/ΔY, MPS = ΔS/ΔY (APC + APS = 1; MPC + MPS = 1; Break-even where C = Y & S = 0)',
                  '[Official Headings 4 & 12] Aggregate Demand (AD = C + I) & Aggregate Supply (AS = Y), Equilibrium (AD = AS & S = I), Investment Multiplier k = 1/(1 - MPC) = 1/MPS, Inflationary Gap vs Deflationary Gap & Paradox of Thrift',
                ],
                examQuestions: '10-12',
                difficulty: 'hard',
              },
              {
                id: 'sst-econ-money-budget-bop-punjab',
                name: 'Money & Banking, Govt Budget, BoT/BoP, Economic Planning & Economy of Punjab (B → I → A)',
                nameHindi: 'मुद्रा एवं बैंकिंग, सरकारी बजट, व्यापार व भुगतान संतुलन, आर्थिक नियोजन एवं पंजाब की अर्थव्यवस्था (B → I → A)',
                namePunjabi: 'ਮੁਦਰਾ ਤੇ ਬੈਂਕਿੰਗ, ਸਰਕਾਰੀ ਬਜਟ, ਵਪਾਰ ਤੇ ਭੁਗਤਾਨ ਸੰਤੁਲਨ, ਆਰਥਿਕ ਯੋਜਨਾਬੰਦੀ ਅਤੇ ਪੰਜਾਬ ਦੀ ਅਰਥਵਿਵਸਥਾ (B → I → A)',
                subtopics: [
                  '[Official Heading 10] Money Supply (M_1 Narrow Money to M_3 Broad Money), Commercial Bank Credit Creation (Multiplier = 1/LRR) & RBI Monetary Policy Tools (Repo, Reverse Repo, Bank Rate, MSF, CRR, SLR, OMO)',
                  '[Official Headings 5 & 11] Government Budget (Revenue vs Capital Receipts & Expenditure; Revenue, Fiscal & Primary Deficits; FRBM Act 2003) & External Sector (Balance of Trade vs BoP Current & Capital Accounts, Devaluation vs Depreciation)',
                  '[Official Headings 15 & 16] Economic Planning in India (1st Plan Harrod-Domar to 12th Plan, 1991 LPG Reforms, NITI Aayog 2015) & Economy of Punjab (Green Revolution, PAU 1962, Punjab Mandi Board 1961, MSP Procurement, Johl Committees on Crop Diversification, Industrial Hubs & Fiscal Challenges)',
                ],
                examQuestions: '10-12',
                difficulty: 'medium',
              },
              {
                id: 'indian-economy',
                name: 'Indian Economy Synthesis: Sectors, Poverty, Unemployment, Inflation & Human Development',
                nameHindi: 'भारतीय अर्थव्यवस्था संश्लेषण: क्षेत्रक, गरीबी, बेरोज़गारी, मुद्रास्फीति एवं मानव विकास',
                namePunjabi: 'ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ: ਖੇਤਰ, ਗਰੀਬੀ, ਬੇਰੁਜ਼ਗਾਰੀ, ਮਹਿੰਗਾਈ ਅਤੇ ਮਨੁੱਖੀ ਵਿਕਾਸ',
                subtopics: [
                  'Primary, Secondary & Tertiary Sectors (GVA vs Employment share), Disguised & Seasonal Unemployment',
                  'Poverty Estimation Committees (Lakdawala, Tendulkar, Rangarajan) & NITI Aayog Multidimensional Poverty Index (MPI)',
                  'Inflation (Demand-pull vs Cost-push, WPI vs CPI, 4% ± 2% Monetary Policy Committee target) & Human Development Index (UNDP — Mahbub ul Haq & Amartya Sen)',
                ],
                examQuestions: '4-6',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      PUNJABI_PAPER_A_SUBJECT,
    ],
  },

  // 1.2 Punjab Master Cadre - Science
  {
    id: 'punjab-master-cadre-science',
    state: 'punjab',
    name: 'Punjab Master Cadre (Science)',
    nameHindi: 'पंजाब मास्टर कैडर (विज्ञान)',
    namePunjabi: 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ (ਵਿਗਿਆਨ)',
    body: 'Education Recruitment Board (ERB), Punjab',
    level: 'TGT - Classes 6 to 10',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://educationrecruitmentboard.com',
    emoji: '🔬',
    color: '#0D9488',
    sections: [
      { name: 'Paper A - Compulsory Punjabi Qualifying (50% min)', nameHindi: 'अनिवार्य पंजाबी पात्रता (Paper A)', marks: 50, questions: 50 },
      { name: 'Paper B - Science Subject Domain (Physics, Chemistry, Botany & Zoology — 150 MCQs, 0 Negative Marking)', nameHindi: 'विज्ञान विषय डोमेन (Paper B)', marks: 150, questions: 150 },
    ],
    subjects: [
      // Subject 1: Science (Medical & Non-Medical — All 64 Official ERB Headings)
      {
        id: 'science',
        name: 'Science (Physics, Chemistry, Botany, Zoology & Lab Base)',
        nameHindi: 'विज्ञान (भौतिकी, रसायन, वनस्पति एवं जंतु विज्ञान)',
        namePunjabi: 'ਵਿਗਿਆਨ (ਫਿਜ਼ਿਕਸ, ਕੈਮਿਸਟਰੀ, ਬੌਟਨੀ ਅਤੇ ਜ਼ੂਆਲੋਜੀ)',
        emoji: '🔬',
        chapters: [
          {
            id: 'science-foundation-lab',
            name: '0. Foundation Science (Class 6–10 Base), SI Units, Lab Safety & Scientific Discoveries',
            nameHindi: '0. आधारभूत विज्ञान (कक्षा 6–10 आधार), SI मात्रक, प्रयोगशाला सुरक्षा एवं वैज्ञानिक खोजें',
            namePunjabi: '0. ਮੁੱਢਲਾ ਵਿਗਿਆਨ (ਜਮਾਤ 6–10 ਅਧਾਰ), SI ਇਕਾਈਆਂ, ਲੈਬ ਸੁਰੱਖਿਆ ਅਤੇ ਵਿਗਿਆਨਕ ਖੋਜਾਂ',
            topics: [
              {
                id: 'sci-foundation-class6-10-lab',
                name: 'Foundation Science (Class 6–10 PSEB/NCERT), SI Units, Constants, Lab Safety & Discoveries (B → I)',
                nameHindi: 'आधारभूत विज्ञान (कक्षा 6–10), SI मात्रक, भौतिक नियतांक, प्रयोगशाला सुरक्षा एवं वैज्ञानिक खोजें (B → I)',
                namePunjabi: 'ਮੁੱਢਲਾ ਵਿਗਿਆਨ (ਜਮਾਤ 6–10), SI ਇਕਾਈਆਂ, ਸਥਿਰਾਂਕ, ਲੈਬ ਸੁਰੱਖਿਆ ਅਤੇ ਵਿਗਿਆਨਕ ਖੋਜਾਂ (B → I)',
                subtopics: [
                  '[Level B] Class 6–8 PSEB/NCERT Base: States of matter, physical vs chemical changes, acid-base indicators (litmus, turmeric, phenolphthalein, methyl orange), metals vs non-metals, cell discovery & nutrition',
                  '[Level I] 7 SI Base Units & Fundamental Constants: c = 3×10⁸ m/s, h = 6.626×10⁻³⁴ J·s, N_A = 6.022×10²³ mol⁻¹, F = 96485 C/mol, R = 8.314 J/(mol·K), G = 6.674×10⁻¹¹ N·m²/kg²',
                  '[Level I] Practical Lab Safety & Volumetric Analysis: Safe acid dilution (add acid to water slowly), burette meniscus reading (upper meniscus for dark KMnO₄), Flame Test colours & Lassaigne’s Sodium Fusion Test (N, S, Halogens)',
                  '[Level I] Landmark Scientists & Punjab Science Pioneers: Dr. Hargobind Khorana (Nobel 1968 Genetic Code), Prof. Ruchi Ram Sahni, Birbal Sahni, Piara Singh Gill, C.V. Raman, Homi Bhabha & S.N. Bose',
                ],
                examQuestions: '6-8',
                difficulty: 'easy',
              },
            ],
          },
          {
            id: 'physics',
            name: '1. Physics (All 10 Official ERB Headings)',
            nameHindi: '1. भौतिक विज्ञान (सभी 10 आधिकारिक ERB विषय)',
            namePunjabi: '1. ਭੌਤਿਕ ਵਿਗਿਆਨ (ਸਾਰੇ 10 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            topics: [
              {
                id: 'physics-concepts',
                name: 'Classical Mechanics, Units & Error Analysis, Rotational Dynamics, Gravitation & Properties of Matter (B → I → H → G/P)',
                nameHindi: 'चिरसम्मत यांत्रिकी, मात्रक व त्रुटि विश्लेषण, घूर्णी गति, गुरुत्वाकर्षण एवं द्रव्य के गुण (B → I → H → G/P)',
                namePunjabi: 'ਕਲਾਸੀਕਲ ਮਕੈਨਿਕਸ, ਇਕਾਈਆਂ ਤੇ ਤਰੁੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ, ਘੁੰਮਣ ਗਤੀ ਅਤੇ ਗੁਰੂਤਾਕਰਸ਼ਣ (B → I → H → G/P)',
                subtopics: [
                  '[Official Headings: Classical mechanics; Experimental techniques & data analysis] Dimensional formulas, significant figures, error propagation (ΔZ/Z), kinematics & projectile motion',
                  '[Level B → H] Newton’s Laws of Motion, momentum conservation, impulse, friction, circular banking, Work-Energy-Power (1 HP = 746 W), Moment of Inertia (Parallel & Perpendicular Axis Theorems)',
                  '[Level H → G] Universal Gravitation (G = 6.674×10⁻¹¹ Nm²/kg², g = 9.8 m/s², Escape velocity 11.2 km/s), Kepler’s Laws, Young/Bulk/Shear Modulus, Surface Tension, Viscosity (Stoke’s & Poiseuille’s laws) & Bernoulli’s Theorem',
                  '[Level P Flagged] Central forces, Coriolis force & introductory Lagrangian (L = T − V) / Hamiltonian (H = T + V) mechanics',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'sci-phy-waves-optics',
                name: 'Waves, Acoustics & Geometrical/Wave Optics: SHM, Doppler Effect, Lenses, Interference, Diffraction & Polarisation (I → H → G)',
                nameHindi: 'तरंगें, ध्वनिकी एवं प्रकाशिकी: सरल आवर्त गति, डॉप्लर प्रभाव, लेंस, व्यतिकरण, विवर्तन एवं ध्रुवण (I → H → G)',
                namePunjabi: 'ਤਰੰਗਾਂ, ਧੁਨੀ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਕੀ: SHM, ਡੌਪਲਰ ਪ੍ਰਭਾਵ, ਲੈਂਜ਼, ਇੰਟਰਫੇਰੈਂਸ, ਡਿਫਰੈਕਸ਼ਨ ਅਤੇ ਪੋਲਰਾਈਜ਼ੇਸ਼ਨ (I → H → G)',
                subtopics: [
                  '[Level I] Spherical Mirrors (1/v + 1/u = 1/f), Thin Lenses (1/v − 1/u = 1/f), Power in Dioptres, Human Eye Defects (Myopia/Hypermetropia/Presbyopia/Astigmatism), Total Internal Reflection & Optical Fibres',
                  '[Level H] Simple Harmonic Motion (Pendulum T = 2π√(L/g), Spring T = 2π√(m/k)), Newton-Laplace Speed of Sound v = √(γP/ρ), Open vs Closed Organ Pipes, Beats, Doppler Effect & Lensmaker’s Formula',
                  '[Level G] Young’s Double Slit Interference (β = λD/d), Thin Films & Newton’s Rings, Single-Slit & Diffraction Grating Resolving Power (R = nN), Brewster’s Law (n = tan i_p) & Malus’s Law (I = I₀ cos²θ)',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'sci-phy-thermo-statistical',
                name: 'Heat, Thermodynamics & Statistical Physics: Laws, Carnot Engine, Entropy, Maxwell Relations & Distributions (I → H → G/P)',
                nameHindi: 'ऊष्मा, ऊष्मागतिकी एवं सांख्यिकीय भौतिकी: नियम, कार्नो इंजन, एन्ट्रॉपी, मैक्सवेल संबंध एवं वितरण (I → H → G/P)',
                namePunjabi: 'ਤਾਪ, ਥਰਮੋਡਾਇਨਾਮਿਕਸ ਅਤੇ ਸਟੈਟਿਸਟੀਕਲ ਫਿਜ਼ਿਕਸ: ਨਿਯਮ, ਕਾਰਨੋ ਇੰਜਣ, ਐਂਟ੍ਰੋਪੀ ਅਤੇ ਮੈਕਸਵੈੱਲ ਸਬੰਧ (I → H → G/P)',
                subtopics: [
                  '[Official Heading: Thermodynamics and statistical physics] Temperature scales (−40° equality), Zeroth & First Law (ΔQ = ΔU + ΔW), Mayer’s relation (C_P − C_V = R), Isothermal vs Adiabatic work',
                  '[Level H] Second Law, Carnot Engine Efficiency (η = 1 − T_C/T_H) & Refrigerator COP, Kinetic Theory of Gases (v_rms = √(3RT/M) > v_avg > v_mp), Equipartition of Energy (γ = 1 + 2/f), Stefan’s & Wien’s Laws',
                  '[Level G/P] Entropy (ΔS = ∫dQ/T), Four Thermodynamic Potentials (U, H, F, G) & Four Maxwell Relations, Clausius-Clapeyron Equation, and Maxwell-Boltzmann vs Bose-Einstein (Bosons) vs Fermi-Dirac (Fermions) Statistics',
                ],
                examQuestions: '8-10',
                difficulty: 'hard',
              },
              {
                id: 'sci-phy-electromagnetism-circuits',
                name: 'Electricity, Magnetism, AC Circuits & Electromagnetic Theory (Maxwell’s Equations) (I → H → G/P)',
                nameHindi: 'विद्युत, चुंबकत्व, प्रत्यावर्ती धारा (AC) परिपथ एवं विद्युतचुंबकीय सिद्धांत (मैक्सवेल समीकरण) (I → H → G/P)',
                namePunjabi: 'ਬਿਜਲੀ, ਚੁੰਬਕਤਾ, AC ਸਰਕਟ ਅਤੇ ਇਲੈਕਟ੍ਰੋਮੈਗਨੈਟਿਕ ਥਿਊਰੀ (ਮੈਕਸਵੈੱਲ ਸਮੀਕਰਨਾਂ) (I → H → G/P)',
                subtopics: [
                  '[Official Heading: Electromagnetic theory] Coulomb’s & Gauss’s Law, Parallel-Plate Capacitor with Dielectric, Ohm’s Law, Kirchhoff’s Laws (KCL/KVL), Wheatstone Bridge, Potentiometer & Galvanometer Shunt/Multiplier',
                  '[Level H] Biot-Savart & Ampere’s Circuital Law (Solenoid & Toroid), Lorentz Force & Cyclotron, Dia-/Para-/Ferromagnetism, Faraday’s & Lenz’s Law, Self/Mutual Inductance, Series LCR Resonance (f₀ = 1/(2π√(LC))), Q-Factor & Transformer',
                  '[Level G/P] Maxwell’s Displacement Current, All Four Maxwell’s Equations in Differential & Integral Forms, EM Wave Speed c = 1/√(μ₀ε₀) & Poynting Vector S = (E × B)/μ₀',
                ],
                examQuestions: '8-10',
                difficulty: 'hard',
              },
              {
                id: 'sci-phy-modern-quantum-nuclear',
                name: 'Modern Physics, Quantum Mechanics, Atomic/Molecular Spectra & Nuclear/Particle Physics (H → G/P)',
                nameHindi: 'आधुनिक भौतिकी, क्वांटम यांत्रिकी, परमाणु/आणविक स्पेक्ट्रा एवं नाभिकीय/कण भौतिकी (H → G/P)',
                namePunjabi: 'ਆਧੁਨਿਕ ਭੌਤਿਕੀ, ਕੁਆਂਟਮ ਮਕੈਨਿਕਸ, ਪਰਮਾਣੂ ਸਪੈਕਟ੍ਰਾ ਅਤੇ ਨਿਊਕਲੀਅਰ/ਪਾਰਟੀਕਲ ਫਿਜ਼ਿਕਸ (H → G/P)',
                subtopics: [
                  '[Official Headings: Quantum mechanics; Atomic and molecular physics; Nuclear and particle physics] Einstein Photoelectric Equation (K_max = hν − φ₀), Compton Shift, de Broglie Wavelength (12.27/√V Å) & Heisenberg Uncertainty',
                  '[Level G/P] Schrödinger Wave Equation, Born Probability |ψ|², Particle in a 1D Infinite Box (E_n = n²h²/(8mL²)), 1D Harmonic Oscillator Zero-Point Energy (½ℏω), Bohr Hydrogen Series, L-S vs j-j Coupling, Zeeman & Raman Effects',
                  '[Level H → G/P] Nuclear Radius (R = R₀A¹/³), Constant Nuclear Density, Binding Energy Curve (⁵⁶Fe peak), Radioactive Decay (T₁/₂ = 0.693/λ), Liquid Drop vs Shell Model Magic Numbers (2, 8, 20, 28, 50, 82, 126) & Quark Model (uud, udd)',
                ],
                examQuestions: '8-10',
                difficulty: 'hard',
              },
              {
                id: 'sci-phy-electronics-solid-math',
                name: 'Condensed Matter (Solid State), Semiconductor Electronics & Mathematical Methods of Physics (H → G/P)',
                nameHindi: 'संघनित द्रव्य (ठोस अवस्था), अर्धचालक इलेक्ट्रॉनिकी एवं गणितीय भौतिकी विधियाँ (H → G/P)',
                namePunjabi: 'ਕੰਡੈਂਸਡ ਮੈਟਰ (ਠੋਸ ਅਵਸਥਾ), ਸੈਮੀਕੰਡਕਟਰ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਅਤੇ ਗਣਿਤਿਕ ਭੌਤਿਕੀ (H → G/P)',
                subtopics: [
                  '[Official Headings: Condensed matter physics; Electronics and experimental methods; Mathematical methods] SC/BCC/FCC Crystal Packing (52.4%, 68%, 74%), Miller Indices, Bragg’s Law (2d sinθ = nλ), Hall Effect & Superconductivity (Meissner Effect χ = −1)',
                  '[Level H → G] Intrinsic/Extrinsic Semiconductors, PN Diode Rectifiers, Zener Voltage Regulator, BJT Current Gain (β = α/(1−α)), Op-Amp, Universal Logic Gates (NAND/NOR) & De Morgan’s Theorems',
                  '[Level G] Vector Calculus (Gradient ∇φ, Divergence ∇·A, Curl ∇×A, Gauss & Stokes Theorems), Hermitian/Unitary Matrices, Eigenvalues (Trace & Determinant), Differential Equations & Fourier/Dirac Delta Basics',
                ],
                examQuestions: '8-10',
                difficulty: 'hard',
              },
            ],
          },
          {
            id: 'chemistry',
            name: '2. Chemistry — Physical (13), Inorganic (12) & Organic (13) (All 38 Official ERB Headings)',
            nameHindi: '2. रसायन विज्ञान — भौतिक (13), अकार्बनिक (12) एवं कार्बनिक (13) (सभी 38 आधिकारिक ERB विषय)',
            namePunjabi: '2. ਰਸਾਇਣ ਵਿਗਿਆਨ — ਫਿਜ਼ੀਕਲ (13), ਇਨਔਰਗੈਨਿਕ (12) ਅਤੇ ਔਰਗੈਨਿਕ (13) (ਸਾਰੇ 38 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            topics: [
              {
                id: 'sci-chem-physical-states-thermo-eq',
                name: 'Physical Chemistry I: Mole Concept, Atomic Structure, States of Matter, Bonding, Thermodynamics & Equilibrium (B → I → H → G)',
                nameHindi: 'भौतिक रसायन I: मोल संकल्पना, परमाणु संरचना, द्रव्य की अवस्थाएँ, आबंधन, ऊष्मागतिकी एवं साम्यावस्था (B → I → H → G)',
                namePunjabi: 'ਫਿਜ਼ੀਕਲ ਕੈਮਿਸਟਰੀ I: ਮੋਲ ਸੰਕਲਪ, ਪਰਮਾਣੂ ਬਣਤਰ, ਪਦਾਰਥ ਦੀਆਂ ਅਵਸਥਾਵਾਂ, ਬਾਂਡਿੰਗ, ਥਰਮੋਡਾਇਨਾਮਿਕਸ ਅਤੇ ਸੰਤੁਲਨ (B → I → H → G)',
                subtopics: [
                  '[Official Physical Headings 1–4] Mole Concept, Molarity vs Molality, Quantum Numbers (n, l, m_l, m_s), Radial (n−l−1) & Angular (l) Nodes, VSEPR Shapes (SF₄, ClF₃, XeF₄) & MOT Bond Order (O₂⁺ > O₂ > O₂⁻ > O₂²⁻)',
                  '[Official Physical Headings 3 & 6] Ideal vs Real Gas van der Waals Equation, Critical Constants (Z_c = 3/8 = 0.375), Hess’s Law, Enthalpy (ΔH = ΔU + Δn_g RT) & Gibbs Free Energy Spontaneity (ΔG = ΔH − TΔS)',
                  '[Official Physical Heading 7] Chemical Equilibrium (K_p = K_c(RT)^Δn), Le Chatelier’s Principle, Ostwald Dilution Law, pH, Henderson-Hasselbalch Buffer Equation & Solubility Product (K_sp = S², 4S³, 27S⁴, 108S⁵)',
                ],
                examQuestions: '10-12',
                difficulty: 'medium',
              },
              {
                id: 'sci-chem-electro-kinetics-surface-solids',
                name: 'Physical Chemistry II: Electrochemistry, Chemical Kinetics, Solutions, Solid State, Surface Chemistry, Catalysis & Spectroscopy (H → G/P)',
                nameHindi: 'भौतिक रसायन II: वैद्युत रसायन, रासायनिक बलगतिकी, विलयन, ठोस अवस्था, पृष्ठ रसायन, उत्प्रेरण एवं स्पेक्ट्रोस्कोपी (H → G/P)',
                namePunjabi: 'ਫਿਜ਼ੀਕਲ ਕੈਮਿਸਟਰੀ II: ਇਲੈਕਟ੍ਰੋਕੈਮਿਸਟਰੀ, ਰਸਾਇਣਕ ਕਾਇਨੈਟਿਕਸ, ਘੋਲ, ਠੋਸ ਅਵਸਥਾ, ਸਰਫੇਸ ਕੈਮਿਸਟਰੀ ਅਤੇ ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ (H → G/P)',
                subtopics: [
                  '[Official Physical Headings 8, 9 & 13] Nernst Equation (E = E° − (0.0591/n)log Q), Faraday’s Laws, Kohlrausch’s Law, Zero & First Order Kinetics (t₁/₂ = 0.693/k, t_99.9% = 10 t₁/₂), Arrhenius Equation, Raoult’s Law & 4 Colligative Properties with van ’t Hoff factor i',
                  '[Official Physical Headings 10, 11 & 12] Solid State Crystal Density, Schottky vs Frenkel Defects (AgBr shows both), Freundlich & Langmuir Adsorption Isotherms, Hardy-Schulze Coagulation Rule, Gold Number & Michaelis-Menten Enzyme Catalysis',
                  '[Official Physical Heading 5] Beer-Lambert Law (A = εcl) & Rotational/Vibrational/Raman Spectroscopy Selection Rules',
                ],
                examQuestions: '10-12',
                difficulty: 'hard',
              },
              {
                id: 'chemistry-concepts',
                name: 'Inorganic Chemistry I: Periodic Table Trends, Metallurgy, Hydrogen, s-Block, p-Block & Environmental Chemistry (B → I → H → G)',
                nameHindi: 'अकार्बनिक रसायन I: आवर्त सारणी प्रवृत्तियाँ, धातुकर्म, हाइड्रोजन, s-ब्लॉक, p-ब्लॉक एवं पर्यावरणीय रसायन (B → I → H → G)',
                namePunjabi: 'ਇਨਔਰਗੈਨਿਕ ਕੈਮਿਸਟਰੀ I: ਆਵਰਤੀ ਸਾਰਣੀ, ਧਾਤੂ ਨਿਸ਼ਕਰਸ਼ਣ, ਹਾਈਡ੍ਰੋਜਨ, s-ਬਲਾਕ, p-ਬਲਾਕ ਅਤੇ ਵਾਤਾਵਰਣ ਰਸਾਇਣ (B → I → H → G)',
                subtopics: [
                  '[Official Inorganic Headings 1–5 & 8] Modern Periodic Table (Henry Moseley 1913, Z-basis), Periodic Trends & Anomalies (Cl > F Electron Affinity; F = 4.0 Electronegativity; N > O Ionization Energy)',
                  'Metallurgy (Froth Flotation, Ellingham Diagram, Mond Process for Ni, Van Arkel for Ti/Zr, Hall-Héroult for Al), Hydrogen Peroxide & Hard Water Softening',
                  's-Block Diagonal Relationships (Li–Mg, Be–Al), p-Block Diborane (B₂H₆ 3c-2e banana bonds), Borazine, Silicones, Oxyacids of P/S/Cl, Interhalogens, Xenon Fluorides & Environmental Chemistry (BOD, COD, Smog)',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'sci-chem-inorganic-coord-bio-nuclear',
                name: 'Inorganic Chemistry II: d- & f-Block, Coordination & Organometallic Chemistry, Bioinorganic, Nuclear & Analytical Chemistry (H → G/P)',
                nameHindi: 'अकार्बनिक रसायन II: d- व f-ब्लॉक, उपसहसंयोजन एवं कार्बधात्विक यौगिक, जैव-अकार्बनिक, नाभिकीय एवं विश्लेषणात्मक रसायन (H → G/P)',
                namePunjabi: 'ਇਨਔਰਗੈਨਿਕ ਕੈਮਿਸਟਰੀ II: d- ਤੇ f-ਬਲਾਕ, ਕੋਆਰਡੀਨੇਸ਼ਨ ਅਤੇ ਔਰਗੈਨੋਮੈਟਾਲਿਕ ਯੌਗਿਕ, ਬਾਇਓਇਨਔਰਗੈਨਿਕ ਅਤੇ ਐਨਾਲਿਟੀਕਲ ਕੈਮਿਸਟਰੀ (H → G/P)',
                subtopics: [
                  '[Official Inorganic Headings 6 & 7] Lanthanoid Contraction (Zr/Hf radii, basicity of hydroxides), KMnO₄ & K₂Cr₂O₇ (Charge Transfer colour in d⁰), Werner’s Theory, VBT & CFT ([Ni(CN)₄]²⁻ dsp² vs [NiCl₄]²⁻ sp³), CFSE, Spin-Only μ = √[n(n+2)] BM, Jahn-Teller & Trans Effect',
                  '[Official Inorganic Heading 7 — Organometallics] 18-Electron Rule, Ferrocene & Zeise’s Salt, Metal Carbonyls π-Backbonding Order ([V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺), Wilkinson’s Catalyst & Ziegler-Natta Catalyst',
                  '[Official Inorganic Headings 9, 10, 11 & 12] Bioinorganic (Hemoglobin vs Myoglobin, Vitamin B₁₂ Cobalt, Chlorophyll Mg, Carboxypeptidase Zn, Cisplatin Anticancer Drug), Nuclear Chemistry & Analytical Group I–VI Cation Reagents',
                ],
                examQuestions: '10-12',
                difficulty: 'hard',
              },
              {
                id: 'sci-chem-organic-goc-hydrocarbons-halides',
                name: 'Organic Chemistry I: Purification, GOC, Stereochemistry, Hydrocarbons, Haloalkanes, Alcohols, Phenols & Ethers (I → H → G)',
                nameHindi: 'कार्बनिक रसायन I: शोधन, सामान्य कार्बनिक रसायन (GOC), त्रिविम रसायन, हाइड्रोकार्बन, हैलोएल्केन, अल्कोहल, फीनॉल एवं ईथर (I → H → G)',
                namePunjabi: 'ਔਰਗੈਨਿਕ ਕੈਮਿਸਟਰੀ I: ਸ਼ੁੱਧੀਕਰਨ, GOC, ਸਟੀਰੀਓਕੈਮਿਸਟਰੀ, ਹਾਈਡ੍ਰੋਕਾਰਬਨ, ਹੈਲੋਐਲਕੇਨ, ਅਲਕੋਹਲ, ਫੀਨੋਲ ਅਤੇ ਈਥਰ (I → H → G)',
                subtopics: [
                  '[Official Organic Headings 1, 2 & 13] Kjeldahl (fails for nitro/azo/pyridine), Dumas & Carius Estimation; Inductive, Mesomeric & Hyperconjugation Effects; Reaction Intermediates; Hückel’s (4n+2)π Aromaticity & CIP R/S, E/Z Stereochemistry',
                  '[Official Organic Headings 3 & 4] Markovnikov vs Kharasch Peroxide Effect (HBr only), Hydroboration-Oxidation vs Oxymercuration, Birch (trans) vs Lindlar (cis) Alkyne Reduction, Benzene EAS & S_N1 vs S_N2 / E1 vs E2 Mechanisms',
                  '[Official Organic Heading 5 — Part 1] Lucas Test, Victor Meyer Test, Reimer-Tiemann Reaction (:CCl₂ electrophile → Salicylaldehyde), Kolbe’s Reaction (→ Salicylic Acid), Williamson Ether Synthesis & Pinacol-Pinacolone Rearrangement',
                ],
                examQuestions: '10-12',
                difficulty: 'medium',
              },
              {
                id: 'sci-chem-organic-carbonyls-reagents-spectro',
                name: 'Organic Chemistry II: Carbonyls, Amines, Named Reactions, Selective Reagents, Biomolecules, Polymers & IR/UV/NMR Spectroscopy (H → G/P)',
                nameHindi: 'कार्बनिक रसायन II: कार्बोनिल, एमीन, नेम्ड रिएक्शन, चयनात्मक अभिकर्मक, जैव-अणु, बहुलक एवं IR/UV/NMR स्पेक्ट्रोस्कोपी (H → G/P)',
                namePunjabi: 'ਔਰਗੈਨਿਕ ਕੈਮਿਸਟਰੀ II: ਕਾਰਬੋਨਿਲ, ਅਮੀਨ, ਨੇਮਡ ਰਿਐਕਸ਼ਨਜ਼, ਚੋਣਵੇਂ ਰੀਏਜੈਂਟ, ਬਾਇਓਮੌਲੀਕਿਊਲਜ਼, ਪੌਲੀਮਰ ਅਤੇ IR/UV/NMR ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ (H → G/P)',
                subtopics: [
                  '[Official Organic Headings 5 & 6] Aldol vs Cannizzaro, Clemmensen vs Wolff-Kishner, Wittig, Perkin & Reformatsky Reactions, Tollens/Fehling/Iodoform Tests, Aqueous Amine Basicity (2° > 3° > 1° for Ethyl; 2° > 1° > 3° for Methyl), Gabriel Phthalimide, Hoffmann Bromamide, Carbylamine & Hinsberg Tests',
                  '[Official Organic Headings 7, 8, 9, 10 & 11] Chemoselectivity (NaBH₄ vs LiAlH₄ vs DIBAL-H vs PCC), Protecting Groups (Cyclic Acetals, Boc, TMS), Polymers (Nylon-6,6, Dacron, Bakelite, PHBV), Carbohydrates, Amino Acids, Nucleic Acids & Everyday Drugs',
                  '[Official Organic Heading 12 — Spectroscopy] IR Carbonyl Stretching Order (Acid Chloride 1800 > Ester 1735 > Aldehyde 1725 > Ketone 1715 > Amide 1660 cm⁻¹), Woodward-Fieser UV Rules, ¹H NMR Chemical Shifts (δ) & (n+1) Spin-Spin Splitting, Mass Spec M+2 Peaks',
                ],
                examQuestions: '10-12',
                difficulty: 'hard',
              },
            ],
          },
          {
            id: 'biology',
            name: '3. Biology — Botany (8 Headings) & Zoology (8 Headings) (All 16 Official ERB Headings)',
            nameHindi: '3. जीव विज्ञान — वनस्पति विज्ञान (8 विषय) एवं जंतु विज्ञान (8 विषय) (सभी 16 आधिकारिक ERB विषय)',
            namePunjabi: '3. ਜੀਵ ਵਿਗਿਆਨ — ਬੌਟਨੀ (8 ਵਿਸ਼ੇ) ਅਤੇ ਜ਼ੂਆਲੋਜੀ (8 ਵਿਸ਼ੇ) (ਸਾਰੇ 16 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            topics: [
              {
                id: 'sci-bio-diversity-plant-structural',
                name: 'Botany I: Diversity of Living World, Plant Kingdom, Morphology, Plant Anatomy & Reproduction in Flowering Plants (B → I → H → G)',
                nameHindi: 'वनस्पति विज्ञान I: जीव जगत की विविधता, पादप जगत, आकारिकी, पादप शरीर रचना एवं पुष्पी पादपों में जनन (B → I → H → G)',
                namePunjabi: 'ਬੌਟਨੀ I: ਜੀਵ ਜਗਤ ਦੀ ਵਿਭਿੰਨਤਾ, ਪੌਦਾ ਜਗਤ, ਮੌਰਫੋਲੋਜੀ, ਪਲਾਂਟ ਅਨਾਟਮੀ ਅਤੇ ਫੁੱਲਦਾਰ ਪੌਦਿਆਂ ਵਿੱਚ ਪ੍ਰਜਨਨ (B → I → H → G)',
                subtopics: [
                  '[Official Botany Headings 1 & 2] Whittaker 5-Kingdoms, Viruses, Viroids (T.O. Diener), Lichens, Algae (Chloro-, Phaeo-, Rhodophyceae), Bryophytes, Heterosporous Pteridophytes (Selaginella, Salvinia), Gymnosperms (Haploid n Endosperm) vs Angiosperms',
                  'Morphology (Inflorescence, Placentation, Fabaceae/Solanaceae/Liliaceae) & Plant Anatomy (Meristems, Xylem/Phloem, Dicot vs Monocot Root/Stem/Leaf, Kranz Anatomy & Secondary Growth)',
                  '[Official Botany Heading 4] Polygonum 7-Celled 8-Nucleate Embryo Sac, Double Fertilization (Nawaschin — Syngamy 2n + Triple Fusion 3n Endosperm), Apomixis & Polyembryony',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'sci-bio-plant-physiology-ecology',
                name: 'Botany II: Plant Physiology (Water Relations, Photosynthesis, Respiration, Hormones) & Ecology, Biodiversity and Environment (B → I → H → G)',
                nameHindi: 'वनस्पति विज्ञान II: पादप कार्यिकी (जल संबंध, प्रकाश-संश्लेषण, श्वसन, हार्मोन) एवं पारिस्थितिकी, जैव-विविधता व पर्यावरण (B → I → H → G)',
                namePunjabi: 'ਬੌਟਨੀ II: ਪਲਾਂਟ ਫਿਜ਼ੀਓਲੋਜੀ (ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ, ਸਾਹ ਕਿਰਿਆ, ਹਾਰਮੋਨ) ਅਤੇ ਵਾਤਾਵਰਣ ਤੇ ਜੈਵ-ਵਿਭਿੰਨਤਾ (B → I → H → G)',
                subtopics: [
                  '[Official Botany Heading 3] Water Potential (Ψ_w = Ψ_s + Ψ_p), Transpiration Pull, Nitrogenase (16 ATP per N₂ & Leghemoglobin), Non-Cyclic vs Cyclic Photophosphorylation, C₃ Calvin (18 ATP) vs C₄ Hatch-Slack (30 ATP) vs CAM & Photorespiration (Chloroplast → Peroxisome → Mitochondria)',
                  'Glycolysis, Krebs Cycle & ETS (36/38 ATP Balance Sheet), Respiratory Quotient (RQ: Glucose 1.0, Fats 0.7, Oxalic Acid 4.0) & 5 Phytohormones (Auxin, Gibberellin, Cytokinin, Ethylene, ABA), Phytochrome & Photoperiodism',
                  '[Official Botany & Zoology Heading 8] Population Interactions, Lindeman’s 10% Energy Law, Ecological Pyramids (Inverted Biomass in Sea), Biodiversity Conservation & Punjab’s 6 Ramsar Wetlands (Harike, Kanjli, Ropar, Keshopur-Miani, Nangal, Beas)',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
              {
                id: 'sci-bio-zoology-diversity-human-physiology',
                name: 'Zoology I: Animal Kingdom Diversity, Animal Tissues & Complete Human Physiology (B → I → H → G)',
                nameHindi: 'जंतु विज्ञान I: जंतु जगत वर्गीकरण, जंतु ऊतक एवं संपूर्ण मानव शरीर क्रिया विज्ञान (B → I → H → G)',
                namePunjabi: 'ਜ਼ੂਆਲੋਜੀ I: ਜੰਤੂ ਜਗਤ ਵਰਗੀਕਰਨ, ਜੰਤੂ ਟਿਸ਼ੂ ਅਤੇ ਸੰਪੂਰਨ ਮਨੁੱਖੀ ਸਰੀਰ ਕਿਰਿਆ ਵਿਗਿਆਨ (B → I → H → G)',
                subtopics: [
                  '[Official Zoology Headings 1 & 2] Non-Chordate to Chordate Diagnostic Features (Porifera Choanocytes, Cnidoblasts, Platyhelminthes Flame Cells, Annelida Nephridia, Arthropoda Malpighian Tubules, Mollusca Radula, Echinodermata Water Vascular System, Chondrichthyes vs Osteichthyes) & Animal Tissues',
                  '[Official Zoology Heading 3] Human Digestion (Oxyntic HCl/Intrinsic Factor, Enterokinase), Breathing & Bohr Right-Shift of O₂–Hb Curve, Cardiac Cycle (0.8s, CO = 5 L/min) & ECG (P-QRS-T), Nephron Counter-Current & JGA RAAS vs ANF',
                  '[Official Zoology Headings 3 & 4] Sliding Filament Muscle Contraction (Ca²⁺ binds Troponin-C; A-band constant, I-band & H-zone shorten), Action Potential (Na⁺/K⁺ Pump), Endocrine Hormones & Human Reproduction (Gametogenesis, Day-14 LH Surge Ovulation & Corpus Luteum Progesterone)',
                ],
                examQuestions: '10-12',
                difficulty: 'medium',
              },
              {
                id: 'biology-concepts',
                name: 'Cell Biology, Genetics, Molecular Biology, Evolution, Human Health & Biotechnology (B → I → H → G)',
                nameHindi: 'कोशिका विज्ञान, आनुवंशिकी, आणविक जीव विज्ञान, विकास, मानव स्वास्थ्य एवं जैव-प्रौद्योगिकी (B → I → H → G)',
                namePunjabi: 'ਸੈੱਲ ਬਾਇਓਲੋਜੀ, ਜੈਨੇਟਿਕਸ, ਮੌਲੀਕਿਊਲਰ ਬਾਇਓਲੋਜੀ, ਵਿਕਾਸ, ਮਨੁੱਖੀ ਸਿਹਤ ਅਤੇ ਬਾਇਓਟੈਕਨਾਲੋਜੀ (B → I → H → G)',
                subtopics: [
                  '[Official Botany & Zoology Heading 5] Cell Theory, Organelles (Mitochondria, Chloroplast, Ribosome, Lysosome), Mitosis vs Meiosis (Pachytene Crossing Over), Mendelian Ratios (3:1, 9:3:3:1), Epistasis, Linkage, Watson-Crick DNA, Central Dogma, Lac Operon & Hardy-Weinberg Equilibrium (p² + 2pq + q² = 1)',
                  '[Official Botany & Zoology Heading 6] Human Health & Disease (Malaria, Typhoid, AIDS, Cancer), Innate vs Adaptive Immunity, Antibodies (IgG crosses placenta, IgA colostrum, IgE allergy, IgM pentamer) & Microbes in Human Welfare',
                  '[Official Botany & Zoology Heading 7] Recombinant DNA Technology (Restriction Endonucleases, pBR322 Vector, PCR Taq Polymerase), Bt Cotton (cryIAc/cryIIAb), RNA Interference & Gene Therapy (ADA Deficiency)',
                ],
                examQuestions: '10-12',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      PUNJABI_PAPER_A_SUBJECT,
    ],
  },

  // 1.3 Punjab Master Cadre - Mathematics
  {
    id: 'punjab-master-cadre-math',
    state: 'punjab',
    name: 'Punjab Master Cadre (Mathematics)',
    nameHindi: 'पंजाब मास्टर कैडर (गणित)',
    namePunjabi: 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ (ਗਣਿਤ)',
    body: 'Education Recruitment Board (ERB), Punjab',
    level: 'TGT - Classes 6 to 10',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://educationrecruitmentboard.com',
    emoji: '📐',
    color: '#2563EB',
    sections: [
      { name: 'Paper A - Compulsory Punjabi Qualifying (50% min)', nameHindi: 'अनिवार्य पंजाबी पात्रता (Paper A)', marks: 50, questions: 50 },
      { name: 'Paper B - Mathematics Subject Domain (Merit)', nameHindi: 'गणित विषय डोमेन (Paper B)', marks: 150, questions: 150 },
    ],
    subjects: [
      // Subject 3: Mathematics
      {
        id: 'mathematics',
        name: 'Mathematics',
        nameHindi: 'गणित',
        namePunjabi: 'ਗਣਿਤ',
        emoji: '📐',
        chapters: [
          {
            id: 'math-core',
            name: 'Higher Mathematics Core',
            nameHindi: 'उच्च गणित',
            namePunjabi: 'ਉੱਚ ਗਣਿਤ',
            topics: [
              {
                id: 'mathematics-core',
                name: 'Algebra, Calculus, Matrices & Probability',
                nameHindi: 'बीजगणित, कलन, आव्यूह एवं प्रायिकता',
                namePunjabi: 'ਅਲਜਬਰਾ ਤੇ ਕੈਲਕੂਲਸ',
                subtopics: [
                  'Quadratic Equations: Discriminant D = b² - 4ac (D=0 equal roots, D>0 real distinct, D<0 complex)',
                  'Progressions: AP (Tn = a+(n-1)d), GP (Tn = ar^(n-1), S_inf = a/(1-r))',
                  "Differential Calculus: Limits, L Hopital Rule (0/0, inf/inf), Maxima and Minima (f''(x) < 0 maximum)",
                  'Integral Calculus: King Property integral 0 to a f(x)dx = integral 0 to a f(a-x)dx',
                  'Matrices & Determinants: Inverse A^-1 = adj(A)/|A| (requires |A| != 0), Transpose (AB)^T = B^T A^T',
                  'Empirical Statistics: Mode = 3 Median - 2 Mean; Probability addition theorem',
                ],
                examQuestions: '50-60',
                difficulty: 'hard',
              },
            ],
          },
        ],
      },
      PUNJABI_PAPER_A_SUBJECT,
    ],
  },

  // 1.4 Punjab Master Cadre - Punjabi
  {
    id: 'punjab-master-cadre-punjabi',
    state: 'punjab',
    name: 'Punjab Master Cadre (Punjabi)',
    nameHindi: 'पंजाब मास्टर कैडर (पंजाबी)',
    namePunjabi: 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ (ਪੰਜਾਬੀ)',
    body: 'Education Recruitment Board (ERB), Punjab',
    level: 'TGT - Classes 6 to 10',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://educationrecruitmentboard.com',
    emoji: '📖',
    color: '#EA580C',
    sections: [
      { name: 'Paper A - Compulsory Punjabi Qualifying (50% min)', nameHindi: 'अनिवार्य पंजाबी पात्रता (Paper A)', marks: 50, questions: 50 },
      { name: 'Paper B - Punjabi Language & Literature (Merit)', nameHindi: 'पंजाबी भाषा व साहित्य (Paper B)', marks: 150, questions: 150 },
    ],
    subjects: [
      // Subject 4: Punjabi Language & Literature
      {
        id: 'punjabi',
        name: 'Punjabi (ਪੰਜਾਬੀ)',
        nameHindi: 'पंजाबी भाषा एवं साहित्य',
        namePunjabi: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਤੇ ਸਾਹਿਤ',
        emoji: '📖',
        chapters: [
          {
            id: 'punjabi-domain',
            name: 'Punjabi Paper A & Literature',
            nameHindi: 'पंजाबी पेपर A व साहित्य',
            namePunjabi: 'ਪੰਜਾਬੀ ਪੇਪਰ ਏ ਤੇ ਸਾਹਿਤ',
            topics: [
              {
                id: 'punjabi-paper-a',
                name: 'Compulsory Punjabi Paper A: Grammar & Gurmukhi',
                nameHindi: 'अनिवार्य पंजाबी पेपर A: गुरमुखी व व्याकरण',
                namePunjabi: 'ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਪੇਪਰ ਏ',
                subtopics: [
                  'Gurmukhi Alphabet: 41 total letters (35 original Painti + 6 Persian dotted: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼)',
                  '3 Vowel Bearers: ੳ, ਅ, ੲ; 10 Lagaan-Matraan; 3 Lagaakhar (Bindi, Tippi, Adhak)',
                  '3 Doot Akhar (foot letters): ਹ, ਰ, ਵ (e.g. ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)',
                  'Grammar 4 parts: Dhuni, Shabad, Vaak, Arth; 8 parts of speech (Naam 5 types, Padnaav 6 types)',
                  'Muhavare and Akhaan (Proverbs & Idioms), Shuddh-Ashuddh, Vishram Chinh',
                ],
                examQuestions: '50',
                difficulty: 'medium',
              },
              {
                id: 'punjabi-sahitya',
                name: 'History of Punjabi Literature & Poets',
                nameHindi: 'पंजाबी साहित्य का इतिहास एवं कवि',
                namePunjabi: 'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਇਤਿਹਾਸ',
                subtopics: [
                  'Gurmat Kav: Guru Nanak Dev, Guru Angad Dev, Guru Arjan Dev (Adi Granth 1604), Guru Gobind Singh',
                  'Sufi Poets: Baba Farid (112 saloks in Guru Granth Sahib), Shah Hussain, Bulleh Shah kaafiyan',
                  'Qissa Kav: Damodar (first Heer), Waris Shah (Heer in Baint meter), Pilu (Mirza Sahiban)',
                  'Modern Poets: Bhai Vir Singh (Father of modern Punjabi literature), Amrita Pritam (Jnanpith 1981)',
                  'Shiv Kumar Batalvi: Birha da Sultan, Sahitya Akademi award for poetic drama Loona',
                ],
                examQuestions: '50-60',
                difficulty: 'hard',
              },
            ],
          },
        ],
      },
    ],
  },

  // 1.5 Punjab Master Cadre - Hindi
  {
    id: 'punjab-master-cadre-hindi',
    state: 'punjab',
    name: 'Punjab Master Cadre (Hindi)',
    nameHindi: 'पंजाब मास्टर कैडर (हिंदी)',
    namePunjabi: 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ (ਹਿੰਦੀ)',
    body: 'Education Recruitment Board (ERB), Punjab',
    level: 'TGT - Classes 6 to 10',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://educationrecruitmentboard.com',
    emoji: '📚',
    color: '#7C3AED',
    sections: [
      { name: 'Paper A - Compulsory Punjabi Qualifying (50% min)', nameHindi: 'अनिवार्य पंजाबी पात्रता (Paper A)', marks: 50, questions: 50 },
      { name: 'Paper B - Hindi Language & Literature (Merit)', nameHindi: 'हिंदी भाषा व साहित्य (Paper B)', marks: 150, questions: 150 },
    ],
    subjects: [
      // Subject 5: Hindi Language & Literature
      {
        id: 'hindi',
        name: 'Hindi (हिंदी)',
        nameHindi: 'हिंदी भाषा एवं साहित्य',
        namePunjabi: 'ਹਿੰਦੀ',
        emoji: '📚',
        chapters: [
          {
            id: 'hindi-domain',
            name: 'Hindi Sahitya & Vyakaran',
            nameHindi: 'हिंदी साहित्य एवं व्याकरण',
            namePunjabi: 'ਹਿੰਦੀ ਸਾਹਿਤ ਤੇ ਵਿਆਕਰਨ',
            topics: [
              {
                id: 'hindi-sahitya',
                name: 'History of Hindi Literature: Bhaktikal to Modern',
                nameHindi: 'हिंदी साहित्य का इतिहास: भक्तिकाल से आधुनिक काल',
                namePunjabi: 'ਹਿੰਦੀ ਸਾਹਿਤ ਦਾ ਇਤਿਹਾਸ',
                subtopics: [
                  'Periodization by Acharya Ramchandra Shukla (Aadikal, Bhaktikal, Ritikal, Aadhunik Kal)',
                  'Aadikal: Sarhapa (first poet), Chandbardai (Prithviraj Raso), Amir Khusro, Vidyapati',
                  'Bhaktikal (Golden Age): Kabir (Bijak), Jayasi (Padmavat 1540), Tulsidas (Ramcharitmanas 7 Kands), Surdas',
                  'Ritikal: Keshavdas (Kathin Kavya ke Pret), Bihari Lal (Bihari Satsai 719 dohas), Bhushan',
                  'Chhayavad: Jaishankar Prasad (Kamayani), Nirala, Pant (Chidambara Jnanpith 1968), Mahadevi Verma (Yama Jnanpith 1982)',
                ],
                examQuestions: '50-60',
                difficulty: 'hard',
              },
              {
                id: 'hindi-vyakaran',
                name: 'Hindi Grammar & Poetics: Sandhi, Samas & Ras',
                nameHindi: 'हिंदी व्याकरण व काव्यशास्त्र: संधि, समास, रस व अलंकार',
                namePunjabi: 'ਹਿੰਦੀ ਵਿਆਕਰਨ ਤੇ ਕਾਵਿ-ਸ਼ਾਸਤਰ',
                subtopics: [
                  'Vowel Sandhi: Deergha, Guna, Vriddhi, Yan, Ayadi rules with examples',
                  '6 Samas Classes: Avyayibhav, Tatpurush, Karmadharaya, Dvigu, Dvandva, Bahuvrihi',
                  'Rasa formulation: Bharata Muni Natyashastra, Shringar Rasa is Rasaraj (King of Rasas)',
                  'Figures of Speech (Alankar): Anupras, Yamak (Kanak Kanak), Shlesh, Upama, Rupak',
                ],
                examQuestions: '40-50',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      PUNJABI_PAPER_A_SUBJECT,
    ],
  },

  // 1.6 Punjab Master Cadre - English
  {
    id: 'punjab-master-cadre-english',
    state: 'punjab',
    name: 'Punjab Master Cadre (English)',
    nameHindi: 'पंजाब मास्टर कैडर (अंग्रेजी)',
    namePunjabi: 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ (ਅੰਗਰੇਜ਼ੀ)',
    body: 'Education Recruitment Board (ERB), Punjab',
    level: 'TGT - Classes 6 to 10',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://educationrecruitmentboard.com',
    emoji: '🔤',
    color: '#475569',
    sections: [
      { name: 'Paper A - Compulsory Punjabi Qualifying (50% min)', nameHindi: 'अनिवार्य पंजाबी पात्रता (Paper A)', marks: 50, questions: 50 },
      { name: 'Paper B - English Language & Literature (Merit)', nameHindi: 'अंग्रेजी भाषा व साहित्य (Paper B)', marks: 150, questions: 150 },
    ],
    subjects: [
      // Subject 6: English Language & Literature
      {
        id: 'english',
        name: 'English Language & Literature',
        nameHindi: 'अंग्रेजी भाषा एवं साहित्य',
        namePunjabi: 'ਅੰਗਰੇਜ਼ੀ',
        emoji: '🔤',
        chapters: [
          {
            id: 'english-domain',
            name: 'English Grammar & Literature',
            nameHindi: 'अंग्रेजी व्याकरण व साहित्य',
            namePunjabi: 'ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ ਤੇ ਸਾਹਿਤ',
            topics: [
              {
                id: 'english-grammar-lit',
                name: 'Grammar Rules, Voice, Narration & Shakespeare',
                nameHindi: 'व्याकरण नियम, वॉइस, नरेशन व शेक्सपियर',
                namePunjabi: 'ਅੰਗਰੇਜ਼ੀ ਨਿਯਮ ਤੇ ਸ਼ੇਕਸਪੀਅਰ',
                subtopics: [
                  'Subject-Verb Agreement: "along with" concords with first subject; "neither...nor" with closest; "each" takes singular',
                  'Active to Passive Voice transformation and Direct to Indirect Speech rules',
                  'William Shakespeare: 154 sonnets (ABAB CDCD EFEF GG), Four great tragedies (Hamlet, Othello, King Lear, Macbeth)',
                  'Romantic Era (1798): Wordsworth & Coleridge Lyrical Ballads, Keats, Shelley',
                  'Figures of speech: Simile, Metaphor, Personification, Oxymoron, Hyperbole',
                ],
                examQuestions: '50-60',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      PUNJABI_PAPER_A_SUBJECT,
    ],
  },

  // 1.7 Punjab Clerk (PSSSB)
  {
    id: 'punjab-clerk',
    state: 'punjab',
    name: 'Punjab Clerk (PSSSB)',
    nameHindi: 'पंजाब क्लर्क (PSSSB)',
    namePunjabi: 'ਪੰਜਾਬ ਕਲਰਕ (PSSSB)',
    body: 'Punjab Subordinate Services Selection Board (PSSSB)',
    level: 'Regular Clerk — archival outline; specialised posts require separate syllabi',
    totalMarks: 100,
    duration: '150 minutes (11/2025 mirror; primary verification pending)',
    negativeMarking: 0.25,
    officialWebsite: 'https://sssb.punjab.gov.in',
    emoji: '💼',
    color: '#0D9488',
    sections: [
      { name: 'Part A - Compulsory Punjabi Qualifying (Matric Standard)', nameHindi: 'पंजाबी योग्यता परीक्षा', marks: 50, questions: 50 },
      { name: 'Part B - General Knowledge & Current Affairs', nameHindi: 'सामान्य ज्ञान व करंट अफेयर्स', marks: 25, questions: 25 },
      { name: 'Part B - Logical Reasoning & Mental Ability', nameHindi: 'तर्कशक्ति व मानसिक क्षमता', marks: 25, questions: 25 },
      { name: 'Part B - Punjab History & Culture', nameHindi: 'पंजाब इतिहास व संस्कृति', marks: 17, questions: 17 },
      { name: 'Part B - Punjabi Language', nameHindi: 'पंजाबी भाषा', marks: 13, questions: 13 },
      { name: 'Part B - English Language', nameHindi: 'अंग्रेजी भाषा', marks: 12, questions: 12 },
      { name: 'Part B - ICT / Computer Awareness', nameHindi: 'कंप्यूटर ज्ञान', marks: 8, questions: 8 },
    ],
    syllabusStatus: 'provisional-archive',
    subjects: [
      ...CLERK_SHARED_SUBJECTS,
      {
        id: 'clerk-special',
        name: 'Clerk Examination Modules',
        nameHindi: 'क्लर्क परीक्षा मॉड्यूल',
        namePunjabi: 'ਕਲਰਕ ਪ੍ਰੀਖਿਆ ਮੌਡਿਊਲ',
        emoji: '⌨️',
        chapters: [
          {
            id: 'clerk-skills',
            name: 'Clerical & Computer Skills',
            nameHindi: 'क्लर्क कौशल व कंप्यूटर',
            namePunjabi: 'ਕਲਰਕ ਹੁਨਰ ਤੇ ਕੰਪਿਊਟਰ',
            topics: [
              {
                id: 'punjab-clerk-prep',
                name: 'PSSSB Clerk Exam Scheme & Raavi Typing Rules',
                nameHindi: 'क्लर्क परीक्षा योजना व रावी टाइपिंग नियम',
                namePunjabi: 'ਕਲਰਕ ਪ੍ਰੀਖਿਆ ਸਕੀਮ ਤੇ ਰਾਵੀ ਟਾਈਪਿੰਗ ਨਿਯਮ',
                subtopics: [
                  'Official scheme: 100 Marks objective paper with 0.25 negative marking',
                  'Qualifying Punjabi Paper A: 50 MCQs, minimum 50% pass mark',
                  'Punjabi Typing Test: Raavi font (Unicode InScript), 30 WPM speed, 92% minimum accuracy, 10 minutes (300 words)',
                  'English Typing Test: Times New Roman, 30 WPM speed, 92% accuracy, 10 minutes',
                  'Calculation formula for full mistakes and half mistakes in typing evaluation',
                  'Keyboard layout cheat sheet: Halant (Shift+D), Tippi (Shift+X), Bindi (Shift+Z), Adhak (Shift+U)',
                ],
                examQuestions: '20',
                difficulty: 'medium',
              },
              {
                id: 'computer-awareness',
                name: 'Computer Knowledge & IT Proficiency (Master Overview)',
                nameHindi: 'कंप्यूटर ज्ञान एवं सूचना प्रौद्योगिकी (संपूर्ण अवलोकन)',
                namePunjabi: 'ਕੰਪਿਊਟਰ ਗਿਆਨ (ਸੰਪੂਰਨ ਸਾਰ)',
                subtopics: [
                  'Computer Architecture: Input/Output devices, CPU, RAM, ROM, Cache, SSD/HDD',
                  'Operating Systems: Windows shortcuts, Linux basics, file management',
                  'MS Word: Ribbons, text formatting, table tools, mail merge, F7 spell check shortcut',
                  'MS Excel: Cells, ranges, formulas (SUM, AVERAGE, IF, VLOOKUP, COUNTIF, CONCATENATE), F4 absolute reference',
                  'MS PowerPoint: Slide transitions, animations, master slides',
                  'Networking: LAN, WAN, IP address (IPv4 vs IPv6), TCP/IP, HTTP vs HTTPS, DNS, Firewalls',
                  'Cyber Security: Malware, Virus, Worm, Trojan Horse, Phishing, Ransomware, Antivirus',
                ],
                examQuestions: '8-10',
                difficulty: 'easy',
              },
              ...CLERK_COMPUTER_SEGREGATED_TOPICS,
              {
                id: 'punjabi-paper-a',
                name: 'Compulsory Punjabi Qualifying Module',
                nameHindi: 'अनिवार्य पंजाबी योग्यता मॉड्यूल',
                namePunjabi: 'ਲਾਜ਼ਮੀ ਪੰਜਾਬੀ ਯੋਗਤਾ',
                subtopics: [
                  'Gurmukhi alphabet and orthography',
                  'Vyakaran, gender, number, tenses, proverbs and idioms',
                ],
                examQuestions: '50',
                difficulty: 'medium',
              },
              {
                id: 'quantitative-aptitude',
                name: 'Numerical Ability & Aptitude',
                nameHindi: 'संख्यात्मक योग्यता व एप्टीट्यूड',
                namePunjabi: 'ਅੰਕਗਣਿਤ',
                subtopics: [
                  'Percentages, Profit & Loss, Time & Work, CI vs SI for 2 years',
                ],
                examQuestions: '25',
                difficulty: 'medium',
              },
            ],
          },
          {
            id: 'clerk-punjab-history-culture',
            name: 'Punjab History, Sikh Gurus & Culture (Segregated Syllabus)',
            nameHindi: 'पंजाब का इतिहास, 10 सिख गुरु एवं संस्कृति (विस्तृत पाठ्यक्रम)',
            namePunjabi: 'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ, 10 ਸਿੱਖ ਗੁਰੂ ਅਤੇ ਸੱਭਿਆਚਾਰ (ਵਿਸਤ੍ਰਿਤ ਸਿਲੇਬਸ)',
            topics: [
              {
                id: 'punjab-history',
                name: 'History of Punjab & Sikh Gurus (Master Overview)',
                nameHindi: 'पंजाब का इतिहास व 10 सिख गुरु (संपूर्ण अवलोकन)',
                namePunjabi: 'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ ਤੇ 10 ਸਿੱਖ ਗੁਰੂ (ਸੰਪੂਰਨ ਸਾਰ)',
                subtopics: [
                  'Chronological overview of the Ten Sikh Gurus, Banda Singh Bahadur, 12 Misls, Maharaja Ranjit Singh & Freedom Struggle',
                ],
                examQuestions: '15-17',
                difficulty: 'medium',
              },
              ...PUNJAB_HISTORY_SEGREGATED_TOPICS,
            ],
          },
        ],
      },
    ],
  },

  // 1.3 Punjab Patwari (PSSSB)
  {
    id: 'punjab-patwari',
    state: 'punjab',
    name: 'Punjab Patwari (PSSSB)',
    nameHindi: 'पंजाब पटवारी भर्ती',
    namePunjabi: 'ਪੰਜਾਬ ਪਟਵਾਰੀ',
    body: 'Punjab Subordinate Services Selection Board (PSSSB)',
    level: 'Revenue Department',
    totalMarks: 100,
    duration: '2 Hours',
    negativeMarking: 0.25,
    officialWebsite: 'https://sssb.punjab.gov.in',
    emoji: '🌾',
    color: '#059669',
    sections: [
      { name: 'Compulsory Punjabi Paper A', nameHindi: 'पंजाबी योग्यता परीक्षा', marks: 50, questions: 50 },
      { name: 'General Knowledge & Punjab History', nameHindi: 'सामान्य ज्ञान व पंजाब इतिहास', marks: 25, questions: 25 },
      { name: 'Mental Ability & Quantitative Aptitude', nameHindi: 'रीजनिंग व मैथ्स', marks: 25, questions: 25 },
      { name: 'Agriculture & Land Measurement', nameHindi: 'कृषि एवं भूमि माप इकाइयां', marks: 25, questions: 25 },
      { name: 'Computer & Languages', nameHindi: 'कंप्यूटर व भाषाएं', marks: 25, questions: 25 },
    ],
    subjects: [
      {
        id: 'patwari-special',
        name: 'Patwari Special Curriculum',
        nameHindi: 'पटवारी विशेष पाठ्यक्रम',
        namePunjabi: 'ਪਟਵਾਰੀ ਵਿਸ਼ੇਸ਼ ਸਿਲੇਬਸ',
        emoji: '🚜',
        chapters: [
          {
            id: 'revenue-agriculture',
            name: 'Land Measurement & Agriculture',
            nameHindi: 'भूमि माप इकाइयां व कृषि',
            namePunjabi: 'ਜ਼ਮੀਨ ਮਿਣਤੀ ਤੇ ਖੇਤੀਬਾੜੀ',
            topics: [
              {
                id: 'patwari-agriculture-accounts',
                name: 'Punjab Land Units, Jamabandi & Agriculture',
                nameHindi: 'पंजाब भूमि माप इकाइयां, जमाबंदी व कृषि',
                namePunjabi: 'ਜ਼ਮੀਨ ਮਿਣਤੀ ਤੇ ਮਾਲ ਰਿਕਾਰਡ',
                subtopics: [
                  'Karam (5.5 ft), Sarsahi, Marla (272.25 sq ft), Kanal (5445 sq ft), Killa/Acre (8 kanals = 43,560 sq ft)',
                  'Jamabandi (Record of Rights, prepared every 4 years)',
                  'Khasra Girdawari (Harvest inspection twice a year: Oct Kharif, March Rabi)',
                  'Fard, Mutation (Intiqal), Shajra Kishtwar village map on cloth',
                  'Punjab Agriculture: Green revolution 1966-67, PAU Ludhiana (1962), Sirhind and Bhakra canals',
                ],
                examQuestions: '25',
                difficulty: 'medium',
              },
              {
                id: 'punjab-geography',
                name: 'Punjab Drainage, Canals & Soils',
                nameHindi: 'पंजाब की नदियां, नहरें व मिट्टी',
                namePunjabi: 'ਪੰਜਾਬ ਦੇ ਦਰਿਆ ਤੇ ਨਹਿਰਾਂ',
                subtopics: [
                  'Satluj, Beas, Ravi river systems, Harike wetland, Doabs of Punjab',
                ],
                examQuestions: '10',
                difficulty: 'easy',
              },
              ...PUNJAB_HISTORY_SEGREGATED_TOPICS,
              ...CLERK_COMPUTER_SEGREGATED_TOPICS,
            ],
          },
        ],
      },
    ],
  },

  // 1.4 Punjab Police (Constable & SI)
  {
    id: 'punjab-police',
    state: 'punjab',
    name: 'Punjab Police (Constable & SI)',
    nameHindi: 'पंजाब पुलिस (कांस्टेबल व सब-इंस्पेक्टर)',
    namePunjabi: 'ਪੰਜਾਬ ਪੁਲਿਸ (ਕਾਂਸਟੇਬਲ ਤੇ ਐਸ.ਆਈ.)',
    body: 'Punjab Police Recruitment Board',
    level: 'Constable & Sub-Inspector Cadre',
    totalMarks: 100,
    duration: '2 Hours CBT + Physical Screening',
    negativeMarking: false,
    officialWebsite: 'https://punjabpolice.gov.in',
    emoji: '👮',
    color: '#1E3A8A',
    sections: [
      { name: 'General Awareness & Law', nameHindi: 'सामान्य जागरूकता व कानून', marks: 35, questions: 35 },
      { name: 'Quantitative Aptitude & Numerical Skills', nameHindi: 'मात्रात्मक योग्यता', marks: 20, questions: 20 },
      { name: 'Mental Ability & Logical Reasoning', nameHindi: 'तर्कशक्ति', marks: 20, questions: 20 },
      { name: 'English Language Skills', nameHindi: 'अंग्रेजी', marks: 10, questions: 10 },
      { name: 'Punjabi Language Skills', nameHindi: 'पंजाबी', marks: 10, questions: 10 },
      { name: 'Digital Literacy & Computer Awareness', nameHindi: 'डिजिटल साक्षरता', marks: 5, questions: 5 },
    ],
    subjects: [
      {
        id: 'police-general',
        name: 'Police Recruitment Syllabus',
        nameHindi: 'पुलिस भर्ती पाठ्यक्रम',
        namePunjabi: 'ਪੁਲਿਸ ਭਰਤੀ ਸਿਲੇਬਸ',
        emoji: '🛡️',
        chapters: [
          {
            id: 'police-core',
            name: 'Core Law & Police Subjects',
            nameHindi: 'मुख्य कानून व पुलिस विषय',
            namePunjabi: 'ਕਾਨੂੰਨ ਤੇ ਪੁਲਿਸ ਵਿਸ਼ੇ',
            topics: [
              {
                id: 'police-law-basics',
                name: 'Criminal Law Basics, FIR & Arrest Rules',
                nameHindi: 'आपराधिक कानून की मूल बातें, FIR व गिरफ्तारी नियम',
                namePunjabi: 'ਕਾਨੂੰਨ, ਐਫ.ਆਈ.ਆਰ. ਤੇ ਗ੍ਰਿਫ਼ਤਾਰੀ ਨਿਯਮ',
                subtopics: [
                  'Police as State List subject under 7th Schedule of Constitution',
                  'Section 154 CrPC: Mandatory FIR in cognizable offenses (Lalita Kumari case)',
                  'Cognizable vs Non-cognizable offenses and Police arrest powers',
                  'Article 22(2): Mandatory production before magistrate within 24 hours',
                  'D.K. Basu guidelines (1997) for arrest memo, inspection, and human rights',
                ],
                examQuestions: '20-25',
                difficulty: 'medium',
              },
              {
                id: 'punjab-history',
                name: 'Punjab GK, History & Culture (Master Overview)',
                nameHindi: 'पंजाब सामान्य ज्ञान व संस्कृति (संपूर्ण अवलोकन)',
                namePunjabi: 'ਪੰਜਾਬ ਜੀ.ਕੇ. (ਸੰਪੂਰਨ ਸਾਰ)',
                subtopics: ['10 Sikh Gurus', 'Maharaja Ranjit Singh', 'Borders and Geography', 'Culture and Festivals'],
                examQuestions: '15-20',
                difficulty: 'medium',
              },
              ...PUNJAB_HISTORY_SEGREGATED_TOPICS,
              ...CLERK_COMPUTER_SEGREGATED_TOPICS,
              {
                id: 'fundamental-rights',
                name: 'Indian Constitution & Fundamental Rights',
                nameHindi: 'भारतीय संविधान एवं मौलिक अधिकार',
                namePunjabi: 'ਸੰਵਿਧਾਨ ਤੇ ਮੌਲਿਕ ਅਧਿਕਾਰ',
                subtopics: ['Fundamental Rights Articles 12-35', 'Writs under Article 32 & 226', 'Directive Principles'],
                examQuestions: '10-15',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
    ],
  },

  // ETT 5994 Paper B reference: separate from PSTET and qualifying Paper A.
  {
    id: 'punjab-ett', state: 'punjab', name: 'Punjab ETT — 5994 Paper B reference',
    nameHindi: 'पंजाब ईटीटी — 5994 पेपर B संदर्भ', namePunjabi: 'ਪੰਜਾਬ ਈਟੀਟੀ — 5994 ਪੇਪਰ B ਹਵਾਲਾ',
    body: 'Education Recruitment Board (ERB), Punjab', level: 'Archival preparation reference; upcoming notification pending',
    totalMarks: 200, duration: '100 Minutes (archival reference)', negativeMarking: false,
    syllabusStatus: 'provisional-archive', officialWebsite: 'https://educationrecruitmentboard.com/ETT5994/',
    emoji: '🧒', color: '#D97706',
    sections: [
      { name: 'Punjabi', nameHindi: 'पंजाबी', marks: 40 },
      { name: 'General Science', nameHindi: 'सामान्य विज्ञान', marks: 40 },
      { name: 'Mathematics', nameHindi: 'गणित', marks: 40 },
      { name: 'Social Science', nameHindi: 'सामाजिक विज्ञान', marks: 40 },
      { name: 'English', nameHindi: 'अंग्रेज़ी', marks: 20 },
      { name: 'Hindi', nameHindi: 'हिंदी', marks: 20 },
    ],
    subjects: buildEttSubjects(),
  },
];

// ---------------------------------------------------------------------------
// 2. RAJASTHAN EXAMS DATABASE
// ---------------------------------------------------------------------------
export const RAJASTHAN_EXAMS: Exam[] = [
  // 2.1 REET Level 1 (Classes 1-5)
  {
    id: 'reet-level1',
    state: 'rajasthan',
    name: 'REET Level 1 (Primary Teachers)',
    nameHindi: 'रीट लेवल 1 (कक्षा 1 से 5)',
    namePunjabi: 'ਰੀਟ ਲੈਵਲ 1 (ਪ੍ਰਾਇਮਰੀ ਅਧਿਆਪਕ)',
    body: 'Board of Secondary Education, Rajasthan (BSER / RBSE)',
    level: 'Classes 1 to 5',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://rajeduboard.rajasthan.gov.in',
    emoji: '🏜️',
    color: '#DC2626',
    sections: [
      { name: 'Section I: Child Development & Pedagogy (CDP)', nameHindi: 'बाल विकास एवं शिक्षण विधियां', marks: 30, questions: 30 },
      { name: 'Section II: Language I (Hindi / First Language)', nameHindi: 'भाषा I (हिंदी)', marks: 30, questions: 30 },
      { name: 'Section III: Language II (Second Language)', nameHindi: 'भाषा II', marks: 30, questions: 30 },
      { name: 'Section IV: Mathematics', nameHindi: 'गणित', marks: 30, questions: 30 },
      { name: 'Section V: Environmental Studies & Rajasthan GK', nameHindi: 'पर्यावरण अध्ययन व राजस्थान सामान्य ज्ञान', marks: 30, questions: 30 },
    ],
    subjects: [
      {
        id: 'reet-cdp',
        name: 'Child Development & Pedagogy',
        nameHindi: 'बाल विकास एवं शिक्षण विधियां',
        namePunjabi: 'ਬਾਲ ਵਿਕਾਸ ਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ',
        emoji: '🧠',
        chapters: [
          {
            id: 'cdp-core',
            name: 'Child Development Principles',
            nameHindi: 'बाल विकास के सिद्धांत',
            topics: [
              {
                id: 'child-development-pedagogy',
                name: 'Child Development, Piaget, Kohlberg & RTE 2009',
                nameHindi: 'बाल विकास, पियाजे, कोहलबर्ग व RTE 2009',
                subtopics: [
                  'Piaget 4 stages, Vygotsky socio-cultural theory, Kohlberg moral development',
                  'Inclusive education, CCE, Dyslexia, Dysgraphia, Dyscalculia',
                  'Right to Education Act 2009 provisions in Rajasthan',
                ],
                examQuestions: '30',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-languages',
        name: 'Language Proficiency',
        nameHindi: 'भाषा प्रवीणता (हिंदी / भाषा)',
        namePunjabi: 'ਭਾਸ਼ਾ ਨਿਪੁੰਨਤਾ',
        emoji: '📖',
        chapters: [
          {
            id: 'hindi-grammar-reet',
            name: 'Language Grammar & Pedagogy',
            nameHindi: 'हिंदी व्याकरण व शिक्षण',
            topics: [
              {
                id: 'hindi-vyakaran',
                name: 'Hindi Grammar for REET',
                nameHindi: 'रीट हेतु हिंदी व्याकरण',
                subtopics: ['Sandhi, Samas, Ras, Alankar, Upsarg, Pratyay, Vakya Shuddhi'],
                examQuestions: '30',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-math',
        name: 'Primary Mathematics',
        nameHindi: 'प्राथमिक गणित',
        namePunjabi: 'ਪ੍ਰਾਇਮਰੀ ਗਣਿਤ',
        emoji: '📐',
        chapters: [
          {
            id: 'primary-math-core',
            name: 'Arithmetic, Fractions & Geometry',
            nameHindi: 'अंकगणित, भिन्न एवं ज्यामिति',
            topics: [
              {
                id: 'primary-mathematics',
                name: 'Primary Mathematics & Arithmetic Operations',
                nameHindi: 'प्राथमिक गणित एवं अंकगणितीय संक्रियाएं',
                subtopics: ['Whole numbers, Place value, LCM and HCF, Fractions, Unitary method, Percentage, Simple interest, Plane and solid figures'],
                examQuestions: '30',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-evs',
        name: 'Environmental Studies & Rajasthan Heritage',
        nameHindi: 'पर्यावरण अध्ययन व राजस्थान विरासत',
        namePunjabi: 'ਵਾਤਾਵਰਨ ਅਧਿਐਨ ਤੇ ਰਾਜਸਥਾਨ ਵਿਰਸਾ',
        emoji: '🌿',
        chapters: [
          {
            id: 'evs-core',
            name: 'Environment & Living World',
            nameHindi: 'पर्यावरण एवं सजीव जगत',
            topics: [
              {
                id: 'primary-environmental-studies',
                name: 'Family, Plants, Animals & Environmental Conservation',
                nameHindi: 'परिवार, वनस्पति, जंतु एवं पर्यावरण संरक्षण',
                subtopics: ['Family and relations, Clothes and habitats, Living world, Matter and energy, Consumer protection, National parks'],
                examQuestions: '15',
                difficulty: 'medium',
              },
              {
                id: 'rajasthan-gk-heritage',
                name: 'Rajasthan History, Art & Culture & Aravalli Geography',
                nameHindi: 'राजस्थान का इतिहास, कला-संस्कृति व भूगोल',
                subtopics: [
                  'Mewar: Rana Kumbha (32 forts), Rana Sanga, Maharana Pratap (Haldighati 1576)',
                  '1857 Revolt in Rajasthan: Nasirabad (28 May 1857), Auwa, Kota',
                  'Rajasthan Integration: 7 stages, 30 March Rajasthan Day, 1 Nov 1956',
                  'UNESCO 6 hill forts (Chittor, Kumbhalgarh, Gagron, Amer, Ranthambore, Jaisalmer)',
                  'Aravalli Range: Guru Shikhar highest peak (1722m), Thar Desert 61.11% area',
                ],
                examQuestions: '15',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },

  // 2.2 REET Level 2 (Social Studies Stream, Classes 6-8)
  {
    id: 'reet-level2-sst',
    state: 'rajasthan',
    name: 'REET Level 2 (Upper Primary — Social Studies Stream)',
    nameHindi: 'रीट लेवल 2 (कक्षा 6 से 8 — सामाजिक अध्ययन)',
    namePunjabi: 'ਰੀਟ ਲੈਵਲ 2 (ਸਮਾਜਿਕ ਸਿੱਖਿਆ)',
    body: 'Board of Secondary Education, Rajasthan (BSER / RBSE)',
    level: 'Classes 6 to 8',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://rajeduboard.rajasthan.gov.in',
    emoji: '🏜️',
    color: '#B91C1C',
    sections: [
      { name: 'Section I: Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Section II: Language I', nameHindi: 'भाषा I', marks: 30, questions: 30 },
      { name: 'Section III: Language II', nameHindi: 'भाषा II', marks: 30, questions: 30 },
      { name: 'Section IV: Social Studies Domain', nameHindi: 'सामाजिक अध्ययन डोमेन', marks: 60, questions: 60 },
    ],
    subjects: [
      {
        id: 'reet-l2-cdp',
        name: 'Child Development & Pedagogy',
        nameHindi: 'बाल विकास व शिक्षाशास्त्र',
        emoji: '🧠',
        chapters: [
          {
            id: 'cdp-adolescent-core',
            name: 'Child & Adolescent Development',
            nameHindi: 'बाल एवं किशोर विकास',
            topics: [
              {
                id: 'child-development-pedagogy',
                name: 'Adolescent & Child Development Pedagogy',
                nameHindi: 'किशोरावस्था व बाल विकास शिक्षाशास्त्र',
                subtopics: ['Cognitive and moral development, Learning theories, Motivation, Assessment'],
                examQuestions: '30',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-l2-languages',
        name: 'Language Proficiency',
        nameHindi: 'भाषा प्रवीणता',
        emoji: '📖',
        chapters: [
          {
            id: 'l2-hindi-grammar',
            name: 'Hindi Grammar & Pedagogy',
            nameHindi: 'हिंदी व्याकरण',
            topics: [
              {
                id: 'hindi-vyakaran',
                name: 'Hindi Grammar for REET',
                nameHindi: 'रीट हेतु हिंदी व्याकरण',
                subtopics: ['Sandhi, Samas, Ras, Alankar, Upsarg, Pratyay, Vakya Shuddhi'],
                examQuestions: '30',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-l2-sst-domain',
        name: 'Social Studies Domain (History, Geography, Polity)',
        nameHindi: 'सामाजिक अध्ययन डोमेन (इतिहास, भूगोल, संविधान)',
        emoji: '🌍',
        chapters: [
          {
            id: 'sst-history-geography',
            name: 'Indian History & Physical Geography',
            nameHindi: 'भारतीय इतिहास एवं भौतिक भूगोल',
            topics: [
              {
                id: 'ancient-india',
                name: 'Ancient India & Indus Valley Civilization',
                nameHindi: 'प्राचीन भारत एवं सिंधु घाटी सभ्यता',
                subtopics: ['Indus Valley Civilization, Vedic culture, Mahajanapadas, Mauryan & Gupta Empire'],
                examQuestions: '12',
                difficulty: 'medium',
              },
              {
                id: 'medieval-india',
                name: 'Medieval India & Bhakti-Sufi Movements',
                nameHindi: 'मध्यकालीन भारत एवं भक्ति-सूफी आंदोलन',
                subtopics: ['Delhi Sultanate, Mughal Empire, Bhakti and Sufi movements'],
                examQuestions: '10',
                difficulty: 'medium',
              },
              {
                id: 'modern-india',
                name: 'Modern Indian National Movement',
                nameHindi: 'आधुनिक भारतीय राष्ट्रीय आंदोलन',
                subtopics: ['1857 Revolt, Indian National Congress, Gandhian movements, Independence 1947'],
                examQuestions: '12',
                difficulty: 'medium',
              },
              {
                id: 'physical-geography',
                name: 'Physical Geography & Resources',
                nameHindi: 'भौतिक भूगोल एवं संसाधन',
                subtopics: ['Earth layers, Landforms, Atmosphere, Indian physiography, Climate and agriculture'],
                examQuestions: '12',
                difficulty: 'medium',
              },
              {
                id: 'fundamental-rights',
                name: 'Indian Constitution, Preamble & Democracy',
                nameHindi: 'भारतीय संविधान, प्रस्तावना एवं लोकतंत्र',
                subtopics: ['Preamble, Fundamental Rights and Duties, Directive Principles, Parliamentary democracy'],
                examQuestions: '10',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-l2-rajasthan-heritage',
        name: 'Rajasthan History, Art, Culture & Heritage',
        nameHindi: 'राजस्थान का इतिहास, कला, संस्कृति व विरासत',
        emoji: '🏜️',
        chapters: [
          {
            id: 'rajasthan-heritage-chapter',
            name: 'Rajasthan History, Art & Culture',
            nameHindi: 'राजस्थान का इतिहास, कला एवं संस्कृति',
            topics: [
              {
                id: 'rajasthan-gk-heritage',
                name: 'Rajasthan History, Art, Culture & Geography',
                nameHindi: 'राजस्थान का इतिहास व कला-संस्कृति',
                subtopics: ['Integration, 1857 Revolt, Forts, Folk deities, Aravalli and Thar desert'],
                examQuestions: '14',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },

  // 2.3 REET Level 2 (Science & Mathematics Stream, Classes 6-8)
  {
    id: 'reet-level2-science-math',
    state: 'rajasthan',
    name: 'REET Level 2 (Upper Primary — Science & Mathematics Stream)',
    nameHindi: 'रीट लेवल 2 (कक्षा 6 से 8 — विज्ञान एवं गणित)',
    namePunjabi: 'ਰੀਟ ਲੈਵਲ 2 (ਵਿਗਿਆਨ ਤੇ ਗਣਿਤ)',
    body: 'Board of Secondary Education, Rajasthan (BSER / RBSE)',
    level: 'Classes 6 to 8',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://rajeduboard.rajasthan.gov.in',
    emoji: '📐',
    color: '#0D9488',
    sections: [
      { name: 'Section I: Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Section II: Language I', nameHindi: 'भाषा I', marks: 30, questions: 30 },
      { name: 'Section III: Language II', nameHindi: 'भाषा II', marks: 30, questions: 30 },
      { name: 'Section IV: Mathematics & Science Domain', nameHindi: 'गणित व विज्ञान डोमेन', marks: 60, questions: 60 },
    ],
    subjects: [
      {
        id: 'reet-sci-cdp',
        name: 'Child Development & Pedagogy',
        nameHindi: 'बाल विकास व शिक्षाशास्त्र',
        emoji: '🧠',
        chapters: [
          {
            id: 'cdp-core',
            name: 'Child & Adolescent Development',
            nameHindi: 'बाल एवं किशोर विकास',
            topics: [
              {
                id: 'child-development-pedagogy',
                name: 'Adolescent & Child Development Pedagogy',
                nameHindi: 'किशोरावस्था व बाल विकास शिक्षाशास्त्र',
                subtopics: ['Cognitive and moral development, Learning theories, Motivation, Assessment'],
                examQuestions: '30',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-sci-languages',
        name: 'Language Proficiency',
        nameHindi: 'भाषा प्रवीणता',
        emoji: '📖',
        chapters: [
          {
            id: 'sci-hindi-grammar',
            name: 'Hindi Grammar',
            nameHindi: 'हिंदी व्याकरण',
            topics: [
              {
                id: 'hindi-vyakaran',
                name: 'Hindi Grammar for REET',
                nameHindi: 'रीट हेतु हिंदी व्याकरण',
                subtopics: ['Sandhi, Samas, Ras, Alankar, Upsarg, Pratyay, Vakya Shuddhi'],
                examQuestions: '30',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-science-domain',
        name: 'Science Specialization (Physics, Chemistry, Biology)',
        nameHindi: 'विज्ञान विशेषज्ञता (भौतिकी, रसायन, जीव विज्ञान)',
        emoji: '🔬',
        chapters: [
          {
            id: 'science-domain-core',
            name: 'Physical & Biological Sciences',
            nameHindi: 'भौतिक एवं जैविक विज्ञान',
            topics: [
              {
                id: 'physics-concepts',
                name: 'Science Specialization: Physics & Mechanics',
                nameHindi: 'विज्ञान विशेषज्ञता: भौतिकी',
                subtopics: ['Newton laws, Gravitation, Optics, Mirrors and Lenses, Ohm law'],
                examQuestions: '10',
                difficulty: 'medium',
              },
              {
                id: 'chemistry-concepts',
                name: 'Science Specialization: Chemistry & Matter',
                nameHindi: 'विज्ञान विशेषज्ञता: रसायन',
                subtopics: ['Atomic structure, Chemical reactions, Acids and Bases, Metals and Non-metals'],
                examQuestions: '10',
                difficulty: 'medium',
              },
              {
                id: 'biology-concepts',
                name: 'Science Specialization: Cell & Human Physiology',
                nameHindi: 'विज्ञान विशेषज्ञता: जीव विज्ञान',
                subtopics: ['Cell structure, Photosynthesis, Blood groups, Genetics Mendel laws'],
                examQuestions: '10',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-math-domain',
        name: 'Mathematics Specialization',
        nameHindi: 'गणित विशेषज्ञता',
        emoji: '📐',
        chapters: [
          {
            id: 'math-domain-core',
            name: 'Algebra, Geometry & Statistics',
            nameHindi: 'बीजगणित, ज्यामिति एवं सांख्यिकी',
            topics: [
              {
                id: 'mathematics-core',
                name: 'Mathematics: Algebra, Mensuration & Statistics',
                nameHindi: 'गणित: बीजगणित, क्षेत्रमिति एवं सांख्यिकी',
                subtopics: ['Indices, Algebraic expressions, Linear equations, Area and volume, Statistics, Probability'],
                examQuestions: '30',
                difficulty: 'hard',
              },
            ],
          },
        ],
      },
      {
        id: 'reet-sci-rajasthan',
        name: 'Rajasthan Heritage & Culture',
        nameHindi: 'राजस्थान विरासत व संस्कृति',
        emoji: '🏜️',
        chapters: [
          {
            id: 'sci-rajasthan-gk',
            name: 'Rajasthan Heritage Core',
            nameHindi: 'राजस्थान विरासत',
            topics: [
              {
                id: 'rajasthan-gk-heritage',
                name: 'Rajasthan History, Art, Culture & Geography',
                nameHindi: 'राजस्थान का इतिहास व कला-संस्कृति',
                subtopics: ['Integration, 1857 Revolt, Forts, Folk deities, Aravalli and Thar desert'],
                examQuestions: '10',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// 2.3 Rajasthan Police Constable (new entry)
// ---------------------------------------------------------------------------
const RAJASTHAN_POLICE_EXAM: Exam = {
  id: 'rajasthan-police',
  state: 'rajasthan',
  name: 'Rajasthan Police Constable',
  nameHindi: 'राजस्थान पुलिस कांस्टेबल',
  namePunjabi: 'ਰਾਜਸਥਾਨ ਪੁਲਿਸ ਕਾਂਸਟੇਬਲ',
  body: 'Rajasthan Police Subordinate Service Board',
  level: 'Constable',
  totalMarks: 150,
  duration: '2 Hours',
  negativeMarking: 0.25,
  officialWebsite: 'https://police.rajasthan.gov.in',
  emoji: '👮',
  color: '#7C3AED',
  sections: [
    { name: 'Rajasthan GK & History', nameHindi: 'राजस्थान सामान्य ज्ञान व इतिहास', marks: 45, questions: 45 },
    { name: 'Indian Constitution & Polity', nameHindi: 'भारतीय संविधान व राजनीति', marks: 30, questions: 30 },
    { name: 'Science & Technology', nameHindi: 'विज्ञान व प्रौद्योगिकी', marks: 30, questions: 30 },
    { name: 'Mathematics & Computer Basics', nameHindi: 'गणित व कंप्यूटर', marks: 45, questions: 45 },
  ],
  subjects: [
    {
      id: 'raj-police-core',
      name: 'Rajasthan Police Core',
      nameHindi: 'राजस्थान पुलिस मुख्य विषय',
      emoji: '🚔',
      chapters: [
        {
          id: 'raj-gk',
          name: 'Rajasthan GK & Current Affairs',
          nameHindi: 'राजस्थान सामान्य ज्ञान',
          topics: [
            {
              id: 'raj-history-police',
              name: 'Rajasthan History & Heritage',
              nameHindi: 'राजस्थान इतिहास व विरासत',
              subtopics: ['Rajput kingdoms, Mewar, 1857 Revolt in Rajasthan, Integration of Rajasthan', 'Forts, Palaces, Art & Culture, Folk music and dance'],
              examQuestions: '30',
              difficulty: 'medium',
            },
            {
              id: 'science-tech-police',
              name: 'Science, Technology & Computer Basics',
              nameHindi: 'विज्ञान, प्रौद्योगिकी व कंप्यूटर',
              subtopics: ['General Science fundamentals', 'Computer basics: hardware, software, internet', 'Current affairs: national & Rajasthan'],
              examQuestions: '45',
              difficulty: 'easy',
            },
          ],
        },
      ],
    },
  ],
};

// Append Rajasthan Police to RAJASTHAN_EXAMS after declaration
RAJASTHAN_EXAMS.push(RAJASTHAN_POLICE_EXAM);

// ---------------------------------------------------------------------------
// 3. CENTRAL EXAMS DATABASE
// ---------------------------------------------------------------------------
export const CENTRAL_EXAMS: Exam[] = [
  // 3.1 CTET Paper 1
  {
    id: 'ctet-paper1',
    state: 'central',
    name: 'CTET Paper 1 (Classes 1-5)',
    nameHindi: 'सीटेट पेपर 1 (कक्षा 1-5)',
    body: 'Central Board of Secondary Education (CBSE)',
    level: 'Primary Teachers (PRT)',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://ctet.nic.in',
    emoji: '🏛️',
    color: '#059669',
    sections: [
      { name: 'Child Development and Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Mathematics', nameHindi: 'गणित', marks: 30, questions: 30 },
      { name: 'Environmental Studies (EVS)', nameHindi: 'पर्यावरण अध्ययन', marks: 30, questions: 30 },
      { name: 'Language I (Compulsory)', nameHindi: 'भाषा I', marks: 30, questions: 30 },
      { name: 'Language II (Compulsory)', nameHindi: 'भाषा II', marks: 30, questions: 30 },
    ],
    subjects: [
      {
        id: 'ctet-core',
        name: 'CTET Curriculum',
        nameHindi: 'सीटेट पाठ्यक्रम',
        emoji: '📚',
        chapters: [
          {
            id: 'ctet-general',
            name: 'Core Curriculum',
            nameHindi: 'मुख्य पाठ्यक्रम',
            topics: [
              {
                id: 'child-development-pedagogy',
                name: 'CDP: Piaget, Vygotsky, Kohlberg & Inclusive Education',
                nameHindi: 'बाल विकास: पियाजे, वाइगोत्स्की, कोहलबर्ग व समावेशी शिक्षा',
                subtopics: [
                  'Piaget cognitive stages: Object permanence, Conservation, Egocentrism',
                  'Vygotsky ZPD and Scaffolding',
                  'Kohlberg moral stages and Heinz dilemma',
                  'Inclusive education, Dyslexia, RTE Act 2009',
                ],
                examQuestions: '30',
                difficulty: 'medium',
              },
              {
                id: 'fundamental-rights',
                name: 'Constitution, Democratic Rights & Diversity',
                nameHindi: 'संविधान, लोकतांत्रिक अधिकार व विविधता',
                subtopics: ['Fundamental Rights in Indian Constitution', 'Right to Education Act 2009', 'Child Rights'],
                examQuestions: '10',
                difficulty: 'easy',
              },
              {
                id: 'hindi-vyakaran',
                name: 'Hindi Comprehension & Grammar',
                nameHindi: 'हिंदी व्याकरण एवं बोध',
                subtopics: ['Sandhi, Samas, Upsarg, Pratyay, Passage comprehension'],
                examQuestions: '30',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
    ],
  },

  // 3.2 SSC CHSL (10+2)
  {
    id: 'ssc-chsl',
    state: 'central',
    name: 'SSC CHSL (10+2 Level)',
    nameHindi: 'एसएससी सीएचएसएल',
    body: 'Staff Selection Commission (SSC)',
    level: 'LDC / JSA / DEO',
    totalMarks: 200,
    duration: '60 Minutes',
    negativeMarking: 0.5,
    officialWebsite: 'https://ssc.gov.in',
    emoji: '💼',
    color: '#D97706',
    sections: [
      { name: 'English Language', nameHindi: 'अंग्रेजी भाषा', marks: 50, questions: 25 },
      { name: 'General Intelligence (Reasoning)', nameHindi: 'तर्कशक्ति', marks: 50, questions: 25 },
      { name: 'Quantitative Aptitude', nameHindi: 'मात्रात्मक योग्यता', marks: 50, questions: 25 },
      { name: 'General Awareness', nameHindi: 'सामान्य जागरूकता', marks: 50, questions: 25 },
    ],
    subjects: [
      {
        id: 'ssc-ga',
        name: 'General Awareness & Aptitude',
        nameHindi: 'सामान्य ज्ञान व योग्यता',
        emoji: '🧠',
        chapters: [
          {
            id: 'general-studies',
            name: 'General Studies Modules',
            nameHindi: 'सामान्य अध्ययन मॉड्यूल',
            topics: [
              {
                id: 'modern-india',
                name: 'Indian History & National Movement',
                nameHindi: 'भारतीय इतिहास व राष्ट्रीय आंदोलन',
                subtopics: ['1857 Revolt', 'Freedom Struggle', 'Important Dynasties'],
                examQuestions: '5-7',
                difficulty: 'medium',
              },
              {
                id: 'fundamental-rights',
                name: 'Indian Polity & Constitution',
                nameHindi: 'भारतीय राजव्यवस्था व संविधान',
                subtopics: ['Preamble', 'Fundamental Rights', 'President & Parliament'],
                examQuestions: '5-7',
                difficulty: 'medium',
              },
              {
                id: 'computer-awareness',
                name: 'Computer Knowledge & ICT',
                nameHindi: 'कंप्यूटर ज्ञान',
                subtopics: ['CPU, RAM, ROM, MS Word, MS Excel, IPv4/IPv6, Cyber security'],
                examQuestions: '15',
                difficulty: 'easy',
              },
              {
                id: 'quantitative-aptitude',
                name: 'Quantitative Aptitude & Shortcuts',
                nameHindi: 'मात्रात्मक योग्यता व शॉर्टकट ट्रिक्स',
                subtopics: ['Percentages, Profit & Loss, Time & Work, CI/SI difference for 2 years'],
                examQuestions: '25',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },

  // 3.3 SSC CGL (Combined Graduate Level)
  {
    id: 'ssc-cgl',
    state: 'central',
    name: 'SSC CGL (Combined Graduate Level)',
    nameHindi: 'एसएससी सीजीएल (संयुक्त स्नातक स्तरीय परीक्षा)',
    namePunjabi: 'ਐਸ.ਐਸ.ਸੀ. ਸੀ.ਜੀ.ਐਲ.',
    body: 'Staff Selection Commission (SSC)',
    level: 'Graduation Degree Level (Inspector / ASO / Auditor)',
    totalMarks: 200,
    duration: '60 Minutes (Tier 1)',
    negativeMarking: 0.5,
    officialWebsite: 'https://ssc.gov.in',
    emoji: '🏆',
    color: '#2563eb',
    sections: [
      { name: 'General Intelligence and Reasoning', nameHindi: 'तर्कशक्ति व मानसिक योग्यता', marks: 50, questions: 25 },
      { name: 'General Awareness', nameHindi: 'सामान्य जागरूकता व समसामयिकी', marks: 50, questions: 25 },
      { name: 'Quantitative Aptitude', nameHindi: 'मात्रात्मक अभियोग्यता', marks: 50, questions: 25 },
      { name: 'English Comprehension', nameHindi: 'अंग्रेजी भाषा व समझ', marks: 50, questions: 25 },
    ],
    subjects: [
      {
        id: 'ssc-cgl-core',
        name: 'SSC CGL Syllabus & General Studies',
        nameHindi: 'एसएससी सीजीएल सामान्य अध्ययन व योग्यता',
        emoji: '📚',
        chapters: [
          {
            id: 'cgl-general-studies',
            name: 'General Studies Modules',
            nameHindi: 'सामान्य अध्ययन मॉड्यूल',
            topics: [
              {
                id: 'fundamental-rights',
                name: 'Indian Polity, Constitution & Governance',
                nameHindi: 'भारतीय राजव्यवस्था व संविधान',
                subtopics: ['Constitutional Framework, Articles & Amendments, Parliament, Supreme Court & Writs'],
                examQuestions: '6-8',
                difficulty: 'medium',
              },
              {
                id: 'modern-india',
                name: 'Modern Indian History & Freedom Struggle',
                nameHindi: 'आधुनिक भारतीय इतिहास',
                subtopics: ['British Rule, 1857 Revolt, Indian National Congress, Gandhian Era & Independence'],
                examQuestions: '5-7',
                difficulty: 'medium',
              },
              {
                id: 'indian-economy',
                name: 'Indian Economy, Banking & National Income',
                nameHindi: 'भारतीय अर्थव्यवस्था व बैंकिंग',
                subtopics: ['Fiscal Policy, RBI Monetary Policy, Inflation, GDP, Budget, Five Year Plans & NITI Aayog'],
                examQuestions: '5-7',
                difficulty: 'medium',
              },
              {
                id: 'quantitative-aptitude',
                name: 'Advanced Quantitative Aptitude & Geometry',
                nameHindi: 'मात्रात्मक अभियोग्यता व ज्यामिति',
                subtopics: ['Arithmetic, Trigonometry, Geometry, Mensuration, Algebra & Data Interpretation'],
                examQuestions: '25',
                difficulty: 'hard',
              },
            ],
          },
        ],
      },
    ],
  },

  // 3.4 SSC MTS & Havaldar
  {
    id: 'ssc-mts',
    state: 'central',
    name: 'SSC MTS (Multi-Tasking Staff & Havaldar)',
    nameHindi: 'एसएससी एमटीएस व हवलदार',
    namePunjabi: 'ਐਸ.ਐਸ.ਸੀ. ਐਮ.ਟੀ.ਐਸ.',
    body: 'Staff Selection Commission (SSC)',
    level: '10th Matriculation Pass',
    totalMarks: 270,
    duration: '90 Minutes (2 Sessions)',
    negativeMarking: 1.0,
    officialWebsite: 'https://ssc.gov.in',
    emoji: '📄',
    color: '#0891b2',
    sections: [
      { name: 'Session I: Numerical & Mathematical Ability', nameHindi: 'संख्यात्मक गणित (सत्र 1)', marks: 60, questions: 20 },
      { name: 'Session I: Reasoning Ability & Problem Solving', nameHindi: 'तर्कशक्ति (सत्र 1)', marks: 60, questions: 20 },
      { name: 'Session II: General Awareness', nameHindi: 'सामान्य जागरूकता (सत्र 2)', marks: 75, questions: 25 },
      { name: 'Session II: English Language & Comprehension', nameHindi: 'अंग्रेजी भाषा (सत्र 2)', marks: 75, questions: 25 },
    ],
    subjects: [
      {
        id: 'ssc-mts-domain',
        name: 'SSC MTS Core Syllabus',
        nameHindi: 'एसएससी एमटीएस मुख्य पाठ्यक्रम',
        emoji: '🧠',
        chapters: [
          {
            id: 'mts-studies',
            name: 'General Awareness & Arithmetic',
            nameHindi: 'सामान्य जागरूकता व अंकगणित',
            topics: [
              {
                id: 'modern-india',
                name: 'General Awareness & Indian Heritage',
                nameHindi: 'सामान्य जागरूकता व भारतीय धरोहर',
                subtopics: ['Indian History, Culture, Geography, Polity, Basic Science & Static GK'],
                examQuestions: '25',
                difficulty: 'easy',
              },
              {
                id: 'quantitative-aptitude',
                name: 'Elementary Mathematics & Number Systems',
                nameHindi: 'प्रारंभिक गणित व संख्या पद्धति',
                subtopics: ['LCM, HCF, Decimals, Percentages, Ratio, Work & Time, Averages'],
                examQuestions: '20',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
    ],
  },

  // 3.5 CTET Paper 2 (Classes 6-8)
  {
    id: 'ctet-paper2',
    state: 'central',
    name: 'CTET Paper 2 (Upper Primary Classes 6-8)',
    nameHindi: 'सीटेट पेपर 2 (कक्षा 6-8)',
    namePunjabi: 'ਸੀ.ਟੈੱਟ ਪੇਪਰ 2',
    body: 'Central Board of Secondary Education (CBSE)',
    level: 'Upper Primary Teachers (TGT)',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://ctet.nic.in',
    emoji: '🏫',
    color: '#0d9488',
    sections: [
      { name: 'Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Mathematics & Science OR Social Studies/Social Science', nameHindi: 'गणित-विज्ञान अथवा सामाजिक अध्ययन', marks: 60, questions: 60 },
      { name: 'Language I (Compulsory)', nameHindi: 'भाषा I (अनिवार्य)', marks: 30, questions: 30 },
      { name: 'Language II (Compulsory)', nameHindi: 'भाषा II (अनिवार्य)', marks: 30, questions: 30 },
    ],
    subjects: [
      {
        id: 'ctet-p2-curriculum',
        name: 'CTET Paper 2 Pedagogical & Subject Domain',
        nameHindi: 'सीटेट पेपर 2 विषय व शिक्षण विधियां',
        emoji: '📐',
        chapters: [
          {
            id: 'ctet-p2-core',
            name: 'Child Development & Social Science / Science',
            nameHindi: 'बाल विकास व सामाजिक विज्ञान',
            topics: [
              {
                id: 'child-development-pedagogy',
                name: 'Adolescent Psychology: Piaget, Vygotsky, Kohlberg & CCE',
                nameHindi: 'किशोरावस्था मनोविज्ञान, पियाजे, वाइगोत्स्की व सतत मूल्यांकन',
                subtopics: ['Cognitive Development, Social Constructivism, Moral Stages, Inclusive Education, RTE 2009'],
                examQuestions: '30',
                difficulty: 'medium',
              },
              {
                id: 'fundamental-rights',
                name: 'Social and Political Life (Constitution & Democratic Diversity)',
                nameHindi: 'सामाजिक एवं राजनीतिक जीवन (संविधान व विविधता)',
                subtopics: ['Preamble, Fundamental Rights, Judiciary, Social Justice & Marginalization'],
                examQuestions: '20',
                difficulty: 'medium',
              },
              {
                id: 'modern-india',
                name: 'Our Pasts (History: Ancient, Medieval & Modern)',
                nameHindi: 'हमारा अतीत (इतिहास: प्राचीन, मध्यकालीन व आधुनिक)',
                subtopics: ['First Cities, New Empires, Delhi Sultans, Mughals, Colonialism & National Movement'],
                examQuestions: '20',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },

  // 3.6 UGC NET Paper 1
  {
    id: 'ugc-net',
    state: 'central',
    name: 'UGC NET Paper 1 (Teaching & Research Aptitude)',
    nameHindi: 'यूजीसी नेट पेपर 1 (शिक्षण व शोध अभिवृत्ति)',
    namePunjabi: 'ਯੂ.ਜੀ.ਸੀ. ਨੈੱਟ ਪੇਪਰ 1',
    body: 'National Testing Agency (NTA) / University Grants Commission',
    level: 'Assistant Professor & JRF Eligibility (Postgraduate Level)',
    totalMarks: 100,
    duration: '60 Minutes (Paper 1)',
    negativeMarking: false,
    officialWebsite: 'https://ugcnet.nta.ac.in',
    emoji: '🎓',
    color: '#7c3aed',
    sections: [
      { name: 'Teaching Aptitude', nameHindi: 'शिक्षण अभिवृत्ति', marks: 10, questions: 5 },
      { name: 'Research Aptitude', nameHindi: 'शोध अभिवृत्ति', marks: 10, questions: 5 },
      { name: 'Comprehension & Communication', nameHindi: 'बोध व संप्रेषण', marks: 20, questions: 10 },
      { name: 'Mathematical Reasoning & Data Interpretation', nameHindi: 'गणितीय तर्क व डेटा व्याख्या', marks: 20, questions: 10 },
      { name: 'ICT & Higher Education System', nameHindi: 'सूचना प्रौद्योगिकी व उच्च शिक्षा प्रणाली', marks: 20, questions: 10 },
      { name: 'People, Development & Environment', nameHindi: 'लोग, विकास व पर्यावरण', marks: 20, questions: 10 },
    ],
    subjects: [
      {
        id: 'ugc-net-core',
        name: 'Paper 1 General Aptitude & Higher Education',
        nameHindi: 'पेपर 1 सामान्य योग्यता व उच्च शिक्षा',
        emoji: '🧠',
        chapters: [
          {
            id: 'net-teaching-research',
            name: 'Teaching, Research & ICT Frameworks',
            nameHindi: 'शिक्षण, शोध व आईसीटी संरचना',
            topics: [
              {
                id: 'teaching-aptitude',
                name: 'Teaching Aptitude, Evaluation Systems & NEP 2020',
                nameHindi: 'शिक्षण अभिवृत्ति, मूल्यांकन प्रणालियां व एनईपी 2020',
                subtopics: ['Levels of Teaching (Memory, Understanding, Reflective), CBCS, NEP 2020 Higher Education Provisions'],
                examQuestions: '10',
                difficulty: 'hard',
              },
              {
                id: 'computer-awareness',
                name: 'Information & Communication Technology (ICT) in Education',
                nameHindi: 'शिक्षा में सूचना एवं संचार प्रौद्योगिकी (ICT)',
                subtopics: ['Digital initiatives in higher education: SWAYAM, SWAYAMPRABHA, Digilocker, IPv4 vs IPv6, Cloud'],
                examQuestions: '10',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },
    ],
  },

  // 3.7 UTET (Uttarakhand Teacher Eligibility Test)
  {
    id: 'utet-teaching',
    state: 'central',
    name: 'UTET (Uttarakhand Teacher Eligibility Test)',
    nameHindi: 'यूटीईटी (उत्तराखंड शिक्षक पात्रता परीक्षा)',
    namePunjabi: 'ਯੂ.ਟੀ.ਈ.ਟੀ. ਅਧਿਆਪਕ ਪ੍ਰੀਖਿਆ',
    body: 'Uttarakhand Board of School Education (UBSE), Ramnagar',
    level: 'UTET Paper I (PRT) & Paper II (TGT)',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://uktet.com',
    emoji: '🏔️',
    color: '#047857',
    sections: [
      { name: 'Child Development and Pedagogy', nameHindi: 'बाल विकास एवं शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Language I (Hindi compulsory)', nameHindi: 'भाषा I (हिंदी)', marks: 30, questions: 30 },
      { name: 'Language II (English / Sanskrit / Urdu)', nameHindi: 'भाषा II', marks: 30, questions: 30 },
      { name: 'Subject Domain (Math & EVS OR Social Science)', nameHindi: 'विषय डोमेन (गणित-पर्यावरण अथवा सामाजिक अध्ययन)', marks: 60, questions: 60 },
    ],
    subjects: [
      {
        id: 'utet-curriculum',
        name: 'UTET Core Pedagogy & Domain',
        nameHindi: 'यूटीईटी मुख्य शिक्षाशास्त्र व विषय',
        emoji: '🌲',
        chapters: [
          {
            id: 'utet-core-pedagogy',
            name: 'Child Development & Environmental Studies',
            nameHindi: 'बाल विकास व पर्यावरण अध्ययन',
            topics: [
              {
                id: 'child-development-pedagogy',
                name: 'Child Development, Piaget, Vygotsky & Inclusive Education',
                nameHindi: 'बाल विकास, पियाजे, वाइगोत्स्की व समावेशी शिक्षा',
                subtopics: ['Piaget cognitive development, Kohlberg moral stages, Vygotsky ZPD, RTE Act 2009 in hilly areas'],
                examQuestions: '30',
                difficulty: 'medium',
              },
              {
                id: 'hindi-vyakaran',
                name: 'Hindi Grammar & Pedagogy',
                nameHindi: 'हिंदी व्याकरण व शिक्षण शास्त्र',
                subtopics: ['Sandhi, Samas, Tatsam-Tadbhav, Bhasha Shikshan Sidhant'],
                examQuestions: '30',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
    ],
  },
];

import {
  HARYANA_EXAMS as HARYANA_EXPANSION_EXAMS,
  DELHI_EXAMS,
  DEFENCE_EXAMS,
  PUNJAB_ADDITIONAL_EXAMS,
  RAJASTHAN_ADDITIONAL_EXAMS
} from './exams_expansion';

export interface StateMeta {
  id: State;
  name: string;
  nameHindi: string;
  namePunjabi: string;
  icon: string;
  tagline: string;
  color: string;
}

export const STATES_CATALOG: StateMeta[] = [
  { id: 'punjab', name: 'Punjab', nameHindi: 'पंजाब', namePunjabi: 'ਪੰਜਾਬ', icon: '🌾', tagline: 'Master Cadre (SST, Science, Math, Punjabi, Hindi, English), ETT 5994, PSSSB Clerk, Police, Patwari, PSTET, Lecturer Cadre', color: 'from-amber-600 to-orange-700' },
  { id: 'rajasthan', name: 'Rajasthan', nameHindi: 'राजस्थान', namePunjabi: 'ਰਾਜਸਥਾਨ', icon: '🏜️', tagline: 'REET L1/L2 (SST & Sci-Math), 3rd Grade, Patwar, Police SI & Constable', color: 'from-rose-600 to-pink-700' },
  { id: 'haryana', name: 'Haryana', nameHindi: 'हरियाणा', namePunjabi: 'ਹਰਿਆਣਾ', icon: '⚡', tagline: 'HTET (PRT/TGT/PGT), Haryana Police, HSSC CET, JBT/PRT', color: 'from-emerald-600 to-teal-700' },
  { id: 'delhi', name: 'Delhi & Police/CAPF', nameHindi: 'दिल्ली पुलिस व CAPF', namePunjabi: 'ਦਿੱਲੀ ਪੁਲਿਸ ਤੇ CAPF', icon: '👮', tagline: 'Delhi Police Constable, SSC GD Constable, CAPF Forces', color: 'from-sky-600 to-blue-700' },
  { id: 'central', name: 'Central Govt', nameHindi: 'केंद्रीय भर्ती', namePunjabi: 'ਕੇਂਦਰੀ ਭਰਤੀ', icon: '🏛️', tagline: 'SSC CGL, CHSL, MTS, CTET Paper 1/2, UGC NET, UTET', color: 'from-indigo-600 to-violet-700' },
  { id: 'defence', name: 'Army & Defence', nameHindi: 'भारतीय सेना व सुरक्षा', namePunjabi: 'ਭਾਰਤੀ ਫੌਜ ਤੇ ਰੱਖਿਆ', icon: '🎖️', tagline: 'Indian Army Agniveer GD, Clerk, Store Keeper, Air Force', color: 'from-yellow-600 to-amber-700' },
];

// ---------------------------------------------------------------------------
// 3.3 SSC CGL
// ---------------------------------------------------------------------------
const SSC_CGL_EXAM: Exam = {
  id: 'ssc-cgl',
  state: 'central',
  name: 'SSC CGL (Combined Graduate Level)',
  nameHindi: 'SSC CGL',
  namePunjabi: 'ਐਸ.ਐਸ.ਸੀ. ਸੀ.ਜੀ.ਐਲ.',
  body: 'Staff Selection Commission',
  level: 'Graduate Level',
  totalMarks: 200,
  duration: '60 Minutes',
  negativeMarking: 0.5,
  officialWebsite: 'https://ssc.gov.in',
  emoji: '🏛️',
  color: '#D97706',
  sections: [
    { name: 'General Intelligence & Reasoning', nameHindi: 'सामान्य बुद्धिमत्ता व तर्कशक्ति', marks: 50, questions: 25 },
    { name: 'General Awareness', nameHindi: 'सामान्य जागरूकता', marks: 50, questions: 25 },
    { name: 'Quantitative Aptitude', nameHindi: 'मात्रात्मक योग्यता', marks: 50, questions: 25 },
    { name: 'English Comprehension', nameHindi: 'अंग्रेजी बोध', marks: 50, questions: 25 },
  ],
  subjects: [
    {
      id: 'ssc-cgl-core',
      name: 'SSC CGL Core Modules',
      nameHindi: 'SSC CGL मुख्य मॉड्यूल',
      emoji: '📊',
      chapters: [
        {
          id: 'ssc-cgl-general',
          name: 'Reasoning & GA',
          nameHindi: 'तर्कशक्ति व सामान्य ज्ञान',
          topics: [
            {
              id: 'ssc-cgl-reasoning',
              name: 'General Intelligence & Reasoning',
              nameHindi: 'सामान्य बुद्धिमत्ता व तर्कशक्ति',
              subtopics: ['Analogy, Classification, Series, Coding-Decoding', 'Syllogism, Blood relations, Direction sense, Puzzles'],
              examQuestions: '25',
              difficulty: 'medium',
            },
            {
              id: 'ssc-cgl-quant',
              name: 'Quantitative Aptitude',
              nameHindi: 'मात्रात्मक योग्यता',
              subtopics: ['Percentage, Profit & Loss, SI/CI', 'Geometry, Trigonometry, Algebra, Data Interpretation'],
              examQuestions: '25',
              difficulty: 'hard',
            },
          ],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 3.4 CTET Paper 2
// ---------------------------------------------------------------------------
const CTET_P2_EXAM: Exam = {
  id: 'ctet-paper2',
  state: 'central',
  name: 'CTET Paper 2 (Class 6-8)',
  nameHindi: 'CTET पेपर 2 (कक्षा 6-8)',
  namePunjabi: 'ਸੀ.ਟੀ.ਈ.ਟੀ. ਪੇਪਰ 2',
  body: 'Central Board of Secondary Education (CBSE)',
  level: 'Upper Primary Teachers (TGT)',
  totalMarks: 150,
  duration: '2 Hours 30 Minutes',
  negativeMarking: false,
  officialWebsite: 'https://ctet.nic.in',
  emoji: '🏛️',
  color: '#047857',
  sections: [
    { name: 'Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
    { name: 'Language I', nameHindi: 'भाषा I', marks: 30, questions: 30 },
    { name: 'Language II', nameHindi: 'भाषा II', marks: 30, questions: 30 },
    { name: 'Subject-specific Paper (SST or Maths/Science)', nameHindi: 'विषय-विशिष्ट पेपर', marks: 60, questions: 60 },
  ],
  subjects: [
    {
      id: 'ctet-p2-core',
      name: 'CTET Paper 2 Curriculum',
      nameHindi: 'CTET पेपर 2 पाठ्यक्रम',
      emoji: '📚',
      chapters: [
        {
          id: 'ctet-p2-general',
          name: 'Core Curriculum',
          nameHindi: 'मुख्य पाठ्यक्रम',
          topics: [
            {
              id: 'cdp-adolescent',
              name: 'Adolescent Development & Pedagogy',
              nameHindi: 'किशोरावस्था विकास व शिक्षाशास्त्र',
              subtopics: ['Adolescent psychology, Identity crisis', 'Formative assessment, NCF 2005, Learning theories'],
              examQuestions: '30',
              difficulty: 'medium',
            },
            {
              id: 'social-studies-p2',
              name: 'Social Studies (History, Geography, Civics)',
              nameHindi: 'सामाजिक अध्ययन',
              subtopics: ['Medieval India, Mughal administration', 'Indian geography, Resources', 'Democratic process, Parliament'],
              examQuestions: '60',
              difficulty: 'medium',
            },
          ],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 3.5 UGC NET Paper 1
// ---------------------------------------------------------------------------
const UGC_NET_EXAM: Exam = {
  id: 'ugc-net',
  state: 'central',
  name: 'UGC NET (Paper 1 General)',
  nameHindi: 'UGC NET',
  namePunjabi: 'ਯੂ.ਜੀ.ਸੀ. ਨੈੱਟ',
  body: 'National Testing Agency (NTA)',
  level: 'Assistant Professor / JRF',
  totalMarks: 100,
  duration: '60 Minutes',
  negativeMarking: false,
  officialWebsite: 'https://ugcnet.nta.nic.in',
  emoji: '🎓',
  color: '#6D28D9',
  sections: [
    { name: 'Teaching & Research Aptitude', nameHindi: 'शिक्षण व शोध अभिरुचि', marks: 20, questions: 10 },
    { name: 'Reading Comprehension & Communication', nameHindi: 'पठन बोध व संचार', marks: 20, questions: 10 },
    { name: 'Reasoning, Data Interpretation & ICT', nameHindi: 'तर्कशक्ति, डेटा व ICT', marks: 20, questions: 10 },
    { name: 'Environment & Higher Education', nameHindi: 'पर्यावरण व उच्च शिक्षा', marks: 40, questions: 20 },
  ],
  subjects: [
    {
      id: 'ugc-net-p1',
      name: 'UGC NET Paper 1',
      nameHindi: 'UGC NET पेपर 1',
      emoji: '🎓',
      chapters: [
        {
          id: 'ugc-net-general',
          name: 'General Aptitude',
          nameHindi: 'सामान्य अभिरुचि',
          topics: [
            {
              id: 'teaching-aptitude',
              name: 'Teaching & Research Aptitude',
              nameHindi: 'शिक्षण व शोध अभिरुचि',
              subtopics: ['Teaching methods, Characteristics of good teacher', 'Research types, Thesis writing, Sampling methods'],
              examQuestions: '10',
              difficulty: 'medium',
            },
            {
              id: 'ict-net',
              name: 'ICT, Data Interpretation & Higher Education',
              nameHindi: 'ICT, डेटा व उच्च शिक्षा',
              subtopics: ['Internet, E-learning, Digital literacy', 'Bar graphs, Pie charts, Tables', 'UGC Act, Universities in India, NAAC'],
              examQuestions: '30',
              difficulty: 'medium',
            },
          ],
        },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 3.6 Army Agniveer
// ---------------------------------------------------------------------------
const ARMY_AGNIVEER_EXAM: Exam = {
  id: 'army-agniveer',
  state: 'central',
  name: 'Army Agniveer (General Duty)',
  nameHindi: 'सेना अग्निवीर',
  namePunjabi: 'ਅਗਨੀਵੀਰ ਆਰਮੀ',
  body: 'Indian Army',
  level: 'General Duty (GD)',
  totalMarks: 100,
  duration: '60 Minutes',
  negativeMarking: 1,
  officialWebsite: 'https://joinindianarmy.nic.in',
  emoji: '⚔️',
  color: '#15803D',
  sections: [
    { name: 'General Knowledge', nameHindi: 'सामान्य ज्ञान', marks: 30, questions: 15 },
    { name: 'General Science', nameHindi: 'सामान्य विज्ञान', marks: 40, questions: 20 },
    { name: 'Mathematics', nameHindi: 'गणित', marks: 20, questions: 10 },
    { name: 'Computer Science', nameHindi: 'कंप्यूटर विज्ञान', marks: 10, questions: 5 },
  ],
  subjects: [
    {
      id: 'agniveer-core',
      name: 'Agniveer Core Subjects',
      nameHindi: 'अग्निवीर मुख्य विषय',
      emoji: '⚔️',
      chapters: [
        {
          id: 'agniveer-general',
          name: 'General Knowledge & Science',
          nameHindi: 'सामान्य ज्ञान व विज्ञान',
          topics: [
            {
              id: 'gk-agniveer',
              name: 'General Knowledge & Current Affairs',
              nameHindi: 'सामान्य ज्ञान व सामयिकी',
              subtopics: ['Indian History, Geography, Polity', 'Defence, awards, sports current affairs'],
              examQuestions: '15',
              difficulty: 'easy',
            },
            {
              id: 'science-agniveer',
              name: 'General Science & Mathematics',
              nameHindi: 'सामान्य विज्ञान व गणित',
              subtopics: ['Physics: Motion, Force, Optics', 'Chemistry: Elements, Acids, Bases', 'Biology: Cell, Nutrition', 'Maths: Percentage, Ratio, Algebra'],
              examQuestions: '30',
              difficulty: 'medium',
            },
          ],
        },
      ],
    },
  ],
};

CENTRAL_EXAMS.push(SSC_CGL_EXAM, CTET_P2_EXAM, UGC_NET_EXAM, ARMY_AGNIVEER_EXAM);

// ---------------------------------------------------------------------------
// 4. HARYANA EXAMS DATABASE
// ---------------------------------------------------------------------------
export const HARYANA_EXAMS: Exam[] = [
  // 4.1 HTET Level 1 (PRT)
  {
    id: 'htet-l1',
    state: 'haryana',
    name: 'HTET Level 1 (PRT)',
    nameHindi: 'HTET स्तर 1',
    namePunjabi: 'ਐਚ.ਟੀ.ਈ.ਟੀ. ਪੱਧਰ 1',
    body: 'Board of School Education Haryana (BSEH)',
    level: 'Primary Teacher (PRT)',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://bseh.org.in',
    emoji: '🏖️',
    color: '#0369A1',
    sections: [
      { name: 'Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Hindi', nameHindi: 'हिंदी', marks: 30, questions: 30 },
      { name: 'English', nameHindi: 'अंग्रेजी', marks: 30, questions: 30 },
      { name: 'Mathematics', nameHindi: 'गणित', marks: 30, questions: 30 },
      { name: 'EVS', nameHindi: 'पर्यावरण अध्ययन', marks: 30, questions: 30 },
    ],
    subjects: [
      {
        id: 'htet-l1-core',
        name: 'HTET Level 1 Core',
        nameHindi: 'HTET स्तर 1 मुख्य विषय',
        emoji: '📖',
        chapters: [
          {
            id: 'htet-l1-cdp',
            name: 'Child Development & Pedagogy',
            nameHindi: 'बाल विकास व शिक्षाशास्त्र',
            topics: [
              {
                id: 'cdp-htet-l1',
                name: 'Child Development, Learning Theories & Pedagogy',
                nameHindi: 'बाल विकास, अधिगम सिद्धांत व शिक्षाशास्त्र',
                subtopics: [
                  'Piaget cognitive stages, Vygotsky ZPD, Kohlberg moral development',
                  'Inclusive education, RTE Act 2009, CCE',
                  'Behaviorism, Constructivism, Motivation theories',
                ],
                examQuestions: '30',
                difficulty: 'medium',
              },
              {
                id: 'haryana-gk-htet',
                name: 'Haryana GK & EVS',
                nameHindi: 'हरियाणा सामान्य ज्ञान व पर्यावरण',
                subtopics: [
                  'Haryana formation (Nov 1966), districts, culture, festivals',
                  'Environmental studies: plants, animals, water, food, shelter',
                  'Basic Mathematics: Number system, shapes, measurement',
                ],
                examQuestions: '60',
                difficulty: 'easy',
              },
            ],
          },
        ],
      },
    ],
  },

  // 4.2 HTET Level 2 (TGT)
  {
    id: 'htet-l2',
    state: 'haryana',
    name: 'HTET Level 2 (TGT)',
    nameHindi: 'HTET स्तर 2',
    namePunjabi: 'ਐਚ.ਟੀ.ਈ.ਟੀ. ਪੱਧਰ 2',
    body: 'Board of School Education Haryana (BSEH)',
    level: 'Trained Graduate Teacher (TGT)',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://bseh.org.in',
    emoji: '🏖️',
    color: '#0E7490',
    sections: [
      { name: 'Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Language Paper I', nameHindi: 'भाषा पेपर I', marks: 30, questions: 30 },
      { name: 'Language Paper II', nameHindi: 'भाषा पेपर II', marks: 30, questions: 30 },
      { name: 'Subject-Specific Paper', nameHindi: 'विषय-विशिष्ट पेपर', marks: 60, questions: 60 },
    ],
    subjects: [
      {
        id: 'htet-l2-core',
        name: 'HTET Level 2 Core',
        nameHindi: 'HTET स्तर 2 मुख्य विषय',
        emoji: '📐',
        chapters: [
          {
            id: 'htet-l2-cdp',
            name: 'Adolescent Development & Subject Pedagogy',
            nameHindi: 'किशोर विकास व विषय शिक्षाशास्त्र',
            topics: [
              {
                id: 'cdp-htet-l2',
                name: 'Adolescent Development & Pedagogy',
                nameHindi: 'किशोरावस्था विकास व शिक्षाशास्त्र',
                subtopics: [
                  'Adolescent characteristics, Erik Erikson stages',
                  'Formative & summative assessment, NCF 2005',
                  'Haryana school education policies',
                ],
                examQuestions: '30',
                difficulty: 'medium',
              },
              {
                id: 'subject-specific-htet-l2',
                name: 'Subject-Specific Domain Knowledge',
                nameHindi: 'विषय-विशिष्ट ज्ञान',
                subtopics: [
                  'Mathematics: Algebra, Geometry, Trigonometry, Statistics',
                  'Science: Physics, Chemistry, Biology fundamentals',
                  'Social Studies: History, Geography, Civics, Economics',
                ],
                examQuestions: '60',
                difficulty: 'hard',
              },
            ],
          },
        ],
      },
    ],
  },
  ...HARYANA_EXPANSION_EXAMS,
];

// ============================================================
// EXPORTS & HELPERS
// ============================================================
function mergeExamCatalog(exams: Exam[]): Exam[] {
  const merged = new Map<string, Exam>();
  for (const exam of exams) {
    const previous = merged.get(exam.id);
    if (!previous) { merged.set(exam.id, { ...exam, subjects: [...exam.subjects] }); continue; }
    for (const subject of exam.subjects) {
      const existing = previous.subjects.find(s => s.id === subject.id);
      if (!existing) { previous.subjects.push(subject); continue; }
      existing.chapters = [...existing.chapters];
      for (const chapter of subject.chapters) {
        const current = existing.chapters.find(c => c.id === chapter.id);
        if (!current) { existing.chapters.push(chapter); continue; }
        current.topics = [...current.topics];
        for (const topic of chapter.topics) {
          const known = current.topics.find(t => t.id === topic.id);
          if (!known) current.topics.push(topic);
          else known.subtopics = Array.from(new Set([...known.subtopics, ...topic.subtopics]));
        }
      }
    }
  }
  return Array.from(merged.values());
}
export const ALL_EXAMS: Record<State, Exam[]> = {
  punjab: mergeExamCatalog([...PUNJAB_EXAMS, ...PUNJAB_ADDITIONAL_EXAMS]),
  rajasthan: mergeExamCatalog([...RAJASTHAN_EXAMS, ...RAJASTHAN_ADDITIONAL_EXAMS]),
  haryana: mergeExamCatalog(HARYANA_EXAMS),
  delhi: mergeExamCatalog(DELHI_EXAMS),
  central: mergeExamCatalog(CENTRAL_EXAMS).map(exam => exam.id === 'ctet-paper1' ? { ...exam, subjects: CTET_PRIMARY_SUBJECTS } : exam),
  defence: mergeExamCatalog(DEFENCE_EXAMS),
};

export const EXAMS = ALL_EXAMS;

export const STATE_INFO: Record<State, { name: string; nameHindi: string; emoji: string; color: string; bodies: string[] }> = {
  punjab: {
    name: 'Punjab',
    nameHindi: 'पंजाब',
    emoji: '🌾',
    color: '#4338CA',
    bodies: ['PSSSB', 'PPSC', 'ERB Punjab', 'Punjab Police', 'SCERT'],
  },
  rajasthan: {
    name: 'Rajasthan',
    nameHindi: 'राजस्थान',
    emoji: '🏜️',
    color: '#EF4444',
    bodies: ['RPSC', 'RSMSSB/RSSB', 'BSER', 'Rajasthan Police'],
  },
  haryana: {
    name: 'Haryana',
    nameHindi: 'हरियाणा',
    emoji: '⚡',
    color: '#059669',
    bodies: ['BSEH Bhiwani', 'HSSC Panchkula', 'Haryana Police'],
  },
  delhi: {
    name: 'Delhi & CAPF',
    nameHindi: 'दिल्ली पुलिस व अर्धसैनिक बल',
    emoji: '👮',
    color: '#0284c7',
    bodies: ['Delhi Police', 'SSC', 'MHA / CAPF'],
  },
  central: {
    name: 'Central Govt',
    nameHindi: 'केंद्र सरकार',
    emoji: '🏛️',
    color: '#10B981',
    bodies: ['SSC', 'CBSE', 'NTA', 'Railway', 'Banking'],
  },
  defence: {
    name: 'Army & Defence',
    nameHindi: 'भारतीय सेना',
    emoji: '🎖️',
    color: '#ca8a04',
    bodies: ['Indian Army', 'Indian Air Force', 'Indian Navy'],
  },
};

export function getExamById(examId: string): Exam | undefined {
  for (const state of Object.keys(ALL_EXAMS) as State[]) {
    const found = ALL_EXAMS[state].find(e => e.id === examId);
    if (found) return found;
  }
  // Safe resolution for legacy aliases
  const legacyMap: Record<string, string> = {
    'punjab-master-cadre': 'punjab-master-cadre-sst',
    'master-cadre-sst': 'punjab-master-cadre-sst',
    'master-cadre': 'punjab-master-cadre-sst',
    'reet-level2': 'reet-level2-sst',
    'reet-l2': 'reet-level2-sst',
    'ett-punjab': 'punjab-ett',
    'clerk-psssb': 'punjab-clerk',
  };
  const mapped = legacyMap[examId];
  if (mapped) {
    for (const state of Object.keys(ALL_EXAMS) as State[]) {
      const found = ALL_EXAMS[state].find(e => e.id === mapped);
      if (found) return found;
    }
  }
  return undefined;
}
