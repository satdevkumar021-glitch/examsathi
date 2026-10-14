import type { BlueprintLessonInput } from './master_cadre_blueprint_adapter';

export const MASTER_CADRE_MATH_BLUEPRINT_LESSONS: BlueprintLessonInput[] = [
    // =========================================================================
    // 1. LINEAR ALGEBRA & MATRICES
    // =========================================================================
    {
        topicId: 'math-linear-algebra-matrices',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Master Cadre Mathematics: Covers Rank of Matrix, Cayley-Hamilton Theorem, Eigenvalues & Eigenvectors, Diagonalization, Vector Spaces, Subspaces, Basis, Dimension, Linear Transformations, Rank-Nullity Theorem, and System of Linear Equations (Rouché-Capelli Theorem).'
        },
        bookRefs: [
            {
                title: 'Linear Algebra',
                author: 'Kenneth Hoffman & Ray Kunze',
                chapter: 'Chapters 2, 3 & 6 (Vector Spaces, Linear Transformations, Elementary Canonical Forms)',
                relevance: 'Standard university graduation reference for vector spaces, rank-nullity theorem, and eigenvalues.'
            },
            {
                title: 'Linear Algebra and Its Applications',
                author: 'David C. Lay',
                chapter: 'Chapters 1, 4 & 5 (Linear Systems, Vector Spaces, Eigenvalues & Diagonalization)',
                relevance: 'Comprehensive coverage of matrix rank, row reduction, and eigenspaces.'
            }
        ],
        summary: {
            en: `### 1. Rank of Matrix & Elementary Operations
- **Rank of Matrix $\\text{rank}(A)$:** The maximum number of linearly independent row or column vectors. It equals the order of the highest-order non-zero minor.
- **Properties:** For an $m \\times n$ matrix $A$:
  - $0 \\le \\text{rank}(A) \\le \\min(m, n)$.
  - $\\text{rank}(AB) \\le \\min(\\text{rank}(A), \\text{rank}(B))$.
  - Sylvester's inequality: $\\text{rank}(A) + \\text{rank}(B) - n \\le \\text{rank}(AB)$ for $A_{m \\times n}$ and $B_{n \\times p}$.
  - $\\text{rank}(A + B) \\le \\text{rank}(A) + \\text{rank}(B)$.
  - Rank is invariant under elementary row and column operations (Echelon and Normal/Canonical forms $[I_r \\ 0; \\ 0 \\ 0]$).

### 2. Cayley-Hamilton Theorem & Matrix Inverses
- **Statement:** Every square matrix $A \\in M_n(F)$ satisfies its own characteristic equation:
  $$P_A(\\lambda) = \\det(A - \\lambda I) = (-1)^n [\\lambda^n - c_1 \\lambda^{n-1} + c_2 \\lambda^{n-2} - \\dots + (-1)^n \\det(A)] = 0$$
  $$\\implies P_A(A) = A^n - c_1 A^{n-1} + \\dots + (-1)^n \\det(A) I = O$$
- **Applications:**
  - Computation of $A^{-1}$: If $\\det(A) \\ne 0$, multiply by $A^{-1}$ to express $A^{-1}$ as a polynomial in $A$ of degree $\\le n-1$.
  - Computation of higher powers $A^m$ ($m > n$) by dividing $\\lambda^m$ by $P_A(\\lambda)$.

### 3. Eigenvalues, Eigenvectors & Diagonalization
- **Characteristic Equation:** $\\det(A - \\lambda I) = 0$. Roots are eigenvalues $\\lambda_i$.
- **Fundamental Properties:**
  - $\\sum \\lambda_i = \\text{tr}(A)$ (sum of diagonal entries).
  - $\\prod \\lambda_i = \\det(A)$.
  - Eigenvalues of a triangular or diagonal matrix are its diagonal entries.
  - If $\\lambda$ is an eigenvalue of $A$ with eigenvector $v$, then:
    - $A^k$ has eigenvalue $\\lambda^k$.
    - $A^{-1}$ has eigenvalue $\\lambda^{-1}$ (for invertible $A$).
    - $k A$ has eigenvalue $k \\lambda$.
    - $f(A)$ has eigenvalue $f(\\lambda)$.
  - Symmetric / Hermitian matrices have all **real** eigenvalues; eigenvectors corresponding to distinct eigenvalues are mutually orthogonal.
  - Skew-symmetric / Skew-Hermitian matrices have eigenvalues that are either **zero or purely imaginary**.
  - Orthogonal / Unitary matrices have eigenvalues with modulus $|\\lambda| = 1$.
- **Diagonalization Criterion:**
  - An $n \\times n$ matrix $A$ is diagonalizable over field $F$ if and only if it possesses $n$ linearly independent eigenvectors.
  - Equivalently, for every distinct eigenvalue $\\lambda_i$, **Geometric Multiplicity (GM) = Algebraic Multiplicity (AM)**, where $\\text{GM}(\\lambda_i) = \\text{nullity}(A - \\lambda_i I) = n - \\text{rank}(A - \\lambda_i I)$.
  - If all $n$ eigenvalues are distinct, $A$ is automatically diagonalizable.

### 4. Vector Spaces, Subspaces, Basis & Dimension
- **Subspace Criterion:** Non-empty subset $W \\subseteq V$ is a subspace iff $\\forall u, v \\in W$ and $\\alpha, \\beta \\in F$, $\\alpha u + \\beta v \\in W$.
- **Union & Intersection:**
  - The intersection $W_1 \\cap W_2$ is always a subspace.
  - The union $W_1 \\cup W_2$ is a subspace if and only if $W_1 \\subseteq W_2$ or $W_2 \\subseteq W_1$.
- **Sum & Dimension Formula:**
  $$\\dim(W_1 + W_2) = \\dim(W_1) + \\dim(W_2) - \\dim(W_1 \\cap W_2)$$
- **Basis:** A linearly independent subset that spans $V$. All bases of a finite-dimensional vector space have the same cardinality (dimension).

### 5. Linear Transformations & Rank-Nullity Theorem
- **Definitions:** For linear mapping $T: V \\to W$:
  - $\\ker(T) = \\{v \\in V : T(v) = 0\\}$ (Null space; subspace of $V$). $\\text{nullity}(T) = \\dim(\\ker(T))$.
  - $\\text{Im}(T) = \\{T(v) : v \\in V\\}$ (Range space; subspace of $W$). $\\text{rank}(T) = \\dim(\\text{Im}(T))$.
- **Rank-Nullity Theorem (Dimension Theorem):** If $V$ is a finite-dimensional vector space:
  $$\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)$$
- **Consequences:**
  - $T$ is injective (one-to-one) $\\iff \\ker(T) = \\{0\\} \\iff \\text{nullity}(T) = 0$.
  - If $\\dim(V) = \\dim(W)$, then $T$ is injective $\\iff T$ is surjective $\\iff T$ is bijective (an isomorphism).

### 6. System of Linear Equations ($AX = B$) & Rouché-Capelli Theorem
- Let $A$ be $m \\times n$, $X$ be $n \\times 1$, $B$ be $m \\times 1$. Augmented matrix is $[A|B]$.
- **Rouché-Capelli Theorem:**
  - **Inconsistent (No solution):** $\\text{rank}(A) < \\text{rank}([A|B])$.
  - **Consistent:** $\\text{rank}(A) = \\text{rank}([A|B]) = r$.
    - **Unique Solution:** $r = n$ (number of variables).
    - **Infinitely Many Solutions:** $r < n$, with $(n - r)$ linearly independent free parameters.
- **Homogeneous System ($AX = 0$):**
  - Always consistent ($X = 0$ is trivial solution).
  - Non-trivial (non-zero) solution exists $\\iff \\text{rank}(A) < n \\iff \\det(A) = 0$ (when $m=n$).`,
            pa: `### 1. ਮੈਟ੍ਰਿਕਸ ਦਾ ਰੈਂਕ ਅਤੇ ਮੁਢਲੀਆਂ ਕਿਰਿਆਵਾਂ
- **ਮੈਟ੍ਰਿਕਸ ਦਾ ਰੈਂਕ (Rank of Matrix $\\text{rank}(A)$):** ਰੇਖੀ ਤੌਰ 'ਤੇ ਸੁਤੰਤਰ ਪੰਕਤੀਆਂ (rows) ਜਾਂ ਕਾਲਮਾਂ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਗਿਣਤੀ। ਇਹ ਸਭ ਤੋਂ ਵੱਡੇ ਗ਼ੈਰ-ਸਿਫ਼ਰ ਮਾਈਨਰ ਦੇ ਆਰਡਰ ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ।
- **ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ:**
  - $0 \\le \\text{rank}(A) \\le \\min(m, n)$।
  - $\\text{rank}(AB) \\le \\min(\\text{rank}(A), \\text{rank}(B))$।
  - ਸਿਲਵੈਸਟਰ ਅਸਮਾਨਤਾ: $\\text{rank}(A) + \\text{rank}(B) - n \\le \\text{rank}(AB)$।
  - ਰੈਂਕ ਮੁਢਲੀਆਂ ਪੰਕਤੀ ਅਤੇ ਕਾਲਮ ਕਿਰਿਆਵਾਂ (Echelon Form) ਦੁਆਰਾ ਨਹੀਂ ਬਦਲਦਾ।

### 2. ਕੇਲੇ-ਹੈਮਿਲਟਨ ਪ੍ਰਮੇਯ (Cayley-Hamilton Theorem)
- **ਕਥਨ:** ਹਰੇਕ ਵਰਗ ਮੈਟ੍ਰਿਕਸ $A$ ਆਪਣੀ ਵਿਸ਼ੇਸ਼ਤਾ ਸਮੀਕਰਨ (Characteristic Equation) $\\det(A - \\lambda I) = 0$ ਨੂੰ ਸੰਤੁਸ਼ਟ ਕਰਦਾ ਹੈ।
- **ਵਰਤੋਂ:** $A^{-1}$ ਕੱਢਣ ਲਈ ਅਤੇ ਮੈਟ੍ਰਿਕਸ ਦੀਆਂ ਉੱਚੀਆਂ ਘਾਤਾਂ ($A^m$) ਪਤਾ ਕਰਨ ਲਈ।

### 3. ਆਈਗਨ ਮੁੱਲ, ਆਈਗਨ ਵੈਕਟਰ ਅਤੇ ਡਾਇਗਨਲਾਈਜ਼ੇਸ਼ਨ
- **ਵਿਸ਼ੇਸ਼ਤਾ ਸਮੀਕਰਨ:** $\\det(A - \\lambda I) = 0$।
- **ਮੁੱਖ ਗੁਣ:**
  - ਆਈਗਨ ਮੁੱਲਾਂ ਦਾ ਜੋੜ $= \\text{tr}(A)$ (ਟਰੇਸ: ਮੁੱਖ ਵਿਕਰਣ ਦੇ ਤੱਤਾਂ ਦਾ ਜੋੜ)।
  - ਆਈਗਨ ਮੁੱਲਾਂ ਦਾ ਗੁਣਨਫਲ $= \\det(A)$।
  - ਸਮਮਿਤੀ (Symmetric / Hermitian) ਮੈਟ੍ਰਿਕਸ ਦੇ ਸਾਰੇ ਆਈਗਨ ਮੁੱਲ **ਵਾਸਤਵਿਕ (Real)** ਹੁੰਦੇ ਹਨ।
  - ਸਕਿਊ-ਸਮਮਿਤੀ ਮੈਟ੍ਰਿਕਸ ਦੇ ਆਈਗਨ ਮੁੱਲ **ਸਿਫ਼ਰ ਜਾਂ ਸ਼ੁੱਧ ਕਾਲਪਨਿਕ** ਹੁੰਦੇ ਹਨ।
  - ਲੰਬਵਤ (Orthogonal / Unitary) ਮੈਟ੍ਰਿਕਸ ਦੇ ਆਈਗਨ ਮੁੱਲਾਂ ਦਾ ਮਾਡਿਊਲਸ $|\\lambda| = 1$ ਹੁੰਦਾ ਹੈ।
- **ਡਾਇਗਨਲਾਈਜ਼ੇਸ਼ਨ (Diagonalization):** ਮੈਟ੍ਰਿਕਸ $A$ ਡਾਇਗਨਲਾਈਜ਼ੇਬਲ ਤਾਂ ਹੀ ਹੁੰਦਾ ਹੈ ਜੇਕਰ ਹਰੇਕ ਆਈਗਨ ਮੁੱਲ ਲਈ Geometric Multiplicity (GM) = Algebraic Multiplicity (AM) ਹੋਵੇ।

### 4. ਵੈਕਟਰ ਸਪੇਸ, ਸਬ-ਸਪੇਸ, ਆਧਾਰ (Basis) ਅਤੇ ਵਿਮਾ (Dimension)
- **ਸਬ-ਸਪੇਸ ਸ਼ਰਤ:** ਗ਼ੈਰ-ਖ਼ਾਲੀ ਉਪ-ਸਮੂਹ $W \\subseteq V$ ਸਬ-ਸਪੇਸ ਹੁੰਦਾ ਹੈ ਜੇਕਰ $\\alpha u + \\beta v \\in W$ ਹੋਵੇ।
- ਦੋ ਸਬ-ਸਪੇਸਾਂ ਦਾ ਕਾਟ-ਖੇਤਰ $W_1 \\cap W_2$ ਹਮੇਸ਼ਾ ਇੱਕ ਸਬ-ਸਪੇਸ ਹੁੰਦਾ ਹੈ। ਸੰਘ (Union) $W_1 \\cup W_2$ ਸਿਰਫ਼ ਤਾਂ ਹੀ ਸਬ-ਸਪੇਸ ਬਣਦਾ ਹੈ ਜੇਕਰ ਇੱਕ ਦੂਜੇ ਦੇ ਅੰਦਰ ਸਮਾਇਆ ਹੋਵੇ ($W_1 \\subseteq W_2$ ਜਾਂ $W_2 \\subseteq W_1$)।
- ਵਿਮਾ ਸੂਤਰ: $\\dim(W_1 + W_2) = \\dim(W_1) + \\dim(W_2) - \\dim(W_1 \\cap W_2)$।

### 5. ਰੇਖੀ ਰੂਪਾਂਤਰਨ ਅਤੇ ਰੈਂਕ-ਨਲਿਟੀ ਪ੍ਰਮੇਯ (Rank-Nullity Theorem)
- $T: V \\to W$ ਲਈ: $\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)$।
- $T$ ਇੱਕ-ਤੋਂ-ਇੱਕ (Injective) ਹੈ $\\iff \\ker(T) = \\{0\\} \\iff \\text{nullity}(T) = 0$।

### 6. ਰੇਖੀ ਸਮੀਕਰਨ ਪ੍ਰਣਾਲੀ ($AX = B$) ਅਤੇ ਰੂਚੇ-ਕੈਪੇਲੀ ਪ੍ਰਮੇਯ
- **ਅਸੰਗਤ (ਕੋਈ ਹੱਲ ਨਹੀਂ):** $\\text{rank}(A) < \\text{rank}([A|B])$।
- **ਸੰਗਤ (ਹੱਲ ਮੌਜੂਦ ਹੈ):** $\\text{rank}(A) = \\text{rank}([A|B]) = r$।
  - ਵਿਲੱਖਣ ਹੱਲ: $r = n$ (ਚਲਾਂ ਦੀ ਗਿਣਤੀ)।
  - ਅਨੰਤ ਹੱਲ: $r < n$ (ਜਿੱਥੇ $n - r$ ਸੁਤੰਤਰ ਚਰ ਹੁੰਦੇ ਹਨ)।`,
            hi: `### 1. आव्यूह की कोटि (रैंक) एवं प्रारंभिक संक्रियाएं
- **आव्यूह की कोटि $\\text{rank}(A)$:** रैखिकतः स्वतंत्र पंक्तियों या स्तंभों की अधिकतम संख्या। यह अशून्य उपसारणिक (minor) की अधिकतम कोटि के बराबर होती है।
- **प्रमुख गुणधर्म:**
  - $0 \\le \\text{rank}(A) \\le \\min(m, n)$।
  - $\\text{rank}(AB) \\le \\min(\\text{rank}(A), \\text{rank}(B))$।
  - सिल्वेस्टर असमिका: $\\text{rank}(A) + \\text{rank}(B) - n \\le \\text{rank}(AB)$।
  - प्रारंभिक पंक्ति या स्तंभ संक्रियाओं (Echelon रूप) से कोटि अपरिवर्तित रहती है।

### 2. केली-हैमिल्टन प्रमेय (Cayley-Hamilton Theorem)
- **कथन:** प्रत्येक वर्ग आव्यूह $A$ अपने अभिलाक्षणिक समीकरण $\\det(A - \\lambda I) = 0$ को संतुष्ट करता है।
- **अनुप्रयोग:** व्युत्क्रम $A^{-1}$ प्राप्त करने तथा उच्च घातों $A^m$ के मूल्यांकन हेतु।

### 3. आइगेन मान, आइगेन सदिश एवं विकर्णीकरण (Diagonalization)
- **अभिलाक्षणिक समीकरण:** $\\det(A - \\lambda I) = 0$।
- **महत्वपूर्ण गुणधर्म:**
  - आइगेन मानों का योग $= \\text{tr}(A)$ (ट्रेस: मुख्य विकर्ण अवयवों का योग)।
  - आइगेन मानों का गुणनफल $= \\det(A)$।
  - सममित (Symmetric / Hermitian) आव्यूह के सभी आइगेन मान **वास्तविक** होते हैं।
  - विषम-सममित (Skew-symmetric) आव्यूह के आइगेन मान **शून्य या शुद्ध काल्पनिक** होते हैं।
  - लांबिक (Orthogonal / Unitary) आव्यूह के आइगेन मानों का परिमाण $|\\lambda| = 1$ होता है।
- **विकर्णीकरण:** $A$ विकर्णीय होता है यदि और केवल यदि प्रत्येक आइगेन मान के लिए ज्यामितीय बहुकता = बीजीय बहुकता (GM = AM) हो।

### 4. सदिश समष्टि, उपसमष्टि, आधार (Basis) एवं विमा (Dimension)
- **उपसमष्टि कसौटी:** अरिक्त उपसमुच्चय $W \\subseteq V$ उपसमष्टि है $\\iff \\forall u,v \\in W, \\alpha u + \\beta v \\in W$।
- दो उपसमष्टियों का सर्वनिष्ठ $W_1 \\cap W_2$ सदैव उपसमष्टि होता है। संघ $W_1 \\cup W_2$ केवल तभी उपसमष्टि होता है जब $W_1 \\subseteq W_2$ या $W_2 \\subseteq W_1$।
- विमा सूत्र: $\\dim(W_1 + W_2) = \\dim(W_1) + \\dim(W_2) - \\dim(W_1 \\cap W_2)$।

### 5. रैखिक रूपांतरण एवं कोटि-शून्यता प्रमेय (Rank-Nullity Theorem)
- परिमित विमीय सदिश समष्टि $V$ के लिए: $\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)$।
- $T$ एकैकी (Injective) है $\\iff \\ker(T) = \\{0\\} \\iff \\text{nullity}(T) = 0$।

### 6. रैखिक समीकरण निकाय ($AX = B$) एवं रूशे-कापेली प्रमेय
- **असंगत (कोई हल नहीं):** $\\text{rank}(A) < \\text{rank}([A|B])$।
- **संगत (हल विद्यमान):** $\\text{rank}(A) = \\text{rank}([A|B]) = r$।
  - अद्वितीय हल: $r = n$ (अज्ञात चरों की संख्या)।
  - अनंत हल: $r < n$ (जहाँ $n - r$ स्वतंत्र चर होते हैं)।`
        },
        keyNotes: {
            en: [
                'Rank-Nullity Theorem: For linear map T: V -> W on finite-dimensional V, dim(V) = rank(T) + nullity(T).',
                'Eigenvalue relations: Sum of eigenvalues equals Trace(A); Product of eigenvalues equals Det(A).',
                'Cayley-Hamilton Theorem: Matrix A satisfies its characteristic equation P(A) = 0, facilitating direct calculation of A⁻¹ and Aⁿ.',
                'A square matrix is diagonalizable iff GM = AM for each eigenvalue, or iff it has n linearly independent eigenvectors.',
                'Subspace Union Trap: W₁ ∪ W₂ is a subspace iff W₁ ⊆ W₂ or W₂ ⊆ W₁; intersection W₁ ∩ W₂ is unconditionally a subspace.',
                'Rouché-Capelli consistency: AX = B has a solution iff rank(A) = rank([A|B]). Unique if rank = n, infinitely many if rank < n.'
            ],
            pa: [
                'ਰੈਂਕ-ਨਲਿਟੀ ਪ੍ਰਮੇਯ: ਪਰਿਮਿਤ ਵਿਮਾ ਵਾਲੀ ਸਪੇਸ V ਉੱਤੇ ਰੂਪਾਂਤਰਨ T ਲਈ dim(V) = rank(T) + nullity(T) ਹੁੰਦਾ ਹੈ।',
                'ਆਈਗਨ ਮੁੱਲਾਂ ਦੇ ਨਿਯਮ: ਆਈਗਨ ਮੁੱਲਾਂ ਦਾ ਜੋੜ Trace(A) ਅਤੇ ਗੁਣਨਫਲ Det(A) ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ।',
                'ਕੇਲੇ-ਹੈਮਿਲਟਨ ਪ੍ਰਮੇਯ: ਹਰੇਕ ਵਰਗ ਮੈਟ੍ਰਿਕਸ ਆਪਣੀ ਕੈਰੈਕਟਰਿਸਟਿਕ ਸਮੀਕਰਨ P(A) = 0 ਨੂੰ ਸੰਤੁਸ਼ਟ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ A⁻¹ ਆਸਾਨੀ ਨਾਲ ਨਿਕਲਦਾ ਹੈ।',
                'ਡਾਇਗਨਲਾਈਜ਼ੇਸ਼ਨ ਸ਼ਰਤ: ਮੈਟ੍ਰਿਕਸ ਤਾਂ ਹੀ ਡਾਇਗਨਲਾਈਜ਼ੇਬਲ ਹੈ ਜੇਕਰ ਹਰੇਕ ਆਈਗਨ ਮੁੱਲ ਲਈ GM = AM ਹੋਵੇ।',
                'ਸਬ-ਸਪੇਸ ਯੂਨੀਅਨ ਟ੍ਰੈਪ: W₁ ∪ W₂ ਸਿਰਫ਼ ਉਦੋਂ ਸਬ-ਸਪੇਸ ਹੁੰਦਾ ਹੈ ਜੇਕਰ W₁ ⊆ W₂ ਜਾਂ W₂ ⊆ W₁ ਹੋਵੇ; ਕਾਟ-ਖੇਤਰ W₁ ∩ W₂ ਹਮੇਸ਼ਾ ਸਬ-ਸਪੇਸ ਹੁੰਦਾ ਹੈ।',
                'ਰੂਚੇ-ਕੈਪੇਲੀ ਨਿਯਮ: AX = B ਦਾ ਹੱਲ ਤਾਂ ਹੀ ਹੁੰਦਾ ਹੈ ਜੇਕਰ rank(A) = rank([A|B]) ਹੋਵੇ; ਅਦੁੱਤੀ ਹੱਲ ਲਈ rank = n ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'कोटि-शून्यता प्रमेय: परिमित विमीय समष्टि V पर रैखिक मानचित्रण T हेतु dim(V) = rank(T) + nullity(T) होता है।',
                'आइगेन मान संबंध: आइगेन मानों का योग Trace(A) तथा गुणनफल Det(A) के बराबर होता है।',
                'केली-हैमिल्टन प्रमेय: प्रत्येक वर्ग आव्यूह अपने अभिलाक्षणिक समीकरण P(A) = 0 को संतुष्ट करता है, जिससे A⁻¹ सुगमता से ज्ञात होता है।',
                'विकर्णीयता प्रतिबंध: आव्यूह तभी विकर्णीय होता है जब प्रत्येक आइगेन मान हेतु GM = AM हो।',
                'उपसमष्टि संघ नियम: W₁ ∪ W₂ केवल तभी उपसमष्टि बनता है जब W₁ ⊆ W₂ अथवा W₂ ⊆ W₁ हो; सर्वनिष्ठ W₁ ∩ W₂ सदैव उपसमष्टि होता है।',
                'रूशे-कापेली संगतता: AX = B का हल तभी संभव है जब rank(A) = rank([A|B]) हो; अद्वितीय हल हेतु rank = n होना आवश्यक है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Rank of product: rank(AB) ≤ min(rank(A), rank(B)).',
                'Symmetric matrix has purely real eigenvalues; Skew-symmetric has zero or pure imaginary eigenvalues.',
                'Orthogonal matrix eigenvalues satisfy |λ| = 1; determinant is ±1.',
                'dim(W₁ + W₂) = dim(W₁) + dim(W₂) − dim(W₁ ∩ W₂).',
                'Homogeneous system AX = 0 has a non-trivial solution iff rank(A) < n (i.e. det(A) = 0 for square A).'
            ],
            pa: [
                'ਗੁਣਨਫਲ ਦਾ ਰੈਂਕ: rank(AB) ≤ min(rank(A), rank(B)) ਹੁੰਦਾ ਹੈ।',
                'ਸਮਮਿਤੀ ਮੈਟ੍ਰਿਕਸ ਦੇ ਆਈਗਨ ਮੁੱਲ ਵਾਸਤਵਿਕ ਹੁੰਦੇ ਹਨ; ਸਕਿਊ-ਸਮਮਿਤੀ ਦੇ ਸਿਫ਼ਰ ਜਾਂ ਸ਼ੁੱਧ ਕਾਲਪਨਿਕ ਹੁੰਦੇ ਹਨ।',
                'ਲੰਬਵਤ (Orthogonal) ਮੈਟ੍ਰਿਕਸ ਦੇ ਆਈਗਨ ਮੁੱਲਾਂ ਦਾ ਮਾਡਿਊਲਸ |λ| = 1 ਅਤੇ ਡਿਟਰਮੀਨੈਂਟ ±1 ਹੁੰਦਾ ਹੈ।',
                'dim(W₁ + W₂) = dim(W₁) + dim(W₂) − dim(W₁ ∩ W₂)।',
                'ਸਮਘਾਤੀ ਪ੍ਰਣਾਲੀ AX = 0 ਦਾ ਗ਼ੈਰ-ਸਿਫ਼ਰ ਹੱਲ ਤਾਂ ਹੀ ਹੁੰਦਾ ਹੈ ਜੇਕਰ det(A) = 0 ਹੋਵੇ।'
            ],
            hi: [
                'गुणनफल की कोटि: rank(AB) ≤ min(rank(A), rank(B)) होती है।',
                'सममित आव्यूह के आइगेन मान वास्तविक तथा विषम-सममित के शून्य या विशुद्ध काल्पनिक होते हैं।',
                'लांबिक आव्यूह के आइगेन मानों का परिमाण |λ| = 1 तथा सारणिक मान ±1 होता है।',
                'dim(W₁ + W₂) = dim(W₁) + dim(W₂) − dim(W₁ ∩ W₂)।',
                'समघाती निकाय AX = 0 का अशून्य हल केवल तभी होता है जब det(A) = 0 हो।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: The union of any two vector subspaces is always a vector subspace. Correction: The union W₁ ∪ W₂ is a subspace if and only if one subspace is completely contained in the other (W₁ ⊆ W₂ or W₂ ⊆ W₁).',
                'Misconception: A matrix is diagonalizable if and only if all its eigenvalues are distinct. Correction: Having distinct eigenvalues is a sufficient condition, but not necessary; a scalar matrix λI has all identical eigenvalues and is already diagonal.',
                'Misconception: The rank of matrix product AB is always equal to rank(A) · rank(B). Correction: Rank is bounded by rank(AB) ≤ min(rank(A), rank(B)); it can never exceed the rank of either factor.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਦੋ ਵੈਕਟਰ ਸਬ-ਸਪੇਸਾਂ ਦਾ ਸੰਘ (Union) ਹਮੇਸ਼ਾ ਇੱਕ ਸਬ-ਸਪੇਸ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਯੂਨੀਅਨ W₁ ∪ W₂ ਸਿਰਫ਼ ਤਾਂ ਹੀ ਸਬ-ਸਪੇਸ ਬਣਦਾ ਹੈ ਜੇਕਰ ਇੱਕ ਸਬ-ਸਪੇਸ ਦੂਜੇ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮਾਇਆ ਹੋਵੇ (W₁ ⊆ W₂ ਜਾਂ W₂ ⊆ W₁)।',
                'ਭੁਲੇਖਾ: ਕੋਈ ਮੈਟ੍ਰਿਕਸ ਡਾਇਗਨਲਾਈਜ਼ੇਬਲ ਤਾਂ ਹੀ ਹੁੰਦਾ ਹੈ ਜੇਕਰ ਸਾਰੇ ਆਈਗਨ ਮੁੱਲ ਵੱਖ-ਵੱਖ ਹੋਣ। ਸੁਧਾਰ: ਵੱਖ-ਵੱਖ ਆਈਗਨ ਮੁੱਲ ਹੋਣਾ ਇੱਕ ਕਾਫ਼ੀ ਸ਼ਰਤ ਹੈ ਪਰ ਲਾਜ਼ਮੀ ਨਹੀਂ; ਆਈਡੈਂਟਿਟੀ ਮੈਟ੍ਰਿਕਸ ਦੇ ਸਾਰੇ ਆਈਗਨ ਮੁੱਲ 1 ਹੁੰਦੇ ਹਨ ਅਤੇ ਉਹ ਪਹਿਲਾਂ ਹੀ ਡਾਇਗਨਲ ਹੈ।',
                'ਭੁਲੇਖਾ: ਮੈਟ੍ਰਿਕਸ ਗੁਣਨਫਲ AB ਦਾ ਰੈਂਕ rank(A) · rank(B) ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਗੁਣਨਫਲ ਦਾ ਰੈਂਕ rank(AB) ≤ min(rank(A), rank(B)) ਹੁੰਦਾ ਹੈ; ਇਹ ਕਿਸੇ ਵੀ ਮੈਟ੍ਰਿਕਸ ਦੇ ਰੈਂਕ ਤੋਂ ਵੱਧ ਨਹੀਂ ਹੋ ਸਕਦਾ।'
            ],
            hi: [
                'भ्रांति: किन्हीं दो उपसमष्टियों का संघ (Union) सदैव एक उपसमष्टि होता है। सुधार: संघ W₁ ∪ W₂ केवल तभी उपसमष्टि होता है जब एक उपसमष्टि दूसरे में पूर्णतः समाहित हो (W₁ ⊆ W₂ अथवा W₂ ⊆ W₁)।',
                'भ्रांति: कोई आव्यूह विकर्णीय केवल तभी होता है जब उसके सभी आइगेन मान भिन्न हों। सुधार: भिन्न आइगेन मान होना पर्याप्त प्रतिबंध है अनिवार्य नहीं; तत्समक आव्यूह I के सभी आइगेन मान समान होते हैं फिर भी वह विकर्णीय है।',
                'भ्रांति: आव्यूह गुणनफल AB की कोटि rank(A) · rank(B) होती है। सुधार: गुणनफल की कोटि rank(AB) ≤ min(rank(A), rank(B)) होती है; यह दोनों में से किसी भी आव्यूह की कोटि से अधिक नहीं हो सकती।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Find the eigenvalues and corresponding eigenvectors of the symmetric matrix A = [[2, 1], [1, 2]], and verify orthogonality.',
                    pa: 'ਸਮਮਿਤੀ ਮੈਟ੍ਰਿਕਸ A = [[2, 1], [1, 2]] ਦੇ ਆਈਗਨ ਮੁੱਲ ਅਤੇ ਆਈਗਨ ਵੈਕਟਰ ਪਤਾ ਕਰੋ, ਅਤੇ ਲੰਬਵਤਤਾ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।',
                    hi: 'सममित आव्यूह A = [[2, 1], [1, 2]] के आइगेन मान तथा संगत आइगेन सदिश ज्ञात कीजिए एवं लंबिकता का सत्यापन कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Form the characteristic equation: det(A - λI) = (2 - λ)² - 1 = λ² - 4λ + 3 = 0.',
                        'Factor the quadratic equation: (λ - 3)(λ - 1) = 0, giving eigenvalues λ₁ = 3 and λ₂ = 1.',
                        'For λ₁ = 3: (A - 3I)v = [[-1, 1], [1, -1]][x, y]ᵀ = [0, 0]ᵀ => -x + y = 0 => y = x. Eigenvector v₁ = [1, 1]ᵀ.',
                        'For λ₂ = 1: (A - I)v = [[1, 1], [1, 1]][x, y]ᵀ = [0, 0]ᵀ => x + y = 0 => y = -x. Eigenvector v₂ = [1, -1]ᵀ.',
                        'Verify orthogonality: Dot product v₁ · v₂ = (1)(1) + (1)(-1) = 0, confirming eigenvectors are mutually orthogonal.'
                    ],
                    pa: [
                        'ਵਿਸ਼ੇਸ਼ਤਾ ਸਮੀਕਰਨ: det(A - λI) = (2 - λ)² - 1 = λ² - 4λ + 3 = 0।',
                        'ਗੁਣਨਖੰਡ ਬਣਾਓ: (λ - 3)(λ - 1) = 0 => ਆਈਗਨ ਮੁੱਲ λ₁ = 3 ਅਤੇ λ₂ = 1 ਹਨ।',
                        'λ₁ = 3 ਲਈ: (A - 3I)v = 0 => -x + y = 0 => y = x. ਵੈਕਟਰ v₁ = [1, 1]ᵀ।',
                        'λ₂ = 1 ਲਈ: (A - I)v = 0 => x + y = 0 => y = -x. ਵੈਕਟਰ v₂ = [1, -1]ᵀ।',
                        'ਲੰਬਵਤਤਾ ਦੀ ਜਾਂਚ: v₁ · v₂ = (1)(1) + (1)(-1) = 0, ਜੋ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹੈ ਕਿ ਵੈਕਟਰ ਪਰਸਪਰ ਲੰਬਵਤ ਹਨ।'
                    ],
                    hi: [
                        'अभिलाक्षणिक समीकरण: det(A - λI) = (2 - λ)² - 1 = λ² - 4λ + 3 = 0।',
                        'गुणनखंड करने पर: (λ - 3)(λ - 1) = 0 => आइगेन मान λ₁ = 3 तथा λ₂ = 1 हैं।',
                        'λ₁ = 3 हेतु: (A - 3I)v = 0 => -x + y = 0 => y = x. आइगेन सदिश v₁ = [1, 1]ᵀ।',
                        'λ₂ = 1 हेतु: (A - I)v = 0 => x + y = 0 => y = -x. आइगेन सदिश v₂ = [1, -1]ᵀ।',
                        'लंबिकता सत्यापन: v₁ · v₂ = (1)(1) + (1)(-1) = 0, जो सिद्ध करता है कि दोनों सदिश परस्पर लंबवत हैं।'
                    ]
                },
                finalAnswer: {
                    en: 'Eigenvalues are λ = 3, 1; Orthogonal eigenvectors are v₁ = [1, 1]ᵀ and v₂ = [1, -1]ᵀ.',
                    pa: 'ਆਈਗਨ ਮੁੱਲ λ = 3, 1 ਹਨ; ਲੰਬਵਤ ਆਈਗਨ ਵੈਕਟਰ v₁ = [1, 1]ᵀ ਅਤੇ v₂ = [1, -1]ᵀ ਹਨ।',
                    hi: 'आइगेन मान λ = 3, 1 हैं; परस्पर लंबवत आइगेन सदिश v₁ = [1, 1]ᵀ तथा v₂ = [1, -1]ᵀ हैं।'
                }
            },
            {
                problem: {
                    en: 'Investigate the consistency of the system: x + y + z = 6, x + 2y + 3z = 14, x + 4y + λz = μ for values of λ and μ.',
                    pa: 'λ ਅਤੇ μ ਦੇ ਵੱਖ-ਵੱਖ ਮੁੱਲਾਂ ਲਈ ਸਮੀਕਰਨ ਪ੍ਰਣਾਲੀ x + y + z = 6, x + 2y + 3z = 14, x + 4y + λz = μ ਦੀ ਸੰਗਤਤਾ ਦੀ ਜਾਂਚ ਕਰੋ।',
                    hi: 'λ तथा μ के मानों हेतु समीकरण निकाय: x + y + z = 6, x + 2y + 3z = 14, x + 4y + λz = μ की संगतता का परीक्षण कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Set up augmented matrix [A|B]: [[1, 1, 1 | 6], [1, 2, 3 | 14], [1, 4, λ | μ]].',
                        'Row operation R₂ -> R₂ - R₁: [[1, 1, 1 | 6], [0, 1, 2 | 8], [1, 4, λ | μ]].',
                        'Row operation R₃ -> R₃ - R₁: [[1, 1, 1 | 6], [0, 1, 2 | 8], [0, 3, λ - 1 | μ - 6]].',
                        'Row operation R₃ -> R₃ - 3R₂: [[1, 1, 1 | 6], [0, 1, 2 | 8], [0, 0, λ - 7 | μ - 30]].',
                        'Case 1: If λ ≠ 7, rank(A) = rank([A|B]) = 3 => Unique solution.',
                        'Case 2: If λ = 7 and μ = 30, rank(A) = rank([A|B]) = 2 < 3 => Infinitely many solutions.',
                        'Case 3: If λ = 7 and μ ≠ 30, rank(A) = 2 < rank([A|B]) = 3 => Inconsistent (No solution).'
                    ],
                    pa: [
                        'ਵਧਾਈ ਗਈ ਮੈਟ੍ਰਿਕਸ [A|B]: [[1, 1, 1 | 6], [1, 2, 3 | 14], [1, 4, λ | μ]]।',
                        'ਕਿਰਿਆ R₂ -> R₂ - R₁: [[1, 1, 1 | 6], [0, 1, 2 | 8], [1, 4, λ | μ]]।',
                        'ਕਿਰਿਆ R₃ -> R₃ - R₁: [[1, 1, 1 | 6], [0, 1, 2 | 8], [0, 3, λ - 1 | μ - 6]]।',
                        'ਕਿਰਿਆ R₃ -> R₃ - 3R₂: [[1, 1, 1 | 6], [0, 1, 2 | 8], [0, 0, λ - 7 | μ - 30]]।',
                        'ਕੇਸ 1: ਜੇਕਰ λ ≠ 7, rank(A) = rank([A|B]) = 3 => ਅਦੁੱਤੀ ਹੱਲ।',
                        'ਕੇਸ 2: ਜੇਕਰ λ = 7 ਅਤੇ μ = 30, rank(A) = rank([A|B]) = 2 < 3 => ਅਨੰਤ ਹੱਲ।',
                        'ਕੇਸ 3: ਜੇਕਰ λ = 7 ਅਤੇ μ ≠ 30, rank(A) = 2 < rank([A|B]) = 3 => ਕੋਈ ਹੱਲ ਨਹੀਂ (ਅਸੰਗਤ)।'
                    ],
                    hi: [
                        'संवर्धित आव्यूह [A|B]: [[1, 1, 1 | 6], [1, 2, 3 | 14], [1, 4, λ | μ]]।',
                        'पंक्ति संक्रिया R₂ -> R₂ - R₁: [[1, 1, 1 | 6], [0, 1, 2 | 8], [1, 4, λ | μ]]।',
                        'पंक्ति संक्रिया R₃ -> R₃ - R₁: [[1, 1, 1 | 6], [0, 1, 2 | 8], [0, 3, λ - 1 | μ - 6]]।',
                        'पंक्ति संक्रिया R₃ -> R₃ - 3R₂: [[1, 1, 1 | 6], [0, 1, 2 | 8], [0, 0, λ - 7 | μ - 30]]।',
                        'स्थिति 1: यदि λ ≠ 7 => अद्वितीय हल।',
                        'स्थिति 2: यदि λ = 7 तथा μ = 30 => अनंत हल।',
                        'स्थिति 3: यदि λ = 7 तथा μ ≠ 30 => कोई हल नहीं (असंगत)।'
                    ]
                },
                finalAnswer: {
                    en: 'Unique solution if λ ≠ 7; Infinitely many if λ = 7, μ = 30; No solution if λ = 7, μ ≠ 30.',
                    pa: 'ਅਦੁੱਤੀ ਹੱਲ ਜੇਕਰ λ ≠ 7; ਅਨੰਤ ਹੱਲ ਜੇਕਰ λ = 7, μ = 30; ਕੋਈ ਹੱਲ ਨਹੀਂ ਜੇਕਰ λ = 7, μ ≠ 30।',
                    hi: 'अद्वितीय हल यदि λ ≠ 7; अनंत हल यदि λ = 7, μ = 30; कोई हल नहीं यदि λ = 7, μ ≠ 30।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-la-1',
                question: {
                    en: 'What is the Rank-Nullity Theorem for a linear transformation T: V -> W?',
                    pa: 'ਰੇਖੀ ਰੂਪਾਂਤਰਨ T: V -> W ਲਈ ਰੈਂਕ-ਨਲਿਟੀ ਪ੍ਰਮੇਯ ਕੀ ਹੈ?',
                    hi: 'रैखिक रूपांतरण T: V -> W हेतु कोटि-शून्यता प्रमेय क्या है?'
                },
                answer: {
                    en: 'dim(V) = rank(T) + nullity(T), where nullity(T) = dim(ker(T)) and rank(T) = dim(Im(T)).',
                    pa: 'dim(V) = rank(T) + nullity(T), ਜਿੱਥੇ nullity(T) = dim(ker(T)) ਅਤੇ rank(T) = dim(Im(T)) ਹੈ।',
                    hi: 'dim(V) = rank(T) + nullity(T), जहाँ nullity(T) = dim(ker(T)) तथा rank(T) = dim(Im(T)) है।'
                }
            },
            {
                id: 'fc-la-2',
                question: {
                    en: 'What is the sum and product of the eigenvalues of an n x n matrix A?',
                    pa: 'ਇੱਕ n x n ਮੈਟ੍ਰਿਕਸ A ਦੇ ਆਈਗਨ ਮੁੱਲਾਂ ਦਾ ਜੋੜ ਅਤੇ ਗੁਣਨਫਲ ਕੀ ਹੁੰਦਾ ਹੈ?',
                    hi: 'एक n x n आव्यूह A के आइगेन मानों का योग तथा गुणनफल क्या होता है?'
                },
                answer: {
                    en: 'Sum of eigenvalues = Trace(A) (sum of diagonal entries); Product of eigenvalues = Det(A).',
                    pa: 'ਆਈਗਨ ਮੁੱਲਾਂ ਦਾ ਜੋੜ = Trace(A) (ਮੁੱਖ ਵਿਕਰਣ ਦਾ ਜੋੜ); ਗੁਣਨਫਲ = Det(A) ਹੁੰਦਾ ਹੈ।',
                    hi: 'आइगेन मानों का योग = Trace(A) (मुख्य विकर्ण का योग); गुणनफल = Det(A) होता है।'
                }
            },
            {
                id: 'fc-la-3',
                question: {
                    en: 'What is the exact condition for a square matrix A to be diagonalizable?',
                    pa: 'ਵਰਗ ਮੈਟ੍ਰਿਕਸ A ਦੇ ਡਾਇਗਨਲਾਈਜ਼ੇਬਲ ਹੋਣ ਦੀ ਸਹੀ ਸ਼ਰਤ ਕੀ ਹੈ?',
                    hi: 'किसी वर्ग आव्यूह A के विकर्णीय होने का यथार्थ प्रतिबंध क्या है?'
                },
                answer: {
                    en: 'Geometric Multiplicity (GM) = Algebraic Multiplicity (AM) for each eigenvalue, or equivalently, A has n linearly independent eigenvectors.',
                    pa: 'ਹਰੇਕ ਆਈਗਨ ਮੁੱਲ ਲਈ GM = AM ਹੋਵੇ, ਜਾਂ ਮੈਟ੍ਰਿਕਸ ਕੋਲ n ਰੇਖੀ ਤੌਰ ਤੇ ਸੁਤੰਤਰ ਆਈਗਨ ਵੈਕਟਰ ਹੋਣ।',
                    hi: 'प्रत्येक आइगेन मान हेतु GM = AM हो, अथवा A के पास n रैखिकतः स्वतंत्र आइगेन सदिश हों।'
                }
            },
            {
                id: 'fc-la-4',
                question: {
                    en: 'Under what condition is the union of two subspaces W₁ and W₂ also a subspace?',
                    pa: 'ਕਿਸ ਸ਼ਰਤ ਅਧੀਨ ਦੋ ਸਬ-ਸਪੇਸਾਂ W₁ ਅਤੇ W₂ ਦਾ ਸੰਘ (Union) ਵੀ ਇੱਕ ਸਬ-ਸਪੇਸ ਹੁੰਦਾ ਹੈ?',
                    hi: 'किस प्रतिबंध के अंतर्गत दो उपसमष्टियों W₁ तथा W₂ का संघ भी एक उपसमष्टि होता है?'
                },
                answer: {
                    en: 'If and only if one subspace is contained within the other, i.e., W₁ ⊆ W₂ or W₂ ⊆ W₁.',
                    pa: 'ਸਿਰਫ਼ ਤਾਂ ਹੀ ਜੇਕਰ ਇੱਕ ਸਬ-ਸਪੇਸ ਦੂਜੇ ਵਿੱਚ ਸਮਾਇਆ ਹੋਵੇ, ਭਾਵ W₁ ⊆ W₂ ਜਾਂ W₂ ⊆ W₁।',
                    hi: 'केवल तभी जब एक उपसमष्टि दूसरे में समाहित हो, अर्थात् W₁ ⊆ W₂ अथवा W₂ ⊆ W₁।'
                }
            },
            {
                id: 'fc-la-5',
                question: {
                    en: 'According to Rouché-Capelli Theorem, when is the system AX = B inconsistent?',
                    pa: 'ਰੂਚੇ-ਕੈਪੇਲੀ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ ਸਮੀਕਰਨ ਪ੍ਰਣਾਲੀ AX = B ਕਦੋਂ ਅਸੰਗਤ (Inconsistent) ਹੁੰਦੀ ਹੈ?',
                    hi: 'रूशे-कापेली प्रमेय के अनुसार निकाय AX = B कब असंगत (Inconsistent) होता है?'
                },
                answer: {
                    en: 'When rank(A) < rank([A|B]), meaning the coefficient matrix has lower rank than the augmented matrix.',
                    pa: 'ਜਦੋਂ rank(A) < rank([A|B]) ਹੋਵੇ, ਭਾਵ ਗੁਣਾਂਕ ਮੈਟ੍ਰਿਕਸ ਦਾ ਰੈਂਕ ਵਧਾਈ ਗਈ ਮੈਟ੍ਰਿਕਸ ਤੋਂ ਘੱਟ ਹੋਵੇ।',
                    hi: 'जब rank(A) < rank([A|B]) हो, अर्थात् गुणांक आव्यूह की कोटि संवर्धित आव्यूह से कम हो।'
                }
            }
        ]
    },

    // =========================================================================
    // 2. REAL ANALYSIS & CALCULUS
    // =========================================================================
    {
        topicId: 'math-real-analysis-calculus',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Master Cadre Mathematics: Covers Limits, Continuity, Differentiability, IVT, Rolle’s Theorem, Lagrange’s & Cauchy’s MVT, Taylor’s & Maclaurin’s Series with Remainders, Indeterminate Forms, Extrema of 1 and 2 variables (Lagrange multipliers, Hessian), Series Convergence Tests, Riemann Integration, and FTC.'
        },
        bookRefs: [
            {
                title: 'Mathematical Analysis',
                author: 'S.C. Malik & Savita Arora',
                chapter: 'Chapters 2, 5, 6, 9 & 10 (Real Sequences, Continuity, Differentiability, Taylor Theorem, Riemann Integral)',
                relevance: 'Prescribed textbook for Punjab graduation syllabus covering rigorous proofs and counterexamples.'
            },
            {
                title: 'Principles of Mathematical Analysis',
                author: 'Walter Rudin',
                chapter: 'Chapters 3, 5 & 6 (Numerical Sequences, Differentiation, Riemann-Stieltjes Integral)',
                relevance: 'Gold standard for compactness, uniform continuity, and integration.'
            }
        ],
        summary: {
            en: `### 1. Limits, Continuity & Differentiability
- **Intermediate Value Theorem (Bolzano):** If $f: [a, b] \\to \\mathbb{R}$ is continuous and $f(a) \\ne f(b)$, then for every value $k$ strictly between $f(a)$ and $f(b)$, there exists at least one $c \\in (a, b)$ such that $f(c) = k$.
- **Heine-Borel / Uniform Continuity:** If $f$ is continuous on a closed and bounded (compact) interval $[a, b]$, then $f$ is **uniformly continuous** on $[a, b]$ and bounded (attains its supremum and infimum).
- **Differentiability implies Continuity:** If $f$ is differentiable at $c$, then $f$ is continuous at $c$. The converse is false (e.g., $f(x) = |x|$ at $x=0$, or Weierstrass nowhere-differentiable continuous function).

### 2. Mean Value Theorems (MVT) & Taylor Expansions
- **Rolle's Theorem:** If $f$ is:
  1. Continuous on $[a, b]$,
  2. Differentiable on $(a, b)$,
  3. $f(a) = f(b)$,
  then $\\exists c \\in (a, b)$ such that $f'(c) = 0$.
- **Lagrange's MVT:** Under conditions (1) & (2), $\\exists c \\in (a, b)$ such that:
  $$f'(c) = \\frac{f(b) - f(a)}{b - a}$$
- **Cauchy's MVT:** If $f, g$ are continuous on $[a, b]$, differentiable on $(a, b)$, and $g'(x) \\ne 0$ on $(a, b)$, then $\\exists c \\in (a, b)$ such that:
  $$\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$$
- **Taylor's Theorem with Remainder:**
  $$f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\dots + \\frac{f^{(n)}(a)}{n!}(x-a)^n + R_n(x)$$
  - **Lagrange's Form of Remainder:** $R_n(x) = \\frac{(x-a)^{n+1}}{(n+1)!} f^{(n+1)}(a + \\theta(x-a))$, where $0 < \\theta < 1$.
  - **Cauchy's Form of Remainder:** $R_n(x) = \\frac{(x-a)^{n+1}}{n!} (1-\\theta)^n f^{(n+1)}(a + \\theta(x-a))$.

### 3. Indeterminate Forms & L'Hôpital's Rule
- Seven indeterminate forms: $\\frac{0}{0}, \\frac{\\infty}{\\infty}, 0 \\cdot \\infty, \\infty - \\infty, 0^0, 1^\\infty, \\infty^0$.
- **L'Hôpital's Rule:** Applicable directly to $\\frac{0}{0}$ and $\\frac{\\infty}{\\infty}$.
- Power forms ($0^0, 1^\\infty, \\infty^0$) are solved using $y = [f(x)]^{g(x)} \\implies \\ln y = g(x) \\ln f(x)$. For $1^\\infty$, standard shortcut:
  $$\\lim_{x \\to a} [f(x)]^{g(x)} = e^{\\lim_{x \\to a} g(x)[f(x) - 1]}$$

### 4. Maxima & Minima of Two Variables (Hessian Test & Lagrange Multipliers)
- **Critical Points:** Set $f_x = 0$ and $f_y = 0$.
- **Hessian Discriminant:** $D = f_{xx} f_{yy} - (f_{xy})^2$.
  - If $D > 0$ and $f_{xx} > 0$: **Local Minimum**.
  - If $D > 0$ and $f_{xx} < 0$: **Local Maximum**.
  - If $D < 0$: **Saddle Point** (neither maximum nor minimum).
  - If $D = 0$: **Test Inconclusive**.
- **Lagrange Multipliers:** To optimize $f(x, y, z)$ subject to constraint $g(x, y, z) = 0$:
  $$\\nabla f = \\lambda \\nabla g, \\quad g(x, y, z) = 0$$

### 5. Infinite Series Convergence Tests
- **D'Alembert's Ratio Test:** $\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = L$. Converges if $L < 1$, diverges if $L > 1$, test fails if $L = 1$.
- **Cauchy's Root Test:** $\\lim_{n \\to \\infty} |a_n|^{1/n} = L$. Converges if $L < 1$, diverges if $L > 1$, fails if $L = 1$.
- **Raabe's Test (when Ratio Test fails with $L = 1$):**
  $$\\lim_{n \\to \\infty} n \\left( \\frac{a_n}{a_{n+1}} - 1 \\right) = R$$
  Converges if $R > 1$, diverges if $R < 1$, fails if $R = 1$.
- **Leibniz Alternating Series Test:** $\\sum (-1)^{n-1} b_n$ ($b_n > 0$) converges if:
  1. $b_{n+1} \\le b_n$ for all $n$ (monotonically decreasing), and
  2. $\\lim_{n \\to \\infty} b_n = 0$.

### 6. Riemann Integration & Fundamental Theorem of Calculus (FTC)
- **Criterion of Integrability:** $f$ is Riemann integrable on $[a, b]$ ($f \\in \\mathcal{R}[a, b]$) $\\iff \\forall \\epsilon > 0$, $\\exists$ partition $P$ such that $U(P, f) - L(P, f) < \\epsilon$.
- **Theorems:** Every continuous function on $[a, b]$ is Riemann integrable. Every bounded monotonic function on $[a, b]$ is Riemann integrable.
- **First FTC:** If $f \\in \\mathcal{R}[a, b]$ and $F(x) = \\int_a^x f(t) dt$, then $F$ is continuous on $[a, b]$; if $f$ is continuous at $c$, $F'(c) = f(c)$.
- **Leibniz Rule for Differentiation under Integral:**
  $$\\frac{d}{dx} \\int_{u(x)}^{v(x)} f(x, t) dt = \\int_{u(x)}^{v(x)} \\frac{\\partial f}{\\partial x} dt + f(x, v(x)) v'(x) - f(x, u(x)) u'(x)$$`,
            pa: `### 1. ਸੀਮਾਵਾਂ, ਨਿਰੰਤਰਤਾ ਅਤੇ ਡਿਫਰੈਂਸ਼ੀਏਬਿਲਟੀ
- **ਬੋਲਜ਼ਾਨੋ ਮੱਧਮਾਨ ਮੁੱਲ ਪ੍ਰਮੇਯ (IVT):** ਜੇਕਰ $f$ ਬੰਦ ਅੰਤਰਾਲ $[a, b]$ ਉੱਤੇ ਨਿਰੰਤਰ ਹੈ ਅਤੇ $f(a) \\ne f(b)$, ਤਾਂ $f(a)$ ਅਤੇ $f(b)$ ਦੇ ਵਿਚਕਾਰ ਹਰੇਕ ਮੁੱਲ $k$ ਲਈ ਇੱਕ ਬਿੰਦੂ $c \\in (a, b)$ ਅਜਿਹਾ ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ $f(c) = k$ ਹੋਵੇ।
- **ਇਕਰੂਪ ਨਿਰੰਤਰਤਾ (Uniform Continuity):** ਬੰਦ ਅਤੇ ਸੀਮਾਬੱਧ ਅੰਤਰਾਲ $[a, b]$ ਉੱਤੇ ਨਿਰੰਤਰ ਫਲਨ ਹਮੇਸ਼ਾ ਇਕਰੂਪ ਨਿਰੰਤਰ (Uniformly Continuous) ਹੁੰਦਾ ਹੈ।
- **ਡਿਫਰੈਂਸ਼ੀਏਬਿਲਟੀ ਨਿਰੰਤਰਤਾ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ:** ਪਰ ਇਸਦਾ ਉਲਟ ਸੱਚ ਨਹੀਂ ਹੈ ($f(x) = |x|$, $x=0$ 'ਤੇ ਨਿਰੰਤਰ ਹੈ ਪਰ ਡਿਫਰੈਂਸ਼ੀਏਬਲ ਨਹੀਂ)।

### 2. ਮੱਧਮਾਨ ਪ੍ਰਮੇਯ (MVT) ਅਤੇ ਟੇਲਰ ਪ੍ਰਸਾਰ
- **ਰੋਲ ਦਾ ਪ੍ਰਮੇਯ (Rolle's Theorem):** ਜੇ $f$ $[a, b]$ ਉੱਤੇ ਨਿਰੰਤਰ, $(a, b)$ ਉੱਤੇ ਡਿਫਰੈਂਸ਼ੀਏਬਲ ਅਤੇ $f(a) = f(b)$ ਹੋਵੇ, ਤਾਂ $\\exists c \\in (a, b)$ ਜਿੱਥੇ $f'(c) = 0$।
- **ਲਗਰਾਂਜ ਦਾ MVT:** $f'(c) = \\frac{f(b) - f(a)}{b - a}$।
- **ਕਾਸ਼ੀ ਦਾ MVT:** $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$।
- **ਟੇਲਰ ਸੀਰੀਜ਼ ਦਾ ਲਗਰਾਂਜ ਬਾਕੀ (Remainder):** $R_n(x) = \\frac{(x-a)^{n+1}}{(n+1)!} f^{(n+1)}(a + \\theta(x-a))$।

### 3. ਅਣਮਿਥੇ ਰੂਪ ਅਤੇ ਲ'ਹੌਪੀਟਲ ਨਿਯਮ
- $\\frac{0}{0}$ ਅਤੇ $\\frac{\\infty}{\\infty}$ ਲਈ ਲ'ਹੌਪੀਟਲ ਨਿਯਮ ਸਿੱਧਾ ਲਾਗੂ ਹੁੰਦਾ ਹੈ। ਘਾਤ ਰੂਪਾਂ ($1^\\infty$) ਲਈ:
  $$\\lim [f(x)]^{g(x)} = e^{\\lim g(x)[f(x) - 1]}$$

### 4. ਦੋ ਚਲਾਂ ਦੇ ਉੱਚਤਮ ਅਤੇ ਨਿਊਨਤਮ ਮੁੱਲ (Hessian Test)
- $D = f_{xx} f_{yy} - (f_{xy})^2$।
  - $D > 0, f_{xx} > 0 \\implies$ ਲੋਕਲ ਨਿਊਨਤਮ (Local Minimum)।
  - $D > 0, f_{xx} < 0 \\implies$ ਲੋਕਲ ਉੱਚਤਮ (Local Maximum)।
  - $D < 0 \\implies$ ਸੈਡਲ ਬਿੰਦੂ (Saddle Point)।
  - $D = 0 \\implies$ ਟੈਸਟ ਅਨਿਰਣਾਇਕ।

### 5. ਅਨੰਤ ਲੜੀ ਅਭਿਸਾਰਿਤਾ ਟੈਸਟ (Convergence Tests)
- **ਡੀ-ਐਲਮਬਰਟ ਅਨੁਪਾਤ ਟੈਸਟ:** $\\lim |a_{n+1}/a_n| = L$; $L < 1$ ਤੇ ਅਭਿਸਾਰੀ, $L > 1$ ਤੇ ਅਪਸਾਰੀ।
- **ਰਾਬੇ ਦਾ ਟੈਸਟ (Raabe's Test):** $\\lim n(a_n/a_{n+1} - 1) = R$; $R > 1$ ਤੇ ਅਭਿਸਾਰੀ, $R < 1$ ਤੇ ਅਪਸਾਰੀ।
- **ਲੀਬਨੀਜ਼ ਅਲਟਰਨੇਟਿੰਗ ਲੜੀ ਟੈਸਟ:** $\\sum (-1)^{n-1} b_n$ ਅਭਿਸਾਰੀ ਹੁੰਦੀ ਹੈ ਜੇਕਰ $b_n$ ਘਟਦੀ ਲੜੀ ਹੋਵੇ ਅਤੇ $\\lim b_n = 0$ ਹੋਵੇ।

### 6. ਰੀਮਾਨ ਸਮਾਕਲਨ (Riemann Integration)
- ਹਰੇਕ ਨਿਰੰਤਰ ਜਾਂ ਸੀਮਾਬੱਧ ਇਕਸੁਰ (Monotonic) ਫਲਨ ਰੀਮਾਨ ਸਮਾਕਲਨਯੋਗ (Integrable) ਹੁੰਦਾ ਹੈ।
- **ਲੀਬਨੀਜ਼ ਡਿਫਰੈਂਸ਼ੀਏਸ਼ਨ ਨਿਯਮ:** ਸੀਮਾਵਾਂ ਵਾਲੇ ਇੰਟੀਗਰਲ ਦਾ ਅਵਕਲਨ ਕਰਨ ਲਈ ਲਾਗੂ ਹੁੰਦਾ ਹੈ।`,
            hi: `### 1. सीमा, सांतत्य एवं अवकलनीयता
- **मध्यवर्ती मान प्रमेय (IVT):** यदि $f: [a, b] \\to \\mathbb{R}$ संतत है तथा $f(a) \\ne f(b)$, तो $f(a)$ व $f(b)$ के मध्य प्रत्येक मान $k$ हेतु $\\exists c \\in (a, b)$ जहाँ $f(c) = k$।
- **एकसमान सांतत्य:** संवृत व परिबद्ध अंतराल $[a, b]$ पर संतत फलन अनिवार्यतः एकसमान संतत (Uniformly Continuous) होता है।
- **अवकलनीयता सांतत्य को इंगित करती है:** परंतु विलोम सत्य नहीं है (जैसे $f(x) = |x|$ बिंदु $x=0$ पर संतत है किंतु अवकलनीय नहीं)।

### 2. मध्यमान प्रमेय (MVT) एवं टेलर श्रेणी
- **रोल प्रमेय:** यदि $f$ $[a, b]$ पर संतत, $(a, b)$ पर अवकलनीय तथा $f(a) = f(b)$ हो, तो $\\exists c \\in (a, b)$ जहाँ $f'(c) = 0$।
- **लैग्रांज MVT:** $f'(c) = \\frac{f(b) - f(a)}{b - a}$।
- **कोशी MVT:** $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$।
- **टेलर प्रमेय का लैग्रांज शेषफल:** $R_n(x) = \\frac{(x-a)^{n+1}}{(n+1)!} f^{(n+1)}(a + \\theta(x-a))$।

### 3. अनिर्धार्य रूप एवं लॉपिटल नियम
- $\\frac{0}{0}$ व $\\frac{\\infty}{\\infty}$ हेतु लॉपिटल नियम प्रयुक्त होता है। $1^\\infty$ रूप हेतु मानक सूत्र:
  $$\\lim [f(x)]^{g(x)} = e^{\\lim g(x)[f(x) - 1]}$$

### 4. दो चरों के उच्चिष्ठ व निम्निष्ठ (Hessian परीक्षण)
- $D = f_{xx} f_{yy} - (f_{xy})^2$।
  - $D > 0, f_{xx} > 0 \\implies$ स्थानीय निम्निष्ठ।
  - $D > 0, f_{xx} < 0 \\implies$ स्थानीय उच्चिष्ठ।
  - $D < 0 \\implies$ पल्याण बिंदु (Saddle Point)।
  - $D = 0 \\implies$ परीक्षण अनिर्णायक।

### 5. अनंत श्रेणी अभिसरण परीक्षण
- **डी-डीएलम्बर्ट अनुपात परीक्षण:** $\\lim |a_{n+1}/a_n| = L$; $L < 1$ पर अभिसारी, $L > 1$ पर अपसारी।
- **राबे परीक्षण:** $\\lim n(a_n/a_{n+1} - 1) = R$; $R > 1$ पर अभिसारी, $R < 1$ पर अपसारी।
- **लाइब्निज एकांतर श्रेणी परीक्षण:** $\\sum (-1)^{n-1} b_n$ अभिसारी होती है यदि $b_n$ एकदिष्ट ह्रासमान हो तथा $\\lim b_n = 0$ हो।

### 6. रीमान समाकलन
- संवृत अंतराल $[a, b]$ पर प्रत्येक संतत अथवा एकदिष्ट फलन रीमान समाकलनीय होता है।
- **समाकलन के अंतर्गत अवकलन (लाइब्निज नियम):** चर सीमाओं वाले समाकलनों के अवकलन हेतु प्रयुक्त।`
        },
        keyNotes: {
            en: [
                'Heine-Borel property: Every continuous function on a closed bounded interval [a, b] is uniformly continuous.',
                'Rolle’s Theorem requires three hypotheses: continuity on [a, b], differentiability on (a, b), and f(a) = f(b).',
                'Taylor remainder forms: Lagrange form R_n(x) = (x-a)ⁿ⁺¹ / (n+1)! fⁿ⁺¹(c); Cauchy form R_n(x) = (x-a)ⁿ⁺¹ / n! (1-θ)ⁿ fⁿ⁺¹(c).',
                'Two-variable extrema: Discriminant D = f_xx f_yy − (f_xy)². D > 0 and f_xx > 0 is local min; D > 0 and f_xx < 0 is local max; D < 0 is saddle point.',
                'Raabe’s test resolves L = 1 in ratio test: lim n(a_n / a_{n+1} − 1) = R. Converges if R > 1, diverges if R < 1.',
                'Leibniz Integral Rule: d/dx ∫_{u(x)}^{v(x)} f(x,t) dt = ∫_{u(x)}^{v(x)} ∂f/∂x dt + f(x, v(x))v′(x) − f(x, u(x))u′(x).'
            ],
            pa: [
                'ਇਕਰੂਪ ਨਿਰੰਤਰਤਾ: ਬੰਦ ਅੰਤਰਾਲ [a, b] ਉੱਤੇ ਹਰੇਕ ਨਿਰੰਤਰ ਫਲਨ ਯੂਨੀਫਾਰਮ ਨਿਰੰਤਰ (Uniformly Continuous) ਹੁੰਦਾ ਹੈ।',
                'ਰੋਲ ਪ੍ਰਮੇਯ ਦੀਆਂ 3 ਸ਼ਰਤਾਂ: [a, b] ਉੱਤੇ ਨਿਰੰਤਰਤਾ, (a, b) ਉੱਤੇ ਡਿਫਰੈਂਸ਼ੀਏਬਿਲਟੀ ਅਤੇ f(a) = f(b)।',
                'ਟੇਲਰ ਰਿਮੇਂਡਰ: ਲਗਰਾਂਜ ਰੂਪ R_n = (x-a)ⁿ⁺¹ / (n+1)! fⁿ⁺¹(c) ਅਤੇ ਕਾਸ਼ੀ ਰੂਪ R_n = (x-a)ⁿ⁺¹ / n! (1-θ)ⁿ fⁿ⁺¹(c)।',
                'ਦੋ ਚਰਾਂ ਦੇ ਐਕਸਟਰੀਮਾ: D = f_xx f_yy − (f_xy)²। D > 0, f_xx > 0 ਤੇ ਮਿਨੀਮਮ; D > 0, f_xx < 0 ਤੇ ਮੈਕਸੀਮਮ; D < 0 ਤੇ ਸੈਡਲ ਬਿੰਦੂ।',
                'ਰਾਬੇ ਟੈਸਟ: ਜਦੋਂ ਰੇਸ਼ੋ ਟੈਸਟ ਅਸਫਲ ਹੋਵੇ, lim n(a_n / a_{n+1} − 1) = R। R > 1 ਤੇ ਅਭਿਸਾਰੀ, R < 1 ਤੇ ਅਪਸਾਰੀ।',
                'ਲੀਬਨੀਜ਼ ਇੰਟੀਗਰਲ ਨਿਯਮ: ਸੀਮਾਵਾਂ ਵਾਲੇ ਇੰਟੀਗਰਲ ਦਾ ਅਵਕਲਨ ਕਰਨ ਲਈ ਸਿੱਧਾ ਫਾਰਮੂਲਾ।'
            ],
            hi: [
                'एकसमान सांतत्य: संवृत अंतराल [a, b] पर प्रत्येक संतत फलन एकसमान संतत होता है।',
                'रोल प्रमेय के तीन प्रतिबंध: [a, b] पर सांतत्य, (a, b) पर अवकलनीयता तथा f(a) = f(b)।',
                'टेलर शेषफल: लैग्रांज रूप R_n = (x-a)ⁿ⁺¹ / (n+1)! fⁿ⁺¹(c) तथा कोशी रूप R_n = (x-a)ⁿ⁺¹ / n! (1-θ)ⁿ fⁿ⁺¹(c)।',
                'द्वि-चर उच्चिष्ठ-निम्निष्ठ: D = f_xx f_yy − (f_xy)²। D > 0, f_xx > 0 पर निम्निष्ठ; D > 0, f_xx < 0 पर उच्चिष्ठ; D < 0 पर पल्याण बिंदु।',
                'राबे परीक्षण: अनुपात परीक्षण विफल होने पर lim n(a_n / a_{n+1} − 1) = R। R > 1 पर अभिसारी, R < 1 पर अपसारी।',
                'लाइब्निज समाकलन नियम: चर सीमाओं वाले समाकलनों का अवकलन करने का व्यापक सूत्र।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Continuity does not imply differentiability (e.g. |x| at x = 0).',
                'Shortcut for 1^∞: lim [f(x)]^{g(x)} = exp(lim g(x)[f(x) - 1]).',
                'Saddle point occurs when discriminant D = f_xx f_yy − (f_xy)² < 0.',
                'Alternating series ∑ (-1)ⁿ b_n converges if b_n decreases monotonically to 0.',
                'Every bounded monotonic function on [a, b] is Riemann integrable.'
            ],
            pa: [
                'ਨਿਰੰਤਰਤਾ ਡਿਫਰੈਂਸ਼ੀਏਬਿਲਟੀ ਦੀ ਗਾਰੰਟੀ ਨਹੀਂ ਦਿੰਦੀ (ਜਿਵੇਂ x=0 ਤੇ |x|)।',
                '1^∞ ਲਈ ਸ਼ਾਰਟਕੱਟ: lim [f(x)]^{g(x)} = e^{lim g(x)[f(x) - 1]}।',
                'ਸੈਡਲ ਬਿੰਦੂ ਉਦੋਂ ਬਣਦਾ ਹੈ ਜਦੋਂ D = f_xx f_yy − (f_xy)² < 0 ਹੋਵੇ।',
                'ਅਲਟਰਨੇਟਿੰਗ ਲੜੀ ਅਭਿਸਾਰੀ ਹੁੰਦੀ ਹੈ ਜੇਕਰ b_n ਘਟਦੀ ਹੋਈ 0 ਵੱਲ ਜਾਵੇ।',
                'ਹਰੇਕ ਸੀਮਾਬੱਧ ਇਕਸੁਰ ਫਲਨ ਰੀਮਾਨ ਸਮਾਕਲਨਯੋਗ ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'सांतत्य अवकलनीयता की गारंटी नहीं देता (जैसे x=0 पर |x|)।',
                '1^∞ हेतु शॉर्टकट: lim [f(x)]^{g(x)} = exp(lim g(x)[f(x) - 1])।',
                'पल्याण बिंदु (Saddle point) तब बनता है जब D = f_xx f_yy − (f_xy)² < 0 हो।',
                'एकांतर श्रेणी अभिसारी होती है यदि b_n एकदिष्ट रूप से घटकर 0 हो जाए।',
                'संवृत अंतराल पर प्रत्येक परिबद्ध एकदिष्ट फलन रीमान समाकलनीय होता है।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: A function that is continuous everywhere is differentiable almost everywhere. Correction: The famous Weierstrass function is continuous everywhere on ℝ but differentiable nowhere.',
                'Misconception: If the discriminant D = f_xx f_yy − (f_xy)² = 0, the function has no local maximum or minimum. Correction: D = 0 means the second-derivative test is inconclusive; higher-order derivatives or direct analysis must be applied.',
                'Misconception: If lim a_n = 0, then the infinite series ∑ a_n must converge. Correction: lim a_n = 0 is a necessary condition for convergence, but not sufficient (e.g., the harmonic series ∑ 1/n has terms tending to 0 but diverges).'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਇੱਕ ਫਲਨ ਜੋ ਹਰ ਥਾਂ ਨਿਰੰਤਰ ਹੈ, ਉਹ ਲਗਭਗ ਹਰ ਥਾਂ ਡਿਫਰੈਂਸ਼ੀਏਬਲ ਵੀ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਵਾਈਰਸਟ੍ਰਾਸ ਫਲਨ ਪੂਰੇ ℝ ਉੱਤੇ ਨਿਰੰਤਰ ਹੈ ਪਰ ਕਿਤੇ ਵੀ ਡਿਫਰੈਂਸ਼ੀਏਬਲ ਨਹੀਂ ਹੈ।',
                'ਭੁਲੇਖਾ: ਜੇਕਰ ਡਿਸਕ੍ਰਿਮੀਨੈਂਟ D = 0 ਹੋਵੇ, ਤਾਂ ਕੋਈ ਉੱਚਤਮ ਜਾਂ ਨਿਊਨਤਮ ਮੁੱਲ ਨਹੀਂ ਹੁੰਦਾ। ਸੁਧਾਰ: D = 0 ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਟੈਸਟ ਅਨਿਰਣਾਇਕ ਹੈ; ਉੱਚ-ਕ੍ਰਮ ਦੇ ਅਵਕਲਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।',
                'ਭੁਲੇਖਾ: ਜੇਕਰ lim a_n = 0 ਹੋਵੇ, ਤਾਂ ਅਨੰਤ ਲੜੀ ∑ a_n ਹਮੇਸ਼ਾ ਅਭਿਸਾਰੀ ਹੁੰਦੀ ਹੈ। ਸੁਧਾਰ: ਇਹ ਸਿਰਫ਼ ਇੱਕ ਜ਼ਰੂਰੀ ਸ਼ਰਤ ਹੈ ਕਾਫ਼ੀ ਨਹੀਂ (ਜਿਵੇਂ ਹਾਰਮੋਨਿਕ ਲੜੀ ∑ 1/n ਵਿੱਚ ਟਰਮ 0 ਵੱਲ ਜਾਂਦੀ ਹੈ ਪਰ ਲੜੀ ਅਪਸਾਰੀ ਹੈ)।'
            ],
            hi: [
                'भ्रांति: प्रत्येक सर्वत्र संतत फलन लगभग सर्वत्र अवकलनीय भी होता है। सुधार: प्रसिद्ध वायरस्ट्रास फलन संपूर्ण ℝ पर संतत है किंतु कहीं भी अवकलनीय नहीं है।',
                'भ्रांति: यदि विविक्तकर D = 0 हो जाए, तो फलन का कोई उच्चिष्ठ या निम्निष्ठ नहीं होता। सुधार: D = 0 का अर्थ केवल यह है कि द्वितीय अवकलज परीक्षण अनिर्णायक है; उच्च-कोटि विश्लेषण आवश्यक है।',
                'भ्रांति: यदि lim a_n = 0 हो, तो अनंत श्रेणी ∑ a_n सदैव अभिसारी होगी। सुधार: lim a_n = 0 अभिसरण हेतु केवल आवश्यक प्रतिबंध है, पर्याप्त नहीं (जैसे हरात्मक श्रेणी ∑ 1/n अपसारी है)।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Evaluate the limit L = lim_{x -> 0} (e^x - 1 - sin x) / x² using Taylor series expansion.',
                    pa: 'ਟੇਲਰ ਲੜੀ ਪ੍ਰਸਾਰ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਸੀਮਾ L = lim_{x -> 0} (e^x - 1 - sin x) / x² ਦਾ ਮੁੱਲ ਪਤਾ ਕਰੋ।',
                    hi: 'टेलर श्रेणी प्रसार का उपयोग करके सीमा L = lim_{x -> 0} (e^x - 1 - sin x) / x² का मान ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Expand e^x around x = 0: e^x = 1 + x + x²/2! + x³/3! + O(x⁴).',
                        'Expand sin x around x = 0: sin x = x - x³/3! + O(x⁵).',
                        'Subtract in numerator: (1 + x + x²/2 + x³/6) - 1 - (x - x³/6) = x²/2 + x³/3 + O(x⁴).',
                        'Divide by denominator x²: (x²/2 + x³/3 + ...) / x² = 1/2 + x/3 + O(x²).',
                        'Take limit as x -> 0: L = 1/2.'
                    ],
                    pa: [
                        'x = 0 ਦੁਆਲੇ e^x ਦਾ ਪ੍ਰਸਾਰ: e^x = 1 + x + x²/2 + x³/6 + ...।',
                        'x = 0 ਦੁਆਲੇ sin x ਦਾ ਪ੍ਰਸਾਰ: sin x = x - x³/6 + ...।',
                        'ਅੰਸ਼ ਵਿੱਚ ਘਟਾਓ: (1 + x + x²/2 + x³/6) - 1 - (x - x³/6) = x²/2 + x³/3।',
                        'ਹਰ x² ਨਾਲ ਭਾਗ ਕਰੋ: 1/2 + x/3 + ...।',
                        'x -> 0 ਸੀਮਾ ਲਓ: L = 1/2।'
                    ],
                    hi: [
                        'x = 0 पर e^x का प्रसार: e^x = 1 + x + x²/2 + x³/6 + ...।',
                        'x = 0 पर sin x का प्रसार: sin x = x - x³/6 + ...।',
                        'अंश का सरलीकरण: (1 + x + x²/2 + x³/6) - 1 - (x - x³/6) = x²/2 + x³/3।',
                        'हर x² से भाग देने पर: 1/2 + x/3 + ...।',
                        'x -> 0 सीमा लेने पर: L = 1/2।'
                    ]
                },
                finalAnswer: {
                    en: 'The limit L = 1/2.',
                    pa: 'ਸੀਮਾ L = 1/2 ਹੈ।',
                    hi: 'सीमा L = 1/2 है।'
                }
            },
            {
                problem: {
                    en: 'Find and classify all critical points of the function f(x, y) = x³ + y³ - 3xy.',
                    pa: 'ਫਲਨ f(x, y) = x³ + y³ - 3xy ਦੇ ਸਾਰੇ ਕ੍ਰਿਟੀਕਲ ਬਿੰਦੂ ਪਤਾ ਕਰੋ ਅਤੇ ਉਹਨਾਂ ਦਾ ਵਰਗੀਕਰਨ ਕਰੋ।',
                    hi: 'फलन f(x, y) = x³ + y³ - 3xy के सभी क्रांतिक बिंदु ज्ञात कीजिए तथा उनका वर्गीकरण कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'First partial derivatives: f_x = 3x² - 3y = 0 => y = x²; f_y = 3y² - 3x = 0 => x = y².',
                        'Substitute y = x² into second equation: x = (x²)² = x⁴ => x(x³ - 1) = 0 => x = 0 or x = 1.',
                        'Critical points are (0, 0) and (1, 1).',
                        'Second partial derivatives: f_xx = 6x, f_yy = 6y, f_xy = -3.',
                        'Discriminant formula: D = f_xx f_yy - (f_xy)² = 36xy - 9.',
                        'At (0, 0): D = -9 < 0 => (0, 0) is a Saddle Point.',
                        'At (1, 1): D = 36(1)(1) - 9 = 27 > 0 and f_xx = 6 > 0 => (1, 1) is a Local Minimum with value f(1,1) = -1.'
                    ],
                    pa: [
                        'ਪਹਿਲੇ ਅੰਸ਼ਕ ਅਵਕਲਜ: f_x = 3x² - 3y = 0 => y = x²; f_y = 3y² - 3x = 0 => x = y²।',
                        'ਹੱਲ ਕਰਨ ਤੇ: x = x⁴ => x(x³ - 1) = 0 => x = 0 ਜਾਂ x = 1। ਕ੍ਰਿਟੀਕਲ ਬਿੰਦੂ (0, 0) ਅਤੇ (1, 1) ਹਨ।',
                        'ਦੂਜੇ ਅੰਸ਼ਕ ਅਵਕਲਜ: f_xx = 6x, f_yy = 6y, f_xy = -3। ਡਿਸਕ੍ਰਿਮੀਨੈਂਟ D = 36xy - 9।',
                        'ਬਿੰਦੂ (0, 0) ਉੱਤੇ: D = -9 < 0 => ਸੈਡਲ ਬਿੰਦੂ (Saddle Point)।',
                        'ਬਿੰਦੂ (1, 1) ਉੱਤੇ: D = 27 > 0 ਅਤੇ f_xx = 6 > 0 => ਲੋਕਲ ਨਿਊਨਤਮ (Local Minimum, ਮੁੱਲ = -1)।'
                    ],
                    hi: [
                        'प्रथम आंशिक अवकलज: f_x = 3x² - 3y = 0 => y = x²; f_y = 3y² - 3x = 0 => x = y²।',
                        'हल करने पर क्रांतिक बिंदु (0, 0) तथा (1, 1) प्राप्त होते हैं।',
                        'द्वितीय आंशिक अवकलज: f_xx = 6x, f_yy = 6y, f_xy = -3। विविक्तकर D = 36xy - 9।',
                        '(0, 0) पर: D = -9 < 0 => पल्याण बिंदु (Saddle Point)।',
                        '(1, 1) पर: D = 27 > 0 तथा f_xx = 6 > 0 => स्थानीय निम्निष्ठ (मान = -1)।'
                    ]
                },
                finalAnswer: {
                    en: '(0, 0) is a saddle point; (1, 1) is a local minimum with minimum value -1.',
                    pa: '(0, 0) ਸੈਡਲ ਬਿੰਦੂ ਹੈ; (1, 1) ਲੋਕਲ ਨਿਊਨਤਮ ਬਿੰਦੂ ਹੈ ਜਿਸਦਾ ਮੁੱਲ -1 ਹੈ।',
                    hi: '(0, 0) पल्याण बिंदु है; (1, 1) स्थानीय निम्निष्ठ है जिसका मान -1 है।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-ra-1',
                question: {
                    en: 'State the conclusion of Rolle’s Theorem.',
                    pa: 'ਰੋਲ ਦੇ ਪ੍ਰਮੇਯ ਦਾ ਸਿੱਟਾ ਕੀ ਹੈ?',
                    hi: 'रोल प्रमेय का निष्कर्ष क्या है?'
                },
                answer: {
                    en: 'If f is continuous on [a,b], differentiable on (a,b), and f(a) = f(b), then there exists at least one c in (a,b) such that f′(c) = 0.',
                    pa: 'ਜੇ f [a,b] ਤੇ ਨਿਰੰਤਰ, (a,b) ਤੇ ਡਿਫਰੈਂਸ਼ੀਏਬਲ ਅਤੇ f(a)=f(b) ਹੋਵੇ, ਤਾਂ (a,b) ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ c ਅਜਿਹਾ ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ f′(c) = 0।',
                    hi: 'यदि f [a,b] पर संतत, (a,b) पर अवकलनीय तथा f(a)=f(b) हो, तो (a,b) में कम से कम एक बिंदु c ऐसा होता है जहाँ f′(c) = 0।'
                }
            },
            {
                id: 'fc-ra-2',
                question: {
                    en: 'What is the discriminant test condition for a saddle point of f(x, y)?',
                    pa: 'f(x, y) ਦੇ ਸੈਡਲ ਬਿੰਦੂ ਲਈ ਡਿਸਕ੍ਰਿਮੀਨੈਂਟ ਟੈਸਟ ਦੀ ਕੀ ਸ਼ਰਤ ਹੈ?',
                    hi: 'f(x, y) के पल्याण बिंदु (Saddle point) हेतु विविक्तकर परीक्षण प्रतिबंध क्या है?'
                },
                answer: {
                    en: 'D = f_xx f_yy − (f_xy)² < 0 at the critical point.',
                    pa: 'ਕ੍ਰਿਟੀਕਲ ਬਿੰਦੂ ਉੱਤੇ D = f_xx f_yy − (f_xy)² < 0 ਹੁੰਦਾ ਹੈ।',
                    hi: 'क्रांतिक बिंदु पर D = f_xx f_yy − (f_xy)² < 0 होता है।'
                }
            },
            {
                id: 'fc-ra-3',
                question: {
                    en: 'When is Raabe’s test applied for series convergence and what is its rule?',
                    pa: 'ਲੜੀ ਅਭਿਸਾਰਿਤਾ ਲਈ ਰਾਬੇ ਦਾ ਟੈਸਟ ਕਦੋਂ ਲਾਗੂ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਸਦਾ ਨਿਯਮ ਕੀ ਹੈ?',
                    hi: 'श्रेणी अभिसरण हेतु राबे परीक्षण कब लागू होता है तथा इसका नियम क्या है?'
                },
                answer: {
                    en: 'Applied when D’Alembert ratio test yields L = 1. If lim n(a_n/a_{n+1} − 1) = R, the series converges for R > 1 and diverges for R < 1.',
                    pa: 'ਜਦੋਂ ਅਨੁਪਾਤ ਟੈਸਟ ਵਿੱਚ L = 1 ਆਵੇ। ਜੇਕਰ lim n(a_n/a_{n+1} − 1) = R ਹੋਵੇ, ਤਾਂ R > 1 ਤੇ ਅਭਿਸਾਰੀ ਅਤੇ R < 1 ਤੇ ਅਪਸਾਰੀ ਹੁੰਦੀ ਹੈ।',
                    hi: 'जब डीएलम्बर्ट अनुपात परीक्षण में L = 1 प्राप्त हो। यदि lim n(a_n/a_{n+1} − 1) = R हो, तो R > 1 पर अभिसारी तथा R < 1 पर अपसारी होती है।'
                }
            },
            {
                id: 'fc-ra-4',
                question: {
                    en: 'What are the two conditions for the Leibniz Alternating Series Test?',
                    pa: 'ਲੀਬਨੀਜ਼ ਅਲਟਰਨੇਟਿੰਗ ਲੜੀ ਟੈਸਟ ਦੀਆਂ ਦੋ ਸ਼ਰਤਾਂ ਕੀ ਹਨ?',
                    hi: 'लाइब्निज एकांतर श्रेणी परीक्षण की दो शर्तें क्या हैं?'
                },
                answer: {
                    en: 'For ∑ (-1)ⁿ⁻¹ b_n with b_n > 0: (1) b_{n+1} ≤ b_n for all n (monotonically decreasing), and (2) lim_{n -> ∞} b_n = 0.',
                    pa: '∑ (-1)ⁿ⁻¹ b_n ਲਈ: (1) b_{n+1} ≤ b_n (ਇਕਸੁਰ ਘਟਦੀ ਲੜੀ), ਅਤੇ (2) lim_{n -> ∞} b_n = 0।',
                    hi: '∑ (-1)ⁿ⁻¹ b_n हेतु: (1) b_{n+1} ≤ b_n (एकदिष्ट ह्रासमान), तथा (2) lim_{n -> ∞} b_n = 0।'
                }
            },
            {
                id: 'fc-ra-5',
                question: {
                    en: 'What does Leibniz’s rule for differentiation under the integral sign state?',
                    pa: 'ਸਮਾਕਲਨ ਚਿੰਨ੍ਹ ਅਧੀਨ ਅਵਕਲਨ ਲਈ ਲੀਬਨੀਜ਼ ਦਾ ਨਿਯਮ ਕੀ ਦੱਸਦਾ ਹੈ?',
                    hi: 'समाकलन चिह्न के अंतर्गत अवकलन हेतु लाइब्निज का नियम क्या बताता है?'
                },
                answer: {
                    en: 'd/dx ∫_{u(x)}^{v(x)} f(x,t) dt = ∫_{u(x)}^{v(x)} ∂f/∂x dt + f(x, v(x))v′(x) − f(x, u(x))u′(x).',
                    pa: 'd/dx ∫_{u(x)}^{v(x)} f(x,t) dt = ∫_{u(x)}^{v(x)} ∂f/∂x dt + f(x, v(x))v′(x) − f(x, u(x))u′(x)।',
                    hi: 'd/dx ∫_{u(x)}^{v(x)} f(x,t) dt = ∫_{u(x)}^{v(x)} ∂f/∂x dt + f(x, v(x))v′(x) − f(x, u(x))u′(x)।'
                }
            }
        ]
    },

    // =========================================================================
    // 3. ABSTRACT ALGEBRA & GROUPS
    // =========================================================================
    {
        topicId: 'math-abstract-algebra-groups',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Master Cadre Mathematics: Covers Group definitions & examples (Zn, U(n), Sn, Dn, GLn), Subgroups, Lagrange’s Theorem, Cyclic groups & Generators, Normal Subgroups, Quotient Groups, Homomorphisms, First Isomorphism Theorem, Cayley’s Theorem, Rings, Integral Domains, Fields, Polynomial Rings, and Eisenstein Criterion.'
        },
        bookRefs: [
            {
                title: 'Contemporary Abstract Algebra',
                author: 'Joseph A. Gallian',
                chapter: 'Chapters 2–10 & 12–17 (Groups, Cyclic Groups, Permutation Groups, Homomorphisms, Rings, Fields)',
                relevance: 'Standard university textbook for group theory orders, Lagrange theorem, and isomorphism theorems.'
            },
            {
                title: 'Topics in Algebra',
                author: 'I.N. Herstein',
                chapter: 'Chapters 2 & 3 (Group Theory, Ring Theory)',
                relevance: 'Advanced rigor on normal subgroups, quotient structures, and polynomial irreducibility.'
            }
        ],
        summary: {
            en: `### 1. Group Axioms & Standard Examples
- **Group Definition:** A set $G$ with binary operation $*$ satisfying: Closure, Associativity, Identity ($e$), and Inverse ($a^{-1}$).
- **Key Standard Groups:**
  - $(\\mathbb{Z}_n, +_n)$: Cyclic group under addition modulo $n$, $|\\mathbb{Z}_n| = n$.
  - $U(n)$ (Units modulo $n$): Multiplicative group of integers coprime to $n$. Order is Euler's totient function $\\phi(n)$.
  - $S_n$ (Symmetric group of degree $n$): Permutations on $n$ symbols. $|S_n| = n!$. Non-abelian for $n \\ge 3$. Alternating subgroup $A_n$ (even permutations) has order $n!/2$.
  - $D_n$ (Dihedral group): Symmetries of regular $n$-gon. $|D_n| = 2n$. Generated by rotation $r$ ($r^n = e$) and reflection $s$ ($s^2 = e, srs = r^{-1}$).
  - $GL_n(\\mathbb{R})$: Invertible $n \\times n$ real matrices under multiplication. Non-abelian for $n \\ge 2$.

### 2. Subgroups & Lagrange's Theorem
- **One-Step Subgroup Criterion:** Non-empty subset $H \\le G \\iff \\forall a, b \\in H, a b^{-1} \\in H$.
- **Lagrange's Theorem:** If $G$ is a finite group and $H \\le G$, then $|H|$ divides $|G|$.
  - **Index of $H$ in $G$:** $[G : H] = |G| / |H|$ (number of distinct left or right cosets).
  - **Corollaries:**
    - The order of any element $a \\in G$ divides $|G|$ ($a^{|G|} = e$).
    - Any group of prime order $p$ is cyclic, hence abelian, and simple (no non-trivial proper subgroups).
    - Fermat's Little Theorem: For $a \\in \\mathbb{Z}$ and prime $p$, $a^p \\equiv a \\pmod p$.
    - Euler's Theorem: If $\\gcd(a, n) = 1$, then $a^{\\phi(n)} \\equiv 1 \\pmod n$.

### 3. Cyclic Groups & Order of Elements
- **Order Formula:** If $o(a) = n$, then $o(a^k) = \\frac{n}{\\gcd(k, n)}$.
- **Generators:** The cyclic group $\\langle a \\rangle$ of order $n$ has exactly $\\phi(n)$ generators. Specifically, $a^k$ is a generator $\\iff \\gcd(k, n) = 1$.
- **Subgroup Structure:** Every subgroup of a cyclic group is cyclic. For each positive divisor $d$ of $n$, there exists **exactly one** unique subgroup of order $d$.

### 4. Normal Subgroups, Quotient Groups & Homomorphisms
- **Normal Subgroup ($N \\trianglelefteq G$):** $g N g^{-1} = N$ for all $g \\in G$ (left cosets equal right cosets $gN = Ng$).
  - Every subgroup of an abelian group is normal.
  - Any subgroup of index 2 ($[G : H] = 2$) is automatically normal.
  - Center of a group $Z(G) = \\{z \\in G : zg = gz \\ \\forall g \\in G\\}$ is always a normal abelian subgroup.
- **Quotient Group ($G/N$):** Well-defined group under coset multiplication $(aN)(bN) = (ab)N$ if and only if $N \\trianglelefteq G$. Order $|G/N| = [G:N] = |G|/|N|$.
- **First Isomorphism Theorem:** If $\\phi: G \\to G'$ is a group homomorphism, then:
  $$\\ker(\\phi) \\trianglelefteq G \\quad \\text{and} \\quad G / \\ker(\\phi) \\cong \\text{Im}(\\phi)$$
- **Cayley's Theorem:** Every group $G$ is isomorphic to a permutation subgroup of the symmetric group $S_G$.

### 5. Rings, Integral Domains & Fields
- **Ring $(R, +, \\cdot)$:** Abelian group under $+$, associative under $\\cdot$, and distributive.
- **Integral Domain:** Commutative ring with unity $1 \\ne 0$ having **no zero divisors** (if $ab = 0$, then $a = 0$ or $b = 0$).
  - Cancellation law holds: $ab = ac$ with $a \\ne 0 \\implies b = c$.
  - **Theorem:** Every finite integral domain is a field.
- **Field $(F, +, \\cdot)$:** Commutative division ring; every non-zero element has a multiplicative inverse.
  - Characteristic of a field is either 0 or a prime $p$.
  - A finite field with $q$ elements exists iff $q = p^k$ (Galois Field $GF(p^k)$).

### 6. Polynomial Rings & Eisenstein's Irreducibility Criterion
- **Division Algorithm in $F[x]$:** For $f(x), g(x) \\in F[x]$ with $g(x) \\ne 0$, $\\exists$ unique $q(x), r(x)$ such that $f(x) = q(x)g(x) + r(x)$ with $\\deg(r) < \\deg(g)$.
- $F[x]$ over a field $F$ is a Principal Ideal Domain (PID) and Unique Factorization Domain (UFD).
- **Eisenstein's Irreducibility Criterion:** Let $f(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 \\in \\mathbb{Z}[x]$. If there exists a prime $p$ such that:
  1. $p \\mid a_i$ for all $i = 0, 1, \\dots, n-1$,
  2. $p \\nmid a_n$, and
  3. $p^2 \\nmid a_0$,
  then $f(x)$ is **irreducible over $\\mathbb{Q}$** (and over $\\mathbb{Z}$).`,
            pa: `### 1. ਗਰੁੱਪ ਦੀ ਪਰਿਭਾਸ਼ਾ ਅਤੇ ਮੁੱਖ ਉਦਾਹਰਣਾਂ
- **ਗਰੁੱਪ ਨਿਯਮ:** ਸੰਵ੍ਰਿਤ (Closure), ਸਹਿਚਾਰੀ (Associative), ਤਤਸਮਕ (Identity), ਅਤੇ ਉਲਟ (Inverse)।
- **ਮੁੱਖ ਗਰੁੱਪ:**
  - $(\\mathbb{Z}_n, +_n)$: ਚੱਕਰੀ ਗਰੁੱਪ, ਆਰਡਰ $n$।
  - $U(n)$: ਮਾਡਿਊਲੋ $n$ ਦੇ ਸਾਪੇਖ ਅਭਾਜ ਸੰਖਿਆਵਾਂ ਦਾ ਗੁਣਾਤਮਕ ਗਰੁੱਪ, ਆਰਡਰ $\\phi(n)$।
  - $S_n$: ਸਮਮਿਤੀ ਗਰੁੱਪ, ਆਰਡਰ $n!$। $n \\ge 3$ ਲਈ ਗ਼ੈਰ-ਅਬੇਲੀਅਨ। $A_n$ ਦਾ ਆਰਡਰ $n!/2$ ਹੁੰਦਾ ਹੈ।
  - $D_n$: ਡਾਈਹੀਡ੍ਰਲ ਗਰੁੱਪ, ਆਰਡਰ $2n$।

### 2. ਸਬ-ਗਰੁੱਪ ਅਤੇ ਲਗਰਾਂਜ ਦਾ ਪ੍ਰਮੇਯ
- **ਲਗਰਾਂਜ ਦਾ ਪ੍ਰਮੇਯ:** ਕਿਸੇ ਪਰਿਮਿਤ ਗਰੁੱਪ $G$ ਦੇ ਸਬ-ਗਰੁੱਪ $H$ ਦਾ ਆਰਡਰ $|H|$ ਹਮੇਸ਼ਾ ਗਰੁੱਪ ਦੇ ਆਰਡਰ $|G|$ ਨੂੰ ਵੰਡਦਾ ਹੈ ($|H| \\mid |G|$)।
- **ਸਿੱਟੇ:**
  - ਤੱਤ ਦਾ ਆਰਡਰ ਗਰੁੱਪ ਦੇ ਆਰਡਰ ਨੂੰ ਵੰਡਦਾ ਹੈ।
  - ਅਭਾਜ (Prime) ਆਰਡਰ ਦਾ ਹਰੇਕ ਗਰੁੱਪ ਚੱਕਰੀ ਅਤੇ ਅਬੇਲੀਅਨ ਹੁੰਦਾ ਹੈ।
  - ਇੰਡੈਕਸ: $[G:H] = |G|/|H|$।

### 3. ਚੱਕਰੀ ਗਰੁੱਪ (Cyclic Groups) ਅਤੇ ਜਨਰੇਟਰ
- ਆਰਡਰ ਸੂਤਰ: $o(a^k) = \\frac{n}{\\gcd(k, n)}$।
- $n$ ਆਰਡਰ ਵਾਲੇ ਚੱਕਰੀ ਗਰੁੱਪ ਦੇ ਠੀਕ $\\phi(n)$ ਜਨਰੇਟਰ ਹੁੰਦੇ ਹਨ।
- ਚੱਕਰੀ ਗਰੁੱਪ ਦਾ ਹਰੇਕ ਸਬ-ਗਰੁੱਪ ਚੱਕਰੀ ਹੁੰਦਾ ਹੈ; $n$ ਦੇ ਹਰੇਕ ਭਾਜਕ $d$ ਲਈ ਇੱਕ ਵਿਲੱਖਣ ਸਬ-ਗਰੁੱਪ ਹੁੰਦਾ ਹੈ।

### 4. ਨਾਰਮਲ ਸਬ-ਗਰੁੱਪ ਅਤੇ ਹੋਮੋਮੌਰਫਿਜ਼ਮ
- **ਨਾਰਮਲ ਸਬ-ਗਰੁੱਪ ($N \\trianglelefteq G$):** $gNg^{-1} = N$। ਇੰਡੈਕਸ 2 ਵਾਲਾ ਹਰੇਕ ਸਬ-ਗਰੁੱਪ ਨਾਰਮਲ ਹੁੰਦਾ ਹੈ।
- **ਪਹਿਲਾ ਆਈਸੋਮੌਰਫਿਜ਼ਮ ਪ੍ਰਮੇਯ:** $G / \\ker(\\phi) \\cong \\text{Im}(\\phi)$।
- **ਕੇਲੇ ਦਾ ਪ੍ਰਮੇਯ:** ਹਰੇਕ ਗਰੁੱਪ ਕਿਸੇ ਪਰਮਿਊਟੇਸ਼ਨ ਗਰੁੱਪ ਦੇ ਆਈਸੋਮੌਰਫਿਕ ਹੁੰਦਾ ਹੈ।

### 5. ਰਿੰਗ, ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਅਤੇ ਫੀਲਡ
- **ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ:** ਸਿਫ਼ਰ-ਭਾਜਕ ਰਹਿਤ ਕਮਿਊਟੇਟਿਵ ਰਿੰਗ। ਹਰੇਕ ਪਰਿਮਿਤ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਇੱਕ **ਫੀਲਡ** ਹੁੰਦੀ ਹੈ।
- ਫੀਲਡ ਦਾ ਕੈਰੈਕਟਰਿਸਟਿਕ 0 ਜਾਂ ਅਭਾਜ ਸੰਖਿਆ $p$ ਹੁੰਦਾ ਹੈ।

### 6. ਆਈਸਨਸਟਾਈਨ ਅਖੰਡਨੀਅਤਾ ਕਸੌਟੀ (Eisenstein Criterion)
- $f(x) = a_n x^n + \\dots + a_0 \\in \\mathbb{Z}[x]$ ਲਈ ਜੇਕਰ ਕੋਈ ਅਭਾਜ $p$ ਅਜਿਹਾ ਹੋਵੇ ਕਿ:
  $p \\mid a_0, a_1, \\dots, a_{n-1}$, $p \\nmid a_n$, ਅਤੇ $p^2 \\nmid a_0$, ਤਾਂ $f(x)$ $\\mathbb{Q}$ ਉੱਤੇ ਅਖੰਡਨੀਅ (Irreducible) ਹੁੰਦਾ ਹੈ।`,
            hi: `### 1. समूह की परिभाषा एवं मानक उदाहरण
- **समूह अभिगृहीत:** संवरक, साहचर्य, तत्समक एवं प्रतिलोम।
- **प्रमुख समूह:** $(\\mathbb{Z}_n, +_n)$ चक्रीय समूह (कोटि $n$), $U(n)$ गुणन समूह (कोटि $\\phi(n)$), सममित समूह $S_n$ (कोटि $n!$), द्विhedral समूह $D_n$ (कोटि $2n$)।

### 2. उपसमूह एवं लैग्रांज प्रमेय
- **लैग्रांज प्रमेय:** परिमित समूह $G$ के किसी उपसमूह $H$ की कोटि $|H|$, समूह की कोटि $|G|$ को विभाजित करती है ($|H| \\mid |G|$)।
- **निष्कर्ष:**
  - अवयव की कोटि समूह की कोटि को विभाजित करती है।
  - अभाज्य कोटि का प्रत्येक समूह चक्रीय तथा आबेली होता है।
  - सूचकांक $[G:H] = |G|/|H|$।

### 3. चक्रीय समूह एवं जनक (Generators)
- अवयव की घात की कोटि: $o(a^k) = \\frac{n}{\\gcd(k, n)}$।
- कोटि $n$ के चक्रीय समूह के कुल $\\phi(n)$ जनक होते हैं।
- चक्रीय समूह का प्रत्येक उपसमूह चक्रीय होता है; $n$ के प्रत्येक भाजक $d$ हेतु अद्वितीय उपसमूह होता है।

### 4. प्रसामान्य उपसमूह एवं समाकारिता (Homomorphism)
- **प्रसामान्य उपसमूह ($N \\trianglelefteq G$):** $gNg^{-1} = N$। सूचकांक 2 वाला प्रत्येक उपसमूह प्रसामान्य होता है।
- **प्रथम तुल्याकारिता प्रमेय:** $G / \\ker(\\phi) \\cong \\text{Im}(\\phi)$।
- **केली प्रमेय:** प्रत्येक समूह एक क्रमचय समूह के तुल्याकारी होता है।

### 5. वलय, पूर्णांकीय प्रांत एवं क्षेत्र (Field)
- **पूर्णांकीय प्रांत:** शून्य भाजक रहित क्रमविनिमेय वलय। प्रत्येक परिमित पूर्णांकीय प्रांत एक **क्षेत्र** होता है।
- क्षेत्र का अभिलक्षण 0 अथवा अभाज्य संख्या $p$ होता है।

### 6. आइसेन्स्टीन अखण्डनीयता कसौटी (Eisenstein Criterion)
- $f(x) = a_n x^n + \\dots + a_0 \\in \\mathbb{Z}[x]$ हेतु यदि कोई अभाज्य $p$ ऐसा हो कि:
  $p \\mid a_0, a_1, \\dots, a_{n-1}$, $p \\nmid a_n$, तथा $p^2 \\nmid a_0$, तो $f(x)$ $\\mathbb{Q}$ पर अखण्डनीय (Irreducible) होता है।`
        },
        keyNotes: {
            en: [
                'Lagrange’s Theorem: For finite group G, the order of every subgroup H divides |G|; index [G:H] = |G| / |H|.',
                'Prime order groups: Every group of prime order p is cyclic, abelian, and simple.',
                'Cyclic group generators: A cyclic group of order n has exactly ϕ(n) generators; o(aᵏ) = n / gcd(k, n).',
                'Index 2 Subgroup: Any subgroup H with index [G:H] = 2 is unconditionally a normal subgroup (gH = Hg).',
                'Finite Integral Domain Theorem: Every finite integral domain is a field (e.g., ℤ_p for prime p).',
                'Eisenstein’s Criterion: Polynomial is irreducible over ℚ if prime p divides all coefficients except leading, and p² does not divide constant term.'
            ],
            pa: [
                'ਲਗਰਾਂਜ ਪ੍ਰਮੇਯ: ਪਰਿਮਿਤ ਗਰੁੱਪ ਵਿੱਚ ਸਬ-ਗਰੁੱਪ ਦਾ ਆਰਡਰ ਗਰੁੱਪ ਦੇ ਆਰਡਰ ਨੂੰ ਪੂਰਾ ਵੰਡਦਾ ਹੈ; ਇੰਡੈਕਸ [G:H] = |G|/|H|।',
                'ਅਭਾਜ ਆਰਡਰ ਗਰੁੱਪ: ਅਭਾਜ ਆਰਡਰ p ਵਾਲਾ ਹਰੇਕ ਗਰੁੱਪ ਚੱਕਰੀ ਅਤੇ ਅਬੇਲੀਅਨ ਹੁੰਦਾ ਹੈ।',
                'ਚੱਕਰੀ ਗਰੁੱਪ ਜਨਰੇਟਰ: n ਆਰਡਰ ਦੇ ਚੱਕਰੀ ਗਰੁੱਪ ਦੇ ਠੀਕ ϕ(n) ਜਨਰੇਟਰ ਹੁੰਦੇ ਹਨ।',
                'ਇੰਡੈਕਸ 2 ਸਬ-ਗਰੁੱਪ: ਇੰਡੈਕਸ 2 ਵਾਲਾ ਕੋਈ ਵੀ ਸਬ-ਗਰੁੱਪ ਹਮੇਸ਼ਾ ਨਾਰਮਲ ਸਬ-ਗਰੁੱਪ ਹੁੰਦਾ ਹੈ।',
                'ਪਰਿਮਿਤ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ: ਹਰੇਕ ਪਰਿਮਿਤ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਇੱਕ ਫੀਲਡ (Field) ਹੁੰਦੀ ਹੈ।',
                'ਆਈਸਨਸਟਾਈਨ ਕਸੌਟੀ: ਜੇਕਰ ਅਭਾਜ p ਸਾਰੇ ਗੁਣਾਂਕਾਂ ਨੂੰ ਵੰਡੇ ਸਿਵਾਏ ਮੁੱਖ ਦੇ, ਅਤੇ p² ਆਖ਼ਰੀ ਪਦ ਨੂੰ ਨਾ ਵੰਡੇ, ਤਾਂ ਬਹੁਪਦ ਅਖੰਡਨੀਅ ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'लैग्रांज प्रमेय: परिमित समूह में उपसमूह की कोटि सदैव समूह की कोटि को विभाजित करती है; सूचकांक [G:H] = |G|/|H|।',
                'अभाज्य कोटि समूह: अभाज्य कोटि p का प्रत्येक समूह अनिवार्य रूप से चक्रीय तथा आबेली होता है।',
                'चक्रीय समूह के जनक: कोटि n के चक्रीय समूह के ठीक ϕ(n) जनक होते हैं।',
                'सूचकांक 2 उपसमूह: सूचकांक 2 वाला प्रत्येक उपसमूह सदैव प्रसामान्य (Normal) होता है।',
                'परिमित पूर्णांकीय प्रांत: प्रत्येक परिमित पूर्णांकीय प्रांत एक क्षेत्र (Field) होता है।',
                'आइसेन्स्टीन कसौटी: यदि अभाज्य p मुख्य पद को छोड़कर शेष सभी को विभाजित करे तथा p² अचर पद को न काटे, तो बहुपद ℚ पर अखण्डनीय है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'U(n) group has order ϕ(n) and is abelian.',
                'Subgroups of cyclic groups are always cyclic.',
                'Kernel of homomorphism ϕ: G -> G′ is always a normal subgroup of G.',
                'First Isomorphism Theorem: G / ker(ϕ) ≅ Im(ϕ).',
                'A non-zero commutative ring with no zero divisors is an integral domain.'
            ],
            pa: [
                'U(n) ਗਰੁੱਪ ਦਾ ਆਰਡਰ ϕ(n) ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਹ ਅਬੇਲੀਅਨ ਹੈ।',
                'ਚੱਕਰੀ ਗਰੁੱਪ ਦੇ ਸਾਰੇ ਸਬ-ਗਰੁੱਪ ਚੱਕਰੀ ਹੁੰਦੇ ਹਨ।',
                'ਹੋਮੋਮੌਰਫਿਜ਼ਮ ਦਾ ਕਰਨਲ (ker ϕ) ਹਮੇਸ਼ਾ ਨਾਰਮਲ ਸਬ-ਗਰੁੱਪ ਹੁੰਦਾ ਹੈ।',
                'ਪਹਿਲਾ ਆਈਸੋਮੌਰਫਿਜ਼ਮ ਪ੍ਰਮੇਯ: G / ker(ϕ) ≅ Im(ϕ)।',
                'ਬਿਨਾਂ ਸਿਫ਼ਰ-ਭਾਜਕਾਂ ਵਾਲੀ ਕਮਿਊਟੇਟਿਵ ਰਿੰਗ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਹੁੰਦੀ ਹੈ।'
            ],
            hi: [
                'U(n) समूह की कोटि ϕ(n) होती है तथा यह आबेली समूह है।',
                'चक्रीय समूह का प्रत्येक उपसमूह चक्रीय होता है।',
                'समाकारिता की अष्टि (ker ϕ) सदैव एक प्रसामान्य उपसमूह होती है।',
                'प्रथम तुल्याकारिता प्रमेय: G / ker(ϕ) ≅ Im(ϕ)।',
                'शून्य भाजक रहित क्रमविनिमेय वलय पूर्णांकीय प्रांत कहलाता है।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: The converse of Lagrange’s Theorem is always true: if d divides |G|, there must exist a subgroup of order d. Correction: The converse is false in general; the alternating group A₄ has order 12, but has NO subgroup of order 6.',
                'Misconception: Every abelian group is cyclic. Correction: The Klein 4-group V₄ = {e, a, b, ab} is abelian of order 4, but non-cyclic because every non-identity element has order 2.',
                'Misconception: An integral domain is automatically a field. Correction: ℤ (integers) is an infinite integral domain but not a field because non-zero elements like 2 have no multiplicative inverse in ℤ.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਲਗਰਾਂਜ ਪ੍ਰਮੇਯ ਦਾ ਉਲਟ ਹਮੇਸ਼ਾ ਸੱਚ ਹੁੰਦਾ ਹੈ: ਜੇਕਰ d |G| ਨੂੰ ਵੰਡਦਾ ਹੈ, ਤਾਂ d ਆਰਡਰ ਦਾ ਸਬ-ਗਰੁੱਪ ਜ਼ਰੂਰ ਹੋਵੇਗਾ। ਸੁਧਾਰ: ਆਮ ਤੌਰ ਤੇ ਇਹ ਗ਼ਲਤ ਹੈ; ਗਰੁੱਪ A₄ ਦਾ ਆਰਡਰ 12 ਹੈ, ਪਰ ਇਸਦਾ 6 ਆਰਡਰ ਵਾਲਾ ਕੋਈ ਸਬ-ਗਰੁੱਪ ਨਹੀਂ ਹੈ।',
                'ਭੁਲੇਖਾ: ਹਰੇਕ ਅਬੇਲੀਅਨ ਗਰੁੱਪ ਚੱਕਰੀ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਕਲੇਨ 4-ਗਰੁੱਪ V₄ ਅਬੇਲੀਅਨ ਹੈ ਪਰ ਚੱਕਰੀ ਨਹੀਂ ਹੈ ਕਿਉਂਕਿ ਇਸਦੇ ਸਾਰੇ ਤੱਤਾਂ ਦਾ ਆਰਡਰ 2 ਹੈ।',
                'ਭੁਲੇਖਾ: ਕੋਈ ਵੀ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਸਿੱਧੀ ਫੀਲਡ ਹੁੰਦੀ ਹੈ। ਸੁਧਾਰ: ਪੂਰਨ ਅੰਕ ℤ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਹੈ ਪਰ ਫੀਲਡ ਨਹੀਂ ਹੈ ਕਿਉਂਕਿ 2 ਦਾ ਗੁਣਾਤਮਕ ਉਲਟ ℤ ਵਿੱਚ ਨਹੀਂ ਹੈ।'
            ],
            hi: [
                'भ्रांति: लैग्रांज प्रमेय का विलोम सदैव सत्य होता है: यदि d समूह की कोटि को काटे, तो कोटि d का उपसमूह अवश्य होगा। सुधार: यह सामान्यतः असत्य है; प्रत्यावर्ती समूह A₄ की कोटि 12 है, किंतु इसमें कोटि 6 का कोई उपसमूह नहीं होता।',
                'भ्रांति: प्रत्येक आबेली समूह चक्रीय होता है। सुधार: क्लाइन 4-समूह V₄ आबेली है किंतु चक्रीय नहीं, क्योंकि इसके प्रत्येक अशून्य अवयव की कोटि 2 है।',
                'भ्रांति: प्रत्येक पूर्णांकीय प्रांत एक क्षेत्र होता है। सुधार: ℤ (पूर्णांक वलय) एक पूर्णांकीय प्रांत है किंतु क्षेत्र नहीं है, क्योंकि 2 का गुणात्मक प्रतिलोम ℤ में विद्यमान नहीं है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Find the number of generators of the cyclic group (ℤ₁₂, +₁₂) and determine the order of element a = [8].',
                    pa: 'ਚੱਕਰੀ ਗਰੁੱਪ (ℤ₁₂, +₁₂) ਦੇ ਜਨਰੇਟਰਾਂ ਦੀ ਗਿਣਤੀ ਪਤਾ ਕਰੋ ਅਤੇ ਤੱਤ a = [8] ਦਾ ਆਰਡਰ ਕੱਢੋ।',
                    hi: 'चक्रीय समूह (ℤ₁₂, +₁₂) के जनकों की संख्या ज्ञात कीजिए तथा अवयव a = [8] की कोटि निर्धारित कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'The cyclic group (ℤ₁₂, +) has order n = 12.',
                        'The number of generators is Euler’s totient function ϕ(12) = 12(1 - 1/2)(1 - 1/3) = 12 × (1/2) × (2/3) = 4.',
                        'The generators are the equivalence classes coprime to 12: {[1], [5], [7], [11]}.',
                        'To find the order of a = [8], use the order formula: o([k]) = n / gcd(k, n).',
                        'Here k = 8 and n = 12: gcd(8, 12) = 4.',
                        'Therefore, o([8]) = 12 / 4 = 3 (Verification: 8 + 8 + 8 = 24 ≡ 0 mod 12).'
                    ],
                    pa: [
                        'ਚੱਕਰੀ ਗਰੁੱਪ (ℤ₁₂, +) ਦਾ ਆਰਡਰ n = 12 ਹੈ।',
                        'ਜਨਰੇਟਰਾਂ ਦੀ ਗਿਣਤੀ ϕ(12) = 12 × (1/2) × (2/3) = 4 ਹੈ।',
                        'ਜਨਰੇਟਰ 12 ਨਾਲ ਸਹਿ-ਅਭਾਜ ਸੰਖਿਆਵਾਂ ਹਨ: {[1], [5], [7], [11]}।',
                        'ਤੱਤ [8] ਦਾ ਆਰਡਰ: o([8]) = n / gcd(8, n) = 12 / gcd(8, 12) = 12 / 4 = 3।'
                    ],
                    hi: [
                        'चक्रीय समूह (ℤ₁₂, +) की कोटि n = 12 है।',
                        'जनकों की संख्या यूलर टोटिएंट फलन ϕ(12) = 12 × (1/2) × (2/3) = 4 है।',
                        'जनक वे वर्ग हैं जो 12 के सह-अभाज्य हैं: {[1], [5], [7], [11]}।',
                        'अवयव [8] की कोटि: o([8]) = n / gcd(8, n) = 12 / gcd(8, 12) = 12 / 4 = 3।'
                    ]
                },
                finalAnswer: {
                    en: 'Number of generators = 4 ({[1], [5], [7], [11]}); Order of [8] is 3.',
                    pa: 'ਜਨਰੇਟਰਾਂ ਦੀ ਗਿਣਤੀ = 4 ({[1], [5], [7], [11]}); [8] ਦਾ ਆਰਡਰ 3 ਹੈ।',
                    hi: 'जनकों की संख्या = 4 ({[1], [5], [7], [11]}); [8] की कोटि 3 है।'
                }
            },
            {
                problem: {
                    en: 'Test the irreducibility of the polynomial f(x) = 3x⁴ - 15x³ + 10x² - 25x + 5 over ℚ using Eisenstein’s Criterion.',
                    pa: 'ਆਈਸਨਸਟਾਈਨ ਕਸੌਟੀ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ℚ ਉੱਤੇ ਬਹੁਪਦ f(x) = 3x⁴ - 15x³ + 10x² - 25x + 5 ਦੀ ਅਖੰਡਨੀਅਤਾ ਦੀ ਜਾਂਚ ਕਰੋ।',
                    hi: 'आइसेन्स्टीन कसौटी का प्रयोग करके ℚ पर बहुपद f(x) = 3x⁴ - 15x³ + 10x² - 25x + 5 की अखण्डनीयता का परीक्षण कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Identify coefficients: a₄ = 3, a₃ = -15, a₂ = 10, a₁ = -25, a₀ = 5.',
                        'Choose prime p = 5.',
                        'Condition 1: Check leading coefficient: p ∤ a₄ => 5 does not divide 3 (Satisfied).',
                        'Condition 2: Check intermediate & constant coefficients: p divides a₃, a₂, a₁, a₀ => 5 divides -15, 10, -25, and 5 (Satisfied).',
                        'Condition 3: Check square of prime on constant term: p² = 25 ∤ a₀ => 25 does not divide 5 (Satisfied).',
                        'All conditions of Eisenstein’s Criterion are satisfied, proving f(x) is irreducible over ℚ.'
                    ],
                    pa: [
                        'ਗੁਣਾਂਕ ਪਛਾਣੋ: a₄ = 3, a₃ = -15, a₂ = 10, a₁ = -25, a₀ = 5।',
                        'ਅਭਾਜ ਸੰਖਿਆ p = 5 ਚੁਣੋ।',
                        'ਸ਼ਰਤ 1: 5 ਮੁੱਖ ਗੁਣਾਂਕ 3 ਨੂੰ ਨਹੀਂ ਵੰਡਦਾ (5 ∤ 3, ਸੰਤੁਸ਼ਟ)।',
                        'ਸ਼ਰਤ 2: 5 ਸਾਰੇ ਬਾਕੀ ਗੁਣਾਂਕਾਂ -15, 10, -25, 5 ਨੂੰ ਵੰਡਦਾ ਹੈ (ਸੰਤੁਸ਼ਟ)।',
                        'ਸ਼ਰਤ 3: p² = 25 ਆਖ਼ਰੀ ਪਦ 5 ਨੂੰ ਨਹੀਂ ਵੰਡਦਾ (25 ∤ 5, ਸੰਤੁਸ਼ਟ)।',
                        'ਆਈਸਨਸਟਾਈਨ ਕਸੌਟੀ ਅਨੁਸਾਰ f(x) ℚ ਉੱਤੇ ਅਖੰਡਨੀਅ (Irreducible) ਹੈ।'
                    ],
                    hi: [
                        'गुणांक पहचानें: a₄ = 3, a₃ = -15, a₂ = 10, a₁ = -25, a₀ = 5।',
                        'अभाज्य संख्या p = 5 चुनें।',
                        'प्रतिबंध 1: 5 मुख्य गुणांक 3 को विभाजित नहीं करता (5 ∤ 3, संतुष्ट)।',
                        'प्रतिबंध 2: 5 शेष सभी गुणांकों -15, 10, -25, 5 को विभाजित करता है (संतुष्ट)।',
                        'प्रतिबंध 3: p² = 25 अचर पद 5 को विभाजित नहीं करता (25 ∤ 5, संतुष्ट)।',
                        'आइसेन्स्टीन कसौटी से बहुपद f(x) ℚ पर अखण्डनीय है।'
                    ]
                },
                finalAnswer: {
                    en: 'With prime p = 5, all Eisenstein conditions are satisfied; f(x) is irreducible over ℚ.',
                    pa: 'ਅਭਾਜ p = 5 ਨਾਲ ਸਾਰੀਆਂ ਸ਼ਰਤਾਂ ਸੰਤੁਸ਼ਟ ਹੁੰਦੀਆਂ ਹਨ; f(x) ℚ ਉੱਤੇ ਅਖੰਡਨੀਅ ਹੈ।',
                    hi: 'अभाज्य p = 5 से सभी कसौटियाँ संतुष्ट होती हैं; अतः f(x) ℚ पर अखण्डनीय है।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-aa-1',
                question: {
                    en: 'State Lagrange’s Theorem for finite groups.',
                    pa: 'ਪਰਿਮਿਤ ਗਰੁੱਪਾਂ ਲਈ ਲਗਰਾਂਜ ਦਾ ਪ੍ਰਮੇਯ ਕੀ ਹੈ?',
                    hi: 'परिमित समूहों हेतु लैग्रांज प्रमेय क्या है?'
                },
                answer: {
                    en: 'If G is a finite group and H is a subgroup of G, then the order of H divides the order of G (|H| divides |G|).',
                    pa: 'ਜੇ G ਇੱਕ ਪਰਿਮਿਤ ਗਰੁੱਪ ਹੈ ਅਤੇ H ਇਸਦਾ ਸਬ-ਗਰੁੱਪ ਹੈ, ਤਾਂ H ਦਾ ਆਰਡਰ G ਦੇ ਆਰਡਰ ਨੂੰ ਪੂਰਾ ਵੰਡਦਾ ਹੈ (|H| |G| ਨੂੰ ਵੰਡਦਾ ਹੈ)।',
                    hi: 'यदि G एक परिमित समूह है तथा H उसका उपसमूह है, तो H की कोटि G की कोटि को पूर्णतः विभाजित करती है (|H| divides |G|)।'
                }
            },
            {
                id: 'fc-aa-2',
                question: {
                    en: 'How many generators does a cyclic group of order n have?',
                    pa: 'n ਆਰਡਰ ਵਾਲੇ ਚੱਕਰੀ ਗਰੁੱਪ ਦੇ ਕਿੰਨੇ ਜਨਰੇਟਰ ਹੁੰਦੇ ਹਨ?',
                    hi: 'कोटि n के चक्रीय समूह के कुल कितने जनक होते हैं?'
                },
                answer: {
                    en: 'Exactly ϕ(n) generators, where ϕ is Euler’s totient function (number of integers k in 1 ≤ k ≤ n with gcd(k, n) = 1).',
                    pa: 'ਠੀਕ ϕ(n) ਜਨਰੇਟਰ, ਜਿੱਥੇ ϕ ਯੂਲਰ ਟੋਸ਼ੈਂਟ ਫਲਨ ਹੈ (1 ਤੋਂ n ਤੱਕ n ਨਾਲ ਸਹਿ-ਅਭਾਜ ਸੰਖਿਆਵਾਂ ਦੀ ਗਿਣਤੀ)।',
                    hi: 'ठीक ϕ(n) जनक होते हैं, जहाँ ϕ यूलर टोटिएंट फलन है (1 से n तक की वे संख्याएँ जो n के सह-अभाज्य हैं)।'
                }
            },
            {
                id: 'fc-aa-3',
                question: {
                    en: 'Why is any subgroup of index 2 in a group G always normal?',
                    pa: 'ਕਿਸੇ ਗਰੁੱਪ G ਵਿੱਚ ਇੰਡੈਕਸ 2 ਵਾਲਾ ਸਬ-ਗਰੁੱਪ ਹਮੇਸ਼ਾ ਨਾਰਮਲ ਕਿਉਂ ਹੁੰਦਾ ਹੈ?',
                    hi: 'किसी समूह G में सूचकांक 2 वाला उपसमूह सदैव प्रसामान्य क्यों होता है?'
                },
                answer: {
                    en: 'Because there are only 2 left cosets (H and G \\ H) and 2 right cosets (H and G \\ H), making left and right cosets identical (gH = Hg).',
                    pa: 'ਕਿਉਂਕਿ ਸਿਰਫ਼ 2 ਹੀ ਕੋਸੈੱਟ ਹੁੰਦੇ ਹਨ (H ਅਤੇ G \\ H), ਜਿਸ ਕਾਰਨ ਖੱਬੇ ਅਤੇ ਸੱਜੇ ਕੋਸੈੱਟ ਬਿਲਕੁਲ ਬਰਾਬਰ ਹੋ ਜਾਂਦੇ ਹਨ (gH = Hg)।',
                    hi: 'क्योंकि केवल 2 वाम सहसमुच्चय और 2 दक्षिण सहसमुच्चय होते हैं, जिससे वाम व दक्षिण सहसमुच्चय समान (gH = Hg) हो जाते हैं।'
                }
            },
            {
                id: 'fc-aa-4',
                question: {
                    en: 'What is the characteristic of a field?',
                    pa: 'ਕਿਸੇ ਫੀਲਡ (Field) ਦਾ ਕੈਰੈਕਟਰਿਸਟਿਕ ਕੀ ਹੁੰਦਾ ਹੈ?',
                    hi: 'किसी क्षेत्र (Field) का अभिलक्षण (Characteristic) क्या होता है?'
                },
                answer: {
                    en: 'The smallest positive integer n such that n · 1 = 0; if no such n exists, the characteristic is 0. For any field, it is either 0 or a prime p.',
                    pa: 'ਸਭ ਤੋਂ ਛੋਟਾ ਧਨਾਤਮਕ ਪੂਰਨ ਅੰਕ n ਜਿਸ ਲਈ n · 1 = 0 ਹੋਵੇ; ਨਹੀਂ ਤਾਂ 0 ਹੁੰਦਾ ਹੈ। ਫੀਲਡ ਲਈ ਇਹ ਹਮੇਸ਼ਾ 0 ਜਾਂ ਅਭਾਜ ਸੰਖਿਆ p ਹੁੰਦਾ ਹੈ।',
                    hi: 'वह न्यूनतम धनात्मक पूर्णांक n जिसके लिए n · 1 = 0 हो; अन्यथा 0 होता है। किसी भी क्षेत्र का अभिलक्षण 0 या अभाज्य p होता है।'
                }
            },
            {
                id: 'fc-aa-5',
                question: {
                    en: 'State the three conditions of Eisenstein’s Irreducibility Criterion.',
                    pa: 'ਆਈਸਨਸਟਾਈਨ ਅਖੰਡਨੀਅਤਾ ਕਸੌਟੀ ਦੀਆਂ ਤਿੰਨ ਸ਼ਰਤਾਂ ਕੀ ਹਨ?',
                    hi: 'आइसेन्स्टीन अखण्डनीयता कसौटी के तीन प्रतिबंध क्या हैं?'
                },
                answer: {
                    en: 'For P(x) = a_n xⁿ + ... + a₀: There exists a prime p such that (1) p ∤ a_n, (2) p | a_{n-1}, ..., a₀, and (3) p² ∤ a₀.',
                    pa: 'ਬਹੁਪਦ ਲਈ ਇੱਕ ਅਭਾਜ p ਮੌਜੂਦ ਹੋਵੇ ਜਿਸ ਲਈ: (1) p ∤ a_n, (2) p | a_{n-1}, ..., a₀, ਅਤੇ (3) p² ∤ a₀।',
                    hi: 'बहुपद हेतु एक अभाज्य p ऐसा हो कि: (1) p ∤ a_n, (2) p | a_{n-1}, ..., a₀, तथा (3) p² ∤ a₀।'
                }
            }
        ]
    },

    // =========================================================================
    // 4. DIFFERENTIAL EQUATIONS & MECHANICS
    // =========================================================================
    {
        topicId: 'math-diff-equations-mechanics',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Master Cadre Mathematics: Covers First order ODEs (Exact, IF, Leibniz linear, Bernoulli), Higher-order linear ODEs with constant coefficients (CF + PI), Cauchy-Euler homogeneous equations, PDEs (Lagrange linear, Charpit method), Kinematics in 2D (Radial/transverse, Tangential/normal), Projectile motion, Work-Energy, Virtual Work, and Kepler’s laws.'
        },
        bookRefs: [
            {
                title: 'Ordinary and Partial Differential Equations',
                author: 'M.D. Raisinghania',
                chapter: 'Chapters 2, 4, 5 & 14 (First Order Equations, Linear ODEs, Cauchy-Euler, Partial Differential Equations)',
                relevance: 'Definitive reference for Punjab Master Cadre differential equations and auxiliary systems.'
            },
            {
                title: 'An Elementary Treatise on the Dynamics of a Particle and of Rigid Bodies',
                author: 'S.L. Loney',
                chapter: 'Chapters 1, 3 & 4 (Kinematics, Projectiles, Central Orbits & Planetary Motion)',
                relevance: 'Classical benchmark for 2D kinematics, projectile equations, and Kepler’s laws.'
            }
        ],
        summary: {
            en: `### 1. First-Order ODEs: Exact Equations & Integrating Factors
- **Exact Differential Equation:** $M(x, y) dx + N(x, y) dy = 0$ is exact if and only if:
  $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$$
  Solution is given by $\\int_{y = \\text{const}} M dx + \\int (\\text{terms in } N \\text{ free from } x) dy = C$.
- **Integrating Factor (IF) Rules:**
  1. If $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = f(x)$, then $\\text{IF} = e^{\\int f(x) dx}$.
  2. If $\\frac{1}{M}\\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) = g(y)$, then $\\text{IF} = e^{\\int g(y) dy}$.
  3. Homogeneous equation $M dx + N dy = 0$: $\\text{IF} = \\frac{1}{Mx + Ny}$ (provided $Mx + Ny \\ne 0$).
  4. Equation of form $y f_1(xy) dx + x f_2(xy) dy = 0$: $\\text{IF} = \\frac{1}{Mx - Ny}$ ($Mx - Ny \\ne 0$).
- **Leibniz Linear Equation:** $\\frac{dy}{dx} + P(x)y = Q(x) \\implies \\text{IF} = e^{\\int P dx}$, solution: $y \\cdot \\text{IF} = \\int Q \\cdot \\text{IF} dx + C$.
- **Bernoulli's Equation:** $\\frac{dy}{dx} + Py = Q y^n \\implies$ divide by $y^n$ and substitute $v = y^{1-n}$ to obtain $\\frac{dv}{dx} + (1-n)Pv = (1-n)Q$.

### 2. Linear ODEs with Constant Coefficients & Cauchy-Euler Equations
- **General Form:** $f(D)y = X$ where $D = \\frac{d}{dx}$. General solution: $y = y_{CF} + y_{PI}$.
- **Complementary Function ($y_{CF}$):** Roots of auxiliary equation $f(m) = 0$:
  - Real and distinct ($m_1, m_2$): $y_{CF} = c_1 e^{m_1 x} + c_2 e^{m_2 x}$.
  - Real and repeated ($m, m$): $y_{CF} = (c_1 + c_2 x) e^{mx}$.
  - Complex conjugate ($\\alpha \\pm i\\beta$): $y_{CF} = e^{\\alpha x}(c_1 \\cos \\beta x + c_2 \\sin \\beta x)$.
- **Particular Integral ($y_{PI}$):**
  - $\\frac{1}{f(D)} e^{ax} = \\frac{1}{f(a)} e^{ax}$ (if $f(a) \\ne 0$). If $f(a) = 0$, $y_{PI} = x \\frac{1}{f'(a)} e^{ax}$.
  - $\\frac{1}{f(D^2)} \\sin(ax) = \\frac{1}{f(-a^2)} \\sin(ax)$ (if $f(-a^2) \\ne 0$).
  - $\\frac{1}{f(D)} [e^{ax} V] = e^{ax} \\frac{1}{f(D+a)} V$.
- **Cauchy-Euler Homogeneous Equation:** $x^n \\frac{d^n y}{dx^n} + a_1 x^{n-1} \\frac{d^{n-1} y}{dx^{n-1}} + \\dots = X$.
  - Substitution: $x = e^z \\implies z = \\ln x$.
  - Operators: $x D = \\theta$, $x^2 D^2 = \\theta(\\theta - 1)$, $x^3 D^3 = \\theta(\\theta - 1)(\\theta - 2)$ where $\\theta = \\frac{d}{dz}$.

### 3. Partial Differential Equations (Lagrange & Charpit Methods)
- **Lagrange's Linear PDE:** $P p + Q q = R$ (where $p = \\frac{\\partial z}{\\partial x}, q = \\frac{\\partial z}{\\partial y}$).
  - Auxiliary system: $\\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$.
  - If independent solutions are $u(x, y, z) = c_1$ and $v(x, y, z) = c_2$, general solution is $\\Phi(u, v) = 0$.
- **Charpit's Method for First-Order Non-Linear PDE $F(x, y, z, p, q) = 0$:**
  $$\\frac{dp}{F_x + p F_z} = \\frac{dq}{F_y + q F_z} = \\frac{dz}{-p F_p - q F_q} = \\frac{dx}{-F_p} = \\frac{dy}{-F_q} = \\frac{dF}{0}$$

### 4. 2D Kinematics: Polar & Intrinsic Coordinates
- **Polar Coordinates $(r, \\theta)$:**
  - Radial Velocity: $v_r = \\dot{r} = \\frac{dr}{dt}$.
  - Transverse Velocity: $v_\\theta = r \\dot{\\theta} = r \\frac{d\\theta}{dt}$.
  - Radial Acceleration: $a_r = \\ddot{r} - r \\dot{\\theta}^2$.
  - Transverse Acceleration: $a_\\theta = \\frac{1}{r} \\frac{d}{dt}(r^2 \\dot{\\theta}) = 2\\dot{r}\\dot{\\theta} + r\\ddot{\\theta}$.
- **Intrinsic Coordinates (Tangential & Normal):**
  - Tangential Velocity: $v = \\frac{ds}{dt}$.
  - Tangential Acceleration: $a_t = \\frac{dv}{dt} = v \\frac{dv}{ds} = \\frac{d^2 s}{dt^2}$.
  - Normal Acceleration: $a_n = \\frac{v^2}{\\rho}$ (directed towards the centre of curvature, where $\\rho = \\frac{ds}{d\\psi}$ is the radius of curvature).

### 5. Projectile Motion, Virtual Work & Kepler's Laws
- **Projectile Motion (Angle $\\alpha$, Speed $u$):**
  - Time of Flight: $T = \\frac{2u \\sin\\alpha}{g}$.
  - Horizontal Range: $R = \\frac{u^2 \\sin 2\\alpha}{g}$ ($R_{\\max} = \\frac{u^2}{g}$ at $\\alpha = 45^\\circ$).
  - Maximum Height: $H = \\frac{u^2 \\sin^2\\alpha}{2g}$.
  - Trajectory Equation: $y = x \\tan\\alpha - \\frac{g x^2}{2u^2 \\cos^2\\alpha}$ (parabolic).
- **Principle of Virtual Work:** A system of coplanar forces acting on a rigid body is in equilibrium if and only if the total virtual work done during any small arbitrary virtual displacement consistent with constraints is zero:
  $$\\delta W = \\sum \\vec{F}_i \\cdot \\delta \\vec{r}_i = 0$$
- **Kepler's Laws of Planetary Motion:**
  1. **Law of Orbits:** Planets orbit the Sun in ellipses, with the Sun located at one focus.
  2. **Law of Areas:** A line joining planet and Sun sweeps out equal areas in equal times (constant areal velocity $\\frac{dA}{dt} = \\frac{1}{2} r^2 \\dot{\\theta} = \\frac{h}{2} = \\text{const}$, expressing conservation of angular momentum).
  3. **Harmonic Law:** The square of orbital period is proportional to the cube of semi-major axis: $T^2 \\propto a^3$.`,
            pa: `### 1. ਪਹਿਲੀ ਘਾਤ ਦੇ ਅਵਕਲ ਸਮੀਕਰਨ ਅਤੇ ਸਮਾਕਲਨ ਗੁਣਕ (IF)
- **ਸਹੀ (Exact) ਸਮੀਕਰਨ:** $M dx + N dy = 0$ ਸਹੀ ਹੁੰਦੀ ਹੈ ਜੇਕਰ $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$ ਹੋਵੇ।
- **ਲੀਬਨੀਜ਼ ਰੇਖੀ ਸਮੀਕਰਨ:** $\\frac{dy}{dx} + Py = Q \\implies \\text{IF} = e^{\\int P dx}$, ਹੱਲ: $y \\cdot \\text{IF} = \\int Q \\cdot \\text{IF} dx + C$।
- **ਬਰਨੌਲੀ ਸਮੀਕਰਨ:** $\\frac{dy}{dx} + Py = Q y^n \\implies v = y^{1-n}$ ਰੱਖ ਕੇ ਰੇਖੀ ਵਿੱਚ ਬਦਲੋ।

### 2. ਸਥਿਰ ਗੁਣਾਂਕਾਂ ਵਾਲੇ ਰੇਖੀ ਸਮੀਕਰਨ ਅਤੇ ਕਾਸ਼ੀ-ਯੂਲਰ ਸਮੀਕਰਨ
- $f(D)y = X \\implies y = y_{CF} + y_{PI}$।
- **ਪਾਰਟੀਕੂਲਰ ਇੰਟੀਗ੍ਰਲ ($y_{PI}$):**
  - $\\frac{1}{f(D)} e^{ax} = \\frac{1}{f(a)} e^{ax}$ ($f(a) \\ne 0$ ਲਈ)।
  - $\\frac{1}{f(D^2)} \\sin(ax) = \\frac{1}{f(-a^2)} \\sin(ax)$ ($f(-a^2) \\ne 0$ ਲਈ)।
- **ਕਾਸ਼ੀ-ਯੂਲਰ ਸਮੀਕਰਨ:** $x = e^z \\implies z = \\ln x$ ਰੱਖੋ, ਜਿੱਥੇ $xD = \\theta, x^2 D^2 = \\theta(\\theta - 1)$।

### 3. ਅੰਸ਼ਕ ਅਵਕਲ ਸਮੀਕਰਨ (PDE)
- **ਲਗਰਾਂਜ ਦਾ ਰੇਖੀ PDE:** $Pp + Qq = R \\implies \\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$।
- **ਚਾਰਪਿਟ ਵਿਧੀ:** ਪਹਿਲੀ ਘਾਤ ਦੇ ਗ਼ੈਰ-ਰੇਖੀ PDE ਲਈ ਸਹਾਇਕ ਸਮੀਕਰਨ।

### 4. ਦੋ-ਪਸਾਰੀ ਕਾਇਨਾਮੈਟਿਕਸ (Kinematics in 2D)
- **ਪੋਲਰ ਨਿਰਦੇਸ਼ ਅੰਕ:**
  - ਰੇਡੀਅਲ ਵੇਗ: $\\dot{r}$, ਟ੍ਰਾਂਸਵਰਸ ਵੇਗ: $r \\dot{\\theta}$।
  - ਰੇਡੀਅਲ ਪ੍ਰਵੇਗ: $\\ddot{r} - r \\dot{\\theta}^2$।
  - ਟ੍ਰਾਂਸਵਰਸ ਪ੍ਰਵੇਗ: $\\frac{1}{r} \\frac{d}{dt}(r^2 \\dot{\\theta}) = 2\\dot{r}\\dot{\\theta} + r\\ddot{\\theta}$।
- **ਟੈਂਜੈਂਸ਼ਲ ਅਤੇ ਨਾਰਮਲ ਪ੍ਰਵੇਗ:**
  - ਟੈਂਜੈਂਸ਼ਲ ਪ੍ਰਵੇਗ $= \\frac{dv}{dt} = v \\frac{dv}{ds}$।
  - ਨਾਰਮਲ ਪ੍ਰਵੇਗ $= \\frac{v^2}{\\rho}$ (ਜਿੱਥੇ $\\rho$ ਕਰਵੇਚਰ ਦਾ ਅਰਧ-ਵਿਆਸ ਹੈ)।

### 5. ਪ੍ਰਖੇਪਕ ਗਤੀ, ਕਲਪਿਤ ਕਾਰਜ ਅਤੇ ਕੈਪਲਰ ਦੇ ਨਿਯਮ
- **ਪ੍ਰਖੇਪਕ (Projectile):** ਉਡਾਣ ਸਮਾਂ $T = \\frac{2u \\sin\\alpha}{g}$, ਖਿਤਜੀ ਪਹੁੰਚ $R = \\frac{u^2 \\sin 2\\alpha}{g}$, ਅਧਿਕਤਮ ਉਚਾਈ $H = \\frac{u^2 \\sin^2\\alpha}{2g}$।
- **ਕਲਪਿਤ ਕਾਰਜ ਸਿਧਾਂਤ (Virtual Work):** ਸੰਤੁਲਨ ਵਿੱਚ ਕੁੱਲ ਕਲਪਿਤ ਕਾਰਜ ਸਿਫ਼ਰ ਹੁੰਦਾ ਹੈ ($\\delta W = 0$)।
- **ਕੈਪਲਰ ਦੇ ਨਿਯਮ:** ਦੂਜਾ ਨਿਯਮ ਖੇਤਰੀ ਵੇਗ ਦੇ ਸਥਿਰ ਹੋਣ (ਕੋਣੀ ਸੰਵੇਗ ਸੁਰੱਖਿਅਤ) ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ; ਤੀਜਾ ਨਿਯਮ $T^2 \\propto a^3$।`,
            hi: `### 1. प्रथम कोटि अवकल समीकरण एवं समाकलन गुणक (IF)
- **यथार्थ (Exact) समीकरण:** $M dx + N dy = 0$ यथार्थ है $\\iff \\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$।
- **लाइब्निज रैखिक समीकरण:** $\\frac{dy}{dx} + Py = Q \\implies \\text{IF} = e^{\\int P dx}$, हल: $y \\cdot \\text{IF} = \\int Q \\cdot \\text{IF} dx + C$।
- **बरनौली समीकरण:** $\\frac{dy}{dx} + Py = Q y^n \\implies v = y^{1-n}$ प्रतिस्थापन से रैखिक में रूपांतरित।

### 2. अचर गुणांकों वाले रैखिक अवकल समीकरण एवं कौशी-यूलर समीकरण
- $f(D)y = X \\implies y = y_{CF} + y_{PI}$।
- **विशेष समाकल ($y_{PI}$):**
  - $\\frac{1}{f(D)} e^{ax} = \\frac{1}{f(a)} e^{ax}$ ($f(a) \\ne 0$ पर)।
  - $\\frac{1}{f(D^2)} \\sin(ax) = \\frac{1}{f(-a^2)} \\sin(ax)$ ($f(-a^2) \\ne 0$ पर)।
- **कौशी-यूलर समीकरण:** $x = e^z \\implies z = \\ln x$ जहाँ $xD = \\theta, x^2 D^2 = \\theta(\\theta - 1)$।

### 3. आंशिक अवकल समीकरण (PDE)
- **लैग्रांज रैखिक PDE:** $Pp + Qq = R \\implies \\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$।
- **चारपिट विधि:** प्रथम कोटि अरैखिक PDE के समाधान हेतु सहायक निकाय।

### 4. 2D शुद्धगतिकी (Kinematics)
- **ध्रुवीय निर्देशांक:**
  - त्रिज्यीय वेग: $\\dot{r}$, अनुप्रस्थ वेग: $r \\dot{\\theta}$।
  - त्रिज्यीय त्वरण: $\\ddot{r} - r \\dot{\\theta}^2$।
  - अनुप्रस्थ त्वरण: $\\frac{1}{r} \\frac{d}{dt}(r^2 \\dot{\\theta}) = 2\\dot{r}\\dot{\\theta} + r\\ddot{\\theta}$।
- **स्पर्शरेखीय एवं अभिलंब त्वरण:**
  - स्पर्शरेखीय त्वरण $= \\frac{dv}{dt} = v \\frac{dv}{ds}$।
  - अभिलंब त्वरण $= \\frac{v^2}{\\rho}$ (वक्रता केंद्र की ओर, जहाँ $\\rho$ वक्रता त्रिज्या है)।

### 5. प्रक्षेप्य गति, कल्पित कार्य एवं केपलर नियम
- **प्रक्षेप्य गति:** उड्डयन काल $T = \\frac{2u \\sin\\alpha}{g}$, परास $R = \\frac{u^2 \\sin 2\\alpha}{g}$, महत्तम ऊँचाई $H = \\frac{u^2 \\sin^2\\alpha}{2g}$।
- **कल्पित कार्य सिद्धांत:** साम्यावस्था में किया गया कुल कल्पित कार्य शून्य होता है ($\\delta W = 0$)।
- **केपलर नियम:** द्वितीय नियम क्षेत्रीय वेग की स्थिरता (कोणीय संवेग संरक्षण) को व्यक्त करता है; तृतीय नियम $T^2 \\propto a^3$।`
        },
        keyNotes: {
            en: [
                'Exact ODE criterion: M dx + N dy = 0 is exact iff ∂M/∂y = ∂N/∂x.',
                'Leibniz linear ODE: dy/dx + Py = Q uses IF = e^{∫P dx}; solution is y · IF = ∫ (Q · IF) dx + C.',
                'Cauchy-Euler transformation: Substitute x = eᶻ (z = ln x); xD = θ and x²D² = θ(θ − 1).',
                '2D Acceleration formulas: Radial a_r = r̈ − r θ̇²; Transverse a_θ = 1/r d/dt(r² θ̇) = 2ṙθ̇ + rθ̈.',
                'Intrinsic acceleration: Tangential a_t = v dv/ds; Normal a_n = v² / ρ (where ρ is radius of curvature).',
                'Kepler’s Second Law represents conservation of angular momentum: areal velocity dA/dt = (1/2)r² θ̇ = constant.'
            ],
            pa: [
                'ਸਹੀ ਅਵਕਲ ਸਮੀਕਰਨ: M dx + N dy = 0 ਤਾਂ ਹੀ ਸਹੀ ਹੈ ਜੇਕਰ ∂M/∂y = ∂N/∂x ਹੋਵੇ।',
                'ਲੀਬਨੀਜ਼ ਰੇਖੀ ਸਮੀਕਰਨ: dy/dx + Py = Q ਵਿੱਚ ਸਮਾਕਲਨ ਗੁਣਕ IF = e^{∫P dx} ਹੁੰਦਾ ਹੈ।',
                'ਕਾਸ਼ੀ-ਯੂਲਰ ਸਮੀਕਰਨ: x = eᶻ ਰੱਖਣ ਨਾਲ xD = θ ਅਤੇ x²D² = θ(θ − 1) ਬਣ ਜਾਂਦਾ ਹੈ।',
                '2D ਪ੍ਰਵੇਗ ਸੂਤਰ: ਰੇਡੀਅਲ a_r = r̈ − r θ̇²; ਟ੍ਰਾਂਸਵਰਸ a_θ = 2ṙθ̇ + rθ̈।',
                'ਅੰਦਰੂਨੀ ਪ੍ਰਵੇਗ: ਟੈਂਜੈਂਸ਼ਲ ਪ੍ਰਵੇਗ a_t = v dv/ds; ਨਾਰਮਲ ਪ੍ਰਵੇਗ a_n = v² / ρ।',
                'ਕੈਪਲਰ ਦਾ ਦੂਜਾ ਨਿਯਮ ਕੋਣੀ ਸੰਵੇਗ ਸੁਰੱਖਿਆ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ: ਖੇਤਰੀ ਵੇਗ dA/dt = ਸਥਿਰ।'
            ],
            hi: [
                'यथार्थ समीकरण कसौटी: M dx + N dy = 0 यथार्थ है $\\iff$ ∂M/∂y = ∂N/∂x।',
                'लाइब्निज रैखिक अवकल समीकरण: dy/dx + Py = Q हेतु IF = e^{∫P dx} होता है।',
                'कौशी-यूलर रूपांतरण: x = eᶻ रखने पर xD = θ तथा x²D² = θ(θ − 1) प्राप्त होता है।',
                '2D त्वरण सूत्र: त्रिज्यीय a_r = r̈ − r θ̇²; अनुप्रस्थ a_θ = 2ṙθ̇ + rθ̈।',
                'आंतरिक त्वरण: स्पर्शरेखीय a_t = v dv/ds; अभिलंब a_n = v² / ρ।',
                'केपलर का द्वितीय नियम कोणीय संवेग संरक्षण व्यक्त करता है: क्षेत्रीय वेग dA/dt = नियतांक।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Bernoulli’s equation dy/dx + Py = Q yⁿ is reduced to linear by substitution v = y^{1-n}.',
                'Charpit auxiliary system: dp/(F_x + pF_z) = dq/(F_y + qF_z) = dz/(-pF_p - qF_q) = dx/(-F_p) = dy/(-F_q).',
                'Maximum horizontal projectile range R_{max} = u²/g at launch angle α = 45°.',
                'Virtual work of tensions in inextensible strings and normal reactions at smooth surfaces is zero.',
                'Kepler’s Third Law: T² / a³ = 4π² / (G M) = constant.'
            ],
            pa: [
                'ਬਰਨੌਲੀ ਸਮੀਕਰਨ dy/dx + Py = Q yⁿ ਨੂੰ v = y^{1-n} ਰੱਖ ਕੇ ਰੇਖੀ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।',
                'ਚਾਰਪਿਟ ਸਹਾਇਕ ਸਮੀਕਰਨ ਪਹਿਲੀ ਘਾਤ ਦੇ ਗ਼ੈਰ-ਰੇਖੀ PDE ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।',
                'ਅਧਿਕਤਮ ਖਿਤਜੀ ਪਹੁੰਚ R_{max} = u²/g ਹੁੰਦੀ ਹੈ (ਕੋਣ α = 45° ਉੱਤੇ)।',
                'ਨਿਰੰਤਰ ਡੋਰੀਆਂ ਦੇ ਤਣਾਅ ਅਤੇ ਚਿਕਨੀ ਸਤ੍ਹਾ ਦੀ ਪ੍ਰਤੀਕਿਰਿਆ ਦਾ ਕਲਪਿਤ ਕਾਰਜ ਸਿਫ਼ਰ ਹੁੰਦਾ ਹੈ।',
                'ਕੈਪਲਰ ਦਾ ਤੀਜਾ ਨਿਯਮ: T² ∝ a³।'
            ],
            hi: [
                'बरनौली समीकरण dy/dx + Py = Q yⁿ को v = y^{1-n} द्वारा रैखिक में बदला जाता है।',
                'चारपिट सहायक समीकरण प्रथम कोटि अरैखिक PDE के समाधान हेतु प्रयुक्त होते हैं।',
                'प्रक्षेप्य का अधिकतम क्षैतिज परास R_{max} = u²/g होता है (प्रक्षेप कोण α = 45° पर)।',
                'अवितान्य डोरियों के तनाव एवं चिकने तलों की सामान्य प्रतिक्रिया का कल्पित कार्य शून्य होता है।',
                'केपलर का तृतीय नियम: T² ∝ a³।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: In evaluating 1/f(D²) sin(ax), replacing D² by a² gives the correct particular integral. Correction: D² must be replaced by -a² (e.g. for sin(3x), replace D² by -9, NOT +9).',
                'Misconception: Radial acceleration in 2D polar coordinates is simply the second time derivative of distance r (r̈). Correction: Radial acceleration includes the centripetal inward term: a_r = r̈ − r θ̇².',
                'Misconception: The horizontal range of a projectile fired at angle α is different from that at angle (90° − α). Correction: Horizontal range is identical for complementary launch angles α and (90° − α) with the same initial speed, since sin(2(90° − α)) = sin(180° − 2α) = sin 2α.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: 1/f(D²) sin(ax) ਵਿੱਚ D² ਦੀ ਥਾਂ a² ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ। ਸੁਧਾਰ: D² ਦੀ ਥਾਂ ਹਮੇਸ਼ਾ -a² ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ sin(3x) ਲਈ D² ਦੀ ਥਾਂ -9 ਰੱਖਣਾ ਹੁੰਦਾ ਹੈ, +9 ਨਹੀਂ)।',
                'ਭੁਲੇਖਾ: ਪੋਲਰ ਨਿਰਦੇਸ਼ ਅੰਕਾਂ ਵਿੱਚ ਰੇਡੀਅਲ ਪ੍ਰਵੇਗ ਸਿਰਫ਼ r̈ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਰੇਡੀਅਲ ਪ੍ਰਵੇਗ a_r = r̈ − r θ̇² ਹੁੰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਸੈਂਟਰੀਪੀਟਲ ਪਦ ਸ਼ਾਮਲ ਹੈ।',
                'ਭੁਲੇਖਾ: ਕੋਣ α ਅਤੇ (90° − α) ਉੱਤੇ ਸੁੱਟੇ ਪ੍ਰਖੇਪਕਾਂ ਦੀ ਖਿਤਜੀ ਪਹੁੰਚ ਵੱਖਰੀ ਹੁੰਦੀ ਹੈ। ਸੁਧਾਰ: ਪੂਰਕ ਕੋਣਾਂ α ਅਤੇ (90° − α) ਲਈ ਖਿਤਜੀ ਪਹੁੰਚ ਬਿਲਕੁਲ ਬਰਾਬਰ ਹੁੰਦੀ ਹੈ ਕਿਉਂਕਿ sin(2(90° − α)) = sin 2α।'
            ],
            hi: [
                'भ्रांति: 1/f(D²) sin(ax) में D² के स्थान पर a² प्रतिस्थापित किया जाता है। सुधार: D² के स्थान पर सदैव -a² प्रतिस्थापित किया जाता है (जैसे sin(3x) हेतु D² = -9, न कि +9)।',
                'भ्रांति: ध्रुवीय निर्देशांकों में त्रिज्यीय त्वरण केवल r̈ होता है। सुधार: त्रिज्यीय त्वरण में अभिकेंद्रीय पद सम्मिलित होता है: a_r = r̈ − r θ̇²।',
                'भ्रांति: α तथा (90° − α) कोणों पर प्रक्षिप्त पिंडों की क्षैतिज परास भिन्न होती है। सुधार: समान प्रारंभिक वेग पर पूरक कोणों α एवं (90° − α) हेतु परास पूर्णतः समान होती है क्योंकि sin(2(90° − α)) = sin 2α।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Solve the second-order linear differential equation: d²y/dx² − 5 dy/dx + 6y = e^{3x}.',
                    pa: 'ਦੂਜੀ ਘਾਤ ਦਾ ਰੇਖੀ ਅਵਕਲ ਸਮੀਕਰਨ ਹੱਲ ਕਰੋ: d²y/dx² − 5 dy/dx + 6y = e^{3x}।',
                    hi: 'द्वितीय कोटि रैखिक अवकल समीकरण हल कीजिए: d²y/dx² − 5 dy/dx + 6y = e^{3x}।'
                },
                solutionSteps: {
                    en: [
                        'Form auxiliary equation: m² - 5m + 6 = 0 => (m - 2)(m - 3) = 0 => m₁ = 2, m₂ = 3.',
                        'Complementary function: y_{CF} = c₁ e^{2x} + c₂ e^{3x}.',
                        'Particular integral: y_{PI} = 1/(D² - 5D + 6) e^{3x} = 1/((D - 2)(D - 3)) e^{3x}.',
                        'Since D = 3 makes denominator zero (case of failure): y_{PI} = 1/(3 - 2) [ x · e^{3x} / 1! ] = x e^{3x}.',
                        'General solution: y = y_{CF} + y_{PI} = c₁ e^{2x} + c₂ e^{3x} + x e^{3x}.'
                    ],
                    pa: [
                        'ਸਹਾਇਕ ਸਮੀਕਰਨ: m² - 5m + 6 = 0 => (m - 2)(m - 3) = 0 => m₁ = 2, m₂ = 3।',
                        'ਕੰਪਲੀਮੈਂਟਰੀ ਫੰਕਸ਼ਨ: y_{CF} = c₁ e^{2x} + c₂ e^{3x}।',
                        'ਪਾਰਟੀਕੂਲਰ ਇੰਟੀਗ੍ਰਲ: y_{PI} = 1/((D - 2)(D - 3)) e^{3x}। D = 3 ਰੱਖਣ ਤੇ ਹਰ 0 ਹੁੰਦਾ ਹੈ।',
                        'ਨਿਯਮ ਅਨੁਸਾਰ: y_{PI} = 1/(3 - 2) · [x e^{3x} / 1!] = x e^{3x}।',
                        'ਸੰਪੂਰਨ ਹੱਲ: y = c₁ e^{2x} + c₂ e^{3x} + x e^{3x}।'
                    ],
                    hi: [
                        'सहायक समीकरण: m² - 5m + 6 = 0 => (m - 2)(m - 3) = 0 => m₁ = 2, m₂ = 3।',
                        'पूरक फलन: y_{CF} = c₁ e^{2x} + c₂ e^{3x}।',
                        'विशेष समाकल: y_{PI} = 1/((D - 2)(D - 3)) e^{3x}। D = 3 पर हर शून्य हो जाता है।',
                        'विफलता नियम से: y_{PI} = 1/(3 - 2) · [x e^{3x}] = x e^{3x}।',
                        'व्यापक हल: y = c₁ e^{2x} + c₂ e^{3x} + x e^{3x}।'
                    ]
                },
                finalAnswer: {
                    en: 'y(x) = c₁ e^{2x} + c₂ e^{3x} + x e^{3x}.',
                    pa: 'y(x) = c₁ e^{2x} + c₂ e^{3x} + x e^{3x}।',
                    hi: 'y(x) = c₁ e^{2x} + c₂ e^{3x} + x e^{3x}।'
                }
            },
            {
                problem: {
                    en: 'A projectile is launched with velocity u = 40 m/s at an angle α = 30° to the horizontal (take g = 10 m/s²). Find the time of flight, maximum height, and horizontal range.',
                    pa: 'ਇੱਕ ਪ੍ਰਖੇਪਕ ਖਿਤਜ ਨਾਲ α = 30° ਦੇ ਕੋਣ ਉੱਤੇ u = 40 m/s ਦੇ ਵੇਗ ਨਾਲ ਸੁੱਟਿਆ ਜਾਂਦਾ ਹੈ (g = 10 m/s² ਲਓ)। ਉਡਾਣ ਸਮਾਂ, ਅਧਿਕਤਮ ਉਚਾਈ ਅਤੇ ਖਿਤਜੀ ਪਹੁੰਚ ਪਤਾ ਕਰੋ।',
                    hi: 'एक प्रक्षेप्य को क्षैतिज से α = 30° कोण पर u = 40 m/s के वेग से प्रक्षेपित किया जाता है (g = 10 m/s² लें)। उड्डयन काल, महत्तम ऊँचाई तथा क्षैतिज परास ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Initial parameters: u = 40 m/s, α = 30°, sin 30° = 1/2, cos 30° = √3/2, sin 60° = √3/2, g = 10 m/s².',
                        'Time of flight: T = (2u sin α) / g = (2 × 40 × 0.5) / 10 = 40 / 10 = 4 seconds.',
                        'Maximum height: H = (u² sin² α) / (2g) = (1600 × 0.25) / 20 = 400 / 20 = 20 metres.',
                        'Horizontal range: R = (u² sin 2α) / g = (1600 × sin 60°) / 10 = 160 × (√3 / 2) = 80√3 ≈ 138.56 metres.'
                    ],
                    pa: [
                        'ਮੁੱਲ: u = 40 m/s, α = 30°, sin 30° = 0.5, sin 60° = √3/2, g = 10 m/s²।',
                        'ਉਡਾਣ ਸਮਾਂ: T = (2u sin α) / g = (2 × 40 × 0.5) / 10 = 4 ਸੈਕਿੰਡ।',
                        'ਅਧਿਕਤਮ ਉਚਾਈ: H = (u² sin² α) / (2g) = (1600 × 0.25) / 20 = 20 ਮੀਟਰ।',
                        'ਖਿਤਜੀ ਪਹੁੰਚ: R = (u² sin 2α) / g = (1600 × √3/2) / 10 = 80√3 ਮੀਟਰ (≈ 138.56 ਮੀਟਰ)।'
                    ],
                    hi: [
                        'मान: u = 40 m/s, α = 30°, sin 30° = 0.5, sin 60° = √3/2, g = 10 m/s²।',
                        'उड्डयन काल: T = (2u sin α) / g = (2 × 40 × 0.5) / 10 = 4 सेकंड।',
                        'महत्तम ऊँचाई: H = (u² sin² α) / (2g) = (1600 × 0.25) / 20 = 20 मीटर।',
                        'क्षैतिज परास: R = (u² sin 2α) / g = (1600 × √3/2) / 10 = 80√3 मीटर (≈ 138.56 मीटर)।'
                    ]
                },
                finalAnswer: {
                    en: 'Time of flight T = 4 s; Maximum height H = 20 m; Horizontal range R = 80√3 m (≈ 138.56 m).',
                    pa: 'ਉਡਾਣ ਸਮਾਂ T = 4 s; ਅਧਿਕਤਮ ਉਚਾਈ H = 20 m; ਖਿਤਜੀ ਪਹੁੰਚ R = 80√3 m (≈ 138.56 m)।',
                    hi: 'उड्डयन काल T = 4 s; महत्तम ऊँचाई H = 20 m; क्षैतिज परास R = 80√3 m (≈ 138.56 m)।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-de-1',
                question: {
                    en: 'What is the condition for the first order ODE M dx + N dy = 0 to be exact?',
                    pa: 'ਪਹਿਲੀ ਘਾਤ ਦੇ ਅਵਕਲ ਸਮੀਕਰਨ M dx + N dy = 0 ਦੇ ਸਹੀ (Exact) ਹੋਣ ਦੀ ਕੀ ਸ਼ਰਤ ਹੈ?',
                    hi: 'प्रथम कोटि अवकल समीकरण M dx + N dy = 0 के यथार्थ होने का क्या प्रतिबंध है?'
                },
                answer: {
                    en: '∂M/∂y = ∂N/∂x, where M and N have continuous first partial derivatives.',
                    pa: '∂M/∂y = ∂N/∂x, ਜਿੱਥੇ M ਅਤੇ N ਦੇ ਅੰਸ਼ਕ ਅਵਕਲਜ ਨਿਰੰਤਰ ਹੋਣ।',
                    hi: '∂M/∂y = ∂N/∂x, जहाँ M और N के प्रथम आंशिक अवकलज संतत हों।'
                }
            },
            {
                id: 'fc-de-2',
                question: {
                    en: 'What is the integrating factor for the Leibniz linear differential equation dy/dx + P(x)y = Q(x)?',
                    pa: 'ਲੀਬਨੀਜ਼ ਰੇਖੀ ਅਵਕਲ ਸਮੀਕਰਨ dy/dx + P(x)y = Q(x) ਲਈ ਸਮਾਕਲਨ ਗੁਣਕ (IF) ਕੀ ਹੁੰਦਾ ਹੈ?',
                    hi: 'लाइब्निज रैखिक अवकल समीकरण dy/dx + P(x)y = Q(x) का समाकलन गुणक (IF) क्या होता है?'
                },
                answer: {
                    en: 'IF = e^{∫ P(x) dx}.',
                    pa: 'IF = e^{∫ P(x) dx}।',
                    hi: 'IF = e^{∫ P(x) dx}।'
                }
            },
            {
                id: 'fc-de-3',
                question: {
                    en: 'What are the radial and transverse accelerations in 2D plane polar coordinates?',
                    pa: '2D ਪੋਲਰ ਨਿਰਦੇਸ਼ ਅੰਕਾਂ ਵਿੱਚ ਰੇਡੀਅਲ ਅਤੇ ਟ੍ਰਾਂਸਵਰਸ ਪ੍ਰਵੇਗ ਕੀ ਹੁੰਦੇ ਹਨ?',
                    hi: '2D ध्रुवीय निर्देशांकों में त्रिज्यीय एवं अनुप्रस्थ त्वरण क्या होते हैं?'
                },
                answer: {
                    en: 'Radial acceleration a_r = r̈ − r θ̇²; Transverse acceleration a_θ = 2ṙθ̇ + rθ̈ = 1/r d/dt(r² θ̇).',
                    pa: 'ਰੇਡੀਅਲ ਪ੍ਰਵੇਗ a_r = r̈ − r θ̇²; ਟ੍ਰਾਂਸਵਰਸ ਪ੍ਰਵੇਗ a_θ = 2ṙθ̇ + rθ̈ = 1/r d/dt(r² θ̇) ਹੁੰਦਾ ਹੈ।',
                    hi: 'त्रिज्यीय त्वरण a_r = r̈ − r θ̇²; अनुप्रस्थ त्वरण a_θ = 2ṙθ̇ + rθ̈ = 1/r d/dt(r² θ̇) होता है।'
                }
            },
            {
                id: 'fc-de-4',
                question: {
                    en: 'At what launch angle is the horizontal range of a projectile maximized?',
                    pa: 'ਕਿਸ ਕੋਣ ਉੱਤੇ ਪ੍ਰਖੇਪਕ ਦੀ ਖਿਤਜੀ ਪਹੁੰਚ ਸਭ ਤੋਂ ਵੱਧ ਹੁੰਦੀ ਹੈ?',
                    hi: 'किस प्रक्षेपण कोण पर प्रक्षेप्य का क्षैतिज परास महत्तम होता है?'
                },
                answer: {
                    en: 'At α = 45°, where maximum range R_{max} = u² / g.',
                    pa: 'ਕੋਣ α = 45° ਉੱਤੇ, ਜਿੱਥੇ ਅਧਿਕਤਮ ਪਹੁੰਚ R_{max} = u² / g ਹੁੰਦੀ ਹੈ।',
                    hi: 'प्रक्षेप कोण α = 45° पर, जहाँ महत्तम परास R_{max} = u² / g होती है।'
                }
            },
            {
                id: 'fc-de-5',
                question: {
                    en: 'What physical conservation law is expressed by Kepler’s Second Law of planetary motion?',
                    pa: 'ਕੈਪਲਰ ਦਾ ਦੂਜਾ ਨਿਯਮ ਕਿਸ ਭੌਤਿਕ ਸੰਭਾਲ ਨਿਯਮ ਨੂੰ ਪ੍ਰਗਟ ਕਰਦਾ ਹੈ?',
                    hi: 'केपलर का द्वितीय नियम किस भौतिक संरक्षण नियम को व्यक्त करता है?'
                },
                answer: {
                    en: 'Conservation of angular momentum (areal velocity dA/dt = (1/2)r² θ̇ = constant, because central gravitational force exerts zero torque).',
                    pa: 'ਕੋਣੀ ਸੰਵੇਗ ਦੀ ਸੰਭਾਲ (ਖੇਤਰੀ ਵੇਗ dA/dt = ਸਥਿਰ, ਕਿਉਂਕਿ ਕੇਂਦਰੀ ਗੁਰੂਤਾ ਬਲ ਕੋਈ ਟਾਰਕ ਨਹੀਂ ਪੈਦਾ ਕਰਦਾ)।',
                    hi: 'कोणीय संवेग का संरक्षण (क्षेत्रीय वेग dA/dt = नियतांक, क्योंकि केंद्रीय गुरुत्वाकर्षण बल का बल-आघूर्ण शून्य होता है)।'
                }
            }
        ]
    },

    // =========================================================================
    // 5. COORDINATE & SOLID GEOMETRY
    // =========================================================================
    {
        topicId: 'math-coordinate-solid-geometry',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Master Cadre Mathematics: Covers Straight lines, Pair of straight lines, Circles, Radical axis, Standard conics (Parabola, Ellipse, Hyperbola, Tangents, Normals, Director circles), 3D Geometry (Direction cosines/ratios, Plane equations, Straight lines in space, Skew lines & Shortest distance, Spheres, Cones, Cylinders).'
        },
        bookRefs: [
            {
                title: 'The Elements of Coordinate Geometry',
                author: 'S.L. Loney',
                chapter: 'Chapters 2, 4, 7, 8, 11 & 12 (Straight Lines, Circles, Parabola, Ellipse, Hyperbola)',
                relevance: 'Classic treatise on standard conics, tangents, normals, and radical axis.'
            },
            {
                title: 'Analytical Solid Geometry',
                author: 'Shanti Narayan & P.K. Mittal',
                chapter: 'Chapters 1, 2, 3, 5 & 6 (Direction Cosines, Plane, Line, Sphere, Cone & Cylinder)',
                relevance: 'Standard university textbook for 3D analytical geometry and skew lines.'
            }
        ],
        summary: {
            en: `### 1. Straight Lines & Pair of Straight Lines
- **Perpendicular Distance:** Distance from point $(x_1, y_1)$ to line $Ax + By + C = 0$ is $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$. Distance between parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$ is $\\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$.
- **Homogeneous Pair of Lines:** $ax^2 + 2hxy + by^2 = 0$.
  - Represents two lines through the origin. Angle $\\theta$: $\\tan\\theta = \\frac{2\\sqrt{h^2 - ab}}{|a + b|}$.
  - Lines are **perpendicular** $\\iff a + b = 0$ (coefficient of $x^2$ + coefficient of $y^2 = 0$).
  - Lines are **coincident** $\\iff h^2 - ab = 0$.
- **General Second-Degree Equation:** $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ represents a pair of straight lines if and only if the determinant $\\Delta = 0$:
  $$\\Delta = \\begin{vmatrix} a & h & g \\\\ h & b & f \\\\ g & f & c \\end{vmatrix} = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$$

### 2. Circles & Radical Axis
- **General Circle:** $x^2 + y^2 + 2gx + 2fy + c = 0$. Centre: $(-g, -f)$, Radius: $r = \\sqrt{g^2 + f^2 - c}$.
- **Tangent at $(x_1, y_1)$:** $xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0$.
- **Condition of Tangency to $x^2 + y^2 = a^2$:** Line $y = mx + c$ touches the circle iff $c^2 = a^2(1 + m^2)$.
- **Radical Axis of Two Circles:** $S_1 - S_2 = 0$:
  $$2(g_1 - g_2)x + 2(f_1 - f_2)y + (c_1 - c_2) = 0$$
  - It is the locus of points from which tangents drawn to both circles are equal in length.
  - The radical axis is strictly **perpendicular** to the line joining the centres of the two circles.

### 3. Standard Conics & Director Circles
| Conic | Standard Equation | Eccentricity ($e$) | Foci | Directrices | Length of Latus Rectum | Director Circle |
|---|---|---|---|---|---|---|
| **Parabola** | $y^2 = 4ax$ | $e = 1$ | $(a, 0)$ | $x = -a$ | $4a$ | Directrix $x = -a$ |
| **Ellipse** | $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b$) | $e = \\sqrt{1 - b^2/a^2} < 1$ | $(\\pm ae, 0)$ | $x = \\pm a/e$ | $\\frac{2b^2}{a}$ | $x^2 + y^2 = a^2 + b^2$ |
| **Hyperbola** | $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ | $e = \\sqrt{1 + b^2/a^2} > 1$ | $(\\pm ae, 0)$ | $x = \\pm a/e$ | $\\frac{2b^2}{a}$ | $x^2 + y^2 = a^2 - b^2$ |
- **Director Circle Definition:** The locus of points of intersection of two mutually perpendicular tangents to the conic.
- **Rectangular Hyperbola ($a = b$):** $x^2 - y^2 = a^2$ or $xy = c^2$. Eccentricity $e = \\sqrt{2}$. Asymptotes are perpendicular ($y = \\pm x$).

### 4. 3D Coordinate Geometry: Lines & Planes
- **Direction Cosines ($l, m, n$):** $l^2 + m^2 + n^2 = 1$. If direction ratios are $a, b, c$, then $l = \\frac{a}{\\sqrt{a^2+b^2+c^2}}$, etc.
- **Plane Equations:**
  - General: $Ax + By + Cz + D = 0$. Normal vector: $\\vec{n} = (A, B, C)$.
  - Intercept form: $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$.
  - Perpendicular distance from $(x_1, y_1, z_1)$ to plane: $d = \\frac{|Ax_1 + By_1 + Cz_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$.
- **Line in Space:** Symmetric form: $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$.
- **Shortest Distance Between Skew Lines:**
  - Lines $\\vec{r} = \\vec{a}_1 + \\lambda \\vec{b}_1$ and $\\vec{r} = \\vec{a}_2 + \\mu \\vec{b}_2$:
    $$d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}$$
  - Lines are coplanar (intersecting or parallel) $\\iff (\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2) = 0$.

### 5. Sphere, Cone & Cylinder
- **Sphere:** $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$. Centre: $(-u, -v, -w)$, Radius: $r = \\sqrt{u^2 + v^2 + w^2 - d}$.
  - The section of a sphere by any plane is a **circle**.
- **Cone with Vertex at Origin:** A homogeneous equation of second degree $ax^2 + by^2 + cz^2 + 2fyz + 2gzx + 2hxy = 0$ represents a cone with vertex at the origin.
  - Condition for three mutually perpendicular generators: $a + b + c = 0$.
- **Right Circular Cylinder:** Formed by lines parallel to a given axis at a constant radial distance $r$.`,
            pa: `### 1. ਸਰਲ ਰੇਖਾਵਾਂ ਅਤੇ ਰੇਖਾ ਜੁੱਟ (Pair of Straight Lines)
- **ਲੰਬ ਦੂਰੀ:** ਬਿੰਦੂ $(x_1, y_1)$ ਤੋਂ ਲਾਈਨ $Ax + By + C = 0$ ਦੀ ਦੂਰੀ: $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$।
- **ਰੇਖਾ ਜੁੱਟ:** $ax^2 + 2hxy + by^2 = 0$।
  - ਪਰਸਪਰ ਲੰਬਵਤ ਹੋਣ ਦੀ ਸ਼ਰਤ: $a + b = 0$ ($x^2$ ਦਾ ਗੁਣਾਂਕ + $y^2$ ਦਾ ਗੁਣਾਂਕ = 0)।
  - ਸੰਪਾਤੀ (Coincident) ਹੋਣ ਦੀ ਸ਼ਰਤ: $h^2 - ab = 0$।
  - ਵਿਆਪਕ ਸਮੀਕਰਨ ਰੇਖਾ ਜੁੱਟ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ ਜੇਕਰ $\\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$ ਹੋਵੇ।

### 2. ਚੱਕਰ ਅਤੇ ਰੈਡੀਕਲ ਧੁਰਾ (Radical Axis)
- ਚੱਕਰ: $x^2 + y^2 + 2gx + 2fy + c = 0$, ਕੇਂਦਰ $(-g, -f)$, ਅਰਧ-ਵਿਆਸ $r = \\sqrt{g^2 + f^2 - c}$।
- **ਰੈਡੀਕਲ ਧੁਰਾ (Radical Axis):** $S_1 - S_2 = 0$। ਇਹ ਦੋਵਾਂ ਚੱਕਰਾਂ ਦੇ ਕੇਂਦਰਾਂ ਨੂੰ ਮਿਲਾਉਣ ਵਾਲੀ ਰੇਖਾ ਉੱਤੇ ਹਮੇਸ਼ਾ **ਲੰਬਵਤ** ਹੁੰਦਾ ਹੈ।

### 3. ਮਿਆਰੀ ਸ਼ੰਕੂ (Standard Conics) ਅਤੇ ਡਾਇਰੈਕਟਰ ਚੱਕਰ
- **ਪੈਰਾਬੋਲਾ ($y^2 = 4ax$):** $e = 1$, ਫੋਕਸ $(a, 0)$, ਲੇਟਸ ਰੈਕਟਮ $4a$।
- **ਅੰਡਾਕਾਰ (Ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$):** $e = \\sqrt{1 - b^2/a^2} < 1$, ਲੇਟਸ ਰੈਕਟਮ $\\frac{2b^2}{a}$, ਡਾਇਰੈਕਟਰ ਚੱਕਰ $x^2 + y^2 = a^2 + b^2$।
- **ਹਾਈਪਰਬੋਲਾ (Hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$):** $e = \\sqrt{1 + b^2/a^2} > 1$, ਡਾਇਰੈਕਟਰ ਚੱਕਰ $x^2 + y^2 = a^2 - b^2$।
- **ਸਮਕੋਣੀ ਹਾਈਪਰਬੋਲਾ (Rectangular Hyperbola):** $x^2 - y^2 = a^2$, ਉਤਕੇਂਦਰਤਾ $e = \\sqrt{2}$।

### 4. 3D ਜਿਆਮਿਤੀ: ਰੇਖਾਵਾਂ, ਸਮਤਲ ਅਤੇ ਸਕਿਊ ਲਾਈਨਾਂ
- **ਦਿਸ਼ਾ ਕੋਸਾਈਨ:** $l^2 + m^2 + n^2 = 1$।
- **ਸਮਤਲ (Plane):** $Ax + By + Cz + D = 0$।
- **ਸਕਿਊ ਰੇਖਾਵਾਂ ਵਿਚਕਾਰ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ:**
  $$d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}$$

### 5. ਗੋਲਾ, ਸ਼ੰਕੂ ਅਤੇ ਸਿਲੰਡਰ
- ਗੋਲੇ ਦਾ ਸਮਤਲ ਕਾਟ ਹਮੇਸ਼ਾ ਇੱਕ **ਚੱਕਰ** ਹੁੰਦਾ ਹੈ।
- ਸ਼ੰਕੂ ਵਿੱਚ ਤਿੰਨ ਪਰਸਪਰ ਲੰਬਵਤ ਜਨਰੇਟਰ ਹੋਣ ਦੀ ਸ਼ਰਤ: $a + b + c = 0$।`,
            hi: `### 1. सरल रेखाएं एवं रेखा युग्म
- **लंबवत दूरी:** बिंदु $(x_1, y_1)$ से रेखा $Ax + By + C = 0$ की दूरी: $d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$।
- **मूल बिंदु से जाने वाला रेखा युग्म:** $ax^2 + 2hxy + by^2 = 0$।
  - रेखाएं परस्पर लंबवत हैं $\\iff a + b = 0$ ($x^2$ का गुणांक + $y^2$ का गुणांक = 0)।
  - रेखाएं संपाती हैं $\\iff h^2 - ab = 0$।
  - व्यापक द्विघात समीकरण रेखा युग्म निरूपित करता है यदि $\\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$।

### 2. वृत्त एवं मूलाक्ष (Radical Axis)
- वृत्त: $x^2 + y^2 + 2gx + 2fy + c = 0$, केंद्र $(-g, -f)$, त्रिज्या $\\sqrt{g^2+f^2-c}$।
- **मूलाक्ष:** $S_1 - S_2 = 0$। यह दोनों वृत्तों के केंद्रों को मिलाने वाली रेखा पर **लंबवत** होता है।

### 3. मानक शांकव एवं नियामक वृत्त (Director Circle)
- **परवलय ($y^2 = 4ax$):** $e = 1$, नाभि $(a, 0)$, नियता $x = -a$, नाभिलंब $4a$।
- **दीर्घवृत्त ($\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$):** $e = \\sqrt{1 - b^2/a^2} < 1$, नाभिलंब $\\frac{2b^2}{a}$, नियामक वृत्त $x^2 + y^2 = a^2 + b^2$।
- **अतिपरवलय ($\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$):** $e = \\sqrt{1 + b^2/a^2} > 1$, नियामक वृत्त $x^2 + y^2 = a^2 - b^2$।
- **समकोणीय अतिपरवलय:** $x^2 - y^2 = a^2$, उत्केंद्रता $e = \\sqrt{2}$।

### 4. त्रिविमीय ज्यामिति (3D): समतल, रेखा एवं विषमतलीय रेखाएं
- **दिक-कोज्या:** $l^2 + m^2 + n^2 = 1$।
- **समतल:** $Ax + By + Cz + D = 0$।
- **विषमतलीय (Skew) रेखाओं के मध्य न्यूनतम दूरी:**
  $$d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}$$

### 5. गोला, शंकु एवं बेलन
- किसी समतल द्वारा गोले का परिच्छेद सदैव एक **वृत्त** होता है।
- शंकु में तीन परस्पर लंबवत जनकों का प्रतिबंध: $a + b + c = 0$।`
        },
        keyNotes: {
            en: [
                'Perpendicular lines condition: Pair of lines ax² + 2hxy + by² = 0 are mutually perpendicular iff a + b = 0.',
                'Radical axis S₁ − S₂ = 0 is unconditionally perpendicular to the line joining the centres of the two circles.',
                'Eccentricity values: Parabola e = 1; Ellipse e = √(1 − b²/a²) < 1; Hyperbola e = √(1 + b²/a²) > 1; Rectangular hyperbola e = √2.',
                'Director Circle: Locus of perpendicular tangents: Ellipse x² + y² = a² + b²; Hyperbola x² + y² = a² − b².',
                'Shortest distance between skew lines: d = |(a₂ − a₁) · (b₁ × b₂)| / |b₁ × b₂|; lines intersect iff numerator is 0.',
                'Cone condition: Homogeneous second-degree cone has 3 mutually perpendicular generators iff a + b + c = 0.'
            ],
            pa: [
                'ਲੰਬਵਤ ਰੇਖਾਵਾਂ ਦੀ ਸ਼ਰਤ: ax² + 2hxy + by² = 0 ਪਰਸਪਰ ਲੰਬਵਤ ਹੁੰਦੀਆਂ ਹਨ ਜੇਕਰ a + b = 0 ਹੋਵੇ।',
                'ਰੈਡੀਕਲ ਧੁਰਾ (S₁ − S₂ = 0) ਦੋਵਾਂ ਚੱਕਰਾਂ ਦੇ ਕੇਂਦਰਾਂ ਨੂੰ ਜੋੜਨ ਵਾਲੀ ਰੇਖਾ ਉੱਤੇ ਲੰਬਵਤ ਹੁੰਦਾ ਹੈ।',
                'ਉਤਕੇਂਦਰਤਾ (Eccentricity): ਪੈਰਾਬੋਲਾ e = 1, ਅੰਡਾਕਾਰ e < 1, ਹਾਈਪਰਬੋਲਾ e > 1, ਸਮਕੋਣੀ ਹਾਈਪਰਬੋਲਾ e = √2।',
                'ਡਾਇਰੈਕਟਰ ਚੱਕਰ: ਲੰਬਵਤ ਸਪਰਸ਼ ਰੇਖਾਵਾਂ ਦਾ ਪੱਥ: ਅੰਡਾਕਾਰ x² + y² = a² + b²; ਹਾਈਪਰਬੋਲਾ x² + y² = a² − b²।',
                'ਸਕਿਊ ਰੇਖਾਵਾਂ ਵਿਚਕਾਰ ਦੂਰੀ: d = |(a₂ − a₁) · (b₁ × b₂)| / |b₁ × b₂|; ਜੇਕਰ ਇਹ 0 ਹੋਵੇ ਤਾਂ ਰੇਖਾਵਾਂ ਕੱਟਦੀਆਂ ਹਨ।',
                'ਸ਼ੰਕੂ ਸ਼ਰਤ: ਤਿੰਨ ਲੰਬਵਤ ਜਨਰੇਟਰ ਹੋਣ ਲਈ a + b + c = 0 ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।'
            ],
            hi: [
                'लंबवत रेखा युग्म प्रतिबंध: ax² + 2hxy + by² = 0 परस्पर लंबवत हैं यदि a + b = 0 हो।',
                'मूलाक्ष (S₁ − S₂ = 0) दोनों वृत्तों के केंद्रों को मिलाने वाली रेखा पर अनिवार्यतः लंबवत होता है।',
                'उत्केंद्रता मान: परवलय e = 1; दीर्घवृत्त e < 1; अतिपरवलय e > 1; समकोणीय अतिपरवलय e = √2।',
                'नियामक वृत्त: लंबवत स्पर्शियों का बिंदु पथ: दीर्घवृत्त x² + y² = a² + b²; अतिपरवलय x² + y² = a² − b²।',
                'विषमतलीय रेखाओं की न्यूनतम दूरी: d = |(a₂ − a₁) · (b₁ × b₂)| / |b₁ × b₂|; यदि d = 0 तो रेखाएँ प्रतिच्छेदी हैं।',
                'शंकु प्रतिबंध: तीन परस्पर लंबवत जनकों का प्रतिबंध a + b + c = 0 है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Condition for general quadratic to represent pair of lines: abc + 2fgh − af² − bg² − ch² = 0.',
                'Length of latus rectum for ellipse & hyperbola = 2b²/a.',
                'Asymptotes of hyperbola x²/a² − y²/b² = 1 are y = ±(b/a)x.',
                'Direction cosines satisfy l² + m² + n² = 1.',
                'Intersection of a sphere with a plane is always a circle.'
            ],
            pa: [
                'ਰੇਖਾ ਜੁੱਟ ਲਈ ਸ਼ਰਤ: abc + 2fgh − af² − bg² − ch² = 0।',
                'ਅੰਡਾਕਾਰ ਅਤੇ ਹਾਈਪਰਬੋਲਾ ਦੇ ਲੇਟਸ ਰੈਕਟਮ ਦੀ ਲੰਬਾਈ = 2b²/a।',
                'ਹਾਈਪਰਬੋਲਾ ਦੇ ਅਨੰਤਸਪਰਸ਼ੀ (Asymptotes) y = ±(b/a)x ਹੁੰਦੇ ਹਨ।',
                'ਦਿਸ਼ਾ ਕੋਸਾਈਨ ਦਾ ਜੋੜ: l² + m² + n² = 1।',
                'ਗੋਲੇ ਅਤੇ ਸਮਤਲ ਦਾ ਕਾਟ ਹਮੇਸ਼ਾ ਇੱਕ ਚੱਕਰ ਹੁੰਦਾ ਹੈ।'
            ],
            hi: [
                'रेखा युग्म निरूपण कसौटी: abc + 2fgh − af² − bg² − ch² = 0।',
                'दीर्घवृत्त एवं अतिपरवलय की नाभिलंब जीवा की लंबाई = 2b²/a।',
                'अतिपरवलय की अनंतस्पर्शी रेखाएँ y = ±(b/a)x होती हैं।',
                'दिक-कोज्याओं का संबंध: l² + m² + n² = 1।',
                'समतल द्वारा गोले का परिच्छेद सदैव एक वृत्त होता है।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: The eccentricity of a rectangular hyperbola is 1. Correction: The eccentricity of any rectangular hyperbola (equilateral hyperbola) is strictly √2, not 1 (eccentricity 1 is for a parabola).',
                'Misconception: The director circle of a hyperbola x²/a² − y²/b² = 1 always exists as a real circle. Correction: The director circle x² + y² = a² − b² is real only when a > b; when a = b it degenerates into a single point (the origin), and when a < b it is completely imaginary (virtual).',
                'Misconception: Non-parallel lines in 3-dimensional space always intersect. Correction: Non-parallel lines in ℝ³ that do not lie in the same plane are skew lines and never intersect.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਸਮਕੋਣੀ ਹਾਈਪਰਬੋਲਾ ਦੀ ਉਤਕੇਂਦਰਤਾ 1 ਹੁੰਦੀ ਹੈ। ਸੁਧਾਰ: ਸਮਕੋਣੀ ਹਾਈਪਰਬੋਲਾ ਦੀ ਉਤਕੇਂਦਰਤਾ ਹਮੇਸ਼ਾ √2 ਹੁੰਦੀ ਹੈ, 1 ਨਹੀਂ (1 ਸਿਰਫ਼ ਪੈਰਾਬੋਲਾ ਦੀ ਹੁੰਦੀ ਹੈ)।',
                'ਭੁਲੇਖਾ: ਹਾਈਪਰਬੋਲਾ ਦਾ ਡਾਇਰੈਕਟਰ ਚੱਕਰ ਹਮੇਸ਼ਾ ਵਾਸਤਵਿਕ ਹੁੰਦਾ ਹੈ। ਸੁਧਾਰ: ਡਾਇਰੈਕਟਰ ਚੱਕਰ x² + y² = a² − b² ਸਿਰਫ਼ ਤਾਂ ਵਾਸਤਵਿਕ ਹੁੰਦਾ ਹੈ ਜੇ a > b ਹੋਵੇ; a = b ਤੇ ਇਹ ਇੱਕ ਬਿੰਦੂ ਬਣ ਜਾਂਦਾ ਹੈ ਅਤੇ a < b ਤੇ ਕਾਲਪਨਿਕ ਹੁੰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: 3D ਸਪੇਸ ਵਿੱਚ ਗ਼ੈਰ-ਸਮਾਨਾਂਤਰ ਰੇਖਾਵਾਂ ਹਮੇਸ਼ਾ ਆਪਸ ਵਿੱਚ ਕੱਟਦੀਆਂ ਹਨ। ਸੁਧਾਰ: 3D ਵਿੱਚ ਵੱਖ-ਵੱਖ ਸਮਤਲਾਂ ਵਿੱਚ ਸਥਿਤ ਗ਼ੈਰ-ਸਮਾਨਾਂਤਰ ਰੇਖਾਵਾਂ ਨੂੰ ਸਕਿਊ (Skew) ਰੇਖਾਵਾਂ ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਜੋ ਕਦੇ ਨਹੀਂ ਕੱਟਦੀਆਂ।'
            ],
            hi: [
                'भ्रांति: समकोणीय अतिपरवलय की उत्केंद्रता 1 होती है। सुधार: समकोणीय अतिपरवलय की उत्केंद्रता सदैव √2 होती है, 1 नहीं (1 परवलय की होती है)।',
                'भ्रांति: अतिपरवलय का नियामक वृत्त सदैव एक वास्तविक वृत्त होता है। सुधार: नियामक वृत्त x² + y² = a² − b² केवल तब वास्तविक होता है जब a > b हो; a = b पर यह बिंदु वृत्त तथा a < b पर पूर्णतः काल्पनिक होता है।',
                'भ्रांति: 3D समष्टि में परस्पर गैर-समांतर रेखाएँ सदैव प्रतिच्छेद करती हैं। सुधार: 3D में जो रेखाएँ न तो समांतर हों और न ही प्रतिच्छेदी, वे विषमतलीय (Skew) रेखाएँ कहलाती हैं।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'Find the eccentricity, foci, and length of latus rectum for the ellipse 9x² + 16y² = 144.',
                    pa: 'ਅੰਡਾਕਾਰ 9x² + 16y² = 144 ਦੀ ਉਤਕੇਂਦਰਤਾ, ਫੋਕਸ ਅਤੇ ਲੇਟਸ ਰੈਕਟਮ ਦੀ ਲੰਬਾਈ ਪਤਾ ਕਰੋ।',
                    hi: 'दीर्घवृत्त 9x² + 16y² = 144 की उत्केंद्रता, नाभियाँ तथा नाभिलंब की लंबाई ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Divide equation by 144: x²/16 + y²/9 = 1.',
                        'Identify parameters: a² = 16 => a = 4; b² = 9 => b = 3. Since a > b, major axis is along x-axis.',
                        'Calculate eccentricity: e = √(1 - b²/a²) = √(1 - 9/16) = √(7/16) = √7 / 4.',
                        'Foci coordinates: (±ae, 0) = (±4 × (√7/4), 0) = (±√7, 0).',
                        'Length of latus rectum: 2b²/a = 2(9)/4 = 18/4 = 9/2 = 4.5.'
                    ],
                    pa: [
                        '144 ਨਾਲ ਭਾਗ ਕਰੋ: x²/16 + y²/9 = 1।',
                        'ਮੁੱਲ: a² = 16 => a = 4; b² = 9 => b = 3। ਮੁੱਖ ਧੁਰਾ x-ਧੁਰੇ ਦੇ ਨਾਲ ਹੈ।',
                        'ਉਤਕੇਂਦਰਤਾ: e = √(1 - 9/16) = √7 / 4।',
                        'ਫੋਕਸ ਦੇ ਨਿਰਦੇਸ਼ ਅੰਕ: (±ae, 0) = (±√7, 0)।',
                        'ਲੇਟਸ ਰੈਕਟਮ ਦੀ ਲੰਬਾਈ: 2b²/a = 2(9)/4 = 9/2 = 4.5।'
                    ],
                    hi: [
                        '144 से भाग देने पर: x²/16 + y²/9 = 1।',
                        'मान: a² = 16 => a = 4; b² = 9 => b = 3 (दीर्घ अक्ष x-अक्ष पर)।',
                        'उत्केंद्रता: e = √(1 - 9/16) = √7 / 4।',
                        'नाभियों के निर्देशांक: (±ae, 0) = (±√7, 0)।',
                        'नाभिलंब जीवा की लंबाई: 2b²/a = 2(9)/4 = 9/2 = 4.5।'
                    ]
                },
                finalAnswer: {
                    en: 'Eccentricity e = √7/4; Foci are (±√7, 0); Length of latus rectum = 4.5 (9/2).',
                    pa: 'ਉਤਕੇਂਦਰਤਾ e = √7/4; ਫੋਕਸ (±√7, 0); ਲੇਟਸ ਰੈਕਟਮ ਦੀ ਲੰਬਾਈ = 9/2 (4.5)।',
                    hi: 'उत्केंद्रता e = √7/4; नाभियाँ (±√7, 0); नाभिलंब की लंबाई = 9/2 (4.5)।'
                }
            },
            {
                problem: {
                    en: 'Find the shortest distance between the skew lines L₁: (x-1)/2 = (y-2)/3 = (z-3)/4 and L₂: (x-2)/3 = (y-4)/4 = (z-5)/5.',
                    pa: 'ਸਕਿਊ ਰੇਖਾਵਾਂ L₁: (x-1)/2 = (y-2)/3 = (z-3)/4 ਅਤੇ L₂: (x-2)/3 = (y-4)/4 = (z-5)/5 ਵਿਚਕਾਰ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ ਪਤਾ ਕਰੋ।',
                    hi: 'विषमतलीय रेखाओं L₁: (x-1)/2 = (y-2)/3 = (z-3)/4 तथा L₂: (x-2)/3 = (y-4)/4 = (z-5)/5 के मध्य न्यूनतम दूरी ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Line 1 passes through a₁ = (1, 2, 3) with direction vector b₁ = (2, 3, 4).',
                        'Line 2 passes through a₂ = (2, 4, 5) with direction vector b₂ = (3, 4, 5).',
                        'Displacement vector: a₂ - a₁ = (2 - 1, 4 - 2, 5 - 3) = (1, 2, 2).',
                        'Cross product b₁ × b₂: det([[i, j, k], [2, 3, 4], [3, 4, 5]]) = i(15 - 16) - j(10 - 12) + k(8 - 9) = (-1, 2, -1).',
                        'Magnitude |b₁ × b₂| = √((-1)² + 2² + (-1)²) = √(1 + 4 + 1) = √6.',
                        'Dot product (a₂ - a₁) · (b₁ × b₂) = (1)(-1) + (2)(2) + (2)(-1) = -1 + 4 - 2 = 1.',
                        'Shortest distance: d = |(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂| = 1 / √6 = √6 / 6.'
                    ],
                    pa: [
                        'ਬਿੰਦੂ a₁ = (1, 2, 3), ਦਿਸ਼ਾ ਵੈਕਟਰ b₁ = (2, 3, 4)।',
                        'ਬਿੰਦੂ a₂ = (2, 4, 5), ਦਿਸ਼ਾ ਵੈਕਟਰ b₂ = (3, 4, 5)।',
                        'ਵਿਸਥਾਪਨ: a₂ - a₁ = (1, 2, 2)।',
                        'ਕਰਾਸ ਪ੍ਰੋਡਕਟ b₁ × b₂ = (-1, 2, -1)। ਮਾਪ |b₁ × b₂| = √6।',
                        'ਡਾਟ ਪ੍ਰੋਡਕਟ (a₂ - a₁) · (b₁ × b₂) = 1(-1) + 2(2) + 2(-1) = 1।',
                        'ਘੱਟੋ-ਘੱਟ ਦੂਰੀ: d = 1 / √6 = √6 / 6।'
                    ],
                    hi: [
                        'बिंदु a₁ = (1, 2, 3), दिशा सदिश b₁ = (2, 3, 4)।',
                        'बिंदु a₂ = (2, 4, 5), दिशा सदिश b₂ = (3, 4, 5)।',
                        'विस्थापन सदिश: a₂ - a₁ = (1, 2, 2)।',
                        'सदिश गुणन b₁ × b₂ = (-1, 2, -1)। परिमाण |b₁ × b₂| = √6।',
                        'अदिश गुणन (a₂ - a₁) · (b₁ × b₂) = 1(-1) + 2(2) + 2(-1) = 1।',
                        'न्यूनतम दूरी: d = 1 / √6 = √6 / 6।'
                    ]
                },
                finalAnswer: {
                    en: 'Shortest distance d = 1/√6 = √6/6.',
                    pa: 'ਘੱਟੋ-ਘੱਟ ਦੂਰੀ d = 1/√6 = √6/6 ਹੈ।',
                    hi: 'न्यूनतम दूरी d = 1/√6 = √6/6 है।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-cg-1',
                question: {
                    en: 'What is the condition for the pair of lines ax² + 2hxy + by² = 0 to be perpendicular?',
                    pa: 'ਰੇਖਾ ਜੁੱਟ ax² + 2hxy + by² = 0 ਦੇ ਪਰਸਪਰ ਲੰਬਵਤ ਹੋਣ ਦੀ ਕੀ ਸ਼ਰਤ ਹੈ?',
                    hi: 'रेखा युग्म ax² + 2hxy + by² = 0 के परस्पर लंबवत होने का क्या प्रतिबंध है?'
                },
                answer: {
                    en: 'a + b = 0 (coefficient of x² + coefficient of y² = 0).',
                    pa: 'a + b = 0 (x² ਦਾ ਗੁਣਾਂਕ + y² ਦਾ ਗੁਣਾਂਕ = 0)।',
                    hi: 'a + b = 0 (x² का गुणांक + y² का गुणांक = 0)।'
                }
            },
            {
                id: 'fc-cg-2',
                question: {
                    en: 'What is the geometric relationship between the radical axis of two circles and the line joining their centres?',
                    pa: 'ਦੋ ਚੱਕਰਾਂ ਦੇ ਰੈਡੀਕਲ ਧੁਰੇ ਅਤੇ ਉਹਨਾਂ ਦੇ ਕੇਂਦਰਾਂ ਨੂੰ ਜੋੜਨ ਵਾਲੀ ਰੇਖਾ ਵਿਚਕਾਰ ਕੀ ਸਬੰਧ ਹੁੰਦਾ ਹੈ?',
                    hi: 'दो वृत्तों के मूलाक्ष तथा उनके केंद्रों को मिलाने वाली रेखा के मध्य क्या ज्यामितीय संबंध होता है?'
                },
                answer: {
                    en: 'The radical axis is always perpendicular to the line of centres.',
                    pa: 'ਰੈਡੀਕਲ ਧੁਰਾ ਹਮੇਸ਼ਾ ਕੇਂਦਰਾਂ ਨੂੰ ਜੋੜਨ ਵਾਲੀ ਰੇਖਾ ਉੱਤੇ ਲੰਬਵਤ (Perpendicular) ਹੁੰਦਾ ਹੈ।',
                    hi: 'मूलाक्ष सदैव केंद्रों को मिलाने वाली रेखा पर लंबवत होता है।'
                }
            },
            {
                id: 'fc-cg-3',
                question: {
                    en: 'What is the eccentricity of any rectangular (equilateral) hyperbola?',
                    pa: 'ਸਮਕੋਣੀ ਹਾਈਪਰਬੋਲਾ ਦੀ ਉਤਕੇਂਦਰਤਾ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
                    hi: 'किसी समकोणीय अतिपरवलय की उत्केंद्रता कितनी होती है?'
                },
                answer: {
                    en: 'e = √2.',
                    pa: 'e = √2 ਹੁੰਦੀ ਹੈ।',
                    hi: 'e = √2 होती है।'
                }
            },
            {
                id: 'fc-cg-4',
                question: {
                    en: 'What is the equation of the director circle of the ellipse x²/a² + y²/b² = 1?',
                    pa: 'ਅੰਡਾਕਾਰ x²/a² + y²/b² = 1 ਦੇ ਡਾਇਰੈਕਟਰ ਚੱਕਰ ਦੀ ਸਮੀਕਰਨ ਕੀ ਹੈ?',
                    hi: 'दीर्घवृत्त x²/a² + y²/b² = 1 के नियामक वृत्त का समीकरण क्या है?'
                },
                answer: {
                    en: 'x² + y² = a² + b².',
                    pa: 'x² + y² = a² + b² ਹੁੰਦੀ ਹੈ।',
                    hi: 'x² + y² = a² + b² होता है।'
                }
            },
            {
                id: 'fc-cg-5',
                question: {
                    en: 'When are two lines in 3D space coplanar?',
                    pa: '3D ਸਪੇਸ ਵਿੱਚ ਦੋ ਰੇਖਾਵਾਂ ਕਦੋਂ ਸਮ-ਸਮਤਲੀ (Coplanar) ਹੁੰਦੀਆਂ ਹਨ?',
                    hi: 'त्रिविमीय समष्टि में दो रेखाएँ कब समतलीय होती हैं?'
                },
                answer: {
                    en: 'When (a₂ − a₁) · (b₁ × b₂) = 0 (shortest distance between them is zero).',
                    pa: 'ਜਦੋਂ (a₂ − a₁) · (b₁ × b₂) = 0 ਹੋਵੇ (ਉਹਨਾਂ ਵਿਚਕਾਰ ਘੱਟੋ-ਘੱਟ ਦੂਰੀ ਸਿਫ਼ਰ ਹੋਵੇ)।',
                    hi: 'जब (a₂ − a₁) · (b₁ × b₂) = 0 हो (उनके मध्य की न्यूनतम दूरी शून्य हो)।'
                }
            }
        ]
    },

    // =========================================================================
    // 6. PROBABILITY, STATISTICS & NUMERICAL METHODS
    // =========================================================================
    {
        topicId: 'math-prob-stats-numerical',
        editorialRecord: {
            lastUpdatedDate: '2026-10-14',
            verifiedSyllabusDenominator: 150,
            editorialNote: 'Master Cadre Mathematics: Covers Probability Axioms, Bayes’ Theorem, Random Variables, Expectation & Variance, Distributions (Binomial, Poisson, Normal), Correlation & Regression (byx · bxy = r²), Measures of Dispersion, Bisection Method, Newton-Raphson Method, and Simpson’s 1/3 and 3/8 Rules.'
        },
        bookRefs: [
            {
                title: 'Fundamentals of Mathematical Statistics',
                author: 'S.C. Gupta & V.K. Kapoor',
                chapter: 'Chapters 3, 4, 7, 8, 9 & 10 (Probability, Random Variables, Binomial, Poisson, Normal, Correlation & Regression)',
                relevance: 'Standard university textbook for mathematical statistics and probability distributions.'
            },
            {
                title: 'Introductory Methods of Numerical Analysis',
                author: 'S.S. Sastry',
                chapter: 'Chapters 2 & 5 (Nonlinear Equations, Newton-Raphson, Numerical Integration & Simpson Rules)',
                relevance: 'Benchmark reference for order of convergence and numerical quadrature formulas.'
            }
        ],
        summary: {
            en: `### 1. Probability Axioms, Conditional Probability & Bayes' Theorem
- **Axiomatic Definition (Kolmogorov):**
  1. $P(A) \\ge 0$ for every event $A$.
  2. $P(S) = 1$ for sample space $S$.
  3. For mutually exclusive events: $P(A_1 \\cup A_2 \\cup \\dots) = \\sum P(A_i)$.
- **Addition Theorem:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.
- **Conditional Probability & Independence:**
  - $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (where $P(B) > 0$).
  - Events $A$ and $B$ are independent $\\iff P(A \\cap B) = P(A) P(B)$.
- **Bayes' Theorem:** If $E_1, E_2, \\dots, E_k$ form a partition of $S$ and $A$ is an event:
  $$P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum_{j=1}^k P(E_j) P(A | E_j)}$$

### 2. Random Variables, Expectation & Variance
- **Expectation $E[X]$:** Discrete: $\\sum x_i P(X = x_i)$; Continuous: $\\int_{-\\infty}^\\infty x f(x) dx$.
  - Linearity: $E[aX + b] = a E[X] + b$; $E[X + Y] = E[X] + E[Y]$ (holds always).
- **Variance $\\text{Var}(X)$:** $\\text{Var}(X) = E[X^2] - (E[X])^2$.
  - Properties: $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$; $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\text{Cov}(X, Y)$.

### 3. Standard Theoretical Probability Distributions
| Distribution | PMF / PDF | Mean ($\\mu$) | Variance ($\\sigma^2$) | Key Properties |
|---|---|---|---|---|
| **Binomial** $B(n, p)$ | $\\binom{n}{r} p^r q^{n-r}$ ($r=0, \\dots, n$) | $np$ | $npq$ | **Variance is strictly less than mean** ($npq < np$). Symmetric if $p = 0.5$. |
| **Poisson** $P(\\lambda)$ | $\\frac{e^{-\\lambda} \\lambda^x}{x!}$ ($x=0, 1, 2, \\dots$) | $\\lambda$ | $\\lambda$ | **Mean equals variance** ($\\mu = \\sigma^2 = \\lambda$). Limiting case of Binomial as $n \\to \\infty, p \\to 0, np = \\lambda$. |
| **Normal** $N(\\mu, \\sigma^2)$ | $\\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ | $\\mu$ | $\\sigma^2$ | Bell-shaped, symmetric about $\\mu$. Mean = Median = Mode $= \\mu$. Points of inflection at $\\mu \\pm \\sigma$. Skewness $\\beta_1 = 0$, Kurtosis $\\beta_2 = 3$ (mesokurtic). $68.27\\%$ within $\\pm 1\\sigma$, $95.44\\%$ within $\\pm 2\\sigma$, $99.73\\%$ within $\\pm 3\\sigma$. |

### 4. Correlation & Linear Regression
- **Karl Pearson's Correlation Coefficient ($r$):**
  $$r = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum (x - \\bar{x})^2} \\sqrt{\\sum (y - \\bar{y})^2}}, \\quad -1 \\le r \\le 1$$
  - $r$ is independent of change of origin and scale.
- **Regression Lines & Coefficients:**
  - Line of $Y$ on $X$: $Y - \\bar{Y} = b_{yx}(X - \\bar{X})$ where $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x}$.
  - Line of $X$ on $Y$: $X - \\bar{X} = b_{xy}(Y - \\bar{Y})$ where $b_{xy} = r \\frac{\\sigma_x}{\\sigma_y}$.
  - **Fundamental Relations:**
    - $b_{yx} \\cdot b_{xy} = r^2 \\implies r = \\pm \\sqrt{b_{yx} \\cdot b_{xy}}$ (sign of $r$ matches signs of both $b_{yx}$ and $b_{xy}$).
    - If one regression coefficient is $> 1$, the other must be $< 1$.
    - Arithmetic Mean of regression coefficients $\\ge |r|$: $\\frac{b_{yx} + b_{xy}}{2} \\ge |r|$.
    - The two regression lines intersect at the point of means $(\\bar{X}, \\bar{Y})$.

### 5. Numerical Methods: Root Finding & Integration
- **Bisection Method:** Based on Intermediate Value Theorem. Order of convergence is **1 (Linear)**, rate $= 0.5$. Always converges, but slow.
- **Newton-Raphson Method:**
  $$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
  - Order of convergence is **2 (Quadratic)**: error satisfies $e_{n+1} \\approx \\frac{f''(r)}{2f'(r)} e_n^2$.
  - Fails if $f'(x_n) = 0$ (tangent horizontal) or near an inflection point.
- **Simpson's 1/3 Rule:**
  $$\\int_a^b f(x) dx \\approx \\frac{h}{3} \\left[ (y_0 + y_n) + 4(y_1 + y_3 + \\dots) + 2(y_2 + y_4 + \\dots) \\right]$$
  - Requires number of intervals $n$ to be **EVEN** (multiples of 2).
  - Exact for polynomials up to **degree 3 (cubic)**, truncation error $\\propto h^4$.
- **Simpson's 3/8 Rule:**
  $$\\int_a^b f(x) dx \\approx \\frac{3h}{8} \\left[ (y_0 + y_n) + 3(y_1 + y_2 + y_4 + y_5 + \\dots) + 2(y_3 + y_6 + \\dots) \\right]$$
  - Requires number of intervals $n$ to be a **MULTIPLE OF 3**.
  - Exact for polynomials up to **degree 3**, truncation error $\\propto h^4$.`,
            pa: `### 1. ਸੰਭਾਵਨਾ ਦੇ ਨਿਯਮ, ਸ਼ਰਤੀਆ ਸੰਭਾਵਨਾ ਅਤੇ ਬੇਅਸ ਪ੍ਰਮੇਯ (Bayes' Theorem)
- **ਕੋਲਮੋਗੋਰੋਵ ਨਿਯਮ:** $P(A) \\ge 0$, $P(S) = 1$, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$।
- **ਸ਼ਰਤੀਆ ਸੰਭਾਵਨਾ:** $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$।
- **ਸੁਤੰਤਰ ਘਟਨਾਵਾਂ:** $P(A \\cap B) = P(A) P(B)$।
- **ਬੇਅਸ ਪ੍ਰਮੇਯ:** $P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum P(E_j) P(A | E_j)}$।

### 2. ਰੈਂਡਮ ਵੇਰੀਏਬਲ, ਉਮੀਦ (Expectation) ਅਤੇ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ (Variance)
- $E[aX + b] = a E[X] + b$।
- $\\text{Var}(X) = E[X^2] - (E[X])^2$। $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$।

### 3. ਪ੍ਰਮੁੱਖ ਸੰਭਾਵਨਾ ਵੰਡਾਂ
- **ਦੋਪਦੀ ਵੰਡ (Binomial $B(n, p)$):** ਮੱਧਮਾਨ $= np$, ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ $= npq$। **ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ ਹਮੇਸ਼ਾ ਮੱਧਮਾਨ ਤੋਂ ਘੱਟ ਹੁੰਦੀ ਹੈ** ($npq < np$)।
- **ਪੋਆਇਸਨ ਵੰਡ (Poisson $P(\\lambda)$):** ਮੱਧਮਾਨ $= \\lambda$, ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ $= \\lambda$। **ਮੱਧਮਾਨ ਅਤੇ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ ਆਪਸ ਵਿੱਚ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ**।
- **ਪ੍ਰਸਾਮਾਨਯ ਵੰਡ (Normal Distribution):** ਘੰਟੀ ਆਕਾਰ, ਸਮਮਿਤ ਵੰਡ। ਮੱਧਮਾਨ = ਮੱਧਿਕਾ = ਬਹੁਲਕ $= \\mu$।

### 4. ਕੋਰੀਲੇਸ਼ਨ ਅਤੇ ਰਿਗਰੈਸ਼ਨ
- ਕਾਰਲ ਪੀਅਰਸਨ ਗੁਣਾਂਕ: $-1 \\le r \\le 1$।
- ਰਿਗਰੈਸ਼ਨ ਗੁਣਾਂਕਾਂ ਦਾ ਗੁਣਨਫਲ: $b_{yx} \\cdot b_{xy} = r^2$।
- ਜੇਕਰ ਇੱਕ ਰਿਗਰੈਸ਼ਨ ਗੁਣਾਂਕ $> 1$ ਹੈ, ਤਾਂ ਦੂਜਾ ਲਾਜ਼ਮੀ ਤੌਰ ਤੇ $< 1$ ਹੋਵੇਗਾ।
- ਰਿਗਰੈਸ਼ਨ ਰੇਖਾਵਾਂ ਮੱਧਮਾਨ ਬਿੰਦੂ $(\\bar{X}, \\bar{Y})$ ਉੱਤੇ ਆਪਸ ਵਿੱਚ ਕੱਟਦੀਆਂ ਹਨ।

### 5. ਸੰਖਿਆਤਮਕ ਵਿਧੀਆਂ (Numerical Methods)
- **ਬਾਈਸੈਕਸ਼ਨ ਵਿਧੀ (Bisection Method):** ਰੇਖੀ ਅਭਿਸਾਰਿਤਾ (Order 1)।
- **ਨਿਊਟਨ-ਰੈਫਸਨ ਵਿਧੀ (Newton-Raphson):** ਦੋ-ਘਾਤੀ ਅਭਿਸਾਰਿਤਾ (Quadratic, Order 2):
  $$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
- **ਸਿੰਪਸਨ ਦਾ 1/3 ਨਿਯਮ:** ਅੰਤਰਾਲਾਂ ਦੀ ਗਿਣਤੀ $n$ ਦਾ **ਜਿਸਤ (Even)** ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ; 3 ਡਿਗਰੀ ਤੱਕ ਦੇ ਬਹੁਪਦਾਂ ਲਈ ਸਹੀ ਨਤੀਜਾ ਦਿੰਦਾ ਹੈ।
- **ਸਿੰਪਸਨ ਦਾ 3/8 ਨਿਯਮ:** ਅੰਤਰਾਲਾਂ ਦੀ ਗਿਣਤੀ $n$ ਦਾ **3 ਦਾ ਗੁਣਜ** ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।`,
            hi: `### 1. प्रायिकता अभिगृहीत, सप्रतिबंध प्रायिकता एवं बेयस प्रमेय
- **कोलमोगोरोव अभिगृहीत:** $P(A) \\ge 0$, $P(S) = 1$, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$।
- **सप्रतिबंध प्रायिकता:** $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$।
- **स्वतंत्र घटनाएं:** $P(A \\cap B) = P(A) P(B)$।
- **बेयस प्रमेय:** $P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum P(E_j) P(A | E_j)}$।

### 2. यादृच्छिक चर, प्रत्याशा (Expectation) एवं प्रसरण (Variance)
- $E[aX + b] = a E[X] + b$।
- $\\text{Var}(X) = E[X^2] - (E[X])^2$। $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$।

### 3. प्रमुख सैद्धांतिक प्रायिकता वितरण
- **द्विपद वितरण (Binomial):** माध्य $= np$, प्रसरण $= npq$। **प्रसरण सदैव माध्य से कम होता है** ($npq < np$)।
- **प्वासों वितरण (Poisson):** माध्य $= \\lambda$, प्रसरण $= \\lambda$। **माध्य एवं प्रसरण परस्पर समान होते हैं**।
- **प्रसामान्य वितरण (Normal):** घंटाकार, सममित वक्र। माध्य = माध्यिका = बहुलक $= \\mu$।

### 4. सहसंबंध एवं समाश्रयण (Regression)
- कार्ल पियर्सन सहसंबंध गुणांक: $-1 \\le r \\le 1$।
- समाश्रयण गुणांक संबंध: $b_{yx} \\cdot b_{xy} = r^2$।
- यदि एक समाश्रयण गुणांक $> 1$ है तो दूसरा अवश्य ही $< 1$ होगा।
- दोनों समाश्रयण रेखाएँ माध्य बिंदु $(\\bar{X}, \\bar{Y})$ पर प्रतिच्छेद करती हैं।

### 5. संख्यात्मक विधियाँ (Numerical Methods)
- **समद्विभाजन (Bisection) विधि:** रैखिक अभिसरण (कोटि 1)।
- **न्यूटन-रैफसन विधि:** द्विघाती अभिसरण (Quadratic, कोटि 2):
  $$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$
- **सिम्पसन 1/3 नियम:** उप-अंतरालों की संख्या $n$ का **सम (Even)** होना अनिवार्य है; घात 3 तक के बहुपदों हेतु यथार्थ मान देता है।
- **सिम्पसन 3/8 नियम:** उप-अंतरालों की संख्या $n$ का **3 का गुणज** होना अनिवार्य है।`
        },
        keyNotes: {
            en: [
                'Binomial vs Poisson variance: Binomial variance (npq) is strictly less than mean (np); Poisson variance equals mean (λ).',
                'Normal distribution symmetry: Symmetrical bell curve with Mean = Median = Mode = μ; inflection points at μ ± σ.',
                'Regression coefficient product: b_yx · b_xy = r²; both coefficients and r must share the exact same algebraic sign.',
                'Newton-Raphson convergence: Quadratic order of convergence (order 2), doubling correct significant figures each iteration.',
                'Simpson’s 1/3 rule constraint: Requires the number of subintervals n to be even; integrates cubic polynomials exactly.',
                'Simpson’s 3/8 rule constraint: Requires the number of subintervals n to be a multiple of 3.'
            ],
            pa: [
                'ਵੰਡਾਂ ਦਾ ਅੰਤਰ: ਦੋਪਦੀ ਵੰਡ ਵਿੱਚ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ ਮੱਧਮਾਨ ਤੋਂ ਘੱਟ ਹੁੰਦੀ ਹੈ; ਪੋਆਇਸਨ ਵੰਡ ਵਿੱਚ ਮੱਧਮਾਨ ਅਤੇ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ।',
                'ਪ੍ਰਸਾਮਾਨਯ ਵੰਡ: ਸਮਮਿਤ ਘੰਟੀ ਆਕਾਰ ਵਕਰ, ਮੱਧਮਾਨ = ਮੱਧਿਕਾ = ਬਹੁਲਕ = μ।',
                'ਰਿਗਰੈਸ਼ਨ ਗੁਣਾਂਕ ਸੰਬੰਧ: b_yx · b_xy = r²; ਦੋਵੇਂ ਗੁਣਾਂਕਾਂ ਅਤੇ r ਦਾ ਚਿੰਨ੍ਹ ਹਮੇਸ਼ਾ ਇੱਕੋ ਹੁੰਦਾ ਹੈ।',
                'ਨਿਊਟਨ-ਰੈਫਸਨ ਕਨਵਰਜੈਂਸ: ਦੋ-ਘਾਤੀ ਅਭਿਸਾਰਿਤਾ (Order 2), ਹਰੇਕ ਚੱਕਰ ਵਿੱਚ ਸ਼ੁੱਧ ਅੰਕ ਦੁੱਗਣੇ ਹੁੰਦੇ ਹਨ।',
                'ਸਿੰਪਸਨ 1/3 ਨਿਯਮ: ਅੰਤਰਾਲਾਂ ਦੀ ਗਿਣਤੀ n ਦਾ ਜਿਸਤ (Even) ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
                'ਸਿੰਪਸਨ 3/8 ਨਿਯਮ: ਅੰਤਰਾਲਾਂ ਦੀ ਗਿਣਤੀ n ਦਾ 3 ਦਾ ਗੁਣਜ ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।'
            ],
            hi: [
                'वितरण तुलना: द्विपद वितरण में प्रसरण माध्य से कम होता है; प्वासों वितरण में माध्य और प्रसरण समान होते हैं।',
                'प्रसामान्य वितरण: सममित घंटाकार वक्र, माध्य = माध्यिका = बहुलक = μ।',
                'समाश्रयण गुणांक संबंध: b_yx · b_xy = r²; दोनों गुणांकों तथा r का बीजगणितीय चिह्न सदैव समान होता है।',
                'न्यूटन-रैफसन अभिसरण: द्विघाती अभिसरण (कोटि 2), प्रत्येक चरण में शुद्ध अंक दोगुने होते हैं।',
                'सिम्पसन 1/3 नियम: उप-अंतरालों की संख्या n का सम होना अनिवार्य है।',
                'सिम्पसन 3/8 नियम: उप-अंतरालों की संख्या n का 3 का गुणज होना अनिवार्य है।'
            ]
        },
        quickRevisionSheet: {
            en: [
                'Bayes Theorem calculates posterior probability P(E_i | A) given prior probabilities.',
                'Standard Normal Variate Z = (X − μ) / σ has mean 0 and variance 1.',
                'If one regression coefficient exceeds 1, the other must be less than 1.',
                'Bisection method order of convergence is 1 (linear); Newton-Raphson is 2 (quadratic).',
                'Simpson’s rules are exact for polynomials up to degree 3 (cubic).'
            ],
            pa: [
                'ਬੇਅਸ ਪ੍ਰਮੇਯ ਪੂਰਵ ਜਾਣਕਾਰੀ ਦੇ ਆਧਾਰ ਤੇ ਉੱਤਰ-ਸੰਭਾਵਨਾ ਦੀ ਗਣਨਾ ਕਰਦਾ ਹੈ।',
                'ਮਿਆਰੀ ਪ੍ਰਸਾਮਾਨਯ ਚਰ Z = (X − μ) / σ ਦਾ ਮੱਧਮਾਨ 0 ਅਤੇ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ 1 ਹੁੰਦੀ ਹੈ।',
                'ਜੇਕਰ ਇੱਕ ਰਿਗਰੈਸ਼ਨ ਗੁਣਾਂਕ 1 ਤੋਂ ਵੱਡਾ ਹੈ, ਤਾਂ ਦੂਜਾ 1 ਤੋਂ ਛੋਟਾ ਹੋਵੇਗਾ।',
                'ਬਾਈਸੈਕਸ਼ਨ ਵਿਧੀ ਦਾ ਆਰਡਰ 1 ਅਤੇ ਨਿਊਟਨ-ਰੈਫਸਨ ਦਾ ਆਰਡਰ 2 ਹੁੰਦਾ ਹੈ।',
                'ਸਿੰਪਸਨ ਨਿਯਮ 3 ਘਾਤ ਤੱਕ ਦੇ ਬਹੁਪਦਾਂ ਲਈ ਸਹੀ ਨਤੀਜਾ ਦਿੰਦੇ ਹਨ।'
            ],
            hi: [
                'बेयस प्रमेय पूर्व प्रायिकताओं के आधार पर पश्च प्रायिकता की गणना करता है।',
                'मानक प्रसामान्य चर Z = (X − μ) / σ का माध्य 0 तथा प्रसरण 1 होता है।',
                'यदि एक समाश्रयण गुणांक 1 से बड़ा हो तो दूसरा अनिवार्यतः 1 से छोटा होगा।',
                'समद्विभाजन विधि की अभिसरण कोटि 1 तथा न्यूटन-रैफसन की 2 होती है।',
                'सिम्पसन नियम 3 घात तक के बहुपदों हेतु यथार्थ मान देते हैं।'
            ]
        },
        commonMisconceptions: {
            en: [
                'Misconception: In a Binomial distribution, the variance can be greater than or equal to the mean. Correction: For a Binomial distribution B(n, p), variance = npq = np(1 - p) < np = mean, because 0 < q < 1; variance is strictly less than the mean.',
                'Misconception: Simpson’s 1/3 rule can be applied with any number of intervals as long as they are equal. Correction: Simpson’s 1/3 rule strictly requires an EVEN number of intervals (n = 2, 4, 6, ...), which corresponds to an ODD number of ordinates.',
                'Misconception: Newton-Raphson method always converges to the root regardless of the starting point. Correction: If f′(x) = 0 near an iteration or if the initial guess x₀ is poorly chosen, the method can oscillate, diverge, or divide by zero.'
            ],
            pa: [
                'ਭੁਲੇਖਾ: ਦੋਪਦੀ ਵੰਡ ਵਿੱਚ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ ਮੱਧਮਾਨ ਤੋਂ ਵੱਡੀ ਜਾਂ ਬਰਾਬਰ ਹੋ ਸਕਦੀ ਹੈ। ਸੁਧਾਰ: ਦੋਪਦੀ ਵੰਡ ਵਿੱਚ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ npq ਹਮੇਸ਼ਾ ਮੱਧਮਾਨ np ਤੋਂ ਸਖ਼ਤੀ ਨਾਲ ਘੱਟ ਹੁੰਦੀ ਹੈ ਕਿਉਂਕਿ q < 1 ਹੁੰਦਾ ਹੈ।',
                'ਭੁਲੇਖਾ: ਸਿੰਪਸਨ ਦਾ 1/3 ਨਿਯਮ ਕਿਸੇ ਵੀ ਗਿਣਤੀ ਦੇ ਅੰਤਰਾਲਾਂ ਲਈ ਲਾਗੂ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ। ਸੁਧਾਰ: ਸਿੰਪਸਨ 1/3 ਨਿਯਮ ਲਈ ਅੰਤਰਾਲਾਂ ਦੀ ਗਿਣਤੀ n ਦਾ ਜਿਸਤ (Even: 2, 4, 6...) ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
                'ਭੁਲੇਖਾ: ਨਿਊਟਨ-ਰੈਫਸਨ ਵਿਧੀ ਹਰ ਸ਼ੁਰੂਆਤੀ ਬਿੰਦੂ ਤੋਂ ਹਮੇਸ਼ਾ ਕਨਵਰਜ ਕਰਦੀ ਹੈ। ਸੁਧਾਰ: ਜੇਕਰ f′(x) = 0 ਹੋ ਜਾਵੇ ਜਾਂ ਸ਼ੁਰੂਆਤੀ ਅੰਦਾਜ਼ਾ ਸਹੀ ਨਾ ਹੋਵੇ, ਤਾਂ ਵਿਧੀ ਅਸਫਲ ਜਾਂ ਅਪਸਾਰੀ ਹੋ ਸਕਦੀ ਹੈ।'
            ],
            hi: [
                'भ्रांति: द्विपद वितरण में प्रसरण माध्य से बड़ा अथवा बराबर हो सकता है। सुधार: द्विपद वितरण में प्रसरण npq सदैव माध्य np से कड़ाई से कम होता है क्योंकि q < 1 होता है।',
                'भ्रांति: सिम्पसन 1/3 नियम किसी भी संख्या में उप-अंतराल होने पर प्रयुक्त किया जा सकता है। सुधार: सिम्पसन 1/3 नियम हेतु उप-अंतरालों की संख्या n का सम (2, 4, 6, ...) होना अनिवार्य है।',
                'भ्रांति: न्यूटन-रैफसन विधि प्रत्येक प्रारंभिक मान हेतु सदैव अभिसरित होती है। सुधार: यदि f′(x) = 0 हो जाए अथवा प्रारंभिक मान त्रुटिपूर्ण चुना गया हो, तो विधि दोलन कर सकती है अथवा अपसारी हो सकती है।'
            ]
        },
        workedExamples: [
            {
                problem: {
                    en: 'In a Poisson distribution, P(X = 1) = 2 P(X = 2). Find the parameter λ, the mean, variance, and P(X = 0).',
                    pa: 'ਇੱਕ ਪੋਆਇਸਨ ਵੰਡ ਵਿੱਚ, P(X = 1) = 2 P(X = 2) ਹੈ। ਪੈਰਾਮੀਟਰ λ, ਮੱਧਮਾਨ, ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ ਅਤੇ P(X = 0) ਪਤਾ ਕਰੋ।',
                    hi: 'एक प्वासों वितरण में P(X = 1) = 2 P(X = 2) है। प्राचल λ, माध्य, प्रसरण तथा P(X = 0) ज्ञात कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Poisson probability formula: P(X = k) = (e^{-λ} λ^k) / k!.',
                        'Substitute k = 1 and k = 2: P(X = 1) = e^{-λ} λ and P(X = 2) = (e^{-λ} λ²) / 2.',
                        'Given P(X = 1) = 2 P(X = 2): e^{-λ} λ = 2 × [ (e^{-λ} λ²) / 2 ] = e^{-λ} λ².',
                        'Since e^{-λ} ≠ 0 and λ > 0, divide both sides by e^{-λ} λ: 1 = λ => λ = 1.',
                        'For Poisson distribution: Mean = λ = 1 and Variance = λ = 1.',
                        'Calculate P(X = 0): P(X = 0) = (e^{-1} × 1⁰) / 0! = e^{-1} = 1/e ≈ 0.3679.'
                    ],
                    pa: [
                        'ਪੋਆਇਸਨ ਸੂਤਰ: P(X = k) = (e^{-λ} λ^k) / k!।',
                        'ਮੁੱਲ ਰੱਖੋ: P(X = 1) = e^{-λ} λ ਅਤੇ P(X = 2) = (e^{-λ} λ²) / 2।',
                        'ਦਿੱਤਾ ਗਿਆ ਸੰਬੰਧ: e^{-λ} λ = 2 × [(e^{-λ} λ²) / 2] => e^{-λ} λ = e^{-λ} λ²।',
                        'ਹੱਲ ਕਰਨ ਤੇ: λ = 1।',
                        'ਪੋਆਇਸਨ ਵੰਡ ਵਿੱਚ: ਮੱਧਮਾਨ = λ = 1 ਅਤੇ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ = λ = 1।',
                        'P(X = 0) = e^{-1} = 1/e ≈ 0.3679।'
                    ],
                    hi: [
                        'प्वासों सूत्र: P(X = k) = (e^{-λ} λ^k) / k!।',
                        'मान रखने पर: P(X = 1) = e^{-λ} λ तथा P(X = 2) = (e^{-λ} λ²) / 2।',
                        'दिया गया प्रतिबंध: e^{-λ} λ = 2 × [(e^{-λ} λ²) / 2] => e^{-λ} λ = e^{-λ} λ²।',
                        'हल करने पर: λ = 1।',
                        'प्वासों वितरण हेतु: माध्य = λ = 1 तथा प्रसरण = λ = 1।',
                        'P(X = 0) = e^{-1} = 1/e ≈ 0.3679।'
                    ]
                },
                finalAnswer: {
                    en: 'Parameter λ = 1; Mean = 1; Variance = 1; P(X = 0) = 1/e ≈ 0.3679.',
                    pa: 'ਪੈਰਾਮੀਟਰ λ = 1; ਮੱਧਮਾਨ = 1; ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ = 1; P(X = 0) = 1/e ≈ 0.3679।',
                    hi: 'प्राचल λ = 1; माध्य = 1; प्रसरण = 1; P(X = 0) = 1/e ≈ 0.3679।'
                }
            },
            {
                problem: {
                    en: 'Perform two iterations of the Newton-Raphson method to find an approximate root of f(x) = x³ − 2x − 5 = 0 starting with initial guess x₀ = 2.',
                    pa: 'ਸ਼ੁਰੂਆਤੀ ਅੰਦਾਜ਼ੇ x₀ = 2 ਤੋਂ ਸ਼ੁਰੂ ਕਰਕੇ f(x) = x³ − 2x − 5 = 0 ਦਾ ਲਗਭਗ ਮੂਲ ਪਤਾ ਕਰਨ ਲਈ ਨਿਊਟਨ-ਰੈਫਸਨ ਵਿਧੀ ਦੇ ਦੋ ਚੱਕਰ (Iterations) ਕਰੋ।',
                    hi: 'प्रारंभिक मान x₀ = 2 से प्रारंभ करके f(x) = x³ − 2x − 5 = 0 का सन्निकट मूल ज्ञात करने हेतु न्यूटन-रैफसन विधि के दो पुनरावृत्ति चरण निष्पादित कीजिए।'
                },
                solutionSteps: {
                    en: [
                        'Function: f(x) = x³ - 2x - 5 => Derivative: f′(x) = 3x² - 2.',
                        'Iteration 1 (n = 0): x₀ = 2 => f(2) = 2³ - 2(2) - 5 = 8 - 4 - 5 = -1; f′(2) = 3(4) - 2 = 10.',
                        'Formula: x₁ = x₀ - f(x₀)/f′(x₀) = 2 - (-1)/10 = 2 + 0.1 = 2.1.',
                        'Iteration 2 (n = 1): x₁ = 2.1 => f(2.1) = (2.1)³ - 2(2.1) - 5 = 9.261 - 4.2 - 5 = 0.061.',
                        'Derivative at 2.1: f′(2.1) = 3(2.1)² - 2 = 3(4.41) - 2 = 13.23 - 2 = 11.23.',
                        'Formula: x₂ = 2.1 - 0.061 / 11.23 ≈ 2.1 - 0.005432 = 2.094568 ≈ 2.0946.'
                    ],
                    pa: [
                        'ਫਲਨ: f(x) = x³ - 2x - 5 => ਡੈਰੀਵੇਟਿਵ: f′(x) = 3x² - 2।',
                        'ਪਹਿਲਾ ਚੱਕਰ: x₀ = 2 => f(2) = 8 - 4 - 5 = -1; f′(2) = 12 - 2 = 10।',
                        'x₁ = 2 - (-1)/10 = 2.1।',
                        'ਦੂਜਾ ਚੱਕਰ: x₁ = 2.1 => f(2.1) = 9.261 - 4.2 - 5 = 0.061; f′(2.1) = 13.23 - 2 = 11.23।',
                        'x₂ = 2.1 - 0.061 / 11.23 ≈ 2.0946।'
                    ],
                    hi: [
                        'फलन: f(x) = x³ - 2x - 5 => अवकलज: f′(x) = 3x² - 2।',
                        'प्रथम चरण: x₀ = 2 => f(2) = 8 - 4 - 5 = -1; f′(2) = 12 - 2 = 10।',
                        'x₁ = 2 - (-1)/10 = 2.1।',
                        'द्वितीय चरण: x₁ = 2.1 => f(2.1) = 0.061; f′(2.1) = 11.23।',
                        'x₂ = 2.1 - 0.061 / 11.23 ≈ 2.0946।'
                    ]
                },
                finalAnswer: {
                    en: 'After two iterations: x₁ = 2.1 and x₂ ≈ 2.0946.',
                    pa: 'ਦੋ ਚੱਕਰਾਂ ਬਾਅਦ: x₁ = 2.1 ਅਤੇ x₂ ≈ 2.0946।',
                    hi: 'दो चरणों के पश्चात: x₁ = 2.1 तथा x₂ ≈ 2.0946।'
                }
            }
        ],
        flashcards: [
            {
                id: 'fc-ps-1',
                question: {
                    en: 'How do the mean and variance compare in Binomial and Poisson distributions?',
                    pa: 'ਦੋਪਦੀ ਅਤੇ ਪੋਆਇਸਨ ਵੰਡਾਂ ਵਿੱਚ ਮੱਧਮਾਨ ਅਤੇ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ ਦੀ ਤੁਲਨਾ ਕਿਵੇਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?',
                    hi: 'द्विपद तथा प्वासों वितरणों में माध्य एवं प्रसरण की तुलना कैसे की जाती है?'
                },
                answer: {
                    en: 'In Binomial, variance (npq) is strictly less than mean (np); In Poisson, variance equals mean (λ).',
                    pa: 'ਦੋਪਦੀ ਵਿੱਚ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ (npq) ਮੱਧਮਾਨ (np) ਤੋਂ ਘੱਟ ਹੁੰਦੀ ਹੈ; ਪੋਆਇਸਨ ਵਿੱਚ ਦੋਵੇਂ ਬਰਾਬਰ (λ) ਹੁੰਦੇ ਹਨ।',
                    hi: 'द्विपद में प्रसरण (npq) माध्य (np) से कम होता है; प्वासों में प्रसरण व माध्य परस्पर समान (λ) होते हैं।'
                }
            },
            {
                id: 'fc-ps-2',
                question: {
                    en: 'What is the relationship between the two regression coefficients b_yx and b_xy and correlation r?',
                    pa: 'ਦੋਵੇਂ ਰਿਗਰੈਸ਼ਨ ਗੁਣਾਂਕਾਂ b_yx, b_xy ਅਤੇ ਕੋਰੀਲੇਸ਼ਨ r ਵਿਚਕਾਰ ਕੀ ਸੰਬੰਧ ਹੈ?',
                    hi: 'दोनों समाश्रयण गुणांकों b_yx, b_xy तथा सहसंबंध r के मध्य क्या संबंध है?'
                },
                answer: {
                    en: 'b_yx · b_xy = r², and both regression coefficients share the same sign as r.',
                    pa: 'b_yx · b_xy = r², ਅਤੇ ਦੋਵਾਂ ਰਿਗਰੈਸ਼ਨ ਗੁਣਾਂਕਾਂ ਦਾ ਚਿੰਨ੍ਹ r ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ।',
                    hi: 'b_yx · b_xy = r², तथा दोनों समाश्रयण गुणांकों का चिह्न r के समान होता है।'
                }
            },
            {
                id: 'fc-ps-3',
                question: {
                    en: 'What is the order of convergence of the Newton-Raphson method?',
                    pa: 'ਨਿਊਟਨ-ਰੈਫਸਨ ਵਿਧੀ ਦੀ ਅਭਿਸਾਰਿਤਾ ਦਾ ਆਰਡਰ (Order of Convergence) ਕੀ ਹੈ?',
                    hi: 'न्यूटन-रैफसन विधि के अभिसरण की कोटि क्या है?'
                },
                answer: {
                    en: 'Order 2 (Quadratic convergence), meaning error in next step is proportional to square of current error.',
                    pa: 'ਆਰਡਰ 2 (ਦੋ-ਘਾਤੀ ਅਭਿਸਾਰਿਤਾ), ਅਗਲੇ ਕਦਮ ਦੀ ਗ਼ਲਤੀ ਮੌਜੂਦਾ ਗ਼ਲਤੀ ਦੇ ਵਰਗ ਦੇ ਅਨੁਪਾਤੀ ਹੁੰਦੀ ਹੈ।',
                    hi: 'कोटि 2 (द्विघाती अभिसरण), अर्थात् अगले चरण की त्रुटि वर्तमान त्रुटि के वर्ग के समानुपाती होती है।'
                }
            },
            {
                id: 'fc-ps-4',
                question: {
                    en: 'What condition on the number of subintervals n must be satisfied to use Simpson’s 1/3 rule?',
                    pa: 'ਸਿੰਪਸਨ 1/3 ਨਿਯਮ ਦੀ ਵਰਤੋਂ ਲਈ ਅੰਤਰਾਲਾਂ ਦੀ ਗਿਣਤੀ n ਲਈ ਕੀ ਸ਼ਰਤ ਹੈ?',
                    hi: 'सिम्पसन 1/3 नियम के उपयोग हेतु उप-अंतरालों की संख्या n पर क्या प्रतिबंध है?'
                },
                answer: {
                    en: 'The number of subintervals n must be an EVEN integer (n = 2, 4, 6, ...).',
                    pa: 'ਅੰਤਰਾਲਾਂ ਦੀ ਗਿਣਤੀ n ਦਾ ਇੱਕ ਜਿਸਤ ਸੰਖਿਆ (Even integer: 2, 4, 6...) ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
                    hi: 'उप-अंतरालों की संख्या n का एक सम पूर्णांक (Even integer: 2, 4, 6, ...) होना अनिवार्य है।'
                }
            },
            {
                id: 'fc-ps-5',
                question: {
                    en: 'What degree of polynomials can be integrated exactly by Simpson’s 1/3 and 3/8 rules?',
                    pa: 'ਸਿੰਪਸਨ ਦੇ 1/3 ਅਤੇ 3/8 ਨਿਯਮਾਂ ਦੁਆਰਾ ਕਿੰਨੀ ਘਾਤ ਤੱਕ ਦੇ ਬਹੁਪਦਾਂ ਦਾ ਬਿਲਕੁਲ ਸਹੀ ਸਮਾਕਲਨ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ?',
                    hi: 'सिम्पसन 1/3 तथा 3/8 नियमों द्वारा किस घात तक के बहुपदों का यथार्थ समाकलन किया जा सकता है?'
                },
                answer: {
                    en: 'Polynomials up to degree 3 (cubic polynomials).',
                    pa: '3 ਘਾਤ (Cubic) ਤੱਕ ਦੇ ਬਹੁਪਦਾਂ ਦਾ।',
                    hi: 'अधिकतम 3 घात (त्रिघातीय) तक के बहुपदों का।'
                }
            }
        ]
    }
];
