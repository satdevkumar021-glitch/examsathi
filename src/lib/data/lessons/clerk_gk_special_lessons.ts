import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const CLERK_GK_SPECIAL_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. CLERK CURRENT AFFAIRS & STATIC GENERAL AWARENESS
    // =========================================================================
    {
        topicId: 'clerk-current-affairs',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 100,
            editorialNote: 'Comprehensive PPSC & PSSSB Clerk General Awareness Blueprint covering International Organizations & Headquarters, Flagship Schemes, Constitutional/Statutory Commissions, Indian Space & Defence Milestones, Civilian/Gallantry Awards, and Punjab Governance & GI Tags (Level B -> I -> A).'
        },
        bookRefs: [
            {
                title: 'India Year Book & Economic Survey (Publications Division, Govt. of India)',
                author: 'Ministry of Information and Broadcasting, Govt. of India',
                chapter: 'International Organizations, Welfare Schemes, Awards, Defence & Space Milestones',
                relevance: 'Primary official reference for PSSSB & PPSC Clerk General Awareness questions on national policies, space missions, awards, and international bodies.'
            },
            {
                title: 'Punjab Economic Survey & Official State Portal (punjab.gov.in)',
                author: 'Government of Punjab',
                chapter: 'Punjab Governance Initiatives, 23 Districts, GI Tags & Welfare Schemes',
                relevance: 'Direct source for Punjab-specific Current Affairs & Governance (Aam Aadmi Clinics, Sadak Surakhya Force, Malerkotla 23rd District, Phulkari & Basmati GI tags).'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Major International Organizations, Headquarters & Global Groupings]
1. **Master Reference Table: International Organizations & Headquarters (ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਗਠਨ ਅਤੇ ਮੁੱਖ ਦਫ਼ਤਰ):**
   | Organization | Founded | Headquarters | Key Exam Facts & Membership |
   |---|---|---|---|
   | **United Nations Organization (UNO)** | 24 Oct 1945 | **New York, USA** | **193 Member States** (193rd: South Sudan, 2011); 6 Official Languages (Arabic, Chinese, English, French, Russian, Spanish); UN Day: **24 October**. |
   | **International Court of Justice (ICJ)** | 1945 | **The Hague, Netherlands** | Only principal UN organ located **outside New York**; **15 Judges** elected for a **9-year term** (Dalveer Bhandari from India). |
   | **WHO / ILO / WTO / WIPO** | 1948 / 1919 / 1995 / 1967 | **Geneva, Switzerland** | World Health Day: **7 April**; **ILO** (oldest UN specialized agency, 1919, Nobel Peace Prize 1969); **WTO** replaced GATT on 1 Jan 1995 (**166 members**). |
   | **UNESCO & OECD** | 1945 / 1961 | **Paris, France** | UNESCO designates World Heritage Sites (India has **43 UNESCO World Heritage Sites**, including **Moidams of Assam** as 43rd in 2024). |
   | **FAO & WFP** | 1945 / 1961 | **Rome, Italy** | Food and Agriculture Organization; World Food Day: **16 October**. |
   | **IMF & World Bank (IBRD)** | 1944 (Bretton Woods) | **Washington D.C., USA** | Known as **Bretton Woods Twins**; IMF has **191 members** (190th Andorra, 191st Liechtenstein) and issues **Special Drawing Rights (SDR — "Paper Gold")**. |
   | **IAEA & OPEC** | 1957 / 1960 | **Vienna, Austria** | International Atomic Energy Agency ("Atoms for Peace") & Organization of the Petroleum Exporting Countries. |
   | **ASEAN** | 1967 (Bangkok Decl.) | **Jakarta, Indonesia** | 10 Southeast Asian members (+ Timor-Leste admitted in principle); India is a Sectoral/Summit Partner (**Act East Policy**). |
   | **SAARC** | 8 Dec 1985 (Dhaka) | **Kathmandu, Nepal** | **8 Members:** **M**aldives, **B**hutan, **B**angladesh, **S**ri Lanka, **P**akistan, **A**fghanistan (joined 2007), **I**ndia, **N**epal (*Mnemonic: **MBBS PAIN***). |
   | **BIMSTEC** | 1997 (Bangkok Decl.) | **Dhaka, Bangladesh** | **7 Members:** Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka, Thailand (bridges South & Southeast Asia). |
   | **BRICS & New Development Bank (NDB)** | 2009 / 2014 (Fortaleza) | **Shanghai, China** (NDB) | Original 5: Brazil, Russia, India, China, South Africa; expanded in 2024–25 to include Egypt, Ethiopia, Iran, UAE, Indonesia. |
   | **Shanghai Cooperation Organisation (SCO)** | 2001 | **Beijing, China** | **10 Members:** China, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan, **India & Pakistan (joined 2017, Astana)**, Iran (2023), Belarus (2024). |
   | **Asian Development Bank (ADB)** | 1966 | **Mandaluyong (Manila), Philippines** | 69 members; Japan and USA hold the largest shares. |
   | **NATO** | 1949 | **Brussels, Belgium** | **32 Members** (31st: **Finland** in 2023; 32nd: **Sweden** in 2024). |

---

### [Level I: Intermediate — Indian Space/Defence Milestones, Commissions, Schemes & National Awards]
1. **ISRO Space Milestones & Defence Indigenisation:**
   | Mission / System | Launch / Milestone | High-Yield Exam Facts for PPSC & PSSSB Clerk |
   |---|---|---|
   | **Chandrayaan-3** | Launched **14 July 2023** (LVM3-M4); Landed **23 August 2023** | India became the **4th country** to soft-land on the Moon and **1st on the Lunar South Pole**! Lander: *Vikram*, Rover: *Pragyan*. Landing site named **'Shiva Shakti Point'**; **23 August** declared **National Space Day** (Cha-2 site: *Tiranga Point*; Cha-1 site: *Jawahar Point*). |
   | **Aditya-L1** | Launched **2 Sept 2023** (PSLV-C57) | India's **first solar observatory mission** placed in a **Halo Orbit around Lagrange Point 1 ($L_1$)**, $1.5\\text{ million km}$ from Earth. |
   | **Gaganyaan** | Upcoming Crewed Mission | India's first human spaceflight program using **HLVM3** rocket; humanoid robot test flight: ***Vyommitra***. |
   | **INS Vikrant (IAC-1)** | Commissioned Sept 2022 | India's **first indigenously built aircraft carrier**, built by **Cochin Shipyard Limited (CSL)**. |
   | **BrahMos & Agni-V** | Defence Missiles | **BrahMos:** Supersonic cruise missile (India DRDO + Russia NPOM; named after Brahmaputra & Moskva rivers). **Agni-V:** Intercontinental surface-to-surface ballistic missile ($>5,000\\text{ km}$) with **MIRV technology (*Mission Divyastra*)**. |

2. **Constitutional & Statutory Commissions & Civilian/Gallantry Awards:**
   - **NITI Aayog (National Institution for Transforming India):** Formed on **1 January 2015** (replaced Planning Commission of 1950); **Non-constitutional, non-statutory executive body** (Think Tank); Chairperson: **Prime Minister of India**; promotes **Cooperative & Competitive Federalism**.
   - **Finance Commission (Article 280):** Constitutional body appointed every 5 years by the President. **15th FC Chairman:** N.K. Singh ($41\\%$ vertical devolution); **16th Finance Commission Chairman:** **Dr. Arvind Panagariya** (for 2026–2031 period).
   - **NHRC (National Human Rights Commission):** Statutory body established on **12 October 1993** under the Protection of Human Rights Act, 1993. Term of Chairperson/Members (post-2019 Amendment): **3 years or 70 years of age**.
   - **Lokpal & Central Vigilance Commission (CVC):** **CVC** set up in **1964** on recommendations of the **Santhanam Committee** (statutory status in 2003; 4 years / 65 years). **Lokpal and Lokayuktas Act, 2013:** First Lokpal of India was **Justice Pinaki Chandra Ghose** (term: 5 years / 70 years).
   - **Civilian Awards Hierarchy (instituted 2 January 1954):**
     1. **Bharat Ratna** (Highest civilian award; first recipients in 1954: **C. Rajagopalachari, Dr. S. Radhakrishnan, Sir C.V. Raman**; in 2024 conferred on **Karpoori Thakur, L.K. Advani, P.V. Narasimha Rao, Charan Singh, and Dr. M.S. Swaminathan**).
     2. **Padma Vibhushan** $\\rightarrow$ 3. **Padma Bhushan** $\\rightarrow$ 4. **Padma Shri**.
   - **Gallantry Awards:**
     - *Wartime (Highest to Lowest):* **Param Vir Chakra (PVC)** (First recipient: **Major Somnath Sharma**, 1947; Flying Officer **Nirmaljit Singh Sekhon** of Ludhiana is the **only Indian Air Force officer** awarded PVC, 1971) $\\rightarrow$ **Maha Vir Chakra (MVC)** $\\rightarrow$ **Vir Chakra (VrC)**.
     - *Peacetime (Highest to Lowest):* **Ashoka Chakra** $\\rightarrow$ **Kirti Chakra** $\\rightarrow$ **Shaurya Chakra**.

---

### [Level A: Advanced — Punjab State Profile, Governance Schemes, GI Tags & Important Days]
1. **Punjab State Profile, GI Tags & Flagship Governance Initiatives:**
   | Category / Initiative | Official Details & High-Yield PSSSB/PPSC Clerk Facts |
   |---|---|
   | **23rd District of Punjab** | **Malerkotla** (carved out of **Sangrur** district on **14 May 2021** / officially notified June 2021). Total districts in Punjab = **23** across **5 Administrative Divisions** (Faridkot, Ferozepur, Jalandhar, Patiala, Rupnagar). |
   | **Punjab Legislature & Executive** | **Unicameral Vidhan Sabha: 117 Seats** (34 reserved for SCs); **Lok Sabha: 13 Seats**; **Rajya Sabha: 7 Seats**. Current (16th) Punjab Vidhan Sabha Chief Minister: **Bhagwant Singh Mann**; Speaker: **Kultar Singh Sandhwan**; Governor of Punjab & Administrator of UT Chandigarh: **Gulab Chand Kataria** (succeeded Banwarilal Purohit in 2024). |
   | **GI Tags Associated with Punjab** | **Phulkari** (Handicraft GI Tag shared by Punjab, Haryana & Rajasthan — Punjab's traditional floral embroidery using *Pat* floss silk on *Khaddar* cloth; types include *Chope, Suber, Til Patra, Neelak, Bagh*), **Basmati Rice** (Agricultural GI tag for Indo-Gangetic plains including all districts of Punjab), **Jalandhar Sports Goods** (proposed/recognized cluster). |
   | **Sadak Surakhya Force (SSF)** | Launched in **January–February 2024** in Punjab (first-of-its-kind dedicated road safety force in India) equipped with 144 high-tech patrol vehicles deployed every $30\\text{ km}$ on state/national highways; emergency helpline: **112**. |
   | **Aam Aadmi Clinics** | Launched on **15 August 2022** (75th Independence Day) providing **80+ essential medicines and 38–41 diagnostic tests free of cost** at primary health level across Punjab. |
   | **CM di Yogshala & Sikhiya Kranti / Schools of Eminence** | **Schools of Eminence (SoE):** 118 upgraded government senior secondary schools (first launched in Amritsar, 2023); **Farishtey Scheme:** Free cashless treatment for road accident victims in the Golden Hour. |

2. **High-Frequency National & International Days Calendar:**
   - **9 January:** Pravasi Bharatiya Divas (NRI Day — Mahatma Gandhi returned from South Africa on 9 Jan 1915).
   - **12 January:** National Youth Day (Swami Vivekananda's birth anniversary) | **25 January:** National Voters' Day (ECI founded 25 Jan 1950).
   - **28 February:** National Science Day (Discovery of **Raman Effect** by Sir C.V. Raman on 28 Feb 1928) | **8 March:** International Women's Day.
   - **22 March:** World Water Day | **7 April:** World Health Day | **22 April:** World Earth Day | **24 April:** National Panchayati Raj Day (73rd Amendment came into force on 24 April 1993).
   - **5 June:** World Environment Day | **21 June:** International Day of Yoga | **23 August:** National Space Day (Chandrayaan-3 landing).
   - **16 September:** World Ozone Day (Montreal Protocol, 1987) | **26 November:** Constitution Day (*Samvidhan Divas*) & National Milk Day (Dr. Verghese Kurien) | **10 December:** Human Rights Day (UDHR 1948).`,
            pa: `### [Level B: Basic — ਪ੍ਰਮੁੱਖ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਗਠਨ, ਮੁੱਖ ਦਫ਼ਤਰ ਅਤੇ ਵਿਸ਼ਵ ਸਮੂਹ]
1. **ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਗਠਨਾਂ ਅਤੇ ਮੁੱਖ ਦਫ਼ਤਰਾਂ ਦੀ ਮਾਸਟਰ ਸਾਰਣੀ:**
   | ਸੰਗਠਨ (Organization) | ਸਥਾਪਨਾ | ਮੁੱਖ ਦਫ਼ਤਰ (Headquarters) | ਪ੍ਰੀਖਿਆ ਲਈ ਮਹੱਤਵਪੂਰਨ ਤੱਥ |
   |---|---|---|---|
   | **ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਸੰਘ (UNO)** | 24 ਅਕਤੂਬਰ 1945 | **ਨਿਊਯਾਰਕ (ਅਮਰੀਕਾ)** | **193 ਮੈਂਬਰ ਦੇਸ਼** (193ਵਾਂ: ਦੱਖਣੀ ਸੂਡਾਨ, 2011); 6 ਦਫ਼ਤਰੀ ਭਾਸ਼ਾਵਾਂ; ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦਿਵਸ: **24 ਅਕਤੂਬਰ**। |
   | **ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ (ICJ)** | 1945 | **ਦ ਹੇਗ (ਨੀਦਰਲੈਂਡ)** | UNO ਦਾ ਇਕਲੌਤਾ ਮੁੱਖ ਅੰਗ ਜੋ ਨਿਊਯਾਰਕ ਤੋਂ ਬਾਹਰ ਹੈ; **15 ਜੱਜ** ਜਿਨ੍ਹਾਂ ਦਾ ਕਾਰਜਕਾਲ **9 ਸਾਲ** ਹੁੰਦਾ ਹੈ। |
   | **WHO / ILO / WTO / WIPO** | 1948 / 1919 / 1995 / 1967 | **ਜਨੇਵਾ (ਸਵਿਟਜ਼ਰਲੈਂਡ)** | ਵਿਸ਼ਵ ਸਿਹਤ ਦਿਵਸ: **7 ਅਪ੍ਰੈਲ**; **ILO** (1919, ਸਭ ਤੋਂ ਪੁਰਾਣੀ ਏਜੰਸੀ); **WTO** ਨੇ 1 ਜਨਵਰੀ 1995 ਨੂੰ GATT ਦੀ ਥਾਂ ਲਈ। |
   | **UNESCO ਅਤੇ OECD** | 1945 / 1961 | **ਪੈਰਿਸ (ਫਰਾਂਸ)** | ਭਾਰਤ ਵਿੱਚ **43 UNESCO ਵਿਸ਼ਵ ਵਿਰਾਸਤ ਸਥਾਨ** ਹਨ (43ਵਾਂ: ਅਸਾਮ ਦੇ **ਮੋਇਦਾਮ**, 2024)। |
   | **FAO ਅਤੇ WFP** | 1945 / 1961 | **ਰੋਮ (ਇਟਲੀ)** | ਖੁਰਾਕ ਅਤੇ ਖੇਤੀਬਾੜੀ ਸੰਗਠਨ; ਵਿਸ਼ਵ ਖੁਰਾਕ ਦਿਵਸ: **16 ਅਕਤੂਬਰ**। |
   | **IMF ਅਤੇ ਵਿਸ਼ਵ ਬੈਂਕ (IBRD)** | 1944 (ਬ੍ਰੈਟਨ ਵੁੱਡਜ਼) | **ਵਾਸ਼ਿੰਗਟਨ ਡੀ.ਸੀ. (ਅਮਰੀਕਾ)** | ਇਨ੍ਹਾਂ ਨੂੰ **'ਬ੍ਰੈਟਨ ਵੁੱਡਜ਼ ਜੁੜਵਾਂ' (Bretton Woods Twins)** ਕਿਹਾ ਜਾਂਦਾ ਹੈ; IMF ਦੀ ਮੁਦਰਾ **SDR (Paper Gold)** ਹੈ। |
   | **IAEA ਅਤੇ OPEC** | 1957 / 1960 | **ਵੀਆਨਾ (ਆਸਟਰੀਆ)** | ਅੰਤਰਰਾਸ਼ਟਰੀ ਪਰਮਾਣੂ ਊਰਜਾ ਏਜੰਸੀ ਅਤੇ ਪੈਟਰੋਲੀਅਮ ਨਿਰਯਾਤਕ ਦੇਸ਼ਾਂ ਦਾ ਸੰਗਠਨ। |
   | **ASEAN** | 1967 | **ਜਕਾਰਤਾ (ਇੰਡੋਨੇਸ਼ੀਆ)** | 10 ਦੱਖਣ-ਪੂਰਬੀ ਏਸ਼ੀਆਈ ਦੇਸ਼। |
   | **SAARC (ਸਾਰਕ)** | 8 ਦਸੰਬਰ 1985 (ਢਾਕਾ) | **ਕਾਠਮੰਡੂ (ਨੇਪਾਲ)** | **8 ਮੈਂਬਰ ਦੇਸ਼:** ਮਾਲਦੀਵ, ਭੂਟਾਨ, ਬੰਗਲਾਦੇਸ਼, ਸ਼੍ਰੀਲੰਕਾ, ਪਾਕਿਸਤਾਨ, ਅਫ਼ਗਾਨਿਸਤਾਨ, ਭਾਰਤ, ਨੇਪਾਲ (**MBBS PAIN**)। |
   | **BIMSTEC (ਬਿਮਸਟੈਕ)** | 1997 | **ਢਾਕਾ (ਬੰਗਲਾਦੇਸ਼)** | **7 ਮੈਂਬਰ ਦੇਸ਼:** ਬੰਗਲਾਦੇਸ਼, ਭੂਟਾਨ, ਭਾਰਤ, ਮਿਆਂਮਾਰ, ਨੇਪਾਲ, ਸ਼੍ਰੀਲੰਕਾ, ਥਾਈਲੈਂਡ। |
   | **BRICS ਅਤੇ NDB (ਨਿਊ ਡਿਵੈਲਪਮੈਂਟ ਬੈਂਕ)** | 2009 / 2014 | **ਸ਼ੰਘਾਈ (ਚੀਨ)** | ਬ੍ਰਾਜ਼ੀਲ, ਰੂਸ, ਭਾਰਤ, ਚੀਨ, ਦੱਖਣੀ ਅਫ਼ਰੀਕਾ + ਮਿਸਰ, ਇਥੋਪੀਆ, ਈਰਾਨ, UAE, ਇੰਡੋਨੇਸ਼ੀਆ। |
   | **SCO (ਸ਼ੰਘਾਈ ਸਹਿਯੋਗ ਸੰਗਠਨ)** | 2001 | **ਬੀਜਿੰਗ (ਚੀਨ)** | ਭਾਰਤ ਅਤੇ ਪਾਕਿਸਤਾਨ **2017 (ਅਸਤਾਨਾ ਸੰਮੇਲਨ)** ਵਿੱਚ ਪੂਰਨ ਮੈਂਬਰ ਬਣੇ; ਈਰਾਨ (2023) ਤੇ ਬੇਲਾਰੂਸ (2024)। |
   | **ਏਸ਼ੀਆਈ ਵਿਕਾਸ ਬੈਂਕ (ADB)** | 1966 | **ਮਨੀਲਾ (ਫਿਲੀਪੀਨਜ਼)** | 69 ਮੈਂਬਰ ਦੇਸ਼; ਮੁੱਖ ਦਫ਼ਤਰ ਮੰਡਾਲੁਯੋਂਗ (ਮਨੀਲਾ) ਵਿੱਚ ਹੈ। |

---

### [Level I: Intermediate — ਭਾਰਤੀ ਪੁਲਾੜ/ਰੱਖਿਆ ਪ੍ਰਾਪਤੀਆਂ, ਕਮਿਸ਼ਨ, ਯੋਜਨਾਵਾਂ ਅਤੇ ਰਾਸ਼ਟਰੀ ਪੁਰਸਕਾਰ]
1. **ISRO ਪੁਲਾੜ ਮਿਸ਼ਨ ਅਤੇ ਸਵਦੇਸ਼ੀ ਰੱਖਿਆ ਪ੍ਰਣਾਲੀਆਂ:**
   - **ਚੰਦਰਯਾਨ-3 (Chandrayaan-3):** **14 ਜੁਲਾਈ 2023** ਨੂੰ LVM3-M4 ਰਾਕੇਟ ਰਾਹੀਂ ਲਾਂਚ ਕੀਤਾ ਗਿਆ ਅਤੇ **23 ਅਗਸਤ 2023** ਨੂੰ ਚੰਦਰਮਾ ਦੇ ਦੱਖਣੀ ਧਰੁਵ ਤੇ ਸਫਲਤਾਪੂਰਵਕ ਉਤਰਿਆ (ਭਾਰਤ ਚੰਦਰਮਾ ਦੇ ਦੱਖਣੀ ਧਰੁਵ ਤੇ ਪਹੁੰਚਣ ਵਾਲਾ **ਦੁਨੀਆ ਦਾ ਪਹਿਲਾ ਦੇਸ਼** ਬਣਿਆ)। ਲੈਂਡਰ: **ਵਿਕਰਮ (Vikram)**, ਰੋਵਰ: **ਪ੍ਰਗਿਆਨ (Pragyan)**। ਲੈਂਡਿੰਗ ਸਥਾਨ ਦਾ ਨਾਂ **'ਸ਼ਿਵ ਸ਼ਕਤੀ ਪੁਆਇੰਟ' (Shiva Shakti Point)** ਰੱਖਿਆ ਗਿਆ ਅਤੇ **23 ਅਗਸਤ** ਨੂੰ **'ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ' (National Space Day)** ਵਜੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।
   - **ਆਦਿਤਿਆ-L1 (Aditya-L1):** **2 ਸਤੰਬਰ 2023** ਨੂੰ PSLV-C57 ਰਾਹੀਂ ਲਾਂਚ ਕੀਤਾ ਗਿਆ ਭਾਰਤ ਦਾ **ਪਹਿਲਾ ਸੂਰਜੀ ਮਿਸ਼ਨ**, ਜੋ ਧਰਤੀ ਤੋਂ $15$ ਲੱਖ ਕਿਲੋਮੀਟਰ ਦੂਰ **Lagrange Point 1 ($L_1$)** ਦੇ Halo Orbit ਵਿੱਚ ਸਥਾਪਿਤ ਹੈ।
   - **ਗਗਨਯਾਨ (Gaganyaan):** ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਮਾਨਵ ਪੁਲਾੜ ਮਿਸ਼ਨ; ਮਹਿਲਾ ਹਿਊਮਨੌਇਡ ਰੋਬੋਟ: **ਵਿਓਮਮਿੱਤਰਾ (Vyommitra)**।
   - **ਰੱਖਿਆ ਪ੍ਰਾਪਤੀਆਂ:** **INS ਵਿਕਰਾਂਤ** (ਕੋਚੀਨ ਸ਼ਿਪਯਾਰਡ ਦੁਆਰਾ ਬਣਾਇਆ ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਸਵਦੇਸ਼ੀ ਏਅਰਕ੍ਰਾਫਟ ਕੈਰੀਅਰ); **ਬ੍ਰਹਮੋਸ (BrahMos)** (ਭਾਰਤ-ਰੂਸ ਦੀ ਸੁਪਰਸੋਨਿਕ ਕਰੂਜ਼ ਮਿਜ਼ਾਈਲ); **ਅਗਨੀ-V** ($>5000\\text{ km}$ ਮਾਰਕ ਸਮਰੱਥਾ ਵਾਲੀ MIRV ਤਕਨੀਕ *ਮਿਸ਼ਨ ਦਿਵਿਆਸਤਰ* ਨਾਲ ਲੈਸ ਮਿਜ਼ਾਈਲ)।

2. **ਸੰਵਿਧਾਨਕ ਤੇ ਵਿਧਾਨਕ ਕਮਿਸ਼ਨ ਅਤੇ ਰਾਸ਼ਟਰੀ ਪੁਰਸਕਾਰ:**
   - **ਨੀਤੀ ਆਯੋਗ (NITI Aayog):** **1 ਜਨਵਰੀ 2015** ਨੂੰ ਯੋਜਨਾ ਕਮਿਸ਼ਨ ਦੀ ਥਾਂ ਤੇ ਬਣਿਆ (ਗੈਰ-ਸੰਵਿਧਾਨਕ ਥਿੰਕ ਟੈਂਕ); ਚੇਅਰਪਰਸਨ: **ਪ੍ਰਧਾਨ ਮੰਤਰੀ**।
   - **ਵਿੱਤ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 280):** 15ਵੇਂ ਵਿੱਤ ਕਮਿਸ਼ਨ ਦੇ ਚੇਅਰਮੈਨ **ਐਨ.ਕੇ. ਸਿੰਘ** ਸਨ; **16ਵੇਂ ਵਿੱਤ ਕਮਿਸ਼ਨ (2026–31) ਦੇ ਚੇਅਰਮੈਨ ਡਾ. ਅਰਵਿੰਦ ਪਨਗੜੀਆ** ਹਨ।
   - **NHRC (ਰਾਸ਼ਟਰੀ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਮਿਸ਼ਨ):** **12 ਅਕਤੂਬਰ 1993** ਨੂੰ ਸਥਾਪਿਤ (ਕਾਰਜਕਾਲ: 3 ਸਾਲ ਜਾਂ 70 ਸਾਲ ਦੀ ਉਮਰ)। **CVC (ਕੇਂਦਰੀ ਚੌਕਸੀ ਕਮਿਸ਼ਨ):** **1964** ਵਿੱਚ **ਸੰਥਾਨਮ ਕਮੇਟੀ** ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਬਣਿਆ। **ਭਾਰਤ ਦੇ ਪਹਿਲੇ ਲੋਕਪਾਲ:** ਜਸਟਿਸ **ਪਿਨਾਕੀ ਚੰਦਰ ਘੋਸ਼**।
   - **ਨਾਗਰਿਕ ਅਤੇ ਬਹਾਦਰੀ ਪੁਰਸਕਾਰ:** ਸਭ ਤੋਂ ਉੱਚਾ ਨਾਗਰਿਕ ਪੁਰਸਕਾਰ **ਭਾਰਤ ਰਤਨ** (1954; 2024 ਵਿੱਚ **ਕਰਪੂਰੀ ਠਾਕੁਰ, ਐਲ.ਕੇ. ਅਡਵਾਨੀ, ਪੀ.ਵੀ. ਨਰਸਿਮਹਾ ਰਾਓ, ਚੌਧਰੀ ਚਰਨ ਸਿੰਘ ਅਤੇ ਡਾ. ਐਮ.ਐਸ. ਸਵਾਮੀਨਾਥਨ** ਨੂੰ ਦਿੱਤਾ ਗਿਆ)। ਜੰਗੀ ਬਹਾਦਰੀ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਪੁਰਸਕਾਰ: **ਪਰਮਵੀਰ ਚੱਕਰ** (ਲੁਧਿਆਣਾ ਦੇ **ਫਲਾਇੰਗ ਅਫ਼ਸਰ ਨਿਰਮਲਜੀਤ ਸਿੰਘ ਸੇਖੋਂ** 1971 ਦੀ ਜੰਗ ਵਿੱਚ ਪਰਮਵੀਰ ਚੱਕਰ ਜਿੱਤਣ ਵਾਲੇ ਭਾਰਤੀ ਹਵਾਈ ਸੈਨਾ ਦੇ ਇਕਲੌਤੇ ਅਧਿਕਾਰੀ ਹਨ)।

---

### [Level A: Advanced — ਪੰਜਾਬ ਪ੍ਰਸ਼ਾਸਨ, GI ਟੈਗ, ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਅਤੇ ਮਹੱਤਵਪੂਰਨ ਦਿਵਸ]
1. **ਪੰਜਾਬ ਰਾਜ ਪ੍ਰੋਫਾਈਲ, GI ਟੈਗ ਅਤੇ ਪ੍ਰਮੁੱਖ ਯੋਜਨਾਵਾਂ:**
   - **ਪੰਜਾਬ ਦਾ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ:** **ਮਾਲੇਰਕੋਟਲਾ** (**14 ਮਈ 2021** ਨੂੰ **ਸੰਗਰੂਰ** ਜ਼ਿਲ੍ਹੇ ਵਿੱਚੋਂ ਵੱਖ ਕਰਕੇ ਬਣਾਇਆ ਗਿਆ)। ਪੰਜਾਬ ਵਿੱਚ ਕੁੱਲ **5 ਪ੍ਰਸ਼ਾਸਕੀ ਡਿਵੀਜ਼ਨਾਂ** ਅਤੇ **23 ਜ਼ਿਲ੍ਹੇ** ਹਨ।
   - **ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਅਤੇ ਸੰਸਦ:** ਵਿਧਾਨ ਸਭਾ ਦੀਆਂ **117 ਸੀਟਾਂ** (34 SC ਰਾਖਵੀਆਂ), ਲੋਕ ਸਭਾ ਦੀਆਂ **13 ਸੀਟਾਂ**, ਰਾਜ ਸਭਾ ਦੀਆਂ **7 ਸੀਟਾਂ**। ਮੁੱਖ ਮੰਤਰੀ: **ਭਗਵੰਤ ਸਿੰਘ ਮਾਨ**; ਸਪੀਕਰ: **ਕੁਲਤਾਰ ਸਿੰਘ ਸੰਧਵਾਂ**; ਪੰਜਾਬ ਦੇ ਰਾਜਪਾਲ: **ਗੁਲਾਬ ਚੰਦ ਕਟਾਰੀਆ**।
   - **ਪੰਜਾਬ ਦੇ GI ਟੈਗ:** **ਫੁਲਕਾਰੀ (Phulkari)** (ਪੰਜਾਬ, ਹਰਿਆਣਾ ਤੇ ਰਾਜਸਥਾਨ ਨੂੰ ਸਾਂਝਾ ਦਸਤਕਾਰੀ GI ਟੈਗ — ਖੱਦਰ ਉੱਤੇ ਪੱਟ ਦੇ ਰੇਸ਼ਮੀ ਧਾਗੇ ਨਾਲ ਕਢਾਈ; ਕਿਸਮਾਂ: *ਚੋਪ, ਸੁੱਭਰ, ਤਿਲ ਪੱਤਰਾ, ਨੀਲਕ, ਬਾਗ਼*) ਅਤੇ **ਬਾਸਮਤੀ ਚੌਲ (Basmati Rice)**।
   - **ਪੰਜਾਬ ਸਰਕਾਰ ਦੀਆਂ ਪ੍ਰਮੁੱਖ ਪਹਿਲਕਦਮੀਆਂ:** **ਸੜਕ ਸੁਰੱਖਿਆ ਫੋਰਸ (SSF)** (2024 ਵਿੱਚ ਸ਼ੁਰੂ ਕੀਤੀ ਦੇਸ਼ ਦੀ ਪਹਿਲੀ ਵਿਸ਼ੇਸ਼ ਸੜਕ ਸੁਰੱਖਿਆ ਫੋਰਸ, ਹੈਲਪਲਾਈਨ **112**); **ਆਮ ਆਦਮੀ ਕਲੀਨਿਕ** (15 ਅਗਸਤ 2022 ਨੂੰ ਸ਼ੁਰੂ — 80+ ਮੁਫ਼ਤ ਦਵਾਈਆਂ ਅਤੇ 38+ ਮੁਫ਼ਤ ਟੈਸਟ); **ਸਕੂਲ ਆਫ਼ ਐਮੀਨੈਂਸ (Schools of Eminence)** (118 ਸਕੂਲ); **ਫ਼ਰਿਸ਼ਤੇ ਸਕੀਮ** (ਸੜਕ ਹਾਦਸਾ ਪੀੜਤਾਂ ਦਾ ਮੁਫ਼ਤ ਇਲਾਜ)।

2. **ਪ੍ਰੀਖਿਆ ਲਈ ਅਤਿ-ਮਹੱਤਵਪੂਰਨ ਰਾਸ਼ਟਰੀ ਅਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਦਿਵਸ:**
   - **9 ਜਨਵਰੀ:** ਪ੍ਰਵਾਸੀ ਭਾਰਤੀ ਦਿਵਸ | **12 ਜਨਵਰੀ:** ਰਾਸ਼ਟਰੀ ਯੁਵਾ ਦਿਵਸ | **25 ਜਨਵਰੀ:** ਰਾਸ਼ਟਰੀ ਵੋਟਰ ਦਿਵਸ।
   - **28 ਫਰਵਰੀ:** ਰਾਸ਼ਟਰੀ ਵਿਗਿਆਨ ਦਿਵਸ (ਰਮਨ ਪ੍ਰਭਾਵ ਦੀ ਖੋਜ) | **8 ਮਾਰਚ:** ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਹਿਲਾ ਦਿਵਸ | **22 ਮਾਰਚ:** ਵਿਸ਼ਵ ਜਲ ਦਿਵਸ।
   - **7 ਅਪ੍ਰੈਲ:** ਵਿਸ਼ਵ ਸਿਹਤ ਦਿਵਸ | **22 ਅਪ੍ਰੈਲ:** ਵਿਸ਼ਵ ਧਰਤੀ ਦਿਵਸ | **24 ਅਪ੍ਰੈਲ:** ਰਾਸ਼ਟਰੀ ਪੰਚਾਇਤੀ ਰਾਜ ਦਿਵਸ।
   - **5 ਜੂਨ:** ਵਿਸ਼ਵ ਵਾਤਾਵਰਣ ਦਿਵਸ | **21 ਜੂਨ:** ਅੰਤਰਰਾਸ਼ਟਰੀ ਯੋਗ ਦਿਵਸ | **23 ਅਗਸਤ:** ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ।
   - **16 ਸਤੰਬਰ:** ਵਿਸ਼ਵ ਓਜ਼ੋਨ ਦਿਵਸ | **26 ਨਵੰਬਰ:** ਸੰਵਿਧਾਨ ਦਿਵਸ | **10 ਦਸੰਬਰ:** ਵਿਸ਼ਵ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਦਿਵਸ।`,
            hi: `### [Level B: Basic — प्रमुख अंतर्राष्ट्रीय संगठन, मुख्यालय एवं वैश्विक समूह]
1. **अंतर्राष्ट्रीय संगठनों एवं मुख्यालयों की मास्टर तालिका:**
   | संगठन (Organization) | स्थापना | मुख्यालय (Headquarters) | परीक्षा हेतु महत्वपूर्ण तथ्य |
   |---|---|---|---|
   | **संयुक्त राष्ट्र संघ (UNO)** | 24 अक्टूबर 1945 | **न्यूयॉर्क (अमेरिका)** | **193 सदस्य देश** (193वाँ: दक्षिणी सूडान, 2011); 6 आधिकारिक भाषाएँ; संयुक्त राष्ट्र दिवस: **24 अक्टूबर**। |
   | **अंतर्राष्ट्रीय न्यायालय (ICJ)** | 1945 | **द हेग (नीदरलैंड)** | UNO का एकमात्र प्रमुख अंग जो न्यूयॉर्क से बाहर है; **15 न्यायाधीश** जिनका कार्यकाल **9 वर्ष** होता है। |
   | **WHO / ILO / WTO / WIPO** | 1948 / 1919 / 1995 / 1967 | **जिनेवा (स्विट्ज़रलैंड)** | विश्व स्वास्थ्य दिवस: **7 अप्रैल**; **ILO** (1919, सबसे पुरानी एजेंसी); **WTO** ने 1 जनवरी 1995 को GATT का स्थान लिया। |
   | **UNESCO एवं OECD** | 1945 / 1961 | **पेरिस (फ्रांस)** | भारत में **43 UNESCO विश्व धरोहर स्थल** हैं (43वाँ: असम के **मोइदाम**, 2024)। |
   | **FAO एवं WFP** | 1945 / 1961 | **रोम (इटली)** | खाद्य एवं कृषि संगठन; विश्व खाद्य दिवस: **16 अक्टूबर**। |
   | **IMF एवं विश्व बैंक (IBRD)** | 1944 (ब्रेटन वुड्स) | **वाशिंगटन डी.सी. (अमेरिका)** | इन्हें **'ब्रेटन वुड्स जुड़वाँ' (Bretton Woods Twins)** कहा जाता है; IMF की आरक्षित मुद्रा **SDR (Paper Gold)** है। |
   | **IAEA एवं OPEC** | 1957 / 1960 | **वियना (ऑस्ट्रिया)** | अंतर्राष्ट्रीय परमाणु ऊर्जा एजेंसी तथा पेट्रोलियम निर्यातक देशों का संगठन। |
   | **ASEAN** | 1967 | **जकार्ता (इंडोनेशिया)** | 10 दक्षिण-पूर्वी एशियाई राष्ट्र। |
   | **SAARC (दक्षेश)** | 8 दिसंबर 1985 (ढाका) | **काठमांडू (नेपाल)** | **8 सदस्य देश:** मालदीव, भूटान, बांग्लादेश, श्रीलंका, पाकिस्तान, अफ़गानिस्तान, भारत, नेपाल (**MBBS PAIN**)। |
   | **BIMSTEC (बिमस्टेक)** | 1997 | **ढाका (बांग्लादेश)** | **7 सदस्य देश:** बांग्लादेश, भूटान, भारत, म्यांमार, नेपाल, श्रीलंका, थाईलैंड। |
   | **BRICS एवं NDB (न्यू डेवलपमेंट बैंक)** | 2009 / 2014 | **शंघाई (चीन)** | ब्राज़ील, रूस, भारत, चीन, दक्षिण अफ्रीका + मिस्र, इथियोपिया, ईरान, UAE, इंडोनेशिया। |
   | **SCO (शंघाई सहयोग संगठन)** | 2001 | **बीजिंग (चीन)** | भारत और पाकिस्तान **2017 (अस्ताना सम्मेलन)** में पूर्ण सदस्य बने; ईरान (2023) व बेलारूस (2024)। |
   | **एशियाई विकास बैंक (ADB)** | 1966 | **मनीला (फिलीपींस)** | 69 सदस्य देश; मुख्यालय मंडालुयोंग (मनीला) में है। |

---

### [Level I: Intermediate — भारतीय अंतरिक्ष/रक्षा उपलब्धियाँ, आयोग, योजनाएँ एवं राष्ट्रीय पुरस्कार]
1. **ISRO अंतरिक्ष मिशन एवं स्वदेशी रक्षा प्रणालियाँ:**
   - **चंद्रयान-3 (Chandrayaan-3):** **14 जुलाई 2023** को LVM3-M4 रॉकेट से प्रक्षेपित किया गया और **23 अगस्त 2023** को चंद्रमा के दक्षिणी ध्रुव पर सफलतापूर्वक उतरा (भारत चंद्रमा के दक्षिणी ध्रुव पर उतरने वाला **विश्व का पहला देश** बना)। लैंडर: **विक्रम (Vikram)**, रोवर: **प्रज्ञान (Pragyan)**। लैंडिंग स्थल का नाम **'शिव शक्ति पॉइंट' (Shiva Shakti Point)** रखा गया तथा **23 अगस्त** को **'राष्ट्रीय अंतरिक्ष दिवस' (National Space Day)** घोषित किया गया।
   - **आदित्य-L1 (Aditya-L1):** **2 सितंबर 2023** को PSLV-C57 से प्रक्षेपित भारत का **पहला सौर मिशन**, जो पृथ्वी से $15$ लाख किमी दूर **Lagrange Point 1 ($L_1$)** के Halo Orbit में स्थापित है।
   - **गगनयान (Gaganyaan):** भारत का पहला मानव अंतरिक्ष मिशन; महिला ह्यूमनॉइड रोबोट: **व्योममित्र (Vyommitra)**।
   - **रक्षा उपलब्धियाँ:** **INS विक्रांत** (कोचीन शिपयार्ड द्वारा निर्मित भारत का पहला स्वदेशी विमानवाहक पोत); **ब्रह्मोस (BrahMos)** (भारत-रूस की सुपरसोनिक क्रूज़ मिसाइल); **अग्नि-V** ($>5000\\text{ km}$ मारक क्षमता वाली MIRV तकनीक *मिशन दिव्यास्त्र* से लैस मिसाइल)।

2. **संवैधानिक व वैधानिक आयोग एवं राष्ट्रीय पुरस्कार:**
   - **नीति आयोग (NITI Aayog):** **1 जनवरी 2015** को योजना आयोग के स्थान पर गठित (गैर-संवैधानिक थिंक टैंक); पदेन अध्यक्ष: **प्रधानमंत्री**।
   - **वित्त आयोग (अनुच्छेद 280):** 15वें वित्त आयोग के अध्यक्ष **एन.के. सिंह** थे; **16वें वित्त आयोग (2026–31) के अध्यक्ष डॉ. अरविंद पनगढ़िया** हैं।
   - **NHRC (राष्ट्रीय मानवाधिकार आयोग):** **12 अक्टूबर 1993** को स्थापित (कार्यकाल: 3 वर्ष या 70 वर्ष की आयु)। **CVC (केंद्रीय सतर्कता आयोग):** **1964** में **संथानम समिति** की सिफारिश पर गठित। **भारत के प्रथम लोकपाल:** न्यायमूर्ति **पिनाकी चंद्र घोष**।
   - **नागरिक एवं वीरता पुरस्कार:** सर्वोच्च नागरिक सम्मान **भारत रत्न** (1954; 2024 में **कर्पूरी ठाकुर, एल.के. आडवाणी, पी.वी. नरसिम्हा राव, चौधरी चरण सिंह और डॉ. एम.एस. स्वामीनाथन** को प्रदान किया गया)। युद्धकालीन सर्वोच्च वीरता पुरस्कार: **परमवीर चक्र** (लुधियाना के **फ्लाइंग ऑफिसर निर्मलजीत सिंह सेखों** 1971 के युद्ध में परमवीर चक्र पाने वाले भारतीय वायुसेना के एकमात्र अधिकारी हैं)।

---

### [Level A: Advanced — पंजाब प्रशासन, GI टैग, सरकारी योजनाएँ एवं महत्वपूर्ण दिवस]
1. **पंजाब राज्य प्रोफ़ाइल, GI टैग एवं प्रमुख योजनाएँ:**
   - **पंजाब का 23वाँ ज़िला:** **मालेरकोटला** (**14 मई 2021** को **संगरूर** ज़िले से अलग करके बनाया गया)। पंजाब में कुल **5 प्रशासनिक मंडल (Divisions)** और **23 ज़िले** हैं।
   - **पंजाब विधान सभा एवं संसद:** विधान सभा की **117 सीटें** (34 SC आरक्षित), लोक सभा की **13 सीटें**, राज्य सभा की **7 सीटें**। मुख्यमंत्री: **भगवंत सिंह मान**; अध्यक्ष (Speaker): **कुलतार सिंह संधवां**; पंजाब के राज्यपाल: **गुलाब चंद कटारिया**।
   - **पंजाब के GI टैग:** **फुलकारी (Phulkari)** (पंजाब, हरियाणा व राजस्थान को साझा हस्तशिल्प GI टैग — खद्दर पर पट्ट के रेशमी धागे से कढ़ाई; प्रकार: *चोप, सुभर, तिल पत्रा, नीलक, बाग़*) तथा **बासमती चावल (Basmati Rice)**।
   - **पंजाब सरकार की प्रमुख पहलें:** **सड़क सुरक्षा फोर्स (SSF)** (2024 में शुरू की गई देश की पहली समर्पित सड़क सुरक्षा फोर्स, हेल्पलाइन **112**); **आम आदमी क्लीनिक** (15 अगस्त 2022 को शुरू — 80+ निःशुल्क दवाइयाँ और 38+ मुफ़्त टेस्ट); **स्कूल ऑफ़ एमिनेंस (Schools of Eminence)** (118 स्कूल); **फ़रिश्ते स्कीम** (सड़क दुर्घटना पीड़ितों का निःशुल्क उपचार)।

2. **परीक्षा हेतु अति-महत्वपूर्ण राष्ट्रीय एवं अंतर्राष्ट्रीय दिवस:**
   - **9 जनवरी:** प्रवासी भारतीय दिवस | **12 जनवरी:** राष्ट्रीय युवा दिवस | **25 जनवरी:** राष्ट्रीय मतदाता दिवस।
   - **28 फरवरी:** राष्ट्रीय विज्ञान दिवस (रमन प्रभाव की खोज) | **8 मार्च:** अंतर्राष्ट्रीय महिला दिवस | **22 मार्च:** विश्व जल दिवस।
   - **7 अप्रैल:** विश्व स्वास्थ्य दिवस | **22 अप्रैल:** विश्व पृथ्वी दिवस | **24 अप्रैल:** राष्ट्रीय पंचायती राज दिवस।
   - **5 जून:** विश्व पर्यावरण दिवस | **21 जून:** अंतर्राष्ट्रीय योग दिवस | **23 अगस्त:** राष्ट्रीय अंतरिक्ष दिवस।
   - **16 सितंबर:** विश्व ओज़ोन दिवस | **26 नवंबर:** संविधान दिवस | **10 दिसंबर:** विश्व मानवाधिकार दिवस।`
        },
        keyNotes: {
            en: [
                'Geneva (Switzerland) hosts WHO, ILO, WTO, WIPO, UNCTAD, and WMO; Vienna (Austria) hosts IAEA and OPEC; Rome (Italy) hosts FAO and WFP; The Hague (Netherlands) hosts the ICJ (15 judges, 9-year term).',
                'SAARC (founded 8 Dec 1985 in Dhaka; HQ in Kathmandu, Nepal) has 8 members (MBBS PAIN: Maldives, Bhutan, Bangladesh, Sri Lanka, Pakistan, Afghanistan, India, Nepal), whereas BIMSTEC (HQ in Dhaka) has 7 members including Myanmar and Thailand.',
                'Chandrayaan-3 soft-landed on the Lunar South Pole on 23 August 2023 (Lander: Vikram, Rover: Pragyan); the landing site is named Shiva Shakti Point and 23 August is celebrated as National Space Day.',
                'Aditya-L1 (launched 2 Sept 2023 via PSLV-C57) is India’s first solar observatory placed in a Halo Orbit around Sun-Earth Lagrange Point 1 (L1) at 1.5 million km from Earth.',
                'NITI Aayog (1 Jan 2015) is an extra-constitutional executive think tank chaired by the Prime Minister, whereas the Finance Commission (Article 280; 16th FC Chairman Dr. Arvind Panagariya) is a constitutional body.',
                'Malerkotla became the 23rd district of Punjab in May 2021 (carved out of Sangrur); Phulkari holds the Handicraft GI Tag for Punjab, and Punjab launched India’s first dedicated Sadak Surakhya Force (SSF) in 2024.'
            ],
            pa: [
                'ਜਨੇਵਾ (ਸਵਿਟਜ਼ਰਲੈਂਡ) ਵਿੱਚ WHO, ILO, WTO, WIPO ਦੇ ਮੁੱਖ ਦਫ਼ਤਰ ਹਨ; ਵੀਆਨਾ (ਆਸਟਰੀਆ) ਵਿੱਚ IAEA ਅਤੇ OPEC; ਰੋਮ (ਇਟਲੀ) ਵਿੱਚ FAO ਅਤੇ WFP; ਦ ਹੇਗ (ਨੀਦਰਲੈਂਡ) ਵਿੱਚ ICJ (15 ਜੱਜ, 9 ਸਾਲ ਕਾਰਜਕਾਲ) ਸਥਿਤ ਹੈ।',
                'SAARC (ਸਥਾਪਨਾ 8 ਦਸੰਬਰ 1985 ਢਾਕਾ ਵਿਖੇ; ਮੁੱਖ ਦਫ਼ਤਰ ਕਾਠਮੰਡੂ, ਨੇਪਾਲ) ਦੇ 8 ਮੈਂਬਰ (MBBS PAIN) ਹਨ, ਜਦਕਿ BIMSTEC (ਮੁੱਖ ਦਫ਼ਤਰ ਢਾਕਾ) ਦੇ 7 ਮੈਂਬਰ ਹਨ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਮਿਆਂਮਾਰ ਅਤੇ ਥਾਈਲੈਂਡ ਸ਼ਾਮਲ ਹਨ।',
                'ਚੰਦਰਯਾਨ-3 ਨੇ 23 ਅਗਸਤ 2023 ਨੂੰ ਚੰਦਰਮਾ ਦੇ ਦੱਖਣੀ ਧਰੁਵ ਤੇ ਸਫਲ ਲੈਂਡਿੰਗ ਕੀਤੀ (ਲੈਂਡਰ: ਵਿਕਰਮ, ਰੋਵਰ: ਪ੍ਰਗਿਆਨ); ਲੈਂਡਿੰਗ ਸਥਾਨ ਨੂੰ ਸ਼ਿਵ ਸ਼ਕਤੀ ਪੁਆਇੰਟ ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਅਤੇ 23 ਅਗਸਤ ਨੂੰ ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
                'ਆਦਿਤਿਆ-L1 (2 ਸਤੰਬਰ 2023, PSLV-C57) ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਸੂਰਜੀ ਮਿਸ਼ਨ ਹੈ ਜੋ ਧਰਤੀ ਤੋਂ 15 ਲੱਖ ਕਿਲੋਮੀਟਰ ਦੂਰ Lagrange Point 1 (L1) ਦੇ Halo Orbit ਵਿੱਚ ਸਥਾਪਿਤ ਹੈ।',
                'ਨੀਤੀ ਆਯੋਗ (1 ਜਨਵਰੀ 2015) ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਦੀ ਪ੍ਰਧਾਨਗੀ ਹੇਠ ਇੱਕ ਗੈਰ-ਸੰਵਿਧਾਨਕ ਥਿੰਕ ਟੈਂਕ ਹੈ, ਜਦਕਿ ਵਿੱਤ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 280; 16ਵੇਂ ਚੇਅਰਮੈਨ ਡਾ. ਅਰਵਿੰਦ ਪਨਗੜੀਆ) ਇੱਕ ਸੰਵਿਧਾਨਕ ਸੰਸਥਾ ਹੈ।',
                'ਮਾਲੇਰਕੋਟਲਾ ਮਈ 2021 ਵਿੱਚ ਸੰਗਰੂਰ ਜ਼ਿਲ੍ਹੇ ਤੋਂ ਵੱਖ ਹੋ ਕੇ ਪੰਜਾਬ ਦਾ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਬਣਿਆ; ਫੁਲਕਾਰੀ ਨੂੰ ਪੰਜਾਬ ਦਾ ਦਸਤਕਾਰੀ GI ਟੈਗ ਪ੍ਰਾਪਤ ਹੈ ਅਤੇ ਪੰਜਾਬ ਨੇ 2024 ਵਿੱਚ ਦੇਸ਼ ਦੀ ਪਹਿਲੀ ਸੜਕ ਸੁਰੱਖਿਆ ਫੋਰਸ (SSF) ਸ਼ੁਰੂ ਕੀਤੀ।'
            ],
            hi: [
                'जिनेवा (स्विट्ज़रलैंड) में WHO, ILO, WTO, WIPO के मुख्यालय हैं; वियना (ऑस्ट्रिया) में IAEA और OPEC; रोम (इटली) में FAO और WFP; द हेग (नीदरलैंड) में ICJ (15 न्यायाधीश, 9 वर्ष कार्यकाल) स्थित है।',
                'SAARC (स्थापना 8 दिसंबर 1985 ढाका में; मुख्यालय काठमांडू, नेपाल) के 8 सदस्य (MBBS PAIN) हैं, जबकि BIMSTEC (मुख्यालय ढाका) के 7 सदस्य हैं जिनमें म्यांमार और थाईलैंड शामिल हैं।',
                'चंद्रयान-3 ने 23 अगस्त 2023 को चंद्रमा के दक्षिणी ध्रुव पर सफल लैंडिंग की (लैंडर: विक्रम, रोवर: प्रज्ञान); लैंडिंग स्थल को शिव शक्ति पॉइंट कहा जाता है और 23 अगस्त को राष्ट्रीय अंतरिक्ष दिवस मनाया जाता है।',
                'आदित्य-L1 (2 सितंबर 2023, PSLV-C57) भारत का पहला सौर मिशन है जो पृथ्वी से 15 लाख किमी दूर Lagrange Point 1 (L1) के Halo Orbit में स्थापित है।',
                'नीति आयोग (1 जनवरी 2015) प्रधानमंत्री की अध्यक्षता वाला एक गैर-संवैधानिक थिंक टैंक है, जबकि वित्त आयोग (अनुच्छेद 280; 16वें अध्यक्ष डॉ. अरविंद पनगढ़िया) एक संवैधानिक निकाय है।',
                'मालेरकोटला मई 2021 में संगरूर ज़िले से अलग होकर पंजाब का 23वाँ ज़िला बना; फुलकारी को पंजाब का हस्तशिल्प GI टैग प्राप्त है और पंजाब ने 2024 में देश की पहली सड़क सुरक्षा फोर्स (SSF) शुरू की।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'HQ Shortcut: Words starting with "World" & ending with "Organization" (WHO, WTO, WIPO, WMO) + ILO -> Geneva, Switzerland.',
                'SAARC vs BIMSTEC Trap: SAARC was founded in Dhaka (1985) but its HQ is in Kathmandu; BIMSTEC HQ is in Dhaka. Myanmar is in BIMSTEC, NOT in SAARC.',
                'Space Landmarks: Chandrayaan-1 (Jawahar Point) -> Chandrayaan-2 (Tiranga Point) -> Chandrayaan-3 (Shiva Shakti Point, 23 Aug 2023 = National Space Day).',
                'Commissions Quick Check: Finance Commission = Art 280 (Constitutional); Election Commission = Art 324; CVC (1964, Santhanam Committee) & NHRC (1993) & Lokpal (2013) = Statutory; NITI Aayog (2015) = Executive Resolution.',
                'Punjab Quick Numbers: 23 Districts (23rd Malerkotla from Sangrur) • 5 Divisions • 117 Vidhan Sabha Seats • 13 Lok Sabha • 7 Rajya Sabha.'
            ],
            pa: [
                'ਮੁੱਖ ਦਫ਼ਤਰ ਟ੍ਰਿਕ: WHO, WTO, WIPO, WMO ਅਤੇ ILO — ਇਨ੍ਹਾਂ ਸਾਰਿਆਂ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਜਨੇਵਾ (ਸਵਿਟਜ਼ਰਲੈਂਡ) ਵਿੱਚ ਹੈ।',
                'SAARC ਬਨਾਮ BIMSTEC: SAARC ਦੀ ਸਥਾਪਨਾ ਢਾਕਾ (1985) ਵਿੱਚ ਹੋਈ ਪਰ ਮੁੱਖ ਦਫ਼ਤਰ ਕਾਠਮੰਡੂ (ਨੇਪਾਲ) ਵਿੱਚ ਹੈ; BIMSTEC ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਢਾਕਾ ਵਿੱਚ ਹੈ। ਮਿਆਂਮਾਰ BIMSTEC ਵਿੱਚ ਹੈ, SAARC ਵਿੱਚ ਨਹੀਂ।',
                'ਚੰਦਰਯਾਨ ਸਥਾਨ: ਚੰਦਰਯਾਨ-1 (ਜਵਾਹਰ ਪੁਆਇੰਟ) -> ਚੰਦਰਯਾਨ-2 (ਤਿਰੰਗਾ ਪੁਆਇੰਟ) -> ਚੰਦਰਯਾਨ-3 (ਸ਼ਿਵ ਸ਼ਕਤੀ ਪੁਆਇੰਟ, 23 ਅਗਸਤ 2023 = ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ)।',
                'ਕਮਿਸ਼ਨ: ਵਿੱਤ ਕਮਿਸ਼ਨ = ਅਨੁਛੇਦ 280 (ਸੰਵਿਧਾਨਕ); ਚੋਣ ਕਮਿਸ਼ਨ = ਅਨੁਛੇਦ 324; CVC (1964, ਸੰਥਾਨਮ ਕਮੇਟੀ), NHRC (1993) ਤੇ ਲੋਕਪਾਲ (2013) = ਵਿਧਾਨਕ (Statutory); ਨੀਤੀ ਆਯੋਗ (2015) = ਗੈਰ-ਸੰਵਿਧਾਨਕ।',
                'ਪੰਜਾਬ ਅੰਕੜੇ: 23 ਜ਼ਿਲ੍ਹੇ (23ਵਾਂ ਮਾਲੇਰਕੋਟਲਾ, ਸੰਗਰੂਰ ਵਿੱਚੋਂ) • 5 ਡਿਵੀਜ਼ਨਾਂ • 117 ਵਿਧਾਨ ਸਭਾ ਸੀਟਾਂ • 13 ਲੋਕ ਸਭਾ • 7 ਰਾਜ ਸਭਾ।'
            ],
            hi: [
                'मुख्यालय ट्रिक: WHO, WTO, WIPO, WMO तथा ILO — इन सभी का मुख्यालय जिनेवा (स्विट्ज़रलैंड) में है।',
                'SAARC बनाम BIMSTEC: SAARC की स्थापना ढाका (1985) में हुई किंतु मुख्यालय काठमांडू (नेपाल) में है; BIMSTEC का मुख्यालय ढाका में है। म्यांमार BIMSTEC में है, SAARC में नहीं।',
                'चंद्रयान स्थल: चंद्रयान-1 (जवाहर पॉइंट) -> चंद्रयान-2 (तिरंगा पॉइंट) -> चंद्रयान-3 (शिव शक्ति पॉइंट, 23 अगस्त 2023 = राष्ट्रीय अंतरिक्ष दिवस)।',
                'आयोग: वित्त आयोग = अनुच्छेद 280 (संवैधानिक); चुनाव आयोग = अनुच्छेद 324; CVC (1964, संथानम समिति), NHRC (1993) व लोकपाल (2013) = वैधानिक (Statutory); नीति आयोग (2015) = गैर-संवैधानिक।',
                'पंजाब आँकड़े: 23 ज़िले (23वाँ मालेरकोटला, संगरूर से) • 5 मंडल • 117 विधान सभा सीटें • 13 लोक सभा • 7 राज्य सभा।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Marking Myanmar or China as a member of SAARC or marking Dhaka as the SAARC headquarters. Correction: SAARC was founded in Dhaka in 1985, but its permanent Secretariat is in Kathmandu, Nepal, and its 8 members (MBBS PAIN) do NOT include Myanmar or China.',
                'Misconception: Thinking NITI Aayog is a Constitutional or Statutory body created by an Act of Parliament. Correction: Neither the erstwhile Planning Commission nor NITI Aayog (formed 1 Jan 2015) is constitutional or statutory; NITI Aayog was created by an Executive Resolution of the Union Cabinet.',
                'Misconception: Confusing the landing date of Chandrayaan-3 (23 August 2023) with its launch date (14 July 2023) for National Space Day. Correction: National Space Day is celebrated every year on 23 August to commemorate the successful soft landing of Vikram Lander at Shiva Shakti Point.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਮਿਆਂਮਾਰ ਜਾਂ ਚੀਨ ਨੂੰ SAARC ਦਾ ਮੈਂਬਰ ਮੰਨਣਾ ਜਾਂ ਢਾਕਾ ਨੂੰ SAARC ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਲਗਾਉਣਾ। ਸੁਧਾਰ: SAARC ਦੀ ਸਥਾਪਨਾ 1985 ਵਿੱਚ ਢਾਕਾ ਵਿਖੇ ਹੋਈ ਸੀ ਪਰ ਇਸ ਦਾ ਸਥਾਈ ਮੁੱਖ ਦਫ਼ਤਰ ਕਾਠਮੰਡੂ (ਨੇਪਾਲ) ਵਿੱਚ ਹੈ ਅਤੇ ਇਸ ਦੇ 8 ਮੈਂਬਰਾਂ (MBBS PAIN) ਵਿੱਚ ਮਿਆਂਮਾਰ ਜਾਂ ਚੀਨ ਸ਼ਾਮਲ ਨਹੀਂ ਹਨ।',
                'ਭੁਲੇਖਾ: ਨੀਤੀ ਆਯੋਗ ਨੂੰ ਸੰਵਿਧਾਨਕ ਜਾਂ ਸੰਸਦ ਦੇ ਕਾਨੂੰਨ ਰਾਹੀਂ ਬਣੀ ਵਿਧਾਨਕ ਸੰਸਥਾ ਸਮਝਣਾ। ਸੁਧਾਰ: ਨੀਤੀ ਆਯੋਗ (1 ਜਨਵਰੀ 2015) ਨਾ ਸੰਵਿਧਾਨਕ ਹੈ ਅਤੇ ਨਾ ਹੀ ਵਿਧਾਨਕ; ਇਹ ਕੇਂਦਰੀ ਮੰਤਰੀ ਮੰਡਲ ਦੇ ਕਾਰਜਕਾਰੀ ਮਤੇ (Executive Resolution) ਰਾਹੀਂ ਬਣਿਆ ਥਿੰਕ ਟੈਂਕ ਹੈ।',
                'ਭੁਲੇਖਾ: ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ ਲਈ ਚੰਦਰਯਾਨ-3 ਦੀ ਲੈਂਡਿੰਗ ਮਿਤੀ (23 ਅਗਸਤ 2023) ਨੂੰ ਲਾਂਚ ਮਿਤੀ (14 ਜੁਲਾਈ 2023) ਨਾਲ ਰਲਗੱਡ ਕਰਨਾ। ਸੁਧਾਰ: ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ ਹਰ ਸਾਲ 23 ਅਗਸਤ ਨੂੰ ਵਿਕਰਮ ਲੈਂਡਰ ਦੀ ਸ਼ਿਵ ਸ਼ਕਤੀ ਪੁਆਇੰਟ ਤੇ ਸਫਲ ਲੈਂਡਿੰਗ ਦੀ ਯਾਦ ਵਿੱਚ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: म्यांमार या चीन को SAARC का सदस्य मानना या ढाका को SAARC का मुख्यालय चिह्नित करना। सुधार: SAARC की स्थापना 1985 में ढाका में हुई थी, किंतु इसका स्थायी सचिवालय काठमांडू (नेपाल) में है और इसके 8 सदस्यों (MBBS PAIN) में म्यांमार या चीन शामिल नहीं हैं।',
                'भ्रांति: नीति आयोग को संवैधानिक या संसद के अधिनियम द्वारा गठित वैधानिक निकाय समझना। सुधार: नीति आयोग (1 जनवरी 2015) न तो संवैधानिक है और न ही वैधानिक; इसका गठन केंद्रीय मंत्रिमंडल के कार्यकारी संकल्प (Executive Resolution) द्वारा किया गया है।',
                'भ्रांति: राष्ट्रीय अंतरिक्ष दिवस के लिए चंद्रयान-3 की लैंडिंग तिथि (23 अगस्त 2023) को प्रक्षेपण तिथि (14 जुलाई 2023) से भ्रमित करना। सुधार: राष्ट्रीय अंतरिक्ष दिवस प्रतिवर्ष 23 अगस्त को शिव शक्ति पॉइंट पर विक्रम लैंडर की सफल सॉफ्ट लैंडिंग की स्मृति में मनाया जाता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — International Organizations & HQ] Match the following International Organizations with their respective Headquarters: (1) International Court of Justice (ICJ), (2) Food and Agriculture Organization (FAO), (3) New Development Bank (BRICS Bank), (4) International Atomic Energy Agency (IAEA).',
                    pa: '[Easy — ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਗਠਨ ਅਤੇ ਮੁੱਖ ਦਫ਼ਤਰ] ਹੇਠ ਲਿਖੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਗਠਨਾਂ ਦਾ ਉਨ੍ਹਾਂ ਦੇ ਮੁੱਖ ਦਫ਼ਤਰਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ: (1) ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ (ICJ), (2) ਖੁਰਾਕ ਅਤੇ ਖੇਤੀਬਾੜੀ ਸੰਗਠਨ (FAO), (3) ਨਿਊ ਡਿਵੈਲਪਮੈਂਟ ਬੈਂਕ (BRICS ਬੈਂਕ), (4) ਅੰਤਰਰਾਸ਼ਟਰੀ ਪਰਮਾਣੂ ਊਰਜਾ ਏਜੰਸੀ (IAEA)।',
                    hi: '[Easy — अंतर्राष्ट्रीय संगठन एवं मुख्यालय] निम्नलिखित अंतर्राष्ट्रीय संगठनों का उनके मुख्यालयों से मिलान कीजिए: (1) अंतर्राष्ट्रीय न्यायालय (ICJ), (2) खाद्य एवं कृषि संगठन (FAO), (3) न्यू डेवलपमेंट बैंक (BRICS बैंक), (4) अंतर्राष्ट्रीय परमाणु ऊर्जा एजेंसी (IAEA)।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Recall that the International Court of Justice (ICJ) is the only principal organ of the UN located outside New York — at the Peace Palace in The Hague, Netherlands.',
                        'Step 2: All UN food-related agencies (FAO and World Food Programme) are headquartered in Rome, Italy.',
                        'Step 3: The BRICS New Development Bank (NDB, established 2014) is headquartered in Shanghai, China.',
                        'Step 4: IAEA ("Atoms for Peace") and OPEC are both headquartered in Vienna, Austria.'
                    ],
                    pa: [
                        'Step 1: ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ (ICJ) ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦਾ ਇਕਲੌਤਾ ਮੁੱਖ ਅੰਗ ਹੈ ਜੋ ਨਿਊਯਾਰਕ ਤੋਂ ਬਾਹਰ — ਦ ਹੇਗ (ਨੀਦਰਲੈਂਡ) ਵਿੱਚ ਸਥਿਤ ਹੈ।',
                        'Step 2: ਖੁਰਾਕ ਨਾਲ ਸਬੰਧਤ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਏਜੰਸੀਆਂ (FAO ਅਤੇ WFP) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਰੋਮ (ਇਟਲੀ) ਵਿੱਚ ਹੈ।',
                        'Step 3: BRICS ਦੇ ਨਿਊ ਡਿਵੈਲਪਮੈਂਟ ਬੈਂਕ (NDB, 2014) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਸ਼ੰਘਾਈ (ਚੀਨ) ਵਿੱਚ ਹੈ।',
                        'Step 4: IAEA ਅਤੇ OPEC ਦੋਵਾਂ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਵੀਆਨਾ (ਆਸਟਰੀਆ) ਵਿੱਚ ਹੈ।'
                    ],
                    hi: [
                        'Step 1: अंतर्राष्ट्रीय न्यायालय (ICJ) संयुक्त राष्ट्र का एकमात्र प्रमुख अंग है जो न्यूयॉर्क से बाहर — द हेग (नीदरलैंड) में स्थित है।',
                        'Step 2: खाद्य संबंधी संयुक्त राष्ट्र एजेंसियों (FAO तथा WFP) का मुख्यालय रोम (इटली) में है।',
                        'Step 3: BRICS के न्यू डेवलपमेंट बैंक (NDB, 2014) का मुख्यालय शंघाई (चीन) में है।',
                        'Step 4: IAEA तथा OPEC दोनों का मुख्यालय वियना (ऑस्ट्रिया) में है।'
                    ]
                },
                finalAnswer: {
                    en: '(1) ICJ -> The Hague; (2) FAO -> Rome; (3) NDB -> Shanghai; (4) IAEA -> Vienna',
                    pa: '(1) ICJ -> ਦ ਹੇਗ; (2) FAO -> ਰੋਮ; (3) NDB -> ਸ਼ੰਘਾਈ; (4) IAEA -> ਵੀਆਨਾ',
                    hi: '(1) ICJ -> द हेग; (2) FAO -> रोम; (3) NDB -> शंघाई; (4) IAEA -> वियना'
                }
            },
            {
                problem: {
                    en: '[Medium — Punjab Governance & Space Current Affairs] Identify: (a) Which district became the 23rd district of Punjab in 2021 and from which parent district was it carved out? (b) What is the official name given to the Chandrayaan-3 landing site and which day is celebrated as National Space Day in India?',
                    pa: '[Medium — ਪੰਜਾਬ ਪ੍ਰਸ਼ਾਸਨ ਅਤੇ ਪੁਲਾੜ ਕਰੰਟ ਅਫੇਅਰਜ਼] ਦੱਸੋ: (a) 2021 ਵਿੱਚ ਪੰਜਾਬ ਦਾ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਕਿਹੜਾ ਬਣਿਆ ਅਤੇ ਇਸ ਨੂੰ ਕਿਸ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚੋਂ ਵੱਖ ਕੀਤਾ ਗਿਆ? (b) ਚੰਦਰਯਾਨ-3 ਦੇ ਲੈਂਡਿੰਗ ਸਥਾਨ ਨੂੰ ਕੀ ਨਾਂ ਦਿੱਤਾ ਗਿਆ ਹੈ ਅਤੇ ਭਾਰਤ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ ਕਦੋਂ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?',
                    hi: '[Medium — पंजाब प्रशासन एवं अंतरिक्ष समसामयिकी] बताइए: (a) 2021 में पंजाब का 23वाँ ज़िला कौन-सा बना और इसे किस मूल ज़िले से अलग किया गया? (b) चंद्रयान-3 के लैंडिंग स्थल को क्या आधिकारिक नाम दिया गया है और भारत में राष्ट्रीय अंतरिक्ष दिवस कब मनाया जाता है?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: On 14 May 2021 (notified June 2021), Malerkotla was carved out of Sangrur district to become the 23rd district of Punjab.',
                        'Step 2: On 23 August 2023, Chandrayaan-3’s Vikram lander touched down near the Lunar South Pole.',
                        'Step 3: The Government of India named the Chandrayaan-3 landing site "Shiva Shakti Point" and declared 23 August as National Space Day.'
                    ],
                    pa: [
                        'Step 1: ਮਈ–ਜੂਨ 2021 ਵਿੱਚ ਮਾਲੇਰਕੋਟਲਾ ਨੂੰ ਸੰਗਰੂਰ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚੋਂ ਵੱਖ ਕਰਕੇ ਪੰਜਾਬ ਦਾ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਬਣਾਇਆ ਗਿਆ।',
                        'Step 2: 23 ਅਗਸਤ 2023 ਨੂੰ ਚੰਦਰਯਾਨ-3 ਦੇ ਵਿਕਰਮ ਲੈਂਡਰ ਨੇ ਚੰਦਰਮਾ ਦੇ ਦੱਖਣੀ ਧਰੁਵ ਨੇੜੇ ਸਫਲ ਲੈਂਡਿੰਗ ਕੀਤੀ।',
                        'Step 3: ਭਾਰਤ ਸਰਕਾਰ ਨੇ ਲੈਂਡਿੰਗ ਸਥਾਨ ਦਾ ਨਾਂ "ਸ਼ਿਵ ਸ਼ਕਤੀ ਪੁਆਇੰਟ" ਰੱਖਿਆ ਅਤੇ 23 ਅਗਸਤ ਨੂੰ "ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ" ਐਲਾਨਿਆ।'
                    ],
                    hi: [
                        'Step 1: मई–जून 2021 में मालेरकोटला को संगरूर ज़िले से अलग करके पंजाब का 23वाँ ज़िला बनाया गया।',
                        'Step 2: 23 अगस्त 2023 को चंद्रयान-3 के विक्रम लैंडर ने चंद्रमा के दक्षिणी ध्रुव के पास सफल सॉफ्ट लैंडिंग की।',
                        'Step 3: भारत सरकार ने लैंडिंग स्थल का नाम "शिव शक्ति पॉइंट" रखा और 23 अगस्त को "राष्ट्रीय अंतरिक्ष दिवस" घोषित किया।'
                    ]
                },
                finalAnswer: {
                    en: '(a) Malerkotla (carved out of Sangrur); (b) Shiva Shakti Point, 23 August',
                    pa: '(a) ਮਾਲੇਰਕੋਟਲਾ (ਸੰਗਰੂਰ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚੋਂ); (b) ਸ਼ਿਵ ਸ਼ਕਤੀ ਪੁਆਇੰਟ, 23 ਅਗਸਤ',
                    hi: '(a) मालेरकोटला (संगरूर ज़िले से); (b) शिव शक्ति पॉइंट, 23 अगस्त'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-clk-ca-1',
                question: {
                    en: 'Where is the headquarters of the International Court of Justice (ICJ) located, and what is the number and tenure of its judges?',
                    pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ (ICJ) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਕਿੱਥੇ ਹੈ ਅਤੇ ਇਸ ਦੇ ਜੱਜਾਂ ਦੀ ਗਿਣਤੀ ਤੇ ਕਾਰਜਕਾਲ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
                    hi: 'अंतर्राष्ट्रीय न्यायालय (ICJ) का मुख्यालय कहाँ स्थित है तथा इसके न्यायाधीशों की संख्या और कार्यकाल कितना होता है?'
                },
                answer: {
                    en: 'The Hague, Netherlands (Peace Palace); 15 judges elected for a 9-year term.',
                    pa: 'ਦ ਹੇਗ, ਨੀਦਰਲੈਂਡ; 15 ਜੱਜ ਜਿਨ੍ਹਾਂ ਦਾ ਕਾਰਜਕਾਲ 9 ਸਾਲ ਹੁੰਦਾ ਹੈ।',
                    hi: 'द हेग, नीदरलैंड; 15 न्यायाधीश जिनका कार्यकाल 9 वर्ष होता है।'
                }
            },
            {
                id: 'fc-clk-ca-2',
                question: {
                    en: 'What is the name of the Chandrayaan-3 landing site on the Moon, and on which date is National Space Day celebrated in India?',
                    pa: 'ਚੰਦਰਮਾ ਤੇ ਚੰਦਰਯਾਨ-3 ਦੇ ਲੈਂਡਿੰਗ ਸਥਾਨ ਦਾ ਨਾਂ ਕੀ ਹੈ ਅਤੇ ਭਾਰਤ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ ਕਿਸ ਤਾਰੀਖ਼ ਨੂੰ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?',
                    hi: 'चंद्रमा पर चंद्रयान-3 के लैंडिंग स्थल का नाम क्या है और भारत में राष्ट्रीय अंतरिक्ष दिवस किस तिथि को मनाया जाता है?'
                },
                answer: {
                    en: 'Shiva Shakti Point (Lander: Vikram, Rover: Pragyan); National Space Day is celebrated on 23 August.',
                    pa: 'ਸ਼ਿਵ ਸ਼ਕਤੀ ਪੁਆਇੰਟ (ਲੈਂਡਰ: ਵਿਕਰਮ, ਰੋਵਰ: ਪ੍ਰਗਿਆਨ); ਰਾਸ਼ਟਰੀ ਪੁਲਾੜ ਦਿਵਸ 23 ਅਗਸਤ ਨੂੰ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
                    hi: 'शिव शक्ति पॉइंट (लैंडर: विक्रम, रोवर: प्रज्ञान); राष्ट्रीय अंतरिक्ष दिवस 23 अगस्त को मनाया जाता है।'
                }
            },
            {
                id: 'fc-clk-ca-3',
                question: {
                    en: 'Which craft of Punjab holds the Geographical Indication (GI) tag in the Handicraft category, and which district became the 23rd district of Punjab in 2021?',
                    pa: 'ਪੰਜਾਬ ਦੀ ਕਿਸ ਦਸਤਕਾਰੀ ਨੂੰ GI ਟੈਗ ਪ੍ਰਾਪਤ ਹੈ ਅਤੇ 2021 ਵਿੱਚ ਪੰਜਾਬ ਦਾ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਕਿਹੜਾ ਬਣਿਆ?',
                    hi: 'पंजाब के किस हस्तशिल्प को GI टैग प्राप्त है और 2021 में पंजाब का 23वाँ ज़िला कौन-सा बना?'
                },
                answer: {
                    en: 'Phulkari holds the Handicraft GI tag; Malerkotla (carved out of Sangrur) became the 23rd district of Punjab in May 2021.',
                    pa: 'ਫੁਲਕਾਰੀ ਨੂੰ ਦਸਤਕਾਰੀ GI ਟੈਗ ਪ੍ਰਾਪਤ ਹੈ; ਮਾਲੇਰਕੋਟਲਾ (ਸੰਗਰੂਰ ਵਿੱਚੋਂ ਵੱਖ ਹੋ ਕੇ) ਮਈ 2021 ਵਿੱਚ ਪੰਜਾਬ ਦਾ 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਬਣਿਆ।',
                    hi: 'फुलकारी को हस्तशिल्प GI टैग प्राप्त है; मालेरकोटला (संगरूर से अलग होकर) मई 2021 में पंजाब का 23वाँ ज़िला बना।'
                }
            },
            {
                id: 'fc-clk-ca-4',
                question: {
                    en: 'Name the 8 member countries of SAARC, its year/place of founding, and its permanent Secretariat.',
                    pa: 'SAARC (ਸਾਰਕ) ਦੇ 8 ਮੈਂਬਰ ਦੇਸ਼ਾਂ ਦੇ ਨਾਂ, ਸਥਾਪਨਾ ਦਾ ਸਾਲ/ਸਥਾਨ ਅਤੇ ਇਸ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਦੱਸੋ।',
                    hi: 'SAARC (दक्षेश) के 8 सदस्य देशों के नाम, स्थापना वर्ष/स्थान तथा इसका स्थायी मुख्यालय बताइए।'
                },
                answer: {
                    en: 'Members (MBBS PAIN): Maldives, Bhutan, Bangladesh, Sri Lanka, Pakistan, Afghanistan, India, Nepal. Founded on 8 Dec 1985 in Dhaka; Headquarters in Kathmandu, Nepal.',
                    pa: 'ਮੈਂਬਰ (MBBS PAIN): ਮਾਲਦੀਵ, ਭੂਟਾਨ, ਬੰਗਲਾਦੇਸ਼, ਸ਼੍ਰੀਲੰਕਾ, ਪਾਕਿਸਤਾਨ, ਅਫ਼ਗਾਨਿਸਤਾਨ, ਭਾਰਤ, ਨੇਪਾਲ। ਸਥਾਪਨਾ: 8 ਦਸੰਬਰ 1985 (ਢਾਕਾ); ਮੁੱਖ ਦਫ਼ਤਰ: ਕਾਠਮੰਡੂ (ਨੇਪਾਲ)।',
                    hi: 'सदस्य (MBBS PAIN): मालदीव, भूटान, बांग्लादेश, श्रीलंका, पाकिस्तान, अफ़गानिस्तान, भारत, नेपाल। स्थापना: 8 दिसंबर 1985 (ढाका); मुख्यालय: काठमांडू (नेपाल)।'
                }
            },
            {
                id: 'fc-clk-ca-5',
                question: {
                    en: 'On the recommendation of which committee was the Central Vigilance Commission (CVC) set up in 1964, and who is the Chairman of the 16th Finance Commission?',
                    pa: '1964 ਵਿੱਚ ਕੇਂਦਰੀ ਚੌਕਸੀ ਕਮਿਸ਼ਨ (CVC) ਕਿਸ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਬਣਿਆ ਸੀ ਅਤੇ 16ਵੇਂ ਵਿੱਤ ਕਮਿਸ਼ਨ ਦੇ ਚੇਅਰਮੈਨ ਕੌਣ ਹਨ?',
                    hi: '1964 में केंद्रीय सतर्कता आयोग (CVC) किस समिति की सिफारिश पर गठित हुआ था और 16वें वित्त आयोग के अध्यक्ष कौन हैं?'
                },
                answer: {
                    en: 'CVC was set up on the recommendation of the K. Santhanam Committee (1964); Dr. Arvind Panagariya is the Chairman of the 16th Finance Commission (Article 280).',
                    pa: 'CVC ਦੀ ਸਥਾਪਨਾ ਕੇ. ਸੰਥਾਨਮ ਕਮੇਟੀ (1964) ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਹੋਈ; 16ਵੇਂ ਵਿੱਤ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 280) ਦੇ ਚੇਅਰਮੈਨ ਡਾ. ਅਰਵਿੰਦ ਪਨਗੜੀਆ ਹਨ।',
                    hi: 'CVC का गठन के. संथानम समिति (1964) की सिफारिश पर हुआ; 16वें वित्त आयोग (अनुच्छेद 280) के अध्यक्ष डॉ. अरविंद पनगढ़िया हैं।'
                }
            },
            {
                id: 'fc-clk-ca-6',
                question: {
                    en: 'Which officer from Ludhiana (Punjab) is the ONLY Indian Air Force personnel ever awarded the Param Vir Chakra?',
                    pa: 'ਲੁਧਿਆਣਾ (ਪੰਜਾਬ) ਦਾ ਕਿਹੜਾ ਅਧਿਕਾਰੀ ਭਾਰਤੀ ਹਵਾਈ ਸੈਨਾ ਦਾ ਇਕਲੌਤਾ ਜਵਾਨ ਹੈ ਜਿਸ ਨੂੰ ਪਰਮਵੀਰ ਚੱਕਰ ਨਾਲ ਸਨਮਾਨਿਤ ਕੀਤਾ ਗਿਆ?',
                    hi: 'लुधियाना (पंजाब) के कौन-से अधिकारी भारतीय वायुसेना के एकमात्र जाँबाज़ हैं जिन्हें परमवीर चक्र से सम्मानित किया गया?'
                },
                answer: {
                    en: 'Flying Officer Nirmaljit Singh Sekhon (awarded posthumously for defending Srinagar Air Base in the 1971 Indo-Pak War with his Folland Gnat fighter).',
                    pa: 'ਫਲਾਇੰਗ ਅਫ਼ਸਰ ਨਿਰਮਲਜੀਤ ਸਿੰਘ ਸੇਖੋਂ (1971 ਦੀ ਭਾਰਤ-ਪਾਕਿ ਜੰਗ ਵਿੱਚ ਸ੍ਰੀਨਗਰ ਏਅਰ ਬੇਸ ਦੀ ਰੱਖਿਆ ਲਈ ਮਰਨ ਉਪਰੰਤ ਪਰਮਵੀਰ ਚੱਕਰ)।',
                    hi: 'फ्लाइंग ऑफिसर निर्मलजीत सिंह सेखों (1971 के भारत-पाक युद्ध में श्रीनगर एयर बेस की रक्षा हेतु मरणोपरांत परमवीर चक्र)।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. CLERK SPORTS & GAMES BLUEPRINT
    // =========================================================================
    {
        topicId: 'clerk-sports',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 100,
            editorialNote: 'Comprehensive PPSC & PSSSB Clerk Sports Blueprint covering Olympic Heritage of Punjab, India’s 8 Olympic Hockey Golds, Individual Olympic Medallists, Rural Olympics (Qila Raipur), Khedan Watan Punjab Diyan, NIS Patiala, MAKA Trophy, and Sports Trophies & Terminology (Level B -> I -> A).'
        },
        bookRefs: [
            {
                title: 'Ministry of Youth Affairs & Sports Annual Report & SAI Archival Records',
                author: 'Government of India / Sports Authority of India (NIS Patiala)',
                chapter: 'Olympic Medallists, National Sports Awards (Khel Ratna, Arjuna, MAKA Trophy) & NIS Patiala',
                relevance: 'Authoritative reference for Indian Olympic history, Hockey medals, National Sports Awards, and Netaji Subhas National Institute of Sports (Patiala).'
            },
            {
                title: 'Punjab Sports Department Compendium & Cultural Heritage of Punjab',
                author: 'Department of Sports and Youth Services, Punjab',
                chapter: 'Olympians of Punjab, Maharaja Ranjit Singh Award, Qila Raipur Rural Games & Kabaddi',
                relevance: 'Direct source for PSSSB & PPSC Clerk questions on Punjab sportspersons, Circle Style Kabaddi, Gatka, and Khedan Watan Punjab Diyan.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Olympic History, India's Hockey Golden Era & Punjab's Olympic Legends]
1. **Modern Olympics, Asian Games & Commonwealth Games Milestones:**
   - **Modern Olympic Games:** Started in **1896 in Athens (Greece)** by **Baron Pierre de Coubertin**; International Olympic Committee (**IOC**) founded in **1894**, headquartered in **Lausanne, Switzerland**. Olympic Motto: *"Citius, Altius, Fortius – Communiter"* (Faster, Higher, Stronger – Together).
   - **Commonwealth Games (CWG):** First held in **1930 in Hamilton, Canada** (hosted by India in **New Delhi, 2010**).
   - **Asian Games (Asiad):** First held in **1951 in New Delhi, India**.
   - **India's Olympic Men's Hockey Golden Era (13 Total Medals = 8 Gold + 1 Silver + 4 Bronze):**
     - **8 Olympic Gold Medals:** **1928** (Amsterdam — Captain Jaipal Singh Munda, Dhyan Chand top scorer), **1932** (Los Angeles), **1936** (Berlin — Captain Major Dhyan Chand), **1948** (London — first as independent India), **1952** (Helsinki), **1956** (Melbourne — 6th consecutive Gold!), **1964** (Tokyo), **1980** (Moscow).
     - **Recent Back-to-Back Olympic Bronze Medals:** **2020 Tokyo Olympics** (captained by **Manpreet Singh** of Jalandhar, ending a 41-year medal drought) & **2024 Paris Olympics** (captained by **Harmanpreet Singh** "Sarpanch" of Amritsar, with 10 goals!).

2. **Master Table of Legendary Sportspersons of Punjab & India:**
   | Sportsperson | Sport & Hometown/Link | Historic Achievements & High-Yield Exam Facts |
   |---|---|---|
   | **Abhinav Bindra** | Shooting ($10\\text{ m}$ Air Rifle) — Zirakpur/Mohali, Punjab | **India's FIRST Individual Olympic Gold Medallist** at the **2008 Beijing Olympics**. Autobiography: ***A Shot at History***. |
   | **Neeraj Chopra** | Athletics (Javelin Throw) — Panipat | **India's 2nd Individual Olympic Gold Medallist** (**2020 Tokyo Olympics** with **$87.58\\text{ m}$** throw on **7 August** $\\rightarrow$ celebrated as **National Javelin Day**); **Silver** at **2024 Paris Olympics** ($89.45\\text{ m}$); World Athletics Championship Gold (2023). |
   | **Milkha Singh ("The Flying Sikh")** | Athletics ($200\\text{ m} / 400\\text{ m}$ Sprint) — Chandigarh/Punjab | **First Indian man to win Commonwealth Games Athletics Gold** (**1958 Cardiff** $440\\text{ yards}$); 4 Asian Games Golds (1958 Tokyo & 1962 Jakarta); finished **4th in $400\\text{ m}$ final at 1960 Rome Olympics** ($45.6\\text{ s}$). Title *"The Flying Sikh"* given by **Gen. Ayub Khan** in 1960. Autobiography: ***The Race of My Life***. |
   | **Balbir Singh Dosanjh (Balbir Singh Sr.)** | Field Hockey — Haripur Khalsa (Jalandhar) | **3-time Olympic Gold Medallist (1948 London, 1952 Helsinki, 1956 Melbourne — Captain)**; holds the **all-time Olympic record for most goals (5 goals) by an individual in a Men's Hockey Final** (India $6–1$ Netherlands, 1952 Helsinki)! First sportsman awarded **Padma Shri (1957)**. Autobiography: ***The Golden Hat Trick***. |
   | **Udham Singh Kular** | Field Hockey — Sansarpur (Jalandhar) | Won **4 Olympic Medals** (**3 Golds**: 1952, 1956, 1964 + **1 Silver**: 1960 Rome) — joint-highest in Indian hockey alongside Leslie Claudius. *Note: Sansarpur village in Jalandhar is famous as the **"Mecca / Nursery of Indian Hockey"** (produced 14+ Olympians)!* |
   | **Surjit Singh Randhawa & Pargat Singh** | Field Hockey — Batala / Jalandhar | **Surjit Singh** (Olympian 1976, Captain, 1975 World Cup winner — **Surjit Hockey Stadium in Jalandhar** is named after him); **Pargat Singh** (Mithapur, Jalandhar — captained India at **1992 Barcelona** & **1996 Atlanta Olympics**). |
   | **Manpreet Singh & Harmanpreet Singh** | Field Hockey — Jalandhar / Amritsar | **Manpreet Singh** (Mithapur, Jalandhar — Captain of **2020 Tokyo Bronze** team, FIH Player of the Year 2019); **Harmanpreet Singh** (Timowal, Amritsar — Captain of **2024 Paris Bronze** team, 3-time FIH Player of the Year). |
   | **Yuvraj Singh, Harbhajan Singh, Shubman Gill & Arshdeep Singh** | Cricket — Punjab | **Yuvraj Singh** (**Player of the Tournament in 2011 ODI World Cup**, hit 6 sixes in an over off Stuart Broad in 2007 T20 WC; autobiography ***The Test of My Life***); **Harbhajan Singh** ("The Turbanator", Jalandhar — first Indian to take a Test Hat-trick vs Australia in 2001); **Shubman Gill** (Fazilka — youngest ODI double centurion); **Arshdeep Singh** (2024 T20 World Cup joint-highest wicket-taker). |
   | **Harmanpreet Kaur** | Women's Cricket — Moga, Punjab | **Captain of the Indian Women's Cricket Team**; first Indian woman to score a century in T20 Internationals and first Indian woman signed in WBBL; Arjuna Award (2017). |
   | **Avneet Kaur Sidhu & Sift Kaur Samra** | Shooting — Bathinda / Faridkot | **Avneet Kaur Sidhu** (2006 Melbourne CWG Gold in $10\\text{ m}$ Air Rifle Pairs, first woman shooter from Punjab gets Arjuna Award 2008); **Sift Kaur Samra** (World Record Gold at 2022 Asian Games in $50\\text{ m}$ Rifle 3 Positions). |
   | **Palak Kohli** | Para-Badminton — Jalandhar | Youngest para-badminton player at **2020 Tokyo Paralympics** from Punjab. |

---

### [Level I: Intermediate — Traditional Sports of Punjab, Rural Olympics & Sports Institutions]
1. **Punjab's Indigenous Sports Heritage & Flagship Events:**
   - **State Game of Punjab:** **Kabaddi (Circle Style / *Panjabi Kabaddi*)** — played on a circular pitch of radius **$22\\text{ metres}$** with two teams of **10 players on field** (14 in squad) and a **$30\\text{-second}$ raid clock**.
   - **Qila Raipur Sports Festival ("Rural Olympics of Punjab"):** Held annually in **February at Qila Raipur village (near Ludhiana)** since **1933** (founded by philanthropist **Inder Singh Grewal**); famous for bullock-cart races, Kabaddi, tug-of-war, and feats of rural strength.
   - **Gatka (Sikh Martial Art):** Traditional stick-fighting and sword-fighting martial art associated with **Guru Hargobind Sahib Ji** and **Guru Gobind Singh Ji**; officially included as a competitive sport in the **Khelo India Youth Games** and **37th National Games**.
   - **Khedan Watan Punjab Diyan:** Annual state-wide mega sports carnival launched by Chief Minister **Bhagwant Singh Mann** in **August 2022 from Guru Gobind Singh Stadium, Jalandhar** (spanning Block $\\rightarrow$ District $\\rightarrow$ State levels across age categories from Under-14 to 70+ years).
   - **Maharaja Ranjit Singh Award:** **Highest Sports Award of the Government of Punjab**, instituted in **1978** (first recipient: Olympian **Pargat Singh** / early hockey & athletics legends; carries a trophy of Maharaja Ranjit Singh in warrior attire, scroll of honour, and cash prize).

2. **Netaji Subhas National Institute of Sports (NSNIS), Patiala & MAKA Trophy:**
   - **NSNIS Patiala ("Mecca of Indian Sports"):** Asia's largest sports institute, established on **7 May 1961** by the Government of India at the historic **Old Moti Bagh Palace of the Maharaja of Patiala** (renamed Netaji Subhas National Institute of Sports on **23 January 1973**). It is the academic headquarters of the **Sports Authority of India (SAI)**.
   - **Maulana Abul Kalam Azad (MAKA) Trophy (instituted 1956–57):** Awarded annually by the President of India to the **overall top-performing University in inter-university sports**. **Guru Nanak Dev University (GNDU), Amritsar** has won the MAKA Trophy a **record 25+ times**, followed closely by **Punjabi University, Patiala** and **Panjab University, Chandigarh**!

---

### [Level A: Advanced — Complete Reference Table of Sports Trophies, Cups, National Awards & Terms]
1. **Master Table of Sports Trophies & Cups (ਖੇਡ ਟਰਾਫੀਆਂ ਅਤੇ ਕੱਪ):**
   | Sport | Major National & International Trophies / Cups |
   |---|---|
   | **Field Hockey** | **Aga Khan Cup**, **Beighton Cup** (oldest hockey tournament, 1895 Kolkata), **Sultan Azlan Shah Cup** (held in Ipoh, Malaysia), **Rangaswamy Cup**, **Dhyan Chand Trophy**, **Lady Ratan Tata Trophy** (Women), **Murugappa Gold Cup**, **Nehru Trophy**. |
   | **Football** | **Durand Cup** (established **1888 in Shimla** — **oldest football tournament in Asia** & 3rd oldest in the world), **Santosh Trophy** (National State Championship), **Rovers Cup**, **Subroto Cup** (Inter-School), **Bandodkar Trophy**, **Kalinga Cup**, **FIFA World Cup**. |
   | **Cricket** | **Ranji Trophy** (First-Class National Championship, started 1934), **Irani Cup** (Ranji Champion vs Rest of India), **Duleep Trophy** (Zonal First-Class), **Vijay Hazare Trophy** (50-over Domestic ODI), **Syed Mushtaq Ali Trophy** (20-over Domestic T20), **Deodhar Trophy**, **C.K. Nayudu Trophy**, **Ashes Series** (England vs Australia). |
   | **Badminton** | **Thomas Cup** (World **Men's** Team Championship — **India won historic first title in 2022** in Bangkok!), **Uber Cup** (World **Women's** Team Championship), **Sudirman Cup** (World **Mixed** Team Championship), **Yonex Cup**, **Narang Cup**, **Chadha Cup**. |
   | **Lawn Tennis** | **Davis Cup** (Men's World Team), **Billie Jean King Cup / Fed Cup** (Women's World Team), **4 Grand Slams** (in chronological calendar order): 1. **Australian Open** (Jan — Hard Court), 2. **French Open / Roland Garros** (May–June — **Clay Court**), 3. **Wimbledon** (June–July — **Grass Court**, oldest 1877), 4. **US Open** (Aug–Sept — Hard Court). |
   | **Golf & Polo** | **Golf:** **Ryder Cup**, **Walker Cup**, **Augusta Masters**, **Eisenhower Trophy**. **Polo:** **Ezra Cup** (oldest polo cup, 1880), **Radha Mohan Cup**. **Rowing:** **Wellington Trophy**. |

2. **National Sports Awards of India:**
   - **Major Dhyan Chand Khel Ratna Award:** India's **highest sporting honour**, instituted in **1991–92** (formerly Rajiv Gandhi Khel Ratna; renamed in August 2021). **First recipient:** Chess Grandmaster **Viswanathan Anand** (1991–92). National Sports Day is celebrated on **29 August** (birth anniversary of Major Dhyan Chand).
   - **Arjuna Award:** Instituted in **1961** for consistent outstanding performance over the previous 4 years.
   - **Dronacharya Award:** Instituted in **1985** for excellence in **Sports Coaching** (Regular & Lifetime categories).
   - **Dhyan Chand Award for Lifetime Achievement:** Instituted in **2002**.`,
            pa: `### [Level B: Basic — ਓਲੰਪਿਕ ਇਤਿਹਾਸ, ਭਾਰਤੀ ਹਾਕੀ ਦਾ ਸੁਨਹਿਰੀ ਯੁੱਗ ਅਤੇ ਪੰਜਾਬ ਦੇ ਮਹਾਨ ਖਿਡਾਰੀ]
1. **ਆਧੁਨਿਕ ਓਲੰਪਿਕ, ਏਸ਼ੀਆਈ ਖੇਡਾਂ ਅਤੇ ਰਾਸ਼ਟਰਮੰਡਲ ਖੇਡਾਂ:**
   - **ਆਧੁਨਿਕ ਓਲੰਪਿਕ ਖੇਡਾਂ:** **1896 ਵਿੱਚ ਏਥਨਜ਼ (ਯੂਨਾਨ)** ਤੋਂ **ਬੈਰਨ ਪੀਅਰੇ ਡੀ ਕੁਬਰਟਿਨ** ਦੇ ਯਤਨਾਂ ਨਾਲ ਸ਼ੁਰੂ ਹੋਈਆਂ; ਅੰਤਰਰਾਸ਼ਟਰੀ ਓਲੰਪਿਕ ਕਮੇਟੀ (**IOC**) ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ **ਲੁਸਾਨੇ (ਸਵਿਟਜ਼ਰਲੈਂਡ)** ਵਿੱਚ ਹੈ।
   - **ਰਾਸ਼ਟਰਮੰਡਲ ਖੇਡਾਂ (CWG):** **1930 ਵਿੱਚ ਹੈਮਿਲਟਨ (ਕੈਨੇਡਾ)** ਵਿੱਚ ਸ਼ੁਰੂ ਹੋਈਆਂ (2010 ਵਿੱਚ ਨਵੀਂ ਦਿੱਲੀ, ਭਾਰਤ ਵਿੱਚ ਹੋਈਆਂ)। **ਏਸ਼ੀਆਈ ਖੇਡਾਂ:** **1951 ਵਿੱਚ ਨਵੀਂ ਦਿੱਲੀ** ਤੋਂ ਸ਼ੁਰੂ ਹੋਈਆਂ।
   - **ਭਾਰਤੀ ਪੁਰਸ਼ ਹਾਕੀ ਦਾ ਓਲੰਪਿਕ ਇਤਿਹਾਸ (ਕੁੱਲ 13 ਤਗਮੇ = 8 ਸੋਨ + 1 ਚਾਂਦੀ + 4 ਕਾਂਸੀ):**
     - **8 ਓਲੰਪਿਕ ਸੋਨ ਤਗਮੇ (Gold Medals):** **1928** (ਐਮਸਟਰਡਮ), **1932** (ਲਾਸ ਏਂਜਲਸ), **1936** (ਬਰਲਿਨ — ਕਪਤਾਨ ਮੇਜਰ ਧਿਆਨ ਚੰਦ), **1948** (ਲੰਡਨ — ਆਜ਼ਾਦ ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਸੋਨ ਤਗਮਾ), **1952** (ਹੇਲਸਿੰਕੀ), **1956** (ਮੈਲਬੌਰਨ), **1964** (ਟੋਕੀਓ), **1980** (ਮਾਸਕੋ)।
     - **ਟੋਕੀਓ 2020 ਅਤੇ ਪੈਰਿਸ 2024 ਕਾਂਸੀ ਤਗਮੇ:** ਜਲੰਧਰ ਦੇ **ਮਨਪ੍ਰੀਤ ਸਿੰਘ** ਦੀ ਕਪਤਾਨੀ ਹੇਠ **2020 ਟੋਕੀਓ ਓਲੰਪਿਕ** ਵਿੱਚ ਅਤੇ ਅੰਮ੍ਰਿਤਸਰ ਦੇ **ਹਰਮਨਪ੍ਰੀਤ ਸਿੰਘ ('ਸਰਪੰਚ')** ਦੀ ਕਪਤਾਨੀ ਹੇਠ **2024 ਪੈਰਿਸ ਓਲੰਪਿਕ** ਵਿੱਚ ਲਗਾਤਾਰ ਦੋ ਕਾਂਸੀ ਤਗਮੇ ਜਿੱਤੇ!

2. **ਪੰਜਾਬ ਅਤੇ ਭਾਰਤ ਦੇ ਮਹਾਨ ਖਿਡਾਰੀਆਂ ਦੀ ਮਾਸਟਰ ਸਾਰਣੀ:**
   | ਖਿਡਾਰੀ ਦਾ ਨਾਂ | ਖੇਡ ਅਤੇ ਸਬੰਧ | ਇਤਿਹਾਸਕ ਪ੍ਰਾਪਤੀਆਂ ਅਤੇ ਪ੍ਰੀਖਿਆ ਲਈ ਤੱਥ |
   |---|---|---|
   | **ਅਭਿਨਵ ਬਿੰਦਰਾ** | ਨਿਸ਼ਾਨੇਬਾਜ਼ੀ ($10\\text{ m}$ ਏਅਰ ਰਾਈਫਲ) — ਜ਼ੀਰਕਪੁਰ/ਮੋਹਾਲੀ, ਪੰਜਾਬ | **2008 ਬੀਜਿੰਗ ਓਲੰਪਿਕ** ਵਿੱਚ **ਵਿਅਕਤੀਗਤ ਓਲੰਪਿਕ ਸੋਨ ਤਗਮਾ ਜਿੱਤਣ ਵਾਲੇ ਪਹਿਲੇ ਭਾਰਤੀ**। ਸਵੈ-ਜੀਵਨੀ: ***A Shot at History***। |
   | **ਨੀਰਜ ਚੋਪੜਾ** | ਜੈਵਲਿਨ ਥ੍ਰੋ (ਨੇਜ਼ਾ ਸੁੱਟਣਾ) — ਪਾਣੀਪਤ | **2020 ਟੋਕੀਓ ਓਲੰਪਿਕ** ਵਿੱਚ **$87.58\\text{ m}$** ਥ੍ਰੋ ਨਾਲ ਸੋਨ ਤਗਮਾ (**7 ਅਗਸਤ = ਰਾਸ਼ਟਰੀ ਜੈਵਲਿਨ ਦਿਵਸ**) ਅਤੇ **2024 ਪੈਰਿਸ ਓਲੰਪਿਕ** ਵਿੱਚ ਚਾਂਦੀ ਤਗਮਾ ($89.45\\text{ m}$)। |
   | **ਮਿਲਖਾ ਸਿੰਘ ("ਉੱਡਣਾ ਸਿੱਖ / The Flying Sikh")** | ਦੌੜਾਕ ($200\\text{ m} / 400\\text{ m}$) — ਚੰਡੀਗੜ੍ਹ/ਪੰਜਾਬ | **1958 ਕਾਰਡਿਫ ਰਾਸ਼ਟਰਮੰਡਲ ਖੇਡਾਂ** ਵਿੱਚ ਸੋਨ ਤਗਮਾ ਜਿੱਤਣ ਵਾਲੇ ਪਹਿਲੇ ਭਾਰਤੀ ਅਥਲੀਟ; 4 ਏਸ਼ੀਆਈ ਖੇਡਾਂ ਦੇ ਸੋਨ ਤਗਮੇ; **1960 ਰੋਮ ਓਲੰਪਿਕ** ਦੀ $400\\text{ m}$ ਦੌੜ ਵਿੱਚ ਚੌਥਾ ਸਥਾਨ। *'ਫਲਾਇੰਗ ਸਿੱਖ'* ਦਾ ਖਿਤਾਬ 1960 ਵਿੱਚ **ਜਨਰਲ ਅਯੂਬ ਖਾਨ** ਨੇ ਦਿੱਤਾ। ਸਵੈ-ਜੀਵਨੀ: ***The Race of My Life***। |
   | **ਬਲਬੀਰ ਸਿੰਘ ਸੀਨੀਅਰ (ਦੁਸਾਂਝ)** | ਹਾਕੀ — ਹਰੀਪੁਰ ਖਾਲਸਾ (ਜਲੰਧਰ) | **3 ਵਾਰ ਓਲੰਪਿਕ ਸੋਨ ਤਗਮਾ ਜੇਤੂ (1948, 1952, 1956 — ਕਪਤਾਨ)**; **1952 ਹੇਲਸਿੰਕੀ ਓਲੰਪਿਕ ਫਾਈਨਲ ਵਿੱਚ ਨੀਦਰਲੈਂਡ ਵਿਰੁੱਧ 5 ਗੋਲ** ਕਰਨ ਦਾ ਅਟੁੱਟ ਵਿਸ਼ਵ ਰਿਕਾਰਡ! **ਪਦਮ ਸ਼੍ਰੀ (1957)** ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲੇ ਪਹਿਲੇ ਖਿਡਾਰੀ। ਸਵੈ-ਜੀਵਨੀ: ***The Golden Hat Trick***। |
   | **ਊਧਮ ਸਿੰਘ ਕੁਲਾਰ** | ਹਾਕੀ — ਸੰਸਾਰਪੁਰ (ਜਲੰਧਰ) | **4 ਓਲੰਪਿਕ ਤਗਮੇ** (3 ਸੋਨ: 1952, 1956, 1964 + 1 ਚਾਂਦੀ: 1960)। ਜਲੰਧਰ ਦੇ ਪਿੰਡ **ਸੰਸਾਰਪੁਰ ਨੂੰ 'ਭਾਰਤੀ ਹਾਕੀ ਦੀ ਨਰਸਰੀ / ਮੱਕਾ'** ਕਿਹਾ ਜਾਂਦਾ ਹੈ। |
   | **ਸੁਰਜੀਤ ਸਿੰਘ ਰੰਧਾਵਾ ਅਤੇ ਪਰਗਟ ਸਿੰਘ** | ਹਾਕੀ — ਬਟਾਲਾ / ਜਲੰਧਰ | **ਸੁਰਜੀਤ ਸਿੰਘ** (1975 ਵਿਸ਼ਵ ਕੱਪ ਜੇਤੂ — ਜਲੰਧਰ ਦਾ ਸੁਰਜੀਤ ਹਾਕੀ ਸਟੇਡੀਅਮ ਉਨ੍ਹਾਂ ਦੇ ਨਾਂ ਤੇ ਹੈ); **ਪਰਗਟ ਸਿੰਘ** (ਮਿੱਠਾਪੁਰ, ਜਲੰਧਰ — 1992 ਬਾਰਸੀਲੋਨਾ ਤੇ 1996 ਅਟਲਾਂਟਾ ਓਲੰਪਿਕ ਵਿੱਚ ਕਪਤਾਨ)। |
   | **ਯੁਵਰਾਜ ਸਿੰਘ, ਹਰਭਜਨ ਸਿੰਘ, ਸ਼ੁਭਮਨ ਗਿੱਲ, ਅਰਸ਼ਦੀਪ ਸਿੰਘ, ਹਰਮਨਪ੍ਰੀਤ ਕੌਰ** | ਕ੍ਰਿਕਟ — ਪੰਜਾਬ | **ਯੁਵਰਾਜ ਸਿੰਘ** (2011 ਵਿਸ਼ਵ ਕੱਪ ਦਾ ਪਲੇਅਰ ਆਫ਼ ਦ ਟੂਰਨਾਮੈਂਟ; ਸਵੈ-ਜੀਵਨੀ ***The Test of My Life***); **ਹਰਭਜਨ ਸਿੰਘ** (ਟੈਸਟ ਕ੍ਰਿਕਟ ਵਿੱਚ ਹੈਟ-ਟ੍ਰਿਕ ਲੈਣ ਵਾਲੇ ਪਹਿਲੇ ਭਾਰਤੀ, 2001); **ਹਰਮਨਪ੍ਰੀਤ ਕੌਰ** (ਮੋਗਾ — ਭਾਰਤੀ ਮਹਿਲਾ ਕ੍ਰਿਕਟ ਟੀਮ ਦੀ ਕਪਤਾਨ)। |

---

### [Level I: Intermediate — ਪੰਜਾਬ ਦੀਆਂ ਵਿਰਾਸਤੀ ਖੇਡਾਂ, ਪੇਂਡੂ ਓਲੰਪਿਕ ਅਤੇ ਖੇਡ ਸੰਸਥਾਵਾਂ]
1. **ਪੰਜਾਬ ਦੀਆਂ ਰਵਾਇਤੀ ਖੇਡਾਂ ਅਤੇ ਪ੍ਰਮੁੱਖ ਖੇਡ ਮੇਲੇ:**
   - **ਪੰਜਾਬ ਦੀ ਰਾਜ ਖੇਡ (State Game of Punjab):** **ਕਬੱਡੀ (ਸਰਕਲ ਸਟਾਈਲ / ਪੰਜਾਬੀ ਕਬੱਡੀ)** — $22\\text{ m}$ ਅਰਧ-ਵਿਆਸ ਦੇ ਗੋਲ ਦਾਇਰੇ ਵਿੱਚ ਖੇਡੀ ਜਾਂਦੀ ਹੈ।
   - **ਕਿਲਾ ਰਾਏਪੁਰ ਖੇਡ ਮੇਲਾ ("ਪੰਜਾਬ ਦੀਆਂ ਪੇਂਡੂ ਓਲੰਪਿਕ ਖੇਡਾਂ"):** **ਲੁਧਿਆਣਾ** ਜ਼ਿਲ੍ਹੇ ਦੇ ਪਿੰਡ **ਕਿਲਾ ਰਾਏਪੁਰ** ਵਿਖੇ **1933** ਤੋਂ ਹਰ ਸਾਲ ਫਰਵਰੀ ਵਿੱਚ ਕਰਵਾਇਆ ਜਾਂਦਾ ਹੈ (ਸੰਸਥਾਪਕ: **ਇੰਦਰ ਸਿੰਘ ਗਰੇਵਾਲ**)।
   - **ਗੱਤਕਾ (Gatka):** ਛੇਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਅਤੇ ਦਸਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨਾਲ ਸਬੰਧਤ ਸਿੱਖ ਜੰਗੀ ਕਲਾ; ਇਸ ਨੂੰ **ਖੇਲੋ ਇੰਡੀਆ ਯੂਥ ਗੇਮਜ਼** ਅਤੇ **ਰਾਸ਼ਟਰੀ ਖੇਡਾਂ** ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ ਹੈ।
   - **ਖੇਡਾਂ ਵਤਨ ਪੰਜਾਬ ਦੀਆਂ:** ਅਗਸਤ **2022** ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਸਟੇਡੀਅਮ, ਜਲੰਧਰ ਤੋਂ ਮੁੱਖ ਮੰਤਰੀ ਭਗਵੰਤ ਸਿੰਘ ਮਾਨ ਦੁਆਰਾ ਸ਼ੁਰੂ ਕੀਤਾ ਗਿਆ ਸੂਬਾ ਪੱਧਰੀ ਖੇਡ ਮਹਾਂਕੁੰਭ।
   - **ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਪੁਰਸਕਾਰ:** **ਪੰਜਾਬ ਸਰਕਾਰ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਖੇਡ ਪੁਰਸਕਾਰ**, ਜਿਸ ਦੀ ਸ਼ੁਰੂਆਤ **1978** ਵਿੱਚ ਹੋਈ।

2. **ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਆਫ਼ ਸਪੋਰਟਸ (NSNIS), ਪਟਿਆਲਾ ਅਤੇ MAKA ਟਰਾਫੀ:**
   - **NSNIS ਪਟਿਆਲਾ ("ਭਾਰਤੀ ਖੇਡਾਂ ਦਾ ਮੱਕਾ"):** ਏਸ਼ੀਆ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਖੇਡ ਸੰਸਥਾ, ਜਿਸ ਦੀ ਸਥਾਪਨਾ **7 ਮਈ 1961** ਨੂੰ ਪਟਿਆਲਾ ਦੇ ਇਤਿਹਾਸਕ **ਓਲਡ ਮੋਤੀ ਬਾਗ਼ ਪੈਲੇਸ** ਵਿੱਚ ਹੋਈ।
   - **ਮੌਲਾਨਾ ਅਬੁਲ ਕਲਾਮ ਆਜ਼ਾਦ (MAKA) ਟਰਾਫੀ (1956–57):** ਅੰਤਰ-ਯੂਨੀਵਰਸਿਟੀ ਖੇਡਾਂ ਵਿੱਚ ਸਰਵੋਤਮ ਪ੍ਰਦਰਸ਼ਨ ਕਰਨ ਵਾਲੀ ਯੂਨੀਵਰਸਿਟੀ ਨੂੰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ। **ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ (GNDU), ਅੰਮ੍ਰਿਤਸਰ** ਨੇ ਇਹ ਟਰਾਫੀ **ਰਿਕਾਰਡ 25 ਤੋਂ ਵੱਧ ਵਾਰ** ਜਿੱਤੀ ਹੈ, ਅਤੇ **ਪੰਜਾਬੀ ਯੂਨੀਵਰਸਿਟੀ, ਪਟਿਆਲਾ** ਤੇ **ਪੰਜਾਬ ਯੂਨੀਵਰਸਿਟੀ, ਚੰਡੀਗੜ੍ਹ** ਵੀ ਇਸ ਦੀਆਂ ਪ੍ਰਮੁੱਖ ਜੇਤੂ ਰਹੀਆਂ ਹਨ!

---

### [Level A: Advanced — ਖੇਡ ਟਰਾਫੀਆਂ, ਕੱਪ ਅਤੇ ਰਾਸ਼ਟਰੀ ਖੇਡ ਪੁਰਸਕਾਰਾਂ ਦੀ ਸਾਰਣੀ]
1. **ਪ੍ਰਮੁੱਖ ਖੇਡ ਟਰਾਫੀਆਂ ਅਤੇ ਕੱਪ (Sports Trophies & Cups):**
   | ਖੇਡ (Sport) | ਪ੍ਰਮੁੱਖ ਰਾਸ਼ਟਰੀ ਅਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਟਰਾਫੀਆਂ / ਕੱਪ |
   |---|---|
   | **ਹਾਕੀ (Hockey)** | **ਆਗਾ ਖਾਨ ਕੱਪ**, **ਬੇਟਨ ਕੱਪ** (1895 — ਸਭ ਤੋਂ ਪੁਰਾਣਾ), **ਸੁਲਤਾਨ ਅਜ਼ਲਾਨ ਸ਼ਾਹ ਕੱਪ** (ਮਲੇਸ਼ੀਆ), **ਰੰਗਾਸਵਾਮੀ ਕੱਪ**, **ਧਿਆਨ ਚੰਦ ਟਰਾਫੀ**, **ਲੇਡੀ ਰਤਨ ਟਾਟਾ ਟਰਾਫੀ** (ਮਹਿਲਾ)। |
   | **ਫੁੱਟਬਾਲ (Football)** | **ਡੂਰੰਡ ਕੱਪ** (**1888 ਸ਼ਿਮਲਾ** — **ਏਸ਼ੀਆ ਦਾ ਸਭ ਤੋਂ ਪੁਰਾਣਾ ਫੁੱਟਬਾਲ ਟੂਰਨਾਮੈਂਟ**), **ਸੰਤੋਸ਼ ਟਰਾਫੀ** (ਰਾਸ਼ਟਰੀ ਚੈਂਪੀਅਨਸ਼ਿਪ), **ਰੋਵਰਜ਼ ਕੱਪ**, **ਸੁਬਰਤੋ ਕੱਪ**। |
   | **ਕ੍ਰਿਕਟ (Cricket)** | **ਰਣਜੀ ਟਰਾਫੀ** (1934), **ਇਰਾਨੀ ਕੱਪ**, **ਦਲੀਪ ਟਰਾਫੀ**, **ਵਿਜੇ ਹਜ਼ਾਰੇ ਟਰਾਫੀ** (50-ਓਵਰ), **ਸਈਅਦ ਮੁਸ਼ਤਾਕ ਅਲੀ ਟਰਾਫੀ** (T20), **ਦੇਵਧਰ ਟਰਾਫੀ**, **ਐਸ਼ੇਜ਼ ਸੀਰੀਜ਼**। |
   | **ਬੈਡਮਿੰਟਨ (Badminton)** | **ਥਾਮਸ ਕੱਪ** (ਪੁਰਸ਼ ਵਿਸ਼ਵ ਟੀਮ — **ਭਾਰਤ ਨੇ 2022 ਵਿੱਚ ਪਹਿਲੀ ਵਾਰ ਜਿੱਤਿਆ**), **ਉਬੇਰ ਕੱਪ** (ਮਹਿਲਾ ਵਿਸ਼ਵ ਟੀਮ), **ਸੁਦੀਰਮਨ ਕੱਪ** (ਮਿਕਸਡ ਟੀਮ), **ਨਾਰੰਗ ਕੱਪ**। |
   | **ਲਾਨ ਟੈਨਿਸ (Lawn Tennis)** | **ਡੇਵਿਸ ਕੱਪ** (ਪੁਰਸ਼), **ਬਿਲੀ ਜੀਨ ਕਿੰਗ ਕੱਪ** (ਮਹਿਲਾ), **4 ਗ੍ਰੈਂਡ ਸਲੈਮ:** 1. ਆਸਟ੍ਰੇਲੀਅਨ ਓਪਨ (Hard), 2. **ਫਰੈਂਚ ਓਪਨ (Clay / ਮਿੱਟੀ ਦਾ ਕੋਰਟ)**, 3. **ਵਿੰਬਲਡਨ (Grass / ਘਾਹ ਦਾ ਕੋਰਟ — ਸਭ ਤੋਂ ਪੁਰਾਣਾ 1877)**, 4. ਯੂ.ਐਸ. ਓਪਨ (Hard)। |
   | **ਗੋਲਫ ਅਤੇ ਪੋਲੋ** | **ਗੋਲਫ:** **ਰਾਈਡਰ ਕੱਪ**, **ਵਾਕਰ ਕੱਪ**। **ਪੋਲੋ:** **ਏਜ਼ਰਾ ਕੱਪ**, **ਰਾਧਾ ਮੋਹਨ ਕੱਪ**। **ਰੋਇੰਗ (ਕਿਸ਼ਤੀ ਦੌੜ):** **ਵੈਲਿੰਗਟਨ ਟਰਾਫੀ**। |

2. **ਭਾਰਤ ਦੇ ਰਾਸ਼ਟਰੀ ਖੇਡ ਪੁਰਸਕਾਰ:**
   - **ਮੇਜਰ ਧਿਆਨ ਚੰਦ ਖੇਲ ਰਤਨ ਪੁਰਸਕਾਰ (1991–92):** ਭਾਰਤ ਦਾ **ਸਭ ਤੋਂ ਉੱਚਾ ਖੇਡ ਪੁਰਸਕਾਰ** (ਪਹਿਲੇ ਜੇਤੂ: **ਵਿਸ਼ਵਨਾਥਨ ਆਨੰਦ**)। **29 ਅਗਸਤ** ਨੂੰ ਮੇਜਰ ਧਿਆਨ ਚੰਦ ਦੇ ਜਨਮ ਦਿਨ ਤੇ **ਰਾਸ਼ਟਰੀ ਖੇਡ ਦਿਵਸ** ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।
   - **ਅਰਜੁਨ ਪੁਰਸਕਾਰ:** **1961** ਵਿੱਚ ਸ਼ੁਰੂ | **ਦਰੋਣਾਚਾਰੀਆ ਪੁਰਸਕਾਰ (ਕੋਚਾਂ ਲਈ):** **1985** ਵਿੱਚ ਸ਼ੁਰੂ।`,
            hi: `### [Level B: Basic — ओलंपिक इतिहास, भारतीय हॉकी का स्वर्णिम युग एवं पंजाब के महान खिलाड़ी]
1. **आधुनिक ओलंपिक, एशियाई खेल एवं राष्ट्रमंडल खेल:**
   - **आधुनिक ओलंपिक खेल:** **1896 में एथेंस (यूनान)** से **बैरन पियरे डी कुबर्टिन** द्वारा शुरू किए गए; अंतर्राष्ट्रीय ओलंपिक समिति (**IOC**) का मुख्यालय **लुसाने (स्विट्ज़रलैंड)** में है।
   - **राष्ट्रमंडल खेल (CWG):** **1930 में हैमिल्टन (कनाडा)** में शुरू हुए (2010 में नई दिल्ली, भारत में आयोजित)। **एशियाई खेल:** **1951 में नई दिल्ली** से शुरू हुए।
   - **भारतीय पुरुष हॉकी का ओलंपिक इतिहास (कुल 13 पदक = 8 स्वर्ण + 1 रजत + 4 कांस्य):**
     - **8 ओलंपिक स्वर्ण पदक (Gold Medals):** **1928** (एम्स्टर्डम), **1932** (लॉस एंजिल्स), **1936** (बर्लिन — कप्तान मेजर ध्यानचंद), **1948** (लंदन — स्वतंत्र भारत का पहला स्वर्ण), **1952** (हेलसिंकी), **1956** (मेलबर्न), **1964** (टोक्यो), **1980** (मॉस्को)।
     - **टोक्यो 2020 एवं पेरिस 2024 कांस्य पदक:** जालंधर के **मनप्रीत सिंह** की कप्तानी में **2020 टोक्यो ओलंपिक** में तथा अमृतसर के **हरमनप्रीत सिंह ('सरपंच')** की कप्तानी में **2024 पेरिस ओलंपिक** में लगातार दो कांस्य पदक जीते!

2. **पंजाब एवं भारत के महान खिलाड़ियों की मास्टर तालिका:**
   | खिलाड़ी का नाम | खेल एवं संबंध | ऐतिहासिक उपलब्धियाँ एवं परीक्षा हेतु तथ्य |
   |---|---|---|
   | **अभिनव बिंद्रा** | निशानेबाज़ी ($10\\text{ m}$ एयर राइफल) — ज़ीरकपुर/मोहाली, पंजाब | **2008 बीजिंग ओलंपिक** में **व्यक्तिगत ओलंपिक स्वर्ण पदक जीतने वाले प्रथम भारतीय**। आत्मकथा: ***A Shot at History***। |
   | **नीरज चोपड़ा** | भाला फेंक (Javelin Throw) — पानीपत | **2020 टोक्यो ओलंपिक** में **$87.58\\text{ m}$** थ्रो के साथ स्वर्ण पदक (**7 अगस्त = राष्ट्रीय भाला फेंक दिवस**) और **2024 पेरिस ओलंपिक** में रजत पदक ($89.45\\text{ m}$)। |
   | **मिल्खा सिंह ("द फ्लाइंग सिख")** | धावक ($200\\text{ m} / 400\\text{ m}$) — चंडीगढ़/पंजाब | **1958 कार्डिफ़ राष्ट्रमंडल खेलों** में स्वर्ण जीतने वाले पहले भारतीय एथलीट; 4 एशियाई खेल स्वर्ण; **1960 रोम ओलंपिक** की $400\\text{ m}$ दौड़ में चौथा स्थान। *'फ्लाइंग सिख'* की उपाधि 1960 में **जनरल अयूब खान** ने दी। आत्मकथा: ***The Race of My Life***। |
   | **बलबीर सिंह सीनियर (दोसांझ)** | हॉकी — हरिपुर खालसा (जालंधर) | **3 बार ओलंपिक स्वर्ण पदक विजेता (1948, 1952, 1956 — कप्तान)**; **1952 हेलसिंकी ओलंपिक फाइनल में नीदरलैंड के विरुद्ध 5 गोल** करने का अटूट विश्व रिकॉर्ड! **पद्म श्री (1957)** पाने वाले पहले खिलाड़ी। आत्मकथा: ***The Golden Hat Trick***। |
   | **ऊधम सिंह कुलार** | हॉकी — संसारपुर (जालंधर) | **4 ओलंपिक पदक** (3 स्वर्ण: 1952, 1956, 1964 + 1 रजत: 1960)। जालंधर के गाँव **संसारपुर को 'भारतीय हॉकी की नर्सरी / मक्का'** कहा जाता है। |
   | **सुरजीत सिंह रंधावा एवं परगट सिंह** | हॉकी — बटाला / जालंधर | **सुरजीत सिंह** (1975 विश्व कप विजेता — जालंधर का सुरजीत हॉकी स्टेडियम उनके नाम पर है); **परगट सिंह** (मिठापुर, जालंधर — 1992 बार्सिलोना व 1996 अटलांटा ओलंपिक में कप्तान)। |
   | **युवराज सिंह, हरभजन सिंह, शुभमन गिल, अर्शदीप सिंह, हरमनप्रीत कौर** | क्रिकेट — पंजाब | **युवराज सिंह** (2011 विश्व कप के प्लेयर ऑफ़ द टूर्नामेंट; आत्मकथा ***The Test of My Life***); **हरभजन सिंह** (टेस्ट क्रिकेट में हैट्रिक लेने वाले पहले भारतीय, 2001); **हरमनप्रीत कौर** (मोगा — भारतीय महिला क्रिकेट टीम की कप्तान)। |

---

### [Level I: Intermediate — पंजाब के पारंपरिक खेल, ग्रामीण ओलंपिक एवं खेल संस्थान]
1. **पंजाब के पारंपरिक खेल एवं प्रमुख खेल उत्सव:**
   - **पंजाब का राज्य खेल (State Game of Punjab):** **कबड्डी (सर्कल स्टाइल / पंजाबी कबड्डी)** — $22\\text{ m}$ त्रिज्या के गोलाकार मैदान में खेली जाती है।
   - **किला रायपुर खेल उत्सव ("पंजाब का ग्रामीण ओलंपिक"):** **लुधियाना** ज़िले के **किला रायपुर** गाँव में **1933** से प्रतिवर्ष फरवरी में आयोजित किया जाता है (संस्थापक: **इंदर सिंह ग्रेवाल**)।
   - **गतका (Gatka):** श्री गुरु हरगोबिंद साहिब जी और श्री गुरु गोबिंद सिंह जी से संबंधित सिख मार्शल आर्ट; इसे **खेलो इंडिया यूथ गेम्स** और **राष्ट्रीय खेलों** में शामिल किया गया है।
   - **खेडां वतन पंजाब दियां:** अगस्त **2022** में गुरु गोबिंद सिंह स्टेडियम, जालंधर से मुख्यमंत्री भगवंत सिंह मान द्वारा शुरू किया गया राज्य स्तरीय खेल महाकुंभ।
   - **महाराजा रणजीत सिंह पुरस्कार:** **पंजाब सरकार का सर्वोच्च खेल पुरस्कार**, जिसकी शुरुआत **1978** में हुई।

2. **नेताजी सुभाष राष्ट्रीय क्रीड़ा संस्थान (NSNIS), पटियाला एवं MAKA ट्रॉफी:**
   - **NSNIS पटियाला ("भारतीय खेलों का मक्का"):** एशिया का सबसे बड़ा खेल संस्थान, जिसकी स्थापना **7 मई 1961** को पटियाला के ऐतिहासिक **ओल्ड मोती बाग़ पैलेस** में हुई।
   - **मौलाना अबुल कलाम आज़ाद (MAKA) ट्रॉफी (1956–57):** अंतर-विश्वविद्यालय खेलों में सर्वश्रेष्ठ प्रदर्शन करने वाले विश्वविद्यालय को दी जाती है। **गुरु नानक देव विश्वविद्यालय (GNDU), अमृतसर** ने यह ट्रॉफी **रिकॉर्ड 25 से अधिक बार** जीती है, तथा **पंजाबी विश्वविद्यालय, पटियाला** व **पंजाब विश्वविद्यालय, चंडीगढ़** भी इसके प्रमुख विजेता रहे हैं!

---

### [Level A: Advanced — खेल ट्रॉफियाँ, कप एवं राष्ट्रीय खेल पुरस्कारों की तालिका]
1. **प्रमुख खेल ट्रॉफियाँ एवं कप (Sports Trophies & Cups):**
   | खेल (Sport) | प्रमुख राष्ट्रीय एवं अंतर्राष्ट्रीय ट्रॉफियाँ / कप |
   |---|---|
   | **हॉकी (Hockey)** | **आगा खान कप**, **बेटन कप** (1895 — सबसे पुराना), **सुल्तान अज़लन शाह कप** (मलेशिया), **रंगास्वामी कप**, **ध्यानचंद ट्रॉफी**, **लेडी रतन टाटा ट्रॉफी** (महिला)। |
   | **फुटबॉल (Football)** | **डूरंड कप** (**1888 शिमला** — **एशिया का सबसे पुराना फुटबॉल टूर्नामेंट**), **संतोष ट्रॉफी** (राष्ट्रीय चैम्पियनशिप), **रोवर्स कप**, **सुब्रतो कप**। |
   | **क्रिकेट (Cricket)** | **रणजी ट्रॉफी** (1934), **ईरानी कप**, **दलीप ट्रॉफी**, **विजय हज़ारे ट्रॉफी** (50-ओवर), **सैयद मुश्ताक अली ट्रॉफी** (T20), **देवधर ट्रॉफी**, **एशेज सीरीज़**। |
   | **बैडमिंटन (Badminton)** | **थॉमस कप** (पुरुष विश्व टीम — **भारत ने 2022 में पहली बार जीता**), **उबेर कप** (महिला विश्व टीम), **सुदीरमन कप** (मिश्रित टीम), **नारंग कप**। |
   | **लॉन टेनिस (Lawn Tennis)** | **डेविस कप** (पुरुष), **बिली जीन किंग कप** (महिला), **4 ग्रैंड स्लैम:** 1. ऑस्ट्रेलियन ओपन (Hard), 2. **फ्रेंच ओपन (Clay / मिट्टी का कोर्ट)**, 3. **विंबलडन (Grass / घास का कोर्ट — सबसे पुराना 1877)**, 4. यू.एस. ओपन (Hard)। |
   | **गोल्फ एवं पोलो** | **गोल्फ:** **राइडर कप**, **वॉकर कप**। **पोलो:** **एज़रा कप**, **राधा मोहन कप**। **रोइंग (नौकायन):** **वेलिंगटन ट्रॉफी**। |

2. **भारत के राष्ट्रीय खेल पुरस्कार:**
   - **मेजर ध्यानचंद खेल रत्न पुरस्कार (1991–92):** भारत का **सर्वोच्च खेल सम्मान** (प्रथम विजेता: **विश्वनाथन आनंद**)। **29 अगस्त** को मेजर ध्यानचंद के जन्मदिवस पर **राष्ट्रीय खेल दिवस** मनाया जाता है।
   - **अर्जुन पुरस्कार:** **1961** में शुरू | **द्रोणाचार्य पुरस्कार (प्रशिक्षकों हेतु):** **1985** में शुरू।`
        },
        keyNotes: {
            en: [
                'India has won 8 Olympic Gold medals in Men’s Field Hockey (1928, 1932, 1936, 1948, 1952, 1956, 1964, 1980) plus recent consecutive Bronze medals at Tokyo 2020 (Capt. Manpreet Singh) and Paris 2024 (Capt. Harmanpreet Singh).',
                'Abhinav Bindra (from Punjab) won India’s first individual Olympic Gold medal in 10m Air Rifle at the 2008 Beijing Olympics; Neeraj Chopra won India’s second individual Olympic Gold in Javelin Throw (87.58 m) at Tokyo 2020 and Silver at Paris 2024.',
                'Balbir Singh Sr. (3-time Olympic Gold medallist: 1948, 1952, 1956) holds the world record for scoring 5 goals in an Olympic Men’s Hockey final (1952 Helsinki vs Netherlands); Milkha Singh ("The Flying Sikh") won India’s first CWG Athletics Gold at 1958 Cardiff.',
                'Circle Style Kabaddi is the official State Game of Punjab; Qila Raipur Sports Festival in Ludhiana (started 1933 by Inder Singh Grewal) is world-famous as the "Rural Olympics of Punjab"; Maharaja Ranjit Singh Award (1978) is Punjab’s highest sports award.',
                'Netaji Subhas National Institute of Sports (NSNIS), Asia’s largest sports institute, was established on 7 May 1961 at Old Moti Bagh Palace, Patiala; Guru Nanak Dev University (GNDU), Amritsar has won the Maulana Abul Kalam Azad (MAKA) Trophy a record 25+ times.',
                'Trophy Classics: Durand Cup (1888) & Santosh Trophy -> Football; Aga Khan Cup, Beighton Cup & Sultan Azlan Shah Cup -> Hockey; Thomas Cup (Men) & Uber Cup (Women) -> Badminton; Ranji, Irani, Duleep & Vijay Hazare Trophies -> Cricket.'
            ],
            pa: [
                'ਭਾਰਤ ਨੇ ਪੁਰਸ਼ ਹਾਕੀ ਵਿੱਚ 8 ਓਲੰਪਿਕ ਸੋਨ ਤਗਮੇ (1928, 1932, 1936, 1948, 1952, 1956, 1964, 1980) ਅਤੇ ਟੋਕੀਓ 2020 (ਕਪਤਾਨ ਮਨਪ੍ਰੀਤ ਸਿੰਘ) ਤੇ ਪੈਰਿਸ 2024 (ਕਪਤਾਨ ਹਰਮਨਪ੍ਰੀਤ ਸਿੰਘ) ਵਿੱਚ ਲਗਾਤਾਰ ਦੋ ਕਾਂਸੀ ਤਗਮੇ ਜਿੱਤੇ ਹਨ।',
                'ਅਭਿਨਵ ਬਿੰਦਰਾ (ਪੰਜਾਬ) ਨੇ 2008 ਬੀਜਿੰਗ ਓਲੰਪਿਕ ਵਿੱਚ 10m ਏਅਰ ਰਾਈਫਲ ਵਿੱਚ ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਵਿਅਕਤੀਗਤ ਓਲੰਪਿਕ ਸੋਨ ਤਗਮਾ ਜਿੱਤਿਆ; ਨੀਰਜ ਚੋਪੜਾ ਨੇ ਟੋਕੀਓ 2020 ਵਿੱਚ ਜੈਵਲਿਨ ਥ੍ਰੋ (87.58 m) ਵਿੱਚ ਸੋਨ ਅਤੇ ਪੈਰਿਸ 2024 ਵਿੱਚ ਚਾਂਦੀ ਦਾ ਤਗਮਾ ਜਿੱਤਿਆ।',
                'ਬਲਬੀਰ ਸਿੰਘ ਸੀਨੀਅਰ (1948, 1952, 1956 ਸੋਨ ਤਗਮਾ ਜੇਤੂ) ਦੇ ਨਾਂ 1952 ਹੇਲਸਿੰਕੀ ਓਲੰਪਿਕ ਫਾਈਨਲ ਵਿੱਚ 5 ਗੋਲ ਕਰਨ ਦਾ ਵਿਸ਼ਵ ਰਿਕਾਰਡ ਹੈ; ਮਿਲਖਾ ਸਿੰਘ ("ਫਲਾਇੰਗ ਸਿੱਖ") ਨੇ 1958 ਕਾਰਡਿਫ ਰਾਸ਼ਟਰਮੰਡਲ ਖੇਡਾਂ ਵਿੱਚ ਸੋਨ ਤਗਮਾ ਜਿੱਤਿਆ।',
                'ਸਰਕਲ ਸਟਾਈਲ ਕਬੱਡੀ ਪੰਜਾਬ ਦੀ ਰਾਜ ਖੇਡ ਹੈ; ਕਿਲਾ ਰਾਏਪੁਰ ਖੇਡ ਮੇਲਾ (ਲੁਧਿਆਣਾ, 1933) "ਪੰਜਾਬ ਦੀਆਂ ਪੇਂਡੂ ਓਲੰਪਿਕ ਖੇਡਾਂ" ਵਜੋਂ ਪ੍ਰਸਿੱਧ ਹੈ; ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਪੁਰਸਕਾਰ (1978) ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਖੇਡ ਪੁਰਸਕਾਰ ਹੈ।',
                'ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਆਫ਼ ਸਪੋਰਟਸ (NSNIS) ਦੀ ਸਥਾਪਨਾ 7 ਮਈ 1961 ਨੂੰ ਓਲਡ ਮੋਤੀ ਬਾਗ਼ ਪੈਲੇਸ, ਪਟਿਆਲਾ ਵਿਖੇ ਹੋਈ; ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ (GNDU), ਅੰਮ੍ਰਿਤਸਰ ਨੇ ਮੌਲਾਨਾ ਅਬੁਲ ਕਲਾਮ ਆਜ਼ਾਦ (MAKA) ਟਰਾਫੀ ਰਿਕਾਰਡ 25+ ਵਾਰ ਜਿੱਤੀ ਹੈ।',
                'ਪ੍ਰਮੁੱਖ ਕੱਪ: ਡੂਰੰਡ ਕੱਪ (1888) ਤੇ ਸੰਤੋਸ਼ ਟਰਾਫੀ -> ਫੁੱਟਬਾਲ; ਆਗਾ ਖਾਨ ਕੱਪ, ਬੇਟਨ ਕੱਪ ਤੇ ਸੁਲਤਾਨ ਅਜ਼ਲਾਨ ਸ਼ਾਹ ਕੱਪ -> ਹਾਕੀ; ਥਾਮਸ ਕੱਪ (ਪੁਰਸ਼) ਤੇ ਉਬੇਰ ਕੱਪ (ਮਹਿਲਾ) -> ਬੈਡਮਿੰਟਨ; ਰਣਜੀ, ਇਰਾਨੀ, ਦਲੀਪ ਤੇ ਵਿਜੇ ਹਜ਼ਾਰੇ ਟਰਾਫੀ -> ਕ੍ਰਿਕਟ।'
            ],
            hi: [
                'भारत ने पुरुष हॉकी में 8 ओलंपिक स्वर्ण पदक (1928, 1932, 1936, 1948, 1952, 1956, 1964, 1980) तथा टोक्यो 2020 (कप्तान मनप्रीत सिंह) व पेरिस 2024 (कप्तान हरमनप्रीत सिंह) में लगातार दो कांस्य पदक जीते हैं।',
                'अभिनव बिंद्रा (पंजाब) ने 2008 बीजिंग ओलंपिक में 10m एयर राइफल में भारत का पहला व्यक्तिगत ओलंपिक स्वर्ण पदक जीता; नीरज चोपड़ा ने टोक्यो 2020 में भाला फेंक (87.58 m) में स्वर्ण और पेरिस 2024 में रजत पदक जीता।',
                'बलबीर सिंह सीनियर (1948, 1952, 1956 स्वर्ण पदक विजेता) के नाम 1952 हेलसिंकी ओलंपिक फाइनल में 5 गोल करने का विश्व रिकॉर्ड है; मिल्खा सिंह ("फ्लाइंग सिख") ने 1958 कार्डिफ़ राष्ट्रमंडल खेलों में स्वर्ण पदक जीता।',
                'सर्कल स्टाइल कबड्डी पंजाब का राज्य खेल है; किला रायपुर खेल उत्सव (लुधियाना, 1933) "पंजाब के ग्रामीण ओलंपिक" के रूप में प्रसिद्ध है; महाराजा रणजीत सिंह पुरस्कार (1978) पंजाब का सर्वोच्च खेल पुरस्कार है।',
                'नेताजी सुभाष राष्ट्रीय क्रीड़ा संस्थान (NSNIS) की स्थापना 7 मई 1961 को ओल्ड मोती बाग़ पैलेस, पटियाला में हुई; गुरु नानक देव विश्वविद्यालय (GNDU), अमृतसर ने मौलाना अबुल कलाम आज़ाद (MAKA) ट्रॉफी रिकॉर्ड 25+ बार जीती है।',
                'प्रमुख कप: डूरंड कप (1888) व संतोष ट्रॉफी -> फुटबॉल; आगा खान कप, बेटन कप व सुल्तान अज़लन शाह कप -> हॉकी; थॉमस कप (पुरुष) व उबेर कप (महिला) -> बैडमिंटन; रणजी, ईरानी, दलीप व विजय हज़ारे ट्रॉफी -> क्रिकेट।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Badminton Cup Mnemonic: Thomas Cup = Men’s Team; Uber Cup = Women’s Team; Sudirman Cup = Mixed Team.',
                'Grand Slam Court Surfaces: Australian Open (Hard) -> French Open (Clay) -> Wimbledon (Grass, oldest 1877) -> US Open (Hard).',
                'Sports Autobiographies: Milkha Singh = The Race of My Life; Abhinav Bindra = A Shot at History; Balbir Singh Sr. = The Golden Hat Trick; Yuvraj Singh = The Test of My Life.',
                'Punjab Sports Hubs: NIS -> Patiala (1961, Moti Bagh Palace); Rural Olympics -> Qila Raipur (Ludhiana, 1933); Hockey Nursery & Sports Goods City -> Sansarpur / Jalandhar.',
                'Sports Award Years: MAKA Trophy (1956–57) • Arjuna Award (1961) • Maharaja Ranjit Singh Award (1978) • Dronacharya Award (1985) • Khel Ratna Award (1991–92).'
            ],
            pa: [
                'ਬੈਡਮਿੰਟਨ ਕੱਪ ਟ੍ਰਿਕ: ਥਾਮਸ ਕੱਪ = ਪੁਰਸ਼ ਟੀਮ; ਉਬੇਰ ਕੱਪ = ਮਹਿਲਾ ਟੀਮ; ਸੁਦੀਰਮਨ ਕੱਪ = ਮਿਕਸਡ ਟੀਮ।',
                'ਗ੍ਰੈਂਡ ਸਲੈਮ ਕੋਰਟ: ਆਸਟ੍ਰੇਲੀਅਨ ਓਪਨ (Hard) -> ਫਰੈਂਚ ਓਪਨ (Clay / ਮਿੱਟੀ) -> ਵਿੰਬਲਡਨ (Grass / ਘਾਹ, 1877) -> ਯੂ.ਐਸ. ਓਪਨ (Hard)।',
                'ਖਿਡਾਰੀਆਂ ਦੀਆਂ ਸਵੈ-ਜੀਵਨੀਆਂ: ਮਿਲਖਾ ਸਿੰਘ = The Race of My Life; ਅਭਿਨਵ ਬਿੰਦਰਾ = A Shot at History; ਬਲਬੀਰ ਸਿੰਘ ਸੀਨੀਅਰ = The Golden Hat Trick; ਯੁਵਰਾਜ ਸਿੰਘ = The Test of My Life।',
                'ਪੰਜਾਬ ਖੇਡ ਕੇਂਦਰ: NIS -> ਪਟਿਆਲਾ (1961, ਮੋਤੀ ਬਾਗ਼ ਪੈਲੇਸ); ਪੇਂਡੂ ਓਲੰਪਿਕ -> ਕਿਲਾ ਰਾਏਪੁਰ (ਲੁਧਿਆਣਾ, 1933); ਹਾਕੀ ਦੀ ਨਰਸਰੀ ਤੇ ਖੇਡ ਸਮਾਨ ਦਾ ਸ਼ਹਿਰ -> ਸੰਸਾਰਪੁਰ / ਜਲੰਧਰ।',
                'ਖੇਡ ਪੁਰਸਕਾਰ ਸਾਲ: MAKA ਟਰਾਫੀ (1956–57) • ਅਰਜੁਨ ਪੁਰਸਕਾਰ (1961) • ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਪੁਰਸਕਾਰ (1978) • ਦਰੋਣਾਚਾਰੀਆ ਪੁਰਸਕਾਰ (1985) • ਖੇਲ ਰਤਨ ਪੁਰਸਕਾਰ (1991–92)।'
            ],
            hi: [
                'बैडमिंटन कप ट्रिक: थॉमस कप = पुरुष टीम; उबेर कप = महिला टीम; सुदीरमन कप = मिश्रित टीम।',
                'ग्रैंड स्लैम कोर्ट: ऑस्ट्रेलियन ओपन (Hard) -> फ्रेंच ओपन (Clay / मिट्टी) -> विंबलडन (Grass / घास, 1877) -> यू.एस. ओपन (Hard)।',
                'खिलाड़ियों की आत्मकथाएँ: मिल्खा सिंह = The Race of My Life; अभिनव बिंद्रा = A Shot at History; बलबीर सिंह सीनियर = The Golden Hat Trick; युवराज सिंह = The Test of My Life।',
                'पंजाब खेल केंद्र: NIS -> पटियाला (1961, मोती बाग़ पैलेस); ग्रामीण ओलंपिक -> किला रायपुर (लुधियाना, 1933); हॉकी की नर्सरी व खेल सामग्री का शहर -> संसारपुर / जालंधर।',
                'खेल पुरस्कार वर्ष: MAKA ट्रॉफी (1956–57) • अर्जुन पुरस्कार (1961) • महाराजा रणजीत सिंह पुरस्कार (1978) • द्रोणाचार्य पुरस्कार (1985) • खेल रत्न पुरस्कार (1991–92)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Thinking Milkha Singh won an Olympic medal at the 1960 Rome Olympics. Correction: Milkha Singh finished 4th in the 400m final at the 1960 Rome Olympics (missing Bronze by 0.1 seconds); his historic Gold medals came at the 1958 Cardiff Commonwealth Games and the 1958 & 1962 Asian Games.',
                'Misconception: Confusing Thomas Cup (Badminton Men), Uber Cup (Badminton Women), and Davis Cup (Lawn Tennis Men). Correction: Thomas Cup and Uber Cup are World Team Badminton championships, whereas Davis Cup and Billie Jean King Cup belong to Lawn Tennis.',
                'Misconception: Marking Hockey as the official State Game of Punjab. Correction: Field Hockey is deeply rooted in Punjab, but the official State Game of Punjab is Circle Style Kabaddi (Panjabi Kabaddi).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਇਹ ਸਮਝਣਾ ਕਿ ਮਿਲਖਾ ਸਿੰਘ ਨੇ 1960 ਰੋਮ ਓਲੰਪਿਕ ਵਿੱਚ ਤਗਮਾ ਜਿੱਤਿਆ ਸੀ। ਸੁਧਾਰ: ਮਿਲਖਾ ਸਿੰਘ 1960 ਰੋਮ ਓਲੰਪਿਕ ਦੀ 400m ਫਾਈਨਲ ਦੌੜ ਵਿੱਚ ਚੌਥੇ ਸਥਾਨ ਤੇ ਰਹੇ ਸਨ; ਉਨ੍ਹਾਂ ਨੇ 1958 ਕਾਰਡਿਫ ਰਾਸ਼ਟਰਮੰਡਲ ਖੇਡਾਂ ਅਤੇ 1958 ਤੇ 1962 ਦੀਆਂ ਏਸ਼ੀਆਈ ਖੇਡਾਂ ਵਿੱਚ ਇਤਿਹਾਸਕ ਸੋਨ ਤਗਮੇ ਜਿੱਤੇ ਸਨ।',
                'ਭੁਲੇਖਾ: ਥਾਮਸ ਕੱਪ (ਬੈਡਮਿੰਟਨ ਪੁਰਸ਼), ਉਬੇਰ ਕੱਪ (ਬੈਡਮਿੰਟਨ ਮਹਿਲਾ) ਅਤੇ ਡੇਵਿਸ ਕੱਪ (ਲਾਨ ਟੈਨਿਸ ਪੁਰਸ਼) ਵਿੱਚ ਭੁਲੇਖਾ ਖਾਣਾ। ਸੁਧਾਰ: ਥਾਮਸ ਕੱਪ ਅਤੇ ਉਬੇਰ ਕੱਪ ਬੈਡਮਿੰਟਨ ਨਾਲ ਸਬੰਧਤ ਹਨ, ਜਦਕਿ ਡੇਵਿਸ ਕੱਪ ਲਾਨ ਟੈਨਿਸ ਨਾਲ ਸਬੰਧਤ ਹੈ।',
                'ਭੁਲੇਖਾ: ਹਾਕੀ ਨੂੰ ਪੰਜਾਬ ਦੀ ਸਰਕਾਰੀ ਰਾਜ ਖੇਡ (State Game) ਲਗਾਉਣਾ। ਸੁਧਾਰ: ਪੰਜਾਬ ਦੀ ਸਰਕਾਰੀ ਰਾਜ ਖੇਡ ਸਰਕਲ ਸਟਾਈਲ ਕਬੱਡੀ (ਪੰਜਾਬੀ ਕਬੱਡੀ) ਹੈ।'
            ],
            hi: [
                'भ्रांति: यह सोचना कि मिल्खा सिंह ने 1960 रोम ओलंपिक में पदक जीता था। सुधार: मिल्खा सिंह 1960 रोम ओलंपिक के 400m फाइनल में चौथे स्थान पर रहे थे; उनके ऐतिहासिक स्वर्ण पदक 1958 कार्डिफ़ राष्ट्रमंडल खेलों तथा 1958 व 1962 के एशियाई खेलों में आए थे।',
                'भ्रांति: थॉमस कप (बैडमिंटन पुरुष), उबेर कप (बैडमिंटन महिला) और डेविस कप (लॉन टेनिस पुरुष) में भ्रमित होना। सुधार: थॉमस कप और उबेर कप बैडमिंटन से संबंधित हैं, जबकि डेविस कप लॉन टेनिस से संबंधित है।',
                'भ्रांति: हॉकी को पंजाब का आधिकारिक राज्य खेल (State Game) मानना। सुधार: पंजाब का आधिकारिक राज्य खेल सर्कल स्टाइल कबड्डी (पंजाबी कबड्डी) है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — Punjab Olympic & Sports Institutions] Answer the following: (a) Where and in which year was the Netaji Subhas National Institute of Sports (NSNIS) established? (b) Which village in Ludhiana district hosts the famous "Rural Olympics of Punjab"? (c) Which university in Punjab has won the Maulana Abul Kalam Azad (MAKA) Trophy the maximum number of times?',
                    pa: '[Easy — ਪੰਜਾਬ ਦੀਆਂ ਖੇਡ ਸੰਸਥਾਵਾਂ ਅਤੇ ਮੇਲੇ] ਦੱਸੋ: (a) ਨੇਤਾਜੀ ਸੁਭਾਸ਼ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਆਫ਼ ਸਪੋਰਟਸ (NSNIS) ਦੀ ਸਥਾਪਨਾ ਕਿੱਥੇ ਅਤੇ ਕਿਸ ਸਾਲ ਹੋਈ? (b) ਲੁਧਿਆਣਾ ਜ਼ਿਲ੍ਹੇ ਦੇ ਕਿਸ ਪਿੰਡ ਵਿੱਚ ਮਸ਼ਹੂਰ "ਪੇਂਡੂ ਓਲੰਪਿਕ ਖੇਡਾਂ" ਹੁੰਦੀਆਂ ਹਨ? (c) ਪੰਜਾਬ ਦੀ ਕਿਸ ਯੂਨੀਵਰਸਿਟੀ ਨੇ ਮੌਲਾਨਾ ਅਬੁਲ ਕਲਾਮ ਆਜ਼ਾਦ (MAKA) ਟਰਾਫੀ ਸਭ ਤੋਂ ਵੱਧ ਵਾਰ ਜਿੱਤੀ ਹੈ?',
                    hi: '[Easy — पंजाब के खेल संस्थान एवं उत्सव] बताइए: (a) नेताजी सुभाष राष्ट्रीय क्रीड़ा संस्थान (NSNIS) की स्थापना कहाँ और किस वर्ष हुई? (b) लुधियाना ज़िले के किस गाँव में प्रसिद्ध "ग्रामीण ओलंपिक" आयोजित होते हैं? (c) पंजाब के किस विश्वविद्यालय ने मौलाना अबुल कलाम आज़ाद (MAKA) ट्रॉफी सर्वाधिक बार जीती है?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: NSNIS was established on 7 May 1961 at the historic Old Moti Bagh Palace in Patiala (Asia’s largest sports institute).',
                        'Step 2: Qila Raipur village in Ludhiana district hosts the annual Qila Raipur Sports Festival ("Rural Olympics of Punjab") since 1933.',
                        'Step 3: Guru Nanak Dev University (GNDU), Amritsar has won the MAKA Trophy a record 25+ times.'
                    ],
                    pa: [
                        'Step 1: NSNIS ਦੀ ਸਥਾਪਨਾ 7 ਮਈ 1961 ਨੂੰ ਪਟਿਆਲਾ ਦੇ ਇਤਿਹਾਸਕ ਓਲਡ ਮੋਤੀ ਬਾਗ਼ ਪੈਲੇਸ ਵਿਖੇ ਹੋਈ।',
                        'Step 2: ਲੁਧਿਆਣਾ ਜ਼ਿਲ੍ਹੇ ਦੇ ਪਿੰਡ ਕਿਲਾ ਰਾਏਪੁਰ ਵਿਖੇ 1933 ਤੋਂ ਹਰ ਸਾਲ ਪੇਂਡੂ ਓਲੰਪਿਕ ਖੇਡਾਂ ਕਰਵਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
                        'Step 3: ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ (GNDU), ਅੰਮ੍ਰਿਤਸਰ ਨੇ MAKA ਟਰਾਫੀ ਰਿਕਾਰਡ 25 ਤੋਂ ਵੱਧ ਵਾਰ ਜਿੱਤੀ ਹੈ।'
                    ],
                    hi: [
                        'Step 1: NSNIS की स्थापना 7 मई 1961 को पटियाला के ऐतिहासिक ओल्ड मोती बाग़ पैलेस में हुई।',
                        'Step 2: लुधियाना ज़िले के किला रायपुर गाँव में 1933 से प्रतिवर्ष ग्रामीण ओलंपिक खेल आयोजित किए जाते हैं।',
                        'Step 3: गुरु नानक देव विश्वविद्यालय (GNDU), अमृतसर ने MAKA ट्रॉफी रिकॉर्ड 25 से अधिक बार जीती है।'
                    ]
                },
                finalAnswer: {
                    en: '(a) Patiala, 1961; (b) Qila Raipur (Ludhiana); (c) Guru Nanak Dev University (GNDU), Amritsar',
                    pa: '(a) ਪਟਿਆਲਾ, 1961; (b) ਕਿਲਾ ਰਾਏਪੁਰ (ਲੁਧਿਆਣਾ); (c) ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ (GNDU), ਅੰਮ੍ਰਿਤਸਰ',
                    hi: '(a) पटियाला, 1961; (b) किला रायपुर (लुधियाना); (c) गुरु नानक देव विश्वविद्यालय (GNDU), अमृतसर'
                }
            },
            {
                problem: {
                    en: '[Medium — Trophies & Olympic Records] Identify the sport associated with each trophy: (1) Durand Cup & Santosh Trophy, (2) Aga Khan Cup & Sultan Azlan Shah Cup, (3) Thomas Cup & Uber Cup, (4) Irani Cup & Vijay Hazare Trophy.',
                    pa: '[Medium — ਖੇਡ ਟਰਾਫੀਆਂ ਦੀ ਪਛਾਣ] ਹੇਠ ਲਿਖੀਆਂ ਟਰਾਫੀਆਂ ਨਾਲ ਸਬੰਧਤ ਖੇਡ ਦੱਸੋ: (1) ਡੂਰੰਡ ਕੱਪ ਅਤੇ ਸੰਤੋਸ਼ ਟਰਾਫੀ, (2) ਆਗਾ ਖਾਨ ਕੱਪ ਅਤੇ ਸੁਲਤਾਨ ਅਜ਼ਲਾਨ ਸ਼ਾਹ ਕੱਪ, (3) ਥਾਮਸ ਕੱਪ ਅਤੇ ਉਬੇਰ ਕੱਪ, (4) ਇਰਾਨੀ ਕੱਪ ਅਤੇ ਵਿਜੇ ਹਜ਼ਾਰੇ ਟਰਾਫੀ।',
                    hi: '[Medium — खेल ट्रॉफियों की पहचान] निम्नलिखित ट्रॉफियों से संबंधित खेल बताइए: (1) डूरंड कप एवं संतोष ट्रॉफी, (2) आगा खान कप एवं सुल्तान अज़लन शाह कप, (3) थॉमस कप एवं उबेर कप, (4) ईरानी कप एवं विजय हज़ारे ट्रॉफी।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Durand Cup (oldest in Asia, 1888) and Santosh Trophy are premier Football tournaments in India.',
                        'Step 2: Aga Khan Cup, Beighton Cup, and Sultan Azlan Shah Cup are associated with Field Hockey.',
                        'Step 3: Thomas Cup (Men) and Uber Cup (Women) are World Team Badminton championships.',
                        'Step 4: Ranji Trophy, Irani Cup, Duleep Trophy, and Vijay Hazare Trophy are domestic Cricket tournaments in India.'
                    ],
                    pa: [
                        'Step 1: ਡੂਰੰਡ ਕੱਪ (1888) ਅਤੇ ਸੰਤੋਸ਼ ਟਰਾਫੀ ਫੁੱਟਬਾਲ ਦੇ ਪ੍ਰਮੁੱਖ ਟੂਰਨਾਮੈਂਟ ਹਨ।',
                        'Step 2: ਆਗਾ ਖਾਨ ਕੱਪ, ਬੇਟਨ ਕੱਪ ਅਤੇ ਸੁਲਤਾਨ ਅਜ਼ਲਾਨ ਸ਼ਾਹ ਕੱਪ ਹਾਕੀ ਨਾਲ ਸਬੰਧਤ ਹਨ।',
                        'Step 3: ਥਾਮਸ ਕੱਪ (ਪੁਰਸ਼) ਅਤੇ ਉਬੇਰ ਕੱਪ (ਮਹਿਲਾ) ਬੈਡਮਿੰਟਨ ਦੀਆਂ ਵਿਸ਼ਵ ਚੈਂਪੀਅਨਸ਼ਿਪਾਂ ਹਨ।',
                        'Step 4: ਰਣਜੀ ਟਰਾਫੀ, ਇਰਾਨੀ ਕੱਪ, ਦਲੀਪ ਟਰਾਫੀ ਅਤੇ ਵਿਜੇ ਹਜ਼ਾਰੇ ਟਰਾਫੀ ਭਾਰਤੀ ਘਰੇਲੂ ਕ੍ਰਿਕਟ ਟੂਰਨਾਮੈਂਟ ਹਨ।'
                    ],
                    hi: [
                        'Step 1: डूरंड कप (1888) और संतोष ट्रॉफी फुटबॉल के प्रमुख टूर्नामेंट हैं।',
                        'Step 2: आगा खान कप, बेटन कप और सुल्तान अज़लन शाह कप हॉकी से संबंधित हैं।',
                        'Step 3: थॉमस कप (पुरुष) और उबेर कप (महिला) बैडमिंटन की विश्व टीम चैम्पियनशिप हैं।',
                        'Step 4: रणजी ट्रॉफी, ईरानी कप, दलीप ट्रॉफी और विजय हज़ारे ट्रॉफी भारतीय घरेलू क्रिकेट टूर्नामेंट हैं।'
                    ]
                },
                finalAnswer: {
                    en: '(1) Football; (2) Field Hockey; (3) Badminton; (4) Cricket',
                    pa: '(1) ਫੁੱਟਬਾਲ; (2) ਹਾਕੀ; (3) ਬੈਡਮਿੰਟਨ; (4) ਕ੍ਰਿਕਟ',
                    hi: '(1) फुटबॉल; (2) हॉकी; (3) बैडमिंटन; (4) क्रिकेट'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-clk-spt-1',
                question: {
                    en: 'In which 8 Olympic years did India win the Gold Medal in Men’s Field Hockey?',
                    pa: 'ਭਾਰਤ ਨੇ ਪੁਰਸ਼ ਹਾਕੀ ਵਿੱਚ ਕਿਹੜੇ 8 ਓਲੰਪਿਕ ਸਾਲਾਂ ਵਿੱਚ ਸੋਨ ਤਗਮਾ (Gold Medal) ਜਿੱਤਿਆ?',
                    hi: 'भारत ने पुरुष हॉकी में किन 8 ओलंपिक वर्षों में स्वर्ण पदक (Gold Medal) जीता?'
                },
                answer: {
                    en: '1928 (Amsterdam), 1932 (Los Angeles), 1936 (Berlin), 1948 (London), 1952 (Helsinki), 1956 (Melbourne), 1964 (Tokyo), and 1980 (Moscow).',
                    pa: '1928 (ਐਮਸਟਰਡਮ), 1932 (ਲਾਸ ਏਂਜਲਸ), 1936 (ਬਰਲਿਨ), 1948 (ਲੰਡਨ), 1952 (ਹੇਲਸਿੰਕੀ), 1956 (ਮੈਲਬੌਰਨ), 1964 (ਟੋਕੀਓ) ਅਤੇ 1980 (ਮਾਸਕੋ)।',
                    hi: '1928 (एम्स्टर्डम), 1932 (लॉस एंजिल्स), 1936 (बर्लिन), 1948 (लंदन), 1952 (हेलसिंकी), 1956 (मेलबर्न), 1964 (टोक्यो) और 1980 (मॉस्को)।'
                }
            },
            {
                id: 'fc-clk-spt-2',
                question: {
                    en: 'Who was India’s first individual Olympic Gold medallist, in which event/year, and what is the title of his autobiography?',
                    pa: 'ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਵਿਅਕਤੀਗਤ ਓਲੰਪਿਕ ਸੋਨ ਤਗਮਾ ਜੇਤੂ ਕੌਣ ਸੀ, ਕਿਸ ਖੇਡ/ਸਾਲ ਵਿੱਚ, ਅਤੇ ਉਸ ਦੀ ਸਵੈ-ਜੀਵਨੀ ਦਾ ਨਾਂ ਕੀ ਹੈ?',
                    hi: 'भारत के प्रथम व्यक्तिगत ओलंपिक स्वर्ण पदक विजेता कौन थे, किस स्पर्धा/वर्ष में, और उनकी आत्मकथा का नाम क्या है?'
                },
                answer: {
                    en: 'Abhinav Bindra (from Punjab) in Men’s 10m Air Rifle Shooting at the 2008 Beijing Olympics; his autobiography is "A Shot at History".',
                    pa: 'ਅਭਿਨਵ ਬਿੰਦਰਾ (ਪੰਜਾਬ) ਨੇ 2008 ਬੀਜਿੰਗ ਓਲੰਪਿਕ ਵਿੱਚ 10m ਏਅਰ ਰਾਈਫਲ ਸ਼ੂਟਿੰਗ ਵਿੱਚ ਜਿੱਤਿਆ; ਸਵੈ-ਜੀਵਨੀ: "A Shot at History"।',
                    hi: 'अभिनव बिंद्रा (पंजाब) ने 2008 बीजिंग ओलंपिक में 10m एयर राइफल शूटिंग में जीता; आत्मकथा: "A Shot at History"।'
                }
            },
            {
                id: 'fc-clk-spt-3',
                question: {
                    en: 'Which legendary hockey player from Punjab holds the Olympic record for scoring 5 goals in the 1952 Helsinki Olympic Final?',
                    pa: 'ਪੰਜਾਬ ਦੇ ਕਿਸ ਮਹਾਨ ਹਾਕੀ ਖਿਡਾਰੀ ਦੇ ਨਾਂ 1952 ਹੇਲਸਿੰਕੀ ਓਲੰਪਿਕ ਫਾਈਨਲ ਵਿੱਚ 5 ਗੋਲ ਕਰਨ ਦਾ ਵਿਸ਼ਵ ਰਿਕਾਰਡ ਦਰਜ ਹੈ?',
                    hi: 'पंजाब के किस महान हॉकी खिलाड़ी के नाम 1952 हेलसिंकी ओलंपिक फाइनल में 5 गोल करने का विश्व रिकॉर्ड दर्ज है?'
                },
                answer: {
                    en: 'Balbir Singh Dosanjh (Balbir Singh Sr.) in India’s 6–1 victory over the Netherlands; his autobiography is "The Golden Hat Trick".',
                    pa: 'ਬਲਬੀਰ ਸਿੰਘ ਦੁਸਾਂਝ (ਬਲਬੀਰ ਸਿੰਘ ਸੀਨੀਅਰ) ਨੇ ਨੀਦਰਲੈਂਡ ਵਿਰੁੱਧ 6–1 ਦੀ ਜਿੱਤ ਵਿੱਚ 5 ਗੋਲ ਕੀਤੇ; ਸਵੈ-ਜੀਵਨੀ: "The Golden Hat Trick"।',
                    hi: 'बलबीर सिंह दोसांझ (बलबीर सिंह सीनियर) ने नीदरलैंड के विरुद्ध 6–1 की जीत में 5 गोल किए; आत्मकथा: "The Golden Hat Trick"।'
                }
            },
            {
                id: 'fc-clk-spt-4',
                question: {
                    en: 'What is the highest sports award of Punjab, in which year was it instituted, and what is the official State Game of Punjab?',
                    pa: 'ਪੰਜਾਬ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਖੇਡ ਪੁਰਸਕਾਰ ਕਿਹੜਾ ਹੈ, ਇਹ ਕਿਸ ਸਾਲ ਸ਼ੁਰੂ ਹੋਇਆ ਅਤੇ ਪੰਜਾਬ ਦੀ ਰਾਜ ਖੇਡ ਕਿਹੜੀ ਹੈ?',
                    hi: 'पंजाब का सर्वोच्च खेल पुरस्कार कौन-सा है, यह किस वर्ष शुरू हुआ और पंजाब का आधिकारिक राज्य खेल कौन-सा है?'
                },
                answer: {
                    en: 'Maharaja Ranjit Singh Award (instituted in 1978); the official State Game of Punjab is Circle Style Kabaddi.',
                    pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਪੁਰਸਕਾਰ (1978 ਵਿੱਚ ਸ਼ੁਰੂ); ਪੰਜਾਬ ਦੀ ਰਾਜ ਖੇਡ ਸਰਕਲ ਸਟਾਈਲ ਕਬੱਡੀ ਹੈ।',
                    hi: 'महाराजा रणजीत सिंह पुरस्कार (1978 में शुरू); पंजाब का आधिकारिक राज्य खेल सर्कल स्टाइल कबड्डी है।'
                }
            },
            {
                id: 'fc-clk-spt-5',
                question: {
                    en: 'Where is Asia’s largest sports institute (NSNIS) located, and which village in Jalandhar is famous as the "Nursery / Mecca of Indian Hockey"?',
                    pa: 'ਏਸ਼ੀਆ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਖੇਡ ਸੰਸਥਾ (NSNIS) ਕਿੱਥੇ ਸਥਿਤ ਹੈ ਅਤੇ ਜਲੰਧਰ ਦਾ ਕਿਹੜਾ ਪਿੰਡ "ਭਾਰਤੀ ਹਾਕੀ ਦੀ ਨਰਸਰੀ / ਮੱਕਾ" ਵਜੋਂ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?',
                    hi: 'एशिया का सबसे बड़ा खेल संस्थान (NSNIS) कहाँ स्थित है और जालंधर का कौन-सा गाँव "भारतीय हॉकी की नर्सरी / मक्का" के रूप में प्रसिद्ध है?'
                },
                answer: {
                    en: 'NSNIS is located at Old Moti Bagh Palace, Patiala (established 7 May 1961); Sansarpur village in Jalandhar is famous as the Nursery of Indian Hockey.',
                    pa: 'NSNIS ਓਲਡ ਮੋਤੀ ਬਾਗ਼ ਪੈਲੇਸ, ਪਟਿਆਲਾ (7 ਮਈ 1961) ਵਿਖੇ ਸਥਿਤ ਹੈ; ਜਲੰਧਰ ਦਾ ਪਿੰਡ ਸੰਸਾਰਪੁਰ ਭਾਰਤੀ ਹਾਕੀ ਦੀ ਨਰਸਰੀ ਵਜੋਂ ਮਸ਼ਹੂਰ ਹੈ।',
                    hi: 'NSNIS ओल्ड मोती बाग़ पैलेस, पटियाला (7 मई 1961) में स्थित है; जालंधर का संसारपुर गाँव भारतीय हॉकी की नर्सरी के रूप में प्रसिद्ध है।'
                }
            },
            {
                id: 'fc-clk-spt-6',
                question: {
                    en: 'Distinguish between the Thomas Cup, Uber Cup, Durand Cup, and Beighton Cup.',
                    pa: 'ਥਾਮਸ ਕੱਪ, ਉਬੇਰ ਕੱਪ, ਡੂਰੰਡ ਕੱਪ ਅਤੇ ਬੇਟਨ ਕੱਪ ਵਿੱਚ ਅੰਤਰ ਸਪੱਸ਼ਟ ਕਰੋ।',
                    hi: 'थॉमस कप, उबेर कप, डूरंड कप और बेटन कप में अंतर स्पष्ट कीजिए।'
                },
                answer: {
                    en: 'Thomas Cup = Men’s World Team Badminton; Uber Cup = Women’s World Team Badminton; Durand Cup (1888) = Asia’s oldest Football tournament; Beighton Cup (1895) = oldest Field Hockey tournament.',
                    pa: 'ਥਾਮਸ ਕੱਪ = ਪੁਰਸ਼ ਬੈਡਮਿੰਟਨ; ਉਬੇਰ ਕੱਪ = ਮਹਿਲਾ ਬੈਡਮਿੰਟਨ; ਡੂਰੰਡ ਕੱਪ (1888) = ਏਸ਼ੀਆ ਦਾ ਸਭ ਤੋਂ ਪੁਰਾਣਾ ਫੁੱਟਬਾਲ ਟੂਰਨਾਮੈਂਟ; ਬੇਟਨ ਕੱਪ (1895) = ਹਾਕੀ ਟੂਰਨਾਮੈਂਟ।',
                    hi: 'थॉमस कप = पुरुष बैडमिंटन; उबेर कप = महिला बैडमिंटन; डूरंड कप (1888) = एशिया का सबसे पुराना फुटबॉल टूर्नामेंट; बेटन कप (1895) = हॉकी टूर्नामेंट।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. CLERK CINEMA & LITERATURE BLUEPRINT
    // =========================================================================
    {
        topicId: 'clerk-cinema-literature',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 100,
            editorialNote: 'Comprehensive PPSC & PSSSB Clerk Cinema & Literature Blueprint covering Medieval & Modern Punjabi Literary Giants, Sahitya Akademi & Jnanpith Laureates, Autobiographies, and History of Punjabi & Indian Cinema (Level B -> I -> A).'
        },
        bookRefs: [
            {
                title: 'Punjabi Sahit Da Itihas (History of Punjabi Literature)',
                author: 'Punjabi Sahitya Akademi / PSEB Class 10–12 Punjabi Sahit',
                chapter: 'Sufi Kav, Gurmat Kav, Qissa Kav, Modern Punjabi Poetry, Novel, Short Story & Award Winners',
                relevance: 'Core authoritative reference for PPSC & PSSSB Clerk questions on Bhai Vir Singh, Amrita Pritam, Gurdial Singh, Nanak Singh, Shiv Kumar Batalvi, Waris Shah, and Surjit Patar.'
            },
            {
                title: 'National Film Awards Archive & Punjabi Cinema History',
                author: 'Directorate of Film Festivals (Govt. of India) / Punjabi University Patiala',
                chapter: 'Pioneers of Indian Cinema (1913–1931) & Milestones of Punjabi Cinema (1935–Present)',
                relevance: 'Direct source for Clerk questions on Pind Di Kuri (Sheela, 1935), Nanak Naam Jahaz Hai (1969), Chann Pardesi (1980), Marhi Da Deeva (1989), and Dadasaheb Phalke Award.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Medieval & Classical Punjabi Literature (Sufi, Gurmat, Qissa & Bir Ras Kav)]
1. **Master Table of Medieval Punjabi Literary Traditions (ਮੱਧਕਾਲੀ ਪੰਜਾਬੀ ਸਾਹਿਤ):**
   | Tradition & Poet | Era / Order / Meter | Immortal Compositions & High-Yield Clerk Exam Facts |
   |---|---|---|
   | **Baba Sheikh Farid Ji** (1173–1266) | **Chishti Sufi Order** (Pakpattan) | **Father / Pioneer of Punjabi Poetry (*Punjabi Kavita da Modhi*)**; **112 Saloks and 4 Shabads** recorded in *Sri Guru Granth Sahib Ji*. |
   | **Sri Guru Nanak Dev Ji** (1469–1539) | Founder of **Gurmat Kav** | ***Japji Sahib***, ***Asa di Vaar***, ***Majh di Vaar***, ***Malhar di Vaar***, ***Babur Vani***, ***Sidh Gosht***, ***Patti***, ***Dakhni Oankar***, ***Barah Maha Tukhari*** (*974 hymns in 19 Ragas*). |
   | **Sri Guru Arjan Dev Ji** (1563–1606) | 5th Sikh Guru | ***Sukhmani Sahib*** (24 Ashtpadis in Raga Gauri), ***Barah Maha Majh***, ***Bavan Akhri***; compiled the ***Adi Granth* in 1604** (inscribed by **Bhai Gurdas Ji**, whose **40 Vaars** are called the *"Key to Guru Granth Sahib"*). |
   | **Shah Hussain** (1538–1599, Lahore) | Malamati / Qadiri Sufi | **Pioneer of the *Kafi* form** in Punjabi Sufi poetry. |
   | **Baba Bulleh Shah** (1680–1757, Kasur) | **Qadiri Sufi Order** | Disciple of **Shah Inayat Qadiri** (Lahore); famous for *Kafis*, *Athwara*, *Barah Maha*, and *Gandhan* (*"Bulleh ki jaana main kaun"*). |
   | **Damodar Das Gulati** & **Waris Shah** | Qissa ***Heer Ranjha*** | **Damodar** wrote the **first Qissa of *Heer*** (in *Davaiya* meter during Akbar's reign); **Waris Shah** (Jandiala Sher Khan) wrote the masterpiece ***Heer* in 1766 AD in *Baint* meter** (called the *"Shakespeare of Punjab"*). |
   | **Peelu**, **Hafiz Barkhurdar**, **Hashim Shah**, **Fazal Shah** & **Qadir Yar** | Qissa Kav Giants | **Peelu:** *Mirza Sahiban* (in ***Sadd*** form); **Hashim Shah** (Court poet of Maharaja Ranjit Singh): ***Sassi Punnu***; **Fazal Shah:** best ***Sohni Mahiwal***; **Qadir Yar:** ***Qissa Puran Bhagat*** (in *Si-Harfi*) & *Vaar Hari Singh Nalwa*. |
   | **Sri Guru Gobind Singh Ji** & **Shah Mohammad** | Bir Ras / Jangnama | **Guru Gobind Singh Ji:** ***Chandi di Vaar*** (first Vaar in Punjabi describing Durga vs demons in *Dasam Granth*) & ***Zafarnama*** (Persian epistle to Aurangzeb from Dina Kangar). **Shah Mohammad:** ***Jangnama Singhan te Farangian*** (1846 First Anglo-Sikh War — *"Ajj hove sarkar taan mull paave, jehੜiyan Khalse ne teghan maariyan"*). |

---

### [Level I: Intermediate — Modern Punjabi Literary Giants, Sahitya Akademi & Jnanpith Laureates]
1. **The Two Jnanpith Award Laureates in Punjabi Literature (ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜੇਤੂ):**
   - **1. Amrita Pritam (1919–2005) — Jnanpith Award in 1981** for ***Kagaz Te Canvas*** (*ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ*).
     - **First woman to win the Sahitya Akademi Award (1956)** for ***Sunehade*** (*ਸੁਨੇਹੜੇ*).
     - Immortal partition poem: ***Ajj Aakhan Waris Shah Nu***; famous novel: ***Pinjar*** (filmed in 2003); autobiography: ***Rasidi Ticket*** (*ਰਸੀਦੀ ਟਿਕਟ*) & *Kala Gulab*; edited monthly literary magazine ***Nagmani***.
   - **2. Gurdial Singh (1933–2016) — Jnanpith Award in 1999** (shared with Hindi writer Nirmal Verma).
     - Landmark Punjabi novel: ***Marhi Da Deeva*** (*ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ*, 1964 — tragic life of Dalit sharecropper Jagseer; adapted into a 1989 National Award-winning film); other novels: ***Anhe Ghore Da Daan***, *Adh Chanani Raat* (Sahitya Akademi 1975), *Parsa*; autobiography: ***Neean Mattiyan***.

2. **Master Table of Modern Punjabi Writers, Titles, Works & Autobiographies:**
   | Literary Giant | Popular Title / Honorific | Famous Works, Sahitya Akademi Award & Autobiography |
   |---|---|---|
   | **Bhai Vir Singh** (1872–1957) | **Father of Modern Punjabi Literature** (*ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਪਿਤਾਮਾ*) | **First Punjabi Novel: *Sundari* (1898)**; other novels: *Bijai Singh* (1899), *Satwant Kaur* (1900), *Baba Naudh Singh*; **First Punjabi Epic (*Mahakav*): *Rana Surat Singh* (1905)** in *Sirkhandi Chhand*; **FIRST Sahitya Akademi Award in Punjabi (1955)** for ***Mere Sainya Jio*** (*ਮੇਰੇ ਸਾਈਆਂ ਜੀਉ*). Started *Khalsa Samachar* (1899). |
   | **Dhani Ram Chatrik** (1876–1954) | Pioneer of Romantic/Cultural Punjabi Poetry | Poetry collections: ***Chandanwari***, ***Kesar Kiari***, ***Nawan Jahan***, ***Sufi Khana***. Standardised Gurmukhi typography fonts! |
   | **Prof. Puran Singh** (1881–1931) | **Pioneer of Free Verse (*Khulli Kavita / ਛੰਦ-ਮੁਕਤ ਕਵਿਤਾ*)** | ***Khulle Maidan*** (*ਖੁੱਲ੍ਹੇ ਮੈਦਾਨ*), ***Khulle Ghund***, ***Khulle Asmani Rang***; English works: *The Spirit of Oriental Poetry*, *The Book of Ten Masters*. |
   | **Nanak Singh** (1897–1971) | **Father of Punjabi Novel** (*ਪੰਜਾਬੀ ਨਾਵਲ ਦਾ ਪਿਤਾਮਾ*) | Novels: ***Chitta Lahu*** (*ਚਿੱਟਾ ਲਹੂ*), ***Pavittar Paapi*** (*ਪਵਿੱਤਰ ਪਾਪੀ*), ***Adh Khidya Phul***, ***Chittiye Ni Chittiye***; won **1962 Sahitya Akademi Award** for historical novel ***Ek Mian Do Talwaran*** (based on Kartar Singh Sarabha & Ghadar Party). Autobiography: ***Meri Duniya***. |
   | **Shiv Kumar Batalvi** (1936–1973) | **"Birha da Sultan" / Keats of Punjab** | **Youngest recipient of Sahitya Akademi Award (1967, at age 30)** for verse-play ***Loona*** (*ਲੂਣਾ* — retelling the Puran Bhagat legend from Loona's perspective). Other works: *Peedan Da Paraga*, *Lajwanti*, *Aate Dian Chirian*, *Main Te Main*. |
   | **Balwant Gargi** (1916–2003) | Father of Modern Punjabi Theatre | Plays: ***Loha Kut*** (*ਲੋਹਾ ਕੁੱਟ*, 1944), ***Kanak Di Balli***, *Sultan Razia*, *Mirza Sahiban*; won **1962 Sahitya Akademi Award** for theatre history book ***Rangmanch*** (*ਰੰਗਮੰਚ*); autobiography: ***Nangi Dhup*** (*ਨੰਗੀ ਧੁੱਪ*). |
   | **Kulwant Singh Virk** (1920–1987) | **Emperor of Punjabi Short Story** (*ਨਿੱਕੀ ਕਹਾਣੀ ਦਾ ਬਾਦਸ਼ਾਹ*) | Famous stories: *Dharti Hethla Balad*, *Dudh Da Chhappar*, *Khabal*; won **1968 Sahitya Akademi Award** for ***Naven Lok*** (*ਨਵੇਂ ਲੋਕ*). |
   | **Dalip Kaur Tiwana** (1935–2020) | Voice of Rural Punjabi Womanhood | Won **1971 Sahitya Akademi Award** for novel ***Eho Hamara Jeevna*** (*ਏਹੁ ਹਮਾਰਾ ਜੀਵਣਾ*) and **first Punjabi Saraswati Samman (2001)** for *Katha Kaho Urvashi*; autobiography: ***Nange Pairan Da Safar*** (*ਨੰਗੇ ਪੈਰਾਂ ਦਾ ਸਫ਼ਰ*). |
   | **Surjit Patar** (1945–2024) | Modern Lyric Poet & Ghazal Maestro | ***Hawa Vich Likhe Harf*** (*ਹਵਾ ਵਿੱਚ ਲਿਖੇ ਹਰਫ਼*), ***Birkh Arz Kare***, ***Lafzan Di Dargah***, ***Patjhar Di Pazeb***; won **1993 Sahitya Akademi Award** for ***Hanere Vich Sulagdi Varnmala*** and **Saraswati Samman (2009)** for *Lafzan Di Dargah*; Padma Shri (2012). |
   | **Pash (Avtar Singh Sandhu)** (1950–1988) | Revolutionary Poet of Punjab | ***Loh Katha*** (*ਲੋਹ ਕਥਾ*), *Uddade Baazan Magar*, *Saade Samian Vich*; iconic poem: *"Sab Ton Khatarnak Hunda Hai Supnian Da Mar Jaana"*. |
   | **Ajit Cour** & **Sohan Singh Seetal** | Modern Prose & Novel | **Ajit Cour:** *Khanabadosh* (*ਖ਼ਾਨਾਬਦੋਸ਼* — autobiography, Sahitya Akademi 1985), *Koora Kabara*; **Sohan Singh Seetal:** *Jug Badal Gaya* (*ਜੁੱਗ ਬਦਲ ਗਿਆ* — Sahitya Akademi 1974), *Tootan Wala Khuh*. |

---

### [Level A: Advanced — History of Indian & Punjabi Cinema (Pioneers, Talkies & National Awards)]
1. **Master Table of Indian & Punjabi Cinema Milestones:**
   | Milestone / Film | Year & Director | Key Historical & Exam Facts |
   |---|---|---|
   | ***Raja Harishchandra*** | **1913** — **Dadasaheb Phalke** | **India's FIRST full-length indigenous silent feature film** (released 3 May 1913 at Coronation Cinematograph, Bombay). Dadasaheb Phalke is the **Father of Indian Cinema**. |
   | ***Alam Ara*** | **1931** — **Ardeshir Irani** | **India's FIRST Talkie (sound) film** (released 14 March 1931; featured first song *"De De Khuda Ke Naam Pe"* sung by Wazir Mohammed Khan). |
   | ***Pind Di Kuri* (also called *Sheela*)** | **1935** — **K.D. Mehra** | **FIRST Punjabi Talkie (sound) Film!** Produced & directed by **Krishan Dev Mehra (K.D. Mehra)** in **Calcutta** (released in Lahore); introduced **Baby Noor Jehan** as a child actress and singer! *(Note: First silent film set in Punjab was *Daughters of Today* / *Ishq-e-Punjab*, 1928–32).* |
   | ***Heer Syal*** & ***Chaman*** | **1938** & **1948** | *Heer Syal* (1938, by K.D. Mehra); ***Chaman* (1948, directed by Roop K. Shorey)** was the **first major Punjabi blockbuster in East Punjab after the 1947 Partition**, featuring the immortal song *"Chann Kithan Guzari Aai Raat"* (sung by Pushpa Hans, music by Vinod). |
   | ***Sutlej De Kande*** & ***Chaudhary Karnail Singh*** | **1964** & **1960** | Both won the President's Silver Medal / National Film Award Certificate of Merit for Best Punjabi Film in the 1960s (*Sutlej De Kande* directed by Padma Shri **Balraj Sahni** / P.P. Maheshwary). |
   | ***Nanak Naam Jahaz Hai*** | **1969** — **Ram Maheshwari** | Starring **Prithviraj Kapoor, I.S. Johar, Vimi, Nishi** (music by S. Mohinder). Landmark devotional blockbuster released on the **500th Prakash Purab of Sri Guru Nanak Dev Ji (1969)** that revived Punjabi cinema in post-1966 reorganised Punjab and won the **National Film Award for Best Feature Film in Punjabi** (and Best Music). |
   | ***Chann Pardesi*** | **1980** — **Chitrarth Singh** | Starring **Raj Babbar, Rama Vij, Amrish Puri, Kulbhushan Kharbanda, Om Puri, Mehar Mittal**. **First Punjabi colour/modern drama classic heralded as the golden benchmark win for the National Film Award (Rajat Kamal) for Best Feature Film in Punjabi (1980)**. |
   | ***Marhi Da Deeva*** & ***Anhe Ghore Da Daan*** | **1989** & **2011** | Both adapted from **Gurdial Singh's Jnanpith-winning literary universe**! ***Marhi Da Deeva* (1989)** directed by **Surinder Singh** (starring Raj Babbar, Deepti Naval, Pankaj Kapur) won the National Award; ***Anhe Ghore Da Daan* (2011)** directed by **Gurvinder Singh** became the **first Punjabi film screened at the Venice Film Festival**, winning the **Golden Peacock (IFFI)** and **3 National Film Awards** (including Best Direction). |
   | **Dadasaheb Phalke Award** | Instituted **1969** | India's **highest award in cinema**; **First recipient (1969): Devika Rani** ("First Lady of Indian Cinema"). Notable Punjabi/connected recipients: **Prithviraj Kapoor** (1971), **Sohrab Modi**, **Raj Kapoor** (1987), **B.R. Chopra** (1998), **Yash Chopra** (2001), **Gulzar** (2013 — born in Dina, Punjab), **Vinod Khanna** (2017). |`,
            pa: `### [Level B: Basic — ਮੱਧਕਾਲੀ ਅਤੇ ਕਲਾਸੀਕਲ ਪੰਜਾਬੀ ਸਾਹਿਤ (ਸੂਫ਼ੀ, ਗੁਰਮਤਿ, ਕਿੱਸਾ ਅਤੇ ਬੀਰ ਰਸੀ ਕਾਵਿ)]
1. **ਮੱਧਕਾਲੀ ਪੰਜਾਬੀ ਸਾਹਿਤਕ ਪਰੰਪਰਾਵਾਂ ਦੀ ਮਾਸਟਰ ਸਾਰਣੀ:**
   | ਕਵੀ / ਸਾਹਿਤਕਾਰ | ਕਾਵਿ-ਧਾਰਾ / ਸਿਲਸਿਲਾ / ਛੰਦ | ਪ੍ਰਮੁੱਖ ਰਚਨਾਵਾਂ ਅਤੇ ਪ੍ਰੀਖਿਆ ਲਈ ਤੱਥ |
   |---|---|---|
   | **ਬਾਬਾ ਸ਼ੇਖ਼ ਫ਼ਰੀਦ ਜੀ** (1173–1266) | **ਚਿਸ਼ਤੀ ਸੂਫ਼ੀ ਸਿਲਸਿਲਾ** (ਪਾਕਪਟਨ) | **ਪੰਜਾਬੀ ਕਵਿਤਾ ਦੇ ਪਿਤਾਮਾ / ਮੋਢੀ**; ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ **112 ਸਲੋਕ ਅਤੇ 4 ਸ਼ਬਦ** ਦਰਜ ਹਨ। |
   | **ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ** (1469–1539) | **ਗੁਰਮਤਿ ਕਾਵਿ ਦੇ ਮੋਢੀ** | ***ਜਪੁਜੀ ਸਾਹਿਬ***, ***ਆਸਾ ਦੀ ਵਾਰ***, ***ਮਾਝ ਦੀ ਵਾਰ***, ***ਮਲਾਰ ਦੀ ਵਾਰ***, ***ਬਾਬਰ ਬਾਣੀ***, ***ਸਿੱਧ ਗੋਸ਼ਟਿ***, ***ਪੱਟੀ***, ***ਦਖਣੀ ਓਅੰਕਾਰ***, ***ਬਾਰਹ ਮਾਹ ਤੁਖਾਰੀ*** (19 ਰਾਗਾਂ ਵਿੱਚ 974 ਸ਼ਬਦ)। |
   | **ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ** (1563–1606) | ਪੰਜਵੇਂ ਸਿੱਖ ਗੁਰੂ | ***ਸੁਖਮਨੀ ਸਾਹਿਬ*** (ਗਉੜੀ ਰਾਗ ਵਿੱਚ 24 ਅਸ਼ਟਪਦੀਆਂ), ***ਬਾਰਹ ਮਾਹ ਮਾਝ***, ***ਬਾਵਨ ਅੱਖਰੀ***; **1604 ਈ. ਵਿੱਚ ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦਾ ਸੰਪਾਦਨ** (ਲਿਖਾਰੀ: **ਭਾਈ ਗੁਰਦਾਸ ਜੀ**, ਜਿਨ੍ਹਾਂ ਦੀਆਂ **40 ਵਾਰਾਂ** ਨੂੰ *"ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦੀ ਕੁੰਜੀ"* ਕਿਹਾ ਜਾਂਦਾ ਹੈ)। |
   | **ਸ਼ਾਹ ਹੁਸੈਨ** ਅਤੇ **ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ** | ਸੂਫ਼ੀ ਕਾਵਿ (ਕਾਫ਼ੀਆਂ) | **ਸ਼ਾਹ ਹੁਸੈਨ** (ਲਾਹੌਰ) ਨੇ ਪੰਜਾਬੀ ਵਿੱਚ **ਕਾਫ਼ੀ ਕਾਵਿ-ਰੂਪ** ਨੂੰ ਪ੍ਰਸਿੱਧ ਕੀਤਾ; **ਬਾਬਾ ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ** (ਕਸੂਰ, ਕਾਦਰੀ ਸਿਲਸਿਲਾ, ਮੁਰਸ਼ਦ: **ਸ਼ਾਹ ਇਨਾਇਤ ਕਾਦਰੀ**) ਆਪਣੀਆਂ ਕਾਫ਼ੀਆਂ, ਅਠਵਾਰਾ ਤੇ ਬਾਰਹ ਮਾਹ ਲਈ ਪ੍ਰਸਿੱਧ ਹਨ। |
   | **ਦਾਮੋਦਰ ਗੁਲਾਟੀ** ਅਤੇ **ਵਾਰਿਸ ਸ਼ਾਹ** | ਕਿੱਸਾ ***ਹੀਰ ਰਾਂਝਾ*** | **ਦਾਮੋਦਰ** ਨੇ ਅਕਬਰ ਦੇ ਸਮੇਂ ਦਵੱਈਆ ਛੰਦ ਵਿੱਚ **ਹੀਰ ਦਾ ਪਹਿਲਾ ਕਿੱਸਾ** ਲਿਖਿਆ; **ਵਾਰਿਸ ਸ਼ਾਹ** (ਜੰਡਿਆਲਾ ਸ਼ੇਰ ਖਾਨ) ਨੇ **1766 ਈ. ਵਿੱਚ ਬੈਂਤ ਛੰਦ ਵਿੱਚ ਸ਼ਾਹਕਾਰ ਕਿੱਸਾ *ਹੀਰ*** ਰਚਿਆ (*"ਪੰਜਾਬ ਦਾ ਸ਼ੇਕਸਪੀਅਰ"*)। |
   | **ਪੀਲੂ, ਹਾਸ਼ਮ ਸ਼ਾਹ, ਫ਼ਜ਼ਲ ਸ਼ਾਹ, ਕਾਦਰਯਾਰ ਅਤੇ ਸ਼ਾਹ ਮੁਹੰਮਦ** | ਕਿੱਸਾ ਅਤੇ ਜੰਗਨਾਮਾ | **ਪੀਲੂ:** *ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ* (**ਸੱਦ** ਕਾਵਿ-ਰੂਪ); **ਹਾਸ਼ਮ ਸ਼ਾਹ:** *ਸੱਸੀ ਪੁੰਨੂੰ*; **ਫ਼ਜ਼ਲ ਸ਼ਾਹ:** *ਸੋਹਣੀ ਮਹੀਵਾਲ*; **ਕਾਦਰਯਾਰ:** *ਪੂਰਨ ਭਗਤ* (ਸੀਹਰਫ਼ੀਆਂ) ਤੇ *ਵਾਰ ਹਰੀ ਸਿੰਘ ਨਲਵਾ*; **ਸ਼ਾਹ ਮੁਹੰਮਦ:** ***ਜੰਗਨਾਮਾ ਸਿੰਘਾਂ ਤੇ ਫ਼ਿਰੰਗੀਆਂ*** (1846)। |

---

### [Level I: Intermediate — ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤਕਾਰ, ਸਾਹਿਤ ਅਕਾਦਮੀ ਅਤੇ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜੇਤੂ]
1. **ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਦੋ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜੇਤੂ (Jnanpith Laureates):**
   - **1. ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ (1919–2005) — 1981 ਵਿੱਚ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ** ਕਾਵਿ-ਸੰਗ੍ਰਹਿ ***'ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ'*** ਲਈ।
     - ***'ਸੁਨੇਹੜੇ'*** ਕਾਵਿ-ਸੰਗ੍ਰਹਿ ਲਈ **1956 ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਜਿੱਤਣ ਵਾਲੀ ਪਹਿਲੀ ਪੰਜਾਬੀ ਮਹਿਲਾ**।
     - ਪ੍ਰਸਿੱਧ ਰਚਨਾਵਾਂ: ਕਵਿਤਾ ***ਅੱਜ ਆਖਾਂ ਵਾਰਿਸ ਸ਼ਾਹ ਨੂੰ***, ਨਾਵਲ ***ਪਿੰਜਰ***, ਸਵੈ-ਜੀਵਨੀ ***ਰਸੀਦੀ ਟਿਕਟ*** (*Rasidi Ticket*), ਮਾਸਿਕ ਰਸਾਲਾ ***ਨਾਗਮਣੀ***।
   - **2. ਗੁਰਦਿਆਲ ਸਿੰਘ (1933–2016) — 1999 ਵਿੱਚ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ** (ਹਿੰਦੀ ਲੇਖਕ ਨਿਰਮਲ ਵਰਮਾ ਨਾਲ ਸਾਂਝਾ)।
     - ਸ਼ਾਹਕਾਰ ਨਾਵਲ: ***ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ*** (1964), ***ਅੰਨ੍ਹੇ ਘੋੜੇ ਦਾ ਦਾਨ***, ***ਅੱਧ ਚਾਨਣੀ ਰਾਤ*** (1975 ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ), *ਪਰਸਾ*; ਸਵੈ-ਜੀਵਨੀ: ***ਨੀਂਵ ਮੱਤੀਆਂ***।

2. **ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤਕਾਰਾਂ, ਰਚਨਾਵਾਂ ਅਤੇ ਸਵੈ-ਜੀਵਨੀਆਂ ਦੀ ਮਾਸਟਰ ਸਾਰਣੀ:**
   | ਸਾਹਿਤਕਾਰ | ਉਪਾਧੀ / ਵਿਸ਼ੇਸ਼ਤਾ | ਪ੍ਰਮੁੱਖ ਰਚਨਾਵਾਂ, ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਅਤੇ ਸਵੈ-ਜੀਵਨੀ |
   |---|---|---|
   | **ਭਾਈ ਵੀਰ ਸਿੰਘ** (1872–1957) | **ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ** | **ਪਹਿਲਾ ਪੰਜਾਬੀ ਨਾਵਲ: *ਸੁੰਦਰੀ* (1898)**; ਹੋਰ ਨਾਵਲ: *ਬਿਜੈ ਸਿੰਘ*, *ਸਤਵੰਤ ਕੌਰ*, *ਬਾਬਾ ਨੌਧ ਸਿੰਘ*; **ਪਹਿਲਾ ਮਹਾਂਕਾਵਿ: *ਰਾਣਾ ਸੂਰਤ ਸਿੰਘ* (1905, ਸਿਰਖੰਡੀ ਛੰਦ)**; **1955 ਵਿੱਚ *'ਮੇਰੇ ਸਾਈਆਂ ਜੀਉ'* ਲਈ ਪੰਜਾਬੀ ਦਾ ਪਹਿਲਾ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ**। |
   | **ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ** ਅਤੇ **ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ** | ਆਧੁਨਿਕ ਕਾਵਿ ਦੇ ਮੋਢੀ | **ਚਾਤ੍ਰਿਕ:** *ਚੰਦਨਵਾੜੀ, ਕੇਸਰ ਕਿਆਰੀ, ਨਵਾਂ ਜਹਾਨ, ਸੂਫ਼ੀ ਖ਼ਾਨਾ*; **ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ (ਛੰਦ-ਮੁਕਤ ਖੁੱਲ੍ਹੀ ਕਵਿਤਾ ਦੇ ਮੋਢੀ):** *ਖੁੱਲ੍ਹੇ ਮੈਦਾਨ, ਖੁੱਲ੍ਹੇ ਘੁੰਡ, ਖੁੱਲ੍ਹੇ ਅਸਮਾਨੀ ਰੰਗ*। |
   | **ਨਾਨਕ ਸਿੰਘ** (1897–1971) | **ਪੰਜਾਬੀ ਨਾਵਲ ਦੇ ਪਿਤਾਮਾ** | ***ਚਿੱਟਾ ਲਹੂ***, ***ਪਵਿੱਤਰ ਪਾਪੀ***, *ਅੱਧ ਖਿੜਿਆ ਫੁੱਲ*; **1962 ਵਿੱਚ *'ਇੱਕ ਮਿਆਨ ਦੋ ਤਲਵਾਰਾਂ'* ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ**; ਸਵੈ-ਜੀਵਨੀ: ***ਮੇਰੀ ਦੁਨੀਆ***। |
   | **ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ** (1936–1973) | **ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ** | **1967 ਵਿੱਚ ਕਾਵਿ-ਨਾਟਕ *'ਲੂਣਾ'* ਲਈ ਸਭ ਤੋਂ ਘੱਟ ਉਮਰ (30 ਸਾਲ) ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਜੇਤੂ**; ਹੋਰ ਰਚਨਾਵਾਂ: *ਪੀੜਾਂ ਦਾ ਪਰਾਗਾ, ਲਾਜਵੰਤੀ, ਆਟੇ ਦੀਆਂ ਚਿੜੀਆਂ, ਮੈਂ ਤੇ ਮੈਂ*। |
   | **ਬਲਵੰਤ ਗਾਰਗੀ** (1916–2003) | ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਨਾਟਕਕਾਰ | ਨਾਟਕ: ***ਲੋਹਾ ਕੁੱਟ*** (1944), ***ਕਣਕ ਦੀ ਬੱਲੀ***; **1962 ਵਿੱਚ *'ਰੰਗਮੰਚ'* ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ**; ਸਵੈ-ਜੀਵਨੀ: ***ਨੰਗੀ ਧੁੱਪ***। |
   | **ਕੁਲਵੰਤ ਸਿੰਘ ਵਿਰਕ** ਅਤੇ **ਦਲੀਪ ਕੌਰ ਟਿਵਾਣਾ** | ਕਹਾਣੀ ਅਤੇ ਨਾਵਲ | **ਵਿਰਕ (ਨਿੱਕੀ ਕਹਾਣੀ ਦਾ ਬਾਦਸ਼ਾਹ):** *ਧਰਤੀ ਹੇਠਲਾ ਬਲਦ*, *ਨਵੇਂ ਲੋਕ* (1968 ਸਾਹਿਤ ਅਕਾਦਮੀ); **ਦਲੀਪ ਕੌਰ ਟਿਵਾਣਾ:** ਨਾਵਲ ***ਏਹੁ ਹਮਾਰਾ ਜੀਵਣਾ*** (1971 ਸਾਹਿਤ ਅਕਾਦਮੀ), *ਕਥਾ ਕਹੋ ਉਰਵਸ਼ੀ* (ਸਰਸਵਤੀ ਸਨਮਾਨ), ਸਵੈ-ਜੀਵਨੀ: ***ਨੰਗੇ ਪੈਰਾਂ ਦਾ ਸਫ਼ਰ***। |
   | **ਸੁਰਜੀਤ ਪਾਤਰ** (1945–2024) ਅਤੇ **ਪਾਸ਼** (1950–1988) | ਆਧੁਨਿਕ ਤੇ ਜੁਝਾਰਵਾਦੀ ਕਾਵਿ | **ਸੁਰਜੀਤ ਪਾਤਰ:** *ਹਵਾ ਵਿੱਚ ਲਿਖੇ ਹਰਫ਼, ਬਿਰਖ ਅਰਜ਼ ਕਰੇ, ਲਫ਼ਜ਼ਾਂ ਦੀ ਦਰਗਾਹ*, ***ਹਨੇਰੇ ਵਿੱਚ ਸੁਲਗਦੀ ਵਰਣਮਾਲਾ*** (1993 ਸਾਹਿਤ ਅਕਾਦਮੀ); **ਪਾਸ਼ (ਅਵਤਾਰ ਸਿੰਘ ਸੰਧੂ):** ***ਲੋਹ ਕਥਾ***, *ਉੱਡਦੇ ਬਾਜ਼ਾਂ ਮਗਰ*। |

---

### [Level A: Advanced — ਭਾਰਤੀ ਅਤੇ ਪੰਜਾਬੀ ਸਿਨੇਮਾ ਦਾ ਇਤਿਹਾਸ]
1. **ਭਾਰਤੀ ਅਤੇ ਪੰਜਾਬੀ ਸਿਨੇਮਾ ਦੇ ਇਤਿਹਾਸਕ ਮੀਲ-ਪੱਥਰ:**
   | ਫ਼ਿਲਮ / ਪੁਰਸਕਾਰ | ਸਾਲ ਅਤੇ ਨਿਰਦੇਸ਼ਕ | ਪ੍ਰੀਖਿਆ ਲਈ ਮਹੱਤਵਪੂਰਨ ਤੱਥ |
   |---|---|---|
   | ***ਰਾਜਾ ਹਰੀਸ਼ਚੰਦਰ (Raja Harishchandra)*** | **1913 — ਦਾਦਾ ਸਾਹਿਬ ਫਾਲਕੇ** | **ਭਾਰਤ ਦੀ ਪਹਿਲੀ ਮੂਕ (Silent) ਫੀਚਰ ਫ਼ਿਲਮ**। ਦਾਦਾ ਸਾਹਿਬ ਫਾਲਕੇ ਨੂੰ **'ਭਾਰਤੀ ਸਿਨੇਮਾ ਦਾ ਪਿਤਾਮਾ'** ਕਿਹਾ ਜਾਂਦਾ ਹੈ। |
   | ***ਆਲਮ ਆਰਾ (Alam Ara)*** | **1931 — ਅਰਦੇਸ਼ਿਰ ਇਰਾਨੀ** | **ਭਾਰਤ ਦੀ ਪਹਿਲੀ ਬੋਲਦੀ (Talkie) ਫ਼ਿਲਮ** (14 ਮਾਰਚ 1931)। |
   | ***ਪਿੰਡ ਦੀ ਕੁੜੀ (ਸ਼ੀਲਾ / Sheela)*** | **1935 — ਕੇ.ਡੀ. ਮਹਿਰਾ** | **ਪੰਜਾਬੀ ਦੀ ਪਹਿਲੀ ਬੋਲਦੀ (Talkie) ਫ਼ਿਲਮ!** ਕ੍ਰਿਸ਼ਨ ਦੇਵ ਮਹਿਰਾ (K.D. Mehra) ਦੁਆਰਾ ਕਲਕੱਤੇ ਵਿੱਚ ਬਣਾਈ ਗਈ; ਇਸ ਵਿੱਚ **ਨੂਰ ਜਹਾਂ** ਨੇ ਬਾਲ ਕਲਾਕਾਰ ਵਜੋਂ ਸ਼ੁਰੂਆਤ ਕੀਤੀ। |
   | ***ਨਾਨਕ ਨਾਮ ਜਹਾਜ਼ ਹੈ*** | **1969 — ਰਾਮ ਮਹੇਸ਼ਵਰੀ** | ਪ੍ਰਿਥਵੀਰਾਜ ਕਪੂਰ, ਆਈ.ਐਸ. ਜੌਹਰ, ਵਿਮੀ ਤੇ ਨਿਸ਼ੀ ਅਭਿਨੀਤ (ਸੰਗੀਤ: ਐਸ. ਮਹਿੰਦਰ)। ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ 500ਵੇਂ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ (1969) ਤੇ ਰਿਲੀਜ਼ ਹੋਈ ਇਤਿਹਾਸਕ ਧਾਰਮਿਕ ਫ਼ਿਲਮ ਜਿਸ ਨੇ **ਰਾਸ਼ਟਰੀ ਫ਼ਿਲਮ ਪੁਰਸਕਾਰ** ਜਿੱਤਿਆ। |
   | ***ਚੰਨ ਪਰਦੇਸੀ (Chann Pardesi)*** | **1980 — ਚਿਤ੍ਰਾਰਥ ਸਿੰਘ** | ਰਾਜ ਬੱਬਰ, ਰਮਾ ਵਿਜ, ਅਮਰੀਸ਼ ਪੁਰੀ, ਕੁਲਭੂਸ਼ਣ ਖਰਬੰਦਾ, ਓਮ ਪੁਰੀ ਤੇ ਮਿਹਰ ਮਿੱਤਲ ਅਭਿਨੀਤ। **ਸਰਵੋਤਮ ਪੰਜਾਬੀ ਫੀਚਰ ਫ਼ਿਲਮ ਲਈ ਰਾਸ਼ਟਰੀ ਪੁਰਸਕਾਰ (ਰਜਤ ਕਮਲ) ਜਿੱਤਣ ਵਾਲੀ ਪ੍ਰਸਿੱਧ ਆਧੁਨਿਕ ਕਲਾਸਿਕ ਫ਼ਿਲਮ**। |
   | ***ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ*** (1989) ਅਤੇ ***ਅੰਨ੍ਹੇ ਘੋੜੇ ਦਾ ਦਾਨ*** (2011) | ਸੁਰਿੰਦਰ ਸਿੰਘ / ਗੁਰਵਿੰਦਰ ਸਿੰਘ | ਦੋਵੇਂ ਫ਼ਿਲਮਾਂ **ਗੁਰਦਿਆਲ ਸਿੰਘ** ਦੇ ਨਾਵਲਾਂ ਤੇ ਆਧਾਰਿਤ ਹਨ ਅਤੇ ਰਾਸ਼ਟਰੀ ਫ਼ਿਲਮ ਪੁਰਸਕਾਰ ਜੇਤੂ ਹਨ। |
   | **ਦਾਦਾ ਸਾਹਿਬ ਫਾਲਕੇ ਪੁਰਸਕਾਰ** | **1969** ਵਿੱਚ ਸ਼ੁਰੂ | ਭਾਰਤੀ ਸਿਨੇਮਾ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਸਨਮਾਨ; **ਪਹਿਲੀ ਜੇਤੂ (1969): ਦੇਵਿਕਾ ਰਾਣੀ**। |`,
            hi: `### [Level B: Basic — मध्यकालीन एवं शास्त्रीय पंजाबी साहित्य (सूफ़ी, गुरमत, किस्सा एवं वीर रस काव्य)]
1. **मध्यकालीन पंजाबी साहित्यिक परंपराओं की मास्टर तालिका:**
   | कवि / साहित्यकार | काव्य-धारा / सिलसिला / छंद | प्रमुख रचनाएँ एवं परीक्षा हेतु तथ्य |
   |---|---|---|
   | **बाबा शेख़ फ़रीद जी** (1173–1266) | **चिश्ती सूफ़ी सिलसिला** (पाकपट्टन) | **पंजाबी कविता के पितामह / प्रवर्तक**; श्री गुरु ग्रंथ साहिब जी में **112 श्लोक और 4 शब्द** दर्ज हैं। |
   | **श्री गुरु नानक देव जी** (1469–1539) | **गुरमत काव्य के प्रवर्तक** | ***जपुजी साहिब***, ***आसा दी वार***, ***माझ दी वार***, ***मलार दी वार***, ***बाबर वाणी***, ***सिद्ध गोष्ठि***, ***पट्टी***, ***दखणी ओअंकार***, ***बारह माह तुखारी*** (19 रागों में 974 शब्द)। |
   | **श्री गुरु अर्जन देव जी** (1563–1606) | पाँचवें सिख गुरु | ***सुखमनी साहिब*** (गउड़ी राग में 24 अष्टपदियाँ), ***बारह माह माझ***, ***बावन अखरी***; **1604 ई. में आदि ग्रंथ साहिब का संकलन** (लिपिक: **भाई गुरदास जी**, जिनकी **40 वारों** को *"गुरु ग्रंथ साहिब की कुंजी"* कहा जाता है)। |
   | **शाह हुसैन** एवं **बुल्ले शाह** | सूफ़ी काव्य (काफ़ियाँ) | **शाह हुसैन** (लाहौर) ने पंजाबी में **काफ़ी काव्य-रूप** को लोकप्रिय बनाया; **बाबा बुल्ले शाह** (कसूर, कादरी सिलसिला, मुरशद: **शाह इनायत कादरी**) अपनी काफ़ियों, अठवारा व बारह माह के लिए प्रसिद्ध हैं। |
   | **दामोदर गुलाटी** एवं **वारिस शाह** | किस्सा ***हीर रांझा*** | **दामोदर** ने अकबर के काल में दवैया छंद में **हीर का प्रथम किस्सा** लिखा; **वारिस शाह** (जंडियाला शेर खान) ने **1766 ई. में बैंत छंद में कालजयी किस्सा *हीर*** रचा (*"पंजाब का शेक्सपियर"*)। |
   | **पीलू, हाशिम शाह, फ़ज़ल शाह, कादरयार एवं शाह मुहम्मद** | किस्सा एवं जंगनामा | **पीलू:** *मिर्ज़ा साहिबां* (**सद्द** काव्य-रूप); **हाशिम शाह:** *सस्सी पुन्नू*; **फ़ज़ल शाह:** *सोहणी महीवाल*; **कादरयार:** *पूरन भगत* (सीहरफ़ियाँ) व *वार हरी सिंह नलवा*; **शाह मुहम्मद:** ***जंगनामा सिंघां ते फ़िरंगियां*** (1846)। |

---

### [Level I: Intermediate — आधुनिक पंजाबी साहित्यकार, साहित्य अकादमी एवं ज्ञानपीठ पुरस्कार विजेता]
1. **पंजाबी साहित्य के दो ज्ञानपीठ पुरस्कार विजेता (Jnanpith Laureates):**
   - **1. अमृता प्रीतम (1919–2005) — 1981 में ज्ञानपीठ पुरस्कार** काव्य-संग्रह ***'काग़ज़ ते कैनवस'*** के लिए।
     - ***'सुनेहड़े'*** काव्य-संग्रह के लिए **1956 में साहित्य अकादमी पुरस्कार जीतने वाली प्रथम पंजाबी महिला**।
     - प्रसिद्ध रचनाएँ: कविता ***अज्ज आखां वारिस शाह नूं***, उपन्यास ***पिंजर***, आत्मकथा ***रसीदी टिकट*** (*Rasidi Ticket*), मासिक पत्रिका ***नागमणि***।
   - **2. गुरदियाल सिंह (1933–2016) — 1999 में ज्ञानपीठ पुरस्कार** (हिंदी लेखक निर्मल वर्मा के साथ साझा)।
     - कालजयी उपन्यास: ***मढ़ी दा दीवा*** (1964), ***अन्हे घोड़े दा दान***, ***अध चानणी रात*** (1975 साहित्य अकादमी पुरस्कार), *परसा*; आत्मकथा: ***नींव मत्तियां***।

2. **आधुनिक पंजाबी साहित्यकारों, रचनाओं एवं आत्मकथाओं की मास्टर तालिका:**
   | साहित्यकार | उपाधि / विशेषता | प्रमुख रचनाएँ, साहित्य अकादमी पुरस्कार एवं आत्मकथा |
   |---|---|---|
   | **भाई वीर सिंह** (1872–1957) | **आधुनिक पंजाबी साहित्य के पितामह** | **प्रथम पंजाबी उपन्यास: *सुंदरी* (1898)**; अन्य उपन्यास: *बिजै सिंह*, *सतवंत कौर*, *बाबा नौध सिंह*; **प्रथम महाकाव्य: *राणा सूरत सिंह* (1905, सिरखंडी छंद)**; **1955 में *'मेरे साइयां जीउ'* के लिए पंजाबी का प्रथम साहित्य अकादमी पुरस्कार**। |
   | **धनी राम चात्रिक** एवं **प्रो. पूरन सिंह** | आधुनिक काव्य के प्रवर्तक | **चात्रिक:** *चंदनवाड़ी, केसर क्यारी, नवां जहान, सूफ़ी ख़ाना*; **प्रो. पूरन सिंह (छंद-मुक्त खुली कविता के प्रवर्तक):** *खुल्ले मैदान, खुल्ले घुंड, खुल्ले आसमानी रंग*। |
   | **नानक सिंह** (1897–1971) | **पंजाबी उपन्यास के पितामह** | ***चिट्टा लहू***, ***पवित्र पापी***, *अध खिड़िया फुल*; **1962 में *'इक्क म्यान दो तलवारां'* के लिए साहित्य अकादमी पुरस्कार**; आत्मकथा: ***मेरी दुनिया***। |
   | **शिव कुमार बटालवी** (1936–1973) | **बिरहा दा सुल्तान** | **1967 में काव्य-नाटक *'लूणा'* के लिए सबसे कम आयु (30 वर्ष) में साहित्य अकादमी पुरस्कार विजेता**; अन्य रचनाएँ: *पीड़ां दा परागा, लाजवंती, आटे दियां चिड़ियां, मैं ते मैं*। |
   | **बलवंत गार्गी** (1916–2003) | आधुनिक पंजाबी नाटककार | नाटक: ***लोहा कुट्ट*** (1944), ***कणक दी बल्ली***; **1962 में *'रंगमंच'* के लिए साहित्य अकादमी पुरस्कार**; आत्मकथा: ***नंगी धुप***। |
   | **कुलवंत सिंह विर्क** एवं **दलीप कौर टिवाणा** | कहानी एवं उपन्यास | **विर्क (लघु कहानी के बादशाह):** *धरती हेठला बलद*, *नवें लोक* (1968 साहित्य अकादमी); **दलीप कौर टिवाणा:** उपन्यास ***एहु हमारा जीवणा*** (1971 साहित्य अकादमी), *कथा कहो उर्वशी* (सरस्वती सम्मान), आत्मकथा: ***नंगे पैरां दा सफ़र***। |
   | **सुरजीत पातर** (1945–2024) एवं **पाश** (1950–1988) | आधुनिक व क्रांतिकारी काव्य | **सुरजीत पातर:** *हवा विच लिखे हरफ़, बिरख अर्ज़ करे, लफ़्ज़ां दी दरगाह*, ***हनेरे विच सुलगदी वर्णमाला*** (1993 साहित्य अकादमी); **पाश (अवतार सिंह संधू):** ***लोह कथा***, *उड्डदे बाज़ां मगर*। |

---

### [Level A: Advanced — भारतीय एवं पंजाबी सिनेमा का इतिहास]
1. **भारतीय एवं पंजाबी सिनेमा के ऐतिहासिक मील के पत्थर:**
   | फ़िल्म / पुरस्कार | वर्ष एवं निर्देशक | परीक्षा हेतु महत्वपूर्ण तथ्य |
   |---|---|---|
   | ***राजा हरिश्चंद्र (Raja Harishchandra)*** | **1913 — दादा साहब फाल्के** | **भारत की प्रथम मूक (Silent) फीचर फ़िल्म**। दादा साहब फाल्के को **'भारतीय सिनेमा का जनक'** कहा जाता है। |
   | ***आलम आरा (Alam Ara)*** | **1931 — अर्देशिर ईरानी** | **भारत की प्रथम बोलती (Talkie) फ़िल्म** (14 मार्च 1931)। |
   | ***पिंड दी कुड़ी (शीला / Sheela)*** | **1935 — के.डी. मेहरा** | **पंजाबी की प्रथम बोलती (Talkie) फ़िल्म!** कृष्ण देव मेहरा (K.D. Mehra) द्वारा कलकत्ता में निर्मित; इसमें **नूर जहाँ** ने बाल कलाकार के रूप में पदार्पण किया। |
   | ***नानक नाम जहाज़ है*** | **1969 — राम माहेश्वरी** | पृथ्वीराज कपूर, आई.एस. जौहर, विमी व निशि अभिनीत (संगीत: एस. मोहिंदर)। श्री गुरु नानक देव जी के 500वें प्रकाश पर्व (1969) पर रिलीज़ ऐतिहासिक धार्मिक फ़िल्म जिसने **राष्ट्रीय फ़िल्म पुरस्कार** जीता। |
   | ***चन्न परदेसी (Chann Pardesi)*** | **1980 — चित्रार्थ सिंह** | राज बब्बर, रमा विज, अमरीश पुरी, कुलभूषण खरबंदा, ओम पुरी व मेहर मित्तल अभिनीत। **सर्वश्रेष्ठ पंजाबी फीचर फ़िल्म के लिए राष्ट्रीय पुरस्कार (रजत कमल) जीतने वाली प्रसिद्ध आधुनिक क्लासिक फ़िल्म**। |
   | ***मढ़ी दा दीवा*** (1989) एवं ***अन्हे घोड़े दा दान*** (2011) | सुरिंदर सिंह / गुरविंदर सिंह | दोनों फ़िल्में **गुरदियाल सिंह** के उपन्यासों पर आधारित हैं और राष्ट्रीय फ़िल्म पुरस्कार विजेता हैं। |
   | **दादा साहब फाल्के पुरस्कार** | **1969** में शुरू | भारतीय सिनेमा का सर्वोच्च सम्मान; **प्रथम विजेता (1969): देविका रानी**। |`
        },
        keyNotes: {
            en: [
                'Baba Sheikh Farid Ji (1173–1266, Chishti Sufi order) is the Father of Punjabi Poetry (112 Saloks & 4 Shabads in Sri Guru Granth Sahib Ji); Bhai Vir Singh (1872–1957) is the Father of Modern Punjabi Literature (first novel Sundari 1898; first Sahitya Akademi Award 1955 for Mere Sainya Jio).',
                'Only TWO Punjabi writers have won the Jnanpith Award: Amrita Pritam in 1981 (for Kagaz Te Canvas) and Gurdial Singh in 1999 (author of Marhi Da Deeva and Anhe Ghore Da Daan).',
                'Nanak Singh is the Father of Punjabi Novel (Chitta Lahu, Pavittar Paapi, Ek Mian Do Talwaran — 1962 Sahitya Akademi); Shiv Kumar Batalvi ("Birha da Sultan") became the youngest Sahitya Akademi winner in 1967 at age 30 for his verse-play Loona.',
                'Important Autobiographies: Amrita Pritam = Rasidi Ticket; Dalip Kaur Tiwana = Nange Pairan Da Safar; Balwant Gargi = Nangi Dhup; Nanak Singh = Meri Duniya; Ajit Cour = Khanabadosh; Gurdial Singh = Neean Mattiyan.',
                'Qissa Kav Classics: Damodar wrote the first Heer (Davaiya meter), while Waris Shah wrote the masterpiece Heer in 1766 in Baint meter; Peelu wrote Mirza Sahiban in Sadd; Hashim Shah wrote Sassi Punnu; Qadir Yar wrote Puran Bhagat.',
                'Cinema Milestones: Raja Harishchandra (1913, Dadasaheb Phalke) = first Indian silent film; Alam Ara (1931, Ardeshir Irani) = first Indian talkie; Pind Di Kuri / Sheela (1935, K.D. Mehra) = first Punjabi talkie; Nanak Naam Jahaz Hai (1969) & Chann Pardesi (1980) = National Award-winning Punjabi classics.'
            ],
            pa: [
                'ਬਾਬਾ ਸ਼ੇਖ਼ ਫ਼ਰੀਦ ਜੀ (1173–1266, ਚਿਸ਼ਤੀ ਸਿਲਸਿਲਾ) ਪੰਜਾਬੀ ਕਵਿਤਾ ਦੇ ਪਿਤਾਮਾ ਹਨ (ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ 112 ਸਲੋਕ ਤੇ 4 ਸ਼ਬਦ); ਭਾਈ ਵੀਰ ਸਿੰਘ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ ਹਨ (ਪਹਿਲਾ ਨਾਵਲ ਸੁੰਦਰੀ 1898; 1955 ਵਿੱਚ ਮੇਰੇ ਸਾਈਆਂ ਜੀਉ ਲਈ ਪਹਿਲਾ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ)।',
                'ਪੰਜਾਬੀ ਵਿੱਚ ਸਿਰਫ਼ ਦੋ ਸਾਹਿਤਕਾਰਾਂ ਨੂੰ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਹੈ: ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ (1981 ਵਿੱਚ ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ ਲਈ) ਅਤੇ ਗੁਰਦਿਆਲ ਸਿੰਘ (1999 ਵਿੱਚ; ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ ਅਤੇ ਅੰਨ੍ਹੇ ਘੋੜੇ ਦਾ ਦਾਨ ਦੇ ਲੇਖਕ)।',
                'ਨਾਨਕ ਸਿੰਘ ਪੰਜਾਬੀ ਨਾਵਲ ਦੇ ਪਿਤਾਮਾ ਹਨ (ਚਿੱਟਾ ਲਹੂ, ਪਵਿੱਤਰ ਪਾਪੀ, ਇੱਕ ਮਿਆਨ ਦੋ ਤਲਵਾਰਾਂ — 1962 ਸਾਹਿਤ ਅਕਾਦਮੀ); ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ ("ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ") ਨੂੰ 1967 ਵਿੱਚ ਕਾਵਿ-ਨਾਟਕ ਲੂਣਾ ਲਈ ਸਭ ਤੋਂ ਘੱਟ ਉਮਰ (30 ਸਾਲ) ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ।',
                'ਪ੍ਰਮੁੱਖ ਸਵੈ-ਜੀਵਨੀਆਂ: ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ = ਰਸੀਦੀ ਟਿਕਟ; ਦਲੀਪ ਕੌਰ ਟਿਵਾਣਾ = ਨੰਗੇ ਪੈਰਾਂ ਦਾ ਸਫ਼ਰ; ਬਲਵੰਤ ਗਾਰਗੀ = ਨੰਗੀ ਧੁੱਪ; ਨਾਨਕ ਸਿੰਘ = ਮੇਰੀ ਦੁਨੀਆ; ਅਜੀਤ ਕੌਰ = ਖ਼ਾਨਾਬਦੋਸ਼; ਗੁਰਦਿਆਲ ਸਿੰਘ = ਨੀਂਵ ਮੱਤੀਆਂ।',
                'ਕਿੱਸਾ ਕਾਵਿ: ਦਾਮੋਦਰ ਨੇ ਪਹਿਲੀ ਹੀਰ ਲਿਖੀ, ਜਦਕਿ ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ 1766 ਵਿੱਚ ਬੈਂਤ ਛੰਦ ਵਿੱਚ ਸ਼ਾਹਕਾਰ ਹੀਰ ਰਚੀ; ਪੀਲੂ ਨੇ ਸੱਦ ਵਿੱਚ ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ; ਹਾਸ਼ਮ ਸ਼ਾਹ ਨੇ ਸੱਸੀ ਪੁੰਨੂੰ ਅਤੇ ਕਾਦਰਯਾਰ ਨੇ ਪੂਰਨ ਭਗਤ ਲਿਖਿਆ।',
                'ਸਿਨੇਮਾ ਮੀਲ-ਪੱਥਰ: ਰਾਜਾ ਹਰੀਸ਼ਚੰਦਰ (1913) = ਪਹਿਲੀ ਭਾਰਤੀ ਮੂਕ ਫ਼ਿਲਮ; ਆਲਮ ਆਰਾ (1931) = ਪਹਿਲੀ ਭਾਰਤੀ ਬੋਲਦੀ ਫ਼ਿਲਮ; ਪਿੰਡ ਦੀ ਕੁੜੀ / ਸ਼ੀਲਾ (1935, ਕੇ.ਡੀ. ਮਹਿਰਾ) = ਪਹਿਲੀ ਪੰਜਾਬੀ ਬੋਲਦੀ ਫ਼ਿਲਮ; ਨਾਨਕ ਨਾਮ ਜਹਾਜ਼ ਹੈ (1969) ਤੇ ਚੰਨ ਪਰਦੇਸੀ (1980) = ਰਾਸ਼ਟਰੀ ਪੁਰਸਕਾਰ ਜੇਤੂ ਪੰਜਾਬੀ ਫ਼ਿਲਮਾਂ।'
            ],
            hi: [
                'बाबा शेख़ फ़रीद जी (1173–1266, चिश्ती सिलसिला) पंजाबी कविता के पितामह हैं (श्री गुरु ग्रंथ साहिब में 112 श्लोक व 4 शब्द); भाई वीर सिंह आधुनिक पंजाबी साहित्य के पितामह हैं (प्रथम उपन्यास सुंदरी 1898; 1955 में मेरे साइयां जीउ के लिए प्रथम साहित्य अकादमी पुरस्कार)।',
                'पंजाबी में केवल दो साहित्यकारों को ज्ञानपीठ पुरस्कार मिला है: अमृता प्रीतम (1981 में काग़ज़ ते कैनवस के लिए) तथा गुरदियाल सिंह (1999 में; मढ़ी दा दीवा और अन्हे घोड़े दा दान के लेखक)।',
                'नानक सिंह पंजाबी उपन्यास के पितामह हैं (चिट्टा लहू, पवित्र पापी, इक्क म्यान दो तलवारां — 1962 साहित्य अकादमी); शिव कुमार बटालवी ("बिरहा दा सुल्तान") को 1967 में काव्य-नाटक लूणा के लिए सबसे कम आयु (30 वर्ष) में साहित्य अकादमी पुरस्कार मिला।',
                'प्रमुख आत्मकथाएँ: अमृता प्रीतम = रसीदी टिकट; दलीप कौर टिवाणा = नंगे पैरां दा सफ़र; बलवंत गार्गी = नंगी धुप; नानक सिंह = मेरी दुनिया; अजीत कौर = ख़ानाबदोश; गुरदियाल सिंह = नींव मत्तियां।',
                'किस्सा काव्य: दामोदर ने पहली हीर लिखी, जबकि वारिस शाह ने 1766 में बैंत छंद में कालजयी हीर रची; पीलू ने सद्द में मिर्ज़ा साहिबां; हाशिम शाह ने सस्सी पुन्नू और कादरयार ने पूरन भगत लिखा।',
                'सिनेमा मील के पत्थर: राजा हरिश्चंद्र (1913) = प्रथम भारतीय मूक फ़िल्म; आलम आरा (1931) = प्रथम भारतीय बोलती फ़िल्म; पिंड दी कुड़ी / शीला (1935, के.डी. मेहरा) = प्रथम पंजाबी बोलती फ़िल्म; नानक नाम जहाज़ है (1969) व चन्न परदेसी (1980) = राष्ट्रीय पुरस्कार विजेता पंजाबी फ़िल्में।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Fathers of Punjabi Literature: Poetry = Baba Sheikh Farid Ji; Modern Literature = Bhai Vir Singh; Free Verse (Khulli Kavita) = Prof. Puran Singh; Novel = Nanak Singh; Short Story Emperor = Kulwant Singh Virk.',
                '2 Punjabi Jnanpith Winners: (1) Amrita Pritam (1981 — Kagaz Te Canvas) & (2) Gurdial Singh (1999 — Marhi Da Deeva author).',
                'Firsts in Sahitya Akademi (Punjabi): 1st Winner = Bhai Vir Singh (1955, Mere Sainya Jio); 1st Woman = Amrita Pritam (1956, Sunehade); Youngest Winner = Shiv Kumar Batalvi (1967, Loona).',
                'Autobiography Match: Rasidi Ticket (Amrita Pritam) • Nange Pairan Da Safar (Dalip Kaur Tiwana) • Khanabadosh (Ajit Cour) • Nangi Dhup (Balwant Gargi) • Meri Duniya (Nanak Singh).',
                'Cinema Timeline: 1913 Raja Harishchandra (1st Silent) -> 1931 Alam Ara (1st Talkie) -> 1935 Pind Di Kuri / Sheela (1st Punjabi Talkie by K.D. Mehra) -> 1969 Nanak Naam Jahaz Hai -> 1980 Chann Pardesi.'
            ],
            pa: [
                'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ: ਕਵਿਤਾ = ਬਾਬਾ ਸ਼ੇਖ਼ ਫ਼ਰੀਦ ਜੀ; ਆਧੁਨਿਕ ਸਾਹਿਤ = ਭਾਈ ਵੀਰ ਸਿੰਘ; ਖੁੱਲ੍ਹੀ ਕਵਿਤਾ = ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ; ਨਾਵਲ = ਨਾਨਕ ਸਿੰਘ; ਨਿੱਕੀ ਕਹਾਣੀ ਦਾ ਬਾਦਸ਼ਾਹ = ਕੁਲਵੰਤ ਸਿੰਘ ਵਿਰਕ।',
                '2 ਪੰਜਾਬੀ ਗਿਆਨਪੀਠ ਜੇਤੂ: (1) ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ (1981 — ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ) ਅਤੇ (2) ਗੁਰਦਿਆਲ ਸਿੰਘ (1999 — ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ ਦੇ ਲੇਖਕ)।',
                'ਸਾਹਿਤ ਅਕਾਦਮੀ (ਪੰਜਾਬੀ) ਰਿਕਾਰਡ: ਪਹਿਲੇ ਜੇਤੂ = ਭਾਈ ਵੀਰ ਸਿੰਘ (1955, ਮੇਰੇ ਸਾਈਆਂ ਜੀਉ); ਪਹਿਲੀ ਮਹਿਲਾ = ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ (1956, ਸੁਨੇਹੜੇ); ਸਭ ਤੋਂ ਘੱਟ ਉਮਰ = ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ (1967, ਲੂਣਾ)।',
                'ਸਵੈ-ਜੀਵਨੀ ਮਿਲਾਨ: ਰਸੀਦੀ ਟਿਕਟ (ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ) • ਨੰਗੇ ਪੈਰਾਂ ਦਾ ਸਫ਼ਰ (ਦਲੀਪ ਕੌਰ ਟਿਵਾਣਾ) • ਖ਼ਾਨਾਬਦੋਸ਼ (ਅਜੀਤ ਕੌਰ) • ਨੰਗੀ ਧੁੱਪ (ਬਲਵੰਤ ਗਾਰਗੀ) • ਮੇਰੀ ਦੁਨੀਆ (ਨਾਨਕ ਸਿੰਘ)।',
                'ਸਿਨੇਮਾ ਕ੍ਰਮ: 1913 ਰਾਜਾ ਹਰੀਸ਼ਚੰਦਰ (ਪਹਿਲੀ ਮੂਕ) -> 1931 ਆਲਮ ਆਰਾ (ਪਹਿਲੀ ਬੋਲਦੀ) -> 1935 ਪਿੰਡ ਦੀ ਕੁੜੀ / ਸ਼ੀਲਾ (ਪਹਿਲੀ ਪੰਜਾਬੀ ਬੋਲਦੀ, ਕੇ.ਡੀ. ਮਹਿਰਾ) -> 1969 ਨਾਨਕ ਨਾਮ ਜਹਾਜ਼ ਹੈ -> 1980 ਚੰਨ ਪਰਦੇਸੀ।'
            ],
            hi: [
                'पंजाबी साहित्य के पितामह: कविता = बाबा शेख़ फ़रीद जी; आधुनिक साहित्य = भाई वीर सिंह; खुली कविता = प्रो. पूरन सिंह; उपन्यास = नानक सिंह; लघु कहानी के बादशाह = कुलवंत सिंह विर्क।',
                '2 पंजाबी ज्ञानपीठ विजेता: (1) अमृता प्रीतम (1981 — काग़ज़ ते कैनवस) तथा (2) गुरदियाल सिंह (1999 — मढ़ी दा दीवा के लेखक)।',
                'साहित्य अकादमी (पंजाबी) रिकॉर्ड: प्रथम विजेता = भाई वीर सिंह (1955, मेरे साइयां जीउ); प्रथम महिला = अमृता प्रीतम (1956, सुनेहड़े); सबसे कम आयु = शिव कुमार बटालवी (1967, लूणा)।',
                'आत्मकथा मिलान: रसीदी टिकट (अमृता प्रीतम) • नंगे पैरां दा सफ़र (दलीप कौर टिवाणा) • ख़ानाबदोश (अजीत कौर) • नंगी धुप (बलवंत गार्गी) • मेरी दुनिया (नानक सिंह)।',
                'सिनेमा क्रम: 1913 राजा हरिश्चंद्र (प्रथम मूक) -> 1931 आलम आरा (प्रथम बोलती) -> 1935 पिंड दी कुड़ी / शीला (प्रथम पंजाबी बोलती, के.डी. मेहरा) -> 1969 नानक नाम जहाज़ है -> 1980 चन्न परदेसी।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Confusing Amrita Pritam’s Sahitya Akademi-winning book (Sunehade, 1956) with her Jnanpith-winning book (Kagaz Te Canvas, 1981). Correction: Amrita Pritam won the Sahitya Akademi Award in 1956 for "Sunehade" and the Jnanpith Award in 1981 for "Kagaz Te Canvas".',
                'Misconception: Thinking Waris Shah was the first poet to write the Qissa of Heer Ranjha in Punjabi. Correction: Damodar Das Gulati wrote the FIRST Qissa of Heer (during Emperor Akbar’s reign in Davaiya meter), whereas Waris Shah wrote the most famous masterpiece Heer in 1766 AD in Baint meter.',
                'Misconception: Confusing the Father of Modern Punjabi Literature (Bhai Vir Singh, who wrote the first Punjabi novel Sundari in 1898) with the Father of Punjabi Novel (Nanak Singh). Correction: Bhai Vir Singh is the Father of Modern Punjabi Literature, while Nanak Singh is specifically called the Father of the Punjabi Novel.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਦੀ ਸਾਹਿਤ ਅਕਾਦਮੀ ਜੇਤੂ ਪੁਸਤਕ (ਸੁਨੇਹੜੇ, 1956) ਅਤੇ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜੇਤੂ ਪੁਸਤਕ (ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ, 1981) ਵਿੱਚ ਭੁਲੇਖਾ ਖਾਣਾ। ਸੁਧਾਰ: ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਨੂੰ 1956 ਵਿੱਚ "ਸੁਨੇਹੜੇ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਅਤੇ 1981 ਵਿੱਚ "ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ" ਲਈ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ।',
                'ਭੁਲੇਖਾ: ਵਾਰਿਸ ਸ਼ਾਹ ਨੂੰ ਪੰਜਾਬੀ ਵਿੱਚ ਹੀਰ ਦਾ ਕਿੱਸਾ ਲਿਖਣ ਵਾਲਾ ਪਹਿਲਾ ਕਵੀ ਮੰਨਣਾ। ਸੁਧਾਰ: ਪੰਜਾਬੀ ਵਿੱਚ ਹੀਰ ਦਾ ਪਹਿਲਾ ਕਿੱਸਾ ਦਾਮੋਦਰ ਦਾਸ ਗੁਲਾਟੀ ਨੇ (ਅਕਬਰ ਦੇ ਸਮੇਂ ਦਵੱਈਆ ਛੰਦ ਵਿੱਚ) ਲਿਖਿਆ ਸੀ, ਜਦਕਿ ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ 1766 ਈ. ਵਿੱਚ ਬੈਂਤ ਛੰਦ ਵਿੱਚ ਸਭ ਤੋਂ ਪ੍ਰਸਿੱਧ ਕਿੱਸਾ ਹੀਰ ਰਚਿਆ।',
                'ਭੁਲੇਖਾ: ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ (ਭਾਈ ਵੀਰ ਸਿੰਘ) ਅਤੇ ਪੰਜਾਬੀ ਨਾਵਲ ਦੇ ਪਿਤਾਮਾ (ਨਾਨਕ ਸਿੰਘ) ਵਿੱਚ ਉਲਝਣਾ। ਸੁਧਾਰ: ਭਾਵੇਂ ਪਹਿਲਾ ਪੰਜਾਬੀ ਨਾਵਲ "ਸੁੰਦਰੀ" (1898) ਭਾਈ ਵੀਰ ਸਿੰਘ ਨੇ ਲਿਖਿਆ (ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ), ਪਰ "ਪੰਜਾਬੀ ਨਾਵਲ ਦੇ ਪਿਤਾਮਾ" ਨਾਨਕ ਸਿੰਘ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: अमृता प्रीतम की साहित्य अकादमी विजेता पुस्तक (सुनेहड़े, 1956) और ज्ञानपीठ पुरस्कार विजेता पुस्तक (काग़ज़ ते कैनवस, 1981) में भ्रमित होना। सुधार: अमृता प्रीतम को 1956 में "सुनेहड़े" के लिए साहित्य अकादमी पुरस्कार तथा 1981 में "काग़ज़ ते कैनवस" के लिए ज्ञानपीठ पुरस्कार मिला था।',
                'भ्रांति: वारिस शाह को पंजाबी में हीर का किस्सा लिखने वाला प्रथम कवि मानना। सुधार: पंजाबी में हीर का प्रथम किस्सा दामोदर दास गुलाटी ने (अकबर के काल में दवैया छंद में) लिखा था, जबकि वारिस शाह ने 1766 ई. में बैंत छंद में सर्वाधिक प्रसिद्ध किस्सा हीर रचा।',
                'भ्रांति: आधुनिक पंजाबी साहित्य के पितामह (भाई वीर सिंह) और पंजाबी उपन्यास के पितामह (नानक सिंह) में भ्रमित होना। सुधार: यद्यपि प्रथम पंजाबी उपन्यास "सुंदरी" (1898) भाई वीर सिंह ने लिखा (आधुनिक पंजाबी साहित्य के पितामह), किंतु "पंजाबी उपन्यास के पितामह" नानक सिंह कहलाते हैं।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — Sahitya Akademi & Jnanpith Awards in Punjabi] Answer the following: (a) Who won the first Sahitya Akademi Award in Punjabi in 1955 and for which book? (b) Name the two Punjabi writers who have received the Jnanpith Award along with their years.',
                    pa: '[Easy — ਪੰਜਾਬੀ ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਅਤੇ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ] ਦੱਸੋ: (a) 1955 ਵਿੱਚ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਪਹਿਲਾ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਕਿਸ ਨੇ ਅਤੇ ਕਿਸ ਪੁਸਤਕ ਲਈ ਜਿੱਤਿਆ? (b) ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲੇ ਦੋ ਪੰਜਾਬੀ ਸਾਹਿਤਕਾਰਾਂ ਦੇ ਨਾਂ ਅਤੇ ਸਾਲ ਦੱਸੋ।',
                    hi: '[Easy — पंजाबी में साहित्य अकादमी एवं ज्ञानपीठ पुरस्कार] बताइए: (a) 1955 में पंजाबी भाषा का प्रथम साहित्य अकादमी पुरस्कार किसने और किस पुस्तक के लिए जीता? (b) ज्ञानपीठ पुरस्कार प्राप्त करने वाले दो पंजाबी साहित्यकारों के नाम और वर्ष बताइए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Bhai Vir Singh won the first Sahitya Akademi Award for Punjabi in 1955 for his poetry collection "Mere Sainya Jio".',
                        'Step 2: Amrita Pritam became the first Punjabi writer to receive the Jnanpith Award in 1981 for "Kagaz Te Canvas".',
                        'Step 3: Novelist Gurdial Singh became the second Punjabi writer to receive the Jnanpith Award in 1999.'
                    ],
                    pa: [
                        'Step 1: ਭਾਈ ਵੀਰ ਸਿੰਘ ਨੇ 1955 ਵਿੱਚ ਆਪਣੀ ਪੁਸਤਕ "ਮੇਰੇ ਸਾਈਆਂ ਜੀਉ" ਲਈ ਪੰਜਾਬੀ ਦਾ ਪਹਿਲਾ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਜਿੱਤਿਆ।',
                        'Step 2: ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਨੇ 1981 ਵਿੱਚ "ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ" ਲਈ ਪੰਜਾਬੀ ਦਾ ਪਹਿਲਾ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਪ੍ਰਾਪਤ ਕੀਤਾ।',
                        'Step 3: ਨਾਵਲਕਾਰ ਗੁਰਦਿਆਲ ਸਿੰਘ ਨੇ 1999 ਵਿੱਚ ਪੰਜਾਬੀ ਦਾ ਦੂਜਾ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਪ੍ਰਾਪਤ ਕੀਤਾ।'
                    ],
                    hi: [
                        'Step 1: भाई वीर सिंह ने 1955 में अपनी कृति "मेरे साइयां जीउ" के लिए पंजाबी का प्रथम साहित्य अकादमी पुरस्कार जीता।',
                        'Step 2: अमृता प्रीतम ने 1981 में "काग़ज़ ते कैनवस" के लिए पंजाबी का प्रथम ज्ञानपीठ पुरस्कार प्राप्त किया।',
                        'Step 3: उपन्यासकार गुरदियाल सिंह ने 1999 में पंजाबी का दूसरा ज्ञानपीठ पुरस्कार प्राप्त किया।'
                    ]
                },
                finalAnswer: {
                    en: '(a) Bhai Vir Singh for "Mere Sainya Jio" (1955); (b) Amrita Pritam (1981) & Gurdial Singh (1999)',
                    pa: '(a) ਭਾਈ ਵੀਰ ਸਿੰਘ ("ਮੇਰੇ ਸਾਈਆਂ ਜੀਉ", 1955); (b) ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ (1981) ਅਤੇ ਗੁਰਦਿਆਲ ਸਿੰਘ (1999)',
                    hi: '(a) भाई वीर सिंह ("मेरे साइयां जीउ", 1955); (b) अमृता प्रीतम (1981) एवं गुरदियाल सिंह (1999)'
                }
            },
            {
                problem: {
                    en: '[Medium — Punjabi Cinema History] Identify: (a) Which was the first Punjabi talkie film (1935) and who directed it? (b) Which 1980 Punjabi film starring Raj Babbar, Amrish Puri, and Om Puri won the National Film Award (Rajat Kamal) for Best Feature Film in Punjabi?',
                    pa: '[Medium — ਪੰਜਾਬੀ ਸਿਨੇਮਾ ਦਾ ਇਤਿਹਾਸ] ਪਛਾਣ ਕਰੋ: (a) ਪੰਜਾਬੀ ਦੀ ਪਹਿਲੀ ਬੋਲਦੀ ਫ਼ਿਲਮ (1935) ਕਿਹੜੀ ਸੀ ਅਤੇ ਇਸ ਦਾ ਨਿਰਦੇਸ਼ਕ ਕੌਣ ਸੀ? (b) ਰਾਜ ਬੱਬਰ, ਅਮਰੀਸ਼ ਪੁਰੀ ਅਤੇ ਓਮ ਪੁਰੀ ਅਭਿਨੀਤ 1980 ਦੀ ਕਿਹੜੀ ਪੰਜਾਬੀ ਫ਼ਿਲਮ ਨੇ ਸਰਵੋਤਮ ਪੰਜਾਬੀ ਫੀਚਰ ਫ਼ਿਲਮ ਦਾ ਰਾਸ਼ਟਰੀ ਪੁਰਸਕਾਰ ਜਿੱਤਿਆ?',
                    hi: '[Medium — पंजाबी सिनेमा का इतिहास] पहचान कीजिए: (a) पंजाबी की प्रथम बोलती फ़िल्म (1935) कौन-सी थी और इसके निर्देशक कौन थे? (b) राज बब्बर, अमरीश पुरी और ओम पुरी अभिनीत 1980 की किस पंजाबी फ़िल्म ने सर्वश्रेष्ठ पंजाबी फीचर फ़िल्म का राष्ट्रीय पुरस्कार जीता?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: The first Punjabi talkie film was "Pind Di Kuri" (also titled "Sheela"), released in 1935 and directed by K.D. Mehra in Calcutta.',
                        'Step 2: In 1980, the landmark Punjabi film "Chann Pardesi" (directed by Chitrarth Singh) won the National Film Award for Best Feature Film in Punjabi.'
                    ],
                    pa: [
                        'Step 1: ਪੰਜਾਬੀ ਦੀ ਪਹਿਲੀ ਬੋਲਦੀ ਫ਼ਿਲਮ "ਪਿੰਡ ਦੀ ਕੁੜੀ" (ਜਿਸ ਨੂੰ "ਸ਼ੀਲਾ" ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ) ਸੀ, ਜੋ 1935 ਵਿੱਚ ਕੇ.ਡੀ. ਮਹਿਰਾ ਦੇ ਨਿਰਦੇਸ਼ਨ ਹੇਠ ਬਣੀ।',
                        'Step 2: 1980 ਵਿੱਚ "ਚੰਨ ਪਰਦੇਸੀ" (ਨਿਰਦੇਸ਼ਕ ਚਿਤ੍ਰਾਰਥ ਸਿੰਘ) ਨੇ ਸਰਵੋਤਮ ਪੰਜਾਬੀ ਫੀਚਰ ਫ਼ਿਲਮ ਦਾ ਰਾਸ਼ਟਰੀ ਪੁਰਸਕਾਰ (ਰਜਤ ਕਮਲ) ਜਿੱਤਿਆ।'
                    ],
                    hi: [
                        'Step 1: पंजाबी की प्रथम बोलती फ़िल्म "पिंड दी कुड़ी" (जिसे "शीला" भी कहा जाता है) थी, जो 1935 में के.डी. मेहरा के निर्देशन में बनी।',
                        'Step 2: 1980 में "चन्न परदेसी" (निर्देशक चित्रार्थ सिंह) ने सर्वश्रेष्ठ पंजाबी फीचर फ़िल्म का राष्ट्रीय पुरस्कार (रजत कमल) जीता।'
                    ]
                },
                finalAnswer: {
                    en: '(a) Pind Di Kuri / Sheela (1935), directed by K.D. Mehra; (b) Chann Pardesi (1980)',
                    pa: '(a) ਪਿੰਡ ਦੀ ਕੁੜੀ / ਸ਼ੀਲਾ (1935), ਨਿਰਦੇਸ਼ਕ ਕੇ.ਡੀ. ਮਹਿਰਾ; (b) ਚੰਨ ਪਰਦੇਸੀ (1980)',
                    hi: '(a) पिंड दी कुड़ी / शीला (1935), निर्देशक के.डी. मेहरा; (b) चन्न परदेसी (1980)'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-clk-lit-1',
                question: {
                    en: 'Who is known as the Father of Modern Punjabi Literature, what was the first Punjabi novel (1898), and which book won him the 1955 Sahitya Akademi Award?',
                    pa: 'ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਪਿਤਾਮਾ ਕਿਸ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਪਹਿਲਾ ਪੰਜਾਬੀ ਨਾਵਲ (1898) ਕਿਹੜਾ ਸੀ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ 1955 ਵਿੱਚ ਕਿਸ ਪੁਸਤਕ ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ?',
                    hi: 'आधुनिक पंजाबी साहित्य का पितामह किसे कहा जाता है, प्रथम पंजाबी उपन्यास (1898) कौन-सा था और उन्हें 1955 में किस पुस्तक के लिए साहित्य अकादमी पुरस्कार मिला?'
                },
                answer: {
                    en: 'Bhai Vir Singh; first Punjabi novel: "Sundari" (1898); first Sahitya Akademi Award in Punjabi (1955) for "Mere Sainya Jio".',
                    pa: 'ਭਾਈ ਵੀਰ ਸਿੰਘ; ਪਹਿਲਾ ਪੰਜਾਬੀ ਨਾਵਲ: "ਸੁੰਦਰੀ" (1898); 1955 ਵਿੱਚ "ਮੇਰੇ ਸਾਈਆਂ ਜੀਉ" ਲਈ ਪਹਿਲਾ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ।',
                    hi: 'भाई वीर सिंह; प्रथम पंजाबी उपन्यास: "सुंदरी" (1898); 1955 में "मेरे साइयां जीउ" के लिए प्रथम साहित्य अकादमी पुरस्कार।'
                }
            },
            {
                id: 'fc-clk-lit-2',
                question: {
                    en: 'Name the two Punjabi litterateurs who have won the Jnanpith Award, along with the years of their awards.',
                    pa: 'ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜਿੱਤਣ ਵਾਲੇ ਦੋ ਪੰਜਾਬੀ ਸਾਹਿਤਕਾਰਾਂ ਦੇ ਨਾਂ ਅਤੇ ਸਾਲ ਦੱਸੋ।',
                    hi: 'ज्ञानपीठ पुरस्कार जीतने वाले दो पंजाबी साहित्यकारों के नाम और वर्ष बताइए।'
                },
                answer: {
                    en: '1. Amrita Pritam in 1981 (for "Kagaz Te Canvas"); 2. Gurdial Singh in 1999 (author of "Marhi Da Deeva").',
                    pa: '1. ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ (1981 — "ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ" ਲਈ); 2. ਗੁਰਦਿਆਲ ਸਿੰਘ (1999 — "ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ" ਦੇ ਲੇਖਕ)।',
                    hi: '1. अमृता प्रीतम (1981 — "काग़ज़ ते कैनवस" के लिए); 2. गुरदियाल सिंह (1999 — "मढ़ी दा दीवा" के लेखक)।'
                }
            },
            {
                id: 'fc-clk-lit-3',
                question: {
                    en: 'Who is known as "Birha da Sultan" in Punjabi poetry, and for which verse-play did he become the youngest Sahitya Akademi Award winner in 1967?',
                    pa: 'ਪੰਜਾਬੀ ਕਵਿਤਾ ਵਿੱਚ "ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ" ਕਿਸ ਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਅਤੇ 1967 ਵਿੱਚ ਕਿਸ ਕਾਵਿ-ਨਾਟਕ ਲਈ ਉਹ ਸਭ ਤੋਂ ਘੱਟ ਉਮਰ ਦੇ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਜੇਤੂ ਬਣੇ?',
                    hi: 'पंजाबी कविता में "बिरहा दा सुल्तान" किसे कहा जाता है और 1967 में किस काव्य-नाटक के लिए वे सबसे कम आयु के साहित्य अकादमी पुरस्कार विजेता बने?'
                },
                answer: {
                    en: 'Shiv Kumar Batalvi (won the 1967 Sahitya Akademi Award at age 30 for his masterpiece verse-play "Loona").',
                    pa: 'ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ (1967 ਵਿੱਚ 30 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਕਾਵਿ-ਨਾਟਕ "ਲੂਣਾ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਜਿੱਤਿਆ)।',
                    hi: 'शिव कुमार बटालवी (1967 में 30 वर्ष की आयु में काव्य-नाटक "लूणा" के लिए साहित्य अकादमी पुरस्कार जीता)।'
                }
            },
            {
                id: 'fc-clk-lit-4',
                question: {
                    en: 'Match the autobiographies with their Punjabi authors: (1) Rasidi Ticket, (2) Nange Pairan Da Safar, (3) Khanabadosh, (4) Nangi Dhup.',
                    pa: 'ਸਵੈ-ਜੀਵਨੀਆਂ ਦਾ ਉਨ੍ਹਾਂ ਦੇ ਲੇਖਕਾਂ ਨਾਲ ਮਿਲਾਨ ਕਰੋ: (1) ਰਸੀਦੀ ਟਿਕਟ, (2) ਨੰਗੇ ਪੈਰਾਂ ਦਾ ਸਫ਼ਰ, (3) ਖ਼ਾਨਾਬਦੋਸ਼, (4) ਨੰਗੀ ਧੁੱਪ।',
                    hi: 'आत्मकथाओं का उनके लेखकों से मिलान कीजिए: (1) रसीदी टिकट, (2) नंगे पैरां दा सफ़र, (3) ख़ानाबदोश, (4) नंगी धुप।'
                },
                answer: {
                    en: '(1) Rasidi Ticket -> Amrita Pritam; (2) Nange Pairan Da Safar -> Dalip Kaur Tiwana; (3) Khanabadosh -> Ajit Cour; (4) Nangi Dhup -> Balwant Gargi.',
                    pa: '(1) ਰਸੀਦੀ ਟਿਕਟ -> ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ; (2) ਨੰਗੇ ਪੈਰਾਂ ਦਾ ਸਫ਼ਰ -> ਦਲੀਪ ਕੌਰ ਟਿਵਾਣਾ; (3) ਖ਼ਾਨਾਬਦੋਸ਼ -> ਅਜੀਤ ਕੌਰ; (4) ਨੰਗੀ ਧੁੱਪ -> ਬਲਵੰਤ ਗਾਰਗੀ।',
                    hi: '(1) रसीदी टिकट -> अमृता प्रीतम; (2) नंगे पैरां दा सफ़र -> दलीप कौर टिवाणा; (3) ख़ानाबदोश -> अजीत कौर; (4) नंगी धुप -> बलवंत गार्गी।'
                }
            },
            {
                id: 'fc-clk-lit-5',
                question: {
                    en: 'Which was the first Punjabi talkie film (1935), who directed it, and which legendary singer debuted in it as a child artist?',
                    pa: 'ਪੰਜਾਬੀ ਦੀ ਪਹਿਲੀ ਬੋਲਦੀ ਫ਼ਿਲਮ (1935) ਕਿਹੜੀ ਸੀ, ਇਸ ਦਾ ਨਿਰਦੇਸ਼ਕ ਕੌਣ ਸੀ ਅਤੇ ਕਿਸ ਮਹਾਨ ਗਾਇਕਾ ਨੇ ਇਸ ਵਿੱਚ ਬਾਲ ਕਲਾਕਾਰ ਵਜੋਂ ਸ਼ੁਰੂਆਤ ਕੀਤੀ?',
                    hi: 'पंजाबी की प्रथम बोलती फ़िल्म (1935) कौन-सी थी, इसके निर्देशक कौन थे और किस महान गायिका ने इसमें बाल कलाकार के रूप में पदार्पण किया?'
                },
                answer: {
                    en: '"Pind Di Kuri" (also called "Sheela", 1935), directed by K.D. Mehra in Calcutta; Baby Noor Jehan debuted in it as a child artist.',
                    pa: '"ਪਿੰਡ ਦੀ ਕੁੜੀ" ("ਸ਼ੀਲਾ", 1935), ਨਿਰਦੇਸ਼ਕ ਕੇ.ਡੀ. ਮਹਿਰਾ (ਕਲਕੱਤਾ); ਨੂਰ ਜਹਾਂ ਨੇ ਇਸ ਵਿੱਚ ਬਾਲ ਕਲਾਕਾਰ ਵਜੋਂ ਸ਼ੁਰੂਆਤ ਕੀਤੀ।',
                    hi: '"पिंड दी कुड़ी" ("शीला", 1935), निर्देशक के.डी. मेहरा (कलकत्ता); नूर जहाँ ने इसमें बाल कलाकार के रूप में पदार्पण किया।'
                }
            },
            {
                id: 'fc-clk-lit-6',
                question: {
                    en: 'In which meter (Chhand) did Waris Shah compose his masterpiece Qissa "Heer" in 1766 AD, and who wrote the Qissa "Mirza Sahiban" in Sadd form?',
                    pa: 'ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ 1766 ਈ. ਵਿੱਚ ਆਪਣਾ ਸ਼ਾਹਕਾਰ ਕਿੱਸਾ "ਹੀਰ" ਕਿਸ ਛੰਦ ਵਿੱਚ ਲਿਖਿਆ ਅਤੇ "ਸੱਦ" ਕਾਵਿ-ਰੂਪ ਵਿੱਚ "ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ" ਕਿਸ ਨੇ ਲਿਖਿਆ?',
                    hi: 'वारिस शाह ने 1766 ई. में अपना कालजयी किस्सा "हीर" किस छंद में लिखा और "सद्द" काव्य-रूप में "मिर्ज़ा साहिबां" की रचना किसने की?'
                },
                answer: {
                    en: 'Waris Shah composed "Heer" (1766) in Baint meter (ਬੈਂਤ ਛੰਦ); Peelu composed "Mirza Sahiban" in the Sadd (ਸੱਦ) form.',
                    pa: 'ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ "ਹੀਰ" (1766) ਬੈਂਤ ਛੰਦ ਵਿੱਚ ਲਿਖੀ; ਪੀਲੂ ਨੇ "ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ" ਸੱਦ ਕਾਵਿ-ਰੂਪ ਵਿੱਚ ਲਿਖਿਆ।',
                    hi: 'वारिस शाह ने "हीर" (1766) बैंत छंद में लिखी; पीलू ने "मिर्ज़ा साहिबां" सद्द काव्य-रूप में लिखा।'
                }
            }
        ]
    }
];
