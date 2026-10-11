import type { Lesson } from './types';

// ============================================================================
// PUNJAB MASTER CADRE SST — ECONOMICS (B → I → A) BLUEPRINT LESSONS
// Covers all 16 Official ERB Economics Headings in B -> I -> A progression
// ============================================================================

export const MASTER_CADRE_ECON_BLUEPRINT_LESSONS: Record<string, Lesson> = {
  // ==========================================================================
  // 1. MICRO VS MACRO, CONSUMER EQUILIBRIUM & PRICE ELASTICITY OF DEMAND
  // ==========================================================================
  'sst-econ-micro-consumer-elasticity': {
    id: 'sst-econ-micro-consumer-elasticity',
    topicId: 'sst-econ-micro-consumer-elasticity',
    subjectId: 'social-science',
    category: 'economy',
    practiceSource: 'authored-only',
    coverageStatus: 'complete',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    title: {
      en: 'Micro vs Macro, Consumer Equilibrium & Price Elasticity of Demand (B → I → A)',
      pa: 'ਵਿਅਸ਼ਟੀ ਬਨਾਮ ਸਮਸ਼ਟੀ, ਉਪਭੋਗਤਾ ਸੰਤੁਲਨ ਅਤੇ ਮੰਗ ਦੀ ਕੀਮਤ ਲਚਕ (B → I → A)',
      hi: 'व्यष्टि बनाम समष्टि, उपभोक्ता संतुलन एवं माँग की कीमत लोच (B → I → A)',
    },
    examRelevance: 'Punjab Master Cadre SST (8–10 Qs — Official ERB Headings: Micro vs Macro, Types of Economics & Infrastructure, Consumer Equilibrium, Demand & Price Elasticity)',
    estimatedTime: '50 min',
    prerequisites: {
      en: ['Basic arithmetic, ratios, and elementary awareness of markets (Class 6–8 Social Science)'],
      pa: ['ਮੁੱਢਲਾ ਹਿਸਾਬ, ਅਨੁਪਾਤ ਅਤੇ ਬਾਜ਼ਾਰਾਂ ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ (ਜਮਾਤ 6–8 ਸਮਾਜਿਕ ਸਿੱਖਿਆ)'],
      hi: ['बुनियादी अंकगणित, अनुपात और बाजारों की प्रारंभिक समझ (कक्षा 6–8 सामाजिक विज्ञान)'],
    },
    learningObjectives: {
      en: [
        '[B] Distinguish Microeconomics vs Macroeconomics (Ragnar Frisch, 1933), Capitalist/Socialist/Mixed Economies, Economic vs Social Infrastructure, and Central Problems (PPC & Opportunity Cost).',
        '[I] Master Individual & Market Demand, Law of Demand, Movement along vs Shift in Demand Curve, Normal/Inferior/Giffen Goods, and Substitute/Complementary Goods.',
        '[A] Solve Cardinal Utility Equilibrium (MUx/Px = MUy/Py = MUm), Ordinal Indifference Curve Equilibrium (MRSxy = Px/Py), and all 5 degrees & 3 measurement methods of Price Elasticity of Demand (Ed).',
      ],
      pa: [
        '[B] ਵਿਅਸ਼ਟੀ (Micro) ਬਨਾਮ ਸਮਸ਼ਟੀ (Macro) ਅਰਥਸ਼ਾਸਤਰ (ਰੈਗਨਰ ਫ੍ਰਿਸ਼, 1933), ਪੂੰਜੀਵਾਦੀ/ਸਮਾਜਵਾਦੀ/ਮਿਸ਼ਰਤ ਅਰਥਵਿਵਸਥਾ, ਆਰਥਿਕ ਬਨਾਮ ਸਮਾਜਿਕ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਅਤੇ PPC।',
        '[I] ਵਿਅਕਤੀਗਤ ਤੇ ਬਾਜ਼ਾਰ ਮੰਗ, ਮੰਗ ਦਾ ਨਿਯਮ, ਮੰਗ ਵਕਰ ਉੱਤੇ ਗਤੀ ਬਨਾਮ ਖਿਸਕਾਅ, ਸਧਾਰਨ/ਘਟੀਆ/ਗਿਫ਼ਨ ਵਸਤੂਆਂ।',
        '[A] ਗਣਨਾਵਾਚਕ ਉਪਯੋਗਤਾ ਸੰਤੁਲਨ (MUx/Px = MUy/Py), ਕ੍ਰਮਵਾਚਕ ਤਟਸਥਤਾ ਵਕਰ ਸੰਤੁਲਨ (MRSxy = Px/Py) ਅਤੇ ਮੰਗ ਦੀ ਕੀਮਤ ਲਚਕ (Ed) ਦੀਆਂ 5 ਸ਼੍ਰੇਣੀਆਂ ਤੇ ਮਾਪਣ ਦੀਆਂ ਵਿਧੀਆਂ।',
      ],
      hi: [
        '[B] व्यष्टि (Micro) बनाम समष्टि (Macro) अर्थशास्त्र (रैगनर फ्रिश, 1933), पूँजीवादी/समाजवादी/मिश्रित अर्थव्यवस्था, आर्थिक बनाम सामाजिक अवसंरचना और PPC।',
        '[I] व्यक्तिगत व बाजार माँग, माँग का नियम, माँग वक्र पर संचलन बनाम खिसकाव, सामान्य/घटिया/गिफिन वस्तुएँ।',
        '[A] गणनावाचक उपयोगिता संतुलन (MUx/Px = MUy/Py), क्रमवाचक तटस्थता वक्र संतुलन (MRSxy = Px/Py) तथा माँग की कीमत लोच (Ed) की 5 श्रेणियाँ व मापन विधियाँ।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 Official ERB Syllabus Mapping & Progression</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers 4 official Punjab Master Cadre SST Economics headings: <strong>(1) Micro vs Macro</strong>, <strong>(2) Types of economics and infrastructure</strong>, <strong>(3) Consumer equilibrium</strong>, and <strong>(4) Demand, market demand, price elasticity</strong> in <strong>B → I → A</strong> order.
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · Basic (Class 6–8 Foundation)</span>
              <span class="text-xs text-slate-400">Micro vs Macro, Types of Economies & Infrastructure</span>
            </div>
            <h3 class="text-xl font-bold text-white">1. Micro vs Macro, Economic Systems & Infrastructure</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Microeconomics vs Macroeconomics:</strong> The terms <em>Micro</em> (Greek <em>Mikros</em> = small) and <em>Macro</em> (Greek <em>Makros</em> = large) were coined by Norwegian economist <strong>Ragnar Frisch in 1933</strong> (first Nobel Prize in Economics, 1969, shared with Jan Tinbergen).
                <br/>• <strong>Microeconomics ("Price Theory"):</strong> Founded by <strong>Adam Smith</strong> (<em>Wealth of Nations</em>, 1776) and systematised by <strong>Alfred Marshall</strong> (<em>Principles of Economics</em>, 1890); studies individual economic units (a consumer, a firm, price of a single good).
                <br/>• <strong>Macroeconomics ("Income and Employment Theory"):</strong> Founded by <strong>John Maynard Keynes</strong> (<em>The General Theory of Employment, Interest and Money</em>, 1936); studies economy-wide aggregates (National Income, Aggregate Demand, Inflation, Unemployment, BoP).</li>
              <li><strong>Three Types of Economies & Central Problems:</strong> Because human wants are unlimited and resources have alternative uses (<strong>Lionel Robbins’ Scarcity Definition, 1932</strong>), every economy faces three central problems: <em>What to produce, How to produce, and For whom to produce</em>.
                <br/>• <strong>Capitalist / Market Economy (Laissez-faire):</strong> Private ownership, profit motive, solved via the <strong>Price Mechanism</strong> (USA).
                <br/>• <strong>Socialist / Centrally Planned Economy:</strong> State ownership, social welfare motive, solved by a <strong>Central Planning Authority</strong> (former USSR).
                <br/>• <strong>Mixed Economy (India):</strong> Co-existence of Public and Private sectors (adopted via the 1948 & 1956 Industrial Policy Resolutions).</li>
              <li><strong>Production Possibility Curve (PPC / Transformation Curve):</strong> Shows maximum combinations of two goods that can be produced with given resources and technology. Normally <strong>concave to the origin</strong> because of <strong>increasing Marginal Rate of Transformation ($\text{MRT} = \Delta Y / \Delta X$)</strong> / increasing Opportunity Cost (value of next best alternative foregone).</li>
              <li><strong>Economic vs Social Infrastructure:</strong>
                <br/>• <strong>Economic Infrastructure:</strong> Directly supports production and distribution — <strong>Energy/Power, Transport (Railways, Highways, Ports), Communication, Banking & Irrigation</strong>.
                <br/>• <strong>Social Infrastructure:</strong> Builds human capital — <strong>Education, Health, Sanitation, Housing, and Drinking Water</strong>.</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · Intermediate (Class 9–10 / 11 Foundation)</span>
              <span class="text-xs text-slate-400">Demand, Market Demand & Shifts</span>
            </div>
            <h3 class="text-xl font-bold text-white">2. Demand, Market Demand & Determinants</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Individual vs Market Demand:</strong> Market Demand is the <strong>horizontal summation</strong> of individual demand curves of all consumers in the market at each price level (influenced additionally by population size/demographic composition and income distribution).</li>
              <li><strong>Law of Demand (Alfred Marshall):</strong> <em>Ceteris paribus</em> (other things remaining constant), there is an <strong>inverse relationship</strong> between the own price of a commodity ($P_x$) and its quantity demanded ($Q_x$). Why does the demand curve slope downward? (1) Law of Diminishing Marginal Utility, (2) <strong>Income Effect</strong>, (3) <strong>Substitution Effect</strong> (Hicks-Allen: Price Effect = Income Effect + Substitution Effect), (4) New consumers entering at lower prices.</li>
              <li><strong>Exceptions to Law of Demand (Upward-sloping Demand Curve):</strong>
                <br/>• <strong>Giffen Goods (Sir Robert Giffen):</strong> Special highly inferior goods where the negative income effect is stronger than the substitution effect, so demand falls when price falls (all Giffen goods are inferior goods, but not all inferior goods are Giffen goods!).
                <br/>• <strong>Veblen / Status Symbol Goods (Thorstein Veblen):</strong> Conspicuous consumption (diamonds, luxury art).</li>
              <li><strong>Movement Along vs Shift in Demand Curve:</strong>
                <br/>• <strong>Movement along the same curve (Expansion / Contraction):</strong> Caused ONLY by a change in the <strong>own price of the good ($P_x$)</strong>.
                <br/>• <strong>Shift of the entire curve (Increase = Rightward / Decrease = Leftward):</strong> Caused by changes in non-price determinants — Income ($Y$), Price of Substitute Goods (tea & coffee: positive cross elasticity $E_{xy} > 0$), Price of Complementary Goods (car & petrol: negative cross elasticity $E_{xy} < 0$), and Tastes/Preferences.</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · Advanced (Class 11–12 & Graduation)</span>
              <span class="text-xs text-slate-400">Consumer Equilibrium (Cardinal & Ordinal) & Elasticity</span>
            </div>
            <h3 class="text-xl font-bold text-white">3. Consumer Equilibrium & Price Elasticity of Demand ($E_d$)</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-700 text-rose-300">
                    <th class="p-2">Approach / Concept</th>
                    <th class="p-2">Formulas & Conditions</th>
                    <th class="p-2">Critical Exam Rules</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300 divide-y divide-slate-800">
                  <tr>
                    <td class="p-2 font-semibold text-white">1. Cardinal Utility (Alfred Marshall)</td>
                    <td class="p-2">$\text{MU}_n = \text{TU}_n - \text{TU}_{n-1}$<br/>1 Good: $\frac{\text{MU}_x}{P_x} = \text{MU}_m$<br/>2 Goods: $\frac{\text{MU}_x}{P_x} = \frac{\text{MU}_y}{P_y} = \text{MU}_m$</td>
                    <td class="p-2">Utility measured in <em>Utils</em>. <strong>TU–MU Relation:</strong> (1) As long as $\text{MU} > 0$, TU rises at diminishing rate; (2) When <strong>$\text{MU} = 0$, TU is Maximum</strong> (Point of Satiety); (3) When $\text{MU} < 0$, TU falls. <strong>Gossen’s 1st Law:</strong> Law of Diminishing MU; <strong>Gossen’s 2nd Law:</strong> Law of Equi-Marginal Utility.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">2. Ordinal Utility / Indifference Curve (J.R. Hicks & R.G.D. Allen, 1934)</td>
                    <td class="p-2">Budget Line: $P_x X + P_y Y = M$<br/>Equilibrium: $\text{MRS}_{xy} = \frac{P_x}{P_y}$ and IC is convex at tangency</td>
                    <td class="p-2"><strong>4 Properties of IC:</strong> (1) Downward sloping left to right, (2) <strong>Convex to the origin</strong> due to <strong>diminishing Marginal Rate of Substitution ($\text{MRS}_{xy} = |\Delta Y / \Delta X|$)</strong>, (3) Higher IC = higher satisfaction (Monotonic Preferences), (4) Two ICs never intersect. (Note: For Perfect Substitutes, IC is a straight line; for Perfect Complements, IC is L-shaped!).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">3. Five Degrees of Price Elasticity ($E_d$)</td>
                    <td class="p-2">$E_d = (-)\frac{\%\Delta Q_d}{\%\Delta P} = (-)\frac{\Delta Q}{\Delta P}\cdot\frac{P}{Q}$</td>
                    <td class="p-2">1. <strong>Perfectly Inelastic ($E_d = 0$):</strong> Vertical line parallel to Y-axis (life-saving drugs/salt).<br/>2. <strong>Inelastic ($0 < E_d < 1$):</strong> Steep curve (necessities).<br/>3. <strong>Unitary Elastic ($E_d = 1$):</strong> Rectangular Hyperbola ($P \times Q = \text{constant}$).<br/>4. <strong>Elastic ($E_d > 1$):</strong> Flatter curve (luxuries).<br/>5. <strong>Perfectly Elastic ($E_d = \infty$):</strong> Horizontal line parallel to X-axis.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">4. Marshall’s Total Outlay (Expenditure) & Geometric Point Methods</td>
                    <td class="p-2">Point $E_d = \frac{\text{Lower Segment}}{\text{Upper Segment}}$</td>
                    <td class="p-2"><strong>Total Expenditure ($\text{TE} = P \times Q$) Method:</strong><br/>• If $P$ and TE move in <strong>opposite directions</strong> $\Rightarrow E_d > 1$.<br/>• If TE remains <strong>constant</strong> when $P$ changes $\Rightarrow E_d = 1$.<br/>• If $P$ and TE move in the <strong>same direction</strong> $\Rightarrow E_d < 1$.<br/><strong>Point Method on Linear Demand Curve:</strong> Mid-point $= 1$; Y-intercept $= \infty$; X-intercept $= 0$.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 ਸਰਕਾਰੀ ERB ਸਿਲੇਬਸ ਮੈਪਿੰਗ (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ 4 ਅਧਿਕਾਰਤ ਅਰਥਸ਼ਾਸਤਰ ਸਿਰਲੇਖਾਂ—<strong>Micro vs Macro</strong>, <strong>Types of economics & infrastructure</strong>, <strong>Consumer equilibrium</strong> ਅਤੇ <strong>Demand & Price elasticity</strong>—ਨੂੰ <strong>B → I → A</strong> ਕ੍ਰਮ ਵਿੱਚ ਸਮਝਾਇਆ ਗਿਆ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · ਮੁੱਢਲਾ ਪੱਧਰ (ਜਮਾਤ 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. ਵਿਅਸ਼ਟੀ ਬਨਾਮ ਸਮਸ਼ਟੀ, ਆਰਥਿਕ ਪ੍ਰਣਾਲੀਆਂ ਅਤੇ ਬੁਨਿਆਦੀ ਢਾਂਚਾ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਵਿਅਸ਼ਟੀ (Micro) ਬਨਾਮ ਸਮਸ਼ਟੀ (Macro) ਅਰਥਸ਼ਾਸਤਰ:</strong> ਇਹ ਸ਼ਬਦ 1933 ਵਿੱਚ ਨਾਰਵੇ ਦੇ ਅਰਥਸ਼ਾਸਤਰੀ <strong>ਰੈਗਨਰ ਫ੍ਰਿਸ਼ (Ragnar Frisch)</strong> ਨੇ ਦਿੱਤੇ। ਵਿਅਸ਼ਟੀ ਅਰਥਸ਼ਾਸਤਰ ("ਕੀਮਤ ਸਿਧਾਂਤ" — ਐਡਮ ਸਮਿੱਥ ਤੇ ਮਾਰਸ਼ਲ) ਵਿਅਕਤੀਗਤ ਇਕਾਈਆਂ ਦਾ ਅਧਿਐਨ ਕਰਦਾ ਹੈ, ਜਦੋਂ ਕਿ ਸਮਸ਼ਟੀ ਅਰਥਸ਼ਾਸਤਰ ("ਆਮਦਨ ਅਤੇ ਰੁਜ਼ਗਾਰ ਸਿਧਾਂਤ" — ਜੇ.ਐਮ. ਕੇਨਜ਼, 1936) ਸਮੁੱਚੀ ਅਰਥਵਿਵਸਥਾ ਦਾ ਅਧਿਐਨ ਕਰਦਾ ਹੈ।</li>
              <li><strong>ਅਰਥਵਿਵਸਥਾ ਦੀਆਂ 3 ਕਿਸਮਾਂ:</strong> (1) ਪੂੰਜੀਵਾਦੀ/ਬਾਜ਼ਾਰ ਅਰਥਵਿਵਸਥਾ (ਕੀਮਤ ਤੰਤਰ), (2) ਸਮਾਜਵਾਦੀ/ਕੇਂਦਰੀ ਯੋਜਨਾਬੱਧ ਅਰਥਵਿਵਸਥਾ, (3) <strong>ਮਿਸ਼ਰਤ ਅਰਥਵਿਵਸਥਾ (ਭਾਰਤ)</strong>। <strong>ਉਤਪਾਦਨ ਸੰਭਾਵਨਾ ਵਕਰ (PPC)</strong> ਵਧਦੀ ਅਵਸਰ ਲਾਗਤ (MRT) ਕਾਰਨ ਮੂਲ ਬਿੰਦੂ ਵੱਲ ਨਤੋਦਰ (Concave) ਹੁੰਦਾ ਹੈ।</li>
              <li><strong>ਆਰਥਿਕ ਬਨਾਮ ਸਮਾਜਿਕ ਬੁਨਿਆਦੀ ਢਾਂਚਾ (Infrastructure):</strong> ਆਰਥਿਕ = ਊਰਜਾ, ਆਵਾਜਾਈ, ਸੰਚਾਰ, ਬੈਂਕਿੰਗ; ਸਮਾਜਿਕ = ਸਿੱਖਿਆ, ਸਿਹਤ, ਰਿਹਾਇਸ਼ ਅਤੇ ਸਵੱਛਤਾ।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · ਮੱਧਮ ਪੱਧਰ (ਜਮਾਤ 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. ਮੰਗ, ਬਾਜ਼ਾਰ ਮੰਗ ਅਤੇ ਮੰਗ ਦਾ ਨਿਯਮ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਮੰਗ ਦਾ ਨਿਯਮ (Law of Demand):</strong> ਬਾਕੀ ਗੱਲਾਂ ਸਮਾਨ ਰਹਿਣ 'ਤੇ (<em>Ceteris paribus</em>), ਵਸਤੂ ਦੀ ਆਪਣੀ ਕੀਮਤ ($P_x$) ਅਤੇ ਮੰਗੀ ਗਈ ਮਾਤਰਾ ($Q_x$) ਵਿੱਚ ਉਲਟ ਸਬੰਧ ਹੁੰਦਾ ਹੈ।</li>
              <li><strong>ਗਿਫ਼ਨ ਵਸਤੂਆਂ (Giffen Goods):</strong> ਵਿਸ਼ੇਸ਼ ਘਟੀਆ ਵਸਤੂਆਂ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਨਕਾਰਾਤਮਕ ਆਮਦਨ ਪ੍ਰਭਾਵ ਪ੍ਰਤੀਸਥਾਪਨ ਪ੍ਰਭਾਵ ਤੋਂ ਵੱਧ ਸ਼ਕਤੀਸ਼ਾਲੀ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਕੀਮਤ ਵਧਣ 'ਤੇ ਮੰਗ ਵੀ ਵਧਦੀ ਹੈ (ਸਾਰੀਆਂ ਗਿਫ਼ਨ ਵਸਤੂਆਂ ਘਟੀਆ ਹੁੰਦੀਆਂ ਹਨ, ਪਰ ਸਾਰੀਆਂ ਘਟੀਆ ਵਸਤੂਆਂ ਗਿਫ਼ਨ ਨਹੀਂ ਹੁੰਦੀਆਂ!)।</li>
              <li><strong>ਪ੍ਰਤੀਸਥਾਪਨ (Substitute — ਚਾਹ ਤੇ ਕੌਫ਼ੀ) ਬਨਾਮ ਪੂਰਕ ਵਸਤੂਆਂ (Complementary — ਕਾਰ ਤੇ ਪੈਟਰੋਲ):</strong> ਆਪਣੀ ਕੀਮਤ ਬਦਲਣ ਨਾਲ ਮੰਗ ਵਕਰ ਉੱਤੇ ਵਿਸਤਾਰ/ਸੁੰਗੜਾਅ (Movement) ਹੁੰਦਾ ਹੈ; ਹੋਰ ਤੱਤਾਂ ਦੇ ਬਦਲਣ ਨਾਲ ਮੰਗ ਵਕਰ ਦਾ ਖਿਸਕਾਅ (Shift) ਹੁੰਦਾ ਹੈ।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · ਉੱਚ ਪੱਧਰ (ਜਮਾਤ 11–12 / ਗ੍ਰੈਜੂਏਸ਼ਨ)</span>
            <h3 class="text-xl font-bold text-white">3. ਉਪਭੋਗਤਾ ਸੰਤੁਲਨ (ਮਾਰਸ਼ਲ ਤੇ ਹਿਕਸ-ਐਲਨ) ਅਤੇ ਮੰਗ ਦੀ ਕੀਮਤ ਲਚਕ ($E_d$)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਗਣਨਾਵਾਚਕ ਉਪਯੋਗਤਾ ਵਿਸ਼ਲੇਸ਼ਣ (Alfred Marshall):</strong> ਜਦੋਂ <strong>$\text{MU} = 0$ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਕੁੱਲ ਉਪਯੋਗਤਾ (TU) ਵੱਧ ਤੋਂ ਵੱਧ (Maximum)</strong> ਹੁੰਦੀ ਹੈ। ਸੰਤੁਲਨ ਦੀ ਸ਼ਰਤ: 1 ਵਸਤੂ ਲਈ $\text{MU}_x / P_x = \text{MU}_m$; 2 ਵਸਤੂਆਂ ਲਈ $\text{MU}_x / P_x = \text{MU}_y / P_y = \text{MU}_m$ (ਗੋਸੇਨ ਦਾ ਦੂਜਾ ਨਿਯਮ / ਸਮ-ਸੀਮਾਂਤ ਉਪਯੋਗਤਾ ਨਿਯਮ)।</li>
              <li><strong>ਕ੍ਰਮਵਾਚਕ / ਤਟਸਥਤਾ ਵਕਰ ਵਿਸ਼ਲੇਸ਼ਣ (Hicks & Allen):</strong> ਤਟਸਥਤਾ ਵਕਰ (Indifference Curve) ਘਟਦੀ $\text{MRS}_{xy}$ ਕਾਰਨ ਮੂਲ ਬਿੰਦੂ ਵੱਲ <strong>ਉੱਤਲ (Convex to origin)</strong> ਹੁੰਦਾ ਹੈ। ਉਪਭੋਗਤਾ ਸੰਤੁਲਨ ਉੱਥੇ ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ ਬਜਟ ਰੇਖਾ ਤਟਸਥਤਾ ਵਕਰ ਨੂੰ ਛੂੰਹਦੀ ਹੈ: <strong>$\text{MRS}_{xy} = P_x / P_y$</strong>।</li>
              <li><strong>ਮੰਗ ਦੀ ਕੀਮਤ ਲਚਕ ($E_d$) ਦੀਆਂ 5 ਸ਼੍ਰੇਣੀਆਂ ਅਤੇ ਕੁੱਲ ਖਰਚ ਵਿਧੀ:</strong> $E_d = (-)\frac{\Delta Q}{\Delta P}\cdot\frac{P}{Q}$। ਬਿੰਦੂ ਵਿਧੀ (Point Method): $E_d = \frac{\text{ਹੇਠਲਾ ਹਿੱਸਾ}}{\text{ਉੱਪਰਲਾ ਹਿੱਸਾ}}$ (ਮੱਧ ਬਿੰਦੂ ਤੇ $E_d = 1$)। ਮਾਰਸ਼ਲ ਦੀ ਕੁੱਲ ਖਰਚ (Total Outlay) ਵਿਧੀ: ਜੇਕਰ ਕੀਮਤ ਤੇ ਕੁੱਲ ਖਰਚ <strong>ਉਲਟ ਦਿਸ਼ਾ</strong> ਵਿੱਚ ਜਾਣ ਤਾਂ $E_d > 1$; ਜੇਕਰ ਕੁੱਲ ਖਰਚ <strong>ਸਥਿਰ</strong> ਰਹੇ ਤਾਂ $E_d = 1$; ਜੇਕਰ <strong>ਇੱਕੋ ਦਿਸ਼ਾ</strong> ਵਿੱਚ ਜਾਣ ਤਾਂ $E_d < 1$।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 आधिकारिक ERB पाठ्यक्रम मानचित्रण (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर SST के 4 आधिकारिक अर्थशास्त्र शीर्षकों—<strong>Micro vs Macro</strong>, <strong>Types of economics & infrastructure</strong>, <strong>Consumer equilibrium</strong> तथा <strong>Demand & Price elasticity</strong>—को <strong>B → I → A</strong> क्रम में प्रस्तुत किया गया है।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · आधारभूत स्तर (कक्षा 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. व्यष्टि बनाम समष्टि, आर्थिक प्रणालियाँ एवं अवसंरचना</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>व्यष्टि (Micro) बनाम समष्टि (Macro) अर्थशास्त्र:</strong> ये शब्द 1933 में नॉर्वे के अर्थशास्त्री <strong>रैगनर फ्रिश (Ragnar Frisch)</strong> ने गढ़े। व्यष्टि अर्थशास्त्र ("कीमत सिद्धांत" — एडम स्मिथ व मार्शल) व्यक्तिगत इकाइयों का अध्ययन करता है, जबकि समष्टि अर्थशास्त्र ("आय व रोजगार सिद्धांत" — जे.एम. कीन्स, 1936) संपूर्ण अर्थव्यवस्था के समग्रों का अध्ययन करता है।</li>
              <li><strong>अर्थव्यवस्था के 3 प्रकार:</strong> (1) पूँजीवादी/बाजार अर्थव्यवस्था (कीमत तंत्र), (2) समाजवादी/केंद्रीय नियोजित अर्थव्यवस्था, (3) <strong>मिश्रित अर्थव्यवस्था (भारत)</strong>। <strong>उत्पादन संभावना वक्र (PPC)</strong> बढ़ती अवसर लागत (MRT) के कारण मूल बिंदु की ओर नतोदर (Concave) होता है।</li>
              <li><strong>आर्थिक बनाम सामाजिक अवसंरचना (Infrastructure):</strong> आर्थिक = ऊर्जा, परिवहन, संचार, बैंकिंग; सामाजिक = शिक्षा, स्वास्थ्य, आवास एवं स्वच्छता।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · मध्यम स्तर (कक्षा 9–10)</span>
            <h3 class="text-xl font-bold text-white">2. माँग, बाजार माँग एवं माँग का नियम</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>माँग का नियम (Law of Demand):</strong> अन्य बातें समान रहने पर (<em>Ceteris paribus</em>), वस्तु की स्वयं की कीमत ($P_x$) और माँगी गई मात्रा ($Q_x$) में विपरीत संबंध होता है।</li>
              <li><strong>गिफिन वस्तुएँ (Giffen Goods):</strong> विशिष्ट घटिया वस्तुएँ जिनमें ऋणात्मक आय प्रभाव प्रतिस्थापन प्रभाव से अधिक शक्तिशाली होता है, अतः कीमत बढ़ने पर माँग बढ़ती है (सभी गिफिन वस्तुएँ घटिया होती हैं, किंतु सभी घटिया वस्तुएँ गिफिन नहीं होतीं!)।</li>
              <li><strong>स्थानापन्न (Substitute — चाय व कॉफी) बनाम पूरक वस्तुएँ (Complementary — कार व पेट्रोल):</strong> स्वयं की कीमत बदलने पर माँग वक्र पर विस्तार/संकुचन (Movement) होता है; अन्य कारकों के बदलने पर माँग वक्र का खिसकाव (Shift) होता है।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · उन्नत स्तर (कक्षा 11–12 / स्नातक)</span>
            <h3 class="text-xl font-bold text-white">3. उपभोक्ता संतुलन (मार्शल व हिक्स-एलन) एवं माँग की कीमत लोच ($E_d$)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>गणनावाचक उपयोगिता विश्लेषण (अल्फ्रेड मार्शल):</strong> जब <strong>$\text{MU} = 0$ होती है, तब कुल उपयोगिता (TU) अधिकतम (Maximum)</strong> होती है। संतुलन की शर्त: 1 वस्तु हेतु $\text{MU}_x / P_x = \text{MU}_m$; 2 वस्तुओं हेतु $\text{MU}_x / P_x = \text{MU}_y / P_y = \text{MU}_m$ (गोसेन का दूसरा नियम / सम-सीमांत उपयोगिता नियम)।</li>
              <li><strong>क्रमवाचक / तटस्थता वक्र विश्लेषण (Hicks & Allen):</strong> तटस्थता वक्र (Indifference Curve) घटती $\text{MRS}_{xy}$ के कारण मूल बिंदु की ओर <strong>उत्तल (Convex to origin)</strong> होता है। उपभोक्ता संतुलन की स्पर्शरेखा शर्त: <strong>$\text{MRS}_{xy} = P_x / P_y$</strong>।</li>
              <li><strong>माँग की कीमत लोच ($E_d$) की 5 श्रेणियाँ एवं कुल व्यय विधि:</strong> $E_d = (-)\frac{\Delta Q}{\Delta P}\cdot\frac{P}{Q}$। बिंदु विधि: $E_d = \frac{\text{निचला भाग}}{\text{ऊपरी भाग}}$ (मध्य बिंदु पर $E_d = 1$)। मार्शल की कुल व्यय (Total Outlay) विधि: यदि कीमत व कुल व्यय <strong>विपरीत दिशा</strong> में चलें तो $E_d > 1$; यदि कुल व्यय <strong>स्थिर</strong> रहे तो $E_d = 1$; यदि <strong>समान दिशा</strong> में चलें तो $E_d < 1$।</li>
            </ul>
          </div>
        </div>
      `,
    },
    summary: {
      en: 'Covers Micro vs Macroeconomics (Ragnar Frisch 1933), Types of Economies & Infrastructure, Production Possibility Curve (concave due to increasing MRT), Consumer Equilibrium under Cardinal Utility (TU max when MU=0; MUx/Px = MUy/Py) and Ordinal Indifference Curve Analysis (Hicks & Allen; IC convex due to diminishing MRS; Equilibrium MRSxy = Px/Py), Demand & Market Demand, and Price Elasticity of Demand (5 degrees, Percentage, Total Outlay, and Geometric Point methods).',
      pa: 'ਵਿਅਸ਼ਟੀ ਬਨਾਮ ਸਮਸ਼ਟੀ ਅਰਥਸ਼ਾਸਤਰ (ਰੈਗਨਰ ਫ੍ਰਿਸ਼ 1933), ਆਰਥਿਕ ਪ੍ਰਣਾਲੀਆਂ ਤੇ ਬੁਨਿਆਦੀ ਢਾਂਚਾ, PPC, ਗਣਨਾਵਾਚਕ (TU ਵੱਧ ਤੋਂ ਵੱਧ ਜਦੋਂ MU=0; MUx/Px = MUy/Py) ਅਤੇ ਕ੍ਰਮਵਾਚਕ ਤਟਸਥਤਾ ਵਕਰ ਉਪਭੋਗਤਾ ਸੰਤੁਲਨ (MRSxy = Px/Py), ਮੰਗ ਦਾ ਨਿਯਮ ਅਤੇ ਮੰਗ ਦੀ ਕੀਮਤ ਲਚਕ (5 ਸ਼੍ਰੇਣੀਆਂ, ਪ੍ਰਤੀਸ਼ਤ, ਕੁੱਲ ਖਰਚ ਅਤੇ ਬਿੰਦੂ ਵਿਧੀਆਂ) ਦਾ ਸੰਪੂਰਨ ਸਾਰ।',
      hi: 'व्यष्टि बनाम समष्टि अर्थशास्त्र (रैगनर फ्रिश 1933), आर्थिक प्रणालियाँ व अवसंरचना, PPC, गणनावाचक (TU अधिकतम जब MU=0; MUx/Px = MUy/Py) तथा क्रमवाचक तटस्थता वक्र उपभोक्ता संतुलन (MRSxy = Px/Py), माँग का नियम और माँग की कीमत लोच (5 श्रेणियाँ, प्रतिशत, कुल व्यय और बिंदु विधियाँ) का संपूर्ण सार।',
    },
    keyNotes: {
      en: [
        '[B] Ragnar Frisch (1933) coined the terms Microeconomics ("Price Theory") and Macroeconomics ("Income & Employment Theory").',
        '[B] Production Possibility Curve (PPC) is concave to the origin because of increasing Marginal Rate of Transformation (MRT / Opportunity Cost).',
        '[B] Economic infrastructure includes Energy, Transport, and Communication; Social infrastructure includes Education, Health, and Housing.',
        '[I] Market Demand is the horizontal summation of individual demand curves at every price.',
        '[I] All Giffen goods are inferior goods, but not all inferior goods are Giffen goods (Giffen goods violate the Law of Demand).',
        '[I] Cross-price elasticity is positive (Exy > 0) for Substitute Goods (Tea & Coffee) and negative (Exy < 0) for Complementary Goods (Car & Petrol).',
        '[A] Under Cardinal Utility, Total Utility (TU) is maximum when Marginal Utility (MU) is zero (Point of Satiety).',
        '[A] Indifference Curves are convex to the origin due to diminishing MRSxy; Consumer Equilibrium occurs where MRSxy = Px / Py.',
        '[A] By Marshall’s Total Outlay Method: Price & Total Expenditure move in opposite directions when Ed > 1, same direction when Ed < 1, and TE stays constant when Ed = 1.',
        '[A] By the Geometric Point Method on a straight-line demand curve: Ed = Lower Segment / Upper Segment (at midpoint Ed = 1; at Y-axis Ed = ∞; at X-axis Ed = 0).',
      ],
      pa: [
        '[B] ਰੈਗਨਰ ਫ੍ਰਿਸ਼ (1933) ਨੇ ਵਿਅਸ਼ਟੀ (Micro) ਅਤੇ ਸਮਸ਼ਟੀ (Macro) ਅਰਥਸ਼ਾਸਤਰ ਸ਼ਬਦ ਦਿੱਤੇ।',
        '[B] ਵਧਦੀ ਸੀਮਾਂਤ ਰੂਪਾਂਤਰਣ ਦਰ (MRT) ਕਾਰਨ PPC ਮੂਲ ਬਿੰਦੂ ਵੱਲ ਨਤੋਦਰ (Concave) ਹੁੰਦਾ ਹੈ।',
        '[B] ਊਰਜਾ, ਆਵਾਜਾਈ ਤੇ ਸੰਚਾਰ ਆਰਥਿਕ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਹਨ; ਸਿੱਖਿਆ ਤੇ ਸਿਹਤ ਸਮਾਜਿਕ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਹਨ।',
        '[I] ਬਾਜ਼ਾਰ ਮੰਗ ਵਕਰ ਵਿਅਕਤੀਗਤ ਮੰਗ ਵਕਰਾਂ ਦਾ ਖਿਤਿਜੀ ਜੋੜ (Horizontal summation) ਹੁੰਦਾ ਹੈ।',
        '[I] ਸਾਰੀਆਂ ਗਿਫ਼ਨ ਵਸਤੂਆਂ ਘਟੀਆ ਵਸਤੂਆਂ ਹੁੰਦੀਆਂ ਹਨ, ਪਰ ਸਾਰੀਆਂ ਘਟੀਆ ਵਸਤੂਆਂ ਗਿਫ਼ਨ ਨਹੀਂ ਹੁੰਦੀਆਂ।',
        '[I] ਪ੍ਰਤੀਸਥਾਪਨ ਵਸਤੂਆਂ (ਚਾਹ-ਕੌਫ਼ੀ) ਦੀ ਆੜੀ ਲਚਕ ਧਨਾਤਮਕ ਅਤੇ ਪੂਰਕ ਵਸਤੂਆਂ (ਕਾਰ-ਪੈਟਰੋਲ) ਦੀ ਰਿਣਾਤਮਕ ਹੁੰਦੀ ਹੈ।',
        '[A] ਜਦੋਂ ਸੀਮਾਂਤ ਉਪਯੋਗਤਾ (MU) ਸਿਫ਼ਰ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਕੁੱਲ ਉਪਯੋਗਤਾ (TU) ਵੱਧ ਤੋਂ ਵੱਧ ਹੁੰਦੀ ਹੈ।',
        '[A] ਘਟਦੀ MRSxy ਕਾਰਨ ਤਟਸਥਤਾ ਵਕਰ (IC) ਮੂਲ ਬਿੰਦੂ ਵੱਲ ਉੱਤਲ (Convex) ਹੁੰਦਾ ਹੈ; ਸੰਤੁਲਨ ਦੀ ਸ਼ਰਤ MRSxy = Px / Py ਹੈ।',
        '[A] ਕੁੱਲ ਖਰਚ ਵਿਧੀ: ਕੀਮਤ ਤੇ ਕੁੱਲ ਖਰਚ ਉਲਟ ਦਿਸ਼ਾ ਵਿੱਚ ਜਾਣ ਤਾਂ Ed > 1, ਇੱਕੋ ਦਿਸ਼ਾ ਵਿੱਚ ਜਾਣ ਤਾਂ Ed < 1, ਅਤੇ ਸਥਿਰ ਰਹਿਣ ਤੇ Ed = 1।',
        '[A] ਬਿੰਦੂ ਵਿਧੀ (Point Method): Ed = ਹੇਠਲਾ ਹਿੱਸਾ / ਉੱਪਰਲਾ ਹਿੱਸਾ (ਮੱਧ ਬਿੰਦੂ ਤੇ Ed = 1)।',
      ],
      hi: [
        '[B] रैगनर फ्रिश (1933) ने व्यष्टि (Micro) और समष्टि (Macro) अर्थशास्त्र शब्द गढ़े।',
        '[B] बढ़ती सीमांत रूपांतरण दर (MRT) के कारण PPC मूल बिंदु की ओर नतोदर (Concave) होता है।',
        '[B] ऊर्जा, परिवहन व संचार आर्थिक अवसंरचना हैं; शिक्षा व स्वास्थ्य सामाजिक अवसंरचना हैं।',
        '[I] बाजार माँग वक्र व्यक्तिगत माँग वक्रों का क्षैतिज योग (Horizontal summation) होता है।',
        '[I] सभी गिफिन वस्तुएँ घटिया वस्तुएँ होती हैं, किंतु सभी घटिया वस्तुएँ गिफिन नहीं होतीं।',
        '[I] स्थानापन्न वस्तुओं (चाय-कॉफी) की आड़ी लोच धनात्मक तथा पूरक वस्तुओं (कार-पेट्रोल) की ऋणात्मक होती है।',
        '[A] जब सीमांत उपयोगिता (MU) शून्य होती है, तब कुल उपयोगिता (TU) अधिकतम होती है।',
        '[A] घटती MRSxy के कारण तटस्थता वक्र (IC) मूल बिंदु की ओर उत्तल (Convex) होता है; संतुलन शर्त MRSxy = Px / Py है।',
        '[A] कुल व्यय विधि: कीमत व कुल व्यय विपरीत दिशा में चलें तो Ed > 1, समान दिशा में चलें तो Ed < 1, और स्थिर रहने पर Ed = 1।',
        '[A] बिंदु विधि (Point Method): Ed = निचला भाग / ऊपरी भाग (मध्य बिंदु पर Ed = 1)।',
      ],
    },
    workedExamples: [
      {
        title: {
          en: 'Calculating Price Elasticity of Demand (Ed) & Consumer Equilibrium Check',
          pa: 'ਮੰਗ ਦੀ ਕੀਮਤ ਲਚਕ (Ed) ਅਤੇ ਉਪਭੋਗਤਾ ਸੰਤੁਲਨ ਦੀ ਗਣਨਾ',
          hi: 'माँग की कीमत लोच (Ed) और उपभोक्ता संतुलन की गणना',
        },
        problem: {
          en: 'When the price of a good falls from ₹10 to ₹8 per unit, its quantity demanded rises from 50 units to 70 units. Calculate the Price Elasticity of Demand (Ed) by the Percentage Method.',
          pa: 'ਜਦੋਂ ਕਿਸੇ ਵਸਤੂ ਦੀ ਕੀਮਤ ₹10 ਤੋਂ ਘਟ ਕੇ ₹8 ਪ੍ਰਤੀ ਇਕਾਈ ਹੋ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਉਸ ਦੀ ਮੰਗ 50 ਇਕਾਈਆਂ ਤੋਂ ਵਧ ਕੇ 70 ਇਕਾਈਆਂ ਹੋ ਜਾਂਦੀ ਹੈ। ਮੰਗ ਦੀ ਕੀਮਤ ਲਚਕ (Ed) ਪਤਾ ਕਰੋ।',
          hi: 'जब किसी वस्तु की कीमत ₹10 से घटकर ₹8 प्रति इकाई हो जाती है, तो उसकी माँग 50 इकाइयों से बढ़कर 70 इकाइयाँ हो जाती है। माँग की कीमत लोच (Ed) ज्ञात करें।',
        },
        steps: {
          en: [
            'Given: Initial Price P = 10, New Price P1 = 8 ⇒ ΔP = -2; Initial Quantity Q = 50, New Quantity Q1 = 70 ⇒ ΔQ = +20.',
            'Apply formula: Ed = (-) (ΔQ / ΔP) × (P / Q) = (-) (20 / -2) × (10 / 50).',
            'Simplify: Ed = 10 × 0.2 = 2.0 (Highly Elastic Demand, since Ed > 1).',
          ],
          pa: [
            'ਦਿੱਤਾ ਹੈ: P = 10, ΔP = -2; Q = 50, ΔQ = +20।',
            'ਸੂਤਰ: Ed = (-) (ΔQ / ΔP) × (P / Q) = (-) (20 / -2) × (10 / 50)।',
            'Ed = 10 × 0.2 = 2.0 (ਲਚਕਦਾਰ ਮੰਗ, ਕਿਉਂਕਿ Ed > 1)।',
          ],
          hi: [
            'दिया है: P = 10, ΔP = -2; Q = 50, ΔQ = +20।',
            'सूत्र: Ed = (-) (ΔQ / ΔP) × (P / Q) = (-) (20 / -2) × (10 / 50)।',
            'Ed = 10 × 0.2 = 2.0 (लोचदार माँग, क्योंकि Ed > 1)।',
          ],
        },
        solution: {
          en: 'Ed = 2.0 (More than unitary elastic demand, Ed > 1).',
          pa: 'Ed = 2.0 (ਇਕਾਈ ਤੋਂ ਵੱਧ ਲਚਕਦਾਰ ਮੰਗ, Ed > 1)।',
          hi: 'Ed = 2.0 (इकाई से अधिक लोचदार माँग, Ed > 1)।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Both PPC (Production Possibility Curve) and IC (Indifference Curve) have the same shape relative to the origin.',
          pa: 'ਉਤਪਾਦਨ ਸੰਭਾਵਨਾ ਵਕਰ (PPC) ਅਤੇ ਤਟਸਥਤਾ ਵਕਰ (IC) ਦੋਵਾਂ ਦੀ ਆਕ੍ਰਿਤੀ ਮੂਲ ਬਿੰਦੂ ਵੱਲ ਇੱਕੋ ਜਿਹੀ ਹੁੰਦੀ ਹੈ।',
          hi: 'उत्पादन संभावना वक्र (PPC) और तटस्थता वक्र (IC) दोनों की आकृति मूल बिंदु की ओर एक समान होती है।',
        },
        correction: {
          en: 'PPC is CONCAVE to the origin (because Marginal Rate of Transformation / Opportunity Cost increases), whereas a standard Indifference Curve is CONVEX to the origin (because Marginal Rate of Substitution diminishes).',
          pa: 'PPC ਵਧਦੀ MRT ਕਾਰਨ ਮੂਲ ਬਿੰਦੂ ਵੱਲ ਨਤੋਦਰ (Concave) ਹੁੰਦਾ ਹੈ, ਜਦੋਂ ਕਿ ਤਟਸਥਤਾ ਵਕਰ (IC) ਘਟਦੀ MRS ਕਾਰਨ ਮੂਲ ਬਿੰਦੂ ਵੱਲ ਉੱਤਲ (Convex) ਹੁੰਦਾ ਹੈ।',
          hi: 'PPC बढ़ती MRT के कारण मूल बिंदु की ओर नतोदर (Concave) होता है, जबकि तटस्थता वक्र (IC) घटती MRS के कारण मूल बिंदु की ओर उत्तल (Convex) होता है।',
        },
        whyItMatters: {
          en: 'Concave PPC vs Convex IC is one of the most frequently tested conceptual distinctions in Master Cadre Economics.',
          pa: 'Concave PPC ਬਨਾਮ Convex IC ਮਾਸਟਰ ਕੈਡਰ ਅਰਥਸ਼ਾਸਤਰ ਦਾ ਸਭ ਤੋਂ ਵੱਧ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਪ੍ਰਸ਼ਨ ਹੈ।',
          hi: 'Concave PPC बनाम Convex IC मास्टर कैडर अर्थशास्त्र का सर्वाधिक पूछा जाने वाला प्रश्न है।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'PPC = Concave (Increasing MRT); Indifference Curve (IC) = Convex (Diminishing MRSxy).',
          'Consumer Equilibrium: Cardinal = MUx/Px = MUy/Py = MUm; Ordinal = MRSxy = Px/Py.',
          'Special IC Shapes: Perfect Substitutes = Straight line downward sloping (constant MRS); Perfect Complements = Right-angled L-shape.',
          'Point Elasticity on Linear Demand Curve: Midpoint = 1, Upper Half > 1, Lower Half < 1, Y-intercept = ∞, X-intercept = 0.',
        ],
        pa: [
          'PPC = ਨਤੋਦਰ/Concave (ਵਧਦੀ MRT); ਤਟਸਥਤਾ ਵਕਰ (IC) = ਉੱਤਲ/Convex (ਘਟਦੀ MRSxy)।',
          'ਉਪਭੋਗਤਾ ਸੰਤੁਲਨ: ਗਣਨਾਵਾਚਕ = MUx/Px = MUy/Py; ਕ੍ਰਮਵਾਚਕ = MRSxy = Px/Py।',
          'ਪੂਰਨ ਪ੍ਰਤੀਸਥਾਪਨ ਵਸਤੂਆਂ ਲਈ IC = ਸਿੱਧੀ ਰੇਖਾ; ਪੂਰਨ ਪੂਰਕ ਵਸਤੂਆਂ ਲਈ IC = L-ਆਕਾਰ।',
        ],
        hi: [
          'PPC = नतोदर/Concave (बढ़ती MRT); तटस्थता वक्र (IC) = उत्तल/Convex (घटती MRSxy)।',
          'उपभोक्ता संतुलन: गणनावाचक = MUx/Px = MUy/Py; क्रमवाचक = MRSxy = Px/Py।',
          'पूर्ण स्थानापन्न वस्तुओं हेतु IC = सीधी रेखा; पूर्ण पूरक वस्तुओं हेतु IC = L-आकार।',
        ],
      },
      examTraps: {
        en: [
          'If MRSxy > Px/Py, the consumer values X more than the market does — so the consumer will buy MORE of X and LESS of Y until MRSxy falls to equal Px/Py.',
          'When Price changes and Total Expenditure remains unchanged, Ed is always equal to 1 (Unitary Elastic), regardless of whether price rose or fell.',
        ],
        pa: [
          'ਜੇਕਰ MRSxy > Px/Py ਹੋਵੇ, ਤਾਂ ਉਪਭੋਗਤਾ ਵਸਤੂ X ਦੀ ਖਪਤ ਵਧਾਏਗਾ ਅਤੇ Y ਦੀ ਘਟਾਏਗਾ ਜਦੋਂ ਤੱਕ MRSxy = Px/Py ਨਾ ਹੋ ਜਾਵੇ।',
          'ਜਦੋਂ ਕੀਮਤ ਬਦਲਣ ਤੇ ਕੁੱਲ ਖਰਚ (TE) ਸਥਿਰ ਰਹੇ, ਤਾਂ Ed ਹਮੇਸ਼ਾ 1 (ਇਕਾਈ ਲਚਕਦਾਰ) ਹੁੰਦੀ ਹੈ।',
        ],
        hi: [
          'यदि MRSxy > Px/Py हो, तो उपभोक्ता वस्तु X का उपभोग बढ़ाएगा और Y का घटाएगा जब तक MRSxy = Px/Py न हो जाए।',
          'जब कीमत बदलने पर कुल व्यय (TE) स्थिर रहे, तो Ed सदैव 1 (इकाई लोचदार) होती है।',
        ],
      },
    },
    flashcards: [
      {
        id: 'fc-ec1-1',
        q: {
          en: '[Level B] Who coined the terms "Microeconomics" and "Macroeconomics" in 1933?',
          pa: '[Level B] 1933 ਵਿੱਚ "ਵਿਅਸ਼ਟੀ" (Micro) ਅਤੇ "ਸਮਸ਼ਟੀ" (Macro) ਅਰਥਸ਼ਾਸਤਰ ਸ਼ਬਦ ਕਿਸ ਨੇ ਦਿੱਤੇ?',
          hi: '[Level B] 1933 में "व्यष्टि" (Micro) और "समष्टि" (Macro) अर्थशास्त्र शब्द किसने गढ़े?',
        },
        a: {
          en: 'Ragnar Frisch (Norwegian economist and cowinner of the first Nobel Prize in Economics in 1969).',
          pa: 'ਰੈਗਨਰ ਫ੍ਰਿਸ਼ (Ragnar Frisch)।',
          hi: 'रैगनर फ्रिश (Ragnar Frisch)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ec1-2',
        q: {
          en: '[Level I] What is the relationship between Total Utility (TU) and Marginal Utility (MU) at the Point of Satiety?',
          pa: '[Level I] ਪੂਰਨ ਸੰਤੁਸ਼ਟੀ ਦੇ ਬਿੰਦੂ (Point of Satiety) ਉੱਤੇ ਕੁੱਲ ਉਪਯੋਗਤਾ (TU) ਅਤੇ ਸੀਮਾਂਤ ਉਪਯੋਗਤਾ (MU) ਦਾ ਕੀ ਸਬੰਧ ਹੁੰਦਾ ਹੈ?',
          hi: '[Level I] पूर्ण तृप्ति के बिंदु (Point of Satiety) पर कुल उपयोगिता (TU) और सीमांत उपयोगिता (MU) का क्या संबंध होता है?',
        },
        a: {
          en: 'Marginal Utility (MU) is zero and Total Utility (TU) is at its maximum.',
          pa: 'ਸੀਮਾਂਤ ਉਪਯੋਗਤਾ (MU) ਸਿਫ਼ਰ ਹੁੰਦੀ ਹੈ ਅਤੇ ਕੁੱਲ ਉਪਯੋਗਤਾ (TU) ਵੱਧ ਤੋਂ ਵੱਧ ਹੁੰਦੀ ਹੈ।',
          hi: 'सीमांत उपयोगिता (MU) शून्य होती है और कुल उपयोगिता (TU) अधिकतम होती है।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ec1-3',
        q: {
          en: '[Level A] What is the condition for Consumer Equilibrium under Hicks-Allen Indifference Curve Analysis?',
          pa: '[Level A] ਹਿਕਸ-ਐਲਨ ਦੇ ਤਟਸਥਤਾ ਵਕਰ ਵਿਸ਼ਲੇਸ਼ਣ ਅਨੁਸਾਰ ਉਪਭੋਗਤਾ ਸੰਤੁਲਨ ਦੀ ਸ਼ਰਤ ਕੀ ਹੈ?',
          hi: '[Level A] हिक्स-एलन के तटस्थता वक्र विश्लेषण के अनुसार उपभोक्ता संतुलन की शर्त क्या है?',
        },
        a: {
          en: 'MRSxy = Px / Py (slope of Indifference Curve equals slope of Budget Line, and IC is convex to origin).',
          pa: 'MRSxy = Px / Py (ਅਤੇ ਤਟਸਥਤਾ ਵਕਰ ਮੂਲ ਬਿੰਦੂ ਵੱਲ ਉੱਤਲ ਹੋਵੇ)।',
          hi: 'MRSxy = Px / Py (तथा तटस्थता वक्र मूल बिंदु की ओर उत्तल हो)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-ec1-4',
        q: {
          en: '[Level A] What is the shape of the Indifference Curve for (a) Perfect Substitutes and (b) Perfect Complements?',
          pa: '[Level A] (a) ਪੂਰਨ ਪ੍ਰਤੀਸਥਾਪਨ ਵਸਤੂਆਂ ਅਤੇ (b) ਪੂਰਨ ਪੂਰਕ ਵਸਤੂਆਂ ਲਈ ਤਟਸਥਤਾ ਵਕਰ (IC) ਦਾ ਆਕਾਰ ਕਿਹੋ ਜਿਹਾ ਹੁੰਦਾ ਹੈ?',
          hi: '[Level A] (a) पूर्ण स्थानापन्न वस्तुओं और (b) पूर्ण पूरक वस्तुओं के लिए तटस्थता वक्र (IC) का आकार कैसा होता है?',
        },
        a: {
          en: '(a) Downward-sloping straight line (constant MRS); (b) Right-angled L-shaped curve.',
          pa: '(a) ਹੇਠਾਂ ਵੱਲ ਢਲਾਨ ਵਾਲੀ ਸਿੱਧੀ ਰੇਖਾ; (b) ਸਮਕੋਣੀ L-ਆਕਾਰ ਦਾ ਵਕਰ।',
          hi: '(a) नीचे की ओर ढाल वाली सीधी रेखा; (b) समकोणीय L-आकार का वक्र।',
        },
        difficulty: 'hard',
      },
      {
        id: 'fc-ec1-5',
        q: {
          en: '[Level A] According to Marshall’s Total Outlay Method, if total expenditure falls when price rises, what is the Price Elasticity of Demand?',
          pa: '[Level A] ਮਾਰਸ਼ਲ ਦੀ ਕੁੱਲ ਖਰਚ ਵਿਧੀ ਅਨੁਸਾਰ ਜੇਕਰ ਕੀਮਤ ਵਧਣ ਨਾਲ ਕੁੱਲ ਖਰਚ ਘਟ ਜਾਵੇ, ਤਾਂ ਮੰਗ ਦੀ ਲਚਕ (Ed) ਕਿੰਨੀ ਹੋਵੇਗੀ?',
          hi: '[Level A] मार्शल की कुल व्यय विधि के अनुसार यदि कीमत बढ़ने पर कुल व्यय घट जाए, तो माँग की लोच (Ed) कितनी होगी?',
        },
        a: {
          en: 'Greater than unity (Ed > 1, Elastic Demand) because Price and Total Expenditure move in opposite directions.',
          pa: 'ਇਕਾਈ ਤੋਂ ਵੱਧ (Ed > 1, ਲਚਕਦਾਰ ਮੰਗ) ਕਿਉਂਕਿ ਕੀਮਤ ਤੇ ਕੁੱਲ ਖਰਚ ਉਲਟ ਦਿਸ਼ਾ ਵਿੱਚ ਜਾਂਦੇ ਹਨ।',
          hi: 'इकाई से अधिक (Ed > 1, लोचदार माँग) क्योंकि कीमत व कुल व्यय विपरीत दिशा में चलते हैं।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [],
    bookRefs: [
      {
        title: 'NCERT Class 12 Introductory Microeconomics (Ch 1: Introduction & Ch 2: Theory of Consumer Behaviour)',
        author: 'NCERT',
        chapters: 'Chapters 1 & 2',
        type: 'ncert',
      },
      {
        title: 'NCERT Class 11 Indian Economic Development (Infrastructure & Economic Systems)',
        author: 'NCERT',
        chapters: 'Chapters 1 & 8',
        type: 'ncert',
      },
    ],
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      reviewerRecord: 'Verified against NCERT Class 12 Introductory Microeconomics & ERB Master Cadre SST Syllabus',
      verifiedSyllabusDenominator: 'ERB Punjab Master Cadre SST — Economics: Micro vs Macro; Types of economics and infrastructure; Consumer equilibrium; Demand, market demand, price elasticity',
    },
  },

  // ==========================================================================
  // 2. PRODUCER BEHAVIOUR, FORMS OF MARKET & PRICE DETERMINATION (B -> I -> A)
  // ==========================================================================
  'sst-econ-producer-cost-market': {
    id: 'sst-econ-producer-cost-market',
    topicId: 'sst-econ-producer-cost-market',
    subjectId: 'social-science',
    category: 'economy',
    practiceSource: 'authored-only',
    coverageStatus: 'complete',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    title: {
      en: 'Producer Behaviour, Forms of Market & Price Determination under Perfect Competition (B → I → A)',
      pa: 'ਉਤਪਾਦਕ ਵਿਵਹਾਰ, ਬਾਜ਼ਾਰ ਦੇ ਰੂਪ ਅਤੇ ਪੂਰਨ ਮੁਕਾਬਲੇ ਅਧੀਨ ਕੀਮਤ ਨਿਰਧਾਰਨ (B → I → A)',
      hi: 'उत्पादक व्यवहार, बाजार के रूप एवं पूर्ण प्रतियोगिता में कीमत निर्धारण (B → I → A)',
    },
    examRelevance: 'Punjab Master Cadre SST (8–10 Qs — Official ERB Headings: Producer Behaviour, Forms of Market, Price Determination under Perfect Competition)',
    estimatedTime: '50 min',
    prerequisites: {
      en: ['Demand analysis and elementary cost-profit concepts (Class 9–10 Economics)'],
      pa: ['ਮੰਗ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਲਾਗਤ-ਲਾਭ ਦੀਆਂ ਮੁੱਢਲੀਆਂ ਧਾਰਨਾਵਾਂ (ਜਮਾਤ 9–10 ਅਰਥਸ਼ਾਸਤਰ)'],
      hi: ['माँग विश्लेषण और लागत-लाभ की बुनियादी अवधारणाएँ (कक्षा 9–10 अर्थशास्त्र)'],
    },
    learningObjectives: {
      en: [
        '[B] Understand the 4 Factors of Production, Short Run vs Long Run, and the Law of Supply.',
        '[I] Master Production Function (TP, AP, MP), Law of Variable Proportions (3 Stages), Returns to Scale, Cost Curves (TFC, TVC, TC, AFC, AVC, AC, MC), and Revenue Curves (TR, AR, MR).',
        '[A] Analyse Producer Equilibrium (MR = MC and MC rising), Shutdown vs Break-Even Points, Market Forms (Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly), and Price Ceiling vs Price Floor.',
      ],
      pa: [
        '[B] ਉਤਪਾਦਨ ਦੇ 4 ਸਾਧਨ, ਅਲਪਕਾਲ ਬਨਾਮ ਦੀਰਘਕਾਲ ਅਤੇ ਪੂਰਤੀ ਦਾ ਨਿਯਮ।',
        '[I] ਉਤਪਾਦਨ ਫਲਨ (TP, AP, MP), ਪਰਿਵਰਤਨਸ਼ੀਲ ਅਨੁਪਾਤਾਂ ਦਾ ਨਿਯਮ (3 ਪੜਾਅ), ਪੈਮਾਨੇ ਦੇ ਪ੍ਰਤੀਫਲ, ਲਾਗਤ ਵਕਰ (AFC, AVC, AC, MC) ਅਤੇ ਆਮਦਨ ਵਕਰ (TR, AR, MR)।',
        '[A] ਉਤਪਾਦਕ ਸੰਤੁਲਨ (MR = MC ਤੇ ਵਧਦੀ MC), Shutdown ਬਨਾਮ Break-Even ਬਿੰਦੂ, ਬਾਜ਼ਾਰ ਦੇ ਰੂਪ (ਪੂਰਨ ਮੁਕਾਬਲਾ, ਏਕਾਧਿਕਾਰ, ਏਕਾਧਿਕਾਰਵਾਦੀ ਮੁਕਾਬਲਾ, ਅਲਪ-ਅਧਿਕਾਰ) ਅਤੇ ਉੱਚਤਮ/ਨਿਊਨਤਮ ਕੀਮਤ ਸੀਮਾ।',
      ],
      hi: [
        '[B] उत्पादन के 4 कारक, अल्पकाल बनाम दीर्घकाल और पूर्ति का नियम।',
        '[I] उत्पादन फलन (TP, AP, MP), परिवर्तनशील अनुपातों का नियम (3 अवस्थाएँ), पैमाने के प्रतिफल, लागत वक्र (AFC, AVC, AC, MC) और आगम वक्र (TR, AR, MR)।',
        '[A] उत्पादक संतुलन (MR = MC व बढ़ती MC), Shutdown बनाम Break-Even बिंदु, बाजार के रूप (पूर्ण प्रतियोगिता, एकाधिकार, एकाधिकारात्मक प्रतियोगिता, अल्पाधिकार) तथा उच्चतम/न्यूनतम कीमत सीमा।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 Official ERB Syllabus Mapping & Progression</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers 3 official Punjab Master Cadre SST Economics headings: <strong>(1) Producer behaviour (production, cost, revenue, supply, producer equilibrium)</strong>, <strong>(2) Forms of market</strong>, and <strong>(3) Price determination under perfect competition</strong> in <strong>B → I → A</strong> order.
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · Basic (Class 6–8 Foundation)</span>
              <span class="text-xs text-slate-400">Factors of Production, Short Run vs Long Run & Supply</span>
            </div>
            <h3 class="text-xl font-bold text-white">1. Factors of Production, Time Horizons & Law of Supply</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Four Factors of Production & Factor Rewards:</strong> (1) <strong>Land</strong> → <em>Rent</em>, (2) <strong>Labour</strong> → <em>Wages</em>, (3) <strong>Capital</strong> → <em>Interest</em>, (4) <strong>Entrepreneurship</strong> → <em>Profit</em>.</li>
              <li><strong>Short Run vs Long Run:</strong> In the <strong>Short Run</strong>, at least one factor (capital/plant) is <strong>Fixed</strong> while others (labour/raw material) are <strong>Variable</strong> (governed by the <em>Law of Variable Proportions</em>). In the <strong>Long Run</strong>, <strong>all factors of production are variable</strong> (governed by <em>Returns to Scale</em>).</li>
              <li><strong>Supply vs Stock & Law of Supply:</strong> <em>Stock</em> is total available output with the producer; <em>Supply</em> is the quantity offered for sale at a specific price during a given period. <strong>Law of Supply:</strong> <em>Ceteris paribus</em>, quantity supplied rises when own price rises (upward-sloping supply curve). A firm’s short-run supply curve under perfect competition is the <strong>rising portion of its Marginal Cost (MC) curve at and above the minimum point of AVC</strong>.</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · Intermediate (Class 9–11 Core)</span>
              <span class="text-xs text-slate-400">Production Function, Cost Curves & Revenue Curves</span>
            </div>
            <h3 class="text-xl font-bold text-white">2. Law of Variable Proportions, Cost Curves & Revenue Relations</h3>
            <ul class="text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Production Function & TP–AP–MP Relations:</strong> $\text{AP} = \text{TP}/L$ and $\text{MP}_n = \text{TP}_n - \text{TP}_{n-1} = \Delta \text{TP}/\Delta L$.
                <br/>• <strong>Stage I (Increasing Returns to a Factor):</strong> TP increases at an increasing rate first, then up to the point where AP is maximum (at AP’s maximum, <strong>$\text{MP} = \text{AP}$</strong>; whenever $\text{MP} > \text{AP}$, AP rises).
                <br/>• <strong>Stage II (Diminishing Returns to a Factor — Rational Stage of Production!):</strong> Both MP and AP decline, but $\text{MP} > 0$, until <strong>$\text{MP} = 0$ where TP is Maximum</strong>. A rational producer ALWAYS operates in <strong>Stage II</strong>.
                <br/>• <strong>Stage III (Negative Returns):</strong> $\text{MP} < 0$ and TP declines. (Point where MP is maximum is the <strong>Point of Inflexion</strong> on the TP curve).</li>
              <li><strong>Long-Run Returns to Scale (Cobb-Douglas $Q = A L^\alpha K^\beta$):</strong> If $\alpha + \beta > 1 \Rightarrow$ Increasing Returns to Scale (IRS); if $\alpha + \beta = 1 \Rightarrow$ Constant Returns to Scale (CRS); if $\alpha + \beta < 1 \Rightarrow$ Diminishing Returns to Scale (DRS).</li>
              <li><strong>Short-Run Cost Curves Geometry:</strong> $\text{TC} = \text{TFC} + \text{TVC}$ and $\text{AC} = \text{AFC} + \text{AVC}$.
                <br/>• <strong>TFC</strong> is a horizontal straight line parallel to X-axis (even at zero output, $\text{TC} = \text{TFC}$!).
                <br/>• <strong>AFC ($\text{TFC}/Q$)</strong> is a <strong>Rectangular Hyperbola</strong> ($\text{AFC} \times Q = \text{TFC} = \text{constant}$); it continuously falls as output rises but never touches zero.
                <br/>• <strong>AVC, AC (ATC), and MC</strong> are <strong>U-shaped</strong> due to the Law of Variable Proportions. <strong>Marginal Cost ($\text{MC}_n = \text{TC}_n - \text{TC}_{n-1} = \text{TVC}_n - \text{TVC}_{n-1}$)</strong> depends ONLY on TVC (independent of TFC) and <strong>cuts both AVC and AC at their respective minimum points from below</strong>!</li>
              <li><strong>Revenue Curves ($\text{TR}, \text{AR}, \text{MR}$):</strong> Always $\text{AR} = \frac{\text{TR}}{Q} = \frac{P \times Q}{Q} = \mathbf{P}$ (Average Revenue curve is identical to the firm’s Demand Curve!).
                <br/>• Under <strong>Perfect Competition</strong> (price-taker): $\mathbf{P = \text{AR} = \text{MR}}$ (horizontal line parallel to X-axis; TR increases at constant rate).
                <br/>• Under <strong>Monopoly & Monopolistic Competition</strong> (downward-sloping demand): $\mathbf{\text{AR} > \text{MR}}$ (for linear AR, the slope of MR is twice the slope of AR), and $\text{MR} = \text{AR}\left(1 - \frac{1}{|E_d|}\right)$.</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · Advanced (Class 11–12 & Graduation)</span>
              <span class="text-xs text-slate-400">Producer Equilibrium, Market Forms & Price Determination</span>
            </div>
            <h3 class="text-xl font-bold text-white">3. Producer Equilibrium ($\text{MR}=\text{MC}$), Forms of Market & Price Controls</h3>
            <ul class="text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Two Conditions for Producer Equilibrium (Profit Maximisation):</strong>
                <br/>1. <strong>First-Order Necessary Condition:</strong> $\mathbf{\text{MR} = \text{MC}}$ (under Perfect Competition, $P = \text{MC}$).
                <br/>2. <strong>Second-Order Sufficient Condition:</strong> <strong>MC must be rising</strong> at the point of equality (i.e., MC curve must cut MR curve from below).
                <br/>• <strong>Break-Even Point:</strong> $P = \text{AR} = \min \text{AC}$ (Firm earns Normal Profit; Economic Profit = 0).
                <br/>• <strong>Shutdown Point (Short Run):</strong> $P = \text{AR} = \min \text{AVC}$ (Firm covers only variable costs and loses TFC; if $P < \min \text{AVC}$, the firm shuts down immediately).</li>
              <li><strong>Comparison of the Four Market Forms:</strong>
                <br/>• <strong>Perfect Competition:</strong> Large number of buyers & sellers, <strong>homogeneous product</strong>, free entry & exit, perfect knowledge, <strong>Firm is a Price-Taker ($P = \text{AR} = \text{MR}$, $E_d = \infty$)</strong>, earns only <strong>Normal Profit ($\text{AR} = \text{AC}$)</strong> in the long run.
                <br/>• <strong>Monopoly:</strong> Single seller, no close substitutes, strong barriers to entry (patents, natural monopoly), <strong>Price-Maker</strong>, practices <strong>Price Discrimination</strong> (A.C. Pigou’s 1st, 2nd, 3rd degrees — charging higher price in the market with <em>lower</em> elasticity of demand), earns Super-Normal Profit in the long run.
                <br/>• <strong>Monopolistic Competition (Edward Chamberlin, 1933 / Joan Robinson):</strong> Large number of firms selling <strong>differentiated products</strong> (toothpastes, soaps), heavy <strong>Selling Costs (advertising)</strong>, free entry/exit (Normal Profit in long run with excess capacity).
                <br/>• <strong>Oligopoly:</strong> A <strong>few big interdependent sellers</strong> (automobiles, telecom, OPEC); price rigidity explained by <strong>Paul Sweezy’s Kinked Demand Curve (1939)</strong> (elastic above kink, inelastic below kink, causing a discontinuous gap in MR); Collusive (Cartels) vs Non-Collusive.</li>
              <li><strong>Price Determination under Perfect Competition (Marshall’s Scissors of Demand & Supply):</strong>
                <br/>• <strong>Price Ceiling (Maximum Legal Price):</strong> Fixed by government <strong>BELOW equilibrium price</strong> ($P_c < P^*$) to protect consumers on essential goods (wheat, sugar, rent control); creates <strong>Excess Demand (Shortage)</strong>, leading to rationing queues and black marketing.
                <br/>• <strong>Price Floor / Minimum Support Price (MSP):</strong> Fixed by government <strong>ABOVE equilibrium price</strong> ($P_f > P^*$) to protect producers/farmers (agricultural MSP, minimum wages); creates <strong>Excess Supply (Surplus)</strong>, which the government absorbs via buffer stock procurement (FCI).</li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 ਸਰਕਾਰੀ ERB ਸਿਲੇਬਸ ਮੈਪਿੰਗ (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ 3 ਅਧਿਕਾਰਤ ਸਿਰਲੇਖਾਂ—<strong>Producer behaviour</strong>, <strong>Forms of market</strong> ਅਤੇ <strong>Price determination under perfect competition</strong>—ਨੂੰ <strong>B → I → A</strong> ਕ੍ਰਮ ਵਿੱਚ ਸਮਝਾਇਆ ਗਿਆ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · ਮੁੱਢਲਾ ਪੱਧਰ (ਜਮਾਤ 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. ਉਤਪਾਦਨ ਦੇ ਸਾਧਨ, ਸਮਾਂ-ਕਾਲ ਅਤੇ ਪੂਰਤੀ ਦਾ ਨਿਯਮ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਉਤਪਾਦਨ ਦੇ 4 ਸਾਧਨ ਤੇ ਉਨ੍ਹਾਂ ਦੇ ਇਨਾਮ:</strong> ਭੂਮੀ (ਲਗਾਨ/Rent), ਕਿਰਤ (ਮਜ਼ਦੂਰੀ/Wages), ਪੂੰਜੀ (ਵਿਆਜ/Interest) ਅਤੇ ਉੱਦਮ (ਲਾਭ/Profit)।</li>
              <li><strong>ਅਲਪਕਾਲ (Short Run) ਬਨਾਮ ਦੀਰਘਕਾਲ (Long Run):</strong> ਅਲਪਕਾਲ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਸਾਧਨ ਸਥਿਰ ਹੁੰਦਾ ਹੈ (ਪਰਿਵਰਤਨਸ਼ੀਲ ਅਨੁਪਾਤਾਂ ਦਾ ਨਿਯਮ ਲਾਗੂ ਹੁੰਦਾ ਹੈ); ਦੀਰਘਕਾਲ ਵਿੱਚ ਸਾਰੇ ਸਾਧਨ ਪਰਿਵਰਤਨਸ਼ੀਲ ਹੁੰਦੇ ਹਨ (ਪੈਮਾਨੇ ਦੇ ਪ੍ਰਤੀਫਲ ਲਾਗੂ ਹੁੰਦੇ ਹਨ)।</li>
              <li><strong>ਪੂਰਤੀ ਦਾ ਨਿਯਮ (Law of Supply):</strong> ਕੀਮਤ ਵਧਣ ਨਾਲ ਪੂਰਤੀ ਦੀ ਮਾਤਰਾ ਵਧਦੀ ਹੈ (ਧਨਾਤਮਕ ਢਲਾਨ)।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · ਮੱਧਮ ਪੱਧਰ (ਜਮਾਤ 9–11)</span>
            <h3 class="text-xl font-bold text-white">2. ਪਰਿਵਰਤਨਸ਼ੀਲ ਅਨੁਪਾਤਾਂ ਦਾ ਨਿਯਮ, ਲਾਗਤ ਵਕਰ ਅਤੇ ਆਮਦਨ ਵਕਰ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਪਰਿਵਰਤਨਸ਼ੀਲ ਅਨੁਪਾਤਾਂ ਦੇ 3 ਪੜਾਅ:</strong> ਪਹਿਲਾ ਪੜਾਅ (ਵਧਦੇ ਪ੍ਰਤੀਫਲ — ਜਿੱਥੇ AP ਵੱਧ ਤੋਂ ਵੱਧ ਹੁੰਦਾ ਹੈ, ਉੱਥੇ $\text{MP} = \text{AP}$); <strong>ਦੂਜਾ ਪੜਾਅ (ਘਟਦੇ ਪ੍ਰਤੀਫਲ — ਇੱਕ ਵਿਵੇਕਸ਼ੀਲ ਉਤਪਾਦਕ ਹਮੇਸ਼ਾ ਦੂਜੇ ਪੜਾਅ ਵਿੱਚ ਉਤਪਾਦਨ ਕਰਦਾ ਹੈ, ਜਿੱਥੇ $\text{MP} = 0$ ਹੋਣ ਤੇ TP ਵੱਧ ਤੋਂ ਵੱਧ ਹੁੰਦਾ ਹੈ)</strong>; ਤੀਜਾ ਪੜਾਅ (ਰਿਣਾਤਮਕ ਪ੍ਰਤੀਫਲ — $\text{MP} < 0$)।</li>
              <li><strong>ਲਾਗਤ ਵਕਰ (Cost Curves):</strong> $\text{TC} = \text{TFC} + \text{TVC}$। <strong>AFC ($\text{TFC}/Q$)</strong> ਦਾ ਆਕਾਰ <strong>ਆਇਤਾਕਾਰ ਹਾਈਪਰਬੋਲਾ (Rectangular Hyperbola)</strong> ਹੁੰਦਾ ਹੈ। <strong>MC ਵਕਰ ਹਮੇਸ਼ਾ AVC ਅਤੇ AC ਨੂੰ ਉਨ੍ਹਾਂ ਦੇ ਹੇਠਲੇ (Minimum) ਬਿੰਦੂਆਂ ਉੱਤੇ ਹੇਠੋਂ ਕੱਟਦਾ ਹੈ</strong>।</li>
              <li><strong>ਆਮਦਨ ਵਕਰ (Revenue):</strong> ਹਮੇਸ਼ਾ $\text{AR} = P$ (ਮੰਗ ਵਕਰ)। ਪੂਰਨ ਮੁਕਾਬਲੇ ਵਿੱਚ $P = \text{AR} = \text{MR}$ (X-ਧੁਰੇ ਦੇ ਸਮਾਨਾਂਤਰ ਸਿੱਧੀ ਰੇਖਾ)। ਏਕਾਧਿਕਾਰ ਅਤੇ ਏਕਾਧਿਕਾਰਵਾਦੀ ਮੁਕਾਬਲੇ ਵਿੱਚ $\text{AR} > \text{MR}$।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · ਉੱਚ ਪੱਧਰ (ਜਮਾਤ 11–12 / ਗ੍ਰੈਜੂਏਸ਼ਨ)</span>
            <h3 class="text-xl font-bold text-white">3. ਉਤਪਾਦਕ ਸੰਤੁਲਨ ($\text{MR}=\text{MC}$), ਬਾਜ਼ਾਰ ਦੇ ਰੂਪ ਅਤੇ ਕੀਮਤ ਨਿਰਧਾਰਨ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਉਤਪਾਦਕ ਸੰਤੁਲਨ ਦੀਆਂ 2 ਸ਼ਰਤਾਂ:</strong> (1) $\mathbf{\text{MR} = \text{MC}}$ ਅਤੇ (2) ਸੰਤੁਲਨ ਬਿੰਦੂ ਤੋਂ ਬਾਅਦ <strong>MC ਵਧਦੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ</strong> (MC ਵਕਰ MR ਨੂੰ ਹੇਠੋਂ ਕੱਟੇ)। <strong>Break-Even Point:</strong> $P = \min \text{AC}$ (ਸਧਾਰਨ ਲਾਭ); <strong>Shutdown Point (ਉਤਪਾਦਨ ਬੰਦ ਬਿੰਦੂ):</strong> $P = \min \text{AVC}$।</li>
              <li><strong>ਬਾਜ਼ਾਰ ਦੇ 4 ਮੁੱਖ ਰੂਪ:</strong> (1) <strong>ਪੂਰਨ ਮੁਕਾਬਲਾ (Perfect Competition):</strong> ਸਮਰੂਪ ਵਸਤੂ, ਫ਼ਰਮ ਕੀਮਤ-ਸਵੀਕਾਰਕ (Price-Taker) ਹੁੰਦੀ ਹੈ ($E_d = \infty$); (2) <strong>ਏਕਾਧਿਕਾਰ (Monopoly):</strong> ਇੱਕੋ ਵਿਕਰੇਤਾ, ਕੋਈ ਨੇੜਲਾ ਪ੍ਰਤੀਸਥਾਪਨ ਨਹੀਂ, <strong>ਕੀਮਤ ਵਿਤਕਰਾ (Price Discrimination)</strong>; (3) <strong>ਏਕਾਧਿਕਾਰਵਾਦੀ ਮੁਕਾਬਲਾ (Monopolistic Competition — Edward Chamberlin):</strong> ਵਸਤੂ ਵਿਭਿੰਨਤਾ (Product Differentiation) ਅਤੇ ਵਿਕਰੀ ਲਾਗਤਾਂ (ਇਸ਼ਤਿਹਾਰਬਾਜ਼ੀ); (4) <strong>ਅਲਪ-ਅਧਿਕਾਰ (Oligopoly):</strong> ਕੁਝ ਵੱਡੀਆਂ ਫ਼ਰਮਾਂ, <strong>ਪੌਲ ਸਵੀਜ਼ੀ (Paul Sweezy) ਦਾ ਵਿਕੁੰਚਿਤ ਮੰਗ ਵਕਰ (Kinked Demand Curve)</strong>।</li>
              <li><strong>ਉੱਚਤਮ ਕੀਮਤ ਸੀਮਾ (Price Ceiling) ਬਨਾਮ ਨਿਊਨਤਮ ਸਮਰਥਨ ਕੀਮਤ (Price Floor / MSP):</strong> Price Ceiling ਸੰਤੁਲਨ ਕੀਮਤ ਤੋਂ <strong>ਹੇਠਾਂ</strong> ਤੈਅ ਹੁੰਦੀ ਹੈ (ਜਿਸ ਨਾਲ ਵਾਧੂ ਮੰਗ/ਕਮੀ ਤੇ ਰਾਸ਼ਨਿੰਗ ਪੈਦਾ ਹੁੰਦੀ ਹੈ); Price Floor (MSP) ਸੰਤੁਲਨ ਕੀਮਤ ਤੋਂ <strong>ਉੱਪਰ</strong> ਤੈਅ ਹੁੰਦੀ ਹੈ (ਜਿਸ ਨਾਲ ਵਾਧੂ ਪੂਰਤੀ ਪੈਦਾ ਹੁੰਦੀ ਹੈ)।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 आधिकारिक ERB पाठ्यक्रम मानचित्रण (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर SST के 3 आधिकारिक शीर्षकों—<strong>Producer behaviour</strong>, <strong>Forms of market</strong> तथा <strong>Price determination under perfect competition</strong>—को <strong>B → I → A</strong> क्रम में प्रस्तुत किया गया है।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · आधारभूत स्तर (कक्षा 6–8)</span>
            <h3 class="text-xl font-bold text-white">1. उत्पादन के कारक, समयावधि एवं पूर्ति का नियम</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>उत्पादन के 4 कारक व उनके प्रतिफल:</strong> भूमि (लगान), श्रम (मजदूरी), पूँजी (ब्याज) और उद्यम (लाभ)।</li>
              <li><strong>अल्पकाल (Short Run) बनाम दीर्घकाल (Long Run):</strong> अल्पकाल में कम-से-कम एक कारक स्थिर होता है (परिवर्तनशील अनुपातों का नियम लागू); दीर्घकाल में सभी कारक परिवर्तनशील होते हैं (पैमाने के प्रतिफल लागू)।</li>
              <li><strong>पूर्ति का नियम (Law of Supply):</strong> अन्य बातें समान रहने पर कीमत बढ़ने से पूर्ति की मात्रा बढ़ती है (धनात्मक ढाल)।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · मध्यम स्तर (कक्षा 9–11)</span>
            <h3 class="text-xl font-bold text-white">2. परिवर्तनशील अनुपातों का नियम, लागत वक्र एवं आगम वक्र</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>परिवर्तनशील अनुपातों की 3 अवस्थाएँ:</strong> प्रथम अवस्था (बढ़ते प्रतिफल — जहाँ AP अधिकतम होता है, वहाँ $\text{MP} = \text{AP}$); <strong>द्वितीय अवस्था (घटते प्रतिफल — विवेकशील उत्पादक सदैव दूसरी अवस्था में उत्पादन करता है, जहाँ $\text{MP} = 0$ होने पर TP अधिकतम होता है)</strong>; तृतीय अवस्था (ऋणात्मक प्रतिफल — $\text{MP} < 0$)।</li>
              <li><strong>लागत वक्र (Cost Curves):</strong> $\text{TC} = \text{TFC} + \text{TVC}$। <strong>AFC ($\text{TFC}/Q$)</strong> का आकार <strong>आयताकार अतिपरवलय (Rectangular Hyperbola)</strong> होता है। <strong>MC वक्र सदैव AVC और AC को उनके न्यूनतम बिंदुओं पर नीचे से काटता है</strong>।</li>
              <li><strong>आगम वक्र (Revenue):</strong> सदैव $\text{AR} = P$ (माँग वक्र)। पूर्ण प्रतियोगिता में $P = \text{AR} = \text{MR}$ (X-अक्ष के समानांतर सीधी रेखा)। एकाधिकार व एकाधिकारात्मक प्रतियोगिता में $\text{AR} > \text{MR}$।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · उन्नत स्तर (कक्षा 11–12 / स्नातक)</span>
            <h3 class="text-xl font-bold text-white">3. उत्पादक संतुलन ($\text{MR}=\text{MC}$), बाजार के रूप एवं कीमत निर्धारण</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>उत्पादक संतुलन की 2 शर्तें:</strong> (1) $\mathbf{\text{MR} = \text{MC}}$ तथा (2) संतुलन बिंदु पर <strong>MC बढ़ता हुआ होना चाहिए</strong> (MC वक्र MR को नीचे से काटे)। <strong>Break-Even Point:</strong> $P = \min \text{AC}$ (सामान्य लाभ); <strong>Shutdown Point (उत्पादन बंद बिंदु):</strong> $P = \min \text{AVC}$।</li>
              <li><strong>बाजार के 4 प्रमुख रूप:</strong> (1) <strong>पूर्ण प्रतियोगिता (Perfect Competition):</strong> समरूप वस्तु, फर्म कीमत-स्वीकारक (Price-Taker) होती है ($E_d = \infty$); (2) <strong>एकाधिकार (Monopoly):</strong> एकल विक्रेता, कोई निकट स्थानापन्न नहीं, <strong>कीमत विभेद (Price Discrimination)</strong>; (3) <strong>एकाधिकारात्मक प्रतियोगिता (Monopolistic Competition — Edward Chamberlin):</strong> वस्तु विभेद (Product Differentiation) एवं विक्रय लागतें (विज्ञापन); (4) <strong>अल्पाधिकार (Oligopoly):</strong> कुछ बड़ी परस्पर निर्भर फर्में, <strong>पॉल स्वीज़ी (Paul Sweezy) का विकुंचित माँग वक्र (Kinked Demand Curve)</strong>।</li>
              <li><strong>उच्चतम कीमत सीमा (Price Ceiling) बनाम न्यूनतम समर्थन कीमत (Price Floor / MSP):</strong> Price Ceiling संतुलन कीमत से <strong>नीचे</strong> निर्धारित होती है (जिससे अधिमाँग/कमी व राशनिंग उत्पन्न होती है); Price Floor (MSP) संतुलन कीमत से <strong>ऊपर</strong> निर्धारित होती है (जिससे अतिपूर्ति उत्पन्न होती है)।</li>
            </ul>
          </div>
        </div>
      `,
    },
    summary: {
      en: 'Covers Producer Behaviour (Production Function TP/AP/MP, Law of Variable Proportions Stage II rational production, Returns to Scale, Cost curves AFC rectangular hyperbola & MC cutting AVC/AC at minimum, Revenue curves AR=P, Producer Equilibrium MR=MC with rising MC, Shutdown P=min AVC vs Break-Even P=min AC), Forms of Market (Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly Kinked Demand), and Price Determination (Price Ceiling below equilibrium vs Price Floor/MSP above equilibrium).',
      pa: 'ਉਤਪਾਦਕ ਵਿਵਹਾਰ (TP/AP/MP, ਪਰਿਵਰਤਨਸ਼ੀਲ ਅਨੁਪਾਤਾਂ ਦਾ ਨਿਯਮ ਪੜਾਅ II, ਲਾਗਤ ਵਕਰ AFC ਆਇਤਾਕਾਰ ਹਾਈਪਰਬੋਲਾ, MC ਦੁਆਰਾ AVC/AC ਨੂੰ ਹੇਠਲੇ ਬਿੰਦੂ ਤੇ ਕੱਟਣਾ, ਉਤਪਾਦਕ ਸੰਤੁਲਨ MR=MC ਤੇ ਵਧਦੀ MC, Shutdown P=min AVC ਬਨਾਮ Break-Even P=min AC), ਬਾਜ਼ਾਰ ਦੇ 4 ਰੂਪ ਅਤੇ ਪੂਰਨ ਮੁਕਾਬਲੇ ਅਧੀਨ ਕੀਮਤ ਨਿਰਧਾਰਨ (Price Ceiling ਬਨਾਮ Price Floor/MSP) ਦਾ ਸੰਪੂਰਨ ਸਾਰ।',
      hi: 'उत्पादक व्यवहार (TP/AP/MP, परिवर्तनशील अनुपातों का नियम अवस्था II, लागत वक्र AFC आयताकार अतिपरवलय, MC द्वारा AVC/AC को न्यूनतम बिंदु पर काटना, उत्पादक संतुलन MR=MC व बढ़ती MC, Shutdown P=min AVC बनाम Break-Even P=min AC), बाजार के 4 रूप और पूर्ण प्रतियोगिता में कीमत निर्धारण (Price Ceiling बनाम Price Floor/MSP) का संपूर्ण सार।',
    },
    keyNotes: {
      en: [
        '[B] In the Short Run at least one input is fixed (Law of Variable Proportions); in the Long Run all inputs are variable (Returns to Scale).',
        '[I] A rational producer always operates in Stage II (Diminishing Returns) of the Law of Variable Proportions, between max AP (MP=AP) and max TP (MP=0).',
        '[I] Average Fixed Cost (AFC = TFC/Q) is a Rectangular Hyperbola; it falls continuously as output increases but never becomes zero.',
        '[I] Marginal Cost (MC) depends solely on Total Variable Cost (TVC) and cuts both AVC and AC at their minimum points from below.',
        '[I] Average Revenue (AR) is always equal to Price (P); under Perfect Competition, P = AR = MR (horizontal line, Ed = ∞).',
        '[A] Producer Equilibrium requires two conditions: (1) MR = MC, and (2) MC must be rising (cuts MR from below).',
        '[A] Short-run Shutdown Point occurs where P = minimum AVC; Break-Even Point occurs where P = minimum AC (Normal Profit).',
        '[A] Product Differentiation and Selling Costs (advertising) are the defining features of Monopolistic Competition (Edward Chamberlin).',
        '[A] Paul Sweezy’s Kinked Demand Curve (1939) explains price rigidity under non-collusive Oligopoly.',
        '[A] Price Ceiling is set BELOW equilibrium price (causes Excess Demand / rationing); Price Floor (MSP) is set ABOVE equilibrium price (causes Excess Supply).',
      ],
      pa: [
        '[B] ਅਲਪਕਾਲ ਵਿੱਚ ਪਰਿਵਰਤਨਸ਼ੀਲ ਅਨੁਪਾਤਾਂ ਦਾ ਨਿਯਮ ਅਤੇ ਦੀਰਘਕਾਲ ਵਿੱਚ ਪੈਮਾਨੇ ਦੇ ਪ੍ਰਤੀਫਲ (Returns to Scale) ਲਾਗੂ ਹੁੰਦੇ ਹਨ।',
        '[I] ਇੱਕ ਵਿਵੇਕਸ਼ੀਲ ਉਤਪਾਦਕ ਹਮੇਸ਼ਾ ਦੂਜੇ ਪੜਾਅ (Stage II) ਵਿੱਚ ਉਤਪਾਦਨ ਕਰਦਾ ਹੈ।',
        '[I] ਔਸਤ ਸਥਿਰ ਲਾਗਤ (AFC) ਵਕਰ ਦਾ ਆਕਾਰ ਆਇਤਾਕਾਰ ਹਾਈਪਰਬੋਲਾ (Rectangular Hyperbola) ਹੁੰਦਾ ਹੈ।',
        '[I] ਸੀਮਾਂਤ ਲਾਗਤ (MC) ਸਿਰਫ਼ TVC ਉੱਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ ਅਤੇ AVC ਤੇ AC ਨੂੰ ਉਨ੍ਹਾਂ ਦੇ ਹੇਠਲੇ ਬਿੰਦੂਆਂ ਉੱਤੇ ਕੱਟਦੀ ਹੈ।',
        '[I] ਪੂਰਨ ਮੁਕਾਬਲੇ ਵਿੱਚ P = AR = MR ਹੁੰਦਾ ਹੈ ਅਤੇ ਮੰਗ ਵਕਰ ਪੂਰਨ ਲਚਕਦਾਰ (Ed = ∞) ਹੁੰਦਾ ਹੈ।',
        '[A] ਉਤਪਾਦਕ ਸੰਤੁਲਨ ਦੀਆਂ 2 ਸ਼ਰਤਾਂ ਹਨ: (1) MR = MC ਅਤੇ (2) MC ਵਧਦੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।',
        '[A] Shutdown Point ਉੱਥੇ ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ P = ਘੱਟੋ-ਘੱਟ AVC ਹੋਵੇ; Break-Even Point ਉੱਥੇ ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ P = ਘੱਟੋ-ਘੱਟ AC ਹੋਵੇ।',
        '[A] ਵਸਤੂ ਵਿਭਿੰਨਤਾ (Product Differentiation) ਅਤੇ ਵਿਕਰੀ ਲਾਗਤਾਂ ਏਕਾਧਿਕਾਰਵਾਦੀ ਮੁਕਾਬਲੇ (Chamberlin) ਦੀਆਂ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਹਨ।',
        '[A] ਪੌਲ ਸਵੀਜ਼ੀ ਦਾ ਵਿਕੁੰਚਿਤ ਮੰਗ ਵਕਰ (Kinked Demand Curve) ਅਲਪ-ਅਧਿਕਾਰ (Oligopoly) ਵਿੱਚ ਕੀਮਤ ਕਠੋਰਤਾ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।',
        '[A] Price Ceiling ਸੰਤੁਲਨ ਕੀਮਤ ਤੋਂ ਹੇਠਾਂ (ਵਾਧੂ ਮੰਗ) ਅਤੇ Price Floor (MSP) ਸੰਤੁਲਨ ਕੀਮਤ ਤੋਂ ਉੱਪਰ (ਵਾਧੂ ਪੂਰਤੀ) ਤੈਅ ਹੁੰਦੀ ਹੈ।',
      ],
      hi: [
        '[B] अल्पकाल में परिवर्तनशील अनुपातों का नियम तथा दीर्घकाल में पैमाने के प्रतिफल (Returns to Scale) लागू होते हैं।',
        '[I] एक विवेकशील उत्पादक सदैव दूसरी अवस्था (Stage II) में उत्पादन करता है।',
        '[I] औसत स्थिर लागत (AFC) वक्र का आकार आयताकार अतिपरवलय (Rectangular Hyperbola) होता है।',
        '[I] सीमांत लागत (MC) केवल TVC पर निर्भर करती है तथा AVC व AC को उनके न्यूनतम बिंदुओं पर काटती है।',
        '[I] पूर्ण प्रतियोगिता में P = AR = MR होता है और माँग वक्र पूर्णतः लोचदार (Ed = ∞) होता है।',
        '[A] उत्पादक संतुलन की 2 शर्तें हैं: (1) MR = MC तथा (2) MC बढ़ता हुआ होना चाहिए।',
        '[A] Shutdown Point वहाँ होता है जहाँ P = न्यूनतम AVC हो; Break-Even Point वहाँ होता है जहाँ P = न्यूनतम AC हो।',
        '[A] वस्तु विभेद (Product Differentiation) और विक्रय लागतें एकाधिकारात्मक प्रतियोगिता (Chamberlin) की मुख्य विशेषताएँ हैं।',
        '[A] पॉल स्वीज़ी का विकुंचित माँग वक्र (Kinked Demand Curve) अल्पाधिकार (Oligopoly) में कीमत कठोरता को समझाता है।',
        '[A] Price Ceiling संतुलन कीमत से नीचे (अधिमाँग) तथा Price Floor (MSP) संतुलन कीमत से ऊपर (अतिपूर्ति) निर्धारित होती है।',
      ],
    },
    workedExamples: [
      {
        title: {
          en: 'Finding Fixed Cost, Variable Cost & Marginal Cost from a Cost Function',
          pa: 'ਲਾਗਤ ਫਲਨ ਤੋਂ TFC, TVC ਅਤੇ MC ਦੀ ਗਣਨਾ',
          hi: 'लागत फलन से TFC, TVC और MC की गणना',
        },
        problem: {
          en: 'A firm’s short-run Total Cost for 0, 1, 2, and 3 units of output is ₹50, ₹80, ₹105, and ₹140 respectively. Find (a) TFC at 3 units, (b) TVC at 2 units, and (c) MC of the 3rd unit.',
          pa: 'ਇੱਕ ਫ਼ਰਮ ਦੀ 0, 1, 2 ਅਤੇ 3 ਇਕਾਈਆਂ ਦੇ ਉਤਪਾਦਨ ਉੱਤੇ ਕੁੱਲ ਲਾਗਤ (TC) ਕ੍ਰਮਵਾਰ ₹50, ₹80, ₹105 ਅਤੇ ₹140 ਹੈ। ਪਤਾ ਕਰੋ: (a) 3 ਇਕਾਈਆਂ ਤੇ TFC, (b) 2 ਇਕਾਈਆਂ ਤੇ TVC, ਅਤੇ (c) ਤੀਜੀ ਇਕਾਈ ਦੀ MC।',
          hi: 'एक फर्म की 0, 1, 2 और 3 इकाइयों के उत्पादन पर कुल लागत (TC) क्रमशः ₹50, ₹80, ₹105 और ₹140 है। ज्ञात करें: (a) 3 इकाइयों पर TFC, (b) 2 इकाइयों पर TVC, तथा (c) तीसरी इकाई की MC।',
        },
        steps: {
          en: [
            '(a) At Q = 0, Total Variable Cost (TVC) is 0, so TFC = TC at zero output = ₹50. Since TFC remains constant at all output levels, TFC at 3 units = ₹50.',
            '(b) At Q = 2, TC = ₹105 and TFC = ₹50 ⇒ TVC = TC - TFC = 105 - 50 = ₹55.',
            '(c) Marginal Cost of 3rd unit: MC3 = TC3 - TC2 = 140 - 105 = ₹35.',
          ],
          pa: [
            '(a) Q = 0 ਉੱਤੇ TC = ₹50 ਹੈ, ਇਸ ਲਈ TFC ਹਮੇਸ਼ਾ ₹50 ਰਹੇਗੀ (3 ਇਕਾਈਆਂ ਤੇ ਵੀ ₹50)।',
            '(b) Q = 2 ਉੱਤੇ TVC = TC - TFC = 105 - 50 = ₹55।',
            '(c) ਤੀਜੀ ਇਕਾਈ ਦੀ MC = TC3 - TC2 = 140 - 105 = ₹35।',
          ],
          hi: [
            '(a) Q = 0 पर TC = ₹50 है, अतः TFC सभी स्तरों पर ₹50 रहेगी (3 इकाइयों पर भी ₹50)।',
            '(b) Q = 2 पर TVC = TC - TFC = 105 - 50 = ₹55।',
            '(c) तीसरी इकाई की MC = TC3 - TC2 = 140 - 105 = ₹35।',
          ],
        },
        solution: {
          en: '(a) TFC = ₹50; (b) TVC at 2 units = ₹55; (c) MC of 3rd unit = ₹35.',
          pa: '(a) TFC = ₹50; (b) 2 ਇਕਾਈਆਂ ਤੇ TVC = ₹55; (c) ਤੀਜੀ ਇਕਾਈ ਦੀ MC = ₹35।',
          hi: '(a) TFC = ₹50; (b) 2 इकाइयों पर TVC = ₹55; (c) तीसरी इकाई की MC = ₹35।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Every point where MR = MC gives Producer Equilibrium.',
          pa: 'ਜਿੱਥੇ ਵੀ MR = MC ਹੋਵੇ, ਉੱਥੇ ਹਮੇਸ਼ਾ ਉਤਪਾਦਕ ਸੰਤੁਲਨ ਹੁੰਦਾ ਹੈ।',
          hi: 'जहाँ भी MR = MC हो, वहाँ सदैव उत्पादक संतुलन होता है।',
        },
        correction: {
          en: 'MR = MC is only the necessary first-order condition. If MC is falling at the point where MR = MC, producing one more unit adds more to revenue than to cost—so it is a point of maximum loss, not profit! Producer Equilibrium requires BOTH MR = MC AND MC must be rising (cutting MR from below).',
          pa: 'MR = MC ਸਿਰਫ਼ ਪਹਿਲੀ ਸ਼ਰਤ ਹੈ। ਜੇਕਰ ਉਸ ਬਿੰਦੂ ਤੇ MC ਘਟ ਰਹੀ ਹੋਵੇ, ਤਾਂ ਉਹ ਸੰਤੁਲਨ ਬਿੰਦੂ ਨਹੀਂ ਹੁੰਦਾ। ਉਤਪਾਦਕ ਸੰਤੁਲਨ ਲਈ MR = MC ਦੇ ਨਾਲ-ਨਾਲ MC ਵਧਦੀ ਹੋਣੀ (MR ਨੂੰ ਹੇਠੋਂ ਕੱਟਣਾ) ਲਾਜ਼ਮੀ ਹੈ।',
          hi: 'MR = MC केवल प्रथम शर्त है। यदि उस बिंदु पर MC घट रही हो, तो वह संतुलन बिंदु नहीं होता। उत्पादक संतुलन के लिए MR = MC के साथ-साथ MC का बढ़ता हुआ होना (MR को नीचे से काटना) अनिवार्य है।',
        },
        whyItMatters: {
          en: 'Diagram and table-based MCQs in Master Cadre SST always include two output levels where MR = MC (one with falling MC, one with rising MC) to test this exact rule.',
          pa: 'ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ ਸਾਰਣੀ-ਅਧਾਰਤ ਪ੍ਰਸ਼ਨਾਂ ਵਿੱਚ ਦੋ ਅਜਿਹੇ ਪੱਧਰ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ ਜਿੱਥੇ MR = MC ਹੁੰਦਾ ਹੈ ਤਾਂ ਜੋ ਇਸ ਨਿਯਮ ਦੀ ਪਰਖ ਹੋ ਸਕੇ।',
          hi: 'मास्टर कैडर SST के तालिका-आधारित प्रश्नों में दो ऐसे स्तर दिए जाते हैं जहाँ MR = MC होता है ताकि इस नियम की जाँच हो सके।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'AFC = Rectangular Hyperbola; MC cuts AVC & AC at their minimum points; AC minimum lies to the right of AVC minimum.',
          'Perfect Competition: Firm is Price-Taker, Industry is Price-Maker; P = AR = MR; Short-run Supply Curve = rising MC ≥ min AVC.',
          'Market Thinkers: Monopolistic Competition = Edward Chamberlin (1933); Imperfect Competition = Joan Robinson (1933); Kinked Demand Curve (Oligopoly) = Paul Sweezy (1939).',
          'Price Ceiling < Equilibrium Price (Shortage / Rationing); Price Floor (MSP) > Equilibrium Price (Surplus / Buffer Stock).',
        ],
        pa: [
          'AFC = ਆਇਤਾਕਾਰ ਹਾਈਪਰਬੋਲਾ; MC ਵਕਰ AVC ਤੇ AC ਨੂੰ ਉਨ੍ਹਾਂ ਦੇ ਹੇਠਲੇ ਬਿੰਦੂਆਂ ਤੇ ਕੱਟਦਾ ਹੈ।',
          'ਪੂਰਨ ਮੁਕਾਬਲਾ: ਫ਼ਰਮ = ਕੀਮਤ-ਸਵੀਕਾਰਕ (Price-Taker), ਉਦਯੋਗ = ਕੀਮਤ-ਨਿਰਮਾਤਾ (Price-Maker); P = AR = MR।',
          'ਏਕਾਧਿਕਾਰਵਾਦੀ ਮੁਕਾਬਲਾ = ਐਡਵਰਡ ਚੈਂਬਰਲਿਨ; Kinked Demand Curve (ਅਲਪ-ਅਧਿਕਾਰ) = ਪੌਲ ਸਵੀਜ਼ੀ।',
        ],
        hi: [
          'AFC = आयताकार अतिपरवलय; MC वक्र AVC व AC को उनके न्यूनतम बिंदुओं पर काटता है।',
          'पूर्ण प्रतियोगिता: फर्म = कीमत-स्वीकारक (Price-Taker), उद्योग = कीमत-निर्माता (Price-Maker); P = AR = MR।',
          'एकाधिकारात्मक प्रतियोगिता = एडवर्ड चैंबरलिन; Kinked Demand Curve (अल्पाधिकार) = पॉल स्वीज़ी।',
        ],
      },
      examTraps: {
        en: [
          'Do not confuse Shutdown Point (P = min AVC) with Break-Even Point (P = min AC).',
          'Increase in Fixed Cost (e.g. lump-sum license fee) shifts TFC, TC, AFC, and AC upward, but has ZERO effect on TVC, AVC, and Marginal Cost (MC)!',
        ],
        pa: [
          'Shutdown Point (P = min AVC) ਅਤੇ Break-Even Point (P = min AC) ਵਿੱਚ ਉਲਝਣ ਨਾ ਰੱਖੋ।',
          'ਸਥਿਰ ਲਾਗਤ (TFC) ਵਧਣ ਨਾਲ ਸੀਮਾਂਤ ਲਾਗਤ (MC) ਉੱਤੇ ਕੋਈ ਅਸਰ ਨਹੀਂ ਪੈਂਦਾ!',
        ],
        hi: [
          'Shutdown Point (P = min AVC) और Break-Even Point (P = min AC) में भ्रम न रखें।',
          'स्थिर लागत (TFC) बढ़ने से सीमांत लागत (MC) पर शून्य प्रभाव पड़ता है!',
        ],
      },
    },
    flashcards: [
      {
        id: 'fc-ec2-1',
        q: {
          en: '[Level B] In which stage of the Law of Variable Proportions does a rational producer always choose to operate?',
          pa: '[Level B] ਪਰਿਵਰਤਨਸ਼ੀਲ ਅਨੁਪਾਤਾਂ ਦੇ ਨਿਯਮ ਦੇ ਕਿਸ ਪੜਾਅ ਵਿੱਚ ਇੱਕ ਵਿਵੇਕਸ਼ੀਲ ਉਤਪਾਦਕ ਹਮੇਸ਼ਾ ਉਤਪਾਦਨ ਕਰਦਾ ਹੈ?',
          hi: '[Level B] परिवर्तनशील अनुपातों के नियम की किस अवस्था में एक विवेकशील उत्पादक सदैव उत्पादन करता है?',
        },
        a: {
          en: 'Stage II (Stage of Diminishing Returns, where both AP and MP are declining but positive, ending where MP = 0 and TP is maximum).',
          pa: 'ਦੂਜੇ ਪੜਾਅ (Stage II — ਘਟਦੇ ਪ੍ਰਤੀਫਲਾਂ ਦੀ ਅਵਸਥਾ, ਜਿੱਥੇ MP ਧਨਾਤਮਕ ਪਰ ਘਟਦੀ ਹੁੰਦੀ ਹੈ)।',
          hi: 'द्वितीय अवस्था (Stage II — घटते प्रतिफल की अवस्था, जहाँ MP धनात्मक किंतु घटती हुई होती है)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ec2-2',
        q: {
          en: '[Level I] Which short-run cost curve has the shape of a Rectangular Hyperbola?',
          pa: '[Level I] ਕਿਹੜੇ ਅਲਪਕਾਲੀ ਲਾਗਤ ਵਕਰ ਦਾ ਆਕਾਰ ਆਇਤਾਕਾਰ ਹਾਈਪਰਬੋਲਾ (Rectangular Hyperbola) ਹੁੰਦਾ ਹੈ?',
          hi: '[Level I] किस अल्पकालीन लागत वक्र का आकार आयताकार अतिपरवलय (Rectangular Hyperbola) होता है?',
        },
        a: {
          en: 'Average Fixed Cost (AFC) curve, because AFC × Q = TFC (constant).',
          pa: 'ਔਸਤ ਸਥਿਰ ਲਾਗਤ (AFC) ਵਕਰ, ਕਿਉਂਕਿ AFC × Q = TFC (ਸਥਿਰ)।',
          hi: 'औसत स्थिर लागत (AFC) वक्र, क्योंकि AFC × Q = TFC (स्थिर)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ec2-3',
        q: {
          en: '[Level A] What are the two conditions required for Producer Equilibrium under the MR–MC approach?',
          pa: '[Level A] MR–MC ਵਿਧੀ ਅਨੁਸਾਰ ਉਤਪਾਦਕ ਸੰਤੁਲਨ ਦੀਆਂ ਦੋ ਲਾਜ਼ਮੀ ਸ਼ਰਤਾਂ ਕੀ ਹਨ?',
          hi: '[Level A] MR–MC विधि के अनुसार उत्पादक संतुलन की दो अनिवार्य शर्तें क्या हैं?',
        },
        a: {
          en: '(1) MR = MC, and (2) MC must be rising (MC curve cuts MR curve from below).',
          pa: '(1) MR = MC ਅਤੇ (2) ਸੰਤੁਲਨ ਬਿੰਦੂ ਤੇ MC ਵਧਦੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ (MC ਵਕਰ MR ਨੂੰ ਹੇਠੋਂ ਕੱਟੇ)।',
          hi: '(1) MR = MC तथा (2) संतुलन बिंदु पर MC बढ़ता हुआ होना चाहिए (MC वक्र MR को नीचे से काटे)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-ec2-4',
        q: {
          en: '[Level A] Who propounded the Kinked Demand Curve model to explain price rigidity in Oligopoly?',
          pa: '[Level A] ਅਲਪ-ਅਧਿਕਾਰ (Oligopoly) ਵਿੱਚ ਕੀਮਤ ਕਠੋਰਤਾ ਨੂੰ ਸਮਝਾਉਣ ਲਈ ਵਿਕੁੰਚਿਤ ਮੰਗ ਵਕਰ (Kinked Demand Curve) ਕਿਸ ਨੇ ਦਿੱਤਾ?',
          hi: '[Level A] अल्पाधिकार (Oligopoly) में कीमत कठोरता को समझाने हेतु विकुंचित माँग वक्र (Kinked Demand Curve) किसने दिया?',
        },
        a: {
          en: 'Paul M. Sweezy (1939).',
          pa: 'ਪੌਲ ਐਮ. ਸਵੀਜ਼ੀ (Paul M. Sweezy, 1939)।',
          hi: 'पॉल एम. स्वीज़ी (Paul M. Sweezy, 1939)।',
        },
        difficulty: 'hard',
      },
      {
        id: 'fc-ec2-5',
        q: {
          en: '[Level A] How does the Government fix Minimum Support Price (MSP / Price Floor) relative to the market equilibrium price, and what is its immediate market effect?',
          pa: '[Level A] ਸਰਕਾਰ ਘੱਟੋ-ਘੱਟ ਸਮਰਥਨ ਕੀਮਤ (MSP / Price Floor) ਨੂੰ ਸੰਤੁਲਨ ਕੀਮਤ ਦੇ ਮੁਕਾਬਲੇ ਕਿੱਥੇ ਤੈਅ ਕਰਦੀ ਹੈ ਅਤੇ ਇਸ ਦਾ ਕੀ ਪ੍ਰਭਾਵ ਪੈਂਦਾ ਹੈ?',
          hi: '[Level A] सरकार न्यूनतम समर्थन मूल्य (MSP / Price Floor) को संतुलन कीमत की तुलना में कहाँ निर्धारित करती है और इसका क्या प्रभाव पड़ता है?',
        },
        a: {
          en: 'Set ABOVE the equilibrium price, creating Excess Supply (surplus) in the market.',
          pa: 'ਸੰਤੁਲਨ ਕੀਮਤ ਤੋਂ ਉੱਪਰ ਤੈਅ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਜਿਸ ਨਾਲ ਬਾਜ਼ਾਰ ਵਿੱਚ ਵਾਧੂ ਪੂਰਤੀ (Excess Supply) ਪੈਦਾ ਹੁੰਦੀ ਹੈ।',
          hi: 'संतुलन कीमत से ऊपर निर्धारित की जाती है, जिससे बाजार में अतिपूर्ति (Excess Supply) उत्पन्न होती है।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [],
    bookRefs: [
      {
        title: 'NCERT Class 12 Introductory Microeconomics (Ch 3: Production and Costs, Ch 4: Perfect Competition, Ch 5: Market Equilibrium, Ch 6: Non-Competitive Markets)',
        author: 'NCERT',
        chapters: 'Chapters 3, 4, 5 & 6',
        type: 'ncert',
      },
    ],
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      reviewerRecord: 'Verified against NCERT Class 12 Introductory Microeconomics (Ch 3–6) & ERB Master Cadre SST Syllabus',
      verifiedSyllabusDenominator: 'ERB Punjab Master Cadre SST — Economics: Producer behaviour; Forms of market; Price determination under perfect competition',
    },
  },

  // ==========================================================================
  // 3. NATIONAL INCOME AGGREGATES, KEYNESIAN INCOME-EMPLOYMENT & MULTIPLIER
  // ==========================================================================
  'sst-econ-keynesian-multiplier': {
    id: 'sst-econ-keynesian-multiplier',
    topicId: 'sst-econ-keynesian-multiplier',
    subjectId: 'social-science',
    category: 'economy',
    practiceSource: 'authored-only',
    coverageStatus: 'complete',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    title: {
      en: 'National Income (GDP, GNP, NDP, NNP), Determination of Income & Employment (AD, AS, MPC, MPS) & Multiplier (B → I → A)',
      pa: 'ਰਾਸ਼ਟਰੀ ਆਮਦਨ (GDP, GNP, NDP, NNP), ਆਮਦਨ ਤੇ ਰੁਜ਼ਗਾਰ ਦਾ ਨਿਰਧਾਰਨ (AD, AS, MPC, MPS) ਅਤੇ ਗੁਣਕ (B → I → A)',
      hi: 'राष्ट्रीय आय (GDP, GNP, NDP, NNP), आय व रोजगार का निर्धारण (AD, AS, MPC, MPS) एवं गुणक (B → I → A)',
    },
    examRelevance: 'Punjab Master Cadre SST (10–12 Qs — Official ERB Headings: National income & aggregates, GDP/GNP/NDP/NNP, Determination of income & employment, Investment & multiplier)',
    estimatedTime: '55 min',
    prerequisites: {
      en: ['Basic percentages, algebra, and elementary national income awareness (Class 9–10 Economics)'],
      pa: ['ਮੁੱਢਲਾ ਬੀਜਗਣਿਤ ਅਤੇ ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਦੀ ਮੁੱਢਲੀ ਜਾਣਕਾਰੀ (ਜਮਾਤ 9–10 ਅਰਥਸ਼ਾਸਤਰ)'],
      hi: ['बुनियादी बीजगणित और राष्ट्रीय आय की प्रारंभिक समझ (कक्षा 9–10 अर्थशास्त्र)'],
    },
    learningObjectives: {
      en: [
        '[B] Understand Circular Flow of Income (Real vs Money Flow), Leakages vs Injections, Stock vs Flow, and Final vs Intermediate Goods.',
        '[I] Convert seamlessly among all 8 National Income Aggregates (GDP, GNP, NDP, NNP at MP and FC) using Depreciation, NFIA, and Net Indirect Taxes (NIT), plus Value Added, Income, and Expenditure Methods.',
        '[A] Master Keynesian AD, AS, Consumption & Saving Functions (APC, APS, MPC, MPS), Autonomous vs Induced Investment, Investment Multiplier (k = 1/(1-MPC) = 1/MPS), and Inflationary/Deflationary Gaps.',
      ],
      pa: [
        '[B] ਆਮਦਨ ਦਾ ਚੱਕਰੀ ਪ੍ਰਵਾਹ (ਅਸਲ ਬਨਾਮ ਮੁਦਰਾ ਪ੍ਰਵਾਹ), ਲੀਕੇਜ ਬਨਾਮ ਇੰਜੈਕਸ਼ਨ, ਸਟਾਕ ਬਨਾਮ ਪ੍ਰਵਾਹ ਅਤੇ ਅੰਤਿਮ ਬਨਾਮ ਮੱਧਵਰਤੀ ਵਸਤੂਆਂ।',
        '[I] ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਦੇ ਸਾਰੇ 8 ਸਮੂਹਾਂ (GDP, GNP, NDP, NNP at MP & FC) ਵਿਚਕਾਰ ਪਰਿਵਰਤਨ (ਘਿਸਾਵਟ, NFIA, NIT) ਅਤੇ ਮਾਪਣ ਦੀਆਂ 3 ਵਿਧੀਆਂ।',
        '[A] ਕੇਨਜ਼ ਦਾ ਆਮਦਨ ਤੇ ਰੁਜ਼ਗਾਰ ਸਿਧਾਂਤ (AD, AS, APC, APS, MPC, MPS), ਨਿਵੇਸ਼ ਗੁਣਕ (k = 1/(1-MPC) = 1/MPS) ਅਤੇ ਸਫੀਤੀਕਾਰੀ/ਅਵਸਫੀਤੀਕਾਰੀ ਅੰਤਰਾਲ।',
      ],
      hi: [
        '[B] आय का चक्रीय प्रवाह (वास्तविक बनाम मौद्रिक प्रवाह), रिसाव बनाम भरण, स्टॉक बनाम प्रवाह और अंतिम बनाम मध्यवर्ती वस्तुएँ।',
        '[I] राष्ट्रीय आय के सभी 8 समग्रों (GDP, GNP, NDP, NNP at MP & FC) के बीच रूपांतरण (मूल्यह्रास, NFIA, NIT) तथा मापन की 3 विधियाँ।',
        '[A] कीन्स का आय व रोजगार सिद्धांत (AD, AS, APC, APS, MPC, MPS), निवेश गुणक (k = 1/(1-MPC) = 1/MPS) तथा स्फीतिकारी/अवस्फीतिकारी अंतराल।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 Official ERB Syllabus Mapping & Progression</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers 4 high-weightage official Punjab Master Cadre SST Economics headings: <strong>(1) National income and aggregates</strong>, <strong>(2) GDP, GNP, NDP, NNP</strong>, <strong>(3) Determination of income and employment (AD, AS, MPS, APS, MPC, APC)</strong>, and <strong>(4) Investment and multiplier</strong> in <strong>B → I → A</strong> order.
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · Basic (Class 6–8 / 9–10 Foundation)</span>
              <span class="text-xs text-slate-400">Circular Flow, Stock vs Flow & Final Goods</span>
            </div>
            <h3 class="text-xl font-bold text-white">1. Circular Flow of Income, Stock vs Flow & Final Goods</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Circular Flow of Income (2-Sector Model: Households & Firms):</strong>
                <br/>• <strong>Real Flow (Physical Flow):</strong> Households supply factor services (Land, Labour, Capital, Enterprise) to Firms, and Firms supply final goods and services to Households.
                <br/>• <strong>Money Flow (Nominal Flow):</strong> Firms pay factor incomes (Rent, Wages, Interest, Profit) to Households, and Households spend that income as consumption expenditure on Firms’ goods.
                <br/>• <strong>Leakages (Withdrawals) vs Injections:</strong> <strong>Leakages</strong> reduce the circular flow: <strong>Savings ($S$), Taxes ($T$), and Imports ($M$)</strong>. <strong>Injections</strong> expand the circular flow: <strong>Investment ($I$), Government Expenditure ($G$), and Exports ($X$)</strong>. Macroeconomic equilibrium requires $\mathbf{S + T + M = I + G + X}$.</li>
              <li><strong>Stock vs Flow Variables:</strong> A <strong>Stock</strong> is measured at a <em>particular point of time</em> (Wealth, Capital, Money Supply, Foreign Debt, Population on 1 March). A <strong>Flow</strong> is measured <em>over a period of time</em> (Income, GDP, Investment/Capital Formation, Depreciation, Savings, Fiscal Deficit).</li>
              <li><strong>Final vs Intermediate Goods:</strong> Only <strong>Final Goods</strong> (which have crossed the production boundary) are included in National Income; including <em>Intermediate Goods</em> causes the error of <strong>Double Counting</strong>.</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · Intermediate (Class 11–12 Core)</span>
              <span class="text-xs text-slate-400">GDP, GNP, NDP, NNP Conversions & 3 Measurement Methods</span>
            </div>
            <h3 class="text-xl font-bold text-white">2. The Three Golden Bridges of GDP, GNP, NDP & NNP</h3>
            <ul class="text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>The Three Conversion Bridges:</strong>
                <br/>1. <strong>Gross $\leftrightarrow$ Net:</strong> $\mathbf{\text{Net} = \text{Gross} - \text{Depreciation}}$ (Consumption of Fixed Capital).
                <br/>2. <strong>Domestic $\leftrightarrow$ National:</strong> $\mathbf{\text{National} = \text{Domestic} + \text{NFIA}}$ (where $\text{NFIA} = \text{Factor income earned by residents from abroad} - \text{Factor income paid to non-residents within domestic territory}$). If $\text{NFIA} < 0$ (as in India), $\text{GDP} > \text{GNP}$.
                <br/>3. <strong>Market Price (MP) $\leftrightarrow$ Factor Cost (FC):</strong> $\mathbf{\text{Factor Cost (FC)} = \text{Market Price (MP)} - \text{Net Indirect Taxes (NIT)}}$, where $\mathbf{\text{NIT} = \text{Indirect Taxes (GST)} - \text{Subsidies}}$.</li>
              <li><strong>Official Definitions of Domestic & National Income:</strong>
                <br/>• <strong>Domestic Income $= \text{NDP}_{\text{FC}}$</strong> (Net Domestic Product at Factor Cost).
                <br/>• <strong>National Income $= \text{NNP}_{\text{FC}}$</strong> (Net National Product at Factor Cost):
                $$\text{NNP}_{\text{FC}} = \text{GDP}_{\text{MP}} - \text{Depreciation} + \text{NFIA} - \text{NIT}$$</li>
              <li><strong>Three Methods of Measuring National Income:</strong>
                <br/>1. <strong>Value Added / Product Method:</strong> $\sum \text{GVA}_{\text{MP}} = \text{Value of Output (Sales} + \Delta\text{Stock)} - \text{Intermediate Consumption} = \text{GDP}_{\text{MP}}$.
                <br/>2. <strong>Income Method ($\text{NDP}_{\text{FC}}$):</strong> $\text{Compensation of Employees (COE)} + \text{Operating Surplus (Rent} + \text{Royalty} + \text{Interest} + \text{Profit)} + \text{Mixed Income of Self-Employed}$. (Note: <strong>Transfer payments</strong> like old-age pensions, scholarships, unemployment allowances, and windfall lottery gains/second-hand sales are <strong>NEVER included</strong> in National Income, though broker’s commission on second-hand goods IS included!).
                <br/>3. <strong>Expenditure Method ($\text{GDP}_{\text{MP}}$):</strong> $C + I + G + (X - M) = \text{PFCE} + \text{GFCE} + \text{GDCF (Gross Fixed Capital Formation} + \text{Inventory Investment)} + \text{Net Exports}$.</li>
              <li><strong>Nominal vs Real GDP & GDP Deflator:</strong> $\text{GDP Deflator} = \frac{\text{Nominal GDP (at current prices)}}{\text{Real GDP (at constant base-year 2011–12 prices)}} \times 100$.</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · Advanced (Class 12 & Graduation)</span>
              <span class="text-xs text-slate-400">Keynesian AD, AS, APC, APS, MPC, MPS & Investment Multiplier</span>
            </div>
            <h3 class="text-xl font-bold text-white">3. Keynesian Income Determination (AD, AS, MPC, MPS) & Multiplier ($k$)</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-700 text-rose-300">
                    <th class="p-2">Keynesian Concept</th>
                    <th class="p-2">Algebraic Formula</th>
                    <th class="p-2">Boundary Values & Exam Identities</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300 divide-y divide-slate-800">
                  <tr>
                    <td class="p-2 font-semibold text-white">Aggregate Demand (AD) & Aggregate Supply (AS)</td>
                    <td class="p-2">2-Sector: $\text{AD} = C + I$<br/>$\text{AS} = Y = C + S$</td>
                    <td class="p-2">AS curve is a <strong>$45^\circ$ line from the origin</strong>. Short-run equilibrium occurs where <strong>$\text{AD} = \text{AS}$</strong> (or equivalently <strong>Planned Saving $S = \text{Planned Investment } I$</strong>).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Consumption ($C$) & Saving ($S$) Functions</td>
                    <td class="p-2">$C = \bar{C} + bY$<br/>$S = -\bar{C} + (1 - b)Y$</td>
                    <td class="p-2">$\bar{C}$ is <strong>Autonomous Consumption</strong> (consumption at $Y = 0$, financed by dissaving $-\bar{C}$); $b = \text{MPC}$ is the slope of the $C$ curve; $(1-b) = \text{MPS}$ is the slope of the $S$ curve.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Average Propensities (APC & APS)</td>
                    <td class="p-2">$\text{APC} = \frac{C}{Y}$, $\text{APS} = \frac{S}{Y}$<br/>$\mathbf{\text{APC} + \text{APS} = 1}$</td>
                    <td class="p-2"><strong>At Break-Even Point ($C = Y$):</strong> $\mathbf{\text{APC} = 1}$ and $\mathbf{\text{APS} = 0}$ ($S = 0$).<br/>Before Break-Even ($C > Y$): $\mathbf{\text{APC} > 1}$ and $\mathbf{\text{APS} < 0}$ ( APS can be negative, but APC can never be zero or negative because $\bar{C} > 0$!).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Marginal Propensities (MPC & MPS)</td>
                    <td class="p-2">$\text{MPC} = \frac{\Delta C}{\Delta Y}$, $\text{MPS} = \frac{\Delta S}{\Delta Y}$<br/>$\mathbf{\text{MPC} + \text{MPS} = 1}$</td>
                    <td class="p-2">Keynes’ Psychological Law of Consumption: $\mathbf{0 \le \text{MPC} \le 1}$ and $\mathbf{0 \le \text{MPS} \le 1}$. Neither MPC nor MPS can ever be negative or greater than 1 in standard Keynesian theory.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Investment Multiplier ($k$) (R.F. Kahn Employment Multiplier $\rightarrow$ Keynes Investment Multiplier)</td>
                    <td class="p-2">$$k = \frac{\Delta Y}{\Delta I} = \frac{1}{1 - \text{MPC}} = \frac{1}{\text{MPS}}$$</td>
                    <td class="p-2">• <strong>Direct relation with MPC</strong> and <strong>Inverse relation with MPS</strong>.<br/>• <strong>Minimum value of $k = 1$</strong> (when $\text{MPC} = 0, \text{MPS} = 1$).<br/>• <strong>Maximum value of $k = \infty$</strong> (when $\text{MPC} = 1, \text{MPS} = 0$).<br/>• Example: If $\text{MPC} = 0.8$, then $\text{MPS} = 0.2$ and $k = 1 / 0.2 = 5$.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5 pt-2">
              <li><strong>Autonomous vs Induced Investment:</strong> <strong>Autonomous Investment</strong> is independent of the level of income (horizontal line parallel to X-axis, typically public welfare investment). <strong>Induced Investment</strong> is profit-driven and increases as national income rises (upward sloping).</li>
              <li><strong>Inflationary Gap (Excess Demand) vs Deflationary Gap (Deficient Demand):</strong>
                <br/>• <strong>Inflationary Gap:</strong> Actual $\text{AD} > \text{AD}$ required for Full Employment (causes demand-pull inflation without increasing real output). <strong>Remedies:</strong> Increase taxes, cut Govt spending (Fiscal), or raise Repo Rate/CRR/SLR & sell securities in OMO (Monetary).
                <br/>• <strong>Deflationary Gap:</strong> Actual $\text{AD} < \text{AD}$ required for Full Employment (causes involuntary unemployment and underemployment equilibrium). <strong>Remedies:</strong> Deficit financing/public works (Fiscal) and lowering Repo/CRR/SLR (Monetary).</li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 ਸਰਕਾਰੀ ERB ਸਿਲੇਬਸ ਮੈਪਿੰਗ (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ 4 ਅਧਿਕਾਰਤ ਸਿਰਲੇਖਾਂ—<strong>National income & aggregates</strong>, <strong>GDP, GNP, NDP, NNP</strong>, <strong>Determination of income and employment (AD, AS, MPS, APS, MPC, APC)</strong> ਅਤੇ <strong>Investment and multiplier</strong>—ਨੂੰ <strong>B → I → A</strong> ਕ੍ਰਮ ਵਿੱਚ ਸਮਝਾਇਆ ਗਿਆ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · ਮੁੱਢਲਾ ਪੱਧਰ (ਜਮਾਤ 6–10)</span>
            <h3 class="text-xl font-bold text-white">1. ਆਮਦਨ ਦਾ ਚੱਕਰੀ ਪ੍ਰਵਾਹ, ਲੀਕੇਜ ਬਨਾਮ ਇੰਜੈਕਸ਼ਨ ਅਤੇ ਸਟਾਕ ਬਨਾਮ ਪ੍ਰਵਾਹ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਚੱਕਰੀ ਪ੍ਰਵਾਹ ਵਿੱਚ ਲੀਕੇਜ (Leakages) ਬਨਾਮ ਇੰਜੈਕਸ਼ਨ (Injections):</strong> ਲੀਕੇਜ = ਬੱਚਤ ($S$), ਟੈਕਸ ($T$) ਅਤੇ ਦਰਾਮਦ ($M$); ਇੰਜੈਕਸ਼ਨ = ਨਿਵੇਸ਼ ($I$), ਸਰਕਾਰੀ ਖਰਚ ($G$) ਅਤੇ ਬਰਾਮਦ ($X$)।</li>
              <li><strong>ਸਟਾਕ (Stock) ਬਨਾਮ ਪ੍ਰਵਾਹ (Flow):</strong> ਸਟਾਕ ਇੱਕ ਨਿਸ਼ਚਿਤ ਸਮਾਂ-ਬਿੰਦੂ ਉੱਤੇ ਮਾਪਿਆ ਜਾਂਦਾ ਹੈ (ਦੌਲਤ, ਪੂੰਜੀ, ਮੁਦਰਾ ਪੂਰਤੀ); ਪ੍ਰਵਾਹ ਇੱਕ ਸਮਾਂ-ਅਵਧੀ ਦੌਰਾਨ ਮਾਪਿਆ ਜਾਂਦਾ ਹੈ (ਆਮਦਨ, GDP, ਨਿਵੇਸ਼, ਘਿਸਾਵਟ)।</li>
              <li><strong>ਅੰਤਿਮ ਵਸਤੂਆਂ ਬਨਾਮ ਮੱਧਵਰਤੀ ਵਸਤੂਆਂ:</strong> ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਵਿੱਚ ਸਿਰਫ਼ ਅੰਤਿਮ ਵਸਤੂਆਂ ਸ਼ਾਮਲ ਹੁੰਦੀਆਂ ਹਨ ਤਾਂ ਜੋ <strong>ਦੋਹਰੀ ਗਣਨਾ (Double Counting)</strong> ਤੋਂ ਬਚਿਆ ਜਾ ਸਕੇ।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · ਮੱਧਮ ਪੱਧਰ (ਜਮਾਤ 11–12)</span>
            <h3 class="text-xl font-bold text-white">2. GDP, GNP, NDP ਅਤੇ NNP ਦੇ 3 ਸੁਨਹਿਰੀ ਸੂਤਰ ਅਤੇ ਮਾਪਣ ਦੀਆਂ ਵਿਧੀਆਂ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>3 ਪਰਿਵਰਤਨ ਪੁਲ:</strong> (1) $\text{Net} = \text{Gross} - \text{Depreciation (ਘਿਸਾਵਟ)}$; (2) $\text{National} = \text{Domestic} + \text{NFIA (ਵਿਦੇਸ਼ਾਂ ਤੋਂ ਸ਼ੁੱਧ ਸਾਧਨ ਆਮਦਨ)}$; (3) $\text{Factor Cost (FC)} = \text{Market Price (MP)} - \text{NIT (ਅਪ੍ਰਤੱਖ ਟੈਕਸ} - \text{ਸਬਸਿਡੀ)}$।</li>
              <li><strong>ਘਰੇਲੂ ਆਮਦਨ $= \text{NDP}_{\text{FC}}$</strong> ਅਤੇ <strong>ਰਾਸ਼ਟਰੀ ਆਮਦਨ $= \text{NNP}_{\text{FC}} = \text{GDP}_{\text{MP}} - \text{ਘਿਸਾਵਟ} + \text{NFIA} - \text{NIT}$</strong>।</li>
              <li><strong>ਮਾਪਣ ਦੀਆਂ 3 ਵਿਧੀਆਂ:</strong> (1) ਮੁੱਲ ਵਾਧਾ ਵਿਧੀ ($\sum \text{GVA}_{\text{MP}} = \text{GDP}_{\text{MP}}$), (2) ਆਮਦਨ ਵਿਧੀ ($\text{COE} + \text{Operating Surplus} + \text{Mixed Income} = \text{NDP}_{\text{FC}}$ — <em>ਹਸਤਾਂਤਰਣ ਭੁਗਤਾਨ/Transfer Payments ਜਿਵੇਂ ਪੈਨਸ਼ਨ ਤੇ ਵਜ਼ੀਫ਼ੇ ਸ਼ਾਮਲ ਨਹੀਂ ਹੁੰਦੇ!</em>), (3) ਖਰਚ ਵਿਧੀ ($C + I + G + (X - M) = \text{GDP}_{\text{MP}}$)।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · ਉੱਚ ਪੱਧਰ (ਜਮਾਤ 12 / ਗ੍ਰੈਜੂਏਸ਼ਨ)</span>
            <h3 class="text-xl font-bold text-white">3. ਕੇਨਜ਼ ਦਾ ਆਮਦਨ-ਰੁਜ਼ਗਾਰ ਸਿਧਾਂਤ (AD, AS, APC, APS, MPC, MPS) ਅਤੇ ਨਿਵੇਸ਼ ਗੁਣਕ ($k$)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਉਪਭੋਗ ਅਤੇ ਬੱਚਤ ਫਲਨ:</strong> $C = \bar{C} + bY$ ਅਤੇ $S = -\bar{C} + (1-b)Y$। <strong>$\text{APC} + \text{APS} = 1$</strong> ਅਤੇ <strong>$\text{MPC} + \text{MPS} = 1$</strong>। ਸਮ-ਵਿਛੇਦ ਬਿੰਦੂ (Break-Even Point ਜਿੱਥੇ $C = Y, S = 0$) ਉੱਤੇ $\text{APC} = 1$ ਅਤੇ $\text{APS} = 0$ ਹੁੰਦਾ ਹੈ।</li>
              <li><strong>ਨਿਵੇਸ਼ ਗੁਣਕ (Investment Multiplier — $k$):</strong>
                $$k = \frac{\Delta Y}{\Delta I} = \frac{1}{1 - \text{MPC}} = \frac{1}{\text{MPS}}$$
                $k$ ਦਾ ਘੱਟੋ-ਘੱਟ ਮੁੱਲ <strong>1</strong> (ਜਦੋਂ $\text{MPC} = 0$) ਅਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਮੁੱਲ <strong>$\infty$ (ਅਨੰਤ)</strong> (ਜਦੋਂ $\text{MPC} = 1$) ਹੁੰਦਾ ਹੈ।</li>
              <li><strong>ਸਵੈ-ਚਾਲਿਤ (Autonomous) ਬਨਾਮ ਪ੍ਰੇਰਿਤ (Induced) ਨਿਵੇਸ਼:</strong> ਸਵੈ-ਚਾਲਿਤ ਨਿਵੇਸ਼ ਆਮਦਨ ਤੋਂ ਸੁਤੰਤਰ ਹੁੰਦਾ ਹੈ (X-ਧੁਰੇ ਦੇ ਸਮਾਨਾਂਤਰ)। ਪੂਰਨ ਰੁਜ਼ਗਾਰ ਤੋਂ ਵੱਧ AD ਨੂੰ <strong>ਸਫੀਤੀਕਾਰੀ ਅੰਤਰਾਲ (Inflationary Gap)</strong> ਅਤੇ ਘੱਟ AD ਨੂੰ <strong>ਅਵਸਫੀਤੀਕਾਰੀ ਅੰਤਰਾਲ (Deflationary Gap)</strong> ਕਹਿੰਦੇ ਹਨ।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 आधिकारिक ERB पाठ्यक्रम मानचित्रण (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर SST के 4 आधिकारिक शीर्षकों—<strong>National income & aggregates</strong>, <strong>GDP, GNP, NDP, NNP</strong>, <strong>Determination of income and employment (AD, AS, MPS, APS, MPC, APC)</strong> तथा <strong>Investment and multiplier</strong>—को <strong>B → I → A</strong> क्रम में प्रस्तुत किया गया है।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · आधारभूत स्तर (कक्षा 6–10)</span>
            <h3 class="text-xl font-bold text-white">1. आय का चक्रीय प्रवाह, रिसाव बनाम भरण एवं स्टॉक बनाम प्रवाह</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>चक्रीय प्रवाह में रिसाव (Leakages) बनाम भरण (Injections):</strong> रिसाव = बचत ($S$), कर ($T$) और आयात ($M$); भरण = निवेश ($I$), सरकारी व्यय ($G$) और निर्यात ($X$)।</li>
              <li><strong>स्टॉक (Stock) बनाम प्रवाह (Flow):</strong> स्टॉक एक निश्चित समय-बिंदु पर मापा जाता है (संपत्ति, पूँजी, मुद्रा आपूर्ति); प्रवाह एक समयावधि के दौरान मापा जाता है (आय, GDP, निवेश, मूल्यह्रास)।</li>
              <li><strong>अंतिम बनाम मध्यवर्ती वस्तुएँ:</strong> राष्ट्रीय आय में केवल अंतिम वस्तुएँ शामिल होती हैं ताकि <strong>दोहरी गणना (Double Counting)</strong> से बचा जा सके।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · मध्यम स्तर (कक्षा 11–12)</span>
            <h3 class="text-xl font-bold text-white">2. GDP, GNP, NDP एवं NNP के 3 स्वर्णिम सूत्र व मापन की विधियाँ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>3 रूपांतरण सेतु:</strong> (1) $\text{Net} = \text{Gross} - \text{Depreciation (मूल्यह्रास)}$; (2) $\text{National} = \text{Domestic} + \text{NFIA (विदेशों से शुद्ध कारक आय)}$; (3) $\text{Factor Cost (FC)} = \text{Market Price (MP)} - \text{NIT (अप्रत्यक्ष कर} - \text{आर्थिक सहायता)}$।</li>
              <li><strong>घरेलू आय $= \text{NDP}_{\text{FC}}$</strong> तथा <strong>राष्ट्रीय आय $= \text{NNP}_{\text{FC}} = \text{GDP}_{\text{MP}} - \text{मूल्यह्रास} + \text{NFIA} - \text{NIT}$</strong>।</li>
              <li><strong>मापन की 3 विधियाँ:</strong> (1) मूल्य वृद्धि विधि ($\sum \text{GVA}_{\text{MP}} = \text{GDP}_{\text{MP}}$), (2) आय विधि ($\text{COE} + \text{Operating Surplus} + \text{Mixed Income} = \text{NDP}_{\text{FC}}$ — <em>हस्तांतरण भुगतान/Transfer Payments जैसे वृद्धावस्था पेंशन व छात्रवृत्ति शामिल नहीं होते!</em>), (3) व्यय विधि ($C + I + G + (X - M) = \text{GDP}_{\text{MP}}$)।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · उन्नत स्तर (कक्षा 12 / स्नातक)</span>
            <h3 class="text-xl font-bold text-white">3. कीन्स का आय-रोजगार सिद्धांत (AD, AS, APC, APS, MPC, MPS) एवं निवेश गुणक ($k$)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>उपभोग एवं बचत फलन:</strong> $C = \bar{C} + bY$ तथा $S = -\bar{C} + (1-b)Y$। <strong>$\text{APC} + \text{APS} = 1$</strong> और <strong>$\text{MPC} + \text{MPS} = 1$</strong>। सम-विच्छेद बिंदु (Break-Even Point जहाँ $C = Y, S = 0$) पर $\text{APC} = 1$ और $\text{APS} = 0$ होता है।</li>
              <li><strong>निवेश गुणक (Investment Multiplier — $k$):</strong>
                $$k = \frac{\Delta Y}{\Delta I} = \frac{1}{1 - \text{MPC}} = \frac{1}{\text{MPS}}$$
                $k$ का न्यूनतम मान <strong>1</strong> (जब $\text{MPC} = 0$) और अधिकतम मान <strong>$\infty$ (अनंत)</strong> (जब $\text{MPC} = 1$) होता है।</li>
              <li><strong>स्वायत्त (Autonomous) बनाम प्रेरित (Induced) निवेश:</strong> स्वायत्त निवेश आय के स्तर से स्वतंत्र होता है (X-अक्ष के समानांतर)। पूर्ण रोजगार से अधिक AD को <strong>स्फीतिकारी अंतराल (Inflationary Gap)</strong> और कम AD को <strong>अवस्फीतिकारी अंतराल (Deflationary Gap)</strong> कहते हैं।</li>
            </ul>
          </div>
        </div>
      `,
    },
    summary: {
      en: 'Covers National Income & Aggregates (Circular Flow, Leakages S+T+M vs Injections I+G+X, GDP/GNP/NDP/NNP at MP & FC, NNP at FC as National Income, Value Added/Income/Expenditure methods, Nominal vs Real GDP & Deflator) and Keynesian Income Determination (AD=C+I, AS=C+S, APC+APS=1, MPC+MPS=1, Autonomous vs Induced Investment, Investment Multiplier k = 1/(1-MPC) = 1/MPS, and Inflationary/Deflationary Gaps).',
      pa: 'ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਤੇ ਸਮੂਹ (ਚੱਕਰੀ ਪ੍ਰਵਾਹ, ਲੀਕੇਜ S+T+M ਬਨਾਮ ਇੰਜੈਕਸ਼ਨ I+G+X, GDP/GNP/NDP/NNP at MP & FC, NNP at FC ਰਾਸ਼ਟਰੀ ਆਮਦਨ, 3 ਮਾਪ ਵਿਧੀਆਂ, GDP ਡਿਫਲੇਟਰ) ਅਤੇ ਕੇਨਜ਼ ਦਾ ਆਮਦਨ-ਰੁਜ਼ਗਾਰ ਨਿਰਧਾਰਨ (AD=C+I, AS=C+S, APC+APS=1, MPC+MPS=1, ਨਿਵੇਸ਼ ਗੁਣਕ k = 1/(1-MPC) = 1/MPS ਅਤੇ ਸਫੀਤੀਕਾਰੀ/ਅਵਸਫੀਤੀਕਾਰੀ ਅੰਤਰਾਲ) ਦਾ ਸੰਪੂਰਨ ਸਾਰ।',
      hi: 'राष्ट्रीय आय व समग्र (चक्रीय प्रवाह, रिसाव S+T+M बनाम भरण I+G+X, GDP/GNP/NDP/NNP at MP & FC, NNP at FC राष्ट्रीय आय, 3 मापन विधियाँ, GDP अपस्फीतिकारक) और कीन्स का आय-रोजगार निर्धारण (AD=C+I, AS=C+S, APC+APS=1, MPC+MPS=1, निवेश गुणक k = 1/(1-MPC) = 1/MPS तथा स्फीतिकारी/अवस्फीतिकारी अंतराल) का संपूर्ण सार।',
    },
    keyNotes: {
      en: [
        '[B] In the Circular Flow of Income, Savings (S), Taxes (T), and Imports (M) are Leakages; Investment (I), Government Spending (G), and Exports (X) are Injections.',
        '[I] Official National Income is NNP at Factor Cost (NNP_FC = GDP_MP - Depreciation + NFIA - Net Indirect Taxes).',
        '[I] Domestic Income is NDP at Factor Cost (NDP_FC = Compensation of Employees + Operating Surplus + Mixed Income).',
        '[I] Transfer payments (pensions, scholarships, unemployment allowances) and sale of second-hand goods/shares are excluded from National Income.',
        '[I] GDP Deflator = (Nominal GDP / Real GDP) × 100.',
        '[A] For all income levels: APC + APS = 1 and MPC + MPS = 1.',
        '[A] At the Break-Even Point (C = Y, Saving S = 0): APC = 1 and APS = 0. Before break-even (C > Y), APC > 1 and APS is negative.',
        '[A] APC can be greater than 1, equal to 1, or less than 1, but APC can NEVER be zero or negative (because autonomous consumption C̄ > 0).',
        '[A] Investment Multiplier k = ΔY / ΔI = 1 / (1 - MPC) = 1 / MPS; minimum value of k is 1 (when MPC = 0) and maximum is ∞ (when MPC = 1).',
        '[A] Excess Demand at full employment creates an Inflationary Gap; Deficient Demand creates a Deflationary Gap.',
      ],
      pa: [
        '[B] ਚੱਕਰੀ ਪ੍ਰਵਾਹ ਵਿੱਚ ਬੱਚਤ (S), ਟੈਕਸ (T) ਤੇ ਦਰਾਮਦ (M) ਲੀਕੇਜ ਹਨ; ਨਿਵੇਸ਼ (I), ਸਰਕਾਰੀ ਖਰਚ (G) ਤੇ ਬਰਾਮਦ (X) ਇੰਜੈਕਸ਼ਨ ਹਨ।',
        '[I] ਅਧਿਕਾਰਤ ਰਾਸ਼ਟਰੀ ਆਮਦਨ NNP at Factor Cost (NNP_FC = GDP_MP - ਘਿਸਾਵਟ + NFIA - NIT) ਹੁੰਦੀ ਹੈ।',
        '[I] ਘਰੇਲੂ ਆਮਦਨ NDP at Factor Cost (NDP_FC) ਹੁੰਦੀ ਹੈ।',
        '[I] ਹਸਤਾਂਤਰਣ ਭੁਗਤਾਨ (ਪੈਨਸ਼ਨ, ਵਜ਼ੀਫ਼ਾ, ਬੇਰੁਜ਼ਗਾਰੀ ਭੱਤਾ) ਅਤੇ ਪੁਰਾਣੀਆਂ ਵਸਤੂਆਂ ਦੀ ਵਿਕਰੀ ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ ਹੁੰਦੀ।',
        '[I] GDP ਡਿਫਲੇਟਰ = (ਮੌਦ੍ਰਿਕ GDP / ਅਸਲ GDP) × 100।',
        '[A] ਹਮੇਸ਼ਾ APC + APS = 1 ਅਤੇ MPC + MPS = 1 ਹੁੰਦਾ ਹੈ।',
        '[A] ਸਮ-ਵਿਛੇਦ ਬਿੰਦੂ (Break-Even Point ਜਿੱਥੇ C = Y, S = 0) ਉੱਤੇ APC = 1 ਅਤੇ APS = 0 ਹੁੰਦਾ ਹੈ।',
        '[A] ਸਵੈ-ਚਾਲਿਤ ਉਪਭੋਗ (C̄ > 0) ਕਾਰਨ APC ਕਦੇ ਵੀ ਸਿਫ਼ਰ ਜਾਂ ਰਿਣਾਤਮਕ ਨਹੀਂ ਹੋ ਸਕਦਾ, ਪਰ APS ਰਿਣਾਤਮਕ ਹੋ ਸਕਦਾ ਹੈ।',
        '[A] ਨਿਵੇਸ਼ ਗੁਣਕ k = ΔY / ΔI = 1 / (1 - MPC) = 1 / MPS; k ਦਾ ਘੱਟੋ-ਘੱਟ ਮੁੱਲ 1 ਅਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਮੁੱਲ ∞ ਹੁੰਦਾ ਹੈ।',
        '[A] ਪੂਰਨ ਰੁਜ਼ਗਾਰ ਤੇ ਵਾਧੂ ਮੰਗ (Excess Demand) ਸਫੀਤੀਕਾਰੀ ਅੰਤਰਾਲ ਅਤੇ ਘੱਟ ਮੰਗ ਅਵਸਫੀਤੀਕਾਰੀ ਅੰਤਰਾਲ ਪੈਦਾ ਕਰਦੀ ਹੈ।',
      ],
      hi: [
        '[B] चक्रीय प्रवाह में बचत (S), कर (T) व आयात (M) रिसाव हैं; निवेश (I), सरकारी व्यय (G) व निर्यात (X) भरण हैं।',
        '[I] आधिकारिक राष्ट्रीय आय NNP at Factor Cost (NNP_FC = GDP_MP - मूल्यह्रास + NFIA - NIT) होती है।',
        '[I] घरेलू आय NDP at Factor Cost (NDP_FC) होती है।',
        '[I] हस्तांतरण भुगतान (पेंशन, छात्रवृत्ति, बेरोजगारी भत्ता) और पुरानी वस्तुओं की बिक्री राष्ट्रीय आय में शामिल नहीं होती।',
        '[I] GDP अपस्फीतिकारक = (मौद्रिक GDP / वास्तविक GDP) × 100।',
        '[A] सदैव APC + APS = 1 तथा MPC + MPS = 1 होता है।',
        '[A] सम-विच्छेद बिंदु (Break-Even Point जहाँ C = Y, S = 0) पर APC = 1 और APS = 0 होता है।',
        '[A] स्वायत्त उपभोग (C̄ > 0) के कारण APC कभी शून्य या ऋणात्मक नहीं हो सकता, किंतु APS ऋणात्मक हो सकता है।',
        '[A] निवेश गुणक k = ΔY / ΔI = 1 / (1 - MPC) = 1 / MPS; k का न्यूनतम मान 1 और अधिकतम मान ∞ होता है।',
        '[A] पूर्ण रोजगार पर अधिमाँग (Excess Demand) स्फीतिकारी अंतराल और न्यून माँग अवस्फीतिकारी अंतराल उत्पन्न करती है।',
      ],
    },
    workedExamples: [
      {
        title: {
          en: 'Solving a Keynesian Investment Multiplier & Consumption Function Problem',
          pa: 'ਕੇਨਜ਼ ਦੇ ਨਿਵੇਸ਼ ਗੁਣਕ (Multiplier) ਅਤੇ ਆਮਦਨ ਵਿੱਚ ਵਾਧੇ ਦੀ ਗਣਨਾ',
          hi: 'कीन्स के निवेश गुणक (Multiplier) और आय में वृद्धि की गणना',
        },
        problem: {
          en: 'In an economy, the Consumption Function is given by C = 100 + 0.75Y. If autonomous investment increases by ₹200 crore (ΔI = 200), find: (a) MPC and MPS, (b) the Investment Multiplier (k), and (c) the total increase in National Income (ΔY).',
          pa: 'ਇੱਕ ਅਰਥਵਿਵਸਥਾ ਵਿੱਚ ਉਪਭੋਗ ਫਲਨ C = 100 + 0.75Y ਹੈ। ਜੇਕਰ ਨਿਵੇਸ਼ ਵਿੱਚ ₹200 ਕਰੋੜ ਦਾ ਵਾਧਾ (ΔI = 200) ਹੁੰਦਾ ਹੈ, ਤਾਂ ਪਤਾ ਕਰੋ: (a) MPC ਅਤੇ MPS, (b) ਨਿਵੇਸ਼ ਗੁਣਕ (k), ਅਤੇ (c) ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਵਿੱਚ ਕੁੱਲ ਵਾਧਾ (ΔY)।',
          hi: 'एक अर्थव्यवस्था में उपभोग फलन C = 100 + 0.75Y है। यदि निवेश में ₹200 करोड़ की वृद्धि (ΔI = 200) होती है, तो ज्ञात करें: (a) MPC और MPS, (b) निवेश गुणक (k), तथा (c) राष्ट्रीय आय में कुल वृद्धि (ΔY)।',
        },
        steps: {
          en: [
            '(a) Comparing C = 100 + 0.75Y with C = C̄ + bY gives MPC (b) = 0.75. Since MPC + MPS = 1, MPS = 1 - 0.75 = 0.25.',
            '(b) Investment Multiplier k = 1 / (1 - MPC) = 1 / MPS = 1 / 0.25 = 4.',
            '(c) Increase in National Income: ΔY = k × ΔI = 4 × ₹200 crore = ₹800 crore.',
          ],
          pa: [
            '(a) C = 100 + 0.75Y ਤੋਂ MPC = 0.75 ਅਤੇ MPS = 1 - 0.75 = 0.25।',
            '(b) ਨਿਵੇਸ਼ ਗੁਣਕ k = 1 / MPS = 1 / 0.25 = 4।',
            '(c) ਆਮਦਨ ਵਿੱਚ ਕੁੱਲ ਵਾਧਾ ΔY = k × ΔI = 4 × 200 = ₹800 ਕਰੋੜ।',
          ],
          hi: [
            '(a) C = 100 + 0.75Y से MPC = 0.75 तथा MPS = 1 - 0.75 = 0.25।',
            '(b) निवेश गुणक k = 1 / MPS = 1 / 0.25 = 4।',
            '(c) आय में कुल वृद्धि ΔY = k × ΔI = 4 × 200 = ₹800 करोड़।',
          ],
        },
        solution: {
          en: '(a) MPC = 0.75, MPS = 0.25; (b) Multiplier k = 4; (c) Increase in National Income ΔY = ₹800 crore.',
          pa: '(a) MPC = 0.75, MPS = 0.25; (b) ਗੁਣਕ k = 4; (c) ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਵਿੱਚ ਵਾਧਾ ΔY = ₹800 ਕਰੋੜ।',
          hi: '(a) MPC = 0.75, MPS = 0.25; (b) गुणक k = 4; (c) राष्ट्रीय आय में वृद्धि ΔY = ₹800 करोड़।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Neither APC nor APS can be negative or greater than 1.',
          pa: 'ਨਾ ਤਾਂ APC ਅਤੇ ਨਾ ਹੀ APS ਕਦੇ ਰਿਣਾਤਮਕ ਜਾਂ 1 ਤੋਂ ਵੱਧ ਹੋ ਸਕਦੇ ਹਨ।',
          hi: 'न तो APC और न ही APS कभी ऋणात्मक या 1 से अधिक हो सकते हैं।',
        },
        correction: {
          en: 'That rule applies to MPC and MPS (0 ≤ MPC, MPS ≤ 1)! At very low levels of income (before the break-even point where C > Y), Consumption exceeds Income, so APC = C/Y > 1 and Saving is negative (Dissaving), making APS = S/Y < 0 (negative)!',
          pa: '0 ਤੋਂ 1 ਵਾਲਾ ਨਿਯਮ ਸਿਰਫ਼ MPC ਅਤੇ MPS ਉੱਤੇ ਲਾਗੂ ਹੁੰਦਾ ਹੈ! ਸਮ-ਵਿਛੇਦ ਬਿੰਦੂ ਤੋਂ ਪਹਿਲਾਂ ਜਦੋਂ ਉਪਭੋਗ ਆਮਦਨ ਤੋਂ ਵੱਧ ਹੁੰਦਾ ਹੈ (C > Y), ਤਾਂ APC > 1 ਹੁੰਦਾ ਹੈ ਅਤੇ ਬੱਚਤ ਰਿਣਾਤਮਕ ਹੋਣ ਕਾਰਨ APS < 0 (ਰਿਣਾਤਮਕ) ਹੁੰਦਾ ਹੈ!',
          hi: '0 से 1 की सीमा केवल MPC और MPS पर लागू होती है! सम-विच्छेद बिंदु से पहले जब उपभोग आय से अधिक होता है (C > Y), तब APC > 1 होता है और ऋणात्मक बचत के कारण APS < 0 (ऋणात्मक) होता है!',
        },
        whyItMatters: {
          en: 'Questions asking "Which of the following can be greater than 1?" or "Which of the following can be negative?" are classic Master Cadre Economics questions.',
          pa: '"ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ 1 ਤੋਂ ਵੱਧ ਹੋ ਸਕਦਾ ਹੈ?" ਜਾਂ "ਕਿਹੜਾ ਰਿਣਾਤਮਕ ਹੋ ਸਕਦਾ ਹੈ?" ਮਾਸਟਰ ਕੈਡਰ ਦਾ ਬਹੁਤ ਮਹੱਤਵਪੂਰਨ ਪ੍ਰਸ਼ਨ ਹੈ।',
          hi: '"निम्नलिखित में से कौन-सा 1 से अधिक हो सकता है?" या "कौन-सा ऋणात्मक हो सकता है?" मास्टर कैडर का अत्यंत महत्वपूर्ण प्रश्न है।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'NNP_FC (National Income) = GDP_MP - Depreciation + NFIA - (Indirect Taxes - Subsidies).',
          'Propensity Identities: APC + APS = 1; MPC + MPS = 1; Break-Even Point (S = 0) ⇒ C = Y, APC = 1, APS = 0.',
          'Multiplier Formula: k = ΔY / ΔI = 1 / (1 - MPC) = 1 / MPS. Common pairs: (MPC=0.5 ⇒ k=2), (MPC=0.75 ⇒ k=4), (MPC=0.8 ⇒ k=5), (MPC=0.9 ⇒ k=10).',
        ],
        pa: [
          'NNP_FC (ਰਾਸ਼ਟਰੀ ਆਮਦਨ) = GDP_MP - ਘਿਸਾਵਟ + NFIA - (ਅਪ੍ਰਤੱਖ ਟੈਕਸ - ਸਬਸਿਡੀ)।',
          'ਸਬੰਧ: APC + APS = 1; MPC + MPS = 1; ਸਮ-ਵਿਛੇਦ ਬਿੰਦੂ (S = 0) ⇒ C = Y, APC = 1, APS = 0।',
          'ਗੁਣਕ ਸੂਤਰ: k = 1 / (1 - MPC) = 1 / MPS। (MPC=0.5 ⇒ k=2), (MPC=0.75 ⇒ k=4), (MPC=0.8 ⇒ k=5)।',
        ],
        hi: [
          'NNP_FC (राष्ट्रीय आय) = GDP_MP - मूल्यह्रास + NFIA - (अप्रत्यक्ष कर - सब्सिडी)।',
          'संबंध: APC + APS = 1; MPC + MPS = 1; सम-विच्छेद बिंदु (S = 0) ⇒ C = Y, APC = 1, APS = 0।',
          'गुणक सूत्र: k = 1 / (1 - MPC) = 1 / MPS। (MPC=0.5 ⇒ k=2), (MPC=0.75 ⇒ k=4), (MPC=0.8 ⇒ k=5)।',
        ],
      },
      examTraps: {
        en: [
          'Old-age pension is a Transfer Payment (excluded from NI), whereas Retirement Pension is part of Compensation of Employees (deferred wage — INCLUDED in NI)!',
          'When MPC = MPS (both = 0.5), the value of the Investment Multiplier k is 1 / 0.5 = 2.',
        ],
        pa: [
          'ਬੁਢਾਪਾ ਪੈਨਸ਼ਨ ਹਸਤਾਂਤਰਣ ਭੁਗਤਾਨ ਹੈ (ਸ਼ਾਮਲ ਨਹੀਂ ਹੁੰਦੀ), ਪਰ ਸੇਵਾਮੁਕਤੀ ਪੈਨਸ਼ਨ (Retirement Pension) ਕਰਮਚਾਰੀਆਂ ਦੇ ਮਿਹਨਤਾਨੇ ਦਾ ਹਿੱਸਾ ਹੈ (ਰਾਸ਼ਟਰੀ ਆਮਦਨ ਵਿੱਚ ਸ਼ਾਮਲ ਹੁੰਦੀ ਹੈ)!',
          'ਜਦੋਂ MPC = MPS (ਦੋਵੇਂ 0.5) ਹੋਣ, ਤਾਂ ਗੁਣਕ k ਦਾ ਮੁੱਲ 1 / 0.5 = 2 ਹੁੰਦਾ ਹੈ।',
        ],
        hi: [
          'वृद्धावस्था पेंशन हस्तांतरण भुगतान है (शामिल नहीं होती), किंतु सेवानिवृत्ति पेंशन (Retirement Pension) कर्मचारियों के पारिश्रमिक का भाग है (राष्ट्रीय आय में शामिल होती है)!',
          'जब MPC = MPS (दोनों 0.5) हों, तो गुणक k का मान 1 / 0.5 = 2 होता है।',
        ],
      },
    },
    flashcards: [
      {
        id: 'fc-ec3-1',
        q: {
          en: '[Level B] Which aggregate is officially known as the National Income of a country?',
          pa: '[Level B] ਕਿਸ ਸਮੂਹ ਨੂੰ ਅਧਿਕਾਰਤ ਤੌਰ ਉੱਤੇ ਕਿਸੇ ਦੇਸ਼ ਦੀ "ਰਾਸ਼ਟਰੀ ਆਮਦਨ" (National Income) ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
          hi: '[Level B] किस समग्र को आधिकारिक तौर पर किसी देश की "राष्ट्रीय आय" (National Income) कहा जाता है?',
        },
        a: {
          en: 'Net National Product at Factor Cost (NNP at FC).',
          pa: 'ਸਾਧਨ ਲਾਗਤ ਉੱਤੇ ਸ਼ੁੱਧ ਰਾਸ਼ਟਰੀ ਉਤਪਾਦ (NNP at Factor Cost)।',
          hi: 'साधन लागत पर शुद्ध राष्ट्रीय उत्पाद (NNP at Factor Cost)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ec3-2',
        q: {
          en: '[Level I] How do you convert Gross Domestic Product at Market Price (GDP_MP) into Net Domestic Product at Factor Cost (NDP_FC)?',
          pa: '[Level I] ਬਾਜ਼ਾਰ ਕੀਮਤ ਉੱਤੇ ਕੁੱਲ ਘਰੇਲੂ ਉਤਪਾਦ (GDP_MP) ਨੂੰ ਸਾਧਨ ਲਾਗਤ ਉੱਤੇ ਸ਼ੁੱਧ ਘਰੇਲੂ ਉਤਪਾਦ (NDP_FC) ਵਿੱਚ ਕਿਵੇਂ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ?',
          hi: '[Level I] बाजार कीमत पर सकल घरेलू उत्पाद (GDP_MP) को साधन लागत पर शुद्ध घरेलू उत्पाद (NDP_FC) में कैसे बदला जाता है?',
        },
        a: {
          en: 'NDP_FC = GDP_MP - Depreciation - Net Indirect Taxes (where NIT = Indirect Taxes - Subsidies).',
          pa: 'NDP_FC = GDP_MP - ਘਿਸਾਵਟ (Depreciation) - ਸ਼ੁੱਧ ਅਪ੍ਰਤੱਖ ਟੈਕਸ (NIT)।',
          hi: 'NDP_FC = GDP_MP - मूल्यह्रास (Depreciation) - शुद्ध अप्रत्यक्ष कर (NIT)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-ec3-3',
        q: {
          en: '[Level A] If the Marginal Propensity to Consume (MPC) is 0.8, what is the value of the Keynesian Investment Multiplier (k)?',
          pa: '[Level A] ਜੇਕਰ ਸੀਮਾਂਤ ਉਪਭੋਗ ਪ੍ਰਵਿਰਤੀ (MPC) 0.8 ਹੈ, ਤਾਂ ਨਿਵੇਸ਼ ਗੁਣਕ (k) ਦਾ ਮੁੱਲ ਕਿੰਨਾ ਹੋਵੇਗਾ?',
          hi: '[Level A] यदि सीमांत उपभोग प्रवृत्ति (MPC) 0.8 है, तो निवेश गुणक (k) का मान कितना होगा?',
        },
        a: {
          en: 'k = 1 / (1 - 0.8) = 1 / 0.2 = 5.',
          pa: 'k = 1 / (1 - 0.8) = 1 / 0.2 = 5।',
          hi: 'k = 1 / (1 - 0.8) = 1 / 0.2 = 5।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ec3-4',
        q: {
          en: '[Level A] What are the values of APC and APS at the Break-Even Point of the consumption function?',
          pa: '[Level A] ਉਪਭੋਗ ਫਲਨ ਦੇ ਸਮ-ਵਿਛੇਦ ਬਿੰਦੂ (Break-Even Point) ਉੱਤੇ APC ਅਤੇ APS ਦੇ ਮੁੱਲ ਕੀ ਹੁੰਦੇ ਹਨ?',
          hi: '[Level A] उपभोग फलन के सम-विच्छेद बिंदु (Break-Even Point) पर APC और APS के मान क्या होते हैं?',
        },
        a: {
          en: 'At the Break-Even Point (C = Y and S = 0), APC = 1 and APS = 0.',
          pa: 'ਸਮ-ਵਿਛੇਦ ਬਿੰਦੂ (C = Y ਅਤੇ S = 0) ਉੱਤੇ APC = 1 ਅਤੇ APS = 0 ਹੁੰਦੇ ਹਨ।',
          hi: 'सम-विच्छेद बिंदु (C = Y और S = 0) पर APC = 1 और APS = 0 होते हैं।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-ec3-5',
        q: {
          en: '[Level A] What are the minimum and maximum possible values of the Investment Multiplier (k)?',
          pa: '[Level A] ਨਿਵੇਸ਼ ਗੁਣਕ (k) ਦਾ ਘੱਟੋ-ਘੱਟ ਅਤੇ ਵੱਧ ਤੋਂ ਵੱਧ ਸੰਭਾਵੀ ਮੁੱਲ ਕੀ ਹੁੰਦਾ ਹੈ?',
          hi: '[Level A] निवेश गुणक (k) का न्यूनतम और अधिकतम संभावित मान क्या होता है?',
        },
        a: {
          en: 'Minimum value = 1 (when MPC = 0, MPS = 1); Maximum value = Infinity ∞ (when MPC = 1, MPS = 0).',
          pa: 'ਘੱਟੋ-ਘੱਟ ਮੁੱਲ = 1 (ਜਦੋਂ MPC = 0); ਵੱਧ ਤੋਂ ਵੱਧ ਮੁੱਲ = ਅਨੰਤ ∞ (ਜਦੋਂ MPC = 1)।',
          hi: 'न्यूनतम मान = 1 (जब MPC = 0); अधिकतम मान = अनंत ∞ (जब MPC = 1)।',
        },
        difficulty: 'medium',
      },
    ],
    videos: [],
    bookRefs: [
      {
        title: 'NCERT Class 12 Introductory Macroeconomics (Ch 2: National Income Accounting & Ch 4: Determination of Income and Employment)',
        author: 'NCERT',
        chapters: 'Chapters 2 & 4',
        type: 'ncert',
      },
    ],
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      reviewerRecord: 'Verified against NCERT Class 12 Introductory Macroeconomics (Ch 2 & 4) & ERB Master Cadre SST Syllabus',
      verifiedSyllabusDenominator: 'ERB Punjab Master Cadre SST — Economics: National income and aggregates; GDP, GNP, NDP, NNP; Determination of income and employment; Investment and multiplier',
    },
  },

  // ==========================================================================
  // 4. MONEY & BANKING, GOVT BUDGET, BOP, PLANNING & PUNJAB ECONOMY (B -> I -> A)
  // ==========================================================================
  'sst-econ-money-budget-bop-punjab': {
    id: 'sst-econ-money-budget-bop-punjab',
    topicId: 'sst-econ-money-budget-bop-punjab',
    subjectId: 'social-science',
    category: 'economy',
    practiceSource: 'authored-only',
    coverageStatus: 'complete',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    title: {
      en: 'Money & Banking, Govt Budget, BoP, Economic Planning & Economy of Punjab (B → I → A)',
      pa: 'ਮੁਦਰਾ ਤੇ ਬੈਂਕਿੰਗ, ਸਰਕਾਰੀ ਬਜਟ, ਭੁਗਤਾਨ ਸੰਤੁਲਨ (BoP), ਆਰਥਿਕ ਯੋਜਨਾਬੰਦੀ ਅਤੇ ਪੰਜਾਬ ਦੀ ਅਰਥਵਿਵਸਥਾ (B → I → A)',
      hi: 'मुद्रा एवं बैंकिंग, सरकारी बजट, भुगतान संतुलन (BoP), आर्थिक नियोजन एवं पंजाब की अर्थव्यवस्था (B → I → A)',
    },
    examRelevance: 'Punjab Master Cadre SST (10–12 Qs — Official ERB Headings: Money & banking, Govt budget, Balance of trade & BoP, Economic planning, Indian & Punjab economy)',
    estimatedTime: '55 min',
    prerequisites: {
      en: ['Basic awareness of banks, taxes, imports/exports, and Punjab agriculture (Class 8–10 Social Science)'],
      pa: ['ਬੈਂਕਾਂ, ਟੈਕਸਾਂ, ਦਰਾਮਦ-ਬਰਾਮਦ ਅਤੇ ਪੰਜਾਬ ਦੀ ਖੇਤੀਬਾੜੀ ਦੀ ਮੁੱਢਲੀ ਸਮਝ (ਜਮਾਤ 8–10 ਸਮਾਜਿਕ ਸਿੱਖਿਆ)'],
      hi: ['बैंकों, करों, आयात-निर्यात और पंजाब की कृषि की बुनियादी समझ (कक्षा 8–10 सामाजिक विज्ञान)'],
    },
    learningObjectives: {
      en: [
        '[B] Understand Barter vs Money functions, RBI history (1935/1949), Commercial Bank Credit Creation (1/LRR), and Money Supply aggregates (M1, M2, M3, M4).',
        '[I] Master RBI’s Quantitative & Qualitative Monetary Policy Tools, Government Budget (Revenue vs Capital; Revenue, Fiscal & Primary Deficits), and Balance of Trade vs Balance of Payments.',
        '[A] Deep-dive into Economic Planning in India (Five-Year Plans, NITI Aayog, 1991 Reforms) and the Economy of Punjab (Green Revolution, MSP & APMC Mandi network, Crop Diversification, Industrial Clusters, and State Finances).',
      ],
      pa: [
        '[B] ਵਸਤੂ ਵਟਾਂਦਰਾ ਬਨਾਮ ਮੁਦਰਾ ਦੇ ਕੰਮ, RBI (1935/1949), ਵਪਾਰਕ ਬੈਂਕਾਂ ਦੁਆਰਾ ਸਾਖ ਨਿਰਮਾਣ (1/LRR) ਅਤੇ ਮੁਦਰਾ ਪੂਰਤੀ ਦੇ ਮਾਪ (M1, M2, M3, M4)।',
        '[I] RBI ਦੇ ਗੁਣਾਤਮਕ ਤੇ ਮਾਤਰਾਤਮਕ ਸਾਧਨ, ਸਰਕਾਰੀ ਬਜਟ (ਮਾਲੀਆ, ਰਾਜਕੋਸ਼ੀ ਤੇ ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ) ਅਤੇ ਵਪਾਰ ਸੰਤੁਲਨ (BoT) ਬਨਾਮ ਭੁਗਤਾਨ ਸੰਤੁਲਨ (BoP)।',
        '[A] ਭਾਰਤ ਵਿੱਚ ਆਰਥਿਕ ਯੋਜਨਾਬੰਦੀ (ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾਵਾਂ, ਨੀਤੀ ਆਯੋਗ, 1991 ਸੁਧਾਰ) ਅਤੇ ਪੰਜਾਬ ਦੀ ਅਰਥਵਿਵਸਥਾ (ਹਰੀ ਕ੍ਰਾਂਤੀ, MSP ਤੇ ਮੰਡੀ ਪ੍ਰਣਾਲੀ, ਫ਼ਸਲੀ ਵਿਭਿੰਨਤਾ, ਉਦਯੋਗ ਅਤੇ ਰਾਜ ਵਿੱਤ)।',
      ],
      hi: [
        '[B] वस्तु विनिमय बनाम मुद्रा के कार्य, RBI (1935/1949), वाणिज्यिक बैंकों द्वारा साख निर्माण (1/LRR) और मुद्रा आपूर्ति के माप (M1, M2, M3, M4)।',
        '[I] RBI के मात्रात्मक व गुणात्मक उपकरण, सरकारी बजट (राजस्व, राजकोषीय व प्राथमिक घाटा) और व्यापार संतुलन (BoT) बनाम भुगतान संतुलन (BoP)।',
        '[A] भारत में आर्थिक नियोजन (पंचवर्षीय योजनाएँ, नीति आयोग, 1991 सुधार) तथा पंजाब की अर्थव्यवस्था (हरित क्रांति, MSP व मंडी प्रणाली, फसल विविधीकरण, उद्योग एवं राज्य वित्त)।',
      ],
    },
    content: {
      en: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 Official ERB Syllabus Mapping & Progression</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              Covers 5 official Punjab Master Cadre SST Economics headings: <strong>(1) Money and banking</strong>, <strong>(2) Government budget and economy</strong>, <strong>(3) Balance of trade and BoP</strong>, <strong>(4) Economic planning in India</strong>, and <strong>(5) Indian economy and Punjab economy</strong> in <strong>B → I → A</strong> order.
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · Basic (Class 6–10 Foundation)</span>
              <span class="text-xs text-slate-400">Money Supply, Credit Creation & RBI</span>
            </div>
            <h3 class="text-xl font-bold text-white">1. Money Supply ($M_1\text{–}M_4$), Credit Creation & Reserve Bank of India</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>Functions of Money (Overcoming Barter’s Double Coincidence of Wants):</strong> Primary functions (Medium of Exchange, Measure of Value/Unit of Account) & Secondary functions (Standard of Deferred Payments, Store of Value).</li>
              <li><strong>RBI’s Four Measures of Money Supply (introduced 1977):</strong>
                <br/>• $\mathbf{M_1 = \text{CU} + \text{DD} + \text{OD}}$ (Currency with public + Net Demand Deposits with banks + Other Deposits with RBI) — <strong>Narrow Money & Most Liquid</strong>.
                <br/>• $\mathbf{M_2 = M_1 + \text{Post Office Savings Bank Deposits}}$.
                <br/>• $\mathbf{M_3 = M_1 + \text{Net Time Deposits with Commercial Banks}}$ — <strong>Broad Money / Aggregate Monetary Resources</strong> (most commonly used measure by RBI).
                <br/>• $\mathbf{M_4 = M_3 + \text{Total Post Office Deposits (excluding NSC)}}$ — Least Liquid.
                <br/>• <strong>High Powered Money / Monetary Base ($M_0$):</strong> Currency in circulation + Bankers’ deposits with RBI + Other deposits with RBI. (Note: ₹1 note and all coins are issued by the <strong>Ministry of Finance</strong> and signed by the <strong>Finance Secretary</strong>; all currency notes from ₹2 upwards are issued by RBI under the <strong>Minimum Reserve System of ₹200 crore</strong> [₹115 cr gold + ₹85 cr foreign securities] adopted in 1956–57).</li>
              <li><strong>Credit Creation by Commercial Banks:</strong>
                $$\text{Money / Credit Multiplier} = \frac{1}{\text{LRR}}, \quad \text{Total Credit Created} = \text{Initial Deposit} \times \frac{1}{\text{LRR}}$$
                where $\text{LRR (Legal Reserve Ratio)} = \text{CRR} + \text{SLR}$. If $\text{LRR} = 20\%$ ($0.20$), the Credit Multiplier is $1 / 0.20 = 5$.</li>
              <li><strong>Reserve Bank of India (RBI):</strong> Recommended by <strong>Hilton Young Commission (1926)</strong>; established on <strong>1 April 1935</strong> under the RBI Act, 1934 (initial HQ Kolkata, moved to Mumbai in 1937); <strong>nationalised on 1 January 1949</strong>. 1st Governor: <strong>Sir Osborne Smith</strong>; 1st Indian Governor: <strong>Sir C.D. Deshmukh</strong>. Monetary Policy Committee (MPC, Section 45ZB added in 2016): <strong>6 members</strong> (3 from RBI chaired by RBI Governor + 3 nominated by Central Govt) targeting <strong>$4\% \pm 2\%$ CPI inflation</strong>.</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · Intermediate (Class 11–12 Core)</span>
              <span class="text-xs text-slate-400">RBI Policy Tools, Government Budget Deficits & BoP</span>
            </div>
            <h3 class="text-xl font-bold text-white">2. Monetary Policy Tools, Government Budget (Art 112) & Balance of Payments</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="border-b border-slate-700 text-amber-300">
                    <th class="p-2">Domain</th>
                    <th class="p-2">Core Instruments & Formulas</th>
                    <th class="p-2">Exam Distinctions</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300 divide-y divide-slate-800">
                  <tr>
                    <td class="p-2 font-semibold text-white">RBI Monetary Tools</td>
                    <td class="p-2"><strong>Quantitative (General):</strong> Repo Rate, Reverse Repo, SDF, MSF, Bank Rate, CRR, SLR, OMO.<br/><strong>Qualitative (Selective):</strong> Margin Requirements, Moral Suasion, Credit Rationing, Direct Action.</td>
                    <td class="p-2"><strong>To curb Inflation (Dear Money Policy):</strong> RBI <em>raises</em> Repo Rate, Bank Rate, CRR, SLR, Margin Requirements, and <em>sells</em> government securities under Open Market Operations (OMO).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Government Budget Structure (Article 112)</td>
                    <td class="p-2"><strong>Revenue Receipts:</strong> Tax (Direct: Income/Corporate Tax; Indirect: GST, Customs) + Non-Tax (Interest, Dividends, Fees, Fines, Escheat).<br/><strong>Capital Receipts:</strong> Create liability or reduce asset (Borrowings, Disinvestment, Recovery of Loans).</td>
                    <td class="p-2"><strong>Revenue Expenditure:</strong> Neither creates assets nor reduces liabilities (Salaries, Pensions, Subsidies, Interest payments, Defence).<br/><strong>Capital Expenditure:</strong> Creates physical/financial assets or reduces liabilities (Highways, Schools, Repayment of loan principal).</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Three Budget Deficits</td>
                    <td class="p-2">1. $\text{Revenue Deficit} = \text{RE} - \text{RR}$<br/>2. $\text{Fiscal Deficit} = \text{TE} - (\text{RR} + \text{Non-debt CR}) = \mathbf{\text{Total Borrowings}}$<br/>3. $\text{Primary Deficit} = \text{Fiscal Deficit} - \text{Interest Payments}$</td>
                    <td class="p-2"><strong>Fiscal Deficit</strong> measures the total borrowing requirement of the government. <strong>Primary Deficit</strong> shows borrowing required for current expenditure excluding past debt interest (if Primary Deficit $= 0$, Fiscal Deficit $=$ Interest Payments!). FRBM Act was enacted in <strong>2003</strong>.</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-white">Balance of Trade (BoT) vs Balance of Payments (BoP)</td>
                    <td class="p-2">$\text{BoT} = \text{Exports of Visible Goods} - \text{Imports of Visible Goods}$<br/>$\text{BoP} = \text{Current Account} + \text{Capital Account}$</td>
                    <td class="p-2"><strong>Current Account:</strong> (1) Visible Goods (Merchandise), (2) Invisible Services (Software/Shipping/Banking/Investment Income), (3) Unilateral Transfers (Remittances/Gifts).<br/><strong>Capital Account:</strong> FDI, FPI/FII, External Commercial Borrowings, NRI Deposits. <strong>Autonomous items</strong> ("above the line" — profit motive) vs <strong>Accommodating items</strong> ("below the line" — Official Reserve transactions by RBI to balance BoP).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · Advanced (Class 11–12 & Graduation)</span>
              <span class="text-xs text-slate-400">Economic Planning in India & Economy of Punjab</span>
            </div>
            <h3 class="text-xl font-bold text-white">3. Economic Planning in India & Comprehensive Economy of Punjab</h3>
            <ul class="text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li><strong>Economic Planning in India (1950–2017) & NITI Aayog:</strong>
                <br/>• Pioneers: M. Visvesvaraya (<em>Planned Economy for India</em>, 1934), National Planning Committee (1938 — Subhas Chandra Bose & Jawaharlal Nehru), Bombay Plan (1944 — 8 industrialists), Gandhian Plan (S.N. Agarwal), People’s Plan (M.N. Roy, 1945), Sarvodaya Plan (Jayaprakash Narayan, 1950).
                <br/>• <strong>Planning Commission:</strong> Set up on <strong>15 March 1950</strong> (extra-constitutional body chaired by PM); National Development Council (NDC) set up on <strong>6 August 1952</strong>.
                <br/>• <strong>Landmark Five-Year Plans:</strong> <strong>1st Plan (1951–56):</strong> Harrod-Domar Model (Agriculture, Bhakra-Nangal, Hirakud); <strong>2nd Plan (1956–61):</strong> P.C. Mahalanobis Model (Rapid Heavy Industrialisation — Bhilai, Durgapur, Rourkela steel plants, IPR 1956); <strong>3rd Plan (1961–66):</strong> Gadgil Yojna, followed by <strong>Plan Holidays (1966–69)</strong> and Green Revolution; <strong>5th Plan (1974–78):</strong> D.P. Dhar (<em>"Garibi Hatao"</em> & Minimum Needs Programme), terminated in 1978 for <strong>Rolling Plan (1978–80, Gunnar Myrdal / Morarji Desai)</strong>; <strong>8th Plan (1992–97):</strong> Post-1991 LPG Reforms (Rao-Manmohan Model); <strong>12th & Last Plan (2012–17):</strong> <em>"Faster, More Inclusive and Sustainable Growth"</em>.
                <br/>• <strong>NITI Aayog (National Institution for Transforming India):</strong> Established on <strong>1 January 2015</strong> replacing the Planning Commission; works as a bottom-up policy think tank promoting <strong>Cooperative and Competitive Federalism</strong> (Chairperson: PM; Governing Council includes all State CMs and UT Lt. Governors).</li>
              <li><strong>Economy of Punjab (Verified Core Structure & Exam Facts):</strong>
                <br/>• <strong>"Granary / Bread Basket of India":</strong> With only <strong>1.53% of India’s geographical area (50,362 sq km)</strong>, Punjab contributes roughly <strong>35%–45% of Wheat</strong> and <strong>20%–25% of Rice</strong> to India’s Central Pool of foodgrains, with <strong>Cropping Intensity of ~189%–190%</strong> (highest in India) and <strong>>99% irrigated net sown area</strong> (roughly 71% via tube-wells and 29% via canals).
                <br/>• <strong>Green Revolution (1966–67) & Institutional Backbone:</strong> Led globally by <strong>Dr. Norman Borlaug</strong> and in India by <strong>Dr. M.S. Swaminathan</strong>, with <strong>Punjab Agricultural University (PAU), Ludhiana (established 1962)</strong> developing high-yielding Mexican dwarf wheat varieties (<em>Kalyan Sona, Sonalika, PV-18</em>) and rice varieties (<em>IR-8, Jaya</em>).
                <br/>• <strong>MSP & APMC Mandi System in Punjab:</strong> Regulated by the <strong>Punjab Mandi Board</strong> (established 1961 under the Punjab Agricultural Produce Markets Act, 1961); operates one of the densest networks of regulated markets in India (~150+ Principal Market Yards, sub-yards, and purchase centres) ensuring assured procurement of Wheat and Paddy at MSP through commission agents (<em>Arthiyas</em>) and state agencies (<strong>PUNSUP, MARKFED [Asia’s largest marketing cooperative, est. 1954], PUNGRAIN, PSWC, FCI</strong>).
                <br/>• <strong>Agrarian Challenges & Crop Diversification:</strong> The wheat–paddy monoculture has led to severe groundwater depletion (over <strong>75%–80% of assessment blocks in Punjab are categorized as "Over-Exploited / Dark Zones"</strong> by CGWB), declining soil micronutrients, and paddy stubble burning. Diversification pushes focus on <strong>Basmati, Maize, Cotton (Malwa White Gold belt), Pulses, Oilseeds, Sugarcane, and Horticulture (Kinnow mandarin in Fazilka/Abohar, Potato seed belt in Jalandhar/Kapurthala, Pear in Amritsar, Guava in Patiala/Sangrur)</strong>, alongside dairy (<strong>MILKFED / Verka</strong>, est. 1973 — Punjab has the highest per-capita milk availability in India).
                <br/>• <strong>Industrial & Sectoral Profile of Punjab:</strong> Sectoral GSDP share is led by the <strong>Services / Tertiary Sector (~45%–47%)</strong>, followed by <strong>Agriculture & Allied (~25%–28% — much higher than the national average of ~18%)</strong> and <strong>Industry / Secondary (~25%–27%)</strong>. Key industrial clusters: <strong>Ludhiana</strong> ("Manchester of India" — Hosiery, Woollen Knitwear, Bicycles & Sewing Machine parts), <strong>Jalandhar</strong> (Sports Goods, Leather & Hand Tools), <strong>Mandi Gobindgarh</strong> ("Steel Town of Punjab"), <strong>Amritsar</strong> (Textiles, Food Processing & Tourism), <strong>Batala</strong> (Foundry & Machine Tools), <strong>Nangal & Bathinda</strong> (Fertilizers/Refinery), and <strong>SAS Nagar Mohali</strong> (IT, Semiconductor & Biotechnology Hub).
                <br/>• <strong>State Finances of Punjab:</strong> High committed expenditure on salaries, pensions, interest payments, and agricultural/domestic power subsidies has resulted in one of the highest <strong>Debt-to-GSDP ratios (~44%–47%)</strong> among Indian states, making fiscal consolidation and GST/excise revenue mobilisation central policy priorities.</li>
            </ul>
          </div>
        </div>
      `,
      pa: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 ਸਰਕਾਰੀ ERB ਸਿਲੇਬਸ ਮੈਪਿੰਗ (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ SST ਦੇ 5 ਅਧਿਕਾਰਤ ਸਿਰਲੇਖਾਂ—<strong>Money and banking</strong>, <strong>Government budget</strong>, <strong>Balance of trade and BoP</strong>, <strong>Economic planning</strong> ਅਤੇ <strong>Indian & Punjab economy</strong>—ਨੂੰ <strong>B → I → A</strong> ਕ੍ਰਮ ਵਿੱਚ ਸਮਝਾਇਆ ਗਿਆ ਹੈ।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · ਮੁੱਢਲਾ ਪੱਧਰ (ਜਮਾਤ 6–10)</span>
            <h3 class="text-xl font-bold text-white">1. ਮੁਦਰਾ ਪੂਰਤੀ ($M_1\text{–}M_4$), ਸਾਖ ਨਿਰਮਾਣ ਅਤੇ ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ (RBI)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਮੁਦਰਾ ਪੂਰਤੀ ਦੇ 4 ਮਾਪ (1977):</strong> $\mathbf{M_1 = \text{CU} + \text{DD} + \text{OD}}$ (ਸਭ ਤੋਂ ਵੱਧ ਤਰਲ / Narrow Money); $\mathbf{M_3 = M_1 + \text{ਬੈਂਕਾਂ ਦੀਆਂ ਮਿਆਦੀ ਜਮ੍ਹਾਂ ਰਾਸ਼ੀਆਂ}}$ (Broad Money / ਸਮੁੱਚੇ ਮੁਦਰਾ ਸਰੋਤ)। ₹1 ਦਾ ਨੋਟ ਅਤੇ ਸਾਰੇ ਸਿੱਕੇ <strong>ਵਿੱਤ ਮੰਤਰਾਲੇ</strong> ਦੁਆਰਾ ਜਾਰੀ ਕੀਤੇ ਜਾਂਦੇ ਹਨ (ਵਿੱਤ ਸਕੱਤਰ ਦੇ ਦਸਤਖ਼ਤ)।</li>
              <li><strong>ਵਪਾਰਕ ਬੈਂਕਾਂ ਦੁਆਰਾ ਸਾਖ ਨਿਰਮਾਣ (Credit Creation):</strong> $\text{ਸਾਖ ਗੁਣਕ (Money Multiplier)} = \frac{1}{\text{LRR}}$।</li>
              <li><strong>ਭਾਰਤੀ ਰਿਜ਼ਰਵ ਬੈਂਕ (RBI):</strong> ਹਿਲਟਨ ਯੰਗ ਕਮਿਸ਼ਨ (1926) ਦੀ ਸਿਫ਼ਾਰਸ਼ ਤੇ <strong>1 ਅਪ੍ਰੈਲ 1935</strong> ਨੂੰ ਸਥਾਪਿਤ ਅਤੇ <strong>1 ਜਨਵਰੀ 1949</strong> ਨੂੰ ਰਾਸ਼ਟਰੀਕਰਨ ਹੋਇਆ। ਪਹਿਲੇ ਗਵਰਨਰ: <strong>ਸਰ ਓਸਬੋਰਨ ਸਮਿੱਥ</strong>; ਪਹਿਲੇ ਭਾਰਤੀ ਗਵਰਨਰ: <strong>ਸਰ ਸੀ.ਡੀ. ਦੇਸ਼ਮੁਖ</strong>। ਮੌਦ੍ਰਿਕ ਨੀਤੀ ਕਮੇਟੀ (MPC) ਵਿੱਚ <strong>6 ਮੈਂਬਰ</strong> ਹੁੰਦੇ ਹਨ।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · ਮੱਧਮ ਪੱਧਰ (ਜਮਾਤ 11–12)</span>
            <h3 class="text-xl font-bold text-white">2. RBI ਦੇ ਸਾਧਨ, ਸਰਕਾਰੀ ਬਜਟ ਦੇ ਘਾਟੇ ਅਤੇ ਭੁਗਤਾਨ ਸੰਤੁਲਨ (BoP)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>RBI ਦੇ ਮੌਦ੍ਰਿਕ ਸਾਧਨ:</strong> ਮਾਤਰਾਤਮਕ (Repo Rate, Reverse Repo, Bank Rate, CRR, SLR, OMO) ਅਤੇ ਗੁਣਾਤਮਕ (Margin Requirements, Moral Suasion, Credit Rationing)।</li>
              <li><strong>ਸਰਕਾਰੀ ਬਜਟ ਦੇ 3 ਘਾਟੇ (ਅਨੁਛੇਦ 112):</strong> (1) <strong>ਮਾਲੀਆ ਘਾਟਾ (Revenue Deficit)</strong> $= \text{ਮਾਲੀਆ ਖਰਚ} - \text{ਮਾਲੀਆ ਪ੍ਰਾਪਤੀਆਂ}$; (2) <strong>ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ (Fiscal Deficit)</strong> $= \text{ਕੁੱਲ ਖਰਚ} - \text{ਉਧਾਰ ਤੋਂ ਬਿਨਾਂ ਕੁੱਲ ਪ੍ਰਾਪਤੀਆਂ} = \mathbf{\text{ਕੁੱਲ ਉਧਾਰ (Total Borrowings)}}$; (3) <strong>ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ (Primary Deficit)</strong> $= \text{ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ} - \text{ਵਿਆਜ ਭੁਗਤਾਨ}$।</li>
              <li><strong>ਵਪਾਰ ਸੰਤੁਲਨ (BoT) ਬਨਾਮ ਭੁਗਤਾਨ ਸੰਤੁਲਨ (BoP):</strong> BoT ਵਿੱਚ ਸਿਰਫ਼ ਦ੍ਰਿਸ਼ ਵਸਤੂਆਂ (Visible Goods) ਦੀ ਬਰਾਮਦ-ਦਰਾਮਦ ਆਉਂਦੀ ਹੈ, ਜਦੋਂ ਕਿ BoP ਦੇ <strong>ਚਾਲੂ ਖਾਤੇ (Current Account)</strong> ਵਿੱਚ ਦ੍ਰਿਸ਼ ਵਸਤੂਆਂ, ਅਦ੍ਰਿਸ਼ ਸੇਵਾਵਾਂ ਅਤੇ ਇਕਤਰਫ਼ਾ ਭੁਗਤਾਨ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ ਅਤੇ <strong>ਪੂੰਜੀ ਖਾਤੇ (Capital Account)</strong> ਵਿੱਚ FDI, FPI ਅਤੇ ਵਿਦੇਸ਼ੀ ਉਧਾਰ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · ਉੱਚ ਪੱਧਰ (ਜਮਾਤ 12 / ਗ੍ਰੈਜੂਏਸ਼ਨ)</span>
            <h3 class="text-xl font-bold text-white">3. ਭਾਰਤ ਵਿੱਚ ਆਰਥਿਕ ਯੋਜਨਾਬੰਦੀ ਅਤੇ ਪੰਜਾਬ ਦੀ ਅਰਥਵਿਵਸਥਾ</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>ਆਰਥਿਕ ਯੋਜਨਾਬੰਦੀ ਤੇ ਨੀਤੀ ਆਯੋਗ:</strong> ਯੋਜਨਾ ਕਮਿਸ਼ਨ (15 ਮਾਰਚ 1950); ਪਹਿਲੀ ਯੋਜਨਾ (1951–56: ਹੈਰਡ-ਡੋਮਰ ਮਾਡਲ, ਖੇਤੀਬਾੜੀ ਤੇ ਭਾਖੜਾ-ਨੰਗਲ), ਦੂਜੀ ਯੋਜਨਾ (1956–61: ਪੀ.ਸੀ. ਮਹਾਲਨੋਬਿਸ ਮਾਡਲ, ਭਾਰੀ ਉਦਯੋਗ), ਪੰਜਵੀਂ ਯੋਜਨਾ ("ਗਰੀਬੀ ਹਟਾਓ")। <strong>1 ਜਨਵਰੀ 2015</strong> ਨੂੰ <strong>ਨੀਤੀ ਆਯੋਗ (NITI Aayog)</strong> ਬਣਿਆ ਜੋ ਸਹਿਕਾਰੀ ਸੰਘਵਾਦ (Cooperative Federalism) ਉੱਤੇ ਅਧਾਰਤ ਹੈ।</li>
              <li><strong>ਪੰਜਾਬ ਦੀ ਅਰਥਵਿਵਸਥਾ (Punjab Economy):</strong> ਭਾਰਤ ਦੇ ਸਿਰਫ਼ <strong>1.53% ਭੂਗੋਲਿਕ ਖੇਤਰ (50,362 ਵਰਗ ਕਿ.ਮੀ.)</strong> ਨਾਲ ਪੰਜਾਬ ਕੇਂਦਰੀ ਪੂਲ ਵਿੱਚ ਲਗਭਗ <strong>35%–45% ਕਣਕ</strong> ਅਤੇ <strong>20%–25% ਚੌਲਾਂ</strong> ਦਾ ਯੋਗਦਾਨ ਪਾਉਂਦਾ ਹੈ। ਫ਼ਸਲੀ ਘਣਤਾ (Cropping Intensity) <strong>~189%–190%</strong> ਅਤੇ ਸਿੰਜਾਈ ਖੇਤਰ <strong>>99%</strong> ਹੈ।</li>
              <li><strong>ਹਰੀ ਕ੍ਰਾਂਤੀ, MSP ਮੰਡੀ ਪ੍ਰਣਾਲੀ ਅਤੇ ਉਦਯੋਗ:</strong> <strong>PAU ਲੁਧਿਆਣਾ (1962)</strong>, <strong>ਪੰਜਾਬ ਮੰਡੀ ਬੋਰਡ (1961)</strong>, <strong>MARKFED (1954)</strong> ਅਤੇ <strong>MILKFED/Verka (1973)</strong>। ਧਰਤੀ ਹੇਠਲੇ ਪਾਣੀ ਦੇ ਸੰਕਟ ਕਾਰਨ ਫ਼ਸਲੀ ਵਿਭਿੰਨਤਾ (ਬਾਸਮਤੀ, ਮੱਕੀ, ਦਾਲਾਂ, ਕਿੰਨੂ — ਫ਼ਾਜ਼ਿਲਕਾ/ਅਬੋਹਰ) ਉੱਤੇ ਜ਼ੋਰ। ਪ੍ਰਮੁੱਖ ਉਦਯੋਗ: <strong>ਲੁਧਿਆਣਾ</strong> (ਹੌਜ਼ਰੀ ਤੇ ਸਾਈਕਲ — ਭਾਰਤ ਦਾ ਮਾਨਚੈਸਟਰ), <strong>ਜਲੰਧਰ</strong> (ਖੇਡਾਂ ਦਾ ਸਮਾਨ ਤੇ ਚਮੜਾ), <strong>ਮੰਡੀ ਗੋਬਿੰਦਗੜ੍ਹ</strong> (ਸਟੀਲ ਟਾਊਨ), <strong>ਮੋਹਾਲੀ</strong> (IT ਤੇ ਬਾਇਓਟੈਕ ਹੱਬ)।</li>
            </ul>
          </div>
        </div>
      `,
      hi: `
        <div class="space-y-6">
          <div class="bg-indigo-950/60 border border-indigo-500/30 p-4 rounded-xl">
            <h4 class="text-indigo-300 font-bold text-base mb-1">📋 आधिकारिक ERB पाठ्यक्रम मानचित्रण (B → I → A)</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
              पंजाब मास्टर कैडर SST के 5 आधिकारिक शीर्षकों—<strong>Money and banking</strong>, <strong>Government budget</strong>, <strong>Balance of trade and BoP</strong>, <strong>Economic planning</strong> तथा <strong>Indian & Punjab economy</strong>—को <strong>B → I → A</strong> क्रम में प्रस्तुत किया गया है।
            </p>
          </div>

          <div class="bg-slate-900/70 border border-emerald-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">LEVEL B · आधारभूत स्तर (कक्षा 6–10)</span>
            <h3 class="text-xl font-bold text-white">1. मुद्रा आपूर्ति ($M_1\text{–}M_4$), साख निर्माण एवं भारतीय रिज़र्व बैंक (RBI)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>मुद्रा आपूर्ति के 4 माप (1977):</strong> $\mathbf{M_1 = \text{CU} + \text{DD} + \text{OD}}$ (सर्वाधिक तरल / संकीर्ण मुद्रा); $\mathbf{M_3 = M_1 + \text{बैंकों की सावधि जमाएँ}}$ (व्यापक मुद्रा / समग्र मौद्रिक संसाधन)। ₹1 का नोट व सभी सिक्के <strong>वित्त मंत्रालय</strong> द्वारा जारी होते हैं (वित्त सचिव के हस्ताक्षर)।</li>
              <li><strong>वाणिज्यिक बैंकों द्वारा साख निर्माण (Credit Creation):</strong> $\text{साख गुणक (Money Multiplier)} = \frac{1}{\text{LRR}}$।</li>
              <li><strong>भारतीय रिज़र्व बैंक (RBI):</strong> हिल्टन यंग आयोग (1926) की सिफारिश पर <strong>1 अप्रैल 1935</strong> को स्थापित तथा <strong>1 जनवरी 1949</strong> को राष्ट्रीयकृत। प्रथम गवर्नर: <strong>सर ओसबोर्न स्मिथ</strong>; प्रथम भारतीय गवर्नर: <strong>सर सी.डी. देशमुख</strong>। मौद्रिक नीति समिति (MPC) में <strong>6 सदस्य</strong> होते हैं।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-amber-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">LEVEL I · मध्यम स्तर (कक्षा 11–12)</span>
            <h3 class="text-xl font-bold text-white">2. RBI के उपकरण, सरकारी बजट के घाटे एवं भुगतान संतुलन (BoP)</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>RBI के मौद्रिक उपकरण:</strong> मात्रात्मक (Repo Rate, Reverse Repo, Bank Rate, CRR, SLR, OMO) तथा गुणात्मक (Margin Requirements, Moral Suasion, Credit Rationing)।</li>
              <li><strong>सरकारी बजट के 3 घाटे (अनुच्छेद 112):</strong> (1) <strong>राजस्व घाटा (Revenue Deficit)</strong> $= \text{राजस्व व्यय} - \text{राजस्व प्राप्तियाँ}$; (2) <strong>राजकोषीय घाटा (Fiscal Deficit)</strong> $= \text{कुल व्यय} - \text{उधार को छोड़कर कुल प्राप्तियाँ} = \mathbf{\text{कुल उधार (Total Borrowings)}}$; (3) <strong>प्राथमिक घाटा (Primary Deficit)</strong> $= \text{राजकोषीय घाटा} - \text{ब्याज भुगतान}$।</li>
              <li><strong>व्यापार संतुलन (BoT) बनाम भुगतान संतुलन (BoP):</strong> BoT में केवल दृश्य वस्तुओं (Visible Goods) का आयात-निर्यात आता है, जबकि BoP के <strong>चालू खाते (Current Account)</strong> में दृश्य वस्तुएँ, अदृश्य सेवाएँ व एकपक्षीय अंतरण शामिल होते हैं तथा <strong>पूँजी खाते (Capital Account)</strong> में FDI, FPI और विदेशी ऋण शामिल होते हैं।</li>
            </ul>
          </div>

          <div class="bg-slate-900/70 border border-rose-500/30 p-5 rounded-xl space-y-3">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">LEVEL A · उन्नत स्तर (कक्षा 12 / स्नातक)</span>
            <h3 class="text-xl font-bold text-white">3. भारत में आर्थिक नियोजन एवं पंजाब की अर्थव्यवस्था</h3>
            <ul class="text-sm text-slate-300 space-y-1.5 list-disc pl-5">
              <li><strong>आर्थिक नियोजन एवं नीति आयोग:</strong> योजना आयोग (15 मार्च 1950); प्रथम योजना (1951–56: हैरड-डोमर मॉडल, कृषि व भाखड़ा-नांगल), द्वितीय योजना (1956–61: पी.सी. महालनोबिस मॉडल, भारी उद्योग), पांचवीं योजना ("गरीबी हटाओ")। <strong>1 जनवरी 2015</strong> को <strong>नीति आयोग (NITI Aayog)</strong> बना जो सहकारी संघवाद (Cooperative Federalism) पर आधारित है।</li>
              <li><strong>पंजाब की अर्थव्यवस्था (Punjab Economy):</strong> भारत के मात्र <strong>1.53% भौगोलिक क्षेत्र (50,362 वर्ग किमी)</strong> के साथ पंजाब केंद्रीय पूल में लगभग <strong>35%–45% गेहूँ</strong> और <strong>20%–25% चावल</strong> का योगदान देता है। शस्य गहनता (Cropping Intensity) <strong>~189%–190%</strong> तथा सिंचित क्षेत्र <strong>>99%</strong> है।</li>
              <li><strong>हरित क्रांति, MSP मंडी प्रणाली एवं उद्योग:</strong> <strong>PAU लुधियाना (1962)</strong>, <strong>पंजाब मंडी बोर्ड (1961)</strong>, <strong>MARKFED (1954)</strong> और <strong>MILKFED/Verka (1973)</strong>। भूजल संकट के कारण फसल विविधीकरण (बासमती, मक्का, दलहन, किन्नू — फाजिल्का/अबोहर) पर बल। प्रमुख उद्योग: <strong>लुधियाना</strong> (होजरी व साइकिल — भारत का मैनचेस्टर), <strong>जालंधर</strong> (खेल का सामान व चमड़ा), <strong>मंडी गोबिंदगढ़</strong> (स्टील टाउन), <strong>मोहाली</strong> (IT व बायोटेक हब)।</li>
            </ul>
          </div>
        </div>
      `,
    },
    summary: {
      en: 'Covers Money & Banking (M1–M4 money supply, Credit Multiplier 1/LRR, RBI 1935/1949, Quantitative vs Qualitative tools), Government Budget (Revenue vs Capital budget, Revenue/Fiscal/Primary Deficits), Balance of Trade vs Balance of Payments (Current vs Capital Account, Autonomous vs Accommodating items), Economic Planning in India (Five-Year Plans, NITI Aayog 2015, 1991 LPG Reforms), and the Economy of Punjab (Green Revolution, PAU 1962, APMC Mandi system, Crop Diversification, Ludhiana/Jalandhar/Gobindgarh industries, and State Finances).',
      pa: 'ਮੁਦਰਾ ਤੇ ਬੈਂਕਿੰਗ (M1–M4, ਸਾਖ ਗੁਣਕ 1/LRR, RBI 1935/1949, ਮੌਦ੍ਰਿਕ ਸਾਧਨ), ਸਰਕਾਰੀ ਬਜਟ (ਮਾਲੀਆ, ਰਾਜਕੋਸ਼ੀ ਤੇ ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ), ਵਪਾਰ ਸੰਤੁਲਨ ਬਨਾਮ ਭੁਗਤਾਨ ਸੰਤੁਲਨ (ਚਾਲੂ ਤੇ ਪੂੰਜੀ ਖਾਤਾ), ਆਰਥਿਕ ਯੋਜਨਾਬੰਦੀ (ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾਵਾਂ, ਨੀਤੀ ਆਯੋਗ 2015) ਅਤੇ ਪੰਜਾਬ ਦੀ ਅਰਥਵਿਵਸਥਾ (ਹਰੀ ਕ੍ਰਾਂਤੀ, PAU 1962, ਮੰਡੀ ਬੋਰਡ 1961, ਫ਼ਸਲੀ ਵਿਭਿੰਨਤਾ, ਉਦਯੋਗ ਅਤੇ ਰਾਜ ਵਿੱਤ) ਦਾ ਸੰਪੂਰਨ ਸਾਰ।',
      hi: 'मुद्रा एवं बैंकिंग (M1–M4, साख गुणक 1/LRR, RBI 1935/1949, मौद्रिक उपकरण), सरकारी बजट (राजस्व, राजकोषीय व प्राथमिक घाटा), व्यापार संतुलन बनाम भुगतान संतुलन (चालू व पूँजी खाता), आर्थिक नियोजन (पंचवर्षीय योजनाएँ, नीति आयोग 2015) तथा पंजाब की अर्थव्यवस्था (हरित क्रांति, PAU 1962, मंडी बोर्ड 1961, फसल विविधीकरण, उद्योग एवं राज्य वित्त) का संपूर्ण सार।',
    },
    keyNotes: {
      en: [
        '[B] M1 (CU + DD + OD) is the most liquid narrow money measure; M3 (M1 + Net Time Deposits) is Broad Money / Aggregate Monetary Resources.',
        '[B] Commercial Bank Credit Multiplier = 1 / LRR (where LRR = CRR + SLR).',
        '[B] RBI was established on 1 April 1935 (Hilton Young Commission) and nationalised on 1 January 1949.',
        '[I] Quantitative RBI tools control total volume of credit (Repo, Bank Rate, CRR, SLR, OMO); Qualitative tools control direction of credit (Margin requirement, Moral suasion).',
        '[I] Fiscal Deficit equals Total Borrowings of the Government; Primary Deficit = Fiscal Deficit - Interest Payments.',
        '[I] Balance of Trade (BoT) includes ONLY visible merchandise goods; BoP Current Account includes visibles, invisibles (services), and unilateral transfers.',
        '[A] First Five-Year Plan (1951–56) followed the Harrod-Domar Model; Second Five-Year Plan (1956–61) followed the P.C. Mahalanobis Model; NITI Aayog replaced Planning Commission on 1 Jan 2015.',
        '[A] With 1.53% of India’s geographical area, Punjab contributes ~35–45% of Wheat and ~20–25% of Rice to the Central Pool, with ~189–190% cropping intensity.',
        '[A] Key Punjab institutions: MARKFED (1954), Punjab Mandi Board (1961), PAU Ludhiana (1962), and MILKFED / Verka (1973).',
        '[A] Key Punjab Industrial Clusters: Ludhiana (Hosiery & Bicycles), Jalandhar (Sports Goods & Leather), Mandi Gobindgarh (Steel Town), Mohali (IT & Biotech).',
      ],
      pa: [
        '[B] M1 (CU + DD + OD) ਸਭ ਤੋਂ ਵੱਧ ਤਰਲ (Narrow Money) ਹੈ; M3 (M1 + ਮਿਆਦੀ ਜਮ੍ਹਾਂ ਰਾਸ਼ੀਆਂ) ਵਿਆਪਕ ਮੁਦਰਾ (Broad Money) ਹੈ।',
        '[B] ਵਪਾਰਕ ਬੈਂਕਾਂ ਦਾ ਸਾਖ ਗੁਣਕ (Credit Multiplier) = 1 / LRR ਹੁੰਦਾ ਹੈ।',
        '[B] RBI ਦੀ ਸਥਾਪਨਾ 1 ਅਪ੍ਰੈਲ 1935 ਨੂੰ ਹੋਈ ਅਤੇ 1 ਜਨਵਰੀ 1949 ਨੂੰ ਇਸ ਦਾ ਰਾਸ਼ਟਰੀਕਰਨ ਹੋਇਆ।',
        '[I] Repo, Bank Rate, CRR, SLR ਅਤੇ OMO ਮਾਤਰਾਤਮਕ ਸਾਧਨ ਹਨ; Margin Requirement ਅਤੇ Moral Suasion ਗੁਣਾਤਮਕ ਸਾਧਨ ਹਨ।',
        '[I] ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ (Fiscal Deficit) ਸਰਕਾਰ ਦੇ ਕੁੱਲ ਉਧਾਰ ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ; ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ = ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ - ਵਿਆਜ ਭੁਗਤਾਨ।',
        '[I] ਵਪਾਰ ਸੰਤੁਲਨ (BoT) ਵਿੱਚ ਸਿਰਫ਼ ਦ੍ਰਿਸ਼ ਵਸਤੂਆਂ ਸ਼ਾਮਲ ਹੁੰਦੀਆਂ ਹਨ; BoP ਦੇ ਚਾਲੂ ਖਾਤੇ ਵਿੱਚ ਦ੍ਰਿਸ਼, ਅਦ੍ਰਿਸ਼ ਸੇਵਾਵਾਂ ਅਤੇ ਇਕਤਰਫ਼ਾ ਭੁਗਤਾਨ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ।',
        '[A] ਪਹਿਲੀ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾ ਹੈਰਡ-ਡੋਮਰ ਮਾਡਲ ਅਤੇ ਦੂਜੀ ਯੋਜਨਾ ਪੀ.ਸੀ. ਮਹਾਲਨੋਬਿਸ ਮਾਡਲ ਉੱਤੇ ਅਧਾਰਤ ਸੀ; ਨੀਤੀ ਆਯੋਗ 1 ਜਨਵਰੀ 2015 ਨੂੰ ਬਣਿਆ।',
        '[A] ਪੰਜਾਬ ਭਾਰਤ ਦੇ 1.53% ਖੇਤਰਫਲ ਨਾਲ ਕੇਂਦਰੀ ਪੂਲ ਵਿੱਚ ~35–45% ਕਣਕ ਅਤੇ ~20–25% ਚੌਲਾਂ ਦਾ ਯੋਗਦਾਨ ਪਾਉਂਦਾ ਹੈ।',
        '[A] ਪੰਜਾਬ ਦੀਆਂ ਪ੍ਰਮੁੱਖ ਸੰਸਥਾਵਾਂ: MARKFED (1954), ਪੰਜਾਬ ਮੰਡੀ ਬੋਰਡ (1961), PAU ਲੁਧਿਆਣਾ (1962) ਅਤੇ MILKFED/Verka (1973)।',
        '[A] ਪੰਜਾਬ ਦੇ ਉਦਯੋਗਿਕ ਕੇਂਦਰ: ਲੁਧਿਆਣਾ (ਹੌਜ਼ਰੀ ਤੇ ਸਾਈਕਲ), ਜਲੰਧਰ (ਖੇਡਾਂ ਦਾ ਸਮਾਨ), ਮੰਡੀ ਗੋਬਿੰਦਗੜ੍ਹ (ਸਟੀਲ ਟਾਊਨ), ਮੋਹਾਲੀ (IT ਹੱਬ)।',
      ],
      hi: [
        '[B] M1 (CU + DD + OD) सर्वाधिक तरल (Narrow Money) है; M3 (M1 + सावधि जमाएँ) व्यापक मुद्रा (Broad Money) है।',
        '[B] वाणिज्यिक बैंकों का साख गुणक (Credit Multiplier) = 1 / LRR होता है।',
        '[B] RBI की स्थापना 1 अप्रैल 1935 को हुई तथा 1 जनवरी 1949 को इसका राष्ट्रीयकरण हुआ।',
        '[I] Repo, Bank Rate, CRR, SLR व OMO मात्रात्मक उपकरण हैं; Margin Requirement व Moral Suasion गुणात्मक उपकरण हैं।',
        '[I] राजकोषीय घाटा (Fiscal Deficit) सरकार के कुल उधार के बराबर होता है; प्राथमिक घाटा = राजकोषीय घाटा - ब्याज भुगतान।',
        '[I] व्यापार संतुलन (BoT) में केवल दृश्य वस्तुएँ शामिल होती हैं; BoP के चालू खाते में दृश्य, अदृश्य सेवाएँ व एकपक्षीय अंतरण शामिल होते हैं।',
        '[A] प्रथम पंचवर्षीय योजना हैरड-डोमर मॉडल और द्वितीय योजना पी.सी. महालनोबिस मॉडल पर आधारित थी; नीति आयोग 1 जनवरी 2015 को बना।',
        '[A] पंजाब भारत के 1.53% क्षेत्रफल के साथ केंद्रीय पूल में ~35–45% गेहूँ और ~20–25% चावल का योगदान देता है।',
        '[A] पंजाब की प्रमुख संस्थाएँ: MARKFED (1954), पंजाब मंडी बोर्ड (1961), PAU लुधियाना (1962) और MILKFED/Verka (1973)।',
        '[A] पंजाब के औद्योगिक केंद्र: लुधियाना (होजरी व साइकिल), जालंधर (खेल का सामान), मंडी गोबिंदगढ़ (स्टील टाउन), मोहाली (IT हब)।',
      ],
    },
    workedExamples: [
      {
        title: {
          en: 'Calculating Revenue Deficit, Fiscal Deficit & Primary Deficit',
          pa: 'ਮਾਲੀਆ ਘਾਟਾ, ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ ਅਤੇ ਪ੍ਰਾਇਮਰੀ ਘਾਟੇ ਦੀ ਗਣਨਾ',
          hi: 'राजस्व घाटा, राजकोषीय घाटा और प्राथमिक घाटे की गणना',
        },
        problem: {
          en: 'From the following Union Budget data (in ₹ crore): Revenue Receipts = 2,000; Revenue Expenditure = 2,800; Capital Receipts net of borrowings (Recovery of loans + Disinvestment) = 300; Capital Expenditure = 1,000; Interest Payments = 600. Calculate (a) Revenue Deficit, (b) Fiscal Deficit, and (c) Primary Deficit.',
          pa: 'ਹੇਠਾਂ ਦਿੱਤੇ ਬਜਟ ਅੰਕੜਿਆਂ (₹ ਕਰੋੜ ਵਿੱਚ) ਤੋਂ ਪਤਾ ਕਰੋ: ਮਾਲੀਆ ਪ੍ਰਾਪਤੀਆਂ = 2,000; ਮਾਲੀਆ ਖਰਚ = 2,800; ਉਧਾਰ ਤੋਂ ਬਿਨਾਂ ਪੂੰਜੀ ਪ੍ਰਾਪਤੀਆਂ = 300; ਪੂੰਜੀ ਖਰਚ = 1,000; ਵਿਆਜ ਭੁਗਤਾਨ = 600। (a) ਮਾਲੀਆ ਘਾਟਾ, (b) ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ ਅਤੇ (c) ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ ਪਤਾ ਕਰੋ।',
          hi: 'निम्नलिखित बजट आँकड़ों (₹ करोड़ में) से ज्ञात करें: राजस्व प्राप्तियाँ = 2,000; राजस्व व्यय = 2,800; उधार रहित पूँजी प्राप्तियाँ = 300; पूँजी व्यय = 1,000; ब्याज भुगतान = 600। (a) राजस्व घाटा, (b) राजकोषीय घाटा और (c) प्राथमिक घाटा ज्ञात करें।',
        },
        steps: {
          en: [
            '(a) Revenue Deficit = Revenue Expenditure - Revenue Receipts = 2,800 - 2,000 = ₹800 crore.',
            '(b) Total Expenditure = 2,800 + 1,000 = 3,800; Non-debt Total Receipts = 2,000 + 300 = 2,300 ⇒ Fiscal Deficit = 3,800 - 2,300 = ₹1,500 crore.',
            '(c) Primary Deficit = Fiscal Deficit - Interest Payments = 1,500 - 600 = ₹900 crore.',
          ],
          pa: [
            '(a) ਮਾਲੀਆ ਘਾਟਾ = 2,800 - 2,000 = ₹800 ਕਰੋੜ।',
            '(b) ਕੁੱਲ ਖਰਚ = 3,800; ਉਧਾਰ ਤੋਂ ਬਿਨਾਂ ਕੁੱਲ ਪ੍ਰਾਪਤੀਆਂ = 2,300 ⇒ ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ = 3,800 - 2,300 = ₹1,500 ਕਰੋੜ।',
            '(c) ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ = ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ - ਵਿਆਜ ਭੁਗਤਾਨ = 1,500 - 600 = ₹900 ਕਰੋੜ।',
          ],
          hi: [
            '(a) राजस्व घाटा = 2,800 - 2,000 = ₹800 करोड़।',
            '(b) कुल व्यय = 3,800; उधार रहित कुल प्राप्तियाँ = 2,300 ⇒ राजकोषीय घाटा = 3,800 - 2,300 = ₹1,500 करोड़।',
            '(c) प्राथमिक घाटा = राजकोषीय घाटा - ब्याज भुगतान = 1,500 - 600 = ₹900 करोड़।',
          ],
        },
        solution: {
          en: '(a) Revenue Deficit = ₹800 crore; (b) Fiscal Deficit = ₹1,500 crore; (c) Primary Deficit = ₹900 crore.',
          pa: '(a) ਮਾਲੀਆ ਘਾਟਾ = ₹800 ਕਰੋੜ; (b) ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ = ₹1,500 ਕਰੋੜ; (c) ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ = ₹900 ਕਰੋੜ।',
          hi: '(a) राजस्व घाटा = ₹800 करोड़; (b) राजकोषीय घाटा = ₹1,500 करोड़; (c) प्राथमिक घाटा = ₹900 करोड़।',
        },
      },
    ],
    commonMisconceptions: [
      {
        misconception: {
          en: 'Foreign Direct Investment (FDI) and External Borrowings are recorded in the Current Account of the Balance of Payments (BoP).',
          pa: 'ਵਿਦੇਸ਼ੀ ਪ੍ਰਤੱਖ ਨਿਵੇਸ਼ (FDI) ਅਤੇ ਵਿਦੇਸ਼ੀ ਉਧਾਰ ਭੁਗਤਾਨ ਸੰਤੁਲਨ (BoP) ਦੇ ਚਾਲੂ ਖਾਤੇ (Current Account) ਵਿੱਚ ਦਰਜ ਹੁੰਦੇ ਹਨ।',
          hi: 'विदेशी प्रत्यक्ष निवेश (FDI) और विदेशी ऋण भुगतान संतुलन (BoP) के चालू खाते (Current Account) में दर्ज होते हैं।',
        },
        correction: {
          en: 'FDI, FPI/Portfolio Investment, and External Commercial Borrowings alter cross-border assets and liabilities, so they are recorded in the CAPITAL Account of BoP! However, investment income (dividends/interest earned on past investments) is recorded in the CURRENT Account (under Invisibles).',
          pa: 'FDI, FPI ਅਤੇ ਵਿਦੇਸ਼ੀ ਉਧਾਰ ਸੰਪਤੀਆਂ ਤੇ ਦੇਣਦਾਰੀਆਂ ਵਿੱਚ ਤਬਦੀਲੀ ਕਰਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ BoP ਦੇ ਪੂੰਜੀ ਖਾਤੇ (Capital Account) ਵਿੱਚ ਆਉਂਦੇ ਹਨ! ਪਰ ਨਿਵੇਸ਼ ਤੋਂ ਮਿਲਣ ਵਾਲਾ ਵਿਆਜ/ਲਾਭਅੰਸ਼ ਚਾਲੂ ਖਾਤੇ (Current Account) ਵਿੱਚ ਆਉਂਦਾ ਹੈ।',
          hi: 'FDI, FPI और विदेशी ऋण परिसंपत्तियों व देनदारियों को प्रभावित करते हैं, इसलिए वे BoP के पूँजी खाते (Capital Account) में आते हैं! किंतु निवेश से प्राप्त ब्याज/लाभांश चालू खाते (Current Account) में आता है।',
        },
        whyItMatters: {
          en: 'Classifying items between Current Account and Capital Account of BoP is a perennial question in Master Cadre SST Economics.',
          pa: 'BoP ਦੇ ਚਾਲੂ ਖਾਤੇ ਅਤੇ ਪੂੰਜੀ ਖਾਤੇ ਦੀਆਂ ਮੱਦਾਂ ਦੀ ਪਛਾਣ ਮਾਸਟਰ ਕੈਡਰ SST ਵਿੱਚ ਹਰ ਵਾਰ ਪੁੱਛੀ ਜਾਂਦੀ ਹੈ।',
          hi: 'BoP के चालू खाते और पूँजी खाते की मदों की पहचान मास्टर कैडर SST में बार-बार पूछी जाती है।',
        },
      },
    ],
    quickRevisionSheet: {
      highYieldPoints: {
        en: [
          'Money Liquidity Order: M1 (Most liquid) > M2 > M3 (Broad Money) > M4 (Least liquid).',
          'Deficit Formulas: Revenue Deficit = RE - RR; Fiscal Deficit = Total Borrowings; Primary Deficit = Fiscal Deficit - Interest Payments.',
          'Punjab Economy Key Facts: Area = 1.53% of India (50,362 sq km); Cropping Intensity ~189%; Irrigated area >99%; PAU Ludhiana = 1962; Punjab Mandi Board = 1961; MARKFED = 1954; MILKFED (Verka) = 1973.',
        ],
        pa: [
          'ਮੁਦਰਾ ਤਰਲਤਾ ਕ੍ਰਮ: M1 (ਸਭ ਤੋਂ ਵੱਧ ਤਰਲ) > M2 > M3 (ਵਿਆਪਕ ਮੁਦਰਾ) > M4 (ਸਭ ਤੋਂ ਘੱਟ ਤਰਲ)।',
          'ਪੰਜਾਬ ਅਰਥਵਿਵਸਥਾ: ਖੇਤਰਫਲ = ਭਾਰਤ ਦਾ 1.53%; ਫ਼ਸਲੀ ਘਣਤਾ ~189%; ਸਿੰਜਾਈ >99%; PAU ਲੁਧਿਆਣਾ = 1962; ਪੰਜਾਬ ਮੰਡੀ ਬੋਰਡ = 1961; MARKFED = 1954; MILKFED = 1973।',
        ],
        hi: [
          'मुद्रा तरलता क्रम: M1 (सर्वाधिक तरल) > M2 > M3 (व्यापक मुद्रा) > M4 (सबसे कम तरल)।',
          'पंजाब अर्थव्यवस्था: क्षेत्रफल = भारत का 1.53%; शस्य गहनता ~189%; सिंचाई >99%; PAU लुधियाना = 1962; पंजाब मंडी बोर्ड = 1961; MARKFED = 1954; MILKFED = 1973।',
        ],
      },
      examTraps: {
        en: [
          'Disinvestment (selling PSU shares) and Recovery of Loans reduce government assets, so they are CAPITAL Receipts (non-debt), NOT Revenue Receipts!',
          'Margin Requirement is a QUALITATIVE (Selective) credit control tool of RBI, whereas CRR, SLR, Repo Rate, and OMO are QUANTITATIVE tools.',
        ],
        pa: [
          'ਅਪਨਿਵੇਸ਼ (Disinvestment) ਅਤੇ ਕਰਜ਼ਿਆਂ ਦੀ ਵਸੂਲੀ ਸਰਕਾਰ ਦੀਆਂ ਸੰਪਤੀਆਂ ਘਟਾਉਂਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਪੂੰਜੀ ਪ੍ਰਾਪਤੀਆਂ (Capital Receipts) ਹਨ, ਮਾਲੀਆ ਪ੍ਰਾਪਤੀਆਂ ਨਹੀਂ!',
          'Margin Requirement (ਸੀਮਾਂਤ ਲੋੜ) RBI ਦਾ ਗੁਣਾਤਮਕ (Qualitative) ਸਾਧਨ ਹੈ, ਜਦੋਂ ਕਿ CRR, SLR ਅਤੇ Repo ਮਾਤਰਾਤਮਕ ਸਾਧਨ ਹਨ।',
        ],
        hi: [
          'विनिवेश (Disinvestment) और ऋणों की वसूली सरकार की परिसंपत्तियाँ घटाते हैं, इसलिए वे पूँजीगत प्राप्तियाँ (Capital Receipts) हैं, राजस्व प्राप्तियाँ नहीं!',
          'Margin Requirement (सीमांत आवश्यकता) RBI का गुणात्मक (Qualitative) उपकरण है, जबकि CRR, SLR व Repo मात्रात्मक उपकरण हैं।',
        ],
      },
    },
    flashcards: [
      {
        id: 'fc-ec4-1',
        q: {
          en: '[Level B] Which measure of money supply is known as "Broad Money" or "Aggregate Monetary Resources" in India?',
          pa: '[Level B] ਭਾਰਤ ਵਿੱਚ ਮੁਦਰਾ ਪੂਰਤੀ ਦੇ ਕਿਸ ਮਾਪ ਨੂੰ "ਵਿਆਪਕ ਮੁਦਰਾ" (Broad Money) ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
          hi: '[Level B] भारत में मुद्रा आपूर्ति के किस माप को "व्यापक मुद्रा" (Broad Money) कहा जाता है?',
        },
        a: {
          en: 'M3 (M1 + Net Time Deposits with commercial banks).',
          pa: 'M3 (M1 + ਵਪਾਰਕ ਬੈਂਕਾਂ ਕੋਲ ਸ਼ੁੱਧ ਮਿਆਦੀ ਜਮ੍ਹਾਂ ਰਾਸ਼ੀਆਂ)।',
          hi: 'M3 (M1 + वाणिज्यिक बैंकों के पास शुद्ध सावधि जमाएँ)।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ec4-2',
        q: {
          en: '[Level I] What is the formula for Primary Deficit in the Government Budget?',
          pa: '[Level I] ਸਰਕਾਰੀ ਬਜਟ ਵਿੱਚ ਪ੍ਰਾਇਮਰੀ ਘਾਟੇ (Primary Deficit) ਦਾ ਸੂਤਰ ਕੀ ਹੈ?',
          hi: '[Level I] सरकारी बजट में प्राथमिक घाटे (Primary Deficit) का सूत्र क्या है?',
        },
        a: {
          en: 'Primary Deficit = Fiscal Deficit - Interest Payments.',
          pa: 'ਪ੍ਰਾਇਮਰੀ ਘਾਟਾ = ਰਾਜਕੋਸ਼ੀ ਘਾਟਾ (Fiscal Deficit) - ਵਿਆਜ ਭੁਗਤਾਨ।',
          hi: 'प्राथमिक घाटा = राजकोषीय घाटा (Fiscal Deficit) - ब्याज भुगतान।',
        },
        difficulty: 'easy',
      },
      {
        id: 'fc-ec4-3',
        q: {
          en: '[Level I] Which Second Five-Year Plan (1956–61) model laid the foundation for heavy industries in India?',
          pa: '[Level I] ਦੂਜੀ ਪੰਜ-ਸਾਲਾ ਯੋਜਨਾ (1956–61) ਦੇ ਕਿਸ ਮਾਡਲ ਨੇ ਭਾਰਤ ਵਿੱਚ ਭਾਰੀ ਉਦਯੋਗਾਂ ਦੀ ਨੀਂਹ ਰੱਖੀ?',
          hi: '[Level I] द्वितीय पंचवर्षीय योजना (1956–61) के किस मॉडल ने भारत में भारी उद्योगों की नींव रखी?',
        },
        a: {
          en: 'P.C. Mahalanobis Model (1956–61).',
          pa: 'ਪੀ.ਸੀ. ਮਹਾਲਨੋਬਿਸ ਮਾਡਲ (P.C. Mahalanobis Model)।',
          hi: 'पी.सी. महालनोबिस मॉडल (P.C. Mahalanobis Model)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-ec4-4',
        q: {
          en: '[Level A] In which year was Punjab Agricultural University (PAU), Ludhiana established to spearhead the Green Revolution?',
          pa: '[Level A] ਹਰੀ ਕ੍ਰਾਂਤੀ ਦੀ ਅਗਵਾਈ ਕਰਨ ਵਾਲੀ ਪੰਜਾਬ ਖੇਤੀਬਾੜੀ ਯੂਨੀਵਰਸਿਟੀ (PAU), ਲੁਧਿਆਣਾ ਦੀ ਸਥਾਪਨਾ ਕਿਸ ਸਾਲ ਹੋਈ?',
          hi: '[Level A] हरित क्रांति का नेतृत्व करने वाले पंजाब कृषि विश्वविद्यालय (PAU), लुधियाना की स्थापना किस वर्ष हुई?',
        },
        a: {
          en: '1962 (in Ludhiana, Punjab).',
          pa: '1962 ਵਿੱਚ (ਲੁਧਿਆਣਾ ਵਿਖੇ)।',
          hi: '1962 में (लुधियाना में)।',
        },
        difficulty: 'medium',
      },
      {
        id: 'fc-ec4-5',
        q: {
          en: '[Level A] Which town of Punjab is famously known as the "Steel Town of Punjab"?',
          pa: '[Level A] ਪੰਜਾਬ ਦੇ ਕਿਸ ਸ਼ਹਿਰ ਨੂੰ "ਪੰਜਾਬ ਦਾ ਸਟੀਲ ਟਾਊਨ" (Steel Town of Punjab) ਕਿਹਾ ਜਾਂਦਾ ਹੈ?',
          hi: '[Level A] पंजाब के किस शहर को "पंजाब का स्टील टाउन" (Steel Town of Punjab) कहा जाता है?',
        },
        a: {
          en: 'Mandi Gobindgarh (in Fatehgarh Sahib district).',
          pa: 'ਮੰਡੀ ਗੋਬਿੰਦਗੜ੍ਹ (ਜ਼ਿਲ੍ਹਾ ਫ਼ਤਹਿਗੜ੍ਹ ਸਾਹਿਬ)।',
          hi: 'मंडी गोबिंदगढ़ (जिला फतेहगढ़ साहिब)।',
        },
        difficulty: 'easy',
      },
    ],
    videos: [],
    bookRefs: [
      {
        title: 'NCERT Class 12 Introductory Macroeconomics (Ch 3: Money and Banking, Ch 5: Government Budget, Ch 6: Open Economy Macroeconomics)',
        author: 'NCERT',
        chapters: 'Chapters 3, 5 & 6',
        type: 'ncert',
      },
      {
        title: 'PSEB Class 10 & 12 Economics — Indian Economy & Economy of Punjab',
        author: 'Punjab School Education Board (PSEB)',
        chapters: 'Economic Planning, Agriculture & Industrial Development of Punjab',
        type: 'state-board',
      },
    ],
    editorialRecord: {
      authoredDate: '2026-10-10',
      lastUpdatedDate: '2026-10-10',
      authoringType: 'authored-curriculum',
      reviewerRecord: 'Verified against NCERT Class 12 Macroeconomics, NCERT Class 11 Indian Economic Development & PSEB Punjab Economy curriculum',
      verifiedSyllabusDenominator: 'ERB Punjab Master Cadre SST — Economics: Money and banking; Government budget and economy; Balance of trade and BoP; Economic planning in India; Indian economy and Punjab economy',
    },
  },
};
