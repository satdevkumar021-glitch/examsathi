import type { Question } from '../questions';

const MASTER_CADRE_PUNJABI_PROVENANCE = {
    source: 'Education Recruitment Board (ERB) Punjab — Master Cadre Punjabi Official Curriculum',
    accessType: 'educational-original' as const,
    verifiedBy: 'ExamSathi Master Cadre Punjabi Editorial Board',
    verifiedDate: '2026-10-14'
};

const MASTER_CADRE_PUNJABI_SOURCE = {
    title: 'Punjab Master Cadre Punjabi Literature & Linguistics Compendium',
    url: 'https://educationrecruitmentboard.com/'
};

export const MASTER_CADRE_PUNJABI_LIT_MCQS: Question[] = [
    // =========================================================================
    // 1. GURMAT KAV & SUFI KAV (punjabi-lit-gurmat-sufi) — 10 MCQs
    // =========================================================================
    {
        id: 'q-mcpl-gs-1',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'In Sri Guru Nanak Dev Ji’s "Japji Sahib", which spiritual realm (Khand) immediately succeeds Gyan Khand in the ascent of human consciousness towards Sachkhand?',
            pa: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਬਾਣੀ "ਜਪੁਜੀ ਸਾਹਿਬ" ਅਨੁਸਾਰ ਗਿਆਨ ਖੰਡ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ ਮਨੁੱਖੀ ਚੇਤਨਾ ਦੇ ਵਿਕਾਸ ਦਾ ਕਿਹੜਾ ਖੰਡ ਆਉਂਦਾ ਹੈ?',
            hi: 'श्री गुरु नानक देव जी की बाणी "जपुजी साहिब" के अनुसार ज्ञान खंड के तुरंत बाद मानव चेतना के विकास का कौन-सा खंड आता है?'
        },
        options: {
            A: { en: 'Saram Khand', pa: 'ਸਰਮ ਖੰਡ', hi: 'सरम खंड' },
            B: { en: 'Dharam Khand', pa: 'ਧਰਮ ਖੰਡ', hi: 'धर्म खंड' },
            C: { en: 'Karam Khand', pa: 'ਕਰਮ ਖੰਡ', hi: 'कर्म खंड' },
            D: { en: 'Sach Khand', pa: 'ਸਚ ਖੰਡ', hi: 'सच खंड' }
        },
        correct: 'A',
        explanation: {
            en: 'The 5 Khands in Japji Sahib unfold in strict ascending hierarchy: Dharam Khand (Duty) -> Gyan Khand (Knowledge) -> Saram Khand (Spiritual Craft/Effort) -> Karam Khand (Grace) -> Sach Khand (Truth).',
            pa: 'ਜਪੁਜੀ ਸਾਹਿਬ ਵਿੱਚ 5 ਖੰਡਾਂ ਦਾ ਸਹੀ ਕ੍ਰਮ ਹੈ: ਧਰਮ ਖੰਡ -> ਗਿਆਨ ਖੰਡ -> ਸਰਮ ਖੰਡ -> ਕਰਮ ਖੰਡ -> ਸਚ ਖੰਡ। ਇਸ ਲਈ ਗਿਆਨ ਖੰਡ ਤੋਂ ਬਾਅਦ ਸਰਮ ਖੰਡ ਆਉਂਦਾ ਹੈ।',
            hi: 'जपुजी साहिब में 5 खंडों का सही क्रम है: धर्म खंड -> ज्ञान खंड -> सरम खंड -> कर्म खंड -> सच खंड। अतः ज्ञान खंड के बाद सरम खंड आता है।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-gs-2',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'To which traditional heroic folk tune (Dhuni) is Sri Guru Nanak Dev Ji’s "Asa di Var" tuned by the directive in Sri Guru Granth Sahib Ji?',
            pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਆਦੇਸ਼ ਅਨੁਸਾਰ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਰਚਨਾ "ਆਸਾ ਦੀ ਵਾਰ" ਨੂੰ ਕਿਸ ਲੋਕ-ਧੁਨੀ ਉੱਤੇ ਗਾਉਣ ਦਾ ਹੁਕਮ ਹੈ?',
            hi: 'श्री गुरु ग्रंथ साहिब जी के निर्देशानुसार श्री गुरु नानक देव जी की रचना "आसा दी वार" को किस लोक-धुनि पर गाने का विधान है?'
        },
        options: {
            A: { en: 'Tunde Asraje di Dhuni', pa: 'ਟੁੰਡੇ ਅਸਰਾਜੇ ਦੀ ਧੁਨੀ', hi: 'टुंडे असराजे दी धुनी' },
            B: { en: 'Rai Kamaldin Mojdin di Dhuni', pa: 'ਰਾਏ ਕਮਾਲਦੀਨ ਮੌਜਦੀਨ ਦੀ ਧੁਨੀ', hi: 'राय कमालदीन मौजदीन दी धुनी' },
            C: { en: 'Sikandar Birahim di Dhuni', pa: 'ਸਿਕੰਦਰ ਬਿਰਾਹਿਮ ਦੀ ਧੁਨੀ', hi: 'सिकंदर बिराहिम दी धुनी' },
            D: { en: 'Lalla Bahalima di Dhuni', pa: 'ਲੱਲਾ ਬਹਲੀਮਾ ਦੀ ਧੁਨੀ', hi: 'लल्ला बहलीमा दी धुनी' }
        },
        correct: 'A',
        explanation: {
            en: 'Asa di Var comprises 24 Pauris composed by Guru Nanak Dev Ji and is explicitly directed to be sung to the folk melody of "Tunde Asraje di Dhuni".',
            pa: 'ਆਸਾ ਦੀ ਵਾਰ ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀਆਂ 24 ਪਉੜੀਆਂ ਹਨ ਅਤੇ ਇਸ ਨੂੰ "ਟੁੰਡੇ ਅਸਰਾਜੇ ਦੀ ਧੁਨੀ" ਉੱਤੇ ਗਾਉਣ ਦਾ ਵਿਸ਼ੇਸ਼ ਨਿਰਦੇਸ਼ ਦਰਜ ਹੈ।',
            hi: 'आसा दी वार में गुरु नानक देव जी की 24 पौड़ियां हैं तथा इसे "टुंडे असराजे दी धुनी" पर गाने का विशिष्ट निर्देश दर्ज है।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-gs-3',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which is recognized as the first "Barah Maha" (Twelve Months calendar poem) in the history of Punjabi literature, and in which Raga is it composed?',
            pa: 'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਇਤਿਹਾਸ ਵਿੱਚ ਪਹਿਲਾ "ਬਾਰਹ ਮਾਹਾ" ਕਿਹੜਾ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇਹ ਕਿਸ ਰਾਗ ਵਿੱਚ ਰਚਿਆ ਗਿਆ ਹੈ?',
            hi: 'पंजाबी साहित्य के इतिहास में प्रथम "बारह माहा" कौन-सा माना जाता है और यह किस राग में रचित है?'
        },
        options: {
            A: { en: 'Barah Maha Tukhari (Sri Guru Nanak Dev Ji)', pa: 'ਬਾਰਹ ਮਾਹਾ ਤੁਖਾਰੀ (ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ)', hi: 'बारह माहा तुखारी (श्री गुरु नानक देव जी)' },
            B: { en: 'Barah Maha Majh (Sri Guru Arjan Dev Ji)', pa: 'ਬਾਰਹ ਮਾਹਾ ਮਾਝ (ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ)', hi: 'बारह माहा माझ (श्री गुरु अर्जन देव जी)' },
            C: { en: 'Barah Maha Gauri (Sri Guru Amar Das Ji)', pa: 'ਬਾਰਹ ਮਾਹਾ ਗਉੜੀ (ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ)', hi: 'बारह माहा गउड़ी (श्री गुरु अमरदास जी)' },
            D: { en: 'Barah Maha Ramkali (Sri Guru Ram Das Ji)', pa: 'ਬਾਰਹ ਮਾਹਾ ਰਾਮਕਲੀ (ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ)', hi: 'बारह माहा रामकली (श्री गुरु रामदास जी)' }
        },
        correct: 'A',
        explanation: {
            en: 'Barah Maha Tukhari composed by Sri Guru Nanak Dev Ji in Raga Tukhari is the earliest extant Barah Maha in Punjabi literature, depicting the seasonal pangs of the soul-bride longing for union with the Divine.',
            pa: 'ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੁਆਰਾ ਤੁਖਾਰੀ ਰਾਗ ਵਿੱਚ ਰਚਿਆ ਗਿਆ "ਬਾਰਹ ਮਾਹਾ ਤੁਖਾਰੀ" ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਸਭ ਤੋਂ ਪਹਿਲਾ ਉਪਲਬਧ ਬਾਰਹ ਮਾਹਾ ਹੈ।',
            hi: 'श्री गुरु नानक देव जी द्वारा तुखारी राग में रचित "बारह माहा तुखारी" पंजाबी साहित्य का सर्वप्रथम उपलब्ध बारह माहा है।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-gs-4',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'How many total Pauris constitute the complete philosophical composition of Sri Guru Amar Das Ji’s "Anand Sahib" in Ramkali Raga?',
            pa: 'ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦੀ ਰਾਮਕਲੀ ਰਾਗ ਵਿੱਚ ਉਚਾਰਨ ਕੀਤੀ ਸ਼ਾਹਕਾਰ ਰਚਨਾ "ਅਨੰਦੁ ਸਾਹਿਬ" ਦੀਆਂ ਕੁੱਲ ਕਿੰਨੀਆਂ ਪਉੜੀਆਂ ਹਨ?',
            hi: 'श्री गुरु अमरदास जी की रामकली राग में उच्चारित कालजयी रचना "आनंदु साहिब" की कुल कितनी पौड़ियां हैं?'
        },
        options: {
            A: { en: '40 Pauris', pa: '40 ਪਉੜੀਆਂ', hi: '40 पौड़ियां' },
            B: { en: '38 Pauris', pa: '38 ਪਉੜੀਆਂ', hi: '38 पौड़ियां' },
            C: { en: '24 Pauris', pa: '24 ਪਉੜੀਆਂ', hi: '24 पौड़ियां' },
            D: { en: '54 Pauris', pa: '54 ਪਉੜੀਆਂ', hi: '54 पौड़ियां' }
        },
        correct: 'A',
        explanation: {
            en: 'Anand Sahib consists of 40 Pauris composed in Raga Ramkali by the third Guru, Sri Guru Amar Das Ji. In standard short liturgical recitation, the first 5 and the 40th Pauri are recited.',
            pa: 'ਅਨੰਦੁ ਸਾਹਿਬ ਦੀਆਂ ਕੁੱਲ 40 ਪਉੜੀਆਂ ਹਨ ਜੋ ਤੀਜੇ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦੁਆਰਾ ਰਾਮਕਲੀ ਰਾਗ ਵਿੱਚ ਦਰਜ ਕੀਤੀਆਂ ਗਈਆਂ ਹਨ।',
            hi: 'आनंदु साहिब में कुल 40 पौड़ियां हैं जो तृतीय पातशाह श्री गुरु अमरदास जी द्वारा रामकली राग में रचित हैं।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-gs-5',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Sri Guru Ram Das Ji solemnized the Sikh egalitarian wedding ceremony (Anand Karaj) through the composition of "Lavan". In which Raga and poetic meter are the Lavan composed?',
            pa: 'ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਨੇ "ਲਾਵਾਂ" ਬਾਣੀ ਰਾਹੀਂ ਸਿੱਖ ਅਨੰਦ ਕਾਰਜ ਵਿਆਹ ਵਿਧੀ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ। ਲਾਵਾਂ ਬਾਣੀ ਕਿਸ ਰਾਗ ਅਤੇ ਕਾਵਿ ਰੂਪ ਵਿੱਚ ਦਰਜ ਹੈ?',
            hi: 'श्री गुरु रामदास जी ने "लावार" बाणी द्वारा सिख आनंद कारज विवाह पद्धति की स्थापना की। लावार बाणी किस राग और काव्य रूप में दर्ज है?'
        },
        options: {
            A: { en: 'Suhi Raga — 4 Chhands', pa: 'ਸੂਹੀ ਰਾਗ — 4 ਛੰਤ', hi: 'सूही राग — 4 छंद' },
            B: { en: 'Asa Raga — 4 Pauris', pa: 'ਆਸਾ ਰਾਗ — 4 ਪਉੜੀਆਂ', hi: 'आसा राग — 4 पौड़ियां' },
            C: { en: 'Wadhans Raga — 4 Ghorian', pa: 'ਵਡਹੰਸ ਰਾਗ — 4 ਘੋੜੀਆਂ', hi: 'वड़हंस राग — 4 घोड़ियां' },
            D: { en: 'Bilawal Raga — 4 Ashtpadis', pa: 'ਬਿਲਾਵਲ ਰਾਗ — 4 ਅਸ਼ਟਪਦੀਆਂ', hi: 'बिलावल राग — 4 अष्टपदियां' }
        },
        correct: 'A',
        explanation: {
            en: 'The Lavan were composed by the fourth Guru, Sri Guru Ram Das Ji, in Raga Suhi, comprising 4 Chhands that delineate four spiritual stages of bridal union with the Divine Spouse.',
            pa: 'ਲਾਵਾਂ ਚੌਥੇ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਦੁਆਰਾ ਸੂਹੀ ਰਾਗ ਵਿੱਚ ਰਚੀਆਂ ਗਈਆਂ ਹਨ ਜਿਨ੍ਹਾਂ ਵਿੱਚ 4 ਛੰਤ ਹਨ।',
            hi: 'लावार चतुर्थ पातशाह श्री गुरु रामदास जी द्वारा सूही राग में रचित हैं, जिसमें 4 छंद संकलित हैं।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-gs-6',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'What is the internal structural composition of Sri Guru Arjan Dev Ji’s "Sukhmani Sahib" in Raga Gauri?',
            pa: 'ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੁਆਰਾ ਗਉੜੀ ਰਾਗ ਵਿੱਚ ਰਚੀ ਬਾਣੀ "ਸੁਖਮਨੀ ਸਾਹਿਬ" ਦੀ ਅੰਦਰੂਨੀ ਬਣਤਰ ਕਿਹੋ ਜਿਹੀ ਹੈ?',
            hi: 'श्री गुरु अर्जन देव जी द्वारा गउड़ी राग में रचित बाणी "सुखमनी साहिब" की आंतरिक संरचना कैसी है?'
        },
        options: {
            A: { en: '24 Ashtpadis, each preceded by a Salok', pa: '24 ਅਸ਼ਟਪਦੀਆਂ, ਹਰੇਕ ਅਸ਼ਟਪਦੀ ਤੋਂ ਪਹਿਲਾਂ ਇੱਕ ਸਲੋਕ', hi: '24 अष्टपदियां, प्रत्येक अष्टपदी से पूर्व एक श्लोक' },
            B: { en: '30 Pauris, each followed by 2 Saloks', pa: '30 ਪਉੜੀਆਂ, ਹਰੇਕ ਪਉੜੀ ਦੇ ਪਿੱਛੇ 2 ਸਲੋਕ', hi: '30 पौड़ियां, प्रत्येक पौड़ी के पीछे 2 श्लोक' },
            C: { en: '16 Chhands interspersed with Swayyas', pa: '16 ਛੰਤ ਅਤੇ ਵਿਚਕਾਰ ਸਵੱਈਏ', hi: '16 छंद और बीच में सवैये' },
            D: { en: '54 Pauris set to Gauri Ki Var', pa: '54 ਪਉੜੀਆਂ ਗਉੜੀ ਕੀ ਵਾਰ ਅਨੁਸਾਰ', hi: '54 पौड़ियां गउड़ी की वार अनुसार' }
        },
        correct: 'A',
        explanation: {
            en: 'Sukhmani Sahib in Gauri Raga comprises exactly 24 Ashtpadis (8-stanza units). Each Ashtpadi is preceded by a thematic Salok, outlining peace, meditation, and the qualities of a Brahmgyani.',
            pa: 'ਸੁਖਮਨੀ ਸਾਹਿਬ ਵਿੱਚ ਕੁੱਲ 24 ਅਸ਼ਟਪਦੀਆਂ ਹਨ ਅਤੇ ਹਰੇਕ ਅਸ਼ਟਪਦੀ ਦੇ ਆਰੰਭ ਵਿੱਚ ਇੱਕ ਸਲੋਕ ਆਉਂਦਾ ਹੈ (ਕੁੱਲ 24 ਸਲੋਕ ਤੇ 24 ਅਸ਼ਟਪਦੀਆਂ)।',
            hi: 'सुखमनी साहिब में कुल 24 अष्टपदियां हैं तथा प्रत्येक अष्टपदी के प्रारंभ में एक श्लोक आता है (कुल 24 श्लोक व 24 अष्टपदियां)।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-gs-7',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which unique 31st Raga was incorporated into Sri Guru Granth Sahib Ji exclusively through the hymns of the ninth master, Sri Guru Tegh Bahadur Ji?',
            pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਨੌਵੇਂ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ ਰਾਹੀਂ ਕਿਹੜਾ ਵਿਲੱਖਣ 31ਵਾਂ ਰਾਗ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ ਸੀ?',
            hi: 'श्री गुरु ग्रंथ साहिब जी में नौवें पातशाह श्री गुरु तेग बहादुर जी की बाणी के माध्यम से कौन-सा विशिष्ट 31वाँ राग सम्मिलित किया गया था?'
        },
        options: {
            A: { en: 'Raga Jaijaiwanti', pa: 'ਜੈਜਾਵੰਤੀ ਰਾਗ', hi: 'जयजावंती राग' },
            B: { en: 'Raga Maru', pa: 'ਮਾਰੂ ਰਾਗ', hi: 'मारू राग' },
            C: { en: 'Raga Basant', pa: 'ਬਸੰਤ ਰਾਗ', hi: 'बसंत राग' },
            D: { en: 'Raga Todi', pa: 'ਟੋਡੀ ਰਾਗ', hi: 'टोडी राग' }
        },
        correct: 'A',
        explanation: {
            en: 'Raga Jaijaiwanti is the final (31st) Raga of Sri Guru Granth Sahib Ji. Only Sri Guru Tegh Bahadur Ji composed hymns in this Raga (4 Shabads).',
            pa: 'ਜੈਜਾਵੰਤੀ ਰਾਗ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ 31ਵਾਂ ਅਤੇ ਆਖ਼ਰੀ ਰਾਗ ਹੈ, ਜਿਸ ਵਿੱਚ ਸਿਰਫ਼ ਨੌਵੇਂ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੇ 4 ਸ਼ਬਦ ਦਰਜ ਹਨ।',
            hi: 'जयजावंती राग श्री गुरु ग्रंथ साहिब जी का 31वाँ एवं अंतिम राग है, जिसमें केवल नौवें पातशाह श्री गुरु तेग बहादुर जी के 4 शब्द दर्ज हैं।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-gs-8',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Among all the 15 Bhagats whose compositions are enshrined in Sri Guru Granth Sahib Ji, which Bhagat has the largest volume of bani included?',
            pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ 15 ਭਗਤਾਂ ਵਿੱਚੋਂ ਕਿਸ ਭਗਤ ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਬਾਣੀ ਸ਼ਾਮਲ ਹੈ?',
            hi: 'श्री गुरु ग्रंथ साहिब जी में संकलित 15 भक्तों में से किस भक्त की सर्वाधिक वाणी सम्मिलित है?'
        },
        options: {
            A: { en: 'Bhagat Kabir Ji (541 hymns & 243 Saloks)', pa: 'ਭਗਤ ਕਬੀਰ ਜੀ (541 ਸ਼ਬਦ ਅਤੇ 243 ਸਲੋਕ)', hi: 'भक्त कबीर जी (541 शब्द और 243 श्लोक)' },
            B: { en: 'Bhagat Namdev Ji (60 hymns)', pa: 'ਭਗਤ ਨਾਮਦੇਵ ਜੀ (60 ਸ਼ਬਦ)', hi: 'भक्त नामदेव जी (60 शब्द)' },
            C: { en: 'Bhagat Ravidas Ji (41 hymns)', pa: 'ਭਗਤ ਰਵਿਦਾਸ ਜੀ (41 ਸ਼ਬਦ)', hi: 'भक्त रविदास जी (41 शब्द)' },
            D: { en: 'Bhagat Trilochan Ji (20 hymns)', pa: 'ਭਗਤ ਤ੍ਰਿਲੋਚਨ ਜੀ (20 ਸ਼ਬਦ)', hi: 'भक्त त्रिलोचन जी (20 शब्द)' }
        },
        correct: 'A',
        explanation: {
            en: 'Bhagat Kabir Ji contributed the largest share of Bhagat Bani in SGGS, comprising 541 hymns and 243 Saloks across 17 Ragas, fearlessly criticizing caste hierarchies and empty ritualism.',
            pa: 'ਭਗਤ ਕਬੀਰ ਜੀ ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਬਾਣੀ (541 ਸ਼ਬਦ ਅਤੇ 243 ਸਲੋਕ, 17 ਰਾਗਾਂ ਵਿੱਚ) ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ ਹੈ।',
            hi: 'भक्त कबीर जी की सर्वाधिक वाणी (541 शब्द तथा 243 श्लोक, 17 रागों में) श्री गुरु ग्रंथ साहिब जी में संकलित है।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-gs-9',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'To which Sufi Silsilah (order) did Baba Sheikh Farid-ud-din Masud Ganjshakar belong, and in which century did he establish written Punjabi poetry?',
            pa: 'ਬਾਬਾ ਸ਼ੇਖ਼ ਫ਼ਰੀਦ-ਉਦ-ਦੀਨ ਮਸਊਦ ਗੰਜਸ਼ਕਰ ਕਿਸ ਸੂਫ਼ੀ ਸਿਲਸਿਲੇ ਨਾਲ ਸਬੰਧਤ ਸਨ ਅਤੇ ਉਹਨਾਂ ਨੇ ਕਿਸ ਸਦੀ ਵਿੱਚ ਪੰਜਾਬੀ ਲਿਖਤੀ ਕਵਿਤਾ ਦਾ ਆਰੰਭ ਕੀਤਾ?',
            hi: 'बाबा शेख़ फ़रीद-उद-दीन मसूद गंजशकर किस सूफ़ी सिलसिले से संबंधित थे और उन्होंने किस सदी में पंजाबी लिखित कविता का प्रारंभ किया?'
        },
        options: {
            A: { en: 'Chishti Silsilah — 12th–13th Century CE', pa: 'ਚਿਸ਼ਤੀ ਸਿਲਸਿਲਾ — 12ਵੀਂ-13ਵੀਂ ਸਦੀ', hi: 'चिश्ती सिलसिला — 12वीं-13वीं सदी' },
            B: { en: 'Qadiri Silsilah — 16th Century CE', pa: 'ਕਾਦਰੀ ਸਿਲਸਿਲਾ — 16ਵੀਂ ਸਦੀ', hi: 'कादरी सिलसिला — 16वीं सदी' },
            C: { en: 'Suhrawardi Silsilah — 14th Century CE', pa: 'ਸੁਹਰਾਵਰਦੀ ਸਿਲਸਿਲਾ — 14ਵੀਂ ਸਦੀ', hi: 'सुहरावर्दी सिलसिला — 14वीं सदी' },
            D: { en: 'Naqshbandi Silsilah — 17th Century CE', pa: 'ਨਕਸ਼ਬੰਦੀ ਸਿਲਸਿਲਾ — 17ਵੀਂ ਸਦੀ', hi: 'नक़्शबंदी सिलसिला — 17वीं सदी' }
        },
        correct: 'A',
        explanation: {
            en: 'Baba Farid (1173–1265 CE) belonged to the Chishti Silsilah, was a disciple of Khwaja Qutbuddin Bakhtiyar Kaki, and settled at Ajodhan (Pakpattan). He is the pioneer of Punjabi Sufi poetry.',
            pa: 'ਬਾਬਾ ਫ਼ਰੀਦ ਜੀ (1173–1265 ਈ.) ਚਿਸ਼ਤੀ ਸਿਲਸਿਲੇ ਨਾਲ ਸਬੰਧਤ ਸਨ ਅਤੇ ਖ਼ਵਾਜਾ ਕੁਤਬੁਦੀਨ ਬਖ਼ਤਿਆਰ ਕਾਕੀ ਦੇ ਮੁਰੀਦ ਸਨ। ਉਹ 12ਵੀਂ-13ਵੀਂ ਸਦੀ ਵਿੱਚ ਪੰਜਾਬੀ ਸੂਫ਼ੀ ਕਾਵਿ ਦੇ ਮੋਢੀ ਬਣੇ।',
            hi: 'बाबा फ़रीद (1173–1265 ई.) चिश्ती सिलसिले से थे और ख़्वाजा कुतुबुद्दीन बख़्तियार काकी के शिष्य थे। वे 12वीं-13वीं सदी में पंजाबी सूफ़ी काव्य के जनक बने।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-gs-10',
        topicId: 'punjabi-lit-gurmat-sufi',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which iconic Punjabi Sufi poet composed poetic stanzas known as "Abyat", characterized by the recurring musical refrain and end-rhyme "Hoo" (ਹੂ)?',
            pa: 'ਕਿਸ ਮਹਾਨ ਪੰਜਾਬੀ ਸੂਫ਼ੀ ਕਵੀ ਨੇ "ਅਬਯਾਤ" ਕਾਵਿ ਰੂਪ ਦੀ ਰਚਨਾ ਕੀਤੀ, ਜਿਸਦੀ ਹਰ ਤੁਕ ਦੇ ਅਖ਼ੀਰ ਵਿੱਚ ਸੰਗੀਤਕ ਰਦੀਫ਼ "ਹੂ" ਆਉਂਦੀ ਹੈ?',
            hi: 'किस महान पंजाबी सूफ़ी कवि ने "अबयात" काव्य विधा की रचना की, जिसकी प्रत्येक पंक्ति के अंत में संगीतात्मक रदीफ़ "हू" आता है?'
        },
        options: {
            A: { en: 'Hazrat Sultan Bahu', pa: 'ਹਜ਼ਰਤ ਸੁਲਤਾਨ ਬਾਹੂ', hi: 'हज़रत सुल्तान बाहू' },
            B: { en: 'Hazrat Bulleh Shah', pa: 'ਹਜ਼ਰਤ ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ', hi: 'हज़रत बुल्ले शाह' },
            C: { en: 'Hazrat Shah Hussain', pa: 'ਹਜ਼ਰਤ ਸ਼ਾਹ ਹੁਸੈਨ', hi: 'हज़रत शाह हुसैन' },
            D: { en: 'Khwaja Ghulam Farid', pa: 'ਖ਼ਵਾਜਾ ਗ਼ੁਲਾਮ ਫ਼ਰੀਦ', hi: 'ख़्वाजा ग़ुलाम फ़रीद' }
        },
        correct: 'A',
        explanation: {
            en: 'Sultan Bahu (1628–1691 CE) of Shorekot (Jhang) wrote Abyat in the Sarwari Qadiri tradition, universally recognized for the repeated spiritual cry "Hoo" at the end of each verse line (e.g. "Alif Allah chambe di booti... hoo").',
            pa: 'ਸੁਲਤਾਨ ਬਾਹੂ (ਸ਼ੋਰਕੋਟ) ਨੇ ਅਬਯਾਤ ਕਾਵਿ ਰੂਪ ਵਿੱਚ ਰਚਨਾ ਕੀਤੀ ਜਿਸਦੀ ਹਰ ਤੁਕ ਦੇ ਅੰਤ ਵਿੱਚ ਰਦੀਫ਼ "ਹੂ" (ਪਰਮਾਤਮਾ ਦਾ ਸੂਚਕ) ਆਉਂਦੀ ਹੈ।',
            hi: 'सुल्तान बाहू (शोरकोट) ने अबयात विधा में काव्य रचना की जिसकी प्रत्येक पंक्ति के अंत में "हू" (ईश्वर वाचक रदीफ़) आता है।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },

    // =========================================================================
    // 2. QISSA KAV & BIR KAV (punjabi-lit-qissa-bir) — 10 MCQs
    // =========================================================================
    {
        id: 'q-mcpl-qb-1',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'During whose imperial Mughal reign was the first extant written Punjabi Qissa of "Heer Ranjha" composed by Damodar Gulati, and what poetic meter did he employ?',
            pa: 'ਦਮੋਦਰ ਗੁਲਾਟੀ ਨੇ ਪੰਜਾਬੀ ਵਿੱਚ ਹੀਰ ਦਾ ਪਹਿਲਾ ਲਿਖਤੀ ਕਿੱਸਾ ਕਿਸ ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਦੇ ਰਾਜਕਾਲ ਦੌਰਾਨ ਰਚਿਆ ਅਤੇ ਇਸ ਵਿੱਚ ਕਿਹੜਾ ਛੰਦ ਵਰਤਿਆ?',
            hi: 'दामोदर गुलाटी ने पंजाबी में हीर का प्रथम लिखित क़िस्सा किस मुग़ल बादशाह के शासनकाल में रचा और इसमें कौन-सा छंद प्रयुक्त किया?'
        },
        options: {
            A: { en: 'Akbar — Davaiya Chhand', pa: 'ਅਕਬਰ — ਦਵੱਈਆ ਛੰਦ', hi: 'अकबर — दवैया छंद' },
            B: { en: 'Jahangir — Baint Chhand', pa: 'ਜਹਾਂਗੀਰ — ਬੈਂਤ ਛੰਦ', hi: 'जहाँगीर — बैंत छंद' },
            C: { en: 'Shah Jahan — Sad Chhand', pa: 'ਸ਼ਾਹਜਹਾਂ — ਸਦ ਛੰਦ', hi: 'शाहजहाँ — सद छंद' },
            D: { en: 'Babur — Chaupai Chhand', pa: 'ਬਾਬਰ — ਚੌਪਈ ਛੰਦ', hi: 'बाबर — चौपाई छंद' }
        },
        correct: 'A',
        explanation: {
            en: 'Damodar Gulati of Jhang was a contemporary of Mughal Emperor Akbar. He authored the first written Heer in Punjabi using Davaiya meter and claimed eye-witness authority ("Akkhi dithaa kissa kita").',
            pa: 'ਦਮੋਦਰ ਗੁਲਾਟੀ ਬਾਦਸ਼ਾਹ ਅਕਬਰ ਦੇ ਸਮਕਾਲੀ ਸਨ। ਉਹਨਾਂ ਨੇ ਦਵੱਈਆ ਛੰਦ ਵਿੱਚ ਪੰਜਾਬੀ ਦੀ ਪਹਿਲੀ ਉਪਲਬਧ ਹੀਰ ਰਚੀ।',
            hi: 'दामोदर गुलाटी बादशाह अकबर के समकालीन थे। उन्होंने दवैया छंद में पंजाबी की प्रथम उपलब्ध हीर रची।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-qb-2',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which poetic meter is the hallmark of Pilu’s legendary Qissa "Mirza Sahiba", prompting later poet Ahmad Yar to praise its unmatched pathos ("Soz-o-Gudaz")?',
            pa: 'ਪੀਲੂ ਦੇ ਸ਼ਾਹਕਾਰ ਕਿੱਸੇ "ਮਿਰਜ਼ਾ ਸਾਹਿਬਾ" ਦੀ ਪਛਾਣ ਕਿਹੜਾ ਕਾਵਿ ਛੰਦ ਹੈ, ਜਿਸਦੇ ਦਰਦ (ਸੋਜ਼ੋ ਗੁਦਾਜ਼) ਦੀ ਤਾਰੀਫ਼ ਬਾਅਦ ਵਿੱਚ ਕਵੀ ਅਹਿਮਦਯਾਰ ਨੇ ਕੀਤੀ?',
            hi: 'पीलू के कालजयी क़िस्से "मिर्ज़ा साहिबाँ" की पहचान कौन-सा छंद है, जिसके कारुणिक दर्द की प्रशंसा बाद में कवि अहमदयार ने की?'
        },
        options: {
            A: { en: 'Sad Chhand', pa: 'ਸਦ ਛੰਦ', hi: 'सद छंद' },
            B: { en: 'Baint Chhand', pa: 'ਬੈਂਤ ਛੰਦ', hi: 'बैंत छंद' },
            C: { en: 'Davaiya Chhand', pa: 'ਦਵੱਈਆ ਛੰਦ', hi: 'दवैया छंद' },
            D: { en: 'Kundliya Chhand', pa: 'ਕੁੰਡਲੀਆ ਛੰਦ', hi: 'कुंडलीया छंद' }
        },
        correct: 'A',
        explanation: {
            en: 'Pilu composed the first Mirza Sahiba in "Sad Chhand", a long mournful musical lament meter unmatched for conveying fatalism, tragic tension, and emotional heartbreak.',
            pa: 'ਪੀਲੂ ਨੇ ਮਿਰਜ਼ਾ ਸਾਹਿਬਾ ਦਾ ਕਿੱਸਾ "ਸਦ ਛੰਦ" ਵਿੱਚ ਲਿਖਿਆ, ਜੋ ਇੱਕ ਲੰਮੀ ਹੇਕ ਵਾਲਾ ਸ਼ੋਕ-ਮਈ ਛੰਦ ਹੈ।',
            hi: 'पीलू ने मिर्ज़ा साहिबाँ का क़िस्सा "सद छंद" में लिखा, जो दीर्घ आलाप वाला कारुणिक छंद है।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-qb-3',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'In which year did Waris Shah complete his monumental work "Heer Waris" at Malka Hans, which is acclaimed as the comprehensive encyclopedia of Punjabi culture?',
            pa: 'ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ ਪਿੰਡ ਮਲਕਾ ਹੰਸ ਵਿਖੇ ਆਪਣਾ ਸ਼ਾਹਕਾਰ ਕਿੱਸਾ "ਹੀਰ ਵਾਰਿਸ" ਕਿਸ ਸਾਲ ਸੰਪੂਰਨ ਕੀਤਾ, ਜਿਸ ਨੂੰ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਦਾ ਵਿਸ਼ਵਕੋਸ਼ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
            hi: 'वारिस शाह ने गाँव मलका हंस में अपना अमर क़िस्सा "हीर वारिस" किस वर्ष पूर्ण किया, जिसे पंजाबी संस्कृति का विश्वकोश कहा जाता है?'
        },
        options: {
            A: { en: '1766 CE', pa: '1766 ਈ.', hi: '1766 ई.' },
            B: { en: '1708 CE', pa: '1708 ਈ.', hi: '1708 ई.' },
            C: { en: '1801 CE', pa: '1801 ਈ.', hi: '1801 ई.' },
            D: { en: '1739 CE', pa: '1739 ਈ.', hi: '1739 ई.' }
        },
        correct: 'A',
        explanation: {
            en: 'Waris Shah completed Heer in 1766 CE (1180 Hijri) in Baint meter at Malka Hans. It offers encyclopedic descriptions of 18th-century Punjabi customs, dialects, professions, and flora/fauna.',
            pa: 'ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ ਆਪਣੀ ਹੀਰ 1766 ਈ. (1180 ਹਿਜਰੀ) ਵਿੱਚ ਬੈਂਤ ਛੰਦ ਵਿੱਚ ਸੰਪੂਰਨ ਕੀਤੀ। ਇਸ ਨੂੰ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਦਾ ਵਿਸ਼ਵਕੋਸ਼ (Encyclopedia) ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।',
            hi: 'वारिस शाह ने अपनी हीर 1766 ई. (1180 हिजरी) में बैंत छंद में पूर्ण की। इसे पंजाबी संस्कृति का विश्वकोश माना जाता है।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-qb-4',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which celebrated court poet of Maharaja Ranjit Singh is universally acclaimed for capturing the scorching desert tragedy of "Sassi Punnu" in Davaiya meter?',
            pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਕਿਸ ਪ੍ਰਸਿੱਧ ਦਰਬਾਰੀ ਕਵੀ ਨੂੰ ਦਵੱਈਆ ਛੰਦ ਵਿੱਚ ਥਲ ਦੇ ਮਾਰੂਥਲ ਵਿੱਚ ਸੱਸੀ ਦੇ ਦਰਦਮਈ ਵਿਯੋਗ ਨੂੰ "ਸੱਸੀ ਪੁੰਨੂੰ" ਕਿੱਸੇ ਵਿੱਚ ਅਮਰ ਕਰਨ ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?',
            hi: 'महाराजा रणजीत सिंह के किस प्रसिद्ध दरबारी कवि को दवैया छंद में मरुस्थल में सस्सी के वियोग को "सस्सी पुन्नू" क़िस्से में अमर करने हेतु जाना जाता है?'
        },
        options: {
            A: { en: 'Hashim Shah', pa: 'ਹਾਸ਼ਮ ਸ਼ਾਹ', hi: 'हाशिम शाह' },
            B: { en: 'Fazal Shah', pa: 'ਫ਼ਜ਼ਲ ਸ਼ਾਹ', hi: 'फ़ज़ल शाह' },
            C: { en: 'Qadiryar', pa: 'ਕਾਦਰਯਾਰ', hi: 'कादरयार' },
            D: { en: 'Ahmad Yar', pa: 'ਅਹਿਮਦਯਾਰ', hi: 'अहमदयार' }
        },
        correct: 'A',
        explanation: {
            en: 'Hashim Shah (1735–1843 CE) of Jagdeo Kalan, a court poet of Maharaja Ranjit Singh, authored the most poignant version of Qissa Sassi Punnu in Davaiya meter, known for restraint and sorrow.',
            pa: 'ਹਾਸ਼ਮ ਸ਼ਾਹ (ਜਗਦੇਵ ਕਲਾਂ) ਨੇ ਦਵੱਈਆ ਛੰਦ ਵਿੱਚ ਸੱਸੀ ਪੁੰਨੂੰ ਦੀ ਰਚਨਾ ਕੀਤੀ। ਉਹ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਦਰਬਾਰੀ ਕਵੀ ਸਨ।',
            hi: 'हाशिम शाह ने दवैया छंद में सस्सी पुन्नू की रचना की। वे महाराजा रणजीत सिंह के दरबारी कवि थे।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-qb-5',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Who was the first poet to introduce the Persian romantic legend "Yousaf Zulaikha" into written Punjabi verse during the 17th century?',
            pa: '17ਵੀਂ ਸਦੀ ਦੌਰਾਨ ਫ਼ਾਰਸੀ ਪ੍ਰੇਮ-ਕਥਾ "ਯੂਸਫ਼ ਜ਼ੁਲੈਖ਼ਾ" ਨੂੰ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਪੰਜਾਬੀ ਕਾਵਿ-ਰੂਪ ਵਿੱਚ ਲਿਖਣ ਵਾਲਾ ਕਿੱਸਾਕਾਰ ਕੌਣ ਸੀ?',
            hi: '17वीं सदी में फ़ारसी प्रेमाख्यान "यूसुफ़ ज़ुलैख़ा" को सर्वप्रथम पंजाबी काव्य में प्रस्तुत करने वाले क़िस्साकार कौन थे?'
        },
        options: {
            A: { en: 'Hafiz Barkhurdar', pa: 'ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ', hi: 'हाफ़िज़ बरख़ुरदार' },
            B: { en: 'Damodar Gulati', pa: 'ਦਮੋਦਰ ਗੁਲਾਟੀ', hi: 'दामोदर गुलाटी' },
            C: { en: 'Fazal Shah', pa: 'ਫ਼ਜ਼ਲ ਸ਼ਾਹ', hi: 'फ़ज़ल शाह' },
            D: { en: 'Kishan Singh Arif', pa: 'ਕਿਸ਼ਨ ਸਿੰਘ ਆਰਫ਼', hi: 'किशन सिंह आरिफ़' }
        },
        correct: 'A',
        explanation: {
            en: 'Hafiz Barkhurdar (17th c.), a contemporary of Aurangzeb, was the first to write the Islamic romantic narrative Yousaf Zulaikha in Punjabi, along with versions of Mirza Sahiba and Sassi Punnu.',
            pa: 'ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ ਨੇ ਪੰਜਾਬੀ ਵਿੱਚ ਪਹਿਲੀ ਵਾਰ \'ਯੂਸਫ਼ ਜ਼ੁਲੈਖ਼ਾ\' ਦਾ ਕਿੱਸਾ ਲਿਖਿਆ। ਉਹ ਔਰੰਗਜ਼ੇਬ ਦੇ ਸਮਕਾਲੀ ਸਨ।',
            hi: 'हाफ़िज़ बरख़ुरदार ने पंजाबी में सर्वप्रथम \'यूसुफ़ ज़ुलैख़ा\' का क़िस्सा लिखा। वे औरंगज़ेब के समकालीन थे।'
        },
        difficulty: 'hard',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-qb-6',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'For composing which iconic Qissa was Qadiryar rewarded with a well (Khoo) and agricultural land by Maharaja Ranjit Singh?',
            pa: 'ਕਾਦਰਯਾਰ ਨੂੰ ਕਿਹੜਾ ਪ੍ਰਸਿੱਧ ਕਿੱਸਾ ਰਚਣ ਬਦਲੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਵੱਲੋਂ ਇੱਕ ਖੂਹ ਅਤੇ ਜ਼ਮੀਨ ਇਨਾਮ ਵਜੋਂ ਦਿੱਤੀ ਗਈ ਸੀ?',
            hi: 'क़ादरयार को कौन-सा प्रसिद्ध क़िस्सा रचने के उपलक्ष्य में महाराजा रणजीत सिंह द्वारा एक कुआँ व भूमि उपहार में दी गई थी?'
        },
        options: {
            A: { en: 'Qissa Puran Bhagat', pa: 'ਕਿੱਸਾ ਪੂਰਨ ਭਗਤ', hi: 'क़िस्सा पूरन भगत' },
            B: { en: 'Qissa Sohni Mahiwal', pa: 'ਕਿੱਸਾ ਸੋਹਣੀ ਮਹੀਵਾਲ', hi: 'क़िस्सा सोहणी महीवाल' },
            C: { en: 'Qissa Raja Rasalu', pa: 'ਕਿੱਸਾ ਰਾਜਾ ਰਸਾਲੂ', hi: 'क़िस्सा राजा रसालू' },
            D: { en: 'Qissa Heer Ranjha', pa: 'ਕਿੱਸਾ ਹੀਰ ਰਾਂਝਾ', hi: 'क़िस्सा हीर राँझा' }
        },
        correct: 'A',
        explanation: {
            en: 'Maharaja Ranjit Singh rewarded Qadiryar of Machhike with an irrigation well in his village for composing Qissa Puran Bhagat in Siharfi poetic form.',
            pa: 'ਕਾਦਰਯਾਰ ਨੂੰ ਸੀਹਰਫ਼ੀ ਰੂਪ ਵਿੱਚ "ਕਿੱਸਾ ਪੂਰਨ ਭਗਤ" ਰਚਣ ਬਦਲੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਨੇ ਮਾਛੀਕੇ ਪਿੰਡ ਵਿੱਚ ਇੱਕ ਖੂਹ ਇਨਾਮ ਵਿੱਚ ਦਿੱਤਾ ਸੀ।',
            hi: 'क़ादरयार को सीहरफ़ी रूप में "क़िस्सा पूरन भगत" रचने पर महाराजा रणजीत सिंह ने माछीके गाँव में एक कुआँ पुरस्कार में दिया था।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-qb-7',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which 19th-century Punjabi Qissakar is celebrated for breathtaking verbal acrobatics, Tajnees (pun), Yamaka, and ornate Persianized diction in "Qissa Sohni Mahiwal"?',
            pa: '19ਵੀਂ ਸਦੀ ਦਾ ਕਿਹੜਾ ਪੰਜਾਬੀ ਕਿੱਸਾਕਾਰ "ਕਿੱਸਾ ਸੋਹਣੀ ਮਹੀਵਾਲ" ਵਿੱਚ ਸ਼ਬਦੀ ਚਮਤਕਾਰਾਂ, ਤਜਨੀਸ, ਯਮਕ ਅਤੇ ਅਲੰਕਾਰਿਕ ਫ਼ਾਰਸੀਨੁਮਾ ਸ਼ੈਲੀ ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?',
            hi: '19वीं सदी के कौन-से पंजाबी क़िस्साकार "क़िस्सा सोहणी महीवाल" में अद्भुत शब्द-संयोजन, तजनीस, यमक और आलंकारिक शैली हेतु प्रसिद्ध हैं?'
        },
        options: {
            A: { en: 'Fazal Shah', pa: 'ਫ਼ਜ਼ਲ ਸ਼ਾਹ', hi: 'फ़ज़ल शाह' },
            B: { en: 'Hashim Shah', pa: 'ਹਾਸ਼ਮ ਸ਼ਾਹ', hi: 'हाशिम शाह' },
            C: { en: 'Qadiryar', pa: 'ਕਾਦਰਯਾਰ', hi: 'कादरयार' },
            D: { en: 'Imam Bakhsh', pa: 'ਇਮਾਮ ਬਖ਼ਸ਼', hi: 'इमाम बख़्श' }
        },
        correct: 'A',
        explanation: {
            en: 'Fazal Shah of Newan Kot, Lahore, composed Sohni Mahiwal in Baint meter, renowned for unmatched linguistic pyrotechnics, alliteration, and Tajnees (homonymic word play).',
            pa: 'ਫ਼ਜ਼ਲ ਸ਼ਾਹ (ਲਾਹੌਰ) ਨੇ ਸੋਹਣੀ ਮਹੀਵਾਲ ਵਿੱਚ ਤਜਨੀਸ ਅਤੇ ਸ਼ਬਦ-ਜੜਤ ਦੀ ਬੇਮਿਸਾਲ ਕਲਾ ਦਾ ਪ੍ਰਦਰਸ਼ਨ ਕੀਤਾ।',
            hi: 'फ़ज़ल शाह (लाहौर) ने सोहणी महीवाल में तजनीस और शब्द-शिल्प की अप्रतिम कला का प्रदर्शन किया।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-qb-8',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'How many total stanzas are there in Sri Guru Gobind Singh Ji’s "Chandi di Var", and which two specific meters (Chhands) are utilized in its Pauris?',
            pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਰਚਿਤ "ਚੰਡੀ ਦੀ ਵਾਰ" ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਬੰਦ ਹਨ ਅਤੇ ਇਸ ਦੀਆਂ ਪਉੜੀਆਂ ਵਿੱਚ ਕਿਹੜੇ ਦੋ ਛੰਦ ਵਰਤੇ ਗਏ ਹਨ?',
            hi: 'श्री गुरु गोबिंद सिंह जी द्वारा रचित "चंडी दी वार" में कुल कितने छंद हैं और इसकी पौड़ियों में कौन-से दो छंद प्रयुक्त हुए हैं?'
        },
        options: {
            A: { en: '55 stanzas — Sirkhindi (21) & Nishani (33) Chhand + 1 Dohra', pa: '55 ਬੰਦ — ਸਿਰਖੰਡੀ (21) ਤੇ ਨਿਸ਼ਾਨੀ (33) ਛੰਦ + 1 ਦੋਹਰਾ', hi: '55 छंद — सिरखंडी (21) व निशानी (33) छंद + 1 दोहा' },
            B: { en: '54 stanzas — Davaiya (24) & Baint (30) Chhand', pa: '54 ਬੰਦ — ਦਵੱਈਆ (24) ਤੇ ਬੈਂਤ (30) ਛੰਦ', hi: '54 छंद — दवैया (24) व बैंत (30) छंद' },
            C: { en: '40 stanzas — Chaupai (20) & Radd (20) Chhand', pa: '40 ਬੰਦ — ਚੌਪਈ (20) ਤੇ ਰੱਡ (20) ਛੰਦ', hi: '40 छंद — चौपाई (20) व रड्ड (20) छंद' },
            D: { en: '105 stanzas — Sirkhindi Chhand exclusively', pa: '105 ਬੰਦ — ਕੇਵਲ ਸਿਰਖੰਡੀ ਛੰਦ', hi: '105 छंद — केवल सिरखंडी छंद' }
        },
        correct: 'A',
        explanation: {
            en: 'Chandi di Var consists of 54 Pauris and 1 initial Dohra (55 stanzas). The Pauris employ 21 Sirkhindi Chhands (mid-rhyming) and 33 Nishani Chhands (end-rhyming).',
            pa: 'ਚੰਡੀ ਦੀ ਵਾਰ ਵਿੱਚ ਕੁੱਲ 55 ਬੰਦ (54 ਪਉੜੀਆਂ + 1 ਦੋਹਰਾ) ਹਨ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ 21 ਸਿਰਖੰਡੀ ਅਤੇ 33 ਨਿਸ਼ਾਨੀ ਛੰਦ ਸ਼ਾਮਲ ਹਨ।',
            hi: 'चंडी दी वार में कुल 55 छंद (54 पौड़ियां + 1 दोहा) हैं, जिसमें 21 सिरखंडी और 33 निशानी छंद सम्मिलित हैं।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-qb-9',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which historic conflict is chronicled in Shah Mohammad’s "Jangnama Singhan te Firangian", composed in 105 Baints with profound secular Punjabi patriotism?',
            pa: 'ਸ਼ਾਹ ਮੁਹੰਮਦ ਦੇ "ਜੰਗਨਾਮਾ ਸਿੰਘਾਂ ਤੇ ਫ਼ਿਰੰਗੀਆਂ" (105 ਬੈਂਤ) ਵਿੱਚ ਕਿਸ ਇਤਿਹਾਸਕ ਯੁੱਧ ਦਾ ਪੰਜਾਬੀ ਕੌਮੀਅਤ ਦੇ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਤੋਂ ਅੱਖੀਂ ਡਿੱਠਾ ਬਿਆਨ ਕੀਤਾ ਗਿਆ ਹੈ?',
            hi: 'शाह मुहम्मद के "जंगनामा सिंघों ते फिरंगियां" (105 बैंत) में किस ऐतिहासिक युद्ध का पंजाबी राष्ट्रीयता की दृष्टि से आँखों देखा वर्णन है?'
        },
        options: {
            A: { en: 'First Anglo-Sikh War (1845–46 CE)', pa: 'ਪਹਿਲਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–46 ਈ.)', hi: 'प्रथम आंग्ल-सिख युद्ध (1845–46 ई.)' },
            B: { en: 'Second Anglo-Sikh War (1848–49 CE)', pa: 'ਦੂਜਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1848–49 ਈ.)', hi: 'द्वितीय आंग्ल-सिख युद्ध (1848–49 ई.)' },
            C: { en: 'Battle of Chamkaur Sahib (1704 CE)', pa: 'ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ (1704 ਈ.)', hi: 'चमकौर साहिब का युद्ध (1704 ई.)' },
            D: { en: 'Third Battle of Panipat (1761 CE)', pa: 'ਪਾਣੀਪਤ ਦੀ ਤੀਜੀ ਲੜਾਈ (1761 ਈ.)', hi: 'पानीपत का तृतीय युद्ध (1761 ई.)' }
        },
        correct: 'A',
        explanation: {
            en: 'Shah Mohammad’s Jangnama depicts the First Anglo-Sikh War (1845–46) featuring battles of Mudki, Ferozeshah, and Sabraon, famously mourning: "Shah Muhammada ik sarcar bajhon faujan jit ke ant nu harian ne".',
            pa: 'ਸ਼ਾਹ ਮੁਹੰਮਦ ਨੇ ਪਹਿਲੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–46 ਈ.) ਦੀਆਂ ਘਟਨਾਵਾਂ ਨੂੰ 105 ਬੈਂਤਾਂ ਵਿੱਚ ਪੰਜਾਬੀਅਤ ਦੇ ਦਰਦ ਨਾਲ ਪੇਸ਼ ਕੀਤਾ।',
            hi: 'शाह मुहम्मद ने प्रथम आंग्ल-सिख युद्ध (1845–46 ई.) की घटनाओं को 105 बैंतों में पंजाबियत के दर्द के साथ प्रस्तुत किया।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-qb-10',
        topicId: 'punjabi-lit-qissa-bir',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which foreign invasion and decisive Mughal military confrontation is the subject of Najabat’s historical ballad "Var Nadir Shah"?',
            pa: 'ਨਜਾਬਤ ਦੀ ਇਤਿਹਾਸਕ ਬੀਰ-ਰਸੀ ਰਚਨਾ "ਵਾਰ ਨਾਦਰ ਸ਼ਾਹ" ਕਿਸ ਵਿਦੇਸ਼ੀ ਹਮਲੇ ਅਤੇ ਮੁਗਲ ਸਾਮਰਾਜ ਨਾਲ ਲੜੀ ਗਈ ਲੜਾਈ ਉੱਤੇ ਆਧਾਰਿਤ ਹੈ?',
            hi: 'नज़ाबत की ऐतिहासिक वीर-रचना "वार नादिर शाह" किस विदेशी आक्रमण और मुग़ल साम्राज्य के साथ लड़े गए युद्ध पर आधारित है?'
        },
        options: {
            A: { en: 'Nadir Shah’s Invasion & Battle of Karnal (1739 CE)', pa: 'ਨਾਦਰ ਸ਼ਾਹ ਦਾ ਹਮਲਾ ਅਤੇ ਕਰਨਾਲ ਦੀ ਲੜਾਈ (1739 ਈ.)', hi: 'नादिर शाह का आक्रमण और करनाल का युद्ध (1739 ई.)' },
            B: { en: 'Ahmad Shah Abdali’s Invasion & Wada Ghallughara (1762 CE)', pa: 'ਅਹਿਮਦ ਸ਼ਾਹ ਅਬਦਾਲੀ ਦਾ ਹਮਲਾ ਅਤੇ ਵੱਡਾ ਘੱਲੂਘਾਰਾ (1762 ਈ.)', hi: 'अहमद शाह अब्दाली का आक्रमण और बड़ा घल्लूघारा (1762 ई.)' },
            C: { en: 'Babur’s Invasion of Saidpur (1521 CE)', pa: 'ਬਾਬਰ ਦਾ ਸੈਦਪੁਰ ਉੱਤੇ ਹਮਲਾ (1521 ਈ.)', hi: 'बाबर का सैदपुर पर आक्रमण (1521 ई.)' },
            D: { en: 'Timur’s Invasion of Punjab (1398 CE)', pa: 'ਤੈਮੂਰ ਲੰਗ ਦਾ ਪੰਜਾਬ ਉੱਤੇ ਹਮਲਾ (1398 ਈ.)', hi: 'तैमूर लंग का पंजाब पर आक्रमण (1398 ई.)' }
        },
        correct: 'A',
        explanation: {
            en: 'Najabat composed Var Nadir Shah in heroic Pauris portraying the 1739 invasion of Persian emperor Nadir Shah Afshar and the subsequent Battle of Karnal against Mughal Emperor Muhammad Shah Rangila.',
            pa: 'ਨਜਾਬਤ ਨੇ 1739 ਈ. ਦੇ ਨਾਦਰ ਸ਼ਾਹੀ ਹਮਲੇ ਅਤੇ ਕਰਨਾਲ ਦੀ ਜੰਗ ਦੇ ਹਾਲਾਤ ਨੂੰ ਆਪਣੀ ਵਾਰ ਵਿੱਚ ਬੀਰ ਰਸ ਨਾਲ ਬਿਆਨ ਕੀਤਾ ਹੈ।',
            hi: 'नज़ाबत ने 1739 ई. के नादिर शाह के आक्रमण और करनाल के युद्ध का ओजस्वी वर्णन अपनी वार में किया है।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },

    // =========================================================================
    // 3. MODERN PUNJABI POETRY (punjabi-lit-modern-poetry) — 10 MCQs
    // =========================================================================
    {
        id: 'q-mcpl-mp-1',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which spiritual epic composed in Sirkhandi blank verse in 1905 established Bhai Vir Singh as the undisputed Father of Modern Punjabi Literature?',
            pa: '1905 ਈ. ਵਿੱਚ ਸਿਰਖੰਡੀ ਛੰਦ (ਤੁਕਾਂਤ-ਮੁਕਤ) ਵਿੱਚ ਰਚੇ ਕਿਸ ਰੂਹਾਨੀ ਮਹਾਂਕਾਵਿ ਨੇ ਭਾਈ ਵੀਰ ਸਿੰਘ ਨੂੰ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ ਵਜੋਂ ਸਥਾਪਿਤ ਕੀਤਾ?',
            hi: '1905 ई. में सिरखंडी छंद (अतुकांत) में रचे किस आध्यात्मिक महाकाव्य ने भाई वीर सिंह को आधुनिक पंजाबी साहित्य के जनक के रूप में स्थापित किया?'
        },
        options: {
            A: { en: 'Rana Surat Singh', pa: 'ਰਾਣਾ ਸੂਰਤ ਸਿੰਘ', hi: 'राणा सूरत सिंह' },
            B: { en: 'Matak Hulare', pa: 'ਮਟਕ ਹੁਲਾਰੇ', hi: 'मटक हुलारे' },
            C: { en: 'Bijlian de Har', pa: 'ਬਿਜਲੀਆਂ ਦੇ ਹਾਰ', hi: 'बिजलियां दे हार' },
            D: { en: 'Mere Saiyan Jio', pa: 'ਮੇਰੇ ਸਾਈਆਂ ਜੀਓ', hi: 'मेरे साईयां जीओ' }
        },
        correct: 'A',
        explanation: {
            en: 'Bhai Vir Singh composed the epic "Rana Surat Singh" (1905) comprising over 14,000 lines in Sirkhandi chhand, portraying Rani Raj Kaur’s spiritual transcendence following her husband’s demise.',
            pa: 'ਭਾਈ ਵੀਰ ਸਿੰਘ ਨੇ 1905 ਵਿੱਚ \'ਰਾਣਾ ਸੂਰਤ ਸਿੰਘ\' ਮਹਾਂਕਾਵਿ ਦੀ ਰਚਨਾ ਕੀਤੀ ਜੋ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਦਾ ਪਹਿਲਾ ਪ੍ਰਮਾਣਿਕ ਮਹਾਂਕਾਵਿ ਹੈ।',
            hi: 'भाई वीर सिंह ने 1905 में \'राणा सूरत सिंह\' महाकाव्य रचा जो आधुनिक पंजाबी का प्रथम प्रामाणिक महाकाव्य है।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-mp-2',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Who is revered as the pioneer of Free Verse (Khula Chhand) in Punjabi poetry, celebrating the rustic, untamed spirit of Punjab in "Khule Maidan" (1923)?',
            pa: 'ਪੰਜਾਬੀ ਕਵਿਤਾ ਵਿੱਚ ਖੁੱਲ੍ਹੀ ਕਵਿਤਾ (ਛੰਦ-ਮੁਕਤ ਕਾਵਿ) ਦੇ ਮੋਢੀ ਕਿਸ ਨੂੰ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ, ਜਿਨ੍ਹਾਂ ਨੇ "ਖੁੱਲ੍ਹੇ ਮੈਦਾਨ" (1923) ਵਿੱਚ ਪੰਜਾਬੀ ਰੂਹ ਦੇ ਅਲਬੇਲੇਪਣ ਨੂੰ ਗਾਇਆ?',
            hi: 'पंजाबी कविता में मुक्त छंद के प्रवर्तक किसे माना जाता है, जिन्होंने "खुल्हे मैदान" (1923) में अल्हड़ पंजाबी स्वभाव का गौरवगान किया?'
        },
        options: {
            A: { en: 'Prof. Puran Singh', pa: 'ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ', hi: 'प्रो. पूरन सिंह' },
            B: { en: 'Prof. Mohan Singh', pa: 'ਪ੍ਰੋ. ਮੋਹਨ ਸਿੰਘ', hi: 'प्रो. मोहन सिंह' },
            C: { en: 'Dhani Ram Chatrik', pa: 'ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ', hi: 'धनी राम चात्रिक' },
            D: { en: 'Diwan Singh Kalepani', pa: 'ਦੀਵਾਨ ਸਿੰਘ ਕਾਲੇਪਾਣੀ', hi: 'दीवान सिंह कालेपानी' }
        },
        correct: 'A',
        explanation: {
            en: 'Prof. Puran Singh (1881–1931) introduced Free Verse (Khula Chhand) in Punjabi with collections like Khule Maidan (1923), Khule Ghund (1923), and Khule Asmani Rang (1927).',
            pa: 'ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ ਨੇ 1923 ਵਿੱਚ \'ਖੁੱਲ੍ਹੇ ਮੈਦਾਨ\' ਪੁਸਤਕ ਰਾਹੀਂ ਪੰਜਾਬੀ ਵਿੱਚ ਖੁੱਲ੍ਹੀ ਕਵਿਤਾ (ਛੰਦ-ਮੁਕਤ ਕਾਵਿ) ਦਾ ਆਗਾਜ਼ ਕੀਤਾ।',
            hi: 'प्रो. पूरन सिंह ने 1923 में \'खुल्हे मैदान\' पुस्तक से पंजाबी में मुक्त छंद का प्रवर्तन किया।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-mp-3',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which pioneer of secular agrarian Punjabi poetry operated the Sudarshan Press, standardized Gurmukhi typography, and authored "Kesar Kyari" and "Chandanwari"?',
            pa: 'ਕਿਸ ਮੋਢੀ ਕਿਸਾਨੀ-ਕੌਮੀ ਕਵੀ ਨੇ ਸੁਦਰਸ਼ਨ ਪ੍ਰੈੱਸ ਚਲਾਈ, ਗੁਰਮੁਖੀ ਟਾਈਪ ਦਾ ਮਿਆਰੀਕਰਨ ਕੀਤਾ ਅਤੇ "ਕੇਸਰ ਕਿਆਰੀ" ਤੇ "ਚੰਦਨਵਾੜੀ" ਵਰਗੇ ਕਾਵਿ ਸੰਗ੍ਰਹਿ ਰਚੇ?',
            hi: 'किस अग्रणी ग्रामीण-राष्ट्रीय कवि ने सुदर्शन प्रेस संचालित की, गुरुमुखी टाइप का मानकीकरण किया और "केसर क्यारी" व "चंदनवाड़ी" जैसे काव्य संग्रह रचे?'
        },
        options: {
            A: { en: 'Dhani Ram Chatrik', pa: 'ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ', hi: 'धनी राम चात्रिक' },
            B: { en: 'Bhai Vir Singh', pa: 'ਭਾਈ ਵੀਰ ਸਿੰਘ', hi: 'भाई वीर सिंह' },
            C: { en: 'Bawa Balwant', pa: 'ਬਾਵਾ ਬਲਵੰਤ', hi: 'बावा बलवंत' },
            D: { en: 'Gurmukh Singh Musafir', pa: 'ਗੁਰਮੁਖ ਸਿੰਘ ਮੁਸਾਫ਼ਿਰ', hi: 'गुरमुख सिंह मुसाफ़िर' }
        },
        correct: 'A',
        explanation: {
            en: 'Lala Dhani Ram Chatrik (1876–1954) standardized Gurmukhi printing at Sudarshan Press and pioneered Punjabi rural poetry with collections Chandanwari (1931), Kesar Kyari (1940), and Sufikhana (1950).',
            pa: 'ਲਾਲਾ ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ ਨੇ ਸੁਦਰਸ਼ਨ ਪ੍ਰੈੱਸ ਰਾਹੀਂ ਗੁਰਮੁਖੀ ਟਾਈਪ ਦਾ ਸੁਧਾਰ ਕੀਤਾ ਅਤੇ ਕਿਸਾਨੀ ਜੀਵਨ ਨੂੰ ਚੰਦਨਵਾੜੀ ਤੇ ਕੇਸਰ ਕਿਆਰੀ ਵਿੱਚ ਚਿਤਰਿਆ।',
            hi: 'लाला धनी राम चात्रिक ने सुदर्शन प्रेस के माध्यम से गुरुमुखी टाइप का मानकीकरण किया और ग्रामीण जीवन को अपनी कविताओं में ढाला।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-mp-4',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which progressive humanist physician and poet was martyred in the Andaman Islands in 1944, renowned for his verse collection "Wagde Pani" (1938)?',
            pa: 'ਕਿਹੜੇ ਪ੍ਰਗਤੀਸ਼ੀਲ ਮਾਨਵਵਾਦੀ ਡਾਕਟਰ ਅਤੇ ਕਵੀ 1944 ਵਿੱਚ ਅੰਡੇਮਾਨ (ਕਾਲੇਪਾਣੀ) ਵਿਖੇ ਸ਼ਹੀਦ ਹੋਏ, ਜਿਨ੍ਹਾਂ ਦਾ ਕਾਵਿ ਸੰਗ੍ਰਹਿ "ਵਗਦੇ ਪਾਣੀ" (1938) ਬੇਹੱਦ ਪ੍ਰਸਿੱਧ ਹੈ?',
            hi: 'कौन-से प्रगतिशील मानवतावादी चिकित्सक व कवि 1944 में अंडमान (कालेपानी) में शहीद हुए, जिनका काव्य संग्रह "वगदे पाणी" (1938) अत्यंत प्रसिद्ध है?'
        },
        options: {
            A: { en: 'Dr. Diwan Singh Kalepani', pa: 'ਡਾ. ਦੀਵਾਨ ਸਿੰਘ ਕਾਲੇਪਾਣੀ', hi: 'डॉ. दीवान सिंह कालेपानी' },
            B: { en: 'Dr. Jaswant Singh Neki', pa: 'ਡਾ. ਜਸਵੰਤ ਸਿੰਘ ਨੇਕੀ', hi: 'डॉ. जसवंत सिंह नेकी' },
            C: { en: 'Dr. Harbhajan Singh', pa: 'ਡਾ. ਹਰਭਜਨ ਸਿੰਘ', hi: 'डॉ. हरभजन सिंह' },
            D: { en: 'Dr. Jagtar', pa: 'ਡਾ. ਜਗਤਾਰ', hi: 'डॉ. जगतार' }
        },
        correct: 'A',
        explanation: {
            en: 'Dr. Diwan Singh Kalepani (1897–1944) wrote Wagde Pani ("Wagde pani nirmal hunde, khalonde bussan lagde han") and was martyred under brutal Japanese military torture in the Cellular Jail in 1944.',
            pa: 'ਡਾ. ਦੀਵਾਨ ਸਿੰਘ ਕਾਲੇਪਾਣੀ ਨੇ "ਵਗਦੇ ਪਾਣੀ" (1938) ਦੀ ਰਚਨਾ ਕੀਤੀ ਅਤੇ ਦੂਜੇ ਵਿਸ਼ਵ ਯੁੱਧ ਦੌਰਾਨ ਅੰਡੇਮਾਨ ਵਿੱਚ ਜਾਪਾਨੀ ਫ਼ੌਜ ਦੇ ਤਸੀਹੇ ਝੱਲਦੇ ਹੋਏ ਸ਼ਹੀਦ ਹੋਏ।',
            hi: 'डॉ. दीवान सिंह कालेपानी ने "वगदे पाणी" (1938) की रचना की और 1944 में अंडमान में जापानी सेना की यातनाओं से शहीद हुए।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-mp-5',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'For which masterwork did Amrita Pritam receive the prestigious Bharatiya Jnanpith Award in 1981, becoming the first Punjabi poet to earn India’s highest literary award?',
            pa: 'ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਨੂੰ 1981 ਵਿੱਚ ਉਹਨਾਂ ਦੇ ਕਿਸ ਸ਼ਾਹਕਾਰ ਕਾਵਿ ਸੰਗ੍ਰਹਿ ਲਈ ਵੱਕਾਰੀ ਭਾਰਤੀ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ?',
            hi: 'अमृता प्रीतम को 1981 में उनके किस अमर काव्य संग्रह हेतु प्रतिष्ठित भारतीय ज्ञानपीठ पुरस्कार प्राप्त हुआ था?'
        },
        options: {
            A: { en: 'Kagaz te Canvas', pa: 'ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ', hi: 'काग़ज़ ते कैनवस' },
            B: { en: 'Sunehure', pa: 'ਸੁਨੇਹੜੇ', hi: 'सुनेहड़े' },
            C: { en: 'Lok Peed', pa: 'ਲੋਕ ਪੀੜ', hi: 'लोक पीड़' },
            D: { en: 'Patthar Geete', pa: 'ਪੱਥਰ ਗੀਟੇ', hi: 'पत्थर गीटे' }
        },
        correct: 'A',
        explanation: {
            en: 'Amrita Pritam won the Sahitya Akademi Award in 1956 for "Sunehure" and the Bharatiya Jnanpith Award in 1981 for her poetry collection "Kagaz te Canvas".',
            pa: 'ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਨੂੰ 1981 ਵਿੱਚ ਉਹਨਾਂ ਦੀ ਪੁਸਤਕ "ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ" ਲਈ ਭਾਰਤੀ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਨਾਲ ਸਨਮਾਨਿਤ ਕੀਤਾ ਗਿਆ ਸੀ (ਜਦਕਿ \'ਸੁਨੇਹੜੇ\' ਲਈ 1956 ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਮਿਲਿਆ ਸੀ)।',
            hi: 'अमृता प्रीतम को 1981 में उनकी पुस्तक "काग़ज़ ते कैनवस" हेतु ज्ञानपीठ पुरस्कार प्राप्त हुआ था (जबकि \'सुनेहड़े\' हेतु 1956 में साहित्य अकादमी मिला था)।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-mp-6',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'In which iconic progressive poem does Prof. Mohan Singh unmask the imperial exploitation of thousands of starving laborers behind the moonlight beauty of a royal monument?',
            pa: 'ਪ੍ਰੋ. ਮੋਹਨ ਸਿੰਘ ਨੇ ਆਪਣੀ ਕਿਸ ਸ਼ਾਹਕਾਰ ਪ੍ਰਗਤੀਵਾਦੀ ਕਵਿਤਾ ਵਿੱਚ ਚਾਨਣੀ ਰਾਤ ਦੇ ਹੁਸਨ ਪਿੱਛੇ ਛੁਪੇ ਹਜ਼ਾਰਾਂ ਮਜ਼ਦੂਰਾਂ ਦੇ ਜਮਾਤੀ ਸ਼ੋਸ਼ਣ ਅਤੇ ਲੁੱਟ ਦਾ ਪਰਦਾਫ਼ਾਸ਼ ਕੀਤਾ ਹੈ?',
            hi: 'प्रो. मोहन सिंह ने अपनी किस प्रसिद्ध प्रगतिवादी कविता में संगमरमरी सौंदर्य के पीछे छिपे हज़ारों मज़दूरों के शोषण व आर्तनाद को उजागर किया है?'
        },
        options: {
            A: { en: 'Taj Mahal', pa: 'ਤਾਜ ਮਹਿਲ', hi: 'ताज महल' },
            B: { en: 'Kuri Pothohar Di', pa: 'ਕੁੜੀ ਪੋਠੋਹਾਰ ਦੀ', hi: 'कुड़ी पोठोहार दी' },
            C: { en: 'Save Pattar', pa: 'ਸਾਵੇ ਪੱਤਰ', hi: 'सावे पत्तर' },
            D: { en: 'Ambi de Boote Thalle', pa: 'ਅੰਬੀ ਦੇ ਬੂਟੇ ਥੱਲੇ', hi: 'अंबी दे बूटे थल्ले' }
        },
        correct: 'A',
        explanation: {
            en: 'In "Taj Mahal", Prof. Mohan Singh deconstructs royal romance, exposing that the monument was erected on the misery, tears, and forced labor of thousands of impoverished workers.',
            pa: 'ਪ੍ਰੋ. ਮੋਹਨ ਸਿੰਘ ਦੀ ਕਵਿਤਾ "ਤਾਜ ਮਹਿਲ" ਪ੍ਰਗਤੀਵਾਦੀ ਕਾਵਿ ਦਾ ਨਮੂਨਾ ਹੈ ਜਿਸ ਵਿੱਚ ਬਾਦਸ਼ਾਹੀ ਹੁਸਨ ਦੇ ਮੁਕਾਬਲੇ ਮਜ਼ਦੂਰਾਂ ਦੇ ਹੰਝੂਆਂ ਅਤੇ ਭੁੱਖਮਰੀ ਦੀ ਆਵਾਜ਼ ਉਠਾਈ ਗਈ ਹੈ।',
            hi: 'प्रो. मोहन सिंह की कविता "ताज महल" प्रगतिवादी विचारधारा का मील का पत्थर है, जिसमें सौंदर्य के पीछे छिपे श्रम शोषण का पर्दाफ़ाश है।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-mp-7',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'For which collection did socialist intellectual poet Bawa Balwant receive the Sahitya Akademi Award in 1970?',
            pa: 'ਮਾਰਕਸਵਾਦੀ ਬੌਧਿਕ ਕਵੀ ਬਾਵਾ ਬਲਵੰਤ ਨੂੰ 1970 ਵਿੱਚ ਉਹਨਾਂ ਦੇ ਕਿਸ ਕਾਵਿ ਸੰਗ੍ਰਹਿ ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਦਿੱਤਾ ਗਿਆ ਸੀ?',
            hi: 'मार्क्सवादी बौद्धिक कवि बावा बलवंत को 1970 में उनके किस काव्य संग्रह हेतु साहित्य अकादमी पुरस्कार दिया गया था?'
        },
        options: {
            A: { en: 'Sugandh Samir', pa: 'ਸੁਗੰਧ ਸਮੀਰ', hi: 'सुगंध समीर' },
            B: { en: 'Mahanach', pa: 'ਮਹਾਂਨਾਚ', hi: 'महानाच' },
            C: { en: 'Amar Geet', pa: 'ਅਮਰ ਗੀਤ', hi: 'अमर गीत' },
            D: { en: 'Bandergah', pa: 'ਬੰਦਰਗਾਹ', hi: 'बंदरगाह' }
        },
        correct: 'A',
        explanation: {
            en: 'Bawa Balwant (1915–1972) authored Mahanach (1941) and won the Sahitya Akademi Award in 1970 for his collection "Sugandh Samir".',
            pa: 'ਬਾਵਾ ਬਲਵੰਤ ਨੂੰ 1970 ਵਿੱਚ ਉਹਨਾਂ ਦੇ ਕਾਵਿ ਸੰਗ੍ਰਹਿ "ਸੁਗੰਧ ਸਮੀਰ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਪ੍ਰਦਾਨ ਕੀਤਾ ਗਿਆ ਸੀ।',
            hi: 'बावा बलवंत को 1970 में उनके काव्य संग्रह "सुगंध समीर" हेतु साहित्य अकादमी पुरस्कार प्रदान किया गया था।'
        },
        difficulty: 'hard',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-mp-8',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'At what young age did Shiv Kumar Batalvi (Birha da Sultan) win the Sahitya Akademi Award in 1967 for his feminist reinterpretation in the verse drama "Loona"?',
            pa: 'ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ (ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ) ਨੂੰ 1967 ਵਿੱਚ ਕਾਵਿ-ਨਾਟਕ "ਲੂਣਾ" ਲਈ ਕਿੰਨੀ ਛੋਟੀ ਉਮਰ ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ?',
            hi: 'शिव कुमार बटालवी (बिरहा दा सुल्तान) को 1967 में काव्य-नाटक "लूणा" हेतु कितनी युवा आयु में साहित्य अकादमी पुरस्कार मिला था?'
        },
        options: {
            A: { en: 'Age 31 (Youngest in Punjabi literature history)', pa: '31 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ (ਸਭ ਤੋਂ ਛੋਟੀ ਉਮਰ ਦੇ ਜੇਤੂ)', hi: '31 वर्ष की आयु में (सर्वाधिक युवा विजेता)' },
            B: { en: 'Age 25', pa: '25 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ', hi: '25 वर्ष की आयु में' },
            C: { en: 'Age 37', pa: '37 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ', hi: '37 वर्ष की आयु में' },
            D: { en: 'Age 42', pa: '42 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ', hi: '42 वर्ष की आयु में' }
        },
        correct: 'A',
        explanation: {
            en: 'Shiv Kumar Batalvi won the Sahitya Akademi Award in 1967 at the age of 31 for "Loona" (1965), remaining the youngest writer ever to receive this honour in Punjabi literature.',
            pa: 'ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ ਨੂੰ 1967 ਵਿੱਚ ਮਾਤਰ 31 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਕਾਵਿ-ਨਾਟਕ "ਲੂਣਾ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ, ਜੋ ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ ਸਭ ਤੋਂ ਘੱਟ ਉਮਰ ਦਾ ਰਿਕਾਰਡ ਹੈ।',
            hi: 'शिव कुमार बटालवी को 1967 में मात्र 31 वर्ष की आयु में "लूणा" हेतु साहित्य अकादमी पुरस्कार मिला, जो पंजाबी साहित्य में न्यूनतम आयु का कीर्तिमान है।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-mp-9',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which poetry collection earned modern Punjabi Ghazal master Dr. Surjit Patar the prestigious national Saraswati Samman in 2003?',
            pa: 'ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਗ਼ਜ਼ਲ ਦੇ ਸਿਰਮੌਰ ਸ਼ਾਇਰ ਡਾ. ਸੁਰਜੀਤ ਪਾਤਰ ਨੂੰ 2003 ਵਿੱਚ ਕਿਸ ਪੁਸਤਕ ਲਈ ਵੱਕਾਰੀ ਰਾਸ਼ਟਰੀ ਸਰਸਵਤੀ ਸਨਮਾਨ ਮਿਲਿਆ ਸੀ?',
            hi: 'आधुनिक पंजाबी ग़ज़ल सम्राट डॉ. सुरजीत पातर को 2003 में किस पुस्तक हेतु प्रतिष्ठित राष्ट्रीय सरस्वती सम्मान प्राप्त हुआ था?'
        },
        options: {
            A: { en: 'Lafzan di Dargah', pa: 'ਲਫ਼ਜ਼ਾਂ ਦੀ ਦਰਗਾਹ', hi: 'लफ़्ज़ों दी दरगाह' },
            B: { en: 'Hanere Vich Sulagdi Varnmala', pa: 'ਹਨੇਰੇ ਵਿਚ ਸੁਲਗਦੀ ਵਰਣਮਾਲਾ', hi: 'हनेरे विच सुलगदी वर्णमाला' },
            C: { en: 'Hawa Vich Likhe Harf', pa: 'ਹਵਾ ਵਿਚ ਲਿਖੇ ਹਰਫ਼', hi: 'हवा विच लिखे हरफ़' },
            D: { en: 'Birkh Arz Kare', pa: 'ਬਿਰਖ ਅਰਜ਼ ਕਰੇ', hi: 'बिरख अरज़ करे' }
        },
        correct: 'A',
        explanation: {
            en: 'Surjit Patar received the Sahitya Akademi Award in 1993 for "Hanere Vich Sulagdi Varnmala" and the Saraswati Samman in 2003 for "Lafzan di Dargah".',
            pa: 'ਡਾ. ਸੁਰਜੀਤ ਪਾਤਰ ਨੂੰ 1993 ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ (ਹਨੇਰੇ ਵਿਚ ਸੁਲਗਦੀ ਵਰਣਮਾਲਾ ਲਈ) ਅਤੇ 2003 ਵਿੱਚ "ਲਫ਼ਜ਼ਾਂ ਦੀ ਦਰਗਾਹ" ਲਈ ਦੇਸ਼ ਦਾ ਸਰਵਉੱਚ ਸਰਸਵਤੀ ਸਨਮਾਨ ਪ੍ਰਾਪਤ ਹੋਇਆ।',
            hi: 'डॉ. सुरजीत पातर को 1993 में साहित्य अकादमी तथा 2003 में "लफ़्ज़ों दी दरगाह" हेतु देश का सर्वोच्च सरस्वती सम्मान प्राप्त हुआ था।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-mp-10',
        topicId: 'punjabi-lit-modern-poetry',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'In which poetry collection did revolutionary Jujharvadi poet Paash publish his immortal defiance poem "Sab Ton Khatarnak Hunda Hai Murda Shanti Nal Bhar Jana"?',
            pa: 'ਇਨਕਲਾਬੀ ਜੁਝਾਰਵਾਦੀ ਕਵੀ ਪਾਸ਼ ਨੇ ਆਪਣੀ ਅਮਰ ਵਿਦਰੋਹੀ ਕਵਿਤਾ "ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ ਹੁੰਦਾ ਹੈ ਮੁਰਦਾ ਸ਼ਾਂਤੀ ਨਾਲ ਭਰ ਜਾਣਾ" ਆਪਣੇ ਕਿਸ ਕਾਵਿ ਸੰਗ੍ਰਹਿ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤੀ ਸੀ?',
            hi: 'क्रांतिकारी जुझारवादी कवि पाश ने अपनी प्रसिद्ध विद्रोही कविता "सब तों ख़तरनाक हुंदा है मुरदा शांति नाल भर जाणा" अपने किस काव्य संग्रह में प्रकाशित की थी?'
        },
        options: {
            A: { en: 'Sade Samian Vich (1978)', pa: 'ਸਾਡੇ ਸਮਿਆਂ ਵਿਚ (1978)', hi: 'साडे समियां विच (1978)' },
            B: { en: 'Loh-Katha (1970)', pa: 'ਲੋਹ-ਕਥਾ (1970)', hi: 'लोह-कथा (1970)' },
            C: { en: 'Uddne Bajan Magar (1974)', pa: 'ਉੱਡਦੇ ਬਾਜ਼ਾਂ ਮਗਰ (1974)', hi: 'उड्डदे बाज़ां मगर (1974)' },
            D: { en: 'Khilre Hoye Varke (1989)', pa: 'ਖਿਲਰੇ ਹੋਏ ਵਰਕੇ (1989)', hi: 'खिलरे होए वरके (1989)' }
        },
        correct: 'A',
        explanation: {
            en: 'The immortal poem "Sab Ton Khatarnak" was published in Paash’s third collection "Sade Samian Vich" (In Our Times, 1978).',
            pa: 'ਪਾਸ਼ ਦੀ ਅਮਰ ਕਵਿਤਾ "ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ" ਉਹਨਾਂ ਦੇ ਤੀਜੇ ਕਾਵਿ ਸੰਗ੍ਰਹਿ "ਸਾਡੇ ਸਮਿਆਂ ਵਿਚ" (1978) ਵਿੱਚ ਦਰਜ ਹੈ।',
            hi: 'पाश की अमर कविता "सब तों ख़तरनाक" उनके तीसरे काव्य संग्रह "साडे समियां विच" (1978) में संकलित है।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },

    // =========================================================================
    // 4. PUNJABI PROSE, DRAMA, NOVEL & SHORT STORY (punjabi-lit-prose-drama) — 10 MCQs
    // =========================================================================
    {
        id: 'q-mcpl-pd-1',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which one-act play staged in 1913 at Dyal Singh College Lahore won the competition organized by Norah Richards, marking the birth of modern Punjabi drama?',
            pa: '1913 ਈ. ਵਿੱਚ ਦਿਆਲ ਸਿੰਘ ਕਾਲਜ ਲਾਹੌਰ ਵਿਖੇ ਨੋਰਾ ਰਿਚਰਡਜ਼ ਵੱਲੋਂ ਕਰਵਾਏ ਮੁਕਾਬਲੇ ਵਿੱਚ ਆਈ.ਸੀ. ਨੰਦਾ ਦੀ ਕਿਸ ਇਕਾਂਗੀ ਨੇ ਪਹਿਲਾ ਸਥਾਨ ਪ੍ਰਾਪਤ ਕਰਕੇ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਨਾਟਕ ਦਾ ਮੁੱਢ ਬੰਨ੍ਹਿਆ ਸੀ?',
            hi: '1913 ई. में लाहौर के दयाल सिंह कॉलेज में नोरा रिचर्ड्स द्वारा आयोजित प्रतियोगिता में आई.सी. नंदा की किस एकांकी ने प्रथम स्थान प्राप्त कर आधुनिक पंजाबी नाटक की नींव रखी थी?'
        },
        options: {
            A: { en: 'Dulhan / Suhag', pa: 'ਦੁਲਹਨ / ਸੁਹਾਗ', hi: 'दुल्हन / सुहाग' },
            B: { en: 'Subhadra', pa: 'ਸੁਭੱਦਰਾ', hi: 'सुभद्रा' },
            C: { en: 'Var Ghar', pa: 'ਵਰ ਘਰ', hi: 'वर घर' },
            D: { en: 'Shamu Shah', pa: 'ਸ਼ਾਮੂ ਸ਼ਾਹ', hi: 'शामू शाह' }
        },
        correct: 'A',
        explanation: {
            en: 'Ishwar Chander Nanda won Norah Richards’ competition in 1913 with "Dulhan" (Suhag), regarded as the first modern Punjabi realistic one-act play.',
            pa: 'ਆਈ.ਸੀ. ਨੰਦਾ ਦੀ ਇਕਾਂਗੀ "ਦੁਲਹਨ" (ਜਿਸ ਦਾ ਬਾਅਦ ਵਿੱਚ ਨਾਮ \'ਸੁਹਾਗ\' ਰੱਖਿਆ ਗਿਆ) ਨੇ 1913 ਵਿੱਚ ਨੋਰਾ ਰਿਚਰਡਜ਼ ਦੇ ਮੁਕਾਬਲੇ ਵਿੱਚ ਪਹਿਲਾ ਇਨਾਮ ਜਿੱਤਿਆ ਸੀ।',
            hi: 'आई.सी. नंदा की एकांकी "दुल्हन" (सुहाग) ने 1913 में नोरा रिचर्ड्स की प्रतियोगिता में प्रथम पुरस्कार जीतकर आधुनिक नाटक का सूत्रपात किया।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-pd-2',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which 1944 realistic play by Balwant Gargi shocked orthodox Punjabi society by portraying suppressed passion and patriarchal domestic cruelty through a village blacksmith family?',
            pa: 'ਬਲਵੰਤ ਗਾਰਗੀ ਦੇ 1944 ਵਿੱਚ ਲਿਖੇ ਕਿਸ ਯਥਾਰਥਵਾਦੀ ਨਾਟਕ ਨੇ ਪੇਂਡੂ ਲੁਹਾਰ ਦੇ ਪਰਿਵਾਰ ਰਾਹੀਂ ਦੱਬੀਆਂ ਹੋਈਆਂ ਕਾਮੁਕ ਭਾਵਨਾਵਾਂ ਅਤੇ ਪਿਤਾ-ਪੁਰਖੀ ਦਾਬੇ ਨੂੰ ਪੇਸ਼ ਕਰਕੇ ਰੂੜ੍ਹੀਵਾਦੀ ਸਮਾਜ ਨੂੰ ਹਲੂਣ ਦਿੱਤਾ ਸੀ?',
            hi: 'बलवंत गार्गी के 1944 में रचित किस यथार्थवादी नाटक ने ग्रामीण लोहार के परिवार के माध्यम से दमित वासनाओं और सामंती दमन को चित्रित कर रूढ़िवादी समाज को झकझोर दिया था?'
        },
        options: {
            A: { en: 'Loha Kutt', pa: 'ਲੋਹਾ ਕੁੱਟ', hi: 'लोहा कुट्ट' },
            B: { en: 'Kanak di Balli', pa: 'ਕਣਕ ਦੀ ਬੱਲੀ', hi: 'कणक दी बल्ली' },
            C: { en: 'Dhuni di Agg', pa: 'ਧੂਣੀ ਦੀ ਅੱਗ', hi: 'धूनी दी अग्ग' },
            D: { en: 'Sultan Razia', pa: 'ਸੁਲਤਾਨ ਰਜ਼ੀਆ', hi: 'सुल्तान रज़िया' }
        },
        correct: 'A',
        explanation: {
            en: 'Balwant Gargi’s "Loha Kutt" (1944) broke romantic taboos by examining psychological repression and rebellion in village blacksmith Kaku’s family.',
            pa: 'ਬਲਵੰਤ ਗਾਰਗੀ ਦੇ ਨਾਟਕ "ਲੋਹਾ ਕੁੱਟ" (1944) ਨੇ ਪੰਜਾਬੀ ਨਾਟਕ ਵਿੱਚ ਪਹਿਲੀ ਵਾਰ ਦਿਹਾਤੀ ਜੀਵਨ ਦੇ ਦੱਬੇ ਜਜ਼ਬਿਆਂ ਦੀ ਬਗ਼ਾਵਤ ਦਾ ਯਥਾਰਥਕ ਚਿਤਰਨ ਕੀਤਾ।',
            hi: 'बलवंत गार्गी के नाटक "लोहा कुट्ट" (1944) ने पंजाबी रंगमंच में प्रथम बार ग्रामीण जीवन के दमित द्वंद्वों का साहसिक यथार्थवादी अंकन किया।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-pd-3',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which iconic one-act play by Sant Singh Sekhon uses an ancient banyan tree as an allegorical narrator recounting the centuries-long trials and martial history of Punjab?',
            pa: 'ਸੰਤ ਸਿੰਘ ਸੇਖੋਂ ਦੀ ਕਿਸ ਪ੍ਰਸਿੱਧ ਇਤਿਹਾਸਕ ਇਕਾਂਗੀ ਵਿੱਚ ਇੱਕ ਪ੍ਰਾਚੀਨ ਬੋਹੜ ਦਾ ਰੁੱਖ ਪੰਜਾਬ ਦੇ ਸਦੀਆਂ ਪੁਰਾਣੇ ਸੰਘਰਸ਼ ਅਤੇ ਬੀਰ ਇਤਿਹਾਸ ਨੂੰ ਪਾਤਰ ਵਜੋਂ ਬਿਆਨ ਕਰਦਾ ਹੈ?',
            hi: 'संत सिंह सेखों की किस प्रसिद्ध ऐतिहासिक एकांकी में एक प्राचीन वट-वृक्ष पंजाब के सदियों पुराने संघर्ष और गौरवशाली इतिहास को कथावाचक के रूप में प्रस्तुत करता है?'
        },
        options: {
            A: { en: 'Baba Bohar', pa: 'ਬਾਬਾ ਬੋਹੜ', hi: 'बाबा बोहड़' },
            B: { en: 'Moe Sar Na Kai', pa: 'ਮੋਇਆਂ ਸਾਰ ਨ ਕਾਈ', hi: 'मोइयां सार न काई' },
            C: { en: 'Kalakar', pa: 'ਕਲਾਕਾਰ', hi: 'कलाकार' },
            D: { en: 'Mitter Piara', pa: 'ਮਿੱਤਰ ਪਿਆਰਾ', hi: 'मित्तर प्यारा' }
        },
        correct: 'A',
        explanation: {
            en: 'Sant Singh Sekhon’s "Baba Bohar" (1964) is an allegorical verse one-act play where the ancient banyan tree narrates the heroic resilience of the Sikh and Punjabi people.',
            pa: 'ਸੰਤ ਸਿੰਘ ਸੇਖੋਂ ਦੀ ਕਾਵਿ-ਇਕਾਂਗੀ "ਬਾਬਾ ਬੋਹੜ" (1964) ਵਿੱਚ ਬੋਹੜ ਦਾ ਬਜ਼ੁਰਗ ਰੁੱਖ ਪੰਜਾਬ ਦੇ ਬੀਰ ਇਤਿਹਾਸ ਦੀ ਸਾਖੀ ਭਰਦਾ ਹੈ।',
            hi: 'संत सिंह सेखों की काव्य-एकांकी "बाबा बोहड़" (1964) में प्राचीन बरगद का वृक्ष पंजाब के शौर्यपूर्ण इतिहास का साक्षी बनकर कथा सुनाता है।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-pd-4',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'For which drama based on historical confrontation between three generations did Dr. Harcharan Singh receive the Sahitya Akademi Award in 1973?',
            pa: 'ਡਾ. ਹਰਚਰਨ ਸਿੰਘ ਨੂੰ ਤਿੰਨ ਪੀੜ੍ਹੀਆਂ ਦੇ ਵਿਚਾਰਧਾਰਕ ਟਕਰਾਅ ਉੱਤੇ ਆਧਾਰਿਤ ਕਿਸ ਨਾਟਕ ਲਈ 1973 ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ?',
            hi: 'डॉ. हरचरण सिंह को तीन पीढ़ियों के वैचारिक द्वंद्व पर आधारित किस नाटक हेतु 1973 में साहित्य अकादमी पुरस्कार प्राप्त हुआ था?'
        },
        options: {
            A: { en: 'Kal Aj te Bhalak', pa: 'ਕੱਲ੍ਹ ਅੱਜ ਤੇ ਭਲਕ', hi: 'कल अज ते भलक' },
            B: { en: 'Kamla Kumari', pa: 'ਕਮਲਾ ਕੁਮਾਰੀ', hi: 'कमला कुमारी' },
            C: { en: 'Rani Jindan', pa: 'ਰਾਣੀ ਜਿੰਦਾਂ', hi: 'रानी जिंदां' },
            D: { en: 'Ratta Salu', pa: 'ਰੱਤਾ ਸਾਲੂ', hi: 'रत्ता सालू' }
        },
        correct: 'A',
        explanation: {
            en: 'Dr. Harcharan Singh won the Sahitya Akademi Award in 1973 for "Kal Aj te Bhalak" (Yesterday, Today, and Tomorrow), exploring intergenerational cultural conflict.',
            pa: 'ਡਾ. ਹਰਚਰਨ ਸਿੰਘ ਨੂੰ 1973 ਵਿੱਚ ਉਹਨਾਂ ਦੇ ਨਾਟਕ "ਕੱਲ੍ਹ ਅੱਜ ਤੇ ਭਲਕ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਨਾਲ ਸਨਮਾਨਿਤ ਕੀਤਾ ਗਿਆ ਸੀ।',
            hi: 'डॉ. हरचरण सिंह को 1973 में उनके नाटक "कल अज ते भलक" हेतु साहित्य अकादमी पुरस्कार से सम्मानित किया गया था।'
        },
        difficulty: 'hard',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-pd-5',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which historical reformist work published in 1898 by Bhai Vir Singh is canonically recognized as the first modern novel in the Punjabi language?',
            pa: '1898 ਈ. ਵਿੱਚ ਭਾਈ ਵੀਰ ਸਿੰਘ ਦੁਆਰਾ ਰਚਿਆ ਗਿਆ ਕਿਹੜਾ ਇਤਿਹਾਸਕ ਸੁਧਾਰਵਾਦੀ ਨਾਵਲ ਪੰਜਾਬੀ ਬੋਲੀ ਦਾ ਪਹਿਲਾ ਮੌਲਿਕ ਨਾਵਲ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?',
            hi: '1898 ई. में भाई वीर सिंह द्वारा रचित कौन-सा ऐतिहासिक सुधारवादी उपन्यास पंजाबी भाषा का प्रथम मौलिक उपन्यास माना जाता है?'
        },
        options: {
            A: { en: 'Sundari', pa: 'ਸੁੰਦਰੀ', hi: 'सुंदरी' },
            B: { en: 'Bijay Singh', pa: 'ਬਿਜੈ ਸਿੰਘ', hi: 'बिजय सिंह' },
            C: { en: 'Satwant Kaur', pa: 'ਸਤਵੰਤ ਕੌਰ', hi: 'सतवंत कौर' },
            D: { en: 'Baba Naudh Singh', pa: 'ਬਾਬਾ ਨੌਧ ਸਿੰਘ', hi: 'बाबा नौध सिंह' }
        },
        correct: 'A',
        explanation: {
            en: 'Bhai Vir Singh’s "Sundari" (1898) is canonically celebrated as the first original modern Punjabi novel, written to instill moral courage and pride in Sikh historical ethos.',
            pa: 'ਭਾਈ ਵੀਰ ਸਿੰਘ ਦਾ ਨਾਵਲ "ਸੁੰਦਰੀ" (1898) ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਪਹਿਲਾ ਆਧੁਨਿਕ ਮੌਲਿਕ ਨਾਵਲ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।',
            hi: 'भाई वीर सिंह का उपन्यास "सुंदरी" (1898) पंजाबी भाषा का प्रथम आधुनिक मौलिक उपन्यास माना जाता है।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-pd-6',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'For which historical novel based on the life and martyrdom of Ghadar hero Kartar Singh Sarabha did Nanak Singh (Father of Punjabi Novel) win the Sahitya Akademi Award in 1962?',
            pa: 'ਗ਼ਦਰ ਪਾਰਟੀ ਦੇ ਮਹਾਨ ਸ਼ਹੀਦ ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ ਦੇ ਜੀਵਨ \'ਤੇ ਆਧਾਰਿਤ ਕਿਸ ਇਤਿਹਾਸਕ ਨਾਵਲ ਲਈ ਨਾਨਕ ਸਿੰਘ (ਪੰਜਾਬੀ ਨਾਵਲ ਦੇ ਪਿਤਾਮਾ) ਨੂੰ 1962 ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ?',
            hi: 'ग़दर पार्टी के अमर शहीद करतार सिंह सराभा के जीवन पर आधारित किस ऐतिहासिक उपन्यास हेतु नानक सिंह (पंजाबी उपन्यास के जनक) को 1962 में साहित्य अकादमी पुरस्कार मिला था?'
        },
        options: {
            A: { en: 'Ik Mian Do Talwaran', pa: 'ਇੱਕ ਮਿਆਨ ਦੋ ਤਲਵਾਰਾਂ', hi: 'इक मियान दो तलवारां' },
            B: { en: 'Chitta Lahu', pa: 'ਚਿੱਟਾ ਲਹੂ', hi: 'चिट्टा लहू' },
            C: { en: 'Pavittar Papi', pa: 'ਪਵਿੱਤਰ ਪਾਪੀ', hi: 'पवित्र पापी' },
            D: { en: 'Khoon de Sohle', pa: 'ਖ਼ੂਨ ਦੇ ਸੋਹਲੇ', hi: 'खून दे सोहले' }
        },
        correct: 'A',
        explanation: {
            en: 'Nanak Singh won the 1962 Sahitya Akademi Award for "Ik Mian Do Talwaran" (1960), which chronicled the Ghadar rebellion and the martyrdom of Kartar Singh Sarabha.',
            pa: 'ਨਾਨਕ ਸਿੰਘ ਨੂੰ 1962 ਵਿੱਚ ਸ਼ਹੀਦ ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ ਬਾਰੇ ਨਾਵਲ "ਇੱਕ ਮਿਆਨ ਦੋ ਤਲਵਾਰਾਂ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਨਾਲ ਸਨਮਾਨਿਤ ਕੀਤਾ ਗਿਆ ਸੀ।',
            hi: 'नानक सिंह को 1962 में शहीद करतार सिंह सराभा पर आधारित उपन्यास "इक मियान दो तलवारां" हेतु साहित्य अकादमी पुरस्कार मिला था।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-pd-7',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Who is the central protagonist in Gurdial Singh’s landmark Malwa subaltern novel "Marhi da Deeva" (1964), personifying the silent tragedy of landless agricultural laborers?',
            pa: 'ਗੁਰਦਿਆਲ ਸਿੰਘ ਦੇ ਸ਼ਾਹਕਾਰ ਮਾਲਵਾਈ ਆਂਚਲਿਕ ਨਾਵਲ "ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ" (1964) ਦਾ ਮੁੱਖ ਪਾਤਰ (ਨਾਇਕ) ਕੌਣ ਹੈ, ਜੋ ਬੇਜ਼ਮੀਨੇ ਦਲਿਤ ਸੀਰੀ ਕਾਮਿਆਂ ਦੇ ਮੂਕ ਦੁਖਾਂਤ ਦਾ ਪ੍ਰਤੀਕ ਹੈ?',
            hi: 'गुरदयाल सिंह के प्रसिद्ध आंचलिक उपन्यास "मढ़ी दा दीवा" (1964) का मुख्य पात्र (नायक) कौन है, जो भूमिहीन दलित मज़दूरों की मूक त्रासदी का प्रतीक है?'
        },
        options: {
            A: { en: 'Jagsir (Jagseera)', pa: 'ਜਗਸੀਰ (ਜਗਸੀਰਾ)', hi: 'जगसीर (जगसीरा)' },
            B: { en: 'Dharam Singh', pa: 'ਧਰਮ ਸਿੰਘ', hi: 'धर्म सिंह' },
            C: { en: 'Banta', pa: 'ਬੰਤਾ', hi: 'बंता' },
            D: { en: 'Parsa', pa: 'ਪਰਸਾ', hi: 'परसा' }
        },
        correct: 'A',
        explanation: {
            en: 'Jagsir (Jagseera) is the tragic landless Dalit farmhand in Gurdial Singh’s "Marhi da Deeva" (1964), who lives in quiet servitude and alienation, dying on his father’s burial mound.',
            pa: 'ਗੁਰਦਿਆਲ ਸਿੰਘ ਦੇ ਨਾਵਲ "ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ" ਦਾ ਮੁੱਖ ਪਾਤਰ ਜਗਸੀਰ ਸੀਰੀ ਹੈ ਜੋ ਆਪਣੀ ਅਧੂਰੀ ਮੁਹੱਬਤ ਅਤੇ ਬੇਗਾਨਗੀ ਨਾਲ ਘੁਲਦਾ ਹੋਇਆ ਮੜ੍ਹੀ \'ਤੇ ਦਮ ਤੋੜਦਾ ਹੈ।',
            hi: 'गुरदयाल सिंह के उपन्यास "मढ़ी दा दीवा" का मुख्य पात्र जगसीर सीरी है, जो अपनी सामाजिक उपेक्षा व वियोग में मढ़ी पर दम तोड़ देता है।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-pd-8',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which Malwa progressive novelist chronicled the underground Naxalite revolutionary upsurge in rural Punjab in his famous novel "Lahu di Lau" (1973)?',
            pa: 'ਮਾਲਵੇ ਦੇ ਕਿਸ ਪ੍ਰਗਤੀਸ਼ੀਲ ਨਾਵਲਕਾਰ ਨੇ ਪੰਜਾਬ ਦੇ ਪੇਂਡੂ ਖੇਤਰ ਵਿੱਚ ਉੱਠੀ ਨਕਸਲਬਾੜੀ ਇਨਕਲਾਬੀ ਲਹਿਰ ਦਾ ਅੰਦਰੂਨੀ ਬਿਰਤਾਂਤ ਆਪਣੇ ਪ੍ਰਸਿੱਧ ਨਾਵਲ "ਲਹੂ ਦੀ ਲੋਅ" (1973) ਵਿੱਚ ਦਰਜ ਕੀਤਾ?',
            hi: 'मालवा के किस प्रगतिशील उपन्यासकार ने पंजाब में नक्सलवादी क्रांतिकारी उभार का प्रामाणिक दस्तावेज़ अपने उपन्यास "लहू दी लौ" (1973) में प्रस्तुत किया?'
        },
        options: {
            A: { en: 'Jaswant Singh Kanwal', pa: 'ਜਸਵੰਤ ਸਿੰਘ ਕੰਵਲ', hi: 'जसवंत सिंह कंवल' },
            B: { en: 'Gurdial Singh', pa: 'ਗੁਰਦਿਆਲ ਸਿੰਘ', hi: 'गुरदयाल सिंह' },
            C: { en: 'Ram Sarup Ankhi', pa: 'ਰਾਮ ਸਰੂਪ ਅਣਖੀ', hi: 'राम स्वरूप अणखी' },
            D: { en: 'Sohan Singh Sital', pa: 'ਸੋਹਣ ਸਿੰਘ ਸੀਤਲ', hi: 'सोहन सिंह सीतल' }
        },
        correct: 'A',
        explanation: {
            en: 'Jaswant Singh Kanwal (1919–2020) authored "Lahu di Lau" (1973), which had to be initially printed in Singapore due to Indian censorship, depicting the heroic and tragic Naxalite struggle.',
            pa: 'ਜਸਵੰਤ ਸਿੰਘ ਕੰਵਲ ਨੇ ਨਕਸਲਬਾੜੀ ਲਹਿਰ ਦੇ ਹਾਲਾਤ ਉੱਤੇ ਸ਼ਾਹਕਾਰ ਨਾਵਲ "ਲਹੂ ਦੀ ਲੋਅ" (1973) ਲਿਖਿਆ।',
            hi: 'जसवंत सिंह कंवल ने नक्सलवादी आंदोलन की पृष्ठभूमि पर अमर उपन्यास "लहू दी लौ" (1973) रचा।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-pd-9',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Who is venerated as the "Father of the Modern Punjabi Short Story" (Nikki Kahani da Bapu) and won the Sahitya Akademi Award in 1968 for his collection "Naveen Lok"?',
            pa: 'ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਨਿੱਕੀ ਕਹਾਣੀ ਦੇ ਬਾਪੂ ਕਿਸ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਜਿਨ੍ਹਾਂ ਨੂੰ 1968 ਵਿੱਚ ਕਹਾਣੀ ਸੰਗ੍ਰਹਿ "ਨਵੇਂ ਲੋਕ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ?',
            hi: 'आधुनिक पंजाबी कहानी के पितामह किसे कहा जाता है, जिन्हें 1968 में कहानी संग्रह "नवें लोक" हेतु साहित्य अकादमी पुरस्कार प्राप्त हुआ था?'
        },
        options: {
            A: { en: 'Kulwant Singh Virk', pa: 'ਕੁਲਵੰਤ ਸਿੰਘ ਵਿਰਕ', hi: 'कुलवंत सिंह विर्क' },
            B: { en: 'Kartar Singh Duggal', pa: 'ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ', hi: 'करतार सिंह दुग्गल' },
            C: { en: 'Sujan Singh', pa: 'ਸੁਜਾਨ ਸਿੰਘ', hi: 'सुजान सिंह' },
            D: { en: 'Santokh Singh Dhir', pa: 'ਸੰਤੋਖ ਸਿੰਘ ਧੀਰ', hi: 'संतोख सिंह धीर' }
        },
        correct: 'A',
        explanation: {
            en: 'Kulwant Singh Virk (1921–1987) is revered as the Father of modern Punjabi short story. He authored masterpieces like "Dharti Hethla Balad" and won the Sahitya Akademi Award for "Naveen Lok" (1967).',
            pa: 'ਕੁਲਵੰਤ ਸਿੰਘ ਵਿਰਕ ਨੂੰ ਪੰਜਾਬੀ ਨਿੱਕੀ ਕਹਾਣੀ ਦੇ ਬਾਪੂ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ; ਉਹਨਾਂ ਨੂੰ 1968 ਵਿੱਚ "ਨਵੇਂ ਲੋਕ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ।',
            hi: 'कुलवंत सिंह विर्क को पंजाबी कहानी का पितामह माना जाता है; उन्हें 1968 में "नवें लोक" हेतु साहित्य अकादमी पुरस्कार प्राप्त हुआ था।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-pd-10',
        topicId: 'punjabi-lit-prose-drama',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which courageous Punjabi feminist writer won the Sahitya Akademi Award in 1983 for her candid autobiographical work "Khanabadosh"?',
            pa: 'ਕਿਸ ਦਲੇਰ ਪੰਜਾਬੀ ਨਾਰੀਵਾਦੀ ਲੇਖਿਕਾ ਨੂੰ 1983 ਵਿੱਚ ਉਹਨਾਂ ਦੀ ਸਵੈ-ਜੀਵਨੀ "ਖ਼ਾਨਾਬਦੋਸ਼" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਨਾਲ ਸਨਮਾਨਿਤ ਕੀਤਾ ਗਿਆ ਸੀ?',
            hi: 'किस साहसी पंजाबी नारीवादी लेखिका को 1983 में उनकी आत्मकथा "ख़ानाबदोश" हेतु साहित्य अकादमी पुरस्कार से सम्मानित किया गया था?'
        },
        options: {
            A: { en: 'Ajit Caur', pa: 'ਅਜੀਤ ਕੌਰ', hi: 'अजीत कौर' },
            B: { en: 'Dalip Kaur Tiwana', pa: 'ਦਲੀਪ ਕੌਰ ਟਿਵਾਣਾ', hi: 'दलीप कौर टिवाणा' },
            C: { en: 'Amrita Pritam', pa: 'ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ', hi: 'अमृता प्रीतम' },
            D: { en: 'Prabhjot Kaur', pa: 'ਪ੍ਰਭਜੋਤ ਕੌਰ', hi: 'प्रभजोत कौर' }
        },
        correct: 'A',
        explanation: {
            en: 'Ajit Caur won the Sahitya Akademi Award in 1983 for her autobiography "Khanabadosh", celebrated for its raw emotional honesty, feminist critique, and existential nomadism.',
            pa: 'ਅਜੀਤ ਕੌਰ ਨੂੰ 1983 ਵਿੱਚ ਉਹਨਾਂ ਦੀ ਸਵੈ-ਜੀਵਨੀ "ਖ਼ਾਨਾਬਦੋਸ਼" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਦਿੱਤਾ ਗਿਆ ਸੀ।',
            hi: 'अजीत कौर को 1983 में उनकी आत्मकथा "ख़ानाबदोश" हेतु साहित्य अकादमी पुरस्कार प्रदान किया गया था।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },

    // =========================================================================
    // 5. PUNJABI VYAKARAN & LINGUISTICS (punjabi-vyakaran-linguistics) — 10 MCQs
    // =========================================================================
    {
        id: 'q-mcpl-vl-1',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'According to modern comparative Indo-Aryan linguistics, what is the genealogical linguistic descent of the Punjabi language?',
            pa: 'ਤੁਲਨਾਤਮਕ ਭਾਸ਼ਾ ਵਿਗਿਆਨ ਅਨੁਸਾਰ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਨਿਕਾਸ ਅਤੇ ਵਿਕਾਸ ਕਿਸ ਭਾਸ਼ਾ ਪਰਿਵਾਰ ਤੇ ਸ਼ਾਖ਼ਾ ਵਿੱਚੋਂ ਹੋਇਆ ਹੈ?',
            hi: 'तुलनात्मक भाषा विज्ञान के अनुसार पंजाबी भाषा का निकास और विकास किस भाषा परिवार व शाखा से हुआ है?'
        },
        options: {
            A: { en: 'Indo-European -> Indo-Iranian -> Indo-Aryan -> Prakrit / Apabhramsha -> Modern Punjabi', pa: 'ਭਾਰੋਪੀ -> ਇੰਡੋ-ਇਰਾਨੀ -> ਭਾਰਤੀ ਆਰੀਆ -> ਪ੍ਰਾਕ੍ਰਿਤ / ਅਪਭ੍ਰੰਸ਼ -> ਆਧੁਨਿਕ ਪੰਜਾਬੀ', hi: 'भारोपीय -> भारत-ईरानी -> भारतीय आर्य -> प्राकृत / अपभ्रंश -> आधुनिक पंजाबी' },
            B: { en: 'Dravidian -> South Indian Prakrit -> Punjabi', pa: 'ਦ੍ਰਾਵਿੜ ਪਰਿਵਾਰ -> ਦੱਖਣੀ ਪ੍ਰਾਕ੍ਰਿਤ -> ਪੰਜਾਬੀ', hi: 'द्रविड़ परिवार -> दक्षिणी प्राकृत -> पंजाबी' },
            C: { en: 'Tibeto-Burman -> Sino-Tibetan -> Punjabi', pa: 'ਤਿੱਬਤੀ-ਬਰਮੀ -> ਚੀਨੀ-ਤਿੱਬਤੀ -> ਪੰਜਾਬੀ', hi: 'तिब्बती-बर्मी -> चीनी-तिब्बती -> पंजाबी' },
            D: { en: 'Semitic -> Arabic -> Persian -> Punjabi', pa: 'ਸਾਮੀ ਪਰਿਵਾਰ -> ਅਰਬੀ -> ਫ਼ਾਰਸੀ -> ਪੰਜਾਬੀ', hi: 'सामी परिवार -> अरबी -> फ़ारसी -> पंजाबी' }
        },
        correct: 'A',
        explanation: {
            en: 'Punjabi belongs to the Indo-Aryan branch of the Indo-Iranian sub-family of the Indo-European language family, evolving from Vedic Sanskrit through Paishachi/Sauraseni Prakrit and Apabhramsha.',
            pa: 'ਪੰਜਾਬੀ ਭਾਰੋਪੀ (ਇੰਡੋ-ਯੂਰਪੀਅਨ) ਪਰਿਵਾਰ ਦੀ ਇੰਡੋ-ਇਰਾਨੀ ਸ਼ਾਖ਼ਾ ਵਿੱਚੋਂ ਭਾਰਤੀ ਆਰੀਆ (ਪ੍ਰਾਕ੍ਰਿਤ ਤੇ ਅਪਭ੍ਰੰਸ਼) ਵਿੱਚੋਂ ਵਿਕਸਿਤ ਹੋਈ ਹੈ।',
            hi: 'पंजाबी भारोपीय परिवार की भारत-ईरानी शाखा से भारतीय आर्य (प्राकृत व अपभ्रंश) के माध्यम से विकसित हुई है।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-vl-2',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which ancient script is the direct historical parent of Gurmukhi Lipi through Gupta Lipi and Sharada Lipi?',
            pa: 'ਗੁਪਤ ਲਿਪੀ ਅਤੇ ਸ਼ਾਰਦਾ ਲਿਪੀ ਰਾਹੀਂ ਹੁੰਦੇ ਹੋਏ ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਸਿੱਧਾ ਮੂਲ ਸਰੋਤ ਕਿਹੜੀ ਪ੍ਰਾਚੀਨ ਲਿਪੀ ਹੈ?',
            hi: 'गुप्त लिपि और शारदा लिपि के माध्यम से विकसित होते हुए गुरुमुखी लिपि का मूल स्रोत कौन-सी प्राचीन लिपि है?'
        },
        options: {
            A: { en: 'Brahmi Lipi', pa: 'ਬ੍ਰਾਹਮੀ ਲਿਪੀ', hi: 'ब्राह्मी लिपि' },
            B: { en: 'Kharosthi Lipi', pa: 'ਖਰੋਸ਼ਠੀ ਲਿਪੀ', hi: 'खरोष्ठी लिपि' },
            C: { en: 'Devanagari Lipi', pa: 'ਦੇਵਨਾਗਰੀ ਲਿਪੀ', hi: 'देवनागरी लिपि' },
            D: { en: 'Aramaic Lipi', pa: 'ਅਰਾਮਾਈਕ ਲਿਪੀ', hi: 'अरामी लिपि' }
        },
        correct: 'A',
        explanation: {
            en: 'Gurmukhi evolved directly from Ashokan Brahmi through Northern Gupta Lipi (4th–5th c.), Kutila/Siddhamatrika (6th c.), and Sharada Lipi (8th–10th c.).',
            pa: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਮੂਲ ਸਰੋਤ ਪ੍ਰਾਚੀਨ ਭਾਰਤ ਦੀ ਬ੍ਰਾਹਮੀ ਲਿਪੀ ਹੈ, ਜੋ ਗੁਪਤ ਤੇ ਸ਼ਾਰਦਾ ਲਿਪੀ ਰਾਹੀਂ ਵਿਕਸਿਤ ਹੋਈ।',
            hi: 'गुरुमुखी लिपि का मूल स्रोत प्राचीन भारत की ब्राह्मी लिपि है, जो गुप्त और शारदा लिपि से होते हुए विकसित हुई।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-vl-3',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'What is the total count of letters in the standardized modern Gurmukhi alphabet (Varnmala) including foot-dotted Persian-Arabic borrowings?',
            pa: 'ਫ਼ਾਰਸੀ-ਅਰਬੀ ਪ੍ਰਭਾਵ ਅਧੀਨ ਸ਼ਾਮਲ ਕੀਤੇ ਪੈਰ-ਬਿੰਦੀ ਵਾਲੇ ਅੱਖਰਾਂ ਸਮੇਤ ਆਧੁਨਿਕ ਮਿਆਰੀ ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਅੱਖਰ ਹਨ?',
            hi: 'फ़ारसी-अरबी प्रभाव के अंतर्गत सम्मिलित किए गए पैर-बिंदी वाले अक्षरों सहित आधुनिक मानक गुरुमुखी वर्णमाला में कुल कितने अक्षर हैं?'
        },
        options: {
            A: { en: '41 Letters (35 traditional + 6 foot-dotted)', pa: '41 ਅੱਖਰ (35 ਮੂਲ + 6 ਪੈਰ-ਬਿੰਦੀ ਵਾਲੇ)', hi: '41 अक्षर (35 मूल + 6 पैर-बिंदी वाले)' },
            B: { en: '35 Letters exclusively', pa: 'ਸਿਰਫ਼ 35 ਅੱਖਰ', hi: 'केवल 35 अक्षर' },
            C: { en: '52 Letters like Devanagari', pa: 'ਦੇਵਨਾਗਰੀ ਵਾਂਗ 52 ਅੱਖਰ', hi: 'देवनागरी की भांति 52 अक्षर' },
            D: { en: '38 Letters', pa: '38 ਅੱਖਰ', hi: '38 अक्षर' }
        },
        correct: 'A',
        explanation: {
            en: 'The traditional Gurmukhi alphabet has 35 letters (ੳ to ੜ). With the addition of 6 foot-dotted letters (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼), the standardized modern alphabet comprises exactly 41 letters.',
            pa: 'ਮੂਲ 35 ਅੱਖਰੀ ਵਿੱਚ 6 ਪੈਰ-ਬਿੰਦੀ ਵਾਲੇ ਅੱਖਰ (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼) ਸ਼ਾਮਲ ਕਰਕੇ ਆਧੁਨਿਕ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕੁੱਲ 41 ਅੱਖਰ ਹਨ।',
            hi: 'मूल 35 अक्षरों में 6 पैर-बिंदी वाले अक्षर (ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼) सम्मिलित करके आधुनिक वर्णमाला में कुल 41 अक्षर हैं।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-vl-4',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'How many vowel carriers (Swar Vahak) exist in Gurmukhi, and how many distinct vowel sounds (Lagan) do they collectively generate?',
            pa: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਕਿੰਨੇ ਸਵਰ ਵਾਹਕ ਹਨ ਅਤੇ ਇਹਨਾਂ ਤੋਂ ਮਿਲ ਕੇ ਕੁੱਲ ਕਿੰਨੀਆਂ ਸਵਰ ਧੁਨੀਆਂ (ਲਗਾਂ) ਬਣਦੀਆਂ ਹਨ?',
            hi: 'गुरुमुखी लिपि में कितने स्वर वाहक हैं और इनसे मिलकर कुल कितनी स्वर ध्वनियां (मात्राएँ) बनती हैं?'
        },
        options: {
            A: { en: '3 Swar Vahak (ੳ, ਅ, ੲ) yielding 10 Vowel Sounds (ੳ-3, ਅ-4, ੲ-3)', pa: '3 ਸਵਰ ਵਾਹਕ (ੳ, ਅ, ੲ) ਅਤੇ 10 ਸਵਰ ਧੁਨੀਆਂ (ੳ-3, ਅ-4, ੲ-3)', hi: '3 स्वर वाहक (ੳ, ਅ, ੲ) और 10 स्वर ध्वनियां (ੳ-3, ਅ-4, ੲ-3)' },
            B: { en: '5 Swar Vahak yielding 12 Vowels', pa: '5 ਸਵਰ ਵਾਹਕ ਅਤੇ 12 ਸਵਰ', hi: '5 स्वर वाहक और 12 स्वर' },
            C: { en: '2 Swar Vahak yielding 8 Vowels', pa: '2 ਸਵਰ ਵਾਹਕ ਅਤੇ 8 ਸਵਰ', hi: '2 स्वर वाहक और 8 स्वर' },
            D: { en: '4 Swar Vahak yielding 14 Vowels', pa: '4 ਸਵਰ ਵਾਹਕ ਅਤੇ 14 ਸਵਰ', hi: '4 स्वर वाहक और 14 स्वर' }
        },
        correct: 'A',
        explanation: {
            en: 'Gurmukhi has 3 vowel carriers: ੳ (takes 3 vowels: ਉ, ਊ, ਓ), ਅ (takes 4 vowels: ਅ, ਆ, ਐ, ਔ), and ੲ (takes 3 vowels: ਇ, ਈ, ਏ), totaling 10 distinct vowel sounds.',
            pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ 3 ਸਵਰ ਵਾਹਕ (ੳ, ਅ, ੲ) ਹਨ ਜਿਨ੍ਹਾਂ ਨਾਲ 10 ਲਗਾਂ ਲੱਗਦੀਆਂ ਹਨ: ੳ ਨਾਲ 3, ਅ ਨਾਲ 4, ਅਤੇ ੲ ਨਾਲ 3।',
            hi: 'गुरुमुखी में 3 स्वर वाहक (ੳ, ਅ, ੲ) हैं जिनसे 10 स्वर बनते हैं: ੳ से 3, ਅ से 4, तथा ੲ से 3।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-vl-5',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Which of the following correct grammatical rules governs the use of the three Lagakhar (ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ) in Punjabi orthography?',
            pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਅਨੁਸਾਰ ਤਿੰਨ ਲਗਾਖਰਾਂ (ਬਿੰਦੀ, ਟਿੱਪੀ, ਅੱਧਕ) ਦੀ ਵਰਤੋਂ ਸੰਬੰਧੀ ਕਿਹੜਾ ਨਿਯਮ ਬਿਲਕੁਲ ਦਰੁਸਤ ਹੈ?',
            hi: 'पंजाबी व्याकरण के अनुसार तीन लगाखरों (बिंदी, टिप्पी, अद्धक) के प्रयोग के संबंध में कौन-सा नियम पूर्णतः सही है?'
        },
        options: {
            A: { en: 'Bindi is used with 6 long vowels, Tippi with 4 short vowels, and Addhak indicates consonant gemination / stress', pa: 'ਬਿੰਦੀ 6 ਦੀਰਘ ਸਵਰਾਂ ਨਾਲ, ਟਿੱਪੀ 4 ਲਘੂ ਸਵਰਾਂ ਨਾਲ ਲੱਗਦੀ ਹੈ, ਅਤੇ ਅੱਧਕ ਦੁੱਤ ਧੁਨੀ/ਦਬਾਅ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ', hi: 'बिंदी 6 दीर्घ स्वरों के साथ, टिप्पी 4 ह्रस्व स्वरों के साथ लगती है, और अद्धक द्वित्व/बल हेतु प्रयुक्त होता है' },
            B: { en: 'Bindi and Tippi can be interchanged freely with any vowel', pa: 'ਬਿੰਦੀ ਅਤੇ ਟਿੱਪੀ ਕਿਸੇ ਵੀ ਸਵਰ ਨਾਲ ਮਨਮਰਜ਼ੀ ਨਾਲ ਵਰਤੇ ਜਾ ਸਕਦੇ ਹਨ', hi: 'बिंदी और टिप्पी किसी भी स्वर के साथ स्वच्छंद रूप से बदले जा सकते हैं' },
            C: { en: 'Addhak is used exclusively with Kanna and Bihari', pa: 'ਅੱਧਕ ਸਿਰਫ਼ ਕੰਨਾ ਅਤੇ ਬਿਹਾਰੀ ਨਾਲ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ', hi: 'अद्धक केवल कन्ना और बिहारी के साथ लगाया जाता है' },
            D: { en: 'Tippi is never used with Mukta or Sihari', pa: 'ਟਿੱਪੀ ਮੁਕਤਾ ਜਾਂ ਸਿਹਾਰੀ ਨਾਲ ਕਦੇ ਨਹੀਂ ਲੱਗਦੀ', hi: 'टिप्पी मुक्ता या सिहारी के साथ कभी नहीं लगती' }
        },
        correct: 'A',
        explanation: {
            en: 'In Gurmukhi, Bindi nasalizes 6 long vowels (ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ), Tippi nasalizes 4 short vowels (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ), and Addhak geminates consonants.',
            pa: 'ਬਿੰਦੀ 6 ਦੀਰਘ ਸਵਰਾਂ ਨਾਲ ਲੱਗਦੀ ਹੈ, ਟਿੱਪੀ 4 ਲਘੂ ਸਵਰਾਂ ਨਾਲ ਲੱਗਦੀ ਹੈ, ਅਤੇ ਅੱਧਕ ਦਬਾਅ ਜਾਂ ਦੁੱਤ ਧੁਨੀ ਦਾ ਸੂਚਕ ਹੈ।',
            hi: 'बिंदी 6 दीर्घ स्वरों के साथ लगती है, टिप्पी 4 ह्रस्व स्वरों के साथ लगती है, और अद्धक द्वित्व या बल का सूचक है।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-vl-6',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'What are the three conjunct consonants (Dutt Akhar) that are written in the foot of other characters in Punjabi, and how many nasal consonants (Nasiki) exist?',
            pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ ਤਿੰਨ ਦੁੱਤ ਅੱਖਰ ਕਿਹੜੇ ਹਨ ਅਤੇ ਨਾਸਕੀ ਵਿਅੰਜਨਾਂ ਦੀ ਕੁੱਲ ਗਿਣਤੀ ਕਿੰਨੀ ਹੈ?',
            hi: 'पंजाबी में पैर में पड़ने वाले तीन दुत्त अक्षर कौन-से हैं और नासिक्य व्यंजनों की कुल संख्या कितनी है?'
        },
        options: {
            A: { en: 'Dutt: ਹ, ਰ, ਵ — Nasals: 5 (ਙ, ਞ, ਣ, ਨ, ਮ)', pa: 'ਦੁੱਤ ਅੱਖਰ: ਹ, ਰ, ਵ — ਨਾਸਕੀ ਵਿਅੰਜਨ: 5 (ਙ, ਞ, ਣ, ਨ, ਮ)', hi: 'दुत्त अक्षर: ह, र, व — नासिक्य व्यंजन: 5 (ਙ, ਞ, ਣ, ਨ, ਮ)' },
            B: { en: 'Dutt: ਕ, ਚ, ਟ — Nasals: 3 (ਣ, ਨ, ਮ)', pa: 'ਦੁੱਤ ਅੱਖਰ: ਕ, ਚ, ਟ — ਨਾਸਕੀ ਵਿਅੰਜਨ: 3 (ਣ, ਨ, ਮ)', hi: 'दुत्त अक्षर: क, च, ट — नासिक्य व्यंजन: 3 (ਣ, ਨ, ਮ)' },
            C: { en: 'Dutt: ਯ, ਲ, ਵ — Nasals: 4 (ਙ, ਣ, ਨ, ਮ)', pa: 'ਦੁੱਤ ਅੱਖਰ: ਯ, ਲ, ਵ — ਨਾਸਕੀ ਵਿਅੰਜਨ: 4 (ਙ, ਣ, ਨ, ਮ)', hi: 'दुत्त अक्षर: य, ल, व — नासिक्य व्यंजन: 4 (ਙ, ਣ, ਨ, ਮ)' },
            D: { en: 'Dutt: ਸ਼, ਖ਼, ਜ਼ — Nasals: 2 (ਨ, ਮ)', pa: 'ਦੁੱਤ ਅੱਖਰ: ਸ਼, ਖ਼, ਜ਼ — ਨਾਸਕੀ ਵਿਅੰਜਨ: 2 (ਨ, ਮ)', hi: 'दुत्त अक्षर: श, ख़, ज़ — नासिक्य व्यंजन: 2 (न, म)' }
        },
        correct: 'A',
        explanation: {
            en: 'The 3 foot-consonants (Dutt Akhar) are Ha (ਹ), Ra (ਰ), and Va (ਵ). There are exactly 5 nasal consonants in Gurmukhi: ਙ, ਞ, ਣ, ਨ, ਮ.',
            pa: 'ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ 3 ਦੁੱਤ ਅੱਖਰ ਹਨ: ਹ, ਰ, ਵ (ਜਿਵੇਂ ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)। ਨਾਸਕੀ ਵਿਅੰਜਨ 5 ਹਨ: ਙ, ਞ, ਣ, ਨ, ਮ।',
            hi: 'पैर में पड़ने वाले 3 दुत्त अक्षर हैं: ह, र, व। नासिक्य व्यंजन 5 हैं: ਙ, ਞ, ਣ, ਨ, ਮ।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-vl-7',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'Why is Punjabi classified as a unique "Tonal Language" (Sur-baddh Bhasha) among all major Modern Indo-Aryan languages?',
            pa: 'ਪੰਜਾਬੀ ਨੂੰ ਆਧੁਨਿਕ ਭਾਰਤੀ ਆਰੀਆ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਇੱਕ ਵਿਲੱਖਣ "ਸੁਰ-ਬੱਧ ਭਾਸ਼ਾ" (Tonal Language) ਕਿਉਂ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?',
            hi: 'पंजाबी को आधुनिक भारतीय आर्य भाषाओं में एक अद्वितीय "सुर-बद्ध भाषा" (Tonal Language) क्यों माना जाता है?'
        },
        options: {
            A: { en: 'Loss of voiced aspirate plosives (ਘ, ਝ, ਢ, ਧ, ਭ) generated 3 distinct pitch tones (High, Mid, Low)', pa: 'ਘੋਸ਼ ਮਹਾਂਪ੍ਰਾਣ ਵਿਅੰਜਨਾਂ (ਘ, ਝ, ਢ, ਧ, ਭ) ਅਤੇ \'ਹ\' ਦੇ ਲੋਪ ਹੋਣ ਨਾਲ 3 ਸੁਰਾਂ (ਉੱਚੀ, ਮੱਧਮ, ਨੀਵੀਂ) ਪੈਦਾ ਹੋਈਆਂ', hi: 'घोष महाप्राण व्यंजनों (ਘ, ਝ, ਢ, ਧ, ਭ) तथा \'ह\' के लोप होने से 3 सुर (उच्च, मध्यम, निम्न) उत्पन्न हुईं' },
            B: { en: 'It is sung strictly according to classical Indian Ragas', pa: 'ਇਹ ਕੇਵਲ ਸ਼ਾਸਤਰੀ ਰਾਗਾਂ ਵਿੱਚ ਹੀ ਬੋਲੀ ਜਾਂਦੀ ਹੈ', hi: 'यह केवल शास्त्रीय रागों में ही बोली जाती है' },
            C: { en: 'It has no written consonants or vowel markers', pa: 'ਇਸ ਵਿੱਚ ਕੋਈ ਵਿਅੰਜਨ ਜਾਂ ਲਗਾਂ ਨਹੀਂ ਹੁੰਦੀਆਂ', hi: 'इसमें कोई व्यंजन या मात्रा नहीं होती' },
            D: { en: 'It borrows tones directly from Chinese and Tibetan', pa: 'ਇਸ ਨੇ ਚੀਨੀ ਅਤੇ ਤਿੱਬਤੀ ਭਾਸ਼ਾ ਤੋਂ ਸੁਰਾਂ ਉਧਾਰ ਲਈਆਂ ਹਨ', hi: 'इसने चीनी और तिब्बती भाषा से सुर उधार लिए हैं' }
        },
        correct: 'A',
        explanation: {
            en: 'In Punjabi, the historical Old Indo-Aryan voiced aspirates (ਘ, ਝ, ਢ, ਧ, ਭ) lost their voicing and aspiration, creating a system of three contrastive pitch tones: High tone (initially) and Low tone (medially/finally).',
            pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਘ, ਝ, ਢ, ਧ, ਭ ਵਿਅੰਜਨਾਂ ਦੇ ਧੁਨੀ-ਲੋਪ ਨਾਲ ਤਿੰਨ ਸੁਰਾਂ (ਉੱਚੀ ਸੁਰ, ਮੱਧਮ ਸੁਰ, ਨੀਵੀਂ ਸੁਰ) ਵਿਕਸਿਤ ਹੋਈਆਂ, ਜੋ ਪੰਜਾਬੀ ਨੂੰ ਸੁਰ-ਬੱਧ ਭਾਸ਼ਾ ਬਣਾਉਂਦੀਆਂ ਹਨ।',
            hi: 'पंजाबी में घ, झ, ढ, ध, भ व्यंजनों के ध्वनि-लोप से तीन सुर (उच्च, मध्यम, निम्न) विकसित हुईं, जो इसे सुर-बद्ध भाषा बनाती हैं।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-vl-8',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'In Punjabi grammar, how are the 8 parts of speech divided into "Vikari" (inflected/variable) and "Avikari" (uninflected/invariable) word classes?',
            pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ 8 ਸ਼ਬਦ ਭੇਦਾਂ ਨੂੰ "ਵਿਕਾਰੀ" ਅਤੇ "ਅਵਿਕਾਰੀ" ਸ਼ਬਦ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚ ਕਿਵੇਂ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ?',
            hi: 'पंजाबी व्याकरण में 8 शब्द भेदों को "विकारी" और "अविकारी" शब्द श्रेणियों में कैसे विभाजित किया जाता है?'
        },
        options: {
            A: { en: '4 Vikari (Noun, Pronoun, Adjective, Verb) & 4 Avikari (Adverb, Sambandhak, Yojak, Vismak)', pa: '4 ਵਿਕਾਰੀ (ਨਾਂਵ, ਪੜਨਾਂਵ, ਵਿਸ਼ੇਸ਼ਣ, ਕਿਰਿਆ) ਅਤੇ 4 ਅਵਿਕਾਰੀ (ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ, ਸੰਬੰਧਕ, ਯੋਜਕ, ਵਿਸਮਕ)', hi: '4 विकारी (संज्ञा, सर्वनाम, विशेषण, क्रिया) और 4 अविकारी (क्रिया विशेषण, संबंधक, योजक, विस्मयादिबोधक)' },
            B: { en: '5 Vikari (Noun, Pronoun, Adverb, Verb, Yojak) & 3 Avikari', pa: '5 ਵਿਕਾਰੀ ਅਤੇ 3 ਅਵਿਕਾਰੀ', hi: '5 विकारी और 3 अविकारी' },
            C: { en: 'All 8 parts of speech are strictly Vikari', pa: 'ਸਾਰੇ 8 ਸ਼ਬਦ ਭੇਦ ਵਿਕਾਰੀ ਹੁੰਦੇ ਹਨ', hi: 'सभी 8 शब्द भेद विकारी होते हैं' },
            D: { en: 'All 8 parts of speech are strictly Avikari', pa: 'ਸਾਰੇ 8 ਸ਼ਬਦ ਭੇਦ ਅਵਿਕਾਰੀ ਹੁੰਦੇ ਹਨ', hi: 'सभी 8 शब्द भेद अविकारी होते हैं' }
        },
        correct: 'A',
        explanation: {
            en: 'Vikari words change form according to gender, number, and case (Noun 5 types, Pronoun 6 types, Adjective 5 types, Verb). Avikari words remain invariable (Adverb 8 types, Sambandhak, Yojak, Vismak 9 types).',
            pa: 'ਵਿਕਾਰੀ ਸ਼ਬਦ ਲਿੰਗ, ਵਚਨ ਤੇ ਕਾਰਕ ਅਨੁਸਾਰ ਬਦਲਦੇ ਹਨ (ਨਾਂਵ, ਪੜਨਾਂਵ, ਵਿਸ਼ੇਸ਼ਣ, ਕਿਰਿਆ); ਅਵਿਕਾਰੀ ਸ਼ਬਦ ਅਬਦਲ ਰਹਿੰਦੇ ਹਨ (ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ, ਸੰਬੰਧਕ, ਯੋਜਕ, ਵਿਸਮਕ)।',
            hi: 'विकारी शब्द लिंग, वचन व कारक अनुसार रूप बदलते हैं (संज्ञा, सर्वनाम, विशेषण, क्रिया); अविकारी शब्द अपरिवर्तित रहते हैं (क्रिया विशेषण, संबंधक, योजक, विस्मयादिबोधक)।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-vl-9',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'What is the canonical word order of a standard Punjabi sentence, and into what three structural types are sentences categorized?',
            pa: 'ਇੱਕ ਮਿਆਰੀ ਪੰਜਾਬੀ ਵਾਕ ਦੀ ਵਿਆਕਰਨਕ ਪਦ-ਤਰਤੀਬ ਕੀ ਹੁੰਦੀ ਹੈ ਅਤੇ ਬਣਤਰ ਅਨੁਸਾਰ ਵਾਕਾਂ ਦੀਆਂ ਤਿੰਨ ਕਿਸਮਾਂ ਕਿਹੜੀਆਂ ਹਨ?',
            hi: 'एक मानक पंजाबी वाक्य का पद-क्रम क्या होता है और रचना के आधार पर वाक्य के तीन प्रकार कौन-से हैं?'
        },
        options: {
            A: { en: 'SOV (Subject + Object + Verb) — Sadharan (Simple), Sanyukt (Compound), Mishrat (Complex)', pa: 'ਕਰਤਾ + ਕਰਮ + ਕਿਰਿਆ (SOV) — ਸਾਧਾਰਨ ਵਾਕ, ਸੰਯੁਕਤ ਵਾਕ, ਮਿਸ਼ਰਤ ਵਾਕ', hi: 'कर्ता + कर्म + क्रिया (SOV) — साधारण वाक्य, संयुक्त वाक्य, मिश्रित वाक्य' },
            B: { en: 'SVO (Subject + Verb + Object) — Prathamik, Dutiya, Tritiya', pa: 'ਕਰਤਾ + ਕਿਰਿਆ + ਕਰਮ (SVO) — ਪ੍ਰਾਥਮਿਕ, ਦੂਤੀਆ, ਤ੍ਰਿਤੀਆ', hi: 'कर्ता + क्रिया + कर्म (SVO) — प्राथमिक, द्वितीयक, तृतीयक' },
            C: { en: 'VSO (Verb + Subject + Object) — Mukta, Laghav, Deergh', pa: 'ਕਿਰਿਆ + ਕਰਤਾ + ਕਰਮ (VSO) — ਮੁਕਤ, ਲਘੂ, ਦੀਰਘ', hi: 'क्रिया + कर्ता + कर्म (VSO) — मुक्त, लघु, दीर्घ' },
            D: { en: 'OVS (Object + Verb + Subject) — Ekangi, Bahu-angi', pa: 'ਕਰਮ + ਕਿਰਿਆ + ਕਰਤਾ (OVS) — ਇਕਾਂਗੀ, ਬਹੁ-ਅੰਗੀ', hi: 'कर्म + क्रिया + कर्ता (OVS) — एकांगी, बहुअंगी' }
        },
        correct: 'A',
        explanation: {
            en: 'Canonical Punjabi syntax follows Subject-Object-Verb (SOV) order. By internal grammatical structure, sentences are classified into Simple (Sadharan), Compound (Sanyukt), and Complex (Mishrat).',
            pa: 'ਪੰਜਾਬੀ ਵਾਕ ਦੀ ਵਿਆਕਰਨਕ ਤਰਤੀਬ ਕਰਤਾ + ਕਰਮ + ਕਿਰਿਆ (SOV) ਹੁੰਦੀ ਹੈ, ਅਤੇ ਬਣਤਰ ਅਨੁਸਾਰ ਸਾਧਾਰਨ, ਸੰਯੁਕਤ ਅਤੇ ਮਿਸ਼ਰਤ ਵਾਕ ਹੁੰਦੇ ਹਨ।',
            hi: 'पंजाबी वाक्य का मानक पद-क्रम कर्ता + कर्म + क्रिया (SOV) होता है, और संरचना अनुसार साधारण, संयुक्त और मिश्रित वाक्य होते हैं।'
        },
        difficulty: 'easy',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    },
    {
        id: 'q-mcpl-vl-10',
        topicId: 'punjabi-vyakaran-linguistics',
        subjectId: 'punjabi',
        examId: 'punjab-master-cadre-punjabi',
        examTag: 'Punjab Master Cadre Punjabi',
        question: {
            en: 'What is the precise grammatical distinction between an idiom (Muhavara) and a proverb (Akhan) in Punjabi, and what does the proverb "ਡੁੱਲੇ ਬੇਰਾਂ ਦਾ ਅਜੇ ਕੁਝ ਨਹੀਂ ਵਿਗੜਿਆ" convey?',
            pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ ਵਿੱਚ ਮੁੱਖ ਵਿਆਕਰਨਕ ਅੰਤਰ ਕੀ ਹੈ ਅਤੇ ਅਖਾਣ "ਡੁੱਲੇ ਬੇਰਾਂ ਦਾ ਅਜੇ ਕੁਝ ਨਹੀਂ ਵਿਗੜਿਆ" ਦਾ ਕੀ ਭਾਵ ਅਰਥ ਹੈ?',
            hi: 'पंजाबी में मुहावरे और लोकोक्ति (अखाण) में क्या मुख्य व्याकरणिक अंतर है और लोकोक्ति "ਡੁੱਲੇ ਬੇਰਾਂ ਦਾ ਅਜੇ ਕੁਝ ਨਹੀਂ ਵਿਗੜਿਆ" का क्या भावार्थ है?'
        },
        options: {
            A: { en: 'Idiom ends with verb form (-na/-naa) as a phrase, while Proverb is a complete sentence; the proverb means it is never too late to recover from a mistake', pa: 'ਮੁਹਾਵਰੇ ਦੇ ਅੰਤ ਵਿੱਚ ਕਿਰਿਆ-ਰੂਪ (ਨਾ/ਣਾ) ਆਉਂਦਾ ਹੈ ਜਦਕਿ ਅਖਾਣ ਪੂਰਾ ਸੁਤੰਤਰ ਵਾਕ ਹੁੰਦਾ ਹੈ; ਅਖਾਣ ਦਾ ਅਰਥ ਹੈ ਕਿ ਸਮਾਂ ਰਹਿੰਦੇ ਨੁਕਸਾਨ ਸੰਭਾਲਿਆ ਜਾ ਸਕਦਾ ਹੈ', hi: 'मुहावरे के अंत में क्रिया-रूप (ना/णा) आता है जबकि लोकोक्ति पूर्ण स्वतंत्र वाक्य होती है; लोकोक्ति का अर्थ है कि समय रहते सुधार संभव है' },
            B: { en: 'Idiom is always a full sentence while Proverb is just one word', pa: 'ਮੁਹਾਵਰਾ ਪੂਰਾ ਵਾਕ ਹੁੰਦਾ ਹੈ ਅਤੇ ਅਖਾਣ ਸਿਰਫ਼ ਇੱਕ ਸ਼ਬਦ ਹੁੰਦਾ ਹੈ', hi: 'मुहावरा पूर्ण वाक्य होता है और लोकोक्ति केवल एक शब्द' },
            C: { en: 'There is no grammatical or semantic distinction between the two', pa: 'ਦੋਹਾਂ ਵਿੱਚ ਕੋਈ ਵਿਆਕਰਨਕ ਜਾਂ ਅਰਥਗਤ ਅੰਤਰ ਨਹੀਂ ਹੁੰਦਾ', hi: 'दोनों में कोई व्याकरणिक या अर्थगत अंतर नहीं होता' },
            D: { en: 'Proverbs are only used in poetry and idioms only in law', pa: 'ਅਖਾਣ ਸਿਰਫ਼ ਕਵਿਤਾ ਵਿੱਚ ਅਤੇ ਮੁਹਾਵਰੇ ਸਿਰਫ਼ ਕਾਨੂੰਨ ਵਿੱਚ ਵਰਤੇ ਜਾਂਦੇ ਹਨ', hi: 'लोकोक्तियाँ केवल कविता में और मुहावरे केवल कानून में प्रयुक्त होते हैं' }
        },
        correct: 'A',
        explanation: {
            en: 'A Muhavara is an incomplete verbal phrase ending with -na/-naa (e.g. ਕੰਨ ਭਰਨੇ), whereas an Akhan is a standalone complete sentence embodying communal wisdom. "ਡੁੱਲੇ ਬੇਰਾਂ ਦਾ ਅਜੇ ਕੁਝ ਨਹੀਂ ਵਿਗੜਿਆ" means timely rectification is still possible.',
            pa: 'ਮੁਹਾਵਰੇ ਦੇ ਅੰਤ ਵਿੱਚ ਕਿਰਿਆ (ਨਾ/ਣਾ) ਹੁੰਦੀ ਹੈ, ਜਦਕਿ ਅਖਾਣ ਇੱਕ ਪੂਰਾ ਵਾਕ ਹੁੰਦਾ ਹੈ। ਇਸ ਅਖਾਣ ਦਾ ਭਾਵ ਹੈ ਕਿ ਅਜੇ ਵੀ ਗ਼ਲਤੀ ਸੁਧਾਰਨ ਅਤੇ ਸੰਭਲਣ ਦਾ ਸਮਾਂ ਬਾਕੀ ਹੈ।',
            hi: 'मुहावरे के अंत में क्रिया (ना/णा) होती है, जबकि लोकोक्ति एक पूर्ण वाक्य होती है। इस लोकोक्ति का अर्थ है कि अभी भी त्रुटि सुधार संभव है।'
        },
        difficulty: 'medium',
        originType: 'authored-original',
        reviewStatus: 'reviewed',
        editorialStatus: 'reviewed',
        rightsProvenance: MASTER_CADRE_PUNJABI_PROVENANCE,
        source: MASTER_CADRE_PUNJABI_SOURCE
    }
];
