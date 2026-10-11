import type { Lesson } from './types';
import { MASTER_CADRE_POLITY_BLUEPRINT_LESSONS } from './master_cadre_polity_blueprint';
import { MASTER_CADRE_ECON_BLUEPRINT_LESSONS } from './master_cadre_econ_blueprint';
import { MASTER_CADRE_PUNJAB_HISTORY_BLUEPRINT_LESSONS } from './master_cadre_punjab_history_blueprint';
import { MASTER_CADRE_SCIENCE_PHYSICS_BLUEPRINT_LESSONS } from './master_cadre_science_physics_blueprint';
import { MASTER_CADRE_SCIENCE_CHEMISTRY_BLUEPRINT_LESSONS } from './master_cadre_science_chemistry_blueprint';
import { MASTER_CADRE_SCIENCE_BIOLOGY_BLUEPRINT_LESSONS } from './master_cadre_science_biology_blueprint';
import { ETT_PUNJABI_LANGUAGES_BLUEPRINT_LESSONS } from './ett_punjabi_languages_blueprint';
import { ETT_MATH_SCIENCE_SST_BLUEPRINT_LESSONS } from './ett_math_science_sst_blueprint';

export interface BlueprintLessonInput {
    topicId: string;
    editorialRecord?: {
        lastUpdatedDate: string;
        verifiedSyllabusDenominator: number;
        editorialNote: string;
    };
    bookRefs: Array<{
        title: string;
        author: string;
        chapter: string;
        relevance: string;
    }>;
    summary: { en: string; pa: string; hi: string };
    keyNotes: { en: string[]; pa: string[]; hi: string[] };
    quickRevisionSheet?: { en: string[]; pa: string[]; hi: string[] };
    commonMisconceptions?: { en: string[]; pa: string[]; hi: string[] };
    workedExamples?: Array<{
        problem: { en: string; pa: string; hi: string };
        solutionSteps: { en: string[]; pa: string[]; hi: string[] };
        finalAnswer: { en: string; pa: string; hi: string };
    }>;
    flashcards: Array<{
        id: string;
        question: { en: string; pa: string; hi: string };
        answer: { en: string; pa: string; hi: string };
    }>;
}

const BLUEPRINT_TOPIC_METADATA: Record<
    string,
    {
        category: Lesson['category'];
        title: { en: string; pa: string; hi: string };
        examRelevance: string;
    }
