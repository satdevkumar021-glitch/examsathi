import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const MASTER_CADRE_PUNJABI_LIT_BLUEPRINT_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. GURMAT KAV & SUFI KAV (punjabi-lit-gurmat-sufi)
    // =========================================================================
    {
        topicId: 'punjabi-lit-gurmat-sufi',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Authoritative ERB Punjab Master Cadre Punjabi Literature blueprint covering Gurmat Kav (Sri Guru Nanak Dev Ji to Sri Guru Tegh Bahadur Ji & Bhagat Bani) and Sufi Kav (Baba Farid, Shah Hussain, Bulleh Shah, Sultan Bahu, Ali Haider, Khwaja Ghulam Farid).'
        },
        bookRefs: [
            {
                title: 'Punjabi Sahit da Itihas (Aad Kal te Madh Kal)',
                author: 'Dr. Parminder Singh, Kirpal Singh Kasel & Dr. Gobind Singh Lamba',
                chapter: 'Gurmat Kav Dhara and Sufi Kav Dhara',
                relevance: 'Prescribed university standard for Master Cadre Punjabi literary eras, raga distributions, and poetic forms.'
            },
            {
                title: 'Sri Guru Granth Sahib Kosh & Raga Parichay',
                author: 'Dr. Gurcharan Singh / Punjabi University Patiala',
                chapter: 'Bani Structure, Chhand, and Bhagat Contribution',
                relevance: 'Definitive reference for pauris, saloks, and ragas of Guru Sahibs and Bhagats.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Foundational Concepts of Gurmat & Sufi Kav]
1. **Gurmat Kav Dhara (ਗੁਰਮਤਿ ਕਾਵਿ ਧਾਰਾ):**
   - The cornerstone of medieval Punjabi literature (15th–18th century CE), anchored in monotheism (*Ik Onkar*), divine love (*Bhakti*), surrender to the True Guru (*Satguru*), social equality (*Sangat & Pangat*), and condemnation of casteism, empty ritualism, and tyranny.
   - Preserved authentically in **Sri Guru Granth Sahib Ji (SGGS)** compiled in **1604 CE** by **Sri Guru Arjan Dev Ji** at Ramsar (Amritsar), scribed by **Bhai Gurdas Ji**, and granted eternal Guruship by **Sri Guru Gobind Singh Ji** in **1708 CE** at Takht Sachkhand Sri Hazur Sahib, Nanded.
   - SGGS contains hymns of **6 Sikh Gurus**, **15 Bhagats**, **11 Bhatts**, and **4 Gursikhs / Gurmukh associates** across **31 Ragas** (starting with Raga Sri and ending with Raga Jaijaiwanti), spanning **1430 Angs** (pages).
2. **Sufi Kav Dhara (ਸੂਫ਼ੀ ਕਾਵਿ ਧਾਰਾ):**
   - The mystical Islamic poetic tradition in Punjab reflecting divine longing (*Ishq-e-Haqiqi*), non-dualism (*Wahdat-al-Wujud*), self-annihilation (*Fana*), divine illumination (*Baqa*), spiritual teacher (*Murshid*), and symbolic use of Punjab's pastoral life (spinning wheel / *Charkha*, loom, Chenab river, bride-groom bridal imagery).
   - Key Silsilahs in Punjab: **Chishti** (Baba Farid), **Qadiri / Malamati** (Shah Hussain, Bulleh Shah, Sultan Bahu), and **Suhrawardi** (Baha-ud-din Zakariya).

---

### [Level I: Intermediate — Guru Sahibs, Bhagats & Sufi Masters Analysis]
1. **The Six Sikh Gurus of Sri Guru Granth Sahib Ji:**
   | Guru Sahib | Total Shabads / Hymns | Ragas Count | Major Compositions & Structural Details |
   |---|---|---|---|
   | **Sri Guru Nanak Dev Ji** (1469–1539) | **974 hymns** | **19 Ragas** | **Japji Sahib** (Preamble of SGGS, 38 Pauris + 2 Saloks, *Sachkhand* 5 Khands; non-raga), **Asa di Var** (24 Pauris set to the folk tune *Tunde Asraje di Dhuni* with 59 Saloks predominantly by Mahala 2), **Barah Maha Tukhari** (First Barah Maha in Punjabi literature, philosophical & seasonal union), **Sidh Gosht** (Ramkali Raga, philosophical discourse with Yogis/Gorakhnathis), **Dakhni Oankar** (Ramkali, 54 Pauris), **Patti Likhi**, **Alahanian**, **Baburvani** (historical witness to Babur's brutal invasion of Saidpur / Eminabad in 1520–21). |
   | **Sri Guru Angad Dev Ji** (1504–1552) | **62 / 63 Saloks** | Embedded in Vars | Formalized and standardized **Gurmukhi script**; established **Mall Akhara** at Khadur Sahib; promoted physical and spiritual education. |
   | **Sri Guru Amar Das Ji** (1479–1574) | **907 hymns** | **17 Ragas** | **Anand Sahib** (Ramkali Raga, 40 Pauris, supreme hymn of spiritual ecstasy), **Patti** (Asa Raga), **Alahanian** (Vadhans Raga — transformed funeral lament into meditation on mortality), **Var Gujri**, **Var Suhi**; established **22 Manjis** for institutional decentralization. |
   | **Sri Guru Ram Das Ji** (1534–1581) | **679 hymns** | **30 Ragas** | **Lavan** (Suhi Raga, 4 Chhands — solemnized the Sikh egalitarian wedding ceremony *Anand Karaj*), **Ghorian** (Wadhans Raga — elevated folk wedding songs into spiritual bridal union), **Karhale**, **Chhant**, **4 Vars**; excavated the sacred holy tank of Amritsar (*Amrit Sarovar*). |
   | **Sri Guru Arjan Dev Ji** (1563–1606) | **2218 hymns** (Largest contribution) | **30 Ragas** | **Sukhmani Sahib** (Gauri Raga, 24 Ashtpadis each preceded by a Salok; theme of peace, *Naam Simran*, and the portrait of the *Brahmgyani*), **Barah Maha Majh** (Majh Raga, widely recited at the beginning of each lunar month / Sangrand), **Bawan Akhri**, **Gauri ki Var**, **Phunhe**, **Chaubole**, **Birhade**; built Sri Harmandir Sahib and compiled Sri Adi Granth in 1604 CE. |
   | **Sri Guru Tegh Bahadur Ji** (1621–1675) | **115 hymns** (59 Shabads + 57 Saloks) | **15 Ragas** | **Salok Mahala 9** (57 couplets located at the conclusion of SGGS, Angs 1426–1429; themes of detachment, impermanence *Vairag*, courage *Bhai Kahu Kau Det Neh Neh Bhai Manat Aan*); introduced **Raga Jaijaiwanti** to SGGS. |

2. **Bhagat Bani in Sri Guru Granth Sahib Ji:**
   - **Bhagat Kabir Ji (1398–1518):** Banaras, weaver; largest contributor among Bhagats with **541 hymns / 243 Saloks** across 17 Ragas; fearless social iconoclasm against caste rigidity (*Garbh Vas Mah Kul Neh Jati*).
   - **Bhagat Ravidas Ji (15th–16th c.):** Banaras, leather craftsman; **41 hymns** in 16 Ragas; utopian casteless society of **Begampura** (*Begampura shahar ko nau, Dukh andohu nahi tihi thau*).
   - **Bhagat Namdev Ji (1270–1350):** Maharashtra, tailor / calico printer; **60/61 hymns** in 17 Ragas; profound Nirguna-Saguna synthesis and intimate dialogue with Vitthala.
   - Other Bhagats: Trilochan, Dhanna, Sain, Pipa, Jaidev, Ramanand, Bhikhan, Beni, Parmanand, Surdas, Sadhana.

3. **Chronology & Masterpieces of Sufi Kav Dhara:**
   - **Baba Sheikh Farid-ud-din Masud Ganjshakar (1173–1265 CE):** Settled at Ajodhan (Pakpattan); pioneer of written Punjabi poetry; **112 Slokas and 4 Shabads** (2 in Raga Asa, 2 in Raga Suhi) preserved in SGGS; poetic form: *Dohra / Slok*; key imagery: the fragile human body, mortality, divine love, *Farida jo tain maran mukian tinhan na mare ghum*.
   - **Shah Hussain (1538–1599 CE):** Lahore; disciple of Sheikh Bahlol; close spiritual friendship with Hindu youth Madho Lal (hence *Madho Lal Hussain*); pioneer of the **Kafi** poetic form in Punjabi literature; deep musicality, Malamati (intentional humility), spinning wheel (*Charkha*), *Aape main te aape kangi, aape katan-hari*.
   - **Hazrat Bulleh Shah (1680–1757 CE):** Uch Gilaniyan born, settled in Kasur; Murshid **Shah Inayat Qadiri** of Lahore (Arain gardener caste; Bulleh was a Sayyid); apex of Punjabi Sufism; **156 Kafis**, 1 Barah Maha, 1 Athwara, 3 Siharfis, 49 Gandhan; supreme defiance of religious orthodoxy: *"Bullah Ki Jaana Main Kaun"*, *"Bullah Shahu Asan Thin Vakh Nahi"*, *"Tere Ishq Nachaya Kar Ke Thaiya Thaiya"*.
   - **Sultan Bahu (1628–1691 CE):** Shorekot (Jhang); founder of Sarwari Qadiri order; master of the **Abyat** form with the recurring refrain / radif **"Hoo"** (*ਹੂ*); famous imagery: *"Alif Allah chambe di booti murshid man mere vich laai hoo"*, *"Dil darya samundron doonge kon dilan diyan jane hoo"*.
   - **Ali Haider (1690–1785 CE):** Multan; contemporary of Bulleh Shah; known for lyrical Siharfi compositions invoking Heer-Ranjha as divine metaphor.
   - **Khwaja Ghulam Farid (1845–1901 CE):** Chacharan Sharif, Bahawalpur; greatest late Sufi poet of the Saraiki / Multani Punjabi dialect; masterwork *Divan-e-Farid*; evocative desert (*Rohi / Thal*) landscapes and longing for the beloved *Punnu*.

---

### [Level A: Advanced — Academic Nuances & Literary Prosody]
1. **Prosody, Genres & Chhand in Gurmat Literature:**
   - **Japji Sahib Structure:** 1 Mangal (*Mool Mantar*), 38 Pauris (predominantly Davaiya, Chaupai, and Nishani rhythms), 2 Saloks (Opening: *Aadi Sachu Jugaadi Sachu...*, Closing: *Pavan Guru Paani Pita...*). Five Spiritual Realms (*Khands*): **Dharam Khand** (Realm of Duty) $\to$ **Gyan Khand** (Realm of Divine Knowledge) $\to$ **Saram Khand** (Realm of Spiritual Effort / Beauty) $\to$ **Karam Khand** (Realm of Grace) $\to$ **Sach Khand** (Realm of Eternal Truth).
   - **Dhunian of Vars (ਧੁਨੀਆਂ):** Out of 22 Vars in SGGS, **9 Vars** have prescribed historical folk tunes (*Dhunian*) assigned by Guru Arjan Dev Ji:
     1. *Var Majh M.1* — Malik Murid tatha Chandrahara Sohia di Dhuni
     2. *Var Gauri M.5* — Rai Kamaldin Mojdin di Dhuni
     3. *Var Asa M.1* — Tunde Asraje di Dhuni
     4. *Var Gujri M.3* — Sikandar Birahim di Dhuni
     5. *Var Vadhans M.4* — Lalla Bahalima di Dhuni
     6. *Var Ramkali M.3* — Jodhe Viro Purbani di Dhuni
     7. *Var Sarang M.4* — Rai Mahme Hasne di Dhuni
     8. *Var Malhar M.1* — Rana Kailash tatha Malde di Dhuni
     9. *Var Kanra M.4* — Muse ki Dhuni`,

            pa: `### [Level B: Basic — ਗੁਰਮਤਿ ਅਤੇ ਸੂਫ਼ੀ ਕਾਵਿ ਦੇ ਬੁਨਿਆਦੀ ਸੰਕਲਪ]
1. **ਗੁਰਮਤਿ ਕਾਵਿ ਧਾਰਾ:**
   - ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਮੱਧਕਾਲ (15ਵੀਂ ਤੋਂ 18ਵੀਂ ਸਦੀ) ਦੀ ਸਭ ਤੋਂ ਗੌਰਵਮਈ ਅਤੇ ਦਾਰਸ਼ਨਿਕ ਧਾਰਾ ਹੈ। ਇਸ ਦਾ ਕੇਂਦਰੀ ਧੁਰਾ ਇਕ ਓਅੰਕਾਰ, ਨਾਮ ਸਿਮਰਨ, ਸਤਿਗੁਰੂ ਦੀ ਮਹਿਮਾ, ਮਨੁੱਖੀ ਬਰਾਬਰੀ, ਜਾਤ-ਪਾਤ ਦਾ ਖੰਡਨ ਅਤੇ ਲੋਕ-ਭਾਸ਼ਾਈ ਸਾਂਝ ਹੈ।
   - **ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ (SGGS):** 1604 ਈ. ਵਿੱਚ ਪੰਚਮ ਪਾਤਸ਼ਾਹ **ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ** ਨੇ ਰਾਮਸਰ ਸਰੋਵਰ (ਅੰਮ੍ਰਿਤਸਰ) ਦੇ ਕੰਢੇ ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਪਾਸੋਂ ਲਿਖਵਾ ਕੇ ਸੰਪਾਦਨਾ ਕੀਤੀ। ਪਹਿਲੇ ਹੈੱਡ ਗ੍ਰੰਥੀ **ਬਾਬਾ ਬੁੱਢਾ ਜੀ** ਬਣੇ।
   - ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਤਲਵੰਡੀ ਸਾਬੋ (ਦਮਦਮਾ ਸਾਹਿਬ) ਵਿਖੇ ਨੌਵੇਂ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ ਦਰਜ ਕਰਵਾ ਕੇ 1708 ਈ. ਵਿੱਚ ਨਾਂਦੇੜ ਵਿਖੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸ਼ਬਦ-ਗੁਰੂ ਵਜੋਂ ਗੁਰਗੱਦੀ ਸੌਂਪੀ।
   - SGGS ਵਿੱਚ **6 ਗੁਰੂ ਸਾਹਿਬਾਨ**, **15 ਭਗਤਾਂ**, **11 ਭੱਟਾਂ** ਅਤੇ **4 ਗੁਰਸਿੱਖਾਂ** (ਬਾਬਾ ਸੁੰਦਰ, ਭਾਈ ਮਰਦਾਨਾ, ਸੱਤਾ ਅਤੇ ਬਲਵੰਡ) ਦੀ ਬਾਣੀ **31 ਰਾਗਾਂ** ਵਿੱਚ **1430 ਅੰਗਾਂ** 'ਤੇ ਦਰਜ ਹੈ।
2. **ਸੂਫ਼ੀ ਕਾਵਿ ਧਾਰਾ:**
   - ਇਸਲਾਮੀ ਰਹੱਸਵਾਦ (ਤਸੱਵੁਫ਼) ਦੀ ਉਹ ਸ਼ਾਖ਼ ਜੋ ਇਸ਼ਕ-ਏ-ਮਿਜਾਜ਼ੀ ਤੋਂ ਇਸ਼ਕ-ਏ-ਹਕੀਕੀ, ਵਹਦਤ-ਉਲ-ਵਜੂਦ (ਰੱਬੀ ਏਕਤਾ), ਮੁਰਸ਼ਿਦ ਦੀ ਅਗਵਾਈ ਅਤੇ ਮਨੁੱਖੀ ਆਤਮਾ ਦੇ ਵਿਛੋੜੇ ਨੂੰ ਪੰਜਾਬੀ ਲੋਕ-ਜੀਵਨ (ਚਰਖਾ, ਦਾਜ, ਪੇਕਾ-ਸੌਹਰਾ ਘਰ, ਝਨਾਅ) ਦੇ ਪ੍ਰਤੀਕਾਂ ਰਾਹੀਂ ਪ੍ਰਗਟ ਕਰਦੀ ਹੈ।
   - ਪ੍ਰਮੁੱਖ ਸਿਲਸਿਲੇ: **ਚਿਸ਼ਤੀ** (ਬਾਬਾ ਫ਼ਰੀਦ), **ਕਾਦਰੀ** (ਸ਼ਾਹ ਹੁਸੈਨ, ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ, ਸੁਲਤਾਨ ਬਾਹੂ) ਅਤੇ **ਸੁਹਰਾਵਰਦੀ** (ਬਹਾਉਦੀਨ ਜ਼ਕਰੀਆ)।

---

### [Level I: Intermediate — ਗੁਰੂ ਸਾਹਿਬਾਨ, ਭਗਤ ਬਾਣੀ ਅਤੇ ਸੂਫ਼ੀ ਦਰਵੇਸ਼]
1. **ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ 6 ਗੁਰੂ ਸਾਹਿਬਾਨ:**
   | ਗੁਰੂ ਸਾਹਿਬ | ਕੁੱਲ ਸ਼ਬਦ / ਪਦੇ | ਰਾਗ | ਮੁੱਖ ਰਚਨਾਵਾਂ ਅਤੇ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ |
   |---|---|---|---|
   | **ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ** (1469–1539) | **974 ਸ਼ਬਦ** | **19 ਰਾਗ** | **ਜਪੁਜੀ ਸਾਹਿਬ** (ਰਾਗ ਮੁਕਤ, 38 ਪਉੜੀਆਂ + 2 ਸਲੋਕ, 5 ਖੰਡ: ਧਰਮ, ਗਿਆਨ, ਸਰਮ, ਕਰਮ, ਸਚ ਖੰਡ), **ਆਸਾ ਦੀ ਵਾਰ** (24 ਪਉੜੀਆਂ, ਟੁੰਡੇ ਅਸਰਾਜੇ ਦੀ ਧੁਨੀ, 59 ਸਲੋਕ ਮਹਲਾ 2 ਦੇ ਸਮੇਤ), **ਬਾਰਹ ਮਾਹਾ ਤੁਖਾਰੀ** (ਪੰਜਾਬੀ ਦਾ ਪਹਿਲਾ ਬਾਰਹ ਮਾਹਾ), **ਸਿਧ ਗੋਸਟਿ** (ਰਾਮਕਲੀ ਰਾਗ, ਯੋਗੀਆਂ ਨਾਲ ਸੰਵਾਦ), **ਦੱਖਣੀ ਓਅੰਕਾਰੁ** (54 ਪਉੜੀਆਂ), **ਪੱਟੀ ਲਿਖੀ**, **ਅਲਾਹੁਣੀਆਂ**, **ਬਾਬਰਵਾਣੀ** (ਸੈਦਪੁਰ ਹਮਲੇ ਦਾ ਅੱਖੀਂ ਡਿੱਠਾ ਬਿਰਤਾਂਤ)। |
   | **ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ** (1504–1552) | **62 / 63 ਸਲੋਕ** | ਵਾਰਾਂ ਵਿੱਚ ਦਰਜ | ਗੁਰਮੁਖੀ ਲਿਪੀ ਨੂੰ ਸੁਧਾਰ ਕੇ ਮਿਆਰੀ ਰੂਪ ਦਿੱਤਾ; ਖਡੂਰ ਸਾਹਿਬ ਵਿਖੇ **ਮੱਲ ਅਖਾੜਾ** ਸਥਾਪਿਤ ਕੀਤਾ; ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਜੀਵਨੀ (ਜਨਮਸਾਖੀ ਪਰੰਪਰਾ) ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ। |
   | **ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ** (1479–1574) | **907 ਸ਼ਬਦ** | **17 ਰਾਗ** | **ਅਨੰਦੁ ਸਾਹਿਬ** (ਰਾਮਕਲੀ ਰਾਗ, 40 ਪਉੜੀਆਂ — ਰੂਹਾਨੀ ਖੇੜੇ ਦੀ ਬਾਣੀ), **ਪੱਟੀ** (ਆਸਾ ਰਾਗ), **ਅਲਾਹੁਣੀਆਂ** (ਵਡਹੰਸ ਰਾਗ), **ਵਾਰ ਗੂਜਰੀ**, **ਵਾਰ ਸੂਹੀ**; 22 ਮੰਜੀਆਂ ਦੀ ਸਥਾਪਨਾ ਕਰਕੇ ਪ੍ਰਚਾਰ ਪ੍ਰਣਾਲੀ ਸੁਦ੍ਰਿੜ ਕੀਤੀ। |
   | **ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ** (1534–1581) | **679 ਸ਼ਬਦ** | **30 ਰਾਗ** | **ਲਾਵਾਂ** (ਸੂਹੀ ਰਾਗ, 4 ਛੰਤ — ਸਿੱਖ ਅਨੰਦ ਕਾਰਜ ਵਿਆਹ ਵਿਧੀ), **ਘੋੜੀਆਂ** (ਵਡਹੰਸ ਰਾਗ — ਲੋਕ ਕਾਵਿ ਰੂਪ ਨੂੰ ਅਧਿਆਤਮਕ ਰੰਗ ਦਿੱਤਾ), **ਕਰਹਲੇ**, **4 ਵਾਰਾਂ**; ਸ੍ਰੀ ਅੰਮ੍ਰਿਤਸਰ ਸਰੋਵਰ ਦੀ ਖੁਦਾਈ ਆਰੰਭੀ। |
   | **ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ** (1563–1606) | **2218 ਸ਼ਬਦ** (ਸਭ ਤੋਂ ਵੱਧ ਯੋਗਦਾਨ) | **30 ਰਾਗ** | **ਸੁਖਮਨੀ ਸਾਹਿਬ** (ਗਉੜੀ ਰਾਗ, 24 ਅਸ਼ਟਪਦੀਆਂ, 24 ਸਲੋਕ — ਬ੍ਰਹਮਗਿਆਨੀ ਦਾ ਸੰਕਲਪ), **ਬਾਰਹ ਮਾਹਾ ਮਾਝ** (ਮਾਝ ਰਾਗ, ਸੰਗਰਾਂਦ ਵਾਲੇ ਦਿਨ ਪੜ੍ਹਿਆ ਜਾਂਦਾ ਹੈ), **ਬਾਵਨ ਅੱਖਰੀ**, **ਗਉੜੀ ਕੀ ਵਾਰ**, **ਫੁਨਹੇ**, **ਚਉਬੋਲੇ**; ਆਦਿ ਗ੍ਰੰਥ ਜੀ ਦੀ ਸੰਪਾਦਨਾ 1604 ਵਿੱਚ ਕੀਤੀ। |
   | **ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ** (1621–1675) | **115 ਸ਼ਬਦ** (59 ਸ਼ਬਦ + 57 ਸਲੋਕ) | **15 ਰਾਗ** | **ਸਲੋਕ ਮਹਲਾ 9** (57 ਸਲੋਕ, ਅੰਗ 1426–1429 — ਵੈਰਾਗ, ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਅਤੇ ਨਿਰਭੈਤਾ ਦਾ ਉਪਦੇਸ਼); SGGS ਵਿੱਚ **ਜੈਜਾਵੰਤੀ ਰਾਗ** ਸ਼ਾਮਲ ਕੀਤਾ। |

2. **ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਪ੍ਰਮੁੱਖ ਭਗਤ:**
   - **ਭਗਤ ਕਬੀਰ ਜੀ (1398–1518):** ਬਨਾਰਸ; ਭਗਤਾਂ ਵਿੱਚੋਂ ਸਭ ਤੋਂ ਵੱਧ ਬਾਣੀ (**541 ਸ਼ਬਦ ਅਤੇ 243 ਸਲੋਕ**); ਜਾਤ-ਪਾਤ ਅਤੇ ਧਾਰਮਿਕ ਪਖੰਡਾਂ ਉੱਤੇ ਤਿੱਖਾ ਕਟਾਕਸ਼ (*ਗਰਭ ਵਾਸ ਮਹਿ ਕੁਲੁ ਨਹੀ ਜਾਤੀ*).
   - **ਭਗਤ ਰਵਿਦਾਸ ਜੀ:** ਬਨਾਰਸ; **41 ਸ਼ਬਦ** 16 ਰਾਗਾਂ ਵਿੱਚ; ਸਮਾਜਿਕ ਬਰਾਬਰੀ ਅਤੇ ਦੁੱਖ-ਰਹਿਤ ਨਗਰ **ਬੇਗਮਪੁਰਾ** ਦੀ ਸਿਰਜਣਾ (*ਬੇਗਮ ਪੁਰਾ ਸਹਰ ਕੋ ਨਾਉ ॥ ਦੂਖੁ ਅੰਦੋਹੁ ਨਹੀ ਤਿਹਿ ਠਾਉ*).
   - **ਭਗਤ ਨਾਮਦੇਵ ਜੀ (1270–1350):** ਮਹਾਰਾਸ਼ਟਰ; **60/61 ਸ਼ਬਦ** 17 ਰਾਗਾਂ ਵਿੱਚ; ਨਿਰਗੁਣ-ਸਰਗੁਣ ਸੁਮੇਲ।

3. **ਪੰਜਾਬੀ ਸੂਫ਼ੀ ਕਵੀਆਂ ਦਾ ਇਤਿਹਾਸਕ ਵਿਕਾਸ:**
   - **ਬਾਬਾ ਸ਼ੇਖ਼ ਫ਼ਰੀਦ ਜੀ (1173–1265):** ਪਾਕਪਟਨ (ਅਜੋਧਨ); ਪੰਜਾਬੀ ਸੂਫ਼ੀ ਕਾਵਿ ਦੇ ਪਿਤਾਮਾ; ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ **112 ਸਲੋਕ ਅਤੇ 4 ਸ਼ਬਦ** (2 ਆਸਾ ਰਾਗ, 2 ਸੂਹੀ ਰਾਗ) ਦਰਜ ਹਨ। ਕਾਵਿ ਰੂਪ: *ਦੋਹਰਾ/ਸਲੋਕ*; ਮੁੱਖ ਵਿਸ਼ਾ: ਮੌਤ ਦੀ ਚੇਤਨਾ, ਨਿਮਰਤਾ, ਰੱਬੀ ਇਸ਼ਕ।
   - **ਸ਼ਾਹ ਹੁਸੈਨ (1538–1599):** ਲਾਹੌਰ; ਕਾਫ਼ੀ ਕਾਵਿ ਰੂਪ ਦੇ ਮੋਢੀ; ਮਾਧੋ ਲਾਲ ਹੁਸੈਨ; ਮਲਾਮਤੀ ਫ਼ਕੀਰ; ਚਰਖੇ ਅਤੇ ਸੂਤ ਕੱਤਣ ਦੇ ਪ੍ਰਤੀਕ (*ਆਪੇ ਮੈਂ ਤੇ ਆਪੇ ਕੰਘੀ, ਆਪੇ ਕੱਤਣਹਾਰੀ*).
   - **ਬਾਬਾ ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ (1680–1757):** ਕਸੂਰ; ਮੁਰਸ਼ਿਦ **ਸ਼ਾਹ ਇਨਾਇਤ ਕਾਦਰੀ**; ਸੂਫ਼ੀ ਕਾਵਿ ਦਾ ਸਿਖਰ; **156 ਕਾਫ਼ੀਆਂ**, 1 ਬਾਰਹ ਮਾਹਾ, 1 ਅਠਵਾਰਾ, 3 ਸੀਹਰਫ਼ੀਆਂ, 49 ਗੰਢਾਂ; ਮਸ਼ਹੂਰ ਰਚਨਾਵਾਂ: *"ਬੁੱਲ੍ਹਾ ਕੀ ਜਾਣਾ ਮੈਂ ਕੌਣ"*, *"ਤੇਰੇ ਇਸ਼ਕ ਨਚਾਇਆ ਕਰ ਥੱਈਆ ਥੱਈਆ"*।
   - **ਸੁਲਤਾਨ ਬਾਹੂ (1628–1691):** ਸ਼ੋਰਕੋਟ (ਝੰਗ); ਸਰਵਰੀ ਕਾਦਰੀ ਸ਼ਾਖ਼; **ਅਬਯਾਤ** ਕਾਵਿ ਰੂਪ ਵਿੱਚ ਮਾਹਿਰ ਜਿਸਦੀ ਹਰ ਤੁਕ ਦੇ ਅੰਤ ਵਿੱਚ ਰਦੀਫ਼ **"ਹੂ"** ਆਉਂਦੀ ਹੈ (*ਅਲਫ਼ ਅੱਲ੍ਹਾ ਚੰਬੇ ਦੀ ਬੂਟੀ ਮੁਰਸ਼ਿਦ ਮਨ ਮੇਰੇ ਵਿਚ ਲਾਈ ਹੂ*).
   - **ਅਲੀ ਹੈਦਰ (1690–1785):** ਮੁਲਤਾਨ; ਸੀਹਰਫ਼ੀਆਂ ਵਿੱਚ ਹੀਰ-ਰਾਂਝੇ ਦੇ ਇਸ਼ਕ ਨੂੰ ਰੱਬੀ ਰਹੱਸਵਾਦ ਦਾ ਜਾਮਾ ਪਹਿਨਾਇਆ।
   - **ਖ਼ਵਾਜਾ ਗ਼ੁਲਾਮ ਫ਼ਰੀਦ (1845–1901):** ਚਾਚੜਾਂ ਸ਼ਰੀਫ਼ (ਬਹਾਵਲਪੁਰ); ਸਰਾਇਕੀ/ਮੁਲਤਾਨੀ ਪੰਜਾਬੀ ਕਾਫ਼ੀਆਂ ਦਾ ਸ਼ਹਿਨਸ਼ਾਹ; *ਦੀਵਾਨ-ਏ-ਫ਼ਰੀਦ*; ਥਲ/ਰੋਹੀ ਦੇ ਮਾਰੂਥਲ ਅਤੇ ਪੁੰਨੂੰ ਦੇ ਬਿਰਹਾ ਦਾ ਪ੍ਰਗਟਾਵਾ।`,

            hi: `### [Level B: Basic — गुरमति एवं सूफ़ी काव्य के आधारभूत सिद्धांत]
1. **गुरमति काव्य धारा:**
   - मध्यकालीन पंजाबी साहित्य (15वीं–18वीं सदी) की सर्वप्रमुख आध्यात्मिक धारा। एकेश्वरवाद (*इक ओंकार*), नाम सिमरन, सतगुरु की महत्ता, सामाजिक समानता (*संगत एवं पंगत*), तथा जाति-पांति व पाखंडों का खंडन।
   - **श्री गुरु ग्रंथ साहिब जी (SGGS):** 1604 ई. में पंचम पातशाह **श्री गुरु अर्जन देव जी** ने रामसर (अमृतसर) में भाई गुरदास जी से लिखवाकर संपादन किया। प्रथम मुख्य ग्रंथी **बाबा बुड्ढा जी** बने। 1708 ई. में नांदेड़ में श्री गुरु गोबिंद सिंह जी ने इसे शाश्वत गुरु पद प्रदान किया।
   - SGGS में **6 सिख गुरुओं**, **15 भक्तों**, **11 भट्टों** एवं **4 गुरसिखों** की वाणी **31 रागों** तथा **1430 अंगों** में संकलित है।
2. **सूफ़ी काव्य धारा:**
   - इस्लामी रहस्यवाद (तसव्वुफ़) की वह धारा जिसने लौकिक प्रेम (इश्क़-ए-मिज़ाज़ी) के माध्यम से अलौकिक प्रेम (इश्क़-ए-हक़ीक़ी), वहदत-उल-वुजूद (अद्वैत), तथा मुर्शिद के प्रति पूर्ण समर्पण को पंजाबी लोक प्रतीकों (चरखा, कातना, चिनाब, विरह) में ढाला।

---

### [Level I: Intermediate — गुरु साहिबान, भक्त वाणी एवं सूफ़ी कवि]
1. **श्री गुरु ग्रंथ साहिब जी के 6 गुरु साहिबान:**
   | गुरु साहिब | कुल पद / शब्द | राग | प्रमुख रचनाएँ एवं विशिष्टता |
   |---|---|---|---|
   | **श्री गुरु नानक देव जी** (1469–1539) | **974 शब्द** | **19 राग** | **जपुजी साहिब** (रागमुक्त, 38 पौड़ियां + 2 श्लोक, 5 खंड), **आसा दी वार** (24 पौड़ियां, टुंडे असराजे दी धुनी), **बारह माहा तुखारी** (पंजाबी का प्रथम बारह माहा), **सिद्ध गोसटि** (रामकली राग), **दखणी ओअंकारु**, **बाबरवाणी**। |
   | **श्री गुरु अंगद देव जी** (1504–1552) | **62 / 63 श्लोक** | वारों में संकलित | गुरुमुखी लिपि का मानकीकरण किया; खदूर साहिब में **मल्ल अखाड़ा** स्थापित किया। |
   | **श्री गुरु अमरदास जी** (1479–1574) | **907 शब्द** | **17 राग** | **आनंदु साहिब** (रामकली राग, 40 पौड़ियां), **पट्टी**, **अलाहणियां**; 22 मंजियों की स्थापना की। |
   | **श्री गुरु रामदास जी** (1534–1581) | **679 शब्द** | **30 राग** | **लावार** (सूही राग, 4 छंद — आनंद कारज पद्धति), **घोड़ियां** (वड़हंस राग), **4 वारें**; अमृतसर सरोवर का निर्माण। |
   | **श्री गुरु अर्जन देव जी** (1563–1606) | **2218 शब्द** (सर्वाधिक) | **30 राग** | **सुखमनी साहिब** (गउड़ी राग, 24 अष्टपदियां — ब्रह्मज्ञानी का स्वरूप), **बारह माहा माझ**, **बावन अखरी**; 1604 में आदि ग्रंथ का संपादन। |
   | **श्री गुरु तेग बहादुर जी** (1621–1675) | **115 शब्द** (59 शब्द + 57 श्लोक) | **15 राग** | **श्लोक महला 9** (57 श्लोक — वैराग्य एवं निर्भयता); **जयजावंती राग** सम्मिलित किया। |

2. **प्रमुख भक्त कवि:**
   - **भक्त कबीर जी:** 541 शब्द एवं 243 श्लोक; निर्भीक समाज-सुधारक।
   - **भक्त रविदास जी:** 41 शब्द; समतावादी **बेगमपुरा** की संकल्पना।
   - **भक्त नामदेव जी:** 60/61 शब्द; विट्ठल भक्ति एवं अद्वैत दर्शन।

3. **सूफ़ी काव्य के मील के पत्थर:**
   - **बाबा शेख़ फ़रीद (1173–1265):** पाकपत्तन; पंजाबी सूफ़ी काव्य के पितामह; SGGS में **112 श्लोक एवं 4 शब्द**।
   - **शाह हुसैन (1538–1599):** लाहौर; काफ़ी विधा के प्रवर्तक; माधो लाल हुसैन; चरखे के आध्यात्मिक प्रतीक।
   - **बुल्ले शाह (1680–1757):** कसूर; मुर्शिद शाह इनायत कादरी; **156 काफ़ियां**; रचनाएँ: *"बुल्ला की जाणा मैं कौण"*, *"तेरे इश्क़ नचाया"*.
   - **सुल्तान बाहू (1628–1691):** शोरकोट; **अबयात** विधा; हर पंक्ति में **"हू"** रदीफ़ (*अलिफ़ अल्लाह चंबे दी बूटी*).
   - **ख़्वाजा ग़ुलाम फ़रीद (1845–1901):** चाचड़ां शरीफ़; मुल्तानी/सराइकी सूफ़ी काफ़ी सम्राट; *दीवान-ए-फ़रीद*।`
        },
        keyNotes: {
            en: [
                'Sri Guru Granth Sahib Ji comprises 1430 Angs, 31 Ragas, starting with Raga Sri and ending with Raga Jaijaiwanti.',
                'Hymns of 6 Gurus are included: Guru Nanak Dev Ji (974), Guru Angad Dev Ji (62/63), Guru Amar Das Ji (907), Guru Ram Das Ji (679), Guru Arjan Dev Ji (2218), Guru Tegh Bahadur Ji (115).',
                'Japji Sahib is the opening raga-free composition of SGGS with 38 Pauris and 2 Saloks spanning 5 Khands (Dharam, Gyan, Saram, Karam, Sach Khand).',
                'Asa di Var consists of 24 Pauris composed by Guru Nanak Dev Ji, tuned to "Tunde Asraje di Dhuni", interleaved with 59 Saloks predominantly by Guru Angad Dev Ji.',
                'Barah Maha Tukhari was composed by Guru Nanak Dev Ji (the first Barah Maha in Punjabi), whereas Barah Maha Majh was composed by Guru Arjan Dev Ji.',
                'Anand Sahib by Guru Amar Das Ji is composed in Ramkali Raga and consists of 40 Pauris.',
                'Lavan by Guru Ram Das Ji is composed in Suhi Raga and consists of 4 Chhands solemnizing Anand Karaj.',
                'Sukhmani Sahib by Guru Arjan Dev Ji is composed in Gauri Raga with 24 Ashtpadis, each preceded by a Salok.',
                'Baba Farid has 112 Slokas and 4 Shabads (2 in Asa, 2 in Suhi) preserved in Sri Guru Granth Sahib Ji.',
                'Shah Hussain pioneered the Punjabi Kafi form; Bulleh Shah elevated the Kafi to its pinnacle (156 Kafis; Murshid: Shah Inayat); Sultan Bahu authored Abyat with the refrain "Hoo".'
            ],
            pa: [
                'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ 1430 ਅੰਗ ਅਤੇ 31 ਰਾਗ ਹਨ, ਜੋ ਸਿਰੀ ਰਾਗ ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਜੈਜਾਵੰਤੀ ਰਾਗ ਤੱਕ ਜਾਂਦੇ ਹਨ।',
                'SGGS ਵਿੱਚ 6 ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀ ਬਾਣੀ ਹੈ: ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (974), ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ (62/63), ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (907), ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (679), ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (2218), ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ (115)।',
                'ਜਪੁਜੀ ਸਾਹਿਬ ਰਾਗ-ਮੁਕਤ ਬਾਣੀ ਹੈ ਜਿਸ ਦੀਆਂ 38 ਪਉੜੀਆਂ, 2 ਸਲੋਕ ਅਤੇ 5 ਖੰਡ (ਧਰਮ, ਗਿਆਨ, ਸਰਮ, ਕਰਮ, ਸਚ ਖੰਡ) ਹਨ।',
                'ਆਸਾ ਦੀ ਵਾਰ ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀਆਂ 24 ਪਉੜੀਆਂ ਹਨ, ਜੋ ਟੁੰਡੇ ਅਸਰਾਜੇ ਦੀ ਧੁਨੀ ਤੇ ਗਾਉਣ ਦਾ ਹੁਕਮ ਹੈ, ਅਤੇ ਨਾਲ 59 ਸਲੋਕ ਦਰਜ ਹਨ।',
                'ਬਾਰਹ ਮਾਹਾ ਤੁਖਾਰੀ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਰਚਨਾ ਹੈ (ਪੰਜਾਬੀ ਦਾ ਪਹਿਲਾ ਬਾਰਹ ਮਾਹਾ), ਜਦਕਿ ਬਾਰਹ ਮਾਹਾ ਮਾਝ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਰਚਨਾ ਹੈ।',
                'ਅਨੰਦੁ ਸਾਹਿਬ ਰਾਮਕਲੀ ਰਾਗ ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦੀ ਰਚਨਾ ਹੈ ਜਿਸ ਦੀਆਂ 40 ਪਉੜੀਆਂ ਹਨ।',
                'ਲਾਵਾਂ ਸੂਹੀ ਰਾਗ ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਦੀ ਰਚਨਾ ਹੈ ਜਿਸ ਦੇ 4 ਛੰਤ ਹਨ ਜੋ ਅਨੰਦ ਕਾਰਜ ਲਈ ਨਿਰਧਾਰਤ ਹਨ।',
                'ਸੁਖਮਨੀ ਸਾਹਿਬ ਗਉੜੀ ਰਾਗ ਵਿੱਚ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਰਚਨਾ ਹੈ ਜਿਸ ਵਿੱਚ 24 ਅਸ਼ਟਪਦੀਆਂ ਅਤੇ 24 ਸਲੋਕ ਹਨ।',
                'ਬਾਬਾ ਫ਼ਰੀਦ ਜੀ ਦੇ 112 ਸਲੋਕ ਅਤੇ 4 ਸ਼ਬਦ (2 ਆਸਾ ਰਾਗ, 2 ਸੂਹੀ ਰਾਗ) ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਦਰਜ ਹਨ।',
                'ਸ਼ਾਹ ਹੁਸੈਨ ਕਾਫ਼ੀ ਦੇ ਮੋਢੀ ਹਨ; ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ ਨੇ ਕਾਫ਼ੀ ਨੂੰ ਸਿਖਰ ਤੇ ਪਹੁੰਚਾਇਆ (156 ਕਾਫ਼ੀਆਂ; ਮੁਰਸ਼ਿਦ ਸ਼ਾਹ ਇਨਾਇਤ); ਸੁਲਤਾਨ ਬਾਹੂ ਅਬਯਾਤ ਅਤੇ "ਹੂ" ਰਦੀਫ਼ ਦੇ ਬਾਦਸ਼ਾਹ ਹਨ।'
            ],
            hi: [
                'श्री गुरु ग्रंथ साहिब जी में 1430 अंग तथा 31 राग हैं (सिरी राग से जयजावंती राग तक)।',
                'SGGS में 6 गुरुओं की वाणी है: गुरु नानक देव जी (974), गुरु अंगद देव जी (62/63), गुरु अमरदास जी (907), गुरु रामदास जी (679), गुरु अर्जन देव जी (2218), गुरु तेग बहादुर जी (115)।',
                'जपुजी साहिब रागमुक्त बाणी है जिसमें 38 पौड़ियां, 2 श्लोक तथा 5 आध्यात्मिक खंड हैं।',
                'आसा दी वार में 24 पौड़ियां (टुंडे असराजे दी धुनी) तथा 59 श्लोक संकलित हैं।',
                'बारह माहा तुखारी गुरु नानक देव जी की कृति है (प्रथम बारह माहा), जबकि बारह माहा माझ गुरु अर्जन देव जी की है।',
                'आनंदु साहिब रामकली राग में गुरु अमरदास जी की 40 पौड़ियों वाली रचना है।',
                'लावार सूही राग में गुरु रामदास जी के 4 छंद हैं जो सिख विवाह पद्धति आनंद कारज का आधार हैं।',
                'सुखमनी साहिब गउड़ी राग में गुरु अर्जन देव जी की 24 अष्टपदियों वाली कृति है।',
                'बाबा शेख़ फ़रीद के 112 श्लोक और 4 शब्द श्री गुरु ग्रंथ साहिब जी में सम्मिलित हैं।',
                'शाह हुसैन पंजाबी काफ़ी के प्रवर्तक हैं; बुल्ले शाह ने काफ़ी को शिखर पर पहुँचाया (156 काफ़ियां); सुल्तान बाहू ने "हू" रदीफ़ वाले अबयात रचे।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Gurus Hymn Count Hierarchy: Guru Arjan Dev Ji (2218) > Guru Nanak Dev Ji (974) > Guru Amar Das Ji (907) > Guru Ram Das Ji (679) > Guru Tegh Bahadur Ji (115) > Guru Angad Dev Ji (62/63).',
                'Vars with Assigned Folk Dhunian: Exactly 9 of the 22 Vars in SGGS have folk tunes (e.g. Asa di Var = Tunde Asraje di Dhuni).',
                'Sufi Silsilahs & Refrains: Baba Farid = Chishti (Dohra); Shah Hussain = Qadiri/Malamati (Kafi); Bulleh Shah = Qadiri (Kafi); Sultan Bahu = Sarwari Qadiri (Abyat + Hoo).'
            ],
            pa: [
                'ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀ ਬਾਣੀ ਸੰਖਿਆ: ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (2218) > ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (974) > ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (907) > ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (679) > ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ (115) > ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ (62/63)।',
                'ਲੋਕ ਧੁਨੀਆਂ ਵਾਲੀਆਂ ਵਾਰਾਂ: SGGS ਦੀਆਂ ਕੁੱਲ 22 ਵਾਰਾਂ ਵਿੱਚੋਂ 9 ਵਾਰਾਂ ਉੱਤੇ ਲੋਕ ਧੁਨੀਆਂ ਦਰਜ ਹਨ (ਜਿਵੇਂ ਆਸਾ ਦੀ ਵਾਰ = ਟੁੰਡੇ ਅਸਰਾਜੇ ਦੀ ਧੁਨੀ)।',
                'ਸੂਫ਼ੀ ਸਿਲਸਿਲੇ ਤੇ ਰੂਪ: ਬਾਬਾ ਫ਼ਰੀਦ = ਚਿਸ਼ਤੀ (ਦੋਹਰਾ/ਸਲੋਕ); ਸ਼ਾਹ ਹੁਸੈਨ = ਕਾਦਰੀ (ਕਾਫ਼ੀ); ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ = ਕਾਦਰੀ (ਕਾਫ਼ੀ); ਸੁਲਤਾਨ ਬਾਹੂ = ਸਰਵਰੀ ਕਾਦਰੀ (ਅਬਯਾਤ + ਹੂ)।'
            ],
            hi: [
                'गुरु साहिबों की वाणी संख्या क्रम: गुरु अर्जन देव जी (2218) > गुरु नानक देव जी (974) > गुरु अमरदास जी (907) > गुरु रामदास जी (679) > गुरु तेग बहादुर जी (115) > गुरु अंगद देव जी (62/63)।',
                'लोक धुनों वाली वारें: SGGS की कुल 22 वारों में से ठीक 9 वारों पर लोक धुनें अंकित हैं (जैसे आसा दी वार = टुंडे असराजे दी धुनी)।',
                'सूफ़ी सिलसिले: बाबा फ़रीद = चिश्ती (श्लोक); शाह हुसैन = कादरी (काफ़ी); बुल्ले शाह = कादरी (काफ़ी); सुल्तान बाहू = सरवरी कादरी (अबयात + हू)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Japji Sahib is set to Raga Asa because it precedes Asa di Var. Correction: Japji Sahib is completely raga-free (Raag-mukt) and serves as the opening theological preamble of Sri Guru Granth Sahib Ji.',
                'Misconception: Bulleh Shah introduced the Kafi form into Punjabi literature. Correction: Shah Hussain (Madho Lal Hussain) is the recognized pioneer of the Punjabi Kafi form; Bulleh Shah later elevated it to its philosophical and emotional zenith.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਜਪੁਜੀ ਸਾਹਿਬ ਆਸਾ ਰਾਗ ਵਿੱਚ ਦਰਜ ਹੈ ਕਿਉਂਕਿ ਇਹ ਆਸਾ ਦੀ ਵਾਰ ਤੋਂ ਪਹਿਲਾਂ ਆਉਂਦਾ ਹੈ। ਸੁਧਾਰ: ਜਪੁਜੀ ਸਾਹਿਬ ਬਿਲਕੁਲ ਰਾਗ-ਮੁਕਤ ਬਾਣੀ ਹੈ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਆਰੰਭ ਵਿੱਚ ਦਰਜ ਹੈ।',
                'ਭੁਲੇਖਾ: ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ ਨੇ ਪੰਜਾਬੀ ਵਿੱਚ ਕਾਫ਼ੀ ਕਾਵਿ ਰੂਪ ਦੀ ਸ਼ੁਰੂਆਤ ਕੀਤੀ। ਸੁਧਾਰ: ਸ਼ਾਹ ਹੁਸੈਨ (ਮਾਧੋ ਲਾਲ ਹੁਸੈਨ) ਪੰਜਾਬੀ ਕਾਫ਼ੀ ਦੇ ਮੋਢੀ ਹਨ; ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ ਨੇ ਇਸ ਨੂੰ ਸਿਖਰ ਤੇ ਪਹੁੰਚਾਇਆ।'
            ],
            hi: [
                'भ्रांति: जपुजी साहिब आसा राग में रचित है। सुधार: जपुजी साहिब पूर्णतः रागमुक्त बाणी है तथा श्री गुरु ग्रंथ साहिब जी का दार्शनिक आमुख है।',
                'भ्रांति: बुल्ले शाह ने पंजाबी में काफ़ी विधा का प्रवर्तन किया। सुधार: शाह हुसैन पंजाबी काफ़ी के प्रवर्तक हैं; बुल्ले शाह ने इसे इसके चरमोत्कर्ष पर पहुँचाया।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Identify the structural components and the raga of Guru Amar Das Ji’s "Anand Sahib" and explain how many Pauris constitute its complete reading versus standard liturgical recitation.',
                    pa: 'ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦੀ ਰਚਨਾ "ਅਨੰਦੁ ਸਾਹਿਬ" ਦਾ ਰਾਗ ਅਤੇ ਬਣਤਰ ਦੱਸੋ ਅਤੇ ਸਪੱਸ਼ਟ ਕਰੋ ਕਿ ਸੰਪੂਰਨ ਪਾਠ ਵਿੱਚ ਕਿੰਨੀਆਂ ਪਉੜੀਆਂ ਹੁੰਦੀਆਂ ਹਨ ਅਤੇ ਨਿੱਤਨੇਮ/ਸਮਾਪਤੀ ਵਿੱਚ ਕਿੰਨੀਆਂ ਪੜ੍ਹੀਆਂ ਜਾਂਦੀਆਂ ਹਨ?',
                    hi: 'गुरु अमरदास जी की कृति "आनंदु साहिब" का राग एवं संरचना बताइए तथा स्पष्ट करें कि संपूर्ण पाठ में कितनी पौड़ियां हैं और नित्यनेम/समापन में कितनी पढ़ी जाती हैं?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Anand Sahib is composed in Raga Ramkali by the third Guru, Sri Guru Amar Das Ji.',
                        'Step 2: The complete composition consists of 40 Pauris detailing supreme spiritual ecstasy (Anand) achieved through the Satguru.',
                        'Step 3: In daily Sikh liturgical ceremonies (Rehras Sahib and bhog of ceremonies), the standard short version comprises the first 5 Pauris and the final 40th Pauri (total 6 Pauris).'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਅਨੰਦੁ ਸਾਹਿਬ ਤੀਜੇ ਪਾਤਸ਼ਾਹ ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਦੁਆਰਾ ਰਾਮਕਲੀ ਰਾਗ ਵਿੱਚ ਉਚਾਰਨ ਕੀਤੀ ਗਈ ਹੈ।',
                        'ਕਦਮ 2: ਇਸ ਰਚਨਾ ਦੀਆਂ ਕੁੱਲ 40 ਪਉੜੀਆਂ ਹਨ ਜੋ ਸਤਿਗੁਰੂ ਰਾਹੀਂ ਅਨੰਦ ਦੀ ਪ੍ਰਾਪਤੀ ਦਾ ਰਹੱਸ ਪ੍ਰਗਟ ਕਰਦੀਆਂ ਹਨ।',
                        'ਕਦਮ 3: ਨਿੱਤਨੇਮ (ਰਹਿਰਾਸ ਸਾਹਿਬ) ਅਤੇ ਧਾਰਮਿਕ ਸਮਾਗਮਾਂ ਦੇ ਭੋਗ ਵੇਲੇ ਪਹਿਲੀਆਂ 5 ਪਉੜੀਆਂ ਅਤੇ 40ਵੀਂ ਪਉੜੀ (ਕੁੱਲ 6 ਪਉੜੀਆਂ) ਦਾ ਪਾਠ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।'
                    ],
                    hi: [
                        'चरण 1: आनंदु साहिब तृतीय पातशाह श्री गुरु अमरदास जी द्वारा रामकली राग में रचित है।',
                        'चरण 2: संपूर्ण रचना में 40 पौड़ियां हैं जो सतगुरु के माध्यम से आत्मिक आनंद की व्याख्या करती हैं।',
                        'चरण 3: दैनिक रहिरास साहिब और भोग के समय प्रथम 5 पौड़ियां और 40वीं पौड़ी (कुल 6 पौड़ियां) पढ़ी जाती हैं।'
                    ]
                },
                finalAnswer: {
                    en: 'Raga Ramkali; 40 Pauris total (6 Pauris in abbreviated liturgical recitation: 1–5 and 40).',
                    pa: 'ਰਾਮਕਲੀ ਰਾਗ; ਕੁੱਲ 40 ਪਉੜੀਆਂ (ਸੰਖੇਪ ਨਿੱਤਨੇਮ ਵਿੱਚ 6 ਪਉੜੀਆਂ: 1–5 ਅਤੇ 40ਵੀਂ)।',
                    hi: 'रामकली राग; कुल 40 पौड़ियां (संक्षिप्त पाठ में 6 पौड़ियां: 1–5 और 40वीं)।'
                }
            },
            {
                problem: {
                    en: 'Analyze the poetic form and spiritual metaphor in Sultan Bahu’s line: "Alif Allah chambe di booti murshid man mere vich laai hoo".',
                    pa: 'ਸੁਲਤਾਨ ਬਾਹੂ ਦੀ ਤੁਕ "ਅਲਫ਼ ਅੱਲ੍ਹਾ ਚੰਬੇ ਦੀ ਬੂਟੀ ਮੁਰਸ਼ਿਦ ਮਨ ਮੇਰੇ ਵਿਚ ਲਾਈ ਹੂ" ਵਿੱਚ ਕਾਵਿ ਰੂਪ ਅਤੇ ਅਧਿਆਤਮਕ ਪ੍ਰਤੀਕ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ।',
                    hi: 'सुल्तान बाहू की पंक्ति "अलिफ़ अल्लाह चंबे दी बूटी मुर्शिद मन मेरे विच लाई हू" में काव्य विधा और आध्यात्मिक प्रतीक का विश्लेषण करें।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Identify poetic form — This is an "Abyat" (plural of Bait in Arabic/Persian prosody), distinguished by Sultan Bahu using the Punjabi metric framework.',
                        'Step 2: Identify the refrain (Radif) — The recurring word "Hoo" (Arabic "Huwa" meaning "He [God] alone is") punctuates every verse line.',
                        'Step 3: Analyze metaphor — "Alif Allah" symbolizes the oneness of God, while "Chambe di booti" (jasmine sapling) planted by the Murshid (spiritual guide) in the seeker’s heart represents divine love blossoming through remembrance.'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਕਾਵਿ ਰੂਪ ਦੀ ਪਛਾਣ — ਇਹ "ਅਬਯਾਤ" (ਬੈਂਤ ਦਾ ਬਹੁ-ਵਚਨ) ਕਾਵਿ ਰੂਪ ਹੈ।',
                        'ਕਦਮ 2: ਰਦੀਫ਼ ਦੀ ਪਛਾਣ — ਹਰ ਤੁਕ ਦੇ ਅੰਤ ਵਿੱਚ "ਹੂ" (ਅਰਬੀ "ਹੁਵ" ਅਰਥਾਤ ਪਰਮਾਤਮਾ) ਦੀ ਪੁਕਾਰ ਆਉਂਦੀ ਹੈ।',
                        'ਕਦਮ 3: ਪ੍ਰਤੀਕ ਵਿਸ਼ਲੇਸ਼ਣ — "ਅਲਫ਼ ਅੱਲ੍ਹਾ" ਰੱਬ ਦੀ ਏਕਤਾ ਦਾ ਸੂਚਕ ਹੈ ਅਤੇ "ਚੰਬੇ ਦੀ ਬੂਟੀ" ਮੁਰਸ਼ਿਦ ਵੱਲੋਂ ਸਾਧਕ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਲਗਾਈ ਗਈ ਪ੍ਰਭੂ-ਪ੍ਰੇਮ ਦੀ ਸੁਗੰਧਿਤ ਕਲੀ ਹੈ।'
                    ],
                    hi: [
                        'चरण 1: काव्य विधा — यह "अबयात" (बैंत का बहुवचन) विधा है।',
                        'चरण 2: रदीफ़ — प्रत्येक पंक्ति के अंत में "हू" (अरबी में ईश्वर का सूचक) आता है।',
                        'चरण 3: प्रतीक — "अलिफ़ अल्लाह" ईश्वरीय अद्वैत और "चंबे दी बूटी" मुर्शिद द्वारा साधक के हृदय में रोपित प्रेम का प्रतीक है।'
                    ]
                },
                finalAnswer: {
                    en: 'Form: Abyat with "Hoo" radif; Metaphor: Jasmine sapling planted by Murshid represents divine love rooted in the disciple’s heart.',
                    pa: 'ਕਾਵਿ ਰੂਪ: ਅਬਯਾਤ (ਰਦੀਫ਼ "ਹੂ"); ਪ੍ਰਤੀਕ: ਮੁਰਸ਼ਿਦ ਵੱਲੋਂ ਲਾਈ ਚੰਬੇ ਦੀ ਬੂਟੀ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।',
                    hi: 'विधा: अबयात ("हू" रदीफ़); प्रतीक: मुर्शिद द्वारा हृदय में रोपी गई चमेली की कली ईश्वरीय प्रेम का प्रतीक है।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-lit-gs-1',
                question: {
                    en: 'Which Guru Sahib contributed the maximum number of hymns to Sri Guru Granth Sahib Ji, and what is the exact number?',
                    pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਕਿਸ ਗੁਰੂ ਸਾਹਿਬ ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਬਾਣੀ ਦਰਜ ਹੈ ਅਤੇ ਉਸਦੀ ਗਿਣਤੀ ਕਿੰਨੀ ਹੈ?',
                    hi: 'श्री गुरु ग्रंथ साहिब जी में किस गुरु साहिब की सर्वाधिक वाणी दर्ज है और उसकी संख्या कितनी है?'
                },
                answer: {
                    en: 'Sri Guru Arjan Dev Ji with 2218 hymns across 30 Ragas.',
                    pa: 'ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ, 30 ਰਾਗਾਂ ਵਿੱਚ ਕੁੱਲ 2218 ਸ਼ਬਦ।',
                    hi: 'श्री गुरु अर्जन देव जी की, 30 रागों में कुल 2218 शब्द।'
                }
            },
            {
                id: 'fc-lit-gs-2',
                question: {
                    en: 'Which is the first Barah Maha in Punjabi literature and who composed it?',
                    pa: 'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਪਹਿਲਾ ਬਾਰਹ ਮਾਹਾ ਕਿਹੜਾ ਹੈ ਅਤੇ ਇਹ ਕਿਸ ਦੀ ਰਚਨਾ ਹੈ?',
                    hi: 'पंजाबी साहित्य का प्रथम बारह माहा कौन सा है और यह किसकी रचना है?'
                },
                answer: {
                    en: 'Barah Maha Tukhari, composed by Sri Guru Nanak Dev Ji in Tukhari Raga.',
                    pa: 'ਬਾਰਹ ਮਾਹਾ ਤੁਖਾਰੀ, ਤੁਖਾਰੀ ਰਾਗ ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀ ਰਚਨਾ।',
                    hi: 'बारह माहा तुखारी, तुखारी राग में श्री गुरु नानक देव जी की रचना।'
                }
            },
            {
                id: 'fc-lit-gs-3',
                question: {
                    en: 'Who is the spiritual master (Murshid) of Baba Bulleh Shah, and what was his caste and occupation?',
                    pa: 'ਬਾਬਾ ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ ਦੇ ਮੁਰਸ਼ਿਦ ਕੌਣ ਸਨ ਅਤੇ ਉਹਨਾਂ ਦੀ ਜਾਤ ਤੇ ਪੇਸ਼ਾ ਕੀ ਸੀ?',
                    hi: 'बाबा बुल्ले शाह के मुर्शिद कौन थे और उनकी जाति व पेशा क्या था?'
                },
                answer: {
                    en: 'Hazrat Shah Inayat Qadiri of Lahore; he belonged to the Arain community and was a gardener (Baghban).',
                    pa: 'ਹਜ਼ਰਤ ਸ਼ਾਹ ਇਨਾਇਤ ਕਾਦਰੀ (ਲਾਹੌਰ); ਉਹ ਅਰਾਈਂ ਜਾਤੀ ਦੇ ਬਾਗ਼ਬਾਨ (ਮਾਲੀ) ਸਨ।',
                    hi: 'हज़रत शाह इनायत कादरी (लाहौर); वे अराईं समुदाय के बाग़बान (माली) थे।'
                }
            },
            {
                id: 'fc-lit-gs-4',
                question: {
                    en: 'How many Slokas and Shabads of Baba Sheikh Farid are preserved in Sri Guru Granth Sahib Ji?',
                    pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਬਾਬਾ ਸ਼ੇਖ਼ ਫ਼ਰੀਦ ਜੀ ਦੇ ਕਿੰਨੇ ਸਲੋਕ ਅਤੇ ਸ਼ਬਦ ਦਰਜ ਹਨ?',
                    hi: 'श्री गुरु ग्रंथ साहिब जी में बाबा शेख़ फ़रीद के कितने श्लोक और शब्द दर्ज हैं?'
                },
                answer: {
                    en: '112 Slokas and 4 Shabads (2 in Raga Asa and 2 in Raga Suhi).',
                    pa: '112 ਸਲੋਕ ਅਤੇ 4 ਸ਼ਬਦ (2 ਆਸਾ ਰਾਗ ਵਿੱਚ ਅਤੇ 2 ਸੂਹੀ ਰਾਗ ਵਿੱਚ)।',
                    hi: '112 श्लोक और 4 शब्द (2 आसा राग में तथा 2 सूही राग में)।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. QISSA KAV & BIR KAV (punjabi-lit-qissa-bir)
    // =========================================================================
    {
        topicId: 'punjabi-lit-qissa-bir',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Authoritative ERB Punjab Master Cadre Punjabi Literature blueprint covering Qissa Kav (Damodar, Pilu, Waris Shah, Hashim, Hafiz Barkhurdar, Qadiryar, Fazal Shah, Kishan Singh Arif) and Bir Kav (Sri Guru Gobind Singh Ji, Shah Mohammad, Najabat).'
        },
        bookRefs: [
            {
                title: 'Punjabi Qissa Kav da Itihas',
                author: 'Dr. Bikram Singh Ghuman',
                chapter: 'Origin, Evolution, Metres, and Archetypes of Punjabi Qissas',
                relevance: 'Standard text for Baint, Sad, Davaiya metres, Heer, Mirza, Sassi traditions, and character analysis.'
            },
            {
                title: 'Punjabi Bir Kav Dhara',
                author: 'Dr. Rattan Singh Jaggi',
                chapter: 'Chandi di Var, Jangnama Shah Mohammad, and Var Nadir Shah',
                relevance: 'Definitive resource for Var structure, Pauri types (Sirkhindi & Nishani), and Jangnama historical analysis.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Nature of Qissa and Bir Kav]
1. **Qissa Kav (ਕਿੱਸਾ ਕਾਵਿ):**
   - Derived from the Arabic word *Qissah* (meaning a story, tale, or narrative event). Introduced to Punjab through Perso-Arabic Islamic contacts and synthesized with native Punjabi folklore, pastoral romance, and social customs.
   - Distinctive structure: *Hamd* (Praise of Allah) $\to$ *Naat* (Praise of Prophet Muhammad) $\to$ Praise of Pirs/Gurus $\to$ Narrative unfolding (*Rupak / Qissa*) $\to$ Tragic or romantic culmination $\to$ Epilogue / colophon (*Khatma*).
   - Major four romantic legends (*Chhar Qisse*): **Heer-Ranjha**, **Mirza-Sahiba**, **Sassi-Punnu**, and **Sohni-Mahiwal**.
2. **Bir Kav (ਬੀਰ ਕਾਵਿ):**
   - The heroic and martial poetic tradition of Punjab celebrating valor, righteousness (*Dharma Yudh*), patriotic defense of the homeland, and defiance against foreign invaders.
   - Two primary sub-genres:
     - **Var (ਵਾਰ):** Native Punjabi poetic form written in *Pauris* (using *Nishani* or *Sirkhindi* chhand), accompanied by *Saloks*, historically sung by folk bards (*Dhadis*) in fast, invigorating rhythms.
     - **Jangnama (ਜੰਗਨਾਮਾ):** Historical war chronicle of Perso-Arabic origin, typically written in *Baint* or *Dohra-Chaupai* metres, focusing on chronological, factual, and deeply felt depictions of historical military conflicts.

---

### [Level I: Intermediate — Master Qissakars & Bir Kav Authors]
1. **Major Qissa Poets of Punjabi Literature:**
   | Poet | Qissa & Hero/Heroine | Meter / Chhand | Key Historical & Literary Milestones |
   |---|---|---|---|
   | **Damodar Gulati** (16th c.) | **Heer Damodar** | **Davaiya Chhand** (*ਦਵੱਈਆ*) | Contemporary of Mughal Emperor **Akbar**; native of Jhang (Hingorani village); **first extant written Heer in Punjabi**; claims eye-witness authenticity: *"Akkhi dithaa kissa kita, main na kiti koi hor"* (I wrote what I saw with my own eyes); provides happy union ending in Mecca/Qandahar instead of tragic death. |
   | **Pilu** (late 16th – early 17th c.) | **Mirza Sahiba** | **Sad Chhand** (*ਸਦ ਛੰਦ*) | First poet to write the tragic legend of Mirza Sahiba; native of village Vairowal (Tarn Taran) / Majha; master of raw pathos, fatalism, and tragic flaw: *"Bhaleyan naal khaloyiye bhaleyan da phal hove"* and *"Mirza jatt na maar khalo, Sahiba ditta vaar"*; famously praised by Ahmad Yar: *"Pilu naal na rees kise di, us vich sozo gudaaz bhara"*. |
   | **Waris Shah** (1735–1798 CE) | **Heer Waris** | **Baint Chhand** (*ਬੈਂਤ ਛੰਦ*) | Native of **Jandiala Sher Khan** (Sheikhupura, Pakistan); completed his monumental masterpiece in **1766 CE** at village Malka Hans; disciple of Pir Makhdum Kasuri; **The Encyclopedia of Punjabi Culture and Heritage** (contains detailed catalogs of Punjabi dresses, ornaments, agricultural implements, cattle, vegetables, birds, medical herbs, religious hypocrisy of Qazis and Jogis); supreme tragedy ending with Heer poisoned at Khera house and Ranjha dying in grief. |
   | **Hashim Shah** (1735–1843 CE) | **Sassi Punnu**, Sohni Mahiwal, Shirin Farhad | **Davaiya Chhand** (*ਦਵੱਈਆ*) | Native of Jagdeo Kalan (Amritsar); court poet of **Maharaja Ranjit Singh**; master of intense brevity, restraint, and sorrow (*Soz*); Sassi’s scorching march through the Thal desert (*"Hot Punnu de pichhe Sassi phire vich thal maari"*); renowned for aphoristic Dohras (*"Dilla dardi dardi aakh ve"*). |
   | **Hafiz Barkhurdar** (17th c.) | Mirza Sahiba, Sassi Punnu, Yousaf Zulaikha | **Baint & Davaiya** | Native of Chitti Musalman Jatt village (Lahore/Sargodha); contemporary of Aurangzeb; **first to write Qissa Yousaf Zulaikha in Punjabi**; popularized the Persianized classical diction in Punjabi narrative verse. |
   | **Qadiryar** (1802–1892 CE) | **Puran Bhagat**, Sohni Mahiwal, Raja Rasalu | **Siharfi / Baint** | Native of village Machhike (Sheikhupura); court poet rewarded with a well (*Khoo*) by Maharaja Ranjit Singh for composing *Qissa Puran Bhagat*; immortalized the conflict of virtue and lust between prince Puran and his step-mother Loona. |
   | **Fazal Shah** (1827–1890 CE) | **Sohni Mahiwal**, Heer Ranjha | **Baint Chhand** | Native of Newan Kot (Lahore); celebrated for astonishing linguistic acrobatics, verbal pyrotechnics, alliteration (*Anupras*), punning (*Yamaka / Tajnees*), and ornate flowery Persianized Punjabi. |
   | **Kishan Singh Arif** (1836–1900 CE) | Heer Waris imitation, Puran Bhagat, Dulla Bhatti | **Baint & Kundliyan** | Amritsar-based bookseller and prolific poet who bridged medieval folklore with early modern Punjabi mass print culture. |

2. **Masterpieces of Bir Kav Dhara:**
   - **Chandi di Var (ਚੰਡੀ ਦੀ ਵਾਰ / ਵਾਰ ਸ੍ਰੀ ਭਗੌਤੀ ਜੀ ਕੀ) by Sri Guru Gobind Singh Ji:**
     - Composed at Anandpur Sahib; 54 Pauris and 1 Dohra (total **55 stanzas**); derived from the *Markandeya Purana* (Durga Saptashati episode) but completely transformed into a monotheistic allegory of righteous courage (*Dharma Yudh*) where the Divine Sword (*Bhagauti / Kirpan*) is personified as the cosmic force destroying demonic oppression.
     - Meters used: **Sirkhindi Chhand** (21 Pauris; rhyme in the middle of the line / *Maddh-Tukant*) and **Nishani Chhand** (33 Pauris; rhyme at the end of the line / *Anth-Tukant*).
     - Iconic opening invoked in the daily Sikh Ardas: *"Pritham Bhagauti simar kai Guru Nanak layin dhyai"*.
   - **Jangnama Singhan te Firangian (ਜੰਗਨਾਮਾ ਸ਼ਾਹ ਮੁਹੰਮਦ) by Shah Mohammad:**
     - Composed around **1846 CE**; 105 Baints; eyewitness chronicle of the **First Anglo-Sikh War (1845–46)** following the demise of Maharaja Ranjit Singh.
     - Landmark of Punjabi national secular consciousness (*Punjabiyat*): presents the war as a battle between Punjab and India/British (*"Jang Hind-Punjab da hon lagga, doven paatshahi phojan bharian ne"*).
     - Lament for the loss of Maharaja Ranjit Singh’s uniting leadership and treacherous sabotage by court Dogras: *"Shah Muhammada ik sarcar bajhon, phojan jit ke ant nu harian ne"*.
   - **Var Nadir Shah (ਵਾਰ ਨਾਦਰ ਸ਼ਾਹ) by Najabat:**
     - Heroic ballad depicting the Persian tyrant **Nadir Shah Afshar's** 1739 invasion of Mughal India and the decisive **Battle of Karnal**; composed in vigorous Pauri form using Nishani and Sirkhindi meters.

---

### [Level A: Advanced — Chhand Vigyān & Dialectal Distribution]
1. **Prosody Distinction in Punjabi Chhand:**
   - **Baint (ਬੈਂਤ):** Persian-derived metre perfected by Waris Shah; flexible syllable count (typically 19–22 matras per line, four lines per stanza), allowing expansive cultural descriptions and philosophical musings.
   - **Davaiya (ਦਵੱਈਆ):** Native musical metre with 28 matras (divided 16 + 12 with pause / *Vishram*); used masterfully by Damodar and Hashim Shah.
   - **Sad (ਸਦ):** Long lamenting plaintive cry / call; free rhythm, popularized uniquely by Pilu in *Mirza Sahiba*.
2. **Pauri Classification in Bir Kav:**
   - **Sirkhindi Pauri (ਸਿਰਖੰਡੀ ਪਉੜੀ):** Mid-rhyme (*ਵਿਚਕਾਰਲਾ ਤੁਕਾਂਤ*); the rhyme occurs before the end of each verse line.
   - **Nishani Pauri (ਨਿਸ਼ਾਨੀ ਪਉੜੀ):** End-rhyme (*ਅੰਤਲਾ ਤੁਕਾਂਤ*); standard rhyming at the end of every line.`,

            pa: `### [Level B: Basic — ਕਿੱਸਾ ਅਤੇ ਬੀਰ ਕਾਵਿ ਦਾ ਸਰੂਪ]
1. **ਕਿੱਸਾ ਕਾਵਿ:**
   - ਅਰਬੀ ਭਾਸ਼ਾ ਦੇ ਸ਼ਬਦ 'ਕਿੱਸਾ' (ਘਟਨਾ, ਕਹਾਣੀ ਜਾਂ ਵਾਰਤਾ) ਤੋਂ ਬਣਿਆ ਹੈ। ਇਸਲਾਮੀ ਸੱਭਿਆਚਾਰ ਦੇ ਪੰਜਾਬ ਆਗਮਨ ਉਪਰੰਤ ਇਹ ਫ਼ਾਰਸੀ ਮਸਨਵੀ ਪਰੰਪਰਾ ਅਤੇ ਪੰਜਾਬੀ ਲੋਕ-ਧਾਰਾ ਦੇ ਸੁਮੇਲ ਵਜੋਂ ਵਿਕਸਿਤ ਹੋਇਆ।
   - ਕਿੱਸੇ ਦੀ ਰਵਾਇਤੀ ਬਣਤਰ: ਹਮਦ (ਰੱਬ ਦੀ ਸਿਫ਼ਤ) $\to$ ਨਾਅਤ (ਹਜ਼ਰਤ ਮੁਹੰਮਦ ਦੀ ਪ੍ਰਸ਼ੰਸਾ) $\to$ ਪੀਰਾਂ/ਮੁਰਸ਼ਿਦਾਂ ਦੀ ਉਸਤਤ $\to$ ਕਥਾ ਆਰੰਭ $\to$ ਵਿਛੋੜਾ/ਵਿਰੋਧ $\to$ ਦੁਖਾਂਤਕ/ਸੁਖਾਂਤਕ ਅੰਤ (ਖ਼ਾਤਮਾ)।
   - ਪੰਜਾਬ ਦੇ ਚਾਰ ਪ੍ਰਮੁੱਖ ਪ੍ਰੀਤ-ਕਿੱਸੇ: **ਹੀਰ-ਰਾਂਝਾ**, **ਮਿਰਜ਼ਾ-ਸਾਹਿਬਾ**, **ਸੱਸੀ-ਪੁੰਨੂੰ** ਅਤੇ **ਸੋਹਣੀ-ਮਹੀਵਾਲ**।
2. **ਬੀਰ ਕਾਵਿ:**
   - ਸੂਰਬੀਰਤਾ, ਕੌਮੀ ਅਣਖ, ਧਰਮ ਯੁੱਧ ਅਤੇ ਜ਼ੁਲਮ ਵਿਰੁੱਧ ਹਥਿਆਰਬੰਦ ਸੰਘਰਸ਼ ਦਾ ਬਿਆਨ ਕਰਨ ਵਾਲੀ ਸ਼ਕਤੀਸ਼ਾਲੀ ਕਾਵਿ ਧਾਰਾ।
   - ਦੋ ਮੁੱਖ ਰੂਪ:
     - **ਵਾਰ:** ਪੰਜਾਬੀ ਦਾ ਮੌਲਿਕ ਛੰਦੋਬੱਧ ਕਾਵਿ ਰੂਪ ਜੋ ਪਉੜੀਆਂ (ਨਿਸ਼ਾਨੀ ਤੇ ਸਿਰਖੰਡੀ ਛੰਦ) ਵਿੱਚ ਢਾਡੀਆਂ ਵੱਲੋਂ ਬੀਰ ਰਸ ਨਾਲ ਗਾਇਆ ਜਾਂਦਾ ਹੈ।
     - **ਜੰਗਨਾਮਾ:** ਇਤਿਹਾਸਕ ਯੁੱਧਾਂ ਦੀਆਂ ਅੱਖੀਂ ਡਿੱਠੀਆਂ ਘਟਨਾਵਾਂ ਦਾ ਕਾਲ-ਕ੍ਰਮਿਕ ਅਤੇ ਯਥਾਰਥਕ ਬਿਰਤਾਂਤ (ਆਮ ਤੌਰ 'ਤੇ ਬੈਂਤ ਛੰਦ ਵਿੱਚ)।

---

### [Level I: Intermediate — ਪ੍ਰਮੁੱਖ ਕਿੱਸਾਕਾਰ ਅਤੇ ਬੀਰ ਕਾਵਿ ਦੇ ਰਚਨਹਾਰ]
1. **ਪੰਜਾਬੀ ਕਿੱਸਾ ਕਾਵਿ ਦੇ ਪ੍ਰਮੁੱਖ ਕਵੀ:**
   | ਕਿੱਸਾਕਾਰ | ਕਿੱਸਾ | ਛੰਦ | ਇਤਿਹਾਸਕ ਤੇ ਸਾਹਿਤਕ ਮਹੱਤਵ |
   |---|---|---|---|
   | **ਦਮੋਦਰ ਗੁਲਾਟੀ** (16ਵੀਂ ਸਦੀ) | **ਹੀਰ ਦਮੋਦਰ** | **ਦਵੱਈਆ ਛੰਦ** | ਮੁਗਲ ਬਾਦਸ਼ਾਹ **ਅਕਬਰ** ਦਾ ਸਮਕਾਲੀ; ਝੰਗ (ਪਿੰਡ ਹਿੰਗੋਰਾਣਾ); **ਪੰਜਾਬੀ ਵਿੱਚ ਹੀਰ ਦਾ ਸਭ ਤੋਂ ਪਹਿਲਾ ਲਿਖਤੀ ਕਿੱਸਾ**; ਅੱਖੀਂ ਡਿੱਠਾ ਹੋਣ ਦਾ ਦਾਅਵਾ: *"ਅੱਖੀਂ ਡਿੱਠਾ ਕਿੱਸਾ ਕੀਤਾ, ਮੈਂ ਨਾ ਕੀਤੀ ਕੋਈ ਹੋਰ"*; ਸੁਖਾਂਤਕ ਅੰਤ (ਮੱਕੇ ਵੱਲ ਗਮਨ)। |
   | **ਪੀਲੂ** (16ਵੀਂ–17ਵੀਂ ਸਦੀ) | **ਮਿਰਜ਼ਾ ਸਾਹਿਬਾ** | **ਸਦ ਛੰਦ** | ਮਿਰਜ਼ਾ ਸਾਹਿਬਾ ਦਾ ਪਹਿਲਾ ਰਚੈਤਾ; ਵੈਰੋਵਾਲ (ਤਰਨ ਤਾਰਨ/ਮਾਝਾ); ਤ੍ਰਾਸਦੀ ਅਤੇ ਹੋਣੀ ਦੀ ਪ੍ਰਧਾਨਤਾ: *"ਭਲਿਆਂ ਨਾਲ ਖਲੋਈਏ ਭਲਿਆਂ ਦਾ ਫਲ ਹੋਵੇ"* ਅਤੇ *"ਮਿਰਜ਼ਾ ਜੱਟ ਨਾ ਮਾਰ ਖਲੋ, ਸਾਹਿਬਾ ਦਿੱਤਾ ਵਾਰ"*; ਅਹਿਮਦਯਾਰ ਨੇ ਕਿਹਾ: *"ਪੀਲੂ ਨਾਲ ਨਾ ਰੀਸ ਕਿਸੇ ਦੀ, ਉਸ ਵਿਚ ਸੋਜ਼ੋ ਗੁਦਾਜ਼ ਭਰਾ"*। |
   | **ਵਾਰਿਸ ਸ਼ਾਹ** (1735–1798) | **ਹੀਰ ਵਾਰਿਸ** | **ਬੈਂਤ ਛੰਦ** | ਪਿੰਡ **ਜੰਡਿਆਲਾ ਸ਼ੇਰ ਖ਼ਾਂ** (ਜ਼ਿਲ੍ਹਾ ਸ਼ੇਖ਼ੂਪੁਰਾ); **1766 ਈ.** ਵਿੱਚ ਮਲਕਾ ਹੰਸ ਵਿਖੇ ਸੰਪੂਰਨ ਕੀਤਾ; ਮੁਰਸ਼ਿਦ ਪੀਰ ਮਖ਼ਦੂਮ ਕਸੂਰੀ; **ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਦਾ ਵਿਸ਼ਵਕੋਸ਼ (Encyclopedia)**; ਪੰਜਾਬੀ ਸਮਾਜ, ਗਹਿਣਿਆਂ, ਫ਼ਸਲਾਂ, ਜਾਤਾਂ, ਰਸਮਾਂ ਅਤੇ ਧਾਰਮਿਕ ਪਖੰਡਾਂ ਦਾ ਬੇਜੋੜ ਚਿਤਰਨ। |
   | **ਹਾਸ਼ਮ ਸ਼ਾਹ** (1735–1843) | **ਸੱਸੀ ਪੁੰਨੂੰ**, ਸੋਹਣੀ ਮਹੀਵਾਲ | **ਦਵੱਈਆ ਛੰਦ** | ਜਗਦੇਵ ਕਲਾਂ (ਅੰਮ੍ਰਿਤਸਰ); **ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ** ਦੇ ਦਰਬਾਰੀ ਕਵੀ; ਸੰਜਮ, ਸਾਦਗੀ ਅਤੇ ਥਲ ਦੇ ਮਾਰੂਥਲ ਵਿੱਚ ਸੱਸੀ ਦੇ ਬਿਰਹਾ ਤੇ ਮੌਤ ਦਾ ਦਿਲ-ਕੰਬਾਊ ਚਿਤਰਨ (*"ਹੋਤ ਪੁੰਨੂੰ ਦੇ ਪਿੱਛੇ ਸੱਸੀ ਫਿਰੇ ਵਿਚ ਥਲ ਮਾਰੀ"*); ਦੋਹੜਿਆਂ ਦੇ ਮਾਹਿਰ। |
   | **ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ** (17ਵੀਂ ਸਦੀ) | ਮਿਰਜ਼ਾ ਸਾਹਿਬਾ, ਸੱਸੀ, ਯੂਸਫ਼ ਜ਼ੁਲੈਖ਼ਾ | **ਬੈਂਤ ਤੇ ਦਵੱਈਆ** | ਚਿੱਟੀ (ਸਰਗੋਧਾ); ਔਰੰਗਜ਼ੇਬ ਦਾ ਸਮਕਾਲੀ; **ਪੰਜਾਬੀ ਵਿੱਚ 'ਯੂਸਫ਼ ਜ਼ੁਲੈਖ਼ਾ' ਕਿੱਸਾ ਲਿਖਣ ਵਾਲਾ ਪਹਿਲਾ ਕਵੀ**। |
   | **ਕਾਦਰਯਾਰ** (1802–1892) | **ਪੂਰਨ ਭਗਤ**, ਸੋਹਣੀ ਮਹੀਵਾਲ | **ਸੀਹਰਫ਼ੀ / ਬੈਂਤ** | ਪਿੰਡ ਮਾਛੀਕੇ (ਸ਼ੇਖ਼ੂਪੁਰਾ); ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਵੱਲੋਂ ਪੂਰਨ ਭਗਤ ਲਿਖਣ 'ਤੇ **ਇੱਕ ਖੂਹ** ਇਨਾਮ ਵਜੋਂ ਦਿੱਤਾ ਗਿਆ; ਪੂਰਨ ਅਤੇ ਮਤਰੇਈ ਮਾਂ ਲੂਣਾ ਦੇ ਮਨੋਵਿਗਿਆਨਕ ਟਕਰਾਅ ਦਾ ਚਿਤਰਨ। |
   | **ਫ਼ਜ਼ਲ ਸ਼ਾਹ** (1827–1890) | **ਸੋਹਣੀ ਮਹੀਵਾਲ** | **ਬੈਂਤ ਛੰਦ** | ਨਵਾਂ ਕੋਟ (ਲਾਹੌਰ); ਸ਼ਬਦ-ਜੜਤ, ਅਨੁਪ੍ਰਾਸ, ਯਮਕ, ਤਜਨੀਸ ਅਤੇ ਅਲੰਕਾਰਿਕ ਸ਼ੈਲੀ ਦਾ ਬਾਦਸ਼ਾਹ। |
   | **ਕਿਸ਼ਨ ਸਿੰਘ ਆਰਫ਼** (1836–1900) | ਹੀਰ, ਪੂਰਨ ਭਗਤ, ਸ਼ੀਰੀਂ ਫ਼ਰਹਾਦ | **ਬੈਂਤ ਤੇ ਕੁੰਡਲੀਆਂ** | ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਪੁਸਤਕ ਵਿਕਰੇਤਾ ਜਿਨ੍ਹਾਂ ਨੇ ਕਿੱਸਿਆਂ ਨੂੰ ਛਾਪੇਖਾਨੇ ਰਾਹੀਂ ਲੋਕ-ਲੋਕ ਤੱਕ ਪਹੁੰਚਾਇਆ। |

2. **ਬੀਰ ਕਾਵਿ ਦੇ ਅਮਰ ਸ਼ਾਹਕਾਰ:**
   - **ਚੰਡੀ ਦੀ ਵਾਰ (ਵਾਰ ਸ੍ਰੀ ਭਗਉਤੀ ਜੀ ਕੀ) — ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ:**
     - ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਰਚਨਾ; ਕੁੱਲ **55 ਬੰਦ (54 ਪਉੜੀਆਂ + 1 ਦੋਹਰਾ)**; ਮਾਰਕੰਡੇ ਪੁਰਾਣ ਦੀ ਕਥਾ ਨੂੰ ਧਰਮ ਯੁੱਧ ਅਤੇ ਜ਼ੁਲਮ ਦੇ ਖ਼ਾਤਮੇ ਦੇ ਬੀਰ-ਰਸੀ ਪ੍ਰਤੀਕ ਵਜੋਂ ਢਾਲਿਆ; ਸਿੱਖ ਅਰਦਾਸ ਦੀ ਸ਼ੁਰੂਆਤ ਇਸੇ ਵਾਰ ਨਾਲ ਹੁੰਦੀ ਹੈ (*"ਪ੍ਰਥਮ ਭਗੌਤੀ ਸਿਮਰਿ ਕੈ ਗੁਰੁ ਨਾਨਕ ਲਈਂ ਧਿਆਇ"*); ਛੰਦ: **ਸਿਰਖੰਡੀ** (21 ਪਉੜੀਆਂ) ਅਤੇ **ਨਿਸ਼ਾਨੀ** (33 ਪਉੜੀਆਂ)।
   - **ਜੰਗਨਾਮਾ ਸਿੰਘਾਂ ਤੇ ਫ਼ਿਰੰਗੀਆਂ (ਸ਼ਾਹ ਮੁਹੰਮਦ):**
     - 1846 ਦੇ ਕਰੀਬ ਰਚਿਤ; **105 ਬੈਂਤ**; ਪਹਿਲੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–46) ਦਾ ਅੱਖੀਂ ਡਿੱਠਾ ਕੌਮੀ ਬਿਰਤਾਂਤ; ਪੰਜਾਬੀਅਤ ਦੀ ਧੜਕਣ: *"ਜੰਗ ਹਿੰਦ-ਪੰਜਾਬ ਦਾ ਹੋਣ ਲੱਗਾ, ਦੋਵੇਂ ਪਾਤਸ਼ਾਹੀ ਫ਼ੌਜਾਂ ਭਾਰੀਆਂ ਨੇ"* ਅਤੇ ਦਰਬਾਰੀ ਗ਼ੱਦਾਰਾਂ ਕਾਰਨ ਹਾਰ ਦਾ ਦਰਦ: *"ਸ਼ਾਹ ਮੁਹੰਮਦਾ ਇਕ ਸਰਕਾਰ ਬਾਝੋਂ, ਫ਼ੌਜਾਂ ਜਿੱਤ ਕੇ ਅੰਤ ਨੂੰ ਹਾਰੀਆਂ ਨੇ"*।
   - **ਵਾਰ ਨਾਦਰ ਸ਼ਾਹ (ਨਜਾਬਤ):**
     - 1739 ਦੇ ਨਾਦਰ ਸ਼ਾਹੀ ਹਮਲੇ ਅਤੇ ਕਰਨਾਲ ਦੀ ਲੜਾਈ ਦਾ ਯਥਾਰਥਕ ਪਉੜੀ-ਬੱਧ ਵਰਣਨ।`,

            hi: `### [Level B: Basic — क़िस्सा एवं बीर काव्य का स्वरूप]
1. **क़िस्सा काव्य:**
   - अरबी शब्द 'क़िस्सा' (कहानी/घटना) से व्युत्पन्न। फ़ारसी मसनवी शैली और पंजाब की लोक-संस्कृति के संगम से विकसित।
   - पारंपरिक संरचना: हम्द (ईश वंदना) $\to$ नात (पैग़ंबर की प्रशंसा) $\to$ पीर-मुर्शिद स्तुति $\to$ कथा विस्तार $\to$ वियोग व संघर्ष $\to$ दुखांत/सुखांत समापन।
   - चार प्रमुख अमर गाथाएँ: **हीर-राँझा**, **मिर्ज़ा-साहिबाँ**, **सस्सी-पुन्नू**, तथा **सोहणी-महीवाल**।
2. **बीर काव्य:**
   - वीरता, राष्ट्रीय गौरव तथा अन्याय के विरुद्ध सशस्त्र संघर्ष का ओजस्वी काव्य।
   - दो मुख्य विधाएँ:
     - **वार:** विशुद्ध पंजाबी पउड़ी छंद (निशानी व सिरखंडी) में ढाडियों द्वारा गाया जाने वाला वीरकाव्य।
     - **जंगनामा:** ऐतिहासिक युद्धों का प्रत्यक्ष, यथार्थपरक एवं तिथिक्रमबद्ध विवरण (प्रायः बैंत छंद में)।

---

### [Level I: Intermediate — प्रमुख क़िस्साकार एवं बीर काव्य कृतियाँ]
1. **प्रमुख क़िस्साकार:**
   | क़िस्साकार | कृति | छंद | मुख्य साहित्यिक योगदान |
   |---|---|---|---|
   | **दामोदर गुलाटी** | **हीर दामोदर** | **दवैया छंद** | अकबर का समकालीन; झांग का निवासी; **पंजाबी में हीर का प्रथम लिखित क़िस्सा**; आँखों देखा वृत्तांत (*"अक्खीं डिट्ठा क़िस्सा कीता"*); सुखांत समापन। |
   | **पीलू** | **मिर्ज़ा साहिबाँ** | **सद छंद** | मिर्ज़ा साहिबाँ का प्रथम रचयिता; तरनतारन/मांझा; कारुणिक नियतिवाद व मानवीय दुर्बलता का चित्रण (*"भल्यां नाल खलोईए भल्यां दा फल होवे"*). |
   | **वारिस शाह** | **हीर वारिस** | **बैंत छंद** | जंडियाला शेर ख़ाँ; **1766 ई.** में मलका हंस में संपूर्ण; **पंजाबी संस्कृति का विश्वकोश (Encyclopedia)**; लोकजीवन, वस्त्र, आभूषण, रीति-रिवाज़ एवं सामाजिक पाखंडों का अमर दस्तावेज़। |
   | **हाशिम शाह** | **सस्सी पुन्नू** | **दवैया छंद** | अमृतसर; **महाराजा रणजीत सिंह** के दरबारी कवि; मरुस्थल में सस्सी के विरह व प्राणोत्सर्ग का मार्मिक वर्णन। |
   | **हाफ़िज़ बरख़ुरदार** | मिर्ज़ा साहिबाँ, यूसुफ़ ज़ुलैख़ा | **बैंत व दवैया** | औरंगज़ेब का समकालीन; **पंजाबी में 'यूसुफ़ ज़ुलैख़ा' का प्रथम रचयिता**। |
   | **कादरयार** | **पूरन भगत** | **सीहरफ़ी / बैंत** | शेख़ूपुरा; महाराजा रणजीत सिंह द्वारा पूरन भगत की रचना पर **एक कुआँ** उपहार स्वरूप दिया गया। |
   | **फ़ज़ल शाह** | **सोहणी महीवाल** | **बैंत छंद** | लाहौर; अद्भुत शब्द-संयोजन, अनुप्रास, यमक एवं आलंकारिक शैली के स्वामी। |

2. **बीर काव्य की अमर कृतियाँ:**
   - **चंडी दी वार — श्री गुरु गोबिंद सिंह जी:** 55 छंद (54 पौड़ियां + 1 दोहा); मार्कंडेय पुराण की दुर्गा-कथा को धर्म-युद्ध के प्रतीक के रूप में ढाला; छंद: **सिरखंडी** (21 पौड़ियां) व **निशानी** (33 पौड़ियां); सिख अरदास का प्रारंभ (*"प्रथम भगौती सिमर कै"*).
   - **जंगनामा शाह मुहम्मद:** 105 बैंत; 1845–46 के प्रथम आंग्ल-सिख युद्ध का राष्ट्रीय दस्तावेज़; पंजाबियत की अमर पंक्ति: *"शाह मुहम्मदा इक सरकार बाझों, फ़ौजां जित्त के अंत नूं हारियां ने"*।
   - **वार नादिर शाह (नज़ाबत):** 1739 के नादिर शाह के आक्रमण तथा करनाल के युद्ध का ओजस्वी वर्णन।`
        },
        keyNotes: {
            en: [
                'Damodar Gulati composed the first extant written Heer in Punjabi using Davaiya chhand during Akbar’s reign.',
                'Pilu composed the first Mirza Sahiba using Sad chhand, renowned for tragic pathos and fatalism.',
                'Waris Shah completed Heer Waris in 1766 CE in Baint chhand; celebrated as the cultural encyclopedia of Punjab.',
                'Hashim Shah, court poet of Maharaja Ranjit Singh, is immortalized for Qissa Sassi Punnu in Davaiya chhand.',
                'Hafiz Barkhurdar was the first to write the Qissa of Yousaf Zulaikha in the Punjabi language.',
                'Qadiryar received a well (Khoo) from Maharaja Ranjit Singh for composing Qissa Puran Bhagat in Siharfi form.',
                'Fazal Shah is famous for verbal ornamentations, Tajnees, and linguistic pyrotechnics in Qissa Sohni Mahiwal.',
                'Chandi di Var by Sri Guru Gobind Singh Ji contains 55 stanzas (54 Pauris + 1 Dohra) using Sirkhindi (21) and Nishani (33) chhand.',
                'Shah Mohammad’s Jangnama Singhan te Firangian (105 Baints) depicts the First Anglo-Sikh War (1845–46) with nationalistic ethos.',
                'Najabat composed Var Nadir Shah depicting the 1739 invasion and the Battle of Karnal.'
            ],
            pa: [
                'ਦਮੋਦਰ ਗੁਲਾਟੀ ਨੇ ਅਕਬਰ ਦੇ ਸਮੇਂ ਦਵੱਈਆ ਛੰਦ ਵਿੱਚ ਪੰਜਾਬੀ ਦੀ ਪਹਿਲੀ ਉਪਲਬਧ ਹੀਰ ਰਚੀ।',
                'ਪੀਲੂ ਨੇ ਸਦ ਛੰਦ ਵਿੱਚ ਮਿਰਜ਼ਾ ਸਾਹਿਬਾ ਦਾ ਪਹਿਲਾ ਕਿੱਸਾ ਲਿਖਿਆ, ਜੋ ਤ੍ਰਾਸਦੀ ਅਤੇ ਸ਼ੋਕ ਲਈ ਪ੍ਰਸਿੱਧ ਹੈ।',
                'ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ 1766 ਈ. ਵਿੱਚ ਬੈਂਤ ਛੰਦ ਵਿੱਚ ਹੀਰ ਵਾਰਿਸ ਸੰਪੂਰਨ ਕੀਤੀ, ਜਿਸ ਨੂੰ ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ ਦਾ ਵਿਸ਼ਵਕੋਸ਼ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।',
                'ਹਾਸ਼ਮ ਸ਼ਾਹ (ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਦਰਬਾਰੀ ਕਵੀ) ਸੱਸੀ ਪੁੰਨੂੰ (ਦਵੱਈਆ ਛੰਦ) ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਹਨ।',
                'ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ ਪੰਜਾਬੀ ਵਿੱਚ ਯੂਸਫ਼ ਜ਼ੁਲੈਖ਼ਾ ਦਾ ਕਿੱਸਾ ਲਿਖਣ ਵਾਲੇ ਪਹਿਲੇ ਕਵੀ ਸਨ।',
                'ਕਾਦਰਯਾਰ ਨੂੰ ਪੂਰਨ ਭਗਤ (ਸੀਹਰਫ਼ੀ) ਲਿਖਣ ਬਦਲੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਨੇ ਇੱਕ ਖੂਹ ਇਨਾਮ ਵਜੋਂ ਦਿੱਤਾ।',
                'ਫ਼ਜ਼ਲ ਸ਼ਾਹ ਨੇ ਕਿੱਸਾ ਸੋਹਣੀ ਮਹੀਵਾਲ ਵਿੱਚ ਤਜਨੀਸ, ਯਮਕ ਅਤੇ ਸ਼ਬਦੀ ਚਮਤਕਾਰਾਂ ਦਾ ਸਿਖਰ ਦਿਖਾਇਆ।',
                'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਚੰਡੀ ਦੀ ਵਾਰ ਵਿੱਚ 55 ਬੰਦ (54 ਪਉੜੀਆਂ + 1 ਦੋਹਰਾ) ਹਨ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਸਿਰਖੰਡੀ (21) ਤੇ ਨਿਸ਼ਾਨੀ (33) ਛੰਦ ਵਰਤੇ ਗਏ ਹਨ।',
                'ਸ਼ਾਹ ਮੁਹੰਮਦ ਦੇ ਜੰਗਨਾਮੇ (105 ਬੈਂਤ) ਵਿੱਚ ਪਹਿਲੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–46) ਦਾ ਕੌਮੀ ਪੰਜਾਬੀ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਤੋਂ ਵਰਣਨ ਹੈ।',
                'ਨਜਾਬਤ ਨੇ 1739 ਦੇ ਨਾਦਰ ਸ਼ਾਹੀ ਹਮਲੇ ਅਤੇ ਕਰਨਾਲ ਦੀ ਲੜਾਈ ਉੱਤੇ ਵਾਰ ਨਾਦਰ ਸ਼ਾਹ ਰਚੀ।'
            ],
            hi: [
                'दामोदर गुलाटी ने अकबर के समय दवैया छंद में पंजाबी की पहली उपलब्ध हीर रची।',
                'पीलू ने सद छंद में मिर्ज़ा साहिबाँ का प्रथम क़िस्सा रचा, जो कारुणिक रस के लिए प्रसिद्ध है।',
                'वारिस शाह ने 1766 ई. में बैंत छंद में हीर वारिस पूर्ण की, जिसे पंजाबी संस्कृति का विश्वकोश कहा जाता है।',
                'हाशिम शाह (रणजीत सिंह के दरबारी कवि) दवैया छंद में रचित सस्सी पुन्नू के लिए अमर हैं।',
                'हाफ़िज़ बरख़ुरदार पंजाबी में यूसुफ़ ज़ुलैख़ा लिखने वाले प्रथम कवि थे।',
                'कादरयार को पूरन भगत (सीहरफ़ी) रचने पर महाराजा रणजीत सिंह ने एक कुआँ इनाम में दिया था।',
                'फ़ज़ल शाह ने सोहणी महीवाल में तजनीस, यमक और भाषाई अलंकरणों का पराकाष्ठा प्रदर्शन किया।',
                'श्री गुरु गोबिंद सिंह जी की चंडी दी वार में 55 छंद (54 पौड़ियां + 1 दोहा) हैं जिनमें सिरखंडी (21) व निशानी (33) छंद प्रयुक्त हैं।',
                'शाह मुहम्मद के जंगनामा (105 बैंत) में 1845–46 के प्रथम आंग्ल-सिख युद्ध का राष्ट्रीय दस्तावेज़ प्रस्तुत है।',
                'नज़ाबत ने 1739 के नादिर शाह आक्रमण व करनाल के युद्ध पर वार नादिर शाह की रचना की।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Metres of Legendary Qissas: Heer Damodar = Davaiya | Mirza Pilu = Sad | Heer Waris = Baint | Sassi Hashim = Davaiya | Sohni Fazal Shah = Baint.',
                'Chandi di Var Chhands: 21 Sirkhindi Pauris (mid-rhyme) + 33 Nishani Pauris (end-rhyme) + 1 opening Dohra = 55 total stanzas.',
                'Shah Mohammad Key Facts: 105 Baints | First Anglo-Sikh War (1845–46) | Battles: Mudki, Ferozeshah, Aliwal, Sabraon | Refrain: "Shah Muhammada ik sarcar bajhon".'
            ],
            pa: [
                'ਪ੍ਰਮੁੱਖ ਕਿੱਸਿਆਂ ਦੇ ਛੰਦ: ਹੀਰ ਦਮੋਦਰ = ਦਵੱਈਆ | ਮਿਰਜ਼ਾ ਪੀਲੂ = ਸਦ | ਹੀਰ ਵਾਰਿਸ = ਬੈਂਤ | ਸੱਸੀ ਹਾਸ਼ਮ = ਦਵੱਈਆ | ਸੋਹਣੀ ਫ਼ਜ਼ਲ ਸ਼ਾਹ = ਬੈਂਤ।',
                'ਚੰਡੀ ਦੀ ਵਾਰ ਦੇ ਛੰਦ: 21 ਸਿਰਖੰਡੀ ਪਉੜੀਆਂ (ਮੱਧ-ਤੁਕਾਂਤ) + 33 ਨਿਸ਼ਾਨੀ ਪਉੜੀਆਂ (ਅੰਤ-ਤੁਕਾਂਤ) + 1 ਦੋਹਰਾ = ਕੁੱਲ 55 ਬੰਦ।',
                'ਜੰਗਨਾਮਾ ਸ਼ਾਹ ਮੁਹੰਮਦ ਤੱਥ: 105 ਬੈਂਤ | ਪਹਿਲਾ ਸਿੱਖ-ਅੰਗਰੇਜ਼ ਯੁੱਧ (1845–46) | ਲੜਾਈਆਂ: ਮੁਦਕੀ, ਫ਼ੇਰੂਸ਼ਹਿਰ, ਅਲੀਵਾਲ, ਸਭਰਾਵਾਂ | ਸਤਰ: "ਸ਼ਾਹ ਮੁਹੰਮਦਾ ਇਕ ਸਰਕਾਰ ਬਾਝੋਂ"।'
            ],
            hi: [
                'प्रमुख क़िस्सों के छंद: हीर दामोदर = दवैया | मिर्ज़ा पीलू = सद | हीर वारिस = बैंत | सस्सी हाशिम = दवैया | सोहणी फ़ज़ल शाह = बैंत।',
                'चंडी दी वार छंद विवरण: 21 सिरखंडी पौड़ियां + 33 निशानी पौड़ियां + 1 दोहा = कुल 55 छंद।',
                'जंगनामा शाह मुहम्मद तथ्य: 105 बैंत | प्रथम आंग्ल-सिख युद्ध (1845–46) | प्रमुख पंक्ति: "शाह मुहम्मदा इक सरकार बाझों"।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Waris Shah was the first to write the Qissa of Heer Ranjha in Punjabi. Correction: Damodar Gulati was the first to write Heer in Punjabi during the 16th century (Akbar\'s time); Waris Shah wrote his masterpiece over a century later in 1766.',
                'Misconception: Chandi di Var is written in standard Dohra-Chaupai metres. Correction: Chandi di Var is composed entirely in native heroic Pauris using Sirkhindi (21 pauris) and Nishani (33 pauris) metres.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ ਪੰਜਾਬੀ ਵਿੱਚ ਹੀਰ ਦਾ ਪਹਿਲਾ ਕਿੱਸਾ ਲਿਖਿਆ। ਸੁਧਾਰ: ਦਮੋਦਰ ਗੁਲਾਟੀ ਨੇ 16ਵੀਂ ਸਦੀ (ਅਕਬਰ ਦੇ ਸਮੇਂ) ਪੰਜਾਬੀ ਵਿੱਚ ਹੀਰ ਦਾ ਪਹਿਲਾ ਕਿੱਸਾ ਲਿਖਿਆ; ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ ਆਪਣਾ ਸ਼ਾਹਕਾਰ 1766 ਈ. ਵਿੱਚ ਲਿਖਿਆ।',
                'ਭੁਲੇਖਾ: ਚੰਡੀ ਦੀ ਵਾਰ ਦੋਹਰਾ-ਚੌਪਈ ਛੰਦ ਵਿੱਚ ਰਚੀ ਗਈ ਹੈ। ਸੁਧਾਰ: ਚੰਡੀ ਦੀ ਵਾਰ ਮੌਲਿਕ ਪਉੜੀ ਰੂਪ ਵਿੱਚ ਸਿਰਖੰਡੀ (21 ਪਉੜੀਆਂ) ਅਤੇ ਨਿਸ਼ਾਨੀ (33 ਪਉੜੀਆਂ) ਛੰਦ ਵਿੱਚ ਲਿਖੀ ਗਈ ਹੈ।'
            ],
            hi: [
                'भ्रांति: वारिस शाह ने पंजाबी में हीर का पहला क़िस्सा लिखा। सुधार: दामोदर गुलाटी ने 16वीं सदी (अकबर के काल) में हीर का पहला क़िस्सा लिखा; वारिस शाह ने 1766 में अपनी कृति रची।',
                'भ्रांति: चंडी दी वार दोहा-चौपाई छंद में रची गई है। सुधार: चंडी दी वार विशुद्ध पउड़ी रूप में सिरखंडी (21) और निशानी (33) छंद में रची गई है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Distinguish between "Sirkhindi" and "Nishani" Pauris in Guru Gobind Singh Ji’s Chandi di Var with reference to line rhyming (Tukant).',
                    pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ "ਚੰਡੀ ਦੀ ਵਾਰ" ਵਿੱਚ ਵਰਤੀਆਂ ਗਈਆਂ "ਸਿਰਖੰਡੀ" ਅਤੇ "ਨਿਸ਼ਾਨੀ" ਪਉੜੀਆਂ ਵਿੱਚ ਤੁਕਾਂਤ ਦੇ ਆਧਾਰ ਤੇ ਅੰਤਰ ਸਪੱਸ਼ਟ ਕਰੋ।',
                    hi: 'श्री गुरु गोबिंद सिंह जी की "चंडी दी वार" में प्रयुक्त "सिरखंडी" और "निशानी" पौड़ियों में तुकांत के आधार पर अंतर स्पष्ट करें।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Define Nishani Chhand — In Nishani Pauri, the rhyming words occur strictly at the end of every line (Anth-Tukant). There are 33 Nishani Pauris in Chandi di Var.',
                        'Step 2: Define Sirkhindi Chhand — In Sirkhindi Pauri, the rhyming words occur in the middle of the line (Maddh-Tukant), while the line ends on non-rhyming words. There are 21 Sirkhindi Pauris in Chandi di Var.',
                        'Step 3: Recognize literary impact — Sirkhindi creates an abrupt, rapid, and clashing rhythmic cadence that mimics the clash of swords and shields in battle.'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਨਿਸ਼ਾਨੀ ਛੰਦ — ਨਿਸ਼ਾਨੀ ਪਉੜੀ ਵਿੱਚ ਤੁਕਾਂਤ ਤੁਕ ਦੇ ਅਖ਼ੀਰ ਵਿੱਚ ਮਿਲਦਾ ਹੈ (ਅੰਤ-ਤੁਕਾਂਤ)। ਚੰਡੀ ਦੀ ਵਾਰ ਵਿੱਚ 33 ਨਿਸ਼ਾਨੀ ਪਉੜੀਆਂ ਹਨ।',
                        'ਕਦਮ 2: ਸਿਰਖੰਡੀ ਛੰਦ — ਸਿਰਖੰਡੀ ਪਉੜੀ ਵਿੱਚ ਤੁਕਾਂਤ ਤੁਕ ਦੇ ਵਿਚਕਾਰ ਆਉਂਦਾ ਹੈ (ਮੱਧ-ਤੁਕਾਂਤ) ਅਤੇ ਅੰਤਲੇ ਸ਼ਬਦ ਆਪਸ ਵਿੱਚ ਨਹੀਂ ਰਲਦੇ। ਇਸ ਵਾਰ ਵਿੱਚ 21 ਸਿਰਖੰਡੀ ਪਉੜੀਆਂ ਹਨ।',
                        'ਕਦਮ 3: ਸਾਹਿਤਕ ਪ੍ਰਭਾਵ — ਸਿਰਖੰਡੀ ਛੰਦ ਦੀ ਟੁੱਟਵੀਂ ਤੇ ਤਿੱਖੀ ਲੈਅ ਯੁੱਧ ਦੇ ਮੈਦਾਨ ਵਿੱਚ ਤਲਵਾਰਾਂ ਅਤੇ ਨੇਜ਼ਿਆਂ ਦੇ ਖੜਕਣ ਦੀ ਧੁਨੀ ਪੈਦਾ ਕਰਦੀ ਹੈ।'
                    ],
                    hi: [
                        'चरण 1: निशानी छंद — निशानी पौड़ी में तुकांत पंक्ति के अंत में मिलता है (अंत-तुकांत)। चंडी दी वार में 33 निशानी पौड़ियां हैं।',
                        'चरण 2: सिरखंडी छंद — सिरखंडी पौड़ी में तुकांत पंक्ति के मध्य में मिलता है (मध्य-तुकांत)। इस वार में 21 सिरखंडी पौड़ियां हैं।',
                        'चरण 3: साहित्यिक प्रभाव — सिरखंडी छंद की गति युद्धभूमि में शस्त्रों के टकराने की तीव्र ध्वनि उत्पन्न करती है।'
                    ]
                },
                finalAnswer: {
                    en: 'Nishani has end-rhyme (33 pauris); Sirkhindi has mid-rhyme (21 pauris).',
                    pa: 'ਨਿਸ਼ਾਨੀ ਵਿੱਚ ਅੰਤ-ਤੁਕਾਂਤ ਹੁੰਦਾ ਹੈ (33 ਪਉੜੀਆਂ); ਸਿਰਖੰਡੀ ਵਿੱਚ ਮੱਧ-ਤੁਕਾਂਤ ਹੁੰਦਾ ਹੈ (21 ਪਉੜੀਆਂ)।',
                    hi: 'निशानी में अंत-तुकांत होता है (33 पौड़ियां); सिरखंडी में मध्य-तुकांत होता है (21 पौड़ियां)।'
                }
            },
            {
                problem: {
                    en: 'Explain why Shah Mohammad’s "Jangnama Singhan te Firangian" is hailed as the supreme expression of 19th-century secular Punjabi national consciousness.',
                    pa: 'ਸ਼ਾਹ ਮੁਹੰਮਦ ਦੇ "ਜੰਗਨਾਮਾ ਸਿੰਘਾਂ ਤੇ ਫ਼ਿਰੰਗੀਆਂ" ਨੂੰ 19ਵੀਂ ਸਦੀ ਦੀ ਧਰਮ-ਨਿਰਪੱਖ ਪੰਜਾਬੀ ਕੌਮੀਅਤ (ਪੰਜਾਬੀਅਤ) ਦਾ ਸਰਵਉੱਚ ਪ੍ਰਗਟਾਵਾ ਕਿਉਂ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?',
                    hi: 'शाह मुहम्मद के "जंगनामा सिंघों ते फिरंगियां" को 19वीं सदी की धर्मनिरपेक्ष पंजाबी राष्ट्रीय चेतना (पंजाबियत) की सर्वोत्कृष्ट अभिव्यक्ति क्यों माना जाता है?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Author identity & perspective — Though Shah Mohammad was a Muslim poet, he proudly identified himself as a Punjabi national and mourned the decline of the Sikh Kingdom (Sarkar-i-Khalsa).',
                        'Step 2: Framing of the conflict — He depicted the First Anglo-Sikh War not as a communal clash, but as a struggle of sovereign Punjab against the alien British/Hindustani forces: "Jang Hind-Punjab da hon lagga".',
                        'Step 3: Commemoration of communal harmony — He celebrated how Hindus, Muslims, and Sikhs served harmoniously under Maharaja Ranjit Singh: "Razi bahut rahe musalman hindu, sir dohan de utte bala aayi".'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਲੇਖਕ ਦਾ ਦ੍ਰਿਸ਼ਟੀਕੋਣ — ਮੁਸਲਮਾਨ ਹੁੰਦੇ ਹੋਏ ਵੀ ਸ਼ਾਹ ਮੁਹੰਮਦ ਨੇ ਪੰਜਾਬੀ ਕੌਮੀਅਤ ਦੀ ਵਕਾਲਤ ਕੀਤੀ ਅਤੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਰਾਜ (ਸਰਕਾਰ-ਏ-ਖ਼ਾਲਸਾ) ਦੇ ਪਤਨ \'ਤੇ ਹੰਝੂ ਵਹਾਏ।',
                        'ਕਦਮ 2: ਯੁੱਧ ਦਾ ਸਰੂਪ — ਉਸ ਨੇ ਇਸ ਯੁੱਧ ਨੂੰ ਕਿਸੇ ਫ਼ਿਰਕੇ ਦਾ ਨਹੀਂ ਸਗੋਂ ਪੰਜਾਬ ਬਨਾਮ ਹਿੰਦੁਸਤਾਨ/ਅੰਗਰੇਜ਼ ਫ਼ੌਜ ਦਾ ਯੁੱਧ ਦੱਸਿਆ: "ਜੰਗ ਹਿੰਦ-ਪੰਜਾਬ ਦਾ ਹੋਣ ਲੱਗਾ"।',
                        'ਕਦਮ 3: ਸਾਂਝੀਵਾਲਤਾ ਦਾ ਪ੍ਰਤੀਕ — ਉਸ ਨੇ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਰਾਜ ਵਿੱਚ ਹਿੰਦੂਆਂ ਤੇ ਮੁਸਲਮਾਨਾਂ ਦੀ ਸੁਖੀ ਸਾਂਝ ਨੂੰ ਯਾਦ ਕੀਤਾ: "ਰਾਜ਼ੀ ਬਹੁਤ ਰਹੇ ਮੁਸਲਮਾਨ ਹਿੰਦੂ, ਸਿਰ ਦੋਹਾਂ ਦੇ ਉੱਤੇ ਬਲਾ ਆਈ"।'
                    ],
                    hi: [
                        'चरण 1: कवि का दृष्टिकोण — मुस्लिम होते हुए भी शाह मुहम्मद ने पंजाबियत की भावना प्रकट की और महाराजा रणजीत सिंह के साम्राज्य के पतन पर गहरा शोक व्यक्त किया।',
                        'चरण 2: युद्ध का स्वरूप — उन्होंने इसे हिंदू-मुस्लिम-सिख का नहीं, बल्कि स्वतंत्र पंजाब और अंग्रेज़ों के मध्य युद्ध बताया: "जंग हिंद-पंजाब दा होण लग्गा"।',
                        'चरण 3: साझी विरासत — उन्होंने रणजीत सिंह के काल में हिंदू और मुसलमानों के सौहार्दपूर्ण जीवन का गौरवगान किया।'
                    ]
                },
                finalAnswer: {
                    en: 'It frames the war as Punjab vs British India, transcends religious boundaries, and laments the fall of Maharaja Ranjit Singh’s shared sovereign welfare state.',
                    pa: 'ਇਹ ਯੁੱਧ ਨੂੰ \'ਹਿੰਦ-ਪੰਜਾਬ\' ਦਾ ਯੁੱਧ ਦਰਸਾਉਂਦਾ ਹੈ, ਧਾਰਮਿਕ ਵਲਗਣਾਂ ਤੋਂ ਮੁਕਤ ਹੈ ਅਤੇ ਸਾਂਝੇ ਪੰਜਾਬੀ ਰਾਜ ਦੇ ਵਿਛੋੜੇ ਦਾ ਵਿਰਲਾਪ ਕਰਦਾ ਹੈ।',
                    hi: 'यह युद्ध को पंजाब बनाम ब्रिटिश भारत के रूप में चित्रित करता है और धर्मनिरपेक्ष साझे पंजाबी गौरव का प्रतिनिधित्व करता है।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-lit-qb-1',
                question: {
                    en: 'In which year did Waris Shah complete his Heer, and at which historic place did he write it?',
                    pa: 'ਵਾਰਿਸ ਸ਼ਾਹ ਨੇ ਕਿਸ ਸਾਲ ਆਪਣੀ ਹੀਰ ਸੰਪੂਰਨ ਕੀਤੀ ਅਤੇ ਇਸ ਦੀ ਰਚਨਾ ਕਿਸ ਇਤਿਹਾਸਕ ਅਸਥਾਨ \'ਤੇ ਕੀਤੀ?',
                    hi: 'वारिस शाह ने किस वर्ष अपनी हीर पूर्ण की और इसकी रचना किस ऐतिहासिक स्थान पर की?'
                },
                answer: {
                    en: 'Completed in 1766 CE (1180 Hijri) at village Malka Hans (Pakpattan district, Pakistan).',
                    pa: '1766 ਈ. (1180 ਹਿਜਰੀ) ਵਿੱਚ ਪਿੰਡ ਮਲਕਾ ਹੰਸ (ਜ਼ਿਲ੍ਹਾ ਪਾਕਪਟਨ, ਪਾਕਿਸਤਾਨ) ਵਿਖੇ।',
                    hi: '1766 ई. (1180 हिजरी) में गाँव मलका हंस (ज़िला पाकपत्तन, पाकिस्तान) में।'
                }
            },
            {
                id: 'fc-lit-qb-2',
                question: {
                    en: 'Which meter is uniquely associated with Pilu’s "Mirza Sahiba"?',
                    pa: 'ਪੀਲੂ ਦੇ ਕਿੱਸੇ "ਮਿਰਜ਼ਾ ਸਾਹਿਬਾ" ਨਾਲ ਵਿਸ਼ੇਸ਼ ਤੌਰ \'ਤੇ ਕਿਹੜਾ ਛੰਦ ਜੁੜਿਆ ਹੋਇਆ ਹੈ?',
                    hi: 'पीलू के क़िस्से "मिर्ज़ा साहिबाँ" के साथ विशेष रूप से कौन सा छंद जुड़ा है?'
                },
                answer: {
                    en: 'Sad Chhand (ਸਦ ਛੰਦ — a plaintive musical lament meter).',
                    pa: 'ਸਦ ਛੰਦ (ਇੱਕ ਲੰਮੀ ਹੇਕ ਵਾਲਾ ਦਰਦਮਈ ਛੰਦ)।',
                    hi: 'सद छंद (दीर्घ आलाप युक्त कारुणिक छंद)।'
                }
            },
            {
                id: 'fc-lit-qb-3',
                question: {
                    en: 'What reward did Maharaja Ranjit Singh confer upon Qadiryar for composing "Qissa Puran Bhagat"?',
                    pa: 'ਕਾਦਰਯਾਰ ਨੂੰ "ਕਿੱਸਾ ਪੂਰਨ ਭਗਤ" ਲਿਖਣ ਬਦਲੇ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਨੇ ਕੀ ਇਨਾਮ ਦਿੱਤਾ ਸੀ?',
                    hi: 'क़ादरयार को "क़िस्सा पूरन भगत" रचने पर महाराजा रणजीत सिंह ने क्या इनाम दिया था?'
                },
                answer: {
                    en: 'A well for irrigation (ਇੱਕ ਖੂਹ) in his native village Machhike.',
                    pa: 'ਉਹਨਾਂ ਦੇ ਜੱਦੀ ਪਿੰਡ ਮਾਛੀਕੇ ਵਿਖੇ ਇੱਕ ਖੂਹ ਜ਼ਮੀਨ ਸਮੇਤ।',
                    hi: 'उनके पैतृक गाँव माछीके में एक कुआँ कृषि भूमि सहित।'
                }
            },
            {
                id: 'fc-lit-qb-4',
                question: {
                    en: 'How many Baints are there in Shah Mohammad’s "Jangnama Singhan te Firangian"?',
                    pa: 'ਸ਼ਾਹ ਮੁਹੰਮਦ ਦੇ "ਜੰਗਨਾਮਾ ਸਿੰਘਾਂ ਤੇ ਫ਼ਿਰੰਗੀਆਂ" ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਬੈਂਤ ਹਨ?',
                    hi: 'शाह मुहम्मद के "जंगनामा सिंघों ते फिरंगियां" में कुल कितने बैंत हैं?'
                },
                answer: {
                    en: '105 Baints (105 ਬੈਂਤ).',
                    pa: 'ਕੁੱਲ 105 ਬੈਂਤ।',
                    hi: 'कुल 105 बैंत।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. MODERN PUNJABI POETRY (punjabi-lit-modern-poetry)
    // =========================================================================
    {
        topicId: 'punjabi-lit-modern-poetry',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Authoritative ERB Punjab Master Cadre Punjabi Literature blueprint covering 10 modern Punjabi poets: Bhai Vir Singh, Dhani Ram Chatrik, Prof. Puran Singh, Diwan Singh Kalepani, Amrita Pritam, Mohan Singh, Bawa Balwant, Shiv Kumar Batalvi, Surjit Patar, and Paash.'
        },
        bookRefs: [
            {
                title: 'Adhunik Punjabi Kavita da Itihas',
                author: 'Dr. Rajinder Pal Singh / Punjabi University Patiala',
                chapter: 'Romantic, Progressive, Existential, and Jujharvadi Trends in Modern Poetry',
                relevance: 'Prescribed reference for Sahitya Akademi awards, Jnanpith, poetic collections, and critical movements.'
            },
            {
                title: 'Punjabi Sahit da Itihas (Adhunik Kal)',
                author: 'Dr. Jaswinder Singh & Dr. Manjit Singh',
                chapter: 'Bhai Vir Singh to Surjit Patar & Paash',
                relevance: 'Standard text for Punjabi Master Cadre literary analysis and verse forms.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Transition to Modernity in Punjabi Poetry]
1. **Advent of Modern Punjabi Literature:**
   - Initiated in the late 19th century under colonial encounter, the Singh Sabha reform movement, modern print capitalism, and western literary forms (blank verse, free verse, lyrical personalism).
   - Marked a paradigm shift from medieval communal and theological frameworks towards individuality, psychological inwardness, romantic celebration of nature, nationalism, socialist progressivism, and existential angst.

---

### [Level I: Intermediate — The 10 Canonized Modern Punjabi Poets]
1. **Bhai Vir Singh (1872–1957 CE):**
   - **Father of Modern Punjabi Literature** (*ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ*).
   - Mystic-romantic poet, theologian, and scholar; founded **Khalsa Samachar** (1899) and Wazir Hind Press.
   - Masterpieces: Epic poem **Rana Surat Singh** (1905; 14,000+ lines in *Sirkhandi Chhand / Blank Verse* — spiritual elevation of Rani Raj Kaur following her husband’s death).
   - Poetry collections: *Trel Tupke* (1921), *Lahiran de Har* (1921), *Matak Hulare* (1922 — Kashmir landscape beauty), *Bijlian de Har* (1927), *Preet Veena*, *Kambdi Kalai*.
   - **First recipient of the Sahitya Akademi Award in Punjabi (1955)** for his collection **Mere Saiyan Jio** (*ਮੇਰੇ ਸਾਈਆਂ ਜੀਓ*); Padma Bhushan (1956).
2. **Lala Dhani Ram Chatrik (1876–1954 CE):**
   - Pioneer of secular, patriotic, and agrarian Punjabi poetry; standardized Punjabi typography and printing at **Sudarshan Press**; first President of the Punjabi Sahit Sabha.
   - Masterpieces: *Chandanwari* (1931), *Kesar Kyari* (1940), *Nawan Jahan* (1942), *Sufikhana* (1950), *Noor Jahan Badshahbegum*.
   - Famous anthology poems: *"Himmat da Geet"*, *"Kisan di Kirt"*, *"Tu Dhaudi Bahe Ke Naal"*, *"Mela Visakhi da"* (*Turi tanda vech ke khurli te aande baal ve*).
3. **Prof. Puran Singh (1881–1931 CE):**
   - Mystic romantic, chemist, and disciple of Swami Rama Tirtha and Bhai Vir Singh; **Father of Free Verse (Khula Chhand / ਛੰਦ-ਮੁਕਤ ਕਵਿਤਾ)** in Punjabi.
   - Celebrated the rustic, untamed, generous spirit of the Punjabi peasantry (*Albelpan*).
   - Poetry collections: **Khule Maidan** (1923), **Khule Ghund** (1923), **Khule Asmani Rang** (1927); celebrated poem *"Punjab de Jawan"* (*Eh be-parwah Punjab de jawan maut nu makhaul karde han*).
4. **Dr. Diwan Singh Kalepani (1897–1944 CE):**
   - Medical doctor and progressive humanist poet; stationed in the Andaman & Nicobar Islands (Cellular Jail / Kalepani); tortured and martyred by the Japanese army in 1944 during WWII.
   - Poetry collection: **Wagde Pani** (1938; *ਵਗਦੇ ਪਾਣੀ*) and *Antim Leelan*; famous philosophical lines: *"Wagde pani nirmal hunde, khalonde bussan lagde han"* (Flowing waters remain pure; stagnant pools begin to rot).
5. **Amrita Pritam (1919–2005 CE):**
   - The foremost female voice of modern Punjabi literature; began as a romantic-progressive and evolved into an introspective feminist philosopher.
   - Immortal partition lament: **"Ajj Aakhan Waris Shah Nu"** (1947; *ਅੱਜ ਆਖਾਂ ਵਾਰਿਸ ਸ਼ਾਹ ਨੂੰ ਕਿਤੋਂ ਕਬਰਾਂ ਵਿਚੋਂ ਬੋਲ*).
   - Poetry collections: *Thandian Kirnan* (1935), *Lok Peed* (1944), *Patthar Geete* (1946), *Lamian Vatan* (1949), *Sunehure* (1955 — **Sahitya Akademi Award 1956**, first woman winner), *Kasturi* (1957), *Nagmani* (literary journal launched in 1966).
   - **Bharatiya Jnanpith Award (1981)** for her masterpiece **Kagaz te Canvas** (*ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ*); Padma Vibhushan (2004).
6. **Prof. Mohan Singh (1905–1978 CE):**
   - Apex of the **Progressive Romantic (ਪ੍ਰਗਤੀਵਾਦੀ-ਰੋਮਾਂਟਿਕ)** movement in Punjabi poetry; founder of the iconic literary journal *Panj Darya* (1939).
   - Poetry collections: **Save Pattar** (1936; *ਸਾਵੇ ਪੱਤਰ*), *Kasumbhra* (1937), *Adhvatte* (1944), *Kach Sach* (1950), *Awazan* (1954), **Wadda Vela** (1958 — **Sahitya Akademi Award 1959**), *Jandre* (1964), *Buhe* (1977).
   - Famous poems: *"Taj Mahal"* (Marxist critique of royal exploitation behind aesthetic monuments), *"Kuri Pothohar Di"*, *"Ambi de Boote Thalle"*.
7. **Bawa Balwant (1915–1972 CE):**
   - Progressive socialist, intellectual, and revolutionary poet; rooted in classical Persian learning and Marxist dialectics.
   - Poetry collections: **Mahanach** (1941; *ਮਹਾਂਨਾਚ*), *Amar Geet* (1942), *Jwalamukhi* (1943), *Bandergah* (1951), **Sugandh Samir** (1970 — **Sahitya Akademi Award**).
   - Celebrated for his ideological rigor and fiery verses on the emancipation of labor (*"Bagi"*, *"Utho Kirtiyo"*).
8. **Shiv Kumar Batalvi (1936–1973 CE):**
   - **Birha da Sultan** (*ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ* — Monarch of Melancholic Separation); unmatched lyrical melodiousness, romantic agony, and folk symbolism.
   - Native of Bara Pind Lohtian (Sialkot), settled in Batala (Gurdaspur).
   - Poetry collections: *Peeran da Paraga* (1960), *Lajwanti* (1961), *Aate diyan Chiriyaan* (1962), *Mainu Vida Karo* (1963), *Birha Tu Sultan* (1964), *Alvida* (1974), *Main te Main*.
   - Verse Drama (Kav-Natak): **Loona** (1965; *ਲੂਣਾ*) — reinterpreted the Puran Bhagat legend from the feminist perspective of young step-mother Loona; won the **Sahitya Akademi Award in 1967 at age 31 (youngest recipient ever in Punjabi)**.
9. **Surjit Patar (1945–2024 CE):**
   - Supreme master of the modern Punjabi **Ghazal** and lyrical metaphor; transformed Punjabi poetic sensibility by articulating rural nostalgia, urban alienation, and linguistic loss.
   - Poetry collections: **Hawa Vich Likhe Harf** (1979), **Birkh Arz Kare** (1992), **Hanere Vich Sulagdi Varnmala** (1992 — **Sahitya Akademi Award 1993**), **Lafzan di Dargah** (2003 — **Saraswati Samman**), *Patjhar di Pazeb*.
   - Famous poems: *"Kujh Keha Tan Hanera Jarega Kiven"*, *"Lagi Nazar Punjab Nu"*, *"Aya Nand Kishore"*; Padma Shri (2012).
10. **Avtar Singh Sandhu 'Paash' (1950–1988 CE):**
    - The towering voice of the radical **Naxalite / Jujharvadi (ਜੁਝਾਰਵਾਦੀ ਕਾਵਿ)** movement in Punjabi literature; born in village Talwandi Salem (Jalandhar); assassinated by extremists in 1988.
    - Poetry collections: **Loh-Katha** (1970; *ਲੋਹ-ਕਥਾ*), **Uddne Bajan Magar** (1974; *ਉੱਡਦੇ ਬਾਜ਼ਾਂ ਮਗਰ*), **Sade Samian Vich** (1978; *ਸਾਡੇ ਸਮਿਆਂ ਵਿਚ*), *Khilre Hoye Varke* (posthumous, 1989).
    - Immortal political poems: **"Sab Ton Khatarnak Hunda Hai"** (*ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ ਹੁੰਦਾ ਹੈ ਮੁਰਦਾ ਸ਼ਾਂਤੀ ਨਾਲ ਭਰ ਜਾਣਾ*), *"Ghas"* (Grass: *Main ghas han, main tuhade har keete-karae te ug awanga*), *"Bharat"*.

---

### [Level A: Advanced — Major Awards & Literary Movements Matrix]
| Poet | Sahitya Akademi Award | Major Other Awards / Titles | Poetic Ideology / Trend |
|---|---|---|---|
| **Bhai Vir Singh** | **1955** (*Mere Saiyan Jio*) | Padma Bhushan (1956) | Mystic, Spiritual, Singh Sabha Revivalism |
| **Amrita Pritam** | **1956** (*Sunehure*) | **Bharatiya Jnanpith 1981** (*Kagaz te Canvas*), Padma Vibhushan | Romantic-Progressive, Partition, Feminism |
| **Mohan Singh** | **1959** (*Wadda Vela*) | Soviet Land Nehru Award | Progressive-Romantic (*ਪ੍ਰਗਤੀਵਾਦੀ*) |
| **Shiv Kumar Batalvi** | **1967** (*Loona*) | Youngest recipient (Age 31) | Neo-Romantic, Melancholia (*ਬਿਰਹਾ*) |
| **Surjit Patar** | **1993** (*Hanere Vich Sulagdi Varnmala*) | **Saraswati Samman 2003**, Padma Shri (2012) | Modern Ghazal, Existential Lyrical |
| **Paash** | — | Supreme icon of Jujharvadi movement | Marxist-Leninist, Revolutionary Realism |`,

            pa: `### [Level B: Basic — ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਕਵਿਤਾ ਦਾ ਆਗਮਨ]
1. **ਆਧੁਨਿਕਤਾ ਦਾ ਆਰੰਭ:**
   - 19ਵੀਂ ਸਦੀ ਦੇ ਅੰਤ ਵਿੱਚ ਅੰਗਰੇਜ਼ੀ ਰਾਜ, ਪ੍ਰਿੰਟਿੰਗ ਪ੍ਰੈੱਸ, ਸਿੰਘ ਸਭਾ ਲਹਿਰ ਅਤੇ ਪੱਛਮੀ ਸਾਹਿਤਕ ਰੂਪਾਂ ਦੇ ਪ੍ਰਭਾਵ ਹੇਠ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਕਵਿਤਾ ਦਾ ਜਨਮ ਹੋਇਆ। ਇਸ ਨੇ ਮੱਧਕਾਲੀ ਧਾਰਮਿਕ-ਕਿੱਸਾਕਾਰੀ ਚੌਖਟੇ ਨੂੰ ਤੋੜ ਕੇ ਮਨੁੱਖੀ ਆਜ਼ਾਦੀ, ਕੁਦਰਤ, ਰਾਸ਼ਟਰੀਅਤਾ ਅਤੇ ਬੌਧਿਕ ਚੇਤਨਾ ਨੂੰ ਅਪਣਾਇਆ।

---

### [Level I: Intermediate — 10 ਪ੍ਰਮੁੱਖ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਕਵੀ]
1. **ਭਾਈ ਵੀਰ ਸਿੰਘ (1872–1957):**
   - **ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ**; ਰਹੱਸਵਾਦੀ-ਰੋਮਾਂਚਿਕ ਕਵੀ; ਖ਼ਾਲਸਾ ਸਮਾਚਾਰ (1899) ਅਤੇ ਵਜ਼ੀਰ ਹਿੰਦ ਪ੍ਰੈੱਸ ਦੇ ਸੰਸਥਾਪਕ।
   - ਮਹਾਂਕਾਵਿ: **ਰਾਣਾ ਸੂਰਤ ਸਿੰਘ** (1905 — ਸਿਰਖੰਡੀ ਛੰਦ/ਤੁਕਾਂਤ-ਮੁਕਤ ਕਵਿਤਾ)।
   - ਕਾਵਿ ਸੰਗ੍ਰਹਿ: *ਮਟਕ ਹੁਲਾਰੇ* (1922 — ਕਸ਼ਮੀਰ ਦੀ ਸੁੰਦਰਤਾ), *ਬਿਜਲੀਆਂ ਦੇ ਹਾਰ* (1927), *ਲਹਿਰਾਂ ਦੇ ਹਾਰ*, *ਪ੍ਰੀਤ ਵੀਣਾ*, *ਕੰਬਦੀ ਕਲਾਈ*।
   - **ਪਹਿਲਾ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ (1955)** ਕਾਵਿ ਸੰਗ੍ਰਹਿ **'ਮੇਰੇ ਸਾਈਆਂ ਜੀਓ'** ਲਈ ਮਿਲਿਆ; ਪਦਮ ਭੂਸ਼ਣ (1956)।
2. **ਲਾਲਾ ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ (1876–1954):**
   - ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ, ਕਿਸਾਨੀ ਜੀਵਨ ਅਤੇ ਧਰਮ-ਨਿਰਪੱਖ ਕੌਮੀਅਤ ਦੇ ਮੋਢੀ ਕਵੀ; ਸੁਦਰਸ਼ਨ ਪ੍ਰੈੱਸ ਰਾਹੀਂ ਗੁਰਮੁਖੀ ਟਾਈਪ ਦਾ ਮਿਆਰੀਕਰਨ ਕੀਤਾ।
   - ਰਚਨਾਵਾਂ: *ਚੰਦਨਵਾੜੀ* (1931), *ਕੇਸਰ ਕਿਆਰੀ* (1940), *ਨਵਾਂ ਜਹਾਨ* (1942), *ਸੂਫ਼ੀਖ਼ਾਨਾ* (1950)।
   - ਮਸ਼ਹੂਰ ਕਵਿਤਾਵਾਂ: *"ਹਿੰਮਤ ਦਾ ਗੀਤ"*, *"ਕਿਸਾਨ ਦੀ ਕਿਰਤ"*, *"ਤੂੜੀ ਤੰਦ ਸਾਂਭ ਹਾੜੀ ਵੇਚ ਵੱਟ ਕੇ (ਵਿਸਾਖੀ ਦਾ ਮੇਲਾ)"*।
3. **ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ (1881–1931):**
   - **ਖੁੱਲ੍ਹੀ ਕਵਿਤਾ (ਛੰਦ-ਮੁਕਤ ਕਵਿਤਾ) ਦੇ ਮੋਢੀ**; ਸਵਾਮੀ ਰਾਮਤੀਰਥ ਅਤੇ ਭਾਈ ਵੀਰ ਸਿੰਘ ਦੇ ਸ਼ਿਸ਼; ਪੰਜਾਬੀ ਬੰਦੇ ਦੇ ਅਲਬੇਲੇ ਤੇ ਖੁੱਲ੍ਹੇ ਸੁਭਾਅ ਦੇ ਗਾਇਕ।
   - ਕਾਵਿ ਪੁਸਤਕਾਂ: **ਖੁੱਲ੍ਹੇ ਮੈਦਾਨ** (1923), **ਖੁੱਲ੍ਹੇ ਘੁੰਡ** (1923), **ਖੁੱਲ੍ਹੇ ਅਸਮਾਨੀ ਰੰਗ** (1927); ਪ੍ਰਸਿੱਧ ਕਵਿਤਾ: *"ਜਵਾਨ ਪੰਜਾਬ ਦੇ" ("ਇਹ ਬੇਪਰਵਾਹ ਜਵਾਨ ਪੰਜਾਬ ਦੇ ਮੌਤ ਨੂੰ ਮਖੌਲਾਂ ਕਰਦੇ")*।
4. **ਡਾ. ਦੀਵਾਨ ਸਿੰਘ ਕਾਲੇਪਾਣੀ (1897–1944):**
   - ਡਾਕਟਰ ਅਤੇ ਮਾਨਵਵਾਦੀ ਪ੍ਰਗਤੀਸ਼ੀਲ ਕਵੀ; ਅੰਡੇਮਾਨ (ਕਾਲੇਪਾਣੀ) ਵਿੱਚ ਤਾਇਨਾਤ; 1944 ਵਿੱਚ ਦੂਜੇ ਵਿਸ਼ਵ ਯੁੱਧ ਦੌਰਾਨ ਜਾਪਾਨੀਆਂ ਦੇ ਅਣਮਨੁੱਖੀ ਤਸੀਹੇ ਝੱਲਦੇ ਹੋਏ ਸ਼ਹੀਦ ਹੋਏ।
   - ਕਾਵਿ ਸੰਗ੍ਰਹਿ: **ਵਗਦੇ ਪਾਣੀ** (1938); ਅਮਰ ਸਤਰਾਂ: *"ਵਗਦੇ ਪਾਣੀ ਨਿਰਮਲ ਹੁੰਦੇ, ਖਲੋਂਦੇ ਬੁੱਸਣ ਲੱਗਦੇ ਹਨ"*; *ਅੰਤਿਮ ਲੀਲਾਂ*।
5. **ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ (1919–2005):**
   - ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਦੀ ਸਿਰਮੌਰ ਕਵਿੱਤਰੀ ਅਤੇ ਨਾਵਲਕਾਰ; ਪੰਜਾਬ ਦੀ ਵੰਡ ਦਾ ਦਰਦ ਬਿਆਨ ਕਰਦੀ ਸ਼ਾਹਕਾਰ ਕਵਿਤਾ: **"ਅੱਜ ਆਖਾਂ ਵਾਰਿਸ ਸ਼ਾਹ ਨੂੰ ਕਿਤੋਂ ਕਬਰਾਂ ਵਿਚੋਂ ਬੋਲ"** (1947)।
   - ਕਾਵਿ ਸੰਗ੍ਰਹਿ: *ਲੋਕ ਪੀੜ* (1944), *ਪੱਥਰ ਗੀਟੇ* (1946), *ਸੁਨੇਹੜੇ* (**ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1956 — ਪਹਿਲੀ ਮਹਿਲਾ ਵਿਜੇਤਾ**), *ਕਸਤੂਰੀ*।
   - **ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ (1981)** ਕਾਵਿ ਪੁਸਤਕ **'ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ'** ਲਈ ਪ੍ਰਾਪਤ ਹੋਇਆ; ਪਦਮ ਵਿਭੂਸ਼ਣ (2004)।
6. **ਪ੍ਰੋ. ਮੋਹਨ ਸਿੰਘ (1905–1978):**
   - ਪ੍ਰਗਤੀਵਾਦੀ-ਰੋਮਾਂਟਿਕ ਕਾਵਿ ਧਾਰਾ ਦੇ ਸਿਰਮੌਰ ਕਵੀ; 'ਪੰਜ ਦਰਿਆ' ਰਸਾਲੇ ਦੇ ਸੰਪਾਦਕ।
   - ਕਾਵਿ ਸੰਗ੍ਰਹਿ: **ਸਾਵੇ ਪੱਤਰ** (1936), *ਕਸੁੰਭੜਾ* (1937), *ਅਧਵਾਟੇ* (1944), **ਵੱਡਾ ਵੇਲਾ** (**ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1959**), *ਜੰਦਰੇ*, *ਬੂਹੇ*।
   - ਮਸ਼ਹੂਰ ਕਵਿਤਾ: *"ਤਾਜ ਮਹਿਲ"* (ਮਜ਼ਦੂਰਾਂ ਦੇ ਸ਼ੋਸ਼ਣ ਦਾ ਪਰਦਾਫ਼ਾਸ਼), *"ਕੁੜੀ ਪੋਠੋਹਾਰ ਦੀ"*, *"ਅੰਬੀ ਦੇ ਬੂਟੇ ਥੱਲੇ"*।
7. **ਬਾਵਾ ਬਲਵੰਤ (1915–1972):**
   - ਮਾਰਕਸਵਾਦੀ ਵਿਚਾਰਧਾਰਾ ਅਤੇ ਬੌਧਿਕ ਪ੍ਰਗਤੀਵਾਦ ਦੇ ਗੰਭੀਰ ਕਵੀ।
   - ਕਾਵਿ ਸੰਗ੍ਰਹਿ: **ਮਹਾਂਨਾਚ** (1941), *ਅਮਰ ਗੀਤ* (1942), *ਜਵਾਲਾਮੁਖੀ* (1943), *ਬੰਦਰਗਾਹ* (1951), **ਸੁਗੰਧ ਸਮੀਰ** (**ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1970**)।
8. **ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ (1936–1973):**
   - **ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ**; ਗੀਤਾਂ ਦਾ ਬਾਦਸ਼ਾਹ; ਵਿਛੋੜੇ ਅਤੇ ਮੌਤ ਦੇ ਰਹੱਸਵਾਦ ਦਾ ਬੇਮਿਸਾਲ ਗਾਇਕ।
   - ਕਾਵਿ ਸੰਗ੍ਰਹਿ: *ਪੀੜਾਂ ਦਾ ਪਰਾਗਾ* (1960), *ਲਾਜਵੰਤੀ* (1961), *ਆਟੇ ਦੀਆਂ ਚਿੜੀਆਂ* (1962), *ਮੈਨੂੰ ਵਿਦਾ ਕਰੋ*, *ਬਿਰਹਾ ਤੂੰ ਸੁਲਤਾਨ*, *ਅਲਵਿਦਾ*।
   - ਕਾਵਿ-ਨਾਟਕ: **ਲੂਣਾ** (1965) ਲਈ **1967 ਵਿੱਚ 31 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ** ਮਿਲਿਆ (ਸਭ ਤੋਂ ਛੋਟੀ ਉਮਰ ਵਿੱਚ ਇਹ ਪੁਰਸਕਾਰ ਜਿੱਤਣ ਵਾਲੇ ਕਵੀ)।
9. **ਸੁਰਜੀਤ ਪਾਤਰ (1945–2024):**
   - ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਗ਼ਜ਼ਲ ਦੇ ਸਿਰਮੌਰ ਸ਼ਾਇਰ; ਸ਼ਹਿਰੀਕਰਨ, ਪੰਜਾਬ ਸੰਕਟ ਅਤੇ ਮਾਂ-ਬੋਲੀ ਦੇ ਸਰੋਕਾਰਾਂ ਦੇ ਗਾਇਕ।
   - ਕਾਵਿ ਸੰਗ੍ਰਹਿ: **ਹਵਾ ਵਿਚ ਲਿਖੇ ਹਰਫ਼** (1979), **ਬਿਰਖ ਅਰਜ਼ ਕਰੇ** (1992), **ਹਨੇਰੇ ਵਿਚ ਸੁਲਗਦੀ ਵਰਣਮਾਲਾ** (**ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1993**), **ਲਫ਼ਜ਼ਾਂ ਦੀ ਦਰਗਾਹ** (**ਸਰਸਵਤੀ ਸਨਮਾਨ 2003**); ਪਦਮ ਸ਼੍ਰੀ (2012)।
   - ਪ੍ਰਸਿੱਧ ਗ਼ਜ਼ਲ ਸਤਰਾਂ: *"ਕੁਝ ਕਿਹਾ ਤਾਂ ਹਨੇਰਾ ਜਰੇਗਾ ਕਿਵੇਂ, ਚੁੱਪ ਰਿਹਾ ਤਾਂ ਸ਼ਮ੍ਹਾਦਾਨ ਕੀ ਕਹਿਣਗੇ"*।
10. **ਅਵਤਾਰ ਸਿੰਘ ਸੰਧੂ 'ਪਾਸ਼' (1950–1988):**
    - ਨਕਸਲਬਾੜੀ/ਜੁਝਾਰਵਾਦੀ ਕਾਵਿ ਲਹਿਰ ਦੇ ਸਭ ਤੋਂ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਅਤੇ ਇਨਕਲਾਬੀ ਕਵੀ; ਪਿੰਡ ਤਲਵੰਡੀ ਸਲੇਮ (ਜਲੰਧਰ)।
    - ਕਾਵਿ ਸੰਗ੍ਰਹਿ: **ਲੋਹ-ਕਥਾ** (1970), **ਉੱਡਦੇ ਬਾਜ਼ਾਂ ਮਗਰ** (1974), **ਸਾਡੇ ਸਮਿਆਂ ਵਿਚ** (1978), *ਖਿਲਰੇ ਹੋਏ ਵਰਕੇ* (1989)।
    - ਅਮਰ ਕਵਿਤਾ: **"ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ ਹੁੰਦਾ ਹੈ"** (*"ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ ਹੁੰਦਾ ਹੈ ਮੁਰਦਾ ਸ਼ਾਂਤੀ ਨਾਲ ਭਰ ਜਾਣਾ, ਨਾ ਹੋਣਾ ਤੜਪ ਦਾ ਸਭ ਸਹਿ ਜਾਣਾ"*), *"ਘਾਹ"*।`,

            hi: `### [Level B: Basic — आधुनिक पंजाबी कविता का उद्भव]
1. **आधुनिकता का प्रवेश:**
   - 19वीं सदी के उत्तरार्ध में औपनिवेशिक प्रभाव, सिंह सभा आंदोलन और मुद्रण क्रांति के साथ आधुनिक पंजाबी कविता का जन्म हुआ। इसने मध्यकालीन संकीर्णता त्यागकर व्यक्ति-स्वातंत्र्य, राष्ट्रप्रेम, प्रकृति तथा सामाजिक यथार्थ को अपनाया।

---

### [Level I: Intermediate — 10 प्रमुख आधुनिक पंजाबी कवि]
1. **भाई वीर सिंह (1872–1957):**
   - **आधुनिक पंजाबी साहित्य के जनक**; रहस्यवादी-आध्यात्मिक कवि; महाकाव्य **राणा सूरत सिंह** (1905); संग्रह: *मटक हुलारे*, *बिजलियां दे हार*; **प्रथम साहित्य अकादमी पुरस्कार (1955)** *'मेरे साईयां जीओ'* के लिए।
2. **धनी राम चात्रिक (1876–1954):**
   - पंजाबी संस्कृति व किसान जीवन के प्रथम राष्ट्रीय कवि; सुदर्शन प्रेस के संस्थापक; संग्रह: *चंदनवाड़ी*, *केसर क्यारी*, *सूफ़ीख़ाना*; प्रसिद्ध कविता: *"किसाण दी किरत"*, *"मेला विसाखी दा"*।
3. **प्रो. पूरन सिंह (1881–1931):**
   - **मुक्त छंद (Free Verse) के प्रवर्तक**; संग्रह: **खुल्हे मैदान** (1923), **खुल्हे घुंड**, **खुल्हे असमानी रंग**; अल्हड़ पंजाबी स्वभाव के गायक।
4. **डॉ. दीवान सिंह कालेपानी (1897–1944):**
   - अंडमान में जापानी यातनाओं से शहीद देशभक्त चिकित्सक; संग्रह: **वगदे पाणी** (1938; *"वगदे पाणी निर्मल हुंदे, खलोंदे बुस्सण लग्गदे हन"*).
5. **अमृता प्रीतम (1919–2005):**
   - विभाजन की विभीषिका पर अमर रचना: **"अज्ज आखां वारिस शाह नूं"**; संग्रह: *सुनेहड़े* (**साहित्य अकादमी 1956**); **ज्ञानपीठ पुरस्कार (1981)** *'काग़ज़ ते कैनवस'* के लिए।
6. **प्रो. मोहन सिंह (1905–1978):**
   - प्रगतिवादी-रोमांटिक धारा के प्रमुख; संग्रह: **सावे पत्तर** (1936), **वड्डा वेला** (**साहित्य अकादमी 1959**); कविताएँ: *"ताज महल"*, *"कुड़ी पोठोहार दी"*।
7. **बावा बलवंत (1915–1972):**
   - बौद्धिक मार्क्सवादी कवि; संग्रह: **महानाच** (1941), **सुगंध समीर** (**साहित्य अकादमी 1970**)।
8. **शिव कुमार बटालवी (1936–1973):**
   - **बिरहा दा सुल्तान**; गीतकारिता के सम्राट; काव्य-नाटक **लूणा** (1965) हेतु मात्र 31 वर्ष की आयु में **साहित्य अकादमी पुरस्कार (1967)** प्राप्त किया।
9. **सुरजीत पातर (1945–2024):**
   - आधुनिक पंजाबी ग़ज़ल सम्राट; संग्रह: **हवा विच लिखे हरफ़**, **हनेरे विच सुलगदी वर्णमाला** (**साहित्य अकादमी 1993**), **लफ़्ज़ों दी दरगाह** (**सरस्वती सम्मान 2003**); पद्मश्री।
10. **पाश (अवतार सिंह संधू, 1950–1988):**
    - नक्सलवादी/जुझारवादी काव्य के अमर हस्ताक्षर; संग्रह: **लोह-कथा** (1970), **उड्डदे बाज़ां मगर** (1974), **साडे समियां विच** (1978); अमर कविता: **"सब तों ख़तरनाक हुंदा है"**।`
        },
        keyNotes: {
            en: [
                'Bhai Vir Singh is the Father of Modern Punjabi Literature; won the first Sahitya Akademi in Punjabi (1955) for "Mere Saiyan Jio".',
                'Prof. Puran Singh pioneered Free Verse (Khula Chhand) in Punjabi with "Khule Maidan" (1923).',
                'Dhani Ram Chatrik championed Punjabi rural culture and typography; authored "Chandanwari" and "Kesar Kyari".',
                'Diwan Singh Kalepani authored "Wagde Pani" (1938) and was martyred in the Andaman Islands in 1944.',
                'Amrita Pritam wrote "Ajj Aakhan Waris Shah Nu", won Sahitya Akademi (1956) for "Sunehure" and Bharatiya Jnanpith (1981) for "Kagaz te Canvas".',
                'Prof. Mohan Singh represents the zenith of Progressive Romanticism with collections like "Save Pattar" and "Wadda Vela" (Sahitya Akademi 1959).',
                'Bawa Balwant was a rigorous socialist poet who won the Sahitya Akademi Award for "Sugandh Samir" (1970).',
                'Shiv Kumar Batalvi is known as "Birha da Sultan"; won the Sahitya Akademi Award at age 31 in 1967 for his verse drama "Loona".',
                'Surjit Patar revived the Punjabi Ghazal; authored "Hawa Vich Likhe Harf" and won the Saraswati Samman for "Lafzan di Dargah".',
                'Paash was the foremost voice of the Jujharvadi movement; authored "Uddne Bajan Magar" and the iconic poem "Sab Ton Khatarnak Hunda Hai".'
            ],
            pa: [
                'ਭਾਈ ਵੀਰ ਸਿੰਘ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ ਹਨ; "ਮੇਰੇ ਸਾਈਆਂ ਜੀਓ" ਲਈ ਪਹਿਲਾ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ (1955) ਜਿੱਤਿਆ।',
                'ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ ਨੇ "ਖੁੱਲ੍ਹੇ ਮੈਦਾਨ" (1923) ਨਾਲ ਪੰਜਾਬੀ ਵਿੱਚ ਖੁੱਲ੍ਹੀ ਕਵਿਤਾ ਦੀ ਸ਼ੁਰੂਆਤ ਕੀਤੀ।',
                'ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ ਨੇ ਪੰਜਾਬੀ ਕਿਸਾਨੀ ਸੱਭਿਆਚਾਰ ਨੂੰ ਚਿਤਰਿਆ ਅਤੇ "ਚੰਦਨਵਾੜੀ" ਤੇ "ਕੇਸਰ ਕਿਆਰੀ" ਵਰਗੇ ਸੰਗ੍ਰਹਿ ਦਿੱਤੇ।',
                'ਦੀਵਾਨ ਸਿੰਘ ਕਾਲੇਪਾਣੀ ਨੇ "ਵਗਦੇ ਪਾਣੀ" (1938) ਰਚਿਆ ਅਤੇ 1944 ਵਿੱਚ ਅੰਡੇਮਾਨ ਵਿਖੇ ਸ਼ਹੀਦ ਹੋਏ।',
                'ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਨੇ "ਅੱਜ ਆਖਾਂ ਵਾਰਿਸ ਸ਼ਾਹ ਨੂੰ" ਲਿਖੀ, "ਸੁਨੇਹੜੇ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ (1956) ਅਤੇ "ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ" ਲਈ ਗਿਆਨਪੀਠ (1981) ਜਿੱਤਿਆ।',
                'ਪ੍ਰੋ. ਮੋਹਨ ਸਿੰਘ ਨੇ ਪ੍ਰਗਤੀਵਾਦੀ-ਰੋਮਾਂਟਿਕ ਕਵਿਤਾ ਵਿੱਚ "ਸਾਵੇ ਪੱਤਰ" ਅਤੇ "ਵੱਡਾ ਵੇਲਾ" (ਸਾਹਿਤ ਅਕਾਦਮੀ 1959) ਦੀ ਰਚਨਾ ਕੀਤੀ।',
                'ਬਾਵਾ ਬਲਵੰਤ ਮਾਰਕਸਵਾਦੀ ਕਵੀ ਸਨ ਜਿਨ੍ਹਾਂ ਨੇ "ਸੁਗੰਧ ਸਮੀਰ" (1970) ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਜਿੱਤਿਆ।',
                'ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ ਨੂੰ "ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ; 1967 ਵਿੱਚ ਕਾਵਿ-ਨਾਟਕ "ਲੂਣਾ" ਲਈ 31 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ।',
                'ਸੁਰਜੀਤ ਪਾਤਰ ਨੇ ਪੰਜਾਬੀ ਗ਼ਜ਼ਲ ਨੂੰ ਸਿਖਰ ਦਿੱਤਾ; "ਹਵਾ ਵਿਚ ਲਿਖੇ ਹਰਫ਼" ਅਤੇ "ਲਫ਼ਜ਼ਾਂ ਦੀ ਦਰਗਾਹ" (ਸਰਸਵਤੀ ਸਨਮਾਨ) ਰਚੇ।',
                'ਪਾਸ਼ ਜੁਝਾਰਵਾਦੀ ਕਾਵਿ ਧਾਰਾ ਦੇ ਸਿਰਮੌਰ ਕਵੀ ਸਨ ਜਿਨ੍ਹਾਂ ਨੇ "ਉੱਡਦੇ ਬਾਜ਼ਾਂ ਮਗਰ" ਅਤੇ "ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ ਹੁੰਦਾ ਹੈ" ਵਰਗੀਆਂ ਕਵਿਤਾਵਾਂ ਲਿਖੀਆਂ।'
            ],
            hi: [
                'भाई वीर सिंह आधुनिक पंजाबी साहित्य के जनक हैं; "मेरे साईयां जीओ" के लिए प्रथम साहित्य अकादमी (1955) जीता।',
                'प्रो. पूरन सिंह ने "खुल्हे मैदान" (1923) से पंजाबी में मुक्त छंद का प्रवर्तन किया।',
                'धनी राम चात्रिक ने पंजाबी ग्रामीण संस्कृति को अभिव्यक्ति दी; "चंदनवाड़ी" व "केसर क्यारी" की रचना की।',
                'दीवान सिंह कालेपानी ने "वगदे पाणी" (1938) रचा और 1944 में अंडमान में शहीद हुए।',
                'अमृता प्रीतम ने "अज्ज आखां वारिस शाह नूं" लिखी, "सुनेहड़े" हेतु साहित्य अकादमी (1956) और "काग़ज़ ते कैनवस" हेतु ज्ञानपीठ (1981) जीता।',
                'प्रो. मोहन सिंह प्रगतिवादी धारा के शिखर कवि हैं ("सावे पत्तर" व "वड्डा वेला" - साहित्य अकादमी 1959)।',
                'बावा बलवंत मार्क्सवादी कवि थे जिन्हें "सुगंध समीर" (1970) के लिए साहित्य अकादमी पुरस्कार मिला।',
                'शिव कुमार बटालवी "बिरहा दा सुल्तान" कहलाते हैं; मात्र 31 वर्ष की आयु में "लूणा" (1967) के लिए साहित्य अकादमी जीता।',
                'सुरजीत पातर पंजाबी ग़ज़ल सम्राट हैं; "हवा विच लिखे हरफ़" रची और "लफ़्ज़ों दी दरगाह" पर सरस्वती सम्मान प्राप्त किया।',
                'पाश जुझारवादी आंदोलन के प्रमुख कवि थे; "उड्डदे बाज़ां मगर" और "सब तों ख़तरनाक हुंदा है" जैसी कृतियां रचीं।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Father Titles: Father of Modern Punjabi Lit = Bhai Vir Singh | Father of Free Verse = Prof. Puran Singh | Birha da Sultan = Shiv Kumar Batalvi.',
                'Jnanpith in Punjabi: Amrita Pritam (1981 for Kagaz te Canvas) & Gurdial Singh (1999 for Fiction). Only two recipients in history.',
                'First Sahitya Akademi in Punjabi: Bhai Vir Singh (1955 for Mere Saiyan Jio); First Woman: Amrita Pritam (1956 for Sunehure); Youngest: Shiv Kumar Batalvi (1967 for Loona, age 31).'
            ],
            pa: [
                'ਪਿਤਾਮਾ ਖ਼ਿਤਾਬ: ਆਧੁਨਿਕ ਸਾਹਿਤ ਦੇ ਪਿਤਾਮਾ = ਭਾਈ ਵੀਰ ਸਿੰਘ | ਖੁੱਲ੍ਹੀ ਕਵਿਤਾ ਦੇ ਪਿਤਾਮਾ = ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ | ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ = ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ।',
                'ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ: ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ (1981 ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ) ਅਤੇ ਗੁਰਦਿਆਲ ਸਿੰਘ (1999 ਨਾਵਲ)। ਪੰਜਾਬੀ ਦੇ ਸਿਰਫ਼ ਦੋ ਜੇਤੂ।',
                'ਪਹਿਲਾ ਸਾਹਿਤ ਅਕਾਦਮੀ: ਭਾਈ ਵੀਰ ਸਿੰਘ (1955 ਮੇਰੇ ਸਾਈਆਂ ਜੀਓ); ਪਹਿਲੀ ਮਹਿਲਾ: ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ (1956 ਸੁਨੇਹੜੇ); ਸਭ ਤੋਂ ਛੋਟੀ ਉਮਰ: ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ (1967 ਲੂਣਾ, ਉਮਰ 31 ਸਾਲ)।'
            ],
            hi: [
                'उपाधियाँ: आधुनिक साहित्य के जनक = भाई वीर सिंह | मुक्त छंद के जनक = प्रो. पूरन सिंह | बिरहा दा सुल्तान = शिव कुमार बटालवी।',
                'ज्ञानपीठ विजेता: अमृता प्रीतम (1981 काग़ज़ ते कैनवस) और गुरदयाल सिंह (1999 उपन्यास)। इतिहास में केवल दो विजेता।',
                'प्रथम साहित्य अकादमी: भाई वीर सिंह (1955); प्रथम महिला: अमृता प्रीतम (1956); सबसे युवा: शिव कुमार बटालवी (1967, उम्र 31 वर्ष)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Amrita Pritam won the Jnanpith Award for her novel Pinjar. Correction: Amrita Pritam won the Bharatiya Jnanpith Award in 1981 for her poetry collection "Kagaz te Canvas".',
                'Misconception: Shiv Kumar Batalvi’s Loona is a traditional retelling that condemns Loona as an evil woman. Correction: Shiv Kumar Batalvi radically rehabilitated Loona as a victim of feudal patriarchal mismatch who had the moral right to desire youth.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਨੂੰ ਉਹਨਾਂ ਦੇ ਨਾਵਲ \'ਪਿੰਜਰ\' ਲਈ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ। ਸੁਧਾਰ: ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਨੂੰ 1981 ਵਿੱਚ ਉਹਨਾਂ ਦੇ ਕਾਵਿ ਸੰਗ੍ਰਹਿ "ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ" ਲਈ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ।',
                'ਭੁਲੇਖਾ: ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ ਦੀ \'ਲੂਣਾ\' ਰਵਾਇਤੀ ਕਥਾ ਵਾਂਗ ਲੂਣਾ ਨੂੰ ਦੋਸ਼ੀ ਔਰਤ ਮੰਨਦੀ ਹੈ। ਸੁਧਾਰ: ਸ਼ਿਵ ਕੁਮਾਰ ਨੇ ਲੂਣਾ ਨੂੰ ਜਾਗੀਰਦਾਰੀ ਬੇਜੋੜ ਵਿਆਹ ਦੀ ਸ਼ਿਕਾਰ ਅਤੇ ਆਪਣੀ ਜਵਾਨੀ ਦੀ ਤਾਂਘ ਰੱਖਣ ਵਾਲੀ ਨਾਇਕਾ ਵਜੋਂ ਪੇਸ਼ ਕੀਤਾ।'
            ],
            hi: [
                'भ्रांति: अमृता प्रीतम को उनके उपन्यास पिंजर के लिए ज्ञानपीठ मिला था। सुधार: अमृता प्रीतम को 1981 में उनके काव्य संग्रह "काग़ज़ ते कैनवस" हेतु ज्ञानपीठ पुरस्कार मिला था।',
                'भ्रांति: शिव कुमार बटालवी की लूणा पारंपरिक कथा की तरह लूणा को कुलटा मानती है। सुधार: बटालवी ने लूणा का नारीवादी पुनर्पाठ किया और उसे सामंती बेमेल विवाह की पीड़ित नायिका सिद्ध किया।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Analyze the literary significance and ideological perspective of Prof. Mohan Singh’s poem "Taj Mahal" from his collection Save Pattar/Adhvatte.',
                    pa: 'ਪ੍ਰੋ. ਮੋਹਨ ਸਿੰਘ ਦੀ ਕਵਿਤਾ "ਤਾਜ ਮਹਿਲ" ਦੇ ਸਾਹਿਤਕ ਮਹੱਤਵ ਅਤੇ ਵਿਚਾਰਧਾਰਕ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ।',
                    hi: 'प्रो. मोहन सिंह की कविता "ताज महल" के साहित्यिक महत्त्व और वैचारिक दृष्टिकोण का विश्लेषण करें।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Identify movement — The poem is the hallmark of the Progressive (Pragativadi / Marxist) movement in Punjabi literature.',
                        'Step 2: Dual structural movement — The poem begins with traditional romantic awe at the moonlit marble beauty of the Taj Mahal, but abruptly pivots to reveal the underlying class exploitation.',
                        'Step 3: Core ideological insight — It exposes the forced labor and misery of thousands of starving laborers whose blood was crystallized to erect a monument for one emperor’s dead queen: "Haye par husan phulan da kide khande han...".'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਧਾਰਾ ਦੀ ਪਛਾਣ — ਇਹ ਕਵਿਤਾ ਪੰਜਾਬੀ ਪ੍ਰਗਤੀਵਾਦੀ (ਮਾਰਕਸਵਾਦੀ) ਕਾਵਿ ਧਾਰਾ ਦਾ ਪ੍ਰਤੀਨਿਧ ਨਮੂਨਾ ਹੈ।',
                        'ਕਦਮ 2: ਕਵਿਤਾ ਦੀ ਬਣਤਰ — ਕਵਿਤਾ ਦਾ ਪਹਿਲਾ ਭਾਗ ਚਾਨਣੀ ਰਾਤ ਵਿੱਚ ਤਾਜ ਮਹਿਲ ਦੇ ਰੁਮਾਂਟਿਕ ਹੁਸਨ ਦੀ ਤਾਰੀਫ਼ ਕਰਦਾ ਹੈ, ਪਰ ਦੂਜਾ ਭਾਗ ਅਚਾਨਕ ਇਸ ਸੁੰਦਰਤਾ ਦੇ ਪਿੱਛੇ ਛੁਪੇ ਜਮਾਤੀ ਸ਼ੋਸ਼ਣ ਦਾ ਪਰਦਾਫ਼ਾਸ਼ ਕਰਦਾ ਹੈ।',
                        'ਕਦਮ 3: ਕੇਂਦਰੀ ਵਿਚਾਰ — ਕਵੀ ਸ਼ਾਹਜਹਾਂ ਦੀ ਐਸ਼ਪ੍ਰਸਤੀ ਦੀ ਬਜਾਏ ਹਜ਼ਾਰਾਂ ਭੁੱਖੇ ਮਜ਼ਦੂਰਾਂ ਦੇ ਵਗਾਏ ਹੰਝੂਆਂ ਅਤੇ ਖ਼ੂਨ ਨੂੰ ਉਭਾਰਦਾ ਹੈ: "ਹਾਏ ਪਰ ਹੁਸਨ ਫੁੱਲਾਂ ਦਾ ਕੀੜੇ ਖਾਂਦੇ ਹਨ..."।'
                    ],
                    hi: [
                        'चरण 1: काव्य धारा — यह प्रगतिवादी (मार्क्सवादी) पंजाबी काव्य की प्रतिनिधि रचना है।',
                        'चरण 2: संरचना — कविता का पूर्वार्ध ताज महल के चांदनी में नहाए सौंदर्य का वर्णन करता है, किंतु उत्तरार्ध उसके पीछे छिपे श्रम-शोषण को उजागर करता है।',
                        'चरण 3: मूल संदेश — एक शहंशाह के प्रेम के नाम पर हज़ारों मज़दूरों के शोषण और पीड़ा पर प्रश्नचिह्न खड़ा किया गया है।'
                    ]
                },
                finalAnswer: {
                    en: 'It is a progressive-Marxist deconstruction of aesthetic grandeur, contrasting imperial luxury with the suffering and exploited labor of the proletariat.',
                    pa: 'ਇਹ ਇੱਕ ਪ੍ਰਗਤੀਵਾਦੀ ਸ਼ਾਹਕਾਰ ਹੈ ਜੋ ਬਾਦਸ਼ਾਹੀ ਐਸ਼ੋ-ਇਸ਼ਰਤ ਦੇ ਮੁਕਾਬਲੇ ਮਜ਼ਦੂਰ ਜਮਾਤ ਦੇ ਖ਼ੂਨ-ਪਸੀਨੇ ਅਤੇ ਸ਼ੋਸ਼ਣ ਦਾ ਪਰਦਾਫ਼ਾਸ਼ ਕਰਦੀ ਹੈ।',
                    hi: 'यह प्रगतिवादी-मार्क्सवादी रचना है जो सामंती सौंदर्य के विरुद्ध मज़दूर वर्ग के शोषण और आर्तनाद को स्वर देती है।'
                }
            },
            {
                problem: {
                    en: 'Examine why Paash’s poem "Sab Ton Khatarnak" holds canonical status in modern Punjabi protest literature.',
                    pa: 'ਪਾਸ਼ ਦੀ ਕਵਿਤਾ "ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ" ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਵਿਦਰੋਹੀ ਕਵਿਤਾ ਵਿੱਚ ਇੰਨਾ ਮਹੱਤਵਪੂਰਨ ਸਥਾਨ ਕਿਉਂ ਰੱਖਦੀ ਹੈ?',
                    hi: 'पाश की कविता "सब तों ख़तरनाक" आधुनिक पंजाबी विद्रोही कविता में इतना महत्वपूर्ण स्थान क्यों रखती है?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Ideological context — Paash was the primary voice of the Jujharvadi (Naxalite) movement that rejected aesthetic neutrality in the face of state oppression.',
                        'Step 2: Subversion of fear — The poem rejects conventional physical perils (police brutality, dacoity, poverty) as ordinary, declaring human complacency, loss of dream-faculty, and silent complicity as the true danger.',
                        'Step 3: Iconic refrain — "Sab ton khatarnak hunda hai murda shanti nal bhar jana... sab ton khatarnak hunda hai sade supnian da mar jana" (Most dangerous of all is to be filled with dead silence... most dangerous is the death of our dreams).'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਵਿਚਾਰਧਾਰਕ ਪਿਛੋਕੜ — ਪਾਸ਼ ਜੁਝਾਰਵਾਦੀ ਕਾਵਿ ਧਾਰਾ ਦਾ ਸਿਰਮੌਰ ਕਵੀ ਸੀ ਜਿਸ ਨੇ ਜ਼ੁਲਮ ਸਾਹਮਣੇ ਬੁੱਧੀਜੀਵੀਆਂ ਦੀ ਚੁੱਪ ਦਾ ਵਿਰੋਧ ਕੀਤਾ।',
                        'ਕਦਮ 2: ਸੰਕਲਪੀ ਉਲਟਾਓ — ਕਵੀ ਡਾਕੂਆਂ, ਪੁਲਿਸ ਕੁੱਟ ਜਾਂ ਗ਼ਰੀਬੀ ਨੂੰ ਓਨਾ ਖ਼ਤਰਨਾਕ ਨਹੀਂ ਮੰਨਦਾ, ਜਿੰਨਾ ਮਨੁੱਖ ਦੇ ਅੰਦਰੋਂ ਵਿਦਰੋਹ ਦੀ ਚਿਣਗ ਮਰ ਜਾਣ ਅਤੇ ਸੁਪਨਿਆਂ ਦੇ ਖ਼ਤਮ ਹੋ ਜਾਣ ਨੂੰ ਮੰਨਦਾ ਹੈ।',
                        'ਕਦਮ 3: ਅਮਰ ਸਤਰਾਂ — "ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ ਹੁੰਦਾ ਹੈ ਮੁਰਦਾ ਸ਼ਾਂਤੀ ਨਾਲ ਭਰ ਜਾਣਾ... ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ ਹੁੰਦਾ ਹੈ ਸਾਡੇ ਸੁਪਨਿਆਂ ਦਾ ਮਰ ਜਾਣਾ"।'
                    ],
                    hi: [
                        'चरण 1: वैचारिक संदर्भ — पाश जुझारवादी काव्य आंदोलन के प्रतीक थे जिन्होंने यथास्थितिवाद को चुनौती दी।',
                        'चरण 2: अवधारणा — वे पुलिस प्रताड़ना या डकैती से अधिक ख़तरनाक व्यक्ति की संवेदनशून्यता और सपनों के मर जाने को मानते हैं।',
                        'चरण 3: मूल पंक्ति — "सब तों ख़तरनाक हुंदा है मुरदा शांति नाल भर जाणा... सब तों ख़तरनाक हुंदा है साडे सुपनियां दा मर जाणा"।'
                    ]
                },
                finalAnswer: {
                    en: 'It establishes that the death of moral outrage, conscience, and dreams in human beings is far more lethal than physical tyranny.',
                    pa: 'ਇਹ ਸਿੱਧ ਕਰਦੀ ਹੈ ਕਿ ਸਰੀਰਕ ਜ਼ੁਲਮ ਨਾਲੋਂ ਮਨੁੱਖ ਦੀ ਜ਼ਮੀਰ ਦਾ ਮਰ ਜਾਣਾ ਅਤੇ ਸੁਪਨਿਆਂ ਦਾ ਖ਼ਤਮ ਹੋ ਜਾਣਾ ਸਭ ਤੋਂ ਖ਼ਤਰਨਾਕ ਹੈ।',
                    hi: 'यह स्थापित करती है कि बाह्य दमन से कहीं अधिक घातक मनुष्य की संवेदनशून्यता और सपनों का मर जाना है।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-lit-mp-1',
                question: {
                    en: 'Which modern Punjabi epic was composed in blank verse / Sirkhandi chhand by Bhai Vir Singh in 1905?',
                    pa: 'ਭਾਈ ਵੀਰ ਸਿੰਘ ਨੇ 1905 ਵਿੱਚ ਸਿਰਖੰਡੀ ਛੰਦ / ਤੁਕਾਂਤ-ਮੁਕਤ ਕਵਿਤਾ ਵਿੱਚ ਕਿਹੜਾ ਪ੍ਰਸਿੱਧ ਮਹਾਂਕਾਵਿ ਰਚਿਆ ਸੀ?',
                    hi: 'भाई वीर सिंह ने 1905 में सिरखंडी छंद में कौन सा प्रसिद्ध महाकाव्य रचा था?'
                },
                answer: {
                    en: 'Rana Surat Singh (ਰਾਣਾ ਸੂਰਤ ਸਿੰਘ).',
                    pa: 'ਰਾਣਾ ਸੂਰਤ ਸਿੰਘ (Rana Surat Singh)।',
                    hi: 'राणा सूरत सिंह (Rana Surat Singh)।'
                }
            },
            {
                id: 'fc-lit-mp-2',
                question: {
                    en: 'Who is known as the "Father of Free Verse" (Khula Chhand) in Punjabi poetry?',
                    pa: 'ਪੰਜਾਬੀ ਕਵਿਤਾ ਵਿੱਚ "ਖੁੱਲ੍ਹੀ ਕਵਿਤਾ (ਛੰਦ-ਮੁਕਤ)" ਦੇ ਪਿਤਾਮਾ ਕਿਸ ਨੂੰ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?',
                    hi: 'पंजाबी कविता में "मुक्त छंद" (खुली कविता) का जनक किसे माना जाता है?'
                },
                answer: {
                    en: 'Prof. Puran Singh (ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ — Khule Maidan, 1923).',
                    pa: 'ਪ੍ਰੋ. ਪੂਰਨ ਸਿੰਘ (ਖੁੱਲ੍ਹੇ ਮੈਦਾਨ, 1923)।',
                    hi: 'प्रो. पूरन सिंह (खुल्हे मैदान, 1923)।'
                }
            },
            {
                id: 'fc-lit-mp-3',
                question: {
                    en: 'For which poetic drama did Shiv Kumar Batalvi win the Sahitya Akademi Award in 1967 at the age of 31?',
                    pa: 'ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ ਨੂੰ 1967 ਵਿੱਚ 31 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਕਿਸ ਕਾਵਿ-ਨਾਟਕ ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ?',
                    hi: 'शिव कुमार बटालवी को 1967 में 31 वर्ष की आयु में किस काव्य-नाटक हेतु साहित्य अकादमी पुरस्कार मिला था?'
                },
                answer: {
                    en: 'Loona (ਲੂਣਾ — 1965).',
                    pa: 'ਲੂਣਾ (Loona — 1965)।',
                    hi: 'लूणा (Loona — 1965)।'
                }
            },
            {
                id: 'fc-lit-mp-4',
                question: {
                    en: 'Which work earned Surjit Patar the prestigious Saraswati Samman in 2003?',
                    pa: 'ਸੁਰਜੀਤ ਪਾਤਰ ਨੂੰ 2003 ਵਿੱਚ ਕਿਸ ਪੁਸਤਕ ਲਈ ਵੱਕਾਰੀ ਸਰਸਵਤੀ ਸਨਮਾਨ ਮਿਲਿਆ ਸੀ?',
                    hi: 'सुरजीत पातर को 2003 में किस पुस्तक हेतु प्रतिष्ठित सरस्वती सम्मान प्राप्त हुआ था?'
                },
                answer: {
                    en: 'Lafzan di Dargah (ਲਫ਼ਜ਼ਾਂ ਦੀ ਦਰਗਾਹ).',
                    pa: 'ਲਫ਼ਜ਼ਾਂ ਦੀ ਦਰਗਾਹ (Lafzan di Dargah)।',
                    hi: 'लफ़्ज़ों दी दरगाह (Lafzan di Dargah)।'
                }
            }
        ]
    },

    // =========================================================================
    // 4. PUNJABI PROSE, DRAMA, NOVEL & SHORT STORY (punjabi-lit-prose-drama)
    // =========================================================================
    {
        topicId: 'punjabi-lit-prose-drama',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Authoritative ERB Punjab Master Cadre Punjabi Literature blueprint covering Natak & Ikangi (I.C. Nanda, Balwant Gargi, Sant Singh Sekhon, Harcharan Singh, Kapur Singh Ghuman, Atamjit) and Novel & Nikki Kahani (Bhai Vir Singh, Nanak Singh, Gurdial Singh, Jaswant Singh Kanwal, Kulwant Singh Virk, Kartar Singh Duggal, Ajit Caur).'
        },
        bookRefs: [
            {
                title: 'Punjabi Natak da Itihas',
                author: 'Dr. Satish Kumar Verma / Punjabi University Patiala',
                chapter: 'From I.C. Nanda to Modern Experimental and Street Theatre',
                relevance: 'Standard university textbook for stages, one-act plays, and dramatic theory in Punjab Master Cadre.'
            },
            {
                title: 'Punjabi Galap da Itihas (Novel ate Nikki Kahani)',
                author: 'Dr. Gurpal Singh Sandhu',
                chapter: 'Evolution of Punjabi Novel from Sundari to Gurdial Singh, and Nikki Kahani from Virk to Ajit Caur',
                relevance: 'Prescribed reference for narrative prose, themes, and awards in Master Cadre Punjabi.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Emergence of Modern Punjabi Drama and Narrative Fiction]
1. **Pioneering Dramatic Breakthrough:**
   - Modern Punjabi drama originated in **1913** at Dyal Singh College, Lahore, inspired by Irish theatre activist **Norah Richards** (wife of Prof. P.E. Richards), who organized annual play competitions to encourage native language theatre depicting authentic rural Punjabi life.
   - **Ishwar Chander Nanda (I.C. Nanda)** won this maiden competition in 1913 with his one-act play **"Dulhan" (Suhag)**, inaugurating modern Punjabi playwriting.
2. **Pioneering Novel Breakthrough:**
   - Modern Punjabi novel originated in **1898** with **Bhai Vir Singh’s "Sundari"**, written to inspire Sikh moral resilience and identity against Mughal persecution.

---

### [Level I: Intermediate — Master Playwrights and Fiction Writers]
1. **Pillars of Punjabi Natak (Plays) & Ikangi (One-Act Plays):**
   | Playwright | Key Plays & One-Act Plays | Awards & Dramaturgical Significance |
   |---|---|---|
   | **Ishwar Chander Nanda** (1892–1966) | **Dulhan / Suhag** (1913 — First modern Punjabi play); Full-length plays: **Subhadra** (1920 — social reform advocating widow remarriage), **Var Ghar / Lily da Viah** (1928), **Shamu Shah** (1928 — adaptation of Shakespeare's *Merchant of Venice*); One-act collections: *Jhalakare*, *Lishkare*, *Chamkare*. | **Father of Modern Punjabi Drama**; introduced realism, natural dialogue, comic relief, and social reform. |
   | **Balwant Gargi** (1916–2003) | **Loha Kutt** (1944 — landmark realistic-symbolic play on repressed rural sexuality), **Kanak di Balli** (1954), **Dhuni di Agg** (1977), *Sultan Razia*, *Gagan Mai Thaal*; Prose portraits: *Nimm de Patte*, *Surme Wali Akh*, *Kaudi Wala Sapp*. | **Sahitya Akademi Award 1962** for his monumental research book **Rangmanch**; Padma Shri (1972); founder of Department of Indian Theatre at Panjab University, Chandigarh. |
   | **Sant Singh Sekhon** (1908–1997) | Full-length plays: *Kalakar* (1945), *Narqi*, **Moe Sar Na Kai** (1954), *Beda Bandh Na Sakiyo*; Iconic historical one-act play: **Baba Bohar** (1964 — philosophical personification of Punjab's historical resilience). | **Sahitya Akademi Award 1972** for his historical play **Mitter Piara** (depicting Lenin and Indian revolutionaries); Marxist pioneer of Punjabi literary criticism. |
   | **Dr. Harcharan Singh** (1914–2006) | *Kamla Kumari* (1937), *Raja Porus*, *Anjor*, *Ratta Salu*, *Shobha Shakti*, **Kal Aj te Bhalak** (1971), *Rani Jindan*. | **Sahitya Akademi Award 1973** for *Kal Aj te Bhalak*; pioneer of staging plays in rural Punjab with his wife Dharam Kaur. |
   | **Kapur Singh Ghuman** (1927–1986) | *Jiondi Lash*, *Manas ki Jaat*, *Putli Ghar*, **Pagal Lok** (1982), *Atit de Parchawein*. | **Sahitya Akademi Award 1984** for *Pagal Lok*; pioneer of experimental and psychological Punjabi theatre. |
   | **Dr. Atamjit** (1950–present) | *Hawa Mahal*, *Natak Chakravyuh*, *Shahar Bimar Hai*, *Kamloops Dian Machhian*, **Tatti Tavi da Sach** (2006). | **Sahitya Akademi Award 2009** for *Tatti Tavi da Sach* (on the martyrdom of Guru Arjan Dev Ji); master of dialectical modern theatre. |

2. **Pillars of Punjabi Novel:**
   - **Bhai Vir Singh (1872–1957):** Historical reformist romances — **Sundari** (1898; first modern Punjabi novel), **Bijay Singh** (1899), **Satwant Kaur** (1900), and social reform novel **Baba Naudh Singh** (1921).
   - **Nanak Singh (1897–1971):** **Father of the Punjabi Novel** (*ਪੰਜਾਬੀ ਨਾਵਲ ਦੇ ਪਿਤਾਮਾ*); master of social realism, melodramatic empathy, and reform.
     - Masterpieces: **Chitta Lahu** (1932; *ਚਿੱਟਾ ਲਹੂ* — reform against caste and widow subjugation; famously translated into Russian), **Pavittar Papi** (1942 — adapted into a Hindi feature film), *Garib di Duniya*, *Pyar di Duniya*, *Tutte Khamb*, *Adamkhor*.
     - 1947 Partition Duology: **Khoon de Sohle** (1948) and **Agg di Khed** (1948).
     - Historical masterpiece: **Ik Mian Do Talwaran** (1960 — based on Ghadar hero Kartar Singh Sarabha; won the **Sahitya Akademi Award in 1962**).
   - **Gurdial Singh (1933–2016):** Supreme master of regional Malwa subaltern realism (*Aanchalik Novel*); elevated Punjabi narrative fiction to world literature.
     - Masterpiece: **Marhi da Deeva** (1964; *ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ* — tragic dispossession and silence of low-caste landless farmhand Jagsir; adapted into a national-award winning film).
     - Other landmark novels: *Anhoe* (1966), **Adh Chhanani Raat** (1972 — **Sahitya Akademi Award 1975**), **Annhe Ghore da Daan** (1976 — filmed by Gurvinder Singh, screened at Venice Film Festival), *Parsa* (1991).
     - **Highest Literary Honour:** Awarded the **Bharatiya Jnanpith Award (1999)** (shared with Hindi author Nirmal Verma); Padma Shri (1998).
   - **Jaswant Singh Kanwal (1919–2020):** Malwa's romantic-progressive and rural peasant voice; novels: *Puranmashi*, *Civil Lines*, *Raat Baki Hai*, **Lahu di Lau** (1973 — revolutionary underground chronicle of the Naxalite upsurge), **Taushali di Hanso** (won the **Sahitya Akademi Award in 1997**).

3. **Pillars of Punjabi Nikki Kahani (Short Story):**
   - **Kulwant Singh Virk (1921–1987):** **Father of the Modern Punjabi Short Story** (*ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਨਿੱਕੀ ਕਹਾਣੀ ਦੇ ਬਾਪੂ*); master of psychological economy, understated irony, and pastoral humanism.
     - Collections: **Chhanwela** (1950), **Dharti Hethla Balad** (1954; *ਧਰਤੀ ਹੇਠਲਾ ਬਲਦ* — masterpiece story of Karam Singh and Man Singh depicting the quiet burden of military sacrifice), *Kuri Munde*, *Dudh da Chhappar* (1958), **Naveen Lok** (1967 — **Sahitya Akademi Award 1968**), *Burj Bara*.
   - **Kartar Singh Duggal (1917–2012):** Master of psychoanalytic, stream-of-consciousness, and Freudian storytelling; Pothohari dialect mastery; collections: *Sawer Sar* (1941), *Pipple Pattian*, **Ik Chhit Chanan Di** (1963 — **Sahitya Akademi Award 1965**), *Naunh te Maas*.
   - **Ajit Caur (1934–present):** Bold feminist fiction articulating female alienation, urban loneliness, and bodily autonomy; collections: *Gulbano*, *But-Shikan*, *Faltu Aurat*, *Saviyan Chhawan*; famous autobiographies: **Khanabadosh** (1982 — **Sahitya Akademi Award 1983**) and *Koorha Kabarha*.

---

### [Level A: Advanced — Major Honours & Dramaturgical Innovations]
- **Norah Richards:** Known as the *Grandmother of Punjabi Theatre* (*ਪੰਜਾਬੀ ਰੰਗਮੰਚ ਦੀ ਨੱਕੀ*); settled at Andretta (Kangra Valley).
- **First Full-length Play in Punjabi:** *Subhadra* (1920) by I.C. Nanda.
- **First Modern Novel in Punjabi:** *Sundari* (1898) by Bhai Vir Singh.
- **First Sahitya Akademi in Punjabi Fiction (Novel):** *Ik Mian Do Talwaran* (1962) by Nanak Singh.
- **First Sahitya Akademi in Punjabi Short Story:** *Ik Chhit Chanan Di* (1965) by Kartar Singh Duggal, followed by *Naveen Lok* (1968) by Kulwant Singh Virk.`,

            pa: `### [Level B: Basic — ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਨਾਟਕ ਅਤੇ ਗਲਪ ਦਾ ਆਰੰਭ]
1. **ਪੰਜਾਬੀ ਨਾਟਕ ਦੀ ਸ਼ੁਰੂਆਤ:**
   - ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਨਾਟਕ ਦਾ ਜਨਮ **1913 ਈ.** ਵਿੱਚ ਦਿਆਲ ਸਿੰਘ ਕਾਲਜ ਲਾਹੌਰ ਵਿਖੇ ਆਇਰਿਸ਼ ਮਹਿਲਾ **ਨੋਰਾ ਰਿਚਰਡਜ਼** (ਪੰਜਾਬੀ ਰੰਗਮੰਚ ਦੀ ਨੱਕੀ/ਦਾਦੀ) ਦੀ ਪ੍ਰੇਰਨਾ ਨਾਲ ਹੋਇਆ।
   - **ਈਸ਼ਵਰ ਚੰਦਰ ਨੰਦਾ (I.C. Nanda)** ਨੇ ਆਪਣੀ ਇਕਾਂਗੀ **'ਦੁਲਹਨ' (ਸੁਹਾਗ)** ਨਾਲ ਪਹਿਲਾ ਇਨਾਮ ਜਿੱਤ ਕੇ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਨਾਟਕਕਾਰੀ ਦਾ ਮੁੱਢ ਬੰਨ੍ਹਿਆ।
2. **ਪੰਜਾਬੀ ਨਾਵਲ ਦਾ ਆਰੰਭ:**
   - ਪੰਜਾਬੀ ਦਾ ਪਹਿਲਾ ਮੌਲਿਕ ਨਾਵਲ **ਭਾਈ ਵੀਰ ਸਿੰਘ ਦਾ 'ਸੁੰਦਰੀ' (1898)** ਹੈ, ਜੋ ਸਿੱਖ ਇਤਿਹਾਸਕ ਸੰਦਰਭ ਵਿੱਚ ਸਦਾਚਾਰਕ ਦ੍ਰਿੜ੍ਹਤਾ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।

---

### [Level I: Intermediate — ਪ੍ਰਮੁੱਖ ਨਾਟਕਕਾਰ ਅਤੇ ਗਲਪਕਾਰ]
1. **ਪੰਜਾਬੀ ਨਾਟਕ ਅਤੇ ਇਕਾਂਗੀ ਦੇ ਥੰਮ੍ਹ:**
   | ਨਾਟਕਕਾਰ | ਪ੍ਰਮੁੱਖ ਨਾਟਕ ਅਤੇ ਇਕਾਂਗੀਆਂ | ਪੁਰਸਕਾਰ ਅਤੇ ਵਿਸ਼ੇਸ਼ਤਾ |
   |---|---|---|
   | **ਈਸ਼ਵਰ ਚੰਦਰ ਨੰਦਾ** (1892–1966) | **ਦੁਲਹਨ/ਸੁਹਾਗ** (1913 — ਪਹਿਲੀ ਇਕਾਂਗੀ); ਪੂਰੇ ਨਾਟਕ: **ਸੁਭੱਦਰਾ** (1920 — ਵਿਧਵਾ ਵਿਆਹ ਸੁਧਾਰ), **ਵਰ ਘਰ / ਲਿਲੀ ਦਾ ਵਿਆਹ** (1928), **ਸ਼ਾਮੂ ਸ਼ਾਹ** (ਸ਼ੈਕਸਪੀਅਰ ਦੇ ਮਰਚੈਂਟ ਆਫ਼ ਵੈਨਿਸ ਦਾ ਰੂਪਾਂਤਰ); ਇਕਾਂਗੀ ਸੰਗ੍ਰਹਿ: *ਝਲਕਾਰੇ*, *ਲਿਸ਼ਕਾਰੇ*, *ਚਮਕਾਰੇ*। | **ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਨਾਟਕ ਦੇ ਪਿਤਾਮਾ**; ਯਥਾਰਥਵਾਦੀ ਅਤੇ ਹਾਸ-ਵਿਅੰਗ ਭਰਪੂਰ ਸ਼ੈਲੀ। |
   | **ਬਲਵੰਤ ਗਾਰਗੀ** (1916–2003) | **ਲੋਹਾ ਕੁੱਟ** (1944 — ਦਿਹਾਤੀ ਜੀਵਨ ਦੇ ਦਮਿਤ ਜਜ਼ਬਿਆਂ ਦਾ ਪਹਿਲਾ ਨਾਟਕ), **ਕਣਕ ਦੀ ਬੱਲੀ** (1954), **ਧੂਣੀ ਦੀ ਅੱਗ** (1977), *ਸੁਲਤਾਨ ਰਜ਼ੀਆ*, *ਗਗਨ ਮੈ ਥਾਲੁ*; ਰੇਖਾ-ਚਿੱਤਰ: *ਨਿੰਮ ਦੇ ਪੱਤੇ*, *ਸੁਰਮੇ ਵਾਲੀ ਅੱਖ*, *ਕੌਡੀ ਵਾਲਾ ਸੱਪ*। | ਖੋਜ ਪੁਸਤਕ **'ਰੰਗਮੰਚ' ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ (1962)**; ਪੰਜਾਬ ਯੂਨੀਵਰਸਿਟੀ ਚੰਡੀਗੜ੍ਹ ਵਿੱਚ ਇੰਡੀਅਨ ਥੀਏਟਰ ਵਿਭਾਗ ਦੇ ਸੰਸਥਾਪਕ। |
   | **ਸੰਤ ਸਿੰਘ ਸੇਖੋਂ** (1908–1997) | ਨਾਟਕ: *ਕਲਾਕਾਰ* (1945), *ਨਾਰਕੀ*, **ਮੋਇਆਂ ਸਾਰ ਨ ਕਾਈ** (1954); ਪ੍ਰਸਿੱਧ ਇਕਾਂਗੀ: **ਬਾਬਾ ਬੋਹੜ** (1964 — ਪੰਜਾਬ ਦੇ ਇਤਿਹਾਸ ਦਾ ਪ੍ਰਤੀਕ)। | ਨਾਟਕ **'ਮਿੱਤਰ ਪਿਆਰਾ' ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ (1972)**; ਮਾਰਕਸਵਾਦੀ ਆਲੋਚਕ। |
   | **ਡਾ. ਹਰਚਰਨ ਸਿੰਘ** (1914–2006) | *ਕਮਲਾ ਕੁਮਾਰੀ* (1937), *ਰਾਜਾ ਪੋਰਸ*, *ਅਨਜੋੜ*, *ਰੱਤਾ ਸਾਲੂ*, **ਕੱਲ੍ਹ ਅੱਜ ਤੇ ਭਲਕ** (1971), *ਰਾਣੀ ਜਿੰਦਾਂ*। | **ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ (1973)** ਨਾਟਕ *ਕੱਲ੍ਹ ਅੱਜ ਤੇ ਭਲਕ* ਲਈ; ਪੰਜਾਬੀ ਰੰਗਮੰਚ ਨੂੰ ਪਿੰਡਾਂ ਤੱਕ ਪਹੁੰਚਾਇਆ। |
   | **ਕਪੂਰ ਸਿੰਘ ਘੁੰਮਣ** (1927–1986) | *ਜਿਊਂਦੀ ਲਾਸ਼*, *ਮਾਣਸ ਕੀ ਜਾਤ*, **ਪਾਗਲ ਲੋਕ** (1982), *ਅਤੀਤ ਦੇ ਪਰਛਾਵੇਂ*। | **ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ (1984)** *ਪਾਗਲ ਲੋਕ* ਲਈ; ਪ੍ਰਯੋਗਸ਼ੀਲ ਨਾਟਕਕਾਰ। |
   | **ਡਾ. ਆਤਮਜੀਤ** (1950–ਹੁਣ ਤੱਕ) | *ਹਵਾ ਮਹਿਲ*, *ਨਾਟਕ ਚੱਕਰਵਿਊਹ*, *ਸ਼ਹਿਰ ਬੀਮਾਰ ਹੈ*, *ਕੈਮਲੂਪਸ ਦੀਆਂ ਮੱਛੀਆਂ*, **ਤੱਤੀ ਤਵੀ ਦਾ ਸੱਚ** (2006)। | **ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ (2009)** *ਤੱਤੀ ਤਵੀ ਦਾ ਸੱਚ* ਲਈ; ਆਧੁਨਿਕ ਚੇਤਨਾ ਦੇ ਨਾਟਕਕਾਰ। |

2. **ਪੰਜਾਬੀ ਨਾਵਲ ਦੇ ਸਿਰਮੌਰ ਰਚੇਤਾ:**
   - **ਭਾਈ ਵੀਰ ਸਿੰਘ:** ਇਤਿਹਾਸਕ ਸੁਧਾਰਵਾਦੀ ਨਾਵਲ — **ਸੁੰਦਰੀ** (1898 — ਪਹਿਲਾ ਨਾਵਲ), **ਬਿਜੈ ਸਿੰਘ** (1899), **ਸਤਵੰਤ ਕੌਰ** (1900), **ਬਾਬਾ ਨੌਧ ਸਿੰਘ** (1921)।
   - **ਨਾਨਕ ਸਿੰਘ (1897–1971):** **ਪੰਜਾਬੀ ਨਾਵਲ ਦੇ ਪਿਤਾਮਾ**; ਸਮਾਜਿਕ ਯਥਾਰਥਵਾਦ ਦੇ ਉਸਰੱਈਏ।
     - ਸ਼ਾਹਕਾਰ ਨਾਵਲ: **ਚਿੱਟਾ ਲਹੂ** (1932 — ਜਾਤ-ਪਾਤ ਤੇ ਸਮਾਜਿਕ ਬੁਰਾਈਆਂ ਵਿਰੁੱਧ), **ਪਵਿੱਤਰ ਪਾਪੀ** (1942 — ਜਿਸ ਉੱਤੇ ਹਿੰਦੀ ਫ਼ਿਲਮ ਬਣੀ), *ਗ਼ਰੀਬ ਦੀ ਦੁਨੀਆ*, *ਟੁੱਟੇ ਖੰਭ*, *ਆਦਮਖ਼ੋਰ*।
     - 1947 ਦੀ ਵੰਡ 'ਤੇ ਨਾਵਲ ਜੋੜੀ: **ਖ਼ੂਨ ਦੇ ਸੋਹਲੇ** (1948) ਅਤੇ **ਅੱਗ ਦੀ ਖੇਡ** (1948)।
     - ਇਤਿਹਾਸਕ ਨਾਵਲ: **ਇੱਕ ਮਿਆਨ ਦੋ ਤਲਵਾਰਾਂ** (1960 — ਸ਼ਹੀਦ ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ ਦੇ ਜੀਵਨ 'ਤੇ ਆਧਾਰਿਤ; **ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1962**)।
   - **ਗੁਰਦਿਆਲ ਸਿੰਘ (1933–2016):** ਮਾਲਵੇ ਦੇ ਆਂਚਲਿਕ ਅਤੇ ਦਲਿਤ-ਹਾਸ਼ੀਆਗ੍ਰਸਤ ਵਰਗ ਦੇ ਮਹਾਨ ਨਾਵਲਕਾਰ।
     - ਸ਼ਾਹਕਾਰ ਨਾਵਲ: **ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ** (1964 — ਜਗਸੀਰ ਸੀਰੀ ਦੀ ਦੁਖਾਂਤਕ ਦਾਸਤਾਨ; ਨੈਸ਼ਨਲ ਐਵਾਰਡੀ ਫ਼ਿਲਮ ਬਣੀ), *ਅਣਹੋਏ* (1966), **ਅੱਧ ਚਾਨਣੀ ਰਾਤ** (1972 — **ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1975**), **ਅੰਨ੍ਹੇ ਘੋੜੇ ਦਾ ਦਾਨ** (1976 — ਅੰਤਰਰਾਸ਼ਟਰੀ ਵੈਨਿਸ ਫ਼ਿਲਮ ਫੈਸਟੀਵਲ ਵਿੱਚ ਪ੍ਰਦਰਸ਼ਿਤ ਫ਼ਿਲਮ), *ਪਰਸਾ* (1991)।
     - **ਸਰਵਉੱਚ ਸਾਹਿਤਕ ਸਨਮਾਨ:** **ਭਾਰਤੀ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ (1999)** (ਹਿੰਦੀ ਲੇਖਕ ਨਿਰਮਲ ਵਰਮਾ ਨਾਲ ਸਾਂਝਾ); ਪਦਮ ਸ਼੍ਰੀ (1998)।
   - **ਜਸਵੰਤ ਸਿੰਘ ਕੰਵਲ (1919–2020):** ਮਾਲਵੇ ਦੇ ਕਿਸਾਨੀ ਜੀਵਨ ਅਤੇ ਇਨਕਲਾਬੀ ਸੰਘਰਸ਼ ਦੇ ਨਾਵਲਕਾਰ; *ਪੂਰਨਮਾਸ਼ੀ*, *ਸਿਵਲ ਲਾਈਨਜ਼*, **ਲਹੂ ਦੀ ਲੋਅ** (1973 — ਨਕਸਲਬਾੜੀ ਲਹਿਰ ਦਾ ਨਾਵਲ), **ਤੋਸ਼ਾਲੀ ਦੀ ਹੰਸੋ** (**ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1997**)।

3. **ਪੰਜਾਬੀ ਨਿੱਕੀ ਕਹਾਣੀ ਦੇ ਸ਼ਾਹਕਾਰ:**
   - **ਕੁਲਵੰਤ ਸਿੰਘ ਵਿਰਕ (1921–1987):** **ਪੰਜਾਬੀ ਨਿੱਕੀ ਕਹਾਣੀ ਦੇ ਬਾਪੂ**; ਮਨੋਵਿਗਿਆਨਕ ਸੰਜਮ ਅਤੇ ਦਿਹਾਤੀ ਰਹਿਣੀ-ਬਹਿਣੀ ਦੇ ਮਾਹਿਰ।
     - ਕਹਾਣੀ ਸੰਗ੍ਰਹਿ: *ਛਾਹ ਵੇਲਾ* (1950), **ਧਰਤੀ ਹੇਠਲਾ ਬਲਦ** (1954 — ਕਰਮ ਸਿੰਘ ਅਤੇ ਮਾਨ ਸਿੰਘ ਦੀ ਅਮਰ ਕਹਾਣੀ), *ਦੁੱਧ ਦਾ ਛੱਪੜ* (1958), **ਨਵੇਂ ਲੋਕ** (1967 — **ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1968**)।
   - **ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ (1917–2012):** ਚੇਤਨਾ ਪ੍ਰਵਾਹ ਅਤੇ ਫ਼ਰਾਇਡਵਾਦੀ ਮਨੋਵਿਸ਼ਲੇਸ਼ਣ ਦੇ ਮਾਹਿਰ; ਪੋਠੋਹਾਰੀ ਉਪਭਾਸ਼ਾ ਦਾ ਚਮਤਕਾਰ; ਸੰਗ੍ਰਹਿ: *ਸਵੇਰ ਸਾਰ* (1941), **ਇੱਕ ਛਿੱਟ ਚਾਨਣ ਦੀ** (**ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1965**), *ਨਹੁੰ ਤੇ ਮਾਸ*।
   - **ਅਜੀਤ ਕੌਰ (1934–ਹੁਣ ਤੱਕ):** ਨਾਰੀ ਚੇਤਨਾ, ਵਿਦਰੋਹ ਅਤੇ ਮਹਾਂਨਗਰੀ ਇਕੱਲਤਾ ਦੀ ਸਮਰੱਥ ਕਹਾਣੀਕਾਰ; ਕਹਾਣੀ ਸੰਗ੍ਰਹਿ: *ਗੁਲਬਾਨੋ*, *ਬੁੱਤ ਸ਼ਿਕਨ*, *ਫ਼ਾਲਤੂ ਔਰਤ*; ਸਵੈ-ਜੀਵਨੀ: **ਖ਼ਾਨਾਬਦੋਸ਼** (**ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ 1983**)।`,

            hi: `### [Level B: Basic — आधुनिक नाटक एवं गल्प का उद्भव]
1. **पंजाबी नाटक का प्रारंभ:**
   - 1913 ई. में लाहौर में **नोरा रिचर्ड्स** की प्रेरणा से **ईश्वर चंद्र नंदा (I.C. Nanda)** ने अपनी एकांकी **'दुल्हन' (सुहाग)** के माध्यम से आधुनिक पंजाबी नाटक की नींव रखी।
2. **पंजाबी उपन्यास का प्रारंभ:**
   - 1898 ई. में **भाई वीर सिंह** द्वारा रचित **'सुंदरी'** को आधुनिक पंजाबी का प्रथम उपन्यास माना जाता है।

---

### [Level I: Intermediate — प्रमुख नाटककार एवं गल्पकार]
1. **प्रमुख नाटककार:**
   | नाटककार | प्रमुख कृतियाँ | साहित्यिक योगदान |
   |---|---|---|
   | **ईश्वर चंद्र नंदा** | **दुल्हन/सुहाग** (1913); **सुभद्रा** (1920 — विधवा पुनर्विवाह), **वर घर**, **शामू शाह** (मर्चेंट ऑफ़ वेनिस का रूपांतरण)। | **आधुनिक पंजाबी नाटक के जनक**; यथार्थवादी व हास्य-व्यंग्य शैली। |
   | **बलवंत गार्गी** | **लोहा कुट्ट** (1944 — ग्रामीण दमित वासनाओं का प्रथम नाटक), **कणक दी बल्ली**, **धूनी दी अग्ग**; रेखाचित्र: *निम्म दे पत्ते*; शोध ग्रंथ: **रंगमंच** (**साहित्य अकादमी 1962**)। | पद्मश्री (1972); पंजाब वि.वि. में रंगमंच विभाग के संस्थापक। |
   | **संत सिंह सेखों** | नाटक: *कलाकार*, *मोए सार न काई*; एकांकी: **बाबा बोहड़** (1964); नाटक **'मित्तर प्यारा' हेतु साहित्य अकादमी (1972)**। | मार्क्सवादी नाटककार व समालोचक। |
   | **डॉ. हरचरण सिंह** | *कमला कुमारी*, *राजा पोरस*, **कल अज ते भलक** (**साहित्य अकादमी 1973**)। | नाटकों को पंजाब के गाँवों तक पहुँचाया। |
   | **कपूर सिंह घुम्मन** | **पागल लोक** (**साहित्य अकादमी 1984**); *जिउंदी लाश*। | प्रयोगशील व मनोवैज्ञानिक नाटककार। |
   | **डॉ. आतमजीत** | **तत्ती तवी दा सच** (**साहित्य अकादमी 2009**); *हवा महल*। | आधुनिक बौद्धिक चेतना के नाटककार। |

2. **प्रमुख उपन्यासकार:**
   - **भाई वीर सिंह:** *सुंदरी* (1898 — प्रथम उपन्यास), *बिजय सिंह*, *सतवंत कौर*, *बाबा नौध सिंह*।
   - **नानक सिंह (1897–1971):** **पंजाबी उपन्यास के जनक**; कृतियाँ: **चिट्टा लहू** (1932), **पवित्र पापी** (1942 — फ़िल्म रूपांतरित), विभाजन पर: *खून दे सोहले* व *अग्ग दी खेड*; **इक मियान दो तलवारां** (**साहित्य अकादमी 1962**)।
   - **गुरदयाल सिंह (1933–2016):** मालवा के आंचलिक व दलित यथार्थवादी कथाकार; **मढ़ी दा दीवा** (1964 — जगसीर का अमर त्रासद जीवन), *अद्ध चानणी रात* (**साहित्य अकादमी 1975**), *अन्हे घोड़े दा दान* (1976); **भारतीय ज्ञानपीठ पुरस्कार (1999)**।
   - **जसवंत सिंह कंवल:** मालवा के ग्रामीण जनजीवन व नक्सल आंदोलन पर आधारित उपन्यास: *पूरनमाशी*, **लहू दी लौ** (1973), **तोशाली दी हंसो** (**साहित्य अकादमी 1997**)।

3. **प्रमुख निक्की कहानी (लघुकथा) लेखक:**
   - **कुलवंत सिंह विर्क (1921–1987):** **पंजाबी कहानी के पितामह**; संग्रह: *छाह वेला*, **धरती हेठला बलद** (1954 — कर्म सिंह और मान सिंह की अमर कहानी), **नवें लोक** (**साहित्य अकादमी 1968**)।
   - **करतार सिंह दुग्गल (1917–2012):** मनोविश्लेषणवादी कथाकार; पोठोहारी बोली; संग्रह: **इक छिट चानण दी** (**साहित्य अकादमी 1965**)।
   - **अजीत कौर (1934–वर्तमान):** नारीवादी संवेदना की कथाकार; संग्रह: *गुलबानो*, *बुत्त शिकन*; आत्मकथा: **ख़ानाबदोश** (**साहित्य अकादमी 1983**)।`
        },
        keyNotes: {
            en: [
                'Ishwar Chander Nanda is the Father of Modern Punjabi Drama; wrote "Dulhan / Suhag" (1913) and "Subhadra" (1920).',
                'Norah Richards inspired the birth of modern realistic Punjabi theatre at Dyal Singh College Lahore in 1913.',
                'Balwant Gargi authored "Loha Kutt" (1944) and won the Sahitya Akademi Award in 1962 for his research work "Rangmanch".',
                'Sant Singh Sekhon won the Sahitya Akademi Award for "Mitter Piara" (1972) and authored the iconic one-act play "Baba Bohar".',
                'Bhai Vir Singh authored "Sundari" in 1898, recognized as the first modern novel in the Punjabi language.',
                'Nanak Singh is the Father of the Punjabi Novel; wrote "Chitta Lahu", "Pavittar Papi", and won Sahitya Akademi for "Ik Mian Do Talwaran" (1962).',
                'Gurdial Singh won the Bharatiya Jnanpith Award in 1999; authored "Marhi da Deeva" (1964) and "Annhe Ghore da Daan" (1976).',
                'Jaswant Singh Kanwal chronicled rural Malwa and the Naxalite movement in "Lahu di Lau" (1973).',
                'Kulwant Singh Virk is the Father of Modern Punjabi Short Story; famous for "Dharti Hethla Balad" and "Naveen Lok" (Sahitya Akademi 1968).',
                'Kartar Singh Duggal ("Ik Chhit Chanan Di") and Ajit Caur ("Khanabadosh") are pioneers of psychoanalytic and feminist Punjabi short stories respectively.'
            ],
            pa: [
                'ਈਸ਼ਵਰ ਚੰਦਰ ਨੰਦਾ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਨਾਟਕ ਦੇ ਪਿਤਾਮਾ ਹਨ; "ਦੁਲਹਨ/ਸੁਹਾਗ" (1913) ਅਤੇ "ਸੁਭੱਦਰਾ" (1920) ਰਚੇ।',
                'ਨੋਰਾ ਰਿਚਰਡਜ਼ ਨੇ 1913 ਵਿੱਚ ਦਿਆਲ ਸਿੰਘ ਕਾਲਜ ਲਾਹੌਰ ਵਿਖੇ ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਰੰਗਮੰਚ ਦੀ ਨੀਂਹ ਰੱਖਣ ਲਈ ਪ੍ਰੇਰਿਆ।',
                'ਬਲਵੰਤ ਗਾਰਗੀ ਨੇ "ਲੋਹਾ ਕੁੱਟ" (1944) ਰਚਿਆ ਅਤੇ 1962 ਵਿੱਚ ਖੋਜ ਪੁਸਤਕ "ਰੰਗਮੰਚ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਜਿੱਤਿਆ।',
                'ਸੰਤ ਸਿੰਘ ਸੇਖੋਂ ਨੇ "ਮਿੱਤਰ ਪਿਆਰਾ" (1972) ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਜਿੱਤਿਆ ਅਤੇ ਸ਼ਾਹਕਾਰ ਇਕਾਂਗੀ "ਬਾਬਾ ਬੋਹੜ" ਰਚੀ।',
                'ਭਾਈ ਵੀਰ ਸਿੰਘ ਨੇ 1898 ਵਿੱਚ "ਸੁੰਦਰੀ" ਲਿਖਿਆ, ਜੋ ਪੰਜਾਬੀ ਬੋਲੀ ਦਾ ਪਹਿਲਾ ਮੌਲਿਕ ਨਾਵਲ ਹੈ।',
                'ਨਾਨਕ ਸਿੰਘ ਪੰਜਾਬੀ ਨਾਵਲ ਦੇ ਪਿਤਾਮਾ ਹਨ; "ਚਿੱਟਾ ਲਹੂ", "ਪਵਿੱਤਰ ਪਾਪੀ" ਅਤੇ "ਇੱਕ ਮਿਆਨ ਦੋ ਤਲਵਾਰਾਂ" (ਸਾਹਿਤ ਅਕਾਦਮੀ 1962) ਰਚੇ।',
                'ਗੁਰਦਿਆਲ ਸਿੰਘ ਨੇ 1999 ਵਿੱਚ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜਿੱਤਿਆ; "ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ" (1964) ਅਤੇ "ਅੰਨ੍ਹੇ ਘੋੜੇ ਦਾ ਦਾਨ" (1976) ਉਹਨਾਂ ਦੇ ਸ਼ਾਹਕਾਰ ਹਨ।',
                'ਜਸਵੰਤ ਸਿੰਘ ਕੰਵਲ ਨੇ ਮਾਲਵੇ ਦੀ ਕਿਸਾਨੀ ਅਤੇ ਨਕਸਲਬਾੜੀ ਲਹਿਰ ਨੂੰ ਨਾਵਲ "ਲਹੂ ਦੀ ਲੋਅ" (1973) ਵਿੱਚ ਅਮਰ ਕੀਤਾ।',
                'ਕੁਲਵੰਤ ਸਿੰਘ ਵਿਰਕ ਪੰਜਾਬੀ ਨਿੱਕੀ ਕਹਾਣੀ ਦੇ ਬਾਪੂ ਹਨ; "ਧਰਤੀ ਹੇਠਲਾ ਬਲਦ" ਅਤੇ "ਨਵੇਂ ਲੋਕ" (ਸਾਹਿਤ ਅਕਾਦਮੀ 1968) ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਹਨ।',
                'ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ ("ਇੱਕ ਛਿੱਟ ਚਾਨਣ ਦੀ") ਅਤੇ ਅਜੀਤ ਕੌਰ ("ਖ਼ਾਨਾਬਦੋਸ਼") ਕ੍ਰਮਵਾਰ ਮਨੋਵਿਗਿਆਨਕ ਅਤੇ ਨਾਰੀਵਾਦੀ ਕਹਾਣੀ ਦੇ ਮੋਢੀ ਹਨ।'
            ],
            hi: [
                'ईश्वर चंद्र नंदा आधुनिक पंजाबी नाटक के जनक हैं; "दुल्हन/सुहाग" (1913) और "सुभद्रा" (1920) रचे।',
                'नोरा रिचर्ड्स ने 1913 में लाहौर में आधुनिक पंजाबी रंगमंच की नींव रखने की प्रेरणा दी।',
                'बलवंत गार्गी ने "लोहा कुट्ट" (1944) रचा और 1962 में शोध पुस्तक "रंगमंच" हेतु साहित्य अकादमी जीता।',
                'संत सिंह सेखों ने "मित्तर प्यारा" (1972) हेतु साहित्य अकादमी जीता और ऐतिहासिक एकांकी "बाबा बोहड़" रची।',
                'भाई वीर सिंह ने 1898 में "सुंदरी" लिखा, जो पंजाबी भाषा का प्रथम मौलिक उपन्यास है।',
                'नानक सिंह पंजाबी उपन्यास के जनक हैं; "चिट्टा लहू", "पवित्र पापी" व "इक मियान दो तलवारां" (साहित्य अकादमी 1962) रचे।',
                'गुरदयाल सिंह ने 1999 में ज्ञानपीठ पुरस्कार जीता; "मढ़ी दा दीवा" (1964) और "अन्हे घोड़े दा दान" (1976) उनके अमर उपन्यास हैं।',
                'जसवंत सिंह कंवल ने ग्रामीण मालवा और नक्सल आंदोलन को उपन्यास "लहू दी लौ" (1973) में चित्रित किया।',
                'कुलवंत सिंह विर्क पंजाबी कहानी के पितामह हैं; "धरती हेठला बलद" और "नवें लोक" (साहित्य अकादमी 1968) के रचयिता हैं।',
                'करतार सिंह दुग्गल ("इक छिट चानण दी") और अजीत कौर ("ख़ानाबदोश") क्रमशः मनोविश्लेषणवादी और नारीवादी कहानी के स्तंभ हैं।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Firsts in Punjabi Prose & Drama: First Play = Dulhan (1913, I.C. Nanda) | First Full Play = Subhadra (1920, I.C. Nanda) | First Novel = Sundari (1898, Bhai Vir Singh).',
                'Founding Fathers: Father of Drama = I.C. Nanda | Father of Novel = Nanak Singh | Father of Short Story = Kulwant Singh Virk.',
                'Gurdial Singh Milestones: Marhi da Deeva (1964) | Adh Chhanani Raat (Sahitya Akademi 1975) | Bharatiya Jnanpith (1999) — only Punjabi fiction writer with Jnanpith.'
            ],
            pa: [
                'ਪੰਜਾਬੀ ਗਦ ਤੇ ਨਾਟਕ ਵਿੱਚ ਪਹਿਲ: ਪਹਿਲੀ ਇਕਾਂਗੀ = ਦੁਲਹਨ (1913, ਆਈ.ਸੀ. ਨੰਦਾ) | ਪਹਿਲਾ ਪੂਰਾ ਨਾਟਕ = ਸੁਭੱਦਰਾ (1920, ਆਈ.ਸੀ. ਨੰਦਾ) | ਪਹਿਲਾ ਨਾਵਲ = ਸੁੰਦਰੀ (1898, ਭਾਈ ਵੀਰ ਸਿੰਘ)।',
                'ਪਿਤਾਮਾ ਖ਼ਿਤਾਬ: ਨਾਟਕ ਦੇ ਪਿਤਾਮਾ = ਆਈ.ਸੀ. ਨੰਦਾ | ਨਾਵਲ ਦੇ ਪਿਤਾਮਾ = ਨਾਨਕ ਸਿੰਘ | ਨਿੱਕੀ ਕਹਾਣੀ ਦੇ ਬਾਪੂ = ਕੁਲਵੰਤ ਸਿੰਘ ਵਿਰਕ।',
                'ਗੁਰਦਿਆਲ ਸਿੰਘ ਦੇ ਮੀਲ ਪੱਥਰ: ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ (1964) | ਅੱਧ ਚਾਨਣੀ ਰਾਤ (ਸਾਹਿਤ ਅਕਾਦਮੀ 1975) | ਭਾਰਤੀ ਗਿਆਨਪੀਠ (1999) — ਗਿਆਨਪੀਠ ਜਿੱਤਣ ਵਾਲੇ ਇੱਕੋ-ਇੱਕ ਪੰਜਾਬੀ ਗਲਪਕਾਰ।'
            ],
            hi: [
                'पंजाबी गद्य व नाटक में प्रथम: प्रथम एकांकी = दुल्हन (1913, आई.सी. नंदा) | प्रथम पूर्ण नाटक = सुभद्रा (1920) | प्रथम उपन्यास = सुंदरी (1898, भाई वीर सिंह)।',
                'जनक उपाधियाँ: नाटक के जनक = आई.सी. नंदा | उपन्यास के जनक = नानक सिंह | कहानी के पितामह = कुलवंत सिंह विर्क।',
                'गुरदयाल सिंह उपलब्धियां: मढ़ी दा दीवा (1964) | अद्ध चानणी रात (साहित्य अकादमी 1975) | ज्ञानपीठ (1999) — ज्ञानपीठ से सम्मानित एकमात्र पंजाबी कथाकार।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Nanak Singh’s novel "Chitta Lahu" won the Sahitya Akademi Award. Correction: Nanak Singh won the Sahitya Akademi Award in 1962 for his historical novel "Ik Mian Do Talwaran", not for Chitta Lahu.',
                'Misconception: Kulwant Singh Virk’s "Dharti Hethla Balad" is a story about animal husbandry. Correction: It is a profound war story using the mythical bull supporting the earth as a metaphor for a deceased soldier’s father who conceals his grief to protect his comrade.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਨਾਨਕ ਸਿੰਘ ਨੂੰ ਉਹਨਾਂ ਦੇ ਨਾਵਲ \'ਚਿੱਟਾ ਲਹੂ\' ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ। ਸੁਧਾਰ: ਨਾਨਕ ਸਿੰਘ ਨੂੰ 1962 ਵਿੱਚ ਉਹਨਾਂ ਦੇ ਇਤਿਹਾਸਕ ਨਾਵਲ "ਇੱਕ ਮਿਆਨ ਦੋ ਤਲਵਾਰਾਂ" ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ।',
                'ਭੁਲੇਖਾ: ਕੁਲਵੰਤ ਸਿੰਘ ਵਿਰਕ ਦੀ ਕਹਾਣੀ \'ਧਰਤੀ ਹੇਠਲਾ ਬਲਦ\' ਪਸ਼ੂ-ਪਾਲਣ ਬਾਰੇ ਹੈ। ਸੁਧਾਰ: ਇਹ ਫ਼ੌਜੀਆਂ ਦੇ ਪਰਿਵਾਰਾਂ ਦੇ ਤਿਆਗ ਦੀ ਕਹਾਣੀ ਹੈ, ਜਿਸ ਵਿੱਚ ਸ਼ਹੀਦ ਕਰਮ ਸਿੰਘ ਦਾ ਬਾਪੂ ਧਰਤੀ ਹੇਠਲੇ ਧੀਰਜਵਾਨ ਬਲਦ ਦਾ ਪ੍ਰਤੀਕ ਬਣਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: नानक सिंह को उनके उपन्यास चिट्टा लहू के लिए साहित्य अकादमी मिला था। सुधार: नानक सिंह को 1962 में ऐतिहासिक उपन्यास "इक मियान दो तलवारां" हेतु साहित्य अकादमी पुरस्कार मिला था।',
                'भ्रांति: कुलवंत सिंह विर्क की कहानी धरती हेठला बलद पशु-पालन पर आधारित है। सुधार: यह सैन्य पृष्ठभूमि पर आधारित मार्मिक कहानी है जिसमें शहीद के पिता का धैर्य पृथ्वी को धारण करने वाले पौराणिक बैल का प्रतीक है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Analyze the symbolic and realistic conflict in Balwant Gargi’s play "Loha Kutt" (1944) and explain why it provoked controversy upon its debut.',
                    pa: 'ਬਲਵੰਤ ਗਾਰਗੀ ਦੇ ਨਾਟਕ "ਲੋਹਾ ਕੁੱਟ" (1944) ਦੇ ਪ੍ਰਤੀਕਾਤਮਕ ਅਤੇ ਯਥਾਰਥਵਾਦੀ ਦਵੰਦ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ ਅਤੇ ਦੱਸੋ ਕਿ ਇਸ ਦੇ ਮੰਚਨ \'ਤੇ ਵਿਵਾਦ ਕਿਉਂ ਖੜ੍ਹਾ ਹੋਇਆ ਸੀ?',
                    hi: 'बलवंत गार्गी के नाटक "लोहा कुट्ट" (1944) के प्रतीकात्मक एवं यथार्थवादी द्वंद्व का विश्लेषण करें तथा बताएं कि इसके मंचन पर विवाद क्यों खड़ा हुआ था?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Core plot & characters — The play depicts village blacksmith Kaku (an unyielding, rigid, patriarchal figure who beats cold iron and subjugates his family) and his wife Santi and daughter Baino.',
                        'Step 2: Symbolic conflict — "Loha" (iron) represents unbending patriarchal discipline, social morality, and marital bondage; the blacksmith\'s hammer symbolizes the crushing of tender human emotions.',
                        'Step 3: Realistic rebellion — When Baino rebels against an arranged mismatched marriage and elopes with her lover Sarban, followed by Santi escaping with Gajjan, it shattered the idealized myth of rural Punjabi submissiveness, shocking conservative critics.'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਕਥਾਨਕ ਅਤੇ ਪਾਤਰ — ਨਾਟਕ ਪੇਂਡੂ ਲੁਹਾਰ ਕਾਕੂ (ਜੋ ਲੋਹੇ ਵਾਂਗ ਸਖ਼ਤ ਅਤੇ ਪਿਤਾ-ਪੁਰਖੀ ਦਾਬੇ ਦਾ ਪ੍ਰਤੀਕ ਹੈ), ਉਸ ਦੀ ਪਤਨੀ ਸਾਂਤੀ ਅਤੇ ਧੀ ਬੈਣੋ ਦੇ ਦੁਆਲੇ ਘੁੰਮਦਾ ਹੈ।',
                        'ਕਦਮ 2: ਪ੍ਰਤੀਕਾਤਮਕ ਟਕਰਾਅ — "ਲੋਹਾ" ਪਿਤਾ-ਪੁਰਖੀ ਜਾਗੀਰਦਾਰੀ ਜਬਰ ਅਤੇ ਸਮਾਜਿਕ ਬੰਧਨਾਂ ਦਾ ਪ੍ਰਤੀਕ ਹੈ, ਜਦਕਿ ਹਥੌੜਾ ਮਨੁੱਖੀ ਭਾਵਨਾਵਾਂ ਨੂੰ ਦਰੜਨ ਵਾਲੀ ਸੱਤਾ ਦਾ ਸੂਚਕ ਹੈ।',
                        'ਕਦਮ 3: ਯਥਾਰਥਵਾਦੀ ਬਗ਼ਾਵਤ — ਬੈਣੋ ਵੱਲੋਂ ਬੇਜੋੜ ਵਿਆਹ ਵਿਰੁੱਧ ਬਗ਼ਾਵਤ ਕਰਕੇ ਸਰਬਣ ਨਾਲ ਨੱਸ ਜਾਣਾ ਅਤੇ ਸਾਂਤੀ ਵੱਲੋਂ ਗੱਜਣ ਨਾਲ ਚਲੇ ਜਾਣਾ ਪੰਜਾਬੀ ਪਿੰਡ ਦੀ ਆਦਰਸ਼ਕ ਧਾਰਨਾ ਨੂੰ ਤੋੜਦਾ ਸੀ, ਜਿਸ ਕਾਰਨ ਰੂੜ੍ਹੀਵਾਦੀਆਂ ਨੇ ਇਸ ਦਾ ਵਿਰੋਧ ਕੀਤਾ।'
                    ],
                    hi: [
                        'चरण 1: कथानक — नाटक ग्रामीण लोहार काकू (जो सामंती कठोरता का प्रतीक है), उसकी पत्नी शांति और पुत्री बैणो के इर्द-गिर्द घूमता है।',
                        'चरण 2: प्रतीकात्मकता — "लोहा" सामंती बंधनों और स्त्री पर थोपी गई कठोरता का प्रतीक है।',
                        'चरण 3: यथार्थवादी विद्रोह — पुत्री और अंततः पत्नी द्वारा बेमेल विवाह व दमन के विरुद्ध भाग जाना तत्कालीन रूढ़िवादी समाज के लिए असहज था।'
                    ]
                },
                finalAnswer: {
                    en: 'It pitted rigid patriarchal feudalism (iron) against the irresistible natural surge of suppressed human desire and female autonomy.',
                    pa: 'ਇਸ ਨੇ ਸਖ਼ਤ ਪਿਤਾ-ਪੁਰਖੀ ਦਾਬੇ (ਲੋਹਾ) ਦੇ ਮੁਕਾਬਲੇ ਦੱਬੀਆਂ ਹੋਈਆਂ ਕੁਦਰਤੀ ਮਨੁੱਖੀ ਭਾਵਨਾਵਾਂ ਅਤੇ ਨਾਰੀ ਸੁਤੰਤਰਤਾ ਦੀ ਬਗ਼ਾਵਤ ਨੂੰ ਪੇਸ਼ ਕੀਤਾ।',
                    hi: 'इसने सामंती कठोरता (लोहा) के विरुद्ध स्त्री की स्वाभाविक मुक्ति व प्रेम की आकांक्षा के द्वंद्व को निर्भीकता से प्रस्तुत किया।'
                }
            },
            {
                problem: {
                    en: 'Explain how Gurdial Singh’s "Marhi da Deeva" (1964) redefined characterization in the Punjabi novel through the tragic figure of Jagsir.',
                    pa: 'ਗੁਰਦਿਆਲ ਸਿੰਘ ਦੇ ਨਾਵਲ "ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ" (1964) ਨੇ ਜਗਸੀਰ ਸੀਰੀ ਦੇ ਦੁਖਾਂਤਕ ਪਾਤਰ ਰਾਹੀਂ ਪੰਜਾਬੀ ਨਾਵਲ ਦੀ ਪਾਤਰ-ਉਸਾਰੀ ਨੂੰ ਕਿਵੇਂ ਨਵਾਂ ਮੋੜ ਦਿੱਤਾ?',
                    hi: 'गुरदयाल सिंह के उपन्यास "मढ़ी दा दीवा" (1964) ने जगसीर सीरी के त्रासद पात्र के माध्यम से पंजाबी उपन्यास के चरित्र-चित्रण को कैसे नया मोड़ दिया?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Shift away from romantic heroism — Prior Punjabi novels featured idealized, romantic, or heroic protagonists (e.g. Bhai Vir Singh’s Sundari, Nanak Singh’s romantic reformers).',
                        'Step 2: Subaltern rural realism — Gurdial Singh centered an impoverished, low-caste, landless agricultural laborer (*Seeri* / bonded sharecropper), Jagsir, whose attachment to land he does not own leads to utter alienation.',
                        'Step 3: Tragic psychological depth — Jagsir’s quiet suffering, drug addiction, silent unfulfilled love for Bhani, and eventual uncelebrated death on his father’s memorial mound (*Marhi*) established modern sociological tragedy in Punjabi literature.'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਰੁਮਾਂਚਿਕ ਨਾਇਕਤਵ ਦਾ ਤਿਆਗ — ਪਹਿਲੇ ਪੰਜਾਬੀ ਨਾਵਲਾਂ ਵਿੱਚ ਨਾਇਕ ਆਦਰਸ਼ਕ, ਬਹਾਦਰ ਜਾਂ ਸਮਾਜ ਸੁਧਾਰਕ ਹੁੰਦੇ ਸਨ (ਜਿਵੇਂ ਸੁੰਦਰੀ ਜਾਂ ਨਾਨਕ ਸਿੰਘ ਦੇ ਪਾਤਰ)।',
                        'ਕਦਮ 2: ਦਲਿਤ-ਆਂਚਲਿਕ ਯਥਾਰਥ — ਗੁਰਦਿਆਲ ਸਿੰਘ ਨੇ ਜ਼ਮੀਨ-ਵਿਹੂਣੇ ਦਲਿਤ ਕਾਮੇ (ਜਗਸੀਰ ਸੀਰੀ) ਨੂੰ ਕੇਂਦਰ ਵਿੱਚ ਰੱਖਿਆ, ਜੋ ਸਾਰੀ ਉਮਰ ਦੂਜਿਆਂ ਦੀ ਜ਼ਮੀਨ ਵਾਹ ਕੇ ਵੀ ਬੇਗਾਨਗੀ ਦਾ ਸ਼ਿਕਾਰ ਰਹਿੰਦਾ ਹੈ।',
                        'ਕਦਮ 3: ਮਨੋਵਿਗਿਆਨਕ ਦੁਖਾਂਤ — ਜਗਸੀਰ ਦਾ ਚੁੱਪ-ਚਾਪ ਘੁਲਣਾ, ਅਫ਼ੀਮ ਦਾ ਨਸ਼ਾ, ਭਾਣੀ ਲਈ ਅਣਕਿਹਾ ਪਵਿੱਤਰ ਪ੍ਰੇਮ ਅਤੇ ਪਿਤਾ ਦੀ ਮੜ੍ਹੀ \'ਤੇ ਬੁਝਦੇ ਦੀਵੇ ਵਾਂਗ ਦਮ ਤੋੜਨਾ ਪੰਜਾਬੀ ਨਾਵਲ ਦਾ ਸਿਖਰ ਦੁਖਾਂਤ ਬਣਿਆ।'
                    ],
                    hi: [
                        'चरण 1: आदर्शवादी नायकत्व का अंत — पूर्ववर्ती उपन्यासों के वीर अथवा उपदेशक नायकों के स्थान पर वास्तविक उपेक्षित वर्ग को केंद्र में लाया गया।',
                        'चरण 2: दलित-आंचलिक यथार्थ — भूमिहीन सीरी (मज़दूर) जगसीर को नायक बनाया गया जो जीवन भर दूसरों के खेत जोतकर भी अंततः बेदख़ल व उपेक्षित रहता है।',
                        'चरण 3: मनोवैज्ञानिक गहराई — मौन विरह, अफ़ीम की लत और अपने ही खेत की मेढ़ पर पिता की मढ़ी के दीए की भांति बुझ जाना आधुनिक पंजाबी उपन्यास की अमूल्य उपलब्धि है।'
                    ]
                },
                finalAnswer: {
                    en: 'It replaced romanticized heroic protagonists with the quiet, helpless, authentic tragedy of a marginalized landless Dalit farm laborer.',
                    pa: 'ਇਸ ਨੇ ਆਦਰਸ਼ਕ ਨਾਇਕਾਂ ਦੀ ਥਾਂ ਪੇਂਡੂ ਦਲਿਤ ਸੀਰੀ ਦੇ ਅੰਦਰੂਨੀ ਦਰਦ, ਬੇਵੱਸੀ ਅਤੇ ਯਥਾਰਥਕ ਦੁਖਾਂਤ ਨੂੰ ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਕੇਂਦਰ ਵਿੱਚ ਸਥਾਪਿਤ ਕੀਤਾ।',
                    hi: 'इसने आदर्शवादी नायकों के स्थान पर भूमिहीन दलित मज़दूर के मूक क्रंदन, बेबसी और प्रामाणिक सामाजिक त्रासदी को प्रतिष्ठित किया।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-lit-pd-1',
                question: {
                    en: 'Which one-act play by I.C. Nanda won the play competition organized by Norah Richards at Lahore in 1913?',
                    pa: '1913 ਵਿੱਚ ਲਾਹੌਰ ਵਿਖੇ ਨੋਰਾ ਰਿਚਰਡਜ਼ ਵੱਲੋਂ ਕਰਵਾਏ ਮੁਕਾਬਲੇ ਵਿੱਚ ਆਈ.ਸੀ. ਨੰਦਾ ਦੀ ਕਿਹੜੀ ਇਕਾਂਗੀ ਨੇ ਪਹਿਲਾ ਇਨਾਮ ਜਿੱਤਿਆ ਸੀ?',
                    hi: '1913 में लाहौर में नोरा रिचर्ड्स द्वारा आयोजित प्रतियोगिता में आई.सी. नंदा की किस एकांकी ने प्रथम पुरस्कार जीता था?'
                },
                answer: {
                    en: 'Dulhan / Suhag (ਦੁਲਹਨ / ਸੁਹਾਗ).',
                    pa: 'ਦੁਲਹਨ / ਸੁਹਾਗ (Dulhan / Suhag)।',
                    hi: 'दुल्हन / सुहाग (Dulhan / Suhag)।'
                }
            },
            {
                id: 'fc-lit-pd-2',
                question: {
                    en: 'For which research book on Punjabi stage did Balwant Gargi receive the Sahitya Akademi Award in 1962?',
                    pa: 'ਬਲਵੰਤ ਗਾਰਗੀ ਨੂੰ 1962 ਵਿੱਚ ਪੰਜਾਬੀ ਰੰਗਮੰਚ ਬਾਰੇ ਕਿਸ ਖੋਜ ਪੁਸਤਕ ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਮਿਲਿਆ ਸੀ?',
                    hi: 'बलवंत गार्गी को 1962 में पंजाबी रंगमंच पर किस शोध पुस्तक हेतु साहित्य अकादमी पुरस्कार प्राप्त हुआ था?'
                },
                answer: {
                    en: 'Rangmanch (ਰੰਗਮੰਚ).',
                    pa: 'ਰੰਗਮੰਚ (Rangmanch)।',
                    hi: 'रंगमंच (Rangmanch)।'
                }
            },
            {
                id: 'fc-lit-pd-3',
                question: {
                    en: 'Who is the protagonist of Gurdial Singh’s iconic novel "Marhi da Deeva" (1964)?',
                    pa: 'ਗੁਰਦਿਆਲ ਸਿੰਘ ਦੇ ਸ਼ਾਹਕਾਰ ਨਾਵਲ "ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ" (1964) ਦਾ ਮੁੱਖ ਪਾਤਰ (ਨਾਇਕ) ਕੌਣ ਹੈ?',
                    hi: 'गुरदयाल सिंह के कालजयी उपन्यास "मढ़ी दा दीवा" (1964) का मुख्य पात्र (नायक) कौन है?'
                },
                answer: {
                    en: 'Jagsir / Jagseera (ਜਗਸੀਰ / ਜਗਸੀਰਾ).',
                    pa: 'ਜਗਸੀਰ / ਜਗਸੀਰਾ (Jagsir).',
                    hi: 'जगसीर / जगसीरा (Jagsir).'
                }
            },
            {
                id: 'fc-lit-pd-4',
                question: {
                    en: 'Which iconic short story by Kulwant Singh Virk features the characters Karam Singh, Man Singh, and the patient elderly father?',
                    pa: 'ਕੁਲਵੰਤ ਸਿੰਘ ਵਿਰਕ ਦੀ ਕਿਹੜੀ ਅਮਰ ਕਹਾਣੀ ਵਿੱਚ ਕਰਮ ਸਿੰਘ, ਮਾਨ ਸਿੰਘ ਅਤੇ ਧੀਰਜਵਾਨ ਬਜ਼ੁਰਗ ਬਾਪੂ ਦੇ ਪਾਤਰ ਆਉਂਦੇ ਹਨ?',
                    hi: 'कुलवंत सिंह विर्क की किस प्रसिद्ध कहानी में कर्म सिंह, मान सिंह और धैर्यवान वृद्ध पिता के पात्र आते हैं?'
                },
                answer: {
                    en: 'Dharti Hethla Balad (ਧਰਤੀ ਹੇਠਲਾ ਬਲਦ — The Bull Beneath the Earth).',
                    pa: 'ਧਰਤੀ ਹੇਠਲਾ ਬਲਦ (Dharti Hethla Balad)।',
                    hi: 'धरती हेठला बलद (Dharti Hethla Balad)।'
                }
            }
        ]
    },

    // =========================================================================
    // 5. PUNJABI VYAKARAN & LINGUISTICS (punjabi-vyakaran-linguistics)
    // =========================================================================
    {
        topicId: 'punjabi-vyakaran-linguistics',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Authoritative ERB Punjab Master Cadre Punjabi Linguistics and Grammar blueprint covering Origin & Genealogy of Punjabi, Gurmukhi Script Evolution, Phonology (41 letters, vowels, lagakhar, dutt, nasals), Punjabi Tone System, Morphology (Vikari & Avikari parts of speech), Syntax (SOV order, sentence transformation), and Idioms/Proverbs.'
        },
        bookRefs: [
            {
                title: 'Punjabi Bhasha Vigyān ate Vyakaran',
                author: 'Dr. Harkirat Singh / Punjabi University Patiala',
                chapter: 'Linguistic Lineage, Phonetics, Tones, and Word Classes',
                relevance: 'Standard university authority for phonological inventory, tone categorization, and grammatical parsing.'
            },
            {
                title: 'Vaddha Punjabi Vyakaran',
                author: 'Dr. Joginder Singh Puar et al. / Punjabi Bhasha Academy',
                chapter: 'Morphology, Syntax, Gemination, and Idiomatic Usage',
                relevance: 'Official syllabus reference for Master Cadre Punjabi grammar rules, derivations, and structural transformations.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Genealogy of Punjabi Language & Gurmukhi Script]
1. **Linguistic Genealogy of Punjabi (ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਪਿਛੋਕੜ):**
   - **Phylum:** Indo-European (*ਭਾਰੋਪੀ ਭਾਸ਼ਾ ਪਰਿਵਾਰ*) $\to$ **Sub-family:** Indo-Iranian (*ਇੰਡੋ-ਇਰਾਨੀ*) $\to$ **Branch:** Indo-Aryan (*ਭਾਰਤੀ ਆਰੀਆ ਭਾਸ਼ਾਵਾਂ*).
   - Historical Stages of Indo-Aryan:
     1. *Old Indo-Aryan (OIA, 1500–500 BCE):* Vedic Sanskrit & Classical Sanskrit.
     2. *Middle Indo-Aryan (MIA, 500 BCE–1000 CE):* Pali, Prakrits (Sauraseni, Magadhi, Maharashtri, Paishachi) $\to$ Apabhramshas (Takki, Sauraseni, Kaikeyi Apabhramsha).
     3. *Modern Indo-Aryan (NIA, 1000 CE–Present):* Modern Punjabi, Hindi, Bengali, Gujarati, Marathi, Sindhi.
   - Linguists (Dr. Prem Prakash Singh, Dr. Harkirat Singh, George Grierson): Modern Punjabi developed primarily from the Northwestern Prakrit / Paishachi and Sauraseni Apabhramsha with ancient Vedic substratum roots preserved along the Sapta Sindhu basin.
2. **Evolution of Gurmukhi Lipi (ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਵਿਕਾਸ):**
   - Evolution line: **Brahmi script** (3rd c. BCE) $\to$ Northern Brahmi $\to$ **Gupta Lipi** (4th–5th c. CE) $\to$ **Kutila / Siddhamatrika** (6th c.) $\to$ **Sharada Lipi** (8th–10th c. Kashmir/Punjab) $\to$ **Landa / Mahajani / Takri** $\to$ **Gurmukhi**.
   - Standardized, arranged systematically, and given canonical pedagogical status by the Second Sikh Guru, **Sri Guru Angad Dev Ji** (1504–1552 CE) at Khadur Sahib. Named *Gurmukhi* ("from the mouth of the Guru / oriented towards the Divine").

---

### [Level I: Intermediate — Phonology, Tonal System & Word Classes]
1. **Dhuni Vigyān (ਪੰਜਾਬੀ ਧੁਨੀ ਵਿਗਿਆਨ — Phonetics & Phonology):**
   - **Varnmala (Alphabet Inventory):**
     - Traditional: **35 letters** (*ਪੈਂਤੀ ਅੱਖਰੀ* — ੳ to ੜ).
     - Persian-Arabic Borrowings with Foot-Dot (*ਪੈਰ ਬਿੰਦੀ ਵਾਲੇ ਅੱਖਰ* — 5 added by Punjab University scholars: **ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼** + 1 later standardized: **ਲ਼** [retroflex lateral]).
     - **Total Alphabet Count = 41 letters (41 ਅੱਖਰ)**.
   - **3 Swar Vahak (ਸਵਰ ਵਾਹਕ / Vowel Carriers):** **ੳ, ਅ, ੲ**. They cannot stand as independent sounds without vowel diacritics, except Mukta (ਅ).
     - They yield **10 Vowel Sounds (10 ਸਵਰ ਧੁਨੀਆਂ / ਲਗਾਂ):**
       - With **ੳ (3 vowels):** ਔਂਕੜ (ਉ), ਦੁਲੈਂਕੜ (ਊ), ਹੋੜਾ (ਓ - open top *ਓ*).
       - With **ਅ (4 vowels):** ਮੁਕਤਾ (ਅ), ਕੰਨਾ (ਆ), ਦੁਲਾਵਾਂ (ਐ), ਕਨੌੜਾ (ਔ).
       - With **ੲ (3 vowels):** ਸਿਹਾਰੀ (ਇ), ਬਿਹਾਰੀ (ਈ), ਲਾਂ (ਏ).
       - **Mnemonic Rule:** ੳ-3, ਅ-4, ੲ-3 = 10 Vowels.
   - **3 Lagakhar (ਲਗਾਖਰ — Auxiliary signs attached to vowels):**
     1. **ਬਿੰਦੀ (Bindi — ਂ):** Nasalization marker used with 6 long vowels (ਕੰਨਾ, ਬਿਹਾਰੀ, ਲਾਂ, ਦੁਲਾਵਾਂ, ਹੋੜਾ, ਕਨੌੜਾ).
     2. **ਟਿੱਪੀ (Tippi — ੰ):** Nasalization marker used with 4 short vowels (ਮੁਕਤਾ, ਸਿਹਾਰੀ, ਔਂਕੜ, ਦੁਲੈਂਕੜ).
     3. **ਅੱਧਕ (Addhak — ੱ):** Gemination / stress sign indicating doubled consonant sound (*ਦੁੱਤ ਧੁਨੀ / ਬਲ*). Used primarily with Mukta, Sihari, and Aunkad (e.g., ਸੱਚ, ਦਿੱਲੀ, ਕੁੱਤਾ).
   - **3 Dutt Akhar (ਦੁੱਤ ਅੱਖਰ / Consonants in Foot — ਪੈਰੀਂ ਪੈਣ ਵਾਲੇ ਅੱਖਰ):** **ਹ, ਰ, ਵ** (e.g. ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ-ਜੀਵਨੀ).
   - **5 Nasal Consonants (ਨਾਸਕੀ ਵਿਅੰਜਨ):** **ਙ** (Nganga), **ਞ** (Nyanja), **ਣ** (Nana), **ਨ** (Noon), **ਮ** (Meem).
   - **Plosive vs Non-Plosive Consonants:**
     - **15 Dakven Vyanjan (ਡੱਕਵੇਂ ਵਿਅੰਜਨ / Stops):** First 3 consonants of the 5 vargas: ਕ, ਖ, ਗ; ਚ, ਛ, ਜ; ਟ, ਠ, ਡ; ਤ, ਥ, ਦ; ਪ, ਫ, ਬ.
     - **Adakven Vyanjan (ਅਡੱਕਵੇਂ ਵਿਅੰਜਨ):** Fricatives (ਸ਼, ਸ, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਹ), Trill (ਰ), Flap (ੜ), Laterals (ਲ, ਲ਼), Semi-vowels (ਯ, ਵ).

2. **Tone System in Punjabi (ਸੁਰ ਪ੍ਰਣਾਲੀ — Tone):**
   - **Punjabi is unique among Modern Indo-Aryan languages as a TONAL LANGUAGE (ਸੁਰ-ਬੱਧ ਭਾਸ਼ਾ)**. Discovered and systematically theorized by Dr. Siddheshwar Varma and Prof. Arun.
   - Historically, Old Indo-Aryan voiced aspirated stops (**ਘ, ਝ, ਢ, ਧ, ਭ**) and the glottal fricative (**ਹ**) lost their aspiration in Punjabi and transformed into **Tones (ਸੁਰਾਂ)**:
     1. **High Tone (ਉੱਚੀ ਸੁਰ / Rising-Falling — symbol: \` or ˆ):** Produced when a voiced aspirate occurs at the **beginning of a word**; the voiced aspirate becomes a voiceless stop with high pitch on the following vowel (e.g., **ਘੋੜਾ** $\to$ pronounced *kòṛa* / *ਕ੍ਹੋੜਾ*; **ਭਾਰ** $\to$ *pàr*).
     2. **Mid Tone (ਮੱਧਮ ਸੁਰ):** Standard neutral baseline pitch; normal syllables without historical aspirates.
     3. **Low Tone (ਨੀਵੀਂ ਸੁਰ / Falling-Rising — symbol: ´):** Produced when a voiced aspirate or 'ਹ' occurs in the **middle or end of a word**; the preceding vowel receives a low-dipping pitch (e.g., **ਲਾਭ** $\to$ pronounced *láb*; **ਚਾਹ** $\to$ *chá*; **ਦੁੱਧ** $\to$ *dúdd*).

3. **Shabad Bhed (ਸ਼ਬਦ ਭੇਦ — 8 Parts of Speech):**
   - **Vikari Shabad (ਵਿਕਾਰੀ ਸ਼ਬਦ — 4 types):** Words that change form according to gender, number, and case:
     1. **ਨਾਂਵ (Noun):** 5 types — ਆਮ ਨਾਂਵ/ਜਾਤੀਵਾਚਕ (ਕਿਤਾਬ), ਖ਼ਾਸ ਨਾਂਵ/ਨਿੱਜਵਾਚਕ (ਅੰਮ੍ਰਿਤਸਰ), ਇਕੱਠਵਾਚਕ (ਫ਼ੌਜ), ਵਸਤੂਵਾਚਕ (ਦੁੱਧ), ਭਾਵਵਾਚਕ (ਸੁੰਦਰਤਾ).
     2. **ਪੜਨਾਂਵ (Pronoun):** 6 types — ਪੁਰਖਵਾਚਕ (ਉੱਤਮ: ਮੈਂ; ਮੱਧਮ: ਤੂੰ; ਅੰਨਿਆ: ਉਹ), ਨਿੱਜਵਾਚਕ (ਆਪ, ਖ਼ੁਦ), ਨਿਸ਼ਚੇਵਾਚਕ (ਨਿਕਟ: ਇਹ; ਦੂਰ: ਉਹ), ਅਨਿਸ਼ਚੇਵਾਚਕ (ਕੋਈ, ਕੁਝ), ਸੰਬੰਧਵਾਚਕ (ਜੋ, ਜਿਹੜਾ), ਪ੍ਰਸ਼ਨਵਾਚਕ (ਕੌਣ, ਕਿਹੜਾ).
     3. **ਵਿਸ਼ੇਸ਼ਣ (Adjective):** 5 types — ਗੁਣਵਾਚਕ (ਚੰਗਾ), ਸੰਖਿਆਵਾਚਕ (ਦੋ, ਦੂਜਾ), ਮਿਣਤੀਵਾਚਕ/ਪਰਿਮਾਣਵਾਚਕ (ਬਹੁਤ, ਕਿਲੋ), ਨਿਸ਼ਚੇਵਾਚਕ (ਇਹ ਮੁੰਡਾ), ਪੜਨਾਂਵੀ ਵਿਸ਼ੇਸ਼ਣ (ਕਿਹੜੀ ਕਿਤਾਬ).
     4. **ਕਿਰਿਆ (Verb):** ਅਕਰਮਕ ਕਿਰਿਆ (Intransitive), ਸਕਰਮਕ ਕਿਰਿਆ (Transitive); ਸਹਾਇਕ ਕਿਰਿਆ (ਹੈ, ਸੀ), ਮੁੱਖ ਕਿਰਿਆ, ਸੰਚਾਲਕ ਕਿਰਿਆ; ਪ੍ਰੇਰਨਾਰਥਕ ਕਿਰਿਆ (ਸਧਾਰਨ: ਪੜ੍ਹਨਾ $\to$ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਾਉਣਾ $\to$ ਦੂਹਰੀ ਪ੍ਰੇਰਨਾਰਥਕ: ਪੜ੍ਹਵਾਉਣਾ).
   - **Avikari Shabad (ਅਵਿਕਾਰੀ ਸ਼ਬਦ — 4 types):** Words that remain invariant in form:
     5. **ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ (Adverb):** 8 types — ਕਾਲਵਾਚਕ (ਹੁਣ, ਕੱਲ੍ਹ), ਸਥਾਨਵਾਚਕ (ਅੰਦਰ, ਬਾਹਰ), ਪ੍ਰਕਾਰਵਾਚਕ (ਹੌਲੀ, ਤੇਜ਼), ਕਾਰਣਵਾਚਕ (ਕਿਉਂਕਿ), ਮਿਣਤੀ/ਪਰਿਮਾਣਵਾਚਕ (ਥੋੜ੍ਹਾ), ਸੰਖਿਆਵਾਚਕ (ਮੁੜ-ਮੁੜ), ਨਿਰਣੇਵਾਚਕ (ਹਾਂ, ਨਹੀਂ), ਨਿਸ਼ਚੇਵਾਚਕ (ਜ਼ਰੂਰ, ਬੇਸ਼ੱਕ).
     6. **ਸੰਬੰਧਕ (Postposition):** ਪੂਰਨ ਸੰਬੰਧਕ (ਦਾ, ਦੇ, ਦੀ, ਨੂੰ, ਨੇ — can stand alone); ਅਪੂਰਨ ਸੰਬੰਧਕ (ਕੋਲ, ਨੇੜੇ, ਦੂਰ — require a Puran sambandhak e.g. ਦੇ ਕੋਲ); ਦੁਬਾਜਰੇ ਸੰਬੰਧਕ (ਵਿਚ, ਰਾਹੀਂ — can function either way).
     7. **ਯੋਜਕ (Conjunction):** ਸਮਾਨ ਯੋਜਕ (Coordinate — ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ); ਅਧੀਨ ਯੋਜਕ (Subordinate — ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਤਾਂ ਜੋ).
     8. **ਵਿਸਮਕ (Interjection):** 9 types — ਪ੍ਰਸੰਨਤਾ (ਵਾਹ!), ਸ਼ੋਕ (ਹਾਏ!), ਹੈਰਾਨੀ (ਹੈਂ!), ਸਤਿਕਾਰ (ਧੰਨ ਭਾਗ!), ਫਿਟਕਾਰ (ਲੱਖ ਲਾਹਣਤ!), ਅਸੀਸ (ਜਿਊਂਦਾ ਰਹਿ!), ਇੱਛਾ (ਕਾਸ਼!), ਸੰਬੋਧਨੀ (ਓਏ!), ਸੂਚਨਾ (ਵੇਖੋ!).

---

### [Level A: Advanced — Vak Vigyān, Akhan & Muhavare]
1. **Vak Vigyān (ਪੰਜਾਬੀ ਵਾਕ ਵਿਗਿਆਨ — Syntax):**
   - **Word Order:** Canonical Punjabi word order is strictly **SOV (ਕਰਤਾ + ਕਰਮ + ਕਿਰਿਆ / Subject + Object + Verb)**.
   - **Types of Sentences based on Structure:**
     - **ਸਾਧਾਰਨ ਵਾਕ (Simple Sentence):** Contains a single independent clause with one finite verb (*ਇੱਕ ਮੁੱਖ ਕਿਰਿਆ*). Example: *"ਕੁਲਦੀਪ ਸਕੂਲ ਜਾਂਦਾ ਹੈ।"*
     - **ਸੰਯੁਕਤ ਵਾਕ (Compound Sentence):** Formed by joining two or more independent simple clauses using **ਸਮਾਨ ਯੋਜਕ** (*ਅਤੇ, ਤੇ, ਪਰ, ਸਗੋਂ, ਜਾਂ*). Example: *"ਰਾਮ ਪੜ੍ਹਦਾ ਹੈ ਅਤੇ ਸ਼ਾਮ ਖੇਡਦਾ ਹੈ।"*
     - **ਮਿਸ਼ਰਤ ਵਾਕ (Complex Sentence):** Comprises one main clause (*ਪ੍ਰਧਾਨ ਉਪਵਾਕ*) and one or more subordinate clauses (*ਅਧੀਨ ਉਪਵਾਕ*) joined by **ਅਧੀਨ ਯੋਜਕ** (*ਕਿ, ਜੇ...ਤਾਂ, ਕਿਉਂਕਿ, ਤਾਂ ਜੋ*). Example: *"ਮਾਸਟਰ ਜੀ ਨੇ ਕਿਹਾ ਕਿ ਕੱਲ੍ਹ ਸਕੂਲ ਬੰਦ ਰਹੇਗਾ।"*
2. **Akhan ate Muhavare (ਅਖਾਣ ਅਤੇ ਮੁਹਾਵਰੇ):**
   - **ਮੁਹਾਵਰਾ (Idiom):** Flexible phrase that ends in a verb form with *'ਨਾ'* or *'ਣਾ'* (e.g., *ਅੱਖਾਂ ਵਿਖਾਉਣਾ, ਕੰਨ ਭਰਨੇ, ਲਹੂ ਪਸੀਨਾ ਇੱਕ ਕਰਨਾ*).
   - **ਅਖਾਣ (Proverb):** Complete, invariant sentence encapsulating folk wisdom or moral judgment (e.g., *ਆਪੇ ਫਾਥੜੀਏ ਤੈਨੂੰ ਕੌਣ ਛੁਡਾਏ, ਨੱਚ ਨਾ ਜਾਣੇ ਆਂਗਣ ਟੇਢਾ, ਡੁੱਲੇ ਬੇਰਾਂ ਦਾ ਅਜੇ ਕੁਝ ਨਹੀਂ ਵਿਗੜਿਆ*).`,

            pa: `### [Level B: Basic — ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਪਿਛੋਕੜ ਅਤੇ ਗੁਰਮੁਖੀ ਲਿਪੀ]
1. **ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਪਿਛੋਕੜ:**
   - **ਪਰਿਵਾਰ:** ਭਾਰੋਪੀ (ਇੰਡੋ-ਯੂਰਪੀਅਨ) $\to$ ਇੰਡੋ-ਇਰਾਨੀ $\to$ **ਭਾਰਤੀ ਆਰੀਆ ਸ਼ਾਖ਼ਾ**।
   - ਇਤਿਹਾਸਕ ਪੜਾਅ:
     - ਪ੍ਰਾਚੀਨ ਭਾਰਤੀ ਆਰੀਆ (1500–500 BCE): ਵੈਦਿਕ ਤੇ ਲੌਕਿਕ ਸੰਸਕ੍ਰਿਤ।
     - ਮੱਧਕਾਲੀ ਭਾਰਤੀ ਆਰੀਆ (500 BCE–1000 CE): ਪਾਲੀ, ਪ੍ਰਾਕ੍ਰਿਤਾਂ (ਸ਼ੌਰਸੇਨੀ, ਪੈਸ਼ਾਚੀ) ਅਤੇ ਅਪਭ੍ਰੰਸ਼ (ਟੱਕੀ, ਕੈਕੇਈ ਅਪਭ੍ਰੰਸ਼)।
     - ਆਧੁਨਿਕ ਭਾਰਤੀ ਆਰੀਆ (1000 CE ਤੋਂ ਬਾਅਦ): ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਭਾਸ਼ਾ।
   - ਭਾਸ਼ਾ ਵਿਗਿਆਨੀਆਂ (ਡਾ. ਪ੍ਰੇਮ ਪ੍ਰਕਾਸ਼ ਸਿੰਘ, ਜਾਰਜ ਗ੍ਰੀਅਰਸਨ) ਅਨੁਸਾਰ ਪੰਜਾਬੀ ਦਾ ਨਿਕਾਸ ਉੱਤਰ-ਪੱਛਮੀ ਪ੍ਰਾਕ੍ਰਿਤ (ਪੈਸ਼ਾਚੀ/ਸ਼ੌਰਸੇਨੀ ਅਪਭ੍ਰੰਸ਼) ਤੋਂ ਹੋਇਆ ਹੈ।
2. **ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਵਿਕਾਸ:**
   - ਵਿਕਾਸ ਲੜੀ: **ਬ੍ਰਾਹਮੀ ਲਿਪੀ** $\to$ ਗੁਪਤ ਲਿਪੀ $\to$ ਕੁਟਿਲ ਲਿਪੀ $\to$ **ਸ਼ਾਰਦਾ ਲਿਪੀ** $\to$ ਲੰਡੇ/ਟਾਕਰੀ $\to$ **ਗੁਰਮੁਖੀ ਲਿਪੀ**।
   - ਦੂਜੇ ਪਾਤਸ਼ਾਹ **ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ** ਨੇ ਖਡੂਰ ਸਾਹਿਬ ਵਿਖੇ 35 ਅੱਖਰਾਂ ਦੀ ਤਰਤੀਬ ਨੂੰ ਸੋਧ ਕੇ ਮਿਆਰੀ ਰੂਪ ਦਿੱਤਾ, ਬਾਲਬੋਧ ਤਿਆਰ ਕੀਤੇ ਅਤੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਨੂੰ ਸਿੱਖਿਆ ਦਾ ਮਾਧਿਅਮ ਬਣਾਇਆ।

---

### [Level I: Intermediate — ਧੁਨੀ ਵਿਗਿਆਨ, ਸੁਰ ਪ੍ਰਣਾਲੀ ਅਤੇ ਸ਼ਬਦ ਭੇਦ]
1. **ਧੁਨੀ ਵਿਗਿਆਨ (Phonology):**
   - **ਵਰਣਮਾਲਾ:** ਮੂਲ 35 ਅੱਖਰ + 6 ਫ਼ਾਰਸੀ-ਅਰਬੀ ਧੁਨੀਆਂ (ਪੈਰ-ਬਿੰਦੀ ਵਾਲੇ: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼) = **ਕੁੱਲ 41 ਅੱਖਰ**।
   - **3 ਸਵਰ ਵਾਹਕ:** **ੳ, ਅ, ੲ**। ਇਹਨਾਂ ਤੋਂ **10 ਸਵਰ ਧੁਨੀਆਂ (ਲਗਾਂ)** ਬਣਦੀਆਂ ਹਨ:
     - ੳ ਨਾਲ (3): ਔਂਕੜ (ਉ), ਦੁਲੈਂਕੜ (ਊ), ਹੋੜਾ (ਓ)।
     - ਅ ਨਾਲ (4): ਮੁਕਤਾ (ਅ), ਕੰਨਾ (ਆ), ਦੁਲਾਵਾਂ (ਐ), ਕਨੌੜਾ (ਔ)।
     - ੲ ਨਾਲ (3): ਸਿਹਾਰੀ (ਇ), ਬਿਹਾਰੀ (ਈ), ਲਾਂ (ਏ)।
     - ਫ਼ਾਰਮੂਲਾ: **ੳ-3, ਅ-4, ੲ-3 = ਕੁੱਲ 10 ਸਵਰ**।
   - **3 ਲਗਾਖਰ:** **ਬਿੰਦੀ (ਂ)** (6 ਦੀਰਘ ਸਵਰਾਂ ਨਾਲ), **ਟਿੱਪੀ (ੰ)** (4 ਲਘੂ ਸਵਰਾਂ ਨਾਲ), **ਅੱਧਕ (ੱ)** (ਦੁੱਤ ਧੁਨੀ/ਦਬਾਅ ਲਈ)।
   - **3 ਦੁੱਤ ਅੱਖਰ (ਪੈਰ ਵਿਚ ਪੈਣ ਵਾਲੇ):** **ਹ, ਰ, ਵ** (ਜਿਵੇਂ ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)।
   - **5 ਨਾਸਕੀ ਵਿਅੰਜਨ:** **ਙ, ਞ, ਣ, ਨ, ਮ**।
   - **ਡੱਕਵੇਂ ਵਿਅੰਜਨ:** 15 (ਕ, ਖ, ਗ; ਚ, ਛ, ਜ; ਟ, ਠ, ਡ; ਤ, ਥ, ਦ; ਪ, ਫ, ਬ)।
2. **ਪੰਜਾਬੀ ਦੀ ਸੁਰ ਪ੍ਰਣਾਲੀ (Tone System):**
   - **ਪੰਜਾਬੀ ਭਾਰਤੀ ਆਰੀਆ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਇੱਕੋ-ਇੱਕ ਸੁਰ-ਬੱਧ (Tonal) ਭਾਸ਼ਾ ਹੈ।**
   - ਸੰਸਕ੍ਰਿਤ ਦੇ ਘੋਸ਼ ਮਹਾਂਪ੍ਰਾਣ ਵਿਅੰਜਨਾਂ (**ਘ, ਝ, ਢ, ਧ, ਭ**) ਅਤੇ **'ਹ'** ਦੀ ਧੁਨੀ ਦੇ ਲੋਪ ਹੋਣ ਕਾਰਨ ਪੰਜਾਬੀ ਵਿੱਚ ਤਿੰਨ ਸੁਰਾਂ ਪੈਦਾ ਹੋਈਆਂ:
     - **ਉੱਚੀ ਸੁਰ (High Tone):** ਜਦੋਂ ਘ, ਝ, ਢ, ਧ, ਭ ਸ਼ਬਦ ਦੇ **ਸ਼ੁਰੂ** ਵਿੱਚ ਆਉਣ (ਜਿਵੇਂ **ਘੋੜਾ** $\to$ *ਕ੍ਹੋੜਾ*, **ਭਾਰ** $\to$ *ਪ੍ਹਾਰ*)।
     - **ਮੱਧਮ ਸੁਰ (Mid Tone):** ਸਾਧਾਰਨ ਸੁਰ ਜਿਸ ਵਿੱਚ ਕੋਈ ਵਿਸ਼ੇਸ਼ ਉਤਾਰ-ਚੜ੍ਹਾਅ ਨਹੀਂ ਹੁੰਦਾ।
     - **ਨੀਵੀਂ ਸੁਰ (Low Tone):** ਜਦੋਂ ਇਹ ਵਿਅੰਜਨ ਜਾਂ 'ਹ' ਸ਼ਬਦ ਦੇ **ਵਿਚਕਾਰ ਜਾਂ ਅੰਤ** ਵਿੱਚ ਆਉਣ (ਜਿਵੇਂ **ਲਾਭ** $\to$ *ਲਾਭ਼*, **ਚਾਹ** $\to$ *ਚਾਅ* ਨੀਵੀਂ ਸੁਰ ਨਾਲ)।
3. **8 ਸ਼ਬਦ ਭੇਦ:**
   - **ਵਿਕਾਰੀ ਸ਼ਬਦ (4):** ਨਾਂਵ (5 ਕਿਸਮਾਂ), ਪੜਨਾਂਵ (6 ਕਿਸਮਾਂ), ਵਿਸ਼ੇਸ਼ਣ (5 ਕਿਸਮਾਂ), ਕਿਰਿਆ (ਅਕਰਮਕ, ਸਕਰਮਕ, ਪ੍ਰੇਰਨਾਰਥਕ)।
   - **ਅਵਿਕਾਰੀ ਸ਼ਬਦ (4):** ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ (8 ਕਿਸਮਾਂ), ਸੰਬੰਧਕ (ਪੂਰਨ, ਅਪੂਰਨ, ਦੁਬਾਜਰੇ), ਯੋਜਕ (ਸਮਾਨ, ਅਧੀਨ), ਵਿਸਮਕ (9 ਕਿਸਮਾਂ)।

---

### [Level A: Advanced — ਵਾਕ ਵਿਗਿਆਨ ਅਤੇ ਮੁਹਾਵਰੇ]
1. **ਵਾਕ ਬਣਤਰ:**
   - ਪੰਜਾਬੀ ਵਾਕ ਦੀ ਵਿਆਕਰਨਕ ਤਰਤੀਬ: **ਕਰਤਾ + ਕਰਮ + ਕਿਰਿਆ (SOV)**।
   - ਬਣਤਰ ਅਨੁਸਾਰ ਵਾਕਾਂ ਦੀਆਂ 3 ਕਿਸਮਾਂ:
     - **ਸਾਧਾਰਨ ਵਾਕ:** ਇੱਕ ਹੀ ਸੁਤੰਤਰ ਉਪਵਾਕ ਤੇ ਇੱਕ ਮੁੱਖ ਕਿਰਿਆ (ਜਿਵੇਂ: *"ਸੂਰਜ ਪੂਰਬ ਵਿੱਚੋਂ ਚੜ੍ਹਦਾ ਹੈ।"*)।
     - **ਸੰਯੁਕਤ ਵਾਕ:** ਦੋ ਜਾਂ ਵੱਧ ਸੁਤੰਤਰ ਵਾਕ **ਸਮਾਨ ਯੋਜਕਾਂ** (ਅਤੇ, ਪਰ, ਤੇ, ਸਗੋਂ) ਨਾਲ ਜੁੜੇ ਹੋਣ (ਜਿਵੇਂ: *"ਉਹ ਮਿਹਨਤ ਕਰਦਾ ਹੈ ਅਤੇ ਚੰਗੇ ਅੰਕ ਲੈਂਦਾ ਹੈ।"*)।
     - **ਮਿਸ਼ਰਤ ਵਾਕ:** ਇੱਕ ਮੁੱਖ ਉਪਵਾਕ ਅਤੇ ਇੱਕ ਜਾਂ ਵੱਧ ਅਧੀਨ ਉਪਵਾਕ **ਅਧੀਨ ਯੋਜਕਾਂ** (ਕਿਉਂਕਿ, ਜੇ...ਤਾਂ, ਕਿ) ਨਾਲ ਜੁੜੇ ਹੋਣ (ਜਿਵੇਂ: *"ਅਧਿਆਪਕ ਨੇ ਕਿਹਾ ਕਿ ਸੱਚ ਬੋਲੋ।"*)।
2. **ਮੁਹਾਵਰੇ ਅਤੇ ਅਖਾਣ ਵਿੱਚ ਅੰਤਰ:**
   - ਮੁਹਾਵਰੇ ਦੇ ਅੰਤ ਵਿੱਚ ਕਿਰਿਆ-ਰੂਪ (*ਨਾ* ਜਾਂ *ਣਾ*) ਹੁੰਦਾ ਹੈ (ਜਿਵੇਂ *ਕੰਨ ਭਰਨੇ*, *ਅੱਖਾਂ ਫੇਰਨਾ*); ਅਖਾਣ ਆਪਣੇ ਆਪ ਵਿੱਚ ਪੂਰਾ ਵਾਕ ਹੁੰਦਾ ਹੈ ਜੋ ਲੋਕ-ਸਿਆਣਪ ਦਾ ਨਿਚੋੜ ਪੇਸ਼ ਕਰਦਾ ਹੈ (ਜਿਵੇਂ *ਆਪੇ ਫਾਥੜੀਏ ਤੈਨੂੰ ਕੌਣ ਛੁਡਾਏ*)।`,

            hi: `### [Level B: Basic — पंजाबी भाषा का उद्गम एवं गुरुमुखी लिपि]
1. **पंजाबी भाषा का उद्भव एवं विकास:**
   - **भाषा परिवार:** भारोपीय $\to$ भारत-ईरानी $\to$ **भारतीय आर्य भाषाएँ**।
   - विकास यात्रा: वैदिक संस्कृत $\to$ प्राकृत (शौरसेनी, पैशाची) $\to$ अपभ्रंश (टक्की, कैकेयी) $\to$ **आधुनिक पंजाबी**।
   - भाषा वैज्ञानिकों के अनुसार पंजाबी का उद्भव पश्चिमोत्तरी प्राकृत व अपभ्रंश से हुआ है।
2. **गुरुमुखी लिपि का विकास:**
   - **ब्राह्मी लिपि** $\to$ गुप्त लिपि $\to$ कुटिल लिपि $\to$ **शारदा लिपि** $\to$ लंडे/टाकरी $\to$ **गुरुमुखी लिपि**।
   - द्वितीय पातशाह **श्री गुरु अंगद देव जी** ने 35 अक्षरों को परिष्कृत एवं व्यवस्थित कर इसे प्रामाणिक वर्णमाला का रूप दिया।

---

### [Level I: Intermediate — ध्वनि विज्ञान, सुर प्रणाली एवं शब्द भेद]
1. **पंजाबी ध्वनि विज्ञान:**
   - **वर्णमाला:** मूल 35 अक्षर + 6 पैर-बिंदी वाले अक्षर (श, ख़, ग़, ज़, फ़, ल़) = **कुल 41 अक्षर**।
   - **3 स्वर वाहक:** **ੳ, ਅ, ੲ**। इनसे **10 स्वर ध्वनियां** बनती हैं (ੳ-3, ਅ-4, ੲ-3 = 10 स्वर)।
   - **3 लगाखर:** **बिंदी (ਂ)** (दीर्घ स्वरों के साथ), **टिप्पी (ੰ)** (ह्रस्व स्वरों के साथ), **अद्धक (ੱ)** (द्वित्व/बल हेतु)।
   - **3 पैर में पड़ने वाले अक्षर (दुत्त):** **ह, र, व**।
   - **5 नासिक्य व्यंजन:** ਙ, ਞ, ਣ, ਨ, ਮ।
   - **15 डकवें (स्पर्श) व्यंजन:** क, ख, ग; च, छ, ज; ट, ठ, ड; त, थ, द; प, फ, ब।
2. **पंजाबी की सुर प्रणाली (Tone System):**
   - **पंजाबी आधुनिक भारतीय आर्य भाषाओं में एकमात्र सुर-बद्ध (Tonal) भाषा है।**
   - घोष महाप्राण ध्वनियों (**घ, झ, ढ, ध, भ**) तथा **'ह'** के लोप से सुरों की उत्पत्ति हुई:
     - **उच्च सुर (High Tone):** जब घ, झ, ढ, ध, भ शब्द के **प्रारंभ** में आएँ (जैसे **घोड़ा** $\to$ *क्होड़ा*, **भार** $\to$ *पRegar*).
     - **मध्यम सुर (Mid Tone):** सामान्य संतुलन वाली सुर।
     - **निम्न सुर (Low Tone):** जब ये व्यंजन अथवा 'ह' शब्द के **मध्य या अंत** में आएँ (जैसे **लाभ** $\to$ *लाब*, **चाह** $\to$ *चा* निम्न सुर के साथ)।
3. **8 शब्द भेद:**
   - **विकारी (4):** संज्ञा (5 भेद), सर्वनाम (6 भेद), विशेषण (5 भेद), क्रिया।
   - **अविकारी (4):** क्रिया विशेषण (8 भेद), संबंधक (3 भेद), योजक (2 भेद), विस्मयादिबोधक (9 भेद)।

---

### [Level A: Advanced — वाक्य विज्ञान एवं मुहावरे]
1. **वाक्य विन्यास (Syntax):**
   - पंजाबी की पद-क्रम संरचना: **कर्ता + कर्म + क्रिया (SOV)**।
   - रचना के आधार पर वाक्य भेद: **साधारण वाक्य**, **संयुक्त वाक्य** (समान योजक द्वारा जुड़े), **मिश्रित वाक्य** (अधीन योजक द्वारा जुड़े)।
2. **मुहावरे और लोकोक्तियाँ:**
   - मुहावरे के अंत में क्रिया रूप (ना/णा) होता है; लोकोक्ति (अखाण) लोक-अनुभव का संपूर्ण वाक्य होती है।`
        },
        keyNotes: {
            en: [
                'Punjabi belongs to the Indo-Aryan branch of the Indo-European language family, originating from Paishachi/Sauraseni Apabhramsha.',
                'Gurmukhi script evolved from Brahmi -> Gupta -> Sharada -> Landa, and was formalized into 35 letters by Sri Guru Angad Dev Ji.',
                'The standard Gurmukhi alphabet has 41 letters (35 traditional + 6 foot-dot letters: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼).',
                'There are 3 vowel carriers (ੳ, ਅ, ੲ) which generate exactly 10 vowel sounds (U-3, A-4, I-3).',
                'There are 3 Lagakhar: Bindi (used with 6 long vowels), Tippi (used with 4 short vowels), and Addhak (indicates gemination / stress).',
                'There are 3 Dutt consonants placed in the foot of letters: Ha (ਹ), Ra (ਰ), Va (ਵ).',
                'There are 5 nasal consonants in Punjabi: Nganga (ਙ), Nyanja (ਞ), Nana (ਣ), Noon (ਨ), Meem (ਮ).',
                'Punjabi is unique as a TONAL LANGUAGE with 3 tones: High (initial aspirates), Mid (neutral), and Low (medial/final aspirates and Ha).',
                'Words are categorized into 4 Vikari classes (Noun, Pronoun, Adjective, Verb) and 4 Avikari classes (Adverb, Sambandhak, Yojak, Vismak).',
                'Canonical Punjabi syntax follows Subject + Object + Verb (SOV) order, classified into Sadharan, Sanyukt, and Mishrat sentences.'
            ],
            pa: [
                'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਭਾਰੋਪੀ ਪਰਿਵਾਰ ਦੀ ਭਾਰਤੀ ਆਰੀਆ ਸ਼ਾਖ਼ਾ ਵਿੱਚੋਂ ਪੈਸ਼ਾਚੀ/ਸ਼ੌਰਸੇਨੀ ਅਪਭ੍ਰੰਸ਼ ਤੋਂ ਵਿਕਸਿਤ ਹੋਈ ਹੈ।',
                'ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਵਿਕਾਸ ਬ੍ਰਾਹਮੀ $\to$ ਗੁਪਤ $\to$ ਸ਼ਾਰਦਾ $\to$ ਲੰਡੇ ਤੋਂ ਹੋਇਆ ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਇਸ ਨੂੰ ਮਿਆਰੀ ਬਣਾਇਆ।',
                'ਗੁਰਮੁਖੀ ਵਰਣਮਾਲਾ ਵਿੱਚ ਕੁੱਲ 41 ਅੱਖਰ ਹਨ (35 ਮੂਲ + 6 ਪੈਰ-ਬਿੰਦੀ ਵਾਲੇ: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼)।',
                '3 ਸਵਰ ਵਾਹਕ (ੳ, ਅ, ੲ) ਹਨ ਜਿਨ੍ਹਾਂ ਤੋਂ ਕੁੱਲ 10 ਸਵਰ ਧੁਨੀਆਂ ਬਣਦੀਆਂ ਹਨ (ੳ-3, ਅ-4, ੲ-3)।',
                '3 ਲਗਾਖਰ ਹਨ: ਬਿੰਦੀ (6 ਦੀਰਘ ਸਵਰਾਂ ਨਾਲ), ਟਿੱਪੀ (4 ਲਘੂ ਸਵਰਾਂ ਨਾਲ), ਅੱਧਕ (ਦਬਾਅ/ਦੁੱਤ ਧੁਨੀ ਲਈ)।',
                '3 ਦੁੱਤ ਅੱਖਰ ਪੈਰ ਵਿੱਚ ਪੈਂਦੇ ਹਨ: ਹ, ਰ, ਵ (ਜਿਵੇਂ ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)।',
                'ਪੰਜਾਬੀ ਵਿੱਚ 5 ਨਾਸਕੀ ਵਿਅੰਜਨ ਹਨ: ਙ, ਞ, ਣ, ਨ, ਮ।',
                'ਪੰਜਾਬੀ ਸੁਰ-ਬੱਧ (Tonal) ਭਾਸ਼ਾ ਹੈ ਜਿਸ ਦੀਆਂ 3 ਸੁਰਾਂ ਹਨ: ਉੱਚੀ ਸੁਰ, ਮੱਧਮ ਸੁਰ, ਅਤੇ ਨੀਵੀਂ ਸੁਰ।',
                'ਸ਼ਬਦ ਭੇਦ: 4 ਵਿਕਾਰੀ (ਨਾਂਵ, ਪੜਨਾਂਵ, ਵਿਸ਼ੇਸ਼ਣ, ਕਿਰਿਆ) ਅਤੇ 4 ਅਵਿਕਾਰੀ (ਕਿਰਿਆ ਵਿਸ਼ੇਸ਼ਣ, ਸੰਬੰਧਕ, ਯੋਜਕ, ਵਿਸਮਕ)।',
                'ਪੰਜਾਬੀ ਵਾਕ ਬਣਤਰ ਕਰਤਾ + ਕਰਮ + ਕਿਰਿਆ (SOV) ਅਨੁਸਾਰ ਚੱਲਦੀ ਹੈ, ਜਿਸ ਵਿੱਚ ਸਾਧਾਰਨ, ਸੰਯੁਕਤ ਅਤੇ ਮਿਸ਼ਰਤ ਵਾਕ ਹੁੰਦੇ ਹਨ।'
            ],
            hi: [
                'पंजाबी भाषा भारोपीय परिवार की भारतीय आर्य शाखा से पैशाची/शौरसेनी अपभ्रंश से विकसित हुई है।',
                'गुरुमुखी लिपि का विकास ब्राह्मी $\to$ गुप्त $\to$ शारदा $\to$ लंडे से हुआ और श्री गुरु अंगद देव जी ने इसे मानकीकृत किया।',
                'गुरुमुखी वर्णमाला में कुल 41 अक्षर हैं (35 मूल + 6 पैर-बिंदी वाले: ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼)।',
                '3 स्वर वाहक (ੳ, ਅ, ੲ) हैं जिनसे ठीक 10 स्वर ध्वनियां बनती हैं (ੳ-3, ਅ-4, ੲ-3)।',
                '3 लगाखर हैं: बिंदी (6 दीर्घ स्वरों के साथ), टिप्पी (4 ह्रस्व स्वरों के साथ), अद्धक (द्वित्व/बल हेतु)।',
                '3 पैर में पड़ने वाले दुत्त अक्षर हैं: ह, र, व (जैसे पढ़, प्रेम, स्व)।',
                'पंजाबी में 5 नासिक्य व्यंजन हैं: ਙ, ਞ, ਣ, ਨ, ਮ।',
                'पंजाबी एक सुर-बद्ध (Tonal) भाषा है जिसमें 3 सुर हैं: उच्च सुर, मध्यम सुर, तथा निम्न सुर।',
                'शब्द भेद: 4 विकारी (संज्ञा, सर्वनाम, विशेषण, क्रिया) और 4 अविकारी (क्रिया विशेषण, संबंधक, योजक, विस्मय)।',
                'पंजाबी वाक्य रचना कर्ता + कर्म + क्रिया (SOV) क्रम का पालन करती है (साधारण, संयुक्त, मिश्रित वाक्य)।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Vowel Distribution Formula: ੳ takes 3 (ਉ, ਊ, ਓ) | ਅ takes 4 (ਅ, ਆ, ਐ, ਔ) | ੲ takes 3 (ਇ, ਈ, ਏ) = Total 10 Vowels.',
                'Linguistic Origin Lineage: Indo-European -> Indo-Iranian -> Indo-Aryan (Vedic -> Prakrit -> Apabhramsha -> Modern Punjabi).',
                'Gurmukhi Script Lineage: Ashokan Brahmi -> Gupta Lipi -> Siddhamatrika -> Sharada Lipi -> Landa / Takri -> Gurmukhi Lipi (formalized by Guru Angad Dev Ji).'
            ],
            pa: [
                'ਸਵਰ ਵੰਡ ਸੂਤਰ: ੳ ਨਾਲ 3 (ਉ, ਊ, ਓ) | ਅ ਨਾਲ 4 (ਅ, ਆ, ਐ, ਔ) | ੲ ਨਾਲ 3 (ਇ, ਈ, ਏ) = ਕੁੱਲ 10 ਸਵਰ।',
                'ਭਾਸ਼ਾ ਨਿਕਾਸ ਲੜੀ: ਭਾਰੋਪੀ $\to$ ਇੰਡੋ-ਇਰਾਨੀ $\to$ ਭਾਰਤੀ ਆਰੀਆ (ਵੈਦਿਕ $\to$ ਪ੍ਰਾਕ੍ਰਿਤ $\to$ ਅਪਭ੍ਰੰਸ਼ $\to$ ਆਧੁਨਿਕ ਪੰਜਾਬੀ)।',
                'ਗੁਰਮੁਖੀ ਲਿਪੀ ਲੜੀ: ਅਸ਼ੋਕੀ ਬ੍ਰਾਹਮੀ $\to$ ਗੁਪਤ ਲਿਪੀ $\to$ ਸਿਧਮਾਤ੍ਰਿਕਾ $\to$ ਸ਼ਾਰਦਾ ਲਿਪੀ $\to$ ਲੰਡੇ/ਟਾਕਰੀ $\to$ ਗੁਰਮੁਖੀ ਲਿਪੀ (ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ)।'
            ],
            hi: [
                'स्वर वितरण सूत्र: ੳ के साथ 3 (ਉ, ਊ, ਓ) | ਅ के साथ 4 (ਅ, ਆ, ਐ, ਔ) | ੲ के साथ 3 (ਇ, ਈ, ਏ) = कुल 10 स्वर।',
                'भाषा उद्भव क्रम: भारोपीय $\to$ भारत-ईरानी $\to$ भारतीय आर्य (वैदिक $\to$ प्राकृत $\to$ अपभ्रंश $\to$ आधुनिक पंजाबी)।',
                'गुरुमुखी लिपि क्रम: ब्राह्मी $\to$ गुप्त लिपि $\to$ सिद्धमात्रिका $\to$ शारदा लिपि $\to$ लंडे/टाकरी $\to$ गुरुमुखी लिपि (गुरु अंगद देव जी)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Guru Angad Dev Ji invented the Gurmukhi script from scratch. Correction: The letters existed in earlier proto-Gurmukhi, Sharada, and Landa variants; Guru Angad Dev Ji collected, corrected, standardized, and canonically ordered the 35 letters into a unified pedagogical alphabet.',
                'Misconception: Addhak can be used freely with all Punjabi vowels. Correction: Addhak can only be used with Mukta (ਅ), Sihari (ਇ), and Aunkad (ਉ), and exceptionally with Dulaavan (ਐ) in loanwords (e.g., ਪੈੱਨ); it is never used with long vowels like Kanna or Bihari.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਬਿਲਕੁਲ ਨਵੇਂ ਸਿਰਿਓਂ ਘੜੀ ਸੀ। ਸੁਧਾਰ: ਅੱਖਰ ਪਹਿਲਾਂ ਤੋਂ ਸ਼ਾਰਦਾ ਅਤੇ ਲੰਡੇ ਰੂਪ ਵਿੱਚ ਮੌਜੂਦ ਸਨ; ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਇਹਨਾਂ ਨੂੰ ਸੋਧ ਕੇ, ਵਿਗਿਆਨਕ ਤਰਤੀਬ ਦੇ ਕੇ ਮਿਆਰੀ 35 ਅੱਖਰੀ ਬਣਾਈ।',
                'ਭੁਲੇਖਾ: ਅੱਧਕ ਦੀ ਵਰਤੋਂ ਸਾਰੇ ਸਵਰਾਂ ਨਾਲ ਹੋ ਸਕਦੀ ਹੈ। ਸੁਧਾਰ: ਅੱਧਕ ਦੀ ਵਰਤੋਂ ਮੁੱਖ ਤੌਰ \'ਤੇ ਮੁਕਤਾ, ਸਿਹਾਰੀ ਅਤੇ ਔਂਕੜ ਨਾਲ ਹੁੰਦੀ ਹੈ (ਅਤੇ ਵਿਦੇਸ਼ੀ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੁਲਾਵਾਂ ਨਾਲ); ਕੰਨਾ ਜਾਂ ਬਿਹਾਰੀ ਨਾਲ ਅੱਧਕ ਨਹੀਂ ਲੱਗਦਾ।'
            ],
            hi: [
                'भ्रांति: गुरु अंगद देव जी ने गुरुमुखी लिपि का शून्य से आविष्कार किया था। सुधार: वर्ण पूर्व में शारदा और लंडे रूप में विद्यमान थे; गुरु अंगद देव जी ने उन्हें परिष्कृत कर 35 अक्षरों की वैज्ञानिक वर्णमाला का मानकीकरण किया।',
                'भ्रांति: अद्धक का प्रयोग सभी स्वरों के साथ हो सकता है। सुधार: अद्धक केवल मुक्ता, सिहारी और औंकड़ के साथ प्रयुक्त होता है (तथा विदेशी शब्दों में दुलावां के साथ); कन्ना या बिहारी के साथ अद्धक कभी नहीं लगता।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Explain how the pronunciation and pitch tone of the word "ਘੋੜਾ" (Horse) differs from "ਲਾਭ" (Profit) based on Punjabi tonal phonology.',
                    pa: 'ਪੰਜਾਬੀ ਸੁਰ ਵਿਗਿਆਨ ਦੇ ਆਧਾਰ ਤੇ ਸਪੱਸ਼ਟ ਕਰੋ ਕਿ "ਘੋੜਾ" ਅਤੇ "ਲਾਭ" ਸ਼ਬਦਾਂ ਦੇ ਉਚਾਰਨ ਅਤੇ ਸੁਰ (Pitch Tone) ਵਿੱਚ ਕੀ ਅੰਤਰ ਹੈ?',
                    hi: 'पंजाबी सुर विज्ञान के आधार पर स्पष्ट करें कि "ਘੋੜਾ" और "ਲਾਭ" शब्दों के उच्चारण और सुर (Pitch Tone) में क्या अंतर है?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Locate the position of the voiced aspirate stop — In "ਘੋੜਾ", the voiced aspirate stop "ਘ" (Gh) occurs at the initial position. In "ਲਾਭ", the voiced aspirate stop "ਭ" (Bh) occurs at the final position.',
                        'Step 2: Rule for Initial Position — When a voiced aspirate is initial, it loses voice and aspiration, converting into its voiceless unvoiced counterpart "ਕ" (K) with an accompanying High Tone (ਉੱਚੀ ਸੁਰ) on the following vowel (pronounced *kòṛa*).',
                        'Step 3: Rule for Final Position — When a voiced aspirate is final or medial, the preceding vowel drops into a Low Tone (ਨੀਵੀਂ ਸੁਰ), while the consonant becomes a plain unvoiced/voiced stop (pronounced *láb* with falling-rising pitch).'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਘੋਸ਼ ਮਹਾਂਪ੍ਰਾਣ ਦੀ ਸਥਿਤੀ — "ਘੋੜਾ" ਵਿੱਚ "ਘ" ਸ਼ਬਦ ਦੇ ਆਰੰਭ ਵਿੱਚ ਹੈ, ਜਦਕਿ "ਲਾਭ" ਵਿੱਚ "ਭ" ਸ਼ਬਦ ਦੇ ਅਖ਼ੀਰ ਵਿੱਚ ਹੈ।',
                        'ਕਦਮ 2: ਆਰੰਭਲੀ ਸਥਿਤੀ ਦਾ ਨਿਯਮ — ਜਦੋਂ ਘੋਸ਼ ਮਹਾਂਪ੍ਰਾਣ ਸ਼ਬਦ ਦੇ ਸ਼ੁਰੂ ਵਿੱਚ ਹੋਵੇ ਤਾਂ ਇਹ ਅਲਪ-ਪ੍ਰਾਣ "ਕ" ਵਿੱਚ ਬਦਲ ਜਾਂਦਾ ਹੈ ਅਤੇ ਅਗਲੇ ਸਵਰ ਉੱਤੇ **ਉੱਚੀ ਸੁਰ** (High Tone) ਲੱਗਦੀ ਹੈ (ਉਚਾਰਨ *ਕ੍ਹੋੜਾ*)।',
                        'ਕਦਮ 3: ਅੰਤਲੀ ਸਥਿਤੀ ਦਾ ਨਿਯਮ — ਜਦੋਂ ਇਹ ਸ਼ਬਦ ਦੇ ਅੰਤ ਵਿੱਚ ਹੋਵੇ ਤਾਂ ਪਿਛਲੇ ਸਵਰ ਉੱਤੇ **ਨੀਵੀਂ ਸੁਰ** (Low Tone) ਲੱਗਦੀ ਹੈ ਅਤੇ ਵਿਅੰਜਨ ਅਲਪ-ਪ੍ਰਾਣ \'ਬ\' ਬਣ ਜਾਂਦਾ ਹੈ (ਉਚਾਰਨ *ਲਾਅਬ਼*)।'
                    ],
                    hi: [
                        'चरण 1: स्थिति का निर्धारण — "ਘੋੜਾ" में घोष महाप्राण "ਘ" प्रारंभ में है, जबकि "ਲਾਭ" में "ਭ" अंत में है।',
                        'चरण 2: प्रारंभिक स्थिति का नियम — प्रारंभ में होने पर यह अल्पप्राण \'क\' में बदलता है और अगले स्वर पर **उच्च सुर** (High Tone) लगती है।',
                        'चरण 3: अंतिम स्थिति का नियम — अंत में होने पर पूर्ववर्ती स्वर पर **निम्न सुर** (Low Tone) लगती है।'
                    ]
                },
                finalAnswer: {
                    en: '"ਘੋੜਾ" has High Tone due to word-initial aspirate; "ਲਾਭ" has Low Tone due to word-final aspirate.',
                    pa: '"ਘੋੜਾ" ਵਿੱਚ ਸ਼ੁਰੂਆਤੀ ਵਿਅੰਜਨ ਕਾਰਨ ਉੱਚੀ ਸੁਰ ਹੈ; "ਲਾਭ" ਵਿੱਚ ਅੰਤਲੇ ਵਿਅੰਜਨ ਕਾਰਨ ਨੀਵੀਂ ਸੁਰ ਹੈ।',
                    hi: '"ਘੋੜਾ" में आद्य व्यंजन के कारण उच्च सुर है; "ਲਾਭ" में अंतिम व्यंजन के कारण निम्न सुर है।'
                }
            },
            {
                problem: {
                    en: 'Classify the following sentence by structure and identify the clauses and conjunction: "ਜਦੋਂ ਮਾਸਟਰ ਜੀ ਜਮਾਤ ਵਿੱਚ ਆਏ ਤਾਂ ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਖੜ੍ਹੇ ਹੋ ਗਏ।"',
                    pa: 'ਹੇਠ ਲਿਖੇ ਵਾਕ ਦੀ ਬਣਤਰ ਅਨੁਸਾਰ ਕਿਸਮ ਦੱਸੋ ਅਤੇ ਇਸ ਵਿਚਲੇ ਉਪਵਾਕ ਤੇ ਯੋਜਕ ਵੱਖ ਕਰੋ: "ਜਦੋਂ ਮਾਸਟਰ ਜੀ ਜਮਾਤ ਵਿੱਚ ਆਏ ਤਾਂ ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਖੜ੍ਹੇ ਹੋ ਗਏ।"',
                    hi: 'संरचना के आधार पर निम्नलिखित वाक्य का भेद बताइए तथा उपवाक्य व योजक पृथक करें: "ਜਦੋਂ ਮਾਸਟਰ ਜੀ ਜਮਾਤ ਵਿੱਚ ਆਏ ਤਾਂ ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਖੜ੍ਹੇ ਹੋ ਗਏ।"'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Identify conjunction — "ਜਦੋਂ...ਤਾਂ" (When...then) is a pair of Subordinate Conjunctions (ਅਧੀਨ ਯੋਜਕ).',
                        'Step 2: Identify clauses — "ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਖੜ੍ਹੇ ਹੋ ਗਏ" is the Main/Principal Clause (ਪ੍ਰਧਾਨ ਉਪਵਾਕ); "ਜਦੋਂ ਮਾਸਟਰ ਜੀ ਜਮਾਤ ਵਿੱਚ ਆਏ" is the Subordinate Adverbial Clause of Time (ਕਾਲਵਾਚਕ ਅਧੀਨ ਉਪਵਾਕ).',
                        'Step 3: Classify sentence — A sentence composed of one main clause and one or more subordinate clauses joined by subordinate conjunctions is a **Complex Sentence (ਮਿਸ਼ਰਤ ਵਾਕ)**.'
                    ],
                    pa: [
                        'ਕਦਮ 1: ਯੋਜਕ ਦੀ ਪਛਾਣ — "ਜਦੋਂ...ਤਾਂ" ਅਧੀਨ ਯੋਜਕ ਹਨ ਜੋ ਸ਼ਰਤ/ਕਾਲ ਦਾ ਸੰਬੰਧ ਜੋੜਦੇ ਹਨ।',
                        'ਕਦਮ 2: ਉਪਵਾਕਾਂ ਦਾ ਨਿਖੇੜਾ — "ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਖੜ੍ਹੇ ਹੋ ਗਏ" ਪ੍ਰਧਾਨ ਉਪਵਾਕ ਹੈ; "ਜਦੋਂ ਮਾਸਟਰ ਜੀ ਜਮਾਤ ਵਿੱਚ ਆਏ" ਅਧੀਨ ਕਾਲਵਾਚਕ ਉਪਵਾਕ ਹੈ।',
                        'ਕਦਮ 3: ਵਾਕ ਦੀ ਕਿਸਮ — ਜਿਸ ਵਾਕ ਵਿੱਚ ਇੱਕ ਪ੍ਰਧਾਨ ਅਤੇ ਇੱਕ ਜਾਂ ਵੱਧ ਅਧੀਨ ਉਪਵਾਕ ਹੋਣ, ਉਹ **ਮਿਸ਼ਰਤ ਵਾਕ** ਅਖਵਾਉਂਦਾ ਹੈ।'
                    ],
                    hi: [
                        'चरण 1: योजक — "ਜਦੋਂ...ਤਾਂ" अधीन योजक हैं।',
                        'चरण 2: उपवाक्य — "ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਖੜ੍ਹੇ ਹੋ ਗਏ" प्रधान उपवाक्य है; "ਜਦੋਂ ਮਾਸਟਰ ਜੀ ਜਮਾਤ ਵਿੱਚ ਆਏ" आश्रित उपवाक्य है।',
                        'चरण 3: वाक्य भेद — यह **मिश्रित वाक्य (Complex Sentence)** है।'
                    ]
                },
                finalAnswer: {
                    en: 'Complex Sentence (ਮਿਸ਼ਰਤ ਵਾਕ); Main clause: "ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਖੜ੍ਹੇ ਹੋ ਗਏ", Subordinate clause: "ਜਦੋਂ ਮਾਸਟਰ ਜੀ ਜਮਾਤ ਵਿੱਚ ਆਏ", Subordinate conjunction: "ਜਦੋਂ...ਤਾਂ".',
                    pa: 'ਮਿਸ਼ਰਤ ਵਾਕ; ਪ੍ਰਧਾਨ ਉਪਵਾਕ: "ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਖੜ੍ਹੇ ਹੋ ਗਏ", ਅਧੀਨ ਉਪਵਾਕ: "ਜਦੋਂ ਮਾਸਟਰ ਜੀ ਜਮਾਤ ਵਿੱਚ ਆਏ", ਯੋਜਕ: "ਜਦੋਂ...ਤਾਂ"।',
                    hi: 'मिश्रित वाक्य; प्रधान उपवाक्य: "ਸਾਰੇ ਵਿਦਿਆਰਥੀ ਖੜ੍ਹੇ ਹੋ ਗਏ", आश्रित उपवाक्य: "ਜਦੋਂ ਮਾਸਟਰ ਜੀ ਜਮਾਤ ਵਿੱਚ ਆਏ", योजक: "ਜਦੋਂ...ਤਾਂ"।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-lit-vl-1',
                question: {
                    en: 'Which script is the direct historical ancestor of the Gurmukhi script in northern India?',
                    pa: 'ਉੱਤਰੀ ਭਾਰਤ ਵਿੱਚ ਗੁਰਮੁਖੀ ਲਿਪੀ ਦਾ ਸਿੱਧਾ ਇਤਿਹਾਸਕ ਪੂਰਵਜ ਕਿਹੜੀ ਲਿਪੀ ਹੈ?',
                    hi: 'उत्तर भारत में गुरुमुखी लिपि की प्रत्यक्ष ऐतिहासिक पूर्वज कौन सी लिपि है?'
                },
                answer: {
                    en: 'Sharada Lipi (ਸ਼ਾਰਦਾ ਲਿਪੀ, derived through Siddhamatrika from Brahmi).',
                    pa: 'ਸ਼ਾਰਦਾ ਲਿਪੀ (Sharada Lipi)।',
                    hi: 'शारदा लिपि (Sharada Lipi)।'
                }
            },
            {
                id: 'fc-lit-vl-2',
                question: {
                    en: 'How many vowel sounds (Lagan) are formed using the vowel carrier "ੳ" in Gurmukhi?',
                    pa: 'ਗੁਰਮੁਖੀ ਵਿੱਚ ਸਵਰ ਵਾਹਕ "ੳ" ਨਾਲ ਕਿੰਨੀਆਂ ਲਗਾਂ (ਸਵਰ ਧੁਨੀਆਂ) ਲੱਗਦੀਆਂ ਹਨ?',
                    hi: 'गुरुमुखी में स्वर वाहक "ੳ" के साथ कितनी मात्राएँ (स्वर ध्वनियाँ) लगती हैं?'
                },
                answer: {
                    en: '3 Vowels: Aunkad (ਉ), Dulaunkad (ਊ), and Hora (ਓ).',
                    pa: '3 ਲਗਾਂ: ਔਂਕੜ (ਉ), ਦੁਲੈਂਕੜ (ਊ), ਅਤੇ ਹੋੜਾ (ਓ)।',
                    hi: '3 मात्राएँ: औंकड़ (ਉ), दुलैंकड़ (ਊ), और होड़ा (ਓ)।'
                }
            },
            {
                id: 'fc-lit-vl-3',
                question: {
                    en: 'What are the three consonants placed in the foot of letters (Dutt Akhar) in Punjabi?',
                    pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਪੈਰ ਵਿੱਚ ਪੈਣ ਵਾਲੇ ਤਿੰਨ ਦੁੱਤ ਅੱਖਰ ਕਿਹੜੇ ਹਨ?',
                    hi: 'पंजाबी में पैर में पड़ने वाले तीन दुत्त अक्षर कौन से हैं?'
                },
                answer: {
                    en: 'Ha (ਹ), Ra (ਰ), and Va (ਵ).',
                    pa: 'ਹ, ਰ, ਅਤੇ ਵ (ਜਿਵੇਂ ਪੜ੍ਹ, ਪ੍ਰੇਮ, ਸਵੈ)।',
                    hi: 'ह, र, और व (जैसे पढ़, प्रेम, स्व)।'
                }
            },
            {
                id: 'fc-lit-vl-4',
                question: {
                    en: 'What acoustic transformation in Punjabi occurred due to the loss of voiced aspirate plosives (ਘ, ਝ, ਢ, ਧ, ਭ)?',
                    pa: 'ਪੰਜਾਬੀ ਵਿੱਚ ਘੋਸ਼ ਮਹਾਂਪ੍ਰਾਣ ਵਿਅੰਜਨਾਂ (ਘ, ਝ, ਢ, ਧ, ਭ) ਦੇ ਲੋਪ ਹੋਣ ਨਾਲ ਕਿਹੜਾ ਧੁਨੀ ਪਰਿਵਰਤਨ ਵਾਪਰਿਆ?',
                    hi: 'पंजाबी में घोष महाप्राण व्यंजनों (ਘ, ਝ, ਢ, ਧ, ਭ) के लोप होने से कौन सा ध्वनि परिवर्तन हुआ?'
                },
                answer: {
                    en: 'The development of the Tone System (ਸੁਰ ਪ੍ਰਣਾਲੀ — High, Mid, Low tones).',
                    pa: 'ਸੁਰ ਪ੍ਰਣਾਲੀ (Tone System — ਉੱਚੀ, ਮੱਧਮ, ਅਤੇ ਨੀਵੀਂ ਸੁਰ) ਦਾ ਵਿਕਾਸ।',
                    hi: 'सुर प्रणाली (Tone System — उच्च, मध्यम, एवं निम्न सुर) का विकास।'
                }
            }
        ]
    }
];
