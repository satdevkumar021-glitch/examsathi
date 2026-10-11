import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const MASTER_CADRE_SCIENCE_CHEMISTRY_BLUEPRINT_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. PHYSICAL CHEMISTRY I: MOLE CONCEPT, ATOMIC STRUCTURE, STATES OF MATTER,
    //    CHEMICAL BONDING, THERMODYNAMICS & EQUILIBRIUM (Level B -> I -> H -> G)
    // =========================================================================
    {
        topicId: 'sci-chem-physical-states-thermo-eq',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote:
                'Covers ERB Punjab Master Cadre Science Chemistry Official Headings: Basic principles of chemistry, Atomic structure, States of matter, Chemical bonding and molecular structure, Thermodynamics, and Equilibrium (Chemical & Ionic) in B -> I -> H -> G -> P progression.'
        },
        bookRefs: [
            {
                title: 'NCERT Chemistry Class XI (Part I)',
                author: 'NCERT',
                chapter: 'Chapters 1–7 (Basic Concepts, Structure of Atom, Bonding, States of Matter, Thermodynamics, Equilibrium)',
                relevance: 'Core foundation for Mole Concept, Quantum Numbers, VSEPR, MOT, Thermodynamics, and Ionic Equilibrium.'
            },
            {
                title: 'Principles of Physical Chemistry',
                author: 'Puri, Sharma & Pathania',
                chapter: 'Gaseous State, Chemical Thermodynamics & Ionic Equilibria',
                relevance: 'Graduation-level depth on van der Waals critical constants, Maxwell-Boltzmann speeds, Gibbs-Helmholtz equation, and salt hydrolysis.'
            }
        ],
        summary: {
            en: `### [Level B & I: Foundation — Class 6–10 Core]
1. **Laws of Chemical Combination:**
   - **Law of Conservation of Mass (Antoine Lavoisier, 1789):** Matter can neither be created nor destroyed in a chemical reaction (Total mass of reactants = Total mass of products).
   - **Law of Definite / Constant Proportions (Joseph Proust, 1799):** A pure chemical compound always contains the same elements combined together in the same fixed proportion by mass (e.g., pure H₂O always has H : O = **1 : 8** by mass).
   - **Law of Multiple Proportions (John Dalton, 1803):** When two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other bear a simple whole-number ratio (e.g., in CO and CO₂, oxygen masses combining with 12 g C are 16 g : 32 g = **1 : 2**).
   - **Gay-Lussac's Law of Gaseous Volumes (1808):** Gases react in simple whole-number volume ratios at constant T and P (e.g., H₂(1V) + Cl₂(1V) → 2HCl(2V), ratio **1 : 1 : 2**).
   - **Avogadro's Law (1811):** Equal volumes of all gases under the same temperature and pressure contain an equal number of molecules (V ∝ n).
2. **Mole Concept & Concentration Terms:**
   - **1 Mole** = **6.022 × 10²³** entities (Avogadro's number, N_A).
   - **Master Formula:** n = w / M = N / N_A = V_STP (in L) / 22.4 L (at 1 atm, 273.15 K; or 22.7 L at 1 bar STP).
   - **Limiting Reagent:** The reactant that gets completely consumed first in a reaction and limits the amount of product formed.
   | Concentration Term | Formula | Units | Temperature Dependence |
   |---|---|---|---|
   | **Molarity (M)** | Moles of solute / Volume of solution (L) | mol L⁻¹ (M) | **Temperature-dependent** (Volume changes with T) |
   | **Molality (m)** | Moles of solute / Mass of solvent (kg) | mol kg⁻¹ (m) | **Temperature-independent** (Mass is invariant) |
   | **Normality (N)** | Gram equivalents of solute / Volume (L) = **M × n-factor** | eq L⁻¹ (N) | **Temperature-dependent** |
   | **Mole Fraction (χ)** | n_A / (n_A + n_B); where **χ_A + χ_B = 1** | Dimensionless | **Temperature-independent** |

---

### [Level H: Senior Secondary — Class 11–12 Core]
1. **Atomic Structure & Quantum Mechanics:**
   - **Bohr's Model for One-Electron Species (H, He⁺, Li²⁺):**
     - Radius of n-th orbit: **r_n = 0.529 × (n² / Z) Å**
     - Velocity in n-th orbit: **v_n = 2.18 × 10⁶ × (Z / n) m s⁻¹**
     - Energy of electron: **E_n = −13.6 × (Z² / n²) eV/atom** = −2.18 × 10⁻¹⁸ × (Z² / n²) J
     - Rydberg Formula for Spectral Lines: **ν̄ = 1/λ = R_H × Z² × (1/n₁² − 1/n₂²)**, where R_H = 109,677 cm⁻¹. Series: **Lyman** (n₁=1, UV), **Balmer** (n₁=2, Visible), **Paschen** (n₁=3, IR), **Brackett** (n₁=4, IR), **Pfund** (n₁=5, IR). Total spectral lines from n₂ to n₁ = **(n₂ − n₁)(n₂ − n₁ + 1) / 2**.
   - **de Broglie Dual Nature (1924):** **λ = h / mv = h / p = h / √(2mE_k)** = h / √(2meV).
   - **Heisenberg's Uncertainty Principle (1927):** **Δx · Δp_x ≥ h / (4π)** or Δx · Δv_x ≥ h / (4πm).
   - **Four Quantum Numbers & Nodes:**
     - **Principal (n = 1, 2, 3...):** Shell size and energy; max electrons in shell = **2n²**; total orbitals = **n²**.
     - **Azimuthal / Subsidiary (l = 0 to n−1):** Subshell shape (0=s spherical, 1=p dumbbell, 2=d double-dumbbell, 3=f complex). Orbital angular momentum = **√[l(l+1)] · (h / 2π)** = √[l(l+1)] ℏ.
     - **Magnetic (m_l = −l to +l, total 2l+1 values):** Spatial orientation of orbitals.
     - **Spin (m_s = +½ or −½):** Spin angular momentum = **√[s(s+1)] ℏ = (√3 / 2) ℏ**.
     - **Nodes (Zero electron probability regions):** **Angular (planar) nodes = l** | **Radial (spherical) nodes = n − l − 1** | **Total nodes = n − 1**.
   - **Electronic Configuration Rules:**
     - **Aufbau (n + l) Rule:** Orbitals fill in order of increasing (n + l); for equal (n + l), lower n fills first.
     - **Pauli Exclusion Principle:** No two electrons in an atom can have the same set of all four quantum numbers.
     - **Hund's Rule of Maximum Multiplicity:** Pairing in degenerate orbitals (p, d, f) does not occur until each orbital is singly occupied with parallel spins.
     - **Half-filled & Fully-filled Exceptions:** **Cr (Z=24): [Ar] 3d⁵ 4s¹** (not 3d⁴ 4s²) and **Cu (Z=29): [Ar] 3d¹⁰ 4s¹** (not 3d⁹ 4s²) due to symmetrical distribution and high **exchange energy**.
2. **Chemical Bonding, VSEPR, Hybridization & MOT:**
   - **Fajan's Rules (Covalent Character in Ionic Bonds):** Covalent character increases with **small cation**, **large anion**, **high charge**, and **pseudo-noble gas configuration (18 e⁻)** (e.g., Covalent character: **LiCl > NaCl > KCl**; **AlCl₃ > MgCl₂ > NaCl**; **CuCl > NaCl**).
   - **Hybridization Formula:** Steric Number **H = ½ [V + M − C + A]** (V = valence e⁻ of central atom, M = monovalent atoms attached, C = cationic charge, A = anionic charge).
   | Steric No. & Hybridization | Bond Pairs (BP) + Lone Pairs (LP) | Molecular Geometry | Classic Exam Examples |
   |---|---|---|---|
   | **2 (sp)** | 2 BP + 0 LP | **Linear** (180°) | BeCl₂, CO₂, C₂H₂, HgCl₂ |
   | **3 (sp²)** | 3 BP + 0 LP / 2 BP + 1 LP | **Trigonal Planar** (120°) / **Bent** | BF₃, BCl₃, SO₃ / SO₂, O₃, SnCl₂ |
   | **4 (sp³)** | 4+0 / 3+1 / 2+2 | **Tetrahedral** (109.5°) / **Pyramidal** (107°) / **Bent** (104.5°) | CH₄, NH₄⁺ / NH₃, PCl₃ / H₂O, H₂S |
   | **5 (sp³d)** | 5+0 / 4+1 / 3+2 / 2+3 | **Trigonal Bipyramidal** / **See-Saw** / **T-shaped** / **Linear** | PCl₅ / **SF₄** / **ClF₃, BrF₃** / **XeF₂, I₃⁻** |
   | **6 (sp³d²)** | 6+0 / 5+1 / 4+2 | **Octahedral** / **Square Pyramidal** / **Square Planar** | SF₆ / **BrF₅, IF₅** / **XeF₄, [ICl₄]⁻** |
   | **7 (sp³d³)** | 7+0 / 6+1 | **Pentagonal Bipyramidal** / **Distorted Octahedral** | **IF₇** / **XeF₆** |
   - **Molecular Orbital Theory (MOT):**
     - **Bond Order (B.O.) = ½ (N_b − N_a)** (where N_b = bonding e⁻, N_a = antibonding e⁻). Bond length ∝ 1 / B.O.; Bond stability ∝ B.O.
     - **Paramagnetic two-atom molecules:** **B₂ (10 e⁻, π2p_x¹ = π2p_y¹, B.O. = 1)** and **O₂ (16 e⁻, π*2p_x¹ = π*2p_y¹, B.O. = 2)** have 2 unpaired electrons each! **C₂ (12 e⁻)** is diamagnetic with B.O. = 2 (both bonds are π bonds!).
     - **Dioxygen Species Bond Order & Stability:** **O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ superoxide (1.5) > O₂²⁻ peroxide (1.0)**. (Bond length order is the exact reverse: O₂²⁻ > O₂⁻ > O₂ > O₂⁺).

---

### [Level G & P: Graduation & Postgraduate Mastery]
1. **States of Matter: Real Gases, van der Waals Equation & Critical Constants:**
   - **Compressibility Factor:** **Z = PV / nRT**. For ideal gas, **Z = 1**; at low P, **Z < 1** (attractive forces dominate, easy liquefaction); at high P, **Z > 1** (repulsive forces dominate; **H₂ and He always show Z > 1** at 273 K).
   - **van der Waals Equation for n moles:** **(P + a·n² / V²)(V − nb) = nRT**
     - Constant **'a'** measures magnitude of intermolecular attractive forces (Units: **atm L² mol⁻²**). Higher 'a' → easier liquefaction (SO₂ > NH₃ > CO₂ > CH₄ > H₂ > He).
     - Constant **'b'** measures excluded molar volume / molecular size (**b = 4 × N_A × V_molecule**; Units: **L mol⁻¹**).
   - **Critical Constants & Boyle Temperature:**
     - **V_c = 3b** | **P_c = a / (27b²)** | **T_c = 8a / (27Rb)** | **Boyle Temperature T_B = a / (Rb)**
     - **Critical Compressibility Factor:** **Z_c = (P_c · V_c) / (R · T_c) = 3 / 8 = 0.375** (Universal constant for all van der Waals gases).
   - **Molecular Speeds:** **u_mp : u_avg : u_rms = √(2RT/M) : √(8RT/πM) : √(3RT/M) = 1 : 1.128 : 1.224**.
2. **Chemical Thermodynamics & Thermochemistry:**
   - **First Law:** **ΔU = q + w**, where IUPAC expansion work **w_rev = −2.303 nRT log(V₂/V₁) = −2.303 nRT log(P₁/P₂)**.
   - **Enthalpy-Internal Energy Relation:** **ΔH = ΔU + Δn_g RT**, where Δn_g = (moles of gaseous products − moles of gaseous reactants).
   - **Heat Capacities:** **C_P − C_V = R** (for 1 mole ideal gas) and **γ = C_P / C_V** (Monoatomic γ = 5/3 = **1.66**; Diatomic γ = 7/5 = **1.40**; Polyatomic γ = 4/3 = **1.33**).
   - **Gibbs Free Energy & Spontaneity:** **ΔG = ΔH − TΔS** and **ΔG° = −RT ln K_eq = −2.303 RT log K_eq**.
   | ΔH | ΔS | ΔG = ΔH − TΔS | Spontaneity Condition |
   |---|---|---|---|
   | **− (Exothermic)** | **+ (Disorder increases)** | Always **−** | **Spontaneous at all temperatures** |
   | **+ (Endothermic)** | **− (Disorder decreases)** | Always **+** | **Non-spontaneous at all temperatures** |
   | **− (Exothermic)** | **− (Disorder decreases)** | **−** at low T | **Spontaneous only at low T** (T < ΔH/ΔS) |
   | **+ (Endothermic)** | **+ (Disorder increases)** | **−** at high T | **Spontaneous only at high T** (T > ΔH/ΔS) |
3. **Chemical & Ionic Equilibrium:**
   - **Relation between K_p and K_c:** **K_p = K_c (RT)^(Δn_g)**. When Δn_g = 0 (e.g., H₂ + I₂ ⇌ 2HI), **K_p = K_c**.
   - **Le Chatelier's Principle:**
     - **Haber Process:** N₂(g) + 3H₂(g) ⇌ 2NH₃(g); ΔH = −92.4 kJ/mol, Δn_g = −2 → Favoured by **High P (200 atm)**, **Low/Optimum T (700 K)**, **Fe catalyst + Mo promoter** (or K₂O + Al₂O₃).
     - **Inert Gas Addition:** At **constant Volume**, no shift in equilibrium; at **constant Pressure**, equilibrium shifts towards the side with **more gaseous moles**.
   - **Acid-Base Concepts:**
     - **Arrhenius:** Acid gives H⁺ in water; Base gives OH⁻ in water.
     - **Brønsted-Lowry:** Acid = proton (H⁺) donor; Base = proton (H⁺) acceptor. Conjugate acid-base pair differs by a single **H⁺** (e.g., H₂PO₄⁻ has conjugate acid H₃PO₄ and conjugate base HPO₄²⁻).
     - **Lewis:** Acid = electron-pair acceptor (BF₃, AlCl₃, FeCl₃, Ag⁺, CO₂, SO₃); Base = electron-pair donor (NH₃, R-OH, H₂O, CN⁻).
   - **Ostwald's Dilution Law:** For weak electrolyte, **α = √(K_a / C)** and **[H⁺] = Cα = √(K_a · C)**.
   - **Henderson-Hasselbalch Buffer Equation:**
     - Acidic buffer (CH₃COOH + CH₃COONa): **pH = pK_a + log([Salt] / [Acid])**
     - Basic buffer (NH₄OH + NH₄Cl): **pOH = pK_b + log([Salt] / [Base])**
   - **Salt Hydrolysis pH Formulas (at 298 K):**
     - Weak Acid + Strong Base (CH₃COONa): **pH = 7 + ½ (pK_a + log C)** (Basic, pH > 7)
     - Strong Acid + Weak Base (NH₄Cl): **pH = 7 − ½ (pK_b + log C)** (Acidic, pH < 7)
     - Weak Acid + Weak Base (CH₃COONH₄): **pH = 7 + ½ (pK_a − pK_b)** (**Independent of concentration C!**)
   - **Solubility Product (K_sp) & Molar Solubility (S):**
     - **AB type** (AgCl, BaSO₄): **K_sp = S²** → S = √K_sp
     - **AB₂ or A₂B type** (PbCl₂, CaF₂, Ag₂CrO₄): **K_sp = 4S³** → S = (K_sp / 4)^(1/3)
     - **AB₃ type** (Al(OH)₃, Fe(OH)₃): **K_sp = 27S⁴** → S = (K_sp / 27)^(1/4)
     - **A₂B₃ or A₃B₂ type** (Bi₂S₃, Ca₃(PO₄)₂): **K_sp = 108S⁵** → S = (K_sp / 108)^(1/5)`,
            pa: `### [Level B & I: Foundation — Class 6–10 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **ਰਸਾਇਣਕ ਸੰਯੋਜਨ ਦੇ ਨਿਯਮ (Laws of Chemical Combination):**
   - **ਪੁੰਜ ਸੁਰੱਖਿਅਣ ਦਾ ਨਿਯਮ (Lavoisier, 1789):** ਰਸਾਇਣਕ ਕਿਰਿਆ ਵਿੱਚ ਪਦਾਰਥ ਨਾ ਪੈਦਾ ਹੁੰਦਾ ਹੈ ਅਤੇ ਨਾ ਹੀ ਨਸ਼ਟ (ਅਭਿਕਾਰਕਾਂ ਦਾ ਕੁੱਲ ਪੁੰਜ = ਉਤਪਾਦਾਂ ਦਾ ਕੁੱਲ ਪੁੰਜ)।
   - **ਸਥਿਰ ਅਨੁਪਾਤ ਦਾ ਨਿਯਮ (Proust, 1799):** ਸ਼ੁੱਧ ਯੋਗਿਕ ਵਿੱਚ ਤੱਤਾਂ ਦੇ ਪੁੰਜ ਦਾ ਅਨੁਪਾਤ ਹਮੇਸ਼ਾ ਨਿਸ਼ਚਿਤ ਰਹਿੰਦਾ ਹੈ (ਜਿਵੇਂ H₂O ਵਿੱਚ H : O = **1 : 8**)।
   - **ਗੁਣਿਤ ਅਨੁਪਾਤ ਦਾ ਨਿਯਮ (Dalton, 1803):** CO ਅਤੇ CO₂ ਵਿੱਚ 12 g ਕਾਰਬਨ ਨਾਲ ਜੁੜਨ ਵਾਲੀ ਆਕਸੀਜਨ ਦਾ ਅਨੁਪਾਤ 16 : 32 = **1 : 2** ਹੁੰਦਾ ਹੈ।
   - **ਐਵੋਗਾਡਰੋ ਦਾ ਨਿਯਮ (1811):** ਸਮਾਨ ਤਾਪਮਾਨ ਅਤੇ ਦਬਾਅ 'ਤੇ ਸਾਰੀਆਂ ਗੈਸਾਂ ਦੇ ਬਰਾਬਰ ਆਇਤਨ ਵਿੱਚ ਅਣੂਆਂ ਦੀ ਗਿਣਤੀ ਬਰਾਬਰ ਹੁੰਦੀ ਹੈ (V ∝ n)।
2. **ਮੋਲ ਸੰਕਲਪ ਅਤੇ ਸੰਘਣਤਾ (Mole Concept & Concentration):**
   - **1 ਮੋਲ = 6.022 × 10²³ ਕਣ**; **n = w / M = N / N_A = V_STP / 22.4 L**।
   - **ਮੋਲਰਤਾ (Molarity, M = n / V_L):** ਤਾਪਮਾਨ 'ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ।
   - **ਮੋਲਲਤਾ (Molality, m = n / W_kg)** ਅਤੇ **ਮੋਲ ਅੰਸ਼ (Mole Fraction, χ):** ਤਾਪਮਾਨ ਤੋਂ ਸੁਤੰਤਰ (Temperature-independent) ਹਨ ਕਿਉਂਕਿ ਪੁੰਜ ਤਾਪਮਾਨ ਨਾਲ ਨਹੀਂ ਬਦਲਦਾ।

---

### [Level H: Senior Secondary — Class 11–12 ਮੱਧ ਅਤੇ ਉੱਚ ਪੱਧਰ]
1. **ਪਰਮਾਣੂ ਬਣਤਰ ਅਤੇ ਕੁਆਂਟਮ ਸੰਖਿਆਵਾਂ (Atomic Structure):**
   - **ਬੋਹਰ ਮਾਡਲ:** ਅਰਧ-ਵਿਆਸ **r_n = 0.529 × (n² / Z) Å** ਅਤੇ ਊਰਜਾ **E_n = −13.6 × (Z² / n²) eV**।
   - **ਡੀ-ਬ੍ਰੋਗਲੀ ਸਮੀਕਰਨ:** **λ = h / mv = h / √(2mE_k)**; **ਹਾਈਜ਼ਨਬਰਗ ਅਨਿਸ਼ਚਿਤਤਾ ਸਿਧਾਂਤ:** **Δx · Δp_x ≥ h / 4π**।
   - **ਨੋਡਜ਼ (Nodes):** **ਕੋਣੀ ਨੋਡ (Angular nodes) = l** | **ਰੇਡੀਅਲ ਨੋਡ (Radial nodes) = n − l − 1** | **ਕੁੱਲ ਨੋਡ = n − 1**।
   - **ਅਪਵਾਦ (Exceptions):** **Cr (Z=24): [Ar] 3d⁵ 4s¹** ਅਤੇ **Cu (Z=29): [Ar] 3d¹⁰ 4s¹** (ਅੱਧੇ-ਭਰੇ ਅਤੇ ਪੂਰੇ-ਭਰੇ d-ਆਰਬਿਟਲਾਂ ਦੀ ਵਾਧੂ ਸਥਿਰਤਾ ਕਾਰਨ)।
2. **ਰਸਾਇਣਕ ਬੰਧਨ, VSEPR ਅਤੇ MOT:**
   - **VSEPR ਆਕਾਰ:** **SF₄** (sp³d, 4 BP + 1 LP → **See-Saw**), **ClF₃** (sp³d, 3 BP + 2 LP → **T-shaped**), **XeF₂ / I₃⁻** (sp³d, 2 BP + 3 LP → **Linear**), **XeF₄** (sp³d², 4 BP + 2 LP → **Square Planar**), **IF₇** (sp³d³ → **Pentagonal Bipyramidal**)।
   - **ਅਣੂ ਆਰਬਿਟਲ ਸਿਧਾਂਤ (MOT):** **Bond Order = ½ (N_b − N_a)**। **O₂ (16 e⁻)** ਅਤੇ **B₂ (10 e⁻)** ਪੈਰਾਮੈਗਨੈਟਿਕ (ਅਣযুগਮਿਤ ਇਲੈਕਟ੍ਰਾਨ) ਹਨ।
   - **ਆਕਸੀਜਨ ਸਪੀਸੀਜ਼ ਦਾ ਬਾਂਡ ਆਰਡਰ ਕ੍ਰਮ:** **O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0)**।

---

### [Level G & P: Graduation & Postgraduate ਪੱਧਰ]
1. **ਪਦਾਰਥ ਦੀਆਂ ਅਵਸਥਾਵਾਂ (States of Matter):**
   - **ਵਾਨ ਡਰ ਵਾਲਸ ਸਮੀਕਰਨ:** **(P + a·n²/V²)(V − nb) = nRT**।
   - **ਕ੍ਰਾਂਤੀਕਾਰੀ ਸਥਿਰਾਂਕ (Critical Constants):** **V_c = 3b**, **P_c = a / (27b²)**, **T_c = 8a / (27Rb)**, ਅਤੇ **Z_c = (P_c·V_c)/(R·T_c) = 3/8 = 0.375**।
2. **ਥਰਮੋਡਾਇਨਾਮਿਕਸ ਅਤੇ ਸੰਤੁਲਨ (Thermodynamics & Equilibrium):**
   - **ΔH = ΔU + Δn_g RT** ਅਤੇ **ΔG = ΔH − TΔS = −2.303 RT log K_eq**।
   - **K_p = K_c (RT)^(Δn_g)**।
   - **ਹੈਂਡਰਸਨ-ਹਾਸਲਬਾਲਚ ਬਫਰ ਸਮੀਕਰਨ:** **pH = pK_a + log([Salt]/[Acid])**।
   - **ਘੁਲਣਸ਼ੀਲਤਾ ਗੁਣਨਫਲ (K_sp):** AB ਲਈ **K_sp = S²**; AB₂ ਲਈ **K_sp = 4S³**; AB₃ ਲਈ **K_sp = 27S⁴**; A₂B₃ ਲਈ **K_sp = 108S⁵**।`,
            hi: `### [Level B & I: Foundation — Class 6–10 आधारभूत स्तर]
1. **रासायनिक संयोजन के नियम (Laws of Chemical Combination):**
   - **द्रव्यमान संरक्षण का नियम (Lavoisier, 1789):** रासायनिक अभिक्रिया में द्रव्यमान न तो उत्पन्न होता है और न ही नष्ट (अभिकारकों का कुल द्रव्यमान = उत्पादों का कुल द्रव्यमान)।
   - **स्थिर अनुपात का नियम (Proust, 1799):** शुद्ध यौगिक में तत्वों के द्रव्यमान का अनुपात सदैव निश्चित होता है (जैसे H₂O में H : O = **1 : 8**)।
   - **गुणित अनुपात का नियम (Dalton, 1803):** CO तथा CO₂ में 12 g कार्बन से जुड़ने वाली ऑक्सीजन का अनुपात 16 : 32 = **1 : 2** होता है।
   - **आवोगाद्रो का नियम (1811):** समान ताप व दाब पर सभी गैसों के समान आयतन में अणुओं की संख्या समान होती है (V ∝ n)।
2. **मोल संकल्पना एवं सांद्रता पद (Mole Concept & Concentration):**
   - **1 मोल = 6.022 × 10²³ कण**; **n = w / M = N / N_A = V_STP / 22.4 L**।
   - **मोलरता (Molarity, M = n / V_L):** ताप पर निर्भर करती है।
   - **मोललता (Molality, m = n / W_kg)** तथा **मोल अंश (Mole Fraction, χ):** ताप से स्वतंत्र (Temperature-independent) हैं क्योंकि द्रव्यमान ताप के साथ नहीं बदलता।

---

### [Level H: Senior Secondary — Class 11–12 उच्च माध्यमिक स्तर]
1. **परमाणु संरचना एवं क्वांटम संख्याएँ (Atomic Structure):**
   - **बोर मॉडल:** त्रिज्या **r_n = 0.529 × (n² / Z) Å** तथा ऊर्जा **E_n = −13.6 × (Z² / n²) eV**।
   - **डी-ब्रोग्ली समीकरण:** **λ = h / mv = h / √(2mE_k)**; **हाइजेनबर्ग अनिश्चितता सिद्धांत:** **Δx · Δp_x ≥ h / 4π**।
   - **नोड्स (Nodes):** **कोणीय नोड (Angular nodes) = l** | **त्रिज्यीय नोड (Radial nodes) = n − l − 1** | **कुल नोड = n − 1**।
   - **अपवाद (Exceptions):** **Cr (Z=24): [Ar] 3d⁵ 4s¹** तथा **Cu (Z=29): [Ar] 3d¹⁰ 4s¹** (अर्ध-पूरित व पूर्ण-पूरित d-कक्षकों के अतिरिक्त स्थायित्व व विनिमय ऊर्जा के कारण)।
2. **रासायनिक आबंधन, VSEPR एवं MOT:**
   - **VSEPR ज्यामिति:** **SF₄** (sp³d, 4 BP + 1 LP → **सी-सॉ / See-Saw**), **ClF₃** (sp³d, 3 BP + 2 LP → **T-आकृति**), **XeF₂ / I₃⁻** (sp³d, 2 BP + 3 LP → **रेखीय / Linear**), **XeF₄** (sp³d², 4 BP + 2 LP → **वर्ग समतलीय / Square Planar**), **IF₇** (sp³d³ → **पंचकोणीय द्विपिरामिडी**)।
   - **अणु कक्षक सिद्धांत (MOT):** **आबंध कोटि (Bond Order) = ½ (N_b − N_a)**। **O₂ (16 e⁻)** तथा **B₂ (10 e⁻)** अनुचुंबकीय (Paramagnetic) हैं।
   - **ऑक्सीजन स्पीशीज की आबंध कोटि का क्रम:** **O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0)**।

---

### [Level G & P: Graduation & Postgraduate स्नातक एवं स्नातकोत्तर स्तर]
1. **द्रव्य की अवस्थाएँ (States of Matter):**
   - **वान डर वाल्स समीकरण:** **(P + a·n²/V²)(V − nb) = nRT**।
   - **क्रांतिक स्थिरांक (Critical Constants):** **V_c = 3b**, **P_c = a / (27b²)**, **T_c = 8a / (27Rb)**, तथा **Z_c = (P_c·V_c)/(R·T_c) = 3/8 = 0.375**।
2. **ऊष्मागतिकी एवं साम्यावस्था (Thermodynamics & Equilibrium):**
   - **ΔH = ΔU + Δn_g RT** तथा **ΔG = ΔH − TΔS = −2.303 RT log K_eq**।
   - **K_p = K_c (RT)^(Δn_g)**।
   - **हेंडरसन-हासेलबाल्क बफर समीकरण:** **pH = pK_a + log([Salt]/[Acid])**।
   - **विलेयता गुणनफल (K_sp):** AB के लिए **K_sp = S²**; AB₂ के लिए **K_sp = 4S³**; AB₃ के लिए **K_sp = 27S⁴**; A₂B₃ के लिए **K_sp = 108S⁵**।`
        },
        keyNotes: {
            en: [
                'Molality (m), Mole Fraction (χ), and Mass Percentage (% w/w) are temperature-independent because they involve only mass, whereas Molarity (M) and Normality (N) decrease with increasing temperature.',
                'In any atomic orbital (n, l), Radial Nodes = n − l − 1, Angular Nodes = l, and Total Nodes = n − 1 (e.g., for 3p orbital: n=3, l=1 -> 1 radial node and 1 angular node).',
                'According to Molecular Orbital Theory (MOT), O₂ (16 e⁻) and B₂ (10 e⁻) are paramagnetic with 2 unpaired electrons each; Bond Order of dioxygen species follows: O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0).',
                'For a van der Waals real gas, critical temperature T_c = 8a/(27Rb), critical pressure P_c = a/(27b²), critical volume V_c = 3b, Boyle temperature T_B = a/(Rb), and critical compressibility factor Z_c = 3/8 = 0.375.',
                'A reaction is spontaneous at all temperatures when ΔH < 0 and ΔS > 0; at equilibrium, ΔG = 0 and ΔG° = −2.303 RT log K_eq.',
                'For salt of a weak acid and weak base (e.g., CH₃COONH₄), pH = 7 + ½(pK_a − pK_b), which is completely independent of the molar concentration C of the salt.'
            ],
            pa: [
                'ਮੋਲਲਤਾ (m), ਮੋਲ ਅੰਸ਼ (χ) ਅਤੇ ਪੁੰਜ ਪ੍ਰਤੀਸ਼ਤ (% w/w) ਤਾਪਮਾਨ ਤੋਂ ਸੁਤੰਤਰ ਹਨ, ਜਦਕਿ ਮੋਲਰਤਾ (M) ਅਤੇ ਨਾਰਮਲਤਾ (N) ਤਾਪਮਾਨ ਨਾਲ ਬਦਲਦੀਆਂ ਹਨ।',
                'ਕਿਸੇ ਵੀ ਆਰਬਿਟਲ ਲਈ: ਰੇਡੀਅਲ ਨੋਡ = n − l − 1, ਕੋਣੀ ਨੋਡ = l, ਅਤੇ ਕੁੱਲ ਨੋਡ = n − 1 (ਜਿਵੇਂ 3p ਲਈ n=3, l=1 -> 1 ਰੇਡੀਅਲ ਨੋਡ ਅਤੇ 1 ਕੋਣੀ ਨੋਡ)।',
                'MOT ਅਨੁਸਾਰ O₂ (16 e⁻) ਅਤੇ B₂ (10 e⁻) ਪੈਰਾਮੈਗਨੈਟਿਕ ਹਨ; ਬਾਂਡ ਆਰਡਰ ਕ੍ਰਮ: O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0)।',
                'ਵਾਨ ਡਰ ਵਾਲਸ ਗੈਸ ਲਈ T_c = 8a/(27Rb), P_c = a/(27b²), V_c = 3b, T_B = a/(Rb) ਅਤੇ Z_c = 3/8 = 0.375 ਹੁੰਦਾ ਹੈ।',
                'ਜਦੋਂ ΔH < 0 ਅਤੇ ΔS > 0 ਹੋਵੇ ਤਾਂ ਕਿਰਿਆ ਹਰ ਤਾਪਮਾਨ ਉੱਤੇ ਸਵੈ-ਚਾਲਿਤ (Spontaneous) ਹੁੰਦੀ ਹੈ; ਸੰਤੁਲਨ ਉੱਤੇ ΔG = 0 ਅਤੇ ΔG° = −2.303 RT log K_eq।',
                'ਕਮਜ਼ੋਰ ਤੇਜ਼ਾਬ ਅਤੇ ਕਮਜ਼ੋਰ ਖਾਰ ਦੇ ਲੂਣ (ਜਿਵੇਂ CH₃COONH₄) ਦਾ pH = 7 + ½(pK_a − pK_b) ਹੁੰਦਾ ਹੈ, ਜੋ ਘੋਲ ਦੀ ਸੰਘਣਤਾ (C) ਉੱਤੇ ਨਿਰਭਰ ਨਹੀਂ ਕਰਦਾ।'
            ],
            hi: [
                'मोललता (m), मोल अंश (χ) तथा द्रव्यमान प्रतिशत (% w/w) ताप से स्वतंत्र होते हैं, जबकि मोलरता (M) और नॉर्मलता (N) ताप पर निर्भर करते हैं।',
                'किसी भी कक्षक के लिए: त्रिज्यीय नोड = n − l − 1, कोणीय नोड = l, तथा कुल नोड = n − 1 (जैसे 3p के लिए n=3, l=1 -> 1 त्रिज्यीय नोड व 1 कोणीय नोड)।',
                'MOT के अनुसार O₂ (16 e⁻) और B₂ (10 e⁻) अनुचुंबकीय (Paramagnetic) हैं; आबंध कोटि क्रम: O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0)।',
                'वान डर वाल्स गैस के लिए T_c = 8a/(27Rb), P_c = a/(27b²), V_c = 3b, T_B = a/(Rb) तथा Z_c = 3/8 = 0.375 होता है।',
                'जब ΔH < 0 तथा ΔS > 0 हो, तो अभिक्रिया सभी तापों पर स्वतः प्रवर्तित (Spontaneous) होती है; साम्यावस्था पर ΔG = 0 तथा ΔG° = −2.303 RT log K_eq।',
                'दुर्बल अम्ल एवं दुर्बल क्षार के लवण (जैसे CH₃COONH₄) का pH = 7 + ½(pK_a − pK_b) होता है, जो सांद्रता (C) से पूर्णतः स्वतंत्र होता है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Quantum Nodes Shortcut: Radial = n − l − 1 | Angular = l | Total = n − 1 | Orbital Angular Momentum = √[l(l+1)] ℏ.',
                'VSEPR High-Yield Shapes: SF₄ = See-Saw (1 LP) | ClF₃ = T-shaped (2 LP) | XeF₂ & I₃⁻ = Linear (3 LP) | BrF₅ = Square Pyramidal (1 LP) | XeF₄ = Square Planar (2 LP).',
                'Isoelectronic & Bond Order: 14 e⁻ species (N₂, CO, NO⁺, CN⁻) all have Bond Order = 3.0 and are diamagnetic.',
                'Thermodynamics Relations: ΔH = ΔU + Δn_g RT | C_P − C_V = R | ΔG = ΔH − TΔS | K_p = K_c(RT)^(Δn_g).',
                'Solubility Product (K_sp) Table: AB → S² | AB₂/A₂B → 4S³ | AB₃ → 27S⁴ | A₂B₃/A₃B₂ → 108S⁵.'
            ],
            pa: [
                'ਨੋਡਜ਼ ਸ਼ਾਰਟਕੱਟ: ਰੇਡੀਅਲ = n − l − 1 | ਕੋਣੀ = l | ਕੁੱਲ = n − 1 | ਆਰਬਿਟਲ ਕੋਣੀ ਸੰਵੇਗ = √[l(l+1)] ℏ।',
                'VSEPR ਆਕਾਰ: SF₄ = See-Saw (1 LP) | ClF₃ = T-shaped (2 LP) | XeF₂ & I₃⁻ = Linear (3 LP) | XeF₄ = Square Planar (2 LP)।',
                '14 ਇਲੈਕਟ੍ਰਾਨ ਵਾਲੀਆਂ ਸਪੀਸੀਜ਼ (N₂, CO, NO⁺, CN⁻) ਦਾ ਬਾਂਡ ਆਰਡਰ = 3.0 ਅਤੇ ਇਹ ਡਾਇਆਮੈਗਨੈਟਿਕ ਹਨ।',
                'ਥਰਮੋਡਾਇਨਾਮਿਕਸ: ΔH = ΔU + Δn_g RT | C_P − C_V = R | ΔG = ΔH − TΔS | K_p = K_c(RT)^(Δn_g)।',
                'K_sp ਸਬੰਧ: AB → S² | AB₂/A₂B → 4S³ | AB₃ → 27S⁴ | A₂B₃/A₃B₂ → 108S⁵।'
            ],
            hi: [
                'नोड्स शॉर्टकट: त्रिज्यीय = n − l − 1 | कोणीय = l | कुल = n − 1 | कक्षीय कोणीय संवेग = √[l(l+1)] ℏ।',
                'VSEPR ज्यामिति: SF₄ = सी-सॉ (1 LP) | ClF₃ = T-आकृति (2 LP) | XeF₂ व I₃⁻ = रेखीय (3 LP) | XeF₄ = वर्ग समतलीय (2 LP)।',
                '14 इलेक्ट्रॉन वाली स्पीशीज (N₂, CO, NO⁺, CN⁻) की आबंध कोटि = 3.0 होती है और ये प्रतिचुंबकीय हैं।',
                'ऊष्मागतिकी सूत्र: ΔH = ΔU + Δn_g RT | C_P − C_V = R | ΔG = ΔH − TΔS | K_p = K_c(RT)^(Δn_g)।',
                'K_sp संबंध: AB → S² | AB₂/A₂B → 4S³ | AB₃ → 27S⁴ | A₂B₃/A₃B₂ → 108S⁵।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: At chemical equilibrium, ΔG° (standard Gibbs energy change) is zero. Correction: At equilibrium, instantaneous ΔG = 0, whereas ΔG° = −2.303 RT log K_eq (ΔG° is zero only when K_eq = 1).',
                'Misconception: Adding an inert gas (like Argon) always shifts a gaseous equilibrium. Correction: Adding an inert gas at constant volume causes NO shift in equilibrium because partial pressures remain unchanged; at constant pressure, it shifts towards the side with more gaseous moles.',
                'Misconception: The pH of a 10⁻⁸ M HCl solution is 8 (basic). Correction: An acid can never have pH > 7 at 25°C; including [H⁺] from water auto-ionization (10⁻⁷ M), total [H⁺] ≈ 1.05 × 10⁻⁷ M, giving pH = 6.98.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਰਸਾਇਣਕ ਸੰਤੁਲਨ ਉੱਤੇ ਮਿਆਰੀ ਗਿਬਸ ਊਰਜਾ (ΔG°) ਸਿਫ਼ਰ ਹੁੰਦੀ ਹੈ। ਸੁਧਾਰ: ਸੰਤੁਲਨ ਉੱਤੇ ΔG = 0 ਹੁੰਦਾ ਹੈ, ਜਦਕਿ ΔG° = −2.303 RT log K_eq ਹੁੰਦਾ ਹੈ (ΔG° ਸਿਰਫ਼ ਉਦੋਂ ਸਿਫ਼ਰ ਹੁੰਦਾ ਹੈ ਜਦੋਂ K_eq = 1 ਹੋਵੇ)।',
                'ਭੁਲੇਖਾ: ਅਕਿਰਿਆਸ਼ੀਲ ਗੈਸ (Inert gas) ਮਿਲਾਉਣ ਨਾਲ ਸੰਤੁਲਨ ਹਮੇਸ਼ਾ ਬਦਲਦਾ ਹੈ। ਸੁਧਾਰ: ਸਥਿਰ ਆਇਤਨ (Constant Volume) ਉੱਤੇ ਅਕਿਰਿਆਸ਼ੀਲ ਗੈਸ ਮਿਲਾਉਣ ਨਾਲ ਸੰਤੁਲਨ ਵਿੱਚ ਕੋਈ ਬਦਲਾਅ ਨਹੀਂ ਹੁੰਦਾ; ਸਥਿਰ ਦਬਾਅ ਉੱਤੇ ਇਹ ਵੱਧ ਗੈਸੀ ਮੋਲਾਂ ਵਾਲੀ ਦਿਸ਼ਾ ਵਿੱਚ ਜਾਂਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: 10⁻⁸ M HCl ਘੋਲ ਦਾ pH 8 ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਤੇਜ਼ਾਬੀ ਘੋਲ ਦਾ pH 25°C ਉੱਤੇ ਕਦੇ ਵੀ 7 ਤੋਂ ਵੱਧ ਨਹੀਂ ਹੋ ਸਕਦਾ; ਪਾਣੀ ਦੇ H⁺ (10⁻⁷ M) ਨੂੰ ਜੋੜ ਕੇ pH ≈ 6.98 ਆਉਂਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: रासायनिक साम्यावस्था पर मानक गिब्स ऊर्जा परिवर्तन (ΔG°) शून्य होता है। सुधार: साम्यावस्था पर ΔG = 0 होता है, जबकि ΔG° = −2.303 RT log K_eq होता है (ΔG° केवल तभी शून्य होता है जब K_eq = 1 हो)।',
                'भ्रांति: अक्रिय गैस (Inert gas) मिलाने पर साम्य सदैव विस्थापित होता है। सुधार: स्थिर आयतन (Constant Volume) पर अक्रिय गैस मिलाने से साम्यावस्था पर कोई प्रभाव नहीं पड़ता; स्थिर दाब पर साम्य अधिक गैसीय मोलों की दिशा में खिसकता है।',
                'भ्रांति: 10⁻⁸ M HCl विलयन का pH मान 8 होता है। सुधार: 25°C पर अम्लीय विलयन का pH कभी 7 से अधिक नहीं हो सकता; जल से प्राप्त H⁺ (10⁻⁷ M) को जोड़ने पर pH ≈ 6.98 होता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Calculate the number of radial nodes, angular nodes, and total nodes in a 4d orbital, and find the orbital angular momentum of an electron in it.',
                    pa: '4d ਆਰਬਿਟਲ ਵਿੱਚ ਰੇਡੀਅਲ ਨੋਡ, ਕੋਣੀ ਨੋਡ ਅਤੇ ਕੁੱਲ ਨੋਡਜ਼ ਦੀ ਗਿਣਤੀ ਪਤਾ ਕਰੋ, ਅਤੇ ਇਸ ਵਿੱਚ ਇਲੈਕਟ੍ਰਾਨ ਦਾ ਆਰਬਿਟਲ ਕੋਣੀ ਸੰਵੇਗ ਕੱਢੋ।',
                    hi: '4d कक्षक में त्रिज्यीय नोड, कोणीय नोड तथा कुल नोड्स की संख्या ज्ञात कीजिए, तथा इसमें उपस्थित इलेक्ट्रॉन का कक्षीय कोणीय संवेग बताइए।'
                },
                solutionSteps: {
                    en: [
                        'For a 4d orbital, principal quantum number n = 4 and azimuthal quantum number l = 2 (since s=0, p=1, d=2, f=3).',
                        'Angular nodes = l = 2.',
                        'Radial (spherical) nodes = n − l − 1 = 4 − 2 − 1 = 1.',
                        'Total nodes = n − 1 = 4 − 1 = 3.',
                        'Orbital angular momentum = √[l(l + 1)] · (h / 2π) = √[2(2 + 1)] ℏ = √6 ℏ.'
                    ],
                    pa: [
                        '4d ਆਰਬਿਟਲ ਲਈ n = 4 ਅਤੇ l = 2 ਹੈ।',
                        'ਕੋਣੀ ਨੋਡ (Angular nodes) = l = 2।',
                        'ਰੇਡੀਅਲ ਨੋਡ (Radial nodes) = n − l − 1 = 4 − 2 − 1 = 1।',
                        'ਕੁੱਲ ਨੋਡ = n − 1 = 3।',
                        'ਆਰਬਿਟਲ ਕੋਣੀ ਸੰਵੇਗ = √[l(l + 1)] ℏ = √[2 × 3] ℏ = √6 ℏ।'
                    ],
                    hi: [
                        '4d कक्षक के लिए n = 4 तथा l = 2 है।',
                        'कोणीय नोड (Angular nodes) = l = 2।',
                        'त्रिज्यीय नोड (Radial nodes) = n − l − 1 = 4 − 2 − 1 = 1।',
                        'कुल नोड = n − 1 = 3।',
                        'कक्षीय कोणीय संवेग = √[l(l + 1)] ℏ = √[2 × 3] ℏ = √6 ℏ।'
                    ]
                },
                finalAnswer: {
                    en: 'Radial nodes = 1, Angular nodes = 2, Total nodes = 3; Orbital angular momentum = √6 (h/2π).',
                    pa: 'ਰੇਡੀਅਲ ਨੋਡ = 1, ਕੋਣੀ ਨੋਡ = 2, ਕੁੱਲ ਨੋਡ = 3; ਆਰਬਿਟਲ ਕੋਣੀ ਸੰਵੇਗ = √6 (h/2π)।',
                    hi: 'त्रिज्यीय नोड = 1, कोणीय नोड = 2, कुल नोड = 3; कक्षीय कोणीय संवेग = √6 (h/2π)।'
                }
            },
            {
                problem: {
                    en: 'An acidic buffer contains 0.1 M CH₃COOH (pK_a = 4.74) and 0.01 M CH₃COONa. Calculate the pH of the buffer solution and the solubility product (K_sp) expression of Ca₃(PO₄)₂ in terms of molar solubility S.',
                    pa: 'ਇੱਕ ਤੇਜ਼ਾਬੀ ਬਫਰ ਵਿੱਚ 0.1 M CH₃COOH (pK_a = 4.74) ਅਤੇ 0.01 M CH₃COONa ਹੈ। ਬਫਰ ਦਾ pH ਪਤਾ ਕਰੋ ਅਤੇ Ca₃(PO₄)₂ ਦੇ K_sp ਨੂੰ ਮੋਲਰ ਘੁਲਣਸ਼ੀਲਤਾ S ਦੇ ਰੂਪ ਵਿੱਚ ਲਿਖੋ।',
                    hi: 'एक अम्लीय बफर में 0.1 M CH₃COOH (pK_a = 4.74) तथा 0.01 M CH₃COONa उपस्थित है। बफर का pH ज्ञात करें तथा मोलर विलेयता S के पदों में Ca₃(PO₄)₂ का K_sp व्यंजक लिखें।'
                },
                solutionSteps: {
                    en: [
                        'By Henderson-Hasselbalch equation: pH = pK_a + log([Salt] / [Acid]).',
                        'Substitute values: pH = 4.74 + log(0.01 / 0.1) = 4.74 + log(10⁻¹) = 4.74 − 1 = 3.74.',
                        'For Ca₃(PO₄)₂ (A₃B₂ type): Ca₃(PO₄)₂(s) ⇌ 3Ca²⁺(3S) + 2PO₄³⁻(2S).',
                        'K_sp = (3S)³ × (2S)² = 27S³ × 4S² = 108 S⁵.'
                    ],
                    pa: [
                        'ਹੈਂਡਰਸਨ ਸਮੀਕਰਨ ਅਨੁਸਾਰ: pH = pK_a + log([Salt] / [Acid])।',
                        'pH = 4.74 + log(0.01 / 0.1) = 4.74 − 1 = 3.74।',
                        'Ca₃(PO₄)₂ ਲਈ: Ca₃(PO₄)₂ ⇌ 3Ca²⁺(3S) + 2PO₄³⁻(2S) → K_sp = (3S)³(2S)² = 108 S⁵।'
                    ],
                    hi: [
                        'हेंडरसन समीकरण से: pH = pK_a + log([Salt] / [Acid])।',
                        'pH = 4.74 + log(0.01 / 0.1) = 4.74 − 1 = 3.74।',
                        'Ca₃(PO₄)₂ के लिए: Ca₃(PO₄)₂ ⇌ 3Ca²⁺(3S) + 2PO₄³⁻(2S) → K_sp = (3S)³(2S)² = 108 S⁵।'
                    ]
                },
                finalAnswer: {
                    en: 'pH = 3.74; K_sp of Ca₃(PO₄)₂ = 108 S⁵.',
                    pa: 'pH = 3.74; Ca₃(PO₄)₂ ਦਾ K_sp = 108 S⁵।',
                    hi: 'pH = 3.74; Ca₃(PO₄)₂ का K_sp = 108 S⁵।'
                }
            }
        ],
        flashcards: [
            {
                id: 'chem-phys1-fc-1',
                question: {
                    en: '[Level I] Which concentration terms are completely independent of temperature and why?',
                    pa: '[Level I] ਕਿਹੜੀਆਂ ਸੰਘਣਤਾ ਇਕਾਈਆਂ ਤਾਪਮਾਨ ਤੋਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੁਤੰਤਰ ਹਨ ਅਤੇ ਕਿਉਂ?',
                    hi: '[Level I] कौन-से सांद्रता पद तापमान से पूर्णतः स्वतंत्र होते हैं और क्यों?'
                },
                answer: {
                    en: 'Molality (m), Mole Fraction (χ), and Mass Percentage (% w/w), because they depend only on mass (which does not change with temperature), unlike Volume-based Molarity (M) and Normality (N).',
                    pa: 'ਮੋਲਲਤਾ (m), ਮੋਲ ਅੰਸ਼ (χ) ਅਤੇ ਪੁੰਜ ਪ੍ਰਤੀਸ਼ਤ (% w/w), ਕਿਉਂਕਿ ਇਹ ਸਿਰਫ਼ ਪੁੰਜ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦੇ ਹਨ ਜੋ ਤਾਪਮਾਨ ਨਾਲ ਨਹੀਂ ਬਦਲਦਾ।',
                    hi: 'मोललता (m), मोल अंश (χ) और द्रव्यमान प्रतिशत (% w/w), क्योंकि ये केवल द्रव्यमान पर निर्भर करते हैं जो ताप के साथ नहीं बदलता।'
                }
            },
            {
                id: 'chem-phys1-fc-2',
                question: {
                    en: '[Level H] What are the VSEPR geometries and hybridizations of SF₄, ClF₃, XeF₂, and XeF₄?',
                    pa: '[Level H] SF₄, ClF₃, XeF₂ ਅਤੇ XeF₄ ਦਾ ਸੰਕਰਣ (Hybridization) ਅਤੇ VSEPR ਆਕਾਰ ਕੀ ਹੈ?',
                    hi: '[Level H] SF₄, ClF₃, XeF₂ तथा XeF₄ का संकरण और VSEPR ज्यामिति क्या है?'
                },
                answer: {
                    en: 'SF₄: sp³d, See-Saw (4 BP + 1 LP) | ClF₃: sp³d, T-shaped (3 BP + 2 LP) | XeF₂: sp³d, Linear (2 BP + 3 LP) | XeF₄: sp³d², Square Planar (4 BP + 2 LP).',
                    pa: 'SF₄: sp³d, See-Saw (1 LP) | ClF₃: sp³d, T-shaped (2 LP) | XeF₂: sp³d, ਰੇਖੀ/Linear (3 LP) | XeF₄: sp³d², Square Planar (2 LP)।',
                    hi: 'SF₄: sp³d, सी-सॉ (1 LP) | ClF₃: sp³d, T-आकृति (2 LP) | XeF₂: sp³d, रेखीय (3 LP) | XeF₄: sp³d², वर्ग समतलीय (2 LP)।'
                }
            },
            {
                id: 'chem-phys1-fc-3',
                question: {
                    en: '[Level H] Arrange O₂, O₂⁺, O₂⁻ (superoxide), and O₂²⁻ (peroxide) in decreasing order of Bond Order and Bond Stability.',
                    pa: '[Level H] O₂, O₂⁺, O₂⁻ ਅਤੇ O₂²⁻ ਨੂੰ ਬਾਂਡ ਆਰਡਰ ਅਤੇ ਸਥਿਰਤਾ ਦੇ ਘਟਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਿਖੋ।',
                    hi: '[Level H] O₂, O₂⁺, O₂⁻ तथा O₂²⁻ को आबंध कोटि एवं स्थायित्व के घटते क्रम में व्यवस्थित करें।'
                },
                answer: {
                    en: 'O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0). Note that bond length follows the opposite order.',
                    pa: 'O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0)। ਬਾਂਡ ਲੰਬਾਈ ਦਾ ਕ੍ਰਮ ਇਸ ਦੇ ਬਿਲਕੁਲ ਉਲਟ ਹੁੰਦਾ ਹੈ।',
                    hi: 'O₂⁺ (2.5) > O₂ (2.0) > O₂⁻ (1.5) > O₂²⁻ (1.0)। आबंध लंबाई का क्रम इसके ठीक विपरीत होता है।'
                }
            },
            {
                id: 'chem-phys1-fc-4',
                question: {
                    en: '[Level G] What are the expressions for Critical Temperature (T_c), Boyle Temperature (T_B), and Critical Compressibility Factor (Z_c) of a van der Waals gas?',
                    pa: '[Level G] ਵਾਨ ਡਰ ਵਾਲਸ ਗੈਸ ਲਈ T_c, ਬੋਇਲ ਤਾਪਮਾਨ (T_B) ਅਤੇ Z_c ਦੇ ਸੂਤਰ ਕੀ ਹਨ?',
                    hi: '[Level G] वान डर वाल्स गैस के लिए क्रांतिक ताप (T_c), बॉयल ताप (T_B) और क्रांतिक संपीड्यता गुणांक (Z_c) के सूत्र क्या हैं?'
                },
                answer: {
                    en: 'T_c = 8a / (27Rb), T_B = a / (Rb), P_c = a / (27b²), V_c = 3b, and Z_c = (P_c·V_c)/(R·T_c) = 3/8 = 0.375.',
                    pa: 'T_c = 8a / (27Rb), T_B = a / (Rb), P_c = a / (27b²), V_c = 3b, ਅਤੇ Z_c = 3/8 = 0.375।',
                    hi: 'T_c = 8a / (27Rb), T_B = a / (Rb), P_c = a / (27b²), V_c = 3b, तथा Z_c = 3/8 = 0.375।'
                }
            },
            {
                id: 'chem-phys1-fc-5',
                question: {
                    en: '[Level G] Why does the pH of an aqueous solution of ammonium acetate (CH₃COONH₄) remain 7.0 regardless of dilution?',
                    pa: '[Level G] ਅਮੋਨੀਅਮ ਐਸੀਟੇਟ (CH₃COONH₄) ਦੇ ਜਲੀ ਘੋਲ ਦਾ pH ਪਤਲਾ ਕਰਨ ਉੱਤੇ ਵੀ 7.0 ਕਿਉਂ ਰਹਿੰਦਾ ਹੈ?',
                    hi: '[Level G] अमोनियम एसीटेट (CH₃COONH₄) के जलीय विलयन का pH तनुकरण पर भी 7.0 क्यों बना रहता है?'
                },
                answer: {
                    en: 'Because CH₃COONH₄ is a salt of a weak acid and weak base with pH = 7 + ½(pK_a − pK_b), which is independent of concentration C, and pK_a(CH₃COOH) ≈ pK_b(NH₄OH) ≈ 4.74.',
                    pa: 'ਕਿਉਂਕਿ ਇਹ ਕਮਜ਼ੋਰ ਤੇਜ਼ਾਬ ਤੇ ਕਮਜ਼ੋਰ ਖਾਰ ਦਾ ਲੂਣ ਹੈ ਜਿਸਦਾ pH = 7 + ½(pK_a − pK_b) ਸੰਘਣਤਾ C ਤੋਂ ਸੁਤੰਤਰ ਹੈ ਅਤੇ pK_a ≈ pK_b ≈ 4.74 ਹੈ।',
                    hi: 'क्योंकि यह दुर्बल अम्ल व दुर्बल क्षार का लवण है जिसका pH = 7 + ½(pK_a − pK_b) सांद्रता C से स्वतंत्र है तथा pK_a ≈ pK_b ≈ 4.74 होता है।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. PHYSICAL CHEMISTRY II: ELECTROCHEMISTRY, CHEMICAL KINETICS, SOLUTIONS,
    //    SOLID STATE, SURFACE CHEMISTRY, CATALYSIS & SPECTROSCOPY (Level H -> G/P)
    // =========================================================================
    {
        topicId: 'sci-chem-electro-kinetics-surface-solids',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote:
                'Covers ERB Punjab Master Cadre Science Chemistry Official Headings: Redox reactions and electrochemistry, Chemical kinetics, Solutions, Solid state, Surface chemistry, Catalysis, and Spectroscopy principles & applications in Level H -> G/P progression.'
        },
        bookRefs: [
            {
                title: 'NCERT Chemistry Class XII (Part I)',
                author: 'NCERT',
                chapter: 'Chapters 1–5 (Solid State, Solutions, Electrochemistry, Chemical Kinetics, Surface Chemistry)',
                relevance: 'Direct source for crystal defects, colligative properties, Nernst equation, Kohlrausch law, rate laws, and Hardy-Schulze rule.'
            },
            {
                title: 'Fundamentals of Molecular Spectroscopy',
                author: 'C.N. Banwell & E.M. McCash',
                chapter: 'Microwave, Infrared, Raman & Electronic Spectroscopy',
                relevance: 'Graduation/Postgraduate selection rules and Beer-Lambert Law for Master Cadre Spectroscopy heading.'
            }
        ],
        summary: {
            en: `### [Level B & I: Foundation — Class 8–10 Redox & Solutions Basics]
1. **Redox Reactions & Oxidation Number Rules:**
   - **Oxidation:** Loss of electrons / Increase in Oxidation State (**OIL**). **Reduction:** Gain of electrons / Decrease in Oxidation State (**RIG**).
   - **Special Oxidation States (Exam Traps):**
     - Oxygen is **−2** in normal oxides, **−1** in peroxides (H₂O₂, Na₂O₂, BaO₂), **−½** in superoxides (KO₂, RbO₂), and **+2 in OF₂** / **+1 in O₂F₂**.
     - **CrO₅ (Butterfly structure):** Contains **two peroxy (O−O) linkages** (4 oxygen atoms at −1, 1 oxygen at −2) → Oxidation state of Cr is **+6** (not +10!).
     - **H₂SO₅ (Caro's acid)** and **H₂S₂O₈ (Marshall's acid):** Have peroxy linkages → S is in **+6** oxidation state.
     - **Bleaching Powder (CaOCl₂):** Ca(OCl)Cl has two Cl atoms in **+1** (OCl⁻) and **−1** (Cl⁻) states (average = 0).

---

### [Level H: Senior Secondary — Class 12 Core]
1. **Electrochemistry:**
   - **Galvanic / Daniell Cell:** **Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)**
     - **LOAN Mnemonic:** **L**eft — **O**xidation — **A**node — **N**egative terminal.
     - Standard EMF: **E°_cell = E°_cathode − E°_anode = +0.34 V − (−0.76 V) = 1.10 V**.
     - Standard Hydrogen Electrode (SHE): Pt(s) | H₂(g, 1 bar) | H⁺(aq, 1 M) has **E° = 0.00 V** at all temperatures.
   - **Nernst Equation (at 298 K):**
     - **E_cell = E°_cell − (0.0591 / n) log Q**
     - At equilibrium, **E_cell = 0** and Q = K_c → **E°_cell = (0.0591 / n) log K_c**.
     - **Thermodynamic Relation:** **ΔG° = −n F E°_cell** (where F = 96,485 C mol⁻¹ ≈ 96,500 C mol⁻¹). Notice E°_cell is an **intensive** property, whereas ΔG° is **extensive**!
   - **Conductance & Kohlrausch's Law:**
     - Specific conductance (Conductivity) **κ = (1 / R) × (l / A)** (Units: S cm⁻¹ or S m⁻¹). On dilution, **κ decreases** (fewer ions per unit volume).
     - Molar conductivity **Λ_m = (κ × 1000) / M** (Units: S cm² mol⁻¹). On dilution, **Λ_m increases** (for strong electrolytes: Debye-Hückel-Onsager **Λ_m = Λ_m° − A√C**; for weak electrolytes: steep rise due to increase in α).
     - **Kohlrausch's Law of Independent Migration of Ions:** At infinite dilution, **Λ_m° = ν_+ λ_+° + ν_− λ_−°** (e.g., Λ_m°(CH₃COOH) = Λ_m°(CH₃COONa) + Λ_m°(HCl) − Λ_m°(NaCl)).
   - **Faraday's Laws of Electrolysis:**
     - **First Law:** **w = Z · I · t = (E × I × t) / 96500**, where Equivalent weight E = Molar mass / n-factor.
     - **Second Law:** For cells in series, **w₁ / w₂ = E₁ / E₂**.
2. **Chemical Kinetics:**
   - **Order vs Molecularity:** **Order** is the sum of powers of concentration terms in the experimental rate law (can be 0, 1, 2, fractional, or negative; applies to elementary and complex reactions). **Molecularity** is the number of colliding species in a single **elementary step** (always a positive integer 1, 2, or 3; never 0 or fractional).
   | Order | Rate Law | Integrated Rate Equation | Half-Life (t₁/₂) | Units of Rate Constant (k) | Classic Examples |
   |---|---|---|---|---|---|
   | **Zero (n = 0)** | Rate = k | **k = ([A]₀ − [A]) / t** | **t₁/₂ = [A]₀ / (2k)** (∝ [A]₀) | **mol L⁻¹ s⁻¹** | Photochemical H₂ + Cl₂; decomposition of NH₃ on hot Pt or HI on Au |
   | **First (n = 1)** | Rate = k[A] | **k = (2.303 / t) log([A]₀ / [A])** | **t₁/₂ = 0.693 / k** (**Independent of [A]₀**) | **s⁻¹** | All **radioactive decays**, N₂O₅ decomposition, hydrogenation of ethene |
   | **Second (n = 2)** | Rate = k[A]² | **k = (1/t)(1/[A] − 1/[A]₀)** | **t₁/₂ = 1 / (k[A]₀)** (∝ 1/[A]₀) | **L mol⁻¹ s⁻¹** | Saponification of ester (CH₃COOC₂H₅ + NaOH); 2HI → H₂ + I₂ |
   - **General Formula for n-th Order:** Units of k = **(mol L⁻¹)^(1−n) s⁻¹** and **t₁/₂ ∝ [A]₀^(1−n)**.
   - **First-Order Special Relations:** **t_99.9% = 10 × t₁/₂** | **t_99% = 2 × t_90%** | **t_75% = 2 × t₁/₂**.
   - **Pseudo-First-Order Reactions (Molecularity = 2, Order = 1):** Acid-catalysed hydrolysis of ethyl acetate and **inversion of cane sugar** (water is in large excess).
   - **Arrhenius Equation:** **k = A · e^(−E_a / RT)** and **log(k₂ / k₁) = (E_a / 2.303 R) · [(T₂ − T₁) / (T₁T₂)]**.
3. **Solutions & Colligative Properties:**
   - **Henry's Law:** **p = K_H · χ** (Higher K_H → lower gas solubility; K_H increases with temperature, so aquatic species prefer cold water).
   - **Raoult's Law & Deviations:**
     - **Positive Deviation (ΔH_mix > 0, ΔV_mix > 0, A−B weaker than A−A/B−B):** Ethanol + Water, Acetone + CS₂ → forms **Minimum-boiling azeotrope**.
     - **Negative Deviation (ΔH_mix < 0, ΔV_mix < 0, A−B stronger H-bonding):** **Chloroform + Acetone**, **HNO₃ + H₂O (68% HNO₃, b.p. 393.5 K)**, HCl + H₂O → forms **Maximum-boiling azeotrope**.
   - **Four Colligative Properties (with van 't Hoff Factor i):**
     1. Relative Lowering of Vapour Pressure: **(P° − P_s) / P° = i · χ_B**
     2. Elevation in Boiling Point: **ΔT_b = i · K_b · m**
     3. Depression in Freezing Point: **ΔT_f = i · K_f · m**
     4. Osmotic Pressure (best for macromolecules/proteins): **π = i · C · R · T**
     - **van 't Hoff Factor (i):** **i = Normal Molar Mass / Observed (Abnormal) Molar Mass**.
       - For **Dissociation** (e.g., NaCl n=2, K₂SO₄ n=3, K₄[Fe(CN)₆] n=5): **i = 1 + (n − 1)α** (i > 1).
       - For **Association / Dimerization** (e.g., CH₃COOH or Benzoic acid in benzene, n=2): **i = 1 + (1/n − 1)α** (i < 1, observed molar mass of acetic acid in benzene ≈ **120 g/mol**).

---

### [Level G & P: Solid State, Surface Chemistry, Catalysis & Spectroscopy]
1. **Solid State & Crystal Defects:**
   - **Unit Cell Packing Table:**
     | Unit Cell | Effective Atoms (Z) | Relation between r and a | Coordination No. (CN) | Packing Efficiency |
     |---|---|---|---|---|
     | **Simple Cubic (SCC)** | **1** | 2r = a | 6 | **52.4%** |
     | **Body-Centred Cubic (BCC)** | **2** | **4r = √3 a** | 8 | **68%** |
     | **Face-Centred Cubic (FCC / CCP / HCP)** | **4** | **4r = √2 a** | 12 | **74%** |
   - **Crystal Density Formula:** **ρ = (Z × M) / (a³ × N_A)**. For N spheres in close packing: **Octahedral voids = N**, **Tetrahedral voids = 2N**.
   - **Stoichiometric Point Defects in Ionic Crystals:**
     - **Schottky Defect:** Equal number of cations and anions are missing from lattice sites → **Decreases crystal density**; shown by high CN compounds with similar cation/anion sizes: **NaCl, KCl, CsCl, KBr, and AgBr**.
     - **Frenkel (Dislocation) Defect:** Smaller ion (usually cation) is dislocated from its normal site to an interstitial site → **Density remains unchanged**; shown by low CN compounds with large size difference: **ZnS, AgCl, AgBr, and AgI**.
     - **Master Cadre Golden Fact:** **AgBr exhibits BOTH Schottky and Frenkel defects!**
   - **Non-Stoichiometric Metal Excess Defect (F-centres / Farbe centres):** Anionic vacancies occupied by trapped unpaired electrons; imparts colour and paramagnetism — **NaCl turns Yellow**, **LiCl turns Pink**, and **KCl turns Violet/Lilac**.
2. **Surface Chemistry, Colloids & Catalysis:**
   - **Adsorption Thermodynamics:** Always exothermic (**ΔH < 0**), entropy of gas decreases (**ΔS < 0**), so for spontaneous adsorption **ΔG = ΔH − TΔS < 0** requires |ΔH| > |TΔS|.
   - **Freundlich Isotherm:** **x/m = k · P^(1/n)** (where 0 ≤ 1/n ≤ 1) → **log(x/m) = log k + (1/n) log P**. **Langmuir Isotherm** assumes monolayer chemisorption on uniform sites.
   - **Colloids & Hardy-Schulze Rule:**
     - **Negative Sols:** Metal sols (Au, Ag, Pt), **As₂S₃, Sb₂S₃, CdS**, starch, clay, blood, smoke. Coagulated by cations: **Al³⁺ > Ba²⁺ > Na⁺**.
     - **Positive Sols:** Hydrated metal oxides (**Fe₂O₃·xH₂O, Al₂O₃·xH₂O, TiO₂**), basic dyes (methylene blue), **Haemoglobin**. Coagulated by anions: **[Fe(CN)₆]⁴⁻ > PO₄³⁻ > SO₄²⁻ > Cl⁻**.
     - **Gold Number (Zsigmondy):** Minimum mass (in mg) of protective lyophilic colloid required to prevent coagulation of 10 mL standard gold sol on adding 1 mL of 10% NaCl. **Smaller Gold Number = Higher Protective Power** (**Gelatin = 0.005–0.01** is best; Starch = 25 is poorest).
   - **Catalysis:** Enzyme catalysis follows **Michaelis-Menten Kinetics:** **v = (V_max [S]) / (K_m + [S])** (First-order at low [S], Zero-order at high [S]). **Zeolites (e.g., ZSM-5)** are shape-selective aluminosilicate catalysts that convert **alcohols directly into gasoline (petrol)**.
3. **Principles & Applications of Spectroscopy (Level G/P):**
   - **Beer-Lambert Law (UV-Visible Spectrophotometry):** **A = log₁₀(I₀ / I) = ε · c · l**, where A = absorbance (optical density), ε = molar absorptivity (L mol⁻¹ cm⁻¹), c = molar concentration, l = path length (cm). Transmittance T = I / I₀, so **A = −log₁₀ T = 2 − log(%T)**.
   - **Spectroscopic Selection Rules Table:**
     | Spectroscopy Type | Electromagnetic Region | Necessary Condition (Gross Rule) | Quantum Selection Rule | Key Information Obtained |
     |---|---|---|---|---|
     | **Rotational (Microwave)** | Microwave | **Permanent Dipole Moment (μ ≠ 0)** (HCl, CO, H₂O active; H₂, N₂, CO₂ inactive) | **ΔJ = ±1** (Spacing between lines = **2B**) | Bond length & moment of inertia (I = μ_red r²) |
     | **Vibrational (IR)** | Infrared | **Change in Dipole Moment during vibration (dμ/dx ≠ 0)** | **Δv = ±1** (harmonic); ±2, ±3 (anharmonic overtones) | Functional groups & bond force constant k |
     | **Raman Spectroscopy** | UV / Visible scattering | **Change in Polarizability (dα/dx ≠ 0)** (H₂, N₂, O₂ are Raman active!) | **ΔJ = 0, ±2** (Rotational); **Δv = ±1** | Symmetric vibrations; **Mutual Exclusion Rule** for centrosymmetric molecules (CO₂, C₆H₆) |`,
            pa: `### [Level B & I: Foundation — Class 8–10 ਰੈਡੌਕਸ ਅਤੇ ਘੋਲ ਬੁਨਿਆਦ]
1. **ਆਕਸੀਕਰਨ ਅੰਕ ਦੇ ਵਿਸ਼ੇਸ਼ ਨਿਯਮ:**
   - **CrO₅ (Butterfly structure):** ਇਸ ਵਿੱਚ ਦੋ ਪਰਆਕਸੀ (O−O) ਬੰਧਨ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ Cr ਦਾ ਆਕਸੀਕਰਨ ਅੰਕ **+6** ਹੁੰਦਾ ਹੈ।
   - **H₂SO₅ (Caro's acid)** ਅਤੇ **H₂S₂O₈ (Marshall's acid)** ਵਿੱਚ ਸਲਫਰ (S) ਦਾ ਆਕਸੀਕਰਨ ਅੰਕ **+6** ਹੈ।

---

### [Level H: Senior Secondary — Class 12 ਮੱਧ ਅਤੇ ਉੱਚ ਪੱਧਰ]
1. **ਇਲੈਕਟ੍ਰੋਕੈਮਿਸਟਰੀ (Electrochemistry):**
   - **ਡੈਨੀਅਲ ਸੈੱਲ:** Zn(s) | Zn²⁺ || Cu²⁺ | Cu(s), **E°_cell = 1.10 V**।
   - **ਨਰਨਸਟ ਸਮੀਕਰਨ (298 K):** **E_cell = E°_cell − (0.0591 / n) log Q** ਅਤੇ **ΔG° = −nFE°_cell**।
   - **ਮੋਲਰ ਚਾਲਕਤਾ:** **Λ_m = (κ × 1000) / M**। ਪਤਲਾ ਕਰਨ (Dilution) ਉੱਤੇ **κ ਘਟਦੀ ਹੈ** ਪਰ **Λ_m ਵਧਦੀ ਹੈ**।
   - **ਕੋਲਰਾਸ਼ ਦਾ ਨਿਯਮ (Kohlrausch's Law):** **Λ_m° = ν_+ λ_+° + ν_− λ_−°**।
   - **ਫੈਰਾਡੇ ਦਾ ਨਿਯਮ:** **w = ZIt = (E × I × t) / 96500**।
2. **ਰਸਾਇਣਕ ਗਤੀਵਿਗਿਆਨ (Chemical Kinetics):**
   - **ਜ਼ੀਰੋ ਆਰਡਰ (n=0):** k = ([A]₀ − [A])/t, **t₁/₂ = [A]₀ / 2k**, ਇਕਾਈ: **mol L⁻¹ s⁻¹**।
   - **ਫਸਟ ਆਰਡਰ (n=1):** k = (2.303/t) log([A]₀/[A]), **t₁/₂ = 0.693 / k** (ਸ਼ੁਰੂਆਤੀ ਸੰਘਣਤਾ ਤੋਂ ਸੁਤੰਤਰ!), ਇਕਾਈ: **s⁻¹**; **t_99.9% = 10 × t₁/₂**।
   - **ਆਰਹੀਨੀਅਸ ਸਮੀਕਰਨ:** **k = A e^(−E_a/RT)**।
3. **ਘੋਲ ਅਤੇ ਕੋਲੀਗੇਟਿਵ ਗੁਣ (Solutions & Colligative Properties):**
   - **4 ਕੋਲੀਗੇਟਿਵ ਗੁਣ:** (1) ΔP/P° = i·χ_B, (2) **ΔT_b = i·K_b·m**, (3) **ΔT_f = i·K_f·m**, (4) **π = iCRT**।
   - **ਵਾਨਟ ਹੌਫ ਗੁਣਾਂਕ (van 't Hoff factor i):** ਵਿਯੋਜਨ (Dissociation) ਲਈ **i = 1 + (n − 1)α**; ਸੰਯੋਜਨ (Association, ਜਿਵੇਂ ਬੈਂਜ਼ੀਨ ਵਿੱਚ CH₃COOH ਦਾ ਡਾਇਮਰ ਬਣਨਾ) ਲਈ **i = 1 + (1/n − 1)α** (i ≈ 0.5, ਪ੍ਰੇਖਿਤ ਮੋਲਰ ਪੁੰਜ = 120 g/mol)।

---

### [Level G & P: Solid State, Surface Chemistry, Catalysis & Spectroscopy]
1. **ਠੋਸ ਅਵਸਥਾ (Solid State):**
   - **ਘਣਤਾ ਸੂਤਰ:** **ρ = (Z × M) / (a³ × N_A)**। ਪੈਕਿੰਗ ਸਮਰੱਥਾ: **SCC = 52.4% (Z=1)**, **BCC = 68% (Z=2)**, **FCC/HCP = 74% (Z=4)**।
   - **ਸ਼ੌਟਕੀ ਦੋਸ਼ (Schottky Defect):** ਬਰਾਬਰ ਗਿਣਤੀ ਵਿੱਚ ਧਨਾਇਨ ਅਤੇ ਰਿਣਾਇਨ ਗਾਇਬ ਹੁੰਦੇ ਹਨ → **ਘਣਤਾ ਘਟਦੀ ਹੈ** (NaCl, KCl, CsCl, AgBr)।
   - **ਫ੍ਰੈਂਕਲ ਦੋਸ਼ (Frenkel Defect):** ਛੋਟਾ ਆਇਨ ਅੰਤਰਾਲੀ ਸਥਾਨ (Interstitial site) ਵਿੱਚ ਚਲਾ ਜਾਂਦਾ ਹੈ → **ਘਣਤਾ ਨਹੀਂ ਬਦਲਦੀ** (ZnS, AgCl, AgBr, AgI)। **AgBr ਦੋਵੇਂ ਦੋਸ਼ ਦਿਖਾਉਂਦਾ ਹੈ!**
   - **F-ਕੇਂਦਰ (F-centres):** ਅਣਯੁਗਮਿਤ ਇਲੈਕਟ੍ਰਾਨਾਂ ਕਾਰਨ ਰੰਗ — **NaCl (ਪੀਲਾ)**, **LiCl (ਗੁਲਾਬੀ)**, **KCl (ਬੈਂਗਣੀ/Lilac)**।
2. **ਸਤਹ ਰਸਾਇਣ ਅਤੇ ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ:**
   - **ਹਾਰਡੀ-ਸ਼ੁਲਜ਼ ਨਿਯਮ (Hardy-Schulze Rule):** ਰਿਣਾਤਮਕ As₂S₃ ਸੌਲ ਲਈ ਸਕੰਦਨ ਸ਼ਕਤੀ: **Al³⁺ > Ba²⁺ > Na⁺**; ਧਨਾਤਮਕ Fe(OH)₃ ਸੌਲ ਲਈ: **[Fe(CN)₆]⁴⁻ > PO₄³⁻ > SO₄²⁻ > Cl⁻**।
   - **ਬੀਅਰ-ਲੈਂਬਰਟ ਨਿਯਮ:** **A = log(I₀/I) = ε·c·l**।
   - **ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ ਚੋਣ ਨਿਯਮ:** ਮਾਈਕ੍ਰੋਵੇਵ (Rotational) ਲਈ **ਸਥਾਈ ਡਾਇਪੋਲ ਮੋਮੈਂਟ (μ ≠ 0, ΔJ = ±1)**; IR (Vibrational) ਲਈ **ਡਾਇਪੋਲ ਮੋਮੈਂਟ ਵਿੱਚ ਪਰਿਵਰਤਨ (Δv = ±1)**; ਰਮਨ (Raman) ਲਈ **ਪੋਲਰਾਈਜ਼ੇਬਿਲਿਟੀ ਵਿੱਚ ਪਰਿਵਰਤਨ**।`,
            hi: `### [Level B & I: Foundation — Class 8–10 रेडॉक्स एवं विलयन आधार]
1. **ऑक्सीकरण संख्या के विशेष नियम:**
   - **CrO₅ (तितली संरचना / Butterfly structure):** इसमें दो परॉक्सी (O−O) आबंध होते हैं, अतः Cr की ऑक्सीकरण संख्या **+6** होती है।
   - **H₂SO₅ (कैरो अम्ल)** तथा **H₂S₂O₈ (मार्शल अम्ल)** में S की ऑक्सीकरण संख्या **+6** होती है।

---

### [Level H: Senior Secondary — Class 12 उच्च माध्यमिक स्तर]
1. **वैद्युतरसायन (Electrochemistry):**
   - **डेनियल सेल:** Zn(s) | Zn²⁺ || Cu²⁺ | Cu(s), **E°_cell = 1.10 V**।
   - **नर्नस्ट समीकरण (298 K):** **E_cell = E°_cell − (0.0591 / n) log Q** तथा **ΔG° = −nFE°_cell**।
   - **मोलर चालकता:** **Λ_m = (κ × 1000) / M**। तनुकरण (Dilution) पर **विशिष्ट चालकता (κ) घटती है** परंतु **मोलर चालकता (Λ_m) बढ़ती है**।
   - **कोलराउश का नियम (Kohlrausch's Law):** **Λ_m° = ν_+ λ_+° + ν_− λ_−°**।
   - **फैराडे का नियम:** **w = ZIt = (E × I × t) / 96500**।
2. **रासायनिक बलगतिकी (Chemical Kinetics):**
   - **शून्य कोटि (n=0):** k = ([A]₀ − [A])/t, **t₁/₂ = [A]₀ / 2k**, मात्रक: **mol L⁻¹ s⁻¹**।
   - **प्रथम कोटि (n=1):** k = (2.303/t) log([A]₀/[A]), **t₁/₂ = 0.693 / k** (प्रारंभिक सांद्रता से स्वतंत्र!), मात्रक: **s⁻¹**; **t_99.9% = 10 × t₁/₂**।
   - **आरहेनियस समीकरण:** **k = A e^(−E_a/RT)**।
3. **विलयन एवं अणुसंख्य गुणधर्म (Solutions & Colligative Properties):**
   - **4 अणुसंख्य गुणधर्म:** (1) ΔP/P° = i·χ_B, (2) **ΔT_b = i·K_b·m**, (3) **ΔT_f = i·K_f·m**, (4) **π = iCRT**।
   - **वान्ट हॉफ गुणांक (van 't Hoff factor i):** वियोजन (Dissociation) के लिए **i = 1 + (n − 1)α**; संगुणन (Association, जैसे बेंजीन में CH₃COOH का द्वितयन) के लिए **i = 1 + (1/n − 1)α** (i ≈ 0.5, प्रेक्षित मोलर द्रव्यमान = 120 g/mol)।

---

### [Level G & P: Solid State, Surface Chemistry, Catalysis & Spectroscopy]
1. **ठोस अवस्था (Solid State):**
   - **घनत्व सूत्र:** **ρ = (Z × M) / (a³ × N_A)**। संकुलन दक्षता: **SCC = 52.4% (Z=1)**, **BCC = 68% (Z=2)**, **FCC/HCP = 74% (Z=4)**।
   - **शॉट्की दोष (Schottky Defect):** समान संख्या में धनायन और ऋणायन लुप्त होते हैं → **घनत्व घटता है** (NaCl, KCl, CsCl, AgBr)।
   - **फ्रेंकेल दोष (Frenkel Defect):** छोटा धनायन अंतराकाशी स्थल (Interstitial site) में विस्थापित हो जाता है → **घनत्व अपरिवर्तित रहता है** (ZnS, AgCl, AgBr, AgI)। **AgBr दोनों दोष प्रदर्शित करता है!**
   - **F-केंद्र (F-centres):** अयुग्मित इलेक्ट्रॉनों के कारण रंग — **NaCl (पीला)**, **LiCl (गुलाबी)**, **KCl (बैंगनी/Lilac)**।
2. **पृष्ठ रसायन एवं स्पेक्ट्रोस्कोपी:**
   - **हार्डी-शुल्ज़ नियम (Hardy-Schulze Rule):** ऋणात्मक As₂S₃ सॉल के लिए स्कंदन क्षमता: **Al³⁺ > Ba²⁺ > Na⁺**; धनात्मक Fe(OH)₃ सॉल के लिए: **[Fe(CN)₆]⁴⁻ > PO₄³⁻ > SO₄²⁻ > Cl⁻**।
   - **बीयर-लैम्बर्ट नियम:** **A = log(I₀/I) = ε·c·l**।
   - **स्पेक्ट्रोस्कोपी चयन नियम:** माइक्रोवेव (घूर्णन) के लिए **स्थायी द्विध्रुव आघूर्ण (μ ≠ 0, ΔJ = ±1)**; IR (कंपन) के लिए **द्विध्रुव आघूर्ण में परिवर्तन (Δv = ±1)**; रमन (Raman) के लिए **ध्रुवणीयता (Polarizability) में परिवर्तन**।`
        },
        keyNotes: {
            en: [
                'On dilution of an electrolyte solution, specific conductivity (κ) decreases due to fewer ions per cm³, whereas molar conductivity (Λ_m = κ × 1000 / M) increases.',
                'For a first-order reaction, half-life t₁/₂ = 0.693/k is independent of initial concentration [A]₀, and time required for 99.9% completion is exactly 10 × t₁/₂.',
                'Benzoic acid and acetic acid dimerize in benzene due to hydrogen bonding (i ≈ 0.5), doubling their observed molar mass (122 → 244 g/mol for benzoic acid; 60 → 120 g/mol for acetic acid).',
                'AgBr is the unique ionic crystal that exhibits BOTH Schottky defect (vacancy defect, lowers density) and Frenkel defect (dislocation defect, density unchanged).',
                'According to the Hardy-Schulze rule, greater the valency of the flocculating ion, greater is its coagulating power and smaller is its coagulation/flocculation value.',
                'Homonuclear diatomic molecules (H₂, N₂, O₂, Cl₂) are Microwave and IR INACTIVE (μ = 0), but they are RAMAN ACTIVE because their polarizability changes during vibration.'
            ],
            pa: [
                'ਇਲੈਕਟ੍ਰੋਲਾਈਟ ਘੋਲ ਨੂੰ ਪਤਲਾ (Dilute) ਕਰਨ ਉੱਤੇ ਵਿਸ਼ੇਸ਼ ਚਾਲਕਤਾ (κ) ਘਟਦੀ ਹੈ, ਪਰ ਮੋਲਰ ਚਾਲਕਤਾ (Λ_m = κ × 1000 / M) ਵਧਦੀ ਹੈ।',
                'ਫਸਟ-ਆਰਡਰ ਕਿਰਿਆ ਲਈ ਅਰਧ-ਆਯੂ ਕਾਲ t₁/₂ = 0.693/k ਸ਼ੁਰੂਆਤੀ ਸੰਘਣਤਾ [A]₀ ਉੱਤੇ ਨਿਰਭਰ ਨਹੀਂ ਕਰਦਾ, ਅਤੇ 99.9% ਕਿਰਿਆ ਪੂਰੀ ਹੋਣ ਦਾ ਸਮਾਂ 10 × t₁/₂ ਹੁੰਦਾ ਹੈ।',
                'ਬੈਂਜ਼ੀਨ ਵਿੱਚ ਐਸੀਟਿਕ ਐਸਿਡ ਅਤੇ ਬੈਂਜ਼ੋਇਕ ਐਸਿਡ H-ਬੰਧਨ ਕਾਰਨ ਡਾਇਮਰ (Dimer, i ≈ 0.5) ਬਣਾਉਂਦੇ ਹਨ ਜਿਸ ਨਾਲ ਪ੍ਰੇਖਿਤ ਮੋਲਰ ਪੁੰਜ ਦੁੱਗਣਾ ਹੋ ਜਾਂਦਾ ਹੈ।',
                'AgBr ਅਜਿਹਾ ਕ੍ਰਿਸਟਲ ਹੈ ਜੋ ਸ਼ੌਟਕੀ ਦੋਸ਼ (ਘਣਤਾ ਘਟਦੀ ਹੈ) ਅਤੇ ਫ੍ਰੈਂਕਲ ਦੋਸ਼ (ਘਣਤਾ ਸਥਿਰ ਰਹਿੰਦੀ ਹੈ) ਦੋਵੇਂ ਦਿਖਾਉਂਦਾ ਹੈ।',
                'ਹਾਰਡੀ-ਸ਼ੁਲਜ਼ ਨਿਯਮ ਅਨੁਸਾਰ, ਆਇਨ ਦੀ ਸੰਯੋਜਕਤਾ (Valency) ਜਿੰਨੀ ਵੱਧ ਹੋਵੇਗੀ, ਉਸ ਦੀ ਸਕੰਦਨ ਸ਼ਕਤੀ (Coagulating power) ਓਨੀ ਹੀ ਵੱਧ ਹੋਵੇਗੀ।',
                'ਸਮ-ਨਾਭਿਕੀ ਦੋ-ਪਰਮਾਣੂਕ ਗੈਸਾਂ (H₂, N₂, O₂) ਮਾਈਕ੍ਰੋਵੇਵ ਅਤੇ IR ਵਿੱਚ ਅਕਿਰਿਆਸ਼ੀਲ (Inactive) ਹੁੰਦੀਆਂ ਹਨ ਪਰ ਰਮਨ (Raman) ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ ਵਿੱਚ ਕਿਰਿਆਸ਼ੀਲ ਹੁੰਦੀਆਂ ਹਨ।'
            ],
            hi: [
                'विद्युत-अपघट्य विलयन के तनुकरण पर विशिष्ट चालकता (κ) घटती है, जबकि मोलर चालकता (Λ_m = κ × 1000 / M) बढ़ती है।',
                'प्रथम कोटि अभिक्रिया के लिए अर्ध-आयु काल t₁/₂ = 0.693/k प्रारंभिक सांद्रता [A]₀ से स्वतंत्र होता है, तथा 99.9% पूर्णता में लगा समय 10 × t₁/₂ होता है।',
                'बेंजीन में एसिटिक अम्ल और बेंजोइक अम्ल H-आबंधन के कारण द्वितयन (Dimerization, i ≈ 0.5) करते हैं जिससे उनका प्रेक्षित मोलर द्रव्यमान दोगुना हो जाता है।',
                'AgBr एकमात्र ऐसा प्रमुख आयनिक क्रिस्टल है जो शॉट्की दोष (घनत्व घटता है) और फ्रेंकेल दोष (घनत्व अपरिवर्तित) दोनों प्रदर्शित करता है।',
                'हार्डी-शुल्ज़ नियम के अनुसार, स्कंदक आयन की संयोजकता जितनी अधिक होती है, उसकी स्कंदन क्षमता उतनी ही अधिक तथा स्कंदन मान उतना ही कम होता है।',
                'समनाभिकीय द्विपरमाणुक अणु (H₂, N₂, O₂) माइक्रोवेव तथा IR में निष्क्रिय होते हैं, किंतु रमन (Raman) स्पेक्ट्रोस्कोपी में सक्रिय होते हैं।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Kinetics Half-Life & Units: Order n → t₁/₂ ∝ [A]₀^(1−n) | Units of k = mol^(1−n) L^(n−1) s⁻¹ | First Order: t_99.9% = 10 × t₁/₂.',
                'Colligative van \'t Hoff Factor (i) for 100% ionized salts: NaCl = 2 | BaCl₂ / Na₂SO₄ = 3 | AlCl₃ = 4 | K₄[Fe(CN)₆] = 5 (Highest ΔT_b & Osmotic pressure, Lowest freezing point & vapour pressure).',
                'Crystal Packing & Defects: SCC (Z=1, 52.4%) | BCC (Z=2, 68%, 4r=√3a) | FCC (Z=4, 74%, 4r=√2a) | AgBr = Both Schottky & Frenkel | F-centres: NaCl (Yellow), LiCl (Pink), KCl (Violet).',
                'Colloid Charges: As₂S₃, Au/Ag sols, Blood, Starch = Negative sol (coagulated best by Al³⁺) | Fe(OH)₃, Al(OH)₃, Haemoglobin = Positive sol (coagulated best by [Fe(CN)₆]⁴⁻).',
                'Spectroscopy Conditions: Microwave (Rotational, ΔJ=±1) → Permanent dipole (HCl, CO) | IR (Vibrational, Δv=±1) → Change in dipole (CO₂ asymmetric stretch) | Raman → Change in polarizability (H₂, N₂, O₂).'
            ],
            pa: [
                'ਗਤੀਵਿਗਿਆਨ ਸੂਤਰ: ਆਰਡਰ n → t₁/₂ ∝ [A]₀^(1−n) | k ਦੀ ਇਕਾਈ = mol^(1−n) L^(n−1) s⁻¹ | ਫਸਟ ਆਰਡਰ: t_99.9% = 10 × t₁/₂।',
                '100% ਆਇਨੀਕਰਨ ਲਈ ਵਾਨਟ ਹੌਫ ਗੁਣਾਂਕ (i): NaCl = 2 | BaCl₂ = 3 | AlCl₃ = 4 | K₄[Fe(CN)₆] = 5।',
                'ਠੋਸ ਅਵਸਥਾ: SCC (Z=1, 52.4%) | BCC (Z=2, 68%) | FCC (Z=4, 74%) | AgBr = ਸ਼ੌਟਕੀ ਅਤੇ ਫ੍ਰੈਂਕਲ ਦੋਵੇਂ | F-ਕੇਂਦਰ: NaCl (ਪੀਲਾ), LiCl (ਗੁਲਾਬੀ), KCl (ਬੈਂਗਣੀ)।',
                'ਕੋਲੋਇਡ ਚਾਰਜ: As₂S₃, Au ਸੌਲ, ਖੂਨ = ਰਿਣਾਤਮਕ ਸੌਲ (Al³⁺ ਨਾਲ ਸਕੰਦਨ) | Fe(OH)₃, ਹੀਮੋਗਲੋਬਿਨ = ਧਨਾਤਮਕ ਸੌਲ ([Fe(CN)₆]⁴⁻ ਨਾਲ ਸਕੰਦਨ)।',
                'ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ: ਮਾਈਕ੍ਰੋਵੇਵ (ΔJ=±1) → ਸਥਾਈ ਡਾਇਪੋਲ | IR (Δv=±1) → ਡਾਇਪੋਲ ਵਿੱਚ ਬਦਲਾਅ | ਰਮਨ → ਪੋਲਰਾਈਜ਼ੇਬਿਲਿਟੀ ਵਿੱਚ ਬਦਲਾਅ।'
            ],
            hi: [
                'बलगतिकी सूत्र: कोटि n → t₁/₂ ∝ [A]₀^(1−n) | k का मात्रक = mol^(1−n) L^(n−1) s⁻¹ | प्रथम कोटि: t_99.9% = 10 × t₁/₂।',
                '100% आयनन हेतु वान्ट हॉफ गुणांक (i): NaCl = 2 | BaCl₂ = 3 | AlCl₃ = 4 | K₄[Fe(CN)₆] = 5।',
                'ठोस अवस्था: SCC (Z=1, 52.4%) | BCC (Z=2, 68%) | FCC (Z=4, 74%) | AgBr = शॉट्की व फ्रेंकेल दोनों | F-केंद्र: NaCl (पीला), LiCl (गुलाबी), KCl (बैंगनी)।',
                'कोलॉइड आवेश: As₂S₃, Au सॉल, रक्त = ऋणात्मक सॉल (Al³⁺ से स्कंदन) | Fe(OH)₃, हीमोग्लोबिन = धनात्मक सॉल ([Fe(CN)₆]⁴⁻ से स्कंदन)।',
                'स्पेक्ट्रोस्कोपी: माइक्रोवेव (ΔJ=±1) → स्थायी द्विध्रुव | IR (Δv=±1) → द्विध्रुव में परिवर्तन | रमन → ध्रुवणीयता में परिवर्तन।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: When adding two half-cell reactions to find E° of a third half-cell (e.g., Fe³⁺ → Fe²⁺ → Fe), we can directly add E°₁ + E°₂. Correction: Electrode potential E° is an intensive property and is NOT additive; we must add extensive Gibbs energies (ΔG°₃ = ΔG°₁ + ΔG°₂ ⇒ n₃E°₃ = n₁E°₁ + n₂E°₂).',
                'Misconception: Which equimolar solution has the highest freezing point is the same as the one with the highest depression in freezing point (ΔT_f). Correction: Higher i gives larger depression ΔT_f, which means a LOWER actual freezing point (T_f = 0°C − ΔT_f). Glucose (i=1) has the highest freezing point, whereas K₄[Fe(CN)₆] (i=5) has the lowest freezing point!',
                'Misconception: CO₂ has zero dipole moment, so it is completely IR inactive. Correction: While CO₂ is microwave-inactive (no permanent dipole) and its symmetric stretch is IR-inactive, its asymmetric stretch and bending modes change the dipole moment and are strongly IR-active (causing the greenhouse effect!).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਦੋ ਅਰਧ-ਸੈੱਲ ਕਿਰਿਆਵਾਂ ਨੂੰ ਜੋੜਨ ਵੇਲੇ E°₃ = E°₁ + E°₂ ਸਿੱਧਾ ਜੋੜਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਸੁਧਾਰ: E° ਇੱਕ Intensive ਗੁਣ ਹੈ; ਇਸ ਲਈ ΔG°₃ = ΔG°₁ + ΔG°₂ ਭਾਵ n₃E°₃ = n₁E°₁ + n₂E°₂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਵੱਧ ΔT_f ਵਾਲੇ ਘੋਲ ਦਾ ਹਿਮਾਂਕ ਬਿੰਦੂ (Freezing point) ਸਭ ਤੋਂ ਵੱਧ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਵੱਧ i ਨਾਲ ΔT_f ਵੱਧ ਹੁੰਦਾ ਹੈ ਪਰ ਅਸਲ ਹਿਮਾਂਕ ਬਿੰਦੂ (T_f = 0°C − ΔT_f) ਸਭ ਤੋਂ ਘੱਟ ਹੋ ਜਾਂਦਾ ਹੈ! ਗਲੂਕੋਜ਼ (i=1) ਦਾ ਹਿਮਾਂਕ ਸਭ ਤੋਂ ਵੱਧ ਅਤੇ AlCl₃ (i=4) ਦਾ ਘੱਟ ਹੁੰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: CO₂ ਦਾ ਡਾਇਪੋਲ ਮੋਮੈਂਟ ਸਿਫ਼ਰ ਹੋਣ ਕਾਰਨ ਇਹ IR ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਕਿਰਿਆਸ਼ੀਲ ਹੈ। ਸੁਧਾਰ: CO₂ ਮਾਈਕ੍ਰੋਵੇਵ ਵਿੱਚ ਅਕਿਰਿਆਸ਼ੀਲ ਹੈ, ਪਰ ਇਸ ਦੇ ਅਸਮਿਤ ਖਿੱਚ (Asymmetric stretch) ਅਤੇ ਝੁਕਾਅ (Bending) ਕੰਪਨ IR-ਕਿਰਿਆਸ਼ੀਲ ਹਨ।'
            ],
            hi: [
                'भ्रांति: दो अर्ध-सेल अभिक्रियाओं को जोड़ते समय E°₃ = E°₁ + E°₂ सीधे जोड़ा जा सकता है। सुधार: E° एक गहन (Intensive) गुणधर्म है; अतः ΔG°₃ = ΔG°₁ + ΔG°₂ अर्थात् n₃E°₃ = n₁E°₁ + n₂E°₂ सूत्र का प्रयोग किया जाता है।',
                'भ्रांति: उच्चतम हिमांक अवनमन (ΔT_f) वाले विलयन का हिमांक (Freezing point) भी उच्चतम होता है। सुधार: i जितना अधिक होगा, ΔT_f उतना अधिक होगा परंतु वास्तविक हिमांक (T_f = 0°C − ΔT_f) उतना ही कम होगा! ग्लूकोज (i=1) का हिमांक उच्चतम और K₄[Fe(CN)₆] (i=5) का न्यूनतम होता है।',
                'भ्रांति: CO₂ का द्विध्रुव आघूर्ण शून्य होने के कारण यह IR-निष्क्रिय है। सुधार: CO₂ माइक्रोवेव-निष्क्रिय है, किंतु इसके असममित तनन (Asymmetric stretch) और बंकन (Bending) कंपन में द्विध्रुव आघूर्ण बदलता है, अतः यह IR-सक्रिय है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Calculate the EMF of the Daniell cell at 298 K: Zn(s) | Zn²⁺(0.1 M) || Cu²⁺(0.01 M) | Cu(s), given E°_cell = 1.10 V. Also find the time needed for 99.9% completion of a first-order reaction whose half-life is 15 minutes.',
                    pa: '298 K ਉੱਤੇ ਸੈੱਲ Zn(s) | Zn²⁺(0.1 M) || Cu²⁺(0.01 M) | Cu(s) ਦਾ EMF ਪਤਾ ਕਰੋ (E°_cell = 1.10 V)। ਨਾਲ ਹੀ, 15 ਮਿੰਟ ਅਰਧ-ਆਯੂ ਵਾਲੀ ਫਸਟ-ਆਰਡਰ ਕਿਰਿਆ ਦੇ 99.9% ਪੂਰਾ ਹੋਣ ਦਾ ਸਮਾਂ ਕੱਢੋ।',
                    hi: '298 K पर सेल Zn(s) | Zn²⁺(0.1 M) || Cu²⁺(0.01 M) | Cu(s) का विद्युत वाहक बल (EMF) ज्ञात कीजिए (दिया है E°_cell = 1.10 V)। साथ ही, 15 मिनट अर्ध-आयु वाली प्रथम कोटि अभिक्रिया के 99.9% पूर्ण होने का समय बताइए।'
                },
                solutionSteps: {
                    en: [
                        'Cell reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s); number of electrons transferred n = 2.',
                        'Reaction quotient Q = [Zn²⁺] / [Cu²⁺] = 0.1 / 0.01 = 10¹.',
                        'By Nernst equation: E_cell = E°_cell − (0.0591 / 2) log(10) = 1.10 − 0.02955 × 1 = 1.0704 V.',
                        'For a first-order reaction, t_99.9% = 10 × t₁/₂ = 10 × 15 min = 150 minutes.'
                    ],
                    pa: [
                        'ਸੈੱਲ ਕਿਰਿਆ ਲਈ n = 2 ਅਤੇ Q = [Zn²⁺] / [Cu²⁺] = 0.1 / 0.01 = 10।',
                        'ਨਰਨਸਟ ਸਮੀਕਰਨ ਅਨੁਸਾਰ: E_cell = 1.10 − (0.0591 / 2) log(10) = 1.10 − 0.02955 = 1.0704 V।',
                        'ਫਸਟ-ਆਰਡਰ ਕਿਰਿਆ ਲਈ: t_99.9% = 10 × t₁/₂ = 10 × 15 = 150 ਮਿੰਟ।'
                    ],
                    hi: [
                        'सेल अभिक्रिया के लिए n = 2 तथा Q = [Zn²⁺] / [Cu²⁺] = 0.1 / 0.01 = 10।',
                        'नर्नस्ट समीकरण से: E_cell = 1.10 − (0.0591 / 2) log(10) = 1.10 − 0.02955 = 1.0704 V।',
                        'प्रथम कोटि अभिक्रिया के लिए: t_99.9% = 10 × t₁/₂ = 10 × 15 = 150 मिनट।'
                    ]
                },
                finalAnswer: {
                    en: 'E_cell = 1.0704 V; t_99.9% = 150 minutes.',
                    pa: 'E_cell = 1.0704 V; t_99.9% = 150 ਮਿੰਟ।',
                    hi: 'E_cell = 1.0704 V; t_99.9% = 150 मिनट।'
                }
            },
            {
                problem: {
                    en: 'Arrange 0.1 M aqueous solutions of (I) Glucose, (II) NaCl, (III) BaCl₂, and (IV) AlCl₃ in increasing order of (a) Osmotic pressure and (b) Freezing point (assuming 100% ionization).',
                    pa: '0.1 M ਜਲੀ ਘੋਲਾਂ (I) ਗਲੂਕੋਜ਼, (II) NaCl, (III) BaCl₂ ਅਤੇ (IV) AlCl₃ ਨੂੰ (a) ਆਸਮੋਟਿਕ ਦਬਾਅ ਅਤੇ (b) ਹਿਮਾਂਕ ਬਿੰਦੂ (Freezing point) ਦੇ ਵਧਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਿਖੋ।',
                    hi: '0.1 M जलीय विलयनों (I) ग्लूकोज, (II) NaCl, (III) BaCl₂ तथा (IV) AlCl₃ को (a) परासरण दाब और (b) हिमांक (Freezing point) के बढ़ते क्रम में व्यवस्थित कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Find van \'t Hoff factor (i) for each solute: Glucose (non-electrolyte, i = 1), NaCl (i = 2), BaCl₂ (i = 3), AlCl₃ (i = 4).',
                        '(a) Osmotic pressure π = iCRT ∝ i → Increasing order: Glucose (1) < NaCl (2) < BaCl₂ (3) < AlCl₃ (4).',
                        '(b) Depression in freezing point ΔT_f ∝ i, so actual Freezing Point T_f = 0°C − ΔT_f is INVERSELY related to i → Increasing order of Freezing Point: AlCl₃ < BaCl₂ < NaCl < Glucose.'
                    ],
                    pa: [
                        'ਵਾਨਟ ਹੌਫ ਗੁਣਾਂਕ (i): ਗਲੂਕੋਜ਼ (i=1), NaCl (i=2), BaCl₂ (i=3), AlCl₃ (i=4)।',
                        '(a) ਆਸਮੋਟਿਕ ਦਬਾਅ (π ∝ i): ਗਲੂਕੋਜ਼ < NaCl < BaCl₂ < AlCl₃।',
                        '(b) ਹਿਮਾਂਕ ਬਿੰਦੂ (Freezing point): AlCl₃ < BaCl₂ < NaCl < ਗਲੂਕੋਜ਼।'
                    ],
                    hi: [
                        'वान्ट हॉफ गुणांक (i): ग्लूकोज (i=1), NaCl (i=2), BaCl₂ (i=3), AlCl₃ (i=4)।',
                        '(a) परासरण दाब (π ∝ i): ग्लूकोज < NaCl < BaCl₂ < AlCl₃।',
                        '(b) वास्तविक हिमांक (Freezing point): AlCl₃ < BaCl₂ < NaCl < ग्लूकोज।'
                    ]
                },
                finalAnswer: {
                    en: 'Osmotic pressure: Glucose < NaCl < BaCl₂ < AlCl₃; Freezing point: AlCl₃ < BaCl₂ < NaCl < Glucose.',
                    pa: 'ਆਸਮੋਟਿਕ ਦਬਾਅ: ਗਲੂਕੋਜ਼ < NaCl < BaCl₂ < AlCl₃; ਹਿਮਾਂਕ ਬਿੰਦੂ: AlCl₃ < BaCl₂ < NaCl < ਗਲੂਕੋਜ਼।',
                    hi: 'परासरण दाब: ग्लूकोज < NaCl < BaCl₂ < AlCl₃; हिमांक: AlCl₃ < BaCl₂ < NaCl < ग्लूकोज।'
                }
            }
        ],
        flashcards: [
            {
                id: 'chem-phys2-fc-1',
                question: {
                    en: '[Level H] How do specific conductivity (κ) and molar conductivity (Λ_m) change upon dilution of an electrolyte solution?',
                    pa: '[Level H] ਕਿਸੇ ਇਲੈਕਟ੍ਰੋਲਾਈਟ ਘੋਲ ਨੂੰ ਪਤਲਾ (Dilute) ਕਰਨ ਉੱਤੇ ਵਿਸ਼ੇਸ਼ ਚਾਲਕਤਾ (κ) ਅਤੇ ਮੋਲਰ ਚਾਲਕਤਾ (Λ_m) ਕਿਵੇਂ ਬਦਲਦੀਆਂ ਹਨ?',
                    hi: '[Level H] किसी विद्युत-अपघट्य विलयन के तनुकरण पर विशिष्ट चालकता (κ) तथा मोलर चालकता (Λ_m) में क्या परिवर्तन होता है?'
                },
                answer: {
                    en: 'Specific conductivity (κ) decreases (fewer ions per unit volume), whereas Molar conductivity (Λ_m = κ × 1000 / M) increases.',
                    pa: 'ਵਿਸ਼ੇਸ਼ ਚਾਲਕਤਾ (κ) ਘਟਦੀ ਹੈ (ਪ੍ਰਤੀ ਇਕਾਈ ਆਇਤਨ ਆਇਨਾਂ ਦੀ ਗਿਣਤੀ ਘਟਣ ਕਾਰਨ), ਜਦਕਿ ਮੋਲਰ ਚਾਲਕਤਾ (Λ_m) ਵਧਦੀ ਹੈ।',
                    hi: 'विशिष्ट चालकता (κ) घटती है (प्रति इकाई आयतन में आयनों की संख्या घटने के कारण), जबकि मोलर चालकता (Λ_m) बढ़ती है।'
                }
            },
            {
                id: 'chem-phys2-fc-2',
                question: {
                    en: '[Level H] Which ionic crystal exhibits BOTH Schottky and Frenkel defects, and what are the colours of NaCl, LiCl, and KCl due to F-centres?',
                    pa: '[Level H] ਕਿਹੜਾ ਆਇਨਿਕ ਕ੍ਰਿਸਟਲ ਸ਼ੌਟਕੀ ਅਤੇ ਫ੍ਰੈਂਕਲ ਦੋਵੇਂ ਦੋਸ਼ ਦਿਖਾਉਂਦਾ ਹੈ, ਅਤੇ F-ਕੇਂਦਰਾਂ ਕਾਰਨ NaCl, LiCl ਅਤੇ KCl ਦਾ ਰੰਗ ਕੀ ਹੁੰਦਾ ਹੈ?',
                    hi: '[Level H] कौन-सा आयनिक क्रिस्टल शॉट्की और फ्रेंकेल दोनों दोष दर्शाता है, तथा F-केंद्रों के कारण NaCl, LiCl और KCl का रंग क्या होता है?'
                },
                answer: {
                    en: 'AgBr shows both Schottky and Frenkel defects. Due to F-centres, NaCl is Yellow, LiCl is Pink, and KCl is Violet/Lilac.',
                    pa: 'AgBr ਸ਼ੌਟਕੀ ਅਤੇ ਫ੍ਰੈਂਕਲ ਦੋਵੇਂ ਦੋਸ਼ ਦਿਖਾਉਂਦਾ ਹੈ। F-ਕੇਂਦਰਾਂ ਕਾਰਨ NaCl ਪੀਲਾ, LiCl ਗੁਲਾਬੀ ਅਤੇ KCl ਬੈਂਗਣੀ (Lilac) ਹੁੰਦਾ ਹੈ।',
                    hi: 'AgBr शॉट्की व फ्रेंकेल दोनों दोष दर्शाता है। F-केंद्रों के कारण NaCl पीला, LiCl गुलाबी तथा KCl बैंगनी (Lilac) दिखता है।'
                }
            },
            {
                id: 'chem-phys2-fc-3',
                question: {
                    en: '[Level G] State the Hardy-Schulze rule and arrange Al³⁺, Ba²⁺, and Na⁺ in order of coagulating power for a negative As₂S₃ sol.',
                    pa: '[Level G] ਹਾਰਡੀ-ਸ਼ੁਲਜ਼ ਨਿਯਮ ਦੱਸੋ ਅਤੇ ਰਿਣਾਤਮਕ As₂S₃ ਸੌਲ ਲਈ Al³⁺, Ba²⁺ ਅਤੇ Na⁺ ਨੂੰ ਸਕੰਦਨ ਸ਼ਕਤੀ ਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਿਖੋ।',
                    hi: '[Level G] हार्डी-शुल्ज़ नियम लिखिए तथा ऋणात्मक As₂S₃ सॉल के लिए Al³⁺, Ba²⁺ और Na⁺ को स्कंदन क्षमता के क्रम में लिखिए।'
                },
                answer: {
                    en: 'Greater the valency of the oppositely charged flocculating ion, greater is its coagulating power: Al³⁺ > Ba²⁺ > Na⁺.',
                    pa: 'ਵਿਰੋਧੀ ਚਾਰਜ ਵਾਲੇ ਆਇਨ ਦੀ ਸੰਯੋਜਕਤਾ ਜਿੰਨੀ ਵੱਧ ਹੋਵੇਗੀ, ਉਸ ਦੀ ਸਕੰਦਨ ਸ਼ਕਤੀ ਓਨੀ ਹੀ ਵੱਧ ਹੋਵੇਗੀ: Al³⁺ > Ba²⁺ > Na⁺।',
                    hi: 'विपरीत आवेशित आयन की संयोजकता जितनी अधिक होती है, उसकी स्कंदन क्षमता उतनी ही अधिक होती है: Al³⁺ > Ba²⁺ > Na⁺।'
                }
            },
            {
                id: 'chem-phys2-fc-4',
                question: {
                    en: '[Level G] What are the units of the rate constant (k) and the half-life dependence on initial concentration [A]₀ for Zero, First, and Second order reactions?',
                    pa: '[Level G] ਜ਼ੀਰੋ, ਫਸਟ ਅਤੇ ਸੈਕਿੰਡ ਆਰਡਰ ਕਿਰਿਆਵਾਂ ਲਈ ਵੇਗ ਸਥਿਰਾਂਕ (k) ਦੀਆਂ ਇਕਾਈਆਂ ਅਤੇ ਅਰਧ-ਆਯੂ (t₁/₂) ਦੀ [A]₀ ਉੱਤੇ ਨਿਰਭਰਤਾ ਕੀ ਹੈ?',
                    hi: '[Level G] शून्य, प्रथम और द्वितीय कोटि की अभिक्रियाओं के लिए वेग स्थिरांक (k) के मात्रक तथा अर्ध-आयु (t₁/₂) की [A]₀ पर निर्भरता क्या है?'
                },
                answer: {
                    en: 'Zero order: mol L⁻¹ s⁻¹ (t₁/₂ ∝ [A]₀) | First order: s⁻¹ (t₁/₂ = 0.693/k, independent of [A]₀) | Second order: L mol⁻¹ s⁻¹ (t₁/₂ ∝ 1/[A]₀).',
                    pa: 'ਜ਼ੀਰੋ ਆਰਡਰ: mol L⁻¹ s⁻¹ (t₁/₂ ∝ [A]₀) | ਫਸਟ ਆਰਡਰ: s⁻¹ (t₁/₂ = 0.693/k, [A]₀ ਤੋਂ ਸੁਤੰਤਰ) | ਸੈਕਿੰਡ ਆਰਡਰ: L mol⁻¹ s⁻¹ (t₁/₂ ∝ 1/[A]₀)।',
                    hi: 'शून्य कोटि: mol L⁻¹ s⁻¹ (t₁/₂ ∝ [A]₀) | प्रथम कोटि: s⁻¹ (t₁/₂ = 0.693/k, [A]₀ से स्वतंत्र) | द्वितीय कोटि: L mol⁻¹ s⁻¹ (t₁/₂ ∝ 1/[A]₀)।'
                }
            },
            {
                id: 'chem-phys2-fc-5',
                question: {
                    en: '[Level P] State the gross selection rules for Microwave (Rotational), Infrared (Vibrational), and Raman spectroscopy.',
                    pa: '[Level P] ਮਾਈਕ੍ਰੋਵੇਵ (Rotational), ਇਨਫਰਾਰੈੱਡ (IR) ਅਤੇ ਰਮਨ (Raman) ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ ਲਈ ਮੁੱਖ ਚੋਣ ਨਿਯਮ ਕੀ ਹਨ?',
                    hi: '[Level P] माइक्रोवेव (घूर्णन), अवरक्त (IR) और रमन (Raman) स्पेक्ट्रोस्कोपी के लिए मुख्य चयन नियम क्या हैं?'
                },
                answer: {
                    en: 'Microwave requires a permanent dipole moment (μ ≠ 0, ΔJ = ±1); IR requires a change in dipole moment during vibration (Δv = ±1); Raman requires a change in polarizability (so H₂, N₂, O₂ are Raman-active!).',
                    pa: 'ਮਾਈਕ੍ਰੋਵੇਵ ਲਈ ਸਥਾਈ ਡਾਇਪੋਲ ਮੋਮੈਂਟ (μ ≠ 0, ΔJ = ±1); IR ਲਈ ਕੰਪਨ ਦੌਰਾਨ ਡਾਇਪੋਲ ਮੋਮੈਂਟ ਵਿੱਚ ਬਦਲਾਅ (Δv = ±1); ਰਮਨ ਲਈ ਪੋਲਰਾਈਜ਼ੇਬਿਲਿਟੀ ਵਿੱਚ ਬਦਲਾਅ।',
                    hi: 'माइक्रोवेव के लिए स्थायी द्विध्रुव आघूर्ण (μ ≠ 0, ΔJ = ±1); IR के लिए कंपन के दौरान द्विध्रुव आघूर्ण में परिवर्तन (Δv = ±1); रमन के लिए ध्रुवणीयता में परिवर्तन।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. INORGANIC CHEMISTRY II: d- & f-BLOCK, COORDINATION & ORGANOMETALLICS,
    //    BIOINORGANIC, NUCLEAR & ANALYTICAL CHEMISTRY (Level H -> G/P)
    // =========================================================================
    {
        topicId: 'sci-chem-inorganic-coord-bio-nuclear',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote:
                'Covers ERB Punjab Master Cadre Science Chemistry Official Headings: Periodic trends & Main-group (s, p, Metallurgy, Non-aqueous solvents, HSAB), d- and f-block elements, Coordination and organometallic compounds, Bioinorganic chemistry, Nuclear chemistry, Analytical chemistry, and Physical characterisation of inorganic compounds.'
        },
        bookRefs: [
            {
                title: 'NCERT Chemistry Class XII (Part I)',
                author: 'NCERT',
                chapter: 'Chapters 6–9 (Metallurgy, p-Block, d- & f-Block Elements, Coordination Compounds)',
                relevance: 'Core foundation for Ellingham diagrams, Lanthanoid contraction, KMnO₄/K₂Cr₂O₇, Werner theory, VBT, CFT, and isomerism.'
            },
            {
                title: 'Inorganic Chemistry: Principles of Structure and Reactivity',
                author: 'J.E. Huheey, E.A. Keiter & R.L. Keiter / Puri, Sharma & Kalia',
                chapter: 'Coordination Chemistry, Organometallics, Bioinorganic & Nuclear Chemistry',
                relevance: 'Graduation/Postgraduate depth on 18-electron rule, metal carbonyl backbonding, Wilkinson/Ziegler-Natta catalysts, Hemoglobin cooperativity, HSAB, and analytical group reagents.'
            }
        ],
        summary: {
            en: `### [Level B & I: Foundation — Periodic Trends, Main-Group (s/p), Metallurgy & Non-Aqueous Solvents]
1. **Periodic Trends, s/p-Block & HSAB Principle:**
   - **Key Periodic Exceptions:** Electron Affinity: **Cl > F > Br > I** (Cl has highest EA in periodic table); Ionization Energy: **Be > B** and **N > O** (due to stable ns² and half-filled np³).
   - **Diagonal Relationships:** **Li ↔ Mg**, **Be ↔ Al**, **B ↔ Si** due to identical **ionic potential (charge/radius ratio)**.
   - **s- & p-Block Gems:** Alkali metals in **liquid NH₃** give deep **blue, paramagnetic, conducting solutions** due to **ammoniated electrons [M(NH₃)_x]⁺ + [e(NH₃)_y]⁻** (on standing with Fe catalyst, forms amide MNH₂ + H₂; at high concentration > 3 M, turns bronze and diamagnetic). **Diborane (B₂H₆)** has two **3-centre-2-electron (3c-2e) banana bonds** (sp³ B). **Borazine (B₃N₃H₆)** is *"Inorganic Benzene"*. **Inert Pair Effect** (reluctance of ns² electrons to participate in bonding due to poor d/f shielding) makes **Tl⁺ > Tl³⁺**, **Pb²⁺ > Pb⁴⁺**, and **Bi³⁺ > Bi⁵⁺** more stable.
   - **Metallurgy:** Froth floatation (sulphide ores, pine oil collector, NaCN depressant for ZnS in PbS), **Mond Process** (Ni + 4CO → [Ni(CO)₄] at 330 K → pure Ni at 450 K), **van Arkel Process** (ultra-pure **Ti and Zr** via volatile tetraiodides TiI₄/ZrI₄), **Hall-Héroult** (Al₂O₃ + Cryolite Na₃AlF₆ + Fluorspar CaF₂).
   - **Pearson's HSAB (Hard-Soft Acid-Base) Principle:** **Hard Acids** (small, high charge, non-polarizable: H⁺, Li⁺, Mg²⁺, Al³⁺, Cr³⁺, Fe³⁺, BF₃) prefer **Hard Bases** (F⁻, OH⁻, H₂O, NH₃, RO⁻). **Soft Acids** (large, low oxidation state, polarizable: Cu⁺, Ag⁺, Au⁺, Hg²⁺, Pt²⁺, Pd²⁺, Cd²⁺) prefer **Soft Bases** (I⁻, CN⁻, CO, R₂S, R₃P, C₂H₄). *[AgI₂]⁻ is stable (soft-soft), whereas [AgF₂]⁻ is unstable!*

---

### [Level H: Senior Secondary — Class 12 Core: d- & f-Block and Coordination Chemistry]
1. **d- & f-Block Elements (Transition & Inner-Transition Metals):**
   - **True Transition Elements:** Have partially filled d-orbitals in ground state or common oxidation states. **Zn (3d¹⁰ 4s²), Cd (4d¹⁰ 5s²), and Hg (5d¹⁰ 6s²)** are d-block elements but **NOT regarded as true transition elements** because they have completely filled d¹⁰ configurations.
   - **Electronic Configuration Exceptions:** **Cr (24):** [Ar] 3d⁵ 4s¹ | **Cu (29):** [Ar] 3d¹⁰ 4s¹ | **Mo (42):** [Kr] 4d⁵ 5s¹ | **Pd (46):** [Kr] **4d¹⁰ 5s⁰** | **Ag (47):** [Kr] 4d¹⁰ 5s¹ | **Pt (78):** [Xe] 4f¹⁴ 5d⁹ 6s¹ | **Au (79):** [Xe] 4f¹⁴ 5d¹⁰ 6s¹ | **Gd (64, Lanthanoid):** [Xe] **4f⁷ 5d¹ 6s²** (half-filled 4f⁷ stability!).
   - **Highest Oxidation States:** **Mn shows up to +7** (in MnO₄⁻, Mn₂O₇); **Os and Ru show +8** (in OsO₄ and RuO₄).
   - **Colour — d-d Transition vs Charge Transfer (Exam Trap!):** Most hydrated transition ions are coloured due to **d-d transitions** (d¹ to d⁹), while d⁰ (Sc³⁺, Ti⁴⁺) and d¹⁰ (Zn²⁺, Cu⁺) are colourless. **HOWEVER**, **MnO₄⁻ (purple, Mn⁷⁺ = 3d⁰)**, **Cr₂O₇²⁻ (orange, Cr⁶⁺ = 3d⁰)**, and **CrO₄²⁻ (yellow, Cr⁶⁺ = 3d⁰)** are intensely coloured despite having **zero d-electrons (d⁰)** due to **Ligand-to-Metal Charge Transfer (LMCT)** transitions (O²⁻ → Metal empty d-orbital)!
   - **Potassium Dichromate (K₂Cr₂O₇) & Potassium Permanganate (KMnO₄):**
     - **Chromate ⇌ Dichromate pH Equilibrium:** **2CrO₄²⁻ (Yellow, tetrahedral, stable in basic medium pH > 7) + 2H⁺ ⇌ Cr₂O₇²⁻ (Orange, two tetrahedra sharing 1 corner O with Cr−O−Cr bond angle 126°, stable in acidic medium pH < 7) + H₂O**.
     - **KMnO₄ Equivalent Weights:**
       - **Acidic medium (H₂SO₄):** MnO₄⁻ (+7) + 8H⁺ + 5e⁻ → **Mn²⁺ (+2)** + 4H₂O → **n-factor = 5, Eq. wt. = M / 5 = 158 / 5 = 31.6**.
       - **Neutral / Faintly Alkaline medium:** MnO₄⁻ (+7) + 2H₂O + 3e⁻ → **MnO₂ (+4)** + 4OH⁻ → **n-factor = 3, Eq. wt. = M / 3 = 52.67**.
       - **Strongly Alkaline medium (conc. KOH):** MnO₄⁻ (+7) + e⁻ → **MnO₄²⁻ (+6, green manganate)** → **n-factor = 1, Eq. wt. = M / 1 = 158**.
   - **Lanthanoid Contraction:** Steady decrease in atomic and ionic radii from **La³⁺ (Z=57) to Lu³⁺ (Z=71)**.
     - **Cause:** Extremely **poor shielding effect of 4f electrons** (shielding order: **s > p > d > f**).
     - **Consequences:** (1) Nearly **identical atomic radii of 4d and 5d transition series pairs** (**Zr ≈ Hf**, **Nb ≈ Ta**, **Mo ≈ W**), making their separation very difficult; (2) **Basic character of hydroxides decreases from La(OH)₃ to Lu(OH)₃** (by Fajan's rule, smaller Lu³⁺ makes Lu−OH more covalent, so **La(OH)₃ is the strongest base** and **Lu(OH)₃ is the weakest base**).
2. **Coordination Chemistry (Werner, Isomerism, VBT & CFT):**
   - **Werner's Theory:** **Primary valency** = Oxidation state (ionizable, non-directional, dotted lines); **Secondary valency** = Coordination number (non-ionizable, directional, determines geometry, solid lines).
   - **Ligand Types:** **Ambidentate ligands** (monodentate ligands that can ligate through two different atoms, causing **Linkage Isomerism**: **NO₂⁻** nitro-N vs **ONO⁻** nitrito-O; **SCN⁻** thiocyanato-S vs **NCS⁻** isothiocyanato-N; **CN⁻** vs **NC⁻**). **EDTA⁴⁻** is a **hexadentate** ligand (2 N + 4 O donor atoms).
   - **Stereoisomerism in Complexes:**
     - **Square Planar:** **MA₂B₂** shows cis-trans; **M(ABCD)** has **3 geometrical isomers** (2 cis, 1 trans). Square planar complexes rarely show optical isomerism (no tetrahedral chiral centre).
     - **Octahedral:** **MA₄B₂** shows cis-trans; **MA₃B₃** shows **Facial (fac, 3 identical ligands on one triangular face, 90°) and Meridional (mer, meridian, two 90° and one 180°)** isomers; **[M(aa)₃]ⁿ⁺** (e.g., [Co(en)₃]³⁺) and **cis-[M(aa)₂B₂]ⁿ⁺** (e.g., cis-[Co(en)₂Cl₂]⁺) are **optically active (chiral)**, whereas **trans-[M(aa)₂B₂]ⁿ⁺ is optically inactive (achiral)** due to a plane of symmetry!
   - **Valence Bond Theory (VBT) Classic Nickel(II) / Nickel(0) Triad:**
     | Complex | Central Metal & Config | Ligand Field | Hybridization & Geometry | Unpaired e⁻ (n) & Spin-Only μ = √[n(n+2)] |
     |---|---|---|---|---|
     | **[NiCl₄]²⁻** | Ni²⁺ (3d⁸) | Weak field Cl⁻ (no pairing) | **sp³ (Tetrahedral)** | **n = 2** (Paramagnetic, **μ = 2.83 BM**) |
     | **[Ni(CN)₄]²⁻** | Ni²⁺ (3d⁸) | Strong field CN⁻ (pairs 3d⁸) | **dsp² (Square Planar)** | **n = 0** (**Diamagnetic, μ = 0 BM**) |
     | **[Ni(CO)₄]** | **Ni⁰ (3d⁸ 4s² → 3d¹⁰)** | Strong field CO (pushes 4s² into 3d) | **sp³ (Tetrahedral)** | **n = 0** (**Diamagnetic, μ = 0 BM**) |
   - **Crystal Field Theory (CFT):**
     - **Spectrochemical Series:** **I⁻ < Br⁻ < SCN⁻ < Cl⁻ < S²⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < EDTA⁴⁻ < NH₃ < en < bipy < NO₂⁻ < PPh₃ < CN⁻ < CO**.
     - **Octahedral Splitting:** Degenerate d-orbitals split into lower-energy **t₂g (d_xy, d_yz, d_xz; energy = −0.4 Δ_o)** and higher-energy **e_g (d_x²−y², d_z²; energy = +0.6 Δ_o)**. **CFSE = [−0.4 × n(t₂g) + 0.6 × n(e_g)] Δ_o + mP**.
     - **Tetrahedral Splitting:** Inverted splitting (**e lower at −0.6 Δ_t, t₂ higher at +0.4 Δ_t**); **Δ_t = (4 / 9) Δ_o**. Since Δ_t is very small, **tetrahedral complexes are almost always High-Spin**!
     - **Jahn-Teller Distortion:** Any non-linear complex in an electronically degenerate ground state distorts (usually Z-out tetragonal elongation) to remove degeneracy. **Strong Jahn-Teller effect** occurs when **e_g orbitals are unsymmetrically filled**: **High-spin d⁴ (Cr²⁺, Mn³⁺: t₂g³ e_g¹)**, **Low-spin d⁷ (Co²⁺: t₂g⁶ e_g¹)**, and **d⁹ (Cu²⁺: t₂g⁶ e_g³)**.
     - **Trans Effect Series in Square Planar Pt(II):** **CO, CN⁻, C₂H₄ > PR₃, H⁻ > CH₃⁻ > NO₂⁻, I⁻, SCN⁻ > Br⁻ > Cl⁻ > Py, NH₃ > OH⁻ > H₂O**. (Explains why *Cisplatin* is prepared from [PtCl₄]²⁻ + NH₃, whereas [Pt(NH₃)₄]²⁺ + Cl⁻ gives *Transplatin*!).

---

### [Level G & P: Organometallics, Bioinorganic, Nuclear & Analytical Chemistry]
1. **Organometallic Chemistry, 18-Electron Rule & Homogeneous/Heterogeneous Catalysts:**
   - **Effective Atomic Number (EAN) & 18-Electron Rule:** **EAN = Z − O.S. + 2(CN)**. Transition metal carbonyls and organometallics with **18 valence electrons** (or EAN = 36 Kr, 54 Xe, 86 Rn) are exceptionally stable: **[Cr(CO)₆]** (6 + 12 = 18 e⁻), **[Fe(CO)₅]** (8 + 10 = 18 e⁻), **[Ni(CO)₄]** (10 + 8 = 18 e⁻), **Ferrocene [Fe(η⁵-C₅H₅)₂]** (Fe²⁺ d⁶ + 2×6 e⁻ = 18 e⁻, sandwich structure), **[Mn₂(CO)₁₀]** (has a direct Mn−Mn bond). *Exception:* **[V(CO)₆]** has 17 e⁻ (paramagnetic) and readily reduces to 18 e⁻ **[V(CO)₆]⁻**.
   - **Zeise's Salt:** **K[PtCl₃(η²-C₂H₄)]·H₂O** (First π-complex; ethene binds side-on with hapticity **η²** perpendicular to the square planar PtCl₃ plane).
   - **Synergic Bonding (σ + π* Backbonding) in Metal Carbonyls:**
     - Metal donates d-electrons into the empty **π* antibonding orbital of CO** (M → CO π-backbonding).
     - This **strengthens the M−C bond** (increases M−C bond order) and **weakens the C−O bond** (lowers IR stretching frequency **ν̄_CO** from free CO at **2143 cm⁻¹**).
     - **Isoelectronic Carbonyl ν̄_CO Order:** Greater negative charge on metal → stronger M→CO π* backbonding → weaker C−O bond → **lower ν̄_CO**:
       **[Fe(CO)₄]²⁻ (1790 cm⁻¹) < [Co(CO)₄]⁻ (1890 cm⁻¹) < [Ni(CO)₄] (2060 cm⁻¹) < Free CO (2143 cm⁻¹)**
       **[V(CO)₆]⁻ (1860 cm⁻¹) < [Cr(CO)₆] (2000 cm⁻¹) < [Mn(CO)₆]⁺ (2090 cm⁻¹)**.
     - **CO Stretching Frequency by Bonding Mode:** Free CO (2143 cm⁻¹) > Terminal M−CO (1850–2120 cm⁻¹) > Doubly bridging μ₂-CO (1750–1850 cm⁻¹) > Triply bridging μ₃-CO (1620–1730 cm⁻¹).
   - **Landmark Organometallic Catalysts Table:**
     | Catalyst Name | Formula & Metal Oxidation State | Industrial / Synthetic Application |
     |---|---|---|
     | **Wilkinson's Catalyst** | **[RhCl(PPh₃)₃]** — Rh(I), d⁸, 16 e⁻ square planar | **Homogeneous selective hydrogenation** of unhindered alkenes |
     | **Ziegler-Natta Catalyst** | **TiCl₄ (or TiCl₃) + Al(C₂H₅)₃** | Heterogeneous polymerization of ethene to **High-Density Polyethylene (HDPE)** & isotactic polypropylene |
     | **Wacker Process Catalyst** | **[PdCl₄]²⁻ / CuCl₂ / O₂** | Oxidation of **ethene to acetaldehyde (CH₃CHO)** |
     | **Monsanto Acetic Acid Catalyst** | **[RhI₂(CO)₂]⁻ + HI** (Cativa uses **Ir**) | Carbonylation of **methanol (CH₃OH + CO) to acetic acid** |
     | **Hydroformylation (Oxo) Catalyst** | **[HCo(CO)₄]** or **[HRh(CO)(PPh₃)₃]** | Alkene + CO + H₂ → **Aldehyde** |
2. **Bioinorganic Chemistry:**
   | Metalloprotein / Biomolecule | Metal Ion & Prosthetic Ring | Biological Function & High-Yield Exam Facts |
   |---|---|---|
   | **Hemoglobin (Hb)** | **Fe²⁺** (Porphyrin ring; 4 subunits = tetramer) | **O₂ transport** in blood; **cooperative sigmoidal binding**; **Bohr effect** (low pH / high CO₂ promotes O₂ release). Deoxy-Hb is **5-coordinate high-spin Fe²⁺ (S=2, paramagnetic, out of plane)**; Oxy-Hb is **6-coordinate low-spin (diamagnetic, Fe moves into porphyrin plane)** |
   | **Myoglobin (Mb)** | **Fe²⁺** (Porphyrin ring; 1 subunit = monomer) | **O₂ storage** in muscle; **hyperbolic** O₂ saturation curve; higher O₂ affinity than Hb at low pO₂ |
   | **Hemocyanin** | **Cu(I) → Cu(II)** (No porphyrin!) | O₂ transport in **molluscs & arthropods**; deoxy is colourless Cu(I), oxy is **blue Cu(II)-O₂²⁻-Cu(II)** |
   | **Chlorophyll** | **Mg²⁺** (**Chlorin** ring — one reduced pyrrole) | Photosynthesis light harvesting |
   | **Vitamin B₁₂ (Cyanocobalamin)** | **Co** (**Corrin** ring — lacks one methine bridge) | Only vitamin containing a metal-carbon bond (Coenzyme B₁₂); deficiency causes **Pernicious Anaemia** |
   | **Carbonic Anhydrase & Carboxypeptidase-A** | **Zn²⁺** (d¹⁰, Lewis acid, no redox) | Hydration of **CO₂ ⇌ HCO₃⁻ + H⁺** (fastest enzyme) & **hydrolysis of C-terminal peptide bond** |
   | **Cisplatin** | **cis-[Pt(NH₃)₂Cl₂]** (Pt²⁺ square planar) | **Anticancer chemotherapy drug** (cross-links N-7 of adjacent guanine bases in DNA; *trans*-isomer is inactive!) |
3. **Nuclear & Analytical Chemistry:**
   - **Radioactive Disintegration Modes:**
     - **α-decay (₂⁴He):** Atomic number **Z decreases by 2**, Mass number **A decreases by 4** (Group shifts 2 places left).
     - **β⁻-decay (₋₁⁰e):** **Z increases by 1**, **A remains unchanged** (Produces an **Isobar**!).
     - **Positron (β⁺) emission or K-electron capture:** **Z decreases by 1**, **A unchanged**.
   - **Nuclear Stability & Magic Numbers:** Nuclei with **2, 8, 20, 28, 50, 82, or 126** protons or neutrons are exceptionally stable (e.g., ₂⁴He, ₈¹⁶O, ₂₀⁴⁰Ca, ₈₂²⁰⁸Pb are doubly magic). Above Z > 20, stable nuclei require **N/Z > 1** (up to 1.52 for ²⁰⁸Pb).
   - **Qualitative Inorganic Cation Group Analysis Table:**
     | Group | Cations Included | Group Reagent | Precipitate Form |
     |---|---|---|---|
     | **Group Zero** | **NH₄⁺** | NaOH + heat; **Nessler's reagent (K₂[HgI₄] + KOH)** | Brown ppt of **Iodide of Millon's base (HgO·Hg(NH₂)I)** |
     | **Group I** | **Pb²⁺, Ag⁺, Hg₂²⁺** | **Dilute HCl** | Chlorides (PbCl₂ soluble in hot water) |
     | **Group II** | **Hg²⁺, Pb²⁺, Bi³⁺, Cu²⁺, Cd²⁺, As³⁺, Sb³⁺, Sn²⁺** | **H₂S gas in presence of dilute HCl** (Common ion effect keeps [S²⁻] low!) | Sulphides (CuS, PbS black; CdS, As₂S₃ yellow; Sb₂S₃ orange) |
     | **Group III** | **Fe³⁺, Al³⁺, Cr³⁺** | **NH₄OH in presence of excess NH₄Cl** | Hydroxides: Fe(OH)₃ reddish-brown, Al(OH)₃ gelatinous white, Cr(OH)₃ green |
     | **Group IV** | **Co²⁺, Ni²⁺, Mn²⁺, Zn²⁺** | **H₂S gas in ammoniacal medium (NH₄Cl + NH₄OH)** | Sulphides: **ZnS (white)**, **MnS (buff/flesh-coloured)**, CoS/NiS (black). (**Ni²⁺ + Dimethylglyoxime (DMG)** in NH₄OH → **rosy-red ppt**!) |
     | **Group V** | **Ba²⁺, Sr²⁺, Ca²⁺** | **(NH₄)₂CO₃ in presence of NH₄Cl + NH₄OH** | Carbonates (BaCO₃, SrCO₃, CaCO₃ white) |
     | **Group VI** | **Mg²⁺** | **Na₂HPO₄ (Disodium hydrogen phosphate) + NH₄OH + NH₄Cl** | White crystalline **Mg(NH₄)PO₄** |`,
            pa: `### [Level B & I: Foundation — ਪੀਰੀਅਡਿਕ ਰੁਝਾਨ, s/p-ਬਲਾਕ, ਧਾਤੂਕਰਮ ਅਤੇ HSAB]
1. **ਪੀਰੀਅਡਿਕ ਰੁਝਾਨ ਅਤੇ HSAB ਸਿਧਾਂਤ:**
   - **ਇਲੈਕਟ੍ਰਾਨ ਬੰਧੂਤਾ (Electron Affinity):** **Cl > F > Br > I**।
   - **ਇਨਰਟ ਪੇਅਰ ਪ੍ਰਭਾਵ (Inert Pair Effect):** ਭਾਰੀ p-ਬਲਾਕ ਤੱਤਾਂ ਵਿੱਚ ns² ਇਲੈਕਟ੍ਰਾਨਾਂ ਦੀ ਬੰਧਨ ਵਿੱਚ ਭਾਗ ਨਾ ਲੈਣ ਦੀ ਪ੍ਰਵਿਰਤੀ ਕਾਰਨ **Tl⁺ > Tl³⁺**, **Pb²⁺ > Pb⁴⁺** ਅਤੇ **Bi³⁺ > Bi⁵⁺** ਵਧੇਰੇ ਸਥਿਰ ਹਨ।
   - **ਪੀਅਰਸਨ ਦਾ HSAB ਸਿਧਾਂਤ:** ਸਖ਼ਤ ਤੇਜ਼ਾਬ (Hard Acids: H⁺, Li⁺, Mg²⁺, Al³⁺, Fe³⁺) ਸਖ਼ਤ ਖਾਰਾਂ (Hard Bases: F⁻, OH⁻, NH₃) ਨਾਲ ਅਤੇ ਨਰਮ ਤੇਜ਼ਾਬ (Soft Acids: Ag⁺, Hg²⁺, Pt²⁺, Cu⁺) ਨਰਮ ਖਾਰਾਂ (Soft Bases: I⁻, CN⁻, CO) ਨਾਲ ਸਥਿਰ ਯੋਗਿਕ ਬਣਾਉਂਦੇ ਹਨ।

---

### [Level H: Senior Secondary — Class 12: d- ਅਤੇ f-ਬਲਾਕ ਤੇ ਕੋਆਰਡੀਨੇਸ਼ਨ ਰਸਾਇਣ]
1. **d- ਅਤੇ f-ਬਲਾਕ ਤੱਤ:**
   - **Zn, Cd ਅਤੇ Hg** ਦੇ d¹⁰ ਆਰਬਿਟਲ ਪੂਰੇ ਭਰੇ ਹੋਣ ਕਾਰਨ ਇਹਨਾਂ ਨੂੰ ਸੱਚੇ ਪਰਿਵਰਤਨ ਤੱਤ (Transition elements) ਨਹੀਂ ਮੰਨਿਆ ਜਾਂਦਾ।
   - **ਰੰਗ ਦਾ ਕਾਰਨ (Exam Trap):** ਜ਼ਿਆਦਾਤਰ ਆਇਨਾਂ ਵਿੱਚ ਰੰਗ **d-d ਪਰਿਵਰਤਨ** ਕਾਰਨ ਹੁੰਦਾ ਹੈ, ਪਰ **MnO₄⁻ (ਜਾਮਣੀ, Mn⁷⁺ = d⁰)** ਅਤੇ **Cr₂O₇²⁻ (ਸੰਤਰੀ, Cr⁶⁺ = d⁰)** ਵਿੱਚ ਕੋਈ d-ਇਲੈਕਟ੍ਰਾਨ ਨਾ ਹੋਣ ਦੇ ਬਾਵਜੂਦ ਗੂੜ੍ਹਾ ਰੰਗ **ਚਾਰਜ ਟ੍ਰਾਂਸਫਰ (LMCT: O²⁻ → Metal)** ਕਾਰਨ ਹੁੰਦਾ ਹੈ!
   - **KMnO₄ ਦਾ ਤੁਲਿਆਂਕੀ ਭਾਰ:** ਤੇਜ਼ਾਬੀ ਮਾਧਿਅਮ ਵਿੱਚ **M/5 (31.6)**, ਉਦਾਸੀਨ/ਹਲਕੇ ਖਾਰੀ ਵਿੱਚ **M/3 (52.67)**, ਅਤੇ ਤੇਜ਼ ਖਾਰੀ ਮਾਧਿਅਮ ਵਿੱਚ **M/1 (158)**।
   - **ਲੈਂਥੇਨੌਇਡ ਸੁੰਗੜਨ (Lanthanoid Contraction):** **4f ਇਲੈਕਟ੍ਰਾਨਾਂ ਦੇ ਕਮਜ਼ੋਰ ਸ਼ੀਲਡਿੰਗ ਪ੍ਰਭਾਵ** ਕਾਰਨ La³⁺ ਤੋਂ Lu³⁺ ਤੱਕ ਆਕਾਰ ਘਟਦਾ ਹੈ। ਇਸ ਕਾਰਨ **Zr ≈ Hf** ਦੇ ਅਰਧ-ਵਿਆਸ ਲਗਭਗ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ ਅਤੇ ਖਾਰੀ ਸੁਭਾਅ **La(OH)₃ > ... > Lu(OH)₃** ਘਟਦਾ ਹੈ।
2. **ਕੋਆਰਡੀਨੇਸ਼ਨ ਯੋਗਿਕ (VBT ਅਤੇ CFT):**
   - **ਨਿਕਲ ਕੰਪਲੈਕਸ:** **[NiCl₄]²⁻** (sp³, ਟੈਟ੍ਰਾਹੇਡ੍ਰਲ, ਪੈਰਾਮੈਗਨੈਟਿਕ n=2, μ=2.83 BM) | **[Ni(CN)₄]²⁻** (dsp², ਸਕੁਏਅਰ ਪਲੈਨਰ, ਡਾਇਆਮੈਗਨੈਟਿਕ n=0) | **[Ni(CO)₄]** (sp³, ਟੈਟ੍ਰਾਹੇਡ੍ਰਲ, ਡਾਇਆਮੈਗਨੈਟਿਕ n=0)।
   - **CFT ਸਪਲਿਟਿੰਗ:** ਔਕਟਾਹੇਡ੍ਰਲ ਵਿੱਚ **CFSE = [−0.4 n(t₂g) + 0.6 n(e_g)] Δ_o**; ਟੈਟ੍ਰਾਹੇਡ੍ਰਲ ਵਿੱਚ **Δ_t = (4/9) Δ_o**।
   - **ਜਾਨ-ਟੈਲਰ ਵਿਗਾੜ (Jahn-Teller Distortion):** e_g ਆਰਬਿਟਲਾਂ ਦੀ ਅਸਮਿਤ ਭਰਾਈ (d⁹ Cu²⁺, ਹਾਈ-ਸਪਿਨ d⁴ Cr²⁺/Mn³⁺, ਲੋ-ਸਪਿਨ d⁷) ਵਿੱਚ ਸਭ ਤੋਂ ਪ੍ਰਬਲ ਹੁੰਦਾ ਹੈ।

---

### [Level G & P: Organometallics, Bioinorganic, Nuclear & Analytical Chemistry]
1. **ਆਰਗੈਨੋਮੈਟੈਲਿਕਸ ਅਤੇ ਉਤਪ੍ਰੇਰਕ:**
   - **18-ਇਲੈਕਟ੍ਰਾਨ ਨਿਯਮ ਅਤੇ ਬੈਕ-ਬਾਂਡਿੰਗ:** ਧਾਤੂ ਕਾਰਬੋਨਿਲਾਂ ਵਿੱਚ **M → CO (π*) ਸਿਨਰਜਿਕ ਬੈਕ-ਬਾਂਡਿੰਗ** ਕਾਰਨ M−C ਬੰਧਨ ਮਜ਼ਬੂਤ ਹੁੰਦਾ ਹੈ ਅਤੇ C−O ਬੰਧਨ ਕਮਜ਼ੋਰ ਹੁੰਦਾ ਹੈ। ਰਿਣਾਤਮਕ ਚਾਰਜ ਵਧਣ ਨਾਲ CO ਖਿੱਚਣ ਦੀ ਆਵ੍ਰਿਤੀ (**ν̄_CO**) ਘਟਦੀ ਹੈ: **[V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺ < Free CO (2143 cm⁻¹)**।
   - **ਮੁੱਖ ਉਤਪ੍ਰੇਰਕ:** **ਵਿਲਕਿਨਸਨ ਉਤਪ੍ਰੇਰਕ [RhCl(PPh₃)₃]** (ਐਲਕੀਨ ਦਾ ਚੋਣਵਾਂ ਹਾਈਡ੍ਰੋਜਨੀਕਰਨ), **ਜ਼ੀਗਲਰ-ਨਾਟਾ (TiCl₄ + AlEt₃)** (ਉੱਚ-ਘਣਤਾ ਪੌਲੀਥੀਨ HDPE), **ਵਾਕਰ ਪ੍ਰਕਿਰਿਆ ([PdCl₄]²⁻/CuCl₂)** (ਈਥੀਨ → ਐਸੀਟੈਲਡੀਹਾਈਡ)।
2. **ਬਾਇਓਇਨਆਰਗੈਨਿਕ, ਨਿਊਕਲੀਅਰ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣਾਤਮਕ ਰਸਾਇਣ:**
   - **ਹੀਮੋਗਲੋਬਿਨ (Fe²⁺ ਟੈਟ੍ਰਾਮਰ, ਸਿਗਮੋਇਡਲ ਵਕਰ, ਬੋਹਰ ਪ੍ਰਭਾਵ)** ਬਨਾਮ **ਮਾਇਓਗਲੋਬਿਨ (Fe²⁺ ਮੋਨੋਮਰ, ਹਾਈਪਰਬੋਲਿਕ ਵਕਰ)**; **ਕਲੋਰੋਫਿਲ (Mg²⁺)**; **ਵਿਟਾਮਿਨ B₁₂ (Co — ਕੋਰਿਨ ਰਿੰਗ)**; **ਕਾਰਬੋਨਿਕ ਐਨਹਾਈਡ੍ਰੇਜ਼ (Zn²⁺)**; **ਸਿਸਪਲਾਟਿਨ cis-[Pt(NH₃)₂Cl₂]** (ਕੈਂਸਰ-ਰੋਧੀ ਦਵਾਈ)।
   - **ਗੁਣਾਤਮਕ ਵਿਸ਼ਲੇਸ਼ਣ (Group Analysis):** ਗਰੁੱਪ I (dil. HCl: Pb²⁺, Ag⁺), ਗਰੁੱਪ II (dil. HCl ਵਿੱਚ H₂S: Cu²⁺, Cd²⁺), ਗਰੁੱਪ III (NH₄Cl + NH₄OH: Fe³⁺, Al³⁺, Cr³⁺), ਗਰੁੱਪ IV (NH₄OH ਵਿੱਚ H₂S: Co²⁺, Ni²⁺, Mn²⁺, Zn²⁺; **Ni²⁺ + DMG → ਗੁਲਾਬੀ-ਲਾਲ ਅਵਖੇਪ**)।`,
            hi: `### [Level B & I: Foundation — आवर्त प्रवृत्तियाँ, s/p-ब्लॉक, धातुकर्म एवं HSAB]
1. **आवर्त सारणी के अपवाद एवं HSAB सिद्धांत:**
   - **इलेक्ट्रॉन बंधुता (Electron Affinity):** **Cl > F > Br > I**।
   - **अक्रिय युग्म प्रभाव (Inert Pair Effect):** भारी p-ब्लॉक तत्वों में ns² इलेक्ट्रॉनों के आबंधन में भाग न लेने के कारण **Tl⁺ > Tl³⁺**, **Pb²⁺ > Pb⁴⁺** तथा **Bi³⁺ > Bi⁵⁺** अधिक स्थायी होते हैं।
   - **पियर्सन का HSAB सिद्धांत:** कठोर अम्ल (Hard Acids: H⁺, Li⁺, Mg²⁺, Al³⁺, Fe³⁺) कठोर क्षारों (Hard Bases: F⁻, OH⁻, NH₃) के साथ तथा मृदु अम्ल (Soft Acids: Ag⁺, Hg²⁺, Pt²⁺, Cu⁺) मृदु क्षारों (Soft Bases: I⁻, CN⁻, CO) के साथ स्थायी संकुल बनाते हैं।

---

### [Level H: Senior Secondary — Class 12: d- एवं f-ब्लॉक तथा उपसहसंयोजन रसायन]
1. **d- एवं f-ब्लॉक तत्व:**
   - **Zn, Cd तथा Hg** में पूर्ण पूरित d¹⁰ विन्यास होने के कारण इन्हें वास्तविक संक्रमण तत्व (Transition elements) नहीं माना जाता।
   - **रंग का कारण (Exam Trap):** अधिकांश संक्रमण आयनों में रंग **d-d संक्रमण** के कारण होता है, किंतु **MnO₄⁻ (बैंगनी, Mn⁷⁺ = d⁰)** तथा **Cr₂O₇²⁻ (नारंगी, Cr⁶⁺ = d⁰)** में शून्य d-इलेक्ट्रॉन होते हुए भी गहरा रंग **आवेश स्थानांतरण (LMCT: O²⁻ → Metal)** के कारण होता है!
   - **KMnO₄ का तुल्यांकी भार:** अम्लीय माध्यम में **M/5 (31.6)**, उदासीन/दुर्बल क्षारीय में **M/3 (52.67)**, तथा प्रबल क्षारीय माध्यम में **M/1 (158)**।
   - **लैंथेनॉइड संकुचन (Lanthanoid Contraction):** **4f इलेक्ट्रॉनों के दुर्बल परिरक्षण (Poor shielding) प्रभाव** के कारण La³⁺ से Lu³⁺ तक त्रिज्या घटती है। इसके परिणामस्वरूप **Zr ≈ Hf** की त्रिज्याएँ लगभग समान हो जाती हैं तथा क्षारीय सामर्थ्य **La(OH)₃ > ... > Lu(OH)₃** घटता है।
2. **उपसहसंयोजन यौगिक (VBT एवं CFT):**
   - **निकल संकुल त्रयी:** **[NiCl₄]²⁻** (sp³, चतुष्फलकीय, अनुचुंबकीय n=2, μ=2.83 BM) | **[Ni(CN)₄]²⁻** (dsp², वर्ग समतलीय, प्रतिचुंबकीय n=0) | **[Ni(CO)₄]** (sp³, चतुष्फलकीय, प्रतिचुंबकीय n=0)।
   - **CFT विपाटन:** अष्टफलकीय में **CFSE = [−0.4 n(t₂g) + 0.6 n(e_g)] Δ_o**; चतुष्फलकीय में **Δ_t = (4/9) Δ_o**।
   - **जान-टेलर विरूपण (Jahn-Teller Distortion):** e_g कक्षकों के असममित भराव (d⁹ Cu²⁺, उच्च-चक्रण d⁴ Cr²⁺/Mn³⁺, निम्न-चक्रण d⁷) में सर्वाधिक प्रबल होता है।

---

### [Level G & P: Organometallics, Bioinorganic, Nuclear & Analytical Chemistry]
1. **कार्बधात्विक रसायन एवं उत्प्रेरक:**
   - **18-इलेक्ट्रॉन नियम एवं पश्च-आबंधन (Backbonding):** धातु कार्बोनिलों में **M → CO (π*) सिनर्जिक पश्च-आबंधन** से M−C आबंध प्रबल तथा C−O आबंध दुर्बल होता है। संकुल पर ऋणावेश बढ़ने से CO तनन आवृत्ति (**ν̄_CO**) घटती है: **[V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺ < मुक्त CO (2143 cm⁻¹)**।
   - **प्रमुख उत्प्रेरक:** **विल्किन्सन उत्प्रेरक [RhCl(PPh₃)₃]** (एल्कीन का चयनात्मक हाइड्रोजनीकरण), **ज़ीग्लर-नाटा (TiCl₄ + AlEt₃)** (उच्च-घनत्व पॉलीथीन HDPE), **वाकर प्रक्रम ([PdCl₄]²⁻/CuCl₂)** (एथीन → एसीटैल्डिहाइड)।
2. **जैव-अकार्बनिक, नाभिकीय एवं विश्लेषणात्मक रसायन:**
   - **हीमोग्लोबिन (Fe²⁺ टेट्रामर, सिग्मॉइडल वक्र, बोर प्रभाव)** बनाम **मायोग्लोबिन (Fe²⁺ मोनोमर, अतिपरवलयिक वक्र)**; **क्लोरोफिल (Mg²⁺)**; **विटामिन B₁₂ (Co — कोरिन वलय)**; **कार्बोनिक एनहाइड्रेज़ (Zn²⁺)**; **सिसप्लेटिन cis-[Pt(NH₃)₂Cl₂]** (कैंसर-रोधी औषधि)।
   - **गुणात्मक विश्लेषण (Group Analysis):** समूह I (तनु HCl: Pb²⁺, Ag⁺), समूह II (तनु HCl में H₂S: Cu²⁺, Cd²⁺), समूह III (NH₄Cl + NH₄OH: Fe³⁺, Al³⁺, Cr³⁺), समूह IV (NH₄OH में H₂S: Co²⁺, Ni²⁺, Mn²⁺, Zn²⁺; **Ni²⁺ + DMG → गुलाबी-लाल अवक्षेप**)।`
        },
        keyNotes: {
            en: [
                'MnO₄⁻ (purple) and Cr₂O₇²⁻ (orange) have d⁰ central metal ions (Mn⁷⁺ and Cr⁶⁺); their intense colour arises from Ligand-to-Metal Charge Transfer (LMCT), NOT d-d transitions.',
                'Lanthanoid Contraction is caused by poor shielding of 4f electrons, resulting in nearly identical atomic radii of 4d and 5d pairs (Zr/Hf, Nb/Ta) and decreasing basicity from La(OH)₃ to Lu(OH)₃.',
                'Among 4-coordinate Nickel complexes: [NiCl₄]²⁻ is sp³ tetrahedral paramagnetic (2 unpaired e⁻, μ = 2.83 BM), [Ni(CN)₄]²⁻ is dsp² square planar diamagnetic, and [Ni(CO)₄] is sp³ tetrahedral diamagnetic.',
                'In metal carbonyls, M → CO(π*) backbonding strengthens the M−C bond and weakens the C−O bond; thus C−O stretching frequency follows: [V(CO)₆]⁻ (1860) < [Cr(CO)₆] (2000) < [Mn(CO)₆]⁺ (2090) < Free CO (2143 cm⁻¹).',
                'Deoxy-hemoglobin has 5-coordinate high-spin paramagnetic Fe²⁺ sitting outside the porphyrin plane, which shifts into the plane as 6-coordinate low-spin diamagnetic upon O₂ binding.',
                'In qualitative salt analysis, H₂S is passed in acidic medium (dil. HCl) for Group II to suppress [S²⁻] via Common Ion Effect, whereas H₂S is passed in basic medium (NH₄OH) for Group IV to precipitate higher-K_sp sulphides (ZnS, MnS, CoS, NiS).'
            ],
            pa: [
                'MnO₄⁻ (ਜਾਮਣੀ) ਅਤੇ Cr₂O₇²⁻ (ਸੰਤਰੀ) ਵਿੱਚ ਕੇਂਦਰੀ ਧਾਤੂ d⁰ (Mn⁷⁺ ਅਤੇ Cr⁶⁺) ਹੁੰਦੀ ਹੈ; ਇਹਨਾਂ ਦਾ ਗੂੜ੍ਹਾ ਰੰਗ ਚਾਰਜ ਟ੍ਰਾਂਸਫਰ (LMCT) ਕਾਰਨ ਹੁੰਦਾ ਹੈ, ਨਾ ਕਿ d-d ਪਰਿਵਰਤਨ ਕਾਰਨ।',
                '4f ਇਲੈਕਟ੍ਰਾਨਾਂ ਦੇ ਕਮਜ਼ੋਰ ਸ਼ੀਲਡਿੰਗ ਪ੍ਰਭਾਵ ਕਾਰਨ ਲੈਂਥੇਨੌਇਡ ਸੁੰਗੜਨ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਨਾਲ Zr ਤੇ Hf ਦੇ ਅਰਧ-ਵਿਆਸ ਬਰਾਬਰ ਹੋ ਜਾਂਦੇ ਹਨ ਅਤੇ La(OH)₃ ਤੋਂ Lu(OH)₃ ਤੱਕ ਖਾਰੀਪਣ ਘਟਦਾ ਹੈ।',
                'ਨਿਕਲ ਦੇ 4-ਕੋਆਰਡੀਨੇਟ ਕੰਪਲੈਕਸਾਂ ਵਿੱਚ: [NiCl₄]²⁻ sp³ ਟੈਟ੍ਰਾਹੇਡ੍ਰਲ ਪੈਰਾਮੈਗਨੈਟਿਕ (μ = 2.83 BM), [Ni(CN)₄]²⁻ dsp² ਸਕੁਏਅਰ ਪਲੈਨਰ ਡਾਇਆਮੈਗਨੈਟਿਕ, ਅਤੇ [Ni(CO)₄] sp³ ਟੈਟ੍ਰਾਹੇਡ੍ਰਲ ਡਾਇਆਮੈਗਨੈਟਿਕ ਹੁੰਦਾ ਹੈ।',
                'ਧਾਤੂ ਕਾਰਬੋਨਿਲਾਂ ਵਿੱਚ M → CO(π*) ਬੈਕ-ਬਾਂਡਿੰਗ ਕਾਰਨ C−O ਆਵ੍ਰਿਤੀ (ν̄_CO) ਦਾ ਕ੍ਰਮ: [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺ < Free CO (2143 cm⁻¹) ਹੁੰਦਾ ਹੈ।',
                'ਡੀਆਕਸੀ-ਹੀਮੋਗਲੋਬਿਨ ਵਿੱਚ Fe²⁺ ਹਾਈ-ਸਪਿਨ ਪੈਰਾਮੈਗਨੈਟਿਕ ਹੁੰਦਾ ਹੈ ਜੋ O₂ ਜੁੜਨ ਉੱਤੇ ਲੋ-ਸਪਿਨ ਡਾਇਆਮੈਗਨੈਟਿਕ ਹੋ ਕੇ ਪੋਰਫਾਇਰਿਨ ਤਲ ਵਿੱਚ ਆ ਜਾਂਦਾ ਹੈ।',
                'ਗਰੁੱਪ II ਦੇ ਧਨਾਇਨਾਂ ਲਈ H₂S ਗੈਸ dil. HCl ਦੀ ਮੌਜੂਦਗੀ ਵਿੱਚ (ਕੌਮਨ ਆਇਨ ਪ੍ਰਭਾਵ) ਅਤੇ ਗਰੁੱਪ IV ਲਈ NH₄OH ਦੀ ਮੌਜੂਦਗੀ ਵਿੱਚ ਲੰਘਾਈ ਜਾਂਦੀ ਹੈ।'
            ],
            hi: [
                'MnO₄⁻ (बैंगनी) और Cr₂O₇²⁻ (नारंगी) में केंद्रीय धातु d⁰ (Mn⁷⁺ व Cr⁶⁺) होती है; इनका गहरा रंग लिगैंड-से-धातु आवेश स्थानांतरण (LMCT) के कारण होता है, न कि d-d संक्रमण के कारण।',
                '4f इलेक्ट्रॉनों के दुर्बल परिरक्षण के कारण लैंथेनॉइड संकुचन होता है, जिससे Zr व Hf की त्रिज्याएँ समान हो जाती हैं तथा La(OH)₃ से Lu(OH)₃ तक क्षारीयता घटती है।',
                'निकल के 4-उपसहसंयोजन संकुलों में: [NiCl₄]²⁻ sp³ चतुष्फलकीय अनुचुंबकीय (μ = 2.83 BM), [Ni(CN)₄]²⁻ dsp² वर्ग समतलीय प्रतिचुंबकीय, तथा [Ni(CO)₄] sp³ चतुष्फलकीय प्रतिचुंबकीय होता है।',
                'धातु कार्बोनिलों में M → CO(π*) पश्च-आबंधन के कारण C−O तनन आवृत्ति (ν̄_CO) का क्रम: [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺ < मुक्त CO (2143 cm⁻¹) होता है।',
                'डीऑक्सी-हीमोग्लोबिन में Fe²⁺ उच्च-चक्रण अनुचुंबकीय होता है जो O₂ जुड़ने पर निम्न-चक्रण प्रतिचुंबकीय होकर पोरफाइरिन तल के भीतर आ जाता है।',
                'समूह II के धनायनों हेतु H₂S गैस तनु HCl की उपस्थिति में (सम-आयन प्रभाव) तथा समूह IV हेतु NH₄OH की उपस्थिति में प्रवाहित की जाती है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'KMnO₄ Equivalent Weights: Acidic (→ Mn²⁺) = M/5 (31.6) | Neutral/Faintly Basic (→ MnO₂) = M/3 (52.67) | Strongly Alkaline (→ MnO₄²⁻) = M/1 (158).',
                'Coordination Stereoisomerism: MA₃B₃ → fac & mer (2 isomers) | M(ABCD) square planar → 3 geometrical isomers | trans-[M(en)₂Cl₂]⁺ is optically INACTIVE (meso/achiral), cis-[M(en)₂Cl₂]⁺ is optically ACTIVE.',
                'CFT & Magnetic Moment: μ_spin-only = √[n(n+2)] BM (n=1 → 1.73, n=2 → 2.83, n=3 → 3.87, n=4 → 4.90, n=5 → 5.92 BM) | Δ_t = (4/9) Δ_o.',
                'Organometallic Catalysts: Wilkinson = [RhCl(PPh₃)₃] (Alkene hydrogenation) | Ziegler-Natta = TiCl₄ + AlEt₃ (HDPE) | Wacker = [PdCl₄]²⁻/CuCl₂ (Ethene → CH₃CHO) | Monsanto = [RhI₂(CO)₂]⁻ (CH₃OH → CH₃COOH).',
                'Bioinorganic Metals: Fe = Hemoglobin/Myoglobin/Cytochrome | Mg = Chlorophyll | Co = Vitamin B₁₂ | Zn = Carbonic anhydrase & Carboxypeptidase-A | Cu = Hemocyanin | Pt = Cisplatin.'
            ],
            pa: [
                'KMnO₄ ਤੁਲਿਆਂਕੀ ਭਾਰ: ਤੇਜ਼ਾਬੀ (→ Mn²⁺) = M/5 (31.6) | ਉਦਾਸੀਨ (→ MnO₂) = M/3 (52.67) | ਤੇਜ਼ ਖਾਰੀ (→ MnO₄²⁻) = M/1 (158)।',
                'ਆਈਸੋਮੈਰਿਜ਼ਮ: MA₃B₃ → fac ਅਤੇ mer | trans-[M(en)₂Cl₂]⁺ ਪ੍ਰਕਾਸ਼ੀ ਤੌਰ ਉੱਤੇ ਅਕਿਰਿਆਸ਼ੀਲ (Optically Inactive) ਹੈ, ਜਦਕਿ cis-[M(en)₂Cl₂]⁺ ਕਿਰਿਆਸ਼ੀਲ ਹੈ।',
                'ਚੁੰਬਕੀ ਆਘੂਰਨ: μ = √[n(n+2)] BM (n=1 → 1.73, n=2 → 2.83, n=3 → 3.87, n=4 → 4.90, n=5 → 5.92 BM) | Δ_t = (4/9) Δ_o।',
                'ਉਤਪ੍ਰੇਰਕ: ਵਿਲਕਿਨਸਨ = [RhCl(PPh₃)₃] | ਜ਼ੀਗਲਰ-ਨਾਟਾ = TiCl₄ + AlEt₃ | ਵਾਕਰ = [PdCl₄]²⁻/CuCl₂ | ਮੋਨਸੈਂਟੋ = [RhI₂(CO)₂]⁻।',
                'ਬਾਇਓਇਨਆਰਗੈਨਿਕ ਧਾਤਾਂ: Fe = ਹੀਮੋਗਲੋਬਿਨ | Mg = ਕਲੋਰੋਫਿਲ | Co = ਵਿਟਾਮਿਨ B₁₂ | Zn = ਕਾਰਬੋਨਿਕ ਐਨਹਾਈਡ੍ਰੇਜ਼ | Cu = ਹੀਮੋਸਾਇਨਿਨ | Pt = ਸਿਸਪਲਾਟਿਨ।'
            ],
            hi: [
                'KMnO₄ तुल्यांकी भार: अम्लीय (→ Mn²⁺) = M/5 (31.6) | उदासीन (→ MnO₂) = M/3 (52.67) | प्रबल क्षारीय (→ MnO₄²⁻) = M/1 (158)।',
                'समावयवता: MA₃B₃ → fac व mer | trans-[M(en)₂Cl₂]⁺ प्रकाशिक निष्क्रिय (Optically Inactive) है, जबकि cis-[M(en)₂Cl₂]⁺ प्रकाशिक सक्रिय है।',
                'चुंबकीय आघूर्ण: μ = √[n(n+2)] BM (n=1 → 1.73, n=2 → 2.83, n=3 → 3.87, n=4 → 4.90, n=5 → 5.92 BM) | Δ_t = (4/9) Δ_o।',
                'उत्प्रेरक: विल्किन्सन = [RhCl(PPh₃)₃] | ज़ीग्लर-नाटा = TiCl₄ + AlEt₃ | वाकर = [PdCl₄]²⁻/CuCl₂ | मोनसेंटो = [RhI₂(CO)₂]⁻।',
                'जैव-अकार्बनिक धातुएँ: Fe = हीमोग्लोबिन | Mg = क्लोरोफिल | Co = विटामिन B₁₂ | Zn = कार्बोनिक एनहाइड्रेज़ | Cu = हीमोसायनिन | Pt = सिसप्लेटिन।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: KMnO₄ and K₂Cr₂O₇ are coloured because of d-d electronic transitions. Correction: In both MnO₄⁻ (Mn⁷⁺) and Cr₂O₇²⁻ (Cr⁶⁺), the metal has a 3d⁰ configuration (zero d-electrons!); their intense colour is due to Ligand-to-Metal Charge Transfer (LMCT) from O²⁻ to empty metal d-orbitals.',
                'Misconception: Both [NiCl₄]²⁻ and [Ni(CO)₄] are tetrahedral, so both must be paramagnetic. Correction: In [NiCl₄]²⁻, Nickel is Ni²⁺ (3d⁸) with 2 unpaired electrons (paramagnetic, μ = 2.83 BM), whereas in [Ni(CO)₄], Nickel is in zero oxidation state Ni⁰ (3d⁸ 4s² → 3d¹⁰ pairing under strong-field CO), making it completely diamagnetic (μ = 0).',
                'Misconception: Stronger M−C bonding in metal carbonyls increases the C−O stretching frequency (ν̄_CO). Correction: Stronger M → CO(π*) backbonding populates the antibonding π* orbital of CO, which strengthens the M−C bond but WEAKENS the C−O bond and LOWERS ν̄_CO.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: KMnO₄ ਅਤੇ K₂Cr₂O₇ ਦਾ ਰੰਗ d-d ਇਲੈਕਟ੍ਰਾਨਿਕ ਪਰਿਵਰਤਨ ਕਾਰਨ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: MnO₄⁻ (Mn⁷⁺) ਅਤੇ Cr₂O₇²⁻ (Cr⁶⁺) ਦੋਵਾਂ ਵਿੱਚ ਧਾਤੂ ਦੀ ਸੰਰਚਨਾ 3d⁰ (ਸਿਫ਼ਰ d-ਇਲੈਕਟ੍ਰਾਨ) ਹੁੰਦੀ ਹੈ; ਇਹਨਾਂ ਦਾ ਰੰਗ ਚਾਰਜ ਟ੍ਰਾਂਸਫਰ (LMCT) ਕਾਰਨ ਹੁੰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: [NiCl₄]²⁻ ਅਤੇ [Ni(CO)₄] ਦੋਵੇਂ ਟੈਟ੍ਰਾਹੇਡ੍ਰਲ ਹਨ, ਇਸ ਲਈ ਦੋਵੇਂ ਪੈਰਾਮੈਗਨੈਟਿਕ ਹੋਣਗੇ। ਸੁਧਾਰ: [NiCl₄]²⁻ ਵਿੱਚ Ni²⁺ (3d⁸, n=2) ਪੈਰਾਮੈਗਨੈਟਿਕ ਹੈ, ਪਰ [Ni(CO)₄] ਵਿੱਚ Ni⁰ (3d¹⁰, n=0) ਡਾਇਆਮੈਗਨੈਟਿਕ ਹੈ।',
                'ਭੁਲੇਖਾ: ਧਾਤੂ ਕਾਰਬੋਨਿਲਾਂ ਵਿੱਚ ਮਜ਼ਬੂਤ M−C ਬੰਧਨ ਨਾਲ C−O ਦੀ ਆਵ੍ਰਿਤੀ (ν̄_CO) ਵਧਦੀ ਹੈ। ਸੁਧਾਰ: M → CO(π*) ਬੈਕ-ਬਾਂਡਿੰਗ ਨਾਲ M−C ਬੰਧਨ ਮਜ਼ਬੂਤ ਹੁੰਦਾ ਹੈ ਪਰ C−O ਬੰਧਨ ਕਮਜ਼ੋਰ ਹੋ ਜਾਂਦਾ ਹੈ ਜਿਸ ਨਾਲ ν̄_CO ਘਟਦੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: KMnO₄ और K₂Cr₂O₇ का रंग d-d संक्रमण के कारण होता है। सुधार: MnO₄⁻ (Mn⁷⁺) तथा Cr₂O₇²⁻ (Cr⁶⁺) दोनों में धातु का विन्यास 3d⁰ (शून्य d-इलेक्ट्रॉन) होता है; इनका गहरा रंग लिगैंड-से-धातु आवेश स्थानांतरण (LMCT) के कारण होता है।',
                'भ्रांति: [NiCl₄]²⁻ तथा [Ni(CO)₄] दोनों चतुष्फलकीय हैं, अतः दोनों अनुचुंबकीय होंगे। सुधार: [NiCl₄]²⁻ में Ni²⁺ (3d⁸, n=2) अनुचुंबकीय है, जबकि [Ni(CO)₄] में Ni⁰ (3d¹⁰, n=0) प्रतिचुंबकीय (Diamagnetic) होता है।',
                'भ्रांति: धातु कार्बोनिलों में प्रबल M−C आबंधन से C−O तनन आवृत्ति (ν̄_CO) बढ़ती है। सुधार: M → CO(π*) पश्च-आबंधन से CO के π* प्रतिबंधी कक्षक में इलेक्ट्रॉन जाते हैं जिससे M−C आबंध प्रबल होता है किंतु C−O आबंध दुर्बल होकर ν̄_CO घट जाती है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Calculate the Crystal Field Stabilization Energy (CFSE) and spin-only magnetic moment (μ) for (a) [Fe(H₂O)₆]²⁺ and (b) [Fe(CN)₆]⁴⁻.',
                    pa: '(a) [Fe(H₂O)₆]²⁺ ਅਤੇ (b) [Fe(CN)₆]⁴⁻ ਲਈ ਕ੍ਰਿਸਟਲ ਫੀਲਡ ਸਥਿਰੀਕਰਨ ਊਰਜਾ (CFSE) ਅਤੇ ਸਪਿਨ-ਓਨਲੀ ਚੁੰਬਕੀ ਆਘੂਰਨ (μ) ਪਤਾ ਕਰੋ।',
                    hi: '(a) [Fe(H₂O)₆]²⁺ तथा (b) [Fe(CN)₆]⁴⁻ के लिए क्रिस्टल क्षेत्र स्थायीकरण ऊर्जा (CFSE) एवं प्रचक्रण-मात्र चुंबकीय आघूर्ण (μ) की गणना कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'In both complexes, Iron is in +2 oxidation state: Fe²⁺ = 3d⁶.',
                        '(a) In [Fe(H₂O)₆]²⁺, H₂O is a weak-field ligand (High-spin): configuration is t₂g⁴ e_g².',
                        'CFSE = [−0.4(4) + 0.6(2)] Δ_o = (−1.6 + 1.2) Δ_o = −0.4 Δ_o. Number of unpaired electrons n = 4 → μ = √[4(4+2)] = √24 = 4.90 BM.',
                        '(b) In [Fe(CN)₆]⁴⁻, CN⁻ is a strong-field ligand (Low-spin): configuration is t₂g⁶ e_g⁰.',
                        'CFSE = [−0.4(6) + 0.6(0)] Δ_o + 2P = −2.4 Δ_o + 2P. Number of unpaired electrons n = 0 → μ = 0 BM (Diamagnetic).'
                    ],
                    pa: [
                        'ਦੋਵਾਂ ਵਿੱਚ Fe²⁺ = 3d⁶ ਹੈ।',
                        '(a) [Fe(H₂O)₆]²⁺ ਵਿੱਚ H₂O ਕਮਜ਼ੋਰ ਲਿਗੈਂਡ ਹੈ (t₂g⁴ e_g²): CFSE = [−0.4(4) + 0.6(2)] Δ_o = −0.4 Δ_o; n = 4 → μ = √24 = 4.90 BM।',
                        '(b) [Fe(CN)₆]⁴⁻ ਵਿੱਚ CN⁻ ਪ੍ਰਬਲ ਲਿਗੈਂਡ ਹੈ (t₂g⁶ e_g⁰): CFSE = −2.4 Δ_o + 2P; n = 0 → μ = 0 BM (ਡਾਇਆਮੈਗਨੈਟਿਕ)।'
                    ],
                    hi: [
                        'दोनों संकुलों में Fe²⁺ = 3d⁶ है।',
                        '(a) [Fe(H₂O)₆]²⁺ में H₂O दुर्बल क्षेत्र लिगैंड है (t₂g⁴ e_g²): CFSE = [−0.4(4) + 0.6(2)] Δ_o = −0.4 Δ_o; n = 4 → μ = √24 = 4.90 BM।',
                        '(b) [Fe(CN)₆]⁴⁻ में CN⁻ प्रबल क्षेत्र लिगैंड है (t₂g⁶ e_g⁰): CFSE = −2.4 Δ_o + 2P; n = 0 → μ = 0 BM (प्रतिचुंबकीय)।'
                    ]
                },
                finalAnswer: {
                    en: '[Fe(H₂O)₆]²⁺: CFSE = −0.4 Δ_o, μ = 4.90 BM; [Fe(CN)₆]⁴⁻: CFSE = −2.4 Δ_o + 2P, μ = 0 BM.',
                    pa: '[Fe(H₂O)₆]²⁺: CFSE = −0.4 Δ_o, μ = 4.90 BM; [Fe(CN)₆]⁴⁻: CFSE = −2.4 Δ_o + 2P, μ = 0 BM।',
                    hi: '[Fe(H₂O)₆]²⁺: CFSE = −0.4 Δ_o, μ = 4.90 BM; [Fe(CN)₆]⁴⁻: CFSE = −2.4 Δ_o + 2P, μ = 0 BM।'
                }
            },
            {
                problem: {
                    en: 'Calculate the Effective Atomic Number (EAN) and total valence electron count of (a) Ferrocene [Fe(η⁵-C₅H₅)₂] and (b) [Cr(CO)₆], and arrange [V(CO)₆]⁻, [Cr(CO)₆], and [Mn(CO)₆]⁺ in increasing order of C−O stretching frequency (ν̄_CO).',
                    pa: '(a) ਫੈਰੋਸੀਨ [Fe(η⁵-C₅H₅)₂] ਅਤੇ (b) [Cr(CO)₆] ਦਾ ਪ੍ਰਭਾਵੀ ਪਰਮਾਣੂ ਅੰਕ (EAN) ਪਤਾ ਕਰੋ, ਅਤੇ [V(CO)₆]⁻, [Cr(CO)₆], [Mn(CO)₆]⁺ ਨੂੰ C−O ਆਵ੍ਰਿਤੀ (ν̄_CO) ਦੇ ਵਧਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਿਖੋ।',
                    hi: '(a) फेरोसीन [Fe(η⁵-C₅H₅)₂] तथा (b) [Cr(CO)₆] का प्रभावी परमाणु क्रमांक (EAN) ज्ञात कीजिए, तथा [V(CO)₆]⁻, [Cr(CO)₆], [Mn(CO)₆]⁺ को C−O तनन आवृत्ति (ν̄_CO) के बढ़ते क्रम में व्यवस्थित कीजिए।'
                },
                solutionSteps: {
                    en: [
                        '(a) For Ferrocene [Fe(η⁵-C₅H₅)₂]: Fe (Z = 26) is in +2 state (26 − 2 = 24 e⁻), and two η⁵-C₅H₅⁻ ligands donate 2 × 6 = 12 e⁻ → EAN = 24 + 12 = 36 (Kr configuration; 18 valence electrons).',
                        '(b) For [Cr(CO)₆]: Cr (Z = 24) is in 0 state, and 6 CO ligands donate 6 × 2 = 12 e⁻ → EAN = 24 + 12 = 36 (18 valence electrons).',
                        'Greater negative charge on metal increases M → CO(π*) backbonding and lowers ν̄_CO: [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺.'
                    ],
                    pa: [
                        '(a) ਫੈਰੋਸੀਨ ਲਈ: Fe²⁺ (26 − 2 = 24 e⁻) + 2 × 6 e⁻ (C₅H₅⁻ ਤੋਂ) → EAN = 36 (18 ਸੰਯੋਜਕ ਇਲੈਕਟ੍ਰਾਨ)।',
                        '(b) [Cr(CO)₆] ਲਈ: Cr⁰ (24 e⁻) + 6 × 2 e⁻ = 36 (18 ਸੰਯੋਜਕ ਇਲੈਕਟ੍ਰਾਨ)।',
                        'C−O ਖਿੱਚਣ ਦੀ ਆਵ੍ਰਿਤੀ (ν̄_CO) ਦਾ ਵਧਦਾ ਕ੍ਰਮ: [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺।'
                    ],
                    hi: [
                        '(a) फेरोसीन के लिए: Fe²⁺ (26 − 2 = 24 e⁻) + 2 × 6 e⁻ (C₅H₅⁻ से) → EAN = 36 (18 संयोजी इलेक्ट्रॉन)।',
                        '(b) [Cr(CO)₆] के लिए: Cr⁰ (24 e⁻) + 6 × 2 e⁻ = 36 (18 संयोजी इलेक्ट्रॉन)।',
                        'C−O तनन आवृत्ति (ν̄_CO) का बढ़ता क्रम: [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺।'
                    ]
                },
                finalAnswer: {
                    en: 'EAN = 36 (18 valence e⁻) for both; ν̄_CO order: [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺.',
                    pa: 'ਦੋਵਾਂ ਲਈ EAN = 36 (18 e⁻); ν̄_CO ਕ੍ਰਮ: [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺।',
                    hi: 'दोनों के लिए EAN = 36 (18 e⁻); ν̄_CO क्रम: [V(CO)₆]⁻ < [Cr(CO)₆] < [Mn(CO)₆]⁺।'
                }
            }
        ],
        flashcards: [
            {
                id: 'chem-inorg-fc-1',
                question: {
                    en: '[Level H] Why do Zr and Hf have almost identical atomic radii, and how does basicity vary from La(OH)₃ to Lu(OH)₃?',
                    pa: '[Level H] Zr ਅਤੇ Hf ਦੇ ਪਰਮਾਣੂ ਅਰਧ-ਵਿਆਸ ਲਗਭਗ ਬਰਾਬਰ ਕਿਉਂ ਹੁੰਦੇ ਹਨ, ਅਤੇ La(OH)₃ ਤੋਂ Lu(OH)₃ ਤੱਕ ਖਾਰੀਪਣ ਕਿਵੇਂ ਬਦਲਦਾ ਹੈ?',
                    hi: '[Level H] Zr और Hf की परमाणु त्रिज्याएँ लगभग समान क्यों होती हैं, तथा La(OH)₃ से Lu(OH)₃ तक क्षारीयता कैसे बदलती है?'
                },
                answer: {
                    en: 'Due to Lanthanoid Contraction (poor shielding by 4f electrons). As ionic radius decreases from La³⁺ to Lu³⁺, covalent character of M−OH increases (Fajan\'s rule), so basicity decreases from La(OH)₃ (strongest base) to Lu(OH)₃ (weakest base).',
                    pa: 'ਲੈਂਥੇਨੌਇਡ ਸੁੰਗੜਨ (4f ਇਲੈਕਟ੍ਰਾਨਾਂ ਦੀ ਕਮਜ਼ੋਰ ਸ਼ੀਲਡਿੰਗ) ਕਾਰਨ। La³⁺ ਤੋਂ Lu³⁺ ਤੱਕ ਆਕਾਰ ਘਟਣ ਨਾਲ ਸਹਿ-ਸੰਯੋਜਕ ਗੁਣ ਵਧਦਾ ਹੈ, ਇਸ ਲਈ ਖਾਰੀਪਣ La(OH)₃ ਤੋਂ Lu(OH)₃ ਤੱਕ ਘਟਦਾ ਹੈ।',
                    hi: 'लैंथेनॉइड संकुचन (4f इलेक्ट्रॉनों के दुर्बल परिरक्षण) के कारण। La³⁺ से Lu³⁺ तक त्रिज्या घटने से सहसंयोजक लक्षण बढ़ता है, अतः क्षारीयता La(OH)₃ से Lu(OH)₃ तक घटती है।'
                }
            },
            {
                id: 'chem-inorg-fc-2',
                question: {
                    en: '[Level H] Compare the hybridization, geometry, and magnetic behaviour of [NiCl₄]²⁻, [Ni(CN)₄]²⁻, and [Ni(CO)₄].',
                    pa: '[Level H] [NiCl₄]²⁻, [Ni(CN)₄]²⁻ ਅਤੇ [Ni(CO)₄] ਦੇ ਸੰਕਰਣ, ਆਕਾਰ ਅਤੇ ਚੁੰਬਕੀ ਸੁਭਾਅ ਦੀ ਤੁਲਨਾ ਕਰੋ।',
                    hi: '[Level H] [NiCl₄]²⁻, [Ni(CN)₄]²⁻ तथा [Ni(CO)₄] के संकरण, ज्यामिति और चुंबकीय व्यवहार की तुलना करें।'
                },
                answer: {
                    en: '[NiCl₄]²⁻: sp³, Tetrahedral, Paramagnetic (2 unpaired e⁻, μ = 2.83 BM) | [Ni(CN)₄]²⁻: dsp², Square Planar, Diamagnetic | [Ni(CO)₄]: sp³, Tetrahedral, Diamagnetic.',
                    pa: '[NiCl₄]²⁻: sp³, ਟੈਟ੍ਰਾਹੇਡ੍ਰਲ, ਪੈਰਾਮੈਗਨੈਟਿਕ (2 ਅਣਯੁਗਮਿਤ e⁻, μ = 2.83 BM) | [Ni(CN)₄]²⁻: dsp², ਸਕੁਏਅਰ ਪਲੈਨਰ, ਡਾਇਆਮੈਗਨੈਟਿਕ | [Ni(CO)₄]: sp³, ਟੈਟ੍ਰਾਹੇਡ੍ਰਲ, ਡਾਇਆਮੈਗਨੈਟਿਕ।',
                    hi: '[NiCl₄]²⁻: sp³, चतुष्फलकीय, अनुचुंबकीय (2 अयुग्मित e⁻, μ = 2.83 BM) | [Ni(CN)₄]²⁻: dsp², वर्ग समतलीय, प्रतिचुंबकीय | [Ni(CO)₄]: sp³, चतुष्फलकीय, प्रतिचुंबकीय।'
                }
            },
            {
                id: 'chem-inorg-fc-3',
                question: {
                    en: '[Level G] What are Wilkinson\'s catalyst and Ziegler-Natta catalyst, and what are their primary catalytic roles?',
                    pa: '[Level G] ਵਿਲਕਿਨਸਨ ਉਤਪ੍ਰੇਰਕ ਅਤੇ ਜ਼ੀਗਲਰ-ਨਾਟਾ ਉਤਪ੍ਰੇਰਕ ਕੀ ਹਨ ਅਤੇ ਉਹਨਾਂ ਦੇ ਮੁੱਖ ਕੰਮ ਕੀ ਹਨ?',
                    hi: '[Level G] विल्किन्सन उत्प्रेरक तथा ज़ीग्लर-नाटा उत्प्रेरक क्या हैं और उनके मुख्य उपयोग क्या हैं?'
                },
                answer: {
                    en: 'Wilkinson\'s catalyst is [RhCl(PPh₃)₃] (Rh(I), square planar) used for homogeneous hydrogenation of alkenes. Ziegler-Natta catalyst is TiCl₄ + Al(C₂H₅)₃ used for stereospecific polymerization of ethene to High-Density Polyethylene (HDPE).',
                    pa: 'ਵਿਲਕਿਨਸਨ ਉਤਪ੍ਰੇਰਕ [RhCl(PPh₃)₃] ਐਲਕੀਨਾਂ ਦੇ ਸਮਅੰਗੀ ਹਾਈਡ੍ਰੋਜਨੀਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਜ਼ੀਗਲਰ-ਨਾਟਾ ਉਤਪ੍ਰੇਰਕ TiCl₄ + Al(C₂H₅)₃ ਉੱਚ-ਘਣਤਾ ਪੌਲੀਥੀਨ (HDPE) ਬਣਾਉਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
                    hi: 'विल्किन्सन उत्प्रेरक [RhCl(PPh₃)₃] एल्कीनों के समांगी हाइड्रोजनीकरण में प्रयुक्त होता है। ज़ीग्लर-नाटा उत्प्रेरक TiCl₄ + Al(C₂H₅)₃ उच्च-घनत्व पॉलीथीन (HDPE) के निर्माण में प्रयुक्त होता है।'
                }
            },
            {
                id: 'chem-inorg-fc-4',
                question: {
                    en: '[Level G] Match the metallobiomolecules with their central metal ion and ring: Hemoglobin, Chlorophyll, Vitamin B₁₂, Carbonic Anhydrase, and Cisplatin.',
                    pa: '[Level G] ਹੀਮੋਗਲੋਬਿਨ, ਕਲੋਰੋਫਿਲ, ਵਿਟਾਮਿਨ B₁₂, ਕਾਰਬੋਨਿਕ ਐਨਹਾਈਡ੍ਰੇਜ਼ ਅਤੇ ਸਿਸਪਲਾਟਿਨ ਵਿੱਚ ਮੌਜੂਦ ਧਾਤੂ ਆਇਨ ਦੱਸੋ।',
                    hi: '[Level G] हीमोग्लोबिन, क्लोरोफिल, विटामिन B₁₂, कार्बोनिक एनहाइड्रेज़ तथा सिसप्लेटिन में उपस्थित धातु आयन बताइए।'
                },
                answer: {
                    en: 'Hemoglobin: Fe²⁺ (Porphyrin) | Chlorophyll: Mg²⁺ (Chlorin) | Vitamin B₁₂: Co (Corrin) | Carbonic Anhydrase: Zn²⁺ | Cisplatin: Pt²⁺ (cis-[Pt(NH₃)₂Cl₂]).',
                    pa: 'ਹੀਮੋਗਲੋਬਿਨ: Fe²⁺ (ਪੋਰਫਾਇਰਿਨ) | ਕਲੋਰੋਫਿਲ: Mg²⁺ (ਕਲੋਰਿਨ) | ਵਿਟਾਮਿਨ B₁₂: Co (ਕੋਰਿਨ) | ਕਾਰਬੋਨਿਕ ਐਨਹਾਈਡ੍ਰੇਜ਼: Zn²⁺ | ਸਿਸਪਲਾਟਿਨ: Pt²⁺।',
                    hi: 'हीमोग्लोबिन: Fe²⁺ (पोरफाइरिन) | क्लोरोफिल: Mg²⁺ (क्लोरिन) | विटामिन B₁₂: Co (कोरिन) | कार्बोनिक एनहाइड्रेज़: Zn²⁺ | सिसप्लेटिन: Pt²⁺।'
                }
            },
            {
                id: 'chem-inorg-fc-5',
                question: {
                    en: '[Level P] Why is H₂S passed in dilute HCl for Group II cations but in ammoniacal NH₄OH medium for Group IV cations?',
                    pa: '[Level P] ਗਰੁੱਪ II ਦੇ ਧਨਾਇਨਾਂ ਲਈ H₂S ਗੈਸ dil. HCl ਵਿੱਚ ਪਰ ਗਰੁੱਪ IV ਲਈ NH₄OH ਮਾਧਿਅਮ ਵਿੱਚ ਕਿਉਂ ਲੰਘਾਈ ਜਾਂਦੀ ਹੈ?',
                    hi: '[Level P] समूह II के धनायनों के लिए H₂S गैस तनु HCl में किंतु समूह IV के लिए अमोनियामय NH₄OH माध्यम में क्यों प्रवाहित की जाती है?'
                },
                answer: {
                    en: 'Group II sulphides (CuS, CdS) have very low K_sp, so dilute HCl suppresses [S²⁻] via Common Ion Effect to prevent precipitation of Group IV cations. Group IV sulphides (ZnS, MnS) have high K_sp and require high [S²⁻] obtained in basic NH₄OH medium.',
                    pa: 'ਗਰੁੱਪ II ਦੇ ਸਲਫਾਈਡਾਂ ਦਾ K_sp ਬਹੁਤ ਘੱਟ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ HCl ਕੌਮਨ ਆਇਨ ਪ੍ਰਭਾਵ ਰਾਹੀਂ [S²⁻] ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ। ਗਰੁੱਪ IV ਦੇ ਸਲਫਾਈਡਾਂ (ZnS, MnS) ਦਾ K_sp ਵੱਧ ਹੋਣ ਕਾਰਨ NH₄OH ਰਾਹੀਂ ਵੱਧ [S²⁻] ਪ੍ਰਾਪਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
                    hi: 'समूह II के सल्फाइडों का K_sp बहुत कम होता है, अतः तनु HCl सम-आयन प्रभाव से [S²⁻] को कम रखता है। समूह IV के सल्फाइडों (ZnS, MnS) का K_sp अधिक होने से क्षारीय NH₄OH माध्यम में उच्च [S²⁻] आवश्यक होता है।'
                }
            }
        ]
    },

    // =========================================================================
    // 4. ORGANIC CHEMISTRY I: GOC, STEREOCHEMISTRY, HYDROCARBONS, HALOALKANES,
    //    ALCOHOLS, PHENOLS & ETHERS (Level I -> H -> G)
    // =========================================================================
    {
        topicId: 'sci-chem-organic-goc-hydrocarbons-halides',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote:
                'Covers ERB Punjab Master Cadre Science Chemistry Official Headings: Purification and characterisation of organic compounds, Basic principles of organic chemistry (GOC & Stereochemistry), Hydrocarbons, Organic compounds containing halogens, and Organic compounds containing oxygen-I (Alcohols, Phenols, Ethers).'
        },
        bookRefs: [
            {
                title: 'NCERT Chemistry Class XI (Part II) & Class XII (Part II)',
                author: 'NCERT',
                chapter: 'Organic Chemistry: Basic Principles, Hydrocarbons, Haloalkanes/Haloarenes, Alcohols, Phenols and Ethers',
                relevance: 'Direct source for Kjeldahl/Dumas/Carius estimation, electronic effects, Markovnikov/Kharasch rules, SN1/SN2, Reimer-Tiemann, Kolbe, and Williamson synthesis.'
            },
            {
                title: 'Advanced Organic Chemistry',
                author: 'Morrison & Boyd / Paula Yurkanis Bruice',
                chapter: 'Stereochemistry, Aromaticity, Nucleophilic Substitution & Elimination',
                relevance: 'Graduation-level depth on R/S & E/Z CIP rules, Hückel aromaticity, carbenes/benzyne, and Pinacol-Pinacolone rearrangement.'
            }
        ],
        summary: {
            en: `### [Level I & H: Purification, Quantitative Analysis & General Organic Chemistry (GOC)]
1. **Purification & Quantitative Elemental Analysis:**
   - **Steam Distillation:** Separates steam-volatile, water-immiscible compounds (e.g., **o-nitrophenol is steam-volatile** due to **intramolecular H-bonding**, whereas **p-nitrophenol has higher boiling point** and is non-volatile due to **intermolecular H-bonding**; also used for aniline and essential oils).
   - **Lassaigne's Test (Sodium Fusion Extract):**
     - **Nitrogen:** Na + C + N → NaCN; with FeSO₄ + Fe³⁺ + H₂SO₄ gives **Prussian Blue** colour of **Ferric ferrocyanide, Fe₄[Fe(CN)₆]₃**.
     - **Nitrogen + Sulphur together:** Forms **NaSCN**, which gives a **blood-red colour [Fe(SCN)]²⁺** with Fe³⁺.
     - **Sulphur:** Gives **violet colour** with **Sodium nitroprusside** — Na₂[Fe(CN)₅NO] → **Na₄[Fe(CN)₅NOS]**; or black ppt of PbS with lead acetate.
   - **Quantitative Estimation:**
     - **Dumas Method (for all N compounds):** Nitrogen gas collected over KOH; %N = (28 × V_N₂ at STP × 100) / (22400 × w).
     - **Kjeldahl's Method:** Organic N → (NH₄)₂SO₄ → NH₃ absorbed in standard H₂SO₄; **%N = (1.4 × N_acid × V_acid) / Mass of compound (w)**.
       - **Master Cadre Golden Trap:** **Kjeldahl's method FAILS for Nitro (−NO₂), Azo (−N=N−), Azoxy, Diazonium salts, and Nitrogen present in a ring (Pyridine, Quinoline)** because their nitrogen does not convert to (NH₄)₂SO₄!
     - **Carius Method:** Halogens precipitated as AgX (AgCl white, AgBr pale yellow, AgI yellow); Sulphur precipitated as **BaSO₄**.
2. **Electronic Displacements & Reaction Intermediates:**
   - **Inductive Effect (±I):** Permanent σ-electron displacement (fades after C₃–C₄).
     - **−I order:** **−NR₃⁺ > −NO₂ > −CN > −SO₃H > −CHO > −COOH > −F > −Cl > −Br > −I > −OR > −OH > −C₆H₅**.
     - **+I order:** **−O⁻ > −COO⁻ > −C(CH₃)₃ (3°) > −CH(CH₃)₂ (2°) > −CH₂CH₃ (1°) > −CH₃ > −T > −D > −H**.
   - **Resonance / Mesomeric Effect (±M / ±R):** π-electron delocalization.
     - **+M (Ortho/Para directors, Activating):** **−O⁻ > −NH₂ > −NHR > −OR > −NHCOR > −OH > −C₆H₅ > −F, −Cl, −Br, −I** (*Note: Halogens are deactivating due to −I > +M, yet ortho/para directing due to +M!*).
     - **−M (Meta directors, Deactivating):** **−NO₂, −CN, −SO₃H, −CHO, −COR, −COOH, −COOR, −CONH₂**.
   - **Hyperconjugation (Baker-Nathan / "No-Bond Resonance"):** σ(C−H) → empty p or π* delocalization. Stability of **alkenes, carbocations, and alkyl free radicals** is directly proportional to the **number of α-hydrogens** (e.g., **(CH₃)₂C=C(CH₃)₂ (12 α-H) > (CH₃)₂C=CHCH₃ (9 α-H) > trans-2-butene (6 α-H) > cis-2-butene (6 α-H) > propene (3 α-H) > ethene (0 α-H)**).
   - **Reaction Intermediates Comparison Table:**
     | Intermediate | Hybridization & Geometry | Valence e⁻ & Magnetism | Stability Order |
     |---|---|---|---|
     | **Carbocation (R⁺)** | **sp² (Trigonal Planar)** | **6 e⁻** (Diamagnetic, Electrophile) | **(C₆H₅)₃C⁺ > (C₆H₅)₂CH⁺ > C₆H₅CH₂⁺ ≈ CH₂=CH−CH₂⁺ ≈ 3° > 2° > 1° > CH₃⁺ > Vinyl/Aryl** (*Cyclopropylmethyl cation is extraordinarily stable due to dancing resonance!*) |
     | **Carbanion (R⁻)** | **sp³ (Pyramidal)** (sp² if conjugated) | **8 e⁻** (Diamagnetic, Nucleophile) | **CH₃⁻ > 1° > 2° > 3°**; **HC≡C⁻ (sp, 50% s) > CH₂=CH⁻ (sp²) > CH₃CH₂⁻ (sp³)** |
     | **Carbon Free Radical (R•)** | **sp² (Planar / Shallow pyramidal)** | **7 e⁻** (**Paramagnetic**) | **Benzyl ≈ Allyl > 3° > 2° > 1° > CH₃• > Vinyl** |
     | **Carbene (:CR₂)** | **Singlet: sp² bent** (paired, diamagnetic) \| **Triplet: sp²/sp** (2 unpaired e⁻, diradical) | **6 e⁻** (Neutral electrophile) | **Triplet :CH₂ is more stable** than Singlet :CH₂ (Hund's rule), **but :CCl₂ (dichlorocarbene) is more stable as Singlet** due to Cl lone-pair backbonding! |
3. **Hückel's Rule of Aromaticity & Acidity Trends:**
   - **Aromatic:** Cyclic, planar, completely conjugated (every ring atom sp²/sp), and **(4n + 2) π electrons** (n = 0, 1, 2... → **2, 6, 10, 14 π e⁻**). Examples: **Cyclopropenyl cation (2π)**, **Cyclopentadienyl anion C₅H₅⁻ (6π)**, **Benzene (6π)**, **Tropylium cation C₇H₇⁺ (6π)**, Pyrrole/Furan/Thiophene/Pyridine (6π), Azulene (10π).
   - **Anti-Aromatic (Highly unstable!):** Cyclic, planar, fully conjugated with **4n π electrons** (**4, 8 π e⁻**): **Cyclobutadiene (4π)**, **Cyclopropenyl anion (4π)**, **Cyclopentadienyl cation (4π)**. (*Note: **Cyclooctatetraene (COT, 8π)** adopts a **non-planar tub conformation** and is **Non-Aromatic**!*).
   - **Acidity Order:** **Picric acid (2,4,6-trinitrophenol) > HCOOH > C₆H₅COOH > CH₃COOH > H₂CO₃ > p-nitrophenol > o-nitrophenol > Phenol > H₂O > ROH > HC≡CH > NH₃ > CH₂=CH₂ > CH₄**. (*In substituted benzoic acids, **Ortho-effect** makes ANY ortho-substituted benzoic acid stronger than benzoic acid!*).

---

### [Level H & G: Stereochemistry, Hydrocarbons, Haloalkanes, Alcohols, Phenols & Ethers]
1. **Stereochemistry (CIP Rules, Enantiomers, Diastereomers, Conformations):**
   - **Cahn-Ingold-Prelog (CIP) Priority:** Higher **atomic number (Z)** gets higher priority (**−I > −Br > −Cl > −SO₃H > −SH > −F > −OCOR > −OR > −OH > −NO₂ > −NH₂ > −COOH > −CHO > −CH₂OH > −CN > −C₆H₅ > −C≡CH > −C(CH₃)₃ > −CH=CH₂ > −CH(CH₃)₂ > −CH₂CH₃ > −CH₃ > −D > −H**).
   - **R/S Configuration:** With lowest priority group (4) on **vertical line in Fischer projection** (or dashed wedge), **1 → 2 → 3 clockwise = R**, **anticlockwise = S**. If group 4 is on the **horizontal line in Fischer projection, reverse the result**!
   - **E/Z Nomenclature:** High-priority groups on **same side = Z (*Zusammen*)**; on **opposite sides = E (*Entgegen*)**.
   - **Meso Compounds:** Possess chiral centres (≥ 2) **AND** an internal plane/centre of symmetry (σ / i), making them **optically inactive due to internal compensation** (e.g., *meso*-tartaric acid). **Racemic mixture (±)** is an equimolar (50:50) mixture of d and l enantiomers, optically inactive due to **external compensation**.
   - **Cyclohexane Conformations Stability:** **Chair > Twist-boat > Boat > Half-chair** (Bulky groups like −C(CH₃)₃ lock into the **equatorial** position to avoid **1,3-diaxial steric repulsion**).
2. **Hydrocarbons (Alkanes, Alkenes, Alkynes & Arenes):**
   - **Alkanes:** **Wurtz reaction** (2R−X + 2Na / dry ether → R−R; fails for CH₄ and unsymmetrical alkanes), **Kolbe's Electrolysis** (2RCOONa → R−R + 2CO₂ at anode + H₂ at cathode), **Corey-House Synthesis** (R₂CuLi Gilman reagent + R'−X → unsymmetrical R−R').
   - **Alkene Additions — The 3 Alcohol & Halide Regioselectivity Rules:**
     1. **Markovnikov Addition (Electrophilic via Carbocation, with rearrangement):** HBr / HCl / HI or **Dil. H₂SO₄/H₂O** adds H⁺ to carbon with more H.
     2. **Oxymercuration-Demercuration [Hg(OAc)₂, H₂O / NaBH₄, OH⁻]:** Gives **Markovnikov alcohol WITHOUT carbocation rearrangement** (*anti* addition).
     3. **Hydroboration-Oxidation [BH₃·THF / H₂O₂, OH⁻]:** Gives **Anti-Markovnikov alcohol** (*syn* addition, no rearrangement).
     4. **Kharasch Peroxide Effect (Anti-Markovnikov Free Radical Addition):** Occurs **ONLY with HBr in presence of peroxide (R₂O₂)** (e.g., Propene + HBr + Peroxide → **1-Bromopropane**). **HCl and HI NEVER show the peroxide effect** (H−Cl bond is too strong to cleave homolytically; I• addition is endothermic).
   - **Alkyne Reduction:** **Lindlar's Catalyst (H₂ / Pd-CaCO₃ poisoned with quinoline/lead acetate)** gives **cis-alkene** (*syn* addition), whereas **Birch Reduction (Na or Li in liquid NH₃)** gives **trans-alkene** (*anti* addition via radical anion).
3. **Haloalkanes, Haloarenes, Alcohols, Phenols & Ethers:**
   - **S_N2 vs S_N1 Master Comparison Table:**
     | Feature | **S_N2 (Bimolecular)** | **S_N1 (Unimolecular)** |
     |---|---|---|
     | **Kinetics & Molecularity** | **Second order:** Rate = k[R−X][Nu⁻] | **First order:** Rate = k[R−X] (independent of [Nu⁻]) |
     | **Mechanism & Intermediate** | **1-step concerted** via pentacoordinate Transition State (no carbocation, no rearrangement) | **2-step** via planar **sp² Carbocation** intermediate (rearrangement occurs!) |
     | **Stereochemistry** | **100% Walden Inversion** of configuration (umbrella flip) | **Racemisation** (inversion + retention, with slight excess inversion due to ion-pair) |
     | **Alkyl Halide Reactivity** | **CH₃−X > 1° > 2° > 3°** (steric hindrance governs) | **Benzyl/Allyl > 3° > 2° > 1° > CH₃−X** (carbocation stability governs) |
     | **Favoured Solvent & Nucleophile** | **Polar Aprotic** (DMSO, DMF, Acetone) & **Strong nucleophile** | **Polar Protic** (H₂O, ROH, HCOOH) & **Weak nucleophile** |
   - **Halogen Exchange:** **Finkelstein Reaction** (R−Cl/Br + **NaI in dry acetone** → R−I; NaCl/NaBr precipitates in acetone driving equilibrium forward) and **Swarts Reaction** (R−Cl/Br + **AgF, Hg₂F₂, CoF₂, or SbF₃** → **R−F**).
   - **Distinction Tests for 1°, 2°, 3° Alcohols:**
     - **Lucas Test (conc. HCl + anhyd. ZnCl₂):** **3° alcohol → immediate cloudiness/turbidity** | **2° alcohol → turbidity in 5 minutes** | **1° alcohol → no turbidity at room temperature** (only on heating). *(Note: Allyl and Benzyl alcohols also give immediate turbidity due to stable carbocations!)*.
     - **Victor Meyer Test (P+I₂ → AgNO₂ → HNO₂ → KOH):** **1° = Blood Red** (Nitrolic acid) | **2° = Blue** (Pseudonitrole) | **3° = Colourless** (**R-B-C mnemonic**).
   - **Named Reactions of Phenols & Ethers:**
     - **Reimer-Tiemann Reaction:** Phenol + **CHCl₃ + aq. NaOH (340 K)** → **Salicylaldehyde** (o-hydroxybenzaldehyde, major due to intramolecular H-bonding) via electrophile **Dichlorocarbene (:CCl₂)**. (With CCl₄ + NaOH, it gives Salicylic acid).
     - **Kolbe-Schmitt Reaction:** Sodium phenoxide + **CO₂ (400 K, 4–7 atm) → H⁺** → **Salicylic acid** (2-hydroxybenzoic acid). Acetylation of Salicylic acid with **(CH₃CO)₂O / H⁺** yields **Aspirin (Acetylsalicylic acid)**.
     - **Williamson Ether Synthesis:** **R−O⁻Na⁺ + R'−X → R−O−R' (via S_N2)**. To prepare **tert-butyl methyl ether [(CH₃)₃C−O−CH₃]**, we MUST react **Sodium tert-butoxide [(CH₃)₃C−O⁻Na⁺] + CH₃−Br** (1° halide). Using **(CH₃)₃C−Br (3° halide) + CH₃O⁻Na⁺** undergoes **E2 elimination** to give **2-methylpropene (isobutylene)**!
     - **Cleavage of Unsymmetrical Ethers with HI:**
       - For 1° and 2° alkyl groups (e.g., CH₃−O−C₂H₅ + HI): proceeds via **S_N2**, so **I⁻ attacks the smaller/less hindered alkyl group** → **CH₃I + C₂H₅OH**.
       - If one group is **3°, Benzyl, or Allyl** (e.g., (CH₃)₃C−O−CH₃ + anhyd. HI): proceeds via **S_N1 (carbocation)** → **(CH₃)₃C−I + CH₃OH**!
       - In **Anisole (C₆H₅−O−CH₃) + HI**: C_aryl−O bond has partial double-bond character and never breaks → always gives **Phenol (C₆H₅OH) + CH₃I**!`,
            pa: `### [Level I & H: ਸ਼ੁੱਧੀਕਰਨ, ਮਾਤਰਾਤਮਕ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਜਨਰਲ ਆਰਗੈਨਿਕ ਕੈਮਿਸਟਰੀ (GOC)]
1. **ਸ਼ੁੱਧੀਕਰਨ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ:**
   - **ਭਾਫ਼ ਕਸ਼ੀਦਣ (Steam Distillation):** **o-ਨਾਈਟ੍ਰੋਫੀਨੋਲ** ਅੰਤਰ-ਅਣੂਕ (Intramolecular) H-ਬੰਧਨ ਕਾਰਨ ਭਾਫ਼-ਵਾਸ਼ਪਸ਼ੀਲ ਹੈ, ਜਦਕਿ **p-ਨਾਈਟ੍ਰੋਫੀਨੋਲ** Intermolecular H-ਬੰਧਨ ਕਾਰਨ ਉੱਚ ਉਬਾਲ ਦਰਜਾ ਰੱਖਦਾ ਹੈ।
   - **ਕੈਲਡਾਲ ਵਿਧੀ (Kjeldahl's Method) ਦਾ ਅਪਵਾਦ:** ਇਹ ਵਿਧੀ **ਨਾਈਟ੍ਰੋ (−NO₂), ਐਜ਼ੋ (−N=N−), ਡਾਇਆਜ਼ੋਨੀਅਮ ਲੂਣ ਅਤੇ ਰਿੰਗ ਵਿੱਚ ਮੌਜੂਦ ਨਾਈਟ੍ਰੋਜਨ (ਪਾਇਰੀਡੀਨ)** ਲਈ ਕੰਮ ਨਹੀਂ ਕਰਦੀ!
2. **ਇਲੈਕਟ੍ਰਾਨਿਕ ਪ੍ਰਭਾਵ, ਇੰਟਰਮੀਡੀਏਟਸ ਅਤੇ ਹਕਲ ਦਾ ਨਿਯਮ (Hückel's Rule):**
   - **ਕਾਰਬੋਕੈਟਾਇਨ ਸਥਿਰਤਾ (sp², 6e⁻):** **(C₆H₅)₃C⁺ > C₆H₅CH₂⁺ ≈ CH₂=CH−CH₂⁺ ≈ 3° > 2° > 1° > CH₃⁺**।
   - **ਕਾਰਬੈਨਾਇਨ ਸਥਿਰਤਾ (sp³, 8e⁻):** **CH₃⁻ > 1° > 2° > 3°**; **HC≡C⁻ (sp) > CH₂=CH⁻ (sp²) > CH₃CH₂⁻ (sp³)**।
   - **ਹਕਲ ਦਾ ਐਰੋਮੈਟਿਕਤਾ ਨਿਯਮ:** ਚੱਕਰੀ, ਸਮਤਲ, ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੰਯੁਗਮਿਤ ਅਤੇ **(4n + 2) π ਇਲੈਕਟ੍ਰਾਨ** (2, 6, 10 π e⁻: ਬੈਂਜ਼ੀਨ, ਟ੍ਰੋਪਾਇਲੀਅਮ ਧਨਾਇਨ C₇H₇⁺, ਸਾਈਕਲੋਪੈਂਟਾਡਾਈਨਾਈਲ ਰਿਣਾਇਨ C₅H₅⁻)। **4n π ਇਲੈਕਟ੍ਰਾਨ** ਵਾਲੇ ਸਮਤਲ ਚੱਕਰ **ਐਂਟੀ-ਐਰੋਮੈਟਿਕ** (ਅਤਿ ਅਸਥਿਰ) ਹੁੰਦੇ ਹਨ।

---

### [Level H & G: ਸਟੀਰੀਓਕੈਮਿਸਟਰੀ, ਹਾਈਡ੍ਰੋਕਾਰਬਨ, ਹੈਲੋਐਲਕੇਨ, ਅਲਕੋਹਲ, ਫੀਨੋਲ ਅਤੇ ਈਥਰ]
1. **ਹਾਈਡ੍ਰੋਕਾਰਬਨ (Alkenes & Alkynes):**
   - **ਮਾਰਕੋਵਨੀਕੋਵ ਨਿਯਮ** ਬਨਾਮ **ਖਰਾਸ਼ ਪਰਆਕਸਾਈਡ ਪ੍ਰਭਾਵ (Kharasch Effect):** ਪਰਆਕਸਾਈਡ ਦੀ ਮੌਜੂਦਗੀ ਵਿੱਚ ਐਂਟੀ-ਮਾਰਕੋਵਨੀਕੋਵ ਜੋੜ **ਸਿਰਫ਼ HBr ਨਾਲ** ਹੁੰਦਾ ਹੈ (HCl ਅਤੇ HI ਨਾਲ ਨਹੀਂ!)।
   - **ਹਾਈਡ੍ਰੋਬੋਰੇਸ਼ਨ-ਆਕਸੀਕਰਨ (BH₃·THF / H₂O₂, OH⁻):** ਐਂਟੀ-ਮਾਰਕੋਵਨੀਕੋਵ ਅਲਕੋਹਲ ਦਿੰਦਾ ਹੈ; **ਆਕਸੀਮਰਕਿਊਰੇਸ਼ਨ-ਡੀਮਰਕਿਊਰੇਸ਼ਨ** ਬਿਨਾਂ ਪੁਨਰ-ਵਿਵਸਥਾ (No rearrangement) ਦੇ ਮਾਰਕੋਵਨੀਕੋਵ ਅਲਕੋਹਲ ਦਿੰਦਾ ਹੈ।
   - **ਲਿੰਡਲਾਰ ਉਤਪ੍ਰੇਰਕ (Pd/CaCO₃)** → **cis-ਐਲਕੀਨ**; **ਬਰਚ ਲਘੂਕਰਨ (Na / liq. NH₃)** → **trans-ਐਲਕੀਨ**।
2. **S_N2 ਬਨਾਮ S_N1, ਅਲਕੋਹਲ, ਫੀਨੋਲ ਅਤੇ ਈਥਰ:**
   - **S_N2:** 1-ਪੜਾਅ, **100% ਵਾਲਡਨ ਇਨਵਰਸ਼ਨ**, ਕ੍ਰਮ: **CH₃X > 1° > 2° > 3°**, ਪੋਲਰ ਏਪ੍ਰੋਟਿਕ ਘੋਲਕ (DMSO, ਐਸੀਟੋਨ)।
   - **S_N1:** 2-ਪੜਾਅ (ਕਾਰਬੋਕੈਟਾਇਨ ਰਾਹੀਂ), **ਰੇਸੀਮਾਈਜ਼ੇਸ਼ਨ**, ਕ੍ਰਮ: **3° > 2° > 1° > CH₃X**, ਪੋਲਰ ਪ੍ਰੋਟਿਕ ਘੋਲਕ (H₂O, ROH)।
   - **ਲੂਕਾਸ ਟੈਸਟ (conc. HCl + anhyd. ZnCl₂):** **3° ਅਲਕੋਹਲ ਤੁਰੰਤ ਧੁੰਦਲਾਪਣ** ਦਿੰਦਾ ਹੈ, **2° 5 ਮਿੰਟ ਵਿੱਚ**, ਅਤੇ **1° ਕਮਰੇ ਦੇ ਤਾਪਮਾਨ ਉੱਤੇ ਕੋਈ ਕਿਰਿਆ ਨਹੀਂ** ਕਰਦਾ।
   - **ਰਾਈਮਰ-ਟੀਮਾਨ ਕਿਰਿਆ (Reimer-Tiemann):** ਫੀਨੋਲ + **CHCl₃ + aq. NaOH → ਸੈਲੀਸਿਲਐਲਡੀਹਾਈਡ** (ਇਲੈਕਟ੍ਰੋਫਾਈਲ: **ਡਾਈਕਲੋਰੋਕਾਰਬੀਨ :CCl₂**)।
   - **ਕੋਲਬੇ ਕਿਰਿਆ:** ਸੋਡੀਅਮ ਫੀਨੋਕਸਾਈਡ + **CO₂ → ਸੈਲੀਸਿਲਿਕ ਐਸਿਡ**।
   - **ਵਿਲੀਅਮਸਨ ਈਥਰ ਸੰਸ਼ਲੇਸ਼ਣ:** S_N2 ਵਿਧੀ ਰਾਹੀਂ ਹੁੰਦਾ ਹੈ; tert-ਬਿਊਟਾਇਲ ਮਿਥਾਇਲ ਈਥਰ ਬਣਾਉਣ ਲਈ **(CH₃)₃C−O⁻Na⁺ + CH₃Br** ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ (3° ਹੈਲਾਈਡ ਵਰਤਣ ਉੱਤੇ ਐਲਕੀਨ ਬਣ ਜਾਂਦੀ ਹੈ!)।`,
            hi: `### [Level I & H: शोधन, मात्रात्मक विश्लेषण एवं सामान्य कार्बनिक रसायन (GOC)]
1. **शोधन एवं विश्लेषण:**
   - **भाप आसवन (Steam Distillation):** **o-नाइट्रोफीनॉल** अंतरा-अणुक (Intramolecular) H-आबंधन के कारण भाप-वाष्पशील है, जबकि **p-नाइट्रोफीनॉल** अंतराणुक (Intermolecular) H-आबंधन के कारण उच्च क्वथनांक रखता है।
   - **केल्डाल विधि (Kjeldahl's Method) का अपवाद:** यह विधि **नाइट्रो (−NO₂), एजो (−N=N−), डाइएजोनियम लवण तथा वलय में उपस्थित नाइट्रोजन (पिरिडीन)** के लिए लागू नहीं होती!
2. **इलेक्ट्रॉनिक प्रभाव, मध्यवर्ती एवं हकल का नियम (Hückel's Rule):**
   - **कार्बधनायन स्थायित्व (sp², 6e⁻):** **(C₆H₅)₃C⁺ > C₆H₅CH₂⁺ ≈ CH₂=CH−CH₂⁺ ≈ 3° > 2° > 1° > CH₃⁺**।
   - **कार्बऋणायन स्थायित्व (sp³, 8e⁻):** **CH₃⁻ > 1° > 2° > 3°**; **HC≡C⁻ (sp) > CH₂=CH⁻ (sp²) > CH₃CH₂⁻ (sp³)**।
   - **हकल का एरोमैटिकता नियम:** चक्रीय, समतलीय, पूर्ण संयुग्मित तथा **(4n + 2) π इलेक्ट्रॉन** (2, 6, 10 π e⁻: बेंजीन, ट्रोपाइलियम धनायन C₇H₇⁺, साइक्लोपेंटाडाइएनाइल ऋणायन C₅H₅⁻)। **4n π इलेक्ट्रॉन** वाले समतलीय वलय **एंटी-एरोमैटिक** (अत्यंत अस्थायी) होते हैं।

---

### [Level H & G: त्रिविम रसायन, हाइड्रोकार्बन, हैलोएल्केन, अल्कोहल, फीनॉल एवं ईथर]
1. **हाइड्रोकार्बन (Alkenes & Alkynes):**
   - **मार्कोवनिकोव नियम** बनाम **खराश परॉक्साइड प्रभाव (Kharasch Effect):** परॉक्साइड की उपस्थिति में प्रति-मार्कोवनिकोव योग **केवल HBr के साथ** होता है (HCl और HI के साथ नहीं!)।
   - **हाइड्रोबोरॉनन-ऑक्सीकरण (BH₃·THF / H₂O₂, OH⁻):** प्रति-मार्कोवनिकोव अल्कोहल देता है; **ऑक्सीमर्क्यूरीकरण-विमर्क्यूरीकरण** बिना पुनर्विन्यास (No rearrangement) के मार्कोवनिकोव अल्कोहल देता है।
   - **लिंड्लार उत्प्रेरक (Pd/CaCO₃)** → **cis-एल्कीन**; **बर्च अपचयन (Na / द्रव NH₃)** → **trans-एल्कीन**।
2. **S_N2 बनाम S_N1, अल्कोहल, फीनॉल एवं ईथर:**
   - **S_N2:** 1-पद, **100% वाल्डन प्रतिलोमन (Inversion)**, क्रम: **CH₃X > 1° > 2° > 3°**, ध्रुवीय अप्रोटिक विलायक (DMSO, एसीटोन)।
   - **S_N1:** 2-पद (कार्बधनायन मध्यवर्ती), **रेसिमीकरण (Racemisation)**, क्रम: **3° > 2° > 1° > CH₃X**, ध्रुवीय प्रोटिक विलायक (H₂O, ROH)।
   - **ल्यूकास परीक्षण (conc. HCl + anhyd. ZnCl₂):** **3° अल्कोहल तुरंत धुंधलापन (Turbidity)** देता है, **2° 5 मिनट में**, तथा **1° कमरे के ताप पर कोई अभिक्रिया नहीं** करता।
   - **राइमर-टीमान अभिक्रिया (Reimer-Tiemann):** फीनॉल + **CHCl₃ + aq. NaOH → सैलिसिलैल्डिहाइड** (इलेक्ट्रॉनरागी मध्यवर्ती: **डाइक्लोरोकार्बीन :CCl₂**)।
   - **कोल्बे अभिक्रिया:** सोडियम फीनॉक्साइड + **CO₂ → सैलिसिलिक अम्ल**।
   - **विलियमसन ईथर संश्लेषण:** S_N2 क्रियाविधि से होता है; tert-ब्यूटाइल मिथाइल ईथर बनाने के लिए **(CH₃)₃C−O⁻Na⁺ + CH₃Br** का उपयोग किया जाता है (3° हैलाइड लेने पर विलोपन होकर एल्कीन बन जाती है!)।`
        },
        keyNotes: {
            en: [
                'Kjeldahl\'s method for quantitative estimation of nitrogen fails for nitro (−NO₂), azo (−N=N−), diazonium compounds, and heterocyclic ring nitrogen (e.g., pyridine).',
                'By Hückel\'s (4n + 2)π rule, Cyclopropenyl cation (2π), Cyclopentadienyl anion (C₅H₅⁻, 6π), Benzene (6π), and Tropylium cation (C₇H₇⁺, 6π) are aromatic, whereas Cyclobutadiene (4π) and Cyclopentadienyl cation (4π) are anti-aromatic.',
                'The Kharasch peroxide (anti-Markovnikov free-radical) effect operates ONLY with HBr, and never with HCl (H−Cl bond too strong) or HI (I• addition to alkene is endothermic and reversible).',
                'S_N2 reactions proceed in a single concerted step with 100% Walden inversion (CH₃X > 1° > 2° > 3°), whereas S_N1 reactions proceed via a planar carbocation intermediate with racemisation (3° > 2° > 1°).',
                'Reimer-Tiemann reaction (Phenol + CHCl₃ + aq. NaOH → Salicylaldehyde) proceeds via the neutral electrophile Dichlorocarbene (:CCl₂, singlet carbene with 6 valence electrons).',
                'In Williamson ether synthesis of tert-butyl methyl ether, Sodium tert-butoxide [(CH₃)₃C−O⁻Na⁺] must react with CH₃Br; reacting tert-butyl bromide with CH₃ONa causes E2 elimination to yield 2-methylpropene.'
            ],
            pa: [
                'ਨਾਈਟ੍ਰੋਜਨ ਦੇ ਮਾਪ ਲਈ ਕੈਲਡਾਲ ਵਿਧੀ ਨਾਈਟ੍ਰੋ (−NO₂), ਐਜ਼ੋ (−N=N−), ਡਾਇਆਜ਼ੋਨੀਅਮ ਅਤੇ ਪਾਇਰੀਡੀਨ (ਰਿੰਗ ਨਾਈਟ੍ਰੋਜਨ) ਯੋਗਿਕਾਂ ਲਈ ਕੰਮ ਨਹੀਂ ਕਰਦੀ।',
                'ਹਕਲ ਦੇ (4n + 2)π ਨਿਯਮ ਅਨੁਸਾਰ C₃H₃⁺ (2π), C₅H₅⁻ (6π), ਬੈਂਜ਼ੀਨ (6π) ਅਤੇ ਟ੍ਰੋਪਾਇਲੀਅਮ C₇H₇⁺ (6π) ਐਰੋਮੈਟਿਕ ਹਨ, ਜਦਕਿ ਸਾਈਕਲੋਬਿਊਟਾਡਾਈਨ (4π) ਅਤੇ C₅H₅⁺ (4π) ਐਂਟੀ-ਐਰੋਮੈਟਿਕ ਹਨ।',
                'ਖਰਾਸ਼ ਪਰਆਕਸਾਈਡ (ਐਂਟੀ-ਮਾਰਕੋਵਨੀਕੋਵ) ਪ੍ਰਭਾਵ ਸਿਰਫ਼ HBr ਨਾਲ ਹੁੰਦਾ ਹੈ, HCl ਜਾਂ HI ਨਾਲ ਕਦੇ ਨਹੀਂ ਹੁੰਦਾ।',
                'S_N2 ਕਿਰਿਆ 1-ਪੜਾਅ ਵਿੱਚ 100% ਵਾਲਡਨ ਇਨਵਰਸ਼ਨ ਨਾਲ (CH₃X > 1° > 2° > 3°) ਅਤੇ S_N1 ਕਿਰਿਆ ਕਾਰਬੋਕੈਟਾਇਨ ਰਾਹੀਂ ਰੇਸੀਮਾਈਜ਼ੇਸ਼ਨ ਨਾਲ (3° > 2° > 1°) ਹੁੰਦੀ ਹੈ।',
                'ਰਾਈਮਰ-ਟੀਮਾਨ ਕਿਰਿਆ (ਫੀਨੋਲ + CHCl₃ + aq. NaOH → ਸੈਲੀਸਿਲਐਲਡੀਹਾਈਡ) ਵਿੱਚ ਇਲੈਕਟ੍ਰੋਫਾਈਲ ਡਾਈਕਲੋਰੋਕਾਰਬੀਨ (:CCl₂) ਹੁੰਦਾ ਹੈ।',
                'ਵਿਲੀਅਮਸਨ ਸੰਸ਼ਲੇਸ਼ਣ ਰਾਹੀਂ tert-ਬਿਊਟਾਇਲ ਮਿਥਾਇਲ ਈਥਰ ਬਣਾਉਣ ਲਈ (CH₃)₃C−O⁻Na⁺ + CH₃Br ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ; 3° ਹੈਲਾਈਡ ਵਰਤਣ ਉੱਤੇ E2 ਵਿਲੋਪਨ ਨਾਲ ਆਈਸੋਬਿਊਟੀਲੀਨ ਬਣਦੀ ਹੈ।'
            ],
            hi: [
                'नाइट्रोजन के आकलन की केल्डाल विधि नाइट्रो (−NO₂), एजो (−N=N−), डाइएजोनियम तथा पिरिडीन (वलय नाइट्रोजन) यौगिकों पर कार्य नहीं करती।',
                'हकल के (4n + 2)π नियम के अनुसार C₃H₃⁺ (2π), C₅H₅⁻ (6π), बेंजीन (6π) तथा ट्रोपाइलियम C₇H₇⁺ (6π) एरोमैटिक हैं, जबकि साइक्लोब्यूटाडाइईन (4π) और C₅H₅⁺ (4π) एंटी-एरोमैटिक हैं।',
                'खराश परॉक्साइड (प्रति-मार्कोवनिकोव मुक्त मूलक) प्रभाव केवल HBr के साथ प्रदर्शित होता है, HCl या HI के साथ कभी नहीं।',
                'S_N2 अभिक्रिया 1-पद में 100% वाल्डन प्रतिलोमन के साथ (CH₃X > 1° > 2° > 3°) तथा S_N1 अभिक्रिया कार्बधनायन द्वारा रेसिमीकरण के साथ (3° > 2° > 1°) होती है।',
                'राइमर-टीमान अभिक्रिया (फीनॉल + CHCl₃ + aq. NaOH → सैलिसिलैल्डिहाइड) में इलेक्ट्रॉनरागी मध्यवर्ती डाइक्लोरोकार्बीन (:CCl₂) होता है।',
                'विलियमसन संश्लेषण द्वारा tert-ब्यूटाइल मिथाइल ईथर बनाने हेतु (CH₃)₃C−O⁻Na⁺ + CH₃Br लिया जाता है; 3° हैलाइड लेने पर E2 विलोपन से आइसोब्यूटिलीन बनती है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Lassaigne\'s Test Colours: N alone → Prussian Blue Fe₄[Fe(CN)₆]₃ | N + S together → Blood Red [Fe(SCN)]²⁺ | S with Na-nitroprusside → Violet Na₄[Fe(CN)₅NOS].',
                'Alkene Hydration Comparison: H₃O⁺ → Markovnikov WITH rearrangement | Hg(OAc)₂, H₂O / NaBH₄ → Markovnikov WITHOUT rearrangement | BH₃·THF / H₂O₂, OH⁻ → Anti-Markovnikov (syn) WITHOUT rearrangement.',
                'Alkyne to Alkene Stereochemistry: H₂ / Lindlar\'s catalyst (Pd-CaCO₃) → cis-Alkene | Na / liquid NH₃ (Birch reduction) → trans-Alkene.',
                'Alcohol Tests: Lucas (conc. HCl + ZnCl₂): 3° immediate, 2° 5 min, 1° no turbidity at RT | Victor Meyer: 1° Red, 2° Blue, 3° Colourless (R-B-C).',
                'Ether HI Cleavage: CH₃−O−C₂H₅ + HI → CH₃I + C₂H₅OH (S_N2) | (CH₃)₃C−O−CH₃ + HI → (CH₃)₃C−I + CH₃OH (S_N1) | C₆H₅−O−CH₃ (Anisole) + HI → C₆H₅OH + CH₃I.'
            ],
            pa: [
                'ਲੈਸੇਨ ਟੈਸਟ ਰੰਗ: N → ਪ੍ਰਸ਼ੀਅਨ ਬਲੂ Fe₄[Fe(CN)₆]₃ | N + S → ਖੂਨ ਵਰਗਾ ਲਾਲ [Fe(SCN)]²⁺ | S + ਸੋਡੀਅਮ ਨਾਈਟ੍ਰੋਪਰੂਸਾਈਡ → ਬੈਂਗਣੀ Na₄[Fe(CN)₅NOS]।',
                'ਐਲਕੀਨ ਤੋਂ ਅਲਕੋਹਲ: H₃O⁺ → ਮਾਰਕੋਵਨੀਕੋਵ (ਪੁਨਰ-ਵਿਵਸਥਾ ਸਮੇਤ) | Hg(OAc)₂/NaBH₄ → ਮਾਰਕੋਵਨੀਕੋਵ (ਬਿਨਾਂ ਪੁਨਰ-ਵਿਵਸਥਾ) | BH₃·THF/H₂O₂, OH⁻ → ਐਂਟੀ-ਮਾਰਕੋਵਨੀਕੋਵ।',
                'ਐਲਕਾਈਨ ਲਘੂਕਰਨ: ਲਿੰਡਲਾਰ ਉਤਪ੍ਰੇਰਕ (Pd/CaCO₃) → cis-ਐਲਕੀਨ | Na / liq. NH₃ (ਬਰਚ ਲਘੂਕਰਨ) → trans-ਐਲਕੀਨ।',
                'ਅਲਕੋਹਲ ਟੈਸਟ: ਲੂਕਾਸ ਟੈਸਟ: 3° ਤੁਰੰਤ, 2° 5 ਮਿੰਟ, 1° ਕੋਈ ਨਹੀਂ | ਵਿਕਟਰ ਮੇਅਰ: 1° ਲਾਲ, 2° ਨੀਲਾ, 3° ਰੰਗਹੀਣ (R-B-C)।',
                'ਈਥਰ + HI ਵਿਖੰਡਨ: CH₃−O−C₂H₅ + HI → CH₃I + C₂H₅OH | (CH₃)₃C−O−CH₃ + HI → (CH₃)₃C−I + CH₃OH | ਐਨੀਸੋਲ + HI → ਫੀਨੋਲ + CH₃I।'
            ],
            hi: [
                'लैसेन परीक्षण रंग: N → प्रशियन ब्लू Fe₄[Fe(CN)₆]₃ | N + S → रक्त-लाल [Fe(SCN)]²⁺ | S + सोडियम नाइट्रोप्रुसाइड → बैंगनी Na₄[Fe(CN)₅NOS]।',
                'एल्कीन जलयोजन: H₃O⁺ → मार्कोवनिकोव (पुनर्विन्यास सहित) | Hg(OAc)₂/NaBH₄ → मार्कोवनिकोव (बिना पुनर्विन्यास) | BH₃·THF/H₂O₂, OH⁻ → प्रति-मार्कोवनिकोव।',
                'एल्काइन अपचयन: लिंड्लार उत्प्रेरक (Pd/CaCO₃) → cis-एल्कीन | Na / द्रव NH₃ (बर्च अपचयन) → trans-एल्कीन।',
                'अल्कोहल परीक्षण: ल्यूकास परीक्षण: 3° तुरंत, 2° 5 मिनट, 1° कोई धुंधलापन नहीं | विक्टर मेयर: 1° लाल, 2° नीला, 3° रंगहीन (R-B-C)।',
                'ईथर + HI विदलन: CH₃−O−C₂H₅ + HI → CH₃I + C₂H₅OH | (CH₃)₃C−O−CH₃ + HI → (CH₃)₃C−I + CH₃OH | एनीसोल + HI → फीनॉल + CH₃I।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Halogens (−F, −Cl, −Br, −I) on a benzene ring are deactivating, so they must be meta-directing. Correction: Halogens are an exception — their strong −I effect makes them deactivating overall, but their +M resonance effect donates electrons at ortho and para positions, making them ortho/para-directing!',
                'Misconception: Anisole (C₆H₅−O−CH₃) reacts with HI to give iodobenzene (C₆H₅I) and methanol (CH₃OH). Correction: The C(sp²)−O bond in anisole has partial double-bond character due to resonance and is much stronger than the C(sp³)−O bond; thus HI cleavage ALWAYS yields Phenol (C₆H₅OH) + Methyl iodide (CH₃I).',
                'Misconception: Cyclooctatetraene (C₈H₈, 8π electrons) is anti-aromatic. Correction: To avoid anti-aromatic instability, cyclooctatetraene adopts a non-planar "tub-shaped" conformation, losing cyclic p-orbital overlap and becoming Non-Aromatic.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਬੈਂਜ਼ੀਨ ਰਿੰਗ ਉੱਤੇ ਹੈਲੋਜਨ (−Cl, −Br) ਡੀਐਕਟੀਵੇਟਿੰਗ ਹੋਣ ਕਾਰਨ ਮੈਟਾ-ਡਾਇਰੈਕਟਿੰਗ ਹੁੰਦੇ ਹਨ। ਸੁਧਾਰ: ਹੈਲੋਜਨ −I ਪ੍ਰਭਾਵ ਕਾਰਨ ਡੀਐਕਟੀਵੇਟਿੰਗ ਹਨ, ਪਰ +M ਰੈਜ਼ੋਨੈਂਸ ਪ੍ਰਭਾਵ ਕਾਰਨ ਆਰਥੋ ਅਤੇ ਪੈਰਾ-ਡਾਇਰੈਕਟਿੰਗ (Ortho/Para-directing) ਹੁੰਦੇ ਹਨ!',
                'ਭੁਲੇਖਾ: ਐਨੀਸੋਲ (C₆H₅−O−CH₃) HI ਨਾਲ ਕਿਰਿਆ ਕਰਕੇ ਆਇਓਡੋਬੈਂਜ਼ੀਨ (C₆H₅I) ਅਤੇ CH₃OH ਬਣਾਉਂਦਾ ਹੈ। ਸੁਧਾਰ: ਰੈਜ਼ੋਨੈਂਸ ਕਾਰਨ C₆H₅−O ਬੰਧਨ ਵਿੱਚ ਅੰਸ਼ਕ ਡਬਲ-ਬਾਂਡ ਗੁਣ ਹੁੰਦਾ ਹੈ ਜੋ ਨਹੀਂ ਟੁੱਟਦਾ; ਇਸ ਲਈ ਹਮੇਸ਼ਾ ਫੀਨੋਲ (C₆H₅OH) + CH₃I ਬਣਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਸਾਈਕਲੋਔਕਟਾਟੈਟ੍ਰਾਈਨ (C₈H₈, 8π e⁻) ਐਂਟੀ-ਐਰੋਮੈਟਿਕ ਹੈ। ਸੁਧਾਰ: ਇਹ ਅਸਥਿਰਤਾ ਤੋਂ ਬਚਣ ਲਈ ਗੈਰ-ਸਮਤਲ ਟੱਬ ਆਕਾਰ (Tub-shaped) ਧਾਰਨ ਕਰ ਲੈਂਦਾ ਹੈ ਅਤੇ ਨੌਨ-ਐਰੋਮੈਟਿਕ (Non-Aromatic) ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: बेंजीन वलय पर हैलोजन (−Cl, −Br) विसक्रियकारी (Deactivating) होने के कारण मेटा-निर्देशक होते हैं। सुधार: हैलोजन −I प्रभाव के कारण विसक्रियकारी हैं, किंतु +M अनुनाद प्रभाव के कारण ऑर्थो एवं पैरा-निर्देशक (Ortho/Para-directing) होते हैं!',
                'भ्रांति: एनीसोल (C₆H₅−O−CH₃) की HI से अभिक्रिया करने पर आयोडोबेंजीन (C₆H₅I) और CH₃OH बनता है। सुधार: अनुनाद के कारण C₆H₅−O आबंध में आंशिक द्वि-आबंध लक्षण आ जाता है जिससे वह नहीं टूटता; अतः सदैव फीनॉल (C₆H₅OH) + CH₃I बनता है।',
                'भ्रांति: साइक्लोऑक्टाटेट्राईन (C₈H₈, 8π e⁻) एंटी-एरोमैटिक है। सुधार: एंटी-एरोमैटिक अस्थायित्व से बचने के लिए यह असमतलीय टब-आकृति (Tub conformation) ग्रहण कर लेता है और अ-एरोमैटिक (Non-Aromatic) होता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Predict the major products when 3-methylbutan-2-ol is treated with HBr, and when 3,3-dimethylbut-1-ene reacts with (i) dilute H₂SO₄, (ii) Hg(OAc)₂, H₂O followed by NaBH₄, and (iii) BH₃·THF followed by H₂O₂/OH⁻.',
                    pa: '3-ਮਿਥਾਇਲਬਿਊਟੇਨ-2-ਓਲ ਦੀ HBr ਨਾਲ ਕਿਰਿਆ, ਅਤੇ 3,3-ਡਾਈਮਿਥਾਇਲਬਿਊਟ-1-ਈਨ ਦੀ (i) dil. H₂SO₄, (ii) Hg(OAc)₂, H₂O / NaBH₄, ਅਤੇ (iii) BH₃·THF / H₂O₂, OH⁻ ਨਾਲ ਕਿਰਿਆ ਦੇ ਮੁੱਖ ਉਤਪਾਦ ਦੱਸੋ।',
                    hi: '3-मिथाइलब्यूटेन-2-ऑल की HBr के साथ, तथा 3,3-डाइमिथाइलब्यूट-1-ईन की (i) तनु H₂SO₄, (ii) Hg(OAc)₂, H₂O / NaBH₄, एवं (iii) BH₃·THF / H₂O₂, OH⁻ के साथ अभिक्रिया के मुख्य उत्पाद बताइए।'
                },
                solutionSteps: {
                    en: [
                        'When 3-methylbutan-2-ol [(CH₃)₂CH−CH(OH)CH₃] reacts with HBr, protonation and loss of H₂O gives a 2° carbocation, which undergoes a 1,2-hydride shift to form a more stable 3° carbocation → attacks by Br⁻ gives 2-bromo-2-methylbutane.',
                        'For 3,3-dimethylbut-1-ene [(CH₃)₃C−CH=CH₂]:',
                        '(i) Dil. H₂SO₄ proceeds via 2° carbocation followed by 1,2-methyl shift to 3° carbocation → 2,3-dimethylbutan-2-ol.',
                        '(ii) Oxymercuration-Demercuration [Hg(OAc)₂, H₂O / NaBH₄] gives Markovnikov alcohol WITHOUT rearrangement → 3,3-dimethylbutan-2-ol.',
                        '(iii) Hydroboration-Oxidation [BH₃·THF / H₂O₂, OH⁻] gives Anti-Markovnikov 1° alcohol WITHOUT rearrangement → 3,3-dimethylbutan-1-ol.'
                    ],
                    pa: [
                        '3-ਮਿਥਾਇਲਬਿਊਟੇਨ-2-ਓਲ + HBr: 1,2-ਹਾਈਡ੍ਰਾਈਡ ਸ਼ਿਫਟ ਰਾਹੀਂ 3° ਕਾਰਬੋਕੈਟਾਇਨ ਬਣਦਾ ਹੈ → 2-ਬ੍ਰੋਮੋ-2-ਮਿਥਾਇਲਬਿਊਟੇਨ।',
                        '3,3-ਡਾਈਮਿਥਾਇਲਬਿਊਟ-1-ਈਨ ਲਈ: (i) dil. H₂SO₄ (1,2-ਮਿਥਾਇਲ ਸ਼ਿਫਟ) → 2,3-ਡਾਈਮਿਥਾਇਲਬਿਊਟੇਨ-2-ਓਲ; (ii) Hg(OAc)₂/NaBH₄ (ਬਿਨਾਂ ਪੁਨਰ-ਵਿਵਸਥਾ ਮਾਰਕੋਵਨੀਕੋਵ) → 3,3-ਡਾਈਮਿਥਾਇਲਬਿਊਟੇਨ-2-ਓਲ; (iii) BH₃·THF/H₂O₂ (ਐਂਟੀ-ਮਾਰਕੋਵਨੀਕੋਵ) → 3,3-ਡਾਈਮਿਥਾਇਲਬਿਊਟੇਨ-1-ਓਲ।'
                    ],
                    hi: [
                        '3-मिथाइलब्यूटेन-2-ऑल + HBr: 1,2-हाइड्राइड शिफ्ट से 3° कार्बधनायन बनता है → 2-ब्रोमो-2-मिथाइलब्यूटेन।',
                        '3,3-डाइमिथाइलब्यूट-1-ईन के लिए: (i) तनु H₂SO₄ (1,2-मिथाइल शिफ्ट) → 2,3-डाइमिथाइलब्यूटेन-2-ऑल; (ii) Hg(OAc)₂/NaBH₄ (बिना पुनर्विन्यास मार्कोवनिकोव) → 3,3-डाइमिथाइलब्यूटेन-2-ऑल; (iii) BH₃·THF/H₂O₂ (प्रति-मार्कोवनिकोव) → 3,3-डाइमिथाइलब्यूटेन-1-ऑल।'
                    ]
                },
                finalAnswer: {
                    en: '2-bromo-2-methylbutane; (i) 2,3-dimethylbutan-2-ol, (ii) 3,3-dimethylbutan-2-ol, (iii) 3,3-dimethylbutan-1-ol.',
                    pa: '2-ਬ੍ਰੋਮੋ-2-ਮਿਥਾਇਲਬਿਊਟੇਨ; (i) 2,3-ਡਾਈਮਿਥਾਇਲਬਿਊਟੇਨ-2-ਓਲ, (ii) 3,3-ਡਾਈਮਿਥਾਇਲਬਿਊਟੇਨ-2-ਓਲ, (iii) 3,3-ਡਾਈਮਿਥਾਇਲਬਿਊਟੇਨ-1-ਓਲ।',
                    hi: '2-ब्रोमो-2-मिथाइलब्यूटेन; (i) 2,3-डाइमिथाइलब्यूटेन-2-ऑल, (ii) 3,3-डाइमिथाइलब्यूटेन-2-ऑल, (iii) 3,3-डाइमिथाइलब्यूटेन-1-ऑल।'
                }
            },
            {
                problem: {
                    en: 'Arrange the following in decreasing order of acidity: (I) Phenol, (II) p-Nitrophenol, (III) o-Nitrophenol, (IV) p-Cresol (4-methylphenol), and (V) Picric acid (2,4,6-trinitrophenol).',
                    pa: 'ਹੇਠ ਲਿਖਿਆਂ ਨੂੰ ਤੇਜ਼ਾਬੀ ਸ਼ਕਤੀ (Acidity) ਦੇ ਘਟਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਿਖੋ: (I) ਫੀਨੋਲ, (II) p-ਨਾਈਟ੍ਰੋਫੀਨੋਲ, (III) o-ਨਾਈਟ੍ਰੋਫੀਨੋਲ, (IV) p-ਕ੍ਰਿਸੋਲ, ਅਤੇ (V) ਪਿਕਰਿਕ ਐਸਿਡ।',
                    hi: 'निम्नलिखित को अम्लीय सामर्थ्य के घटते क्रम में व्यवस्थित कीजिए: (I) फीनॉल, (II) p-नाइट्रोफीनॉल, (III) o-नाइट्रोफीनॉल, (IV) p-क्रिसॉल, तथा (V) पिक्रिक अम्ल।'
                },
                solutionSteps: {
                    en: [
                        'Electron-withdrawing groups (−NO₂: −M and −I) stabilize the phenoxide ion and increase acidity, whereas electron-donating groups (−CH₃: +I and hyperconjugation) destabilize phenoxide and decrease acidity.',
                        'Picric acid has three −NO₂ groups and is the strongest acid (pK_a ≈ 0.4).',
                        'Between p-nitrophenol and o-nitrophenol, intramolecular H-bonding in o-nitrophenol slightly hinders proton release, making p-nitrophenol slightly more acidic than o-nitrophenol!',
                        'p-Cresol has a +I/+H methyl group and is less acidic than unsubstituted phenol.'
                    ],
                    pa: [
                        'ਪਿਕਰਿਕ ਐਸਿਡ ਵਿੱਚ ਤਿੰਨ −NO₂ ਸਮੂਹ ਹੋਣ ਕਾਰਨ ਇਹ ਸਭ ਤੋਂ ਪ੍ਰਬਲ ਤੇਜ਼ਾਬ ਹੈ।',
                        'o-ਨਾਈਟ੍ਰੋਫੀਨੋਲ ਵਿੱਚ ਅੰਤਰ-ਅਣੂਕ H-ਬੰਧਨ ਕਾਰਨ H⁺ ਨਿਕਲਣਾ ਥੋੜ੍ਹਾ ਔਖਾ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ p-ਨਾਈਟ੍ਰੋਫੀਨੋਲ > o-ਨਾਈਟ੍ਰੋਫੀਨੋਲ ਹੁੰਦਾ ਹੈ।',
                        'p-ਕ੍ਰਿਸੋਲ ਵਿੱਚ +I ਮਿਥਾਇਲ ਸਮੂਹ ਤੇਜ਼ਾਬੀਪਣ ਘਟਾਉਂਦਾ ਹੈ।'
                    ],
                    hi: [
                        'पिक्रिक अम्ल में तीन −NO₂ समूह होने के कारण यह सर्वाधिक प्रबल अम्ल है।',
                        'o-नाइट्रोफीनॉल में अंतरा-अणुक H-आबंधन के कारण प्रोटॉन का त्याग थोड़ा कठिन होता है, अतः p-नाइट्रोफीनॉल > o-नाइट्रोफीनॉल होता है।',
                        'p-क्रिसॉल में +I/+H मिथाइल समूह अम्लीयता को घटाता है।'
                    ]
                },
                finalAnswer: {
                    en: 'Picric acid (V) > p-Nitrophenol (II) > o-Nitrophenol (III) > Phenol (I) > p-Cresol (IV).',
                    pa: 'ਪਿਕਰਿਕ ਐਸਿਡ (V) > p-ਨਾਈਟ੍ਰੋਫੀਨੋਲ (II) > o-ਨਾਈਟ੍ਰੋਫੀਨੋਲ (III) > ਫੀਨੋਲ (I) > p-ਕ੍ਰਿਸੋਲ (IV)।',
                    hi: 'पिक्रिक अम्ल (V) > p-नाइट्रोफीनॉल (II) > o-नाइट्रोफीनॉल (III) > फीनॉल (I) > p-क्रिसॉल (IV)।'
                }
            }
        ],
        flashcards: [
            {
                id: 'chem-org1-fc-1',
                question: {
                    en: '[Level I] For which classes of nitrogen-containing organic compounds does Kjeldahl\'s method fail?',
                    pa: '[Level I] ਕਿਹੜੇ ਨਾਈਟ੍ਰੋਜਨ ਯੁਕਤ ਕਾਰਬਨਿਕ ਯੋਗਿਕਾਂ ਲਈ ਕੈਲਡਾਲ ਵਿਧੀ ਕੰਮ ਨਹੀਂ ਕਰਦੀ?',
                    hi: '[Level I] किन नाइट्रोजन युक्त कार्बनिक यौगिकों के लिए केल्डाल विधि असफल हो जाती है?'
                },
                answer: {
                    en: 'Compounds containing Nitro (−NO₂), Azo (−N=N−), Diazonium groups, or Nitrogen in a heterocyclic ring (like Pyridine and Quinoline), as their nitrogen is not quantitatively converted into (NH₄)₂SO₄.',
                    pa: 'ਨਾਈਟ੍ਰੋ (−NO₂), ਐਜ਼ੋ (−N=N−), ਡਾਇਆਜ਼ੋਨੀਅਮ ਲੂਣ ਅਤੇ ਰਿੰਗ ਵਿੱਚ ਮੌਜੂਦ ਨਾਈਟ੍ਰੋਜਨ (ਜਿਵੇਂ ਪਾਇਰੀਡੀਨ ਅਤੇ ਕੁਇਨੋਲੀਨ), ਕਿਉਂਕਿ ਇਹ (NH₄)₂SO₄ ਵਿੱਚ ਨਹੀਂ ਬਦਲਦੇ।',
                    hi: 'नाइट्रो (−NO₂), एजो (−N=N−), डाइएजोनियम लवण तथा वलय में उपस्थित नाइट्रोजन (जैसे पिरिडीन व क्विनोलीन), क्योंकि इनका नाइट्रोजन (NH₄)₂SO₄ में परिवर्तित नहीं होता।'
                }
            },
            {
                id: 'chem-org1-fc-2',
                question: {
                    en: '[Level H] What is the reactive electrophilic intermediate in the Reimer-Tiemann reaction, and what is the major product formed from phenol?',
                    pa: '[Level H] ਰਾਈਮਰ-ਟੀਮਾਨ ਕਿਰਿਆ ਵਿੱਚ ਕਿਰਿਆਸ਼ੀਲ ਇਲੈਕਟ੍ਰੋਫਾਈਲ ਕੀ ਹੁੰਦਾ ਹੈ ਅਤੇ ਫੀਨੋਲ ਤੋਂ ਕਿਹੜਾ ਮੁੱਖ ਉਤਪਾਦ ਬਣਦਾ ਹੈ?',
                    hi: '[Level H] राइमर-टीमान अभिक्रिया में सक्रिय इलेक्ट्रॉनरागी मध्यवर्ती क्या है और फीनॉल से कौन-सा मुख्य उत्पाद बनता है?'
                },
                answer: {
                    en: 'Dichlorocarbene (:CCl₂, a neutral singlet carbene with 6 valence electrons); the major product is Salicylaldehyde (2-hydroxybenzaldehyde).',
                    pa: 'ਡਾਈਕਲੋਰੋਕਾਰਬੀਨ (:CCl₂, 6 ਸੰਯੋਜਕ ਇਲੈਕਟ੍ਰਾਨਾਂ ਵਾਲਾ ਉਦਾਸੀਨ ਇਲੈਕਟ੍ਰੋਫਾਈਲ); ਮੁੱਖ ਉਤਪਾਦ ਸੈਲੀਸਿਲਐਲਡੀਹਾਈਡ (2-ਹਾਈਡ੍ਰੌਕਸੀਬੈਂਜ਼ੈਲਡੀਹਾਈਡ) ਹੈ।',
                    hi: 'डाइक्लोरोकार्बीन (:CCl₂, 6 संयोजी इलेक्ट्रॉनों वाला उदासीन इलेक्ट्रॉनरागी); मुख्य उत्पाद सैलिसिलैल्डिहाइड (2-हाइड्रॉक्सीबेंजैल्डिहाइड) है।'
                }
            },
            {
                id: 'chem-org1-fc-3',
                question: {
                    en: '[Level H] How do Lindlar\'s catalyst and Birch reduction differ in the reduction of an internal alkyne (R−C≡C−R)?',
                    pa: '[Level H] ਅੰਦਰੂਨੀ ਐਲਕਾਈਨ (R−C≡C−R) ਦੇ ਲਘੂਕਰਨ ਵਿੱਚ ਲਿੰਡਲਾਰ ਉਤਪ੍ਰੇਰਕ ਅਤੇ ਬਰਚ ਲਘੂਕਰਨ ਕਿਵੇਂ ਭਿੰਨ ਹਨ?',
                    hi: '[Level H] आंतरिक एल्काइन (R−C≡C−R) के अपचयन में लिंड्लार उत्प्रेरक तथा बर्च अपचयन किस प्रकार भिन्न हैं?'
                },
                answer: {
                    en: 'Lindlar\'s catalyst (H₂ / Pd-CaCO₃ poisoned with quinoline) gives a cis-alkene via syn addition, whereas Birch reduction (Na or Li in liquid NH₃) gives a trans-alkene via anti addition.',
                    pa: 'ਲਿੰਡਲਾਰ ਉਤਪ੍ਰੇਰਕ (H₂ / Pd-CaCO₃) syn ਜੋੜ ਰਾਹੀਂ cis-ਐਲਕੀਨ ਦਿੰਦਾ ਹੈ, ਜਦਕਿ ਬਰਚ ਲਘੂਕਰਨ (Na / liq. NH₃) anti ਜੋੜ ਰਾਹੀਂ trans-ਐਲਕੀਨ ਦਿੰਦਾ ਹੈ।',
                    hi: 'लिंड्लार उत्प्रेरक (H₂ / Pd-CaCO₃) सिन (syn) योग द्वारा cis-एल्कीन देता है, जबकि बर्च अपचयन (Na / द्रव NH₃) एंटी (anti) योग द्वारा trans-एल्कीन देता है।'
                }
            },
            {
                id: 'chem-org1-fc-4',
                question: {
                    en: '[Level G] Why must tert-butyl methyl ether be synthesized from sodium tert-butoxide + CH₃Br and NOT from tert-butyl bromide + CH₃ONa in Williamson synthesis?',
                    pa: '[Level G] ਵਿਲੀਅਮਸਨ ਸੰਸ਼ਲੇਸ਼ਣ ਵਿੱਚ tert-ਬਿਊਟਾਇਲ ਮਿਥਾਇਲ ਈਥਰ ਬਣਾਉਣ ਲਈ ਸੋਡੀਅਮ tert-ਬਿਊਟੋਕਸਾਈਡ + CH₃Br ਹੀ ਕਿਉਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                    hi: '[Level G] विलियमसन संश्लेषण द्वारा tert-ब्यूटाइल मिथाइल ईथर बनाने के लिए सोडियम tert-ब्यूटॉक्साइड + CH₃Br का ही प्रयोग क्यों किया जाता है?'
                },
                answer: {
                    en: 'Because Williamson ether synthesis is an S_N2 reaction requiring an unhindered 1° alkyl halide (CH₃Br). A 3° alkyl halide (tert-butyl bromide) undergoes E2 elimination with strong alkoxide base to give 2-methylpropene.',
                    pa: 'ਕਿਉਂਕਿ ਵਿਲੀਅਮਸਨ ਸੰਸ਼ਲੇਸ਼ਣ ਇੱਕ S_N2 ਕਿਰਿਆ ਹੈ ਜਿਸ ਲਈ 1° ਹੈਲਾਈਡ (CH₃Br) ਚਾਹੀਦਾ ਹੈ। 3° ਹੈਲਾਈਡ (tert-ਬਿਊਟਾਇਲ ਬ੍ਰੋਮਾਈਡ) ਖਾਰ ਨਾਲ E2 ਵਿਲੋਪਨ ਕਰਕੇ 2-ਮਿਥਾਇਲਪ੍ਰੋਪੀਨ (ਐਲਕੀਨ) ਬਣਾ ਦਿੰਦਾ ਹੈ।',
                    hi: 'क्योंकि विलियमसन संश्लेषण एक S_N2 अभिक्रिया है जिसके लिए 1° हैलाइड (CH₃Br) आवश्यक है। 3° हैलाइड (tert-ब्यूटाइल ब्रोमाइड) प्रबल क्षार के साथ E2 विलोपन करके 2-मिथाइलप्रोपीन (एल्कीन) बना देता है।'
                }
            },
            {
                id: 'chem-org1-fc-5',
                question: {
                    en: '[Level G] What are the products of reaction of (a) Anisole (C₆H₅OCH₃) and (b) tert-Butyl methyl ether [(CH₃)₃COCH₃] with anhydrous HI?',
                    pa: '[Level G] (a) ਐਨੀਸੋਲ (C₆H₅OCH₃) ਅਤੇ (b) tert-ਬਿਊਟਾਇਲ ਮਿਥਾਇਲ ਈਥਰ [(CH₃)₃COCH₃] ਦੀ ਨਿਰਜਲ HI ਨਾਲ ਕਿਰਿਆ ਦੇ ਉਤਪਾਦ ਕੀ ਹਨ?',
                    hi: '[Level G] (a) एनीसोल (C₆H₅OCH₃) तथा (b) tert-ब्यूटाइल मिथाइल ईथर [(CH₃)₃COCH₃] की निर्जल HI के साथ अभिक्रिया के उत्पाद क्या हैं?'
                },
                answer: {
                    en: '(a) Anisole + HI → Phenol (C₆H₅OH) + CH₃I (aryl−O bond does not break). (b) (CH₃)₃COCH₃ + HI → (CH₃)₃C−I (tert-butyl iodide) + CH₃OH via stable 3° carbocation (S_N1 pathway).',
                    pa: '(a) ਐਨੀਸੋਲ + HI → ਫੀਨੋਲ (C₆H₅OH) + CH₃I। (b) (CH₃)₃COCH₃ + HI → (CH₃)₃C−I + CH₃OH (S_N1 ਵਿਧੀ ਰਾਹੀਂ ਸਥਿਰ 3° ਕਾਰਬੋਕੈਟਾਇਨ ਬਣਨ ਕਾਰਨ)।',
                    hi: '(a) एनीसोल + HI → फीनॉल (C₆H₅OH) + CH₃I। (b) (CH₃)₃COCH₃ + HI → (CH₃)₃C−I + CH₃OH (S_N1 क्रियाविधि द्वारा स्थायी 3° कार्बधनायन बनने के कारण)।'
                }
            }
        ]
    },

    // =========================================================================
    // 5. ORGANIC CHEMISTRY II: CARBONYLS, AMINES, NAMED REACTIONS, SELECTIVE
    //    REAGENTS, BIOMOLECULES, POLYMERS & IR/UV/NMR SPECTROSCOPY (Level H -> G/P)
    // =========================================================================
    {
        topicId: 'sci-chem-organic-carbonyls-reagents-spectro',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote:
                'Covers ERB Punjab Master Cadre Science Chemistry Official Headings: Aldehydes, Ketones & Carboxylic acids, Organic compounds containing nitrogen, Common reagents in organic synthesis, Selective organic transformations (chemo-, regio-, stereo-, enantioselectivity, protecting groups), Polymers, Biomolecules, Chemistry in everyday life, and Physical characterisation by IR, UV, MS & NMR.'
        },
        bookRefs: [
            {
                title: 'NCERT Chemistry Class XII (Part II)',
                author: 'NCERT',
                chapter: 'Chapters 12–16 (Aldehydes, Ketones & Carboxylic Acids, Amines, Biomolecules, Polymers, Chemistry in Everyday Life)',
                relevance: 'Core foundation for Aldol/Cannizzaro, Tollens/Fehling/Iodoform, Amines basicity, Gabriel/Hoffmann, Carbohydrates, Proteins, and Polymers.'
            },
            {
                title: 'Organic Chemistry & Spectrometric Identification of Organic Compounds',
                author: 'J. Clayden, N. Greeves & S. Warren / R.M. Silverstein',
                chapter: 'Chemoselectivity, Protecting Groups, Wittig/Baeyer-Villiger & IR, UV, ¹H NMR, Mass Spectrometry',
                relevance: 'Graduation/Postgraduate mastery on selective reagents (LiAlH₄ vs NaBH₄ vs DIBAL-H), protecting groups, carbonyl IR frequencies, and NMR spin-spin splitting.'
            }
        ],
        summary: {
            en: `### [Level H: Senior Secondary — Class 12 Core: Carbonyls, Carboxylic Acids & Amines]
1. **Aldehydes, Ketones & Carboxylic Acids:**
   - **Nucleophilic Addition Reactivity Order:** Governed by electrophilicity of carbonyl carbon (+I/+M reduces reactivity) and steric hindrance:
     **HCHO > CH₃CHO > RCHO > CH₃COCH₃ > RCOR > C₆H₅CHO (Benzaldehyde) > C₆H₅COCH₃ (Acetophenone) > C₆H₅COC₆H₅ (Benzophenone)**.
   - **Preparation Methods:**
     - **Rosenmund Reduction:** **R−COCl + H₂ / Pd-BaSO₄** (poisoned with S or quinoline) → **R−CHO**. *(Formaldehyde HCHO cannot be prepared because formyl chloride HCOCl is unstable at room temperature!)*
     - **Stephen Reduction:** **R−C≡N + SnCl₂ / HCl → H₃O⁺ → R−CHO**.
     - **Etard Reaction:** Toluene + **CrO₂Cl₂ (Chromyl chloride in CS₂) → H₃O⁺ → Benzaldehyde**.
     - **Gattermann-Koch Reaction:** Benzene + **CO + HCl / anhyd. AlCl₃, CuCl → Benzaldehyde**.
   - **Landmark Named Reactions & Distinction Tests of Carbonyls:**
     | Reaction / Test | Reagents & Substrate Requirement | Product & High-Yield Exam Trap |
     |---|---|---|
     | **Aldol Condensation** | Aldehydes/ketones **WITH at least one α-H** + **dilute NaOH / Ba(OH)₂** | **β-Hydroxy aldehyde (Aldol) / β-Hydroxy ketone (Ketol)** → on heating (−H₂O) gives **α,β-unsaturated carbonyl** |
     | **Cannizzaro Reaction** | Aldehydes **WITH NO α-H** (**HCHO, C₆H₅CHO, (CH₃)₃C−CHO, Furfural**) + **50% conc. NaOH/KOH** | **Disproportionation (Redox):** 1 molecule oxidised to **Carboxylate salt (RCOO⁻K⁺)** + 1 molecule reduced to **1° Alcohol (RCH₂OH)**. In **Cross-Cannizzaro (HCHO + ArCHO)**, **HCHO is ALWAYS oxidised to Formate (HCOO⁻)** and ArCHO is reduced to ArCH₂OH! |
     | **Clemmensen Reduction** | **Zn-Hg (Zinc amalgam) + conc. HCl** | Reduces **C=O → −CH₂−** (Acidic medium; **avoid if acid-sensitive −OH or acetal groups are present!**) |
     | **Wolff-Kishner Reduction** | **NH₂NH₂ (Hydrazine) + KOH in ethylene glycol (453–473 K)** | Reduces **C=O → −CH₂−** (Basic medium; **avoid if base-sensitive −X or ester groups are present!**) |
     | **Tollens' Test (Silver Mirror)** | **Ammoniacal silver nitrate [Ag(NH₃)₂]⁺ OH⁻** | **Silver mirror (Ag↓)** given by **ALL Aldehydes (aliphatic & aromatic)**, **Formic acid (HCOOH)**, **α-Hydroxy ketones (fructose, benzoin)**, and **Terminal alkynes (white ppt)** |
     | **Fehling's / Benedict's Test** | Fehling A (aq. CuSO₄) + Fehling B (**Rochelle salt: Na-K tartrate + NaOH**) | **Reddish-brown ppt of Cu₂O** given by **Aliphatic aldehydes & Formic acid ONLY**. **Benzaldehyde (aromatic aldehydes) DOES NOT give Fehling's test!** |
     | **Haloform / Iodoform Test** | **I₂ + NaOH** (or NaOI) | **Yellow ppt of CHI₃ (m.p. 119°C)** given by compounds with **CH₃−C(=O)−** or **CH₃−CH(OH)−** group (**Ethanal, Propanone, Acetophenone, Ethanol, Propan-2-ol, Lactic acid**). *Methanol, Benzophenone, and Pentan-3-one FAIL!* |
     | **Hell-Volhard-Zelinsky (HVZ)** | Carboxylic acid **with α-H** + **X₂ (Cl₂/Br₂) / Red Phosphorus** | **α-Halocarboxylic acid [R−CH(X)−COOH]** |
2. **Organic Compounds Containing Nitrogen (Amines & Diazonium Salts):**
   - **Basicity of Amines (Exam Favourite!):**
     - **In Gas Phase (Pure +I effect):** **3° Amine > 2° Amine > 1° Amine > NH₃**.
     - **In Aqueous Solution** (Combined effect of **+I effect, Hydration/Solvation of RNH₃⁺ via H-bonding, and Steric hindrance**):
       - **For Ethyl (−C₂H₅) group:** **(C₂H₅)₂NH (2°) > (C₂H₅)₃N (3°) > C₂H₅NH₂ (1°) > NH₃** (**2-3-1** order).
       - **For Methyl (−CH₃) group:** **(CH₃)₂NH (2°) > CH₃NH₂ (1°) > (CH₃)₃N (3°) > NH₃** (**2-1-3** order).
     - **Aromatic Amines:** **Aliphatic amines > NH₃ > C₆H₅NHCH₃ > Aniline (C₆H₅NH₂) > Diphenylamine (C₆H₅)₂NH > Triphenylamine (C₆H₅)₃N** (Lone pair of aniline is delocalized into benzene ring).
   - **Key Amine Reactions & Distinction Tests:**
     - **Gabriel Phthalimide Synthesis:** Phthalimide + KOH → + R−X (S_N2) → N-alkylphthalimide → Hydrazinolysis/NaOH → **Pure 1° Aliphatic Amine ONLY**. (**Aniline cannot be prepared** because aryl halides do not undergo S_N2 cleavage!).
     - **Hoffmann Bromamide Degradation:** **R−CONH₂ + Br₂ + 4KOH → R−NH₂** (1° amine with **one carbon less**) + K₂CO₃ + 2KBr + 2H₂O. Proceeds via **Nitrene → Alkyl Isocyanate (R−N=C=O)** intermediate with **retention of configuration** at migrating chiral carbon.
     - **Carbylamine Test (Isocyanide Test):** **R−NH₂ + CHCl₃ + 3KOH (alc.) → R−N≡C (Foul-smelling Carbylamine/Isocyanide)**. Given **ONLY by 1° Aliphatic AND 1° Aromatic Amines** via **Dichlorocarbene (:CCl₂)**. (2° and 3° amines do not react!).
     - **Hinsberg's Test (Benzenesulphonyl chloride, C₆H₅SO₂Cl):**
       - **1° Amine:** Forms N-alkylbenzenesulphonamide (**soluble in aqueous KOH** due to acidic N−H proton).
       - **2° Amine:** Forms N,N-dialkylbenzenesulphonamide (**insoluble in KOH**, no N−H proton).
       - **3° Amine:** **Does not react** at all with Hinsberg's reagent.
     - **Arenediazonium Salts (C₆H₅N₂⁺Cl⁻, prepared at 0–5°C):** **Sandmeyer** (Cu₂Cl₂/HCl → ArCl; Cu₂Br₂/HBr → ArBr; CuCN/KCN → ArCN) | **Gattermann** (Cu powder + HCl/HBr) | **Balz-Schiemann** (HBF₄ + heat → **Fluorobenzene C₆H₅F**) | **H₃PO₂ (Hypophosphorous acid) or CH₃CH₂OH** reduces ArN₂⁺Cl⁻ → **Benzene (C₆H₆)** | **Azo Coupling:** with **Phenol (pH 9–10) → p-Hydroxyazobenzene (Orange dye)**; with **Aniline (pH 4–5) → p-Aminoazobenzene (Yellow dye)**.

---

### [Level G & P: Selective Transformations, Protecting Groups, Biomolecules, Polymers & Spectroscopy]
1. **Common Reagents, Chemoselectivity, Regio-/Stereo-selectivity & Protecting Groups:**
   - **Graduation Named Reactions:**
     - **Wittig Reaction:** Aldehyde/Ketone + **Phosphorus Ylide (Ph₃P⁺−⁻CR₂ / Ph₃P=CR₂)** → **Alkene (C=CR₂)** + Ph₃P=O (Triphenylphosphine oxide) via 4-membered **oxaphosphetane** intermediate.
     - **Baeyer-Villiger Oxidation:** Ketone + **Peracid (m-CPBA or CF₃CO₃H)** → **Ester** (or cyclic ketone → **Lactone**). **Migratory Aptitude Order:** **H > 3° alkyl > Cyclohexyl > 2° alkyl ≈ Phenyl (Aryl) > 1° alkyl > Methyl (−CH₃)**. *(e.g., Acetophenone C₆H₅COCH₃ + m-CPBA → **Phenyl acetate CH₃COOC₆H₅** because Phenyl migrates faster than Methyl!)*
     - **Perkin Condensation:** Aromatic aldehyde (**C₆H₅CHO**) + **Acetic anhydride (CH₃CO)₂O + CH₃COONa (base)** at 180°C → **Cinnamic acid (C₆H₅CH=CH−COOH)**.
     - **Benzoin Condensation:** 2 C₆H₅CHO + **alc. KCN** (CN⁻ acts as specific Umpolung catalyst) → **Benzoin [C₆H₅CH(OH)COC₆H₅]**.
     - **Reformatsky Reaction:** Aldehyde/Ketone + **α-Bromo ester (BrCH₂COOC₂H₅) + Zn in dry ether → β-Hydroxy ester**.
     - **Beckmann Rearrangement:** Ketoxime (R₂C=N−OH) + **H₂SO₄ / PCl₅ / SOCl₂** → **N-substituted Amide** (**Group *anti* (trans) to −OH migrates!** *Cyclohexanone oxime → ε-Caprolactam → Nylon-6*).
   - **Chemoselective Reducing & Oxidising Agents Master Table:**
     | Reagent | Functional Groups Reduced / Oxidised | Groups Left Untouched (Chemoselectivity) |
     |---|---|---|
     | **NaBH₄ (Sodium borohydride)** | Reduces **Aldehydes, Ketones, and Acid chlorides (RCOCl)** to alcohols | Does **NOT** reduce **Esters, Carboxylic acids, Amides, Nitriles, Nitro (−NO₂), or C=C** |
     | **LiAlH₄ (Lithium aluminium hydride)** | Powerfully reduces **Aldehydes, Ketones, Esters, Acids, Acid chlorides, Amides (→ Amines), Nitriles (→ 1° Amines), Epoxides, R−NO₂ (aliphatic → RNH₂, aromatic → azo)** | Does **NOT** reduce isolated **C=C or C≡C** double/triple bonds (except cinnamyl system) |
     | **DIBAL-H [Diisobutylaluminium hydride, −78°C]** | Selectively reduces **Esters (RCOOR') and Nitriles (R−C≡N) directly to Aldehydes (R−CHO)** | Stops at tetrahedral intermediate at −78°C without over-reduction to alcohol |
     | **PCC (Pyridinium chlorochromate, C₅H₅NH⁺CrO₃Cl⁻) / PDC in CH₂Cl₂** | Oxidises **1° Alcohol → Aldehyde** and **2° Alcohol → Ketone** | Anhydrous mild oxidant; **stops at Aldehyde** (does NOT over-oxidise to carboxylic acid!) |
     | **Active MnO₂** | Selectively oxidises **Allylic and Benzylic −OH groups** to α,β-unsaturated aldehydes/ketones | Leaves saturated 1° and 2° alcohols untouched! |
     | **Zinin Reduction (NH₄SH / Na₂S)** | Selectively reduces **ONLY ONE −NO₂ group** of **m-dinitrobenzene → m-nitroaniline** | Regioselective partial reduction of polynitro aromatics |
   - **Protecting Groups in Organic Synthesis:**
     - **Aldehydes & Ketones (C=O):** Protected as **Cyclic Acetal / Ketal (1,3-dioxolane)** using **Ethylene glycol (HOCH₂CH₂OH) + dry HCl / p-TsOH**. Stable towards **bases, Grignard reagents, and LiAlH₄**; deprotected easily with **aqueous acid (H₃O⁺)**.
     - **Alcohols (−OH):** Protected as **Silyl ether (TMS = −SiMe₃ or TBDMS)** (deprotected selectively by **Fluoride ion F⁻ / TBAF** due to strong Si−F bond!), **THP (Tetrahydropyranyl) ether**, or **Benzyl (−Bn) ether** (cleaved by H₂/Pd-C hydrogenolysis).
     - **Amines (−NH₂):** Protected as **Boc (tert-butyloxycarbonyl)** (cleaved by **CF₃COOH / TFA**), **Cbz (benzyloxycarbonyl)** (cleaved by H₂/Pd-C), or **Fmoc** (cleaved by **piperidine base**).
2. **Polymers, Biomolecules & Chemistry in Everyday Life:**
   - **High-Yield Polymers & Monomers:**
     - **Nylon-6,6 (Polyamide):** **Hexamethylenediamine [H₂N(CH₂)₆NH₂] + Adipic acid [HOOC(CH₂)₄COOH]** (both have 6 carbons!).
     - **Nylon-6 (Perlon):** **ε-Caprolactam** (7-membered cyclic amide).
     - **Terylene / Dacron (Polyester):** **Ethylene glycol + Terephthalic acid (benzene-1,4-dicarboxylic acid)**.
     - **Bakelite:** **Phenol + Formaldehyde (HCHO)** (linear intermediate = **Novolac**, used in paints).
     - **Natural Rubber:** Linear polymer of **Isoprene (2-methylbuta-1,3-diene)** — exclusively **cis-1,4-polyisoprene** (*trans*-isomer is **Gutta-percha**). **Neoprene (synthetic rubber)** = polymer of **Chloroprene (2-chlorobuta-1,3-diene)**. **Buna-S** = Buta-1,3-diene + Styrene; **Buna-N** = Buta-1,3-diene + Acrylonitrile.
     - **Biodegradable Polymers:** **PHBV** (Poly-β-hydroxybutyrate-co-β-hydroxyvalerate, from **3-hydroxybutanoic acid + 3-hydroxypentanoic acid**) and **Nylon-2-nylon-6** (**Glycine + Aminocaproic acid**).
   - **Biomolecules & Everyday Chemistry:**
     - **Carbohydrates:** **Sucrose** (α-D-glucose C₁ + β-D-fructose C₂) is a **NON-REDUCING sugar** (does not show mutarotation, Tollens', or Fehling's test!), whereas **Maltose** (2 α-D-glucose, C₁−C₄) and **Lactose** (β-D-galactose C₁ + β-D-glucose C₄) are **REDUCING sugars**. **α- and β-D-glucose** are **Anomers** (epimers at **C-1**) and show **Mutarotation** (equilibrium specific rotation = **+52.5°**). **Glucose and Mannose are C-2 epimers**; **Glucose and Galactose are C-4 epimers**.
     - **Proteins & Nucleic Acids:** **Glycine** is the **only optically inactive (achiral) α-amino acid**. Protein **α-helix** is stabilized by **intramolecular H-bonds** between C=O of residue *i* and N−H of residue *i+4*. **DNA** bases: **Adenine (A) = Thymine (T)** (2 H-bonds), **Guanine (G) ≡ Cytosine (C)** (3 H-bonds); in **RNA, Uracil (U) replaces Thymine**.
     - **Vitamins:** **Fat-soluble = A, D, E, K**; **Water-soluble = B-complex & Vitamin C (Ascorbic acid)**.
3. **Physical Characterisation: IR, UV-Vis, ¹H NMR & Mass Spectrometry (Level G/P):**
   - **Infrared (IR) Spectroscopy — Characteristic Stretching Frequencies (ν̄):**
     - **O−H (Alcohol/Phenol):** **3200–3600 cm⁻¹ (broad, H-bonded)**; free O−H sharp at 3600 cm⁻¹; **Carboxylic acid O−H:** **2500–3300 cm⁻¹ (very broad)**.
     - **C≡N (Nitrile) & C≡C (Alkyne):** **2100–2260 cm⁻¹**.
     - **Carbonyl (C=O) Stretching Order (1650–1850 cm⁻¹ — Governed by −I vs +M of X in R−CO−X):**
       - **−I effect strengthens C=O bond (raises ν̄_C=O)**; **+M resonance or conjugation weakens C=O bond (lowers ν̄_C=O)**:
       - **Acid Anhydride (1810 & 1760 cm⁻¹, two bands) > Acid Chloride RCOCl (1800 cm⁻¹) > Ester RCOOR' (1735–1745 cm⁻¹) > Aldehyde RCHO (1725 cm⁻¹) > Ketone RCOR (1715 cm⁻¹) > Carboxylic Acid dimer (1710 cm⁻¹) > Amide RCONH₂ (1650–1680 cm⁻¹)**.
       - **Ring Strain Effect in Cyclic Ketones:** Smaller ring → higher s-character in exocyclic C=O bond → **higher ν̄_C=O**: **Cyclobutanone (1780 cm⁻¹) > Cyclopentanone (1745 cm⁻¹) > Cyclohexanone (1715 cm⁻¹)**.
   - **UV-Visible Spectroscopy:** Conjugation lowers the HOMO-LUMO (π → π*) energy gap, causing a **Bathochromic Shift (Red Shift to longer λ_max)** and **Hyperchromic Effect (higher ε_max)** (Woodward-Fieser rules).
   - **Proton Nuclear Magnetic Resonance (¹H NMR) Spectroscopy:**
     - **Reference Standard:** **Tetramethylsilane, TMS [Si(CH₃)₄, δ = 0.0 ppm]** (12 equivalent, highly shielded protons; volatile, inert).
     - **Four Pillars of ¹H NMR:**
       1. **Number of Signals** = Number of sets of **chemically non-equivalent protons**.
       2. **Chemical Shift (δ in ppm):** **Alkyl R−CH₃ (0.9–1.5 ppm)** | **−COCH₃ / Ar−CH₃ (2.1–2.5 ppm)** | **−OCH₃ / −CH₂X (3.3–4.5 ppm)** | **Alkene =CH (4.5–6.5 ppm)** | **Aromatic Ar−H (6.5–8.0 ppm, strongly deshielded by diamagnetic ring current!)** | **Aldehyde −CHO (9.5–10.0 ppm)** | **Carboxylic −COOH (10.5–12.0 ppm)**.
       3. **Integration (Peak Area Ratio)** = Relative number of protons in each signal.
       4. **Spin-Spin Splitting (Multiplicity = n + 1 Rule):** A proton with **n equivalent neighbouring protons** splits into **n + 1 peaks** with **Pascal's triangle intensity ratio** (Singlet 1, Doublet 1:1, Triplet 1:2:1, Quartet 1:3:3:1). Classic signature: **Ethyl group (−CH₂CH₃)** always gives a **Quartet (2H) + Triplet (3H)**!
   - **Mass Spectrometry (MS):**
     - **Halogen Isotope (M + 2) Peak Signatures:** **Chlorine (³⁵Cl : ³⁷Cl = 3 : 1)** gives **M : M+2 = 3 : 1**; **Bromine (⁷⁹Br : ⁸¹Br = 1 : 1)** gives **M : M+2 = 1 : 1** equal-height doublet!
     - **McLafferty Rearrangement:** Carbonyl compounds possessing a **γ-hydrogen** undergo 6-membered cyclic β-cleavage to lose a neutral alkene and form an **even-electron radical cation** (e.g., m/z = 44 for aldehydes, m/z = 58 for methyl ketones).`,
            pa: `### [Level H: Senior Secondary — Class 12: ਕਾਰਬੋਨਿਲ, ਕਾਰਬੋਕਸਿਲਿਕ ਐਸਿਡ ਅਤੇ ਅਮੀਨ]
1. **ਐਲਡੀਹਾਈਡ, ਕੀਟੋਨ ਅਤੇ ਕਾਰਬੋਕਸਿਲਿਕ ਐਸਿਡ:**
   - **ਨਿਊਕਲੀਓਫਿਲਿਕ ਜੋੜ ਕਿਰਿਆਸ਼ੀਲਤਾ ਕ੍ਰਮ:** **HCHO > CH₃CHO > CH₃COCH₃ > C₆H₅CHO > C₆H₅COCH₃ > C₆H₅COC₆H₅**।
   - **ਐਲਡੋਲ ਸੰਘਣਨ (Aldol Condensation):** ਘੱਟੋ-ਘੱਟ **ਇੱਕ α-H** ਵਾਲੇ ਐਲਡੀਹਾਈਡ/ਕੀਟੋਨ + **dil. NaOH** → β-ਹਾਈਡ੍ਰੌਕਸੀ ਕਾਰਬੋਨਿਲ → ਗਰਮ ਕਰਨ ਉੱਤੇ **α,β-ਅਸੰਤ੍ਰਿਪਤ ਕਾਰਬੋਨਿਲ**।
   - **ਕੈਨੀਜ਼ਾਰੋ ਕਿਰਿਆ (Cannizzaro Reaction):** **ਬਿਨਾਂ α-H** ਵਾਲੇ ਐਲਡੀਹਾਈਡ (**HCHO, C₆H₅CHO, (CH₃)₃C−CHO**) + **50% NaOH** → ਅਨੁਪਾਤਹੀਣਤਾ (1 ਅਣੂ ਦਾ ਆਕਸੀਕਰਨ → RCOO⁻Na⁺ + 1 ਅਣੂ ਦਾ ਲਘੂਕਰਨ → RCH₂OH)। **ਕ੍ਰੌਸ-ਕੈਨੀਜ਼ਾਰੋ (HCHO + C₆H₅CHO)** ਵਿੱਚ ਹਮੇਸ਼ਾ **HCHO ਦਾ ਆਕਸੀਕਰਨ (HCOO⁻)** ਹੁੰਦਾ ਹੈ!
   - **ਕਲੀਮੈਂਸਨ ਲਘੂਕਰਨ (Zn-Hg / conc. HCl)** ਅਤੇ **ਵੁਲਫ-ਕਿਸ਼ਨਰ ਲਘੂਕਰਨ (NH₂NH₂ / KOH, ਈਥਾਈਲੀਨ ਗਲਾਈਕੋਲ)** ਦੋਵੇਂ **C=O → −CH₂−** ਵਿੱਚ ਬਦਲਦੇ ਹਨ।
   - **ਪਛਾਣ ਟੈਸਟ:** **ਟੌਲਨਜ਼ ਟੈਸਟ (ਸਿਲਵਰ ਮਿਰਰ):** ਸਾਰੇ ਐਲਡੀਹਾਈਡ + HCOOH ਦਿੰਦੇ ਹਨ; **ਫੇਹਲਿੰਗ ਟੈਸਟ (Cu₂O ਦਾ ਲਾਲ ਅਵਖੇਪ):** ਸਿਰਫ਼ ਐਲੀਫੈਟਿਕ ਐਲਡੀਹਾਈਡ ਦਿੰਦੇ ਹਨ (**ਬੈਂਜ਼ੈਲਡੀਹਾਈਡ ਫੇਹਲਿੰਗ ਟੈਸਟ ਨਹੀਂ ਦਿੰਦਾ!**); **ਆਇਓਡੋਫਾਰਮ ਟੈਸਟ (I₂ + NaOH → ਪੀਲਾ CHI₃):** **CH₃CO−** ਜਾਂ **CH₃CH(OH)−** ਸਮੂਹ ਵਾਲੇ ਯੋਗਿਕ ਦਿੰਦੇ ਹਨ।
2. **ਨਾਈਟ੍ਰੋਜਨ ਯੋਗਿਕ (ਅਮੀਨ ਅਤੇ ਡਾਇਆਜ਼ੋਨੀਅਮ ਲੂਣ):**
   - **ਪਾਣੀ ਵਿੱਚ ਅਮੀਨਾਂ ਦੀ ਖਾਰੀ ਸ਼ਕਤੀ (Aqueous Basicity):**
     - **ਈਥਾਇਲ (−C₂H₅) ਲਈ:** **2° > 3° > 1° > NH₃ (2-3-1)**।
     - **ਮਿਥਾਇਲ (−CH₃) ਲਈ:** **2° > 1° > 3° > NH₃ (2-1-3)**।
     - **ਗੈਸ ਅਵਸਥਾ ਵਿੱਚ:** **3° > 2° > 1° > NH₃**।
   - **ਗੈਬਰੀਅਲ ਥੈਲੀਮਾਈਡ ਸੰਸ਼ਲੇਸ਼ਣ:** ਸਿਰਫ਼ ਸ਼ੁੱਧ **1° ਐਲੀਫੈਟਿਕ ਅਮੀਨ** ਬਣਾਉਂਦਾ ਹੈ (**ਐਨੀਲੀਨ ਨਹੀਂ ਬਣ ਸਕਦੀ** ਕਿਉਂਕਿ Ar−X S_N2 ਕਿਰਿਆ ਨਹੀਂ ਦਿੰਦਾ)।
   - **ਹੌਫਮੈਨ ਬ੍ਰੋਮਾਮਾਈਡ ਕਿਰਿਆ (RCONH₂ + Br₂ + 4KOH):** 1 ਕਾਰਬਨ ਘੱਟ ਵਾਲਾ **1° ਅਮੀਨ (RNH₂)** ਬਣਾਉਂਦੀ ਹੈ (ਇੰਟਰਮੀਡੀਏਟ: **ਐਲਕਾਈਲ ਆਈਸੋਸਾਇਨੇਟ R−N=C=O**)।
   - **ਕਾਰਬਾਇਲਅਮੀਨ ਟੈਸਟ (CHCl₃ + alc. KOH → ਬਦਬੂਦਾਰ ਆਈਸੋਸਾਇਨਾਈਡ R−NC):** ਸਿਰਫ਼ **1° ਅਮੀਨ** (ਐਲੀਫੈਟਿਕ ਤੇ ਐਰੋਮੈਟਿਕ) ਦਿੰਦੇ ਹਨ।

---

### [Level G & P: ਚੋਣਵੇਂ ਅਭਿਕਾਰਕ, ਪੌਲੀਮਰ, ਬਾਇਓਮੋਲੀਕਿਊਲ ਅਤੇ IR/UV/NMR ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ]
1. **ਚੋਣਵੇਂ ਅਭਿਕਾਰਕ (Chemoselective Reagents) ਅਤੇ ਰੱਖਿਅਕ ਸਮੂਹ:**
   - **NaBH₄** ਸਿਰਫ਼ ਐਲਡੀਹਾਈਡ, ਕੀਟੋਨ ਅਤੇ RCOCl ਦਾ ਲਘੂਕਰਨ ਕਰਦਾ ਹੈ (ਐਸਟਰ, ਐਸਿਡ, ਐਮਾਈਡ ਦਾ ਨਹੀਂ), ਜਦਕਿ **LiAlH₄** ਸਾਰਿਆਂ ਦਾ ਲਘੂਕਰਨ ਕਰ ਦਿੰਦਾ ਹੈ। **DIBAL-H (−78°C)** ਐਸਟਰ ਅਤੇ ਨਾਈਟ੍ਰਾਈਲ ਨੂੰ ਸਿੱਧਾ **ਐਲਡੀਹਾਈਡ** ਵਿੱਚ ਬਦਲਦਾ ਹੈ। **PCC (CH₂Cl₂)** 1° ਅਲਕੋਹਲ ਨੂੰ **ਐਲਡੀਹਾਈਡ** ਉੱਤੇ ਰੋਕ ਲੈਂਦਾ ਹੈ।
   - **ਬਾਏਰ-ਵਿਲੀਗਰ ਆਕਸੀਕਰਨ (Ketone + m-CPBA → Ester)** ਵਿੱਚ ਮਾਈਗ੍ਰੇਸ਼ਨ ਕ੍ਰਮ: **H > 3° > Cyclohexyl > 2° ≈ Phenyl > 1° > CH₃**।
   - **ਰੱਖਿਅਕ ਸਮੂਹ:** C=O ਲਈ **ਈਥਾਈਲੀਨ ਗਲਾਈਕੋਲ (ਚੱਕਰੀ ਐਸੀਟਲ)**; −OH ਲਈ **TMS/TBDMS ਸਿਲਾਈਲ ਈਥਰ**; −NH₂ ਲਈ **Boc / Cbz / Fmoc**।
2. **ਪੌਲੀਮਰ, ਬਾਇਓਮੋਲੀਕਿਊਲ ਅਤੇ ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ (IR, ¹H NMR, MS):**
   - **ਸੁਕਰੋਜ਼ (Sucrose)** ਇੱਕ **ਗੈਰ-ਲਘੂਕਾਰਕ ਸ਼ੂਗਰ (Non-reducing sugar)** ਹੈ, ਜਦਕਿ ਮਾਲਟੋਜ਼ ਅਤੇ ਲੈਕਟੋਜ਼ ਲਘੂਕਾਰਕ ਹਨ। **ਗਲਾਈਸੀਨ** ਇੱਕੋ-ਇੱਕ ਪ੍ਰਕਾਸ਼ੀ ਤੌਰ ਉੱਤੇ ਅਕਿਰਿਆਸ਼ੀਲ (Achiral) ਅਮੀਨੋ ਐਸਿਡ ਹੈ।
   - **IR ਵਿੱਚ C=O ਖਿੱਚਣ ਦੀ ਆਵ੍ਰਿਤੀ (ν̄_C=O) ਦਾ ਕ੍ਰਮ:** **ਐਸਿਡ ਕਲੋਰਾਈਡ (1800) > ਐਸਟਰ (1735) > ਐਲਡੀਹਾਈਡ (1725) > ਕੀਟੋਨ (1715) > ਐਮਾਈਡ (1660 cm⁻¹)**।
   - **¹H NMR:** ਹਵਾਲਾ **TMS (δ = 0 ppm)**; **n + 1 ਨਿਯਮ** ਅਨੁਸਾਰ **ਈਥਾਇਲ ਸਮੂਹ (−CH₂CH₃)** ਇੱਕ **ਕੁਆਰਟੈੱਟ (2H) + ਟ੍ਰਿਪਲੈੱਟ (3H)** ਦਿੰਦਾ ਹੈ; ਐਲਡੀਹਾਈਡ **−CHO δ 9.5–10 ppm** ਅਤੇ **−COOH δ 10.5–12 ppm** ਉੱਤੇ ਆਉਂਦਾ ਹੈ।
   - **ਮਾਸ ਸਪੈਕਟ੍ਰੋਮੈਟਰੀ (MS):** ਕਲੋਰੀਨ ਲਈ **M : M+2 = 3 : 1** ਅਤੇ ਬ੍ਰੋਮੀਨ ਲਈ **M : M+2 = 1 : 1**।`,
            hi: `### [Level H: Senior Secondary — Class 12: कार्बोनिल, कार्बोक्सिलिक अम्ल एवं एमीन]
1. **एल्डिहाइड, कीटोन एवं कार्बोक्सिलिक अम्ल:**
   - **नाभिकरागी योग क्रियाशीलता क्रम:** **HCHO > CH₃CHO > CH₃COCH₃ > C₆H₅CHO > C₆H₅COCH₃ > C₆H₅COC₆H₅**।
   - **एल्डोल संघनन (Aldol Condensation):** कम-से-कम **एक α-H** युक्त एल्डिहाइड/कीटोन + **तनु NaOH** → β-हाइड्रॉक्सी कार्बोनिल → गर्म करने पर **α,β-असंतृप्त कार्बोनिल**।
   - **कैनिज़ारो अभिक्रिया (Cannizzaro Reaction):** **α-H रहित** एल्डिहाइड (**HCHO, C₆H₅CHO, (CH₃)₃C−CHO**) + **50% NaOH** → असमानुपातन (1 अणु का ऑक्सीकरण → RCOO⁻Na⁺ + 1 अणु का अपचयन → RCH₂OH)। **क्रॉस-कैनिज़ारो (HCHO + C₆H₅CHO)** में सदैव **HCHO का ऑक्सीकरण (HCOO⁻)** होता है!
   - **क्लीमेंसन अपचयन (Zn-Hg / सांद्र HCl)** तथा **वोल्फ-किशनर अपचयन (NH₂NH₂ / KOH, एथिलीन ग्लाइकॉल)** दोनों **C=O → −CH₂−** में अपचयित करते हैं।
   - **विभेदक परीक्षण:** **टॉलेन्स परीक्षण (रजत दर्पण):** सभी एल्डिहाइड + HCOOH देते हैं; **फेहलिंग परीक्षण (Cu₂O का लाल-भूरा अवक्षेप):** केवल एलिफैटिक एल्डिहाइड देते हैं (**बेंजैल्डिहाइड फेहलिंग परीक्षण नहीं देता!**); **आयोडोफॉर्म परीक्षण (I₂ + NaOH → पीला CHI₃):** **CH₃CO−** या **CH₃CH(OH)−** समूह युक्त यौगिक देते हैं।
2. **नाइट्रोजन युक्त कार्बनिक यौगिक (एमीन एवं डाइएजोनियम लवण):**
   - **जलीय विलयन में एमीनों की क्षारीय सामर्थ्य (Aqueous Basicity):**
     - **एथिल (−C₂H₅) समूह के लिए:** **2° > 3° > 1° > NH₃ (2-3-1)**।
     - **मेथिल (−CH₃) समूह के लिए:** **2° > 1° > 3° > NH₃ (2-1-3)**।
     - **गैसीय प्रावस्था में:** **3° > 2° > 1° > NH₃**।
   - **गैब्रियल थैलिमाइड संश्लेषण:** केवल शुद्ध **1° एलिफैटिक एमीन** बनाता है (**एनिलीन नहीं बनाई जा सकती** क्योंकि Ar−X S_N2 अभिक्रिया नहीं देता)।
   - **हॉफमान ब्रोमामाइड निम्नीकरण (RCONH₂ + Br₂ + 4KOH):** 1 कार्बन कम वाला **1° एमीन (RNH₂)** बनाता है (मध्यवर्ती: **एल्किल आइसोसायनेट R−N=C=O**)।
   - **कार्बिलएमीन परीक्षण (CHCl₃ + alc. KOH → दुर्गंधयुक्त आइसोसायनाइड R−NC):** केवल **1° एमीन** (एलिफैटिक एवं एरोमैटिक) देते हैं।

---

### [Level G & P: चयनात्मक अभिकर्मक, बहुलक, जैव-अणु एवं IR/UV/NMR स्पेक्ट्रोस्कोपी]
1. **रसायन-चयनात्मक अभिकर्मक (Chemoselective Reagents) एवं रक्षक समूह:**
   - **NaBH₄** केवल एल्डिहाइड, कीटोन तथा RCOCl को अपचयित करता है (एस्टर, अम्ल, एमाइड को नहीं), जबकि **LiAlH₄** सभी को अपचयित कर देता है। **DIBAL-H (−78°C)** एस्टर एवं नाइट्राइल को सीधे **एल्डिहाइड** में बदलता है। **PCC (CH₂Cl₂)** 1° अल्कोहल को **एल्डिहाइड** पर रोक लेता है।
   - **बेयर-विलिगर ऑक्सीकरण (Ketone + m-CPBA → Ester)** में अभिगमन क्षमता (Migratory aptitude) का क्रम: **H > 3° > Cyclohexyl > 2° ≈ Phenyl > 1° > CH₃**।
   - **रक्षक समूह (Protecting Groups):** C=O के लिए **एथिलीन ग्लाइकॉल (चक्रीय एसिटल)**; −OH के लिए **TMS/TBDMS सिलाइल ईथर**; −NH₂ के लिए **Boc / Cbz / Fmoc**।
2. **बहुलक, जैव-अणु एवं कार्बनिक स्पेक्ट्रोस्कोपी (IR, ¹H NMR, MS):**
   - **सुक्रोज़ (Sucrose)** एक **अनपचायी शर्करा (Non-reducing sugar)** है, जबकि माल्टोज़ और लैक्टोज़ अपचायी शर्कराएँ हैं। **ग्लाइसीन** एकमात्र प्रकाशिक निष्क्रिय (Achiral) अमीनो अम्ल है।
   - **IR में C=O तनन आवृत्ति (ν̄_C=O) का क्रम:** **अम्ल क्लोराइड (1800) > एस्टर (1735) > एल्डिहाइड (1725) > कीटोन (1715) > एमाइड (1660 cm⁻¹)**।
   - **¹H NMR:** संदर्भ मानक **TMS (δ = 0 ppm)**; **n + 1 नियम** के अनुसार **एथिल समूह (−CH₂CH₃)** एक **चतुष्क / Quartet (2H) + त्रिक / Triplet (3H)** देता है; एल्डिहाइड **−CHO δ 9.5–10 ppm** तथा **−COOH δ 10.5–12 ppm** पर प्रकट होता है।
   - **द्रव्यमान स्पेक्ट्रोमेट्री (MS):** क्लोरीन के लिए **M : M+2 = 3 : 1** तथा ब्रोमीन के लिए **M : M+2 = 1 : 1**।`
        },
        keyNotes: {
            en: [
                'Benzaldehyde (C₆H₅CHO) gives a positive Tollens\' silver mirror test and undergoes Cannizzaro reaction (no α-H), but it FAILS Fehling\'s and Benedict\'s tests.',
                'In aqueous solution, the basicity order of ethylamines is 2° > 3° > 1° > NH₃ (2-3-1), whereas for methylamines it is 2° > 1° > 3° > NH₃ (2-1-3); in the gas phase, both follow 3° > 2° > 1° > NH₃.',
                'NaBH₄ chemoselectively reduces aldehydes, ketones, and acid chlorides without touching esters, carboxylic acids, amides, or nitro groups, whereas LiAlH₄ reduces all of them; DIBAL-H at −78°C reduces esters and nitriles selectively to aldehydes.',
                'In Baeyer-Villiger oxidation of unsymmetrical ketones with peracids (m-CPBA), the migratory aptitude follows H > 3° > cyclohexyl > 2° ≈ phenyl > 1° > methyl (so acetophenone yields phenyl acetate!).',
                'Carbonyl IR stretching frequency (ν̄_C=O) decreases as +M resonance increases over −I effect: RCOCl (1800) > Ester (1735) > Aldehyde (1725) > Ketone (1715) > Amide (1660 cm⁻¹).',
                'In ¹H NMR, Tetramethylsilane (TMS, δ = 0 ppm) is the reference; an ethyl group (−CH₂CH₃) splits into a 2H quartet and a 3H triplet by the (n + 1) rule, while −CHO appears at δ 9.5–10 ppm and −COOH at δ 10.5–12 ppm.'
            ],
            pa: [
                'ਬੈਂਜ਼ੈਲਡੀਹਾਈਡ (C₆H₅CHO) ਟੌਲਨਜ਼ ਟੈਸਟ ਅਤੇ ਕੈਨੀਜ਼ਾਰੋ ਕਿਰਿਆ ਦਿੰਦਾ ਹੈ, ਪਰ ਇਹ ਫੇਹਲਿੰਗ ਅਤੇ ਬੈਨੇਡਿਕਟ ਟੈਸਟ ਨਹੀਂ ਦਿੰਦਾ।',
                'ਜਲੀ ਘੋਲ ਵਿੱਚ ਈਥਾਇਲ ਅਮੀਨਾਂ ਦੀ ਖਾਰੀ ਸ਼ਕਤੀ ਦਾ ਕ੍ਰਮ 2° > 3° > 1° > NH₃ (2-3-1) ਅਤੇ ਮਿਥਾਇਲ ਅਮੀਨਾਂ ਲਈ 2° > 1° > 3° > NH₃ (2-1-3) ਹੁੰਦਾ ਹੈ; ਗੈਸ ਅਵਸਥਾ ਵਿੱਚ 3° > 2° > 1° > NH₃ ਹੁੰਦਾ ਹੈ।',
                'NaBH₄ ਸਿਰਫ਼ ਐਲਡੀਹਾਈਡ, ਕੀਟੋਨ ਅਤੇ RCOCl ਦਾ ਲਘੂਕਰਨ ਕਰਦਾ ਹੈ (ਐਸਟਰ ਤੇ ਐਮਾਈਡ ਦਾ ਨਹੀਂ), ਜਦਕਿ DIBAL-H (−78°C) ਐਸਟਰ ਤੇ ਨਾਈਟ੍ਰਾਈਲ ਨੂੰ ਸਿੱਧਾ ਐਲਡੀਹਾਈਡ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
                'ਬਾਏਰ-ਵਿਲੀਗਰ ਆਕਸੀਕਰਨ (m-CPBA) ਵਿੱਚ ਮਾਈਗ੍ਰੇਸ਼ਨ ਕ੍ਰਮ H > 3° > 2° ≈ ਫਿਨਾਇਲ > 1° > ਮਿਥਾਇਲ ਹੁੰਦਾ ਹੈ (ਇਸ ਲਈ ਐਸੀਟੋਫੀਨੋਨ ਤੋਂ ਫਿਨਾਇਲ ਐਸੀਟੇਟ ਬਣਦਾ ਹੈ)।',
                'IR ਸਪੈਕਟ੍ਰੋਸਕੋਪੀ ਵਿੱਚ C=O ਖਿੱਚਣ ਦੀ ਆਵ੍ਰਿਤੀ (ν̄_C=O) ਦਾ ਕ੍ਰਮ: RCOCl (1800) > ਐਸਟਰ (1735) > ਐਲਡੀਹਾਈਡ (1725) > ਕੀਟੋਨ (1715) > ਐਮਾਈਡ (1660 cm⁻¹) ਹੁੰਦਾ ਹੈ।',
                '¹H NMR ਵਿੱਚ TMS (δ = 0 ppm) ਹਵਾਲਾ ਹੈ; ਈਥਾਇਲ ਸਮੂਹ (−CH₂CH₃) ਕੁਆਰਟੈੱਟ (2H) ਅਤੇ ਟ੍ਰਿਪਲੈੱਟ (3H) ਦਿੰਦਾ ਹੈ, ਜਦਕਿ −CHO δ 9.5–10 ppm ਉੱਤੇ ਆਉਂਦਾ ਹੈ।'
            ],
            hi: [
                'बेंजैल्डिहाइड (C₆H₅CHO) टॉलेन्स रजत दर्पण परीक्षण तथा कैनिज़ारो अभिक्रिया देता है, किंतु यह फेहलिंग और बेनेडिक्ट परीक्षण नहीं देता।',
                'जलीय विलयन में एथिल एमीनों की क्षारीयता का क्रम 2° > 3° > 1° > NH₃ (2-3-1) तथा मेथिल एमीनों के लिए 2° > 1° > 3° > NH₃ (2-1-3) होता है; गैसीय अवस्था में यह 3° > 2° > 1° > NH₃ होता है।',
                'NaBH₄ केवल एल्डिहाइड, कीटोन व RCOCl को अपचयित करता है (एस्टर व एमाइड को नहीं), जबकि DIBAL-H (−78°C) एस्टर व नाइट्राइल को सीधे एल्डिहाइड में बदलता है।',
                'बेयर-विलिगर ऑक्सीकरण (m-CPBA) में अभिगमन क्षमता का क्रम H > 3° > 2° ≈ फेनिल > 1° > मेथिल होता है (अतः एसीटोफीनोन से फेनिल एसीटेट बनता है)।',
                'IR स्पेक्ट्रोस्कोपी में C=O तनन आवृत्ति (ν̄_C=O) का क्रम: RCOCl (1800) > एस्टर (1735) > एल्डिहाइड (1725) > कीटोन (1715) > एमाइड (1660 cm⁻¹) होता है।',
                '¹H NMR में TMS (δ = 0 ppm) संदर्भ मानक है; एथिल समूह (−CH₂CH₃) एक चतुष्क (2H) और त्रिक (3H) देता है, जबकि −CHO δ 9.5–10 ppm पर प्रकट होता है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Carbonyl Distinction Cheat-Sheet: HCHO & CH₃CHO give Tollens\' + Fehling\'s | C₆H₅CHO gives Tollens\' ONLY (No Fehling\'s) | CH₃CHO & CH₃COCH₃ give Iodoform test (I₂/NaOH → yellow CHI₃).',
                'Amine Synthesis & Tests: Gabriel Phthalimide → Pure 1° Aliphatic Amine only | Hoffmann Bromamide (Br₂/KOH) → 1° Amine with 1 less C | Carbylamine (CHCl₃/KOH) → Foul R−NC for 1° Amines only.',
                'Selective Reagents & Protecting Groups: NaBH₄ (C=O only) vs LiAlH₄ (all) | PCC (1° ROH → RCHO) | Ethylene glycol protects C=O as cyclic acetal | TMS protects −OH | Boc/Cbz/Fmoc protect −NH₂.',
                'Polymers & Biomolecules: Nylon-6,6 (Hexamethylenediamine + Adipic acid) | Nylon-6 (Caprolactam) | Dacron (Ethylene glycol + Terephthalic acid) | Sucrose = Non-reducing sugar | Glycine = Achiral amino acid.',
                'IR & NMR High-Yield Numbers: ν̄_C=O: RCOCl (1800) > Ester (1735) > Aldehyde (1725) > Ketone (1715) > Amide (1660 cm⁻¹) | ¹H NMR: TMS = 0 ppm, Ar−H = 6.5–8.0 ppm, −CHO = 9.5–10 ppm, −COOH = 10.5–12 ppm | MS M:M+2: Cl = 3:1, Br = 1:1.'
            ],
            pa: [
                'ਕਾਰਬੋਨਿਲ ਪਛਾਣ: HCHO ਤੇ CH₃CHO → ਟੌਲਨਜ਼ + ਫੇਹਲਿੰਗ | C₆H₅CHO → ਸਿਰਫ਼ ਟੌਲਨਜ਼ (ਫੇਹਲਿੰਗ ਨਹੀਂ) | CH₃CHO ਤੇ CH₃COCH₃ → ਆਇਓਡੋਫਾਰਮ ਟੈਸਟ (ਪੀਲਾ CHI₃)।',
                'ਅਮੀਨ ਕਿਰਿਆਵਾਂ: ਗੈਬਰੀਅਲ ਥੈਲੀਮਾਈਡ → ਸਿਰਫ਼ 1° ਐਲੀਫੈਟਿਕ ਅਮੀਨ | ਹੌਫਮੈਨ ਬ੍ਰੋਮਾਮਾਈਡ → 1 ਘੱਟ C ਵਾਲਾ 1° ਅਮੀਨ | ਕਾਰਬਾਇਲਅਮੀਨ → ਸਿਰਫ਼ 1° ਅਮੀਨ।',
                'ਚੋਣਵੇਂ ਅਭਿਕਾਰਕ: NaBH₄ (ਸਿਰਫ਼ C=O) | PCC (1° ROH → RCHO) | ਈਥਾਈਲੀਨ ਗਲਾਈਕੋਲ C=O ਨੂੰ ਚੱਕਰੀ ਐਸੀਟਲ ਵਜੋਂ ਸੁਰੱਖਿਅਤ ਕਰਦਾ ਹੈ।',
                'ਪੌਲੀਮਰ ਤੇ ਬਾਇਓਮੋਲੀਕਿਊਲ: ਨਾਈਲੋਨ-6,6 (ਹੈਕਸਾਮਿਥਾਈਲੀਨਡਾਇਅਮੀਨ + ਐਡੀਪਿਕ ਐਸਿਡ) | ਨਾਈਲੋਨ-6 (ਕੈਪਰੋਲੈਕਟਮ) | ਸੁਕਰੋਜ਼ = ਗੈਰ-ਲਘੂਕਾਰਕ ਸ਼ੂਗਰ | ਗਲਾਈਸੀਨ = ਅਕਿਰਿਆਸ਼ੀਲ (Achiral) ਅਮੀਨੋ ਐਸਿਡ।',
                'IR ਅਤੇ NMR: ν̄_C=O: RCOCl (1800) > ਐਸਟਰ (1735) > ਐਲਡੀਹਾਈਡ (1725) > ਕੀਟੋਨ (1715) > ਐਮਾਈਡ (1660 cm⁻¹) | ¹H NMR: TMS = 0 ppm, −CHO = 9.5–10 ppm | MS M:M+2: Cl = 3:1, Br = 1:1।'
            ],
            hi: [
                'कार्बोनिल पहचान: HCHO व CH₃CHO → टॉलेन्स + फेहलिंग | C₆H₅CHO → केवल टॉलेन्स (फेहलिंग नहीं) | CH₃CHO व CH₃COCH₃ → आयोडोफॉर्म परीक्षण (पीला CHI₃)।',
                'एमीन अभिक्रियाएँ: गैब्रियल थैलिमाइड → केवल 1° एलिफैटिक एमीन | हॉफमान ब्रोमामाइड → 1 कम C वाला 1° एमीन | कार्बिलएमीन → केवल 1° एमीन।',
                'चयनात्मक अभिकर्मक: NaBH₄ (केवल C=O) | PCC (1° ROH → RCHO) | एथिलीन ग्लाइकॉल C=O को चक्रीय एसिटल के रूप में सुरक्षित करता है।',
                'बहुलक व जैव-अणु: नायलॉन-6,6 (हेक्सामेथिलीनडाइएमीन + एडिपिक अम्ल) | नायलॉन-6 (कैप्रोलैक्टम) | सुक्रोज़ = अनपचायी शर्करा | ग्लाइसीन = अकिरेल (Achiral) अमीनो अम्ल।',
                'IR एवं NMR: ν̄_C=O: RCOCl (1800) > एस्टर (1735) > एल्डिहाइड (1725) > कीटोन (1715) > एमाइड (1660 cm⁻¹) | ¹H NMR: TMS = 0 ppm, −CHO = 9.5–10 ppm | MS M:M+2: Cl = 3:1, Br = 1:1।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Ethanal (CH₃CHO) is the only aldehyde that gives a positive Iodoform test, and Ethanol is the only alcohol. Correction: Ethanal IS the only aldehyde that gives the Iodoform test, but Ethanol is NOT the only alcohol — Ethanol is the only PRIMARY (1°) alcohol, while all methyl secondary alcohols R−CH(OH)CH₃ (like propan-2-ol, butan-2-ol) also give a positive Iodoform test!',
                'Misconception: Formic acid (HCOOH) is a carboxylic acid, so it cannot give Tollens\' or Fehling\'s tests. Correction: Unlike other carboxylic acids, Formic acid (H−C(=O)−OH) contains a built-in aldehydic (−CHO) group and is easily oxidised to CO₂ + H₂O, giving a positive Tollens\' silver mirror and Fehling\'s test!',
                'Misconception: Amides (RCONH₂) have a higher C=O IR stretching frequency than esters (RCOOR\') because nitrogen is less electronegative than oxygen. Correction: Because nitrogen is less electronegative, its lone pair donates MUCH more strongly by +M resonance into C=O (giving strong C−O⁻ single-bond character), lowering the amide C=O frequency to ~1660 cm⁻¹ vs ester at ~1735 cm⁻¹.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਈਥੇਨੋਲ (C₂H₅OH) ਇਕਲੌਤਾ ਅਲਕੋਹਲ ਹੈ ਜੋ ਆਇਓਡੋਫਾਰਮ ਟੈਸਟ ਦਿੰਦਾ ਹੈ। ਸੁਧਾਰ: ਈਥੇਨੈਲ (CH₃CHO) ਇਕਲੌਤਾ ਐਲਡੀਹਾਈਡ ਹੈ ਅਤੇ ਈਥੇਨੋਲ ਇਕਲੌਤਾ 1° (ਪ੍ਰਾਇਮਰੀ) ਅਲਕੋਹਲ ਹੈ ਜੋ ਆਇਓਡੋਫਾਰਮ ਟੈਸਟ ਦਿੰਦਾ ਹੈ, ਪਰ ਸਾਰੇ CH₃CH(OH)−R ਵਾਲੇ 2° ਅਲਕੋਹਲ (ਜਿਵੇਂ ਪ੍ਰੋਪੇਨ-2-ਓਲ) ਵੀ ਆਇਓਡੋਫਾਰਮ ਟੈਸਟ ਦਿੰਦੇ ਹਨ!',
                'ਭੁਲੇਖਾ: ਫਾਰਮਿਕ ਐਸਿਡ (HCOOH) ਇੱਕ ਕਾਰਬੋਕਸਿਲਿਕ ਐਸਿਡ ਹੋਣ ਕਾਰਨ ਟੌਲਨਜ਼ ਟੈਸਟ ਨਹੀਂ ਦਿੰਦਾ। ਸੁਧਾਰ: ਫਾਰਮਿਕ ਐਸਿਡ (H−C(=O)−OH) ਵਿੱਚ ਐਲਡੀਹਾਈਡਿਕ (−CHO) ਸਮੂਹ ਮੌਜੂਦ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਇਹ ਟੌਲਨਜ਼ ਟੈਸਟ ਦਿੰਦਾ ਹੈ!',
                'ਭੁਲੇਖਾ: ਐਮਾਈਡ (RCONH₂) ਦੀ C=O IR ਆਵ੍ਰਿਤੀ ਐਸਟਰ (RCOOR\') ਤੋਂ ਵੱਧ ਹੁੰਦੀ ਹੈ। ਸੁਧਾਰ: ਨਾਈਟ੍ਰੋਜਨ ਦੇ ਪ੍ਰਬਲ +M ਰੈਜ਼ੋਨੈਂਸ ਪ੍ਰਭਾਵ ਕਾਰਨ ਐਮਾਈਡ ਦੇ C=O ਵਿੱਚ ਸਿੰਗਲ-ਬਾਂਡ ਗੁਣ ਵਧ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਐਮਾਈਡ ਦੀ ਆਵ੍ਰਿਤੀ (~1660 cm⁻¹) ਐਸਟਰ (~1735 cm⁻¹) ਤੋਂ ਕਾਫ਼ੀ ਘੱਟ ਹੁੰਦੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: एथेनॉल (C₂H₅OH) एकमात्र अल्कोहल है जो आयोडोफॉर्म परीक्षण देता है। सुधार: एथेनैल (CH₃CHO) एकमात्र एल्डिहाइड है तथा एथेनॉल एकमात्र प्राथमिक (1°) अल्कोहल है जो आयोडोफॉर्म परीक्षण देता है, किंतु CH₃CH(OH)−R संरचना वाले सभी द्वितीयक (2°) अल्कोहल (जैसे प्रोपेन-2-ऑल) भी धनात्मक आयोडोफॉर्म परीक्षण देते हैं!',
                'भ्रांति: फॉर्मिक अम्ल (HCOOH) एक कार्बोक्सिलिक अम्ल होने के कारण टॉलेन्स परीक्षण नहीं देता। सुधार: फॉर्मिक अम्ल (H−C(=O)−OH) की संरचना में एल्डिहाइडिक (−CHO) समूह निहित होता है, अतः यह CO₂ में ऑक्सीकृत होकर धनात्मक टॉलेन्स परीक्षण देता है!',
                'भ्रांति: एमाइड (RCONH₂) की C=O IR तनन आवृत्ति एस्टर (RCOOR\') से अधिक होती है। सुधार: नाइट्रोजन के प्रबल +M अनुनाद प्रभाव के कारण एमाइड के C=O में एकल-आबंध लक्षण बढ़ जाता है, जिससे एमाइड की आवृत्ति (~1660 cm⁻¹) एस्टर (~1735 cm⁻¹) से काफी कम होती है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'How will you selectively convert ethyl 4-oxopentanoate [CH₃COCH₂CH₂COOC₂H₅] into (a) ethyl 4-hydroxypentanoate [CH₃CH(OH)CH₂CH₂COOC₂H₅] and (b) 4-oxopentan-1-ol [CH₃COCH₂CH₂CH₂OH]?',
                    pa: 'ਈਥਾਇਲ 4-ਆਕਸੋਪੈਂਟਾਨੋਏਟ [CH₃COCH₂CH₂COOC₂H₅] ਨੂੰ ਚੋਣਵੇਂ ਰੂਪ ਵਿੱਚ (a) ਈਥਾਇਲ 4-ਹਾਈਡ੍ਰੌਕਸੀਪੈਂਟਾਨੋਏਟ [CH₃CH(OH)CH₂CH₂COOC₂H₅] ਅਤੇ (b) 4-ਆਕਸੋਪੈਂਟੇਨ-1-ਓਲ [CH₃COCH₂CH₂CH₂OH] ਵਿੱਚ ਕਿਵੇਂ ਬਦਲੋਗੇ?',
                    hi: 'एथिल 4-ऑक्सोपेंटानोएट [CH₃COCH₂CH₂COOC₂H₅] को चयनात्मक रूप से (a) एथिल 4-हाइड्रॉक्सीपेंटानोएट [CH₃CH(OH)CH₂CH₂COOC₂H₅] तथा (b) 4-ऑक्सोपेंटेन-1-ऑल [CH₃COCH₂CH₂CH₂OH] में कैसे परिवर्तित करेंगे?'
                },
                solutionSteps: {
                    en: [
                        'The starting molecule contains two reducible carbonyl groups: a more reactive Ketone (CH₃CO−) and a less reactive Ester (−COOC₂H₅).',
                        '(a) To reduce ONLY the ketone while leaving the ester untouched (Chemoselectivity): treat directly with NaBH₄ in ethanol → gives ethyl 4-hydroxypentanoate [CH₃CH(OH)CH₂CH₂COOC₂H₅].',
                        '(b) To reduce the less reactive ester to −CH₂OH while keeping the more reactive ketone intact (Protecting Group strategy): Step 1: Protect the ketone selectively as a cyclic ketal using Ethylene glycol (HOCH₂CH₂OH) + H⁺; Step 2: Reduce the ester to 1° alcohol with LiAlH₄; Step 3: Deprotect the ketal with aqueous H₃O⁺ → gives 4-oxopentan-1-ol [CH₃COCH₂CH₂CH₂OH].'
                    ],
                    pa: [
                        '(a) ਸਿਰਫ਼ ਕੀਟੋਨ ਨੂੰ ਅਲਕੋਹਲ ਵਿੱਚ ਬਦਲਣ ਅਤੇ ਐਸਟਰ ਨੂੰ ਬਚਾਉਣ ਲਈ: ਸਿੱਧਾ NaBH₄ / C₂H₅OH ਵਰਤੋ → ਈਥਾਇਲ 4-ਹਾਈਡ੍ਰੌਕਸੀਪੈਂਟਾਨੋਏਟ।',
                        '(b) ਕੀਟੋਨ ਨੂੰ ਬਚਾ ਕੇ ਸਿਰਫ਼ ਐਸਟਰ ਨੂੰ −CH₂OH ਵਿੱਚ ਬਦਲਣ ਲਈ: (1) ਈਥਾਈਲੀਨ ਗਲਾਈਕੋਲ + H⁺ ਨਾਲ ਕੀਟੋਨ ਨੂੰ ਚੱਕਰੀ ਕੀਟਲ ਵਜੋਂ ਸੁਰੱਖਿਅਤ ਕਰੋ; (2) LiAlH₄ ਨਾਲ ਐਸਟਰ ਦਾ ਲਘੂਕਰਨ ਕਰੋ; (3) H₃O⁺ ਨਾਲ ਕੀਟਲ ਹਟਾਓ → 4-ਆਕਸੋਪੈਂਟੇਨ-1-ਓਲ।'
                    ],
                    hi: [
                        '(a) केवल कीटोन को अल्कोहल में अपचयित करने और एस्टर को सुरक्षित रखने हेतु: सीधे NaBH₄ / C₂H₅OH का प्रयोग करें → एथिल 4-हाइड्रॉक्सीपेंटानोएट।',
                        '(b) अधिक क्रियाशील कीटोन को बचाकर केवल एस्टर को −CH₂OH में बदलने हेतु: (1) एथिलीन ग्लाइकॉल + H⁺ से कीटोन को चक्रीय कीटल के रूप में सुरक्षित करें; (2) LiAlH₄ से एस्टर को अपचयित करें; (3) H₃O⁺ से विरक्षण (Deprotection) करें → 4-ऑक्सोपेंटेन-1-ऑल।'
                    ]
                },
                finalAnswer: {
                    en: '(a) NaBH₄ / EtOH; (b) (1) HOCH₂CH₂OH / H⁺, (2) LiAlH₄, (3) H₃O⁺.',
                    pa: '(a) NaBH₄ / EtOH; (b) (1) HOCH₂CH₂OH / H⁺, (2) LiAlH₄, (3) H₃O⁺।',
                    hi: '(a) NaBH₄ / EtOH; (b) (1) HOCH₂CH₂OH / H⁺, (2) LiAlH₄, (3) H₃O⁺।'
                }
            },
            {
                problem: {
                    en: 'Two ester isomers with molecular formula C₃H₆O₂ both show a strong IR absorption band at ~1740 cm⁻¹ (no broad O−H band). Distinguish the two esters — Methyl acetate (CH₃COOCH₃) and Ethyl formate (HCOOCH₂CH₃) — using their ¹H NMR signals and spin-spin splitting patterns.',
                    pa: 'ਅਣੂ ਸੂਤਰ C₃H₆O₂ ਵਾਲੇ ਦੋ ਐਸਟਰ ਆਈਸੋਮਰਾਂ ਦਾ IR ਵਿੱਚ 1740 cm⁻¹ ਉੱਤੇ ਬੈਂਡ ਆਉਂਦਾ ਹੈ। ਉਹਨਾਂ ਦੇ ¹H NMR ਸਪਿਨ-ਸਪਿਨ ਸਪਲਿਟਿੰਗ ਪੈਟਰਨ ਤੋਂ ਦੋਵਾਂ ਐਸਟਰਾਂ (ਮਿਥਾਇਲ ਐਸੀਟੇਟ ਅਤੇ ਈਥਾਇਲ ਫਾਰਮੇਟ) ਦੀ ਪਛਾਣ ਕਰੋ।',
                    hi: 'अणु सूत्र C₃H₆O₂ वाले दो एस्टर समावयवियों का IR स्पेक्ट्रम 1740 cm⁻¹ पर प्रबल बैंड दर्शाता है। उनके ¹H NMR विपाटन पैटर्न से दोनों एस्टरों (मेथिल एसीटेट और एथिल फॉर्मेट) की पहचान कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Strong IR band at 1740 cm⁻¹ with no O−H stretch confirms an Ester functional group. For C₃H₆O₂, the two ester isomers are Methyl acetate (CH₃COOCH₃) and Ethyl formate (HCOOCH₂CH₃).',
                        'Isomer 1 — Methyl acetate (CH₃−C(=O)−OCH₃): Has two non-equivalent methyl groups with NO neighbouring protons → gives TWO SINGLETS (3H at δ 2.0 ppm for CH₃CO− and 3H at δ 3.7 ppm for −OCH₃).',
                        'Isomer 2 — Ethyl formate (H−C(=O)−OCH₂CH₃): Has a formyl proton + an ethyl group → gives THREE SIGNALS: a Singlet (1H at δ 8.0 ppm for H−C=O), a Quartet (2H at δ 4.2 ppm for −OCH₂−), and a Triplet (3H at δ 1.3 ppm for −CH₃).'
                    ],
                    pa: [
                        '1740 cm⁻¹ ਦਾ IR ਬੈਂਡ ਐਸਟਰ ਸਮੂਹ ਦਰਸਾਉਂਦਾ ਹੈ। C₃H₆O₂ ਦੇ ਦੋ ਐਸਟਰ ਹਨ: ਮਿਥਾਇਲ ਐਸੀਟੇਟ (CH₃COOCH₃) ਅਤੇ ਈਥਾਇਲ ਫਾਰਮੇਟ (HCOOCH₂CH₃)।',
                        'ਮਿਥਾਇਲ ਐਸੀਟੇਟ (CH₃COOCH₃): ¹H NMR ਵਿੱਚ ਸਿਰਫ਼ ਦੋ ਸਿੰਗਲੈੱਟ (3H δ 2.0 ppm ਅਤੇ 3H δ 3.7 ppm) ਦਿੰਦਾ ਹੈ।',
                        'ਈਥਾਇਲ ਫਾਰਮੇਟ (HCOOCH₂CH₃): ਤਿੰਨ ਸਿਗਨਲ ਦਿੰਦਾ ਹੈ — 1H ਸਿੰਗਲੈੱਟ (δ 8.0 ppm), 2H ਕੁਆਰਟੈੱਟ (δ 4.2 ppm), ਅਤੇ 3H ਟ੍ਰਿਪਲੈੱਟ (δ 1.3 ppm)।'
                    ],
                    hi: [
                        '1740 cm⁻¹ का IR बैंड एस्टर समूह की पुष्टि करता है। C₃H₆O₂ के दो एस्टर समावयवी हैं: मेथिल एसीटेट (CH₃COOCH₃) और एथिल फॉर्मेट (HCOOCH₂CH₃)।',
                        'मेथिल एसीटेट (CH₃COOCH₃): ¹H NMR में केवल दो एकक / Singlets (3H δ 2.0 ppm तथा 3H δ 3.7 ppm) देता है।',
                        'एथिल फॉर्मेट (HCOOCH₂CH₃): तीन संकेत देता है — 1H एकक (δ 8.0 ppm), 2H चतुष्क / Quartet (δ 4.2 ppm), तथा 3H त्रिक / Triplet (δ 1.3 ppm)।'
                    ]
                },
                finalAnswer: {
                    en: 'Methyl acetate (CH₃COOCH₃) gives two 3H singlets; Ethyl formate (HCOOCH₂CH₃) gives a 1H singlet, a 2H quartet, and a 3H triplet.',
                    pa: 'ਮਿਥਾਇਲ ਐਸੀਟੇਟ (CH₃COOCH₃) ਦੋ 3H ਸਿੰਗਲੈੱਟ ਦਿੰਦਾ ਹੈ; ਈਥਾਇਲ ਫਾਰਮੇਟ (HCOOCH₂CH₃) 1H ਸਿੰਗਲੈੱਟ, 2H ਕੁਆਰਟੈੱਟ ਅਤੇ 3H ਟ੍ਰਿਪਲੈੱਟ ਦਿੰਦਾ ਹੈ।',
                    hi: 'मेथिल एसीटेट (CH₃COOCH₃) दो 3H एकक देता है; एथिल फॉर्मेट (HCOOCH₂CH₃) 1H एकक, 2H चतुष्क तथा 3H त्रिक देता है।'
                }
            }
        ],
        flashcards: [
            {
                id: 'chem-org2-fc-1',
                question: {
                    en: '[Level H] How do Benzaldehyde (C₆H₅CHO) and Acetaldehyde (CH₃CHO) differ in their response to Tollens\', Fehling\'s, Cannizzaro, and Iodoform tests?',
                    pa: '[Level H] ਬੈਂਜ਼ੈਲਡੀਹਾਈਡ (C₆H₅CHO) ਅਤੇ ਐਸੀਟੈਲਡੀਹਾਈਡ (CH₃CHO) ਟੌਲਨਜ਼, ਫੇਹਲਿੰਗ, ਕੈਨੀਜ਼ਾਰੋ ਅਤੇ ਆਇਓਡੋਫਾਰਮ ਟੈਸਟਾਂ ਵਿੱਚ ਕਿਵੇਂ ਵੱਖ-ਵੱਖ ਵਿਵਹਾਰ ਕਰਦੇ ਹਨ?',
                    hi: '[Level H] बेंजैल्डिहाइड (C₆H₅CHO) तथा एसीटैल्डिहाइड (CH₃CHO) टॉलेन्स, फेहलिंग, कैनिज़ारो और आयोडोफॉर्म परीक्षणों में किस प्रकार भिन्न व्यवहार करते हैं?'
                },
                answer: {
                    en: 'Both give Tollens\' silver mirror test. Acetaldehyde gives Fehling\'s test, Aldol condensation, and Iodoform test. Benzaldehyde FAILS Fehling\'s and Iodoform tests, and undergoes Cannizzaro reaction (no α-H).',
                    pa: 'ਦੋਵੇਂ ਟੌਲਨਜ਼ ਟੈਸਟ ਦਿੰਦੇ ਹਨ। ਐਸੀਟੈਲਡੀਹਾਈਡ ਫੇਹਲਿੰਗ ਟੈਸਟ, ਐਲਡੋਲ ਅਤੇ ਆਇਓਡੋਫਾਰਮ ਟੈਸਟ ਦਿੰਦਾ ਹੈ। ਬੈਂਜ਼ੈਲਡੀਹਾਈਡ ਫੇਹਲਿੰਗ ਅਤੇ ਆਇਓਡੋਫਾਰਮ ਟੈਸਟ ਨਹੀਂ ਦਿੰਦਾ ਪਰ ਕੈਨੀਜ਼ਾਰੋ ਕਿਰਿਆ ਦਿੰਦਾ ਹੈ (α-H ਨਾ ਹੋਣ ਕਾਰਨ)।',
                    hi: 'दोनों टॉलेन्स परीक्षण देते हैं। एसीटैल्डिहाइड फेहलिंग, एल्डोल व आयोडोफॉर्म परीक्षण देता है। बेंजैल्डिहाइड फेहलिंग व आयोडोफॉर्म परीक्षण नहीं देता किंतु कैनिज़ारो अभिक्रिया देता है (α-H अनुपस्थित)।'
                }
            },
            {
                id: 'chem-org2-fc-2',
                question: {
                    en: '[Level H] What is the order of basicity of methyl-substituted and ethyl-substituted amines in aqueous solution vs gas phase?',
                    pa: '[Level H] ਜਲੀ ਘੋਲ ਅਤੇ ਗੈਸ ਅਵਸਥਾ ਵਿੱਚ ਮਿਥਾਇਲ ਅਤੇ ਈਥਾਇਲ ਅਮੀਨਾਂ ਦੀ ਖਾਰੀ ਸ਼ਕਤੀ ਦਾ ਕ੍ਰਮ ਕੀ ਹੈ?',
                    hi: '[Level H] जलीय विलयन तथा गैसीय प्रावस्था में मेथिल एवं एथिल प्रतिस्थापित एमीनों की क्षारीयता का क्रम क्या है?'
                },
                answer: {
                    en: 'In aqueous solution: Ethylamines follow 2° > 3° > 1° > NH₃ (2-3-1), whereas Methylamines follow 2° > 1° > 3° > NH₃ (2-1-3). In gas phase, both follow 3° > 2° > 1° > NH₃.',
                    pa: 'ਜਲੀ ਘੋਲ ਵਿੱਚ: ਈਥਾਇਲ ਅਮੀਨ 2° > 3° > 1° > NH₃ (2-3-1) ਅਤੇ ਮਿਥਾਇਲ ਅਮੀਨ 2° > 1° > 3° > NH₃ (2-1-3)। ਗੈਸ ਅਵਸਥਾ ਵਿੱਚ: 3° > 2° > 1° > NH₃।',
                    hi: 'जलीय विलयन में: एथिल एमीन 2° > 3° > 1° > NH₃ (2-3-1) तथा मेथिल एमीन 2° > 1° > 3° > NH₃ (2-1-3)। गैसीय अवस्था में: 3° > 2° > 1° > NH₃।'
                }
            },
            {
                id: 'chem-org2-fc-3',
                question: {
                    en: '[Level G] Compare the chemoselectivity of NaBH₄, LiAlH₄, DIBAL-H (−78°C), and PCC.',
                    pa: '[Level G] NaBH₄, LiAlH₄, DIBAL-H (−78°C) ਅਤੇ PCC ਦੀ ਚੋਣਵੀਂ ਕਿਰਿਆਸ਼ੀਲਤਾ (Chemoselectivity) ਦੀ ਤੁਲਨਾ ਕਰੋ।',
                    hi: '[Level G] NaBH₄, LiAlH₄, DIBAL-H (−78°C) तथा PCC की रसायन-चयनात्मकता (Chemoselectivity) की तुलना कीजिए।'
                },
                answer: {
                    en: 'NaBH₄ reduces only aldehydes, ketones, and RCOCl; LiAlH₄ reduces aldehydes, ketones, esters, acids, amides, and nitriles; DIBAL-H (−78°C) selectively reduces esters/nitriles to aldehydes; PCC oxidises 1° alcohols selectively to aldehydes.',
                    pa: 'NaBH₄ ਸਿਰਫ਼ ਐਲਡੀਹਾਈਡ, ਕੀਟੋਨ ਤੇ RCOCl ਦਾ ਲਘੂਕਰਨ ਕਰਦਾ ਹੈ; LiAlH₄ ਐਸਟਰ, ਐਸਿਡ, ਐਮਾਈਡ ਸਾਰਿਆਂ ਦਾ ਲਘੂਕਰਨ ਕਰਦਾ ਹੈ; DIBAL-H (−78°C) ਐਸਟਰ/ਨਾਈਟ੍ਰਾਈਲ ਤੋਂ ਐਲਡੀਹਾਈਡ ਬਣਾਉਂਦਾ ਹੈ; PCC 1° ਅਲਕੋਹਲ ਤੋਂ ਐਲਡੀਹਾਈਡ ਬਣਾਉਂਦਾ ਹੈ।',
                    hi: 'NaBH₄ केवल एल्डिहाइड, कीटोन व RCOCl को अपचयित करता है; LiAlH₄ एस्टर, अम्ल, एमाइड सभी को अपचयित करता है; DIBAL-H (−78°C) एस्टर/नाइट्राइल को एल्डिहाइड में बदलता है; PCC 1° अल्कोहल को एल्डिहाइड में ऑक्सीकृत करता है।'
                }
            },
            {
                id: 'chem-org2-fc-4',
                question: {
                    en: '[Level G] Arrange Acid chloride (RCOCl), Ester (RCOOR\'), Aldehyde (RCHO), Ketone (RCOR), and Amide (RCONH₂) in decreasing order of their IR C=O stretching frequency.',
                    pa: '[Level G] ਐਸਿਡ ਕਲੋਰਾਈਡ, ਐਸਟਰ, ਐਲਡੀਹਾਈਡ, ਕੀਟੋਨ ਅਤੇ ਐਮਾਈਡ ਨੂੰ ਉਹਨਾਂ ਦੀ IR C=O ਖਿੱਚਣ ਦੀ ਆਵ੍ਰਿਤੀ ਦੇ ਘਟਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਿਖੋ।',
                    hi: '[Level G] अम्ल क्लोराइड, एस्टर, एल्डिहाइड, कीटोन तथा एमाइड को उनकी IR C=O तनन आवृत्ति के घटते क्रम में व्यवस्थित कीजिए।'
                },
                answer: {
                    en: 'Acid chloride (~1800 cm⁻¹) > Ester (~1735 cm⁻¹) > Aldehyde (~1725 cm⁻¹) > Ketone (~1715 cm⁻¹) > Amide (~1660 cm⁻¹), governed by the balance of −I (increases ν̄) vs +M resonance (decreases ν̄).',
                    pa: 'ਐਸਿਡ ਕਲੋਰਾਈਡ (~1800 cm⁻¹) > ਐਸਟਰ (~1735 cm⁻¹) > ਐਲਡੀਹਾਈਡ (~1725 cm⁻¹) > ਕੀਟੋਨ (~1715 cm⁻¹) > ਐਮਾਈਡ (~1660 cm⁻¹)।',
                    hi: 'अम्ल क्लोराइड (~1800 cm⁻¹) > एस्टर (~1735 cm⁻¹) > एल्डिहाइड (~1725 cm⁻¹) > कीटोन (~1715 cm⁻¹) > एमाइड (~1660 cm⁻¹)।'
                }
            },
            {
                id: 'chem-org2-fc-5',
                question: {
                    en: '[Level P] How many ¹H NMR signals and what splitting patterns are observed for Bromoethane (CH₃CH₂Br), and what is the M : M+2 peak ratio in its Mass Spectrum?',
                    pa: '[Level P] ਬ੍ਰੋਮੋਈਥੇਨ (CH₃CH₂Br) ਦੇ ¹H NMR ਵਿੱਚ ਕਿੰਨੇ ਸਿਗਨਲ ਅਤੇ ਕਿਹੜਾ ਸਪਲਿਟਿੰਗ ਪੈਟਰਨ ਮਿਲਦਾ ਹੈ, ਅਤੇ ਇਸ ਦੇ ਮਾਸ ਸਪੈਕਟ੍ਰਮ ਵਿੱਚ M : M+2 ਅਨੁਪਾਤ ਕੀ ਹੁੰਦਾ ਹੈ?',
                    hi: '[Level P] ब्रोमोएथेन (CH₃CH₂Br) के ¹H NMR में कितने संकेत और क्या विपाटन पैटर्न मिलता है, तथा इसके द्रव्यमान स्पेक्ट्रम में M : M+2 अनुपात क्या होता है?'
                },
                answer: {
                    en: '2 signals in ¹H NMR: a triplet (3H, intensity 1:2:1) around δ 1.7 ppm for −CH₃ and a quartet (2H, intensity 1:3:3:1) around δ 3.4 ppm for −CH₂Br. In Mass Spectrometry, ⁷⁹Br/⁸¹Br gives an M : M+2 peak ratio of 1 : 1.',
                    pa: '¹H NMR ਵਿੱਚ 2 ਸਿਗਨਲ: −CH₃ ਲਈ 3H ਟ੍ਰਿਪਲੈੱਟ (1:2:1, δ 1.7 ppm) ਅਤੇ −CH₂Br ਲਈ 2H ਕੁਆਰਟੈੱਟ (1:3:3:1, δ 3.4 ppm)। ਮਾਸ ਸਪੈਕਟ੍ਰਮ ਵਿੱਚ Br ਕਾਰਨ M : M+2 = 1 : 1 ਹੁੰਦਾ ਹੈ।',
                    hi: '¹H NMR में 2 संकेत: −CH₃ के लिए 3H त्रिक (1:2:1, δ 1.7 ppm) तथा −CH₂Br के लिए 2H चतुष्क (1:3:3:1, δ 3.4 ppm)। द्रव्यमान स्पेक्ट्रम में Br के कारण M : M+2 अनुपात 1 : 1 होता है।'
                }
            }
        ]
    }
];
