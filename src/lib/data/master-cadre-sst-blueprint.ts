export interface MasterCadreYearlyPattern {
    yearCycle: string;
    notificationPostCode: string;
    conductingBody: string;
    totalQuestions: number;
    totalMarks: number;
    durationMinutes: number;
    negativeMarking: string;
    subjectCombinationRule: string;
    qualifyingPaperA: string;
    verificationStatus: 'official-archived' | 'reported-verify-before-publish';
    officialSourceUrl: string;
}

export interface BlueprintTrustLevelRow {
    part: string;
    source: string;
    trustGuidance: string;
    statusBadge: 'Verify on ERB' | 'Draft / Textbook-Validated' | 'Method & Schema Only' | 'Active Pipeline';
}

export interface BlueprintDomainMapping {
    domainId: 'polity' | 'economics' | 'history' | 'geography' | 'punjabi-paper-a';
    domainTitle: { en: string; pa: string; hi: string };
    officialHeadings: string[];
    topics: Array<{
        topicId: string;
        officialHeadingCovered: string;
        levelProgression: {
            basic: string;
            intermediate: string;
            advanced: string;
        };
    }>;
}

export const MASTER_CADRE_TRUST_LEVELS: BlueprintTrustLevelRow[] = [
    {
        part: 'Section 1: Exam Pattern (Per-Year Database)',
        source: 'Summary of Education Recruitment Board (ERB) Punjab notification & archival recruitment notifications (2016, 2017, 2020, 2022, 2026)',
        trustGuidance: 'Verify against the official notification and syllabus PDF on educationrecruitmentboard.com before each recruitment cycle.',
        statusBadge: 'Verify on ERB'
    },
    {
        part: 'Section 2: Official Syllabus Headings',
        source: 'ERB Punjab Master Cadre Social Science (SST) official syllabus headings (Polity, Geography, History, Economics 16 items)',
        trustGuidance: 'Headings are broad; depth is anchored in NCERT (Classes 6–12), PSEB (Classes 9–12), and Graduation-level standard texts.',
        statusBadge: 'Verify on ERB'
    },
    {
        part: 'Section 3: Expanded B → I → A Topic Tree',
        source: 'Structured expansion from NCERT, PSEB & Graduation-level syllabus into Basic (Class 6–8), Intermediate (Class 9–10) & Advanced (Class 11–12 / Graduation)',
        trustGuidance: 'Every topic below is wired to a trilingual B → I → A deep-dive lesson and a dedicated Topic Mini Mock.',
        statusBadge: 'Draft / Textbook-Validated'
    },
    {
        part: 'Section 4: 20-Year Pattern Analysis & PYQ Safeguard',
        source: 'Schema & methodology only — zero invented or memory-recalled past-paper questions or fabricated historical percentages',
        trustGuidance: 'Never let an AI "recall" old exam questions from memory. Use scanned papers + official answer keys only; authored practice items are explicitly tagged as authored-original.',
        statusBadge: 'Method & Schema Only'
    },
    {
        part: 'Sections 5–6: B → I → A Content Pipeline & Trilingual Mock Engine',
        source: 'ExamSathi Curriculum Architecture (English, Punjabi Gurmukhi, Hindi Devanagari)',
        trustGuidance: 'Each topic includes B → I → A study notes, comparison tables, worked examples, misconceptions, flashcards, and 10+ B/I/A MCQs.',
        statusBadge: 'Active Pipeline'
    }
];

