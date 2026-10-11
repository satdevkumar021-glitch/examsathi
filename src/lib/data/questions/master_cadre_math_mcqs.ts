import type { Question } from '../questions';

/**
 * Punjab Master Cadre Mathematics — Degree-Level MCQs
 * Topics:
 *   1. math-matrices-linear-algebra
 *   2. math-differential-calculus
 *   3. math-integral-calculus
 *   4. math-differential-equations
 *   5. math-abstract-algebra-groups
 *   6. math-coordinate-geometry-3d
 *   7. math-vector-mechanics
 *   8. math-prob-stats-distributions
 * Source: Standard B.Sc. Mathematics Curriculum (Panjab Univ, GNDU, Punjabi Univ) & Master Cadre Math Past Examination Patterns.
 */

const MATH_PROV = {
  source: 'Panjab University / GNDU B.Sc. Mathematics Curriculum & Punjab Master Cadre Math Exam Archives',
  accessType: 'educational-original' as const,
  verifiedBy: 'ExamSathi Mathematics Academic Team',
  verifiedDate: '2026-10-11',
};

export const MASTER_CADRE_MATH_MCQS: Question[] = [
  // =========================================================================
  // 1. MATRICES, DETERMINANTS & LINEAR ALGEBRA (math-matrices-linear-algebra)
  // =========================================================================
  {
    id: 'q-mc-math-la-01',
    topicId: 'math-matrices-linear-algebra',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Linear Algebra',
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'If A is an orthogonal matrix of order n, then its determinant |A| must be equal to:',
      pa: 'ਜੇਕਰ A ਆਰਡਰ n ਦਾ ਇੱਕ ਆਰਥੋਗੋਨਲ (Orthogonal) ਮੈਟ੍ਰਿਕਸ ਹੈ, ਤਾਂ ਇਸਦਾ ਡਿਟਰਮੀਨੈਂਟ |A| ਕਿਸਦੇ ਬਰਾਬਰ ਹੋਵੇਗਾ?',
      hi: 'यदि A कोटि n का एक लांबिक (Orthogonal) आव्यूह है, तो इसका सारणिक |A| किसके बराबर होगा?'
    },
    options: {
      A: { en: '0', pa: '0', hi: '0' },
      B: { en: '±1', pa: '±1', hi: '±1' },
      C: { en: 'Any real number', pa: 'ਕੋਈ ਵੀ ਵਾਸਤਵਿਕ ਸੰਖਿਆ', hi: 'कोई भी वास्तविक संख्या' },
      D: { en: 'Purely imaginary', pa: 'ਕਾਲਪਨਿਕ ਸੰਖਿਆ', hi: 'शुद्ध काल्पनिक संख्या' }
    },
    correct: 'B',
    explanation: {
      en: 'For an orthogonal matrix A, A · A^T = I. Taking determinant on both sides: |A · A^T| = |A| · |A^T| = |A|² = |I| = 1. Hence |A| = ±1.',
      pa: 'ਆਰਥੋਗੋਨਲ ਮੈਟ੍ਰਿਕਸ ਲਈ A · A^T = I ਹੁੰਦਾ ਹੈ। ਦੋਵੇਂ ਪਾਸੇ ਡਿਟਰਮੀਨੈਂਟ ਲੈਣ ਤੇ: |A|² = 1 ⇒ |A| = ±1।',
      hi: 'लांबिक आव्यूह हेतु A · A^T = I होता है। दोनों पक्षों का सारणिक लेने पर: |A|² = 1 ⇒ |A| = ±1।'
    }
  },
  {
    id: 'q-mc-math-la-02',
    topicId: 'math-matrices-linear-algebra',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Eigenvalues',
    difficulty: 'hard',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'The eigenvalues of an idempotent matrix (A² = A) are always:',
      pa: 'ਇੱਕ ਆਈਡਮਪੋਟੈਂਟ ਮੈਟ੍ਰਿਕਸ (A² = A) ਦੇ ਆਈਗਨ ਮੁੱਲ (Eigenvalues) ਹਮੇਸ਼ਾ ਹੁੰਦੇ ਹਨ:',
      hi: 'एक वर्गसम (Idempotent) आव्यूह (A² = A) के अभिलाक्षणिक मान सदैव होते हैं:'
    },
    options: {
      A: { en: 'Purely imaginary', pa: 'ਸਿਰਫ਼ ਕਾਲਪਨਿਕ', hi: 'शुद्ध काल्पनिक' },
      B: { en: 'Only 0 or 1', pa: 'ਸਿਰਫ਼ 0 ਜਾਂ 1', hi: 'केवल 0 या 1' },
      C: { en: 'Positive real numbers only', pa: 'ਸਿਰਫ਼ ਧਨਾਤਮਕ ਵਾਸਤਵਿਕ ਸੰਖਿਆਵਾਂ', hi: 'केवल धनात्मक वास्तविक संख्याएँ' },
      D: { en: '-1 or +1', pa: '-1 ਜਾਂ +1', hi: '-1 या +1' }
    },
    correct: 'B',
    explanation: {
      en: 'Let λ be an eigenvalue of A with eigenvector X ≠ 0. Then AX = λX. Since A² = A, A²X = AX ⇒ λ²X = λX ⇒ (λ² - λ)X = 0. Since X ≠ 0, λ(λ - 1) = 0 ⇒ λ = 0 or 1.',
      pa: 'A² = A ਹੋਣ ਕਰਕੇ λ² = λ ⇒ λ(λ - 1) = 0 ⇒ λ = 0 ਜਾਂ 1।',
      hi: 'A² = A होने के कारण λ² = λ ⇒ λ(λ - 1) = 0 ⇒ λ = 0 या 1।'
    }
  },
  {
    id: 'q-mc-math-la-03',
    topicId: 'math-matrices-linear-algebra',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Linear Systems',
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'A non-homogeneous system of n linear equations AX = B in n variables has a UNIQUE solution if and only if:',
      pa: 'n ਵੇਰੀਏਬਲਾਂ ਵਿੱਚ n ਲੀਨੀਅਰ ਸਮੀਕਰਨਾਂ ਦੀ ਪ੍ਰਣਾਲੀ AX = B ਦਾ ਇੱਕ ਵਿਲੱਖਣ (Unique) ਹੱਲ ਹੁੰਦਾ ਹੈ ਜੇਕਰ ਅਤੇ ਕੇਵਲ ਜੇਕਰ:',
      hi: 'n चरों में n रैखिक समीकरणों के निकाय AX = B का एक अद्वितीय हल होता है यदि और केवल यदि:'
    },
    options: {
      A: { en: 'Rank(A) < n', pa: 'Rank(A) < n', hi: 'Rank(A) < n' },
      B: { en: '|A| = 0', pa: '|A| = 0', hi: '|A| = 0' },
      C: { en: '|A| ≠ 0 (i.e. Rank(A) = Rank([A|B]) = n)', pa: '|A| ≠ 0 (ਅਰਥਾਤ Rank(A) = n)', hi: '|A| ≠ 0 (अर्थात् Rank(A) = Rank([A|B]) = n)' },
      D: { en: 'Rank(A) < Rank([A|B])', pa: 'Rank(A) < Rank([A|B])', hi: 'Rank(A) < Rank([A|B])' }
    },
    correct: 'C',
    explanation: {
      en: 'According to Rouche-Capelli Theorem, a system AX = B has a unique solution if and only if Rank(A) = Rank([A|B]) = n (number of unknowns), which requires det(A) ≠ 0.',
      pa: 'ਰੋਸ਼ੇ-ਕੈਪੇਲੀ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ ਵਿਲੱਖਣ ਹੱਲ ਲਈ Rank(A) = Rank([A|B]) = n ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ, ਜਿਸ ਲਈ |A| ≠ 0 ਹੁੰਦਾ ਹੈ।',
      hi: 'रूशे-कैपेली प्रमेय के अनुसार अद्वितीय हल के लिए Rank(A) = Rank([A|B]) = n होना आवश्यक है, जिसके लिए |A| ≠ 0 होता है।'
    }
  },

  // =========================================================================
  // 2. DIFFERENTIAL CALCULUS (math-differential-calculus)
  // =========================================================================
  {
    id: 'q-mc-math-dc-01',
    topicId: 'math-differential-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Calculus Limits',
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'The value of the limit lim_{x -> 0} (sin x - x) / x³ is:',
      pa: 'ਸੀਮਾ lim_{x -> 0} (sin x - x) / x³ ਦਾ ਮੁੱਲ ਹੈ:',
      hi: 'सीमा lim_{x -> 0} (sin x - x) / x³ का मान है:'
    },
    options: {
      A: { en: '1/6', pa: '1/6', hi: '1/6' },
      B: { en: '-1/6', pa: '-1/6', hi: '-1/6' },
      C: { en: '0', pa: '0', hi: '0' },
      D: { en: '1/3', pa: '1/3', hi: '1/3' }
    },
    correct: 'B',
    explanation: {
      en: 'Using Taylor expansion: sin x = x - x³/6 + x⁵/120 - ... ⇒ sin x - x = -x³/6 + O(x⁵). Dividing by x³ gives -1/6 + O(x²). As x -> 0, limit = -1/6. Alternatively, apply L\'Hopital\'s Rule 3 times.',
      pa: 'ਟੇਲਰ ਸੀਰੀਜ਼ sin x = x - x³/6 + ... ਵਰਤ ਕੇ: (sin x - x)/x³ = -1/6। ਇਸ ਲਈ ਲਿਮਿਟ = -1/6।',
      hi: 'टेलर श्रेणी sin x = x - x³/6 + ... का उपयोग करने पर: (sin x - x)/x³ = -1/6। अतः सीमा = -1/6।'
    }
  },
  {
    id: 'q-mc-math-dc-02',
    topicId: 'math-differential-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Euler Theorem',
    difficulty: 'hard',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'If u = sin⁻¹((x² + y²) / (x + y)), then x(∂u/∂x) + y(∂u/∂y) is equal to:',
      pa: 'ਜੇਕਰ u = sin⁻¹((x² + y²) / (x + y)) ਹੈ, ਤਾਂ x(∂u/∂x) + y(∂u/∂y) ਕਿਸਦੇ ਬਰਾਬਰ ਹੈ?',
      hi: 'यदि u = sin⁻¹((x² + y²) / (x + y)) है, तो x(∂u/∂x) + y(∂u/∂y) किसके बराबर है?'
    },
    options: {
      A: { en: 'tan u', pa: 'tan u', hi: 'tan u' },
      B: { en: 'sin u', pa: 'sin u', hi: 'sin u' },
      C: { en: 'sec u', pa: 'sec u', hi: 'sec u' },
      D: { en: '2 tan u', pa: '2 tan u', hi: '2 tan u' }
    },
    correct: 'A',
    explanation: {
      en: 'Let z = sin u = (x² + y²)/(x + y). Here z is a homogeneous function of degree n = 2 - 1 = 1. By Euler\'s Theorem on homogeneous functions: x(∂z/∂x) + y(∂z/∂y) = 1 · z. Since z = sin u, ∂z/∂x = cos u (∂u/∂x). Thus cos u [x(∂u/∂x) + y(∂u/∂y)] = sin u ⇒ x(∂u/∂x) + y(∂u/∂y) = tan u.',
      pa: 'z = sin u ਡਿਗਰੀ 1 ਦਾ ਹੋਮੋਜੀਨੀਅਸ ਫੰਕਸ਼ਨ ਹੈ। ਆਇਲਰ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ: cos u [x ∂u/∂x + y ∂u/∂y] = sin u ⇒ ਉੱਤਰ tan u ਹੈ।',
      hi: 'z = sin u घात 1 का समघाती फलन है। ऑयलर प्रमेय से: cos u [x ∂u/∂x + y ∂u/∂y] = sin u ⇒ उत्तर tan u है।'
    }
  },

  // =========================================================================
  // 3. INTEGRAL CALCULUS (math-integral-calculus)
  // =========================================================================
  {
    id: 'q-mc-math-ic-01',
    topicId: 'math-integral-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Definite Integrals',
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'The value of the definite integral ∫_{0}^{π/2} (√sin x / (√sin x + √cos x)) dx is:',
      pa: 'ਨਿਸ਼ਚਿਤ ਇੰਟੈਗਰਲ ∫_{0}^{π/2} (√sin x / (√sin x + √cos x)) dx ਦਾ ਮੁੱਲ ਹੈ:',
      hi: 'निश्चित समाकलन ∫_{0}^{π/2} (√sin x / (√sin x + √cos x)) dx का मान है:'
    },
    options: {
      A: { en: 'π', pa: 'π', hi: 'π' },
      B: { en: 'π/2', pa: 'π/2', hi: 'π/2' },
      C: { en: 'π/4', pa: 'π/4', hi: 'π/4' },
      D: { en: '1', pa: '1', hi: '1' }
    },
    correct: 'C',
    explanation: {
      en: 'Using the King Property ∫_{0}^{a} f(x)dx = ∫_{0}^{a} f(a-x)dx: Let I = ∫_{0}^{π/2} (√sin x / (√sin x + √cos x)) dx. Then I = ∫_{0}^{π/2} (√cos x / (√cos x + √sin x)) dx. Adding both: 2I = ∫_{0}^{π/2} 1 dx = π/2 ⇒ I = π/4.',
      pa: 'ਕਿੰਗ ਪ੍ਰਾਪਰਟੀ ਵਰਤ ਕੇ: 2I = ∫_{0}^{π/2} 1 dx = π/2 ⇒ I = π/4।',
      hi: 'किंग गुणधर्म के उपयोग से: 2I = ∫_{0}^{π/2} 1 dx = π/2 ⇒ I = π/4।'
    }
  },
  {
    id: 'q-mc-math-ic-02',
    topicId: 'math-integral-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Gamma Function',
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'The value of Γ(1/2) is equal to:',
      pa: 'ਗਾਮਾ ਫੰਕਸ਼ਨ Γ(1/2) ਦਾ ਮੁੱਲ ਕਿਸਦੇ ਬਰਾਬਰ ਹੈ?',
      hi: 'गामा फलन Γ(1/2) का मान किसके बराबर है?'
    },
    options: {
      A: { en: '√π', pa: '√π', hi: '√π' },
      B: { en: 'π', pa: 'π', hi: 'π' },
      C: { en: 'π/2', pa: 'π/2', hi: 'π/2' },
      D: { en: '1/√π', pa: '1/√π', hi: '1/√π' }
    },
    correct: 'A',
    explanation: {
      en: 'By definition of Gamma function, Γ(1/2) = ∫_{0}^{∞} x^{-1/2} e^{-x} dx = 2 ∫_{0}^{∞} e^{-t²} dt = 2 (√π / 2) = √π.',
      pa: 'ਗਾਮਾ ਫੰਕਸ਼ਨ ਦੀ ਪਰਿਭਾਸ਼ਾ ਅਨੁਸਾਰ Γ(1/2) = √π ਹੁੰਦਾ ਹੈ।',
      hi: 'गामा फलन की मानक परिभाषा से Γ(1/2) = √π होता है।'
    }
  },

  // =========================================================================
  // 4. DIFFERENTIAL EQUATIONS (math-differential-equations)
  // =========================================================================
  {
    id: 'q-mc-math-de-01',
    topicId: 'math-differential-equations',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Integrating Factor',
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'The integrating factor (I.F.) of the linear differential equation (dy/dx) + (2/x)y = x³ is:',
      pa: 'ਰੇਖਿਕ ਡਿਫਰੈਂਸ਼ੀਅਲ ਸਮੀਕਰਨ (dy/dx) + (2/x)y = x³ ਦਾ ਇੰਟੈਗਰੇਟਿੰਗ ਫੈਕਟਰ (I.F.) ਹੈ:',
      hi: 'रैखिक अवकल समीकरण (dy/dx) + (2/x)y = x³ का समाकलन गुणक (I.F.) है:'
    },
    options: {
      A: { en: 'x²', pa: 'x²', hi: 'x²' },
      B: { en: '2 ln x', pa: '2 ln x', hi: '2 ln x' },
      C: { en: '1/x²', pa: '1/x²', hi: '1/x²' },
      D: { en: 'e^(2x)', pa: 'e^(2x)', hi: 'e^(2x)' }
    },
    correct: 'A',
    explanation: {
      en: 'For standard linear DE dy/dx + P y = Q, I.F. = e^(∫ P dx). Here P = 2/x. Thus I.F. = e^(∫ (2/x) dx) = e^(2 ln x) = e^(ln x²) = x².',
      pa: 'I.F. = e^(∫ P dx) = e^(∫ (2/x) dx) = e^(ln x²) = x²।',
      hi: 'I.F. = e^(∫ P dx) = e^(∫ (2/x) dx) = e^(ln x²) = x²।'
    }
  },
  {
    id: 'q-mc-math-de-02',
    topicId: 'math-differential-equations',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Particular Integral',
    difficulty: 'hard',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'The Particular Integral (P.I.) of the differential equation (D² + 4)y = sin(2x) is:',
      pa: 'ਡਿਫਰੈਂਸ਼ੀਅਲ ਸਮੀਕਰਨ (D² + 4)y = sin(2x) ਦਾ ਵਿਸ਼ੇਸ਼ ਇੰਟੈਗਰਲ (P.I.) ਹੈ:',
      hi: 'अवकल समीकरण (D² + 4)y = sin(2x) का विशेष समाकल (P.I.) है:'
    },
    options: {
      A: { en: '-(x/4) cos(2x)', pa: '-(x/4) cos(2x)', hi: '-(x/4) cos(2x)' },
      B: { en: '(x/4) sin(2x)', pa: '(x/4) sin(2x)', hi: '(x/4) sin(2x)' },
      C: { en: '-(x/2) cos(2x)', pa: '-(x/2) cos(2x)', hi: '-(x/2) cos(2x)' },
      D: { en: '(1/8) cos(2x)', pa: '(1/8) cos(2x)', hi: '(1/8) cos(2x)' }
    },
    correct: 'A',
    explanation: {
      en: 'When f(-a²) = 0, P.I. = 1/(D² + a²) sin(ax) = - (x / 2a) cos(ax). Here a = 2, so P.I. = - (x / 4) cos(2x).',
      pa: 'ਜਦੋਂ f(-a²) = 0 ਹੋਵੇ: P.I. = - (x / 2a) cos(ax)। ਇੱਥੇ a = 2 ਹੈ, ਇਸ ਲਈ P.I. = -(x/4) cos(2x)।',
      hi: 'जब f(-a²) = 0 हो: P.I. = - (x / 2a) cos(ax)। यहाँ a = 2 है, अतः P.I. = -(x/4) cos(2x)।'
    }
  },

  // =========================================================================
  // 5. ABSTRACT ALGEBRA (math-abstract-algebra-groups)
  // =========================================================================
  {
    id: 'q-mc-math-aa-01',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Group Theory',
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'How many generators does a cyclic group of order 12 have?',
      pa: 'ਆਰਡਰ 12 ਦੇ ਇੱਕ ਚੱਕਰੀ ਗਰੁੱਪ (Cyclic Group) ਦੇ ਕਿੰਨੇ ਜਨਰੇਟਰ (Generators) ਹੁੰਦੇ ਹਨ?',
      hi: 'कोटि 12 के एक चक्रीय समूह (Cyclic Group) के कुल कितने जनक (Generators) होते हैं?'
    },
    options: {
      A: { en: '2', pa: '2', hi: '2' },
      B: { en: '4', pa: '4', hi: '4' },
      C: { en: '6', pa: '6', hi: '6' },
      D: { en: '1', pa: '1', hi: '1' }
    },
    correct: 'B',
    explanation: {
      en: 'The number of generators of a finite cyclic group of order n is given by Euler\'s totient function φ(n). For n = 12: φ(12) = 12 · (1 - 1/2) · (1 - 1/3) = 12 · (1/2) · (2/3) = 4 (the coprimes are 1, 5, 7, 11).',
      pa: 'ਚੱਕਰੀ ਗਰੁੱਪ ਦੇ ਜਨਰੇਟਰਾਂ ਦੀ ਗਿਣਤੀ φ(n) ਹੁੰਦੀ ਹੈ। φ(12) = 12 × (1/2) × (2/3) = 4 (ਸਹਿ-ਅਭਾਜ ਅੰਕ: 1, 5, 7, 11)।',
      hi: 'चक्रीय समूह के जनकों की संख्या φ(n) से दी जाती है। φ(12) = 12 × (1/2) × (2/3) = 4 (सह-अभाज्य संख्याएँ: 1, 5, 7, 11)।'
    }
  },
  {
    id: 'q-mc-math-aa-02',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Lagrange Theorem',
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'According to Lagrange\'s Theorem, for any subgroup H of a finite group G:',
      pa: 'ਲੈਗਰਾਂਜ ਪ੍ਰਮੇਯ (Lagrange\'s Theorem) ਅਨੁਸਾਰ, ਸੀਮਿਤ ਗਰੁੱਪ G ਦੇ ਕਿਸੇ ਉਪ-ਗਰੁੱਪ H ਲਈ:',
      hi: 'लैग्रेंज प्रमेय (Lagrange\'s Theorem) के अनुसार, परिमित समूह G के किसी उपसमूह H के लिए:'
    },
    options: {
      A: { en: 'O(H) divides O(G)', pa: 'O(H) ਗਰੁੱਪ O(G) ਨੂੰ ਵੰਡਦਾ ਹੈ', hi: 'O(H), समूह O(G) को विभाजित करता है' },
      B: { en: 'O(G) divides O(H)', pa: 'O(G) ਉਪ-ਗਰੁੱਪ O(H) ਨੂੰ ਵੰਡਦਾ ਹੈ', hi: 'O(G), उपसमूह O(H) को विभाजित करता है' },
      C: { en: 'O(H) is always prime', pa: 'O(H) ਹਮੇਸ਼ਾ ਪ੍ਰਾਈਮ ਹੁੰਦਾ ਹੈ', hi: 'O(H) सदैव अभाज्य होता है' },
      D: { en: 'O(H) = O(G) / 2', pa: 'O(H) = O(G) / 2', hi: 'O(H) = O(G) / 2' }
    },
    correct: 'A',
    explanation: {
      en: 'Lagrange\'s Theorem states that the order of every subgroup H of a finite group G divides the order of G, i.e., O(G) / O(H) = [G : H] (the index of H in G).',
      pa: 'ਲੈਗਰਾਂਜ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ ਸੀਮਿਤ ਗਰੁੱਪ ਦੇ ਹਰੇਕ ਸਬ-ਗਰੁੱਪ ਦਾ ਆਰਡਰ ਗਰੁੱਪ ਦੇ ਆਰਡਰ ਨੂੰ ਪੂਰਾ ਵੰਡਦਾ ਹੈ: O(G) / O(H) = [G:H]।',
      hi: 'लैग्रेंज प्रमेय के अनुसार परिमित समूह के प्रत्येक उपसमूह की कोटि, समूह की कोटि को पूर्णतः विभाजित करती है: O(G) / O(H) = [G:H]। '
    }
  },

  // =========================================================================
  // 6. 3D COORDINATE GEOMETRY (math-coordinate-geometry-3d)
  // =========================================================================
  {
    id: 'q-mc-math-3d-01',
    topicId: 'math-coordinate-geometry-3d',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — 3D Geometry',
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'The condition that two lines with direction ratios (a₁, b₁, c₁) and (a₂, b₂, c₂) are perpendicular is:',
      pa: 'ਦੋ ਰੇਖਾਵਾਂ ਜਿਨ੍ਹਾਂ ਦੇ ਦਿਸ਼ਾ ਅਨੁਪਾਤ (a₁, b₁, c₁) ਅਤੇ (a₂, b₂, c₂) ਹਨ, ਦੇ ਲੰਬਕਾਰੀ (Perpendicular) ਹੋਣ ਦੀ ਸ਼ਰਤ ਹੈ:',
      hi: 'दो रेखाएँ जिनके दिक्-अनुपात (a₁, b₁, c₁) एवं (a₂, b₂, c₂) हैं, के परस्पर लंबवत होने की शर्त है:'
    },
    options: {
      A: { en: 'a₁/a₂ = b₁/b₂ = c₁/c₂', pa: 'a₁/a₂ = b₁/b₂ = c₁/c₂', hi: 'a₁/a₂ = b₁/b₂ = c₁/c₂' },
      B: { en: 'a₁a₂ + b₁b₂ + c₁c₂ = 0', pa: 'a₁a₂ + b₁b₂ + c₁c₂ = 0', hi: 'a₁a₂ + b₁b₂ + c₁c₂ = 0' },
      C: { en: 'a₁a₂ + b₁b₂ + c₁c₂ = 1', pa: 'a₁a₂ + b₁b₂ + c₁c₂ = 1', hi: 'a₁a₂ + b₁b₂ + c₁c₂ = 1' },
      D: { en: 'a₁² + b₁² + c₁² = a₂² + b₂² + c₂²', pa: 'a₁² + b₁² + c₁² = a₂² + b₂² + c₂²', hi: 'a₁² + b₁² + c₁² = a₂² + b₂² + c₂²' }
    },
    correct: 'B',
    explanation: {
      en: 'The angle θ between two lines satisfies cos θ = (a₁a₂ + b₁b₂ + c₁c₂) / (√(a₁²+b₁²+c₁²) · √(a₂²+b₂²+c₂²)). For θ = 90°, cos 90° = 0 ⇒ a₁a₂ + b₁b₂ + c₁c₂ = 0.',
      pa: 'ਲੰਬਕਾਰੀ ਰੇਖਾਵਾਂ ਲਈ θ = 90° ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ cos 90° = 0 ⇒ a₁a₂ + b₁b₂ + c₁c₂ = 0।',
      hi: 'लंबवत रेखाओं हेतु θ = 90° होता है, अतः cos 90° = 0 ⇒ a₁a₂ + b₁b₂ + c₁c₂ = 0।'
    }
  },
  {
    id: 'q-mc-math-3d-02',
    topicId: 'math-coordinate-geometry-3d',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Sphere Radius',
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'The radius of the sphere x² + y² + z² - 2x + 4y - 6z - 2 = 0 is:',
      pa: 'ਗੋਲੇ x² + y² + z² - 2x + 4y - 6z - 2 = 0 ਦਾ ਅਰਧ-ਵਿਆਸ (Radius) ਹੈ:',
      hi: 'गोले x² + y² + z² - 2x + 4y - 6z - 2 = 0 की त्रिज्या है:'
    },
    options: {
      A: { en: '4', pa: '4', hi: '4' },
      B: { en: '16', pa: '16', hi: '16' },
      C: { en: '√14', pa: '√14', hi: '√14' },
      D: { en: '2', pa: '2', hi: '2' }
    },
    correct: 'A',
    explanation: {
      en: 'Comparing with general equation x² + y² + z² + 2ux + 2vy + 2wz + d = 0: u = -1, v = 2, w = -3, d = -2. Radius R = √(u² + v² + w² - d) = √(1 + 4 + 9 - (-2)) = √16 = 4.',
      pa: 'ਸਧਾਰਨ ਸਮੀਕਰਨ ਨਾਲ ਤੁਲਨਾ ਕਰਕੇ: u = -1, v = 2, w = -3, d = -2। ਰੇਡੀਅਸ R = √(1 + 4 + 9 + 2) = √16 = 4।',
      hi: 'मानक समीकरण से तुलना करने पर: u = -1, v = 2, w = -3, d = -2। त्रिज्या R = √(1 + 4 + 9 + 2) = √16 = 4।'
    }
  },

  // =========================================================================
  // 7. VECTOR CALCULUS & MECHANICS (math-vector-mechanics)
  // =========================================================================
  {
    id: 'q-mc-math-vm-01',
    topicId: 'math-vector-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Vector Calculus',
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'A vector field F is called irrotational (conservative) if and only if:',
      pa: 'ਇੱਕ ਵੈਕਟਰ ਖੇਤਰ F ਨੂੰ ਇਰੋਟੇਸ਼ਨਲ (Irrotational) ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਜੇਕਰ ਅਤੇ ਕੇਵਲ ਜੇਕਰ:',
      hi: 'एक सदिश क्षेत्र F अघूर्णी (Irrotational / Conservative) कहलाता है यदि और केवल यदि:'
    },
    options: {
      A: { en: 'div F = 0', pa: 'div F = 0', hi: 'div F = 0' },
      B: { en: 'curl F = 0 (∇ × F = 0)', pa: 'curl F = 0 (∇ × F = 0)', hi: 'curl F = 0 (∇ × F = 0)' },
      C: { en: 'grad F = 0', pa: 'grad F = 0', hi: 'grad F = 0' },
      D: { en: '∇²F = 0', pa: '∇²F = 0', hi: '∇²F = 0' }
    },
    correct: 'B',
    explanation: {
      en: 'A vector field is irrotational if its curl vanishes everywhere, i.e., ∇ × F = 0. In this case, there exists a scalar potential φ such that F = ∇φ.',
      pa: 'ਇਰੋਟੇਸ਼ਨਲ ਵੈਕਟਰ ਲਈ curl F = ∇ × F = 0 ਹੁੰਦਾ ਹੈ, ਜਿਸ ਨਾਲ F = ∇φ ਬਣਦਾ ਹੈ।',
      hi: 'अघूर्णी सदिश क्षेत्र हेतु curl F = ∇ × F = 0 होता है, जिससे F = ∇φ प्राप्त होता है।'
    }
  },
  {
    id: 'q-mc-math-vm-02',
    topicId: 'math-vector-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Gauss Divergence Theorem',
    difficulty: 'hard',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'Gauss\'s Divergence Theorem transforms a:',
      pa: 'ਗੌਸ ਦਾ ਡਾਇਵਰਜੈਂਸ ਪ੍ਰਮੇਯ (Gauss\'s Divergence Theorem) ਕਿਸਨੂੰ ਕਿਸ ਵਿੱਚ ਬਦਲਦਾ ਹੈ?',
      hi: 'गाउस का अपसरण प्रमेय (Gauss\'s Divergence Theorem) परिवर्तित करता है:'
    },
    options: {
      A: { en: 'Line integral into surface integral', pa: 'ਰੇਖਾ ਇੰਟੈਗਰਲ ਨੂੰ ਸਤ੍ਹਾ ਇੰਟੈਗਰਲ ਵਿੱਚ', hi: 'रेखा समाकल को पृष्ठ समाकल में' },
      B: { en: 'Closed surface integral into volume integral (∬_S F · n̂ dS = ∭_V (div F) dV)', pa: 'ਬੰਦ ਸਤ੍ਹਾ ਇੰਟੈਗਰਲ ਨੂੰ ਵੌਲਿਊਮ ਇੰਟੈਗਰਲ ਵਿੱਚ', hi: 'बंद पृष्ठ समाकल को आयतन समाकल में (∬_S F · n̂ dS = ∭_V (div F) dV)' },
      C: { en: 'Volume integral into line integral', pa: 'ਵੌਲਿਊਮ ਇੰਟੈਗਰਲ ਨੂੰ ਰੇਖਾ ਇੰਟੈਗਰਲ ਵਿੱਚ', hi: 'आयतन समाकल को रेखा समाकल में' },
      D: { en: 'Double integral into single integral', pa: 'ਡਬਲ ਇੰਟੈਗਰਲ ਨੂੰ ਸਿੰਗਲ ਵਿੱਚ', hi: 'द्वि-समाकल को एकल समाकल में' }
    },
    correct: 'B',
    explanation: {
      en: 'Gauss\'s Divergence Theorem states that the outward flux of a vector field F through a closed surface S is equal to the volume integral of the divergence of F over the enclosed volume V: ∬_S F · n̂ dS = ∭_V (∇ · F) dV.',
      pa: 'ਗੌਸ ਡਾਇਵਰਜੈਂਸ ਪ੍ਰਮੇਯ ਬੰਦ ਸਤ੍ਹਾ ਇੰਟੈਗਰਲ ਨੂੰ ਵੌਲਿਊਮ ਇੰਟੈਗਰਲ ਵਿੱਚ ਬਦਲਦਾ ਹੈ: ∬_S F · n̂ dS = ∭_V (∇ · F) dV।',
      hi: 'गाउस अपसरण प्रमेय बंद पृष्ठ समाकल को आयतन समाकल में परिवर्तित करता है: ∬_S F · n̂ dS = ∭_V (∇ · F) dV।'
    }
  },

  // =========================================================================
  // 8. PROBABILITY & STATISTICS (math-prob-stats-distributions)
  // =========================================================================
  {
    id: 'q-mc-math-ps-01',
    topicId: 'math-prob-stats-distributions',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Poisson Distribution',
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'In a Poisson distribution with parameter λ, which of the following is true?',
      pa: 'ਪੈਰਾਮੀਟਰ λ ਵਾਲੀ ਪੋਆਇਸਨ ਵੰਡ (Poisson Distribution) ਵਿੱਚ ਹੇਠਾਂ ਦਿੱਤਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਸੱਚ ਹੈ?',
      hi: 'प्राचल λ वाले प्वासों बंटन (Poisson Distribution) में निम्न में से कौन-सा कथन सत्य है?'
    },
    options: {
      A: { en: 'Mean = Variance = λ', pa: 'ਔਸਤ (Mean) = ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ (Variance) = λ', hi: 'माध्य (Mean) = प्रसरण (Variance) = λ' },
      B: { en: 'Mean > Variance', pa: 'Mean > Variance', hi: 'Mean > Variance' },
      C: { en: 'Variance = λ²', pa: 'Variance = λ²', hi: 'Variance = λ²' },
      D: { en: 'Mean = λ, Variance = λ/2', pa: 'Mean = λ, Variance = λ/2', hi: 'Mean = λ, Variance = λ/2' }
    },
    correct: 'A',
    explanation: {
      en: 'A defining property of the Poisson distribution P(X = k) = (e^(-λ) λ^k) / k! is that its Mean E(X) = λ and its Variance Var(X) = λ.',
      pa: 'ਪੋਆਇਸਨ ਵੰਡ ਦੀ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾ ਹੈ ਕਿ ਇਸਦਾ Mean ਅਤੇ Variance ਦੋਵੇਂ λ ਦੇ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ।',
      hi: 'प्वासों बंटन की प्रमुख विशेषता है कि इसका माध्य और प्रसरण दोनों λ के बराबर होते हैं।'
    }
  },
  {
    id: 'q-mc-math-ps-02',
    topicId: 'math-prob-stats-distributions',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Math — Normal Distribution',
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    rightsProvenance: MATH_PROV,
    question: {
      en: 'In a Normal distribution N(μ, σ²), what percentage of total observations lie within the interval (μ - 2σ, μ + 2σ)?',
      pa: 'ਇੱਕ ਨਾਰਮਲ ਵੰਡ N(μ, σ²) ਵਿੱਚ, (μ - 2σ, μ + 2σ) ਦੇ ਅੰਤਰਾਲ ਵਿੱਚ ਲਗਭਗ ਕਿੰਨੇ ਪ੍ਰਤੀਸ਼ਤ ਨਿਰੀਖਣ ਆਉਂਦੇ ਹਨ?',
      hi: 'एक प्रसामान्य बंटन N(μ, σ²) में, अंतराल (μ - 2σ, μ + 2σ) के अंतर्गत लगभग कितने प्रतिशत प्रेक्षण आते हैं?'
    },
    options: {
      A: { en: '68.27%', pa: '68.27%', hi: '68.27%' },
      B: { en: '95.45%', pa: '95.45%', hi: '95.45%' },
      C: { en: '99.73%', pa: '99.73%', hi: '99.73%' },
      D: { en: '50.00%', pa: '50.00%', hi: '50.00%' }
    },
    correct: 'B',
    explanation: {
      en: 'In a standard Gaussian / Normal distribution curve: μ ± 1σ contains ~68.27%, μ ± 2σ contains ~95.45%, and μ ± 3σ contains ~99.73% of the total area.',
      pa: 'ਨਾਰਮਲ ਵੰਡ ਵਿੱਚ: μ ± 1σ = 68.27%, μ ± 2σ = 95.45%, ਅਤੇ μ ± 3σ = 99.73% ਖੇਤਰਫਲ ਹੁੰਦਾ ਹੈ।',
      hi: 'प्रसामान्य बंटन में: μ ± 1σ = 68.27%, μ ± 2σ = 95.45%, तथा μ ± 3σ = 99.73% क्षेत्रफल होता है।'
    }
  }
];
