import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const MASTER_CADRE_SCIENCE_BIOLOGY_BLUEPRINT_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. BOTANY I: DIVERSITY OF LIVING WORLD, PLANT KINGDOM, MORPHOLOGY,
    //    PLANT ANATOMY & REPRODUCTION IN FLOWERING PLANTS (LEVEL B -> I -> H -> G)
    // =========================================================================
    {
        topicId: 'sci-bio-diversity-plant-structural',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote:
                'Level B -> I -> H -> G comprehensive academic blueprint covering ERB Punjab Master Cadre Science (Botany): Diversity in the Living World, Five-Kingdom & Three-Domain Systems, Viruses/Viroids/Prions/Lichens, Comparative Plant Kingdom (Algae to Angiosperms), Angiosperm Morphology & Floral Formulas, Plant Anatomy & Secondary Growth, and Embryology / Double Fertilization.'
        },
        bookRefs: [
            {
                title: 'NCERT Biology Class XI & XII + PSEB Biology Textbooks',
                author: 'NCERT / Punjab School Education Board (PSEB)',
                chapter: 'Unit I (Diversity in the Living World), Unit II (Structural Organisation in Plants) & Class XII Unit VI (Reproduction in Flowering Plants)',
                relevance: 'Core foundation for taxonomy, Five-Kingdom classification, Algae/Bryophyta/Pteridophyta/Gymnosperm life cycles, placentation, vascular bundles, and 7-celled 8-nucleate Polygonum embryo sac.'
            },
            {
                title: 'Botany for Degree Students (Algae, Fungi, Bryophyta, Pteridophyta, Gymnosperms & Anatomy)',
                author: 'B.R. Vashishta, A.K. Sinha, V.P. Singh & B.P. Pandey (S. Chand)',
                chapter: 'Stelar Evolution, Heterospory & Seed Habit, Cycas vs Pinus, Anomalous Secondary Growth & Embryology',
                relevance: 'Graduation-level (Level G) mastery for Punjab Master Cadre Botany questions on stelar systems, Nawaschin double fertilization, and sporopollenin/tapetum.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 Foundation]
1. **Characteristics of Living Organisms & Hierarchical Classification:**
   - **Defining Properties (Zero Exceptions):** **Cellular organization**, **Metabolism** (anabolism + catabolism), and **Consciousness** (ability to sense environment and respond to stimuli). Growth and reproduction are *non-defining* properties because mountains/crystals grow by accretion and sterile organisms (mules, worker honeybees, infertile human couples) do not reproduce.
   - **Taxonomic Hierarchy (Ascending Order of Obligate Categories):**
     **Species → Genus → Family → Order → Class → Phylum (animals) / Division (plants) → Kingdom**.
   - **Species** (term coined by **John Ray**; biological species concept by **Ernst Mayr**) is the lowest and most fundamental unit of classification containing interbreeding individuals.
2. **Parts of a Flowering Plant & Basic Modifications:**
   - **Root System:** **Tap root** (originates from radicle; dicots like *Mustard, Gram, Mango*) vs **Fibrous root** (originates from base of stem; monocots like *Wheat, Paddy, Maize*) vs **Adventitious root** (arises from parts other than radicle; *Grass, Banyan prop roots, Monstera*).
   - **Venation & Phyllotaxy:** **Reticulate venation** (dicots, except *Calophyllum, Corymbium*) vs **Parallel venation** (monocots, except *Smilax, Colocasia, Dioscorea*). **Phyllotaxy:** Alternate (*China rose, Mustard, Sunflower*), Opposite (*Calotropis, Guava*), Whorled (*Alstonia, Nerium*).
   - **Parts of a Flower:** Four whorls on the thalamus — **Calyx** (sepals, K), **Corolla** (petals, C), **Androecium** (stamens = filament + bilobed dithecous anther, A), and **Gynoecium/Pistil** (carpels = stigma + style + ovary containing ovules, G).

---

### [Level I: Intermediate — Class 9–10 Core]
1. **Binomial Nomenclature, Five-Kingdom & Three-Domain Classification:**
   - **Carolus Linnaeus** (*Systema Naturae*, *Species Plantarum* 1753) established **Binomial Nomenclature**: Generic epithet (capitalized) + specific epithet (lowercase), printed in *italics* or underlined separately when handwritten (e.g., *Mangifera indica* Linn.), governed by **ICBN** (International Code of Botanical Nomenclature, now ICN) and **ICZN**.
   - **R.H. Whittaker's Five-Kingdom Classification (1969):** Based on cell structure, thallus organization, mode of nutrition, reproduction, and **phylogenetic relationships**.
   - **Carl Woese's Three-Domain System (1990):** Based on **16S rRNA** gene sequencing, divides life into **3 Domains and 6 Kingdoms**: **Archaea** (Archaebacteria — ether-linked branched lipids, pseudomurein cell wall; methanogens, halophiles, thermoacidophiles), **Bacteria** (Eubacteria — peptidoglycan wall, ester-linked lipids), and **Eukarya** (Protista, Fungi, Plantae, Animalia).
   | Kingdom | Cell Type & Wall | Nuclear Membrane | Mode of Nutrition | Key Representatives |
   |---|---|---|---|---|
   | **Monera** | Prokaryotic; Peptidoglycan (murein) + polysaccharides (absent in *Mycoplasma*) | Absent (Nucleoid / Genophore; naked dsDNA lacking histones) | Autotrophic (chemo-/photo-) & Heterotrophic | *Nostoc, Anabaena* (heterocysts for N₂ fixation), *Rhizobium*, *Mycoplasma* (PPLO — Joker of Plant Kingdom) |
   | **Protista** | Eukaryotic; Present in some (silica shells in Diatoms, cellulose plates in Dinoflagellates) | Present (80S cytoplasmic ribosomes) | Photosynthetic, Holozoic, or Saprophytic | Chrysophytes (Diatoms — chief producers of oceans), Dinoflagellates (*Gonyaulax* red tide), *Euglena* (mixotrophic), Slime moulds, Protozoans |
   | **Fungi** | Eukaryotic; **Chitin** (fungal cellulose: N-acetylglucosamine polymer) | Present | Heterotrophic (Saprophytic, Parasitic, Symbiotic) | Phycomycetes (*Rhizopus, Albugo*), Ascomycetes (*Yeast, Neurospora, Penicillium*), Basidiomycetes (*Agaricus, Puccinia, Ustilago*), Deuteromycetes (*Alternaria, Colletotrichum, Trichoderma*) |
   | **Plantae** | Eukaryotic; **Cellulose** + Pectin | Present | Autotrophic (Photosynthetic; plastids present) | Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms |
   | **Animalia** | Eukaryotic; **Cell wall absent** | Present | Holozoic Heterotrophic | Porifera to Chordata |
2. **Acellular Entities (Excluded from Whittaker's 5 Kingdoms) & Symbiotic Associations:**
   - **Viruses:** Term coined by Pasteur/Beijerinck; **Dmitri Ivanowsky (1892)** recognized causal microbes of tobacco mosaic as smaller than bacteria (filtrable); **M.W. Beijerinck (1898)** called the infectious fluid ***Contagium vivum fluidum*** (contagious living fluid); **W.M. Stanley (1935)** crystallized **Tobacco Mosaic Virus (TMV)** proving crystals consist largely of protein. No virus contains both RNA and DNA: **Plant viruses** generally have **ssRNA** (e.g., TMV: helically arranged 2130 capsomeres in 18:1 nucleotide-to-capsomere ratio; exception: **Cauliflower Mosaic Virus has dsDNA**); **Bacteriophages** usually have **dsDNA** (e.g., T₂, T₄ phages).
   - **Viroids:** Discovered by **T.O. Diener (1971)** — smallest infectious agents consisting of **free, low-molecular-weight circular ssRNA lacking a protein coat (capsid)**; causes **Potato Spindle Tuber Disease (PSTD)** and Chrysanthemum stunt.
   - **Prions:** Infectious **misfolded proteinaceous particles** lacking nucleic acid (Stanley Prusiner); cause **Bovine Spongiform Encephalopathy (BSE / Mad Cow Disease)** in cattle, **Scrapie** in sheep, and **Creutzfeldt-Jakob Disease (CJD)** / **Kuru** in humans.
   - **Lichens:** Dual symbiotic association between an algal partner (**Phycobiont** — autotrophic, <10% bulk) and a fungal partner (**Mycobiont** — heterotrophic, >90% bulk, absorbs water/minerals). Pioneer colonizers in **xerosere (lithosere)** ecological succession and highly sensitive **bioindicators of SO₂ air pollution** (absent in polluted industrial cities).
   - **Mycorrhiza:** Symbiotic association of fungi with roots of higher plants — **Ectomycorrhiza** (*Pinus* roots, Hartig net) vs **Endomycorrhiza / VAM (Vesicular-Arbuscular Mycorrhiza)** (*Glomus* in orchids/legumes; solubilizes **phosphorus**).

---

### [Level H: Higher Secondary — Class 11–12 Mastery]
1. **Plant Kingdom Comparative Blueprint (Algae to Angiosperms):**
   | Group / Class | Pigments & Stored Food | Cell Wall & Flagellation | Key Diagnostic Features & Examples |
   |---|---|---|---|
   | **Chlorophyceae** (Green Algae) | **Chl a, b**; **Starch** stored in **Pyrenoids** (protein core + starch sheath) | Inner **Cellulose**, outer Pectose; 2–8 equal, **apical** flagella | Grass-green; *Chlamydomonas* (unicellular motile), *Chlorella* (unicellular non-motile, space food), *Volvox* (colonial), *Ulothrix, Spirogyra* (ribbon chloroplast), *Chara* (stonewort — nucule & globule) |
   | **Phaeophyceae** (Brown Algae) | **Chl a, c**, Carotenoids & **Fucoxanthin** (brown); **Mannitol** (sugar alcohol) & **Laminarin** | Cellulose + outer gelatinous **Algin** (alginic acid); 2 **unequal, lateral** flagella | Pear-shaped (pyriform) zoospores; plant body differentiated into holdfast, stipe, and frond; *Ectocarpus*, *Dictyota*, *Laminaria* (kelp, iodine source), *Sargassum*, *Fucus* (diplontic) |
   | **Rhodophyceae** (Red Algae) | **Chl a, d** & **r-Phycoerythrin** (absorbs blue-green light in deep sea); **Floridean starch** (structurally similar to amylopectin & glycogen) | Cellulose, pectin & polysulphate esters (**Agar-agar** & **Carrageenan**); **Flagella completely absent** | Non-motile spores & gametes; oogamous with complex post-fertilization developments; *Polysiphonia*, *Porphyra*, *Gracilaria* & *Gelidium* (**Agar-agar** source) |
   | **Bryophyta** (Amphibians of Plant Kingdom) | Chl a, b; Starch | Cellulose; Biflagellate antherozoids require **water** for zoidogamy | **Haploid gametophyte (n) is dominant**, independent & photosynthetic; **Sporophyte (2n: foot, seta, capsule) is parasitic/dependent** on gametophyte; root-like **rhizoids**; **Liverworts** (*Marchantia* — asexual **gemma cups**, elaters for spore dispersal; *Riccia*) vs **Mosses** (protonema stage + leafy stage, peristome teeth; *Funaria*, *Polytrichum*, *Sphagnum* — **peat moss** used for trans-shipment of living material due to high water-holding capacity) |
   | **Pteridophyta** (First Vascular Cryptogams / Botanical Snakes) | Chl a, b; Starch | Cellulose + lignin in tracheids; multiflagellate antherozoids | **Diploid sporophyte (2n) is dominant** with **true roots, stems, and leaves** + vascular tissues (**Xylem lacks vessels; Phloem lacks companion cells**); free-living photosynthetic gametophyte called **Prothallus**; **Homosporous** (*Psilotum, Lycopodium, Equisetum, Dryopteris, Pteris, Adiantum*) vs **Heterosporous** (***Selaginella, Salvinia, Marsilea, Azolla*** — produce microspores & megaspores; female gametophyte retained on parent sporophyte = **Precursor to Seed Habit!**) |
   | **Gymnosperms** (Naked-Seeded Phanerogams) | Chl a, b; Starch/Lipids | Cellulose + lignified tracheids (**Vessels present exceptionally in Gnetales**: *Ephedra, Gnetum, Welwitschia*) | Ovules not enclosed by ovary wall; **heterosporous**; wind-pollinated (**anemophilous**); **Endosperm is Haploid (n) and formed BEFORE fertilization**; ***Cycas*** (unbranched stem, **dioecious**, **coralloid roots** with N₂-fixing cyanobacteria *Anabaena cycadae*, largest ovule/male gametes with cilia, **no female cone**) vs ***Pinus*** (branched stem, **monoecious**, **ectomycorrhizal** roots, **winged pollen grains** = *sulphur shower*); *Ephedra* (ephedrine for asthma), *Taxus* (taxol anticancer), *Ginkgo biloba* (living fossil) |
2. **Life Cycle Patterns in Plants:**
   - **Haplontic Life Cycle:** Dominant photosynthetic phase is haploid gametophyte (n); sporophyte represented only by one-celled zygote (2n) which undergoes **zygotic meiosis** — *Volvox, Spirogyra, Chlamydomonas, Ulothrix*.
   - **Diplontic Life Cycle:** Dominant phase is diploid sporophyte (2n) with **gametic meiosis** — all **Gymnosperms and Angiosperms**, plus the brown alga ***Fucus*** (and green alga *Caulerpa*).
   - **Haplo-diplontic Life Cycle:** Both multicellular haploid (n) and diploid (2n) phases exist with **sporic meiosis** — all **Bryophytes and Pteridophytes**, plus algae ***Ectocarpus, Polysiphonia*, and Kelps (*Laminaria*)**.
3. **Morphology of Flowering Plants (Modifications, Inflorescence, Placentation & Families):**
   - **Key Organ Modifications:**
     - *Tap Root Storage:* Conical (*Carrot*), Fusiform (*Radish*), Napiform (*Turnip, Beetroot*); *Adventitious Storage:* Tuberous (*Sweet potato — Ipomoea batatas*), Fasciculated (*Asparagus, Dahlia*); *Pneumatophores* (negatively geotropic respiratory roots in halophyte *Rhizophora*).
     - *Underground Stem Modifications (Storage & Perennation — bear nodes, internodes & scaly leaves):* **Tuber** (*Potato* — eyes are axillary buds), **Rhizome** (*Ginger, Turmeric, Banana*), **Corm** (*Colocasia, Amorphophallus/Zaminkand, Crocus*), **Bulb** (*Onion, Garlic* — fleshy scale leaves); *Sub-aerial Stems:* Runner (*Oxalis, Grass*), Stolon (*Mint, Jasmine*), Offset (*Pistia, Eichhornia* — water hyacinth), Sucker (*Banana, Pineapple, Chrysanthemum*); *Aerial Stems:* **Phylloclade** (flattened green stem in *Opuntia*, cylindrical in *Euphorbia*), **Cladode** (1-internode stem in *Asparagus*), Stem tendrils (*Cucumber, Pumpkin, Watermelon, Grapevine*), Stem thorns (*Citrus, Bougainvillea*).
   - **Inflorescence:** **Racemose** (main axis grows indefinitely; flowers in **acropetal** succession) vs **Cymose** (main axis terminates in a flower; **basipetal** succession); **Special Types:** **Cyathium** (cup-shaped involucre with 1 central female flower surrounded by many achlamydeous male flowers, each represented by a single stamen — ***Euphorbia, Poinsettia***), **Verticillaster** (dichasial cyme reduced to scorpioid cyme — ***Ocimum/Tulsi, Salvia*** of Lamiaceae), **Hypanthodium** (fleshy receptacle forming a hollow cavity with apical ostiole enclosing male, female & sterile **gall flowers** pollinated by *Blastophaga* wasp — ***Ficus* spp.: Banyan, Peepal, Fig**).
   - **Placentation Blueprint:**
     | Placentation Type | Ovary Chamber & Ovule Attachment | Classic Exam Examples |
     |---|---|---|
     | **Marginal** | Monocarpellary, unilocular; placenta forms a ridge along the **ventral suture** in two rows | ***Pea (Pisum sativum)***, *Gram, Bean* (Fabaceae) |
     | **Axile** | Multicarpellary, **syncarpous, multilocular**; ovules attached to central axis | ***China rose (Hibiscus), Tomato, Lemon, Onion*** |
     | **Parietal** | Unilocular (becomes **bilocular in Mustard due to false septum / *Replum***); ovules on inner periphery | ***Mustard (Brassica), Argemone, Cucumber*** |
     | **Free-Central** | Syncarpous, **unilocular (septa absent)**; ovules borne on central axis | ***Dianthus, Primrose (Primula)*** |
     | **Basal** | Bicarpellary syncarpous, **unilocular**; **single ovule** attached at base of ovary | ***Sunflower (Helianthus), Marigold (Tagetes), Wheat, Maize*** |
   - **Three Core NCERT Angiosperm Families:**
     - **Fabaceae (Papilionoideae):** Zygomorphic (%), **Vexillary (papilionaceous)** aestivation (C₁₊₂₊₍₂₎ — standard/vexillum, wings/alae, keel/carina), **Diadelphous** stamens A₍₉₎₊₁, monocarpellary superior ovary G̲₁, legume/pod fruit — *Pisum, Cicer, Sesbania, Trifolium, Lupinus, Glycyrrhiza (Mulethi), Indigofera*.
     - **Solanaceae (Potato family):** Actinomorphic (⊕), **epipetalous** stamens (C₍₅₎A₅ arc), bicarpellary syncarpous superior ovary with **oblique septum & swollen placenta** G̲₍₂₎, berry/capsule — *Solanum, Petunia, Datura, Atropa belladonna, Withania somnifera (Ashwagandha)*.
     - **Liliaceae (Monocot family):** Trimerous, **Perianth** (tepals) with **epiphyllous/epitepalous** stamens (P₍₃₊₃₎A₃₊₃ arc), tricarpellary syncarpous superior ovary G̲₍₃₎ with axile placentation — *Allium cepa, Colchicum autumnale* (**colchicine** — mitotic poison arresting metaphase spindle), *Aloe, Asparagus, Gloriosa*.

---

### [Level G: Graduation — B.Sc. & Advanced Exam Mastery]
1. **Plant Anatomy, Stelar Evolution & Secondary Growth:**
   - **Tissues:** **Parenchyma** (living, cellulose wall, storage/chlorenchyma/aerenchyma), **Collenchyma** (living mechanical tissue with uneven **pectin + cellulose + hemicellulose** thickenings at corners; present in dicot hypodermis, **absent in monocots and roots**), **Sclerenchyma** (dead mechanical tissue with **lignified** secondary walls — fibres & sclereids/stone cells).
   - **Vascular Bundles:** **Radial** (xylem & phloem on alternate radii — **all Roots**; **Exarch** protoxylem towards periphery; Dicot root has 2–4 diarch-to-tetrarch bundles, Monocot root is **polyarch >6**); **Conjoint Collateral Open** (cambium present between inner endarch xylem and outer phloem — **Dicot Stem**, arranged in a ring/eustele); **Conjoint Collateral Closed** (cambium absent — **Monocot Stem**, scattered in ground tissue/atactostele with sclerenchymatous bundle sheath and water-containing cavity); **Bicollateral** (phloem on both sides of xylem — **Cucurbits & Solanaceae**).
   - **Stelar Evolution in Pteridophytes:** Proposed by **Van Tieghem & Douliot (1886)**: **Protostele** (solid core of xylem surrounded by phloem, no pith — *Haplostele* in *Rhynia/Selaginella*, *Actinostele* in *Lycopodium serratum*, *Plectostele* in *Lycopodium clavatum*) → **Siphonostele** (central pith appears — *Equisetum, Marsilea*) → **Solenostele** → **Dictyostele** (siphonostele broken into network of **meristeles** by overlapping leaf gaps — *Dryopteris, Pteris*).
   - **Secondary Growth in Dicot Stem:**
     - **Vascular Cambium Ring** = Intrafascicular cambium (primary) + Interfascicular cambium (secondary, formed by **dedifferentiation** of medullary ray parenchyma). Forms more secondary xylem (wood) inward than secondary phloem outward.
     - **Spring Wood (Early Wood)** (lighter, lower density, wider vessels) + **Autumn Wood (Late Wood)** (darker, higher density, narrow vessels) = **1 Annual Ring** (Dendrochronology).
     - **Heartwood (Duramen)** (central, dark, dead, non-conducting, plugged with **tyloses** and deposited with tannins, resins, oils — provides mechanical support and durability) vs **Sapwood (Alburnum)** (peripheral, light, physiologically active — conducts water & minerals).
     - **Periderm** = **Phellogen** (Cork Cambium — secondary meristem) + **Phellem** (Cork — outer dead cells with **suberin** deposition; commercial cork from *Quercus suber*) + **Phelloderm** (Secondary Cortex — inner living parenchyma). **Bark** (non-technical term) includes **all tissues exterior to the vascular cambium** (including secondary phloem + periderm). **Lenticels** (lens-shaped openings with complementary cells) allow gaseous exchange.
2. **Embryology of Angiosperms & Double Fertilization:**
   - **Microsporogenesis & Male Gametophyte:** Anther wall has 4 layers: **Epidermis → Endothecium** (α-cellulosic fibrous bands for **anther dehiscence**) → **Middle layers** (ephemeral) → **Tapetum** (innermost nutritive layer, dense cytoplasm, **multinucleate/polyploid** due to endomitosis; secretes **Ubisch bodies / sporopollenin**, callase enzyme, and pollenkitt). Each diploid **Microspore Mother Cell (MMC, 2n)** undergoes **Meiosis** to form a **microspore tetrad (4 × n)**. Pollen grain has outer **Exine** (**Sporopollenin** — oxidative polymer of carotenoids, most resistant organic material known, absent at **germ pores**) and inner **Intine** (pecto-cellulose). Pollination occurs at **2-celled stage** (Vegetative + Generative cell in 60% angiosperms) or **3-celled stage** (40% angiosperms, where generative cell divides mitotically into 2 male gametes before shedding).
   - **Megasporogenesis & *Polygonum*-type Embryo Sac:** A single **Megaspore Mother Cell (MMC, 2n)** at the micropylar end undergoes **Meiosis** to form a linear tetrad of 4 haploid megaspores; **3 micropylar megaspores degenerate** and **1 chalazal megaspore remains functional** (**Monosporic development**). Its nucleus undergoes **3 successive free-nuclear mitotic divisions** (1 → 2 → 4 → 8 nuclei) to form the mature **7-celled, 8-nucleate *Polygonum*-type female gametophyte**:
     - **Egg Apparatus** at micropylar end (3 cells): 1 **Egg cell (n)** + 2 **Synergids (n)** with **Filiform apparatus** (guides pollen tube entry via chemotropism).
     - **Antipodal cells** at chalazal end: 3 haploid cells (n).
     - **Central cell**: Largest cell containing **2 Polar Nuclei (n + n)** which fuse to form a diploid secondary nucleus (2n).
   - **Double Fertilization (Discovered by S.G. Nawaschin, 1898 in *Lilium* and *Fritillaria*):**
     1. **Syngamy (Generative Fertilization):** Male gamete (n) + Egg cell (n) → **Diploid Zygote (2n)** → Embryo.
     2. **Triple Fusion (Vegetative Fertilization):** Second male gamete (n) + Two Polar Nuclei (n + n) → **Triploid Primary Endosperm Nucleus (PEN, 3n)** → nutritive **Endosperm** (formed *after* fertilization in angiosperms; **5 nuclei** participate in double fertilization!).
   - **Apomixis & Polyembryony:** **Apomixis** (term by Winkler) is asexual seed formation mimicking sexual reproduction without fertilization (e.g., *Asteraceae* and grasses). **Polyembryony** (discovered by **Anton van Leeuwenhoek, 1719** in *Citrus*) is occurrence of more than one embryo in a seed (adventive embryony from diploid 2n **nucellar or integumentary cells** in ***Citrus* (Orange/Lemon) and *Mango***).`,
            pa: `### [Level B: Basic — Class 6–8 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **ਸਜੀਵਾਂ ਦੇ ਲੱਛਣ ਅਤੇ ਵਰਗੀਕਰਨ ਦੀ ਲੜੀ (Taxonomic Hierarchy):**
   - **ਪਰਿਭਾਸ਼ਿਤ ਲੱਛਣ (Defining Properties — ਬਿਨਾਂ ਕਿਸੇ ਅਪਵਾਦ ਦੇ):** **ਸੈਲੂਲਰ ਸੰਗਠਨ (Cellular organization)**, **ਮੈਟਾਬੋਲਿਜ਼ਮ (Metabolism)** ਅਤੇ **ਚੇਤਨਾ/ਸੰਵੇਦਨਸ਼ੀਲਤਾ (Consciousness)**। ਵਾਧਾ ਅਤੇ ਪ੍ਰਜਨਨ ਪਰਿਭਾਸ਼ਿਤ ਲੱਛਣ ਨਹੀਂ ਹਨ ਕਿਉਂਕਿ ਖੱਚਰ (Mule) ਅਤੇ ਕਾਮਾ ਮਧੂ-ਮੱਖੀਆਂ ਪ੍ਰਜਨਨ ਨਹੀਂ ਕਰਦੀਆਂ।
   - **ਵਰਗੀਕਰਨ ਦੀ ਲੜੀ (ਵਧਦੇ ਕ੍ਰਮ ਵਿੱਚ):** **Species (ਜਾਤੀ) → Genus (ਵੰਸ਼) → Family (ਕੁਲ) → Order (ਗਣ) → Class (ਵਰਗ) → Phylum/Division → Kingdom (ਜਗਤ)**। **Species** (ਸ਼ਬਦ **John Ray** ਨੇ ਦਿੱਤਾ) ਵਰਗੀਕਰਨ ਦੀ ਸਭ ਤੋਂ ਛੋਟੀ ਅਤੇ ਬੁਨਿਆਦੀ ਇਕਾਈ ਹੈ।
2. **ਫੁੱਲਦਾਰ ਪੌਦੇ ਦੇ ਭਾਗ:**
   - **ਜੜ੍ਹ ਪ੍ਰਣਾਲੀ:** ਮੂਸਲਾ ਜੜ੍ਹ (Tap root — ਦੋ-ਬੀਜ ਪੱਤਰੀ ਜਿਵੇਂ ਸਰ੍ਹੋਂ, ਛੋਲੇ), ਰੇਸ਼ੇਦਾਰ ਜੜ੍ਹ (Fibrous root — ਇੱਕ-ਬੀਜ ਪੱਤਰੀ ਜਿਵੇਂ ਕਣਕ, ਝੋਨਾ) ਅਤੇ ਸਥਾਨਿਕ ਜੜ੍ਹ (Adventitious root — ਬੋਹੜ ਦੀਆਂ ਸਹਾਰਾ ਜੜ੍ਹਾਂ)।
   - **ਫੁੱਲ ਦੇ ਚਾਰ ਚੱਕਰ:** ਬਾਹਰੀ ਦਲਪੁੰਜ (Calyx — Sepals, K), ਦਲਪੁੰਜ (Corolla — Petals, C), ਪੁੰਕੇਸਰ ਚੱਕਰ (Androecium — Stamens, A) ਅਤੇ ਇਸਤਰੀਕੇਸਰ ਚੱਕਰ (Gynoecium — Carpels, G)।

---

### [Level I: Intermediate — Class 9–10 ਮੱਧ ਪੱਧਰ]
1. **ਦੋ-ਨਾਮੀ ਨਾਮਕਰਨ (Binomial Nomenclature), ਪੰਜ-ਜਗਤ ਅਤੇ ਤਿੰਨ-ਡੋਮੇਨ ਪ੍ਰਣਾਲੀ:**
   - **Carolus Linnaeus** (*Species Plantarum*, 1753) ਨੇ **ਦੋ-ਨਾਮੀ ਨਾਮਕਰਨ** ਦਿੱਤਾ (ਵੰਸ਼ ਨਾਮ + ਜਾਤੀ ਨਾਮ, ਜਿਵੇਂ *Mangifera indica* Linn.)। ਪੌਦਿਆਂ ਲਈ **ICBN** ਅਤੇ ਜੰਤੂਆਂ ਲਈ **ICZN** ਨਿਯਮ ਲਾਗੂ ਹੁੰਦੇ ਹਨ।
   - **R.H. Whittaker (1969)** ਨੇ **5-ਜਗਤ ਵਰਗੀਕਰਨ** ਦਿੱਤਾ: **Monera** (ਪ੍ਰੋਕੈਰੀਓਟਿਕ, ਪੈਪਟੀਡੋਗਲਾਈਕਨ ਕੰਧ; *Mycoplasma* ਵਿੱਚ ਸੈੱਲ ਕੰਧ ਨਹੀਂ ਹੁੰਦੀ), **Protista** (ਇੱਕ-ਸੈੱਲੀ ਯੂਕੈਰੀਓਟਸ — ਡਾਇਟਮ, ਡਾਇਨੋਫਲੈਜੀਲੇਟਸ, ਯੂਗਲੀਨਾ), **Fungi** (ਕਾਈਟਿਨ/Chitin ਦੀ ਸੈੱਲ ਕੰਧ, ਪਰਪੋਸ਼ੀ), **Plantae** (ਸੈਲੂਲੋਜ਼ ਕੰਧ, ਸਵੈ-ਪੋਸ਼ੀ) ਅਤੇ **Animalia** (ਸੈੱਲ ਕੰਧ ਰਹਿਤ)।
   - **Carl Woese (1990)** ਨੇ **16S rRNA** ਦੇ ਆਧਾਰ 'ਤੇ ਜੀਵਾਂ ਨੂੰ **3 ਡੋਮੇਨਾਂ (Archaea, Bacteria, Eukarya)** ਅਤੇ 6 ਜਗਤਾਂ ਵਿੱਚ ਵੰਡਿਆ।
2. **ਵਿਸ਼ਾਣੂ (Viruses), ਵਾਇਰੋਇਡਜ਼ (Viroids), ਪ੍ਰਾਇਓਨਜ਼ (Prions) ਅਤੇ ਲਾਈਕੇਨ (Lichens):**
   - **Viruses:** **Dmitri Ivanowsky (1892)** ਨੇ ਤੰਬਾਕੂ ਮੋਜ਼ੇਕ ਵਿਸ਼ਾਣੂ (TMV) ਦੀ ਖੋਜ ਕੀਤੀ; **M.W. Beijerinck (1898)** ਨੇ ਇਸਨੂੰ ***Contagium vivum fluidum*** ਕਿਹਾ; **W.M. Stanley (1935)** ਨੇ TMV ਦੇ ਰਵੇ (crystals) ਬਣਾਏ। ਪੌਦਾ ਵਿਸ਼ਾਣੂਆਂ ਵਿੱਚ ਆਮ ਤੌਰ 'ਤੇ **ssRNA** (ਜਿਵੇਂ TMV) ਅਤੇ ਜੀਵਾਣੂ-ਭੋਜੀ (Bacteriophages) ਵਿੱਚ **dsDNA** ਹੁੰਦਾ ਹੈ।
   - **Viroids:** **T.O. Diener (1971)** ਨੇ ਖੋਜ ਕੀਤੀ — **ਪ੍ਰੋਟੀਨ ਕੋਟ (capsid) ਤੋਂ ਬਿਨਾਂ ਮੁਕਤ ਘੱਟ ਅਣੂ-ਭਾਰ ਵਾਲਾ RNA**; ਆਲੂ ਦਾ *Potato Spindle Tuber Disease (PSTD)* ਫੈਲਾਉਂਦਾ ਹੈ।
   - **Prions:** ਨਿਊਕਲਿਕ ਐਸਿਡ ਤੋਂ ਬਿਨਾਂ **ਸੰਕ੍ਰਾਮਕ ਮੁੜੇ ਹੋਏ ਪ੍ਰੋਟੀਨ ਕਣ** — ਗਾਵਾਂ ਵਿੱਚ *Mad Cow Disease (BSE)* ਅਤੇ ਮਨੁੱਖਾਂ ਵਿੱਚ *Creutzfeldt-Jakob Disease (CJD)* ਫੈਲਾਉਂਦੇ ਹਨ।
   - **Lichens:** ਕਾਈ (**Phycobiont** — ਭੋਜਨ ਬਣਾਉਂਦਾ ਹੈ) ਅਤੇ ਉੱਲੀ (**Mycobiont** — ਪਾਣੀ/ਖਣਿਜ ਸੋਖਦੀ ਹੈ) ਦਾ ਸਹਿਜੀਵੀ ਸਬੰਧ; ਇਹ **SO₂ ਹਵਾ ਪ੍ਰਦੂਸ਼ਣ ਦੇ ਕੁਦਰਤੀ ਸੂਚਕ (Bioindicators)** ਹਨ।

---

### [Level H: Higher Secondary — Class 11–12 ਉੱਚ ਪੱਧਰ]
1. **ਪੌਦਾ ਜਗਤ (Plant Kingdom) ਦੀ ਤੁਲਨਾਤਮਕ ਸਾਰਣੀ:**
   | ਵਰਗ / ਸਮੂਹ | ਵਰਣਕ (Pigments) ਅਤੇ ਸੰਚਿਤ ਭੋਜਨ | ਸੈੱਲ ਕੰਧ ਅਤੇ ਫਲੈਜੇਲਾ | ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਤੇ ਉਦਾਹਰਣਾਂ |
   |---|---|---|---|
   | **Chlorophyceae** (ਹਰੀ ਕਾਈ) | **Chl a, b**; **Starch** (Pyrenoids ਵਿੱਚ) | Cellulose + Pectose; 2–8 ਬਰਾਬਰ, ਸਿਖਰਲੇ (apical) ਫਲੈਜੇਲਾ | *Chlamydomonas, Volvox, Ulothrix, Spirogyra, Chara, Chlorella* |
   | **Phaeophyceae** (ਭੂਰੀ ਕਾਈ) | **Chl a, c**, **Fucoxanthin**; **Mannitol ਅਤੇ Laminarin** | Cellulose + **Algin**; 2 ਅਸਮਾਨ, ਪਾਸੇ ਵਾਲੇ (lateral) ਫਲੈਜੇਲਾ | *Ectocarpus, Dictyota, Laminaria* (ਆਇਓਡੀਨ ਸਰੋਤ), *Sargassum, Fucus* |
   | **Rhodophyceae** (ਲਾਲ ਕਾਈ) | **Chl a, d**, **r-Phycoerythrin**; **Floridean starch** | Cellulose + **Agar / Carrageenan**; **ਫਲੈਜੇਲਾ ਗੈਰ-ਹਾਜ਼ਰ** | *Polysiphonia, Porphyra*, ***Gelidium* ਅਤੇ *Gracilaria*** (Agar-agar ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ) |
   | **Bryophyta** (ਪੌਦਾ ਜਗਤ ਦੇ ਜਲ-ਥਲੀ) | Chl a, b; Starch | Cellulose; ਨਿਸ਼ੇਚਨ ਲਈ ਪਾਣੀ ਜ਼ਰੂਰੀ | **ਯੁਗਮਕੋਦਭਿਦ (Gametophyte, n) ਮੁੱਖ ਪੜਾਅ**; ਬੀਜਾਣੂਉਦਭਿਦ (2n) ਨਿਰਭਰ; *Marchantia* (gemma cups), *Funaria*, *Sphagnum* (Peat moss) |
   | **Pteridophyta** (ਪਹਿਲੇ ਨਾੜੀਦਾਰ ਪੌਦੇ) | Chl a, b; Starch | Xylem ਵਿੱਚ vessels ਅਤੇ Phloem ਵਿੱਚ companion cells ਗੈਰ-ਹਾਜ਼ਰ | **ਬੀਜਾਣੂਉਦਭਿਦ (Sporophyte, 2n) ਮੁੱਖ ਪੜਾਅ**; ਸਮਬੀਜਾਣੂ (*Dryopteris, Pteris, Equisetum*) ਬਨਾਮ **ਵਿਸ਼ਮਬੀਜਾਣੂ (Heterosporous: *Selaginella, Salvinia, Marsilea, Azolla* — ਬੀਜ ਆਦਤ ਦੀ ਸ਼ੁਰੂਆਤ!)** |
   | **Gymnosperms** (ਨਗਨ-ਬੀਜੀ ਪੌਦੇ) | Chl a, b; Starch | Vessels ਸਿਰਫ਼ *Gnetales* (*Ephedra, Gnetum*) ਵਿੱਚ | ਅੰਡਕ (Ovules) ਨਗਨ; **ਭਰੂਣ-ਪੋਸ਼ (Endosperm, n) ਨਿਸ਼ੇਚਨ ਤੋਂ ਪਹਿਲਾਂ ਬਣਦਾ ਹੈ**; ***Cycas*** (Coralloid ਜੜ੍ਹਾਂ ਵਿੱਚ *Anabaena*, ਅਸ਼ਾਖਿਤ ਤਣਾ, ਇੱਕ-ਲਿੰਗੀ) ਬਨਾਮ ***Pinus*** (Mycorrhizal ਜੜ੍ਹਾਂ, ਖੰਭਾਂ ਵਾਲੇ ਪਰਾਗ ਕਣ, ਦੋ-ਲਿੰਗੀ) |
2. **ਜੀਵਨ ਚੱਕਰ ਅਤੇ ਫੁੱਲਦਾਰ ਪੌਦਿਆਂ ਦੀ ਆਕਾਰिकी (Morphology):**
   - **ਜੀਵਨ ਚੱਕਰ:** **Haplontic** (*Volvox, Spirogyra, Chlamydomonas*), **Diplontic** (ਸਾਰੇ Gymnosperms, Angiosperms ਅਤੇ ਭੂਰੀ ਕਾਈ ***Fucus***), **Haplo-diplontic** (Bryophytes, Pteridophytes, *Ectocarpus, Polysiphonia, Kelps*)।
   - **ਵਿਸ਼ੇਸ਼ ਫੁੱਲ-ਕ੍ਰਮ (Inflorescence):** **Cyathium** (*Euphorbia*), **Verticillaster** (*Ocimum/ਤੁਲਸੀ*), **Hypanthodium** (*Ficus* — ਬੋਹੜ, ਪਿੱਪਲ, ਅੰਜੀਰ)।
   - **ਬੀਜਾਂਡ-ਨਿਆਸ (Placentation):** **Marginal** (*ਮਟਰ/Pea*), **Axile** (*ਚਾਈਨਾ ਰੋਜ਼, ਟਮਾਟਰ, ਨਿੰਬੂ*), **Parietal** (*ਸਰ੍ਹੋਂ/Mustard* — Replum ਝੂਠੀ ਕੰਧ, *Argemone*), **Free-Central** (*Dianthus, Primrose*), **Basal** (*ਸੂਰਜਮੁਖੀ/Sunflower, ਗੇਂਦਾ/Marigold*)।

---

### [Level G: Graduation — B.Sc. ਅਤੇ ਐਡਵਾਂਸਡ ਪੱਧਰ]
1. **ਪੌਦਾ ਸਰੀਰ ਰਚਨਾ (Plant Anatomy), ਸਟੀਲਰ ਵਿਕਾਸ ਅਤੇ ਦੂਜੇ ਦਰਜੇ ਦਾ ਵਾਧਾ (Secondary Growth):**
   - **ਨਾੜੀ ਪੁਲ (Vascular Bundles):** ਜੜ੍ਹਾਂ ਵਿੱਚ **Radial ਅਤੇ Exarch** (ਦੋ-ਬੀਜ ਪੱਤਰੀ ਜੜ੍ਹ ਵਿੱਚ 2–4 diarch-tetrarch; ਇੱਕ-ਬੀਜ ਪੱਤਰੀ ਜੜ੍ਹ ਵਿੱਚ **polyarch >6**); ਦੋ-ਬੀਜ ਪੱਤਰੀ ਤਣੇ ਵਿੱਚ **Conjoint, Collateral, Endarch ਅਤੇ Open** (ਕੈਂਬੀਅਮ ਮੌਜੂਦ); ਇੱਕ-ਬੀਜ ਪੱਤਰੀ ਤਣੇ ਵਿੱਚ **Conjoint, Collateral ਅਤੇ Closed** (ਕੈਂਬੀਅਮ ਗੈਰ-ਹਾਜ਼ਰ)।
   - **Periderm (ਪੈਰੀਡਰਮ):** **Phellogen** (Cork Cambium) + **Phellem** (Cork — **Suberin** ਜਮ੍ਹਾਂ ਹੁੰਦਾ ਹੈ) + **Phelloderm** (Secondary Cortex)। **Heartwood (Duramen)** ਵਿਚਕਾਰਲੀ ਗੂੜ੍ਹੀ, ਮ੍ਰਿਤ ਲੱਕੜ ਹੈ ਜਿਸ ਵਿੱਚ ਟੈਨਿਨ/ਰੇਜ਼ਿਨ ਅਤੇ **Tyloses** ਹੁੰਦੇ ਹਨ, ਜਦਕਿ **Sapwood (Alburnum)** ਬਾਹਰੀ ਪਾਣੀ ਸੰਚਾਲਕ ਲੱਕੜ ਹੈ।
2. **ਭਰੂਣ ਵਿਗਿਆਨ (Embryology) ਅਤੇ ਦੋਹਰਾ ਨਿਸ਼ੇਚਨ (Double Fertilization):**
   - **ਪਰਾਗਕੋਸ਼ (Anther):** ਬਾਹਰੋਂ ਅੰਦਰ 4 ਪਰਤਾਂ — Epidermis → Endothecium (dehiscence ਵਿੱਚ ਮਦਦਗਾਰ) → Middle layers → **Tapetum** (ਪੋਸ਼ਣ ਦੇਣ ਵਾਲੀ ਬਹੁ-ਕੇਂਦਰਕੀ ਪਰਤ ਜੋ **Sporopollenin** ਬਣਾਉਂਦੀ ਹੈ)।
   - ***Polygonum*-ਕਿਸਮ ਦਾ ਭਰੂਣ ਕੋਸ਼ (Embryo Sac):** ਇੱਕ ਕਿਰਿਆਸ਼ੀਲ ਗੁਰੂ-ਬੀਜਾਣੂ (n) ਵਿੱਚ **3 ਮੁਕਤ-ਕੇਂਦਰਕੀ ਸਮਸੂਤਰੀ ਵੰਡਾਂ (Mitotic divisions)** ਨਾਲ **7-ਸੈੱਲੀ, 8-ਕੇਂਦਰਕੀ (7-celled, 8-nucleate)** ਮਾਦਾ ਯੁਗਮਕੋਦਭਿਦ ਬਣਦਾ ਹੈ (3 Egg apparatus + 3 Antipodals + 1 Central cell ਜਿਸ ਵਿੱਚ 2 Polar nuclei ਹਨ)।
   - **ਦੋਹਰਾ ਨਿਸ਼ੇਚਨ (S.G. Nawaschin, 1898):**
     1. **Syngamy:** ਪਹਿਲਾ ਨਰ ਯੁਗਮਕ (n) + ਅੰਡ ਸੈੱਲ (n) → **Zygote (2n)**।
     2. **Triple Fusion:** ਦੂਜਾ ਨਰ ਯੁਗਮਕ (n) + ਦੋ ਧਰੁਵੀ ਕੇਂਦਰਕ (n + n) → **Primary Endosperm Nucleus (PEN, 3n)**।
   - **Apomixis** (ਬਿਨਾਂ ਨਿਸ਼ੇਚਨ ਤੋਂ ਬੀਜ ਬਣਨਾ — *Asteraceae*, ਘਾਹ) ਅਤੇ **Polyembryony** (ਇੱਕ ਬੀਜ ਵਿੱਚ ਇੱਕ ਤੋਂ ਵੱਧ ਭਰੂਣ — **Leeuwenhoek, 1719** ਨੇ ***Citrus* (ਸੰਤਰਾ/ਨਿੰਬੂ)** ਅਤੇ ਅੰਬ ਵਿੱਚ ਖੋਜਿਆ)।`,
            hi: `### [Level B: Basic — Class 6–8 आधारभूत स्तर]
1. **सजीवों के लक्षण एवं वर्गिकी पदानुक्रम (Taxonomic Hierarchy):**
   - **परिभाषित लक्षण (Defining Properties — अपवाद रहित):** **कोशिकीय संगठन (Cellular organization)**, **उपापचय (Metabolism)** एवं **चेतना/संवेदनशीलता (Consciousness)**। वृद्धि एवं प्रजनन परिभाषित लक्षण नहीं हैं क्योंकि खच्चर (Mule) तथा श्रमिक मधुमक्खियाँ प्रजनन नहीं करतीं।
   - **वर्गिकी पदानुक्रम (आरोही क्रम):** **Species (जाति) → Genus (वंश) → Family (कुल) → Order (गण) → Class (वर्ग) → Phylum/Division → Kingdom (जगत)**। **Species** (शब्द **John Ray** द्वारा प्रदत्त) वर्गीकरण की सबसे छोटी आधारभूत इकाई है।
2. **पुष्पी पादप के भाग:**
   - **मूल तंत्र:** मूसला जड़ (Tap root — द्विबीजपत्री जैसे सरसों, चना), झकड़ा/रेशेदार जड़ (Fibrous root — एकबीजपत्री जैसे गेहूँ, धान) तथा अपस्थानिक जड़ (Adventitious root — बरगद की स्तंभ मूल)।
   - **पुष्प के चार चक्र:** बाह्यदलपुंज (Calyx — Sepals, K), दलपुंज (Corolla — Petals, C), पुमंग (Androecium — Stamens, A) तथा जायांग (Gynoecium — Carpels, G)।

---

### [Level I: Intermediate — Class 9–10 मध्यम स्तर]
1. **द्विपद नामपद्धति (Binomial Nomenclature), पाँच-जगत एवं तीन-डोमेन प्रणाली:**
   - **Carolus Linnaeus** (*Species Plantarum*, 1753) ने **द्विपद नामपद्धति** प्रतिपादित की (वंश नाम + जाति संकेत पद, जैसे *Mangifera indica* Linn.)। पादपों हेतु **ICBN** तथा जंतुओं हेतु **ICZN** नियम लागू होते हैं।
   - **R.H. Whittaker (1969)** का **5-जगत वर्गीकरण**: **Monera** (प्रोकैरियोटिक, पेप्टिडोग्लाइकन भित्ति; *Mycoplasma* में कोशिका भित्ति अनुपस्थित), **Protista** (एककोशिकीय यूकैरियोट्स — डायटम, डाइनोफ्लैजेलेट्स, यूग्लीना), **Fungi** (काइटिन/Chitin भित्ति, विषमपोषी), **Plantae** (सेलुलोज़ भित्ति, स्वपोषी) और **Animalia** (कोशिका भित्ति रहित)।
   - **Carl Woese (1990)** ने **16S rRNA** के आधार पर जीवों को **3 डोमेन (Archaea, Bacteria, Eukarya)** एवं 6 जगतों में विभाजित किया।
2. **विषाणु (Viruses), वायरोइड (Viroids), प्रियोन (Prions) एवं लाइकेन (Lichens):**
   - **Viruses:** **Dmitri Ivanowsky (1892)** ने तंबाकू मोज़ेक विषाणु (TMV) की खोज की; **M.W. Beijerinck (1898)** ने इसे ***Contagium vivum fluidum*** कहा; **W.M. Stanley (1935)** ने TMV का क्रिस्टलीकरण किया। पादप विषाणुओं में सामान्यतः **ssRNA** (जैसे TMV) और जीवाणुभोजी (Bacteriophages) में **dsDNA** होता है।
   - **Viroids:** **T.O. Diener (1971)** द्वारा खोजे गए — **प्रोटीन आवरण (capsid) रहित मुक्त अल्प अणुभार वाला RNA**; आलू का *Potato Spindle Tuber Disease (PSTD)* उत्पन्न करता है।
   - **Prions:** न्यूक्लिक अम्ल रहित **संक्रामक विकृत प्रोटीन कण** — मवेशियों में *Mad Cow Disease (BSE)* और मनुष्यों में *Creutzfeldt-Jakob Disease (CJD)* उत्पन्न करते हैं।
   - **Lichens:** शैवाल (**Phycobiont** — स्वपोषी) और कवक (**Mycobiont** — जल/खनिज अवशोषण) का सहजीवी संबंध; ये **SO₂ वायु प्रदूषण के सर्वोत्तम जैव-सूचक (Bioindicators)** हैं।

---

### [Level H: Higher Secondary — Class 11–12 उच्चतर स्तर]
1. **पादप जगत (Plant Kingdom) की तुलनात्मक सारणी:**
   | वर्ग / समूह | वर्णक (Pigments) एवं संचित भोजन | कोशिका भित्ति एवं कशाभिका (Flagella) | प्रमुख विशेषताएँ एवं उदाहरण |
   |---|---|---|---|
   | **Chlorophyceae** (हरा शैवाल) | **Chl a, b**; **Starch** (Pyrenoids में) | Cellulose + Pectose; 2–8 समान, शीर्षस्थ (apical) कशाभिका | *Chlamydomonas, Volvox, Ulothrix, Spirogyra, Chara, Chlorella* |
   | **Phaeophyceae** (भूरा शैवाल) | **Chl a, c**, **Fucoxanthin**; **Mannitol एवं Laminarin** | Cellulose + **Algin**; 2 असमान, पार्श्वीय (lateral) कशाभिका | *Ectocarpus, Dictyota, Laminaria* (आयोडीन स्रोत), *Sargassum, Fucus* |
   | **Rhodophyceae** (लाल शैवाल) | **Chl a, d**, **r-Phycoerythrin**; **Floridean starch** | Cellulose + **Agar / Carrageenan**; **कशाभिका पूर्णतः अनुपस्थित** | *Polysiphonia, Porphyra*, ***Gelidium* एवं *Gracilaria*** (Agar-agar प्राप्त होता है) |
   | **Bryophyta** (पादप जगत के उभयचर) | Chl a, b; Starch | Cellulose; निषेचन हेतु जल आवश्यक | **युग्मकोद्भिद (Gametophyte, n) प्रभावी अवस्था**; बीजाणुद्भिद (2n) आश्रित; *Marchantia* (gemma cups), *Funaria*, *Sphagnum* (Peat moss) |
   | **Pteridophyta** (प्रथम संवहनी अपुष्पी पादप) | Chl a, b; Starch | Xylem में वाहिकाएँ (vessels) व Phloem में सहकोशिकाएँ अनुपस्थित | **बीजाणुद्भिद (Sporophyte, 2n) प्रभावी अवस्था**; समबीजाणुक (*Dryopteris, Pteris, Equisetum*) बनाम **विषमबीजाणुक (Heterosporous: *Selaginella, Salvinia, Marsilea, Azolla* — बीज स्वभाव का पूर्वगामी!)** |
   | **Gymnosperms** (अनावृतबीजी पादप) | Chl a, b; Starch | Vessels केवल *Gnetales* (*Ephedra, Gnetum*) में उपस्थित | बीजांड अनावृत; **भ्रूणपोष (Endosperm, n) निषेचन से पूर्व बनता है**; ***Cycas*** (प्रवाल/Coralloid जड़ों में *Anabaena*, अशाखित तना, एकलिंगाश्रयी) बनाम ***Pinus*** (कवकमूल/Mycorrhiza जड़ें, सपक्ष परागकण, द्विलिंगाश्रयी) |
2. **जीवन चक्र एवं पुष्पी पादपों की आकारिकी (Morphology):**
   - **जीवन चक्र:** **Haplontic** (*Volvox, Spirogyra, Chlamydomonas*), **Diplontic** (सभी Gymnosperms, Angiosperms तथा भूरा शैवाल ***Fucus***), **Haplo-diplontic** (Bryophytes, Pteridophytes, *Ectocarpus, Polysiphonia, Kelps*)।
   - **विशिष्ट पुष्पक्रम (Inflorescence):** **Cyathium** (*Euphorbia*), **Verticillaster** (*Ocimum/तुलसी*), **Hypanthodium** (*Ficus* — बरगद, पीपल, अंजीर)।
   - **बीजांडन्यास (Placentation):** **Marginal** (*मटर/Pea*), **Axile** (*गुड़हल, टमाटर, नींबू*), **Parietal** (*सरसों/Mustard* — आभासी पट Replum, *Argemone*), **Free-Central** (*Dianthus, Primrose*), **Basal** (*सूरजमुखी/Sunflower, गेंदा/Marigold*)।

---

### [Level G: Graduation — B.Sc. एवं स्नातक स्तर]
1. **पादप शरीर (Plant Anatomy), रंभीय विकास (Stelar Evolution) एवं द्वितीयक वृद्धि:**
   - **संवहन बंडल (Vascular Bundles):** जड़ों में **Radial एवं Exarch** (द्विबीजपत्री जड़ में 2–4 diarch-tetrarch; एकबीजपत्री जड़ में **polyarch >6**); द्विबीजपत्री तने में **Conjoint, Collateral, Endarch एवं Open** (कैम्बियम उपस्थित); एकबीजपत्री तने में **Conjoint, Collateral एवं Closed** (कैम्बियम अनुपस्थित)।
   - **Periderm (परिचर्म):** **Phellogen** (कॉर्क कैम्बियम) + **Phellem** (कॉर्क — **Suberin** निक्षेपण) + **Phelloderm** (द्वितीयक वल्कुट)। **Heartwood (Duramen/अंतःकाष्ठ)** केंद्रीय गहरी, मृत लकड़ी है जिसमें टैनिन/रेज़िन व **Tyloses** होते हैं, जबकि **Sapwood (Alburnum/रसकाष्ठ)** परिधीय जल-संवहनी लकड़ी है।
2. **भ्रूणविज्ञान (Embryology) एवं द्विनिषेचन (Double Fertilization):**
   - **परागकोश भित्ति:** बाहर से भीतर 4 परतें — Epidermis → Endothecium (स्फुटन में सहायक) → Middle layers → **Tapetum** (पोषक बहुकेंद्रकीय परत जो **Sporopollenin** स्रावित करती है)।
   - ***Polygonum*-प्रकार का भ्रूणकोष (Embryo Sac):** एक क्रियाशील गुरुबीजाणु (n) में **3 मुक्त-केंद्रकीय समसूत्री विभाजनों** से **7-कोशिकीय, 8-केंद्रकीय (7-celled, 8-nucleate)** मादा युग्मकोद्भिद बनता है (3 अंड उपकरण + 3 प्रतिव्यासांत/Antipodals + 1 केंद्रीय कोशिका जिसमें 2 ध्रुवीय केंद्रक हैं)।
   - **द्विनिषेचन (S.G. Nawaschin, 1898):**
     1. **Syngamy (युग्मक संलयन):** प्रथम नर युग्मक (n) + अंड कोशिका (n) → **युग्मनज / Zygote (2n)**।
     2. **Triple Fusion (त्रिसंलयन):** द्वितीय नर युग्मक (n) + दो ध्रुवीय केंद्रक (n + n) → **प्राथमिक भ्रूणपोष केंद्रक (PEN, 3n)**।
   - **Apomixis (असंगजनन — बिना निषेचन बीज निर्माण: *Asteraceae*, घास)** तथा **Polyembryony (बहुभ्रूणता — एक बीज में एक से अधिक भ्रूण: Leeuwenhoek, 1719 ने *Citrus* व आम में खोजा)**।`
        },
        keyNotes: {
            en: [
                'R.H. Whittaker (1969) proposed the 5-Kingdom system (Monera, Protista, Fungi, Plantae, Animalia), while Carl Woese (1990) used 16S rRNA to establish 3 Domains (Archaea, Bacteria, Eukarya).',
                'Viroids (T.O. Diener, 1971) are free low-molecular-weight ssRNA lacking a protein coat (capsid), whereas Prions are infectious misfolded proteins lacking nucleic acids.',
                'Algal Classes Blueprint: Chlorophyceae (Chl a, b; starch in pyrenoids) | Phaeophyceae (Chl a, c; fucoxanthin; mannitol & laminarin; algin) | Rhodophyceae (Chl a, d; r-phycoerythrin; floridean starch; non-flagellated; agar from Gelidium & Gracilaria).',
                'Heterosporous Pteridophytes (Selaginella, Salvinia, Marsilea, Azolla) produce microspores and megaspores and retain the female gametophyte on the parent sporophyte — the evolutionary precursor to the seed habit.',
                'Gymnosperm Endosperm is haploid (n) because it develops from the female gametophyte BEFORE fertilization, whereas Angiosperm Endosperm is triploid (3n) formed AFTER double fertilization (Triple Fusion).',
                'The mature Polygonum-type Angiosperm female gametophyte (embryo sac) is 7-celled and 8-nucleate, formed from 1 functional chalazal megaspore via 3 free-nuclear mitotic divisions.'
            ],
            pa: [
                'R.H. Whittaker (1969) ਨੇ 5-ਜਗਤ ਵਰਗੀਕਰਨ ਦਿੱਤਾ, ਜਦਕਿ Carl Woese (1990) ਨੇ 16S rRNA ਦੇ ਆਧਾਰ ਉੱਤੇ 3-ਡੋਮੇਨ ਪ੍ਰਣਾਲੀ (Archaea, Bacteria, Eukarya) ਦਿੱਤੀ।',
                'Viroids (T.O. Diener, 1971) ਪ੍ਰੋਟੀਨ ਕੋਟ ਤੋਂ ਬਿਨਾਂ ਮੁਕਤ ਘੱਟ ਅਣੂ-ਭਾਰ ਵਾਲੇ ssRNA ਹਨ, ਜਦਕਿ Prions ਨਿਊਕਲਿਕ ਐਸਿਡ ਤੋਂ ਬਿਨਾਂ ਸੰਕ੍ਰਾਮਕ ਪ੍ਰੋਟੀਨ ਕਣ ਹਨ।',
                'ਕਾਈ ਦੇ 3 ਵਰਗ: Chlorophyceae (Chl a, b; ਸਟਾਰਚ) | Phaeophyceae (Chl a, c; fucoxanthin; mannitol ਤੇ laminarin) | Rhodophyceae (Chl a, d; r-phycoerythrin; floridean starch; Gelidium ਤੇ Gracilaria ਤੋਂ Agar)।',
                'ਵਿਸ਼ਮਬੀਜਾਣੂ ਟੈਰੀਡੋਫਾਈਟਸ (Selaginella, Salvinia, Marsilea, Azolla) ਵਿੱਚ ਬੀਜ ਬਣਨ ਦੀ ਆਦਤ (Seed habit) ਦੀ ਸ਼ੁਰੂਆਤ ਦੇਖੀ ਜਾਂਦੀ ਹੈ।',
                'ਜਿਮਨੋਸਪਰਮ ਦਾ ਭਰੂਣ-ਪੋਸ਼ (Endosperm) ਅਗੁਣਿਤ (n) ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ ਇਹ ਨਿਸ਼ੇਚਨ ਤੋਂ ਪਹਿਲਾਂ ਬਣਦਾ ਹੈ, ਜਦਕਿ ਐਂਜੀਓਸਪਰਮ ਦਾ ਭਰੂਣ-ਪੋਸ਼ ਤ੍ਰਿਗੁਣਿਤ (3n) ਹੁੰਦਾ ਹੈ।',
                'ਫੁੱਲਦਾਰ ਪੌਦਿਆਂ ਦਾ ਪਰਿਪੱਕ Polygonum-ਕਿਸਮ ਦਾ ਭਰੂਣ ਕੋਸ਼ (Embryo sac) 7-ਸੈੱਲੀ ਅਤੇ 8-ਕੇਂਦਰਕੀ (7-celled, 8-nucleate) ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'R.H. Whittaker (1969) ने 5-जगत वर्गीकरण दिया, जबकि Carl Woese (1990) ने 16S rRNA के आधार पर 3-डोमेन प्रणाली (Archaea, Bacteria, Eukarya) प्रतिपादित की।',
                'Viroids (T.O. Diener, 1971) प्रोटीन आवरण रहित मुक्त अल्प अणुभार वाले ssRNA हैं, जबकि Prions न्यूक्लिक अम्ल रहित संक्रामक प्रोटीन कण हैं।',
                'शैवाल के 3 वर्ग: Chlorophyceae (Chl a, b; स्टार्च) | Phaeophyceae (Chl a, c; fucoxanthin; mannitol व laminarin) | Rhodophyceae (Chl a, d; r-phycoerythrin; floridean starch; Gelidium व Gracilaria से Agar)।',
                'विषमबीजाणुक टेरिडोफाइट्स (Selaginella, Salvinia, Marsilea, Azolla) में बीज स्वभाव (Seed habit) का विकासवादी पूर्वगामी रूप मिलता है।',
                'जिम्नोस्पर्म का भ्रूणपोष (Endosperm) अगुणित (n) होता है क्योंकि यह निषेचन से पूर्व बनता है, जबकि एंजियोस्पर्म का भ्रूणपोष त्रिगुणित (3n) होता है।',
                'पुष्पी पादपों का परिपक्व Polygonum-प्रकार का भ्रूणकोष (Embryo sac) 7-कोशिकीय एवं 8-केंद्रकीय (7-celled, 8-nucleate) होता है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Heterosporous Pteridophytes Mnemonic (S-S-M-A): Selaginella, Salvinia, Marsilea, Azolla (all others like Dryopteris, Pteris, Equisetum, Lycopodium are homosporous).',
                'Placentation Quick-Match: Marginal -> Pea | Axile -> China rose, Tomato, Lemon | Parietal -> Mustard (Replum), Argemone | Free-Central -> Dianthus, Primrose | Basal -> Sunflower, Marigold.',
                'Life Cycle Exceptions: Fucus is a Diplontic alga; Ectocarpus, Polysiphonia, and Kelps (Laminaria) are Haplo-diplontic algae.',
                'Anatomical Formulas: Periderm = Phellem (Cork) + Phellogen (Cork Cambium) + Phelloderm (Secondary Cortex) | Root = Radial + Exarch | Stem = Conjoint + Endarch.',
                'Embryology Formulas: Total meiotic divisions to produce N seeds = N + (N / 4) = 1.25 N | Double Fertilization = Syngamy (2n zygote) + Triple Fusion (3n PEN) involving 5 nuclei.'
            ],
            pa: [
                'ਵਿਸ਼ਮਬੀਜਾਣੂ ਟੈਰੀਡੋਫਾਈਟਸ ਟ੍ਰਿਕ (S-S-M-A): Selaginella, Salvinia, Marsilea, Azolla (Dryopteris, Pteris, Equisetum ਸਮਬੀਜਾਣੂ ਹਨ)।',
                'ਬੀਜਾਂਡ-ਨਿਆਸ (Placentation): Marginal -> ਮਟਰ | Axile -> ਚਾਈਨਾ ਰੋਜ਼, ਟਮਾਟਰ, ਨਿੰਬੂ | Parietal -> ਸਰ੍ਹੋਂ (Replum), Argemone | Free-Central -> Dianthus, Primrose | Basal -> ਸੂਰਜਮੁਖੀ, ਗੇਂਦਾ।',
                'ਜੀਵਨ ਚੱਕਰ ਅਪਵਾਦ: Fucus ਡਿਪਲੋਂਟਿਕ ਕਾਈ ਹੈ; Ectocarpus, Polysiphonia ਅਤੇ Kelps ਹੈਪਲੋ-ਡਿਪਲੋਂਟਿਕ ਕਾਈ ਹਨ।',
                'ਪੈਰੀਡਰਮ ਸੂਤਰ: Periderm = Phellem + Phellogen + Phelloderm | ਜੜ੍ਹ = Radial + Exarch | ਤਣਾ = Conjoint + Endarch।',
                'ਭਰੂਣ ਵਿਗਿਆਨ ਸੂਤਰ: N ਬੀਜ ਬਣਾਉਣ ਲਈ ਕੁੱਲ ਅਰਧ-ਸੂਤਰੀ ਵੰਡਾਂ (Meiotic divisions) = N + (N / 4) = 1.25 N।'
            ],
            hi: [
                'विषमबीजाणुक टेरिडोफाइट्स ट्रिक (S-S-M-A): Selaginella, Salvinia, Marsilea, Azolla (Dryopteris, Pteris, Equisetum समबीजाणुक हैं)।',
                'बीजांडन्यास (Placentation): Marginal -> मटर | Axile -> गुड़हल, टमाटर, नींबू | Parietal -> सरसों (Replum), Argemone | Free-Central -> Dianthus, Primrose | Basal -> सूरजमुखी, गेंदा।',
                'जीवन चक्र अपवाद: Fucus डिप्लोंटिक शैवाल है; Ectocarpus, Polysiphonia और Kelps हैप्लो-डिप्लोंटिक शैवाल हैं।',
                'परिचर्म सूत्र: Periderm = Phellem + Phellogen + Phelloderm | जड़ = Radial + Exarch | तना = Conjoint + Endarch।',
                'भ्रूणविज्ञान सूत्र: N बीज बनाने हेतु कुल अर्धसूत्री विभाजन (Meiotic divisions) = N + (N / 4) = 1.25 N।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Endosperm is triploid (3n) in both Gymnosperms and Angiosperms. Correction: In Gymnosperms, endosperm is haploid (n) because it forms BEFORE fertilization from the female gametophyte; in Angiosperms, it is triploid (3n) formed AFTER double fertilization via triple fusion.',
                'Misconception: Potato and Sweet potato are both modified roots. Correction: Potato (Solanum tuberosum) is a modified underground stem (tuber with axillary buds/eyes), whereas Sweet potato (Ipomoea batatas) is a modified adventitious root (homologous vs analogous organs — they are analogous!).',
                'Misconception: All algae have a haplontic life cycle and motile flagellated spores. Correction: Red algae (Rhodophyceae) completely lack flagellated stages, Fucus (brown alga) has a diplontic life cycle, and Ectocarpus/Polysiphonia/Kelps have a haplo-diplontic life cycle.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਜਿਮਨੋਸਪਰਮ ਅਤੇ ਐਂਜੀਓਸਪਰਮ ਦੋਵਾਂ ਵਿੱਚ ਭਰੂਣ-ਪੋਸ਼ (Endosperm) ਤ੍ਰਿਗੁਣਿਤ (3n) ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਜਿਮਨੋਸਪਰਮ ਵਿੱਚ ਭਰੂਣ-ਪੋਸ਼ ਅਗੁਣਿਤ (n) ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ ਇਹ ਨਿਸ਼ੇਚਨ ਤੋਂ ਪਹਿਲਾਂ ਬਣਦਾ ਹੈ, ਜਦਕਿ ਐਂਜੀਓਸਪਰਮ ਵਿੱਚ ਇਹ ਤ੍ਰਿਗੁਣਿਤ (3n) ਹੁੰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਆਲੂ (Potato) ਅਤੇ ਸ਼ਕਰਕੰਦੀ (Sweet potato) ਦੋਵੇਂ ਰੂਪਾਂਤਰਿਤ ਜੜ੍ਹਾਂ ਹਨ। ਸੁਧਾਰ: ਆਲੂ ਇੱਕ ਰੂਪਾਂਤਰਿਤ ਭੂਮੀਗਤ ਤਣਾ (Stem tuber) ਹੈ ਜਿਸ ਉੱਤੇ ਅੱਖਾਂ (axillary buds) ਹੁੰਦੀਆਂ ਹਨ, ਜਦਕਿ ਸ਼ਕਰਕੰਦੀ ਇੱਕ ਰੂਪਾਂਤਰਿਤ ਸਥਾਨਿਕ ਜੜ੍ਹ (Adventitious root) ਹੈ।',
                'ਭੁਲੇਖਾ: ਸਾਰੀਆਂ ਕਾਈਆਂ (Algae) ਦਾ ਜੀਵਨ ਚੱਕਰ Haplontic ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਲਾਲ ਕਾਈ (Rhodophyceae) ਵਿੱਚ ਫਲੈਜੇਲਾ ਬਿਲਕੁਲ ਨਹੀਂ ਹੁੰਦੇ, Fucus ਦਾ ਜੀਵਨ ਚੱਕਰ Diplontic ਹੈ, ਅਤੇ Ectocarpus ਤੇ Polysiphonia ਦਾ ਜੀਵਨ ਚੱਕਰ Haplo-diplontic ਹੈ।'
            ],
            hi: [
                'भ्रांति: जिम्नोस्पर्म और एंजियोस्पर्म दोनों में भ्रूणपोष (Endosperm) त्रिगुणित (3n) होता है। सुधार: जिम्नोस्पर्म में भ्रूणपोष अगुणित (n) होता है क्योंकि यह निषेचन से पूर्व बनता है, जबकि एंजियोस्पर्म में यह द्विनिषेचन के पश्चात बना त्रिगुणित (3n) ऊतक है।',
                'भ्रांति: आलू (Potato) और शकरकंद (Sweet potato) दोनों रूपांतरित जड़ें हैं। सुधार: आलू एक रूपांतरित भूमिगत तना (Stem tuber) है जिस पर पर्वसंधियाँ (आँखें) होती हैं, जबकि शकरकंद एक रूपांतरित अपस्थानिक जड़ (Adventitious root) है।',
                'भ्रांति: सभी शैवालों का जीवन चक्र Haplontic होता है। सुधार: लाल शैवाल (Rhodophyceae) में कशाभिका (flagella) पूर्णतः अनुपस्थित होती हैं, Fucus का जीवन चक्र Diplontic है, तथा Ectocarpus व Polysiphonia का जीवन चक्र Haplo-diplontic है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'If a diploid angiosperm plant has chromosome number 2n = 24 in its leaf cells, but a tetraploid male plant (4n = 48) pollinates a diploid female plant (2n = 24), find the chromosome number in: (a) Synergid, (b) Zygote, (c) Endosperm (PEN), and (d) Nucellus of the resulting seed.',
                    pa: 'ਜੇਕਰ ਇੱਕ ਦੋ-ਗੁਣਿਤ ਮਾਦਾ ਪੌਦੇ (2n = 24) ਦਾ ਪਰਾਗਣ ਇੱਕ ਚਤੁਰ-ਗੁਣਿਤ ਨਰ ਪੌਦੇ (4n = 48) ਨਾਲ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਬੀਜ ਦੇ (a) Synergid, (b) Zygote, (c) Endosperm (PEN), ਅਤੇ (d) Nucellus ਵਿੱਚ ਗੁਣਸੂਤਰਾਂ ਦੀ ਗਿਣਤੀ ਪਤਾ ਕਰੋ।',
                    hi: 'यदि एक द्विगुणित मादा पादप (2n = 24) का परागण एक चतुर्गुणित नर पादप (4n = 48) द्वारा किया जाता है, तो बनने वाले बीज के (a) सहाय कोशिका (Synergid), (b) युग्मनज (Zygote), (c) भ्रूणपोष (Endosperm), तथा (d) बीजांडकाय (Nucellus) में गुणसूत्रों की संख्या ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Female parent is diploid (2n = 24) -> female gamete (egg cell, synergids, and each polar nucleus) formed after meiosis has n_female = 24 / 2 = 12 chromosomes.',
                        'Male parent is tetraploid (4n = 48) -> male gamete in pollen grain formed after meiosis has n_male = 48 / 2 = 24 chromosomes.',
                        '(a) Synergid is a haploid cell of the female gametophyte = n_female = 12 chromosomes.',
                        '(b) Zygote = Egg cell (n_female) + 1 Male gamete (n_male) = 12 + 24 = 36 chromosomes (triploid embryo!).',
                        '(c) Endosperm (PEN) = 2 Polar nuclei from female (12 + 12) + 1 Male gamete (24) = 24 + 24 = 48 chromosomes.',
                        '(d) Nucellus is maternal sporophytic tissue of the female parent (2n_female) = 24 chromosomes.'
                    ],
                    pa: [
                        'ਮਾਦਾ ਪੌਦਾ (2n = 24) -> ਮਾਦਾ ਯੁਗਮਕ (ਅੰਡ ਸੈੱਲ, Synergid ਅਤੇ ਹਰੇਕ ਧਰੁਵੀ ਕੇਂਦਰਕ) = 24 / 2 = 12 ਗੁਣਸੂਤਰ।',
                        'ਨਰ ਪੌਦਾ (4n = 48) -> ਪਰਾਗ ਕਣ ਵਿੱਚ ਨਰ ਯੁਗਮਕ = 48 / 2 = 24 ਗੁਣਸੂਤਰ।',
                        '(a) Synergid = ਮਾਦਾ ਯੁਗਮਕੋਦਭਿਦ ਦਾ ਸੈੱਲ = 12 ਗੁਣਸੂਤਰ।',
                        '(b) Zygote = ਅੰਡ ਸੈੱਲ (12) + ਨਰ ਯੁਗਮਕ (24) = 36 ਗੁਣਸੂਤਰ।',
                        '(c) Endosperm (PEN) = 2 ਧਰੁਵੀ ਕੇਂਦਰਕ (12 + 12) + 1 ਨਰ ਯੁਗਮਕ (24) = 48 ਗੁਣਸੂਤਰ।',
                        '(d) Nucellus ਮਾਦਾ ਪੌਦੇ ਦਾ ਬੀਜਾਣੂਉਦਭਿਦ ਟਿਸ਼ੂ (2n) ਹੈ = 24 ਗੁਣਸੂਤਰ।'
                    ],
                    hi: [
                        'मादा पादप (2n = 24) -> मादा युग्मक (अंड कोशिका, Synergid एवं प्रत्येक ध्रुवीय केंद्रक) = 24 / 2 = 12 गुणसूत्र।',
                        'नर पादप (4n = 48) -> परागकण में नर युग्मक = 48 / 2 = 24 गुणसूत्र।',
                        '(a) Synergid = मादा भ्रूणकोष की कोशिका = 12 गुणसूत्र।',
                        '(b) Zygote = अंड कोशिका (12) + नर युग्मक (24) = 36 गुणसूत्र।',
                        '(c) Endosperm (PEN) = 2 ध्रुवीय केंद्रक (12 + 12) + 1 नर युग्मक (24) = 48 गुणसूत्र।',
                        '(d) Nucellus मादा पादप का कायिक ऊतक (2n) है = 24 गुणसूत्र।'
                    ]
                },
                finalAnswer: {
                    en: '(a) Synergid = 12, (b) Zygote = 36, (c) Endosperm = 48, (d) Nucellus = 24',
                    pa: '(a) Synergid = 12, (b) Zygote = 36, (c) Endosperm = 48, (d) Nucellus = 24',
                    hi: '(a) Synergid = 12, (b) Zygote = 36, (c) Endosperm = 48, (d) Nucellus = 24'
                }
            },
            {
                problem: {
                    en: 'How many minimum meiotic divisions are required to produce 200 viable wheat grains (seeds) in a typical angiosperm?',
                    pa: 'ਇੱਕ ਫੁੱਲਦਾਰ ਪੌਦੇ ਵਿੱਚ ਕਣਕ ਦੇ 200 ਬੀਜ (ਦਾਣੇ) ਬਣਾਉਣ ਲਈ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀਆਂ ਅਰਧ-ਸੂਤਰੀ ਵੰਡਾਂ (Meiotic divisions) ਦੀ ਲੋੜ ਪਵੇਗੀ?',
                    hi: 'एक प्रारूपिक पुष्पी पादप में गेहूँ के 200 बीज (दाने) बनाने के लिए न्यूनतम कितने अर्धसूत्री विभाजनों (Meiotic divisions) की आवश्यकता होगी?'
                },
                solutionSteps: {
                    en: [
                        'To form 200 wheat seeds, we need 200 functional pollen grains (male gametophytes) and 200 functional embryo sacs (female gametophytes).',
                        'In microsporogenesis, 1 meiotic division of a Microspore Mother Cell (MMC) produces 4 functional pollen grains -> Meiotic divisions for 200 pollen grains = 200 / 4 = 50.',
                        'In megasporogenesis (monosporic development), 1 meiotic division of a Megaspore Mother Cell produces 4 megaspores, of which 3 degenerate and only 1 functional megaspore forms the embryo sac -> Meiotic divisions for 200 ovules/embryo sacs = 200 / 1 = 200.',
                        'Total minimum meiotic divisions = 50 + 200 = 250 (or using formula 1.25 × N = 1.25 × 200 = 250).'
                    ],
                    pa: [
                        '200 ਬੀਜ ਬਣਾਉਣ ਲਈ 200 ਪਰਾਗ ਕਣ (Pollen grains) ਅਤੇ 200 ਅੰਡ-ਕੋਸ਼ (Embryo sacs) ਚਾਹੀਦੇ ਹਨ।',
                        '1 Microspore Mother Cell (MMC) ਦੀ ਅਰਧ-ਸੂਤਰੀ ਵੰਡ ਨਾਲ 4 ਪਰਾਗ ਕਣ ਬਣਦੇ ਹਨ -> 200 ਪਰਾਗ ਕਣਾਂ ਲਈ ਵੰਡਾਂ = 200 / 4 = 50।',
                        '1 Megaspore Mother Cell ਦੀ ਅਰਧ-ਸੂਤਰੀ ਵੰਡ ਨਾਲ 4 ਗੁਰੂ-ਬੀਜਾਣੂ ਬਣਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ 3 ਨਸ਼ਟ ਹੋ ਜਾਂਦੇ ਹਨ ਅਤੇ ਸਿਰਫ਼ 1 ਕਿਰਿਆਸ਼ੀਲ ਰਹਿੰਦਾ ਹੈ -> 200 ਅੰਡ-ਕੋਸ਼ਾਂ ਲਈ ਵੰਡਾਂ = 200 / 1 = 200।',
                        'ਕੁੱਲ ਅਰਧ-ਸੂਤਰੀ ਵੰਡਾਂ = 50 + 200 = 250।'
                    ],
                    hi: [
                        '200 बीज बनाने के लिए 200 परागकण (Pollen grains) और 200 भ्रूणकोष (Embryo sacs) आवश्यक हैं।',
                        '1 लघुबीजाणु मातृ कोशिका (MMC) के अर्धसूत्री विभाजन से 4 परागकण बनते हैं -> 200 परागकणों हेतु विभाजन = 200 / 4 = 50।',
                        '1 गुरुबीजाणु मातृ कोशिका के अर्धसूत्री विभाजन से 4 गुरुबीजाणु बनते हैं जिनमें से 3 नष्ट हो जाते हैं और केवल 1 क्रियाशील रहता है -> 200 भ्रूणकोषों हेतु विभाजन = 200 / 1 = 200।',
                        'कुल न्यूनतम अर्धसूत्री विभाजन = 50 + 200 = 250।'
                    ]
                },
                finalAnswer: {
                    en: '250 meiotic divisions (50 in anther + 200 in ovule)',
                    pa: '250 ਅਰਧ-ਸੂਤਰੀ ਵੰਡਾਂ (50 ਪਰਾਗਕੋਸ਼ ਵਿੱਚ + 200 ਅੰਡਕ ਵਿੱਚ)',
                    hi: '250 अर्धसूत्री विभाजन (50 परागकोश में + 200 बीजांड में)'
                }
            }
        ],
        flashcards: [
            {
                id: 'sci-bio-1-fc-1',
                question: {
                    en: '[Level B/I] Who discovered Viroids in 1971, how do they differ structurally from Viruses, and which classic disease do they cause?',
                    pa: '[Level B/I] 1971 ਵਿੱਚ ਵਾਇਰੋਇਡਜ਼ (Viroids) ਦੀ ਖੋਜ ਕਿਸ ਨੇ ਕੀਤੀ, ਇਹ ਵਿਸ਼ਾਣੂਆਂ ਤੋਂ ਕਿਵੇਂ ਵੱਖਰੇ ਹਨ, ਅਤੇ ਕਿਹੜਾ ਰੋਗ ਫੈਲਾਉਂਦੇ ਹਨ?',
                    hi: '[Level B/I] 1971 में वायरोइड (Viroids) की खोज किसने की, ये विषाणुओं से संरचनात्मक रूप से कैसे भिन्न हैं, और कौन-सा रोग उत्पन्न करते हैं?'
                },
                answer: {
                    en: 'T.O. Diener (1971); Viroids consist of free, low-molecular-weight circular ssRNA completely lacking a protein coat (capsid); they cause Potato Spindle Tuber Disease (PSTD).',
                    pa: 'T.O. Diener (1971); ਵਾਇਰੋਇਡਜ਼ ਵਿੱਚ ਪ੍ਰੋਟੀਨ ਕੋਟ (capsid) ਨਹੀਂ ਹੁੰਦਾ ਅਤੇ ਇਹ ਮੁਕਤ ਘੱਟ ਅਣੂ-ਭਾਰ ਵਾਲੇ RNA ਹੁੰਦੇ ਹਨ; ਇਹ ਆਲੂ ਦਾ Potato Spindle Tuber Disease (PSTD) ਫੈਲਾਉਂਦੇ ਹਨ।',
                    hi: 'T.O. Diener (1971); वायरोइड प्रोटीन आवरण (capsid) रहित मुक्त अल्प अणुभार वाले RNA अणु होते हैं; ये आलू का Potato Spindle Tuber Disease (PSTD) उत्पन्न करते हैं।'
                }
            },
            {
                id: 'sci-bio-1-fc-2',
                question: {
                    en: '[Level H] Which four Pteridophytes are heterosporous and act as the evolutionary precursor to the seed habit?',
                    pa: '[Level H] ਕਿਹੜੇ ਚਾਰ ਟੈਰੀਡੋਫਾਈਟ ਪੌਦੇ ਵਿਸ਼ਮਬੀਜਾਣੂ (Heterosporous) ਹਨ ਅਤੇ ਬੀਜ ਆਦਤ (Seed habit) ਦੇ ਪੂਰਵਗਾਮੀ ਮੰਨੇ ਜਾਂਦੇ ਹਨ?',
                    hi: '[Level H] कौन-से चार टेरिडोफाइट पादप विषमबीजाणुक (Heterosporous) हैं और बीज स्वभाव (Seed habit) के पूर्वगामी माने जाते हैं?'
                },
                answer: {
                    en: 'Selaginella, Salvinia, Marsilea, and Azolla (produce microspores and megaspores, retaining the female gametophyte inside the megasporangium on the parent sporophyte).',
                    pa: 'Selaginella, Salvinia, Marsilea ਅਤੇ Azolla (ਇਹ ਲਘੂ-ਬੀਜਾਣੂ ਅਤੇ ਗੁਰੂ-ਬੀਜਾਣੂ ਪੈਦਾ ਕਰਦੇ ਹਨ)।',
                    hi: 'Selaginella, Salvinia, Marsilea और Azolla (ये लघुबीजाणु और गुरुबीजाणु उत्पन्न करते हैं)।'
                }
            },
            {
                id: 'sci-bio-1-fc-3',
                question: {
                    en: '[Level H] Contrast the symbiotic root associations and sexual conditions of Cycas and Pinus.',
                    pa: '[Level H] Cycas ਅਤੇ Pinus ਦੀਆਂ ਸਹਿਜੀਵੀ ਜੜ੍ਹਾਂ ਅਤੇ ਲਿੰਗੀ ਸਥਿਤੀ ਦੀ ਤੁਲਨਾ ਕਰੋ।',
                    hi: '[Level H] Cycas एवं Pinus की सहजीवी जड़ों तथा लैंगिक स्थिति की तुलना कीजिए।'
                },
                answer: {
                    en: 'Cycas is dioecious (male and female on separate plants), unbranched, and has Coralloid roots harbouring N2-fixing cyanobacteria (Anabaena/Nostoc); Pinus is monoecious (male and female cones on same plant), branched, and has fungal Ectomycorrhizal roots.',
                    pa: 'Cycas ਇੱਕ-ਲਿੰਗੀ (Dioecious) ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ Coralloid ਜੜ੍ਹਾਂ (N2-ਸਥਿਰ ਕਰਨ ਵਾਲੇ Anabaena ਨਾਲ) ਹੁੰਦੀਆਂ ਹਨ; Pinus ਦੋ-ਲਿੰਗੀ (Monoecious) ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਉੱਲੀ ਵਾਲੀਆਂ Mycorrhizal ਜੜ੍ਹਾਂ ਹੁੰਦੀਆਂ ਹਨ।',
                    hi: 'Cycas एकलिंगाश्रयी (Dioecious) है तथा इसमें प्रवाल मूल / Coralloid roots (Anabaena युक्त) होती हैं; Pinus द्विलिंगाश्रयी (Monoecious) है तथा इसमें कवकमूल / Mycorrhizal roots होती हैं।'
                }
            },
            {
                id: 'sci-bio-1-fc-4',
                question: {
                    en: '[Level G] Which layer of the microsporangium (anther) wall is nutritive and multinucleate, and which resistant polymer forms the pollen exine?',
                    pa: '[Level G] ਪਰਾਗਕੋਸ਼ (Anther) ਦੀ ਕਿਹੜੀ ਅੰਦਰੂਨੀ ਪਰਤ ਪੋਸ਼ਣ ਦਿੰਦੀ ਹੈ ਤੇ ਬਹੁ-ਕੇਂਦਰਕੀ ਹੁੰਦੀ ਹੈ, ਅਤੇ ਪਰਾਗ ਕਣ ਦੀ ਬਾਹਰੀ ਕੰਧ (Exine) ਕਿਸ ਤੋਂ ਬਣੀ ਹੁੰਦੀ ਹੈ?',
                    hi: '[Level G] परागकोश भित्ति की कौन-सी सबसे भीतरी परत पोषक व बहुकेंद्रकीय होती है, तथा परागकण का बाह्यचोल (Exine) किस प्रतिरोधी बहुलक से बना होता है?'
                },
                answer: {
                    en: 'Tapetum is the innermost multinucleate/polyploid nutritive layer; it secretes Ubisch bodies coated with Sporopollenin (oxidative polymer of carotenoids), which forms the indestructible Exine.',
                    pa: 'Tapetum ਸਭ ਤੋਂ ਅੰਦਰਲੀ ਬਹੁ-ਕੇਂਦਰਕੀ ਪੋਸ਼ਕ ਪਰਤ ਹੈ; ਬਾਹਰੀ ਕੰਧ (Exine) Sporopollenin ਤੋਂ ਬਣੀ ਹੁੰਦੀ ਹੈ ਜਿਸ ਨੂੰ ਕੋਈ ਐਂਜ਼ਾਈਮ ਜਾਂ ਤੇਜ਼ਾਬ ਨਸ਼ਟ ਨਹੀਂ ਕਰ ਸਕਦਾ।',
                    hi: 'Tapetum सबसे भीतरी बहुकेंद्रकीय पोषक परत है; बाह्यचोल (Exine) Sporopollenin से बना होता है जो सर्वाधिक प्रतिरोधी कार्बनिक पदार्थ है।'
                }
            },
            {
                id: 'sci-bio-1-fc-5',
                question: {
                    en: '[Level G] Who discovered Double Fertilization in angiosperms, and what are the products and ploidy levels of Syngamy and Triple Fusion?',
                    pa: '[Level G] ਫੁੱਲਦਾਰ ਪੌਦਿਆਂ ਵਿੱਚ ਦੋਹਰੇ ਨਿਸ਼ੇਚਨ (Double Fertilization) ਦੀ ਖੋਜ ਕਿਸ ਨੇ ਕੀਤੀ, ਅਤੇ Syngamy ਤੇ Triple Fusion ਦੇ ਉਤਪਾਦ ਕੀ ਹਨ?',
                    hi: '[Level G] आवृतबीजी पादपों में द्विनिषेचन (Double Fertilization) की खोज किसने की, तथा युग्मक संलयन (Syngamy) व त्रिसंलयन (Triple Fusion) के उत्पाद क्या हैं?'
                },
                answer: {
                    en: 'S.G. Nawaschin (1898) in Lilium and Fritillaria. Syngamy (male gamete n + egg n) produces the diploid Zygote (2n -> Embryo); Triple Fusion (male gamete n + 2 polar nuclei n+n) produces the triploid Primary Endosperm Nucleus (PEN, 3n -> Endosperm).',
                    pa: 'S.G. Nawaschin (1898) ਨੇ Lilium ਅਤੇ Fritillaria ਵਿੱਚ। Syngamy (n + n) ਨਾਲ ਦੋ-ਗੁਣਿਤ Zygote (2n) ਬਣਦਾ ਹੈ ਅਤੇ Triple Fusion (n + 2n) ਨਾਲ ਤ੍ਰਿਗੁਣਿਤ Primary Endosperm Nucleus (3n) ਬਣਦਾ ਹੈ।',
                    hi: 'S.G. Nawaschin (1898) ने Lilium और Fritillaria में। Syngamy (n + n) से द्विगुणित युग्मनज (2n) तथा Triple Fusion (n + 2n) से त्रिगुणित प्राथमिक भ्रूणपोष केंद्रक (PEN, 3n) बनता है।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. BOTANY II: PLANT PHYSIOLOGY (WATER RELATIONS, PHOTOSYNTHESIS,
    //    RESPIRATION, PHYTOHORMONES) & ECOLOGY / ENVIRONMENT (LEVEL B -> I -> H -> G)
    // =========================================================================
    {
        topicId: 'sci-bio-plant-physiology-ecology',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote:
                'Level B -> I -> H -> G comprehensive academic blueprint covering ERB Punjab Master Cadre Science (Botany II): Plant Water Relations (Water Potential, DPD, Apoplast/Symplast, Transpiration Pull, Munch Mass Flow), Mineral Nutrition & Nitrogen Fixation, Photosynthesis (C3, C4, CAM, Z-scheme, Photorespiration), Cellular Respiration (Glycolysis, Krebs, ETS, RQ), Phytohormones, and Ecology, Biodiversity & Punjab Ramsar Wetlands.'
        },
        bookRefs: [
            {
                title: 'NCERT Biology Class XI (Unit IV: Plant Physiology) & Class XII (Unit X: Ecology)',
                author: 'NCERT / PSEB',
                chapter: 'Transport in Plants, Mineral Nutrition, Photosynthesis, Respiration, Plant Growth Regulators & Ecology',
                relevance: 'Direct source for Water Potential equations, C3 vs C4 ATP budgets, Krebs cycle enzymes, 5 PGRs, Ecological Pyramids, and Biodiversity conservation.'
            },
            {
                title: 'Plant Physiology and Development & Fundamentals of Ecology',
                author: 'Lincoln Taiz & Eduardo Zeiger / Eugene P. Odum',
                chapter: 'Chemiosmotic Coupling, Rubisco Oxygenase Kinetics, Phytochrome Photoconversion & Population Dynamics',
                relevance: 'Graduation-level (Level G) depth for Master Cadre Science numericals on DPD/Water Potential, ATP yield, RQ values, and logistic growth equations.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 Foundation]
1. **Autotrophic Nutrition, Stomata & Basic Transport in Plants:**
   - **Photosynthesis Overall Equation (Cornelius van Niel proved O₂ comes from H₂O, not CO₂, confirmed by Ruben & Kamen using ¹⁸O radioisotope):**
     **6CO₂ + 12H₂O —(Sunlight / Chlorophyll)→ C₆H₁₂O₆ + 6H₂O + 6O₂↑**
   - **Xylem vs Phloem Transport:** **Xylem** conducts water and inorganic minerals **unidirectionally** upward from roots to shoots; **Phloem** translocates organic food (primarily **Sucrose**, a non-reducing sugar) **bidirectionally / multidirectionally** from source (leaves) to sink (roots, buds, fruits).
   - **Transpiration vs Guttation:**
     - **Transpiration:** Loss of water in the form of **water vapour** through **stomata** (>90%), cuticle, or lenticels during daytime; driven by transpiration pull; transpired water is **pure water**.
     - **Guttation (term by Burgerstein):** Exudation of **liquid water droplets containing dissolved organic & inorganic salts** from uninjured leaf margins through specialized pores called **Hydathodes (water stomata)** over **epithem** tissue during early morning/night under **positive root pressure** and low transpiration (e.g., *Garden nasturtium, Grasses, Tomato, Colocasia*).

---

### [Level I: Intermediate — Class 9–10 Core]
1. **Plant Water Relations: Osmosis, Plasmolysis, Water Potential (Ψw) & DPD:**
   - **Water Potential (Ψw, Slatyer & Taylor):** Quantifies the free kinetic energy of water molecules per unit volume (measured in Pascals / MPa or bars).
     **Ψw = Ψs + Ψp**
     - **Pure water at standard temperature and atmospheric pressure has the MAXIMUM water potential: Ψw = 0 MPa**.
     - **Solute Potential (Ψs or Osmotic Potential):** Always **negative** (Ψs < 0); adding solute lowers free energy of water. At atmospheric pressure (open beaker), Ψw = Ψs.
     - **Pressure Potential (Ψp):** Usually **positive** in turgid cells (turgor pressure), **0 in flaccid cells**, and **negative (Ψp < 0) in xylem vessels** under tension.
     - **Direction of Water Movement:** Water ALWAYS moves from a region of **Higher Ψw (less negative)** to **Lower Ψw (more negative)**.
   - **Diffusion Pressure Deficit (DPD, term coined by Meyer 1938; also called Suction Pressure SP):**
     **DPD = OP − TP** (since TP = WP)
     - **Fully Turgid Cell:** TP = OP ⇒ **DPD = 0** (cell cannot absorb any more water; Ψw = 0).
     - **Flaccid Cell:** TP = 0 ⇒ **DPD = OP**.
     - **Plasmolysed Cell (in hypertonic solution):** Protoplast shrinks away from cell wall (**exosmosis**; space between cell wall and shrunken protoplast is filled with the **external hypertonic solution**!); TP is negative ⇒ **DPD = OP + |TP|**.
     - Water moves from **Low DPD to High DPD**!
2. **Apoplast vs Symplast, Ascent of Sap, Stomatal Mechanism & Phloem Translocation:**
   - **Apoplast Pathway:** Non-living continuum through cell walls and intercellular spaces (fastest, driven by mass flow/diffusion); **blocked at the Endodermis by water-impermeable Casparian strips made of Suberin**, forcing water to enter the **Symplast pathway** (living continuum via cytoplasm and **plasmodesmata**) across the plasma membrane.
   - **Ascent of Sap:** **Cohesion-Tension-Transpiration Pull Theory (Dixon & Joly, 1894)** — most accepted; relies on Cohesion (mutual attraction between water molecules), Adhesion (attraction to polar tracheary walls), and Surface Tension.
   - **Stomatal Opening & Closing (K⁺-H⁺ Pump / Active Potassium Ion Transport Theory of Levitt, 1974):** In light, starch in guard cells converts to **phosphoenolpyruvate (PEP) → Malic acid**, which dissociates into H⁺ (pumped out) and Malate²⁻ (paired with influx of K⁺ and Cl⁻ into guard cells). This lowers Ψs (increases OP) of guard cells → endosmosis from subsidiary cells → guard cells become **turgid** and pore opens (radially oriented cellulose microfibrils aid opening). **Abscisic Acid (ABA)** reverses this by causing K⁺ efflux in stress/drought. (Dicots have **kidney/bean-shaped** guard cells; Monocots/grasses have **dumbbell-shaped** guard cells).
   - **Munch Mass Flow (Pressure Flow) Hypothesis (1930):** Sucrose is actively loaded into companion cells and sieve tube elements at the **Source** → hypertonic condition draws water from adjacent xylem → high turgor/hydrostatic pressure pushes sap in bulk toward the **Sink** where sucrose is actively unloaded.
3. **Mineral Nutrition & Biological Nitrogen Fixation:**
   - **Criteria of Essentiality (Arnon & Stout, 1939):** 17 essential elements — **9 Macronutrients** (C, H, O, N, P, K, S, Mg, Ca) and **8 Micronutrients** (Fe, Mn, Cu, Mo, Zn, B, Cl, Ni).
   - **High-Yield Specific Mineral Roles:**
     - **Magnesium (Mg²⁺):** Central atom of the **porphyrin ring of Chlorophyll**; activates **RuBisCO and PEPCase**; binds ribosome subunits together.
     - **Molybdenum (MoO₂²⁺):** Component of **Nitrogenase** (as Mo-Fe protein) and **Nitrate reductase**. Deficiency causes *Whiptail disease of Cauliflower*.
     - **Manganese (Mn²⁺) & Chloride (Cl⁻):** Essential for **Photolysis of water (Water-splitting OEC complex at PS-II)** evolving O₂.
     - **Zinc (Zn²⁺):** Activates carboxylase enzymes and is required for **biosynthesis of Auxin (IAA)** from tryptophan (*Khaira disease of Rice* is caused by Zn deficiency!).
     - **Boron (B):** Required for **pollen germination**, cell elongation, and sugar translocation.
   - **Biological N₂ Fixation:** Catalyzed by prokaryotic enzyme **Nitrogenase** (Mo-Fe protein), which is extremely sensitive to molecular O₂. In root nodules of legumes (*Rhizobium*) and *Frankia* (non-legume *Alnus/Casuarina*), pink pigment **Leghemoglobin** acts as an **oxygen scavenger** to maintain anaerobic conditions:
     **N₂ + 8e⁻ + 8H⁺ + 16ATP —(Nitrogenase)→ 2NH₃ + H₂ + 16ADP + 16Pi**
     *(Requires **8 ATP per NH₃** molecule produced, i.e., **16 ATP per N₂** molecule fixed!)*

---

### [Level H: Higher Secondary — Class 11–12 Mastery]
1. **Photosynthesis: Light Reaction, Chemiosmosis & C₃ vs C₄ vs CAM Blueprint:**
   - **Pigments:** **Chlorophyll a** (C₅₅H₇₂O₅N₄Mg — blue-green, universal primary reaction centre pigment, has **−CH₃ methyl group** at C-3 of pyrrole ring II) vs **Chlorophyll b** (C₅₅H₇₀O₆N₄Mg — yellow-green accessory pigment, has **−CHO aldehyde group**).
   - **Non-Cyclic Photophosphorylation (Z-Scheme — Hill & Bendall):** Operates in **grana thylakoids** involving both **PS-II (P₆₈₀)** and **PS-I (P₇₀₀)** connected via Pheophytin → Plastoquinone (PQ) → Cytochrome b₆f → Plastocyanin (PC, Cu-protein) → PS-I → Ferredoxin (Fd) → NADP⁺ reductase (on stroma side). **Photolysis of water** (2H₂O → 4H⁺ + 4e⁻ + O₂) occurs on the **inner lumen side of thylakoid membrane** associated with PS-II. Produces **ATP + NADPH + H⁺ + O₂**.
   - **Cyclic Photophosphorylation:** Operates in **stroma lamellae** (which lack PS-II and NADP⁺ reductase) at wavelengths >680 nm involving **only PS-I (P₇₀₀)**. Produces **ONLY ATP** (no NADPH, no O₂ evolution).
   - **Chemiosmotic Hypothesis (Peter Mitchell, 1961):** Proton gradient across thylakoid membrane creates a **high H⁺ concentration (low pH ≈ 4–5) inside the thylakoid lumen**; proton efflux into the stroma through CF₀-CF₁ ATP synthase drives ATP synthesis.
   | Feature | C₃ Pathway (Calvin Cycle) | C₄ Pathway (Hatch & Slack) | CAM (Crassulacean Acid Metabolism) |
   |---|---|---|---|
   | **Leaf Anatomy & Stomata** | Normal mesophyll; **Kranz anatomy absent**; photoactive stomata (open in day) | **Kranz (wreath) anatomy present** (dimorphic chloroplasts: granal in mesophyll, **agranal** in bundle sheath); photoactive stomata | Succulent xerophytes; Kranz absent; **Scotoactive stomata (open at NIGHT, close in day)** |
   | **Primary CO₂ Acceptor** | **RuBP** (Ribulose-1,5-bisphosphate, **5C** ketose sugar) | **PEP** (Phosphoenolpyruvate, **3C**) in mesophyll cytoplasm | **PEP (3C)** at night; **RuBP (5C)** during day |
   | **First Stable Product** | **3-PGA** (3-Phosphoglyceric acid, **3C**) | **OAA** (Oxaloacetic acid, **4C**) in mesophyll | **OAA (4C)** → Malic acid stored in vacuole at night |
   | **Carboxylating Enzyme** | **RuBisCO** only (most abundant protein on Earth) | **PEPCase** in mesophyll + **RuBisCO** in bundle sheath cells | **PEPCase** (night) + **RuBisCO** (day) in same cell |
   | **Photorespiration (C₂ Cycle)** | **High (25% C loss)** at high O₂ / high temp (Chloroplast → Peroxisome → Mitochondria) | **Negligible / Absent** (intracellular CO₂ pump concentrates CO₂ around RuBisCO) | Negligible |
   | **Energy Cost per CO₂ Fixed (and per Glucose)** | **3 ATP + 2 NADPH** per CO₂ (**18 ATP + 12 NADPH** per glucose) | **5 ATP + 2 NADPH** per CO₂ (**30 ATP + 12 NADPH** per glucose; 2 extra ATP used by PPDK to regenerate PEP) | **4.5–5 ATP + 2 NADPH** per CO₂ |
   | **Classic Examples** | *Wheat, Rice, Barley, Oats, Potato, Bell pepper* | ***Maize, Sugarcane, Sorghum (Jowar), Bajra, Amaranthus*** | ***Opuntia, Bryophyllum (Kalanchoe), Pineapple, Agave*** |
2. **Cellular Respiration (Glycolysis, Krebs Cycle, ETS & Respiratory Quotient):**
   - **Glycolysis (EMP Pathway — Embden, Meyerhof, Parnas):** Occurs in **cytoplasm** of all living cells (aerobic & anaerobic); converts 1 Glucose (6C) → 2 Pyruvate (3C). **Pacemaker enzyme:** **Phosphofructokinase (PFK)** (allosterically inhibited by ATP/citrate, activated by AMP). Uses 2 ATP, produces 4 ATP by substrate-level phosphorylation + 2 NADH ⇒ **Net direct gain = 2 ATP + 2 NADH**.
   - **Oxidative Decarboxylation (Link Reaction — Mitochondrial Matrix):**
     **2 Pyruvate (3C) + 2 CoA + 2 NAD⁺ —(Pyruvate dehydrogenase, Mg²⁺, TPP, Lipoic acid, FAD)→ 2 Acetyl-CoA (2C) + 2 CO₂ + 2 NADH**
   - **Krebs Cycle / TCA Cycle (Hans Krebs, 1937 — Mitochondrial Matrix):** Acetyl-CoA (2C) condenses with OAA (4C) via *Citrate synthase* to form **Citric acid (6C, tricarboxylic)**. **All enzymes of Krebs cycle are in the mitochondrial matrix EXCEPT Succinate dehydrogenase, which is bound to the inner mitochondrial membrane!** Per **2 turns** (1 Glucose), Krebs cycle yields **6 NADH + 2 FADH₂ + 2 GTP (ATP) + 4 CO₂**.
   - **Electron Transport System (ETS — Inner Mitochondrial Membrane):**
     - **Complex I:** NADH dehydrogenase (FMN, Fe-S) | **Complex II:** Succinate dehydrogenase (FAD, Fe-S) | **Complex III:** Cytochrome bc₁ | **Complex IV:** Cytochrome c oxidase (contains **Cytochromes a and a₃ + 2 Copper (Cu) centres**; transfers electrons to terminal acceptor **O₂** to form metabolic water) | **Complex V:** F₀-F₁ ATP Synthase.
     - **Total Aerobic ATP Yield per Glucose:** Classic textbook accounting (1 NADH = 3 ATP, 1 FADH₂ = 2 ATP) gives **38 ATP** in prokaryotes/heart/liver cells (Malate-Aspartate shuttle) or **36 ATP** in brain/skeletal muscle (Glycerol-3-phosphate shuttle).
   - **Respiratory Quotient (RQ = Volume of CO₂ evolved / Volume of O₂ consumed):**
     - **Carbohydrates** (Glucose): RQ = 6 / 6 = **1.0**
     - **Fats** (*Tripalmitin* C₅₁H₉₈O₆): RQ = 102 / 145 = **0.7** (<1)
     - **Proteins**: RQ ≈ **0.8–0.9** (<1)
     - **Organic Acids**: RQ > 1 (**Malic acid = 1.33**, **Oxalic acid = 4.0**)
     - **Succulents (CAM plants at night)**: RQ = **0** (incomplete oxidation of carbohydrates to malic acid without CO₂ release)
     - **Anaerobic Respiration**: RQ = 2 / 0 = **∞** (Infinity)

---

### [Level G: Graduation — B.Sc. & Advanced Exam Mastery]
1. **Plant Growth Regulators (Phytohormones), Photoperiodism & Vernalisation:**
   | Phytohormone | Chemical Precursor & Discovery | Signature Physiological Roles & Agricultural Applications |
   |---|---|---|
   | **Auxin** (IAA, IBA; synthetic: **NAA, 2,4-D**) | **Tryptophan** amino acid (requires **Zn²⁺**); Darwin (canary grass coleoptile phototropism), **F.W. Went** (*Avena* curvature test) | **Apical dominance** (inhibits lateral buds), root initiation in stem cuttings, **xylem differentiation**, prevents early leaf/fruit drop but promotes abscission of older leaves, parthenocarpy in tomatoes; **2,4-D** is a selective **dicot weedicide** |
   | **Gibberellins** (GA₃ — over 100 GAs, all acidic) | **Acetyl-CoA / Terpenoids** (ent-kaurene); **E. Kurosawa (1926)** in *Bakanae* (foolish seedling) disease of rice caused by fungus ***Gibberella fujikuroi*** | Internodal elongation, **Bolting** in rosette plants (beet, cabbage), overcomes genetic dwarfism, induces ***de novo* synthesis of α-amylase in barley aleurone layer** during seed germination (malting), increases sugarcane stem length & grape stalk length |
   | **Cytokinins** (Kinetin, **Zeatin**) | **Adenine (N⁶-furfurylaminopurine)** / Purines; **Skoog & Miller** (autoclaved herring sperm DNA), Letham (Zeatin from corn kernels) | Promotes **cytokinesis (cell division)**, **overcomes apical dominance** (promotes lateral bud growth), **delays leaf senescence (Richmond-Lang effect)** by nutrient mobilization, chloroplast morphogenesis; in tissue culture: **High Auxin : Cytokinin → Roots; Low Auxin : Cytokinin → Shoots** |
   | **Ethylene** (C₂H₄ — gaseous PGR) | **Methionine** amino acid; Cousins (ripened oranges) | **Climacteric fruit ripening** (respiratory climacteric rise in banana, mango, tomato), **Triple response** in seedlings (horizontal growth, axis swelling, apical hook formation), promotes senescence/abscission, **rapid internode/petiole elongation in deep-water rice**, promotes female flowers in cucumbers; commercial source: **Ethephon** |
   | **Abscisic Acid (ABA)** (Stress Hormone / Dormin) | **Carotenoids (Violaxanthin)**; Addicott (abscission-II), Wareing (dormin) | **Antagonist to Gibberellins**; induces **seed dormancy**, **closes stomata during water stress** (causes K⁺ efflux from guard cells), increases tolerance to drought/salinity |
   - **Photoperiodism (Garner & Allard, 1920 in *Maryland Mammoth* tobacco) & Phytochrome:** Photoreceptor chromoprotein **Phytochrome** exists in two interconvertible forms:
     **Pr (absorbs Red light at 660 nm, inactive) ⇄ [Red 660 nm / Far-Red 730 nm or Dark] ⇄ Pfr (absorbs Far-Red at 730 nm, physiologically ACTIVE)**
     **Vernalisation** (Lysenko): Low-temperature (0°C–5°C) treatment promoting flowering in biennial plants (*Henbane/Hyoscyamus niger*, winter wheat/barley, carrot, cabbage); site of perception is **shoot apical meristem / dividing cells**.
2. **Ecology, Ecosystems, Biodiversity & Environmental Issues (with Punjab Focus):**
   - **Population Growth & Interactions:** Exponential growth dN/dt = rN (J-shaped curve) vs **Verhulst-Pearl Logistic Growth** dN/dt = rN[(K − N)/K] (S-shaped sigmoid curve, where K = carrying capacity).
     - **Interactions:** **Mutualism (+/+)**: Lichens, Mycorrhiza, Fig–Wasp, *Ophrys* orchid (*pseudocopulation* by male bee); **Commensalism (+/0)**: Epiphytic orchid on mango, Barnacles on whale, Cattle egret & grazing cattle; **Parasitism (+/−)**: *Cuscuta* (total stem parasite), *Rafflesia* (total root parasite), Brood parasitism (Cuckoo on crow); **Competition (−/−)**: **Gause's Competitive Exclusion Principle** vs **MacArthur's Resource Partitioning** (5 warbler species); **Amensalism (−/0)**: *Penicillium* inhibiting bacteria, *Juglans nigra* (black walnut secreting juglone).
   - **Ecosystem Energetics & Pyramids:**
     - **Productivity:** **NPP = GPP − R** (where GPP = Gross Primary Productivity, R = Respiratory loss, NPP = Net Primary Productivity available to herbivores).
     - **Lindeman's 10% Law (1942):** Only **10% of energy** is transferred from one trophic level to the next; hence **Pyramid of Energy is ALWAYS UPRIGHT (never inverted)**.
     - **Pyramid of Biomass:** Upright in grassland/forest, but **INVERTED in Aquatic/Pond ecosystems** (small standing crop of phytoplankton supports larger biomass of zooplankton/fishes).
     - **Pyramid of Numbers:** Upright in grassland/pond, **INVERTED in parasitic food chain on a single large tree** (or spindle-shaped in predatory chain: 1 Tree → many herbivorous birds → few eagle/hawk predators).
   - **Biodiversity Conservation & Punjab's 6 Ramsar Wetlands:**
     - **Robert May's global species estimate:** ≈ 7 million. **Alexander von Humboldt's Species-Area Relationship:** S = CAᶻ ⇒ **log S = log C + Z log A** (for normal areas Z = 0.1–0.2; for frugivorous birds/mammals across entire continents Z = 0.6–1.2).
     - **4 Biodiversity Hotspots in India (Norman Myers):** **Western Ghats & Sri Lanka**, **Indo-Burma**, **Himalaya**, and **Sundaland (Nicobar Islands)**.
     - **In-situ Conservation (on-site):** Biosphere Reserves (18 in India), National Parks, Wildlife Sanctuaries, **Sacred Groves** (Khasi & Jaintia Hills in Meghalaya, Aravalli Hills). **Ex-situ Conservation (off-site):** Botanical gardens, Zoological parks, Seed banks, **Cryopreservation in liquid N₂ at −196°C**, Tissue culture.
     - **Punjab's 6 Ramsar Sites:** **Harike Wetland** (Tarn Taran/Ferozepur — confluence of Beas & Sutlej, largest), **Kanjli Wetland** (Kapurthala — Kali Bein river), **Ropar Wetland** (Rupnagar — Sutlej river), **Keshopur-Miani Community Reserve** (Gurdaspur — India's first community reserve), **Nangal Wildlife Sanctuary** (Rupnagar), and **Beas Conservation Reserve** (185 km stretch hosting the endangered **Indus River Dolphin**, *Platanista minor*, Punjab's State Aquatic Animal). (Punjab's State Tree: **Sheesham / Tahli** *Dalbergia sissoo*; State Bird: **Baaz / Northern Goshawk** *Accipiter gentilis*; State Animal: **Blackbuck** *Antilope cervicapra*).
     - **Environmental Treaties & Pollution:** **Montreal Protocol (1987, effective 1989)** to phase out **Ozone-depleting CFCs** (stratospheric ozone measured in **Dobson Units, DU**); **Kyoto Protocol (1997)** & **Paris Agreement (2015)** for greenhouse gases (CO₂ 60%, CH₄ 20%, CFCs 14%, N₂O 6%); **Biomagnification** of non-biodegradable **DDT** (causes eggshell thinning in birds by inhibiting calcium ATPase) and **Mercury** (*Minamata disease*; Cadmium causes *Itai-Itai*); **High BOD (Biochemical Oxygen Demand)** indicates **high organic water pollution** and low Dissolved Oxygen (DO).`,
            pa: `### [Level B: Basic — Class 6–8 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ, ਜ਼ਾਈਲਮ-ਫਲੋਇਮ ਅਤੇ ਵਾਸ਼ਪ-ਉਤਸਰਜਨ (Transpiration):**
   - **ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਸਮੀਕਰਨ (Cornelius van Niel ਅਤੇ Ruben & Kamen ਨੇ ¹⁸O ਨਾਲ ਸਿੱਧ ਕੀਤਾ ਕਿ O₂ ਪਾਣੀ ਤੋਂ ਨਿਕਲਦੀ ਹੈ):**
     **6CO₂ + 12H₂O —(Sunlight / Chlorophyll)→ C₆H₁₂O₆ + 6H₂O + 6O₂↑**
   - **Transpiration ਬਨਾਮ Guttation:** Transpiration ਵਿੱਚ ਸਟੋਮੈਟਾ ਰਾਹੀਂ **ਸ਼ੁੱਧ ਪਾਣੀ ਭਾਫ਼** ਦੇ ਰੂਪ ਵਿੱਚ ਉੱਡਦਾ ਹੈ; **Guttation** ਵਿੱਚ ਸਵੇਰੇ-ਸਵੇਰੇ **ਮੂਲ ਦਾਬ (Root pressure)** ਕਾਰਨ ਪੱਤਿਆਂ ਦੇ ਕਿਨਾਰਿਆਂ ਉੱਤੇ ਸਥਿਤ **Hydathodes** ਰਾਹੀਂ ਪਾਣੀ ਦੀਆਂ ਬੂੰਦਾਂ (ਲੂਣਾਂ ਸਮੇਤ) ਬਾਹਰ ਨਿਕਲਦੀਆਂ ਹਨ।

---

### [Level I: Intermediate — Class 9–10 ਮੱਧ ਪੱਧਰ]
1. **ਜਲ ਸੰਭਾਵਨਾ (Water Potential Ψw) ਅਤੇ DPD:**
   - **Water Potential (Ψw = Ψs + Ψp):** **ਸ਼ੁੱਧ ਪਾਣੀ ਦੀ ਜਲ ਸੰਭਾਵਨਾ ਸਭ ਤੋਂ ਵੱਧ (Ψw = 0 MPa) ਹੁੰਦੀ ਹੈ**। ਘੁਲਣਸ਼ੀਲ ਪਦਾਰਥ ਮਿਲਾਉਣ ਨਾਲ Ψs ਹਮੇਸ਼ਾ **ਰਿਣਾਤਮਕ (Negative)** ਹੋ ਜਾਂਦਾ ਹੈ। ਪਾਣੀ ਹਮੇਸ਼ਾ **ਉੱਚ Ψw (ਘੱਟ ਰਿਣਾਤਮਕ) ਤੋਂ ਘੱਟ Ψw (ਵੱਧ ਰਿਣਾਤਮਕ)** ਵੱਲ ਜਾਂਦਾ ਹੈ।
   - **DPD (Diffusion Pressure Deficit):** **DPD = OP − TP**। ਪੂਰੀ ਤਰ੍ਹਾਂ ਫੁੱਲੇ ਹੋਏ ਸੈੱਲ (Fully turgid cell) ਵਿੱਚ TP = OP ⇒ **DPD = 0**; ਮੁਰਝਾਏ ਸੈੱਲ (Flaccid cell) ਵਿੱਚ TP = 0 ⇒ **DPD = OP**। ਪਾਣੀ **ਘੱਟ DPD ਤੋਂ ਵੱਧ DPD** ਵੱਲ ਜਾਂਦਾ ਹੈ!
   - **Apoplast ਬਨਾਮ Symplast:** Endodermis ਵਿੱਚ **Suberin ਦੀਆਂ Casparian strips** Apoplast ਰਸਤੇ ਨੂੰ ਰੋਕ ਦਿੰਦੀਆਂ ਹਨ।
   - **ਸਟੋਮੈਟਾ ਖੁੱਲ੍ਹਣ ਦੀ ਵਿਧੀ:** **Levitt (1974)** ਦਾ ਸਰਗਰਮ **K⁺ Malate Pump ਸਿਧਾਂਤ** (ABA ਸਟੋਮੈਟਾ ਨੂੰ ਬੰਦ ਕਰਦਾ ਹੈ)। **Munch Mass Flow Hypothesis** ਫਲੋਇਮ ਵਿੱਚ **Sucrose** ਦੇ ਸੰਚਾਲਨ ਨੂੰ ਸਮਝਾਉਂਦਾ ਹੈ।
2. **ਖਣਿਜ ਪੋਸ਼ਣ ਅਤੇ ਜੈਵਿਕ ਨਾਈਟ੍ਰੋਜਨ ਸਥਿਰੀਕਰਨ:**
   - **ਮੁੱਖ ਖਣਿਜ ਤੱਤ:** **Mg²⁺** (ਕਲੋਰੋਫਿਲ ਦੇ ਪੋਰਫਾਇਰਿਨ ਰਿੰਗ ਦਾ ਕੇਂਦਰੀ ਤੱਤ, RuBisCO ਤੇ PEPCase ਐਕਟੀਵੇਟਰ), **Mo** (Nitrogenase ਅਤੇ Nitrate reductase ਦਾ ਹਿੱਸਾ), **Mn²⁺ ਅਤੇ Cl⁻** (ਪਾਣੀ ਦਾ ਪ੍ਰਕਾਸ਼-ਅਪਘਟਨ / Photolysis of water), **Zn²⁺** (Auxin ਸੰਸ਼ਲੇਸ਼ਣ; ਕਮੀ ਨਾਲ ਝੋਨੇ ਦਾ *Khaira ਰੋਗ*), **B** (ਪਰਾਗ ਕਣ ਪੁੰਗਰਨ)।
   - **Biological N₂ Fixation:** *Rhizobium* ਦੀਆਂ ਗੰਢਾਂ ਵਿੱਚ **Leghemoglobin** ਆਕਸੀਜਨ ਸਕੈਵੇਂਜਰ ਵਜੋਂ ਕੰਮ ਕਰਕੇ **Nitrogenase** ਐਂਜ਼ਾਈਮ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ (1 N₂ → 2 NH₃ ਲਈ **16 ATP** ਲੱਗਦੇ ਹਨ)।

---

### [Level H: Higher Secondary — Class 11–12 ਉੱਚ ਪੱਧਰ]
1. **ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ (C₃, C₄, CAM) ਅਤੇ ਸੈਲੂਲਰ ਸਾਹ ਕਿਰਿਆ (Respiration):**
   - **Non-cyclic (Z-scheme)** ਵਿੱਚ PS-II (P₆₈₀) ਅਤੇ PS-I (P₇₀₀) ਦੋਵੇਂ ਕੰਮ ਕਰਦੇ ਹਨ (ATP + NADPH + O₂ ਬਣਦੇ ਹਨ), ਜਦਕਿ **Cyclic photophosphorylation** (Stroma lamellae ਵਿੱਚ, >680 nm) ਵਿੱਚ ਸਿਰਫ਼ **PS-I (P₇₀₀)** ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ **ਸਿਰਫ਼ ATP** ਬਣਦਾ ਹੈ।
   - **C₃ ਬਨਾਮ C₄ ਤੁਲਨਾ:**
     - **C₃ ਚੱਕਰ (Calvin Cycle):** ਪ੍ਰਾਇਮਰੀ CO₂ ਗ੍ਰਾਹੀ **RuBP (5C)**, ਪਹਿਲਾ ਸਥਿਰ ਉਤਪਾਦ **3-PGA (3C)**; ਪ੍ਰਤੀ ਗਲੂਕੋਜ਼ **18 ATP + 12 NADPH** ਲੱਗਦੇ ਹਨ।
     - **C₄ ਚੱਕਰ (Hatch-Slack Pathway — ਮੱਕੀ, ਗੰਨਾ, ਜਵਾਰ, *Amaranthus*):** **Kranz anatomy** ਮੌਜੂਦ; Mesophyll ਵਿੱਚ **PEPCase** ਦੁਆਰਾ **PEP (3C)** ਨਾਲ CO₂ ਜੁੜ ਕੇ **OAA (4C)** ਬਣਦਾ ਹੈ; Bundle sheath ਵਿੱਚ RuBisCO ਹੁੰਦਾ ਹੈ; **Photorespiration (C₂ ਚੱਕਰ) ਗੈਰ-ਹਾਜ਼ਰ**; ਪ੍ਰਤੀ ਗਲੂਕੋਜ਼ **30 ATP + 12 NADPH** ਲੱਗਦੇ ਹਨ।
   - **ਸੈਲੂਲਰ ਸਾਹ ਕਿਰਿਆ:** **Glycolysis** (ਸਾਈਟੋਪਲਾਜ਼ਮ ਵਿੱਚ, ਸ਼ੁੱਧ ਲਾਭ 2 ATP + 2 NADH; Pacemaker ਐਂਜ਼ਾਈਮ **PFK**), **Krebs Cycle** (ਮਾਈਟੋਕਾਂਡਰੀਅਲ ਮੈਟ੍ਰਿਕਸ ਵਿੱਚ; **Succinate dehydrogenase** ਅੰਦਰੂਨੀ ਝਿੱਲੀ ਨਾਲ ਜੁੜਿਆ ਹੁੰਦਾ ਹੈ), **ETS** (Complex IV ਵਿੱਚ Cytochrome a, a₃ ਅਤੇ 2 Cu ਕੇਂਦਰ)।
   - **ਸਾਹ ਗੁਣਾਂਕ (RQ = CO₂ / O₂):** ਕਾਰਬੋਹਾਈਡ੍ਰੇਟ = **1.0** | ਚਰਬੀ (Tripalmitin) = **0.7** | ਪ੍ਰੋਟੀਨ ≈ **0.9** | Organic acids > 1 (Oxalic acid = 4.0, Malic acid = 1.33) | ਅਣ-ਆਕਸੀ ਸਾਹ = **∞**।

---

### [Level G: Graduation — B.Sc. ਅਤੇ ਐਡਵਾਂਸਡ ਪੱਧਰ]
1. **ਪੌਦਾ ਹਾਰਮੋਨ (Phytohormones) ਅਤੇ ਪਰਿਆਵਰਣ/ਵਾਤਾਵਰਣ ਵਿਗਿਆਨ (Ecology):**
   - **5 ਪੌਦਾ ਹਾਰਮੋਨ:** **Auxin** (Tryptophan + Zn²⁺ ਤੋਂ; Apical dominance, 2,4-D ਨਦੀਨ-ਨਾਸ਼ਕ), **Gibberellin** (*Gibberella fujikuroi*; Bolting, ਜੌਂ ਦੇ ਬੀਜਾਂ ਵਿੱਚ α-amylase ਬਣਾਉਣਾ), **Cytokinin** (Zeatin; ਸੈੱਲ ਵੰਡ, **Richmond-Lang effect** ਰਾਹੀਂ ਬੁਢਾਪਾ ਰੋਕਣਾ), **Ethylene** (Methionine ਤੋਂ ਗੈਸੀ ਹਾਰਮੋਨ; ਫਲਾਂ ਨੂੰ ਪਕਾਉਣਾ), **ABA** (Carotenoid ਤੋਂ; ਸਟ੍ਰੈੱਸ ਹਾਰਮੋਨ, ਸਟੋਮੈਟਾ ਬੰਦ ਕਰਨਾ)।
   - **Phytochrome:** **Pr (660 nm) ⇄ [Red / Far-Red] ⇄ Pfr (730 nm, ਸਰਗਰਮ ਰੂਪ)**।
   - **Ecological Pyramids:** **ਊਰਜਾ ਦਾ ਪਿਰਾਮਿਡ (Pyramid of Energy) ਹਮੇਸ਼ਾ ਸਿੱਧਾ (ALWAYS Upright)** ਹੁੰਦਾ ਹੈ (**Lindeman's 10% Law**); ਜਲ/ਤਾਲਾਬ ਪਰਿਸਥਿਤੀ ਤੰਤਰ ਵਿੱਚ **Biomass ਦਾ ਪਿਰਾਮਿਡ ਉਲਟਾ (Inverted)** ਹੁੰਦਾ ਹੈ। **NPP = GPP − R**।
   - **ਪੰਜਾਬ ਦੀਆਂ 6 ਰਾਮਸਰ ਵੈੱਟਲੈਂਡ ਸਾਈਟਾਂ (Ramsar Sites):** **ਹਰੀਕੇ ਪੱਤਣ**, **ਕਾਂਜਲੀ**, **ਰੋਪੜ**, **ਕੇਸ਼ੋਪੁਰ-ਮਿਆਣੀ**, **ਨੰਗਲ** ਅਤੇ **ਬਿਆਸ ਕੰਜ਼ਰਵੇਸ਼ਨ ਰਿਜ਼ਰਵ** (ਇੱਥੇ ਪੰਜਾਬ ਦਾ ਰਾਜ ਜਲ-ਜੀਵ **Indus River Dolphin — ਭੁੱਲਣ** ਮਿਲਦੀ ਹੈ)।`,
            hi: `### [Level B: Basic — Class 6–8 आधारभूत स्तर]
1. **प्रकाश संश्लेषण, जाइलम-फ्लोएम एवं वाष्पोत्सर्जन (Transpiration):**
   - **प्रकाश संश्लेषण समीकरण (Cornelius van Niel तथा Ruben & Kamen ने ¹⁸O से सिद्ध किया कि O₂ जल से निकलती है):**
     **6CO₂ + 12H₂O —(Sunlight / Chlorophyll)→ C₆H₁₂O₆ + 6H₂O + 6O₂↑**
   - **Transpiration बनाम Guttation (बिंदुस्राव):** Transpiration में रंध्रों (Stomata) द्वारा **शुद्ध जल वाष्प** के रूप में निकलता है; **Guttation** में प्रातःकाल **मूल दाब (Root pressure)** के कारण पत्ती के किनारों पर स्थित **जल-रंध्रों (Hydathodes)** से लवणयुक्त जल की बूँदें निकलती हैं।

---

### [Level I: Intermediate — Class 9–10 मध्यम स्तर]
1. **जल विभव (Water Potential Ψw) एवं DPD:**
   - **Water Potential (Ψw = Ψs + Ψp):** **शुद्ध जल का जल विभव अधिकतम (Ψw = 0 MPa) होता है**। विलेय मिलाने पर Ψs सदैव **ऋणात्मक (Negative)** हो जाता है। जल सदैव **उच्च Ψw (कम ऋणात्मक) से निम्न Ψw (अधिक ऋणात्मक)** की ओर गति करता है।
   - **DPD (विसरण दाब न्यूनता):** **DPD = OP − TP**। पूर्ण स्फीत कोशिका (Fully turgid cell) में TP = OP ⇒ **DPD = 0**; श्लथ कोशिका (Flaccid cell) में TP = 0 ⇒ **DPD = OP**। जल **कम DPD से अधिक DPD** की ओर जाता है!
   - **Apoplast बनाम Symplast:** अंतःत्वचा (Endodermis) में **Suberin की Casparian पट्टियाँ** Apoplast मार्ग को रोक देती हैं।
   - **रंध्र खुलने की क्रियाविधि:** **Levitt (1974)** का सक्रिय **K⁺ Malate Pump सिद्धांत** (ABA रंध्रों को बंद करता है)। **Munch Mass Flow Hypothesis** फ्लोएम में **Sucrose** के स्थानांतरण को समझाता है।
2. **खनिज पोषण एवं जैविक नाइट्रोजन स्थिरीकरण:**
   - **प्रमुख खनिज तत्व:** **Mg²⁺** (क्लोरोफिल के पोरफाइरिन वलय का केंद्रीय परमाणु, RuBisCO व PEPCase सक्रियक), **Mo** (Nitrogenase एवं Nitrate reductase का घटक), **Mn²⁺ एवं Cl⁻** (जल का प्रकाश-अपघटन / Photolysis of water), **Zn²⁺** (Auxin संश्लेषण; कमी से धान का *खैरा रोग*), **B** (परागकण अंकुरण)।
   - **Biological N₂ Fixation:** *Rhizobium* ग्रंथिकाओं में **Leghemoglobin** ऑक्सीजन अपमार्जक (Oxygen scavenger) के रूप में कार्य कर **Nitrogenase** एंजाइम की रक्षा करता है (1 N₂ → 2 NH₃ हेतु **16 ATP** खर्च होते हैं)।

---

### [Level H: Higher Secondary — Class 11–12 उच्चतर स्तर]
1. **प्रकाश संश्लेषण (C₃, C₄, CAM) एवं कोशिकीय श्वसन (Respiration):**
   - **अचक्रीय (Z-scheme)** में PS-II (P₆₈₀) व PS-I (P₇₀₀) दोनों कार्य करते हैं (ATP + NADPH + O₂ बनते हैं), जबकि **चक्रीय प्रकाश-फॉस्फोरिलीकरण** (Stroma lamellae में, >680 nm) में केवल **PS-I (P₇₀₀)** कार्य करता है तथा **केवल ATP** बनता है।
   - **C₃ बनाम C₄ तुलना:**
     - **C₃ चक्र (Calvin Cycle):** प्राथमिक CO₂ ग्राही **RuBP (5C)**, प्रथम स्थायी उत्पाद **3-PGA (3C)**; प्रति ग्लूकोज़ **18 ATP + 12 NADPH** लगते हैं।
     - **C₄ चक्र (Hatch-Slack Pathway — मक्का, गन्ना, ज्वार, *Amaranthus*):** **Kranz anatomy** उपस्थित; Mesophyll में **PEPCase** द्वारा **PEP (3C)** से CO₂ जुड़कर **OAA (4C)** बनता है; पूलाच्छद (Bundle sheath) में RuBisCO होता है; **प्रकाश-श्वसन (C₂ चक्र) अनुपस्थित**; प्रति ग्लूकोज़ **30 ATP + 12 NADPH** लगते हैं।
   - **कोशिकीय श्वसन:** **Glycolysis** (कोशिकाद्रव्य में, शुद्ध लाभ 2 ATP + 2 NADH; पेसमेकर एंजाइम **PFK**), **Krebs Cycle** (माइटोकॉन्ड्रियल मैट्रिक्स में; **Succinate dehydrogenase** आंतरिक झिल्ली से जुड़ा होता है), **ETS** (Complex IV में Cytochrome a, a₃ एवं 2 Cu केंद्र)।
   - **श्वसन गुणांक (RQ = CO₂ / O₂):** कार्बोहाइड्रेट = **1.0** | वसा (Tripalmitin) = **0.7** | प्रोटीन ≈ **0.9** | कार्बनिक अम्ल > 1 (Oxalic acid = 4.0, Malic acid = 1.33) | अवायवीय श्वसन = **∞**।

---

### [Level G: Graduation — B.Sc. एवं स्नातक स्तर]
1. **पादप हार्मोन (Phytohormones) एवं पारिस्थितिकी/पर्यावरण (Ecology):**
   - **5 पादप हार्मोन:** **Auxin** (Tryptophan + Zn²⁺ से; शीर्ष प्रभाविता, 2,4-D द्विबीजपत्री खरपतवारनाशी), **Gibberellin** (*Gibberella fujikuroi*; Bolting, जौ के बीजों में α-amylase प्रेरण), **Cytokinin** (Zeatin; कोशिका विभाजन, **Richmond-Lang effect** द्वारा जीर्णता विलंबन), **Ethylene** (Methionine से गैसीय हार्मोन; फलों को पकाना), **ABA** (Carotenoid से; तनाव हार्मोन, रंध्र बंद करना)।
   - **Phytochrome:** **Pr (660 nm) ⇄ [Red / Far-Red] ⇄ Pfr (730 nm, सक्रिय रूप)**।
   - **पारिस्थितिक पिरामिड:** **ऊर्जा का पिरामिड (Pyramid of Energy) सदैव सीधा (ALWAYS Upright)** होता है (**Lindeman's 10% Law**); जलीय/तालाब पारितंत्र में **जैवभार (Biomass) का पिरामिड उल्टा (Inverted)** होता है। **NPP = GPP − R**।
   - **पंजाब की 6 रामसर आर्द्रभूमियाँ (Ramsar Sites):** **हरिके पत्तन**, **कांजली**, **रोपड़**, **केशोपुर-मियानी**, **नंगल** और **ब्यास संरक्षण रिज़र्व** (यहाँ पंजाब का राज्य जलीय जीव **सिंधु नदी डॉल्फ़िन — Platanista minor** पाया जाता है)।`
        },
        keyNotes: {
            en: [
                'Pure water has the maximum Water Potential (Ψw = 0 MPa); water always moves from Higher Ψw (less negative) to Lower Ψw (more negative), or equivalently from Lower DPD to Higher DPD (DPD = OP - TP).',
                'Mineral Specificity: Mg2+ (chlorophyll ring + RuBisCO/PEPCase activator), Mo (Nitrogenase + Nitrate reductase), Mn2+ & Cl- (photolysis of water at PS-II), Zn2+ (Auxin IAA synthesis), Boron (pollen germination).',
                'C3 vs C4 Energetics: C3 fixes CO2 via RuBisCO into 3-PGA using 3 ATP + 2 NADPH per CO2 (18 ATP + 12 NADPH per glucose); C4 fixes CO2 via PEPCase into 4C OAA in Kranz mesophyll using 5 ATP + 2 NADPH per CO2 (30 ATP + 12 NADPH per glucose) with zero photorespiration.',
                'Respiratory Quotient (RQ = CO2 / O2): Carbohydrates = 1.0 | Fats (Tripalmitin) = 0.7 | Proteins = 0.9 | Organic acids > 1.0 (Malic = 1.33, Oxalic = 4.0) | Anaerobic = Infinity.',
                'Phytohormone Precursors: Auxin <- Tryptophan (Zn2+) | Gibberellin <- Acetyl-CoA / Terpenoids (ent-kaurene) | Cytokinin <- Adenine (Purine) | Ethylene <- Methionine | ABA <- Carotenoids (Violaxanthin).',
                'Ecological Laws & Punjab Wetlands: Pyramid of Energy is ALWAYS upright (Lindeman 10% Law), while Aquatic Pyramid of Biomass is inverted. Punjab has 6 Ramsar Wetlands: Harike, Kanjli, Ropar, Keshopur-Miani, Nangal, and Beas Conservation Reserve.'
            ],
            pa: [
                'ਸ਼ੁੱਧ ਪਾਣੀ ਦੀ ਜਲ ਸੰਭਾਵਨਾ ਸਭ ਤੋਂ ਵੱਧ (Ψw = 0 MPa) ਹੁੰਦੀ ਹੈ; ਪਾਣੀ ਹਮੇਸ਼ਾ ਉੱਚ Ψw ਤੋਂ ਘੱਟ Ψw (ਜਾਂ ਘੱਟ DPD ਤੋਂ ਵੱਧ DPD, ਜਿੱਥੇ DPD = OP - TP) ਵੱਲ ਜਾਂਦਾ ਹੈ।',
                'ਖਣਿਜਾਂ ਦੇ ਕੰਮ: Mg2+ (ਕਲੋਰੋਫਿਲ ਰਿੰਗ + RuBisCO/PEPCase), Mo (Nitrogenase + Nitrate reductase), Mn2+ ਤੇ Cl- (ਪਾਣੀ ਦਾ ਪ੍ਰਕਾਸ਼-ਅਪਘਟਨ), Zn2+ (Auxin ਸੰਸ਼ਲੇਸ਼ਣ), Boron (ਪਰਾਗ ਕਣ ਪੁੰਗਰਨ)।',
                'C3 ਬਨਾਮ C4 ਊਰਜਾ ਖਰਚ: C3 ਵਿੱਚ ਪ੍ਰਤੀ ਗਲੂਕੋਜ਼ 18 ATP + 12 NADPH ਲੱਗਦੇ ਹਨ, ਜਦਕਿ C4 (ਮੱਕੀ, ਗੰਨਾ — Kranz anatomy) ਵਿੱਚ 30 ATP + 12 NADPH ਲੱਗਦੇ ਹਨ ਅਤੇ Photorespiration ਨਹੀਂ ਹੁੰਦਾ।',
                'ਸਾਹ ਗੁਣਾਂਕ (RQ = CO2 / O2): ਕਾਰਬੋਹਾਈਡ੍ਰੇਟ = 1.0 | ਚਰਬੀ (Tripalmitin) = 0.7 | ਪ੍ਰੋਟੀਨ = 0.9 | Organic acids > 1.0 (Oxalic acid = 4.0) | ਅਣ-ਆਕਸੀ = ਅਨੰਤ (∞)।',
                'ਪੌਦਾ ਹਾਰਮੋਨ ਪੂਰਵਗਾਮੀ (Precursors): Auxin <- Tryptophan | Gibberellin <- Terpenoids | Cytokinin <- Adenine | Ethylene <- Methionine | ABA <- Carotenoids।',
                'ਊਰਜਾ ਦਾ ਪਿਰਾਮਿਡ ਹਮੇਸ਼ਾ ਸਿੱਧਾ (Upright) ਹੁੰਦਾ ਹੈ ਜਦਕਿ ਜਲ ਪਰਿਸਥਿਤੀ ਤੰਤਰ ਵਿੱਚ Biomass ਦਾ ਪਿਰਾਮਿਡ ਉਲਟਾ ਹੁੰਦਾ ਹੈ। ਪੰਜਾਬ ਵਿੱਚ 6 ਰਾਮਸਰ ਸਾਈਟਾਂ ਹਨ (ਹਰੀਕੇ, ਕਾਂਜਲੀ, ਰੋਪੜ, ਕੇਸ਼ੋਪੁਰ-ਮਿਆਣੀ, ਨੰਗਲ, ਬਿਆਸ)।'
            ],
            hi: [
                'शुद्ध जल का जल विभव अधिकतम (Ψw = 0 MPa) होता है; जल सदैव उच्च Ψw से निम्न Ψw (अथवा कम DPD से अधिक DPD, जहाँ DPD = OP - TP) की ओर जाता है।',
                'खनिज तत्वों के कार्य: Mg2+ (क्लोरोफिल वलय + RuBisCO/PEPCase), Mo (Nitrogenase + Nitrate reductase), Mn2+ व Cl- (जल का प्रकाश-अपघटन), Zn2+ (Auxin संश्लेषण), Boron (परागकण अंकुरण)।',
                'C3 बनाम C4 ऊर्जा व्यय: C3 में प्रति ग्लूकोज़ 18 ATP + 12 NADPH लगते हैं, जबकि C4 (मक्का, गन्ना — Kranz anatomy) में 30 ATP + 12 NADPH लगते हैं और प्रकाश-श्वसन नहीं होता।',
                'श्वसन गुणांक (RQ = CO2 / O2): कार्बोहाइड्रेट = 1.0 | वसा (Tripalmitin) = 0.7 | प्रोटीन = 0.9 | कार्बनिक अम्ल > 1.0 (Oxalic acid = 4.0) | अवायवीय = अनंत (∞)।',
                'पादप हार्मोन पूर्वगामी (Precursors): Auxin <- Tryptophan | Gibberellin <- Terpenoids | Cytokinin <- Adenine | Ethylene <- Methionine | ABA <- Carotenoids।',
                'ऊर्जा का पिरामिड सदैव सीधा (Upright) होता है जबकि जलीय पारितंत्र में जैवभार (Biomass) का पिरामिड उल्टा होता है। पंजाब में 6 रामसर आर्द्रभूमियाँ हैं (हरिके, कांजली, रोपड़, केशोपुर-मियानी, नंगल, ब्यास)।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Water Potential & DPD Shortcut: Pure Water Ψw = 0 (max) | Fully Turgid Cell: TP = OP => DPD = 0 | Flaccid Cell: TP = 0 => DPD = OP | Water flows High Ψw -> Low Ψw and Low DPD -> High DPD.',
                'Photosynthesis Quick Numbers: Chl a has -CH3 (methyl), Chl b has -CHO (aldehyde) | PS-II = P680 (water splitting), PS-I = P700 | Biological N2 fixation costs 16 ATP per N2 (8 ATP per NH3).',
                'C2 Photorespiration Organelle Sequence (C-P-M): Chloroplast -> Peroxisome -> Mitochondria (releases CO2 and wastes ATP without synthesizing sugar or ATP).',
                'Krebs Cycle Membrane Exception: Succinate dehydrogenase (Complex II, FAD-linked) is the ONLY Krebs cycle enzyme bound to the inner mitochondrial membrane; all others are dissolved in the matrix.',
                'Punjab Ecology & State Symbols: 6 Ramsar Sites (Harike, Kanjli, Ropar, Keshopur-Miani, Nangal, Beas) | State Tree: Sheesham (Dalbergia sissoo) | State Bird: Northern Goshawk (Baaz) | State Animal: Blackbuck | State Aquatic Animal: Indus River Dolphin.'
            ],
            pa: [
                'Water Potential ਤੇ DPD ਸੂਤਰ: ਸ਼ੁੱਧ ਪਾਣੀ Ψw = 0 | ਪੂਰਾ ਫੁੱਲਿਆ ਸੈੱਲ (Turgid): TP = OP => DPD = 0 | Flaccid ਸੈੱਲ: TP = 0 => DPD = OP | ਪਾਣੀ ਉੱਚ Ψw -> ਘੱਟ Ψw ਅਤੇ ਘੱਟ DPD -> ਵੱਧ DPD ਵੱਲ ਜਾਂਦਾ ਹੈ।',
                'ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਅੰਕੜੇ: Chl a ਵਿੱਚ -CH3, Chl b ਵਿੱਚ -CHO | PS-II = P680, PS-I = P700 | N2 ਸਥਿਰੀਕਰਨ ਵਿੱਚ ਪ੍ਰਤੀ N2 16 ATP ਲੱਗਦੇ ਹਨ।',
                'Photorespiration (C2 ਚੱਕਰ) ਦਾ ਕ੍ਰਮ (C-P-M): Chloroplast -> Peroxisome -> Mitochondria।',
                'Krebs Cycle ਅਪਵਾਦ: Succinate dehydrogenase ਇਕੱਲਾ ਐਂਜ਼ਾਈਮ ਹੈ ਜੋ ਮਾਈਟੋਕਾਂਡਰੀਆ ਦੀ ਅੰਦਰੂਨੀ ਝਿੱਲੀ ਨਾਲ ਜੁੜਿਆ ਹੁੰਦਾ ਹੈ।',
                'ਪੰਜਾਬ ਦੇ ਰਾਜ ਚਿੰਨ੍ਹ ਤੇ 6 ਰਾਮਸਰ ਸਾਈਟਾਂ: ਰਾਜ ਰੁੱਖ = ਟਾਹਲੀ (Dalbergia sissoo) | ਰਾਜ ਪੰਛੀ = ਬਾਜ਼ | ਰਾਜ ਜਾਨਵਰ = ਕਾਲਾ ਹਿਰਨ (Blackbuck) | ਰਾਜ ਜਲ-ਜੀਵ = ਭੁੱਲਣ (Indus River Dolphin)।'
            ],
            hi: [
                'Water Potential व DPD सूत्र: शुद्ध जल Ψw = 0 | पूर्ण स्फीत कोशिका (Turgid): TP = OP => DPD = 0 | श्लथ कोशिका (Flaccid): TP = 0 => DPD = OP | जल उच्च Ψw -> निम्न Ψw तथा कम DPD -> अधिक DPD की ओर जाता है।',
                'प्रकाश संश्लेषण आँकड़े: Chl a में -CH3, Chl b में -CHO | PS-II = P680, PS-I = P700 | N2 स्थिरीकरण में प्रति N2 16 ATP लगते हैं।',
                'प्रकाश-श्वसन (C2 चक्र) कोशिकांग क्रम (C-P-M): Chloroplast -> Peroxisome -> Mitochondria।',
                'Krebs Cycle अपवाद: Succinate dehydrogenase एकमात्र एंजाइम है जो माइटोकॉन्ड्रिया की आंतरिक झिल्ली से बंधा होता है।',
                'पंजाब के राज्य प्रतीक व 6 रामसर स्थल: राज्य वृक्ष = शीशम (Dalbergia sissoo) | राज्य पक्षी = बाज़ | राज्य पशु = काला हिरण (Blackbuck) | राज्य जलीय जीव = सिंधु नदी डॉल्फ़िन।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: C4 plants do not perform the Calvin (C3) cycle because they use the Hatch-Slack pathway. Correction: C4 plants perform BOTH cycles — initial CO2 fixation by PEPCase occurs in mesophyll cells, and the Calvin cycle (via RuBisCO) operates in the bundle sheath cells!',
                'Misconception: During photosynthesis, evolved oxygen (O2) comes from carbon dioxide (CO2). Correction: Evolved O2 comes exclusively from the photolysis of water (H2O) at PS-II, as proved by Cornelius van Niel and confirmed by Ruben & Kamen using 18O isotope.',
                'Misconception: High Biochemical Oxygen Demand (BOD) in a river means the water has high dissolved oxygen and is clean. Correction: High BOD means high organic pollution by sewage/microbes, which rapidly consumes oxygen and causes a sharp DROP in Dissolved Oxygen (DO).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: C4 ਪੌਦਿਆਂ ਵਿੱਚ ਕੈਲਵਿਨ ਚੱਕਰ (C3 cycle) ਨਹੀਂ ਚੱਲਦਾ। ਸੁਧਾਰ: C4 ਪੌਦਿਆਂ ਵਿੱਚ ਦੋਵੇਂ ਚੱਕਰ ਚੱਲਦੇ ਹਨ — Mesophyll ਸੈੱਲਾਂ ਵਿੱਚ PEPCase ਦੁਆਰਾ ਸ਼ੁਰੂਆਤੀ CO2 ਫਿਕਸੇਸ਼ਨ ਹੁੰਦੀ ਹੈ ਅਤੇ Bundle sheath ਸੈੱਲਾਂ ਵਿੱਚ RuBisCO ਦੁਆਰਾ ਕੈਲਵਿਨ ਚੱਕਰ ਚੱਲਦਾ ਹੈ!',
                'ਭੁਲੇਖਾ: ਪ੍ਰਕਾਸ਼ ਸੰਸ਼ਲੇਸ਼ਣ ਦੌਰਾਨ ਨਿਕਲਣ ਵਾਲੀ ਆਕਸੀਜਨ (O2) ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ (CO2) ਤੋਂ ਆਉਂਦੀ ਹੈ। ਸੁਧਾਰ: ਆਕਸੀਜਨ (O2) ਸਿਰਫ਼ ਪਾਣੀ (H2O) ਦੇ ਪ੍ਰਕਾਸ਼-ਅਪਘਟਨ ਤੋਂ ਆਉਂਦੀ ਹੈ (Ruben & Kamen ਨੇ 18O ਆਈਸੋਟੋਪ ਨਾਲ ਸਿੱਧ ਕੀਤਾ)।',
                'ਭੁਲੇਖਾ: ਪਾਣੀ ਦਾ ਉੱਚ BOD (Biochemical Oxygen Demand) ਹੋਣ ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਪਾਣੀ ਸਾਫ਼ ਹੈ ਅਤੇ ਆਕਸੀਜਨ ਜ਼ਿਆਦਾ ਹੈ। ਸੁਧਾਰ: ਉੱਚ BOD ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਪਾਣੀ ਵਿੱਚ ਜੈਵਿਕ ਪ੍ਰਦੂਸ਼ਣ ਬਹੁਤ ਜ਼ਿਆਦਾ ਹੈ ਅਤੇ ਘੁਲੀ ਹੋਈ ਆਕਸੀਜਨ (DO) ਬਹੁਤ ਘੱਟ ਹੋ ਗਈ ਹੈ।'
            ],
            hi: [
                'भ्रांति: C4 पादपों में केल्विन चक्र (C3 cycle) नहीं चलता। सुधार: C4 पादपों में दोनों चक्र चलते हैं — पर्णमध्योतक (Mesophyll) में PEPCase द्वारा प्रारंभिक CO2 स्थिरीकरण होता है और पूलाच्छद (Bundle sheath) कोशिकाओं में RuBisCO द्वारा केल्विन चक्र चलता है!',
                'भ्रांति: प्रकाश संश्लेषण में मुक्त होने वाली ऑक्सीजन (O2) कार्बन डाइऑक्साइड (CO2) से आती है। सुधार: मुक्त O2 केवल जल (H2O) के प्रकाश-अपघटन से आती है (Ruben & Kamen ने 18O समस्थानिक से सिद्ध किया)।',
                'भ्रांति: नदी के जल का उच्च BOD (Biochemical Oxygen Demand) होने का अर्थ है कि जल स्वच्छ है और घुलित ऑक्सीजन अधिक है। सुधार: उच्च BOD का अर्थ है कि जल में कार्बनिक प्रदूषण अत्यधिक है जिससे घुलित ऑक्सीजन (DO) तेजी से घट जाती है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Two adjacent plant cells A and B have the following values: Cell A has Osmotic Potential (Ψs) = -12 bars and Pressure Potential (Ψp) = 5 bars; Cell B has Osmotic Potential (Ψs) = -16 bars and Pressure Potential (Ψp) = 6 bars. Calculate the Water Potential (Ψw) of both cells and determine the direction of water movement.',
                    pa: 'ਦੋ ਗੁਆਂਢੀ ਪੌਦਾ ਸੈੱਲਾਂ A ਅਤੇ B ਦੇ ਮੁੱਲ ਇਸ ਪ੍ਰਕਾਰ ਹਨ: ਸੈੱਲ A ਦਾ Ψs = -12 bar ਅਤੇ Ψp = 5 bar; ਸੈੱਲ B ਦਾ Ψs = -16 bar ਅਤੇ Ψp = 6 bar। ਦੋਵਾਂ ਸੈੱਲਾਂ ਦੀ ਜਲ ਸੰਭਾਵਨਾ (Ψw) ਪਤਾ ਕਰੋ ਅਤੇ ਦੱਸੋ ਕਿ ਪਾਣੀ ਕਿਸ ਦਿਸ਼ਾ ਵਿੱਚ ਜਾਵੇਗਾ।',
                    hi: 'दो आसन्न पादप कोशिकाओं A और B के मान इस प्रकार हैं: कोशिका A का Ψs = -12 bar और Ψp = 5 bar; कोशिका B का Ψs = -16 bar और Ψp = 6 bar। दोनों कोशिकाओं का जल विभव (Ψw) ज्ञात करें तथा जल के प्रवाह की दिशा बताएँ।'
                },
                solutionSteps: {
                    en: [
                        'Formula for Water Potential: Ψw = Ψs + Ψp.',
                        'For Cell A: Ψw(A) = -12 + 5 = -7 bars (equivalently DPD_A = OP - TP = 12 - 5 = 7 bars).',
                        'For Cell B: Ψw(B) = -16 + 6 = -10 bars (equivalently DPD_B = OP - TP = 16 - 6 = 10 bars).',
                        'Since Water Potential of Cell A (-7 bars) is HIGHER (less negative) than that of Cell B (-10 bars), water moves from Cell A to Cell B (or from lower DPD 7 bars to higher DPD 10 bars).'
                    ],
                    pa: [
                        'ਜਲ ਸੰਭਾਵਨਾ ਦਾ ਸੂਤਰ: Ψw = Ψs + Ψp।',
                        'ਸੈੱਲ A ਲਈ: Ψw(A) = -12 + 5 = -7 bar (ਅਤੇ DPD_A = 12 - 5 = 7 bar)।',
                        'ਸੈੱਲ B ਲਈ: Ψw(B) = -16 + 6 = -10 bar (ਅਤੇ DPD_B = 16 - 6 = 10 bar)।',
                        'ਕਿਉਂਕਿ ਸੈੱਲ A ਦੀ ਜਲ ਸੰਭਾਵਨਾ (-7 bar) ਸੈੱਲ B (-10 bar) ਨਾਲੋਂ ਵੱਧ (ਘੱਟ ਰਿਣਾਤਮਕ) ਹੈ, ਇਸ ਲਈ ਪਾਣੀ ਸੈੱਲ A ਤੋਂ ਸੈੱਲ B ਵੱਲ ਜਾਵੇਗਾ।'
                    ],
                    hi: [
                        'जल विभव का सूत्र: Ψw = Ψs + Ψp।',
                        'कोशिका A के लिए: Ψw(A) = -12 + 5 = -7 bar (तथा DPD_A = 12 - 5 = 7 bar)।',
                        'कोशिका B के लिए: Ψw(B) = -16 + 6 = -10 bar (तथा DPD_B = 16 - 6 = 10 bar)।',
                        'चूँकि कोशिका A का जल विभव (-7 bar) कोशिका B (-10 bar) से उच्च (कम ऋणात्मक) है, अतः जल कोशिका A से कोशिका B की ओर प्रवाहित होगा।'
                    ]
                },
                finalAnswer: {
                    en: 'Ψw(A) = -7 bars, Ψw(B) = -10 bars; Water moves from Cell A to Cell B.',
                    pa: 'Ψw(A) = -7 bar, Ψw(B) = -10 bar; ਪਾਣੀ ਸੈੱਲ A ਤੋਂ ਸੈੱਲ B ਵੱਲ ਜਾਵੇਗਾ।',
                    hi: 'Ψw(A) = -7 bar, Ψw(B) = -10 bar; जल कोशिका A से कोशिका B की ओर जाएगा।'
                }
            },
            {
                problem: {
                    en: 'How many total ATP and NADPH molecules are required to synthesize 1 molecule of Sucrose (12C disaccharide) in (a) a Wheat plant (C3) and (b) a Sugarcane plant (C4)?',
                    pa: '(a) ਕਣਕ ਦੇ ਪੌਦੇ (C3) ਅਤੇ (b) ਗੰਨੇ ਦੇ ਪੌਦੇ (C4) ਵਿੱਚ ਸੁਕਰੋਜ਼ (Sucrose, 12C) ਦਾ 1 ਅਣੂ ਬਣਾਉਣ ਲਈ ਕੁੱਲ ਕਿੰਨੇ ATP ਅਤੇ NADPH ਅਣੂਆਂ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ?',
                    hi: '(a) गेहूँ के पादप (C3) तथा (b) गन्ने के पादप (C4) में सुक्रोज़ (Sucrose, 12C) का 1 अणु संश्लेषित करने हेतु कुल कितने ATP एवं NADPH अणुओं की आवश्यकता होगी?'
                },
                solutionSteps: {
                    en: [
                        '1 molecule of Sucrose (C12H22O11) is formed from 2 hexose (6C glucose/fructose) units, requiring the fixation of 12 molecules of CO2.',
                        '(a) In a C3 plant (Wheat), fixing 1 CO2 requires 3 ATP + 2 NADPH -> For 12 CO2 (1 Sucrose): 12 × 3 = 36 ATP and 12 × 2 = 24 NADPH.',
                        '(b) In a C4 plant (Sugarcane), fixing 1 CO2 requires 5 ATP + 2 NADPH (3 ATP in Calvin cycle + 2 ATP for PEP regeneration) -> For 12 CO2 (1 Sucrose): 12 × 5 = 60 ATP and 12 × 2 = 24 NADPH.'
                    ],
                    pa: [
                        'ਸੁਕਰੋਜ਼ (12C) ਦੇ 1 ਅਣੂ ਦੇ ਨਿਰਮਾਣ ਲਈ 2 ਗਲੂਕੋਜ਼/ਫਰਕਟੋਜ਼ ਇਕਾਈਆਂ ਭਾਵ 12 CO2 ਅਣੂਆਂ ਦੇ ਸਥਿਰੀਕਰਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।',
                        '(a) C3 ਪੌਦੇ (ਕਣਕ) ਵਿੱਚ 1 CO2 ਲਈ 3 ATP + 2 NADPH ਲੱਗਦੇ ਹਨ -> 12 CO2 ਲਈ = 36 ATP ਅਤੇ 24 NADPH।',
                        '(b) C4 ਪੌਦੇ (ਗੰਨਾ) ਵਿੱਚ 1 CO2 ਲਈ 5 ATP + 2 NADPH ਲੱਗਦੇ ਹਨ -> 12 CO2 ਲਈ = 60 ATP ਅਤੇ 24 NADPH।'
                    ],
                    hi: [
                        'सुक्रोज़ (12C) के 1 अणु के निर्माण हेतु 2 हेक्सोज़ इकाइयों अर्थात् 12 CO2 अणुओं के स्थिरीकरण की आवश्यकता होती है।',
                        '(a) C3 पादप (गेहूँ) में 1 CO2 हेतु 3 ATP + 2 NADPH लगते हैं -> 12 CO2 हेतु = 36 ATP तथा 24 NADPH।',
                        '(b) C4 पादप (गन्ना) में 1 CO2 हेतु 5 ATP + 2 NADPH लगते हैं -> 12 CO2 हेतु = 60 ATP तथा 24 NADPH।'
                    ]
                },
                finalAnswer: {
                    en: '(a) Wheat (C3): 36 ATP + 24 NADPH; (b) Sugarcane (C4): 60 ATP + 24 NADPH',
                    pa: '(a) ਕਣਕ (C3): 36 ATP + 24 NADPH; (b) ਗੰਨਾ (C4): 60 ATP + 24 NADPH',
                    hi: '(a) गेहूँ (C3): 36 ATP + 24 NADPH; (b) गन्ना (C4): 60 ATP + 24 NADPH'
                }
            }
        ],
        flashcards: [
            {
                id: 'sci-bio-2-fc-1',
                question: {
                    en: '[Level I] What is the Water Potential (Ψw) of pure water at standard temperature and atmospheric pressure, and what is the DPD of a fully turgid cell?',
                    pa: '[Level I] ਮਿਆਰੀ ਤਾਪਮਾਨ ਅਤੇ ਵਾਯੂਮੰਡਲ ਦਬਾਅ ਉੱਤੇ ਸ਼ੁੱਧ ਪਾਣੀ ਦੀ ਜਲ ਸੰਭਾਵਨਾ (Ψw) ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ, ਅਤੇ ਇੱਕ ਪੂਰੀ ਤਰ੍ਹਾਂ ਫੁੱਲੇ ਹੋਏ (Fully turgid) ਸੈੱਲ ਦਾ DPD ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
                    hi: '[Level I] मानक ताप व वायुमंडलीय दाब पर शुद्ध जल का जल विभव (Ψw) कितना होता है, तथा एक पूर्ण स्फीत (Fully turgid) कोशिका का DPD कितना होता है?'
                },
                answer: {
                    en: 'Both are ZERO! Pure water has the maximum possible water potential of Ψw = 0 MPa; in a fully turgid cell, Turgor Pressure equals Osmotic Pressure (TP = OP), so DPD = OP - TP = 0.',
                    pa: 'ਦੋਵੇਂ ਸਿਫ਼ਰ (ZERO) ਹੁੰਦੇ ਹਨ! ਸ਼ੁੱਧ ਪਾਣੀ ਦੀ ਜਲ ਸੰਭਾਵਨਾ Ψw = 0 MPa ਹੁੰਦੀ ਹੈ, ਅਤੇ ਪੂਰੇ ਫੁੱਲੇ ਸੈੱਲ ਵਿੱਚ TP = OP ਹੋਣ ਕਰਕੇ DPD = 0 ਹੁੰਦਾ ਹੈ।',
                    hi: 'दोनों शून्य (ZERO) होते हैं! शुद्ध जल का जल विभव Ψw = 0 MPa होता है, तथा पूर्ण स्फीत कोशिका में TP = OP होने से DPD = 0 होता है।'
                }
            },
            {
                id: 'sci-bio-2-fc-2',
                question: {
                    en: '[Level I/H] Which essential mineral elements are required for (a) Photolysis of water at PS-II, (b) Nitrogenase enzyme, and (c) Auxin (IAA) synthesis?',
                    pa: '[Level I/H] (a) ਪਾਣੀ ਦੇ ਪ੍ਰਕਾਸ਼-ਅਪਘਟਨ (Photolysis of water), (b) Nitrogenase ਐਂਜ਼ਾਈਮ, ਅਤੇ (c) Auxin ਦੇ ਸੰਸ਼ਲੇਸ਼ਣ ਲਈ ਕਿਹੜੇ ਖਣਿਜ ਤੱਤ ਜ਼ਰੂਰੀ ਹਨ?',
                    hi: '[Level I/H] (a) जल के प्रकाश-अपघटन (Photolysis of water), (b) Nitrogenase एंजाइम, तथा (c) Auxin संश्लेषण के लिए कौन-से खनिज तत्व आवश्यक हैं?'
                },
                answer: {
                    en: '(a) Manganese (Mn2+) and Chloride (Cl-); (b) Molybdenum (Mo) and Iron (Fe) as Mo-Fe protein; (c) Zinc (Zn2+) with amino acid Tryptophan.',
                    pa: '(a) ਮੈਂਗਨੀਜ਼ (Mn2+) ਅਤੇ ਕਲੋਰਾਈਡ (Cl-); (b) ਮੋਲੀਬਡੇਨਮ (Mo) ਅਤੇ ਲੋਹਾ (Fe); (c) ਜ਼ਿੰਕ (Zn2+)।',
                    hi: '(a) मैंगनीज (Mn2+) एवं क्लोराइड (Cl-); (b) मोलिब्डेनम (Mo) एवं आयरन (Fe); (c) ज़िंक (Zn2+)।'
                }
            },
            {
                id: 'sci-bio-2-fc-3',
                question: {
                    en: '[Level H] Why do C4 plants (like Maize and Sugarcane) lack photorespiration and exhibit higher productivity at high temperatures?',
                    pa: '[Level H] C4 ਪੌਦਿਆਂ (ਜਿਵੇਂ ਮੱਕੀ ਅਤੇ ਗੰਨਾ) ਵਿੱਚ ਪ੍ਰਕਾਸ਼-ਸਾਹ ਕਿਰਿਆ (Photorespiration) ਕਿਉਂ ਨਹੀਂ ਹੁੰਦੀ?',
                    hi: '[Level H] C4 पादपों (जैसे मक्का एवं गन्ना) में प्रकाश-श्वसन (Photorespiration) क्यों नहीं होता?'
                },
                answer: {
                    en: 'C4 plants possess Kranz anatomy: mesophyll cells have PEPCase (which lacks oxygenase activity) to fix CO2 into C4 acids, which are pumped into gas-tight bundle sheath cells and decarboxylated to maintain a high intracellular CO2 concentration around RuBisCO.',
                    pa: 'C4 ਪੌਦਿਆਂ ਵਿੱਚ Kranz anatomy ਹੁੰਦੀ ਹੈ: Mesophyll ਵਿੱਚ PEPCase ਹੁੰਦਾ ਹੈ ਅਤੇ Bundle sheath ਸੈੱਲਾਂ ਵਿੱਚ C4 ਐਸਿਡ ਟੁੱਟ ਕੇ RuBisCO ਦੇ ਆਲੇ-ਦੁਆਲੇ CO2 ਦੀ ਮਾਤਰਾ ਵਧਾ ਦਿੰਦੇ ਹਨ।',
                    hi: 'C4 पादपों में Kranz anatomy होती है: Mesophyll में PEPCase होता है तथा पूलाच्छद (Bundle sheath) कोशिकाओं में C4 अम्ल के विकार्बोक्सिलीकरण से RuBisCO के पास CO2 की उच्च सांद्रता बनी रहती है।'
                }
            },
            {
                id: 'sci-bio-2-fc-4',
                question: {
                    en: '[Level G] Match the 5 Phytohormones with their signature function: (1) Bolting & alpha-amylase in barley, (2) Richmond-Lang effect (delaying senescence), (3) Apical dominance & 2,4-D weedicide, (4) Stomatal closure in drought, (5) Climacteric fruit ripening.',
                    pa: '[Level G] 5 ਪੌਦਾ ਹਾਰਮੋਨਾਂ ਦਾ ਮਿਲਾਨ ਕਰੋ: (1) Bolting ਤੇ ਜੌਂ ਵਿੱਚ alpha-amylase, (2) Richmond-Lang effect, (3) Apical dominance ਤੇ 2,4-D, (4) ਸੋਕੇ ਵਿੱਚ ਸਟੋਮੈਟਾ ਬੰਦ ਕਰਨਾ, (5) ਫਲ ਪਕਾਉਣਾ।',
                    hi: '[Level G] 5 पादप हार्मोन का मिलान करें: (1) Bolting व जौ में alpha-amylase, (2) Richmond-Lang effect, (3) शीर्ष प्रभाविता व 2,4-D, (4) सूखे में रंध्र बंद करना, (5) फल पकाना।'
                },
                answer: {
                    en: '(1) Gibberellin (GA3), (2) Cytokinin (Zeatin), (3) Auxin, (4) Abscisic Acid (ABA), (5) Ethylene (Ethephon).',
                    pa: '(1) Gibberellin (GA3), (2) Cytokinin, (3) Auxin, (4) Abscisic Acid (ABA), (5) Ethylene।',
                    hi: '(1) Gibberellin (GA3), (2) Cytokinin, (3) Auxin, (4) Abscisic Acid (ABA), (5) Ethylene।'
                }
            },
            {
                id: 'sci-bio-2-fc-5',
                question: {
                    en: '[Level G] Which ecological pyramid is ALWAYS upright without exception, and name the 6 Ramsar Wetlands of Punjab.',
                    pa: '[Level G] ਕਿਹੜਾ ਪਰਿਸਥਿਤੀ ਪਿਰਾਮਿਡ ਬਿਨਾਂ ਕਿਸੇ ਅਪਵਾਦ ਦੇ ਹਮੇਸ਼ਾ ਸਿੱਧਾ (Upright) ਹੁੰਦਾ ਹੈ, ਅਤੇ ਪੰਜਾਬ ਦੀਆਂ 6 ਰਾਮਸਰ ਵੈੱਟਲੈਂਡ ਸਾਈਟਾਂ ਦੇ ਨਾਮ ਦੱਸੋ।',
                    hi: '[Level G] कौन-सा पारिस्थितिक पिरामिड बिना किसी अपवाद के सदैव सीधा (Upright) होता है, तथा पंजाब की 6 रामसर आर्द्रभूमियों के नाम बताएँ।'
                },
                answer: {
                    en: 'The Pyramid of Energy is ALWAYS upright due to Lindeman\'s 10% Law of energy transfer. The 6 Ramsar Wetlands of Punjab are Harike, Kanjli, Ropar, Keshopur-Miani Community Reserve, Nangal Wildlife Sanctuary, and Beas Conservation Reserve.',
                    pa: 'ਊਰਜਾ ਦਾ ਪਿਰਾਮਿਡ (Pyramid of Energy) Lindeman ਦੇ 10% ਨਿਯਮ ਕਾਰਨ ਹਮੇਸ਼ਾ ਸਿੱਧਾ ਹੁੰਦਾ ਹੈ। ਪੰਜਾਬ ਦੀਆਂ 6 ਰਾਮਸਰ ਸਾਈਟਾਂ: ਹਰੀਕੇ, ਕਾਂਜਲੀ, ਰੋਪੜ, ਕੇਸ਼ੋਪੁਰ-ਮਿਆਣੀ, ਨੰਗਲ ਅਤੇ ਬਿਆਸ ਕੰਜ਼ਰਵੇਸ਼ਨ ਰਿਜ਼ਰਵ।',
                    hi: 'ऊर्जा का पिरामिड (Pyramid of Energy) लिंडेमान के 10% नियम के कारण सदैव सीधा होता है। पंजाब के 6 रामसर स्थल: हरिके, कांजली, रोपड़, केशोपुर-मियानी, नंगल और ब्यास संरक्षण रिज़र्व।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. ZOOLOGY I: ANIMAL KINGDOM DIVERSITY, ANIMAL TISSUES & COMPLETE
    //    HUMAN PHYSIOLOGY (LEVEL B -> I -> H -> G)
    // =========================================================================
    {
        topicId: 'sci-bio-zoology-diversity-human-physiology',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 150,
            editorialNote:
                'Level B -> I -> H -> G comprehensive academic blueprint covering ERB Punjab Master Cadre Science (Zoology I): Animal Kingdom Phyla (Porifera to Chordata), Structural Organisation & Animal Tissues, Digestion & Absorption, Breathing & Gas Exchange (Bohr/Haldane effect), Body Fluids & Cardiac Cycle/ECG, Excretion (Counter-current & RAAS), Sliding Filament Muscle Contraction, Neural Action Potential, Endocrine System & Human Reproduction.'
        },
        bookRefs: [
            {
                title: 'NCERT Biology Class XI (Units I, II & V) & Class XII (Unit VI: Human Reproduction)',
                author: 'NCERT / PSEB',
                chapter: 'Animal Kingdom, Structural Organisation in Animals, Human Physiology (Digestion to Chemical Coordination) & Human Reproduction',
                relevance: 'Primary syllabus anchor for Phylum diagnostic characters, excretory organs, lung volumes, O2 dissociation curve, cardiac output, GFR, sarcomere bands, endocrine disorders, and menstrual cycle.'
            },
            {
                title: 'Principles of Anatomy and Physiology & Modern Text Book of Zoology (Invertebrates & Vertebrates)',
                author: 'G.J. Tortora & B. Derrickson / R.L. Kotpal',
                chapter: 'Canal Systems, Excretory Nephridia, ECG Waveforms, Counter-Current Multiplier & Neuroendocrine Axis',
                relevance: 'Graduation-level (Level G) mastery for Master Cadre Zoology questions on Asconoid/Syconoid/Leuconoid sponges, Bohr vs Haldane shift, sarcomere zones, and hormone mechanisms.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Class 6–8 Foundation]
1. **Basis of Animal Classification (Symmetry, Germ Layers & Coelom):**
   - **Levels of Organization:** **Cellular grade** (Porifera) → **Tissue grade** (Coelenterata, Ctenophora) → **Organ grade** (Platyhelminthes) → **Organ-system grade** (Aschelminthes to Chordata).
   - **Symmetry:** **Asymmetrical** (most sponges) | **Radial symmetry** (Coelenterata, Ctenophora, and **Adult Echinoderms** — Note: **Echinoderm larvae are Bilaterally symmetrical!**) | **Bilateral symmetry** (Platyhelminthes to Chordata).
   - **Germ Layers:** **Diploblastic** (ectoderm + endoderm with undifferentiated mesoglea — Porifera, Coelenterata, Ctenophora) vs **Triploblastic** (ectoderm + mesoderm + endoderm — Platyhelminthes to Chordata).
   - **Body Cavity (Coelom — lined by mesoderm):**
     - **Acoelomate** (no body cavity): Porifera, Coelenterata, Ctenophora, **Platyhelminthes**.
     - **Pseudocoelomate** (false coelom — mesoderm present as scattered pouches between ectoderm and endoderm): **Aschelminthes (Nematoda)**.
     - **Eucoelomate (True Coelomate):** **Annelida, Arthropoda, Mollusca** (Schizocoelomates — protostomes) and **Echinodermata, Hemichordata, Chordata** (Enterocoelomates — deuterostomes).
2. **Human Organ Systems Overview:**
   - **Dental Formula:** Human dentition is **Thecodont** (embedded in jaw sockets), **Heterodont** (4 types: Incisors I, Canines C, Premolars PM, Molars M), and **Diphyodont** (two sets in life):
     - **Adult Human (32 teeth):** **(2123 / 2123) × 2 = 32**
     - **Child Milk/Deciduous Teeth (20 teeth):** **(2102 / 2102) × 2 = 20** (**Premolars and 3rd Molars/Wisdom teeth are completely absent in milk dentition**; 20 teeth are diphyodont and 12 teeth are monophyodont!).

---

### [Level I: Intermediate — Class 9–10 Core]
1. **Animal Kingdom Comparative Blueprint (Non-Chordates: Porifera to Hemichordata):**
   | Phylum | Unique Diagnostic Feature | Excretory / Osmoregulatory Organ | Classic Examples (Scientific = Common Name) |
   |---|---|---|---|
   | **Porifera** (Sponges) | **Water Canal System** (Ostia → Spongocoel → Osculum: *Asconoid, Syconoid, Leuconoid*) lined by flagellated **Choanocytes (Collar cells)**; skeleton of spicules/spongin; intracellular digestion | General body surface (Ammonotelic) | *Sycon* (Scypha), ***Spongilla* (Freshwater sponge)**, *Euspongia* (Bath sponge), *Euplectella* (Venus' flower basket) |
   | **Coelenterata (Cnidaria)** | **Cnidoblasts / Cnidocytes** (with stinging **Nematocysts** containing hypnotoxin); gastrovascular cavity (coelenteron); **Metagenesis** (alternation of asexual sessile **Polyp** 2n & sexual free-swimming **Medusa** 2n in ***Obelia***) | Body surface | *Hydra* (polyp only), *Aurelia* (Jellyfish — medusa only), ***Physalia* (Portuguese man-of-war)**, *Adamsia* (Sea anemone), *Pennatula* (Sea pen), *Gorgonia* (Sea fan), *Meandrina* (Brain coral) |
   | **Ctenophora** (Sea Walnuts / Comb Jellies) | **8 external rows of ciliated Comb Plates** for locomotion; **Bioluminescence**; **Colloblasts (Lasso cells)** for prey capture; exclusively marine | Body surface | *Pleurobrachia*, *Ctenoplana* |
   | **Platyhelminthes** (Flatworms) | Dorsoventrally flattened **Acoelomates**; hooks & suckers in parasites | **Flame Cells (Protonephridia / Solenocytes)** | *Taenia solium* (Pork tapeworm), *Fasciola hepatica* (Sheep liver fluke), *Dugesia / Planaria* (highest regeneration capacity) |
   | **Aschelminthes (Nematoda)** (Roundworms) | **Pseudocoelomate**; muscular pharynx; distinct sexual dimorphism (females longer than males with curved posterior tail) | **Renette cell (H-shaped excretory tube)** | *Ascaris lumbricoides* (Roundworm), ***Wuchereria bancrofti* (Filarial worm — causes Elephantiasis/Filariasis via female *Culex* mosquito)**, *Ancylostoma* (Hookworm) |
   | **Annelida** | **True metameric segmentation** (metameres); closed circulatory system (**Haemoglobin/erythrocruorin dissolved in plasma**, no RBCs); longitudinal & circular muscles; **Parapodia** in aquatic *Nereis* | **Nephridia** | *Nereis* (dioecious sandworm), *Pheretima posthuma* (Earthworm — monoecious), *Hirudinaria* (Blood-sucking Leech — anticoagulant **hirudin**) |
   | **Arthropoda** (**Largest Phylum** — >2/3 of all named species) | **Chitinous exoskeleton** (ecdysis); **jointed appendages**; open circulation (**Haemocoel**, colourless haemolymph); respiration by Gills, Book gills (*Limulus*), Book lungs (Scorpion/Spider), or Tracheal system (Insects) | **Malpighian tubules** (Insects), **Green / Antennary glands** (Crustaceans — *Palaemon* prawn), **Coxal glands** (Arachnids) | ***Limulus* (King crab — Living Fossil)**, *Apis, Bombyx, Laccifer*, Vectors (*Anopheles* malaria, *Culex* filariasis, *Aedes* dengue/chikungunya), *Locusta* |
   | **Mollusca** (**Second Largest Phylum**) | Body divided into Head, Muscular Foot, and **Visceral Hump covered by Mantle (Pallium)** secreting calcareous shell; **Radula** (file-like rasping organ for feeding); feather-like gills (**Ctenidia**) in mantle cavity; blue respiratory pigment **Haemocyanin** (Cu-containing) | **Organ of Bojanus** or **Keber's organ** (Pericardial gland) | *Pila* (Apple snail — torsion makes adults asymmetrical), ***Pinctada* (Pearl oyster)**, *Sepia* (Cuttlefish), *Loligo* (Squid), *Octopus* (Devil fish — lacks external shell), *Chaetopleura* (Chiton) |
   | **Echinodermata** (Spiny-skinned) | Exclusively marine; endoskeleton of calcareous ossicles; **Water Vascular (Ambulacral) System** (Madreporite → Stone canal → Ring canal → Radial canal → **Tube feet / Podia** for locomotion, food capture & respiration); **Adult radial, Larva bilateral** | **Excretory system completely ABSENT** | *Asterias* (Starfish), *Echinus* (Sea urchin — Aristotle's lantern), *Antedon* (Sea lily), *Cucumaria* (Sea cucumber), *Ophiura* (Brittle star) |
   | **Hemichordata** | Worm-like marine deuterostomes with body divided into **Proboscis, Collar, and Trunk**; **Stomochord** (buccal diverticulum, NOT a true notochord); gill slits | **Proboscis gland (Glomerulus)** | *Balanoglossus* (Acorn worm / Tongue worm; **Tornaria larva**), *Saccoglossus* |
2. **Phylum Chordata & Vertebrate Classes:**
   - **Four Diagnostic Chordate Characters:** (1) Solid, mesodermal **Notochord**, (2) **Dorsal hollow single nerve cord** (CNS), (3) Paired **pharyngeal gill slits**, and (4) **Post-anal tail**.
   - **Protochordates (Acraniata):** **Urochordata / Tunicata** (notochord present **only in larval tail**; exhibits **retrogressive metamorphosis**; test made of tunicin — *Ascidia, Salpa, Doliolum, Herdmania*) vs **Cephalochordata** (notochord extends **from head to tail and persists throughout life**; wheel organ & flame cells/solenocytes — ***Branchiostoma* / Amphioxus**).
   - **Vertebrate Classes Highlights:**
     - **Cyclostomata (Jawless Agnatha):** Ectoparasites on fishes, 6–15 pairs of gill slits, devoid of scales and paired fins, **anadromous** migration (marine to freshwater for spawning) — *Petromyzon* (Lamprey), *Myxine* (Hagfish).
     - **Chondrichthyes (Cartilaginous Fishes) vs Osteichthyes (Bony Fishes):**
       - *Chondrichthyes:* Ventral mouth, persistent notochord, **Placoid scales**, **no operculum**, **no air bladder** (must swim constantly to avoid sinking), pelvic fins in males bear **Claspers**, internal fertilization, **Ureotelic** — *Scoliodon* (Dogfish), *Pristis* (Sawfish), ***Torpedo* (Electric organ)**, ***Trygon* (Poison sting ray)**.
       - *Osteichthyes:* Terminal mouth, **Cycloid/Ctenoid scales**, **4 pairs of gills covered by Operculum**, **Air bladder present** (regulates buoyancy), external fertilization, **Ammonotelic** — Marine: *Exocoetus* (Flying fish), *Hippocampus* (Sea horse — male brood pouch); Freshwater: *Labeo* (Rohu), *Catla*, *Clarias* (Magur).
     - **Amphibia (3-chambered heart, poikilothermic):** *Bufo, Rana, Hyla* (Tree frog), *Ichthyophis* (limbless caecilian) | **Reptilia (3-chambered heart EXCEPT 4-chambered in *Crocodile*):** Uricotelic, epidermal scales/scutes | **Aves (4-chambered, homeothermic):** **Pneumatic (hollow) bones** with air cavities, **Syrinx** (voice box), crop & gizzard, single left ovary | **Mammalia:** **Mammary glands**, muscular **Diaphragm**, **7 cervical vertebrae**, **Corpus callosum** connecting cerebral hemispheres, non-nucleated biconcave RBCs (except Camel & Llama have oval nucleated RBCs); Prototheria/Monotremes (**egg-laying mammal: *Ornithorhynchus* / Platypus** & *Tachyglossus* / Echidna), Metatheria (*Macropus* / Kangaroo), Eutheria.
3. **Animal Tissues Blueprint:**
   - **Epithelial Tissue:** **Simple Squamous** (pavement epithelium with wavy/tessellated boundaries — **Alveoli of lungs, Bowman's capsule, endothelium of blood vessels**), **Simple Cuboidal** (PCT of nephron with microvilli = **brush-bordered cuboidal**, thyroid follicles, germinal epithelium), **Simple Columnar** (stomach & intestine lining), **Ciliated Epithelium** (**Bronchioles and Fallopian tubes/Oviducts**), **Compound Stratified Epithelium** (skin epidermis, pharynx). **Cell Junctions:** **Tight junctions** (stop leakage across tissue), **Adhering junctions** (cement neighbouring cells), **Gap junctions** (connect cytoplasm via connexons for rapid ion/molecule transfer).
   - **Connective Tissue:** **Tendon** (connects **Skeletal Muscle to Bone** — dense regular white collagen fibres) vs **Ligament** (connects **Bone to Bone** — yellow elastin + collagen fibres); **Cartilage** (**Chondrocytes** in chondrin matrix — tip of nose, epiglottis, intervertebral discs) vs **Bone** (**Osteocytes** in lacunae with **Haversian canals & Volkmann's canals** characteristic of **mammalian long bones**).

---

### [Level H: Higher Secondary — Class 11–12 Mastery]
1. **Digestion, Breathing/Gas Exchange & Body Fluids / Circulation:**
   - **Digestive Glands & Enzymes:**
     - **Saliva (pH 6.8):** Salivary amylase (**Ptyalin** — hydrolyzes 30% starch into maltose) + Lysozyme.
     - **Gastric Glands (pH 1.8):** **Parietal / Oxyntic cells** secrete **HCl** and **Castle's Intrinsic Factor** (essential for absorption of **Vitamin B₁₂ / Cyanocobalamin** in ileum; deficiency causes **Pernicious Anaemia**); **Peptic / Chief / Zymogen cells** secrete **Pepsinogen** & **Prorennin** (rennin curdles milk casein in infants); **Goblet/Mucus neck cells** secrete mucus.
     - **Bile (from Liver, stored in Gall Bladder):** Contains **NO enzymes**; contains **Bile pigments** (Bilirubin & Biliverdin) and **Bile salts** (Sodium glycocholate & sodium taurocholate) which **emulsify fats into micelles** and activate lipases.
     - **Pancreatic Juice & Succus Entericus (pH 7.8):** Non-digestive intestinal enzyme **Enterokinase (Enteropeptidase)** secreted by duodenal mucosa converts inactive **Trypsinogen → active Trypsin**, which then activates Chymotrypsinogen → Chymotrypsin and Procarboxypeptidase → Carboxypeptidase.
   - **Breathing, Lung Volumes & Oxygen-Haemoglobin Dissociation Curve:**
     - **Respiratory Volumes:** **Tidal Volume (TV)** = 500 mL | **Inspiratory Reserve Volume (IRV)** = 2500–3000 mL | **Expiratory Reserve Volume (ERV)** = 1000–1100 mL | **Residual Volume (RV)** = 1100–1200 mL (cannot be measured by simple spirometer!).
     - **Capacities:** **Vital Capacity (VC = TV + IRV + ERV ≈ 4000–4600 mL)** | **Total Lung Capacity (TLC = VC + RV ≈ 5800 mL)**.
     - **O₂ Transport (97% as Oxyhaemoglobin, 3% dissolved plasma; 100 mL oxygenated blood delivers **5 mL O₂** to tissues under normal resting conditions):**
       - **Sigmoid O₂-Hb Dissociation Curve:**
       - **Right Shift (Bohr Effect — promotes O₂ dissociation/unloading at active tissues):** Caused by **High pCO₂, High H⁺ (Low pH / high acidity), High Temperature, and High 2,3-BPG** (increases P₅₀).
       - **Left Shift (Haldane Effect — promotes O₂ binding at lungs):** Caused by **High pO₂, Low pCO₂, Low H⁺ (High pH), Low Temperature**, and **Fetal Haemoglobin (HbF)**.
     - **CO₂ Transport (100 mL deoxygenated blood delivers **4 mL CO₂** to alveoli):** **70% as Bicarbonate (HCO₃⁻)** via **Carbonic anhydrase** (fastest enzyme, requires Zn²⁺; accompanied by **Hamburger's Chloride Shift** where Cl⁻ enters RBCs as HCO₃⁻ leaves), **20–25% as Carbaminohaemoglobin**, and **7% dissolved in plasma**.
   - **Blood Groups, Cardiac Cycle & ECG:**
     - **ABO & Rh:** **Blood Group O negative (O⁻)** is the true **Universal Donor** (no A, B, or Rh antigens on RBCs); **AB⁺** is the **Universal Recipient** (no anti-A, anti-B, or anti-Rh antibodies in plasma). **Erythroblastosis fetalis** occurs when an **Rh⁻ mother** carries a second **Rh⁺ fetus** (prevented by administering **anti-Rh antibodies / RhoGAM** to mother immediately after first delivery).
     - **Conducting System & Cardiac Cycle (0.8 s at 72 beats/min):** **SA Node** (right upper corner of right atrium — **Pacemaker**, 70–75 min⁻¹) → **AV Node** → **Bundle of His** → **Purkinje fibres**.
       - **Atrial Systole (0.1 s) → Ventricular Systole (0.3 s) → Joint Diastole (0.4 s)**.
       - **Stroke Volume (SV = EDV − ESV):** ≈ **70 mL** pumped per ventricle per beat.
       - **Cardiac Output (CO = Stroke Volume × Heart Rate):** 70 mL × 72 min⁻¹ ≈ **5040 mL/min ≈ 5 L/min**.
       - **Heart Sounds:** **First sound (LUBB)** = closure of **Tricuspid and Bicuspid (Mitral) AV valves** at the start of ventricular systole; **Second sound (DUB)** = closure of **Semilunar valves** at the start of ventricular diastole.
       - **Electrocardiogram (ECG):** **P-wave** = depolarization (excitation) of atria; **QRS complex** = depolarization of ventricles (initiates ventricular contraction); **T-wave** = repolarization of ventricles (return from excited to normal state).

---

### [Level G: Graduation — B.Sc. & Advanced Exam Mastery]
1. **Excretion, Sliding Filament Contraction, Neural Transmission, Endocrine & Human Reproduction:**
   - **Excretory System, Counter-Current & Osmoregulation:**
     - **Modes:** **Ammonotelic** (most toxic, requires maximum water — bony fishes, aquatic amphibians/tadpoles), **Ureotelic** (mammals, adult amphibians, cartilaginous fishes — **Urea synthesized in Liver via Ornithine / Krebs-Henseleit Cycle**), **Uricotelic** (least toxic, minimum water loss as pellet/paste — birds, reptiles, land snails, insects).
     - **Nephron & GFR:** **Glomerular Filtration Rate (GFR) = 125 mL/min = 180 L/day** (driven by Net Filtration Pressure NFP = GHP (60) − [BCOP (32) + CHP (18)] = **10 mmHg**). **PCT** reabsorbs 70–80% of electrolytes and 100% of glucose/amino acids.
     - **Loop of Henle (Counter-Current Multiplier in Juxtamedullary Nephrons + Vasa Recta):** **Descending limb is permeable to water** but impermeable to electrolytes (concentrates filtrate down to 1200 mOsmol L⁻¹ in inner medulla); **Ascending limb is impermeable to water** but transports **NaCl** out (dilutes filtrate).
     - **Hormonal Regulation:** Low GFR/BP triggers **JGA (Juxtaglomerular Apparatus)** to release **Renin**, which converts liver Angiotensinogen → Angiotensin I → **Angiotensin II** (potent vasoconstrictor + stimulates adrenal cortex to release **Aldosterone** for Na⁺ and water reabsorption in DCT) + hypothalamus/posterior pituitary **ADH (Vasopressin)** inserts aquaporins in collecting duct. **ANF (Atrial Natriuretic Factor)** from heart atria acts as a **vasodilator** and **inhibits RAAS** (check-mechanism on Renin-Angiotensin!).
   - **Locomotion (Sliding Filament Theory — H.E. Huxley & A.F. Huxley, 1954):**
     - **Sarcomere (functional unit between two Z-lines):** Contains isotropic **I-band (Actin only)** bisected by Z-line, and anisotropic **A-band (Myosin + overlapping Actin)** with central **H-zone (Hensen's zone — Myosin only)** bisected by M-line.
     - **Mechanism:** Acetylcholine at neuromuscular junction releases **Ca²⁺ from Sarcoplasmic Reticulum**, which binds to **Troponin-C**, unmasking active sites on F-actin. Myosin head (with Mg²⁺-dependent ATPase activity) forms cross-bridges and pulls actin toward the centre of the A-band:
       - **During Muscle Contraction:** **Sarcomere shortens, I-band shortens, H-zone disappears/shortens, while the length of A-band REMAINS CONSTANT!**
     - **Human Skeleton (206 bones = 80 Axial + 126 Appendicular):** **Joints:** Fibrous/immovable (cranial sutures), Cartilaginous (pubic symphysis, intervertebral discs), **Synovial:** Ball & Socket (shoulder, hip), Hinge (knee, elbow), **Pivot (between Atlas C₁ and Axis C₂ — "No" joint)**, Gliding (between carpals), Saddle (between carpal and metacarpal of thumb).
   - **Neural Transmission:**
     - **Resting Potential (−70 mV, polarized):** Axolemma is much more permeable to K⁺ than Na⁺; **Na⁺-K⁺ ATPase pump** actively pumps **3 Na⁺ OUT and 2 K⁺ IN** per ATP.
     - **Action Potential (+30 to +45 mV, depolarization):** Stimulus opens voltage-gated Na⁺ channels causing rapid **Na⁺ influx**, followed by repolarization via **K⁺ efflux**.
   - **Endocrine System & Classic Disorders Table:**
     | Gland & Hormone | Target / Physiological Action | Hypo- / Hyper-Secretion Disorders |
     |---|---|---|
     | **Anterior Pituitary** (Adenohypophysis): **GH, TSH, ACTH, FSH, LH, Prolactin** | GH stimulates somatic growth; LH triggers ovulation & stimulates **Leydig cells** to secrete Testosterone | Hypo-GH (child): **Pituitary Dwarfism**; Hyper-GH (child): **Gigantism**; Hyper-GH (adult): **Acromegaly** |
     | **Posterior Pituitary** (Neurohypophysis — stores hypothalamic hormones): **Oxytocin & ADH (Vasopressin)** | **Oxytocin** = uterine contraction during parturition & milk ejection; **ADH** = water reabsorption in DCT/CD | Hypo-ADH: **Diabetes Insipidus** (excessive dilute urine / polyuria + polydipsia, **NO glucose in urine!**) |
     | **Thyroid Gland**: **Thyroxine (T₄), T₃** & **Thyrocalcitonin (TCT)** | Regulates BMR, metamorphosis in tadpoles; **TCT lowers blood Ca²⁺** | Hypo (child): **Cretinism** (stunted growth + mental retardation); Hypo (adult): **Myxoedema (Gull's disease)** / Simple Goitre; Autoimmune Hyper: **Graves' Disease (Exophthalmic Goitre)** |
     | **Parathyroid**: **PTH (Collip's hormone)** | **Hypercalcemic hormone** (increases blood Ca²⁺ by bone resorption; antagonist to TCT) | Hypo-PTH: **Hypocalcemic Tetany**; Hyper-PTH: Osteitis fibrosa cystica |
     | **Adrenal Cortex**: *Zona glomerulosa* (**Aldosterone**), *Zona fasciculata* (**Cortisol**), *Zona reticularis* (Androgens) | Aldosterone = Na⁺ retention; Cortisol = gluconeogenesis, anti-inflammatory, immunosuppressive | Hypo-corticoids: **Addison's Disease** (bronze pigmentation, low Na⁺/glucose); Hyper-cortisol: **Cushing's Syndrome** (moon face, buffalo hump) |
     | **Pancreas (Islets of Langerhans)**: α-cells (**Glucagon**) & β-cells (**Insulin**) | Glucagon = hyperglycemic; **Insulin** = hypoglycemic (glycogenesis) | Hypo-Insulin: **Diabetes Mellitus** (**glycosuria + ketonuria** / ketone bodies in urine) |
   - **Human Reproduction & Menstrual Cycle:**
     - **Testis:** **Seminiferous tubules** have **Spermatogonia (2n)** and nutritive **Sertoli cells** (activated by **FSH**, secrete ABP & Inhibin); interstitial **Leydig cells** (activated by **LH/ICSH**) secrete **Androgens (Testosterone)**. **Spermatogenesis vs Oogenesis:** 1 Primary Spermatocyte (2n) → **4 equal motile Spermatozoa (n)**; 1 Primary Oocyte (2n, arrested at **Prophase-I / Diplotene** before birth) → **1 large Ovum (n) + Polar bodies** (Secondary oocyte arrested at **Metaphase-II** until sperm entry!). Sperm **Acrosome** (modified **Golgi apparatus**) contains **Hyaluronidase & Acrosin** (sperm lysins); middle piece has spiral **Mitochondria (*Nebenkern*)**.
     - **Menstrual Cycle (28 days):** **Menstrual phase** (Days 1–5, progesterone drop sheds endometrium) → **Follicular/Proliferative phase** (Days 6–13, FSH + Estrogen) → **Ovulatory phase (Day 14: peak **LH Surge** ruptures Graafian follicle to release secondary oocyte)** → **Luteal/Secretory phase** (Days 15–28, ruptured follicle forms yellow **Corpus Luteum** secreting **Progesterone** to maintain pregnancy). **Placenta** secretes **hCG** (detected in pregnancy test kits), **hPL, Estrogen, Progesterone**, and ovary secretes **Relaxin**.`,
            pa: `### [Level B: Basic — Class 6–8 ਬੁਨਿਆਦੀ ਪੱਧਰ]
1. **ਜੰਤੂ ਵਰਗੀਕਰਨ ਦੇ ਆਧਾਰ ਅਤੇ ਮਨੁੱਖੀ ਦੰਦ ਸੂਤਰ:**
   - **ਸਮਮਿਤੀ (Symmetry):** **Asymmetrical** (ਸਪੰਜ) | **Radial** (Coelenterata, Ctenophora, ਅਤੇ **ਬਾਲਗ Echinoderms** — ਪਰ **Echinoderm ਦਾ ਲਾਰਵਾ Bilateral ਹੁੰਦਾ ਹੈ!**) | **Bilateral** (Platyhelminthes ਤੋਂ Chordata)।
   - **ਸਰੀਰਕ ਖੋੜ (Coelom):** **Acoelomate** (Platyhelminthes — ਚਪਟੇ ਕਿਰਮ), **Pseudocoelomate** (Aschelminthes / Nematoda — ਗੋਲ ਕਿਰਮ), **Eucoelomate** (Annelida ਤੋਂ Chordata)।
   - **ਮਨੁੱਖੀ ਦੰਦ ਸੂਤਰ (Dental Formula):** ਬਾਲਗ (32 ਦੰਦ) = **(2123 / 2123) × 2 = 32**; ਬੱਚੇ ਦੇ ਦੁੱਧ ਦੇ ਦੰਦ (20 ਦੰਦ) = **(2102 / 2102) × 2 = 20** (**Premolars ਅਤੇ ਤੀਜੀ ਜਾੜ੍ਹ/ਅਕਲ ਦਾੜ੍ਹ ਦੁੱਧ ਦੇ ਦੰਦਾਂ ਵਿੱਚ ਬਿਲਕੁਲ ਗੈਰ-ਹਾਜ਼ਰ ਹੁੰਦੇ ਹਨ**)।

---

### [Level I: Intermediate — Class 9–10 ਮੱਧ ਪੱਧਰ]
1. **ਜੰਤੂ ਜਗਤ (Animal Kingdom) ਦੇ ਪ੍ਰਮੁੱਖ ਫਾਈਲਮਾਂ ਦੀ ਤੁਲਨਾ:**
   | ਫਾਈਲਮ (Phylum) | ਵਿਲੱਖਣ ਪਛਾਣ ਚਿੰਨ੍ਹ | ਮਲ-ਤਿਆਗ ਅੰਗ (Excretory Organ) | ਪ੍ਰਮੁੱਖ ਉਦਾਹਰਣਾਂ |
   |---|---|---|---|
   | **Porifera** | **Water Canal System** (Ostia → Spongocoel → Osculum) ਅਤੇ **Choanocytes (Collar cells)** | ਸਰੀਰ ਦੀ ਸਤ੍ਹਾ | *Sycon*, ***Spongilla* (ਮਿੱਠੇ ਪਾਣੀ ਦਾ ਸਪੰਜ)**, *Euspongia* |
   | **Coelenterata** | **Cnidoblasts / Nematocysts**; *Obelia* ਵਿੱਚ **Metagenesis** (Polyp ↔ Medusa) | ਸਰੀਰ ਦੀ ਸਤ੍ਹਾ | *Hydra*, *Aurelia* (Jellyfish), ***Physalia* (Portuguese man-of-war)**, *Adamsia* |
   | **Ctenophora** | **8 Ciliated Comb Plates** ਅਤੇ **Bioluminescence** (ਜੈਵ-ਚਮਕ) | ਸਰੀਰ ਦੀ ਸਤ੍ਹਾ | *Pleurobrachia, Ctenoplana* |
   | **Platyhelminthes** | **Acoelomate**, ਚਪਟਾ ਸਰੀਰ | **Flame Cells (Protonephridia)** | *Taenia* (Tapeworm), *Fasciola* (Liver fluke), *Planaria* |
   | **Aschelminthes** | **Pseudocoelomate**, ਗੋਲ ਸਰੀਰ | **Renette cell** | *Ascaris*, ***Wuchereria* (Filaria worm — *Culex* ਮੱਛਰ ਰਾਹੀਂ)**, *Ancylostoma* |
   | **Annelida** | ਖੰਡ-ਯੁਕਤ ਸਰੀਰ (Metamerism), ਬੰਦ ਲਹੂ ਗੇੜ (ਪਲਾਜ਼ਮਾ ਵਿੱਚ ਘੁਲਿਆ ਹੀਮੋਗਲੋਬਿਨ) | **Nephridia** | *Nereis* (Parapodia), *Pheretima* (ਗੰਡੋਆ), *Hirudinaria* (ਜੋਂਕ) |
   | **Arthropoda** (ਸਭ ਤੋਂ ਵੱਡਾ ਫਾਈਲਮ) | **Chitinous exoskeleton**, ਜੋੜਦਾਰ ਲੱਤਾਂ, ਖੁੱਲ੍ਹਾ ਲਹੂ ਗੇੜ (Haemocoel) | **Malpighian tubules** (ਕੀਟ), **Green glands** (ਝੀਂਗਾ), **Coxal glands** | ***Limulus* (King crab — Living fossil)**, *Apis, Bombyx*, ਮੱਛਰ |
   | **Mollusca** (ਦੂਜਾ ਸਭ ਤੋਂ ਵੱਡਾ) | Mantle, Calcareous shell, ਭੋਜਨ ਚਬਾਉਣ ਲਈ **Radula**, ਨੀਲਾ **Haemocyanin** | **Organ of Bojanus / Keber's organ** | *Pila*, ***Pinctada* (ਮੋਤੀ ਸਿੱਪੀ)**, *Sepia, Loligo, Octopus* |
   | **Echinodermata** | **Water Vascular System (Tube feet)**; ਬਾਲਗ Radial, ਲਾਰਵਾ Bilateral | **ਮਲ-ਤਿਆਗ ਪ੍ਰਣਾਲੀ ਗੈਰ-ਹਾਜ਼ਰ** | *Asterias* (Starfish), *Echinus*, *Antedon*, *Cucumaria* |
   | **Chordata** | Notochord, Dorsal hollow nerve cord, Gill slits, Post-anal tail | ਗੁਰਦੇ (Kidneys) / Solenocytes (*Amphioxus*) | *Ascidia* (Urochordata), *Branchiostoma* (Cephalochordata), Vertebrata |
2. **ਜੰਤੂ ਟਿਸ਼ੂ (Animal Tissues):**
   - **Tendon** ਮਾਸਪੇਸ਼ੀ ਨੂੰ ਹੱਡੀ ਨਾਲ ਜੋੜਦਾ ਹੈ (**Muscle to Bone**), ਜਦਕਿ **Ligament** ਹੱਡੀ ਨੂੰ ਹੱਡੀ ਨਾਲ ਜੋੜਦਾ ਹੈ (**Bone to Bone**)। ਥਣਧਾਰੀ ਜੀਵਾਂ ਦੀਆਂ ਹੱਡੀਆਂ ਵਿੱਚ **Haversian canals** ਹੁੰਦੀਆਂ ਹਨ।

---

### [Level H: Higher Secondary — Class 11–12 ਉੱਚ ਪੱਧਰ]
1. **ਪਾਚਨ, ਸਾਹ ਕਿਰਿਆ ਅਤੇ ਲਹੂ ਗੇੜ ਪ੍ਰਣਾਲੀ (Human Physiology I):**
   - **ਪਾਚਨ ਗ੍ਰੰਥੀਆਂ:** ਮਿਹਦੇ ਦੇ **Parietal / Oxyntic ਸੈੱਲ** **HCl** ਅਤੇ **Castle's Intrinsic Factor** (ਵਿਟਾਮਿਨ B₁₂ ਦੇ ਸੋਖਣ ਲਈ ਜ਼ਰੂਰੀ) ਬਣਾਉਂਦੇ ਹਨ; **Peptic / Chief ਸੈੱਲ** Pepsinogen ਬਣਾਉਂਦੇ ਹਨ। **ਪਿੱਤ (Bile)** ਵਿੱਚ ਕੋਈ ਐਂਜ਼ਾਈਮ ਨਹੀਂ ਹੁੰਦਾ ਪਰ ਇਹ ਚਰਬੀ ਦਾ ਇਮਲਸੀਕਰਨ (Emulsification) ਕਰਦਾ ਹੈ। ਆਂਦਰ ਦਾ **Enterokinase** Trypsinogen ਨੂੰ ਸਰਗਰਮ **Trypsin** ਵਿੱਚ ਬਦਲਦਾ ਹੈ।
   - **ਸਾਹ ਕਿਰਿਆ ਅਤੇ O₂-Hb Dissociation Curve:**
     - **Tidal Volume (TV) = 500 mL**; **Vital Capacity (VC = TV + IRV + ERV)**।
     - **Bohr Effect (ਸੱਜੇ ਪਾਸੇ ਖਿਸਕਾਅ / Right shift — ਟਿਸ਼ੂਆਂ ਵਿੱਚ O₂ ਛੱਡਣ ਵਿੱਚ ਮਦਦਗਾਰ):** ਉੱਚ pCO₂, ਉੱਚ H⁺ (ਘੱਟ pH), ਉੱਚ ਤਾਪਮਾਨ ਅਤੇ ਉੱਚ 2,3-BPG ਕਾਰਨ ਹੁੰਦਾ ਹੈ। CO₂ ਦਾ 70% ਸੰਚਾਲਨ **Bicarbonate (HCO₃⁻)** ਦੇ ਰੂਪ ਵਿੱਚ **Carbonic anhydrase** ਐਂਜ਼ਾਈਮ ਰਾਹੀਂ ਹੁੰਦਾ ਹੈ (Chloride shift / Hamburger phenomenon)।
   - **ਦਿਲ ਦਾ ਚੱਕਰ (Cardiac Cycle = 0.8 s) ਅਤੇ ECG:**
     - **SA Node** ਨੂੰ ਦਿਲ ਦਾ **Pacemaker (70–75 beats/min)** ਕਿਹਾ ਜਾਂਦਾ ਹੈ।
     - **Stroke Volume (SV) = 70 mL** | **Cardiac Output = 70 × 72 ≈ 5040 mL/min ≈ 5 L/min**।
     - **LUBB** ਆਵਾਜ਼ Tricuspid ਅਤੇ Bicuspid ਵਾਲਵਾਂ ਦੇ ਬੰਦ ਹੋਣ ਨਾਲ ਅਤੇ **DUB** ਆਵਾਜ਼ Semilunar ਵਾਲਵਾਂ ਦੇ ਬੰਦ ਹੋਣ ਨਾਲ ਆਉਂਦੀ ਹੈ।
     - **ECG:** **P-wave** = Atrial depolarization | **QRS complex** = Ventricular depolarization | **T-wave** = Ventricular repolarization।

---

### [Level G: Graduation — B.Sc. ਅਤੇ ਐਡਵਾਂਸਡ ਪੱਧਰ]
1. **ਮਲ-ਤਿਆਗ, ਮਾਸਪੇਸ਼ੀ ਸੁੰਗੜਨ, ਨਿਊਰਲ, ਐਂਡੋਕ੍ਰਾਈਨ ਅਤੇ ਮਨੁੱਖੀ ਪ੍ਰਜਨਨ (Human Physiology II):**
   - **GFR ਅਤੇ Counter-Current:** **GFR = 125 mL/min = 180 L/day**। Loop of Henle ਦੀ ਹੇਠਾਂ ਜਾਂਦੀ ਭੁਜਾ (Descending limb) **ਪਾਣੀ ਲਈ ਪਾਰਗਮ** ਹੈ ਜਦਕਿ ਉੱਪਰ ਜਾਂਦੀ ਭੁਜਾ (Ascending limb) **NaCl ਲਈ ਪਾਰਗਮ** ਹੈ। **RAAS** (Renin → Angiotensin II → Aldosterone) ਅਤੇ **ADH** ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ ਵਧਾਉਂਦੇ ਹਨ, ਜਦਕਿ ਦਿਲ ਦਾ **ANF** ਇਸ ਦੇ ਉਲਟ (Vasodilator) ਕੰਮ ਕਰਦਾ ਹੈ।
   - **Sliding Filament Theory (Huxley):** Ca²⁺ ਆਇਨ **Troponin-C** ਨਾਲ ਜੁੜਦੇ ਹਨ। **ਮਾਸਪੇਸ਼ੀ ਸੁੰਗੜਨ ਦੌਰਾਨ I-band ਅਤੇ H-zone ਛੋਟੇ ਹੋ ਜਾਂਦੇ ਹਨ, ਪਰ A-band ਦੀ ਲੰਬਾਈ ਸਥਿਰ (Constant) ਰਹਿੰਦੀ ਹੈ!**
   - **Resting ਅਤੇ Action Potential:** Resting state (−70 mV) ਵਿੱਚ **Na⁺-K⁺ ਪੰਪ** ਪ੍ਰਤੀ ATP **3 Na⁺ ਬਾਹਰ ਅਤੇ 2 K⁺ ਅੰਦਰ** ਭੇਜਦਾ ਹੈ; Action potential (+30 mV) Na⁺ ਦੇ ਅੰਦਰ ਆਉਣ ਨਾਲ ਪੈਦਾ ਹੁੰਦਾ ਹੈ।
   - **ਐਂਡੋਕ੍ਰਾਈਨ ਰੋਗ ਅਤੇ ਪ੍ਰਜਨਨ:** **ADH ਦੀ ਕਮੀ** ਨਾਲ **Diabetes Insipidus** ਅਤੇ **Insulin ਦੀ ਕਮੀ** ਨਾਲ **Diabetes Mellitus** ਹੁੰਦਾ ਹੈ। **Adrenal cortex** ਦੀ ਕਮੀ ਨਾਲ **Addison's disease** ਅਤੇ Cortisol ਦੀ ਬਹੁਤਾਤ ਨਾਲ **Cushing's syndrome** ਹੁੰਦਾ ਹੈ। ਮਾਹਵਾਰੀ ਚੱਕਰ ਦੇ **14ਵੇਂ ਦਿਨ LH Surge** ਨਾਲ ਅੰਡ-ਉਤਸਰਜਨ (**Ovulation**) ਹੁੰਦਾ ਹੈ ਅਤੇ **Corpus luteum** **Progesterone** ਹਾਰਮੋਨ ਬਣਾਉਂਦਾ ਹੈ।`,
            hi: `### [Level B: Basic — Class 6–8 आधारभूत स्तर]
1. **जंतु वर्गीकरण के आधार एवं मानव दंत सूत्र:**
   - **सममिति (Symmetry):** **Asymmetrical** (स्पंज) | **Radial** (Coelenterata, Ctenophora, तथा **वयस्क Echinoderms** — किंतु **Echinoderm का लार्वा द्विपार्श्व सममित / Bilateral होता है!**) | **Bilateral** (Platyhelminthes से Chordata)।
   - **प्रगुहा (Coelom):** **Acoelomate** (Platyhelminthes — चपटे कृमि), **Pseudocoelomate** (Aschelminthes / Nematoda — गोलकृमि), **Eucoelomate** (Annelida से Chordata)।
   - **मानव दंत सूत्र (Dental Formula):** वयस्क (32 दाँत) = **(2123 / 2123) × 2 = 32**; बालक के दूध के दाँत (20 दाँत) = **(2102 / 2102) × 2 = 20** (**अग्रचर्वणक / Premolars और तृतीय चर्वणक दूध के दाँतों में पूर्णतः अनुपस्थित होते हैं**)।

---

### [Level I: Intermediate — Class 9–10 मध्यम स्तर]
1. **जंतु जगत (Animal Kingdom) के प्रमुख संघों की तुलना:**
   | संघ (Phylum) | अद्वितीय पहचान लक्षण | उत्सर्जी अंग (Excretory Organ) | प्रमुख उदाहरण |
   |---|---|---|---|
   | **Porifera** | **नाल तंत्र (Water Canal System: Ostia → Spongocoel → Osculum)** व **Choanocytes (Collar cells)** | शरीर की सतह | *Sycon*, ***Spongilla* (स्वच्छ जलीय स्पंज)**, *Euspongia* |
   | **Coelenterata** | **दंश कोशिकाएँ (Cnidoblasts / Nematocysts)**; *Obelia* में **Metagenesis** (Polyp ↔ Medusa) | शरीर की सतह | *Hydra*, *Aurelia* (Jellyfish), ***Physalia* (पुर्तगाली युद्धपोत)**, *Adamsia* |
   | **Ctenophora** | **8 कंकत पट्टिकाएँ (Ciliated Comb Plates)** व **Bioluminescence** (जीवदीप्ति) | शरीर की सतह | *Pleurobrachia, Ctenoplana* |
   | **Platyhelminthes** | **Acoelomate**, पृष्ठ-अधर चपटा शरीर | **ज्वाला कोशिकाएँ / Flame Cells (Protonephridia)** | *Taenia* (फीताकृमि), *Fasciola* (यकृत पर्णाभ), *Planaria* |
   | **Aschelminthes** | **Pseudocoelomate**, गोल शरीर | **Renette cell (उत्सर्जी नाल)** | *Ascaris*, ***Wuchereria* (फाइलेरिया कृमि — मादा *Culex* मच्छर द्वारा)**, *Ancylostoma* |
   | **Annelida** | विखंडी खंडीभवन (Metamerism), बंद परिसंचरण (प्लाज्मा में घुला हीमोग्लोबिन) | **वृक्कक (Nephridia)** | *Nereis* (Parapodia), *Pheretima* (केंचुआ), *Hirudinaria* (जोंक) |
   | **Arthropoda** (सबसे बड़ा संघ) | **काइटिनी बाह्यकंकाल**, संधिपाद, खुला परिसंचरण (Haemocoel) | **मैलपीगी नलिकाएँ** (कीट), **हरित ग्रंथियाँ** (झींगा), **कॉक्सल ग्रंथियाँ** | ***Limulus* (राज कर्कट — जीवित जीवाश्म)**, *Apis, Bombyx*, मच्छर |
   | **Mollusca** (दूसरा सबसे बड़ा संघ) | प्रावार (Mantle), कैल्शियम कवच, भोजन पीसने हेतु **रेतीजिह्वा (Radula)**, नीला **Haemocyanin** | **बोजेनस का अंग (Organ of Bojanus) / Keber's organ** | *Pila*, ***Pinctada* (मुक्ता शुक्ति)**, *Sepia, Loligo, Octopus* |
   | **Echinodermata** | **जल संवहन तंत्र (Water Vascular System — Tube feet)**; वयस्क अरीय, लार्वा द्विपार्श्व | **उत्सर्जन तंत्र पूर्णतः अनुपस्थित** | *Asterias* (तारा मछली), *Echinus*, *Antedon*, *Cucumaria* |
   | **Chordata** | पृष्ठरज्जु (Notochord), पृष्ठीय खोखली तंत्रिका रज्जु, क्लोम दरारें, गुद-पश्च पूँछ | वृक्क (Kidneys) / Solenocytes (*Amphioxus*) | *Ascidia* (Urochordata), *Branchiostoma* (Cephalochordata), Vertebrata |
2. **जंतु ऊतक (Animal Tissues):**
   - **कंडरा (Tendon)** कंकाल पेशी को अस्थि से जोड़ती है (**Muscle to Bone**), जबकि **स्नायु (Ligament)** अस्थि को अस्थि से जोड़ता है (**Bone to Bone**)। स्तनधारियों की अस्थियों में **हैवर्सियन नलिकाएँ (Haversian canals)** पाई जाती हैं।

---

### [Level H: Higher Secondary — Class 11–12 उच्चतर स्तर]
1. **पाचन, श्वसन एवं परिसंचरण तंत्र (Human Physiology I):**
   - **पाचन ग्रंथियाँ:** आमाशय की **Parietal / Oxyntic कोशिकाएँ** **HCl** तथा **Castle's Intrinsic Factor** (विटामिन B₁₂ के अवशोषण हेतु अनिवार्य; कमी से *Pernicious anaemia*) स्रावित करती हैं; **Peptic / Chief कोशिकाएँ** Pepsinogen स्रावित करती हैं। **पित्त (Bile)** में कोई एंजाइम नहीं होता किंतु यह वसा का पायसीकरण (Emulsification) करता है। आंत्र का **Enterokinase** निष्क्रिय Trypsinogen को सक्रिय **Trypsin** में बदलता है।
   - **श्वसन एवं O₂-Hb वियोजन वक्र:**
     - **ज्वारीय आयतन (TV) = 500 mL**; **जैव धारिता (VC = TV + IRV + ERV)**।
     - **बोहर प्रभाव (Bohr Effect — दाईं ओर विस्थापन / Right shift — ऊतकों में O₂ विमुक्त करने में सहायक):** उच्च pCO₂, उच्च H⁺ (कम pH), उच्च तापमान एवं उच्च 2,3-BPG के कारण होता है। CO₂ का 70% परिवहन **बाइकार्बोनेट (HCO₃⁻)** के रूप में **Carbonic anhydrase** एंजाइम द्वारा होता है (क्लोराइड शिफ्ट / Hamburger phenomenon)।
   - **हृदय चक्र (Cardiac Cycle = 0.8 s) एवं ECG:**
     - **SA Node** को हृदय का **गतिप्रेरक / Pacemaker (70–75 beats/min)** कहा जाता है।
     - **प्रवाह आयतन (Stroke Volume, SV) = 70 mL** | **हृदय निकास (Cardiac Output) = 70 × 72 ≈ 5040 mL/min ≈ 5 L/min**।
     - **LUBB** ध्वनि त्रिवलनी व द्विवलनी कपाटों के बंद होने से तथा **DUB** ध्वनि अर्धचंद्र कपाटों (Semilunar valves) के बंद होने से उत्पन्न होती है।
     - **ECG:** **P-wave** = आलिंद विध्रुवण (Atrial depolarization) | **QRS complex** = निलय विध्रुवण (Ventricular depolarization) | **T-wave** = निलय पुनर्ध्रुवण (Ventricular repolarization)।

---

### [Level G: Graduation — B.Sc. एवं स्नातक स्तर]
1. **उत्सर्जन, पेशी संकुचन, तंत्रिका, अंतःस्रावी एवं मानव जनन (Human Physiology II):**
   - **GFR एवं प्रतिधारा क्रियाविधि (Counter-Current):** **GFR = 125 mL/min = 180 L/day**। हेनले पाश (Loop of Henle) की अवरोही भुजा (Descending limb) **जल के लिए पारगम्य** है जबकि आरोही भुजा (Ascending limb) **NaCl के लिए पारगम्य** है। **RAAS** (Renin → Angiotensin II → Aldosterone) व **ADH** रक्तदाब बढ़ाते हैं, जबकि हृदय का **ANF** इसके विपरीत (वाहिका-विस्फारक / Vasodilator) कार्य करता है।
   - **सर्पी तंतु सिद्धांत (Sliding Filament Theory — Huxley):** Ca²⁺ आयन **Troponin-C** से जुड़ते हैं। **पेशी संकुचन के दौरान I-band और H-zone छोटे हो जाते हैं, किंतु A-band की लंबाई अपरिवर्तित (Constant) रहती है!**
   - **विश्राम एवं क्रिया विभव:** विश्राम अवस्था (−70 mV) में **Na⁺-K⁺ पंप** प्रति ATP **3 Na⁺ बाहर और 2 K⁺ भीतर** भेजता है; क्रिया विभव (+30 mV) Na⁺ के अंतर्वाह से उत्पन्न होता है।
   - **अंतःस्रावी रोग एवं मानव जनन:** **ADH की कमी** से **Diabetes Insipidus** तथा **Insulin की कमी** से **Diabetes Mellitus** होता है। **Adrenal cortex** की अल्पक्रियता से **Addison's disease** तथा Cortisol की अधिकता से **Cushing's syndrome** होता है। आर्तव चक्र के **14वें दिन LH Surge** से अंडोत्सर्ग (**Ovulation**) होता है तथा **पीत पिंड (Corpus luteum)** **Progesterone** स्रावित करता है।`
        },
        keyNotes: {
            en: [
                'Phylum Diagnostic Hallmark: Porifera (Choanocytes + Canal system) | Coelenterata (Cnidoblasts + Metagenesis in Obelia) | Ctenophora (8 ciliated comb plates + bioluminescence) | Platyhelminthes (Acoelomate + Flame cells) | Aschelminthes (Pseudocoelomate + Renette cell) | Arthropoda (Chitin + Malpighian tubules) | Mollusca (Mantle + Radula) | Echinodermata (Water Vascular System + Adult radial/Larva bilateral).',
                'Digestive Cells & Activation: Gastric Oxyntic/Parietal cells secrete HCl + Castle\'s Intrinsic Factor (for Vitamin B12 absorption); Intestinal Enterokinase activates Trypsinogen -> Trypsin; Bile has no enzymes but emulsifies fats via bile salts.',
                'Gas Exchange & Bohr Effect: Right shift of the sigmoid O2-Hb dissociation curve (high pCO2, high H+/low pH, high temperature, high 2,3-BPG) facilitates O2 unloading in active tissues; 70% of CO2 is transported as HCO3- via RBC Carbonic anhydrase (Chloride shift).',
                'Cardiac Cycle & ECG: SA Node (pacemaker, 70-75/min); Stroke Volume = 70 mL, Cardiac Output = 70 × 72 ≈ 5040 mL/min (5 L/min); Lub = AV valve closure, Dub = Semilunar valve closure; ECG P-wave = atrial depolarization, QRS = ventricular depolarization, T-wave = ventricular repolarization.',
                'Nephron & Muscle Contraction: GFR = 125 mL/min (180 L/day); Descending limb of Loop of Henle is permeable to H2O while Ascending limb is permeable to NaCl. During muscle contraction (Ca2+ binds Troponin-C), I-band and H-zone shorten while A-band length remains CONSTANT.',
                'Endocrine & Reproduction: Posterior pituitary stores hypothalamic Oxytocin & ADH (deficiency -> Diabetes Insipidus); Insulin deficiency -> Diabetes Mellitus; LH surge on Day 14 of menstrual cycle induces Ovulation, and Corpus luteum secretes Progesterone.'
            ],
            pa: [
                'ਫਾਈਲਮ ਪਛਾਣ: Porifera (Choanocytes + Canal system) | Coelenterata (Cnidoblasts + Obelia ਵਿੱਚ Metagenesis) | Ctenophora (8 Comb plates + Bioluminescence) | Platyhelminthes (Flame cells) | Aschelminthes (Pseudocoelomate + Renette cell) | Arthropoda (Malpighian tubules) | Mollusca (Radula) | Echinodermata (Water Vascular System)।',
                'ਪਾਚਨ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ: Oxyntic/Parietal ਸੈੱਲ HCl ਅਤੇ Castle\'s Intrinsic Factor (ਵਿਟਾਮਿਨ B12 ਦੇ ਸੋਖਣ ਲਈ) ਬਣਾਉਂਦੇ ਹਨ; Enterokinase Trypsinogen ਨੂੰ Trypsin ਵਿੱਚ ਬਦਲਦਾ ਹੈ; ਪਿੱਤ (Bile) ਵਿੱਚ ਕੋਈ ਐਂਜ਼ਾਈਮ ਨਹੀਂ ਹੁੰਦਾ।',
                'Bohr Effect: ਉੱਚ pCO2, ਉੱਚ H+ (ਘੱਟ pH) ਅਤੇ ਉੱਚ ਤਾਪਮਾਨ ਨਾਲ O2-Hb ਗ੍ਰਾਫ ਸੱਜੇ ਪਾਸੇ ਖਿਸਕਦਾ ਹੈ ਜਿਸ ਨਾਲ ਟਿਸ਼ੂਆਂ ਨੂੰ O2 ਮਿਲਦੀ ਹੈ; 70% CO2 ਬਾਈਕਾਰਬੋਨੇਟ (HCO3-) ਦੇ ਰੂਪ ਵਿੱਚ ਜਾਂਦੀ ਹੈ।',
                'Cardiac Cycle ਤੇ ECG: SA Node (Pacemaker); Stroke Volume = 70 mL, Cardiac Output = 70 × 72 ≈ 5040 mL/min (5 L/min); P-wave = Atrial depolarization, QRS = Ventricular depolarization, T-wave = Ventricular repolarization।',
                'GFR ਤੇ ਮਾਸਪੇਸ਼ੀ ਸੁੰਗੜਨ: GFR = 125 mL/min (180 L/day)। ਮਾਸਪੇਸ਼ੀ ਸੁੰਗੜਨ ਦੌਰਾਨ (Ca2+ Troponin-C ਨਾਲ ਜੁੜਦਾ ਹੈ) I-band ਅਤੇ H-zone ਛੋਟੇ ਹੋ ਜਾਂਦੇ ਹਨ ਪਰ A-band ਸਥਿਰ (Constant) ਰਹਿੰਦਾ ਹੈ।',
                'ਹਾਰਮੋਨ ਤੇ ਪ੍ਰਜਨਨ: ADH ਦੀ ਕਮੀ -> Diabetes Insipidus; Insulin ਦੀ ਕਮੀ -> Diabetes Mellitus; 14ਵੇਂ ਦਿਨ LH Surge ਨਾਲ ਅੰਡ-ਉਤਸਰਜਨ (Ovulation) ਹੁੰਦਾ ਹੈ ਅਤੇ Corpus luteum Progesterone ਬਣਾਉਂਦਾ ਹੈ।'
            ],
            hi: [
                'संघ पहचान: Porifera (Choanocytes + Canal system) | Coelenterata (Cnidoblasts + Obelia में Metagenesis) | Ctenophora (8 Comb plates + Bioluminescence) | Platyhelminthes (Flame cells) | Aschelminthes (Pseudocoelomate + Renette cell) | Arthropoda (Malpighian tubules) | Mollusca (Radula) | Echinodermata (Water Vascular System)।',
                'पाचन विशेषताएँ: Oxyntic/Parietal कोशिकाएँ HCl व Castle\'s Intrinsic Factor (विटामिन B12 अवशोषण हेतु) स्रावित करती हैं; Enterokinase Trypsinogen को Trypsin में बदलता है; पित्त (Bile) में कोई एंजाइम नहीं होता।',
                'Bohr Effect: उच्च pCO2, उच्च H+ (कम pH) व उच्च तापमान से O2-Hb वक्र दाईं ओर विस्थापित होता है जिससे ऊतकों में O2 मुक्त होती है; 70% CO2 बाइकार्बोनेट (HCO3-) के रूप में परिवहित होती है।',
                'हृदय चक्र व ECG: SA Node (पेसमेकर); Stroke Volume = 70 mL, Cardiac Output = 70 × 72 ≈ 5040 mL/min (5 L/min); P-wave = आलिंद विध्रुवण, QRS = निलय विध्रुवण, T-wave = निलय पुनर्ध्रुवण।',
                'GFR व पेशी संकुचन: GFR = 125 mL/min (180 L/day)। पेशी संकुचन के दौरान (Ca2+ Troponin-C से जुड़ता है) I-band व H-zone छोटे हो जाते हैं किंतु A-band की लंबाई अपरिवर्तित (Constant) रहती है।',
                'हार्मोन व जनन: ADH की कमी -> Diabetes Insipidus; Insulin की कमी -> Diabetes Mellitus; 14वें दिन LH Surge से अंडोत्सर्ग (Ovulation) होता है तथा Corpus luteum Progesterone स्रावित करता है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Excretory Organs Match: Flame cells -> Platyhelminthes | Renette cell -> Aschelminthes | Nephridia -> Annelida | Malpighian tubules -> Insects | Green glands -> Prawn (Crustacea) | Organ of Bojanus -> Mollusca | Proboscis gland -> Hemichordata.',
                'Connective Tissue Mnemonic: BLB (Bone-Ligament-Bone) and MTB (Muscle-Tendon-Bone) | Haversian canals = Mammalian Bone | Enucleated biconcave RBCs = Mammals (except Camel & Llama).',
                'Lung Capacities & Blood Gases: VC = TV (500) + IRV (3000) + ERV (1100) ≈ 4600 mL | 100 mL blood delivers 5 mL O2 to tissues and 4 mL CO2 to alveoli.',
                'Sarcomere Contraction Rule: A-band = CONSTANT | I-band = Shortens | H-zone = Disappears/Shortens | Z-lines come closer | Na+-K+ Pump = 3 Na+ OUT, 2 K+ IN.',
                'Gametogenesis Ploidy & Arrest: Primary Oocyte (2n) arrested at Prophase-I (Diplotene) before birth; Secondary Oocyte (n) ovulated at Metaphase-II on Day 14 (LH Surge).'
            ],
            pa: [
                'ਮਲ-ਤਿਆਗ ਅੰਗ ਮਿਲਾਨ: Flame cells -> Platyhelminthes | Renette cell -> Aschelminthes | Nephridia -> Annelida | Malpighian tubules -> ਕੀਟ | Green glands -> ਝੀਂਗਾ | Organ of Bojanus -> Mollusca | Proboscis gland -> Hemichordata।',
                'ਟਿਸ਼ੂ ਟ੍ਰਿਕ: BLB (Bone-Ligament-Bone) ਅਤੇ MTB (Muscle-Tendon-Bone) | Haversian canals = ਥਣਧਾਰੀ ਹੱਡੀ।',
                'ਫੇਫੜਿਆਂ ਦੀ ਸਮਰੱਥਾ ਤੇ ਗੈਸਾਂ: VC = TV (500) + IRV + ERV | 100 mL ਲਹੂ ਟਿਸ਼ੂਆਂ ਨੂੰ 5 mL O2 ਅਤੇ ਫੇਫੜਿਆਂ ਨੂੰ 4 mL CO2 ਦਿੰਦਾ ਹੈ।',
                'ਸਾਰਕੋਮੀਅਰ ਨਿਯਮ: A-band = ਸਥਿਰ (Constant) | I-band ਤੇ H-zone = ਛੋਟੇ ਹੁੰਦੇ ਹਨ | Na+-K+ ਪੰਪ = 3 Na+ ਬਾਹਰ, 2 K+ ਅੰਦਰ।',
                'ਅੰਡ-ਜਣਨ (Oogenesis): Primary Oocyte (2n) ਜਨਮ ਤੋਂ ਪਹਿਲਾਂ Prophase-I (Diplotene) ਵਿੱਚ ਰੁਕ ਜਾਂਦਾ ਹੈ; Secondary Oocyte (n) Metaphase-II ਅਵਸਥਾ ਵਿੱਚ 14ਵੇਂ ਦਿਨ (LH Surge) ਬਾਹਰ ਨਿਕਲਦਾ ਹੈ।'
            ],
            hi: [
                'उत्सर्जी अंग मिलान: Flame cells -> Platyhelminthes | Renette cell -> Aschelminthes | Nephridia -> Annelida | Malpighian tubules -> कीट | Green glands -> झींगा | Organ of Bojanus -> Mollusca | Proboscis gland -> Hemichordata।',
                'ऊतक ट्रिक: BLB (Bone-Ligament-Bone) और MTB (Muscle-Tendon-Bone) | Haversian canals = स्तनधारी अस्थि।',
                'फुफ्फुस धारिता व गैसें: VC = TV (500) + IRV + ERV | 100 mL रक्त ऊतकों को 5 mL O2 तथा कूपिकाओं को 4 mL CO2 देता है।',
                'सार्कोमियर नियम: A-band = अपरिवर्तित (Constant) | I-band व H-zone = छोटे होते हैं | Na+-K+ पंप = 3 Na+ बाहर, 2 K+ भीतर।',
                'अंडजनन (Oogenesis): Primary Oocyte (2n) जन्म से पूर्व Prophase-I (Diplotene) में रुक जाता है; Secondary Oocyte (n) Metaphase-II अवस्था में 14वें दिन (LH Surge) अंडोत्सर्जित होता है।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Porifera (Sponges) and Echinodermata both have a Water Vascular System. Correction: Porifera has a Water CANAL System (Ostia -> Spongocoel -> Osculum with Choanocytes), whereas Echinodermata has a Water VASCULAR (Ambulacral) System (Madreporite -> Tube feet)!',
                'Misconception: Oxytocin and ADH (Vasopressin) are synthesized by the posterior pituitary gland. Correction: Oxytocin and ADH are actually synthesized by hypothalamic neurosecretory nuclei (supraoptic and paraventricular) and are only transported axonally to be STORED and released by the posterior pituitary (neurohypophysis).',
                'Misconception: During skeletal muscle contraction, both the A-band and I-band shorten. Correction: Myosin and actin filaments do NOT shorten themselves — actin slides over myosin, so the I-band and H-zone shorten while the A-band length remains strictly CONSTANT!'
            ],
            pa: [
                'ਭੁਲੇਖਾ: Porifera (ਸਪੰਜ) ਅਤੇ Echinodermata ਦੋਵਾਂ ਵਿੱਚ Water Vascular System ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: Porifera ਵਿੱਚ Water CANAL System (Ostia -> Spongocoel -> Osculum) ਹੁੰਦਾ ਹੈ, ਜਦਕਿ Echinodermata (Starfish) ਵਿੱਚ Water VASCULAR System (Tube feet) ਹੁੰਦਾ ਹੈ!',
                'ਭੁਲੇਖਾ: Oxytocin ਅਤੇ ADH (Vasopressin) ਹਾਰਮੋਨ ਪਿਛਲੀ ਪਿਟਿਊਟਰੀ (Posterior pituitary) ਦੁਆਰਾ ਬਣਾਏ ਜਾਂਦੇ ਹਨ। ਸੁਧਾਰ: ਇਹ ਦੋਵੇਂ ਹਾਰਮੋਨ ਅਸਲ ਵਿੱਚ Hypothalamus ਦੁਆਰਾ ਬਣਾਏ ਜਾਂਦੇ ਹਨ ਅਤੇ Posterior pituitary ਵਿੱਚ ਸਿਰਫ਼ ਸਟੋਰ ਹੋ ਕੇ ਉੱਥੋਂ ਰਿਲੀਜ਼ ਹੁੰਦੇ ਹਨ।',
                'ਭੁਲੇਖਾ: ਮਾਸਪੇਸ਼ੀ ਸੁੰਗੜਨ ਦੌਰਾਨ A-band ਅਤੇ I-band ਦੋਵੇਂ ਛੋਟੇ ਹੋ ਜਾਂਦੇ ਹਨ। ਸੁਧਾਰ: ਸੁੰਗੜਨ ਦੌਰਾਨ ਸਿਰਫ਼ I-band ਅਤੇ H-zone ਛੋਟੇ ਹੁੰਦੇ ਹਨ, ਜਦਕਿ A-band ਦੀ ਲੰਬਾਈ ਬਿਲਕੁਲ ਸਥਿਰ (Constant) ਰਹਿੰਦੀ ਹੈ!'
            ],
            hi: [
                'भ्रांति: Porifera (स्पंज) और Echinodermata दोनों में जल संवहन तंत्र (Water Vascular System) होता है। सुधार: Porifera में जल नाल तंत्र (Water CANAL System: Ostia -> Spongocoel -> Osculum) होता है, जबकि Echinodermata (तारा मछली) में जल संवहन तंत्र (Water VASCULAR System: Tube feet) होता है!',
                'भ्रांति: Oxytocin और ADH (Vasopressin) हार्मोन पश्च पीयूष ग्रंथि (Posterior pituitary) द्वारा संश्लेषित किए जाते हैं। सुधार: ये दोनों हार्मोन वास्तव में Hypothalamus द्वारा संश्लेषित होते हैं और पश्च पीयूष ग्रंथि में केवल संग्रहित होकर वहाँ से मुक्त होते हैं।',
                'भ्रांति: पेशी संकुचन के दौरान A-band और I-band दोनों छोटे हो जाते हैं। सुधार: संकुचन के दौरान केवल I-band और H-zone छोटे होते हैं, जबकि A-band की लंबाई पूर्णतः अपरिवर्तित (Constant) रहती है!'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'In an athlete during exercise, the End-Diastolic Volume (EDV) of the left ventricle is 140 mL, the End-Systolic Volume (ESV) is 50 mL, and the duration of one cardiac cycle is 0.6 seconds. Calculate: (a) Stroke Volume (SV), (b) Heart Rate (HR in beats/min), and (c) Cardiac Output (CO in L/min).',
                    pa: 'ਕਸਰਤ ਦੌਰਾਨ ਇੱਕ ਖਿਡਾਰੀ ਦੇ ਖੱਬੇ ਨਿਲय (Ventricle) ਦਾ End-Diastolic Volume (EDV) = 140 mL ਹੈ, End-Systolic Volume (ESV) = 50 mL ਹੈ, ਅਤੇ ਇੱਕ ਦਿਲ ਦੇ ਚੱਕਰ (Cardiac cycle) ਦਾ ਸਮਾਂ 0.6 ਸਕਿੰਟ ਹੈ। ਪਤਾ ਕਰੋ: (a) Stroke Volume (SV), (b) Heart Rate (HR), ਅਤੇ (c) Cardiac Output (CO)।',
                    hi: 'व्यायाम के दौरान एक एथलीट के बाएँ निलय का अंत्यानुशिथिलन आयतन (EDV) = 140 mL है, अंत्यप्रकुंचन आयतन (ESV) = 50 mL है, तथा एक हृदय चक्र की अवधि 0.6 सेकंड है। ज्ञात कीजिए: (a) प्रवाह आयतन (Stroke Volume), (b) हृदय दर (Heart Rate), तथा (c) हृदय निकास (Cardiac Output)।'
                },
                solutionSteps: {
                    en: [
                        '(a) Stroke Volume (SV) = EDV - ESV = 140 mL - 50 mL = 90 mL per beat.',
                        '(b) Heart Rate (HR) = 60 seconds / Duration of 1 cardiac cycle = 60 / 0.6 = 100 beats per minute.',
                        '(c) Cardiac Output (CO) = Stroke Volume × Heart Rate = 90 mL/beat × 100 beats/min = 9000 mL/min = 9.0 Litres/min.'
                    ],
                    pa: [
                        '(a) Stroke Volume (SV) = EDV - ESV = 140 mL - 50 mL = 90 mL ਪ੍ਰਤੀ ਧੜਕਣ।',
                        '(b) Heart Rate (HR) = 60 ਸਕਿੰਟ / 0.6 ਸਕਿੰਟ = 100 ਧੜਕਣਾਂ ਪ੍ਰਤੀ ਮਿੰਟ।',
                        '(c) Cardiac Output (CO) = SV × HR = 90 mL × 100 = 9000 mL/min = 9.0 L/min।'
                    ],
                    hi: [
                        '(a) प्रवाह आयतन (Stroke Volume, SV) = EDV - ESV = 140 mL - 50 mL = 90 mL प्रति धड़कन।',
                        '(b) हृदय दर (Heart Rate, HR) = 60 सेकंड / 0.6 सेकंड = 100 धड़कन प्रति मिनट।',
                        '(c) हृदय निकास (Cardiac Output, CO) = SV × HR = 90 mL × 100 = 9000 mL/min = 9.0 L/min।'
                    ]
                },
                finalAnswer: {
                    en: '(a) SV = 90 mL, (b) HR = 100 beats/min, (c) CO = 9.0 L/min',
                    pa: '(a) SV = 90 mL, (b) HR = 100 ਧੜਕਣਾਂ/ਮਿੰਟ, (c) CO = 9.0 L/min',
                    hi: '(a) SV = 90 mL, (b) HR = 100 धड़कन/मिनट, (c) CO = 9.0 L/min'
                }
            },
            {
                problem: {
                    en: 'In a human kidney nephron, if the Glomerular Hydrostatic Pressure (GHP) is 60 mmHg, the Blood Colloidal Osmotic Pressure (BCOP) is 32 mmHg, and the Capsular Hydrostatic Pressure (CHP) is 18 mmHg, calculate the Net Filtration Pressure (NFP). Also find how many Primary Spermatocytes and Primary Oocytes are required to produce 400 spermatozoa and 400 ova respectively.',
                    pa: 'ਜੇਕਰ ਮਨੁੱਖੀ ਨੈਫਰॉन ਵਿੱਚ GHP = 60 mmHg, BCOP = 32 mmHg ਅਤੇ CHP = 18 mmHg ਹੈ, ਤਾਂ Net Filtration Pressure (NFP) ਪਤਾ ਕਰੋ। ਨਾਲ ਹੀ ਦੱਸੋ ਕਿ 400 ਸ਼ੁਕਰਾਣੂ (Spermatozoa) ਅਤੇ 400 ਅੰਡਾਣੂ (Ova) ਬਣਾਉਣ ਲਈ ਕਿੰਨੇ Primary Spermatocytes ਅਤੇ Primary Oocytes ਚਾਹੀਦੇ ਹਨ?',
                    hi: 'यदि मानव वृक्काणु (Nephron) में GHP = 60 mmHg, BCOP = 32 mmHg तथा CHP = 18 mmHg है, तो शुद्ध निस्यंदन दाब (Net Filtration Pressure, NFP) ज्ञात कीजिए। साथ ही 400 शुक्राणु और 400 अंडाणु बनाने के लिए आवश्यक प्राथमिक शुक्राणुकोशिकाओं व प्राथमिक अंडकोशिकाओं की संख्या बताएँ।'
                },
                solutionSteps: {
                    en: [
                        'Net Filtration Pressure (NFP) = GHP - (BCOP + CHP) = 60 - (32 + 18) = 60 - 50 = 10 mmHg.',
                        'In Spermatogenesis, 1 diploid Primary Spermatocyte undergoes meiosis to produce 4 functional haploid spermatozoa -> For 400 spermatozoa, Primary Spermatocytes needed = 400 / 4 = 100.',
                        'In Oogenesis, 1 diploid Primary Oocyte undergoes unequal cytokinesis in meiosis to produce only 1 functional ovum (plus polar bodies) -> For 400 ova, Primary Oocytes needed = 400 / 1 = 400.'
                    ],
                    pa: [
                        'Net Filtration Pressure (NFP) = GHP - (BCOP + CHP) = 60 - (32 + 18) = 60 - 50 = 10 mmHg।',
                        'ਸ਼ੁਕਰਾਣੂ-ਜਣਨ ਵਿੱਚ 1 Primary Spermatocyte ਤੋਂ 4 ਸ਼ੁਕਰਾਣੂ ਬਣਦੇ ਹਨ -> 400 ਸ਼ੁਕਰਾਣੂਆਂ ਲਈ Primary Spermatocytes = 400 / 4 = 100।',
                        'ਅੰਡ-ਜਣਨ ਵਿੱਚ 1 Primary Oocyte ਤੋਂ ਸਿਰਫ਼ 1 ਅੰਡਾਣੂ (Ovum) ਬਣਦਾ ਹੈ -> 400 ਅੰਡਾਣੂਆਂ ਲਈ Primary Oocytes = 400 / 1 = 400।'
                    ],
                    hi: [
                        'शुद्ध निस्यंदन दाब (NFP) = GHP - (BCOP + CHP) = 60 - (32 + 18) = 60 - 50 = 10 mmHg।',
                        'शुक्राणुजनन में 1 Primary Spermatocyte से 4 शुक्राणु बनते हैं -> 400 शुक्राणुओं हेतु Primary Spermatocytes = 400 / 4 = 100।',
                        'अंडजनन में 1 Primary Oocyte से केवल 1 अंडाणु (Ovum) बनता है -> 400 अंडाणुओं हेतु Primary Oocytes = 400 / 1 = 400।'
                    ]
                },
                finalAnswer: {
                    en: 'NFP = 10 mmHg; 100 Primary Spermatocytes and 400 Primary Oocytes',
                    pa: 'NFP = 10 mmHg; 100 Primary Spermatocytes ਅਤੇ 400 Primary Oocytes',
                    hi: 'NFP = 10 mmHg; 100 Primary Spermatocytes तथा 400 Primary Oocytes'
                }
            }
        ],
        flashcards: [
            {
                id: 'sci-bio-3-fc-1',
                question: {
                    en: '[Level I] Name the specialized excretory/osmoregulatory structures in (a) Platyhelminthes, (b) Annelida, (c) Insects (Arthropoda), and (d) Mollusca.',
                    pa: '[Level I] (a) Platyhelminthes, (b) Annelida, (c) ਕੀਟਾਂ (Arthropoda), ਅਤੇ (d) Mollusca ਦੇ ਵਿਸ਼ੇਸ਼ ਮਲ-ਤਿਆਗ ਅੰਗਾਂ ਦੇ ਨਾਮ ਦੱਸੋ।',
                    hi: '[Level I] (a) Platyhelminthes, (b) Annelida, (c) कीटों (Arthropoda), तथा (d) Mollusca के विशिष्ट उत्सर्जी अंगों के नाम बताइए।'
                },
                answer: {
                    en: '(a) Flame cells (Protonephridia / Solenocytes), (b) Nephridia, (c) Malpighian tubules, and (d) Organ of Bojanus (or Keber\'s organ).',
                    pa: '(a) Flame cells (Protonephridia), (b) Nephridia, (c) Malpighian tubules, ਅਤੇ (d) Organ of Bojanus (Keber\'s organ)।',
                    hi: '(a) ज्वाला कोशिकाएँ / Flame cells (Protonephridia), (b) वृक्कक (Nephridia), (c) मैलपीगी नलिकाएँ (Malpighian tubules), तथा (d) बोजेनस का अंग (Organ of Bojanus)।'
                }
            },
            {
                id: 'sci-bio-3-fc-2',
                question: {
                    en: '[Level H] Which cells of the gastric glands secrete HCl and Castle\'s Intrinsic Factor, and what deficiency disease results if Intrinsic Factor is lacking?',
                    pa: '[Level H] ਮਿਹਦੇ ਦੀਆਂ ਗ੍ਰੰਥੀਆਂ ਦੇ ਕਿਹੜੇ ਸੈੱਲ HCl ਅਤੇ Castle\'s Intrinsic Factor ਬਣਾਉਂਦੇ ਹਨ, ਅਤੇ ਇਸ ਦੀ ਕਮੀ ਨਾਲ ਕਿਹੜਾ ਰੋਗ ਹੁੰਦਾ ਹੈ?',
                    hi: '[Level H] जठर ग्रंथियों की कौन-सी कोशिकाएँ HCl व Castle\'s Intrinsic Factor स्रावित करती हैं, तथा इसकी कमी से कौन-सा रोग होता है?'
                },
                answer: {
                    en: 'Parietal (Oxyntic) cells secrete both HCl and Castle\'s Intrinsic Factor; Intrinsic Factor is essential for Vitamin B12 (cyanocobalamin) absorption in the ileum, and its deficiency causes Pernicious Anaemia.',
                    pa: 'Parietal (Oxyntic) ਸੈੱਲ; ਇਹ ਵਿਟਾਮਿਨ B12 ਦੇ ਸੋਖਣ ਲਈ ਜ਼ਰੂਰੀ ਹੈ ਅਤੇ ਇਸ ਦੀ ਕਮੀ ਨਾਲ Pernicious Anaemia ਹੋ ਜਾਂਦਾ ਹੈ।',
                    hi: 'Parietal (Oxyntic) कोशिकाएँ; यह विटामिन B12 के अवशोषण के लिए अनिवार्य है तथा इसकी कमी से Pernicious Anaemia (घातक रक्ताल्पता) होता है।'
                }
            },
            {
                id: 'sci-bio-3-fc-3',
                question: {
                    en: '[Level H] What causes the Right Shift (Bohr Effect) of the Oxygen-Haemoglobin dissociation curve, and what is its physiological significance?',
                    pa: '[Level H] ਆਕਸੀਜਨ-ਹੀਮੋਗਲੋਬਿਨ ਗ੍ਰਾਫ ਦੇ ਸੱਜੇ ਪਾਸੇ ਖਿਸਕਣ (Bohr Effect) ਦੇ ਕੀ ਕਾਰਨ ਹਨ ਅਤੇ ਇਸ ਦਾ ਕੀ ਮਹੱਤਵ ਹੈ?',
                    hi: '[Level H] ऑक्सीजन-हीमोग्लोबिन वियोजन वक्र के दाईं ओर विस्थापन (Bohr Effect) के क्या कारण हैं और इसका क्या शारीरिक महत्व है?'
                },
                answer: {
                    en: 'High pCO2, High H+ concentration (low pH / acidity), High Temperature, and High 2,3-BPG shift the curve to the right (increasing P50), which promotes unloading/dissociation of O2 from oxyhaemoglobin into metabolically active tissues.',
                    pa: 'ਉੱਚ pCO2, ਉੱਚ H+ (ਘੱਟ pH), ਉੱਚ ਤਾਪਮਾਨ ਅਤੇ ਉੱਚ 2,3-BPG ਕਾਰਨ ਗ੍ਰਾਫ ਸੱਜੇ ਪਾਸੇ ਖਿਸਕਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਟਿਸ਼ੂਆਂ ਵਿੱਚ O2 ਆਸਾਨੀ ਨਾਲ ਮੁਕਤ ਹੁੰਦੀ ਹੈ।',
                    hi: 'उच्च pCO2, उच्च H+ (कम pH), उच्च तापमान एवं उच्च 2,3-BPG से वक्र दाईं ओर खिसकता है, जिससे सक्रिय ऊतकों में ऑक्सीहीमोग्लोबिन से O2 का वियोजन सुगम होता है।'
                }
            },
            {
                id: 'sci-bio-3-fc-4',
                question: {
                    en: '[Level G] In the Sliding Filament Theory of muscle contraction, which regulatory protein subunit binds Ca2+ ions, and what happens to the A-band, I-band, and H-zone?',
                    pa: '[Level G] ਮਾਸਪੇਸ਼ੀ ਸੁੰਗੜਨ ਦੇ Sliding Filament ਸਿਧਾਂਤ ਵਿੱਚ Ca2+ ਆਇਨ ਕਿਸ ਪ੍ਰੋਟੀਨ ਨਾਲ ਜੁੜਦੇ ਹਨ, ਅਤੇ A-band, I-band ਤੇ H-zone ਉੱਤੇ ਕੀ ਅਸਰ ਪੈਂਦਾ ਹੈ?',
                    hi: '[Level G] पेशी संकुचन के सर्पी तंतु सिद्धांत (Sliding Filament Theory) में Ca2+ आयन किस प्रोटीन से जुड़ते हैं, तथा A-band, I-band व H-zone पर क्या प्रभाव पड़ता है?'
                },
                answer: {
                    en: 'Ca2+ ions bind to Troponin-C (TnC), removing the tropomyosin block on actin. During contraction, the I-band and H-zone shorten/disappear, whereas the length of the A-band remains strictly CONSTANT.',
                    pa: 'Ca2+ ਆਇਨ Troponin-C ਨਾਲ ਜੁੜਦੇ ਹਨ। ਸੁੰਗੜਨ ਦੌਰਾਨ I-band ਅਤੇ H-zone ਛੋਟੇ ਹੋ ਜਾਂਦੇ ਹਨ ਪਰ A-band ਦੀ ਲੰਬਾਈ ਸਥਿਰ (Constant) ਰਹਿੰਦੀ ਹੈ।',
                    hi: 'Ca2+ आयन Troponin-C से जुड़ते हैं। संकुचन के दौरान I-band और H-zone छोटे हो जाते हैं किंतु A-band की लंबाई पूर्णतः अपरिवर्तित (Constant) रहती है।'
                }
            },
            {
                id: 'sci-bio-3-fc-5',
                question: {
                    en: '[Level G] Distinguish between Diabetes Insipidus and Diabetes Mellitus in terms of the deficient hormone, endocrine gland, and presence of glucose in urine (glycosuria).',
                    pa: '[Level G] Diabetes Insipidus ਅਤੇ Diabetes Mellitus ਵਿੱਚ ਹਾਰਮੋਨ ਦੀ ਕਮੀ, ਗ੍ਰੰਥੀ ਅਤੇ ਪਿਸ਼ਾਬ ਵਿੱਚ ਗਲੂਕੋਜ਼ ਦੇ ਆਧਾਰ ਉੱਤੇ ਅੰਤਰ ਦੱਸੋ।',
                    hi: '[Level G] Diabetes Insipidus और Diabetes Mellitus में हार्मोन की कमी, अंतःस्रावी ग्रंथि तथा मूत्र में ग्लूकोज़ (Glycosuria) के आधार पर अंतर स्पष्ट करें।'
                },
                answer: {
                    en: 'Diabetes Insipidus is caused by deficiency of ADH (Vasopressin) from the hypothalamus/posterior pituitary and results in excessive dilute urine WITHOUT glucose (no glycosuria); Diabetes Mellitus is caused by deficiency of Insulin from pancreatic beta-cells and features glycosuria (glucose in urine) and ketonuria.',
                    pa: 'Diabetes Insipidus ਪਿਛਲੀ ਪਿਟਿਊਟਰੀ/ਹਾਈਪੋਥੈਲੇਮਸ ਦੇ ADH (Vasopressin) ਹਾਰਮੋਨ ਦੀ ਕਮੀ ਨਾਲ ਹੁੰਦਾ ਹੈ (ਪਿਸ਼ਾਬ ਵਿੱਚ ਗਲੂਕੋਜ਼ ਨਹੀਂ ਆਉਂਦਾ); Diabetes Mellitus ਪੈਨਕ੍ਰੀਆਸ ਦੇ β-ਸੈੱਲਾਂ ਤੋਂ Insulin ਦੀ ਕਮੀ ਨਾਲ ਹੁੰਦਾ ਹੈ (ਪਿਸ਼ਾਬ ਵਿੱਚ ਗਲੂਕੋਜ਼ ਅਤੇ ਕੀਟੋਨ ਆਉਂਦੇ ਹਨ)।',
                    hi: 'Diabetes Insipidus पश्च पीयूष/हाइपोथैलेमस के ADH (Vasopressin) की कमी से होता है (मूत्र में ग्लूकोज़ नहीं होता); Diabetes Mellitus अग्न्याशय की β-कोशिकाओं से Insulin की कमी से होता है (इसमें मूत्र में ग्लूकोज़ व कीटोन काय आते हैं)।'
                }
            }
        ]
    }
];
