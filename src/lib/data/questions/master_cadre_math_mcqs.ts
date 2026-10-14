import type { Question } from '../questions';

export const MASTER_CADRE_MATH_MCQS: Question[] = [
  // =========================================================================
  // TOPIC 1: LINEAR ALGEBRA & MATRICES (Q1 to Q10)
  // =========================================================================
  {
    id: 'q-mc-math-la-1',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the rank of the matrix A = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]?',
      pa: 'ਮੈਟ੍ਰਿਕਸ A = [[1, 2, 3], [2, 4, 6], [3, 6, 9]] ਦਾ ਰੈਂਕ ਕੀ ਹੈ?',
      hi: 'आव्यूह A = [[1, 2, 3], [2, 4, 6], [3, 6, 9]] की कोटि (रैंक) क्या है?'
    },
    options: {
      A: { en: '1', pa: '1', hi: '1' },
      B: { en: '2', pa: '2', hi: '2' },
      C: { en: '3', pa: '3', hi: '3' },
      D: { en: '0', pa: '0', hi: '0' }
    },
    correct: 'A',
    explanation: {
      en: 'Row 2 is 2 × Row 1 and Row 3 is 3 × Row 1. Row reduction gives [[1, 2, 3], [0, 0, 0], [0, 0, 0]], which has exactly 1 non-zero row. Hence, rank(A) = 1.',
      pa: 'ਪੰਕਤੀ 2 = 2 × ਪੰਕਤੀ 1 ਅਤੇ ਪੰਕਤੀ 3 = 3 × ਪੰਕਤੀ 1 ਹੈ। ਰੋਅ-ਰੀਡਕਸ਼ਨ ਤੋਂ ਬਾਅਦ ਸਿਰਫ਼ 1 ਗ਼ੈਰ-ਸਿਫ਼ਰ ਪੰਕਤੀ ਬਚਦੀ ਹੈ। ਇਸ ਲਈ rank(A) = 1 ਹੈ।',
      hi: 'पंक्ति 2 = 2 × पंक्ति 1 तथा पंक्ति 3 = 3 × पंक्ति 1 है। पंक्ति समानयन के पश्चात केवल 1 अशून्य पंक्ति बचती है, अतः rank(A) = 1 है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Higher Algebra & Linear Algebra Matrices',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-la-2',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'If A = [[1, 2], [3, 4]], which polynomial equation is satisfied by A according to the Cayley-Hamilton Theorem?',
      pa: 'ਜੇਕਰ A = [[1, 2], [3, 4]] ਹੋਵੇ, ਤਾਂ ਕੇਲੇ-ਹੈਮਿਲਟਨ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ ਮੈਟ੍ਰਿਕਸ A ਦੁਆਰਾ ਕਿਹੜੀ ਬਹੁਪਦ ਸਮੀਕਰਨ ਸੰਤੁਸ਼ਟ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?',
      hi: 'यदि A = [[1, 2], [3, 4]] हो, तो केली-हैमिल्टन प्रमेय के अनुसार आव्यूह A किस बहुपद समीकरण को संतुष्ट करता है?'
    },
    options: {
      A: { en: 'A² - 5A - 2I = O', pa: 'A² - 5A - 2I = O', hi: 'A² - 5A - 2I = O' },
      B: { en: 'A² - 5A + 2I = O', pa: 'A² - 5A + 2I = O', hi: 'A² - 5A + 2I = O' },
      C: { en: 'A² + 5A - 2I = O', pa: 'A² + 5A - 2I = O', hi: 'A² + 5A - 2I = O' },
      D: { en: 'A² - 4A - 3I = O', pa: 'A² - 4A - 3I = O', hi: 'A² - 4A - 3I = O' }
    },
    correct: 'A',
    explanation: {
      en: 'The characteristic equation of a 2×2 matrix is λ² - tr(A)λ + det(A) = 0. Here tr(A) = 1 + 4 = 5 and det(A) = (1)(4) - (2)(3) = 4 - 6 = -2. Thus λ² - 5λ - 2 = 0. By Cayley-Hamilton, A² - 5A - 2I = O.',
      pa: '2×2 ਮੈਟ੍ਰਿਕਸ ਦੀ ਵਿਸ਼ੇਸ਼ਤਾ ਸਮੀਕਰਨ λ² - tr(A)λ + det(A) = 0 ਹੁੰਦੀ ਹੈ। tr(A) = 5 ਅਤੇ det(A) = -2 ਹੈ। ਇਸ ਲਈ ਕੇਲੇ-ਹੈਮਿਲਟਨ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ A² - 5A - 2I = O ਹੈ।',
      hi: '2×2 आव्यूह का अभिलाक्षणिक समीकरण λ² - tr(A)λ + det(A) = 0 होता है। यहाँ tr(A) = 5 तथा det(A) = -2 है। अतः केली-हैमिल्टन प्रमेय से A² - 5A - 2I = O।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Linear Algebra — Cayley-Hamilton Theorem',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-la-3',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What are the eigenvalues of the matrix A = [[3, 2], [1, 4]]?',
      pa: 'ਮੈਟ੍ਰਿਕਸ A = [[3, 2], [1, 4]] ਦੇ ਆਈਗਨ ਮੁੱਲ ਕੀ ਹਨ?',
      hi: 'आव्यूह A = [[3, 2], [1, 4]] के आइगेन मान क्या हैं?'
    },
    options: {
      A: { en: '2 and 5', pa: '2 ਅਤੇ 5', hi: '2 और 5' },
      B: { en: '1 and 6', pa: '1 ਅਤੇ 6', hi: '1 और 6' },
      C: { en: '3 and 4', pa: '3 ਅਤੇ 4', hi: '3 और 4' },
      D: { en: '-2 and -5', pa: '-2 ਅਤੇ -5', hi: '-2 और -5' }
    },
    correct: 'A',
    explanation: {
      en: 'Characteristic equation: det(A - λI) = (3 - λ)(4 - λ) - 2 = λ² - 7λ + 10 = 0. Factoring gives (λ - 2)(λ - 5) = 0, so the eigenvalues are λ = 2 and λ = 5. Note: sum = 2+5 = 7 = tr(A) and product = 2×5 = 10 = det(A).',
      pa: 'ਵਿਸ਼ੇਸ਼ਤਾ ਸਮੀਕਰਨ: (3 - λ)(4 - λ) - 2 = λ² - 7λ + 10 = 0 => (λ - 2)(λ - 5) = 0। ਇਸ ਲਈ ਆਈਗਨ ਮੁੱਲ 2 ਅਤੇ 5 ਹਨ।',
      hi: 'अभिलाक्षणिक समीकरण: (3 - λ)(4 - λ) - 2 = λ² - 7λ + 10 = 0 => (λ - 2)(λ - 5) = 0। अतः आइगेन मान 2 और 5 हैं।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Eigenvalues & Diagonalization',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-la-4',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What can be concluded about the eigenvalues of a non-zero real skew-symmetric matrix (Aᵀ = -A)?',
      pa: 'ਕਿਸੇ ਗ਼ੈਰ-ਸਿਫ਼ਰ ਵਾਸਤਵਿਕ ਸਕਿਊ-ਸਮਮਿਤੀ ਮੈਟ੍ਰਿਕਸ (Aᵀ = -A) ਦੇ ਆਈਗਨ ਮੁੱਲਾਂ ਬਾਰੇ ਕੀ ਕਿਹਾ ਜਾ ਸਕਦਾ ਹੈ?',
      hi: 'किसी अशून्य वास्तविक विषम-सममित आव्यूह (Aᵀ = -A) के आइगेन मानों के संबंध में क्या सत्य है?'
    },
    options: {
      A: { en: 'They are purely imaginary or zero', pa: 'ਉਹ ਸ਼ੁੱਧ ਕਾਲਪਨਿਕ ਜਾਂ ਸਿਫ਼ਰ ਹੁੰਦੇ ਹਨ', hi: 'वे विशुद्ध काल्पनिक अथवा शून्य होते हैं' },
      B: { en: 'They must all be strictly positive real numbers', pa: 'ਉਹ ਸਾਰੇ ਧਨਾਤਮਕ ਵਾਸਤਵਿਕ ਅੰਕ ਹੁੰਦੇ ਹਨ', hi: 'वे सभी धनात्मक वास्तविक संख्याएं होते हैं' },
      C: { en: 'They must all have absolute value equal to 1', pa: 'ਉਹਨਾਂ ਦਾ ਮਾਡਿਊਲਸ ਹਮੇਸ਼ਾ 1 ਹੁੰਦਾ ਹੈ', hi: 'उनका मापांक सदैव 1 होता है' },
      D: { en: 'They must all be real non-zero numbers', pa: 'ਉਹ ਸਾਰੇ ਵਾਸਤਵਿਕ ਗ਼ੈਰ-ਸਿਫ਼ਰ ਅੰਕ ਹੁੰਦੇ ਹਨ', hi: 'वे सभी वास्तविक अशून्य संख्याएं होते हैं' }
    },
    correct: 'A',
    explanation: {
      en: 'Let Ax = λx with x*x = 1. Then x*Ax = λ. Taking conjugate transpose: (x*Ax)* = x*Aᵀx = -x*Ax = -λ. But (x*Ax)* = λ̄. Thus λ̄ = -λ, which implies 2Re(λ) = 0. Therefore, λ is purely imaginary or zero.',
      pa: 'ਵਾਸਤਵਿਕ ਸਕਿਊ-ਸਮਮਿਤੀ ਮੈਟ੍ਰਿਕਸ ਲਈ λ̄ = -λ ਹੁੰਦਾ ਹੈ, ਜਿਸਦਾ ਭਾਵ ਹੈ ਕਿ ਵਾਸਤਵਿਕ ਭਾਗ ਸਿਫ਼ਰ ਹੁੰਦਾ ਹੈ। ਇਸ ਲਈ ਆਈਗਨ ਮੁੱਲ ਸ਼ੁੱਧ ਕਾਲਪਨਿਕ ਜਾਂ ਸਿਫ਼ਰ ਹੁੰਦੇ ਹਨ।',
      hi: 'वास्तविक विषम-सममित आव्यूह हेतु λ̄ = -λ प्राप्त होता है, जिसका अर्थ है कि वास्तविक भाग शून्य है। अतः आइगेन मान विशुद्ध काल्पनिक या शून्य होते हैं।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Matrix Properties & Special Matrices',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-la-5',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Under which of the following necessary and sufficient conditions is an n × n matrix A diagonalizable over ℝ?',
      pa: 'ਹੇਠ ਲਿਖੀਆਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਲਾਜ਼ਮੀ ਅਤੇ ਕਾਫ਼ੀ ਸ਼ਰਤ ਅਧੀਨ n × n ਮੈਟ੍ਰਿਕਸ A ਵਾਸਤਵਿਕ ਖੇਤਰ ℝ ਉੱਤੇ ਡਾਇਗਨਲਾਈਜ਼ੇਬਲ ਹੁੰਦਾ ਹੈ?',
      hi: 'निम्नलिखित में से किस आवश्यक एवं पर्याप्त प्रतिबंध के अधीन n × n आव्यूह A वास्तविक क्षेत्र ℝ पर विकर्णीय होता है?'
    },
    options: {
      A: { en: 'For every eigenvalue, Geometric Multiplicity equals Algebraic Multiplicity (GM = AM)', pa: 'ਹਰੇਕ ਆਈਗਨ ਮੁੱਲ ਲਈ GM = AM ਹੋਵੇ', hi: 'प्रत्येक आइगेन मान हेतु ज्यामितीय बहुकता = बीजीय बहुकता (GM = AM)' },
      B: { en: 'The determinant of A is strictly positive', pa: 'A ਦਾ ਡਿਟਰਮੀਨੈਂਟ ਧਨਾਤਮਕ ਹੋਵੇ', hi: 'A का सारणिक धनात्मक हो' },
      C: { en: 'The matrix A must be upper triangular', pa: 'ਮੈਟ੍ਰਿਕਸ A ਅੱਪਰ ਟ੍ਰਾਈਐਂਗੁਲਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ', hi: 'आव्यूह A उपरि त्रिभुजीय होना चाहिए' },
      D: { en: 'All entries of the matrix A are integers', pa: 'ਮੈਟ੍ਰਿਕਸ A ਦੇ ਸਾਰੇ ਤੱਤ ਪੂਰਨ ਅੰਕ ਹੋਣ', hi: 'आव्यूह A के सभी अवयव पूर्णांक होने चाहिए' }
    },
    correct: 'A',
    explanation: {
      en: 'A matrix is diagonalizable if and only if there is a basis of ℝⁿ consisting of eigenvectors, which is equivalent to the condition that the characteristic polynomial splits over ℝ and GM(λ) = AM(λ) for each eigenvalue λ.',
      pa: 'ਮੈਟ੍ਰਿਕਸ ਡਾਇਗਨਲਾਈਜ਼ੇਬਲ ਤਾਂ ਹੀ ਹੁੰਦਾ ਹੈ ਜੇਕਰ ਹਰੇਕ ਆਈਗਨ ਮੁੱਲ ਲਈ ਜਿਆਮਿਤੀ ਬਹੁਲਤਾ (GM) ਅਲਜਬਰਾਇਕ ਬਹੁਲਤਾ (AM) ਦੇ ਬਰਾਬਰ ਹੋਵੇ।',
      hi: 'कोई आव्यूह विकर्णीय तभी होता है जब उसके अभिलाक्षणिक मानों का ज्यामितीय बहुकता (GM) उनके बीजीय बहुकता (AM) के बराबर हो।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Diagonalization & Eigenspaces',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-la-6',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Which of the following subsets is a vector subspace of ℝ³ over ℝ?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਉਪ-ਸਮੂਹ ℝ ਉੱਤੇ ℝ³ ਦਾ ਇੱਕ ਵੈਕਟਰ ਸਬ-ਸਪੇਸ ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा उपसमुच्चय ℝ पर ℝ³ की एक सदिश उपसमष्टि है?'
    },
    options: {
      A: { en: 'W = {(x, y, z) ∈ ℝ³ : 2x - 3y + z = 0}', pa: 'W = {(x, y, z) ∈ ℝ³ : 2x - 3y + z = 0}', hi: 'W = {(x, y, z) ∈ ℝ³ : 2x - 3y + z = 0}' },
      B: { en: 'W = {(x, y, z) ∈ ℝ³ : x + y + z = 1}', pa: 'W = {(x, y, z) ∈ ℝ³ : x + y + z = 1}', hi: 'W = {(x, y, z) ∈ ℝ³ : x + y + z = 1}' },
      C: { en: 'W = {(x, y, z) ∈ ℝ³ : xy = 0}', pa: 'W = {(x, y, z) ∈ ℝ³ : xy = 0}', hi: 'W = {(x, y, z) ∈ ℝ³ : xy = 0}' },
      D: { en: 'W = {(x, y, z) ∈ ℝ³ : x ≥ 0}', pa: 'W = {(x, y, z) ∈ ℝ³ : x ≥ 0}', hi: 'W = {(x, y, z) ∈ ℝ³ : x ≥ 0}' }
    },
    correct: 'A',
    explanation: {
      en: 'A plane through the origin (2x - 3y + z = 0) is non-empty, contains (0,0,0), and is closed under addition and scalar multiplication. Option B does not contain (0,0,0); Option C is not closed under addition (e.g. (1,0,0) + (0,1,0) = (1,1,0) ∉ W); Option D fails scalar multiplication for negative scalars.',
      pa: 'ਮੂਲ ਬਿੰਦੂ (0,0,0) ਵਿੱਚੋਂ ਲੰਘਣ ਵਾਲਾ ਸਮਤਲ 2x - 3y + z = 0 ਜੋੜ ਅਤੇ ਸਕੇਲਰ ਗੁਣਨ ਅਧੀਨ ਸੰਵ੍ਰਿਤ ਹੈ। ਬਾਕੀ ਵਿਕਲਪ ਸਬ-ਸਪੇਸ ਦੀਆਂ ਸ਼ਰਤਾਂ ਪੂਰੀਆਂ ਨਹੀਂ ਕਰਦੇ।',
      hi: 'मूल बिंदु (0,0,0) से गुजरने वाला समतल 2x - 3y + z = 0 योग व अदिश गुणन के अधीन संवृत है। अन्य विकल्प उपसमष्टि प्रतिबंधों को संतुष्ट नहीं करते।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Vector Spaces & Subspaces',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-la-7',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Let V be a 5-dimensional vector space over ℝ. If W₁ and W₂ are subspaces of V with dim(W₁) = 3 and dim(W₂) = 4, what is the minimum possible dimension of W₁ ∩ W₂?',
      pa: 'ਮੰਨ ਲਓ V ਇੱਕ 5-ਵਿਮਾਈ ਵੈਕਟਰ ਸਪੇਸ ਹੈ। ਜੇਕਰ W₁ ਅਤੇ W₂ ਇਸਦੇ ਸਬ-ਸਪੇਸ ਹੋਣ ਜਿੱਥੇ dim(W₁) = 3 ਅਤੇ dim(W₂) = 4 ਹੈ, ਤਾਂ W₁ ∩ W₂ ਦੀ ਘੱਟੋ-ਘੱਟ ਸੰਭਵ ਵਿਮਾ ਕੀ ਹੋਵੇਗੀ?',
      hi: 'मान लीजिए V एक 5-विमीय सदिश समष्टि है। यदि W₁ तथा W₂ ऐसी उपसमष्टियाँ हैं जहाँ dim(W₁) = 3 तथा dim(W₂) = 4, तो W₁ ∩ W₂ की न्यूनतम संभावित विमा क्या होगी?'
    },
    options: {
      A: { en: '2', pa: '2', hi: '2' },
      B: { en: '1', pa: '1', hi: '1' },
      C: { en: '3', pa: '3', hi: '3' },
      D: { en: '0', pa: '0', hi: '0' }
    },
    correct: 'A',
    explanation: {
      en: 'By the dimension theorem: dim(W₁ ∩ W₂) = dim(W₁) + dim(W₂) - dim(W₁ + W₂). Since W₁ + W₂ ⊆ V, dim(W₁ + W₂) ≤ dim(V) = 5. Therefore, dim(W₁ ∩ W₂) ≥ 3 + 4 - 5 = 2.',
      pa: 'ਵਿਮਾ ਸੂਤਰ ਅਨੁਸਾਰ: dim(W₁ ∩ W₂) = dim(W₁) + dim(W₂) - dim(W₁ + W₂) ≥ 3 + 4 - 5 = 2। ਇਸ ਲਈ ਘੱਟੋ-ਘੱਟ ਵਿਮਾ 2 ਹੈ।',
      hi: 'विमा प्रमेय से: dim(W₁ ∩ W₂) = dim(W₁) + dim(W₂) - dim(W₁ + W₂) ≥ 3 + 4 - 5 = 2। अतः न्यूनतम विमा 2 है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Basis & Dimension of Subspaces',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-la-8',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Let T: ℝ⁴ → ℝ³ be a linear transformation defined by a 3 × 4 matrix of rank 2. What is the dimension of the kernel (null space) of T?',
      pa: 'ਮੰਨ ਲਓ T: ℝ⁴ → ℝ³ ਇੱਕ ਰੇਖੀ ਰੂਪਾਂਤਰਨ ਹੈ ਜੋ ਰੈਂਕ 2 ਵਾਲੀ 3 × 4 ਮੈਟ੍ਰਿਕਸ ਦੁਆਰਾ ਪਰਿਭਾਸ਼ਿਤ ਹੈ। T ਦੇ ਕਰਨਲ (Null Space) ਦੀ ਵਿਮਾ ਕੀ ਹੋਵੇਗੀ?',
      hi: 'मान लीजिए T: ℝ⁴ → ℝ³ एक रैखिक रूपांतरण है जो कोटि 2 के एक 3 × 4 आव्यूह द्वारा परिभाषित है। T की अष्टि (शून्य समष्टि) की विमा क्या है?'
    },
    options: {
      A: { en: '2', pa: '2', hi: '2' },
      B: { en: '1', pa: '1', hi: '1' },
      C: { en: '3', pa: '3', hi: '3' },
      D: { en: '4', pa: '4', hi: '4' }
    },
    correct: 'A',
    explanation: {
      en: 'By the Rank-Nullity Theorem: dim(Domain) = rank(T) + nullity(T). Here dim(ℝ⁴) = 4 and rank(T) = 2. Thus nullity(T) = 4 - 2 = 2.',
      pa: 'ਰੈਂਕ-ਨਲਿਟੀ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ: dim(Domain) = rank(T) + nullity(T) => 4 = 2 + nullity(T) => nullity(T) = 2।',
      hi: 'कोटि-शून्यता प्रमेय के अनुसार: dim(Domain) = rank(T) + nullity(T) => 4 = 2 + nullity(T) => nullity(T) = 2।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Linear Transformations & Rank-Nullity Theorem',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-la-9',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'According to the Rouché-Capelli Theorem, when does the linear system AX = B (with n unknowns) have infinitely many solutions?',
      pa: 'ਰੂਚੇ-ਕੈਪੇਲੀ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ n ਚਲਾਂ ਵਾਲੀ ਰੇਖੀ ਪ੍ਰਣਾਲੀ AX = B ਦੇ ਅਨੰਤ ਹੱਲ ਕਦੋਂ ਹੁੰਦੇ ਹਨ?',
      hi: 'रूशे-कापेली प्रमेय के अनुसार n अज्ञात चरों वाले निकाय AX = B के अनंत हल कब प्राप्त होते हैं?'
    },
    options: {
      A: { en: 'rank(A) = rank([A|B]) < n', pa: 'rank(A) = rank([A|B]) < n', hi: 'rank(A) = rank([A|B]) < n' },
      B: { en: 'rank(A) = rank([A|B]) = n', pa: 'rank(A) = rank([A|B]) = n', hi: 'rank(A) = rank([A|B]) = n' },
      C: { en: 'rank(A) < rank([A|B])', pa: 'rank(A) < rank([A|B])', hi: 'rank(A) < rank([A|B])' },
      D: { en: 'rank(A) > rank([A|B])', pa: 'rank(A) > rank([A|B])', hi: 'rank(A) > rank([A|B])' }
    },
    correct: 'A',
    explanation: {
      en: 'Consistency requires rank(A) = rank([A|B]). If this common rank r is strictly less than n (number of variables), there are n - r free parameters, producing infinitely many solutions.',
      pa: 'ਸੰਗਤਤਾ ਲਈ rank(A) = rank([A|B]) ਹੋਣਾ ਜ਼ਰੂਰੀ ਹੈ। ਜੇਕਰ ਇਹ ਰੈਂਕ ਚਲਾਂ ਦੀ ਗਿਣਤੀ n ਤੋਂ ਘੱਟ ਹੋਵੇ, ਤਾਂ ਪ੍ਰਣਾਲੀ ਦੇ ਅਨੰਤ ਹੱਲ ਹੁੰਦੇ ਹਨ।',
      hi: 'संगतता हेतु rank(A) = rank([A|B]) होना अनिवार्य है। यदि यह कोटि चरों की संख्या n से कम हो, तो निकाय के अनंत हल होते हैं।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'System of Linear Equations — Rouché-Capelli',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-la-10',
    topicId: 'math-linear-algebra-matrices',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'If λ is an eigenvalue of an invertible n × n matrix A, what is an eigenvalue of adj(A)?',
      pa: 'ਜੇਕਰ λ ਕਿਸੇ ਉਲਟਾਉਣਯੋਗ n × n ਮੈਟ੍ਰਿਕਸ A ਦਾ ਆਈਗਨ ਮੁੱਲ ਹੈ, ਤਾਂ adj(A) ਦਾ ਆਈਗਨ ਮੁੱਲ ਕੀ ਹੋਵੇਗਾ?',
      hi: 'यदि λ किसी व्युत्क्रमणीय n × n आव्यूह A का एक आइगेन मान है, तो adj(A) का एक आइगेन मान क्या होगा?'
    },
    options: {
      A: { en: 'det(A) / λ', pa: 'det(A) / λ', hi: 'det(A) / λ' },
      B: { en: 'λ / det(A)', pa: 'λ / det(A)', hi: 'λ / det(A)' },
      C: { en: 'λⁿ⁻¹', pa: 'λⁿ⁻¹', hi: 'λⁿ⁻¹' },
      D: { en: '1 / λ', pa: '1 / λ', hi: '1 / λ' }
    },
    correct: 'A',
    explanation: {
      en: 'Recall that A · adj(A) = det(A) · I, which implies adj(A) = det(A) · A⁻¹. Since λ is an eigenvalue of A, 1/λ is an eigenvalue of A⁻¹. Multiplying by scalar det(A), an eigenvalue of adj(A) is det(A) / λ.',
      pa: 'ਅਸੀਂ ਜਾਣਦੇ ਹਾਂ ਕਿ adj(A) = det(A) · A⁻¹ ਹੁੰਦਾ ਹੈ। ਕਿਉਂਕਿ A ਦਾ ਆਈਗਨ ਮੁੱਲ λ ਹੈ, A⁻¹ ਦਾ 1/λ ਹੋਵੇਗਾ। ਇਸ ਲਈ adj(A) ਦਾ ਆਈਗਨ ਮੁੱਲ det(A) / λ ਹੈ।',
      hi: 'हम जानते हैं कि adj(A) = det(A) · A⁻¹ होता है। चूंकि A का आइगेन मान λ है, A⁻¹ का आइगेन मान 1/λ होगा। अतः adj(A) का आइगेन मान det(A) / λ है।'
    },
    difficulty: 'hard',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Adjoint & Inverse Properties',
      url: 'https://educationrecruitmentboard.com/'
    }
  },

  // =========================================================================
  // TOPIC 2: REAL ANALYSIS & CALCULUS (Q11 to Q20)
  // =========================================================================
  {
    id: 'q-mc-math-ra-1',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'According to Bolzano’s Intermediate Value Theorem, which interval contains a real root of the polynomial equation f(x) = x³ - 3x + 1 = 0?',
      pa: 'ਬੋਲਜ਼ਾਨੋ ਮੱਧਮਾਨ ਮੁੱਲ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ, ਬਹੁਪਦ ਸਮੀਕਰਨ f(x) = x³ - 3x + 1 = 0 ਦਾ ਇੱਕ ਵਾਸਤਵਿਕ ਮੂਲ ਕਿਸ ਅੰਤਰਾਲ ਵਿੱਚ ਸਥਿਤ ਹੈ?',
      hi: 'बोल्ज़ानो मध्यवर्ती मान प्रमेय के अनुसार, बहुपद समीकरण f(x) = x³ - 3x + 1 = 0 का एक वास्तविक मूल किस अंतराल में स्थित है?'
    },
    options: {
      A: { en: '(0, 1)', pa: '(0, 1)', hi: '(0, 1)' },
      B: { en: '(1, 2)', pa: '(1, 2)', hi: '(1, 2)' },
      C: { en: '(2, 3)', pa: '(2, 3)', hi: '(2, 3)' },
      D: { en: '(-3, -2)', pa: '(-3, -2)', hi: '(-3, -2)' }
    },
    correct: 'A',
    explanation: {
      en: 'f(x) is a continuous polynomial. Evaluate endpoints of (0, 1): f(0) = 0³ - 3(0) + 1 = +1 > 0; f(1) = 1³ - 3(1) + 1 = -1 < 0. Since f(0) and f(1) have opposite signs, by IVT there exists at least one root in (0, 1).',
      pa: 'f(0) = 1 > 0 ਅਤੇ f(1) = -1 < 0 ਹੈ। ਕਿਉਂਕਿ ਦੋਵਾਂ ਬਿੰਦੂਆਂ ਉੱਤੇ ਚਿੰਨ੍ਹ ਉਲਟ ਹਨ, ਇਸ ਲਈ (0, 1) ਵਿੱਚ ਇੱਕ ਵਾਸਤਵਿਕ ਮੂਲ ਮੌਜੂਦ ਹੈ।',
      hi: 'f(0) = 1 > 0 तथा f(1) = -1 < 0 है। चूंकि दोनों सिरों पर मानों के चिह्न विपरीत हैं, अतः (0, 1) में कम से कम एक वास्तविक मूल उपस्थित है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Intermediate Value Theorem & Roots',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ra-2',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'For f(x) = x(x - 2) on [0, 2], what is the value of c guaranteed by Rolle’s Theorem such that f′(c) = 0?',
      pa: 'ਅੰਤਰਾਲ [0, 2] ਉੱਤੇ ਫਲਨ f(x) = x(x - 2) ਲਈ ਰੋਲ ਦੇ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ c ਦਾ ਉਹ ਮੁੱਲ ਕੀ ਹੈ ਜਿੱਥੇ f′(c) = 0 ਹੋਵੇ?',
      hi: 'अंतराल [0, 2] पर फलन f(x) = x(x - 2) हेतु रोल प्रमेय द्वारा सुनिश्चित c का मान क्या है जहाँ f′(c) = 0 हो?'
    },
    options: {
      A: { en: '1', pa: '1', hi: '1' },
      B: { en: '1/2', pa: '1/2', hi: '1/2' },
      C: { en: '3/2', pa: '3/2', hi: '3/2' },
      D: { en: '√2', pa: '√2', hi: '√2' }
    },
    correct: 'A',
    explanation: {
      en: 'f(0) = 0 and f(2) = 0. f(x) = x² - 2x is continuous on [0, 2] and differentiable on (0, 2). Derivative is f′(x) = 2x - 2. Setting f′(c) = 0 gives 2c - 2 = 0 => c = 1 ∈ (0, 2).',
      pa: 'f(0) = f(2) = 0। ਅਵਕਲਜ f′(x) = 2x - 2 ਹੈ। f′(c) = 0 ਰੱਖਣ ਤੇ 2c - 2 = 0 => c = 1 ਮਿਲਦਾ ਹੈ।',
      hi: 'f(0) = f(2) = 0। अवकलज f′(x) = 2x - 2 है। f′(c) = 0 रखने पर 2c - 2 = 0 => c = 1 प्राप्त होता है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Mean Value Theorems — Rolle Theorem',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ra-3',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'For the function f(x) = √x on the interval [1, 4], what is the value of c that satisfies Lagrange’s Mean Value Theorem?',
      pa: 'ਅੰਤਰਾਲ [1, 4] ਉੱਤੇ ਫਲਨ f(x) = √x ਲਈ ਲਗਰਾਂਜ ਮੱਧਮਾਨ ਮੁੱਲ ਪ੍ਰਮੇਯ ਨੂੰ ਸੰਤੁਸ਼ਟ ਕਰਨ ਵਾਲਾ c ਦਾ ਮੁੱਲ ਕੀ ਹੈ?',
      hi: 'अंतराल [1, 4] पर फलन f(x) = √x हेतु लैग्रांज मध्यमान मान प्रमेय को संतुष्ट करने वाला c का मान क्या है?'
    },
    options: {
      A: { en: '9/4', pa: '9/4', hi: '9/4' },
      B: { en: '5/2', pa: '5/2', hi: '5/2' },
      C: { en: '2', pa: '2', hi: '2' },
      D: { en: '7/3', pa: '7/3', hi: '7/3' }
    },
    correct: 'A',
    explanation: {
      en: 'Lagrange MVT states f′(c) = (f(4) - f(1)) / (4 - 1). Here f(4) = 2, f(1) = 1, so RHS = (2 - 1)/3 = 1/3. Derivative is f′(x) = 1/(2√x). Thus 1/(2√c) = 1/3 => 2√c = 3 => √c = 3/2 => c = 9/4 = 2.25 ∈ (1, 4).',
      pa: 'ਲਗਰਾਂਜ ਪ੍ਰਮੇਯ: f′(c) = (f(4) - f(1))/(4 - 1) = (2 - 1)/3 = 1/3। 1/(2√c) = 1/3 => √c = 3/2 => c = 9/4 = 2.25।',
      hi: 'लैग्रांज प्रमेय: f′(c) = (f(4) - f(1))/(4 - 1) = (2 - 1)/3 = 1/3। 1/(2√c) = 1/3 => √c = 3/2 => c = 9/4 = 2.25।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Lagrange Mean Value Theorem',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ra-4',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the value of the limit L = lim_{x -> 0} (1 + 3x)^(2/x)?',
      pa: 'ਸੀਮਾ L = lim_{x -> 0} (1 + 3x)^(2/x) ਦਾ ਮੁੱਲ ਕੀ ਹੈ?',
      hi: 'सीमा L = lim_{x -> 0} (1 + 3x)^(2/x) का मान क्या है?'
    },
    options: {
      A: { en: 'e⁶', pa: 'e⁶', hi: 'e⁶' },
      B: { en: 'e⁵', pa: 'e⁵', hi: 'e⁵' },
      C: { en: 'e³', pa: 'e³', hi: 'e³' },
      D: { en: 'e²', pa: 'e²', hi: 'e²' }
    },
    correct: 'A',
    explanation: {
      en: 'This is the indeterminate form 1^∞. Using the formula lim [f(x)]^g(x) = exp(lim g(x)[f(x) - 1]): exponent = lim_{x -> 0} (2/x)(1 + 3x - 1) = lim_{x -> 0} (2/x)(3x) = 6. Therefore, the limit is e⁶.',
      pa: 'ਇਹ 1^∞ ਰੂਪ ਹੈ। ਸੂਤਰ ਅਨੁਸਾਰ: e^{lim (2/x)(3x)} = e⁶।',
      hi: 'यह 1^∞ रूप है। मानक सूत्र से: e^{lim (2/x)(3x)} = e⁶।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Indeterminate Forms & Limits',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ra-5',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'In Taylor’s Theorem for f(x) expanded around x = a, what is Lagrange’s form of the remainder R_n(x) after n terms?',
      pa: 'x = a ਦੁਆਲੇ ਟੇਲਰ ਪ੍ਰਮੇਯ ਪ੍ਰਸਾਰ ਵਿੱਚ n ਪਦਾਂ ਬਾਅਦ ਲਗਰਾਂਜ ਦਾ ਬਾਕੀ (Remainder) R_n(x) ਕੀ ਹੁੰਦਾ ਹੈ?',
      hi: 'x = a के परितः टेलर प्रमेय विस्तार में n पदों के पश्चात लैग्रांज शेषफल R_n(x) का रूप क्या होता है?'
    },
    options: {
      A: { en: '[(x - a)ⁿ⁺¹ / (n + 1)!] · fⁿ⁺¹(a + θ(x - a))', pa: '[(x - a)ⁿ⁺¹ / (n + 1)!] · fⁿ⁺¹(a + θ(x - a))', hi: '[(x - a)ⁿ⁺¹ / (n + 1)!] · fⁿ⁺¹(a + θ(x - a))' },
      B: { en: '[(x - a)ⁿ / n!] · fⁿ(a + θ(x - a))', pa: '[(x - a)ⁿ / n!] · fⁿ(a + θ(x - a))', hi: '[(x - a)ⁿ / n!] · fⁿ(a + θ(x - a))' },
      C: { en: '[(x - a)ⁿ⁺¹ / n!] · (1 - θ)ⁿ · fⁿ⁺¹(a + θ(x - a))', pa: '[(x - a)ⁿ⁺¹ / n!] · (1 - θ)ⁿ · fⁿ⁺¹(a + θ(x - a))', hi: '[(x - a)ⁿ⁺¹ / n!] · (1 - θ)ⁿ · fⁿ⁺¹(a + θ(x - a))' },
      D: { en: '[(x - a)ⁿ⁺² / (n + 2)!] · fⁿ⁺²(a)', pa: '[(x - a)ⁿ⁺² / (n + 2)!] · fⁿ⁺²(a)', hi: '[(x - a)ⁿ⁺² / (n + 2)!] · fⁿ⁺²(a)' }
    },
    correct: 'A',
    explanation: {
      en: 'Lagrange’s form of remainder after n terms is R_n(x) = [(x - a)ⁿ⁺¹ / (n + 1)!] fⁿ⁺¹(c) where c = a + θ(x - a) with 0 < θ < 1. Option C represents Cauchy’s form of remainder.',
      pa: 'ਲਗਰਾਂਜ ਰੂਪ [(x - a)ⁿ⁺¹ / (n + 1)!] fⁿ⁺¹(a + θ(x - a)) ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ 0 < θ < 1। ਵਿਕਲਪ C ਕਾਸ਼ੀ ਦਾ ਰੂਪ ਹੈ।',
      hi: 'लैग्रांज शेषफल रूप [(x - a)ⁿ⁺¹ / (n + 1)!] fⁿ⁺¹(a + θ(x - a)) होता है जहाँ 0 < θ < 1। विकल्प C कोशी का शेषफल रूप है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Taylor Series & Remainder Forms',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ra-6',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Classify the critical point of the two-variable function f(x, y) = x² + 2y² - 4x + 4y + 5.',
      pa: 'ਦੋ ਚਲਾਂ ਵਾਲੇ ਫਲਨ f(x, y) = x² + 2y² - 4x + 4y + 5 ਦੇ ਕ੍ਰਿਟੀਕਲ ਬਿੰਦੂ ਦਾ ਵਰਗੀਕਰਨ ਕਰੋ।',
      hi: 'दो चरों वाले फलन f(x, y) = x² + 2y² - 4x + 4y + 5 के क्रांतिक बिंदु का वर्गीकरण कीजिए।'
    },
    options: {
      A: { en: 'Local minimum at (2, -1)', pa: '(2, -1) ਉੱਤੇ ਲੋਕਲ ਨਿਊਨਤਮ', hi: '(2, -1) पर स्थानीय निम्निष्ठ' },
      B: { en: 'Local maximum at (2, -1)', pa: '(2, -1) ਉੱਤੇ ਲੋਕਲ ਉੱਚਤਮ', hi: '(2, -1) पर स्थानीय उच्चिष्ठ' },
      C: { en: 'Saddle point at (2, -1)', pa: '(2, -1) ਉੱਤੇ ਸੈਡਲ ਬਿੰਦੂ', hi: '(2, -1) पर पल्याण बिंदु' },
      D: { en: 'Local minimum at (-2, 1)', pa: '(-2, 1) ਉੱਤੇ ਲੋਕਲ ਨਿਊਨਤਮ', hi: '(-2, 1) पर स्थानीय निम्निष्ठ' }
    },
    correct: 'A',
    explanation: {
      en: 'First derivatives: f_x = 2x - 4 = 0 => x = 2; f_y = 4y + 4 = 0 => y = -1. Second derivatives: f_xx = 2, f_yy = 4, f_xy = 0. Discriminant D = f_xx f_yy - (f_xy)² = (2)(4) - 0 = 8 > 0. Since D > 0 and f_xx = 2 > 0, (2, -1) is a Local Minimum.',
      pa: 'f_x = 2x - 4 = 0 => x = 2; f_y = 4y + 4 = 0 => y = -1। f_xx = 2, f_yy = 4, f_xy = 0। D = 8 > 0 ਅਤੇ f_xx > 0 ਹੋਣ ਕਰਕੇ (2, -1) ਉੱਤੇ ਲੋਕਲ ਨਿਊਨਤਮ ਮੁੱਲ ਹੈ।',
      hi: 'f_x = 2x - 4 = 0 => x = 2; f_y = 4y + 4 = 0 => y = -1। f_xx = 2, f_yy = 4, f_xy = 0। D = 8 > 0 तथा f_xx > 0 होने से (2, -1) स्थानीय निम्निष्ठ है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Extrema of Two Variables & Hessian',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ra-7',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'For what values of p does the infinite series ∑_{n=1}^∞ 1 / n^p converge?',
      pa: 'p ਦੇ ਕਿਹੜੇ ਮੁੱਲਾਂ ਲਈ ਅਨੰਤ ਲੜੀ ∑_{n=1}^∞ 1 / n^p ਅਭਿਸਾਰੀ (Convergent) ਹੁੰਦੀ ਹੈ?',
      hi: 'p के किन मानों हेतु अनंत श्रेणी ∑_{n=1}^∞ 1 / n^p अभिसारी होती है?'
    },
    options: {
      A: { en: 'p > 1', pa: 'p > 1', hi: 'p > 1' },
      B: { en: 'p ≥ 1', pa: 'p ≥ 1', hi: 'p ≥ 1' },
      C: { en: 'p < 1', pa: 'p < 1', hi: 'p < 1' },
      D: { en: '0 < p ≤ 1', pa: '0 < p ≤ 1', hi: '0 < p ≤ 1' }
    },
    correct: 'A',
    explanation: {
      en: 'By the p-series test (or Cauchy integral test), ∑ 1/n^p converges strictly if p > 1, and diverges if p ≤ 1 (including the harmonic series at p = 1).',
      pa: 'p-ਸੀਰੀਜ਼ ਟੈਸਟ ਅਨੁਸਾਰ ∑ 1/n^p ਸਿਰਫ਼ ਉਦੋਂ ਅਭਿਸਾਰੀ ਹੁੰਦੀ ਹੈ ਜਦੋਂ p > 1 ਹੋਵੇ; p ≤ 1 ਲਈ ਇਹ ਅਪਸਾਰੀ ਹੁੰਦੀ ਹੈ।',
      hi: 'p-श्रेणी परीक्षण के अनुसार ∑ 1/n^p केवल तभी अभिसारी होती है जब p > 1 हो; p ≤ 1 पर यह अपसारी होती है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Infinite Series — p-Test',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ra-8',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'When the D’Alembert Ratio Test gives lim |a_{n+1}/a_n| = 1, which test using lim_{n -> ∞} n(a_n / a_{n+1} - 1) = R is applied?',
      pa: 'ਜਦੋਂ ਡੀ-ਐਲਮਬਰਟ ਅਨੁਪਾਤ ਟੈਸਟ ਵਿੱਚ lim |a_{n+1}/a_n| = 1 ਆਵੇ, ਤਾਂ lim_{n -> ∞} n(a_n / a_{n+1} - 1) = R ਵਾਲਾ ਕਿਹੜਾ ਟੈਸਟ ਲਾਗੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?',
      hi: 'जब डीएलम्बर्ट अनुपात परीक्षण में lim |a_{n+1}/a_n| = 1 प्राप्त हो, तो lim_{n -> ∞} n(a_n / a_{n+1} - 1) = R वाला कौन-सा परीक्षण लागू किया जाता है?'
    },
    options: {
      A: { en: 'Raabe’s Test', pa: 'ਰਾਬੇ ਦਾ ਟੈਸਟ (Raabe’s Test)', hi: 'राबे परीक्षण (Raabe’s Test)' },
      B: { en: 'Cauchy’s Root Test', pa: 'ਕਾਸ਼ੀ ਦਾ ਰੂਟ ਟੈਸਟ', hi: 'कोशी मूल परीक्षण' },
      C: { en: 'Leibniz Alternating Test', pa: 'ਲੀਬਨੀਜ਼ ਅਲਟਰਨੇਟਿੰਗ ਟੈਸਟ', hi: 'लाइब्निज एकांतर परीक्षण' },
      D: { en: 'Gauss’s Hypergeometric Test', pa: 'ਗੌਸ ਟੈਸਟ', hi: 'गॉस परीक्षण' }
    },
    correct: 'A',
    explanation: {
      en: 'Raabe’s test evaluates R = lim n(a_n / a_{n+1} - 1). The series converges if R > 1, diverges if R < 1, and the test fails if R = 1.',
      pa: 'ਜਦੋਂ ਅਨੁਪਾਤ ਟੈਸਟ ਅਸਫਲ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਰਾਬੇ ਦਾ ਟੈਸਟ ਲਾਗੂ ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ R > 1 ਤੇ ਲੜੀ ਅਭਿਸਾਰੀ ਅਤੇ R < 1 ਤੇ ਅਪਸਾਰੀ ਹੁੰਦੀ ਹੈ।',
      hi: 'अनुपात परीक्षण के विफल होने पर राबे परीक्षण प्रयुक्त होता है, जहाँ R > 1 पर श्रेणी अभिसारी तथा R < 1 पर अपसारी होती है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Convergence Tests — Raabe Test',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ra-9',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Which of the following conditions guarantees that a bounded function f is Riemann integrable on [a, b]?',
      pa: 'ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਸ਼ਰਤ ਇਹ ਗਾਰੰਟੀ ਦਿੰਦੀ ਹੈ ਕਿ ਇੱਕ ਸੀਮਾਬੱਧ ਫਲਨ f ਅੰਤਰਾਲ [a, b] ਉੱਤੇ ਰੀਮਾਨ ਸਮਾਕਲਨਯੋਗ (Riemann Integrable) ਹੈ?',
      hi: 'निम्नलिखित में से कौन-सा प्रतिबंध यह सुनिश्चित करता है कि परिबद्ध फलन f अंतराल [a, b] पर रीमान समाकलनीय है?'
    },
    options: {
      A: { en: 'f is monotonic on [a, b]', pa: 'f ਅੰਤਰਾਲ [a, b] ਉੱਤੇ ਇਕਸੁਰ (Monotonic) ਹੈ', hi: 'f अंतराल [a, b] पर एकदिष्ट (Monotonic) है' },
      B: { en: 'f has infinitely many points of discontinuity', pa: 'f ਕੋਲ ਅਨੰਤ ਅਸੰਤਤ ਬਿੰਦੂ ਹਨ', hi: 'f के पास अनंत असांतत्य बिंदु हैं' },
      C: { en: 'f attains only rational values on [a, b]', pa: 'f ਸਿਰਫ਼ ਪਰਿਮੇਯ ਮੁੱਲ ਧਾਰਨ ਕਰਦਾ ਹੈ', hi: 'f केवल परिमेय मान ग्रहण करता है' },
      D: { en: 'f is unbounded near x = a', pa: 'f ਬਿੰਦੂ x = a ਨੇੜੇ ਅਸੀਮਤ ਹੈ', hi: 'f बिंदु x = a के निकट अपरिबद्ध है' }
    },
    correct: 'A',
    explanation: {
      en: 'A classic theorem in Riemann integration states that every bounded monotonic function on a closed interval [a, b] is Riemann integrable (as is every continuous function on [a, b]).',
      pa: 'ਕਿਸੇ ਬੰਦ ਅੰਤਰਾਲ ਉੱਤੇ ਹਰੇਕ ਇਕਸੁਰ (Monotonic) ਸੀਮਾਬੱਧ ਫਲਨ ਹਮੇਸ਼ਾ ਰੀਮਾਨ ਸਮਾਕਲਨਯੋਗ ਹੁੰਦਾ ਹੈ।',
      hi: 'संवृत अंतराल पर प्रत्येक परिबद्ध एकदिष्ट (Monotonic) फलन अनिवार्यतः रीमान समाकलनीय होता है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Riemann Integration Criterion',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ra-10',
    topicId: 'math-real-analysis-calculus',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Using the Leibniz rule for differentiation under the integral sign, what is d/dx [ ∫₀^{x²} sin(t²) dt ]?',
      pa: 'ਲੀਬਨੀਜ਼ ਡਿਫਰੈਂਸ਼ੀਏਸ਼ਨ ਨਿਯਮ ਦੀ ਵਰਤੋਂ ਕਰਕੇ d/dx [ ∫₀^{x²} sin(t²) dt ] ਦਾ ਮੁੱਲ ਕੀ ਹੈ?',
      hi: 'लाइब्निज अवकलन नियम का प्रयोग करके d/dx [ ∫₀^{x²} sin(t²) dt ] का मान क्या है?'
    },
    options: {
      A: { en: '2x · sin(x⁴)', pa: '2x · sin(x⁴)', hi: '2x · sin(x⁴)' },
      B: { en: 'sin(x⁴)', pa: 'sin(x⁴)', hi: 'sin(x⁴)' },
      C: { en: '2x · sin(x²)', pa: '2x · sin(x²)', hi: '2x · sin(x²)' },
      D: { en: 'x² · sin(x⁴)', pa: 'x² · sin(x⁴)', hi: 'x² · sin(x⁴)' }
    },
    correct: 'A',
    explanation: {
      en: 'By Leibniz’s Rule: d/dx ∫_{u(x)}^{v(x)} f(t) dt = f(v(x)) v′(x) - f(u(x)) u′(x). Here v(x) = x², v′(x) = 2x, u(x) = 0. Thus the derivative is sin((x²)²) · (2x) - 0 = 2x sin(x⁴).',
      pa: 'ਲੀਬਨੀਜ਼ ਨਿਯਮ: f(v(x)) v′(x) = sin((x²)²) · (2x) = 2x sin(x⁴)।',
      hi: 'लाइब्निज नियम से: f(v(x)) v′(x) = sin((x²)²) · (2x) = 2x sin(x⁴)।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Leibniz Rule for Integrals',
      url: 'https://educationrecruitmentboard.com/'
    }
  },

  // =========================================================================
  // TOPIC 3: ABSTRACT ALGEBRA & GROUPS (Q21 to Q30)
  // =========================================================================
  {
    id: 'q-mc-math-aa-1',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the order of the element [12] in the additive cyclic group (ℤ₁₈, +₁₈)?',
      pa: 'ਯੋਗਾਤਮਕ ਚੱਕਰੀ ਗਰੁੱਪ (ℤ₁₈, +₁₈) ਵਿੱਚ ਤੱਤ [12] ਦਾ ਆਰਡਰ (Order) ਕੀ ਹੈ?',
      hi: 'योज्य चक्रीय समूह (ℤ₁₈, +₁₈) में अवयव [12] की कोटि (Order) क्या है?'
    },
    options: {
      A: { en: '3', pa: '3', hi: '3' },
      B: { en: '6', pa: '6', hi: '6' },
      C: { en: '2', pa: '2', hi: '2' },
      D: { en: '9', pa: '9', hi: '9' }
    },
    correct: 'A',
    explanation: {
      en: 'In (ℤ_n, +), the order of [k] is given by o([k]) = n / gcd(k, n). For k = 12 and n = 18, gcd(12, 18) = 6. Hence, o([12]) = 18 / 6 = 3.',
      pa: '(ℤ_n, +) ਵਿੱਚ o([k]) = n / gcd(k, n) ਹੁੰਦਾ ਹੈ। gcd(12, 18) = 6 ਹੋਣ ਕਰਕੇ o([12]) = 18 / 6 = 3 ਹੈ।',
      hi: '(ℤ_n, +) में o([k]) = n / gcd(k, n) होता है। gcd(12, 18) = 6 होने से o([12]) = 18 / 6 = 3 है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Cyclic Groups & Orders',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-aa-2',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'How many distinct generators does a cyclic group of order 24 have?',
      pa: '24 ਆਰਡਰ ਵਾਲੇ ਇੱਕ ਚੱਕਰੀ ਗਰੁੱਪ ਦੇ ਕਿੰਨੇ ਵੱਖਰੇ ਜਨਰੇਟਰ (Generators) ਹੁੰਦੇ ਹਨ?',
      hi: 'कोटि 24 के एक चक्रीय समूह के कुल कितने भिन्न जनक (Generators) होते हैं?'
    },
    options: {
      A: { en: '8', pa: '8', hi: '8' },
      B: { en: '6', pa: '6', hi: '6' },
      C: { en: '12', pa: '12', hi: '12' },
      D: { en: '4', pa: '4', hi: '4' }
    },
    correct: 'A',
    explanation: {
      en: 'The number of generators of a cyclic group of order n is given by Euler’s totient function ϕ(n). For n = 24 = 2³ × 3¹: ϕ(24) = 24 × (1 - 1/2) × (1 - 1/3) = 24 × (1/2) × (2/3) = 8.',
      pa: 'ਚੱਕਰੀ ਗਰੁੱਪ ਦੇ ਜਨਰੇਟਰਾਂ ਦੀ ਗਿਣਤੀ ϕ(n) ਹੁੰਦੀ ਹੈ। ϕ(24) = 24 × (1/2) × (2/3) = 8।',
      hi: 'चक्रीय समूह के जनकों की संख्या ϕ(n) होती है। ϕ(24) = 24 × (1/2) × (2/3) = 8।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Euler Totient & Cyclic Group Generators',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-aa-3',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the order of the alternating group A₅ consisting of all even permutations on 5 symbols?',
      pa: '5 ਚਿੰਨ੍ਹਾਂ ਉੱਤੇ ਸਾਰੀਆਂ ਜਿਸਤ (Even) ਪਰਮਿਊਟੇਸ਼ਨਾਂ ਵਾਲੇ ਅਲਟਰਨੇਟਿੰਗ ਗਰੁੱਪ A₅ ਦਾ ਆਰਡਰ ਕੀ ਹੈ?',
      hi: '5 प्रतीकों पर सभी सम क्रमचयों से निर्मित प्रत्यावर्ती समूह A₅ की कोटि क्या है?'
    },
    options: {
      A: { en: '60', pa: '60', hi: '60' },
      B: { en: '120', pa: '120', hi: '120' },
      C: { en: '24', pa: '24', hi: '24' },
      D: { en: '30', pa: '30', hi: '30' }
    },
    correct: 'A',
    explanation: {
      en: 'The symmetric group S_n has order n!. The alternating group A_n consists of even permutations and has order |A_n| = n! / 2. For n = 5: |A₅| = 5! / 2 = 120 / 2 = 60.',
      pa: '|A_n| = n! / 2 ਹੁੰਦਾ ਹੈ। n = 5 ਲਈ: |A₅| = 5! / 2 = 120 / 2 = 60 ਹੈ।',
      hi: '|A_n| = n! / 2 होता है। n = 5 हेतु: |A₅| = 5! / 2 = 120 / 2 = 60 है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Permutation Groups — Symmetric & Alternating',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-aa-4',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'If G is a group of order 35, what are the possible orders of its non-trivial proper subgroups according to Lagrange’s Theorem?',
      pa: 'ਜੇਕਰ G ਦਾ ਆਰਡਰ 35 ਹੈ, ਤਾਂ ਲਗਰਾਂਜ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ ਇਸਦੇ ਗ਼ੈਰ-ਮਾਮੂਲੀ ਉਚਿਤ ਸਬ-ਗਰੁੱਪਾਂ (Non-trivial proper subgroups) ਦੇ ਸੰਭਵ ਆਰਡਰ ਕੀ ਹਨ?',
      hi: 'यदि समूह G की कोटि 35 है, तो लैग्रांज प्रमेय के अनुसार इसके अतुच्छ उचित उपसमूहों (Non-trivial proper subgroups) की संभावित कोटियाँ क्या हैं?'
    },
    options: {
      A: { en: '5 and 7 only', pa: 'ਸਿਰਫ਼ 5 ਅਤੇ 7', hi: 'केवल 5 और 7' },
      B: { en: '1, 5, 7, and 35', pa: '1, 5, 7 ਅਤੇ 35', hi: '1, 5, 7 और 35' },
      C: { en: '2, 5, and 7', pa: '2, 5 ਅਤੇ 7', hi: '2, 5 और 7' },
      D: { en: '3, 5, and 7', pa: '3, 5 ਅਤੇ 7', hi: '3, 5 और 7' }
    },
    correct: 'A',
    explanation: {
      en: 'Lagrange’s Theorem dictates that the order of any subgroup H divides |G| = 35. The positive divisors of 35 are 1, 5, 7, 35. Non-trivial proper subgroups exclude 1 and 35, leaving possible orders 5 and 7 only.',
      pa: '35 ਦੇ ਭਾਜਕ 1, 5, 7, 35 ਹਨ। ਗ਼ੈਰ-ਮਾਮੂਲੀ ਉਚਿਤ ਸਬ-ਗਰੁੱਪਾਂ ਲਈ ਆਰਡਰ ਸਿਰਫ਼ 5 ਅਤੇ 7 ਹੀ ਸੰਭਵ ਹਨ।',
      hi: '35 के भाजक 1, 5, 7, 35 हैं। अतुच्छ उचित उपसमूहों हेतु कोटियाँ केवल 5 और 7 ही संभव हैं।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Lagrange’s Theorem & Subgroup Orders',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-aa-5',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Let H be a subgroup of group G such that the index [G : H] = 2. Which of the following statements is always true?',
      pa: 'ਮੰਨ ਲਓ H ਗਰੁੱਪ G ਦਾ ਇੱਕ ਸਬ-ਗਰੁੱਪ ਹੈ ਜਿਸਦਾ ਇੰਡੈਕਸ [G : H] = 2 ਹੈ। ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਥਨ ਹਮੇਸ਼ਾ ਸੱਚ ਹੈ?',
      hi: 'मान लीजिए H समूह G का एक उपसमूह है जिसका सूचकांक [G : H] = 2 है। निम्नलिखित में से कौन-सा कथन सदैव सत्य है?'
    },
    options: {
      A: { en: 'H is a normal subgroup of G', pa: 'H, G ਦਾ ਇੱਕ ਨਾਰਮਲ ਸਬ-ਗਰੁੱਪ ਹੈ', hi: 'H, G का एक प्रसामान्य (Normal) उपसमूह है' },
      B: { en: 'H must be an abelian group', pa: 'H ਲਾਜ਼ਮੀ ਤੌਰ ਤੇ ਅਬੇਲੀਅਨ ਗਰੁੱਪ ਹੋਵੇਗਾ', hi: 'H अनिवार्य रूप से एक आबेली समूह होगा' },
      C: { en: 'H must be a cyclic group', pa: 'H ਲਾਜ਼ਮੀ ਤੌਰ ਤੇ ਚੱਕਰੀ ਗਰੁੱਪ ਹੋਵੇਗਾ', hi: 'H अनिवार्य रूप से एक चक्रीय समूह होगा' },
      D: { en: 'The center Z(G) must contain H', pa: 'ਕੇਂਦਰ Z(G) ਵਿੱਚ H ਸ਼ਾਮਲ ਹੋਵੇਗਾ', hi: 'केंद्र Z(G) में H समाहित होगा' }
    },
    correct: 'A',
    explanation: {
      en: 'When [G : H] = 2, there are only two left cosets (H and G \\ H) and two right cosets (H and G \\ H). Hence for any g ∉ H, gH = G \\ H = Hg. Therefore, gH = Hg for all g ∈ G, which means H is unconditionally normal in G.',
      pa: 'ਜਦੋਂ ਇੰਡੈਕਸ 2 ਹੋਵੇ, ਤਾਂ ਖੱਬੇ ਅਤੇ ਸੱਜੇ ਕੋਸੈੱਟ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ (gH = Hg)। ਇਸ ਲਈ H ਹਮੇਸ਼ਾ G ਵਿੱਚ ਨਾਰਮਲ ਸਬ-ਗਰੁੱਪ ਹੁੰਦਾ ਹੈ।',
      hi: 'जब सूचकांक [G : H] = 2 हो, तो वाम व दक्षिण सहसमुच्चय समान (gH = Hg) होते हैं। अतः H सदैव G में प्रसामान्य उपसमूह होता है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Normal Subgroups & Coset Index',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-aa-6',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What does the First Isomorphism Theorem for group homomorphisms state?',
      pa: 'ਗਰੁੱਪ ਹੋਮੋਮੌਰਫਿਜ਼ਮ ਲਈ ਪਹਿਲਾ ਆਈਸੋਮੌਰਫਿਜ਼ਮ ਪ੍ਰਮੇਯ (First Isomorphism Theorem) ਕੀ ਦੱਸਦਾ ਹੈ?',
      hi: 'समूह समाकारिता हेतु प्रथम तुल्याकारिता प्रमेय क्या बताता है?'
    },
    options: {
      A: { en: 'G / ker(ϕ) ≅ Im(ϕ)', pa: 'G / ker(ϕ) ≅ Im(ϕ)', hi: 'G / ker(ϕ) ≅ Im(ϕ)' },
      B: { en: 'G / Im(ϕ) ≅ ker(ϕ)', pa: 'G / Im(ϕ) ≅ ker(ϕ)', hi: 'G / Im(ϕ) ≅ ker(ϕ)' },
      C: { en: 'ker(ϕ) ≅ Im(ϕ)', pa: 'ker(ϕ) ≅ Im(ϕ)', hi: 'ker(ϕ) ≅ Im(ϕ)' },
      D: { en: 'G ≅ ker(ϕ) × Im(ϕ)', pa: 'G ≅ ker(ϕ) × Im(ϕ)', hi: 'G ≅ ker(ϕ) × Im(ϕ)' }
    },
    correct: 'A',
    explanation: {
      en: 'The fundamental First Isomorphism Theorem states that if ϕ: G -> G′ is a group homomorphism, then the quotient group G / ker(ϕ) is naturally isomorphic to the image Im(ϕ).',
      pa: 'ਪਹਿਲਾ ਆਈਸੋਮੌਰਫਿਜ਼ਮ ਪ੍ਰਮੇਯ: ਕਿਸੇ ਹੋਮੋਮੌਰਫਿਜ਼ਮ ϕ ਲਈ G / ker(ϕ) ≅ Im(ϕ) ਹੁੰਦਾ ਹੈ।',
      hi: 'प्रथम तुल्याकारिता प्रमेय: किसी समाकारिता ϕ हेतु G / ker(ϕ) ≅ Im(ϕ) होता है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Group Homomorphisms & Isomorphism Theorems',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-aa-7',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'The multiplicative group of units U(10) consists of elements coprime to 10. To which group is U(10) isomorphic?',
      pa: 'ਮਾਡਿਊਲੋ 10 ਦੀਆਂ ਸਹਿ-ਅਭਾਜ ਇਕਾਈਆਂ ਦਾ ਗੁਣਾਤਮਕ ਗਰੁੱਪ U(10) ਕਿਸ ਗਰੁੱਪ ਦੇ ਆਈਸੋਮੌਰਫਿਕ ਹੈ?',
      hi: 'मॉड्यूलो 10 की सह-अभाज्य इकाइयों का गुणन समूह U(10) किस समूह के तुल्याकारी है?'
    },
    options: {
      A: { en: 'ℤ₄ (Cyclic group of order 4)', pa: 'ℤ₄ (4 ਆਰਡਰ ਦਾ ਚੱਕਰੀ ਗਰੁੱਪ)', hi: 'ℤ₄ (कोटि 4 का चक्रीय समूह)' },
      B: { en: 'ℤ₂ × ℤ₂ (Klein 4-group)', pa: 'ℤ₂ × ℤ₂ (ਕਲੇਨ 4-ਗਰੁੱਪ)', hi: 'ℤ₂ × ℤ₂ (क्लाइन 4-समूह)' },
      C: { en: 'S₃ (Symmetric group on 3 elements)', pa: 'S₃ (3 ਤੱਤਾਂ ਦਾ ਸਮਮਿਤੀ ਗਰੁੱਪ)', hi: 'S₃ (3 अवयवों का सममित समूह)' },
      D: { en: 'ℤ₅ (Cyclic group of order 5)', pa: 'ℤ₅ (5 ਆਰਡਰ ਦਾ ਚੱਕਰੀ ਗਰੁੱਪ)', hi: 'ℤ₅ (कोटि 5 का चक्रीय समूह)' }
    },
    correct: 'A',
    explanation: {
      en: 'U(10) = {[1], [3], [7], [9]}. Order is ϕ(10) = 4. Test powers of 3: 3¹ = 3, 3² = 9, 3³ = 27 ≡ 7, 3⁴ = 81 ≡ 1 (mod 10). Since [3] has order 4, U(10) is a cyclic group generated by [3], hence isomorphic to ℤ₄.',
      pa: 'U(10) = {1, 3, 7, 9} ਦਾ ਆਰਡਰ 4 ਹੈ। 3 ਦਾ ਆਰਡਰ 4 ਹੋਣ ਕਰਕੇ ਇਹ ਇੱਕ ਚੱਕਰੀ ਗਰੁੱਪ ਹੈ ਅਤੇ ℤ₄ ਦੇ ਆਈਸੋਮੌਰਫਿਕ ਹੈ।',
      hi: 'U(10) = {1, 3, 7, 9} की कोटि 4 है। 3 की कोटि 4 होने के कारण यह चक्रीय समूह है तथा ℤ₄ के तुल्याकारी है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Units Modulo n & Group Isomorphisms',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-aa-8',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Which classic theorem establishes the relationship between finite integral domains and fields?',
      pa: 'ਕਿਹੜਾ ਮਸ਼ਹੂਰ ਪ੍ਰਮੇਯ ਪਰਿਮਿਤ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨਾਂ ਅਤੇ ਫੀਲਡਾਂ ਵਿਚਕਾਰ ਸਬੰਧ ਸਥਾਪਿਤ ਕਰਦਾ ਹੈ?',
      hi: 'कौन-सा प्रसिद्ध प्रमेय परिमित पूर्णांकीय प्रांतों एवं क्षेत्रों के मध्य संबंध स्थापित करता है?'
    },
    options: {
      A: { en: 'Every finite integral domain is a field', pa: 'ਹਰੇਕ ਪਰਿਮਿਤ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਇੱਕ ਫੀਲਡ ਹੁੰਦੀ ਹੈ', hi: 'प्रत्येक परिमित पूर्णांकीय प्रांत एक क्षेत्र होता है' },
      B: { en: 'Every field is a finite integral domain', pa: 'ਹਰੇਕ ਫੀਲਡ ਇੱਕ ਪਰਿਮਿਤ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਹੁੰਦੀ ਹੈ', hi: 'प्रत्येक क्षेत्र एक परिमित पूर्णांकीय प्रांत होता है' },
      C: { en: 'An integral domain cannot contain identity', pa: 'ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਵਿੱਚ ਤਤਸਮਕ ਨਹੀਂ ਹੋ ਸਕਦਾ', hi: 'पूर्णांकीय प्रांत में तत्समक अवयव नहीं हो सकता' },
      D: { en: 'Every integral domain of characteristic zero is finite', pa: 'ਕੈਰੈਕਟਰਿਸਟਿਕ ਸਿਫ਼ਰ ਵਾਲੀ ਹਰੇਕ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਪਰਿਮਿਤ ਹੁੰਦੀ ਹੈ', hi: 'अभिलक्षण 0 वाला प्रत्येक पूर्णांकीय प्रांत परिमित होता है' }
    },
    correct: 'A',
    explanation: {
      en: 'Wedderburn-Artin foundation: For any non-zero element a in a finite integral domain D, the map x -> ax is injective by cancellation law (no zero divisors). On a finite set, injectivity implies surjectivity, ensuring the existence of an inverse for a. Thus, D is a field.',
      pa: 'ਨਿਰਸਨ ਨਿਯਮ (Cancellation law) ਅਤੇ ਪਰਿਮਿਤਤਾ ਕਾਰਨ ਗ਼ੈਰ-ਸਿਫ਼ਰ ਤੱਤਾਂ ਦਾ ਉਲਟ ਮੌਜੂਦ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਹਰੇਕ ਪਰਿਮਿਤ ਇੰਟੀਗ੍ਰਲ ਡੋਮੇਨ ਇੱਕ ਫੀਲਡ ਬਣ ਜਾਂਦੀ ਹੈ।',
      hi: 'निरसन नियम तथा परिमितता के कारण प्रत्येक अशून्य अवयव का गुणात्मक प्रतिलोम विद्यमान होता है, अतः प्रत्येक परिमित पूर्णांकीय प्रांत एक क्षेत्र होता है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Rings, Integral Domains & Fields',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-aa-9',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the characteristic of the finite field ℤ₇ under addition and multiplication modulo 7?',
      pa: 'ਮਾਡਿਊਲੋ 7 ਅਧੀਨ ਪਰਿਮਿਤ ਫੀਲਡ ℤ₇ ਦਾ ਕੈਰੈਕਟਰਿਸਟਿਕ (Characteristic) ਕੀ ਹੈ?',
      hi: 'मॉड्यूलो 7 के अंतर्गत परिमित क्षेत्र ℤ₇ का अभिलक्षण (Characteristic) क्या है?'
    },
    options: {
      A: { en: '7', pa: '7', hi: '7' },
      B: { en: '0', pa: '0', hi: '0' },
      C: { en: '1', pa: '1', hi: '1' },
      D: { en: '6', pa: '6', hi: '6' }
    },
    correct: 'A',
    explanation: {
      en: 'The characteristic of a ring with unity is the smallest positive integer n such that n · 1 = 0. In ℤ₇, 7 · [1] = [7] ≡ [0]. Since 7 is prime, the characteristic of the field ℤ₇ is 7.',
      pa: 'ℤ₇ ਵਿੱਚ 7 · [1] = [0] ਹੁੰਦਾ ਹੈ। ਇਸ ਲਈ ਫੀਲਡ ਦਾ ਕੈਰੈਕਟਰਿਸਟਿਕ 7 ਹੈ।',
      hi: 'ℤ₇ में 7 · [1] = [0] होता है। अतः क्षेत्र का अभिलक्षण 7 है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Fields & Ring Characteristics',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-aa-10',
    topicId: 'math-abstract-algebra-groups',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Using Eisenstein’s Criterion with prime p = 3, which of the following polynomials is proven irreducible over ℚ?',
      pa: 'ਅਭਾਜ p = 3 ਨਾਲ ਆਈਸਨਸਟਾਈਨ ਕਸੌਟੀ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਕਿਹੜਾ ਬਹੁਪਦ ℚ ਉੱਤੇ ਅਖੰਡਨੀਅ ਸਾਬਤ ਹੁੰਦਾ ਹੈ?',
      hi: 'अभाज्य p = 3 के साथ आइसेन्स्टीन कसौटी का प्रयोग करके कौन-सा बहुपद ℚ पर अखण्डनीय सिद्ध होता है?'
    },
    options: {
      A: { en: 'x⁴ + 6x³ + 9x + 3', pa: 'x⁴ + 6x³ + 9x + 3', hi: 'x⁴ + 6x³ + 9x + 3' },
      B: { en: 'x⁴ + 3x³ + 9', pa: 'x⁴ + 3x³ + 9', hi: 'x⁴ + 3x³ + 9' },
      C: { en: '3x⁴ + 6x + 3', pa: '3x⁴ + 6x + 3', hi: '3x⁴ + 6x + 3' },
      D: { en: 'x⁴ + 9x² + 6x + 18', pa: 'x⁴ + 9x² + 6x + 18', hi: 'x⁴ + 9x² + 6x + 18' }
    },
    correct: 'A',
    explanation: {
      en: 'For f(x) = x⁴ + 6x³ + 9x + 3: a₄ = 1, a₃ = 6, a₂ = 0, a₁ = 9, a₀ = 3. With p = 3: (1) 3 ∤ 1 (satisfied), (2) 3 divides 6, 0, 9, 3 (satisfied), (3) 3² = 9 ∤ 3 (satisfied). In Option B, p² = 9 divides a₀ = 9, failing condition 3.',
      pa: 'ਬਹੁਪਦ x⁴ + 6x³ + 9x + 3 ਲਈ 3 ਸਾਰੇ ਗੁਣਾਂਕਾਂ 6, 0, 9, 3 ਨੂੰ ਵੰਡਦਾ ਹੈ, ਮੁੱਖ ਗੁਣਾਂਕ 1 ਨੂੰ ਨਹੀਂ ਵੰਡਦਾ, ਅਤੇ 9 ਆਖ਼ਰੀ ਪਦ 3 ਨੂੰ ਨਹੀਂ ਵੰਡਦਾ। ਇਸ ਲਈ ਇਹ ℚ ਉੱਤੇ ਅਖੰਡਨੀਅ ਹੈ।',
      hi: 'बहुपद x⁴ + 6x³ + 9x + 3 हेतु अभाज्य 3 मुख्य पद 1 को छोड़कर सभी को विभाजित करता है तथा 3² = 9 अचर पद 3 को विभाजित नहीं करता। अतः यह ℚ पर अखण्डनीय है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Polynomial Rings & Eisenstein Criterion',
      url: 'https://educationrecruitmentboard.com/'
    }
  },

  // =========================================================================
  // TOPIC 4: DIFFERENTIAL EQUATIONS & MECHANICS (Q31 to Q40)
  // =========================================================================
  {
    id: 'q-mc-math-de-1',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the necessary and sufficient condition for the first-order differential equation M(x, y) dx + N(x, y) dy = 0 to be exact?',
      pa: 'ਪਹਿਲੀ ਘਾਤ ਦੇ ਅਵਕਲ ਸਮੀਕਰਨ M(x, y) dx + N(x, y) dy = 0 ਦੇ ਸਹੀ (Exact) ਹੋਣ ਦੀ ਲਾਜ਼ਮੀ ਅਤੇ ਕਾਫ਼ੀ ਸ਼ਰਤ ਕੀ ਹੈ?',
      hi: 'प्रथम कोटि अवकल समीकरण M(x, y) dx + N(x, y) dy = 0 के यथार्थ होने का आवश्यक एवं पर्याप्त प्रतिबंध क्या है?'
    },
    options: {
      A: { en: '∂M/∂y = ∂N/∂x', pa: '∂M/∂y = ∂N/∂x', hi: '∂M/∂y = ∂N/∂x' },
      B: { en: '∂M/∂x = ∂N/∂y', pa: '∂M/∂x = ∂N/∂y', hi: '∂M/∂x = ∂N/∂y' },
      C: { en: '∂M/∂y = -∂N/∂x', pa: '∂M/∂y = -∂N/∂x', hi: '∂M/∂y = -∂N/∂x' },
      D: { en: 'M = N', pa: 'M = N', hi: 'M = N' }
    },
    correct: 'A',
    explanation: {
      en: 'M dx + N dy is an exact differential of a function u(x, y) if and only if ∂M/∂y = ∂²u/(∂y ∂x) = ∂²u/(∂x ∂y) = ∂N/∂x, by Clairaut’s theorem on mixed partial derivatives.',
      pa: 'ਸਹੀ (Exact) ਹੋਣ ਲਈ ਕਲੇਰੌਟ ਨਿਯਮ ਅਨੁਸਾਰ ∂M/∂y = ∂N/∂x ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
      hi: 'यथार्थ समीकरण हेतु क्लेरॉट प्रमेय से मिश्रित आंशिक अवकलज समान होने चाहिए: ∂M/∂y = ∂N/∂x।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Exact Differential Equations',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-de-2',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is an integrating factor for the differential equation x dy - y dx = 0?',
      pa: 'ਅਵਕਲ ਸਮੀਕਰਨ x dy - y dx = 0 ਲਈ ਇੱਕ ਸਮਾਕਲਨ ਗੁਣਕ (Integrating Factor) ਕੀ ਹੈ?',
      hi: 'अवकल समीकरण x dy - y dx = 0 हेतु एक समाकलन गुणक क्या है?'
    },
    options: {
      A: { en: '1 / x²', pa: '1 / x²', hi: '1 / x²' },
      B: { en: 'x / y', pa: 'x / y', hi: 'x / y' },
      C: { en: 'x² + y²', pa: 'x² + y²', hi: 'x² + y²' },
      D: { en: 'e^{xy}', pa: 'e^{xy}', hi: 'e^{xy}' }
    },
    correct: 'A',
    explanation: {
      en: 'Multiplying x dy - y dx = 0 by 1/x² yields (x dy - y dx)/x² = d(y/x) = 0, which is an exact differential with solution y/x = C.',
      pa: '1/x² ਨਾਲ ਗੁਣਾ ਕਰਨ ਤੇ (x dy - y dx)/x² = d(y/x) = 0 ਬਣਦਾ ਹੈ, ਜੋ ਕਿ ਇੱਕ ਸਹੀ ਡਿਫਰੈਂਸ਼ੀਅਲ ਹੈ।',
      hi: '1/x² से गुणा करने पर (x dy - y dx)/x² = d(y/x) = 0 प्राप्त होता है, जो एक यथार्थ अवकलज है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Integrating Factors & Exact Equations',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-de-3',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the integrating factor (IF) for the linear ODE dy/dx + (2/x)y = x³ (for x > 0)?',
      pa: 'ਰੇਖੀ ਅਵਕਲ ਸਮੀਕਰਨ dy/dx + (2/x)y = x³ (x > 0 ਲਈ) ਦਾ ਸਮਾਕਲਨ ਗੁਣਕ ਕੀ ਹੈ?',
      hi: 'रैखिक अवकल समीकरण dy/dx + (2/x)y = x³ (x > 0 हेतु) का समाकलन गुणक क्या है?'
    },
    options: {
      A: { en: 'x²', pa: 'x²', hi: 'x²' },
      B: { en: '2 ln x', pa: '2 ln x', hi: '2 ln x' },
      C: { en: '1 / x²', pa: '1 / x²', hi: '1 / x²' },
      D: { en: 'x³', pa: 'x³', hi: 'x³' }
    },
    correct: 'A',
    explanation: {
      en: 'Here P(x) = 2/x. The integrating factor is IF = exp(∫ P(x) dx) = exp(∫ (2/x) dx) = exp(2 ln x) = exp(ln x²) = x².',
      pa: 'P(x) = 2/x ਹੋਣ ਕਰਕੇ IF = e^{∫ (2/x)dx} = e^{ln x²} = x² ਹੈ।',
      hi: 'P(x) = 2/x होने से IF = exp(∫ (2/x)dx) = exp(ln x²) = x² है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Leibniz Linear Equations',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-de-4',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the Particular Integral (PI) of the differential equation (D² + 4)y = sin(3x)?',
      pa: 'ਅਵਕਲ ਸਮੀਕਰਨ (D² + 4)y = sin(3x) ਦਾ ਪਾਰਟੀਕੂਲਰ ਇੰਟੀਗ੍ਰਲ (PI) ਕੀ ਹੈ?',
      hi: 'अवकल समीकरण (D² + 4)y = sin(3x) का विशेष समाकल (PI) क्या है?'
    },
    options: {
      A: { en: '-(1/5) sin(3x)', pa: '-(1/5) sin(3x)', hi: '-(1/5) sin(3x)' },
      B: { en: '(1/13) sin(3x)', pa: '(1/13) sin(3x)', hi: '(1/13) sin(3x)' },
      C: { en: '-(1/13) cos(3x)', pa: '-(1/13) cos(3x)', hi: '-(1/13) cos(3x)' },
      D: { en: '(1/5) sin(3x)', pa: '(1/5) sin(3x)', hi: '(1/5) sin(3x)' }
    },
    correct: 'A',
    explanation: {
      en: 'For sin(ax), replace D² with -a² = -3² = -9. Thus y_{PI} = 1/(D² + 4) sin(3x) = 1/(-9 + 4) sin(3x) = 1/(-5) sin(3x) = -(1/5) sin(3x).',
      pa: 'D² ਦੀ ਥਾਂ -3² = -9 ਰੱਖੋ: 1/(-9 + 4) sin(3x) = -(1/5) sin(3x)।',
      hi: 'D² के स्थान पर -3² = -9 प्रतिस्थापित करने पर: 1/(-9 + 4) sin(3x) = -(1/5) sin(3x)।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Linear ODE with Constant Coefficients — PI',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-de-5',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the general solution of the Cauchy-Euler differential equation x² (d²y/dx²) - 2x (dy/dx) + 2y = 0 (for x > 0)?',
      pa: 'ਕਾਸ਼ੀ-ਯੂਲਰ ਅਵਕਲ ਸਮੀਕਰਨ x² (d²y/dx²) - 2x (dy/dx) + 2y = 0 ਦਾ ਵਿਆਪਕ ਹੱਲ ਕੀ ਹੈ?',
      hi: 'कौशी-यूलर अवकल समीकरण x² (d²y/dx²) - 2x (dy/dx) + 2y = 0 का व्यापक हल क्या है?'
    },
    options: {
      A: { en: 'y = c₁ x + c₂ x²', pa: 'y = c₁ x + c₂ x²', hi: 'y = c₁ x + c₂ x²' },
      B: { en: 'y = c₁ eˣ + c₂ e²ˣ', pa: 'y = c₁ eˣ + c₂ e²ˣ', hi: 'y = c₁ eˣ + c₂ e²ˣ' },
      C: { en: 'y = (c₁ + c₂ ln x) x', pa: 'y = (c₁ + c₂ ln x) x', hi: 'y = (c₁ + c₂ ln x) x' },
      D: { en: 'y = c₁ cos(ln x) + c₂ sin(ln x)', pa: 'y = c₁ cos(ln x) + c₂ sin(ln x)', hi: 'y = c₁ cos(ln x) + c₂ sin(ln x)' }
    },
    correct: 'A',
    explanation: {
      en: 'Substitute x = eᶻ (z = ln x). The equation becomes [θ(θ - 1) - 2θ + 2]y = 0 => (θ² - 3θ + 2)y = 0. Auxiliary roots are m = 1, 2. Solution in z is y = c₁ eᶻ + c₂ e²ᶻ. In terms of x, y = c₁ x + c₂ x².',
      pa: 'x = eᶻ ਰੱਖਣ ਤੇ θ(θ - 1) - 2θ + 2 = 0 => θ² - 3θ + 2 = 0 => m = 1, 2। ਹੱਲ y = c₁ x + c₂ x² ਹੈ।',
      hi: 'x = eᶻ प्रतिस्थापित करने पर: θ² - 3θ + 2 = 0 => m = 1, 2। अतः व्यापक हल y = c₁ x + c₂ x² है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Cauchy-Euler Homogeneous Linear ODE',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-de-6',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What are Lagrange’s auxiliary equations for the first-order partial differential equation x p + y q = z?',
      pa: 'ਪਹਿਲੀ ਘਾਤ ਦੇ ਅੰਸ਼ਕ ਅਵਕਲ ਸਮੀਕਰਨ x p + y q = z ਲਈ ਲਗਰਾਂਜ ਦੀਆਂ ਸਹਾਇਕ ਸਮੀਕਰਨਾਂ ਕੀ ਹਨ?',
      hi: 'प्रथम कोटि आंशिक अवकल समीकरण x p + y q = z हेतु लैग्रांज के सहायक समीकरण क्या हैं?'
    },
    options: {
      A: { en: 'dx / x = dy / y = dz / z', pa: 'dx / x = dy / y = dz / z', hi: 'dx / x = dy / y = dz / z' },
      B: { en: 'dx / p = dy / q = dz / 1', pa: 'dx / p = dy / q = dz / 1', hi: 'dx / p = dy / q = dz / 1' },
      C: { en: 'x dx = y dy = z dz', pa: 'x dx = y dy = z dz', hi: 'x dx = y dy = z dz' },
      D: { en: 'dx / y = dy / x = dz / z', pa: 'dx / y = dy / x = dz / z', hi: 'dx / y = dy / x = dz / z' }
    },
    correct: 'A',
    explanation: {
      en: 'For Lagrange’s linear PDE P p + Q q = R, the auxiliary system is dx / P = dy / Q = dz / R. Here P = x, Q = y, R = z, yielding dx / x = dy / y = dz / z.',
      pa: 'P p + Q q = R ਲਈ ਸਹਾਇਕ ਸਮੀਕਰਨਾਂ dx/P = dy/Q = dz/R ਹੁੰਦੀਆਂ ਹਨ, ਇਸ ਲਈ dx/x = dy/y = dz/z ਹੈ।',
      hi: 'P p + Q q = R हेतु सहायक समीकरण dx/P = dy/Q = dz/R होते हैं, अतः dx/x = dy/y = dz/z है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Lagrange Linear PDE',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-de-7',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'In plane polar coordinates (r, θ), what is the correct expression for the transverse acceleration of a moving particle?',
      pa: 'ਸਮਤਲ ਪੋਲਰ ਨਿਰਦੇਸ਼ ਅੰਕਾਂ (r, θ) ਵਿੱਚ ਕਿਸੇ ਗਤੀਸ਼ੀਲ ਕਣ ਦੇ ਟ੍ਰਾਂਸਵਰਸ ਪ੍ਰਵੇਗ ਦਾ ਸਹੀ ਸੂਤਰ ਕੀ ਹੈ?',
      hi: 'समतल ध्रुवीय निर्देशांकों (r, θ) में गतिमान कण के अनुप्रस्थ त्वरण का सही व्यंजक क्या है?'
    },
    options: {
      A: { en: '2 ṙ θ̇ + r θ̈ = (1/r) d/dt(r² θ̇)', pa: '2 ṙ θ̇ + r θ̈ = (1/r) d/dt(r² θ̇)', hi: '2 ṙ θ̇ + r θ̈ = (1/r) d/dt(r² θ̇)' },
      B: { en: 'r̈ - r θ̇²', pa: 'r̈ - r θ̇²', hi: 'r̈ - r θ̇²' },
      C: { en: 'r θ̇²', pa: 'r θ̇²', hi: 'r θ̇²' },
      D: { en: 'r̈ + r θ̇', pa: 'r̈ + r θ̇', hi: 'r̈ + r θ̇' }
    },
    correct: 'A',
    explanation: {
      en: 'In polar coordinates, the acceleration vector has radial component a_r = r̈ - r θ̇² and transverse component a_θ = (1/r) d/dt(r² θ̇) = 2 ṙ θ̇ + r θ̈.',
      pa: 'ਪੋਲਰ ਨਿਰਦੇਸ਼ ਅੰਕਾਂ ਵਿੱਚ ਟ੍ਰਾਂਸਵਰਸ ਪ੍ਰਵੇਗ a_θ = 2 ṙ θ̇ + r θ̈ = (1/r) d/dt(r² θ̇) ਹੁੰਦਾ ਹੈ। ਰੇਡੀਅਲ ਪ੍ਰਵੇਗ r̈ - r θ̇² ਹੁੰਦਾ ਹੈ।',
      hi: 'ध्रुवीय निर्देशांकों में अनुप्रस्थ त्वरण a_θ = 2 ṙ θ̇ + r θ̈ = (1/r) d/dt(r² θ̇) होता है, जबकि त्रिज्यीय त्वरण r̈ - r θ̇² होता है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Kinematics in 2D — Polar Coordinates',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-de-8',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'A projectile is launched with velocity u at angle α to the horizontal. If the horizontal range is 4 times the maximum height reached, what is the launch angle α?',
      pa: 'ਇੱਕ ਪ੍ਰਖੇਪਕ ਖਿਤਜ ਨਾਲ α ਕੋਣ ਉੱਤੇ ਵੇਗ u ਨਾਲ ਸੁੱਟਿਆ ਜਾਂਦਾ ਹੈ। ਜੇਕਰ ਖਿਤਜੀ ਪਹੁੰਚ (Range) ਅਧਿਕਤਮ ਉਚਾਈ ਤੋਂ 4 ਗੁਣਾ ਹੈ, ਤਾਂ ਪ੍ਰਖੇਪ ਕੋਣ α ਕੀ ਹੈ?',
      hi: 'एक प्रक्षेप्य को क्षैतिज से α कोण पर u वेग से प्रक्षेपित किया जाता है। यदि क्षैतिज परास महत्तम ऊँचाई का 4 गुना है, तो प्रक्षेप कोण α क्या है?'
    },
    options: {
      A: { en: '45°', pa: '45°', hi: '45°' },
      B: { en: '30°', pa: '30°', hi: '30°' },
      C: { en: '60°', pa: '60°', hi: '60°' },
      D: { en: '75°', pa: '75°', hi: '75°' }
    },
    correct: 'A',
    explanation: {
      en: 'Range R = (u² sin 2α) / g = (2u² sin α cos α) / g. Maximum height H = (u² sin² α) / (2g). The fundamental relation is R / H = (2 sin α cos α) / (sin² α / 2) = 4 / tan α => R = 4H cot α. Given R = 4H, cot α = 1 => tan α = 1 => α = 45°.',
      pa: 'R / H = 4 / tan α ਹੁੰਦਾ ਹੈ। ਦਿੱਤਾ ਹੈ R = 4H, ਇਸ ਲਈ 4 = 4 / tan α => tan α = 1 => α = 45°।',
      hi: 'R / H = 4 / tan α होता है। दिया है R = 4H, अतः 4 = 4 / tan α => tan α = 1 => α = 45°।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Dynamics — Projectile Trajectory',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-de-9',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Which fundamental conservation law is represented by Kepler’s Second Law (constant areal velocity: dA/dt = constant)?',
      pa: 'ਕੈਪਲਰ ਦੇ ਦੂਜੇ ਨਿਯਮ (ਸਥਿਰ ਖੇਤਰੀ ਵੇਗ: dA/dt = ਸਥਿਰ) ਦੁਆਰਾ ਕਿਹੜਾ ਮੂਲ ਸੰਭਾਲ ਨਿਯਮ ਦਰਸਾਇਆ ਜਾਂਦਾ ਹੈ?',
      hi: 'केपलर के द्वितीय नियम (स्थिर क्षेत्रीय वेग: dA/dt = नियतांक) द्वारा किस मूल संरक्षण नियम का निरूपण होता है?'
    },
    options: {
      A: { en: 'Conservation of Angular Momentum', pa: 'ਕੋਣੀ ਸੰਵੇਗ ਦੀ ਸੰਭਾਲ', hi: 'कोणीय संवेग का संरक्षण' },
      B: { en: 'Conservation of Linear Momentum', pa: 'ਰੇਖੀ ਸੰਵੇਗ ਦੀ ਸੰਭਾਲ', hi: 'रेखीय संवेग का संरक्षण' },
      C: { en: 'Conservation of Kinetic Energy', pa: 'ਗਤੀਜ ਊਰਜਾ ਦੀ ਸੰਭਾਲ', hi: 'गतिज ऊर्जा का संरक्षण' },
      D: { en: 'Conservation of Electric Charge', pa: 'ਬਿਜਲੀ ਚਾਰਜ ਦੀ ਸੰਭਾਲ', hi: 'विद्युत आवेश का संरक्षण' }
    },
    correct: 'A',
    explanation: {
      en: 'The gravitational force is a central force pointing directly toward the Sun, exerting zero torque (τ = r × F = 0). Since dL/dt = τ = 0, the angular momentum L = m r² θ̇ is conserved. Areal velocity is dA/dt = (1/2) r² θ̇ = L / (2m) = constant.',
      pa: 'ਕੇਂਦਰੀ ਗੁਰੂਤਾ ਬਲ ਦਾ ਟਾਰਕ ਸਿਫ਼ਰ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਕਾਰਨ ਕੋਣੀ ਸੰਵੇਗ L ਸੁਰੱਖਿਅਤ ਰਹਿੰਦਾ ਹੈ। ਖੇਤਰੀ ਵੇਗ dA/dt = L/(2m) = ਸਥਿਰ ਹੁੰਦਾ ਹੈ।',
      hi: 'केंद्रीय गुरुत्वाकर्षण बल का बल-आघूर्ण शून्य होता है, जिससे कोणीय संवेग L संरक्षित रहता है। क्षेत्रीय वेग dA/dt = L/(2m) = नियतांक होता है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Central Orbits & Kepler’s Laws',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-de-10',
    topicId: 'math-diff-equations-mechanics',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'According to the Principle of Virtual Work, what is the total virtual work done by internal tensions in an inextensible string connecting two particles?',
      pa: 'ਕਲਪਿਤ ਕਾਰਜ ਦੇ ਸਿਧਾਂਤ ਅਨੁਸਾਰ ਦੋ ਕਣਾਂ ਨੂੰ ਜੋੜਨ ਵਾਲੀ ਇੱਕ ਅਵਿਤਾਣਯੋਗ (Inextensible) ਡੋਰੀ ਵਿੱਚ ਅੰਦਰੂਨੀ ਤਣਾਅ ਦੁਆਰਾ ਕੀਤਾ ਗਿਆ ਕੁੱਲ ਕਲਪਿਤ ਕਾਰਜ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?',
      hi: 'कल्पित कार्य के सिद्धांत के अनुसार दो कणों को जोड़ने वाली अवितान्य डोरी के आंतरिक तनाव द्वारा किया गया कुल कल्पित कार्य कितना होता है?'
    },
    options: {
      A: { en: 'Zero', pa: 'ਸਿਫ਼ਰ (Zero)', hi: 'शून्य' },
      B: { en: 'Positive and equal to T · l', pa: 'ਧਨਾਤਮਕ ਅਤੇ T · l ਦੇ ਬਰਾਬਰ', hi: 'धनात्मक तथा T · l के बराबर' },
      C: { en: 'Negative and equal to -T · l', pa: 'ਰਿਣਾਤਮਕ ਅਤੇ -T · l ਦੇ ਬਰਾਬਰ', hi: 'ऋणात्मक तथा -T · l के बराबर' },
      D: { en: 'Dependent on gravitational acceleration g', pa: 'ਗੁਰੂਤਾ ਪ੍ਰਵੇਗ g ਉੱਤੇ ਨਿਰਭਰ', hi: 'गुरुत्वीय त्वरण g पर निर्भर' }
    },
    correct: 'A',
    explanation: {
      en: 'For an inextensible string of constant length l, any virtual displacement satisfies δl = 0. The virtual work done by tension T is -T δl = 0. Hence, internal tensions of inextensible strings do zero virtual work and can be omitted from virtual work equations.',
      pa: 'ਅਵਿਤਾਣਯੋਗ ਡੋਰੀ ਦੀ ਲੰਬਾਈ ਸਥਿਰ ਹੋਣ ਕਰਕੇ δl = 0 ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਤਣਾਅ ਦਾ ਕਲਪਿਤ ਕਾਰਜ -T δl = 0 ਹੁੰਦਾ ਹੈ।',
      hi: 'अवितान्य डोरी की लंबाई स्थिर होने से δl = 0 होता है, अतः तनाव का कल्पित कार्य -T δl = 0 होता है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Statics — Principle of Virtual Work',
      url: 'https://educationrecruitmentboard.com/'
    }
  },

  // =========================================================================
  // TOPIC 5: COORDINATE & SOLID GEOMETRY (Q41 to Q50)
  // =========================================================================
  {
    id: 'q-mc-math-cg-1',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the condition for the homogeneous pair of straight lines ax² + 2hxy + by² = 0 to represent two mutually perpendicular lines?',
      pa: 'ਸਮਘਾਤੀ ਰੇਖਾ ਜੁੱਟ ax² + 2hxy + by² = 0 ਦੇ ਦੋ ਪਰਸਪਰ ਲੰਬਵਤ ਰੇਖਾਵਾਂ ਨੂੰ ਦਰਸਾਉਣ ਦੀ ਕੀ ਸ਼ਰਤ ਹੈ?',
      hi: 'समघाती रेखा युग्म ax² + 2hxy + by² = 0 के परस्पर लंबवत होने का क्या प्रतिबंध है?'
    },
    options: {
      A: { en: 'a + b = 0', pa: 'a + b = 0', hi: 'a + b = 0' },
      B: { en: 'h² - ab = 0', pa: 'h² - ab = 0', hi: 'h² - ab = 0' },
      C: { en: 'a - b = 0', pa: 'a - b = 0', hi: 'a - b = 0' },
      D: { en: 'ab + h² = 0', pa: 'ab + h² = 0', hi: 'ab + h² = 0' }
    },
    correct: 'A',
    explanation: {
      en: 'The angle θ between the lines is given by tan θ = 2√(h² - ab) / |a + b|. The lines are perpendicular (θ = 90°) if and only if the denominator is zero, i.e., a + b = 0 (coefficient of x² + coefficient of y² = 0).',
      pa: 'tan θ = 2√(h² - ab) / |a + b| ਹੁੰਦਾ ਹੈ। ਲੰਬਵਤ ਹੋਣ ਲਈ ਹਰ ਸਿਫ਼ਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ: a + b = 0।',
      hi: 'tan θ = 2√(h² - ab) / |a + b| होता है। लंबवत होने हेतु हर शून्य होना चाहिए: a + b = 0।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Pair of Straight Lines',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-cg-2',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the equation of the radical axis of the two circles S₁: x² + y² - 4x + 6y - 3 = 0 and S₂: x² + y² + 2x - 4y + 1 = 0?',
      pa: 'ਦੋ ਚੱਕਰਾਂ S₁: x² + y² - 4x + 6y - 3 = 0 ਅਤੇ S₂: x² + y² + 2x - 4y + 1 = 0 ਦੇ ਰੈਡੀਕਲ ਧੁਰੇ (Radical Axis) ਦੀ ਸਮੀਕਰਨ ਕੀ ਹੈ?',
      hi: 'दो वृत्तों S₁: x² + y² - 4x + 6y - 3 = 0 तथा S₂: x² + y² + 2x - 4y + 1 = 0 के मूलाक्ष का समीकरण क्या है?'
    },
    options: {
      A: { en: '3x - 5y + 2 = 0', pa: '3x - 5y + 2 = 0', hi: '3x - 5y + 2 = 0' },
      B: { en: '3x + 5y - 2 = 0', pa: '3x + 5y - 2 = 0', hi: '3x + 5y - 2 = 0' },
      C: { en: '6x - 10y + 1 = 0', pa: '6x - 10y + 1 = 0', hi: '6x - 10y + 1 = 0' },
      D: { en: 'x - 2y + 4 = 0', pa: 'x - 2y + 4 = 0', hi: 'x - 2y + 4 = 0' }
    },
    correct: 'A',
    explanation: {
      en: 'The radical axis is S₁ - S₂ = 0: (x² + y² - 4x + 6y - 3) - (x² + y² + 2x - 4y + 1) = 0 => -6x + 10y - 4 = 0. Dividing by -2 gives 3x - 5y + 2 = 0.',
      pa: 'ਰੈਡੀਕਲ ਧੁਰਾ S₁ - S₂ = 0 ਹੁੰਦਾ ਹੈ: -6x + 10y - 4 = 0 => 3x - 5y + 2 = 0।',
      hi: 'मूलाक्ष का समीकरण S₁ - S₂ = 0 होता है: -6x + 10y - 4 = 0 => 3x - 5y + 2 = 0।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Circles & Radical Axis',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-cg-3',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What are the focus coordinates and directrix equation of the parabola y² = 12x?',
      pa: 'ਪੈਰਾਬੋਲਾ y² = 12x ਦੇ ਫੋਕਸ ਦੇ ਨਿਰਦੇਸ਼ ਅੰਕ ਅਤੇ ਡਾਇਰੈਕਟ੍ਰਿਕਸ (Directrix) ਦੀ ਸਮੀਕਰਨ ਕੀ ਹੈ?',
      hi: 'परवलय y² = 12x की नाभि के निर्देशांक तथा नियता का समीकरण क्या है?'
    },
    options: {
      A: { en: 'Focus (3, 0), Directrix x = -3', pa: 'ਫੋਕਸ (3, 0), ਡਾਇਰੈਕਟ੍ਰਿਕਸ x = -3', hi: 'नाभि (3, 0), नियता x = -3' },
      B: { en: 'Focus (0, 3), Directrix y = -3', pa: 'ਫੋਕਸ (0, 3), ਡਾਇਰੈਕਟ੍ਰਿਕਸ y = -3', hi: 'नाभि (0, 3), नियता y = -3' },
      C: { en: 'Focus (-3, 0), Directrix x = 3', pa: 'ਫੋਕਸ (-3, 0), ਡਾਇਰੈਕਟ੍ਰਿਕਸ x = 3', hi: 'नाभि (-3, 0), नियता x = 3' },
      D: { en: 'Focus (6, 0), Directrix x = -6', pa: 'ਫੋਕਸ (6, 0), ਡਾਇਰੈਕਟ੍ਰਿਕਸ x = -6', hi: 'नाभि (6, 0), नियता x = -6' }
    },
    correct: 'A',
    explanation: {
      en: 'Comparing y² = 12x with standard form y² = 4ax: 4a = 12 => a = 3. The focus is (a, 0) = (3, 0) and the directrix is x = -a => x = -3.',
      pa: 'y² = 4ax ਨਾਲ ਤੁਲਨਾ ਕਰਨ ਤੇ: 4a = 12 => a = 3। ਫੋਕਸ (3, 0) ਅਤੇ ਡਾਇਰੈਕਟ੍ਰਿਕਸ x = -3 ਹੈ।',
      hi: 'y² = 4ax से तुलना करने पर: 4a = 12 => a = 3। नाभि (3, 0) तथा नियता x = -3 है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Standard Conics — Parabola',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-cg-4',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the eccentricity of the ellipse x²/25 + y²/9 = 1?',
      pa: 'ਅੰਡਾਕਾਰ x²/25 + y²/9 = 1 ਦੀ ਉਤਕੇਂਦਰਤਾ (Eccentricity) ਕੀ ਹੈ?',
      hi: 'दीर्घवृत्त x²/25 + y²/9 = 1 की उत्केंद्रता क्या है?'
    },
    options: {
      A: { en: '4/5', pa: '4/5', hi: '4/5' },
      B: { en: '3/5', pa: '3/5', hi: '3/5' },
      C: { en: '16/25', pa: '16/25', hi: '16/25' },
      D: { en: '√34 / 5', pa: '√34 / 5', hi: '√34 / 5' }
    },
    correct: 'A',
    explanation: {
      en: 'Here a² = 25 and b² = 9. Since a > b, eccentricity e = √(1 - b²/a²) = √(1 - 9/25) = √(16/25) = 4/5 = 0.8.',
      pa: 'ਉਤਕੇਂਦਰਤਾ e = √(1 - b²/a²) = √(1 - 9/25) = √(16/25) = 4/5 ਹੈ।',
      hi: 'उत्केंद्रता e = √(1 - b²/a²) = √(1 - 9/25) = √(16/25) = 4/5 है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Standard Conics — Ellipse',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-cg-5',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the eccentricity of any rectangular (equilateral) hyperbola x² - y² = a²?',
      pa: 'ਸਮਕੋਣੀ ਹਾਈਪਰਬੋਲਾ x² - y² = a² ਦੀ ਉਤਕੇਂਦਰਤਾ ਕਿੰਨੀ ਹੁੰਦੀ ਹੈ?',
      hi: 'समकोणीय अतिपरवलय x² - y² = a² की उत्केंद्रता क्या होती है?'
    },
    options: {
      A: { en: '√2', pa: '√2', hi: '√2' },
      B: { en: '1', pa: '1', hi: '1' },
      C: { en: '2', pa: '2', hi: '2' },
      D: { en: '√3', pa: '√3', hi: '√3' }
    },
    correct: 'A',
    explanation: {
      en: 'In a rectangular hyperbola, the transverse and conjugate semi-axes are equal (b = a). The eccentricity formula gives e = √(1 + b²/a²) = √(1 + 1) = √2.',
      pa: 'ਸਮਕੋਣੀ ਹਾਈਪਰਬੋਲਾ ਵਿੱਚ b = a ਹੁੰਦਾ ਹੈ। ਇਸ ਲਈ ਉਤਕੇਂਦਰਤਾ e = √(1 + a²/a²) = √2 ਹੁੰਦੀ ਹੈ।',
      hi: 'समकोणीय अतिपरवलय में b = a होता है। अतः उत्केंद्रता e = √(1 + a²/a²) = √2 होती है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Rectangular Hyperbola',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-cg-6',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the equation of the director circle of the ellipse x²/16 + y²/9 = 1?',
      pa: 'ਅੰਡਾਕਾਰ x²/16 + y²/9 = 1 ਦੇ ਡਾਇਰੈਕਟਰ ਚੱਕਰ (Director Circle) ਦੀ ਸਮੀਕਰਨ ਕੀ ਹੈ?',
      hi: 'दीर्घवृत्त x²/16 + y²/9 = 1 के नियामक वृत्त (Director Circle) का समीकरण क्या है?'
    },
    options: {
      A: { en: 'x² + y² = 25', pa: 'x² + y² = 25', hi: 'x² + y² = 25' },
      B: { en: 'x² + y² = 7', pa: 'x² + y² = 7', hi: 'x² + y² = 7' },
      C: { en: 'x² + y² = 16', pa: 'x² + y² = 16', hi: 'x² + y² = 16' },
      D: { en: 'x² + y² = 144', pa: 'x² + y² = 144', hi: 'x² + y² = 144' }
    },
    correct: 'A',
    explanation: {
      en: 'The director circle of an ellipse x²/a² + y²/b² = 1 is the locus of intersection of perpendicular tangents and has equation x² + y² = a² + b². Here a² = 16 and b² = 9, so x² + y² = 16 + 9 = 25.',
      pa: 'ਅੰਡਾਕਾਰ ਦੇ ਡਾਇਰੈਕਟਰ ਚੱਕਰ ਦੀ ਸਮੀਕਰਨ x² + y² = a² + b² ਹੁੰਦੀ ਹੈ। ਇੱਥੇ x² + y² = 16 + 9 = 25 ਹੈ।',
      hi: 'दीर्घवृत्त के नियामक वृत्त का समीकरण x² + y² = a² + b² होता है। यहाँ x² + y² = 16 + 9 = 25 है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Director Circle of Conics',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-cg-7',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'If a line in space has direction ratios proportional to 2, -1, -2, what are its direction cosines?',
      pa: 'ਜੇਕਰ ਸਪੇਸ ਵਿੱਚ ਇੱਕ ਰੇਖਾ ਦੇ ਦਿਸ਼ਾ ਅਨੁਪਾਤ 2, -1, -2 ਦੇ ਸਮਾਨੁਪਾਤੀ ਹਨ, ਤਾਂ ਇਸਦੇ ਦਿਸ਼ਾ ਕੋਸਾਈਨ ਕੀ ਹਨ?',
      hi: 'यदि अंतरिक्ष में एक रेखा के दिक-अनुपात 2, -1, -2 के समानुपाती हैं, तो इसकी दिक-कोज्याएँ क्या हैं?'
    },
    options: {
      A: { en: '2/3, -1/3, -2/3', pa: '2/3, -1/3, -2/3', hi: '2/3, -1/3, -2/3' },
      B: { en: '2/9, -1/9, -2/9', pa: '2/9, -1/9, -2/9', hi: '2/9, -1/9, -2/9' },
      C: { en: '2/√5, -1/√5, 0', pa: '2/√5, -1/√5, 0', hi: '2/√5, -1/√5, 0' },
      D: { en: '1/3, -2/3, 2/3', pa: '1/3, -2/3, 2/3', hi: '1/3, -2/3, 2/3' }
    },
    correct: 'A',
    explanation: {
      en: 'The magnitude is √(2² + (-1)² + (-2)²) = √(4 + 1 + 4) = √9 = 3. Dividing each ratio by magnitude yields l = 2/3, m = -1/3, n = -2/3 (satisfying l² + m² + n² = 4/9 + 1/9 + 4/9 = 1).',
      pa: 'ਮਾਪ √(4 + 1 + 4) = 3 ਹੈ। ਇਸ ਲਈ ਦਿਸ਼ਾ ਕੋਸਾਈਨ 2/3, -1/3, -2/3 ਹਨ।',
      hi: 'परिमाण √(4 + 1 + 4) = 3 है। अतः दिक-कोज्याएँ 2/3, -1/3, -2/3 हैं।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: '3D Geometry — Direction Cosines',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-cg-8',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the perpendicular distance from the point P(1, 2, 3) to the plane 2x - y + 2z + 3 = 0?',
      pa: 'ਬਿੰਦੂ P(1, 2, 3) ਤੋਂ ਸਮਤਲ 2x - y + 2z + 3 = 0 ਦੀ ਲੰਬ ਦੂਰੀ ਕੀ ਹੈ?',
      hi: 'बिंदु P(1, 2, 3) से समतल 2x - y + 2z + 3 = 0 की लंबवत दूरी क्या है?'
    },
    options: {
      A: { en: '3', pa: '3', hi: '3' },
      B: { en: '9', pa: '9', hi: '9' },
      C: { en: '2', pa: '2', hi: '2' },
      D: { en: '4', pa: '4', hi: '4' }
    },
    correct: 'A',
    explanation: {
      en: 'The formula for distance from (x₁, y₁, z₁) to Ax + By + Cz + D = 0 is d = |Ax₁ + By₁ + Cz₁ + D| / √(A² + B² + C²). Here d = |2(1) - 2 + 2(3) + 3| / √(2² + (-1)² + 2²) = |2 - 2 + 6 + 3| / √9 = 9 / 3 = 3.',
      pa: 'ਲੰਬ ਦੂਰੀ ਦਾ ਸੂਤਰ: d = |2(1) - 2 + 2(3) + 3| / √(4 + 1 + 4) = 9 / 3 = 3।',
      hi: 'लंबवत दूरी का सूत्र: d = |2(1) - 2 + 2(3) + 3| / √(4 + 1 + 4) = 9 / 3 = 3।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Planes in 3D Space',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-cg-9',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the necessary condition for the cone ax² + by² + cz² + 2fyz + 2gzx + 2hxy = 0 to possess three mutually perpendicular generators?',
      pa: 'ਸ਼ੰਕੂ ax² + by² + cz² + 2fyz + 2gzx + 2hxy = 0 ਦੇ ਤਿੰਨ ਪਰਸਪਰ ਲੰਬਵਤ ਜਨਰੇਟਰ ਹੋਣ ਲਈ ਕੀ ਸ਼ਰਤ ਲਾਜ਼ਮੀ ਹੈ?',
      hi: 'शंकु ax² + by² + cz² + 2fyz + 2gzx + 2hxy = 0 के तीन परस्पर लंबवत जनक होने का क्या आवश्यक प्रतिबंध है?'
    },
    options: {
      A: { en: 'a + b + c = 0', pa: 'a + b + c = 0', hi: 'a + b + c = 0' },
      B: { en: 'f + g + h = 0', pa: 'f + g + h = 0', hi: 'f + g + h = 0' },
      C: { en: 'abc + 2fgh = 0', pa: 'abc + 2fgh = 0', hi: 'abc + 2fgh = 0' },
      D: { en: 'a = b = c', pa: 'a = b = c', hi: 'a = b = c' }
    },
    correct: 'A',
    explanation: {
      en: 'A cone with vertex at the origin has three mutually perpendicular generators if and only if the sum of coefficients of x², y², and z² vanishes: a + b + c = 0.',
      pa: 'ਸ਼ੰਕੂ ਦੇ ਤਿੰਨ ਲੰਬਵਤ ਜਨਰੇਟਰ ਹੋਣ ਲਈ x², y² ਅਤੇ z² ਦੇ ਗੁਣਾਂਕਾਂ ਦਾ ਜੋੜ ਸਿਫ਼ਰ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ: a + b + c = 0।',
      hi: 'शंकु के तीन परस्पर लंबवत जनकों का अनिवार्य प्रतिबंध x², y² तथा z² के गुणांकों का योग शून्य होना है: a + b + c = 0।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Cones in 3D Space',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-cg-10',
    topicId: 'math-coordinate-solid-geometry',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the radius of the sphere x² + y² + z² - 2x + 4y - 6z - 11 = 0?',
      pa: 'ਗੋਲੇ x² + y² + z² - 2x + 4y - 6z - 11 = 0 ਦਾ ਅਰਧ-ਵਿਆਸ (Radius) ਕੀ ਹੈ?',
      hi: 'गोले x² + y² + z² - 2x + 4y - 6z - 11 = 0 की त्रिज्या क्या है?'
    },
    options: {
      A: { en: '5', pa: '5', hi: '5' },
      B: { en: '25', pa: '25', hi: '25' },
      C: { en: '√14', pa: '√14', hi: '√14' },
      D: { en: '4', pa: '4', hi: '4' }
    },
    correct: 'A',
    explanation: {
      en: 'Comparing with x² + y² + z² + 2ux + 2vy + 2wz + d = 0 gives u = -1, v = 2, w = -3, d = -11. Radius r = √(u² + v² + w² - d) = √((-1)² + 2² + (-3)² - (-11)) = √(1 + 4 + 9 + 11) = √25 = 5.',
      pa: 'ਅਰਧ-ਵਿਆਸ r = √(u² + v² + w² - d) = √(1 + 4 + 9 + 11) = √25 = 5 ਹੈ।',
      hi: 'त्रिज्या r = √(u² + v² + w² - d) = √(1 + 4 + 9 + 11) = √25 = 5 है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Spheres in 3D Space',
      url: 'https://educationrecruitmentboard.com/'
    }
  },

  // =========================================================================
  // TOPIC 6: PROBABILITY, STATISTICS & NUMERICAL METHODS (Q51 to Q60)
  // =========================================================================
  {
    id: 'q-mc-math-ps-1',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'If A and B are independent events with P(A) = 0.4 and P(B) = 0.5, what is the probability P(A ∪ B)?',
      pa: 'ਜੇਕਰ A ਅਤੇ B ਸੁਤੰਤਰ ਘਟਨਾਵਾਂ ਹਨ ਜਿੱਥੇ P(A) = 0.4 ਅਤੇ P(B) = 0.5 ਹੈ, ਤਾਂ ਸੰਭਾਵਨਾ P(A ∪ B) ਕੀ ਹੈ?',
      hi: 'यदि A तथा B स्वतंत्र घटनाएं हैं जहाँ P(A) = 0.4 तथा P(B) = 0.5 है, तो प्रायिकता P(A ∪ B) क्या है?'
    },
    options: {
      A: { en: '0.70', pa: '0.70', hi: '0.70' },
      B: { en: '0.90', pa: '0.90', hi: '0.90' },
      C: { en: '0.20', pa: '0.20', hi: '0.20' },
      D: { en: '0.60', pa: '0.60', hi: '0.60' }
    },
    correct: 'A',
    explanation: {
      en: 'Since A and B are independent, P(A ∩ B) = P(A) · P(B) = (0.4)(0.5) = 0.20. By the addition rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.20 = 0.70.',
      pa: 'ਸੁਤੰਤਰ ਘਟਨਾਵਾਂ ਲਈ P(A ∩ B) = 0.4 × 0.5 = 0.20 ਹੈ। P(A ∪ B) = 0.4 + 0.5 - 0.20 = 0.70।',
      hi: 'स्वतंत्र घटनाओं हेतु P(A ∩ B) = 0.4 × 0.5 = 0.20 है। P(A ∪ B) = 0.4 + 0.5 - 0.20 = 0.70।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Probability Axioms & Independent Events',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ps-2',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'Bag I contains 3 white and 2 red balls, and Bag II contains 2 white and 3 red balls. A bag is chosen at random with equal probability and a ball is drawn. If the drawn ball is white, what is the probability by Bayes’ Theorem that it came from Bag I?',
      pa: 'ਥੈਲਾ I ਵਿੱਚ 3 ਚਿੱਟੀਆਂ ਅਤੇ 2 ਲਾਲ ਗੇਂਦਾਂ ਹਨ, ਅਤੇ ਥੈਲਾ II ਵਿੱਚ 2 ਚਿੱਟੀਆਂ ਅਤੇ 3 ਲਾਲ ਗੇਂਦਾਂ ਹਨ। ਇੱਕ ਥੈਲਾ ਬਰਾਬਰ ਸੰਭਾਵਨਾ ਨਾਲ ਚੁਣਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇੱਕ ਗੇਂਦ ਕੱਢੀ ਜਾਂਦੀ ਹੈ। ਜੇਕਰ ਕੱਢੀ ਗਈ ਗੇਂਦ ਚਿੱਟੀ ਹੈ, ਤਾਂ ਬੇਅਸ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ ਇਸਦੇ ਥੈਲਾ I ਵਿੱਚੋਂ ਹੋਣ ਦੀ ਸੰਭਾਵਨਾ ਕੀ ਹੈ?',
      hi: 'थैले I में 3 सफेद व 2 लाल गेंदें हैं, तथा थैले II में 2 सफेद व 3 लाल गेंदें हैं। समान प्रायिकता से एक थैला चुनकर एक गेंद निकाली जाती है। यदि निकाली गई गेंद सफेद है, तो बेयस प्रमेय द्वारा इसके थैले I से होने की प्रायिकता क्या है?'
    },
    options: {
      A: { en: '3/5 (0.6)', pa: '3/5 (0.6)', hi: '3/5 (0.6)' },
      B: { en: '2/5 (0.4)', pa: '2/5 (0.4)', hi: '2/5 (0.4)' },
      C: { en: '1/2 (0.5)', pa: '1/2 (0.5)', hi: '1/2 (0.5)' },
      D: { en: '3/10 (0.3)', pa: '3/10 (0.3)', hi: '3/10 (0.3)' }
    },
    correct: 'A',
    explanation: {
      en: 'P(B₁) = P(B₂) = 1/2. P(W|B₁) = 3/5, P(W|B₂) = 2/5. By Bayes’ Theorem: P(B₁|W) = [P(B₁)P(W|B₁)] / [P(B₁)P(W|B₁) + P(B₂)P(W|B₂)] = [(1/2)(3/5)] / [(1/2)(3/5) + (1/2)(2/5)] = (3/10) / (5/10) = 3/5 = 0.6.',
      pa: 'ਬੇਅਸ ਪ੍ਰਮੇਯ ਅਨੁਸਾਰ: P(B₁|W) = (1/2 × 3/5) / (1/2 × 3/5 + 1/2 × 2/5) = (3/10) / (5/10) = 3/5 = 0.6 ਹੈ।',
      hi: 'बेयस प्रमेय से: P(B₁|W) = (1/2 × 3/5) / (1/2 × 3/5 + 1/2 × 2/5) = (3/10) / (5/10) = 3/5 = 0.6 है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Bayes’ Theorem & Conditional Probability',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ps-3',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'In a Binomial distribution B(n, p), the mean is 4 and the variance is 3. What is the value of n (number of trials)?',
      pa: 'ਇੱਕ ਦੋਪਦੀ ਵੰਡ B(n, p) ਵਿੱਚ ਮੱਧਮਾਨ 4 ਅਤੇ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ 3 ਹੈ। ਪਰੀਖਣਾਂ ਦੀ ਗਿਣਤੀ n ਦਾ ਮੁੱਲ ਕੀ ਹੈ?',
      hi: 'एक द्विपद वितरण B(n, p) में माध्य 4 तथा प्रसरण 3 है। परीक्षणों की संख्या n का मान क्या है?'
    },
    options: {
      A: { en: '16', pa: '16', hi: '16' },
      B: { en: '12', pa: '12', hi: '12' },
      C: { en: '8', pa: '8', hi: '8' },
      D: { en: '20', pa: '20', hi: '20' }
    },
    correct: 'A',
    explanation: {
      en: 'For Binomial distribution: Mean = np = 4 and Variance = npq = 3. Dividing gives q = 3/4. Since p + q = 1, p = 1 - 3/4 = 1/4. Substituting into mean: n(1/4) = 4 => n = 16.',
      pa: 'np = 4 ਅਤੇ npq = 3 ਹੈ। ਇਸ ਲਈ q = 3/4 => p = 1/4। n(1/4) = 4 => n = 16।',
      hi: 'np = 4 तथा npq = 3 है। अतः q = 3/4 => p = 1/4। n(1/4) = 4 => n = 16।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Binomial Distribution Parameters',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ps-4',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'For a Poisson distribution with parameter λ, if P(X = 0) = P(X = 1), what is the variance of the distribution?',
      pa: 'ਪੈਰਾਮੀਟਰ λ ਵਾਲੀ ਪੋਆਇਸਨ ਵੰਡ ਵਿੱਚ ਜੇਕਰ P(X = 0) = P(X = 1) ਹੋਵੇ, ਤਾਂ ਇਸ ਵੰਡ ਦੀ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ (Variance) ਕੀ ਹੈ?',
      hi: 'प्राचल λ वाले प्वासों वितरण में यदि P(X = 0) = P(X = 1) हो, तो वितरण का प्रसरण क्या है?'
    },
    options: {
      A: { en: '1', pa: '1', hi: '1' },
      B: { en: '2', pa: '2', hi: '2' },
      C: { en: '1/2', pa: '1/2', hi: '1/2' },
      D: { en: 'e', pa: 'e', hi: 'e' }
    },
    correct: 'A',
    explanation: {
      en: 'Poisson formula gives P(X = 0) = e^{-λ} and P(X = 1) = e^{-λ} λ. Equating them: e^{-λ} = e^{-λ} λ => λ = 1. In a Poisson distribution, Variance = λ = 1.',
      pa: 'P(X = 0) = e^{-λ} ਅਤੇ P(X = 1) = e^{-λ} λ। ਬਰਾਬਰ ਰੱਖਣ ਤੇ λ = 1। ਪੋਆਇਸਨ ਵੰਡ ਵਿੱਚ ਪਰਿਵਰਤਨਸ਼ੀਲਤਾ = λ = 1 ਹੁੰਦੀ ਹੈ।',
      hi: 'P(X = 0) = e^{-λ} तथा P(X = 1) = e^{-λ} λ। दोनों को बराबर रखने पर λ = 1। प्वासों वितरण में प्रसरण = λ = 1 होता है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Poisson Distribution Parameters',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ps-5',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'In a normal distribution N(μ, σ²), what percentage of total area under the curve lies within the range μ - 2σ to μ + 2σ?',
      pa: 'ਪ੍ਰਸਾਮਾਨਯ ਵੰਡ N(μ, σ²) ਵਿੱਚ ਵਕਰ ਦੇ ਹੇਠਾਂ ਦਾ ਕਿੰਨਾ ਪ੍ਰਤੀਸ਼ਤ ਖੇਤਰਫਲ μ - 2σ ਤੋਂ μ + 2σ ਦੇ ਵਿਚਕਾਰ ਆਉਂਦਾ ਹੈ?',
      hi: 'प्रसामान्य वितरण N(μ, σ²) में वक्र के अंतर्गत कुल क्षेत्रफल का कितना प्रतिशत μ - 2σ से μ + 2σ के मध्य स्थित होता है?'
    },
    options: {
      A: { en: '95.44%', pa: '95.44%', hi: '95.44%' },
      B: { en: '68.27%', pa: '68.27%', hi: '68.27%' },
      C: { en: '99.73%', pa: '99.73%', hi: '99.73%' },
      D: { en: '90.00%', pa: '90.00%', hi: '90.00%' }
    },
    correct: 'A',
    explanation: {
      en: 'By the empirical rule for normal distributions: μ ± 1σ covers 68.27%, μ ± 2σ covers 95.44%, and μ ± 3σ covers 99.73% of the total area.',
      pa: 'ਪ੍ਰਸਾਮਾਨਯ ਵੰਡ ਦੇ ਨਿਯਮ ਅਨੁਸਾਰ: μ ± 1σ ਲਈ 68.27%, μ ± 2σ ਲਈ 95.44%, ਅਤੇ μ ± 3σ ਲਈ 99.73% ਹੁੰਦਾ ਹੈ।',
      hi: 'प्रसामान्य वितरण के अनुभवजन्य नियम से: μ ± 1σ हेतु 68.27%, μ ± 2σ हेतु 95.44% तथा μ ± 3σ हेतु 99.73% क्षेत्रफल होता है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Normal Distribution Properties',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ps-6',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'If the two linear regression coefficients are b_yx = 0.8 and b_xy = 0.45, what is Karl Pearson’s correlation coefficient r?',
      pa: 'ਜੇਕਰ ਦੋ ਰਿਗਰੈਸ਼ਨ ਗੁਣਾਂਕ b_yx = 0.8 ਅਤੇ b_xy = 0.45 ਹੋਣ, ਤਾਂ ਕਾਰਲ ਪੀਅਰਸਨ ਦਾ ਕੋਰੀਲੇਸ਼ਨ ਗੁਣਾਂਕ r ਕੀ ਹੈ?',
      hi: 'यदि दो समाश्रयण गुणांक b_yx = 0.8 तथा b_xy = 0.45 हों, तो कार्ल पियर्सन का सहसंबंध गुणांक r क्या है?'
    },
    options: {
      A: { en: '0.60', pa: '0.60', hi: '0.60' },
      B: { en: '0.36', pa: '0.36', hi: '0.36' },
      C: { en: '0.72', pa: '0.72', hi: '0.72' },
      D: { en: '0.50', pa: '0.50', hi: '0.50' }
    },
    correct: 'A',
    explanation: {
      en: 'The fundamental relation between correlation and regression coefficients is r² = b_yx · b_xy. Since both coefficients are positive, r = +√(0.8 × 0.45) = +√0.36 = 0.60.',
      pa: 'ਸੂਤਰ r = √(b_yx · b_xy) = √(0.8 × 0.45) = √0.36 = 0.60 ਹੈ।',
      hi: 'सूत्र r = √(b_yx · b_xy) = √(0.8 × 0.45) = √0.36 = 0.60 है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Correlation & Linear Regression',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ps-7',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'At which point do the two linear regression lines Y on X and X on Y always intersect?',
      pa: 'ਦੋਵੇਂ ਰਿਗਰੈਸ਼ਨ ਰੇਖਾਵਾਂ (Y on X ਅਤੇ X on Y) ਹਮੇਸ਼ਾ ਕਿਸ ਬਿੰਦੂ ਉੱਤੇ ਆਪਸ ਵਿੱਚ ਕੱਟਦੀਆਂ ਹਨ?',
      hi: 'दोनों समाश्रयण रेखाएँ (Y on X तथा X on Y) सदैव किस बिंदु पर प्रतिच्छेद करती हैं?'
    },
    options: {
      A: { en: '(X̄, Ȳ) (Point of means)', pa: '(X̄, Ȳ) (ਮੱਧਮਾਨ ਬਿੰਦੂ)', hi: '(X̄, Ȳ) (माध्य बिंदु)' },
      B: { en: '(0, 0) (Origin)', pa: '(0, 0) (ਮੂਲ ਬਿੰਦੂ)', hi: '(0, 0) (मूल बिंदु)' },
      C: { en: '(σ_x, σ_y)', pa: '(σ_x, σ_y)', hi: '(σ_x, σ_y)' },
      D: { en: '(1, 1)', pa: '(1, 1)', hi: '(1, 1)' }
    },
    correct: 'A',
    explanation: {
      en: 'The equations of the regression lines are Y - Ȳ = b_yx(X - X̄) and X - X̄ = b_xy(Y - Ȳ). Substituting X = X̄ and Y = Ȳ satisfies both equations simultaneously. Hence they always intersect at (X̄, Ȳ).',
      pa: 'ਦੋਵੇਂ ਰਿਗਰੈਸ਼ਨ ਰੇਖਾਵਾਂ ਮੱਧਮਾਨ ਬਿੰਦੂ (X̄, Ȳ) ਵਿੱਚੋਂ ਲੰਘਦੀਆਂ ਹਨ, ਇਸ ਲਈ ਉਹ ਇਸੇ ਬਿੰਦੂ ਉੱਤੇ ਕੱਟਦੀਆਂ ਹਨ।',
      hi: 'दोनों समाश्रयण रेखाएँ माध्य बिंदु (X̄, Ȳ) से होकर गुजरती हैं, अतः वे सदैव इसी बिंदु पर प्रतिच्छेद करती हैं।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Regression Lines Intersection',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ps-8',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What is the theoretical order of convergence of the Newton-Raphson method for finding a simple real root of f(x) = 0?',
      pa: 'f(x) = 0 ਦੇ ਸਾਧਾਰਨ ਵਾਸਤਵਿਕ ਮੂਲ ਨੂੰ ਲੱਭਣ ਲਈ ਨਿਊਟਨ-ਰੈਫਸਨ ਵਿਧੀ ਦੀ ਅਭਿਸਾਰਿਤਾ ਦਾ ਸਿਧਾਂਤਕ ਆਰਡਰ (Order of Convergence) ਕੀ ਹੈ?',
      hi: 'f(x) = 0 के सरल वास्तविक मूल को ज्ञात करने हेतु न्यूटन-रैफसन विधि के अभिसरण की सैद्धांतिक कोटि क्या है?'
    },
    options: {
      A: { en: '2 (Quadratic convergence)', pa: '2 (ਦੋ-ਘਾਤੀ ਅਭਿਸਾਰਿਤਾ)', hi: '2 (द्विघाती अभिसरण)' },
      B: { en: '1 (Linear convergence)', pa: '1 (ਰੇਖੀ ਅਭਿਸਾਰਿਤਾ)', hi: '1 (रैखिक अभिसरण)' },
      C: { en: '1.618 (Golden ratio / Secant)', pa: '1.618', hi: '1.618' },
      D: { en: '3 (Cubic convergence)', pa: '3 (ਤਿੰਨ-ਘਾਤੀ ਅਭਿਸਾਰਿਤਾ)', hi: '3 (त्रिघाती अभिसरण)' }
    },
    correct: 'A',
    explanation: {
      en: 'For a simple root r where f′(r) ≠ 0, the Taylor error expansion gives e_{n+1} ≈ [f″(r) / (2f′(r))] e_n². The exponent of e_n is 2, confirming that Newton-Raphson has quadratic convergence (order p = 2).',
      pa: 'ਨਿਊਟਨ-ਰੈਫਸਨ ਵਿਧੀ ਵਿੱਚ ਗ਼ਲਤੀ e_{n+1} ∝ e_n² ਹੁੰਦੀ ਹੈ। ਇਸ ਲਈ ਇਸਦਾ ਆਰਡਰ 2 (Quadratic) ਹੁੰਦਾ ਹੈ।',
      hi: 'न्यूटन-रैफसन विधि में त्रुटि e_{n+1} ∝ e_n² होती है। अतः इसका अभिसरण द्विघाती (कोटि p = 2) होता है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Numerical Methods — Newton-Raphson Convergence',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ps-9',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What constraint must the number of subintervals n satisfy in order to apply Simpson’s 1/3 rule for numerical integration?',
      pa: 'ਸੰਖਿਆਤਮਕ ਸਮਾਕਲਨ ਲਈ ਸਿੰਪਸਨ ਦੇ 1/3 ਨਿਯਮ ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਅੰਤਰਾਲਾਂ ਦੀ ਗਿਣਤੀ n ਲਈ ਕੀ ਸ਼ਰਤ ਲਾਜ਼ਮੀ ਹੈ?',
      hi: 'संख्यात्मक समाकलन हेतु सिम्पसन 1/3 नियम लागू करने के लिए उप-अंतरालों की संख्या n पर क्या प्रतिबंध है?'
    },
    options: {
      A: { en: 'n must be an even integer (multiple of 2)', pa: 'n ਦਾ ਇੱਕ ਜਿਸਤ ਸੰਖਿਆ (2 ਦਾ ਗੁਣਜ) ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ', hi: 'n का सम पूर्णांक (2 का गुणज) होना अनिवार्य है' },
      B: { en: 'n must be an odd integer', pa: 'n ਦਾ ਇੱਕ ਟਾਂਕ ਸੰਖਿਆ ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ', hi: 'n का विषम पूर्णांक होना अनिवार्य है' },
      C: { en: 'n must be a multiple of 3', pa: 'n ਦਾ 3 ਦਾ ਗੁਣਜ ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ', hi: 'n का 3 का गुणज होना अनिवार्य है' },
      D: { en: 'n must be a prime number', pa: 'n ਦਾ ਅਭਾਜ ਸੰਖਿਆ ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ', hi: 'n का अभाज्य संख्या होना अनिवार्य है' }
    },
    correct: 'A',
    explanation: {
      en: 'Simpson’s 1/3 rule fits parabolic arcs across pairs of adjacent subintervals. Therefore, the interval [a, b] must be divided into an EVEN number of subintervals n (corresponding to an odd number of ordinates n + 1).',
      pa: 'ਸਿੰਪਸਨ 1/3 ਨਿਯਮ ਦੋ-ਦੋ ਅੰਤਰਾਲਾਂ ਦੇ ਜੋੜਿਆਂ ਉੱਤੇ ਲਾਗੂ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ n ਦਾ ਜਿਸਤ (Even) ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ।',
      hi: 'सिम्पसन 1/3 नियम दो-दो अंतरालों के युग्मों पर लागू होता है, अतः n का सम (Even) होना अनिवार्य है।'
    },
    difficulty: 'easy',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Numerical Integration — Simpson’s 1/3 Rule',
      url: 'https://educationrecruitmentboard.com/'
    }
  },
  {
    id: 'q-mc-math-ps-10',
    topicId: 'math-prob-stats-numerical',
    subjectId: 'mathematics',
    examId: 'punjab-master-cadre-math',
    examTag: 'Punjab Master Cadre Mathematics',
    question: {
      en: 'What constraint must the number of subintervals n satisfy in Simpson’s 3/8 rule, and for what maximum degree of polynomials is it exact?',
      pa: 'ਸਿੰਪਸਨ ਦੇ 3/8 ਨਿਯਮ ਵਿੱਚ ਅੰਤਰਾਲਾਂ ਦੀ ਗਿਣਤੀ n ਲਈ ਕੀ ਸ਼ਰਤ ਹੈ ਅਤੇ ਇਹ ਕਿੰਨੀ ਅਧਿਕਤਮ ਘਾਤ ਦੇ ਬਹੁਪਦਾਂ ਲਈ ਬਿਲਕੁਲ ਸਹੀ ਮੁੱਲ ਦਿੰਦਾ ਹੈ?',
      hi: 'सिम्पसन 3/8 नियम में उप-अंतरालों की संख्या n पर क्या प्रतिबंध है, तथा यह किस अधिकतम घात तक के बहुपदों हेतु यथार्थ मान देता है?'
    },
    options: {
      A: { en: 'n is a multiple of 3; exact for polynomials up to degree 3', pa: 'n, 3 ਦਾ ਗੁਣਜ ਹੋਵੇ; 3 ਘਾਤ ਤੱਕ ਦੇ ਬਹੁਪਦਾਂ ਲਈ ਸਹੀ', hi: 'n, 3 का गुणज हो; घात 3 तक के बहुपदों हेतु यथार्थ' },
      B: { en: 'n is an even integer; exact for polynomials up to degree 4', pa: 'n ਜਿਸਤ ਹੋਵੇ; 4 ਘਾਤ ਤੱਕ ਲਈ ਸਹੀ', hi: 'n सम हो; घात 4 तक हेतु यथार्थ' },
      C: { en: 'n is a multiple of 8; exact for polynomials up to degree 2', pa: 'n, 8 ਦਾ ਗੁਣਜ ਹੋਵੇ; 2 ਘਾਤ ਲਈ ਸਹੀ', hi: 'n, 8 का गुणज हो; घात 2 हेतु यथार्थ' },
      D: { en: 'n is any integer; exact for polynomials up to degree 1', pa: 'n ਕੋਈ ਵੀ ਹੋਵੇ; 1 ਘਾਤ ਲਈ ਸਹੀ', hi: 'n कोई भी हो; घात 1 हेतु यथार्थ' }
    },
    correct: 'A',
    explanation: {
      en: 'Simpson’s 3/8 rule approximates groups of 3 subintervals using cubic polynomials. It strictly requires n to be a multiple of 3 and gives exact results for polynomials up to degree 3 (cubic).',
      pa: 'ਸਿੰਪਸਨ 3/8 ਨਿਯਮ ਲਈ n ਦਾ 3 ਦਾ ਗੁਣਜ ਹੋਣਾ ਲਾਜ਼ਮੀ ਹੈ ਅਤੇ ਇਹ 3 ਘਾਤ (Cubic) ਤੱਕ ਦੇ ਬਹੁਪਦਾਂ ਲਈ ਸਹੀ ਮੁੱਲ ਦਿੰਦਾ ਹੈ।',
      hi: 'सिम्पसन 3/8 नियम हेतु n का 3 का गुणज होना अनिवार्य है तथा यह 3 घात (त्रिघातीय) तक के बहुपदों हेतु यथार्थ परिणाम देता है।'
    },
    difficulty: 'medium',
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: ['en', 'pa', 'hi'],
    explanationLanguages: ['en', 'pa', 'hi'],
    rightsProvenance: {
      source: 'Punjab Master Cadre Mathematics Official Curriculum',
      accessType: 'educational-original',
      verifiedBy: 'ExamSathi Mathematics Academic Audit Team',
      verifiedDate: '2026-10-14'
    },
    source: {
      title: 'Numerical Integration — Simpson’s 3/8 Rule',
      url: 'https://educationrecruitmentboard.com/'
    }
  }
];


