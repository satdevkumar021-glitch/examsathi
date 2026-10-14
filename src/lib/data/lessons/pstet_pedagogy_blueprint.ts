import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const PSTET_PEDAGOGY_BLUEPRINT_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. CHILD DEVELOPMENT & PEDAGOGY (pstet-cdp-core)
    // =========================================================================
    {
        topicId: 'pstet-cdp-core',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 30,
            editorialNote: 'Comprehensive trilingual blueprint for PSTET Paper 1 & 2 Child Development and Pedagogy: Growth vs Development, Principles of Development, Heredity & Environment, Piaget 4 Stages, Vygotsky ZPD & Scaffolding, Kohlberg Moral Stages, Inclusive Education & CWSN, CCE Assessment Models, NEP 2020 & RTE Act 2009.'
        },
        bookRefs: [
            {
                title: 'Child Development and Pedagogy for CTET & STET (Paper 1 & 2)',
                author: 'Pearson / SCERT Punjab Curriculum Framework',
                chapter: 'Foundations of Child Development, Learning Theories & Inclusive Classrooms',
                relevance: 'Standard pedagogical benchmark for PSTET Paper 1 & 2 compulsory CDP section.'
            },
            {
                title: 'ਬਾਲ ਵਿਕਾਸ ਅਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ (Child Development & Pedagogy)',
                author: 'ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ (PSEB) / ਡਾਇਰੈਕਟੋਰੇਟ ਆਫ਼ ਐਜੂਕੇਸ਼ਨਲ ਰਿਸਰਚ (SCERT ਪੰਜਾਬ)',
                chapter: 'ਬਾਲ ਮਨੋਵਿਗਿਆਨ, ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ, ਆਕਲਨ ਅਤੇ ਆਰ.ਟੀ.ਈ. ਐਕਟ 2009',
                relevance: 'Authoritative Punjab D.El.Ed & B.Ed teacher preparation reference for PSTET.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Growth, Development & Developmental Principles]
1. **Growth vs Development:**
   - **Growth (ਵਾਧਾ / वृद्धि):** Quantitative, purely physical/structural (increase in height, weight, body dimensions). Cellular multiplication; measurable directly in physical units (cm, kg). Stops when physical maturity is attained.
   - **Development (ਵਿਕਾਸ / विकास):** Qualitative and quantitative; progressive, orderly, coherent changes leading to functional maturity and adaptation. Lifelong process from **womb to tomb (ਗਰਭ ਤੋਂ ਕਬਰ ਤੱਕ)**. Multidimensional (physical, cognitive, social, emotional, moral) and multidirectional.
2. **Key Developmental Principles:**
   - **Cephalocaudal Trend (ਸਿਰ ਤੋਂ ਪੈਰ ਵੱਲ / सिरोन्मुखी):** Development proceeds longitudinally from head to toe. An infant gains control of the head and neck first, followed by trunk and arms, and finally leg coordination.
   - **Proximodistal Trend (ਕੇਂਦਰ ਤੋਂ ਬਾਹਰ ਵੱਲ / समीप-दूरस्थ):** Development proceeds from the center of the body outward. Control over trunk/spine develops before arms and legs; gross motor before fine motor control of fingers.
   - **Principle of Continuity:** Development is continuous and lifelong without abrupt disjointed breaks.
   - **Principle of Individual Differences:** Rate of development varies uniquely among children due to genetic and environmental interactions.
   - **Principle of Interrelation:** Physical, cognitive, and socio-emotional domains interact symbiotically; a lag in one domain impacts others.
3. **Heredity & Environment (Nature vs Nurture):**
   - **Nature (Heredity / ਜੈਨੇਟਿਕਸ):** Static biological framework provided at conception (genotype, physical appearance, reflex templates).
   - **Nurture (Environment / ਵਾਤਾਵਰਨ):** Dynamic physical, socio-cultural, and emotional surroundings (nutrition, schooling, peer culture).
   - **Woodworth's Formula:** $\\text{Development} = \\text{Heredity} \\times \\text{Environment}$ (multiplicative interaction, not additive).

---

### [Level I: Intermediate — Piaget, Vygotsky, Kohlberg & Inclusive Education]
1. **Jean Piaget’s Cognitive Constructivism (4 Stages):**
   - **Core Mechanisms:** **Schema** (mental representation/building block), **Assimilation** (fitting new information into existing schema), **Accommodation** (altering existing schemas or creating new ones in response to novel stimuli), **Equilibration** (cognitive equilibrium $\\leftrightarrow$ disequilibrium).
   - **Stage 1: Sensorimotor (0–2 years):** Sensory exploration, motor actions; **Object Permanence (ਵਸਤੂ ਸਥਿਰਤਾ)** achieved around 8–12 months; goal-directed behaviour.
   - **Stage 2: Pre-operational (2–7 years):** Symbolic thought, language acquisition; characterized by **Egocentrism** (inability to perceive other perspectives; 3-Mountain task), **Centration** (focusing on one attribute), **Lack of Conservation** (volume/number), **Irreversibility** ($2+3=5$ but unable to reverse to $5-3=2$), and **Animism** (giving life to inanimate objects).
   - **Stage 3: Concrete Operational (7–11 years):** Logical reasoning on concrete objects; **Conservation** (mass, volume, area), **Reversibility**, **Decentration**, **Seriation**, and **Classification** fully mastered.
   - **Stage 4: Formal Operational (11+ years / Adolescence):** Abstract, hypothetical, and propositional logic; **Hypothetico-Deductive Reasoning**; systematic testing of variables.
2. **Lev Vygotsky’s Sociocultural Theory:**
   - Social constructivism: Cognitive skills are co-constructed through social interaction within culture. Language is the primary psychological tool.
   - **3 Stages of Speech:** Social speech (age 2, external communication) $\\to$ **Private speech (age 3–7, self-talk for self-regulation and cognitive planning)** $\\to$ Inner speech (age 7+, silent verbal thinking).
   - **Zone of Proximal Development (ZPD / ਨੇੜਲੇ ਵਿਕਾਸ ਦਾ ਖੇਤਰ):** The gap between what a child can do independently and what they can achieve with guidance.
   - **Scaffolding (ਸਕੈਫੋਲਡਿੰਗ / ਪਾੜ):** Temporary support (hints, prompts, breaking tasks) provided by a **More Knowledgeable Other (MKO)**, systematically faded as competence rises. (Term coined by Jerome Bruner, rooted in Vygotsky's theory).
3. **Lawrence Kohlberg’s Moral Development:**
   - **Level 1: Pre-conventional Morality (Ages 4–10):** Stage 1 (Punishment and Obedience Orientation) & Stage 2 (Individualism and Instrumental Exchange / Tit-for-Tat).
   - **Level 2: Conventional Morality (Ages 10–13):** Stage 3 ("Good Boy / Nice Girl" Interpersonal Conformity) & Stage 4 (Law and Order / Social-System Maintenance).
   - **Level 3: Post-conventional Morality (Adolescence & Adulthood):** Stage 5 (Social Contract and Individual Rights) & Stage 6 (Universal Ethical Principles).
   - **Carol Gilligan’s Critique:** Kohlberg's sample was exclusively male; neglected female ethic of care and relationship responsibility in favor of male justice-rights orientation.
4. **Inclusive Education & Learning Disabilities (RPwD Act 2016):**
   - **Inclusive Philosophy:** Regular classrooms adapt to diverse learner needs without segregation or labeling.
   - **Dyslexia (ਡਿਸਲੈਕਸੀਆ):** Reading disability; phonological decoding deficit, letter reversals ($b \\leftrightarrow d, \\text{was} \\leftrightarrow \\text{saw}$). Accommodations: extra time, multisensory phonics, audiobooks.
   - **Dysgraphia (ਡਿਸਗ੍ਰਾਫੀਆ):** Writing impairment affecting motor coordination, hand grip, spatial alignment, and letter size. Accommodations: speech-to-text, oral exams, pencil grips.
   - **Dyscalculia (ਡਿਸਕੈਲਕੁਲੀਆ):** Math disability; difficulty processing numerical magnitude, mathematical symbols, clock reading. Accommodations: manipulatives (abacus, base-10 blocks), graph paper.
   - **ADHD (ਧਿਆਨ ਦੀ ਕਮੀ ਅਤੇ ਅਤਿ-ਸਰਗਰਮੀ):** Inattention, impulsivity, physical restlessness. Class strategy: short structured tasks, movement breaks, minimal visual distractions.

---

### [Level A: Advanced — Assessment Paradigms, NEP 2020 & RTE Act 2009]
1. **Continuous and Comprehensive Evaluation (CCE) & Assessment Types:**
   - **Continuous:** Regular diagnostic evaluation throughout the academic year.
   - **Comprehensive:** Covers **Scholastic** (academic subjects, cognitive domain) and **Co-scholastic** (life skills, attitudes, values, sports, arts).
   - **Assessment Paradigms:**
     | Paradigm | Focus | Primary Goal | Timing |
     |---|---|---|---|
     | **Assessment OF Learning (ਸਿੱਖਣ ਦਾ ਮੁਲਾਂਕਣ)** | Summative | Certification, grading, benchmarking | Terminal (end of term/unit) |
     | **Assessment FOR Learning (ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ)** | Formative / Diagnostic | Timely feedback, pedagogical adaptation, remediation | Ongoing during instruction |
     | **Assessment AS Learning (ਸਿੱਖਣ ਦੇ ਰੂਪ ਵਜੋਂ)** | Metacognitive | Self-assessment, peer-assessment, reflective goal-setting | Continuous student self-monitoring |
   - **Formative Tools:** **Anecdotal Record** (factual narrative recording of specific student behavior incidents), **Portfolio** (cumulative purposeful showcase of student work over time), Rubrics, Observation Checklists.
2. **National Education Policy (NEP) 2020 Key Directives:**
   - Pedagogical structure shifted from $10+2$ to **$5+3+3+4$**:
     - **Foundational Stage (5 yrs: ages 3–8):** Anganwadi/Balvatika (3 yrs) + Classes 1–2 (2 yrs) — play-based learning.
     - **Preparatory Stage (3 yrs: ages 8–11):** Classes 3–5 — experiential and interactive discovery.
     - **Middle Stage (3 yrs: ages 11–14):** Classes 6–8 — subject-oriented experiential learning, coding, vocational crafts.
     - **Secondary Stage (4 yrs: ages 14–18):** Classes 9–12 — multidisciplinary flexibility, critical thinking.
   - **Foundational Literacy & Numeracy (FLN):** Highest national priority by Grade 3 under **NIPUN Bharat**.
   - **Medium of Instruction:** Home language / mother tongue / regional language (Punjabi) at least up to Grade 5 (preferably Grade 8).
   - **PARAKH (ਪਰਖ):** National assessment center for holistic 360-degree multidimensional progress cards.
3. **Right to Education (RTE) Act 2009 Statutory Provisions:**
   - **Article 21A:** Free and compulsory education for all children aged **6 to 14 years**.
   - **Section 12(1)(c):** Mandates minimum **25% reservation** for economically weaker sections (EWS) and disadvantaged groups in entry-level private unaided schools.
   - **Pupil-Teacher Ratio (PTR):** Primary (Classes 1–5) = **30:1**; Upper Primary (Classes 6–8) = **35:1**.
   - **Working Days & Hours:**
     - Primary: minimum **200 days / 800 instructional hours** per academic year.
     - Upper Primary: minimum **220 days / 1,000 instructional hours** per academic year.
     - Teacher working hours: minimum **45 hours per week** (including preparation hours).
   - **Section 17:** Absolute ban on **corporal punishment and mental harassment** (criminal liability).
   - **Section 21:** School Management Committee (SMC) must comprise at least **75% parents/guardians**, with **50% women representation**.
   - **Section 28:** Strictly prohibits private tuition by teachers.`,

            pa: `### [Level B: Basic — ਵਾਧਾ, ਵਿਕਾਸ ਅਤੇ ਵਿਕਾਸ ਦੇ ਬੁਨਿਆਦੀ ਸਿਧਾਂਤ]
1. **ਵਾਧਾ ਬਨਾਮ ਵਿਕਾਸ (Growth vs Development):**
   - **ਵਾਧਾ (Growth):** ਮਾਤਰਾਤਮਕ (Quantitative) ਅਤੇ ਸਰੀਰਕ ਹੁੰਦਾ ਹੈ (ਜਿਵੇਂ ਕੱਦ, ਭਾਰ, ਸਰੀਰਕ ਅੰਗਾਂ ਦਾ ਵਧਣਾ)। ਇਹ ਸੈੱਲਾਂ ਦੀ ਵੰਡ ਕਾਰਨ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਸ ਨੂੰ ਇਕਾਈਆਂ (ਸੈਂਟੀਮੀਟਰ, ਕਿਲੋਗ੍ਰਾਮ) ਵਿੱਚ ਸਿੱਧਾ ਮਾਪਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਸਰੀਰਕ ਪਰਿਪੱਕਤਾ ਆਉਣ ਤੇ ਵਾਧਾ ਰੁਕ ਜਾਂਦਾ ਹੈ।
   - **ਵਿਕਾਸ (Development):** ਗੁਣਾਤਮਕ (Qualitative) ਅਤੇ ਮਾਤਰਾਤਮਕ ਦੋਵੇਂ ਹੁੰਦਾ ਹੈ। ਇਹ ਜੀਵਨ ਭਰ ਚੱਲਣ ਵਾਲੀ ਨਿਰੰਤਰ ਪ੍ਰਕਿਰਿਆ ਹੈ ਜੋ **ਗਰਭ ਤੋਂ ਕਬਰ ਤੱਕ (Womb to Tomb)** ਚੱਲਦੀ ਹੈ। ਇਸ ਵਿੱਚ ਸਰੀਰਕ, ਬੌਧਿਕ, ਸਮਾਜਿਕ, ਭਾਵਨਾਤਮਕ ਅਤੇ ਨੈਤਿਕ ਸਾਰੇ ਪੱਖ ਸ਼ਾਮਲ ਹਨ।
2. **ਵਿਕਾਸ ਦੇ ਮੁੱਖ ਸਿਧਾਂਤ:**
   - **ਸਿਰ ਤੋਂ ਪੈਰ ਵੱਲ ਦਾ ਸਿਧਾਂਤ (Cephalocaudal Trend):** ਵਿਕਾਸ ਸਿਰ ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਪੈਰਾਂ ਵੱਲ ਵਧਦਾ ਹੈ। ਨਵਜੰਮਿਆ ਬੱਚਾ ਪਹਿਲਾਂ ਸਿਰ ਅਤੇ ਧੌਣ ਸੰਭਾਲਣਾ ਸਿੱਖਦਾ ਹੈ, ਫਿਰ ਧੜ ਅਤੇ ਅੰਤ ਵਿੱਚ ਲੱਤਾਂ ਤੇ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ।
   - **ਕੇਂਦਰ ਤੋਂ ਬਾਹਰ ਵੱਲ ਦਾ ਸਿਧਾਂਤ (Proximodistal Trend):** ਵਿਕਾਸ ਸਰੀਰ ਦੇ ਕੇਂਦਰ (ਰੀੜ੍ਹ ਦੀ ਹੱਡੀ/ਧੜ) ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਬਾਹਰਲੀਆਂ ਸ਼ਾਖਾਵਾਂ ਵੱਲ ਜਾਂਦਾ ਹੈ। ਪਹਿਲਾਂ ਬਾਹਾਂ ਤੇ ਕੰਟਰੋਲ ਹੁੰਦਾ ਹੈ ਅਤੇ ਫਿਰ ਉਂਗਲਾਂ ਨਾਲ ਬਾਰੀਕ ਕੰਮ ਕਰਨ ਦੀ ਸਮਰੱਥਾ ਆਉਂਦੀ ਹੈ।
   - **ਨਿਰੰਤਰਤਾ ਦਾ ਸਿਧਾਂਤ (Principle of Continuity):** ਵਿਕਾਸ ਕਦੇ ਨਾ ਰੁਕਣ ਵਾਲੀ ਲਗਾਤਾਰ ਪ੍ਰਕਿਰਿਆ ਹੈ।
   - **ਵਿਅਕਤੀਗਤ ਵਿਭਿੰਨਤਾਵਾਂ ਦਾ ਸਿਧਾਂਤ (Individual Differences):** ਹਰ ਬੱਚੇ ਦੇ ਵਿਕਾਸ ਦੀ ਗਤੀ ਵੱਖਰੀ ਹੁੰਦੀ ਹੈ।
   - **ਅੰਤਰ-ਸੰਬੰਧ ਦਾ ਸਿਧਾਂਤ (Interrelation):** ਵਿਕਾਸ ਦੇ ਸਾਰੇ ਪੱਖ (ਸਰੀਰਕ, ਮਾਨਸਿਕ, ਭਾਵਨਾਤਮਕ) ਆਪਸ ਵਿੱਚ ਜੁੜੇ ਹੋਏ ਹਨ।
3. **ਵਿਰਾਸਤ ਅਤੇ ਵਾਤਾਵਰਨ (Nature vs Nurture):**
   - **ਵਿਰਾਸਤ (Heredity/Nature):** ਜੀਵ-ਵਿਗਿਆਨਕ ਅਤੇ ਜੈਨੇਟਿਕ ਸੰਰਚਨਾ ਜੋ ਬੱਚੇ ਨੂੰ ਮਾਪਿਆਂ ਤੋਂ ਮਿਲਦੀ ਹੈ।
   - **ਵਾਤਾਵਰਨ (Environment/Nurture):** ਆਲਾ-ਦੁਆਲਾ, ਖ਼ੁਰਾਕ, ਸਕੂਲ, ਪਰਿਵਾਰ ਅਤੇ ਸਮਾਜ।
   - **ਵੁੱਡਵਰਥ (Woodworth) ਦਾ ਨਿਯਮ:** $\\text{ਵਿਕਾਸ} = \\text{ਵਿਰਾਸਤ} \\times \\text{ਵਾਤਾਵਰਨ}$ (ਦੋਵਾਂ ਦਾ ਗੁਣਨਫਲ)।

---

### [Level I: Intermediate — ਪਿਆਜੇ, ਵਾਈਗੋਤਸਕੀ, ਕੋਹਲਬਰਗ ਅਤੇ ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ]
1. **ਜੀਨ ਪਿਆਜੇ ਦਾ ਸੰਗਿਆਨਾਤਮਕ ਵਿਕਾਸ ਸਿਧਾਂਤ (4 ਪੜਾਅ):**
   - **ਮੁੱਖ ਸੰਕਲਪ:** ਸਕੀਮਾ (Schema — ਗਿਆਨ ਦੀ ਮਾਨਸਿਕ ਇਕਾਈ), ਆਤਮਸਾਤਕਰਨ (Assimilation — ਨਵੇਂ ਗਿਆਨ ਨੂੰ ਪੁਰਾਣੇ ਸਕੀਮਾ ਵਿੱਚ ਜੋੜਨਾ), ਸਮਾਯੋਜਨ (Accommodation — ਨਵੇਂ ਅਨੁਭਵ ਅਨੁਸਾਰ ਸਕੀਮਾ ਬਦਲਣਾ), ਸੰਤੁਲਨ (Equilibration)।
   - **ਪਹਿਲਾ ਪੜਾਅ: ਇੰਦਰੀ-ਗਿਆਨਕ ਪੜਾਅ (Sensorimotor: 0–2 ਸਾਲ):** ਗਿਆਨ ਇੰਦਰੀਆਂ ਅਤੇ ਗਤੀਵਿਧੀਆਂ ਰਾਹੀਂ ਸਿੱਖਣਾ; **ਵਸਤੂ ਸਥਿਰਤਾ (Object Permanence)** ਦਾ ਵਿਕਾਸ (8–12 ਮਹੀਨੇ)।
   - **ਦੂਜਾ ਪੜਾਅ: ਪੂਰਵ-ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ (Pre-operational: 2–7 ਸਾਲ):** ਪ੍ਰਤੀਕਾਤਮਕ ਸੋਚ; **ਅਹੰ-ਕੇਂਦਰਿਤ ਚਿੰਤਨ (Egocentrism)**, ਕੇਂਦਰੀਕਰਨ (Centration), ਅਪਲਟਾਵੀ ਸੋਚ (Irreversibility), ਜੀਵਵਾਦ (Animism) ਅਤੇ ਸੰਰਖਿਆ/ਸੰਭਾਲ (Conservation) ਦੀ ਘਾਟ।
   - **ਤੀਜਾ ਪੜਾਅ: ਮੂਰਤ ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ (Concrete Operational: 7–11 ਸਾਲ):** ਠੋਸ ਵਸਤੂਆਂ ਤੇ ਤਰਕ; **ਸੰਰਖਿਆ (Conservation)**, ਪਲਟਾਵੀ ਸੋਚ (Reversibility), ਵਿਕੇਂਦਰੀਕਰਨ, ਵਰਗੀਕਰਨ ਅਤੇ ਲੜੀਬੱਧਤਾ ਦੀ ਸਮਰੱਥਾ।
   - **ਚੌਥਾ ਪੜਾਅ: ਅਮੂਰਤ ਸੰਕਿਰਿਆਤਮਕ ਪੜਾਅ (Formal Operational: 11+ ਸਾਲ):** ਅਮੂਰਤ ਚਿੰਤਨ, ਪਰਿਕਲਪਨਾਤਮਕ-ਨਿਗਮਨਾਤਮਕ ਤਰਕ (Hypothetico-Deductive Reasoning)।
2. **ਲੈਵ ਵਾਈਗੋਤਸਕੀ ਦਾ ਸਮਾਜਿਕ-ਸੱਭਿਆਚਾਰਕ ਸਿਧਾਂਤ:**
   - ਬੱਚਾ ਸਮਾਜਿਕ ਗੱਲਬਾਤ ਰਾਹੀਂ ਗਿਆਨ ਦੀ ਸਿਰਜਣਾ ਕਰਦਾ ਹੈ। ਭਾਸ਼ਾ ਸੋਚ ਦਾ ਮੁੱਖ ਸੰਦ ਹੈ।
   - ਭਾਸ਼ਾ ਦੇ 3 ਰੂਪ: ਸਮਾਜਿਕ ਭਾਸ਼ਾ (2 ਸਾਲ) $\\to$ **ਨਿੱਜੀ ਭਾਸ਼ਣ (Private Speech — 3 ਤੋਂ 7 ਸਾਲ, ਸਵੈ-ਨਿਰਦੇਸ਼ਨ ਲਈ)** $\\to$ ਅੰਦਰੂਨੀ ਭਾਸ਼ਣ (Inner Speech — 7+ ਸਾਲ)।
   - **ਸਮੀਪਸਥ ਵਿਕਾਸ ਦਾ ਖੇਤਰ (ZPD):** ਬੱਚੇ ਦੇ ਆਪਣੇ ਆਪ ਕਰਨ ਦੀ ਯੋਗਤਾ ਅਤੇ ਕਿਸੇ ਮਾਹਿਰ ਦੀ ਮਦਦ ਨਾਲ ਕਰਨ ਵਿਚਕਾਰਲਾ ਪਾੜਾ।
   - **ਸਕੈਫੋਲਡਿੰਗ (Scaffolding / ਪਾੜ):** ਕਿਸੇ ਮਾਹਿਰ (MKO) ਵੱਲੋਂ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਆਰਜ਼ੀ ਸਹਾਇਤਾ (ਇਸ਼ਾਰੇ, ਸੁਝਾਅ)।
3. **ਲਾਰੈਂਸ ਕੋਹਲਬਰਗ ਦਾ ਨੈਤਿਕ ਵਿਕਾਸ ਸਿਧਾਂਤ (3 ਪੱਧਰ, 6 ਪੜਾਅ):**
   - **ਪੂਰਵ-ਰਵਾਇਤੀ ਪੱਧਰ (Pre-conventional: 4–10 ਸਾਲ):** ਪੜਾਅ 1 (ਸਜ਼ਾ ਅਤੇ ਆਗਿਆਪਾਲਣ) ਅਤੇ ਪੜਾਅ 2 (ਸੁਆਰਥੀ ਅਦਲਾ-ਬਦਲੀ / ਜੈਸੇ ਕੋ ਤੈਸਾ)।
   - **ਰਵਾਇਤੀ ਪੱਧਰ (Conventional: 10–13 ਸਾਲ):** ਪੜਾਅ 3 (ਚੰਗਾ ਲੜਕਾ/ਚੰਗੀ ਲੜਕੀ ਬਣਨ ਦੀ ਇੱਛਾ) ਅਤੇ ਪੜਾਅ 4 (ਕਾਨੂੰਨ ਅਤੇ ਸਮਾਜਿਕ ਵਿਵਸਥਾ ਦੀ ਪਾਲਣਾ)।
   - **ਉੱਤਰ-ਰਵਾਇਤੀ ਪੱਧਰ (Post-conventional: ਕਿਸ਼ੋਰ/ਬਾਲਗ):** ਪੜਾਅ 5 (ਸਮਾਜਿਕ ਇਕਰਾਰਨਾਮਾ) ਅਤੇ ਪੜਾਅ 6 (ਸਰਵ-ਵਿਆਪੀ ਨੈਤਿਕ ਸਿਧਾਂਤ)।
   - **ਕੈਰੋਲ ਗਿਲੀਗਨ (Carol Gilligan) ਦੀ ਆਲੋਚਨਾ:** ਕੋਹਲਬਰਗ ਦਾ ਸਿਧਾਂਤ ਮਰਦ-ਕੇਂਦਰਿਤ ਨਿਆਂ ਤੇ ਆਧਾਰਿਤ ਹੈ, ਇਸ ਵਿੱਚ ਔਰਤਾਂ ਦੀ ਦੇਖਭਾਲ (Care) ਅਤੇ ਰਿਸ਼ਤਿਆਂ ਦੀ ਨੈਤਿਕਤਾ ਨੂੰ ਨਜ਼ਰਅੰਦਾਜ਼ ਕੀਤਾ ਗਿਆ।
4. **ਸਮਾਵੇਸ਼ੀ ਸਿੱਖਿਆ ਅਤੇ ਸਿੱਖਣ ਅਸਮਰੱਥਾਵਾਂ (RPwD Act 2016):**
   - **ਡਿਸਲੈਕਸੀਆ (Dyslexia):** ਪੜ੍ਹਨ ਦੀ ਅਸਮਰੱਥਾ, ਸ਼ਬਦਾਂ/ਅੱਖਰਾਂ ਨੂੰ ਉਲਟਾ ਪੜ੍ਹਨਾ ($b \\leftrightarrow d, \\text{saw} \\leftrightarrow \\text{was}$)।
   - **ਡਿਸਗ੍ਰਾਫੀਆ (Dysgraphia):** ਲਿਖਣ ਦੀ ਅਸਮਰੱਥਾ, ਪੈਨਸਿਲ ਪਕੜ ਅਤੇ ਅੱਖਰਾਂ ਦੀ ਬਣਤਰ ਵਿੱਚ ਕਮਜ਼ੋਰੀ।
   - **ਡਿਸਕੈਲਕੁਲੀਆ (Dyscalculia):** ਗਣਿਤਕ ਸੰਕਲਪਾਂ ਅਤੇ ਗਣਨਾ ਵਿੱਚ ਕਠਿਨਾਈ।
   - **ADHD:** ਧਿਆਨ ਨਾ ਟਿਕਣਾ, ਅਤਿ-ਸਰਗਰਮੀ ਅਤੇ ਬੇਚੈਨੀ।

---

### [Level A: Advanced — CCE ਮੁਲਾਂਕਣ, NEP 2020 ਅਤੇ RTE ਐਕਟ 2009]
1. **ਨਿਰੰਤਰ ਅਤੇ ਵਿਆਪਕ ਮੁਲਾਂਕਣ (CCE):**
   - **ਸਿੱਖਣ ਦਾ ਮੁਲਾਂਕਣ (Assessment OF Learning):** ਸੰਕਲਨਾਤਮਕ (Summative), ਸੈਸ਼ਨ ਦੇ ਅੰਤ ਵਿੱਚ ਗ੍ਰੇਡ ਜਾਂ ਸਰਟੀਫਿਕੇਟ ਦੇਣ ਲਈ।
   - **ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ (Assessment FOR Learning):** ਰਚਨਾਤਮਕ (Formative), ਪੜ੍ਹਾਉਣ ਦੌਰਾਨ ਸੁਧਾਰ ਅਤੇ ਫੀਡਬੈਕ ਲਈ।
   - **ਸਿੱਖਣ ਦੇ ਰੂਪ ਵਜੋਂ ਮੁਲਾਂਕਣ (Assessment AS Learning):** ਸਵੈ-ਮੁਲਾਂਕਣ (Self-assessment), ਬੱਚਾ ਖ਼ੁਦ ਆਪਣੀ ਸਿੱਖਣ ਪ੍ਰਕਿਰਿਆ ਦੀ ਨਿਗਰਾਨੀ ਕਰਦਾ ਹੈ।
   - ਮੁੱਖ ਸੰਦ: **ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ (Anecdotal Record)**, **ਪੋਰਟਫੋਲੀਓ (Portfolio)**, ਰੂਬਰਿਕਸ (Rubrics)।
2. **ਰਾਸ਼ਟਰੀ ਸਿੱਖਿਆ ਨੀਤੀ (NEP) 2020:**
   - ਪਾਠਕ੍ਰਮ ਦਾ ਨਵਾਂ ਢਾਂਚਾ: **$5+3+3+4$** (ਮੁੱਢਲਾ ਪੜਾਅ 5 ਸਾਲ, ਤਿਆਰੀ ਪੜਾਅ 3 ਸਾਲ, ਮੱਧ ਪੜਾਅ 3 ਸਾਲ, ਸੈਕੰਡਰੀ ਪੜਾਅ 4 ਸਾਲ)।
   - ਕਲਾਸ 3 ਤੱਕ ਬੁਨਿਆਦੀ ਸਾਖਰਤਾ ਅਤੇ ਸੰਖਿਆ ਗਿਆਨ (**FLN - NIPUN Bharat**)।
   - ਘੱਟੋ-ਘੱਟ 5ਵੀਂ ਜਮਾਤ ਤੱਕ ਸਿੱਖਿਆ ਦਾ ਮਾਧਿਅਮ **ਮਾਤ-ਭਾਸ਼ਾ (ਪੰਜਾਬੀ)**।
   - 360-ਡਿਗਰੀ ਬਹੁ-ਪੱਖੀ ਪ੍ਰਗਤੀ ਕਾਰਡ (**PARAKH**)।
3. **ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਕਾਨੂੰਨ (RTE Act 2009):**
   - ਧਾਰਾ 21A ਅਧੀਨ **6 ਤੋਂ 14 ਸਾਲ** ਦੇ ਬੱਚਿਆਂ ਲਈ ਮੁਫ਼ਤ ਅਤੇ ਲਾਜ਼ਮੀ ਸਿੱਖਿਆ।
   - ਗ਼ੈਰ-ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਨਿੱਜੀ ਸਕੂਲਾਂ ਵਿੱਚ ਆਰਥਿਕ ਕਮਜ਼ੋਰ ਵਰਗਾਂ (EWS) ਲਈ **25% ਸੀਟਾਂ ਰਾਖਵੀਆਂ** (ਧਾਰਾ 12)।
   - ਅਧਿਆਪਕ-ਵਿਦਿਆਰਥੀ ਅਨੁਪਾਤ (PTR): ਪ੍ਰਾਇਮਰੀ ਵਿੱਚ **30:1** ਅਤੇ ਉੱਚ-ਪ੍ਰਾਇਮਰੀ ਵਿੱਚ **35:1**।
   - ਪ੍ਰਾਇਮਰੀ ਸਕੂਲ ਲਈ ਘੱਟੋ-ਘੱਟ **200 ਦਿਨ / 800 ਘੰਟੇ** ਅਤੇ ਉੱਚ-ਪ੍ਰਾਇਮਰੀ ਲਈ **220 ਦਿਨ / 1000 ਘੰਟੇ**।
   - ਅਧਿਆਪਕਾਂ ਲਈ ਹਫ਼ਤੇ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ **45 ਘੰਟੇ ਕੰਮ**।
   - ਧਾਰਾ 17 ਅਧੀਨ ਸਰੀਰਕ ਸਜ਼ਾ ਅਤੇ ਮਾਨਸਿਕ ਤਸ਼ੱਦਦ ਦੀ ਮੁਕੰਮਲ ਮਨਾਹੀ।
   - ਸਕੂਲ ਪ੍ਰਬੰਧਕ ਕਮੇਟੀ (SMC) ਵਿੱਚ **75% ਮਾਪੇ** ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ ਅਤੇ **50% ਔਰਤਾਂ** ਹੋਣੀਆਂ ਲਾਜ਼ਮੀ ਹਨ।`,

            hi: `### [Level B: Basic — वृद्धि, विकास एवं विकास के आधारभूत सिद्धांत]
1. **वृद्धि बनाम विकास (Growth vs Development):**
   - **वृद्धि (Growth):** मात्रात्मक (Quantitative) एवं शारीरिक परिवर्तन है (लंबाई, भार, शारीरिक आकार में वृद्धि)। यह कोशिकीय विभाजन का परिणाम है तथा इसे भौतिक इकाइयों (सेमी, किग्रा) में सीधे मापा जा सकता है। शारीरिक परिपक्वता (Maturity) आने पर वृद्धि रुक जाती है।
   - **विकास (Development):** गुणात्मक (Qualitative) एवं मात्रात्मक दोनों है। यह जीवनपर्यंत चलने वाली सतत प्रक्रिया है जो **गर्भ से कब्र तक (Womb to Tomb)** चलती है। इसमें शारीरिक, संज्ञानात्मक, सामाजिक, संवेगात्मक एवं नैतिक सभी पहलू सम्मिलित हैं।
2. **विकास के प्रमुख सिद्धांत:**
   - **मस्तकाधोमुखी सिद्धांत (Cephalocaudal Trend):** विकास सिर से पैर की दिशा में आगे बढ़ता है। शिशु पहले सिर और गर्दन पर नियंत्रण पाता है, फिर धड़ और अंत में पैरों पर।
   - **समीप-दूरस्थ सिद्धांत (Proximodistal Trend):** विकास शरीर के केंद्र (रीढ़/धड़) से बाहर की ओर बढ़ता है। उंगलियों के सूक्ष्म गतिक नियंत्रण से पहले बाजुओं पर नियंत्रण आता है।
   - **निरंतरता का सिद्धांत (Principle of Continuity):** विकास कभी न रुकने वाली अनवरत प्रक्रिया है।
   - **व्यक्तिगत विभिन्नता का सिद्धांत (Individual Differences):** प्रत्येक बच्चे के विकास की गति एवं प्रतिमान विशिष्ट होते हैं।
   - **परस्पर संबंध का सिद्धांत (Interrelation):** विकास के सभी आयाम एक-दूसरे को प्रभावित करते हैं।
3. **आनुवंशिकता एवं वातावरण (Nature vs Nurture):**
   - **प्रकृति (आनुवंशिकता / Nature):** गर्भाधान के समय प्राप्त स्थिर जैविक संरचना।
   - **पोषण (वातावरण / Nurture):** भौतिक, सामाजिक, सांस्कृतिक एवं शैक्षिक परिवेश।
   - **वुडवर्थ का सूत्र:** $\\text{विकास} = \\text{आनुवंशिकता} \\times \\text{वातावरण}$ (गुणनफल, न कि योग)।

---

### [Level I: Intermediate — पियाजे, वाइगोत्स्की, कोहलबर्ग एवं समावेशी शिक्षा]
1. **जीन पियाजे का संज्ञानात्मक विकास सिद्धांत (4 अवस्थाएँ):**
   - **मूल संप्रत्यय:** स्कीमा (Schema), आत्मसातीकरण (Assimilation), समायोजन (Accommodation), साम्यीकरण (Equilibration)।
   - **संवेदी-पेशीय अवस्था (Sensorimotor: 0–2 वर्ष):** इंद्रियों द्वारा अधिगम; **वस्तु स्थायित्व (Object Permanence)** 8–12 माह में विकसित।
   - **पूर्व-संक्रियात्मक अवस्था (Pre-operational: 2–7 वर्ष):** प्रतीकात्मक चिंतन; **आत्मकेंद्रित सोच (Egocentrism)**, केंद्रीकरण (Centration), अपलटावी सोच (Irreversibility), जीववाद (Animism) एवं संरक्षण (Conservation) का अभाव।
   - **मूर्त-संक्रियात्मक अवस्था (Concrete Operational: 7–11 वर्ष):** मूर्त वस्तुओं पर तार्किक चिंतन; **संरक्षण (Conservation)**, पलटावी सोच (Reversibility), विकेंद्रीकरण, वर्गीकरण एवं श्रेणीबद्धता में दक्षता।
   - **औपचारिक-संक्रियात्मक अवस्था (Formal Operational: 11+ वर्ष):** अमूर्त चिंतन, परिकल्पनात्मक-निगमनात्मक तर्क (Hypothetico-Deductive Reasoning)।
2. **लेव वाइगोत्स्की का सामाजिक-सांस्कृतिक सिद्धांत:**
   - बालक सामाजिक अंतःक्रिया द्वारा ज्ञान का निर्माण करता है। भाषा चिंतन का प्रमुख साधन है।
   - भाषा के 3 रूप: सामाजिक वाक् (2 वर्ष) $\\to$ **निज वाक् (Private Speech — 3 से 7 वर्ष, स्व-नियमन हेतु)** $\\to$ आंतरिक वाक् (Inner Speech — 7+ वर्ष)।
   - **समीपस्थ विकास का क्षेत्र (ZPD):** बालक के स्वतंत्र कार्य स्तर और किसी कुशल वयस्क की सहायता से प्राप्त स्तर के बीच का अंतर।
   - **पाड़ / ढाँचा (Scaffolding):** वयस्क या MKO द्वारा दी जाने वाली अस्थायी सहायता। (संप्रत्यय: जेरोम ब्रूनर)।
3. **लॉरेंस कोहलबर्ग का नैतिक विकास सिद्धांत (3 स्तर, 6 अवस्थाएँ):**
   - **पूर्व-पारंपरिक स्तर (Pre-conventional: 4–10 वर्ष):** अवस्था 1 (दंड एवं आज्ञापालन) तथा अवस्था 2 (साधनात्मक सापेक्षतावादी / जैसे को तैसा)।
   - **पारंपरिक स्तर (Conventional: 10–13 वर्ष):** अवस्था 3 (अच्छा लड़का/अच्छी लड़की उन्मुखीकरण) तथा अवस्था 4 (कानून एवं व्यवस्था उन्मुखीकरण)।
   - **उत्तर-पारंपरिक स्तर (Post-conventional: किशोरावस्था/वयस्क):** अवस्था 5 (सामाजिक अनुबंध) तथा अवस्था 6 (सार्वभौमिक नैतिक सिद्धांत)।
   - **कैरोल गिलिगन (Carol Gilligan) की आलोचना:** कोहलबर्ग का सिद्धांत पुरुष-केंद्रित न्याय पर आधारित है, इसमें स्त्रियों की देखभाल (Care) की नैतिकता की उपेक्षा की गई।
4. **समावेशी शिक्षा एवं अधिगम अक्षमताएँ (RPwD Act 2016):**
   - **डिस्लेक्सिया (Dyslexia):** पठन विकार; अक्षरों को उल्टा पढ़ना ($b \\leftrightarrow d, \\text{was} \\leftrightarrow \\text{saw}$)।
   - **डिस्ग्राफिया (Dysgraphia):** लेखन विकार; खराब लिखावट, पेंसिल पकड़ने में समस्या।
   - **डिस्कैलकुलिया (Dyscalculia):** गणितीय गणना संबंधी विकार।
   - **ADHD:** अवधान न्यूनता एवं अतिसक्रियता विकार।

---

### [Level A: Advanced — CCE आकलन, NEP 2020 एवं RTE अधिनियम 2009]
1. **सतत एवं व्यापक मूल्यांकन (CCE):**
   - **अधिगम का आकलन (Assessment OF Learning):** योगात्मक (Summative), अंत में ग्रेड या अंक प्रदान करना।
   - **अधिगम के लिए आकलन (Assessment FOR Learning):** रचनात्मक (Formative), शिक्षण के दौरान प्रतिपुष्टि एवं सुधार।
   - **अधिगम के रूप में आकलन (Assessment AS Learning):** स्व-मूल्यांकन (Self-assessment), विद्यार्थी द्वारा अपनी प्रगति का स्व-नियमन।
   - प्रमुख उपकरण: **उपाख्यानात्मक अभिलेख (Anecdotal Record)**, **पोर्टफोलियो (Portfolio)**, रूब्रिक्स।
2. **राष्ट्रीय शिक्षा नीति (NEP) 2020:**
   - नया शैक्षणिक ढाँचा: **$5+3+3+4$** (बुनियादी, प्रारंभिक, मध्य, माध्यमिक)।
   - कक्षा 3 तक बुनियादी साक्षरता एवं संख्याज्ञान (**FLN - NIPUN Bharat**)।
   - कम से कम कक्षा 5 तक शिक्षा का माध्यम **मातृभाषा / क्षेत्रीय भाषा (पंजाबी)**।
   - 360-डिग्री समग्र प्रगति कार्ड (**PARAKH**)।
3. **शिक्षा का अधिकार अधिनियम (RTE Act 2009):**
   - अनुच्छेद 21A के तहत **6 से 14 वर्ष** के बच्चों हेतु निःशुल्क एवं अनिवार्य शिक्षा।
   - गैर-अनुदानित निजी विद्यालयों में EWS हेतु **25% आरक्षण** (धारा 12)।
   - छात्र-शिक्षक अनुपात (PTR): प्राथमिक में **30:1**, उच्च प्राथमिक में **35:1**।
   - कार्य दिवस: प्राथमिक हेतु न्यूनतम **200 दिन / 800 घंटे**, उच्च प्राथमिक हेतु **220 दिन / 1000 घंटे**।
   - शिक्षकों हेतु प्रति सप्ताह न्यूनतम **45 शिक्षण एवं तैयारी के घंटे**।
   - धारा 17: शारीरिक दंड एवं मानसिक प्रताड़ना पर पूर्ण प्रतिबंध।
   - SMC में कम से कम **75% अभिभावक** तथा **50% महिलाएँ** अनिवार्य।`
        },
        keyNotes: {
            en: [
                'Development follows Cephalocaudal (head to toe) and Proximodistal (center to periphery) directional trends.',
                'Development is the interactive product of Heredity and Environment: D = H × E (Woodworth).',
                'Piaget’s 4 stages: Sensorimotor (Object permanence), Pre-operational (Egocentrism, Centration, Irreversibility, Animism), Concrete Operational (Conservation, Reversibility, Seriation), Formal Operational (Hypothetico-deductive reasoning).',
                'Vygotsky’s core concepts: ZPD (gap between independent and assisted performance), Scaffolding (Bruner/Vygotsky temporary support), and Private Speech (self-regulation).',
                'Kohlberg: 3 levels (Pre-conventional, Conventional, Post-conventional) with 6 stages; Carol Gilligan criticized it for neglecting female ethic of care.',
                'Learning disabilities: Dyslexia (reading), Dysgraphia (writing), Dyscalculia (math), ADHD (attention deficit/hyperactivity). RPwD Act 2016 recognizes 21 disabilities.',
                'Assessment: Assessment OF learning = Summative; Assessment FOR learning = Formative/Diagnostic; Assessment AS learning = Self-assessment/Metacognition.',
                'NEP 2020 introduces the 5+3+3+4 structure, FLN by Grade 3 via NIPUN Bharat, and mother tongue instruction up to Grade 5.',
                'RTE Act 2009: Free & compulsory education for 6–14 years; 25% EWS reservation under Section 12(1)(c); 30:1 PTR for primary; corporal punishment banned under Section 17.'
            ],
            pa: [
                'ਵਿਕਾਸ ਸਿਰ ਤੋਂ ਪੈਰ ਵੱਲ (Cephalocaudal) ਅਤੇ ਕੇਂਦਰ ਤੋਂ ਬਾਹਰ ਵੱਲ (Proximodistal) ਨਿਸ਼ਚਿਤ ਦਿਸ਼ਾ ਵਿੱਚ ਹੁੰਦਾ ਹੈ।',
                'ਵਿਕਾਸ ਵਿਰਾਸਤ ਅਤੇ ਵਾਤਾਵਰਨ ਦਾ ਗੁਣਨਫਲ ਹੈ: ਵਿਕਾਸ = ਵਿਰਾਸਤ × ਵਾਤਾਵਰਨ (ਵੁੱਡਵਰਥ)।',
                'ਪਿਆਜੇ ਦੇ 4 ਪੜਾਅ: ਇੰਦਰੀ-ਗਿਆਨਕ (ਵਸਤੂ ਸਥਿਰਤਾ), ਪੂਰਵ-ਸੰਕਿਰਿਆਤਮਕ (ਅਹੰ-ਕੇਂਦਰਿਤ ਸੋਚ, ਸੰਰਖਿਆ ਦੀ ਘਾਟ), ਮੂਰਤ ਸੰਕਿਰਿਆਤਮਕ (ਸੰਰਖਿਆ, ਪਲਟਾਵੀ ਸੋਚ), ਅਮੂਰਤ ਸੰਕਿਰਿਆਤਮਕ (ਪਰਿਕਲਪਨਾਤਮਕ ਤਰਕ)।',
                'ਵਾਈਗੋਤਸਕੀ ਦੇ ਮੁੱਖ ਸੰਕਲਪ: ZPD (ਸਮੀਪਸਥ ਵਿਕਾਸ ਦਾ ਖੇਤਰ), ਸਕੈਫੋਲਡਿੰਗ (ਆਰਜ਼ੀ ਸਹਾਇਤਾ) ਅਤੇ ਨਿੱਜੀ ਭਾਸ਼ਣ (ਸਵੈ-ਨਿਯਮਨ)।',
                'ਕੋਹਲਬਰਗ ਦੇ 3 ਪੱਧਰ ਅਤੇ 6 ਪੜਾਅ ਹਨ; ਕੈਰੋਲ ਗਿਲੀਗਨ ਨੇ ਇਸ ਨੂੰ ਮਰਦ-ਪੱਖੀ ਨਿਆਂ ਸਿਧਾਂਤ ਕਹਿ ਕੇ ਆਲੋਚਨਾ ਕੀਤੀ।',
                'ਅਧਿਗਮ ਅਸਮਰੱਥਾਵਾਂ: ਡਿਸਲੈਕਸੀਆ (ਪੜ੍ਹਨ ਸੰਬੰਧੀ), ਡਿਸਗ੍ਰਾਫੀਆ (ਲਿਖਣ ਸੰਬੰਧੀ), ਡਿਸਕੈਲਕੁਲੀਆ (ਗਣਿਤ ਸੰਬੰਧੀ)। RPwD ਐਕਟ 2016 ਵਿੱਚ 21 ਅਸਮਰੱਥਾਵਾਂ ਸ਼ਾਮਲ ਹਨ।',
                'ਮੁਲਾਂਕਣ: ਸਿੱਖਣ ਦਾ ਮੁਲਾਂਕਣ = ਸੰਕਲਨਾਤਮਕ (Summative); ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ = ਰਚਨਾਤਮਕ (Formative); ਸਿੱਖਣ ਦੇ ਰੂਪ ਵਜੋਂ = ਸਵੈ-ਮੁਲਾਂਕਣ (Self-assessment)।',
                'NEP 2020 ਵਿੱਚ 5+3+3+4 ਢਾਂਚਾ, ਨਿਪੁੰਨ ਭਾਰਤ ਰਾਹੀਂ ਕਲਾਸ 3 ਤੱਕ FLN ਅਤੇ 5ਵੀਂ ਤੱਕ ਮਾਤ-ਭਾਸ਼ਾ ਮਾਧਿਅਮ ਨਿਰਧਾਰਿਤ ਹੈ।',
                'RTE ਐਕਟ 2009: 6 ਤੋਂ 14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਮੁਫ਼ਤ ਸਿੱਖਿਆ; ਧਾਰਾ 12 ਅਧੀਨ 25% EWS ਰਾਖਵਾਂਕਰਨ; ਪ੍ਰਾਇਮਰੀ PTR 30:1; ਧਾਰਾ 17 ਅਧੀਨ ਸਰੀਰਕ ਸਜ਼ਾ ਤੇ ਪਾਬੰਦੀ।'
            ],
            hi: [
                'विकास मस्तकाधोमुखी (सिर से पैर) तथा समीप-दूरस्थ (केंद्र से परिधि) दिशा का अनुसरण करता है।',
                'विकास आनुवंशिकता और पर्यावरण की परस्पर अंतःक्रिया का परिणाम है: D = H × E (वुडवर्थ)।',
                'पियाजे की 4 अवस्थाएँ: संवेदी-पेशीय (वस्तु स्थायित्व), पूर्व-संक्रियात्मक (आत्मकेंद्रित चिंतन, संरक्षण का अभाव), मूर्त संक्रियात्मक (संरक्षण, पलटावी सोच), औपचारिक संक्रियात्मक (परिकल्पनात्मक तर्क)।',
                'वाइगोत्स्की के सिद्धांत: ZPD (समीपस्थ विकास का क्षेत्र), पाड़/स्कैफोल्डिंग (अस्थायी सहयोग) तथा निज वाक् (स्व-नियमन)।',
                'कोहलबर्ग के 3 स्तर और 6 अवस्थाएँ; कैरोल गिलिगन ने इसे पुरुष-उन्मुख न्याय बताकर देखभाल की नैतिकता पर बल दिया।',
                'अधिगम अक्षमताएँ: डिस्लेक्सिया (पठन), डिस्ग्राफिया (लेखन), डिस्कैलकुलिया (गणना)। RPwD अधिनियम 2016 में 21 अक्षमताएँ शामिल हैं।',
                'आकलन: सीखने का आकलन = योगात्मक; सीखने के लिए आकलन = रचनात्मक; सीखने के रूप में आकलन = स्व-आकलन।',
                'NEP 2020: 5+3+3+4 ढाँचा, निपुण भारत द्वारा कक्षा 3 तक FLN तथा कक्षा 5 तक मातृभाषा माध्यम।',
                'RTE अधिनियम 2009: 6 से 14 वर्ष हेतु निःशुल्क शिक्षा; धारा 12 के तहत 25% EWS आरक्षण; प्राथमिक PTR 30:1; धारा 17 द्वारा शारीरिक दंड निषिद्ध।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Direction of Development: Cephalocaudal = Head to Toe; Proximodistal = Center to Outward.',
                'Piaget Stages & Milestones: Sensorimotor (Object Permanence) | Pre-operational (Egocentrism, Animism, No Conservation) | Concrete (Conservation, Reversibility, Seriation) | Formal (Abstract & Hypothetico-Deductive).',
                'Vygotsky Formula: Actual Ability + Scaffolding (MKO) = Potential Ability within ZPD.',
                'Vygotsky Speech: Social (2y) -> Private (3-7y, self-guidance) -> Inner (7y+).',
                'Kohlberg Levels: Pre-conventional (Punishment/Exchange) -> Conventional (Good Boy/Law & Order) -> Post-conventional (Social Contract/Universal Ethics).',
                'Disability Quick Map: Reading = Dyslexia; Writing = Dysgraphia; Calculation = Dyscalculia; Motor Planning = Dyspraxia.',
                'Assessment Types: FOR = Formative/Diagnostic; OF = Summative/Grading; AS = Self/Peer Reflection.',
                'NEP 2020 Formula: 5 (3y Pre-school + Gr 1-2) + 3 (Gr 3-5) + 3 (Gr 6-8) + 4 (Gr 9-12).',
                'RTE 2009 Metrics: 6-14 yrs; 25% EWS; PTR 30:1 (Primary), 35:1 (Upper Primary); 200 days/800 hrs (Primary), 220 days/1000 hrs (Upper Primary); 45 hrs/week teacher workload.'
            ],
            pa: [
                'ਵਿਕਾਸ ਦੀ ਦਿਸ਼ਾ: ਸਿਰ ਤੋਂ ਪੈਰ ਵੱਲ (Cephalocaudal); ਕੇਂਦਰ ਤੋਂ ਬਾਹਰ ਵੱਲ (Proximodistal)।',
                'ਪਿਆਜੇ ਦੇ ਪੜਾਅ: ਇੰਦਰੀ-ਗਿਆਨਕ (ਵਸਤੂ ਸਥਿਰਤਾ) | ਪੂਰਵ-ਸੰਕਿਰਿਆਤਮਕ (ਅਹੰ-ਕੇਂਦਰਿਤ, ਜੀਵਵਾਦ) | ਮੂਰਤ (ਸੰਰਖਿਆ, ਪਲਟਾਵੀ ਸੋਚ) | ਅਮੂਰਤ (ਪਰਿਕਲਪਨਾਤਮਕ ਤਰਕ)।',
                'ਵਾਈਗੋਤਸਕੀ ਸੂਤਰ: ਸੁਤੰਤਰ ਯੋਗਤਾ + ਸਕੈਫੋਲਡਿੰਗ (MKO) = ZPD ਵਿੱਚ ਸੰਭਾਵੀ ਪ੍ਰਾਪਤੀ।',
                'ਵਾਈਗੋਤਸਕੀ ਭਾਸ਼ਣ: ਸਮਾਜਿਕ (2 ਸਾਲ) -> ਨਿੱਜੀ (3-7 ਸਾਲ, ਸਵੈ-ਸੇਧ) -> ਅੰਦਰੂਨੀ (7+ ਸਾਲ)।',
                'ਕੋਹਲਬਰਗ ਪੱਧਰ: ਪੂਰਵ-ਰਵਾਇਤੀ (ਸਜ਼ਾ/ਸੁਆਰਥ) -> ਰਵਾਇਤੀ (ਚੰਗਾ ਲੜਕਾ/ਕਾਨੂੰਨ) -> ਉੱਤਰ-ਰਵਾਇਤੀ (ਸਮਾਜਿਕ ਇਕਰਾਰ/ਨੈਤਿਕ ਸਿਧਾਂਤ)।',
                'ਅਸਮਰੱਥਾ ਚਾਰਟ: ਪੜ੍ਹਨਾ = ਡਿਸਲੈਕਸੀਆ; ਲਿਖਣਾ = ਡਿਸਗ੍ਰਾਫੀਆ; ਗਣਨਾ = ਡਿਸਕੈਲਕੁਲੀਆ; ਤਾਲਮੇਲ = ਡਿਸਪ੍ਰੈਕਸੀਆ।',
                'ਮੁਲਾਂਕਣ: ਸਿੱਖਣ ਲਈ = ਰਚਨਾਤਮਕ; ਸਿੱਖਣ ਦਾ = ਸੰਕਲਨਾਤਮਕ; ਸਿੱਖਣ ਦੇ ਰੂਪ ਵਜੋਂ = ਸਵੈ-ਮੁਲਾਂਕਣ।',
                'NEP 2020: 5 (ਆਂਗਣਵਾੜੀ + 1-2) + 3 (3-5) + 3 (6-8) + 4 (9-12)।',
                'RTE 2009: 6-14 ਸਾਲ; 25% EWS; PTR 30:1 (ਪ੍ਰਾਇਮਰੀ), 35:1 (ਉੱਚ-ਪ੍ਰਾਇਮਰੀ); 200 ਦਿਨ/800 ਘੰਟੇ; ਹਫ਼ਤੇ ਦੇ 45 ਘੰਟੇ।'
            ],
            hi: [
                'विकास की दिशा: मस्तकाधोमुखी = सिर से पैर; समीप-दूरस्थ = केंद्र से परिधि।',
                'पियाजे अवस्थाएँ: संवेदी-पेशीय (वस्तु स्थायित्व) | पूर्व-संक्रियात्मक (आत्मकेंद्रित, जीववाद) | मूर्त (संरक्षण, पलटावी) | औपचारिक (अमूर्त परिकल्पना)।',
                'वाइगोत्स्की सूत्र: वास्तविक क्षमता + पाड़/Scaffolding (MKO) = ZPD में संभावित क्षमता।',
                'वाइगोत्स्की वाक्: सामाजिक (2 वर्ष) -> निज वाक् (3-7 वर्ष, स्व-नियमन) -> आंतरिक (7+ वर्ष)।',
                'कोहलबर्ग स्तर: पूर्व-पारंपरिक (दंड/विनिमय) -> पारंपरिक (अच्छा लड़का/कानून व्यवस्था) -> उत्तर-पारंपरिक (सामाजिक अनुबंध/सार्वभौमिक मूल्य)।',
                'अक्षमता मानचित्र: पठन = डिस्लेक्सिया; लेखन = डिस्ग्राफिया; गणना = डिस्कैलकुलिया; गति-समन्वय = डिस्प्रेक्सिया।',
                'आकलन: सीखने के लिए = रचनात्मक; सीखने का = योगात्मक; सीखने के रूप में = स्व-आकलन।',
                'NEP 2020: 5 (आंगनवाड़ी + 1-2) + 3 (3-5) + 3 (6-8) + 4 (9-12)।',
                'RTE 2009: 6-14 वर्ष; 25% EWS; PTR 30:1 (प्राथमिक), 35:1 (उच्च प्राथमिक); 200 दिन/800 घंटे; 45 घंटे प्रति सप्ताह कार्य।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Vygotsky considered private speech to be an immature sign of egocentrism that must be suppressed. Correction: Vygotsky proved that private speech is a vital tool for self-regulation and cognitive planning that later internalizes into inner speech.',
                'Misconception: Assessment FOR learning and Assessment OF learning are identical evaluation exercises done at different times. Correction: Assessment FOR learning is diagnostic and formative to alter real-time teaching-learning, whereas Assessment OF learning is summative, evaluating final achievement for grading.',
                'Misconception: RTE Act 2009 allows mild physical reprimands if parental consent is provided. Correction: Section 17 of RTE Act 2009 imposes an absolute and unconditional ban on corporal punishment and mental harassment under all circumstances.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਵਾਈਗੋਤਸਕੀ ਨਿੱਜੀ ਭਾਸ਼ਣ (Private speech) ਨੂੰ ਅਹੰ-ਕੇਂਦਰਿਤ ਸੋਚ ਦਾ ਕੱਚਾ ਰੂਪ ਮੰਨਦਾ ਸੀ ਜਿਸ ਨੂੰ ਰੋਕਣਾ ਚਾਹੀਦਾ ਹੈ। ਸੁਧਾਰ: ਵਾਈਗੋਤਸਕੀ ਮੁਤਾਬਕ ਨਿੱਜੀ ਭਾਸ਼ਣ ਬੱਚੇ ਦੇ ਸਵੈ-ਨਿਯਮਨ ਅਤੇ ਸੋਚ ਦੀ ਯੋਜਨਾਬੰਦੀ ਦਾ ਸਭ ਤੋਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਸਾਧਨ ਹੈ ਜੋ ਬਾਅਦ ਵਿੱਚ ਅੰਦਰੂਨੀ ਸੋਚ ਬਣਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ (Assessment for learning) ਅਤੇ ਸਿੱਖਣ ਦਾ ਮੁਲਾਂਕਣ (Assessment of learning) ਇੱਕੋ ਜਿਹੇ ਹੁੰਦੇ ਹਨ। ਸੁਧਾਰ: ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ ਨਿਦਾਨਾਤਮਕ ਅਤੇ ਰਚਨਾਤਮਕ ਹੁੰਦਾ ਹੈ ਜੋ ਪੜ੍ਹਾਉਂਦੇ ਸਮੇਂ ਕਮੀਆਂ ਦੂਰ ਕਰਨ ਲਈ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਜਦਕਿ ਸਿੱਖਣ ਦਾ ਮੁਲਾਂਕਣ ਸੈਸ਼ਨ ਦੇ ਅੰਤ ਵਿੱਚ ਗ੍ਰੇਡ ਦੇਣ ਲਈ ਹੁੰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: RTE ਐਕਟ 2009 ਅਧੀਨ ਜੇ ਮਾਪੇ ਆਗਿਆ ਦੇਣ ਤਾਂ ਅਧਿਆਪਕ ਬੱਚੇ ਨੂੰ ਹਲਕੀ ਸਰੀਰਕ ਸਜ਼ਾ ਦੇ ਸਕਦਾ ਹੈ। ਸੁਧਾਰ: RTE ਐਕਟ 2009 ਦੀ ਧਾਰਾ 17 ਅਧੀਨ ਕਿਸੇ ਵੀ ਹਾਲਤ ਵਿੱਚ ਸਰੀਰਕ ਸਜ਼ਾ ਅਤੇ ਮਾਨਸਿਕ ਤਸ਼ੱਦਦ ਦੀ ਮੁਕੰਮਲ ਮਨਾਹੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: वाइगोत्स्की निज वाक् (Private speech) को आत्मकेंद्रित अपरिपक्वता मानते थे जिसे रोका जाना चाहिए। सुधार: वाइगोत्स्की के अनुसार निज वाक् स्व-नियमन एवं चिंतन के मार्गदर्शन का महत्वपूर्ण साधन है जो आगे चलकर आंतरिक वाक् में बदल जाता है।',
                'भ्रांति: अधिगम के लिए आकलन और अधिगम का आकलन केवल समय के अंतर वाले एक जैसे परीक्षण हैं। सुधार: अधिगम के लिए आकलन शिक्षण के दौरान सुधारात्मक प्रतिपुष्टि हेतु होता है, जबकि अधिगम का आकलन सत्रांत में उपलब्धि के प्रमाणीकरण हेतु योगात्मक होता है।',
                'भ्रांति: RTE 2009 के तहत अभिभावकों की सहमति से शिक्षक अनुशासनात्मक हल्की सजा दे सकता है। सुधार: RTE अधिनियम 2009 की धारा 17 के तहत किसी भी परिस्थिति में शारीरिक दंड व मानसिक प्रताड़ना पर पूर्ण प्रतिबंध है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'In a Class 3 inclusive classroom, Simran (age 8) can independently add two-digit numbers without regrouping. However, when faced with regrouping (carrying over), she struggles. When the teacher gives her base-10 blocks and asks "What happens when you have ten ones in the unit column?", Simran discovers the regrouping step and successfully completes the problem. In Vygotskian pedagogy, what are the role of the teacher, the blocks, and the task difficulty range?',
                    pa: 'ਤੀਜੀ ਜਮਾਤ ਦੀ ਸਮਾਵੇਸ਼ੀ ਕਲਾਸ ਵਿੱਚ ਸਿਮਰਨ (8 ਸਾਲ) ਬਿਨਾਂ ਹਾਸਲ ਤੋਂ ਦੋ-ਅੰਕੀ ਜੋੜ ਆਪਣੇ ਆਪ ਕਰ ਲੈਂਦੀ ਹੈ। ਪਰ ਹਾਸਲ ਵਾਲੇ ਸਵਾਲਾਂ ਵਿੱਚ ਉਹ ਅਟਕ ਜਾਂਦੀ ਹੈ। ਅਧਿਆਪਕ ਉਸ ਨੂੰ ਬੇਸ-10 ਬਲਾਕ ਦਿੰਦਾ ਹੈ ਅਤੇ ਪੁੱਛਦਾ ਹੈ: "ਜਦੋਂ ਇਕਾਈ ਵਿੱਚ 10 ਬਲਾਕ ਹੋ ਜਾਣ ਤਾਂ ਕੀ ਬਣਦਾ ਹੈ?", ਤਾਂ ਸਿਮਰਨ ਹਾਸਲ ਦਾ ਨਿਯਮ ਸਮਝ ਕੇ ਸਵਾਲ ਹੱਲ ਕਰ ਲੈਂਦੀ ਹੈ। ਵਾਈਗੋਤਸਕੀ ਮੁਤਾਬਕ ਅਧਿਆਪਕ ਦਾ ਕੰਮ, ਬਲਾਕ ਅਤੇ ਇਹ ਸਿੱਖਣ ਖੇਤਰ ਕੀ ਅਖਵਾਉਂਦੇ ਹਨ?',
                    hi: 'कक्षा 3 के समावेशी कक्ष में सिमरन (8 वर्ष) बिना हासिल वाले दो-अंकीय जोड़ स्वयं कर लेती है। परंतु हासिल वाले प्रश्नों में वह अटकती है। शिक्षक उसे बेस-10 ब्लॉक देकर पूछता है कि "इकाई खाने में 10 ब्लॉक होने पर क्या बनेगा?", जिससे वह नियम समझकर प्रश्न हल कर लेती है। वाइगोत्स्की के अनुसार शिक्षक की भूमिका, ब्लॉक और यह दायरा क्या कहलाते हैं?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Identify Simran’s actual developmental level: Solving two-digit addition without regrouping independently.',
                        'Step 2: Identify the task within her Zone of Proximal Development (ZPD): Solving addition with regrouping, which she cannot do alone but accomplishes with structured assistance.',
                        'Step 3: Define the teacher’s prompt and manipulatives: The base-10 blocks and guiding question serve as Scaffolding provided by a More Knowledgeable Other (MKO).'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਸਿਮਰਨ ਦਾ ਸੁਤੰਤਰ ਪੱਧਰ: ਬਿਨਾਂ ਹਾਸਲ ਤੋਂ ਦੋ-ਅੰਕੀ ਜੋੜ ਕਰਨਾ।',
                        'ਕਦਮ 2: ਉਸ ਦਾ ਸਮੀਪਸਥ ਵਿਕਾਸ ਦਾ ਖੇਤਰ (ZPD): ਹਾਸਲ ਵਾਲਾ ਜੋੜ, ਜੋ ਉਹ ਆਪਣੇ ਆਪ ਨਹੀਂ ਕਰ ਸਕਦੀ ਸੀ ਪਰ ਮਦਦ ਨਾਲ ਕਰ ਲੈਂਦੀ ਹੈ।',
                        'ਕਦਮ 3: ਅਧਿਆਪਕ ਦੇ ਇਸ਼ਾਰੇ ਅਤੇ ਬਲਾਕ: ਇਹ ਇੱਕ ਮਾਹਿਰ (MKO) ਵੱਲੋਂ ਦਿੱਤੀ ਗਈ ਆਰਜ਼ੀ ਸਹਾਇਤਾ ਜਾਂ ਸਕੈਫੋਲਡਿੰਗ (Scaffolding) ਹਨ।'
                    ],
                    hi: [
                        'चरण 1: सिमरन का स्वतंत्र स्तर: बिना हासिल का जोड़ हल करना।',
                        'चरण 2: उसका ZPD (समीपस्थ विकास का क्षेत्र): हासिल वाला जोड़, जिसे वह सहायता से हल कर सकती है।',
                        'चरण 3: शिक्षक का प्रश्न व बेस-10 ब्लॉक: यह MKO द्वारा दी गई पाड़ / ढाँचा (Scaffolding) है।'
                    ]
                },
                finalAnswer: {
                    en: 'Teacher = MKO; Base-10 Blocks & Prompts = Scaffolding; Regrouping Addition = Task within Simran’s ZPD.',
                    pa: 'ਅਧਿਆਪਕ = MKO (ਮਾਹਿਰ); ਬਲਾਕ ਤੇ ਪ੍ਰਸ਼ਨ = ਸਕੈਫੋਲਡਿੰਗ (ਪਾੜ); ਹਾਸਲ ਵਾਲਾ ਜੋੜ = ਸਿਮਰਨ ਦੇ ZPD ਖੇਤਰ ਵਿੱਚ।',
                    hi: 'शिक्षक = MKO; ब्लॉक व संकेत = पाड़ (Scaffolding); हासिल वाला जोड़ = सिमरन के ZPD के अंतर्गत।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-cdp-1',
                question: {
                    en: 'What is the developmental difference between Cephalocaudal and Proximodistal growth patterns?',
                    pa: 'ਸਿਰ ਤੋਂ ਪੈਰ ਵੱਲ (Cephalocaudal) ਅਤੇ ਕੇਂਦਰ ਤੋਂ ਬਾਹਰ ਵੱਲ (Proximodistal) ਵਿਕਾਸ ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?',
                    hi: 'मस्तकाधोमुखी (Cephalocaudal) तथा समीप-दूरस्थ (Proximodistal) विकास प्रतिमानों में क्या अंतर है?'
                },
                answer: {
                    en: 'Cephalocaudal develops longitudinally from head to toe; Proximodistal develops from the central body core/trunk outward to extremities and fingers.',
                    pa: 'Cephalocaudal ਸਿਰ ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਪੈਰਾਂ ਵੱਲ ਵਧਦਾ ਹੈ; Proximodistal ਸਰੀਰ ਦੇ ਕੇਂਦਰ (ਰੀੜ੍ਹ/ਧੜ) ਤੋਂ ਬਾਹਰ ਬਾਹਾਂ ਅਤੇ ਉਂਗਲਾਂ ਵੱਲ ਵਧਦਾ ਹੈ।',
                    hi: 'मस्तकाधोमुखी सिर से पैर की दिशा में होता है; समीप-दूरस्थ शरीर के केंद्र (रीढ़/धड़) से बाहर उंगलियों की दिशा में होता है।'
                }
            },
            {
                id: 'fc-cdp-2',
                question: {
                    en: 'At what Piagetian stage does a child acquire Object Permanence and what does it signify?',
                    pa: 'ਪਿਆਜੇ ਦੇ ਕਿਸ ਪੜਾਅ ਵਿੱਚ ਬੱਚਾ ਵਸਤੂ ਸਥਿਰਤਾ (Object Permanence) ਹਾਸਲ ਕਰਦਾ ਹੈ ਅਤੇ ਇਸ ਦਾ ਕੀ ਅਰਥ ਹੈ?',
                    hi: 'पियाजे की किस अवस्था में बालक वस्तु स्थायित्व (Object Permanence) प्राप्त करता है और इसका क्या अर्थ है?'
                },
                answer: {
                    en: 'Sensorimotor stage (around 8–12 months). It signifies the child understands objects continue to exist even when hidden from sight.',
                    pa: 'ਇੰਦਰੀ-ਗਿਆਨਕ ਪੜਾਅ (8-12 ਮਹੀਨੇ)। ਇਸ ਦਾ ਅਰਥ ਹੈ ਕਿ ਅੱਖਾਂ ਤੋਂ ਓਹਲੇ ਹੋਣ ਤੇ ਵੀ ਵਸਤੂ ਦੀ ਹੋਂਦ ਕਾਇਮ ਰਹਿੰਦੀ ਹੈ।',
                    hi: 'संवेदी-पेशीय अवस्था (8-12 माह)। इसका अर्थ है कि दृष्टि से ओझल होने पर भी वस्तु का अस्तित्व बना रहता है।'
                }
            },
            {
                id: 'fc-cdp-3',
                question: {
                    en: 'What is the crucial pedagogical distinction between Assessment FOR Learning and Assessment OF Learning?',
                    pa: 'ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ (Assessment FOR learning) ਅਤੇ ਸਿੱਖਣ ਦੇ ਮੁਲਾਂਕਣ (Assessment OF learning) ਵਿੱਚ ਕੀ ਮੁੱਖ ਅੰਤਰ ਹੈ?',
                    hi: 'अधिगम के लिए आकलन (Assessment FOR learning) एवं अधिगम के आकलन (Assessment OF learning) में क्या मुख्य अंतर है?'
                },
                answer: {
                    en: 'Assessment FOR learning is formative and diagnostic during instruction to guide remediation; Assessment OF learning is summative at term-end to grade achievement.',
                    pa: 'ਸਿੱਖਣ ਲਈ ਮੁਲਾਂਕਣ ਅਧਿਆਪਨ ਦੌਰਾਨ ਸੁਧਾਰ ਅਤੇ ਫੀਡਬੈਕ ਲਈ ਹੁੰਦਾ ਹੈ (Formative); ਸਿੱਖਣ ਦਾ ਮੁਲਾਂਕਣ ਅੰਤ ਵਿੱਚ ਗ੍ਰੇਡ ਦੇਣ ਲਈ ਹੁੰਦਾ ਹੈ (Summative)।',
                    hi: 'अधिगम के लिए आकलन शिक्षण के दौरान सुधारात्मक प्रतिपुष्टि हेतु रचनात्मक है; अधिगम का आकलन सत्रांत में उपलब्धि प्रमाणीकरण हेतु योगात्मक है।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. PUNJABI BHASHA SIKHIA (pstet-punjabi-pedagogy)
    // =========================================================================
    {
        topicId: 'pstet-punjabi-pedagogy',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 15,
            editorialNote: 'Comprehensive trilingual blueprint for PSTET Paper 1 & 2 Punjabi Language Pedagogy (ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਿਆ): Mother tongue teaching principles, 4 Language Skills (LSRW), Poetry/Prose/Grammar methodologies (Agaman vs Nigaman), Diagnostic Testing & Remedial Teaching, and TLM in authentic Gurmukhi.'
        },
        bookRefs: [
            {
                title: 'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਅਧਿਆਪਨ (Teaching of Punjabi)',
                author: 'ਡਾ. ਇੰਦਰਦੇਵ ਸਿੰਘ ਨੰਦਰਾ / ਡਾ. ਜਸਵੰਤ ਸਿੰਘ ਜੱਸ',
                chapter: 'ਮਾਤ-ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਦੇ ਸਿਧਾਂਤ, ਭਾਸ਼ਾਈ ਕੌਸ਼ਲ, ਵਿਆਕਰਨ ਤੇ ਸਾਹਿਤ ਅਧਿਆਪਨ ਵਿਧੀਆਂ',
                relevance: 'Standard text for B.Ed & D.El.Ed Punjabi pedagogy prescribed in Punjab universities.'
            },
            {
                title: 'ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਅਧਿਆਪਨ ਵਿਧੀਆਂ (Modern Punjabi Pedagogy)',
                author: 'ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ (PSEB) / SCERT ਪੰਜਾਬ',
                chapter: 'ਭਾਸ਼ਾਈ ਕੌਸ਼ਲਾਂ ਦਾ ਵਿਕਾਸ, ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ ਅਤੇ ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ',
                relevance: 'Official teacher handbook for PSEB primary and upper-primary Punjabi teachers.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Principles of Mother Tongue Pedagogy]
1. **Significance of Mother Tongue (ਮਾਤ-ਭਾਸ਼ਾ ਦਾ ਮਹੱਤਵ):**
   - Mother tongue is the natural vehicle of child thought and identity. Rabindranath Tagore termed mother tongue as "mother's milk for mental growth".
   - UNESCO, NCF 2005, and NEP 2020 mandate early foundational education exclusively in the child's mother tongue (Punjabi in Punjab).
2. **Core Principles of Teaching Punjabi:**
   - **Principle of Naturalness (ਸੁਭਾਵਿਕਤਾ ਦਾ ਸਿਧਾਂਤ):** Language is acquired naturally through listening and immersion before formal literacy.
   - **Principle of Motivation & Interest (ਪ੍ਰੇਰਨਾ ਅਤੇ ਰੁਚੀ ਦਾ ਸਿਧਾਂਤ):** Using stories, games, rhymes, and cultural folklore to ignite active participation.
   - **Principle of Activity / Learning by Doing (ਕਿਰਿਆਸ਼ੀਲਤਾ ਦਾ ਸਿਧਾਂਤ):** Engaging pupils in role-play, recitation, storytelling, and debates.
   - **Principle of Individual Differences (ਵਿਅਕਤੀਗਤ ਵਿਭਿੰਨਤਾਵਾਂ):** Catering to varied paces of linguistic learning and phonological development.
   - **Priority of Oral Work (ਮੌਖਿਕ ਕਾਰਜ ਦੀ ਪ੍ਰਾਥਮਿਕਤਾ):** Ample oral communication practice precedes formal written symbols.
   - **Principle of Repetition & Practice (ਅਭਿਆਸ ਅਤੇ ਦੁਹਰਾਈ ਦਾ ਸਿਧਾਂਤ):** Reinforcing phonemes, vocabulary, and tonal pronunciation patterns.

---

### [Level I: Intermediate — The 4 Language Skills (LSRW) in Punjabi]
1. **LSRW Skill Hierarchy:**
   - Natural order: **ਸੁਣਨਾ (Listening) $\\to$ ਬੋਲਣਾ (Speaking) $\\to$ ਪੜ੍ਹਨਾ (Reading) $\\to$ ਲਿਖਣਾ (Writing)**.
   - Receptive Skills (ਗ੍ਰਹਿਣਆਤਮਕ ਕੌਸ਼ਲ): Listening & Reading.
   - Productive/Expressive Skills (ਉਤਪਾਦਕ/ਪ੍ਰਗਟਾਓ ਕੌਸ਼ਲ): Speaking & Writing.
2. **ਸੁਣਨਾ ਕੌਸ਼ਲ (Listening Skill — ਸ਼੍ਰਵਣ):**
   - Foundation of all language development. Auditory discrimination of Punjabi phonemes (especially tones and nasal sounds: \`ਙ, ਞ, ਣ, ਨ, ਮ\` and \`ਂ, ੰ, ੱ\`).
   - Active comprehension: understanding the speaker's emotional tone, intent, and message.
3. **ਬੋਲਣਾ ਕੌਸ਼ਲ (Speaking Skill — ਮੌਖਿਕ ਪ੍ਰਗਟਾਓ):**
   - Accurate tonal pronunciation (ਉੱਚੀ, ਨੀਵੀਂ, ਪੱਧਰੀ ਸੁਰ), rhythm, intonation, and stress. Overcoming stage fright.
   - Activities: Bal-sabha, kavita-ucharan (poem recitation), debate, group conversation.
4. **ਪੜ੍ਹਨਾ ਕੌਸ਼ਲ (Reading Skill — ਵਾਚਨ ਕੌਸ਼ਲ):**
   - Recognizing Gurmukhi script letters and decoding meaning.
   - **ਉੱਚੀ ਪਾਠ (Loud Reading):** Primary stage focus; eradicates hesitation, corrects pronunciation errors, teaches correct modulation.
   - **ਮੌਨ ਪਾਠ (Silent Reading):** Middle and higher stages; reading without moving lips or vocal cords; fosters speed, deep comprehension, concentration, and saves energy.
   - **ਸੂਖਮ ਪਾਠ (Intensive Reading):** Deep analytical reading for grammatical nuances, vocabulary, and authorial theme.
   - **ਸਥੂਲ ਪਾਠ (Extensive Reading):** Rapid extensive reading for overall gist, pleasure, and habit formation (libraries, newspapers).
5. **ਲਿਖਣਾ ਕੌਸ਼ਲ (Writing Skill — ਲੇਖਨ ਕੌਸ਼ਲ):**
   - Representing ideas graphically in Gurmukhi script.
   - **ਸੁਲੇਖ (Calligraphy):** Beautiful, proportioned handwriting.
   - **ਅਨੁਲੇਖ (Copying):** Transcribing textbook or blackboard lines to learn letter formation.
   - **ਸ਼ਰੁਤੀਲੇਖ (Dictation / ਇਮਲਾ):** Listening and transcribing rapidly; supreme tool for auditing and eliminating spelling errors (ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ).

---

### [Level A: Advanced — Teaching Methods, Remedial Pedagogy & TLM]
1. **Methods of Teaching Literature & Grammar:**
   - **ਕਵਿਤਾ ਸਿੱਖਿਆ (Teaching of Poetry):** Primary aim is aesthetic appreciation (**ਰਸ ਅਨੁਭਵ**), rhythm, and emotion.
     - *ਗੀਤ ਅਤੇ ਅਭਿਨੈ ਪ੍ਰਣਾਲੀ (Song & Action Method):* Best for primary grades.
     - *ਵਿਆਖਿਆ ਪ੍ਰਣਾਲੀ (Explanatory Method):* Secondary grades.
     - *ਤੁਲਨਾ ਪ੍ਰਣਾਲੀ (Comparative Method):* Senior secondary grades.
   - **ਵਾਰਤਕ ਸਿੱਖਿਆ (Teaching of Prose):** Expansion of vocabulary, logical comprehension, and critical analysis. Steps: Model reading by teacher (ਆਦਰਸ਼ ਵਾਚਨ) $\\to$ Imitation reading by pupils (ਅਨੁਕਰਨ ਵਾਚਨ) $\\to$ Word exposition (ਸ਼ਬਦਾਰਥ) $\\to$ Silent reading $\\to$ Comprehension questions (ਬੋਧ ਪ੍ਰਸ਼ਨ).
   - **ਵਿਆਕਰਨ ਸਿੱਖਿਆ (Teaching of Grammar):**
     - **ਆਗਮਨ ਪ੍ਰਣਾਲੀ (Inductive Method):** **Specific to General, Concrete to Abstract, Example to Rule (ਉਦਾਹਰਨ ਤੋਂ ਨਿਯਮ ਵੱਲ)**. Teacher presents multiple examples; students analyze, generalize, and derive the grammatical rule. Highly psychological and scientific.
     - **ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ (Deductive Method):** **Rule to Example (ਨਿਯਮ ਤੋਂ ਉਦਾਹਰਨ ਵੱਲ)**. Teacher states definition first and demands memorization, followed by examples. Unpsychological; promotes rote memorization.
     - **ਭਾਸ਼ਾ ਸੰਸਰਗ ਵਿਧੀ (Incidental / Correlation Method):** Grammar taught naturally in context while teaching prose/poetry without a separate dry grammar textbook.
2. **Diagnostic Testing & Remedial Teaching (ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ ਅਤੇ ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ):**
   - **Diagnostic Test (ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ):** Systematic assessment designed to pinpoint exact linguistic weaknesses, phonological confusion, or spelling errors (e.g. confusion between \`ਸ\` and \`ਸ਼\`, or \`ੜ\` and \`ੜ੍ਹ\`).
   - **Remedial Teaching (ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ):** Corrective individualized instruction and targeted drills implemented based on diagnostic findings to heal learning gaps.
3. **Teaching Learning Materials (TLM / ਸਿੱਖਣ ਸਹਾਇਕ ਸਮੱਗਰੀ):**
   - **ਦ੍ਰਿਸ਼ ਸਾਧਨ (Visual Aids):** Gurmukhi flashcards, word-wall charts, pictures, flanelkitaab.
   - **ਸ਼੍ਰਵਣ ਸਾਧਨ (Audio Aids):** Radio, tape recorder, linguaphone (for standard Taksali pronunciation models).
   - **ਦ੍ਰਿਸ਼-ਸ਼੍ਰਵਣ ਸਾਧਨ (Audio-Visual Aids):** Smartboards, educational videos, animated Punjabi folk stories.
   - **ਭਾਸ਼ਾ ਪ੍ਰਯੋਗਸ਼ਾਲਾ (Language Laboratory):** Dedicated multimedia lab where students listen to native pronunciation through headsets and record/compare their own speech.`,

            pa: `### [Level B: Basic — ਮਾਤ-ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਦੇ ਬੁਨਿਆਦੀ ਸਿਧਾਂਤ]
1. **ਮਾਤ-ਭਾਸ਼ਾ ਦਾ ਮਹੱਤਵ:**
   - ਮਾਤ-ਭਾਸ਼ਾ ਬੱਚੇ ਦੇ ਵਿਚਾਰਾਂ, ਭਾਵਨਾਵਾਂ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਪਛਾਣ ਦਾ ਮੂਲ ਆਧਾਰ ਹੈ। ਰਵਿੰਦਰਨਾਥ ਟੈਗੋਰ ਨੇ ਮਾਤ-ਭਾਸ਼ਾ ਨੂੰ "ਮਾਨਸਿਕ ਵਿਕਾਸ ਲਈ ਮਾਂ ਦਾ ਦੁੱਧ" ਕਿਹਾ ਹੈ।
   - UNESCO, NCF 2005 ਅਤੇ NEP 2020 ਮੁਤਾਬਕ ਮੁੱਢਲੀ ਸਿੱਖਿਆ ਕੇਵਲ ਤੇ ਕੇਵਲ ਮਾਤ-ਭਾਸ਼ਾ (ਪੰਜਾਬੀ) ਵਿੱਚ ਹੀ ਦਿੱਤੀ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ।
2. **ਪੰਜਾਬੀ ਸਿੱਖਿਆ ਦੇ ਮੁੱਖ ਸਿਧਾਂਤ:**
   - **ਸੁਭਾਵਿਕਤਾ ਦਾ ਸਿਧਾਂਤ:** ਬੱਚਾ ਭਾਸ਼ਾ ਸੁਭਾਵਿਕ ਤੌਰ ਤੇ ਸੁਣ ਕੇ ਅਤੇ ਬੋਲ ਕੇ ਗ੍ਰਹਿਣ ਕਰਦਾ ਹੈ।
   - **ਰੁਚੀ ਅਤੇ ਪ੍ਰੇਰਨਾ ਦਾ ਸਿਧਾਂਤ:** ਬਾਲ-ਗੀਤਾਂ, ਲੋਕ-ਕਹਾਣੀਆਂ ਅਤੇ ਖੇਡਾਂ ਰਾਹੀਂ ਬੱਚੇ ਦੀ ਰੁਚੀ ਜਗਾਉਣਾ।
   - **ਕਿਰਿਆਸ਼ੀਲਤਾ ਦਾ ਸਿਧਾਂਤ (ਕਰ ਕੇ ਸਿੱਖਣਾ):** ਬੱਚਿਆਂ ਨੂੰ ਨਾਟਕ, ਭਾਸ਼ਣ ਅਤੇ ਗੱਲਬਾਤ ਵਿੱਚ ਖ਼ੁਦ ਸ਼ਾਮਲ ਕਰਨਾ।
   - **ਵਿਅਕਤੀਗਤ ਵਿਭਿੰਨਤਾਵਾਂ ਦਾ ਸਿਧਾਂਤ:** ਹਰ ਬੱਚੇ ਦੀ ਭਾਸ਼ਾ ਸਿੱਖਣ ਦੀ ਗਤੀ ਵੱਖਰੀ ਹੁੰਦੀ ਹੈ।
   - **ਮੌਖਿਕ ਕਾਰਜ ਦੀ ਪ੍ਰਾਥਮਿਕਤਾ:** ਲਿਖਣ ਤੋਂ ਪਹਿਲਾਂ ਸੁਣਨ ਅਤੇ ਬੋਲਣ ਦਾ ਭਰਪੂਰ ਅਭਿਆਸ।
   - **ਅਭਿਆਸ ਅਤੇ ਦੁਹਰਾਈ ਦਾ ਸਿਧਾਂਤ:** ਸ਼ੁੱਧ ਉਚਾਰਨ ਅਤੇ ਸੁਰਾਂ ਦਾ ਵਾਰ-ਵਾਰ ਅਭਿਆਸ।

---

### [Level I: Intermediate — ਚਾਰ ਭਾਸ਼ਾਈ ਕੌਸ਼ਲ (LSRW)]
1. **ਕੌਸ਼ਲਾਂ ਦੀ ਤਰਤੀਬ:** **ਸੁਣਨਾ $\\to$ ਬੋਲਣਾ $\\to$ ਪੜ੍ਹਨਾ $\\to$ ਲਿਖਣਾ**।
   - ਗ੍ਰਹਿਣਆਤਮਕ ਕੌਸ਼ਲ: ਸੁਣਨਾ ਅਤੇ ਪੜ੍ਹਨਾ (ਵਿਚਾਰ ਗ੍ਰਹਿਣ ਕਰਨਾ)।
   - ਉਤਪਾਦਕ/ਪ੍ਰਗਟਾਓ ਕੌਸ਼ਲ: ਬੋਲਣਾ ਅਤੇ ਲਿਖਣਾ (ਵਿਚਾਰ ਪ੍ਰਗਟ ਕਰਨਾ)।
2. **ਸੁਣਨਾ ਕੌਸ਼ਲ (ਸ਼੍ਰਵਣ ਕੌਸ਼ਲ):**
   - ਸਾਰੇ ਕੌਸ਼ਲਾਂ ਦੀ ਨੀਂਹ। ਪੰਜਾਬੀ ਧੁਨੀਆਂ (ਖ਼ਾਸ ਕਰਕੇ ਨਾਸਕੀ ਧੁਨੀਆਂ \`ਙ, ਞ, ਣ, ਨ, ਮ\` ਅਤੇ ਲਗਾਖਰ \`ਂ, ੰ, ੱ\`) ਨੂੰ ਧਿਆਨ ਨਾਲ ਸੁਣ ਕੇ ਅਰਥ ਸਮਝਣਾ।
3. **ਬੋਲਣਾ ਕੌਸ਼ਲ (ਮੌਖਿਕ ਪ੍ਰਗਟਾਓ):**
   - ਸ਼ੁੱਧ ਉਚਾਰਨ, ਸੁਰਾਂ (High, Low, Level tones), ਬਲ (Stress) ਅਤੇ ਢੁਕਵੇਂ ਵਿਰਾਮ ਚਿੰਨ੍ਹਾਂ ਅਨੁਸਾਰ ਬੋਲਣਾ। ਝਿਜਕ ਦੂਰ ਕਰਨਾ।
4. **ਪੜ੍ਹਨਾ ਕੌਸ਼ਲ (ਵਾਚਨ ਕੌਸ਼ਲ):**
   - **ਉੱਚੀ ਪਾਠ (Loud Reading):** ਮੁੱਢਲੀਆਂ ਜਮਾਤਾਂ ਲਈ ਲਾਹੇਵੰਦ; ਉਚਾਰਨ ਸੁਧਾਰਨ ਅਤੇ ਝਿਜਕ ਖੋਲ੍ਹਣ ਲਈ।
   - **ਮੌਨ ਪਾਠ (Silent Reading):** ਬਿਨਾਂ ਆਵਾਜ਼ ਕੱਢੇ ਅਤੇ ਬੁੱਲ੍ਹ ਹਿਲਾਏ ਪੜ੍ਹਨਾ; ਤੇਜ਼ ਗਤੀ, ਡੂੰਘੀ ਸਮਝ ਅਤੇ ਊਰਜਾ ਦੀ ਬੱਚਤ ਲਈ ਮਿਡਲ/ਹਾਈ ਜਮਾਤਾਂ ਲਈ ਉੱਤਮ।
   - **ਸੂਖਮ ਪਾਠ (Intensive):** ਵਿਆਕਰਨ ਅਤੇ ਸ਼ਬਦਾਵਲੀ ਦੀ ਡੂੰਘੀ ਪੜ੍ਹਾਈ।
   - **ਸਥੂਲ ਪਾਠ (Extensive):** ਆਮ ਜਾਣਕਾਰੀ ਅਤੇ ਆਨੰਦ ਲਈ ਤੇਜ਼ੀ ਨਾਲ ਪੜ੍ਹਨਾ।
5. **ਲਿਖਣਾ ਕੌਸ਼ਲ (ਲੇਖਨ ਕੌਸ਼ਲ):**
   - ਵਿਚਾਰਾਂ ਨੂੰ ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਲਿਖਤੀ ਰੂਪ ਦੇਣਾ।
   - **ਸੁਲੇਖ (ਸੁੰਦਰ ਲਿਖਾਈ), ਅਨੁਲੇਖ (ਨਕਲ ਕਰਨਾ), ਸ਼ਰੁਤੀਲੇਖ/ਇਮਲਾ (ਸੁਣ ਕੇ ਲਿਖਣਾ — ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜਾਂ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ)।**

---

### [Level A: Advanced — ਅਧਿਆਪਨ ਵਿਧੀਆਂ, ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ ਅਤੇ TLM]
1. **ਸਾਹਿਤ ਅਤੇ ਵਿਆਕਰਨ ਅਧਿਆਪਨ ਵਿਧੀਆਂ:**
   - **ਕਵਿਤਾ ਸਿੱਖਿਆ:** ਮੁੱਖ ਉਦੇਸ਼ **ਰਸ ਸੁਆਦ (Aesthetic appreciation)** ਅਤੇ ਕਲਪਨਾ ਦਾ ਵਿਕਾਸ। ਗੀਤ ਤੇ ਅਭਿਨੈ ਪ੍ਰਣਾਲੀ (ਪ੍ਰਾਇਮਰੀ ਲਈ ਸਭ ਤੋਂ ਉੱਤਮ)।
   - **ਵਾਰਤਕ ਸਿੱਖਿਆ:** ਸ਼ਬਦ ਭੰਡਾਰ ਅਤੇ ਤਰਕਸ਼ੀਲ ਸਮਝ ਦਾ ਵਿਕਾਸ। ਆਦਰਸ਼ ਵਾਚਨ $\\to$ ਅਨੁਕਰਨ ਵਾਚਨ $\\to$ ਸ਼ਬਦਾਰਥ $\\to$ ਮੌਨ ਪਾਠ $\\to$ ਬੋਧ ਪ੍ਰਸ਼ਨ।
   - **ਵਿਆਕਰਨ ਸਿੱਖਿਆ:**
     - **ਆਗਮਨ ਪ੍ਰਣਾਲੀ (Inductive Method):** **ਉਦਾਹਰਨ ਤੋਂ ਨਿਯਮ ਵੱਲ (Example to Rule)**, ਸਥੂਲ ਤੋਂ ਸੂਖਮ ਵੱਲ। ਬੱਚਾ ਉਦਾਹਰਨਾਂ ਵੇਖ ਕੇ ਖ਼ੁਦ ਨਿਯਮ ਬਣਾਉਂਦਾ ਹੈ। ਇਹ ਸਭ ਤੋਂ ਉੱਤਮ, ਵਿਗਿਆਨਕ ਅਤੇ ਮਨੋਵਿਗਿਆਨਕ ਵਿਧੀ ਹੈ।
     - **ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ (Deductive Method):** **ਨਿਯਮ ਤੋਂ ਉਦਾਹਰਨ ਵੱਲ (Rule to Example)**। ਪਹਿਲਾਂ ਪਰਿਭਾਸ਼ਾ ਰਟਾਈ ਜਾਂਦੀ ਹੈ। ਇਹ ਅਮਨੋਵਿਗਿਆਨਕ ਵਿਧੀ ਹੈ।
     - **ਭਾਸ਼ਾ ਸੰਸਰਗ ਪ੍ਰਣਾਲੀ:** ਸਾਹਿਤ ਪੜ੍ਹਾਉਂਦੇ ਸਮੇਂ ਸੰਦਰਭ ਵਿੱਚ ਹੀ ਵਿਆਕਰਨ ਸਿਖਾਉਣਾ।
2. **ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ ਅਤੇ ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ:**
   - **ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ (Diagnostic Test):** ਵਿਦਿਆਰਥੀ ਦੀਆਂ ਉਚਾਰਨ ਅਤੇ ਸ਼ਬਦ-ਜੋੜਾਂ ਦੀਆਂ ਕਮਜ਼ੋਰੀਆਂ ਦਾ ਸਟੀਕ ਪਤਾ ਲਗਾਉਣਾ (ਜਿਵੇਂ 'ਸ' ਅਤੇ 'ਸ਼' ਦਾ ਭੁਲੇਖਾ)।
   - **ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ (Remedial Teaching):** ਨਿਦਾਨ ਤੋਂ ਬਾਅਦ ਵਿਸ਼ੇਸ਼ ਅਭਿਆਸ ਅਤੇ ਤਰੀਕਿਆਂ ਨਾਲ ਕਮਜ਼ੋਰੀਆਂ ਨੂੰ ਦੂਰ ਕਰਨਾ (ਇਲਾਜ ਕਰਨਾ)।
3. **ਸਿੱਖਣ ਸਹਾਇਕ ਸਮੱਗਰੀ (TLM):**
   - **ਦ੍ਰਿਸ਼ ਸਾਧਨ:** ਚਾਰਟ, ਫਲੈਸ਼ ਕਾਰਡ, ਫਲੈਨਲ ਬੋਰਡ।
   - **ਸ਼੍ਰਵਣ ਸਾਧਨ:** ਰੇਡੀਓ, ਟੇਪ ਰਿਕਾਰਡਰ, ਲਿੰਗਵਾਫੋਨ (ਮਿਆਰੀ ਉਚਾਰਨ ਲਈ)।
   - **ਦ੍ਰਿਸ਼-ਸ਼੍ਰਵਣ ਸਾਧਨ:** ਸਮਾਰਟ ਬੋਰਡ, ਵੀਡੀਓ, ਐਨੀਮੇਸ਼ਨ।
   - **ਭਾਸ਼ਾ ਪ੍ਰਯੋਗਸ਼ਾਲਾ (Language Lab):** ਸ਼ੁੱਧ ਧੁਨੀ ਤੇ ਸੁਰ ਅਭਿਆਸ ਲਈ ਆਧੁਨਿਕ ਲੈਬ।`,

            hi: `### [Level B: Basic — मातृभाषा शिक्षण के आधारभूत सिद्धांत]
1. **मातृभाषा का महत्व:**
   - मातृभाषा बालक के चिंतन, संवेग एवं अभिव्यक्ति का स्वाभाविक माध्यम है। रवींद्रनाथ टैगोर ने मातृभाषा को "मानसिक विकास हेतु माता का दुग्ध" कहा है।
   - UNESCO, NCF 2005 तथा NEP 2020 के अनुसार प्राथमिक शिक्षा अनिवार्य रूप से मातृभाषा (पंजाबी) में होनी चाहिए।
2. **पंजाबी भाषा शिक्षण के प्रमुख सिद्धांत:**
   - **स्वाभाविकता का सिद्धांत:** बालक भाषा प्राकृतिक परिवेश में सुनकर और बोलकर सरलता से सीखता है।
   - **रुचि एवं प्रेरणा का सिद्धांत:** बालगीत, खेल तथा लोक-कथाओं द्वारा सीखने की रुचि जाग्रत करना।
   - **क्रियाशीलता का सिद्धांत (करके सीखना):** नाटक, संवाद एवं भाषण में बालकों को सक्रिय करना।
   - **व्यक्तिगत विभिन्नता का सिद्धांत:** प्रत्येक बालक की भाषा सीखने की गति विशिष्ट होती है।
   - **मौखिक कार्य की प्राथमिकता:** लिखित कार्य से पूर्व पर्याप्त मौखिक अभ्यास आवश्यक है।
   - **अभ्यास एवं पुनरावृत्ति का सिद्धांत:** शुद्ध उच्चारण एवं सुरों का निरंतर अभ्यास।

---

### [Level I: Intermediate — चार भाषाई कौशल (LSRW)]
1. **कौशलों का स्वाभाविक क्रम:** **सुनना $\\to$ बोलना $\\to$ पढ़ना $\\to$ लिखना**।
   - ग्रहणात्मक कौशल: सुनना एवं पढ़ना (विचार ग्रहण करना)।
   - उत्पादात्मक कौशल: बोलना एवं लिखना (विचार अभिव्यक्त करना)।
2. **सुनना कौशल (श्रवण):**
   - समस्त कौशलों का आधार। पंजाबी ध्वनियों, सुरों एवं नासिक्य व्यंजनों (\`ਙ, ਞ, ਣ, ਨ, ਮ\` व \`ਂ, ੰ, ੱ\`) का ध्यानपूर्वक श्रवण व अर्थ ग्रहण।
3. **बोलना कौशल (मौखिक अभिव्यक्ति):**
   - शुद्ध उच्चारण, सुर (Tones), बलाघात एवं विराम चिह्नों का समुचित प्रयोग। संकोच दूर करना।
4. **पढ़ना कौशल (वाचन कौशल):**
   - **सस्वर वाचन (Loud Reading):** प्राथमिक कक्षाओं हेतु अनिवार्य; उच्चारण दोष दूर करने व झिझक मिटाने हेतु।
   - **मौन वाचन (Silent Reading):** बिना आवाज किए एवं होंठ हिलाए पढ़ना; तीव्र गति, गंभीर अर्थबोध एवं ऊर्जा संरक्षण हेतु उच्च कक्षाओं के लिए श्रेष्ठ।
   - **गहन पठन (Intensive):** व्याकरण एवं शब्द-भंडार का सूक्ष्म अध्ययन।
   - **द्रुत/विस्तृत पठन (Extensive):** सामान्य जानकारी व आनंद हेतु तीव्र गति से पढ़ना।
5. **लिखना कौशल (लेखन कौशल):**
   - विचारों को गुरुमुखी लिपि में लिपिबद्ध करना।
   - **सुलेख (सुंदर लिखावट), अनुलेख (देखकर नकल करना), श्रुतलेख (इमला — वर्तनी शुद्धि हेतु सर्वोत्तम)।**

---

### [Level A: Advanced — शिक्षण विधियाँ, उपचारात्मक शिक्षण एवं TLM]
1. **साहित्य एवं व्याकरण शिक्षण की विधियाँ:**
   - **कविता शिक्षण:** मुख्य उद्देश्य **रसानुभूति (Aesthetic appreciation)** एवं कल्पना का विकास। प्राथमिक हेतु गीत व अभिनय प्रणाली सर्वश्रेष्ठ।
   - **गद्य शिक्षण:** शब्द-भंडार एवं तार्किक समझ का विस्तार। आदर्श वाचन $\\to$ अनुकरण वाचन $\\to$ शब्दार्थ $\\to$ मौन वाचन $\\to$ बोध प्रश्न।
   - **व्याकरण शिक्षण:**
     - **आगमन प्रणाली (Inductive Method):** **उदाहरण से नियम की ओर (Example to Rule)**। बालक उदाहरणों का विश्लेषण कर स्वयं नियम निकालता है। यह सर्वाधिक मनोवैज्ञानिक एवं वैज्ञानिक विधि है।
     - **निगमन प्रणाली (Deductive Method):** **नियम से उदाहरण की ओर (Rule to Example)**। पहले परिभाषा रटाई जाती है; यह अमनोवैज्ञानिक है।
     - **भाषा संसर्ग प्रणाली:** पाठ पढ़ाते समय प्रसंगवश व्याकरण सिखाना।
2. **निदानात्मक परीक्षण एवं उपचारात्मक शिक्षण:**
   - **निदानात्मक परीक्षण (Diagnostic Test):** छात्र के उच्चारण एवं वर्तनी की विशिष्ट त्रुटियों की पहचान करना (उदा. 'ਸ' और 'ਸ਼' में अंतर)।
   - **उपचारात्मक शिक्षण (Remedial Teaching):** निदानोपरांत विशिष्ट विधियों द्वारा छात्र की कमजोरियों का निवारण करना।
3. **शिक्षण सहायक सामग्री (TLM):**
   - **दृश्य साधन:** चार्ट, फ़्लैश कार्ड, फ़्लैनेल बोर्ड।
   - **श्रव्य साधन:** रेडियो, टेप रिकॉर्डर, लिंग्वाफोन (आदर्श उच्चारण हेतु)।
   - **दृश्य-श्रव्य साधन:** स्मार्ट बोर्ड, वीडियो, वृत्तचित्र।
   - **भाषा प्रयोगशाला (Language Lab):** मानक उच्चारण व सुर अभ्यास हेतु आधुनिक साधन।`
        },
        keyNotes: {
            en: [
                'Mother tongue education is universally recognized as the foundational right of every child (UNESCO, NCF 2005, NEP 2020).',
                'Natural order of language skills: LSRW (Listening -> Speaking -> Reading -> Writing). Receptive = Listening & Reading; Productive = Speaking & Writing.',
                'Loud reading (ਉੱਚੀ ਪਾਠ) is ideal for the primary stage to build phonetic confidence and correct pronunciation; Silent reading (ਮੌਨ ਪਾਠ) is best for upper-primary for speed, comprehension, and energy conservation.',
                'Dictation (ਸ਼ਰੁਤੀਲੇਖ / ਇਮਲਾ) is the most effective pedagogical exercise for diagnosing and eliminating spelling errors (ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ).',
                'Teaching of poetry (ਕਵਿਤਾ ਸਿੱਖਿਆ) primarily aims at aesthetic appreciation (ਰਸ ਸੁਆਦ) and imaginative development; Song and Action method is best for primary children.',
                'Inductive Method (ਆਗਮਨ ਪ੍ਰਣਾਲੀ: Example to Rule) is scientific and child-centred; Deductive Method (ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ: Rule to Example) is teacher-centred and encourages rote learning.',
                'Diagnostic testing (ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ) identifies specific learner deficits; Remedial teaching (ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ) provides targeted clinical remediation.',
                'Audio aids like Linguaphone and Language Labs are vital in Punjab for modeling standard Taksali tonal phonology.'
            ],
            pa: [
                'ਮਾਤ-ਭਾਸ਼ਾ ਸਿੱਖਿਆ ਬੱਚੇ ਦਾ ਬੁਨਿਆਦੀ ਹੱਕ ਹੈ (UNESCO, NCF 2005, NEP 2020)।',
                'ਭਾਸ਼ਾਈ ਕੌਸ਼ਲਾਂ ਦੀ ਕੁਦਰਤੀ ਤਰਤੀਬ: ਸੁਣਨਾ -> ਬੋਲਣਾ -> ਪੜ੍ਹਨਾ -> ਲਿਖਣਾ। ਗ੍ਰਹਿਣਆਤਮਕ = ਸੁਣਨਾ ਤੇ ਪੜ੍ਹਨਾ; ਉਤਪਾਦਕ = ਬੋਲਣਾ ਤੇ ਲਿਖਣਾ।',
                'ਉੱਚੀ ਪਾਠ ਪ੍ਰਾਇਮਰੀ ਪੱਧਰ ਤੇ ਉਚਾਰਨ ਸੁਧਾਰਨ ਲਈ ਜ਼ਰੂਰੀ ਹੈ; ਮੌਨ ਪਾਠ ਤੇਜ਼ ਗਤੀ, ਡੂੰਘੇ ਬੋਧ ਅਤੇ ਊਰਜਾ ਦੀ ਬੱਚਤ ਲਈ ਮਿਡਲ/ਹਾਈ ਲਈ ਉੱਤਮ ਹੈ।',
                'ਸ਼ਰੁਤੀਲੇਖ (ਇਮਲਾ) ਸ਼ੁੱਧ ਸ਼ਬਦ-ਜੋੜ ਸਿਖਾਉਣ ਅਤੇ ਲਿਖਤੀ ਤਰੁੱਟੀਆਂ ਦੂਰ ਕਰਨ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਸਾਧਨ ਹੈ।',
                'ਕਵਿਤਾ ਸਿੱਖਿਆ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਰਸ ਸੁਆਦ (Aesthetic appreciation) ਅਤੇ ਕਾਵਿ-ਸੁਹਜ ਦਾ ਆਨੰਦ ਮਾਣਨਾ ਹੈ।',
                'ਆਗਮਨ ਪ੍ਰਣਾਲੀ (ਉਦਾਹਰਨ ਤੋਂ ਨਿਯਮ ਵੱਲ) ਵਿਗਿਆਨਕ ਅਤੇ ਮਨੋਵਿਗਿਆਨਕ ਹੈ; ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ (ਨਿਯਮ ਤੋਂ ਉਦਾਹਰਨ) ਰੱਟੇਬਾਜ਼ੀ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਦੀ ਹੈ।',
                'ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ ਕਮਜ਼ੋਰੀਆਂ ਦੀ ਪਛਾਣ ਕਰਦਾ ਹੈ; ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ ਉਹਨਾਂ ਕਮਜ਼ੋਰੀਆਂ ਦਾ ਨਿਵਾਰਨ (ਇਲਾਜ) ਕਰਦੀ ਹੈ।',
                'ਲਿੰਗਵਾਫੋਨ ਅਤੇ ਭਾਸ਼ਾ ਲੈਬ ਪੰਜਾਬੀ ਦੀਆਂ ਟਕਸਾਲੀ ਸੁਰਾਂ ਅਤੇ ਸ਼ੁੱਧ ਉਚਾਰਨ ਸਿਖਾਉਣ ਲਈ ਬਹੁਤ ਲਾਹੇਵੰਦ ਹਨ।'
            ],
            hi: [
                'मातृभाषा शिक्षा बालक का मूलभूत अधिकार है (UNESCO, NCF 2005, NEP 2020)।',
                'भाषा कौशलों का स्वाभाविक क्रम: सुनना -> बोलना -> पढ़ना -> लिखना। ग्रहणात्मक = सुनना व पढ़ना; उत्पादक = बोलना व लिखना।',
                'सस्वर वाचन प्राथमिक स्तर पर उच्चारण शुद्धि हेतु श्रेष्ठ है; मौन वाचन उच्च स्तर पर तीव्र गति, अर्थबोध एवं ऊर्जा संरक्षण हेतु उत्तम है।',
                'श्रुतलेख (इमला) वर्तनी शुद्धि एवं लेखन दोषों के निवारण हेतु सर्वाधिक प्रभावी साधन है।',
                'कविता शिक्षण का मुख्य उद्देश्य रसानुभूति एवं कल्पना शक्ति का विकास है।',
                'आगमन विधि (उदाहरण से नियम) मनोवैज्ञानिक व वैज्ञानिक है; निगमन विधि (नियम से उदाहरण) रटंत अधिगम को बढ़ावा देती है।',
                'निदानात्मक परीक्षण कमियों की पहचान करता है; उपचारात्मक शिक्षण उन कमियों का निवारण करता है।',
                'लिंग्वाफोन और भाषा प्रयोगशाला मानक पंजाबी उच्चारण व सुर सीखने हेतु महत्वपूर्ण श्रव्य साधन हैं।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Skill Sequence: LSRW (Listening -> Speaking -> Reading -> Writing).',
                'Receptive = L + R; Productive = S + W.',
                'Reading Modes: Loud = Primary/Pronunciation; Silent = Middle-High/Speed & Deep comprehension.',
                'Spelling Remedy: Shrutilikh (Dictation) is the #1 tool for orthographic correction.',
                'Poetry Goal: Aesthetic Pleasure (ਰਸ ਸੁਆਦ) & Imagination, NOT dry grammatical analysis.',
                'Grammar Crown Method: Inductive Method (ਆਗਮਨ ਪ੍ਰਣਾਲੀ: Example -> Rule) is superior to Deductive Method (ਨਿਗਮਨ: Rule -> Example).',
                'Clinical Cycle: Diagnostic Test (Identify error) -> Remedial Teaching (Targeted instructional cure).'
            ],
            pa: [
                'ਕੌਸ਼ਲ ਤਰਤੀਬ: ਸੁਣਨਾ -> ਬੋਲਣਾ -> ਪੜ੍ਹਨਾ -> ਲਿਖਣਾ (LSRW)।',
                'ਗ੍ਰਹਿਣਆਤਮਕ = ਸੁਣਨਾ + ਪੜ੍ਹਨਾ; ਉਤਪਾਦਕ = ਬੋਲਣਾ + ਲਿਖਣਾ।',
                'ਵਾਚਨ: ਉੱਚੀ ਪਾਠ = ਪ੍ਰਾਇਮਰੀ/ਸ਼ੁੱਧ ਉਚਾਰਨ; ਮੌਨ ਪਾਠ = ਮਿਡਲ-ਹਾਈ/ਤੇਜ਼ ਗਤੀ ਤੇ ਡੂੰਘੀ ਸਮਝ।',
                'ਸ਼ਬਦ-ਜੋੜ ਸੁਧਾਰ: ਸ਼ਰੁਤੀਲੇਖ (ਇਮਲਾ) ਸਭ ਤੋਂ ਉੱਤਮ ਸੰਦ ਹੈ।',
                'ਕਵਿਤਾ ਦਾ ਟੀਚਾ: ਰਸ ਸੁਆਦ ਤੇ ਕਲਪਨਾ, ਵਿਆਕਰਨਿਕ ਚੀਰ-ਫਾੜ ਨਹੀਂ।',
                'ਵਿਆਕਰਨ ਦਾ ਸਰਵੋਤਮ ਤਰੀਕਾ: ਆਗਮਨ ਪ੍ਰਣਾਲੀ (ਉਦਾਹਰਨ -> ਨਿਯਮ)।',
                'ਚੱਕਰ: ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ (ਮਰਜ਼ ਦੀ ਪਛਾਣ) -> ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ (ਇਲਾਜ)।'
            ],
            hi: [
                'कौशल क्रम: सुनना -> बोलना -> पढ़ना -> लिखना (LSRW)।',
                'ग्रहणात्मक = सुनना + पढ़ना; उत्पादक = बोलना + लिखना।',
                'वाचन: सस्वर = प्राथमिक/उच्चारण शुद्धि; मौन = उच्च प्राथमिक/तीव्र गति व गंभीर चिंतन।',
                'वर्तनी सुधार: श्रुतलेख (इमला) वर्तनी शुद्धि हेतु सर्वोत्तम तकनीक है।',
                'कविता का ध्येय: रसानुभूति एवं कल्पनाशीलता, शुष्क व्याकरण नहीं।',
                'व्याकरण की श्रेष्ठ विधि: आगमन विधि (उदाहरण -> नियम)।',
                'उपचार चक्र: निदानात्मक परीक्षण (कमजोरी की पहचान) -> उपचारात्मक शिक्षण (निवारण)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Grammar should be taught to primary children before they are allowed to speak or read stories in Punjabi. Correction: Formal grammar before the concrete operational stage creates anxiety; young children acquire language naturally through immersion, stories, and inductive communicative exposure.',
                'Misconception: Silent reading should be strictly mandated right from Class 1. Correction: Early primary learners require loud reading to develop grapheme-phoneme correspondence and self-monitor pronunciation; silent reading should only be introduced around Class 4–5.',
                'Misconception: Deductive method is the most modern and efficient method for teaching Punjabi grammar in primary school. Correction: Deductive method forces rote memorization of definitions; the Inductive method (presenting concrete examples and deriving rules collaboratively) is the psychologically sound method.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਪ੍ਰਾਇਮਰੀ ਬੱਚਿਆਂ ਨੂੰ ਪੰਜਾਬੀ ਬੋਲਣ ਜਾਂ ਕਹਾਣੀਆਂ ਪੜ੍ਹਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਵਿਆਕਰਨ ਦੇ ਨਿਯਮ ਰਟਾਉਣੇ ਚਾਹੀਦੇ ਹਨ। ਸੁਧਾਰ: ਮੁੱਢਲੇ ਪੱਧਰ ਤੇ ਰਸਮੀ ਵਿਆਕਰਨ ਬੱਚੇ ਵਿੱਚ ਡਰ ਪੈਦਾ ਕਰਦਾ ਹੈ; ਬੱਚਾ ਭਾਸ਼ਾ ਸੁਭਾਵਿਕ ਸੰਵਾਦ, ਕਹਾਣੀਆਂ ਅਤੇ ਕਿਰਿਆਵਾਂ ਰਾਹੀਂ ਸਹਿਜ ਰੂਪ ਵਿੱਚ ਗ੍ਰਹਿਣ ਕਰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਪਹਿਲੀ ਜਮਾਤ ਤੋਂ ਹੀ ਬੱਚਿਆਂ ਤੋਂ ਮੌਨ ਪਾਠ ਕਰਵਾਉਣਾ ਲਾਜ਼ਮੀ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। ਸੁਧਾਰ: ਪਹਿਲੀ-ਦੂਜੀ ਜਮਾਤ ਦੇ ਬੱਚਿਆਂ ਲਈ ਉੱਚੀ ਪਾਠ ਜ਼ਰੂਰੀ ਹੈ ਤਾਂ ਜੋ ਉਹ ਆਵਾਜ਼ਾਂ ਅਤੇ ਅੱਖਰਾਂ ਦਾ ਸੰਬੰਧ ਜੋੜ ਸਕਣ; ਮੌਨ ਪਾਠ ਚੌਥੀ-ਪੰਜਵੀਂ ਜਮਾਤ ਤੋਂ ਸ਼ੁਰੂ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ ਪ੍ਰਾਇਮਰੀ ਪੱਧਰ ਤੇ ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਪੜ੍ਹਾਉਣ ਦੀ ਸਭ ਤੋਂ ਆਧੁਨਿਕ ਵਿਧੀ ਹੈ। ਸੁਧਾਰ: ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ ਵਿੱਚ ਨਿਯਮ ਰਟਾਏ ਜਾਂਦੇ ਹਨ ਜੋ ਅਮਨੋਵਿਗਿਆਨਕ ਹੈ; ਆਗਮਨ ਪ੍ਰਣਾਲੀ (ਉਦਾਹਰਨਾਂ ਤੋਂ ਨਿਯਮ ਵੱਲ) ਹੀ ਸਰਵੋਤਮ ਮਨੋਵਿਗਿਆਨਕ ਵਿਧੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: प्राथमिक बालकों को पंजाबी भाषा बोलने या कहानी पढ़ने से पहले व्याकरण के नियम कंठस्थ कराने चाहिए। सुधार: प्राथमिक स्तर पर औपचारिक व्याकरण भय उत्पन्न करता है; बालक भाषा को स्वाभाविक परिवेश, कहानियों एवं संप्रेषण से सहज रूप से ग्रहण करता है।',
                'भ्रांति: कक्षा 1 से ही बालकों से मौन वाचन कराया जाना चाहिए। सुधार: प्रारंभिक कक्षाओं में ध्वनि-प्रतीक संबंध एवं उच्चारण सुधार हेतु सस्वर वाचन आवश्यक है; मौन वाचन कक्षा 4–5 से प्रारंभ होना चाहिए।',
                'भ्रांति: निगमन विधि प्राथमिक स्तर पर व्याकरण पढ़ाने की सबसे आधुनिक विधि है। सुधार: निगमन विधि रटंत अधिगम कराती है; आगमन विधि (उदाहरण से नियम की ओर) ही सर्वश्रेष्ठ मनोवैज्ञानिक विधि है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'A Punjabi teacher in a government school in Sangrur notices that several Class 6 students consistently make spelling errors in words with foot-subjoined letters (ਦੁੱਤ ਅੱਖਰ: \`ਪੜ੍ਹਾਈ\` written as \`ਪੜਾਈ\`, \`ਜੜ੍ਹ\` written as \`ਜੜ\`) and interchange \`ਸ਼\` with \`ਸ\`. Outline the systematic pedagogical two-step procedure the teacher should adopt to resolve this issue.',
                    pa: 'ਸੰਗਰੂਰ ਦੇ ਇੱਕ ਸਰਕਾਰੀ ਸਕੂਲ ਵਿੱਚ ਛੇਵੀਂ ਜਮਾਤ ਦਾ ਪੰਜਾਬੀ ਅਧਿਆਪਕ ਵੇਖਦਾ ਹੈ ਕਿ ਕਈ ਵਿਦਿਆਰਥੀ ਦੁੱਤ ਅੱਖਰਾਂ (ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ ਅੱਖਰ) ਦੇ ਸ਼ਬਦ-ਜੋੜਾਂ ਵਿੱਚ ਲਗਾਤਾਰ ਗਲਤੀਆਂ ਕਰਦੇ ਹਨ (\`ਪੜ੍ਹਾਈ\` ਨੂੰ \`ਪੜਾਈ\` ਅਤੇ \`ਜੜ੍ਹ\` ਨੂੰ \`ਜੜ\` ਲਿਖਦੇ ਹਨ) ਅਤੇ \`ਸ਼\` ਦੀ ਥਾਂ \`ਸ\` ਲਿਖਦੇ ਹਨ। ਇਸ ਸਮੱਸਿਆ ਨੂੰ ਹੱਲ ਕਰਨ ਲਈ ਅਧਿਆਪਕ ਨੂੰ ਕਿਹੜੇ ਦੋ ਵਿਗਿਆਨਕ ਕਦਮ ਚੁੱਕਣੇ ਚਾਹੀਦੇ ਹਨ?',
                    hi: 'संगरूर के एक सरकारी विद्यालय में कक्षा 6 का शिक्षक देखता है कि कई छात्र द्वित्व/पादाक्षर (ਦੁੱਤ ਅੱਖਰ) शब्दों में वर्तनी की त्रुटि करते हैं (\`ਪੜ੍ਹਾਈ\` को \`ਪੜਾਈ\` लिखते हैं) तथा \`ਸ਼\` व \`ਸ\` में भ्रमित होते हैं। इस समस्या के समाधान हेतु शिक्षक को कौन से दो वैज्ञानिक चरण अपनाने चाहिए?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Conduct a Diagnostic Test (ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ) through structured dictation (ਸ਼ਰੁਤੀਲੇਖ) and phonetic minimal pairs to isolate whether the root cause is auditory discrimination failure or orthographic ignorance of Gurmukhi subjoined letters.',
                        'Step 2: Implement Remedial Teaching (ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ) using audio pronunciation drills (hearing tonal difference of subjoined "h"), visual flashcards of minimal pairs, and targeted writing exercises until accuracy is achieved.'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ ਕਰਨਾ: ਸ਼ਰੁਤੀਲੇਖ (ਇਮਲਾ) ਰਾਹੀਂ ਇਹ ਪਤਾ ਲਗਾਉਣਾ ਕਿ ਕੀ ਬੱਚੇ ਨੂੰ ਉਚਾਰਨ ਸੁਣਨ ਵਿੱਚ ਫ਼ਰਕ ਨਹੀਂ ਪਤਾ ਲੱਗ ਰਿਹਾ ਜਾਂ ਲਿਪੀ ਦੇ ਨਿਯਮਾਂ ਦੀ ਸਮਝ ਨਹੀਂ ਹੈ।',
                        'ਕਦਮ 2: ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ ਦੇਣਾ: ਪੈਰ ਵਿੱਚ \`ਹ\` ਵਾਲੇ ਸ਼ਬਦਾਂ ਅਤੇ \`ਸ/ਸ਼\` ਦੇ ਜੋੜਿਆਂ ਦੇ ਕਾਰਡ ਬਣਾ ਕੇ ਵਿਸ਼ੇਸ਼ ਅਭਿਆਸ ਅਤੇ ਮੌਖਿਕ ਉਚਾਰਨ ਦਾ ਅਭਿਆਸ ਕਰਵਾਉਣਾ।'
                    ],
                    hi: [
                        'चरण 1: निदानात्मक परीक्षण (Diagnostic Test): श्रुतलेख द्वारा यह जांचना कि त्रुटि का कारण श्रवण-भेद का अभाव है या गुरुमुखी लिपि नियमों का अज्ञान।',
                        'चरण 2: उपचारात्मक शिक्षण (Remedial Teaching): पादाक्षर \'ਹ\' तथा \'ਸ/ਸ਼\' के युग्मों का विशिष्ट उच्चारण अभ्यास एवं सुधारात्मक कार्य कराना।'
                    ]
                },
                finalAnswer: {
                    en: 'Step 1: Diagnostic Test (identifying phonetic vs script defect) -> Step 2: Targeted Remedial Teaching with auditory-visual drills and dictation.',
                    pa: 'ਕਦਮ 1: ਨਿਦਾਨਾਤਮਕ ਪਰੀਖਣ (ਕਮਜ਼ੋਰੀ ਦੀ ਪਛਾਣ) -> ਕਦਮ 2: ਉਪਚਾਰਾਤਮਕ ਸਿੱਖਿਆ (ਵਿਸ਼ੇਸ਼ ਅਭਿਆਸ ਅਤੇ ਸ਼ਰੁਤੀਲੇਖ)।',
                    hi: 'चरण 1: निदानात्मक परीक्षण (दोष की पहचान) -> चरण 2: उपचारात्मक शिक्षण (विशिष्ट अभ्यास व श्रुतलेख)।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-pun-1',
                question: {
                    en: 'What is the fundamental difference between Agaman Pranali (Inductive) and Nigaman Pranali (Deductive) in Punjabi grammar?',
                    pa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਵਿੱਚ ਆਗਮਨ ਪ੍ਰਣਾਲੀ ਅਤੇ ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ ਵਿੱਚ ਕੀ ਮੂਲ ਅੰਤਰ ਹੈ?',
                    hi: 'पंजाबी व्याकरण में आगमन प्रणाली एवं निगमन प्रणाली में क्या मूलभूत अंतर है?'
                },
                answer: {
                    en: 'Agaman (Inductive) moves from concrete examples to abstract rules (Example -> Rule); Nigaman (Deductive) moves from memorized rules to examples (Rule -> Example).',
                    pa: 'ਆਗਮਨ ਪ੍ਰਣਾਲੀ ਉਦਾਹਰਨਾਂ ਤੋਂ ਨਿਯਮ ਵੱਲ (Example -> Rule) ਜਾਂਦੀ ਹੈ; ਨਿਗਮਨ ਪ੍ਰਣਾਲੀ ਨਿਯਮਾਂ ਤੋਂ ਉਦਾਹਰਨ ਵੱਲ (Rule -> Example) ਜਾਂਦੀ ਹੈ।',
                    hi: 'आगमन प्रणाली उदाहरण से नियम की ओर जाती है; निगमन प्रणाली नियम से उदाहरण की ओर जाती है।'
                }
            },
            {
                id: 'fc-pun-2',
                question: {
                    en: 'Why is silent reading (ਮੌਨ ਪਾਠ) prioritized in upper-primary classes over loud reading?',
                    pa: 'ਉੱਚ-ਪ੍ਰਾਇਮਰੀ ਜਮਾਤਾਂ ਵਿੱਚ ਉੱਚੀ ਪਾਠ ਦੇ ਮੁਕਾਬਲੇ ਮੌਨ ਪਾਠ ਨੂੰ ਪਹਿਲ ਕਿਉਂ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ?',
                    hi: 'उच्च प्राथमिक कक्षाओं में सस्वर वाचन की तुलना में मौन वाचन को प्राथमिकता क्यों दी जाती है?'
                },
                answer: {
                    en: 'Silent reading increases reading speed, fosters deep cognitive comprehension, saves vocal energy, and prevents classroom disruption.',
                    pa: 'ਮੌਨ ਪਾਠ ਪੜ੍ਹਨ ਦੀ ਗਤੀ ਵਧਾਉਂਦਾ ਹੈ, ਡੂੰਘੇ ਵਿਚਾਰ ਬੋਧ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ, ਊਰਜਾ ਬਚਾਉਂਦਾ ਹੈ ਅਤੇ ਜਮਾਤ ਵਿੱਚ ਸ਼ਾਂਤੀ ਰੱਖਦਾ ਹੈ।',
                    hi: 'मौन वाचन पठन गति में वृद्धि करता है, गहन अर्थबोध कराता है, वाक-ऊर्जा बचाता है तथा कक्षा में व्यवधान रोकता है।'
                }
            },
            {
                id: 'fc-pun-3',
                question: {
                    en: 'What is the role of a Language Laboratory (ਭਾਸ਼ਾ ਪ੍ਰਯੋਗਸ਼ਾਲਾ) in Punjabi phonetics teaching?',
                    pa: 'ਪੰਜਾਬੀ ਧੁਨੀ ਵਿਉਂਤ ਅਤੇ ਉਚਾਰਨ ਸਿੱਖਿਆ ਵਿੱਚ ਭਾਸ਼ਾ ਪ੍ਰਯੋਗਸ਼ਾਲਾ ਦਾ ਕੀ ਮਹੱਤਵ ਹੈ?',
                    hi: 'पंजाबी ध्वनि एवं उच्चारण शिक्षण में भाषा प्रयोगशाला का क्या महत्व है?'
                },
                answer: {
                    en: 'It enables individual students to listen to standardized tonal models via headsets, record their own voices, self-evaluate, and eliminate regional dialect interference.',
                    pa: 'ਇਸ ਵਿੱਚ ਵਿਦਿਆਰਥੀ ਹੈੱਡਫ਼ੋਨਾਂ ਰਾਹੀਂ ਮਿਆਰੀ ਟਕਸਾਲੀ ਸੁਰਾਂ ਸੁਣ ਸਕਦੇ ਹਨ, ਆਪਣੀ ਆਵਾਜ਼ ਰਿਕਾਰਡ ਕਰਕੇ ਤੁਲਨਾ ਕਰ ਸਕਦੇ ਹਨ ਅਤੇ ਉਚਾਰਨ ਸੁਧਾਰ ਸਕਦੇ ਹਨ।',
                    hi: 'इसमें विद्यार्थी हेडफ़ोन द्वारा मानक सुर व उच्चारण सुन सकते हैं, अपनी ध्वनि रिकॉर्ड कर तुलना कर सकते हैं तथा उच्चारण दोष सुधार सकते हैं।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. ENGLISH LANGUAGE PEDAGOGY (pstet-english-pedagogy)
    // =========================================================================
    {
        topicId: 'pstet-english-pedagogy',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 15,
            editorialNote: 'Comprehensive trilingual blueprint for PSTET Paper 1 & 2 English Language Pedagogy: Approaches & Methods (GTM, Direct Method, Dr. Dodson Bilingual Method, Structural Approach, CLT), LSRW Skill Development, Error Analysis & Remediation, Chomsky LAD vs Skinner Behaviorism, Krashen 5 Hypotheses.'
        },
        bookRefs: [
            {
                title: 'Teaching of English in India: Approaches, Methods and Techniques',
                author: 'Dr. M.K. Kohli / Dr. K.S. Sachdeva',
                chapter: 'Methods of Teaching English, CLT, Bilingual Method & Skill Acquisition',
                relevance: 'Prescribed standard textbook across Punjab universities for English Pedagogy.'
            },
            {
                title: 'Pedagogy of English (Language Education)',
                author: 'NCERT / SCERT Punjab Curriculum Resource',
                chapter: 'Second Language Acquisition Theories (Chomsky, Krashen) & Error Analysis',
                relevance: 'Standard national and state benchmark for TET second-language English pedagogy.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Aims & Core Methods of Teaching English]
1. **Status & Aims of English in Punjab / India:**
   - English is taught as a **Second Language (ESL)** and acts as an Associate Official Language (Article 343).
   - **Kothari Commission (1964–66)** designated English as a crucial **"Library Language"** and window to modern scientific knowledge.
   - Dual Aims: **Language Acquisition** (functional communicative competence) and **Literary Appreciation** (higher stages).
2. **Traditional Methods of Teaching English:**
   - **Grammar-Translation Method (GTM / Classical Method):**
     - Unit of teaching: **Word / Sentence**. Heavy reliance on mother tongue (L1) translation.
     - Grammar taught **deductively** through explicit rule memorization followed by translation exercises.
     - Major Flaws: Neglects listening and speaking; pronunciation is ignored; produces hesitant speakers unable to communicate fluently.
   - **Direct Method (Natural Method):**
     - Born in reaction to GTM. Motto: Direct bond between thought and expression in English without L1 mediation.
     - **Mother tongue is strictly prohibited**. Grammar is taught **inductively** through demonstration and context.
     - Major Flaws: Demands highly proficient teachers; fails with abstract words; over-reliance on miming wastes time.
   - **Bilingual Method (Dr. C.J. Dodson, Aberystwyth University, Wales):**
     - Bridges the gap between GTM and Direct Method.
     - **Three Cardinal Rules:**
       1. **Only the teacher uses the mother tongue (L1)** to convey meaning of words and sentences.
       2. **Students never use L1**; student practice is 100% in the target language (English).
       3. Translation is sentence-level conceptual equivalent, never mechanical word-for-word translation.
     - Ideal for rural and semi-urban classrooms in Punjab: saves time, avoids unnatural miming, and maintains target language immersion for students.

---

### [Level I: Intermediate — Structural Approach, CLT & LSRW Skills]
1. **Structural Approach & Situational Language Teaching:**
   - Language is viewed as a system of habits. Focus on mastering **275 graded grammatical structures** and **3000 root words**.
   - Employs **Substitution Tables**, repetition drills, and sentence patterns.
2. **Communicative Language Teaching (CLT):**
   - Grounded in **Dell Hymes’s concept of "Communicative Competence"** (knowing *when*, *where*, and *how* to say *what* to *whom*).
   - Shifts focus from mere grammatical accuracy to **communicative fluency**.
   - Characteristics: Learner-centred; uses authentic materials (brochures, train timetables, menus); tasks involve information gaps, role-plays, and problem solving.
   - Errors are treated as natural indicators of the learning process rather than punishable offenses.
3. **LSRW Skill Development:**
   - **Listening:** Bottom-up processing (phonemes $\\to$ words $\\to$ sentences) vs Top-down processing (using prior knowledge and context to grasp the gist).
   - **Speaking:** Focus on intelligible pronunciation, minimal pairs (e.g. *ship* vs *sheep*, *cot* vs *caught*), rhythm, and sentence stress.
   - **Reading Sub-skills:**
     - **Skimming:** Rapid reading to grasp the **overall central theme or main idea (gist)**.
     - **Scanning:** Targeted reading to locate a **specific piece of information** (a date, phone number, name).
     - **Intensive Reading:** Detailed micro-analysis of syntax, vocabulary, and grammar of a short text.
     - **Extensive Reading:** Rapid macro-reading of longer texts (novels, magazines) for pleasure and fluency.
   - **Writing as a Process:**
     - Not just a mechanical product. Stages: **Brainstorming $\\to$ Outlining/Drafting $\\to$ Peer Review $\\to$ Revising $\\to$ Editing $\\to$ Publishing**.

---

### [Level A: Advanced — SLA Theories (Chomsky, Krashen) & Error Analysis]
1. **Noam Chomsky’s Innatist / Nativist Theory:**
   - Refuted B.F. Skinner’s behaviorist view of language as habit formation via stimulus-response-reinforcement.
   - **Language Acquisition Device (LAD):** An innate, genetically pre-wired biological faculty in the human brain that facilitates language acquisition during a critical period.
   - **Universal Grammar (UG):** Common structural principles shared by all human languages.
   - **Poverty of the Stimulus:** Children produce complex, novel sentences they have never previously heard, proving language is creatively generated, not mechanically imitated.
2. **Stephen Krashen’s Second Language Acquisition Theory (5 Hypotheses):**
   - **1. Acquisition-Learning Hypothesis:** **Acquisition** is a subconscious, natural process (like L1), leading to permanent competence; **Learning** is conscious knowledge of formal grammar rules. Acquisition is vastly superior for communicative fluency.
   - **2. Natural Order Hypothesis:** Grammatical structures are acquired in a predictable, invariant natural sequence, independent of the order in which they are formally taught.
   - **3. Monitor Hypothesis:** Consciously learned grammar acts only as a mental **"Monitor" or editor** to polish utterances when three conditions are met: (a) sufficient time, (b) focus on form, (c) knowledge of the rule.
   - **4. Input Hypothesis ($i + 1$):** Acquisition takes place when learners are exposed to **Comprehensible Input** that is one step beyond their current linguistic competence level ($i + 1$).
   - **5. Affective Filter Hypothesis:** Emotional variables (**anxiety, self-confidence, motivation**) act as a mental screen. High anxiety and low confidence raise the filter, blocking input from reaching the LAD. A **low affective filter** enables rapid acquisition.
3. **Error Analysis & Remedial Teaching:**
   - S.P. Corder’s distinction: **Mistake** (momentary performance slip, self-correctable) vs **Error** (systematic competence gap reflecting the learner's developing interlanguage).
   - Sources of Errors:
     - **Interlingual Transfer (L1 Interference):** Negative transfer from Punjabi/Hindi (e.g. *He go school yesterday*, or pronouncing *school* as *iskool*).
     - **Intralingual Errors (Overgeneralization):** Applying L2 rules indiscriminately (e.g. *goed*, *feets*, *comed*).
   - **Fossilization:** Erroneous linguistic forms becoming permanently ingrained due to premature stabilization. Remedied through diagnostic testing and targeted communicative drills.`,

            pa: `### [Level B: Basic — ਅੰਗਰੇਜ਼ੀ ਅਧਿਆਪਨ ਦੇ ਉਦੇਸ਼ ਅਤੇ ਰਵਾਇਤੀ ਵਿਧੀਆਂ]
1. **ਪੰਜਾਬ/ਭਾਰਤ ਵਿੱਚ ਅੰਗਰੇਜ਼ੀ ਦੀ ਸਥਿਤੀ:**
   - ਅੰਗਰੇਜ਼ੀ ਦੂਜੀ ਭਾਸ਼ਾ (ESL) ਵਜੋਂ ਪੜ੍ਹਾਈ ਜਾਂਦੀ ਹੈ।
   - ਕੋਠਾਰੀ ਕਮਿਸ਼ਨ (1964-66) ਨੇ ਅੰਗਰੇਜ਼ੀ ਨੂੰ ਇੱਕ ਮਹੱਤਵਪੂਰਨ **ਲਾਇਬ੍ਰੇਰੀ ਭਾਸ਼ਾ (Library Language)** ਕਿਹਾ ਹੈ ਜੋ ਆਧੁਨਿਕ ਗਿਆਨ-ਵਿਗਿਆਨ ਦਾ ਝਰੋਖਾ ਹੈ।
2. **ਅਧਿਆਪਨ ਦੀਆਂ ਰਵਾਇਤੀ ਵਿਧੀਆਂ:**
   - **ਵਿਆਕਰਨ-ਅਨੁਵਾਦ ਵਿਧੀ (Grammar-Translation Method - GTM):**
     - ਸਭ ਤੋਂ ਪੁਰਾਣੀ ਵਿਧੀ। ਮਾਤ-ਭਾਸ਼ਾ ਵਿੱਚ ਸ਼ਬਦ-ਦਰ-ਸ਼ਬਦ ਅਨੁਵਾਦ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
     - ਵਿਆਕਰਨ ਨਿਗਮਨ ਢੰਗ (Deductive: ਨਿਯਮ ਪਹਿਲਾਂ) ਨਾਲ ਰਟਾਇਆ ਜਾਂਦਾ ਹੈ।
     - ਕਮੀਆਂ: ਸੁਣਨ ਅਤੇ ਬੋਲਣ ਨੂੰ ਅਣਗੌਲਿਆ ਕੀਤਾ ਜਾਂਦਾ ਹੈ; ਬੱਚਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਸੋਚਣ ਦੇ ਅਸਮਰੱਥ ਰਹਿੰਦਾ ਹੈ।
   - **ਸਿੱਧੀ ਵਿਧੀ (Direct Method):**
     - GTM ਦੇ ਵਿਰੋਧ ਵਿੱਚ ਸ਼ੁਰੂ ਹੋਈ। ਮਾਤ-ਭਾਸ਼ਾ ਦੀ ਵਰਤੋਂ ਤੇ ਮੁਕੰਮਲ ਪਾਬੰਦੀ।
     - ਸਿੱਧਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਸੰਵਾਦ ਅਤੇ ਵਿਆਕਰਨ ਆਗਮਨ (Inductive) ਢੰਗ ਨਾਲ।
     - ਕਮੀਆਂ: ਅਮੂਰਤ ਸ਼ਬਦ ਸਮਝਾਉਣ ਵਿੱਚ ਬਹੁਤ ਸਮਾਂ ਬਰਬਾਦ ਹੁੰਦਾ ਹੈ; ਪੇਂਡੂ ਸਕੂਲਾਂ ਲਈ ਮੁਸ਼ਕਲ।
   - **ਦੋ-ਭਾਸ਼ੀ ਵਿਧੀ (Bilingual Method — Dr. C.J. Dodson):**
     - GTM ਅਤੇ Direct Method ਦਾ ਸੁਮੇਲ।
     - **ਤਿੰਨ ਸੁਨਹਿਰੀ ਨਿਯਮ:**
       1. **ਕੇਵਲ ਅਧਿਆਪਕ ਮਾਤ-ਭਾਸ਼ਾ (ਪੰਜਾਬੀ) ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦਾ ਹੈ** ਔਖੇ ਸੰਕਲਪ ਸਮਝਾਉਣ ਲਈ।
       2. **ਵਿਦਿਆਰਥੀ ਕਦੇ ਵੀ ਮਾਤ-ਭਾਸ਼ਾ ਨਹੀਂ ਬੋਲਦੇ**; ਵਿਦਿਆਰਥੀਆਂ ਦਾ ਸਾਰਾ ਅਭਿਆਸ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹੁੰਦਾ ਹੈ।
       3. ਸ਼ਬਦ-ਦਰ-ਸ਼ਬਦ ਅਨੁਵਾਦ ਨਹੀਂ, ਸਗੋਂ ਪੂਰੇ ਵਾਕ ਦੇ ਭਾਵ ਦਾ ਅਨੁਵਾਦ ਹੁੰਦਾ ਹੈ।
     - ਪੰਜਾਬ ਦੇ ਸਕੂਲਾਂ ਲਈ ਸਭ ਤੋਂ ਲਾਹੇਵੰਦ ਵਿਧੀ।

---

### [Level I: Intermediate — ਸੰਰਚਨਾਤਮਕ ਪਹੁੰਚ, CLT ਅਤੇ LSRW ਕੌਸ਼ਲ]
1. **ਸੰਰਚਨਾਤਮਕ ਪਹੁੰਚ (Structural Approach):**
   - ਭਾਸ਼ਾ ਆਦਤਾਂ ਦਾ ਸਮੂਹ ਹੈ। 275 ਗ੍ਰੇਡਿਡ ਢਾਂਚਿਆਂ ਅਤੇ 3000 ਮੂਲ ਸ਼ਬਦਾਂ ਨੂੰ ਬਦਲਵੀਂ ਸਾਰਣੀ (Substitution Tables) ਅਤੇ ਅਭਿਆਸਾਂ ਰਾਹੀਂ ਸਿਖਾਉਣਾ।
2. **ਸੰਚਾਰਾਤਮਕ ਭਾਸ਼ਾ ਅਧਿਆਪਨ (Communicative Language Teaching - CLT):**
   - ਡੇਲ ਹਾਈਮਸ (Dell Hymes) ਦੇ ਸੰਚਾਰਾਤਮਕ ਸਮਰੱਥਾ (Communicative Competence) ਸਿਧਾਂਤ ਤੇ ਆਧਾਰਿਤ।
   - ਕੇਵਲ ਵਿਆਕਰਨਿਕ ਸ਼ੁੱਧਤਾ ਦੀ ਥਾਂ **ਸੰਚਾਰ ਵਿੱਚ ਰਵਾਨਗੀ (Fluency)** ਤੇ ਜ਼ੋਰ।
   - ਵਿਦਿਆਰਥੀ-ਕੇਂਦਰਿਤ; ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਦੇ ਕੰਮ (Role Play, ਰੇਲਵੇ ਟਾਈਮ ਟੇਬਲ, ਇੰਟਰਵਿਊ)।
   - ਗਲਤੀਆਂ ਨੂੰ ਸਿੱਖਣ ਪ੍ਰਕਿਰਿਆ ਦਾ ਸੁਭਾਵਿਕ ਹਿੱਸਾ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।
3. **LSRW ਕੌਸ਼ਲਾਂ ਦਾ ਵਿਕਾਸ:**
   - **ਪੜ੍ਹਨ ਦੇ ਉਪ-ਕੌਸ਼ਲ:**
     - **ਸਕਿਮਿੰਗ (Skimming):** ਪਾਠ ਦਾ ਕੇਂਦਰੀ ਭਾਵ ਜਾਂ ਮੁੱਖ ਵਿਚਾਰ (Gist) ਜਾਣਨ ਲਈ ਤੇਜ਼ੀ ਨਾਲ ਪੜ੍ਹਨਾ।
     - **ਸਕੈਨਿੰਗ (Scanning):** ਕਿਸੇ ਖ਼ਾਸ ਜਾਣਕਾਰੀ (ਜਿਵੇਂ ਤਾਰੀਖ਼, ਨਾਂ, ਅੰਕੜਾ) ਨੂੰ ਲੱਭਣ ਲਈ ਪੜ੍ਹਨਾ।
     - **ਗੰਭੀਰ ਪਾਠ (Intensive):** ਸ਼ਬਦਾਵਲੀ ਅਤੇ ਵਿਆਕਰਨ ਦੀ ਡੂੰਘੀ ਸਮਝ ਲਈ ਪੜ੍ਹਨਾ।
     - **ਵਿਸਥਾਰਤ ਪਾਠ (Extensive):** ਆਨੰਦ ਅਤੇ ਰਵਾਨਗੀ ਲਈ ਲੰਬੀਆਂ ਕਹਾਣੀਆਂ ਪੜ੍ਹਨਾ।
   - **ਲਿਖਣ ਦੀ ਪ੍ਰਕਿਰਿਆ:** ਵਿਚਾਰ ਮੰਥਨ (Brainstorming) $\\to$ ਖਰੜਾ (Drafting) $\\to$ ਸੋਧ (Revising) $\\to$ ਸੰਪਾਦਨ (Editing)।

---

### [Level A: Advanced — ਭਾਸ਼ਾ ਗ੍ਰਹਿਣ ਸਿਧਾਂਤ (ਚੋਮਸਕੀ, ਕ੍ਰੈਸ਼ਨ) ਅਤੇ ਤਰੁੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ]
1. **ਨੋਅਮ ਚੋਮਸਕੀ ਦਾ ਸਹਿਜਵਾਦੀ ਸਿਧਾਂਤ (Innatist Theory):**
   - ਸਕਿਨਰ ਦੇ ਵਿਵਹਾਰਵਾਦ ਨੂੰ ਰੱਦ ਕੀਤਾ।
   - **LAD (Language Acquisition Device):** ਮਨੁੱਖੀ ਦਿਮਾਗ਼ ਵਿੱਚ ਭਾਸ਼ਾ ਸਿੱਖਣ ਦਾ ਜਨਮਜਾਤ ਜੈਵਿਕ ਯੰਤਰ ਮੌਜੂਦ ਹੁੰਦਾ ਹੈ।
   - **ਯੂਨੀਵਰਸਲ ਗ੍ਰਾਮਰ (Universal Grammar):** ਸਾਰੀਆਂ ਮਾਨਵ ਭਾਸ਼ਾਵਾਂ ਦੇ ਬੁਨਿਆਦੀ ਨਿਯਮ ਸਾਂਝੇ ਹਨ।
   - ਬੱਚਾ ਉਹ ਵਾਕ ਵੀ ਬੋਲ ਲੈਂਦਾ ਹੈ ਜੋ ਉਸ ਨੇ ਕਦੇ ਨਹੀਂ ਸੁਣੇ ਹੁੰਦੇ।
2. **ਸਟੀਫਨ ਕ੍ਰੈਸ਼ਨ (Stephen Krashen) ਦੇ 5 ਸਿਧਾਂਤ:**
   - **1. ਗ੍ਰਹਿਣ-ਸਿੱਖਿਆ ਸਿਧਾਂਤ (Acquisition-Learning):** ਅਚੇਤ ਗ੍ਰਹਿਣ (Acquisition) ਸੁਭਾਵਿਕ ਅਤੇ ਸਥਾਈ ਹੁੰਦਾ ਹੈ; ਚੇਤਨ ਸਿੱਖਿਆ (Learning) ਸਿਰਫ਼ ਨਿਯਮ ਰਟਾਉਂਦੀ ਹੈ।
   - **2. ਕੁਦਰਤੀ ਕ੍ਰਮ ਸਿਧਾਂਤ (Natural Order):** ਵਿਆਕਰਨਿਕ ਨਿਯਮ ਇੱਕ ਨਿਸ਼ਚਿਤ ਕੁਦਰਤੀ ਕ੍ਰਮ ਵਿੱਚ ਗ੍ਰਹਿਣ ਹੁੰਦੇ ਹਨ।
   - **3. ਮਾਨੀਟਰ ਸਿਧਾਂਤ (Monitor):** ਸਿੱਖਿਆ ਹੋਇਆ ਵਿਆਕਰਨ ਸਿਰਫ਼ ਲਿਖਤ/ਬੋਲ ਨੂੰ ਸੋਧਣ ਵਾਲੇ ਸੰਪਾਦਕ (Monitor) ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ।
   - **4. ਸਮਝਣਯੋਗ ਇਨਪੁਟ ਸਿਧਾਂਤ ($i + 1$):** ਬੱਚੇ ਨੂੰ ਉਸ ਦੇ ਮੌਜੂਦਾ ਪੱਧਰ ($i$) ਤੋਂ ਇੱਕ ਪੱਧਰ ਉੱਚੀ ($+1$) ਸਮਝਣਯੋਗ ਸਮੱਗਰੀ ਦਿੱਤੀ ਜਾਵੇ।
   - **5. ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਫਿਲਟਰ ਸਿਧਾਂਤ (Affective Filter):** ਘਬਰਾਹਟ ਅਤੇ ਡਰ ਫਿਲਟਰ ਨੂੰ ਉੱਚਾ ਕਰ ਦਿੰਦੇ ਹਨ ਜਿਸ ਨਾਲ ਸਿੱਖਣਾ ਰੁਕ ਜਾਂਦਾ ਹੈ। ਘੱਟ ਤਣਾਅ ਵਾਲਾ ਮਾਹੌਲ (Low Filter) ਸਿੱਖਣ ਨੂੰ ਤੇਜ਼ ਕਰਦਾ ਹੈ।
3. **ਤਰੁੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ (Error Analysis):**
   - ਮਾਤ-ਭਾਸ਼ਾ ਦਾ ਪ੍ਰਭਾਵ (Interlingual) ਜਿਵੇਂ ਪੰਜਾਬੀ ਸੋਚ ਅਨੁਸਾਰ ਅੰਗਰੇਜ਼ੀ ਬੋਲਣਾ।
   - ਓਵਰਜਨਰਲਾਈਜ਼ੇਸ਼ਨ (Intralingual) ਜਿਵੇਂ 'go' ਤੋਂ 'goed' ਬਣਾ ਲੈਣਾ।`,

            hi: `### [Level B: Basic — अंग्रेज़ी शिक्षण के उद्देश्य एवं पारंपरिक विधियाँ]
1. **भारत में अंग्रेज़ी की स्थिति:**
   - अंग्रेज़ी एक द्वितीय भाषा (ESL) एवं सह-राजभाषा है।
   - कोठारी आयोग (1964-66) ने इसे महत्वपूर्ण **"लाइब्रेरी भाषा" (Library Language)** माना।
2. **पारंपरिक शिक्षण विधियाँ:**
   - **व्याकरण-अनुवाद विधि (GTM):**
     - सबसे प्राचीन विधि। मातृभाषा में शब्द-प्रति-शब्द अनुवाद।
     - व्याकरण निगमन (Deductive: नियम से उदाहरण) रूप में पढ़ाया जाता है।
     - दोष: श्रवण एवं वाचन की उपेक्षा; संप्रेषण कौशल का अभाव।
   - **प्रत्यक्ष विधि (Direct Method):**
     - GTM के विरोध में विकसित। मातृभाषा का प्रयोग पूर्णतः वर्जित।
     - व्याकरण आगमन विधि से संदर्भ में।
     - दोष: अमूर्त शब्दों को समझाने में कठिनाई; शिक्षकों पर अत्यधिक निर्भरता।
   - **द्विभाषी विधि (Bilingual Method — Dr. C.J. Dodson):**
     - GTM और Direct Method का उत्कृष्ट समन्वय।
     - **तीन मुख्य नियम:**
       1. **केवल शिक्षक आवश्यकता पड़ने पर मातृभाषा का प्रयोग करता है।**
       2. **विद्यार्थी केवल अंग्रेज़ी में अभ्यास करते हैं, मातृभाषा नहीं बोलते।**
       3. वाक्य स्तर पर भावार्थ अनुवाद, न कि यांत्रिक शब्दशः अनुवाद।
     - भारतीय परिवेश हेतु अत्यंत उपयोगी।

---

### [Level I: Intermediate — संरचनात्मक उपागम, CLT एवं LSRW कौशल]
1. **संरचनात्मक उपागम (Structural Approach):**
   - भाषा आदतों का समूह है। 275 ग्रेडेड संरचनाओं एवं 3000 मूल शब्दों का प्रतिस्थापन तालिकाओं (Substitution Tables) द्वारा अभ्यास।
2. **संप्रेषणात्मक भाषा शिक्षण (CLT):**
   - डेल हाइम्स के संप्रेषणात्मक सामर्थ्य (Communicative Competence) पर आधारित।
   - व्याकरणिक शुद्धता से अधिक **संप्रेषण प्रवाह (Fluency)** पर बल।
   - शिक्षार्थी-केंद्रित; वास्तविक जीवन की सामग्री (Role Play, समय सारणी, संवाद)।
   - त्रुटियों को सीखने का स्वाभाविक अंग माना जाता है।
3. **LSRW कौशलों का विकास:**
   - **पठन के उप-कौशल:**
     - **स्किमिंग (Skimming):** मुख्य भाव या सार (Gist) जानने हेतु तीव्र पठन।
     - **स्कैनिंग (Scanning):** किसी विशिष्ट सूचना (तारीख, नाम, संख्या) को खोजने हेतु पठन।
     - **गहन पठन (Intensive):** भाषा एवं व्याकरण के सूक्ष्म बोध हेतु पठन।
     - **विस्तृत पठन (Extensive):** आनंद एवं प्रवाह हेतु लंबी सामग्री पढ़ना।
   - **प्रक्रियात्मक लेखन:** विचार-मंथन $\\to$ प्रारूपण (Drafting) $\\to$ पुनरीक्षण $\\to$ संपादन।

---

### [Level A: Advanced — भाषा अर्जन सिद्धांत (चॉम्स्की, क्रैशन) एवं त्रुटि विश्लेषण]
1. **नोआम चॉम्स्की का जन्मजातवादी सिद्धांत:**
   - स्किनर के व्यवहारवाद का खंडन।
   - **LAD (Language Acquisition Device):** मानव मस्तिष्क में भाषा सीखने का जन्मजात जैविक तंत्र।
   - **सार्वभौमिक व्याकरण (Universal Grammar):** सभी मानव भाषाओं के अंतर्निहित नियम समान हैं।
2. **स्टीफन क्रैशन (Stephen Krashen) के 5 सिद्धांत:**
   - **1. अर्जन-अधिगम सिद्धांत:** अचेतन अर्जन (Acquisition) स्वाभाविक एवं स्थायी है; चेतन अधिगम (Learning) केवल नियमों का ज्ञान है।
   - **2. प्राकृतिक क्रम सिद्धांत:** व्याकरणिक संरचनाएँ एक निश्चित क्रम में अर्जित होती हैं।
   - **3. मॉनिटर सिद्धांत:** सीखा हुआ व्याकरण केवल संपादक (Monitor) का कार्य करता है।
   - **4. बोधगम्य निवेश सिद्धांत ($i + 1$):** शिक्षार्थी के वर्तमान स्तर ($i$) से एक स्तर आगे ($+1$) की सामग्री प्रदान करना।
   - **5. भावात्मक फ़िल्टर सिद्धांत:** चिंता व तनाव फ़िल्टर को ऊँचा कर देते हैं; तनावमुक्त परिवेश (Low Filter) अर्जन को सुगम बनाता है।
3. **त्रुटि विश्लेषण:**
   - अंतर-भाषाई प्रभाव (L1 interference) एवं अति-सामान्यीकरण (Overgeneralization जैसे go से goed बनाना)।`
        },
        keyNotes: {
            en: [
                'Kothari Commission (1964-66) recommended English as an indispensable Library Language.',
                'Grammar-Translation Method (GTM) teaches deductive grammar and neglects oral-aural fluency.',
                'Direct Method strictly prohibits the mother tongue and teaches grammar inductively through immersion.',
                'Dr. C.J. Dodson’s Bilingual Method permits ONLY the teacher to use L1 to explain concepts, while students practice entirely in English.',
                'Communicative Language Teaching (CLT) emphasizes communicative competence (Dell Hymes), fluency over formal accuracy, and authentic real-life tasks.',
                'Reading sub-skills: Skimming = overall gist/theme; Scanning = locating specific facts/details.',
                'Noam Chomsky proved children possess an innate Language Acquisition Device (LAD) and Universal Grammar (UG).',
                'Stephen Krashen’s 5 Hypotheses: Acquisition vs Learning, Natural Order, Monitor, Comprehensible Input (i + 1), and Affective Filter (low anxiety enables acquisition).'
            ],
            pa: [
                'ਕੋਠਾਰੀ ਕਮਿਸ਼ਨ ਨੇ ਅੰਗਰੇਜ਼ੀ ਨੂੰ ਇੱਕ ਅਹਿਮ ਲਾਇਬ੍ਰੇਰੀ ਭਾਸ਼ਾ (Library Language) ਐਲਾਨਿਆ।',
                'GTM ਵਿਧੀ ਵਿੱਚ ਮਾਤ-ਭਾਸ਼ਾ ਰਾਹੀਂ ਨਿਗਮਨ ਵਿਆਕਰਨ ਪੜ੍ਹਾਇਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਬੋਲਣ-ਸੁਣਨ ਦੀ ਅਣਦੇਖੀ ਹੁੰਦੀ ਹੈ।',
                'ਸਿੱਧੀ ਵਿਧੀ (Direct Method) ਵਿੱਚ ਮਾਤ-ਭਾਸ਼ਾ ਦੀ ਵਰਤੋਂ ਬਿਲਕੁਲ ਮਨ੍ਹਾ ਹੁੰਦੀ ਹੈ।',
                'ਡਾ. ਸੀ.ਜੇ. ਡੌਡਸਨ ਦੀ ਦੋ-ਭਾਸ਼ੀ ਵਿਧੀ (Bilingual Method) ਵਿੱਚ ਸਿਰਫ਼ ਅਧਿਆਪਕ ਮਾਤ-ਭਾਸ਼ਾ ਬੋਲ ਸਕਦਾ ਹੈ, ਵਿਦਿਆਰਥੀ ਕੇਵਲ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਅਭਿਆਸ ਕਰਦੇ ਹਨ।',
                'CLT ਵਿਧੀ ਵਿੱਚ ਵਿਆਕਰਨਿਕ ਸ਼ੁੱਧਤਾ ਦੀ ਬਜਾਏ ਸੰਚਾਰ ਰਵਾਨਗੀ (Fluency) ਅਤੇ ਅਸਲ ਜ਼ਿੰਦਗੀ ਦੇ ਸੰਵਾਦ ਤੇ ਜ਼ੋਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।',
                'ਪੜ੍ਹਨ ਦੇ ਉਪ-ਕੌਸ਼ਲ: ਸਕਿਮਿੰਗ (ਮੁੱਖ ਭਾਵ/ਸਾਰ) ਅਤੇ ਸਕੈਨਿੰਗ (ਵਿਸ਼ੇਸ਼ ਜਾਣਕਾਰੀ ਲੱਭਣਾ)।',
                'ਨੋਅਮ ਚੋਮਸਕੀ ਮੁਤਾਬਕ ਬੱਚੇ ਵਿੱਚ ਭਾਸ਼ਾ ਸਿੱਖਣ ਦਾ ਜਨਮਜਾਤ ਯੰਤਰ LAD (Language Acquisition Device) ਹੁੰਦਾ ਹੈ।',
                'ਸਟੀਫਨ ਕ੍ਰੈਸ਼ਨ ਦੇ 5 ਸਿਧਾਂਤ: ਅਰਜਨ ਬਨਾਮ ਸਿੱਖਿਆ, ਕੁਦਰਤੀ ਕ੍ਰਮ, ਮਾਨੀਟਰ, ਸਮਝਣਯੋਗ ਇਨਪੁਟ (i + 1) ਅਤੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਫਿਲਟਰ।'
            ],
            hi: [
                'कोठारी आयोग (1964-66) ने अंग्रेज़ी को अनिवार्य लाइब्रेरी भाषा माना।',
                'GTM विधि निगमन व्याकरण पढ़ाती है तथा मौखिक संप्रेषण की उपेक्षा करती है।',
                'प्रत्यक्ष विधि में मातृभाषा का प्रयोग पूर्णतः वर्जित होता है।',
                'डॉ. सी.जे. डॉडसन की द्विभाषी विधि में केवल शिक्षक मातृभाषा का प्रयोग करता है, छात्र केवल अंग्रेज़ी में अभ्यास करते हैं।',
                'CLT विधि संप्रेषणात्मक सामर्थ्य (Fluency) तथा वास्तविक जीवन की गतिविधियों पर बल देती है।',
                'पठन उप-कौशल: स्किमिंग (मुख्य सार) तथा स्कैनिंग (विशिष्ट तथ्य खोजना)।',
                'नोआम चॉम्स्की के अनुसार बालकों में जन्मजात भाषा अर्जन यंत्र (LAD) होता है।',
                'स्टीफन क्रैशन के 5 सिद्धांत: अर्जन बनाम अधिगम, प्राकृतिक क्रम, मॉनिटर, बोधगम्य निवेश (i + 1) एवं भावात्मक फ़िल्टर।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'GTM: Rule -> Translation; Neglects speaking; Unit = Word/Sentence.',
                'Direct Method: Monolingual English; Grammar = Inductive; No L1 allowed.',
                'Bilingual Method (Dr. Dodson): Teacher uses L1; Students practice in L2; Sentence level equivalent.',
                'CLT Core: Dell Hymes; Fluency > Accuracy; Real tasks; Errors = natural.',
                'Reading: Skimming = Gist/Summary; Scanning = Specific target datum.',
                'Chomsky: LAD + Universal Grammar (Biological/Innate); Disproved Skinner.',
                'Krashen Matrix: i + 1 (Input); Low Filter (Low anxiety); Monitor (Conscious rule editor).'
            ],
            pa: [
                'GTM: ਨਿਯਮ -> ਅਨੁਵਾਦ; ਬੋਲਣਾ ਅਣਗੌਲਿਆ; ਸ਼ਬਦ ਕੇਂਦਰਿਤ।',
                'ਡਾਇਰੈਕਟ ਵਿਧੀ: ਸਿਰਫ਼ ਅੰਗਰੇਜ਼ੀ; ਵਿਆਕਰਨ ਆਗਮਨ; ਮਾਤ-ਭਾਸ਼ਾ ਤੇ ਪਾਬੰਦੀ।',
                'ਦੋ-ਭਾਸ਼ੀ ਵਿਧੀ: ਅਧਿਆਪਕ ਪੰਜਾਬੀ ਵਰਤ ਸਕਦਾ ਹੈ; ਵਿਦਿਆਰਥੀ ਸਿਰਫ਼ ਅੰਗਰੇਜ਼ੀ ਬੋਲਦੇ ਹਨ।',
                'CLT: ਡੇਲ ਹਾਈਮਸ; ਰਵਾਨਗੀ > ਸ਼ੁੱਧਤਾ; ਅਸਲ ਜੀਵਨ ਗਤੀਵਿਧੀਆਂ।',
                'ਪੜ੍ਹਨਾ: ਸਕਿਮਿੰਗ = ਸਾਰ/ਮੁੱਖ ਭਾਵ; ਸਕੈਨਿੰਗ = ਖ਼ਾਸ ਜਾਣਕਾਰੀ ਲੱਭਣਾ।',
                'ਚੋਮਸਕੀ: LAD + ਯੂਨੀਵਰਸਲ ਗ੍ਰਾਮਰ (ਜਨਮਜਾਤ ਜੈਵਿਕ ਸ਼ਕਤੀ)।',
                'ਕ੍ਰੈਸ਼ਨ: i + 1 ਇਨਪੁਟ; ਘੱਟ ਤਣਾਅ (Low filter); ਮਾਨੀਟਰ ਨਿਯਮ।'
            ],
            hi: [
                'GTM: नियम -> अनुवाद; मौखिक उपेक्षित; शब्द-आधारित।',
                'प्रत्यक्ष विधि: केवल अंग्रेज़ी; आगमन व्याकरण; मातृभाषा वर्जित।',
                'द्विभाषी विधि: शिक्षक मातृभाषा का प्रयोग करे; छात्र केवल अंग्रेज़ी में अभ्यास करें।',
                'CLT: डेल हाइम्स; प्रवाह > व्याकरणिक शुद्धता; वास्तविक कार्य।',
                'पठन: स्किमिंग = केंद्रीय सार; स्कैनिंग = विशिष्ट तथ्य।',
                'चॉम्स्की: LAD + सार्वभौमिक व्याकरण (जन्मजात क्षमता)।',
                'क्रैशन: i + 1 निवेश; निम्न फ़िल्टर (तनावमुक्त परिवेश); मॉनिटर नियम।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: In Dr. Dodson’s Bilingual Method, both teacher and students freely chat in the mother tongue. Correction: Only the teacher is permitted to use the mother tongue to swiftly clarify meaning; pupils must respond and practice strictly in English.',
                'Misconception: Skimming and Scanning are interchangeable terms for fast reading. Correction: Skimming is reading rapidly to grasp the overall gist or central theme of a text; Scanning is searching rapidly for a specific, isolated piece of factual data.',
                'Misconception: According to Krashen, studying grammar rules consciously is the fastest way to acquire communicative fluency. Correction: Krashen proved that conscious learning acts only as an editor (Monitor); true fluency comes entirely from subconscious acquisition via comprehensible input ($i + 1$) in a low-anxiety environment.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਦੋ-ਭਾਸ਼ੀ ਵਿਧੀ (Bilingual Method) ਵਿੱਚ ਅਧਿਆਪਕ ਅਤੇ ਵਿਦਿਆਰਥੀ ਦੋਵੇਂ ਆਪਸ ਵਿੱਚ ਮਾਤ-ਭਾਸ਼ਾ ਵਿੱਚ ਗੱਲਾਂ ਕਰਦੇ ਹਨ। ਸੁਧਾਰ: ਸਿਰਫ਼ ਅਧਿਆਪਕ ਔਖਾ ਅਰਥ ਸਮਝਾਉਣ ਲਈ ਮਾਤ-ਭਾਸ਼ਾ ਵਰਤਦਾ ਹੈ; ਵਿਦਿਆਰਥੀ ਹਮੇਸ਼ਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹੀ ਅਭਿਆਸ ਕਰਦੇ ਹਨ।',
                'ਭੁਲੇਖਾ: ਸਕਿਮਿੰਗ ਅਤੇ ਸਕੈਨਿੰਗ ਇੱਕੋ ਜਿਹੀਆਂ ਚੀਜ਼ਾਂ ਹਨ। ਸੁਧਾਰ: ਸਕਿਮਿੰਗ ਪੂਰੇ ਪਾਠ ਦਾ ਕੇਂਦਰੀ ਭਾਵ (Gist) ਸਮਝਣ ਲਈ ਹੁੰਦੀ ਹੈ; ਸਕੈਨਿੰਗ ਕਿਸੇ ਖ਼ਾਸ ਜਾਣਕਾਰੀ ਜਾਂ ਤਾਰੀਖ਼ ਨੂੰ ਲੱਭਣ ਲਈ ਹੁੰਦੀ ਹੈ।',
                'ਭੁਲੇਖਾ: ਕ੍ਰੈਸ਼ਨ ਮੁਤਾਬਕ ਵਿਆਕਰਨ ਦੇ ਨਿਯਮ ਰਟਣ ਨਾਲ ਅੰਗਰੇਜ਼ੀ ਬੋਲਣ ਵਿੱਚ ਰਵਾਨਗੀ ਆਉਂਦੀ ਹੈ। ਸੁਧਾਰ: ਕ੍ਰੈਸ਼ਨ ਅਨੁਸਾਰ ਚੇਤਨ ਵਿਆਕਰਨ ਸਿਰਫ਼ ਮਾਨੀਟਰ (ਸੰਪਾਦਕ) ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ; ਰਵਾਨਗੀ ਸਮਝਣਯੋਗ ਇਨਪੁਟ (i + 1) ਅਤੇ ਤਣਾਅ-ਮੁਕਤ ਮਾਹੌਲ ਵਿੱਚ ਅਚੇਤ ਗ੍ਰਹਿਣ (Acquisition) ਰਾਹੀਂ ਆਉਂਦੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: द्विभाषी विधि में शिक्षक एवं छात्र दोनों मातृभाषा में वार्तालाप करते हैं। सुधार: केवल शिक्षक कठिन अर्थ स्पष्ट करने हेतु मातृभाषा का प्रयोग करता है; छात्र पूर्णतः अंग्रेज़ी में ही अभ्यास करते हैं।',
                'भ्रांति: स्किमिंग और स्कैनिंग दोनों एक समान पठन तकनीकें हैं। सुधार: स्किमिंग संपूर्ण पाठ का केंद्रीय सार जानने हेतु की जाती है; स्कैनिंग किसी विशिष्ट तथ्य को खोजने हेतु की जाती है।',
                'भ्रांति: क्रैशन के अनुसार व्याकरण के नियम याद करने से बोलने में प्रवाह आता है। सुधार: क्रैशन के अनुसार सचेत व्याकरण केवल मॉनिटर (संपादक) है; वास्तविक प्रवाह तनावमुक्त परिवेश में बोधगम्य निवेश (i + 1) से अचेतन अर्जन द्वारा आता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'In a Class 7 classroom in Jalandhar, an English teacher gives students a railway reservation chart and asks them to find the coach and berth number of a passenger named "Harpreet Singh". Five minutes later, she gives them a travel blog about Himachal Pradesh and asks them to state in one sentence what the entire article is mostly about. Identify the two specific reading sub-skills being exercised in these two respective tasks.',
                    pa: 'ਜਲੰਧਰ ਦੇ ਇੱਕ ਸਕੂਲ ਵਿੱਚ ਅਧਿਆਪਕ 7ਵੀਂ ਜਮਾਤ ਦੇ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਇੱਕ ਰੇਲਵੇ ਰਿਜ਼ਰਵੇਸ਼ਨ ਚਾਰਟ ਦੇ ਕੇ "ਹਰਪ੍ਰੀਤ ਸਿੰਘ" ਨਾਮੀ ਯਾਤਰੀ ਦਾ ਡੱਬਾ ਅਤੇ ਸੀਟ ਨੰਬਰ ਲੱਭਣ ਲਈ ਕਹਿੰਦਾ ਹੈ। ਪੰਜ ਮਿੰਟ ਬਾਅਦ, ਉਹ ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਬਾਰੇ ਇੱਕ ਲੇਖ ਦੇ ਕੇ ਪੁੱਛਦਾ ਹੈ ਕਿ ਇਹ ਪੂਰਾ ਲੇਖ ਮੁੱਖ ਤੌਰ ਤੇ ਕਿਸ ਬਾਰੇ ਹੈ (ਇੱਕ ਵਾਕ ਵਿੱਚ ਦੱਸੋ)। ਇਹਨਾਂ ਦੋਵਾਂ ਕਾਰਜਾਂ ਵਿੱਚ ਪੜ੍ਹਨ ਦੇ ਕਿਹੜੇ ਦੋ ਵਿਸ਼ੇਸ਼ ਉਪ-ਕੌਸ਼ਲ ਵਰਤੇ ਗਏ ਹਨ?',
                    hi: 'जालंधर के एक विद्यालय में शिक्षक कक्षा 7 के छात्रों को रेलवे आरक्षण चार्ट देकर "हरप्रीत सिंह" नामक यात्री का कोच व सीट नंबर खोजने को कहता है। इसके बाद वह हिमाचल प्रदेश पर एक यात्रा-वृत्तांत देकर पूछता है कि यह संपूर्ण लेख मुख्य रूप से किस विषय पर है। इन दोनों कार्यों में प्रयुक्त दो विशिष्ट पठन उप-कौशलों की पहचान कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: In the first task, students are looking for a specific, isolated piece of factual data (passenger name and berth number) without reading the entire document line by line. This is Scanning.',
                        'Step 2: In the second task, students read through the travel article quickly to extract the overall central theme or main idea (gist) of the text. This is Skimming.'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਪਹਿਲੇ ਕੰਮ ਵਿੱਚ ਵਿਦਿਆਰਥੀ ਪੂਰੇ ਚਾਰਟ ਨੂੰ ਪੜ੍ਹੇ ਬਿਨਾਂ ਇੱਕ ਖ਼ਾਸ ਜਾਣਕਾਰੀ (ਨਾਮ ਅਤੇ ਸੀਟ ਨੰਬਰ) ਲੱਭ ਰਹੇ ਹਨ। ਇਸ ਨੂੰ ਸਕੈਨਿੰਗ (Scanning) ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
                        'ਕਦਮ 2: ਦੂਜੇ ਕੰਮ ਵਿੱਚ ਵਿਦਿਆਰਥੀ ਪੂਰੇ ਲੇਖ ਦਾ ਮੁੱਖ ਸਾਰ ਜਾਂ ਕੇਂਦਰੀ ਭਾਵ ਜਾਣਨ ਲਈ ਤੇਜ਼ੀ ਨਾਲ ਪੜ੍ਹ ਰਹੇ ਹਨ। ਇਸ ਨੂੰ ਸਕਿਮਿੰਗ (Skimming) ਕਿਹਾ ਜਾਂਦਾ ਹੈ।'
                    ],
                    hi: [
                        'चरण 1: पहले कार्य में छात्र संपूर्ण पाठ पढ़े बिना एक विशिष्ट तथ्य (नाम व सीट संख्या) खोज रहे हैं। यह स्कैनिंग (Scanning) है।',
                        'चरण 2: दूसरे कार्य में छात्र संपूर्ण लेख का मुख्य सार या केंद्रीय भाव समझने हेतु तीव्र पठन कर रहे हैं। यह स्किमिंग (Skimming) है।'
                    ]
                },
                finalAnswer: {
                    en: 'Task 1 = Scanning; Task 2 = Skimming.',
                    pa: 'ਕਾਰਜ 1 = ਸਕੈਨਿੰਗ (Scanning); ਕਾਰਜ 2 = ਸਕਿਮਿੰਗ (Skimming)।',
                    hi: 'कार्य 1 = स्कैनिंग (Scanning); कार्य 2 = स्किमिंग (Skimming)।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-eng-1',
                question: {
                    en: 'What are the three core principles of Dr. C.J. Dodson’s Bilingual Method?',
                    pa: 'ਡਾ. ਸੀ.ਜੇ. ਡੌਡਸਨ ਦੀ ਦੋ-ਭਾਸ਼ੀ ਵਿਧੀ (Bilingual Method) ਦੇ ਤਿੰਨ ਮੁੱਖ ਨਿਯਮ ਕੀ ਹਨ?',
                    hi: 'डॉ. सी.जे. डॉडसन की द्विभाषी विधि (Bilingual Method) के तीन मुख्य नियम क्या हैं?'
                },
                answer: {
                    en: '1. Only the teacher uses L1; 2. Students practice strictly in L2 (English); 3. Meaning is given at sentence level, not word-for-word translation.',
                    pa: '1. ਸਿਰਫ਼ ਅਧਿਆਪਕ ਮਾਤ-ਭਾਸ਼ਾ ਵਰਤ ਸਕਦਾ ਹੈ; 2. ਵਿਦਿਆਰਥੀ ਸਿਰਫ਼ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਅਭਿਆਸ ਕਰਦੇ ਹਨ; 3. ਵਾਕ ਪੱਧਰ ਤੇ ਭਾਵ ਸਮਝਾਇਆ ਜਾਂਦਾ ਹੈ, ਸ਼ਬਦ-ਦਰ-ਸ਼ਬਦ ਅਨੁਵਾਦ ਨਹੀਂ।',
                    hi: '1. केवल शिक्षक मातृभाषा का प्रयोग करे; 2. छात्र पूर्णतः अंग्रेज़ी में अभ्यास करें; 3. वाक्य स्तर पर भावार्थ, न कि शब्दशः अनुवाद।'
                }
            },
            {
                id: 'fc-eng-2',
                question: {
                    en: 'What does Stephen Krashen’s Input Hypothesis (i + 1) state?',
                    pa: 'ਸਟੀਫਨ ਕ੍ਰੈਸ਼ਨ ਦਾ ਸਮਝਣਯੋਗ ਇਨਪੁਟ ਸਿਧਾਂਤ (i + 1) ਕੀ ਦੱਸਦਾ ਹੈ?',
                    hi: 'स्टीफन क्रैशन का बोधगम्य निवेश सिद्धांत (i + 1) क्या बताता है?'
                },
                answer: {
                    en: 'Language is acquired when learners receive comprehensible input containing linguistic structures one step beyond their current competence level ($i + 1$).',
                    pa: 'ਭਾਸ਼ਾ ਉਦੋਂ ਗ੍ਰਹਿਣ ਹੁੰਦੀ ਹੈ ਜਦੋਂ ਬੱਚੇ ਨੂੰ ਉਸ ਦੇ ਮੌਜੂਦਾ ਸਮਝ ਪੱਧਰ (i) ਤੋਂ ਇੱਕ ਕਦਮ ਅੱਗੇ (i + 1) ਵਾਲੀ ਸਮਝਣਯੋਗ ਭਾਸ਼ਾਈ ਸਮੱਗਰੀ ਮਿਲਦੀ ਹੈ।',
                    hi: 'भाषा अर्जन तब होता है जब शिक्षार्थी को उसके वर्तमान स्तर (i) से एक कदम आगे (i + 1) की बोधगम्य सामग्री प्राप्त होती है।'
                }
            },
            {
                id: 'fc-eng-3',
                question: {
                    en: 'How does Chomsky’s Language Acquisition Device (LAD) counter Skinnerian Behaviorism?',
                    pa: 'ਨੋਅਮ ਚੋਮਸਕੀ ਦਾ LAD ਸਿਧਾਂਤ ਸਕਿਨਰ ਦੇ ਵਿਵਹਾਰਵਾਦ ਨੂੰ ਕਿਵੇਂ ਰੱਦ ਕਰਦਾ ਹੈ?',
                    hi: 'नोआम चॉम्स्की का LAD सिद्धांत स्किनर के व्यवहारवाद का खंडन कैसे करता है?'
                },
                answer: {
                    en: 'Skinner viewed language as mechanical habit formation; Chomsky proved humans possess an innate biological LAD capable of creatively generating infinite novel sentences from finite rules.',
                    pa: 'ਸਕਿਨਰ ਭਾਸ਼ਾ ਨੂੰ ਰੱਟੇ ਵਾਲੀ ਆਦਤ ਮੰਨਦਾ ਸੀ; ਚੋਮਸਕੀ ਨੇ ਸਿੱਧ ਕੀਤਾ ਕਿ ਮਨੁੱਖ ਕੋਲ ਜਨਮਜਾਤ ਜੈਵਿਕ ਯੰਤਰ (LAD) ਹੈ ਜੋ ਸੀਮਤ ਨਿਯਮਾਂ ਤੋਂ ਅਣਗਿਣਤ ਨਵੇਂ ਵਾਕ ਬਣਾਉਣ ਦੀ ਸਮਰੱਥਾ ਰੱਖਦਾ ਹੈ।',
                    hi: 'स्किनर भाषा को यांत्रिक आदत मानते थे; चॉम्स्की ने सिद्ध किया कि मानव में जन्मजात जैविक LAD होता है जो सीमित नियमों से अनंत नवीन वाक्य रचने की क्षमता रखता है।'
                }
            }
        ]
    },

    // =========================================================================
    // 4. MATHEMATICS PEDAGOGY (pstet-math-pedagogy)
    // =========================================================================
    {
        topicId: 'pstet-math-pedagogy',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 15,
            editorialNote: 'Comprehensive trilingual blueprint for PSTET Paper 1 & 2 Mathematics Pedagogy: Nature of Mathematics, NCF 2005 & NEP 2020 Mathematisation Goals, Teaching Methods (Inductive-Deductive, Analytic-Synthetic, Heuristic, Problem-Solving), Error Analysis & Newman Diagnostics, TLM Manipulatives (Abacus, Geoboard, Napier Bones, Tangram).'
        },
        bookRefs: [
            {
                title: 'Pedagogy of Mathematics (Teaching of Mathematics)',
                author: 'Dr. A.K. Kulshrestha / Dr. K.S. Sidhu',
                chapter: 'Nature of Mathematics, Aims & Objectives, Methods of Teaching & Error Analysis',
                relevance: 'Classic benchmark textbook for B.Ed & D.El.Ed mathematics pedagogy.'
            },
            {
                title: 'Position Paper: National Focus Group on Teaching of Mathematics',
                author: 'NCERT / National Curriculum Framework (NCF 2005)',
                chapter: 'Mathematisation of Child’s Thought Processes, Manipulatives and Overcoming Fear',
                relevance: 'Foundational statutory reference for PSTET Paper 1 and 2 mathematics curriculum.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Nature & Aims of School Mathematics]
1. **Nature of Mathematics:**
   - **Logical & Abstract:** Deals with abstract conceptual structures, patterns, spatial relationships, and quantitative deduction.
   - **Hierarchical & Cumulative:** Concepts build strictly upon foundational prerequisites (e.g. division cannot be mastered without subtraction and place value).
   - **Precise & Symbolic:** Universal, concise symbolic language free from linguistic ambiguity.
   - **Deductive & Systematic:** Operates via axioms, postulates, definitions, and rigorous proofs.
2. **Place in Curriculum (Kothari Commission 1964–66):**
   - Compulsory core subject for all students during the first 10 years of general schooling.
   - Practical utility (daily commercial numeracy), intellectual discipline (logical rigor), and aesthetic beauty (patterns, symmetry).
3. **Aims per NCF 2005 & NEP 2020:**
   - **NCF 2005 Core Vision:** Shift from rote computational algorithms to **"Mathematisation of the child's thought processes"**.
     - *Narrow Aim:* Producing employable citizens with basic numerical literacy (counting, measurement, percentage, basic arithmetic).
     - *Higher Aim:* Developing problem-solving abilities, abstract thinking, mathematical reasoning, formulating conjectures, and handling spatial relationships.
   - **NEP 2020 Directives:** Urgent national mission (**NIPUN Bharat**) to ensure every child achieves **Foundational Literacy and Numeracy (FLN)** by Grade 3; experiential math, toy-based learning, overcoming math phobia.

---

### [Level I: Intermediate — Methods of Teaching Mathematics]
1. **Inductive vs Deductive Method:**
   - **Inductive Method:** **Concrete to Abstract, Particular to General, Example to Formula/Rule**.
     - Process: Pupils measure angles of 4 different triangles, observe the sum is always $180^\\circ$, and induce the angle-sum property.
     - Merits: Child-centric discovery; psychological; builds deep conceptual retention. Demerit: Time-consuming.
   - **Deductive Method:** **Abstract to Concrete, General Rule/Formula to Particular Application**.
     - Process: Teacher gives formula $A = \\pi r^2$ and students mechanically calculate areas of various circles.
     - Merits: Fast, efficient for practice and syllabus coverage. Demerit: Promotes passive rote memorization.
   - **Optimal Pedagogical Synthesis:** **Inductive-Deductive Method** (discover formula inductively, then practice deductively).
2. **Analytic vs Synthetic Method:**
   - **Analytic Method:** **Unknown to Known; breaking down the problem**.
     - Starts with what is to be proved and works backward: *"To prove $X$, what must be true? To have that, what prerequisite is needed?"*
     - Fosters genuine mathematical inquiry and deep conceptual understanding; best for geometric proofs.
   - **Synthetic Method:** **Known to Unknown; assembling facts**.
     - Starts with given hypotheses and constructs forward to the conclusion.
     - Neat, concise, standard textbook format, but leaves the underlying discovery process mysterious.
3. **Heuristic Method (H.E. Armstrong):**
   - Derived from Greek *Heuriskein* ("I find out / discover").
   - Student is placed in the position of an original researcher/discoverer; teacher acts only as a guide/facilitator.
4. **George Pólya’s Problem-Solving Method (4 Steps):**
   - **1. Understand the Problem:** What is the unknown? What are the given data?
   - **2. Devise a Plan:** Look for patterns, draw a sketch, recall a related problem, introduce auxiliary elements.
   - **3. Carry Out the Plan:** Execute calculation steps with precision.
   - **4. Look Back (Reflection):** Check the result, verify the argument, explore alternative solution paths.

---

### [Level A: Advanced — Mathematical Misconceptions, Diagnostics & TLM Manipulatives]
1. **Common Mathematical Misconceptions & Error Patterns:**
   - **Place Value & Regrouping:** Writing numbers phonetically (e.g. *three hundred five* written as $3005$ or $35$); treating zero as an empty space rather than a place-holder.
   - **Fraction Misconceptions (Whole Number Bias):** Believing $\\frac{1}{4} > \\frac{1}{2}$ because $4 > 2$; adding fractions incorrectly by summing numerators and denominators ($\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$).
   - **Decimal Errors:** Believing $0.125 > 0.5$ because $125 > 5$; misaligning decimal points in vertical addition ($2.5 + 1.25 = 1.50$).
   - **Spatial Misconceptions:** Believing a tilted square is no longer a square but a "diamond"; confusing **Perimeter** (boundary length) with **Area** (enclosed 2D region).
2. **Newman’s Error Analysis (NEA — 5 Diagnostic Stages):**
   - 1. Reading $\\to$ 2. Comprehension $\\to$ 3. Mathematical Transformation $\\to$ 4. Process Skills $\\to$ 5. Encoding. Enables teachers to diagnose the exact breakdown point in mathematical word problems.
3. **Teaching Learning Materials (TLM) & Manipulatives:**
   - **Abacus (ਗਿਣਤਾਰਾ):** Bead frame ideal for place value, column alignment, regrouping in addition/subtraction, and tactile math for visually impaired learners.
   - **Geoboard (ਜੀਓਬੋਰਡ):** Pegboard with rubber bands used for exploring **2D geometric shapes, perimeter, area, right angles, polygons, and symmetry**.
   - **Napier’s Bones (ਨੇਪੀਅਰ ਹੱਡੀਆਂ):** Set of numbered rods invented by John Napier (1617) for performing **multi-digit multiplication and division** using lattice addition.
   - **Tangram (ਟੈਨਗ੍ਰਾਮ):** Ancient Chinese 7-piece dissection puzzle (5 triangles, 1 square, 1 parallelogram) used for **spatial reasoning, geometric transformation, and area conservation**.
   - **Base-10 (Dienes) Blocks:** Unit cubes (ones), rods (tens), flats (hundreds), cubes (thousands) for concrete conceptualization of decimals and place value.
   - **Dot Paper & Grid Paper:** Concrete visualization of decimal multiplication (e.g. $0.3 \\times 0.4 = 0.12$), tessellations, and coordinates.`,

            pa: `### [Level B: Basic — ਗਣਿਤ ਦਾ ਸੁਭਾਅ ਅਤੇ ਸਕੂਲੀ ਉਦੇਸ਼]
1. **ਗਣਿਤ ਦਾ ਸੁਭਾਅ:**
   - **ਤਾਰਕਿਕ ਅਤੇ ਅਮੂਰਤ:** ਗਣਿਤ ਅਮੂਰਤ ਸੰਕਲਪਾਂ, ਤਰਕਸ਼ੀਲ ਸੋਚ ਅਤੇ ਨਿਯਮਾਂ ਦਾ ਵਿਗਿਆਨ ਹੈ।
   - **ਲੜੀਵਾਰ ਅਤੇ ਸੰਚਿਤ (Hierarchical):** ਗਣਿਤ ਦੇ ਅਗਲੇ ਸੰਕਲਪ ਪਿਛਲੇ ਸੰਕਲਪਾਂ ਤੇ ਨਿਰਭਰ ਕਰਦੇ ਹਨ (ਜਿਵੇਂ ਬਿਨਾਂ ਘਟਾਓ ਅਤੇ ਸਥਾਨਕ ਮੁੱਲ ਦੇ ਵੰਡ ਨਹੀਂ ਸਿੱਖੀ ਜਾ ਸਕਦੀ)।
   - **ਸੰਖੇਪ ਅਤੇ ਪ੍ਰਤੀਕਾਤਮਕ:** ਇਸ ਦੀ ਆਪਣੀ ਸੰਸਾਰ-ਵਿਆਪੀ ਪ੍ਰਤੀਕਾਤਮਕ ਭਾਸ਼ਾ ਹੈ।
   - **ਨਿਗਮਨਾਤਮਕ ਪ੍ਰਣਾਲੀ:** ਸਵੈ-ਸਿੱਧੀਆਂ (Axioms) ਅਤੇ ਪਰਿਭਾਸ਼ਾਵਾਂ ਤੇ ਆਧਾਰਿਤ ਤਰਕ।
2. **ਸਕੂਲ ਪਾਠਕ੍ਰਮ ਵਿੱਚ ਸਥਾਨ:**
   - ਕੋਠਾਰੀ ਕਮਿਸ਼ਨ (1964-66) ਅਨੁਸਾਰ ਪਹਿਲੀ ਤੋਂ ਦਸਵੀਂ ਜਮਾਤ ਤੱਕ ਗਣਿਤ ਸਾਰੇ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਲਾਜ਼ਮੀ ਵਿਸ਼ਾ ਹੈ।
3. **NCF 2005 ਅਤੇ NEP 2020 ਦੇ ਉਦੇਸ਼:**
   - **NCF 2005 ਦਾ ਮੁੱਖ ਟੀਚਾ:** ਕੇਵਲ ਫਾਰਮੂਲੇ ਰਟਣ ਦੀ ਥਾਂ **"ਬੱਚੇ ਦੀਆਂ ਸੋਚ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦਾ ਗਣਿਤੀਕਰਨ (Mathematisation of child's thought processes)"** ਕਰਨਾ।
     - *ਸੀਮਤ ਉਦੇਸ਼:* ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਲਈ ਗਣਨਾਤਮਕ ਸਾਖਰਤਾ (ਜੋੜ, ਘਟਾਓ, ਮਿਣਤੀ, ਪ੍ਰਤੀਸ਼ਤ)।
     - *ਉੱਚੇਰਾ ਉਦੇਸ਼:* ਸਮੱਸਿਆ-ਹੱਲ ਕਰਨ ਦੀ ਯੋਗਤਾ, ਅਮੂਰਤ ਚਿੰਤਨ, ਤਾਰਕਿਕ ਦਲੀਲ ਅਤੇ ਅਨੁਮਾਨ ਲਗਾਉਣਾ।
   - **NEP 2020:** **ਨਿਪੁੰਨ ਭਾਰਤ (NIPUN Bharat)** ਮਿਸ਼ਨ ਅਧੀਨ ਕਲਾਸ 3 ਤੱਕ ਬੁਨਿਆਦੀ ਸੰਖਿਆ ਗਿਆਨ (FLN) ਯਕੀਨੀ ਬਣਾਉਣਾ ਅਤੇ ਗਣਿਤ ਦਾ ਡਰ ਦੂਰ ਕਰਨਾ।

---

### [Level I: Intermediate — ਗਣਿਤ ਅਧਿਆਪਨ ਦੀਆਂ ਵਿਧੀਆਂ]
1. **ਆਗਮਨ ਬਨਾਮ ਨਿਗਮਨ ਵਿਧੀ (Inductive vs Deductive):**
   - **ਆਗਮਨ ਵਿਧੀ:** **ਸਥੂਲ ਤੋਂ ਅਮੂਰਤ, ਵਿਸ਼ੇਸ਼ ਤੋਂ ਆਮ, ਉਦਾਹਰਨ ਤੋਂ ਫਾਰਮੂਲੇ/ਨਿਯਮ ਵੱਲ**।
     - ਬੱਚੇ ਤਿੰਨ-ਚਾਰ ਤਿਕੋਣਾਂ ਦੇ ਕੋਣ ਮਾਪ ਕੇ ਵੇਖਦੇ ਹਨ ਕਿ ਜੋੜ ਹਮੇਸ਼ਾ $180^\\circ$ ਆਉਂਦਾ ਹੈ, ਅਤੇ ਖ਼ੁਦ ਨਿਯਮ ਕੱਢਦੇ ਹਨ। ਇਹ ਵਿਗਿਆਨਕ ਅਤੇ ਮਨੋਵਿਗਿਆਨਕ ਹੈ।
   - **ਨਿਗਮਨ ਵਿਧੀ:** **ਅਮੂਰਤ ਤੋਂ ਸਥੂਲ, ਨਿਯਮ/ਫਾਰਮੂਲੇ ਤੋਂ ਉਦਾਹਰਨ ਵੱਲ**।
     - ਅਧਿਆਪਕ ਸਿੱਧਾ ਚੱਕਰ ਦੇ ਖੇਤਰਫਲ ਦਾ ਫਾਰਮੂਲਾ $A = \\pi r^2$ ਦੱਸ ਕੇ ਸਵਾਲ ਹੱਲ ਕਰਵਾਉਂਦਾ ਹੈ। ਇਹ ਤੇਜ਼ ਹੈ ਪਰ ਰੱਟੇ ਨੂੰ ਵਧਾਉਂਦੀ ਹੈ।
   - **ਸਰਵੋਤਮ ਢੰਗ:** ਆਗਮਨ-ਨਿਗਮਨ ਸੁਮੇਲ (ਪਹਿਲਾਂ ਆਗਮਨ ਨਾਲ ਫਾਰਮੂਲਾ ਕੱਢੋ, ਫਿਰ ਨਿਗਮਨ ਨਾਲ ਅਭਿਆਸ ਕਰੋ)।
2. **ਵਿਸ਼ਲੇਸ਼ਣ ਬਨਾਮ ਸੰਸਲੇਸ਼ਣ ਵਿਧੀ (Analytic vs Synthetic):**
   - **ਵਿਸ਼ਲੇਸ਼ਣ ਵਿਧੀ:** **ਅਗਿਆਤ ਤੋਂ ਗਿਆਤ ਵੱਲ (Unknown to Known)**; ਸਮੱਸਿਆ ਨੂੰ ਛੋਟੇ-ਛੋਟੇ ਹਿੱਸਿਆਂ ਵਿੱਚ ਤੋੜਨਾ।
     - *"ਜੋ ਸਿੱਧ ਕਰਨਾ ਹੈ, ਉਸ ਲਈ ਕੀ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ?"* ਜਿਓਮੈਟਰੀ ਦੇ ਸਿਧਾਂਤਾਂ ਲਈ ਸਰਵੋਤਮ।
   - **ਸੰਸਲੇਸ਼ਣ ਵਿਧੀ:** **ਗਿਆਤ ਤੋਂ ਅਗਿਆਤ ਵੱਲ (Known to Unknown)**; ਗਿਆਤ ਤੱਥਾਂ ਨੂੰ ਜੋੜ ਕੇ ਨਤੀਜੇ ਤੱਕ ਪਹੁੰਚਣਾ। ਕਿਤਾਬੀ ਰੂਪ ਵਿੱਚ ਛੋਟੀ ਹੈ ਪਰ ਖੋਜ ਭਾਵਨਾ ਨਹੀਂ ਜਗਾਉਂਦੀ।
3. **ਹਿਊਰਿਸਟਿਕ ਵਿਧੀ (Heuristic Method - H.E. Armstrong):**
   - ਯੂਨਾਨੀ ਸ਼ਬਦ 'Heuriskein' (ਮੈਂ ਖੋਜਦਾ ਹਾਂ) ਤੋਂ ਬਣਿਆ। ਵਿਦਿਆਰਥੀ ਨੂੰ ਇੱਕ ਖੋਜੀ/ਵਿਗਿਆਨੀ ਦੀ ਥਾਂ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।
4. **ਜਾਰਜ ਪੋਲੀਆ (George Polya) ਦੇ ਸਮੱਸਿਆ ਹੱਲ ਦੇ 4 ਪੜਾਅ:**
   - 1. ਸਮੱਸਿਆ ਨੂੰ ਸਮਝਣਾ $\\to$ 2. ਯੋਜਨਾ ਬਣਾਉਣਾ $\\to$ 3. ਯੋਜਨਾ ਲਾਗੂ ਕਰਨਾ $\\to$ 4. ਪੜਚੋਲ/ਪੁਸ਼ਟੀ ਕਰਨਾ (Looking Back)।

---

### [Level A: Advanced — ਗਣਿਤਕ ਭੁਲੇਖੇ, ਤਰੁੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ TLM ਸੰਦ]
1. **ਗਣਿਤ ਦੇ ਆਮ ਭੁਲੇਖੇ (Misconceptions):**
   - **ਸਥਾਨਕ ਮੁੱਲ ਦਾ ਭੁਲੇਖਾ:** ਤਿੰਨ ਸੌ ਪੰਜ ਨੂੰ 3005 ਜਾਂ 35 ਲਿਖ ਦੇਣਾ। ਸਿਫ਼ਰ ਨੂੰ ਸਿਰਫ਼ ਖ਼ਾਲੀ ਥਾਂ ਸਮਝਣਾ।
   - **ਭਿੰਨਾਂ ਦਾ ਭੁਲੇਖਾ (ਪੂਰਨ ਸੰਖਿਆ ਪੱਖਪਾਤ):** ਇਹ ਸੋਚਣਾ ਕਿ $\\frac{1}{4} > \\frac{1}{2}$ ਕਿਉਂਕਿ $4 > 2$; ਅੰਸ਼ ਵਿੱਚ ਅੰਸ਼ ਅਤੇ ਹਰ ਵਿੱਚ ਹਰ ਜੋੜ ਦੇਣਾ ($\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$)।
   - **ਦਸ਼ਮਲਵ ਦਾ ਭੁਲੇਖਾ:** $0.125 > 0.5$ ਮੰਨਣਾ ਕਿਉਂਕਿ $125 > 5$ ਹੈ।
   - **ਆਕਾਰ ਅਤੇ ਜਿਓਮੈਟਰੀ:** ਵਰਗ ਨੂੰ ਥੋੜ੍ਹਾ ਘੁਮਾਉਣ ਤੇ ਉਸ ਨੂੰ "ਡਾਇਮੰਡ" ਸਮਝਣਾ ਅਤੇ ਵਰਗ ਨਾ ਮੰਨਣਾ; ਘੇਰੇ (Perimeter) ਅਤੇ ਖੇਤਰਫਲ (Area) ਵਿੱਚ ਭੁਲੇਖਾ ਖਾਣਾ।
2. **ਨਿਊਮੈਨ ਦਾ ਤਰੁੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ (Newman's Error Analysis):**
   - ਪੜ੍ਹਨਾ $\\to$ ਸਮਝਣਾ $\\to$ ਗਣਿਤਕ ਰੂਪਾਂਤਰਨ $\\to$ ਗਣਨਾ ਕੌਸ਼ਲ $\\to$ ਉੱਤਰ ਲਿਖਣਾ।
3. **ਸਿੱਖਣ ਸਹਾਇਕ ਸਮੱਗਰੀ (TLM Manipulatives):**
   - **ਗਿਣਤਾਰਾ (Abacus):** ਸਥਾਨਕ ਮੁੱਲ, ਗਿਣਤੀ, ਜੋੜ-ਘਟਾਓ ਅਤੇ ਨੇਤਰਹੀਣ ਬੱਚਿਆਂ ਲਈ।
   - **ਜੀਓਬੋਰਡ (Geoboard):** ਕਿੱਲਾਂ ਵਾਲਾ ਬੋਰਡ ਅਤੇ ਰਬੜ ਬੈਂਡ; **2D ਆਕਾਰ, ਘੇਰਾ, ਖੇਤਰਫਲ, ਤਿਕੋਣ ਅਤੇ ਸਮਮਿਤੀ (Symmetry)** ਸਿਖਾਉਣ ਲਈ ਸਰਵੋਤਮ।
   - **ਨੇਪੀਅਰ ਹੱਡੀਆਂ (Napier's Bones):** ਜੌਹਨ ਨੇਪੀਅਰ ਵੱਲੋਂ ਗੁਣਾ ਅਤੇ ਵੰਡ ਕਰਨ ਲਈ ਬਣਾਈਆਂ ਗਈਆਂ ਪੱਟੀਆਂ।
   - **ਟੈਨਗ੍ਰਾਮ (Tangram):** ਚੀਨ ਦੀ 7 ਜਿਓਮੈਟਰੀ ਟੁਕੜਿਆਂ (5 ਤਿਕੋਣ, 1 ਵਰਗ, 1 ਸਮਾਨਾਂਤਰ ਚਤੁਰਭੁਜ) ਵਾਲੀ ਪਹੇਲੀ; ਸਥਾਨਕ ਸੂਝ ਅਤੇ ਖੇਤਰਫਲ ਸੰਭਾਲ ਲਈ।
   - **ਬੇਸ-10 ਬਲਾਕ (Dienes Blocks):** ਇਕਾਈ, ਦਹਾਈ, ਸੈਂਕੜਾ ਅਤੇ ਹਜ਼ਾਰ ਸਮਝਾਉਣ ਲਈ ਠੋਸ ਬਲਾਕ।
   - **ਗਰਿੱਡ ਪੇਪਰ / ਡਾਟ ਪੇਪਰ:** ਦਸ਼ਮਲਵ ਗੁਣਾ ($0.3 \\times 0.4 = 0.12$) ਅਤੇ ਸਮਮਿਤੀ ਸਿਖਾਉਣ ਲਈ।`,

            hi: `### [Level B: Basic — गणित की प्रकृति एवं शैक्षणिक उद्देश्य]
1. **गणित की प्रकृति:**
   - **तार्किक एवं अमूर्त:** गणित अमूर्त संरचनाओं, प्रतिमानों एवं तार्किक संबंधों का अध्ययन है।
   - **पदानुक्रमित एवं संचयी (Hierarchical):** नवीन संप्रत्यय पूर्व-ज्ञान पर आधारित होते हैं।
   - **सटीक एवं प्रतीकात्मक:** सार्वभौमिक एवं संक्षिप्त प्रतीकात्मक भाषा।
   - **निगमनात्मक व्यवस्था:** अभिगृहीतों (Axioms) एवं प्रमेयों पर आधारित तार्किक प्रमाण।
2. **पाठ्यक्रम में स्थान:**
   - कोठारी आयोग (1964-66) के अनुसार कक्षा 1 से 10 तक गणित सभी हेतु अनिवार्य है।
3. **NCF 2005 एवं NEP 2020 के उद्देश्य:**
   - **NCF 2005 का मुख्य उद्देश्य:** केवल यांत्रिक गणना के स्थान पर **"बालक की चिंतन प्रक्रियाओं का गणितीकरण (Mathematisation)"** करना।
     - *संकीर्ण उद्देश्य:* संख्यात्मक साक्षरता, मापन, प्रतिशत व व्यावहारिक अंकगणित।
     - *उच्चतर उद्देश्य:* समस्या-समाधान, अमूर्त चिंतन, तार्किक विश्लेषण व गणितीय प्रतिरूपण।
   - **NEP 2020:** **निपुण भारत** के तहत कक्षा 3 तक बुनियादी संख्याज्ञान (FLN) तथा गणितीय भय का निवारण।

---

### [Level I: Intermediate — गणित शिक्षण की प्रमुख विधियाँ]
1. **आगमन बनाम निगमन विधि (Inductive vs Deductive):**
   - **आगमन विधि:** **मूर्त से अमूर्त, विशिष्ट से सामान्य, उदाहरण से नियम/सूत्र की ओर**।
     - छात्र त्रिभुज के तीनों कोणों को मापकर स्वयं नियम निकालते हैं कि योग $180^\\circ$ होता है। यह मनोवैज्ञानिक व वैज्ञानिक है।
   - **निगमन विधि:** **अमूर्त से मूर्त, सामान्य नियम से विशिष्ट उदाहरण की ओर**।
     - सूत्र $A = \\pi r^2$ सीधे बताकर प्रश्न हल कराना। तीव्र है परंतु रटंत अधिगम कराती है।
   - **आदर्श समन्वय:** आगमन-निगमन विधि।
2. **विश्लेषण बनाम संश्लेषण विधि (Analytic vs Synthetic):**
   - **विश्लेषण विधि:** **अज्ञात से ज्ञात की ओर (Unknown to Known)**; समस्या को छोटे भागों में तोड़ना।
     - *"जो सिद्ध करना है, उसके लिए क्या आवश्यक है?"* ज्यामितीय प्रमेयों हेतु सर्वोत्तम।
   - **संश्लेषण विधि:** **ज्ञात से अज्ञात की ओर (Known to Unknown)**; ज्ञात तथ्यों को जोड़कर निष्कर्ष पर पहुँचना।
3. **ह्यूरिस्टिक विधि (H.E. Armstrong):**
   - ग्रीक शब्द 'Heuriskein' (मैं खोजता हूँ)। बालक को एक मौलिक खोजकर्ता के रूप में स्थापित किया जाता है।
4. **जॉर्ज पोल्या (George Polya) के 4 चरण:**
   - 1. समस्या को समझना $\\to$ 2. योजना बनाना $\\to$ 3. योजना कार्यान्वित करना $\\to$ 4. पुनरावलोकन (Looking back)।

---

### [Level A: Advanced — भ्रांतियाँ, त्रुटि विश्लेषण एवं TLM उपकरण]
1. **सामान्य गणितीय भ्रांतियाँ:**
   - **स्थानीय मान भ्रांति:** तीन सौ पाँच को 3005 या 35 लिखना।
   - **भिन्न भ्रांति (पूर्ण संख्या पूर्वाग्रह):** यह सोचना कि $\\frac{1}{4} > \\frac{1}{2}$ क्योंकि $4 > 2$; अंश में अंश व हर में हर जोड़ना ($\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$)।
   - **दशमलव भ्रांति:** $0.125 > 0.5$ मानना क्योंकि $125 > 5$ है।
   - **ज्यामितीय भ्रांति:** झुके हुए वर्ग को "डायमंड" समझकर वर्ग न मानना; परिमाप व क्षेत्रफल में भ्रम।
2. **न्यूमैन त्रुटि विश्लेषण (Newman's Error Analysis):**
   - पठन $\\to$ बोध $\\to$ गणितीय रूपांतरण $\\to$ प्रक्रिया कौशल $\\to$ उत्तर प्रस्तुतीकरण।
3. **शिक्षण सहायक सामग्री (TLM Manipulatives):**
   - **गिनतारा (Abacus):** स्थानीय मान, गिनती, जोड़-घटाव व दृष्टिबाधित बच्चों हेतु।
   - **जियोबोर्ड (Geoboard):** कीलों वाला बोर्ड व रबर बैंड; **2D आकृतियाँ, परिमाप, क्षेत्रफल, कोण व सममिति** सिखाने हेतु।
   - **नेपियर बोन्स (Napier's Bones):** जॉन नेपियर द्वारा गुणा-भाग हेतु निर्मित पट्टियाँ।
   - **टैनग्राम (Tangram):** 7 ज्यामितीय टुकड़ों की चीनी पहेली; स्थानिक समझ एवं क्षेत्रफल संरक्षण हेतु।
   - **डीन्स ब्लॉक (Base-10 Blocks):** स्थानीय मान एवं दशमलव की मूर्त समझ हेतु।
   - **ग्रिड पेपर:** दशमलव गुणन ($0.3 \\times 0.4 = 0.12$) व सममिति हेतु।`
        },
        keyNotes: {
            en: [
                'Mathematics is hierarchical, abstract, logical, and cumulative.',
                'NCF 2005 primary vision is the "Mathematisation of the child\'s thought processes", prioritizing reasoning over rote computation.',
                'NEP 2020 targets universal Foundational Literacy and Numeracy (FLN) by Grade 3 via Mission NIPUN Bharat.',
                'Inductive Method moves from Concrete to Abstract / Example to Rule (discovery); Deductive Method moves from Rule to Example (verification/practice).',
                'Analytic Method works from Unknown to Known (breaks down problems); Synthetic Method works from Known to Unknown (consolidates proofs).',
                'George Pólya’s 4 problem-solving stages: 1. Understand, 2. Devise a plan, 3. Carry out, 4. Look back/reflect.',
                'Geoboard is the premier manipulative for teaching 2D geometry, perimeter, area, polygons, and symmetry.',
                'Abacus is primarily used for place value, column regrouping, and tactile arithmetic for visually impaired learners.',
                'Tangram (7 geometric pieces) develops spatial visualization and demonstrates conservation of area.'
            ],
            pa: [
                'ਗਣਿਤ ਤਾਰਕਿਕ, ਅਮੂਰਤ, ਲੜੀਵਾਰ (hierarchical) ਅਤੇ ਸੰਚਿਤ ਵਿਗਿਆਨ ਹੈ।',
                'NCF 2005 ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਫਾਰਮੂਲੇ ਰਟਣ ਦੀ ਬਜਾਏ "ਬੱਚੇ ਦੀਆਂ ਸੋਚ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦਾ ਗਣਿਤੀਕਰਨ" ਕਰਨਾ ਹੈ।',
                'NEP 2020 ਅਧੀਨ ਨਿਪੁੰਨ ਭਾਰਤ ਰਾਹੀਂ ਕਲਾਸ 3 ਤੱਕ ਬੁਨਿਆਦੀ ਸੰਖਿਆ ਗਿਆਨ (FLN) ਪ੍ਰਾਪਤ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ।',
                'ਆਗਮਨ ਵਿਧੀ ਉਦਾਹਰਨ ਤੋਂ ਨਿਯਮ ਵੱਲ (ਖੋਜ) ਜਾਂਦੀ ਹੈ; ਨਿਗਮਨ ਵਿਧੀ ਨਿਯਮ ਤੋਂ ਉਦਾਹਰਨ ਵੱਲ (ਅਭਿਆਸ) ਜਾਂਦੀ ਹੈ।',
                'ਵਿਸ਼ਲੇਸ਼ਣ ਵਿਧੀ ਅਗਿਆਤ ਤੋਂ ਗਿਆਤ ਵੱਲ (ਤੋੜਨਾ) ਜਾਂਦੀ ਹੈ; ਸੰਸਲੇਸ਼ਣ ਵਿਧੀ ਗਿਆਤ ਤੋਂ ਅਗਿਆਤ ਵੱਲ (ਜੋੜਨਾ) ਜਾਂਦੀ ਹੈ।',
                'ਜਾਰਜ ਪੋਲੀਆ ਦੇ ਸਮੱਸਿਆ ਹੱਲ ਦੇ 4 ਪੜਾਅ: 1. ਸਮਝਣਾ, 2. ਯੋਜਨਾ ਬਣਾਉਣਾ, 3. ਹੱਲ ਕਰਨਾ, 4. ਪੜਚੋਲ ਕਰਨਾ।',
                'ਜੀਓਬੋਰਡ (Geoboard) 2D ਆਕਾਰ, ਘੇਰਾ, ਖੇਤਰਫਲ ਅਤੇ ਸਮਮਿਤੀ ਸਿਖਾਉਣ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਸੰਦ ਹੈ।',
                'ਗਿਣਤਾਰਾ (Abacus) ਸਥਾਨਕ ਮੁੱਲ, ਹਾਸਲ ਵਾਲੇ ਜੋੜ-ਘਟਾਓ ਅਤੇ ਨੇਤਰਹੀਣ ਬੱਚਿਆਂ ਲਈ ਬਹੁਤ ਲਾਹੇਵੰਦ ਹੈ।',
                'ਟੈਨਗ੍ਰਾਮ (7 ਟੁਕੜਿਆਂ ਵਾਲੀ ਪਹੇਲੀ) ਸਥਾਨਕ ਸੂਝ ਅਤੇ ਖੇਤਰਫਲ ਸੰਭਾਲ ਦੀ ਸਮਝ ਵਿਕਸਿਤ ਕਰਦਾ ਹੈ।'
            ],
            hi: [
                'गणित तार्किक, अमूर्त, पदानुक्रमित एवं संचयी विषय है।',
                'NCF 2005 का प्रमुख ध्येय सूत्रों को रटने के स्थान पर "बालक के चिंतन का गणितीकरण" करना है।',
                'NEP 2020 के तहत निपुण भारत द्वारा कक्षा 3 तक बुनियादी संख्याज्ञान (FLN) प्राप्त करना राष्ट्रीय प्राथमिकता है।',
                'आगमन विधि उदाहरण से नियम (खोज) की ओर; निगमन विधि नियम से उदाहरण (अभ्यास) की ओर ले जाती है।',
                'विश्लेषण विधि अज्ञात से ज्ञात की ओर (खंडन); संश्लेषण विधि ज्ञात से अज्ञात की ओर (संयोजन) जाती है।',
                'जॉर्ज पोल्या के 4 चरण: 1. समझना, 2. योजना बनाना, 3. क्रियान्वित करना, 4. पुनरावलोकन।',
                'जियोबोर्ड (Geoboard) 2D आकृतियों, परिमाप, क्षेत्रफल एवं सममिति हेतु सर्वोत्तम उपकरण है।',
                'गिनतारा (Abacus) स्थानीय मान, हासिल वाले जोड़-घटाव व दृष्टिबाधित बच्चों हेतु उपयोगी है।',
                'टैनग्राम (7 टुकड़ों की पहेली) स्थानिक समझ एवं क्षेत्रफल संरक्षण विकसित करता है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'NCF 2005 Motto: "Mathematisation of thought", NOT calculation drills.',
                'Inductive = Examples -> Rule (Discovery); Deductive = Rule -> Examples (Speed).',
                'Analytic = Unknown -> Known (Reasoning); Synthetic = Known -> Unknown (Presentation).',
                'Heuristic Method: H.E. Armstrong ("I discover").',
                'Manipulatives Matrix:',
                '  - Abacus: Place value, counting, visually impaired.',
                '  - Geoboard: 2D geometry, perimeter, area, polygons, symmetry.',
                '  - Tangram: 7 pieces (5 triangles, 1 square, 1 parallelogram); Spatial sense.',
                '  - Napier Bones: Multi-digit multiplication & division.',
                '  - Grid Paper: Decimal multiplication (0.2 x 0.3 = 0.06).'
            ],
            pa: [
                'NCF 2005 ਸੂਤਰ: "ਸੋਚ ਦਾ ਗਣਿਤੀਕਰਨ", ਰੱਟੇਬਾਜ਼ੀ ਨਹੀਂ।',
                'ਆਗਮਨ = ਉਦਾਹਰਨ -> ਨਿਯਮ (ਖੋਜ); ਨਿਗਮਨ = ਨਿਯਮ -> ਉਦਾਹਰਨ (ਤੇਜ਼ੀ)।',
                'ਵਿਸ਼ਲੇਸ਼ਣ = ਅਗਿਆਤ -> ਗਿਆਤ (ਦਲੀਲ); ਸੰਸਲੇਸ਼ਣ = ਗਿਆਤ -> ਅਗਿਆਤ (ਪ੍ਰਸਤੁਤੀ)।',
                'ਹਿਊਰਿਸਟਿਕ ਵਿਧੀ: ਐਚ.ਈ. ਆਰਮਸਟ੍ਰਾਂਗ ("ਮੈਂ ਖੋਜਦਾ ਹਾਂ")।',
                'TLM ਮੈਟ੍ਰਿਕਸ:',
                '  - ਗਿਣਤਾਰਾ (Abacus): ਸਥਾਨਕ ਮੁੱਲ, ਨੇਤਰਹੀਣ ਬੱਚਿਆਂ ਲਈ।',
                '  - ਜੀਓਬੋਰਡ (Geoboard): 2D ਆਕਾਰ, ਘੇਰਾ, ਖੇਤਰਫਲ, ਸਮਮਿਤੀ।',
                '  - ਟੈਨਗ੍ਰਾਮ (Tangram): 7 ਟੁਕੜੇ; ਸਥਾਨਕ ਸੂਝ।',
                '  - ਨੇਪੀਅਰ ਹੱਡੀਆਂ: ਵੱਡੀ ਗੁਣਾ ਅਤੇ ਵੰਡ।',
                '  - ਗਰਿੱਡ ਪੇਪਰ: ਦਸ਼ਮਲਵ ਗੁਣਾ (0.2 x 0.3 = 0.06)।'
            ],
            hi: [
                'NCF 2005 ध्येय: "चिंतन का गणितीकरण", यांत्रिक गणना नहीं।',
                'आगमन = उदाहरण -> नियम (खोज); निगमन = नियम -> उदाहरण (तीव्रता)।',
                'विश्लेषण = अज्ञात -> ज्ञात (तर्क); संश्लेषण = ज्ञात -> अज्ञात (प्रस्तुति)।',
                'ह्यूरिस्टिक विधि: एच.ई. आर्मस्ट्रांग ("मैं खोजता हूँ")।',
                'TLM सारणी:',
                '  - गिनतारा (Abacus): स्थानीय मान, दृष्टिबाधित छात्र।',
                '  - जियोबोर्ड (Geoboard): 2D आकृतियाँ, परिमाप, क्षेत्रफल, सममिति।',
                '  - टैनग्राम (Tangram): 7 टुकड़े; स्थानिक समझ।',
                '  - नेपियर बोन्स: बहु-अंकीय गुणा व भाग।',
                '  - ग्रिड पेपर: दशमलव गुणा (0.2 x 0.3 = 0.06)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Children who make fraction errors like 1/3 + 1/4 = 2/7 are simply careless and need to be punished with repetitive drill sheets. Correction: This reflects systematic "whole number bias", where the child applies whole number addition rules to fractions. It must be remedied with visual fraction strips and circular fraction cutouts.',
                'Misconception: An Abacus is primarily designed for teaching 2D geometry and symmetry. Correction: An Abacus is an arithmetic tool designed for counting, place value, and column addition/subtraction. The Geoboard is the specialized manipulative for 2D geometry and symmetry.',
                'Misconception: NCF 2005 recommends that primary school mathematics should strictly focus on memorizing multiplication tables and standard long division algorithms. Correction: NCF 2005 explicitly cautions against rote algorithms and advocates mathematisation of thinking, problem-solving, estimation, and hands-on spatial reasoning.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਜੋ ਬੱਚੇ ਭਿੰਨਾਂ ਦੇ ਜੋੜ ਵਿੱਚ 1/3 + 1/4 = 2/7 ਲਿਖਦੇ ਹਨ, ਉਹ ਲਾਪਰਵਾਹ ਹਨ ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਸਜ਼ਾ ਵਜੋਂ ਹੋਰ ਸਵਾਲ ਰਟਾਉਣੇ ਚਾਹੀਦੇ ਹਨ। ਸੁਧਾਰ: ਇਹ "ਪੂਰਨ ਸੰਖਿਆ ਪੱਖਪਾਤ" ਦੀ ਸੰਕਲਪਿਕ ਗਲਤੀ ਹੈ ਜਿਸ ਵਿੱਚ ਬੱਚਾ ਆਮ ਸੰਖਿਆਵਾਂ ਦੇ ਨਿਯਮ ਭਿੰਨਾਂ ਤੇ ਲਗਾਉਂਦਾ ਹੈ। ਇਸ ਨੂੰ ਕਾਗਜ਼ੀ ਪੱਟੀਆਂ ਅਤੇ ਭਿੰਨ-ਡਿਸਕਾਂ ਰਾਹੀਂ ਠੋਸ ਰੂਪ ਵਿੱਚ ਸਮਝਾਉਣਾ ਚਾਹੀਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਗਿਣਤਾਰਾ (Abacus) ਜਿਓਮੈਟਰੀ ਅਤੇ ਸਮਮਿਤੀ ਸਿਖਾਉਣ ਵਾਲਾ ਮੁੱਖ ਸੰਦ ਹੈ। ਸੁਧਾਰ: ਗਿਣਤਾਰਾ ਸਿਰਫ਼ ਗਿਣਤੀ, ਸਥਾਨਕ ਮੁੱਲ ਅਤੇ ਜੋੜ-ਘਟਾਓ ਲਈ ਹੈ। ਜਿਓਮੈਟਰੀ, ਘੇਰਾ, ਖੇਤਰਫਲ ਅਤੇ ਸਮਮਿਤੀ ਸਿਖਾਉਣ ਲਈ ਜੀਓਬੋਰਡ (Geoboard) ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: NCF 2005 ਕਹਿੰਦਾ ਹੈ ਕਿ ਪ੍ਰਾਇਮਰੀ ਗਣਿਤ ਵਿੱਚ ਪਹਾੜੇ ਅਤੇ ਵੰਡ ਦੇ ਫਾਰਮੂਲੇ ਰਟਾਉਣ ਤੇ ਹੀ ਸਾਰਾ ਜ਼ੋਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। ਸੁਧਾਰ: NCF 2005 ਰੱਟੇਬਾਜ਼ੀ ਦਾ ਵਿਰੋਧ ਕਰਦਾ ਹੈ ਅਤੇ ਬੱਚੇ ਦੀ ਸੋਚ ਦਾ ਗਣਿਤੀਕਰਨ, ਪੈਟਰਨਾਂ ਦੀ ਪਛਾਣ ਅਤੇ ਸਮੱਸਿਆ ਹੱਲ ਕਰਨ ਦੀ ਯੋਗਤਾ ਤੇ ਜ਼ੋਰ ਦਿੰਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: जो बच्चे 1/3 + 1/4 = 2/7 लिखते हैं, वे लापरवाह हैं और उन्हें दंड देकर बार-बार हल कराना चाहिए। सुधार: यह "पूर्ण संख्या पूर्वाग्रह" (Whole number bias) की वैचारिक भ्रांति है। इसका निवारण भिन्न-पट्टियों एवं वृत्त-कटआउटों के मूर्त प्रयोग से किया जाना चाहिए।',
                'भ्रांति: गिनतारा (Abacus) 2D ज्यामिति और सममिति सिखाने का मुख्य उपकरण है। सुधार: गिनतारा स्थानीय मान व अंकगणित हेतु है। 2D ज्यामिति, परिमाप व सममिति हेतु जियोबोर्ड (Geoboard) का उपयोग किया जाता है।',
                'भ्रांति: NCF 2005 प्राथमिक स्तर पर केवल पहाड़े और भाग के कलन-विधि (Algorithms) रटाने की संस्तुति करता है। सुधार: NCF 2005 यांत्रिक गणना के स्थान पर चिंतन के गणितीकरण, प्रतिमानों की समझ तथा तार्किक समस्या-समाधान पर बल देता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'During a Class 5 mathematics lesson on decimals, a teacher asks: "Which is greater: 0.5 or 0.25?". A student immediately responds: "0.25 is greater because 25 is greater than 5". Identify the specific mathematical misconception exhibited by the student, and describe how the teacher should use grid paper to correct this misconception conceptually.',
                    pa: 'ਪੰਜਵੀਂ ਜਮਾਤ ਵਿੱਚ ਦਸ਼ਮਲਵ ਪੜ੍ਹਾਉਂਦੇ ਸਮੇਂ ਅਧਿਆਪਕ ਪੁੱਛਦਾ ਹੈ: "0.5 ਅਤੇ 0.25 ਵਿੱਚੋਂ ਕਿਹੜਾ ਵੱਡਾ ਹੈ?"। ਇੱਕ ਵਿਦਿਆਰਥੀ ਤੁਰੰਤ ਕਹਿੰਦਾ ਹੈ: "0.25 ਵੱਡਾ ਹੈ ਕਿਉਂਕਿ 25, 5 ਨਾਲੋਂ ਵੱਡਾ ਹੁੰਦਾ ਹੈ"। ਵਿਦਿਆਰਥੀ ਦੇ ਇਸ ਗਣਿਤਕ ਭੁਲੇਖੇ ਦੀ ਪਛਾਣ ਕਰੋ ਅਤੇ ਦੱਸੋ ਕਿ ਅਧਿਆਪਕ 10x10 ਦੇ ਗਰਿੱਡ ਪੇਪਰ ਰਾਹੀਂ ਇਸ ਨੂੰ ਠੋਸ ਰੂਪ ਵਿੱਚ ਕਿਵੇਂ ਸੁਧਾਰੇਗਾ?',
                    hi: 'कक्षा 5 में दशमलव पढ़ाते समय शिक्षक पूछता है कि "0.5 और 0.25 में कौन बड़ा है?"। एक छात्र उत्तर देता है: "0.25 बड़ा है क्योंकि 25, 5 से बड़ा होता है"। छात्र की इस गणितीय भ्रांति की पहचान कीजिए तथा बताइए कि शिक्षक 10x10 ग्रिड पेपर द्वारा इसका संप्रत्ययात्मक निवारण कैसे करेगा?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Identify the misconception: "Longer decimal equals larger number" (applying whole number magnitude logic to decimals, ignoring place value of tenths vs hundredths).',
                        'Step 2: Concrete Grid Paper Remediation: The teacher gives the student a $10 \\times 10$ grid containing 100 small squares. For 0.5 (5 tenths = 50 hundredths), the student shades 5 full columns (50 squares). For 0.25 (25 hundredths), the student shades only 25 squares.',
                        'Step 3: Conceptual Conclusion: The student visually observes that 50 shaded squares is twice as large as 25 shaded squares, proving $0.5 = 0.50 > 0.25$.'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਭੁਲੇਖੇ ਦੀ ਪਛਾਣ: "ਲੰਬਾ ਦਸ਼ਮਲਵ ਵੱਡੀ ਸੰਖਿਆ ਹੁੰਦਾ ਹੈ" (ਦਸ਼ਮਲਵ ਦੇ ਦਸਵੇਂ ਅਤੇ ਸੌਵੇਂ ਹਿੱਸੇ ਦੇ ਸਥਾਨਕ ਮੁੱਲ ਨੂੰ ਨਜ਼ਰਅੰਦਾਜ਼ ਕਰਨਾ)।',
                        'ਕਦਮ 2: ਗਰਿੱਡ ਪੇਪਰ ਨਾਲ ਸੁਧਾਰ: 100 ਖ਼ਾਨਿਆਂ ਵਾਲੇ ਗਰਿੱਡ ਵਿੱਚੋਂ 0.5 (5 ਦਸਵੇਂ = 50 ਸੌਵੇਂ) ਲਈ 50 ਖ਼ਾਨੇ ਰੰਗੇ ਜਾਣਗੇ, ਜਦਕਿ 0.25 ਲਈ ਸਿਰਫ਼ 25 ਖ਼ਾਨੇ ਰੰਗੇ ਜਾਣਗੇ।',
                        'ਕਦਮ 3: ਸਿੱਟਾ: ਬੱਚਾ ਅੱਖੀਂ ਵੇਖਦਾ ਹੈ ਕਿ 50 ਖ਼ਾਨੇ 25 ਖ਼ਾਨਿਆਂ ਨਾਲੋਂ ਦੁੱਗਣੇ ਹਨ, ਇਸ ਲਈ 0.5 (0.50) ਵੱਡਾ ਹੈ।'
                    ],
                    hi: [
                        'चरण 1: भ्रांति की पहचान: "लंबा दशमलव बड़ी संख्या" (दशांश एवं शतांश के स्थानीय मान की उपेक्षा कर पूर्ण संख्या नियम लगाना)।',
                        'चरण 2: ग्रिड पेपर निवारण: $10 \\times 10$ (100 खानों) के ग्रिड में 0.5 (5 दशांश = 50 शतांश) हेतु 50 खाने रंगे जाएँगे, जबकि 0.25 हेतु केवल 25 खाने।',
                        'चरण 3: निष्कर्ष: छात्र प्रत्यक्ष देखता है कि 50 खाने 25 खानों से बड़े हैं, अतः $0.5 = 0.50 > 0.25$।'
                    ]
                },
                finalAnswer: {
                    en: 'Misconception = Whole Number Decimal Length Bias; Remedy = 10x10 Grid representation visually demonstrating 50 squares (0.50) > 25 squares (0.25).',
                    pa: 'ਭੁਲੇਖਾ = ਦਸ਼ਮਲਵ ਲੰਬਾਈ ਦਾ ਭੁਲੇਖਾ; ਸੁਧਾਰ = 10x10 ਗਰਿੱਡ ਤੇ 50 ਖ਼ਾਨੇ (0.50) > 25 ਖ਼ਾਨੇ (0.25) ਦਿਖਾਉਣਾ।',
                    hi: 'भ्रांति = दशमलव लंबाई का पूर्ण संख्या पूर्वाग्रह; निवारण = $10 \\times 10$ ग्रिड पर 50 खाने (0.50) > 25 खाने (0.25) का मूर्त प्रदर्शन।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-mat-1',
                question: {
                    en: 'What is the higher aim of teaching mathematics according to NCF 2005?',
                    pa: 'NCF 2005 ਅਨੁਸਾਰ ਗਣਿਤ ਸਿੱਖਿਆ ਦਾ ਉੱਚੇਰਾ ਉਦੇਸ਼ ਕੀ ਹੈ?',
                    hi: 'NCF 2005 के अनुसार गणित शिक्षण का उच्चतर उद्देश्य क्या है?'
                },
                answer: {
                    en: 'Mathematisation of the child’s thought processes — developing problem-solving abilities, abstract reasoning, and logical formulation rather than mechanical calculation.',
                    pa: 'ਬੱਚੇ ਦੀਆਂ ਸੋਚ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦਾ ਗਣਿਤੀਕਰਨ — ਰੱਟੇ ਦੀ ਥਾਂ ਸਮੱਸਿਆ ਹੱਲ ਕਰਨ, ਅਮੂਰਤ ਚਿੰਤਨ ਅਤੇ ਤਾਰਕਿਕ ਦਲੀਲ ਦਾ ਵਿਕਾਸ।',
                    hi: 'बालक की चिंतन प्रक्रियाओं का गणितीकरण — यांत्रिक गणना के स्थान पर समस्या-समाधान, अमूर्त चिंतन एवं तार्किक क्षमता का विकास।'
                }
            },
            {
                id: 'fc-mat-2',
                question: {
                    en: 'What specific mathematical concepts is a Geoboard best suited to teach?',
                    pa: 'ਜੀਓਬੋਰਡ (Geoboard) ਮੁੱਖ ਤੌਰ ਤੇ ਗਣਿਤ ਦੇ ਕਿਹੜੇ ਸੰਕਲਪ ਸਿਖਾਉਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                    hi: 'जियोबोर्ड (Geoboard) मुख्य रूप से गणित के किन संप्रत्ययों को सिखाने हेतु उपयोगी है?'
                },
                answer: {
                    en: '2D geometric shapes (triangles, rectangles, polygons), perimeter, area, right angles, and line symmetry.',
                    pa: '2D ਜਿਓਮੈਟਰੀ ਆਕਾਰ (ਤਿਕੋਣ, ਆਇਤ, ਬਹੁਭੁਜ), ਘੇਰਾ, ਖੇਤਰਫਲ, ਸਮਕੋਣ ਅਤੇ ਸਮਮਿਤੀ (Symmetry)।',
                    hi: '2D ज्यामितीय आकृतियाँ (त्रिभुज, आयत, बहुभुज), परिमाप, क्षेत्रफल, समकोण एवं सममिति।'
                }
            },
            {
                id: 'fc-mat-3',
                question: {
                    en: 'What is the key difference between the Analytic and Synthetic methods in mathematics?',
                    pa: 'ਗਣਿਤ ਵਿੱਚ ਵਿਸ਼ਲੇਸ਼ਣ ਵਿਧੀ (Analytic) ਅਤੇ ਸੰਸਲੇਸ਼ਣ ਵਿਧੀ (Synthetic) ਵਿੱਚ ਕੀ ਮੁੱਖ ਅੰਤਰ ਹੈ?',
                    hi: 'गणित में विश्लेषण विधि (Analytic) एवं संश्लेषण विधि (Synthetic) में क्या मुख्य अंतर है?'
                },
                answer: {
                    en: 'Analytic breaks down the problem from Unknown to Known (investigative); Synthetic assembles known facts from Known to Unknown (presentational).',
                    pa: 'ਵਿਸ਼ਲੇਸ਼ਣ ਅਗਿਆਤ ਤੋਂ ਗਿਆਤ ਵੱਲ (ਸਮੱਸਿਆ ਨੂੰ ਤੋੜ ਕੇ ਖੋਜਣਾ) ਜਾਂਦਾ ਹੈ; ਸੰਸਲੇਸ਼ਣ ਗਿਆਤ ਤੋਂ ਅਗਿਆਤ ਵੱਲ (ਤੱਥਾਂ ਨੂੰ ਜੋੜ ਕੇ ਨਤੀਜਾ ਕੱਢਣਾ) ਜਾਂਦਾ ਹੈ।',
                    hi: 'विश्लेषण अज्ञात से ज्ञात की ओर जाता है (समस्या को तोड़ना); संश्लेषण ज्ञात से अज्ञात की ओर जाता है (तथ्यों को जोड़ना)।'
                }
            }
        ]
    },

    // =========================================================================
    // 5. ENVIRONMENTAL STUDIES (EVS) PEDAGOGY (pstet-evs-pedagogy)
    // =========================================================================
    {
        topicId: 'pstet-evs-pedagogy',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 15,
            editorialNote: 'Comprehensive trilingual blueprint for PSTET Paper 1 Environmental Studies (EVS) Pedagogy: Scope in Classes 3–5, Integrated Nature (Science, Social Studies, Environmental Education), 6 NCERT/PSEB Themes, Hands-on Inquiry & Field Visits, Process Skills, CCE Evaluation Tools (Portfolios, Anecdotal Records, Rubrics).'
        },
        bookRefs: [
            {
                title: 'Pedagogy of Environmental Studies (Classes 3 to 5)',
                author: 'NCERT / SCERT Punjab Teacher Education Cell',
                chapter: 'Integrated Curriculum, Core Themes, Process Skills and Environmental Values',
                relevance: 'Standard official statutory curriculum reference for PSTET Paper 1 EVS pedagogy.'
            },
            {
                title: 'ਆਲਾ ਦੁਆਲਾ (Our Surroundings — EVS Classes 3 to 5)',
                author: 'ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ (PSEB), ਮੋਹਾਲੀ',
                chapter: 'ਸਾਡੇ ਥੀਮ, ਗਤੀਵਿਧੀਆਂ, ਪ੍ਰੋਜੈਕਟ ਕਾਰਜ ਅਤੇ ਵਾਤਾਵਰਨ ਜਾਗਰੂਕਤਾ',
                relevance: 'Prescribed PSEB primary school textbook curriculum framework.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Concept, Scope & Integrated Nature of EVS]
1. **Concept & Scope of EVS (Classes 3–5):**
   - Environmental Studies (EVS) at the primary level is an integrated exploration of the child’s natural, social, and cultural environment.
   - **Crucial Curricular Mandate (Classes 1 & 2):** There are **NO separate EVS textbooks** for Classes 1 and 2. Environmental concepts are integrated organically into **Language and Mathematics** (NCF 2005 / PSEB directive).
2. **Integrated Nature of EVS:**
   - In Classes 3–5, EVS dissolves rigid disciplinary boundaries. It integrates **Science (Physics, Chemistry, Biology)**, **Social Studies (History, Geography, Civics)**, and **Environmental Education (Conservation, Pollution, Climate)** into a unified composite curriculum.
   - **Spiral & Child-Centred Progression:** Learning spirals outward from the **child’s immediate self and home $\\to$ school $\\to$ neighborhood $\\to$ village/district $\\to$ broader globe**.
3. **Values & Sensitivities:**
   - EVS fosters sensitivity towards biodiversity, animal welfare, plant conservation, gender equality, inclusion of children with special needs (CWSN), and the dignity of sanitation workers.

---

### [Level I: Intermediate — The 6 Core Themes & Process Skills]
1. **The 6 Core Themes of EVS (NCERT / PSEB):**
   - EVS is organized into **6 thematic clusters** instead of topic-based chapters:
     | Theme Number | Core Theme | Scope & Key Concepts |
     |---|---|---|
     | **Theme 1** | **Family and Friends (ਪਰਿਵਾਰ ਅਤੇ ਮਿੱਤਰ)** | Broadest overarching theme with **4 nested sub-themes**: (1) Relationships, (2) Work and Play, (3) Animals, (4) Plants. |
     | **Theme 2** | **Food (ਭੋਜਨ)** | Tasting, digestion, cooking methods, preservation techniques, spoilage, hunger, regional Punjabi delicacies. |
     | **Theme 3** | **Shelter (ਰੈਣ-ਬਸੇਰਾ / ਆਵਾਸ)** | Habitats of humans and animals; architectural adaptations to climate (mud houses in Rajasthan, stilt houses in Assam, houseboats in Kashmir, brick houses in Punjab). |
     | **Theme 4** | **Water (ਪਾਣੀ)** | Sources, water cycle, scarcity, traditional conservation (baolis/stepwells), waterborne diseases, floatation and solubility experiments. |
     | **Theme 5** | **Travel (ਯਾਤਰਾ)** | Modes of transport, fuel conservation, navigation, map reading (scale, directions), train tickets, exploration (e.g. space, mountaineering). |
     | **Theme 6** | **Things We Make and Do (ਚੀਜ਼ਾਂ ਜੋ ਅਸੀਂ ਬਣਾਉਂਦੇ ਹਾਂ ਤੇ ਕਰਦੇ ਹਾਂ)** | Traditional crafts (pottery, weaving, phulkari), local technology, tools, building construction, ecological footprints. |
2. **Process Skills in EVS (ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲ):**
   - **Basic Process Skills:**
     - **Observation (ਨਿਰੀਖਣ):** Using all five senses to gather factual qualitative and quantitative data.
     - **Classification (ਵਰਗੀਕਰਨ):** Grouping objects by observable attributes (e.g. soluble vs insoluble substances).
     - **Measurement & Estimation (ਮਾਪਣ):** Quantifying temperature, rainfall, plant height.
     - **Communication (ਸੰਚਾਰ):** Presenting findings through drawings, tables, oral reports, and charts.
     - **Inference (ਸਿੱਟਾ ਕੱਢਣਾ):** Drawing logical deductions from observed evidence.
     - **Prediction (ਭਵਿੱਖਬਾਣੀ):** Hypothesizing what will occur based on observed patterns.
   - **Integrated Process Skills:** Formulating hypotheses, identifying and controlling variables, designing controlled experiments (e.g. seed germination under varied moisture/light conditions).

---

### [Level A: Advanced — Pedagogical Activities, Field Visits & CCE Evaluation]
1. **Constructivist Pedagogical Activities & Field Visits:**
   - **Experiential Hands-on Inquiry:** Seed germination experiments (monitoring daily root/shoot growth), measuring rain using a simple homemade rain gauge, dissolving different solutes in water.
   - **Community Resource Persons:** Inviting farmers, potters, elderly grandparents, or municipal sanitation workers to the classroom to break stereotypes and foster empathy.
   - **Field Visits (ਸਥਾਨਕ ਦੌਰੇ):** Visiting a local pond, botanical nursery, Harike Pattan wetland, or village panchayat to observe ecological and civic systems in authentic context.
   - **Surveys & Projects:** Conducting household water usage audits, local tree mapping, waste segregation drives.
2. **Continuous and Comprehensive Evaluation (CCE) in EVS:**
   - **Assessment OF Learning (Summative):** Grading at term end; strictly secondary in EVS.
   - **Assessment FOR Learning (Formative):** Ongoing diagnostic feedback to guide environmental inquiry.
   - **Assessment AS Learning (Metacognitive):** Self-assessment and peer reflection during project execution.
3. **Authentic Formative Evaluation Tools:**
   - **Anecdotal Record (ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ):** Objective, dated narrative accounts of specific episodes or behavior demonstrating child’s curiosity, empathy, or collaboration.
   - **Portfolio (ਪੋਰਟਫੋਲੀਓ):** A purposeful, cumulative collection of the student’s authentic work over time (leaf rubbings, survey sheets, drawings, field notes, self-reflections).
   - **Rubrics & Rating Scales:** Qualitative criteria for assessing process skills (e.g. observation precision, cooperative teamwork).
   - **Moving Away from Rote Memorization:** EVS evaluation rejects textbook definitions and OMR recall of facts; it evaluates environmental values, inquiry skills, and civic consciousness.`,

            pa: `### [Level B: Basic — ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ ਦਾ ਸੰਕਲਪ ਅਤੇ ਏਕੀਕ੍ਰਿਤ ਸੁਭਾਅ]
1. **ਸੰਕਲਪ ਅਤੇ ਖੇਤਰ (ਕਲਾਸ 3–5):**
   - ਪ੍ਰਾਇਮਰੀ ਪੱਧਰ ਤੇ ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ (EVS) ਬੱਚੇ ਦੇ ਕੁਦਰਤੀ, ਸਮਾਜਿਕ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਆਲੇ-ਦੁਆਲੇ ਦਾ ਏਕੀਕ੍ਰਿਤ ਅਧਿਐਨ ਹੈ।
   - **ਮਹੱਤਵਪੂਰਨ ਨਿਯਮ (ਕਲਾਸ 1 ਅਤੇ 2):** ਪਹਿਲੀ ਅਤੇ ਦੂਜੀ ਜਮਾਤ ਵਿੱਚ ਵਾਤਾਵਰਨ ਦੀ **ਕੋਈ ਵੱਖਰੀ ਪਾਠ-ਪੁਸਤਕ ਨਹੀਂ ਹੁੰਦੀ**। ਵਾਤਾਵਰਨਿਕ ਸੰਕਲਪ **ਭਾਸ਼ਾ (ਪੰਜਾਬੀ) ਅਤੇ ਗਣਿਤ** ਰਾਹੀਂ ਏਕੀਕ੍ਰਿਤ ਰੂਪ ਵਿੱਚ ਪੜ੍ਹਾਏ ਜਾਂਦੇ ਹਨ (NCF 2005 / PSEB ਦਾ ਨਿਰਦੇਸ਼)।
2. **EVS ਦਾ ਏਕੀਕ੍ਰਿਤ ਸੁਭਾਅ:**
   - ਤੀਜੀ ਤੋਂ ਪੰਜਵੀਂ ਜਮਾਤ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਵਿਸ਼ਿਆਂ ਦੀਆਂ ਹੱਦਾਂ ਖ਼ਤਮ ਹੋ ਜਾਂਦੀਆਂ ਹਨ। ਇਸ ਵਿੱਚ **ਵਿਗਿਆਨ (Science)**, **ਸਮਾਜਿਕ ਅਧਿਐਨ (Social Studies)** ਅਤੇ **ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ (Environmental Education)** ਨੂੰ ਇਕੱਠਾ ਮਿਲਾ ਕੇ ਇੱਕ ਸਮੁੱਚੇ ਵਿਸ਼ੇ ਵਜੋਂ ਪੜ੍ਹਾਇਆ ਜਾਂਦਾ ਹੈ।
   - ਸਿੱਖਣ ਦਾ ਕ੍ਰਮ: **ਬੱਚਾ ਖ਼ੁਦ $\\to$ ਪਰਿਵਾਰ $\\to$ ਗੁਆਂਢ $\\to$ ਸਕੂਲ $\\to$ ਪਿੰਡ/ਜ਼ਿਲ੍ਹਾ $\\to$ ਵਿਸ਼ਵ** (ਸਥਾਨਕ ਤੋਂ ਵਿਸ਼ਵ-ਵਿਆਪੀ)।
3. **ਕਦਰਾਂ-ਕੀਮਤਾਂ:** ਪੌਦਿਆਂ ਤੇ ਜਾਨਵਰਾਂ ਪ੍ਰਤੀ ਹਮਦਰਦੀ, ਪਾਣੀ ਦੀ ਸੰਭਾਲ, ਲਿੰਗ ਸਮਾਨਤਾ ਅਤੇ ਸਫ਼ਾਈ ਸੇਵਕਾਂ ਦੇ ਕੰਮ ਦਾ ਸਤਿਕਾਰ।

---

### [Level I: Intermediate — EVS ਦੇ 6 ਮੁੱਖ ਥੀਮ ਅਤੇ ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲ]
1. **EVS ਦੇ 6 ਮੁੱਖ ਥੀਮ (NCERT / PSEB):**
   | ਥੀਮ ਨੰਬਰ | ਮੁੱਖ ਥੀਮ | ਵਿਸਥਾਰ ਅਤੇ ਉਪ-ਥੀਮ |
   |---|---|---|
   | **ਥੀਮ 1** | **ਪਰਿਵਾਰ ਅਤੇ ਮਿੱਤਰ (Family and Friends)** | ਸਭ ਤੋਂ ਵੱਡਾ ਥੀਮ; ਇਸ ਦੇ **4 ਉਪ-ਥੀਮ** ਹਨ: (1) ਆਪਸੀ ਰਿਸ਼ਤੇ, (2) ਕੰਮ ਅਤੇ ਖੇਡਾਂ, (3) ਜਾਨਵਰ, (4) ਪੌਦੇ। |
   | **ਥੀਮ 2** | **ਭੋਜਨ (Food)** | ਸੁਆਦ ਚੱਖਣਾ, ਪਾਚਨ, ਪਕਾਉਣ ਦੀਆਂ ਵਿਧੀਆਂ, ਭੋਜਨ ਦੀ ਸਾਂਭ-ਸੰਭਾਲ, ਭੁੱਖ, ਪੰਜਾਬੀ ਖ਼ੁਰਾਕ। |
   | **ਥੀਮ 3** | **ਰੈਣ-ਬਸੇਰਾ / ਆਵਾਸ (Shelter)** | ਮਨੁੱਖਾਂ ਤੇ ਜੀਵਾਂ ਦੇ ਘਰ; ਵਾਤਾਵਰਨ ਅਨੁਸਾਰ ਘਰਾਂ ਦੀ ਬਣਤਰ (ਰਾਜਸਥਾਨ ਵਿੱਚ ਮਿੱਟੀ ਦੇ ਘਰ, ਅਸਾਮ ਵਿੱਚ ਬਾਂਸ ਦੇ ਖੰਭਿਆਂ ਤੇ ਘਰ, ਕਸ਼ਮੀਰ ਵਿੱਚ ਸ਼ਿਕਾਰਾ)। |
   | **ਥੀਮ 4** | **ਪਾਣੀ (Water)** | ਸੋਮੇ, ਪਾਣੀ ਦੀ ਘਾਟ, ਰਵਾਇਤੀ ਬਾਓਲੀਆਂ, ਪਾਣੀ ਤੋਂ ਹੋਣ ਵਾਲੀਆਂ ਬਿਮਾਰੀਆਂ, ਘੁਲਣਸ਼ੀਲਤਾ ਦੇ ਪ੍ਰਯੋਗ। |
   | **ਥੀਮ 5** | **ਯਾਤਰਾ (Travel)** | ਆਵਾਜਾਈ ਦੇ ਸਾਧਨ, ਬਾਲਣ ਦੀ ਬੱਚਤ, ਨਕਸ਼ਾ ਪੜ੍ਹਨਾ (ਦਿਸ਼ਾਵਾਂ ਤੇ ਪੈਮਾਨਾ), ਰੇਲਵੇ ਟਿਕਟ, ਪੁਲਾੜ ਯਾਤਰਾ। |
   | **ਥੀਮ 6** | **ਚੀਜ਼ਾਂ ਜੋ ਅਸੀਂ ਬਣਾਉਂਦੇ ਹਾਂ ਤੇ ਕਰਦੇ ਹਾਂ** | ਰਵਾਇਤੀ ਕਿੱਤੇ (ਮਿੱਟੀ ਦੇ ਭਾਂਡੇ, ਫੁਲਕਾਰੀ ਕਢਾਈ, ਲੱਕੜ ਦਾ ਕੰਮ), ਸੰਦ ਅਤੇ ਤਕਨਾਲੋਜੀ। |
2. **ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲ (Process Skills):**
   - **ਨਿਰੀਖਣ (Observation):** ਗਿਆਨ ਇੰਦਰੀਆਂ ਰਾਹੀਂ ਬਾਰੀਕੀ ਨਾਲ ਵੇਖਣਾ।
   - **ਵਰਗੀਕਰਨ (Classification):** ਗੁਣਾਂ ਦੇ ਆਧਾਰ ਤੇ ਵੰਡਣਾ (ਜਿਵੇਂ ਘੁਲਣਸ਼ੀਲ ਤੇ ਅਘੁਲਣਸ਼ੀਲ)।
   - **ਸੰਚਾਰ (Communication):** ਚਿੱਤਰਾਂ, ਤਾਲਿਕਾਵਾਂ ਅਤੇ ਗੱਲਬਾਤ ਰਾਹੀਂ ਜਾਣਕਾਰੀ ਸਾਂਝੀ ਕਰਨਾ।
   - **ਅਨੁਮਾਨ ਤੇ ਸਿੱਟਾ (Inference & Prediction):** ਸਬੂਤਾਂ ਦੇ ਆਧਾਰ ਤੇ ਨਤੀਜਾ ਕੱਢਣਾ।

---

### [Level A: Advanced — ਗਤੀਵਿਧੀਆਂ, ਫੀਲਡ ਟ੍ਰਿਪ ਅਤੇ CCE ਮੁਲਾਂਕਣ]
1. **ਗਤੀਵਿਧੀਆਂ ਅਤੇ ਫੀਲਡ ਟ੍ਰਿਪ:**
   - ਪ੍ਰਯੋਗ: ਬੀਜ ਦਾ ਪੁੰਗਰਨਾ (ਧੁੱਪ ਅਤੇ ਪਾਣੀ ਦੇ ਪ੍ਰਭਾਵ ਦੀ ਨਿਗਰਾਨੀ ਕਰਨਾ), ਪਾਣੀ ਵਿੱਚ ਤੈਰਨ ਅਤੇ ਡੁੱਬਣ ਵਾਲੀਆਂ ਵਸਤੂਆਂ ਦਾ ਅਧਿਐਨ।
   - ਕਮਿਊਨਿਟੀ ਸਾਧਨ: ਕਿਸਾਨਾਂ, ਘੁਮਿਆਰਾਂ, ਬਜ਼ੁਰਗਾਂ ਜਾਂ ਸਫ਼ਾਈ ਕਰਮਚਾਰੀਆਂ ਨੂੰ ਜਮਾਤ ਵਿੱਚ ਸੱਦ ਕੇ ਗੱਲਬਾਤ ਕਰਵਾਉਣਾ।
   - ਸਥਾਨਕ ਦੌਰੇ: ਪਿੰਡ ਦੇ ਛੱਪੜ, ਹਰੀਕੇ ਪੱਤਣ ਝੀਲ, ਬਾਗ਼ ਜਾਂ ਡਾਕਖ਼ਾਨੇ ਦਾ ਦੌਰਾ ਕਰਨਾ।
2. **ਨਿਰੰਤਰ ਅਤੇ ਵਿਆਪਕ ਮੁਲਾਂਕਣ (CCE):**
   - ਰੱਟਾ ਪ੍ਰਣਾਲੀ ਅਤੇ ਪਰਿਭਾਸ਼ਾਵਾਂ ਯਾਦ ਕਰਨ ਦੀ ਮਨਾਹੀ।
   - **ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ (Anecdotal Record):** ਵਿਦਿਆਰਥੀ ਦੇ ਵਤੀਰੇ, ਦਇਆ ਜਾਂ ਵਿਸ਼ੇਸ਼ ਘਟਨਾ ਦਾ ਮਿਤੀ-ਵਾਰ ਲਿਖਤੀ ਵੇਰਵਾ।
   - **ਪੋਰਟਫੋਲੀਓ (Portfolio):** ਵਿਦਿਆਰਥੀ ਦੇ ਸਭ ਤੋਂ ਵਧੀਆ ਕੰਮਾਂ (ਡਰਾਇੰਗ, ਰਿਪੋਰਟਾਂ, ਇਕੱਠੇ ਕੀਤੇ ਪੱਤੇ) ਦਾ ਯੋਜਨਾਬੱਧ ਸੰਗ੍ਰਹਿ।
   - ਰੂਬਰਿਕਸ ਅਤੇ ਨਿਰੀਖਣ ਸੂਚੀਆਂ (Checklists)।`,

            hi: `### [Level B: Basic — EVS की अवधारणा एवं एकीकृत प्रकृति]
1. **अवधारणा एवं विस्तार (कक्षा 3–5):**
   - प्राथमिक स्तर पर पर्यावरण अध्ययन (EVS) बालक के प्राकृतिक, सामाजिक एवं सांस्कृतिक परिवेश का एकीकृत अध्ययन है।
   - **महत्वपूर्ण नियम (कक्षा 1 व 2):** कक्षा 1 और 2 में पर्यावरण अध्ययन की **कोई अलग पाठ्यपुस्तक नहीं होती**। पर्यावरण की अवधारणाएँ **भाषा और गणित** के माध्यम से एकीकृत रूप में पढ़ाई जाती हैं (NCF 2005 का निर्देश)।
2. **EVS की एकीकृत प्रकृति:**
   - कक्षा 3 से 5 में EVS अलग-अलग विषयों की सीमाएँ समाप्त करता है। यह **विज्ञान, सामाजिक अध्ययन तथा पर्यावरण शिक्षा** को एक समग्र विषय के रूप में समाहित करता है।
   - सीखने का क्रम: **स्वयं $\\to$ परिवार $\\to$ पड़ोस $\\to$ समुदाय $\\to$ विश्व** (स्थानीय से वैश्विक)।
3. **मूल्य एवं संवेदनशीलता:** पौधों, जीव-जंतुओं के प्रति संवेदनशीलता, जल संरक्षण, लैंगिक समानता तथा स्वच्छता कर्मियों के प्रति सम्मान।

---

### [Level I: Intermediate — EVS के 6 मुख्य थीम एवं प्रक्रिया कौशल]
1. **EVS के 6 मुख्य थीम (NCERT / PSEB):**
   | थीम संख्या | मुख्य थीम | विस्तार एवं उप-थीम |
   |---|---|---|
   | **थीम 1** | **परिवार और मित्र (Family and Friends)** | सबसे विस्तृत थीम; इसके **4 उप-थीम** हैं: (1) संबंध, (2) कार्य और खेल, (3) पशु, (4) पौधे। |
   | **थीम 2** | **भोजन (Food)** | स्वाद, पाचन, पकाने की विधियाँ, संरक्षण, भूख, क्षेत्रीय व्यंजन। |
   | **थीम 3** | **आवास (Shelter)** | विभिन्न आवास; जलवायु के अनुसार घरों की बनावट (राजस्थान में मिट्टी के घर, असम में बाँस के खंभों पर घर, कश्मीर में हाउसबोट)। |
   | **थीम 4** | **जल (Water)** | स्रोत, जल संकट, पारंपरिक बावड़ियाँ, जल-जनित रोग, घुलनशीलता के प्रयोग। |
   | **थीम 5** | **यात्रा (Travel)** | परिवहन के साधन, ईंधन संरक्षण, मानचित्र पठन (दिशाएँ व पैमाना), टिकट, अंतरिक्ष यात्रा। |
   | **थीम 6** | **हम चीजें कैसे बनाते हैं और करते हैं** | पारंपरिक शिल्प (मिट्टी के बर्तन, फुलकारी, बुनाई), औजार एवं तकनीक। |
2. **प्रक्रिया कौशल (Process Skills):**
   - **अवलोकन (Observation):** इंद्रियों द्वारा प्रत्यक्ष निरीक्षण करना।
   - **वर्गीकरण (Classification):** गुणों के आधार पर समूहों में बाँटना।
   - **मापन एवं अनुमान (Measurement):** तापमान, वर्षा या लंबाई का मापन।
   - **संचार (Communication):** चित्रों, तालिकाओं द्वारा विचार साझा करना।
   - **निष्कर्ष एवं भविष्यवाणी:** साक्ष्यों के आधार पर परिणाम निकालना।

---

### [Level A: Advanced — गतिविधियाँ, क्षेत्र भ्रमण एवं CCE मूल्यांकन]
1. **गतिविधियाँ एवं क्षेत्र भ्रमण:**
   - प्रयोग: बीज अंकुरण (नमी, प्रकाश व वायु का प्रभाव देखना), पानी में तैरने-डूबने का प्रयोग।
   - सामुदायिक संसाधन: किसान, कुम्हार, दादा-दादी या स्वच्छता कर्मियों को कक्षा में आमंत्रित करना।
   - क्षेत्र भ्रमण: स्थानीय तालाब, हरीके पत्तन आर्द्रभूमि, नर्सरी या डाकघर का भ्रमण।
2. **सतत एवं व्यापक मूल्यांकन (CCE):**
   - परिभाषाओं को रटने का पूर्ण निषेध।
   - **उपाख्यानात्मक अभिलेख (Anecdotal Record):** बालक की किसी विशिष्ट घटना या संवेदनशीलता का तिथिबद्ध संक्षिप्त वस्तुनिष्ठ विवरण।
   - **पोर्टफोलियो (Portfolio):** छात्र के सर्वोत्तम कार्यों (चित्र, सर्वेक्षण पत्र, पत्तों के नमूने) का सुव्यवस्थित संकलन।
   - रूब्रिक्स एवं अवलोकन चेकलिस्ट।`
        },
        keyNotes: {
            en: [
                'In Classes 1 & 2, EVS is NOT taught through a separate textbook; it is integrated into Language and Mathematics (NCF 2005).',
                'EVS integrates three major disciplines: Science, Social Studies, and Environmental Education.',
                'The 6 core NCERT/PSEB themes are: 1. Family and Friends (with 4 sub-themes: Relationships, Work & Play, Animals, Plants), 2. Food, 3. Shelter, 4. Water, 5. Travel, 6. Things We Make and Do.',
                'Pedagogy must be spiral and constructivist, moving from the child\'s immediate local context to the global environment.',
                'Process skills include: Observation, Classification, Measurement, Communication, Inference, and Prediction.',
                'Field visits and community resource persons (farmers, potters, sanitation workers) provide authentic experiential learning.',
                'Evaluation tools: Anecdotal records (factual episode narratives) and Portfolios (cumulative evidence of child\'s growth).',
                'Rote memorization of scientific definitions is strictly rejected in primary EVS.'
            ],
            pa: [
                'ਪਹਿਲੀ ਅਤੇ ਦੂਜੀ ਜਮਾਤ ਵਿੱਚ EVS ਦੀ ਕੋਈ ਵੱਖਰੀ ਕਿਤਾਬ ਨਹੀਂ ਹੁੰਦੀ; ਇਹ ਭਾਸ਼ਾ ਅਤੇ ਗਣਿਤ ਰਾਹੀਂ ਪੜ੍ਹਾਈ ਜਾਂਦੀ ਹੈ (NCF 2005)।',
                'EVS ਤਿੰਨ ਵਿਸ਼ਿਆਂ ਦਾ ਸੰਗਮ ਹੈ: ਵਿਗਿਆਨ, ਸਮਾਜਿਕ ਅਧਿਐਨ ਅਤੇ ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ।',
                'EVS ਦੇ 6 ਮੁੱਖ ਥੀਮ ਹਨ: 1. ਪਰਿਵਾਰ ਅਤੇ ਮਿੱਤਰ (4 ਉਪ-ਥੀਮ: ਰਿਸ਼ਤੇ, ਕੰਮ ਤੇ ਖੇਡਾਂ, ਜਾਨਵਰ, ਪੌਦੇ), 2. ਭੋਜਨ, 3. ਰੈਣ-ਬਸੇਰਾ, 4. ਪਾਣੀ, 5. ਯਾਤਰਾ, 6. ਚੀਜ਼ਾਂ ਜੋ ਅਸੀਂ ਬਣਾਉਂਦੇ ਹਾਂ ਤੇ ਕਰਦੇ ਹਾਂ।',
                'ਸਿੱਖਿਆ ਬੱਚੇ ਦੇ ਸਥਾਨਕ ਘਰ-ਪਰਿਵਾਰ ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਬਾਹਰੀ ਦੁਨੀਆ ਵੱਲ ਵਧਦੀ ਹੈ।',
                'ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲ: ਨਿਰੀਖਣ, ਵਰਗੀਕਰਨ, ਮਾਪਣ, ਸੰਚਾਰ, ਅਨੁਮਾਨ ਅਤੇ ਸਿੱਟਾ ਕੱਢਣਾ।',
                'ਸਥਾਨਕ ਦੌਰੇ (Field trips) ਅਤੇ ਕਮਿਊਨਿਟੀ ਸਾਧਨ (ਕਿਸਾਨ, ਸਫ਼ਾਈ ਸੇਵਕ) ਅਸਲ ਜੀਵਨ ਅਨੁਭਵ ਦਿੰਦੇ ਹਨ।',
                'ਮੁਲਾਂਕਣ ਸੰਦ: ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ (Anecdotal record) ਅਤੇ ਪੋਰਟਫੋਲੀਓ (Portfolio)।',
                'EVS ਵਿੱਚ ਵਿਗਿਆਨਕ ਪਰਿਭਾਸ਼ਾਵਾਂ ਰਟਣ ਦੀ ਸਖ਼ਤ ਮਨਾਹੀ ਹੈ।'
            ],
            hi: [
                'कक्षा 1 और 2 में EVS की कोई अलग पाठ्यपुस्तक नहीं होती; इसे भाषा और गणित में एकीकृत किया गया है (NCF 2005)।',
                'EVS तीन प्रमुख विषयों का एकीकरण है: विज्ञान, सामाजिक अध्ययन तथा पर्यावरण शिक्षा।',
                'EVS के 6 मुख्य थीम हैं: 1. परिवार और मित्र (4 उप-थीम: संबंध, कार्य व खेल, पशु, पौधे), 2. भोजन, 3. आवास, 4. जल, 5. यात्रा, 6. हम चीजें कैसे बनाते हैं और करते हैं।',
                'शिक्षण बालक के स्थानीय परिवेश से वैश्विक परिवेश की ओर सर्पिलाकार (Spiral) रूप में बढ़ता है।',
                'प्रक्रिया कौशल: अवलोकन, वर्गीकरण, मापन, संप्रेषण, निष्कर्ष एवं भविष्यवाणी।',
                'क्षेत्र भ्रमण एवं सामुदायिक संसाधन (किसान, कुम्हार, स्वच्छता कर्मी) मूर्त अनुभव प्रदान करते हैं।',
                'मूल्यांकन उपकरण: उपाख्यानात्मक अभिलेख (Anecdotal record) तथा पोर्टफोलियो (Portfolio)।',
                'प्राथमिक EVS में वैज्ञानिक परिभाषाओं को रटने का पूर्ण निषेध है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Class 1-2 Mandate: NO separate EVS book; Integrated with Language & Math.',
                'Tripartite Integration: Science + Social Studies + Environmental Education.',
                '6 Themes: Family & Friends (4 sub-themes: Relationships, Work/Play, Animals, Plants) | Food | Shelter | Water | Travel | Things We Make and Do.',
                'Core Process Skills: Observation, Classification, Measurement, Communication, Inference, Prediction.',
                'Experiential Tools: Seed germination, rain gauges, water testing, community interviews.',
                'Formative Evaluation: Portfolio (best cumulative student artifacts) + Anecdotal Record (objective behavioral episode notes).'
            ],
            pa: [
                'ਕਲਾਸ 1-2 ਨਿਯਮ: EVS ਦੀ ਕੋਈ ਵੱਖਰੀ ਕਿਤਾਬ ਨਹੀਂ; ਭਾਸ਼ਾ ਤੇ ਗਣਿਤ ਵਿੱਚ ਸ਼ਾਮਲ।',
                'ਤਿੰਨ ਵਿਸ਼ੇ: ਵਿਗਿਆਨ + ਸਮਾਜਿਕ ਅਧਿਐਨ + ਵਾਤਾਵਰਨ ਸਿੱਖਿਆ।',
                '6 ਥੀਮ: ਪਰਿਵਾਰ ਤੇ ਮਿੱਤਰ (4 ਉਪ-ਥੀਮ: ਰਿਸ਼ਤੇ, ਕੰਮ/ਖੇਡਾਂ, ਜਾਨਵਰ, ਪੌਦੇ) | ਭੋਜਨ | ਰੈਣ-ਬਸੇਰਾ | ਪਾਣੀ | ਯਾਤਰਾ | ਚੀਜ਼ਾਂ ਜੋ ਅਸੀਂ ਬਣਾਉਂਦੇ ਹਾਂ ਤੇ ਕਰਦੇ ਹਾਂ।',
                'ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲ: ਨਿਰੀਖਣ, ਵਰਗੀਕਰਨ, ਮਾਪਣ, ਸੰਚਾਰ, ਅਨੁਮਾਨ।',
                'ਪ੍ਰਯੋਗ: ਬੀਜ ਪੁੰਗਰਨਾ, ਮੀਂਹ ਮਾਪਕ, ਪਾਣੀ ਟੈਸਟ, ਸਥਾਨਕ ਦੌਰੇ।',
                'ਮੁਲਾਂਕਣ: ਪੋਰਟਫੋਲੀਓ (ਸਰਵੋਤਮ ਕੰਮਾਂ ਦਾ ਸੰਗ੍ਰਹਿ) + ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ (Anecdotal Record)।'
            ],
            hi: [
                'कक्षा 1-2 नियम: कोई अलग EVS पुस्तक नहीं; भाषा व गणित में समाहित।',
                'त्रिपक्षीय एकीकरण: विज्ञान + सामाजिक अध्ययन + पर्यावरण शिक्षा।',
                '6 थीम: परिवार और मित्र (4 उप-थीम: संबंध, कार्य/खेल, पशु, पौधे) | भोजन | आवास | जल | यात्रा | हम चीजें कैसे बनाते हैं और करते हैं।',
                'प्रक्रिया कौशल: अवलोकन, वर्गीकरण, मापन, संप्रेषण, निष्कर्ष।',
                'मूर्त उपकरण: बीज अंकुरण, वर्षामापी, जल परीक्षण, सामुदायिक साक्षात्कार।',
                'रचनात्मक आकलन: पोर्टफोलियो (सर्वोत्तम कार्यों का संकलन) + उपाख्यानात्मक अभिलेख (Anecdotal Record)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: In Classes 1 and 2, environmental studies is completely neglected and should be introduced with a heavy dedicated textbook. Correction: NCF 2005 purposefully integrates EVS into Language and Mathematics in Classes 1 & 2 to avoid fragmented subject overload; environmental concepts are taught naturally through stories and counting.',
                'Misconception: "Family and Friends" is just a single standalone chapter in the primary EVS textbook. Correction: "Family and Friends" is the premier umbrella theme that encompasses 4 vital sub-themes: Relationships, Work and Play, Animals, and Plants.',
                'Misconception: The best way to assess Class 4 EVS students is an end-of-year written test demanding verbatim definitions of evaporation and condensation. Correction: Primary EVS assessment rejects rote definitions; it emphasizes Continuous Comprehensive Evaluation (CCE) through Portfolios, Anecdotal Records, and observation of process skills during hands-on activities.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਪਹਿਲੀ ਅਤੇ ਦੂਜੀ ਜਮਾਤ ਵਿੱਚ ਵਾਤਾਵਰਨ ਨੂੰ ਬਿਲਕੁਲ ਨਹੀਂ ਪੜ੍ਹਾਇਆ ਜਾਂਦਾ, ਇਸ ਲਈ ਇੱਕ ਵੱਡੀ ਵੱਖਰੀ ਕਿਤਾਬ ਲਗਾਉਣੀ ਚਾਹੀਦੀ ਹੈ। ਸੁਧਾਰ: NCF 2005 ਨੇ ਜਾਣਬੁੱਝ ਕੇ ਛੋਟੇ ਬੱਚਿਆਂ ਤੇ ਕਿਤਾਬਾਂ ਦਾ ਬੋਝ ਘਟਾਉਣ ਲਈ ਵਾਤਾਵਰਨ ਨੂੰ ਭਾਸ਼ਾ ਅਤੇ ਗਣਿਤ ਵਿੱਚ ਏਕੀਕ੍ਰਿਤ ਕੀਤਾ ਹੈ।',
                'ਭੁਲੇਖਾ: "ਪਰਿਵਾਰ ਅਤੇ ਮਿੱਤਰ" EVS ਦੀ ਕਿਤਾਬ ਵਿੱਚ ਸਿਰਫ਼ ਇੱਕ ਛੋਟਾ ਜਿਹਾ ਇਕੱਲਾ ਪਾਠ ਹੈ। ਸੁਧਾਰ: "ਪਰਿਵਾਰ ਅਤੇ ਮਿੱਤਰ" ਸਭ ਤੋਂ ਵੱਡਾ ਮੁੱਖ ਥੀਮ ਹੈ ਜਿਸ ਦੇ ਅੰਦਰ 4 ਉਪ-ਥੀਮ ਹਨ: ਰਿਸ਼ਤੇ, ਕੰਮ ਤੇ ਖੇਡਾਂ, ਜਾਨਵਰ ਅਤੇ ਪੌਦੇ।',
                'ਭੁਲੇਖਾ: ਚੌਥੀ ਜਮਾਤ ਦੇ ਬੱਚਿਆਂ ਦੇ ਵਾਤਾਵਰਨ ਮੁਲਾਂਕਣ ਲਈ ਸਾਲ ਦੇ ਅੰਤ ਵਿੱਚ ਵਾਸ਼ਪੀਕਰਨ ਦੀਆਂ ਪਰਿਭਾਸ਼ਾਵਾਂ ਲਿਖਵਾਉਣ ਵਾਲੀ ਪ੍ਰੀਖਿਆ ਸਭ ਤੋਂ ਉੱਤਮ ਹੈ। ਸੁਧਾਰ: EVS ਵਿੱਚ ਪਰਿਭਾਸ਼ਾਵਾਂ ਰਟਣ ਦਾ ਵਿਰੋਧ ਕੀਤਾ ਜਾਂਦਾ ਹੈ; ਇੱਥੇ ਪੋਰਟਫੋਲੀਓ, ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ ਅਤੇ ਗਤੀਵਿਧੀਆਂ ਦੌਰਾਨ ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲਾਂ ਦਾ ਨਿਰੰਤਰ ਮੁਲਾਂਕਣ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: कक्षा 1 और 2 में पर्यावरण बिल्कुल नहीं पढ़ाया जाता, अतः एक भारी अलग पुस्तक लगानी चाहिए। सुधार: NCF 2005 ने बालकों पर बस्ते का बोझ घटाने हेतु EVS को भाषा एवं गणित में स्वाभाविक रूप से एकीकृत किया है।',
                'भ्रांति: "परिवार और मित्र" प्राथमिक EVS में केवल एक साधारण अध्याय है। सुधार: "परिवार और मित्र" एक वृहद मुख्य थीम है जिसके अंतर्गत 4 उप-थीम हैं: संबंध, कार्य व खेल, पशु तथा पौधे।',
                'भ्रांति: कक्षा 4 EVS के छात्रों के मूल्यांकन का सर्वोत्तम तरीका सत्रांत में वाष्पीकरण की परिभाषाएँ लिखवाना है। सुधार: EVS में परिभाषाओं को रटना वर्जित है; सतत एवं व्यापक मूल्यांकन (CCE) के तहत पोर्टफोलियो एवं उपाख्यानात्मक अभिलेखों द्वारा प्रक्रिया कौशलों का आकलन किया जाता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'To teach the EVS Theme "Water" in Class 4, Teacher Balwinder brings a bowl of water, an iron nail, a plastic bottle cap, and a dried leaf to the classroom. Instead of dictating the definition of density or Archimedes\' principle, he asks students to predict which items will float and which will sink, and then test them in the water bowl while recording observations in a two-column chart. What specific EVS process skills are the students actively engaged in during this lesson?',
                    pa: 'ਚੌਥੀ ਜਮਾਤ ਵਿੱਚ "ਪਾਣੀ" ਥੀਮ ਪੜ੍ਹਾਉਂਦੇ ਸਮੇਂ ਅਧਿਆਪਕ ਬਲਵਿੰਦਰ ਸਿੰਘ ਪਾਣੀ ਦਾ ਇੱਕ ਕਟੋਰਾ, ਇੱਕ ਲੋਹੇ ਦਾ ਕਿੱਲ, ਪਲਾਸਟਿਕ ਦੀ ਬੋਤਲ ਦਾ ਢੱਕਣ ਅਤੇ ਇੱਕ ਸੁੱਕਾ ਪੱਤਾ ਜਮਾਤ ਵਿੱਚ ਲਿਆਉਂਦਾ ਹੈ। ਘਣਤਾ ਦੀ ਪਰਿਭਾਸ਼ਾ ਰਟਾਉਣ ਦੀ ਥਾਂ, ਉਹ ਬੱਚਿਆਂ ਨੂੰ ਅੰਦਾਜ਼ਾ ਲਗਾਉਣ ਲਈ ਕਹਿੰਦਾ ਹੈ ਕਿ ਕਿਹੜੀ ਚੀਜ਼ ਤੈਰੇਗੀ ਅਤੇ ਕਿਹੜੀ ਡੁੱਬੇਗੀ, ਅਤੇ ਫਿਰ ਪਾਣੀ ਵਿੱਚ ਪਾ ਕੇ ਨਿਰੀਖਣ ਨੂੰ ਇੱਕ ਚਾਰਟ ਵਿੱਚ ਲਿਖਣ ਲਈ ਕਹਿੰਦਾ ਹੈ। ਇਸ ਪਾਠ ਦੌਰਾਨ ਵਿਦਿਆਰਥੀ EVS ਦੇ ਕਿਹੜੇ ਵਿਸ਼ੇਸ਼ ਪ੍ਰਕਿਰਿਆ ਕੌਸ਼ਲਾਂ (Process skills) ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹਨ?',
                    hi: 'कक्षा 4 में "जल" थीम पढ़ाते समय शिक्षक बलविंदर एक जल से भरा कटोरा, लोहे की कील, प्लास्टिक की बोतल का ढक्कन तथा एक सूखा पत्ता कक्षा में लाते हैं। घनत्व की परिभाषा रटाने के स्थान पर, वे छात्रों से अनुमान लगाने को कहते हैं कि कौन सी वस्तु तैरेगी और कौन सी डूबेगी, तथा फिर प्रयोग कर अवलोकनों को चार्ट में दर्ज कराते हैं। इस गतिविधि में छात्र EVS के किन विशिष्ट प्रक्रिया कौशलों का प्रयोग कर रहे हैं?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Making predictions prior to testing engages the process skill of Hypothesizing / Prediction.',
                        'Step 2: Carefully watching the physical outcome in the water bowl engages the process skill of Observation using sight.',
                        'Step 3: Grouping the objects into "Float" vs "Sink" categories in a two-column chart engages the process skills of Classification and Communication.'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਚੀਜ਼ਾਂ ਨੂੰ ਪਾਣੀ ਵਿੱਚ ਪਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਅੰਦਾਜ਼ਾ ਲਗਾਉਣਾ "ਭਵਿੱਖਬਾਣੀ / ਅਨੁਮਾਨ" (Prediction/Hypothesizing) ਕੌਸ਼ਲ ਹੈ।',
                        'ਕਦਮ 2: ਕਟੋਰੇ ਵਿੱਚ ਵਸਤੂਆਂ ਦਾ ਤੈਰਨਾ ਜਾਂ ਡੁੱਬਣਾ ਧਿਆਨ ਨਾਲ ਵੇਖਣਾ "ਨਿਰੀਖਣ" (Observation) ਕੌਸ਼ਲ ਹੈ।',
                        'ਕਦਮ 3: ਚਾਰਟ ਵਿੱਚ ਤੈਰਨ ਅਤੇ ਡੁੱਬਣ ਵਾਲੀਆਂ ਵਸਤੂਆਂ ਦੇ ਵੱਖ-ਵੱਖ ਗਰੁੱਪ ਬਣਾਉਣਾ "ਵਰਗੀਕਰਨ" (Classification) ਅਤੇ "ਸੰਚਾਰ" (Communication) ਕੌਸ਼ਲ ਹੈ।'
                    ],
                    hi: [
                        'चरण 1: प्रयोग से पूर्व अनुमान लगाना "भविष्यवाणी / परिकल्पना" (Prediction) कौशल है।',
                        'चरण 2: वस्तु की स्थिति को ध्यानपूर्वक देखना "अवलोकन" (Observation) कौशल है।',
                        'चरण 3: दो स्तंभों में तैरने व डूबने वाली वस्तुओं को दर्ज करना "वर्गीकरण" (Classification) एवं "संप्रेषण" (Communication) कौशल है।'
                    ]
                },
                finalAnswer: {
                    en: 'Prediction (Hypothesizing), Observation, Classification, and Communication.',
                    pa: 'ਅਨੁਮਾਨ (Prediction), ਨਿਰੀਖਣ (Observation), ਵਰਗੀਕਰਨ (Classification) ਅਤੇ ਸੰਚਾਰ (Communication)।',
                    hi: 'भविष्यवाणी/अनुमान (Prediction), अवलोकन (Observation), वर्गीकरण (Classification) एवं संप्रेषण (Communication)।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-evs-1',
                question: {
                    en: 'Why is EVS not taught as a separate textbook in Classes 1 and 2 according to NCF 2005?',
                    pa: 'NCF 2005 ਅਨੁਸਾਰ ਪਹਿਲੀ ਅਤੇ ਦੂਜੀ ਜਮਾਤ ਵਿੱਚ EVS ਦੀ ਵੱਖਰੀ ਕਿਤਾਬ ਕਿਉਂ ਨਹੀਂ ਹੁੰਦੀ?',
                    hi: 'NCF 2005 के अनुसार कक्षा 1 और 2 में EVS की अलग पाठ्यपुस्तक क्यों नहीं होती?'
                },
                answer: {
                    en: 'To prevent curriculum overload and present a holistic worldview; environmental concepts are integrated naturally into Language and Mathematics.',
                    pa: 'ਕਿਤਾਬਾਂ ਦਾ ਬੋਝ ਘਟਾਉਣ ਅਤੇ ਸਮੁੱਚੀ ਸੋਚ ਵਿਕਸਿਤ ਕਰਨ ਲਈ; ਵਾਤਾਵਰਨ ਸੰਕਲਪ ਭਾਸ਼ਾ ਅਤੇ ਗਣਿਤ ਵਿੱਚ ਹੀ ਏਕੀਕ੍ਰਿਤ ਕੀਤੇ ਗਏ ਹਨ।',
                    hi: 'बस्ते का बोझ घटाने एवं समग्र दृष्टिकोण विकसित करने हेतु; पर्यावरण संप्रत्ययों को भाषा एवं गणित में ही समाहित किया गया है।'
                }
            },
            {
                id: 'fc-evs-2',
                question: {
                    en: 'What are the 6 core themes of EVS prescribed by NCERT and PSEB for Classes 3 to 5?',
                    pa: 'ਤੀਜੀ ਤੋਂ ਪੰਜਵੀਂ ਜਮਾਤ ਲਈ NCERT ਅਤੇ PSEB ਵੱਲੋਂ ਨਿਰਧਾਰਿਤ EVS ਦੇ 6 ਮੁੱਖ ਥੀਮ ਕਿਹੜੇ ਹਨ?',
                    hi: 'कक्षा 3 से 5 हेतु NCERT एवं PSEB द्वारा निर्धारित EVS के 6 मुख्य थीम कौन से हैं?'
                },
                answer: {
                    en: '1. Family and Friends (with 4 sub-themes: Relationships, Work/Play, Animals, Plants); 2. Food; 3. Shelter; 4. Water; 5. Travel; 6. Things We Make and Do.',
                    pa: '1. ਪਰਿਵਾਰ ਅਤੇ ਮਿੱਤਰ (4 ਉਪ-ਥੀਮ: ਰਿਸ਼ਤੇ, ਕੰਮ/ਖੇਡਾਂ, ਜਾਨਵਰ, ਪੌਦੇ); 2. ਭੋਜਨ; 3. ਰੈਣ-ਬਸੇਰਾ; 4. ਪਾਣੀ; 5. ਯਾਤਰਾ; 6. ਚੀਜ਼ਾਂ ਜੋ ਅਸੀਂ ਬਣਾਉਂਦੇ ਹਾਂ ਤੇ ਕਰਦੇ ਹਾਂ।',
                    hi: '1. परिवार और मित्र (4 उप-थीम: संबंध, कार्य/खेल, पशु, पौधे); 2. भोजन; 3. आवास; 4. जल; 5. यात्रा; 6. हम चीजें कैसे बनाते हैं और करते हैं।'
                }
            },
            {
                id: 'fc-evs-3',
                question: {
                    en: 'What is an Anecdotal Record and why is it preferred over terminal testing in EVS?',
                    pa: 'ਕਿੱਸਾਗੋਈ ਰਿਕਾਰਡ (Anecdotal Record) ਕੀ ਹੁੰਦਾ ਹੈ ਅਤੇ EVS ਵਿੱਚ ਪ੍ਰੀਖਿਆਵਾਂ ਦੀ ਥਾਂ ਇਸ ਨੂੰ ਪਹਿਲ ਕਿਉਂ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ?',
                    hi: 'उपाख्यानात्मक अभिलेख (Anecdotal Record) क्या है और EVS में लिखित परीक्षा की तुलना में इसे प्राथमिकता क्यों दी जाती है?'
                },
                answer: {
                    en: 'It is an objective, dated narrative record of a student’s specific behavioral episode in natural situations (e.g. caring for a hurt bird), evaluating real values and empathy rather than rote memory.',
                    pa: 'ਇਹ ਵਿਦਿਆਰਥੀ ਦੇ ਕਿਸੇ ਵਿਸ਼ੇਸ਼ ਵਤੀਰੇ (ਜਿਵੇਂ ਜ਼ਖ਼ਮੀ ਪੰਛੀ ਦੀ ਦੇਖਭਾਲ ਕਰਨਾ) ਦਾ ਮਿਤੀ-ਵਾਰ ਸੰਖੇਪ ਲਿਖਤੀ ਵੇਰਵਾ ਹੁੰਦਾ ਹੈ, ਜੋ ਰੱਟੇ ਦੀ ਬਜਾਏ ਅਸਲ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਦਾ ਮੁਲਾਂਕਣ ਕਰਦਾ ਹੈ।',
                    hi: 'यह किसी विशिष्ट परिस्थिति में बालक के आचरण (जैसे घायल पक्षी की देखभाल) का तिथिबद्ध वस्तुनिष्ठ विवरण है, जो रटंत ज्ञान के स्थान पर वास्तविक मूल्यों का आकलन करता है।'
                }
            }
        ]
    }
];