export const MASTER_CADRE_SST_PATTERNS_BY_YEAR: MasterCadreYearlyPattern[] = [
    {
        yearCycle: '2026 (Reported / Latest Cycle)',
        notificationPostCode: 'ERB Master Cadre SST (Verify Notification)',
        conductingBody: 'Education Recruitment Board (ERB), Dept. of School Education, Punjab',
        totalQuestions: 150,
        totalMarks: 150,
        durationMinutes: 150,
        negativeMarking: 'None (0 negative marking; 1 mark per MCQ)',
        subjectCombinationRule: 'Candidates opt for 2 subjects out of 4 (History, Polity, Geography, Economics) × 75 MCQs each = 150 MCQs. ExamSathi provides complete coverage of all 4 subjects.',
        qualifyingPaperA: 'Compulsory Punjabi Paper-A (50 MCQs, 50 Marks, minimum 50% = 25 marks qualifying as per Punjab Govt rules)',
        verificationStatus: 'reported-verify-before-publish',
        officialSourceUrl: 'https://educationrecruitmentboard.com/'
    },
    {
        yearCycle: '2022 (4161 Master Cadre Cycle)',
        notificationPostCode: 'Master Cadre 4161 (Exam held Aug 2022)',
        conductingBody: 'Education Recruitment Board (ERB), Punjab',
        totalQuestions: 150,
        totalMarks: 150,
        durationMinutes: 150,
        negativeMarking: 'None (0 negative marking)',
        subjectCombinationRule: 'Any 2 subjects out of History, Political Science, Geography, Economics (75 marks each = 150 marks)',
        qualifyingPaperA: 'Punjabi matriculation compulsory; separate Paper-A introduced in subsequent state notifications',
        verificationStatus: 'official-archived',
        officialSourceUrl: 'https://educationrecruitmentboard.com/'
    },
    {
        yearCycle: '2020 (3704 Master Cadre Cycle)',
        notificationPostCode: 'Master Cadre 3704 (Exam held Dec 2020 / Jan 2021)',
        conductingBody: 'Education Recruitment Board (ERB), Punjab',
        totalQuestions: 150,
        totalMarks: 150,
        durationMinutes: 150,
        negativeMarking: 'None (0 negative marking)',
        subjectCombinationRule: 'Any 2 subjects out of History, Political Science, Geography, Economics (75 marks each = 150 marks)',
        qualifyingPaperA: 'Punjabi at Matriculation level mandatory',
        verificationStatus: 'official-archived',
        officialSourceUrl: 'https://educationrecruitmentboard.com/'
    },
    {
        yearCycle: '2016–2017 (3582 & 6060 Cycles)',
        notificationPostCode: 'Master Cadre 3582 / 6060',
        conductingBody: 'Directorate of Education Recruitment Board, Punjab',
        totalQuestions: 150,
        totalMarks: 150,
        durationMinutes: 150,
        negativeMarking: 'None (0 negative marking)',
        subjectCombinationRule: '2 subjects × 75 questions each = 150 questions',
        qualifyingPaperA: 'Punjabi at Matriculation level mandatory',
        verificationStatus: 'official-archived',
        officialSourceUrl: 'https://educationrecruitmentboard.com/'
    }
];

