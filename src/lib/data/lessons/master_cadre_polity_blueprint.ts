import type { Lesson } from './types';

// ============================================================================
// PUNJAB MASTER CADRE SST — POLITY (B → I → A) BLUEPRINT LESSONS
// Structure: 1) Basic (Class 6–8) -> 2) Intermediate (Class 9–10) -> 3) Advanced (Class 11–12 / Graduation)
// ============================================================================

export const MASTER_CADRE_POLITY_BLUEPRINT_LESSONS: Record<string, Lesson> = {
  // ==========================================================================
  // 1. POLITICAL THEORY, CONCEPTS & IDEOLOGIES (B -> I -> A)
  // ==========================================================================
  'sst-polity-concepts-theories': {
    id: 'sst-polity-concepts-theories',
    topicId: 'sst-polity-concepts-theories',
    subjectId: 'social-science',
    category: 'polity',
    practiceSource: 'authored-only',
    coverageStatus: 'complete',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    title: {
      en: 'Political Theory, Core Concepts & Ideologies (B → I → A)',
      pa: 'ਰਾਜਨੀਤਿਕ ਸਿਧਾਂਤ, ਮੂਲ ਧਾਰਨਾਵਾਂ ਅਤੇ ਵਿਚਾਰਧਾਰਾਵਾਂ (B → I → A)',
      hi: 'राजनीतिक सिद्धांत, मूल अवधारणाएँ एवं विचारधाराएँ (B → I → A)',
    },
    examRelevance: 'Punjab Master Cadre SST (4–6 Qs — Official ERB Headings: Theories & Concepts)',
    estimatedTime: '45 min',
    prerequisites: {
      en: ['Basic civic awareness of democracy, constitution, and rights (Class 6–8 Social Science)'],
      pa: ['ਲੋਕਤੰਤਰ, ਸੰਵਿਧਾਨ ਅਤੇ ਅਧਿਕਾਰਾਂ ਦੀ ਮੁੱਢਲੀ ਸਮਝ (ਜਮਾਤ 6–8 ਸਮਾਜਿਕ ਸਿੱਖਿਆ)'],
      hi: ['लोकतंत्र, संविधान और अधिकारों की बुनियादी समझ (कक्षा 6–8 सामाजिक विज्ञान)'],
    },
    learningObjectives: {
      en: [
        '[B] Distinguish between State (4 essential elements), Nation, and Government, and define Democracy, Secularism, Liberty, Equality, and Justice.',
        '[I] Analyse Rights (Natural, Moral, Legal, Fundamental), Constitutionalism, and A.V. Dicey’s Rule of Law.',
        '[A] Master Monistic (Austin) vs Pluralistic (Laski/MacIver) Sovereignty, Negative vs Positive Liberty (Berlin/Mill), Rawls’ Theory of Justice, and Political Ideologies (Liberalism, Socialism, Marxism, Gandhism, Ambedkarism).',
      ],
      pa: [
        '[B] ਰਾਜ (4 ਜ਼ਰੂਰੀ ਤੱਤ), ਰਾਸ਼ਟਰ ਅਤੇ ਸਰਕਾਰ ਵਿਚਕਾਰ ਅੰਤਰ ਸਮਝਣਾ ਅਤੇ ਲੋਕਤੰਤਰ, ਧਰਮ-ਨਿਰਪੱਖਤਾ, ਸੁਤੰਤਰਤਾ, ਸਮਾਨਤਾ ਤੇ ਨਿਆਂ ਦੀ ਪਰਿਭਾਸ਼ਾ।',
        '[I] ਅਧਿਕਾਰਾਂ ਦੀਆਂ ਕਿਸਮਾਂ, ਸੰਵਿਧਾਨਵਾਦ ਅਤੇ ਏ.ਵੀ. ਡਾਇਸੀ ਦੇ ਕਾਨੂੰਨ ਦੇ ਸ਼ਾਸਨ (Rule of Law) ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ।',
        '[A] ਪ੍ਰਭੂਸੱਤਾ (ਔਸਟਿਨ ਬਨਾਮ ਲਾਸਕੀ), ਸੁਤੰਤਰਤਾ (ਬਰਲਿਨ/ਮਿੱਲ), ਜੌਨ ਰੌਲਜ਼ ਦਾ ਨਿਆਂ ਸਿਧਾਂਤ ਅਤੇ ਪ੍ਰਮੁੱਖ ਵਿਚਾਰਧਾਰਾਵਾਂ (ਉਦਾਰਵਾਦ, ਸਮਾਜਵਾਦ, ਮਾਰਕਸਵਾਦ, ਗਾਂਧੀਵਾਦ, ਅੰਬੇਡਕਰਵਾਦ) ਵਿੱਚ ਮੁਹਾਰਤ।',
      ],
      hi: [
        '[B] राज्य (4 आवश्यक तत्व), राष्ट्र और सरकार में अंतर तथा लोकतंत्र, धर्मनिरपेक्षता, स्वतंत्रता, समानता व न्याय की परिभाषा।',
        '[I] अधिकारों के प्रकार, संविधानवाद और ए.वी. डायसी के विधि के शासन (Rule of Law) का विश्लेषण।',
        '[A] संप्रभुता (ऑस्टिन बनाम लास्की), स्वतंत्रता (बर्लिन/मिल), जॉन रॉल्स का न्याय सिद्धांत और प्रमुख विचारधाराओं (उदारवाद, समाजवाद, मार्क्सवाद, गांधीवाद, अंबेडकरवाद) में दक्षता।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 Official ERB Syllabus Mapping & Progression</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers official Punjab Master Cadre SST Polity headings <strong>"Theories"</strong> and <strong>"Concepts"</strong>. Structured in <strong>B (Basic: Class 6–8) → I (Intermediate: Class 9–10) → A (Advanced: Class 11–12 / Graduation)</strong> order.
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · Basic (Class 6–8 Foundation)</span>
              <span class="text-xs text-slate-400">NCERT/PSEB Civics Classes 6–8</span>
            </div>
            <h3 class="text-xl font-bold text-white">1. State, Nation, Government & Core Democratic Values</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              In everyday speech people use <em>State</em>, <em>Government</em>, and <em>Nation</em> interchangeably, but in Political Science they are distinct concepts:
            </p>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>The State (Garner’s Classic Definition):</strong> A permanent political association possessing <strong>four essential elements</strong>: (1) <strong>Population</strong>, (2) <strong>Fixed Territory</strong>, (3) <strong>Government</strong> (its agency/machinery), and (4) <strong>Sovereignty</strong> (supreme internal and external authority). Before 15 August 1947, India had population, territory, and government, but lacked sovereignty—hence colonial India was not a sovereign State.</li>
              <li><strong>State vs Government:</strong> The State is permanent and abstract; the Government is temporary (changes after elections) and is the concrete organ through which the State exercises its will.</li>
              <li><strong>State vs Nation:</strong> A <em>State</em> is a legal-political entity bound by sovereignty; a <em>Nation</em> is a socio-cultural and psychological community bound by shared history, sentiment, and identity (Benedict Anderson’s <em>"Imagined Communities"</em>).</li>
              <li><strong>Democracy:</strong> Abraham Lincoln defined it as <em>"Government of the people, by the people, for the people"</em> (Gettysburg Address, 1863). <strong>Direct Democracy</strong> (Referendum, Initiative, Recall, Plebiscite — practiced in Swiss cantons and Gram Sabhas) vs <strong>Representative Democracy</strong> (Parliamentary or Presidential).</li>
              <li><strong>Indian Secularism vs Western Secularism:</strong> Western secularism (<em>Wall of Separation</em>) demands strict non-interference between Church and State. Indian secularism (<em>Sarva Dharma Sambhava</em> & Principled Distance) gives equal respect to all religions while permitting State-led social reform (e.g., Article 17 abolishing untouchability, Article 25(2) opening Hindu public temples to all sections).</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · Intermediate (Class 9–10 PSEB/NCERT)</span>
              <span class="text-xs text-slate-400">NCERT Class 9–11 Political Theory</span>
            </div>
            <h3 class="text-xl font-bold text-white">2. Sovereignty, Liberty, Equality, Justice & Rights</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-700 text-amber-300">
                    <th class="p-2">Core Concept</th>
                    <th class="p-2">Etymology & Key Thinkers</th>
                    <th class="p-2">Core Exam Distinctions</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300 divide-y divide-slate-800">
                  <tr>
                    <td class="p-2 font-semibold text-white">Sovereignty</td>
                    <td class="p-2">Latin <em>Superanus</em> (Supreme). Coined by <strong>Jean Bodin</strong> (<em>Six Books of the Commonwealth</em>, 1576).</td>
                    <td class="p-2"><strong>Internal</strong> (supreme over citizens/associations) vs <strong>External</strong> (free from foreign control); <strong>De Jure</strong> (legal) vs <strong>De Facto</strong> (actual); <strong>Titular</strong> (King/President) vs <strong>Popular</strong> (Rousseau’s <em>General Will</em>).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Liberty</td>
                    <td class="p-2">Latin <em>Liber</em> (Free). <strong>J.S. Mill</strong> (<em>On Liberty</em>, 1859); <strong>Isaiah Berlin</strong> (<em>Two Concepts of Liberty</em>, 1958).</td>
                    <td class="p-2"><strong>Negative Liberty</strong> (absence of external restraint; minimum state) vs <strong>Positive Liberty</strong> (capacity for self-realisation & enabling socio-economic conditions). Mill’s <strong>Harm Principle</strong>: State can restrict self-regarding vs other-regarding actions only to prevent harm to others.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Equality</td>
                    <td class="p-2"><strong>A.V. Dicey</strong> (Rule of Law), <strong>Harold Laski</strong> (<em>Grammar of Politics</em>).</td>
                    <td class="p-2">Laski: (1) Absence of special privileges, (2) Adequate opportunities for all. Formal/Procedural Equality (Art 14) vs Substantive/Proportionate Equality (Protective Discrimination under Arts 15(4), 16(4)).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Justice</td>
                    <td class="p-2">Plato (<em>The Republic</em>), Aristotle (Distributive & Corrective), <strong>John Rawls</strong> (<em>A Theory of Justice</em>, 1971).</td>
                    <td class="p-2">Rawls’ <strong>Original Position</strong> behind a <strong>Veil of Ignorance</strong> yields two principles: (1) Equal Basic Liberties, (2) <strong>Difference Principle</strong> (inequalities permissible only if they benefit the <em>least advantaged</em>).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Rights</td>
                    <td class="p-2"><strong>John Locke</strong> (Natural Rights: Life, Liberty, Property); <strong>T.H. Green</strong> (Moral consciousness); <strong>Laski</strong>.</td>
                    <td class="p-2">Laski: <em>"Every state is known by the rights that it maintains."</em> Hohfeld’s jural correlatives: Right ↔ Duty.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · Advanced (Class 11–12 & Graduation)</span>
              <span class="text-xs text-slate-400">Graduation Political Science & Thinkers</span>
            </div>
            <h3 class="text-xl font-bold text-white">3. Monistic vs Pluralistic Sovereignty & Major Political Ideologies</h3>
            <ul class="text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Austin’s Monistic / Legal Theory of Sovereignty (<em>Lectures on Jurisprudence</em>, 1832):</strong> <em>"If a determinate human superior, not in the habit of obedience to a like superior, receives habitual obedience from the bulk of a given society, that determinate superior is sovereign, and his command is law."</em> Sovereignty is absolute, indivisible, inalienable, and illimitable.</li>
              <li><strong>Pluralistic Critique of Sovereignty (Harold Laski, R.M. MacIver, Otto von Gierke, F.W. Maitland, Léon Duguit):</strong> Society is federal; the State is only one association among many (churches, trade unions, universities) and cannot claim absolute moral monopoly.</li>
              <li><strong>Social Contract Trio (Hobbes, Locke, Rousseau):</strong>
                <br/>• <strong>Thomas Hobbes (<em>Leviathan</em>, 1651):</strong> State of nature was <em>"solitary, poor, nasty, brutish, and short"</em>; single contract creating an absolute Sovereign (no right to revolt).
                <br/>• <strong>John Locke (<em>Two Treatises of Government</em>, 1689):</strong> Father of Classical Liberalism; state of nature had peace/reason but lacked an impartial judge; limited government as a <em>fiduciary trust</em> protecting Life, Liberty, Property; right to revolution.
                <br/>• <strong>Jean-Jacques Rousseau (<em>The Social Contract</em>, 1762):</strong> <em>"Man is born free, and everywhere he is in chains"</em>; Popular Sovereignty vested in the <strong>General Will</strong> (<em>Volonté Générale</em> = Real Will for common good, vs <em>Actual Will</em>).</li>
              <li><strong>Marxism (Karl Marx & Friedrich Engels — <em>Communist Manifesto</em> 1848, <em>Das Kapital</em> 1867):</strong> Dialectical Materialism (adapted from Hegel), Historical Materialism (Economic Base determines Legal-Political Superstructure), Theory of Surplus Value, Class Struggle (Bourgeoisie vs Proletariat), Dictatorship of the Proletariat, and final <em>Withering Away of the State</em>. <strong>Antonio Gramsci</strong> added <strong>Cultural Hegemony</strong> (civil society manufactures consent).</li>
              <li><strong>Gandhism (Mahatma Gandhi — <em>Hind Swaraj</em>, 1909):</strong> <em>Swaraj</em> as moral self-rule, <em>Satyagraha</em> (Truth + Ahimsa), Purity of Means and Ends, <em>Sarvodaya</em> (welfare of all — inspired by John Ruskin’s <em>Unto This Last</em>), <strong>Theory of Trusteeship</strong> (capitalists as moral trustees of wealth), and stateless democracy of self-sufficient village republics (<strong>Oceanic Circles</strong>).</li>
              <li><strong>Dr. B.R. Ambedkar’s Political Thought (<em>Annihilation of Caste</em> 1936, Constituent Assembly Speech 25 Nov 1949):</strong> Critique of <strong>Graded Inequality</strong> in the caste system; insistence on <strong>Constitutional Morality</strong> (Grote) over hero-worship (<em>Bhakti</em> in politics leads to dictatorship); and warning that political democracy cannot survive without <strong>Social and Economic Democracy</strong> based on the trinity of <strong>Liberty, Equality, and Fraternity</strong>.</li>
            </ul>
          </div>

          <div class="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-sm mb-2">🧠 5 Exam-Style Points to Memorise & Sources to Verify</h4>
            <ol class="text-xs text-slate-300 space-y-1 list-decimal pl-4">
              <li><strong>4 Elements of State:</strong> Population, Territory, Government, Sovereignty (Sovereignty distinguishes the State from all other associations).</li>
              <li><strong>Book–Author Match:</strong> Bodin → <em>Six Books of the Commonwealth</em>; Hobbes → <em>Leviathan</em>; Mill → <em>On Liberty</em>; Laski → <em>A Grammar of Politics</em>; Rawls → <em>A Theory of Justice</em>; Berlin → <em>Two Concepts of Liberty</em>.</li>
              <li><strong>Austin vs Laski:</strong> Austin = Monistic/Legal Sovereignty (command of determinate superior); Laski & MacIver = Pluralistic Sovereignty.</li>
              <li><strong>Rawls’ Difference Principle:</strong> Socio-economic inequalities are just only if they work to the greatest benefit of the <em>least advantaged</em> members under fair equality of opportunity.</li>
              <li><strong>Sources to Verify:</strong> NCERT Class 11 <em>Political Theory</em> (Chapters 1–10: Freedom, Equality, Social Justice, Rights, Citizenship, Nationalism, Secularism) & O.P. Gauba <em>An Introduction to Political Theory</em>.</li>
            </ol>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 ਸਰਕਾਰੀ ERB ਸਿਲੇਬਸ ਮੈਪਿੰਗ (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ ਅਧਿਕਾਰਤ ਸਿਰਲੇਖ <strong>"Theories"</strong> ਅਤੇ <strong>"Concepts"</strong> ਨੂੰ <strong>B (ਮੁੱਢਲਾ: ਜਮਾਤ 6–8) → I (ਮੱਧਮ: ਜਮਾਤ 9–10) → A (ਉੱਚ ਪੱਧਰ: ਜਮਾਤ 11–12 / ਗ੍ਰੈਜੂਏਸ਼ਨ)</strong> ਕ੍ਰਮ ਵਿੱਚ ਸਮਝਾਇਆ ਗਿਆ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · ਮੁੱਢਲਾ ਪੱਧਰ (ਜਮਾਤ 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. ਰਾਜ (State), ਰਾਸ਼ਟਰ, ਸਰਕਾਰ ਅਤੇ ਲੋਕਤੰਤਰੀ ਕਦਰਾਂ-ਕੀਮਤਾਂ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਰਾਜ ਦੇ 4 ਜ਼ਰੂਰੀ ਤੱਤ (Garner):</strong> (1) ਆਬਾਦੀ (Population), (2) ਨਿਸ਼ਚਿਤ ਭੂ-ਭਾਗ (Territory), (3) ਸਰਕਾਰ (Government), ਅਤੇ (4) <strong>ਪ੍ਰਭੂਸੱਤਾ (Sovereignty)</strong>। 15 ਅਗਸਤ 1947 ਤੋਂ ਪਹਿਲਾਂ ਭਾਰਤ ਕੋਲ ਪ੍ਰਭੂਸੱਤਾ ਨਹੀਂ ਸੀ, ਇਸ ਲਈ ਬਸਤੀਵਾਦੀ ਭਾਰਤ ਇੱਕ ਪ੍ਰਭੂਸੱਤਾ ਸੰਪੰਨ 'ਰਾਜ' ਨਹੀਂ ਸੀ।</li>
              <li><strong>ਰਾਜ ਬਨਾਮ ਸਰਕਾਰ:</strong> ਰਾਜ ਸਥਾਈ ਅਤੇ ਅਮੂਰਤ ਹੈ; ਸਰਕਾਰ ਅਸਥਾਈ ਹੈ (ਚੋਣਾਂ ਨਾਲ ਬਦਲਦੀ ਹੈ) ਅਤੇ ਰਾਜ ਦੀ ਇੱਛਾ ਲਾਗੂ ਕਰਨ ਵਾਲਾ ਅੰਗ ਹੈ।</li>
              <li><strong>ਰਾਜ ਬਨਾਮ ਰਾਸ਼ਟਰ:</strong> ਰਾਜ ਇੱਕ ਕਾਨੂੰਨੀ-ਰਾਜਨੀਤਿਕ ਇਕਾਈ ਹੈ, ਜਦੋਂ ਕਿ ਰਾਸ਼ਟਰ ਸਾਂਝੇ ਇਤਿਹਾਸ ਤੇ ਭਾਵਨਾਵਾਂ ਨਾਲ ਜੁੜਿਆ ਸੱਭਿਆਚਾਰਕ ਭਾਈਚਾਰਾ ਹੈ (Benedict Anderson — <em>Imagined Communities</em>)।</li>
              <li><strong>ਲੋਕਤੰਤਰ ਤੇ ਧਰਮ-ਨਿਰਪੱਖਤਾ:</strong> ਅਬ੍ਰਾਹਮ ਲਿੰਕਨ (1863): <em>"ਲੋਕਾਂ ਦੀ, ਲੋਕਾਂ ਦੁਆਰਾ ਅਤੇ ਲੋਕਾਂ ਲਈ ਸਰਕਾਰ।"</em> ਭਾਰਤੀ ਧਰਮ-ਨਿਰਪੱਖਤਾ ਪੱਛਮੀ ਮਾਡਲ (ਚਰਚ-ਰਾਜ ਦਾ ਸਖ਼ਤ ਨਿਖੇੜਾ) ਤੋਂ ਵੱਖਰੀ ਹੈ—ਇਹ ਸਾਰੇ ਧਰਮਾਂ ਦੇ ਬਰਾਬਰ ਸਤਿਕਾਰ (<em>ਸਰਵ ਧਰਮ ਸਮਭਾਵ</em>) ਅਤੇ ਸਮਾਜਿਕ ਸੁਧਾਰ (ਅਨੁਛੇਦ 17, 25) ਲਈ ਸਿਧਾਂਤਕ ਦੂਰੀ (Principled Distance) ਉੱਤੇ ਅਧਾਰਤ ਹੈ।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · ਮੱਧਮ ਪੱਧਰ (ਜਮਾਤ 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. ਪ੍ਰਭੂਸੱਤਾ, ਸੁਤੰਤਰਤਾ, ਸਮਾਨਤਾ, ਨਿਆਂ ਅਤੇ ਅਧਿਕਾਰ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਪ੍ਰਭੂਸੱਤਾ (Sovereignty):</strong> ਲਾਤੀਨੀ ਸ਼ਬਦ <em>Superanus</em> (ਸਰਵਉੱਚ) ਤੋਂ ਬਣਿਆ; ਆਧੁਨਿਕ ਜਨਕ <strong>ਜੀਨ ਬੋਦਾਂ (Jean Bodin, 1576)</strong>। ਅੰਦਰੂਨੀ ਬਨਾਮ ਬਾਹਰੀ ਪ੍ਰਭੂਸੱਤਾ; ਕਾਨੂੰਨੀ (De Jure) ਬਨਾਮ ਅਸਲੀ (De Facto); ਅਤੇ ਹਰਮਨਪਿਆਰੀ ਪ੍ਰਭੂਸੱਤਾ (Rousseau — <em>General Will</em>)।</li>
              <li><strong>ਸੁਤੰਤਰਤਾ (Liberty):</strong> ਲਾਤੀਨੀ <em>Liber</em> ਤੋਂ। <strong>ਜੇ.ਐਸ. ਮਿੱਲ</strong> (<em>On Liberty</em>, 1859 — Harm Principle) ਅਤੇ <strong>ਆਈਜ਼ਿਆ ਬਰਲਿਨ</strong> (<em>Two Concepts of Liberty</em>, 1958 — <strong>ਨਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ</strong> ਭਾਵ ਪਾਬੰਦੀਆਂ ਦੀ ਅਣਹੋਂਦ ਬਨਾਮ <strong>ਸਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ</strong> ਭਾਵ ਸਵੈ-ਵਿਕਾਸ ਦੀ ਸਮਰੱਥਾ)।</li>
              <li><strong>ਸਮਾਨਤਾ ਤੇ ਕਾਨੂੰਨ ਦਾ ਸ਼ਾਸਨ:</strong> <strong>ਏ.ਵੀ. ਡਾਇਸੀ (A.V. Dicey)</strong> ਨੇ 'Rule of Law' ਦਿੱਤਾ (ਅਨੁਛੇਦ 14)। <strong>ਹੈਰੋਲਡ ਲਾਸਕੀ</strong> (<em>Grammar of Politics</em>): ਵਿਸ਼ੇਸ਼ ਅਧਿਕਾਰਾਂ ਦੀ ਸਮਾਪਤੀ ਅਤੇ ਸਭ ਲਈ ਢੁਕਵੇਂ ਮੌਕੇ।</li>
              <li><strong>ਜੌਨ ਰੌਲਜ਼ ਦਾ ਨਿਆਂ ਸਿਧਾਂਤ (<em>A Theory of Justice</em>, 1971):</strong> <strong>ਅਗਿਆਨਤਾ ਦੇ ਪਰਦੇ (Veil of Ignorance)</strong> ਹੇਠ ਨਿਆਂ ਦੇ 2 ਨਿਯਮ: (1) ਬਰਾਬਰ ਮੁੱਢਲੀਆਂ ਸੁਤੰਤਰਤਾਵਾਂ, (2) <strong>ਅੰਤਰ ਸਿਧਾਂਤ (Difference Principle)</strong> — ਅਸਮਾਨਤਾਵਾਂ ਤਾਂ ਹੀ ਜਾਇਜ਼ ਹਨ ਜੇਕਰ ਉਹ ਸਮਾਜ ਦੇ <em>ਸਭ ਤੋਂ ਪੱਛੜੇ ਵਰਗ (least advantaged)</em> ਦੇ ਵੱਧ ਤੋਂ ਵੱਧ ਹਿੱਤ ਵਿੱਚ ਹੋਣ।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · ਉੱਚ ਪੱਧਰ (ਜਮਾਤ 11–12 / ਗ੍ਰੈਜੂਏਸ਼ਨ)</span>
            <h3 class="text-xl font-bold text-white">3. ਔਸਟਿਨ ਬਨਾਮ ਬਹੁਲਵਾਦ ਅਤੇ ਪ੍ਰਮੁੱਖ ਰਾਜਨੀਤਿਕ ਵਿਚਾਰਧਾਰਾਵਾਂ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਜੌਨ ਔਸਟਿਨ ਦਾ ਇੱਕਵਾਦੀ/ਕਾਨੂੰਨੀ ਪ੍ਰਭੂਸੱਤਾ ਸਿਧਾਂਤ (1832):</strong> ਕਾਨੂੰਨ ਇੱਕ 'ਨਿਸ਼ਚਿਤ ਮਨੁੱਖੀ ਸ਼੍ਰੇਸ਼ਠ' (Determinate Human Superior) ਦਾ ਹੁਕਮ ਹੈ; ਪ੍ਰਭੂਸੱਤਾ ਅਵੰਡ ਅਤੇ ਅਸੀਮਤ ਹੈ। <strong>ਬਹੁਲਵਾਦੀ ਆਲੋਚਕ (Laski, MacIver, Gierke, Maitland):</strong> ਸਮਾਜ ਸੰਘੀ (federal) ਹੈ ਅਤੇ ਰਾਜ ਹੋਰ ਸੰਸਥਾਵਾਂ ਵਾਂਗ ਸਿਰਫ਼ ਇੱਕ ਸੰਘ ਹੈ।</li>
              <li><strong>ਸਮਾਜਿਕ ਸਮਝੌਤਾ ਸਿਧਾਂਤ (Social Contract):</strong> <strong>ਹੌਬਸ</strong> (<em>Leviathan</em>, 1651 — ਨਿਰੰਕੁਸ਼ ਰਾਜਤੰਤਰ), <strong>ਜੌਨ ਲੌਕ</strong> (<em>Two Treatises of Government</em>, 1689 — ਉਦਾਰਵਾਦ ਦਾ ਪਿਤਾਮਾ; ਜੀਵਨ, ਸੁਤੰਤਰਤਾ ਤੇ ਸੰਪਤੀ ਦੇ ਕੁਦਰਤੀ ਅਧਿਕਾਰ), <strong>ਰੂਸੋ</strong> (<em>The Social Contract</em>, 1762 — ਸਧਾਰਨ ਇੱਛਾ / General Will)।</li>
              <li><strong>ਮਾਰਕਸਵਾਦ (Karl Marx & Engels):</strong> ਦਵੰਦਵਾਦੀ ਤੇ ਇਤਿਹਾਸਕ ਪਦਾਰਥਵਾਦ (ਆਰਥਿਕ ਅਧਾਰ/Base ਰਾਜਨੀਤਿਕ ਉੱਚ-ਢਾਂਚੇ/Superstructure ਨੂੰ ਤੈਅ ਕਰਦਾ ਹੈ), ਵਾਧੂ ਮੁੱਲ ਦਾ ਸਿਧਾਂਤ (Surplus Value), ਵਰਗ ਸੰਘਰਸ਼, ਅਤੇ ਅੰਤ ਵਿੱਚ <em>ਰਾਜ ਦਾ ਲੋਪ ਹੋ ਜਾਣਾ</em>। <strong>ਐਂਟੋਨੀਓ ਗ੍ਰਾਮਸ਼ੀ</strong> ਨੇ <strong>ਸੱਭਿਆਚਾਰਕ ਪ੍ਰਭੂਤਵ (Hegemony)</strong> ਦਾ ਸਿਧਾਂਤ ਦਿੱਤਾ।</li>
              <li><strong>ਗਾਂਧੀਵਾਦ ਤੇ ਅੰਬੇਡਕਰਵਾਦ:</strong> ਮਹਾਤਮਾ ਗਾਂਧੀ (<em>ਹਿੰਦ ਸਵਰਾਜ</em>, 1909): ਸਵਰਾਜ, ਸੱਤਿਆਗ੍ਰਹਿ, ਸਰਵੋਦਿਆ (ਰਸਕਿਨ ਦੀ <em>Unto This Last</em> ਤੋਂ ਪ੍ਰੇਰਿਤ) ਅਤੇ <strong>ਟਰੱਸਟੀਸ਼ਿਪ (Trusteeship)</strong> ਦਾ ਸਿਧਾਂਤ। <strong>ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ</strong> (<em>Annihilation of Caste</em>, 1936): ਜਾਤੀ ਪ੍ਰਥਾ ਨੂੰ 'ਦਰਜਾਬੰਦ ਅਸਮਾਨਤਾ' (Graded Inequality) ਕਿਹਾ ਅਤੇ ਚੇਤਾਵਨੀ ਦਿੱਤੀ ਕਿ ਸਮਾਜਿਕ ਤੇ ਆਰਥਿਕ ਲੋਕਤੰਤਰ ਤੋਂ ਬਿਨਾਂ ਰਾਜਨੀਤਿਕ ਲੋਕਤੰਤਰ ਅਧੂਰਾ ਹੈ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 आधिकारिक ERB पाठ्यक्रम मानचित्रण (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर SST के आधिकारिक शीर्षक <strong>"Theories"</strong> और <strong>"Concepts"</strong> को <strong>B (आधारभूत: कक्षा 6–8) → I (मध्यम: कक्षा 9–10) → A (उन्नत: कक्षा 11–12 / स्नातक)</strong> क्रम में प्रस्तुत किया गया है।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · आधारभूत स्तर (कक्षा 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. राज्य (State), राष्ट्र, सरकार एवं मूल लोकतांत्रिक मूल्य</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>राज्य के 4 अनिवार्य तत्व (गार्नर):</strong> (1) जनसंख्या, (2) निश्चित भू-भाग, (3) सरकार, और (4) <strong>संप्रभुता (Sovereignty)</strong>। 15 अगस्त 1947 से पूर्व भारत के पास संप्रभुता नहीं थी, इसलिए औपनिवेशिक भारत एक संप्रभु 'राज्य' नहीं था।</li>
              <li><strong>राज्य बनाम सरकार:</strong> राज्य स्थायी एवं अमूर्त है; सरकार अस्थायी है और राज्य की इच्छा को लागू करने वाला मूर्त अभिकरण है।</li>
              <li><strong>राज्य बनाम राष्ट्र:</strong> राज्य एक कानूनी-राजनीतिक इकाई है, जबकि राष्ट्र साझा इतिहास व भावनात्मक एकता से बंधा सांस्कृतिक समुदाय है (बेनेडिक्ट एंडरसन — <em>Imagined Communities</em>)।</li>
              <li><strong>लोकतंत्र एवं भारतीय धर्मनिरपेक्षता:</strong> अब्राहम लिंकन (1863): <em>"जनता का, जनता के द्वारा, जनता के लिए शासन।"</em> भारतीय धर्मनिरपेक्षता पश्चिमी मॉडल (चर्च व राज्य का कठोर पृथक्करण) से भिन्न है—यह <em>सर्व धर्म समभाव</em> तथा सामाजिक सुधार (अनुच्छेद 17, 25) हेतु 'सैद्धांतिक दूरी' (Principled Distance) पर आधारित है।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · मध्यम स्तर (कक्षा 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. संप्रभुता, स्वतंत्रता, समानता, न्याय एवं अधिकार</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>संप्रभुता (Sovereignty):</strong> लैटिन शब्द <em>Superanus</em> (सर्वोच्च) से व्युत्पन्न; आधुनिक जनक <strong>जीन बोदां (Jean Bodin, 1576)</strong>। आंतरिक बनाम बाह्य संप्रभुता; विधिक (De Jure) बनाम वास्तविक (De Facto); तथा लोकप्रिय संप्रभुता (रूसो — <em>सामान्य इच्छा / General Will</em>)।</li>
              <li><strong>स्वतंत्रता (Liberty):</strong> <strong>जे.एस. मिल</strong> (<em>On Liberty</em>, 1859 — हानि सिद्धांत / Harm Principle) और <strong>आइज़ाया बर्लिन</strong> (<em>Two Concepts of Liberty</em>, 1958 — <strong>नकारात्मक स्वतंत्रता</strong> अर्थात बाहरी हस्तक्षेप का अभाव बनाम <strong>सकारात्मक स्वतंत्रता</strong> अर्थात आत्म-विकास की क्षमता)।</li>
              <li><strong>समानता एवं विधि का शासन:</strong> <strong>ए.वी. डायसी (A.V. Dicey)</strong> ने 'Rule of Law' दिया (अनुच्छेद 14)। <strong>हैरोल्ड लास्की</strong> (<em>Grammar of Politics</em>): विशेषाधिकारों का अंत और सभी के लिए पर्याप्त अवसर।</li>
              <li><strong>जॉन रॉल्स का न्याय सिद्धांत (<em>A Theory of Justice</em>, 1971):</strong> <strong>अज्ञानता के पर्दे (Veil of Ignorance)</strong> के पीछे न्याय के 2 सिद्धांत: (1) समान मूलभूत स्वतंत्रताएँ, (2) <strong>अंतर सिद्धांत (Difference Principle)</strong> — सामाजिक-आर्थिक असमानताएँ तभी न्यायसंगत हैं जब वे समाज के <em>सबसे वंचित वर्ग (least advantaged)</em> के अधिकतम हित में हों।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · उन्नत स्तर (कक्षा 11–12 / स्नातक)</span>
            <h3 class="text-xl font-bold text-white">3. ऑस्टिन बनाम बहुलवाद एवं प्रमुख राजनीतिक विचारधाराएँ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>जॉन ऑस्टिन का एकलवादी/विधिक संप्रभुता सिद्धांत (1832):</strong> कानून एक 'निश्चित मानव श्रेष्ठ' (Determinate Human Superior) का आदेश है; संप्रभुता अखंड और असीमित है। <strong>बहुलवादी आलोचक (लास्की, मैकाइवर, गियर्क, मैटलैंड):</strong> समाज संघात्मक है और राज्य अन्य समुदायों की भाँति केवल एक संघ है।</li>
              <li><strong>सामाजिक समझौता त्रयी:</strong> <strong>थॉमस हॉब्स</strong> (<em>Leviathan</em>, 1651 — निरंकुश संप्रभु), <strong>जॉन लॉक</strong> (<em>Two Treatises of Government</em>, 1689 — उदारवाद के जनक; जीवन, स्वतंत्रता व संपत्ति के प्राकृतिक अधिकार), <strong>रूसो</strong> (<em>The Social Contract</em>, 1762 — सामान्य इच्छा / General Will)।</li>
              <li><strong>मार्क्सवाद (कार्ल मार्क्स व एंगेल्स):</strong> द्वंद्वात्मक एवं ऐतिहासिक भौतिकवाद (आर्थिक आधार/Base राजनीतिक अधिरचना/Superstructure को निर्धारित करता है), अतिरिक्त मूल्य का सिद्धांत (Surplus Value), वर्ग संघर्ष, सर्वहारा की तानाशाही और अंततः <em>राज्य का विलुप्त हो जाना</em>। <strong>एंटोनियो ग्राम्शी</strong> ने <strong>सांस्कृतिक वर्चस्व (Hegemony)</strong> का सिद्धांत दिया।</li>
              <li><strong>गांधीवाद एवं अंबेडकरवाद:</strong> महात्मा गांधी (<em>हिंद स्वराज</em>, 1909): स्वराज, सत्याग्रह, सर्वोदय (रस्किन की <em>Unto This Last</em> से प्रेरित) एवं <strong>न्यासधारिता (Trusteeship)</strong> का सिद्धांत। <strong>डॉ. बी.आर. अंबेडकर</strong> (<em>Annihilation of Caste</em>, 1936): जाति व्यवस्था को 'क्रमिक असमानता' (Graded Inequality) कहा और चेताया कि सामाजिक व आर्थिक लोकतंत्र के बिना राजनीतिक लोकतंत्र टिक नहीं सकता।</li>
            </ul>
          </div>
        </div>
      `,
    },
    summary: {
      en: 'Covers Political Theory from Basic to Graduation level: the 4 elements of the State (Population, Territory, Government, Sovereignty), Monistic (Austin) vs Pluralistic (Laski/MacIver) Sovereignty, Negative vs Positive Liberty (Berlin/Mill), Rawls’ Veil of Ignorance and Difference Principle, Social Contract thinkers (Hobbes, Locke, Rousseau), and major ideologies (Liberalism, Marxism, Gandhism, Ambedkarism).',
      pa: 'ਰਾਜ ਦੇ 4 ਜ਼ਰੂਰੀ ਤੱਤ (ਆਬਾਦੀ, ਭੂ-ਭਾਗ, ਸਰਕਾਰ, ਪ੍ਰਭੂਸੱਤਾ), ਔਸਟਿਨ ਦਾ ਇੱਕਵਾਦੀ ਬਨਾਮ ਲਾਸਕੀ/ਮੈਕਾਈਵਰ ਦਾ ਬਹੁਲਵਾਦੀ ਪ੍ਰਭੂਸੱਤਾ ਸਿਧਾਂਤ, ਨਕਾਰਾਤਮਕ ਤੇ ਸਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ (ਬਰਲਿਨ/ਮਿੱਲ), ਜੌਨ ਰੌਲਜ਼ ਦਾ ਅਗਿਆਨਤਾ ਦਾ ਪਰਦਾ ਤੇ ਅੰਤਰ ਸਿਧਾਂਤ, ਅਤੇ ਪ੍ਰਮੁੱਖ ਵਿਚਾਰਧਾਰਾਵਾਂ (ਉਦਾਰਵਾਦ, ਮਾਰਕਸਵਾਦ, ਗਾਂਧੀਵਾਦ, ਅੰਬੇਡਕਰਵਾਦ) ਦਾ ਸੰਪੂਰਨ ਸਾਰ।',
      hi: 'राज्य के 4 अनिवार्य तत्व (जनसंख्या, भू-भाग, सरकार, संप्रभुता), ऑस्टिन का एकलवादी बनाम लास्की/मैकाइवर का बहुलवादी संप्रभुता सिद्धांत, नकारात्मक व सकारात्मक स्वतंत्रता (बर्लिन/मिल), जॉन रॉल्स का अज्ञानता का पर्दा व अंतर सिद्धांत, तथा प्रमुख विचारधाराओं (उदारवाद, मार्क्सवाद, गांधीवाद, अंबेडकरवाद) का संपूर्ण सार।',
    },
    keyNotes: {
      en: [
        '[B] Four essential elements of the State: Population, Fixed Territory, Government, and Sovereignty.',
        '[B] Sovereignty is the supreme internal and external power that distinguishes the State from all other associations.',
        '[B] Direct Democracy tools: Referendum, Initiative, Recall, and Plebiscite (practiced in Switzerland).',
        '[I] Jean Bodin coined the modern concept of Sovereignty in Six Books of the Commonwealth (1576).',
        '[I] John Austin (Lectures on Jurisprudence, 1832) propounded the Monistic/Legal Theory of Sovereignty ("Law is the command of the sovereign").',
        '[I] Harold Laski and R.M. MacIver championed Pluralistic Sovereignty ("Because society is federal, authority must be federal").',
        '[I] Isaiah Berlin’s Two Concepts of Liberty (1958) distinguished Negative Liberty (freedom from interference) from Positive Liberty (self-mastery).',
        '[A] John Rawls’ A Theory of Justice (1971) uses the Original Position behind a Veil of Ignorance to derive the Difference Principle.',
        '[A] Social Contract thinkers: Hobbes (Leviathan, 1651), Locke (Two Treatises, 1689 — Life, Liberty, Property), Rousseau (Social Contract, 1762 — General Will).',
        '[A] Gandhiji’s Sarvodaya was inspired by John Ruskin’s Unto This Last; Dr. Ambedkar called caste "Graded Inequality" in Annihilation of Caste (1936).',
      ],
      pa: [
        '[B] ਰਾਜ ਦੇ 4 ਜ਼ਰੂਰੀ ਤੱਤ: ਆਬਾਦੀ, ਨਿਸ਼ਚਿਤ ਭੂ-ਭਾਗ, ਸਰਕਾਰ ਅਤੇ ਪ੍ਰਭੂਸੱਤਾ।',
        '[B] ਪ੍ਰਭੂਸੱਤਾ (Sovereignty) ਰਾਜ ਨੂੰ ਬਾਕੀ ਸਾਰੇ ਸਮਾਜਿਕ ਸੰਘਾਂ ਤੋਂ ਵੱਖਰਾ ਕਰਦੀ ਹੈ।',
        '[B] ਪ੍ਰਤੱਖ ਲੋਕਤੰਤਰ ਦੇ ਸਾਧਨ: ਰੈਫਰੈਂਡਮ, ਇਨੀਸ਼ੀਏਟਿਵ, ਰੀਕਾਲ (ਵਾਪਸ ਬੁਲਾਉਣਾ) ਅਤੇ ਪਲੇਬਿਸਾਈਟ।',
        '[I] ਜੀਨ ਬੋਦਾਂ (Jean Bodin) ਨੇ 1576 ਵਿੱਚ ਆਪਣੀ ਪੁਸਤਕ Six Books of the Commonwealth ਵਿੱਚ ਪ੍ਰਭੂਸੱਤਾ ਸ਼ਬਦ ਦਿੱਤਾ।',
        '[I] ਜੌਨ ਔਸਟਿਨ (1832) ਨੇ ਪ੍ਰਭੂਸੱਤਾ ਦਾ ਇੱਕਵਾਦੀ/ਕਾਨੂੰਨੀ ਸਿਧਾਂਤ ਦਿੱਤਾ ("ਕਾਨੂੰਨ ਪ੍ਰਭੂਸੱਤਾ ਸੰਪੰਨ ਦਾ ਹੁਕਮ ਹੈ")।',
        '[I] ਹੈਰੋਲਡ ਲਾਸਕੀ ਅਤੇ ਆਰ.ਐਮ. ਮੈਕਾਈਵਰ ਨੇ ਪ੍ਰਭੂਸੱਤਾ ਦੇ ਬਹੁਲਵਾਦੀ (Pluralistic) ਸਿਧਾਂਤ ਦੀ ਵਕਾਲਤ ਕੀਤੀ।',
        '[I] ਆਈਜ਼ਿਆ ਬਰਲਿਨ ਨੇ 1958 ਵਿੱਚ ਨਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ ਅਤੇ ਸਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ ਵਿਚਕਾਰ ਅੰਤਰ ਸਪੱਸ਼ਟ ਕੀਤਾ।',
        '[A] ਜੌਨ ਰੌਲਜ਼ (A Theory of Justice, 1971) ਨੇ ਅਗਿਆਨਤਾ ਦੇ ਪਰਦੇ (Veil of Ignorance) ਅਤੇ ਅੰਤਰ ਸਿਧਾਂਤ (Difference Principle) ਦਾ ਪ੍ਰਤੀਪਾਦਨ ਕੀਤਾ।',
        '[A] ਸਮਾਜਿਕ ਸਮਝੌਤਾ ਚਿੰਤਕ: ਹੌਬਸ (Leviathan, 1651), ਲੌਕ (Two Treatises, 1689 — ਕੁਦਰਤੀ ਅਧਿਕਾਰ), ਰੂਸੋ (The Social Contract, 1762 — General Will)।',
        '[A] ਗਾਂਧੀ ਜੀ ਨੇ ਟਰੱਸਟੀਸ਼ਿਪ ਤੇ ਸਰਵੋਦਿਆ ਦਾ ਸਿਧਾਂਤ ਦਿੱਤਾ; ਡਾ. ਅੰਬੇਡਕਰ ਨੇ ਜਾਤੀ ਪ੍ਰਥਾ ਨੂੰ "ਦਰਜਾਬੰਦ ਅਸਮਾਨਤਾ" (Graded Inequality) ਕਿਹਾ।',
      ],
      hi: [
        '[B] राज्य के 4 अनिवार्य तत्व: जनसंख्या, निश्चित भू-भाग, सरकार और संप्रभुता।',
        '[B] संप्रभुता (Sovereignty) राज्य को अन्य सभी सामाजिक समुदायों से अलग करती है।',
        '[B] प्रत्यक्ष लोकतंत्र के उपकरण: रेफरेंडम, इनिशिएटिव, रिकॉल और प्लेबिसाइट।',
        '[I] जीन बोदां (Jean Bodin) ने 1576 में अपनी पुस्तक Six Books of the Commonwealth में संप्रभुता का सिद्धांत दिया।',
        '[I] जॉन ऑस्टिन (1832) ने एकलवादी/विधिक संप्रभुता सिद्धांत दिया ("कानून संप्रभु का आदेश है")।',
        '[I] हैरोल्ड लास्की और आर.एम. मैकाइवर ने बहुलवादी (Pluralistic) संप्रभुता सिद्धांत का समर्थन किया।',
        '[I] आइज़ाया बर्लिन ने Two Concepts of Liberty (1958) में नकारात्मक व सकारात्मक स्वतंत्रता में अंतर किया।',
        '[A] जॉन रॉल्स (A Theory of Justice, 1971) ने अज्ञानता के पर्दे (Veil of Ignorance) और अंतर सिद्धांत (Difference Principle) का प्रतिपादन किया।',
        '[A] सामाजिक समझौता विचारक: हॉब्स (Leviathan, 1651), लॉक (Two Treatises, 1689), रूसो (Social Contract, 1762 — सामान्य इच्छा)।',
        '[A] गांधीजी ने न्यासधारिता (Trusteeship) व सर्वोदय दिया; डॉ. अंबेडकर ने जाति व्यवस्था को "क्रमिक असमानता" (Graded Inequality) कहा।',
      ],
    },
    workedExamples: [
      {
        title: {
          en: 'Distinguishing State vs Nation vs Government in Exam MCQs',
          pa: 'ਰਾਜ ਬਨਾਮ ਰਾਸ਼ਟਰ ਬਨਾਮ ਸਰਕਾਰ ਦੀ ਪਛਾਣ',
          hi: 'राज्य बनाम राष्ट्र बनाम सरकार की पहचान',
        },
        problem: {
          en: 'Why was India before 15 August 1947 NOT considered a "State" in strict Political Science terminology, even though it had a population, definite territory, and a functioning British Indian Government?',
          pa: '15 ਅਗਸਤ 1947 ਤੋਂ ਪਹਿਲਾਂ ਭਾਰਤ ਕੋਲ ਆਬਾਦੀ, ਭੂ-ਭਾਗ ਅਤੇ ਸਰਕਾਰ ਹੋਣ ਦੇ ਬਾਵਜੂਦ ਇਸ ਨੂੰ ਰਾਜਨੀਤੀ ਸ਼ਾਸਤਰ ਵਿੱਚ "ਰਾਜ" (State) ਕਿਉਂ ਨਹੀਂ ਮੰਨਿਆ ਜਾਂਦਾ ਸੀ?',
          hi: '15 अगस्त 1947 से पहले भारत के पास जनसंख्या, निश्चित भू-भाग और सरकार होने के बावजूद इसे राजनीति विज्ञान में "राज्य" (State) क्यों नहीं माना जाता था?',
        },
        steps: {
          en: [
            'Check the 4 essential elements of a State: (1) Population, (2) Fixed Territory, (3) Government, (4) Sovereignty.',
            'Evaluate pre-1947 India: It had Population, Territory, and Government, but supreme legislative and foreign policy authority rested with the British Crown/Parliament in London.',
            'Because internal and external Sovereignty was absent, pre-1947 India was a colony/dependency, not a sovereign State.',
          ],
          pa: [
            'ਰਾਜ ਦੇ 4 ਜ਼ਰੂਰੀ ਤੱਤਾਂ ਦੀ ਜਾਂਚ ਕਰੋ: ਆਬਾਦੀ, ਭੂ-ਭਾਗ, ਸਰਕਾਰ ਅਤੇ ਪ੍ਰਭੂਸੱਤਾ।',
            '1947 ਤੋਂ ਪਹਿਲਾਂ ਭਾਰਤ ਦੀ ਸਰਵਉੱਚ ਸ਼ਕਤੀ ਬ੍ਰਿਟਿਸ਼ ਤਾਜ/ਸੰਸਦ ਕੋਲ ਸੀ।',
            'ਪ੍ਰਭੂਸੱਤਾ (Sovereignty) ਦੀ ਘਾਟ ਕਾਰਨ ਉਹ ਇੱਕ ਰਾਜ ਨਹੀਂ ਬਲਕਿ ਬਸਤੀ ਸੀ।',
          ],
          hi: [
            'राज्य के 4 अनिवार्य तत्वों की जाँच करें: जनसंख्या, भू-भाग, सरकार और संप्रभुता।',
            '1947 से पूर्व सर्वोच्च शक्ति ब्रिटिश ताज/संसद के पास थी।',
            'संप्रभुता (Sovereignty) के अभाव के कारण औपनिवेशिक भारत राज्य नहीं था।',
          ],
        },
        solution: {
          en: 'Absence of the 4th essential element — Sovereignty (both internal and external).',
          pa: 'ਚੌਥੇ ਜ਼ਰੂਰੀ ਤੱਤ — ਪ੍ਰਭੂਸੱਤਾ (Sovereignty) ਦੀ ਅਣਹੋਂਦ ਕਾਰਨ।',
          hi: 'चौथे अनिवार्य तत्व — संप्रभुता (Sovereignty) के अभाव के कारण।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Negative Liberty means "bad liberty" and Positive Liberty means "good liberty".',
          pa: 'ਨਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ ਦਾ ਅਰਥ "ਮਾੜੀ ਸੁਤੰਤਰਤਾ" ਅਤੇ ਸਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ ਦਾ ਅਰਥ "ਚੰਗੀ ਸੁਤੰਤਰਤਾ" ਹੈ।',
          hi: 'नकारात्मक स्वतंत्रता का अर्थ "बुरी स्वतंत्रता" और सकारात्मक स्वतंत्रता का अर्थ "अच्छी स्वतंत्रता" है।',
        },
        correction: {
          en: 'In Isaiah Berlin’s classification, "Negative" simply means absence of external obstacles/interference ("freedom from"), whereas "Positive" means collective self-determination and enabling conditions for self-realisation ("freedom to").',
          pa: 'ਆਈਜ਼ਿਆ ਬਰਲਿਨ ਅਨੁਸार "ਨਕਾਰਾਤਮਕ" ਦਾ ਅਰਥ ਬਾਹਰੀ ਦਖ਼ਲਅੰਦਾਜ਼ੀ ਦੀ ਅਣਹੋਂਦ ("freedom from") ਹੈ, ਜਦੋਂ ਕਿ "ਸਕਾਰਾਤਮਕ" ਦਾ ਅਰਥ ਸਵੈ-ਵਿਕਾਸ ਦੀ ਸਮਰੱਥਾ ("freedom to") ਹੈ।',
          hi: 'आइज़ाया बर्लिन के अनुसार "नकारात्मक" का अर्थ बाहरी बाधाओं/हस्तक्षेप का अभाव ("freedom from") है, जबकि "सकारात्मक" का अर्थ आत्म-विकास हेतु सक्षम परिस्थितियाँ ("freedom to") है।',
        },
        whyItMatters: {
          en: 'Master Cadre SST frequently asks whether Fundamental Rights (Arts 19–22) represent primarily negative obligations on the State while DPSPs represent positive obligations.',
          pa: 'ਮਾਸਟਰ ਕੈਡਰ ਵਿੱਚ ਅਕਸਰ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ ਕਿ ਮੌਲਿਕ ਅਧਿਕਾਰ ਨਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ ਅਤੇ DPSP ਸਕਾਰਾਤਮਕ ਸੁਤੰਤਰਤਾ ਨਾਲ ਕਿਵੇਂ ਜੁੜੇ ਹਨ।',
          hi: 'मास्टर कैडर में अक्सर पूछा जाता है कि मौलिक अधिकार नकारात्मक स्वतंत्रता और नीति निदेशक तत्व सकारात्मक स्वतंत्रता से कैसे जुड़े हैं।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Mnemonic for Social Contract Trio: H-L-R → Hobbes (1651 Leviathan = Absolute Sovereign), Locke (1689 Two Treatises = Limited Govt & Natural Rights), Rousseau (1762 Social Contract = General Will / Popular Sovereignty).',
          'Mnemonic for State’s 4 Pillars: P-T-G-S → Population, Territory, Government, Sovereignty.',
          'Rawls’ 2 Principles = (1) Equal Basic Liberty + (2) Fair Equality of Opportunity & Difference Principle (benefit the least advantaged).',
          'Gramsci = Cultural Hegemony (Civil Society); Marx = Economic Base & Superstructure; Gandhi = Sarvodaya & Trusteeship; Ambedkar = Graded Inequality & Constitutional Morality.',
        ],
        pa: [
          'ਸਮਾਜਿਕ ਸਮਝੌਤਾ ਟ੍ਰਿਕ: H-L-R → ਹੌਬਸ (1651 Leviathan = ਨਿਰੰਕੁਸ਼ ਸ਼ਾਸਕ), ਲੌਕ (1689 Two Treatises = ਕੁਦਰਤੀ ਅਧਿਕਾਰ), ਰੂਸੋ (1762 Social Contract = ਸਧਾਰਨ ਇੱਛਾ)।',
          'ਰਾਜ ਦੇ 4 ਥੰਮ੍ਹ: P-T-G-S → ਆਬਾਦੀ, ਭੂ-ਭਾਗ, ਸਰਕਾਰ, ਪ੍ਰਭੂਸੱਤਾ।',
          'ਰੌਲਜ਼ = Veil of Ignorance + Difference Principle; ਗ੍ਰਾਮਸ਼ੀ = Hegemony; ਗਾਂਧੀ = ਸਰਵੋਦਿਆ ਤੇ ਟਰੱਸਟੀਸ਼ਿਪ; ਅੰਬੇਡਕਰ = Graded Inequality।',
        ],
        hi: [
          'सामाजिक समझौता ट्रिक: H-L-R → हॉब्स (1651 Leviathan = निरंकुश शासक), लॉक (1689 Two Treatises = प्राकृतिक अधिकार), रूसो (1762 Social Contract = सामान्य इच्छा)।',
          'राज्य के 4 स्तंभ: P-T-G-S → जनसंख्या, भू-भाग, सरकार, संप्रभुता।',
          'रॉल्स = Veil of Ignorance + Difference Principle; ग्राम्शी = Hegemony; गांधी = सर्वोदय व न्यासधारिता; अंबेडकर = Graded Inequality।',
        ],
      },
      examTraps: {
        en: [
          'Do not confuse Jean Bodin (coined Sovereignty, 1576) with John Austin (Legal/Monistic Command Theory, 1832).',
          'Do not attribute "Withering Away of the State" to Liberalism — both Marxism (after proletarian stage) and Philosophical Anarchism/Gandhism envision a stateless society, but via completely different paths (violent class revolution vs non-violent moral Swaraj).',
        ],
        pa: [
          'ਜੀਨ ਬੋਦਾਂ (1576, ਪ੍ਰਭੂਸੱਤਾ ਸ਼ਬਦ ਦੇ ਜਨਕ) ਅਤੇ ਜੌਨ ਔਸਟਿਨ (1832, ਕਾਨੂੰਨੀ/ਇੱਕਵਾਦੀ ਸਿਧਾਂਤ) ਵਿੱਚ ਉਲਝਣ ਨਾ ਰੱਖੋ।',
          '"ਰਾਜ ਦੇ ਲੋਪ ਹੋਣ" (Withering away of the State) ਦਾ ਸਿਧਾਂਤ ਮਾਰਕਸਵਾਦ (ਐਂਗਲਜ਼) ਨਾਲ ਸਬੰਧਤ ਹੈ, ਉਦਾਰਵਾਦ ਨਾਲ ਨਹੀਂ।',
        ],
        hi: [
          'जीन बोदां (1576, संप्रभुता के जनक) और जॉन ऑस्टिन (1832, विधिक/एकलवादी सिद्धांत) में भ्रम न रखें।',
          '"राज्य के विलुप्त होने" (Withering away of the State) का सिद्धांत मार्क्सवाद (एंगेल्स) से संबंधित है, उदारवाद से नहीं।',
        ],
      },
    },
    flashcards: [
      {
        id: 'fc-pol-theory-1',
        q: {
          en: '[Level B] What are the four essential elements of a State?',
          pa: '[Level B] ਰਾਜ (State) ਦੇ ਚਾਰ ਜ਼ਰੂਰੀ ਤੱਤ ਕਿਹੜੇ ਹਨ?',
          hi: '[Level B] राज्य (State) के चार अनिवार्य तत्व कौन-से हैं?',
        },
        a: {
          en: 'Population, Fixed Territory, Government, and Sovereignty (NCERT Class 11 Political Theory).',
          pa: 'ਆਬਾਦੀ, ਨਿਸ਼ਚਿਤ ਭੂ-ਭਾਗ, ਸਰਕਾਰ ਅਤੇ ਪ੍ਰਭੂਸੱਤਾ।',
          hi: 'जनसंख्या, निश्चित भू-भाग, सरकार और संप्रभुता।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-pol-theory-2',
        q: {
          en: '[Level I] Who authored "On Liberty" (1859) and formulated the Harm Principle?',
          pa: '[Level I] "On Liberty" (1859) ਪੁਸਤਕ ਕਿਸ ਨੇ ਲਿਖੀ ਅਤੇ ਹਾਨੀ ਸਿਧਾਂਤ (Harm Principle) ਦਿੱਤਾ?',
          hi: '[Level I] "On Liberty" (1859) पुस्तक किसने लिखी और हानि सिद्धांत (Harm Principle) दिया?',
        },
        a: {
          en: 'John Stuart Mill (distinguished self-regarding and other-regarding actions).',
          pa: 'ਜੌਨ ਸਟੂਅਰਟ ਮਿੱਲ (J.S. Mill)।',
          hi: 'जॉन स्टुअर्ट मिल (J.S. Mill)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-pol-theory-3',
        q: {
          en: '[Level A] Which jurist gave the Monistic/Legal theory of sovereignty in "Lectures on Jurisprudence" (1832)?',
          pa: '[Level A] "Lectures on Jurisprudence" (1832) ਵਿੱਚ ਪ੍ਰਭੂਸੱਤਾ ਦਾ ਇੱਕਵਾਦੀ/ਕਾਨੂੰਨੀ ਸਿਧਾਂਤ ਕਿਸ ਨੇ ਦਿੱਤਾ?',
          hi: '[Level A] "Lectures on Jurisprudence" (1832) में संप्रभुता का एकलवादी/विधिक सिद्धांत किसने दिया?',
        },
        a: {
          en: 'John Austin (defined law as the command of a determinate human superior).',
          pa: 'ਜੌਨ ਔਸਟਿਨ (John Austin)।',
          hi: 'जॉन ऑस्टिन (John Austin)।',
        },
        difficulty: 'hard',
      },
      {
        id: 'fc-pol-theory-4',
        q: {
          en: '[Level A] Which philosopher introduced the "Veil of Ignorance" and the "Difference Principle" in "A Theory of Justice" (1971)?',
          pa: '[Level A] "A Theory of Justice" (1971) ਵਿੱਚ "ਅਗਿਆਨਤਾ ਦਾ ਪਰਦਾ" ਅਤੇ "ਅੰਤਰ ਸਿਧਾਂਤ" ਕਿਸ ਨੇ ਦਿੱਤਾ?',
          hi: '[Level A] "A Theory of Justice" (1971) में "अज्ञानता का पर्दा" और "अंतर सिद्धांत" किसने दिया?',
        },
        a: {
          en: 'John Rawls (inequalities are just only if they benefit the least advantaged).',
          pa: 'ਜੌਨ ਰੌਲਜ਼ (John Rawls)।',
          hi: 'जॉन रॉल्स (John Rawls)।',
        },
        difficulty: 'hard',
      },
      {
        id: 'fc-pol-theory-5',
        q: {
          en: '[Level A] Which book by John Ruskin inspired Mahatma Gandhi’s concept of Sarvodaya?',
          pa: '[Level A] ਜੌਨ ਰਸਕਿਨ ਦੀ ਕਿਸ ਪੁਸਤਕ ਤੋਂ ਮਹਾਤਮਾ ਗਾਂਧੀ ਨੇ "ਸਰਵੋਦਿਆ" ਦਾ ਵਿਚਾਰ ਲਿਆ?',
          hi: '[Level A] जॉन रस्किन की किस पुस्तक से महात्मा गांधी ने "सर्वोदय" का विचार लिया?',
        },
        a: {
          en: 'Unto This Last (translated by Gandhi into Gujarati as Sarvodaya in 1908).',
          pa: 'Unto This Last (ਗਾਂਧੀ ਜੀ ਨੇ 1908 ਵਿੱਚ ਇਸ ਦਾ ਗੁਜਰਾਤੀ ਅਨੁਵਾਦ "ਸਰਵੋਦਿਆ" ਨਾਂ ਹੇਠ ਕੀਤਾ)।',
          hi: 'Unto This Last (गांधीजी ने 1908 में इसका गुजराती अनुवाद "सर्वोदय" नाम से किया)।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [],
    bookRefs: [
      {
        title: 'NCERT Class 11 Political Theory (Ch 1–10: Freedom, Equality, Social Justice, Rights, Secularism)',
        author: 'NCERT',
        chapters: 'Chapters 1 to 10',
        type: 'ncert',
      },
      {
        title: 'An Introduction to Political Theory (Graduation Reference)',
        author: 'O.P. Gauba',
        chapters: 'State, Sovereignty, Liberty, Equality, Justice & Major Ideologies',
        type: 'standard',
      },
    ],
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      reviewerRecord: 'Fact-checked against NCERT Class 11 Political Theory & ERB Master Cadre SST Official Syllabus (Theories & Concepts)',
      verifiedSyllabusDenominator: 'ERB Punjab Master Cadre SST — Polity: Theories; Concepts',
    },
  },

  // ==========================================================================
  // 2. CITIZENSHIP, ELECTION PROCEDURE & PARTY SYSTEM IN INDIA (B -> I -> A)
  // ==========================================================================
  'sst-citizenship-election-parties': {
    id: 'sst-citizenship-election-parties',
    topicId: 'sst-citizenship-election-parties',
    subjectId: 'social-science',
    category: 'polity',
    practiceSource: 'authored-only',
    coverageStatus: 'complete',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    title: {
      en: 'Citizenship, Election Procedure & Party System in India (B → I → A)',
      pa: 'ਨਾਗਰਿਕਤਾ, ਚੋਣ ਪ੍ਰਕਿਰਿਆ ਅਤੇ ਭਾਰਤ ਵਿੱਚ ਦਲ ਪ੍ਰਣਾਲੀ (B → I → A)',
      hi: 'नागरिकता, निर्वाचन प्रक्रिया एवं भारत में दलीय प्रणाली (B → I → A)',
    },
    examRelevance: 'Punjab Master Cadre SST (6–8 Qs — Official ERB Headings: Citizenship, Election Procedure, Party System in India)',
    estimatedTime: '45 min',
    prerequisites: {
      en: ['Basic knowledge of voting, elections, and Indian Constitution (Class 6–8 Civics)'],
      pa: ['ਵੋਟ ਪਾਉਣ, ਚੋਣਾਂ ਅਤੇ ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ (ਜਮਾਤ 6–8 ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ)'],
      hi: ['मतदान, चुनाव और भारतीय संविधान की बुनियादी जानकारी (कक्षा 6–8 नागरिक शास्त्र)'],
    },
    learningObjectives: {
      en: [
        '[B] Understand Universal Adult Franchise (Article 326, 61st Amendment), Secret Ballot, Constituencies, and Ruling vs Opposition Parties.',
        '[I] Master Part II of the Constitution (Articles 5–11), Citizenship Act 1955 (5 modes of acquisition & 3 modes of loss), OCI cardholders, and Election Commission of India (Article 324).',
        '[A] Analyse FPTP vs Proportional Representation, Delimitation (Art 82), RPA 1950 & 1951, 10th Schedule Anti-Defection Law, National vs State Party recognition criteria, and Electoral Reform Committees.',
      ],
      pa: [
        '[B] ਬਾਲਗ ਮੱਤ-ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 326, 61ਵੀਂ ਸੋਧ), ਗੁਪਤ ਮੱਤਦਾਨ, ਚੋਣ ਹਲਕੇ ਅਤੇ ਸੱਤਾਧਾਰੀ ਤੇ ਵਿਰੋਧੀ ਧਿਰ ਦੀ ਭੂਮਿਕਾ।',
        '[I] ਸੰਵਿਧਾਨ ਦਾ ਭਾਗ II (ਅਨੁਛੇਦ 5–11), ਨਾਗਰਿਕਤਾ ਐਕਟ 1955 (ਪ੍ਰਾਪਤੀ ਦੇ 5 ਅਤੇ ਸਮਾਪਤੀ ਦੇ 3 ਤਰੀਕੇ), OCI ਅਤੇ ਭਾਰਤੀ ਚੋਣ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 324)।',
        '[A] FPTP ਬਨਾਮ ਅਨੁਪਾਤਕ ਪ੍ਰਤੀਨਿਧਤਾ, ਹੱਦਬੰਦੀ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 82), RPA 1950 ਤੇ 1951, 10ਵੀਂ ਅਨੁਸੂਚੀ (ਦਲ-ਬਦਲੀ ਵਿਰੋਧੀ ਕਾਨੂੰਨ) ਅਤੇ ਰਾਸ਼ਟਰੀ/ਰਾਜ ਪਾਰਟੀ ਮਾਨਤਾ ਮਾਪਦੰਡ।',
      ],
      hi: [
        '[B] वयस्क मताधिकार (अनुच्छेद 326, 61वां संशोधन), गुप्त मतदान, निर्वाचन क्षेत्र और सत्तापक्ष व विपक्ष की भूमिका।',
        '[I] संविधान का भाग II (अनुच्छेद 5–11), नागरिकता अधिनियम 1955 (अर्जन के 5 व समाप्ति के 3 तरीके), OCI तथा भारत निर्वाचन आयोग (अनुच्छेद 324)।',
        '[A] FPTP बनाम आनुपातिक प्रतिनिधित्व, परिसीमन आयोग (अनुच्छेद 82), RPA 1950 व 1951, 10वीं अनुसूची (दल-बदल विरोधी कानून) और राष्ट्रीय/राज्य दल मान्यता मानदंड।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 Official ERB Syllabus Mapping & Progression</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers official Punjab Master Cadre SST Polity headings <strong>"Citizenship"</strong>, <strong>"Election Procedure"</strong>, and <strong>"Party System in India"</strong> in <strong>B → I → A</strong> progression.
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · Basic (Class 6–8 Foundation)</span>
              <span class="text-xs text-slate-400">PSEB/NCERT Civics Classes 6–8</span>
            </div>
            <h3 class="text-xl font-bold text-white">1. Universal Adult Franchise, Voting & Political Parties</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Single Citizenship (Borrowed from Britain):</strong> Unlike the USA and Switzerland (which have dual federal + state citizenship), every Indian is a citizen of India only, enjoying uniform civil and political rights across all states.</li>
              <li><strong>Universal Adult Franchise (Article 326):</strong> Every citizen aged <strong>18 years or above</strong> has the right to vote without discrimination of caste, creed, religion, sex, or wealth. The <strong>61st Constitutional Amendment Act, 1988</strong> (effective 28 March 1989, during PM Rajiv Gandhi’s tenure, Tarkunde Committee recommendation) lowered the voting age from <strong>21 years to 18 years</strong>.</li>
              <li><strong>National Voters’ Day:</strong> Celebrated every year on <strong>25 January</strong> to mark the foundation day of the Election Commission of India (established on <strong>25 January 1950</strong>).</li>
              <li><strong>Functions of Political Parties:</strong> Contesting elections, aggregating public opinion, forming government (Ruling Party), providing constructive critique (Leader of Opposition requires at least <strong>1/10th i.e. 10% seats</strong> of the total strength of the House — 55 seats in Lok Sabha), and linking citizens to state machinery.</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · Intermediate (Class 9–10 PSEB/NCERT)</span>
              <span class="text-xs text-slate-400">Part II (Arts 5–11) & Part XV (Arts 324–329)</span>
            </div>
            <h3 class="text-xl font-bold text-white">2. Constitutional Citizenship (Part II) & Election Commission (Part XV)</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-700 text-amber-300">
                    <th class="p-2">Provision / Act</th>
                    <th class="p-2">Articles / Clauses</th>
                    <th class="p-2">High-Yield Exam Details</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300 divide-y divide-slate-800">
                  <tr>
                    <td class="p-2 font-semibold text-white">Part II: Citizenship at Commencement (26 Jan 1950)</td>
                    <td class="p-2">Articles 5 to 11</td>
                    <td class="p-2"><strong>Art 5:</strong> By Domicile; <strong>Art 6:</strong> Migrants from Pakistan (19 July 1948 permit date); <strong>Art 7:</strong> Migrants to Pakistan who returned; <strong>Art 8:</strong> PIOs residing abroad; <strong>Art 9:</strong> Voluntary acquisition of foreign citizenship terminates Indian citizenship; <strong>Art 10:</strong> Continuance; <strong>Art 11:</strong> Parliament’s plenary power to regulate citizenship by law.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Citizenship Act, 1955</td>
                    <td class="p-2">5 Modes of Acquisition & 3 Modes of Loss</td>
                    <td class="p-2"><strong>Acquisition (Mnemonic: B-D-R-N-I):</strong> (1) Birth (Sec 3), (2) Descent (Sec 4), (3) Registration (Sec 5), (4) Naturalisation (Sec 6), (5) Incorporation of Territory (Sec 7 — e.g. Puducherry 1962, Sikkim 1975).<br/><strong>Loss (Mnemonic: R-T-D):</strong> (1) Renunciation (voluntary), (2) Termination (automatic upon taking foreign citizenship), (3) Deprivation (compulsory by Central Govt for fraud/disloyalty).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">NRI vs OCI (2015 Merger)</td>
                    <td class="p-2">Sec 7A–7D (Citizenship Amendment Act 2015)</td>
                    <td class="p-2"><strong>NRI</strong> is a full Indian citizen holding an Indian passport living abroad (&gt;182 days). <strong>PIO card was merged into OCI card in Jan 2015</strong>. OCI cardholders get lifelong visa-free entry and economic/educational parity with NRIs, but <strong>cannot vote, cannot hold constitutional posts (Art 16), and cannot buy agricultural/plantation land</strong>.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Fundamental Rights Exclusive to Citizens</td>
                    <td class="p-2">Articles 15, 16, 19, 29, 30</td>
                    <td class="p-2">Only Indian citizens enjoy <strong>Arts 15, 16, 19, 29, and 30</strong> (plus voting and contesting elections). Foreigners (except enemy aliens for Art 22) enjoy Arts 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, 28.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Election Commission of India (ECI)</td>
                    <td class="p-2">Part XV (Articles 324–329)</td>
                    <td class="p-2">Multi-member body since Oct 1993: <strong>1 CEC + 2 ECs</strong> (6 years or 65 years age). Under the <strong>CEC and Other ECs Act, 2023</strong>, appointed by President on recommendation of a 3-member committee (<strong>PM + Union Cabinet Minister + Leader of Opposition in Lok Sabha</strong>). CEC is removed like a Supreme Court Judge. First CEC: <strong>Sukumar Sen</strong>; First Woman CEC: <strong>V.S. Ramadevi</strong>.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · Advanced (Class 11–12 & Graduation)</span>
              <span class="text-xs text-slate-400">Electoral Laws, 10th Schedule & Party System</span>
            </div>
            <h3 class="text-xl font-bold text-white">3. Electoral Systems, EVM/VVPAT, Anti-Defection & Party Recognition</h3>
            <ul class="text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>FPTP vs Proportional Representation (PR):</strong> Lok Sabha and State Legislative Assemblies use <strong>First-Past-The-Post (FPTP)</strong> (plurality system in single-member territorial constituencies). The President, Vice-President, Rajya Sabha, and State Legislative Councils use <strong>Proportional Representation by Single Transferable Vote (PR-STV)</strong>.</li>
              <li><strong>EVM, VVPAT & NOTA Milestones:</strong>
                <br/>• <strong>EVM (Electronic Voting Machine):</strong> Manufactured by BEL & ECIL; first used experimentally in <strong>Parur Assembly Constituency (Kerala) in May 1982</strong>; used nationwide in all Lok Sabha constituencies from <strong>2004</strong>.
                <br/>• <strong>VVPAT (Voter Verifiable Paper Audit Trail):</strong> First used in <strong>Noksen (Nagaland) in Sept 2013</strong>; displays the slip for <strong>7 seconds</strong> before cutting and dropping into the sealed box; 100% VVPAT coverage in 2019 Lok Sabha polls.
                <br/>• <strong>NOTA (None of the Above):</strong> Introduced in <strong>2013</strong> following the Supreme Court’s judgment in <em>PUCL vs Union of India (2013)</em>.</li>
              <li><strong>RPA 1950 vs RPA 1951 & Delimitation (Art 82):</strong>
                <br/>• <strong>Representation of the People Act, 1950:</strong> Deals with allocation of seats, delimitation of constituencies, voter qualifications, and preparation of electoral rolls.
                <br/>• <strong>Representation of the People Act, 1951:</strong> Deals with actual conduct of elections, registration of political parties (Section 29A), qualifications and disqualifications of MPs/MLAs (Sections 8–11), corrupt practices, and election disputes (tried by High Court).
                <br/>• <strong>Delimitation Commission (Article 82):</strong> Appointed four times — <strong>1952, 1962, 1972, and 2002</strong> (Justice Kuldip Singh). Under the <strong>84th Amendment Act, 2001</strong>, the total number of seats in Lok Sabha and State Assemblies is frozen on the 1971 Census basis until the first census after <strong>2026</strong>, while internal constituency boundaries and SC/ST seat reservations were readjusted on the <strong>2001 Census</strong> (87th Amendment, 2003).</li>
              <li><strong>10th Schedule — Anti-Defection Law (52nd Amendment Act, 1985 & 91st Amendment Act, 2003):</strong>
                <br/>• Disqualifies an MP/MLA if they: (a) voluntarily give up membership of their party, (b) vote or abstain contrary to party whip without prior permission (not condoned within 15 days), (c) an Independent member joins any political party after election, or (d) a Nominated member joins a political party <strong>after 6 months</strong> of taking seat.
                <br/>• <strong>91st Amendment Act, 2003:</strong> Deleted the 1/3rd "split" exemption; now only a <strong>2/3rd merger</strong> protects members from disqualification, and capped the Council of Ministers at <strong>15%</strong> of the strength of Lok Sabha / Vidhan Sabha (minimum 12 in states).
                <br/>• <strong>Deciding Authority:</strong> Speaker / Chairman of the House, whose decision is subject to judicial review by High Court / Supreme Court (<em>Kihoto Hollohan vs Zachillhu</em>, 1992).</li>
              <li><strong>Party System & Recognition Criteria (Election Symbols Order, 1968):</strong>
                <br/>• Rajni Kothari termed the 1952–1967 era the <strong>"Congress System"</strong> (One-party dominance within a competitive multi-party framework); post-1989 saw the rise of coalition politics and regional/state parties.
                <br/>• <strong>National Party Criteria (Any 1 of 3):</strong> (i) <strong>6% valid votes</strong> in <strong>4 or more states</strong> in LS/Assembly elections + <strong>4 Lok Sabha seats</strong>; OR (ii) <strong>2% of total Lok Sabha seats</strong> (11 seats) elected from at least <strong>3 different states</strong>; OR (iii) Recognised as a <strong>State Party in at least 4 states</strong>. (Currently <strong>6 National Parties</strong> after ECI’s April 2023 review: <strong>BJP, INC, BSP, CPI(M), NPP, and AAP</strong>).
                <br/>• <strong>State Party Criteria (Any 1 of 5):</strong> (i) 6% valid votes in State Assembly election + 2 MLA seats; OR (ii) 6% valid votes in Lok Sabha election from the state + 1 MP seat; OR (iii) 3% of total Assembly seats or 3 seats (whichever is more); OR (iv) 1 Lok Sabha seat for every 25 seats allotted to the state; OR (v) 8% of total valid votes polled in the state in LS or Assembly election (added in 2011).</li>
            </ul>
          </div>

          <div class="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl">
            <h4 class="text-emerald-300 font-bold text-sm mb-2">🧠 5 Exam-Style Points to Memorise & Sources to Verify</h4>
            <ol class="text-xs text-slate-300 space-y-1 list-decimal pl-4">
              <li><strong>Exclusive Citizen FRs:</strong> Articles <strong>15, 16, 19, 29, 30</strong> belong ONLY to Indian citizens, never to foreigners.</li>
              <li><strong>Citizenship Act 1955:</strong> 5 ways to acquire (Birth, Descent, Registration, Naturalisation, Incorporation) & 3 ways to lose (Renunciation, Termination, Deprivation).</li>
              <li><strong>EVM & VVPAT:</strong> First EVM = Parur (Kerala, 1982); First VVPAT = Noksen (Nagaland, 2013, 7-second display); 61st Amendment (1988) reduced voting age 21 → 18.</li>
              <li><strong>Anti-Defection (10th Schedule):</strong> 52nd Amendment (1985); 91st Amendment (2003) abolished 1/3rd split and retained only 2/3rd merger; Nominated member has a 6-month window.</li>
              <li><strong>Sources to Verify:</strong> NCERT Class 11 <em>Indian Constitution at Work</em> (Ch 3: Election and Representation), NCERT Class 10 <em>Democratic Politics-II</em> (Ch 6: Political Parties), & M. Laxmikanth <em>Indian Polity</em>.</li>
            </ol>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 ਸਰਕਾਰੀ ERB ਸਿਲੇਬਸ ਮੈਪਿੰਗ (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ ਅਧਿਕਾਰਤ ਸਿਰਲੇਖ <strong>"Citizenship"</strong>, <strong>"Election Procedure"</strong> ਅਤੇ <strong>"Party System in India"</strong> ਨੂੰ <strong>B → I → A</strong> ਕ੍ਰਮ ਵਿੱਚ ਸਮਝਾਇਆ ਗਿਆ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · ਮੁੱਢਲਾ ਪੱਧਰ (ਜਮਾਤ 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. ਇਕਹਿਰੀ ਨਾਗਰਿਕਤਾ, ਬਾਲਗ ਮੱਤ-ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 326) ਅਤੇ ਰਾਜਨੀਤਿਕ ਦਲ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਇਕਹਿਰੀ ਨਾਗਰਿਕਤਾ (Single Citizenship):</strong> ਬ੍ਰਿਟੇਨ ਤੋਂ ਲਈ ਗਈ ਵਿਸ਼ੇਸ਼ਤਾ; ਅਮਰੀਕਾ ਤੇ ਸਵਿਟਜ਼ਰਲੈਂਡ ਵਾਂਗ ਦੋਹਰੀ ਨਾਗਰਿਕਤਾ ਨਹੀਂ ਹੈ।</li>
              <li><strong>ਸਰਵਵਿਆਪਕ ਬਾਲਗ ਮੱਤ-ਅਧਿਕਾਰ (ਅਨੁਛੇਦ 326):</strong> <strong>61ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1988</strong> (ਲਾਗੂ 28 ਮਾਰਚ 1989) ਰਾਹੀਂ ਵੋਟ ਪਾਉਣ ਦੀ ਉਮਰ <strong>21 ਸਾਲ ਤੋਂ ਘਟਾ ਕੇ 18 ਸਾਲ</strong> ਕੀਤੀ ਗਈ।</li>
              <li><strong>ਰਾਸ਼ਟਰੀ ਵੋਟਰ ਦਿਵਸ:</strong> ਹਰ ਸਾਲ <strong>25 ਜਨਵਰੀ</strong> ਨੂੰ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ (25 ਜਨਵਰੀ 1950 ਨੂੰ ਭਾਰਤੀ ਚੋਣ ਕਮਿਸ਼ਨ ਦੀ ਸਥਾਪਨਾ ਹੋਈ)। ਵਿਰੋਧੀ ਧਿਰ ਦੇ ਨੇਤਾ (Leader of Opposition) ਲਈ ਸਦਨ ਦੀਆਂ ਕੁੱਲ ਸੀਟਾਂ ਦਾ ਘੱਟੋ-ਘੱਟ <strong>1/10ਵਾਂ ਹਿੱਸਾ (10% ਅਰਥਾਤ ਲੋਕ ਸਭਾ ਵਿੱਚ 55 ਸੀਟਾਂ)</strong> ਜ਼ਰੂਰੀ ਹੈ।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · ਮੱਧਮ ਪੱਧਰ (ਜਮਾਤ 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. ਭਾਗ II ਨਾਗਰਿਕਤਾ (ਅਨੁਛੇਦ 5–11), ਐਕਟ 1955 ਅਤੇ ਚੋਣ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 324)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਸੰਵਿਧਾਨ ਦਾ ਭਾਗ II (ਅਨੁਛੇਦ 5–11):</strong> ਅਨੁਛੇਦ 5 (ਨਿਵਾਸ ਦੁਆਰਾ), ਅਨੁਛੇਦ 6 (ਪਾਕਿਸਤਾਨ ਤੋਂ ਆਏ ਪ੍ਰਵਾਸੀ — 19 ਜੁਲਾਈ 1948 ਪਰਮਿਟ ਮਿਤੀ), ਅਨੁਛੇਦ 7 (ਪਾਕਿਸਤਾਨ ਗਏ ਪ੍ਰਵਾਸੀ), ਅਨੁਛੇਦ 8 (ਵਿਦੇਸ਼ਾਂ ਵਿੱਚ ਰਹਿੰਦੇ ਭਾਰਤੀ ਮੂਲ ਦੇ ਵਿਅਕਤੀ), ਅਨੁਛੇਦ 9 (ਵਿਦੇਸ਼ੀ ਨਾਗਰਿਕਤਾ ਸਵੈ-ਇੱਛਾ ਨਾਲ ਲੈਣ 'ਤੇ ਭਾਰਤੀ ਨਾਗਰਿਕਤਾ ਖ਼ਤਮ), ਅਨੁਛੇਦ 11 (ਸੰਸਦ ਨੂੰ ਨਾਗਰਿਕਤਾ ਸਬੰਧੀ ਕਾਨੂੰਨ ਬਣਾਉਣ ਦਾ ਅਧਿਕਾਰ)।</li>
              <li><strong>ਨਾਗਰਿਕਤਾ ਐਕਟ, 1955:</strong> ਪ੍ਰਾਪਤੀ ਦੇ <strong>5 ਤਰੀਕੇ</strong> (ਜਨਮ, ਵੰਸ਼, ਪੰਜੀਕਰਨ/Registration, ਦੇਸੀਕਰਨ/Naturalisation, ਭੂ-ਭਾਗ ਦਾ ਰਲੇਵਾਂ) ਅਤੇ ਸਮਾਪਤੀ ਦੇ <strong>3 ਤਰੀਕੇ</strong> (ਸਵੈ-ਤਿਆਗ/Renunciation, ਬਰਖ਼ਾਸਤਗੀ/Termination, ਵਾਂਝੇ ਕਰਨਾ/Deprivation)। 2015 ਵਿੱਚ PIO ਕਾਰਡ ਨੂੰ OCI ਵਿੱਚ ਮਿਲਾ ਦਿੱਤਾ ਗਿਆ।</li>
              <li><strong>ਸਿਰਫ਼ ਨਾਗਰਿਕਾਂ ਨੂੰ ਪ੍ਰਾਪਤ ਮੌਲਿਕ ਅਧਿਕਾਰ:</strong> ਅਨੁਛੇਦ <strong>15, 16, 19, 29 ਅਤੇ 30</strong> ਸਿਰਫ਼ ਭਾਰਤੀ ਨਾਗਰਿਕਾਂ ਨੂੰ ਮਿਲਦੇ ਹਨ, ਵਿਦੇਸ਼ੀਆਂ ਨੂੰ ਨਹੀਂ।</li>
              <li><strong>ਭਾਰਤੀ ਚੋਣ ਕਮਿਸ਼ਨ (ਭਾਗ XV, ਅਨੁਛੇਦ 324–329):</strong> 1 ਮੁੱਖ ਚੋਣ ਕਮਿਸ਼ਨਰ (CEC) + 2 ਚੋਣ ਕਮਿਸ਼ਨਰ (ਕਾਰਜਕਾਲ 6 ਸਾਲ ਜਾਂ 65 ਸਾਲ ਦੀ ਉਮਰ)। <strong>2023 ਦੇ ਐਕਟ</strong> ਅਨੁਸਾਰ ਨਿਯੁਕਤੀ <strong>ਪ੍ਰਧਾਨ ਮੰਤਰੀ + ਕੇਂਦਰੀ ਕੈਬਨਿਟ ਮੰਤਰੀ + ਲੋਕ ਸਭਾ ਵਿੱਚ ਵਿਰੋਧੀ ਧਿਰ ਦੇ ਨੇਤਾ</strong> ਦੀ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼ 'ਤੇ ਰਾਸ਼ਟਰਪਤੀ ਦੁਆਰਾ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਪਹਿਲੇ CEC: <strong>ਸੁਕੁਮਾਰ ਸੇਨ</strong>; ਪਹਿਲੀ ਮਹਿਲਾ CEC: <strong>ਵੀ.ਐਸ. ਰਮਾਦੇਵੀ</strong>।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · ਉੱਚ ਪੱਧਰ (ਜਮਾਤ 11–12 / ਗ੍ਰੈਜੂਏਸ਼ਨ)</span>
            <h3 class="text-xl font-bold text-white">3. EVM/VVPAT, ਹੱਦਬੰਦੀ, ਦਲ-ਬਦਲੀ ਵਿਰੋਧੀ ਕਾਨੂੰਨ ਤੇ ਰਾਸ਼ਟਰੀ ਪਾਰਟੀ ਮਾਪਦੰਡ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>EVM, VVPAT ਅਤੇ NOTA:</strong> ਪਹਿਲੀ EVM ਵਰਤੋਂ <strong>ਪਾਰੂਰ (ਕੇਰਲ, ਮਈ 1982)</strong> ਵਿੱਚ ਹੋਈ; ਪਹਿਲੀ VVPAT ਵਰਤੋਂ <strong>ਨੋਕਸੇਨ (ਨਾਗਾਲੈਂਡ, 2013 — 7 ਸਕਿੰਟ ਪਰਚੀ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ)</strong> ਵਿੱਚ ਹੋਈ; NOTA 2013 (PUCL ਕੇਸ) ਵਿੱਚ ਲਾਗੂ ਹੋਇਆ।</li>
              <li><strong>ਹੱਦਬੰਦੀ ਕਮਿਸ਼ਨ (Delimitation Commission — ਅਨੁਛੇਦ 82):</strong> ਹੁਣ ਤੱਕ 4 ਵਾਰ ਗਠਿਤ — <strong>1952, 1962, 1972 ਅਤੇ 2002</strong> (ਜਸਟਿਸ ਕੁਲਦੀਪ ਸਿੰਘ)। <strong>84ਵੀਂ ਸੋਧ (2001)</strong> ਤਹਿਤ ਲੋਕ ਸਭਾ ਅਤੇ ਵਿਧਾਨ ਸਭਾਵਾਂ ਦੀਆਂ ਸੀਟਾਂ ਦੀ ਗਿਣਤੀ <strong>2026</strong> ਤੋਂ ਬਾਅਦ ਦੀ ਪਹਿਲੀ ਮਰਦਮਸ਼ੁਮਾਰੀ ਤੱਕ ਸਥਿਰ ਰੱਖੀ ਗਈ ਹੈ।</li>
              <li><strong>10ਵੀਂ ਅਨੁਸੂਚੀ — ਦਲ-ਬਦਲੀ ਵਿਰੋਧੀ ਕਾਨੂੰਨ (52ਵੀਂ ਸੋਧ 1985 ਅਤੇ 91ਵੀਂ ਸੋਧ 2003):</strong> 91ਵੀਂ ਸੋਧ ਰਾਹੀਂ 1/3 ਵੰਡ ਦੀ ਛੋਟ ਖ਼ਤਮ ਕਰਕੇ ਸਿਰਫ਼ <strong>2/3 ਰਲੇਵੇਂ (Merger)</strong> ਨੂੰ ਮਾਨਤਾ ਦਿੱਤੀ ਗਈ ਅਤੇ ਮੰਤਰੀ ਮੰਡਲ ਦਾ ਆਕਾਰ ਸਦਨ ਦੀ ਕੁੱਲ ਗਿਣਤੀ ਦੇ <strong>15%</strong> ਤੱਕ ਸੀਮਤ ਕੀਤਾ ਗਿਆ। ਫ਼ੈਸਲਾ ਸਪੀਕਰ/ਚੇਅਰਮੈਨ ਕਰਦਾ ਹੈ ਜੋ ਨਿਆਂਇਕ ਸਮੀਖਿਆ ਦੇ ਅਧੀਨ ਹੈ (<em>Kihoto Hollohan</em> ਕੇਸ, 1992)।</li>
              <li><strong>ਰਾਸ਼ਟਰੀ ਪਾਰਟੀ (National Party) ਮਾਨਤਾ ਮਾਪਦੰਡ:</strong> (1) 4 ਜਾਂ ਵੱਧ ਰਾਜਾਂ ਵਿੱਚ 6% ਜਾਇਜ਼ ਵੋਟਾਂ + 4 ਲੋਕ ਸਭਾ ਸੀਟਾਂ, ਜਾਂ (2) ਘੱਟੋ-ਘੱਟ 3 ਰਾਜਾਂ ਤੋਂ ਲੋਕ ਸਭਾ ਦੀਆਂ 2% (11) ਸੀਟਾਂ, ਜਾਂ (3) ਘੱਟੋ-ਘੱਟ <strong>4 ਰਾਜਾਂ ਵਿੱਚ ਰਾਜ ਪਾਰਟੀ (State Party)</strong> ਵਜੋਂ ਮਾਨਤਾ। ਵਰਤਮਾਨ ਵਿੱਚ ਭਾਰਤ ਵਿੱਚ <strong>6 ਰਾਸ਼ਟਰੀ ਪਾਰਟੀਆਂ</strong> ਹਨ: BJP, INC, BSP, CPI(M), NPP ਅਤੇ <strong>AAP</strong>।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 आधिकारिक ERB पाठ्यक्रम मानचित्रण (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर SST के आधिकारिक शीर्षक <strong>"Citizenship"</strong>, <strong>"Election Procedure"</strong> तथा <strong>"Party System in India"</strong> को <strong>B → I → A</strong> क्रम में प्रस्तुत किया गया है।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · आधारभूत स्तर (कक्षा 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. एकल नागरिकता, वयस्क मताधिकार (अनुच्छेद 326) एवं राजनीतिक दल</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>एकल नागरिकता (Single Citizenship):</strong> ब्रिटेन के संविधान से गृहीत; अमेरिका व स्विट्ज़रलैंड की तरह दोहरी नागरिकता नहीं है।</li>
              <li><strong>सार्वभौमिक वयस्क मताधिकार (अनुच्छेद 326):</strong> <strong>61वें संविधान संशोधन अधिनियम, 1988</strong> (प्रभावी 28 मार्च 1989) द्वारा मतदान की आयु <strong>21 वर्ष से घटाकर 18 वर्ष</strong> की गई।</li>
              <li><strong>राष्ट्रीय मतदाता दिवस:</strong> प्रतिवर्ष <strong>25 जनवरी</strong> को मनाया जाता है (25 जनवरी 1950 को निर्वाचन आयोग की स्थापना)। विपक्ष के नेता (Leader of Opposition) की मान्यता हेतु सदन की कुल सदस्य संख्या का न्यूनतम <strong>1/10वाँ भाग (10% अर्थात लोकसभा में 55 सीटें)</strong> आवश्यक है।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · मध्यम स्तर (कक्षा 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. भाग II नागरिकता (अनुच्छेद 5–11), अधिनियम 1955 एवं निर्वाचन आयोग (अनुच्छेद 324)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>संविधान का भाग II (अनुच्छेद 5–11):</strong> अनुच्छेद 5 (अधिवास से), अनुच्छेद 6 (पाकिस्तान से आए प्रवासी — 19 जुलाई 1948 परमिट तिथि), अनुच्छेद 7 (पाकिस्तान को प्रव्रजन करने वाले), अनुच्छेद 8 (भारत के बाहर रहने वाले भारतीय मूल के व्यक्ति), अनुच्छेद 9 (विदेशी नागरिकता स्वेच्छा से अर्जित करने पर भारतीय नागरिकता समाप्त), अनुच्छेद 11 (संसद को नागरिकता के विनियमन की शक्ति)।</li>
              <li><strong>नागरिकता अधिनियम, 1955:</strong> अर्जन के <strong>5 तरीके</strong> (जन्म, वंश, पंजीकरण, देशीयकरण, क्षेत्र समाविष्टि) तथा समाप्ति के <strong>3 तरीके</strong> (स्वैच्छिक त्याग/Renunciation, बर्खास्तगी/Termination, वंचित करना/Deprivation)। जनवरी 2015 में PIO कार्ड का OCI कार्ड में विलय कर दिया गया।</li>
              <li><strong>केवल नागरिकों को प्राप्त मौलिक अधिकार:</strong> अनुच्छेद <strong>15, 16, 19, 29 और 30</strong> केवल भारतीय नागरिकों को प्राप्त हैं, विदेशियों को नहीं।</li>
              <li><strong>भारत निर्वाचन आयोग (भाग XV, अनुच्छेद 324–329):</strong> 1 मुख्य चुनाव आयुक्त (CEC) + 2 चुनाव आयुक्त (कार्यकाल 6 वर्ष या 65 वर्ष आयु)। <strong>2023 के अधिनियम</strong> के तहत नियुक्ति <strong>प्रधानमंत्री + केंद्रीय कैबिनेट मंत्री + लोकसभा में विपक्ष के नेता</strong> की चयन समिति की सिफारिश पर राष्ट्रपति द्वारा होती है। प्रथम CEC: <strong>सुकुमार सेन</strong>; प्रथम महिला CEC: <strong>वी.एस. रमादेवी</strong>।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · उन्नत स्तर (कक्षा 11–12 / स्नातक)</span>
            <h3 class="text-xl font-bold text-white">3. EVM/VVPAT, परिसीमन, दल-बदल विरोधी कानून एवं राष्ट्रीय दल मान्यता</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>EVM, VVPAT एवं NOTA:</strong> प्रथम EVM प्रयोग <strong>पारुर (केरल, मई 1982)</strong> में हुआ; प्रथम VVPAT प्रयोग <strong>नोकसेन (नागालैंड, 2013 — पर्ची 7 सेकंड दिखती है)</strong> में हुआ; NOTA 2013 (PUCL वाद) से लागू हुआ।</li>
              <li><strong>परिसीमन आयोग (Delimitation Commission — अनुच्छेद 82):</strong> अब तक 4 बार गठित — <strong>1952, 1962, 1972 और 2002</strong> (न्यायमूर्ति कुलदीप सिंह)। <strong>84वें संशोधन (2001)</strong> द्वारा लोकसभा व विधानसभाओं की सीटें <strong>2026</strong> के बाद की पहली जनगणना तक स्थिर (freeze) रखी गई हैं।</li>
              <li><strong>10वीं अनुसूची — दल-बदल विरोधी कानून (52वां संशोधन 1985 व 91वां संशोधन 2003):</strong> 91वें संशोधन द्वारा 1/3 विभाजन अपवाद समाप्त कर केवल <strong>2/3 विलय (Merger)</strong> को मान्यता दी गई तथा मंत्रिपरिषद का आकार सदन की कुल सदस्य संख्या के <strong>15%</strong> तक सीमित किया गया। निर्णय पीठासीन अधिकारी (अध्यक्ष/सभापति) करता है जो न्यायिक समीक्षा के अधीन है (<em>किहोतो होलोहन</em> वाद, 1992)।</li>
              <li><strong>राष्ट्रीय दल (National Party) मान्यता मानदंड:</strong> (1) 4 या अधिक राज्यों में 6% वैध मत + 4 लोकसभा सीटें, या (2) कम-से-कम 3 राज्यों से लोकसभा की 2% (11) सीटें, या (3) कम-से-कम <strong>4 राज्यों में राज्य दल (State Party)</strong> के रूप में मान्यता। वर्तमान में भारत में <strong>6 राष्ट्रीय दल</strong> हैं: BJP, INC, BSP, CPI(M), NPP और <strong>AAP</strong>।</li>
            </ul>
          </div>
        </div>
      `,
    },
    summary: {
      en: 'Covers Citizenship (Part II Articles 5–11, Citizenship Act 1955: 5 acquisition modes & 3 loss modes, OCI vs NRI, citizen-only FRs Arts 15/16/19/29/30), Election Procedure (Part XV Art 324 ECI, 2023 Appointment Act, FPTP vs PR-STV, EVM 1982, VVPAT 2013, Delimitation Commissions, RPA 1950/1951, 10th Schedule Anti-Defection Law), and Party System in India (6 National Parties & recognition criteria).',
      pa: 'ਨਾਗਰਿਕਤਾ (ਭਾਗ II ਅਨੁਛੇਦ 5–11, ਨਾਗਰਿਕਤਾ ਐਕਟ 1955: ਪ੍ਰਾਪਤੀ ਦੇ 5 ਤੇ ਸਮਾਪਤੀ ਦੇ 3 ਤਰੀਕੇ, OCI, ਸਿਰਫ਼ ਨਾਗਰਿਕਾਂ ਲਈ ਮੌਲਿਕ ਅਧਿਕਾਰ 15/16/19/29/30), ਚੋਣ ਪ੍ਰਕਿਰਿਆ (ਅਨੁਛੇਦ 324 ਚੋਣ ਕਮਿਸ਼ਨ, 2023 ਨਿਯੁਕਤੀ ਐਕਟ, EVM 1982, VVPAT 2013, ਹੱਦਬੰਦੀ ਕਮਿਸ਼ਨ, RPA 1950/51, 10ਵੀਂ ਅਨੁਸੂਚੀ ਦਲ-ਬਦਲੀ ਕਾਨੂੰਨ) ਅਤੇ ਭਾਰਤ ਵਿੱਚ ਦਲ ਪ੍ਰਣਾਲੀ (6 ਰਾਸ਼ਟਰੀ ਪਾਰਟੀਆਂ) ਦਾ ਸੰਪੂਰਨ ਸਾਰ।',
      hi: 'नागरिकता (भाग II अनुच्छेद 5–11, नागरिकता अधिनियम 1955: अर्जन के 5 व समाप्ति के 3 तरीके, OCI, केवल नागरिकों के मौलिक अधिकार 15/16/19/29/30), निर्वाचन प्रक्रिया (अनुच्छेद 324 निर्वाचन आयोग, 2023 नियुक्ति अधिनियम, EVM 1982, VVPAT 2013, परिसीमन आयोग, RPA 1950/51, 10वीं अनुसूची दल-बदल कानून) और भारत में दलीय प्रणाली (6 राष्ट्रीय दल) का संपूर्ण सार।',
    },
    keyNotes: {
      en: [
        '[B] Single Citizenship in India is borrowed from the British Constitution; Universal Adult Franchise is in Article 326.',
        '[B] 61st Constitutional Amendment Act, 1988 (effective 1989) lowered voting age from 21 to 18 years.',
        '[I] Part II (Articles 5–11) governs Citizenship; Article 11 empowers Parliament to enact the Citizenship Act, 1955.',
        '[I] Five modes of acquiring citizenship (B-D-R-N-I): Birth, Descent, Registration, Naturalisation, Incorporation of Territory.',
        '[I] Three modes of losing citizenship (R-T-D): Renunciation, Termination, Deprivation.',
        '[I] Fundamental Rights available ONLY to Indian citizens: Articles 15, 16, 19, 29, and 30.',
        '[I] Election Commission of India (Art 324) was established on 25 Jan 1950 (National Voters’ Day); Sukumar Sen was the 1st CEC.',
        '[A] Under the CEC and Other ECs Act, 2023, the Selection Committee comprises the PM, a Union Cabinet Minister, and the Leader of Opposition in Lok Sabha.',
        '[A] 10th Schedule (Anti-Defection Law) was added by the 52nd Amendment (1985); the 91st Amendment (2003) required a 2/3rd merger and capped ministries at 15%.',
        '[A] India currently has 6 recognised National Parties (BJP, INC, BSP, CPI-M, NPP, AAP); Delimitation Commissions were set up in 1952, 1962, 1972, and 2002.',
      ],
      pa: [
        '[B] ਭਾਰਤ ਵਿੱਚ ਇਕਹਿਰੀ ਨਾਗਰਿਕਤਾ ਬ੍ਰਿਟੇਨ ਤੋਂ ਲਈ ਗਈ ਹੈ; ਬਾਲਗ ਮੱਤ-ਅਧਿਕਾਰ ਅਨੁਛੇਦ 326 ਵਿੱਚ ਹੈ।',
        '[B] 61ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (1988) ਰਾਹੀਂ ਵੋਟ ਪਾਉਣ ਦੀ ਉਮਰ 21 ਤੋਂ ਘਟਾ ਕੇ 18 ਸਾਲ ਕੀਤੀ ਗਈ।',
        '[I] ਭਾਗ II (ਅਨੁਛੇਦ 5–11) ਨਾਗਰਿਕਤਾ ਨਾਲ ਸਬੰਧਤ ਹੈ; ਅਨੁਛੇਦ 11 ਸੰਸਦ ਨੂੰ ਕਾਨੂੰਨ ਬਣਾਉਣ ਦੀ ਸ਼ਕਤੀ ਦਿੰਦਾ ਹੈ।',
        '[I] ਨਾਗਰਿਕਤਾ ਪ੍ਰਾਪਤੀ ਦੇ 5 ਤਰੀਕੇ: ਜਨਮ, ਵੰਸ਼, ਪੰਜੀਕਰਨ, ਦੇਸੀਕਰਨ ਅਤੇ ਭੂ-ਭਾਗ ਦਾ ਰਲੇਵਾਂ।',
        '[I] ਨਾਗਰਿਕਤਾ ਸਮਾਪਤੀ ਦੇ 3 ਤਰੀਕੇ: ਸਵੈ-ਤਿਆਗ (Renunciation), ਬਰਖ਼ਾਸਤਗੀ (Termination) ਅਤੇ ਵਾਂਝੇ ਕਰਨਾ (Deprivation)।',
        '[I] ਸਿਰਫ਼ ਭਾਰਤੀ ਨਾਗਰਿਕਾਂ ਨੂੰ ਪ੍ਰਾਪਤ ਮੌਲਿਕ ਅਧਿਕਾਰ: ਅਨੁਛੇਦ 15, 16, 19, 29 ਅਤੇ 30।',
        '[I] ਭਾਰਤੀ ਚੋਣ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 324) ਦੀ ਸਥਾਪਨਾ 25 ਜਨਵਰੀ 1950 ਨੂੰ ਹੋਈ; ਪਹਿਲੇ CEC ਸੁਕੁਮਾਰ ਸੇਨ ਸਨ।',
        '[A] 2023 ਦੇ ਐਕਟ ਅਨੁਸਾਰ CEC ਦੀ ਚੋਣ ਕਮੇਟੀ ਵਿੱਚ ਪ੍ਰਧਾਨ ਮੰਤਰੀ, ਇੱਕ ਕੇਂਦਰੀ ਕੈਬਨਿਟ ਮੰਤਰੀ ਅਤੇ ਲੋਕ ਸਭਾ ਵਿੱਚ ਵਿਰੋਧੀ ਧਿਰ ਦਾ ਨੇਤਾ ਸ਼ਾਮਲ ਹਨ।',
        '[A] 10ਵੀਂ ਅਨੁਸੂਚੀ (ਦਲ-ਬਦਲੀ ਕਾਨੂੰਨ) 52ਵੀਂ ਸੋਧ (1985) ਰਾਹੀਂ ਜੁੜੀ; 91ਵੀਂ ਸੋਧ (2003) ਨੇ 2/3 ਰਲੇਵਾਂ ਲਾਜ਼ਮੀ ਕੀਤਾ।',
        '[A] ਭਾਰਤ ਵਿੱਚ ਵਰਤਮਾਨ ਸਮੇਂ 6 ਰਾਸ਼ਟਰੀ ਪਾਰਟੀਆਂ ਹਨ; ਹੱਦਬੰਦੀ ਕਮਿਸ਼ਨ 1952, 1962, 1972 ਅਤੇ 2002 ਵਿੱਚ ਬਣੇ।',
      ],
      hi: [
        '[B] भारत में एकल नागरिकता ब्रिटेन से ली गई है; वयस्क मताधिकार अनुच्छेद 326 में है।',
        '[B] 61वें संविधान संशोधन (1988) द्वारा मतदान की आयु 21 से घटाकर 18 वर्ष की गई।',
        '[I] भाग II (अनुच्छेद 5–11) नागरिकता से संबंधित है; अनुच्छेद 11 संसद को कानून बनाने की शक्ति देता है।',
        '[I] नागरिकता अर्जन के 5 तरीके: जन्म, वंश, पंजीकरण, देशीयकरण और क्षेत्र समाविष्टि।',
        '[I] नागरिकता समाप्ति के 3 तरीके: स्वैच्छिक त्याग (Renunciation), बर्खास्तगी (Termination) और वंचित करना (Deprivation)।',
        '[I] केवल भारतीय नागरिकों को प्राप्त मौलिक अधिकार: अनुच्छेद 15, 16, 19, 29 और 30।',
        '[I] भारत निर्वाचन आयोग (अनुच्छेद 324) की स्थापना 25 जनवरी 1950 को हुई; प्रथम CEC सुकुमार सेन थे।',
        '[A] 2023 के अधिनियम के अनुसार CEC चयन समिति में प्रधानमंत्री, एक केंद्रीय कैबिनेट मंत्री और लोकसभा में विपक्ष के नेता शामिल हैं।',
        '[A] 10वीं अनुसूची (दल-बदल कानून) 52वें संशोधन (1985) से जुड़ी; 91वें संशोधन (2003) ने 2/3 विलय अनिवार्य किया।',
        '[A] भारत में वर्तमान में 6 राष्ट्रीय दल हैं; परिसीमन आयोग 1952, 1962, 1972 और 2002 में गठित हुए।',
      ],
    },
    workedExamples: [
      {
        title: {
          en: 'Applying the 10th Schedule Anti-Defection Law to Independent vs Nominated MPs',
          pa: 'ਆਜ਼ਾਦ ਬਨਾਮ ਨਾਮਜ਼ਦ ਸੰਸਦ ਮੈਂਬਰਾਂ ਉੱਤੇ 10ਵੀਂ ਅਨੁਸੂਚੀ ਦਾ ਨਿਯਮ',
          hi: 'निर्दलीय बनाम मनोनीत सांसदों पर 10वीं अनुसूची का नियम',
        },
        problem: {
          en: 'Member X is elected to the Lok Sabha as an Independent candidate and joins Party A two months after the election. Member Y is nominated to the Rajya Sabha and joins Party B four months after taking oath. Who is disqualified under the 10th Schedule?',
          pa: 'ਮੈਂਬਰ X ਆਜ਼ਾਦ ਉਮੀਦਵਾਰ ਵਜੋਂ ਜਿੱਤਣ ਤੋਂ 2 ਮਹੀਨੇ ਬਾਅਦ ਪਾਰਟੀ A ਵਿੱਚ ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ। ਮੈਂਬਰ Y ਰਾਜ ਸਭਾ ਵਿੱਚ ਨਾਮਜ਼ਦ ਹੋਣ ਤੋਂ 4 ਮਹੀਨੇ ਬਾਅਦ ਪਾਰਟੀ B ਵਿੱਚ ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ। 10ਵੀਂ ਅਨੁਸੂਚੀ ਤਹਿਤ ਕੌਣ ਅਯੋਗ ਹੋਵੇਗਾ?',
          hi: 'सदस्य X निर्दलीय जीतने के 2 महीने बाद पार्टी A में शामिल होता है। सदस्य Y राज्यसभा में मनोनीत होने के 4 महीने बाद पार्टी B में शामिल होता है। 10वीं अनुसूची के तहत कौन अयोग्य होगा?',
        },
        steps: {
          en: [
            'Check Rule for Independent Members: An Independent MP/MLA becomes disqualified immediately if they join ANY political party at any time after the election.',
            'Check Rule for Nominated Members: A Nominated MP/MLA is allowed to join a political party within 6 months of taking their seat; they are disqualified only if they join AFTER 6 months.',
            'Therefore, Member X is disqualified, whereas Member Y (joined within 4 months < 6 months) is NOT disqualified.',
          ],
          pa: [
            'ਆਜ਼ਾਦ ਮੈਂਬਰ (Independent) ਚੋਣ ਤੋਂ ਬਾਅਦ ਕਿਸੇ ਵੀ ਸਮੇਂ ਪਾਰਟੀ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਣ ਤੇ ਤੁਰੰਤ ਅਯੋਗ ਹੋ ਜਾਂਦਾ ਹੈ।',
            'ਨਾਮਜ਼ਦ ਮੈਂਬਰ (Nominated) ਸਹੁੰ ਚੁੱਕਣ ਦੇ 6 ਮਹੀਨਿਆਂ ਦੇ ਅੰਦਰ ਕਿਸੇ ਪਾਰਟੀ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋ ਸਕਦਾ ਹੈ।',
            'ਇਸ ਲਈ ਸਿਰਫ਼ ਮੈਂਬਰ X ਅਯੋਗ ਹੋਵੇਗਾ, ਮੈਂਬਰ Y ਨਹੀਂ।',
          ],
          hi: [
            'निर्दलीय सदस्य (Independent) चुनाव के बाद किसी भी राजनीतिक दल में शामिल होने पर तुरंत अयोग्य हो जाता है।',
            'मनोनीत सदस्य (Nominated) शपथ लेने के 6 माह के भीतर किसी दल में शामिल हो सकता है।',
            'अतः केवल सदस्य X अयोग्य होगा, सदस्य Y नहीं।',
          ],
        },
        solution: {
          en: 'Only Member X (Independent) is disqualified; Member Y (Nominated) is protected because they joined within the 6-month window.',
          pa: 'ਸਿਰਫ਼ ਮੈਂਬਰ X (ਆਜ਼ਾਦ) ਅਯੋਗ ਹੋਵੇਗਾ; ਮੈਂਬਰ Y (ਨਾਮਜ਼ਦ) 6 ਮਹੀਨਿਆਂ ਦੀ ਸਮਾਂ-ਸੀਮਾ ਦੇ ਅੰਦਰ ਹੋਣ ਕਾਰਨ ਯੋਗ ਰਹੇਗਾ।',
          hi: 'केवल सदस्य X (निर्दलीय) अयोग्य होगा; सदस्य Y (मनोनीत) 6 माह की समय-सीमा के भीतर शामिल होने के कारण योग्य रहेगा।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'The Chief Election Commissioner and the two other Election Commissioners have identical constitutional protection against removal.',
          pa: 'ਮੁੱਖ ਚੋਣ ਕਮਿਸ਼ਨਰ (CEC) ਅਤੇ ਬਾਕੀ ਦੋ ਚੋਣ ਕਮਿਸ਼ਨਰਾਂ ਨੂੰ ਹਟਾਉਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਬਿਲਕੁਲ ਇੱਕੋ ਜਿਹੀ ਹੈ।',
          hi: 'मुख्य चुनाव आयुक्त (CEC) और अन्य दो चुनाव आयुक्तों को पद से हटाने की प्रक्रिया बिल्कुल एक समान है।',
        },
        correction: {
          en: 'While all three have equal salary and equal voting power (decisions by majority), under Article 324(5) ONLY the CEC enjoys removal protection like a Supreme Court Judge; the other Election Commissioners can be removed by the President on the recommendation of the CEC.',
          pa: 'ਭਾਵੇਂ ਤਿੰਨਾਂ ਦੀਆਂ ਸ਼ਕਤੀਆਂ ਅਤੇ ਤਨਖ਼ਾਹ ਬਰਾਬਰ ਹਨ, ਪਰ ਅਨੁਛੇਦ 324(5) ਤਹਿਤ ਸਿਰਫ਼ CEC ਨੂੰ ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਜੱਜ ਵਾਂਗ ਹਟਾਇਆ ਜਾ ਸਕਦਾ ਹੈ; ਬਾਕੀ ਚੋਣ ਕਮਿਸ਼ਨਰਾਂ ਨੂੰ CEC ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ ਰਾਸ਼ਟਰਪਤੀ ਹਟਾ ਸਕਦਾ ਹੈ।',
          hi: 'यद्यपि तीनों के वेतन व मतदान अधिकार समान हैं, परंतु अनुच्छेद 324(5) के तहत केवल CEC को सर्वोच्च न्यायालय के न्यायाधीश की भाँति हटाया जा सकता है; अन्य चुनाव आयुक्तों को CEC की सिफारिश पर राष्ट्रपति हटा सकते हैं।',
        },
        whyItMatters: {
          en: 'This exact constitutional nuance under Article 324(5) is a classic statement-based MCQ trap in Punjab Master Cadre SST.',
          pa: 'ਅਨੁਛੇਦ 324(5) ਦਾ ਇਹ ਬਾਰੀਕ ਫ਼ਰਕ ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ ਕਥਨ-ਅਧਾਰਤ ਪ੍ਰਸ਼ਨਾਂ ਵਿੱਚ ਅਕਸਰ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: 'अनुच्छेद 324(5) का यह सूक्ष्म अंतर मास्टर कैडर SST के कथन-आधारित प्रश्नों में बार-बार पूछा जाता है।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Citizen-Only FRs = 15, 16, 19, 29, 30. Acquisition of Citizenship (1955 Act) = B-D-R-N-I (5); Loss = R-T-D (3).',
          'Election Articles: Art 324 (ECI), Art 325 (Single electoral roll), Art 326 (Adult suffrage 18+ via 61st Amendment 1988), Art 329 (Bar to court interference except via Election Petition).',
          'Electoral Reform Committees Chronology: Tarkunde (1974 — 18 yr age) → Dinesh Goswami (1990) → Vohra (1993 — Criminalisation) → Indrajit Gupta (1998 — State funding of elections).',
          '6 National Parties (as of 2023 ECI review): BJP, INC, BSP, CPI(M), NPP, AAP.',
        ],
        pa: [
          'ਸਿਰਫ਼ ਨਾਗਰਿਕਾਂ ਲਈ ਮੌਲਿਕ ਅਧਿਕਾਰ = 15, 16, 19, 29, 30। ਨਾਗਰਿਕਤਾ ਪ੍ਰਾਪਤੀ = B-D-R-N-I (5); ਸਮਾਪਤੀ = R-T-D (3)।',
          'ਚੋਣ ਅਨੁਛੇਦ: 324 (ਚੋਣ ਕਮਿਸ਼ਨ), 326 (18+ ਵੋਟ ਅਧਿਕਾਰ, 61ਵੀਂ ਸੋਧ 1988)।',
          'ਚੋਣ ਸੁਧਾਰ ਕਮੇਟੀਆਂ: ਤਾਰਕੁੰਡੇ (1974) → ਦਿਨੇਸ਼ ਗੋਸਵਾਮੀ (1990) → ਵੋਹਰਾ (1993) → ਇੰਦਰਜੀਤ ਗੁਪਤਾ (1998 — ਰਾਜ ਦੁਆਰਾ ਚੋਣ ਫੰਡਿੰਗ)।',
        ],
        hi: [
          'केवल नागरिकों के मौलिक अधिकार = 15, 16, 19, 29, 30। नागरिकता अर्जन = B-D-R-N-I (5); समाप्ति = R-T-D (3)।',
          'निर्वाचन अनुच्छेद: 324 (निर्वाचन आयोग), 326 (18+ मताधिकार, 61वां संशोधन 1988)।',
          'चुनाव सुधार समितियाँ: तारकुंडे (1974) → दिनेश गोस्वामी (1990) → वोहरा (1993) → इंद्रजीत गुप्त (1998 — चुनाव का राज्य वित्तपोषण)।',
        ],
      },
      examTraps: {
        en: [
          'ECI (Art 324) conducts elections to Parliament, State Legislatures, President, and Vice-President; it does NOT conduct Panchayat/Municipal elections (those are conducted by the State Election Commission under Arts 243K & 243ZA).',
          'If NOTA receives the highest number of votes in a constituency, the candidate with the next highest valid votes is still declared elected (NOTA has no legal power to force a re-election in Lok Sabha/Assembly polls).',
        ],
        pa: [
          'ਭਾਰਤੀ ਚੋਣ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 324) ਪੰਚਾਇਤ ਜਾਂ ਨਗਰ ਨਿਗਮ ਚੋਣਾਂ ਨਹੀਂ ਕਰਵਾਉਂਦਾ; ਉਹ ਰਾਜ ਚੋਣ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 243K ਤੇ 243ZA) ਕਰਵਾਉਂਦਾ ਹੈ।',
          'ਜੇਕਰ NOTA ਨੂੰ ਸਭ ਤੋਂ ਵੱਧ ਵੋਟਾਂ ਮਿਲਣ, ਤਾਂ ਵੀ ਦੂਜੇ ਨੰਬਰ ਤੇ ਸਭ ਤੋਂ ਵੱਧ ਵੋਟਾਂ ਲੈਣ ਵਾਲਾ ਉਮੀਦਵਾਰ ਹੀ ਜੇਤੂ ਐਲਾਨਿਆ ਜਾਂਦਾ ਹੈ।',
        ],
        hi: [
          'भारत निर्वाचन आयोग (अनुच्छेद 324) पंचायत या नगरपालिका चुनाव नहीं कराता; वे राज्य निर्वाचन आयोग (अनुच्छेद 243K व 243ZA) द्वारा कराए जाते हैं।',
          'यदि NOTA को सर्वाधिक मत मिलें, तब भी दूसरे सर्वाधिक वैध मत पाने वाला उम्मीदवार ही विजयी घोषित होता है।',
        ],
      },
    },
    flashcards: [
      {
        id: 'fc-cit-1',
        q: {
          en: '[Level B] Which Constitutional Amendment lowered the voting age from 21 to 18 years under Article 326?',
          pa: '[Level B] ਕਿਸ ਸੰਵਿਧਾਨਕ ਸੋਧ ਰਾਹੀਂ ਅਨੁਛੇਦ 326 ਤਹਿਤ ਵੋਟ ਪਾਉਣ ਦੀ ਉਮਰ 21 ਤੋਂ ਘਟਾ ਕੇ 18 ਸਾਲ ਕੀਤੀ ਗਈ?',
          hi: '[Level B] किस संविधान संशोधन द्वारा अनुच्छेद 326 के तहत मतदान की आयु 21 से घटाकर 18 वर्ष की गई?',
        },
        a: {
          en: '61st Constitutional Amendment Act, 1988 (enforced on 28 March 1989).',
          pa: '61ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ ਐਕਟ, 1988 (ਲਾਗੂ 28 ਮਾਰਚ 1989)।',
          hi: '61वां संविधान संशोधन अधिनियम, 1988 (प्रभावी 28 मार्च 1989)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-cit-2',
        q: {
          en: '[Level I] Which five Fundamental Rights are available exclusively to Indian citizens and denied to foreigners?',
          pa: '[Level I] ਕਿਹੜੇ ਪੰਜ ਮੌਲਿਕ ਅਧਿਕਾਰ ਸਿਰਫ਼ ਭਾਰਤੀ ਨਾਗਰਿਕਾਂ ਨੂੰ ਪ੍ਰਾਪਤ ਹਨ ਅਤੇ ਵਿਦੇਸ਼ੀਆਂ ਨੂੰ ਨਹੀਂ?',
          hi: '[Level I] कौन-से पाँच मौलिक अधिकार केवल भारतीय नागरिकों को प्राप्त हैं और विदेशियों को नहीं?',
        },
        a: {
          en: 'Articles 15, 16, 19, 29, and 30.',
          pa: 'ਅਨੁਛੇਦ 15, 16, 19, 29 ਅਤੇ 30।',
          hi: 'अनुच्छेद 15, 16, 19, 29 और 30।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-cit-3',
        q: {
          en: '[Level I] Where and in which year were EVMs first used experimentally in India?',
          pa: '[Level I] ਭਾਰਤ ਵਿੱਚ ਪਹਿਲੀ ਵਾਰ ਪ੍ਰਯੋਗ ਵਜੋਂ EVM ਦੀ ਵਰਤੋਂ ਕਦੋਂ ਅਤੇ ਕਿੱਥੇ ਕੀਤੀ ਗਈ?',
          hi: '[Level I] भारत में पहली बार प्रायोगिक तौर पर EVM का प्रयोग कब और कहाँ किया गया?',
        },
        a: {
          en: 'May 1982 in Parur Assembly Constituency of Kerala.',
          pa: 'ਮਈ 1982 ਵਿੱਚ ਕੇਰਲ ਦੇ ਪਾਰੂਰ ਵਿਧਾਨ ਸਭਾ ਹਲਕੇ ਵਿੱਚ।',
          hi: 'मई 1982 में केरल के पारुर विधानसभा क्षेत्र में।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-cit-4',
        q: {
          en: '[Level A] Which Supreme Court judgment held that the Speaker’s decision under the 10th Schedule is subject to Judicial Review?',
          pa: '[Level A] ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਕਿਸ ਫ਼ੈਸਲੇ ਵਿੱਚ ਕਿਹਾ ਗਿਆ ਕਿ 10ਵੀਂ ਅਨੁਸੂਚੀ ਤਹਿਤ ਸਪੀਕਰ ਦਾ ਫ਼ੈਸਲਾ ਨਿਆਂਇਕ ਸਮੀਖਿਆ ਦੇ ਅਧੀਨ ਹੈ?',
          hi: '[Level A] सर्वोच्च न्यायालय के किस निर्णय में कहा गया कि 10वीं अनुसूची के तहत अध्यक्ष का निर्णय न्यायिक समीक्षा के अधीन है?',
        },
        a: {
          en: 'Kihoto Hollohan vs Zachillhu (1992).',
          pa: 'ਕਿਹੋਤੋ ਹੋਲੋਹਨ ਬਨਾਮ ਜ਼ਾਚਿਲਹੂ (Kihoto Hollohan case, 1992)।',
          hi: 'किहोतो होलोहन बनाम ज़ाचिल्हू (Kihoto Hollohan case, 1992)।',
        },
        difficulty: 'hard',
      },
      {
        id: 'fc-cit-5',
        q: {
          en: '[Level A] Which 1998 Committee specifically examined and recommended partial State Funding of Elections in India?',
          pa: '[Level A] 1998 ਦੀ ਕਿਸ ਕਮੇਟੀ ਨੇ ਚੋਣਾਂ ਲਈ ਸਰਕਾਰੀ ਫੰਡਿੰਗ (State Funding of Elections) ਦੀ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ?',
          hi: '[Level A] 1998 की किस समिति ने चुनावों के राज्य वित्तपोषण (State Funding of Elections) की सिफारिश की?',
        },
        a: {
          en: 'Indrajit Gupta Committee on State Funding of Elections (1998).',
          pa: 'ਇੰਦਰਜੀਤ ਗੁਪਤਾ ਕਮੇਟੀ (1998)।',
          hi: 'इंद्रजीत गुप्त समिति (1998)।',
        },
        difficulty: 'hard',
      },
    ],
    videos: [],
    bookRefs: [
      {
        title: 'NCERT Class 11 Indian Constitution at Work (Ch 3: Election and Representation)',
        author: 'NCERT',
        chapters: 'Chapter 3',
        type: 'ncert',
      },
      {
        title: 'NCERT Class 10 Democratic Politics-II (Ch 6: Political Parties)',
        author: 'NCERT',
        chapters: 'Chapter 6',
        type: 'ncert',
      },
    ],
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      reviewerRecord: 'Fact-checked against Part II & Part XV of the Constitution of India, Citizenship Act 1955, and CEC Act 2023',
      verifiedSyllabusDenominator: 'ERB Punjab Master Cadre SST — Polity: Citizenship; Election Procedure; Party System in India',
    },
  },

  // ==========================================================================
  // 3. STATE GOVT, PUNJAB VIDHAN SABHA, FEDERALISM & PUNJAB PANCHAYATI RAJ
  // ==========================================================================
  'sst-state-govt-punjab-local': {
    id: 'sst-state-govt-punjab-local',
    topicId: 'sst-state-govt-punjab-local',
    subjectId: 'social-science',
    category: 'polity',
    practiceSource: 'authored-only',
    coverageStatus: 'complete',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    title: {
      en: 'State Govt, Punjab Vidhan Sabha, Federal System & Punjab Panchayati Raj Act 1994 (B → I → A)',
      pa: 'ਰਾਜ ਸਰਕਾਰ, ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ, ਸੰਘੀ ਪ੍ਰਣਾਲੀ ਅਤੇ ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ 1994 (B → I → A)',
      hi: 'राज्य सरकार, पंजाब विधान सभा, संघीय व्यवस्था एवं पंजाब पंचायती राज अधिनियम 1994 (B → I → A)',
    },
    examRelevance: 'Punjab Master Cadre SST (8–10 Qs — Official ERB Headings: State Level Govt, Indian Federal System, Democracy at Rural & Urban Level)',
    estimatedTime: '50 min',
    prerequisites: {
      en: ['Basic knowledge of Union Government and local bodies (Class 6–8 Civics)'],
      pa: ['ਕੇਂਦਰ ਸਰਕਾਰ ਅਤੇ ਸਥਾਨਕ ਸੰਸਥਾਵਾਂ ਦੀ ਮੁੱਢਲੀ ਸਮਝ (ਜਮਾਤ 6–8 ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ)'],
      hi: ['केंद्र सरकार और स्थानीय संस्थाओं की बुनियादी समझ (कक्षा 6–8 नागरिक शास्त्र)'],
    },
    learningObjectives: {
      en: [
        '[B] Understand the roles of Governor, Chief Minister, MLA, Punjab’s 117-seat unicameral Vidhan Sabha, and 3-tier Panchayati Raj.',
        '[I] Master Part VI (Articles 152–213), abolition of Punjab Legislative Council (1970), and Indian Federalism (7th Schedule Lists, Sarkaria & Punchhi Commissions, GST Council Art 279A, Finance Commission Art 280).',
        '[A] Deep-dive into the Punjab Panchayati Raj Act, 1994 (Gram Sabha, Gram Panchayat, Panchayat Samiti, Zila Parishad, 50% Women Reservation in Punjab) and Constitutional/Statutory Bodies (UPSC, PPSC, CAG, AG, NHRC).',
      ],
      pa: [
        '[B] ਰਾਜਪਾਲ, ਮੁੱਖ ਮੰਤਰੀ, ਵਿਧਾਇਕ (MLA), ਪੰਜਾਬ ਦੀ 117 ਸੀਟਾਂ ਵਾਲੀ ਇੱਕ-ਸਦਨੀ ਵਿਧਾਨ ਸਭਾ ਅਤੇ 3-ਪੱਧਰੀ ਪੰਚਾਇਤੀ ਰਾਜ ਦੀ ਸਮਝ।',
        '[I] ਭਾਗ VI (ਅਨੁਛੇਦ 152–213), ਪੰਜਾਬ ਵਿਧਾਨ ਪਰਿਸ਼ਦ ਦੀ ਸਮਾਪਤੀ (1970) ਅਤੇ ਭਾਰਤੀ ਸੰਘੀ ਪ੍ਰਣਾਲੀ (7ਵੀਂ ਅਨੁਸੂਚੀ, ਸਰਕਾਰੀਆ ਤੇ ਪੁੰਛੀ ਕਮਿਸ਼ਨ, GST ਕੌਂਸਲ 279A, ਵਿੱਤ ਕਮਿਸ਼ਨ 280)।',
        '[A] ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ 1994 (ਗ੍ਰਾਮ ਸਭਾ, ਗ੍ਰਾਮ ਪੰਚਾਇਤ, ਪੰਚਾਇਤ ਸੰਮਤੀ, ਜ਼ਿਲ੍ਹਾ ਪ੍ਰੀਸ਼ਦ, ਪੰਜਾਬ ਵਿੱਚ 50% ਮਹਿਲਾ ਰਾਖਵਾਂਕਰਨ) ਅਤੇ ਸੰਵਿਧਾਨਕ ਸੰਸਥਾਵਾਂ (UPSC, PPSC, CAG, AG)।',
      ],
      hi: [
        '[B] राज्यपाल, मुख्यमंत्री, विधायक (MLA), पंजाब की 117 सीटों वाली एकसदनीय विधानसभा और त्रि-स्तरीय पंचायती राज की समझ।',
        '[I] भाग VI (अनुच्छेद 152–213), पंजाब विधान परिषद की समाप्ति (1970) और भारतीय संघीय प्रणाली (7वीं अनुसूची, सरकारिया व पुंछी आयोग, GST परिषद 279A, वित्त आयोग 280)।',
        '[A] पंजाब पंचायती राज अधिनियम 1994 (ग्राम सभा, ग्राम पंचायत, पंचायत समिति, जिला परिषद, पंजाब में 50% महिला आरक्षण) तथा संवैधानिक निकाय (UPSC, PPSC, CAG, AG)।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 Official ERB Syllabus Mapping & Progression</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers official Punjab Master Cadre SST Polity headings <strong>"State Level Govt"</strong>, <strong>"Indian Federal System"</strong>, and <strong>"Democracy at the Rural and Urban Level"</strong> in <strong>B → I → A</strong> progression.
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · Basic (Class 6–8 Foundation)</span>
              <span class="text-xs text-slate-400">PSEB/NCERT Civics Classes 6–8</span>
            </div>
            <h3 class="text-xl font-bold text-white">1. Punjab State Legislature & Parliamentary Representation</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Punjab Vidhan Sabha (Unicameral State Legislature):</strong> Comprises <strong>117 Assembly Constituencies (MLAs)</strong>, of which <strong>34 seats are reserved for Scheduled Castes (SCs)</strong> (and 0 for STs).</li>
              <li><strong>Parliamentary Representation from Punjab:</strong> Punjab sends <strong>13 members to the Lok Sabha</strong> (4 seats reserved for SCs: Jalandhar, Hoshiarpur, Fatehgarh Sahib, Faridkot) and <strong>7 members to the Rajya Sabha</strong> (Total = 20 MPs).</li>
              <li><strong>Abolition of Punjab Legislative Council (Vidhan Parishad):</strong> Originally bicameral (1952–1969), Punjab’s Legislative Council was abolished under <strong>Article 169</strong> by the <em>Punjab Legislative Council (Abolition) Act, 1969</em> (effective <strong>January 1970</strong>). Currently only <strong>6 Indian states</strong> have a Bicameral Legislature (Legislative Council): <strong>Andhra Pradesh, Bihar, Karnataka, Maharashtra, Telangana, and Uttar Pradesh</strong>.</li>
              <li><strong>First Office Holders of Punjab:</strong>
                <br/>• <strong>1st Governor of Punjab (1947):</strong> Sir Chandulal Madhavlal Trivedi
                <br/>• <strong>1st Chief Minister of Punjab (1947):</strong> Dr. Gopi Chand Bhargava
                <br/>• <strong>1st Speaker of Punjab Vidhan Sabha:</strong> Sardar Kapur Singh
                <br/>• <strong>1st Chief Minister of Reorganised Punjab (1 Nov 1966):</strong> Giani Gurmukh Singh Musafir
                <br/>• <strong>1st Woman Chief Minister of Punjab (1996):</strong> Bibi Rajinder Kaur Bhattal</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · Intermediate (Class 9–10 PSEB/NCERT)</span>
              <span class="text-xs text-slate-400">Part VI (State Govt) & Part XI–XII (Federal System)</span>
            </div>
            <h3 class="text-xl font-bold text-white">2. Governor, Chief Minister & Indian Federal System</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-700 text-amber-300">
                    <th class="p-2">Institution / Pillar</th>
                    <th class="p-2">Constitutional Articles</th>
                    <th class="p-2">High-Yield Exam Provisions</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300 divide-y divide-slate-800">
                  <tr>
                    <td class="p-2 font-semibold text-white">Governor of State</td>
                    <td class="p-2">Arts 153–162, 200, 201, 213</td>
                    <td class="p-2"><strong>Art 153:</strong> Governor for each state (7th Amendment 1956 allows 1 person as Governor for 2+ states; Governor of Punjab is also Administrator of UT Chandigarh). <strong>Art 155:</strong> Appointed by President (Canadian model). <strong>Art 161:</strong> Pardoning power (cannot pardon death sentence or court-martial). <strong>Art 200/201:</strong> Assent to Bills & reserving Bills for President. <strong>Art 213:</strong> Ordinance power.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">CM, Council of Ministers & Advocate General</td>
                    <td class="p-2">Arts 163, 164, 165, 167</td>
                    <td class="p-2"><strong>Art 164:</strong> CM appointed by Governor; Council of Ministers collectively responsible to Legislative Assembly; strength capped at <strong>15% of Assembly (max 18 ministers in Punjab including CM; min 12)</strong> by 91st Amendment 2003. <strong>Art 165:</strong> Advocate General of State (highest law officer of state).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Seventh Schedule & Residuary Powers</td>
                    <td class="p-2">Art 246 & Art 248</td>
                    <td class="p-2"><strong>Union List:</strong> 100 items (originally 97); <strong>State List:</strong> 61 items (originally 66); <strong>Concurrent List:</strong> 52 items (originally 47 — <em>42nd Amendment 1976</em> shifted 5 subjects from State to Concurrent: <strong>Education, Forests, Weights & Measures, Protection of Wild Animals & Birds, Administration of Justice</strong>). <strong>Art 248:</strong> Residuary powers vested in Parliament (Canadian model).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Federal Institutions & Commissions</td>
                    <td class="p-2">Arts 262, 263, 279A, 280</td>
                    <td class="p-2"><strong>Art 262:</strong> Inter-State River Water Disputes. <strong>Art 263:</strong> Inter-State Council (set up in 1990 on <strong>Sarkaria Commission 1983</strong> recommendation; chaired by PM). <strong>Art 279A:</strong> GST Council (101st Amendment 2016; chaired by Union Finance Minister). <strong>Art 280:</strong> Finance Commission (5-yearly; 1st K.C. Neogy; 15th N.K. Singh; 16th Dr. Arvind Panagariya). <strong>Punchhi Commission (2007)</strong> also reviewed Centre-State relations.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · Advanced (Class 11–12 & Graduation)</span>
              <span class="text-xs text-slate-400">Punjab Panchayati Raj Act 1994 & Constitutional Bodies</span>
            </div>
            <h3 class="text-xl font-bold text-white">3. Punjab Panchayati Raj Act, 1994 & Constitutional/Statutory Bodies</h3>
            <ul class="text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Punjab Panchayati Raj Act, 1994 (Enacted 21 April 1994):</strong> Passed by the Punjab Vidhan Sabha to align with the <strong>73rd Constitutional Amendment Act, 1992</strong> (Part IX, Articles 243 to 243O, 11th Schedule with 29 subjects), replacing the old Punjab Gram Panchayat Act 1952 and Panchayat Samitis Act 1961:
                <br/>• <strong>Gram Sabha (Section 3–9):</strong> Body of all registered voters in the village; holds <strong>2 general meetings</strong> (Sawani in June and Hari in December); quorum is <strong>1/5th (20%)</strong> of total members.
                <br/>• <strong>Gram Panchayat (Village Level — Section 10):</strong> Established for a village with minimum population of <strong>200</strong>; consists of a <strong>Sarpanch elected directly by the voters of the Gram Sabha</strong> plus <strong>5 to 13 Panches</strong> depending on population.
                <br/>• <strong>Panchayat Samiti (Block / Intermediate Level — Section 98):</strong> Consists of <strong>15 to 25 directly elected members</strong> from territorial constituencies (1 member per 15,000 population), plus MLAs and Sarpanches representation; headed by Chairman & Vice-Chairman.
                <br/>• <strong>Zila Parishad (District Level — Section 161):</strong> Consists of <strong>10 to 25 directly elected members</strong> (1 member per 50,000 population), Chairmen of all Panchayat Samitis, and MPs/MLAs of the district; headed by President/Chairman; currently <strong>23 Zila Parishads</strong> in Punjab.
                <br/>• <strong>50% Reservation for Women in Punjab (2017 Amendment):</strong> While Article 243D mandates a minimum of 1/3rd (33%) reservation for women, Punjab enhanced women’s reservation in both <strong>Panchayati Raj Institutions and Urban Local Bodies to 50%</strong> via the <em>Punjab Panchayati Raj (Amendment) Act, 2017</em>.</li>
              <li><strong>Urban Local Bodies in Punjab (74th Amendment Act, 1992 — Part IX-A, Arts 243P–243ZG, 12th Schedule with 18 subjects):</strong> Governed by the <em>Punjab Municipal Act, 1911</em> and <em>Punjab Municipal Corporation Act, 1976</em>. Three tiers: (1) <strong>Nagar Panchayat</strong> (transitional area), (2) <strong>Municipal Council</strong> (smaller urban area), and (3) <strong>Municipal Corporation</strong> (larger urban cities — 13 Municipal Corporations in Punjab including Amritsar, Ludhiana, Jalandhar, Patiala, Bathinda, Mohali, Pathankot, Hoshiarpur, Moga, Phagwara, Kapurthala, Batala, Abohar).</li>
              <li><strong>Constitutional & Statutory Bodies Quick Matrix:</strong>
                <br/>• <strong>UPSC & PPSC (Part XIV, Articles 315–323):</strong> UPSC members hold office for 6 years or age 65; <strong>PPSC (Punjab Public Service Commission, HQ Patiala)</strong> members hold office for <strong>6 years or age 62</strong> (appointed by Governor, but can be removed ONLY by the President of India!).
                <br/>• <strong>CAG (Article 148):</strong> Guardian of Public Purse (6 years or age 65); examines accounts of both Centre and States.
                <br/>• <strong>Attorney General of India (Article 76):</strong> Highest law officer of India; holds office during pleasure of President; has right to speak in Parliament (Art 88) without right to vote.
                <br/>• <strong>Statutory / Executive Bodies:</strong> <strong>NHRC</strong> (Protection of Human Rights Act, 1993; 3 years or age 70 after 2019 amendment), <strong>CVC</strong> (Santhanam Committee 1964, Statutory Act 2003), <strong>Lokpal & Lokayuktas Act 2013</strong> (1st Lokpal: Justice Pinaki Chandra Ghose), and <strong>NITI Aayog</strong> (1 Jan 2015 executive resolution).</li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 ਸਰਕਾਰੀ ERB ਸਿਲੇਬਸ ਮੈਪਿੰਗ (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ ਅਧਿਕਾਰਤ ਸਿਰਲੇਖ <strong>"State Level Govt"</strong>, <strong>"Indian Federal System"</strong> ਅਤੇ <strong>"Democracy at the Rural and Urban Level"</strong> ਨੂੰ <strong>B → I → A</strong> ਕ੍ਰਮ ਵਿੱਚ ਸਮਝਾਇਆ ਗਿਆ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · ਮੁੱਢਲਾ ਪੱਧਰ (ਜਮਾਤ 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਅਤੇ ਸੰਸਦੀ ਪ੍ਰਤੀਨਿਧਤਾ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ (ਇੱਕ-ਸਦਨੀ ਵਿਧਾਨ ਮੰਡਲ):</strong> ਕੁੱਲ <strong>117 ਵਿਧਾਨ ਸਭਾ ਸੀਟਾਂ (MLAs)</strong> ਹਨ, ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ <strong>34 ਸੀਟਾਂ ਅਨੁਸੂਚਿਤ ਜਾਤੀਆਂ (SC)</strong> ਲਈ ਰਾਖਵੀਆਂ ਹਨ।</li>
              <li><strong>ਪੰਜਾਬ ਤੋਂ ਸੰਸਦ ਮੈਂਬਰ:</strong> ਲੋਕ ਸਭਾ ਦੀਆਂ <strong>13 ਸੀਟਾਂ</strong> (4 SC ਰਾਖਵੀਆਂ: ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ, ਫ਼ਰੀਦਕੋਟ) ਅਤੇ ਰਾਜ ਸਭਾ ਦੀਆਂ <strong>7 ਸੀਟਾਂ</strong> (ਕੁੱਲ 20 ਸੰਸਦ ਮੈਂਬਰ)।</li>
              <li><strong>ਪੰਜਾਬ ਵਿਧਾਨ ਪਰਿਸ਼ਦ ਦੀ ਸਮਾਪਤੀ:</strong> ਅਨੁਛੇਦ 169 ਤਹਿਤ <em>ਪੰਜਾਬ ਵਿਧਾਨ ਪਰਿਸ਼ਦ (ਸਮਾਪਤੀ) ਐਕਟ, 1969</em> ਰਾਹੀਂ <strong>ਜਨਵਰੀ 1970</strong> ਵਿੱਚ ਪੰਜਾਬ ਵਿਧਾਨ ਪਰਿਸ਼ਦ ਖ਼ਤਮ ਕਰ ਦਿੱਤੀ ਗਈ। ਪਹਿਲੇ ਰਾਜਪਾਲ: <strong>ਸਰ ਚੰਦੂਲਾਲ ਮਾਧਵਲਾਲ ਤ੍ਰਿਵੇਦੀ</strong>; ਪਹਿਲੇ ਮੁੱਖ ਮੰਤਰੀ: <strong>ਡਾ. ਗੋਪੀ ਚੰਦ ਭਾਰਗਵ</strong>; ਪਹਿਲੇ ਸਪੀਕਰ: <strong>ਸਰਦਾਰ ਕਪੂਰ ਸਿੰਘ</strong>; 1966 ਪੁਨਰਗਠਨ ਤੋਂ ਬਾਅਦ ਪਹਿਲੇ CM: <strong>ਗਿਆਨੀ ਗੁਰਮੁਖ ਸਿੰਘ ਮੁਸਾਫ਼ਿਰ</strong>।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · ਮੱਧਮ ਪੱਧਰ (ਜਮਾਤ 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. ਰਾਜਪਾਲ, ਮੁੱਖ ਮੰਤਰੀ ਅਤੇ ਭਾਰਤੀ ਸੰਘੀ ਪ੍ਰਣਾਲੀ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਰਾਜਪਾਲ (Governor):</strong> ਅਨੁਛੇਦ 153 (ਇੱਕ ਰਾਜਪਾਲ ਦੋ ਜਾਂ ਵੱਧ ਰਾਜਾਂ ਲਈ ਹੋ ਸਕਦਾ ਹੈ — 7ਵੀਂ ਸੋਧ 1956), ਅਨੁਛੇਦ 155 (ਰਾਸ਼ਟਰਪਤੀ ਦੁਆਰਾ ਨਿਯੁਕਤੀ — ਕੈਨੇਡਾ ਮਾਡਲ), ਅਨੁਛੇਦ 161 (ਮਾਫ਼ੀ ਦੀ ਸ਼ਕਤੀ — ਪਰ ਮੌਤ ਦੀ ਸਜ਼ਾ ਮਾਫ਼ ਨਹੀਂ ਕਰ ਸਕਦਾ), ਅਨੁਛੇਦ 200/201 (ਬਿੱਲਾਂ ਨੂੰ ਰਾਸ਼ਟਰਪਤੀ ਲਈ ਰਾਖਵਾਂ ਰੱਖਣਾ), ਅਨੁਛੇਦ 213 (ਆਰਡੀਨੈਂਸ)।</li>
              <li><strong>ਮੁੱਖ ਮੰਤਰੀ ਤੇ ਮੰਤਰੀ ਮੰਡਲ (ਅਨੁਛੇਦ 163–164):</strong> 91ਵੀਂ ਸੋਧ (2003) ਅਨੁਸਾਰ ਰਾਜ ਵਿੱਚ ਮੰਤਰੀਆਂ ਦੀ ਗਿਣਤੀ ਵਿਧਾਨ ਸਭਾ ਦਾ ਵੱਧ ਤੋਂ ਵੱਧ <strong>15% (ਪੰਜਾਬ ਵਿੱਚ ਮੁੱਖ ਮੰਤਰੀ ਸਮੇਤ ਵੱਧ ਤੋਂ ਵੱਧ 18 ਅਤੇ ਘੱਟੋ-ਘੱਟ 12 ਮੰਤਰੀ)</strong> ਹੋ ਸਕਦੀ ਹੈ। ਅਨੁਛੇਦ 165 ਤਹਿਤ <strong>ਐਡਵੋਕੇਟ ਜਨਰਲ</strong> ਰਾਜ ਦਾ ਸਰਵਉੱਚ ਕਾਨੂੰਨ ਅਧਿਕਾਰੀ ਹੁੰਦਾ ਹੈ।</li>
              <li><strong>7ਵੀਂ ਅਨੁਸੂਚੀ ਤੇ ਕੇਂਦਰ-ਰਾਜ ਸਬੰਧ:</strong> ਸੰਘ ਸੂਚੀ (100 ਵਿਸ਼ੇ), ਰਾਜ ਸੂਚੀ (61 ਵਿਸ਼ੇ), ਸਮਵਰਤੀ ਸੂਚੀ (52 ਵਿਸ਼ੇ — <strong>42ਵੀਂ ਸੋਧ 1976</strong> ਰਾਹੀਂ ਸਿੱਖਿਆ, ਜੰਗਲਾਤ, ਜੰਗਲੀ ਜੀਵ, ਨਾਪ-ਤੋਲ ਅਤੇ ਨਿਆਂ ਪ੍ਰਸ਼ਾਸਨ ਰਾਜ ਸੂਚੀ ਤੋਂ ਸਮਵਰਤੀ ਸੂਚੀ ਵਿੱਚ ਪਾਏ ਗਏ)। <strong>ਸਰਕਾਰੀਆ ਕਮਿਸ਼ਨ (1983)</strong> ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ 1990 ਵਿੱਚ ਅੰਤਰ-ਰਾਜੀ ਪਰਿਸ਼ਦ (ਅਨੁਛੇਦ 263) ਬਣੀ; <strong>ਪੁੰਛੀ ਕਮਿਸ਼ਨ (2007)</strong>; GST ਕੌਂਸਲ (ਅਨੁਛੇਦ 279A — 101ਵੀਂ ਸੋਧ 2016) ਅਤੇ ਵਿੱਤ ਕਮਿਸ਼ਨ (ਅਨੁਛੇਦ 280)।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · ਉੱਚ ਪੱਧਰ (ਜਮਾਤ 11–12 / ਗ੍ਰੈਜੂਏਸ਼ਨ)</span>
            <h3 class="text-xl font-bold text-white">3. ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ, 1994 ਅਤੇ ਸੰਵਿਧਾਨਕ ਸੰਸਥਾਵਾਂ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ, 1994 (21 ਅਪ੍ਰੈਲ 1994):</strong> 73ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (1992) ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਪਾਸ ਕੀਤਾ ਗਿਆ:
                <br/>• <strong>ਗ੍ਰਾਮ ਸਭਾ:</strong> ਪਿੰਡ ਦੇ ਸਾਰੇ ਰਜਿਸਟਰਡ ਵੋਟਰ; ਸਾਲ ਵਿੱਚ 2 ਮੁੱਖ ਮੀਟਿੰਗਾਂ (ਸਾਉਣੀ ਜੂਨ ਅਤੇ ਹਾੜ੍ਹੀ ਦਸੰਬਰ); ਕੋਰਮ (Quorum) ਕੁੱਲ ਮੈਂਬਰਾਂ ਦਾ <strong>1/5ਵਾਂ ਹਿੱਸਾ (20%)</strong>।
                <br/>• <strong>ਗ੍ਰਾਮ ਪੰਚਾਇਤ:</strong> ਘੱਟੋ-ਘੱਟ 200 ਆਬਾਦੀ ਵਾਲੇ ਪਿੰਡ ਲਈ; <strong>ਸਰਪੰਚ ਦੀ ਚੋਣ ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਵੋਟਰਾਂ ਦੁਆਰਾ</strong> ਹੁੰਦੀ ਹੈ ਅਤੇ ਆਬਾਦੀ ਅਨੁਸਾਰ <strong>5 ਤੋਂ 13 ਪੰਚ</strong> ਚੁਣੇ ਜਾਂਦੇ ਹਨ।
                <br/>• <strong>ਪੰਚਾਇਤ ਸੰਮਤੀ (ਬਲਾਕ ਪੱਧਰ):</strong> <strong>15 ਤੋਂ 25 ਸਿੱਧੇ ਚੁਣੇ ਮੈਂਬਰ</strong>; ਅਤੇ <strong>ਜ਼ਿਲ੍ਹਾ ਪ੍ਰੀਸ਼ਦ (ਜ਼ਿਲ੍ਹਾ ਪੱਧਰ):</strong> <strong>10 ਤੋਂ 25 ਸਿੱਧੇ ਚੁਣੇ ਮੈਂਬਰ</strong>।
                <br/>• <strong>ਪੰਜਾਬ ਵਿੱਚ 50% ਮਹਿਲਾ ਰਾਖਵਾਂਕਰਨ (2017 ਸੋਧ):</strong> ਪੰਜਾਬ ਨੇ ਪੰਚਾਇਤੀ ਰਾਜ ਸੰਸਥਾਵਾਂ ਅਤੇ ਸ਼ਹਿਰੀ ਸਥਾਨਕ ਸੰਸਥਾਵਾਂ ਵਿੱਚ ਔਰਤਾਂ ਦਾ ਰਾਖਵਾਂਕਰਨ 33% ਤੋਂ ਵਧਾ ਕੇ <strong>50%</strong> ਕਰ ਦਿੱਤਾ ਹੈ।</li>
              <li><strong>PPSC (ਪੰਜਾਬ ਲੋਕ ਸੇਵਾ ਕਮਿਸ਼ਨ — ਮੁੱਖ ਦਫ਼ਤਰ ਪਟਿਆਲਾ):</strong> ਅਨੁਛੇਦ 315–323 ਤਹਿਤ ਮੈਂਬਰਾਂ ਦੀ ਨਿਯੁਕਤੀ ਰਾਜਪਾਲ ਕਰਦਾ ਹੈ (ਕਾਰਜਕਾਲ 6 ਸਾਲ ਜਾਂ 62 ਸਾਲ ਦੀ ਉਮਰ), ਪਰ ਉਨ੍ਹਾਂ ਨੂੰ ਅਹੁਦੇ ਤੋਂ ਸਿਰਫ਼ <strong>ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰਪਤੀ</strong> ਹੀ ਹਟਾ ਸਕਦਾ ਹੈ!</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 आधिकारिक ERB पाठ्यक्रम मानचित्रण (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर SST के आधिकारिक शीर्षक <strong>"State Level Govt"</strong>, <strong>"Indian Federal System"</strong> तथा <strong>"Democracy at the Rural and Urban Level"</strong> को <strong>B → I → A</strong> क्रम में प्रस्तुत किया गया है।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · आधारभूत स्तर (कक्षा 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. पंजाब विधान सभा एवं संसदीय प्रतिनिधित्व</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>पंजाब विधान सभा (एकसदनीय विधानमंडल):</strong> कुल <strong>117 विधानसभा सीटें (MLAs)</strong> हैं, जिनमें से <strong>34 सीटें अनुसूचित जातियों (SC)</strong> के लिए आरक्षित हैं।</li>
              <li><strong>पंजाब से संसदीय सीटें:</strong> लोकसभा की <strong>13 सीटें</strong> (4 SC आरक्षित: जालंधर, होशियारपुर, फतेहगढ़ साहिब, फरीदकोट) और राज्यसभा की <strong>7 सीटें</strong> (कुल 20 सांसद)।</li>
              <li><strong>पंजाब विधान परिषद की समाप्ति:</strong> अनुच्छेद 169 के अंतर्गत <em>पंजाब विधान परिषद (उत्सादन) अधिनियम, 1969</em> द्वारा <strong>जनवरी 1970</strong> में विधान परिषद समाप्त कर दी गई। प्रथम राज्यपाल: <strong>सर चंदूलाल माधवलाल त्रिवेदी</strong>; प्रथम मुख्यमंत्री: <strong>डॉ. गोपी चंद भार्गव</strong>; प्रथम अध्यक्ष: <strong>सरदार कपूर सिंह</strong>; 1966 पुनर्गठन के बाद प्रथम मुख्यमंत्री: <strong>ज्ञानी गुरमुख सिंह मुसाफिर</strong>।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · मध्यम स्तर (कक्षा 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. राज्यपाल, मुख्यमंत्री एवं भारतीय संघीय व्यवस्था</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>राज्यपाल (Governor):</strong> अनुच्छेद 153 (7वें संशोधन 1956 से एक व्यक्ति दो या अधिक राज्यों का राज्यपाल हो सकता है), अनुच्छेद 155 (राष्ट्रपति द्वारा नियुक्ति — कनाडा मॉडल), अनुच्छेद 161 (क्षमादान शक्ति — मृत्युदंड को क्षमा नहीं कर सकता), अनुच्छेद 200/201 (विधेयकों को राष्ट्रपति हेतु आरक्षित रखना), अनुच्छेद 213 (अध्यादेश शक्ति)।</li>
              <li><strong>मुख्यमंत्री व मंत्रिपरिषद (अनुच्छेद 163–164):</strong> 91वें संशोधन (2003) के अनुसार राज्य में मंत्रियों की संख्या विधानसभा की कुल संख्या के <strong>15% (पंजाब में मुख्यमंत्री सहित अधिकतम 18 तथा न्यूनतम 12 मंत्री)</strong> तक सीमित है। अनुच्छेद 165 के तहत <strong>महाधिवक्ता (Advocate General)</strong> राज्य का सर्वोच्च विधि अधिकारी होता है।</li>
              <li><strong>7वीं अनुसूची एवं केंद्र-राज्य संबंध:</strong> संघ सूची (100 विषय), राज्य सूची (61 विषय), समवर्ती सूची (52 विषय — <strong>42वें संशोधन 1976</strong> द्वारा शिक्षा, वन, वन्यजीव, बाट-माप और न्याय प्रशासन को राज्य सूची से समवर्ती सूची में स्थानांतरित किया गया)। <strong>सरकारिया आयोग (1983)</strong> की सिफारिश पर 1990 में अंतर-राज्यीय परिषद (अनुच्छेद 263) का गठन हुआ; <strong>पुंछी आयोग (2007)</strong>; GST परिषद (अनुच्छेद 279A — 101वां संशोधन 2016) और वित्त आयोग (अनुच्छेद 280)।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · उन्नत स्तर (कक्षा 11–12 / स्नातक)</span>
            <h3 class="text-xl font-bold text-white">3. पंजाब पंचायती राज अधिनियम, 1994 एवं संवैधानिक निकाय</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>पंजाब पंचायती राज अधिनियम, 1994 (21 अप्रैल 1994):</strong> 73वें संविधान संशोधन (1992) के अनुरूप अधिनियमित:
                <br/>• <strong>ग्राम सभा:</strong> गाँव के सभी पंजीकृत मतदाता; वर्ष में 2 सामान्य बैठकें (सावनी जून व हाड़ी दिसंबर); गणपूर्ति (Quorum) कुल सदस्यों का <strong>1/5वाँ भाग (20%)</strong>।
                <br/>• <strong>ग्राम पंचायत:</strong> न्यूनतम 200 आबादी वाले गाँव हेतु; <strong>सरपंच का प्रत्यक्ष चुनाव मतदाताओं द्वारा</strong> तथा जनसंख्या अनुसार <strong>5 से 13 पंच</strong>।
                <br/>• <strong>पंचायत समिति (ब्लॉक स्तर):</strong> <strong>15 से 25 प्रत्यक्ष निर्वाचित सदस्य</strong>; तथा <strong>जिला परिषद (जिला स्तर):</strong> <strong>10 से 25 प्रत्यक्ष निर्वाचित सदस्य</strong>।
                <br/>• <strong>पंजाब में 50% महिला आरक्षण (2017 संशोधन):</strong> पंजाब में पंचायती राज संस्थाओं व शहरी स्थानीय निकायों में महिलाओं को <strong>50% आरक्षण</strong> दिया गया है।</li>
              <li><strong>PPSC (पंजाब लोक सेवा आयोग — मुख्यालय पटियाला):</strong> अनुच्छेद 315–323 के तहत अध्यक्ष व सदस्यों की नियुक्ति राज्यपाल करता है (कार्यकाल 6 वर्ष या 62 वर्ष आयु), किंतु उन्हें पद से केवल <strong>भारत का राष्ट्रपति</strong> ही हटा सकता है!</li>
            </ul>
          </div>
        </div>
      `,
    },
    summary: {
      en: 'Covers State Government (Governor Arts 153–162/200/213, CM & 15% Ministry Cap Art 164, Advocate General Art 165), Punjab Vidhan Sabha (117 MLAs, 34 SC reserved, 13 LS + 7 RS seats, 1970 abolition of Vidhan Parishad), Indian Federal System (7th Schedule Lists, 42nd Amendment transfers, Sarkaria 1983 & Punchhi 2007 Commissions, Inter-State Council Art 263, GST Council Art 279A, Finance Commission Art 280), and the Punjab Panchayati Raj Act 1994 (5–13 Panches, 15–25 Samiti members, 10–25 Zila Parishad members, 50% women reservation).',
      pa: 'ਰਾਜ ਸਰਕਾਰ (ਰਾਜਪਾਲ ਅਨੁਛੇਦ 153–213, ਮੁੱਖ ਮੰਤਰੀ ਤੇ 15% ਮੰਤਰੀ ਸੀਮਾ ਅਨੁਛੇਦ 164), ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ (117 ਸੀਟਾਂ, 34 SC ਰਾਖਵੀਆਂ, 13 ਲੋਕ ਸਭਾ + 7 ਰਾਜ ਸਭਾ, ਜਨਵਰੀ 1970 ਵਿੱਚ ਵਿਧਾਨ ਪਰਿਸ਼ਦ ਦੀ ਸਮਾਪਤੀ), ਭਾਰਤੀ ਸੰਘੀ ਪ੍ਰਣਾਲੀ (7ਵੀਂ ਅਨੁਸੂਚੀ, ਸਰਕਾਰੀਆ ਤੇ ਪੁੰਛੀ ਕਮਿਸ਼ਨ, GST ਕੌਂਸਲ 279A, ਵਿੱਤ ਕਮਿਸ਼ਨ 280) ਅਤੇ ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ 1994 (5–13 ਪੰਚ, 15–25 ਸੰਮਤੀ ਮੈਂਬਰ, 10–25 ਜ਼ਿਲ੍ਹਾ ਪ੍ਰੀਸ਼ਦ ਮੈਂਬਰ, 50% ਮਹਿਲਾ ਰਾਖਵਾਂਕਰਨ) ਦਾ ਸੰਪੂਰਨ ਸਾਰ।',
      hi: 'राज्य सरकार (राज्यपाल अनुच्छेद 153–213, मुख्यमंत्री व 15% मंत्री सीमा अनुच्छेद 164), पंजाब विधान सभा (117 सीटें, 34 SC आरक्षित, 13 लोकसभा + 7 राज्यसभा, जनवरी 1970 में विधान परिषद की समाप्ति), भारतीय संघीय व्यवस्था (7वीं अनुसूची, सरकारिया व पुंछी आयोग, GST परिषद 279A, वित्त आयोग 280) तथा पंजाब पंचायती राज अधिनियम 1994 (5–13 पंच, 15–25 समिति सदस्य, 10–25 जिला परिषद सदस्य, 50% महिला आरक्षण) का संपूर्ण सार।',
    },
    keyNotes: {
      en: [
        '[B] Punjab Vidhan Sabha is unicameral with 117 seats (34 reserved for SCs); Punjab sends 13 MPs to Lok Sabha (4 SC) and 7 MPs to Rajya Sabha.',
        '[B] Punjab Legislative Council (Vidhan Parishad) was abolished in January 1970 under Article 169.',
        '[I] Maximum strength of the Council of Ministers in Punjab is 18 (15% of 117 under the 91st Amendment Act, 2003) and minimum is 12.',
        '[I] Governor’s Ordinance-making power is under Article 213 (President’s is Article 123); Governor reserves state bills for the President under Article 200.',
        '[I] 42nd Amendment (1976) moved 5 subjects from State List to Concurrent List: Education, Forests, Wild Animals/Birds, Weights & Measures, and Administration of Justice.',
        '[I] Sarkaria Commission (1983) and Punchhi Commission (2007) examined Centre-State relations; Inter-State Council (Art 263) was set up in 1990.',
        '[A] Punjab Panchayati Raj Act, 1994 came into force on 21 April 1994, establishing a 3-tier system (Gram Panchayat, Panchayat Samiti, Zila Parishad).',
        '[A] In Punjab, a Gram Panchayat has a directly elected Sarpanch and 5 to 13 Panches; Panchayat Samiti has 15 to 25 elected members; Zila Parishad has 10 to 25 elected members.',
        '[A] Punjab provides 50% reservation for women in both Panchayati Raj Institutions and Urban Local Bodies (since 2017 amendment).',
        '[A] PPSC (HQ Patiala) members are appointed by the Governor of Punjab (tenure 6 years or age 62), but can be removed ONLY by the President of India (Art 317).',
      ],
      pa: [
        '[B] ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਵਿੱਚ 117 ਸੀਟਾਂ (34 SC ਰਾਖਵੀਆਂ) ਹਨ; ਲੋਕ ਸਭਾ ਵਿੱਚ 13 (4 SC) ਅਤੇ ਰਾਜ ਸਭਾ ਵਿੱਚ 7 ਸੀਟਾਂ ਹਨ।',
        '[B] ਪੰਜਾਬ ਵਿਧਾਨ ਪਰਿਸ਼ਦ ਨੂੰ ਅਨੁਛੇਦ 169 ਤਹਿਤ ਜਨਵਰੀ 1970 ਵਿੱਚ ਖ਼ਤਮ ਕਰ ਦਿੱਤਾ ਗਿਆ ਸੀ।',
        '[I] 91ਵੀਂ ਸੋਧ (2003) ਅਨੁਸਾਰ ਪੰਜਾਬ ਵਿੱਚ ਮੁੱਖ ਮੰਤਰੀ ਸਮੇਤ ਵੱਧ ਤੋਂ ਵੱਧ 18 (117 ਦਾ 15%) ਅਤੇ ਘੱਟੋ-ਘੱਟ 12 ਮੰਤਰੀ ਹੋ ਸਕਦੇ ਹਨ।',
        '[I] ਰਾਜਪਾਲ ਦੀ ਆਰਡੀਨੈਂਸ ਜਾਰੀ ਕਰਨ ਦੀ ਸ਼ਕਤੀ ਅਨੁਛੇਦ 213 ਵਿੱਚ ਹੈ ਅਤੇ ਬਿੱਲ ਰਾਸ਼ਟਰਪਤੀ ਲਈ ਰਾਖਵਾਂ ਰੱਖਣ ਦੀ ਸ਼ਕਤੀ ਅਨੁਛੇਦ 200 ਵਿੱਚ ਹੈ।',
        '[I] 42ਵੀਂ ਸੋਧ (1976) ਰਾਹੀਂ 5 ਵਿਸ਼ੇ (ਸਿੱਖਿਆ, ਜੰਗਲਾਤ, ਜੰਗਲੀ ਜੀਵ, ਨਾਪ-ਤੋਲ, ਨਿਆਂ ਪ੍ਰਸ਼ਾਸਨ) ਰਾਜ ਸੂਚੀ ਤੋਂ ਸਮਵਰਤੀ ਸੂਚੀ ਵਿੱਚ ਤਬਦੀਲ ਕੀਤੇ ਗਏ।',
        '[I] ਕੇਂਦਰ-ਰਾਜ ਸਬੰਧਾਂ ਲਈ ਸਰਕਾਰੀਆ ਕਮਿਸ਼ਨ (1983) ਅਤੇ ਪੁੰਛੀ ਕਮਿਸ਼ਨ (2007) ਬਣੇ; ਅੰਤਰ-ਰਾਜੀ ਪਰਿਸ਼ਦ ਅਨੁਛੇਦ 263 ਵਿੱਚ ਹੈ।',
        '[A] ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ 21 ਅਪ੍ਰੈਲ 1994 ਨੂੰ ਲਾਗੂ ਹੋਇਆ; ਗ੍ਰਾਮ ਸਭਾ ਦਾ ਕੋਰਮ 1/5 (20%) ਹੁੰਦਾ ਹੈ।',
        '[A] ਪੰਜਾਬ ਵਿੱਚ ਗ੍ਰਾਮ ਪੰਚਾਇਤ ਵਿੱਚ 5 ਤੋਂ 13 ਪੰਚ, ਪੰਚਾਇਤ ਸੰਮਤੀ ਵਿੱਚ 15 ਤੋਂ 25 ਮੈਂਬਰ ਅਤੇ ਜ਼ਿਲ੍ਹਾ ਪ੍ਰੀਸ਼ਦ ਵਿੱਚ 10 ਤੋਂ 25 ਮੈਂਬਰ ਹੁੰਦੇ ਹਨ।',
        '[A] ਪੰਜਾਬ ਵਿੱਚ ਪੰਚਾਇਤੀ ਰਾਜ ਅਤੇ ਸ਼ਹਿਰੀ ਸਥਾਨਕ ਸੰਸਥਾਵਾਂ ਵਿੱਚ ਔਰਤਾਂ ਲਈ 50% ਰਾਖਵਾਂਕਰਨ ਹੈ (2017 ਸੋਧ)।',
        '[A] PPSC (ਮੁੱਖ ਦਫ਼ਤਰ ਪਟਿਆਲਾ) ਦੇ ਮੈਂਬਰਾਂ ਦੀ ਨਿਯੁਕਤੀ ਰਾਜਪਾਲ ਕਰਦਾ ਹੈ, ਪਰ ਹਟਾਉਣ ਦਾ ਅਧਿਕਾਰ ਸਿਰਫ਼ ਰਾਸ਼ਟਰਪਤੀ ਕੋਲ ਹੈ।',
      ],
      hi: [
        '[B] पंजाब विधान सभा में 117 सीटें (34 SC आरक्षित) हैं; लोकसभा में 13 (4 SC) और राज्यसभा में 7 सीटें हैं।',
        '[B] पंजाब विधान परिषद को अनुच्छेद 169 के तहत जनवरी 1970 में समाप्त कर दिया गया था।',
        '[I] 91वें संशोधन (2003) के अनुसार पंजाब में मुख्यमंत्री सहित अधिकतम 18 (117 का 15%) और न्यूनतम 12 मंत्री हो सकते हैं।',
        '[I] राज्यपाल की अध्यादेश शक्ति अनुच्छेद 213 में तथा विधेयक राष्ट्रपति हेतु आरक्षित रखने की शक्ति अनुच्छेद 200 में है।',
        '[I] 42वें संशोधन (1976) द्वारा 5 विषय (शिक्षा, वन, वन्यजीव, बाट-माप, न्याय प्रशासन) राज्य सूची से समवर्ती सूची में डाले गए।',
        '[I] केंद्र-राज्य संबंधों हेतु सरकारिया आयोग (1983) व पुंछी आयोग (2007) बने; अंतर-राज्यीय परिषद अनुच्छेद 263 में है।',
        '[A] पंजाब पंचायती राज अधिनियम 21 अप्रैल 1994 को लागू हुआ; ग्राम सभा की गणपूर्ति 1/5 (20%) होती है।',
        '[A] पंजाब में ग्राम पंचायत में 5 से 13 पंच, पंचायत समिति में 15 से 25 सदस्य तथा जिला परिषद में 10 से 25 सदस्य होते हैं।',
        '[A] पंजाब में पंचायती राज एवं शहरी निकायों में महिलाओं के लिए 50% आरक्षण है (2017 संशोधन)।',
        '[A] PPSC (मुख्यालय पटियाला) के सदस्यों की नियुक्ति राज्यपाल करता है, किंतु हटाने की शक्ति केवल राष्ट्रपति के पास है।',
      ],
    },
    workedExamples: [
      {
        title: {
          en: 'Calculating Maximum & Minimum Ministers in the Punjab Cabinet',
          pa: 'ਪੰਜਾਬ ਮੰਤਰੀ ਮੰਡਲ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਅਤੇ ਘੱਟੋ-ਘੱਟ ਮੰਤਰੀਆਂ ਦੀ ਗਣਨਾ',
          hi: 'पंजाब मंत्रिपरिषद में अधिकतम एवं न्यूनतम मंत्रियों की गणना',
        },
        problem: {
          en: 'Punjab Legislative Assembly has 117 seats. Under Article 164(1A) inserted by the 91st Constitutional Amendment Act, 2003, what are the minimum and maximum numbers of ministers (including the Chief Minister) permitted in Punjab?',
          pa: 'ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਵਿੱਚ 117 ਸੀਟਾਂ ਹਨ। 91ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (2003) ਦੁਆਰਾ ਜੋੜੇ ਗਏ ਅਨੁਛੇਦ 164(1A) ਅਨੁਸਾਰ ਪੰਜਾਬ ਵਿੱਚ ਮੁੱਖ ਮੰਤਰੀ ਸਮੇਤ ਘੱਟੋ-ਘੱਟ ਅਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਕਿੰਨੇ ਮੰਤਰੀ ਹੋ ਸਕਦੇ ਹਨ?',
          hi: 'पंजाब विधान सभा में 117 सीटें हैं। 91वें संविधान संशोधन (2003) द्वारा जोड़े गए अनुच्छेद 164(1A) के अनुसार पंजाब में मुख्यमंत्री सहित न्यूनतम और अधिकतम कितने मंत्री हो सकते हैं?',
        },
        steps: {
          en: [
            'Article 164(1A) caps the total number of ministers (including the CM) in a state at 15% of the total strength of the Legislative Assembly.',
            'Compute 15% of 117: 117 × 0.15 = 17.55 → rounded to a maximum of 18 ministers (including the Chief Minister).',
            'The proviso to Article 164(1A) states that the number of ministers (including the CM) in a state shall not be less than 12.',
          ],
          pa: [
            'ਅਨੁਛੇਦ 164(1A) ਅਨੁਸਾਰ ਵੱਧ ਤੋਂ ਵੱਧ ਸੀਮਾ ਵਿਧਾਨ ਸਭਾ ਦੀ ਕੁੱਲ ਗਿਣਤੀ ਦਾ 15% ਹੈ।',
            '117 ਦਾ 15% = 17.55 → ਵੱਧ ਤੋਂ ਵੱਧ 18 ਮੰਤਰੀ (ਮੁੱਖ ਮੰਤਰੀ ਸਮੇਤ)।',
            'ਘੱਟੋ-ਘੱਟ ਸੀਮਾ ਸੰਵਿਧਾਨ ਅਨੁਸਾਰ 12 ਮੰਤਰੀ ਹੈ।',
          ],
          hi: [
            'अनुच्छेद 164(1A) के अनुसार अधिकतम सीमा विधानसभा की कुल सदस्य संख्या का 15% है।',
            '117 का 15% = 17.55 → अधिकतम 18 मंत्री (मुख्यमंत्री सहित)।',
            'संविधान के अनुसार राज्य में न्यूनतम सीमा 12 मंत्री है।',
          ],
        },
        solution: {
          en: 'Minimum 12 ministers and Maximum 18 ministers (including the Chief Minister).',
          pa: 'ਘੱਟੋ-ਘੱਟ 12 ਮੰਤਰੀ ਅਤੇ ਵੱਧ ਤੋਂ ਵੱਧ 18 ਮੰਤਰੀ (ਮੁੱਖ ਮੰਤਰੀ ਸਮੇਤ)।',
          hi: 'न्यूनतम 12 मंत्री और अधिकतम 18 मंत्री (मुख्यमंत्री सहित)।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'The Governor appoints the Chairman and members of the State Public Service Commission (PPSC) and can also remove them.',
          pa: 'ਰਾਜਪਾਲ PPSC ਦੇ ਚੇਅਰਮੈਨ ਅਤੇ ਮੈਂਬਰਾਂ ਦੀ ਨਿਯੁਕਤੀ ਕਰਦਾ ਹੈ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਹਟਾ ਵੀ ਸਕਦਾ ਹੈ।',
          hi: 'राज्यपाल PPSC के अध्यक्ष और सदस्यों की नियुक्ति करता है और उन्हें हटा भी सकता है।',
        },
        correction: {
          en: 'Under Articles 316 and 317, although the Governor appoints the Chairman and members of a State PSC (and State Election Commissioner), ONLY the President of India can remove them (and the State Election Commissioner is removed like a High Court Judge).',
          pa: 'ਅਨੁਛੇਦ 316 ਅਤੇ 317 ਤਹਿਤ PPSC ਦੇ ਮੈਂਬਰਾਂ ਦੀ ਨਿਯੁਕਤੀ ਰਾਜਪਾਲ ਕਰਦਾ ਹੈ, ਪਰ ਉਨ੍ਹਾਂ ਨੂੰ ਅਹੁਦੇ ਤੋਂ ਸਿਰਫ਼ ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰਪਤੀ ਹੀ ਹਟਾ ਸਕਦਾ ਹੈ।',
          hi: 'अनुच्छेद 316 और 317 के तहत PPSC के सदस्यों की नियुक्ति राज्यपाल करता है, परंतु उन्हें पद से केवल भारत का राष्ट्रपति ही हटा सकता है।',
        },
        whyItMatters: {
          en: 'Appointment by Governor vs Removal by President (for PPSC and High Court Judges) is one of the highest-frequency traps in Punjab exams.',
          pa: 'ਨਿਯੁਕਤੀ ਰਾਜਪਾਲ ਦੁਆਰਾ ਪਰ ਹਟਾਉਣਾ ਰਾਸ਼ਟਰਪਤੀ ਦੁਆਰਾ — ਇਹ ਪੰਜਾਬ ਦੇ ਇਮਤਿਹਾਨਾਂ ਦਾ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਟ੍ਰੈਪ ਪ੍ਰਸ਼ਨ ਹੈ।',
          hi: 'नियुक्ति राज्यपाल द्वारा किंतु पदच्युति राष्ट्रपति द्वारा — यह पंजाब की परीक्षाओं का अत्यंत महत्वपूर्ण प्रश्न है।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Punjab Legislature Numbers: 117 MLAs (34 SC) | 13 Lok Sabha (4 SC) | 7 Rajya Sabha | 23 Zila Parishads | 13 Municipal Corporations.',
          'Punjab Panchayati Raj Act 1994: Gram Sabha Quorum = 1/5th (20%); Gram Panchayat = 5 to 13 Panches + Directly Elected Sarpanch; Panchayat Samiti = 15 to 25 members; Zila Parishad = 10 to 25 members; Women Reservation = 50% (2017).',
          '6 Bicameral States (Mnemonic: K-U-M-B-A-T): Karnataka, Uttar Pradesh, Maharashtra, Bihar, Andhra Pradesh, Telangana.',
        ],
        pa: [
          'ਪੰਜਾਬ ਦੇ ਅੰਕੜੇ: 117 ਵਿਧਾਇਕ (34 SC) | 13 ਲੋਕ ਸਭਾ (4 SC) | 7 ਰਾਜ ਸਭਾ | 23 ਜ਼ਿਲ੍ਹਾ ਪ੍ਰੀਸ਼ਦਾਂ | 13 ਨਗਰ ਨਿਗਮ।',
          'ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ 1994: ਗ੍ਰਾਮ ਸਭਾ ਕੋਰਮ = 1/5; ਪੰਚ = 5 ਤੋਂ 13; ਪੰਚਾਇਤ ਸੰਮਤੀ = 15 ਤੋਂ 25; ਜ਼ਿਲ੍ਹਾ ਪ੍ਰੀਸ਼ਦ = 10 ਤੋਂ 25; ਮਹਿਲਾ ਰਾਖਵਾਂਕਰਨ = 50%।',
        ],
        hi: [
          'पंजाब के आँकड़े: 117 विधायक (34 SC) | 13 लोकसभा (4 SC) | 7 राज्यसभा | 23 जिला परिषद | 13 नगर निगम।',
          'पंजाब पंचायती राज अधिनियम 1994: ग्राम सभा कोरम = 1/5; पंच = 5 से 13; पंचायत समिति = 15 से 25; जिला परिषद = 10 से 25; महिला आरक्षण = 50%।',
        ],
      },
      examTraps: {
        en: [
          'Do not confuse the 73rd Amendment (1992, enforced 24 April 1993) with the Punjab Panchayati Raj Act (enacted 21 April 1994).',
          'Education and Forests were in the State List originally, but moved to the Concurrent List by the 42nd Amendment Act, 1976.',
        ],
        pa: [
          '73ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (1992, ਲਾਗੂ 24 ਅਪ੍ਰੈਲ 1993) ਅਤੇ ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ (21 ਅਪ੍ਰੈਲ 1994) ਦੀਆਂ ਮਿਤੀਆਂ ਵਿੱਚ ਫ਼ਰਕ ਰੱਖੋ।',
          'ਸਿੱਖਿਆ ਅਤੇ ਜੰਗਲਾਤ 42ਵੀਂ ਸੋਧ (1976) ਰਾਹੀਂ ਰਾਜ ਸੂਚੀ ਤੋਂ ਸਮਵਰਤੀ ਸੂਚੀ ਵਿੱਚ ਪਾਏ ਗਏ।',
        ],
        hi: [
          '73वें संविधान संशोधन (1992, लागू 24 अप्रैल 1993) और पंजाब पंचायती राज अधिनियम (21 अप्रैल 1994) की तिथियों में अंतर रखें।',
          'शिक्षा और वन 42वें संशोधन (1976) द्वारा राज्य सूची से समवर्ती सूची में डाले गए।',
        ],
      },
    },
    flashcards: [
      {
        id: 'fc-st-1',
        q: {
          en: '[Level B] How many seats are in the Punjab Vidhan Sabha and how many are reserved for Scheduled Castes?',
          pa: '[Level B] ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੀਆਂ ਸੀਟਾਂ ਹਨ ਅਤੇ ਕਿੰਨੀਆਂ SC ਲਈ ਰਾਖਵੀਆਂ ਹਨ?',
          hi: '[Level B] पंजाब विधान सभा में कुल कितनी सीटें हैं और कितनी SC के लिए आरक्षित हैं?',
        },
        a: {
          en: '117 total seats, with 34 seats reserved for Scheduled Castes (SCs).',
          pa: 'ਕੁੱਲ 117 ਸੀਟਾਂ, ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ 34 ਸੀਟਾਂ SC ਲਈ ਰਾਖਵੀਆਂ ਹਨ।',
          hi: 'कुल 117 सीटें, जिनमें से 34 सीटें SC के लिए आरक्षित हैं।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-st-2',
        q: {
          en: '[Level I] Under which Article and in which year was the Punjab Legislative Council (Vidhan Parishad) abolished?',
          pa: '[Level I] ਕਿਸ ਅਨੁਛੇਦ ਤਹਿਤ ਅਤੇ ਕਿਸ ਸਾਲ ਪੰਜਾਬ ਵਿਧਾਨ ਪਰਿਸ਼ਦ ਨੂੰ ਖ਼ਤਮ ਕੀਤਾ ਗਿਆ?',
          hi: '[Level I] किस अनुच्छेद के तहत और किस वर्ष पंजाब विधान परिषद को समाप्त किया गया?',
        },
        a: {
          en: 'Under Article 169, via the Punjab Legislative Council (Abolition) Act 1969 (effective January 1970).',
          pa: 'ਅਨੁਛੇਦ 169 ਤਹਿਤ, ਜਨਵਰੀ 1970 ਵਿੱਚ (ਐਕਟ 1969 ਰਾਹੀਂ)।',
          hi: 'अनुच्छेद 169 के तहत, जनवरी 1970 में (अधिनियम 1969 द्वारा)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-st-3',
        q: {
          en: '[Level A] Under the Punjab Panchayati Raj Act 1994, how many Panches can a Gram Panchayat have besides the Sarpanch?',
          pa: '[Level A] ਪੰਜਾਬ ਪੰਚਾਇਤੀ ਰਾਜ ਐਕਟ 1994 ਅਨੁਸਾਰ ਗ੍ਰਾਮ ਪੰਚਾਇਤ ਵਿੱਚ ਸਰਪੰਚ ਤੋਂ ਇਲਾਵਾ ਕਿੰਨੇ ਪੰਚ ਹੋ ਸਕਦੇ ਹਨ?',
          hi: '[Level A] पंजाब पंचायती राज अधिनियम 1994 के अनुसार ग्राम पंचायत में सरपंच के अलावा कितने पंच हो सकते हैं?',
        },
        a: {
          en: '5 to 13 Panches (depending on village population), plus a directly elected Sarpanch.',
          pa: '5 ਤੋਂ 13 ਪੰਚ (ਆਬਾਦੀ ਅਨੁਸਾਰ) ਅਤੇ ਇੱਕ ਸਿੱਧਾ ਚੁਣਿਆ ਸਰਪੰਚ।',
          hi: '5 से 13 पंच (जनसंख्या के अनुसार) तथा एक प्रत्यक्ष निर्वाचित सरपंच।',
        },
        difficulty: 'hard',
      },
      {
        id: 'fc-st-4',
        q: {
          en: '[Level A] What percentage of seats are reserved for women in Punjab’s Panchayati Raj Institutions and Urban Local Bodies?',
          pa: '[Level A] ਪੰਜਾਬ ਦੀਆਂ ਪੰਚਾਇਤੀ ਰਾਜ ਅਤੇ ਸ਼ਹਿਰੀ ਸਥਾਨਕ ਸੰਸਥਾਵਾਂ ਵਿੱਚ ਔਰਤਾਂ ਲਈ ਕਿੰਨੇ ਪ੍ਰਤੀਸ਼ਤ ਰਾਖਵਾਂਕਰਨ ਹੈ?',
          hi: '[Level A] पंजाब की पंचायती राज और शहरी स्थानीय संस्थाओं में महिलाओं के लिए कितने प्रतिशत आरक्षण है?',
        },
        a: {
          en: '50% reservation for women (enhanced from 33% via the 2017 Amendment).',
          pa: '50% ਰਾਖਵਾਂਕਰਨ (2017 ਦੀ ਸੋਧ ਰਾਹੀਂ 33% ਤੋਂ ਵਧਾ ਕੇ 50% ਕੀਤਾ ਗਿਆ)।',
          hi: '50% आरक्षण (2017 के संशोधन द्वारा 33% से बढ़ाकर 50% किया गया)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-st-5',
        q: {
          en: '[Level A] Who appoints and who removes the Chairman and members of the Punjab Public Service Commission (PPSC)?',
          pa: '[Level A] ਪੰਜਾਬ ਲੋਕ ਸੇਵਾ ਕਮਿਸ਼ਨ (PPSC) ਦੇ ਚੇਅਰਮੈਨ ਤੇ ਮੈਂਬਰਾਂ ਨੂੰ ਕੌਣ ਨਿਯੁਕਤ ਕਰਦਾ ਹੈ ਅਤੇ ਕੌਣ ਹਟਾ ਸਕਦਾ ਹੈ?',
          hi: '[Level A] पंजाब लोक सेवा आयोग (PPSC) के अध्यक्ष व सदस्यों को कौन नियुक्त करता है और कौन हटा सकता है?',
        },
        a: {
          en: 'Appointed by the Governor of Punjab (Art 316), but can be removed ONLY by the President of India (Art 317).',
          pa: 'ਨਿਯੁਕਤੀ ਪੰਜਾਬ ਦੇ ਰਾਜਪਾਲ ਦੁਆਰਾ (ਅਨੁਛੇਦ 316), ਪਰ ਹਟਾਉਣ ਦਾ ਅਧਿਕਾਰ ਸਿਰਫ਼ ਭਾਰਤ ਦੇ ਰਾਸ਼ਟਰਪਤੀ ਕੋਲ ਹੈ (ਅਨੁਛੇਦ 317)।',
          hi: 'नियुक्ति पंजाब के राज्यपाल द्वारा (अनुच्छेद 316), किंतु हटाने की शक्ति केवल भारत के राष्ट्रपति के पास है (अनुच्छेद 317)।',
        },
        difficulty: 'hard',
      },
    ],
    videos: [],
    bookRefs: [
      {
        title: 'PSEB Class 10 Samajik Sikhya (Civics: State Government & Indian Federal System)',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Civics Section',
        type: 'state-board',
      },
      {
        title: 'NCERT Class 11 Indian Constitution at Work (Ch 7: Federalism & Ch 8: Local Governments)',
        author: 'NCERT',
        chapters: 'Chapters 7 & 8',
        type: 'ncert',
      },
    ],
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      reviewerRecord: 'Verified against Part VI, IX, IX-A, XI of Constitution of India and Punjab Panchayati Raj Act 1994',
      verifiedSyllabusDenominator: 'ERB Punjab Master Cadre SST — Polity: State Level Govt; Indian Federal System; Democracy at the Rural and Urban Level',
    },
  },

  // ==========================================================================
  // 4. FOREIGN POLICY OF INDIA & UNITED NATIONS ORGANIZATION (UNO) (B -> I -> A)
  // ==========================================================================
  'sst-foreign-policy-uno': {
    id: 'sst-foreign-policy-uno',
    topicId: 'sst-foreign-policy-uno',
    subjectId: 'social-science',
    category: 'polity',
    practiceSource: 'authored-only',
    coverageStatus: 'complete',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    title: {
      en: 'Foreign Policy of India & United Nations Organization (UNO) (B → I → A)',
      pa: 'ਭਾਰਤ ਦੀ ਵਿਦੇਸ਼ ਨੀਤੀ ਅਤੇ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਸੰਘ (UNO) (B → I → A)',
      hi: 'भारत की विदेश नीति एवं संयुक्त राष्ट्र संघ (UNO) (B → I → A)',
    },
    examRelevance: 'Punjab Master Cadre SST (6–8 Qs — Official ERB Headings: Foreign Policy, UNO)',
    estimatedTime: '45 min',
    prerequisites: {
      en: ['Basic awareness of India’s neighbours and world wars (Class 8–10 Social Science)'],
      pa: ['ਭਾਰਤ ਦੇ ਗੁਆਂਢੀ ਦੇਸ਼ਾਂ ਅਤੇ ਵਿਸ਼ਵ ਯੁੱਧਾਂ ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ (ਜਮਾਤ 8–10 ਸਮਾਜਿਕ ਸਿੱਖਿਆ)'],
      hi: ['भारत के पड़ोसी देशों और विश्व युद्धों की बुनियादी जानकारी (कक्षा 8–10 सामाजिक विज्ञान)'],
    },
    learningObjectives: {
      en: [
        '[B] Understand Article 51 (Promotion of international peace), Panchsheel (1954), Non-Alignment (NAM), and the founding of the UNO (24 October 1945).',
        '[I] Master the 6 Principal Organs of the UNO (General Assembly, UNSC P5+10, ECOSOC, Trusteeship, ICJ at The Hague, Secretariat) and UN Specialized Agencies.',
        '[A] Analyse India’s Nuclear Doctrine (Pokhran-I 1974, Pokhran-II 1998, No First Use), Gujral Doctrine (1996), Bilateral Treaties (Indus 1960, Tashkent 1966, Simla 1972, Panchsheel 1954), and Regional Groupings (SAARC, BIMSTEC, ASEAN, BRICS, SCO, QUAD, G20).',
      ],
      pa: [
        '[B] ਅਨੁਛੇਦ 51 (ਅੰਤਰਰਾਸ਼ਟਰੀ ਸ਼ਾਂਤੀ), ਪੰਚਸ਼ੀਲ (1954), ਗੁੱਟ-ਨਿਰਲੇਪ ਲਹਿਰ (NAM) ਅਤੇ UNO ਦੀ ਸਥਾਪਨਾ (24 ਅਕਤੂਬਰ 1945)।',
        '[I] ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦੇ 6 ਮੁੱਖ ਅੰਗ (ਮਹਾਸਭਾ, ਸੁਰੱਖਿਆ ਪਰਿਸ਼ਦ P5+10, ECOSOC, ICJ ਦ ਹੇਗ, ਸਕੱਤਰੇਤ) ਅਤੇ ਵਿਸ਼ੇਸ਼ ਏਜੰਸੀਆਂ।',
        '[A] ਭਾਰਤ ਦੀ ਪ੍ਰਮਾਣੂ ਨੀਤੀ (ਪੋਖਰਣ-I 1974, ਪੋਖਰਣ-II 1998, No First Use), ਗੁਜਰਾਲ ਸਿਧਾਂਤ (1996), ਦੁਵੱਲੀਆਂ ਸੰਧੀਆਂ (ਸਿੰਧੂ 1960, ਤਾਸ਼ਕੰਦ 1966, ਸ਼ਿਮਲਾ 1972) ਅਤੇ ਖੇਤਰੀ ਸੰਗਠਨ (SAARC, BIMSTEC, BRICS, SCO, G20)।',
      ],
      hi: [
        '[B] अनुच्छेद 51 (अंतर्राष्ट्रीय शांति), पंचशील (1954), गुटनिरपेक्ष आंदोलन (NAM) और UNO की स्थापना (24 अक्टूबर 1945)।',
        '[I] संयुक्त राष्ट्र के 6 प्रमुख अंग (महासभा, सुरक्षा परिषद P5+10, ECOSOC, ICJ द हेग, सचिवालय) और विशिष्ट एजेंसियाँ।',
        '[A] भारत की परमाणु नीति (पोखरण-I 1974, पोखरण-II 1998, No First Use), गुजराल सिद्धांत (1996), द्विपक्षीय संधियाँ (सिंधु 1960, ताशकंद 1966, शिमला 1972) और क्षेत्रीय संगठन (SAARC, BIMSTEC, BRICS, SCO, G20)।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 Official ERB Syllabus Mapping & Progression</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers official Punjab Master Cadre SST Polity headings <strong>"Foreign Policy"</strong> and <strong>"UNO"</strong> in <strong>B → I → A</strong> progression.
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · Basic (Class 6–8 Foundation)</span>
              <span class="text-xs text-slate-400">PSEB/NCERT Civics Classes 8–10</span>
            </div>
            <h3 class="text-xl font-bold text-white">1. Constitutional Basis of Foreign Policy & Birth of the UNO</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Constitutional Mandate — Article 51 (DPSP):</strong> Directs the State to: (a) promote international peace and security, (b) maintain just and honourable relations between nations, (c) foster respect for international law and treaty obligations, and (d) encourage settlement of international disputes by arbitration.</li>
              <li><strong>Panchsheel (Five Principles of Peaceful Co-existence — 29 April 1954):</strong> Signed in Beijing between PM <strong>Jawaharlal Nehru</strong> and Chinese Premier <strong>Zhou Enlai</strong>: (1) Mutual respect for territorial integrity and sovereignty, (2) Mutual non-aggression, (3) Mutual non-interference in internal affairs, (4) Equality and mutual benefit, (5) Peaceful co-existence.</li>
              <li><strong>Non-Aligned Movement (NAM):</strong> Coined by V.K. Krishna Menon (1953); Afro-Asian foundation laid at the <strong>Bandung Conference (Indonesia, April 1955)</strong>; first official NAM Summit held at <strong>Belgrade (Yugoslavia, September 1961)</strong> founded by the <strong>Five Pioneers</strong>: <strong>Jawaharlal Nehru</strong> (India), <strong>Josip Broz Tito</strong> (Yugoslavia), <strong>Gamal Abdel Nasser</strong> (Egypt), <strong>Kwame Nkrumah</strong> (Ghana), and <strong>Sukarno</strong> (Indonesia).</li>
              <li><strong>Birth of the United Nations Organization (UNO):</strong> Name coined by US President <strong>Franklin D. Roosevelt</strong>; UN Charter signed on <strong>26 June 1945</strong> at San Francisco by 50 nations (Poland signed later to make <strong>51 founding members</strong>, including India which signed on 30 Oct 1945); entered into force on <strong>24 October 1945</strong> (celebrated as <strong>UN Day</strong>). Headquarters: <strong>New York</strong>. Total members today: <strong>193</strong> (193rd member: <strong>South Sudan, 2011</strong>). Official languages (6): <strong>Arabic, Chinese, English, French, Russian, Spanish</strong>.</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · Intermediate (Class 9–10 PSEB/NCERT)</span>
              <span class="text-xs text-slate-400">6 Principal Organs & Specialized Agencies of UNO</span>
            </div>
            <h3 class="text-xl font-bold text-white">2. Six Principal Organs of the UNO & Specialized Agencies</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-700 text-amber-300">
                    <th class="p-2">UN Organ / Agency</th>
                    <th class="p-2">Headquarters</th>
                    <th class="p-2">Structure & High-Yield Exam Facts</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300 divide-y divide-slate-800">
                  <tr>
                    <td class="p-2 font-semibold text-white">1. General Assembly (UNGA)</td>
                    <td class="p-2">New York</td>
                    <td class="p-2">"Parliament of Nations" — all 193 members have 1 vote; 2/3rd majority on important questions. <strong>Vijaya Lakshmi Pandit</strong> was the <strong>first woman President of UNGA (8th Session, 1953)</strong>.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">2. Security Council (UNSC)</td>
                    <td class="p-2">New York</td>
                    <td class="p-2"><strong>15 members:</strong> <strong>5 Permanent (P5 with Veto power: USA, UK, France, Russia, China)</strong> + <strong>10 Non-Permanent</strong> elected by UNGA for <strong>2-year terms</strong> (originally 6 non-permanent, expanded to 10 in 1965). India has served 8 terms on UNSC (most recently 2021–22) and is a member of <strong>G4</strong> (India, Brazil, Germany, Japan) seeking permanent seats.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">3. Economic & Social Council (ECOSOC)</td>
                    <td class="p-2">New York</td>
                    <td class="p-2"><strong>54 members</strong> elected by UNGA for staggered <strong>3-year terms</strong>; coordinates specialized economic, social, and SDG agencies.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">4. Trusteeship Council</td>
                    <td class="p-2">New York</td>
                    <td class="p-2">Supervised 11 Trust Territories; <strong>suspended operations on 1 November 1994</strong> after Palau (last trust territory) gained independence.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">5. International Court of Justice (ICJ)</td>
                    <td class="p-2"><strong>The Hague (Netherlands)</strong> — Peace Palace</td>
                    <td class="p-2">Only principal UN organ located <strong>outside New York</strong>! <strong>15 Judges</strong> elected by UNGA and UNSC for a <strong>9-year term</strong> (5 retire every 3 years). Indian Judges at ICJ: <strong>Sir B.N. Rau, Dr. Nagendra Singh (President of ICJ 1985–88), R.S. Pathak, and Justice Dalveer Bhandari</strong>.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">6. The Secretariat</td>
                    <td class="p-2">New York</td>
                    <td class="p-2">Headed by the <strong>Secretary-General</strong> appointed by UNGA on UNSC recommendation for a <strong>5-year renewable term</strong>. 1st SG: <strong>Trygve Lie</strong> (Norway); 1st Asian SG: <strong>U Thant</strong> (Myanmar); Current (9th) SG: <strong>António Guterres</strong> (Portugal).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Key UN Agencies & HQ Matrix</td>
                    <td class="p-2">Geneva, Paris, Rome, Washington, Vienna</td>
                    <td class="p-2"><strong>Geneva:</strong> WHO (7 April 1948), ILO (1919 — Nobel Peace Prize 1969), WTO (1995), UNHCR, WIPO.<br/><strong>Paris:</strong> UNESCO (1945). <strong>New York:</strong> UNICEF (1946), UNDP.<br/><strong>Rome:</strong> FAO (16 Oct 1945), WFP. <strong>Vienna:</strong> IAEA (1957), UNIDO.<br/><strong>Washington D.C.:</strong> IMF & World Bank (Bretton Woods Twins, 1944).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · Advanced (Class 11–12 & Graduation)</span>
              <span class="text-xs text-slate-400">Indian Foreign Policy Doctrines, Treaties & Groupings</span>
            </div>
            <h3 class="text-xl font-bold text-white">3. India’s Strategic Doctrines, Bilateral Treaties & Multilateral Groupings</h3>
            <ul class="text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Key Bilateral Treaties & Milestones with Neighbours:</strong>
                <br/>• <strong>1960 Indus Waters Treaty (19 Sept 1960, Karachi):</strong> Signed by PM Nehru and President Ayub Khan (brokered by World Bank): India got exclusive control over the 3 Eastern Rivers (<strong>Ravi, Beas, Sutlej</strong>) and Pakistan got the 3 Western Rivers (<strong>Indus, Jhelum, Chenab</strong>) with limited non-consumptive use by India.
                <br/>• <strong>1966 Tashkent Declaration (10 Jan 1966):</strong> Signed by PM <strong>Lal Bahadur Shastri</strong> and Ayub Khan (mediated by Soviet Premier Kosygin) after the 1965 War.
                <br/>• <strong>1971 Indo-Soviet Treaty of Peace, Friendship & Cooperation (Aug 1971) & Bangladesh Liberation War (Dec 1971)</strong> → followed by the <strong>Simla Agreement (2 July 1972)</strong> signed by PM <strong>Indira Gandhi</strong> and <strong>Zulfikar Ali Bhutto</strong> (converting the Ceasefire Line in J&amp;K into the <strong>Line of Control / LoC</strong> and mandating bilateral resolution of disputes).
                <br/>• <strong>Other Landmark Accords:</strong> 1950 Indo-Nepal Treaty of Peace and Friendship; 1974 Kachchatheevu Island agreement & <strong>1987 Indo-Sri Lanka Accord</strong> (Rajiv Gandhi – J.R. Jayewardene, IPKF deployment); <strong>1996 Ganga Water Treaty</strong> (30-year Farakka water sharing between PM H.D. Deve Gowda and PM Sheikh Hasina); <strong>100th Constitutional Amendment Act, 2015</strong> (India–Bangladesh Land Boundary Agreement exchanging 111 Indian enclaves for 51 Bangladeshi enclaves).</li>
              <li><strong>Major Foreign Policy Doctrines of India:</strong>
                <br/>• <strong>Gujral Doctrine (1996 — I.K. Gujral):</strong> Five principles guiding relations with immediate South Asian neighbours—with smaller neighbours (Bangladesh, Bhutan, Maldives, Nepal, Sri Lanka), India does not ask for reciprocity but gives and accommodates what it can in good faith and trust.
                <br/>• <strong>Look East Policy (1991 — PM P.V. Narasimha Rao) → Act East Policy (2014 — PM Narendra Modi)</strong> & <strong>Neighbourhood First Policy</strong>.
                <br/>• <strong>India’s Nuclear Doctrine (Draft 1999, Official CCS Adoption 4 Jan 2003):</strong> After <strong>Pokhran-I (18 May 1974 — <em>Smiling Buddha</em>)</strong> and <strong>Pokhran-II (11 & 13 May 1998 — <em>Operation Shakti</em>)</strong>, India adopted: (1) Building and maintaining a <strong>Credible Minimum Deterrence</strong>, (2) A posture of <strong>"No First Use" (NFU)</strong> (nuclear weapons will only be used in retaliation against a nuclear attack on Indian territory or on Indian forces anywhere), (3) Massive retaliation to inflict unacceptable damage, (4) Non-use of nuclear weapons against non-nuclear weapon states, and (5) Political control vested in the <strong>Nuclear Command Authority (NCA)</strong> whose Political Council is chaired by the <strong>Prime Minister</strong>. (India has not signed the discriminatory 1968 NPT or CTBT).</li>
              <li><strong>Regional & Multilateral Groupings:</strong>
                <br/>• <strong>SAARC (South Asian Association for Regional Cooperation):</strong> Founded on <strong>8 December 1985 at Dhaka</strong> (idea by Ziaur Rahman); <strong>Secretariat at Kathmandu (Nepal)</strong>; <strong>8 Members</strong> (Mnemonic <em>MBBS PAIN</em>: Maldives, Bhutan, Bangladesh, Sri Lanka, Pakistan, Afghanistan [joined 2007], India, Nepal).
                <br/>• <strong>BIMSTEC (1997 Bangkok Declaration, Secretariat Dhaka):</strong> 7 members (Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka, Thailand) bridging South and Southeast Asia.
                <br/>• <strong>ASEAN (1967 Bangkok Declaration, Secretariat Jakarta, 10 members):</strong> India became Sectoral Partner (1992), Dialogue Partner (1996), Summit-level Partner (2002), and Comprehensive Strategic Partner (2022).
                <br/>• <strong>BRICS (2006/2009 — New Development Bank HQ Shanghai), SCO (2001 — India & Pakistan joined as full members in June 2017 at Astana), QUAD (India, USA, Japan, Australia), and G20 (India’s 2023 New Delhi Summit admitted the African Union as permanent member).</strong></li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 ਸਰਕਾਰੀ ERB ਸਿਲੇਬਸ ਮੈਪਿੰਗ (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ ਅਧਿਕਾਰਤ ਸਿਰਲੇਖ <strong>"Foreign Policy"</strong> ਅਤੇ <strong>"UNO"</strong> ਨੂੰ <strong>B → I → A</strong> ਕ੍ਰਮ ਵਿੱਚ ਸਮਝਾਇਆ ਗਿਆ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · ਮੁੱਢਲਾ ਪੱਧਰ (ਜਮਾਤ 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. ਅਨੁਛੇਦ 51, ਪੰਚਸ਼ੀਲ (1954), ਗੁੱਟ-ਨਿਰਲੇਪ ਲਹਿਰ (NAM) ਅਤੇ UNO ਦੀ ਸਥਾਪਨਾ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਅਨੁਛੇਦ 51 (DPSP):</strong> ਰਾਜ ਨੂੰ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸ਼ਾਂਤੀ ਅਤੇ ਸੁਰੱਖਿਆ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਦਾ ਨਿਰਦੇਸ਼ ਦਿੰਦਾ ਹੈ।</li>
              <li><strong>ਪੰਚਸ਼ੀਲ ਸਮਝੌਤਾ (29 ਅਪ੍ਰੈਲ 1954):</strong> ਪੰਡਿਤ ਜਵਾਹਰ ਲਾਲ ਨਹਿਰੂ ਅਤੇ ਚੀਨੀ ਪ੍ਰਧਾਨ ਮੰਤਰੀ <strong>ਚਾਊ ਐਨ-ਲਾਈ (Zhou Enlai)</strong> ਵਿਚਕਾਰ ਸ਼ਾਂਤਮਈ ਸਹਿ-ਹੋਂਦ ਦੇ 5 ਸਿਧਾਂਤ।</li>
              <li><strong>ਗੁੱਟ-ਨਿਰਲੇਪ ਲਹਿਰ (NAM):</strong> ਬਾਂਡੁੰਗ ਸੰਮੇਲਨ (1955) ਤੋਂ ਬਾਅਦ ਪਹਿਲਾ ਸਿਖਰ ਸੰਮੇਲਨ <strong>ਬੇਲਗ੍ਰੇਡ (1961)</strong> ਵਿੱਚ ਹੋਇਆ। 5 ਸੰਸਥਾਪਕ: <strong>ਨਹਿਰੂ (ਭਾਰਤ), ਟੀਟੋ (ਯੂਗੋਸਲਾਵੀਆ), ਨਾਸਿਰ (ਮਿਸਰ), ਨਕਰੂਮਾ (ਘਾਨਾ) ਅਤੇ ਸੁਕਰਨੋ (ਇੰਡੋਨੇਸ਼ੀਆ)</strong>।</li>
              <li><strong>ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਸੰਘ (UNO):</strong> ਸਥਾਪਨਾ <strong>24 ਅਕਤੂਬਰ 1945</strong> (ਸੈਨ ਫਰਾਂਸਿਸਕੋ ਚਾਰਟਰ, 51 ਮੂਲ ਮੈਂਬਰ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਭਾਰਤ ਵੀ ਸ਼ਾਮਲ ਸੀ; ਵਰਤਮਾਨ ਵਿੱਚ <strong>193 ਮੈਂਬਰ</strong> — 193ਵਾਂ ਦੱਖਣੀ ਸੂਡਾਨ 2011)। ਮੁੱਖ ਦਫ਼ਤਰ: <strong>ਨਿਊਯਾਰਕ</strong>। 6 ਅਧਿਕਾਰਤ ਭਾਸ਼ਾਵਾਂ: ਅਰਬੀ, ਚੀਨੀ, ਅੰਗਰੇਜ਼ੀ, ਫਰੈਂਚ, ਰੂਸੀ, ਸਪੈਨਿਸ਼।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · ਮੱਧਮ ਪੱਧਰ (ਜਮਾਤ 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. UNO ਦੇ 6 ਮੁੱਖ ਅੰਗ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਏਜੰਸੀਆਂ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>1. ਆਮ ਸਭਾ (General Assembly):</strong> 193 ਦੇਸ਼; <strong>ਵਿਜੈ ਲਕਸ਼ਮੀ ਪੰਡਿਤ</strong> 1953 ਵਿੱਚ ਇਸ ਦੀ ਪਹਿਲੀ ਮਹਿਲਾ ਪ੍ਰਧਾਨ ਬਣੀ।</li>
              <li><strong>2. ਸੁਰੱਖਿਆ ਪਰਿਸ਼ਦ (UNSC):</strong> ਕੁੱਲ <strong>15 ਮੈਂਬਰ</strong> = <strong>5 ਸਥਾਈ (P5 ਵੀਟੋ ਸ਼ਕਤੀ ਵਾਲੇ: ਅਮਰੀਕਾ, ਬ੍ਰਿਟੇਨ, ਫਰਾਂਸ, ਰੂਸ, ਚੀਨ)</strong> + <strong>10 ਅਸਥਾਈ ਮੈਂਬਰ (2 ਸਾਲ ਦੇ ਕਾਰਜਕਾਲ ਲਈ)</strong>।</li>
              <li><strong>3. ਆਰਥਿਕ ਅਤੇ ਸਮਾਜਿਕ ਪਰਿਸ਼ਦ (ECOSOC):</strong> <strong>54 ਮੈਂਬਰ</strong> (3 ਸਾਲ ਦਾ ਕਾਰਜਕਾਲ)। <strong>4. ਟਰੱਸਟੀਸ਼ਿਪ ਕੌਂਸਲ</strong> (1994 ਤੋਂ ਮੁਅੱਤਲ)।</li>
              <li><strong>5. ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ (ICJ):</strong> ਮੁੱਖ ਦਫ਼ਤਰ <strong>ਦ ਹੇਗ (ਨੀਦਰਲੈਂਡਜ਼)</strong> ਵਿੱਚ ਹੈ (ਇੱਕੋ-ਇੱਕ ਮੁੱਖ ਅੰਗ ਜੋ ਨਿਊਯਾਰਕ ਤੋਂ ਬਾਹਰ ਹੈ!)। <strong>15 ਜੱਜ</strong>, ਕਾਰਜਕਾਲ <strong>9 ਸਾਲ</strong> (ਡਾ. ਨਗੇਂਦਰ ਸਿੰਘ, ਬੀ.ਐਨ. ਰਾਓ, ਦਲਵੀਰ ਭੰਡਾਰੀ ਭਾਰਤੀ ਜੱਜ ਰਹੇ)।</li>
              <li><strong>6. ਸਕੱਤਰੇਤ (Secretariat):</strong> ਮੁਖੀ ਸਕੱਤਰ-ਜਨਰਲ (5 ਸਾਲ ਕਾਰਜਕਾਲ); ਪਹਿਲੇ: <strong>ਟ੍ਰਿਗਵੇ ਲੀ (ਨਾਰਵੇ)</strong>; ਪਹਿਲੇ ਏਸ਼ੀਆਈ: <strong>ਊ ਥਾਂਟ (ਮਿਆਂਮਾਰ)</strong>; ਵਰਤਮਾਨ (9ਵੇਂ): <strong>ਐਂਟੋਨੀਓ ਗੁਟੇਰੇਸ (ਪੁਰਤਗਾਲ)</strong>।</li>
              <li><strong>ਮੁੱਖ ਏਜੰਸੀਆਂ ਦੇ ਹੈੱਡਕੁਆਰਟਰ:</strong> ਜਿਨੇਵਾ (WHO, ILO, WTO), ਪੈਰਿਸ (UNESCO), ਨਿਊਯਾਰਕ (UNICEF, UNDP), ਰੋਮ (FAO), ਵਿਆਨਾ (IAEA), ਵਾਸ਼ਿੰਗਟਨ ਡੀ.ਸੀ. (IMF ਤੇ World Bank)।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · ਉੱਚ ਪੱਧਰ (ਜਮਾਤ 11–12 / ਗ੍ਰੈਜੂਏਸ਼ਨ)</span>
            <h3 class="text-xl font-bold text-white">3. ਭਾਰਤ ਦੀਆਂ ਪ੍ਰਮੁੱਖ ਸੰਧੀਆਂ, ਪ੍ਰਮਾਣੂ ਸਿਧਾਂਤ ਅਤੇ ਖੇਤਰੀ ਸੰਗਠਨ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਇਤਿਹਾਸਕ ਦੁਵੱਲੀਆਂ ਸੰਧੀਆਂ:</strong> <strong>ਸਿੰਧੂ ਜਲ ਸੰਧੀ (1960)</strong> — ਨਹਿਰੂ ਤੇ ਅਯੂਬ ਖ਼ਾਨ (ਪੂਰਬੀ ਦਰਿਆ ਰਾਵੀ, ਬਿਆਸ, ਸਤਲੁਜ ਭਾਰਤ ਕੋਲ); <strong>ਤਾਸ਼ਕੰਦ ਸਮਝੌਤਾ (10 ਜਨਵਰੀ 1966)</strong> — ਲਾਲ ਬਹਾਦਰ ਸ਼ਾਸਤਰੀ ਤੇ ਅਯੂਬ ਖ਼ਾਨ; <strong>ਸ਼ਿਮਲਾ ਸਮਝੌਤਾ (2 ਜੁਲਾਈ 1972)</strong> — ਇੰਦਰਾ ਗਾਂਧੀ ਤੇ ਜ਼ੁਲਫ਼ਿਕਾਰ ਅਲੀ ਭੁੱਟੋ; <strong>1996 ਗੰਗਾ ਜਲ ਸੰਧੀ</strong> (ਦੇਵਗੌੜਾ ਤੇ ਸ਼ੇਖ ਹਸੀਨਾ); <strong>100ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (2015)</strong> (ਭਾਰਤ-ਬੰਗਲਾਦੇਸ਼ ਭੂ-ਸੀਮਾ ਸਮਝੌਤਾ)।</li>
              <li><strong>ਗੁਜਰਾਲ ਸਿਧਾਂਤ (1996 — I.K. Gujral):</strong> ਛੋਟੇ ਗੁਆਂਢੀ ਦੇਸ਼ਾਂ ਨਾਲ ਬਿਨਾਂ ਕਿਸੇ ਬਦਲੇ ਦੀ ਉਮੀਦ (non-reciprocity) ਦੇ ਸਹਿਯੋਗ ਦੇ 5 ਸਿਧਾਂਤ। <strong>Look East (1991 — ਨਰਸਿਮਹਾ ਰਾਓ)</strong> ਤੋਂ <strong>Act East (2014 — ਨਰਿੰਦਰ ਮੋਦੀ)</strong>।</li>
              <li><strong>ਭਾਰਤ ਦੀ ਪ੍ਰਮਾਣੂ ਨੀਤੀ:</strong> ਪੋਖਰਣ-I (18 ਮਈ 1974 — <em>Smiling Buddha</em>) ਅਤੇ ਪੋਖਰਣ-II (11–13 ਮਈ 1998 — <em>Operation Shakti</em>); ਮੁੱਖ ਥੰਮ੍ਹ: <strong>ਪਹਿਲਾਂ ਵਰਤੋਂ ਨਾ ਕਰਨਾ (No First Use — NFU)</strong> ਅਤੇ ਘੱਟੋ-ਘੱਟ ਭਰੋਸੇਯੋਗ ਪ੍ਰਤੀਰੋਧ (Credible Minimum Deterrence)।</li>
              <li><strong>SAARC (8 ਦਸੰਬਰ 1985 ਢਾਕਾ, ਸਕੱਤਰੇਤ ਕਾਠਮੰਡੂ, 8 ਮੈਂਬਰ — MBBS PAIN)</strong>, <strong>BIMSTEC (1997, ਸਕੱਤਰੇਤ ਢਾਕਾ, 7 ਮੈਂਬਰ)</strong>, <strong>SCO (ਭਾਰਤ 2017 ਵਿੱਚ ਸ਼ਾਮਲ)</strong>, <strong>BRICS</strong> ਅਤੇ <strong>G20</strong>।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 आधिकारिक ERB पाठ्यक्रम मानचित्रण (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर SST के आधिकारिक शीर्षक <strong>"Foreign Policy"</strong> तथा <strong>"UNO"</strong> को <strong>B → I → A</strong> क्रम में प्रस्तुत किया गया है।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · आधारभूत स्तर (कक्षा 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. अनुच्छेद 51, पंचशील (1954), गुटनिरपेक्ष आंदोलन (NAM) एवं UNO की स्थापना</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>अनुच्छेद 51 (DPSP):</strong> राज्य को अंतर्राष्ट्रीय शांति और सुरक्षा की अभिवृद्धि करने का निर्देश देता है।</li>
              <li><strong>पंचशील समझौता (29 अप्रैल 1954):</strong> पं. जवाहरलाल नेहरू और चीनी प्रधानमंत्री <strong>चाऊ एन-लाई (Zhou Enlai)</strong> के बीच शांतिपूर्ण सह-अस्तित्व के 5 सिद्धांत।</li>
              <li><strong>गुटनिरपेक्ष आंदोलन (NAM):</strong> बांडुंग सम्मेलन (1955) के बाद प्रथम शिखर सम्मेलन <strong>बेलग्रेड (1961)</strong> में हुआ। 5 संस्थापक: <strong>नेहरू (भारत), टीटो (यूगोस्लाविया), नासिर (मिस्र), नक्रूमा (घाना) और सुकर्णो (इंडोनेशिया)</strong>।</li>
              <li><strong>संयुक्त राष्ट्र संघ (UNO):</strong> स्थापना <strong>24 अक्टूबर 1945</strong> (सैन फ्रांसिस्को चार्टर, भारत सहित 51 संस्थापक सदस्य; वर्तमान में <strong>193 सदस्य</strong> — 193वां दक्षिणी सूडान 2011)। मुख्यालय: <strong>न्यूयॉर्क</strong>। 6 आधिकारिक भाषाएँ: अरबी, चीनी, अंग्रेजी, फ्रेंच, रूसी, स्पेनिश।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · मध्यम स्तर (कक्षा 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. UNO के 6 प्रमुख अंग एवं विशिष्ट एजेंसियाँ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>1. महासभा (UNGA):</strong> 193 सदस्य; <strong>विजय लक्ष्मी पंडित</strong> 1953 में इसकी प्रथम महिला अध्यक्ष बनीं।</li>
              <li><strong>2. सुरक्षा परिषद (UNSC):</strong> कुल <strong>15 सदस्य</strong> = <strong>5 स्थायी (P5 वीटो शक्ति वाले: अमेरिका, ब्रिटेन, फ्रांस, रूस, चीन)</strong> + <strong>10 अस्थायी सदस्य (2 वर्ष के कार्यकाल हेतु)</strong>।</li>
              <li><strong>3. आर्थिक एवं सामाजिक परिषद (ECOSOC):</strong> <strong>54 सदस्य</strong> (3 वर्ष का कार्यकाल)। <strong>4. न्यासिता परिषद</strong> (1994 से निलंबित)।</li>
              <li><strong>5. अंतर्राष्ट्रीय न्यायालय (ICJ):</strong> मुख्यालय <strong>द हेग (नीदरलैंड)</strong> में है (एकमात्र प्रमुख अंग जो न्यूयॉर्क से बाहर है!)। <strong>15 न्यायाधीश</strong>, कार्यकाल <strong>9 वर्ष</strong> (डॉ. नगेंद्र सिंह, बी.एन. राव, दलवीर भंडारी भारतीय न्यायाधीश रहे)।</li>
              <li><strong>6. सचिवालय (Secretariat):</strong> प्रमुख महासचिव (5 वर्ष कार्यकाल); प्रथम: <strong>ट्रिग्वे ली (नॉर्वे)</strong>; प्रथम एशियाई: <strong>यू थांट (म्यांमार)</strong>; वर्तमान (9वें): <strong>एंटोनियो गुटेरेस (पुर्तगाल)</strong>।</li>
              <li><strong>प्रमुख एजेंसियों के मुख्यालय:</strong> जिनेवा (WHO, ILO, WTO), पेरिस (UNESCO), न्यूयॉर्क (UNICEF, UNDP), रोम (FAO), वियना (IAEA), वाशिंगटन डी.सी. (IMF व World Bank)।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · उन्नत स्तर (कक्षा 11–12 / स्नातक)</span>
            <h3 class="text-xl font-bold text-white">3. भारत की प्रमुख संधियाँ, परमाणु सिद्धांत एवं क्षेत्रीय संगठन</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ऐतिहासिक द्विपक्षीय संधियाँ:</strong> <strong>सिंधु जल संधि (1960)</strong> — नेहरू व अयूब खान (पूर्वी नदियाँ रावी, ब्यास, सतलुज भारत को); <strong>ताशकंद समझौता (10 जनवरी 1966)</strong> — लाल बहादुर शास्त्री व अयूब खान; <strong>शिमला समझौता (2 जुलाई 1972)</strong> — इंदिरा गांधी व जुल्फिकार अली भुट्टो; <strong>1996 गंगा जल संधि</strong> (देवगौड़ा व शेख हसीना); <strong>100वां संविधान संशोधन (2015)</strong> (भारत-बांग्लादेश भूमि सीमा समझौता)।</li>
              <li><strong>गुजराल सिद्धांत (1996 — I.K. Gujral):</strong> छोटे पड़ोसी देशों के साथ बिना पारस्परिकता (non-reciprocity) की अपेक्षा के उदार सहयोग के 5 सिद्धांत। <strong>Look East (1991 — पी.वी. नरसिम्हा राव)</strong> से <strong>Act East (2014 — नरेंद्र मोदी)</strong>।</li>
              <li><strong>भारत का परमाणु सिद्धांत:</strong> पोखरण-I (18 मई 1974 — <em>Smiling Buddha</em>) व पोखरण-II (11–13 मई 1998 — <em>Operation Shakti</em>); मुख्य स्तंभ: <strong>प्रथम प्रयोग नहीं (No First Use — NFU)</strong> और विश्वसनीय न्यूनतम प्रतिरोधक क्षमता (Credible Minimum Deterrence)।</li>
              <li><strong>SAARC (8 दिसंबर 1985 ढाका, सचिवालय काठमांडू, 8 सदस्य — MBBS PAIN)</strong>, <strong>BIMSTEC (1997, सचिवालय ढाका, 7 सदस्य)</strong>, <strong>SCO (भारत 2017 में शामिल)</strong>, <strong>BRICS</strong> और <strong>G20</strong>।</li>
            </ul>
          </div>
        </div>
      `,
    },
    summary: {
      en: 'Covers Indian Foreign Policy (Article 51, Panchsheel 1954, NAM 1961 Belgrade, Indus Waters Treaty 1960, Tashkent 1966, Simla 1972, Gujral Doctrine 1996, Look East 1991 / Act East 2014, Nuclear Doctrine NFU & Pokhran-I/II, SAARC/BIMSTEC/ASEAN/BRICS/SCO/G20) and the UNO (founded 24 Oct 1945, 193 members, 6 Principal Organs including UNSC P5+10 and ICJ at The Hague, and Specialized Agencies).',
      pa: 'ਭਾਰਤ ਦੀ ਵਿਦੇਸ਼ ਨੀਤੀ (ਅਨੁਛੇਦ 51, ਪੰਚਸ਼ੀਲ 1954, ਗੁੱਟ-ਨਿਰਲੇਪ ਲਹਿਰ 1961 ਬੇਲਗ੍ਰੇਡ, ਸਿੰਧੂ ਜਲ ਸੰਧੀ 1960, ਤਾਸ਼ਕੰਦ 1966, ਸ਼ਿਮਲਾ 1972, ਗੁਜਰਾਲ ਸਿਧਾਂਤ 1996, Look East 1991 / Act East 2014, ਪ੍ਰਮਾਣੂ ਨੀਤੀ NFU, SAARC/BIMSTEC/SCO/G20) ਅਤੇ UNO (ਸਥਾਪਨਾ 24 ਅਕਤੂਬਰ 1945, 193 ਮੈਂਬਰ, 6 ਮੁੱਖ ਅੰਗ ਅਤੇ ਵਿਸ਼ੇਸ਼ ਏਜੰਸੀਆਂ) ਦਾ ਸੰਪੂਰਨ ਸਾਰ।',
      hi: 'भारत की विदेश नीति (अनुच्छेद 51, पंचशील 1954, गुटनिरपेक्ष आंदोलन 1961 बेलग्रेड, सिंधु जल संधि 1960, ताशकंद 1966, शिमला 1972, गुजराल सिद्धांत 1996, Look East 1991 / Act East 2014, परमाणु नीति NFU, SAARC/BIMSTEC/SCO/G20) और UNO (स्थापना 24 अक्टूबर 1945, 193 सदस्य, 6 प्रमुख अंग और विशिष्ट एजेंसियाँ) का संपूर्ण सार।',
    },
    keyNotes: {
      en: [
        '[B] Article 51 (Part IV DPSP) is the constitutional basis of India’s foreign policy and promotion of international peace.',
        '[B] Panchsheel Agreement was signed on 29 April 1954 between PM Jawaharlal Nehru and Chinese Premier Zhou Enlai.',
        '[B] First NAM Summit was held at Belgrade (1961), founded by Nehru, Tito, Nasser, Nkrumah, and Sukarno.',
        '[B] UNO was established on 24 October 1945 with 51 founding members (including India); today it has 193 members (193rd: South Sudan, 2011).',
        '[I] UN Security Council has 15 members: 5 Permanent Veto members (USA, UK, France, Russia, China) + 10 Non-Permanent elected for 2-year terms.',
        '[I] International Court of Justice (ICJ) is located at The Hague (Netherlands) with 15 judges elected for 9-year terms.',
        '[I] Vijaya Lakshmi Pandit became the first woman President of the UN General Assembly in 1953 (8th Session).',
        '[A] Bilateral Treaties Chronology: Panchsheel (1954) → Indus Waters Treaty (1960) → Tashkent (1966) → Indo-Soviet Treaty (1971) → Simla Agreement (1972) → Indo-Sri Lanka Accord (1987) → Ganga Water Treaty (1996).',
        '[A] Pokhran-I (18 May 1974) was codenamed "Smiling Buddha"; Pokhran-II (11–13 May 1998) was codenamed "Operation Shakti"; India follows a "No First Use" (NFU) nuclear doctrine.',
        '[A] SAARC was founded on 8 December 1985 at Dhaka with its Permanent Secretariat at Kathmandu (Nepal) and has 8 members.',
      ],
      pa: [
        '[B] ਅਨੁਛੇਦ 51 (ਭਾਗ IV DPSP) ਭਾਰਤ ਦੀ ਵਿਦੇਸ਼ ਨੀਤੀ ਅਤੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸ਼ਾਂਤੀ ਦਾ ਸੰਵਿਧਾਨਕ ਅਧਾਰ ਹੈ।',
        '[B] ਪੰਚਸ਼ੀਲ ਸਮਝੌਤਾ 29 ਅਪ੍ਰੈਲ 1954 ਨੂੰ ਨਹਿਰੂ ਅਤੇ ਚੀਨੀ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਚਾਊ ਐਨ-ਲਾਈ ਵਿਚਕਾਰ ਹੋਇਆ।',
        '[B] ਗੁੱਟ-ਨਿਰਲੇਪ ਲਹਿਰ (NAM) ਦਾ ਪਹਿਲਾ ਸਿਖਰ ਸੰਮੇਲਨ 1961 ਵਿੱਚ ਬੇਲਗ੍ਰੇਡ (ਯੂਗੋਸਲਾਵੀਆ) ਵਿਖੇ ਹੋਇਆ।',
        '[B] UNO ਦੀ ਸਥਾਪਨਾ 24 ਅਕਤੂਬਰ 1945 ਨੂੰ 51 ਮੂਲ ਮੈਂਬਰਾਂ ਨਾਲ ਹੋਈ; ਅੱਜ ਇਸ ਦੇ 193 ਮੈਂਬਰ ਹਨ (193ਵਾਂ: ਦੱਖਣੀ ਸੂਡਾਨ, 2011)।',
        '[I] ਸੁਰੱਖਿਆ ਪਰਿਸ਼ਦ (UNSC) ਵਿੱਚ 15 ਮੈਂਬਰ ਹਨ: 5 ਸਥਾਈ ਵੀਟੋ ਮੈਂਬਰ + 10 ਅਸਥਾਈ (2 ਸਾਲ ਦਾ ਕਾਰਜਕਾਲ)।',
        '[I] ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ (ICJ) ਦ ਹੇਗ (ਨੀਦਰਲੈਂਡਜ਼) ਵਿੱਚ ਹੈ ਜਿਸ ਵਿੱਚ 15 ਜੱਜ 9 ਸਾਲ ਲਈ ਚੁਣੇ ਜਾਂਦੇ ਹਨ।',
        '[I] ਵਿਜੈ ਲਕਸ਼ਮੀ ਪੰਡਿਤ 1953 ਵਿੱਚ ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਮਹਾਸਭਾ ਦੀ ਪਹਿਲੀ ਮਹਿਲਾ ਪ੍ਰਧਾਨ ਬਣੀ।',
        '[A] ਦੁਵੱਲੀਆਂ ਸੰਧੀਆਂ: ਪੰਚਸ਼ੀਲ (1954) → ਸਿੰਧੂ ਜਲ ਸੰਧੀ (1960) → ਤਾਸ਼ਕੰਦ (1966) → ਸ਼ਿਮਲਾ ਸਮਝੌਤਾ (1972) → ਭਾਰਤ-ਸ੍ਰੀਲੰਕਾ ਸਮਝੌਤਾ (1987) → ਗੰਗਾ ਜਲ ਸੰਧੀ (1996)।',
        '[A] ਪੋਖਰਣ-I (1974) ਦਾ ਕੋਡ ਨਾਮ "Smiling Buddha" ਅਤੇ ਪੋਖਰਣ-II (1998) ਦਾ ਕੋਡ ਨਾਮ "Operation Shakti" ਸੀ; ਭਾਰਤ "No First Use" ਨੀਤੀ ਅਪਣਾਉਂਦਾ ਹੈ।',
        '[A] SAARC ਦੀ ਸਥਾਪਨਾ 8 ਦਸੰਬਰ 1985 ਨੂੰ ਢਾਕਾ ਵਿਖੇ ਹੋਈ ਅਤੇ ਇਸ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ ਕਾਠਮੰਡੂ (ਨੇਪਾਲ) ਵਿੱਚ ਹੈ (8 ਮੈਂਬਰ)।',
      ],
      hi: [
        '[B] अनुच्छेद 51 (भाग IV DPSP) भारत की विदेश नीति और अंतर्राष्ट्रीय शांति का संवैधानिक आधार है।',
        '[B] पंचशील समझौता 29 अप्रैल 1954 को नेहरू और चीनी प्रधानमंत्री चाऊ एन-लाई के बीच हुआ।',
        '[B] गुटनिरपेक्ष आंदोलन (NAM) का प्रथम शिखर सम्मेलन 1961 में बेलग्रेड (यूगोस्लाविया) में हुआ।',
        '[B] UNO की स्थापना 24 अक्टूबर 1945 को 51 संस्थापक सदस्यों के साथ हुई; आज इसके 193 सदस्य हैं (193वां: दक्षिणी सूडान, 2011)।',
        '[I] सुरक्षा परिषद (UNSC) में 15 सदस्य हैं: 5 स्थायी वीटो सदस्य + 10 अस्थायी (2 वर्ष का कार्यकाल)।',
        '[I] अंतर्राष्ट्रीय न्यायालय (ICJ) द हेग (नीदरलैंड) में है जिसमें 15 न्यायाधीश 9 वर्ष के लिए चुने जाते हैं।',
        '[I] विजय लक्ष्मी पंडित 1953 में संयुक्त राष्ट्र महासभा की प्रथम महिला अध्यक्ष बनीं।',
        '[A] द्विपक्षीय संधियाँ: पंचशील (1954) → सिंधु जल संधि (1960) → ताशकंद (1966) → शिमला समझौता (1972) → भारत-श्रीलंका समझौता (1987) → गंगा जल संधि (1996)।',
        '[A] पोखरण-I (1974) का कोड नाम "Smiling Buddha" और पोखरण-II (1998) का कोड नाम "Operation Shakti" था; भारत "No First Use" नीति अपनाता है।',
        '[A] SAARC की स्थापना 8 दिसंबर 1985 को ढाका में हुई तथा इसका सचिवालय काठमांडू (नेपाल) में है (8 सदस्य)।',
      ],
    },
    workedExamples: [
      {
        title: {
          en: 'Distinguishing UN Organ Tenure & Membership Numbers',
          pa: 'UNO ਦੇ ਅੰਗਾਂ ਦੀ ਮੈਂਬਰ ਗਿਣਤੀ ਅਤੇ ਕਾਰਜਕਾਲ ਦਾ ਮਿਲਾਨ',
          hi: 'UNO के अंगों की सदस्य संख्या और कार्यकाल का मिलान',
        },
        problem: {
          en: 'Match the following UN bodies with their exact membership and term of office: (1) UNSC Non-Permanent Members, (2) ECOSOC Members, (3) ICJ Judges.',
          pa: 'ਹੇਠ ਲਿਖੇ UN ਅੰਗਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀ ਮੈਂਬਰ ਗਿਣਤੀ ਅਤੇ ਕਾਰਜਕਾਲ ਨਾਲ ਮਿਲਾਓ: (1) UNSC ਅਸਥਾਈ ਮੈਂਬਰ, (2) ECOSOC ਮੈਂਬਰ, (3) ICJ ਜੱਜ।',
          hi: 'निम्नलिखित UN अंगों को उनकी सदस्य संख्या और कार्यकाल से सुमेलित करें: (1) UNSC अस्थायी सदस्य, (2) ECOSOC सदस्य, (3) ICJ न्यायाधीश।',
        },
        steps: {
          en: [
            'UNSC has 10 non-permanent members elected for a 2-year term (5 elected each year).',
            'ECOSOC has 54 members elected for a 3-year term (18 elected each year).',
            'ICJ (at The Hague) has 15 judges elected for a 9-year term (5 elected every 3 years).',
          ],
          pa: [
            'UNSC ਦੇ 10 ਅਸਥਾਈ ਮੈਂਬਰ 2 ਸਾਲ ਦੇ ਕਾਰਜਕਾਲ ਲਈ ਚੁਣੇ ਜਾਂਦੇ ਹਨ।',
            'ECOSOC ਦੇ 54 ਮੈਂਬਰ 3 ਸਾਲ ਦੇ ਕਾਰਜਕਾਲ ਲਈ ਚੁਣੇ ਜਾਂਦੇ ਹਨ।',
            'ICJ (ਦ ਹੇਗ) ਦੇ 15 ਜੱਜ 9 ਸਾਲ ਦੇ ਕਾਰਜਕਾਲ ਲਈ ਚੁਣੇ ਜਾਂਦੇ ਹਨ।',
          ],
          hi: [
            'UNSC के 10 अस्थायी सदस्य 2 वर्ष के कार्यकाल हेतु चुने जाते हैं।',
            'ECOSOC के 54 सदस्य 3 वर्ष के कार्यकाल हेतु चुने जाते हैं।',
            'ICJ (द हेग) के 15 न्यायाधीश 9 वर्ष के कार्यकाल हेतु चुने जाते हैं।',
          ],
        },
        solution: {
          en: '(1) UNSC Non-Permanent = 10 members, 2 years; (2) ECOSOC = 54 members, 3 years; (3) ICJ = 15 judges, 9 years.',
          pa: '(1) UNSC ਅਸਥਾਈ = 10 ਮੈਂਬਰ, 2 ਸਾਲ; (2) ECOSOC = 54 ਮੈਂਬਰ, 3 ਸਾਲ; (3) ICJ = 15 ਜੱਜ, 9 ਸਾਲ।',
          hi: '(1) UNSC अस्थायी = 10 सदस्य, 2 वर्ष; (2) ECOSOC = 54 सदस्य, 3 वर्ष; (3) ICJ = 15 न्यायाधीश, 9 वर्ष।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'SAARC was founded in Kathmandu and Myanmar is a member of SAARC.',
          pa: 'SAARC ਦੀ ਸਥਾਪਨਾ ਕਾਠਮੰਡੂ ਵਿੱਚ ਹੋਈ ਸੀ ਅਤੇ ਮਿਆਂਮਾਰ SAARC ਦਾ ਮੈਂਬਰ ਹੈ।',
          hi: 'SAARC की स्थापना काठमांडू में हुई थी और म्यांमार SAARC का सदस्य है।',
        },
        correction: {
          en: 'SAARC was founded in Dhaka (Bangladesh) on 8 December 1985, while its Permanent Secretariat was established in Kathmandu (Nepal) in 1987. Myanmar is NOT a member of SAARC (Myanmar is a member of BIMSTEC and ASEAN; Afghanistan is the 8th member of SAARC, joining in 2007).',
          pa: 'SAARC ਦੀ ਸਥਾਪਨਾ 8 ਦਸੰਬਰ 1985 ਨੂੰ ਢਾਕਾ ਵਿੱਚ ਹੋਈ ਸੀ, ਜਦੋਂ ਕਿ ਇਸ ਦਾ ਸਕੱਤਰੇਤ ਕਾਠਮੰਡੂ ਵਿੱਚ ਹੈ। ਮਿਆਂਮਾਰ SAARC ਦਾ ਮੈਂਬਰ ਨਹੀਂ ਹੈ (ਮਿਆਂਮਾਰ BIMSTEC ਅਤੇ ASEAN ਦਾ ਮੈਂਬਰ ਹੈ; ਅਫ਼ਗਾਨਿਸਤਾਨ 2007 ਵਿੱਚ SAARC ਦਾ 8ਵਾਂ ਮੈਂਬਰ ਬਣਿਆ)।',
          hi: 'SAARC की स्थापना 8 दिसंबर 1985 को ढाका में हुई थी, जबकि इसका सचिवालय काठमांडू में है। म्यांमार SAARC का सदस्य नहीं है (म्यांमार BIMSTEC और ASEAN का सदस्य है; अफगानिस्तान 2007 में SAARC का 8वां सदस्य बना)।',
        },
        whyItMatters: {
          en: 'Questions asking "Which of the following is NOT a member of SAARC / BIMSTEC?" appear regularly in Punjab Master Cadre SST.',
          pa: '"ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਦੇਸ਼ SAARC / BIMSTEC ਦਾ ਮੈਂਬਰ ਨਹੀਂ ਹੈ?" ਮਾਸਟਰ ਕੈਡਰ SST ਵਿੱਚ ਅਕਸਰ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
          hi: '"निम्नलिखित में से कौन-सा देश SAARC / BIMSTEC का सदस्य नहीं है?" मास्टर कैडर SST में बार-बार पूछा जाता है।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'SAARC 8 Members Mnemonic = MBBS PAIN (Maldives, Bhutan, Bangladesh, Sri Lanka, Pakistan, Afghanistan, India, Nepal). Founded: Dhaka (1985); HQ: Kathmandu.',
          'UN 6 Official Languages Mnemonic = FACERS (French, Arabic, Chinese, English, Russian, Spanish).',
          'ICJ = The Hague, 15 Judges, 9-year term; UNSC = 5 Permanent + 10 Non-Permanent (2-year term); ECOSOC = 54 members (3-year term).',
          'Indus Waters Treaty (1960): India = Eastern Rivers (Ravi, Beas, Sutlej); Pakistan = Western Rivers (Indus, Jhelum, Chenab).',
        ],
        pa: [
          'SAARC ਦੇ 8 ਮੈਂਬਰ = MBBS PAIN (ਮਾਲਦੀਵ, ਭੂਟਾਨ, ਬੰਗਲਾਦੇਸ਼, ਸ੍ਰੀਲੰਕਾ, ਪਾਕਿਸਤਾਨ, ਅਫ਼ਗਾਨਿਸਤਾਨ, ਭਾਰਤ, ਨੇਪਾਲ)। ਸਥਾਪਨਾ: ਢਾਕਾ (1985); ਮੁੱਖ ਦਫ਼ਤਰ: ਕਾਠਮੰਡੂ।',
          'UN ਦੀਆਂ 6 ਭਾਸ਼ਾਵਾਂ = FACERS (ਫਰੈਂਚ, ਅਰਬੀ, ਚੀਨੀ, ਅੰਗਰੇਜ਼ੀ, ਰੂਸੀ, ਸਪੈਨਿਸ਼)।',
          'ICJ = ਦ ਹੇਗ, 15 ਜੱਜ, 9 ਸਾਲ; UNSC = 5 ਸਥਾਈ + 10 ਅਸਥਾਈ (2 ਸਾਲ); ECOSOC = 54 ਮੈਂਬਰ (3 ਸਾਲ)।',
        ],
        hi: [
          'SAARC के 8 सदस्य = MBBS PAIN (मालदीव, भूटान, बांग्लादेश, श्रीलंका, पाकिस्तान, अफगानिस्तान, भारत, नेपाल)। स्थापना: ढाका (1985); मुख्यालय: काठमांडू।',
          'UN की 6 भाषाएँ = FACERS (फ्रेंच, अरबी, चीनी, अंग्रेजी, रूसी, स्पेनिश)।',
          'ICJ = द हेग, 15 न्यायाधीश, 9 वर्ष; UNSC = 5 स्थायी + 10 अस्थायी (2 वर्ष); ECOSOC = 54 सदस्य (3 वर्ष)।',
        ],
      },
      examTraps: {
        en: [
          'Do not confuse the Bandung Conference (1955, Indonesia) with the 1st Official NAM Summit at Belgrade (1961, Yugoslavia).',
          'Do not confuse UNESCO HQ (Paris) with UNICEF HQ (New York) or WHO/ILO/WTO HQ (Geneva).',
        ],
        pa: [
          'ਬਾਂਡੁੰਗ ਸੰਮੇਲਨ (1955, ਇੰਡੋਨੇਸ਼ੀਆ) ਅਤੇ ਪਹਿਲੇ ਅਧਿਕਾਰਤ NAM ਸਿਖਰ ਸੰਮੇਲਨ (1961, ਬੇਲਗ੍ਰੇਡ) ਵਿੱਚ ਉਲਝਣ ਨਾ ਰੱਖੋ।',
          'UNESCO (ਪੈਰਿਸ), UNICEF (ਨਿਊਯਾਰਕ) ਅਤੇ WHO/ILO/WTO (ਜਿਨੇਵਾ) ਦੇ ਮੁੱਖ ਦਫ਼ਤਰਾਂ ਵਿੱਚ ਫ਼ਰਕ ਯਾਦ ਰੱਖੋ।',
        ],
        hi: [
          'बांडुंग सम्मेलन (1955, इंडोनेशिया) और प्रथम आधिकारिक NAM शिखर सम्मेलन (1961, बेलग्रेड) में भ्रम न रखें।',
          'UNESCO (पेरिस), UNICEF (न्यूयॉर्क) और WHO/ILO/WTO (जिनेवा) के मुख्यालयों का अंतर याद रखें।',
        ],
      },
    },
    flashcards: [
      {
        id: 'fc-fp-1',
        q: {
          en: '[Level B] Which Article of the Indian Constitution directs the State to promote international peace and security?',
          pa: '[Level B] ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦਾ ਕਿਹੜਾ ਅਨੁਛੇਦ ਰਾਜ ਨੂੰ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸ਼ਾਂਤੀ ਅਤੇ ਸੁਰੱਖਿਆ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਦਾ ਨਿਰਦੇਸ਼ ਦਿੰਦਾ ਹੈ?',
          hi: '[Level B] भारतीय संविधान का कौन-सा अनुच्छेद राज्य को अंतर्राष्ट्रीय शांति और सुरक्षा की अभिवृद्धि का निर्देश देता है?',
        },
        a: {
          en: 'Article 51 (under Part IV — Directive Principles of State Policy).',
          pa: 'ਅਨੁਛੇਦ 51 (ਭਾਗ IV — ਰਾਜ ਦੀ ਨੀਤੀ ਦੇ ਨਿਰਦੇਸ਼ਕ ਸਿਧਾਂਤ)।',
          hi: 'अनुच्छेद 51 (भाग IV — राज्य के नीति निदेशक तत्व)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-fp-2',
        q: {
          en: '[Level I] Which is the only principal organ of the UNO headquartered outside New York, and what is the term of its judges?',
          pa: '[Level I] UNO ਦਾ ਕਿਹੜਾ ਇੱਕੋ-ਇੱਕ ਮੁੱਖ ਅੰਗ ਨਿਊਯਾਰਕ ਤੋਂ ਬਾਹਰ ਸਥਿਤ ਹੈ ਅਤੇ ਇਸ ਦੇ ਜੱਜਾਂ ਦਾ ਕਾਰਜਕਾਲ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
          hi: '[Level I] UNO का कौन-सा एकमात्र प्रमुख अंग न्यूयॉर्क से बाहर स्थित है और इसके न्यायाधीशों का कार्यकाल कितना होता है?',
        },
        a: {
          en: 'International Court of Justice (ICJ) at The Hague (Netherlands); 15 judges elected for a 9-year term.',
          pa: 'ਅੰਤਰਰਾਸ਼ਟਰੀ ਨਿਆਂ ਅਦਾਲਤ (ICJ), ਦ ਹੇਗ (ਨੀਦਰਲੈਂਡਜ਼); 15 ਜੱਜ, 9 ਸਾਲ ਦਾ ਕਾਰਜਕਾਲ।',
          hi: 'अंतर्राष्ट्रीय न्यायालय (ICJ), द हेग (नीदरलैंड); 15 न्यायाधीश, 9 वर्ष का कार्यकाल।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-fp-3',
        q: {
          en: '[Level A] Between whom and in which year was the Simla Agreement signed?',
          pa: '[Level A] ਸ਼ਿਮਲਾ ਸਮਝੌਤਾ ਕਿਸ ਸਾਲ ਅਤੇ ਕਿਨ੍ਹਾਂ ਵਿਚਕਾਰ ਸਹੀਬੰਦ ਹੋਇਆ ਸੀ?',
          hi: '[Level A] शिमला समझौता किस वर्ष और किनके बीच हस्ताक्षरित हुआ था?',
        },
        a: {
          en: '2 July 1972 between Indian PM Indira Gandhi and Pakistani President Zulfikar Ali Bhutto.',
          pa: '2 ਜੁਲਾਈ 1972 ਨੂੰ ਭਾਰਤੀ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਇੰਦਰਾ ਗਾਂਧੀ ਅਤੇ ਜ਼ੁਲਫ਼ਿਕਾਰ ਅਲੀ ਭੁੱਟੋ ਵਿਚਕਾਰ।',
          hi: '2 जुलाई 1972 को भारतीय प्रधानमंत्री इंदिरा गांधी और जुल्फिकार अली भुट्टो के बीच।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-fp-4',
        q: {
          en: '[Level A] Which doctrine propounded in 1996 emphasised non-reciprocal accommodation by India towards its smaller South Asian neighbours?',
          pa: '[Level A] 1996 ਵਿੱਚ ਦਿੱਤੇ ਕਿਸ ਸਿਧਾਂਤ ਨੇ ਭਾਰਤ ਵੱਲੋਂ ਆਪਣੇ ਛੋਟੇ ਗੁਆਂਢੀ ਦੇਸ਼ਾਂ ਨਾਲ ਬਿਨਾਂ ਬਦਲੇ ਦੀ ਉਮੀਦ (non-reciprocity) ਦੇ ਸਹਿਯੋਗ ਉੱਤੇ ਜ਼ੋਰ ਦਿੱਤਾ?',
          hi: '[Level A] 1996 में प्रतिपादित किस सिद्धांत ने भारत द्वारा अपने छोटे पड़ोसी देशों के साथ गैर-पारस्परिक (non-reciprocal) सहयोग पर बल दिया?',
        },
        a: {
          en: 'The Gujral Doctrine (propounded by I.K. Gujral in 1996).',
          pa: 'ਗੁਜਰਾਲ ਸਿਧਾਂਤ (Gujral Doctrine, 1996)।',
          hi: 'गुजराल सिद्धांत (Gujral Doctrine, 1996)।',
        },
        difficulty: 'hard',
      },
      {
        id: 'fc-fp-5',
        q: {
          en: '[Level A] What were the official codenames of India’s Pokhran-I (1974) and Pokhran-II (1998) nuclear tests?',
          pa: '[Level A] ਭਾਰਤ ਦੇ ਪੋਖਰਣ-I (1974) ਅਤੇ ਪੋਖਰਣ-II (1998) ਪ੍ਰਮਾਣੂ ਪ੍ਰੀਖਣਾਂ ਦੇ ਕੋਡ ਨਾਮ ਕੀ ਸਨ?',
          hi: '[Level A] भारत के पोखरण-I (1974) और पोखरण-II (1998) परमाणु परीक्षणों के कोड नाम क्या थे?',
        },
        a: {
          en: 'Pokhran-I (18 May 1974): Smiling Buddha; Pokhran-II (11–13 May 1998): Operation Shakti.',
          pa: 'ਪੋਖਰਣ-I (18 ਮਈ 1974): ਸਮਾਈਲਿੰਗ ਬੁੱਧਾ; ਪੋਖਰਣ-II (11–13 ਮਈ 1998): ਆਪ੍ਰੇਸ਼ਨ ਸ਼ਕਤੀ।',
          hi: 'पोखरण-I (18 मई 1974): स्माइलिंग बुद्धा; पोखरण-II (11–13 मई 1998): ऑपरेशन शक्ति।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [],
    bookRefs: [
      {
        title: 'NCERT Class 12 Contemporary World Politics (Ch 4: International Organizations & South Asia)',
        author: 'NCERT',
        chapters: 'Chapters 3, 4 & 5',
        type: 'ncert',
      },
      {
        title: 'NCERT Class 12 Politics in India Since Independence (Ch 4: India’s External Relations)',
        author: 'NCERT',
        chapters: 'Chapter 4',
        type: 'ncert',
      },
    ],
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      reviewerRecord: 'Verified against NCERT Class 12 Politics in India Since Independence & Contemporary World Politics',
      verifiedSyllabusDenominator: 'ERB Punjab Master Cadre SST — Polity: Foreign Policy; UNO',
    },
  },
};