> = {
    'sst-polity-concepts-theories': {
        category: 'polity',
        title: {
            en: 'Political Theory, Core Concepts & Ideologies (Level B → I → A)',
            pa: 'ਰਾਜਨੀਤਿਕ ਸਿਧਾਂਤ, ਮੁੱਢਲੇ ਸੰਕਲਪ ਅਤੇ ਵਿਚਾਰਧਾਰਾਵਾਂ (Level B → I → A)',
            hi: 'राजनीतिक सिद्धांत, मूल अवधारणाएँ एवं विचारधाराएँ (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (Polity: Concepts & Theories — 4 to 6 Qs)'
    },
    'sst-citizenship-election-parties': {
        category: 'polity',
        title: {
            en: 'Citizenship, Election Procedure & Party System in India (Level B → I → A)',
            pa: 'ਨਾਗਰਿਕਤਾ, ਚੋਣ ਪ੍ਰਕਿਰਿਆ ਅਤੇ ਭਾਰਤ ਵਿੱਚ ਦਲ ਪ੍ਰਣਾਲੀ (Level B → I → A)',
            hi: 'नागरिकता, चुनाव प्रक्रिया एवं भारत में दलीय प्रणाली (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (Polity: Citizenship, Elections & Parties — 5 to 7 Qs)'
    },
    'sst-state-govt-punjab-local': {
        category: 'polity',
        title: {
            en: 'State Govt, Indian Federalism & Local Democracy in Punjab (Level B → I → A)',
            pa: 'ਰਾਜ ਸਰਕਾਰ, ਭਾਰਤੀ ਸੰਘਵਾਦ ਅਤੇ ਪੰਜਾਬ ਵਿੱਚ ਪੰਚਾਇਤੀ ਰਾਜ (Level B → I → A)',
            hi: 'राज्य सरकार, भारतीय संघवाद एवं पंजाब में पंचायती राज (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (Polity: State Govt, Federalism & Rural/Urban Democracy — 6 to 8 Qs), PSSSB Clerk'
    },
    'sst-foreign-policy-uno': {
        category: 'polity',
        title: {
            en: 'India’s Foreign Policy, Regional Groupings & The United Nations (UNO) (Level B → I → A)',
            pa: 'ਭਾਰਤ ਦੀ ਵਿਦੇਸ਼ ਨੀਤੀ, ਖੇਤਰੀ ਸੰਗਠਨ ਅਤੇ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ (UNO) (Level B → I → A)',
            hi: 'भारत की विदेश नीति, क्षेत्रीय संगठन एवं संयुक्त राष्ट्र संघ (UNO) (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (Polity: Foreign Policy & UNO — 4 to 6 Qs)'
    },
    'sst-econ-micro-consumer-elasticity': {
        category: 'economy',
        title: {
            en: 'Micro vs Macro, Types of Economies, Consumer Equilibrium & Price Elasticity of Demand (Level B → I → A)',
            pa: 'ਵਿਅਸ਼ਟੀ ਬਨਾਮ ਸਮਸ਼ਟੀ, ਉਪਭੋਗਤਾ ਸੰਤੁਲਨ ਅਤੇ ਮੰਗ ਦੀ ਕੀਮਤ ਲਚਕ (Level B → I → A)',
            hi: 'व्यष्टि बनाम समष्टि, उपभोक्ता संतुलन एवं माँग की कीमत लोच (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (Economics Official Headings 1, 2, 6 & 14 — 8 to 10 Qs)'
    },
    'sst-econ-producer-cost-market': {
        category: 'economy',
        title: {
            en: 'Producer Behaviour, Production/Cost/Revenue, Market Forms & Price Determination (Level B → I → A)',
            pa: 'ਉਤਪਾਦਕ ਵਿਵਹਾਰ, ਲਾਗਤ ਤੇ ਆਮਦਨ, ਬਜ਼ਾਰ ਦੇ ਰੂਪ ਅਤੇ ਕੀਮਤ ਨਿਰਧਾਰਨ (Level B → I → A)',
            hi: 'उत्पादक व्यवहार, लागत व आगम, बाज़ार के रूप एवं कीमत निर्धारण (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (Economics Official Headings 7, 8 & 9 — 8 to 10 Qs)'
    },
    'sst-econ-keynesian-multiplier': {
        category: 'economy',
        title: {
            en: 'National Income Aggregates (GDP–NNP), Keynesian Income Determination (AD–AS) & Multiplier (Level B → I → A)',
            pa: 'ਰਾਸ਼ਟਰੀ ਆਮਦਨ (GDP–NNP), ਆਮਦਨ ਤੇ ਰੁਜ਼ਗਾਰ ਦਾ ਨਿਰਧਾਰਨ (AD–AS) ਅਤੇ ਨਿਵੇਸ਼ ਗੁਣਕ (Level B → I → A)',
            hi: 'राष्ट्रीय आय (GDP–NNP), आय व रोज़गार का निर्धारण (AD–AS) एवं निवेश गुणक (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (Economics Official Headings 3, 4, 12 & 13 — 10 to 12 Qs)'
    },
    'sst-econ-money-budget-bop-punjab': {
        category: 'economy',
        title: {
            en: 'Money & Banking, Govt Budget, BoT/BoP, Economic Planning & Economy of Punjab (Level B → I → A)',
            pa: 'ਮੁਦਰਾ ਤੇ ਬੈਂਕਿੰਗ, ਸਰਕਾਰੀ ਬਜਟ, ਭੁਗਤਾਨ ਸੰਤੁਲਨ, ਆਰਥਿਕ ਯੋਜਨਾਬੰਦੀ ਅਤੇ ਪੰਜਾਬ ਦੀ ਅਰਥਵਿਵਸਥਾ (Level B → I → A)',
            hi: 'मुद्रा एवं बैंकिंग, सरकारी बजट, भुगतान संतुलन, आर्थिक नियोजन एवं पंजाब की अर्थव्यवस्था (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (Economics Official Headings 5, 10, 11, 15 & 16 — 10 to 12 Qs), PSSSB Clerk'
    },
    'punjab-ancient-medieval': {
        category: 'history',
        title: {
            en: 'Ancient & Medieval Punjab: Harappan Sites, Rigvedic Punjab, Alexander, Sultanate, Mughals & Sufi Saints (Level B → I → A)',
            pa: 'ਪ੍ਰਾਚੀਨ ਅਤੇ ਮੱਧਕਾਲੀ ਪੰਜਾਬ: ਹੜੱਪਾ ਸਾਈਟਾਂ, ਰਿਗਵੈਦਿਕ ਪੰਜਾਬ, ਸਿਕੰਦਰ, ਸਲਤਨਤ, ਮੁਗਲ ਅਤੇ ਸੂਫ਼ੀ ਸੰਤ (Level B → I → A)',
            hi: 'प्राचीन एवं मध्यकालीन पंजाब: हड़प्पा स्थल, ऋग्वैदिक पंजाब, सिकंदर, सल्तनत, मुग़ल एवं सूफ़ी संत (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (History of Punjab — 5 to 7 Qs), PSSSB Clerk, Patwari & Police'
    },
    'punjab-partition-suba-modern': {
        category: 'history',
        title: {
            en: 'Partition of Punjab (1947), PEPSU (1948–56), Punjabi Suba Movement & Reorganisation Act (1966) (Level B → I → A)',
            pa: 'ਪੰਜਾਬ ਦੀ ਵੰਡ (1947), ਪੈਪਸੂ (1948–56), ਪੰਜਾਬੀ ਸੂਬਾ ਲਹਿਰ ਅਤੇ ਪੁਨਰਗਠਨ ਐਕਟ (1966) (Level B → I → A)',
            hi: 'पंजाब विभाजन (1947), पेप्सू (1948–56), पंजाबी सूबा आंदोलन एवं पुनर्गठन अधिनियम (1966) (Level B → I → A)'
        },
        examRelevance: 'Punjab Master Cadre SST (History of Modern Punjab — 4 to 6 Qs), PSSSB Clerk, ETT & Patwari'
    },
    'sci-foundation-class6-10-lab': {
        category: 'science',
        title: {
            en: 'Foundation Science (Class 6–10 PSEB/NCERT), SI Units, Constants, Lab Safety & Discoveries (Level B → I)',
            pa: 'ਮੁੱਢਲਾ ਵਿਗਿਆਨ (ਜਮਾਤ 6–10), SI ਇਕਾਈਆਂ, ਸਥਿਰਾਂਕ, ਲੈਬ ਸੁਰੱਖਿਆ ਅਤੇ ਵਿਗਿਆਨਕ ਖੋਜਾਂ (Level B → I)',
            hi: 'आधारभूत विज्ञान (कक्षा 6–10), SI मात्रक, भौतिक नियतांक, प्रयोगशाला सुरक्षा एवं वैज्ञानिक खोजें (Level B → I)'
        },
        examRelevance: 'Punjab Master Cadre Science (Foundation & Practical Principles — 6 to 8 Qs), ETT & PSTET'
    },
    'sci-phy-waves-optics': {
        category: 'science',
        title: {
            en: 'Waves, Acoustics & Geometrical/Wave Optics: SHM, Doppler Effect, Lenses, Interference, Diffraction & Polarisation (Level I → H → G)',
            pa: 'ਤਰੰਗਾਂ, ਧੁਨੀ ਅਤੇ ਪ੍ਰਕਾਸ਼ਿਕੀ: SHM, ਡੌਪਲਰ ਪ੍ਰਭਾਵ, ਲੈਂਜ਼, ਇੰਟਰਫੇਰੈਂਸ, ਡਿਫਰੈਕਸ਼ਨ ਅਤੇ ਪੋਲਰਾਈਜ਼ੇਸ਼ਨ (Level I → H → G)',
            hi: 'तरंगें, ध्वनिकी एवं प्रकाशिकी: सरल आवर्त गति, डॉप्लर प्रभाव, लेंस, व्यतिकरण, विवर्तन एवं ध्रुवण (Level I → H → G)'
        },
        examRelevance: 'Punjab Master Cadre Science (Physics: Oscillations, Waves & Optics — 8 to 10 Qs)'
    },
    'sci-phy-thermo-statistical': {
        category: 'science',
        title: {
            en: 'Heat, Thermodynamics & Statistical Physics: Laws, Carnot Engine, Entropy, Maxwell Relations & Distributions (Level I → H → G/P)',
            pa: 'ਤਾਪ, ਥਰਮੋਡਾਇਨਾਮਿਕਸ ਅਤੇ ਸਟੈਟਿਸਟੀਕਲ ਫਿਜ਼ਿਕਸ: ਨਿਯਮ, ਕਾਰਨੋ ਇੰਜਣ, ਐਂਟ੍ਰੋਪੀ ਅਤੇ ਮੈਕਸਵੈੱਲ ਸਬੰਧ (Level I → H → G/P)',
            hi: 'ऊष्मा, ऊष्मागतिकी एवं सांख्यिकीय भौतिकी: नियम, कार्नो इंजन, एन्ट्रॉपी, मैक्सवेल संबंध एवं वितरण (Level I → H → G/P)'
        },
        examRelevance: 'Punjab Master Cadre Science (Physics Official Heading: Thermodynamics and statistical physics — 8 to 10 Qs)'
    },
    'sci-phy-electromagnetism-circuits': {
        category: 'science',
        title: {
            en: 'Electricity, Magnetism, AC Circuits & Electromagnetic Theory (Maxwell’s Equations) (Level I → H → G/P)',
            pa: 'ਬਿਜਲੀ, ਚੁੰਬਕਤਾ, AC ਸਰਕਟ ਅਤੇ ਇਲੈਕਟ੍ਰੋਮੈਗਨੈਟਿਕ ਥਿਊਰੀ (ਮੈਕਸਵੈੱਲ ਸਮੀਕਰਨਾਂ) (Level I → H → G/P)',
            hi: 'विद्युत, चुंबकत्व, प्रत्यावर्ती धारा (AC) परिपथ एवं विद्युतचुंबकीय सिद्धांत (मैक्सवेल समीकरण) (Level I → H → G/P)'
        },
        examRelevance: 'Punjab Master Cadre Science (Physics Official Heading: Electromagnetic theory — 8 to 10 Qs)'
    },
    'sci-phy-modern-quantum-nuclear': {
        category: 'science',
        title: {
            en: 'Modern Physics, Quantum Mechanics, Atomic/Molecular Spectra & Nuclear/Particle Physics (Level H → G/P)',
            pa: 'ਆਧੁਨਿਕ ਭੌਤਿਕੀ, ਕੁਆਂਟਮ ਮਕੈਨਿਕਸ, ਪਰਮਾਣੂ ਸਪੈਕਟ੍ਰਾ ਅਤੇ ਨਿਊਕਲੀਅਰ/ਪਾਰਟੀਕਲ ਫਿਜ਼ਿਕਸ (Level H → G/P)',
            hi: 'आधुनिक भौतिकी, क्वांटम यांत्रिकी, परमाणु/आणविक स्पेक्ट्रा एवं नाभिकीय/कण भौतिकी (Level H → G/P)'
        },
        examRelevance: 'Punjab Master Cadre Science (Physics Official Headings: Quantum, Atomic/Molecular & Nuclear/Particle — 8 to 10 Qs)'
    },
    'sci-phy-electronics-solid-math': {
        category: 'science',
        title: {
            en: 'Condensed Matter (Solid State), Semiconductor Electronics & Mathematical Methods of Physics (Level H → G/P)',
            pa: 'ਕੰਡੈਂਸਡ ਮੈਟਰ (ਠੋਸ ਅਵਸਥਾ), ਸੈਮੀਕੰਡਕਟਰ ਇਲੈਕਟ੍ਰਾਨਿਕਸ ਅਤੇ ਗਣਿਤਿਕ ਭੌਤਿਕੀ (Level H → G/P)',
            hi: 'संघनित द्रव्य (ठोस अवस्था), अर्धचालक इलेक्ट्रॉनिकी एवं गणितीय भौतिकी विधियाँ (Level H → G/P)'
        },
        examRelevance: 'Punjab Master Cadre Science (Physics Official Headings: Condensed matter, Electronics & Math methods — 8 to 10 Qs)'
    },
    'sci-chem-physical-states-thermo-eq': {
        category: 'science',
        title: {
            en: 'Physical Chemistry I: Mole Concept, Atomic Structure, States of Matter, Bonding, Thermodynamics & Equilibrium (Level B → I → H → G)',
            pa: 'ਫਿਜ਼ੀਕਲ ਕੈਮਿਸਟਰੀ I: ਮੋਲ ਸੰਕਲਪ, ਪਰਮਾਣੂ ਬਣਤਰ, ਪਦਾਰਥ ਦੀਆਂ ਅਵਸਥਾਵਾਂ, ਬਾਂਡਿੰਗ, ਥਰਮੋਡਾਇਨਾਮਿਕਸ ਅਤੇ ਸੰਤੁਲਨ (Level B → I → H → G)',
            hi: 'भौतिक रसायन I: मोल संकल्पना, परमाणु संरचना, द्रव्य की अवस्थाएँ, आबंधन, ऊष्मागतिकी एवं साम्यावस्था (Level B → I → H → G)'
        },
        examRelevance: 'Punjab Master Cadre Science (Physical Chemistry Official Headings 1–4, 6 & 7 — 10 to 12 Qs)'
    },
    'sci-chem-electro-kinetics-surface-solids': {
        category: 'science',
        title: {
            en: 'Physical Chemistry II: Electrochemistry, Chemical Kinetics, Solutions, Solid State, Surface Chemistry, Catalysis & Spectroscopy (Level H → G/P)',
            pa: 'ਫਿਜ਼ੀਕਲ ਕੈਮਿਸਟਰੀ II: ਇਲੈਕਟ੍ਰੋਕੈਮਿਸਟਰੀ, ਰਸਾਇਣਕ ਕਾਇਨੈਟਿਕਸ, ਘੋਲ, ਠੋਸ ਅਵਸਥਾ, ਸਰਫੇਸ ਕੈਮਿਸਟਰੀ ਅਤੇ ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ (Level H → G/P)',
            hi: 'भौतिक रसायन II: वैद्युत रसायन, रासायनिक बलगतिकी, विलयन, ठोस अवस्था, पृष्ठ रसायन, उत्प्रेरण एवं स्पेक्ट्रोस्कोपी (Level H → G/P)'
        },
        examRelevance: 'Punjab Master Cadre Science (Physical Chemistry Official Headings 5 & 8–13 — 10 to 12 Qs)'
    },
    'sci-chem-inorganic-coord-bio-nuclear': {
        category: 'science',
        title: {
            en: 'Inorganic Chemistry II: d- & f-Block, Coordination & Organometallic Chemistry, Bioinorganic, Nuclear & Analytical Chemistry (Level H → G/P)',
            pa: 'ਇਨਔਰਗੈਨਿਕ ਕੈਮਿਸਟਰੀ II: d- ਤੇ f-ਬਲਾਕ, ਕੋਆਰਡੀਨੇਸ਼ਨ ਅਤੇ ਔਰਗੈਨੋਮੈਟਾਲਿਕ ਯੌਗਿਕ, ਬਾਇਓਇਨਔਰਗੈਨਿਕ ਅਤੇ ਐਨਾਲਿਟੀਕਲ ਕੈਮਿਸਟਰੀ (Level H → G/P)',
            hi: 'अकार्बनिक रसायन II: d- व f-ब्लॉक, उपसहसंयोजन एवं कार्बधात्विक यौगिक, जैव-अकार्बनिक, नाभिकीय एवं विश्लेषणात्मक रसायन (Level H → G/P)'
        },
        examRelevance: 'Punjab Master Cadre Science (Inorganic Chemistry Official Headings 6, 7 & 9–12 — 10 to 12 Qs)'
    },
    'sci-chem-organic-goc-hydrocarbons-halides': {
        category: 'science',
        title: {
            en: 'Organic Chemistry I: Purification, GOC, Stereochemistry, Hydrocarbons, Haloalkanes, Alcohols, Phenols & Ethers (Level I → H → G)',
            pa: 'ਔਰਗੈਨਿਕ ਕੈਮਿਸਟਰੀ I: ਸ਼ੁੱਧੀਕਰਨ, GOC, ਸਟੀਰੀਓਕੈਮਿਸਟਰੀ, ਹਾਈਡ੍ਰੋਕਾਰਬਨ, ਹੈਲੋਐਲਕੇਨ, ਅਲਕੋਹਲ, ਫੀਨੋਲ ਅਤੇ ਈਥਰ (Level I → H → G)',
            hi: 'कार्बनिक रसायन I: शोधन, सामान्य कार्बनिक रसायन (GOC), त्रिविम रसायन, हाइड्रोकार्बन, हैलोएल्केन, अल्कोहल, फीनॉल एवं ईथर (Level I → H → G)'
        },
        examRelevance: 'Punjab Master Cadre Science (Organic Chemistry Official Headings 1–5 & 13 — 10 to 12 Qs)'
    },
    'sci-chem-organic-carbonyls-reagents-spectro': {
        category: 'science',
        title: {
            en: 'Organic Chemistry II: Carbonyls, Amines, Named Reactions, Selective Reagents, Biomolecules, Polymers & IR/UV/NMR Spectroscopy (Level H → G/P)',
            pa: 'ਔਰਗੈਨਿਕ ਕੈਮਿਸਟਰੀ II: ਕਾਰਬੋਨਿਲ, ਅਮੀਨ, ਨੇਮਡ ਰਿਐਕਸ਼ਨਜ਼, ਚੋਣਵੇਂ ਰੀਏਜੈਂਟ, ਬਾਇਓਮੌਲੀਕਿਊਲਜ਼, ਪੌਲੀਮਰ ਅਤੇ IR/UV/NMR ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ (Level H → G/P)',
            hi: 'कार्बनिक रसायन II: कार्बोनिल, एमीन, नेम्ड रिएक्शन, चयनात्मक अभिकर्मक, जैव-अणु, बहुलक एवं IR/UV/NMR स्पेक्ट्रोस्कोपी (Level H → G/P)'
        },
        examRelevance: 'Punjab Master Cadre Science (Organic Chemistry Official Headings 5–12 — 10 to 12 Qs)'
    },
    'sci-bio-diversity-plant-structural': {
        category: 'science',
        title: {
            en: 'Botany I: Diversity of Living World, Plant Kingdom, Morphology, Plant Anatomy & Reproduction in Flowering Plants (Level B → I → H → G)',
            pa: 'ਬੌਟਨੀ I: ਜੀਵ ਜਗਤ ਦੀ ਵਿਭਿੰਨਤਾ, ਪੌਦਾ ਜਗਤ, ਮੌਰਫੋਲੋਜੀ, ਪਲਾਂਟ ਅਨਾਟਮੀ ਅਤੇ ਫੁੱਲਦਾਰ ਪੌਦਿਆਂ ਵਿੱਚ ਪ੍ਰਜਨਨ (Level B → I → H → G)',
            hi: 'वनस्पति विज्ञान I: जीव जगत की विविधता, पादप जगत, आकारिकी, पादप शरीर रचना एवं पुष्पी पादपों में जनन (Level B → I → H → G)'
        },
        examRelevance: 'Punjab Master Cadre Science (Botany Official Headings 1, 2 & 4 — 8 to 10 Qs)'
    },
    'sci-bio-plant-physiology-ecology': {
        category: 'science',
        title: {
            en: 'Botany II: Plant Physiology (Photosynthesis, Respiration, Hormones) & Ecology, Biodiversity and Environment (Level B → I → H → G)',
            pa: 'ਬੌਟਨੀ II: ਪਲਾਂਟ ਫਿਜ਼ੀਓਲੋਜੀ (ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ, ਸਾਹ ਕਿਰਿਆ, ਹਾਰਮੋਨ) ਅਤੇ ਵਾਤਾਵਰਣ ਤੇ ਜੈਵ-ਵਿਭਿੰਨਤਾ (Level B → I → H → G)',
            hi: 'वनस्पति विज्ञान II: पादप कार्यिकी (प्रकाश-संश्लेषण, श्वसन, हार्मोन) एवं पारिस्थितिकी, जैव-विविधता व पर्यावरण (Level B → I → H → G)'
        },
        examRelevance: 'Punjab Master Cadre Science (Botany & Zoology Official Headings 3 & 8 — 8 to 10 Qs)'
    },
    'sci-bio-zoology-diversity-human-physiology': {
        category: 'science',
        title: {
            en: 'Zoology I: Animal Kingdom Diversity, Animal Tissues & Complete Human Physiology (Level B → I → H → G)',
            pa: 'ਜ਼ੂਆਲੋਜੀ I: ਜੰਤੂ ਜਗਤ ਵਰਗੀਕਰਨ, ਜੰਤੂ ਟਿਸ਼ੂ ਅਤੇ ਸੰਪੂਰਨ ਮਨੁੱਖੀ ਸਰੀਰ ਕਿਰਿਆ ਵਿਗਿਆਨ (Level B → I → H → G)',
            hi: 'जंतु विज्ञान I: जंतु जगत वर्गीकरण, जंतु ऊतक एवं संपूर्ण मानव शरीर क्रिया विज्ञान (Level B → I → H → G)'
        },
        examRelevance: 'Punjab Master Cadre Science (Zoology Official Headings 1, 2, 3 & 4 — 10 to 12 Qs)'
    },
    'ett-paper-a-punjabi-script-phonetics-dialects': {
        category: 'language',
        title: {
            en: 'ETT Paper A Punjabi I: Language, Dialects (Upbhasha), Gurmukhi Script, Phonetics & Standard Spelling (Level B → I → A)',
            pa: 'ETT ਪੇਪਰ A ਪੰਜਾਬੀ I: ਭਾਸ਼ਾ, ਉਪਭਾਸ਼ਾਵਾਂ, ਗੁਰਮੁਖੀ ਲਿਪੀ, ਧੁਨੀ ਬੋਧ ਅਤੇ ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ (Level B → I → A)',
            hi: 'ETT पेपर A पंजाबी I: भाषा, उपभाषाएँ, गुरुमुखी लिपि, ध्वनि बोध और शुद्ध वर्तनी (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Recruitment Paper A (Compulsory Qualifying Punjabi — 100 Qs / 100 Marks)'
    },
    'ett-paper-a-punjabi-grammar-vocabulary-idioms': {
        category: 'language',
        title: {
            en: 'ETT Paper A Punjabi II: Word Classes, Word Formation, Vocabulary, Causative Verbs & Punctuation (Level B → I → A)',
            pa: 'ETT ਪੇਪਰ A ਪੰਜਾਬੀ II: 8 ਸ਼ਬਦ ਭੇਦ, ਸ਼ਬਦ ਰਚਨਾ, ਸ਼ਬਦ ਭੰਡਾਰ, ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ ਅਤੇ ਵਿਸ਼ਰਾਮ ਚਿੰਨ੍ਹ (Level B → I → A)',
            hi: 'ETT पेपर A पंजाबी II: 8 शब्द भेद, शब्द रचना, शब्द भंडार, प्रेरणार्थक क्रिया और विराम चिह्न (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Recruitment Paper A (Compulsory Qualifying Punjabi — 100 Qs / 100 Marks)'
    },
    'ett-punjabi-1': {
        category: 'language',
        title: {
            en: 'ETT Paper B Punjabi I: Folk Literature (ਲੋਕ ਸਾਹਿਤ), Cultural Traditions, Festivals, Fairs & Ornaments (Level B → I → A)',
            pa: 'ETT ਪੇਪਰ B ਪੰਜਾਬੀ I: ਲੋਕ ਸਾਹਿਤ, ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ, ਮੇਲੇ, ਤਿਉਹਾਰ ਅਤੇ ਰਵਾਇਤੀ ਗਹਿਣੇ (Level B → I → A)',
            hi: 'ETT पेपर B पंजाबी I: लोक साहित्य, पंजाबी संस्कृति, मेले, त्योहार और पारंपरिक आभूषण (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (Punjabi: 20 Qs / 40 Marks — Units 1 & 2)'
    },
    'ett-punjabi-3': {
        category: 'language',
        title: {
            en: 'ETT Paper B Punjabi II: Idioms & Proverbs (ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ), English-to-Punjabi Translation & Sentence Transformation (Level B → I → A)',
            pa: 'ETT ਪੇਪਰ B ਪੰਜਾਬੀ II: ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ, ਅੰਗਰੇਜ਼ੀ ਤੋਂ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਅਤੇ ਵਾਕ ਰੂਪਾਂਤਰਣ (Level B → I → A)',
            hi: 'ETT पेपर B पंजाबी II: मुहावरे और लोकोक्तियाँ, अंग्रेज़ी से पंजाबी अनुवाद और वाक्य रूपांतरण (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (Punjabi: 20 Qs / 40 Marks — Units 3, 4 & 5)'
    },
    'ett-math-2': {
        category: 'math',
        title: {
            en: 'ETT Mathematics I: Number System, Real Numbers, Euclid’s Lemma, HCF/LCM, Exponents & Polynomials with 60s Shortcuts (Level B → I → A)',
            pa: 'ETT ਗਣਿਤ I: ਸੰਖਿਆ ਪ੍ਰਣਾਲੀ, ਵਾਸਤਵਿਕ ਸੰਖਿਆਵਾਂ, ਯੂਕਲਿਡ ਵੰਡ ਪ੍ਰਮੇਯ, HCF/LCM, ਘਾਤ ਅੰਕ ਅਤੇ ਬਹੁਪਦ (Level B → I → A)',
            hi: 'ETT गणित I: संख्या पद्धति, वास्तविक संख्याएँ, यूक्लिड विभाजन प्रमेयिका, HCF/LCM, घातांक और बहुपद (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (Mathematics: 20 Qs / 40 Marks — Class 9–10 Units 1–3)'
    },
    'ett-math-4': {
        category: 'math',
        title: {
            en: 'ETT Mathematics II: Linear Equations in Two Variables, Quadratic Equations & Arithmetic Progressions (AP) with 60s Shortcuts (Level B → I → A)',
            pa: 'ETT ਗਣਿਤ II: ਦੋ ਚਲਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ, ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ ਅਤੇ ਅੰਕਗਣਿਤਕ ਲੜੀਆਂ (AP) (Level B → I → A)',
            hi: 'ETT गणित II: दो चरों वाले रैखिक समीकरण, द्विघात समीकरण और समांतर श्रेणियाँ (AP) (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (Mathematics: 20 Qs / 40 Marks — Class 10 Units 4–6)'
    },
    'ett-math-11': {
        category: 'math',
        title: {
            en: 'ETT Mathematics III: Coordinate Geometry, Lines, Triangles, Circles, Trigonometry, Heron’s Formula & 3D Mensuration (Level B → I → A)',
            pa: 'ETT ਗਣਿਤ III: ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ, ਤਿਕੋਣ, ਚੱਕਰ, ਤ੍ਰਿਕੋਣਮਿਤੀ, ਹੀਰੋਨ ਸੂਤਰ ਅਤੇ ਖੇਤਰਮਿਤੀ (Level B → I → A)',
            hi: 'ETT गणित III: निर्देशांक ज्यामिति, त्रिभुज, वृत्त, त्रिकोणमिति, हीरोन सूत्र और क्षेत्रमिति (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (Mathematics: 20 Qs / 40 Marks — Class 9–10 Units 7–16)'
    },
    'ett-math-17': {
        category: 'math',
        title: {
            en: 'ETT Mathematics IV: Statistics (Mean, Median, Mode, Empirical Formula & Ogives) and Probability with 60s Shortcuts (Level B → I → A)',
            pa: 'ETT ਗਣਿਤ IV: ਅੰਕੜਾ ਵਿਗਿਆਨ (ਮੱਧਮਾਨ, ਮੱਧਿਕਾ, ਬਹੁਲਕ ਤੇ ਤੋਰਨ) ਅਤੇ ਸੰਭਾਵਨਾ (Level B → I → A)',
            hi: 'ETT गणित IV: सांख्यिकी (माध्य, माध्यिका, बहुलक व तोरण) और प्रायिकता (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (Mathematics: 20 Qs / 40 Marks — Class 9–10 Units 17–18)'
    },
    'ett-science-motion': {
        category: 'science',
        title: {
            en: 'ETT General Science I (Physics Class 9–10): Motion, Force, Gravitation, Work-Energy, Sound, Electricity, Magnetism & Human Eye (Level B → I → A)',
            pa: 'ETT ਜਨਰਲ ਸਾਇੰਸ I (ਭੌਤਿਕ ਵਿਗਿਆਨ ਜਮਾਤ 9–10): ਗਤੀ, ਬਲ, ਗੁਰੁਤਵਾਕਰਸ਼ਣ, ਕੰਮ ਤੇ ਊਰਜਾ, ਧੁਨੀ, ਬਿਜਲੀ, ਚੁੰਬਕਤਾ ਅਤੇ ਮਨੁੱਖੀ ਅੱਖ (Level B → I → A)',
            hi: 'ETT सामान्य विज्ञान I (भौतिकी कक्षा 9–10): गति, बल, गुरुत्वाकर्षण, कार्य व ऊर्जा, ध्वनि, विद्युत, चुंबकत्व और मानव नेत्र (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (General Science: 20 Qs / 40 Marks — Physics Units)'
    },
    'ett-science-acids': {
        category: 'science',
        title: {
            en: 'ETT General Science II (Chemistry & Biology Class 9–10): Matter, Atoms, Reactions, Acids/Salts, Metals, Carbon, Cell, Life Processes & Heredity (Level B → I → A)',
            pa: 'ETT ਜਨਰਲ ਸਾਇੰਸ II (ਰਸਾਇਣ ਅਤੇ ਜੀਵ ਵਿਗਿਆਨ ਜਮਾਤ 9–10): ਪਦਾਰਥ, ਪਰਮਾਣੂ, ਤੇਜ਼ਾਬ-ਖਾਰ-ਲੂਣ, ਧਾਤਾਂ, ਕਾਰਬਨ, ਸੈੱਲ, ਜੀਵਨ ਕਿਰਿਆਵਾਂ ਅਤੇ ਵਿਰਾਸਤ (Level B → I → A)',
            hi: 'ETT सामान्य विज्ञान II (रसायन व जीव विज्ञान कक्षा 9–10): पदार्थ, परमाणु, अम्ल-क्षार-लवण, धातु, कार्बन, कोशिका, जैव प्रक्रम और आनुवंशिकता (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (General Science: 20 Qs / 40 Marks — Chemistry & Biology Units)'
    },
    'ett-sst-history-3': {
        category: 'history',
        title: {
            en: 'ETT Social Studies Complete Blueprint: All 28 Archival Units — Punjab History, Indian Civics, Geography & Economy (Level B → I → A)',
            pa: 'ETT ਸਮਾਜਿਕ ਵਿਗਿਆਨ ਸੰਪੂਰਨ ਬਲੂਪ੍ਰਿੰਟ: 28 ਪੁਰਾਣੀਆਂ ਇਕਾਈਆਂ — ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ, ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ, ਭੂਗੋਲ ਅਤੇ ਅਰਥਸ਼ਾਸਤਰ (Level B → I → A)',
            hi: 'ETT सामाजिक विज्ञान संपूर्ण ब्लूप्रिंट: 28 पुरानी इकाइयाँ — पंजाब का इतिहास, नागरिक शास्त्र, भूगोल और अर्थशास्त्र (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (Social Science: 20 Qs / 40 Marks — All 28 Archival Units)'
    },
    'ett-english-2': {
        category: 'language',
        title: {
            en: 'ETT English Complete Blueprint: Reading Comprehension, Grammar, Voice, Narration, Vocabulary & Punjabi-English Translation (Level B → I → A)',
            pa: 'ETT ਅੰਗਰੇਜ਼ੀ ਸੰਪੂਰਨ ਬਲੂਪ੍ਰਿੰਟ: ਅਣਪੜ੍ਹਿਆ ਪੈਰਾ, ਵਿਆਕਰਨ, ਵਾਇਸ, ਨੈਰੇਸ਼ਨ, ਸ਼ਬਦਾਵਲੀ ਅਤੇ ਪੰਜਾਬੀ-ਅੰਗਰੇਜ਼ੀ ਅਨੁਵਾਦ (Level B → I → A)',
            hi: 'ETT अंग्रेज़ी संपूर्ण ब्लूप्रिंट: अपठित गद्यांश, व्याकरण, वॉइस, नरेशन, शब्दावली और पंजाबी-अंग्रेज़ी अनुवाद (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (English: 10 Qs / 20 Marks — All 4 Archival Units)'
    },
    'ett-hindi-4': {
        category: 'language',
        title: {
            en: 'ETT Hindi Complete Blueprint: Devanagari Script, Varna, Vikari/Avikari Shabd, Tatsam-Tadbhav, Affixes, Vocabulary & Hindi-to-Punjabi Translation (Level B → I → A)',
            pa: 'ETT ਹਿੰਦੀ ਸੰਪੂਰਨ ਬਲੂਪ੍ਰਿੰਟ: ਦੇਵਨਾਗਰੀ ਲਿਪੀ, ਵਰਣ, ਵਿਕਾਰੀ/ਅਵਿਕਾਰੀ ਸ਼ਬਦ, ਤਤਸਮ-ਤਦਭਵ, ਅਗੇਤਰ-ਪਿਛੇਤਰ, ਸ਼ਬਦਾਵਲੀ ਅਤੇ ਹਿੰਦੀ-ਤੋਂ-ਪੰਜਾਬੀ ਅਨੁਵਾਦ (Level B → I → A)',
            hi: 'ETT हिंदी संपूर्ण ब्लूप्रिंट: देवनागरी लिपि, वर्ण विचार, विकारी/अविकारी शब्द, तत्सम-तद्भव, उपसर्ग-प्रत्यय, शब्दावली और हिंदी-से-पंजाबी अनुवाद (Level B → I → A)'
        },
        examRelevance: 'Punjab ETT Paper B Merit (Hindi: 10 Qs / 20 Marks — All 15 Archival Units)'
    }
};

function formatInlineMarkdown(text: string): string {
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em class="text-teal-200">$1</em>');
}

function markdownToRichHtml(md: string): string {
    const lines = md.split('\n');
    const htmlParts: string[] = ['<div class="space-y-3 text-slate-200 text-sm leading-relaxed">'];
    let inTable = false;
    let isTableHeader = false;
    let inList = false;

    const closeList = () => {
        if (inList) {
            htmlParts.push('</ul>');
            inList = false;
        }
    };

    const closeTable = () => {
        if (inTable) {
            htmlParts.push('</tbody></table></div>');
            inTable = false;
            isTableHeader = false;
        }
    };

    for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line) {
            closeList();
            closeTable();
            continue;
        }

        if (line === '---') {
            closeList();
            closeTable();
            htmlParts.push('<hr class="border-slate-700/80 my-4" />');
            continue;
        }

        if (line.startsWith('### ')) {
            closeList();
            closeTable();
            const heading = formatInlineMarkdown(line.slice(4));
            htmlParts.push(
                `<h3 class="text-base font-bold text-teal-300 bg-slate-800/90 border border-teal-500/30 rounded-xl px-3.5 py-2 mt-4">${heading}</h3>`
            );
            continue;
        }

        if (line.startsWith('|') && line.endsWith('|')) {
            closeList();
            const cells = line
                .slice(1, -1)
                .split('|')
                .map((c) => c.trim());

            if (cells.every((c) => /^[-:]+$/.test(c))) {
                continue;
            }

            if (!inTable) {
                inTable = true;
                isTableHeader = true;
                htmlParts.push(
                    '<div class="overflow-x-auto my-3 rounded-xl border border-slate-700"><table class="w-full text-xs text-left border-collapse">'
                );
            }

            if (isTableHeader) {
                htmlParts.push('<thead class="bg-slate-800 text-teal-300 border-b border-slate-700"><tr>');
                for (const cell of cells) {
                    htmlParts.push(`<th class="p-2.5 font-bold border-r border-slate-700 last:border-r-0">${formatInlineMarkdown(cell)}</th>`);
                }
                htmlParts.push('</tr></thead><tbody class="divide-y divide-slate-800 bg-slate-900/60">');
                isTableHeader = false;
            } else {
                htmlParts.push('<tr class="hover:bg-slate-800/40">');
                for (const cell of cells) {
                    htmlParts.push(`<td class="p-2.5 border-r border-slate-800 last:border-r-0">${formatInlineMarkdown(cell)}</td>`);
                }
                htmlParts.push('</tr>');
            }
            continue;
        }

        closeTable();

        if (/^(\d+\.|-)\s+/.test(line)) {
            if (!inList) {
                htmlParts.push('<ul class="list-disc pl-5 space-y-1.5">');
                inList = true;
            }
            const itemText = line.replace(/^(\d+\.|-)\s+/, '');
            htmlParts.push(`<li>${formatInlineMarkdown(itemText)}</li>`);
            continue;
        }

        closeList();
        htmlParts.push(`<p>${formatInlineMarkdown(line)}</p>`);
    }

    closeList();
    closeTable();
    htmlParts.push('</div>');
    return htmlParts.join('\n');
}

function splitMisconceptionPair(entry: string, lang: 'en' | 'pa' | 'hi'): { misconception: string; correction: string } {
    const markers =
        lang === 'pa'
            ? ['ਸੁਧਾਰ:', 'Correction:']
            : lang === 'hi'
              ? ['सुधार:', 'Correction:']
              : ['Correction:'];
    for (const marker of markers) {
        const idx = entry.indexOf(marker);
        if (idx !== -1) {
            return {
                misconception: entry.slice(0, idx).replace(/^(Misconception:|ਭੁਲੇਖਾ:|भ्रांति:)\s*/i, '').trim(),
                correction: entry.slice(idx + marker.length).trim()
            };
        }
    }
    return { misconception: entry, correction: entry };
}

function adaptBlueprintLesson(input: BlueprintLessonInput): Lesson {
    const meta = BLUEPRINT_TOPIC_METADATA[input.topicId] || {
        category: 'general',
        title: { en: input.topicId, pa: input.topicId, hi: input.topicId },
        examRelevance: 'Punjab Master Cadre'
    };
    const isScience = meta.category === 'science';
    const isEtt = input.topicId.startsWith('ett-');

    const misconceptionsCount = input.commonMisconceptions?.en.length || 0;
    const commonMisconceptions = Array.from({ length: misconceptionsCount }, (_, i) => {
        const enPair = splitMisconceptionPair(input.commonMisconceptions?.en[i] || '', 'en');
        const paPair = splitMisconceptionPair(input.commonMisconceptions?.pa[i] || '', 'pa');
        const hiPair = splitMisconceptionPair(input.commonMisconceptions?.hi[i] || '', 'hi');
        return {
            misconception: { en: enPair.misconception, pa: paPair.misconception, hi: hiPair.misconception },
            correction: { en: enPair.correction, pa: paPair.correction, hi: hiPair.correction },
            whyItMatters: {
                en: isEtt
                    ? 'High-frequency conceptual & OMR trap in Punjab ETT Paper A & Paper B.'
                    : isScience
                      ? 'Frequently tested conceptual & numerical distinction in Punjab Master Cadre Science.'
                      : 'Frequently tested conceptual distinction in Punjab Master Cadre SST.',
                pa: isEtt
                    ? 'ਪੰਜਾਬ ETT ਪੇਪਰ A ਅਤੇ ਪੇਪਰ B ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਅਕਸਰ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਮਹੱਤਵਪੂਰਨ ਅੰਤਰ।'
                    : isScience
                      ? 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੇਡਰ ਸਾਇੰਸ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਅਕਸਰ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਮਹੱਤਵਪੂਰਨ ਵਿਗਿਆਨਕ ਅੰਤਰ।'
                      : 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੇਡਰ SST ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਅਕਸਰ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਮਹੱਤਵਪੂਰਨ ਅੰਤਰ।',
                hi: isEtt
                    ? 'पंजाब ETT पेपर A और पेपर B परीक्षा में बार-बार पूछा जाने वाला महत्वपूर्ण अंतर।'
                    : isScience
                      ? 'पंजाब मास्टर कैडर विज्ञान परीक्षा में बार-बार पूछा जाने वाला महत्वपूर्ण वैज्ञानिक अंतर।'
                      : 'पंजाब मास्टर कैडर SST परीक्षा में बार-बार पूछा जाने वाला महत्वपूर्ण वैचारिक अंतर।'
            }
        };
    });

    return {
        id: input.topicId,
        topicId: input.topicId,
        subjectId: isEtt ? `ett-${meta.category}` : isScience ? 'science' : 'social-science',
        category: meta.category,
        coverageStatus: 'complete',
        editorialStatus: 'authored',
        practiceSource: isEtt ? 'authored-only' : undefined,
        availableLanguages: ['en', 'pa', 'hi'],
        title: meta.title,
        examRelevance: meta.examRelevance,
        estimatedTime: '45 mins',
        content: {
            en: markdownToRichHtml(input.summary.en),
            pa: markdownToRichHtml(input.summary.pa),
            hi: markdownToRichHtml(input.summary.hi)
        },
        summary: {
            en: input.keyNotes.en.slice(0, 4).join(' • '),
            pa: input.keyNotes.pa.slice(0, 4).join(' • '),
            hi: input.keyNotes.hi.slice(0, 4).join(' • ')
        },
        keyNotes: input.keyNotes,
        flashcards: input.flashcards.map((fc, idx) => ({
            id: fc.id,
            q: fc.question,
            a: fc.answer,
            difficulty: idx === 0 ? 'easy' : idx === 1 ? 'medium' : 'hard'
        })),
        videos: [
            {
                title: `NCERT Official — ${meta.title.en}`,
                channel: 'NCERT Official',
                url: `https://www.youtube.com/ncertofficial/search?query=${encodeURIComponent(meta.title.en)}`,
                language: 'en'
            }
        ],
        bookRefs: input.bookRefs.map((ref) => ({
            title: ref.title,
            author: ref.author,
            chapters: `${ref.chapter} — ${ref.relevance}`,
            type: 'ncert'
        })),
        syllabusReference: isEtt
            ? {
                  title: 'Education Recruitment Board (ERB) Punjab — ETT 5994 Archival Syllabus & Blueprint',
                  url: 'https://entri.app/blog/wp-content/uploads/2022/12/SyllabusPaperB01_12_2022.pdf',
                  body: 'Education Recruitment Board, Punjab',
                  verifiedOn: input.editorialRecord?.lastUpdatedDate || '2026-04-12'
              }
            : isScience
              ? {
                    title: 'Education Recruitment Board (ERB) Punjab — Master Cadre Science Official Syllabus PDF',
                    url: 'https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf',
                    body: 'Education Recruitment Board, Punjab',
                    verifiedOn: input.editorialRecord?.lastUpdatedDate || '2026-04-12'
                }
              : {
                    title: 'Education Recruitment Board (ERB) Punjab — Master Cadre Social Science Official Syllabus Blueprint',
                    url: 'https://educationrecruitmentboard.com/',
                    body: 'Education Recruitment Board, Punjab',
                    verifiedOn: input.editorialRecord?.lastUpdatedDate || '2026-04-12'
                },
        workedExamples: (input.workedExamples || []).map((ex, idx) => ({
            title: {
                en: `Worked Example ${idx + 1} (${meta.title.en})`,
                pa: `ਹੱਲ ਕੀਤੀ ਉਦਾਹਰਣ ${idx + 1}`,
                hi: `हल किया गया उदाहरण ${idx + 1}`
            },
            problem: ex.problem,
            steps: ex.solutionSteps,
            solution: ex.finalAnswer,
            takeaway: ex.finalAnswer
        })),
        commonMisconceptions,
        quickRevisionSheet: input.quickRevisionSheet
            ? {
                  highYieldPoints: input.quickRevisionSheet,
                  keyFormulasOrRules: input.keyNotes,
                  examTraps: {
                      en: commonMisconceptions.map((m) => m.correction.en),
                      pa: commonMisconceptions.map((m) => m.correction.pa),
                      hi: commonMisconceptions.map((m) => m.correction.hi)
                  }
              }
            : undefined,
        editorialRecord: {
            authoredDate: input.editorialRecord?.lastUpdatedDate || '2026-04-12',
            lastUpdatedDate: input.editorialRecord?.lastUpdatedDate || '2026-04-12',
            authoringType: 'authored-curriculum',
            reviewerRecord: input.editorialRecord?.editorialNote,
            verifiedSyllabusDenominator: isEtt ? '200' : '150'
        }
    };
}

export const MASTER_CADRE_BLUEPRINT_LESSONS: Record<string, Lesson> = {
    ...MASTER_CADRE_POLITY_BLUEPRINT_LESSONS,
    ...MASTER_CADRE_ECON_BLUEPRINT_LESSONS,
    ...Object.fromEntries(
        MASTER_CADRE_PUNJAB_HISTORY_BLUEPRINT_LESSONS.map((item) => [item.topicId, adaptBlueprintLesson(item)])
    ),
    ...Object.fromEntries(
        MASTER_CADRE_SCIENCE_PHYSICS_BLUEPRINT_LESSONS.map((item) => [item.topicId, adaptBlueprintLesson(item)])
    ),
    ...Object.fromEntries(
        MASTER_CADRE_SCIENCE_CHEMISTRY_BLUEPRINT_LESSONS.map((item) => [item.topicId, adaptBlueprintLesson(item)])
    ),
    ...Object.fromEntries(
        MASTER_CADRE_SCIENCE_BIOLOGY_BLUEPRINT_LESSONS.map((item) => [item.topicId, adaptBlueprintLesson(item)])
    ),
    ...Object.fromEntries(
        ETT_PUNJABI_LANGUAGES_BLUEPRINT_LESSONS.map((item) => [item.topicId, adaptBlueprintLesson(item)])
    ),
    ...Object.fromEntries(
        ETT_MATH_SCIENCE_SST_BLUEPRINT_LESSONS.map((item) => [item.topicId, adaptBlueprintLesson(item)])
    )
};