export const MASTER_CADRE_SST_BLUEPRINT_DOMAINS: BlueprintDomainMapping[] = [
    {
        domainId: 'polity',
        domainTitle: {
            en: '1. Civics / Political Science (All 15 Official ERB Headings)',
            pa: '1. ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ / ਰਾਜਨੀਤੀ ਵਿਗਿਆਨ (ਸਾਰੇ 15 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            hi: '1. नागरिक शास्त्र / राजनीति विज्ञान (सभी 15 आधिकारिक ERB विषय)'
        },
        officialHeadings: [
            'Centre Govt',
            'State Level Govt',
            'Foreign Policy',
            'Citizenship',
            'Organs of Government',
            'Fundamental Rights',
            'Courts',
            'UNO',
            'Indian Federal System',
            'Election Procedure',
            'Constitution in Detail',
            'Democracy at the Rural and Urban Level',
            'Theories',
            'Party System in India',
            'Concepts'
        ],
        topics: [
            {
                topicId: 'sst-polity-concepts-theories',
                officialHeadingCovered: 'Concepts; Theories',
                levelProgression: {
                    basic: 'State (4 Elements) vs Nation vs Government; Democracy, Secularism & Nationalism',
                    intermediate: 'Liberty (Berlin, Mill Harm Principle), Equality, Justice (Rawls), Rights & Sovereignty (Austin vs Pluralists)',
                    advanced: 'Liberalism, Socialism, Marxism (Gramsci), Gandhism, Ambedkar’s Social Democracy & Thinkers (Plato to Kautilya)'
                }
            },
            {
                topicId: 'fundamental-rights',
                officialHeadingCovered: 'Constitution in Detail; Fundamental Rights',
                levelProgression: {
                    basic: 'Constituent Assembly, Preamble ideals, 6 Fundamental Rights & 11 Fundamental Duties',
                    intermediate: 'Sources, 12 Schedules, Articles 12–35, 5 Writs (Art 32) & DPSPs (Arts 36–51)',
                    advanced: 'Major Amendments, Basic Structure Doctrine (Kesavananda Bharati 1973, Minerva Mills 1980) & FR–DPSP balance'
                }
            },
            {
                topicId: 'sst-citizenship-election-parties',
                officialHeadingCovered: 'Citizenship; Election Procedure; Party System in India',
                levelProgression: {
                    basic: 'Single Citizenship, Universal Adult Franchise (Art 326, 61st Amendment), EVM/VVPAT & Political Parties',
                    intermediate: 'Part II (Arts 5–11), Citizenship Act 1955, OCI, Election Commission (Art 324), Delimitation & NOTA',
                    advanced: 'RPA 1950 vs 1951, Anti-Defection Law (10th Schedule, 52nd & 91st Amendments, Kihoto Hollohan) & ECI Party Recognition Criteria (Para 6A/6B)'
                }
            },
            {
                topicId: 'parliament',
                officialHeadingCovered: 'Organs of Government; Centre Govt',
                levelProgression: {
                    basic: 'President, Vice-President, Prime Minister, Council of Ministers, Lok Sabha & Rajya Sabha',
                    intermediate: 'Presidential Election & Impeachment (Art 61), Money Bill (Art 110), Joint Sitting (Art 108) & Budget Process',
                    advanced: 'Parliamentary Committees (PAC, Estimates, COPU), Devices, Privileges & Cabinet Responsibility (Arts 74–75)'
                }
            },
            {
                topicId: 'sst-state-govt-punjab-local',
                officialHeadingCovered: 'State Level Govt; Indian Federal System; Democracy at the Rural and Urban Level',
                levelProgression: {
                    basic: 'Three Tiers of Govt & Punjab Legislature Profile (117 Vidhan Sabha seats, 34 SC reserved, 13 LS, 7 RS)',
                    intermediate: 'Governor (Art 200/213), CM, Seventh Schedule Lists (42nd Amendment), Art 249, Finance Commission (Art 280), GST Council (Art 279A) & Emergencies (Arts 352, 356, 360)',
                    advanced: 'Punjab Panchayati Raj Act 1994 (Hari/Sawani Gram Sabha, 50% Women Reservation 2017), 73rd/74th Amendments, Sarkaria & Punchhi Commissions, S.R. Bommai (1994)'
                }
            },
            {
                topicId: 'judiciary',
                officialHeadingCovered: 'Courts',
                levelProgression: {
                    basic: 'Integrated Judicial Pyramid: Supreme Court, High Courts & District/Subordinate Courts',
                    intermediate: 'SC (Arts 124–147: Original, Appellate, Advisory, Writ Jurisdiction) & Shared Punjab & Haryana High Court (Arts 214–231)',
                    advanced: 'Collegium System (Judges Cases), Judicial Review, PIL (Bhagwati & Iyer), Lok Adalats & Tribunals (Arts 323A/323B)'
                }
            },
            {
                topicId: 'sst-foreign-policy-uno',
                officialHeadingCovered: 'Foreign Policy; UNO',
                levelProgression: {
                    basic: 'Article 51 (DPSP), Panchsheel (1954), Non-Aligned Movement (1961) & UN Founding (24 Oct 1945)',
                    intermediate: '6 UN Organs (UNGA, UNSC P5, ECOSOC, Trusteeship, ICJ at The Hague, Secretariat), UN Agencies, Act East, Gujral Doctrine & Nuclear Doctrine (NFU)',
                    advanced: 'Bilateral Treaties (Indus Waters 1960, Tashkent 1966, Indo-Soviet 1971, Shimla 1972, LBA 100th Amendment) & SAARC, BIMSTEC, SCO, BRICS, QUAD, G20'
                }
            }
        ]
    },
    {
        domainId: 'economics',
        domainTitle: {
            en: '2. Economics (All 16 Official ERB Headings)',
            pa: '2. ਅਰਥਸ਼ਾਸਤਰ (ਸਾਰੇ 16 ਸਰਕਾਰੀ ERB ਵਿਸ਼ੇ)',
            hi: '2. अर्थशास्त्र (सभी 16 आधिकारिक ERB विषय)'
        },
        officialHeadings: [
            '1. Consumer equilibrium',
            '2. Demand, market demand, price elasticity',
            '3. National income and aggregates',
            '4. Determination of income and employment (AD, AS, MPS, APS, MPC, APC)',
            '5. Balance of trade and BoP',
            '6. Micro vs Macro',
            '7. Producer behaviour (production, cost, revenue, supply, producer equilibrium)',
            '8. Forms of market',
            '9. Price determination under perfect competition',
            '10. Money and banking',
            '11. Government budget and economy',
            '12. Investment and multiplier',
            '13. GDP, GNP, NDP, NNP',
            '14. Types of economics and infrastructure',
            '15. Indian economy and Punjab economy',
            '16. Economic planning in India'
        ],
        topics: [
            {
                topicId: 'sst-econ-micro-consumer-elasticity',
                officialHeadingCovered: 'Headings 1, 2, 6 & 14: Micro vs Macro; Types of Economies & Infrastructure; Consumer Equilibrium; Demand & Price Elasticity',
                levelProgression: {
                    basic: 'Ragnar Frisch (1933), Scarcity, Central Problems, Concave PPC, Capitalist/Socialist/Mixed Economies & Economic vs Social Infrastructure',
                    intermediate: 'Cardinal Utility (TU/MU, Law of DMU, MU_x/P_x = MU_y/P_y), Ordinal Indifference Curve (MRS_xy = P_x/P_y) & Law of Demand',
                    advanced: 'Giffen vs Veblen Goods, 5 Degrees of Price Elasticity, Point/Arc Elasticity & Marshall’s Total Outlay Method'
                }
            },
            {
                topicId: 'sst-econ-producer-cost-market',
                officialHeadingCovered: 'Headings 7, 8 & 9: Producer Behaviour (Production, Cost, Revenue, Supply, Equilibrium); Forms of Market; Price Determination',
                levelProgression: {
                    basic: '4 Factors of Production & Rewards, Fixed vs Variable Factors, Concept of Cost, Revenue & Supply',
                    intermediate: 'Law of Variable Proportions (3 Stages), Cost Curves (Rectangular Hyperbola AFC, U-shaped AVC/AC/MC), Producer Equilibrium (MR = MC) & 4 Market Forms',
                    advanced: 'Cobb-Douglas Returns to Scale, Break-Even (P = Min AC) vs Shut-Down (P = Min AVC), Pigouvian Price Discrimination, Sweezy Kinked Demand Curve & Price Ceiling/Floor (MSP)'
                }
            },
            {
                topicId: 'sst-econ-keynesian-multiplier',
                officialHeadingCovered: 'Headings 3, 4, 12 & 13: National Income & Aggregates (GDP, GNP, NDP, NNP); AD, AS, MPC, MPS, APC, APS; Investment & Multiplier',
                levelProgression: {
                    basic: 'Circular Flow of Income, Stock vs Flow, Final vs Intermediate Goods & Domestic vs National Territory',
                    intermediate: '8 Aggregates (GDP_MP to NNP_FC = National Income), 3 Measurement Methods & Keynesian APC, APS, MPC, MPS (APC+APS=1, MPC+MPS=1)',
                    advanced: 'Two-Sector AD=AS & S=I Equilibrium, Investment Multiplier k = 1/(1-MPC) = 1/MPS, Inflationary vs Deflationary Gap & Paradox of Thrift'
                }
            },
            {
                topicId: 'sst-econ-money-budget-bop-punjab',
                officialHeadingCovered: 'Headings 5, 10, 11, 15 & 16: Money & Banking; Govt Budget; BoT & BoP; Economic Planning; Indian & Punjab Economy',
                levelProgression: {
                    basic: 'Functions of Money, RBI (1935/1949), Govt Budget Basics, Exports/Imports, Five-Year Plans & Punjab as Granary of India',
                    intermediate: 'Money Supply (M_1–M_4), Credit Creation (1/LRR), RBI Policy Tools, Revenue/Fiscal/Primary Deficits, BoT vs BoP & NITI Aayog (2015)',
                    advanced: 'Economy of Punjab: Green Revolution (PAU 1962), APMC Mandi System (1961), MSP Procurement, Johl Committees (1986/2002), Industrial Clusters & Fiscal Challenges'
                }
            },
            {
                topicId: 'indian-economy',
                officialHeadingCovered: 'Heading 15 Synthesis: Indian Economy Sectors, Poverty, Unemployment, Inflation & Human Development',
                levelProgression: {
                    basic: 'Primary, Secondary & Tertiary Sectors, Rural vs Urban Unemployment & Public Distribution System',
                    intermediate: '1991 LPG Reforms, Disguised Unemployment, Poverty Committees (Tendulkar, Rangarajan) & WPI vs CPI Inflation',
                    advanced: 'Multidimensional Poverty Index (MPI), Phillips Curve, Fiscal Responsibility (FRBM) & UNDP Human Development Index'
                }
            }
        ]
    },
    {
        domainId: 'history',
        domainTitle: {
            en: '3. History (History of Punjab, History of India & World History)',
            pa: '3. ਇਤਿਹਾਸ (ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ, ਭਾਰਤ ਦਾ ਇਤਿਹਾਸ ਅਤੇ ਵਿਸ਼ਵ ਇਤਿਹਾਸ)',
            hi: '3. इतिहास (पंजाब का इतिहास, भारत का इतिहास एवं विश्व इतिहास)'
        },
        officialHeadings: ['History of Punjab', 'History of India', 'World History'],
        topics: [
            {
                topicId: 'punjab-ancient-medieval',
                officialHeadingCovered: 'History of Punjab: Ancient & Turko-Afghan/Mughal/Sufi Punjab',
                levelProgression: {
                    basic: 'Names of Punjab (Sapta Sindhu to Panj-Ab), Khyber Pass Gateway & Rigvedic Rivers',
                    intermediate: 'Harappan Sites in Punjab (Ropar, Sanghol, Rohira, Sunet, Bara), Battle of Ten Kings & Alexander vs Porus (Hydaspes 326 BCE)',
                    advanced: 'Hindushahi Dynasty, Ghaznavid/Ghurid Invasions, Sultanate/Mughal Subah of Lahore (Kalanaur 1556) & Sufi Saints (Baba Farid, Mian Mir, Shah Hussain, Bulleh Shah)'
                }
            },
            {
                topicId: 'guru-nanak-dev-ji',
                officialHeadingCovered: 'History of Punjab: Sri Guru Nanak Dev Ji (1469–1539)',
                levelProgression: {
                    basic: 'Birth at Talwandi (1469), Sultanpur Lodhi Modikhana, Kali Bein Enlightenment & Three Pillars',
                    intermediate: 'Four Udasis (Directional Routes, Rulers & Dialogues) and Foundation of Kartarpur Sahib (1521)',
                    advanced: '974 Hymns in 19 Ragas (Japji Sahib, Asa di Vaar, Babur Vani, Sidh Gosht) & Institutions of Sangat, Pangat and Dharamsal'
                }
            },
            {
                topicId: 'guru-angad-amar-ram-das',
                officialHeadingCovered: 'History of Punjab: Guru Angad Dev Ji, Guru Amar Das Ji & Guru Ram Das Ji (1539–1581)',
                levelProgression: {
                    basic: 'Gurmukhi Script Standardization, Goindwal Baoli (84 Steps) & Foundation of Ramdaspur/Amritsar (1577)',
                    intermediate: 'Mal Akhara, Pehle Pangat Phir Sangat, 22 Manjis, 52 Piris & Masand System',
                    advanced: 'Anand Sahib (40 Pauris in Ramkali Raga), 4 Laavan (Suhee Raga) & Emperor Akbar’s Visit to Goindwal'
                }
            },
            {
                topicId: 'guru-arjan-dev-ji',
                officialHeadingCovered: 'History of Punjab: Sri Guru Arjan Dev Ji (1563–1606)',
                levelProgression: {
                    basic: 'Foundation of Harmandir Sahib (1588/89 by Mian Mir), Tarn Taran & Kartarpur (Jalandhar)',
                    intermediate: 'Dasvandh System, Compilation of Adi Granth (1604, Bhai Gurdas Ji, Baba Buddha Ji) & Sukhmani Sahib',
                    advanced: '2,218 Hymns in 30 Ragas, Mina Sect Opposition & Supreme Martyrdom at Lahore (30 May 1606) under Jahangir'
                }
            },
            {
                topicId: 'guru-hargobind-to-tegh-bahadur',
                officialHeadingCovered: 'History of Punjab: Guru Hargobind Sahib Ji to Guru Tegh Bahadur Ji (1606–1675)',
                levelProgression: {
                    basic: 'Miri-Piri Swords, Sri Akal Takht Sahib (1606), Bandi Chhor Diwas & Hind di Chadar',
                    intermediate: 'Guru Har Rai Ji (Kiratpur Dawakhana), Guru Har Krishan Ji (Bala Pritam) & Foundation of Chak Nanaki / Anandpur Sahib (1665)',
                    advanced: '4 Defensive Battles of Guru Hargobind Ji, Kashmiri Pandit Delegation (Pandit Kirpa Ram) & Martyrdom at Chandni Chowk (11 Nov 1675)'
                }
            },
            {
                topicId: 'guru-gobind-singh-ji',
                officialHeadingCovered: 'History of Punjab: Sri Guru Gobind Singh Ji & Creation of Khalsa (1666–1708)',
                levelProgression: {
                    basic: 'Birth at Patna Sahib, Vaisakhi 1699 at Kesgarh Sahib, Panj Pyare & Five Ks',
                    intermediate: 'Battles of Bhangani, Nadaun, Anandpur, Chamkaur Sahib, Sirhind (Sahibzadas) & Muktsar (40 Mukte)',
                    advanced: 'Zafarnama from Dina Kangar, Damdama Sahib Recension (1706) & Eternal Guruship to Sri Guru Granth Sahib Ji at Nanded (1708)'
                }
            },
            {
                topicId: 'banda-singh-bahadur-misls',
                officialHeadingCovered: 'History of Punjab: Banda Singh Bahadur, Dal Khalsa, Ghallugharas & 12 Sikh Misls (1708–1799)',
                levelProgression: {
                    basic: 'Battle of Chappar Chiri (1710), Lohgarh Capital, Abolition of Zamindari & Martyrdom (1716)',
                    intermediate: 'Chhota Ghallughara (1746), Vadda Ghallughara (1762), Budha Dal & Taruna Dal, Dal Khalsa (1748) & Rakhi System',
                    advanced: 'Complete Matrix of all 12 Sikh Misls (Founders, Capitals, Territories) & Baghel Singh’s Entry into Red Fort (1783)'
                }
            },
            {
                topicId: 'maharaja-ranjit-singh-empire',
                officialHeadingCovered: 'History of Punjab: Maharaja Ranjit Singh & Anglo-Sikh Wars (1799–1849)',
                levelProgression: {
                    basic: 'Capture of Lahore (1799), Treaty of Amritsar (1809) & Annexation of Punjab (29 March 1849)',
                    intermediate: 'Conquests of Multan, Kashmir & Peshawar; Sarkar-i-Khalsa (4 Subas) & Fauj-i-Khas (Allard, Ventura, Avitabile, Nalwa)',
                    advanced: 'First Anglo-Sikh War (1845–46: 5 Battles & Treaties of Lahore/Bhairowal) & Second Anglo-Sikh War (1848–49: 4 Battles)'
                }
            },
            {
                topicId: 'punjab-freedom-movements',
                officialHeadingCovered: 'History of Punjab: Colonial Reform & Freedom Struggle (1849–1947)',
                levelProgression: {
                    basic: 'Namdhari/Kuka Movement, Singh Sabha, Ghadar Party (1913) & Jallianwala Bagh (13 April 1919)',
                    intermediate: 'Pagri Sambhal Jatta (1907), Komagata Maru (1914), Gurdwara Reform Morchas & Sikh Gurdwaras Act 1925',
                    advanced: 'Babbar Akali Movement, Naujawan Bharat Sabha, HSRA (Bhagat Singh, Rajguru, Sukhdev) & Riyasti Praja Mandal'
                }
            },
            {
                topicId: 'punjab-partition-suba-modern',
                officialHeadingCovered: 'History of Punjab: Partition (1947), PEPSU (1948–56) & Punjabi Suba Reorganisation (1966)',
                levelProgression: {
                    basic: '1947 Partition (13 Districts to East Punjab) & 1 Nov 1966 Trifurcation (Punjab, Haryana, UT Chandigarh)',
                    intermediate: 'Radcliffe Commission (4 Judges) & PEPSU (8 Princely States, Rajpramukh Yadavindra Singh, Premier Gian Singh Rarewala)',
                    advanced: 'Sachar Formula (1949), Master Tara Singh & Sant Fateh Singh, Hukam Singh Committee, Shah Commission (1966) & Rajiv-Longowal Accord (1985)'
                }
            },
            {
                topicId: 'punjab-culture-folklore',
                officialHeadingCovered: 'History of Punjab: Culture, Folk Dances, Fairs, Ornaments, Phulkari & Literature',
                levelProgression: {
                    basic: 'Folk Dances (Bhangra, Giddha, Jhumar, Sammi, Kikli) & Major Fairs (Chhapar, Jarg, Roshni, Hola Mohalla, Maghi)',
                    intermediate: '12 Desi Months, Traditional Ornaments (Head-to-Toe), Musical Instruments & GI-Tagged Phulkari (Bagh, Chope, Subhar)',
                    advanced: 'Qissa Poets (Damodar, Pilu, Waris Shah, Hashim) & Modern Laureates (Bhai Vir Singh, Amrita Pritam, Gurdial Singh, Batalvi, Patar)'
                }
            },
            {
                topicId: 'ancient-india',
                officialHeadingCovered: 'History of India: Ancient India (IVC, Vedic, Buddhism/Jainism, Mauryas, Guptas)',
                levelProgression: {
                    basic: 'Indus Valley Town Planning, Four Vedas, Gautama Buddha & Mahavira',
                    intermediate: '16 Mahajanapadas, Mauryan Empire (Chandragupta, Arthashastra, Ashoka’s Dhamma & Edicts)',
                    advanced: 'Kushanas, Gupta Golden Age (Samudragupta, Chandragupta II, Aryabhata, Kalidasa), Sangam Age & Harshavardhana'
                }
            },
            {
                topicId: 'medieval-india',
                officialHeadingCovered: 'History of India: Medieval India (Delhi Sultanate, Vijayanagara, Mughals, Bhakti & Sufi)',
                levelProgression: {
                    basic: 'Five Dynasties of Delhi Sultanate (1206–1526) & Six Great Mughals (1526–1707)',
                    intermediate: 'Iltutmish Iqta, Alauddin Market Reforms, MBT Token Currency, Sher Shah Suri GT Road/Rupiya & Akbar’s Mansabdari',
                    advanced: 'Vijayanagara (Krishnadevaraya), Maratha Shivaji (Ashtapradhan), Indo-Islamic Architecture & Bhakti/Sufi Orders'
                }
            },
            {
                topicId: 'modern-india',
                officialHeadingCovered: 'History of India: Modern India (1757–1947 & Constitutional Development)',
                levelProgression: {
                    basic: 'Plassey (1757), Buxar (1764), Revolt of 1857, INC Formation (1885) & Gandhian Mass Movements',
                    intermediate: 'Socio-Religious Reforms, Partition of Bengal (1905), Non-Cooperation (1920), Civil Disobedience (1930) & Quit India (1942)',
                    advanced: 'Land Revenue Systems (Permanent, Ryotwari, Mahalwari), Acts of 1909/1919/1935, Cabinet Mission & Integration of Princely States'
                }
            },
            {
                topicId: 'world-history',
                officialHeadingCovered: 'World History: Renaissance, Revolutions, World Wars & Cold War',
                levelProgression: {
                    basic: 'Renaissance, Reformation (Martin Luther 1517), Geographic Discoveries & Industrial Revolution',
                    intermediate: 'American (1776), French (1789) & Russian (1917) Revolutions; Unification of Italy & Germany',
                    advanced: 'World War I (Versailles 1919, League of Nations), Fascism/Nazism, World War II (1939–45), Cold War & Decolonisation'
                }
            }
        ]
    },
    {
        domainId: 'geography',
        domainTitle: {
            en: '4. Geography (Physical Geography, Geography of India, Punjab & Environment)',
            pa: '4. ਭੂਗੋਲ (ਭੌਤਿਕ ਭੂਗੋਲ, ਭਾਰਤ ਤੇ ਪੰਜਾਬ ਦਾ ਭੂਗੋਲ ਅਤੇ ਵਾਤਾਵਰਣ)',
            hi: '4. भूगोल (भौतिक भूगोल, भारत व पंजाब का भूगोल एवं पर्यावरण)'
        },
        officialHeadings: ['Physical Geography', 'Geography of India', 'Resources and Environment'],
        topics: [
            {
                topicId: 'sst-geo-earth',
                officialHeadingCovered: 'Physical Geography: Solar System, Latitudes, Longitudes & Earth Motions',
                levelProgression: {
                    basic: 'Solar System Planets, Rotation vs Revolution, Latitudes & Longitudes',
                    intermediate: 'Solstices & Equinoxes, Tropic of Cancer (8 Indian states), IST (82.5°E) & Time Zone Calculations',
                    advanced: 'International Date Line (180°), Twilight Zones & Map Projections/Scales'
                }
            },
            {
                topicId: 'sst-geo-tectonics',
                officialHeadingCovered: 'Physical Geography: Earth’s Interior, Rocks, Plate Tectonics & Landforms',
                levelProgression: {
                    basic: 'Crust, Mantle, Core & Igneous, Sedimentary, Metamorphic Rocks',
                    intermediate: 'Wegener’s Continental Drift, Plate Boundaries, Earthquakes (P, S, L waves) & Volcanoes',
                    advanced: 'Seismic Discontinuities (Conrad, Moho, Gutenberg, Lehmann) & Fluvial, Glacial, Aeolian, Karst Landforms'
                }
            },
            {
                topicId: 'sst-geo-atmosphere',
                officialHeadingCovered: 'Physical Geography: Atmosphere, Winds, Pressure Belts & Climate',
                levelProgression: {
                    basic: 'Composition of Air & 5 Atmospheric Layers (Troposphere to Exosphere)',
                    intermediate: '7 Pressure Belts, Coriolis Force, Planetary Winds (Trade, Westerlies) & Local Winds (Loo, Chinook, Foehn, Mistral)',
                    advanced: 'Heat Budget, Temperature Inversion, Orographic/Convectional/Frontal Rainfall, Cyclones & Koeppen Classification'
                }
            },
            {
                topicId: 'sst-geo-oceans',
                officialHeadingCovered: 'Physical Geography: Hydrosphere, Ocean Relief, Tides & Currents',
                levelProgression: {
                    basic: '5 Oceans, Continental Shelf, Mariana Trench & High/Low Tides',
                    intermediate: 'Ocean Salinity (35‰ average), Spring vs Neap Tides & Major Warm vs Cold Ocean Currents',
                    advanced: 'Thermohaline Circulation, El Niño / La Niña Southern Oscillation (ENSO) & Coral Reef Bleaching'
                }
            },
            {
                topicId: 'physical-geography',
                officialHeadingCovered: 'Geography of India: Physiography, Drainage, Monsoon, Soils, Agriculture, Minerals & Population',
                levelProgression: {
                    basic: 'India’s Location, Neighbours, 6 Physiographic Divisions & Himalayan Ranges',
                    intermediate: 'Indus-Ganga-Brahmaputra vs Peninsular Rivers, Monsoon Mechanism, ICAR Soil Types & Cropping Seasons',
                    advanced: 'Mineral Belts, Power Resources, Industrial Corridors, Transport Networks & Census 2011 Demographic Indicators'
                }
            },
            {
                topicId: 'punjab-geography',
                officialHeadingCovered: 'Geography of India / Punjab: Physiography, Doabs, Rivers, Canals, Soils & Forest/Wildlife',
                levelProgression: {
                    basic: 'Location (50,362 sq km), 23 Districts, Majha-Doaba-Malwa & 3 Perennial Rivers (Sutlej, Beas, Ravi)',
                    intermediate: '5 Historic Doabs, Shiwalik/Kandi/Alluvial Plains, Canal System (Bhakra, Sirhind, UBDC) & Ramsar Wetlands (Harike, Kanjli, Ropar, Keshopur, Nangal, Beas)',
                    advanced: 'Agro-Climatic Zones, Soil Problems (Waterlogging, Kallar/Salinity), Groundwater Depletion (117+ Dark-Zone Blocks) & Wildlife Sanctuaries'
                }
            },
            {
                topicId: 'sst-geo-environment',
                officialHeadingCovered: 'Resources and Environment: Conservation, Biodiversity, Laws & Global Conventions',
                levelProgression: {
                    basic: 'Renewable vs Non-Renewable Resources, 3Rs, Ecosystem Food Chains & Pollution Types',
                    intermediate: 'In-situ vs Ex-situ Conservation, 18 Biosphere Reserves, 4 Biodiversity Hotspots, Project Tiger (1973) & Wildlife Protection Act (1972)',
                    advanced: 'EPA 1986, Biodiversity Act 2002, NGT 2010, Ramsar (1971), Montreal (1987), Rio (1992), Kyoto (1997) & Paris Agreement (2015)'
                }
            }
        ]
    },
    {
        domainId: 'punjabi-paper-a',
        domainTitle: {
            en: '5. Compulsory Qualifying Paper-A: Punjabi Language, Gurmukhi Grammar & Culture',
            pa: '5. ਲਾਜ਼ਮੀ ਕੁਆਲੀਫਾਈਂਗ ਪੇਪਰ-A: ਪੰਜਾਬੀ ਭਾਸ਼ਾ, ਗੁਰਮੁਖੀ ਵਿਆਕਰਣ ਅਤੇ ਸੱਭਿਆਚਾਰ',
            hi: '5. अनिवार्य अर्हक पेपर-A: पंजाबी भाषा, गुरमुखी व्याकरण एवं संस्कृति'
        },
        officialHeadings: ['Gurmukhi Orthography (41 Letters)', 'Punjabi Grammar (Dhuni, Shabad, Vaak, Arth)', 'Idioms, Proverbs & Literature'],
        topics: [
            {
                topicId: 'punjabi-paper-a',
                officialHeadingCovered: 'Qualifying Paper-A (50 Marks, 50% Minimum Qualifying)',
                levelProgression: {
                    basic: '41 Gurmukhi Letters (8 Vargs), 3 Vowel Bearers (ੳ, ਅ, ੲ), 10 Lagan (3-4-3 Rule), 3 Lagaakhars & 3 Dutt Akhar (ਹ, ਰ, ਵ)',
                    intermediate: '5 Nasal Consonants, 4 Dialects of East Punjab (Majhi Taksali, Malwai, Doabi, Puadhi), Naav (5), Padnaav (6) & Visheshan (5)',
                    advanced: 'Muhavare & Akhaan, Gurmat/Sufi/Qissa Poetry & Modern Punjabi Sahitya Akademi / Jnanpith Laureates'
                }
            }
        ]
    }
];
