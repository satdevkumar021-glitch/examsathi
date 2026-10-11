import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const ETT_MATH_SCIENCE_SST_BLUEPRINT_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. ETT MATHEMATICS I: NUMBER SYSTEM, REAL NUMBERS, HCF/LCM, EXPONENTS & POLYNOMIALS
    // =========================================================================
    {
        topicId: 'ett-math-2',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 200,
            editorialNote: 'Complete ERB Punjab ETT Paper B Mathematics Unit I covering Number Systems (ett-math-1), Real Numbers & Euclid Division Lemma (ett-math-2), and Exponents, Surds & Polynomials (ett-math-3) with 60-second shortcuts (Level B -> I -> A).'
        },
        bookRefs: [
            {
                title: 'PSEB / NCERT Mathematics Textbooks (Class 9 & Class 10)',
                author: 'Punjab School Education Board (PSEB) / NCERT',
                chapter: 'Ch 1: Number Systems & Real Numbers; Ch 2: Polynomials',
                relevance: 'Direct source for ETT Paper B Mathematics (40 Marks / 20 Questions) covering rational/irrational numbers, terminating decimals, HCF/LCM, exponents, and quadratic polynomials.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Number Systems, Rational vs Irrational & Laws of Exponents (\`ett-math-1\`, \`ett-math-3\`)]
1. **Hierarchy of Number Systems (ਸੰਖਿਆ ਪ੍ਰਣਾਲੀ):**
   | Number Set | Symbol & Definition | Exam Traps & Special Facts |
   |---|---|---|
   | **Natural Numbers (ਪ੍ਰਾਕਿਰਤਿਕ ਸੰਖਿਆਵਾਂ)** | $\\mathbb{N} = \\{1, 2, 3, 4, \\dots\\}$ | Smallest natural number is **$1$** ($0$ is NOT a natural number). |
   | **Whole Numbers (ਪੂਰਨ ਸੰਖਿਆਵਾਂ)** | $\\mathbb{W} = \\{0, 1, 2, 3, \\dots\\}$ | Smallest whole number is **$0$**; every natural number is a whole number. |
   | **Integers (ਸੰਪੂਰਨ ਸੰਖਿਆਵਾਂ)** | $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$ | **$0$ is neither positive nor negative**, but **$0$ is an EVEN integer**. |
   | **Rational Numbers (ਪਰਿਮੇਯ ਸੰਖਿਆਵਾਂ)** | $\\mathbb{Q} = \\left\\{\\frac{p}{q} : p, q \\in \\mathbb{Z}, q \\ne 0\\right\\}$ | Decimal expansion is either **terminating (ਸ਼ਾਂਤ)** or **non-terminating repeating (ਅਸ਼ਾਂਤ ਆਵਰਤੀ)**. Includes $0 = 0/1$ and $\\frac{22}{7}$. |
   | **Irrational Numbers (ਅਪਰਿਮੇਯ ਸੰਖਿਆਵਾਂ)** | $\\mathbb{R} \\setminus \\mathbb{Q}$ | Decimal expansion is **non-terminating & non-repeating (ਅਸ਼ਾਂਤ ਅਣ-ਆਵਰਤੀ)**. Examples: $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}, \\pi, 0.1010010001\\dots$ |
   | **Prime vs Composite Numbers** | Prime: exactly $2$ factors ($1$ and itself) | **$1$ is neither prime nor composite**; **$2$ is the only even prime**; there are **$25$ primes from $1$ to $100$** ($15$ from $1$ to $50$, $10$ from $51$ to $100$). |

2. **Laws of Exponents & Surds (ਘਾਤ ਅੰਕਾਂ ਦੇ ਨਿਯਮ ਅਤੇ ਕਰਨੀਆਂ):**
   - Product & Quotient: $a^m \\cdot a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$ ($a \\ne 0$), $(a^m)^n = a^{mn}$, $(ab)^m = a^m b^m$.
   - Zero & Negative Exponents: **$a^0 = 1$** ($a \\ne 0$), $a^{-n} = \\frac{1}{a^n}$, $a^{p/q} = \\sqrt[q]{a^p}$.
   - **Rationalising the Denominator Shortcut:**
     $$\\frac{1}{\\sqrt{a} + \\sqrt{b}} = \\frac{\\sqrt{a} - \\sqrt{b}}{a - b} \\quad \\text{and} \\quad \\frac{1}{\\sqrt{a} - \\sqrt{b}} = \\frac{\\sqrt{a} + \\sqrt{b}}{a - b}$$
     *(If $a - b = 1$, e.g., $x = 2 + \\sqrt{3}$ where $2^2 - (\\sqrt{3})^2 = 4 - 3 = 1$, then immediately $\\frac{1}{x} = 2 - \\sqrt{3}$ and $x + \\frac{1}{x} = 4$!)*

---

### [Level I: Intermediate — Euclid's Division Lemma, HCF/LCM & Polynomials (\`ett-math-2\`, \`ett-math-3\`)]
1. **Euclid's Division Lemma & Fundamental Theorem of Arithmetic:**
   - **Euclid's Division Lemma:** Given positive integers $a$ and $b$, there exist unique integers $q$ (quotient) and $r$ (remainder) satisfying:
     $$a = bq + r, \\quad \\text{where } 0 \\le r < b$$
   - **Fundamental Theorem of Arithmetic:** Every composite number can be expressed uniquely as a product of primes, apart from the order of factors.
   - **Golden Product Formula (Strictly for TWO Positive Integers $a$ and $b$):**
     $$\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$$
   - **HCF & LCM of Fractions:**
     $$\\text{HCF of Fractions} = \\frac{\\text{HCF of Numerators}}{\\text{LCM of Denominators}}, \\qquad \\text{LCM of Fractions} = \\frac{\\text{LCM of Numerators}}{\\text{HCF of Denominators}}$$

2. **Polynomials (ਬਹੁਪਦ): Degree, Remainder/Factor Theorem & Quadratic Zeros:**
   - **Types by Degree:** Linear ($ax + b$, degree $1$, max $1$ zero: $x = -b/a$); Quadratic ($ax^2 + bx + c$, degree $2$, max $2$ zeros, graph is a **parabola**); Cubic ($ax^3 + bx^2 + cx + d$, degree $3$, max $3$ zeros). *Degree of a non-zero constant polynomial is $0$; degree of the zero polynomial $P(x)=0$ is **undefined**.*
   - **Remainder Theorem:** If polynomial $P(x)$ is divided by $(x - a)$, the remainder is **$P(a)$**.
   - **Factor Theorem:** $(x - a)$ is a factor of $P(x)$ if and only if **$P(a) = 0$**.
   - **Zeros of Quadratic Polynomial $P(x) = ax^2 + bx + c$ ($a \\ne 0$):** If $\\alpha$ and $\\beta$ are the zeros:
     $$\\text{Sum of Zeros } (\\alpha + \\beta) = -\\frac{b}{a}, \\qquad \\text{Product of Zeros } (\\alpha\\beta) = \\frac{c}{a}$$
   - **Forming a Quadratic Polynomial from Zeros:**
     $$P(x) = k\\left[x^2 - (\\alpha + \\beta)x + \\alpha\\beta\\right] = k\\left[x^2 - (\\text{Sum})x + (\\text{Product})\\right]$$
   - **Cubic Polynomial $ax^3 + bx^2 + cx + d$:** $\\alpha + \\beta + \\gamma = -\\frac{b}{a}$, $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a}$, $\\alpha\\beta\\gamma = -\\frac{d}{a}$.

---

### [Level A: Advanced — 60-Second Exam Shortcuts & Tricky Word Problems]
1. **5-Second Terminating Decimal Shortcut:**
   - First reduce $p/q$ to **lowest form** (coprime $p, q$).
   - It terminates **if and only if** the prime factorisation of denominator $q$ is of the form **$2^m \\times 5^n$** ($m, n \\ge 0$).
   - **Number of Decimal Places $= \\max(m, n)$**!
   - *Example:* $\\frac{14587}{1250} = \\frac{14587}{2^1 \\times 5^4} \\implies$ terminates after $\\max(1, 4) = \\mathbf{4}$ **decimal places**!

2. **10-Second Recurring Decimal to Fraction Shortcut:**
   - **Pure Recurring:** Put as many $9$s in the denominator as repeating digits under the bar:
     $$0.\\overline{7} = \\frac{7}{9}, \\qquad 0.\\overline{35} = \\frac{35}{99}, \\qquad 1.\\overline{27} = 1 + \\frac{27}{99} = 1 + \\frac{3}{11} = \\frac{14}{11}$$
   - **Mixed Recurring:** $\\frac{(\\text{Entire number after decimal}) - (\\text{Non-repeating part})}{\\text{As many } 9\\text{s as repeating digits followed by as many } 0\\text{s as non-repeating decimal digits}}$:
     $$0.2\\overline{35} = \\frac{235 - 2}{990} = \\frac{233}{990}, \\qquad 0.12\\overline{3} = \\frac{123 - 12}{900} = \\frac{111}{900} = \\frac{37}{300}$$

3. **HCF & LCM Remainder Word-Problem Shortcuts:**
   | Word Problem Pattern | 10-Second Formula / Method |
   |---|---|
   | **Greatest number** that divides $x, y, z$ leaving remainders $r_1, r_2, r_3$ | $\\text{HCF}(x - r_1,\\; y - r_2,\\; z - r_3)$ |
   | **Greatest number** that divides $x, y, z$ leaving the **SAME remainder** (unknown) | $\\text{HCF}(|x - y|,\\; |y - z|,\\; |z - x|)$ |
   | **Smallest number** which when divided by $x, y, z$ leaves the **same remainder $r$** | $\\text{LCM}(x, y, z) + r$ |
   | **Smallest number** which when divided by $x, y, z$ leaves remainders $a, b, c$ where $(x-a) = (y-b) = (z-c) = k$ | $\\text{LCM}(x, y, z) - k$ |
   | **Bells tolling / Traffic lights / Circular track** meeting again at starting point | $\\text{LCM}(t_1, t_2, t_3)$ |

4. **Symmetric Identities of Zeros ($\\alpha, \\beta$) Without Finding Individual Roots:**
   - $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\mathbf{-\\frac{b}{c}}$ (**3-Second Shortcut!**)
   - $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$
   - $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$
   - $\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta)$`,
            pa: `### [Level B: Basic — ਸੰਖਿਆ ਪ੍ਰਣਾਲੀ, ਪਰਿਮੇਯ/ਅਪਰਿਮੇਯ ਸੰਖਿਆਵਾਂ ਅਤੇ ਘਾਤ ਅੰਕ (\`ett-math-1\`, \`ett-math-3\`)]
1. **ਸੰਖਿਆ ਪ੍ਰਣਾਲੀ ਦਾ ਵਰਗੀਕਰਨ (Number Systems):**
   | ਸੰਖਿਆ ਸਮੂਹ | ਚਿੰਨ੍ਹ ਅਤੇ ਪਰਿਭਾਸ਼ਾ | ਪ੍ਰੀਖਿਆ ਲਈ ਖਾਸ ਤੱਥ |
   |---|---|---|
   | **ਪ੍ਰਾਕਿਰਤਿਕ ਸੰਖਿਆਵਾਂ (Natural)** | $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ | ਸਭ ਤੋਂ ਛੋਟੀ ਪ੍ਰਾਕਿਰਤਿਕ ਸੰਖਿਆ **$1$** ਹੈ ($0$ ਪ੍ਰਾਕਿਰਤਿਕ ਨਹੀਂ ਹੈ)। |
   | **ਪੂਰਨ ਸੰਖਿਆਵਾਂ (Whole)** | $\\mathbb{W} = \\{0, 1, 2, 3, \\dots\\}$ | ਸਭ ਤੋਂ ਛੋਟੀ ਪੂਰਨ ਸੰਖਿਆ **$0$** ਹੈ। |
   | **ਸੰਪੂਰਨ ਸੰਖਿਆਵਾਂ (Integers)** | $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$ | **$0$ ਨਾ ਧਨਾਤਮਕ ਹੈ ਨਾ ਰਿਣਾਤਮਕ**, ਪਰ **$0$ ਇੱਕ ਜਿਸਤ (Even) ਸੰਪੂਰਨ ਸੰਖਿਆ ਹੈ**। |
   | **ਪਰਿਮੇਯ ਸੰਖਿਆਵਾਂ (Rational)** | $\\mathbb{Q} = \\{p/q : p, q \\in \\mathbb{Z}, q \\ne 0\\}$ | ਦਸ਼ਮਲਵ ਪ੍ਰਸਾਰ **ਸ਼ਾਂਤ (Terminating)** ਜਾਂ **ਅਸ਼ਾਂਤ ਆਵਰਤੀ (Repeating)** ਹੁੰਦਾ ਹੈ ($22/7$ ਪਰਿਮੇਯ ਹੈ)। |
   | **ਅਪਰਿਮੇਯ ਸੰਖਿਆਵਾਂ (Irrational)** | $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}, \\pi$ | ਦਸ਼ਮਲਵ ਪ੍ਰਸਾਰ **ਅਸ਼ਾਂਤ ਅਣ-ਆਵਰਤੀ (Non-terminating non-repeating)** ਹੁੰਦਾ ਹੈ (**$\\pi$ ਅਪਰਿਮੇਯ ਹੈ**)। |
   | **ਅਭਾਜ (Prime) ਬਨਾਮ ਭਾਜ (Composite)** | ਅਭਾਜ: ਸਿਰਫ਼ $2$ ਗੁਣਨਖੰਡ ($1$ ਅਤੇ ਖੁਦ) | **$1$ ਨਾ ਅਭਾਜ ਹੈ ਨਾ ਭਾਜ**; **$2$ ਇਕਲੌਤੀ ਜਿਸਤ ਅਭਾਜ ਸੰਖਿਆ ਹੈ**; $1$ ਤੋਂ $100$ ਤੱਕ **$25$ ਅਭਾਜ ਸੰਖਿਆਵਾਂ** ਹਨ। |

2. **ਘਾਤ ਅੰਕਾਂ ਦੇ ਨਿਯਮ ਅਤੇ ਹਰ ਦਾ ਪਰਿਮੇਯਕਰਨ (Exponents & Surds):**
   - $a^m \\cdot a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$, **$a^0 = 1$** ($a \\ne 0$), $a^{-n} = \\frac{1}{a^n}$।
   - **ਹਰ ਦਾ ਪਰਿਮੇਯਕਰਨ ਸ਼ਾਰਟਕੱਟ:** $\\frac{1}{\\sqrt{a} \\pm \\sqrt{b}} = \\frac{\\sqrt{a} \\mp \\sqrt{b}}{a - b}$। ਜੇਕਰ $x = 2 + \\sqrt{3}$ (ਜਿੱਥੇ $2^2 - 3 = 1$), ਤਾਂ ਸਿੱਧਾ $\\frac{1}{x} = 2 - \\sqrt{3}$ ਅਤੇ $x + \\frac{1}{x} = 4$!

---

### [Level I: Intermediate — ਯੂਕਲਿਡ ਵੰਡ ਪ੍ਰਮੇਯਿਕਾ, ਮ.ਸ.ਵ. (HCF) / ਲ.ਸ.ਵ. (LCM) ਅਤੇ ਬਹੁਪਦ (\`ett-math-2\`, \`ett-math-3\`)]
1. **ਯੂਕਲਿਡ ਵੰਡ ਪ੍ਰਮੇਯਿਕਾ (Euclid's Division Lemma) ਅਤੇ HCF/LCM:**
   - **ਯੂਕਲਿਡ ਵੰਡ ਪ੍ਰਮੇਯਿਕਾ:** $a = bq + r$, ਜਿੱਥੇ **$0 \\le r < b$**।
   - **ਦੋ ਸੰਖਿਆਵਾਂ ਲਈ ਸੁਨਹਿਰੀ ਸੂਤਰ:** $\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$ *(ਇਹ ਸੂਤਰ ਸਿਰਫ਼ ਦੋ ਸੰਖਿਆਵਾਂ ਲਈ ਹੈ, ਤਿੰਨ ਲਈ ਨਹੀਂ!)*
   - **ਭਿੰਨਾਂ ਦਾ HCF ਅਤੇ LCM:**
     $$\\text{ਭਿੰਨਾਂ ਦਾ HCF} = \\frac{\\text{ਅੰਸ਼ਾਂ ਦਾ HCF}}{\\text{ਹਰਾਂ ਦਾ LCM}}, \\qquad \\text{ਭਿੰਨਾਂ ਦਾ LCM} = \\frac{\\text{ਅੰਸ਼ਾਂ ਦਾ LCM}}{\\text{ਹਰਾਂ ਦਾ HCF}}$$

2. **ਬਹੁਪਦ (Polynomials): ਘਾਤ, ਬਾਕੀ ਪ੍ਰਮੇਯ ਅਤੇ ਸਿਫ਼ਰਾਂ (Zeros):**
   - **ਬਾਕੀ ਪ੍ਰਮੇਯ (Remainder Theorem):** ਜੇਕਰ $P(x)$ ਨੂੰ $(x - a)$ ਨਾਲ ਵੰਡਿਆ ਜਾਵੇ, ਤਾਂ ਬਾਕੀ **$P(a)$** ਬਚਦਾ ਹੈ। ਜੇਕਰ $P(a) = 0$ ਹੋਵੇ, ਤਾਂ $(x - a)$ ਬਹੁਪਦ ਦਾ ਗੁਣਨਖੰਡ ਹੈ।
   - **ਦੋ-ਘਾਤੀ ਬਹੁਪਦ $ax^2 + bx + c$ ਦੀਆਂ ਸਿਫ਼ਰਾਂ ($\\alpha, \\beta$):**
     $$\\text{ਸਿਫ਼ਰਾਂ ਦਾ ਜੋੜ } (\\alpha + \\beta) = -\\frac{b}{a}, \\qquad \\text{ਸਿਫ਼ਰਾਂ ਦਾ ਗੁਣਨਫਲ } (\\alpha\\beta) = \\frac{c}{a}$$
   - **ਦੋ-ਘਾਤੀ ਬਹੁਪਦ ਬਣਾਉਣ ਦਾ ਸੂਤਰ:** $k\\left[x^2 - (\\alpha + \\beta)x + \\alpha\\beta\\right]$।

---

### [Level A: Advanced — 60-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ ਅਤੇ ਟ੍ਰਿਕੀ ਸਵਾਲ]
1. **5-ਸੈਕਿੰਡ ਸ਼ਾਂਤ ਦਸ਼ਮਲਵ (Terminating Decimal) ਸ਼ਾਰਟਕੱਟ:**
   - ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਭਿੰਨ $p/q$ ਨੂੰ **ਸਭ ਤੋਂ ਸਰਲ ਰੂਪ (Lowest Form)** ਵਿੱਚ ਕੱਟੋ।
   - ਜੇਕਰ ਹਰ $q$ ਦੇ ਅਭਾਜ ਗੁਣਨਖੰਡ **$2^m \\times 5^n$** ਦੇ ਰੂਪ ਵਿੱਚ ਹਨ, ਤਾਂ ਦਸ਼ਮਲਵ ਪ੍ਰਸਾਰ **ਸ਼ਾਂਤ** ਹੋਵੇਗਾ ਅਤੇ ਠੀਕ **$\\max(m, n)$ ਦਸ਼ਮਲਵ ਸਥਾਨਾਂ** ਤੋਂ ਬਾਅਦ ਖਤਮ ਹੋਵੇਗਾ!
   - *ਉਦਾਹਰਣ:* $\\frac{14587}{1250} = \\frac{14587}{2^1 \\times 5^4} \\implies \\max(1, 4) = \\mathbf{4}$ **ਦਸ਼ਮਲਵ ਸਥਾਨਾਂ** ਬਾਅਦ ਸ਼ਾਂਤ ਹੋਵੇਗਾ!

2. **10-ਸੈਕਿੰਡ ਆਵਰਤੀ ਦਸ਼ਮਲਵ ਤੋਂ ਭਿੰਨ (Recurring Decimal) ਸ਼ਾਰਟਕੱਟ:**
   - $0.\\overline{7} = \\frac{7}{9}$, $0.\\overline{35} = \\frac{35}{99}$, ਅਤੇ $0.2\\overline{35} = \\frac{235 - 2}{990} = \\frac{233}{990}$।

3. **HCF ਅਤੇ LCM ਬਾਕੀ (Remainder) ਵਾਲੇ ਸਵਾਲਾਂ ਦੇ ਸ਼ਾਰਟਕੱਟ:**
   - **ਵੱਡੀ ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ** ਜੋ $x, y, z$ ਨੂੰ ਵੰਡਣ ਤੇ ਕ੍ਰਮਵਾਰ $r_1, r_2, r_3$ ਬਾਕੀ ਛੱਡੇ $\\implies \\text{HCF}(x - r_1,\\; y - r_2,\\; z - r_3)$।
   - **ਛੋਟੀ ਤੋਂ ਛੋਟੀ ਸੰਖਿਆ** ਜਿਸ ਨੂੰ $x, y, z$ ਨਾਲ ਵੰਡਣ ਤੇ ਹਰੇਕ ਸਥਿਤੀ ਵਿੱਚ $r$ ਬਾਕੀ ਬਚੇ $\\implies \\text{LCM}(x, y, z) + r$।
   - **ਘੰਟੀਆਂ ਦਾ ਇਕੱਠੇ ਵੱਜਣਾ / ਟ੍ਰੈਫਿਕ ਲਾਈਟਾਂ** $\\implies \\text{LCM}(t_1, t_2, t_3)$।

4. **ਸਿਫ਼ਰਾਂ ਦੇ ਸਮਮਿਤਿਕ ਤੱਤਸਮਕ (Symmetric Identities):**
   - $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\mathbf{-\\frac{b}{c}}$ ਅਤੇ $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$।`,
            hi: `### [Level B: Basic — संख्या पद्धति, परिमेय/अपरिमेय संख्याएँ एवं घातांक (\`ett-math-1\`, \`ett-math-3\`)]
1. **संख्या पद्धति का वर्गीकरण (Number Systems):**
   | संख्या समुच्चय | प्रतीक एवं परिभाषा | परीक्षा उपयोगी महत्वपूर्ण तथ्य |
   |---|---|---|
   | **प्राकृत संख्याएँ (Natural)** | $\\mathbb{N} = \\{1, 2, 3, \\dots\\}$ | सबसे छोटी प्राकृत संख्या **$1$** है ($0$ प्राकृत संख्या नहीं है)। |
   | **पूर्ण संख्याएँ (Whole)** | $\\mathbb{W} = \\{0, 1, 2, 3, \\dots\\}$ | सबसे छोटी पूर्ण संख्या **$0$** है। |
   | **पूर्णांक (Integers)** | $\\mathbb{Z} = \\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$ | **$0$ न धनात्मक है न ऋणात्मक**, परंतु **$0$ एक सम (Even) पूर्णांक है**। |
   | **परिमेय संख्याएँ (Rational)** | $\\mathbb{Q} = \\{p/q : p, q \\in \\mathbb{Z}, q \\ne 0\\}$ | दशमलव प्रसार **शांत (Terminating)** या **अशांत आवर्ती (Repeating)** होता है ($22/7$ परिमेय है)। |
   | **अपरिमेय संख्याएँ (Irrational)** | $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}, \\pi$ | दशमलव प्रसार **अशांत अनावर्ती (Non-terminating non-repeating)** होता है (**$\\pi$ अपरिमेय है**)। |
   | **अभाज्य (Prime) बनाम भाज्य (Composite)** | अभाज्य: केवल $2$ गुणनखंड ($1$ व स्वयं) | **$1$ न भाज्य है न अभाज्य**; **$2$ एकमात्र सम अभाज्य संख्या है**; $1$ से $100$ तक **$25$ अभाज्य संख्याएँ** हैं। |

2. **घातांक के नियम एवं हर का परिमेयीकरण (Exponents & Surds):**
   - $a^m \\cdot a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$, **$a^0 = 1$** ($a \\ne 0$), $a^{-n} = \\frac{1}{a^n}$।
   - **हर का परिमेयीकरण शॉर्टकट:** $\\frac{1}{\\sqrt{a} \\pm \\sqrt{b}} = \\frac{\\sqrt{a} \\mp \\sqrt{b}}{a - b}$। यदि $x = 2 + \\sqrt{3}$ (जहाँ $2^2 - 3 = 1$), तो सीधे $\\frac{1}{x} = 2 - \\sqrt{3}$ तथा $x + \\frac{1}{x} = 4$!

---

### [Level I: Intermediate — यूक्लिड विभाजन प्रमेयिका, HCF/LCM एवं बहुपद (\`ett-math-2\`, \`ett-math-3\`)]
1. **यूक्लिड विभाजन प्रमेयिका (Euclid's Division Lemma) एवं HCF/LCM:**
   - **यूक्लिड विभाजन प्रमेयिका:** $a = bq + r$, जहाँ **$0 \\le r < b$**।
   - **दो संख्याओं के लिए स्वर्णिम सूत्र:** $\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$ *(यह सूत्र केवल दो संख्याओं के लिए मान्य है, तीन के लिए नहीं!)*
   - **भिन्नों का HCF तथा LCM:**
     $$\\text{भिन्नों का HCF} = \\frac{\\text{अंशों का HCF}}{\\text{हरों का LCM}}, \\qquad \\text{भिन्नों का LCM} = \\frac{\\text{अंशों का LCM}}{\\text{हरों का HCF}}$$

2. **बहुपद (Polynomials): घात, शेषफल प्रमेय एवं शून्यक (Zeros):**
   - **शेषफल प्रमेय (Remainder Theorem):** यदि $P(x)$ को $(x - a)$ से भाग दिया जाए, तो शेषफल **$P(a)$** होता है। यदि $P(a) = 0$, तो $(x - a)$ बहुपद का गुणनखंड है।
   - **द्विघात बहुपद $ax^2 + bx + c$ के शून्यक ($\\alpha, \\beta$):**
     $$\\text{शून्यकों का योग } (\\alpha + \\beta) = -\\frac{b}{a}, \\qquad \\text{शून्यकों का गुणनफल } (\\alpha\\beta) = \\frac{c}{a}$$
   - **द्विघात बहुपद बनाने का सूत्र:** $k\\left[x^2 - (\\alpha + \\beta)x + \\alpha\\beta\\right]$।

---

### [Level A: Advanced — 60-सेकंड शॉर्टकट एवं ट्रिकी प्रश्न]
1. **5-सेकंड शांत दशमलव (Terminating Decimal) शॉर्टकट:**
   - सर्वप्रथम भिन्न $p/q$ को **सरलतम रूप (Lowest Form)** में बदलें।
   - यदि हर $q$ का अभाज्य गुणनखंडन **$2^m \\times 5^n$** के रूप में है, तो दशमलव प्रसार **शांत** होगा और ठीक **$\\max(m, n)$ दशमलव स्थानों** के बाद समाप्त होगा!
   - *उदाहरण:* $\\frac{14587}{1250} = \\frac{14587}{2^1 \\times 5^4} \\implies \\max(1, 4) = \\mathbf{4}$ **दशमलव स्थानों** के बाद शांत होगा!

2. **10-सेकंड आवर्ती दशमलव से भिन्न (Recurring Decimal) शॉर्टकट:**
   - $0.\\overline{7} = \\frac{7}{9}$, $0.\\overline{35} = \\frac{35}{99}$, तथा $0.2\\overline{35} = \\frac{235 - 2}{990} = \\frac{233}{990}$।

3. **HCF एवं LCM शेषफल (Remainder) शब्द-समस्या शॉर्टकट:**
   - **वह सबसे बड़ी संख्या** जो $x, y, z$ को विभाजित करने पर क्रमशः $r_1, r_2, r_3$ शेष छोड़े $\\implies \\text{HCF}(x - r_1,\\; y - r_2,\\; z - r_3)$।
   - **वह सबसे छोटी संख्या** जिसे $x, y, z$ से विभाजित करने पर प्रत्येक दशा में $r$ शेष बचे $\\implies \\text{LCM}(x, y, z) + r$।
   - **घंटियों का एक साथ बजना / ट्रैफिक लाइट** $\\implies \\text{LCM}(t_1, t_2, t_3)$।

4. **शून्यकों की सममित सर्वसमिकाएँ (Symmetric Identities):**
   - $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\mathbf{-\\frac{b}{c}}$ तथा $\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$।`
        },
        keyNotes: {
            en: [
                'Terminating Decimal Rule: A reduced rational number p/q terminates iff q = 2^m × 5^n, and it terminates after exactly max(m, n) decimal places.',
                'Recurring Decimal Shortcut: 0.ab(bar) = ab/99; 0.a bc(bar) = (abc - a)/990 (as many 9s as repeating digits, followed by as many 0s as non-repeating decimal digits).',
                'Euclid Division Lemma & HCF-LCM: a = bq + r (0 <= r < b); for two positive integers, HCF(a, b) × LCM(a, b) = a × b; HCF always divides LCM completely.',
                'Remainder Word Problems: Greatest divisor of x, y, z leaving remainders r1, r2, r3 is HCF(x - r1, y - r2, z - r3); smallest dividend leaving remainder r is LCM(x, y, z) + r.',
                'Remainder & Factor Theorem: When polynomial P(x) is divided by (x - a), remainder is P(a); (x - a) is a factor iff P(a) = 0.',
                'Quadratic Polynomial ax^2 + bx + c: Sum of zeros (α + β) = -b/a, Product (αβ) = c/a, 1/α + 1/β = -b/c, and α^2 + β^2 = (α + β)^2 - 2αβ.'
            ],
            pa: [
                'ਸ਼ਾਂਤ ਦਸ਼ਮਲਵ ਨਿਯਮ: ਸਰਲ ਰੂਪ ਵਿੱਚ ਪਰਿਮੇਯ ਸੰਖਿਆ p/q ਸ਼ਾਂਤ ਹੋਵੇਗੀ ਜੇਕਰ q = 2^m × 5^n ਹੋਵੇ, ਅਤੇ ਇਹ ਠੀਕ max(m, n) ਦਸ਼ਮਲਵ ਸਥਾਨਾਂ ਬਾਅਦ ਖਤਮ ਹੁੰਦੀ ਹੈ।',
                'ਆਵਰਤੀ ਦਸ਼ਮਲਵ ਸ਼ਾਰਟਕੱਟ: 0.ab(bar) = ab/99; 0.a bc(bar) = (abc - a)/990 (ਜਿੰਨੇ ਅੰਕਾਂ ਉੱਤੇ ਬਾਰ ਉੰਨੇ 9, ਅਤੇ ਬਿਨਾਂ ਬਾਰ ਵਾਲੇ ਦਸ਼ਮਲਵ ਅੰਕਾਂ ਲਈ 0)।',
                'ਯੂਕਲਿਡ ਵੰਡ ਪ੍ਰਮੇਯਿਕਾ ਅਤੇ HCF-LCM: a = bq + r (0 <= r < b); ਦੋ ਸੰਖਿਆਵਾਂ ਲਈ HCF(a, b) × LCM(a, b) = a × b; HCF ਹਮੇਸ਼ਾ LCM ਨੂੰ ਪੂਰਾ ਵੰਡਦਾ ਹੈ।',
                'ਬਾਕੀ (Remainder) ਵਾਲੇ ਸਵਾਲ: x, y, z ਨੂੰ ਵੰਡਣ ਤੇ r1, r2, r3 ਬਾਕੀ ਛੱਡਣ ਵਾਲੀ ਵੱਡੀ ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ = HCF(x-r1, y-r2, z-r3); r ਬਾਕੀ ਛੱਡਣ ਵਾਲੀ ਛੋਟੀ ਸੰਖਿਆ = LCM(x, y, z) + r।',
                'ਬਾਕੀ ਅਤੇ ਗੁਣਨਖੰਡ ਪ੍ਰਮੇਯ: ਬਹੁਪਦ P(x) ਨੂੰ (x - a) ਨਾਲ ਵੰਡਣ ਤੇ ਬਾਕੀ P(a) ਹੁੰਦਾ ਹੈ; (x - a) ਗੁਣਨਖੰਡ ਹੈ ਜੇਕਰ P(a) = 0 ਹੋਵੇ।',
                'ਦੋ-ਘਾਤੀ ਬਹੁਪਦ ax^2 + bx + c: ਸਿਫ਼ਰਾਂ ਦਾ ਜੋੜ (α + β) = -b/a, ਗੁਣਨਫਲ (αβ) = c/a, 1/α + 1/β = -b/c ਅਤੇ α^2 + β^2 = (α + β)^2 - 2αβ।'
            ],
            hi: [
                'शांत दशमलव नियम: सरलतम रूप में परिमेय संख्या p/q शांत होगी यदि और केवल यदि q = 2^m × 5^n हो, और यह ठीक max(m, n) दशमलव स्थानों के बाद समाप्त होती है।',
                'आवर्ती दशमलव शॉर्टकट: 0.ab(bar) = ab/99; 0.a bc(bar) = (abc - a)/990 (जितने अंकों पर बार उतने 9, तथा बिना बार वाले दशमलव अंकों के लिए 0)।',
                'यूक्लिड विभाजन प्रमेयिका एवं HCF-LCM: a = bq + r (0 <= r < b); दो संख्याओं के लिए HCF(a, b) × LCM(a, b) = a × b; HCF सदैव LCM को पूर्णतः विभाजित करता है।',
                'शेषफल शब्द-समस्याएँ: x, y, z को भाग देने पर r1, r2, r3 शेष छोड़ने वाली सबसे बड़ी संख्या = HCF(x-r1, y-r2, z-r3); समान शेष r छोड़ने वाली सबसे छोटी संख्या = LCM(x, y, z) + r।',
                'शेषफल एवं गुणनखंड प्रमेय: बहुपद P(x) को (x - a) से भाग देने पर शेषफल P(a) होता है; (x - a) गुणनखंड होगा यदि P(a) = 0।',
                'द्विघात बहुपद ax^2 + bx + c: शून्यकों का योग (α + β) = -b/a, गुणनफल (αβ) = c/a, 1/α + 1/β = -b/c तथा α^2 + β^2 = (α + β)^2 - 2αβ।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Terminating Places Formula: For p / (2^m × 5^n) in lowest terms, number of decimal places = max(m, n) (e.g., 14587 / 1250 = 14587 / (2^1 × 5^4) -> 4 places).',
                'Fraction HCF & LCM: HCF(a/b, c/d) = HCF(a, c) / LCM(b, d); LCM(a/b, c/d) = LCM(a, c) / HCF(b, d).',
                'Prime Counts: 1 is neither prime nor composite; 2 is the smallest & only even prime; 1–50 has 15 primes; 51–100 has 10 primes (Total 1–100 = 25 primes).',
                'Reciprocal Surd Trick: If x = √a + √b with a - b = 1, then 1/x = √a - √b, x + 1/x = 2√a, and x - 1/x = 2√b.',
                'Quadratic Zeros Quick Formulas: α + β = -b/a, αβ = c/a, 1/α + 1/β = -b/c, α^2 + β^2 = (b^2 - 2ac)/a^2, P(x) = k[x^2 - (α+β)x + αβ].'
            ],
            pa: [
                'ਸ਼ਾਂਤ ਦਸ਼ਮਲਵ ਸਥਾਨ ਸੂਤਰ: ਸਰਲ ਰੂਪ p / (2^m × 5^n) ਲਈ ਦਸ਼ਮਲਵ ਸਥਾਨਾਂ ਦੀ ਗਿਣਤੀ = max(m, n) (ਜਿਵੇਂ 14587 / 1250 = 14587 / (2^1 × 5^4) -> 4 ਸਥਾਨ)।',
                'ਭਿੰਨਾਂ ਦਾ HCF ਅਤੇ LCM: HCF(a/b, c/d) = HCF(a, c) / LCM(b, d); LCM(a/b, c/d) = LCM(a, c) / HCF(b, d)।',
                'ਅਭਾਜ ਸੰਖਿਆਵਾਂ: 1 ਨਾ ਅਭਾਜ ਹੈ ਨਾ ਭਾਜ; 2 ਸਭ ਤੋਂ ਛੋਟੀ ਤੇ ਇਕਲੌਤੀ ਜਿਸਤ ਅਭਾਜ ਸੰਖਿਆ ਹੈ; 1–50 ਵਿੱਚ 15 ਅਤੇ 1–100 ਵਿੱਚ ਕੁੱਲ 25 ਅਭਾਜ ਸੰਖਿਆਵਾਂ ਹਨ।',
                'ਕਰਨੀ ਉਲਟ ਟ੍ਰਿਕ: ਜੇਕਰ x = √a + √b ਜਿੱਥੇ a - b = 1 ਹੋਵੇ, ਤਾਂ 1/x = √a - √b ਅਤੇ x + 1/x = 2√a।',
                'ਦੋ-ਘਾਤੀ ਸਿਫ਼ਰਾਂ ਦੇ ਤੇਜ਼ ਸੂਤਰ: α + β = -b/a, αβ = c/a, 1/α + 1/β = -b/c, α^2 + β^2 = (b^2 - 2ac)/a^2, P(x) = k[x^2 - (α+β)x + αβ]।'
            ],
            hi: [
                'शांत दशमलव स्थान सूत्र: सरलतम रूप p / (2^m × 5^n) के लिए दशमलव स्थानों की संख्या = max(m, n) (जैसे 14587 / 1250 = 14587 / (2^1 × 5^4) -> 4 स्थान)।',
                'भिन्नों का HCF तथा LCM: HCF(a/b, c/d) = HCF(a, c) / LCM(b, d); LCM(a/b, c/d) = LCM(a, c) / HCF(b, d)।',
                'अभाज्य संख्याएँ: 1 न भाज्य है न अभाज्य; 2 सबसे छोटी व एकमात्र सम अभाज्य संख्या है; 1–50 में 15 तथा 1–100 में कुल 25 अभाज्य संख्याएँ हैं।',
                'करणी व्युत्क्रम ट्रिक: यदि x = √a + √b जहाँ a - b = 1 हो, तो 1/x = √a - √b तथा x + 1/x = 2√a।',
                'द्विघात शून्यक त्वरित सूत्र: α + β = -b/a, αβ = c/a, 1/α + 1/β = -b/c, α^2 + β^2 = (b^2 - 2ac)/a^2, P(x) = k[x^2 - (α+β)x + αβ]।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Checking the denominator of 6/15 directly (15 = 3 × 5) and declaring it non-terminating repeating because of factor 3. Correction: Always simplify p/q to lowest terms FIRST! Since 6/15 = 2/5 = 0.4, the factor 3 cancels out and the decimal expansion is terminating.',
                'Misconception: Applying HCF(a, b, c) × LCM(a, b, c) = a × b × c for three numbers. Correction: The product rule HCF × LCM = Product of numbers holds STRICTLY for TWO numbers, NOT for three numbers.',
                'Misconception: Thinking π is a rational number because we write π = 22/7 in mensuration formulas. Correction: π is strictly an irrational number (3.14159265...); 22/7 is only a convenient rational approximation of π.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: 6/15 ਦੇ ਹਰ (15 = 3 × 5) ਵਿੱਚ 3 ਦੇਖ ਕੇ ਇਸ ਨੂੰ ਅਸ਼ਾਂਤ ਆਵਰਤੀ ਦਸ਼ਮਲਵ ਮੰਨ ਲੈਣਾ। ਸੁਧਾਰ: ਹਮੇਸ਼ਾ ਪਹਿਲਾਂ ਭਿੰਨ p/q ਨੂੰ ਸਰਲ ਰੂਪ ਵਿੱਚ ਕੱਟੋ! 6/15 = 2/5 = 0.4 ਹੈ, ਇਸ ਲਈ ਇਸ ਦਾ ਦਸ਼ਮਲਵ ਪ੍ਰਸਾਰ ਸ਼ਾਂਤ (Terminating) ਹੈ।',
                'ਭੁਲੇਖਾ: ਤਿੰਨ ਸੰਖਿਆਵਾਂ ਲਈ HCF(a, b, c) × LCM(a, b, c) = a × b × c ਲਗਾਉਣਾ। ਸੁਧਾਰ: HCF × LCM = ਸੰਖਿਆਵਾਂ ਦਾ ਗੁਣਨਫਲ ਵਾਲਾ ਨਿਯਮ ਸਿਰਫ਼ ਦੋ ਸੰਖਿਆਵਾਂ ਲਈ ਸੱਚ ਹੈ, ਤਿੰਨ ਲਈ ਨਹੀਂ।',
                'ਭੁਲੇਖਾ: π = 22/7 ਲਿਖਣ ਕਾਰਨ π ਨੂੰ ਪਰਿਮੇਯ ਸੰਖਿਆ ਮੰਨਣਾ। ਸੁਧਾਰ: π ਇੱਕ ਅਪਰਿਮੇਯ ਸੰਖਿਆ (Irrational number) ਹੈ ਜਦਕਿ 22/7 ਇੱਕ ਪਰਿਮੇਯ ਸੰਖਿਆ ਹੈ ਜੋ π ਦਾ ਸਿਰਫ਼ ਲਗਭਗ ਮੁੱਲ ਹੈ।'
            ],
            hi: [
                'भ्रांति: 6/15 के हर (15 = 3 × 5) में गुणनखंड 3 देखकर इसे अशांत आवर्ती दशमलव मान लेना। सुधार: हमेशा पहले भिन्न p/q को सरलतम रूप में काटें! चूँकि 6/15 = 2/5 = 0.4 है, अतः इसका दशमलव प्रसार शांत (Terminating) है।',
                'भ्रांति: तीन संख्याओं के लिए HCF(a, b, c) × LCM(a, b, c) = a × b × c सूत्र लगाना। सुधार: HCF × LCM = संख्याओं का गुणनफल नियम केवल दो संख्याओं के लिए सत्य है, तीन के लिए नहीं।',
                'भ्रांति: क्षेत्रमिति में π = 22/7 लिखने के कारण π को परिमेय संख्या समझना। सुधार: π एक अपरिमेय संख्या (Irrational number) है जबकि 22/7 एक परिमेय संख्या है जो केवल π का सन्निकट मान है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — 5-Second Shortcut] After how many decimal places will the decimal expansion of the rational number 14587 / 1250 terminate? Also convert 0.2353535... (0.235 bar on 35) into a fraction in lowest terms.',
                    pa: '[Easy — 5-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ] ਪਰਿਮੇਯ ਸੰਖਿਆ 14587 / 1250 ਦਾ ਦਸ਼ਮਲਵ ਪ੍ਰਸਾਰ ਕਿੰਨੇ ਦਸ਼ਮਲਵ ਸਥਾਨਾਂ ਤੋਂ ਬਾਅਦ ਸ਼ਾਂਤ (ਖਤਮ) ਹੋਵੇਗਾ? ਨਾਲ ਹੀ 0.2353535... (35 ਉੱਤੇ ਬਾਰ) ਨੂੰ ਭਿੰਨ ਵਿੱਚ ਬਦਲੋ।',
                    hi: '[Easy — 5-सेकंड शॉर्टकट] परिमेय संख्या 14587 / 1250 का दशमलव प्रसार कितने दशमलव स्थानों के बाद शांत होगा? साथ ही 0.2353535... (35 पर बार) को सरलतम भिन्न में बदलें।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Factorise denominator 1250 into primes: 1250 = 2 × 625 = 2^1 × 5^4.',
                        'Step 2: By the 5-Second Shortcut, number of decimal places = max(m, n) = max(1, 4) = 4 decimal places.',
                        'Step 3: For 0.2(35 bar), use the mixed recurring shortcut: (235 - 2) / 990 = 233 / 990.'
                    ],
                    pa: [
                        'Step 1: ਹਰ 1250 ਦੇ ਅਭਾਜ ਗੁਣਨਖੰਡ ਬਣਾਓ: 1250 = 2 × 625 = 2^1 × 5^4।',
                        'Step 2: 5-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ ਅਨੁਸਾਰ ਦਸ਼ਮਲਵ ਸਥਾਨਾਂ ਦੀ ਗਿਣਤੀ = max(1, 4) = 4 ਦਸ਼ਮਲਵ ਸਥਾਨ।',
                        'Step 3: 0.2(35 ਬਾਰ) ਲਈ ਸ਼ਾਰਟਕੱਟ ਲਗਾਓ: (235 - 2) / 990 = 233 / 990।'
                    ],
                    hi: [
                        'Step 1: हर 1250 का अभाज्य गुणनखंडन करें: 1250 = 2 × 625 = 2^1 × 5^4।',
                        'Step 2: 5-सेकंड शॉर्टकट के अनुसार दशमलव स्थानों की संख्या = max(1, 4) = 4 दशमलव स्थान।',
                        'Step 3: 0.2(35 बार) के लिए मिश्रित आवर्ती शॉर्टकट लगाएँ: (235 - 2) / 990 = 233 / 990।'
                    ]
                },
                finalAnswer: {
                    en: '4 decimal places; 233 / 990',
                    pa: '4 ਦਸ਼ਮਲਵ ਸਥਾਨ; 233 / 990',
                    hi: '4 दशमलव स्थान; 233 / 990'
                }
            },
            {
                problem: {
                    en: '[Medium — Remainder Word Problem] Find the greatest number that divides 445, 572, and 699 leaving remainders 4, 5, and 6 respectively.',
                    pa: '[Medium — ਬਾਕੀ ਵਾਲਾ ਸਵਾਲ] ਉਹ ਵੱਡੀ ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ ਪਤਾ ਕਰੋ ਜੋ 445, 572 ਅਤੇ 699 ਨੂੰ ਵੰਡਣ ਤੇ ਕ੍ਰਮਵਾਰ 4, 5 ਅਤੇ 6 ਬਾਕੀ ਛੱਡਦੀ ਹੈ।',
                    hi: '[Medium — शेषफल शब्द-समस्या] वह सबसे बड़ी संख्या ज्ञात कीजिए जो 445, 572 और 699 को विभाजित करने पर क्रमशः 4, 5 और 6 शेषफल छोड़ती है।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Subtract the respective remainders from each number: 445 - 4 = 441; 572 - 5 = 567; 699 - 6 = 693.',
                        'Step 2: Required greatest number = HCF(441, 567, 693).',
                        'Step 3: Using difference shortcut: 567 - 441 = 126 and 693 - 567 = 126. Prime factorisation: 441 = 9 × 49 = 3^2 × 7^2; 567 = 9 × 63 = 3^4 × 7; 693 = 9 × 77 = 3^2 × 7 × 11.',
                        'Step 4: Common lowest powers = 3^2 × 7 = 9 × 7 = 63.'
                    ],
                    pa: [
                        'Step 1: ਹਰੇਕ ਸੰਖਿਆ ਵਿੱਚੋਂ ਉਸ ਦਾ ਬਾਕੀ ਘਟਾਓ: 445 - 4 = 441; 572 - 5 = 567; 699 - 6 = 693।',
                        'Step 2: ਲੋੜੀਂਦੀ ਵੱਡੀ ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ = HCF(441, 567, 693)।',
                        'Step 3: ਗੁਣਨਖੰਡ ਬਣਾਉਣ ਤੇ: 441 = 63 × 7, 567 = 63 × 9, ਅਤੇ 693 = 63 × 11।',
                        'Step 4: ਇਸ ਲਈ ਮ.ਸ.ਵ. (HCF) = 63।'
                    ],
                    hi: [
                        'Step 1: प्रत्येक संख्या में से उसका संगत शेषफल घटाएँ: 445 - 4 = 441; 572 - 5 = 567; 699 - 6 = 693।',
                        'Step 2: अभीष्ट सबसे बड़ी संख्या = HCF(441, 567, 693)।',
                        'Step 3: गुणनखंड करने पर: 441 = 63 × 7, 567 = 63 × 9, तथा 693 = 63 × 11।',
                        'Step 4: अतः म.स.प. (HCF) = 63।'
                    ]
                },
                finalAnswer: {
                    en: '63',
                    pa: '63',
                    hi: '63'
                }
            },
            {
                problem: {
                    en: '[Tricky — Polynomial Zeros Shortcut] If α and β are the zeros of the quadratic polynomial P(x) = 2x^2 - 5x + 3, find the values of (i) 1/α + 1/β and (ii) α^2 + β^2 without finding α and β individually.',
                    pa: '[Tricky — ਬਹੁਪਦ ਸਿਫ਼ਰਾਂ ਸ਼ਾਰਟਕੱਟ] ਜੇਕਰ α ਅਤੇ β ਦੋ-ਘਾਤੀ ਬਹੁਪਦ P(x) = 2x^2 - 5x + 3 ਦੀਆਂ ਸਿਫ਼ਰਾਂ ਹਨ, ਤਾਂ ਬਿਨਾਂ α ਅਤੇ β ਕੱਢੇ (i) 1/α + 1/β ਅਤੇ (ii) α^2 + β^2 ਦਾ ਮੁੱਲ ਪਤਾ ਕਰੋ।',
                    hi: '[Tricky — बहुपद शून्यक शॉर्टकट] यदि α और β द्विघात बहुपद P(x) = 2x^2 - 5x + 3 के शून्यक हैं, तो α और β ज्ञात किए बिना (i) 1/α + 1/β तथा (ii) α^2 + β^2 का मान ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Here a = 2, b = -5, c = 3. So α + β = -b/a = 5/2 and αβ = c/a = 3/2.',
                        'Step 2: Using 3-Second Shortcut: 1/α + 1/β = -b/c = -(-5)/3 = 5/3.',
                        'Step 3: Using symmetric identity: α^2 + β^2 = (α + β)^2 - 2αβ = (5/2)^2 - 2(3/2) = 25/4 - 3 = 13/4.'
                    ],
                    pa: [
                        'Step 1: ਇੱਥੇ a = 2, b = -5, c = 3 ਹੈ। ਇਸ ਲਈ α + β = -b/a = 5/2 ਅਤੇ αβ = c/a = 3/2।',
                        'Step 2: 3-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ ਨਾਲ: 1/α + 1/β = -b/c = -(-5)/3 = 5/3।',
                        'Step 3: ਸਮਮਿਤਿਕ ਸੂਤਰ ਨਾਲ: α^2 + β^2 = (α + β)^2 - 2αβ = (5/2)^2 - 2(3/2) = 25/4 - 3 = 13/4।'
                    ],
                    hi: [
                        'Step 1: यहाँ a = 2, b = -5, c = 3 है। अतः α + β = -b/a = 5/2 तथा αβ = c/a = 3/2।',
                        'Step 2: 3-सेकंड शॉर्टकट से: 1/α + 1/β = -b/c = -(-5)/3 = 5/3।',
                        'Step 3: सममित सर्वसमिका से: α^2 + β^2 = (α + β)^2 - 2αβ = (5/2)^2 - 2(3/2) = 25/4 - 3 = 13/4।'
                    ]
                },
                finalAnswer: {
                    en: '(i) 1/α + 1/β = 5/3; (ii) α^2 + β^2 = 13/4',
                    pa: '(i) 1/α + 1/β = 5/3; (ii) α^2 + β^2 = 13/4',
                    hi: '(i) 1/α + 1/β = 5/3; (ii) α^2 + β^2 = 13/4'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-math-2-fc-1',
                question: {
                    en: 'What is the condition on denominator q for a rational number p/q (in lowest form) to have a terminating decimal expansion, and after how many decimal places does it terminate?',
                    pa: 'ਸਰਲ ਰੂਪ ਵਿੱਚ ਪਰਿਮੇਯ ਸੰਖਿਆ p/q ਦਾ ਦਸ਼ਮਲਵ ਪ੍ਰਸਾਰ ਸ਼ਾਂਤ ਹੋਣ ਲਈ ਹਰ q ਦੀ ਕੀ ਸ਼ਰਤ ਹੈ, ਅਤੇ ਇਹ ਕਿੰਨੇ ਦਸ਼ਮਲਵ ਸਥਾਨਾਂ ਬਾਅਦ ਖਤਮ ਹੁੰਦਾ ਹੈ?',
                    hi: 'सरलतम रूप में परिमेय संख्या p/q का दशमलव प्रसार शांत होने के लिए हर q की क्या शर्त है, और यह कितने दशमलव स्थानों के बाद समाप्त होता है?'
                },
                answer: {
                    en: 'Prime factorisation of q must be of the form 2^m × 5^n (m, n >= 0); it terminates after exactly max(m, n) decimal places.',
                    pa: 'ਹਰ q ਦੇ ਅਭਾਜ ਗੁਣਨਖੰਡ 2^m × 5^n ਦੇ ਰੂਪ ਵਿੱਚ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ; ਇਹ ਠੀਕ max(m, n) ਦਸ਼ਮਲਵ ਸਥਾਨਾਂ ਬਾਅਦ ਖਤਮ ਹੁੰਦਾ ਹੈ।',
                    hi: 'हर q का अभाज्य गुणनखंडन 2^m × 5^n के रूप का होना चाहिए; यह ठीक max(m, n) दशमलव स्थानों के बाद समाप्त होता है।'
                }
            },
            {
                id: 'ett-math-2-fc-2',
                question: {
                    en: 'If HCF(306, 657) = 9, what is LCM(306, 657)?',
                    pa: 'ਜੇਕਰ HCF(306, 657) = 9 ਹੈ, ਤਾਂ LCM(306, 657) ਪਤਾ ਕਰੋ।',
                    hi: 'यदि HCF(306, 657) = 9 है, तो LCM(306, 657) का मान क्या होगा?'
                },
                answer: {
                    en: 'LCM = (306 × 657) / 9 = 34 × 657 = 22338.',
                    pa: 'LCM = (306 × 657) / 9 = 34 × 657 = 22338।',
                    hi: 'LCM = (306 × 657) / 9 = 34 × 657 = 22338।'
                }
            },
            {
                id: 'ett-math-2-fc-3',
                question: {
                    en: 'How do you find the HCF and LCM of fractions?',
                    pa: 'ਭਿੰਨਾਂ ਦਾ ਮ.ਸ.ਵ. (HCF) ਅਤੇ ਲ.ਸ.ਵ. (LCM) ਕਿਵੇਂ ਕੱਢਿਆ ਜਾਂਦਾ ਹੈ?',
                    hi: 'भिन्नों का म.स.प. (HCF) और ल.स.प. (LCM) कैसे ज्ञात किया जाता है?'
                },
                answer: {
                    en: 'HCF of fractions = (HCF of Numerators) / (LCM of Denominators); LCM of fractions = (LCM of Numerators) / (HCF of Denominators).',
                    pa: 'ਭਿੰਨਾਂ ਦਾ HCF = (ਅੰਸ਼ਾਂ ਦਾ HCF) / (ਹਰਾਂ ਦਾ LCM); ਭਿੰਨਾਂ ਦਾ LCM = (ਅੰਸ਼ਾਂ ਦਾ LCM) / (ਹਰਾਂ ਦਾ HCF)।',
                    hi: 'भिन्नों का HCF = (अंशों का HCF) / (हरों का LCM); भिन्नों का LCM = (अंशों का LCM) / (हरों का HCF)।'
                }
            },
            {
                id: 'ett-math-2-fc-4',
                question: {
                    en: 'Convert the mixed recurring decimal 0.2353535... (bar on 35) into a vulgar fraction.',
                    pa: 'ਆਵਰਤੀ ਦਸ਼ਮਲਵ 0.2353535... (35 ਉੱਤੇ ਬਾਰ) ਨੂੰ ਸਾਧਾਰਨ ਭਿੰਨ ਵਿੱਚ ਬਦਲੋ।',
                    hi: 'मिश्रित आवर्ती दशमलव 0.2353535... (35 पर बार) को साधारण भिन्न में बदलें।'
                },
                answer: {
                    en: '(235 - 2) / 990 = 233 / 990.',
                    pa: '(235 - 2) / 990 = 233 / 990।',
                    hi: '(235 - 2) / 990 = 233 / 990।'
                }
            },
            {
                id: 'ett-math-2-fc-5',
                question: {
                    en: 'What is the direct 3-second shortcut for 1/α + 1/β if α and β are zeros of ax^2 + bx + c?',
                    pa: 'ਜੇਕਰ α ਅਤੇ β ਦੋ-ਘਾਤੀ ਬਹੁਪਦ ax^2 + bx + c ਦੀਆਂ ਸਿਫ਼ਰਾਂ ਹਨ, ਤਾਂ 1/α + 1/β ਦਾ ਸਿੱਧਾ 3-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ ਕੀ ਹੈ?',
                    hi: 'यदि α और β द्विघात बहुपद ax^2 + bx + c के शून्यक हैं, तो 1/α + 1/β का सीधा 3-सेकंड शॉर्टकट क्या है?'
                },
                answer: {
                    en: '1/α + 1/β = (α + β) / (αβ) = (-b/a) / (c/a) = -b/c.',
                    pa: '1/α + 1/β = (α + β) / (αβ) = -b/c।',
                    hi: '1/α + 1/β = (α + β) / (αβ) = -b/c।'
                }
            },
            {
                id: 'ett-math-2-fc-6',
                question: {
                    en: 'If (x - 2) is a factor of P(x) = x^3 - 3x^2 + kx - 2, what is the value of k?',
                    pa: 'ਜੇਕਰ (x - 2) ਬਹੁਪਦ P(x) = x^3 - 3x^2 + kx - 2 ਦਾ ਇੱਕ ਗੁਣਨਖੰਡ ਹੈ, ਤਾਂ k ਦਾ ਮੁੱਲ ਕੀ ਹੋਵੇਗਾ?',
                    hi: 'यदि (x - 2) बहुपद P(x) = x^3 - 3x^2 + kx - 2 का एक गुणनखंड है, तो k का मान क्या होगा?'
                },
                answer: {
                    en: 'By Factor Theorem, P(2) = 0 => 8 - 12 + 2k - 2 = 0 => 2k - 6 = 0 => k = 3.',
                    pa: 'ਗੁਣਨਖੰਡ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ P(2) = 0 => 8 - 12 + 2k - 2 = 0 => 2k = 6 => k = 3।',
                    hi: 'गुणनखंड प्रमेय के अनुसार P(2) = 0 => 8 - 12 + 2k - 2 = 0 => 2k = 6 => k = 3।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. ETT MATHEMATICS II: LINEAR EQUATIONS, QUADRATIC EQUATIONS & ARITHMETIC PROGRESSIONS
    // =========================================================================
    {
        topicId: 'ett-math-4',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 200,
            editorialNote: 'Complete ERB Punjab ETT Paper B Mathematics Unit II decoding corrupted coaching term "Two Exponential Equations" into Pair of Linear Equations in Two Variables (ett-math-4) & Quadratic Equations (ett-math-5), plus Arithmetic Progressions (ett-math-6) with 60-second shortcuts.'
        },
        bookRefs: [
            {
                title: 'PSEB / NCERT Mathematics Textbook (Class 10)',
                author: 'Punjab School Education Board (PSEB) / NCERT',
                chapter: 'Ch 3: Pair of Linear Equations in Two Variables; Ch 4: Quadratic Equations; Ch 5: Arithmetic Progressions',
                relevance: 'Core algebra unit of ETT Paper B Mathematics (5 to 6 Questions / 10–12 Marks).'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Decoding Corrupted Syllabus Term & Linear Equations (\`ett-math-4\`)]
1. **Decoding the Corrupted Coaching Term \`"Two Exponential Equations"\`:**
   - Unofficial coaching portals mistranslated the Punjabi ERB syllabus headings **ਦੋ ਚਲਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ (Linear Equations in Two Variables)** and **ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ (Quadratic Equations — literally "Two-degree/power equations")** into *"Two Exponential Equations"*. There are NO exponential equations in Class 10 PSEB/NCERT; the actual topics tested in ETT Paper B are **Pair of Linear Equations in Two Variables** and **Quadratic Equations**.

2. **Pair of Linear Equations ($a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$):**
   | Ratio Condition | Graphical Representation | Number of Solutions | System Consistency |
   |---|---|---|---|
   | **$\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}$** | **Intersecting Lines (ਕਾਟਵੀਆਂ ਰੇਖਾਵਾਂ)** | **Unique Solution (ਇੱਕ ਵਿਲੱਖਣ ਹੱਲ)** | **Consistent (ਸੰਗਤ)** |
   | **$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$** | **Coincident / Overlapping Lines (ਸੰਪਾਤੀ ਰੇਖਾਵਾਂ)** | **Infinitely Many Solutions (ਅਣਗਿਣਤ ਹੱਲ)** | **Dependent & Consistent (ਆਸ਼ਰਿਤ ਅਤੇ ਸੰਗਤ)** |
   | **$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$** | **Parallel Lines (ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ)** | **No Solution (ਕੋਈ ਹੱਲ ਨਹੀਂ)** | **Inconsistent (ਅਸੰਗਤ)** |

3. **Algebraic Solution Methods & Word-Problem Shortcuts:**
   - **Substitution, Elimination & Cross-Multiplication:**
     $$x = \\frac{b_1c_2 - b_2c_1}{a_1b_2 - a_2b_1}, \\qquad y = \\frac{c_1a_2 - c_2a_1}{a_1b_2 - a_2b_1}$$
   - **Upstream–Downstream Boat Shortcut:** If boat speed in still water $= u$ and stream speed $= v$, then Downstream speed $D = u + v$ and Upstream speed $U = u - v$. Immediately:
     $$u = \\frac{D + U}{2} \\quad \\text{(Boat speed)}, \\qquad v = \\frac{D - U}{2} \\quad \\text{(Stream speed)}$$
   - **Two-Digit Number Reversal Shortcut:** Let number be $10x + y$ and reversed number be $10y + x$.
     - **Sum of number and its reverse:** $(10x + y) + (10y + x) = 11(x + y)$ (Always divisible by **$11$**!).
     - **Difference of number and its reverse:** $|(10x + y) - (10y + x)| = 9|x - y|$ (Always divisible by **$9$**!).

---

### [Level I: Intermediate — Quadratic Equations & Arithmetic Progressions (\`ett-math-5\`, \`ett-math-6\`)]
1. **Quadratic Equations ($ax^2 + bx + c = 0,\\; a \\ne 0$):**
   - **Sridharacharya / Quadratic Formula:**
     $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
   - **Discriminant ($D = b^2 - 4ac$) & Nature of Roots Table:**
     | Value of Discriminant $D = b^2 - 4ac$ | Nature of Roots | Value of Roots |
     |---|---|---|
     | **$D > 0$** (and $D$ is a perfect square, $a,b,c \\in \\mathbb{Q}$) | Two **distinct rational** real roots | $\\frac{-b + \\sqrt{D}}{2a},\\; \\frac{-b - \\sqrt{D}}{2a}$ |
     | **$D > 0$** (not a perfect square) | Two **distinct irrational** real roots (conjugate pair $p \\pm \\sqrt{q}$) | $\\frac{-b \\pm \\sqrt{D}}{2a}$ |
     | **$D = 0$** | Two **equal (coincident) real roots** (Parabola touches x-axis at 1 point) | $x = -\\frac{b}{2a},\\; -\\frac{b}{2a}$ |
     | **$D < 0$** | **No real roots** (Imaginary / Complex roots) | Parabola does not intersect x-axis |

2. **Arithmetic Progressions (AP — ਅੰਕਗਣਿਤਕ ਲੜੀਆਂ): $a,\\; a+d,\\; a+2d,\\; \\dots$**
   - **General ($n$-th) Term from Beginning:**
     $$a_n = a + (n - 1)d$$
   - **$n$-th Term from the End** (where $l$ is the last term):
     $$a_n^{\\text{end}} = l - (n - 1)d$$
   - **Arithmetic Mean (Three numbers $a, b, c$ in AP):**
     $$b - a = c - b \\implies 2b = a + c \\implies b = \\frac{a + c}{2}$$
   - **Sum of First $n$ Terms ($S_n$):**
     $$S_n = \\frac{n}{2}\\left[2a + (n - 1)d\\right] = \\frac{n}{2}(a + l)$$
   - **Recovering $n$-th Term from Sum:** $a_n = S_n - S_{n-1}$ (for $n \\ge 2$) and $a_1 = S_1$.

---

### [Level A: Advanced — 60-Second Shortcuts for Quadratic & AP Problems]
1. **Equal-Roots Leading-Coefficient Trap Shortcut:**
   - In problems like *"Find $k$ so that $(k - 12)x^2 + 2(k - 12)x + 2 = 0$ has equal roots"*, setting $D = 4(k-12)^2 - 8(k-12) = 0$ gives $k = 12$ or $k = 14$. **Always REJECT $k = 12$** because at $k = 12$, the coefficient of $x^2$ becomes $a = 0$ (no longer a quadratic equation!). Hence $k = 14$ is the only valid answer.

2. **10-Second AP Common Difference & Zero-Term Shortcut:**
   - Given any two terms $a_p$ and $a_q$ of an AP, find $d$ directly without forming two equations:
     $$d = \\frac{a_p - a_q}{p - q}$$
   - **Classic Exam Identity:** If the $p$-th term of an AP is $q$ ($a_p = q$) and the $q$-th term is $p$ ($a_q = p$), then:
     $$d = -1, \\qquad a_n = p + q - n, \\qquad \\text{and} \\qquad a_{p+q} = 0!$$
   - If $m$ times the $m$-th term equals $n$ times the $n$-th term ($m \\cdot a_m = n \\cdot a_n$), then the **$(m + n)$-th term is always $0$** ($a_{m+n} = 0$)!

3. **5-Second Quadratic Sum $S_n = An^2 + Bn$ Shortcut:**
   - Whenever the sum of $n$ terms of an AP is given as a quadratic $S_n = An^2 + Bn$:
     - **First term:** $a_1 = S_1 = A + B$
     - **Common difference:** $d = 2A$ (**twice the coefficient of $n^2$!**)
     - **$n$-th term:** $a_n = 2An + (B - A)$
   - *Example:* If $S_n = 3n^2 + 5n$, then immediately $d = 2(3) = 6$, $a_1 = 3 + 5 = 8$, and $a_n = 6n + 2$ in 3 seconds!

4. **Standard Natural / Odd / Even Sum Formulas:**
   - Sum of first $n$ natural numbers: $1 + 2 + \\dots + n = \\frac{n(n + 1)}{2}$
   - Sum of first $n$ odd natural numbers: $1 + 3 + 5 + \\dots + (2n - 1) = \\mathbf{n^2}$
   - Sum of first $n$ even natural numbers: $2 + 4 + 6 + \\dots + 2n = \\mathbf{n(n + 1)}$`,
            pa: `### [Level B: Basic — ਸਿਲੇਬਸ ਦੇ ਅਨੁਵਾਦ ਦਾ ਸਪੱਸ਼ਟੀਕਰਨ ਅਤੇ ਰੇਖੀ ਸਮੀਕਰਨ (\`ett-math-4\`)]
1. **ਗਲਤ ਅਨੁਵਾਦ \`"Two Exponential Equations"\` ਦਾ ਅਸਲ ਅਰਥ:**
   - ਪੰਜਾਬੀ ਸਿਲੇਬਸ ਵਿੱਚ ਲਿਖੇ **ਦੋ ਚਲਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ (Linear Equations in Two Variables)** ਅਤੇ **ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ (Quadratic Equations)** ਨੂੰ ਕਈ ਕੋਚਿੰਗ ਵੈੱਬਸਾਈਟਾਂ ਨੇ ਗਲਤੀ ਨਾਲ *"Two Exponential Equations"* ਲਿਖ ਦਿੱਤਾ ਹੈ। 10ਵੀਂ ਜਮਾਤ ਦੇ PSEB/NCERT ਸਿਲੇਬਸ ਵਿੱਚ ਇਹ ਦੋਵੇਂ ਅਧਿਆਏ **ਰੇਖੀ ਸਮੀਕਰਨ ਜੋੜੇ** ਅਤੇ **ਦੋ-ਘਾਤੀ ਸਮੀਕਰਨ** ਹਨ।

2. **ਦੋ ਚਲਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ ਜੋੜੇ ($a_1x + b_1y + c_1 = 0$ ਅਤੇ $a_2x + b_2y + c_2 = 0$):**
   | ਅਨੁਪਾਤ ਸ਼ਰਤ | ਗ੍ਰਾਫਿਕਲ ਰੂਪ | ਹੱਲਾਂ ਦੀ ਗਿਣਤੀ | ਸੰਗਤ / ਅਸੰਗਤ |
   |---|---|---|---|
   | **$\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}$** | **ਕਾਟਵੀਆਂ ਰੇਖਾਵਾਂ (Intersecting)** | **ਇੱਕ ਵਿਲੱਖਣ ਹੱਲ (Unique solution)** | **ਸੰਗਤ (Consistent)** |
   | **$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$** | **ਸੰਪਾਤੀ ਰੇਖਾਵਾਂ (Coincident)** | **ਅਣਗਿਣਤ ਹੱਲ (Infinitely many)** | **ਆਸ਼ਰਿਤ ਅਤੇ ਸੰਗਤ (Consistent)** |
   | **$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$** | **ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ (Parallel)** | **ਕੋਈ ਹੱਲ ਨਹੀਂ (No solution)** | **ਅਸੰਗਤ (Inconsistent)** |

3. **ਕਿਸ਼ਤੀ-ਧਾਰਾ ਅਤੇ ਦੋ-ਅੰਕਾਂ ਵਾਲੀ ਸੰਖਿਆ ਦੇ ਸ਼ਾਰਟਕੱਟ:**
   - **ਕਿਸ਼ਤੀ ਅਤੇ ਧਾਰਾ:** ਜੇਕਰ ਵਹਾਅ ਦੀ ਦਿਸ਼ਾ ਵਿੱਚ ਚਾਲ $D$ ਅਤੇ ਉਲਟ ਦਿਸ਼ਾ ਵਿੱਚ ਚਾਲ $U$ ਹੋਵੇ, ਤਾਂ ਖੜ੍ਹੇ ਪਾਣੀ ਵਿੱਚ ਕਿਸ਼ਤੀ ਦੀ ਚਾਲ $u = \\frac{D + U}{2}$ ਅਤੇ ਧਾਰਾ ਦੀ ਚਾਲ $v = \\frac{D - U}{2}$।
   - **ਦੋ-ਅੰਕਾਂ ਵਾਲੀ ਸੰਖਿਆ ($10x + y$):** ਸੰਖਿਆ ਅਤੇ ਅੰਕ ਉਲਟਾਉਣ ਤੇ ਬਣੀ ਸੰਖਿਆ ਦਾ **ਜੋੜ $= 11(x + y)$** (ਹਮੇਸ਼ਾ $11$ ਨਾਲ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ) ਅਤੇ **ਅੰਤਰ $= 9|x - y|$** (ਹਮੇਸ਼ਾ $9$ ਨਾਲ ਵੰਡਿਆ ਜਾਂਦਾ ਹੈ)।

---

### [Level I: Intermediate — ਦੋ-ਘਾਤੀ ਸਮੀਕਰਨ ਅਤੇ ਅੰਕਗਣਿਤਕ ਲੜੀਆਂ (AP) (\`ett-math-5\`, \`ett-math-6\`)]
1. **ਦੋ-ਘਾਤੀ ਸਮੀਕਰਨ ($ax^2 + bx + c = 0,\\; a \\ne 0$):**
   - **ਦੋ-ਘਾਤੀ ਸੂਤਰ:** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$।
   - **ਡਿਸਕ੍ਰਿਮੀਨੈਂਟ (Discriminant $D = b^2 - 4ac$) ਅਤੇ ਮੂਲਾਂ ਦੀ ਪ੍ਰਕਿਰਤੀ:**
     - **$D > 0 \\implies$** ਦੋ ਭਿੰਨ ਵਾਸਤਵਿਕ ਮੂਲ (Two distinct real roots)।
     - **$D = 0 \\implies$** ਦੋ ਬਰਾਬਰ ਵਾਸਤਵਿਕ ਮੂਲ ($x = -\\frac{b}{2a}, -\\frac{b}{2a}$)।
     - **$D < 0 \\implies$** ਕੋਈ ਵਾਸਤਵਿਕ ਮੂਲ ਨਹੀਂ (No real roots)।

2. **ਅੰਕਗਣਿਤਕ ਲੜੀਆਂ (Arithmetic Progressions — AP):**
   - **ਪਹਿਲੇ ਤੋਂ $n$-ਵਾਂ ਪਦ:** $a_n = a + (n - 1)d$।
   - **ਅੰਤ ਤੋਂ $n$-ਵਾਂ ਪਦ:** $l - (n - 1)d$।
   - **ਜੇਕਰ $a, b, c$ AP ਵਿੱਚ ਹੋਣ:** $b = \\frac{a + c}{2}$ (ਅੰਕਗਣਿਤਕ ਮੱਧਮਾਨ)।
   - **ਪਹਿਲੇ $n$ ਪਦਾਂ ਦਾ ਜੋੜ:** $S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}(a + l)$।

---

### [Level A: Advanced — 60-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ (Quadratic & AP)]
1. **ਬਰਾਬਰ ਮੂਲਾਂ ਵਿੱਚ $a \\ne 0$ ਦਾ ਧਿਆਨ:** ਜੇਕਰ $(k - 12)x^2 + 2(k - 12)x + 2 = 0$ ਦੇ ਮੂਲ ਬਰਾਬਰ ਹੋਣ, ਤਾਂ $D = 0$ ਰੱਖਣ ਤੇ $k = 12$ ਜਾਂ $k = 14$ ਆਉਂਦਾ ਹੈ। **$k = 12$ ਨੂੰ ਰੱਦ ਕਰੋ** ਕਿਉਂਕਿ $k = 12$ ਨਾਲ $x^2$ ਦਾ ਗੁਣਾਂਕ $0$ ਹੋ ਜਾਂਦਾ ਹੈ! ਸਹੀ ਉੱਤਰ $k = 14$ ਹੈ।
2. **AP ਸਾਂਝਾ ਅੰਤਰ (Common Difference) 10-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ:**
   $$d = \\frac{a_p - a_q}{p - q}$$
   - ਜੇਕਰ $a_p = q$ ਅਤੇ $a_q = p$ ਹੋਵੇ, ਤਾਂ $d = -1$ ਅਤੇ **$(p + q)$-ਵਾਂ ਪਦ ਹਮੇਸ਼ਾ $0$ ਹੁੰਦਾ ਹੈ** ($a_{p+q} = 0$)!
   - ਜੇਕਰ $m \\cdot a_m = n \\cdot a_n$ ਹੋਵੇ, ਤਾਂ **$(m + n)$-ਵਾਂ ਪਦ ਹਮੇਸ਼ਾ $0$ ਹੁੰਦਾ ਹੈ** ($a_{m+n} = 0$)!
3. **5-ਸੈਕਿੰਡ $S_n = An^2 + Bn$ ਸ਼ਾਰਟਕੱਟ:** ਜੇਕਰ $S_n = An^2 + Bn$ ਦਿੱਤਾ ਹੋਵੇ, ਤਾਂ ਸਿੱਧਾ **ਸਾਂਝਾ ਅੰਤਰ $d = 2A$** ($n^2$ ਦੇ ਗੁਣਾਂਕ ਦਾ ਦੁੱਗਣਾ), ਪਹਿਲਾ ਪਦ $a_1 = A + B$, ਅਤੇ $a_n = 2An + (B - A)$!
4. **ਪਹਿਲੀਆਂ $n$ ਟਾਂਕ ਸੰਖਿਆਵਾਂ ਦਾ ਜੋੜ $= n^2$**; ਪਹਿਲੀਆਂ $n$ ਜਿਸਤ ਸੰਖਿਆਵਾਂ ਦਾ ਜੋੜ $= n(n + 1)$; ਪਹਿਲੀਆਂ $n$ ਪ੍ਰਾਕਿਰਤਿਕ ਸੰਖਿਆਵਾਂ ਦਾ ਜੋੜ $= \\frac{n(n+1)}{2}$।`,
            hi: `### [Level B: Basic — पाठ्यक्रम शब्दावली स्पष्टीकरण एवं रैखिक समीकरण (\`ett-math-4\`)]
1. **त्रुटिपूर्ण अनुवाद \`"Two Exponential Equations"\` का वास्तविक अर्थ:**
   - पंजाबी पाठ्यक्रम के **दो चलां वाले रेखी समीकरण (Linear Equations in Two Variables)** तथा **दो घाती समीकरण (Quadratic Equations)** को कई कोचिंग वेबसाइटों ने भूलवश *"Two Exponential Equations"* लिख दिया है। कक्षा 10 PSEB/NCERT के अनुसार वास्तविक अध्याय **दो चरों वाले रैखिक समीकरण युग्म** तथा **द्विघात समीकरण** हैं।

2. **दो चरों वाले रैखिक समीकरण युग्म ($a_1x + b_1y + c_1 = 0$ तथा $a_2x + b_2y + c_2 = 0$):**
   | अनुपात शर्त | ग्राफीय निरूपण | हलों की संख्या | संगत / असंगत |
   |---|---|---|---|
   | **$\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}$** | **प्रतिच्छेदी रेखाएँ (Intersecting)** | **अद्वितीय हल (Unique solution)** | **संगत (Consistent)** |
   | **$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$** | **संपाती रेखाएँ (Coincident)** | **अपरिमित रूप से अनेक हल (Infinitely many)** | **आश्रित एवं संगत (Consistent)** |
   | **$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$** | **समांतर रेखाएँ (Parallel)** | **कोई हल नहीं (No solution)** | **असंगत (Inconsistent)** |

3. **नाव-धारा एवं दो-अंकीय संख्या शॉर्टकट:**
   - **नाव और धारा:** यदि अनुकूल चाल $D$ और प्रतिकूल चाल $U$ हो, तो शांत जल में नाव की चाल $u = \\frac{D + U}{2}$ तथा धारा की चाल $v = \\frac{D - U}{2}$।
   - **दो-अंकीय संख्या ($10x + y$):** संख्या और अंक पलटने पर बनी संख्या का **योग $= 11(x + y)$** (सदैव $11$ से विभाज्य) तथा **अंतर $= 9|x - y|$** (सदैव $9$ से विभाज्य)।

---

### [Level I: Intermediate — द्विघात समीकरण एवं समांतर श्रेढ़ियाँ (AP) (\`ett-math-5\`, \`ett-math-6\`)]
1. **द्विघात समीकरण ($ax^2 + bx + c = 0,\\; a \\ne 0$):**
   - **द्विघाती सूत्र:** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$।
   - **विविक्तकर (Discriminant $D = b^2 - 4ac$) एवं मूलों की प्रकृति:**
     - **$D > 0 \\implies$** दो भिन्न वास्तविक मूल (Two distinct real roots)।
     - **$D = 0 \\implies$** दो बराबर वास्तविक मूल ($x = -\\frac{b}{2a}, -\\frac{b}{2a}$)।
     - **$D < 0 \\implies$** कोई वास्तविक मूल नहीं (No real roots)।

2. **समांतर श्रेढ़ियाँ (Arithmetic Progressions — AP):**
   - **प्रारंभ से $n$-वाँ पद:** $a_n = a + (n - 1)d$।
   - **अंत से $n$-वाँ पद:** $l - (n - 1)d$।
   - **यदि $a, b, c$ AP में हों:** $b = \\frac{a + c}{2}$ (समांतर माध्य)।
   - **प्रथम $n$ पदों का योग:** $S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}(a + l)$।

---

### [Level A: Advanced — 60-सेकंड शॉर्टकट (Quadratic & AP)]
1. **बराबर मूलों में $a \\ne 0$ की सावधानी:** यदि $(k - 12)x^2 + 2(k - 12)x + 2 = 0$ के मूल बराबर हों, तो $D = 0$ रखने पर $k = 12$ या $k = 14$ मिलता है। **$k = 12$ को अस्वीकार करें** क्योंकि $k = 12$ पर $x^2$ का गुणांक $0$ हो जाता है! सही उत्तर $k = 14$ है।
2. **AP सार्व अंतर (Common Difference) 10-सेकंड शॉर्टकट:**
   $$d = \\frac{a_p - a_q}{p - q}$$
   - यदि $a_p = q$ और $a_q = p$ हो, तो $d = -1$ और **$(p + q)$-वाँ पद सदैव $0$ होता है** ($a_{p+q} = 0$)!
   - यदि $m \\cdot a_m = n \\cdot a_n$ हो, तो **$(m + n)$-वाँ पद सदैव $0$ होता है** ($a_{m+n} = 0$)!
3. **5-सेकंड $S_n = An^2 + Bn$ शॉर्टकट:** यदि $S_n = An^2 + Bn$ दिया हो, तो सीधे **सार्व अंतर $d = 2A$** ($n^2$ के गुणांक का दोगुना), प्रथम पद $a_1 = A + B$, तथा $a_n = 2An + (B - A)$!
4. **प्रथम $n$ विषम संख्याओं का योग $= n^2$**; प्रथम $n$ सम संख्याओं का योग $= n(n + 1)$; प्रथम $n$ प्राकृत संख्याओं का योग $= \\frac{n(n+1)}{2}$।`
        },
        keyNotes: {
            en: [
                'Linear System Consistency: a1/a2 != b1/b2 -> Intersecting (Unique solution, Consistent); a1/a2 = b1/b2 = c1/c2 -> Coincident (Infinite solutions, Consistent); a1/a2 = b1/b2 != c1/c2 -> Parallel (No solution, Inconsistent).',
                'Quadratic Discriminant D = b^2 - 4ac: D > 0 gives two distinct real roots; D = 0 gives two equal real roots (-b/2a); D < 0 gives no real roots.',
                'AP General Term: a_n = a + (n - 1)d from beginning; l - (n - 1)d from the end; common difference shortcut d = (a_p - a_q) / (p - q).',
                'AP Sum Formulas: S_n = (n/2)[2a + (n - 1)d] = (n/2)(a + l), and a_n = S_n - S_{n-1}.',
                '5-Second Quadratic Sum Shortcut: If S_n = An^2 + Bn, then first term a_1 = A + B, common difference d = 2A, and a_n = 2An + (B - A).',
                'Standard Sums: First n natural numbers = n(n+1)/2; first n odd numbers = n^2; first n even numbers = n(n+1).'
            ],
            pa: [
                'ਰੇਖੀ ਸਮੀਕਰਨ ਸ਼ਰਤਾਂ: a1/a2 != b1/b2 -> ਕਾਟਵੀਆਂ ਰੇਖਾਵਾਂ (ਇੱਕ ਵਿਲੱਖਣ ਹੱਲ, ਸੰਗਤ); a1/a2 = b1/b2 = c1/c2 -> ਸੰਪਾਤੀ ਰੇਖਾਵਾਂ (ਅਣਗਿਣਤ ਹੱਲ, ਸੰਗਤ); a1/a2 = b1/b2 != c1/c2 -> ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ (ਕੋਈ ਹੱਲ ਨਹੀਂ, ਅਸੰਗਤ)।',
                'ਦੋ-ਘਾਤੀ ਡਿਸਕ੍ਰਿਮੀਨੈਂਟ D = b^2 - 4ac: D > 0 (ਦੋ ਭਿੰਨ ਵਾਸਤਵਿਕ ਮੂਲ); D = 0 (ਦੋ ਬਰਾਬਰ ਮੂਲ -b/2a); D < 0 (ਕੋਈ ਵਾਸਤਵਿਕ ਮੂਲ ਨਹੀਂ)।',
                'AP ਦਾ n-ਵਾਂ ਪਦ: ਸ਼ੁਰੂ ਤੋਂ a_n = a + (n - 1)d; ਅੰਤ ਤੋਂ l - (n - 1)d; ਸਾਂਝਾ ਅੰਤਰ ਸ਼ਾਰਟਕੱਟ d = (a_p - a_q) / (p - q)।',
                'AP ਜੋੜ ਸੂਤਰ: S_n = (n/2)[2a + (n - 1)d] = (n/2)(a + l), ਅਤੇ a_n = S_n - S_{n-1}।',
                '5-ਸੈਕਿੰਡ S_n = An^2 + Bn ਸ਼ਾਰਟਕੱਟ: ਪਹਿਲਾ ਪਦ a_1 = A + B, ਸਾਂਝਾ ਅੰਤਰ d = 2A, ਅਤੇ n-ਵਾਂ ਪਦ a_n = 2An + (B - A)।',
                'ਮਿਆਰੀ ਜੋੜ: ਪਹਿਲੀਆਂ n ਪ੍ਰਾਕਿਰਤਿਕ ਸੰਖਿਆਵਾਂ = n(n+1)/2; ਪਹਿਲੀਆਂ n ਟਾਂਕ ਸੰਖਿਆਵਾਂ = n^2; ਪਹਿਲੀਆਂ n ਜਿਸਤ ਸੰਖਿਆਵਾਂ = n(n+1)।'
            ],
            hi: [
                'रैखिक समीकरण शर्तें: a1/a2 != b1/b2 -> प्रतिच्छेदी रेखाएँ (अद्वितीय हल, संगत); a1/a2 = b1/b2 = c1/c2 -> संपाती रेखाएँ (अनेक हल, संगत); a1/a2 = b1/b2 != c1/c2 -> समांतर रेखाएँ (कोई हल नहीं, असंगत)।',
                'द्विघात विविक्तकर D = b^2 - 4ac: D > 0 (दो भिन्न वास्तविक मूल); D = 0 (दो बराबर मूल -b/2a); D < 0 (कोई वास्तविक मूल नहीं)।',
                'AP का n-वाँ पद: प्रारंभ से a_n = a + (n - 1)d; अंत से l - (n - 1)d; सार्व अंतर शॉर्टकट d = (a_p - a_q) / (p - q)।',
                'AP योग सूत्र: S_n = (n/2)[2a + (n - 1)d] = (n/2)(a + l), तथा a_n = S_n - S_{n-1}।',
                '5-सेकंड S_n = An^2 + Bn शॉर्टकट: प्रथम पद a_1 = A + B, सार्व अंतर d = 2A, तथा n-वाँ पद a_n = 2An + (B - A)।',
                'मानक योग: प्रथम n प्राकृत संख्याएँ = n(n+1)/2; प्रथम n विषम संख्याएँ = n^2; प्रथम n सम संख्याएँ = n(n+1)।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'No-Solution Trap: For kx + 3y = k - 3 and 12x + ky = k, a1/a2 = b1/b2 gives k^2 = 36 => k = ±6. At k = 6 both ratios equal c1/c2 (infinite solutions), whereas at k = -6, a1/a2 = b1/b2 != c1/c2 (no solution!).',
                'Boat & Stream Formula: Boat speed in still water u = (Downstream + Upstream)/2; Stream speed v = (Downstream - Upstream)/2.',
                'AP Zero-Term Tricks: If a_p = q and a_q = p, then d = -1 and a_{p+q} = 0; if m·a_m = n·a_n, then a_{m+n} = 0.',
                'Quadratic Sum S_n = An^2 + Bn: Common difference d is ALWAYS 2A (double the coefficient of n^2).',
                'Three/Four Terms Selection in AP: For 3 terms with given sum, choose (a - d, a, a + d); for 4 terms, choose (a - 3d, a - d, a + d, a + 3d).'
            ],
            pa: [
                'ਕੋਈ ਹੱਲ ਨਹੀਂ (No-Solution) ਟ੍ਰੈਪ: kx + 3y = k - 3 ਅਤੇ 12x + ky = k ਲਈ k^2 = 36 => k = ±6। k = 6 ਤੇ ਅਣਗਿਣਤ ਹੱਲ ਹਨ, ਜਦਕਿ k = -6 ਤੇ ਕੋਈ ਹੱਲ ਨਹੀਂ (No solution)!',
                'ਕਿਸ਼ਤੀ ਅਤੇ ਧਾਰਾ ਸੂਤਰ: ਖੜ੍ਹੇ ਪਾਣੀ ਵਿੱਚ ਕਿਸ਼ਤੀ ਦੀ ਚਾਲ u = (D + U)/2; ਧਾਰਾ ਦੀ ਚਾਲ v = (D - U)/2।',
                'AP ਸਿਫ਼ਰ-ਪਦ ਟ੍ਰਿਕਸ: ਜੇਕਰ a_p = q ਅਤੇ a_q = p ਹੋਵੇ, ਤਾਂ d = -1 ਅਤੇ a_{p+q} = 0; ਜੇਕਰ m·a_m = n·a_n ਹੋਵੇ, ਤਾਂ a_{m+n} = 0।',
                'S_n = An^2 + Bn ਟ੍ਰਿਕ: ਸਾਂਝਾ ਅੰਤਰ d ਹਮੇਸ਼ਾ 2A (n^2 ਦੇ ਗੁਣਾਂਕ ਦਾ ਦੁੱਗਣਾ) ਹੁੰਦਾ ਹੈ।',
                'AP ਵਿੱਚ ਪਦ ਮੰਨਣ ਦੀ ਟ੍ਰਿਕ: 3 ਪਦਾਂ ਲਈ (a - d, a, a + d) ਅਤੇ 4 ਪਦਾਂ ਲਈ (a - 3d, a - d, a + d, a + 3d) ਲਓ।'
            ],
            hi: [
                'कोई हल नहीं (No-Solution) ट्रैप: kx + 3y = k - 3 और 12x + ky = k के लिए k^2 = 36 => k = ±6। k = 6 पर अनंत हल हैं, जबकि k = -6 पर कोई हल नहीं (No solution)!',
                'नाव एवं धारा सूत्र: शांत जल में नाव की चाल u = (D + U)/2; धारा की चाल v = (D - U)/2।',
                'AP शून्य-पद ट्रिक्स: यदि a_p = q और a_q = p हो, तो d = -1 तथा a_{p+q} = 0; यदि m·a_m = n·a_n हो, तो a_{m+n} = 0।',
                'S_n = An^2 + Bn ट्रिक: सार्व अंतर d सदैव 2A (n^2 के गुणांक का दोगुना) होता है।',
                'AP में पद मानने की ट्रिक: 3 पदों के लिए (a - d, a, a + d) तथा 4 पदों के लिए (a - 3d, a - d, a + d, a + 3d) लें।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Thinking a system with infinitely many solutions (coincident lines) is inconsistent. Correction: Both Unique Solution (intersecting) and Infinitely Many Solutions (coincident) are CONSISTENT because at least one solution exists; only Parallel Lines (no solution) are INCONSISTENT.',
                'Misconception: Accepting k = 12 in (k - 12)x^2 + 2(k - 12)x + 2 = 0 for equal roots. Correction: A quadratic equation ax^2 + bx + c = 0 strictly requires a != 0. At k = 12, the x^2 term vanishes leaving 2 = 0 (impossible), so only k = 14 is valid.',
                'Misconception: Using a + (n - 1)d to find the n-th term from the END of an AP. Correction: The n-th term from the end of an AP with last term l is l - (n - 1)d (with a minus sign!).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਅਣਗਿਣਤ ਹੱਲਾਂ (ਸੰਪਾਤੀ ਰੇਖਾਵਾਂ) ਵਾਲੇ ਸਮੀਕਰਨ ਜੋੜੇ ਨੂੰ ਅਸੰਗਤ (Inconsistent) ਮੰਨਣਾ। ਸੁਧਾਰ: ਇੱਕ ਹੱਲ ਅਤੇ ਅਣਗਿਣਤ ਹੱਲ ਦੋਵੇਂ ਸੰਗਤ (Consistent) ਹੁੰਦੇ ਹਨ; ਸਿਰਫ਼ ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ (ਕੋਈ ਹੱਲ ਨਹੀਂ) ਹੀ ਅਸੰਗਤ ਹੁੰਦੀਆਂ ਹਨ।',
                'ਭੁਲੇਖਾ: ਬਰਾਬਰ ਮੂਲਾਂ ਲਈ (k - 12)x^2 + 2(k - 12)x + 2 = 0 ਵਿੱਚ k = 12 ਨੂੰ ਸਹੀ ਮੰਨ ਲੈਣਾ। ਸੁਧਾਰ: ਦੋ-ਘਾਤੀ ਸਮੀਕਰਨ ਵਿੱਚ a != 0 ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ। k = 12 ਰੱਖਣ ਤੇ x^2 ਵਾਲਾ ਪਦ ਖਤਮ ਹੋ ਜਾਂਦਾ ਹੈ, ਇਸ ਲਈ ਸਿਰਫ਼ k = 14 ਹੀ ਸਹੀ ਹੈ।',
                'ਭੁਲੇਖਾ: AP ਦੇ ਅੰਤ (End) ਤੋਂ n-ਵਾਂ ਪਦ ਕੱਢਣ ਲਈ a + (n - 1)d ਲਗਾਉਣਾ। ਸੁਧਾਰ: ਅੰਤਿਮ ਪਦ l ਤੋਂ n-ਵਾਂ ਪਦ ਕੱਢਣ ਦਾ ਸੂਤਰ l - (n - 1)d ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: अनंत हलों (संपाती रेखाओं) वाले समीकरण युग्म को असंगत (Inconsistent) समझना। सुधार: अद्वितीय हल और अनंत हल दोनों संगत (Consistent) होते हैं; केवल समांतर रेखाएँ (कोई हल नहीं) ही असंगत होती हैं।',
                'भ्रांति: बराबर मूलों के लिए (k - 12)x^2 + 2(k - 12)x + 2 = 0 में k = 12 को स्वीकार करना। सुधार: द्विघात समीकरण में a != 0 होना अनिवार्य है। k = 12 पर x^2 का पद शून्य हो जाता है, अतः केवल k = 14 ही मान्य है।',
                'भ्रांति: AP के अंत (End) से n-वाँ पद ज्ञात करने के लिए a + (n - 1)d लगाना। सुधार: अंतिम पद l से n-वाँ पद ज्ञात करने का सूत्र l - (n - 1)d होता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — Consistency Condition] For what value of k will the pair of linear equations 3x + y = 1 and (2k - 1)x + (k - 1)y = 2k + 1 have NO solution?',
                    pa: '[Easy — ਅਸੰਗਤ ਸਮੀਕਰਨ ਸ਼ਰਤ] k ਦੇ ਕਿਸ ਮੁੱਲ ਲਈ ਰੇਖੀ ਸਮੀਕਰਨ ਜੋੜੇ 3x + y = 1 ਅਤੇ (2k - 1)x + (k - 1)y = 2k + 1 ਦਾ ਕੋਈ ਹੱਲ ਨਹੀਂ (No solution) ਹੋਵੇਗਾ?',
                    hi: '[Easy — असंगत समीकरण शर्त] k के किस मान के लिए रैखिक समीकरण युग्म 3x + y = 1 तथा (2k - 1)x + (k - 1)y = 2k + 1 का कोई हल नहीं (No solution) होगा?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Condition for no solution (parallel lines) is a1/a2 = b1/b2 != c1/c2.',
                        'Step 2: Substituting coefficients: 3 / (2k - 1) = 1 / (k - 1) != 1 / (2k + 1).',
                        'Step 3: Cross-multiplying first two ratios: 3(k - 1) = 2k - 1 => 3k - 3 = 2k - 1 => k = 2.',
                        'Step 4: Check c1/c2 at k = 2: a1/a2 = 3/3 = 1, while c1/c2 = 1/5 != 1. Condition satisfied!'
                    ],
                    pa: [
                        'Step 1: ਕੋਈ ਹੱਲ ਨਾ ਹੋਣ (ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ) ਦੀ ਸ਼ਰਤ a1/a2 = b1/b2 != c1/c2 ਹੈ।',
                        'Step 2: ਗੁਣਾਂਕ ਭਰਨ ਤੇ: 3 / (2k - 1) = 1 / (k - 1) != 1 / (2k + 1)।',
                        'Step 3: ਤਿਰਛੀ ਗੁਣਾ ਕਰਨ ਤੇ: 3(k - 1) = 2k - 1 => 3k - 3 = 2k - 1 => k = 2।',
                        'Step 4: k = 2 ਤੇ c1/c2 = 1/5 != 1 ਹੈ, ਇਸ ਲਈ k = 2 ਸਹੀ ਉੱਤਰ ਹੈ।'
                    ],
                    hi: [
                        'Step 1: कोई हल न होने (समांतर रेखाओं) की शर्त a1/a2 = b1/b2 != c1/c2 है।',
                        'Step 2: गुणांक रखने पर: 3 / (2k - 1) = 1 / (k - 1) != 1 / (2k + 1)।',
                        'Step 3: वज्र-गुणन करने पर: 3(k - 1) = 2k - 1 => 3k - 3 = 2k - 1 => k = 2।',
                        'Step 4: k = 2 पर c1/c2 = 1/5 != 1 है, अतः k = 2 सही उत्तर है।'
                    ]
                },
                finalAnswer: {
                    en: 'k = 2',
                    pa: 'k = 2',
                    hi: 'k = 2'
                }
            },
            {
                problem: {
                    en: '[Medium — 5-Second AP Quadratic Sum Shortcut] If the sum of the first n terms of an AP is given by S_n = 3n^2 + 5n, find its common difference d and its 25th term (a_25).',
                    pa: '[Medium — 5-ਸੈਕਿੰਡ AP ਜੋੜ ਸ਼ਾਰਟਕੱਟ] ਜੇਕਰ ਕਿਸੇ AP ਦੇ ਪਹਿਲੇ n ਪਦਾਂ ਦਾ ਜੋੜ S_n = 3n^2 + 5n ਹੈ, ਤਾਂ ਉਸ ਦਾ ਸਾਂਝਾ ਅੰਤਰ d ਅਤੇ 25ਵਾਂ ਪਦ (a_25) ਪਤਾ ਕਰੋ।',
                    hi: '[Medium — 5-सेकंड AP योग शॉर्टकट] यदि किसी AP के प्रथम n पदों का योग S_n = 3n^2 + 5n है, तो उसका सार्व अंतर d तथा 25वाँ पद (a_25) ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Comparing S_n = 3n^2 + 5n with An^2 + Bn, we have A = 3 and B = 5.',
                        'Step 2: By the 5-Second Shortcut: First term a_1 = A + B = 3 + 5 = 8, and common difference d = 2A = 2(3) = 6.',
                        'Step 3: General term a_n = 2An + (B - A) = 6n + 2. Putting n = 25: a_25 = 6(25) + 2 = 152.'
                    ],
                    pa: [
                        'Step 1: S_n = 3n^2 + 5n ਦੀ ਤੁਲਨਾ An^2 + Bn ਨਾਲ ਕਰਨ ਤੇ A = 3 ਅਤੇ B = 5 ਹੈ।',
                        'Step 2: 5-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ ਅਨੁਸਾਰ: ਪਹਿਲਾ ਪਦ a_1 = A + B = 8 ਅਤੇ ਸਾਂਝਾ ਅੰਤਰ d = 2A = 2(3) = 6।',
                        'Step 3: n-ਵਾਂ ਪਦ a_n = 2An + (B - A) = 6n + 2। n = 25 ਭਰਨ ਤੇ: a_25 = 6(25) + 2 = 152।'
                    ],
                    hi: [
                        'Step 1: S_n = 3n^2 + 5n की तुलना An^2 + Bn से करने पर A = 3 तथा B = 5 है।',
                        'Step 2: 5-सेकंड शॉर्टकट से: प्रथम पद a_1 = A + B = 8 तथा सार्व अंतर d = 2A = 2(3) = 6।',
                        'Step 3: n-वाँ पद a_n = 2An + (B - A) = 6n + 2। n = 25 रखने पर: a_25 = 6(25) + 2 = 152।'
                    ]
                },
                finalAnswer: {
                    en: 'd = 6 and a_25 = 152',
                    pa: 'd = 6 ਅਤੇ a_25 = 152',
                    hi: 'd = 6 तथा a_25 = 152'
                }
            },
            {
                problem: {
                    en: '[Tricky — Equal Roots Trap] Find the non-zero value of k for which the quadratic equation (k - 12)x^2 + 2(k - 12)x + 2 = 0 has two real and equal roots.',
                    pa: '[Tricky — ਬਰਾਬਰ ਮੂਲ ਟ੍ਰੈਪ] k ਦਾ ਉਹ ਮੁੱਲ ਪਤਾ ਕਰੋ ਜਿਸ ਲਈ ਦੋ-ਘਾਤੀ ਸਮੀਕਰਨ (k - 12)x^2 + 2(k - 12)x + 2 = 0 ਦੇ ਦੋ ਵਾਸਤਵਿਕ ਅਤੇ ਬਰਾਬਰ ਮੂਲ ਹੋਣ।',
                    hi: '[Tricky — बराबर मूल ट्रैप] k का वह मान ज्ञात कीजिए जिसके लिए द्विघात समीकरण (k - 12)x^2 + 2(k - 12)x + 2 = 0 के मूल वास्तविक तथा बराबर हों।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Here a = k - 12, b = 2(k - 12), and c = 2. For equal roots, Discriminant D = b^2 - 4ac = 0.',
                        'Step 2: [2(k - 12)]^2 - 4(k - 12)(2) = 0 => 4(k - 12)^2 - 8(k - 12) = 0.',
                        'Step 3: Factoring out 4(k - 12): 4(k - 12)[(k - 12) - 2] = 0 => 4(k - 12)(k - 14) = 0.',
                        'Step 4: Since a = k - 12 != 0 for a valid quadratic equation, reject k = 12. Therefore k = 14.'
                    ],
                    pa: [
                        'Step 1: ਇੱਥੇ a = k - 12, b = 2(k - 12), c = 2 ਹੈ। ਬਰਾਬਰ ਮੂਲਾਂ ਲਈ D = b^2 - 4ac = 0।',
                        'Step 2: 4(k - 12)^2 - 8(k - 12) = 0 => 4(k - 12)(k - 14) = 0।',
                        'Step 3: ਦੋ-ਘਾਤੀ ਸਮੀਕਰਨ ਲਈ a = k - 12 != 0 ਹੋਣਾ ਜ਼ਰੂਰੀ ਹੈ, ਇਸ ਲਈ k = 12 ਰੱਦ ਹੋ ਜਾਂਦਾ ਹੈ।',
                        'Step 4: ਇਸ ਲਈ ਸਹੀ ਉੱਤਰ k = 14 ਹੈ।'
                    ],
                    hi: [
                        'Step 1: यहाँ a = k - 12, b = 2(k - 12), c = 2 है। बराबर मूलों के लिए D = b^2 - 4ac = 0।',
                        'Step 2: 4(k - 12)^2 - 8(k - 12) = 0 => 4(k - 12)(k - 14) = 0।',
                        'Step 3: द्विघात समीकरण के लिए a = k - 12 != 0 होना अनिवार्य है, इसलिए k = 12 अमान्य है।',
                        'Step 4: अतः सही उत्तर k = 14 है।'
                    ]
                },
                finalAnswer: {
                    en: 'k = 14 (k = 12 is rejected since a != 0)',
                    pa: 'k = 14 (k = 12 ਰੱਦ ਹੈ ਕਿਉਂਕਿ a != 0)',
                    hi: 'k = 14 (k = 12 अमान्य है क्योंकि a != 0)'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-math-4-fc-1',
                question: {
                    en: 'What does the corrupted syllabus phrase "Two Exponential Equations" actually correspond to in the official Punjabi ETT Paper B syllabus?',
                    pa: 'ਅੰਗਰੇਜ਼ੀ ਅਨੁਵਾਦ ਵਿੱਚ ਲਿਖੇ "Two Exponential Equations" ਦਾ ਪੰਜਾਬੀ ETT ਸਿਲੇਬਸ ਵਿੱਚ ਅਸਲ ਅਰਥ ਕੀ ਹੈ?',
                    hi: 'अंग्रेजी अनुवाद में लिखे "Two Exponential Equations" का पंजाबी ETT पाठ्यक्रम में वास्तविक अर्थ क्या है?'
                },
                answer: {
                    en: 'Pair of Linear Equations in Two Variables (ਦੋ ਚਲਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ) and Quadratic Equations (ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ).',
                    pa: 'ਦੋ ਚਲਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ (Linear Equations in Two Variables) ਅਤੇ ਦੋ ਘਾਤੀ ਸਮੀਕਰਨ (Quadratic Equations)।',
                    hi: 'दो चरों वाले रैखिक समीकरण युग्म (Linear Equations in Two Variables) और द्विघात समीकरण (Quadratic Equations)।'
                }
            },
            {
                id: 'ett-math-4-fc-2',
                question: {
                    en: 'What is the ratio condition for a pair of linear equations to represent parallel lines (inconsistent system with no solution)?',
                    pa: 'ਦੋ ਚਲਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ ਜੋੜੇ ਦੀਆਂ ਰੇਖਾਵਾਂ ਸਮਾਂਤਰ (ਕੋਈ ਹੱਲ ਨਹੀਂ / ਅਸੰਗਤ) ਹੋਣ ਦੀ ਸ਼ਰਤ ਕੀ ਹੈ?',
                    hi: 'दो चरों वाले रैखिक समीकरण युग्म की रेखाएँ समांतर (कोई हल नहीं / असंगत) होने की अनुपात शर्त क्या है?'
                },
                answer: {
                    en: 'a1/a2 = b1/b2 != c1/c2.',
                    pa: 'a1/a2 = b1/b2 != c1/c2।',
                    hi: 'a1/a2 = b1/b2 != c1/c2।'
                }
            },
            {
                id: 'ett-math-4-fc-3',
                question: {
                    en: 'If the 7th term of an AP is 15 and the 15th term is 7, what is its 22nd term?',
                    pa: 'ਜੇਕਰ ਕਿਸੇ AP ਦਾ 7ਵਾਂ ਪਦ 15 ਹੈ ਅਤੇ 15ਵਾਂ ਪਦ 7 ਹੈ, ਤਾਂ ਉਸ ਦਾ 22ਵਾਂ ਪਦ ਕੀ ਹੋਵੇਗਾ?',
                    hi: 'यदि किसी AP का 7वाँ पद 15 है और 15वाँ पद 7 है, तो उसका 22वाँ पद क्या होगा?'
                },
                answer: {
                    en: '0 (By shortcut: if a_p = q and a_q = p, then a_{p+q} = a_{7+15} = a_22 = 0).',
                    pa: '0 (ਸ਼ਾਰਟਕੱਟ: ਜੇਕਰ a_p = q ਅਤੇ a_q = p ਹੋਵੇ, ਤਾਂ a_{p+q} = a_{7+15} = a_22 = 0)।',
                    hi: '0 (शॉर्टकट: यदि a_p = q और a_q = p हो, तो a_{p+q} = a_{7+15} = a_22 = 0)।'
                }
            },
            {
                id: 'ett-math-4-fc-4',
                question: {
                    en: 'How many two-digit numbers are divisible by 3?',
                    pa: '3 ਨਾਲ ਵੰਡੀਆਂ ਜਾਣ ਵਾਲੀਆਂ ਦੋ-ਅੰਕਾਂ ਦੀਆਂ ਕੁੱਲ ਕਿੰਨੀਆਂ ਸੰਖਿਆਵਾਂ ਹਨ?',
                    hi: '3 से विभाज्य दो अंकों वाली कुल कितनी संख्याएँ हैं?'
                },
                answer: {
                    en: '30 numbers (AP: 12, 15, 18, ..., 99 => 99 = 12 + (n - 1)3 => 87/3 = n - 1 => n = 30).',
                    pa: '30 ਸੰਖਿਆਵਾਂ (AP: 12, 15, ..., 99 => n = (99 - 12)/3 + 1 = 29 + 1 = 30)।',
                    hi: '30 संख्याएँ (AP: 12, 15, ..., 99 => n = (99 - 12)/3 + 1 = 29 + 1 = 30)।'
                }
            },
            {
                id: 'ett-math-4-fc-5',
                question: {
                    en: 'What is the sum of the first n odd natural numbers and the first n even natural numbers?',
                    pa: 'ਪਹਿਲੀਆਂ n ਟਾਂਕ (Odd) ਪ੍ਰਾਕਿਰਤਿਕ ਸੰਖਿਆਵਾਂ ਅਤੇ ਪਹਿਲੀਆਂ n ਜਿਸਤ (Even) ਪ੍ਰਾਕਿਰਤਿਕ ਸੰਖਿਆਵਾਂ ਦਾ ਜੋੜ ਕੀ ਹੁੰਦਾ ਹੈ?',
                    hi: 'प्रथम n विषम (Odd) प्राकृत संख्याओं तथा प्रथम n सम (Even) प्राकृत संख्याओं का योग क्या होता है?'
                },
                answer: {
                    en: 'Sum of first n odd natural numbers = n^2; Sum of first n even natural numbers = n(n + 1).',
                    pa: 'ਪਹਿਲੀਆਂ n ਟਾਂਕ ਸੰਖਿਆਵਾਂ ਦਾ ਜੋੜ = n^2; ਪਹਿਲੀਆਂ n ਜਿਸਤ ਸੰਖਿਆਵਾਂ ਦਾ ਜੋੜ = n(n + 1)।',
                    hi: 'प्रथम n विषम संख्याओं का योग = n^2; प्रथम n सम संख्याओं का योग = n(n + 1)।'
                }
            },
            {
                id: 'ett-math-4-fc-6',
                question: {
                    en: 'If the sum of n terms of an AP is S_n = 4n^2 - n, what is its common difference d?',
                    pa: 'ਜੇਕਰ ਕਿਸੇ AP ਦੇ n ਪਦਾਂ ਦਾ ਜੋੜ S_n = 4n^2 - n ਹੈ, ਤਾਂ ਉਸ ਦਾ ਸਾਂਝਾ ਅੰਤਰ d ਕੀ ਹੋਵੇਗਾ?',
                    hi: 'यदि किसी AP के n पदों का योग S_n = 4n^2 - n है, तो उसका सार्व अंतर d क्या होगा?'
                },
                answer: {
                    en: 'd = 2A = 2 × 4 = 8 (twice the coefficient of n^2).',
                    pa: 'd = 2A = 2 × 4 = 8 (n^2 ਦੇ ਗੁਣਾਂਕ ਦਾ ਦੁੱਗਣਾ)।',
                    hi: 'd = 2A = 2 × 4 = 8 (n^2 के गुणांक का दोगुना)।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. ETT MATHEMATICS III: COORDINATE GEOMETRY, TRIANGLES, CIRCLES, TRIGONOMETRY & 3D MENSURATION
    // =========================================================================
    {
        topicId: 'ett-math-11',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 200,
            editorialNote: 'Complete ERB Punjab ETT Paper B Mathematics Unit III decoding "Directional Numerals" into Coordinate Geometry (ett-math-11), Euclidean Geometry, Lines, Triangles, Quadrilaterals & Circles (ett-math-7 to ett-math-10, ett-math-13), Trigonometry (ett-math-12), Heron Formula & 3D Mensuration (ett-math-14 to ett-math-16).'
        },
        bookRefs: [
            {
                title: 'PSEB / NCERT Mathematics Textbooks (Class 9 & Class 10)',
                author: 'Punjab School Education Board (PSEB) / NCERT',
                chapter: 'Coordinate Geometry, Triangles, Circles, Introduction to Trigonometry, Areas Related to Circles, Heron Formula, Surface Areas & Volumes',
                relevance: 'Largest weightage block in ETT Paper B Mathematics (8 to 10 Questions / 16–20 Marks).'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Decoding \`"Directional Numerals"\` (Coordinate Geometry \`ett-math-11\`) & Euclidean Geometry (\`ett-math-7\` to \`ett-math-10\`)]
1. **Decoding Corrupted Coaching Term \`"Directional Numerals"\` $\\to$ ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ (Coordinate Geometry):**
   - Literally translating **ਨਿਰਦੇਸ਼ (Directional) + ਅੰਕ (Numerals)** produced the nonsensical phrase *"Directional Numerals"* on coaching websites! The official topic is **Coordinate Geometry (ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ)**:
   - **Abscissa ($x$-coordinate):** perpendicular distance from the **$y$-axis**; **Ordinate ($y$-coordinate):** perpendicular distance from the **$x$-axis** (Point on $x$-axis is $(x, 0)$; on $y$-axis is $(0, y)$).
   - **Distance Formula:** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$; Distance from origin $(0,0) = \\sqrt{x^2 + y^2}$.
   - **Section Formula (internal ratio $m_1 : m_2$):**
     $$P(x, y) = \\left(\\frac{m_1x_2 + m_2x_1}{m_1 + m_2},\\; \\frac{m_1y_2 + m_2y_1}{m_1 + m_2}\\right)$$
   - **Midpoint Formula ($1:1$):** $\\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)$.
   - **Centroid of $\\triangle ABC$ (Intersection of Medians in $2:1$ ratio):** $G = \\left(\\frac{x_1 + x_2 + x_3}{3},\\; \\frac{y_1 + y_2 + y_3}{3}\\right)$.
   - **4th Vertex of a Parallelogram $ABCD$ Shortcut:** Since diagonals bisect each other, **$D = A + C - B$**, i.e., $x_4 = x_1 + x_3 - x_2$ and $y_4 = y_1 + y_3 - y_2$!
   - **Area of $\\triangle ABC$:** $\\Delta = \\frac{1}{2}\\left|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\\right|$ (Points are **collinear** iff $\\Delta = 0$).

2. **Lines, Angles, Polygons, Triangles & Circles (\`ett-math-7\` to \`ett-math-10\`, \`ett-math-13\`):**
   - **Complementary Angles:** Sum $= 90^\\circ$; **Supplementary Angles:** Sum $= 180^\\circ$.
   - **Regular Polygon ($n$ sides):** Sum of interior angles $= (n - 2) \\times 180^\\circ$; Each interior angle $= \\frac{(n-2)\\times 180^\\circ}{n}$; Sum of exterior angles $= 360^\\circ$; Each exterior angle $= \\frac{360^\\circ}{n}$; Number of diagonals $= \\frac{n(n - 3)}{2}$.
   - **Thales' Theorem (Basic Proportionality Theorem — BPT):** In $\\triangle ABC$, if $DE \\parallel BC$, then $\\frac{AD}{DB} = \\frac{AE}{EC}$ and $\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}$.
   - **Similar Triangles Area & Perimeter Shortcut:** If $\\triangle ABC \\sim \\triangle DEF$, then:
     $$\\frac{\\text{Area}(\\triangle ABC)}{\\text{Area}(\\triangle DEF)} = \\left(\\frac{AB}{DE}\\right)^2 = \\left(\\frac{\\text{Perimeter}_1}{\\text{Perimeter}_2}\\right)^2 = \\left(\\frac{\\text{Altitude}_1}{\\text{Altitude}_2}\\right)^2$$
     *(Exam Favourite: If ratio of sides is $4 : 9$, ratio of areas is $4^2 : 9^2 = 16 : 81$! If ratio of areas is $25 : 64$, ratio of sides is $\\sqrt{25}:\\sqrt{64} = 5 : 8$!)*
   - **Golden Pythagoras Triplets:** $(3, 4, 5),\\; (5, 12, 13),\\; (8, 15, 17),\\; (7, 24, 25),\\; (9, 40, 41),\\; (20, 21, 29)$.
   - **Circle Chord, Arc & Tangent Theorems:**
     1. Angle subtended by an arc at the **centre is double** the angle subtended at the remaining circle ($\\angle AOB = 2\\angle ACB$).
     2. **Angle in a semicircle is always a right angle ($90^\\circ$)**.
     3. Opposite angles of a **cyclic quadrilateral are supplementary** ($\\angle A + \\angle C = 180^\\circ$).
     4. **Radius is perpendicular to the tangent** at the point of contact ($\\angle OPT = 90^\\circ$, so $PT = \\sqrt{OP^2 - r^2}$).
     5. Lengths of **two tangents from an external point $P$ are equal** ($PA = PB$), and the angle between the tangents and the angle between the radii are **supplementary** ($\\angle APB + \\angle AOB = 180^\\circ$)!

---

### [Level I: Intermediate — Trigonometry, Heron's Formula & 3D Mensuration (\`ett-math-12\`, \`ett-math-14\`, \`ett-math-15\`, \`ett-math-16\`)]
1. **Trigonometric Ratios, Standard Angles & Identities (\`ett-math-12\`):**
   | Ratio | $0^\\circ$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ | $90^\\circ$ | Complementary Identity |
   |---|---|---|---|---|---|---|
   | **$\\sin\\theta = P/H$** | $0$ | $\\frac{1}{2}$ | $\\frac{1}{\\sqrt{2}}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ | $\\sin(90^\\circ - \\theta) = \\cos\\theta$ |
   | **$\\cos\\theta = B/H$** | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{2}}$ | $\\frac{1}{2}$ | $0$ | $\\cos(90^\\circ - \\theta) = \\sin\\theta$ |
   | **$\\tan\\theta = P/B$** | $0$ | $\\frac{1}{\\sqrt{3}}$ | $1$ | $\\sqrt{3}$ | Not Defined | $\\tan(90^\\circ - \\theta) = \\cot\\theta$ |
   - **Three Pythagorean Identities & 5-Second Reciprocal Trick:**
     1. $\\sin^2\\theta + \\cos^2\\theta = 1$
     2. $1 + \\tan^2\\theta = \\sec^2\\theta \\implies \\sec^2\\theta - \\tan^2\\theta = (\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1 \\implies \\mathbf{\\sec\\theta + \\tan\\theta = \\frac{1}{\\sec\\theta - \\tan\\theta}}$!
     3. $1 + \\cot^2\\theta = \\csc^2\\theta \\implies \\mathbf{\\csc\\theta + \\cot\\theta = \\frac{1}{\\csc\\theta - \\cot\\theta}}$!
   - **Heights & Distances $30^\\circ\\text{–}60^\\circ\\text{–}90^\\circ$ Triangle Ratio:** Side opposite $30^\\circ : 60^\\circ : 90^\\circ = \\mathbf{1 : \\sqrt{3} : 2}$ (At $45^\\circ$, Height $=$ Shadow length!).

2. **Heron's Formula, Equilateral Triangle & Sector of a Circle (\`ett-math-14\`, \`ett-math-15\`):**
   - **Heron's Formula:** Semi-perimeter $s = \\frac{a + b + c}{2}$; Area $\\Delta = \\sqrt{s(s - a)(s - b)(s - c)}$.
   - **Equilateral Triangle (side $a$):** Area $= \\frac{\\sqrt{3}}{4}a^2$; Altitude (Height) $h = \\frac{\\sqrt{3}}{2}a$; Inradius $r = \\frac{a}{2\\sqrt{3}}$, Circumradius $R = \\frac{a}{\\sqrt{3}}$ ($R : r = 2 : 1$).
   - **Circle & Sector (radius $r$, central angle $\\theta$):** Arc length $l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$; Area of Sector $= \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\mathbf{\\frac{1}{2} l r}$; Perimeter of Sector $= l + 2r$; Area of Semicircle protractor perimeter $= \\pi r + 2r = \\frac{36}{7}r$.

3. **Complete 3D Mensuration Master Table (\`ett-math-16\`):**
   | 3D Solid | Curved / Lateral Surface Area (CSA / LSA) | Total Surface Area (TSA) | Volume ($V$) | Space Diagonal / Slant Height |
   |---|---|---|---|---|
   | **Cuboid ($l, b, h$)** | $2(l + b)h$ (Area of 4 walls) | $2(lb + bh + hl)$ | $l \\times b \\times h$ | $d = \\sqrt{l^2 + b^2 + h^2}$ |
   | **Cube (edge $a$)** | $4a^2$ | $6a^2$ | $a^3$ | $d = \\sqrt{3}\\,a$ |
   | **Right Circular Cylinder ($r, h$)** | $2\\pi rh$ | $2\\pi r(h + r)$ | $\\pi r^2 h$ | — |
   | **Right Circular Cone ($r, h, l$)** | $\\pi r l$ | $\\pi r(l + r)$ | $\\frac{1}{3}\\pi r^2 h$ | $l = \\sqrt{r^2 + h^2}$ |
   | **Sphere (radius $r$)** | $4\\pi r^2$ | $4\\pi r^2$ | $\\frac{4}{3}\\pi r^3$ | — |
   | **Solid Hemisphere ($r$)** | $2\\pi r^2$ | **$3\\pi r^2$** *(includes flat top $\\pi r^2$!)* | $\\frac{2}{3}\\pi r^3$ | — |
   | **Frustum of Cone ($r_1, r_2, h, l$)** | $\\pi l(r_1 + r_2)$ | $\\pi l(r_1 + r_2) + \\pi(r_1^2 + r_2^2)$ | $\\frac{1}{3}\\pi h(r_1^2 + r_2^2 + r_1r_2)$ | $l = \\sqrt{h^2 + (r_1 - r_2)^2}$ |

---

### [Level A: Advanced — 60-Second Mensuration & Trigonometry Shortcuts]
1. **Melting / Recasting Volume Conservation Shortcut:**
   - When a solid is melted and recast into $n$ identical smaller solids, **Volume remains conserved**:
     $$n = \\frac{\\text{Volume of Big Solid}}{\\text{Volume of One Small Solid}}$$
   - If a sphere of radius $R$ is melted into $n$ smaller spheres of radius $r$, then $n = \\left(\\frac{R}{r}\\right)^3$.
2. **Percentage Change in Area & Volume Shortcut:**
   - If the radius (or side) of a circle, sphere, or cube changes by $x\\%$, then:
     $$\\text{Percentage Change in Area (2D)} = \\left(2x + \\frac{x^2}{100}\\right)\\%$$
   - *Example:* If radius increases by $10\\%$, Area increases by $2(10) + \\frac{100}{100} = \\mathbf{21\\%}$, and Volume increases by **$33.1\\%$**!
3. **Complementary Product Cancellation Trick:**
   - Since $\\tan\\theta \\cdot \\tan(90^\\circ - \\theta) = 1$, products like $\\tan 1^\\circ \\cdot \\tan 2^\\circ \\cdot \\tan 3^\\circ \\cdots \\tan 89^\\circ = \\mathbf{1}$ immediately!
4. **Equal-Cylinder-Cone-Sphere Ratio:** If a **Cone, Hemisphere, and Cylinder** stand on equal bases (radius $r$) and have the same height ($h = r$), the ratio of their volumes is **$1 : 2 : 3$**!`,
            pa: `### [Level B: Basic — \`"Directional Numerals"\` (ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ \`ett-math-11\`) ਅਤੇ ਯੂਕਲਿਡੀਅਨ ਜਿਆਮਿਤੀ]
1. **ਗਲਤ ਅਨੁਵਾਦ \`"Directional Numerals"\` $\\to$ ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ (Coordinate Geometry):**
   - ਪੰਜਾਬੀ ਦੇ ਸ਼ਬਦ **ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ** ਦਾ ਸ਼ਬਦੀ ਅਨੁਵਾਦ *"Directional Numerals"* ਕਰ ਦਿੱਤਾ ਗਿਆ ਸੀ! ਇਸ ਦੇ ਮੁੱਖ ਸੂਤਰ ਹਨ:
   - **ਭੁਜ (Abscissa = $x$-ਨਿਰਦੇਸ਼ ਅੰਕ):** $y$-ਧੁਰੇ ਤੋਂ ਲੰਬ ਦੂਰੀ; **ਕੋਟੀ (Ordinate = $y$-ਨਿਰਦੇਸ਼ ਅੰਕ):** $x$-ਧੁਰੇ ਤੋਂ ਲੰਬ ਦੂਰੀ।
   - **ਦੂਰੀ ਸੂਤਰ (Distance Formula):** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$; ਮੂਲ ਬਿੰਦੂ $(0,0)$ ਤੋਂ ਦੂਰੀ $= \\sqrt{x^2 + y^2}$।
   - **ਵੰਡ ਸੂਤਰ (Section Formula $m_1 : m_2$):** $\\left(\\frac{m_1x_2 + m_2x_1}{m_1 + m_2},\\; \\frac{m_1y_2 + m_2y_1}{m_1 + m_2}\\right)$।
   - **ਮੱਧ-ਬਿੰਦੂ (Midpoint):** $\\left(\\frac{x_1+x_2}{2},\\; \\frac{y_1+y_2}{2}\\right)$; **ਤ੍ਰਿਭੁਜ ਦਾ ਕੇਂਦਰਕ (Centroid):** $\\left(\\frac{x_1+x_2+x_3}{3},\\; \\frac{y_1+y_2+y_3}{3}\\right)$।
   - **ਸਮਾਂਤਰ ਚਤੁਰਭੁਜ ਦਾ ਚੌਥਾ ਸਿਖਰ ਸ਼ਾਰਟਕੱਟ:** $D = A + C - B$।
   - **ਤ੍ਰਿਭੁਜ ਦਾ ਖੇਤਰਫਲ:** $\\Delta = \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$ (ਸਮਰੇਖੀ ਬਿੰਦੂਆਂ ਲਈ $\\Delta = 0$)।

2. **ਰੇਖਾਵਾਂ, ਤ੍ਰਿਭੁਜ ਅਤੇ ਚੱਕਰ (\`ett-math-7\` ਤੋਂ \`ett-math-10\`, \`ett-math-13\`):**
   - **$n$-ਭੁਜਾਵਾਂ ਵਾਲੇ ਬਹੁਭੁਜ ਦੇ ਅੰਦਰੂਨੀ ਕੋਣਾਂ ਦਾ ਜੋੜ:** $(n - 2) \\times 180^\\circ$; ਹਰੇਕ ਬਾਹਰੀ ਕੋਣ $= 360^\\circ / n$।
   - **ਥੇਲਜ਼ ਪ੍ਰਮੇਯ (BPT):** ਜੇਕਰ $DE \\parallel BC$ ਹੋਵੇ, ਤਾਂ $\\frac{AD}{DB} = \\frac{AE}{EC}$।
   - **ਸਮਰੂਪ ਤ੍ਰਿਭੁਜਾਂ ਦੇ ਖੇਤਰਫਲ ਦਾ ਸ਼ਾਰਟਕੱਟ:** $\\frac{\\text{Area}(\\triangle ABC)}{\\text{Area}(\\triangle DEF)} = \\left(\\frac{AB}{DE}\\right)^2 = \\left(\\frac{\\text{ਪਰਿਮਾਪ}_1}{\\text{ਪਰਿਮਾਪ}_2}\\right)^2$।
   - **ਚੱਕਰ ਅਤੇ ਸਪਰਸ਼ ਰੇਖਾ (Tangent):** ਅਰਧ-ਵਿਆਸ ਸਪਰਸ਼ ਰੇਖਾ ਤੇ ਲੰਬ ਹੁੰਦਾ ਹੈ ($\\angle OPT = 90^\\circ$); ਬਾਹਰੀ ਬਿੰਦੂ ਤੋਂ ਖਿੱਚੀਆਂ ਦੋ ਸਪਰਸ਼ ਰੇਖਾਵਾਂ ਬਰਾਬਰ ਹੁੰਦੀਆਂ ਹਨ ($PA = PB$) ਅਤੇ $\\angle APB + \\angle AOB = 180^\\circ$।

---

### [Level I: Intermediate — ਤਿਕੋਣਮਿਤੀ, ਹੀਰੋਨ ਦਾ ਸੂਤਰ ਅਤੇ 3D ਖੇਤਰਮਿਤੀ (\`ett-math-12\`, \`ett-math-14\`, \`ett-math-15\`, \`ett-math-16\`)]
1. **ਤਿਕੋਣਮਿਤੀ (Trigonometry):**
   - **3 ਤੱਤਸਮਕ:** $\\sin^2\\theta + \\cos^2\\theta = 1$; $\\sec^2\\theta - \\tan^2\\theta = 1 \\implies \\sec\\theta + \\tan\\theta = \\frac{1}{\\sec\\theta - \\tan\\theta}$; $\\csc^2\\theta - \\cot^2\\theta = 1$।
   - **ਉਚਾਈ ਅਤੇ ਦੂਰੀ:** $45^\\circ$ ਦੇ ਕੋਣ ਤੇ ਖੰਭੇ ਦੀ ਉਚਾਈ $=$ ਪਰਛਾਵੇਂ ਦੀ ਲੰਬਾਈ; $30^\\circ\\text{–}60^\\circ\\text{–}90^\\circ$ ਅਨੁਪਾਤ $= 1 : \\sqrt{3} : 2$।
2. **ਹੀਰੋਨ ਦਾ ਸੂਤਰ ਅਤੇ ਚੱਕਰ ਦਾ ਅਰਧ-ਵਿਆਸੀ ਖੰਡ (Sector):**
   - $s = \\frac{a+b+c}{2}$, ਖੇਤਰਫਲ $= \\sqrt{s(s-a)(s-b)(s-c)}$; **ਸਮਭੁਜੀ ਤ੍ਰਿਭੁਜ ਦਾ ਖੇਤਰਫਲ $= \\frac{\\sqrt{3}}{4}a^2$** ਅਤੇ ਉਚਾਈ $= \\frac{\\sqrt{3}}{2}a$।
   - **ਅਰਧ-ਵਿਆਸੀ ਖੰਡ (Sector) ਦਾ ਖੇਤਰਫਲ:** $\\frac{\\theta}{360^\\circ}\\pi r^2 = \\frac{1}{2}lr$, ਚਾਪ ਦੀ ਲੰਬਾਈ $l = \\frac{\\theta}{360^\\circ}2\\pi r$।
3. **3D ਠੋਸ ਆਕ੍ਰਿਤੀਆਂ ਦੇ ਸੂਤਰ:**
   - **ਘਣਾਵ (Cuboid):** LSA $= 2(l+b)h$, TSA $= 2(lb+bh+hl)$, ਆਇਤਨ $= lbh$, ਵਿਕਰਣ $= \\sqrt{l^2+b^2+h^2}$।
   - **ਘਣ (Cube):** LSA $= 4a^2$, TSA $= 6a^2$, ਆਇਤਨ $= a^3$, ਵਿਕਰਣ $= \\sqrt{3}a$।
   - **ਵੇਲਣ (Cylinder):** CSA $= 2\\pi rh$, TSA $= 2\\pi r(h+r)$, ਆਇਤਨ $= \\pi r^2h$।
   - **ਸ਼ੰਕੂ (Cone):** CSA $= \\pi rl$, TSA $= \\pi r(l+r)$, ਆਇਤਨ $= \\frac{1}{3}\\pi r^2h$, ਤਿਰਛੀ ਉਚਾਈ $l = \\sqrt{r^2+h^2}$।
   - **ਗੋਲਾ (Sphere):** ਸਤ੍ਹਾ ਖੇਤਰਫਲ $= 4\\pi r^2$, ਆਇਤਨ $= \\frac{4}{3}\\pi r^3$; **ਠੋਸ ਅਰਧ-ਗੋਲਾ (Hemisphere):** CSA $= 2\\pi r^2$, **TSA $= 3\\pi r^2$**, ਆਇਤਨ $= \\frac{2}{3}\\pi r^3$।

---

### [Level A: Advanced — 60-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ]
1. **ਪਿਘਲਾ ਕੇ ਨਵੇਂ ਠੋਸ ਬਣਾਉਣ ਦਾ ਸ਼ਾਰਟਕੱਟ:** $n = V_{\\text{ਵੱਡਾ}} / V_{\\text{ਛੋਟਾ}}$ (ਗੋਲਿਆਂ ਲਈ $n = (R/r)^3$)।
2. **ਖੇਤਰਫਲ ਵਿੱਚ ਪ੍ਰਤੀਸ਼ਤ ਬਦਲਾਅ ਸ਼ਾਰਟਕੱਟ:** ਜੇਕਰ ਅਰਧ-ਵਿਆਸ ਜਾਂ ਭੁਜਾ $x\\%$ ਵਧੇ, ਤਾਂ ਖੇਤਰਫਲ ਵਿੱਚ ਵਾਧਾ $= \\left(2x + \\frac{x^2}{100}\\right)\\%$ (ਜਿਵੇਂ $10\\%$ ਵਾਧੇ ਨਾਲ ਖੇਤਰਫਲ $21\\%$ ਵਧਦਾ ਹੈ)।
3. **ਬਰਾਬਰ ਅਰਧ-ਵਿਆਸ ਅਤੇ ਉਚਾਈ ($h = r$) ਵਾਲੇ ਸ਼ੰਕੂ : ਅਰਧ-ਗੋਲਾ : ਵੇਲਣ ਦੇ ਆਇਤਨਾਂ ਦਾ ਅਨੁਪਾਤ $= 1 : 2 : 3$**!`,
            hi: `### [Level B: Basic — \`"Directional Numerals"\` (निर्देशांक ज्यामिति \`ett-math-11\`) एवं यूक्लिडियन ज्यामिति]
1. **त्रुटिपूर्ण अनुवाद \`"Directional Numerals"\` $\\to$ निर्देशांक ज्यामिति (Coordinate Geometry):**
   - पंजाबी के शब्द **निर्देश अंक ज्यामिति** का शाब्दिक अनुवाद *"Directional Numerals"* कर दिया गया था! इसके मुख्य सूत्र हैं:
   - **भुज (Abscissa = $x$-निर्देशांक):** $y$-अक्ष से लंबवत दूरी; **कोटि (Ordinate = $y$-निर्देशांक):** $x$-अक्ष से लंबवत दूरी।
   - **दूरी सूत्र (Distance Formula):** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$; मूल बिंदु $(0,0)$ से दूरी $= \\sqrt{x^2 + y^2}$।
   - **विभाजन सूत्र (Section Formula $m_1 : m_2$):** $\\left(\\frac{m_1x_2 + m_2x_1}{m_1 + m_2},\\; \\frac{m_1y_2 + m_2y_1}{m_1 + m_2}\\right)$।
   - **मध्य-बिंदु (Midpoint):** $\\left(\\frac{x_1+x_2}{2},\\; \\frac{y_1+y_2}{2}\\right)$; **त्रिभुज का केंद्रक (Centroid):** $\\left(\\frac{x_1+x_2+x_3}{3},\\; \\frac{y_1+y_2+y_3}{3}\\right)$।
   - **समांतर चतुर्भुज का चौथा शीर्ष शॉर्टकट:** $D = A + C - B$।
   - **त्रिभुज का क्षेत्रफल:** $\\Delta = \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$ (संरेखी बिंदुओं के लिए $\\Delta = 0$)।

2. **रेखाएँ, त्रिभुज एवं वृत्त (\`ett-math-7\` से \`ett-math-10\`, \`ett-math-13\`):**
   - **$n$-भुजाओं वाले बहुभुज के अंतः कोणों का योग:** $(n - 2) \\times 180^\\circ$; प्रत्येक बहिष्कोण $= 360^\\circ / n$।
   - **थेल्स प्रमेय (BPT):** यदि $DE \\parallel BC$ हो, तो $\\frac{AD}{DB} = \\frac{AE}{EC}$।
   - **समरूप त्रिभुजों के क्षेत्रफल का शॉर्टकट:** $\\frac{\\text{Area}(\\triangle ABC)}{\\text{Area}(\\triangle DEF)} = \\left(\\frac{AB}{DE}\\right)^2 = \\left(\\frac{\\text{परिमाप}_1}{\\text{परिमाप}_2}\\right)^2$।
   - **वृत्त एवं स्पर्श रेखा (Tangent):** त्रिज्या स्पर्श रेखा पर लंब होती है ($\\angle OPT = 90^\\circ$); बाह्य बिंदु से खींची गई दो स्पर्श रेखाएँ बराबर होती हैं ($PA = PB$) तथा $\\angle APB + \\angle AOB = 180^\\circ$।

---

### [Level I: Intermediate — त्रिकोणमिति, हीरोन का सूत्र एवं 3D क्षेत्रमिति (\`ett-math-12\`, \`ett-math-14\`, \`ett-math-15\`, \`ett-math-16\`)]
1. **त्रिकोणमिति (Trigonometry):**
   - **3 सर्वसमिकाएँ:** $\\sin^2\\theta + \\cos^2\\theta = 1$; $\\sec^2\\theta - \\tan^2\\theta = 1 \\implies \\sec\\theta + \\tan\\theta = \\frac{1}{\\sec\\theta - \\tan\\theta}$; $\\csc^2\\theta - \\cot^2\\theta = 1$।
   - **ऊँचाई एवं दूरी:** $45^\\circ$ के उन्नयन कोण पर स्तंभ की ऊँचाई $=$ छाया की लंबाई; $30^\\circ\\text{–}60^\\circ\\text{–}90^\\circ$ अनुपात $= 1 : \\sqrt{3} : 2$।
2. **हीरोन का सूत्र एवं वृत्त का त्रिज्यखंड (Sector):**
   - $s = \\frac{a+b+c}{2}$, क्षेत्रफल $= \\sqrt{s(s-a)(s-b)(s-c)}$; **समबाहु त्रिभुज का क्षेत्रफल $= \\frac{\\sqrt{3}}{4}a^2$** तथा ऊँचाई $= \\frac{\\sqrt{3}}{2}a$।
   - **त्रिज्यखंड (Sector) का क्षेत्रफल:** $\\frac{\\theta}{360^\\circ}\\pi r^2 = \\frac{1}{2}lr$, चाप की लंबाई $l = \\frac{\\theta}{360^\\circ}2\\pi r$।
3. **3D ठोस आकृतियों के सूत्र:**
   - **घनाभ (Cuboid):** LSA $= 2(l+b)h$, TSA $= 2(lb+bh+hl)$, आयतन $= lbh$, विकर्ण $= \\sqrt{l^2+b^2+h^2}$।
   - **घन (Cube):** LSA $= 4a^2$, TSA $= 6a^2$, आयतन $= a^3$, विकर्ण $= \\sqrt{3}a$।
   - **बेलन (Cylinder):** CSA $= 2\\pi rh$, TSA $= 2\\pi r(h+r)$, आयतन $= \\pi r^2h$।
   - **शंकु (Cone):** CSA $= \\pi rl$, TSA $= \\pi r(l+r)$, आयतन $= \\frac{1}{3}\\pi r^2h$, तिर्यक ऊँचाई $l = \\sqrt{r^2+h^2}$।
   - **गोला (Sphere):** पृष्ठीय क्षेत्रफल $= 4\\pi r^2$, आयतन $= \\frac{4}{3}\\pi r^3$; **ठोस अर्धगोला (Hemisphere):** CSA $= 2\\pi r^2$, **TSA $= 3\\pi r^2$**, आयतन $= \\frac{2}{3}\\pi r^3$।

---

### [Level A: Advanced — 60-सेकंड शॉर्टकट]
1. **पिघलाकर नए ठोस बनाने का शॉर्टकट:** $n = V_{\\text{बड़ा}} / V_{\\text{छोटा}}$ (गोलों के लिए $n = (R/r)^3$)।
2. **क्षेत्रफल में प्रतिशत परिवर्तन शॉर्टकट:** यदि त्रिज्या या भुजा $x\\%$ बढ़े, तो क्षेत्रफल में वृद्धि $= \\left(2x + \\frac{x^2}{100}\\right)\\%$ (जैसे $10\\%$ वृद्धि पर क्षेत्रफल $21\\%$ बढ़ता है)।
3. **समान त्रिज्या और ऊँचाई ($h = r$) वाले शंकु : अर्धगोला : बेलन के आयतनों का अनुपात $= 1 : 2 : 3$**!`
        },
        keyNotes: {
            en: [
                'Coordinate Geometry ("Directional Numerals"): Distance = √[(x2-x1)^2 + (y2-y1)^2]; Midpoint = ((x1+x2)/2, (y1+y2)/2); Centroid = ((x1+x2+x3)/3, (y1+y2+y3)/3); 4th vertex of parallelogram D = A + C - B.',
                'Similar Triangles Ratio Rule: Ratio of Areas = (Ratio of corresponding sides)^2 = (Ratio of perimeters)^2 = (Ratio of altitudes/medians)^2.',
                'Circle Tangents: Radius is perpendicular to tangent (∠OPT = 90°); two tangents from external point P are equal (PA = PB) and ∠APB + ∠AOB = 180°.',
                'Trigonometry Shortcuts: sin^2 θ + cos^2 θ = 1; sec θ + tan θ = 1 / (sec θ - tan θ); tan 1°·tan 2°...tan 89° = 1; 30°-60°-90° side ratio = 1 : √3 : 2.',
                '2D & Sector Formulas: Equilateral triangle area = (√3/4)a^2, height = (√3/2)a; Sector area = (θ/360°)πr^2 = (1/2)lr.',
                '3D Mensuration: Cube TSA = 6a^2, V = a^3, d = √3 a; Cylinder V = πr^2h; Cone V = (1/3)πr^2h; Sphere TSA = 4πr^2, V = (4/3)πr^3; Solid Hemisphere TSA = 3πr^2, V = (2/3)πr^3.'
            ],
            pa: [
                'ਨਿਰਦੇਸ਼ ਅੰਕ ਜਿਆਮਿਤੀ: ਦੂਰੀ = √[(x2-x1)^2 + (y2-y1)^2]; ਮੱਧ-ਬਿੰਦੂ = ((x1+x2)/2, (y1+y2)/2); ਕੇਂਦਰਕ = ((x1+x2+x3)/3, (y1+y2+y3)/3); ਸਮਾਂਤਰ ਚਤੁਰਭੁਜ ਚੌਥਾ ਸਿਖਰ D = A + C - B।',
                'ਸਮਰੂਪ ਤ੍ਰਿਭੁਜ ਖੇਤਰਫਲ ਨਿਯਮ: ਖੇਤਰਫਲਾਂ ਦਾ ਅਨੁਪਾਤ = (ਸੰਗਤ ਭੁਜਾਵਾਂ ਦੇ ਅਨੁਪਾਤ)^2 = (ਪਰਿਮਾਪਾਂ ਦੇ ਅਨੁਪਾਤ)^2।',
                'ਚੱਕਰ ਦੀਆਂ ਸਪਰਸ਼ ਰੇਖਾਵਾਂ: ਅਰਧ-ਵਿਆਸ ਸਪਰਸ਼ ਰੇਖਾ ਤੇ ਲੰਬ ਹੁੰਦਾ ਹੈ (∠OPT = 90°); ਬਾਹਰੀ ਬਿੰਦੂ ਤੋਂ ਸਪਰਸ਼ ਰੇਖਾਵਾਂ ਬਰਾਬਰ ਹੁੰਦੀਆਂ ਹਨ (PA = PB) ਅਤੇ ∠APB + ∠AOB = 180°।',
                'ਤਿਕੋਣਮਿਤੀ ਸ਼ਾਰਟਕੱਟ: sin^2 θ + cos^2 θ = 1; sec θ + tan θ = 1 / (sec θ - tan θ); tan 1°·tan 2°...tan 89° = 1; 30°-60°-90° ਭੁਜਾ ਅਨੁਪਾਤ = 1 : √3 : 2।',
                '2D ਅਤੇ Sector ਸੂਤਰ: ਸਮਭੁਜੀ ਤ੍ਰਿਭੁਜ ਖੇਤਰਫਲ = (√3/4)a^2, ਉਚਾਈ = (√3/2)a; Sector ਦਾ ਖੇਤਰਫਲ = (θ/360°)πr^2 = (1/2)lr।',
                '3D ਖੇਤਰਮਿਤੀ: ਘਣ TSA = 6a^2, V = a^3, d = √3 a; ਵੇਲਣ V = πr^2h; ਸ਼ੰਕੂ V = (1/3)πr^2h; ਗੋਲਾ TSA = 4πr^2, V = (4/3)πr^3; ਠੋਸ ਅਰਧ-ਗੋਲਾ TSA = 3πr^2।'
            ],
            hi: [
                'निर्देशांक ज्यामिति: दूरी = √[(x2-x1)^2 + (y2-y1)^2]; मध्य-बिंदु = ((x1+x2)/2, (y1+y2)/2); केंद्रक = ((x1+x2+x3)/3, (y1+y2+y3)/3); समांतर चतुर्भुज चौथा शीर्ष D = A + C - B।',
                'समरूप त्रिभुज क्षेत्रफल नियम: क्षेत्रफलों का अनुपात = (संगत भुजाओं के अनुपात)^2 = (परिमापों के अनुपात)^2।',
                'वृत्त की स्पर्श रेखाएँ: त्रिज्या स्पर्श रेखा पर लंब होती है (∠OPT = 90°); बाह्य बिंदु से स्पर्श रेखाएँ बराबर होती हैं (PA = PB) तथा ∠APB + ∠AOB = 180°।',
                'त्रिकोणमिति शॉर्टकट: sin^2 θ + cos^2 θ = 1; sec θ + tan θ = 1 / (sec θ - tan θ); tan 1°·tan 2°...tan 89° = 1; 30°-60°-90° भुजा अनुपात = 1 : √3 : 2।',
                '2D एवं त्रिज्यखंड सूत्र: समबाहु त्रिभुज क्षेत्रफल = (√3/4)a^2, ऊँचाई = (√3/2)a; त्रिज्यखंड का क्षेत्रफल = (θ/360°)πr^2 = (1/2)lr।',
                '3D क्षेत्रमिति: घन TSA = 6a^2, V = a^3, d = √3 a; बेलन V = πr^2h; शंकु V = (1/3)πr^2h; गोला TSA = 4πr^2, V = (4/3)πr^3; ठोस अर्धगोला TSA = 3πr^2।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Distance of (x, y) from X-axis is |y| (ordinate) and from Y-axis is |x| (abscissa); distance from origin is √(x^2 + y^2).',
                'Pythagoras Triplets for Instant Mental Math: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), (9, 40, 41), (20, 21, 29).',
                'Secant-Tangent Identity Trick: If sec θ + tan θ = p, then sec θ - tan θ = 1/p, sec θ = (p + 1/p)/2, and sin θ = (p^2 - 1)/(p^2 + 1).',
                'Solid Hemisphere Trap: Curved Surface Area (CSA) of hemisphere = 2πr^2, but Total Surface Area (TSA) of a SOLID hemisphere = 3πr^2.',
                'Ratio of Volumes of Cone : Hemisphere : Cylinder having equal base radius r and height h = r is 1 : 2 : 3.'
            ],
            pa: [
                'ਬਿੰਦੂ (x, y) ਦੀ X-ਧੁਰੇ ਤੋਂ ਦੂਰੀ |y| ਹੁੰਦੀ ਹੈ ਅਤੇ Y-ਧੁਰੇ ਤੋਂ ਦੂਰੀ |x| ਹੁੰਦੀ ਹੈ; ਮੂਲ ਬਿੰਦੂ ਤੋਂ ਦੂਰੀ √(x^2 + y^2) ਹੁੰਦੀ ਹੈ।',
                'ਪਾਇਥਾਗੋਰਸ ਤਿੱਕੜੀਆਂ (Triplets): (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), (9, 40, 41), (20, 21, 29)।',
                'ਤਿਕੋਣਮਿਤੀ ਟ੍ਰਿਕ: ਜੇਕਰ sec θ + tan θ = p ਹੋਵੇ, ਤਾਂ sec θ - tan θ = 1/p ਅਤੇ sec θ = (p + 1/p)/2।',
                'ਠੋਸ ਅਰਧ-ਗੋਲਾ ਟ੍ਰੈਪ: ਅਰਧ-ਗੋਲੇ ਦੀ ਵਕਰ ਸਤ੍ਹਾ (CSA) = 2πr^2 ਹੁੰਦੀ ਹੈ, ਪਰ ਠੋਸ ਅਰਧ-ਗੋਲੇ ਦੀ ਕੁੱਲ ਸਤ੍ਹਾ (TSA) = 3πr^2 ਹੁੰਦੀ ਹੈ।',
                'ਬਰਾਬਰ ਅਰਧ-ਵਿਆਸ r ਅਤੇ ਉਚਾਈ h = r ਵਾਲੇ ਸ਼ੰਕੂ : ਅਰਧ-ਗੋਲਾ : ਵੇਲਣ ਦੇ ਆਇਤਨਾਂ ਦਾ ਅਨੁਪਾਤ = 1 : 2 : 3।'
            ],
            hi: [
                'बिंदु (x, y) की X-अक्ष से दूरी |y| होती है और Y-अक्ष से दूरी |x| होती है; मूल बिंदु से दूरी √(x^2 + y^2) होती है।',
                'पाइथागोरस त्रिक (Triplets): (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), (9, 40, 41), (20, 21, 29)।',
                'त्रिकोणमिति ट्रिक: यदि sec θ + tan θ = p हो, तो sec θ - tan θ = 1/p तथा sec θ = (p + 1/p)/2।',
                'ठोस अर्धगोला ट्रैप: अर्धगोले का वक्र पृष्ठ (CSA) = 2πr^2 होता है, किंतु ठोस अर्धगोले का संपूर्ण पृष्ठ (TSA) = 3πr^2 होता है।',
                'समान त्रिज्या r और ऊँचाई h = r वाले शंकु : अर्धगोला : बेलन के आयतनों का अनुपात = 1 : 2 : 3।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Thinking the distance of point P(3, 5) from the x-axis is 3. Correction: The distance from the x-axis is the vertical coordinate |y| = 5 (ordinate), and distance from the y-axis is |x| = 3 (abscissa).',
                'Misconception: Taking the Total Surface Area (TSA) of a solid hemisphere as 2πr^2 (half of 4πr^2). Correction: Cutting a sphere exposes a flat circular base of area πr^2, so TSA of a solid hemisphere is 2πr^2 + πr^2 = 3πr^2.',
                'Misconception: When two cubes of edge a are joined end-to-end, thinking the TSA of the resulting cuboid is 2 × 6a^2 = 12a^2. Correction: Two joining faces get hidden inside! The cuboid has dimensions 2a × a × a and TSA = 10a^2.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਬਿੰਦੂ P(3, 5) ਦੀ x-ਧੁਰੇ ਤੋਂ ਦੂਰੀ 3 ਮੰਨ ਲੈਣਾ। ਸੁਧਾਰ: x-ਧੁਰੇ ਤੋਂ ਲੰਬ ਦੂਰੀ y-ਨਿਰਦੇਸ਼ ਅੰਕ |y| = 5 ਹੁੰਦੀ ਹੈ, ਅਤੇ y-ਧੁਰੇ ਤੋਂ ਦੂਰੀ |x| = 3 ਹੁੰਦੀ ਹੈ।',
                'ਭੁਲੇਖਾ: ਠੋਸ ਅਰਧ-ਗੋਲੇ ਦੀ ਕੁੱਲ ਸਤ੍ਹਾ ਦਾ ਖੇਤਰਫਲ (TSA) 2πr^2 ਲੈਣਾ। ਸੁਧਾਰ: ਠੋਸ ਅਰਧ-ਗੋਲੇ ਦੇ ਉੱਪਰਲੇ ਸਮਤਲ ਚੱਕਰ ਦਾ ਖੇਤਰਫਲ πr^2 ਜੁੜ ਕੇ TSA = 2πr^2 + πr^2 = 3πr^2 ਬਣਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਭੁਜਾ a ਵਾਲੇ ਦੋ ਘਣਾਂ ਨੂੰ ਜੋੜਨ ਤੇ ਬਣੇ ਘਣਾਵ ਦੀ ਕੁੱਲ ਸਤ੍ਹਾ (TSA) 12a^2 ਮੰਨਣਾ। ਸੁਧਾਰ: ਜੁੜਨ ਵਾਲੇ ਦੋ ਫਲਕ ਅੰਦਰ ਛੁਪ ਜਾਂਦੇ ਹਨ, ਇਸ ਲਈ ਘਣਾਵ (2a × a × a) ਦੀ ਕੁੱਲ ਸਤ੍ਹਾ = 10a^2 ਹੁੰਦੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: बिंदु P(3, 5) की x-अक्ष से दूरी 3 समझना। सुधार: x-अक्ष से लंबवत दूरी y-निर्देशांक |y| = 5 होती है, और y-अक्ष से दूरी |x| = 3 होती है।',
                'भ्रांति: ठोस अर्धगोले का संपूर्ण पृष्ठीय क्षेत्रफल (TSA) 2πr^2 लेना। सुधार: ठोस अर्धगोले के वृत्ताकार आधार का क्षेत्रफल πr^2 जुड़कर TSA = 2πr^2 + πr^2 = 3πr^2 होता है।',
                'भ्रांति: भुजा a वाले दो घनों को जोड़ने पर बने घनाभ का संपूर्ण पृष्ठ (TSA) 12a^2 समझना। सुधार: जुड़ने वाले दो फलक अंदर छिप जाते हैं, अतः घनाभ (2a × a × a) का संपूर्ण पृष्ठ = 10a^2 होता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — Similar Triangles & Circle Tangent] (a) The areas of two similar triangles are 81 cm^2 and 49 cm^2. Find the ratio of their corresponding altitudes. (b) From a point P at a distance of 13 cm from the centre O of a circle of radius 5 cm, find the length of the tangent PT.',
                    pa: '[Easy — ਸਮਰੂਪ ਤ੍ਰਿਭੁਜ ਅਤੇ ਸਪਰਸ਼ ਰੇਖਾ] (a) ਦੋ ਸਮਰੂਪ ਤ੍ਰਿਭੁਜਾਂ ਦੇ ਖੇਤਰਫਲ 81 cm^2 ਅਤੇ 49 cm^2 ਹਨ। ਉਹਨਾਂ ਦੇ ਸੰਗਤ ਸਿਖਰ-ਲੰਬਾਂ ਦਾ ਅਨੁਪਾਤ ਪਤਾ ਕਰੋ। (b) 5 cm ਅਰਧ-ਵਿਆਸ ਵਾਲੇ ਚੱਕਰ ਦੇ ਕੇਂਦਰ O ਤੋਂ 13 cm ਦੂਰ ਬਿੰਦੂ P ਤੋਂ ਸਪਰਸ਼ ਰੇਖਾ PT ਦੀ ਲੰਬਾਈ ਪਤਾ ਕਰੋ।',
                    hi: '[Easy — समरूप त्रिभुज एवं स्पर्श रेखा] (a) दो समरूप त्रिभुजों के क्षेत्रफल 81 cm^2 और 49 cm^2 हैं। उनके संगत शीर्षलंबों का अनुपात ज्ञात कीजिए। (b) 5 cm त्रिज्या वाले वृत्त के केंद्र O से 13 cm दूर स्थित बिंदु P से स्पर्श रेखा PT की लंबाई ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: For similar triangles, Ratio of Altitudes = √(Ratio of Areas) = √(81 / 49) = 9 : 7.',
                        'Step 2: Since radius OT is perpendicular to tangent PT (∠OTP = 90°), ΔOTP is a right triangle with hypotenuse OP = 13 cm and OT = 5 cm.',
                        'Step 3: Using Pythagoras triplet (5, 12, 13): PT = √(13^2 - 5^2) = √(169 - 25) = √144 = 12 cm.'
                    ],
                    pa: [
                        'Step 1: ਸਮਰੂਪ ਤ੍ਰਿਭੁਜਾਂ ਲਈ, ਸਿਖਰ-ਲੰਬਾਂ ਦਾ ਅਨੁਪਾਤ = √(ਖੇਤਰਫਲਾਂ ਦਾ ਅਨੁਪਾਤ) = √(81 / 49) = 9 : 7।',
                        'Step 2: ਕਿਉਂਕਿ ਅਰਧ-ਵਿਆਸ OT ਸਪਰਸ਼ ਰੇਖਾ PT ਤੇ ਲੰਬ ਹੈ (∠OTP = 90°), ਇਸ ਲਈ OP = 13 cm ਕਰਣ ਹੈ।',
                        'Step 3: ਪਾਇਥਾਗੋਰਸ ਤਿੱਕੜੀ (5, 12, 13) ਨਾਲ ਸਿੱਧਾ PT = 12 cm।'
                    ],
                    hi: [
                        'Step 1: समरूप त्रिभुजों के लिए, शीर्षलंबों का अनुपात = √(क्षेत्रफलों का अनुपात) = √(81 / 49) = 9 : 7।',
                        'Step 2: चूँकि त्रिज्या OT स्पर्श रेखा PT पर लंब है (∠OTP = 90°), अतः OP = 13 cm कर्ण है।',
                        'Step 3: पाइथागोरस त्रिक (5, 12, 13) से सीधे PT = 12 cm।'
                    ]
                },
                finalAnswer: {
                    en: '(a) 9 : 7; (b) PT = 12 cm',
                    pa: '(a) 9 : 7; (b) PT = 12 cm',
                    hi: '(a) 9 : 7; (b) PT = 12 cm'
                }
            },
            {
                problem: {
                    en: '[Medium — Trigonometry 5-Second Reciprocal Shortcut] If sec θ + tan θ = 4, find the values of (i) sec θ - tan θ and (ii) cos θ.',
                    pa: '[Medium — ਤਿਕੋਣਮਿਤੀ 5-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ] ਜੇਕਰ sec θ + tan θ = 4 ਹੈ, ਤਾਂ (i) sec θ - tan θ ਅਤੇ (ii) cos θ ਦਾ ਮੁੱਲ ਪਤਾ ਕਰੋ।',
                    hi: '[Medium — त्रिकोणमिति 5-सेकंड शॉर्टकट] यदि sec θ + tan θ = 4 है, तो (i) sec θ - tan θ तथा (ii) cos θ का मान ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Since sec^2 θ - tan^2 θ = 1, we have sec θ - tan θ = 1 / (sec θ + tan θ) = 1/4.',
                        'Step 2: Adding (sec θ + tan θ = 4) and (sec θ - tan θ = 1/4): 2 sec θ = 4 + 1/4 = 17/4 => sec θ = 17/8.',
                        'Step 3: Therefore, cos θ = 1 / sec θ = 8/17.'
                    ],
                    pa: [
                        'Step 1: ਕਿਉਂਕਿ sec^2 θ - tan^2 θ = 1 ਹੈ, ਇਸ ਲਈ sec θ - tan θ = 1/4।',
                        'Step 2: ਦੋਵਾਂ ਸਮੀਕਰਨਾਂ ਨੂੰ ਜੋੜਨ ਤੇ: 2 sec θ = 4 + 1/4 = 17/4 => sec θ = 17/8।',
                        'Step 3: ਇਸ ਲਈ cos θ = 1 / sec θ = 8/17।'
                    ],
                    hi: [
                        'Step 1: चूँकि sec^2 θ - tan^2 θ = 1 है, अतः sec θ - tan θ = 1/4।',
                        'Step 2: दोनों समीकरणों को जोड़ने पर: 2 sec θ = 4 + 1/4 = 17/4 => sec θ = 17/8।',
                        'Step 3: अतः cos θ = 1 / sec θ = 8/17।'
                    ]
                },
                finalAnswer: {
                    en: '(i) 1/4; (ii) cos θ = 8/17',
                    pa: '(i) 1/4; (ii) cos θ = 8/17',
                    hi: '(i) 1/4; (ii) cos θ = 8/17'
                }
            },
            {
                problem: {
                    en: '[Tricky — 3D Volume Recasting] Three metallic solid spheres of radii 6 cm, 8 cm, and 10 cm are melted to form a single solid sphere. Find the radius R of the resulting sphere.',
                    pa: '[Tricky — 3D ਆਇਤਨ ਸੰਰੱਖਿਅਣ] 6 cm, 8 cm ਅਤੇ 10 cm ਅਰਧ-ਵਿਆਸ ਵਾਲੇ ਧਾਤ ਦੇ ਤਿੰਨ ਠੋਸ ਗੋਲਿਆਂ ਨੂੰ ਪਿਘਲਾ ਕੇ ਇੱਕ ਵੱਡਾ ਠੋਸ ਗੋਲਾ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ। ਨਵੇਂ ਗੋਲੇ ਦਾ ਅਰਧ-ਵਿਆਸ R ਪਤਾ ਕਰੋ।',
                    hi: '[Tricky — 3D आयतन संरक्षण] 6 cm, 8 cm और 10 cm त्रिज्याओं वाले धातु के तीन ठोस गोलों को पिघलाकर एक बड़ा ठोस गोला बनाया जाता है। नए गोले की त्रिज्या R ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: By volume conservation: (4/3)πR^3 = (4/3)π(r1^3 + r2^3 + r3^3).',
                        'Step 2: Cancelling (4/3)π on both sides: R^3 = 6^3 + 8^3 + 10^3 = 216 + 512 + 1000 = 1728.',
                        'Step 3: Taking cube root: R = (1728)^(1/3) = 12 cm (Memorise classic cube quartet: 3^3 + 4^3 + 5^3 = 6^3 and 6^3 + 8^3 + 10^3 = 12^3!).'
                    ],
                    pa: [
                        'Step 1: ਆਇਤਨ ਬਰਾਬਰ ਰੱਖਣ ਤੇ: (4/3)πR^3 = (4/3)π(6^3 + 8^3 + 10^3)।',
                        'Step 2: R^3 = 216 + 512 + 1000 = 1728।',
                        'Step 3: ਘਣਮੂਲ ਲੈਣ ਤੇ: R = 12 cm (ਯਾਦ ਰੱਖੋ: 3^3 + 4^3 + 5^3 = 6^3 ਅਤੇ 6^3 + 8^3 + 10^3 = 12^3!)।'
                    ],
                    hi: [
                        'Step 1: आयतन संरक्षण से: (4/3)πR^3 = (4/3)π(6^3 + 8^3 + 10^3)।',
                        'Step 2: R^3 = 216 + 512 + 1000 = 1728।',
                        'Step 3: घनमूल लेने पर: R = 12 cm (याद रखें: 3^3 + 4^3 + 5^3 = 6^3 तथा 6^3 + 8^3 + 10^3 = 12^3!)।'
                    ]
                },
                finalAnswer: {
                    en: 'R = 12 cm',
                    pa: 'R = 12 cm',
                    hi: 'R = 12 cm'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-math-11-fc-1',
                question: {
                    en: 'What is the centroid of a triangle whose vertices are (x1, y1), (x2, y2), and (x3, y3), and in what ratio does it divide each median?',
                    pa: 'ਸਿਖਰਾਂ (x1, y1), (x2, y2) ਅਤੇ (x3, y3) ਵਾਲੇ ਤ੍ਰਿਭੁਜ ਦਾ ਕੇਂਦਰਕ (Centroid) ਕੀ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਹ ਮੱਧਿਕਾ ਨੂੰ ਕਿਸ ਅਨੁਪਾਤ ਵਿੱਚ ਵੰਡਦਾ ਹੈ?',
                    hi: 'शीर्षों (x1, y1), (x2, y2) और (x3, y3) वाले त्रिभुज का केंद्रक (Centroid) क्या होता है और यह माध्यिका को किस अनुपात में विभाजित करता है?'
                },
                answer: {
                    en: 'Centroid G = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3); it divides each median in the ratio 2 : 1 from the vertex.',
                    pa: 'ਕੇਂਦਰਕ G = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3); ਇਹ ਹਰੇਕ ਮੱਧਿਕਾ ਨੂੰ ਸਿਖਰ ਵੱਲੋਂ 2 : 1 ਦੇ ਅਨੁਪਾਤ ਵਿੱਚ ਵੰਡਦਾ ਹੈ।',
                    hi: 'केंद्रक G = ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3); यह प्रत्येक माध्यिका को शीर्ष की ओर से 2 : 1 के अनुपात में विभाजित करता है।'
                }
            },
            {
                id: 'ett-math-11-fc-2',
                question: {
                    en: 'If tangents PA and PB from an external point P to a circle with centre O are inclined to each other at an angle of 80°, what is ∠AOB?',
                    pa: 'ਜੇਕਰ ਕੇਂਦਰ O ਵਾਲੇ ਚੱਕਰ ਤੇ ਬਾਹਰੀ ਬਿੰਦੂ P ਤੋਂ ਖਿੱਚੀਆਂ ਸਪਰਸ਼ ਰੇਖਾਵਾਂ PA ਅਤੇ PB ਵਿਚਕਾਰ 80° ਦਾ ਕੋਣ ਹੈ, ਤਾਂ ∠AOB ਕਿੰਨਾ ਹੋਵੇਗਾ?',
                    hi: 'यदि केंद्र O वाले वृत्त पर बाह्य बिंदु P से खींची गई स्पर्श रेखाएँ PA और PB परस्पर 80° के कोण पर झुकी हैं, तो ∠AOB का मान क्या होगा?'
                },
                answer: {
                    en: '∠AOB = 180° - 80° = 100° (since ∠APB + ∠AOB = 180°; and ∠POA = 50°).',
                    pa: '∠AOB = 180° - 80° = 100° (ਕਿਉਂਕਿ ∠APB + ∠AOB = 180°; ਅਤੇ ∠POA = 50°)।',
                    hi: '∠AOB = 180° - 80° = 100° (क्योंकि ∠APB + ∠AOB = 180°; तथा ∠POA = 50°)।'
                }
            },
            {
                id: 'ett-math-11-fc-3',
                question: {
                    en: 'What is the area and altitude (height) of an equilateral triangle of side a?',
                    pa: 'ਭੁਜਾ a ਵਾਲੇ ਸਮਭੁਜੀ ਤ੍ਰਿਭੁਜ ਦਾ ਖੇਤਰਫਲ ਅਤੇ ਸਿਖਰ-ਲੰਬ (ਉਚਾਈ) ਕੀ ਹੁੰਦਾ ਹੈ?',
                    hi: 'भुजा a वाले समबाहु त्रिभुज का क्षेत्रफल और शीर्षलंब (ऊँचाई) क्या होता है?'
                },
                answer: {
                    en: 'Area = (√3 / 4)a^2 and Altitude (Height) h = (√3 / 2)a.',
                    pa: 'ਖੇਤਰਫਲ = (√3 / 4)a^2 ਅਤੇ ਉਚਾਈ h = (√3 / 2)a।',
                    hi: 'क्षेत्रफल = (√3 / 4)a^2 तथा ऊँचाई h = (√3 / 2)a।'
                }
            },
            {
                id: 'ett-math-11-fc-4',
                question: {
                    en: 'What is the shortcut formula for the area of a sector of a circle when arc length l and radius r are given?',
                    pa: 'ਜਦੋਂ ਚਾਪ ਦੀ ਲੰਬਾਈ l ਅਤੇ ਅਰਧ-ਵਿਆਸ r ਦਿੱਤੇ ਹੋਣ, ਤਾਂ ਚੱਕਰ ਦੇ ਅਰਧ-ਵਿਆਸੀ ਖੰਡ (Sector) ਦੇ ਖੇਤਰਫਲ ਦਾ ਸ਼ਾਰਟਕੱਟ ਸੂਤਰ ਕੀ ਹੈ?',
                    hi: 'जब चाप की लंबाई l और त्रिज्या r दी गई हो, तो वृत्त के त्रिज्यखंड (Sector) के क्षेत्रफल का शॉर्टकट सूत्र क्या है?'
                },
                answer: {
                    en: 'Area of Sector = (1/2) × l × r.',
                    pa: 'ਅਰਧ-ਵਿਆਸੀ ਖੰਡ ਦਾ ਖੇਤਰਫਲ = (1/2) × l × r।',
                    hi: 'त्रिज्यखंड का क्षेत्रफल = (1/2) × l × r।'
                }
            },
            {
                id: 'ett-math-11-fc-5',
                question: {
                    en: 'If the radius of a circle is increased by 20%, by what percentage does its area increase?',
                    pa: 'ਜੇਕਰ ਕਿਸੇ ਚੱਕਰ ਦਾ ਅਰਧ-ਵਿਆਸ 20% ਵਧਾ ਦਿੱਤਾ ਜਾਵੇ, ਤਾਂ ਉਸ ਦੇ ਖੇਤਰਫਲ ਵਿੱਚ ਕਿੰਨੇ ਪ੍ਰਤੀਸ਼ਤ ਵਾਧਾ ਹੋਵੇਗਾ?',
                    hi: 'यदि किसी वृत्त की त्रिज्या 20% बढ़ा दी जाए, तो उसके क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?'
                },
                answer: {
                    en: '44% (Using 2x + x^2/100 = 2(20) + 400/100 = 40 + 4 = 44%).',
                    pa: '44% (ਸ਼ਾਰਟਕੱਟ 2x + x^2/100 = 2(20) + 400/100 = 40 + 4 = 44%)।',
                    hi: '44% (शॉर्टकट 2x + x^2/100 = 2(20) + 400/100 = 40 + 4 = 44%)।'
                }
            },
            {
                id: 'ett-math-11-fc-6',
                question: {
                    en: 'What is the length of the longest rod that can be placed inside a cuboidal room of dimensions 12 m × 9 m × 8 m?',
                    pa: '12 m × 9 m × 8 m ਮਾਪ ਵਾਲੇ ਘਣਾਵ ਆਕਾਰ ਕਮਰੇ ਵਿੱਚ ਰੱਖੀ ਜਾ ਸਕਣ ਵਾਲੀ ਸਭ ਤੋਂ ਲੰਬੀ ਛੜ ਦੀ ਲੰਬਾਈ ਕਿੰਨੀ ਹੋਵੇਗੀ?',
                    hi: '12 m × 9 m × 8 m विमाओं वाले घनाभाकार कमरे में रखी जा सकने वाली सबसे लंबी छड़ की लंबाई क्या होगी?'
                },
                answer: {
                    en: 'Space diagonal d = √(12^2 + 9^2 + 8^2) = √(144 + 81 + 64) = √289 = 17 m.',
                    pa: 'ਵਿਕਰਣ d = √(12^2 + 9^2 + 8^2) = √(144 + 81 + 64) = √289 = 17 m।',
                    hi: 'विकर्ण d = √(12^2 + 9^2 + 8^2) = √(144 + 81 + 64) = √289 = 17 m।'
                }
            }
        ]
    },

    // =========================================================================
    // 4. ETT MATHEMATICS IV: STATISTICS & PROBABILITY WITH 60-SECOND SHORTCUTS
    // =========================================================================
    {
        topicId: 'ett-math-17',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 200,
            editorialNote: 'Complete ERB Punjab ETT Paper B Mathematics Unit IV covering Statistics (ett-math-17: Mean, Median, Mode, Empirical Formula & Ogives) and Probability (ett-math-18: Coins, Dice Sum Triangle, 52 Cards & Leap Year) with 60-second shortcuts.'
        },
        bookRefs: [
            {
                title: 'PSEB / NCERT Mathematics Textbooks (Class 9 & Class 10)',
                author: 'Punjab School Education Board (PSEB) / NCERT',
                chapter: 'Ch 14: Statistics; Ch 15: Probability',
                relevance: 'High-scoring unit in ETT Paper B Mathematics (3 to 4 Questions / 6–8 Marks).'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Ungrouped Data Statistics & Classical Probability (\`ett-math-17\`, \`ett-math-18\`)]
1. **Measures of Central Tendency for Raw (Ungrouped) Data:**
   - **Range (ਵਿਚਲਣ ਸੀਮਾ / परिसर):** $\\text{Maximum Observation} - \\text{Minimum Observation}$.
   - **Class Mark (Mid-point of class interval $a\\text{–}b$):** $x_i = \\frac{\\text{Lower Limit} + \\text{Upper Limit}}{2}$.
   - **Mean (ਮੱਧਮਾਨ / माध्य $\\bar{x}$):** $\\bar{x} = \\frac{\\sum x_i}{n}$.
     - **5-Second Mean Scaling Shortcut:** If every observation $x_i$ is increased by $k$, subtracted by $k$, multiplied by $k$, or divided by $k$, the **new Mean $\\bar{x}_{\\text{new}}$ also undergoes the exact same operation**! Also, $\\sum (x_i - \\bar{x}) = 0$ always.
   - **Median (ਮੱਧਿਕਾ / माध्यिका $M$):** First **arrange data in ascending (or descending) order**:
     - If $n$ is **Odd**: $M = \\left(\\frac{n + 1}{2}\\right)^{\\text{th}}\\text{ observation}$.
     - If $n$ is **Even**: $M = \\text{Average of } \\left(\\frac{n}{2}\\right)^{\\text{th}} \\text{ and } \\left(\\frac{n}{2} + 1\\right)^{\\text{th}} \\text{ observations}$.
   - **Mode (ਬਹੁਲਕ / बहुलक $Z$):** The observation that occurs with the **highest frequency**.

2. **Classical Probability Foundation (\`ett-math-18\`):**
   - **Formula:** $P(E) = \\frac{\\text{Number of outcomes favourable to } E}{\\text{Total number of possible outcomes}}$.
   - **Fundamental Rules:**
     1. **$0 \\le P(E) \\le 1$** (Probability can NEVER be negative or greater than $1$, e.g., $-0.5$, $1.05$, or $5/4$ cannot be probabilities!).
     2. **Impossible Event:** $P(\\emptyset) = 0$; **Sure / Certain Event:** $P(S) = 1$.
     3. **Complementary Event:** $P(E) + P(\\text{not } E) = 1 \\implies P(\\bar{E}) = 1 - P(E)$.
     4. Sum of probabilities of all elementary events of an experiment is **$1$**.

---

### [Level I: Intermediate — Grouped Data Formulas, Empirical Relation & Ogives (\`ett-math-17\`)]
1. **Grouped Data Formulas (Class 10 NCERT/PSEB):**
   | Measure | Formula | Symbol Definitions |
   |---|---|---|
   | **Mean (Direct Method)** | $\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$ | $x_i =$ class mark, $f_i =$ class frequency |
   | **Mean (Assumed Mean)** | $\\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i}$ | $a =$ assumed mean, $d_i = x_i - a$ |
   | **Mean (Step-Deviation)** | $\\bar{x} = a + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) \\times h$ | $u_i = \\frac{x_i - a}{h}$, $h =$ class size |
   | **Median ($M$)** | $M = l + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h$ | $l =$ lower limit of median class ($\\text{CF} \\ge N/2$), **$cf =$ cumulative frequency of class PRECEDING median class**, $f =$ frequency of median class |
   | **Mode ($Z$)** | $Z = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h$ | $l =$ lower limit of modal class (max freq), $f_1 =$ freq of modal class, $f_0 =$ preceding freq, $f_2 =$ succeeding freq |

2. **The Golden Empirical Relationship (ਸੰਬੰਧ ਸੂਤਰ — Guaranteed Exam Question!):**
   $$\\mathbf{\\text{Mode} = 3\\,\\text{Median} - 2\\,\\text{Mean}} \\qquad (Z = 3M - 2\\bar{x})$$
   - **Equivalent Rearranged Forms Tested in MCQs:**
     - $3\\,\\text{Median} = \\text{Mode} + 2\\,\\text{Mean} \\implies \\text{Median} = \\frac{\\text{Mode} + 2\\,\\text{Mean}}{3}$
     - $\\text{Mode} - \\text{Mean} = 3(\\text{Median} - \\text{Mean})$
     - $\\text{Mode} - \\text{Median} = 2(\\text{Median} - \\text{Mean})$

3. **Graphical Representation of Cumulative Frequency (Ogive / ਤੋਰਣ):**
   - **'Less than' Ogive:** Plotted with **upper class limits** on the $x$-axis and rising cumulative frequencies on the $y$-axis (strictly increasing curve).
   - **'More than' Ogive:** Plotted with **lower class limits** on the $x$-axis and falling cumulative frequencies on the $y$-axis (strictly decreasing curve).
   - **Intersection Point Rule:** The **$x$-coordinate (abscissa)** of the point of intersection of the 'Less than' Ogive and 'More than' Ogive gives the **MEDIAN** of the data! (Histogram gives Mode).

---

### [Level A: Advanced — High-Yield Sample Spaces & 60-Second Probability Shortcuts (\`ett-math-18\`)]
1. **Coins ($2^n$ Outcomes):**
   - $1$ coin $= 2$ outcomes; $2$ coins $= 4$ outcomes $\\{HH, HT, TH, TT\\}$; $3$ coins $= 8$ outcomes ($P(\\text{3 Heads}) = 1/8$, $P(\\text{at least 1 Head}) = 1 - P(TTT) = 7/8$).
2. **Two Dice Sum-Triangle Shortcut ($6^2 = 36$ Outcomes):**
   - For the sum $S \\in \\{2, 3, \\dots, 12\\}$ on throwing two dice simultaneously:
     | Sum $S$ | $2$ | $3$ | $4$ | $5$ | $6$ | **$7$** | $8$ | $9$ | $10$ | $11$ | $12$ |
     |---|---|---|---|---|---|---|---|---|---|---|---|
     | **Favourable Outcomes** | $1$ | $2$ | $3$ | $4$ | $5$ | **$6$** | $5$ | $4$ | $3$ | $2$ | $1$ |
     | **Shortcut Rule** | \\multicolumn{6}{c|}{$\\text{Count} = S - 1 \\quad (\\text{for } S \\le 7)$} | \\multicolumn{5}{c|}{$\\text{Count} = 13 - S \\quad (\\text{for } S \\ge 7)$} |
   - **Doublets** $(1,1), (2,2), \\dots, (6,6) = 6/36 = \\mathbf{1/6}$.
3. **Deck of 52 Playing Cards Breakdown:**
   - **26 Red Cards:** $13\\text{ Hearts }(\\heartsuit) + 13\\text{ Diamonds }(\\diamondsuit)$
   - **26 Black Cards:** $13\\text{ Spades }(\\spadesuit) + 13\\text{ Clubs }(\\clubsuit)$
   - **12 Face (Court) Cards:** $4\\text{ Kings} + 4\\text{ Queens} + 4\\text{ Jacks}$ ($3$ in each suit: $P(\\text{Face card}) = 12/52 = 3/13$; $P(\\text{Red face card}) = 6/52 = 3/26$).
   - **4 Aces (ਇੱਕੇ / इक्के):** **Aces are NOT face cards!** (16 Honour cards $= 12\\text{ Face cards} + 4\\text{ Aces}$).
4. **Calendar Probability Shortcut (53 Sundays / Mondays):**
   - **Ordinary Year ($365\\text{ days} = 52\\text{ weeks} + 1\\text{ extra day}$):** $P(53\\text{ Sundays}) = \\mathbf{\\frac{1}{7}}$.
   - **Leap Year ($366\\text{ days} = 52\\text{ weeks} + 2\\text{ consecutive extra days}$):** $P(53\\text{ Sundays}) = \\mathbf{\\frac{2}{7}}$.`,
            pa: `### [Level B: Basic — ਅਵਰਗੀਕ੍ਰਿਤ ਅੰਕੜਾ ਵਿਗਿਆਨ ਅਤੇ ਸੰਭਾਵਨਾ (\`ett-math-17\`, \`ett-math-18\`)]
1. **ਕੇਂਦਰੀ ਪ੍ਰਵਿਰਤੀ ਦੇ ਮਾਪ (Mean, Median, Mode):**
   - **ਵਰਗ ਚਿੰਨ੍ਹ (Class Mark):** $x_i = \\frac{\\text{ਹੇਠਲੀ ਸੀਮਾ} + \\text{ਉੱਪਰਲੀ ਸੀਮਾ}}{2}$।
   - **ਮੱਧਮਾਨ (Mean $\\bar{x}$):** $\\bar{x} = \\frac{\\sum x_i}{n}$। **5-ਸੈਕਿੰਡ ਸ਼ਾਰਟਕੱਟ:** ਜੇਕਰ ਹਰੇਕ ਨਿਰੀਖਣ ਵਿੱਚ $k$ ਜੋੜਿਆ, ਘਟਾਇਆ ਜਾਂ ਗੁਣਾ ਕੀਤਾ ਜਾਵੇ, ਤਾਂ ਨਵੇਂ ਮੱਧਮਾਨ ਵਿੱਚ ਵੀ ਉਹੀ ਬਦਲਾਅ ਹੁੰਦਾ ਹੈ! ਨਾਲ ਹੀ $\\sum (x_i - \\bar{x}) = 0$।
   - **ਮੱਧਿਕਾ (Median $M$):** ਅੰਕੜਿਆਂ ਨੂੰ ਪਹਿਲਾਂ **ਵਧਦੇ ਜਾਂ ਘਟਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਿਖੋ**:
     - ਜੇਕਰ $n$ ਟਾਂਕ (Odd) ਹੈ: $\\left(\\frac{n+1}{2}\\right)$-ਵਾਂ ਪਦ।
     - ਜੇਕਰ $n$ ਜਿਸਤ (Even) ਹੈ: $\\left(\\frac{n}{2}\\right)$-ਵੇਂ ਅਤੇ $\\left(\\frac{n}{2}+1\\right)$-ਵੇਂ ਪਦ ਦੀ ਔਸਤ।
   - **ਬਹੁਲਕ (Mode $Z$):** ਸਭ ਤੋਂ ਵੱਧ ਵਾਰ ਆਉਣ ਵਾਲਾ ਪਦ।

2. **ਸੰਭਾਵਨਾ (Probability) ਦੇ ਮੁੱਢਲੇ ਨਿਯਮ:**
   - $P(E) = \\frac{\\text{ਅਨੁਕੂਲ ਪਰਿਣਾਮ}}{\\text{ਕੁੱਲ ਸੰਭਵ ਪਰਿਣਾਮ}}$, ਜਿੱਥੇ **$0 \\le P(E) \\le 1$** (ਸੰਭਾਵਨਾ ਕਦੇ ਵੀ ਰਿਣਾਤਮਕ ਜਾਂ $1$ ਤੋਂ ਵੱਧ ਨਹੀਂ ਹੋ ਸਕਦੀ!)।
   - **ਅਸੰਭਵ ਘਟਨਾ:** $P = 0$; **ਨਿਸ਼ਚਿਤ ਘਟਨਾ:** $P = 1$; **ਪੂਰਕ ਘਟਨਾ:** $P(E) + P(\\text{not } E) = 1$।

---

### [Level I: Intermediate — ਵਰਗੀਕ੍ਰਿਤ ਅੰਕੜੇ, ਅਨੁਭਵੀ ਸਬੰਧ ਅਤੇ ਤੋਰਣ (Ogives)]
1. **ਵਰਗੀਕ੍ਰਿਤ ਅੰਕੜਿਆਂ ਦੇ ਸੂਤਰ:**
   - **ਮੱਧਿਕਾ ($M$):** $M = l + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h$ *(ਜਿੱਥੇ $cf$ ਮੱਧਿਕਾ ਵਰਗ ਤੋਂ **ਠੀਕ ਪਹਿਲਾਂ ਵਾਲੇ ਵਰਗ** ਦੀ ਸੰਚਵੀਂ ਬਾਰੰਬਾਰਤਾ ਹੈ)*।
   - **ਬਹੁਲਕ ($Z$):** $Z = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h$।
2. **ਸੁਨਹਿਰੀ ਅਨੁਭਵੀ ਸਬੰਧ (Golden Empirical Formula):**
   $$\\mathbf{\\text{Mode (ਬਹੁਲਕ)} = 3\\,\\text{Median (ਮੱਧਿਕਾ)} - 2\\,\\text{Mean (ਮੱਧਮਾਨ)}}$$
3. **ਤੋਰਣ (Ogives):** 'Less than' Ogive ਅਤੇ 'More than' Ogive ਦੇ ਕਾਟ-ਬਿੰਦੂ ਦਾ **$x$-ਨਿਰਦੇਸ਼ ਅੰਕ (Abscissa) ਮੱਧਿਕਾ (Median)** ਦਿੰਦਾ ਹੈ!

---

### [Level A: Advanced — 60-ਸੈਕਿੰਡ ਸੰਭਾਵਨਾ ਸ਼ਾਰਟਕੱਟ]
1. **ਸਿੱਕੇ (Coins):** $n$ ਸਿੱਕਿਆਂ ਲਈ ਕੁੱਲ ਪਰਿਣਾਮ $= 2^n$ ($1$ ਸਿੱਕਾ $= 2$, $2$ ਸਿੱਕੇ $= 4$, $3$ ਸਿੱਕੇ $= 8$)।
2. **ਦੋ ਪਾਸਿਆਂ (2 Dice = 36 Outcomes) ਦੇ ਜੋੜ $S$ ਦਾ ਸ਼ਾਰਟਕੱਟ:**
   - ਜੋੜ $S \\le 7$ ਲਈ ਅਨੁਕੂਲ ਪਰਿਣਾਮ $= S - 1$ (ਜਿਵੇਂ ਜੋੜ $7$ ਲਈ $7 - 1 = 6 \\implies 6/36 = 1/6$)।
   - ਜੋੜ $S \\ge 7$ ਲਈ ਅਨੁਕੂਲ ਪਰਿਣਾਮ $= 13 - S$ (ਜਿਵੇਂ ਜੋੜ $8$ ਲਈ $13 - 8 = 5/36$; ਜੋੜ $11$ ਲਈ $13 - 11 = 2/36 = 1/18$)।
3. **ਤਾਸ਼ ਦੇ 52 ਪੱਤੇ:** $26$ ਲਾਲ ($13$ ਪਾਨ $\\heartsuit + 13$ ਇੱਟ $\\diamondsuit$) + $26$ ਕਾਲੇ ($13$ ਹੁਕਮ $\\spadesuit + 13$ ਚਿੜੀ $\\clubsuit$); **12 ਤਸਵੀਰ ਵਾਲੇ ਪੱਤੇ (Face Cards:** $4$ ਬਾਦਸ਼ਾਹ + $4$ ਬੇਗਮ + $4$ ਗੁਲਾਮ; **ਇੱਕਾ Face Card ਨਹੀਂ ਹੁੰਦਾ!**)।
4. **ਕੈਲੰਡਰ ਸੰਭਾਵਨਾ:** ਸਾਧਾਰਨ ਸਾਲ ($365$ ਦਿਨ) ਵਿੱਚ $53$ ਐਤਵਾਰ ਆਉਣ ਦੀ ਸੰਭਾਵਨਾ $= \\mathbf{1/7}$; **ਲੀਪ ਸਾਲ ($366$ ਦਿਨ) ਵਿੱਚ $53$ ਐਤਵਾਰ ਆਉਣ ਦੀ ਸੰਭਾਵਨਾ $= \\mathbf{2/7}$**।`,
            hi: `### [Level B: Basic — अवर्गीकृत सांख्यिकी एवं प्रायिकता (\`ett-math-17\`, \`ett-math-18\`)]
1. **केंद्रीय प्रवृत्ति के माप (Mean, Median, Mode):**
   - **वर्ग चिह्न (Class Mark):** $x_i = \\frac{\\text{निम्न सीमा} + \\text{उपरि सीमा}}{2}$।
   - **माध्य (Mean $\\bar{x}$):** $\\bar{x} = \\frac{\\sum x_i}{n}$। **5-सेकंड शॉर्टकट:** यदि प्रत्येक प्रेक्षण में $k$ जोड़ा, घटाया या गुणा किया जाए, तो नए माध्य में भी वही परिवर्तन होता है! साथ ही $\\sum (x_i - \\bar{x}) = 0$।
   - **माध्यिका (Median $M$):** आँकड़ों को पहले **आरोही या अवरोही क्रम में व्यवस्थित करें**:
     - यदि $n$ विषम (Odd) है: $\\left(\\frac{n+1}{2}\\right)$-वाँ पद।
     - यदि $n$ सम (Even) है: $\\left(\\frac{n}{2}\\right)$-वें तथा $\\left(\\frac{n}{2}+1\\right)$-वें पद का औसत।
   - **बहुलक (Mode $Z$):** सर्वाधिक बारंबारता वाला प्रेक्षण।

2. **प्रायिकता (Probability) के मूल नियम:**
   - $P(E) = \\frac{\\text{अनुकूल परिणाम}}{\\text{कुल संभव परिणाम}}$, जहाँ **$0 \\le P(E) \\le 1$** (प्रायिकता कभी ऋणात्मक या $1$ से अधिक नहीं हो सकती!)।
   - **असंभव घटना:** $P = 0$; **निश्चित घटना:** $P = 1$; **पूरक घटना:** $P(E) + P(\\text{not } E) = 1$।

---

### [Level I: Intermediate — वर्गीकृत आँकड़े, आनुभविक संबंध एवं तोरण (Ogives)]
1. **वर्गीकृत आँकड़ों के सूत्र:**
   - **माध्यिका ($M$):** $M = l + \\left(\\frac{\\frac{N}{2} - cf}{f}\\right) \\times h$ *(जहाँ $cf$ माध्यिका वर्ग से **ठीक पहले वाले वर्ग** की संचयी बारंबारता है)*।
   - **बहुलक ($Z$):** $Z = l + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right) \\times h$।
2. **स्वर्णिम आनुभविक संबंध (Golden Empirical Formula):**
   $$\\mathbf{\\text{Mode (बहुलक)} = 3\\,\\text{Median (माध्यिका)} - 2\\,\\text{Mean (माध्य)}}$$
3. **तोरण (Ogives):** 'से कम प्रकार' (Less than) और 'से अधिक प्रकार' (More than) तोरणों के प्रतिच्छेद बिंदु का **$x$-निर्देशांक (भुज) माध्यिका (Median)** देता है!

---

### [Level A: Advanced — 60-सेकंड प्रायिकता शॉर्टकट]
1. **सिक्के (Coins):** $n$ सिक्कों के लिए कुल परिणाम $= 2^n$ ($1$ सिक्का $= 2$, $2$ सिक्के $= 4$, $3$ सिक्के $= 8$)।
2. **दो पासों (2 Dice = 36 Outcomes) के योग $S$ का शॉर्टकट:**
   - योग $S \\le 7$ के लिए अनुकूल परिणाम $= S - 1$ (जैसे योग $7$ के लिए $7 - 1 = 6 \\implies 6/36 = 1/6$)।
   - योग $S \\ge 7$ के लिए अनुकूल परिणाम $= 13 - S$ (जैसे योग $8$ के लिए $13 - 8 = 5/36$; योग $11$ के लिए $13 - 11 = 2/36 = 1/18$)।
3. **ताश के 52 पत्ते:** $26$ लाल ($13$ पान $\\heartsuit + 13$ ईंट $\\diamondsuit$) + $26$ काले ($13$ हुकुम $\\spadesuit + 13$ चिड़ी $\\clubsuit$); **12 तस्वीर वाले पत्ते (Face Cards:** $4$ बादशाह + $4$ बेगम + $4$ गुलाम; **इक्का Face Card नहीं होता!**)।
4. **कैलेंडर प्रायिकता:** साधारण वर्ष ($365$ दिन) में $53$ रविवार आने की प्रायिकता $= \\mathbf{1/7}$; **लीप वर्ष ($366$ दिन) में $53$ रविवार आने की प्रायिकता $= \\mathbf{2/7}$**।`
        },
        keyNotes: {
            en: [
                'Golden Empirical Formula: Mode = 3 Median - 2 Mean; equivalently Mode - Mean = 3(Median - Mean).',
                'Mean Scaling Rule: Adding/multiplying each observation by k adds/multiplies the Mean by k; algebraic sum of deviations from mean Σ(x_i - x_bar) is always 0.',
                'Ogive Intersection Rule: The x-coordinate (abscissa) of the intersection of "Less than" and "More than" ogives gives the Median; Histogram gives the Mode.',
                'Probability Bounds: 0 <= P(E) <= 1 and P(E) + P(not E) = 1; negative values or numbers > 1 (or > 100%) can never be probabilities.',
                'Two Dice Sum Shortcut (Total = 36): Favourable outcomes for sum S is (S - 1) for S <= 7 and (13 - S) for S >= 7; max probability is for sum 7 (6/36 = 1/6).',
                'Cards & Calendar Facts: 52 cards have 12 Face cards (4K + 4Q + 4J; Aces are NOT face cards); P(53 Sundays in Ordinary Year) = 1/7, P(53 Sundays in Leap Year) = 2/7.'
            ],
            pa: [
                'ਸੁਨਹਿਰੀ ਅਨੁਭਵੀ ਸੂਤਰ: ਬਹੁਲਕ (Mode) = 3 ਮੱਧਿਕਾ (Median) - 2 ਮੱਧਮਾਨ (Mean)।',
                'ਮੱਧਮਾਨ ਸ਼ਾਰਟਕੱਟ: ਹਰੇਕ ਨਿਰੀਖਣ ਵਿੱਚ k ਜੋੜਨ ਜਾਂ ਗੁਣਾ ਕਰਨ ਨਾਲ ਮੱਧਮਾਨ ਵਿੱਚ ਵੀ k ਜੁੜ ਜਾਂ ਗੁਣਾ ਹੋ ਜਾਂਦਾ ਹੈ; Σ(x_i - x_bar) = 0।',
                'ਤੋਰਣ (Ogive) ਨਿਯਮ: "Less than" ਅਤੇ "More than" ਤੋਰਣਾਂ ਦੇ ਕਾਟ-ਬਿੰਦੂ ਦਾ x-ਨਿਰਦੇਸ਼ ਅੰਕ ਮੱਧਿਕਾ (Median) ਦਿੰਦਾ ਹੈ; ਆਇਤ ਚਿੱਤਰ (Histogram) ਬਹੁਲਕ ਦਿੰਦਾ ਹੈ।',
                'ਸੰਭਾਵਨਾ ਦੀਆਂ ਸੀਮਾਵਾਂ: 0 <= P(E) <= 1 ਅਤੇ P(E) + P(not E) = 1; ਰਿਣਾਤਮਕ ਸੰਖਿਆ ਜਾਂ 1 ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ ਕਦੇ ਵੀ ਸੰਭਾਵਨਾ ਨਹੀਂ ਹੋ ਸਕਦੀ।',
                'ਦੋ ਪਾਸਿਆਂ ਦੇ ਜੋੜ ਦਾ ਸ਼ਾਰਟਕੱਟ (ਕੁੱਲ = 36): ਜੋੜ S <= 7 ਲਈ (S - 1) ਅਤੇ S >= 7 ਲਈ (13 - S) ਪਰਿਣਾਮ; ਜੋੜ 7 ਦੀ ਸੰਭਾਵਨਾ ਸਭ ਤੋਂ ਵੱਧ (6/36 = 1/6) ਹੈ।',
                'ਤਾਸ਼ ਅਤੇ ਕੈਲੰਡਰ: 52 ਪੱਤਿਆਂ ਵਿੱਚ 12 ਤਸਵੀਰ ਵਾਲੇ ਪੱਤੇ (4K + 4Q + 4J) ਹੁੰਦੇ ਹਨ; ਸਾਧਾਰਨ ਸਾਲ ਵਿੱਚ 53 ਐਤਵਾਰ = 1/7 ਅਤੇ ਲੀਪ ਸਾਲ ਵਿੱਚ 53 ਐਤਵਾਰ = 2/7।'
            ],
            hi: [
                'स्वर्णिम आनुभविक सूत्र: बहुलक (Mode) = 3 माध्यिका (Median) - 2 माध्य (Mean)।',
                'माध्य शॉर्टकट: प्रत्येक प्रेक्षण में k जोड़ने या गुणा करने पर माध्य में भी k जुड़ या गुणा हो जाता है; Σ(x_i - x_bar) = 0।',
                'तोरण (Ogive) नियम: "से कम" और "से अधिक" तोरणों के प्रतिच्छेद बिंदु का x-निर्देशांक माध्यिका (Median) देता है; आयतचित्र (Histogram) बहुलक देता है।',
                'प्रायिकता की सीमाएँ: 0 <= P(E) <= 1 तथा P(E) + P(not E) = 1; ऋणात्मक संख्या या 1 से बड़ी संख्या कभी प्रायिकता नहीं हो सकती।',
                'दो पासों के योग का शॉर्टकट (कुल = 36): योग S <= 7 के लिए (S - 1) तथा S >= 7 के लिए (13 - S) परिणाम; योग 7 की प्रायिकता सर्वाधिक (6/36 = 1/6) है।',
                'ताश एवं कैलेंडर: 52 पत्तों में 12 तस्वीर वाले पत्ते (4K + 4Q + 4J) होते हैं; साधारण वर्ष में 53 रविवार = 1/7 तथा लीप वर्ष में 53 रविवार = 2/7।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Empirical Formula Memory Trick: Mode (4 letters) = 3 × Median (6 letters) - 2 × Mean (4 letters).',
                'Single Die (6 outcomes): Prime numbers = {2, 3, 5} (P = 3/6 = 1/2); Composite numbers = {4, 6} (P = 2/6 = 1/3 — remember 1 is neither prime nor composite!).',
                'Two Dice Sum Table: S=2 (1/36), S=3 (2/36), S=4 (3/36), S=5 (4/36), S=6 (5/36), S=7 (6/36), S=8 (5/36), S=9 (4/36), S=10 (3/36), S=11 (2/36), S=12 (1/36).',
                'Playing Cards Quick Counts: Total = 52; Red = 26, Black = 26; Each suit = 13; Face cards = 12 (6 Red + 6 Black); Aces = 4 (2 Red + 2 Black).',
                'Grouped Median CF Rule: Always take cf of the class PRECEDING the median class, and f of the median class itself.'
            ],
            pa: [
                'ਅਨੁਭਵੀ ਸੂਤਰ ਟ੍ਰਿਕ: Mode = 3 Median - 2 Mean (ਮੱਧਿਕਾ = (Mode + 2 Mean)/3)।',
                'ਇੱਕ ਪਾਸਾ (6 ਪਰਿਣਾਮ): ਅਭਾਜ ਸੰਖਿਆਵਾਂ = {2, 3, 5} (P = 3/6 = 1/2); ਭਾਜ ਸੰਖਿਆਵਾਂ = {4, 6} (P = 2/6 = 1/3 — ਯਾਦ ਰੱਖੋ 1 ਨਾ ਅਭਾਜ ਹੈ ਨਾ ਭਾਜ!)।',
                'ਦੋ ਪਾਸਿਆਂ ਦਾ ਜੋੜ: S=2 (1/36), S=5 (4/36), S=7 (6/36 = 1/6), S=8 (5/36), S=9 (4/36 = 1/9), S=11 (2/36 = 1/18)।',
                'ਤਾਸ਼ ਦੇ ਪੱਤੇ: ਕੁੱਲ = 52; ਲਾਲ = 26, ਕਾਲੇ = 26; ਤਸਵੀਰ ਵਾਲੇ ਪੱਤੇ = 12 (6 ਲਾਲ + 6 ਕਾਲੇ); ਇੱਕੇ = 4।',
                'ਮੱਧਿਕਾ ਸੂਤਰ ਵਿੱਚ cf: ਹਮੇਸ਼ਾ ਮੱਧਿਕਾ ਵਰਗ ਤੋਂ ਠੀਕ ਪਹਿਲਾਂ ਵਾਲੇ ਵਰਗ ਦੀ ਸੰਚਵੀਂ ਬਾਰੰਬਾਰਤਾ (cf) ਲਓ।'
            ],
            hi: [
                'आनुभविक सूत्र ट्रिक: Mode = 3 Median - 2 Mean (माध्यिका = (Mode + 2 Mean)/3)।',
                'एक पासा (6 परिणाम): अभाज्य संख्याएँ = {2, 3, 5} (P = 3/6 = 1/2); भाज्य संख्याएँ = {4, 6} (P = 2/6 = 1/3 — याद रखें 1 न भाज्य है न अभाज्य!)।',
                'दो पासों का योग: S=2 (1/36), S=5 (4/36), S=7 (6/36 = 1/6), S=8 (5/36), S=9 (4/36 = 1/9), S=11 (2/36 = 1/18)।',
                'ताश के पत्ते: कुल = 52; लाल = 26, काले = 26; तस्वीर वाले पत्ते = 12 (6 लाल + 6 काले); इक्के = 4।',
                'माध्यिका सूत्र में cf: हमेशा माध्यिका वर्ग से ठीक पहले वाले वर्ग की संचयी बारंबारता (cf) लें।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Counting Aces among Face Cards (making 16 face cards in a deck of 52). Correction: Only Kings, Queens, and Jacks have faces printed on them (4 + 4 + 4 = 12 Face Cards). Aces are Honour cards, NOT face cards.',
                'Misconception: In the grouped median formula M = l + [(N/2 - cf)/f] × h, taking cf as the cumulative frequency of the median class itself. Correction: cf is strictly the cumulative frequency of the class PRECEDING the median class.',
                'Misconception: Finding the median of raw data directly by picking the middle number without sorting the array first. Correction: You MUST arrange observations in ascending or descending order before identifying the middle term(s).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਇੱਕਿਆਂ (Aces) ਨੂੰ ਤਸਵੀਰ ਵਾਲੇ ਪੱਤਿਆਂ (Face Cards) ਵਿੱਚ ਗਿਣ ਕੇ 16 Face Cards ਮੰਨ ਲੈਣਾ। ਸੁਧਾਰ: ਸਿਰਫ਼ ਬਾਦਸ਼ਾਹ, ਬੇਗਮ ਅਤੇ ਗੁਲਾਮ (4 + 4 + 4 = 12) ਹੀ ਤਸਵੀਰ ਵਾਲੇ ਪੱਤੇ ਹਨ; ਇੱਕੇ Face Cards ਨਹੀਂ ਹੁੰਦੇ।',
                'ਭੁਲੇਖਾ: ਮੱਧਿਕਾ ਦੇ ਸੂਤਰ ਵਿੱਚ cf ਨੂੰ ਮੱਧਿਕਾ ਵਰਗ ਦੀ ਆਪਣੀ ਸੰਚਵੀਂ ਬਾਰੰਬਾਰਤਾ ਲੈ ਲੈਣਾ। ਸੁਧਾਰ: cf ਹਮੇਸ਼ਾ ਮੱਧਿਕਾ ਵਰਗ ਤੋਂ ਠੀਕ ਪਹਿਲਾਂ ਵਾਲੇ ਵਰਗ ਦੀ ਸੰਚਵੀਂ ਬਾਰੰਬਾਰਤਾ ਹੁੰਦੀ ਹੈ।',
                'ਭੁਲੇਖਾ: ਬਿਨਾਂ ਵਧਦੇ ਜਾਂ ਘਟਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਗਾਏ ਸਿੱਧਾ ਵਿਚਕਾਰਲੀ ਸੰਖਿਆ ਨੂੰ ਮੱਧਿਕਾ (Median) ਲਿਖ ਦੇਣਾ। ਸੁਧਾਰ: ਮੱਧਿਕਾ ਕੱਢਣ ਤੋਂ ਪਹਿਲਾਂ ਅੰਕੜਿਆਂ ਨੂੰ ਵਧਦੇ ਜਾਂ ਘਟਦੇ ਕ੍ਰਮ ਵਿੱਚ ਲਿਖਣਾ ਲਾਜ਼ਮੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: इक्कों (Aces) को तस्वीर वाले पत्तों (Face Cards) में गिनकर 16 Face Cards मान लेना। सुधार: केवल बादशाह, बेगम और गुलाम (4 + 4 + 4 = 12) ही तस्वीर वाले पत्ते होते हैं; इक्के Face Cards नहीं होते।',
                'भ्रांति: माध्यिका सूत्र में cf को माध्यिका वर्ग की ही संचयी बारंबारता ले लेना। सुधार: cf सदैव माध्यिका वर्ग से ठीक पहले वाले वर्ग की संचयी बारंबारता होती है।',
                'भ्रांति: आँकड़ों को आरोही या अवरोही क्रम में व्यवस्थित किए बिना सीधे बीच की संख्या को माध्यिका मान लेना। सुधार: माध्यिका ज्ञात करने से पहले आँकड़ों को आरोही या अवरोही क्रम में लगाना अनिवार्य है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — Empirical Formula] If the Mean and Median of a frequency distribution are 26.8 and 27.9 respectively, find its Mode.',
                    pa: '[Easy — ਅਨੁਭਵੀ ਸੂਤਰ] ਜੇਕਰ ਕਿਸੇ ਬਾਰੰਬਾਰਤਾ ਵੰਡ ਦਾ ਮੱਧਮਾਨ (Mean) 26.8 ਅਤੇ ਮੱਧਿਕਾ (Median) 27.9 ਹੈ, ਤਾਂ ਉਸ ਦਾ ਬਹੁਲਕ (Mode) ਪਤਾ ਕਰੋ।',
                    hi: '[Easy — आनुभविक सूत्र] यदि किसी बारंबारता बंटन का माध्य (Mean) 26.8 और माध्यिका (Median) 27.9 है, तो उसका बहुलक (Mode) ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Apply the empirical relation: Mode = 3 Median - 2 Mean.',
                        'Step 2: Mode = 3(27.9) - 2(26.8) = 83.7 - 53.6 = 30.1.'
                    ],
                    pa: [
                        'Step 1: ਅਨੁਭਵੀ ਸੂਤਰ ਲਗਾਓ: ਬਹੁਲਕ (Mode) = 3 ਮੱਧਿਕਾ - 2 ਮੱਧਮਾਨ।',
                        'Step 2: Mode = 3(27.9) - 2(26.8) = 83.7 - 53.6 = 30.1।'
                    ],
                    hi: [
                        'Step 1: आनुभविक सूत्र लगाएँ: बहुलक (Mode) = 3 माध्यिका - 2 माध्य।',
                        'Step 2: Mode = 3(27.9) - 2(26.8) = 83.7 - 53.6 = 30.1।'
                    ]
                },
                finalAnswer: {
                    en: 'Mode = 30.1',
                    pa: 'ਬਹੁਲਕ (Mode) = 30.1',
                    hi: 'बहुलक (Mode) = 30.1'
                }
            },
            {
                problem: {
                    en: '[Medium — Two Dice Sum Shortcut] Two dice are thrown simultaneously. Find the probability of getting: (i) a sum of 8, and (ii) a sum of at least 10.',
                    pa: '[Medium — ਦੋ ਪਾਸਿਆਂ ਦੇ ਜੋੜ ਦਾ ਸ਼ਾਰਟਕੱਟ] ਦੋ ਪਾਸਿਆਂ ਨੂੰ ਇਕੱਠੇ ਸੁੱਟਿਆ ਜਾਂਦਾ ਹੈ। (i) ਜੋੜ 8 ਆਉਣ ਦੀ, ਅਤੇ (ii) ਘੱਟੋ-ਘੱਟ ਜੋੜ 10 ਆਉਣ ਦੀ ਸੰਭਾਵਨਾ ਪਤਾ ਕਰੋ।',
                    hi: '[Medium — दो पासों के योग का शॉर्टकट] दो पासों को एक साथ फेंका जाता है। (i) योग 8 आने की, तथा (ii) कम-से-कम योग 10 आने की प्रायिकता ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Total outcomes on throwing two dice = 6 × 6 = 36.',
                        'Step 2: Using the Sum-Triangle Shortcut for S >= 7 (Count = 13 - S): For S = 8, favourable outcomes = 13 - 8 = 5. So P(sum = 8) = 5/36.',
                        'Step 3: For "at least 10" (S = 10, 11, 12), favourable outcomes = (13 - 10) + (13 - 11) + (13 - 12) = 3 + 2 + 1 = 6. So P(sum >= 10) = 6/36 = 1/6.'
                    ],
                    pa: [
                        'Step 1: ਦੋ ਪਾਸਿਆਂ ਲਈ ਕੁੱਲ ਸੰਭਵ ਪਰਿਣਾਮ = 6 × 6 = 36।',
                        'Step 2: ਜੋੜ-ਤ੍ਰਿਭੁਜ ਸ਼ਾਰਟਕੱਟ (S >= 7 ਲਈ 13 - S) ਅਨੁਸਾਰ: S = 8 ਲਈ ਅਨੁਕੂਲ ਪਰਿਣਾਮ = 13 - 8 = 5। ਇਸ ਲਈ P(ਜੋੜ = 8) = 5/36।',
                        'Step 3: "ਘੱਟੋ-ਘੱਟ 10" (S = 10, 11, 12) ਲਈ ਪਰਿਣਾਮ = 3 + 2 + 1 = 6। ਇਸ ਲਈ P(ਜੋੜ >= 10) = 6/36 = 1/6।'
                    ],
                    hi: [
                        'Step 1: दो पासों के लिए कुल संभव परिणाम = 6 × 6 = 36।',
                        'Step 2: योग-त्रिभुज शॉर्टकट (S >= 7 के लिए 13 - S) से: S = 8 के लिए अनुकूल परिणाम = 13 - 8 = 5। अतः P(योग = 8) = 5/36।',
                        'Step 3: "कम-से-कम 10" (S = 10, 11, 12) के लिए परिणाम = 3 + 2 + 1 = 6। अतः P(योग >= 10) = 6/36 = 1/6।'
                    ]
                },
                finalAnswer: {
                    en: '(i) 5/36; (ii) 1/6',
                    pa: '(i) 5/36; (ii) 1/6',
                    hi: '(i) 5/36; (ii) 1/6'
                }
            },
            {
                problem: {
                    en: '[Tricky — Playing Cards Exclusion] From a well-shuffled deck of 52 cards, all Kings, Queens, and Jacks of Red colour are removed. One card is drawn at random from the remaining cards. Find the probability that it is (i) a Black face card, and (ii) a Red card.',
                    pa: '[Tricky — ਤਾਸ਼ ਦੇ ਪੱਤੇ ਹਟਾਉਣ ਵਾਲਾ ਸਵਾਲ] 52 ਪੱਤਿਆਂ ਦੀ ਗੱਡੀ ਵਿੱਚੋਂ ਲਾਲ ਰੰਗ ਦੇ ਸਾਰੇ ਬਾਦਸ਼ਾਹ, ਬੇਗਮ ਅਤੇ ਗੁਲਾਮ ਕੱਢ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ। ਬਾਕੀ ਬਚੇ ਪੱਤਿਆਂ ਵਿੱਚੋਂ ਇੱਕ ਪੱਤਾ ਕੱਢਿਆ ਜਾਂਦਾ ਹੈ। ਸੰਭਾਵਨਾ ਪਤਾ ਕਰੋ ਕਿ ਉਹ (i) ਕਾਲੇ ਰੰਗ ਦਾ ਤਸਵੀਰ ਵਾਲਾ ਪੱਤਾ ਹੈ, (ii) ਲਾਲ ਰੰਗ ਦਾ ਪੱਤਾ ਹੈ।',
                    hi: '[Tricky — ताश के पत्ते हटाने वाला प्रश्न] 52 पत्तों की गड्डी में से लाल रंग के सभी बादशाह, बेगम और गुलाम निकाल दिए जाते हैं। शेष पत्तों में से यादृच्छया एक पत्ता निकाला जाता है। प्रायिकता ज्ञात कीजिए कि वह (i) काले रंग का तस्वीर वाला पत्ता है, (ii) लाल रंग का पत्ता है।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Red Kings (2) + Red Queens (2) + Red Jacks (2) = 6 red face cards are removed. Remaining total cards = 52 - 6 = 46.',
                        'Step 2: All 6 Black face cards are still in the deck! So P(Black face card) = 6 / 46 = 3 / 23.',
                        'Step 3: Remaining Red cards = 26 - 6 = 20. So P(Red card) = 20 / 46 = 10 / 23.'
                    ],
                    pa: [
                        'Step 1: ਲਾਲ ਰੰਗ ਦੇ ਤਸਵੀਰ ਵਾਲੇ ਪੱਤੇ = 2 + 2 + 2 = 6 ਪੱਤੇ ਕੱਢੇ ਗਏ। ਬਾਕੀ ਬਚੇ ਕੁੱਲ ਪੱਤੇ = 52 - 6 = 46।',
                        'Step 2: ਕਾਲੇ ਰੰਗ ਦੇ ਤਸਵੀਰ ਵਾਲੇ ਪੱਤੇ = 6। ਇਸ ਲਈ P(ਕਾਲਾ ਤਸਵੀਰ ਵਾਲਾ ਪੱਤਾ) = 6 / 46 = 3 / 23।',
                        'Step 3: ਬਾਕੀ ਬਚੇ ਲਾਲ ਪੱਤੇ = 26 - 6 = 20। ਇਸ ਲਈ P(ਲਾਲ ਪੱਤਾ) = 20 / 46 = 10 / 23।'
                    ],
                    hi: [
                        'Step 1: लाल रंग के तस्वीर वाले पत्ते = 2 + 2 + 2 = 6 पत्ते निकाले गए। शेष कुल पत्ते = 52 - 6 = 46।',
                        'Step 2: काले रंग के तस्वीर वाले पत्ते = 6। अतः P(काला तस्वीर वाला पत्ता) = 6 / 46 = 3 / 23।',
                        'Step 3: शेष लाल पत्ते = 26 - 6 = 20। अतः P(लाल पत्ता) = 20 / 46 = 10 / 23।'
                    ]
                },
                finalAnswer: {
                    en: '(i) 3/23; (ii) 10/23',
                    pa: '(i) 3/23; (ii) 10/23',
                    hi: '(i) 3/23; (ii) 10/23'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-math-17-fc-1',
                question: {
                    en: 'State the empirical relationship between Mean, Median, and Mode.',
                    pa: 'ਮੱਧਮਾਨ (Mean), ਮੱਧਿਕਾ (Median) ਅਤੇ ਬਹੁਲਕ (Mode) ਵਿਚਕਾਰ ਅਨੁਭਵੀ ਸਬੰਧ ਦੱਸੋ।',
                    hi: 'माध्य (Mean), माध्यिका (Median) और बहुलक (Mode) के बीच आनुभविक संबंध लिखिए।'
                },
                answer: {
                    en: 'Mode = 3 Median - 2 Mean.',
                    pa: 'ਬਹੁਲਕ (Mode) = 3 ਮੱਧਿਕਾ (Median) - 2 ਮੱਧਮਾਨ (Mean)।',
                    hi: 'बहुलक (Mode) = 3 माध्यिका (Median) - 2 माध्य (Mean)।'
                }
            },
            {
                id: 'ett-math-17-fc-2',
                question: {
                    en: 'What does the abscissa (x-coordinate) of the point of intersection of the "Less than" ogive and "More than" ogive represent?',
                    pa: '"Less than" ਤੋਰਣ ਅਤੇ "More than" ਤੋਰਣ ਦੇ ਕਾਟ-ਬਿੰਦੂ ਦਾ x-ਨਿਰਦੇਸ਼ ਅੰਕ (Abscissa) ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?',
                    hi: '"से कम प्रकार" के तोरण और "से अधिक प्रकार" के तोरण के प्रतिच्छेद बिंदु का भुज (x-निर्देशांक) क्या दर्शाता है?'
                },
                answer: {
                    en: 'The Median of the data.',
                    pa: 'ਅੰਕੜਿਆਂ ਦੀ ਮੱਧਿਕਾ (Median)।',
                    hi: 'आँकड़ों की माध्यिका (Median)।'
                }
            },
            {
                id: 'ett-math-17-fc-3',
                question: {
                    en: 'What is the probability that a randomly chosen leap year contains 53 Sundays?',
                    pa: 'ਇੱਕ ਲੀਪ ਸਾਲ (Leap Year) ਵਿੱਚ 53 ਐਤਵਾਰ ਹੋਣ ਦੀ ਸੰਭਾਵਨਾ ਕੀ ਹੈ?',
                    hi: 'एक यादृच्छया चुने गए लीप वर्ष (Leap Year) में 53 रविवार होने की प्रायिकता क्या है?'
                },
                answer: {
                    en: '2/7 (since 366 days = 52 weeks + 2 consecutive days; for an ordinary year of 365 days it is 1/7).',
                    pa: '2/7 (ਕਿਉਂਕਿ 366 ਦਿਨ = 52 ਹਫ਼ਤੇ + 2 ਲਗਾਤਾਰ ਦਿਨ; ਸਾਧਾਰਨ ਸਾਲ ਲਈ 1/7 ਹੁੰਦੀ ਹੈ)।',
                    hi: '2/7 (क्योंकि 366 दिन = 52 सप्ताह + 2 क्रमागत दिन; साधारण वर्ष के लिए 1/7 होती है)।'
                }
            },
            {
                id: 'ett-math-17-fc-4',
                question: {
                    en: 'How many Face Cards are there in a standard deck of 52 playing cards, and what is the probability of drawing a Face Card?',
                    pa: 'ਤਾਸ਼ ਦੇ 52 ਪੱਤਿਆਂ ਦੀ ਗੱਡੀ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਤਸਵੀਰ ਵਾਲੇ ਪੱਤੇ (Face Cards) ਹੁੰਦੇ ਹਨ ਅਤੇ ਉਹਨਾਂ ਦੇ ਆਉਣ ਦੀ ਸੰਭਾਵਨਾ ਕੀ ਹੈ?',
                    hi: 'ताश के 52 पत्तों की गड्डी में कुल कितने तस्वीर वाले पत्ते (Face Cards) होते हैं और उनके निकलने की प्रायिकता क्या है?'
                },
                answer: {
                    en: '12 Face Cards (4 Kings + 4 Queens + 4 Jacks); Probability = 12/52 = 3/13.',
                    pa: '12 ਤਸਵੀਰ ਵਾਲੇ ਪੱਤੇ (4 ਬਾਦਸ਼ਾਹ + 4 ਬੇਗਮ + 4 ਗੁਲਾਮ); ਸੰਭਾਵਨਾ = 12/52 = 3/13।',
                    hi: '12 तस्वीर वाले पत्ते (4 बादशाह + 4 बेगम + 4 गुलाम); प्रायिकता = 12/52 = 3/13।'
                }
            },
            {
                id: 'ett-math-17-fc-5',
                question: {
                    en: 'If the mean of 20 observations is 15, and each observation is multiplied by 2 and then increased by 3, what is the new mean?',
                    pa: 'ਜੇਕਰ 20 ਨਿਰੀਖਣਾਂ ਦਾ ਮੱਧਮਾਨ 15 ਹੈ, ਅਤੇ ਹਰੇਕ ਨਿਰੀਖਣ ਨੂੰ 2 ਨਾਲ ਗੁਣਾ ਕਰਕੇ 3 ਜੋੜਿਆ ਜਾਵੇ, ਤਾਂ ਨਵਾਂ ਮੱਧਮਾਨ ਕੀ ਹੋਵੇਗਾ?',
                    hi: 'यदि 20 प्रेक्षणों का माध्य 15 है, और प्रत्येक प्रेक्षण को 2 से गुणा करके 3 जोड़ा जाए, तो नया माध्य क्या होगा?'
                },
                answer: {
                    en: 'New Mean = 2(15) + 3 = 33.',
                    pa: 'ਨਵਾਂ ਮੱਧਮਾਨ = 2(15) + 3 = 33।',
                    hi: 'नया माध्य = 2(15) + 3 = 33।'
                }
            },
            {
                id: 'ett-math-17-fc-6',
                question: {
                    en: 'When three unbiased coins are tossed simultaneously, what is the probability of getting at least one head?',
                    pa: 'ਜਦੋਂ ਤਿੰਨ ਸਿੱਕਿਆਂ ਨੂੰ ਇਕੱਠੇ ਉਛਾਲਿਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਚਿੱਤ (Head) ਆਉਣ ਦੀ ਸੰਭਾਵਨਾ ਕੀ ਹੈ?',
                    hi: 'जब तीन निष्पक्ष सिक्कों को एक साथ उछाला जाता है, तो कम-से-कम एक चित (Head) आने की प्रायिकता क्या है?'
                },
                answer: {
                    en: 'P(at least 1 Head) = 1 - P(all 3 Tails) = 1 - 1/8 = 7/8.',
                    pa: 'P(ਘੱਟੋ-ਘੱਟ 1 Head) = 1 - P(ਤਿੰਨੇ Tail) = 1 - 1/8 = 7/8।',
                    hi: 'P(कम-से-कम 1 Head) = 1 - P(तीनों Tail) = 1 - 1/8 = 7/8।'
                }
            }
        ]
    },

    // =========================================================================
    // 5. ETT GENERAL SCIENCE I (PHYSICS CLASS 9–10): MOTION, FORCE, WORK-ENERGY, SOUND, LIGHT, EYE & ELECTRICITY
    // =========================================================================
    {
        topicId: 'ett-science-motion',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 200,
            editorialNote: 'Complete ERB Punjab ETT Paper B General Science Physics block (Class 9–10 PSEB/NCERT) covering Motion, Force & Laws of Motion, Gravitation, Work-Energy-Power, Sound, Sources of Energy, Light (Reflection/Refraction), Human Eye, Electricity & Magnetic Effects of Current.'
        },
        bookRefs: [
            {
                title: 'PSEB / NCERT Science Textbooks (Class 9 & Class 10)',
                author: 'Punjab School Education Board (PSEB) / NCERT',
                chapter: 'Ch 8–12 (Class 9: Motion, Force, Gravitation, Work & Energy, Sound); Ch 10–14 (Class 10: Light, Human Eye, Electricity, Magnetic Effects, Sources of Energy)',
                relevance: 'Covers all Physics units of ETT Paper B General Science (13 to 15 Marks out of 40).'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Motion, Force, Laws of Motion & Gravitation (Class 9 Physics)]
1. **Kinematics (Motion — ਗਤੀ / गति):**
   - **Distance (Scalar, always $\\ge 0$)** vs **Displacement (Vector, shortest path; can be $0$, $+$, or $-$)**.
   - **Average Speed Shortcut (Equal Distances at speeds $v_1$ and $v_2$):**
     $$v_{\\text{avg}} = \\frac{2v_1v_2}{v_1 + v_2} \\quad \\text{(Harmonic Mean — NOT } \\frac{v_1+v_2}{2}\\text{!)}$$
   - **Three Equations of Uniformly Accelerated Motion:**
     $$v = u + at, \\qquad s = ut + \\frac{1}{2}at^2, \\qquad v^2 - u^2 = 2as$$
   - **Graphical Slopes & Areas:** Slope of $x\\text{–}t$ graph $=$ **Velocity**; Slope of $v\\text{–}t$ graph $=$ **Acceleration**; Area under $v\\text{–}t$ graph $=$ **Displacement**. (Uniform circular motion has **constant speed** but **continuously changing velocity** due to changing direction!).

2. **Newton's Laws of Motion & Conservation of Momentum:**
   - **First Law (Law of Inertia — ਜੜ੍ਹਤਾ ਦਾ ਨਿਯਮ):** Defines Force; **Mass is the measure of inertia**.
   - **Second Law:** Rate of change of momentum $\\vec{F} = \\frac{\\Delta \\vec{p}}{\\Delta t} = m\\vec{a}$ (where momentum $p = mv$, SI unit $\\text{kg}\\cdot\\text{m/s}$ or $\\text{N}\\cdot\\text{s}$). *Fielder pulls hands back while catching a fast cricket ball to **increase time $\\Delta t$** and reduce force $F$!*
   - **Third Law:** Action and reaction are equal and opposite, acting on **two different bodies** simultaneously.
   - **Conservation of Momentum & Recoil Velocity of Gun:** $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2 \\implies V_{\\text{gun}} = -\\frac{m_{\\text{bullet}} v_{\\text{bullet}}}{M_{\\text{gun}}}$.

3. **Gravitation, Free Fall, Thrust, Pressure & Buoyancy:**
   - **Universal Law:** $F = \\frac{G m_1 m_2}{r^2}$ ($G = 6.67 \\times 10^{-11}\\text{ N m}^2/\\text{kg}^2$, universal constant everywhere).
   - **Acceleration due to Gravity:** $g = \\frac{GM}{R^2} = 9.8\\text{ m/s}^2$ (independent of mass of falling object!).
     - **$g$ is MAXIMUM at the Poles**, **minimum at the Equator** (since $R_{\\text{eq}} > R_{\\text{pole}}$), and **$g = 0$ at the Centre of the Earth**!
   - **Mass vs Weight:** Mass $m$ is constant everywhere; Weight $W = mg$ varies with $g$:
     $$W_{\\text{Moon}} = \\frac{1}{6}\\,W_{\\text{Earth}} \\qquad (\\text{Mass on Moon remains } m\\text{!})$$
   - **Pressure & Archimedes' Principle:** $P = \\frac{\\text{Thrust}}{\\text{Area}}$ (SI unit Pascal $\\text{Pa} = \\text{N/m}^2$); Upthrust $=$ weight of fluid displaced; **Lactometer** (milk purity) & **Hydrometer** (liquid density) work on Archimedes' Principle.

---

### [Level I: Intermediate — Work, Energy, Sound, Light, Human Eye & Electricity (Class 9–10 Physics)]
1. **Work, Energy, Power, Sound & Sources of Energy:**
   - **Work:** $W = Fs\\cos\\theta$ ($W = 0$ when $\\theta = 90^\\circ$, e.g., **work done by centripetal force on Moon/satellite or coolie carrying load on horizontal road is ZERO!**).
   - **Kinetic & Potential Energy:** $KE = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}$; $PE = mgh$.
   - **Commercial Unit of Electrical Energy (1 Unit):**
     $$1\\text{ kWh} = 1000\\text{ W} \\times 3600\\text{ s} = \\mathbf{3.6 \\times 10^6\\text{ J}}, \\qquad 1\\text{ Horsepower (HP)} = \\mathbf{746\\text{ W}}$$
   - **Sound Waves:** Mechanical **longitudinal** wave (cannot travel through vacuum!; speed $v_{\\text{solid}} > v_{\\text{liquid}} > v_{\\text{gas}}$, in air $\\approx 344\\text{ m/s}$ at $22^\\circ\\text{C}$); $v = f\\lambda$.
     - **Audible range:** $20\\text{ Hz to }20,000\\text{ Hz}$; **Infrasonic:** $< 20\\text{ Hz}$ (earthquakes, elephants, whales); **Ultrasonic:** $> 20\\text{ kHz}$ (bats, dolphins, SONAR, echocardiography).
     - **Minimum Distance for Distinct Echo:** Since persistence of hearing $= 0.1\\text{ s}$, $d = \\frac{v \\times t}{2} = \\frac{344 \\times 0.1}{2} = \\mathbf{17.2\\text{ m}}$.
     - **Pitch** depends on **Frequency**; **Loudness** depends on **Amplitude$^2$** (measured in decibels $\\text{dB}$).
   - **Sources of Energy:** **Biogas (Gobar gas)** contains **$55\\text{–}75\\%$ Methane ($\\text{CH}_4$)**; **Solar cells** use **Silicon (Si)** and convert solar energy directly into DC electrical energy; Nuclear energy works on **Nuclear Fission of $^{235}\\text{U}$** (Sun's energy is **Nuclear Fusion** of Hydrogen into Helium).

2. **Light (Mirrors & Lenses) & The Human Eye:**
   - **Mirror Formula:** $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$, $m = -\\frac{v}{u}$ ($f = R/2$; $f < 0$ for Concave, $f > 0$ for Convex).
     - **Concave Mirror Uses:** Shaving/dentist mirror (erect magnified image when $u < f$), car headlights, solar furnaces.
     - **Convex Mirror Uses:** **Rear-view (wing) mirror in vehicles** (always forms **diminished, erect, virtual image** giving a **wider field of view**!).
   - **Refraction & Lens Formula:** Snell's law $n = \\frac{\\sin i}{\\sin r} = \\frac{c}{v}$ ($n_{\\text{diamond}} = 2.42$, highest!); $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$, $m = \\frac{v}{u}$; **Power of Lens:** $P = \\frac{1}{f(\\text{in m})}\\text{ Dioptre (D)} = \\frac{100}{f(\\text{in cm})}\\text{ D}$ (Convex $P > 0$, Concave $P < 0$).
   - **Human Eye & Defects of Vision Master Table:**
     | Eye Feature / Defect | Cause | Image Formed | Corrective Lens |
     |---|---|---|---|
     | **Normal Eye** (Retina = real & inverted; Iris controls pupil; Ciliary muscles change focal length) | Near point $= \\mathbf{25\\text{ cm}}$, Far point $= \\mathbf{\\infty}$ | On Retina | None |
     | **Myopia (Short-sightedness / ਨਿਕਟ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼)** | Eyeball **elongated** OR lens focal length too short | **In front of Retina** | **Concave (Diverging) Lens ($P < 0$)** |
     | **Hypermetropia (Far-sightedness / ਦੂਰ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼)** | Eyeball **too short** OR lens focal length too long | **Behind Retina** | **Convex (Converging) Lens ($P > 0$)** |
     | **Presbyopia (ਜ਼ਰਾ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼)** | Weakening of ciliary muscles in old age | Near & far both affected | **Bifocal Lens** (Upper: Concave; Lower: Convex) |
   - **Atmospheric Optical Phenomena:** **Dispersion** through prism (VIBGYOR: **Red has longest $\\lambda$, bends LEAST**; **Violet has shortest $\\lambda$, bends MOST**); **Rainbow** (dispersion + internal reflection + refraction in water droplets); **Twinkling of stars** & **2-minute early sunrise / delayed sunset** $=$ **Atmospheric Refraction**; **Blue colour of clear sky** & **Tyndall effect** $=$ **Scattering of light** (Astronaut sees sky **BLACK** due to no atmosphere!).

3. **Electricity & Magnetic Effects of Electric Current:**
   - **Ohm's Law & Resistivity:** $I = \\frac{Q}{t}$, $V = \\frac{W}{Q}$, $V = IR$, $R = \\rho \\frac{L}{A}$ (Resistivity $\\rho$ in $\\Omega\\cdot\\text{m}$ depends **ONLY on material and temperature**, NOT on length or area!).
   - **Series vs Parallel:** $R_s = R_1 + R_2 + \\dots$; $\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$ (**Ammeter** has low resistance, connected in **Series**; **Voltmeter** has high resistance, connected in **Parallel**).
   - **Joule's Law of Heating & Electric Power:** $H = I^2Rt$, $P = VI = I^2R = \\frac{V^2}{R}$.
     - **Electric Bulb Filament:** **Tungsten ($\\text{W}$)** (very high melting point **$3380^\\circ\\text{C}$**, filled with inert $\\text{Ar/N}_2$).
     - **Electric Fuse Wire:** Alloy of **Lead ($\\text{Pb}$) + Tin ($\\text{Sn}$)** — **HIGH resistivity and LOW melting point**, connected in **Series** with Live wire.
   - **Magnetism & Domestic Circuits:** Magnetic field inside a current-carrying **Solenoid is uniform (parallel straight lines)**; **Fleming's Left-Hand Rule** $\\to$ **Electric Motor** (Force on conductor); **Fleming's Right-Hand Rule** $\\to$ **Electric Generator** (Electromagnetic Induction, Faraday). Domestic supply in India: **$220\\text{ V}, 50\\text{ Hz}$ AC** connected in **Parallel** (Live $=$ Red, Neutral $=$ Black, Earth $=$ Green).

---

### [Level A: Advanced — 60-Second Physics Numerical Shortcuts]
1. **Wire Stretching Resistance Shortcut ($R' = n^2 R$):**
   - When a wire of resistance $R$ is **stretched (melted/drawn)** to **$n$ times its original length** ($L' = nL$), its cross-sectional area becomes $A' = A/n$ (volume conserved). Therefore:
     $$R' = \\mathbf{n^2 R} \\qquad (\\text{and if radius is halved } r' = r/2,\\text{ then } R' = 2^4 R = \\mathbf{16R}\\text{!})$$
   - *(Caution: Resistivity $\\rho$ remains **UNCHANGED**!)*
2. **Kinetic Energy vs Momentum Shortcut ($KE = \\frac{p^2}{2m}$):**
   - If velocity (or momentum) is **doubled ($2\\times$)**, Kinetic Energy becomes **$2^2 = 4\\times$** (increases by $300\\%$).
   - Conversely, if Kinetic Energy increases by $300\\%$ ($4\\times$), momentum $p = \\sqrt{2m\\,KE}$ becomes $\\sqrt{4} = 2\\times$ (increases by **$100\\%$**)!`,
            pa: `### [Level B: Basic — ਗਤੀ, ਬਲ ਅਤੇ ਗੁਰੂਤਾਕਰਸ਼ਣ (Class 9 ਭੌਤਿਕ ਵਿਗਿਆਨ)]
1. **ਗਤੀ (Motion) ਅਤੇ ਸਮੀਕਰਨਾਂ:**
   - **ਔਸਤ ਚਾਲ ਸ਼ਾਰਟਕੱਟ (ਬਰਾਬਰ ਦੂਰੀਆਂ ਲਈ):** $v_{\\text{avg}} = \\frac{2v_1v_2}{v_1 + v_2}$।
   - **ਗਤੀ ਦੀਆਂ 3 ਸਮੀਕਰਨਾਂ:** $v = u + at$, $s = ut + \\frac{1}{2}at^2$, $v^2 - u^2 = 2as$।
   - $x\\text{–}t$ ਗ੍ਰਾਫ ਦੀ ਢਲਾਣ $=$ ਵੇਗ; $v\\text{–}t$ ਗ੍ਰਾਫ ਦੀ ਢਲਾਣ $=$ ਪ੍ਰਵੇਗ; $v\\text{–}t$ ਗ੍ਰਾਫ ਹੇਠਲਾ ਖੇਤਰਫਲ $=$ ਵਿਸਥਾਪਨ।

2. **ਨਿਊਟਨ ਦੇ ਗਤੀ ਦੇ ਨਿਯਮ ਅਤੇ ਸੰਵੇਗ ਸੰਰੱਖਿਅਣ:**
   - **ਪਹਿਲਾ ਨਿਯਮ (ਜੜ੍ਹਤਾ ਦਾ ਨਿਯਮ):** ਪੁੰਜ (Mass) ਜੜ੍ਹਤਾ ਦਾ ਮਾਪ ਹੈ।
   - **ਦੂਜਾ ਨਿਯਮ:** $F = \\frac{\\Delta p}{\\Delta t} = ma$ (ਸੰਵੇਗ $p = mv$, ਇਕਾਈ $\\text{kg m/s}$)। ਕ੍ਰਿਕਟ ਖਿਡਾਰੀ ਗੇਂਦ ਫੜਦੇ ਸਮੇਂ ਹੱਥ ਪਿੱਛੇ ਖਿੱਚਦਾ ਹੈ ਤਾਂ ਜੋ ਸਮਾਂ $\\Delta t$ ਵਧੇ ਅਤੇ ਬਲ $F$ ਘੱਟ ਲੱਗੇ।
   - **ਤੀਜਾ ਨਿਯਮ:** ਕਿਰਿਆ ਅਤੇ ਪ੍ਰਤੀਕਿਰਿਆ ਬਰਾਬਰ ਤੇ ਉਲਟ ਹੁੰਦੀਆਂ ਹਨ ਅਤੇ **ਦੋ ਵੱਖ-ਵੱਖ ਵਸਤੂਆਂ** ਉੱਤੇ ਲੱਗਦੀਆਂ ਹਨ।

3. **ਗੁਰੂਤਾਕਰਸ਼ਣ (Gravitation) ਅਤੇ ਉਛਾਲ ਬਲ:**
   - $F = \\frac{Gm_1m_2}{r^2}$, $g = \\frac{GM}{R^2} = 9.8\\text{ m/s}^2$। **$g$ ਦਾ ਮੁੱਲ ਧਰੁਵਾਂ (Poles) ਤੇ ਸਭ ਤੋਂ ਵੱਧ**, ਭੂ-ਮੱਧ ਰੇਖਾ ਤੇ ਘੱਟ, ਅਤੇ **ਧਰਤੀ ਦੇ ਕੇਂਦਰ ਤੇ ਸਿਫ਼ਰ ($0$)** ਹੁੰਦਾ ਹੈ!
   - **ਚੰਦਰਮਾ ਉੱਤੇ ਭਾਰ:** $W_{\\text{Moon}} = \\frac{1}{6}\\,W_{\\text{Earth}}$ (ਪਰ ਪੁੰਜ $m$ ਬਰਾਬਰ ਰਹਿੰਦਾ ਹੈ!)। **ਲੈਕਟੋਮੀਟਰ** (ਦੁੱਧ ਦੀ ਸ਼ੁੱਧਤਾ) ਆਰਕੀਮਿਡੀਜ਼ ਦੇ ਸਿਧਾਂਤ ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ।

---

### [Level I: Intermediate — ਕਾਰਜ-ਊਰਜਾ, ਧੁਨੀ, ਪ੍ਰਕਾਸ਼, ਮਨੁੱਖੀ ਅੱਖ ਅਤੇ ਬਿਜਲੀ (Class 9–10)]
1. **ਕਾਰਜ, ਊਰਜਾ ਅਤੇ ਧੁਨੀ (Work, Energy & Sound):**
   - $W = Fs\\cos\\theta$ ($\\theta = 90^\\circ$ ਤੇ ਕਾਰਜ $= 0$); $KE = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}$; $PE = mgh$।
   - **ਬਿਜਲੀ ਊਰਜਾ ਦੀ ਵਪਾਰਕ ਇਕਾਈ:** $1\\text{ kWh (1 ਯੂਨਿਟ)} = \\mathbf{3.6 \\times 10^6\\text{ J}}$; $1\\text{ HP} = \\mathbf{746\\text{ W}}$।
   - **ਧੁਨੀ (Sound):** ਯਾਂਤਰਿਕ **ਲੰਬਕਾਰੀ (Longitudinal)** ਤਰੰਗ ਹੈ (ਖਲਾਅ/Vacuum ਵਿੱਚ ਨਹੀਂ ਚੱਲ ਸਕਦੀ; ਚਾਲ $v_{\\text{ਠੋਸ}} > v_{\\text{ਦ੍ਰਵ}} > v_{\\text{ਗੈਸ}}$)। ਸੁਣਨਯੋਗ ਸੀਮਾ: **$20\\text{ Hz ਤੋਂ }20,000\\text{ Hz}$**; **ਗੂੰਜ (Echo) ਲਈ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ $= \\mathbf{17.2\\text{ m}}$**।
   - **ਊਰਜਾ ਦੇ ਸਰੋਤ:** ਬਾਇਓਗੈਸ ਵਿੱਚ **$55\\text{–}75\\%$ ਮੀਥੇਨ ($\\text{CH}_4$)** ਹੁੰਦੀ ਹੈ; ਸੋਲਰ ਸੈੱਲ ਵਿੱਚ **ਸਿਲੀਕਾਨ (Si)** ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

2. **ਪ੍ਰਕਾਸ਼ (ਦਰਪਣ ਤੇ ਲੈਂਜ਼) ਅਤੇ ਮਨੁੱਖੀ ਅੱਖ:**
   - **ਦਰਪਣ ਸੂਤਰ:** $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$; **ਲੈਂਜ਼ ਸੂਤਰ:** $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$; **ਲੈਂਜ਼ ਦੀ ਸ਼ਕਤੀ:** $P = \\frac{1}{f(\\text{m})}\\text{ D}$। ਵਾਹਨਾਂ ਵਿੱਚ ਪਿੱਛੇ ਦੇਖਣ ਲਈ **ਉੱਤਲ ਦਰਪਣ (Convex mirror)** ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
   - **ਮਨੁੱਖੀ ਅੱਖ:** ਪ੍ਰਤੀਬਿੰਬ **ਰੈਟੀਨਾ (Retina)** ਤੇ ਵਾਸਤਵਿਕ ਅਤੇ ਉਲਟਾ ਬਣਦਾ ਹੈ; ਸਪੱਸ਼ਟ ਦ੍ਰਿਸ਼ਟੀ ਦੀ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ $= \\mathbf{25\\text{ cm}}$ ਅਤੇ ਦੂਰ ਬਿੰਦੂ $= \\infty$।
     - **ਨਿਕਟ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ (Myopia):** ਪ੍ਰਤੀਬਿੰਬ ਰੈਟੀਨਾ ਤੋਂ ਅੱਗੇ ਬਣਦਾ ਹੈ $\\to$ **ਅਵਤਲ ਲੈਂਜ਼ (Concave lens)**।
     - **ਦੂਰ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ (Hypermetropia):** ਪ੍ਰਤੀਬਿੰਬ ਰੈਟੀਨਾ ਤੋਂ ਪਿੱਛੇ ਬਣਦਾ ਹੈ $\\to$ **ਉੱਤਲ ਲੈਂਜ਼ (Convex lens)**।
   - **ਪ੍ਰਿਜ਼ਮ ਅਤੇ ਵਾਯੂਮੰਡਲੀ ਪ੍ਰਭਾਵ:** ਲਾਲ ਰੰਗ ਸਭ ਤੋਂ ਘੱਟ ਮੁੜਦਾ ਹੈ, ਬੈਂਗਣੀ ਸਭ ਤੋਂ ਵੱਧ; **ਤਾਰਿਆਂ ਦਾ ਟਿਮਟਿਮਾਉਣਾ $=$ ਵਾਯੂਮੰਡਲੀ ਅਪਵਰਤਨ**; **ਆਕਾਸ਼ ਦਾ ਨੀਲਾ ਰੰਗ $=$ ਪ੍ਰਕਾਸ਼ ਦਾ ਖਿੰਡਾਅ (Scattering)**।

3. **ਬਿਜਲੀ ਅਤੇ ਚੁੰਬਕੀ ਪ੍ਰਭਾਵ (Electricity & Magnetism):**
   - $V = IR$, $R = \\rho\\frac{L}{A}$, $H = I^2Rt$, $P = VI = I^2R = \\frac{V^2}{R}$।
   - **ਬੱਲਬ ਦਾ ਫਿਲਾਮੈਂਟ:** **ਟੰਗਸਟਨ ($3380^\\circ\\text{C}$)**; **ਫਿਊਜ਼ ਤਾਰ:** **ਸਿੱਕਾ ਅਤੇ ਟੀਨ ($\text{Pb + Sn}$)** ਮਿਸ਼ਰਤ ਧਾਤ (ਉੱਚ ਪ੍ਰਤੀਰੋਧਕਤਾ ਅਤੇ ਘੱਟ ਪਿਘਲਣ ਦਰਜਾ)।
   - **ਫਲੇਮਿੰਗ ਦਾ ਖੱਬੇ ਹੱਥ ਦਾ ਨਿਯਮ $\\to$ ਬਿਜਲੀ ਮੋਟਰ**; **ਸੱਜੇ ਹੱਥ ਦਾ ਨਿਯਮ $\\to$ ਬਿਜਲੀ ਜਨਰੇਟਰ**। ਘਰੇਲੂ ਸਪਲਾਈ: **$220\\text{ V}, 50\\text{ Hz}$ ਸਮਾਂਤਰ ਕ੍ਰਮ ਵਿੱਚ**।

---

### [Level A: Advanced — 60-ਸੈਕਿੰਡ ਭੌਤਿਕ ਵਿਗਿਆਨ ਸ਼ਾਰਟਕੱਟ]
1. **ਤਾਰ ਖਿੱਚਣ (Stretching) ਦਾ ਸ਼ਾਰਟਕੱਟ:** ਜੇਕਰ $R$ ਪ੍ਰਤੀਰੋਧ ਵਾਲੀ ਤਾਰ ਨੂੰ ਖਿੱਚ ਕੇ ਲੰਬਾਈ $n$ ਗੁਣਾ ਕੀਤੀ ਜਾਵੇ, ਤਾਂ ਨਵਾਂ ਪ੍ਰਤੀਰੋਧ **$R' = n^2 R$** ਹੋ ਜਾਂਦਾ ਹੈ (ਪਰ ਪ੍ਰਤੀਰੋਧਕਤਾ $\\rho$ ਨਹੀਂ ਬਦਲਦੀ!)।
2. **ਗਤਿਜ ਊਰਜਾ ਸ਼ਾਰਟਕੱਟ:** ਜੇਕਰ ਵੇਗ ਦੁੱਗਣਾ ($2\\times$) ਹੋਵੇ, ਤਾਂ ਗਤਿਜ ਊਰਜਾ **$4$ ਗੁਣਾ ($4\\times$)** ਹੋ ਜਾਂਦੀ ਹੈ!`,
            hi: `### [Level B: Basic — गति, बल एवं गुरुत्वाकर्षण (Class 9 भौतिकी)]
1. **गति (Motion) एवं समीकरण:**
   - **औसत चाल शॉर्टकट (समान दूरियों के लिए):** $v_{\\text{avg}} = \\frac{2v_1v_2}{v_1 + v_2}$।
   - **गति के 3 समीकरण:** $v = u + at$, $s = ut + \\frac{1}{2}at^2$, $v^2 - u^2 = 2as$।
   - $x\\text{–}t$ ग्राफ की ढाल $=$ वेग; $v\\text{–}t$ ग्राफ की ढाल $=$ त्वरण; $v\\text{–}t$ ग्राफ के नीचे का क्षेत्रफल $=$ विस्थापन।

2. **न्यूटन के गति नियम एवं संवेग संरक्षण:**
   - **प्रथम नियम (जड़त्व का नियम):** द्रव्यमान (Mass) जड़त्व की माप है।
   - **द्वितीय नियम:** $F = \\frac{\\Delta p}{\\Delta t} = ma$ (संवेग $p = mv$, मात्रक $\\text{kg m/s}$)। क्रिकेट खिलाड़ी गेंद पकड़ते समय हाथ पीछे खींचता है ताकि समय $\\Delta t$ बढ़े और बल $F$ कम लगे।
   - **तृतीय नियम:** क्रिया एवं प्रतिक्रिया बराबर तथा विपरीत होती हैं और **दो अलग-अलग वस्तुओं** पर कार्य करती हैं।

3. **गुरुत्वाकर्षण (Gravitation) एवं उत्प्लावकता:**
   - $F = \\frac{Gm_1m_2}{r^2}$, $g = \\frac{GM}{R^2} = 9.8\\text{ m/s}^2$। **$g$ का मान ध्रुवों (Poles) पर अधिकतम**, विषुवत रेखा पर न्यूनतम, तथा **पृथ्वी के केंद्र पर शून्य ($0$)** होता है!
   - **चंद्रमा पर भार:** $W_{\\text{Moon}} = \\frac{1}{6}\\,W_{\\text{Earth}}$ (किंतु द्रव्यमान $m$ अपरिवर्तित रहता है!)। **लैक्टोमीटर** (दूध की शुद्धता) आर्किमिडीज के सिद्धांत पर कार्य करता है।

---

### [Level I: Intermediate — कार्य-ऊर्जा, ध्वनि, प्रकाश, मानव नेत्र एवं विद्युत (Class 9–10)]
1. **कार्य, ऊर्जा एवं ध्वनि (Work, Energy & Sound):**
   - $W = Fs\\cos\\theta$ ($\\theta = 90^\\circ$ पर कार्य $= 0$); $KE = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}$; $PE = mgh$।
   - **विद्युत ऊर्जा का व्यावसायिक मात्रक:** $1\\text{ kWh (1 यूनिट)} = \\mathbf{3.6 \\times 10^6\\text{ J}}$; $1\\text{ HP} = \\mathbf{746\\text{ W}}$।
   - **ध्वनि (Sound):** यांत्रिक **अनुदैर्ध्य (Longitudinal)** तरंग है (निर्वात/Vacuum में गमन नहीं कर सकती; चाल $v_{\\text{ठोस}} > v_{\\text{द्रव}} > v_{\\text{गैस}}$)। श्रव्य परिसर: **$20\\text{ Hz से }20,000\\text{ Hz}$**; **स्पष्ट प्रतिध्वनि (Echo) के लिए न्यूनतम दूरी $= \\mathbf{17.2\\text{ m}}$**।
   - **ऊर्जा के स्रोत:** बायोगैस में **$55\\text{–}75\\%$ मीथेन ($\\text{CH}_4$)** होती है; सौर सेल में **सिलिकॉन (Si)** प्रयुक्त होता है।

2. **प्रकाश (दर्पण व लेंस) एवं मानव नेत्र:**
   - **दर्पण सूत्र:** $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$; **लेंस सूत्र:** $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$; **लेंस की क्षमता:** $P = \\frac{1}{f(\\text{m})}\\text{ D}$। वाहनों में पश्च-दृश्य (Rear-view) के लिए **उत्तल दर्पण (Convex mirror)** प्रयुक्त होता है।
   - **मानव नेत्र:** प्रतिबिंब **रेटिना (दृष्टिपटल)** पर वास्तविक एवं उल्टा बनता है; स्पष्ट दर्शन की न्यूनतम दूरी $= \\mathbf{25\\text{ cm}}$ तथा दूर बिंदु $= \\infty$।
     - **निकट-दृष्टि दोष (Myopia):** प्रतिबिंब रेटिना के आगे बनता है $\\to$ **अवतल लेंस (Concave lens)**।
     - **दीर्घ-दृष्टि दोष (Hypermetropia):** प्रतिबिंब रेटिना के पीछे बनता है $\\to$ **उत्तल लेंस (Convex lens)**।
   - **प्रिज्म एवं वायुमंडलीय घटनाएँ:** लाल रंग सबसे कम विचलित होता है, बैंगनी सबसे अधिक; **तारों का टिमटिमाना $=$ वायुमंडलीय अपवर्तन**; **स्वच्छ आकाश का नीला रंग $=$ प्रकाश का प्रकीर्णन (Scattering)**।

3. **विद्युत एवं चुंबकीय प्रभाव (Electricity & Magnetism):**
   - $V = IR$, $R = \\rho\\frac{L}{A}$, $H = I^2Rt$, $P = VI = I^2R = \\frac{V^2}{R}$।
   - **बल्ब का तंतु (Filament):** **टंगस्टन ($3380^\\circ\\text{C}$)**; **फ्यूज तार:** **सीसा एवं टिन ($\text{Pb + Sn}$)** मिश्रधातु (उच्च प्रतिरोधकता एवं निम्न गलनांक)।
   - **फ्लेमिंग का वामहस्त नियम $\\to$ विद्युत मोटर**; **दक्षिणहस्त नियम $\\to$ विद्युत जनित्र (Generator)**। घरेलू आपूर्ति: **$220\\text{ V}, 50\\text{ Hz}$ पार्श्वक्रम (Parallel) में**।

---

### [Level A: Advanced — 60-सेकंड भौतिकी शॉर्टकट]
1. **तार खींचने (Stretching) का शॉर्टकट:** यदि $R$ प्रतिरोध वाले तार को खींचकर लंबाई $n$ गुना कर दी जाए, तो नया प्रतिरोध **$R' = n^2 R$** हो जाता है (किंतु प्रतिरोधकता $\\rho$ अपरिवर्तित रहती है!)।
2. **गतिज ऊर्जा शॉर्टकट:** यदि वेग दोगुना ($2\\times$) हो जाए, तो गतिज ऊर्जा **$4$ गुना ($4\\times$)** हो जाती है!`
        },
        keyNotes: {
            en: [
                'Kinematics & Gravitation: Average speed for equal distances = 2v1v2/(v1+v2); g = GM/R^2 = 9.8 m/s^2 (max at poles, zero at Earth centre); Weight on Moon = (1/6) Weight on Earth.',
                'Work, Energy & Power: W = Fs cos θ (zero at 90°); KE = (1/2)mv^2 = p^2/(2m); 1 kWh (1 commercial unit) = 3.6 × 10^6 J; 1 HP = 746 W.',
                'Sound Waves: Mechanical longitudinal wave (cannot travel in vacuum; v_solid > v_liquid > v_gas); audible range 20 Hz–20,000 Hz; minimum distance for distinct echo = 17.2 m.',
                'Mirrors & Lenses: Mirror formula 1/v + 1/u = 1/f; Lens formula 1/v - 1/u = 1/f; Power P = 1/f(m) Dioptre; Convex mirror is used as rear-view mirror in vehicles.',
                'Human Eye & Atmospheric Optics: Near point = 25 cm, Far point = ∞; Myopia corrected by Concave lens, Hypermetropia by Convex lens; Twinkling of stars = Atmospheric Refraction, Blue sky = Scattering.',
                'Electricity Shortcuts: R = ρL/A; stretching a wire to n times length makes new resistance R\' = n^2 R (resistivity ρ unchanged); Fuse wire is Pb-Sn alloy (low melting point, high resistivity).'
            ],
            pa: [
                'ਗਤੀ ਅਤੇ ਗੁਰੂਤਾਕਰਸ਼ਣ: ਬਰਾਬਰ ਦੂਰੀਆਂ ਲਈ ਔਸਤ ਚਾਲ = 2v1v2/(v1+v2); g = 9.8 m/s^2 (ਧਰੁਵਾਂ ਤੇ ਵੱਧ ਤੋਂ ਵੱਧ, ਧਰਤੀ ਦੇ ਕੇਂਦਰ ਤੇ 0); ਚੰਦਰਮਾ ਤੇ ਭਾਰ = (1/6) ਧਰਤੀ ਤੇ ਭਾਰ।',
                'ਕਾਰਜ, ਊਰਜਾ ਅਤੇ ਸ਼ਕਤੀ: W = Fs cos θ (90° ਤੇ ਸਿਫ਼ਰ); KE = (1/2)mv^2 = p^2/(2m); 1 kWh (1 ਯੂਨਿਟ) = 3.6 × 10^6 J; 1 HP = 746 W।',
                'ਧੁਨੀ ਤਰੰਗਾਂ: ਯਾਂਤਰਿਕ ਲੰਬਕਾਰੀ ਤਰੰਗ (ਖਲਾਅ ਵਿੱਚ ਨਹੀਂ ਚੱਲ ਸਕਦੀ; v_ਠੋਸ > v_ਦ੍ਰਵ > v_ਗੈਸ); ਸੁਣਨਯੋਗ ਸੀਮਾ 20 Hz–20,000 Hz; ਗੂੰਜ (Echo) ਲਈ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ = 17.2 m।',
                'ਦਰਪਣ ਅਤੇ ਲੈਂਜ਼: ਦਰਪਣ ਸੂਤਰ 1/v + 1/u = 1/f; ਲੈਂਜ਼ ਸੂਤਰ 1/v - 1/u = 1/f; ਸ਼ਕਤੀ P = 1/f(m) ਡਾਇਓਪਟਰ; ਵਾਹਨਾਂ ਦੇ ਸਾਈਡ ਸ਼ੀਸ਼ੇ ਵਿੱਚ ਉੱਤਲ ਦਰਪਣ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
                'ਮਨੁੱਖੀ ਅੱਖ: ਨਿਕਟ ਬਿੰਦੂ = 25 cm, ਦੂਰ ਬਿੰਦੂ = ∞; ਨਿਕਟ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ (Myopia) -> ਅਵਤਲ ਲੈਂਜ਼; ਦੂਰ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ (Hypermetropia) -> ਉੱਤਲ ਲੈਂਜ਼; ਤਾਰਿਆਂ ਦਾ ਟਿਮਟਿਮਾਉਣਾ = ਵਾਯੂਮੰਡਲੀ ਅਪਵਰਤਨ।',
                'ਬਿਜਲੀ ਸ਼ਾਰਟਕੱਟ: R = ρL/A; ਤਾਰ ਨੂੰ ਖਿੱਚ ਕੇ n ਗੁਣਾ ਲੰਬਾ ਕਰਨ ਤੇ ਨਵਾਂ ਪ੍ਰਤੀਰੋਧ R\' = n^2 R (ਪ੍ਰਤੀਰੋਧਕਤਾ ρ ਸਥਿਰ); ਫਿਊਜ਼ ਤਾਰ = Pb + Sn ਮਿਸ਼ਰਤ ਧਾਤ।'
            ],
            hi: [
                'गति एवं गुरुत्वाकर्षण: समान दूरियों के लिए औसत चाल = 2v1v2/(v1+v2); g = 9.8 m/s^2 (ध्रुवों पर अधिकतम, पृथ्वी के केंद्र पर 0); चंद्रमा पर भार = (1/6) पृथ्वी पर भार।',
                'कार्य, ऊर्जा एवं शक्ति: W = Fs cos θ (90° पर शून्य); KE = (1/2)mv^2 = p^2/(2m); 1 kWh (1 यूनिट) = 3.6 × 10^6 J; 1 HP = 746 W।',
                'ध्वनि तरंगें: यांत्रिक अनुदैर्ध्य तरंग (निर्वात में गमन नहीं करती; v_ठोस > v_द्रव > v_गैस); श्रव्य परिसर 20 Hz–20,000 Hz; स्पष्ट प्रतिध्वनि (Echo) के लिए न्यूनतम दूरी = 17.2 m।',
                'दर्पण एवं लेंस: दर्पण सूत्र 1/v + 1/u = 1/f; लेंस सूत्र 1/v - 1/u = 1/f; क्षमता P = 1/f(m) डाइऑप्टर; वाहनों के पश्च-दृश्य दर्पण में उत्तल दर्पण प्रयुक्त होता है।',
                'मानव नेत्र: निकट बिंदु = 25 cm, दूर बिंदु = ∞; निकट-दृष्टि दोष (Myopia) -> अवतल लेंस; दीर्घ-दृष्टि दोष (Hypermetropia) -> उत्तल लेंस; तारों का टिमटिमाना = वायुमंडलीय अपवर्तन।',
                'विद्युत शॉर्टकट: R = ρL/A; तार को खींचकर n गुना लंबा करने पर नया प्रतिरोध R\' = n^2 R (प्रतिरोधकता ρ अपरिवर्तित); फ्यूज तार = Pb + Sn मिश्रधातु।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Eye Defects Memory Trick: Myopia (short word -> short-sightedness -> Concave lens); Hypermetropia (long word -> far-sightedness -> Convex lens).',
                'Wire Stretching vs Cutting: Stretching wire of resistance R to n times length gives R\' = n^2 R; cutting wire into n equal pieces and connecting in parallel gives R_eq = R / n^2.',
                'Prism Dispersion Order (VIBGYOR): Red has maximum wavelength, maximum speed in glass, minimum refractive index, and bends the LEAST; Violet bends the MOST.',
                'Domestic Wiring Rules: Appliances connected in PARALLEL at 220 V, 50 Hz; Fuse & Switch always on LIVE (Red) wire; Earth wire is Green.',
                'Biogas & Solar Facts: Major combustible gas in Biogas/CNG is Methane (CH4, 55–75%); Solar cell material is Silicon (Si).'
            ],
            pa: [
                'ਅੱਖ ਦੇ ਦੋਸ਼ ਟ੍ਰਿਕ: ਨਿਕਟ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ (Myopia -> ਨੇੜੇ ਦਿਸਦਾ, ਦੂਰ ਨਹੀਂ -> ਅਵਤਲ ਲੈਂਜ਼); ਦੂਰ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ (Hypermetropia -> ਦੂਰ ਦਿਸਦਾ, ਨੇੜੇ ਨਹੀਂ -> ਉੱਤਲ ਲੈਂਜ਼)।',
                'ਤਾਰ ਖਿੱਚਣਾ ਬਨਾਮ ਕੱਟਣਾ: R ਪ੍ਰਤੀਰੋਧ ਵਾਲੀ ਤਾਰ ਨੂੰ n ਗੁਣਾ ਖਿੱਚਣ ਤੇ R\' = n^2 R; n ਬਰਾਬਰ ਟੁਕੜਿਆਂ ਵਿੱਚ ਕੱਟ ਕੇ ਸਮਾਂਤਰ ਜੋੜਨ ਤੇ R_eq = R / n^2।',
                'ਪ੍ਰਿਜ਼ਮ ਵਰਣ-ਵਿੱਖੇਪਣ (VIBGYOR): ਲਾਲ ਰੰਗ ਦੀ ਤਰੰਗ ਲੰਬਾਈ ਸਭ ਤੋਂ ਵੱਧ ਹੁੰਦੀ ਹੈ ਅਤੇ ਇਹ ਸਭ ਤੋਂ ਘੱਟ ਮੁੜਦਾ ਹੈ; ਬੈਂਗਣੀ ਸਭ ਤੋਂ ਵੱਧ ਮੁੜਦਾ ਹੈ।',
                'ਘਰੇਲੂ ਵਾਇਰਿੰਗ: ਉਪਕਰਨ 220 V, 50 Hz ਤੇ ਸਮਾਂਤਰ (Parallel) ਜੁੜਦੇ ਹਨ; ਫਿਊਜ਼ ਅਤੇ ਸਵਿੱਚ ਹਮੇਸ਼ਾ ਲਾਈਵ (ਲਾਲ) ਤਾਰ ਤੇ ਲੱਗਦੇ ਹਨ; ਅਰਥ ਤਾਰ ਹਰੀ ਹੁੰਦੀ ਹੈ।',
                'ਬਾਇਓਗੈਸ ਅਤੇ ਸੋਲਰ ਸੈੱਲ: ਬਾਇਓਗੈਸ/CNG ਦਾ ਮੁੱਖ ਘਟਕ ਮੀਥੇਨ (CH4, 55–75%) ਹੈ; ਸੋਲਰ ਸੈੱਲ ਸਿਲੀਕਾਨ (Si) ਤੋਂ ਬਣਦੇ ਹਨ।'
            ],
            hi: [
                'नेत्र दोष ट्रिक: निकट-दृष्टि दोष (Myopia -> निकट दिखता है, दूर नहीं -> अवतल लेंस); दीर्घ-दृष्टि दोष (Hypermetropia -> दूर दिखता है, निकट नहीं -> उत्तल लेंस)।',
                'तार खींचना बनाम काटना: R प्रतिरोध वाले तार को n गुना खींचने पर R\' = n^2 R; n बराबर टुकड़ों में काटकर पार्श्वक्रम में जोड़ने पर R_eq = R / n^2।',
                'प्रिज्म वर्ण-विक्षेपण (VIBGYOR): लाल रंग की तरंगदैर्घ्य सर्वाधिक होती है और यह सबसे कम मुड़ता है; बैंगनी सबसे अधिक मुड़ता है।',
                'घरेलू वायरिंग: उपकरण 220 V, 50 Hz पर पार्श्वक्रम (Parallel) में जुड़ते हैं; फ्यूज व स्विच सदैव विद्युन्मय (लाल) तार में लगते हैं; भूसंपर्क तार हरा होता है।',
                'बायोगैस एवं सौर सेल: बायोगैस/CNG का मुख्य घटक मीथेन (CH4, 55–75%) है; सौर सेल सिलिकॉन (Si) से बनते हैं।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Thinking the mass of a 60 kg astronaut becomes 10 kg on the Moon. Correction: Mass is an intrinsic property of matter and remains 60 kg everywhere! Only Weight (W = mg) becomes 1/6th on the Moon (e.g., 600 N on Earth becomes 100 N on the Moon).',
                'Misconception: Thinking resistivity (ρ) of a copper wire doubles when its length is doubled. Correction: Resistance R doubles (or becomes 4R if stretched), but specific resistance / resistivity (ρ) depends ONLY on the nature of the material and temperature, NOT on dimensions.',
                'Misconception: Using the arithmetic mean (v1 + v2)/2 to find average speed when a car travels from A to B at v1 and returns from B to A at v2. Correction: Because times taken are unequal for equal distances, average speed is the harmonic mean 2v1v2 / (v1 + v2).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਇਹ ਸੋਚਣਾ ਕਿ 60 kg ਪੁੰਜ ਵਾਲੇ ਪੁਲਾੜ ਯਾਤਰੀ ਦਾ ਪੁੰਜ ਚੰਦਰਮਾ ਉੱਤੇ 10 kg ਰਹਿ ਜਾਂਦਾ ਹੈ। ਸੁਧਾਰ: ਪੁੰਜ (Mass) ਹਰ ਥਾਂ 60 kg ਹੀ ਰਹਿੰਦਾ ਹੈ! ਸਿਰਫ਼ ਭਾਰ (W = mg) ਚੰਦਰਮਾ ਉੱਤੇ 1/6 ਗੁਣਾ (600 N ਤੋਂ 100 N) ਹੁੰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਤਾਂਬੇ ਦੀ ਤਾਰ ਦੀ ਲੰਬਾਈ ਦੁੱਗਣੀ ਕਰਨ ਨਾਲ ਉਸ ਦੀ ਪ੍ਰਤੀਰੋਧਕਤਾ (Resistivity ρ) ਵੀ ਦੁੱਗਣੀ ਹੋ ਜਾਂਦੀ ਹੈ। ਸੁਧਾਰ: ਪ੍ਰਤੀਰੋਧ R ਬਦਲਦਾ ਹੈ, ਪਰ ਪ੍ਰਤੀਰੋਧਕਤਾ (ρ) ਸਿਰਫ਼ ਪਦਾਰਥ ਦੀ ਪ੍ਰਕਿਰਤੀ ਅਤੇ ਤਾਪਮਾਨ ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ, ਲੰਬਾਈ ਤੇ ਨਹੀਂ।',
                'ਭੁਲੇਖਾ: A ਤੋਂ B ਤੱਕ v1 ਚਾਲ ਨਾਲ ਜਾਣ ਅਤੇ v2 ਚਾਲ ਨਾਲ ਵਾਪਸ ਆਉਣ ਤੇ ਔਸਤ ਚਾਲ (v1 + v2)/2 ਲਗਾਉਣਾ। ਸੁਧਾਰ: ਬਰਾਬਰ ਦੂਰੀਆਂ ਲਈ ਔਸਤ ਚਾਲ ਹਮੇਸ਼ਾ 2v1v2 / (v1 + v2) ਹੁੰਦੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: यह सोचना कि 60 kg द्रव्यमान वाले अंतरिक्ष यात्री का द्रव्यमान चंद्रमा पर 10 kg हो जाता है। सुधार: द्रव्यमान (Mass) सर्वत्र 60 kg ही रहता है! केवल भार (W = mg) चंद्रमा पर 1/6 गुना (600 N से 100 N) होता है।',
                'भ्रांति: ताँबे के तार की लंबाई दोगुनी करने पर उसकी प्रतिरोधकता (Resistivity ρ) भी दोगुनी हो जाती है। सुधार: प्रतिरोध R बदलता है, किंतु प्रतिरोधकता (ρ) केवल पदार्थ की प्रकृति एवं तापमान पर निर्भर करती है, लंबाई पर नहीं।',
                'भ्रांति: A से B तक v1 चाल से जाने और v2 चाल से लौटने पर औसत चाल (v1 + v2)/2 लगाना। सुधार: समान दूरियों के लिए औसत चाल सदैव हरात्मक माध्य 2v1v2 / (v1 + v2) होती है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — Average Speed & Wire Stretching] (a) A car travels from Amritsar to Ludhiana at 40 km/h and returns at 60 km/h. Find its average speed. (b) A wire of resistance 5 Ω is stretched to double its original length. Find its new resistance.',
                    pa: '[Easy — ਔਸਤ ਚਾਲ ਅਤੇ ਤਾਰ ਖਿੱਚਣ ਦਾ ਸ਼ਾਰਟਕੱਟ] (a) ਇੱਕ ਕਾਰ ਅੰਮ੍ਰਿਤਸਰ ਤੋਂ ਲੁਧਿਆਣਾ 40 km/h ਦੀ ਚਾਲ ਨਾਲ ਜਾਂਦੀ ਹੈ ਅਤੇ 60 km/h ਨਾਲ ਵਾਪਸ ਆਉਂਦੀ ਹੈ। ਔਸਤ ਚਾਲ ਪਤਾ ਕਰੋ। (b) 5 Ω ਪ੍ਰਤੀਰੋਧ ਵਾਲੀ ਤਾਰ ਨੂੰ ਖਿੱਚ ਕੇ ਦੁੱਗਣਾ ਲੰਬਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਨਵਾਂ ਪ੍ਰਤੀਰੋਧ ਪਤਾ ਕਰੋ।',
                    hi: '[Easy — औसत चाल एवं तार खींचने का शॉर्टकट] (a) एक कार अमृतसर से लुधियाना 40 km/h की चाल से जाती है और 60 km/h से वापस आती है। औसत चाल ज्ञात कीजिए। (b) 5 Ω प्रतिरोध वाले तार को खींचकर दोगुना लंबा किया जाता है। नया प्रतिरोध ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Using harmonic mean shortcut: v_avg = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h.',
                        'Step 2: Using wire stretching shortcut (n = 2): R\' = n^2 R = 2^2 × 5 = 4 × 5 = 20 Ω.'
                    ],
                    pa: [
                        'Step 1: ਔਸਤ ਚਾਲ ਸ਼ਾਰਟਕੱਟ ਨਾਲ: v_avg = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h।',
                        'Step 2: ਤਾਰ ਖਿੱਚਣ ਦੇ ਸ਼ਾਰਟਕੱਟ (n = 2) ਨਾਲ: R\' = n^2 R = 2^2 × 5 = 20 Ω।'
                    ],
                    hi: [
                        'Step 1: औसत चाल शॉर्टकट से: v_avg = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h।',
                        'Step 2: तार खींचने के शॉर्टकट (n = 2) से: R\' = n^2 R = 2^2 × 5 = 20 Ω।'
                    ]
                },
                finalAnswer: {
                    en: '(a) 48 km/h; (b) 20 Ω',
                    pa: '(a) 48 km/h; (b) 20 Ω',
                    hi: '(a) 48 km/h; (b) 20 Ω'
                }
            },
            {
                problem: {
                    en: '[Medium — Lens Power & Electricity Bill] (a) Find the focal length and nature of a lens whose power is -2.5 D. (b) An electric heater of 1500 W is used for 4 hours daily for 30 days. Calculate the electricity bill at Rs 6 per commercial unit (kWh).',
                    pa: '[Medium — ਲੈਂਜ਼ ਦੀ ਸ਼ਕਤੀ ਅਤੇ ਬਿਜਲੀ ਬਿੱਲ] (a) -2.5 D ਸ਼ਕਤੀ ਵਾਲੇ ਲੈਂਜ਼ ਦੀ ਫੋਕਸ ਦੂਰੀ ਅਤੇ ਪ੍ਰਕਿਰਤੀ ਪਤਾ ਕਰੋ। (b) 1500 W ਦਾ ਇੱਕ ਹੀਟਰ ਰੋਜ਼ਾਨਾ 4 ਘੰਟੇ 30 ਦਿਨਾਂ ਲਈ ਚੱਲਦਾ ਹੈ। 6 ਰੁਪਏ ਪ੍ਰਤੀ ਯੂਨਿਟ (kWh) ਦੇ ਹਿਸਾਬ ਨਾਲ ਬਿੱਲ ਪਤਾ ਕਰੋ।',
                    hi: '[Medium — लेंस क्षमता एवं विद्युत बिल] (a) -2.5 D क्षमता वाले लेंस की फोकस दूरी और प्रकृति ज्ञात कीजिए। (b) 1500 W का एक हीटर प्रतिदिन 4 घंटे 30 दिनों तक चलता है। 6 रुपये प्रति यूनिट (kWh) की दर से बिल ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: Focal length f = 100 / P (in cm) = 100 / (-2.5) = -40 cm = -0.4 m. Negative sign indicates a Concave (Diverging) lens (used for Myopia).',
                        'Step 2: Total energy consumed E = (Power in W × Hours × Days) / 1000 = (1500 × 4 × 30) / 1000 = 180 kWh (180 Units).',
                        'Step 3: Total Bill = 180 × Rs 6 = Rs 1080.'
                    ],
                    pa: [
                        'Step 1: ਫੋਕਸ ਦੂਰੀ f = 100 / P (cm ਵਿੱਚ) = 100 / (-2.5) = -40 cm। ਰਿਣਾਤਮਕ ਚਿੰਨ੍ਹ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਇਹ ਅਵਤਲ ਲੈਂਜ਼ (Concave lens) ਹੈ।',
                        'Step 2: ਕੁੱਲ ਖਪਤ ਊਰਜਾ = (1500 × 4 × 30) / 1000 = 180 kWh (180 ਯੂਨਿਟ)।',
                        'Step 3: ਕੁੱਲ ਬਿੱਲ = 180 × 6 = 1080 ਰੁਪਏ।'
                    ],
                    hi: [
                        'Step 1: फोकस दूरी f = 100 / P (cm में) = 100 / (-2.5) = -40 cm। ऋणात्मक चिह्न दर्शाता है कि यह अवतल लेंस (Concave lens) है।',
                        'Step 2: कुल उपभुक्त ऊर्जा = (1500 × 4 × 30) / 1000 = 180 kWh (180 यूनिट)।',
                        'Step 3: कुल बिल = 180 × 6 = 1080 रुपये।'
                    ]
                },
                finalAnswer: {
                    en: '(a) f = -40 cm (Concave lens); (b) 180 Units, Rs 1080',
                    pa: '(a) f = -40 cm (ਅਵਤਲ ਲੈਂਜ਼); (b) 180 ਯੂਨਿਟ, 1080 ਰੁਪਏ',
                    hi: '(a) f = -40 cm (अवतल लेंस); (b) 180 यूनिट, 1080 रुपये'
                }
            },
            {
                problem: {
                    en: '[Tricky — SONAR Echo & Kinetic Energy-Momentum] (a) A ship sends an ultrasound pulse that returns from the seabed after 2.4 s. If the speed of ultrasound in seawater is 1500 m/s, find the depth of the sea. (b) If the kinetic energy of a body increases by 300%, by what percentage does its linear momentum increase?',
                    pa: '[Tricky — SONAR ਗੂੰਜ ਅਤੇ ਗਤਿਜ ਊਰਜਾ-ਸੰਵੇਗ] (a) ਇੱਕ ਜਹਾਜ਼ ਤੋਂ ਭੇਜੀ ਅਲਟਰਾਸਾਊਂਡ ਤਰੰਗ ਸਮੁੰਦਰ ਦੇ ਤਲ ਤੋਂ 2.4 s ਬਾਅਦ ਵਾਪਸ ਆਉਂਦੀ ਹੈ। ਜੇਕਰ ਸਮੁੰਦਰੀ ਪਾਣੀ ਵਿੱਚ ਧੁਨੀ ਦੀ ਚਾਲ 1500 m/s ਹੈ, ਤਾਂ ਸਮੁੰਦਰ ਦੀ ਡੂੰਘਾਈ ਪਤਾ ਕਰੋ। (b) ਜੇਕਰ ਕਿਸੇ ਵਸਤੂ ਦੀ ਗਤਿਜ ਊਰਜਾ 300% ਵਧ ਜਾਵੇ, ਤਾਂ ਉਸ ਦਾ ਰੇਖੀ ਸੰਵੇਗ ਕਿੰਨੇ ਪ੍ਰਤੀਸ਼ਤ ਵਧੇਗਾ?',
                    hi: '[Tricky — SONAR प्रतिध्वनि एवं गतिज ऊर्जा-संवेग] (a) एक जहाज से भेजी गई पराध्वनि तरंग समुद्र तल से 2.4 s बाद लौटती है। यदि समुद्री जल में ध्वनि की चाल 1500 m/s है, तो समुद्र की गहराई ज्ञात कीजिए। (b) यदि किसी पिंड की गतिज ऊर्जा 300% बढ़ जाए, तो उसका रैखिक संवेग कितने प्रतिशत बढ़ेगा?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: For SONAR echo, total distance travelled is 2d = v × t => Depth d = (v × t) / 2 = (1500 × 2.4) / 2 = 1800 m.',
                        'Step 2: A 300% increase in KE means new KE\' = KE + 3 KE = 4 KE.',
                        'Step 3: Since p = √(2m·KE), new momentum p\' = √4 p = 2p, which is a 100% increase!'
                    ],
                    pa: [
                        'Step 1: SONAR ਲਈ ਡੂੰਘਾਈ d = (v × t) / 2 = (1500 × 2.4) / 2 = 1800 m।',
                        'Step 2: ਗਤਿਜ ਊਰਜਾ ਵਿੱਚ 300% ਵਾਧੇ ਦਾ ਮਤਲਬ ਨਵੀਂ ਊਰਜਾ KE\' = KE + 3 KE = 4 KE (4 ਗੁਣਾ)।',
                        'Step 3: ਕਿਉਂਕਿ p = √(2m·KE), ਇਸ ਲਈ ਨਵਾਂ ਸੰਵੇਗ p\' = √4 p = 2p, ਭਾਵ 100% ਵਾਧਾ!'
                    ],
                    hi: [
                        'Step 1: SONAR के लिए गहराई d = (v × t) / 2 = (1500 × 2.4) / 2 = 1800 m।',
                        'Step 2: गतिज ऊर्जा में 300% वृद्धि का अर्थ है नई ऊर्जा KE\' = KE + 3 KE = 4 KE (4 गुना)।',
                        'Step 3: चूँकि p = √(2m·KE), अतः नया संवेग p\' = √4 p = 2p, अर्थात् 100% वृद्धि!'
                    ]
                },
                finalAnswer: {
                    en: '(a) 1800 m; (b) 100% increase in momentum',
                    pa: '(a) 1800 m; (b) ਸੰਵੇਗ ਵਿੱਚ 100% ਵਾਧਾ',
                    hi: '(a) 1800 m; (b) संवेग में 100% वृद्धि'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-sci-phy-fc-1',
                question: {
                    en: 'How many Joules are there in 1 commercial unit of electrical energy (1 kWh)?',
                    pa: 'ਬਿਜਲੀ ਊਰਜਾ ਦੀ 1 ਵਪਾਰਕ ਯੂਨਿਟ (1 kWh) ਵਿੱਚ ਕਿੰਨੇ ਜੂਲ (Joules) ਹੁੰਦੇ ਹਨ?',
                    hi: 'विद्युत ऊर्जा की 1 व्यावसायिक यूनिट (1 kWh) में कितने जूल (Joules) होते हैं?'
                },
                answer: {
                    en: '1 kWh = 3.6 × 10^6 Joules (3.6 MegaJoules).',
                    pa: '1 kWh = 3.6 × 10^6 ਜੂਲ (Joules)।',
                    hi: '1 kWh = 3.6 × 10^6 जूल (Joules)।'
                }
            },
            {
                id: 'ett-sci-phy-fc-2',
                question: {
                    en: 'What is the least distance of distinct vision (Near Point) and the Far Point for a normal young human eye?',
                    pa: 'ਇੱਕ ਸਧਾਰਨ ਮਨੁੱਖੀ ਅੱਖ ਲਈ ਸਪੱਸ਼ਟ ਦ੍ਰਿਸ਼ਟੀ ਦੀ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ (Near Point) ਅਤੇ ਦੂਰ ਬਿੰਦੂ (Far Point) ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
                    hi: 'एक सामान्य मानव नेत्र के लिए स्पष्ट दर्शन की न्यूनतम दूरी (Near Point) और दूर बिंदु (Far Point) क्या है?'
                },
                answer: {
                    en: 'Near Point = 25 cm; Far Point = Infinity (∞).',
                    pa: 'ਨਿਕਟ ਬਿੰਦੂ (Near Point) = 25 cm; ਦੂਰ ਬਿੰਦੂ (Far Point) = ਅਨੰਤ (∞)।',
                    hi: 'निकट बिंदु (Near Point) = 25 cm; दूर बिंदु (Far Point) = अनंत (∞)।'
                }
            },
            {
                id: 'ett-sci-phy-fc-3',
                question: {
                    en: 'Which lens is used to correct Myopia (short-sightedness) and which lens corrects Hypermetropia (far-sightedness)?',
                    pa: 'ਨਿਕਟ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ (Myopia) ਅਤੇ ਦੂਰ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ (Hypermetropia) ਨੂੰ ਠੀਕ ਕਰਨ ਲਈ ਕਿਹੜੇ ਲੈਂਜ਼ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?',
                    hi: 'निकट-दृष्टि दोष (Myopia) और दीर्घ-दृष्टि दोष (Hypermetropia) के संशोधन के लिए कौन-से लेंस प्रयुक्त होते हैं?'
                },
                answer: {
                    en: 'Myopia -> Concave (Diverging) lens of negative power; Hypermetropia -> Convex (Converging) lens of positive power.',
                    pa: 'Myopia (ਨਿਕਟ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼) -> ਅਵਤਲ ਲੈਂਜ਼ (Concave lens); Hypermetropia (ਦੂਰ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼) -> ਉੱਤਲ ਲੈਂਜ਼ (Convex lens)।',
                    hi: 'Myopia (निकट-दृष्टि दोष) -> अवतल लेंस (Concave lens); Hypermetropia (दीर्घ-दृष्टि दोष) -> उत्तल लेंस (Convex lens)।'
                }
            },
            {
                id: 'ett-sci-phy-fc-4',
                question: {
                    en: 'What is the minimum distance required between a source of sound and a reflector to hear a distinct echo in air at 22°C?',
                    pa: '22°C ਤਾਪਮਾਨ ਤੇ ਹਵਾ ਵਿੱਚ ਸਪੱਸ਼ਟ ਗੂੰਜ (Echo) ਸੁਣਨ ਲਈ ਧੁਨੀ ਸਰੋਤ ਅਤੇ ਪਰਾਵਰਤਕ ਵਿਚਕਾਰ ਘੱਟੋ-ਘੱਟ ਕਿੰਨੀ ਦੂਰੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ?',
                    hi: '22°C पर वायु में स्पष्ट प्रतिध्वनि (Echo) सुनने के लिए ध्वनि स्रोत और परावर्तक सतह के बीच न्यूनतम दूरी कितनी होनी चाहिए?'
                },
                answer: {
                    en: '17.2 metres (since persistence of hearing is 0.1 s and d = v × t / 2 = 344 × 0.1 / 2 = 17.2 m).',
                    pa: '17.2 ਮੀਟਰ (ਕਿਉਂਕਿ ਸੁਣਨ ਦੀ ਸਥਿਰਤਾ 0.1 s ਹੁੰਦੀ ਹੈ ਅਤੇ d = 344 × 0.1 / 2 = 17.2 m)।',
                    hi: '17.2 मीटर (क्योंकि श्रवण निर्बंध 0.1 s होता है और d = 344 × 0.1 / 2 = 17.2 m)।'
                }
            },
            {
                id: 'ett-sci-phy-fc-5',
                question: {
                    en: 'Why is a Convex Mirror preferred as a rear-view mirror in vehicles?',
                    pa: 'ਵਾਹਨਾਂ ਵਿੱਚ ਪਿੱਛੇ ਦੇਖਣ ਵਾਲੇ ਸ਼ੀਸ਼ੇ (Rear-view mirror) ਵਜੋਂ ਉੱਤਲ ਦਰਪਣ (Convex Mirror) ਕਿਉਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
                    hi: 'वाहनों में पश्च-दृश्य दर्पण (Rear-view mirror) के रूप में उत्तल दर्पण (Convex Mirror) को प्राथमिकता क्यों दी जाती है?'
                },
                answer: {
                    en: 'Because it always forms an erect, virtual, and diminished image regardless of object distance, providing a much wider field of view of traffic behind.',
                    pa: 'ਕਿਉਂਕਿ ਇਹ ਹਮੇਸ਼ਾ ਸਿੱਧਾ, ਆਭਾਸੀ ਅਤੇ ਛੋਟਾ ਪ੍ਰਤੀਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਪਿੱਛੇ ਆਉਂਦੀ ਟ੍ਰੈਫਿਕ ਦਾ ਬਹੁਤ ਵਿਸ਼ਾਲ ਦ੍ਰਿਸ਼ਟੀ ਖੇਤਰ (Wider field of view) ਮਿਲਦਾ ਹੈ।',
                    hi: 'क्योंकि यह सदैव सीधा, आभासी तथा छोटा प्रतिबिंब बनाता है, जिससे पीछे के यातायात का बहुत विस्तृत दृष्टि-क्षेत्र (Wider field of view) प्राप्त होता है।'
                }
            },
            {
                id: 'ett-sci-phy-fc-6',
                question: {
                    en: 'What material is used for an electric fuse wire and what are its two essential physical properties?',
                    pa: 'ਬਿਜਲੀ ਦੇ ਫਿਊਜ਼ ਦੀ ਤਾਰ ਕਿਸ ਮਿਸ਼ਰਤ ਧਾਤ ਦੀ ਬਣੀ ਹੁੰਦੀ ਹੈ ਅਤੇ ਇਸ ਦੇ ਦੋ ਮੁੱਖ ਗੁਣ ਕੀ ਹਨ?',
                    hi: 'विद्युत फ्यूज तार किस मिश्रधातु से बना होता है और इसके दो आवश्यक भौतिक गुण क्या हैं?'
                },
                answer: {
                    en: 'Alloy of Lead (Pb) and Tin (Sn); it has HIGH resistivity (resistance) and a LOW melting point.',
                    pa: 'ਸਿੱਕਾ (Lead - Pb) ਅਤੇ ਟੀਨ (Tin - Sn) ਦੀ ਮਿਸ਼ਰਤ ਧਾਤ; ਇਸ ਦੀ ਪ੍ਰਤੀਰੋਧਕਤਾ ਉੱਚ (High resistivity) ਅਤੇ ਪਿਘਲਣ ਦਰਜਾ ਘੱਟ (Low melting point) ਹੁੰਦਾ ਹੈ।',
                    hi: 'सीसा (Lead - Pb) और टिन (Tin - Sn) की मिश्रधातु; इसकी प्रतिरोधकता उच्च (High resistivity) तथा गलनांक निम्न (Low melting point) होता है।'
                }
            }
        ]
    },

    // =========================================================================
    // 6. ETT GENERAL SCIENCE II (CHEMISTRY & BIOLOGY CLASS 9–10): MATTER, ACIDS/SALTS, METALS, CARBON, CELL, LIFE PROCESSES & HEREDITY
    // =========================================================================
    {
        topicId: 'ett-science-acids',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 200,
            editorialNote: 'Complete ERB Punjab ETT Paper B General Science Chemistry & Biology block (Class 9–10 PSEB/NCERT) decoding "Metter" -> Matter, Atoms & Molecules, Chemical Reactions, Acids/Bases/5 Industrial Salts, Metals/Alloys, Carbon Compounds, Cell Organelles, Tissues, Life Processes, Control/Hormones, Reproduction & Mendelian Heredity.'
        },
        bookRefs: [
            {
                title: 'PSEB / NCERT Science Textbooks (Class 9 & Class 10)',
                author: 'Punjab School Education Board (PSEB) / NCERT',
                chapter: 'Class 9 Ch 1–7, 13–15 (Matter, Atoms, Cell, Tissues, Diversity, Health); Class 10 Ch 1–9, 15 (Reactions, Acids/Salts, Metals, Carbon, Life Processes, Control, Reproduction, Heredity, Environment)',
                relevance: 'Covers all Chemistry and Biology units of ETT Paper B General Science (25 to 27 Marks out of 40).'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Chemistry: Decoding \`"Metter"\` $\\to$ Matter (ਪਦਾਰਥ), Atoms, Isotopes & Chemical Reactions]
1. **Matter in Our Surroundings (Decoding Corrupted Syllabus Typo \`"Metter"\` $\\to$ Matter / ਪਦਾਰਥ):**
   - **Kelvin–Celsius Conversion:** $T(\\text{K}) = T(^\\circ\\text{C}) + 273$ ($0^\\circ\\text{C} = 273.15\\text{ K}$; $100^\\circ\\text{C} = 373\\text{ K}$).
   - **Sublimation (ਜੌਹਰ ਉੱਡਣਾ / ऊर्ध्वपातन — Solid $\\leftrightarrow$ Gas directly without liquid state):** **Camphor (ਕਪੂਰ), Ammonium Chloride ($\\text{NH}_4\\text{Cl}$ / ਨੌਸ਼ਾਦਰ), Naphthalene balls, Anthracene, Iodine ($\\text{I}_2$), and Dry Ice (Solid $\\text{CO}_2$)**.
   - **Latent Heat & Evaporation Cooling:** Steam at $100^\\circ\\text{C}$ causes more severe burns than boiling water at $100^\\circ\\text{C}$ due to **Latent Heat of Vaporisation**. Evaporation causes cooling (earthen pot *matka*, sweating, acetone on palm); rate increases with **surface area, temperature, and wind speed**, and decreases with **humidity**.

2. **Atoms, Molecules, Mole Concept, Isotopes & Isobars:**
   - **Laws of Chemical Combination:** **Lavoisier** (Conservation of Mass) & **Joseph Proust** (Constant Proportions, e.g., $\\text{H:O}$ in water is always $1:8$ by mass).
   - **Avogadro Number ($N_A$):** $1\\text{ mole} = \\mathbf{6.022 \\times 10^{23}}$ particles; Molar volume of gas at STP $= 22.4\\text{ L}$.
   - **Atomic Models & Subatomic Particles:** Electron (**J.J. Thomson**), Proton (**E. Goldstein** / named by Rutherford), Neutron (**James Chadwick, 1932** — absent in Protium $^1_1\\text{H}$!), Nucleus (**Rutherford's $\\alpha$-scattering on gold foil**), Discrete energy shells $2n^2$ (**Niels Bohr**).
   - **Isotopes (ਸਮਸਥਾਨਕ — Same $Z$, Different $A$) vs Isobars (ਸਮਭਾਰਕ — Same $A$, Different $Z$):**
     - **Isotopes:** Protium ($^1_1\\text{H}$), Deuterium ($^2_1\\text{H}$), Tritium ($^3_1\\text{H}$); **Cobalt-60 ($^{60}\\text{Co}$)** $\\to$ **Cancer treatment**; **Iodine-131 ($^{131}\\text{I}$)** $\\to$ **Goitre (thyroid) treatment**; **Uranium-235 ($^{235}\\text{U}$)** $\\to$ **Nuclear reactor fuel**; **Carbon-14 ($^{14}\\text{C}$)** $\\to$ **Fossil dating**.
     - **Isobars:** Argon ($^{40}_{18}\\text{Ar}$) and Calcium ($^{40}_{20}\\text{Ca}$).

3. **Chemical Reactions, Photolysis & Rancidity:**
   - **Exothermic:** Quicklime slaking $\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{Heat}$ (whitewashing $\\text{Ca(OH)}_2 + \\text{CO}_2 \\to \\text{CaCO}_3$ shiny finish), Respiration.
   - **Photolytic Decomposition:** $2\\text{AgCl} \\xrightarrow{\\text{Sunlight}} 2\\text{Ag} + \\text{Cl}_2$ and $2\\text{AgBr} \\xrightarrow{h\\nu} 2\\text{Ag} + \\text{Br}_2$ — **used in Black-and-White Photography!**
   - **Rancidity Prevention:** Potato chips packets are flushed with unreactive **Nitrogen ($\\text{N}_2$) gas** to prevent oxidation of fats/oils.

---

### [Level I: Intermediate — Acids, Bases, 5 Industrial Salts, Metals & Carbon Compounds (Class 10 Chemistry)]
1. **pH Scale ($0\\text{ to }14$) & Everyday Chemistry:**
   - **Human Blood pH:** $7.35\\text{–}7.45$ (slightly alkaline); **Tooth Decay** starts when mouth pH falls **below $5.5$** (tooth enamel is **Calcium Hydroxyapatite $\\text{Ca}_5(\\text{PO}_4)_3\\text{OH}$**, the hardest substance in the human body!); **Acid Rain:** $\\text{pH} < 5.6$; **Bee / Nettle sting** injects **Methanoic acid (Formic acid, $\\text{HCOOH}$)** — relieved by mild base like Baking Soda ($\\text{NaHCO}_3$).
   - **Natural Acids:** Vinegar $=$ Acetic acid; Tamarind/Grapes $=$ Tartaric acid; Tomato/Spinach $=$ Oxalic acid; Curd/Sour milk $=$ Lactic acid; Lemon/Orange $=$ Citric acid.

2. **The 5 High-Yield Industrial Salts Master Table (Guaranteed 1–2 Questions!):**
   | Common Name | Chemical Name & Formula | Preparation / Key Exam Uses |
   |---|---|---|
   | **Caustic Soda** | Sodium Hydroxide ($\\text{NaOH}$) | **Chlor-Alkali process** (electrolysis of brine $\\text{NaCl(aq)}$ gives $\\text{Cl}_2$ at anode, $\\text{H}_2$ at cathode, $\\text{NaOH}$ near cathode). |
   | **Bleaching Powder** | Calcium Oxychloride (**$\\text{CaOCl}_2$**) | Action of $\\text{Cl}_2$ on dry slaked lime $\\text{Ca(OH)}_2$; disinfects drinking water, bleaches cotton/linen. |
   | **Baking Soda** | Sodium Hydrogen Carbonate (**$\\text{NaHCO}_3$**) | Mild non-corrosive base: **Antacid**, **Soda-Acid fire extinguisher**, and **Baking powder** ($\\text{NaHCO}_3 + \\text{Tartaric acid}$). |
   | **Washing Soda** | Sodium Carbonate Decahydrate (**$\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$**) | Used in glass/soap/paper industries and to **remove PERMANENT hardness of water**! |
   | **Plaster of Paris (POP)** | Calcium Sulphate Hemihydrate (**$\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}$**) | Prepared by heating **Gypsum ($\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$) at $373\\text{ K}$ ($100^\\circ\\text{C}$)**; sets into hard gypsum on mixing with water (fractured bones, toys). |
   *(Blue Vitriol $= \\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$; Green Vitriol $= \\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O}$).*

3. **Metals, Non-Metals, Metallurgy, Alloys & Carbon:**
   - **Exceptions:** Liquid metal $=$ **Mercury ($\\text{Hg}$)**; Liquid non-metal $=$ **Bromine ($\\text{Br}_2$)**; Metals stored in kerosene $=$ **$\\text{Na, K}$**; Lustrous non-metal $=$ **Iodine ($\\text{I}_2$)**; Non-metal electrical conductor $=$ **Graphite**; **Amphoteric Oxides** (react with both acids & bases) $=$ **$\\text{Al}_2\\text{O}_3$ and $\\text{ZnO}$**!
   - **Aqua Regia (Royal Water):** **$3\\text{ parts conc. HCl} : 1\\text{ part conc. HNO}_3$** (dissolves Gold $\\text{Au}$ and Platinum $\\text{Pt}$).
   - **Thermite Reaction:** $\\text{Fe}_2\\text{O}_3 + 2\\text{Al} \\to 2\\text{Fe(l)} + \\text{Al}_2\\text{O}_3 + \\text{Heat}$ (joins railway tracks!).
   - **Alloys:** **Brass** $= \\text{Cu + Zn}$; **Bronze** $= \\text{Cu + Sn}$; **Solder** $= \\text{Pb + Sn}$; **Stainless Steel** $= \\text{Fe + C + Cr + Ni}$; **Amalgam** $=$ alloy where one metal is **Mercury ($\\text{Hg}$)**; **$22\\text{-Carat Gold}$** $= 22\\text{ parts Au} + 2\\text{ parts Cu/Ag}$ (pure gold is $24\\text{ carat}$).
   - **Carbon & Its Compounds:** **Catenation** & **Tetravalency**; Allotropes (Diamond $sp^3$ hardest, Graphite $sp^2$ hexagonal layers, Fullerene $\\text{C}_{60}$); **Homologous Series** differs by **$-\\text{CH}_2-$ ($14\\text{ u}$)** (Alkanes $\\text{C}_n\\text{H}_{2n+2}$, Alkenes $\\text{C}_n\\text{H}_{2n}$, Alkynes $\\text{C}_n\\text{H}_{2n-2}$); **Hydrogenation of vegetable oils** uses **Nickel ($\\text{Ni}$) catalyst**; **Esterification** (Acid + Alcohol $\\xrightarrow{\\text{conc. H}_2\\text{SO}_4}$ sweet-smelling Ester) vs **Saponification** (Alkaline hydrolysis of ester $\\to$ Soap + Glycerol); **Micelles** clean oil dirt; **Detergents** work in hard water (do not form insoluble scum with $\\text{Ca}^{2+}/\\text{Mg}^{2+}$).

---

### [Level A: Advanced — Complete Biology (Class 9–10): Cell, Tissues, Life Processes, Hormones, Reproduction & Mendel's Genetics]
1. **Cell Organelles & Plant/Animal Tissues:**
   - **Mitochondria:** Powerhouse of cell (**ATP — energy currency**); **Chloroplast:** Kitchen of cell; **Both Mitochondria & Plastids have their own circular DNA and $70\\text{S}$ ribosomes!**
   - **Lysosomes:** **Suicidal bags** (digestive hydrolytic enzymes); **Ribosomes:** **Protein factories** (non-membrane bound!).
   - **Plant Tissues:** Meristematic (**Apical** $\\to$ tip length; **Intercalary** $\\to$ nodes/internodes; **Lateral/Cambium** $\\to$ girth/thickness); Simple Permanent (**Parenchyma** stores food; **Collenchyma** gives flexibility without breaking; **Sclerenchyma** dead lignified cells in coconut husk); Complex Permanent (**Xylem** transports water & minerals unidirectionally; **Phloem** translocates food bidirectionally).
   - **Animal Connective Tissue Mnemonic:** **BLT** ($\\text{\\textbf{B}one} - \\text{\\textbf{L}igament} - \\text{\\textbf{B}one}$) and **MTB** ($\\text{\\textbf{M}uscle} - \\text{\\textbf{T}endon} - \\text{\\textbf{B}one}$).

2. **Life Processes, Plant & Human Hormones:**
   - **Digestion:** Salivary amylase (starch $\\to$ maltose); Stomach ($\text{HCl}$ kills germs & activates **Pepsin** for proteins); **Bile** (secreted by **Liver**, stored in Gall Bladder — has **NO enzymes**, emulsifies fats!); Pancreas (**Trypsin** for proteins, **Lipase** for fats); **Small Intestine (Villi)** $=$ site of **complete digestion & absorption**.
   - **Respiration:** Cytoplasm converts Glucose ($6\\text{C}$) $\\to$ **Pyruvate ($3\\text{C}$)**; in **Yeast (Anaerobic)** $\\to \\text{Ethanol} + \\text{CO}_2 + 2\\text{ ATP}$; in **Human Muscle Cells (lack of $\\text{O}_2$)** $\\to \\text{\\textbf{Lactic Acid}}$ (causes muscle cramps!); in **Mitochondria (Aerobic)** $\\to \\text{CO}_2 + \\text{H}_2\\text{O} + 38\\text{ ATP}$.
   - **Circulation & Excretion:** Human heart is $4$-chambered (**Double Circulation**); **Pulmonary Artery** is the only artery carrying **deoxygenated** blood; **Pulmonary Vein** is the only vein carrying **oxygenated** blood! **Nephron** is the structural & functional unit of the Kidney.
   - **Plant Hormones (Phytohormones):** **Auxin** (cell elongation & phototropism at shoot tip), **Gibberellin** (stem growth), **Cytokinin** (cell division in fruits/seeds), **Abscisic Acid (ABA)** (growth inhibitor / stress hormone / wilting of leaves), **Ethylene** (gaseous hormone for fruit ripening).
   - **Human Endocrine Glands:** **Pituitary** (Master gland — Growth Hormone), **Thyroid** (Thyroxine requires **Iodine**; deficiency causes **Goitre**), **Pancreas** (**Insulin** lowers blood sugar; deficiency causes **Diabetes mellitus**), **Adrenal** (**Adrenaline** — Fight-or-Flight hormone), **Testes** (Testosterone), **Ovaries** (Estrogen & Progesterone).

3. **Reproduction, Mendelian Genetics & Ecology:**
   - **Asexual Modes:** **Binary Fission** (*Amoeba*, *Leishmania* — longitudinal), **Multiple Fission** (*Plasmodium* malaria parasite), **Budding** (*Hydra*, *Yeast*), **Spore Formation** (*Rhizopus* bread mould), **Regeneration** (*Planaria*, *Hydra*), **Vegetative Propagation** (*Bryophyllum* leaf buds!).
   - **Sexual Reproduction:** Flower (**Stamen** $=$ Anther + Filament [male]; **Pistil/Carpel** $=$ Stigma + Style + Ovary [female]; after fertilisation **Ovule $\\to$ Seed** and **Ovary $\\to$ Fruit**). Human fertilisation occurs in the **Fallopian tube (Oviduct)**; **Placenta** provides nutrition to embryo.
   - **Mendel's Laws of Inheritance (*Pisum sativum* — Garden Pea):**
     - **Monohybrid Cross ($Tt \\times Tt$):** Phenotypic Ratio $= \\mathbf{3 : 1}$; Genotypic Ratio $= \\mathbf{1 : 2 : 1}$ ($1\\,TT : 2\\,Tt : 1\\,tt$).
     - **Dihybrid Cross ($RrYy \\times RrYy$):** Phenotypic Ratio $= \\mathbf{9 : 3 : 3 : 1}$.
     - **Human Sex Determination:** $23\\text{ pairs}$ ($46$ chromosomes $= 22\\text{ pairs Autosomes} + 1\\text{ pair Sex chromosomes}$: Female $= XX$, Male $= XY$). **Father's sperm ($X$ or $Y$) determines the sex of the child!**
   - **Evolution & Ecology:** **Homologous Organs** $=$ **SAME basic structure/origin, different functions** (Divergent evolution: forelimbs of human, cheetah, whale, bat) vs **Analogous Organs** $=$ **DIFFERENT origin, SAME function** (Convergent evolution: wings of bird and wings of insect/bat). **10% Law of Energy Flow (Lindeman, 1942)** (unidirectional); **Ozone ($\\text{O}_3$)** depleted by **CFCs** (**Montreal Protocol, 1987**).`,
            pa: `### [Level B: Basic — ਰਸਾਇਣ ਵਿਗਿਆਨ: ਪਦਾਰਥ (\`"Metter"\` $\\to$ Matter), ਪਰਮਾਣੂ ਅਤੇ ਰਸਾਇਣਕ ਕਿਰਿਆਵਾਂ]
1. **ਪਦਾਰਥ ਦੀਆਂ ਅਵਸਥਾਵਾਂ ਅਤੇ ਜੌਹਰ ਉੱਡਣਾ (Sublimation):**
   - **ਤਾਪਮਾਨ ਪਰਿਵਰਤਨ:** $T(\\text{K}) = T(^\\circ\\text{C}) + 273$ ($0^\\circ\\text{C} = 273\\text{ K}$, $100^\\circ\\text{C} = 373\\text{ K}$)।
   - **ਜੌਹਰ ਉੱਡਣਾ (Sublimation — ਠੋਸ ਤੋਂ ਸਿੱਧਾ ਗੈਸ):** **ਕਪੂਰ (Camphor), ਨੌਸ਼ਾਦਰ ($\\text{NH}_4\\text{Cl}$), ਨੈਫਥਲੀਨ ਦੀਆਂ ਗੋਲੀਆਂ, ਆਇਓਡੀਨ ਅਤੇ ਸੁੱਕੀ ਬਰਫ਼ (ਠੋਸ $\\text{CO}_2$)**।
   - **ਪਰਮਾਣੂ ਅਤੇ ਸਮਸਥਾਨਕ (Isotopes):** $1\\text{ ਮੋਲ} = 6.022 \\times 10^{23}$ ਕਣ; ਇਲੈਕਟ੍ਰਾਨ (ਥਾਮਸਨ), ਪ੍ਰੋਟਾਨ (ਗੋਲਡਸਟੀਨ), ਨਿਊਟ੍ਰਾਨ (ਚੈਡਵਿਕ), ਕੇਂਦਰਕ (ਰਦਰਫੋਰਡ)। **ਸਮਸਥਾਨਕ:** **ਕੋਬਾਲਟ-60 ($^{60}\\text{Co}$)** $\\to$ ਕੈਂਸਰ ਦੇ ਇਲਾਜ ਲਈ; **ਆਇਓਡੀਨ-131 ($^{131}\\text{I}$)** $\\to$ ਗਿੱਲ੍ਹੜ (Goitre) ਦੇ ਇਲਾਜ ਲਈ; **ਯੂਰੇਨੀਅਮ-235** $\\to$ ਪਰਮਾਣੂ ਭੱਠੀ ਦੇ ਬਾਲਣ ਵਜੋਂ।
   - **ਰਸਾਇਣਕ ਕਿਰਿਆਵਾਂ:** $\\text{AgCl}$ ਅਤੇ $\\text{AgBr}$ ਦਾ ਪ੍ਰਕਾਸ਼-ਅਪਘਟਨ **ਕਾਲੇ-ਚਿੱਟੇ ਫੋਟੋਗ੍ਰਾਫੀ (B&W Photography)** ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਚਿਪਸ ਦੇ ਪੈਕਟਾਂ ਵਿੱਚ ਦੁਰਗੰਧਤਾ (Rancidity) ਰੋਕਣ ਲਈ **ਨਾਈਟ੍ਰੋਜਨ ($\\text{N}_2$) ਗੈਸ** ਭਰੀ ਜਾਂਦੀ ਹੈ।

---

### [Level I: Intermediate — ਤੇਜ਼ਾਬ, ਖਾਰ, 5 ਉਦਯੋਗਿਕ ਲੂਣ, ਧਾਤਾਂ ਅਤੇ ਕਾਰਬਨ (Class 10 Chemistry)]
1. **pH ਸਕੇਲ ਅਤੇ 5 ਮਹੱਤਵਪੂਰਨ ਉਦਯੋਗਿਕ ਲੂਣ:**
   - ਮਨੁੱਖੀ ਖੂਨ ਦਾ pH $= 7.4$; ਮੂੰਹ ਦਾ pH **$5.5$ ਤੋਂ ਘੱਟ** ਹੋਣ ਤੇ ਦੰਦ ਖੁਰਨੇ ਸ਼ੁਰੂ ਹੋ ਜਾਂਦੇ ਹਨ; ਤੇਜ਼ਾਬੀ ਵਰਖਾ ਦਾ pH $< 5.6$; ਕੀੜੀ/ਡੰਗ ਵਿੱਚ **ਮੈਥਾਨੋਇਕ ਤੇਜ਼ਾਬ (Formic acid)** ਹੁੰਦਾ ਹੈ।
   - **ਕਾਸਟਿਕ ਸੋਡਾ ($\\text{NaOH}$):** ਕਲੋਰ-ਅਲਕਲੀ ਵਿਧੀ ਰਾਹੀਂ ਤਿਆਰ।
   - **ਬਲੀਚਿੰਗ ਪਾਊਡਰ ($\\text{CaOCl}_2$):** ਖੁਸ਼ਕ ਬੁਝੇ ਚੂਨੇ $\\text{Ca(OH)}_2$ ਉੱਤੇ $\\text{Cl}_2$ ਗੈਸ ਦੀ ਕਿਰਿਆ ਨਾਲ।
   - **ਮਿੱਠਾ ਸੋਡਾ / ਬੇਕਿੰਗ ਸੋਡਾ ($\\text{NaHCO}_3$):** ਐਂਟਾਸਿਡ (Antacid) ਅਤੇ ਸੋਡਾ-ਐਸਿਡ ਅੱਗ ਬੁਝਾਊ ਯੰਤਰ ਵਿੱਚ।
   - **ਕੱਪੜੇ ਧੋਣ ਵਾਲਾ ਸੋਡਾ ($\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$):** ਪਾਣੀ ਦੀ **ਸਥਾਈ ਕਠੋਰਤਾ (Permanent hardness)** ਦੂਰ ਕਰਨ ਲਈ।
   - **ਪਲਾਸਟਰ ਆਫ਼ ਪੈਰਿਸ (POP — $\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}$):** ਜਿਪਸਮ ($\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$) ਨੂੰ **$373\\text{ K}$ ($100^\\circ\\text{C}$)** ਤੇ ਗਰਮ ਕਰਕੇ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।

2. **ਧਾਤਾਂ, ਮਿਸ਼ਰਤ ਧਾਤਾਂ ਅਤੇ ਕਾਰਬਨ:**
   - ਦ੍ਰਵ ਧਾਤ $=$ **ਪਾਰਾ ($\\text{Hg}$)**; ਦ੍ਰਵ ਅਧਾਤ $=$ **ਬ੍ਰੋਮੀਨ ($\\text{Br}_2$)**; ਮਿੱਟੀ ਦੇ ਤੇਲ ਵਿੱਚ ਰੱਖੀਆਂ ਧਾਤਾਂ $=$ **$\\text{Na, K}$**; **ਉਭੈਧਰਮੀ ਆਕਸਾਈਡ (Amphoteric)** $= \\mathbf{\\text{Al}_2\\text{O}_3, \\text{ZnO}}$।
   - **ਐਕਵਾ ਰੇਜੀਆ (Aqua Regia):** $3\\text{ ਹਿੱਸੇ ਸੰਘਣਾ HCl} : 1\\text{ ਹਿੱਸਾ ਸੰਘਣਾ HNO}_3$ (ਸੋਨੇ ਤੇ ਪਲੈਟੀਨਮ ਨੂੰ ਘੋਲਦਾ ਹੈ)।
   - **ਮਿਸ਼ਰਤ ਧਾਤਾਂ:** **ਪਿੱਤਲ (Brass)** $= \\text{Cu + Zn}$; **ਕਾਂਸੀ (Bronze)** $= \\text{Cu + Sn}$; **ਸੋਲਡਰ (Solder)** $= \\text{Pb + Sn}$; **ਅਮਲਗਮ** $=$ ਪਾਰੇ ($\\text{Hg}$) ਨਾਲ ਮਿਸ਼ਰਤ ਧਾਤ।
   - **ਕਾਰਬਨ:** ਲੜੀਬੰਧਨ (Catenation) ਅਤੇ ਚਤੁਰ-ਸੰਯੋਜਕਤਾ; ਸਮਜਾਤੀ ਲੜੀ ਵਿੱਚ **$-\\text{CH}_2-$ ($14\\text{ u}$)** ਦਾ ਅੰਤਰ; ਬਨਸਪਤੀ ਤੇਲਾਂ ਦੇ ਹਾਈਡ੍ਰੋਜਨੀਕਰਨ ਵਿੱਚ **ਨਿਕਲ ($\\text{Ni}$) ਉਤਪ੍ਰੇਰਕ**।

---

### [Level A: Advanced — ਸੰਪੂਰਨ ਜੀਵ ਵਿਗਿਆਨ (Class 9–10): ਸੈੱਲ, ਟਿਸ਼ੂ, ਜੈਵਿਕ ਪ੍ਰਕਿਰਿਆਵਾਂ, ਹਾਰਮੋਨ ਅਤੇ ਅਨੁਵੰਸ਼ਿਕਤਾ]
1. **ਸੈੱਲ ਅੰਗ ਅਤੇ ਟਿਸ਼ੂ:**
   - **ਮਾਇਟੋਕਾਂਡਰੀਆ:** ਸੈੱਲ ਦਾ ਬਿਜਲੀ ਘਰ (**ATP**); **ਲਾਇਸੋਸੋਮ:** ਆਤਮਘਾਤੀ ਥੈਲੀਆਂ (Suicidal bags); **ਰਾਈਬੋਸੋਮ:** ਪ੍ਰੋਟੀਨ ਫੈਕਟਰੀ। *(ਮਾਇਟੋਕਾਂਡਰੀਆ ਅਤੇ ਪਲਾਸਟਿਡ ਕੋਲ ਆਪਣਾ DNA ਅਤੇ ਰਾਈਬੋਸੋਮ ਹੁੰਦੇ ਹਨ!)*
   - **ਪੌਦਾ ਟਿਸ਼ੂ:** **ਜ਼ਾਇਲਮ (Xylem)** ਪਾਣੀ ਤੇ ਖਣਿਜਾਂ ਦਾ ਵਹਿਣ ਕਰਦਾ ਹੈ; **ਫਲੋਇਮ (Phloem)** ਭੋਜਨ ਦਾ ਸਥਾਨਾਂਤਰਣ ਕਰਦਾ ਹੈ।
   - **ਜੰਤੂ ਜੋੜਕ ਟਿਸ਼ੂ ਟ੍ਰਿਕ:** **ਲਿਗਾਮੈਂਟ (Ligament)** $=$ ਹੱਡੀ ਨੂੰ ਹੱਡੀ ਨਾਲ ਜੋੜਦਾ ਹੈ (**BLB**); **ਟੈਂਡਨ (Tendon)** $=$ ਮਾਸਪੇਸ਼ੀ ਨੂੰ ਹੱਡੀ ਨਾਲ ਜੋੜਦਾ ਹੈ (**MTB**)।

2. **ਜੈਵਿਕ ਪ੍ਰਕਿਰਿਆਵਾਂ ਅਤੇ ਹਾਰਮੋਨ:**
   - **ਪਾਚਨ:** ਜਿਗਰ (Liver) **ਪਿੱਤ ਰਸ (Bile)** ਬਣਾਉਂਦਾ ਹੈ ਜੋ ਚਰਬੀ ਦਾ ਇਮਲਸੀਕਰਨ ਕਰਦਾ ਹੈ; **ਛੋਟੀ ਆਂਦਰ (Villi)** ਵਿੱਚ ਭੋਜਨ ਦਾ ਪੂਰਨ ਪਾਚਨ ਅਤੇ ਸੋਖਣ ਹੁੰਦਾ ਹੈ।
   - **ਸਾਹ ਕਿਰਿਆ:** ਖਮੀਰ (Yeast) ਵਿੱਚ ਅਣ-ਆਕਸੀ ਸਾਹ ਕਿਰਿਆ ਨਾਲ **ਈਥਾਨੋਲ + $\\text{CO}_2$** ਬਣਦਾ ਹੈ; ਮਨੁੱਖੀ ਮਾਸਪੇਸ਼ੀਆਂ ਵਿੱਚ ਆਕਸੀਜਨ ਦੀ ਘਾਟ ਕਾਰਨ **ਲੈਕਟਿਕ ਐਸਿਡ (Lactic Acid)** ਬਣਦਾ ਹੈ ਜਿਸ ਨਾਲ ਕੜੱਲ ਪੈਂਦੀ ਹੈ।
   - **ਲਹੂ ਗੇੜ ਅਤੇ ਮਲ-ਤਿਆਗ:** **ਪਲਮਨਰੀ ਧਮਣੀ (Pulmonary Artery)** ਅਸ਼ੁੱਧ (ਆਕਸੀਜਨ-ਰਹਿਤ) ਖੂਨ ਲੈ ਕੇ ਜਾਂਦੀ ਹੈ; **ਨੈਫਰਾਨ (Nephron)** ਗੁਰਦੇ ਦੀ ਇਕਾਈ ਹੈ।
   - **ਪੌਦਾ ਹਾਰਮੋਨ:** **ਆਕਸਿਨ** (ਪ੍ਰਕਾਸ਼-ਅਨੁਵਰਤਨ), **ਜਿਬਰੇਲਿਨ** (ਤਣੇ ਦਾ ਵਾਧਾ), **ਸਾਇਟੋਕਾਇਨਿਨ** (ਸੈੱਲ ਵੰਡ), **ਐਬਸਿਸਿਕ ਐਸਿਡ (ABA)** (ਵਾਧਾ ਰੋਕੂ), **ਈਥੀਲੀਨ** (ਫਲ ਪਕਾਉਣ ਵਾਲਾ ਗੈਸੀ ਹਾਰਮੋਨ)।
   - **ਮਨੁੱਖੀ ਹਾਰਮੋਨ:** **ਥਾਇਰਾਕਸਿਨ** (ਆਇਓਡੀਨ ਦੀ ਘਾਟ ਨਾਲ ਗਿੱਲ੍ਹੜ), **ਇਨਸੁਲਿਨ** (ਪੈਨਕ੍ਰੀਆਜ਼ — ਘਾਟ ਨਾਲ ਸ਼ੂਗਰ/Diabetes), **ਐਡਰੀਨਾਲੀਨ** (ਸੰਕਟਕਾਲੀਨ ਹਾਰਮੋਨ)।

3. **ਪ੍ਰਜਨਨ ਅਤੇ ਮੈਂਡਲ ਦੀ ਅਨੁਵੰਸ਼ਿਕਤਾ (Genetics):**
   - **ਅਲਿੰਗੀ ਪ੍ਰਜਨਨ:** ਦੋ-ਖੰਡਨ (*Amoeba, Leishmania*), ਬਹੁ-ਖੰਡਨ (*Plasmodium*), ਬਡਿੰਗ (*Hydra, Yeast*), ਪੁਨਰ-ਉਤਪਾਦਨ (*Planaria*), ਪੱਤਿਆਂ ਰਾਹੀਂ (*Bryophyllum*)।
   - **ਮੈਂਡਲ ਦੇ ਨਿਯਮ (ਮਟਰ ਦਾ ਪੌਦਾ *Pisum sativum*):** ਇੱਕ-ਸੰਕਰ ਕਰਾਸ ਫੀਨੋਟਾਇਪ ਅਨੁਪਾਤ $= \\mathbf{3 : 1}$ (ਜੀਨੋਟਾਇਪ $= \\mathbf{1 : 2 : 1}$); ਦੋ-ਸੰਕਰ ਅਨੁਪਾਤ $= \\mathbf{9 : 3 : 3 : 1}$। ਮਨੁੱਖ ਵਿੱਚ ਬੱਚੇ ਦਾ ਲਿੰਗ **ਪਿਤਾ ਦੇ ਗੁਣਸੂਤਰ ($X$ ਜਾਂ $Y$)** ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।
   - **ਸਮजात ਅੰਗ (Homologous):** ਬਣਤਰ ਇੱਕੋ ਜਿਹੀ, ਕੰਮ ਵੱਖਰਾ; **ਸਮਰੂਪ ਅੰਗ (Analogous):** ਬਣਤਰ ਵੱਖਰੀ, ਕੰਮ ਇੱਕੋ ਜਿਹਾ (ਪੰਛੀ ਤੇ ਕੀਟ ਦੇ ਖੰਭ)।`,
            hi: `### [Level B: Basic — रसायन विज्ञान: पदार्थ (\`"Metter"\` $\\to$ Matter), परमाणु एवं रासायनिक अभिक्रियाएँ]
1. **पदार्थ की अवस्थाएँ एवं ऊर्ध्वपातन (Sublimation):**
   - **तापमान रूपांतरण:** $T(\\text{K}) = T(^\\circ\\text{C}) + 273$ ($0^\\circ\\text{C} = 273\\text{ K}$, $100^\\circ\\text{C} = 373\\text{ K}$)।
   - **ऊर्ध्वपातन (Sublimation — ठोस से सीधे गैस):** **कपूर (Camphor), नौसादर ($\\text{NH}_4\\text{Cl}$), नैफ्थलीन की गोलियाँ, आयोडीन तथा शुष्क बर्फ़ (ठोस $\\text{CO}_2$)**।
   - **परमाणु एवं समस्थानिक (Isotopes):** $1\\text{ मोल} = 6.022 \\times 10^{23}$ कण; इलेक्ट्रॉन (थॉमसन), प्रोटॉन (गोल्डस्टीन), न्यूट्रॉन (चैडविक), नाभिक (रदरफोर्ड)। **समस्थानिक:** **कोबाल्ट-60 ($^{60}\\text{Co}$)** $\\to$ कैंसर उपचार; **आयोडीन-131 ($^{131}\\text{I}$)** $\\to$ घेंघा (Goitre) उपचार; **यूरेनियम-235** $\\to$ परमाणु भट्टी ईंधन।
   - **रासायनिक अभिक्रियाएँ:** $\\text{AgCl}$ तथा $\\text{AgBr}$ का प्रकाशीय अपघटन **श्वेत-श्याम फोटोग्राफी (B&W Photography)** में प्रयुक्त होता है। चिप्स की थैलियों में विकृतगंधिता (Rancidity) रोकने हेतु **नाइट्रोजन ($\\text{N}_2$) गैस** भरी जाती है।

---

### [Level I: Intermediate — अम्ल, क्षार, 5 औद्योगिक लवण, धातुएँ एवं कार्बन (Class 10 Chemistry)]
1. **pH स्केल एवं 5 महत्वपूर्ण औद्योगिक लवण:**
   - मानव रक्त का pH $= 7.4$; मुँह का pH **$5.5$ से कम** होने पर दंत-क्षय प्रारंभ होता है; अम्लीय वर्षा का pH $< 5.6$; चींटी/नेटल के डंक में **मेथेनॉइक अम्ल (फॉर्मिक अम्ल)** होता है।
   - **कास्टिक सोडा ($\\text{NaOH}$):** क्लोर-क्षार प्रक्रिया द्वारा निर्मित।
   - **विरंजक चूर्ण / ब्लीचिंग पाउडर ($\\text{CaOCl}_2$):** शुष्क बुझे चूने $\\text{Ca(OH)}_2$ पर $\\text{Cl}_2$ गैस की क्रिया से।
   - **बेकिंग सोडा / खाने का सोडा ($\\text{NaHCO}_3$):** ऐंटासिड (Antacid) तथा सोडा-अम्ल अग्निशामक में।
   - **धोने का सोडा ($\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$):** जल की **स्थायी कठोरता (Permanent hardness)** दूर करने में।
   - **प्लास्टर ऑफ पेरिस (POP — $\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}$):** जिप्सम ($\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$) को **$373\\text{ K}$ ($100^\\circ\\text{C}$)** पर गर्म करके बनाया जाता है।

2. **धातुएँ, मिश्रधातुएँ एवं कार्बन:**
   - द्रव धातु $=$ **पारा ($\\text{Hg}$)**; द्रव अधातु $=$ **ब्रोमीन ($\\text{Br}_2$)**; केरोसिन में रखी जाने वाली धातुएँ $=$ **$\\text{Na, K}$**; **उभयधर्मी ऑक्साइड (Amphoteric)** $= \\mathbf{\\text{Al}_2\\text{O}_3, \\text{ZnO}}$।
   - **ऐक्वा रेजिया (अम्लराज):** $3\\text{ भाग सांद्र HCl} : 1\\text{ भाग सांद्र HNO}_3$ (सोने व प्लैटिनम को घोलता है)।
   - **मिश्रधातुएँ:** **पीतल (Brass)** $= \\text{Cu + Zn}$; **काँसा (Bronze)** $= \\text{Cu + Sn}$; **सोल्डर (Solder)** $= \\text{Pb + Sn}$; **अमलगम** $=$ पारे ($\\text{Hg}$) के साथ मिश्रधातु।
   - **कार्बन:** श्रृंखलन (Catenation) एवं चतुःसंयोजकता; समजातीय श्रेणी में **$-\\text{CH}_2-$ ($14\\text{ u}$)** का अंतर; वनस्पति तेलों के हाइड्रोजनीकरण में **निकल ($\\text{Ni}$) उत्प्रेरक**।

---

### [Level A: Advanced — संपूर्ण जीव विज्ञान (Class 9–10): कोशिका, ऊतक, जैव प्रक्रम, हार्मोन एवं आनुवंशिकता]
1. **कोशिकांग एवं ऊतक:**
   - **माइटोकॉन्ड्रिया:** कोशिका का बिजलीघर (**ATP**); **लाइसोसोम:** आत्मघाती थैली (Suicidal bags); **राइबोसोम:** प्रोटीन फैक्ट्री। *(माइटोकॉन्ड्रिया और प्लैस्टिड में स्वयं का DNA व राइबोसोम होते हैं!)*
   - **पादप ऊतक:** **जाइलम (Xylem)** जल व खनिजों का वहन करता है; **फ्लोएम (Phloem)** भोजन का स्थानांतरण करता है।
   - **जंतु संयोजी ऊतक ट्रिक:** **स्नायु (Ligament)** $=$ अस्थि को अस्थि से जोड़ता है (**BLB**); **कंडरा (Tendon)** $=$ पेशी को अस्थि से जोड़ता है (**MTB**)।

2. **जैव प्रक्रम एवं हार्मोन:**
   - **पाचन:** यकृत (Liver) **पित्त रस (Bile)** स्रावित करता है जो वसा का इमल्सीकरण करता है; **क्षुद्रांत्र (Small Intestine - Villi)** में भोजन का पूर्ण पाचन एवं अवशोषण होता है।
   - **श्वसन:** यीस्ट (Yeast) में अवायवीय श्वसन से **इथेनॉल + $\\text{CO}_2$** बनता है; मानव पेशियों में ऑक्सीजन के अभाव में **लैक्टिक अम्ल (Lactic Acid)** बनता है जिससे ऐंठन (Cramps) होती है।
   - **परिसंचरण एवं उत्सर्जन:** **फुफ्फुस धमनी (Pulmonary Artery)** विऑक्सीजनित (अशुद्ध) रक्त ले जाती है; **वृक्काणु (Nephron)** वृक्क की इकाई है।
   - **पादप हार्मोन:** **ऑक्सिन** (प्रकाशानुवर्तन), **जिबरेलिन** (तने की वृद्धि), **साइटोकाइनिन** (कोशिका विभाजन), **ऐब्सिसिक अम्ल (ABA)** (वृद्धि संदमक), **एथिलीन** (फल पकाने वाला गैसीय हार्मोन)।
   - **मानव हार्मोन:** **थायरॉक्सिन** (आयोडीन की कमी से घेंघा/Goitre), **इंसुलिन** (अग्न्याशय — कमी से मधुमेह/Diabetes), **ऐड्रेनालिन** (आपातकालीन हार्मोन)।

3. **जनन एवं मेंडल की आनुवंशिकता (Genetics):**
   - **अलैंगिक जनन:** द्विखंडन (*Amoeba, Leishmania*), बहुखंडन (*Plasmodium*), मुकुलन (*Hydra, Yeast*), पुनरुद्भवन (*Planaria*), पत्तियों द्वारा कायिक प्रवर्धन (*Bryophyllum*)।
   - **मेंडल के नियम (मटर का पौधा *Pisum sativum*):** एकसंकर क्रॉस लक्षणप्ररूप अनुपात $= \\mathbf{3 : 1}$ (जीनप्ररूप $= \\mathbf{1 : 2 : 1}$); द्विसंकर अनुपात $= \\mathbf{9 : 3 : 3 : 1}$। मनुष्य में शिशु का लिंग **पिता के गुणसूत्र ($X$ या $Y$)** द्वारा निर्धारित होता है।
   - **समजात अंग (Homologous):** समान उत्पत्ति/संरचना, भिन्न कार्य; **समरूप अंग (Analogous):** भिन्न उत्पत्ति, समान कार्य (पक्षी व कीट के पंख)।`
        },
        keyNotes: {
            en: [
                'Sublimation & Isotopes: Camphor, NH4Cl, Naphthalene, Iodine & Dry Ice (solid CO2) sublime directly; Co-60 treats cancer, I-131 treats goitre, U-235 is nuclear fuel; AgCl/AgBr photolysis is used in B&W photography.',
                '5 Industrial Salts: NaOH (Chlor-alkali), CaOCl2 (Bleaching powder), NaHCO3 (Baking soda — antacid & fire extinguisher), Na2CO3·10H2O (Washing soda — removes permanent hardness of water), CaSO4·(1/2)H2O (POP — heated Gypsum at 373 K).',
                'Metals, Alloys & Carbon: Liquid metal = Hg, Liquid non-metal = Br2; Amphoteric oxides = Al2O3 & ZnO; Aqua Regia = 3 HCl : 1 HNO3; Brass = Cu+Zn, Bronze = Cu+Sn, Solder = Pb+Sn; Homologous series differs by -CH2- (14 u).',
                'Cell & Tissues: Mitochondria (ATP powerhouse) and Plastids have their own DNA & ribosomes; Lysosomes = suicidal bags; Xylem transports water, Phloem translocates food; Ligament = Bone-to-Bone, Tendon = Muscle-to-Bone.',
                'Life Processes & Hormones: Complete digestion in Small Intestine (Villi); Muscle cramps = Lactic Acid; Pulmonary Artery carries deoxygenated blood; Auxin (phototropism), Cytokinin (cell division), ABA (inhibits growth), Ethylene (fruit ripening).',
                'Reproduction & Heredity: Plasmodium shows multiple fission, Bryophyllum reproduces by leaf buds; Mendel Monohybrid ratio = 3:1 (phenotypic) & 1:2:1 (genotypic), Dihybrid = 9:3:3:1; Homologous = same origin/structure, Analogous = same function.'
            ],
            pa: [
                'ਜੌਹਰ ਉੱਡਣਾ ਅਤੇ ਸਮਸਥਾਨਕ: ਕਪੂਰ, ਨੌਸ਼ਾਦਰ (NH4Cl), ਨੈਫਥਲੀਨ, ਆਇਓਡੀਨ ਅਤੇ ਸੁੱਕੀ ਬਰਫ਼ (ਠੋਸ CO2) ਸਿੱਧੇ ਗੈਸ ਬਣਦੇ ਹਨ; Co-60 (ਕੈਂਸਰ), I-131 (ਗਿੱਲ੍ਹੜ); AgCl/AgBr ਕਾਲੇ-ਚਿੱਟੇ ਫੋਟੋਗ੍ਰਾਫੀ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
                '5 ਉਦਯੋਗਿਕ ਲੂਣ: NaOH (ਕਾਸਟਿਕ ਸੋਡਾ), CaOCl2 (ਬਲੀਚਿੰਗ ਪਾਊਡਰ), NaHCO3 (ਮਿੱਠਾ ਸੋਡਾ — ਐਂਟਾਸਿਡ), Na2CO3·10H2O (ਧੋਣ ਵਾਲਾ ਸੋਡਾ — ਪਾਣੀ ਦੀ ਸਥਾਈ ਕਠੋਰਤਾ ਦੂਰ ਕਰਦਾ ਹੈ), CaSO4·(1/2)H2O (POP — ਜਿਪਸਮ ਨੂੰ 373 K ਤੇ ਗਰਮ ਕਰਕੇ)।',
                'ਧਾਤਾਂ, ਮਿਸ਼ਰਤ ਧਾਤਾਂ ਅਤੇ ਕਾਰਬਨ: ਦ੍ਰਵ ਧਾਤ = Hg, ਦ੍ਰਵ ਅਧਾਤ = Br2; ਉਭੈਧਰਮੀ ਆਕਸਾਈਡ = Al2O3 ਤੇ ZnO; ਐਕਵਾ ਰੇਜੀਆ = 3 HCl : 1 HNO3; ਪਿੱਤਲ = Cu+Zn, ਕਾਂਸੀ = Cu+Sn; ਸਮਜਾਤੀ ਲੜੀ ਵਿੱਚ -CH2- (14 u) ਦਾ ਅੰਤਰ।',
                'ਸੈੱਲ ਅਤੇ ਟਿਸ਼ੂ: ਮਾਇਟੋਕਾਂਡਰੀਆ (ATP) ਅਤੇ ਪਲਾਸਟਿਡ ਕੋਲ ਆਪਣਾ DNA ਹੁੰਦਾ ਹੈ; ਲਾਇਸੋਸੋਮ = ਆਤਮਘਾਤੀ ਥੈਲੀਆਂ; ਜ਼ਾਇਲਮ = ਪਾਣੀ, ਫਲੋਇਮ = ਭੋਜਨ; ਲਿਗਾਮੈਂਟ = ਹੱਡੀ ਤੋਂ ਹੱਡੀ, ਟੈਂਡਨ = ਮਾਸਪੇਸ਼ੀ ਤੋਂ ਹੱਡੀ।',
                'ਜੈਵਿਕ ਪ੍ਰਕਿਰਿਆਵਾਂ ਅਤੇ ਹਾਰਮੋਨ: ਪੂਰਨ ਪਾਚਨ = ਛੋਟੀ ਆਂਦਰ; ਮਾਸਪੇਸ਼ੀਆਂ ਵਿੱਚ ਕੜੱਲ = ਲੈਕਟਿਕ ਐਸਿਡ; ਪਲਮਨਰੀ ਧਮਣੀ = ਅਸ਼ੁੱਧ ਖੂਨ; ਆਕਸਿਨ (ਪ੍ਰਕਾਸ਼-ਅਨੁਵਰਤਨ), ਸਾਇਟੋਕਾਇਨਿਨ (ਸੈੱਲ ਵੰਡ), ABA (ਵਾਧਾ ਰੋਕੂ)।',
                'ਪ੍ਰਜਨਨ ਅਤੇ ਅਨੁਵੰਸ਼ਿਕਤਾ: ਪਲਾਜ਼ਮੋਡੀਅਮ = ਬਹੁ-ਖੰਡਨ, ਬ੍ਰਾਇਓਫਿਲਮ = ਪੱਤਿਆਂ ਰਾਹੀਂ; ਮੈਂਡਲ ਇੱਕ-ਸੰਕਰ ਅਨੁਪਾਤ = 3:1 (ਜੀਨੋਟਾਇਪ 1:2:1), ਦੋ-ਸੰਕਰ = 9:3:3:1; ਸਮजात = ਸਮਾਨ ਬਣਤਰ, ਸਮਰੂਪ = ਸਮਾਨ ਕਾਰਜ।'
            ],
            hi: [
                'ऊर्ध्वपातन एवं समस्थानिक: कपूर, नौसादर (NH4Cl), नैफ्थलीन, आयोडीन व शुष्क बर्फ़ (ठोस CO2) सीधे गैस बनते हैं; Co-60 (कैंसर), I-131 (घेंघा); AgCl/AgBr श्वेत-श्याम फोटोग्राफी में प्रयुक्त होता है।',
                '5 औद्योगिक लवण: NaOH (कास्टिक सोडा), CaOCl2 (ब्लीचिंग पाउडर), NaHCO3 (बेकिंग सोडा — ऐंटासिड), Na2CO3·10H2O (धोने का सोडा — जल की स्थायी कठोरता दूर करता है), CaSO4·(1/2)H2O (POP — जिप्सम को 373 K पर गर्म करके)।',
                'धातुएँ, मिश्रधातुएँ एवं कार्बन: द्रव धातु = Hg, द्रव अधातु = Br2; उभयधर्मी ऑक्साइड = Al2O3 व ZnO; ऐक्वा रेजिया = 3 HCl : 1 HNO3; पीतल = Cu+Zn, काँसा = Cu+Sn; समजातीय श्रेणी में -CH2- (14 u) का अंतर।',
                'कोशिका एवं ऊतक: माइटोकॉन्ड्रिया (ATP) और प्लैस्टिड में स्वयं का DNA होता है; लाइसोसोम = आत्मघाती थैली; जाइलम = जल, फ्लोएम = भोजन; स्नायु (Ligament) = अस्थि से अस्थि, कंडरा (Tendon) = पेशी से अस्थि।',
                'जैव प्रक्रम एवं हार्मोन: पूर्ण पाचन = क्षुद्रांत्र (छोटी आँत); पेशियों में ऐंठन = लैक्टिक अम्ल; फुफ्फुस धमनी = विऑक्सीजनित रक्त; ऑक्सिन (प्रकाशानुवर्तन), साइटोकाइनिन (कोशिका विभाजन), ABA (वृद्धि संदमक)।',
                'जनन एवं आनुवंशिकता: प्लैज्मोडियम = बहुखंडन, ब्रायोफिलम = पत्तियों द्वारा; मेंडल एकसंकर अनुपात = 3:1 (जीनप्ररूप 1:2:1), द्विसंकर = 9:3:3:1; समजात = समान संरचना, समरूप = समान कार्य।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'POP vs Gypsum Formula Trap: Gypsum is CaSO4·2H2O; heating at exactly 373 K (100°C) loses 1.5 H2O to give Plaster of Paris CaSO4·(1/2)H2O (heating above 373 K gives dead burnt plaster CaSO4!).',
                'Alloy Mnemonic: Brass = Cu + Zn ("Z" is NOT in Brass, so Zn is in Brass!); Bronze = Cu + Sn; Solder = Pb + Sn.',
                'Blood Vessels Exception: All arteries carry oxygenated blood EXCEPT Pulmonary Artery; all veins carry deoxygenated blood EXCEPT Pulmonary Vein.',
                'Connective Tissue Mnemonic: BLB (Bone–Ligament–Bone) and MTB (Muscle–Tendon–Bone).',
                'Mendelian Ratios: Monohybrid F2 Phenotypic = 3:1, Genotypic = 1:2:1; Dihybrid F2 Phenotypic = 9:3:3:1; Test Cross = 1:1.'
            ],
            pa: [
                'POP ਬਨਾਮ ਜਿਪਸਮ: ਜਿਪਸਮ CaSO4·2H2O ਨੂੰ ਠੀਕ 373 K (100°C) ਤੇ ਗਰਮ ਕਰਨ ਨਾਲ ਪਲਾਸਟਰ ਆਫ਼ ਪੈਰਿਸ CaSO4·(1/2)H2O ਬਣਦਾ ਹੈ।',
                'ਮਿਸ਼ਰਤ ਧਾਤਾਂ ਟ੍ਰਿਕ: ਪਿੱਤਲ (Brass) = Cu + Zn; ਕਾਂਸੀ (Bronze) = Cu + Sn; ਸੋਲਡਰ (Solder) = Pb + Sn।',
                'ਲਹੂ ਵਹਿਣੀਆਂ ਦਾ ਅਪਵਾਦ: ਪਲਮਨਰੀ ਧਮਣੀ (Pulmonary Artery) ਇਕਲੌਤੀ ਧਮਣੀ ਹੈ ਜਿਸ ਵਿੱਚ ਅਸ਼ੁੱਧ ਖੂਨ ਵਗਦਾ ਹੈ; ਪਲਮਨਰੀ ਸ਼ਿਰਾ ਵਿੱਚ ਸ਼ੁੱਧ ਖੂਨ ਵਗਦਾ ਹੈ।',
                'ਜੋੜਕ ਟਿਸ਼ੂ ਟ੍ਰਿਕ: BLB (ਹੱਡੀ–ਲਿਗਾਮੈਂਟ–ਹੱਡੀ) ਅਤੇ MTB (ਮਾਸਪੇਸ਼ੀ–ਟੈਂਡਨ–ਹੱਡੀ)।',
                'ਮੈਂਡਲ ਦੇ ਅਨੁਪਾਤ: ਇੱਕ-ਸੰਕਰ F2 ਫੀਨੋਟਾਇਪ = 3:1, ਜੀਨੋਟਾਇਪ = 1:2:1; ਦੋ-ਸੰਕਰ F2 ਫੀਨੋਟਾਇਪ = 9:3:3:1।'
            ],
            hi: [
                'POP बनाम जिप्सम: जिप्सम CaSO4·2H2O को ठीक 373 K (100°C) पर गर्म करने से प्लास्टर ऑफ पेरिस CaSO4·(1/2)H2O बनता है।',
                'मिश्रधातु ट्रिक: पीतल (Brass) = Cu + Zn; काँसा (Bronze) = Cu + Sn; सोल्डर (Solder) = Pb + Sn।',
                'रक्त वाहिनियों का अपवाद: फुफ्फुस धमनी (Pulmonary Artery) एकमात्र धमनी है जिसमें अशुद्ध रक्त बहता है; फुफ्फुस शिरा में शुद्ध रक्त बहता है।',
                'संयोजी ऊतक ट्रिक: BLB (अस्थि–स्नायु–अस्थि) तथा MTB (पेशी–कंडरा–अस्थि)।',
                'मेंडल के अनुपात: एकसंकर F2 लक्षणप्ररूप = 3:1, जीनप्ररूप = 1:2:1; द्विसंकर F2 लक्षणप्ररूप = 9:3:3:1।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Thinking Bile juice contains fat-digesting enzymes like lipase. Correction: Bile juice (secreted by the liver) contains NO digestive enzymes at all; its bile salts only emulsify large fat globules into tiny droplets so pancreatic lipase can digest them.',
                'Misconception: Confusing Baking Soda (NaHCO3) with Washing Soda (Na2CO3·10H2O) for removing permanent hardness of water. Correction: Washing Soda (Sodium Carbonate Decahydrate) precipitates Ca^2+ and Mg^2+ ions as insoluble carbonates to remove permanent hardness.',
                'Misconception: Thinking all arteries carry oxygenated blood and all veins carry deoxygenated blood. Correction: The Pulmonary Artery carries deoxygenated blood from the right ventricle to the lungs, and the Pulmonary Vein carries oxygenated blood from the lungs to the left atrium.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਇਹ ਮੰਨਣਾ ਕਿ ਪਿੱਤ ਰਸ (Bile juice) ਵਿੱਚ ਚਰਬੀ ਪਚਾਉਣ ਵਾਲੇ ਐਂਜ਼ਾਈਮ ਹੁੰਦੇ ਹਨ। ਸੁਧਾਰ: ਜਿਗਰ ਦੁਆਰਾ ਬਣਾਏ ਪਿੱਤ ਰਸ ਵਿੱਚ ਕੋਈ ਵੀ ਪਾਚਕ ਐਂਜ਼ਾਈਮ ਨਹੀਂ ਹੁੰਦਾ; ਇਹ ਸਿਰਫ਼ ਚਰਬੀ ਦੀਆਂ ਵੱਡੀਆਂ ਬੂੰਦਾਂ ਦਾ ਇਮਲਸੀਕਰਨ (Emulsification) ਕਰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਪਾਣੀ ਦੀ ਸਥਾਈ ਕਠੋਰਤਾ ਦੂਰ ਕਰਨ ਲਈ ਮਿੱਠੇ ਸੋਡੇ (NaHCO3) ਅਤੇ ਧੋਣ ਵਾਲੇ ਸੋਡੇ (Na2CO3·10H2O) ਵਿੱਚ ਉਲਝਣਾ। ਸੁਧਾਰ: ਪਾਣੀ ਦੀ ਸਥਾਈ ਕਠੋਰਤਾ ਦੂਰ ਕਰਨ ਲਈ ਹਮੇਸ਼ਾ ਕੱਪੜੇ ਧੋਣ ਵਾਲਾ ਸੋਡਾ (Washing Soda) ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਇਹ ਸੋਚਣਾ ਕਿ ਸਾਰੀਆਂ ਧਮਣੀਆਂ ਵਿੱਚ ਸ਼ੁੱਧ ਖੂਨ ਅਤੇ ਸਾਰੀਆਂ ਸ਼ਿਰਾਵਾਂ ਵਿੱਚ ਅਸ਼ੁੱਧ ਖੂਨ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਪਲਮਨਰੀ ਧਮਣੀ ਵਿੱਚ ਅਸ਼ੁੱਧ (ਆਕਸੀਜਨ-ਰਹਿਤ) ਖੂਨ ਅਤੇ ਪਲਮਨਰੀ ਸ਼ਿਰਾ ਵਿੱਚ ਸ਼ੁੱਧ (ਆਕਸੀਜਨ-ਯੁਕਤ) ਖੂਨ ਵਗਦਾ ਹੈ।'
            ],
            hi: [
                'भ्रांति: यह समझना कि पित्त रस (Bile juice) में वसा-पाचक एंजाइम होते हैं। सुधार: यकृत द्वारा स्रावित पित्त रस में कोई भी पाचक एंजाइम नहीं होता; यह केवल वसा की बड़ी गोलिकाओं का इमल्सीकरण (पायसीकरण) करता है।',
                'भ्रांति: जल की स्थायी कठोरता दूर करने के लिए बेकिंग सोडा (NaHCO3) और धोने के सोडा (Na2CO3·10H2O) में भ्रमित होना। सुधार: जल की स्थायी कठोरता दूर करने के लिए सदैव धोने का सोडा (Washing Soda) प्रयुक्त होता है।',
                'भ्रांति: यह सोचना कि सभी धमनियों में शुद्ध रक्त और सभी शिराओं में अशुद्ध रक्त बहता है। सुधार: फुफ्फुस धमनी में विऑक्सीजनित (अशुद्ध) रक्त और फुफ्फुस शिरा में ऑक्सीजनित (शुद्ध) रक्त बहता है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — Mole Concept & Temperature Conversion] (a) Convert 300 K and 573 K into the Celsius scale. (b) Calculate the number of moles and total number of molecules in 88 g of Carbon Dioxide (CO2).',
                    pa: '[Easy — ਮੋਲ ਸੰਕਲਪ ਅਤੇ ਤਾਪਮਾਨ ਪਰਿਵਰਤਨ] (a) 300 K ਅਤੇ 573 K ਨੂੰ ਸੈਲਸੀਅਸ ਸਕੇਲ ਵਿੱਚ ਬਦਲੋ। (b) 88 g ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ (CO2) ਵਿੱਚ ਮੋਲਾਂ ਦੀ ਗਿਣਤੀ ਅਤੇ ਅਣੂਆਂ ਦੀ ਕੁੱਲ ਗਿਣਤੀ ਪਤਾ ਕਰੋ।',
                    hi: '[Easy — मोल संकल्पना एवं तापमान रूपांतरण] (a) 300 K और 573 K को सेल्सियस मापक्रम में बदलें। (b) 88 g कार्बन डाइऑक्साइड (CO2) में मोलों की संख्या तथा अणुओं की कुल संख्या ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: T(°C) = T(K) - 273 => 300 - 273 = 27°C, and 573 - 273 = 300°C.',
                        'Step 2: Molar mass of CO2 = 12 + 2(16) = 44 g/mol. Number of moles n = Given mass / Molar mass = 88 / 44 = 2 moles.',
                        'Step 3: Number of molecules N = n × N_A = 2 × 6.022 × 10^23 = 1.2044 × 10^24 molecules.'
                    ],
                    pa: [
                        'Step 1: T(°C) = T(K) - 273 => 300 - 273 = 27°C, ਅਤੇ 573 - 273 = 300°C।',
                        'Step 2: CO2 ਦਾ ਮੋਲਰ ਪੁੰਜ = 12 + 32 = 44 g/mol। ਮੋਲਾਂ ਦੀ ਗਿਣਤੀ n = 88 / 44 = 2 ਮੋਲ।',
                        'Step 3: ਅਣੂਆਂ ਦੀ ਗਿਣਤੀ = 2 × 6.022 × 10^23 = 1.2044 × 10^24 ਅਣੂ।'
                    ],
                    hi: [
                        'Step 1: T(°C) = T(K) - 273 => 300 - 273 = 27°C, तथा 573 - 273 = 300°C।',
                        'Step 2: CO2 का मोलर द्रव्यमान = 12 + 32 = 44 g/mol। मोलों की संख्या n = 88 / 44 = 2 मोल।',
                        'Step 3: अणुओं की संख्या = 2 × 6.022 × 10^23 = 1.2044 × 10^24 अणु।'
                    ]
                },
                finalAnswer: {
                    en: '(a) 27°C and 300°C; (b) 2 moles, 1.2044 × 10^24 molecules',
                    pa: '(a) 27°C ਅਤੇ 300°C; (b) 2 ਮੋਲ, 1.2044 × 10^24 ਅਣੂ',
                    hi: '(a) 27°C तथा 300°C; (b) 2 मोल, 1.2044 × 10^24 अणु'
                }
            },
            {
                problem: {
                    en: '[Medium — Industrial Salt Identification] A white powder X is prepared by heating Gypsum at 373 K. When mixed with water, X sets into a hard solid mass Y and is used by doctors to support fractured bones. Identify X and Y and write the balanced chemical equation.',
                    pa: '[Medium — ਉਦਯੋਗਿਕ ਲੂਣ ਦੀ ਪਛਾਣ] ਇੱਕ ਚਿੱਟਾ ਪਾਊਡਰ X ਜਿਪਸਮ ਨੂੰ 373 K ਤੇ ਗਰਮ ਕਰਕੇ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ। ਪਾਣੀ ਮਿਲਾਉਣ ਤੇ X ਮੁੜ ਇੱਕ ਸਖ਼ਤ ਠੋਸ ਪਦਾਰਥ Y ਵਿੱਚ ਬਦਲ ਜਾਂਦਾ ਹੈ ਅਤੇ ਟੁੱਟੀਆਂ ਹੱਡੀਆਂ ਜੋੜਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। X ਅਤੇ Y ਦੀ ਪਛਾਣ ਕਰੋ।',
                    hi: '[Medium — औद्योगिक लवण की पहचान] एक सफेद चूर्ण X जिप्सम को 373 K पर गर्म करके बनाया जाता है। जल मिलाने पर X पुनः एक कठोर ठोस पदार्थ Y में जम जाता है और टूटी हड्डियों को जोड़ने में प्रयुक्त होता है। X और Y की पहचान कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: X is Plaster of Paris (Calcium Sulphate Hemihydrate, CaSO4·1/2 H2O).',
                        'Step 2: Y is Gypsum (Calcium Sulphate Dihydrate, CaSO4·2H2O).',
                        'Step 3: Balanced equation: CaSO4·(1/2)H2O + 1.5 H2O -> CaSO4·2H2O.'
                    ],
                    pa: [
                        'Step 1: X ਪਲਾਸਟਰ ਆਫ਼ ਪੈਰਿਸ (ਕੈਲਸ਼ੀਅਮ ਸਲਫੇਟ ਹੈਮੀਹਾਈਡ੍ਰੇਟ, CaSO4·1/2 H2O) ਹੈ।',
                        'Step 2: Y ਜਿਪਸਮ (CaSO4·2H2O) ਹੈ।',
                        'Step 3: ਸਮੀਕਰਨ: CaSO4·(1/2)H2O + 1.5 H2O -> CaSO4·2H2O।'
                    ],
                    hi: [
                        'Step 1: X प्लास्टर ऑफ पेरिस (कैल्शियम सल्फेट अर्धहाइड्रेट, CaSO4·1/2 H2O) है।',
                        'Step 2: Y जिप्सम (CaSO4·2H2O) है।',
                        'Step 3: समीकरण: CaSO4·(1/2)H2O + 1.5 H2O -> CaSO4·2H2O।'
                    ]
                },
                finalAnswer: {
                    en: 'X = Plaster of Paris (CaSO4·1/2 H2O); Y = Gypsum (CaSO4·2H2O)',
                    pa: 'X = ਪਲਾਸਟਰ ਆਫ਼ ਪੈਰਿਸ (CaSO4·1/2 H2O); Y = ਜਿਪਸਮ (CaSO4·2H2O)',
                    hi: 'X = प्लास्टर ऑफ पेरिस (CaSO4·1/2 H2O); Y = जिप्सम (CaSO4·2H2O)'
                }
            },
            {
                problem: {
                    en: '[Tricky — Mendelian Monohybrid Cross] When Mendel crossed a pure tall pea plant (TT) with a pure dwarf pea plant (tt) and self-pollinated the F1 progeny to obtain 800 F2 plants, how many plants in the F2 generation were (i) Homozygous tall (TT), (ii) Heterozygous tall (Tt), and (iii) Dwarf (tt)?',
                    pa: '[Tricky — ਮੈਂਡਲ ਦਾ ਇੱਕ-ਸੰਕਰ ਕਰਾਸ] ਜਦੋਂ ਮੈਂਡਲ ਨੇ ਸ਼ੁੱਧ ਲੰਬੇ ਮਟਰ ਦੇ ਪੌਦੇ (TT) ਅਤੇ ਸ਼ੁੱਧ ਮਧਰੇ ਪੌਦੇ (tt) ਦੇ F1 ਵੰਸ਼ ਦਾ ਸਵੈ-ਪਰਾਗਣ ਕਰਵਾ ਕੇ F2 ਪੀੜ੍ਹੀ ਵਿੱਚ 800 ਪੌਦੇ ਪ੍ਰਾਪਤ ਕੀਤੇ, ਤਾਂ ਉਹਨਾਂ ਵਿੱਚੋਂ ਕਿੰਨੇ ਪੌਦੇ (i) ਸ਼ੁੱਧ ਲੰਬੇ (TT), (ii) ਅਸ਼ੁੱਧ ਲੰਬੇ (Tt), ਅਤੇ (iii) ਮਧਰੇ (tt) ਸਨ?',
                    hi: '[Tricky — मेंडल का एकसंकर क्रॉस] जब मेंडल ने शुद्ध लंबे मटर के पौधे (TT) और शुद्ध बौने पौधे (tt) की F1 संतति का स्व-परागण कराकर F2 पीढ़ी में 800 पौधे प्राप्त किए, तो उनमें से कितने पौधे (i) समयुग्मजी लंबे (TT), (ii) विषमयुग्मजी लंबे (Tt), तथा (iii) बौने (tt) थे?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: F1 progeny is all Tt (Hybrid Tall). On selfing Tt × Tt, the F2 genotypic ratio is TT : Tt : tt = 1 : 2 : 1 (total 4 parts) and phenotypic ratio is 3 Tall : 1 Dwarf.',
                        'Step 2: Out of 800 plants: Homozygous tall (TT) = (1/4) × 800 = 200 plants.',
                        'Step 3: Heterozygous tall (Tt) = (2/4) × 800 = 400 plants (Total tall = 200 + 400 = 600).',
                        'Step 4: Dwarf (tt) = (1/4) × 800 = 200 plants.'
                    ],
                    pa: [
                        'Step 1: F1 ਪੀੜ੍ਹੀ ਵਿੱਚ ਸਾਰੇ ਪੌਦੇ Tt ਹੁੰਦੇ ਹਨ। F2 ਪੀੜ੍ਹੀ ਦਾ ਜੀਨੋਟਾਇਪ ਅਨੁਪਾਤ TT : Tt : tt = 1 : 2 : 1 (ਕੁੱਲ 4 ਹਿੱਸੇ) ਹੁੰਦਾ ਹੈ।',
                        'Step 2: ਸ਼ੁੱਧ ਲੰਬੇ (TT) = (1/4) × 800 = 200 ਪੌਦੇ।',
                        'Step 3: ਅਸ਼ੁੱਧ ਲੰਬੇ (Tt) = (2/4) × 800 = 400 ਪੌਦੇ (ਕੁੱਲ ਲੰਬੇ = 600)।',
                        'Step 4: ਮਧਰੇ (tt) = (1/4) × 800 = 200 ਪੌਦੇ।'
                    ],
                    hi: [
                        'Step 1: F1 पीढ़ी में सभी पौधे Tt होते हैं। F2 पीढ़ी का जीनप्ररूप अनुपात TT : Tt : tt = 1 : 2 : 1 (कुल 4 भाग) होता है।',
                        'Step 2: समयुग्मजी लंबे (TT) = (1/4) × 800 = 200 पौधे।',
                        'Step 3: विषमयुग्मजी लंबे (Tt) = (2/4) × 800 = 400 पौधे (कुल लंबे = 600)।',
                        'Step 4: बौने (tt) = (1/4) × 800 = 200 पौधे।'
                    ]
                },
                finalAnswer: {
                    en: 'TT = 200, Tt = 400, tt = 200 (Phenotypic: 600 Tall : 200 Dwarf)',
                    pa: 'TT = 200, Tt = 400, tt = 200 (600 ਲੰਬੇ : 200 ਮਧਰੇ)',
                    hi: 'TT = 200, Tt = 400, tt = 200 (600 लंबे : 200 बौने)'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-sci-chem-fc-1',
                question: {
                    en: 'Give the chemical name and formula of (a) Bleaching Powder, (b) Baking Soda, (c) Washing Soda, and (d) Plaster of Paris.',
                    pa: '(a) ਬਲੀਚਿੰਗ ਪਾਊਡਰ, (b) ਮਿੱਠਾ ਸੋਡਾ, (c) ਕੱਪੜੇ ਧੋਣ ਵਾਲਾ ਸੋਡਾ, ਅਤੇ (d) ਪਲਾਸਟਰ ਆਫ਼ ਪੈਰਿਸ ਦਾ ਰਸਾਇਣਕ ਨਾਂ ਅਤੇ ਸੂਤਰ ਦੱਸੋ।',
                    hi: '(a) विरंजक चूर्ण, (b) बेकिंग सोडा, (c) धोने का सोडा, तथा (d) प्लास्टर ऑफ पेरिस का रासायनिक नाम व सूत्र लिखिए।'
                },
                answer: {
                    en: '(a) Calcium oxychloride (CaOCl2); (b) Sodium hydrogen carbonate (NaHCO3); (c) Sodium carbonate decahydrate (Na2CO3·10H2O); (d) Calcium sulphate hemihydrate (CaSO4·1/2 H2O).',
                    pa: '(a) ਕੈਲਸ਼ੀਅਮ ਆਕਸੀਕਲੋਰਾਈਡ (CaOCl2); (b) ਸੋਡੀਅਮ ਹਾਈਡ੍ਰੋਜਨ ਕਾਰਬੋਨੇਟ (NaHCO3); (c) ਸੋਡੀਅਮ ਕਾਰਬੋਨੇਟ ਡੈਕਾਹਾਈਡ੍ਰੇਟ (Na2CO3·10H2O); (d) ਕੈਲਸ਼ੀਅਮ ਸਲਫੇਟ ਹੈਮੀਹਾਈਡ੍ਰੇਟ (CaSO4·1/2 H2O)।',
                    hi: '(a) कैल्शियम ऑक्सीक्लोराइड (CaOCl2); (b) सोडियम हाइड्रोजन कार्बोनेट (NaHCO3); (c) सोडियम कार्बोनेट डेकाहाइड्रेट (Na2CO3·10H2O); (d) कैल्शियम सल्फेट अर्धहाइड्रेट (CaSO4·1/2 H2O)।'
                }
            },
            {
                id: 'ett-sci-chem-fc-2',
                question: {
                    en: 'Name two Amphoteric Oxides that react with both acids and bases to form salt and water.',
                    pa: 'ਦੋ ਉਭੈਧਰਮੀ ਆਕਸਾਈਡਾਂ (Amphoteric Oxides) ਦੇ ਨਾਂ ਦੱਸੋ ਜੋ ਤੇਜ਼ਾਬ ਅਤੇ ਖਾਰ ਦੋਵਾਂ ਨਾਲ ਕਿਰਿਆ ਕਰਕੇ ਲੂਣ ਤੇ ਪਾਣੀ ਬਣਾਉਂਦੇ ਹਨ।',
                    hi: 'दो उभयधर्मी ऑक्साइडों (Amphoteric Oxides) के नाम बताइए जो अम्ल और क्षारक दोनों से अभिक्रिया करके लवण तथा जल बनाते हैं।'
                },
                answer: {
                    en: 'Aluminium oxide (Al2O3) and Zinc oxide (ZnO).',
                    pa: 'ਐਲੂਮੀਨੀਅਮ ਆਕਸਾਈਡ (Al2O3) ਅਤੇ ਜ਼ਿੰਕ ਆਕਸਾਈਡ (ZnO)।',
                    hi: 'ऐलुमिनियम ऑक्साइड (Al2O3) तथा जिंक ऑक्साइड (ZnO)।'
                }
            },
            {
                id: 'ett-sci-chem-fc-3',
                question: {
                    en: 'Which two eukaryotic cell organelles besides the nucleus contain their own circular DNA and ribosomes?',
                    pa: 'ਕੇਂਦਰਕ (Nucleus) ਤੋਂ ਇਲਾਵਾ ਕਿਹੜੇ ਦੋ ਸੈੱਲ ਅੰਗਾਂ ਕੋਲ ਆਪਣਾ DNA ਅਤੇ ਰਾਈਬੋਸੋਮ ਹੁੰਦੇ ਹਨ?',
                    hi: 'केंद्रक (Nucleus) के अतिरिक्त किन दो कोशिकांगों में अपना स्वयं का DNA तथा राइबोसोम होते हैं?'
                },
                answer: {
                    en: 'Mitochondria and Plastids (Chloroplasts).',
                    pa: 'ਮਾਇਟੋਕਾਂਡਰੀਆ (Mitochondria) ਅਤੇ ਪਲਾਸਟਿਡ (Plastids / ਕਲੋਰੋਪਲਾਸਟ)।',
                    hi: 'माइटोकॉन्ड्रिया (Mitochondria) तथा प्लैस्टिड (Plastids / क्लोरोप्लास्ट)।'
                }
            },
            {
                id: 'ett-sci-chem-fc-4',
                question: {
                    en: 'What causes muscle cramps in athletes during sudden heavy exercise?',
                    pa: 'ਅਚਾਨਕ ਭਾਰੀ ਕਸਰਤ ਦੌਰਾਨ ਖਿਡਾਰੀਆਂ ਦੀਆਂ ਮਾਸਪੇਸ਼ੀਆਂ ਵਿੱਚ ਕੜੱਲ (Cramps) ਕਿਸ ਦੇ ਜਮ੍ਹਾਂ ਹੋਣ ਕਾਰਨ ਪੈਂਦੀ ਹੈ?',
                    hi: 'अचानक भारी व्यायाम के दौरान खिलाड़ियों की पेशियों में ऐंठन (Cramps) किसके संचयन के कारण होती है?'
                },
                answer: {
                    en: 'Accumulation of Lactic Acid (3-carbon molecule) produced by anaerobic breakdown of pyruvate in muscle cells due to lack of oxygen.',
                    pa: 'ਆਕਸੀਜਨ ਦੀ ਘਾਟ ਕਾਰਨ ਮਾਸਪੇਸ਼ੀਆਂ ਵਿੱਚ ਪਾਇਰੂਵੇਟ ਦੇ ਅਣ-ਆਕਸੀ ਵਿਖੰਡਨ ਨਾਲ ਬਣੇ ਲੈਕਟਿਕ ਐਸਿਡ (Lactic Acid) ਦੇ ਜਮ੍ਹਾਂ ਹੋਣ ਕਾਰਨ।',
                    hi: 'ऑक्सीजन के अभाव में पेशी कोशिकाओं में पाइरूवेट के अवायवीय विखंडन से बने लैक्टिक अम्ल (Lactic Acid) के संचयन के कारण।'
                }
            },
            {
                id: 'ett-sci-chem-fc-5',
                question: {
                    en: 'Match the 5 major plant hormones with their functions: Auxin, Gibberellin, Cytokinin, Abscisic Acid (ABA), and Ethylene.',
                    pa: '5 ਮੁੱਖ ਪੌਦਾ ਹਾਰਮੋਨਾਂ ਦੇ ਕੰਮ ਦੱਸੋ: ਆਕਸਿਨ, ਜਿਬਰੇਲਿਨ, ਸਾਇਟੋਕਾਇਨਿਨ, ਐਬਸਿਸਿਕ ਐਸਿਡ (ABA) ਅਤੇ ਈਥੀਲੀਨ।',
                    hi: '5 प्रमुख पादप हार्मोन के कार्य बताइए: ऑक्सिन, जिबरेलिन, साइटोकाइनिन, ऐब्सिसिक अम्ल (ABA) तथा एथिलीन।'
                },
                answer: {
                    en: 'Auxin = Phototropism & tip elongation; Gibberellin = Stem growth; Cytokinin = Cell division; ABA = Growth inhibitor (wilting); Ethylene = Gaseous hormone for fruit ripening.',
                    pa: 'ਆਕਸਿਨ = ਪ੍ਰਕਾਸ਼-ਅਨੁਵਰਤਨ; ਜਿਬਰੇਲਿਨ = ਤਣੇ ਦਾ ਵਾਧਾ; ਸਾਇਟੋਕਾਇਨਿਨ = ਸੈੱਲ ਵੰਡ; ABA = ਵਾਧਾ ਰੋਕੂ (ਪੱਤੇ ਮੁਰਝਾਉਣਾ); ਈਥੀਲੀਨ = ਫਲ ਪਕਾਉਣ ਵਾਲਾ ਗੈਸੀ ਹਾਰਮੋਨ।',
                    hi: 'ऑक्सिन = प्रकाशानुवर्तन; जिबरेलिन = तने की वृद्धि; साइटोकाइनिन = कोशिका विभाजन; ABA = वृद्धि संदमक (पत्तियों का मुरझाना); एथिलीन = फल पकाने वाला गैसीय हार्मोन।'
                }
            },
            {
                id: 'ett-sci-chem-fc-6',
                question: {
                    en: 'Distinguish between Homologous organs and Analogous organs with examples.',
                    pa: 'ਸਮजात ਅੰਗਾਂ (Homologous organs) ਅਤੇ ਸਮਰੂਪ ਅੰਗਾਂ (Analogous organs) ਵਿੱਚ ਉਦਾਹਰਣ ਸਹਿਤ ਅੰਤਰ ਦੱਸੋ।',
                    hi: 'समजात अंगों (Homologous organs) और समरूप अंगों (Analogous organs) में उदाहरण सहित अंतर स्पष्ट कीजिए।'
                },
                answer: {
                    en: 'Homologous organs have the SAME basic structure/origin but different functions (e.g., forelimbs of humans, cheetah, whale); Analogous organs have DIFFERENT structures/origins but perform the SAME function (e.g., wings of a bird and wings of an insect).',
                    pa: 'ਸਮजात ਅੰਗਾਂ ਦੀ ਮੂਲ ਬਣਤਰ ਇੱਕੋ ਜਿਹੀ ਪਰ ਕੰਮ ਵੱਖਰੇ ਹੁੰਦੇ ਹਨ (ਜਿਵੇਂ ਮਨੁੱਖ ਦੀ ਬਾਂਹ ਅਤੇ ਚੀਤੇ ਦੀ ਅਗਲੀ ਲੱਤ); ਸਮਰੂਪ ਅੰਗਾਂ ਦੀ ਬਣਤਰ ਵੱਖਰੀ ਪਰ ਕੰਮ ਇੱਕੋ ਜਿਹਾ ਹੁੰਦਾ ਹੈ (ਜਿਵੇਂ ਪੰਛੀ ਦੇ ਖੰਭ ਅਤੇ ਕੀਟ ਦੇ ਖੰਭ)।',
                    hi: 'समजात अंगों की मूल संरचना समान किंतु कार्य भिन्न होते हैं (जैसे मनुष्य के हाथ व चीते के अग्रपाद); समरूप अंगों की संरचना भिन्न किंतु कार्य समान होते हैं (जैसे पक्षी के पंख व कीट के पंख)।'
                }
            }
        ]
    },

    // =========================================================================
    // 7. ETT SOCIAL STUDIES COMPLETE BLUEPRINT: ALL 28 ARCHIVAL UNITS (PUNJAB HISTORY, CIVICS, GEOGRAPHY & ECONOMICS)
    // =========================================================================
    {
        topicId: 'ett-sst-history-3',
        editorialRecord: {
            lastUpdatedDate: '2026-04-12',
            verifiedSyllabusDenominator: 200,
            editorialNote: 'Resolving Blueprint Problem 2 (Missing Social Studies Topic List in Coaching Articles): Complete 28-Unit Archival Blueprint from pages 2–3 of the ERB 5994 Paper B Official PDF (9 Punjab History + 7 Civics + 8 Geography + 4 Economics = 28 Units / 40 Marks).'
        },
        bookRefs: [
            {
                title: 'PSEB Social Science Textbooks (Class 9 & Class 10) — Punjab History, Geography, Economics & Civics',
                author: 'Punjab School Education Board (PSEB), Mohali',
                chapter: 'All 28 Official Archival Units (9 History of Punjab + 7 Civics + 8 Geography + 4 Economics)',
                relevance: 'Complete 40-Mark (20 Questions) Social Studies section of Punjab ETT Recruitment Exam Paper B.'
            }
        ],
        summary: {
            en: `### [Level B: Basic — Resolving Blueprint Problem 2 & Part 1: History of Punjab (Units 1 to 5)]
1. **Resolving Blueprint Problem 2 (The 28 Archival Units of ETT Paper B Social Studies — 40 Marks):**
   - Most commercial coaching articles omit the Social Studies topic list because it spans pages 2–3 of the official Punjabi ERB 5994 Paper B notification PDF. The official syllabus comprises **28 Class 9–10 PSEB units**: **9 Units of Punjab History** + **7 Units of Civics (ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ)** + **8 Units of Geography (ਭੂਗੋਲ)** + **4 Units of Economics (ਅਰਥ ਸ਼ਾਸਤਰ)**.

2. **Units 1 & 2 — Physical Features of Punjab & Pre-Nanak Lodhi Punjab:**
   - **Unit 1 (Physical Features & Historical Impact):** Derived from Persian *Panj + Aab* (Land of 5 Rivers: **Sutlej, Beas, Ravi, Chenab, Jhelum**; Rigvedic *Sapta Sindhu*; Greek *Pentapotamia*). **North-Western Passes:** **Khyber Pass** (most frequent invasion route from Central Asia/Afghanistan), Bolan, Kurram, Tochi, Gomal.
   - **The 5 Historic Doabs (Coined by Raja Todar Mal under Akbar):**
     | Doab Name | Between Rivers | Key Cities / Region |
     |---|---|---|
     | **1. Bist Jalandhar Doab** | **Beas & Sutlej** | Jalandhar, Hoshiarpur, Kapurthala, SBS Nagar |
     | **2. Bari Doab (Majha)** | **Beas & Ravi** | Amritsar, Gurdaspur, Tarn Taran, Pathankot, Lahore |
     | **3. Rechna Doab** | **Ravi & Chenab** | Gujranwala, Sialkot, Sheikhupura |
     | **4. Chaj (Jech) Doab** | **Chenab & Jhelum** | Gujrat, Bhera, Shahpur |
     | **5. Sind Sagar Doab** | **Jhelum/Chenab & Indus** | Rawalpindi, Attock, Taxila |
   - **Unit 2 (Punjab before Guru Nanak Dev Ji):** Ruled by **Lodhi Dynasty** (**Bahlol Lodhi, Sikandar Lodhi, Ibrahim Lodhi**). **Tatar Khan** and later **Daulat Khan Lodhi** served as Governor (*Subedar*) of Lahore. **Babur** invaded Punjab **5 times (1519–1526)**, defeating Ibrahim Lodhi in the **First Battle of Panipat (21 April 1526)**.

3. **Unit 3 — Sri Guru Nanak Dev Ji (1469–1539) & Foundation of Sikhism:**
   - **Life:** Born **15 April 1469** at **Rai Bhoe di Talwandi (Nankana Sahib)** to **Mehta Kalu Ji** and **Mata Tripta Ji** (sister: **Bebe Nanaki Ji**; wife: **Mata Sulakhni Ji**; sons: **Baba Sri Chand** [founded *Udasi* sect] & **Baba Lakhmi Das**).
   - **Sultanpur Lodhi:** Worked at **Daulat Khan Lodhi's Modi Khana (granary)**; attained enlightenment in **Kali Bein** river around $1499$, proclaiming ***"Na Koi Hindu, Na Koi Musalman"***.
   - **Four Udasis (Missionary Journeys, 1500–1521)** accompanied by rabab player **Bhai Mardana Ji**:
     - *1st Udasi (East & South):* Sayyidpur (Bhai Lalo vs Malik Bhago), Kurukshetra, Haridwar, Panipat, Delhi, Banaras, Kamrup (Assam — Nur Shah), Jagannath Puri, Talumba (Sajjan Thug).
     - *2nd Udasi (South):* Sri Lanka (Raja Shivnabh).
     - *3rd Udasi (North):* Kashmir, Mount Sumer, Kailash Mansarovar (*Sidh Gosht* with Gorakhnath/Sidhas), Hasan Abdal (**Panja Sahib** — Wali Qandhari).
     - *4th Udasi (West):* **Mecca & Medina**, Baghdad.
   - **Kartarpur (Founded 1521 on River Ravi):** Established **Sangat** (holy congregation), **Pangat / Langar** (community kitchen), **Dharamsal**, and the threefold ethic **Kirat Karo, Naam Japo, Vand Chhako**.
   - **Major Banis (974 hymns in 19 Ragas):** *Japji Sahib, Asa di Var, Sidh Gosht, Dakhni Oankar, Patti, Barah Maha (Raga Tukhari), Babur Vani* (eyewitness account of Babur's 1521 Sayyidpur invasion). Appointed **Bhai Lehna Ji (Guru Angad Dev Ji)** as successor before Jyoti Jot at Kartarpur (22 Sept 1539).

4. **Unit 4 — Successor Gurus (2nd Guru Angad Dev Ji to 9th Guru Tegh Bahadur Ji):**
   | Guru Sahib (Guruship) | Headquarters / Cities Founded | Key Institutions, Banis & Historical Milestones |
   |---|---|---|
   | **2nd: Guru Angad Dev Ji (1539–1552)** *(Bhai Lehna Ji)* | **Khadur Sahib** | Standardized **Gurmukhi script (35 Akhar)**; started **Mal Akhara** (physical wrestling); expanded Langar (Mata Khivi Ji); Emperor **Humayun** visited him in 1540 ($62$ Saloks). |
   | **3rd: Guru Amar Das Ji (1552–1574)** | **Goindwal Sahib** (Baoli with **84 steps**, 1559) | Established **22 Manjis** (preaching dioceses) & Piris; **"Pehle Pangat Piche Sangat"** (**Akbar** ate Langar before meeting him); composed **Anand Sahib (40 Pauris, Raga Ramkali)**; abolished **Sati & Purdah**. |
   | **4th: Guru Ram Das Ji (1574–1581)** *(Bhai Jetha Ji)* | **Ramdaspur / Chak Ramdas (Amritsar, 1577)** | Excavated **Amritsar & Santokhsar Sarovars**; started **Masand system**; composed **4 Lavan** (Raga Suhi — Sikh marriage hymns); 679 hymns in **30 Ragas**. |
   | **5th: Guru Arjan Dev Ji (1581–1606)** | Completed **Harmandir Sahib**; founded **Tarn Taran, Kartarpur (Jalandhar), Sri Hargobindpur** | Foundation stone of Harmandir Sahib laid by Sufi saint **Hazrat Mian Mir (1588)**; compiled **Adi Granth (1604)** scribed by **Bhai Gurdas Ji** & installed with **Baba Buddha Ji** as first Granthi; composed **Sukhmani Sahib** (24 Ashtpadis) & *Barah Maha Majh*; institutionalized **Daswandh** ($1/10$th income); **Martyred at Lahore (30 May 1606)** on orders of **Jahangir** (*Sirtaj-us-Shuhada*). |
   | **6th: Guru Hargobind Sahib Ji (1606–1644)** | Built **Akal Takht (1606)** & **Lohgarh Fort**; **Kiratpur Sahib** | Donned two swords of **Miri (Temporal)** and **Piri (Spiritual)**; wore *Kalgi* & maintained army; imprisoned at **Gwalior Fort** by Jahangir & released with **52 Hindu kings (*Bandi Chhor*)**; fought 4 defensive battles against Shah Jahan's forces (Amritsar, Lahira, Kartarpur, Phagwara). |
   | **7th: Guru Har Rai Ji (1644–1661)** | Kiratpur Sahib | Maintained $2,200$ horsemen; ran Ayurvedic dispensary (cured Dara Shikoh); sent Ram Rai to Aurangzeb's court. |
   | **8th: Guru Har Krishan Ji (1661–1664)** | Kiratpur $\\to$ **Delhi (Bangla Sahib)** | Youngest Guru (**Bala Pir**, Guruship at age $5$); served smallpox/cholera victims in Delhi;uttered ***"Baba Bakale"*** before Jyoti Jot at age $8$. |
   | **9th: Guru Tegh Bahadur Ji (1664–1675)** *(Tyag Mal)* | Discovered at Bakala by **Makhan Shah Lubana**; founded **Chak Nanaki (Anandpur Sahib, 1665)** | Composed $115$ hymns in **15 Ragas** (including **Raga Jaijaiwanti** & *57 Saloks*); championed religious freedom of **Kashmiri Pandits (led by Pandit Kirpa Ram)**; **Martyred at Chandni Chowk, Delhi (11 Nov 1675)** under **Aurangzeb** (*Hind di Chadar*); Bhai Mati Das, Bhai Sati Das & Bhai Dayala martyred alongside; **Bhai Jaita Ji (Baba Jiwan Singh)** brought Sis to Anandpur Sahib; **Lakhi Shah Vanjara** cremated body at Rakab Ganj. |

5. **Unit 5 — Sri Guru Gobind Singh Ji (1666–1708) & Creation of the Khalsa:**
   - **Early Life & Pre-Khalsa Battles:** Born **22 Dec 1666 at Patna Sahib (Bihar)**; established **Paonta Sahib** on River Yamuna ($52$ court poets); defeated Raja Bhim Chand of Kahlur & Fateh Shah in **Battle of Bhangani (1688)** and Mughal commander Alif Khan in **Battle of Nadaun (1691)**.
   - **Creation of the Khalsa (Vaisakhi, 30 March 1699 at Takht Sri Kesgarh Sahib, Anandpur Sahib):** Administered *Khande di Pahul* to the **Panj Pyare**:
     1. **Bhai Daya Singh** (Khatri of Lahore)
     2. **Bhai Dharam Singh** (Jat of Hastinapur, Meerut)
     3. **Bhai Himmat Singh** (Jhivar/water-carrier of Jagannath Puri)
     4. **Bhai Mohkam Singh** (Chhimba/calico-printer of Dwarka, Gujarat)
     5. **Bhai Sahib Singh** (Nai/barber of Bidar, Karnataka)
     - Bestowed **Panj Kakar** (*Kesh, Kangha, Kara, Kachera, Kirpan*), title **Singh** (lion) and **Kaur** (princess), and took Pahul from the Panj Pyare himself (*"Waho Waho Gobind Singh Aape Gur Chela"*).
   - **Post-Khalsa Battles & Supreme Sacrifices (1704–1705):**
     - **Second Siege of Anandpur & Battle of Sarsa (Dec 1704):** Family separated while crossing flooded River Sarsa.
     - **Battle of Chamkaur Sahib (Dec 1704):** With just $40$ Sikhs against Mughal forces, **Elder Sahibzadas Baba Ajit Singh (17) and Baba Jujhar Singh (14)** attained heroic martyrdom.
     - **Martyrdom at Sirhind (26 Dec 1704):** **Younger Sahibzadas Baba Zorawar Singh (9) and Baba Fateh Singh (7)** were bricked alive on orders of **Wazir Khan (Nawab of Sirhind)**; **Mata Gujri Ji** breathed her last in the *Thanda Burj*; **Diwan Todar Mal** bought land for their cremation by laying gold mohurs vertically!
     - **Zafarnama (Epistle of Victory, 1705):** Written in **Persian verse at Dina Kangar** to Aurangzeb (*"Chu kar az hama heelte dar guzasht, Halal ast burdan bi-shamshir dast"*).
     - **Battle of Khidrana / Muktsar (May 1705):** The $40$ Sikhs led by **Maha Singh** and **Mai Bhago** fought Wazir Khan's army and were blessed as the **Chali Mukte (40 Liberated Ones)**.
   - **Damdama Sahib (Talwandi Sabo — "Guru ki Kashi"):** Prepared final recension of Sri Guru Granth Sahib Ji (adding Guru Tegh Bahadur Ji's Bani, scribed by **Bhai Mani Singh Ji**). At **Nanded (Hazur Sahib, Oct 1708)**, baptized **Banda Singh Bahadur** and bestowed eternal Guruship on **Sri Guru Granth Sahib Ji** (*"Sab Sikhan ko Hukam Hai Guru Maneyo Granth"*).

---

### [Level I: Intermediate — Part 1 Contd: Banda Singh Bahadur, Misls, Maharaja Ranjit Singh, Anglo-Sikh Wars & Freedom Struggle (Units 6 to 9)]
1. **Unit 6 — Baba Banda Singh Bahadur (1670–1716), Dal Khalsa & The 12 Sikh Misls:**
   - **Banda Singh Bahadur** (born **Lachhman Dev** at Rajouri, J&K; ascetic **Madho Das Bairagi** at Nanded): Baptized by Guru Gobind Singh Ji (1708) and sent to Punjab with $5$ arrows and a *Hukamnama*.
   - **Conquests:** Captured Sonepat, Kaithal, **Samana (Nov 1709)**, Sadhaura, and defeated & killed **Wazir Khan in the Battle of Chappar Chiri (12 May 1710)** $\\to$ conquered **Sirhind**.
   - **First Sovereign Sikh State:** Established capital at **Lohgarh (Mukhlisgarh)**; struck coins in the name of **Guru Nanak–Guru Gobind Singh** and issued official seal; **ABOLISHED the Mughal Zamindari System**, making actual cultivators (tillers) owners of the land! Captured after the $8$-month **Siege of Gurdas Nangal (Dec 1715)** and martyred with his $4$-year-old son **Ajai Singh** at Mehrauli, Delhi (**9 June 1716**) under Emperor **Farrukhsiyar**.
   - **Persecution & Holocausts:** **Bhai Mani Singh** martyred (1734), **Bhai Taru Singh** (1745); **Chhota Ghallughara (1746)** at Kahnuwan under Yahya Khan & Lakhpat Rai; **Vadda Ghallughara (5 Feb 1762)** at Kup Rahira (Malerkotla) against **Ahmad Shah Abdali**.
   - **Dal Khalsa (Vaisakhi 1748 at Amritsar):** Founded by **Nawab Kapur Singh** under supreme command of **Sultan-ul-Qaum Jassa Singh Ahluwalia**; organized into **12 Sikh Misls** (*Gurmata* & *Rakhi* system):
     1. **Sukerchakia** (Charhat Singh, Maha Singh, **Maharaja Ranjit Singh** — Gujranwala)
     2. **Ahluwalia** (**Jassa Singh Ahluwalia** — Kapurthala)
     3. **Bhangi** (Hari Singh Bhangi — Amritsar & Lahore)
     4. **Ramgarhia** (**Jassa Singh Ramgarhia**)
     5. **Kanheya** (Jai Singh Kanheya & **Sada Kaur** — Batala)
     6. **Phulkian** (Chaudhary Phul — Patiala, Nabha, Jind; *only Misl south of Sutlej (Cis-Sutlej), not part of Dal Khalsa*)
     7. **Singhpuria / Faizullapuria** (**Nawab Kapur Singh**)
     8. **Nishanwalia**, 9. **Karorsinghia**, 10. **Dallewalia** (Tara Singh Ghaiba), 11. **Nakai** (Heera Singh — Baharwal), 12. **Shaheedan** (**Baba Deep Singh Ji** — Damdama Sahib).

2. **Unit 7 — Maharaja Ranjit Singh (1780–1839) — "Sher-e-Punjab":**
   - Born **13 Nov 1780 at Gujranwala** to **Maha Singh** (Sukerchakia Misl) and **Raj Kaur**.
   - **Key Conquests & Treaties:**
     - **Capture of Lahore:** **7 July 1799** (from Bhangi Sardars; made Lahore political capital; crowned Maharaja on Vaisakhi 1801 by Baba Sahib Singh Bedi; struck **Nanakshahi coins**).
     - **Capture of Amritsar:** **1805** (acquired *Zamzama* gun).
     - **Treaty of Amritsar:** **25 April 1809** signed with British envoy **Charles T. Metcalfe** (under Governor-General **Lord Minto I**) fixing **River Sutlej** as the permanent eastern boundary!
     - **Major Conquests:** **Multan (1818 — Muzaffar Khan)**, **Kashmir (1819 — Jabbar Khan)**, **Peshawar (1834 — Hari Singh Nalwa)**; **Battle of Jamrud (April 1837 — martyrdom of General Hari Singh Nalwa)**; **Tripartite Treaty (June 1838)** between Ranjit Singh, Lord Auckland, and Shah Shuja.
   - **Administration (*Sarkar-i-Khalsa*):** Divided empire into $4$ *Subas* (**Lahore, Multan, Kashmir, Peshawar**); Land revenue (*Batai* & *Kankut*); Prime Minister **Raja Dhian Singh Dogra**, Foreign Minister **Faqir Azizuddin**, Finance Minister **Diwan Dina Nath**; modernized army **Fauj-i-Ain** & **Fauj-i-Khas** trained by European generals **Jean-François Allard** (cavalry), **Jean-Baptiste Ventura** (infantry), **Paolo Avitabile**, and **Claude Auguste Court** (artillery). Passed away on **27 June 1839**.

3. **Unit 8 — First & Second Anglo-Sikh Wars & Annexation of Punjab (1845–1849):**
   | War & Governor-General | 4 / 4 Chronological Battles | Resulting Treaties & Key Martyrs / Leaders |
   |---|---|---|
   | **First Anglo-Sikh War (1845–1846)**<br>GG: **Lord Hardinge**<br>Commander: **Sir Hugh Gough** | 1. **Mudki** (18 Dec 1845)<br>2. **Ferozeshah** (21 Dec 1845)<br>3. **Baddowal & Aliwal** (Jan 1846)<br>4. **Sobraon** (10 Feb 1846) | **Sham Singh Attariwala** fought heroically to martyrdom at **Sobraon** (betrayal of Lal Singh & Tej Singh).<br>• **Treaty of Lahore (9 March 1846):** Jalandhar Doab annexed; Kashmir sold to Gulab Singh.<br>• **Treaty of Bhairowal (16 Dec 1846):** Maharani Jind Kaur removed; British Resident **Henry Lawrence** made ruler during minority of **Maharaja Duleep Singh**. |
   | **Second Anglo-Sikh War (1848–1849)**<br>GG: **Lord Dalhousie**<br>Commander: **Lord Hugh Gough** | 1. **Ramnagar** (22 Nov 1848)<br>2. **Chillianwala** (13 Jan 1849 — Sher Singh Attariwala)<br>3. **Multan** (Jan 1849 — **Diwan Mulraj**)<br>4. **Gujrat** (21 Feb 1849 — **"Battle of Guns"**) | **Annexation of Punjab on 29 March 1849** by **Lord Dalhousie**! **Maharaja Duleep Singh** (last Sikh ruler) pensioned off to England & **Koh-i-Noor diamond** taken for Queen Victoria; **Board of Administration (1849–53)** formed under **Henry Lawrence, John Lawrence & Charles Mansel**. |

4. **Unit 9 — Punjab's Contribution to the Freedom Struggle:**
   - **Kuka / Namdhari Movement:** Founded by **Baba Balak Singh** (Hazro) and led by **Satguru Ram Singh Ji** on **Vaisakhi 1857 at Bhaini Sahib (Ludhiana)** — **first movement to practice Swadeshi, non-cooperation & boycott of British goods/courts/post**! **66 Kukas blown from cannons at Malerkotla (17–18 Jan 1872)**; Satguru Ram Singh exiled to Rangoon (Burma).
   - **Singh Sabha Movement:** **Amritsar Singh Sabha (1873)** (Thakur Singh Sandhawalia, Giani Gian Singh) & **Lahore Singh Sabha (1879)** (Prof. Gurmukh Singh); **Khalsa College Amritsar founded in 1892**; **Chief Khalsa Diwan (1902)**.
   - **Pagri Sambhal Jatta (1907):** Led by **Sardar Ajit Singh** (uncle of Bhagat Singh) & **Lala Lajpat Rai** against Colonisation Bill; song written by **Banke Dayal**.
   - **Ghadar Movement (1913, San Francisco — Yugantar Ashram):** President **Baba Sohan Singh Bhakna**, General Secretary **Lala Hardayal**, **Kartar Singh Sarabha** (martyred age $19$, 16 Nov 1915).
   - **Komagata Maru Incident (1914):** Japanese steamship *Guru Nanak Jahaz* chartered by **Baba Gurdit Singh Sarhali** ($376$ passengers turned back from Vancouver $\\to$ **Budge Budge Ghat** firing, 29 Sept 1914).
   - **Jallianwala Bagh Massacre (Vaisakhi, 13 April 1919, Amritsar):** Protesting arrest of **Dr. Saifuddin Kitchlew & Dr. Satyapal** under Rowlatt Act; firing ordered by **Brigadier-General Reginald Dyer** under Lt. Governor **Michael O'Dwyer** (**Hunter Commission** appointed; **Shaheed Udham Singh** assassinated Michael O'Dwyer at Caxton Hall, London on **13 March 1940**).
   - **Gurdwara Reform / Akali Movement (1920–1925):** **SGPC founded (15 Nov 1920)** & **Shiromani Akali Dal (14 Dec 1920)**; **Nankana Sahib Saka (20 Feb 1921 — Bhai Lachhman Singh Dharowali, against Mahant Narain Das)**, Keys Morcha (Baba Kharak Singh), **Guru ka Bagh Morcha (1922)**, **Panja Sahib Saka (1922 — Bhai Karam Singh & Bhai Partap Singh)**, **Jaito Morcha (1923–24)** $\\to$ **Sikh Gurdwaras Act passed in July 1925**.
   - **Babbar Akali Movement (1921):** Led by **Kishan Singh Gargaj** & Master Mota Singh.
   - **Shaheed Bhagat Singh (1907–1931):** Founded **Naujawan Bharat Sabha (March 1926, Lahore)**; co-founded **HSRA (1928, Ferozeshah Kotla)**; avenged Lala Lajpat Rai's death (Saunders, Dec 1928); threw Central Assembly bomb with Batukeshwar Dutt (8 April 1929); **Martyred on 23 March 1931** in Lahore Central Jail with **Sukhdev and Rajguru**.
   - **Punjab Riyasati Praja Mandal (1928, Mansa):** President **Sewa Singh Thikriwala** (championed democracy in princely states).

---

### [Level A: Advanced — Part 2: Complete Civics (7 Units), Geography (8 Units) & Economics (4 Units)]
1. **Civics & Indian Constitution (7 Archival Units):**
   - **Preamble (42nd Amendment 1976):** Added ***Socialist, Secular, and Integrity*** (only time Preamble was amended). Constitution adopted **26 Nov 1949**, enforced **26 Jan 1950** (**Dr. B.R. Ambedkar** = Chairman of Drafting Committee; **Dr. Rajendra Prasad** = President of Constituent Assembly).
   - **Fundamental Rights (Part III, Art. 12–35, borrowed from USA — 6 Rights):** Equality (14–18; **Art. 17 = Abolition of Untouchability**), Freedom (19–22; **Art. 21A = Right to Education 6–14 yrs, 86th Amendment 2002**), Against Exploitation (23–24), Religion (25–28), Cultural/Educational (29–30), **Constitutional Remedies (Art. 32 — "Heart and Soul of the Constitution" by Ambedkar, 5 Writs)**. *(Right to Property removed by **44th Amendment 1978** $\\to$ Legal Right under Art. 300A)*.
   - **DPSP (Part IV, Art. 36–51, Ireland)** & **Fundamental Duties (Part IVA, Art. 51A, USSR — Swaran Singh Committee, 42nd Amendment 1976 added 10 duties; 86th Amendment 2002 added 11th duty)**.
   - **Union & Punjab State Legislature Numbers (Exam Favourite!):**
     | Body / Office | Key Constitutional Articles & Minimum Age | Punjab Specific Seats / Facts |
     |---|---|---|
     | **President / Governor** | Art. 52 (President), Art. 153 (Governor); Min Age $= \\mathbf{35\\text{ yrs}}$ | First Governor of Punjab (1947): **Sir Chandulal Madhavlal Trivedi** |
     | **Rajya Sabha (Upper House)** | Art. 80; Permanent house ($1/3$ retire every $2$ yrs); Min Age $= \\mathbf{30\\text{ yrs}}$ | **Punjab sends $7$ MPs to Rajya Sabha** |
     | **Lok Sabha (Lower House)** | Art. 81; Money Bill (Art. 110) only in Lok Sabha; Min Age $= \\mathbf{25\\text{ yrs}}$ | **Punjab sends $13$ MPs to Lok Sabha** |
     | **State Legislative Assembly (Vidhan Sabha)** | Art. 170; Unicameral in Punjab (Legislative Council abolished 1970); Min Age $= \\mathbf{25\\text{ yrs}}$ | **Punjab Vidhan Sabha has $117$ MLA seats** (1st CM: **Dr. Gopi Chand Bhargava**) |
     | **Panchayati Raj & Municipalities** | **73rd Amendment (1992 — Part IX, 11th Schedule, 29 subjects)** & **74th Amendment (Part IXA, 12th Schedule, 18 subjects)**; Min Age $= \\mathbf{21\\text{ yrs}}$ | $3$-tier: Gram Panchayat $\\to$ Panchayat Samiti $\\to$ Zila Parishad (Punjab PR Act 1994: $50\\%$ reservation for women) |
   - **India's Foreign Policy & UNO:** **Panchsheel Agreement (29 April 1954 — Nehru & Zhou Enlai)**; **Non-Aligned Movement (NAM — Belgrade 1961: Nehru, Nasser, Tito, Sukarno, Nkrumah)**; **SAARC (8 Dec 1985, HQ Kathmandu, 8 members)**. **UNO Founded 24 Oct 1945** (HQ New York, $193$ members, $6$ principal organs; **International Court of Justice [ICJ] HQ is at The Hague, Netherlands**; **5 Permanent Veto Members of UNSC (P5):** **USA, UK, France, Russia, China**).

2. **Geography of India & Punjab (8 Archival Units):**
   - **India's Extent:** Mainland $8^\\circ 4'\\text{N to }37^\\circ 6'\\text{N}$ latitude and $68^\\circ 7'\\text{E to }97^\\circ 25'\\text{E}$ longitude; Area $= 3.28\\text{ million km}^2$ ($2.4\\%$ of world area, $7$th largest); **Tropic of Cancer ($23^\\circ 30'\\text{N}$)** passes through $8$ states; **Standard Meridian ($82^\\circ 30'\\text{E}$, Mirzapur UP)** is **$5\\text{ hours }30\\text{ minutes}$ ahead of GMT**.
   - **Punjab Geography (Post-1 Nov 1966 Reorganisation on Shah Commission recommendation):**
     - **Area:** $50,362\\text{ km}^2$ ($1.53\\%$ of India's area); Latitude $29^\\circ 30'\\text{N–}32^\\circ 32'\\text{N}$, Longitude $73^\\circ 55'\\text{E–}76^\\circ 50'\\text{E}$.
     - **23 Districts in 5 Divisions** (Faridkot, Ferozepur, Jalandhar, Patiala, Ropar; **23rd District = Malerkotla [2021]** carved out of Sangrur): **Majha (4 districts:** Amritsar, Gurdaspur, Tarn Taran, Pathankot), **Doaba (4 districts:** Jalandhar, Hoshiarpur, Kapurthala, SBS Nagar), **Malwa (15 districts)**.
     - **3 Perennial Rivers & Dams:** **Sutlej** (originates Rakshastal near Mansarovar; enters Punjab at Nangal; **Bhakra-Nangal Dam**), **Beas** (originates Beas Kund, Rohtang Pass; **Pong Dam / Maharana Pratap Sagar**; meets Sutlej at **Harike Pattan [Tarn Taran]** from where **Indira Gandhi Canal** originates!), **Ravi** (originates Rohtang Pass; **Ranjit Sagar Dam / Thein Dam** at Pathankot); seasonal river **Ghaggar** flows through southern Malwa.
     - **6 Ramsar Wetlands of Punjab:** **Harike, Kanjli (Kapurthala), Ropar, Keshopur-Miani (Gurdaspur), Nangal, and Beas Conservation Reserve** (State Bird: **Baaz / Northern Goshawk**; State Animal: **Blackbuck / Kala Hiran**; State Tree: **Tahli / Sheesham**; State Aquatic Animal: **Indus River Dolphin**).

3. **Economics (4 Archival Units):**
   - **Three Sectors of Economy:** **Primary Sector** (Agriculture, dairy, forestry, mining — largest employer in India), **Secondary Sector** (Manufacturing & industry), **Tertiary / Service Sector** (Banking, transport, IT, education — **largest contributor to India's GDP!**). **Disguised Unemployment (ਛੁਪੀ ਹੋਈ ਬੇਰੁਜ਼ਗਾਰੀ)** is characteristic of agriculture (marginal productivity of extra labour $= 0$).
   - **Green Revolution in Punjab (1966–67):** Introduced High-Yielding Variety (HYV) dwarf Mexican wheat seeds (*Lerma Rojo, Sonora-64*), chemical fertilizers & tubewell irrigation; spearheaded by **Punjab Agricultural University (PAU), Ludhiana (founded 1962)**, **Dr. M.S. Swaminathan** (Father of Green Revolution in India), and **Norman Borlaug** (World).
   - **Money, Banking & Planning:** **Reserve Bank of India (RBI)** established **1 April 1935** (RBI Act 1934, nationalized **1 Jan 1949**, HQ Mumbai) — issues all currency notes except **Re 1 note & coins (issued by Ministry of Finance, signed by Finance Secretary)**; controls credit via Repo Rate, CRR, SLR. **Planning Commission (15 March 1950)** replaced by **NITI Aayog on 1 January 2015** (Chairperson: Prime Minister). **Food Security:** Buffer stock procured by **FCI (1965)** at **Minimum Support Price (MSP)** recommended by **CACP** and distributed via **PDS** (National Food Security Act 2013).`,
            pa: `### [Level B: Basic — ਸਮਾਜਿਕ ਸਿੱਖਿਆ ਦੇ ਸਾਰੇ 28 ਅਧਿਕਾਰਤ ਯੂਨਿਟ ਅਤੇ ਭਾਗ 1: ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ (Units 1–5)]
1. **ETT Paper B ਸਮਾਜਿਕ ਸਿੱਖਿਆ ਦਾ ਅਸਲ ਬਲੂਪ੍ਰਿੰਟ (28 ਯੂਨਿਟ = 40 ਅੰਕ):**
   - ਦਫ਼ਤਰ ਡਾਇਰੈਕਟਰ ਸਿੱਖਿਆ ਭਰਤੀ ਡਾਇਰੈਕਟੋਰੇਟ (ERB 5994) ਦੇ ਅਧਿਕਾਰਤ ਪੰਜਾਬੀ ਨੋਟੀਫਿਕੇਸ਼ਨ ਦੇ ਪੰਨਾ 2–3 ਅਨੁਸਾਰ ਸਮਾਜਿਕ ਸਿੱਖਿਆ ਵਿੱਚ ਕੁੱਲ **28 ਯੂਨਿਟ** ਹਨ: **ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ (9 ਯੂਨਿਟ) + ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ (7 ਯੂਨਿਟ) + ਭੂਗੋਲ (8 ਯੂਨਿਟ) + ਅਰਥ ਸ਼ਾਸਤਰ (4 ਯੂਨਿਟ)**।

2. **ਯੂਨਿਟ 1 ਅਤੇ 2 — ਪੰਜਾਬ ਦੀਆਂ ਭੂਗੋਲਿਕ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਤੇ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਤੋਂ ਪਹਿਲਾਂ ਦਾ ਪੰਜਾਬ:**
   - **ਪੰਜਾਬ ਦੇ 5 ਦੁਆਬੇ (ਅਕਬਰ ਦੇ ਸਮੇਂ ਰਾਜਾ ਟੋਡਰ ਮੱਲ ਦੁਆਰਾ ਨਾਮਕਰਨ):**
     1. **ਬਿਸਤ ਜਲੰਧਰ ਦੁਆਬ:** ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਵਿਚਕਾਰ (ਜਲੰਧਰ, ਹੁਸ਼ਿਆਰਪੁਰ, ਕਪੂਰਥਲਾ, ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ ਨਗਰ)।
     2. **ਬਾਰੀ ਦੁਆਬ (ਮਾਝਾ):** ਬਿਆਸ ਅਤੇ ਰਾਵੀ ਵਿਚਕਾਰ (ਅੰਮ੍ਰਿਤਸਰ, ਗੁਰਦਾਸਪੁਰ, ਤਰਨਤਾਰਨ, ਪਠਾਨਕੋਟ, ਲਾਹੌਰ)।
     3. **ਰਚਨਾ ਦੁਆਬ:** ਰਾਵੀ ਅਤੇ ਚਨਾਬ ਵਿਚਕਾਰ।
     4. **ਚੱਜ ਦੁਆਬ:** ਚਨਾਬ ਅਤੇ ਜਿਹਲਮ ਵਿਚਕਾਰ।
     5. **ਸਿੰਧ ਸਾਗਰ ਦੁਆਬ:** ਜਿਹਲਮ/ਚਨਾਬ ਅਤੇ ਸਿੰਧ ਦਰਿਆ ਵਿਚਕਾਰ।
   - **ਲੋਧੀ ਕਾਲ:** ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਸਮੇਂ ਦਿੱਲੀ ਉੱਤੇ **ਬਹਿਲੋਲ ਲੋਧੀ, ਸਿਕੰਦਰ ਲੋਧੀ ਅਤੇ ਇਬਰਾਹੀਮ ਲੋਧੀ** ਦਾ ਰਾਜ ਸੀ ਅਤੇ ਲਾਹੌਰ ਦਾ ਸੂਬੇਦਾਰ **ਦੌਲਤ ਖਾਂ ਲੋਧੀ** ਸੀ। **ਬਾਬਰ** ਨੇ ਪੰਜਾਬ ਉੱਤੇ **5 ਹਮਲੇ (1519–1526)** ਕੀਤੇ ਅਤੇ **ਪਾਣੀਪਤ ਦੀ ਪਹਿਲੀ ਲੜਾਈ (21 ਅਪ੍ਰੈਲ 1526)** ਵਿੱਚ ਇਬਰਾਹੀਮ ਲੋਧੀ ਨੂੰ ਹਰਾਇਆ।

3. **ਯੂਨਿਟ 3 — ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (1469–1539):**
   - **ਜਨਮ:** **15 ਅਪ੍ਰੈਲ 1469** ਨੂੰ **ਰਾਇ ਭੋਇ ਦੀ ਤਲਵੰਡੀ (ਨਨਕਾਣਾ ਸਾਹਿਬ)** ਵਿਖੇ ਪਿਤਾ **ਮਹਿਤਾ ਕਾਲੂ ਜੀ** ਅਤੇ ਮਾਤਾ **ਤ੍ਰਿਪਤਾ ਜੀ** ਦੇ ਘਰ (ਭੈਣ: ਬੇਬੇ ਨਾਨਕੀ ਜੀ; ਪਤਨੀ: ਮਾਤਾ ਸੁਲੱਖਣੀ ਜੀ; ਸਪੁੱਤਰ: ਬਾਬਾ ਸ੍ਰੀ ਚੰਦ ਤੇ ਬਾਬਾ ਲਖਮੀ ਦਾਸ)।
   - **ਸੁਲਤਾਨਪੁਰ ਲੋਧੀ:** ਦੌਲਤ ਖਾਂ ਲੋਧੀ ਦੇ **ਮੋਦੀਖਾਨੇ** ਵਿੱਚ ਨੌਕਰੀ ਕੀਤੀ; **ਵੇਈਂ ਨਦੀ** ਵਿੱਚੋਂ ਗਿਆਨ ਪ੍ਰਾਪਤੀ ਉਪਰੰਤ ***"ਨਾ ਕੋਇ ਹਿੰਦੂ ਨਾ ਕੋਇ ਮੁਸਲਮਾਨ"*** ਦਾ ਉਪਦੇਸ਼ ਦਿੱਤਾ।
   - **ਚਾਰ ਉਦਾਸੀਆਂ** (**ਭਾਈ ਮਰਦਾਨਾ ਜੀ** ਸਮੇਤ): ਪਹਿਲੀ (ਪੂਰਬ — ਸੈਦਪੁਰ, ਹਰਿਦੁਆਰ, ਕਾਮਰੂਪ, ਜਗਨਨਾਥ ਪੁਰੀ), ਦੂਜੀ (ਦੱਖਣ — ਸ੍ਰੀਲੰਕਾ), ਤੀਜੀ (ਉੱਤਰ — ਕਸ਼ਮੀਰ, ਸੁਮੇਰ ਪਰਬਤ, ਹਸਨ ਅਬਦਾਲ/ਪੰਜਾ ਸਾਹਿਬ), ਚੌਥੀ (ਪੱਛਮ — ਮੱਕਾ, ਮਦੀਨਾ, ਬਗਦਾਦ)।
   - **ਕਰਤਾਰਪੁਰ ਸਾਹਿਬ (1521, ਰਾਵੀ ਕੰਢੇ):** **ਸੰਗਤ, ਪੰਗਤ (ਲੰਗਰ) ਅਤੇ ਧਰਮਸਾਲ** ਦੀ ਸਥਾਪਨਾ; **ਕਿਰਤ ਕਰੋ, ਨਾਮ ਜਪੋ, ਵੰਡ ਛਕੋ** ਦਾ ਸਿਧਾਂਤ; ਪ੍ਰਮੁੱਖ ਬਾਣੀਆਂ: *ਜਪੁਜੀ ਸਾਹਿਬ, ਆਸਾ ਦੀ ਵਾਰ, ਸਿੱਧ ਗੋਸ਼ਟਿ, ਦੱਖਣੀ ਓਅੰਕਾਰ, ਪੱਟੀ, ਬਾਰਹ ਮਾਹਾ ਤੁਖਾਰੀ, ਬਾਬਰਵਾਣੀ* (19 ਰਾਗਾਂ ਵਿੱਚ 974 ਸ਼ਬਦ)।

4. **ਯੂਨਿਟ 4 — ਦੂਜੇ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਤੋਂ ਨੌਵੇਂ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ ਤੱਕ:**
   - **2. ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ (ਭਾਈ ਲਹਿਣਾ ਜੀ, 1539–1552):** **ਖਡੂਰ ਸਾਹਿਬ**; **ਗੁਰਮੁਖੀ ਲਿਪੀ** ਦਾ ਮਿਆਰੀਕਰਨ; **ਮੱਲ ਅਖਾੜਾ** ਪ੍ਰਥਾ।
   - **3. ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (1552–1574):** **ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ (84 ਪੌੜੀਆਂ ਵਾਲੀ ਬਾਉਲੀ)**; **22 ਮੰਜੀਆਂ** ਦੀ ਸਥਾਪਨਾ; *ਆਨੰਦ ਸਾਹਿਬ* (40 ਪੌੜੀਆਂ, ਰਾਗ ਰਾਮਕਲੀ); ਸਤੀ ਅਤੇ ਪਰਦਾ ਪ੍ਰਥਾ ਦਾ ਵਿਰੋਧ।
   - **4. ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (ਭਾਈ ਜੇਠਾ ਜੀ, 1574–1581):** **ਰਾਮਦਾਸਪੁਰ / ਅੰਮ੍ਰਿਤਸਰ (1577)** ਵਸਾਇਆ; **ਮਸੰਦ ਪ੍ਰਥਾ**; *ਚਾਰ ਲਾਵਾਂ* (ਰਾਗ ਸੂਹੀ)।
   - **5. ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (1581–1606):** **ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ** ਦਾ ਨਿਰਮਾਣ (ਨੀਂਹ ਪੱਥਰ ਸੂਫ਼ੀ ਸੰਤ **ਸਾਈਂ ਮੀਆਂ ਮੀਰ ਜੀ, 1588**); **ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦਾ ਸੰਪਾਦਨ (1604 — ਲਿਖਾਰੀ ਭਾਈ ਗੁਰਦਾਸ ਜੀ, ਪਹਿਲੇ ਗ੍ਰੰਥੀ ਬਾਬਾ ਬੁੱਢਾ ਜੀ)**; ਤਰਨਤਾਰਨ, ਕਰਤਾਰਪੁਰ (ਜਲੰਧਰ) ਤੇ ਸ੍ਰੀ ਹਰਗੋਬਿੰਦਪੁਰ ਵਸਾਏ; **ਦਸਵੰਧ ਪ੍ਰਥਾ**; *ਸੁਖਮਨੀ ਸਾਹਿਬ*; ਜਹਾਂਗੀਰ ਦੇ ਹੁਕਮ ਨਾਲ **ਲਾਹੌਰ ਵਿਖੇ ਸ਼ਹੀਦੀ (30 ਮਈ 1606 — ਸ਼ਹੀਦਾਂ ਦੇ ਸਰਤਾਜ)**।
   - **6. ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ (1606–1644):** **ਮੀਰੀ ਅਤੇ ਪੀਰੀ** ਦੀਆਂ ਦੋ ਤਲਵਾਰਾਂ; **ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ (1606)** ਅਤੇ ਲੋਹਗੜ੍ਹ ਕਿਲ੍ਹੇ ਦਾ ਨਿਰਮਾਣ; ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ ਤੋਂ 52 ਰਾਜਿਆਂ ਦੀ ਰਿਹਾਈ (**ਬੰਦੀ ਛੋੜ ਦਾਤਾ**)।
   - **7. ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਰਾਇ ਜੀ (1644–1661):** ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਦਵਾਖਾਨਾ। **8. ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਕ੍ਰਿਸ਼ਨ ਜੀ (1661–1664):** **ਬਾਲਾ ਪੀਰ** (ਦਿੱਲੀ ਬੰਗਲਾ ਸਾਹਿਬ ਵਿਖੇ ਚੇਚਕ ਪੀੜਤਾਂ ਦੀ ਸੇਵਾ)।
   - **9. ਸ੍ਰੀ ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ (1664–1675):** **ਮੱਖਣ ਸ਼ਾਹ ਲੁਬਾਣਾ** ਦੁਆਰਾ ਬਕਾਲੇ ਵਿਖੇ ਪ੍ਰਗਟ; **ਚੱਕ ਨਾਨਕੀ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ, 1665)** ਵਸਾਇਆ; ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ (ਪੰਡਿਤ ਕਿਰਪਾ ਰਾਮ) ਦੀ ਰੱਖਿਆ ਲਈ ਔਰੰਗਜ਼ੇਬ ਦੇ ਹੁਕਮ ਤੇ **11 ਨਵੰਬਰ 1675 ਨੂੰ ਚਾਂਦਨੀ ਚੌਕ, ਦਿੱਲੀ ਵਿਖੇ ਸ਼ਹੀਦੀ (*ਹਿੰਦ ਦੀ ਚਾਦਰ*)**।

5. **ਯੂਨਿਟ 5 — ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (1666–1708) ਅਤੇ ਖਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ:**
   - ਜਨਮ **22 ਦਸੰਬਰ 1666 (ਪਟਨਾ ਸਾਹਿਬ)**; **ਭੰਗਾਣੀ ਦੀ ਲੜਾਈ (1688)** ਅਤੇ **ਨਦੌਣ ਦੀ ਲੜਾਈ (1691)**; **ਵਿਸਾਖੀ (30 ਮਾਰਚ 1699) ਨੂੰ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ) ਵਿਖੇ ਖਾਲਸਾ ਪੰਥ ਦੀ ਸਾਜਨਾ** (ਪੰਜ ਪਿਆਰੇ: ਭਾਈ ਦਇਆ ਸਿੰਘ, ਭਾਈ ਧਰਮ ਸਿੰਘ, ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ, ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ, ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ)।
   - **ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਲੜਾਈ (ਦਸੰਬਰ 1704):** ਵੱਡੇ ਸਾਹਿਬਜ਼ਾਦੇ **ਬਾਬਾ ਅਜੀਤ ਸਿੰਘ ਅਤੇ ਬਾਬਾ ਜੁਝਾਰ ਸਿੰਘ** ਦੀ ਸ਼ਹੀਦੀ; **ਸਰਹਿੰਦ ਵਿਖੇ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦੇ ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਅਤੇ ਬਾਬਾ ਫ਼ਤਹਿ ਸਿੰਘ** ਨੂੰ ਵਜ਼ੀਰ ਖਾਂ ਦੇ ਹੁਕਮ ਨਾਲ ਨੀਂਹਾਂ ਵਿੱਚ ਚਿਣਵਾ ਕੇ ਸ਼ਹੀਦ ਕੀਤਾ ਗਿਆ।
   - **ਦੀਨਾ ਕਾਂਗੜ ਵਿਖੇ ਫ਼ਾਰਸੀ ਵਿੱਚ 'ਜ਼ਫ਼ਰਨਾਮਾ'** ਲਿਖਿਆ; **ਖਿਦਰਾਣੇ ਦੀ ਢਾਬ / ਮੁਕਤਸਰ ਦੀ ਲੜਾਈ (1705 — 40 ਮੁਕਤੇ ਅਤੇ ਮਾਈ ਭਾਗੋ)**; **ਦਮਦਮਾ ਸਾਹਿਬ (ਤਲਵੰਡੀ ਸਾਬੋ — ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ)**; ਨਾਂਦੇੜ (1708) ਵਿਖੇ **ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਜੁਗੋ-ਜੁਗ ਅਟੱਲ ਗੁਰਗੱਦੀ** ਸੌਂਪੀ।

---

### [Level I: Intermediate — ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ, 12 ਮਿਸਲਾਂ, ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ, ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਅਤੇ ਆਜ਼ਾਦੀ ਸੰਗਰਾਮ (Units 6–9)]
1. **ਯੂਨਿਟ 6 — ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ (1670–1716) ਅਤੇ 12 ਸਿੱਖ ਮਿਸਲਾਂ:**
   - ਬਚਪਨ ਦਾ ਨਾਂ **ਲਛਮਣ ਦੇਵ** (ਮਾਧੋ ਦਾਸ ਬੈਰਾਗੀ); **ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ (ਮਈ 1710)** ਵਿੱਚ ਸਰਹਿੰਦ ਦੇ ਸੂਬੇਦਾਰ **ਵਜ਼ੀਰ ਖਾਂ** ਨੂੰ ਮਾਰ ਕੇ ਪਹਿਲਾ ਸੁਤੰਤਰ ਸਿੱਖ ਰਾਜ ਸਥਾਪਿਤ ਕੀਤਾ; ਰਾਜਧਾਨੀ **ਲੋਹਗੜ੍ਹ (ਮੁਖਲਿਸਗੜ੍ਹ)**; ਗੁਰੂ ਨਾਨਕ-ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਦੇ ਨਾਂ ਤੇ ਸਿੱਕੇ ਚਲਾਏ ਅਤੇ **ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਖਤਮ ਕਰਕੇ ਕਿਸਾਨਾਂ ਨੂੰ ਜ਼ਮੀਨ ਦੇ ਮਾਲਕ ਬਣਾਇਆ**; **ਗੁਰਦਾਸ ਨੰਗਲ ਦੀ ਗੜ੍ਹੀ** ਤੋਂ ਗ੍ਰਿਫ਼ਤਾਰੀ ਉਪਰੰਤ **ਜੂਨ 1716 ਵਿੱਚ ਦਿੱਲੀ ਵਿਖੇ ਸ਼ਹੀਦੀ**।
   - **ਦਲ ਖਾਲਸਾ (1748 — ਨਵਾਬ ਕਪੂਰ ਸਿੰਘ ਅਤੇ ਜੱਸਾ ਸਿੰਘ ਆਹਲੂਵਾਲੀਆ)** ਅਤੇ **12 ਸਿੱਖ ਮਿਸਲਾਂ** (ਸ਼ੁੱਕਰਚੱਕੀਆ, ਆਹਲੂਵਾਲੀਆ, ਭੰਗੀ, ਰਾਮਗੜ੍ਹੀਆ, ਕਨ੍ਹਈਆ, ਫੂਲਕੀਆਂ, ਸਿੰਘਪੁਰੀਆ, ਨਿਸ਼ਾਨਵਾਲੀਆ, ਕਰੋੜਸਿੰਘੀਆ, ਡੱਲੇਵਾਲੀਆ, ਨਕਈ, ਸ਼ਹੀਦਾਂ)।

2. **ਯੂਨਿਟ 7 ਅਤੇ 8 — ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (1780–1839) ਅਤੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–1849):**
   - **ਸ਼ੁੱਕਰਚੱਕੀਆ ਮਿਸਲ**; **7 ਜੁਲਾਈ 1799 ਨੂੰ ਲਾਹੌਰ ਜਿੱਤਿਆ**; **ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (25 ਅਪ੍ਰੈਲ 1809 — ਚਾਰਲਸ ਮੈਟਕਾਫ਼ ਨਾਲ)** ਜਿਸ ਨਾਲ ਸਤਲੁਜ ਦਰਿਆ ਸਰਹੱਦ ਬਣਿਆ; ਮੁਲਤਾਨ (1818), ਕਸ਼ਮੀਰ (1819), ਪਿਸ਼ਾਵਰ (1834) ਜਿੱਤੇ।
   - **ਪਹਿਲਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1845–46, ਲਾਰਡ ਹਾਰਡਿੰਗ):** ਮੁਦਕੀ, ਫਿਰੋਜ਼ਸ਼ਾਹ, ਬੱਦੋਵਾਲ, ਅਲੀਵਾਲ, **ਸਭਰਾਵਾਂ (10 ਫਰਵਰੀ 1846 — ਸ਼ਾਮ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ ਦੀ ਸ਼ਹੀਦੀ)** $\\to$ ਲਾਹੌਰ ਅਤੇ ਭੈਰੋਵਾਲ ਦੀਆਂ ਸੰਧੀਆਂ (1846)।
   - **ਦੂਜਾ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ (1848–49, ਲਾਰਡ ਡਲਹੌਜ਼ੀ):** ਰਾਮਨਗਰ, **ਚਿੱਲੀਆਂਵਾਲਾ (13 ਜਨਵਰੀ 1849)**, ਮੁਲਤਾਨ (ਦੀਵਾਨ ਮੂਲਰਾਜ), **ਗੁਜਰਾਤ ("ਤੋਪਾਂ ਦੀ ਲੜਾਈ", 21 ਫਰਵਰੀ 1849)** $\\to$ **29 ਮਾਰਚ 1849 ਨੂੰ ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਦੁਆਰਾ ਪੰਜਾਬ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਮਿਲਾ ਲਿਆ ਗਿਆ** (ਆਖਰੀ ਸਿੱਖ ਮਹਾਰਾਜਾ ਦਲੀਪ ਸਿੰਘ)।

3. **ਯੂਨਿਟ 9 — ਆਜ਼ਾਦੀ ਸੰਗਰਾਮ ਵਿੱਚ ਪੰਜਾਬ ਦਾ ਯੋਗਦਾਨ:**
   - **ਕੂਕਾ / ਨਾਮਧਾਰੀ ਲਹਿਰ (1857, ਭੈਣੀ ਸਾਹਿਬ — ਸਤਿਗੁਰੂ ਰਾਮ ਸਿੰਘ ਜੀ, ਮਲੇਰਕੋਟਲਾ ਸਾਕਾ 1872)**; **ਸਿੰਘ ਸਭਾ ਲਹਿਰ** (ਅੰਮ੍ਰਿਤਸਰ 1873, ਲਾਹੌਰ 1879); **ਪਗੜੀ ਸੰਭਾਲ ਜੱਟਾ (1907 — ਸਰਦਾਰ ਅਜੀਤ ਸਿੰਘ)**; **ਗਦਰ ਪਾਰਟੀ (1913, ਸੈਨ ਫਰਾਂਸਿਸਕੋ — ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ, ਲਾਲਾ ਹਰਦਿਆਲ, ਕਰਤਾਰ ਸਿੰਘ ਸਰਾਭਾ)**; **ਕਾਮਾਗਾਟਾਮਾਰੂ ਜਹਾਜ਼ (1914 — ਬਾਬਾ ਗੁਰਦਿੱਤ ਸਿੰਘ)**; **ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ ਸਾਕਾ (13 ਅਪ੍ਰੈਲ 1919 — ਸ਼ਹੀਦ ਊਧਮ ਸਿੰਘ ਦੁਆਰਾ 13 ਮਾਰਚ 1940 ਨੂੰ ਲੰਡਨ ਵਿੱਚ ਮਾਈਕਲ ਓਡਵਾਇਰ ਦਾ ਵਧ)**; **ਗੁਰਦੁਆਰਾ ਸੁਧਾਰ / ਅਕਾਲੀ ਲਹਿਰ (1920–25 — SGPC 1920, ਨਨਕਾਣਾ ਸਾਹਿਬ, ਗੁਰੂ ਕਾ ਬਾਗ, ਜੈਤੋ ਦਾ ਮੋਰਚਾ)**; **ਬੱਬਰ ਅਕਾਲੀ ਲਹਿਰ (ਕਿਸ਼ਨ ਸਿੰਘ ਗੜਗੱਜ)**; **ਸ਼ਹੀਦ ਭਗਤ ਸਿੰਘ (ਨੌਜਵਾਨ ਭਾਰਤ ਸਭਾ 1926, ਸ਼ਹੀਦੀ 23 ਮਾਰਚ 1931)**; **ਰਿਆਸਤੀ ਪਰਜਾ ਮੰਡਲ (1928 — ਸੇਵਾ ਸਿੰਘ ਠੀਕਰੀਵਾਲਾ)**।

---

### [Level A: Advanced — ਭਾਗ 2: ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ (7 ਯੂਨਿਟ), ਭੂਗੋਲ (8 ਯੂਨਿਟ) ਅਤੇ ਅਰਥ ਸ਼ਾਸਤਰ (4 ਯੂਨਿਟ)]
1. **ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ (Civics):**
   - **ਸੰਵਿਧਾਨ:** 26 ਨਵੰਬਰ 1949 ਨੂੰ ਅਪਣਾਇਆ, **26 ਜਨਵਰੀ 1950** ਨੂੰ ਲਾਗੂ; **42ਵੀਂ ਸੋਧ (1976)** ਰਾਹੀਂ ਪ੍ਰਸਤਾਵਨਾ ਵਿੱਚ *ਸਮਾਜਵਾਦੀ, ਧਰਮ-ਨਿਰਪੱਖ ਅਤੇ ਅਖੰਡਤਾ* ਸ਼ਬਦ ਅਤੇ ਭਾਗ IVA (ਅਨੁਛੇਦ 51A) ਵਿੱਚ ਮੌਲਿਕ ਕਰਤੱਵ ਜੋੜੇ ਗਏ (**86ਵੀਂ ਸੋਧ 2002** ਰਾਹੀਂ 11ਵਾਂ ਕਰਤੱਵ ਤੇ ਅਨੁਛੇਦ 21A ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ)।
   - **ਪੰਜਾਬ ਦੀਆਂ ਸੀਟਾਂ:** **ਵਿਧਾਨ ਸਭਾ = 117 ਸੀਟਾਂ**, **ਲੋਕ ਸਭਾ = 13 ਸੀਟਾਂ**, **ਰਾਜ ਸਭਾ = 7 ਸੀਟਾਂ**; **73ਵੀਂ ਅਤੇ 74ਵੀਂ ਸੋਧ (1992)** ਰਾਹੀਂ ਪੰਚਾਇਤੀ ਰਾਜ ਅਤੇ ਨਗਰ ਪਾਲਿਕਾਵਾਂ।
   - **UNO (24 ਅਕਤੂਬਰ 1945, ਮੁੱਖ ਦਫ਼ਤਰ ਨਿਊਯਾਰਕ):** 6 ਅੰਗ (ਅੰਤਰਰਾਸ਼ਟਰੀ ਅਦਾਲਤ ICJ ਦਾ ਮੁੱਖ ਦਫ਼ਤਰ **ਹੇਗ, ਨੀਦਰਲੈਂਡ** ਵਿੱਚ ਹੈ; ਸੁਰੱਖਿਆ ਪ੍ਰੀਸ਼ਦ ਦੇ 5 ਸਥਾਈ ਵੀਟੋ ਮੈਂਬਰ: **ਅਮਰੀਕਾ, ਬ੍ਰਿਟੇਨ, ਫਰਾਂਸ, ਰੂਸ, ਚੀਨ**)।

2. **ਭੂਗੋਲ ਅਤੇ ਅਰਥ ਸ਼ਾਸਤਰ (Geography & Economics):**
   - **ਭਾਰਤ:** $8^\\circ 4'\\text{N ਤੋਂ }37^\\circ 6'\\text{N}$, ਮਿਆਰੀ ਸਮਾਂ ਰੇਖਾ $82^\\circ 30'\\text{E}$ (GMT ਤੋਂ 5 ਘੰਟੇ 30 ਮਿੰਟ ਅੱਗੇ)।
   - **ਆਧੁਨਿਕ ਪੰਜਾਬ (1 ਨਵੰਬਰ 1966 — ਸ਼ਾਹ ਕਮਿਸ਼ਨ):** ਖੇਤਰਫਲ **$50,362\\text{ km}^2$**; **23 ਜ਼ਿਲ੍ਹੇ (5 ਡਿਵੀਜ਼ਨਾਂ; 23ਵਾਂ ਜ਼ਿਲ੍ਹਾ ਮਲੇਰਕੋਟਲਾ 2021)**: ਮਾਝਾ (4 ਜ਼ਿਲ੍ਹੇ), ਦੁਆਬਾ (4 ਜ਼ਿਲ੍ਹੇ), ਮਾਲਵਾ (15 ਜ਼ਿਲ੍ਹੇ)। **ਡੈਮ:** ਸਤਲੁਜ ਉੱਤੇ **ਭਾਖੜਾ-ਨੰਗਲ**, ਬਿਆਸ ਉੱਤੇ **ਪੌਂਗ ਡੈਮ**, ਰਾਵੀ ਉੱਤੇ **ਰਣਜੀਤ ਸਾਗਰ (ਥੀਨ) ਡੈਮ**; ਬਿਆਸ ਤੇ ਸਤਲੁਜ ਦਾ ਸੰਗਮ **ਹਰੀਕੇ ਪੱਤਣ (ਤਰਨਤਾਰਨ)**; **6 ਰਾਮਸਰ ਵੈੱਟਲੈਂਡਜ਼** (ਹਰੀਕੇ, ਕਾਂਜਲੀ, ਰੋਪੜ, ਕੇਸ਼ੋਪੁਰ-ਮਿਆਣੀ, ਨੰਗਲ, ਬਿਆਸ)।
   - **ਅਰਥ ਸ਼ਾਸਤਰ:** **ਪ੍ਰਾਇਮਰੀ ਖੇਤਰ** (ਖੇਤੀਬਾੜੀ — ਸਭ ਤੋਂ ਵੱਧ ਰੁਜ਼ਗਾਰ ਤੇ ਛੁਪੀ ਹੋਈ ਬੇਰੁਜ਼ਗਾਰੀ), **ਸੈਕੰਡਰੀ ਖੇਤਰ** (ਉਦਯੋਗ), **ਟਰਸ਼ਰੀ / ਸੇਵਾ ਖੇਤਰ** (GDP ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਯੋਗਦਾਨ); **ਹਰੀ ਕ੍ਰਾਂਤੀ** (**PAU ਲੁਧਿਆਣਾ 1962, ਡਾ. ਐਮ.ਐਸ. ਸਵਾਮੀਨਾਥਨ**); **RBI (1 ਅਪ੍ਰੈਲ 1935, ਰਾਸ਼ਟਰੀਕਰਨ 1949)**; **ਨੀਤੀ ਆਯੋਗ (1 ਜਨਵਰੀ 2015)**।`,
            hi: `### [Level B: Basic — सामाजिक अध्ययन के सभी 28 आधिकारिक यूनिट एवं भाग 1: पंजाब का इतिहास (Units 1–5)]
1. **ETT Paper B सामाजिक अध्ययन का वास्तविक ब्लूप्रिंट (28 यूनिट = 40 अंक):**
   - शिक्षा भर्ती बोर्ड (ERB 5994) की आधिकारिक पंजाबी अधिसूचना के पृष्ठ 2–3 के अनुसार सामाजिक अध्ययन में कुल **28 यूनिट** हैं: **पंजाब का इतिहास (9 यूनिट) + नागरिक शास्त्र (7 यूनिट) + भूगोल (8 यूनिट) + अर्थशास्त्र (4 यूनिट)**।

2. **यूनिट 1 और 2 — पंजाब की भौगोलिक विशेषताएँ एवं गुरु नानक देव जी से पूर्व का पंजाब:**
   - **पंजाब के 5 दोआब (अकबर के काल में राजा टोडरमल द्वारा नामकरण):**
     1. **बिस्त जालंधर दोआब:** ब्यास और सतलुज के मध्य (जालंधर, होशियारपुर, कपूरथला, शहीद भगत सिंह नगर)।
     2. **बारी दोआब (माझा):** ब्यास और रावी के मध्य (अमृतसर, गुरदासपुर, तरनतारन, पठानकोट, लाहौर)।
     3. **रचना दोआब:** रावी और चिनाब के मध्य।
     4. **चज दोआब:** चिनाब और झेलम के मध्य।
     5. **सिंध सागर दोआब:** झेलम/चिनाब और सिंधु नदी के मध्य।
   - **लोधी काल:** गुरु नानक देव जी के समय दिल्ली पर **बहलोल लोधी, सिकंदर लोधी व इब्राहिम लोधी** का शासन था और लाहौर का सूबेदार **दौलत खाँ लोधी** था। **बाबर** ने पंजाब पर **5 आक्रमण (1519–1526)** किए और **पानीपत के प्रथम युद्ध (21 अप्रैल 1526)** में इब्राहिम लोधी को हराया।

3. **यूनिट 3 — श्री गुरु नानक देव जी (1469–1539):**
   - **जन्म:** **15 अप्रैल 1469** को **राय भोए की तलवंडी (ननकाना साहिब)** में पिता **मेहता कालू जी** एवं माता **तृप्ता जी** के घर (बहन: बेबे नानकी जी; पत्नी: माता सुलखनी जी; पुत्र: बाबा श्री चंद व बाबा लखमी दास)।
   - **सुल्तानपुर लोधी:** दौलत खाँ लोधी के **मोदीखाने** में कार्य किया; **काली बेईं नदी** में ज्ञान प्राप्ति के पश्चात ***"ना कोई हिंदू, ना कोई मुसलमान"*** का उद्घोष किया।
   - **चार उदासियाँ (यात्राएँ)** (**भाई मरदाना जी** के साथ): प्रथम (पूर्व — सैदपुर, हरिद्वार, कामरूप, जगन्नाथ पुरी), द्वितीय (दक्षिण — श्रीलंका), तृतीय (उत्तर — कश्मीर, सुमेरु पर्वत, हसन अबदाल/पंजा साहिब), चतुर्थ (पश्चिम — मक्का, मदीना, बगदाद)।
   - **करतारपुर साहिब (1521, रावी तट):** **संगत, पंगत (लंगर) और धर्मसाल** की स्थापना; **किरत करो, नाम जपो, वंड छको** का सिद्धांत; प्रमुख बाणियाँ: *जपुजी साहिब, आसा दी वार, सिद्ध गोष्टि, दखनी ओअंकार, पट्टी, बारह माहा तुखारी, बाबरवाणी* (19 रागों में 974 शब्द)।

4. **यूनिट 4 — दूसरे गुरु अंगद देव जी से नौवें गुरु तेग बहादुर जी तक:**
   - **2. श्री गुरु अंगद देव जी (भाई लहणा जी, 1539–1552):** **खडूर साहिब**; **गुरुमुखी लिपि** का मानकीकरण; **मल्ल अखाड़ा** प्रथा।
   - **3. श्री गुरु अमरदास जी (1552–1574):** **गोइंदवाल साहिब (84 सीढ़ियों वाली बावली)**; **22 मंजियों** की स्थापना; *आनंद साहिब* (40 पौड़ियाँ, राग रामकली); सती एवं पर्दा प्रथा का विरोध।
   - **4. श्री गुरु रामदास जी (भाई जेठा जी, 1574–1581):** **रामदासपुर / अमृतसर (1577)** की स्थापना; **मसंद प्रथा**; *चार लावाँ* (राग सूही)।
   - **5. श्री गुरु अर्जन देव जी (1581–1606):** **श्री हरिमंदिर साहिब** का निर्माण (नींव सूफ़ी संत **साईं मियाँ मीर जी, 1588**); **आदि ग्रंथ साहिब का संकलन (1604 — लेखक भाई गुरदास जी, प्रथम ग्रंथी बाबा बुड्ढा जी)**; तरनतारन, करतारपुर (जालंधर) व श्री हरगोबिंदपुर बसाए; **दसवंध प्रथा**; *सुखमनी साहिब*; जहाँगीर के आदेश पर **लाहौर में शहादत (30 मई 1606 — शहीदों के सरताज)**।
   - **6. श्री गुरु हरगोबिंद साहिब जी (1606–1644):** **मीरी और पीरी** की दो तलवारें; **श्री अकाल तख्त साहिब (1606)** एवं लोहगढ़ किले का निर्माण; ग्वालियर किले से 52 राजाओं की रिहाई (**बंदी छोड़ दाता**)।
   - **7. श्री गुरु हरिराय जी (1644–1661):** कीरतपुर साहिब में औषधालय। **8. श्री गुरु हरिकृष्ण जी (1661–1664):** **बाला पीर** (दिल्ली बंगला साहिब में चेचक पीड़ितों की सेवा)।
   - **9. श्री गुरु तेग बहादुर जी (1664–1675):** **मक्खन शाह लुबाना** द्वारा बकाला में प्रकट; **चक नानकी (आनंदपुर साहिब, 1665)** बसाया; कश्मीरी पंडितों (पंडित कृपा राम) की रक्षा हेतु औरंगज़ेब के आदेश पर **11 नवंबर 1675 को चाँदनी चौक, दिल्ली में शहादत (*हिंद की चादर*)**।

5. **यूनिट 5 — श्री गुरु गोबिंद सिंह जी (1666–1708) एवं खालसा पंथ की सृजना:**
   - जन्म **22 दिसंबर 1666 (पटना साहिब)**; **भंगाणी का युद्ध (1688)** एवं **नदौन का युद्ध (1691)**; **वैसाखी (30 मार्च 1699) को केसगढ़ साहिब (आनंदपुर साहिब) में खालसा पंथ की सृजना** (पंज प्यारे: भाई दया सिंह, भाई धर्म सिंह, भाई हिम्मत सिंह, भाई मोहकम सिंह, भाई साहिब सिंह)।
   - **चमकौर साहिब का युद्ध (दिसंबर 1704):** बड़े साहिबज़ादे **बाबा अजीत सिंह और बाबा जुझार सिंह** की शहादत; **सरहिंद में छोटे साहिबज़ादे बाबा ज़ोरावर सिंह और बाबा फ़तेह सिंह** को वज़ीर खाँ के आदेश पर दीवार में चिनवाकर शहीद किया गया।
   - **दीना काँगड़ में फ़ारसी में 'ज़फ़रनामा'** लिखा; **खिदराना की ढाब / मुक्तसर का युद्ध (1705 — 40 मुक्ते एवं माई भागो)**; **दमदमा साहिब (तलवंडी साबो — गुरु की काशी)**; नांदेड़ (1708) में **श्री गुरु ग्रंथ साहिब जी को शाश्वत गुरुपद** सौंपा।

---

### [Level I: Intermediate — बंदा सिंह बहादुर, 12 मिसलें, महाराजा रणजीत सिंह, आंग्ल-सिख युद्ध एवं स्वतंत्रता संग्राम (Units 6–9)]
1. **यूनिट 6 — बाबा बंदा सिंह बहादुर (1670–1716) एवं 12 सिख मिसलें:**
   - बचपन का नाम **लक्ष्मण देव** (माधो दास बैरागी); **चप्पड़चिड़ी के युद्ध (मई 1710)** में सरहिंद के सूबेदार **वज़ीर खाँ** को मारकर प्रथम स्वतंत्र सिख राज्य स्थापित किया; राजधानी **लोहगढ़ (मुखलिसगढ़)**; गुरु नानक-गुरु गोबिंद सिंह के नाम के सिक्के चलाए और **ज़मींदारी प्रथा समाप्त कर किसानों को भूमि का स्वामी बनाया**; **गुरदास नंगल की गढ़ी** से गिरफ्तारी के बाद **जून 1716 में दिल्ली में शहादत**।
   - **दल खालसा (1748 — नवाब कपूर सिंह एवं जस्सा सिंह आहलूवालिया)** तथा **12 सिख मिसलें** (शुकरचकिया, आहलूवालिया, भंगी, रामगढ़िया, कन्हैया, फूलकियाँ, सिंहपुरिया, निशानवालिया, करोड़सिंघिया, डल्लेवालिया, नकई, शहीदां)।

2. **यूनिट 7 और 8 — महाराजा रणजीत सिंह (1780–1839) एवं आंग्ल-सिख युद्ध (1845–1849):**
   - **शुकरचकिया मिसल**; **7 जुलाई 1799 को लाहौर जीता**; **अमृतसर की संधि (25 अप्रैल 1809 — चार्ल्स मेटकाफ़ के साथ)** जिससे सतलुज नदी सीमा बनी; मुल्तान (1818), कश्मीर (1819), पेशावर (1834) जीते।
   - **प्रथम आंग्ल-सिख युद्ध (1845–46, लॉर्ड हार्डिंग):** मुदकी, फिरोजशाह, बद्दोवाल, अलीवाल, **सबराओं (10 फरवरी 1846 — शाम सिंह अटारीवाला की शहादत)** $\\to$ लाहौर एवं भैरोवाल की संधियाँ (1846)।
   - **द्वितीय आंग्ल-सिख युद्ध (1848–49, लॉर्ड डलहौज़ी):** रामनगर, **चिल्लियाँवाला (13 जनवरी 1849)**, मुल्तान (दीवान मूलराज), **गुजरात ("तोपों का युद्ध", 21 फरवरी 1849)** $\\to$ **29 मार्च 1849 को लॉर्ड डलहौज़ी द्वारा पंजाब का ब्रिटिश साम्राज्य में विलय** (अंतिम सिख महाराजा दलीप सिंह)।

3. **यूनिट 9 — स्वतंत्रता संग्राम में पंजाब का योगदान:**
   - **कूका / नामधारी आंदोलन (1857, भैणी साहिब — सतगुरु राम सिंह जी, मलेरकोटला कांड 1872)**; **सिंह सभा आंदोलन** (अमृतसर 1873, लाहौर 1879); **पगड़ी सँभाल जट्टा (1907 — सरदार अजीत सिंह)**; **गदर पार्टी (1913, सैन फ्रांसिस्को — बाबा सोहन सिंह भकना, लाला हरदयाल, करतार सिंह सराभा)**; **कामागाटामारू जहाज (1914 — बाबा गुरदित्त सिंह)**; **जलियाँवाला बाग हत्याकांड (13 अप्रैल 1919 — शहीद ऊधम सिंह द्वारा 13 मार्च 1940 को लंदन में माइकल ओ'ड्वायर का वध)**; **गुरुद्वारा सुधार / अकाली आंदोलन (1920–25 — SGPC 1920, ननकाना साहिब, गुरु का बाग, जैतो का मोर्चा)**; **बब्बर अकाली आंदोलन (किशन सिंह गड़गज्ज)**; **शहीद भगत सिंह (नौजवान भारत सभा 1926, शहादत 23 मार्च 1931)**; **रियासती प्रजा मंडल (1928 — सेवा सिंह ठीकरीवाला)**।

---

### [Level A: Advanced — भाग 2: नागरिक शास्त्र (7 यूनिट), भूगोल (8 यूनिट) एवं अर्थशास्त्र (4 यूनिट)]
1. **नागरिक शास्त्र (Civics):**
   - **संविधान:** 26 नवंबर 1949 को अंगीकृत, **26 जनवरी 1950** को लागू; **42वें संशोधन (1976)** द्वारा प्रस्तावना में *समाजवादी, पंथनिरपेक्ष और अखंडता* शब्द तथा भाग IVA (अनुच्छेद 51A) में मौलिक कर्तव्य जोड़े गए (**86वें संशोधन 2002** द्वारा 11वाँ कर्तव्य व अनुच्छेद 21A शिक्षा का अधिकार)।
   - **पंजाब की सीटें:** **विधानसभा = 117 सीटें**, **लोकसभा = 13 सीटें**, **राज्यसभा = 7 सीटें**; **73वें व 74वें संशोधन (1992)** द्वारा पंचायती राज एवं नगरपालिकाएँ।
   - **UNO (24 अक्टूबर 1945, मुख्यालय न्यूयॉर्क):** 6 अंग (अंतर्राष्ट्रीय न्यायालय ICJ का मुख्यालय **हेग, नीदरलैंड** में है; सुरक्षा परिषद के 5 स्थायी वीटो सदस्य: **अमेरिका, ब्रिटेन, फ्रांस, रूस, चीन**)।

2. **भूगोल एवं अर्थशास्त्र (Geography & Economics):**
   - **भारत:** $8^\\circ 4'\\text{N से }37^\\circ 6'\\text{N}$, मानक याम्योत्तर $82^\\circ 30'\\text{E}$ (GMT से 5 घंटे 30 मिनट आगे)।
   - **आधुनिक पंजाब (1 नवंबर 1966 — शाह आयोग):** क्षेत्रफल **$50,362\\text{ km}^2$**; **23 जिले (5 मंडल; 23वाँ जिला मलेरकोटला 2021)**: माझा (4 जिले), दोआबा (4 जिले), मालवा (15 जिले)। **बाँध:** सतलुज पर **भाखड़ा-नांगल**, ब्यास पर **पोंग बाँध**, रावी पर **रणजीत सागर (थीन) बाँध**; ब्यास व सतलुज का संगम **हरिके पत्तन (तरनतारन)**; **6 रामसर आर्द्रभूमियाँ** (हरिके, कांजली, रोपड़, केशोपुर-मियानी, नांगल, ब्यास)।
   - **अर्थशास्त्र:** **प्राथमिक क्षेत्रक** (कृषि — सर्वाधिक रोजगार व प्रच्छन्न बेरोजगारी), **द्वितीयक क्षेत्रक** (उद्योग), **तृतीयक / सेवा क्षेत्रक** (GDP में सर्वाधिक योगदान); **हरित क्रांति** (**PAU लुधियाना 1962, डॉ. एम.एस. स्वामीनाथन**); **RBI (1 अप्रैल 1935, राष्ट्रीयकरण 1949)**; **नीति आयोग (1 जनवरी 2015)**।`
        },
        keyNotes: {
            en: [
                'Sikh Gurus Foundation: Guru Nanak Dev Ji (1469–1539, 4 Udasis, Kartarpur 1521); Guru Angad Dev Ji (Gurmukhi, Khadur Sahib); Guru Amar Das Ji (Goindwal Baoli 84 steps, 22 Manjis, Anand Sahib); Guru Ram Das Ji (Amritsar 1577, Masand system, Lavan); Guru Arjan Dev Ji (Adi Granth 1604, Harmandir Sahib, martyred 1606 under Jahangir).',
                'Later Gurus & Khalsa: Guru Hargobind Ji (Miri-Piri, Akal Takht 1606, Bandi Chhor 52 kings); Guru Tegh Bahadur Ji (Anandpur Sahib 1665, martyred 11 Nov 1675 at Chandni Chowk under Aurangzeb); Guru Gobind Singh Ji (Khalsa on 30 March 1699, Chamkaur & Sirhind martyrdoms 1704, Zafarnama at Dina Kangar, Muktsar 1705).',
                'Banda Singh Bahadur, Misls & Ranjit Singh: Banda Singh Bahadur defeated Wazir Khan at Chappar Chiri (May 1710), capital Lohgarh, abolished Zamindari system; Dal Khalsa (1748, 12 Misls); Maharaja Ranjit Singh (Sukerchakia Misl) captured Lahore (1799), Treaty of Amritsar (25 April 1809 with Metcalfe fixing Sutlej boundary).',
                'Anglo-Sikh Wars & Freedom Movements: 1st War (1845–46: Mudki, Ferozeshah, Aliwal, Sobraon — Sham Singh Attariwala); 2nd War (1848–49: Ramnagar, Chillianwala, Multan, Gujrat "Battle of Guns") -> Annexation of Punjab on 29 March 1849 by Lord Dalhousie; Kuka Movement (1857, Satguru Ram Singh), Ghadar Party (1913), Komagata Maru (1914), Jallianwala Bagh (13 April 1919), Akali Movement (SGPC 1920, Act 1925), Bhagat Singh (23 March 1931).',
                'Civics & Punjab Polity: Fundamental Rights (Part III, Art 12–35; Art 32 = Heart & Soul), Fundamental Duties (Art 51A, 42nd Amendment 1976); Punjab Legislature = 117 Vidhan Sabha MLAs, 13 Lok Sabha MPs, 7 Rajya Sabha MPs; 73rd & 74th Amendments (1992); UNO (24 Oct 1945, ICJ at The Hague).',
                'Geography & Economics of Punjab: Reorganised 1 Nov 1966 (50,362 km^2; 23 districts = 4 Majha + 4 Doaba + 15 Malwa; 23rd Malerkotla); Dams: Bhakra (Sutlej), Pong (Beas), Ranjit Sagar/Thein (Ravi); Confluence at Harike Pattan; 6 Ramsar sites; Green Revolution (PAU Ludhiana 1962); Tertiary sector leads GDP while Primary sector leads employment (disguised unemployment).'
            ],
            pa: [
                'ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ (1–5): ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (1469–1539, 4 ਉਦਾਸੀਆਂ, ਕਰਤਾਰਪੁਰ 1521); ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ (ਗੁਰਮੁਖੀ, ਖਡੂਰ ਸਾਹਿਬ); ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ (ਗੋਇੰਦਵਾਲ ਬਾਉਲੀ 84 ਪੌੜੀਆਂ, 22 ਮੰਜੀਆਂ); ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ (ਅੰਮ੍ਰਿਤਸਰ 1577, ਮਸੰਦ ਪ੍ਰਥਾ); ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (ਆਦਿ ਗ੍ਰੰਥ 1604, ਸ਼ਹੀਦੀ 1606 ਲਾਹੌਰ)।',
                'ਗੁਰੂ ਸਾਹਿਬਾਨ (6–10) ਅਤੇ ਖਾਲਸਾ: ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ (ਮੀਰੀ-ਪੀਰੀ, ਅਕਾਲ ਤਖ਼ਤ 1606, ਬੰਦੀ ਛੋੜ); ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ (ਅਨੰਦਪੁਰ ਸਾਹਿਬ 1665, ਸ਼ਹੀਦੀ 11 ਨਵੰਬਰ 1675 ਦਿੱਲੀ); ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (ਖਾਲਸਾ ਸਾਜਨਾ 30 ਮਾਰਚ 1699, ਚਮਕੌਰ ਤੇ ਸਰਹਿੰਦ ਸ਼ਹੀਦੀਆਂ 1704, ਜ਼ਫ਼ਰਨਾਮਾ ਦੀਨਾ ਕਾਂਗੜ, ਮੁਕਤਸਰ 1705)।',
                'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ, 12 ਮਿਸਲਾਂ ਤੇ ਰਣਜੀਤ ਸਿੰਘ: ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਚੱਪੜਚਿੜੀ (ਮਈ 1710) ਵਿੱਚ ਵਜ਼ੀਰ ਖਾਂ ਨੂੰ ਹਰਾਇਆ, ਰਾਜਧਾਨੀ ਲੋਹਗੜ੍ਹ, ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਖਤਮ ਕੀਤੀ; ਦਲ ਖਾਲਸਾ (1748, 12 ਮਿਸਲਾਂ); ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ (ਸ਼ੁੱਕਰਚੱਕੀਆ ਮਿਸਲ, ਲਾਹੌਰ ਜਿੱਤ 1799, ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ 25 ਅਪ੍ਰੈਲ 1809)।',
                'ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਤੇ ਆਜ਼ਾਦੀ ਲਹਿਰਾਂ: ਪਹਿਲਾ ਯੁੱਧ (1845–46: ਮੁਦਕੀ, ਫਿਰੋਜ਼ਸ਼ਾਹ, ਅਲੀਵਾਲ, ਸਭਰਾਵਾਂ — ਸ਼ਾਮ ਸਿੰਘ ਅਟਾਰੀਵਾਲਾ); ਦੂਜਾ ਯੁੱਧ (1848–49: ਰਾਮਨਗਰ, ਚਿੱਲੀਆਂਵਾਲਾ, ਮੁਲਤਾਨ, ਗੁਜਰਾਤ "ਤੋਪਾਂ ਦੀ ਲੜਾਈ") -> 29 ਮਾਰਚ 1849 ਨੂੰ ਪੰਜਾਬ ਦਾ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਰਲੇਵਾਂ; ਕੂਕਾ ਲਹਿਰ (1857), ਗਦਰ ਪਾਰਟੀ (1913), ਜਲ੍ਹਿਆਂਵਾਲਾ ਬਾਗ (13 ਅਪ੍ਰੈਲ 1919), SGPC (1920), ਭਗਤ ਸਿੰਘ (23 ਮਾਰਚ 1931)।',
                'ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ ਤੇ ਪੰਜਾਬ ਰਾਜਨੀਤੀ: ਮੌਲਿਕ ਅਧਿਕਾਰ (ਭਾਗ III, ਅਨੁਛੇਦ 12–35; ਅਨੁਛੇਦ 32 = ਸੰਵਿਧਾਨ ਦੀ ਆਤਮਾ), ਮੌਲਿਕ ਕਰਤੱਵ (ਅਨੁਛੇਦ 51A, 42ਵੀਂ ਸੋਧ 1976); ਪੰਜਾਬ ਸੀਟਾਂ = 117 ਵਿਧਾਨ ਸਭਾ, 13 ਲੋਕ ਸਭਾ, 7 ਰਾਜ ਸਭਾ; UNO (24 ਅਕਤੂਬਰ 1945)।',
                'ਪੰਜਾਬ ਦਾ ਭੂਗੋਲ ਤੇ ਅਰਥ ਸ਼ਾਸਤਰ: ਪੁਨਰਗਠਨ 1 ਨਵੰਬਰ 1966 (50,362 km^2; 23 ਜ਼ਿਲ੍ਹੇ = 4 ਮਾਝਾ + 4 ਦੁਆਬਾ + 15 ਮਾਲਵਾ; 23ਵਾਂ ਮਲੇਰਕੋਟਲਾ); ਭਾਖੜਾ (ਸਤਲੁਜ), ਪੌਂਗ (ਬਿਆਸ), ਰਣਜੀਤ ਸਾਗਰ/ਥੀਨ (ਰਾਵੀ); ਹਰੀਕੇ ਪੱਤਣ ਸੰਗਮ; 6 ਰਾਮਸਰ ਵੈੱਟਲੈਂਡਜ਼; ਹਰੀ ਕ੍ਰਾਂਤੀ (PAU ਲੁਧਿਆਣਾ 1962)।'
            ],
            hi: [
                'सिख गुरु साहिबान (1–5): गुरु नानक देव जी (1469–1539, 4 उदासियाँ, करतारपुर 1521); गुरु अंगद देव जी (गुरुमुखी, खडूर साहिब); गुरु अमरदास जी (गोइंदवाल बावली 84 सीढ़ियाँ, 22 मंजियाँ); गुरु रामदास जी (अमृतसर 1577, मसंद प्रथा); गुरु अर्जन देव जी (आदि ग्रंथ 1604, शहादत 1606 लाहौर)।',
                'गुरु साहिबान (6–10) एवं खालसा: गुरु हरगोबिंद जी (मीरी-पीरी, अकाल तख्त 1606, बंदी छोड़); गुरु तेग बहादुर जी (आनंदपुर साहिब 1665, शहादत 11 नवंबर 1675 दिल्ली); गुरु गोबिंद सिंह जी (खालसा सृजना 30 मार्च 1699, चमकौर व सरहिंद शहादत 1704, ज़फ़रनामा दीना काँगड़, मुक्तसर 1705)।',
                'बंदा सिंह बहादुर, 12 मिसलें व रणजीत सिंह: बंदा सिंह बहादुर ने चप्पड़चिड़ी (मई 1710) में वज़ीर खाँ को हराया, राजधानी लोहगढ़, ज़मींदारी प्रथा समाप्त की; दल खालसा (1748, 12 मिसलें); महाराजा रणजीत सिंह (शुकरचकिया मिसल, लाहौर विजय 1799, अमृतसर की संधि 25 अप्रैल 1809)।',
                'आंग्ल-सिख युद्ध व स्वतंत्रता आंदोलन: प्रथम युद्ध (1845–46: मुदकी, फिरोजशाह, अलीवाल, सबराओं — शाम सिंह अटारीवाला); द्वितीय युद्ध (1848–49: रामनगर, चिल्लियाँवाला, मुल्तान, गुजरात "तोपों का युद्ध") -> 29 मार्च 1849 को पंजाब का विलय; कूका आंदोलन (1857), गदर पार्टी (1913), जलियाँवाला बाग (13 अप्रैल 1919), SGPC (1920), भगत सिंह (23 मार्च 1931)।',
                'नागरिक शास्त्र व पंजाब राजव्यवस्था: मौलिक अधिकार (भाग III, अनुच्छेद 12–35; अनुच्छेद 32 = संविधान की आत्मा), मौलिक कर्तव्य (अनुच्छेद 51A, 42वाँ संशोधन 1976); पंजाब सीटें = 117 विधानसभा, 13 लोकसभा, 7 राज्यसभा; UNO (24 अक्टूबर 1945)।',
                'पंजाब का भूगोल व अर्थशास्त्र: पुनर्गठन 1 नवंबर 1966 (50,362 km^2; 23 जिले = 4 माझा + 4 दोआबा + 15 मालवा; 23वाँ मलेरकोटला); भाखड़ा (सतलुज), पोंग (ब्यास), रणजीत सागर/थीन (रावी); हरिके पत्तन संगम; 6 रामसर स्थल; हरित क्रांति (PAU लुधियाना 1962)।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Cities Founded by Sikh Gurus: Kartarpur on Ravi (Guru Nanak Dev Ji, 1521); Khadur Sahib (Guru Angad Dev Ji); Goindwal Sahib (Guru Amar Das Ji); Ramdaspur/Amritsar (Guru Ram Das Ji, 1577); Tarn Taran, Kartarpur [Jalandhar] & Sri Hargobindpur (Guru Arjan Dev Ji); Kiratpur Sahib (Guru Hargobind Ji); Chak Nanaki / Anandpur Sahib (Guru Tegh Bahadur Ji, 1665); Paonta Sahib (Guru Gobind Singh Ji).',
                'Punjab Doabs & Dams Mnemonic: Bist (Beas-Sutlej), Bari/Majha (Beas-Ravi), Rechna (Ravi-Chenab), Chaj (Chenab-Jhelum), Sind Sagar (Jhelum-Indus). Dams: Bhakra -> Sutlej; Pong -> Beas; Ranjit Sagar (Thein) -> Ravi.',
                'Anglo-Sikh Battles Order: 1st War (1845–46) = M-F-A-S (Mudki, Ferozeshah, Aliwal, Sobraon); 2nd War (1848–49) = R-C-M-G (Ramnagar, Chillianwala, Multan, Gujrat "Battle of Guns").',
                'Punjab Legislature & Minimum Ages: Vidhan Sabha = 117, Lok Sabha = 13, Rajya Sabha = 7; Min Age: Voter = 18, Sarpanch/Panchayat = 21, MLA/Lok Sabha MP = 25, Rajya Sabha MP = 30, President/Governor = 35.',
                'Constitutional Amendments Pair: 42nd Amendment (1976 — Mini Constitution: Socialist, Secular, Integrity + 10 Fundamental Duties); 44th Amendment (1978 — Right to Property moved to Art 300A); 73rd/74th (1992 — Panchayats/Municipalities); 86th (2002 — Art 21A Right to Education + 11th Duty).'
            ],
            pa: [
                'ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੁਆਰਾ ਵਸਾਏ ਨਗਰ: ਕਰਤਾਰਪੁਰ [ਰਾਵੀ] (ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ); ਖਡੂਰ ਸਾਹਿਬ (ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ); ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ (ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ); ਰਾਮਦਾਸਪੁਰ/ਅੰਮ੍ਰਿਤਸਰ (ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ, 1577); ਤਰਨਤਾਰਨ, ਕਰਤਾਰਪੁਰ [ਜਲੰਧਰ] ਤੇ ਸ੍ਰੀ ਹਰਗੋਬਿੰਦਪੁਰ (ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ); ਕੀਰਤਪੁਰ ਸਾਹਿਬ (ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ); ਚੱਕ ਨਾਨਕੀ / ਅਨੰਦਪੁਰ ਸਾਹਿਬ (ਗੁਰੂ ਤੇਗ ਬਹਾਦਰ ਜੀ, 1665); ਪਾਉਂਟਾ ਸਾਹਿਬ (ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ)।',
                'ਪੰਜਾਬ ਦੇ ਦੁਆਬੇ ਅਤੇ ਡੈਮ: ਬਿਸਤ (ਬਿਆਸ-ਸਤਲੁਜ), ਬਾਰੀ/ਮਾਝਾ (ਬਿਆਸ-ਰਾਵੀ), ਰਚਨਾ (ਰਾਵੀ-ਚਨਾਬ), ਚੱਜ (ਚਨਾਬ-ਜਿਹਲਮ)। ਡੈਮ: ਭਾਖੜਾ -> ਸਤਲੁਜ; ਪੌਂਗ -> ਬਿਆਸ; ਰਣਜੀਤ ਸਾਗਰ (ਥੀਨ) -> ਰਾਵੀ।',
                'ਐਂਗਲੋ-ਸਿੱਖ ਲੜਾਈਆਂ ਦਾ ਕ੍ਰਮ: ਪਹਿਲਾ ਯੁੱਧ (1845–46) = ਮੁਦਕੀ, ਫਿਰੋਜ਼ਸ਼ਾਹ, ਅਲੀਵਾਲ, ਸਭਰਾਵਾਂ; ਦੂਜਾ ਯੁੱਧ (1848–49) = ਰਾਮਨਗਰ, ਚਿੱਲੀਆਂਵਾਲਾ, ਮੁਲਤਾਨ, ਗੁਜਰਾਤ ("ਤੋਪਾਂ ਦੀ ਲੜਾਈ")।',
                'ਪੰਜਾਬ ਸੀਟਾਂ ਅਤੇ ਘੱਟੋ-ਘੱਟ ਉਮਰ: ਵਿਧਾਨ ਸਭਾ = 117, ਲੋਕ ਸਭਾ = 13, ਰਾਜ ਸਭਾ = 7; ਉਮਰ: ਵੋਟਰ = 18, ਸਰਪੰਚ = 21, MLA/ਲੋਕ ਸਭਾ MP = 25, ਰਾਜ ਸਭਾ MP = 30, ਰਾਸ਼ਟਰਪਤੀ/ਰਾਜਪਾਲ = 35।',
                'ਸੰਵਿਧਾਨਕ ਸੋਧਾਂ: 42ਵੀਂ ਸੋਧ (1976 — ਸਮਾਜਵਾਦੀ, ਧਰਮ-ਨਿਰਪੱਖ, ਅਖੰਡਤਾ + 10 ਮੌਲਿਕ ਕਰਤੱਵ); 44ਵੀਂ ਸੋਧ (1978 — ਜਾਇਦਾਦ ਦਾ ਅਧਿਕਾਰ ਹਟਾਇਆ); 73ਵੀਂ/74ਵੀਂ (1992 — ਪੰਚਾਇਤੀ ਰਾਜ); 86ਵੀਂ (2002 — ਅਨੁਛੇਦ 21A ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ)।'
            ],
            hi: [
                'गुरु साहिबान द्वारा बसाए नगर: करतारपुर [रावी] (गुरु नानक देव जी); खडूर साहिब (गुरु अंगद देव जी); गोइंदवाल साहिब (गुरु अमरदास जी); रामदासपुर/अमृतसर (गुरु रामदास जी, 1577); तरनतारन, करतारपुर [जालंधर] व श्री हरगोबिंदपुर (गुरु अर्जन देव जी); कीरतपुर साहिब (गुरु हरगोबिंद जी); चक नानकी / आनंदपुर साहिब (गुरु तेग बहादुर जी, 1665); पांवटा साहिब (गुरु गोबिंद सिंह जी)।',
                'पंजाब के दोआब एवं बाँध: बिस्त (ब्यास-सतलुज), बारी/माझा (ब्यास-रावी), रचना (रावी-चिनाब), चज (चिनाब-झेलम)। बाँध: भाखड़ा -> सतलुज; पोंग -> ब्यास; रणजीत सागर (थीन) -> रावी।',
                'आंग्ल-सिख युद्धों का क्रम: प्रथम युद्ध (1845–46) = मुदकी, फिरोजशाह, अलीवाल, सबराओं; द्वितीय युद्ध (1848–49) = रामनगर, चिल्लियाँवाला, मुल्तान, गुजरात ("तोपों का युद्ध")।',
                'पंजाब सीटें एवं न्यूनतम आयु: विधानसभा = 117, लोकसभा = 13, राज्यसभा = 7; आयु: मतदाता = 18, सरपंच = 21, MLA/लोकसभा MP = 25, राज्यसभा MP = 30, राष्ट्रपति/राज्यपाल = 35।',
                'संविधान संशोधन: 42वाँ संशोधन (1976 — समाजवादी, पंथनिरपेक्ष, अखंडता + 10 मौलिक कर्तव्य); 44वाँ संशोधन (1978 — संपत्ति का अधिकार हटाया); 73वाँ/74वाँ (1992 — पंचायती राज); 86वाँ (2002 — अनुच्छेद 21A शिक्षा का अधिकार)।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: Confusing the two Kartarpurs founded by Sikh Gurus. Correction: Kartarpur on the banks of River Ravi (now in Narowal, Pakistan) was founded by the 1st Guru, Sri Guru Nanak Dev Ji in 1521; Kartarpur in Jalandhar Doab (Punjab, India) was founded by the 5th Guru, Sri Guru Arjan Dev Ji in 1594.',
                'Misconception: Thinking the Masand system was started by Guru Amar Das Ji and Manji system by Guru Ram Das Ji. Correction: The 3rd Guru, Sri Guru Amar Das Ji established the 22 Manjis; the 4th Guru, Sri Guru Ram Das Ji started the Masand system (which was later abolished by the 10th Guru, Sri Guru Gobind Singh Ji in 1699).',
                'Misconception: Thinking the Phulkian Misl (Patiala, Nabha, Jind) was part of the Dal Khalsa formed at Amritsar in 1748. Correction: Out of the 12 Sikh Misls, 11 Misls (Trans-Sutlej) were part of the Dal Khalsa, whereas the Phulkian Misl (Cis-Sutlej) was not part of the Dal Khalsa.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੁਆਰਾ ਵਸਾਏ ਦੋ ਕਰਤਾਰਪੁਰ ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਉਲਝਣਾ। ਸੁਧਾਰ: ਰਾਵੀ ਦਰਿਆ ਦੇ ਕੰਢੇ ਵਾਲਾ ਕਰਤਾਰਪੁਰ (ਹੁਣ ਪਾਕਿਸਤਾਨ ਵਿੱਚ) ਪਹਿਲੇ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ 1521 ਵਿੱਚ ਵਸਾਇਆ ਸੀ; ਜਦਕਿ ਜਲੰਧਰ ਦੁਆਬ ਵਾਲਾ ਕਰਤਾਰਪੁਰ ਪੰਜਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ 1594 ਵਿੱਚ ਵਸਾਇਆ ਸੀ।',
                'ਭੁਲੇਖਾ: ਮੰਜੀ ਪ੍ਰਥਾ ਅਤੇ ਮਸੰਦ ਪ੍ਰਥਾ ਦੇ ਸੰਸਥਾਪਕ ਗੁਰੂ ਸਾਹਿਬਾਨ ਵਿੱਚ ਭੁਲੇਖਾ ਖਾਣਾ। ਸੁਧਾਰ: 22 ਮੰਜੀਆਂ ਦੀ ਸਥਾਪਨਾ ਤੀਜੇ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਨੇ ਕੀਤੀ ਸੀ; ਮਸੰਦ ਪ੍ਰਥਾ ਚੌਥੇ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਰਾਮਦਾਸ ਜੀ ਨੇ ਸ਼ੁਰੂ ਕੀਤੀ ਸੀ (ਅਤੇ ਦਸਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਖਤਮ ਕੀਤੀ)।',
                'ਭੁਲੇਖਾ: ਫੂਲਕੀਆਂ ਮਿਸਲ (ਪਟਿਆਲਾ, ਨਾਭਾ, ਜੀਂਦ) ਨੂੰ ਦਲ ਖਾਲਸਾ (1748) ਦਾ ਹਿੱਸਾ ਮੰਨਣਾ। ਸੁਧਾਰ: 12 ਮਿਸਲਾਂ ਵਿੱਚੋਂ 11 ਮਿਸਲਾਂ ਦਲ ਖਾਲਸਾ ਦਾ ਹਿੱਸਾ ਸਨ, ਪਰ ਸਤਲੁਜ ਤੋਂ ਪਾਰ (Cis-Sutlej) ਦੀ ਫੂਲਕੀਆਂ ਮਿਸਲ ਦਲ ਖਾਲਸਾ ਦਾ ਹਿੱਸਾ ਨਹੀਂ ਸੀ।'
            ],
            hi: [
                'भ्रांति: सिख गुरु साहिबान द्वारा बसाए गए दो करतारपुर नगरों में भ्रमित होना। सुधार: रावी नदी के तट पर स्थित करतारपुर (अब पाकिस्तान में) प्रथम गुरु श्री गुरु नानक देव जी ने 1521 में बसाया था; जबकि जालंधर दोआब स्थित करतारपुर पाँचवें गुरु श्री गुरु अर्जन देव जी ने 1594 में बसाया था।',
                'भ्रांति: मंजी प्रथा और मसंद प्रथा के संस्थापक गुरुओं में भ्रम होना। सुधार: 22 मंजियों की स्थापना तीसरे गुरु श्री गुरु अमरदास जी ने की थी; मसंद प्रथा चौथे गुरु श्री गुरु रामदास जी ने प्रारंभ की थी (तथा दसवें गुरु श्री गुरु गोबिंद सिंह जी ने समाप्त की)।',
                'भ्रांति: फूलकियाँ मिसल (पटियाला, नाभा, जींद) को दल खालसा (1748) का हिस्सा समझना। सुधार: 12 मिसलों में से 11 मिसलें दल खालसा का अंग थीं, किंतु सतलुज के दक्षिण (Cis-Sutlej) की फूलकियाँ मिसल दल खालसा का हिस्सा नहीं थी।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: '[Easy — Sikh History Chronology & Cities] Match the following historical milestones with the Guru Sahib / Leader: (a) Compilation of Adi Granth (1604), (b) Creation of Akal Takht & Miri-Piri (1606), (c) Battle of Chappar Chiri & abolition of Zamindari system (1710), (d) Treaty of Amritsar fixing River Sutlej boundary (1809).',
                    pa: '[Easy — ਸਿੱਖ ਇਤਿਹਾਸ ਕਾਲਕ੍ਰਮ] ਹੇਠ ਲਿਖੀਆਂ ਇਤਿਹਾਸਕ ਘਟਨਾਵਾਂ ਦਾ ਸਬੰਧਤ ਗੁਰੂ ਸਾਹਿਬ / ਨਾਇਕ ਨਾਲ ਮਿਲਾਨ ਕਰੋ: (a) ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦਾ ਸੰਪਾਦਨ (1604), (b) ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਤੇ ਮੀਰੀ-ਪੀਰੀ (1606), (c) ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ ਤੇ ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਦਾ ਖਾਤਮਾ (1710), (d) ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ (1809)।',
                    hi: '[Easy — सिख इतिहास कालक्रम] निम्नलिखित ऐतिहासिक घटनाओं का संबंधित गुरु साहिब / नायक से मिलान कीजिए: (a) आदि ग्रंथ साहिब का संकलन (1604), (b) अकाल तख्त साहिब व मीरी-पीरी (1606), (c) चप्पड़चिड़ी का युद्ध व ज़मींदारी प्रथा का उन्मूलन (1710), (d) अमृतसर की संधि (1809)।'
                },
                solutionSteps: {
                    en: [
                        'Step 1: (a) Adi Granth Sahib was compiled in 1604 by the 5th Guru, Sri Guru Arjan Dev Ji (scribed by Bhai Gurdas Ji; Baba Buddha Ji as first Granthi).',
                        'Step 2: (b) Sri Akal Takht Sahib was built in 1606 by the 6th Guru, Sri Guru Hargobind Sahib Ji, who wore the two swords of Miri and Piri.',
                        'Step 3: (c) Baba Banda Singh Bahadur defeated Wazir Khan at Chappar Chiri (May 1710), made Lohgarh his capital, and abolished the Mughal Zamindari system.',
                        'Step 4: (d) Maharaja Ranjit Singh signed the Treaty of Amritsar on 25 April 1809 with British envoy Charles Metcalfe.'
                    ],
                    pa: [
                        'Step 1: (a) ਆਦਿ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦਾ ਸੰਪਾਦਨ 1604 ਵਿੱਚ ਪੰਜਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਕੀਤਾ।',
                        'Step 2: (b) ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਉਸਾਰੀ (1606) ਅਤੇ ਮੀਰੀ-ਪੀਰੀ ਦੀਆਂ ਤਲਵਾਰਾਂ ਛੇਵੇਂ ਗੁਰੂ ਸ੍ਰੀ ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਨੇ ਧਾਰਨ ਕੀਤੀਆਂ।',
                        'Step 3: (c) ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ ਚੱਪੜਚਿੜੀ ਦੀ ਲੜਾਈ (ਮਈ 1710) ਜਿੱਤੀ ਅਤੇ ਜ਼ਿਮੀਂਦਾਰੀ ਪ੍ਰਥਾ ਖਤਮ ਕੀਤੀ।',
                        'Step 4: (d) ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਨੇ 25 ਅਪ੍ਰੈਲ 1809 ਨੂੰ ਚਾਰਲਸ ਮੈਟਕਾਫ਼ ਨਾਲ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ ਕੀਤੀ।'
                    ],
                    hi: [
                        'Step 1: (a) आदि ग्रंथ साहिब का संकलन 1604 में पाँचवें गुरु श्री गुरु अर्जन देव जी ने किया।',
                        'Step 2: (b) श्री अकाल तख्त साहिब का निर्माण (1606) और मीरी-पीरी की तलवारें छठे गुरु श्री गुरु हरगोबिंद साहिब जी ने धारण कीं।',
                        'Step 3: (c) बाबा बंदा सिंह बहादुर ने चप्पड़चिड़ी का युद्ध (मई 1710) जीता और ज़मींदारी प्रथा समाप्त की।',
                        'Step 4: (d) महाराजा रणजीत सिंह ने 25 अप्रैल 1809 को चार्ल्स मेटकाफ़ के साथ अमृतसर की संधि की।'
                    ]
                },
                finalAnswer: {
                    en: '(a) Guru Arjan Dev Ji; (b) Guru Hargobind Sahib Ji; (c) Baba Banda Singh Bahadur; (d) Maharaja Ranjit Singh',
                    pa: '(a) ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ; (b) ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ; (c) ਬਾਬਾ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ; (d) ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ',
                    hi: '(a) गुरु अर्जन देव जी; (b) गुरु हरगोबिंद साहिब जी; (c) बाबा बंदा सिंह बहादुर; (d) महाराजा रणजीत सिंह'
                }
            },
            {
                problem: {
                    en: '[Medium — Anglo-Sikh Wars & Freedom Struggle] (a) Which battle of the Second Anglo-Sikh War is known as the "Battle of Guns" and when was Punjab annexed to the British Empire? (b) Who founded the Kuka (Namdhari) Movement at Bhaini Sahib in 1857 and the Ghadar Party in San Francisco in 1913?',
                    pa: '[Medium — ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਅਤੇ ਆਜ਼ਾਦੀ ਸੰਗਰਾਮ] (a) ਦੂਜੇ ਐਂਗਲੋ-ਸਿੱਖ ਯੁੱਧ ਦੀ ਕਿਹੜੀ ਲੜਾਈ ਨੂੰ "ਤੋਪਾਂ ਦੀ ਲੜਾਈ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਪੰਜਾਬ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਕਦੋਂ ਮਿਲਾਇਆ ਗਿਆ? (b) 1857 ਵਿੱਚ ਭੈਣੀ ਸਾਹਿਬ ਵਿਖੇ ਕੂਕਾ ਲਹਿਰ ਅਤੇ 1913 ਵਿੱਚ ਸੈਨ ਫਰਾਂਸਿਸਕੋ ਵਿਖੇ ਗਦਰ ਪਾਰਟੀ ਦੀ ਸਥਾਪਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?',
                    hi: '[Medium — आंग्ल-सिख युद्ध एवं स्वतंत्रता संग्राम] (a) द्वितीय आंग्ल-सिख युद्ध की किस लड़ाई को "तोपों का युद्ध" कहा जाता है और पंजाब का ब्रिटिश साम्राज्य में विलय कब हुआ? (b) 1857 में भैणी साहिब में कूका आंदोलन तथा 1913 में सैन फ्रांसिस्को में गदर पार्टी की स्थापना किसने की?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: The Battle of Gujrat (21 February 1849) is known as the "Battle of Guns". Following this decisive battle, Lord Dalhousie annexed Punjab on 29 March 1849.',
                        'Step 2: Satguru Ram Singh Ji founded the Namdhari (Kuka) Movement on Vaisakhi 1857 at Bhaini Sahib (Ludhiana).',
                        'Step 3: The Ghadar Party was founded in 1913 in San Francisco (USA) with Baba Sohan Singh Bhakna as founding President and Lala Hardayal as General Secretary.'
                    ],
                    pa: [
                        'Step 1: ਗੁਜਰਾਤ ਦੀ ਲੜਾਈ (21 ਫਰਵਰੀ 1849) ਨੂੰ "ਤੋਪਾਂ ਦੀ ਲੜਾਈ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਇਸ ਤੋਂ ਬਾਅਦ ਲਾਰਡ ਡਲਹੌਜ਼ੀ ਨੇ 29 ਮਾਰਚ 1849 ਨੂੰ ਪੰਜਾਬ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਰਾਜ ਵਿੱਚ ਮਿਲਾ ਲਿਆ।',
                        'Step 2: ਸਤਿਗੁਰੂ ਰਾਮ ਸਿੰਘ ਜੀ ਨੇ ਵਿਸਾਖੀ 1857 ਨੂੰ ਭੈਣੀ ਸਾਹਿਬ (ਲੁਧਿਆਣਾ) ਵਿਖੇ ਕੂਕਾ (ਨਾਮਧਾਰੀ) ਲਹਿਰ ਦੀ ਸ਼ੁਰੂਆਤ ਕੀਤੀ।',
                        'Step 3: 1913 ਵਿੱਚ ਸੈਨ ਫਰਾਂਸਿਸਕੋ ਵਿਖੇ ਗਦਰ ਪਾਰਟੀ ਦੀ ਸਥਾਪਨਾ ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ (ਪ੍ਰਧਾਨ) ਅਤੇ ਲਾਲਾ ਹਰਦਿਆਲ ਨੇ ਕੀਤੀ।'
                    ],
                    hi: [
                        'Step 1: गुजरात की लड़ाई (21 फरवरी 1849) को "तोपों का युद्ध" कहा जाता है। इसके पश्चात लॉर्ड डलहौज़ी ने 29 मार्च 1849 को पंजाब का ब्रिटिश साम्राज्य में विलय कर लिया।',
                        'Step 2: सतगुरु राम सिंह जी ने वैसाखी 1857 को भैणी साहिब (लुधियाना) में कूका (नामधारी) आंदोलन प्रारंभ किया।',
                        'Step 3: 1913 में सैन फ्रांसिस्को में गदर पार्टी की स्थापना बाबा सोहन सिंह भकना (अध्यक्ष) एवं लाला हरदयाल ने की।'
                    ]
                },
                finalAnswer: {
                    en: '(a) Battle of Gujrat (21 Feb 1849), Annexation on 29 March 1849; (b) Satguru Ram Singh Ji (Kuka Movement, 1857) & Baba Sohan Singh Bhakna / Lala Hardayal (Ghadar Party, 1913)',
                    pa: '(a) ਗੁਜਰਾਤ ਦੀ ਲੜਾਈ (21 ਫਰਵਰੀ 1849), ਰਲੇਵਾਂ 29 ਮਾਰਚ 1849; (b) ਸਤਿਗੁਰੂ ਰਾਮ ਸਿੰਘ ਜੀ (ਕੂਕਾ ਲਹਿਰ) ਅਤੇ ਬਾਬਾ ਸੋਹਣ ਸਿੰਘ ਭਕਨਾ / ਲਾਲਾ ਹਰਦਿਆਲ (ਗਦਰ ਪਾਰਟੀ)',
                    hi: '(a) गुजरात का युद्ध (21 फरवरी 1849), विलय 29 मार्च 1849; (b) सतगुरु राम सिंह जी (कूका आंदोलन) तथा बाबा सोहन सिंह भकना / लाला हरदयाल (गदर पार्टी)'
                }
            },
            {
                problem: {
                    en: '[Tricky — Geography, Civics & Economy Integration] (a) Name the three perennial rivers of modern Punjab and the major dam built on each. Where do Beas and Sutlej meet? (b) How many seats does Punjab have in the Vidhan Sabha, Lok Sabha, and Rajya Sabha?',
                    pa: '[Tricky — ਪੰਜਾਬ ਦਾ ਭੂਗੋਲ ਅਤੇ ਰਾਜਨੀਤੀ] (a) ਆਧੁਨਿਕ ਪੰਜਾਬ ਦੇ ਤਿੰਨ ਬਾਰਾਂਮਾਸੀ ਦਰਿਆਵਾਂ ਅਤੇ ਉਹਨਾਂ ਉੱਤੇ ਬਣੇ ਪ੍ਰਮੁੱਖ ਡੈਮਾਂ ਦੇ ਨਾਂ ਦੱਸੋ। ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਕਿੱਥੇ ਮਿਲਦੇ ਹਨ? (b) ਪੰਜਾਬ ਵਿੱਚ ਵਿਧਾਨ ਸਭਾ, ਲੋਕ ਸਭਾ ਅਤੇ ਰਾਜ ਸਭਾ ਦੀਆਂ ਕਿੰਨੀਆਂ ਸੀਟਾਂ ਹਨ?',
                    hi: '[Tricky — पंजाब का भूगोल एवं राजव्यवस्था] (a) आधुनिक पंजाब की तीन सदाबहार नदियों और उन पर बने प्रमुख बाँधों के नाम बताइए। ब्यास और सतलुज कहाँ मिलती हैं? (b) पंजाब में विधानसभा, लोकसभा और राज्यसभा की कितनी सीटें हैं?'
                },
                solutionSteps: {
                    en: [
                        'Step 1: The three perennial rivers and their dams are: Sutlej -> Bhakra-Nangal Dam; Beas -> Pong Dam (Maharana Pratap Sagar); Ravi -> Ranjit Sagar Dam (Thein Dam, Pathankot).',
                        'Step 2: River Beas merges into River Sutlej at Harike Pattan (Tarn Taran district), from where the Indira Gandhi Canal originates.',
                        'Step 3: Punjab Legislature & Parliamentary seats: Vidhan Sabha (MLA) = 117 seats; Lok Sabha (MP) = 13 seats; Rajya Sabha (MP) = 7 seats.'
                    ],
                    pa: [
                        'Step 1: ਪੰਜਾਬ ਦੇ ਤਿੰਨ ਦਰਿਆ ਅਤੇ ਡੈਮ: ਸਤਲੁਜ -> ਭਾਖੜਾ-ਨੰਗਲ ਡੈਮ; ਬਿਆਸ -> ਪੌਂਗ ਡੈਮ; ਰਾਵੀ -> ਰਣਜੀਤ ਸਾਗਰ ਡੈਮ (ਥੀਨ ਡੈਮ, ਪਠਾਨਕੋਟ)।',
                        'Step 2: ਬਿਆਸ ਅਤੇ ਸਤਲੁਜ ਦਰਿਆ ਹਰੀਕੇ ਪੱਤਣ (ਤਰਨਤਾਰਨ) ਵਿਖੇ ਮਿਲਦੇ ਹਨ।',
                        'Step 3: ਪੰਜਾਬ ਦੀਆਂ ਸੀਟਾਂ: ਵਿਧਾਨ ਸਭਾ = 117, ਲੋਕ ਸਭਾ = 13, ਅਤੇ ਰਾਜ ਸਭਾ = 7।'
                    ],
                    hi: [
                        'Step 1: पंजाब की तीन नदियाँ और बाँध: सतलुज -> भाखड़ा-नांगल बाँध; ब्यास -> पोंग बाँध; रावी -> रणजीत सागर बाँध (थीन बाँध, पठानकोट)।',
                        'Step 2: ब्यास और सतलुज नदी हरिके पत्तन (तरनतारन) पर मिलती हैं।',
                        'Step 3: पंजाब की सीटें: विधानसभा = 117, लोकसभा = 13, तथा राज्यसभा = 7।'
                    ]
                },
                finalAnswer: {
                    en: '(a) Sutlej (Bhakra), Beas (Pong), Ravi (Ranjit Sagar/Thein); confluence at Harike Pattan; (b) 117 Vidhan Sabha, 13 Lok Sabha, 7 Rajya Sabha',
                    pa: '(a) ਸਤਲੁਜ (ਭਾਖੜਾ), ਬਿਆਸ (ਪੌਂਗ), ਰਾਵੀ (ਰਣਜੀਤ ਸਾਗਰ/ਥੀਨ); ਸੰਗਮ ਹਰੀਕੇ ਪੱਤਣ; (b) 117 ਵਿਧਾਨ ਸਭਾ, 13 ਲੋਕ ਸਭਾ, 7 ਰਾਜ ਸਭਾ',
                    hi: '(a) सतलुज (भाखड़ा), ब्यास (पोंग), रावी (रणजीत सागर/थीन); संगम हरिके पत्तन; (b) 117 विधानसभा, 13 लोकसभा, 7 राज्यसभा'
                }
            }
        ],
        flashcards: [
            {
                id: 'ett-sst-fc-1',
                question: {
                    en: 'Name the Panj Pyare baptized by Sri Guru Gobind Singh Ji on Vaisakhi (30 March 1699) at Anandpur Sahib.',
                    pa: 'ਵਿਸਾਖੀ (30 ਮਾਰਚ 1699) ਨੂੰ ਸ੍ਰੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਸਾਜੇ ਗਏ ਪੰਜ ਪਿਆਰਿਆਂ ਦੇ ਨਾਂ ਦੱਸੋ।',
                    hi: 'वैसाखी (30 मार्च 1699) को श्री आनंदपुर साहिब में श्री गुरु गोबिंद सिंह जी द्वारा अमृत छकाए गए पंज प्यारों के नाम बताइए।'
                },
                answer: {
                    en: '1. Bhai Daya Singh (Lahore), 2. Bhai Dharam Singh (Hastinapur), 3. Bhai Himmat Singh (Jagannath Puri), 4. Bhai Mohkam Singh (Dwarka), 5. Bhai Sahib Singh (Bidar).',
                    pa: '1. ਭਾਈ ਦਇਆ ਸਿੰਘ (ਲਾਹੌਰ), 2. ਭਾਈ ਧਰਮ ਸਿੰਘ (ਹਸਤਨਾਪੁਰ), 3. ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ (ਜਗਨਨਾਥ ਪੁਰੀ), 4. ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ (ਦੁਆਰਕਾ), 5. ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ (ਬਿਦਰ)।',
                    hi: '1. भाई दया सिंह (लाहौर), 2. भाई धर्म सिंह (हस्तिनापुर), 3. भाई हिम्मत सिंह (जगन्नाथ पुरी), 4. भाई मोहकम सिंह (द्वारका), 5. भाई साहिब सिंह (बीदर)।'
                }
            },
            {
                id: 'ett-sst-fc-2',
                question: {
                    en: 'Where and in which language did Sri Guru Gobind Singh Ji compose the "Zafarnama" addressed to Emperor Aurangzeb?',
                    pa: 'ਸ੍ਰੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਲਿਖਿਆ "ਜ਼ਫ਼ਰਨਾਮਾ" ਕਿਸ ਸਥਾਨ ਤੇ ਅਤੇ ਕਿਸ ਭਾਸ਼ਾ ਵਿੱਚ ਰਚਿਆ ਸੀ?',
                    hi: 'श्री गुरु गोबिंद सिंह जी ने औरंगज़ेब को संबोधित "ज़फ़रनामा" किस स्थान पर और किस भाषा में लिखा था?'
                },
                answer: {
                    en: 'At Dina Kangar (in present-day Moga district, Punjab) in the Persian (Farsi) language.',
                    pa: 'ਦੀਨਾ ਕਾਂਗੜ (ਜ਼ਿਲ੍ਹਾ ਮੋਗਾ, ਪੰਜਾਬ) ਵਿਖੇ ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਵਿੱਚ।',
                    hi: 'दीना काँगड़ (जिला मोगा, पंजाब) में फ़ारसी भाषा में।'
                }
            },
            {
                id: 'ett-sst-fc-3',
                question: {
                    en: 'To which Sikh Misl did Maharaja Ranjit Singh belong, and when did he capture Lahore and sign the Treaty of Amritsar?',
                    pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਕਿਸ ਸਿੱਖ ਮਿਸਲ ਨਾਲ ਸਬੰਧਤ ਸਨ, ਅਤੇ ਉਹਨਾਂ ਨੇ ਲਾਹੌਰ ਕਦੋਂ ਜਿੱਤਿਆ ਤੇ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ ਕਦੋਂ ਕੀਤੀ?',
                    hi: 'महाराजा रणजीत सिंह किस सिख मिसल से संबंधित थे, तथा उन्होंने लाहौर पर कब अधिकार किया और अमृतसर की संधि कब की?'
                },
                answer: {
                    en: 'Sukerchakia Misl; captured Lahore on 7 July 1799; signed the Treaty of Amritsar with Charles Metcalfe on 25 April 1809.',
                    pa: 'ਸ਼ੁੱਕਰਚੱਕੀਆ ਮਿਸਲ; 7 ਜੁਲਾਈ 1799 ਨੂੰ ਲਾਹੌਰ ਜਿੱਤਿਆ; 25 ਅਪ੍ਰੈਲ 1809 ਨੂੰ ਚਾਰਲਸ ਮੈਟਕਾਫ਼ ਨਾਲ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ ਕੀਤੀ।',
                    hi: 'शुकरचकिया मिसल; 7 जुलाई 1799 को लाहौर जीता; 25 अप्रैल 1809 को चार्ल्स मेटकाफ़ के साथ अमृतसर की संधि की।'
                }
            },
            {
                id: 'ett-sst-fc-4',
                question: {
                    en: 'Which article of the Indian Constitution did Dr. B.R. Ambedkar call the "Heart and Soul of the Constitution", and which amendment added Fundamental Duties?',
                    pa: 'ਡਾ. ਬੀ.ਆਰ. ਅੰਬੇਡਕਰ ਨੇ ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਦੇ ਕਿਸ ਅਨੁਛੇਦ ਨੂੰ "ਸੰਵਿਧਾਨ ਦਾ ਦਿਲ ਅਤੇ ਆਤਮਾ" ਕਿਹਾ, ਅਤੇ ਕਿਸ ਸੋਧ ਰਾਹੀਂ ਮੌਲਿਕ ਕਰਤੱਵ ਜੋੜੇ ਗਏ?',
                    hi: 'डॉ. बी.आर. अम्बेडकर ने भारतीय संविधान के किस अनुच्छेद को "संविधान का हृदय और आत्मा" कहा, और किस संशोधन द्वारा मौलिक कर्तव्य जोड़े गए?'
                },
                answer: {
                    en: 'Article 32 (Right to Constitutional Remedies); Fundamental Duties (Part IVA, Article 51A) were added by the 42nd Constitutional Amendment Act, 1976 (on recommendation of the Swaran Singh Committee).',
                    pa: 'ਅਨੁਛੇਦ 32 (ਸੰਵਿਧਾਨਕ ਉਪਚਾਰਾਂ ਦਾ ਅਧਿਕਾਰ); ਮੌਲਿਕ ਕਰਤੱਵ (ਭਾਗ IVA, ਅਨੁਛੇਦ 51A) 42ਵੀਂ ਸੰਵਿਧਾਨਕ ਸੋਧ (1976, ਸਵਰਨ ਸਿੰਘ ਕਮੇਟੀ ਦੀ ਸਿਫ਼ਾਰਸ਼) ਰਾਹੀਂ ਜੋੜੇ ਗਏ।',
                    hi: 'अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार); मौलिक कर्तव्य (भाग IVA, अनुच्छेद 51A) 42वें संविधान संशोधन (1976, स्वर्ण सिंह समिति की अनुशंसा) द्वारा जोड़े गए।'
                }
            },
            {
                id: 'ett-sst-fc-5',
                question: {
                    en: 'Name the 6 Ramsar Wetlands located in Punjab.',
                    pa: 'ਪੰਜਾਬ ਵਿੱਚ ਸਥਿਤ 6 ਰਾਮਸਰ ਵੈੱਟਲੈਂਡਜ਼ (Ramsar Wetlands) ਦੇ ਨਾਂ ਦੱਸੋ।',
                    hi: 'पंजाब में स्थित 6 रामसर आर्द्रभूमियों (Ramsar Wetlands) के नाम बताइए।'
                },
                answer: {
                    en: '1. Harike Wetland, 2. Kanjli Wetland, 3. Ropar Wetland, 4. Keshopur-Miani Community Reserve, 5. Nangal Wildlife Sanctuary, and 6. Beas Conservation Reserve.',
                    pa: '1. ਹਰੀਕੇ ਪੱਤਣ, 2. ਕਾਂਜਲੀ (ਕਪੂਰਥਲਾ), 3. ਰੋਪੜ, 4. ਕੇਸ਼ੋਪੁਰ-ਮਿਆਣੀ (ਗੁਰਦਾਸਪੁਰ), 5. ਨੰਗਲ, ਅਤੇ 6. ਬਿਆਸ ਕੰਜ਼ਰਵੇਸ਼ਨ ਰਿਜ਼ਰਵ।',
                    hi: '1. हरिके आर्द्रभूमि, 2. कांजली (कपूरथला), 3. रोपड़, 4. केशोपुर-मियानी (गुरदासपुर), 5. नांगल, तथा 6. ब्यास संरक्षण रिजर्व।'
                }
            },
            {
                id: 'ett-sst-fc-6',
                question: {
                    en: 'Which sector of the Indian economy contributes the highest share to GDP, and which sector employs the largest workforce (characterized by disguised unemployment)?',
                    pa: 'ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ ਦਾ ਕਿਹੜਾ ਖੇਤਰ GDP ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਯੋਗਦਾਨ ਪਾਉਂਦਾ ਹੈ, ਅਤੇ ਕਿਹੜਾ ਖੇਤਰ ਸਭ ਤੋਂ ਵੱਧ ਰੁਜ਼ਗਾਰ ਦਿੰਦਾ ਹੈ (ਜਿੱਥੇ ਛੁਪੀ ਹੋਈ ਬੇਰੁਜ਼ਗਾਰੀ ਪਾਈ ਜਾਂਦੀ ਹੈ)?',
                    hi: 'भारतीय अर्थव्यवस्था का कौन-सा क्षेत्रक GDP में सर्वाधिक योगदान देता है, और कौन-सा क्षेत्रक सर्वाधिक रोजगार प्रदान करता है (जहाँ प्रच्छन्न बेरोजगारी पाई जाती है)?'
                },
                answer: {
                    en: 'Tertiary (Service) Sector contributes the highest share to GDP; Primary (Agriculture) Sector employs the largest workforce and exhibits disguised unemployment.',
                    pa: 'ਟਰਸ਼ਰੀ (ਸੇਵਾ) ਖੇਤਰ GDP ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਯੋਗਦਾਨ ਪਾਉਂਦਾ ਹੈ; ਪ੍ਰਾਇਮਰੀ (ਖੇਤੀਬਾੜੀ) ਖੇਤਰ ਸਭ ਤੋਂ ਵੱਧ ਰੁਜ਼ਗਾਰ ਦਿੰਦਾ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਛੁਪੀ ਹੋਈ ਬੇਰੁਜ਼ਗਾਰੀ ਪਾਈ ਜਾਂਦੀ ਹੈ।',
                    hi: 'तृतीयक (सेवा) क्षेत्रक GDP में सर्वाधिक योगदान देता है; प्राथमिक (कृषि) क्षेत्रक सर्वाधिक रोजगार प्रदान करता है और इसमें प्रच्छन्न (छुपी हुई) बेरोजगारी पाई जाती है।'
                }
            }
        ]
    }
];
