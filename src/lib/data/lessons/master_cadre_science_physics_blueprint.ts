import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const MASTER_CADRE_SCIENCE_PHYSICS_BLUEPRINT_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. FOUNDATION SCIENCE (CLASS 6–10 PSEB/NCERT), SI UNITS, LAB SAFETY & SCIENTISTS
    // =========================================================================
    {
        topicId: 'sci-foundation-class6-10-lab',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Level B (Class 6–8) -> Level I (Class 9–10) comprehensive foundation covering PSEB/NCERT core concepts, 7 SI Base Units, Fundamental Physical Constants, Laboratory Safety & Volumetric Apparatus, Qualitative Analysis Tests, and Indian/Punjab Scientists.'
        },
        bookRefs: [
            {
                title: 'NCERT & PSEB Science Textbooks (Class 6 to Class 10) & Laboratory Manual',
                author: 'NCERT / Punjab School Education Board (PSEB)',
                chapter: 'Units & Measurements, Matter, Acids/Bases, Light, Electricity, Cell & Lab Safety',
                relevance: 'Foundation concepts, SI units, qualitative tests, and scientific discoveries for Punjab Master Cadre Science.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 PSEB/NCERT Science Foundation]
1. **Matter & Separation of Mixtures:**
   - **States of Matter:** Solid (definite shape/volume), Liquid (definite volume, indefinite shape), Gas (indefinite shape/volume, high compressibility), **Plasma** (ionised gas in stars/lightning), and **Bose-Einstein Condensate (BEC)** (predicted by **S.N. Bose & Einstein, 1924**; supercooled bosons near $0\\text{ K}$).
   - **Physical vs Chemical Changes:** Physical changes are reversible and form no new substance (melting of ice, sublimation of $\\text{NH}_4\\text{Cl}$, camphor, naphthalene, dry ice $\\text{CO}_2$, iodine). Chemical changes form new substances with altered chemical bonds (rusting of iron $\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$, burning of $\\text{Mg}$ ribbon to $\\text{MgO}$, curdling of milk).
   - **Separation Techniques:** **Centrifugation** (butter from cream), **Sublimation** ($\\text{NH}_4\\text{Cl}$ + $\\text{NaCl}$), **Chromatography** (pigments/dyes), **Fractional Distillation** (miscible liquids with $\\Delta T_b < 25\\text{ K}$ or petroleum fractions), **Separating Funnel** (immiscible oil & water).
2. **Acids, Bases, Indicators & Metals vs Non-Metals:**
   | Indicator | Colour in Acidic Medium | Colour in Basic (Alkaline) Medium | Colour in Neutral Medium |
   |---|---|---|---|
   | **Litmus (Lichen extract)** | Red | Blue | Purple |
   | **Turmeric (Natural)** | Yellow | Reddish-Brown | Yellow |
   | **Phenolphthalein (Synthetic)** | Colourless | Pink / Magenta | Colourless |
   | **Methyl Orange (Synthetic)** | Red / Pink | Yellow | Orange |
   | **China Rose (Hibiscus)** | Dark Pink (Magenta) | Green | Light Pink |
   - **Metals vs Non-Metals Traps:** **Mercury (Hg)** is a liquid metal at room temperature; **Bromine (Br)** is a liquid non-metal; **Gallium (Ga) & Caesium (Cs)** melt on the palm ($\\approx 30^\\circ\\text{C}$); **Iodine** is a lustrous non-metal; **Graphite** is a non-metal conductor of electricity; **Lithium, Sodium, Potassium** are soft metals stored in kerosene.
3. **Motion, Light, Electric Circuits & Cell Biology Foundation:**
   - **Light & Shadows:** Rectilinear propagation causes **umbra** (complete dark shadow) and **penumbra** (partial shadow); pinhole camera forms an **inverted real image**.
   - **Electric Circuit:** Fuse wire is an alloy of **Lead (Pb) and Tin (Sn)** having **high resistance and low melting point** (connected in series with live wire).
   - **Cell Discovery & Human/Plant Biology:** **Robert Hooke (1665)** discovered dead cork cells (*Micrographia*); **Anton van Leeuwenhoek (1674)** observed first living cells; **Robert Brown (1831)** discovered the nucleus; **Schleiden & Schwann (1838–39)** gave Cell Theory; **Rudolf Virchow (1855)** added *Omnis cellula-e-cellula*. Complete digestion occurs in the **small intestine (ileum)**; **xylem** transports water unidirectionally while **phloem** translocates food bidirectionally.

---

### [Level I: Intermediate — Class 9–10 SI Units, Constants, Lab Safety, Qualitative Tests & Scientists]
1. **The 7 SI Base Units & Supplementary Units:**
   | Base Quantity | SI Unit (Symbol) | Modern Defining Constant (2019 SI Redefinition) |
   |---|---|---|
   | **Length ($L$)** | metre ($\\text{m}$) | Speed of light $c = 299,792,458\\text{ m/s}$ |
   | **Mass ($M$)** | kilogram ($\\text{kg}$) | Planck constant $h = 6.62607015 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ |
   | **Time ($T$)** | second ($\\text{s}$) | Caesium-133 hyperfine transition $\\Delta\\nu_{\\text{Cs}} = 9,192,631,770\\text{ Hz}$ |
   | **Electric Current ($I$)** | ampere ($\\text{A}$) | Elementary charge $e = 1.602176634 \\times 10^{-19}\\text{ C}$ |
   | **Thermodynamic Temp ($\\Theta$)** | kelvin ($\\text{K}$) | Boltzmann constant $k_B = 1.380649 \\times 10^{-23}\\text{ J/K}$ |
   | **Amount of Substance ($N$)** | mole ($\\text{mol}$) | Avogadro constant $N_A = 6.02214076 \\times 10^{23}\\text{ mol}^{-1}$ |
   | **Luminous Intensity ($J$)** | candela ($\\text{cd}$) | Luminous efficacy $K_{\\text{cd}} = 683\\text{ lm/W}$ at $540\\times 10^{12}\\text{ Hz}$ |
   - **Supplementary / Dimensionless Angle Units:** **Radian ($\\text{rad}$)** for plane angle ($\\theta = s/r$) and **Steradian ($\\text{sr}$)** for solid angle ($\\Omega = A/r^2$).
   - **Fundamental Constants:** $c = 3\\times 10^8\\text{ m/s}$, $h = 6.626\\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $N_A = 6.022\\times 10^{23}\\text{ mol}^{-1}$, $k_B = 1.38\\times 10^{-23}\\text{ J/K}$, $G = 6.674\\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$, $e = 1.602\\times 10^{-19}\\text{ C}$, $R = N_A k_B = 8.314\\text{ J mol}^{-1}\\text{K}^{-1}$, Faraday constant $F = N_A e = 96485\\text{ C/mol}$.
2. **Laboratory Safety & Volumetric Apparatus:**
   - **Acid Dilution Rule:** **Always add concentrated acid slowly to water** with constant stirring (**A $\\to$ W**), **NEVER water to concentrated $\\text{H}_2\\text{SO}_4$**. Hydration of $\\text{H}_2\\text{SO}_4$ is highly exothermic; adding water causes local boiling and violent acid splashing.
   - **Fire Extinguishers:** Electrical & oil/petrol fires must **never** be extinguished with water; use **$\\text{CO}_2$ extinguisher** or dry sand. Soda-acid extinguisher uses $\\text{NaHCO}_3 + \\text{H}_2\\text{SO}_4 \\to \\text{CO}_2$.
   - **Volumetric Glassware:** Standard **50 mL Burette has a least count of $0.1\\text{ mL}$**. Read the **lower meniscus** for colourless/transparent liquids (water, oxalic acid, $\\text{NaOH}$) and the **upper meniscus** for dark coloured solutions (**$\\text{KMnO}_4$**) to avoid parallax error.
3. **High-Yield Qualitative Analysis & Flame Test Colours:**
   | Test / Cation / Anion | Reagent / Procedure | Characteristic Observation / Formula |
   |---|---|---|
   | **Flame Test: $\\text{Na}^+$ / $\\text{K}^+$** | Pt/Nichrome wire + conc. $\\text{HCl}$ | **Na: Golden Yellow**; **K: Lilac (Violet)** |
   | **Flame Test: $\\text{Ca}^{2+}$ / $\\text{Sr}^{2+}$ / $\\text{Ba}^{2+}$ / $\\text{Cu}^{2+}$** | Pt wire + conc. $\\text{HCl}$ | **Ca: Brick Red**; **Sr: Crimson Red**; **Ba: Apple Green**; **Cu: Bluish-Green** |
   | **Lassaigne's Test (Sodium Fusion)** | Fuse organic compound with $\\text{Na}$ metal | Converts covalent $\\text{N} \\to \\text{NaCN}$ (**Prussian Blue** $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$), $\\text{S} \\to \\text{Na}_2\\text{S}$ (**Violet** with sodium nitroprusside), $\\text{X} \\to \\text{NaX}$ |
   | **Brown Ring Test ($\\text{NO}_3^-$ Nitrate)** | Freshly prepared $\\text{FeSO}_4$ + conc. $\\text{H}_2\\text{SO}_4$ along side | Brown ring at junction: **$[\\text{Fe(H}_2\\text{O)}_5(\\text{NO})]\\text{SO}_4$** (Iron in $+1$ state, $\\text{NO}^+$) |
   | **Chromyl Chloride Test ($\\text{Cl}^-$)** | Solid chloride + $\\text{K}_2\\text{Cr}_2\\text{O}_7$ + conc. $\\text{H}_2\\text{SO}_4$ | Reddish-brown vapours of **$\\text{CrO}_2\\text{Cl}_2$**; turns $\\text{NaOH}$ yellow ($\\text{Na}_2\\text{CrO}_4$) $\\to$ yellow ppt $\\text{PbCrO}_4$ (Failed by $\\text{AgCl}, \\text{Hg}_2\\text{Cl}_2, \\text{PbCl}_2$) |
4. **Pioneering Indian & Punjab Scientists:**
   - **Dr. Har Gobind Khorana (1922–2011, Raipur, Punjab alumnus of Panjab University):** Shared **1968 Nobel Prize in Physiology or Medicine** for deciphering the **Genetic Code** (trinucleotide codons) and synthesizing the first artificial gene.
   - **Prof. Ruchi Ram Sahni (1863–1948, Lahore):** Pioneer of modern science education in Punjab, first Indian officer in India Meteorological Department, and popularizer of science lectures in Punjabi.
   - **Birbal Sahni (1891–1949, Bhera, West Punjab; son of Ruchi Ram Sahni):** Father of Indian **Palaeobotany**; FRS; founded Birbal Sahni Institute of Palaeosciences (Lucknow).
   - **Dr. Piara Singh Gill (1911–2002, Hoshiarpur, Punjab):** Renowned **Cosmic Ray & Nuclear Physicist**; worked with Compton at Chicago and directed CSIO Chandigarh.
   - **Sir C.V. Raman** (Raman Effect, 28 Feb 1928 — National Science Day, Nobel 1930); **S.N. Bose** (Bosons, Bose-Einstein statistics); **Homi J. Bhabha** (Father of Indian Nuclear Programme, TIFR/BARC); **Meghnad Saha** (Thermal Ionisation Equation).`,
            pa: `### [Level B: Basic — Class 6–8 PSEB/NCERT ਬੁਨਿਆਦੀ ਵਿਗਿਆਨ]
1. **ਪਦਾਰਥ ਦੀਆਂ ਅਵਸਥਾਵਾਂ ਅਤੇ ਮਿਸ਼ਰਣਾਂ ਦਾ ਨਿਖੇੜਾ:**
   - **ਪਦਾਰਥ ਦੀਆਂ 5 ਅਵਸਥਾਵਾਂ:** ਠੋਸ, ਦ੍ਰਵ, ਗੈਸ, **ਪਲਾਜ਼ਮਾ** (ਤਾਰਿਆਂ ਵਿੱਚ ਆਇਨਿਕ ਗੈਸ) ਅਤੇ **ਬੋਸ-ਆਈਨਸਟਾਈਨ ਕੰਡਨਸੇਟ (BEC)** (ਸਤਿੰਦਰ ਨਾਥ ਬੋਸ ਅਤੇ ਆਈਨਸਟਾਈਨ, 1924)।
   - **ਭੌਤਿਕ ਬਨਾਮ ਰਸਾਇਣਕ ਪਰਿਵਰਤਨ:** ਜੌਹਰ ਉੱਡਣਾ (Sublimation — ਨੌਸ਼ਾਦਰ $\\text{NH}_4\\text{Cl}$, ਕਪੂਰ, ਨੈਫਥਲੀਨ, ਸੁੱਕੀ ਬਰਫ਼ $\\text{CO}_2$, ਆਇਓਡੀਨ) ਭੌਤਿਕ ਪਰਿਵਰਤਨ ਹੈ। ਲੋਹੇ ਨੂੰ ਜੰਗਾਲ ਲੱਗਣਾ ($\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$) ਅਤੇ ਦੁੱਧ ਤੋਂ ਦਹੀਂ ਬਣਨਾ ਰਸਾਇਣਕ ਪਰਿਵਰਤਨ ਹਨ।
   - **ਸੂਚਕ (Indicators):** ਲਿਟਮਸ (ਤੇਜ਼ਾਬ ਵਿੱਚ ਲਾਲ, ਖਾਰ ਵਿੱਚ ਨੀਲਾ); ਹਲਦੀ (ਖਾਰ ਵਿੱਚ ਲਾਲ-ਭੂਰਾ); **ਫਿਨੋਲਫਥੈਲੀਨ** (ਤੇਜ਼ਾਬ ਵਿੱਚ ਰੰਗਹੀਣ, ਖਾਰ ਵਿੱਚ ਗੁਲਾਬੀ); **ਮਿਥਾਈਲ ਔਰੇਂਜ** (ਤੇਜ਼ਾਬ ਵਿੱਚ ਲਾਲ, ਖਾਰ ਵਿੱਚ ਪੀਲਾ)।
   - **ਸੈੱਲ ਖੋਜ:** **ਰਾਬਰਟ ਹੁੱਕ (1665)** ਨੇ ਕਾਰਕ ਵਿੱਚ ਮ੍ਰਿਤ ਸੈੱਲ ਖੋਜੇ; **ਲਿਊਵਨਹੁੱਕ (1674)** ਨੇ ਜੀਵਿਤ ਸੈੱਲ; **ਰਾਬਰਟ ਬ੍ਰਾਊਨ (1831)** ਨੇ ਕੇਂਦਰਕ (Nucleus)।

---

### [Level I: Intermediate — Class 9–10 SI ਇਕਾਈਆਂ, ਸਥਿਰਾਂਕ, ਲੈਬ ਸੁਰੱਖਿਆ ਅਤੇ ਵਿਗਿਆਨੀ]
1. **7 ਮੂਲ SI ਇਕਾਈਆਂ ਅਤੇ ਮਹੱਤਵਪੂਰਨ ਸਥਿਰਾਂਕ:**
   - ਲੰਬਾਈ — ਮੀਟਰ ($\\text{m}$), ਪੁੰਜ — ਕਿਲੋਗ੍ਰਾਮ ($\\text{kg}$), ਸਮਾਂ — ਸੈਕਿੰਡ ($\\text{s}$), ਬਿਜਲੀ ਧਾਰਾ — ਐਂਪੀਅਰ ($\\text{A}$), ਤਾਪਮਾਨ — ਕੈਲਵਿਨ ($\\text{K}$), ਪਦਾਰਥ ਦੀ ਮਾਤਰਾ — ਮੋਲ ($\\text{mol}$), ਪ੍ਰਕਾਸ਼ ਤੀਬਰਤਾ — ਕੈਂਡੇਲਾ ($\\text{cd}$)। ਪੂਰਕ ਇਕਾਈਆਂ: **ਰੇਡੀਅਨ ($\\text{rad}$)** ਅਤੇ **ਸਟੇਰੇਡੀਅਨ ($\\text{sr}$)**।
   - **ਮੂਲ ਸਥਿਰਾਂਕ:** ਪ੍ਰਕਾਸ਼ ਦੀ ਚਾਲ $c = 3\\times 10^8\\text{ m/s}$, ਪਲਾਂਕ ਸਥਿਰਾਂਕ $h = 6.626\\times 10^{-34}\\text{ J}\\cdot\\text{s}$, ਐਵੋਗਾਡਰੋ ਸੰਖਿਆ $N_A = 6.022\\times 10^{23}\\text{ mol}^{-1}$, ਬੋਲਟਜ਼ਮੈਨ ਸਥਿਰਾਂਕ $k_B = 1.38\\times 10^{-23}\\text{ J/K}$, ਗੁਰੂਤਾ ਸਥਿਰਾਂਕ $G = 6.674\\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$, ਇਲੈਕਟ੍ਰਾਨ ਚਾਰਜ $e = 1.602\\times 10^{-19}\\text{ C}$, ਗੈਸ ਸਥਿਰਾਂਕ $R = 8.314\\text{ J mol}^{-1}\\text{K}^{-1}$, ਫੈਰਾਡੇ ਸਥਿਰਾਂਕ $F = 96485\\text{ C/mol}$।
2. **ਪ੍ਰਯੋਗਸ਼ਾਲਾ ਸੁਰੱਖਿਆ ਅਤੇ ਮਾਪਕ ਯੰਤਰ:**
   - **ਤੇਜ਼ਾਬ ਪਤਲਾ ਕਰਨ ਦਾ ਨਿਯਮ:** ਹਮੇਸ਼ਾ **ਸੰਘਣੇ ਤੇਜ਼ਾਬ ($\\text{H}_2\\text{SO}_4$) ਨੂੰ ਹੌਲੀ-ਹੌਲੀ ਪਾਣੀ ਵਿੱਚ ਪਾਓ** ਅਤੇ ਹਿਲਾਉਂਦੇ ਰਹੋ; ਕਦੇ ਵੀ ਸੰਘਣੇ ਤੇਜ਼ਾਬ ਵਿੱਚ ਪਾਣੀ ਨਾ ਪਾਓ (ਬਹੁਤ ਜ਼ਿਆਦਾ ਤਾਪ ਪੈਦਾ ਹੋਣ ਕਾਰਨ ਤੇਜ਼ਾਬ ਬਾਹਰ ਛਿੱਟੇ ਮਾਰ ਸਕਦਾ ਹੈ)।
   - **ਬਿਊਰੇਟ (Burette):** ਘੱਟੋ-ਘੱਟ ਮਾਪ (Least Count) $= 0.1\\text{ mL}$; ਰੰਗਹੀਣ ਘੋਲਾਂ ਲਈ **ਹੇਠਲਾ ਮੈਨਿਸਕਸ** ਅਤੇ ਗੂੜ੍ਹੇ ਰੰਗ ਦੇ **$\\text{KMnO}_4$ ਲਈ ਉੱਪਰਲਾ ਮੈਨਿਸਕਸ** ਪੜ੍ਹਿਆ ਜਾਂਦਾ ਹੈ।
3. **ਗੁਣਾਤਮਕ ਵਿਸ਼ਲੇਸ਼ਣ (Qualitative Tests) ਅਤੇ ਲਾਟ ਟੈਸਟ (Flame Test):**
   | ਤੱਤ / ਆਇਨ | ਲਾਟ ਦਾ ਰੰਗ / ਪਰਖ | ਮੁੱਖ ਨਿਰੀਖਣ / ਸੂਤਰ |
   |---|---|---|
   | **$\\text{Na}^+$ / $\\text{K}^+$** | ਫਲੇਮ ਟੈਸਟ | **ਸੋਡੀਅਮ: ਸੁਨਹਿਰੀ ਪੀਲਾ (Golden Yellow)**; **ਪੋਟਾਸ਼ੀਅਮ: ਬੈਂਗਣੀ (Lilac)** |
   | **$\\text{Ca}^{2+}$ / $\\text{Sr}^{2+}$ / $\\text{Ba}^{2+}$ / $\\text{Cu}^{2+}$** | ਫਲੇਮ ਟੈਸਟ | **Ca: ਇੱਟ ਵਰਗਾ ਲਾਲ**; **Sr: ਗੂੜ੍ਹਾ ਲਾਲ (Crimson)**; **Ba: ਸੇਬ ਵਰਗਾ ਹਰਾ**; **Cu: ਨੀਲਾ-ਹਰਾ** |
   | **ਲੈਸੇਨ ਟੈਸਟ (Lassaigne's Test)** | ਸੋਡੀਅਮ ਧਾਤ ਨਾਲ ਗਰਮ ਕਰਨਾ | ਕਾਰਬਨਿਕ ਯੋਗਿਕਾਂ ਵਿੱਚ $\\text{N}$ (**Prussian Blue**), $\\text{S}$ ਅਤੇ ਹੈਲੋਜਨਾਂ ਦੀ ਪਰਖ |
   | **ਬ੍ਰਾਊਨ ਰਿੰਗ ਟੈਸਟ ($\\text{NO}_3^-$)** | ਤਾਜ਼ਾ $\\text{FeSO}_4$ + ਸੰਘਣਾ $\\text{H}_2\\text{SO}_4$ | ਭੂਰਾ ਛੱਲਾ: **$[\\text{Fe(H}_2\\text{O)}_5(\\text{NO})]\\text{SO}_4$** ($\\text{Fe}$ ਦੀ ਆਕਸੀਕਰਨ ਅਵਸਥਾ $+1$) |
   | **ਕ੍ਰੋਮਾਈਲ ਕਲੋਰਾਈਡ ਟੈਸਟ ($\\text{Cl}^-$)** | $\\text{K}_2\\text{Cr}_2\\text{O}_7$ + ਸੰਘਣਾ $\\text{H}_2\\text{SO}_4$ | ਲਾਲ-ਭੂਰੇ ਵਾਸ਼ਪ **$\\text{CrO}_2\\text{Cl}_2$** |
4. **ਪੰਜਾਬ ਅਤੇ ਭਾਰਤ ਦੇ ਮਹਾਨ ਵਿਗਿਆਨੀ:**
   - **ਡਾ. ਹਰਗੋਬਿੰਦ ਖੁਰਾਨਾ:** ਜੈਨੇਟਿਕ ਕੋਡ (Genetic Code) ਦੀ ਖੋਜ ਅਤੇ ਪਹਿਲੇ ਬਨਾਉਟੀ ਜੀਨ ਦੇ ਨਿਰਮਾਣ ਲਈ **1968 ਦਾ ਨੋਬਲ ਪੁਰਸਕਾਰ**।
   - **ਪ੍ਰੋ. ਰੁਚੀ ਰਾਮ ਸਾਹਨੀ:** ਪੰਜਾਬ ਵਿੱਚ ਆਧੁਨਿਕ ਵਿਗਿਆਨ ਸਿੱਖਿਆ ਅਤੇ ਮੌਸਮ ਵਿਗਿਆਨ ਦੇ ਮੋਢੀ।
   - **ਬੀਰਬਲ ਸਾਹਨੀ:** ਭਾਰਤੀ ਪੁਰਾ-ਬਨਸਪਤੀ ਵਿਗਿਆਨ (**Palaeobotany**) ਦੇ ਪਿਤਾਮਾ।
   - **ਡਾ. ਪਿਆਰਾ ਸਿੰਘ ਗਿੱਲ (ਹੁਸ਼ਿਆਰਪੁਰ):** ਪ੍ਰਸਿੱਧ **ਕੌਸਮਿਕ ਕਿਰਨ (Cosmic Ray) ਅਤੇ ਪ੍ਰਮਾਣੂ ਭੌਤਿਕ ਵਿਗਿਆਨੀ**; CSIO ਚੰਡੀਗੜ੍ਹ ਦੇ ਪਹਿਲੇ ਨਿਰਦੇਸ਼ਕ।`,
            hi: `### [Level B: Basic — Class 6–8 PSEB/NCERT आधारभूत विज्ञान]
1. **पदार्थ की अवस्थाएँ एवं मिश्रणों का पृथक्करण:**
   - **पदार्थ की 5 अवस्थाएँ:** ठोस, द्रव, गैस, **प्लाज्मा** (तारों में आयनित गैस) तथा **बोस-आइंस्टीन कंडेनसेट (BEC)** (सत्येंद्र नाथ बोस व आइंस्टीन, 1924)।
   - **भौतिक बनाम रासायनिक परिवर्तन:** ऊर्ध्वपातन (Sublimation — अमोनियम क्लोराइड $\\text{NH}_4\\text{Cl}$, कपूर, नैफ्थलीन, शुष्क बर्फ़ $\\text{CO}_2$, आयोडीन) भौतिक परिवर्तन है। लोहे पर जंग लगना ($\\text{Fe}_2\\text{O}_3\\cdot x\\text{H}_2\\text{O}$) और दूध का दही बनना रासायनिक परिवर्तन हैं।
   - **सूचक (Indicators):** लिटमस (अम्ल में लाल, क्षार में नीला); हल्दी (क्षार में लाल-भूरा); **फिनोलफ्थैलिन** (अम्ल में रंगहीन, क्षार में गुलाबी); **मेथिल ऑरेंज** (अम्ल में लाल, क्षार में पीला)।
   - **कोशिका खोज:** **रॉबर्ट हुक (1665)** ने कॉर्क में मृत कोशिका खोजी; **ल्यूवेनहॉक (1674)** ने जीवित कोशिका; **रॉबर्ट ब्राउन (1831)** ने केंद्रक (Nucleus)।

---

### [Level I: Intermediate — Class 9–10 SI मात्रक, नियतांक, प्रयोगशाला सुरक्षा एवं वैज्ञानिक]
1. **7 मूल SI मात्रक एवं भौतिक नियतांक:**
   - लंबाई — मीटर ($\\text{m}$), द्रव्यमान — किलोग्राम ($\\text{kg}$), समय — सेकंड ($\\text{s}$), विद्युत धारा — एम्पियर ($\\text{A}$), ताप — केल्विन ($\\text{K}$), पदार्थ की मात्रा — मोल ($\\text{mol}$), ज्योति तीव्रता — कैंडेला ($\\text{cd}$)। संपूरक मात्रक: **रेडियन ($\\text{rad}$)** तथा **स्टेरेडियन ($\\text{sr}$)**।
   - **मूल नियतांक:** प्रकाश की चाल $c = 3\\times 10^8\\text{ m/s}$, प्लांक नियतांक $h = 6.626\\times 10^{-34}\\text{ J}\\cdot\\text{s}$, आवोगाद्रो संख्या $N_A = 6.022\\times 10^{23}\\text{ mol}^{-1}$, बोल्ट्ज़मान नियतांक $k_B = 1.38\\times 10^{-23}\\text{ J/K}$, गुरुत्वाकर्षण नियतांक $G = 6.674\\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$, मूल आवेश $e = 1.602\\times 10^{-19}\\text{ C}$, गैस नियतांक $R = 8.314\\text{ J mol}^{-1}\\text{K}^{-1}$, फैराडे नियतांक $F = 96485\\text{ C/mol}$।
2. **प्रयोगशाला सुरक्षा एवं आयतनमितीय उपकरण:**
   - **अम्ल तनुकरण नियम:** हमेशा **सांद्र अम्ल ($\\text{H}_2\\text{SO}_4$) को धीरे-धीरे जल में मिलाएँ** और हिलाते रहें; कभी भी सांद्र अम्ल में जल न डालें (अत्यधिक ऊष्माक्षेपी अभिक्रिया के कारण अम्ल बाहर उछल सकता है)।
   - **ब्यूरेट (Burette):** अल्पतमांक (Least Count) $= 0.1\\text{ mL}$; रंगहीन विलयनों के लिए **निचला मेनिस्कस** और गहरे रंग के **$\\text{KMnO}_4$ के लिए ऊपरी मेनिस्कस** पढ़ा जाता है।
3. **गुणात्मक विश्लेषण (Qualitative Analysis) एवं ज्वाला परीक्षण (Flame Test):**
   | तत्व / आयन | ज्वाला का रंग / परीक्षण | मुख्य प्रेक्षण / सूत्र |
   |---|---|---|
   | **$\\text{Na}^+$ / $\\text{K}^+$** | ज्वाला परीक्षण | **Na: सुनहरा पीला (Golden Yellow)**; **K: बैंगनी (Lilac)** |
   | **$\\text{Ca}^{2+}$ / $\\text{Sr}^{2+}$ / $\\text{Ba}^{2+}$ / $\\text{Cu}^{2+}$** | ज्वाला परीक्षण | **Ca: ईंट जैसा लाल**; **Sr: किरमिजी लाल (Crimson)**; **Ba: सेब जैसा हरा**; **Cu: नीला-हरा** |
   | **लैसेन परीक्षण (Lassaigne's Test)** | सोडियम धातु के साथ संगलन | कार्बनिक यौगिकों में $\\text{N}$ (**Prussian Blue**), $\\text{S}$ तथा हैलोजन की पहचान |
   | **भूरा वलय परीक्षण ($\\text{NO}_3^-$)** | ताज़ा $\\text{FeSO}_4$ + सांद्र $\\text{H}_2\\text{SO}_4$ | भूरा वलय: **$[\\text{Fe(H}_2\\text{O)}_5(\\text{NO})]\\text{SO}_4$** ($\\text{Fe}$ की ऑक्सीकरण अवस्था $+1$) |
   | **क्रोमिल क्लोराइड परीक्षण ($\\text{Cl}^-$)** | $\\text{K}_2\\text{Cr}_2\\text{O}_7$ + सांद्र $\\text{H}_2\\text{SO}_4$ | लाल-भूरे वाष्प **$\\text{CrO}_2\\text{Cl}_2$** |
4. **पंजाब एवं भारत के प्रमुख वैज्ञानिक:**
   - **डॉ. हरगोबिंद खुराना:** आनुवंशिक कूट (Genetic Code) की व्याख्या और कृत्रिम जीन संश्लेषण हेतु **1968 का नोबेल पुरस्कार**।
   - **प्रो. रुचि राम साहनी:** पंजाब में आधुनिक विज्ञान शिक्षा और मौसम विज्ञान के अग्रदूत।
   - **बीरबल साहनी:** भारतीय पुरावनस्पति विज्ञान (**Palaeobotany**) के जनक।
   - **डॉ. प्यारा सिंह गिल (होशियारपुर):** प्रसिद्ध **कॉस्मिक किरण एवं नाभिकीय भौतिक विज्ञानी**; CSIO चंडीगढ़ के प्रथम निदेशक।`
        },
        keyNotes: {
            en: [
                '7 SI Base Units: metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol), candela (cd); Supplementary: radian (rad) & steradian (sr).',
                'Key Constants: c = 3×10^8 m/s, h = 6.626×10^-34 J·s, N_A = 6.022×10^23 mol^-1, k_B = 1.38×10^-23 J/K, G = 6.674×10^-11 N·m^2/kg^2, e = 1.602×10^-19 C, R = 8.314 J/(mol·K), F = 96485 C/mol.',
                'Lab Safety & Burette Rule: Always add concentrated acid slowly to water (never water to acid); read lower meniscus for colourless liquids and upper meniscus for dark KMnO4 (Burette LC = 0.1 mL).',
                'Flame Test Colours: Na (Golden Yellow), K (Lilac/Violet), Ca (Brick Red), Sr (Crimson Red), Ba (Apple Green), Cu (Bluish-Green).',
                'Qualitative Analysis: Lassaigne sodium extract detects N (Prussian blue Fe4[Fe(CN)6]3), S, and halogens; Brown Ring complex is [Fe(H2O)5(NO)]SO4 with Fe in +1 oxidation state; Chromyl chloride CrO2Cl2 confirms ionic Cl^-.',
                'Punjab Science Pioneers: Dr. Hargobind Khorana (Nobel 1968, Genetic Code), Prof. Ruchi Ram Sahni (Punjab science pioneer), Birbal Sahni (Palaeobotany), Piara Singh Gill (Cosmic rays).'
            ],
            pa: [
                '7 ਮੂਲ SI ਇਕਾਈਆਂ: ਮੀਟਰ (m), ਕਿਲੋਗ੍ਰਾਮ (kg), ਸੈਕਿੰਡ (s), ਐਂਪੀਅਰ (A), ਕੈਲਵਿਨ (K), ਮੋਲ (mol), ਕੈਂਡੇਲਾ (cd); ਪੂਰਕ: ਰੇਡੀਅਨ (rad) ਤੇ ਸਟੇਰੇਡੀਅਨ (sr)।',
                'ਮੂਲ ਸਥਿਰਾਂਕ: c = 3×10^8 m/s, h = 6.626×10^-34 J·s, N_A = 6.022×10^23 mol^-1, k_B = 1.38×10^-23 J/K, G = 6.674×10^-11 N·m^2/kg^2, R = 8.314 J/(mol·K), F = 96485 C/mol।',
                'ਲੈਬ ਸੁਰੱਖਿਆ: ਹਮੇਸ਼ਾ ਸੰਘਣੇ ਤੇਜ਼ਾਬ ਨੂੰ ਹੌਲੀ-ਹੌਲੀ ਪਾਣੀ ਵਿੱਚ ਪਾਓ; ਰੰਗਹੀਣ ਘੋਲਾਂ ਲਈ ਹੇਠਲਾ ਮੈਨਿਸਕਸ ਅਤੇ KMnO4 ਲਈ ਉੱਪਰਲਾ ਮੈਨਿਸਕਸ ਪੜ੍ਹੋ (ਬਿਊਰੇਟ LC = 0.1 mL)।',
                'ਫਲੇਮ ਟੈਸਟ ਦੇ ਰੰਗ: Na (ਸੁਨਹਿਰੀ ਪੀਲਾ), K (ਬੈਂਗਣੀ/Lilac), Ca (ਇੱਟ ਵਰਗਾ ਲਾਲ), Sr (ਗੂੜ੍ਹਾ ਲਾਲ), Ba (ਸੇਬ ਵਰਗਾ ਹਰਾ), Cu (ਨੀਲਾ-ਹਰਾ)।',
                'ਗੁਣਾਤਮਕ ਪਰਖਾਂ: ਲੈਸੇਨ ਟੈਸਟ (N, S, Halogens), ਬ੍ਰਾਊਨ ਰਿੰਗ [Fe(H2O)5(NO)]SO4 (Fe +1 ਅਵਸਥਾ ਵਿੱਚ), ਕ੍ਰੋਮਾਈਲ ਕਲੋਰਾਈਡ CrO2Cl2 (Cl^- ਲਈ)।',
                'ਪੰਜਾਬ ਦੇ ਵਿਗਿਆਨੀ: ਡਾ. ਹਰਗੋਬਿੰਦ ਖੁਰਾਨਾ (1968 ਨੋਬਲ, ਜੈਨੇਟਿਕ ਕੋਡ), ਪ੍ਰੋ. ਰੁਚੀ ਰਾਮ ਸਾਹਨੀ, ਬੀਰਬਲ ਸਾਹਨੀ (ਪੁਰਾ-ਬਨਸਪਤੀ ਵਿਗਿਆਨ), ਡਾ. ਪਿਆਰਾ ਸਿੰਘ ਗਿੱਲ (ਕੌਸਮਿਕ ਕਿਰਨਾਂ)।'
            ],
            hi: [
                '7 मूल SI मात्रक: मीटर (m), किलोग्राम (kg), सेकंड (s), एम्पियर (A), केल्विन (K), मोल (mol), कैंडेला (cd); संपूरक: रेडियन (rad) व स्टेरेडियन (sr)।',
                'मूल नियतांक: c = 3×10^8 m/s, h = 6.626×10^-34 J·s, N_A = 6.022×10^23 mol^-1, k_B = 1.38×10^-23 J/K, G = 6.674×10^-11 N·m^2/kg^2, R = 8.314 J/(mol·K), F = 96485 C/mol।',
                'प्रयोगशाला सुरक्षा: हमेशा सांद्र अम्ल को धीरे-धीरे जल में मिलाएँ; रंगहीन द्रवों के लिए निचला मेनिस्कस और KMnO4 के लिए ऊपरी मेनिस्कस पढ़ें (ब्यूरेट LC = 0.1 mL)।',
                'ज्वाला परीक्षण रंग: Na (सुनहरा पीला), K (बैंगनी/Lilac), Ca (ईंट जैसा लाल), Sr (किरमिजी लाल), Ba (सेब जैसा हरा), Cu (नीला-हरा)।',
                'गुणात्मक परीक्षण: लैसेन परीक्षण (N, S, Halogens), भूरा वलय [Fe(H2O)5(NO)]SO4 (Fe +1 अवस्था में), क्रोमिल क्लोराइड CrO2Cl2 (Cl^- के लिए)।',
                'पंजाब के वैज्ञानिक: डॉ. हरगोबिंद खुराना (1968 नोबेल, आनुवंशिक कूट), प्रो. रुचि राम साहनी, बीरबल साहनी (पुरावनस्पति विज्ञान), डॉ. प्यारा सिंह गिल (कॉस्मिक किरणें)।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Indicator Colour Code: Phenolphthalein = Colourless (Acid) / Pink (Base); Methyl Orange = Red (Acid) / Yellow (Base); Turmeric = Yellow (Acid) / Reddish-Brown (Base).',
                'Flame Test Mnemonic: Na = Golden Yellow, K = Lilac, Ca = Brick Red, Sr = Crimson, Ba = Apple Green, Cu = Bluish-Green (Be and Mg do NOT give flame test due to high ionisation energy).',
                'Relation between Constants: Universal Gas Constant R = N_A × k_B = 8.314 J/(mol·K); 1 Faraday F = N_A × e ≈ 96485 C/mol; 1 Light Year = 9.46 × 10^15 m; 1 Parsec = 3.26 Light Years = 3.08 × 10^16 m.',
                'Sublimable Solids List: Ammonium chloride (NH4Cl), Camphor, Naphthalene, Anthracene, Iodine (I2), and Dry Ice (solid CO2).',
                'Punjab Scientific Heritage: Khorana (Genetic Code, 1968 Nobel), Ruchi Ram Sahni (Meteorology & Punjabi science), Birbal Sahni (Palaeobotany), Piara Singh Gill (Cosmic rays, CSIO).'
            ],
            pa: [
                'ਸੂਚਕ ਰੰਗ ਕੋਡ: ਫਿਨੋਲਫਥੈਲੀਨ = ਰੰਗਹੀਣ (ਤੇਜ਼ਾਬ) / ਗੁਲਾਬੀ (ਖਾਰ); ਮਿਥਾਈਲ ਔਰੇਂਜ = ਲਾਲ (ਤੇਜ਼ਾਬ) / ਪੀਲਾ (ਖਾਰ); ਹਲਦੀ = ਪੀਲਾ (ਤੇਜ਼ਾਬ) / ਲਾਲ-ਭੂਰਾ (ਖਾਰ)।',
                'ਫਲੇਮ ਟੈਸਟ ਟ੍ਰਿਕ: Na = ਸੁਨਹਿਰੀ ਪੀਲਾ, K = ਬੈਂਗਣੀ, Ca = ਇੱਟ ਵਰਗਾ ਲਾਲ, Sr = ਗੂੜ੍ਹਾ ਲਾਲ, Ba = ਸੇਬ ਵਰਗਾ ਹਰਾ (Be ਅਤੇ Mg ਉੱਚ ਆਇਨੀਕਰਨ ਊਰਜਾ ਕਾਰਨ ਫਲੇਮ ਟੈਸਟ ਨਹੀਂ ਦਿੰਦੇ)।',
                'ਸਥਿਰਾਂਕਾਂ ਦਾ ਸਬੰਧ: R = N_A × k_B = 8.314 J/(mol·K); 1 ਫੈਰਾਡੇ F = N_A × e ≈ 96485 C/mol; 1 ਪ੍ਰਕਾਸ਼ ਸਾਲ = 9.46 × 10^15 m; 1 ਪਾਰਸੈਕ = 3.26 ਪ੍ਰਕਾਸ਼ ਸਾਲ।',
                'ਜੌਹਰ ਉੱਡਣ ਵਾਲੇ (Sublimable) ਠੋਸ: ਨੌਸ਼ਾਦਰ (NH4Cl), ਕਪੂਰ, ਨੈਫਥਲੀਨ, ਐਂਥਰਾਸੀਨ, ਆਇਓਡੀਨ (I2) ਅਤੇ ਸੁੱਕੀ ਬਰਫ਼ (ਠੋਸ CO2)।',
                'ਪੰਜਾਬ ਦੀ ਵਿਗਿਆਨਕ ਵਿਰਾਸਤ: ਡਾ. ਖੁਰਾਨਾ (1968 ਨੋਬਲ), ਰੁਚੀ ਰਾਮ ਸਾਹਨੀ, ਬੀਰਬਲ ਸਾਹਨੀ (ਪੁਰਾ-ਬਨਸਪਤੀ), ਪਿਆਰਾ ਸਿੰਘ ਗਿੱਲ (ਕੌਸਮਿਕ ਕਿਰਨਾਂ)।'
            ],
            hi: [
                'सूचक रंग कोड: फिनोलफ्थैलिन = रंगहीन (अम्ल) / गुलाबी (क्षार); मेथिल ऑरेंज = लाल (अम्ल) / पीला (क्षार); हल्दी = पीला (अम्ल) / लाल-भूरा (क्षार)।',
                'ज्वाला परीक्षण ट्रिक: Na = सुनहरा पीला, K = बैंगनी, Ca = ईंट जैसा लाल, Sr = किरमिजी लाल, Ba = सेब जैसा हरा (Be एवं Mg उच्च आयनन ऊर्जा के कारण ज्वाला परीक्षण नहीं देते)।',
                'नियतांक संबंध: R = N_A × k_B = 8.314 J/(mol·K); 1 फैराडे F = N_A × e ≈ 96485 C/mol; 1 प्रकाश वर्ष = 9.46 × 10^15 m; 1 पारसेक = 3.26 प्रकाश वर्ष।',
                'ऊर्ध्वपातन (Sublimable) ठोस: नौसादर (NH4Cl), कपूर, नैफ्थलीन, एंथ्रासीन, आयोडीन (I2) और शुष्क बर्फ़ (ठोस CO2)।',
                'पंजाब की वैज्ञानिक विरासत: डॉ. खुराना (1968 नोबेल), रुचि राम साहनी, बीरबल साहनी (पुरावनस्पति), प्यारा सिंह गिल (कॉस्मिक किरणें)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Beryllium (Be) and Magnesium (Mg) give characteristic colours in the Bunsen flame test like other alkaline earth metals. Correction: Be and Mg have very small atomic sizes and high ionisation energies, so Bunsen flame thermal energy cannot excite their valence electrons to visible levels.',
                'Misconception: In the Brown Ring Test for nitrate ([Fe(H2O)5(NO)]SO4), the oxidation state of iron is +2 or +3. Correction: Due to charge transfer from NO to Fe^2+ forming NO^+, iron exists in the unusual +1 oxidation state in the brown ring complex.',
                'Misconception: Light year and Parsec are units of time because they contain the word year/sec. Correction: Both Light Year (9.46 × 10^15 m) and Parsec (3.08 × 10^16 m) are astronomical units of distance (length).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਬੇਰੀਲੀਅਮ (Be) ਅਤੇ ਮੈਗਨੀਸ਼ੀਅਮ (Mg) ਵੀ ਬਾਕੀ ਖਾਰੀ ਧਰਤੀ ਧਾਤਾਂ ਵਾਂਗ ਫਲੇਮ ਟੈਸਟ ਵਿੱਚ ਰੰਗ ਦਿੰਦੇ ਹਨ। ਸੁਧਾਰ: Be ਅਤੇ Mg ਦਾ ਆਕਾਰ ਬਹੁਤ ਛੋਟਾ ਅਤੇ ਆਇਨੀਕਰਨ ਊਰਜਾ ਬਹੁਤ ਜ਼ਿਆਦਾ ਹੋਣ ਕਾਰਨ ਬੁਨਸਨ ਲਾਟ ਉਹਨਾਂ ਦੇ ਇਲੈਕਟ੍ਰਾਨਾਂ ਨੂੰ ਉਤੇਜਿਤ ਨਹੀਂ ਕਰ ਸਕਦੀ।',
                'ਭੁਲੇਖਾ: ਬ੍ਰਾਊਨ ਰਿੰਗ ਟੈਸਟ ([Fe(H2O)5(NO)]SO4) ਵਿੱਚ ਲੋਹੇ (Fe) ਦੀ ਆਕਸੀਕਰਨ ਅਵਸਥਾ +2 ਜਾਂ +3 ਹੁੰਦੀ ਹੈ। ਸੁਧਾਰ: NO^+ ਲਿਗੈਂਡ ਬਣਨ ਕਾਰਨ ਬ੍ਰਾਊਨ ਰਿੰਗ ਕੰਪਲੈਕਸ ਵਿੱਚ ਲੋਹੇ (Fe) ਦੀ ਆਕਸੀਕਰਨ ਅਵਸਥਾ +1 ਹੁੰਦੀ ਹੈ।',
                'ਭੁਲੇਖਾ: ਪ੍ਰਕਾਸ਼ ਸਾਲ (Light year) ਸਮੇਂ ਦੀ ਇਕਾਈ ਹੈ। ਸੁਧਾਰ: ਪ੍ਰਕਾਸ਼ ਸਾਲ (9.46 × 10^15 m) ਅਤੇ ਪਾਰਸੈਕ (3.08 × 10^16 m) ਖਗੋਲੀ ਦੂਰੀ (ਲੰਬਾਈ) ਦੀਆਂ ਇਕਾਈਆਂ ਹਨ।'
            ],
            hi: [
                'भ्रांति: बेरिलियम (Be) और मैग्नीशियम (Mg) भी अन्य क्षारीय मृदा धातुओं की तरह ज्वाला परीक्षण में रंग देते हैं। सुधार: Be और Mg का परमाणु आकार छोटा और आयनन ऊर्जा बहुत उच्च होने के कारण बुन्सन ज्वाला उनके इलेक्ट्रॉनों को उत्तेजित नहीं कर पाती।',
                'भ्रांति: भूरा वलय परीक्षण ([Fe(H2O)5(NO)]SO4) में आयरन (Fe) की ऑक्सीकरण अवस्था +2 या +3 होती है। सुधार: NO^+ लिगैंड बनने के कारण भूरा वलय संकुल में आयरन (Fe) की असामान्य ऑक्सीकरण अवस्था +1 होती है।',
                'भ्रांति: प्रकाश वर्ष (Light year) समय का मात्रक है। सुधार: प्रकाश वर्ष (9.46 × 10^15 m) और पारसेक (3.08 × 10^16 m) खगोलीय दूरी (लंबाई) के मात्रक हैं।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Verify the value of the Universal Gas Constant R and Faraday Constant F from fundamental constants given k_B = 1.3806 × 10^-23 J/K, e = 1.6022 × 10^-19 C, and N_A = 6.0221 × 10^23 mol^-1.',
                    pa: 'ਮੂਲ ਸਥਿਰਾਂਕਾਂ k_B = 1.3806 × 10^-23 J/K, e = 1.6022 × 10^-19 C ਅਤੇ N_A = 6.0221 × 10^23 mol^-1 ਤੋਂ ਸਰਵਵਿਆਪੀ ਗੈਸ ਸਥਿਰਾਂਕ R ਅਤੇ ਫੈਰਾਡੇ ਸਥਿਰਾਂਕ F ਦਾ ਮੁੱਲ ਪਤਾ ਕਰੋ।',
                    hi: 'मूल नियतांकों k_B = 1.3806 × 10^-23 J/K, e = 1.6022 × 10^-19 C तथा N_A = 6.0221 × 10^23 mol^-1 से सार्वत्रिक गैस नियतांक R और फैराडे नियतांक F का मान ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Universal Gas Constant R is Boltzmann constant per mole: R = N_A × k_B.',
                        'Step 2: R = (6.0221 × 10^23 mol^-1) × (1.3806 × 10^-23 J/K) = 8.314 J mol^-1 K^-1.',
                        'Step 3: Faraday Constant F is the charge of 1 mole of electrons: F = N_A × e = (6.0221 × 10^23) × (1.6022 × 10^-19 C) ≈ 96485 C/mol.'
                    ],
                    pa: [
                        'Step 1: ਸਰਵਵਿਆਪੀ ਗੈਸ ਸਥਿਰਾਂਕ R = N_A × k_B ਹੁੰਦਾ ਹੈ।',
                        'Step 2: R = (6.0221 × 10^23) × (1.3806 × 10^-23) = 8.314 J mol^-1 K^-1।',
                        'Step 3: ਫੈਰਾਡੇ ਸਥਿਰਾਂਕ F = N_A × e = (6.0221 × 10^23) × (1.6022 × 10^-19 C) ≈ 96485 C/mol।'
                    ],
                    hi: [
                        'Step 1: सार्वत्रिक गैस नियतांक R = N_A × k_B होता है।',
                        'Step 2: R = (6.0221 × 10^23) × (1.3806 × 10^-23) = 8.314 J mol^-1 K^-1।',
                        'Step 3: फैराडे नियतांक F = N_A × e = (6.0221 × 10^23) × (1.6022 × 10^-19 C) ≈ 96485 C/mol।'
                    ]
                },
                finalAnswer: {
                    en: 'R = 8.314 J mol^-1 K^-1 and F = 96485 C mol^-1',
                    pa: 'R = 8.314 J mol^-1 K^-1 ਅਤੇ F = 96485 C mol^-1',
                    hi: 'R = 8.314 J mol^-1 K^-1 तथा F = 96485 C mol^-1'
                }
            },
            {
                problem: {
                    en: 'An inorganic salt gives an apple-green colour in the Bunsen flame test, and when heated with solid K2Cr2O7 and concentrated H2SO4, it evolves reddish-brown vapours that turn NaOH solution yellow. Identify the salt.',
                    pa: 'ਇੱਕ ਅਕਾਰਬਨਿਕ ਲੂਣ ਫਲੇਮ ਟੈਸਟ ਵਿੱਚ ਸੇਬ ਵਰਗਾ ਹਰਾ (Apple-green) ਰੰਗ ਦਿੰਦਾ ਹੈ ਅਤੇ K2Cr2O7 ਤੇ ਸੰਘਣੇ H2SO4 ਨਾਲ ਗਰਮ ਕਰਨ ਤੇ ਲਾਲ-ਭੂਰੇ ਵਾਸ਼ਪ ਦਿੰਦਾ ਹੈ ਜੋ NaOH ਘੋਲ ਨੂੰ ਪੀਲਾ ਕਰ ਦਿੰਦੇ ਹਨ। ਲੂਣ ਦੀ ਪਛਾਣ ਕਰੋ।',
                    hi: 'एक अकार्बनिक लवण ज्वाला परीक्षण में सेब जैसा हरा (Apple-green) रंग देता है और ठोस K2Cr2O7 व सांद्र H2SO4 के साथ गर्म करने पर लाल-भूरे वाष्प देता है जो NaOH विलयन को पीला कर देते हैं। लवण की पहचान कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Apple-green flame colour is the characteristic test for Barium cation (Ba^2+).',
                        'Step 2: Evolution of reddish-brown vapours of Chromyl Chloride (CrO2Cl2) with K2Cr2O7 + conc. H2SO4 is the confirmatory test for Chloride anion (Cl^-).',
                        'Step 3: Combining Ba^2+ and Cl^- gives Barium Chloride (BaCl2).'
                    ],
                    pa: [
                        'Step 1: ਸੇਬ ਵਰਗਾ ਹਰਾ ਰੰਗ ਬੇਰੀਅਮ ਆਇਨ (Ba^2+) ਦੀ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ।',
                        'Step 2: K2Cr2O7 + ਸੰਘਣੇ H2SO4 ਨਾਲ ਲਾਲ-ਭੂਰੇ ਕ੍ਰੋਮਾਈਲ ਕਲੋਰਾਈਡ (CrO2Cl2) ਵਾਸ਼ਪ ਕਲੋਰਾਈਡ ਆਇਨ (Cl^-) ਦੀ ਪੁਸ਼ਟੀ ਕਰਦੇ ਹਨ।',
                        'Step 3: ਇਸ ਲਈ ਦਿੱਤਾ ਗਿਆ ਲੂਣ ਬੇਰੀਅਮ ਕਲੋਰਾਈਡ (BaCl2) ਹੈ।'
                    ],
                    hi: [
                        'Step 1: सेब जैसा हरा रंग बेरियम धनायन (Ba^2+) की पुष्टि करता है।',
                        'Step 2: K2Cr2O7 + सांद्र H2SO4 के साथ लाल-भूरे क्रोमिल क्लोराइड (CrO2Cl2) वाष्प क्लोराइड ऋणायन (Cl^-) की पुष्टि करते हैं।',
                        'Step 3: अतः दिया गया लवण बेरियम क्लोराइड (BaCl2) है।'
                    ]
                },
                finalAnswer: {
                    en: 'Barium Chloride (BaCl2)',
                    pa: 'ਬੇਰੀਅਮ ਕਲੋਰਾਈਡ (BaCl2)',
                    hi: 'बेरियम क्लोराइड (BaCl2)'
                }
            }
        ],
        flashcards: [
            {
                id: 'sci-found-fc-1',
                question: {
                    en: '[Level B] What are the colours of Phenolphthalein and Methyl Orange in acidic vs basic media?',
                    pa: '[Level B] ਤੇਜ਼ਾਬੀ ਅਤੇ ਖਾਰੀ ਮਾਧਿਅਮ ਵਿੱਚ ਫਿਨੋਲਫਥੈਲੀਨ ਅਤੇ ਮਿਥਾਈਲ ਔਰੇਂਜ ਦੇ ਰੰਗ ਕੀ ਹੁੰਦੇ ਹਨ?',
                    hi: '[Level B] अम्लीय एवं क्षारीय माध्यम में फिनोलफ्थैलिन और मेथिल ऑरेंज के रंग क्या होते हैं?'
                },
                answer: {
                    en: 'Phenolphthalein: Colourless in acid, Pink in base. Methyl Orange: Red/Pink in acid, Yellow in base.',
                    pa: 'ਫਿਨੋਲਫਥੈਲੀਨ: ਤੇਜ਼ਾਬ ਵਿੱਚ ਰੰਗਹੀਣ, ਖਾਰ ਵਿੱਚ ਗੁਲਾਬੀ। ਮਿਥਾਈਲ ਔਰੇਂਜ: ਤੇਜ਼ਾਬ ਵਿੱਚ ਲਾਲ, ਖਾਰ ਵਿੱਚ ਪੀਲਾ।',
                    hi: 'फिनोलफ्थैलिन: अम्ल में रंगहीन, क्षार में गुलाबी। मेथिल ऑरेंज: अम्ल में लाल, क्षार में पीला।'
                }
            },
            {
                id: 'sci-found-fc-2',
                question: {
                    en: '[Level I] Why should concentrated H2SO4 always be added slowly to water and never water to acid?',
                    pa: '[Level I] ਸੰਘਣੇ H2SO4 ਨੂੰ ਹਮੇਸ਼ਾ ਪਾਣੀ ਵਿੱਚ ਹੌਲੀ-ਹੌਲੀ ਕਿਉਂ ਪਾਉਣਾ ਚਾਹੀਦਾ ਹੈ, ਨਾ ਕਿ ਤੇਜ਼ਾਬ ਵਿੱਚ ਪਾਣੀ?',
                    hi: '[Level I] सांद्र H2SO4 को हमेशा जल में धीरे-धीरे क्यों मिलाना चाहिए, न कि अम्ल में जल?'
                },
                answer: {
                    en: 'Dilution of concentrated H2SO4 is highly exothermic; adding water to acid causes sudden local boiling and violent splashing of corrosive acid.',
                    pa: 'ਸੰਘਣੇ H2SO4 ਦਾ ਪਤਲਾ ਹੋਣਾ ਬਹੁਤ ਜ਼ਿਆਦਾ ਤਾਪ-ਉਤਪਾਦਕ (Exothermic) ਹੈ; ਤੇਜ਼ਾਬ ਵਿੱਚ ਪਾਣੀ ਪਾਉਣ ਨਾਲ ਅਚਾਨਕ ਉਬਾਲ ਆਉਂਦਾ ਹੈ ਅਤੇ ਤੇਜ਼ਾਬ ਬਾਹਰ ਛਿੱਟੇ ਮਾਰ ਸਕਦਾ ਹੈ।',
                    hi: 'सांद्र H2SO4 का तनुकरण अत्यधिक ऊष्माक्षेपी (Exothermic) है; अम्ल में जल डालने से अचानक उबाल आता है और अम्ल बाहर उछल सकता है।'
                }
            },
            {
                id: 'sci-found-fc-3',
                question: {
                    en: '[Level I] What is the chemical formula of the Brown Ring formed in the nitrate test and what is the oxidation state of Fe in it?',
                    pa: '[Level I] ਨਾਈਟ੍ਰੇਟ ਟੈਸਟ ਵਿੱਚ ਬਣਨ ਵਾਲੀ ਬ੍ਰਾਊਨ ਰਿੰਗ ਦਾ ਰਸਾਇਣਕ ਸੂਤਰ ਕੀ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ Fe ਦੀ ਆਕਸੀਕਰਨ ਅਵਸਥਾ ਕੀ ਹੈ?',
                    hi: '[Level I] नाइट्रेट परीक्षण में बनने वाले भूरे वलय (Brown Ring) का रासायनिक सूत्र क्या है और इसमें Fe की ऑक्सीकरण अवस्था क्या है?'
                },
                answer: {
                    en: 'Pentaaquanitrosyliron(I) sulphate: [Fe(H2O)5(NO)]SO4; Iron (Fe) is in the +1 oxidation state (with NO^+ nitrosylium ligand).',
                    pa: '[Fe(H2O)5(NO)]SO4; ਇਸ ਵਿੱਚ ਲੋਹਾ (Fe) +1 ਆਕਸੀਕਰਨ ਅਵਸਥਾ ਵਿੱਚ ਹੁੰਦਾ ਹੈ (NO^+ ਲਿਗੈਂਡ)।',
                    hi: '[Fe(H2O)5(NO)]SO4; इसमें आयरन (Fe) +1 ऑक्सीकरण अवस्था में होता है (NO^+ लिगैंड)।'
                }
            },
            {
                id: 'sci-found-fc-4',
                question: {
                    en: '[Level I] Match the flame test colours for Na+, K+, Ca2+, Sr2+, and Ba2+.',
                    pa: '[Level I] Na+, K+, Ca2+, Sr2+ ਅਤੇ Ba2+ ਲਈ ਫਲੇਮ ਟੈਸਟ ਦੇ ਰੰਗ ਦੱਸੋ।',
                    hi: '[Level I] Na+, K+, Ca2+, Sr2+ और Ba2+ के ज्वाला परीक्षण (Flame test) के रंग बताइए।'
                },
                answer: {
                    en: 'Na+ = Golden Yellow; K+ = Lilac (Violet); Ca2+ = Brick Red; Sr2+ = Crimson Red; Ba2+ = Apple Green.',
                    pa: 'Na+ = ਸੁਨਹਿਰੀ ਪੀਲਾ; K+ = ਬੈਂਗਣੀ (Lilac); Ca2+ = ਇੱਟ ਵਰਗਾ ਲਾਲ; Sr2+ = ਗੂੜ੍ਹਾ ਲਾਲ (Crimson); Ba2+ = ਸੇਬ ਵਰਗਾ ਹਰਾ।',
                    hi: 'Na+ = सुनहरा पीला; K+ = बैंगनी (Lilac); Ca2+ = ईंट जैसा लाल; Sr2+ = किरमिजी लाल (Crimson); Ba2+ = सेब जैसा हरा।'
                }
            },
            {
                id: 'sci-found-fc-5',
                question: {
                    en: '[Level I] Name four eminent scientists connected with Punjab and their landmark contributions.',
                    pa: '[Level I] ਪੰਜਾਬ ਨਾਲ ਸਬੰਧਤ ਚਾਰ ਪ੍ਰਮੁੱਖ ਵਿਗਿਆਨੀਆਂ ਦੇ ਨਾਮ ਅਤੇ ਉਹਨਾਂ ਦੇ ਮੁੱਖ ਯੋਗਦਾਨ ਦੱਸੋ।',
                    hi: '[Level I] पंजाब से जुड़े चार प्रमुख वैज्ञानिकों के नाम और उनके प्रमुख योगदान बताइए।'
                },
                answer: {
                    en: '1. Dr. Har Gobind Khorana (1968 Nobel Prize, Genetic Code & artificial gene); 2. Prof. Ruchi Ram Sahni (Meteorology & Punjab science pioneer); 3. Birbal Sahni (Father of Indian Palaeobotany); 4. Dr. Piara Singh Gill (Cosmic ray physicist, first Director CSIO Chandigarh).',
                    pa: '1. ਡਾ. ਹਰਗੋਬਿੰਦ ਖੁਰਾਨਾ (1968 ਨੋਬਲ, ਜੈਨੇਟਿਕ ਕੋਡ); 2. ਪ੍ਰੋ. ਰੁਚੀ ਰਾਮ ਸਾਹਨੀ (ਮੌਸਮ ਵਿਗਿਆਨ ਤੇ ਪੰਜਾਬ ਵਿਗਿਆਨ ਪ੍ਰਸਾਰ); 3. ਬੀਰਬਲ ਸਾਹਨੀ (ਪੁਰਾ-ਬਨਸਪਤੀ ਵਿਗਿਆਨ ਦੇ ਪਿਤਾਮਾ); 4. ਡਾ. ਪਿਆਰਾ ਸਿੰਘ ਗਿੱਲ (ਕੌਸਮਿਕ ਕਿਰਨ ਵਿਗਿਆਨੀ, CSIO ਚੰਡੀਗੜ੍ਹ)।',
                    hi: '1. डॉ. हरगोबिंद खुराना (1968 नोबेल, आनुवंशिक कूट); 2. प्रो. रुचि राम साहनी (मौसम विज्ञान व पंजाब विज्ञान प्रसार); 3. बीरबल साहनी (भारतीय पुरावनस्पति विज्ञान के जनक); 4. डॉ. प्यारा सिंह गिल (कॉस्मिक किरण भौतिक विज्ञानी, CSIO चंडीगढ़)।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. WAVES, ACOUSTICS & GEOMETRICAL / WAVE OPTICS (LEVEL I -> H -> G)
    // =========================================================================
    {
        topicId: 'sci-phy-waves-optics',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Level I (Class 9–10) -> Level H (Class 11–12) -> Level G (Graduation) mastery of SHM, Acoustics, Standing Waves, Doppler Effect, Ray Optics, Interference (YDSE, Thin Films, Newton Rings), Diffraction (Single Slit, Grating, Rayleigh Criterion), and Polarisation (Brewster, Malus, Wave Plates).'
        },
        bookRefs: [
            {
                title: 'NCERT Physics Class 11 (Part II) & Class 12 (Part II); Optics by Ajoy Ghatak',
                author: 'NCERT / Ajoy Ghatak',
                chapter: 'Oscillations, Waves, Ray Optics & Optical Instruments, Wave Optics',
                relevance: 'Complete coverage of SHM, organ pipes, Doppler effect, lensmaker formula, YDSE, Newton rings, grating, and polarisation.'
            }
        ],
        summary: {
            en: `### [Level I: Intermediate — Class 9–10 Reflection, Refraction, Human Eye & Sound]
1. **Spherical Mirrors, Refraction & Total Internal Reflection (TIR):**
   - **Mirror Formula & Magnification:** $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} = \\frac{2}{R}$ and $m = \\frac{h_i}{h_o} = -\\frac{v}{u}$. Concave mirror has $f < 0$; Convex mirror has $f > 0$ and **always forms a virtual, erect, diminished image** (used as rear-view mirror).
   - **Snell's Law:** $n_1 \\sin i = n_2 \\sin r \\implies n_{21} = \\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$ (frequency $\\nu$ remains **unchanged** during refraction).
   - **Total Internal Reflection (TIR):** Occurs when light travels from **optically denser to rarer medium** with $i > \\theta_c$, where $\\sin\\theta_c = \\frac{n_{\\text{rarer}}}{n_{\\text{denser}}} = \\frac{1}{n}$. Examples: **Optical fibres** (core $n_1 >$ cladding $n_2$), **Mirage**, sparkling of **Diamond ($n = 2.42, \\theta_c \\approx 24.4^\\circ$)**, totally reflecting prisms.
2. **Thin Lenses, Power & Human Eye Defects:**
   - **Thin Lens Formula:** $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$, linear magnification $m = +\\frac{v}{u}$, and **Power** $P = \\frac{1}{f(\\text{in m})}$ in **Dioptre (D)**. For lenses in contact: $P = P_1 + P_2 - dP_1P_2$.
   - **Human Eye (Near point $D = 25\\text{ cm}$, Far point $= \\infty$) & Defects:**
     | Eye Defect | Cause | Image Formed | Corrective Lens |
     |---|---|---|---|
     | **Myopia (Near-sightedness)** | Eyeball elongation / excessive curvature | In front of retina | **Concave (Diverging) lens** ($P < 0$) |
     | **Hypermetropia (Far-sightedness)** | Eyeball too short / focal length too long | Behind retina | **Convex (Converging) lens** ($P > 0$) |
     | **Presbyopia** | Weakening of ciliary muscles with age | Near & far blurred | **Bifocal lens** (Upper: Concave; Lower: Convex) |
     | **Astigmatism** | Non-spherical corneal curvature | Distorted axes | **Cylindrical lens** |
   - **Rayleigh Scattering:** Scattered intensity $I_s \\propto \\frac{1}{\\lambda^4}$ (for particle size $a \\ll \\lambda$), explaining blue sky and reddish sunrise/sunset.
3. **Sound Waves, Echo & Ultrasound:**
   - Sound is a **longitudinal mechanical wave**; audible range $20\\text{ Hz} - 20,000\\text{ Hz}$ ($<20\\text{ Hz}$ Infrasonic; $>20\\text{ kHz}$ Ultrasonic).
   - **Echo:** Persistence of hearing is $0.1\\text{ s}$, so minimum distance for a distinct echo in air ($v = 344\\text{ m/s}$) is $d = \\frac{v \\times t}{2} = \\frac{344 \\times 0.1}{2} = 17.2\\text{ m}$.

---

### [Level H: Higher Secondary — Class 11–12 SHM, Acoustics, Doppler & Optical Instruments]
1. **Simple Harmonic Motion (SHM):**
   - Displacement $x(t) = A\\sin(\\omega t + \\phi)$, velocity $v = \\omega\\sqrt{A^2 - x^2}$ ($v_{\\max} = \\omega A$ at mean position), acceleration $a = -\\omega^2 x$ ($|a_{\\max}| = \\omega^2 A$ at extreme).
   - **Kinetic Energy** $K = \\frac{1}{2}m\\omega^2(A^2 - x^2)$, **Potential Energy** $U = \\frac{1}{2}m\\omega^2 x^2$, **Total Energy** $E = \\frac{1}{2}m\\omega^2 A^2 = 2\\pi^2 m f^2 A^2$ (note that $K$ and $U$ oscillate at **twice the frequency $2f$** of SHM!).
   - **Time Periods:** Simple Pendulum $T = 2\\pi\\sqrt{\\frac{L}{g}}$ (Seconds pendulum has $T = 2\\text{ s}, L \\approx 0.993\\text{ m}$); Spring-mass $T = 2\\pi\\sqrt{\\frac{m}{k}}$ (Series springs: $\\frac{1}{k_s} = \\frac{1}{k_1} + \\frac{1}{k_2}$; Parallel springs: $k_p = k_1 + k_2$).
2. **Speed of Sound, Standing Waves, Organ Pipes & Doppler Effect:**
   - **Newton-Laplace Formula:** Newton assumed isothermal propagation ($v = \\sqrt{P/\\rho} \\approx 280\\text{ m/s}$); **Laplace corrected it to adiabatic** propagation: $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}}$ ($v \\propto \\sqrt{T}$ and independent of pressure at constant temperature!).
   - **Standing Waves:**
     - **Stretched String / Open Organ Pipe (both ends open):** All harmonics present ($1:2:3:\\dots$), $f_n = \\frac{nv}{2L}$ (for string, $v = \\sqrt{T/\\mu}$).
     - **Closed Organ Pipe (one end closed):** **Only odd harmonics** present ($1:3:5:\\dots$), $f_n = \\frac{(2n-1)v}{4L}$.
   - **Beats & Doppler Effect:** Beat frequency $f_{\\text{beat}} = |f_1 - f_2|$. Apparent frequency in Doppler effect: $f' = f\\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)$.
3. **Refraction at Spherical Surface, Lensmaker's Formula, Prism & Optical Instruments:**
   - **Spherical Surface:** $\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$ $\\implies$ **Lensmaker's Formula:** $\\frac{1}{f} = \\left(\\frac{n_{\\text{lens}}}{n_{\\text{medium}}} - 1\\right)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.
   - **Prism Formula:** $i + e = A + \\delta$; at minimum deviation ($i = e, r_1 = r_2 = A/2$): $n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin(A/2)}$ (for thin prism, $\\delta = (n-1)A$).
   - **Compound Microscope:** $M = m_o \\times m_e = \\frac{L}{f_o}\\left(1 + \\frac{D}{f_e}\\right)$ (near point) or $\\frac{L}{f_o}\\frac{D}{f_e}$ (normal adjustment).
   - **Astronomical Telescope:** Normal adjustment ($L = f_o + f_e$): $M = \\frac{f_o}{f_e}$; at least distance $D$: $M = \\frac{f_o}{f_e}\\left(1 + \\frac{f_e}{D}\\right)$.

---

### [Level G: Graduation Mastery — Interference, Diffraction & Polarisation]
1. **Wavefront, Interference, Thin Films & Newton's Rings:**
   - **Superposition & Resultant Intensity:** $I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$; for equal intensities $I_0$, **$I = 4I_0\\cos^2(\\phi/2)$**, and $\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{\\sqrt{I_1}+\\sqrt{I_2}}{\\sqrt{I_1}-\\sqrt{I_2}}\\right)^2 = \\left(\\frac{a_1+a_2}{a_1-a_2}\\right)^2$.
   - **Young's Double Slit Experiment (YDSE):** Path difference $\\Delta x = \\frac{yd}{D}$; Bright fringes $\\Delta x = n\\lambda$, Dark fringes $\\Delta x = (2n-1)\\frac{\\lambda}{2}$; **Fringe Width $\\beta = \\frac{\\lambda D}{d}$** (in medium of index $n$, $\\beta' = \\beta/n$). Inserting a thin sheet of thickness $t$ and index $n$ shifts fringes by $\\Delta y = \\frac{D}{d}(n-1)t$.
   - **Thin Film Interference (Reflected Light, Stokes $\\pi$ phase change):** Maxima: $2nt\\cos r = (2m-1)\\frac{\\lambda}{2}$; Minima: $2nt\\cos r = m\\lambda$.
   - **Newton's Rings (Reflected system):** Central spot is **dark**; diameter of $n^{\\text{th}}$ dark ring **$D_n = \\sqrt{4n\\lambda R} \\implies D_n \\propto \\sqrt{n}$** (in liquid of index $\\mu$, $D_n' = D_n/\\sqrt{\\mu}$).
2. **Diffraction & Resolving Power:**
   | Feature | Fresnel Diffraction | Fraunhofer Diffraction |
   |---|---|---|
   | **Source & Screen Distance** | Finite distance from obstacle | Infinite (or using convex lenses) |
   | **Incident Wavefront** | Spherical or Cylindrical | Plane Wavefront |
   - **Single-Slit Fraunhofer Diffraction:** Minima at **$a\\sin\\theta = n\\lambda$** ($n = 1, 2, 3, \\dots$); angular width of central maximum $= \\frac{2\\lambda}{a}$ and linear width $= \\frac{2\\lambda D}{a}$.
   - **Plane Transmission Diffraction Grating:** Principal maxima at **$(e + d)\\sin\\theta = n\\lambda$** where $e+d = \\frac{1}{N_{\\text{lines/cm}}}$ is the grating element; **Resolving Power of Grating** $R = \\frac{\\lambda}{\\Delta\\lambda} = nN$ ($n =$ order, $N =$ total ruled lines).
   - **Rayleigh's Criterion for Resolution:** Telescope limit of resolution $\\theta_{\\min} = \\frac{1.22\\lambda}{D}$ ($\\text{RP} = \\frac{D}{1.22\\lambda}$); Microscope $\\text{RP} = \\frac{2n\\sin\\theta}{1.22\\lambda} = \\frac{2\\text{ NA}}{1.22\\lambda}$.
3. **Polarisation & Birefringence:**
   - Proves light is a **transverse wave**.
   - **Brewster's Law:** When unpolarised light strikes at polarising angle $i_p$, reflected light is completely plane-polarised and **reflected & refracted rays are perpendicular ($i_p + r = 90^\\circ$)**, giving **$n = \\tan i_p$**.
   - **Malus's Law:** $I = I_0\\cos^2\\theta$.
   - **Double Refraction (Calcite/Quartz) & Wave Plates:** **Nicol Prism** uses Canada balsam ($n = 1.55$) to eliminate the O-ray ($n_O = 1.658$) by TIR while transmitting the E-ray ($n_E = 1.486$).
   - **Quarter-Wave Plate ($\lambda/4$):** $t = \\frac{\\lambda}{4|n_O - n_E|}$ (converts plane-polarised light at $45^\\circ$ to circularly polarised light). **Half-Wave Plate ($\lambda/2$):** $t = \\frac{\\lambda}{2|n_O - n_E|}$.`,
            pa: `### [Level I: Intermediate — Class 9–10 ਪ੍ਰਕਾਸ਼ ਦਾ ਪਰਾਵਰਤਨ, ਅਪਵਰਤਨ, ਮਨੁੱਖੀ ਅੱਖ ਅਤੇ ਧੁਨੀ]
1. **ਦਰਪਣ, ਅਪਵਰਤਨ ਅਤੇ ਪੂਰਨ ਅੰਦਰੂਨੀ ਪਰਾਵਰਤਨ (TIR):**
   - **ਦਰਪਣ ਸੂਤਰ:** $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ ਅਤੇ ਵਡਦਰਸ਼ਨ $m = -\\frac{v}{u}$। ਉੱਤਲ ਦਰਪਣ ($f > 0$) ਹਮੇਸ਼ਾ ਆਭਾਸੀ, ਸਿੱਧਾ ਅਤੇ ਛੋਟਾ ਪ੍ਰਤੀਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ (ਵਾਹਨਾਂ ਵਿੱਚ ਸਾਈਡ ਸ਼ੀਸ਼ੇ ਵਜੋਂ)।
   - **ਸਨੈੱਲ ਦਾ ਨਿਯਮ:** $n_{21} = \\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$ (ਅਪਵਰਤਨ ਦੌਰਾਨ **ਆਵ੍ਰਿਤੀ $\\nu$ ਨਹੀਂ ਬਦਲਦੀ**)।
   - **ਪੂਰਨ ਅੰਦਰੂਨੀ ਪਰਾਵਰਤਨ (TIR):** ਸੰਘਣੇ ਤੋਂ ਵਿਰਲੇ ਮਾਧਿਅਮ ਵਿੱਚ ਜਾਂਦੇ ਸਮੇਂ ਜਦੋਂ $i > \\theta_c$, ਜਿੱਥੇ $\\sin\\theta_c = \\frac{1}{n}$। ਉਦਾਹਰਣਾਂ: **ਆਪਟੀਕਲ ਫਾਈਬਰ**, ਮ੍ਰਿਗ-ਤ੍ਰਿਸ਼ਨਾ (Mirage), **ਹੀਰੇ ਦੀ ਚਮਕ ($n = 2.42, \\theta_c \\approx 24.4^\\circ$)**।
2. **ਲੈਂਜ਼, ਸ਼ਕਤੀ ਅਤੇ ਮਨੁੱਖੀ ਅੱਖ ਦੇ ਦੋਸ਼:**
   - **ਲੈਂਜ਼ ਸੂਤਰ:** $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$, $m = +\\frac{v}{u}$, ਅਤੇ ਲੈਂਜ਼ ਦੀ ਸ਼ਕਤੀ $P = \\frac{1}{f(\\text{m})}$ **ਡਾਇਓਪਟਰ (D)** ਵਿੱਚ।
   - **ਮਾਇਓਪੀਆ (ਨੇੜੇ ਦੀ ਨਜ਼ਰ):** ਅਵਤਲ (Concave) ਲੈਂਜ਼; **ਹਾਈਪਰਮੈਟ੍ਰੋਪੀਆ (ਦੂਰ ਦੀ ਨਜ਼ਰ):** ਉੱਤਲ (Convex) ਲੈਂਜ਼; **ਪ੍ਰੈਸਬਾਇਓਪੀਆ:** ਦੋ-ਫੋਕਸੀ (Bifocal) ਲੈਂਜ਼; **ਅਬਿੰਦੁਕਤਾ (Astigmatism):** ਸਿਲੰਡਰੀ ਲੈਂਜ਼।
   - **ਰੇਲੇ ਖਿੰਡਾਅ (Rayleigh Scattering):** $I_s \\propto \\frac{1}{\\lambda^4}$। **ਗੂੰਜ (Echo)** ਲਈ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ $= 17.2\\text{ m}$।

---

### [Level H: Higher Secondary — Class 11–12 SHM, ਧੁਨੀ ਤਰੰਗਾਂ, ਡੌਪਲਰ ਪ੍ਰਭਾਵ ਅਤੇ ਪ੍ਰਕਾਸ਼ੀ ਯੰਤਰ]
1. **ਸਰਲ ਆਵਰਤੀ ਗਤੀ (SHM):**
   - $x = A\\sin(\\omega t + \\phi)$, $v = \\omega\\sqrt{A^2 - x^2}$, $a = -\\omega^2 x$, ਅਤੇ ਕੁੱਲ ਊਰਜਾ $E = \\frac{1}{2}m\\omega^2 A^2$।
   - **ਸਮਾਂ ਕਾਲ:** ਸਰਲ ਪੈਂਡੂਲਮ $T = 2\\pi\\sqrt{L/g}$ (ਸੈਕਿੰਡ ਪੈਂਡੂਲਮ ਲਈ $T = 2\\text{ s}, L \\approx 0.993\\text{ m}$); ਸਪਰਿੰਗ-ਪੁੰਜ $T = 2\\pi\\sqrt{m/k}$।
2. **ਧੁਨੀ ਦੀ ਚਾਲ, ਆਰਗਨ ਪਾਈਪ ਅਤੇ ਡੌਪਲਰ ਪ੍ਰਭਾਵ:**
   - **ਨਿਊਟਨ-ਲਾਪਲਾਸ ਸੂਤਰ:** $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}}$।
   - **ਖੁੱਲ੍ਹੀ ਆਰਗਨ ਪਾਈਪ / ਤਣੀ ਹੋਈ ਡੋਰੀ:** ਸਾਰੇ ਹਾਰਮੋਨਿਕਸ ਮੌਜੂਦ ($1:2:3:\\dots$), $f_n = \\frac{nv}{2L}$। **ਬੰਦ ਆਰਗਨ ਪਾਈਪ:** ਸਿਰਫ਼ ਟਾਂਕ (Odd) ਹਾਰਮੋਨਿਕਸ ($1:3:5:\\dots$), $f_n = \\frac{(2n-1)v}{4L}$।
   - **ਲੈਂਜ਼ ਮੇਕਰ ਸੂਤਰ:** $\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$। **ਪ੍ਰਿਜ਼ਮ ਸੂਤਰ:** $n = \\frac{\\sin((A+\\delta_m)/2)}{\\sin(A/2)}$।

---

### [Level G: Graduation Mastery — ਵਿਅਤੀਕਰਨ, ਵਿਵਰਤਨ ਅਤੇ ਧਰੁਵੀਕਰਨ]
1. **ਯੰਗ ਦਾ ਡਬਲ ਸਲਿੱਟ ਪ੍ਰਯੋਗ (YDSE) ਅਤੇ ਨਿਊਟਨ ਦੇ ਛੱਲੇ (Newton's Rings):**
   - **YDSE ਫਰਿੰਜ ਚੌੜਾਈ:** $\\beta = \\frac{\\lambda D}{d}$ ਅਤੇ ਤੀਬਰਤਾ $I = 4I_0\\cos^2(\\phi/2)$।
   - **ਨਿਊਟਨ ਦੇ ਛੱਲੇ:** ਪਰਾਵਰਤਿਤ ਪ੍ਰਕਾਸ਼ ਵਿੱਚ ਕੇਂਦਰੀ ਧੱਬਾ **ਕਾਲਾ (Dark)** ਹੁੰਦਾ ਹੈ; $n$-ਵੇਂ ਕਾਲੇ ਛੱਲੇ ਦਾ ਵਿਆਸ $D_n = \\sqrt{4n\\lambda R} \\propto \\sqrt{n}$।
2. **ਵਿਵਰਤਨ (Diffraction) ਅਤੇ ਧਰੁਵੀਕਰਨ (Polarisation):**
   - **ਸਿੰਗਲ-ਸਲਿੱਟ ਮਿਨੀਮਾ:** $a\\sin\\theta = n\\lambda$; ਕੇਂਦਰੀ ਮੈਕਸੀਮਾ ਦੀ ਕੋਣੀ ਚੌੜਾਈ $= \\frac{2\\lambda}{a}$। **ਡਿਫਰੈਕਸ਼ਨ ਗ੍ਰੇਟਿੰਗ:** $(e+d)\\sin\\theta = n\\lambda$ ਅਤੇ ਵਿਭੇਦਨ ਸਮਰੱਥਾ (Resolving Power) $R = \\frac{\\lambda}{\\Delta\\lambda} = nN$।
   - **ਬ੍ਰਿਊਸਟਰ ਦਾ ਨਿਯਮ (Brewster's Law):** $n = \\tan i_p$ ਜਿੱਥੇ $i_p + r = 90^\\circ$। **ਮਾਲਸ ਦਾ ਨਿਯਮ (Malus's Law):** $I = I_0\\cos^2\\theta$।`,
            hi: `### [Level I: Intermediate — Class 9–10 परावर्तन, अपवर्तन, मानव नेत्र एवं ध्वनि]
1. **गोलीय दर्पण, अपवर्तन एवं पूर्ण आंतरिक परावर्तन (TIR):**
   - **दर्पण सूत्र:** $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ तथा आवर्धन $m = -\\frac{v}{u}$। उत्तल दर्पण ($f > 0$) सदैव आभासी, सीधा व छोटा प्रतिबिंब बनाता है।
   - **स्नेल का नियम:** $n_{21} = \\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$ (अपवर्तन में **आवृत्ति $\\nu$ अपरिवर्तित** रहती है)।
   - **पूर्ण आंतरिक परावर्तन (TIR):** सघन से विरल माध्यम में $i > \\theta_c$, जहाँ $\\sin\\theta_c = \\frac{1}{n}$। उदाहरण: **प्रकाशिक तंतु (Optical Fibre)**, मरीचिका, **हीरे की चमक ($n = 2.42, \\theta_c \\approx 24.4^\\circ$)**।
2. **पतले लेंस, क्षमता एवं मानव नेत्र दोष:**
   - **लेंस सूत्र:** $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$, $m = +\\frac{v}{u}$, तथा क्षमता $P = \\frac{1}{f(\\text{m})}$ **डायोप्टर (D)** में।
   - **निकट दृष्टि दोष (Myopia):** अवतल लेंस; **दूर दृष्टि दोष (Hypermetropia):** उत्तल लेंस; **जरा-दूरदर्शिता (Presbyopia):** द्विफोकसी लेंस; **अबिंदुकता (Astigmatism):** बेलनाकार लेंस।
   - **रैले प्रकीर्णन:** $I_s \\propto \\frac{1}{\\lambda^4}$। **प्रतिध्वनि (Echo)** हेतु न्यूनतम दूरी $= 17.2\\text{ m}$।

---

### [Level H: Higher Secondary — Class 11–12 SHM, ध्वनिकी, डॉप्लर प्रभाव एवं प्रकाशिक यंत्र]
1. **सरल आवर्त गति (SHM):**
   - $x = A\\sin(\\omega t + \\phi)$, $v = \\omega\\sqrt{A^2 - x^2}$, $a = -\\omega^2 x$, तथा कुल ऊर्जा $E = \\frac{1}{2}m\\omega^2 A^2$।
   - **आवर्तकाल:** सरल लोलक $T = 2\\pi\\sqrt{L/g}$ (सेकंड लोलक हेतु $T = 2\\text{ s}, L \\approx 0.993\\text{ m}$); स्प्रिंग-द्रव्यमान $T = 2\\pi\\sqrt{m/k}$।
2. **ध्वनि की चाल, ऑर्गन पाइप एवं डॉप्लर प्रभाव:**
   - **न्यूटन-लाप्लास सूत्र:** $v = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{M}}$।
   - **खुला ऑर्गन पाइप / तनी हुई डोरी:** सभी संनादी उपस्थित ($1:2:3:\\dots$), $f_n = \\frac{nv}{2L}$। **बंद ऑर्गन पाइप:** केवल विषम (Odd) संनादी ($1:3:5:\\dots$), $f_n = \\frac{(2n-1)v}{4L}$।
   - **लेंस मेकर सूत्र:** $\\frac{1}{f} = (n_{21} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$। **प्रिज्म सूत्र:** $n = \\frac{\\sin((A+\\delta_m)/2)}{\\sin(A/2)}$।

---

### [Level G: Graduation Mastery — व्यतिकरण, विवर्तन एवं ध्रुवण]
1. **यंग का द्विक-रेखाछिद्र प्रयोग (YDSE) एवं न्यूटन के वलय (Newton's Rings):**
   - **YDSE फ्रिंज चौड़ाई:** $\\beta = \\frac{\\lambda D}{d}$ तथा तीव्रता $I = 4I_0\\cos^2(\\phi/2)$।
   - **न्यूटन के वलय:** परावर्तित प्रकाश में केंद्रीय धब्बा **अदीप्त (Dark)** होता है; $n$-वें अदीप्त वलय का व्यास $D_n = \\sqrt{4n\\lambda R} \\propto \\sqrt{n}$।
2. **विवर्तन (Diffraction) एवं ध्रुवण (Polarisation):**
   - **एकल-झिरी निम्निष्ठ:** $a\\sin\\theta = n\\lambda$; केंद्रीय उच्चिष्ठ की कोणीय चौड़ाई $= \\frac{2\\lambda}{a}$। **विवर्तन ग्रेटिंग:** $(e+d)\\sin\\theta = n\\lambda$ तथा विभेदन क्षमता $R = \\frac{\\lambda}{\\Delta\\lambda} = nN$।
   - **ब्रूस्टर का नियम (Brewster's Law):** $n = \\tan i_p$ जहाँ $i_p + r = 90^\\circ$। **मैलस का नियम (Malus's Law):** $I = I_0\\cos^2\\theta$।`
        },
        keyNotes: {
            en: [
                'In SHM, x = A sin(ωt + φ), v = ω√(A^2 - x^2), a = -ω^2 x, and total energy E = (1/2)mω^2 A^2; kinetic and potential energies oscillate at frequency 2f.',
                'Laplace Adiabatic Speed of Sound: v = √(γP/ρ) = √(γRT/M); independent of pressure at constant temperature and increases with humidity.',
                'Open organ pipe has all harmonics (f_n = nv/2L, ratio 1:2:3), whereas a closed organ pipe has only odd harmonics (f_n = (2n-1)v/4L, ratio 1:3:5).',
                'Lensmaker Formula: 1/f = (n_21 - 1)(1/R_1 - 1/R_2); Prism at minimum deviation: n = sin((A + δ_m)/2) / sin(A/2).',
                'YDSE fringe width β = λD/d; Newton rings dark ring diameter D_n = √(4nλR) ∝ √n; Grating resolving power R = λ/Δλ = nN.',
                'Brewster Law: n = tan(i_p) with i_p + r = 90°; Malus Law: I = I_0 cos^2(θ); Nicol prism uses TIR in Canada balsam to eliminate the O-ray.'
            ],
            pa: [
                'SHM ਵਿੱਚ x = A sin(ωt + φ), v = ω√(A^2 - x^2), a = -ω^2 x, ਅਤੇ ਕੁੱਲ ਊਰਜਾ E = (1/2)mω^2 A^2; ਗਤਿਜ ਅਤੇ ਸਥਿਤਿਜ ਊਰਜਾ ਦੀ ਆਵ੍ਰਿਤੀ 2f ਹੁੰਦੀ ਹੈ।',
                'ਧੁਨੀ ਦੀ ਚਾਲ ਦਾ ਲਾਪਲਾਸ ਸੂਤਰ: v = √(γP/ρ) = √(γRT/M); ਸਥਿਰ ਤਾਪਮਾਨ ਤੇ ਦਬਾਅ ਤੋਂ ਸੁਤੰਤਰ ਹੈ ਅਤੇ ਨਮੀ ਵਧਣ ਨਾਲ ਵਧਦੀ ਹੈ।',
                'ਖੁੱਲ੍ਹੀ ਆਰਗਨ ਪਾਈਪ ਵਿੱਚ ਸਾਰੇ ਹਾਰਮੋਨਿਕਸ (1:2:3, f_n = nv/2L) ਅਤੇ ਬੰਦ ਆਰਗਨ ਪਾਈਪ ਵਿੱਚ ਸਿਰਫ਼ ਟਾਂਕ ਹਾਰਮੋਨਿਕਸ (1:3:5, f_n = (2n-1)v/4L) ਹੁੰਦੇ ਹਨ।',
                'ਲੈਂਜ਼ ਮੇਕਰ ਸੂਤਰ: 1/f = (n_21 - 1)(1/R_1 - 1/R_2); ਪ੍ਰਿਜ਼ਮ ਸੂਤਰ: n = sin((A + δ_m)/2) / sin(A/2)।',
                'YDSE ਫਰਿੰਜ ਚੌੜਾਈ β = λD/d; ਨਿਊਟਨ ਰਿੰਗ ਵਿਆਸ D_n = √(4nλR) ∝ √n; ਗ੍ਰੇਟਿੰਗ ਵਿਭੇਦਨ ਸਮਰੱਥਾ R = λ/Δλ = nN।',
                'ਬ੍ਰਿਊਸਟਰ ਦਾ ਨਿਯਮ: n = tan(i_p) ਜਿੱਥੇ i_p + r = 90°; ਮਾਲਸ ਦਾ ਨਿਯਮ: I = I_0 cos^2(θ)।'
            ],
            hi: [
                'SHM में x = A sin(ωt + φ), v = ω√(A^2 - x^2), a = -ω^2 x, तथा कुल ऊर्जा E = (1/2)mω^2 A^2; गतिज व स्थितिज ऊर्जा की आवृत्ति 2f होती है।',
                'ध्वनि की चाल का लाप्लास सूत्र: v = √(γP/ρ) = √(γRT/M); नियत ताप पर दाब से स्वतंत्र है और आर्द्रता बढ़ने पर बढ़ती है।',
                'खुले ऑर्गन पाइप में सभी संनादी (1:2:3, f_n = nv/2L) और बंद ऑर्गन पाइप में केवल विषम संनादी (1:3:5, f_n = (2n-1)v/4L) होते हैं।',
                'लेंस मेकर सूत्र: 1/f = (n_21 - 1)(1/R_1 - 1/R_2); प्रिज्म सूत्र: n = sin((A + δ_m)/2) / sin(A/2)।',
                'YDSE फ्रिंज चौड़ाई β = λD/d; न्यूटन वलय व्यास D_n = √(4nλR) ∝ √n; ग्रेटिंग विभेदन क्षमता R = λ/Δλ = nN।',
                'ब्रूस्टर का नियम: n = tan(i_p) जहाँ i_p + r = 90°; मैलस का नियम: I = I_0 cos^2(θ)।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Wave Property Invariance: Frequency (ν) depends ONLY on the source and NEVER changes during reflection, refraction, interference, or diffraction.',
                'Humidity & Sound Speed: Moist air (M_H2O = 18 g/mol) is LESS dense than dry air (M_air ≈ 28.8 g/mol), so sound travels FASTER in humid/moist air.',
                'YDSE Immersion Rule: If YDSE apparatus is immersed in a liquid of refractive index μ, fringe width shrinks to β\' = β/μ.',
                'Central Maximum Width in Single-Slit Diffraction: Angular width = 2λ/a and linear width = 2λD/a (twice the width of secondary maxima).',
                'Wave Plate Thickness: Quarter-wave plate t = λ / (4|n_O - n_E|); Half-wave plate t = λ / (2|n_O - n_E|).'
            ],
            pa: [
                'ਤਰੰਗ ਗੁਣ: ਆਵ੍ਰਿਤੀ (ν) ਸਿਰਫ਼ ਸਰੋਤ ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ ਅਤੇ ਅਪਵਰਤਨ ਜਾਂ ਪਰਾਵਰਤਨ ਦੌਰਾਨ ਕਦੇ ਨਹੀਂ ਬਦਲਦੀ।',
                'ਨਮੀ ਅਤੇ ਧੁਨੀ ਦੀ ਚਾਲ: ਨਮੀ ਵਾਲੀ ਹਵਾ ਦੀ ਘਣਤਾ ਖੁਸ਼ਕ ਹਵਾ ਨਾਲੋਂ ਘੱਟ ਹੁੰਦੀ ਹੈ, ਇਸ ਲਈ ਨਮੀ ਵਾਲੀ ਹਵਾ ਵਿੱਚ ਧੁਨੀ ਤੇਜ਼ ਚੱਲਦੀ ਹੈ।',
                'YDSE ਨੂੰ ਤਰਲ (ਅਪਵਰਤਨਾਂਕ μ) ਵਿੱਚ ਡੁਬੋਣ ਤੇ ਫਰਿੰਜ ਚੌੜਾਈ ਘਟ ਕੇ β\' = β/μ ਹੋ ਜਾਂਦੀ ਹੈ।',
                'ਸਿੰਗਲ-ਸਲਿੱਟ ਵਿਵਰਤਨ ਵਿੱਚ ਕੇਂਦਰੀ ਮੈਕਸੀਮਾ ਦੀ ਕੋਣੀ ਚੌੜਾਈ = 2λ/a ਅਤੇ ਰੇਖੀ ਚੌੜਾਈ = 2λD/a।',
                'ਵੇਵ ਪਲੇਟ ਮੋਟਾਈ: ਕੁਆਰਟਰ-ਵੇਵ ਪਲੇਟ t = λ / (4|n_O - n_E|); ਹਾਫ-ਵੇਵ ਪਲੇਟ t = λ / (2|n_O - n_E|)।'
            ],
            hi: [
                'तरंग गुण: आवृत्ति (ν) केवल स्रोत पर निर्भर करती है और परावर्तन या अपवर्तन के दौरान कभी नहीं बदलती।',
                'आर्द्रता एवं ध्वनि की चाल: आर्द्र वायु का घनत्व शुष्क वायु से कम होता है, इसलिए आर्द्र वायु में ध्वनि तेज़ चलती है।',
                'YDSE को अपवर्तनांक μ के द्रव में डुबोने पर फ्रिंज चौड़ाई घटकर β\' = β/μ हो जाती है।',
                'एकल-झिरी विवर्तन में केंद्रीय उच्चिष्ठ की कोणीय चौड़ाई = 2λ/a तथा रेखीय चौड़ाई = 2λD/a।',
                'वेव प्लेट मोटाई: चतुर्थांश-तरंग प्लेट t = λ / (4|n_O - n_E|); अर्ध-तरंग प्लेट t = λ / (2|n_O - n_E|)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Increasing atmospheric pressure at constant temperature increases the speed of sound in air since v = √(γP/ρ). Correction: At constant temperature, P/ρ = RT/M is constant, so ρ increases proportionally with P and the speed of sound remains completely unchanged.',
                'Misconception: Sound waves can be polarised just like light waves. Correction: Only transverse waves (like electromagnetic/light waves) exhibit polarisation; sound waves in air are longitudinal and cannot be polarised.',
                'Misconception: When a convex glass lens (n = 1.5) is immersed in water (n = 1.33), its focal length decreases. Correction: Since (n_lens/n_water - 1) = (1.5/1.33 - 1) = 0.128 is much smaller than (1.5 - 1) = 0.5 in air, its focal length increases roughly four-fold (f_water ≈ 4 f_air) and power decreases.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਸਥਿਰ ਤਾਪਮਾਨ ਤੇ ਦਬਾਅ ਵਧਾਉਣ ਨਾਲ ਹਵਾ ਵਿੱਚ ਧੁਨੀ ਦੀ ਚਾਲ ਵਧ ਜਾਂਦੀ ਹੈ। ਸੁਧਾਰ: ਸਥਿਰ ਤਾਪਮਾਨ ਤੇ P/ρ = RT/M ਸਥਿਰ ਰਹਿੰਦਾ ਹੈ, ਇਸ ਲਈ ਦਬਾਅ ਦਾ ਧੁਨੀ ਦੀ ਚਾਲ ਤੇ ਕੋਈ ਪ੍ਰਭਾਵ ਨਹੀਂ ਪੈਂਦਾ।',
                'ਭੁਲੇਖਾ: ਧੁਨੀ ਤਰੰਗਾਂ ਦਾ ਵੀ ਪ੍ਰਕਾਸ਼ ਤਰੰਗਾਂ ਵਾਂਗ ਧਰੁਵੀਕਰਨ (Polarisation) ਹੋ ਸਕਦਾ ਹੈ। ਸੁਧਾਰ: ਸਿਰਫ਼ ਅਨੁਪ੍ਰਸਥ (Transverse) ਤਰੰਗਾਂ ਦਾ ਧਰੁਵੀਕਰਨ ਹੁੰਦਾ ਹੈ; ਹਵਾ ਵਿੱਚ ਧੁਨੀ ਤਰੰਗਾਂ ਲੰਬਕਾਰੀ (Longitudinal) ਹੋਣ ਕਾਰਨ ਧਰੁਵੀਕ੍ਰਿਤ ਨਹੀਂ ਹੁੰਦੀਆਂ।',
                'ਭੁਲੇਖਾ: ਕੱਚ ਦੇ ਉੱਤਲ ਲੈਂਜ਼ (n = 1.5) ਨੂੰ ਪਾਣੀ (n = 1.33) ਵਿੱਚ ਡੁਬੋਣ ਨਾਲ ਉਸਦੀ ਫੋਕਸ ਦੂਰੀ ਘਟ ਜਾਂਦੀ ਹੈ। ਸੁਧਾਰ: ਪਾਣੀ ਵਿੱਚ ਡੁਬੋਣ ਨਾਲ ਲੈਂਜ਼ ਦੀ ਫੋਕਸ ਦੂਰੀ ਲਗਭਗ 4 ਗੁਣਾ ਵਧ ਜਾਂਦੀ ਹੈ (f_water ≈ 4 f_air) ਅਤੇ ਸ਼ਕਤੀ ਘਟ ਜਾਂਦੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: नियत ताप पर वायुमंडलीय दाब बढ़ाने से ध्वनि की चाल बढ़ जाती है। सुधार: नियत ताप पर P/ρ = RT/M नियत रहता है, अतः दाब परिवर्तन का ध्वनि की चाल पर कोई प्रभाव नहीं पड़ता।',
                'भ्रांति: ध्वनि तरंगों का भी प्रकाश तरंगों की भाँति ध्रुवण (Polarisation) हो सकता है। सुधार: केवल अनुप्रस्थ (Transverse) तरंगों का ध्रुवण होता है; वायु में ध्वनि तरंगें अनुदैर्ध्य (Longitudinal) होने के कारण ध्रुवित नहीं होतीं।',
                'भ्रांति: काँच के उत्तल लेंस (n = 1.5) को जल (n = 1.33) में डुबोने पर उसकी फोकस दूरी घट जाती है। सुधार: जल में डुबोने पर लेंस की फोकस दूरी लगभग 4 गुना बढ़ जाती है (f_water ≈ 4 f_air) और क्षमता घट जाती है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'In Young\'s Double Slit Experiment, the slits are separated by 0.5 mm and the screen is placed 1.5 m away. If monochromatic light of wavelength 500 nm is used, find the fringe width β and the distance of the 3rd dark fringe from the central maximum.',
                    pa: 'ਯੰਗ ਦੇ ਡਬਲ ਸਲਿੱਟ ਪ੍ਰਯੋਗ ਵਿੱਚ ਸਲਿੱਟਾਂ ਵਿਚਕਾਰ ਦੂਰੀ 0.5 mm ਹੈ ਅਤੇ ਪਰਦਾ 1.5 m ਦੂਰ ਹੈ। ਜੇਕਰ 500 nm ਤਰੰਗ ਲੰਬਾਈ ਦਾ ਪ੍ਰਕਾਸ਼ ਵਰਤਿਆ ਜਾਵੇ, ਤਾਂ ਫਰਿੰਜ ਚੌੜਾਈ β ਅਤੇ ਕੇਂਦਰੀ ਮੈਕਸੀਮਾ ਤੋਂ ਤੀਜੀ ਕਾਲੀ ਫਰਿੰਜ ਦੀ ਦੂਰੀ ਪਤਾ ਕਰੋ।',
                    hi: 'यंग के द्विक-रेखाछिद्र प्रयोग में झिरियों के बीच की दूरी 0.5 mm है और पर्दा 1.5 m दूर है। यदि 500 nm तरंगदैर्घ्य का प्रकाश प्रयुक्त हो, तो फ्रिंज चौड़ाई β तथा केंद्रीय उच्चिष्ठ से तीसरी अदीप्त फ्रिंज की दूरी ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Given λ = 500 nm = 5 × 10^-7 m, D = 1.5 m, d = 0.5 mm = 5 × 10^-4 m.',
                        'Step 2: Fringe width β = λD / d = (5 × 10^-7 × 1.5) / (5 × 10^-4) = 1.5 × 10^-3 m = 1.5 mm.',
                        'Step 3: Position of n-th dark fringe is y_n = (2n - 1)β / 2. For n = 3, y_3 = (5/2) × 1.5 mm = 3.75 mm.'
                    ],
                    pa: [
                        'Step 1: ਦਿੱਤਾ ਹੈ λ = 5 × 10^-7 m, D = 1.5 m, d = 5 × 10^-4 m।',
                        'Step 2: ਫਰਿੰਜ ਚੌੜਾਈ β = λD / d = (5 × 10^-7 × 1.5) / (5 × 10^-4) = 1.5 × 10^-3 m = 1.5 mm।',
                        'Step 3: ਤੀਜੀ ਕਾਲੀ ਫਰਿੰਜ (n = 3) ਦੀ ਦੂਰੀ y_3 = (2n - 1)β / 2 = (5/2) × 1.5 mm = 3.75 mm।'
                    ],
                    hi: [
                        'Step 1: दिया है λ = 5 × 10^-7 m, D = 1.5 m, d = 5 × 10^-4 m।',
                        'Step 2: फ्रिंज चौड़ाई β = λD / d = (5 × 10^-7 × 1.5) / (5 × 10^-4) = 1.5 × 10^-3 m = 1.5 mm।',
                        'Step 3: तीसरी अदीप्त फ्रिंज (n = 3) की दूरी y_3 = (2n - 1)β / 2 = (5/2) × 1.5 mm = 3.75 mm।'
                    ]
                },
                finalAnswer: {
                    en: 'β = 1.5 mm; 3rd dark fringe distance = 3.75 mm',
                    pa: 'β = 1.5 mm; ਤੀਜੀ ਕਾਲੀ ਫਰਿੰਜ ਦੀ ਦੂਰੀ = 3.75 mm',
                    hi: 'β = 1.5 mm; तीसरी अदीप्त फ्रिंज की दूरी = 3.75 mm'
                }
            },
            {
                problem: {
                    en: 'Unpolarised light is incident on a medium of refractive index √3 at Brewster\'s polarising angle i_p. Find the polarising angle i_p and the angle of refraction r.',
                    pa: 'ਅਧਰੁਵੀਕ੍ਰਿਤ ਪ੍ਰਕਾਸ਼ √3 ਅਪਵਰਤਨਾਂਕ ਵਾਲੇ ਮਾਧਿਅਮ ਉੱਤੇ ਬ੍ਰਿਊਸਟਰ ਕੋਣ i_p ਤੇ ਪੈਂਦਾ ਹੈ। ਧਰੁਵੀਕਰਨ ਕੋਣ i_p ਅਤੇ ਅਪਵਰਤਨ ਕੋਣ r ਪਤਾ ਕਰੋ।',
                    hi: 'अध्रुवित प्रकाश √3 अपवर्तनांक वाले माध्यम पर ब्रूस्टर के ध्रुवण कोण i_p पर आपतित होता है। ध्रुवण कोण i_p तथा अपवर्तन कोण r ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: By Brewster\'s Law, tan(i_p) = n = √3 => i_p = 60°.',
                        'Step 2: At Brewster\'s angle, reflected and refracted rays are perpendicular: i_p + r = 90° => r = 90° - 60° = 30°.'
                    ],
                    pa: [
                        'Step 1: ਬ੍ਰਿਊਸਟਰ ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ, tan(i_p) = n = √3 => i_p = 60°।',
                        'Step 2: ਕਿਉਂਕਿ i_p + r = 90°, ਇਸ ਲਈ ਅਪਵਰਤਨ ਕੋਣ r = 90° - 60° = 30°।'
                    ],
                    hi: [
                        'Step 1: ब्रूस्टर के नियम से, tan(i_p) = n = √3 => i_p = 60°।',
                        'Step 2: चूँकि i_p + r = 90°, अतः अपवर्तन कोण r = 90° - 60° = 30°।'
                    ]
                },
                finalAnswer: {
                    en: 'i_p = 60°, r = 30°',
                    pa: 'i_p = 60°, r = 30°',
                    hi: 'i_p = 60°, r = 30°'
                }
            }
        ],
        flashcards: [
            {
                id: 'sci-opt-fc-1',
                question: {
                    en: '[Level I] What is the refractive index and critical angle of diamond, and which phenomenon gives it its brilliance?',
                    pa: '[Level I] ਹੀਰੇ ਦਾ ਅਪਵਰਤਨਾਂਕ ਅਤੇ ਕ੍ਰਾਂਤੀਕਾਰੀ ਕੋਣ (Critical Angle) ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ, ਅਤੇ ਇਸਦੀ ਚਮਕ ਦਾ ਮੁੱਖ ਕਾਰਨ ਕੀ ਹੈ?',
                    hi: '[Level I] हीरे का अपवर्तनांक और क्रांतिक कोण कितना होता है, तथा इसकी चमक का मुख्य कारण क्या है?'
                },
                answer: {
                    en: 'Refractive index n = 2.42, critical angle θ_c ≈ 24.4°; Total Internal Reflection (TIR).',
                    pa: 'ਅਪਵਰਤਨਾਂਕ n = 2.42, ਕ੍ਰਾਂਤੀਕਾਰੀ ਕੋਣ θ_c ≈ 24.4°; ਪੂਰਨ ਅੰਦਰੂਨੀ ਪਰਾਵਰਤਨ (TIR)।',
                    hi: 'अपवर्तनांक n = 2.42, क्रांतिक कोण θ_c ≈ 24.4°; पूर्ण आंतरिक परावर्तन (TIR)।'
                }
            },
            {
                id: 'sci-opt-fc-2',
                question: {
                    en: '[Level H] If a particle executes SHM with frequency f, what is the frequency of oscillation of its Kinetic Energy and Total Energy?',
                    pa: '[Level H] ਜੇਕਰ ਕੋਈ ਕਣ f ਆਵ੍ਰਿਤੀ ਨਾਲ SHM ਕਰਦਾ ਹੈ, ਤਾਂ ਉਸਦੀ ਗਤਿਜ ਊਰਜਾ (KE) ਅਤੇ ਕੁੱਲ ਊਰਜਾ (TE) ਦੀ ਆਵ੍ਰਿਤੀ ਕੀ ਹੋਵੇਗੀ?',
                    hi: '[Level H] यदि कोई कण f आवृत्ति से SHM करता है, तो उसकी गतिज ऊर्जा (KE) और कुल ऊर्जा (TE) की आवृत्ति क्या होगी?'
                },
                answer: {
                    en: 'Kinetic Energy (and Potential Energy) oscillates with frequency 2f; Total Energy remains constant (frequency = 0).',
                    pa: 'ਗਤਿਜ ਊਰਜਾ (ਅਤੇ ਸਥਿਤਿਜ ਊਰਜਾ) ਦੀ ਆਵ੍ਰਿਤੀ 2f ਹੁੰਦੀ ਹੈ; ਕੁੱਲ ਊਰਜਾ ਸਥਿਰ ਰਹਿੰਦੀ ਹੈ (ਆਵ੍ਰਿਤੀ = 0)।',
                    hi: 'गतिज ऊर्जा (तथा स्थितिज ऊर्जा) की आवृत्ति 2f होती है; कुल ऊर्जा नियत रहती है (आवृत्ति = 0)।'
                }
            },
            {
                id: 'sci-opt-fc-3',
                question: {
                    en: '[Level H] Compare the harmonics produced in an open organ pipe vs a closed organ pipe of length L.',
                    pa: '[Level H] L ਲੰਬਾਈ ਦੀ ਖੁੱਲ੍ਹੀ ਆਰਗਨ ਪਾਈਪ ਅਤੇ ਬੰਦ ਆਰਗਨ ਪਾਈਪ ਵਿੱਚ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਹਾਰਮੋਨਿਕਸ ਦੀ ਤੁਲਨਾ ਕਰੋ।',
                    hi: '[Level H] L लंबाई के खुले ऑर्गन पाइप और बंद ऑर्गन पाइप में उत्पन्न संनादियों (Harmonics) की तुलना कीजिए।'
                },
                answer: {
                    en: 'Open pipe: All harmonics f_n = nv/(2L) in ratio 1:2:3:4... Closed pipe: Only odd harmonics f_n = (2n-1)v/(4L) in ratio 1:3:5...',
                    pa: 'ਖੁੱਲ੍ਹੀ ਪਾਈਪ: ਸਾਰੇ ਹਾਰਮੋਨਿਕਸ f_n = nv/(2L) (ਅਨੁਪਾਤ 1:2:3...)। ਬੰਦ ਪਾਈਪ: ਸਿਰਫ਼ ਟਾਂਕ ਹਾਰਮੋਨਿਕਸ f_n = (2n-1)v/(4L) (ਅਨੁਪਾਤ 1:3:5...)।',
                    hi: 'खुला पाइप: सभी संनादी f_n = nv/(2L) (अनुपात 1:2:3...)। बंद पाइप: केवल विषम संनादी f_n = (2n-1)v/(4L) (अनुपात 1:3:5...)।'
                }
            },
            {
                id: 'sci-opt-fc-4',
                question: {
                    en: '[Level G] In Newton\'s rings experiment using reflected light, why is the central spot dark and how does ring diameter depend on ring number n?',
                    pa: '[Level G] ਪਰਾਵਰਤਿਤ ਪ੍ਰਕਾਸ਼ ਵਿੱਚ ਨਿਊਟਨ ਦੇ ਛੱਲਿਆਂ ਦਾ ਕੇਂਦਰੀ ਧੱਬਾ ਕਾਲਾ ਕਿਉਂ ਹੁੰਦਾ ਹੈ ਅਤੇ ਛੱਲੇ ਦਾ ਵਿਆਸ n ਤੇ ਕਿਵੇਂ ਨਿਰਭਰ ਕਰਦਾ ਹੈ?',
                    hi: '[Level G] परावर्तित प्रकाश में न्यूटन के वलयों का केंद्रीय धब्बा काला क्यों होता है और वलय का व्यास n पर कैसे निर्भर करता है?'
                },
                answer: {
                    en: 'At the point of contact (t = 0), reflection from the lower denser glass surface introduces a phase change of π (path difference λ/2), causing destructive interference. Dark ring diameter D_n = √(4nλR) ∝ √n.',
                    pa: 'ਸੰਪਰਕ ਬਿੰਦੂ (t = 0) ਤੇ ਹੇਠਲੀ ਸੰਘਣੀ ਸਤ੍ਹਾ ਤੋਂ ਪਰਾਵਰਤਨ ਕਾਰਨ π ਦਾ ਕਲਾ ਅੰਤਰ (λ/2 ਪੱਥ ਅੰਤਰ) ਆਉਂਦਾ ਹੈ। ਕਾਲੇ ਛੱਲੇ ਦਾ ਵਿਆਸ D_n = √(4nλR) ∝ √n।',
                    hi: 'संपर्क बिंदु (t = 0) पर निचली सघन सतह से परावर्तन के कारण π का कलांतर (λ/2 पथांतर) आता है। अदीप्त वलय का व्यास D_n = √(4nλR) ∝ √n।'
                }
            },
            {
                id: 'sci-opt-fc-5',
                question: {
                    en: '[Level G] State the Rayleigh criterion formula for the resolving power of a grating and a circular-aperture telescope.',
                    pa: '[Level G] ਡਿਫਰੈਕਸ਼ਨ ਗ੍ਰੇਟਿੰਗ ਅਤੇ ਦੂਰਬੀਨ (Telescope) ਦੀ ਵਿਭੇਦਨ ਸਮਰੱਥਾ (Resolving Power) ਦਾ ਸੂਤਰ ਲਿਖੋ।',
                    hi: '[Level G] विवर्तन ग्रेटिंग और दूरदर्शी (Telescope) की विभेदन क्षमता (Resolving Power) का सूत्र लिखिए।'
                },
                answer: {
                    en: 'Diffraction Grating: R = λ/Δλ = nN (order × total lines). Telescope: R = 1/θ_min = D / (1.22 λ), where D is objective aperture diameter.',
                    pa: 'ਗ੍ਰੇਟਿੰਗ: R = λ/Δλ = nN। ਦੂਰਬੀਨ: R = 1/θ_min = D / (1.22 λ), ਜਿੱਥੇ D ਅਭਿਦ੍ਰਿਸ਼ਕ ਲੈਂਜ਼ ਦਾ ਵਿਆਸ ਹੈ।',
                    hi: 'ग्रेटिंग: R = λ/Δλ = nN। दूरदर्शी: R = 1/θ_min = D / (1.22 λ), जहाँ D अभिदृश्यक का व्यास है।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. HEAT, THERMODYNAMICS & STATISTICAL PHYSICS (LEVEL I -> H -> G/P)
    // =========================================================================
    {
        topicId: 'sci-phy-thermo-statistical',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Level I (Class 9–10) -> Level H (Class 11–12) -> Level G/P (Graduation / Postgraduate Flagged) mastery of Thermometry, Laws of Thermodynamics, Carnot Cycle, Kinetic Theory of Gases, Radiation Laws, Thermodynamic Potentials, Maxwell Relations, Clausius-Clapeyron, Joule-Thomson, and MB vs BE vs FD Statistics.'
        },
        bookRefs: [
            {
                title: 'NCERT Physics Class 11 (Part II) & Thermal Physics by Garg, Bansal & Ghosh',
                author: 'NCERT / Garg, Bansal & Ghosh',
                chapter: 'Thermal Properties of Matter, Thermodynamics, Kinetic Theory & Statistical Mechanics',
                relevance: 'Complete coverage of Carnot engine, KTG, Maxwell thermodynamic relations, phase transitions, and quantum statistical distributions.'
            }
        ],
        summary: {
            en: `### [Level I: Intermediate — Class 9–10 Temperature Scales, Calorimetry & Thermal Expansion]
1. **Temperature Scales & Conversions:**
   - $\\frac{T_C - 0}{100} = \\frac{T_F - 32}{180} = \\frac{T_K - 273.15}{100} \\implies T_K = T_C + 273.15$ and $T_F = \\frac{9}{5}T_C + 32$.
   - **Coincidence Trap:** Celsius and Fahrenheit scales read the **same value at $-40^\\circ$** ($-40^\\circ\\text{C} = -40^\\circ\\text{F}$). Triple point of water is **$273.16\\text{ K}$ ($0.01^\\circ\\text{C}$)** at $611.65\\text{ Pa}$.
2. **Calorimetry, Specific Heat & Latent Heat:**
   - **Sensible Heat:** $Q = mc\\Delta T$ (Specific heat of water $c_w = 1\\text{ cal g}^{-1}{}^\\circ\\text{C}^{-1} = 4186\\text{ J kg}^{-1}\\text{K}^{-1}$ — highest among common liquids).
   - **Latent Heat ($Q = mL$, isothermal phase change):** Latent heat of fusion of ice $L_f = 80\\text{ cal/g} = 334\\text{ kJ/kg}$; Latent heat of vaporisation of steam $L_v = 540\\text{ cal/g} = 2260\\text{ kJ/kg}$.
   - **Thermal Expansion of Solids:** Linear ($\\alpha$), Superficial/Area ($\\beta$), and Volume/Cubical ($\\gamma$) expansion coefficients obey **$\\alpha : \\beta : \\gamma = 1 : 2 : 3$** ($\\beta = 2\\alpha, \\gamma = 3\\alpha$). Water exhibits **anomalous expansion between $0^\\circ\\text{C}$ and $4^\\circ\\text{C}$**, reaching **maximum density ($1000\\text{ kg/m}^3$) at $4^\\circ\\text{C}$**.

---

### [Level H: Higher Secondary — Class 11–12 Laws of Thermodynamics, Carnot Cycle, KTG & Radiation]
1. **Zeroth & First Law of Thermodynamics and Molar Heat Capacities:**
   - **Zeroth Law (R.H. Fowler):** Defines **temperature** and thermal equilibrium ($A \\sim C, B \\sim C \\implies A \\sim B$).
   - **First Law (Conservation of Energy):** $\\Delta Q = \\Delta U + \\Delta W = nC_V\\Delta T + P\\Delta V$. Internal energy $U$ is a **state function** (for an ideal gas, $U$ depends **only on temperature $T$**), whereas $Q$ and $W$ are **path functions**.
   - **Mayer's Relation:** $C_P - C_V = R$ and adiabatic index $\\gamma = \\frac{C_P}{C_V} = 1 + \\frac{2}{f}$.
   | Process | Condition | Work Done ($W$) | Key Feature / P-V Slope |
   |---|---|---|---|
   | **Isochoric** | $\\Delta V = 0$ ($V = \\text{const}$) | $W = 0$ | $\\Delta Q = \\Delta U = nC_V\\Delta T$ |
   | **Isobaric** | $\\Delta P = 0$ ($P = \\text{const}$) | $W = P\\Delta V = nR\\Delta T$ | $\\Delta Q = nC_P\\Delta T$; fraction $\\frac{\\Delta W}{\\Delta Q} = 1 - \\frac{1}{\\gamma}$ |
   | **Isothermal** | $\\Delta T = 0$ ($PV = \\text{const}$) | $W = nRT\\ln\\left(\\frac{V_2}{V_1}\\right) = 2.3026 nRT\\log_{10}\\left(\\frac{P_1}{P_2}\\right)$ | $\\Delta U = 0 \\implies \\Delta Q = W$; slope $\\frac{dP}{dV} = -\\frac{P}{V}$ |
   | **Adiabatic** | $\\Delta Q = 0$ ($PV^\\gamma = \\text{const}, TV^{\\gamma-1} = \\text{const}$) | $W = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1} = \\frac{nR(T_1 - T_2)}{\\gamma - 1}$ | Slope $\\frac{dP}{dV} = -\\gamma\\frac{P}{V}$ (**$\\gamma$ times steeper** than isothermal) |
2. **Second Law, Carnot Heat Engine & Refrigerator:**
   - **Kelvin-Planck Statement:** No cyclic heat engine can convert $100\\%$ of absorbed heat into work ($\\eta < 1$). **Clausius Statement:** Heat cannot flow spontaneously from a colder to a hotter body without external work.
   - **Carnot Cycle (2 Isothermal + 2 Adiabatic processes):** Efficiency **$\\eta = 1 - \\frac{Q_C}{Q_H} = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$** (depends **only on source/sink temperatures in Kelvin**, independent of working substance).
   - **Refrigerator / Heat Pump Coefficient of Performance (COP):** $\\beta = \\frac{Q_C}{W} = \\frac{T_C}{T_H - T_C} = \\frac{1 - \\eta}{\\eta}$.
3. **Kinetic Theory of Gases (KTG), Equipartition & Blackbody Radiation:**
   - **Ideal Gas Pressure:** $P = \\frac{1}{3}\\rho v_{\\text{rms}}^2 = \\frac{2}{3}E_{\\text{translational per unit vol}}$; average translational KE per molecule $= \\frac{3}{2}k_B T$.
   - **Molecular Speeds Hierarchy (R-A-M):** **$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} > v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}} > v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$** in ratio $\\sqrt{3} : \\sqrt{8/\\pi} : \\sqrt{2} \\approx 1.732 : 1.596 : 1.414$.
   - **Law of Equipartition of Energy:** Each degree of freedom $f$ contributes $\\frac{1}{2}k_B T$ per molecule ($\\frac{1}{2}RT$ per mole) to $U$:
     - **Monoatomic ($\\text{He, Ne, Ar}$):** $f = 3 \\implies C_V = \\frac{3}{2}R, C_P = \\frac{5}{2}R, \\gamma = \\frac{5}{3} = 1.67$.
     - **Rigid Diatomic ($\\text{H}_2, \\text{O}_2, \\text{N}_2$ at room temp):** $f = 5$ (3 trans + 2 rot) $\\implies C_V = \\frac{5}{2}R, C_P = \\frac{7}{2}R, \\gamma = \\frac{7}{5} = 1.4$.
     - **Non-linear Triatomic ($\\text{H}_2\\text{O}, \\text{SO}_2$):** $f = 6 \\implies C_V = 3R, C_P = 4R, \\gamma = \\frac{4}{3} = 1.33$.
   - **Radiation Laws:** **Stefan-Boltzmann Law** $E = \\sigma e T^4$ ($\\sigma = 5.67\\times 10^{-8}\\text{ W m}^{-2}\\text{K}^{-4}$); **Wien's Displacement Law** $\\lambda_m T = b = 2.898\\times 10^{-3}\\text{ m}\\cdot\\text{K}$.

---

### [Level G/P: Graduation & Postgraduate Flagged — Entropy, Maxwell Relations & Statistical Physics]
1. **Entropy, Third Law, Four Thermodynamic Potentials & Four Maxwell Relations:**
   - **Clausius Entropy:** $dS = \\frac{\\delta Q_{\\text{rev}}}{T}$; for any irreversible process, $\\Delta S_{\\text{universe}} > 0$, and for a reversible Carnot cycle $\\oint \\frac{\\delta Q_{\\text{rev}}}{T} = 0$ (**Entropy is a state function**). **Third Law (Nernst Heat Theorem):** $\\lim_{T \\to 0\\text{ K}} S = 0$ for a perfect crystal.
   | Thermodynamic Potential | Definition | Differential Form | Resulting Maxwell Relation |
   |---|---|---|---|
   | **Internal Energy ($U$)** | $U(S,V)$ | $dU = TdS - PdV$ | $\\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V$ |
   | **Enthalpy ($H$)** | $H = U + PV$ | $dH = TdS + VdP$ | $\\left(\\frac{\\partial T}{\\partial P}\\right)_S = +\\left(\\frac{\\partial V}{\\partial S}\\right)_P$ |
   | **Helmholtz Free Energy ($F$ or $A$)** | $F = U - TS$ | $dF = -SdT - PdV$ | $\\left(\\frac{\\partial S}{\\partial V}\\right)_T = +\\left(\\frac{\\partial P}{\\partial T}\\right)_V$ |
   | **Gibbs Free Energy ($G$)** | $G = H - TS = U + PV - TS$ | $dG = -SdT + VdP$ | $\\left(\\frac{\\partial S}{\\partial P}\\right)_T = -\\left(\\frac{\\partial V}{\\partial T}\\right)_P$ |
2. **Clausius-Clapeyron Equation & Joule-Thomson Effect:**
   - **Clausius-Clapeyron First-Order Phase Transition:** **$\\frac{dP}{dT} = \\frac{L}{T(V_2 - V_1)}$**. For water-ice melting ($V_{\\text{water}} < V_{\\text{ice}}$), $dP/dT < 0$ (melting point of ice **decreases** with pressure — regelation); for boiling ($V_{\\text{vap}} > V_{\\text{liq}}$), $dP/dT > 0$ (boiling point **increases** with pressure — pressure cooker).
   - **Joule-Thomson (Porous Plug) Throttling:** **Isenthalpic process ($dH = 0$)** for real gases; inversion temperature $T_i = \\frac{2a}{Rb}$ (cooling if $T < T_i$, heating if $T > T_i$; $\\text{H}_2$ and $\\text{He}$ warm up at room temperature because their $T_i$ is very low).
3. **Statistical Ensembles & Classical vs Quantum Distributions:**
   - **Boltzmann Entropy Relation:** $S = k_B \\ln \\Omega$. Ensembles: **Microcanonical** (fixed $N, V, E$ — isolated), **Canonical** (fixed $N, V, T$ — heat bath, partition function $Z = \\sum e^{-E_i/k_B T}$), **Grand Canonical** (fixed $\\mu, V, T$ — particle & heat exchange).
   | Feature | Maxwell-Boltzmann (MB) | Bose-Einstein (BE) | Fermi-Dirac (FD) |
   |---|---|---|---|
   | **Nature of Particles** | Classical, **distinguishable** | Quantum **indistinguishable Bosons** | Quantum **indistinguishable Fermions** |
   | **Intrinsic Spin** | Any (classical limit) | **Integral spin** ($0, 1, 2, \\dots$) | **Half-integral spin** ($1/2, 3/2, \\dots$) |
   | **Pauli Exclusion Principle** | Not applicable | **Does NOT obey** (many per state, BEC) | **Strictly obeys** (max 1 per quantum state) |
   | **Distribution Function $f(E)$** | $\\frac{1}{e^{(E-\\mu)/k_B T}}$ | $\\frac{1}{e^{(E-\\mu)/k_B T} - 1}$ | $\\frac{1}{e^{(E-E_F)/k_B T} + 1}$ ($E_F \\propto n^{2/3}$) |
   | **Examples** | Ideal gas molecules at high $T$ | Photons, Phonons, $^4\\text{He}$, $\\alpha$-particles, Gravitons | Electrons, Protons, Neutrons, $^3\\text{He}$, Quarks |`,
            pa: `### [Level I: Intermediate — Class 9–10 ਤਾਪਮਾਨ ਪੈਮਾਨੇ, ਕੈਲੋਰੀਮਿਤੀ ਅਤੇ ਤਾਪੀ ਪਸਾਰ]
1. **ਤਾਪਮਾਨ ਪੈਮਾਨੇ ਅਤੇ ਪਰਿਵਰਤਨ:**
   - $T_K = T_C + 273.15$ ਅਤੇ $T_F = \\frac{9}{5}T_C + 32$। **$-40^\\circ$** ਉੱਤੇ ਸੈਲਸੀਅਸ ਅਤੇ ਫਾਰਨਹਾਈਟ ਪੈਮਾਨੇ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ ($-40^\\circ\\text{C} = -40^\\circ\\text{F}$)। ਪਾਣੀ ਦਾ ਤ੍ਰਿ-ਬਿੰਦੂ (Triple Point) $= 273.16\\text{ K}$ ($0.01^\\circ\\text{C}$)।
   - **ਗੁਪਤ ਤਾਪ (Latent Heat):** ਬਰਫ਼ ਦੇ ਪਿਘਲਣ ਦਾ ਗੁਪਤ ਤਾਪ $L_f = 80\\text{ cal/g} = 334\\text{ kJ/kg}$; ਭਾਫ਼ ਦਾ ਗੁਪਤ ਤਾਪ $L_v = 540\\text{ cal/g} = 2260\\text{ kJ/kg}$।
   - **ਤਾਪੀ ਪਸਾਰ:** $\\alpha : \\beta : \\gamma = 1 : 2 : 3$। ਪਾਣੀ ਦੀ ਘਣਤਾ **$4^\\circ\\text{C}$ ਉੱਤੇ ਸਭ ਤੋਂ ਵੱਧ ($1000\\text{ kg/m}^3$)** ਹੁੰਦੀ ਹੈ।

---

### [Level H: Higher Secondary — Class 11–12 ਥਰਮੋਡਾਇਨਾਮਿਕਸ ਦੇ ਨਿਯਮ, ਕਾਰਨੋਟ ਇੰਜਣ ਅਤੇ KTG]
1. **ਥਰਮੋਡਾਇਨਾਮਿਕਸ ਦੇ ਨਿਯਮ ਅਤੇ ਪ੍ਰਕਿਰਿਆਵਾਂ:**
   - **ਸਿਫ਼ਰਵਾਂ ਨਿਯਮ (Zeroth Law):** ਤਾਪਮਾਨ ਅਤੇ ਤਾਪੀ ਸੰਤੁਲਨ ਦੀ ਪਰਿਭਾਸ਼ਾ। **ਪਹਿਲਾ ਨਿਯਮ:** $\\Delta Q = \\Delta U + \\Delta W$ (ਊਰਜਾ ਸੁਰੱਖਿਅਣ)। **ਮੇਅਰ ਦਾ ਸਬੰਧ:** $C_P - C_V = R$।
   - **ਸਮਤਾਪੀ (Isothermal, $\\Delta T = 0, \\Delta U = 0$):** $W = nRT\\ln(V_2/V_1)$। **ਰੁਧੋਸ਼ਮ (Adiabatic, $\\Delta Q = 0, PV^\\gamma = \\text{const}$):** $W = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1}$ (ਢਲਾਣ ਸਮਤਾਪੀ ਨਾਲੋਂ $\\gamma$ ਗੁਣਾ ਵੱਧ)।
2. **ਕਾਰਨੋਟ ਇੰਜਣ ਅਤੇ ਗੈਸਾਂ ਦਾ ਅਣੂਗਤੀ ਸਿਧਾਂਤ (KTG):**
   - **ਕਾਰਨੋਟ ਇੰਜਣ ਸਮਰੱਥਾ:** $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$। **ਰੈਫ੍ਰਿਜਰੇਟਰ COP:** $\\beta = \\frac{T_C}{T_H - T_C}$।
   - **ਅਣੂ ਚਾਲਾਂ ਦਾ ਕ੍ਰਮ:** $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} > v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}} > v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$।
   - **ਊਰਜਾ ਸਮ-ਵੰਡ ਨਿਯਮ:** ਹਰੇਕ ਸੁਤੰਤਰਤਾ ਦੀ ਕੋਟੀ (Degree of freedom $f$) ਪ੍ਰਤੀ ਅਣੂ $\\frac{1}{2}k_B T$ ਊਰਜਾ ਦਿੰਦੀ ਹੈ ਅਤੇ $\\gamma = 1 + \\frac{2}{f}$ (ਇੱਕ-ਪ੍ਰਮਾਣੂਕ $\\gamma = 5/3$, ਦੋ-ਪ੍ਰਮਾਣੂਕ $\\gamma = 7/5 = 1.4$)।
   - **ਸਟੀਫਨ ਦਾ ਨਿਯਮ:** $E = \\sigma T^4$; **ਵੀਨ ਦਾ ਵਿਸਥਾਪਨ ਨਿਯਮ:** $\\lambda_m T = b = 2.898\\times 10^{-3}\\text{ m}\\cdot\\text{K}$।

---

### [Level G/P: Graduation / PG — ਐਂਟ੍ਰੋਪੀ, ਮੈਕਸਵੈੱਲ ਸਬੰਧ ਅਤੇ ਸਟੈਟਿਸਟੀਕਲ ਭੌਤਿਕ ਵਿਗਿਆਨ]
1. **ਐਂਟ੍ਰੋਪੀ, 4 ਥਰਮੋਡਾਇਨਾਮਿਕ ਪੋਟੈਂਸ਼ੀਅਲ ਅਤੇ ਮੈਕਸਵੈੱਲ ਸਬੰਧ:**
   - **ਐਂਟ੍ਰੋਪੀ:** $dS = \\frac{\\delta Q_{\\text{rev}}}{T}$; ਬ੍ਰਹਿਮੰਡ ਦੀ ਐਂਟ੍ਰੋਪੀ $\\Delta S_{\\text{univ}} \\ge 0$। **ਤੀਜਾ ਨਿਯਮ (Nernst):** $T \\to 0\\text{ K}$ ਤੇ $S \\to 0$।
   - **4 ਪੋਟੈਂਸ਼ੀਅਲ:** $dU = TdS - PdV$, $dH = TdS + VdP$, $dF = -SdT - PdV$, $dG = -SdT + VdP$।
   - **ਕਲੌਸੀਅਸ-ਕਲੈਪੇਰੌਨ ਸਮੀਕਰਨ:** $\\frac{dP}{dT} = \\frac{L}{T(V_2 - V_1)}$। **ਜੂਲ-ਥੌਮਸਨ ਪ੍ਰਭਾਵ:** ਸਮ-ਐਂਥੈਲਪਿਕ ($dH = 0$), ਇਨਵਰਜ਼ਨ ਤਾਪਮਾਨ $T_i = \\frac{2a}{Rb}$।
2. **MB, BE ਅਤੇ FD ਅੰਕੜਿਆਂ (Statistics) ਦੀ ਤੁਲਨਾ:**
   | ਵਿਸ਼ੇਸ਼ਤਾ | ਮੈਕਸਵੈੱਲ-ਬੋਲਟਜ਼ਮੈਨ (MB) | ਬੋਸ-ਆਈਨਸਟਾਈਨ (BE) | ਫਰਮੀ-ਡਿਰਾਕ (FD) |
   |---|---|---|---|
   | **ਕਣ ਤੇ ਸਪਿੱਨ** | ਕਲਾਸੀਕਲ, ਪਛਾਣਨਯੋਗ | **ਬੋਸੋਨ (ਪੂਰਨ ਅੰਕ ਸਪਿੱਨ $0, 1, 2$)** | **ਫਰਮੀਔਨ (ਅੱਧ-ਪੂਰਨ ਸਪਿੱਨ $1/2, 3/2$)** |
   | **ਪੌਲੀ ਦਾ ਨਿਯਮ** | ਲਾਗੂ ਨਹੀਂ | **ਪਾਲਣਾ ਨਹੀਂ ਕਰਦੇ** | **ਪਾਲਣਾ ਕਰਦੇ ਹਨ** (ਇੱਕ ਅਵਸਥਾ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ 1 ਕਣ) |
   | **ਉਦਾਹਰਣਾਂ** | ਆਦਰਸ਼ ਗੈਸ ਅਣੂ | ਫੋਟੋਨ, ਫੋਨੋਨ, $^4\\text{He}$, $\\alpha$-ਕਣ | ਇਲੈਕਟ੍ਰਾਨ, ਪ੍ਰੋਟੋਨ, ਨਿਊਟ੍ਰੋਨ, $^3\\text{He}$ |`,
            hi: `### [Level I: Intermediate — Class 9–10 ताप पैमाने, कैलोरीमिति एवं तापीय प्रसार]
1. **ताप पैमाने एवं रूपांतरण:**
   - $T_K = T_C + 273.15$ तथा $T_F = \\frac{9}{5}T_C + 32$। **$-40^\\circ$** पर सेल्सियस और फारेनहाइट पैमाने समान पाठ्यांक देते हैं ($-40^\\circ\\text{C} = -40^\\circ\\text{F}$)। जल का त्रिक बिंदु (Triple Point) $= 273.16\\text{ K}$ ($0.01^\\circ\\text{C}$)।
   - **गुप्त ऊष्मा (Latent Heat):** बर्फ़ के गलन की गुप्त ऊष्मा $L_f = 80\\text{ cal/g} = 334\\text{ kJ/kg}$; भाप के वाष्पन की गुप्त ऊष्मा $L_v = 540\\text{ cal/g} = 2260\\text{ kJ/kg}$।
   - **तापीय प्रसार:** $\\alpha : \\beta : \\gamma = 1 : 2 : 3$। जल का घनत्व **$4^\\circ\\text{C}$ पर अधिकतम ($1000\\text{ kg/m}^3$)** होता है।

---

### [Level H: Higher Secondary — Class 11–12 ऊष्मागतिकी के नियम, कार्नोट इंजन एवं KTG]
1. **ऊष्मागतिकी के नियम एवं प्रक्रम:**
   - **शून्यांकी नियम (Zeroth Law):** ताप एवं तापीय साम्य की परिभाषा। **प्रथम नियम:** $\\Delta Q = \\Delta U + \\Delta W$ (ऊर्जा संरक्षण)। **मेयर का संबंध:** $C_P - C_V = R$।
   - **समतापी (Isothermal, $\\Delta T = 0, \\Delta U = 0$):** $W = nRT\\ln(V_2/V_1)$। **रुद्धोष्म (Adiabatic, $\\Delta Q = 0, PV^\\gamma = \\text{const}$):** $W = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1}$ (ढाल समतापी से $\\gamma$ गुना अधिक)।
2. **कार्नोट इंजन एवं गैसों का अणुगति सिद्धांत (KTG):**
   - **कार्नोट इंजन दक्षता:** $\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$। **प्रशीतक (Refrigerator) COP:** $\\beta = \\frac{T_C}{T_H - T_C}$।
   - **आणविक चालों का क्रम:** $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} > v_{\\text{avg}} = \\sqrt{\\frac{8RT}{\\pi M}} > v_{\\text{mp}} = \\sqrt{\\frac{2RT}{M}}$।
   - **ऊर्जा समविभाजन नियम:** प्रत्येक स्वतंत्रता की कोटि ($f$) प्रति अणु $\\frac{1}{2}k_B T$ ऊर्जा देती है तथा $\\gamma = 1 + \\frac{2}{f}$ (एकपरमाणुक $\\gamma = 5/3$, द्विपरमाणुक $\\gamma = 7/5 = 1.4$)।
   - **स्टीफन का नियम:** $E = \\sigma T^4$; **वीन का विस्थापन नियम:** $\\lambda_m T = b = 2.898\\times 10^{-3}\\text{ m}\\cdot\\text{K}$।

---

### [Level G/P: Graduation / PG — एन्ट्रॉपी, मैक्सवेल संबंध एवं सांख्यिकीय भौतिकी]
1. **एन्ट्रॉपी, 4 ऊष्मागतिक विभव एवं मैक्सवेल संबंध:**
   - **एन्ट्रॉपी:** $dS = \\frac{\\delta Q_{\\text{rev}}}{T}$; ब्रह्मांड की एन्ट्रॉपी $\\Delta S_{\\text{univ}} \\ge 0$। **तृतीय नियम (Nernst):** $T \\to 0\\text{ K}$ पर $S \\to 0$।
   - **4 विभव:** $dU = TdS - PdV$, $dH = TdS + VdP$, $dF = -SdT - PdV$, $dG = -SdT + VdP$।
   - **क्लॉसियस-क्लैपेरॉन समीकरण:** $\\frac{dP}{dT} = \\frac{L}{T(V_2 - V_1)}$। **जूल-थॉमसन प्रभाव:** सम-एन्थैल्पिक ($dH = 0$), व्युत्क्रमण ताप $T_i = \\frac{2a}{Rb}$।
2. **MB, BE एवं FD सांख्यिकी (Statistics) की तुलना:**
   | विशेषता | मैक्सवेल-बोल्ट्ज़मान (MB) | बोस-आइंस्टीन (BE) | फर्मी-डिराक (FD) |
   |---|---|---|---|
   | **कण एवं स्पिन** | चिरसम्मत, विभेद्य | **बोसॉन (पूर्णांक स्पिन $0, 1, 2$)** | **फर्मिऑन (अर्ध-पूर्णांक स्पिन $1/2, 3/2$)** |
   | **पाउली अपवर्जन नियम** | लागू नहीं | **पालन नहीं करते** | **पालन करते हैं** (एक अवस्था में अधिकतम 1 कण) |
   | **उदाहरण** | आदर्श गैस अणु | फोटॉन, फोनॉन, $^4\\text{He}$, $\\alpha$-कण | इलेक्ट्रॉन, प्रोटॉन, न्यूट्रॉन, $^3\\text{He}$ |`
        },
        keyNotes: {
            en: [
                'Celsius and Fahrenheit coincide at -40°; thermal expansion coefficients obey α : β : γ = 1 : 2 : 3; water has maximum density at 4°C.',
                'First Law: ΔQ = ΔU + ΔW; Mayer Relation: C_P - C_V = R; γ = C_P/C_V = 1 + 2/f (Monoatomic γ = 5/3, Diatomic γ = 7/5 = 1.4).',
                'Adiabatic P-V slope (-γP/V) is γ times steeper than isothermal slope (-P/V); Carnot efficiency η = 1 - T_C/T_H and Refrigerator COP β = T_C/(T_H - T_C).',
                'Molecular speeds: v_rms = √(3RT/M) > v_avg = √(8RT/πM) > v_mp = √(2RT/M); Stefan Law E = σT^4 and Wien Law λ_m T = 2.898 × 10^-3 m·K.',
                'Four Thermodynamic Potentials: dU = TdS - PdV, dH = TdS + VdP, dF = -SdT - PdV, dG = -SdT + VdP; Joule-Thomson throttling is isenthalpic (dH = 0).',
                'Quantum Statistics: Bosons (integral spin 0, 1: photons, 4He) obey Bose-Einstein statistics; Fermions (half-integral spin 1/2: electrons, protons, 3He) obey Fermi-Dirac statistics and Pauli Exclusion.'
            ],
            pa: [
                '-40° ਤੇ ਸੈਲਸੀਅਸ ਅਤੇ ਫਾਰਨਹਾਈਟ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ; α : β : γ = 1 : 2 : 3; ਪਾਣੀ ਦੀ ਘਣਤਾ 4°C ਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਹੁੰਦੀ ਹੈ।',
                'ਪਹਿਲਾ ਨਿਯਮ: ΔQ = ΔU + ΔW; ਮੇਅਰ ਸਬੰਧ: C_P - C_V = R; γ = 1 + 2/f (ਇੱਕ-ਪ੍ਰਮਾਣੂਕ γ = 5/3, ਦੋ-ਪ੍ਰਮਾਣੂਕ γ = 7/5 = 1.4)।',
                'ਰੁਧੋਸ਼ਮ (Adiabatic) P-V ਢਲਾਣ ਸਮਤਾਪੀ ਨਾਲੋਂ γ ਗੁਣਾ ਵੱਧ ਹੁੰਦੀ ਹੈ; ਕਾਰਨੋਟ ਸਮਰੱਥਾ η = 1 - T_C/T_H ਅਤੇ COP β = T_C/(T_H - T_C)।',
                'ਅਣੂ ਚਾਲਾਂ: v_rms > v_avg > v_mp; ਸਟੀਫਨ ਨਿਯਮ E = σT^4 ਅਤੇ ਵੀਨ ਨਿਯਮ λ_m T = 2.898 × 10^-3 m·K।',
                '4 ਪੋਟੈਂਸ਼ੀਅਲ: dU = TdS - PdV, dH = TdS + VdP, dF = -SdT - PdV, dG = -SdT + VdP; ਜੂਲ-ਥੌਮਸਨ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਐਂਥੈਲਪੀ ਸਥਿਰ ਰਹਿੰਦੀ ਹੈ (dH = 0)।',
                'ਬੋਸੋਨ (ਪੂਰਨ ਅੰਕ ਸਪਿੱਨ: ਫੋਟੋਨ, 4He) ਬੋਸ-ਆਈਨਸਟਾਈਨ ਅੰਕੜਿਆਂ ਦੀ ਪਾਲਣਾ ਕਰਦੇ ਹਨ; ਫਰਮੀਔਨ (ਅੱਧ-ਪੂਰਨ ਸਪਿੱਨ 1/2: ਇਲੈਕਟ੍ਰਾਨ, 3He) ਫਰਮੀ-ਡਿਰਾਕ ਅਤੇ ਪੌਲੀ ਨਿਯਮ ਦੀ ਪਾਲਣਾ ਕਰਦੇ ਹਨ।'
            ],
            hi: [
                '-40° पर सेल्सियस और फारेनहाइट बराबर होते हैं; α : β : γ = 1 : 2 : 3; जल का घनत्व 4°C पर अधिकतम होता है।',
                'प्रथम नियम: ΔQ = ΔU + ΔW; मेयर संबंध: C_P - C_V = R; γ = 1 + 2/f (एकपरमाणुक γ = 5/3, द्विपरमाणुक γ = 7/5 = 1.4)।',
                'रुद्धोष्म P-V ढाल समतापी ढाल से γ गुना अधिक होती है; कार्नोट दक्षता η = 1 - T_C/T_H तथा COP β = T_C/(T_H - T_C)।',
                'आणविक चालें: v_rms > v_avg > v_mp; स्टीफन नियम E = σT^4 तथा वीन नियम λ_m T = 2.898 × 10^-3 m·K।',
                '4 ऊष्मागतिक विभव: dU = TdS - PdV, dH = TdS + VdP, dF = -SdT - PdV, dG = -SdT + VdP; जूल-थॉमसन प्रक्रम सम-एन्थैल्पिक (dH = 0) होता है।',
                'बोसॉन (पूर्णांक स्पिन: फोटॉन, 4He) बोस-आइंस्टीन सांख्यिकी का पालन करते हैं; फर्मिऑन (अर्ध-पूर्णांक स्पिन 1/2: इलेक्ट्रॉन, 3He) फर्मी-डिराक व पाउली अपवर्जन नियम का पालन करते हैं।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Mnemonic for Thermodynamic Potentials: "Good Physicists Have Studied Under Very Fine Teachers" -> G(P,T), F(V,T), H(S,P), U(S,V).',
                'Isobaric Work Fraction: In an isobaric expansion of an ideal gas, ΔW / ΔQ = nRΔT / nC_PΔT = R / C_P = 1 - 1/γ.',
                'Free Expansion Trap: Adiabatic free expansion of an ideal gas into vacuum has Q = 0, W = 0, ΔU = 0, and ΔT = 0 (irreversible, so ΔS > 0).',
                '3D Electron Gas Fermi Energy: E_F = (ħ^2 / 2m)(3π^2 n)^(2/3) => E_F ∝ n^(2/3), and average energy per electron at 0 K is (3/5)E_F.',
                'Clausius-Clapeyron Sign Rule: Ice-water has V_2 < V_1 so dP/dT < 0 (MP drops under high pressure); Water-steam has V_2 > V_1 so dP/dT > 0 (BP rises in pressure cooker).'
            ],
            pa: [
                'ਥਰਮੋਡਾਇਨਾਮਿਕ ਪੋਟੈਂਸ਼ੀਅਲ ਟ੍ਰਿਕ: U(S,V), H(S,P), F(T,V), G(T,P)।',
                'ਸਮਦਾਬੀ (Isobaric) ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਕਾਰਜ ਦਾ ਅਨੁਪਾਤ: ΔW / ΔQ = R / C_P = 1 - 1/γ।',
                'ਮੁਕਤ ਪਸਾਰ (Free Expansion): ਆਦਰਸ਼ ਗੈਸ ਦੇ ਖਲਾਅ ਵਿੱਚ ਮੁਕਤ ਪਸਾਰ ਲਈ Q = 0, W = 0, ΔU = 0, ΔT = 0 ਪਰ ΔS > 0 ਹੁੰਦਾ ਹੈ।',
                '3D ਇਲੈਕਟ੍ਰਾਨ ਗੈਸ ਫਰਮੀ ਊਰਜਾ: E_F ∝ n^(2/3), ਅਤੇ 0 K ਉੱਤੇ ਔਸਤ ਊਰਜਾ = (3/5)E_F।',
                'ਕਲੌਸੀਅਸ-ਕਲੈਪੇਰੌਨ ਨਿਯਮ: ਦਬਾਅ ਵਧਾਉਣ ਨਾਲ ਬਰਫ਼ ਦਾ ਪਿਘਲਣ ਦਰਜਾ ਘਟਦਾ ਹੈ (V_water < V_ice) ਪਰ ਪਾਣੀ ਦਾ ਉਬਾਲ ਦਰਜਾ ਵਧਦਾ ਹੈ।'
            ],
            hi: [
                'ऊष्मागतिक विभव ट्रिक: U(S,V), H(S,P), F(T,V), G(T,P)।',
                'समदाबी (Isobaric) प्रक्रम में कार्य अनुपात: ΔW / ΔQ = R / C_P = 1 - 1/γ।',
                'मुक्त प्रसार (Free Expansion): निर्वात में आदर्श गैस के मुक्त प्रसार हेतु Q = 0, W = 0, ΔU = 0, ΔT = 0 किंतु ΔS > 0 होता है।',
                '3D इलेक्ट्रॉन गैस फर्मी ऊर्जा: E_F ∝ n^(2/3), तथा 0 K पर औसत ऊर्जा = (3/5)E_F।',
                'क्लॉसियस-क्लैपेरॉन नियम: दाब बढ़ाने पर बर्फ़ का गलनांक घटता है (V_water < V_ice) जबकि जल का क्वथनांक बढ़ता है।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Always plug temperatures in °C directly into the Carnot efficiency formula η = 1 - T_C/T_H. Correction: T_C and T_H MUST be converted to absolute Kelvin scale (T_K = T_C + 273.15) before calculating efficiency or COP.',
                'Misconception: Both Helium-4 (4He) and Helium-3 (3He) are bosons and undergo Bose-Einstein condensation directly. Correction: 4He (2p + 2n + 2e, even total fermions, spin 0) is a Boson, whereas 3He (2p + 1n + 2e, odd total fermions, spin 1/2) is a Fermion obeying Fermi-Dirac statistics.',
                'Misconception: In the Joule-Thomson throttling process, the internal energy U of the gas remains constant. Correction: Joule-Thomson expansion is an isenthalpic process (Enthalpy H = U + PV remains constant, dH = 0), whereas free expansion into vacuum keeps internal energy constant (dU = 0).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਕਾਰਨੋਟ ਇੰਜਣ ਦੇ ਸੂਤਰ η = 1 - T_C/T_H ਵਿੱਚ ਤਾਪਮਾਨ ਸਿੱਧਾ °C ਵਿੱਚ ਭਰਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਸੁਧਾਰ: T_C ਅਤੇ T_H ਨੂੰ ਹਮੇਸ਼ਾ ਕੈਲਵਿਨ (K = °C + 273.15) ਵਿੱਚ ਬਦਲਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
                'ਭੁਲੇਖਾ: ਹੀਲੀਅਮ-4 (4He) ਅਤੇ ਹੀਲੀਅਮ-3 (3He) ਦੋਵੇਂ ਬੋਸੋਨ ਹਨ। ਸੁਧਾਰ: 4He (ਸਪਿੱਨ 0) ਬੋਸੋਨ ਹੈ, ਜਦਕਿ 3He (ਸਪਿੱਨ 1/2) ਫਰਮੀਔਨ ਹੈ ਅਤੇ ਫਰਮੀ-ਡਿਰਾਕ ਅੰਕੜਿਆਂ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਜੂਲ-ਥੌਮਸਨ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਅੰਦਰੂਨੀ ਊਰਜਾ (U) ਸਥਿਰ ਰਹਿੰਦੀ ਹੈ। ਸੁਧਾਰ: ਜੂਲ-ਥੌਮਸਨ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਐਂਥੈਲਪੀ (H = U + PV) ਸਥਿਰ ਰਹਿੰਦੀ ਹੈ (dH = 0)।'
            ],
            hi: [
                'भ्रांति: कार्नोट दक्षता सूत्र η = 1 - T_C/T_H में ताप सीधे °C में रखा जा सकता है। सुधार: T_C और T_H को हमेशा परम ताप केल्विन (K = °C + 273.15) में बदलना अनिवार्य है।',
                'भ्रांति: हीलियम-4 (4He) और हीलियम-3 (3He) दोनों बोसॉन हैं। सुधार: 4He (स्पिन 0) बोसॉन है, जबकि 3He (स्पिन 1/2) फर्मिऑन है और फर्मी-डिराक सांख्यिकी का पालन करता है।',
                'भ्रांति: जूल-थॉमसन प्रक्रम में आंतरिक ऊर्जा (U) नियत रहती है। सुधार: जूल-थॉमसन प्रक्रम में एन्थैल्पी (H = U + PV) नियत रहती है (dH = 0)।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'A Carnot engine operates between a source at 227°C and a sink at 27°C. If it absorbs 1000 J of heat per cycle from the source, calculate its thermal efficiency η and work output W per cycle.',
                    pa: 'ਇੱਕ ਕਾਰਨੋਟ ਇੰਜਣ 227°C ਦੇ ਸਰੋਤ ਅਤੇ 27°C ਦੇ ਸਿੰਕ ਵਿਚਕਾਰ ਕੰਮ ਕਰਦਾ ਹੈ। ਜੇਕਰ ਇਹ ਸਰੋਤ ਤੋਂ ਪ੍ਰਤੀ ਚੱਕਰ 1000 J ਤਾਪ ਲੈਂਦਾ ਹੈ, ਤਾਂ ਇਸਦੀ ਸਮਰੱਥਾ η ਅਤੇ ਕੀਤਾ ਗਿਆ ਕਾਰਜ W ਪਤਾ ਕਰੋ।',
                    hi: 'एक कार्नोट इंजन 227°C के स्रोत और 27°C के सिंक के बीच कार्य करता है। यदि यह स्रोत से प्रति चक्र 1000 J ऊष्मा लेता है, तो इसकी दक्षता η और प्रति चक्र किया गया कार्य W ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Convert temperatures to Kelvin: T_H = 227 + 273 = 500 K; T_C = 27 + 273 = 300 K.',
                        'Step 2: Efficiency η = 1 - T_C / T_H = 1 - 300 / 500 = 200 / 500 = 0.4 = 40%.',
                        'Step 3: Work output per cycle W = η × Q_H = 0.4 × 1000 J = 400 J (and heat rejected to sink Q_C = 600 J).'
                    ],
                    pa: [
                        'Step 1: ਤਾਪਮਾਨ ਨੂੰ ਕੈਲਵਿਨ ਵਿੱਚ ਬਦਲੋ: T_H = 227 + 273 = 500 K; T_C = 27 + 273 = 300 K।',
                        'Step 2: ਸਮਰੱਥਾ η = 1 - T_C / T_H = 1 - 300 / 500 = 0.4 = 40%।',
                        'Step 3: ਕੀਤਾ ਗਿਆ ਕਾਰਜ W = η × Q_H = 0.4 × 1000 J = 400 J।'
                    ],
                    hi: [
                        'Step 1: ताप को केल्विन में बदलें: T_H = 227 + 273 = 500 K; T_C = 27 + 273 = 300 K।',
                        'Step 2: दक्षता η = 1 - T_C / T_H = 1 - 300 / 500 = 0.4 = 40%।',
                        'Step 3: प्रति चक्र कार्य W = η × Q_H = 0.4 × 1000 J = 400 J।'
                    ]
                },
                finalAnswer: {
                    en: 'Efficiency η = 40%; Work output W = 400 J',
                    pa: 'ਸਮਰੱਥਾ η = 40%; ਕਾਰਜ W = 400 J',
                    hi: 'दक्षता η = 40%; कार्य W = 400 J'
                }
            },
            {
                problem: {
                    en: 'One mole of a monoatomic gas (γ = 5/3) is mixed with one mole of a rigid diatomic gas (γ = 7/5). Find the effective adiabatic index γ_mix of the gaseous mixture.',
                    pa: 'ਇੱਕ ਮੋਲ ਇੱਕ-ਪ੍ਰਮਾਣੂਕ ਗੈਸ (γ = 5/3) ਨੂੰ ਇੱਕ ਮੋਲ ਦੋ-ਪ੍ਰਮਾਣੂਕ ਗੈਸ (γ = 7/5) ਨਾਲ ਮਿਲਾਇਆ ਜਾਂਦਾ ਹੈ। ਮਿਸ਼ਰਣ ਦਾ ਪ੍ਰਭਾਵੀ ਰੁਧੋਸ਼ਮ ਅੰਕ γ_mix ਪਤਾ ਕਰੋ।',
                    hi: 'एक मोल एकपरमाणुक गैस (γ = 5/3) को एक मोल द्विपरमाणुक गैस (γ = 7/5) के साथ मिलाया जाता है। मिश्रण का प्रभावी रुद्धोष्म घातांक γ_mix ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: For monoatomic gas (n_1 = 1): C_V1 = (3/2)R, C_P1 = (5/2)R. For diatomic gas (n_2 = 1): C_V2 = (5/2)R, C_P2 = (7/2)R.',
                        'Step 2: Mixture molar heat capacities: C_V(mix) = (n_1 C_V1 + n_2 C_V2)/(n_1 + n_2) = ((3/2 + 5/2)R)/2 = 2R.',
                        'Step 3: C_P(mix) = C_V(mix) + R = 3R. Therefore, γ_mix = C_P(mix) / C_V(mix) = 3R / 2R = 1.5.'
                    ],
                    pa: [
                        'Step 1: ਇੱਕ-ਪ੍ਰਮਾਣੂਕ ਗੈਸ (n_1 = 1) ਲਈ C_V1 = (3/2)R; ਦੋ-ਪ੍ਰਮਾਣੂਕ ਗੈਸ (n_2 = 1) ਲਈ C_V2 = (5/2)R।',
                        'Step 2: ਮਿਸ਼ਰਣ ਲਈ C_V(mix) = (1.5R + 2.5R) / 2 = 2R ਅਤੇ C_P(mix) = 2R + R = 3R।',
                        'Step 3: γ_mix = C_P(mix) / C_V(mix) = 3R / 2R = 1.5।'
                    ],
                    hi: [
                        'Step 1: एकपरमाणुक गैस (n_1 = 1) हेतु C_V1 = (3/2)R; द्विपरमाणुक गैस (n_2 = 1) हेतु C_V2 = (5/2)R।',
                        'Step 2: मिश्रण हेतु C_V(mix) = (1.5R + 2.5R) / 2 = 2R तथा C_P(mix) = 2R + R = 3R।',
                        'Step 3: γ_mix = C_P(mix) / C_V(mix) = 3R / 2R = 1.5।'
                    ]
                },
                finalAnswer: {
                    en: 'γ_mix = 3/2 = 1.5',
                    pa: 'γ_mix = 3/2 = 1.5',
                    hi: 'γ_mix = 3/2 = 1.5'
                }
            }
        ],
        flashcards: [
            {
                id: 'sci-thermo-fc-1',
                question: {
                    en: '[Level I] At what temperature do the Celsius and Fahrenheit thermometers show the exact same reading, and at what temperature does water have maximum density?',
                    pa: '[Level I] ਕਿਸ ਤਾਪਮਾਨ ਉੱਤੇ ਸੈਲਸੀਅਸ ਅਤੇ ਫਾਰਨਹਾਈਟ ਥਰਮਾਮੀਟਰ ਬਰਾਬਰ ਰੀਡਿੰਗ ਦਿੰਦੇ ਹਨ, ਅਤੇ ਪਾਣੀ ਦੀ ਘਣਤਾ ਕਿਸ ਤਾਪਮਾਨ ਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਹੁੰਦੀ ਹੈ?',
                    hi: '[Level I] किस ताप पर सेल्सियस और फारेनहाइट तापमापी समान पाठ्यांक देते हैं, और जल का घनत्व किस ताप पर अधिकतम होता है?'
                },
                answer: {
                    en: '-40° (-40°C = -40°F); water has maximum density (1000 kg/m^3) at 4°C.',
                    pa: '-40° (-40°C = -40°F); ਪਾਣੀ ਦੀ ਘਣਤਾ 4°C ਉੱਤੇ ਸਭ ਤੋਂ ਵੱਧ (1000 kg/m^3) ਹੁੰਦੀ ਹੈ।',
                    hi: '-40° (-40°C = -40°F); जल का घनत्व 4°C पर अधिकतम (1000 kg/m^3) होता है।'
                }
            },
            {
                id: 'sci-thermo-fc-2',
                question: {
                    en: '[Level H] State the formulas for rms speed (v_rms), average speed (v_avg), and most probable speed (v_mp) of gas molecules.',
                    pa: '[Level H] ਗੈਸ ਅਣੂਆਂ ਦੀ ਵਰਗ-ਮੱਧ-ਮੂਲ ਚਾਲ (v_rms), ਔਸਤ ਚਾਲ (v_avg) ਅਤੇ ਸਭ ਤੋਂ ਸੰਭਾਵਿਤ ਚਾਲ (v_mp) ਦੇ ਸੂਤਰ ਦੱਸੋ।',
                    hi: '[Level H] गैस अणुओं की वर्ग-माध्य-मूल चाल (v_rms), औसत चाल (v_avg) और प्रायिकतम चाल (v_mp) के सूत्र लिखिए।'
                },
                answer: {
                    en: 'v_rms = √(3RT/M) > v_avg = √(8RT/πM) > v_mp = √(2RT/M) in the ratio √3 : √(8/π) : √2 (1.732 : 1.596 : 1.414).',
                    pa: 'v_rms = √(3RT/M) > v_avg = √(8RT/πM) > v_mp = √(2RT/M) (ਅਨੁਪਾਤ √3 : √(8/π) : √2)।',
                    hi: 'v_rms = √(3RT/M) > v_avg = √(8RT/πM) > v_mp = √(2RT/M) (अनुपात √3 : √(8/π) : √2)।'
                }
            },
            {
                id: 'sci-thermo-fc-3',
                question: {
                    en: '[Level H] State Stefan-Boltzmann law and Wien\'s displacement law for blackbody radiation.',
                    pa: '[Level H] ਕ੍ਰਿਸ਼ਨਿਕਾ ਵਿਕਿਰਨ (Blackbody radiation) ਲਈ ਸਟੀਫਨ-ਬੋਲਟਜ਼ਮੈਨ ਦਾ ਨਿਯਮ ਅਤੇ ਵੀਨ ਦਾ ਵਿਸਥਾਪਨ ਨਿਯਮ ਦੱਸੋ।',
                    hi: '[Level H] कृष्णिका विकिरण (Blackbody radiation) के लिए स्टीफन-बोल्ट्ज़मान नियम और वीन का विस्थापन नियम लिखिए।'
                },
                answer: {
                    en: 'Stefan-Boltzmann Law: Radiant energy per unit area per second E = σT^4. Wien\'s Displacement Law: λ_max × T = b ≈ 2.898 × 10^-3 m·K.',
                    pa: 'ਸਟੀਫਨ-ਬੋਲਟਜ਼ਮੈਨ ਨਿਯਮ: E = σT^4। ਵੀਨ ਦਾ ਵਿਸਥਾਪਨ ਨਿਯਮ: λ_max × T = b ≈ 2.898 × 10^-3 m·K।',
                    hi: 'स्टीफन-बोल्ट्ज़मान नियम: E = σT^4। वीन का विस्थापन नियम: λ_max × T = b ≈ 2.898 × 10^-3 m·K।'
                }
            },
            {
                id: 'sci-thermo-fc-4',
                question: {
                    en: '[Level G] Write the differential forms of the four thermodynamic potentials U, H, F, and G.',
                    pa: '[Level G] ਚਾਰ ਥਰਮੋਡਾਇਨਾਮਿਕ ਪੋਟੈਂਸ਼ੀਅਲਾਂ U, H, F ਅਤੇ G ਦੇ ਡਿਫਰੈਂਸ਼ੀਅਲ ਰੂਪ ਲਿਖੋ।',
                    hi: '[Level G] चारों ऊष्मागतिक विभवों U, H, F और G के अवकल (differential) रूप लिखिए।'
                },
                answer: {
                    en: 'dU = TdS - PdV; dH = TdS + VdP; dF = -SdT - PdV; dG = -SdT + VdP.',
                    pa: 'dU = TdS - PdV; dH = TdS + VdP; dF = -SdT - PdV; dG = -SdT + VdP।',
                    hi: 'dU = TdS - PdV; dH = TdS + VdP; dF = -SdT - PdV; dG = -SdT + VdP।'
                }
            },
            {
                id: 'sci-thermo-fc-5',
                question: {
                    en: '[Level G/P] Distinguish between Bose-Einstein (BE) and Fermi-Dirac (FD) statistics in terms of particle spin and Pauli\'s exclusion principle.',
                    pa: '[Level G/P] ਕਣਾਂ ਦੇ ਸਪਿੱਨ ਅਤੇ ਪੌਲੀ ਦੇ ਨਿਯਮ ਦੇ ਆਧਾਰ ਤੇ ਬੋਸ-ਆਈਨਸਟਾਈਨ (BE) ਅਤੇ ਫਰਮੀ-ਡਿਰਾਕ (FD) ਅੰਕੜਿਆਂ ਵਿੱਚ ਅੰਤਰ ਦੱਸੋ।',
                    hi: '[Level G/P] कणों के स्पिन और पाउली के अपवर्जन नियम के आधार पर बोस-आइंस्टीन (BE) और फर्मी-डिराक (FD) सांख्यिकी में अंतर स्पष्ट कीजिए।'
                },
                answer: {
                    en: 'BE statistics applies to indistinguishable Bosons with integral spin (0, 1, 2: photons, 4He) which do NOT obey Pauli exclusion. FD statistics applies to indistinguishable Fermions with half-integral spin (1/2, 3/2: electrons, protons, 3He) which strictly obey Pauli exclusion.',
                    pa: 'BE ਅੰਕੜੇ ਪੂਰਨ ਅੰਕ ਸਪਿੱਨ (0, 1, 2: ਫੋਟੋਨ, 4He) ਵਾਲੇ ਬੋਸੋਨਾਂ ਤੇ ਲਾਗੂ ਹੁੰਦੇ ਹਨ ਜੋ ਪੌਲੀ ਨਿਯਮ ਨਹੀਂ ਮੰਨਦੇ। FD ਅੰਕੜੇ ਅੱਧ-ਪੂਰਨ ਸਪਿੱਨ (1/2: ਇਲੈਕਟ੍ਰਾਨ, 3He) ਵਾਲੇ ਫਰਮੀਔਨਾਂ ਤੇ ਲਾਗੂ ਹੁੰਦੇ ਹਨ ਜੋ ਪੌਲੀ ਨਿਯਮ ਦੀ ਪਾਲਣਾ ਕਰਦੇ ਹਨ।',
                    hi: 'BE सांख्यिकी पूर्णांक स्पिन (0, 1, 2: फोटॉन, 4He) वाले बोसॉनों पर लागू होती है जो पाउली नियम नहीं मानते। FD सांख्यिकी अर्ध-पूर्णांक स्पिन (1/2: इलेक्ट्रॉन, 3He) वाले फर्मिऑनों पर लागू होती है जो पाउली नियम का पालन करते हैं।'
                }
            }
        ]
    },

    // =========================================================================
    // 4. ELECTRICITY, MAGNETISM, AC CIRCUITS & ELECTROMAGNETIC THEORY (LEVEL I -> H -> G/P)
    // =========================================================================
    {
        topicId: 'sci-phy-electromagnetism-circuits',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Level I (Class 9–10) -> Level H (Class 11–12) -> Level G/P (Graduation / Postgraduate Flagged) mastery of Electrostatics, Current Electricity, Kirchhoff/Bridge Circuits, Magnetostatics, Magnetic Materials, EMI, Series LCR AC Resonance, and Maxwell Equations / Poynting Vector.'
        },
        bookRefs: [
            {
                title: 'NCERT Physics Class 12 (Part I) & Introduction to Electrodynamics by D.J. Griffiths',
                author: 'NCERT / David J. Griffiths',
                chapter: 'Electrostatics, Current Electricity, Magnetism, EMI, AC Circuits & Electromagnetic Waves',
                relevance: 'Complete coverage of Gauss law, capacitors, bridges, Lorentz force, LCR resonance, Maxwell four equations, and Poynting vector.'
            }
        ],
        summary: {
            en: `### [Level I: Intermediate — Class 9–10 Ohm's Law, Heating Effect & Basic Magnetism]
1. **Electric Charge, Current, Resistance & Commercial Energy:**
   - **Quantisation of Charge:** $Q = \\pm ne$ ($e = 1.602\\times 10^{-19}\\text{ C}$); Current $I = \\frac{Q}{t}$.
   - **Ohm's Law & Resistivity:** $V = IR$, where $R = \\rho\\frac{L}{A}$. Resistivity $\\rho$ depends **only on material and temperature** (not on $L$ or $A$). Stretching a wire to $n$ times its length ($V = \\text{const}$) increases resistance to **$R' = n^2 R$**.
   - **Resistors:** Series $R_s = R_1 + R_2 + \\dots$; Parallel $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$.
   - **Joule's Heating & Power:** $H = I^2 R t$, Power $P = VI = I^2 R = \\frac{V^2}{R}$; Commercial unit **$1\\text{ kWh (1 Unit)} = 3.6\\times 10^6\\text{ J}$**.
2. **Oersted's Experiment & Fleming's Hand Rules:**
   - **Fleming's Left-Hand Rule (Electric Motor):** Force on current-carrying conductor in $\\vec{B}$ ($\\vec{F} = I\\vec{L}\\times\\vec{B}$).
   - **Fleming's Right-Hand Rule (Electric Generator / Dynamo):** Direction of induced current due to motion in $\\vec{B}$.

---

### [Level H: Higher Secondary — Class 11–12 Electrostatics, Bridges, Magnetostatics, EMI & AC Circuits]
1. **Electrostatics, Gauss's Law & Capacitors:**
   - **Coulomb's Law:** $F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}$ ($\\frac{1}{4\\pi\\varepsilon_0} = 9\\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$).
   - **Electric Dipole ($\\vec{p} = q(2\\vec{a})$):** Axial field $E_{\\text{axial}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{2p}{r^3}$; Equatorial field $E_{\\text{eq}} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{p}{r^3}$ ($E_{\\text{axial}} = 2E_{\\text{eq}}$, antiparallel). Torque $\\vec{\\tau} = \\vec{p}\\times\\vec{E}$ and Potential Energy $U = -\\vec{p}\\cdot\\vec{E} = -pE\\cos\\theta$.
   - **Gauss's Law:** $\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{\\text{in}}}{\\varepsilon_0}$. Infinite line charge: $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$; Infinite plane sheet: $E = \\frac{\\sigma}{2\\varepsilon_0}$ (independent of distance!).
   - **Parallel-Plate Capacitor:** $C = \\frac{K\\varepsilon_0 A}{d}$; Energy stored $U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$ and energy density $u_E = \\frac{1}{2}\\varepsilon_0 E^2$. (Series: $\\frac{1}{C_s} = \\sum \\frac{1}{C_i}$; Parallel: $C_p = \\sum C_i$).
2. **Drift Velocity, Kirchhoff's Laws, Wheatstone Bridge & Potentiometer:**
   - **Drift Velocity:** $I = neAv_d$ and mobility $\\mu = \\frac{v_d}{E} = \\frac{e\\tau}{m}$.
   - **Kirchhoff's Laws:** **KCL** ($\\sum I = 0$ at a junction) is based on **Conservation of Charge**; **KVL** ($\\sum \\Delta V = 0$ around a closed loop) is based on **Conservation of Energy**.
   - **Balanced Wheatstone Bridge ($I_g = 0$):** $\\frac{P}{Q} = \\frac{R}{S}$. **Potentiometer:** Ideal infinite-resistance voltmeter working on the null-deflection principle ($V \\propto l$).
3. **Magnetostatics, Galvanometer Conversion & Magnetic Materials:**
   - **Biot-Savart & Ampere's Law ($\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I$):** Straight wire $B = \\frac{\\mu_0 I}{2\\pi r}$; Circular loop centre $B = \\frac{\\mu_0 NI}{2R}$; Long Solenoid $B = \\mu_0 n I$; Toroid $B = \\frac{\\mu_0 NI}{2\\pi r}$.
   - **Lorentz Force & Cyclotron:** $\\vec{F} = q(\\vec{E} + \\vec{v}\\times\\vec{B})$. In uniform $\\vec{B}$, circular radius $r = \\frac{mv}{qB}$ and **Cyclotron frequency $f_c = \\frac{qB}{2\\pi m}$** (independent of speed $v$ and radius $r$!).
   - **Galvanometer Conversion:** To **Ammeter** $\\to$ connect **low resistance shunt $S = \\frac{I_g G}{I - I_g}$ in parallel**; to **Voltmeter** $\\to$ connect **high resistance $R = \\frac{V}{I_g} - G$ in series**.
   - **Magnetic Materials:** **Diamagnetic** ($\\text{Bi, Cu, H}_2\\text{O}$, Superconductors: $-1 \\le \\chi < 0$, independent of $T$); **Paramagnetic** ($\\text{Al, Na, O}_2$: $\\chi > 0$ small, obeys **Curie's Law $\\chi \\propto 1/T$**); **Ferromagnetic** ($\\text{Fe, Co, Ni, Gd}$: $\\chi \\gg 1$, domains, hysteresis, Curie-Weiss law $\\chi \\propto \\frac{1}{T - T_C}$).
4. **Electromagnetic Induction (EMI), Series LCR AC Circuit & Transformer:**
   - **Faraday's & Lenz's Law:** $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$ (Lenz's negative sign expresses **Conservation of Energy**). Inductor energy $U_B = \\frac{1}{2}LI^2$, magnetic energy density $u_B = \\frac{B^2}{2\\mu_0}$, mutual inductance $M = k\\sqrt{L_1 L_2}$.
   - **Series LCR AC Circuit:** Impedance **$Z = \\sqrt{R^2 + (X_L - X_C)^2}$** where $X_L = \\omega L$ and $X_C = \\frac{1}{\\omega C}$.
   - **Series Resonance ($X_L = X_C$):** Resonant frequency **$f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$**, minimum impedance $Z_{\\min} = R$, maximum current $I_{\\max} = V/R$, **Power factor $\\cos\\phi = \\frac{R}{Z} = 1$**, and **Quality Factor $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{f_0}{\\Delta f}$**. For pure $L$ or $C$, $\\phi = \\pm 90^\\circ \\implies P_{\\text{avg}} = V_{\\text{rms}}I_{\\text{rms}}\\cos 90^\\circ = 0$ (**Wattless Current**).
   - **Transformer:** $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$ (works **only on AC**, laminated soft-iron core reduces eddy current & hysteresis losses).

---

### [Level G/P: Graduation & Postgraduate Flagged — Maxwell's Equations, Poynting Vector & EM Waves]
1. **Displacement Current & The Four Maxwell's Equations:**
   - Maxwell introduced **Displacement Current $I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt}$** to make Ampere's law consistent for charging capacitors.
   | Maxwell's Equation | Differential Form | Integral Form | Physical Significance |
   |---|---|---|---|
   | **1. Gauss's Law (Electricity)** | $\\nabla\\cdot\\vec{E} = \\frac{\\rho}{\\varepsilon_0}$ | $\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{\\text{in}}}{\\varepsilon_0}$ | Electric charges are sources/sinks of $\\vec{E}$ |
   | **2. Gauss's Law (Magnetism)** | $\\nabla\\cdot\\vec{B} = 0$ | $\\oint \\vec{B}\\cdot d\\vec{A} = 0$ | **Magnetic monopoles do NOT exist** ($\\vec{B}$ is solenoidal) |
   | **3. Faraday's Law of EMI** | $\\nabla\\times\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}$ | $\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$ | Time-varying magnetic field produces non-conservative $\\vec{E}$ |
   | **4. Ampere-Maxwell Law** | $\\nabla\\times\\vec{B} = \\mu_0\\vec{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\vec{E}}{\\partial t}$ | $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0(I_c + I_d)$ | Currents and time-varying $\\vec{E}$ produce $\\vec{B}$ |
2. **Electromagnetic Waves, Poynting Vector & EM Spectrum:**
   - **EM Wave Speed:** In vacuum $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}} = \\frac{E_0}{B_0} = 3\\times 10^8\\text{ m/s}$; in medium $v = \\frac{1}{\\sqrt{\\mu\\varepsilon}} = \\frac{c}{n}$. Transverse with $\\vec{E} \\perp \\vec{B} \\perp \\vec{k}$ (in phase, direction of propagation given by $\\vec{E}\\times\\vec{B}$).
   - **Poynting Vector (Energy Flux Density):** **$\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E}\\times\\vec{B})$** in $\\text{W/m}^2$; average intensity $I = \\langle S \\rangle = \\frac{E_0 B_0}{2\\mu_0} = c u_{\\text{avg}}$. **Radiation Pressure:** $P_{\\text{rad}} = \\frac{I}{c}$ (absorbed) or $\\frac{2I}{c}$ (perfectly reflected).
   - **EM Spectrum Order (increasing frequency $\\nu$ / decreasing $\\lambda$):** **Radio $\\to$ Microwave $\\to$ Infrared (IR) $\\to$ Visible ($400\\text{--}700\\text{ nm}$) $\\to$ Ultraviolet (UV) $\\to$ X-rays $\\to$ Gamma ($\\gamma$) rays**.`,
            pa: `### [Level I: Intermediate — Class 9–10 ਓਮ ਦਾ ਨਿਯਮ, ਤਾਪ ਪ੍ਰਭਾਵ ਅਤੇ ਚੁੰਬਕਤਾ]
1. **ਬਿਜਲੀ ਧਾਰਾ, ਪ੍ਰਤੀਰੋਧ ਅਤੇ ਸ਼ਕਤੀ:**
   - $Q = ne$, $I = Q/t$, ਓਮ ਦਾ ਨਿਯਮ $V = IR$ ਅਤੇ $R = \\rho\\frac{L}{A}$। ਤਾਰ ਨੂੰ ਖਿੱਚ ਕੇ $n$ ਗੁਣਾ ਲੰਬਾ ਕਰਨ ਤੇ ਨਵਾਂ ਪ੍ਰਤੀਰੋਧ **$R' = n^2 R$** ਹੋ ਜਾਂਦਾ ਹੈ।
   - **ਜੂਲ ਦਾ ਤਾਪ ਨਿਯਮ:** $H = I^2Rt$, ਸ਼ਕਤੀ $P = VI = I^2R = V^2/R$, ਅਤੇ **$1\\text{ kWh (1 ਯੂਨਿਟ)} = 3.6\\times 10^6\\text{ J}$**।
   - **ਫਲੇਮਿੰਗ ਦਾ ਖੱਬੇ ਹੱਥ ਦਾ ਨਿਯਮ:** ਬਿਜਲੀ ਮੋਟਰ (ਬਲ ਦੀ ਦਿਸ਼ਾ); **ਸੱਜੇ ਹੱਥ ਦਾ ਨਿਯਮ:** ਬਿਜਲੀ ਜਨਰੇਟਰ (ਪ੍ਰੇਰਿਤ ਧਾਰਾ)।

---

### [Level H: Higher Secondary — Class 11–12 ਇਲੈਕਟ੍ਰੋਸਟੈਟਿਕਸ, ਚੁੰਬਕਤਾ, EMI ਅਤੇ AC ਸਰਕਟ]
1. **ਗੌਸ ਦਾ ਨਿਯਮ, ਕੈਪੇਸੀਟਰ ਅਤੇ ਕਿਰਚੌਫ ਦੇ ਨਿਯਮ:**
   - **ਗੌਸ ਦਾ ਨਿਯਮ:** $\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{\\text{in}}}{\\varepsilon_0}$। ਸਮਾਂਤਰ ਪਲੇਟ ਕੈਪੇਸੀਟਰ $C = \\frac{K\\varepsilon_0 A}{d}$ ਅਤੇ ਊਰਜਾ $U = \\frac{1}{2}CV^2$।
   - **ਕਿਰਚੌਫ ਦੇ ਨਿਯਮ:** **KCL** ($\\sum I = 0$, ਚਾਰਜ ਸੁਰੱਖਿਅਣ) ਅਤੇ **KVL** ($\\sum \\Delta V = 0$, ਊਰਜਾ ਸੁਰੱਖਿਅਣ)। **ਵੀਟਸਟੋਨ ਬ੍ਰਿਜ:** $\\frac{P}{Q} = \\frac{R}{S}$।
2. **ਲੌਰੈਂਟਜ਼ ਬਲ, ਗੈਲਵੈਨੋਮੀਟਰ ਅਤੇ ਚੁੰਬਕੀ ਪਦਾਰਥ:**
   - **ਲੌਰੈਂਟਜ਼ ਬਲ:** $\\vec{F} = q(\\vec{E} + \\vec{v}\\times\\vec{B})$; ਸਾਈਕਲੋਟ੍ਰੋਨ ਆਵ੍ਰਿਤੀ $f_c = \\frac{qB}{2\\pi m}$।
   - **ਗੈਲਵੈਨੋਮੀਟਰ ਪਰਿਵਰਤਨ:** **ਐਮੀਟਰ** ਬਣਾਉਣ ਲਈ **ਸਮਾਂਤਰ ਵਿੱਚ ਘੱਟ ਪ੍ਰਤੀਰੋਧ ਵਾਲਾ ਸ਼ੰਟ ($S$)**; **ਵੋਲਟਮੀਟਰ** ਬਣਾਉਣ ਲਈ **ਲੜੀ (Series) ਵਿੱਚ ਉੱਚ ਪ੍ਰਤੀਰੋਧ ($R$)** ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ।
   - **ਫੈਰਾਡੇ ਅਤੇ ਲੈਂਜ਼ ਦਾ ਨਿਯਮ:** $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$ (ਲੈਂਜ਼ ਦਾ ਨਿਯਮ ਊਰਜਾ ਸੁਰੱਖਿਅਣ ਤੇ ਅਧਾਰਤ ਹੈ)।
3. **ਲੜੀਵਾਰ LCR AC ਸਰਕਟ ਅਤੇ ਅਨੁਨਾਦ (Resonance):**
   - ਇਮਪੀਡੈਂਸ $Z = \\sqrt{R^2 + (X_L - X_C)^2}$; **ਅਨੁਨਾਦ ਆਵ੍ਰਿਤੀ ($X_L = X_C$):** $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$, ਪਾਵਰ ਫੈਕਟਰ $\\cos\\phi = R/Z = 1$, ਅਤੇ Q-ਫੈਕਟਰ $= \\frac{1}{R}\\sqrt{\\frac{L}{C}}$।

---

### [Level G/P: Graduation / PG — ਮੈਕਸਵੈੱਲ ਦੀਆਂ 4 ਸਮੀਕਰਨਾਂ ਅਤੇ ਪੁਆਇੰਟਿੰਗ ਵੈਕਟਰ]
1. **ਮੈਕਸਵੈੱਲ ਦੀਆਂ 4 ਸਮੀਕਰਨਾਂ:**
   - (1) $\\nabla\\cdot\\vec{E} = \\rho/\\varepsilon_0$, (2) $\\nabla\\cdot\\vec{B} = 0$ (**ਚੁੰਬਕੀ ਮੋਨੋਪੋਲ ਸੰਭਵ ਨਹੀਂ**), (3) $\\nabla\\times\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}$, (4) $\\nabla\\times\\vec{B} = \\mu_0\\vec{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\vec{E}}{\\partial t}$ (ਵਿਸਥਾਪਨ ਧਾਰਾ $I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt}$)।
2. **ਪੁਆਇੰਟਿੰਗ ਵੈਕਟਰ ਅਤੇ EM ਸਪੈਕਟ੍ਰਮ:**
   - **ਪੁਆਇੰਟਿੰਗ ਵੈਕਟਰ:** $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E}\\times\\vec{B})$, ਪ੍ਰਕਾਸ਼ ਦੀ ਚਾਲ $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$।
   - **EM ਸਪੈਕਟ੍ਰਮ (ਵਧਦੀ ਆਵ੍ਰਿਤੀ):** ਰੇਡੀਓ $\\to$ ਮਾਈਕ੍ਰੋਵੇਵ $\\to$ ਇਨਫਰਾਰੈੱਡ $\\to$ ਦ੍ਰਿਸ਼ ਪ੍ਰਕਾਸ਼ $\\to$ ਪਰਾਬੈਂਗਣੀ (UV) $\\to$ ਐਕਸ-ਰੇ $\\to$ ਗਾਮਾ ਕਿਰਨਾਂ।`,
            hi: `### [Level I: Intermediate — Class 9–10 ओम का नियम, ऊष्मीय प्रभाव एवं चुंबकत्व]
1. **विद्युत धारा, प्रतिरोध एवं शक्ति:**
   - $Q = ne$, $I = Q/t$, ओम का नियम $V = IR$ तथा $R = \\rho\\frac{L}{A}$। तार को खींचकर $n$ गुना लंबा करने पर नया प्रतिरोध **$R' = n^2 R$** हो जाता है।
   - **जूल का तापन नियम:** $H = I^2Rt$, शक्ति $P = VI = I^2R = V^2/R$, तथा **$1\\text{ kWh (1 यूनिट)} = 3.6\\times 10^6\\text{ J}$**।
   - **फ्लेमिंग का वामहस्त नियम:** विद्युत मोटर (बल की दिशा); **दक्षिणहस्त नियम:** विद्युत जनित्र (प्रेरित धारा)।

---

### [Level H: Higher Secondary — Class 11–12 स्थिरवैद्युतिकी, चुंबकत्व, EMI एवं AC परिपथ]
1. **गॉस का नियम, संधारित्र एवं किरचॉफ के नियम:**
   - **गॉस का नियम:** $\\oint \\vec{E}\\cdot d\\vec{A} = \\frac{q_{\\text{in}}}{\\varepsilon_0}$। समांतर प्लेट संधारित्र $C = \\frac{K\\varepsilon_0 A}{d}$ तथा संचित ऊर्जा $U = \\frac{1}{2}CV^2$।
   - **किरचॉफ के नियम:** **KCL** ($\\sum I = 0$, आवेश संरक्षण) तथा **KVL** ($\\sum \\Delta V = 0$, ऊर्जा संरक्षण)। **व्हीटस्टोन सेतु:** $\\frac{P}{Q} = \\frac{R}{S}$।
2. **लॉरेंज बल, गैल्वेनोमीटर एवं चुंबकीय पदार्थ:**
   - **लॉरेंज बल:** $\\vec{F} = q(\\vec{E} + \\vec{v}\\times\\vec{B})$; साइक्लोट्रॉन आवृत्ति $f_c = \\frac{qB}{2\\pi m}$।
   - **गैल्वेनोमीटर रूपांतरण:** **अमीटर** बनाने के लिए **समांतर क्रम में अल्प प्रतिरोध शंट ($S$)**; **वोल्टमीटर** बनाने के लिए **श्रेणीक्रम में उच्च प्रतिरोध ($R$)** जोड़ा जाता है।
   - **फैराडे एवं लेंज का नियम:** $\\mathcal{E} = -N\\frac{d\\Phi_B}{dt}$ (लेंज का नियम ऊर्जा संरक्षण पर आधारित है)।
3. **श्रेणीबद्ध LCR AC परिपथ एवं अनुनाद (Resonance):**
   - प्रतिबाधा $Z = \\sqrt{R^2 + (X_L - X_C)^2}$; **अनुनाद आवृत्ति ($X_L = X_C$):** $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$, शक्ति गुणांक $\\cos\\phi = R/Z = 1$, तथा Q-गुणांक $= \\frac{1}{R}\\sqrt{\\frac{L}{C}}$।

---

### [Level G/P: Graduation / PG — मैक्सवेल के 4 समीकरण एवं पॉइन्टिंग सदिश]
1. **मैक्सवेल के 4 समीकरण:**
   - (1) $\\nabla\\cdot\\vec{E} = \\rho/\\varepsilon_0$, (2) $\\nabla\\cdot\\vec{B} = 0$ (**चुंबकीय एकलध्रुव असंभव**), (3) $\\nabla\\times\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}$, (4) $\\nabla\\times\\vec{B} = \\mu_0\\vec{J} + \\mu_0\\varepsilon_0\\frac{\\partial\\vec{E}}{\\partial t}$ (विस्थापन धारा $I_d = \\varepsilon_0\\frac{d\\Phi_E}{dt}$)।
2. **पॉइन्टिंग सदिश एवं EM स्पेक्ट्रम:**
   - **पॉइन्टिंग सदिश:** $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E}\\times\\vec{B})$, प्रकाश की चाल $c = \\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$।
   - **EM स्पेक्ट्रम (बढ़ती आवृत्ति):** रेडियो $\\to$ सूक्ष्मतरंग $\\to$ अवरक्त (IR) $\\to$ दृश्य प्रकाश $\\to$ पराबैंगनी (UV) $\\to$ एक्स-किरणें $\\to$ गामा किरणें।`
        },
        keyNotes: {
            en: [
                'Stretching a wire to n times its length keeps volume constant and increases resistance to R\' = n^2 R, while resistivity ρ remains unchanged.',
                'Kirchhoff KCL (ΣI = 0) expresses Conservation of Charge; KVL (ΣΔV = 0) and Lenz Law (ε = -N dΦ_B/dt) express Conservation of Energy.',
                'Galvanometer to Ammeter requires a low-resistance shunt S in parallel (ideal ammeter R = 0); to Voltmeter requires a high resistance R in series (ideal voltmeter R = ∞).',
                'Series LCR Resonance occurs at X_L = X_C => f_0 = 1/(2π√(LC)), where impedance is minimum (Z = R), power factor cos(φ) = 1, and Q = (1/R)√(L/C).',
                'Maxwell\'s 4 Equations: ∇·E = ρ/ε_0, ∇·B = 0 (no magnetic monopoles), ∇×E = -∂B/∂t, and ∇×B = μ_0 J + μ_0 ε_0 ∂E/∂t.',
                'EM wave speed in vacuum c = 1/√(μ_0 ε_0) = E_0/B_0; Poynting vector S = (1/μ_0)(E × B) gives energy flux per unit area.'
            ],
            pa: [
                'ਤਾਰ ਨੂੰ ਖਿੱਚ ਕੇ n ਗੁਣਾ ਲੰਬਾ ਕਰਨ ਤੇ ਪ੍ਰਤੀਰੋਧ R\' = n^2 R ਹੋ ਜਾਂਦਾ ਹੈ, ਜਦਕਿ ਪ੍ਰਤੀਰੋਧਕਤਾ (ρ) ਸਥਿਰ ਰਹਿੰਦੀ ਹੈ।',
                'ਕਿਰਚੌਫ ਦਾ KCL ਚਾਰਜ ਸੁਰੱਖਿਅਣ ਤੇ ਅਤੇ KVL ਤੇ ਲੈਂਜ਼ ਦਾ ਨਿਯਮ ਊਰਜਾ ਸੁਰੱਖਿਅਣ ਤੇ ਅਧਾਰਤ ਹਨ।',
                'ਗੈਲਵੈਨੋਮੀਟਰ ਨੂੰ ਐਮੀਟਰ ਵਿੱਚ ਬਦਲਣ ਲਈ ਸਮਾਂਤਰ ਵਿੱਚ ਘੱਟ ਪ੍ਰਤੀਰੋਧ ਸ਼ੰਟ (S) ਅਤੇ ਵੋਲਟਮੀਟਰ ਲਈ ਲੜੀ ਵਿੱਚ ਉੱਚ ਪ੍ਰਤੀਰੋਧ (R) ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ।',
                'LCR ਅਨੁਨਾਦ ਆਵ੍ਰਿਤੀ f_0 = 1/(2π√(LC)), ਜਿੱਥੇ Z_min = R, ਪਾਵਰ ਫੈਕਟਰ cos(φ) = 1 ਅਤੇ Q = (1/R)√(L/C) ਹੁੰਦਾ ਹੈ।',
                'ਮੈਕਸਵੈੱਲ ਦੀਆਂ 4 ਸਮੀਕਰਨਾਂ: ∇·E = ρ/ε_0, ∇·B = 0 (ਕੋਈ ਚੁੰਬਕੀ ਮੋਨੋਪੋਲ ਨਹੀਂ), ∇×E = -∂B/∂t, ਅਤੇ ∇×B = μ_0 J + μ_0 ε_0 ∂E/∂t।',
                'ਖਲਾਅ ਵਿੱਚ EM ਤਰੰਗ ਦੀ ਚਾਲ c = 1/√(μ_0 ε_0) = E_0/B_0; ਪੁਆਇੰਟਿੰਗ ਵੈਕਟਰ S = (1/μ_0)(E × B)।'
            ],
            hi: [
                'तार को खींचकर n गुना लंबा करने पर प्रतिरोध R\' = n^2 R हो जाता है, जबकि प्रतिरोधकता (ρ) अपरिवर्तित रहती है।',
                'किरचॉफ का KCL आवेश संरक्षण पर तथा KVL और लेंज का नियम ऊर्जा संरक्षण पर आधारित हैं।',
                'गैल्वेनोमीटर को अमीटर में बदलने हेतु समांतर में अल्प प्रतिरोध शंट (S) तथा वोल्टमीटर हेतु श्रेणी में उच्च प्रतिरोध (R) जोड़ा जाता है।',
                'LCR अनुनाद आवृत्ति f_0 = 1/(2π√(LC)), जहाँ Z_min = R, शक्ति गुणांक cos(φ) = 1 तथा Q = (1/R)√(L/C) होता है।',
                'मैक्सवेल के 4 समीकरण: ∇·E = ρ/ε_0, ∇·B = 0 (चुंबकीय एकलध्रुव असंभव), ∇×E = -∂B/∂t, तथा ∇×B = μ_0 J + μ_0 ε_0 ∂E/∂t।',
                'निर्वात में EM तरंग की चाल c = 1/√(μ_0 ε_0) = E_0/B_0; पॉइन्टिंग सदिश S = (1/μ_0)(E × B)।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Dielectric Slab in Capacitor: Battery DISCONNECTED (Q const) -> C = KC_0, V = V_0/K, E = E_0/K, U = U_0/K; Battery CONNECTED (V const) -> C = KC_0, Q = KQ_0, E = E_0, U = KU_0.',
                'Magnetic Force Work Rule: Magnetic force F_B = q(v × B) is always perpendicular to velocity v, so work done by a static magnetic field on a moving charge is ALWAYS ZERO (ΔK = 0, speed constant).',
                'Equipotential Surface: Work done in moving any charge on an equipotential surface is zero, and electric field E is always perpendicular to it.',
                'Electric Dipole Field Scaling: Point charge E ∝ 1/r^2, V ∝ 1/r; Electric dipole E ∝ 1/r^3, V ∝ 1/r^2; Quadrupole E ∝ 1/r^4.',
                'EM Wave Energy Sharing: In an electromagnetic wave in free space, electric energy density u_E = (1/2)ε_0 E^2 equals magnetic energy density u_B = B^2/(2μ_0).'
            ],
            pa: [
                'ਕੈਪੇਸੀਟਰ ਵਿੱਚ ਡਾਇਇਲੈਕਟ੍ਰਿਕ (K): ਬੈਟਰੀ ਹਟਾਉਣ ਤੇ (Q ਸਥਿਰ) -> C = KC_0, V = V_0/K, U = U_0/K; ਬੈਟਰੀ ਜੁੜੀ ਰਹਿਣ ਤੇ (V ਸਥਿਰ) -> C = KC_0, Q = KQ_0, U = KU_0।',
                'ਚੁੰਬਕੀ ਬਲ ਦੁਆਰਾ ਕਾਰਜ: ਚੁੰਬਕੀ ਬਲ F_B = q(v × B) ਹਮੇਸ਼ਾ ਵੇਗ v ਦੇ ਲੰਬਵਤ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਚੁੰਬਕੀ ਖੇਤਰ ਦੁਆਰਾ ਕੀਤਾ ਗਿਆ ਕਾਰਜ ਹਮੇਸ਼ਾ ਸਿਫ਼ਰ ਹੁੰਦਾ ਹੈ।',
                'ਸਮ-ਵਿਭਵ ਸਤ੍ਹਾ (Equipotential Surface): ਇਸ ਉੱਤੇ ਚਾਰਜ ਨੂੰ ਘੁਮਾਉਣ ਵਿੱਚ ਕੀਤਾ ਗਿਆ ਕਾਰਜ ਸਿਫ਼ਰ ਹੁੰਦਾ ਹੈ।',
                'ਬਿਜਲੀ ਡਾਇਪੋਲ ਖੇਤਰ: ਬਿੰਦੂ ਚਾਰਜ ਲਈ E ∝ 1/r^2, V ∝ 1/r; ਡਾਇਪੋਲ ਲਈ E ∝ 1/r^3, V ∝ 1/r^2।',
                'EM ਤਰੰਗ ਵਿੱਚ ਬਿਜਲਈ ਊਰਜਾ ਘਣਤਾ (u_E) ਅਤੇ ਚੁੰਬਕੀ ਊਰਜਾ ਘਣਤਾ (u_B) ਹਮੇਸ਼ਾ ਬਰਾਬਰ ਹੁੰਦੀਆਂ ਹਨ (u_E = u_B)।'
            ],
            hi: [
                'संधारित्र में परावैद्युत (K): बैटरी हटाने पर (Q नियत) -> C = KC_0, V = V_0/K, U = U_0/K; बैटरी जुड़े रहने पर (V नियत) -> C = KC_0, Q = KQ_0, U = KU_0।',
                'चुंबकीय बल द्वारा कार्य: चुंबकीय बल F_B = q(v × B) सदैव वेग v के लंबवत होता है, अतः चुंबकीय क्षेत्र द्वारा गतिमान आवेश पर किया गया कार्य सदैव शून्य होता है।',
                'समविभव पृष्ठ (Equipotential Surface): इस पर आवेश को चलाने में किया गया कार्य शून्य होता है।',
                'विद्युत द्विध्रुव क्षेत्र: बिंदु आवेश हेतु E ∝ 1/r^2, V ∝ 1/r; द्विध्रुव हेतु E ∝ 1/r^3, V ∝ 1/r^2।',
                'EM तरंग में विद्युत ऊर्जा घनत्व (u_E) और चुंबकीय ऊर्जा घनत्व (u_B) सदैव बराबर होते हैं (u_E = u_B)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: In an electromagnetic wave, the electric field E and magnetic field B are 90° out of phase with each other. Correction: E and B are perpendicular in space (E ⊥ B ⊥ k), but they oscillate in the SAME phase (reaching maxima and zero simultaneously).',
                'Misconception: Stretching a copper wire to double its length doubles its resistance and resistivity. Correction: Resistivity ρ is an intrinsic material property independent of dimensions; doubling the length halves the cross-sectional area, quadrupling the resistance (R\' = 4R).',
                'Misconception: A step-up transformer violates conservation of energy because it increases voltage (V_s > V_p) and can also work on DC batteries. Correction: A transformer works ONLY on alternating current (AC via changing magnetic flux), and stepping up voltage proportionally steps down current (I_s < I_p) so V_s I_s ≤ V_p I_p.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਇਲੈਕਟ੍ਰੋਮੈਗਨੈਟਿਕ ਤਰੰਗ ਵਿੱਚ E ਅਤੇ B ਵਿਚਕਾਰ 90° ਦਾ ਕਲਾ ਅੰਤਰ (Phase difference) ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: E ਅਤੇ B ਦਿਸ਼ਾ ਵਿੱਚ ਇੱਕ-ਦੂਜੇ ਦੇ ਲੰਬਵਤ (90°) ਹੁੰਦੇ ਹਨ, ਪਰ ਉਹ ਇੱਕੋ ਕਲਾ (Zero phase difference) ਵਿੱਚ ਕੰਪਨ ਕਰਦੇ ਹਨ।',
                'ਭੁਲੇਖਾ: ਤਾਂਬੇ ਦੀ ਤਾਰ ਨੂੰ ਖਿੱਚ ਕੇ ਦੁੱਗਣਾ ਲੰਬਾ ਕਰਨ ਨਾਲ ਉਸਦਾ ਪ੍ਰਤੀਰੋਧ ਅਤੇ ਪ੍ਰਤੀਰੋਧਕਤਾ ਦੁੱਗਣੇ ਹੋ ਜਾਂਦੇ ਹਨ। ਸੁਧਾਰ: ਪ੍ਰਤੀਰੋਧਕਤਾ (ρ) ਨਹੀਂ ਬਦਲਦੀ, ਜਦਕਿ ਪ੍ਰਤੀਰੋਧ ਚਾਰ ਗੁਣਾ (R\' = 4R) ਹੋ ਜਾਂਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਟ੍ਰਾਂਸਫਾਰਮਰ DC ਬੈਟਰੀ ਤੇ ਵੀ ਕੰਮ ਕਰ ਸਕਦਾ ਹੈ। ਸੁਧਾਰ: ਟ੍ਰਾਂਸਫਾਰਮਰ ਸਿਰਫ਼ ਪ੍ਰਤਿਆਵਰਤੀ ਧਾਰਾ (AC) ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਊਰਜਾ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੀ ਹੈ (V_s I_s ≤ V_p I_p)।'
            ],
            hi: [
                'भ्रांति: विद्युतचुंबकीय तरंग में E और B के बीच 90° का कलांतर होता है। सुधार: E और B आकाश में परस्पर लंबवत (90°) होते हैं, किंतु वे समान कला (Zero phase difference) में दोलन करते हैं।',
                'भ्रांति: ताँबे के तार को खींचकर दोगुना लंबा करने पर उसका प्रतिरोध और प्रतिरोधकता दोगुनी हो जाती है। सुधार: प्रतिरोधकता (ρ) अपरिवर्तित रहती है, जबकि प्रतिरोध चार गुना (R\' = 4R) हो जाता है।',
                'भ्रांति: ट्रांसफॉर्मर DC बैटरी पर भी कार्य कर सकता है। सुधार: ट्रांसफॉर्मर केवल प्रत्यावर्ती धारा (AC) पर कार्य करता है तथा ऊर्जा संरक्षित रहती है (V_s I_s ≤ V_p I_p)।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'A cylindrical wire of resistance 10 Ω is uniformly stretched so that its length becomes 3 times its original length. Find the new resistance and the change in its resistivity.',
                    pa: '10 Ω ਪ੍ਰਤੀਰੋਧ ਵਾਲੀ ਇੱਕ ਤਾਰ ਨੂੰ ਖਿੱਚ ਕੇ ਉਸਦੀ ਲੰਬਾਈ ਮੂਲ ਲੰਬਾਈ ਨਾਲੋਂ 3 ਗੁਣਾ ਕਰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ। ਤਾਰ ਦਾ ਨਵਾਂ ਪ੍ਰਤੀਰੋਧ ਅਤੇ ਉਸਦੀ ਪ੍ਰਤੀਰੋਧਕਤਾ ਵਿੱਚ ਪਰਿਵਰਤਨ ਪਤਾ ਕਰੋ।',
                    hi: '10 Ω प्रतिरोध वाले एक बेलनाकार तार को खींचकर उसकी लंबाई मूल लंबाई की 3 गुनी कर दी जाती है। तार का नया प्रतिरोध तथा उसकी प्रतिरोधकता में परिवर्तन ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Volume of wire V = A × L remains constant during stretching, so when L\' = 3L, new area A\' = A/3.',
                        'Step 2: New resistance R\' = ρ(L\'/A\') = n^2 R = 3^2 × 10 Ω = 9 × 10 Ω = 90 Ω.',
                        'Step 3: Resistivity ρ depends only on the nature of the material and temperature, so change in resistivity = 0.'
                    ],
                    pa: [
                        'Step 1: ਤਾਰ ਨੂੰ ਖਿੱਚਣ ਤੇ ਆਇਤਨ ਸਥਿਰ ਰਹਿੰਦਾ ਹੈ, ਇਸ ਲਈ L\' = 3L ਹੋਣ ਤੇ A\' = A/3।',
                        'Step 2: ਨਵਾਂ ਪ੍ਰਤੀਰੋਧ R\' = n^2 R = 3^2 × 10 Ω = 90 Ω।',
                        'Step 3: ਪ੍ਰਤੀਰੋਧਕਤਾ (ρ) ਪਦਾਰਥ ਦੀ ਪ੍ਰਕਿਰਤੀ ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ, ਇਸ ਲਈ ਪ੍ਰਤੀਰੋਧਕਤਾ ਵਿੱਚ ਕੋਈ ਬਦਲਾਅ ਨਹੀਂ ਹੁੰਦਾ (0)।'
                    ],
                    hi: [
                        'Step 1: तार को खींचने पर आयतन नियत रहता है, अतः L\' = 3L होने पर A\' = A/3।',
                        'Step 2: नया प्रतिरोध R\' = n^2 R = 3^2 × 10 Ω = 90 Ω।',
                        'Step 3: प्रतिरोधकता (ρ) केवल पदार्थ की प्रकृति व ताप पर निर्भर करती है, अतः प्रतिरोधकता में परिवर्तन = 0।'
                    ]
                },
                finalAnswer: {
                    en: 'R\' = 90 Ω; Resistivity remains unchanged',
                    pa: 'R\' = 90 Ω; ਪ੍ਰਤੀਰੋਧਕਤਾ ਵਿੱਚ ਕੋਈ ਬਦਲਾਅ ਨਹੀਂ',
                    hi: 'R\' = 90 Ω; प्रतिरोधकता अपरिवर्तित रहती है'
                }
            },
            {
                problem: {
                    en: 'A series LCR circuit with R = 20 Ω, L = 2 H, and C = 32 μF is connected to an AC source. Calculate the resonant angular frequency ω_0 and the Quality Factor (Q-factor) of the circuit.',
                    pa: 'ਇੱਕ ਲੜੀਵਾਰ LCR ਸਰਕਟ ਜਿਸ ਵਿੱਚ R = 20 Ω, L = 2 H ਅਤੇ C = 32 μF ਹੈ, ਦੀ ਅਨੁਨਾਦ ਕੋਣੀ ਆਵ੍ਰਿਤੀ ω_0 ਅਤੇ ਕੁਆਲਿਟੀ ਫੈਕਟਰ (Q-factor) ਪਤਾ ਕਰੋ।',
                    hi: 'एक श्रेणीबद्ध LCR परिपथ जिसमें R = 20 Ω, L = 2 H तथा C = 32 μF है, की अनुनाद कोणीय आवृत्ति ω_0 तथा विशेषता गुणांक (Q-factor) ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Resonant angular frequency ω_0 = 1 / √(LC) = 1 / √(2 × 32 × 10^-6) = 1 / (8 × 10^-3) = 125 rad/s.',
                        'Step 2: Quality factor Q = (ω_0 L) / R = (125 × 2) / 20 = 250 / 20 = 12.5.'
                    ],
                    pa: [
                        'Step 1: ਅਨੁਨਾਦ ਕੋਣੀ ਆਵ੍ਰਿਤੀ ω_0 = 1 / √(LC) = 1 / √(2 × 32 × 10^-6) = 1 / (8 × 10^-3) = 125 rad/s।',
                        'Step 2: Q-ਫੈਕਟਰ Q = (ω_0 L) / R = (125 × 2) / 20 = 12.5।'
                    ],
                    hi: [
                        'Step 1: अनुनाद कोणीय आवृत्ति ω_0 = 1 / √(LC) = 1 / √(2 × 32 × 10^-6) = 1 / (8 × 10^-3) = 125 rad/s।',
                        'Step 2: Q-गुणांक Q = (ω_0 L) / R = (125 × 2) / 20 = 12.5।'
                    ]
                },
                finalAnswer: {
                    en: 'ω_0 = 125 rad/s; Q-factor = 12.5',
                    pa: 'ω_0 = 125 rad/s; Q-ਫੈਕਟਰ = 12.5',
                    hi: 'ω_0 = 125 rad/s; Q-गुणांक = 12.5'
                }
            }
        ],
        flashcards: [
            {
                id: 'sci-em-fc-1',
                question: {
                    en: '[Level I] How many Joules are in 1 commercial unit of electrical energy (1 kWh)?',
                    pa: '[Level I] ਬਿਜਲਈ ਊਰਜਾ ਦੀ 1 ਵਪਾਰਕ ਯੂਨਿਟ (1 kWh) ਵਿੱਚ ਕਿੰਨੇ ਜੂਲ (Joules) ਹੁੰਦੇ ਹਨ?',
                    hi: '[Level I] विद्युत ऊर्जा की 1 व्यावसायिक यूनिट (1 kWh) में कितने जूल (Joules) होते हैं?'
                },
                answer: {
                    en: '1 kWh = 1000 W × 3600 s = 3.6 × 10^6 Joules (3.6 MJ).',
                    pa: '1 kWh = 1000 W × 3600 s = 3.6 × 10^6 ਜੂਲ (3.6 MJ)।',
                    hi: '1 kWh = 1000 W × 3600 s = 3.6 × 10^6 जूल (3.6 MJ)।'
                }
            },
            {
                id: 'sci-em-fc-2',
                question: {
                    en: '[Level H] Which fundamental conservation laws underlie Kirchhoff\'s Current Law (KCL), Kirchhoff\'s Voltage Law (KVL), and Lenz\'s Law?',
                    pa: '[Level H] ਕਿਰਚੌਫ ਦਾ ਧਾਰਾ ਨਿਯਮ (KCL), ਵੋਲਟੇਜ ਨਿਯਮ (KVL) ਅਤੇ ਲੈਂਜ਼ ਦਾ ਨਿਯਮ ਕਿਹੜੇ ਮੂਲ ਸੁਰੱਖਿਅਣ ਨਿਯਮਾਂ ਤੇ ਅਧਾਰਤ ਹਨ?',
                    hi: '[Level H] किरचॉफ का धारा नियम (KCL), वोल्टता नियम (KVL) और लेंज का नियम किन मूल संरक्षण नियमों पर आधारित हैं?'
                },
                answer: {
                    en: 'KCL is based on Conservation of Electric Charge; KVL and Lenz\'s Law are based on Conservation of Energy.',
                    pa: 'KCL ਚਾਰਜ ਦੇ ਸੁਰੱਖਿਅਣ ਨਿਯਮ ਤੇ; KVL ਅਤੇ ਲੈਂਜ਼ ਦਾ ਨਿਯਮ ਊਰਜਾ ਦੇ ਸੁਰੱਖਿਅਣ ਨਿਯਮ ਤੇ ਅਧਾਰਤ ਹਨ।',
                    hi: 'KCL आवेश संरक्षण नियम पर; KVL तथा लेंज का नियम ऊर्जा संरक्षण नियम पर आधारित हैं।'
                }
            },
            {
                id: 'sci-em-fc-3',
                question: {
                    en: '[Level H] How is a moving-coil galvanometer converted into (a) an Ammeter and (b) a Voltmeter?',
                    pa: '[Level H] ਮੂਵਿੰਗ-ਕੁਆਇਲ ਗੈਲਵੈਨੋਮੀਟਰ ਨੂੰ (a) ਐਮੀਟਰ ਅਤੇ (b) ਵੋਲਟਮੀਟਰ ਵਿੱਚ ਕਿਵੇਂ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ?',
                    hi: '[Level H] चल-कुंडली गैल्वेनोमीटर को (a) अमीटर और (b) वोल्टमीटर में कैसे बदला जाता है?'
                },
                answer: {
                    en: '(a) Ammeter: Connect a small shunt resistance S = I_g G / (I - I_g) in parallel. (b) Voltmeter: Connect a high resistance R = (V/I_g) - G in series.',
                    pa: '(a) ਐਮੀਟਰ: ਸਮਾਂਤਰ (Parallel) ਵਿੱਚ ਘੱਟ ਪ੍ਰਤੀਰੋਧ ਵਾਲਾ ਸ਼ੰਟ S ਲਗਾ ਕੇ। (b) ਵੋਲਟਮੀਟਰ: ਲੜੀ (Series) ਵਿੱਚ ਉੱਚ ਪ੍ਰਤੀਰੋਧ R ਲਗਾ ਕੇ।',
                    hi: '(a) अमीटर: समांतर क्रम में अल्प प्रतिरोध का शंट S जोड़कर। (b) वोल्टमीटर: श्रेणीक्रम में उच्च प्रतिरोध R जोड़कर।'
                }
            },
            {
                id: 'sci-em-fc-4',
                question: {
                    en: '[Level G] Which of Maxwell\'s four equations proves the non-existence of magnetic monopoles, and which includes displacement current?',
                    pa: '[Level G] ਮੈਕਸਵੈੱਲ ਦੀਆਂ ਚਾਰ ਸਮੀਕਰਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਚੁੰਬਕੀ ਮੋਨੋਪੋਲ ਦੀ ਅਣਹੋਂਦ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ ਅਤੇ ਕਿਸ ਵਿੱਚ ਵਿਸਥਾਪਨ ਧਾਰਾ ਸ਼ਾਮਲ ਹੈ?',
                    hi: '[Level G] मैक्सवेल के चारों समीकरणों में से कौन-सा चुंबकीय एकलध्रुव के अनस्तित्व को दर्शाता है और किसमें विस्थापन धारा शामिल है?'
                },
                answer: {
                    en: 'Gauss\'s Law for Magnetism (∇·B = 0) proves magnetic monopoles do not exist. The Ampere-Maxwell Law (∇×B = μ_0 J + μ_0 ε_0 ∂E/∂t) includes displacement current.',
                    pa: 'ਚੁੰਬਕਤਾ ਲਈ ਗੌਸ ਦਾ ਨਿਯਮ (∇·B = 0) ਚੁੰਬਕੀ ਮੋਨੋਪੋਲ ਦੀ ਅਣਹੋਂਦ ਦਰਸਾਉਂਦਾ ਹੈ। ਐਂਪੀਅਰ-ਮੈਕਸਵੈੱਲ ਨਿਯਮ (∇×B = μ_0 J + μ_0 ε_0 ∂E/∂t) ਵਿੱਚ ਵਿਸਥਾਪਨ ਧਾਰਾ ਸ਼ਾਮਲ ਹੈ।',
                    hi: 'चुंबकत्व के लिए गॉस का नियम (∇·B = 0) चुंबकीय एकलध्रुव का अनस्तित्व दर्शाता है। एम्पियर-मैक्सवेल नियम (∇×B = μ_0 J + μ_0 ε_0 ∂E/∂t) में विस्थापन धारा शामिल है।'
                }
            },
            {
                id: 'sci-em-fc-5',
                question: {
                    en: '[Level G] Define the Poynting vector S and state its SI unit.',
                    pa: '[Level G] ਪੁਆਇੰਟਿੰਗ ਵੈਕਟਰ S ਨੂੰ ਪਰਿਭਾਸ਼ਿਤ ਕਰੋ ਅਤੇ ਇਸਦੀ SI ਇਕਾਈ ਦੱਸੋ।',
                    hi: '[Level G] पॉइन्टिंग सदिश S को परिभाषित कीजिए और इसका SI मात्रक बताइए।'
                },
                answer: {
                    en: 'S = (1/μ_0)(E × B); it represents the directional electromagnetic energy flux (power per unit area) in SI units of W/m^2.',
                    pa: 'S = (1/μ_0)(E × B); ਇਹ ਇਕਾਈ ਖੇਤਰਫਲ ਵਿੱਚੋਂ ਲੰਘਣ ਵਾਲੀ ਬਿਜਲ-ਚੁੰਬਕੀ ਊਰਜਾ ਦਰ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ ਅਤੇ ਇਸਦੀ SI ਇਕਾਈ W/m^2 ਹੈ।',
                    hi: 'S = (1/μ_0)(E × B); यह प्रति एकांक क्षेत्रफल से प्रवाहित विद्युतचुंबकीय शक्ति को दर्शाता है और इसका SI मात्रक W/m^2 है।'
                }
            }
        ]
    },

    // =========================================================================
    // 5. MODERN PHYSICS, QUANTUM MECHANICS, ATOMIC/MOLECULAR & NUCLEAR/PARTICLE PHYSICS (LEVEL H -> G/P)
    // =========================================================================
    {
        topicId: 'sci-phy-modern-quantum-nuclear',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Level H (Class 11–12) -> Level G/P (Graduation / Postgraduate Flagged) mastery of Photoelectric Effect, Matter Waves, Bohr Atom, X-Rays, Nuclear Binding Energy & Radioactivity, Compton Effect, Schrödinger Equation, 1D Box & Oscillator, Atomic Spectroscopy (L-S/j-j, Zeeman, Raman), Nuclear Shell Model, and Particle Physics.'
        },
        bookRefs: [
            {
                title: 'NCERT Physics Class 12 (Part II) & Concepts of Modern Physics by Arthur Beiser',
                author: 'NCERT / Arthur Beiser',
                chapter: 'Dual Nature of Radiation & Matter, Atoms, Nuclei, Quantum Mechanics & Particle Physics',
                relevance: 'Complete coverage of photoelectric effect, Bohr model, radioactivity, Schrödinger equation, potential well, spectroscopy, and elementary particles.'
            }
        ],
        summary: {
            en: `### [Level H: Higher Secondary — Class 11–12 Photoelectric Effect, Bohr Atom, X-Rays & Nuclear Physics]
1. **Dual Nature of Radiation & Matter:**
   - **Photon Energy & Momentum:** $E = h\\nu = \\frac{hc}{\\lambda}$ ($hc \\approx 1240\\text{ eV}\\cdot\\text{nm} = 12400\\text{ eV}\\cdot\\text{\\AA}$), momentum $p = \\frac{E}{c} = \\frac{h}{\\lambda}$ (rest mass $m_0 = 0$).
   - **Einstein's Photoelectric Equation (1905, Nobel 1921):** **$K_{\\max} = eV_0 = h\\nu - \\phi_0 = h(\\nu - \\nu_0)$**.
     - **Intensity ($I$)** controls the **number of photons per second $\\implies$ saturation photocurrent**, but has **NO effect on $K_{\\max}$ or stopping potential $V_0$**.
     - **Frequency ($\\nu > \\nu_0$)** controls **$K_{\\max}$ and stopping potential $V_0$** (slope of $V_0$ vs $\\nu$ graph is $\\frac{h}{e}$, independent of metal!).
   - **de Broglie Matter Wavelength:** $\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2mqV}}$. For an **electron accelerated through $V$ volts**: **$\\lambda = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA} = \\frac{1.227}{\\sqrt{V}}\\text{ nm}$** (verified by **Davisson-Germer Experiment** at $V = 54\\text{ V}, \\theta = 50^\\circ, \\lambda = 1.67\\text{ \\AA}$).
2. **Rutherford Scattering, Bohr's Hydrogen Atom & X-Rays:**
   - **Bohr's Quantisation:** $L = mvr = \\frac{nh}{2\\pi} = n\\hbar$.
   - **Radius, Speed & Energy in $n^{\\text{th}}$ Orbit:**
     - Radius: **$r_n = 0.529\\frac{n^2}{Z}\\text{ \\AA} \\implies r_n \\propto \\frac{n^2}{Z}$** (ratio $1:4:9:\\dots$).
     - Speed: **$v_n = \\frac{c}{137}\\frac{Z}{n} \\approx 2.18\\times 10^6\\frac{Z}{n}\\text{ m/s} \\implies v_n \\propto \\frac{Z}{n}$**.
     - Energy: **$E_n = -\\frac{13.6 Z^2}{n^2}\\text{ eV}$** (Note: $E = -K = \\frac{U}{2} \\implies K = -E, U = 2E$).
   - **Rydberg Formula & Spectral Series ($R_H = 1.097\\times 10^7\\text{ m}^{-1}$):** $\\frac{1}{\\lambda} = R_H Z^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$.
     | Series | Lower State ($n_1$) | Upper State ($n_2$) | Spectral Region |
     |---|---|---|---|
     | **Lyman** | $n_1 = 1$ | $2, 3, 4, \\dots$ | **Ultraviolet (UV)** |
     | **Balmer** | $n_1 = 2$ | $3, 4, 5, \\dots$ | **Visible** ($H_\\alpha, H_\\beta, H_\\gamma$) |
     | **Paschen** | $n_1 = 3$ | $4, 5, 6, \\dots$ | **Near Infrared (IR)** |
     | **Brackett / Pfund** | $n_1 = 4$ / $n_1 = 5$ | $5, 6, \\dots$ / $6, 7, \\dots$ | **Middle / Far Infrared (IR)** |
   - **X-Rays:** Duane-Hunt minimum wavelength $\\lambda_{\\min} = \\frac{hc}{eV} = \\frac{12400}{V(\\text{in volts})}\\text{ \\AA}$; **Moseley's Law** for characteristic X-rays: **$\\sqrt{\\nu} = a(Z - b)$** (established **Atomic Number $Z$** as the fundamental periodic property).
3. **Nuclear Size, Binding Energy, Radioactivity, Fission & Fusion:**
   - **Nuclear Radius & Density:** $R = R_0 A^{1/3}$ ($R_0 \\approx 1.2\\text{ fm} = 1.2\\times 10^{-15}\\text{ m}$). Nuclear volume $V \\propto A$, so **Nuclear Density $\\rho_{\\text{nuc}} \\approx 2.3\\times 10^{17}\\text{ kg/m}^3$ is CONSTANT and independent of mass number $A$**!
   - **Mass Defect & Binding Energy:** $\\Delta m = [Zm_p + (A-Z)m_n] - M_{\\text{nuc}}$, $BE = \\Delta m \\times 931.5\\text{ MeV}$ ($1\\text{ u} = 931.5\\text{ MeV}/c^2$). Binding energy per nucleon peaks at **$^{56}_{26}\\text{Fe}$ ($\\approx 8.8\\text{ MeV/nucleon}$, most stable nucleus)**.
   - **Radioactive Decay Law:** $N(t) = N_0 e^{-\\lambda t} = N_0\\left(\\frac{1}{2}\\right)^{t/T_{1/2}}$; Half-life **$T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda} = 0.693\\tau$** (Mean life $\\tau = 1/\\lambda$). Activity $A = |dN/dt| = \\lambda N$ (Units: $1\\text{ Bq} = 1\\text{ decay/s}$; $1\\text{ Ci} = 3.7\\times 10^{10}\\text{ Bq}$).
   - **Soddy-Fajans Displacement Laws:** $\\alpha$-decay ($^4_2\\text{He}$): $Z \\to Z-2, A \\to A-4$; $\\beta^-$-decay ($n \\to p + e^- + \\bar{\\nu}_e$): $Z \\to Z+1, A$ unchanged; $\\beta^+$-decay ($p \\to n + e^+ + \\nu_e$): $Z \\to Z-1, A$ unchanged.
   - **Nuclear Fission ($^{235}_{92}\\text{U} + {}^1_0 n \\to \\approx 200\\text{ MeV}$):** **Moderator** (Heavy water $\\text{D}_2\\text{O}$, graphite, beryllium) slows fast neutrons to thermal neutrons; **Control Rods** (Cadmium $\\text{Cd}$ or Boron $\\text{B}$) absorb excess neutrons. **Nuclear Fusion:** Powers the Sun/stars via proton-proton cycle ($4{}^1_1\\text{H} \\to {}^4_2\\text{He} + 2e^+ + 2\\nu_e + 26.7\\text{ MeV}$).

---

### [Level G/P: Graduation & Postgraduate Flagged — Quantum Mechanics, Spectroscopy & Particle Physics]
1. **Compton Effect, Uncertainty Principle & Schrödinger Wave Equation:**
   - **Compton Scattering:** Wavelength shift of X-ray scattered at angle $\\theta$: **$\\Delta\\lambda = \\lambda' - \\lambda = \\frac{h}{m_0 c}(1 - \\cos\\theta)$**, where Compton wavelength $\\lambda_C = \\frac{h}{m_0 c} = 0.02426\\text{ \\AA}$ (maximum shift $\\Delta\\lambda_{\\max} = 2\\lambda_C = 0.0485\\text{ \\AA}$ at $\\theta = 180^\\circ$).
   - **Heisenberg Uncertainty Principle:** $\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}$, $\\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}$, $\\Delta L_z \\cdot \\Delta\\phi \\ge \\frac{\\hbar}{2}$.
   - **Schrödinger Equations & Operators:** Momentum operator $\\hat{p}_x = -i\\hbar\\frac{\\partial}{\\partial x}$, Hamiltonian $\\hat{H} = -\\frac{\\hbar^2}{2m}\\nabla^2 + V(r)$. Time-dependent: $i\\hbar\\frac{\\partial\\Psi}{\\partial t} = \\hat{H}\\Psi$; Time-independent: $\\nabla^2\\psi + \\frac{2m}{\\hbar^2}(E - V)\\psi = 0$. **Born's Interpretation:** $|\\psi|^2 d\\tau$ is probability, $\\int_{-\\infty}^{\\infty} |\\psi|^2 dx = 1$.
   - **1D Infinite Potential Well (Box of width $L$):** $\\psi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\left(\\frac{n\\pi x}{L}\\right)$ and **$E_n = \\frac{n^2 h^2}{8mL^2} = \\frac{n^2\\pi^2\\hbar^2}{2mL^2}$** ($n = 1, 2, 3, \\dots$; non-zero ground energy $E_1 = \\frac{h^2}{8mL^2}$).
   - **1D Quantum Harmonic Oscillator:** **$E_n = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega$** ($n = 0, 1, 2, \\dots$; **Zero-Point Energy $E_0 = \\frac{1}{2}\\hbar\\omega$**). **Quantum Tunnelling:** Explains Gamow's theory of $\\alpha$-decay and tunnel diodes.
2. **Atomic & Molecular Spectroscopy and Nuclear Shell Model:**
   - **Stern-Gerlach Experiment:** Ag atoms in an inhomogeneous magnetic field proved **space quantisation of electron spin**.
   - **L-S (Russell-Saunders) Coupling** (light atoms) vs **j-j Coupling** (heavy atoms). **Term Symbol:** $^{2S+1}L_J$ where $J = |L-S|$ to $L+S$. Electric dipole selection rules: $\\Delta L = \\pm 1, \\Delta S = 0, \\Delta J = 0, \\pm 1$ ($J=0 \\not\\to J=0$).
   - **Zeeman & Paschen-Back Effects:** **Normal Zeeman** (singlet $S=0$, 3 lines, classical Lorentz explanation); **Anomalous Zeeman** ($S \\ne 0$, Landé $g$-factor); **Paschen-Back Effect** (strong $B$ field decouples $\\vec{L}$ and $\\vec{S}$). **Stark Effect:** Splitting of spectral lines in an **electric field**.
   - **Raman Effect:** Inelastic scattering of light by molecules; **Stokes lines** ($\\nu' = \\nu_0 - \\Delta\\nu$, lower frequency, **higher intensity**) vs **Anti-Stokes lines** ($\\nu' = \\nu_0 + \\Delta\\nu$, higher frequency).
   - **Liquid Drop Model (Bohr-Wheeler, explains Fission)** vs **Nuclear Shell Model (Mayer & Jensen):** **Magic Numbers $2, 8, 20, 28, 50, 82, 126$** give extra stability ($^{4}_{2}\\text{He}, {}^{16}_{8}\\text{O}, {}^{40}_{20}\\text{Ca}, {}^{208}_{82}\\text{Pb}$ are doubly magic!).
3. **Elementary Particle Physics & Fundamental Interactions:**
   | Interaction | Relative Strength | Range | Exchange Gauge Boson (Spin) |
   |---|---|---|---|
   | **Strong Nuclear** | $1$ (Strongest) | $\\approx 10^{-15}\\text{ m}$ | **Gluons ($g$)** / Mesons ($\\pi$) (Spin $1$) |
   | **Electromagnetic** | $\\alpha \\approx \\frac{1}{137} \\approx 10^{-2}$ | Infinite ($\\infty$) | **Photon ($\\gamma$)** (Spin $1$, massless) |
   | **Weak Nuclear ($\\beta$-decay)** | $\\approx 10^{-6}$ | $\\approx 10^{-18}\\text{ m}$ | **$W^+, W^-, Z^0$ Bosons** (Spin $1$, massive) |
   | **Gravitational** | $\\approx 10^{-39}$ (Weakest) | Infinite ($\\infty$) | **Graviton** (Spin $2$, massless) |
   - **Leptons (Spin $1/2$, no strong force):** $e^-, \\mu^-, \\tau^-$ and $\\nu_e, \\nu_\\mu, \\nu_\\tau$.
   - **Hadrons (feel strong force, made of Quarks):** **Mesons ($q\\bar{q}$, bosons:** $\\pi, K, \\eta$) and **Baryons ($qqq$, fermions:** Proton $uud$, Neutron $udd$, Hyperons $\\Lambda, \\Sigma, \\Xi, \\Omega^-$). Up/Charm/Top quarks have charge $+\\frac{2}{3}e$; Down/Strange/Bottom have charge $-\\frac{1}{3}e$. **Gell-Mann–Nishijima Formula:** $Q = I_3 + \\frac{B + S}{2}$ (Strangeness $S$ is conserved in strong/EM interactions, but **$\\Delta S = \\pm 1$ in weak decays**).`,
            pa: `### [Level H: Higher Secondary — Class 11–12 ਪ੍ਰਕਾਸ਼-ਬਿਜਲਈ ਪ੍ਰਭਾਵ, ਬੋਹਰ ਮਾਡਲ ਅਤੇ ਨਿਊਕਲੀਅਰ ਭੌਤਿਕ ਵਿਗਿਆਨ]
1. **ਪ੍ਰਕਾਸ਼-ਬਿਜਲਈ ਪ੍ਰਭਾਵ ਅਤੇ ਡੀ-ਬ੍ਰੋਗਲੀ ਤਰੰਗਾਂ:**
   - **ਆਈਨਸਟਾਈਨ ਦੀ ਸਮੀਕਰਨ:** $K_{\\max} = eV_0 = h\\nu - \\phi_0 = h(\\nu - \\nu_0)$। **ਤੀਬਰਤਾ ($I$)** ਸਿਰਫ਼ ਪ੍ਰਕਾਸ਼-ਧਾਰਾ ਨੂੰ ਵਧਾਉਂਦੀ ਹੈ, ਜਦਕਿ **ਆਵ੍ਰਿਤੀ ($\\nu$)** ਅਧਿਕਤਮ ਗਤਿਜ ਊਰਜਾ ($K_{\\max}$) ਅਤੇ ਨਿਰੋਧੀ ਵਿਭਵ ($V_0$) ਨੂੰ ਨਿਰਧਾਰਤ ਕਰਦੀ ਹੈ।
   - **ਡੀ-ਬ੍ਰੋਗਲੀ ਤਰੰਗ ਲੰਬਾਈ:** $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mK}}$; ਇਲੈਕਟ੍ਰਾਨ ਲਈ $\\lambda = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$ (ਡੇਵਿਸਨ-ਜਰਮਰ ਪ੍ਰਯੋਗ ਦੁਆਰਾ ਪੁਸ਼ਟੀ)।
2. **ਬੋਹਰ ਦਾ ਪ੍ਰਮਾਣੂ ਮਾਡਲ ਅਤੇ ਐਕਸ-ਕਿਰਨਾਂ:**
   - $L = \\frac{nh}{2\\pi}$, ਅਰਧ-ਵਿਆਸ $r_n = 0.529\\frac{n^2}{Z}\\text{ \\AA}$, ਚਾਲ $v_n \\propto \\frac{Z}{n}$, ਅਤੇ ਊਰਜਾ **$E_n = -\\frac{13.6 Z^2}{n^2}\\text{ eV}$** ($K = -E, U = 2E$)।
   - **ਹਾਈਡ੍ਰੋਜਨ ਸਪੈਕਟ੍ਰਮ:** ਲਾਇਮਨ (UV), ਬਾਮਰ (ਦ੍ਰਿਸ਼ ਪ੍ਰਕਾਸ਼), ਪਾਸ਼ਚਨ, ਬ੍ਰੈਕਟ, ਫੰਡ (IR)। **ਮੋਜ਼ਲੇ ਦਾ ਨਿਯਮ:** $\\sqrt{\\nu} = a(Z - b)$।
3. **ਨਿਊਕਲੀਅਰ ਭੌਤਿਕ ਵਿਗਿਆਨ ਅਤੇ ਰੇਡੀਓਐਕਟੀਵਿਟੀ:**
   - **ਨਿਊਕਲੀਅਰ ਅਰਧ-ਵਿਆਸ:** $R = R_0 A^{1/3}$ ($R_0 = 1.2\\text{ fm}$); **ਨਿਊਕਲੀਅਰ ਘਣਤਾ ($\\approx 2.3\\times 10^{17}\\text{ kg/m}^3$) ਪੁੰਜ ਸੰਖਿਆ $A$ ਤੋਂ ਸੁਤੰਤਰ (ਸਥਿਰ) ਹੁੰਦੀ ਹੈ**!
   - **ਬੰਧਨ ਊਰਜਾ:** $1\\text{ u} = 931.5\\text{ MeV}$; $^{56}\\text{Fe}$ ਦੀ ਪ੍ਰਤੀ ਨਿਊਕਲੀਔਨ ਬੰਧਨ ਊਰਜਾ ਸਭ ਤੋਂ ਵੱਧ ($8.8\\text{ MeV}$) ਹੁੰਦੀ ਹੈ।
   - **ਅਰਧ-ਆਯੂ ਕਾਲ:** $T_{1/2} = \\frac{0.693}{\\lambda} = 0.693\\tau$ ਅਤੇ $N = N_0 (1/2)^{t/T_{1/2}}$।
   - **ਨਿਊਕਲੀਅਰ ਰਿਐਕਟਰ:** **ਮੰਦਕ (Moderator:** ਭਾਰੀ ਪਾਣੀ $\\text{D}_2\\text{O}$, ਗ੍ਰੇਫਾਈਟ) ਨਿਊਟ੍ਰੋਨਾਂ ਨੂੰ ਹੌਲੀ ਕਰਦਾ ਹੈ; **ਕੰਟਰੋਲ ਰਾਡਾਂ (Cd, B)** ਨਿਊਟ੍ਰੋਨਾਂ ਨੂੰ ਸੋਖਦੀਆਂ ਹਨ।

---

### [Level G/P: Graduation / PG — ਕੁਆਂਟਮ ਮਕੈਨਿਕਸ, ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ ਅਤੇ ਕਣ ਭੌਤਿਕ ਵਿਗਿਆਨ]
1. **ਕੌਂਪਟਨ ਪ੍ਰਭਾਵ, ਅਨਿਸ਼ਚਿਤਤਾ ਸਿਧਾਂਤ ਅਤੇ ਸ਼੍ਰੋਡਿੰਜਰ ਸਮੀਕਰਨ:**
   - **ਕੌਂਪਟਨ ਵਿਸਥਾਪਨ:** $\\Delta\\lambda = \\frac{h}{m_0 c}(1 - \\cos\\theta)$ ($\\lambda_C = 0.0243\\text{ \\AA}$)। **ਹਾਈਜ਼ਨਬਰਗ ਸਿਧਾਂਤ:** $\\Delta x \\cdot \\Delta p_x \\ge \\hbar/2$।
   - **1D ਬਾਕਸ ਵਿੱਚ ਕਣ:** $E_n = \\frac{n^2 h^2}{8mL^2}$ ($n = 1, 2, 3, \\dots$); **1D ਹਾਰਮੋਨਿਕ ਔਸੀਲੇਟਰ:** $E_n = (n + \\frac{1}{2})\\hbar\\omega$ (**ਜ਼ੀਰੋ-ਪੁਆਇੰਟ ਊਰਜਾ $= \\frac{1}{2}\\hbar\\omega$**)।
2. **ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ, ਸ਼ੈੱਲ ਮਾਡਲ ਅਤੇ ਮੂਲ ਕਣ (Elementary Particles):**
   - **ਟਰਮ ਚਿੰਨ੍ਹ:** $^{2S+1}L_J$; **ਜ਼ੀਮਨ ਪ੍ਰਭਾਵ** (ਚੁੰਬਕੀ ਖੇਤਰ ਵਿੱਚ ਸਪੈਕਟ੍ਰਮ ਰੇਖਾਵਾਂ ਦਾ ਵੰਡਿਆ ਜਾਣਾ) ਬਨਾਮ **ਸਟਾਰਕ ਪ੍ਰਭਾਵ** (ਬਿਜਲਈ ਖੇਤਰ ਵਿੱਚ)। **ਰਮਨ ਪ੍ਰਭਾਵ:** ਸਟੋਕਸ ($\nu < \nu_0$) ਅਤੇ ਐਂਟੀ-ਸਟੋਕਸ ($\nu > \nu_0$) ਰੇਖਾਵਾਂ।
   - **ਨਿਊਕਲੀਅਰ ਸ਼ੈੱਲ ਮਾਡਲ ਮੈਜਿਕ ਨੰਬਰ:** **$2, 8, 20, 28, 50, 82, 126$**।
   - **ਮੂਲ ਕਣ:** **ਲੈਪਟੋਨ** ($e^-, \\mu^-, \\tau^-, \\nu$) ਅਤੇ **ਹੈਡਰੋਨ** — **ਮੇਸੋਨ** ($q\\bar{q}$, ਬੋਸੋਨ: $\\pi, K$) ਤੇ **ਬੈਰੀਔਨ** ($qqq$, ਫਰਮੀਔਨ: ਪ੍ਰੋਟੋਨ $uud$, ਨਿਊਟ੍ਰੋਨ $udd$)।`,
            hi: `### [Level H: Higher Secondary — Class 11–12 प्रकाश-विद्युत प्रभाव, बोहर मॉडल एवं नाभिकीय भौतिकी]
1. **प्रकाश-विद्युत प्रभाव एवं डी-ब्रोग्ली तरंगें:**
   - **आइंस्टीन का समीकरण:** $K_{\\max} = eV_0 = h\\nu - \\phi_0 = h(\\nu - \\nu_0)$। **तीव्रता ($I$)** केवल प्रकाश-धारा को बढ़ाती है, जबकि **आवृत्ति ($\\nu$)** अधिकतम गतिज ऊर्जा ($K_{\\max}$) और निरोधी विभव ($V_0$) को निर्धारित करती है।
   - **डी-ब्रोग्ली तरंगदैर्घ्य:** $\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2mK}}$; इलेक्ट्रॉन हेतु $\\lambda = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$ (डेविसन-जर्मर प्रयोग द्वारा सत्यापित)।
2. **बोहर का परमाणु मॉडल एवं एक्स-किरणें:**
   - $L = \\frac{nh}{2\\pi}$, त्रिज्या $r_n = 0.529\\frac{n^2}{Z}\\text{ \\AA}$, चाल $v_n \\propto \\frac{Z}{n}$, तथा ऊर्जा **$E_n = -\\frac{13.6 Z^2}{n^2}\\text{ eV}$** ($K = -E, U = 2E$)।
   - **हाइड्रोजन स्पेक्ट्रम:** लाइमन (UV), बामर (दृश्य प्रकाश), पाश्चन, ब्रैकेट, फंड (IR)। **मोज़ले का नियम:** $\\sqrt{\\nu} = a(Z - b)$।
3. **नाभिकीय भौतिकी एवं रेडियोएक्टिवता:**
   - **नाभिकीय त्रिज्या:** $R = R_0 A^{1/3}$ ($R_0 = 1.2\\text{ fm}$); **नाभिकीय घनत्व ($\\approx 2.3\\times 10^{17}\\text{ kg/m}^3$) द्रव्यमान संख्या $A$ से स्वतंत्र (नियत) होता है**!
   - **बंधन ऊर्जा:** $1\\text{ u} = 931.5\\text{ MeV}$; $^{56}\\text{Fe}$ की प्रति न्यूक्लिऑन बंधन ऊर्जा सर्वाधिक ($8.8\\text{ MeV}$) होती है।
   - **अर्ध-आयु काल:** $T_{1/2} = \\frac{0.693}{\\lambda} = 0.693\\tau$ तथा $N = N_0 (1/2)^{t/T_{1/2}}$।
   - **नाभिकीय रिएक्टर:** **मंदक (Moderator:** भारी जल $\\text{D}_2\\text{O}$, ग्रेफाइट) न्यूट्रॉनों को धीमा करता है; **नियंत्रक छड़ें (Cd, B)** न्यूट्रॉनों को अवशोषित करती हैं।

---

### [Level G/P: Graduation / PG — क्वांटम यांत्रिकी, स्पेक्ट्रोस्कोपी एवं कण भौतिकी]
1. **कॉम्पटन प्रभाव, अनिश्चितता सिद्धांत एवं श्रोडिंगर समीकरण:**
   - **कॉम्पटन विस्थापन:** $\\Delta\\lambda = \\frac{h}{m_0 c}(1 - \\cos\\theta)$ ($\\lambda_C = 0.0243\\text{ \\AA}$)। **हाइज़ेनबर्ग सिद्धांत:** $\\Delta x \\cdot \\Delta p_x \\ge \\hbar/2$।
   - **1D बॉक्स में कण:** $E_n = \\frac{n^2 h^2}{8mL^2}$ ($n = 1, 2, 3, \\dots$); **1D सरल आवर्ती दोलक:** $E_n = (n + \\frac{1}{2})\\hbar\\omega$ (**शून्य-बिंदु ऊर्जा $= \\frac{1}{2}\\hbar\\omega$**)।
2. **स्पेक्ट्रोस्कोपी, कोश मॉडल एवं मूल कण (Elementary Particles):**
   - **पद प्रतीक (Term Symbol):** $^{2S+1}L_J$; **ज़ीमान प्रभाव** (चुंबकीय क्षेत्र में स्पेक्ट्रमी रेखाओं का विपाटन) बनाम **स्टार्क प्रभाव** (विद्युत क्षेत्र में)। **रमन प्रभाव:** स्टोक्स ($\nu < \nu_0$) एवं एंटी-स्टोक्स ($\nu > \nu_0$) रेखाएँ।
   - **नाभिकीय कोश मॉडल मैजिक संख्याएँ:** **$2, 8, 20, 28, 50, 82, 126$**।
   - **मूल कण:** **लेप्टॉन** ($e^-, \\mu^-, \\tau^-, \\nu$) एवं **हैड्रॉन** — **मेसॉन** ($q\\bar{q}$, बोसॉन: $\\pi, K$) तथा **बैरिऑन** ($qqq$, फर्मिऑन: प्रोटॉन $uud$, न्यूट्रॉन $udd$)।`
        },
        keyNotes: {
            en: [
                'Einstein Photoelectric Equation: K_max = eV_0 = hν - φ_0; light intensity controls photocurrent, while frequency ν controls K_max and stopping potential V_0.',
                'Bohr Atom Scaling: r_n ∝ n^2/Z, v_n ∝ Z/n, E_n = -13.6 Z^2/n^2 eV (with K = -E and U = 2E); Lyman is in UV and Balmer is in the Visible region.',
                'Nuclear radius R = R_0 A^(1/3) (R_0 ≈ 1.2 fm), so nuclear density (~2.3 × 10^17 kg/m^3) is independent of A; 56Fe has the highest BE/nucleon (~8.8 MeV).',
                'Compton Shift: Δλ = (h/m_0 c)(1 - cos θ) with λ_C = 0.0243 Å; Heisenberg Uncertainty: Δx·Δp_x ≥ ħ/2 and ΔE·Δt ≥ ħ/2.',
                '1D Potential Box energy E_n = n^2 h^2 / (8mL^2) (E_n ∝ n^2); 1D Harmonic Oscillator energy E_n = (n + 1/2)ħω with zero-point energy (1/2)ħω.',
                'Nuclear Magic Numbers are 2, 8, 20, 28, 50, 82, 126; Proton quark composition is uud (+e) and Neutron is udd (0).'
            ],
            pa: [
                'ਆਈਨਸਟਾਈਨ ਸਮੀਕਰਨ: K_max = eV_0 = hν - φ_0; ਪ੍ਰਕਾਸ਼ ਦੀ ਤੀਬਰਤਾ ਫੋਟੋ-ਕਰੰਟ ਨੂੰ ਅਤੇ ਆਵ੍ਰਿਤੀ ν ਗਤਿਜ ਊਰਜਾ (K_max) ਤੇ ਨਿਰੋਧੀ ਵਿਭਵ (V_0) ਨੂੰ ਕੰਟਰੋਲ ਕਰਦੀ ਹੈ।',
                'ਬੋਹਰ ਮਾਡਲ: r_n ∝ n^2/Z, v_n ∝ Z/n, E_n = -13.6 Z^2/n^2 eV; ਲਾਇਮਨ ਲੜੀ UV ਵਿੱਚ ਅਤੇ ਬਾਮਰ ਲੜੀ ਦ੍ਰਿਸ਼ ਪ੍ਰਕਾਸ਼ ਵਿੱਚ ਹੁੰਦੀ ਹੈ।',
                'ਨਿਊਕਲੀਅਰ ਅਰਧ-ਵਿਆਸ R = R_0 A^(1/3), ਇਸ ਲਈ ਨਿਊਕਲੀਅਰ ਘਣਤਾ (~2.3 × 10^17 kg/m^3) A ਤੋਂ ਸੁਤੰਤਰ ਹੁੰਦੀ ਹੈ; 56Fe ਦੀ ਪ੍ਰਤੀ ਨਿਊਕਲੀਔਨ ਬੰਧਨ ਊਰਜਾ ਸਭ ਤੋਂ ਵੱਧ (~8.8 MeV) ਹੈ।',
                'ਕੌਂਪਟਨ ਵਿਸਥਾਪਨ: Δλ = (h/m_0 c)(1 - cos θ); ਹਾਈਜ਼ਨਬਰਗ ਦਾ ਅਨਿਸ਼ਚਿਤਤਾ ਸਿਧਾਂਤ: Δx·Δp_x ≥ ħ/2।',
                '1D ਬਾਕਸ ਵਿੱਚ ਊਰਜਾ E_n = n^2 h^2 / (8mL^2); 1D ਹਾਰਮੋਨਿਕ ਔਸੀਲੇਟਰ ਊਰਜਾ E_n = (n + 1/2)ħω (ਜ਼ੀਰੋ-ਪੁਆਇੰਟ ਊਰਜਾ = (1/2)ħω)।',
                'ਨਿਊਕਲੀਅਰ ਮੈਜਿਕ ਨੰਬਰ: 2, 8, 20, 28, 50, 82, 126; ਪ੍ਰੋਟੋਨ ਦੀ ਕੁਆਰਕ ਬਣਤਰ uud ਅਤੇ ਨਿਊਟ੍ਰੋਨ ਦੀ udd ਹੁੰਦੀ ਹੈ।'
            ],
            hi: [
                'आइंस्टीन समीकरण: K_max = eV_0 = hν - φ_0; प्रकाश की तीव्रता फोटो-धारा को तथा आवृत्ति ν अधिकतम गतिज ऊर्जा (K_max) व निरोधी विभव (V_0) को नियंत्रित करती है।',
                'बोहर मॉडल: r_n ∝ n^2/Z, v_n ∝ Z/n, E_n = -13.6 Z^2/n^2 eV; लाइमन श्रेणी UV में तथा बामर श्रेणी दृश्य प्रकाश क्षेत्र में होती है।',
                'नाभिकीय त्रिज्या R = R_0 A^(1/3), अतः नाभिकीय घनत्व (~2.3 × 10^17 kg/m^3) A से स्वतंत्र होता है; 56Fe की प्रति न्यूक्लिऑन बंधन ऊर्जा सर्वाधिक (~8.8 MeV) है।',
                'कॉम्पटन विस्थापन: Δλ = (h/m_0 c)(1 - cos θ); हाइज़ेनबर्ग अनिश्चितता सिद्धांत: Δx·Δp_x ≥ ħ/2।',
                '1D बॉक्स में ऊर्जा E_n = n^2 h^2 / (8mL^2); 1D आवर्ती दोलक ऊर्जा E_n = (n + 1/2)ħω (शून्य-बिंदु ऊर्जा = (1/2)ħω)।',
                'नाभिकीय मैजिक संख्याएँ: 2, 8, 20, 28, 50, 82, 126; प्रोटॉन की क्वार्क संरचना uud तथा न्यूट्रॉन की udd होती है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Same Kinetic Energy de Broglie Rule: Since λ = h/√(2mK), for particles of the SAME kinetic energy K, heavier particles have SHORTER wavelength: λ_e > λ_p > λ_d > λ_α.',
                'Number of Spectral Lines emitted when electrons jump from n-th state to ground state (n = 1): N = n(n - 1)/2.',
                'Bohr Energy Relations: Total energy E = -13.6/n^2 eV => Kinetic energy K = -E = +13.6/n^2 eV and Potential energy U = 2E = -27.2/n^2 eV.',
                'Spectroscopic Notation L values: L = 0 (S), 1 (P), 2 (D), 3 (F), 4 (G); Multiplicity = 2S + 1; Total angular momentum J = |L - S| to (L + S).',
                'Gauge Bosons of 4 Forces: Strong -> Gluon (g); Electromagnetic -> Photon (γ); Weak -> W+, W-, Z0; Gravitational -> Graviton.'
            ],
            pa: [
                'ਸਮਾਨ ਗਤਿਜ ਊਰਜਾ (K) ਲਈ ਡੀ-ਬ੍ਰੋਗਲੀ ਨਿਯਮ: λ = h/√(2mK), ਇਸ ਲਈ ਭਾਰੇ ਕਣ ਦੀ ਤਰੰਗ ਲੰਬਾਈ ਛੋਟੀ ਹੁੰਦੀ ਹੈ: λ_e > λ_p > λ_d > λ_α।',
                'n-ਵੀਂ ਅਵਸਥਾ ਤੋਂ ਮੂਲ ਅਵਸਥਾ (n = 1) ਵਿੱਚ ਆਉਣ ਤੇ ਸਪੈਕਟ੍ਰਮ ਰੇਖਾਵਾਂ ਦੀ ਗਿਣਤੀ: N = n(n - 1)/2।',
                'ਬੋਹਰ ਊਰਜਾ ਸਬੰਧ: ਕੁੱਲ ਊਰਜਾ E = -K = U/2 (ਅਰਥਾਤ K = -E ਅਤੇ U = 2E)।',
                'ਸਪੈਕਟ੍ਰੋਸਕੋਪਿਕ ਚਿੰਨ੍ਹ: L = 0 (S), 1 (P), 2 (D), 3 (F); ਬਹੁਲਤਾ = 2S + 1; J = |L - S| ਤੋਂ L + S ਤੱਕ।',
                '4 ਮੂਲ ਬਲਾਂ ਦੇ ਗੇਜ ਬੋਸੋਨ: ਤੀਬਰ ਨਿਊਕਲੀਅਰ -> ਗਲੂਔਨ; ਬਿਜਲ-ਚੁੰਬਕੀ -> ਫੋਟੋਨ; ਕਮਜ਼ੋਰ ਨਿਊਕਲੀਅਰ -> W+, W-, Z0; ਗੁਰੂਤਾ -> ਗ੍ਰੈਵੀਟੋਨ।'
            ],
            hi: [
                'समान गतिज ऊर्जा (K) हेतु डी-ब्रोग्ली नियम: λ = h/√(2mK), अतः भारी कण की तरंगदैर्घ्य छोटी होती है: λ_e > λ_p > λ_d > λ_α।',
                'n-वीं अवस्था से मूल अवस्था (n = 1) में संक्रमण पर स्पेक्ट्रमी रेखाओं की संख्या: N = n(n - 1)/2।',
                'बोहर ऊर्जा संबंध: कुल ऊर्जा E = -K = U/2 (अर्थात् K = -E तथा U = 2E)।',
                'स्पेक्ट्रोस्कोपिक संकेत: L = 0 (S), 1 (P), 2 (D), 3 (F); बहुलता = 2S + 1; J = |L - S| से L + S तक।',
                '4 मूल बलों के गेज बोसॉन: प्रबल नाभिकीय -> ग्लूऑन; विद्युतचुंबकीय -> फोटॉन; दुर्बल नाभिकीय -> W+, W-, Z0; गुरुत्वीय -> ग्रैविटॉन।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Doubling the intensity of incident light in a photoelectric cell doubles the stopping potential V_0 and maximum kinetic energy K_max. Correction: Doubling intensity only doubles the number of photons and saturation photocurrent; V_0 and K_max depend strictly on frequency ν and work function φ_0.',
                'Misconception: Heavy nuclei like Uranium-238 have a much higher nuclear mass density than light nuclei like Carbon-12. Correction: Because nuclear volume V = (4/3)πR_0^3 A is directly proportional to mass number A, nuclear density (~2.3 × 10^17 kg/m^3) is constant and independent of A.',
                'Misconception: In β^- decay, an orbital electron from the K-shell is ejected from the atom. Correction: β^- decay is a weak nuclear transformation inside the nucleus where a neutron converts into a proton, an electron, and an antineutrino (n -> p + e^- + ν_e-bar).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਪ੍ਰਕਾਸ਼ ਦੀ ਤੀਬਰਤਾ ਦੁੱਗਣੀ ਕਰਨ ਨਾਲ ਨਿਰੋਧੀ ਵਿਭਵ (V_0) ਅਤੇ ਅਧਿਕਤਮ ਗਤਿਜ ਊਰਜਾ (K_max) ਦੁੱਗਣੀ ਹੋ ਜਾਂਦੀ ਹੈ। ਸੁਧਾਰ: ਤੀਬਰਤਾ ਦੁੱਗਣੀ ਕਰਨ ਨਾਲ ਸਿਰਫ਼ ਫੋਟੋ-ਕਰੰਟ ਦੁੱਗਣਾ ਹੁੰਦਾ ਹੈ; V_0 ਅਤੇ K_max ਸਿਰਫ਼ ਆਵ੍ਰਿਤੀ (ν) ਤੇ ਨਿਰਭਰ ਕਰਦੇ ਹਨ।',
                'ਭੁਲੇਖਾ: ਯੂਰੇਨੀਅਮ-238 ਦੇ ਨਾਭਿਕ ਦੀ ਘਣਤਾ ਕਾਰਬਨ-12 ਨਾਲੋਂ ਬਹੁਤ ਜ਼ਿਆਦਾ ਹੁੰਦੀ ਹੈ। ਸੁਧਾਰ: ਨਾਭਿਕ ਦਾ ਆਇਤਨ V ∝ A ਹੋਣ ਕਾਰਨ ਸਾਰੇ ਨਾਭਿਕਾਂ ਦੀ ਘਣਤਾ (~2.3 × 10^17 kg/m^3) ਇੱਕੋ ਜਿਹੀ (ਸਥਿਰ) ਰਹਿੰਦੀ ਹੈ।',
                'ਭੁਲੇਖਾ: β^- ਖੈ (decay) ਵਿੱਚ ਪ੍ਰਮਾਣੂ ਦੇ ਬਾਹਰੀ ਪੰਧ ਵਿੱਚੋਂ ਇਲੈਕਟ੍ਰਾਨ ਨਿਕਲਦਾ ਹੈ। ਸੁਧਾਰ: β^- ਖੈ ਨਾਭਿਕ ਦੇ ਅੰਦਰ ਹੋਣ ਵਾਲੀ ਪ੍ਰਕਿਰਿਆ ਹੈ ਜਿਸ ਵਿੱਚ ਨਿਊਟ੍ਰੋਨ ਪ੍ਰੋਟੋਨ ਵਿੱਚ ਬਦਲਦਾ ਹੈ (n -> p + e^- + ν_e-bar)।'
            ],
            hi: [
                'भ्रांति: आपतित प्रकाश की तीव्रता दोगुनी करने पर निरोधी विभव (V_0) और अधिकतम गतिज ऊर्जा (K_max) दोगुनी हो जाती है। सुधार: तीव्रता दोगुनी करने से केवल संतृप्त प्रकाश-धारा दोगुनी होती है; V_0 और K_max केवल आवृत्ति (ν) पर निर्भर करते हैं।',
                'भ्रांति: यूरेनियम-238 नाभिक का घनत्व कार्बन-12 नाभिक से बहुत अधिक होता है। सुधार: नाभिकीय आयतन V ∝ A होने के कारण सभी नाभिकों का घनत्व (~2.3 × 10^17 kg/m^3) नियत रहता है।',
                'भ्रांति: β^- क्षय में परमाणु की बाहरी कक्षा का इलेक्ट्रॉन बाहर निकलता है। सुधार: β^- क्षय नाभिक के भीतर दुर्बल अन्योन्यक्रिया द्वारा न्यूट्रॉन के प्रोटॉन में बदलने से होता है (n -> p + e^- + ν_e-bar)।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'A radioactive isotope has a half-life of 15 minutes. How much time will it take for 87.5% of the original sample to decay?',
                    pa: 'ਇੱਕ ਰੇਡੀਓਐਕਟਿਵ ਸਮਸਥਾਨਕ ਦੀ ਅਰਧ-ਆਯੂ (Half-life) 15 ਮਿੰਟ ਹੈ। ਮੂਲ ਨਮੂਨੇ ਦਾ 87.5% ਹਿੱਸਾ ਖੈ (decay) ਹੋਣ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗੇਗਾ?',
                    hi: 'एक रेडियोएक्टिव समस्थानिक की अर्ध-आयु 15 मिनट है। मूल नमूने का 87.5% भाग क्षय होने में कितना समय लगेगा?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: If 87.5% of the sample has decayed, the remaining undecayed fraction is N/N_0 = 100% - 87.5% = 12.5% = 1/8.',
                        'Step 2: Using N/N_0 = (1/2)^n => 1/8 = (1/2)^3 => number of half-lives n = 3.',
                        'Step 3: Total time elapsed t = n × T_1/2 = 3 × 15 minutes = 45 minutes.'
                    ],
                    pa: [
                        'Step 1: 87.5% ਖੈ ਹੋਣ ਤੋਂ ਬਾਅਦ ਬਾਕੀ ਬਚਿਆ ਹਿੱਸਾ N/N_0 = 100% - 87.5% = 12.5% = 1/8।',
                        'Step 2: N/N_0 = (1/2)^n => 1/8 = (1/2)^3 => ਅਰਧ-ਆਯੂਆਂ ਦੀ ਗਿਣਤੀ n = 3।',
                        'Step 3: ਕੁੱਲ ਸਮਾਂ t = n × T_1/2 = 3 × 15 ਮਿੰਟ = 45 ਮਿੰਟ।'
                    ],
                    hi: [
                        'Step 1: 87.5% क्षय होने के पश्चात शेष अविघटित भाग N/N_0 = 100% - 87.5% = 12.5% = 1/8।',
                        'Step 2: N/N_0 = (1/2)^n => 1/8 = (1/2)^3 => अर्ध-आयुओं की संख्या n = 3।',
                        'Step 3: कुल समय t = n × T_1/2 = 3 × 15 मिनट = 45 मिनट।'
                    ]
                },
                finalAnswer: {
                    en: '45 minutes (3 half-lives)',
                    pa: '45 ਮਿੰਟ (3 ਅਰਧ-ਆਯੂ ਕਾਲ)',
                    hi: '45 मिनट (3 अर्ध-आयु काल)'
                }
            },
            {
                problem: {
                    en: 'An electron is confined in a 1D infinite potential box of width L. If its ground-state energy (n = 1) is 2.5 eV, find the energy of its second excited state and the energy required to excite it from the ground state to the second excited state.',
                    pa: 'ਇੱਕ ਇਲੈਕਟ੍ਰਾਨ L ਚੌੜਾਈ ਦੇ 1D ਅਨੰਤ ਵਿਭਵ ਬਾਕਸ ਵਿੱਚ ਬੰਦ ਹੈ। ਜੇਕਰ ਇਸਦੀ ਮੂਲ ਅਵਸਥਾ (n = 1) ਦੀ ਊਰਜਾ 2.5 eV ਹੈ, ਤਾਂ ਇਸਦੀ ਦੂਜੀ ਉਤੇਜਿਤ ਅਵਸਥਾ ਦੀ ਊਰਜਾ ਅਤੇ ਮੂਲ ਅਵਸਥਾ ਤੋਂ ਉੱਥੇ ਤੱਕ ਜਾਣ ਲਈ ਲੋੜੀਂਦੀ ਊਰਜਾ ਪਤਾ ਕਰੋ।',
                    hi: 'एक इलेक्ट्रॉन L चौड़ाई के 1D अनंत विभव बॉक्स में परिबद्ध है। यदि इसकी मूल अवस्था (n = 1) की ऊर्जा 2.5 eV है, तो इसकी द्वितीय उत्तेजित अवस्था की ऊर्जा तथा मूल अवस्था से वहाँ तक उत्तेजित करने हेतु आवश्यक ऊर्जा ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: For a 1D infinite potential well, E_n = n^2 E_1 where n = 1 is ground state, n = 2 is first excited state, and n = 3 is second excited state.',
                        'Step 2: Energy of second excited state (n = 3): E_3 = 3^2 × E_1 = 9 × 2.5 eV = 22.5 eV.',
                        'Step 3: Excitation energy required ΔE = E_3 - E_1 = 22.5 eV - 2.5 eV = 20.0 eV.'
                    ],
                    pa: [
                        'Step 1: 1D ਬਾਕਸ ਲਈ E_n = n^2 E_1; ਮੂਲ ਅਵਸਥਾ n = 1, ਪਹਿਲੀ ਉਤੇਜਿਤ ਅਵਸਥਾ n = 2, ਅਤੇ ਦੂਜੀ ਉਤੇਜਿਤ ਅਵਸਥਾ n = 3 ਹੁੰਦੀ ਹੈ।',
                        'Step 2: ਦੂਜੀ ਉਤੇਜਿਤ ਅਵਸਥਾ (n = 3) ਦੀ ਊਰਜਾ E_3 = 3^2 × 2.5 eV = 9 × 2.5 = 22.5 eV।',
                        'Step 3: ਲੋੜੀਂਦੀ ਉਤੇਜਨ ਊਰਜਾ ΔE = E_3 - E_1 = 22.5 - 2.5 = 20.0 eV।'
                    ],
                    hi: [
                        'Step 1: 1D बॉक्स हेतु E_n = n^2 E_1; मूल अवस्था n = 1, प्रथम उत्तेजित अवस्था n = 2, तथा द्वितीय उत्तेजित अवस्था n = 3 होती है।',
                        'Step 2: द्वितीय उत्तेजित अवस्था (n = 3) की ऊर्जा E_3 = 3^2 × 2.5 eV = 9 × 2.5 = 22.5 eV।',
                        'Step 3: आवश्यक उत्तेजन ऊर्जा ΔE = E_3 - E_1 = 22.5 - 2.5 = 20.0 eV।'
                    ]
                },
                finalAnswer: {
                    en: 'E_3 = 22.5 eV; Excitation energy ΔE = 20.0 eV',
                    pa: 'E_3 = 22.5 eV; ਲੋੜੀਂਦੀ ਊਰਜਾ ΔE = 20.0 eV',
                    hi: 'E_3 = 22.5 eV; आवश्यक उत्तेजन ऊर्जा ΔE = 20.0 eV'
                }
            }
        ],
        flashcards: [
            {
                id: 'sci-mod-fc-1',
                question: {
                    en: '[Level H] What is the de Broglie wavelength of an electron accelerated through a potential difference of 100 V?',
                    pa: '[Level H] 100 V ਦੇ ਵਿਭਵ ਅੰਤਰ ਰਾਹੀਂ ਪ੍ਰਵੇਗਿਤ ਕੀਤੇ ਗਏ ਇਲੈਕਟ੍ਰਾਨ ਦੀ ਡੀ-ਬ੍ਰੋਗਲੀ ਤਰੰਗ ਲੰਬਾਈ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                    hi: '[Level H] 100 V के विभवांतर से त्वरित इलेक्ट्रॉन की डी-ब्रोग्ली तरंगदैर्घ्य कितनी होगी?'
                },
                answer: {
                    en: 'λ = 12.27 / √V Å = 12.27 / √100 Å = 1.227 Å (0.1227 nm).',
                    pa: 'λ = 12.27 / √V Å = 12.27 / √100 Å = 1.227 Å (0.1227 nm)।',
                    hi: 'λ = 12.27 / √V Å = 12.27 / √100 Å = 1.227 Å (0.1227 nm)।'
                }
            },
            {
                id: 'sci-mod-fc-2',
                question: {
                    en: '[Level H] What is the function of a Moderator vs Control Rods in a nuclear fission reactor, with examples of each?',
                    pa: '[Level H] ਨਿਊਕਲੀਅਰ ਰਿਐਕਟਰ ਵਿੱਚ ਮੰਦਕ (Moderator) ਅਤੇ ਕੰਟਰੋਲ ਰਾਡਾਂ ਦਾ ਕੀ ਕੰਮ ਹੈ? ਉਦਾਹਰਣਾਂ ਦਿਓ।',
                    hi: '[Level H] नाभिकीय विखंडन रिएक्टर में मंदक (Moderator) और नियंत्रक छड़ों (Control Rods) का क्या कार्य है? उदाहरण दीजिए।'
                },
                answer: {
                    en: 'Moderator (Heavy water D2O, graphite, beryllium) slows down fast fission neutrons (~2 MeV) to thermal energies (~0.025 eV). Control rods (Cadmium Cd, Boron B) absorb excess neutrons to control the chain reaction rate.',
                    pa: 'ਮੰਦਕ (ਭਾਰੀ ਪਾਣੀ D2O, ਗ੍ਰੇਫਾਈਟ) ਤੇਜ਼ ਨਿਊਟ੍ਰੋਨਾਂ ਨੂੰ ਹੌਲੀ ਕਰਕੇ ਥਰਮਲ ਨਿਊਟ੍ਰੋਨ ਬਣਾਉਂਦਾ ਹੈ। ਕੰਟਰੋਲ ਰਾਡਾਂ (ਕੈਡਮੀਅਮ Cd, ਬੋਰੋਨ B) ਵਾਧੂ ਨਿਊਟ੍ਰੋਨਾਂ ਨੂੰ ਸੋਖ ਕੇ ਲੜੀਵਾਰ ਕਿਰਿਆ ਨੂੰ ਕੰਟਰੋਲ ਕਰਦੀਆਂ ਹਨ।',
                    hi: 'मंदक (भारी जल D2O, ग्रेफाइट) तीव्र न्यूट्रॉनों को धीमा कर तापीय न्यूट्रॉन बनाता है। नियंत्रक छड़ें (कैडमियम Cd, बोरॉन B) अतिरिक्त न्यूट्रॉनों को अवशोषित कर श्रृंखला अभिक्रिया को नियंत्रित करती हैं।'
                }
            },
            {
                id: 'sci-mod-fc-3',
                question: {
                    en: '[Level G] Compare the ground-state (lowest) energy of a particle in a 1D infinite potential well of width L and a 1D quantum harmonic oscillator.',
                    pa: '[Level G] L ਚੌੜਾਈ ਦੇ 1D ਵਿਭਵ ਬਾਕਸ ਅਤੇ 1D ਕੁਆਂਟਮ ਹਾਰਮੋਨਿਕ ਔਸੀਲੇਟਰ ਵਿੱਚ ਕਣ ਦੀ ਘੱਟੋ-ਘੱਟ (Ground state) ਊਰਜਾ ਦੀ ਤੁਲਨਾ ਕਰੋ।',
                    hi: '[Level G] L चौड़ाई के 1D अनंत विभव बॉक्स और 1D क्वांटम आवर्ती दोलक में कण की मूल अवस्था (न्यूनतम) ऊर्जा की तुलना कीजिए।'
                },
                answer: {
                    en: '1D Box (n = 1): E_1 = h^2 / (8mL^2). 1D Harmonic Oscillator (n = 0): Zero-point energy E_0 = (1/2)ħω. Neither can be zero due to Heisenberg\'s Uncertainty Principle.',
                    pa: '1D ਬਾਕਸ (n = 1): E_1 = h^2 / (8mL^2)। 1D ਹਾਰਮੋਨਿਕ ਔਸੀਲੇਟਰ (n = 0): ਜ਼ੀਰੋ-ਪੁਆਇੰਟ ਊਰਜਾ E_0 = (1/2)ħω। ਹਾਈਜ਼ਨਬਰਗ ਸਿਧਾਂਤ ਕਾਰਨ ਦੋਵੇਂ ਸਿਫ਼ਰ ਨਹੀਂ ਹੋ ਸਕਦੀਆਂ।',
                    hi: '1D बॉक्स (n = 1): E_1 = h^2 / (8mL^2)। 1D आवर्ती दोलक (n = 0): शून्य-बिंदु ऊर्जा E_0 = (1/2)ħω। हाइज़ेनबर्ग सिद्धांत के कारण दोनों शून्य नहीं हो सकतीं।'
                }
            },
            {
                id: 'sci-mod-fc-4',
                question: {
                    en: '[Level G] What are the nuclear Magic Numbers and which model explains them?',
                    pa: '[Level G] ਨਿਊਕਲੀਅਰ ਮੈਜਿਕ ਨੰਬਰ ਕਿਹੜੇ ਹਨ ਅਤੇ ਕਿਹੜਾ ਮਾਡਲ ਇਹਨਾਂ ਦੀ ਵਿਆਖਿਆ ਕਰਦਾ ਹੈ?',
                    hi: '[Level G] नाभिकीय मैजिक संख्याएँ कौन-सी हैं और कौन-सा मॉडल इनकी व्याख्या करता है?'
                },
                answer: {
                    en: 'Magic Numbers: 2, 8, 20, 28, 50, 82, and 126; explained by the Nuclear Shell Model (Mayer & Jensen) using strong spin-orbit coupling.',
                    pa: 'ਮੈਜਿਕ ਨੰਬਰ: 2, 8, 20, 28, 50, 82 ਅਤੇ 126; ਇਹਨਾਂ ਦੀ ਵਿਆਖਿਆ ਨਿਊਕਲੀਅਰ ਸ਼ੈੱਲ ਮਾਡਲ (Mayer & Jensen) ਦੁਆਰਾ ਸਪਿੱਨ-ਆਰਬਿਟ ਕਪਲਿੰਗ ਨਾਲ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
                    hi: 'मैजिक संख्याएँ: 2, 8, 20, 28, 50, 82 और 126; इनकी व्याख्या नाभिकीय कोश मॉडल (Mayer & Jensen) द्वारा प्रबल स्पिन-कक्षा युग्मन से की जाती है।'
                }
            },
            {
                id: 'sci-mod-fc-5',
                question: {
                    en: '[Level G/P] Give the quark composition of a Proton and a Neutron, along with the fractional charges of Up (u) and Down (d) quarks.',
                    pa: '[Level G/P] ਪ੍ਰੋਟੋਨ ਅਤੇ ਨਿਊਟ੍ਰੋਨ ਦੀ ਕੁਆਰਕ ਬਣਤਰ ਅਤੇ ਅੱਪ (u) ਤੇ ਡਾਊਨ (d) ਕੁਆਰਕ ਉੱਤੇ ਚਾਰਜ ਦੱਸੋ।',
                    hi: '[Level G/P] प्रोटॉन और न्यूट्रॉन की क्वार्क संरचना तथा अप (u) और डाउन (d) क्वार्क पर आवेश बताइए।'
                },
                answer: {
                    en: 'Up quark (u) has charge +2/3 e; Down quark (d) has charge -1/3 e. Proton = uud (+2/3 + 2/3 - 1/3 = +1e); Neutron = udd (+2/3 - 1/3 - 1/3 = 0).',
                    pa: 'ਅੱਪ ਕੁਆਰਕ (u) ਚਾਰਜ = +2/3 e; ਡਾਊਨ ਕੁਆਰਕ (d) ਚਾਰਜ = -1/3 e। ਪ੍ਰੋਟੋਨ = uud (+1e); ਨਿਊਟ੍ਰੋਨ = udd (0)।',
                    hi: 'अप क्वार्क (u) आवेश = +2/3 e; डाउन क्वार्क (d) आवेश = -1/3 e। प्रोटॉन = uud (+1e); न्यूट्रॉन = udd (0)।'
                }
            }
        ]
    },

    // =========================================================================
    // 6. SOLID STATE (CONDENSED MATTER), SEMICONDUCTOR ELECTRONICS & MATHEMATICAL PHYSICS (LEVEL H -> G/P)
    // =========================================================================
    {
        topicId: 'sci-phy-electronics-solid-math',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Level H (Class 11–12) -> Level G/P (Graduation / Postgraduate Flagged) mastery of Semiconductor Physics, PN Diodes, BJT Amplifiers, Digital Logic Gates, Crystal Structure (SC/BCC/FCC, Miller Indices, Bragg Law), Superconductivity (Meissner Effect, Type I/II, BCS), and Mathematical Physics (Vector Calculus, Matrices, Fourier & Dirac Delta).'
        },
        bookRefs: [
            {
                title: 'NCERT Physics Class 12 (Part II), Solid State Physics by C. Kittel & Mathematical Physics by H.K. Dass',
                author: 'NCERT / Charles Kittel / H.K. Dass',
                chapter: 'Semiconductor Electronics, Crystal Lattices, Superconductivity, Vector Calculus & Matrices',
                relevance: 'Complete coverage of diodes, BJT, logic gates, SC/BCC/FCC packing, Bragg diffraction, Meissner effect, and vector/matrix methods.'
            }
        ],
        summary: {
            en: `### [Level H: Higher Secondary — Class 11–12 Semiconductors, Diodes, Transistors & Digital Logic]
1. **Energy Bands & Intrinsic vs Extrinsic Semiconductors:**
   - **Band Gap ($E_g$):** Conductors ($E_g \\approx 0$, overlapping bands), Semiconductors ($E_g < 3\\text{ eV}$: **Silicon $\\text{Si} = 1.1\\text{ eV}$**, **Germanium $\\text{Ge} = 0.72\\text{ eV}$**, **$\\text{GaAs} = 1.42\\text{ eV}$**), Insulators ($E_g > 3\\text{ eV}$, Diamond $\\approx 5.4\\text{ eV}$). Semiconductors have a **negative temperature coefficient of resistance ($\\alpha < 0$)**.
   - **Intrinsic ($n_e = n_h = n_i$)** vs **Extrinsic Semiconductors** (obey **Mass Action Law $n_e n_h = n_i^2$**, both are **electrically neutral**!):
     - **n-type:** Doped with **Pentavalent (Group 15: $\\text{P, As, Sb}$)** **donor** impurities ($n_e \\gg n_h$, donor level just below conduction band).
     - **p-type:** Doped with **Trivalent (Group 13: $\\text{B, Al, In, Ga}$)** **acceptor** impurities ($n_h \\gg n_e$, acceptor level just above valence band).
2. **PN Junction Diode, Rectifiers & Optoelectronic Devices:**
   - **Depletion Layer:** Contains **immobile positive donor and negative acceptor ions** (no free carriers). **Forward Bias** narrows depletion layer & lowers barrier ($V_B \\approx 0.7\\text{ V}$ for $\\text{Si}$, $0.3\\text{ V}$ for $\\text{Ge}$); **Reverse Bias** widens it.
   - **Rectifiers:** **Half-Wave Rectifier** max efficiency $\\eta_{\\max} = 40.6\\%$ (ripple frequency $= f$, ripple factor $= 1.21$); **Full-Wave Rectifier** $\\eta_{\\max} = 81.2\\%$ (ripple frequency $= 2f$, ripple factor $= 0.482$).
   - **Special Diodes:** **Zener Diode** (heavily doped, operates in **reverse breakdown** as a **DC Voltage Regulator** in parallel with load); **Photodiode** (operated in **reverse bias**); **LED** (forward biased direct-bandgap $\\text{GaAsP}$); **Solar Cell** (unbiased PN junction generating photovoltaic EMF across open 4th quadrant).
3. **Bipolar Junction Transistor (BJT) & Digital Logic Gates:**
   - **BJT ($I_E = I_B + I_C$):** Emitter is **heavily doped**, Base is **very thin & lightly doped**, Collector is **largest in area**.
   - **Current Gains:** Common-Base $\\alpha = \\frac{I_C}{I_E}$ ($0.95\\text{--}0.99$); Common-Emitter $\\beta = \\frac{I_C}{I_B}$ ($50\\text{--}300$); **$\\beta = \\frac{\\alpha}{1 - \\alpha}$** and **$\\alpha = \\frac{\\beta}{1 + \\beta}$**. **CE Amplifier** gives maximum power gain and introduces a **$180^\\circ$ ($\pi$) phase reversal** between input and output voltages.
   - **Digital Logic Gates & Boolean Algebra:**
     | Gate | Boolean Expression | Key Truth Table Rule |
     |---|---|---|
     | **AND / OR / NOT** | $Y = A\\cdot B$ / $Y = A + B$ / $Y = \\bar{A}$ | Basic Gates |
     | **NAND / NOR** | $Y = \\overline{A\\cdot B}$ / $Y = \\overline{A + B}$ | **Universal Gates** (any gate can be built from NAND or NOR alone) |
     | **XOR / XNOR** | $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ / $Y = \\overline{A\\oplus B} = AB + \\bar{A}\\bar{B}$ | XOR $= 1$ when inputs differ; XNOR $= 1$ when inputs are equal |
   - **De Morgan's Theorems:** **$\\overline{A + B} = \\bar{A}\\cdot\\bar{B}$** and **$\\overline{A\\cdot B} = \\bar{A} + \\bar{B}$**.

---

### [Level G/P: Graduation & Postgraduate Flagged — Solid State Physics & Mathematical Physics]
1. **Crystal Structure, Cubic Packing, Miller Indices & Bragg's Law:**
   - **Crystal $=$ Space Lattice $+$ Basis.** In 3D there are **7 Crystal Systems** and **14 Bravais Lattices** (Cubic has 3: SC, BCC, FCC; Triclinic is the most unsymmetrical: $a \\ne b \\ne c, \\alpha \\ne \\beta \\ne \\gamma \\ne 90^\\circ$).
   | Cubic Lattice | Effective Atoms ($Z$) | Coordination Number (CN) | Atomic Radius ($r$) | Atomic Packing Fraction (APF) | Examples |
   |---|---|---|---|---|---|
   | **Simple Cubic (SC)** | $1$ | $6$ | $r = \\frac{a}{2}$ | $\\frac{\\pi}{6} \\approx 52.4\\%$ | Polonium ($\\text{Po}$) |
   | **Body-Centred Cubic (BCC)** | $2$ | $8$ | $r = \\frac{\\sqrt{3}a}{4}$ | $\\frac{\\sqrt{3}\\pi}{8} \\approx 68\\%$ | $\\text{Na, K, Fe, Cr, W}$ |
   | **Face-Centred Cubic (FCC)** | $4$ | $12$ | $r = \\frac{a}{2\\sqrt{2}}$ | $\\frac{\\pi}{3\\sqrt{2}} \\approx 74\\%$ | $\\text{Cu, Ag, Au, Al, Ni}$ |
   | **Diamond Cubic** | $8$ | $4$ | $r = \\frac{\\sqrt{3}a}{8}$ | $\\frac{\\sqrt{3}\\pi}{16} \\approx 34\\%$ | $\\text{C (Diamond), Si, Ge}$ |
   - **Miller Indices $(hkl)$ & Interplanar Spacing:** For cubic crystal, **$d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$**.
   - **Bragg's Law of X-Ray Diffraction:** **$2d\\sin\\theta = n\\lambda$**. Reciprocal lattice of **BCC is FCC** and of **FCC is BCC** (reciprocal of SC is SC).
2. **Hall Effect, Lattice Specific Heat & Superconductivity:**
   - **Hall Coefficient:** $R_H = -\\frac{1}{ne}$ (negative for electrons, positive for holes; determines **sign, concentration $n$, and mobility $\\mu_H = \\sigma |R_H|$** of charge carriers).
   - **Lattice Specific Heat:** Classical **Dulong-Petit Law** $C_V = 3R \\approx 25\\text{ J mol}^{-1}\\text{K}^{-1}$ at high $T$; **Debye $T^3$ Law** at very low $T$ ($T \\ll \\Theta_D$): **$C_V \\propto T^3$** (in metals at low $T$, $C_V = \\gamma T + AT^3$).
   - **Superconductivity (Kamerlingh Onnes, 1911 in $\\text{Hg}$ at $4.2\\text{ K}$):** Zero DC electrical resistivity ($\\rho = 0$) below critical temperature $T_c$ and **Meissner Effect** (complete expulsion of magnetic flux $\\vec{B} = 0$ inside $\\implies$ **perfect diamagnetism with susceptibility $\\chi = -1$**).
   - **Type-I (Soft:** $\\text{Hg, Pb, Sn}$, single $H_c$, complete Meissner effect) vs **Type-II (Hard:** $\\text{Nb}_3\\text{Sn}$, YBCO high-$T_c$ cuprates, two critical fields $H_{c1}$ and $H_{c2}$ with vortex state, used for high-field superconducting magnets). **BCS Theory (Bardeen-Cooper-Schrieffer, 1957):** Mediated by **Cooper pairs** of electrons (bosonic pairs with opposite momenta and spins, $\\vec{k}\\uparrow, -\\vec{k}\\downarrow$) coupled via **lattice phonons**.
3. **Mathematical Methods of Physics (Vector Calculus, Matrices, Fourier & Dirac Delta):**
   - **Grad, Div, Curl & Laplacian:**
     - **Gradient $\\nabla\\phi$:** Vector normal to surface $\\phi(x,y,z) = c$, giving direction & magnitude of maximum rate of change.
     - **Divergence $\\nabla\\cdot\\vec{A}$:** Scalar; if **$\\nabla\\cdot\\vec{A} = 0$**, vector field $\\vec{A}$ is **Solenoidal (incompressible)** (e.g., $\\vec{B}$). Note: $\\nabla\\cdot\\vec{r} = 3$.
     - **Curl $\\nabla\\times\\vec{A}$:** Vector; if **$\\nabla\\times\\vec{A} = \\vec{0}$**, vector field $\\vec{A}$ is **Irrotational (conservative)** (e.g., electrostatic $\\vec{E} = -\\nabla V$). Note: $\\nabla\\times\\vec{r} = \\vec{0}$, $\\nabla\\times(\\nabla\\phi) = \\vec{0}$, and $\\nabla\\cdot(\\nabla\\times\\vec{A}) = 0$.
   - **Gauss Divergence Theorem:** $\\oint_S \\vec{A}\\cdot d\\vec{S} = \\iiint_V (\\nabla\\cdot\\vec{A})\\,dV$. **Stokes' Theorem:** $\\oint_C \\vec{A}\\cdot d\\vec{l} = \\iint_S (\\nabla\\times\\vec{A})\\cdot d\\vec{S}$.
   - **Matrices & Eigenvalues:** **Trace($A$) $= \\sum \\lambda_i$** (sum of eigenvalues) and **$\\det(A) = \\prod \\lambda_i$** (product of eigenvalues). **Hermitian Matrix ($A^\\dagger = A$)** has **real eigenvalues** and orthogonal eigenvectors; **Unitary ($U^\\dagger U = I$)** has $|\\lambda| = 1$; **Orthogonal ($A^T A = I$)** has $\\det A = \\pm 1$. **Cayley-Hamilton Theorem:** Every square matrix satisfies its own characteristic equation $\\det(A - \\lambda I) = 0$.
   - **Dirac Delta Function $\\delta(x - a)$:** $\\int_{-\\infty}^{\\infty} \\delta(x - a)\\,dx = 1$ and sifting property **$\\int_{-\\infty}^{\\infty} f(x)\\delta(x - a)\\,dx = f(a)$**.`,
            pa: `### [Level H: Higher Secondary — Class 11–12 ਅਰਧ-ਚਾਲਕ, ਡਾਇਓਡ, ਟ੍ਰਾਂਜ਼ਿਸਟਰ ਅਤੇ ਲੌਜਿਕ ਗੇਟ]
1. **ਊਰਜਾ ਬੈਂਡ ਅਤੇ ਅਰਧ-ਚਾਲਕ (Semiconductors):**
   - **ਬੈਂਡ ਗੈਪ ($E_g$):** **ਸਿਲੀਕਾਨ ($\\text{Si}$) $= 1.1\\text{ eV}$**, **ਜਰਮੇਨੀਅਮ ($\\text{Ge}$) $= 0.72\\text{ eV}$**। ਅਰਧ-ਚਾਲਕਾਂ ਦਾ ਪ੍ਰਤੀਰੋਧ ਤਾਪਮਾਨ ਗੁਣਾਂਕ **ਰਿਣਾਤਮਕ ($\\alpha < 0$)** ਹੁੰਦਾ ਹੈ।
   - **n-ਕਿਸਮ:** ਪੰਜ-ਸੰਯੋਜਕ (**Group 15: $\\text{P, As, Sb}$**) ਦਾਤਾ (Donor) ਅਸ਼ੁੱਧੀ; **p-ਕਿਸਮ:** ਤਿੰਨ-ਸੰਯੋਜਕ (**Group 13: $\\text{B, Al, In, Ga}$**) ਗ੍ਰਾਹੀ (Acceptor) ਅਸ਼ੁੱਧੀ। **ਪੁੰਜ ਕਿਰਿਆ ਨਿਯਮ:** $n_e n_h = n_i^2$।
2. **PN ਜੰਕਸ਼ਨ ਡਾਇਓਡ, ਰੈਕਟੀਫਾਇਰ ਅਤੇ ਟ੍ਰਾਂਜ਼ਿਸਟਰ:**
   - **ਰੈਕਟੀਫਾਇਰ ਸਮਰੱਥਾ:** ਹਾਫ-ਵੇਵ $= 40.6\\%$, ਫੁੱਲ-ਵੇਵ $= 81.2\\%$। **ਜ਼ੀਨਰ ਡਾਇਓਡ** ਪੁੱਠੀ ਬਾਇਸ (Reverse breakdown) ਵਿੱਚ **ਵੋਲਟੇਜ ਰੈਗੂਲੇਟਰ** ਵਜੋਂ ਕੰਮ ਕਰਦਾ ਹੈ।
   - **ਟ੍ਰਾਂਜ਼ਿਸਟਰ (BJT):** $I_E = I_B + I_C$, **$\\beta = \\frac{\\alpha}{1 - \\alpha}$**; CE ਐਂਪਲੀਫਾਇਰ ਵਿੱਚ ਇਨਪੁੱਟ ਅਤੇ ਆਊਟਪੁੱਟ ਵਿਚਕਾਰ **$180^\\circ$ ਦਾ ਕਲਾ ਅੰਤਰ** ਹੁੰਦਾ ਹੈ।
   - **ਯੂਨੀਵਰਸਲ ਗੇਟ:** **NAND** ਅਤੇ **NOR**। **ਡੀ-ਮੌਰਗਨ ਦੇ ਨਿਯਮ:** $\\overline{A+B} = \\bar{A}\\cdot\\bar{B}$ ਅਤੇ $\\overline{A\\cdot B} = \\bar{A} + \\bar{B}$।

---

### [Level G/P: Graduation / PG — ਠੋਸ ਅਵਸਥਾ ਭੌਤਿਕ ਵਿਗਿਆਨ ਅਤੇ ਗਣਿਤਿਕ ਵਿਧੀਆਂ]
1. **ਕ੍ਰਿਸਟਲ ਬਣਤਰ, ਬ੍ਰੈਗ ਦਾ ਨਿਯਮ ਅਤੇ ਅਤਿ-ਚਾਲਕਤਾ (Superconductivity):**
   - **7 ਕ੍ਰਿਸਟਲ ਪ੍ਰਣਾਲੀਆਂ** ਅਤੇ **14 ਬ੍ਰੇਵੇ ਜਾਲਕ (Bravais Lattices)**।
   - **ਪੈਕਿੰਗ ਸਮਰੱਥਾ (APF):** **SC** ($Z=1, \\text{CN}=6, \\text{APF}=52.4\\%$), **BCC** ($Z=2, \\text{CN}=8, r=\\frac{\\sqrt{3}a}{4}, \\text{APF}=68\\%$), **FCC** ($Z=4, \\text{CN}=12, r=\\frac{a}{2\\sqrt{2}}, \\text{APF}=74\\%$), **ਡਾਇਮੰਡ** ($Z=8, \\text{APF}=34\\%$)।
   - **ਮਿਲਰ ਇੰਡੈਕਸ ਦੂਰੀ:** $d_{hkl} = \\frac{a}{\\sqrt{h^2+k^2+l^2}}$ ਅਤੇ **ਬ੍ਰੈਗ ਦਾ ਨਿਯਮ:** **$2d\\sin\\theta = n\\lambda$**।
   - **ਅਤਿ-ਚਾਲਕਤਾ (Kamerlingh Onnes, 1911):** ਕ੍ਰਾਂਤੀਕਾਰੀ ਤਾਪਮਾਨ ($T_c$) ਤੋਂ ਹੇਠਾਂ $\\rho = 0$ ਅਤੇ **ਮਾਈਸਨਰ ਪ੍ਰਭਾਵ (Meissner Effect: $\\vec{B} = 0$, ਸੰਪੂਰਨ ਪ੍ਰਤੀ-ਚੁੰਬਕਤਾ $\\chi = -1$)**। **BCS ਸਿਧਾਂਤ:** ਫੋਨੋਨ ਰਾਹੀਂ ਜੁੜੇ **ਕੂਪਰ ਪੇਅਰ (Cooper Pairs)**।
2. **ਭੌਤਿਕ ਵਿਗਿਆਨ ਦੀਆਂ ਗਣਿਤਿਕ ਵਿਧੀਆਂ:**
   - **ਸੋਲੇਨੋਇਡਲ ਵੈਕਟਰ:** $\\nabla\\cdot\\vec{A} = 0$; **ਇਰੋਟੇਸ਼ਨਲ (Irrotational / Conservative) ਵੈਕਟਰ:** $\\nabla\\times\\vec{A} = \\vec{0}$। Note: $\\nabla\\cdot\\vec{r} = 3$।
   - **ਮੈਟ੍ਰਿਕਸ:** $\\text{Trace}(A) = \\sum \\lambda_i$ ਅਤੇ $\\det(A) = \\prod \\lambda_i$; **ਹਰਮਿਸ਼ੀਅਨ ਮੈਟ੍ਰਿਕਸ ($A^\\dagger = A$)** ਦੇ ਆਈਗਨ-ਮੁੱਲ ਹਮੇਸ਼ਾ **ਵਾਸਤਵਿਕ (Real)** ਹੁੰਦੇ ਹਨ। **ਡਿਰਾਕ ਡੈਲਟਾ:** $\\int_{-\\infty}^{\\infty} f(x)\\delta(x-a)\\,dx = f(a)$।`,
            hi: `### [Level H: Higher Secondary — Class 11–12 अर्धचालक, डायोड, ट्रांजिस्टर एवं लॉजिक गेट]
1. **ऊर्जा बैंड एवं अर्धचालक (Semiconductors):**
   - **बैंड अंतराल ($E_g$):** **सिलिकॉन ($\\text{Si}$) $= 1.1\\text{ eV}$**, **जर्मेनियम ($\\text{Ge}$) $= 0.72\\text{ eV}$**। अर्धचालकों का प्रतिरोध ताप गुणांक **ऋणात्मक ($\\alpha < 0$)** होता है।
   - **n-प्रकार:** पंचसंयोजी (**Group 15: $\\text{P, As, Sb}$**) दाता (Donor) अशुद्धि; **p-प्रकार:** त्रिसंयोजी (**Group 13: $\\text{B, Al, In, Ga}$**) ग्राही (Acceptor) अशुद्धि। **द्रव्यमान क्रिया नियम:** $n_e n_h = n_i^2$।
2. **PN संधि डायोड, दिष्टकारी एवं ट्रांजिस्टर:**
   - **दिष्टकारी दक्षता:** अर्ध-तरंग $= 40.6\\%$, पूर्ण-तरंग $= 81.2\\%$। **ज़ेनर डायोड** उत्क्रम भंजन (Reverse breakdown) में **वोल्टता नियंत्रक (Voltage Regulator)** के रूप में कार्य करता है।
   - **ट्रांजिस्टर (BJT):** $I_E = I_B + I_C$, **$\\beta = \\frac{\\alpha}{1 - \\alpha}$**; CE प्रवर्धक में निवेशी और निर्गत वोल्टता के बीच **$180^\\circ$ का कलांतर** होता है।
   - **सार्वत्रिक (Universal) गेट:** **NAND** और **NOR**। **डी-मॉर्गन प्रमेय:** $\\overline{A+B} = \\bar{A}\\cdot\\bar{B}$ तथा $\\overline{A\\cdot B} = \\bar{A} + \\bar{B}$।

---

### [Level G/P: Graduation / PG — ठोस अवस्था भौतिकी एवं गणितीय विधियाँ]
1. **क्रिस्टल संरचना, ब्रैग का नियम एवं अतिचालकता (Superconductivity):**
   - **7 क्रिस्टल समुदाय** तथा **14 ब्रेवे जालक (Bravais Lattices)**।
   - **संकुलन क्षमता (APF):** **SC** ($Z=1, \\text{CN}=6, \\text{APF}=52.4\\%$), **BCC** ($Z=2, \\text{CN}=8, r=\\frac{\\sqrt{3}a}{4}, \\text{APF}=68\\%$), **FCC** ($Z=4, \\text{CN}=12, r=\\frac{a}{2\\sqrt{2}}, \\text{APF}=74\\%$), **हीरा (Diamond)** ($Z=8, \\text{APF}=34\\%$)।
   - **मिलर सूचकांक दूरी:** $d_{hkl} = \\frac{a}{\\sqrt{h^2+k^2+l^2}}$ तथा **ब्रैग का नियम:** **$2d\\sin\\theta = n\\lambda$**।
   - **अतिचालकता (Kamerlingh Onnes, 1911):** क्रांतिक ताप ($T_c$) से नीचे $\\rho = 0$ तथा **माइसनर प्रभाव (Meissner Effect: $\\vec{B} = 0$, पूर्ण प्रतिचुंबकत्व $\\chi = -1$)**। **BCS सिद्धांत:** फोनॉन जनित **कूपर युग्म (Cooper Pairs)**।
2. **भौतिकी की गणितीय विधियाँ:**
   - **परिनालिकीय (Solenoidal) सदिश:** $\\nabla\\cdot\\vec{A} = 0$; **अघूर्णी (Irrotational / Conservative) सदिश:** $\\nabla\\times\\vec{A} = \\vec{0}$। Note: $\\nabla\\cdot\\vec{r} = 3$।
   - **आव्यूह (Matrices):** $\\text{Trace}(A) = \\sum \\lambda_i$ तथा $\\det(A) = \\prod \\lambda_i$; **हरमिशियन आव्यूह ($A^\\dagger = A$)** के आइगेन-मान सदैव **वास्तविक (Real)** होते हैं। **डिराक डेल्टा:** $\\int_{-\\infty}^{\\infty} f(x)\\delta(x-a)\\,dx = f(a)$।`
        },
        keyNotes: {
            en: [
                'Band gaps at 300 K: Si = 1.1 eV, Ge = 0.72 eV; n-type uses pentavalent (P, As, Sb) donors, p-type uses trivalent (B, Al, In, Ga) acceptors, and n_e n_h = n_i^2.',
                'Rectifier efficiency: Half-wave = 40.6%, Full-wave = 81.2%; Zener diode operates in reverse breakdown as a voltage regulator; BJT current gains obey β = α/(1 - α).',
                'NAND and NOR are Universal Logic Gates; De Morgan\'s Laws state (A+B)\' = A\'·B\' and (A·B)\' = A\' + B\'.',
                'Cubic Crystal Packing: SC (Z=1, APF=52.4%), BCC (Z=2, r=√3a/4, APF=68%), FCC (Z=4, r=a/(2√2), APF=74%), Diamond (Z=8, APF=34%); Bragg\'s Law: 2d sin(θ) = nλ.',
                'Superconductors exhibit zero resistivity (ρ = 0) and the Meissner Effect (B = 0 inside, perfect diamagnetism χ = -1), explained by BCS theory via phonon-mediated Cooper pairs.',
                'Vector & Matrix Identities: Solenoidal if ∇·A = 0, Irrotational if ∇×A = 0, ∇·r = 3; Hermitian matrices (A† = A) have real eigenvalues, Trace(A) = Σλ_i, and det(A) = Πλ_i.'
            ],
            pa: [
                'ਬੈਂਡ ਗੈਪ: Si = 1.1 eV, Ge = 0.72 eV; n-ਕਿਸਮ ਵਿੱਚ ਪੰਜ-ਸੰਯੋਜਕ (P, As, Sb) ਅਤੇ p-ਕਿਸਮ ਵਿੱਚ ਤਿੰਨ-ਸੰਯੋਜਕ (B, Al, In, Ga) ਅਸ਼ੁੱਧੀਆਂ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ (n_e n_h = n_i^2)।',
                'ਰੈਕਟੀਫਾਇਰ ਸਮਰੱਥਾ: ਹਾਫ-ਵੇਵ = 40.6%, ਫੁੱਲ-ਵੇਵ = 81.2%; ਜ਼ੀਨਰ ਡਾਇਓਡ ਪੁੱਠੀ ਬਾਇਸ ਵਿੱਚ ਵੋਲਟੇਜ ਰੈਗੂਲੇਟਰ ਹੈ; BJT ਲਈ β = α/(1 - α)।',
                'NAND ਅਤੇ NOR ਯੂਨੀਵਰਸਲ ਗੇਟ ਹਨ; ਡੀ-ਮੌਰਗਨ ਨਿਯਮ: (A+B)\' = A\'·B\' ਅਤੇ (A·B)\' = A\' + B\'।',
                'ਘਣ ਕ੍ਰਿਸਟਲ ਪੈਕਿੰਗ: SC (Z=1, 52.4%), BCC (Z=2, r=√3a/4, 68%), FCC (Z=4, r=a/2√2, 74%); ਬ੍ਰੈਗ ਦਾ ਨਿਯਮ: 2d sin(θ) = nλ।',
                'ਅਤਿ-ਚਾਲਕ (Superconductors) ਸਿਫ਼ਰ ਪ੍ਰਤੀਰੋਧ (ρ = 0) ਅਤੇ ਮਾਈਸਨਰ ਪ੍ਰਭਾਵ (B = 0, ਸੰਪੂਰਨ ਪ੍ਰਤੀ-ਚੁੰਬਕਤਾ χ = -1) ਦਿਖਾਉਂਦੇ ਹਨ (BCS ਕੂਪਰ ਪੇਅਰ)।',
                'ਵੈਕਟਰ ਅਤੇ ਮੈਟ੍ਰਿਕਸ: ਸੋਲੇਨੋਇਡਲ ਜੇਕਰ ∇·A = 0, ਇਰੋਟੇਸ਼ਨਲ ਜੇਕਰ ∇×A = 0, ∇·r = 3; ਹਰਮਿਸ਼ੀਅਨ ਮੈਟ੍ਰਿਕਸ ਦੇ ਆਈਗਨ-ਮੁੱਲ ਵਾਸਤਵਿਕ ਹੁੰਦੇ ਹਨ।'
            ],
            hi: [
                'बैंड अंतराल: Si = 1.1 eV, Ge = 0.72 eV; n-प्रकार में पंचसंयोजी (P, As, Sb) तथा p-प्रकार में त्रिसंयोजी (B, Al, In, Ga) अशुद्धियाँ प्रयुक्त होती हैं (n_e n_h = n_i^2)।',
                'दिष्टकारी दक्षता: अर्ध-तरंग = 40.6%, पूर्ण-तरंग = 81.2%; ज़ेनर डायोड उत्क्रम भंजन में वोल्टता नियंत्रक है; BJT हेतु β = α/(1 - α)।',
                'NAND तथा NOR सार्वत्रिक (Universal) गेट हैं; डी-मॉर्गन प्रमेय: (A+B)\' = A\'·B\' तथा (A·B)\' = A\' + B\'।',
                'घनीय क्रिस्टल संकुलन: SC (Z=1, 52.4%), BCC (Z=2, r=√3a/4, 68%), FCC (Z=4, r=a/2√2, 74%); ब्रैग का नियम: 2d sin(θ) = nλ।',
                'अतिचालक शून्य प्रतिरोधकता (ρ = 0) तथा माइसनर प्रभाव (B = 0, पूर्ण प्रतिचुंबकत्व χ = -1) दर्शाते हैं (BCS कूपर युग्म)।',
                'सदिश एवं आव्यूह: परिनालिकीय यदि ∇·A = 0, अघूर्णी यदि ∇×A = 0, ∇·r = 3; हरमिशियन आव्यूह के आइगेन-मान वास्तविक होते हैं।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Minimum NAND / NOR Gates Required: To build NOT, AND, OR, XOR using NAND gates -> 1, 2, 3, 4 gates respectively! Using NOR gates -> 1 (NOT), 2 (OR), 3 (AND), 5 (XOR).',
                'Reciprocal Lattice Duality: Reciprocal lattice of SC is SC (side 2π/a); Reciprocal of BCC is FCC; Reciprocal of FCC is BCC.',
                'Debye vs Electronic Specific Heat at Low T: For insulators C_V ∝ T^3 (phonons only); for metals C_V = γT + AT^3 (linear electronic + cubic phonon terms).',
                'Essential Vector Calculus Identities: ∇r = r-hat, ∇(1/r) = -r-vec/r^3, ∇·r = 3, ∇×r = 0, ∇^2(1/r) = -4πδ^3(r).',
                'Matrix Quick Shortcuts: For any N×N matrix, sum of diagonal elements Trace(A) = λ_1 + λ_2 + ... + λ_N and determinant det(A) = λ_1 × λ_2 × ... × λ_N.'
            ],
            pa: [
                'NAND ਗੇਟਾਂ ਦੀ ਘੱਟੋ-ਘੱਟ ਗਿਣਤੀ: NOT, AND, OR, XOR ਬਣਾਉਣ ਲਈ ਕ੍ਰਮਵਾਰ 1, 2, 3, 4 NAND ਗੇਟ ਲੱਗਦੇ ਹਨ! NOR ਗੇਟਾਂ ਲਈ: 1 (NOT), 2 (OR), 3 (AND), 5 (XOR)।',
                'ਉਲਟ ਜਾਲਕ (Reciprocal Lattice): SC ਦਾ SC ਹੁੰਦਾ ਹੈ; BCC ਦਾ FCC ਹੁੰਦਾ ਹੈ; ਅਤੇ FCC ਦਾ BCC ਹੁੰਦਾ ਹੈ।',
                'ਘੱਟ ਤਾਪਮਾਨ ਤੇ ਵਿਸ਼ਿਸ਼ਟ ਤਾਪ: ਕੁਚਾਲਕਾਂ ਲਈ C_V ∝ T^3 (ਡਿਬਾਈ ਨਿਯਮ); ਧਾਤਾਂ ਲਈ C_V = γT + AT^3।',
                'ਵੈਕਟਰ ਕੈਲਕੂਲਸ ਸੂਤਰ: ∇·r = 3, ∇×r = 0, ∇×(∇φ) = 0, ਅਤੇ ∇·(∇×A) = 0।',
                'ਮੈਟ੍ਰਿਕਸ ਟ੍ਰਿਕ: ਆਈਗਨ-ਮੁੱਲਾਂ ਦਾ ਜੋੜ = Trace(A) ਅਤੇ ਆਈਗਨ-ਮੁੱਲਾਂ ਦਾ ਗੁਣਨਫਲ = det(A)।'
            ],
            hi: [
                'न्यूनतम NAND गेट संख्या: NOT, AND, OR, XOR बनाने हेतु क्रमशः 1, 2, 3, 4 NAND गेट लगते हैं! NOR गेट हेतु: 1 (NOT), 2 (OR), 3 (AND), 5 (XOR)।',
                'व्युत्क्रम जालक (Reciprocal Lattice): SC का SC होता है; BCC का FCC होता है; तथा FCC का BCC होता है।',
                'निम्न ताप पर विशिष्ट ऊष्मा: कुचालकों हेतु C_V ∝ T^3 (डिबाई नियम); धातुओं हेतु C_V = γT + AT^3।',
                'सदिश कलन सूत्र: ∇·r = 3, ∇×r = 0, ∇×(∇φ) = 0, तथा ∇·(∇×A) = 0।',
                'आव्यूह ट्रिक: आइगेन-मानों का योग = Trace(A) तथा आइगेन-मानों का गुणनफल = det(A)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: An n-type semiconductor is negatively charged and a p-type semiconductor is positively charged. Correction: Both n-type and p-type semiconductors are completely electrically NEUTRAL because the dopant atoms themselves are neutral (every mobile electron/hole is balanced by an immobile donor/acceptor ion).',
                'Misconception: Visible light can be used instead of X-rays to perform Bragg crystal diffraction. Correction: Visible light wavelength (4000–7000 Å) is thousands of times larger than crystal interplanar spacing d (~1 to 3 Å), violating sin(θ) = nλ/(2d) ≤ 1; X-rays (λ ~ 1 Å) match interplanar spacing.',
                'Misconception: A superconductor is simply an ideal conductor with zero resistivity (ρ = 0). Correction: A mere perfect conductor would trap existing magnetic flux inside when cooled (dB/dt = 0), whereas a true superconductor actively expels all magnetic flux (B = 0, χ = -1) via the Meissner Effect.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: n-ਕਿਸਮ ਦਾ ਅਰਧ-ਚਾਲਕ ਰਿਣਾਤਮਕ ਚਾਰਜਿਤ ਅਤੇ p-ਕਿਸਮ ਦਾ ਅਰਧ-ਚਾਲਕ ਧਨਾਤਮਕ ਚਾਰਜਿਤ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: n-ਕਿਸਮ ਅਤੇ p-ਕਿਸਮ ਦੋਵੇਂ ਅਰਧ-ਚਾਲਕ ਬਿਜਲਈ ਤੌਰ ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਉਦਾਸੀਨ (Neutral) ਹੁੰਦੇ ਹਨ।',
                'ਭੁਲੇਖਾ: ਕ੍ਰਿਸਟਲ ਵਿਵਰਤਨ (Bragg diffraction) ਲਈ ਐਕਸ-ਕਿਰਨਾਂ ਦੀ ਥਾਂ ਦ੍ਰਿਸ਼ ਪ੍ਰਕਾਸ਼ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਸੁਧਾਰ: ਦ੍ਰਿਸ਼ ਪ੍ਰਕਾਸ਼ ਦੀ ਤਰੰਗ ਲੰਬਾਈ (4000–7000 Å) ਕ੍ਰਿਸਟਲ ਤਲਾਂ ਦੀ ਦੂਰੀ d (~1–3 Å) ਨਾਲੋਂ ਬਹੁਤ ਵੱਡੀ ਹੁੰਦੀ ਹੈ; ਇਸ ਲਈ ਐਕਸ-ਕਿਰਨਾਂ (λ ~ 1 Å) ਜ਼ਰੂਰੀ ਹਨ।',
                'ਭੁਲੇਖਾ: ਅਤਿ-ਚਾਲਕ (Superconductor) ਸਿਰਫ਼ ਸਿਫ਼ਰ ਪ੍ਰਤੀਰੋਧ (ρ = 0) ਵਾਲਾ ਆਦਰਸ਼ ਚਾਲਕ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਸਿਫ਼ਰ ਪ੍ਰਤੀਰੋਧ ਤੋਂ ਇਲਾਵਾ ਅਤਿ-ਚਾਲਕ ਮਾਈਸਨਰ ਪ੍ਰਭਾਵ (Meissner Effect: B = 0, χ = -1) ਰਾਹੀਂ ਚੁੰਬਕੀ ਖੇਤਰ ਨੂੰ ਬਾਹਰ ਕੱਢ ਦਿੰਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: n-प्रकार का अर्धचालक ऋणावेशित और p-प्रकार का अर्धचालक धनावेशित होता है। सुधार: n-प्रकार और p-प्रकार दोनों अर्धचालक पूर्णतः विद्युत उदासीन (Neutral) होते हैं।',
                'भ्रांति: क्रिस्टल विवर्तन (Bragg diffraction) के लिए एक्स-किरणों के स्थान पर दृश्य प्रकाश का उपयोग किया जा सकता है। सुधार: दृश्य प्रकाश की तरंगदैर्घ्य (4000–7000 Å) अंतरातलीय दूरी d (~1–3 Å) से बहुत बड़ी होती है; अतः एक्स-किरणें (λ ~ 1 Å) आवश्यक हैं।',
                'भ्रांति: अतिचालक (Superconductor) केवल शून्य प्रतिरोधकता (ρ = 0) वाला आदर्श चालक है। सुधार: शून्य प्रतिरोधकता के अतिरिक्त अतिचालक माइसनर प्रभाव (Meissner Effect: B = 0, χ = -1) द्वारा चुंबकीय फ्लक्स को बाहर निष्कासित कर देता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'In a Common-Emitter (CE) transistor amplifier, the base current changes by ΔI_B = 40 μA which causes a collector current change of ΔI_C = 2.4 mA. Find the AC current gain β and the Common-Base current gain α.',
                    pa: 'ਇੱਕ ਕੌਮਨ-ਐਮੀਟਰ (CE) ਟ੍ਰਾਂਜ਼ਿਸਟਰ ਵਿੱਚ ਆਧਾਰ ਧਾਰਾ ਵਿੱਚ ΔI_B = 40 μA ਦਾ ਬਦਲਾਅ ਹੋਣ ਨਾਲ ਕੁਲੈਕਟਰ ਧਾਰਾ ਵਿੱਚ ΔI_C = 2.4 mA ਦਾ ਬਦਲਾਅ ਹੁੰਦਾ ਹੈ। ਧਾਰਾ ਲਾਭ β ਅਤੇ α ਦਾ ਮੁੱਲ ਪਤਾ ਕਰੋ।',
                    hi: 'एक उभयनिष्ठ-उत्सर्जक (CE) ट्रांजिस्टर प्रवर्धक में आधार धारा में ΔI_B = 40 μA का परिवर्तन होने से संग्राहक धारा में ΔI_C = 2.4 mA का परिवर्तन होता है। धारा लाभ β तथा α का मान ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Convert units: ΔI_B = 40 μA = 0.04 mA, ΔI_C = 2.4 mA.',
                        'Step 2: Common-emitter current gain β = ΔI_C / ΔI_B = 2.4 mA / 0.04 mA = 60.',
                        'Step 3: Common-base current gain α = β / (1 + β) = 60 / 61 ≈ 0.9836.'
                    ],
                    pa: [
                        'Step 1: ਇਕਾਈਆਂ ਬਦਲੋ: ΔI_B = 40 μA = 0.04 mA, ΔI_C = 2.4 mA।',
                        'Step 2: ਧਾਰਾ ਲਾਭ β = ΔI_C / ΔI_B = 2.4 / 0.04 = 60।',
                        'Step 3: α = β / (1 + β) = 60 / 61 ≈ 0.9836।'
                    ],
                    hi: [
                        'Step 1: मात्रक बदलें: ΔI_B = 40 μA = 0.04 mA, ΔI_C = 2.4 mA।',
                        'Step 2: धारा लाभ β = ΔI_C / ΔI_B = 2.4 / 0.04 = 60।',
                        'Step 3: α = β / (1 + β) = 60 / 61 ≈ 0.9836।'
                    ]
                },
                finalAnswer: {
                    en: 'β = 60; α = 60/61 ≈ 0.984',
                    pa: 'β = 60; α = 60/61 ≈ 0.984',
                    hi: 'β = 60; α = 60/61 ≈ 0.984'
                }
            },
            {
                problem: {
                    en: 'A cubic crystal has lattice constant a = 3.6 Å. Calculate the interplanar spacing d for the (111) planes and the wavelength λ of X-rays that gives a first-order (n = 1) Bragg reflection at glancing angle θ = 30°.',
                    pa: 'ਇੱਕ ਘਣ ਕ੍ਰਿਸਟਲ ਦਾ ਜਾਲਕ ਸਥਿਰਾਂਕ a = 3.6 Å ਹੈ। (111) ਤਲਾਂ ਵਿਚਕਾਰ ਦੂਰੀ d ਅਤੇ θ = 30° ਉੱਤੇ ਪਹਿਲੇ ਕ੍ਰਮ (n = 1) ਦਾ ਬ੍ਰੈਗ ਪਰਾਵਰਤਨ ਦੇਣ ਵਾਲੀ ਐਕਸ-ਕਿਰਨ ਦੀ ਤਰੰਗ ਲੰਬਾਈ λ ਪਤਾ ਕਰੋ।',
                    hi: 'एक घनीय क्रिस्टल का जालक नियतांक a = 3.6 Å है। (111) तलों के बीच की दूरी d तथा θ = 30° पर प्रथम कोटि (n = 1) का ब्रैग परावर्तन देने वाली एक्स-किरण की तरंगदैर्घ्य λ ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Interplanar spacing for (hkl) = (111): d_111 = a / √(1^2 + 1^2 + 1^2) = 3.6 / √3 = 1.2√3 ≈ 2.078 Å.',
                        'Step 2: Using Bragg\'s Law for n = 1 and θ = 30°: λ = 2 d_111 sin(30°) = 2 × 2.078 Å × (1/2) = 2.078 Å.'
                    ],
                    pa: [
                        'Step 1: (111) ਤਲਾਂ ਵਿਚਕਾਰ ਦੂਰੀ d_111 = a / √(1^2 + 1^2 + 1^2) = 3.6 / √3 = 1.2√3 ≈ 2.078 Å।',
                        'Step 2: ਬ੍ਰੈਗ ਦੇ ਨਿਯਮ 2d sin(θ) = nλ ਅਨੁਸਾਰ (n = 1, θ = 30°): λ = 2 × 2.078 × (1/2) = 2.078 Å।'
                    ],
                    hi: [
                        'Step 1: (111) तलों के बीच की दूरी d_111 = a / √(1^2 + 1^2 + 1^2) = 3.6 / √3 = 1.2√3 ≈ 2.078 Å।',
                        'Step 2: ब्रैग के नियम 2d sin(θ) = nλ से (n = 1, θ = 30°): λ = 2 × 2.078 × (1/2) = 2.078 Å।'
                    ]
                },
                finalAnswer: {
                    en: 'd_111 = 1.2√3 ≈ 2.08 Å; λ = 2.08 Å',
                    pa: 'd_111 = 1.2√3 ≈ 2.08 Å; λ = 2.08 Å',
                    hi: 'd_111 = 1.2√3 ≈ 2.08 Å; λ = 2.08 Å'
                }
            }
        ],
        flashcards: [
            {
                id: 'sci-sol-fc-1',
                question: {
                    en: '[Level H] State the band gap energy E_g of Silicon (Si) and Germanium (Ge) at 300 K and the maximum efficiency of half-wave vs full-wave rectifiers.',
                    pa: '[Level H] 300 K ਉੱਤੇ ਸਿਲੀਕਾਨ (Si) ਅਤੇ ਜਰਮੇਨੀਅਮ (Ge) ਦਾ ਬੈਂਡ ਗੈਪ E_g ਅਤੇ ਹਾਫ-ਵੇਵ ਤੇ ਫੁੱਲ-ਵੇਵ ਰੈਕਟੀਫਾਇਰ ਦੀ ਅਧਿਕਤਮ ਸਮਰੱਥਾ ਦੱਸੋ।',
                    hi: '[Level H] 300 K पर सिलिकॉन (Si) और जर्मेनियम (Ge) का बैंड अंतराल E_g तथा अर्ध-तरंग व पूर्ण-तरंग दिष्टकारी की अधिकतम दक्षता बताइए।'
                },
                answer: {
                    en: 'Si: E_g = 1.1 eV, Ge: E_g = 0.72 eV. Half-wave rectifier max efficiency = 40.6%; Full-wave rectifier max efficiency = 81.2%.',
                    pa: 'Si: E_g = 1.1 eV, Ge: E_g = 0.72 eV। ਹਾਫ-ਵੇਵ ਰੈਕਟੀਫਾਇਰ = 40.6%; ਫੁੱਲ-ਵੇਵ ਰੈਕਟੀਫਾਇਰ = 81.2%।',
                    hi: 'Si: E_g = 1.1 eV, Ge: E_g = 0.72 eV। अर्ध-तरंग दिष्टकारी = 40.6%; पूर्ण-तरंग दिष्टकारी = 81.2%।'
                }
            },
            {
                id: 'sci-sol-fc-2',
                question: {
                    en: '[Level H] Which two logic gates are called Universal Gates, and what are De Morgan\'s two theorems?',
                    pa: '[Level H] ਕਿਹੜੇ ਦੋ ਲੌਜਿਕ ਗੇਟਾਂ ਨੂੰ ਯੂਨੀਵਰਸਲ ਗੇਟ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਡੀ-ਮੌਰਗਨ ਦੇ ਦੋ ਨਿਯਮ ਕੀ ਹਨ?',
                    hi: '[Level H] किन दो लॉजिक गेटों को सार्वत्रिक (Universal) गेट कहा जाता है, और डी-मॉर्गन के दो प्रमेय क्या हैं?'
                },
                answer: {
                    en: 'NAND and NOR gates. De Morgan\'s Theorems: (1) Complement of sum equals product of complements: (A + B)\' = A\' · B\'; (2) Complement of product equals sum of complements: (A · B)\' = A\' + B\'.',
                    pa: 'NAND ਅਤੇ NOR ਗੇਟ। ਡੀ-ਮੌਰਗਨ ਦੇ ਨਿਯਮ: (1) (A + B)\' = A\' · B\' ਅਤੇ (2) (A · B)\' = A\' + B\'।',
                    hi: 'NAND और NOR गेट। डी-मॉर्गन के प्रमेय: (1) (A + B)\' = A\' · B\' तथा (2) (A · B)\' = A\' + B\'।'
                }
            },
            {
                id: 'sci-sol-fc-3',
                question: {
                    en: '[Level G] Compare the number of effective atoms per unit cell (Z), coordination number (CN), and atomic packing fraction (APF) for SC, BCC, and FCC lattices.',
                    pa: '[Level G] SC, BCC ਅਤੇ FCC ਜਾਲਕਾਂ ਲਈ ਪ੍ਰਤੀ ਇਕਾਈ ਸੈੱਲ ਪ੍ਰਮਾਣੂਆਂ ਦੀ ਗਿਣਤੀ (Z), ਤਾਲਮੇਲ ਸੰਖਿਆ (CN) ਅਤੇ ਪੈਕਿੰਗ ਸਮਰੱਥਾ (APF) ਦੀ ਤੁਲਨਾ ਕਰੋ।',
                    hi: '[Level G] SC, BCC और FCC जालकों के लिए प्रति एकक कोष्ठिका परमाणुओं की संख्या (Z), समन्वय संख्या (CN) और संकुलन क्षमता (APF) की तुलना कीजिए।'
                },
                answer: {
                    en: 'SC: Z = 1, CN = 6, APF = 52.4% (π/6). BCC: Z = 2, CN = 8, APF = 68% (√3π/8). FCC: Z = 4, CN = 12, APF = 74% (π/3√2).',
                    pa: 'SC: Z = 1, CN = 6, APF = 52.4%। BCC: Z = 2, CN = 8, APF = 68%। FCC: Z = 4, CN = 12, APF = 74%।',
                    hi: 'SC: Z = 1, CN = 6, APF = 52.4%। BCC: Z = 2, CN = 8, APF = 68%। FCC: Z = 4, CN = 12, APF = 74%।'
                }
            },
            {
                id: 'sci-sol-fc-4',
                question: {
                    en: '[Level G/P] What is the Meissner effect in superconductors and what is the magnetic susceptibility χ of a superconductor below T_c?',
                    pa: '[Level G/P] ਅਤਿ-ਚਾਲਕਾਂ ਵਿੱਚ ਮਾਈਸਨਰ ਪ੍ਰਭਾਵ (Meissner effect) ਕੀ ਹੈ ਅਤੇ T_c ਤੋਂ ਹੇਠਾਂ ਚੁੰਬਕੀ ਪ੍ਰਵਿਰਤੀ (χ) ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                    hi: '[Level G/P] अतिचालकों में माइसनर प्रभाव (Meissner effect) क्या है और T_c से नीचे चुंबकीय प्रवृत्ति (χ) कितनी होती है?'
                },
                answer: {
                    en: 'Complete expulsion of magnetic flux lines (B = 0) from the interior of a superconductor when cooled below T_c. It acts as a perfect diamagnet with magnetic susceptibility χ = -1 (and relative permeability μ_r = 0).',
                    pa: 'T_c ਤੋਂ ਹੇਠਾਂ ਠੰਢਾ ਕਰਨ ਤੇ ਅਤਿ-ਚਾਲਕ ਦੇ ਅੰਦਰੋਂ ਚੁੰਬਕੀ ਫਲਕਸ ਦਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਬਾਹਰ ਨਿਕਲਣਾ (B = 0)। ਇਹ χ = -1 ਦੇ ਨਾਲ ਸੰਪੂਰਨ ਪ੍ਰਤੀ-ਚੁੰਬਕੀ (Perfect diamagnet) ਬਣ ਜਾਂਦਾ ਹੈ।',
                    hi: 'T_c से नीचे ठंडा करने पर अतिचालक के भीतर से चुंबकीय फ्लक्स का पूर्ण निष्कासन (B = 0)। यह χ = -1 के साथ पूर्ण प्रतिचुंबकीय (Perfect diamagnet) बन जाता है।'
                }
            },
            {
                id: 'sci-sol-fc-5',
                question: {
                    en: '[Level G] When is a vector field A called (a) Solenoidal and (b) Irrotational (Conservative), and what are the eigenvalues of a Hermitian matrix?',
                    pa: '[Level G] ਕਿਸੇ ਵੈਕਟਰ ਖੇਤਰ A ਨੂੰ (a) ਸੋਲੇਨੋਇਡਲ ਅਤੇ (b) ਇਰੋਟੇਸ਼ਨਲ ਕਦੋਂ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਹਰਮਿਸ਼ੀਅਨ ਮੈਟ੍ਰਿਕਸ ਦੇ ਆਈਗਨ-ਮੁੱਲ ਕਿਹੋ ਜਿਹੇ ਹੁੰਦੇ ਹਨ?',
                    hi: '[Level G] किसी सदिश क्षेत्र A को (a) परिनालिकीय (Solenoidal) और (b) अघूर्णी (Irrotational) कब कहा जाता है, तथा हरमिशियन आव्यूह के आइगेन-मान कैसे होते हैं?'
                },
                answer: {
                    en: '(a) Solenoidal if divergence ∇·A = 0; (b) Irrotational (conservative) if curl ∇×A = 0. All eigenvalues of a Hermitian matrix (A† = A) are strictly REAL.',
                    pa: '(a) ਸੋਲੇਨੋਇਡਲ ਜੇਕਰ ∇·A = 0; (b) ਇਰੋਟੇਸ਼ਨਲ ਜੇਕਰ ∇×A = 0। ਹਰਮਿਸ਼ੀਅਨ ਮੈਟ੍ਰਿਕਸ (A† = A) ਦੇ ਸਾਰੇ ਆਈਗਨ-ਮੁੱਲ ਹਮੇਸ਼ਾ ਵਾਸਤਵਿਕ (Real) ਹੁੰਦੇ ਹਨ।',
                    hi: '(a) परिनालिकीय यदि ∇·A = 0; (b) अघूर्णी यदि ∇×A = 0। हरमिशियन आव्यूह (A† = A) के सभी आइगेन-मान सदैव वास्तविक (Real) होते हैं।'
                }
            }
        ]
    }
];
