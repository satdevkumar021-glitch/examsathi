import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const MASTER_CADRE_MATH_BLUEPRINT_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. MATRICES, DETERMINANTS & LINEAR ALGEBRA
    // =========================================================================
    {
        topicId: 'math-matrices-linear-algebra',
        editorialRecord: {
            lastUpdatedDate: '2026-10-11',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Comprehensive degree-level coverage of Matrices, Determinants, Rank, Eigenvalues, Cayley-Hamilton Theorem, and Systems of Linear Equations for Punjab Master Cadre Math (150 Marks).'
        },
        bookRefs: [
            {
                title: 'Higher Algebra & Linear Algebra',
                author: 'S. Chand / Dr. M.D. Raisinghania / Shanti Narayan',
                chapter: 'Matrices, Rank of Matrix, Characteristic Roots & Vectors',
                relevance: 'Standard text for B.Sc. Mathematics & Punjab Master Cadre examination.'
            }
        ],
        summary: {
            en: `### [Level B → I → A: Matrices, Determinants & Linear Algebra]
1. **Special Types of Matrices:**
   - **Symmetric Matrix:** $A^T = A$ ($a_{ij} = a_{ji}$).
   - **Skew-Symmetric Matrix:** $A^T = -A$ ($a_{ij} = -a_{ji}$; all diagonal elements $a_{ii} = 0$). Every square matrix $A$ can be uniquely decomposed as $A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$.
   - **Hermitian Matrix:** $A^\\dagger = (\\bar{A})^T = A$. Diagonal elements are strictly real.
   - **Skew-Hermitian Matrix:** $A^\\dagger = -A$. Diagonal elements are either purely imaginary or zero.
   - **Orthogonal Matrix:** $A A^T = A^T A = I \\implies A^{-1} = A^T$, $|A| = \\pm 1$.
   - **Unitary Matrix:** $A A^\\dagger = A^\\dagger A = I \\implies |A| = e^{i\\theta}$ ($|\\det A| = 1$).
   - **Idempotent:** $A^2 = A$ (Eigenvalues are $0$ or $1$).
   - **Involutory:** $A^2 = I \\implies A^{-1} = A$.
   - **Nilpotent:** $A^k = O$ for some positive integer $k$ (Eigenvalues are all $0$).

2. **Rank & Systems of Linear Equations:**
   - **Rank $\\rho(A)$:** Maximum number of linearly independent row or column vectors. In Echelon form, $\\rho(A) = \\text{number of non-zero rows}$. $\\rho(AB) \\le \\min(\\rho(A), \\rho(B))$.
   - **Non-Homogeneous System $AX = B$:**
     * **Consistent (Unique Solution):** $\\rho(A) = \\rho([A|B]) = n$ (where $n = \\text{number of variables}$).
     * **Consistent (Infinitely Many Solutions):** $\\rho(A) = \\rho([A|B]) = r < n$ ($n - r$ linearly independent solutions).
     * **Inconsistent (No Solution):** $\\rho(A) < \\rho([A|B])$.
   - **Homogeneous System $AX = 0$:** Always consistent ($X = 0$ is trivial solution). Has non-trivial (non-zero) solutions if and only if $|A| = 0$ (i.e. $\\rho(A) < n$).

3. **Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem:**
   - **Characteristic Equation:** $|A - \\lambda I| = 0$.
   - **Properties:**
     * $\\sum \\lambda_i = \\text{Trace}(A) = \\sum a_{ii}$.
     * $\\prod \\lambda_i = \\det(A) = |A|$.
     * Eigenvalues of Hermitian & Real Symmetric matrices are **strictly real**.
     * Eigenvalues of Skew-Hermitian & Real Skew-Symmetric matrices are **purely imaginary or zero**.
     * Eigenvalues of Unitary & Orthogonal matrices have **unit modulus** ($|\\lambda| = 1$).
   - **Cayley-Hamilton Theorem:** Every square matrix satisfies its own characteristic equation: $P(A) = O$.
     * Allows direct computation of $A^{-1} = -\\frac{1}{a_0}(A^{n-1} + a_1 A^{n-2} + \\dots + a_{n-1}I)$ and higher powers $A^m$.`,
            pa: `### [Level B → I → A: ਮੈਟ੍ਰਿਕਸ, ਡਿਟਰਮੀਨੈਂਟ ਅਤੇ ਲੀਨੀਅਰ ਅਲਜਬਰਾ]
1. **ਮੈਟ੍ਰਿਕਸਾਂ ਦੀਆਂ ਵਿਸ਼ੇਸ਼ ਕਿਸਮਾਂ:**
   - **ਸਿਮਟ੍ਰਿਕ ਮੈਟ੍ਰਿਕਸ (Symmetric):** $A^T = A$।
   - **ਸਕਿਊ-ਸਿਮਟ੍ਰਿਕ (Skew-Symmetric):** $A^T = -A$ (ਮੁੱਖ ਡਾਇਗਨਲ ਦੇ ਸਾਰੇ ਤੱਤ $0$ ਹੁੰਦੇ ਹਨ)।
   - **ਹਰਮੀਸ਼ੀਅਨ (Hermitian):** $(\\bar{A})^T = A$ (ਡਾਇਗਨਲ ਤੱਤ ਵਾਸਤਵਿਕ/Real ਹੁੰਦੇ ਹਨ)।
   - **ਆਰਥੋਗੋਨਲ (Orthogonal):** $A A^T = I \\implies A^{-1} = A^T$, $|A| = \\pm 1$।
   - **ਆਈਡਮਪੋਟੈਂਟ (Idempotent):** $A^2 = A$। ਆਈਗਨ ਮੁੱਲ (Eigenvalues) $0$ ਜਾਂ $1$ ਹੁੰਦੇ ਹਨ।
2. **ਕੈਲੇ-ਹੈਮਿਲਟਨ ਪ੍ਰਮੇਯ (Cayley-Hamilton Theorem):** ਹਰੇਕ ਵਰਗ ਮੈਟ੍ਰਿਕਸ ਆਪਣੀ ਵਿਸ਼ੇਸ਼ਤਾ ਸਮੀਕਰਨ (Characteristic Equation) $|A - \\lambda I| = 0$ ਨੂੰ ਸੰਤੁਸ਼ਟ ਕਰਦਾ ਹੈ।`,
            hi: `### [Level B → I → A: आव्यूह, सारणिक एवं रैखिक बीजगणित]
1. **आव्यूह के महत्वपूर्ण प्रकार:**
   - **सममित आव्यूह (Symmetric):** $A^T = A$।
   - **विषम सममित आव्यूह (Skew-Symmetric):** $A^T = -A$ (मुख्य विकर्ण के सभी अवयव शून्य होते हैं)।
   - **लंबकोणीय आव्यूह (Orthogonal):** $A A^T = I \\implies A^{-1} = A^T$, $|A| = \\pm 1$।
   - **हर्मिटीय आव्यूह (Hermitian):** $A^\\dagger = A$ (विकर्ण के सभी अवयव वास्तविक होते हैं)।
2. **आइगेन मान (Eigenvalues) के गुण:**
   - आइगेन मानों का योग = आव्यूह का ट्रेस $\\text{Trace}(A)$।
   - आइगेन मानों का गुणनफल = आव्यूह का सारणिक $\\det(A)$।
   - सममित एवं हर्मिटीय आव्यूहों के सभी आइगेन मान सदैव **वास्तविक** होते हैं।
3. **कैले-हैमिल्टन प्रमेय (Cayley-Hamilton Theorem):** प्रत्येक वर्ग आव्यूह अपने अभिलाक्षणिक समीकरण $|A - \\lambda I| = 0$ को संतुष्ट करता है।`
        },
        keyNotes: {
            en: [
                'Rank of a matrix is invariant under elementary row/column transformations.',
                'A square matrix A is invertible iff det(A) != 0 (full rank).',
                'Eigenvalues of triangular or diagonal matrices are simply the main diagonal entries.',
                'Similar matrices have identical characteristic polynomials, eigenvalues, determinant, and trace.',
                'Cayley-Hamilton theorem gives an exact closed form for matrix inverse and polynomial powers.'
            ],
            pa: [
                'ਐਲੀਮੈਂਟਰੀ ਕਾਰਵਾਈਆਂ ਨਾਲ ਮੈਟ੍ਰਿਕਸ ਦਾ ਰੈਂਕ ਨਹੀਂ ਬਦਲਦਾ।',
                'ਵਰਗ ਮੈਟ੍ਰਿਕਸ ਦਾ ਇਨਵਰਸ ਤਾਂ ਹੀ ਸੰਭਵ ਹੈ ਜੇਕਰ |A| != 0 ਹੋਵੇ।',
                'ਡਾਇਗਨਲ ਜਾਂ ਤਿਕੋਣੀ ਮੈਟ੍ਰਿਕਸ ਦੇ ਆਈਗਨ ਮੁੱਲ ਸਿੱਧੇ ਡਾਇਗਨਲ ਤੱਤ ਹੁੰਦੇ ਹਨ।',
                'ਕੈਲੇ-ਹੈਮਿਲਟਨ ਪ੍ਰਮੇਯ ਰਾਹੀਂ A^-1 ਆਸਾਨੀ ਨਾਲ ਲੱਭਿਆ ਜਾ ਸਕਦਾ ਹੈ।'
            ],
            hi: [
                'प्रारंभिक पंक्ति रूपांतरणों से आव्यूह की कोटि (Rank) अपरिवर्तित रहती है।',
                'वर्ग आव्यूह का व्युत्क्रम तभी संभव है जब |A| != 0 हो।',
                'विकर्ण अथवा त्रिभुजीय आव्यूह के आइगेन मान सीधे मुख्य विकर्ण के अवयव होते हैं।',
                'कैले-हैमिल्टन प्रमेय से आव्यूह व्युत्क्रम एवं उच्च घातें सरलता से ज्ञात की जा सकती हैं।'
            ]
        },
        flashcards: [
            {
                id: 'fc-math-mat-1',
                question: {
                    en: 'What is the sum and product of the eigenvalues of a square matrix A?',
                    pa: 'ਮੈਟ੍ਰਿਕਸ A ਦੇ ਆਈਗਨ ਮੁੱਲਾਂ ਦਾ ਜੋੜ ਅਤੇ ਗੁਣਨਫਲ ਕੀ ਹੁੰਦਾ ਹੈ?',
                    hi: 'आव्यूह A के आइगेन मानों का योग एवं गुणनफल क्या होता है?'
                },
                answer: {
                    en: 'Sum of eigenvalues = Trace(A) (sum of diagonal entries); Product of eigenvalues = det(A).',
                    pa: 'ਜੋੜ = Trace(A) (ਡਾਇਗਨਲ ਤੱਤਾਂ ਦਾ ਜੋੜ); ਗੁਣਨਫਲ = det(A)।',
                    hi: 'योग = Trace(A) (विकर्ण अवयवों का योग); गुणनफल = det(A)।'
                }
            },
            {
                id: 'fc-math-mat-2',
                question: {
                    en: 'Under what condition does the homogeneous system AX = 0 possess non-trivial (non-zero) solutions?',
                    pa: 'ਹੋਮੋਜੀਨੀਅਸ ਸਿਸਟਮ AX = 0 ਦੇ ਗੈਰ-ਸਿਫ਼ਰ (Non-trivial) ਹੱਲ ਕਦੋਂ ਹੁੰਦੇ ਹਨ?',
                    hi: 'समानुपाती निकाय AX = 0 के गैर-शून्य (Non-trivial) हल कब होते हैं?'
                },
                answer: {
                    en: 'When det(A) = 0 (i.e. rank(A) < n, where n is number of variables).',
                    pa: 'ਜਦੋਂ det(A) = 0 ਹੋਵੇ (ਭਾਵ ਰੈਂਕ ਵੇਰੀਏਬਲਾਂ ਦੀ ਗਿਣਤੀ n ਤੋਂ ਘੱਟ ਹੋਵੇ)।',
                    hi: 'जब det(A) = 0 हो (अर्थात आव्यूह की कोटि चर राशियों की संख्या n से कम हो)।'
                }
            },
            {
                id: 'fc-math-mat-3',
                question: {
                    en: 'What are the possible eigenvalues of an Idempotent matrix (A² = A) and Involutory matrix (A² = I)?',
                    pa: 'ਆਈਡਮਪੋਟੈਂਟ (A² = A) ਅਤੇ ਇਨਵੋਲਿਊਟਰੀ (A² = I) ਮੈਟ੍ਰਿਕਸ ਦੇ ਆਈਗਨ ਮੁੱਲ ਕੀ ਹੁੰਦੇ ਹਨ?',
                    hi: 'वर्गसम (A² = A) एवं अंतर्वलनी (A² = I) आव्यूह के आइगेन मान क्या होते हैं?'
                },
                answer: {
                    en: 'Idempotent: λ = 0 or 1; Involutory: λ = +1 or -1.',
                    pa: 'Idempotent: λ = 0 ਜਾਂ 1; Involutory: λ = +1 ਜਾਂ -1।',
                    hi: 'Idempotent: λ = 0 या 1; Involutory: λ = +1 या -1।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. DIFFERENTIAL CALCULUS & PARTIAL DIFFERENTIATION
    // =========================================================================
    {
        topicId: 'math-differential-calculus',
        editorialRecord: {
            lastUpdatedDate: '2026-10-11',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Degree-level Differential Calculus: Rolle’s Theorem, LMVT, Leibniz Rule, Euler’s Theorem for Homogeneous Functions, Curvature, Asymptotes, and Maxima/Minima of Two Variables.'
        },
        bookRefs: [
            {
                title: 'Differential Calculus',
                author: 'Shanti Narayan & P.K. Mittal',
                chapter: 'Successive Differentiation, Mean Value Theorems, Partial Differentiation & Curvature',
                relevance: 'Standard university curriculum textbook for Master Cadre Math.'
            }
        ],
        summary: {
            en: `### [Level B → I → A: Differential Calculus & Partial Derivatives]
1. **Fundamental Mean Value Theorems:**
   - **Rolle’s Theorem:** If $f(x)$ is continuous in $[a, b]$, differentiable in $(a, b)$, and $f(a) = f(b)$, then $\\exists c \\in (a, b)$ such that $f'(c) = 0$.
   - **Lagrange’s Mean Value Theorem (LMVT):** If continuous in $[a, b]$ and differentiable in $(a, b)$, then $\\exists c \\in (a, b)$ such that $f'(c) = \\frac{f(b) - f(a)}{b - a}$.
   - **Cauchy’s Mean Value Theorem:** $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$.

2. **Successive Differentiation & Leibniz’s Theorem:**
   - **$n$-th Derivative of $uv$:** $(uv)_n = \\sum_{r=0}^n \\binom{n}{r} u_{n-r} v_r = u_n v + n u_{n-1} v_1 + \\frac{n(n-1)}{2!} u_{n-2} v_2 + \\dots + u v_n$.
   - **Standard $n$-th Derivatives:**
     * $\\frac{d^n}{dx^n} [e^{ax}] = a^n e^{ax}$.
     * $\\frac{d^n}{dx^n} [\\sin(ax + b)] = a^n \\sin\\left(ax + b + \\frac{n\\pi}{2}\\right)$.
     * $\\frac{d^n}{dx^n} [(ax + b)^m] = m(m-1)\\dots(m-n+1) a^n (ax+b)^{m-n} = \\frac{m!}{(m-n)!} a^n (ax+b)^{m-n}$.

3. **Partial Differentiation & Euler’s Theorem:**
   - **Euler’s Theorem for Homogeneous Function of Degree $n$:** If $u = f(x, y)$ is homogeneous of degree $n$, then:
     $$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u$$
     $$x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = n(n - 1) u$$
   - **Extended Case:** If $f(u)$ is homogeneous of degree $n$ in $x, y$, then $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n \\frac{f(u)}{f'(u)}$.

4. **Curvature & Maxima/Minima of Two Variables:**
   - **Radius of Curvature:** Cartesian $\\rho = \\frac{[1 + (y')^2]^{3/2}}{|y''|}$; Parametric $\\rho = \\frac{(\\dot{x}^2 + \\dot{y}^2)^{3/2}}{|\\dot{x}\\ddot{y} - \\dot{y}\\ddot{x}|}$.
   - **Two-Variable Extrema:** Critical points where $f_x = 0, f_y = 0$. Let $r = f_{xx}, s = f_{xy}, t = f_{yy}$.
     * $rt - s^2 > 0$ and $r < 0 \\implies$ **Local Maximum**.
     * $rt - s^2 > 0$ and $r > 0 \\implies$ **Local Minimum**.
     * $rt - s^2 < 0 \\implies$ **Saddle Point** (Neither max nor min).
     * $rt - s^2 = 0 \\implies$ **Inconclusive** (Further investigation needed).`,
            pa: `### [Level B → I → A: ਡਿਫਰੈਂਸ਼ੀਅਲ ਕੈਲਕੂਲਸ ਅਤੇ ਪਾਰਸ਼ਲ ਡੈਰੀਵੇਟਿਵ]
1. **ਮੱਧ ਮੁੱਲ ਪ੍ਰਮੇਯ (Mean Value Theorems):**
   - **ਰੋਲ ਦਾ ਪ੍ਰਮੇਯ (Rolle’s Theorem):** ਜੇਕਰ $f(a) = f(b)$ ਹੋਵੇ, ਤਾਂ $(a, b)$ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਬਿੰਦੂ $c$ ਅਜਿਹਾ ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ $f'(c) = 0$।
   - **ਲੈਗ੍ਰਾਂਜ ਦਾ LMVT:** $f'(c) = \\frac{f(b) - f(a)}{b - a}$।
2. **ਯੂਲਰ ਦਾ ਹੋਮੋਜੀਨੀਅਸ ਫੰਕਸ਼ਨ ਪ੍ਰਮੇਯ (Euler’s Theorem):** ਜੇਕਰ $u(x, y)$ ਡਿਗਰੀ $n$ ਦਾ ਹੋਮੋਜੀਨੀਅਸ ਫੰਕਸ਼ਨ ਹੈ, ਤਾਂ $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u$।
3. **ਕਰਵੇਚਰ ਦਾ ਰੇਡੀਅਸ (Radius of Curvature):** $\\rho = \\frac{(1 + y'^2)^{3/2}}{|y''|}$।`,
            hi: `### [Level B → I → A: अवकलन गणित एवं आंशिक अवकलन]
1. **मध्यमान प्रमेय (Mean Value Theorems):**
   - **रोल प्रमेय (Rolle’s Theorem):** यदि $f(a) = f(b)$, तो अंतराल $(a, b)$ में कम से कम एक बिंदु $c$ ऐसा होगा जहां $f'(c) = 0$।
   - **लैग्रेंज मध्यमान प्रमेय (LMVT):** $f'(c) = \\frac{f(b) - f(a)}{b - a}$।
2. **यूलर का प्रमेय (Euler’s Theorem for Homogeneous Functions):** यदि $u(x, y)$ घात $n$ का समघात फलन है, तो $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u$।
3. **दो चरों के उच्चिष्ठ व निम्निष्ठ (Maxima & Minima):** $r = f_{xx}, s = f_{xy}, t = f_{yy}$। यदि $rt - s^2 > 0$ तथा $r < 0$ तो **उच्चिष्ठ**; यदि $r > 0$ तो **निम्निष्ठ**; यदि $rt - s^2 < 0$ तो **काठी बिंदु (Saddle Point)**।`
        },
        keyNotes: {
            en: [
                'Leibniz theorem is used to compute higher order derivatives of product of two functions.',
                'Euler theorem on homogeneous functions simplifies partial derivative evaluations directly from degree n.',
                'Radius of curvature for a circle of radius R is constant and equals R.',
                'Saddle point occurs when determinant of Hessian matrix is negative (rt - s² < 0).'
            ],
            pa: [
                'ਲੈਬਨਿਜ਼ ਨਿਯਮ ਦੋ ਫੰਕਸ਼ਨਾਂ ਦੇ ਗੁਣਨਫਲ ਦਾ n-ਵਾਂ ਡੈਰੀਵੇਟਿਵ ਕੱਢਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।',
                'ਯੂਲਰ ਥਿਊਰਮ ਨਾਲ ਪਾਰਸ਼ਲ ਡੈਰੀਵੇਟਿਵਜ਼ ਦਾ ਮੁੱਲ ਸਿੱਧਾ ਡਿਗਰੀ n ਤੋਂ ਮਿਲਦਾ ਹੈ।',
                'ਸਰਕਲ ਦਾ ਕਰਵੇਚਰ ਰੇਡੀਅਸ ਹਮੇਸ਼ਾ ਉਸਦੇ ਰੇਡੀਅਸ R ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'लैबनीज प्रमेय दो फलनों के गुणनफल का n-वां अवकलज निकालने के काम आता है।',
                'यूलर प्रमेय से समघात फलनों के आंशिक अवकलजों का योग सीधे घात n से प्राप्त होता है।',
                'वृत्त की वक्रता त्रिज्या सदैव उसकी त्रिज्या R के बराबर होती है।'
            ]
        },
        flashcards: [
            {
                id: 'fc-math-diff-1',
                question: {
                    en: 'State Euler’s theorem for a homogeneous function u(x, y) of degree n.',
                    pa: 'ਡਿਗਰੀ n ਦੇ ਹੋਮੋਜੀਨੀਅਸ ਫੰਕਸ਼ਨ u(x, y) ਲਈ ਯੂਲਰ ਦਾ ਪ੍ਰਮੇਯ ਕੀ ਹੈ?',
                    hi: 'घात n के समघात फलन u(x, y) के लिए यूलर का प्रमेय क्या है?'
                },
                answer: {
                    en: 'x (∂u/∂x) + y (∂u/∂y) = n u.',
                    pa: 'x (∂u/∂x) + y (∂u/∂y) = n u।',
                    hi: 'x (∂u/∂x) + y (∂u/∂y) = n u।'
                }
            },
            {
                id: 'fc-math-diff-2',
                question: {
                    en: 'What is the formula for the radius of curvature ρ in Cartesian coordinates?',
                    pa: 'ਕਾਰਟੀਸ਼ੀਅਨ ਨਿਰਦੇਸ਼ਾਂਕਾਂ ਵਿੱਚ ਕਰਵੇਚਰ ਰੇਡੀਅਸ ρ ਦਾ ਫਾਰਮੂਲਾ ਕੀ ਹੈ?',
                    hi: 'कार्तीय निर्देशांकों में वक्रता त्रिज्या ρ का सूत्र क्या है?'
                },
                answer: {
                    en: 'ρ = [1 + (y\')²]^(3/2) / |y\'\'|.',
                    pa: 'ρ = [1 + (y\')²]^(3/2) / |y\'\'|।',
                    hi: 'ρ = [1 + (y\')²]^(3/2) / |y\'\'|।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. INTEGRAL CALCULUS & MULTIPLE INTEGRALS
    // =========================================================================
    {
        topicId: 'math-integral-calculus',
        editorialRecord: {
            lastUpdatedDate: '2026-10-11',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Definite Integrals, Reduction Formulas, Beta and Gamma Functions, Double & Triple Integrals, Area, and Volume of Revolution.'
        },
        bookRefs: [
            {
                title: 'Integral Calculus',
                author: 'Shanti Narayan & Dr. M.D. Raisinghania',
                chapter: 'Definite Integrals, Beta & Gamma Functions, Multiple Integrals',
                relevance: 'Essential for Master Cadre Math integration techniques.'
            }
        ],
        summary: {
            en: `### [Level B → I → A: Integral Calculus & Beta-Gamma Functions]
1. **Definite Integral Properties & Walli’s Formula:**
   - **King’s Property:** $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$.
   - **Periodic Functions:** If $f(x + T) = f(x)$, then $\\int_0^{nT} f(x) dx = n \\int_0^T f(x) dx$.
   - **Wallis’ Formula:**
     $$\\int_0^{\\pi/2} \\sin^m x \\cos^n x \\, dx = \\frac{\\Gamma\\left(\\frac{m+1}{2}\\right) \\Gamma\\left(\\frac{n+1}{2}\\right)}{2 \\Gamma\\left(\\frac{m+n+2}{2}\\right)}$$
     * For $\\int_0^{\\pi/2} \\sin^n x \\, dx$: $\\frac{n-1}{n} \\cdot \\frac{n-3}{n-2} \\cdots \\times \\left(\\frac{\\pi}{2} \\text{ if } n \\text{ is even}, 1 \\text{ if } n \\text{ is odd}\\right)$.

2. **Beta & Gamma Functions:**
   - **Definitions:**
     * $\\Gamma(n) = \\int_0^\\infty e^{-x} x^{n-1} dx \\quad (n > 0)$.
     * $\\text{B}(m, n) = \\int_0^1 x^{m-1} (1-x)^{n-1} dx = 2 \\int_0^{\\pi/2} \\sin^{2m-1}\\theta \\cos^{2n-1}\\theta \\, d\\theta$.
   - **Core Relations:**
     * $\\Gamma(n+1) = n\\Gamma(n) = n!$ (for integer $n$).
     * $\\Gamma(1/2) = \\sqrt{\\pi}$.
     * $\\text{B}(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}$.
     * Reflection Formula: $\\Gamma(p) \\Gamma(1-p) = \\frac{\\pi}{\\sin(p\\pi)} \\quad (0 < p < 1)$.
     * Duplication Formula: $\\Gamma(m) \\Gamma\\left(m + \\frac{1}{2}\\right) = \\frac{\\sqrt{\\pi}}{2^{2m-1}} \\Gamma(2m)$.

3. **Multiple Integrals & Applications:**
   - **Double Integral in Polar Coordinates:** $dx \\, dy = r \\, dr \\, d\\theta$.
   - **Area & Volume of Revolution:**
     * Area between curves: $A = \\int_a^b (y_2 - y_1) dx$.
     * Volume about $x$-axis: $V = \\pi \\int_a^b y^2 dx$.
     * Volume about $y$-axis: $V = \\pi \\int_c^d x^2 dy$.`,
            pa: `### [Level B → I → A: ਇੰਟੈਗਰਲ ਕੈਲਕੂਲਸ ਅਤੇ ਬੀਟਾ-ਗਾਮਾ ਫੰਕਸ਼ਨ]
1. **ਬੀਟਾ ਅਤੇ ਗਾਮਾ ਫੰਕਸ਼ਨਜ਼:**
   - $\\Gamma(n+1) = n!$, $\\Gamma(1/2) = \\sqrt{\\pi}$।
   - $\\text{B}(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}$।
2. **ਘੁੰਮਣਸ਼ੀਲ ਠੋਸ ਦਾ ਵਾਲੀਅਮ (Volume of Revolution):** $x$-ਧੁਰੇ ਦੁਆਲੇ ਘੁੰਮਾਉਣ ਤੇ $V = \\pi \\int_a^b y^2 dx$।`,
            hi: `### [Level B → I → A: समाकलन गणित एवं बीटा-गामा फलन]
1. **बीटा एवं गामा फलन:**
   - $\\Gamma(n+1) = n!$, $\\Gamma(1/2) = \\sqrt{\\pi}$।
   - $\\text{B}(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}$।
   - वालिस सूत्र: $\\int_0^{\\pi/2} \\sin^m x \\cos^n x dx = \\frac{\\Gamma((m+1)/2) \\Gamma((n+1)/2)}{2 \\Gamma((m+n+2)/2)}$।
2. **परिक्रमण ठोस का आयतन (Volume of Revolution):** $x$-अक्ष के परितः $V = \\pi \\int_a^b y^2 dx$।`
        },
        keyNotes: {
            en: [
                'Gamma(1/2) = sqrt(pi) is frequently tested in Master Cadre.',
                'Beta function is symmetric: B(m, n) = B(n, m).',
                'Change of order of integration in double integrals requires sketching the exact bounding region.',
                'Volume of revolution about x-axis equals pi * integral(y^2 dx).'
            ],
            pa: [
                'Gamma(1/2) = sqrt(pi) ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਬਹੁਤ ਵਾਰ ਪੁੱਛਿਆ ਜਾਂਦਾ ਹੈ।',
                'ਬੀਟਾ ਫੰਕਸ਼ਨ ਸਿਮਟ੍ਰਿਕ ਹੁੰਦਾ ਹੈ: B(m, n) = B(n, m)।'
            ],
            hi: [
                'Gamma(1/2) = sqrt(pi) परीक्षा में बार-बार पूछा जाता है।',
                'बीटा फलन सममित होता है: B(m, n) = B(n, m)।'
            ]
        },
        flashcards: [
            {
                id: 'fc-math-int-1',
                question: {
                    en: 'What is the value of Γ(1/2) and the relation between Beta and Gamma functions?',
                    pa: 'Γ(1/2) ਦਾ ਮੁੱਲ ਅਤੇ ਬੀਟਾ-ਗਾਮਾ ਸੰਬੰਧ ਕੀ ਹੈ?',
                    hi: 'Γ(1/2) का मान एवं बीटा-गामा फलन का संबंध क्या है?'
                },
                answer: {
                    en: 'Γ(1/2) = √π, and B(m, n) = [Γ(m) Γ(n)] / Γ(m + n).',
                    pa: 'Γ(1/2) = √π, ਅਤੇ B(m, n) = [Γ(m) Γ(n)] / Γ(m + n)।',
                    hi: 'Γ(1/2) = √π, तथा B(m, n) = [Γ(m) Γ(n)] / Γ(m + n)।'
                }
            }
        ]
    },

    // =========================================================================
    // 4. DIFFERENTIAL EQUATIONS
    // =========================================================================
    {
        topicId: 'math-differential-equations',
        editorialRecord: {
            lastUpdatedDate: '2026-10-11',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'First order ODEs, Exact equations, Integrating factors, Linear ODEs with constant coefficients, and Cauchy-Euler equations.'
        },
        bookRefs: [
            {
                title: 'Ordinary Differential Equations',
                author: 'Dr. M.D. Raisinghania',
                chapter: 'First Order ODEs, Higher Order Linear ODEs, Cauchy-Euler Equations',
                relevance: 'Standard university textbook.'
            }
        ],
        summary: {
            en: `### [Level B → I → A: Differential Equations]
1. **First Order ODE & Exact Equations:**
   - **Linear Form:** $\\frac{dy}{dx} + P(x)y = Q(x) \\implies \\text{I.F.} = e^{\\int P dx}$, Solution: $y \\cdot \\text{I.F.} = \\int Q \\cdot \\text{I.F.} dx + C$.
   - **Exact Equation $M dx + N dy = 0$:** Exact iff $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$. Solution: $\\int M dx (y \\text{ const}) + \\int (N \\text{ terms free from } x) dy = C$.
   - **Integrating Factors (I.F.):**
     * If $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = f(x) \\implies \\text{I.F.} = e^{\\int f(x) dx}$.
     * If $\\frac{1}{M}\\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) = g(y) \\implies \\text{I.F.} = e^{\\int g(y) dy}$.
     * Homogeneous $M dx + N dy = 0 \\implies \\text{I.F.} = \\frac{1}{Mx + Ny}$ (provided $Mx + Ny \\ne 0$).

2. **Higher Order Linear ODEs with Constant Coefficients:**
   - General Solution = Complementary Function (C.F.) + Particular Integral (P.I.).
   - **Complementary Function (C.F.) for $f(D)y = 0$:**
     * Distinct roots $m_1, m_2$: $y = c_1 e^{m_1 x} + c_2 e^{m_2 x}$.
     * Repeated roots $m, m$: $y = (c_1 + c_2 x) e^{mx}$.
     * Complex roots $\\alpha \\pm i\\beta$: $y = e^{\\alpha x} (c_1 \\cos \\beta x + c_2 \\sin \\beta x)$.
   - **Particular Integral (P.I.) for $f(D)y = X$:**
     * $X = e^{ax} \\implies \\text{P.I.} = \\frac{1}{f(a)} e^{ax}$ ($f(a) \\ne 0$).
     * $X = \\sin(ax)$ or $\\cos(ax) \\implies$ Replace $D^2 \\to -a^2$ in $f(D^2)$.
     * $X = x^m \\implies$ Expand $[f(D)]^{-1}$ in ascending powers of $D$.

3. **Cauchy-Euler Equidimensional Equation:**
   - Form: $x^2 \\frac{d^2y}{dx^2} + p x \\frac{dy}{dx} + q y = f(x)$.
   - Substitution: $x = e^z$ ($z = \\ln x$), $x \\frac{d}{dx} = D_z$, $x^2 \\frac{d^2}{dx^2} = D_z(D_z - 1)$. Transforms into linear ODE with constant coefficients.`,
            pa: `### [Level B → I → A: ਡਿਫਰੈਂਸ਼ੀਅਲ ਸਮੀਕਰਨ (Differential Equations)]
1. **ਲੀਨੀਅਰ ਅਤੇ ਐਗਜ਼ੈਕਟ ਸਮੀਕਰਨ:**
   - $\\frac{dy}{dx} + Py = Q \\implies \\text{I.F.} = e^{\\int P dx}$।
   - $M dx + N dy = 0$ ਐਗਜ਼ੈਕਟ ਹੁੰਦੀ ਹੈ ਜੇਕਰ $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$।
2. **ਕਾਚੀ-ਯੂਲਰ ਸਮੀਕਰਨ:** $x = e^z$ ਮੰਨ ਕੇ ਇਸਨੂੰ ਸਥਿਰ ਗੁਣਾਂਕਾਂ ਵਾਲੀ ਸਮੀਕਰਨ ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ।`,
            hi: `### [Level B → I → A: अवकल समीकरण (Differential Equations)]
1. **रैखिक एवं यथार्थ अवकल समीकरण:**
   - $\\frac{dy}{dx} + Py = Q \\implies \\text{I.F.} = e^{\\int P dx}$।
   - $M dx + N dy = 0$ यथार्थ (Exact) होगी यदि $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$।
2. **उच्च कोटि रैखिक समीकरण:** कुल हल = पूरक फलन (C.F.) + विशेष समाकल (P.I.)।`
        },
        keyNotes: {
            en: [
                'Integrating factor for dy/dx + Py = Q is e^(integral P dx).',
                'Condition for exactness of M dx + N dy = 0 is dM/dy = dN/dx.',
                'For Cauchy-Euler equations, substitution x = e^z transforms variable coefficients to constants.'
            ],
            pa: [
                'ਐਗਜ਼ੈਕਟ ਸਮੀਕਰਨ ਲਈ ਸ਼ਰਤ dM/dy = dN/dx ਹੈ।',
                'ਕਾਚੀ-ਯੂਲਰ ਸਮੀਕਰਨ ਵਿੱਚ x = e^z ਲਿਆ ਜਾਂਦਾ ਹੈ।'
            ],
            hi: [
                'यथार्थ समीकरण के लिए अनिवार्य शर्त dM/dy = dN/dx है।',
                'कॉशी-यूलर समीकरण में x = e^z प्रतिस्थापन किया जाता है।'
            ]
        },
        flashcards: [
            {
                id: 'fc-math-ode-1',
                question: {
                    en: 'What is the necessary and sufficient condition for M dx + N dy = 0 to be exact?',
                    pa: 'M dx + N dy = 0 ਦੇ ਐਗਜ਼ੈਕਟ (Exact) ਹੋਣ ਦੀ ਸ਼ਰਤ ਕੀ ਹੈ?',
                    hi: 'M dx + N dy = 0 के यथार्थ (Exact) होने की शर्त क्या है?'
                },
                answer: {
                    en: '∂M/∂y = ∂N/∂x.',
                    pa: '∂M/∂y = ∂N/∂x।',
                    hi: '∂M/∂y = ∂N/∂x।'
                }
            }
        ]
    },

    // =========================================================================
    // 5. ABSTRACT ALGEBRA & GROUP THEORY
    // =========================================================================
    {
        topicId: 'math-abstract-algebra-groups',
        editorialRecord: {
            lastUpdatedDate: '2026-10-11',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Groups, Subgroups, Lagrange’s Theorem, Normal Subgroups, Cyclic Groups, and Homomorphisms.'
        },
        bookRefs: [
            {
                title: 'Contemporary Abstract Algebra',
                author: 'Joseph A. Gallian',
                chapter: 'Groups, Cyclic Groups, Cosets, Lagrange Theorem & Homomorphisms',
                relevance: 'Standard university curriculum for Master Cadre Math.'
            }
        ],
        summary: {
            en: `### [Level B → I → A: Abstract Algebra & Group Theory]
1. **Groups & Subgroups:**
   - **Group $(G, *)$:** Closure, Associativity, Identity ($e$), Inverse ($a^{-1}$).
   - **Abelian Group:** $a * b = b * a$ for all $a, b \\in G$.
   - **Order of Element $O(a)$:** Least positive integer $n$ such that $a^n = e$. If no such $n$ exists, $O(a) = \\infty$.
   - **Subgroup Test:** $H \\le G$ iff $\\forall a, b \\in H \\implies a b^{-1} \\in H$.

2. **Lagrange’s Theorem & Cyclic Groups:**
   - **Lagrange’s Theorem:** For any finite group $G$ and subgroup $H \\le G$, the order of $H$ divides the order of $G$: $|H| \\mid |G|$.
   - **Corollaries:**
     * Order of any element $a \\in G$ divides $|G|$: $O(a) \\mid |G| \\implies a^{|G|} = e$.
     * Every group of prime order $p$ is strictly **cyclic and abelian**.
     * **Fermat’s Little Theorem:** $a^p \\equiv a \\pmod p$ for prime $p$.
     * **Euler’s Totient Theorem:** $a^{\\phi(n)} \\equiv 1 \\pmod n$ if $\\gcd(a, n) = 1$.
   - **Cyclic Groups:** A group generated by a single element $G = \\langle a \\rangle$.
     * Every cyclic group is abelian.
     * Number of generators of a finite cyclic group of order $n$ is $\\phi(n)$ (Euler’s totient function).

3. **Normal Subgroups & Homomorphisms:**
   - **Normal Subgroup $N \\triangleleft G$:** $g n g^{-1} \\in N$ for all $g \\in G, n \\in N$ (left cosets equal right cosets: $gN = Ng$).
   - **Quotient Group $G/N$:** Has order $|G/N| = |G|/|N|$.
   - **First Isomorphism Theorem:** If $\\phi: G \\to G'$ is a group homomorphism, then $G/\\ker(\\phi) \\cong \\text{Im}(\\phi)$.`,
            pa: `### [Level B → I → A: ਅਮੂਰਤ ਅਲਜਬਰਾ ਅਤੇ ਗਰੁੱਪ ਥਿਊਰੀ]
1. **ਲੈਗ੍ਰਾਂਜ ਦਾ ਪ੍ਰਮੇਯ (Lagrange’s Theorem):** ਕਿਸੇ ਸੀਮਤ ਗਰੁੱਪ $G$ ਦੇ ਸਬ-ਗਰੁੱਪ $H$ ਦਾ ਕ੍ਰਮ (Order) ਗਰੁੱਪ $G$ ਦੇ ਕ੍ਰਮ ਨੂੰ ਪੂਰਾ ਵੰਡਦਾ ਹੈ: $|H| \\mid |G|$।
2. **ਪ੍ਰਾਈਮ ਆਰਡਰ ਗਰੁੱਪ:** ਹਰੇਕ ਪ੍ਰਾਈਮ ਕ੍ਰਮ (Prime order $p$) ਵਾਲਾ ਗਰੁੱਪ ਹਮੇਸ਼ਾ **ਸਾਈਕਲਿਕ ਅਤੇ ਅਬੇਲੀਅਨ (Abelian)** ਹੁੰਦਾ ਹੈ।`,
            hi: `### [Level B → I → A: अमूर्त बीजगणित एवं समूह सिद्धांत]
1. **लैग्रेंज प्रमेय (Lagrange’s Theorem):** किसी परिमित समूह $G$ के उपसमूह $H$ की कोटि सदैव समूह की कोटि $|G|$ को विभाजित करती है।
2. **अभाज्य कोटि के समूह:** अभाज्य कोटि $p$ का प्रत्येक समूह सदैव **चक्रीय (Cyclic) एवं आबेली (Abelian)** होता है।
3. **चक्रीय समूह के जनक (Generators):** कोटि $n$ के चक्रीय समूह के कुल जनकों की संख्या $\\phi(n)$ होती है।`
        },
        keyNotes: {
            en: [
                'Every subgroup of a cyclic group is cyclic.',
                'A group of prime order has no proper non-trivial subgroups and is always cyclic.',
                'Kernel of a homomorphism is always a normal subgroup.',
                'Klein 4-group V4 is abelian but not cyclic.'
            ],
            pa: [
                'ਸਾਈਕਲਿਕ ਗਰੁੱਪ ਦਾ ਹਰੇਕ ਸਬ-ਗਰੁੱਪ ਸਾਈਕਲਿਕ ਹੁੰਦਾ ਹੈ।',
                'ਪ੍ਰਾਈਮ ਆਰਡਰ ਗਰੁੱਪ ਹਮੇਸ਼ਾ ਸਾਈਕਲਿਕ ਅਤੇ ਅਬੇਲੀਅਨ ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'चक्रीय समूह का प्रत्येक उपसमूह चक्रीय होता है।',
                'अभाज्य कोटि का समूह सदैव चक्रीय तथा आबेली होता है।'
            ]
        },
        flashcards: [
            {
                id: 'fc-math-grp-1',
                question: {
                    en: 'State Lagrange’s Theorem in group theory and its consequence on groups of prime order.',
                    pa: 'ਗਰੁੱਪ ਥਿਊਰੀ ਵਿੱਚ ਲੈਗ੍ਰਾਂਜ ਦਾ ਪ੍ਰਮੇਯ ਕੀ ਹੈ ਅਤੇ ਪ੍ਰਾਈਮ ਆਰਡਰ ਗਰੁੱਪਾਂ ਤੇ ਇਸਦਾ ਕੀ ਪ੍ਰਭਾਵ ਹੈ?',
                    hi: 'समूह सिद्धांत में लैग्रेंज प्रमेय क्या है तथा अभाज्य कोटि समूहों पर इसका क्या प्रभाव है?'
                },
                answer: {
                    en: 'Order of any subgroup divides order of finite group (|H| | |G|). Consequently, every group of prime order p is cyclic and abelian.',
                    pa: '|H| | |G|। ਇਸ ਲਈ ਪ੍ਰਾਈਮ ਆਰਡਰ ਵਾਲਾ ਹਰੇਕ ਗਰੁੱਪ ਸਾਈਕਲਿਕ ਅਤੇ ਅਬੇਲੀਅਨ ਹੁੰਦਾ ਹੈ।',
                    hi: '|H| | |G|। अतः अभाज्य कोटि का प्रत्येक समूह चक्रीय एवं आबेली होता है।'
                }
            }
        ]
    },

    // =========================================================================
    // 6. 3D COORDINATE GEOMETRY & CONICOIDS
    // =========================================================================
    {
        topicId: 'math-coordinate-geometry-3d',
        editorialRecord: {
            lastUpdatedDate: '2026-10-11',
            verifiedSyllabusDenominator: 150,
            editorialNote: '3D Lines, Planes, Spheres, Cones, Cylinders, and Conicoids for Master Cadre Math.'
        },
        bookRefs: [
            {
                title: 'Analytical Solid Geometry',
                author: 'Shanti Narayan & Dr. P.K. Mittal',
                chapter: 'Planes, Lines, Sphere, Cone, Cylinder',
                relevance: 'Standard 3D geometry text.'
            }
        ],
        summary: {
            en: `### [Level B → I → A: 3D Coordinate Geometry & Conicoids]
1. **Direction Cosines & The Plane:**
   - Direction cosines: $l = \\cos\\alpha, m = \\cos\\beta, n = \\cos\\gamma \\implies l^2 + m^2 + n^2 = 1$.
   - Angle between two lines: $\\cos\\theta = l_1 l_2 + m_1 m_2 + n_1 n_2$. Perpendicular iff $l_1 l_2 + m_1 m_2 + n_1 n_2 = 0$.
   - General equation of Plane: $Ax + By + Cz + D = 0$. Distance from $(x_1, y_1, z_1)$ is $d = \\frac{|Ax_1 + By_1 + Cz_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$.

2. **The Straight Line & Shortest Distance:**
   - Symmetric form: $\\frac{x - x_1}{l} = \\frac{y - y_1}{m} = \\frac{z - z_1}{n}$.
   - **Shortest Distance (S.D.) between Skew Lines:**
     $$d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}$$
     * Lines are coplanar iff $(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0$.

3. **Sphere, Cone & Cylinder:**
   - **Sphere:** $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$. Centre: $(-u, -v, -w)$, Radius: $r = \\sqrt{u^2 + v^2 + w^2 - d}$.
   - **Plane touching sphere:** Perpendicular distance from centre equals radius $r$.`,
            pa: `### [Level B → I → A: 3D ਕੋਆਰਡੀਨੇਟ ਜਿਓਮੈਟਰੀ]
1. **ਦਿਸ਼ਾ ਕੋਸਾਈਨ (Direction Cosines):** $l^2 + m^2 + n^2 = 1$।
2. **ਸਫ਼ੀਅਰ (Sphere):** ਸੈਂਟਰ $(-u, -v, -w)$ ਅਤੇ ਰੇਡੀਅਸ $r = \\sqrt{u^2 + v^2 + w^2 - d}$।
3. **ਸਕਿਊ ਲਾਈਨਾਂ ਵਿਚਕਾਰ ਸਭ ਤੋਂ ਛੋਟੀ ਦੂਰੀ (Shortest Distance):** $d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}$।`,
            hi: `### [Level B → I → A: त्रिविमीय निर्देशांक ज्यामिति (3D Geometry)]
1. **दिक्-कोसाइन (Direction Cosines):** $l^2 + m^2 + n^2 = 1$।
2. **गोला (Sphere):** केंद्र $(-u, -v, -w)$, त्रिज्या $r = \\sqrt{u^2 + v^2 + w^2 - d}$।
3. **विषमतलीय रेखाओं के बीच न्यूनतम दूरी (Shortest Distance):** $d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}$।`
        },
        keyNotes: {
            en: [
                'Sum of squares of direction cosines equals 1: l² + m² + n² = 1.',
                'Perpendicular lines have l1 l2 + m1 m2 + n1 n2 = 0.',
                'Two lines in 3D intersect or are coplanar if shortest distance d = 0.'
            ],
            pa: [
                'ਦਿਸ਼ਾ ਕੋਸਾਈਨਾਂ ਦੇ ਵਰਗਾਂ ਦਾ ਜੋੜ 1 ਹੁੰਦਾ ਹੈ: l² + m² + n² = 1।',
                'ਲੰਬਵਤ ਰੇਖਾਵਾਂ ਲਈ l1 l2 + m1 m2 + n1 n2 = 0 ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'दिक्-कोज्याओं के वर्गों का योग 1 होता है: l² + m² + n² = 1।',
                'परस्पर लंबवत रेखाओं हेतु l1 l2 + m1 m2 + n1 n2 = 0 होता है।'
            ]
        },
        flashcards: [
            {
                id: 'fc-math-3d-1',
                question: {
                    en: 'What is the condition for two lines with direction ratios (a1, b1, c1) and (a2, b2, c2) to be perpendicular?',
                    pa: 'ਦੋ ਰੇਖਾਵਾਂ ਦੇ ਆਪਸ ਵਿੱਚ ਲੰਬਵਤ (Perpendicular) ਹੋਣ ਦੀ ਸ਼ਰਤ ਕੀ ਹੈ?',
                    hi: 'दो रेखाओं के परस्पर लंबवत होने की शर्त क्या है?'
                },
                answer: {
                    en: 'a1 a2 + b1 b2 + c1 c2 = 0.',
                    pa: 'a1 a2 + b1 b2 + c1 c2 = 0।',
                    hi: 'a1 a2 + b1 b2 + c1 c2 = 0।'
                }
            }
        ]
    },

    // =========================================================================
    // 7. VECTOR CALCULUS, STATICS & DYNAMICS
    // =========================================================================
    {
        topicId: 'math-vector-mechanics',
        editorialRecord: {
            lastUpdatedDate: '2026-10-11',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Vector Calculus (Grad, Div, Curl, Gauss/Stokes Theorems) and Classical Mechanics (Statics equilibrium & Dynamics projectiles/SHM).'
        },
        bookRefs: [
            {
                title: 'Vector Calculus & Mechanics',
                author: 'Dr. M.D. Raisinghania & Shanti Narayan',
                chapter: 'Vector Operators, Integral Theorems, Statics & Dynamics',
                relevance: 'Standard text for B.Sc. Mechanics & Master Cadre.'
            }
        ],
        summary: {
            en: `### [Level B → I → A: Vector Calculus, Statics & Dynamics]
1. **Vector Differential Operators & Identities:**
   - **Gradient $\\nabla \\phi$:** Vector normal to level surface $\\phi(x, y, z) = c$; maximum rate of increase of $\\phi$.
   - **Divergence $\\nabla \\cdot \\vec{F}$:** Scalar. $\\vec{F}$ is **solenoidal** iff $\\nabla \\cdot \\vec{F} = 0$.
   - **Curl $\\nabla \\times \\vec{F}$:** Vector. $\\vec{F}$ is **irrotational (conservative)** iff $\\nabla \\times \\vec{F} = 0 \\implies \\vec{F} = \\nabla \\phi$.
   - **Key Identities:** $\\nabla \\times (\\nabla \\phi) = 0$ (Curl of Grad is zero); $\\nabla \\cdot (\\nabla \\times \\vec{F}) = 0$ (Div of Curl is zero).

2. **Vector Integral Theorems:**
   - **Gauss’s Divergence Theorem:** $\\iint_S \\vec{F} \\cdot \\hat{n} \\, dS = \\iiint_V (\\nabla \\cdot \\vec{F}) \\, dV$.
   - **Stokes’s Theorem:** $\\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot \\hat{n} \\, dS$.
   - **Green’s Theorem in Plane:** $\\oint_C (M dx + N dy) = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) dx \\, dy$.

3. **Statics & Dynamics (Mechanics):**
   - **Lami’s Theorem:** If three coplanar forces at a point are in equilibrium: $\\frac{P}{\\sin\\alpha} = \\frac{Q}{\\sin\\beta} = \\frac{R}{\\sin\\gamma}$.
   - **Projectile Motion:** Time of flight $T = \\frac{2u\\sin\\theta}{g}$, Max Height $H = \\frac{u^2\\sin^2\\theta}{2g}$, Horizontal Range $R = \\frac{u^2\\sin 2\\theta}{g}$ (Max at $\\theta = 45^\\circ$).
   - **Simple Harmonic Motion (SHM):** Acceleration $a = -\\omega^2 x$, Period $T = \\frac{2\\pi}{\\omega}$, Velocity $v = \\omega \\sqrt{A^2 - x^2}$.`,
            pa: `### [Level B → I → A: ਵੈਕਟਰ ਕੈਲਕੂਲਸ ਅਤੇ ਮਕੈਨਿਕਸ]
1. **ਵੈਕਟਰ ਆਪਰੇਟਰ:**
   - $\\nabla \\cdot \\vec{F} = 0 \\implies$ Solenoidal (ਸੋਲੇਨੋਇਡਲ)।
   - $\\nabla \\times \\vec{F} = 0 \\implies$ Irrotational (ਇਰੋਟੇਸ਼ਨਲ / ਕੰਜ਼ਰਵੇਟਿਵ)।
2. **ਗੌਸ ਦਾ ਡਾਇਵਰਜੈਂਸ ਪ੍ਰਮੇਯ:** $\\iint_S \\vec{F} \\cdot \\hat{n} dS = \\iiint_V (\\nabla \\cdot \\vec{F}) dV$।
3. **ਪ੍ਰੋਜੈਕਟਾਈਲ ਮੋਸ਼ਨ:** ਅਧਿਕਤਮ ਰੇਂਜ $R_{\\max} = \\frac{u^2}{g}$ (ਜਦੋਂ $\\theta = 45^\\circ$ ਹੋਵੇ)।`,
            hi: `### [Level B → I → A: सदिश कलन एवं यांत्रिकी]
1. **सदिश संकारक:**
   - $\\nabla \\cdot \\vec{F} = 0 \\implies$ परिनालिकीय (Solenoidal)।
   - $\\nabla \\times \\vec{F} = 0 \\implies$ अघूर्णी (Irrotational / संरक्षी बल क्षेत्र)।
2. **गॉस का अपसरण प्रमेय (Gauss Divergence Theorem):** $\\iint_S \\vec{F} \\cdot \\hat{n} dS = \\iiint_V (\\nabla \\cdot \\vec{F}) dV$।
3. **लामी का प्रमेय (Lami’s Theorem):** $\\frac{P}{\\sin\\alpha} = \\frac{Q}{\\sin\\beta} = \\frac{R}{\\sin\\gamma}$।`
        },
        keyNotes: {
            en: [
                'Div of Curl is identically zero: div(curl F) = 0.',
                'Curl of Grad is identically zero: curl(grad phi) = 0.',
                'Maximum horizontal range of a projectile occurs at angle of projection theta = 45 degrees.'
            ],
            pa: [
                'curl(grad phi) = 0 ਅਤੇ div(curl F) = 0 ਹੁੰਦਾ ਹੈ।',
                'ਪ੍ਰੋਜੈਕਟਾਈਲ ਦੀ ਅਧਿਕਤਮ ਰੇਂਜ 45 ਡਿਗਰੀ ਉੱਤੇ ਮਿਲਦੀ ਹੈ।'
            ],
            hi: [
                'curl(grad phi) = 0 तथा div(curl F) = 0 होता है।',
                'प्रक्षेप्य की अधिकतम परास 45 डिग्री के कोण पर प्राप्त होती है।'
            ]
        },
        flashcards: [
            {
                id: 'fc-math-vec-1',
                question: {
                    en: 'What are the conditions for a vector field F to be solenoidal and irrotational?',
                    pa: 'ਵੈਕਟਰ F ਦੇ Solenoidal ਅਤੇ Irrotational ਹੋਣ ਦੀਆਂ ਸ਼ਰਤਾਂ ਕੀ ਹਨ?',
                    hi: 'सदिश F के परिनालिकीय (Solenoidal) एवं अघूर्णी (Irrotational) होने की शर्तें क्या हैं?'
                },
                answer: {
                    en: 'Solenoidal: div(F) = 0; Irrotational: curl(F) = 0.',
                    pa: 'Solenoidal: div(F) = 0; Irrotational: curl(F) = 0।',
                    hi: 'Solenoidal: div(F) = 0; Irrotational: curl(F) = 0।'
                }
            }
        ]
    },

    // =========================================================================
    // 8. PROBABILITY, STATISTICS & DISTRIBUTIONS
    // =========================================================================
    {
        topicId: 'math-prob-stats-distributions',
        editorialRecord: {
            lastUpdatedDate: '2026-10-11',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Probability, Bayes’ Theorem, Binomial, Poisson & Normal distributions, Correlation & Regression.'
        },
        bookRefs: [
            {
                title: 'Fundamentals of Mathematical Statistics',
                author: 'S.C. Gupta & V.K. Kapoor',
                chapter: 'Probability, Probability Distributions, Correlation & Regression',
                relevance: 'Standard university statistics textbook for Master Cadre Math.'
            }
        ],
        summary: {
            en: `### [Level B → I → A: Probability, Statistics & Distributions]
1. **Probability Axioms & Bayes’ Theorem:**
   - **Addition Law:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.
   - **Bayes’ Theorem:** For mutually exclusive & exhaustive partition $E_1, E_2, \\dots, E_n$:
     $$P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum_{j=1}^n P(E_j) P(A | E_j)}$$

2. **Standard Probability Distributions:**
   - **Binomial Distribution $B(n, p)$:**
     * $P(X = r) = \\binom{n}{r} p^r q^{n-r}$ ($q = 1 - p$).
     * Mean $\\mu = np$, Variance $\\sigma^2 = npq$. Note: $\\text{Variance} < \\text{Mean}$.
   - **Poisson Distribution $P(\\lambda)$:**
     * $P(X = r) = \\frac{e^{-\\lambda} \\lambda^r}{r!}$ ($r = 0, 1, 2, \\dots$).
     * Mean = Variance = $\\lambda$.
   - **Normal Distribution $N(\\mu, \\sigma^2)$:**
     * Bell-shaped, symmetric about $x = \\mu$. Mean = Median = Mode = $\\mu$.
     * Points of inflection at $x = \\mu \\pm \\sigma$. Total area under curve $= 1$.
     * $68.27\\%$ area within $\\mu \\pm \\sigma$, $95.45\\%$ within $\\mu \\pm 2\\sigma$, $99.73\\%$ within $\\mu \\pm 3\\sigma$.

3. **Correlation & Regression:**
   - **Karl Pearson Correlation Coefficient ($r$):** $r = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y}$, $-1 \\le r \\le 1$.
   - **Regression Lines & Coefficients:**
     * Lines of regression: $(y - \\bar{y}) = b_{yx}(x - \\bar{x})$ and $(x - \\bar{x}) = b_{xy}(y - \\bar{y})$.
     * $r = \\pm \\sqrt{b_{yx} \\cdot b_{xy}}$. Both regression coefficients have the same sign as $r$.
     * If one regression coefficient is $> 1$, the other must be $< 1$.`,
            pa: `### [Level B → I → A: ਸੰਭਾਵਨਾ ਅਤੇ ਅੰਕੜਾ ਵਿਗਿਆਨ (Statistics)]
1. **ਸਟੈਂਡਰਡ ਡਿਸਟ੍ਰੀਬਿਊਸ਼ਨ:**
   - **ਬਾਈਨੋਮੀਅਲ (Binomial):** Mean = $np$, Variance = $npq$ (Variance < Mean)।
   - **ਪੋਇਸਨ (Poisson):** Mean = Variance = $\\lambda$।
   - **ਨਾਰਮਲ (Normal):** ਸਮਮਿਤੀ (Symmetric), Mean = Median = Mode।
2. **ਕੋਰੀਲੇਸ਼ਨ ਅਤੇ ਰਿਗ੍ਰੇਸ਼ਨ:** $r = \\pm \\sqrt{b_{yx} \\cdot b_{xy}}$, $-1 \\le r \\le 1$।`,
            hi: `### [Level B → I → A: प्रायिकता, सांख्यिकी एवं बंटन]
1. **मानक प्रायिकता बंटन:**
   - **द्विपद बंटन (Binomial):** माध्य = $np$, प्रसरण = $npq$ (प्रसरण < माध्य)।
   - **पॉइसन बंटन (Poisson):** माध्य = प्रसरण = $\\lambda$।
   - **प्रसामान्य बंटन (Normal):** सममित घंटीनुमा वक्र, माध्य = माध्यिका = बहुलक।
2. **सहसंबंध एवं समाश्रयण (Correlation & Regression):** $r = \\pm \\sqrt{b_{yx} \\cdot b_{xy}}$, $-1 \\le r \\le 1$।`
        },
        keyNotes: {
            en: [
                'In Poisson distribution, Mean and Variance are strictly equal (lambda).',
                'In Binomial distribution, Variance is strictly less than Mean.',
                'The correlation coefficient r is the geometric mean of regression coefficients byx and bxy.',
                'Normal distribution is symmetrical and bell-shaped with total area under the curve equal to 1.'
            ],
            pa: [
                'ਪੋਇਸਨ ਡਿਸਟ੍ਰੀਬਿਊਸ਼ਨ ਵਿੱਚ Mean ਅਤੇ Variance ਦੋਵੇਂ ਬਰਾਬਰ (lambda) ਹੁੰਦੇ ਹਨ।',
                'ਬਾਈਨੋਮੀਅਲ ਵਿੱਚ Variance ਹਮੇਸ਼ਾ Mean ਤੋਂ ਛੋਟਾ ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'पॉइसन बंटन में माध्य और प्रसरण दोनों समान (lambda) होते हैं।',
                'द्विपद बंटन में प्रसरण सदैव माध्य से कम होता है।'
            ]
        },
        flashcards: [
            {
                id: 'fc-math-stat-1',
                question: {
                    en: 'In which probability distribution is the Mean equal to the Variance?',
                    pa: 'ਕਿਹੜੀ ਪ੍ਰੋਬੇਬਿਲਿਟੀ ਡਿਸਟ੍ਰੀਬਿਊਸ਼ਨ ਵਿੱਚ Mean ਅਤੇ Variance ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ?',
                    hi: 'किस प्रायिकता बंटन में माध्य और प्रसरण परस्पर बराबर होते हैं?'
                },
                answer: {
                    en: 'Poisson Distribution (Mean = Variance = λ).',
                    pa: 'ਪੋਇਸਨ ਡਿਸਟ੍ਰੀਬਿਊਸ਼ਨ (Poisson Distribution, Mean = Variance = λ)।',
                    hi: 'पॉइसन बंटन (Poisson Distribution, Mean = Variance = λ)।'
                }
            }
        ]
    }
];
