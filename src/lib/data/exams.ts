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
export const PUNJAB_EXAMS: Exam[] = [
  // 1.1 Punjab Master Cadre
  {
    id: 'punjab-master-cadre',
    state: 'punjab',
    name: 'Punjab Master Cadre',
    nameHindi: 'पंजाब मास्टर कैडर',
    namePunjabi: 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ',
    body: 'Education Recruitment Board (ERB), Punjab',
    level: 'TGT - Classes 6 to 10',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://educationrecruitmentboard.com',
    emoji: '🏫',
    color: '#4338CA',
    sections: [
      { name: 'Paper A - Compulsory Punjabi Qualifying', nameHindi: 'अनिवार्य पंजाबी पात्रता (Paper A)', marks: 50, questions: 50 },
      { name: 'Paper B - Subject Domain Specialization', nameHindi: 'विषय डोमेन विशेषज्ञता (Paper B)', marks: 150, questions: 150 },
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
                name: 'History of Punjab & Sikh Gurus',
                nameHindi: 'पंजाब का इतिहास व 10 सिख गुरु',
                namePunjabi: 'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ ਤੇ 10 ਸਿੱਖ ਗੁਰੂ',
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
                name: 'Geography of Punjab: Relief, Rivers & Soils',
                nameHindi: 'पंजाब का भूगोल: नदियां, मिट्टी व जलवायु',
                namePunjabi: 'ਪੰਜਾਬ ਦਾ ਭੂਗੋਲ ਤੇ ਦਰਿਆ',
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
                name: 'Physical Geography of India & Physiography',
                nameHindi: 'भारत का भौतिक भूगोल एवं भू-आकृतिक प्रदेश',
                namePunjabi: 'ਭਾਰਤ ਦਾ ਭੌਤਿਕ ਭੂਗੋਲ',
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
            ],
          },
          {
            id: 'economics',
            name: 'Economics',
            nameHindi: 'अर्थशास्त्र',
            namePunjabi: 'ਅਰਥਸ਼ਾਸਤਰ',
            topics: [
              {
                id: 'indian-economy',
                name: 'Macroeconomics, Banking & 1991 Reforms',
                nameHindi: 'समष्टि अर्थशास्त्र, बैंकिंग एवं 1991 सुधार',
                namePunjabi: 'ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ',
                subtopics: [
                  'National Income Aggregates: GDP, GNP, NDP, NNP (Factor Cost vs Market Price), Per capita income',
                  'NNP at Factor Cost is the official measure of National Income',
                  '1991 Economic Reforms: LPG (Liberalisation, Privatisation, Globalisation), Narsimham committee',
                  'NITI Aayog: Formed 1 Jan 2015 replacing Planning Commission, cooperative federalism',
                  'Reserve Bank of India (RBI): Est. 1 April 1935, nationalised 1 Jan 1949, Monetary policy (Repo rate, CRR, SLR)',
                  'Inflation: Demand-pull vs Cost-push, CPI vs WPI indicators, target 4% (±2%)',
                  'Agriculture Economics: Minimum Support Price (MSP recommended by CACP for 22 crops), PDS, FCI',
                ],
                examQuestions: '8-10',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },

      // Subject 2: Science (Medical & Non-Medical)
      {
        id: 'science',
        name: 'Science (Physics, Chemistry, Biology)',
        nameHindi: 'विज्ञान (भौतिकी, रसायन, जीव विज्ञान)',
        namePunjabi: 'ਵਿਗਿਆਨ',
        emoji: '🔬',
        chapters: [
          {
            id: 'physics',
            name: 'Physics',
            nameHindi: 'भौतिक विज्ञान',
            namePunjabi: 'ਭੌਤਿਕ ਵਿਗਿਆਨ',
            topics: [
              {
                id: 'physics-concepts',
                name: 'Mechanics, Optics, Thermodynamics & Electricity',
                nameHindi: 'यांत्रिकी, प्रकाशिकी, ऊष्मागतिकी व विद्युत',
                namePunjabi: 'ਮਕੈਨਿਕਸ ਤੇ ਬਿਜਲੀ',
                subtopics: [
                  'Newton Three Laws of Motion, Momentum conservation, Impulse, Friction',
                  'Universal Law of Gravitation: G = 6.674×10⁻¹¹ Nm²/kg², g = 9.8 m/s², Escape velocity 11.2 km/s',
                  'Work, Energy & Power: Kinetic & Potential energy, 1 HP = 746 Watts',
                  'Optics: Mirror formula (1/f = 1/v + 1/u), Lens formula (1/f = 1/v - 1/u), Power in Dioptres',
                  'Defects of vision: Myopia (concave lens), Hypermetropia (convex lens), Presbyopia',
                  'Electricity: Ohm Law (V=IR), Series and Parallel combinations, Joule heating law (H=I²Rt)',
                ],
                examQuestions: '25-30',
                difficulty: 'medium',
              },
            ],
          },
          {
            id: 'chemistry',
            name: 'Chemistry',
            nameHindi: 'रसायन विज्ञान',
            namePunjabi: 'ਰਸਾਇਣ ਵਿਗਿਆਨ',
            topics: [
              {
                id: 'chemistry-concepts',
                name: 'Periodic Table, Chemical Bonding & Carbon',
                nameHindi: 'आवर्त सारणी, रासायनिक आबंधन व कार्बन',
                namePunjabi: 'ਕੈਮਿਸਟਰੀ',
                subtopics: [
                  'Modern Periodic Table: Henry Moseley (1913), Atomic number basis, 7 periods, 18 groups',
                  'Periodic trends: Atomic radius, Ionization enthalpy, Electronegativity (Fluorine highest 4.0)',
                  'Chemical Bonding: Ionic bonds (electrovalent), Covalent bonds, Lewis structures',
                  'Acids, Bases & Salts: pH scale (Sorensen 1909), Human blood pH 7.35-7.45',
                  'Carbon and its Allotropes: Diamond (sp3, hardest), Graphite (sp2, conductor), Fullerenes C60',
                  'Hydrocarbons: Alkanes (CnH2n+2), Alkenes (CnH2n), Alkynes (CnH2n-2)',
                ],
                examQuestions: '25-30',
                difficulty: 'medium',
              },
            ],
          },
          {
            id: 'biology',
            name: 'Biology (Botany & Zoology)',
            nameHindi: 'जीव विज्ञान (वनस्पति व जंतु)',
            namePunjabi: 'ਜੀਵ ਵਿਗਿਆਨ',
            topics: [
              {
                id: 'biology-concepts',
                name: 'Cell Biology, Genetics & Human Physiology',
                nameHindi: 'कोशिका, आनुवंशिकी व मानव शरीर क्रिया विज्ञान',
                namePunjabi: 'ਬਾਇਓਲੋਜੀ',
                subtopics: [
                  'Cell Theory: Schleiden and Schwann, Virchow "Omnis cellula-e-cellula"',
                  'Cell Organelles: Mitochondria (Powerhouse, ATP synthesis), Ribosomes (Protein factory), Lysosomes (Suicidal bags)',
                  'Mendel Laws of Genetics: Pisum sativum experiments, Monohybrid ratio 3:1, Dihybrid ratio 9:3:3:1',
                  'DNA Double Helix: Watson and Crick (1953), Base pairing (A=T, G=C)',
                  'Human Physiology: Heart SA Node pacemaker, Blood groups (O- universal donor, AB+ universal recipient)',
                  'Excretory unit: Nephron in kidney; Nervous unit: Neuron (longest cell in body)',
                ],
                examQuestions: '25-30',
                difficulty: 'medium',
              },
            ],
          },
        ],
      },

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
    ],
  },

  // 1.2 Punjab Clerk (PSSSB)
  {
    id: 'punjab-clerk',
    state: 'punjab',
    name: 'Punjab Clerk (PSSSB)',
    nameHindi: 'पंजाब क्लर्क (PSSSB)',
    namePunjabi: 'ਪੰਜਾਬ ਕਲਰਕ (PSSSB)',
    body: 'Punjab Subordinate Services Selection Board (PSSSB)',
    level: 'Clerk / Clerk IT / Clerk Accounts',
    totalMarks: 100,
    duration: '2 Hours + Typing Test',
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
    subjects: [
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
                name: 'Computer Knowledge & IT Proficiency',
                nameHindi: 'कंप्यूटर ज्ञान एवं सूचना प्रौद्योगिकी',
                namePunjabi: 'ਕੰਪਿਊਟਰ ਗਿਆਨ',
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
                name: 'Punjab GK, History & Culture',
                nameHindi: 'पंजाब सामान्य ज्ञान व संस्कृति',
                namePunjabi: 'ਪੰਜਾਬ ਜੀ.ਕੇ.',
                subtopics: ['10 Sikh Gurus', 'Maharaja Ranjit Singh', 'Borders and Geography', 'Culture and Festivals'],
                examQuestions: '15-20',
                difficulty: 'medium',
              },
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
    body: 'Board of Secondary Education, Rajasthan (BSER / RBSE)',
    level: 'Classes 1 to 5',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://rajeduboard.rajasthan.gov.in',
    emoji: '🏜️',
    color: '#DC2626',
    sections: [
      { name: 'Child Development & Pedagogy (CDP)', nameHindi: 'बाल विकास एवं शिक्षण विधियां', marks: 30, questions: 30 },
      { name: 'Language I (Hindi / Sanskrit)', nameHindi: 'भाषा I', marks: 30, questions: 30 },
      { name: 'Language II (English / Hindi)', nameHindi: 'भाषा II', marks: 30, questions: 30 },
      { name: 'Mathematics', nameHindi: 'गणित', marks: 30, questions: 30 },
      { name: 'Environmental Studies (EVS) & Rajasthan GK', nameHindi: 'पर्यावरण अध्ययन व राजस्थान सामान्य ज्ञान', marks: 30, questions: 30 },
    ],
    subjects: [
      {
        id: 'reet-pedagogy',
        name: 'REET Level 1 Core',
        nameHindi: 'रीट लेवल 1 मुख्य विषय',
        emoji: '📖',
        chapters: [
          {
            id: 'evs-cdp',
            name: 'Child Development & Rajasthan Heritage',
            nameHindi: 'बाल विकास व राजस्थान विरासत',
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
                examQuestions: '20-25',
                difficulty: 'medium',
              },
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
    ],
  },

  // 2.2 REET Level 2 (Classes 6-8)
  {
    id: 'reet-level2',
    state: 'rajasthan',
    name: 'REET Level 2 (Upper Primary)',
    nameHindi: 'रीट लेवल 2 (कक्षा 6 से 8)',
    body: 'Board of Secondary Education, Rajasthan (BSER / RBSE)',
    level: 'Classes 6 to 8',
    totalMarks: 150,
    duration: '2 Hours 30 Minutes',
    negativeMarking: false,
    officialWebsite: 'https://rajeduboard.rajasthan.gov.in',
    emoji: '🏜️',
    color: '#B91C1C',
    sections: [
      { name: 'Child Development & Pedagogy', nameHindi: 'बाल विकास व शिक्षाशास्त्र', marks: 30, questions: 30 },
      { name: 'Language I', nameHindi: 'भाषा I', marks: 30, questions: 30 },
      { name: 'Language II', nameHindi: 'भाषा II', marks: 30, questions: 30 },
      { name: 'Subject Domain (Science & Math OR Social Studies)', nameHindi: 'विषय डोमेन (विज्ञान-गणित या सामाजिक)', marks: 60, questions: 60 },
    ],
    subjects: [
      {
        id: 'reet-l2-domain',
        name: 'REET Level 2 Specialization',
        nameHindi: 'रीट लेवल 2 विशेषज्ञता',
        emoji: '📐',
        chapters: [
          {
            id: 'l2-subjects',
            name: 'Subject Specialization',
            nameHindi: 'विषय विशेषज्ञता',
            topics: [
              {
                id: 'child-development-pedagogy',
                name: 'Adolescent & Child Development Pedagogy',
                nameHindi: 'किशोरावस्था व बाल विकास शिक्षाशास्त्र',
                subtopics: ['Cognitive and moral development, Learning theories, Motivation, Assessment'],
                examQuestions: '30',
                difficulty: 'medium',
              },
              {
                id: 'rajasthan-gk-heritage',
                name: 'Rajasthan History, Art, Culture & Geography',
                nameHindi: 'राजस्थान का इतिहास व कला-संस्कृति',
                subtopics: ['Integration, 1857 Revolt, Forts, Folk deities, Aravalli and Thar desert'],
                examQuestions: '20',
                difficulty: 'medium',
              },
              {
                id: 'physics-concepts',
                name: 'Science Specialization: Physics & Mechanics',
                nameHindi: 'विज्ञान विशेषज्ञता: भौतिकी',
                subtopics: ['Newton laws, Gravitation, Optics, Mirrors and Lenses, Ohm law'],
                examQuestions: '15',
                difficulty: 'medium',
              },
              {
                id: 'biology-concepts',
                name: 'Science Specialization: Cell & Human Physiology',
                nameHindi: 'विज्ञान विशेषज्ञता: जीव विज्ञान',
                subtopics: ['Cell structure, Photosynthesis, Blood groups, Genetics Mendel laws'],
                examQuestions: '15',
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
  { id: 'punjab', name: 'Punjab', nameHindi: 'पंजाब', namePunjabi: 'ਪੰਜਾਬ', icon: '🌾', tagline: 'Master Cadre, ETT 5994, PSSSB Clerk, Police, Patwari, PSTET, Lecturer Cadre', color: 'from-amber-600 to-orange-700' },
  { id: 'rajasthan', name: 'Rajasthan', nameHindi: 'राजस्थान', namePunjabi: 'ਰਾਜਸਥਾਨ', icon: '🏜️', tagline: 'REET L1/L2, 3rd Grade, Patwar, Police SI & Constable', color: 'from-rose-600 to-pink-700' },
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
  return undefined;
}
