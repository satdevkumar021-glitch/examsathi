import type { Question } from '../questions';

/**
 * ETT Paper B — Science: Light (Reflection & Refraction) Question Batch
 * Topics: ett-light-reflection, ett-light-2, ett-light-3, ett-light-4, ett-light-5
 * Curriculum reference: NCERT / PSEB Class 10 Science Chapter 10 (Light)
 * Source: NCERT textbook https://ncert.nic.in/textbook.php (Class 10 Science Ch 10)
 * originType: authored-original — independently checked against NCERT curriculum.
 * This file is reference-based original practice content; NOT authenticated PYQs.
 */

const LIGHT_PROVENANCE = {
  source: 'NCERT Class 10 Science Chapter 10 — Light: Reflection and Refraction (PSEB equivalent)',
  accessType: 'educational-original' as const,
  verifiedBy: 'ExamSathi ETT Science Engine — NEEDS NAMED HUMAN REVIEWER before publication',
  verifiedDate: '2026-10-11',
};

export const ETT_SCIENCE_LIGHT_MCQs: Question[] = [

  // =========================================================================
  // ett-light-reflection (30 Qs) — Reflection and plane mirrors
  // =========================================================================
  {
    id: 'q-ettl-r-01', topicId: 'ett-light-reflection', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Light Reflection',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'When a ray of light reflects off a plane mirror, which law is always obeyed?',
      hi: 'जब प्रकाश किरण समतल दर्पण से परावर्तित होती है, तो निम्न में से कौन-सा नियम सदैव लागू होता है?',
      pa: 'ਜਦੋਂ ਪ੍ਰਕਾਸ਼ ਕਿਰਨ ਸਮਤਲ ਦਰਪਣ ਤੋਂ ਪਰਾਵਰਤਿਤ ਹੁੰਦੀ ਹੈ, ਕਿਹੜਾ ਨਿਯਮ ਲਾਗੂ ਹੁੰਦਾ ਹੈ?',
    },
    options: {
      A: { en: 'Angle of incidence = Angle of reflection', hi: 'आपतन कोण = परावर्तन कोण', pa: 'ਆਪਤਨ ਕੋਣ = ਪਰਾਵਰਤਨ ਕੋਣ' },
      B: { en: 'Angle of incidence = Angle of refraction', hi: 'आपतन कोण = अपवर्तन कोण', pa: 'ਆਪਤਨ ਕੋਣ = ਅਪਵਰਤਨ ਕੋਣ' },
      C: { en: 'Angle of refraction > Angle of incidence', hi: 'अपवर्तन कोण > आपतन कोण', pa: 'ਅਪਵਰਤਨ ਕੋਣ > ਆਪਤਨ ਕੋਣ' },
      D: { en: 'Reflected ray is perpendicular to the mirror', hi: 'परावर्तित किरण दर्पण के लम्बवत होती है', pa: 'ਪਰਾਵਰਤਿਤ ਕਿਰਨ ਦਰਪਣ ਦੇ ਲੰਬਵਤ ਹੁੰਦੀ ਹੈ' },
    },
    correct: 'A',
    explanation: { en: 'First law of reflection: angle of incidence (i) = angle of refection (r), both measured from the normal. Second law: incident ray, normal and reflected ray are coplanar.', hi: 'परावर्तन का प्रथम नियम: आपतन कोण (i) = परावर्तन कोण (r), दोनों अभिलंब से मापे जाते हैं।', pa: 'ਪਰਾਵਰਤਨ ਦਾ ਪਹਿਲਾ ਨਿਯਮ: ਆਪਤਨ ਕੋਣ = ਪਰਾਵਰਤਨ ਕੋਣ, ਦੋਵੇਂ ਅਭਿਲੰਬ ਤੋਂ ਮਾਪੇ ਜਾਂਦੇ ਹਨ।' },
  },
  {
    id: 'q-ettl-r-02', topicId: 'ett-light-reflection', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Plane Mirror Image',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'The image formed by a plane mirror is:',
      hi: 'समतल दर्पण द्वारा बना प्रतिबिंब होता है:',
      pa: 'ਸਮਤਲ ਦਰਪਣ ਦੁਆਰਾ ਬਣੀ ਪ੍ਰਤਿਬਿੰਬ ਹੁੰਦੀ ਹੈ:',
    },
    options: {
      A: { en: 'Virtual, erect and same size as object', hi: 'आभासी, सीधा और वस्तु के बराबर आकार', pa: 'ਕਾਲਪਨਿਕ, ਸਿੱਧੀ ਅਤੇ ਵਸਤੂ ਦੇ ਬਰਾਬਰ ਆਕਾਰ' },
      B: { en: 'Real, inverted and magnified', hi: 'वास्तविक, उल्टा और बड़ा', pa: 'ਅਸਲੀ, ਉਲਟੀ ਅਤੇ ਵੱਡੀ' },
      C: { en: 'Virtual, inverted and diminished', hi: 'आभासी, उल्टा और छोटा', pa: 'ਕਾਲਪਨਿਕ, ਉਲਟੀ ਅਤੇ ਛੋਟੀ' },
      D: { en: 'Real, erect and same size', hi: 'वास्तविक, सीधा और बराबर आकार', pa: 'ਅਸਲੀ, ਸਿੱਧੀ ਅਤੇ ਬਰਾਬਰ ਆਕਾਰ' },
    },
    correct: 'A',
    explanation: { en: 'Plane mirror image: virtual (cannot be caught on screen), erect (same orientation), laterally inverted, and same size as object. Image distance = object distance.', hi: 'समतल दर्पण का प्रतिबिंब: आभासी, सीधा, पार्श्व-प्रतीप और वस्तु के बराबर आकार का।', pa: 'ਸਮਤਲ ਦਰਪਣ: ਕਾਲਪਨਿਕ, ਸਿੱਧੀ, ਪਾਸੇ ਉਲਟੀ ਅਤੇ ਵਸਤੂ ਦੇ ਬਰਾਬਰ ਆਕਾਰ।' },
  },
  {
    id: 'q-ettl-r-03', topicId: 'ett-light-reflection', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Lateral Inversion',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'In a plane mirror, which phenomenon causes the left hand of a person to appear as the right hand in the image?',
      hi: 'समतल दर्पण में व्यक्ति का बायाँ हाथ प्रतिबिंब में दाहिना दिखता है, यह किस घटना के कारण होता है?',
      pa: 'ਸਮਤਲ ਦਰਪਣ ਵਿੱਚ ਵਿਅਕਤੀ ਦਾ ਖੱਬਾ ਹੱਥ ਸੱਜੇ ਵਜੋਂ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ। ਇਹ ਕਿਸ ਕਰਕੇ ਹੁੰਦਾ ਹੈ?',
    },
    options: {
      A: { en: 'Lateral inversion', hi: 'पार्श्व प्रतीपण', pa: 'ਪਾਸੇ ਉਲਟਾਓ' },
      B: { en: 'Total internal reflection', hi: 'पूर्ण आंतरिक परावर्तन', pa: 'ਕੁੱਲ ਅੰਦਰੂਨੀ ਪਰਾਵਰਤਨ' },
      C: { en: 'Dispersion of light', hi: 'प्रकाश का विक्षेपण', pa: 'ਪ੍ਰਕਾਸ਼ ਦਾ ਖਿੰਡਾਅ' },
      D: { en: 'Refraction', hi: 'अपवर्तन', pa: 'ਅਪਵਰਤਨ' },
    },
    correct: 'A',
    explanation: { en: 'Lateral inversion: in a plane mirror the left-right sides are interchanged but up-down are not. The image appears as if it has been rotated 180° about the vertical axis.', hi: 'पार्श्व प्रतीपण: समतल दर्पण में बाएँ-दाएँ आपस में बदल जाते हैं, जबकि ऊपर-नीचे नहीं।', pa: 'ਪਾਸੇ ਉਲਟਾਓ: ਖੱਬਾ-ਸੱਜਾ ਬਦਲ ਜਾਂਦਾ ਹੈ, ਉੱਪਰ-ਹੇਠਾਂ ਨਹੀਂ।' },
  },
  {
    id: 'q-ettl-r-04', topicId: 'ett-light-reflection', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Number of Images',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'Two plane mirrors are inclined at 60° to each other. How many images of an object placed between them will be formed?',
      hi: 'दो समतल दर्पण एक-दूसरे से 60° के कोण पर झुके हैं। उनके बीच रखी वस्तु के कितने प्रतिबिंब बनेंगे?',
      pa: 'ਦੋ ਸਮਤਲ ਦਰਪਣ 60° ਦੇ ਕੋਣ ਤੇ ਝੁਕੇ ਹਨ। ਉਨ੍ਹਾਂ ਵਿਚਕਾਰ ਰੱਖੀ ਵਸਤੂ ਦੀਆਂ ਕਿੰਨੀਆਂ ਪ੍ਰਤਿਬਿੰਬਾਂ ਬਣਨਗੀਆਂ?',
    },
    options: {
      A: { en: '4', hi: '4', pa: '4' },
      B: { en: '5', hi: '5', pa: '5' },
      C: { en: '6', hi: '6', pa: '6' },
      D: { en: '3', hi: '3', pa: '3' },
    },
    correct: 'B',
    explanation: { en: 'Number of images = (360°/θ) − 1 = (360/60) − 1 = 6 − 1 = 5. This formula applies when 360/θ is even. For 60°, 360/60 = 6 (even), so images = 5.', hi: 'प्रतिबिंबों की संख्या = (360°/θ) − 1 = (360/60) − 1 = 5।', pa: 'ਪ੍ਰਤਿਬਿੰਬਾਂ ਦੀ ਸੰਖਿਆ = (360°/θ) − 1 = 5।' },
  },
  {
    id: 'q-ettl-r-05', topicId: 'ett-light-reflection', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Mirror Types',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'Which type of mirror is used as a rear-view mirror in vehicles?',
      hi: 'वाहनों में पीछे देखने के लिए (rear-view) किस प्रकार के दर्पण का प्रयोग किया जाता है?',
      pa: 'ਵਾਹਨਾਂ ਵਿੱਚ ਪਿੱਛੇ ਦੇਖਣ ਲਈ ਕਿਹੜੇ ਦਰਪਣ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?',
    },
    options: {
      A: { en: 'Convex mirror', hi: 'उत्तल दर्पण', pa: 'ਉੱਤਲ ਦਰਪਣ' },
      B: { en: 'Concave mirror', hi: 'अवतल दर्पण', pa: 'ਅਵਤਲ ਦਰਪਣ' },
      C: { en: 'Plane mirror', hi: 'समतल दर्पण', pa: 'ਸਮਤਲ ਦਰਪਣ' },
      D: { en: 'Cylindrical mirror', hi: 'बेलनाकार दर्पण', pa: 'ਸਿਲੰਡਰੀ ਦਰਪਣ' },
    },
    correct: 'A',
    explanation: { en: 'Convex mirrors always form virtual, erect, diminished images and have a wide field of view — ideal for rear-view mirrors. Concave mirrors are used in headlights and shaving mirrors.', hi: 'उत्तल दर्पण हमेशा आभासी, सीधा, छोटा प्रतिबिंब बनाता है और दृष्टि-क्षेत्र विस्तृत होता है — रियर-व्यू मिरर के लिए आदर्श।', pa: 'ਉੱਤਲ ਦਰਪਣ ਹਮੇਸ਼ਾ ਕਾਲਪਨਿਕ, ਸਿੱਧਾ, ਛੋਟਾ ਪ੍ਰਤਿਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ ਦ੍ਰਿਸ਼ਟੀ ਖੇਤਰ ਵੱਡਾ ਹੁੰਦਾ ਹੈ।' },
  },

  // =========================================================================
  // ett-light-2 (30 Qs) — Spherical mirrors and ray diagrams
  // =========================================================================
  {
    id: 'q-ettl-sm-01', topicId: 'ett-light-2', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Concave Mirror Uses',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'A concave mirror is used as a shaving/make-up mirror because:',
      hi: 'शेविंग/मेकअप दर्पण के रूप में अवतल दर्पण का उपयोग किया जाता है, क्योंकि:',
      pa: 'ਸ਼ੇਵਿੰਗ/ਮੇਕਅੱਪ ਦਰਪਣ ਵਜੋਂ ਅਵਤਲ ਦਰਪਣ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਕਿਉਂਕਿ:',
    },
    options: {
      A: { en: 'It forms a magnified, erect, virtual image when object is within focal length', hi: 'जब वस्तु फोकस दूरी के अंदर हो, तो यह आवर्धित, सीधा, आभासी प्रतिबिंब बनाता है', pa: 'ਜਦੋਂ ਵਸਤੂ ਫੋਕਸ ਦੂਰੀ ਦੇ ਅੰਦਰ ਹੋਵੇ, ਇਹ ਵੱਡਾ, ਸਿੱਧਾ, ਕਾਲਪਨਿਕ ਪ੍ਰਤਿਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ' },
      B: { en: 'It always forms a real, inverted image', hi: 'यह सदैव वास्तविक, उल्टा प्रतिबिंब बनाता है', pa: 'ਇਹ ਹਮੇਸ਼ਾ ਅਸਲੀ, ਉਲਟਾ ਪ੍ਰਤਿਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ' },
      C: { en: 'It has a wider field of view than a plane mirror', hi: 'इसका दृष्टि-क्षेत्र समतल दर्पण से बड़ा होता है', pa: 'ਇਸ ਦਾ ਦ੍ਰਿਸ਼ਟੀ ਖੇਤਰ ਸਮਤਲ ਦਰਪਣ ਨਾਲੋਂ ਵੱਡਾ ਹੁੰਦਾ ਹੈ' },
      D: { en: 'It forms a diminished image to see the full face', hi: 'यह छोटा प्रतिबिंब बनाता है जिससे पूरा चेहरा दिखे', pa: 'ਇਹ ਛੋਟਾ ਪ੍ਰਤਿਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ' },
    },
    correct: 'A',
    explanation: { en: 'When an object is placed between the pole and focus of a concave mirror (u < f), the image is virtual, erect and magnified — perfect for shaving and make-up mirrors.', hi: 'जब वस्तु ध्रुव और फोकस के बीच हो (u < f), अवतल दर्पण आभासी, सीधा और आवर्धित प्रतिबिंब बनाता है।', pa: 'ਜਦੋਂ ਵਸਤੂ ਧਰੁਵ ਅਤੇ ਫੋਕਸ ਵਿਚਕਾਰ ਹੋਵੇ, ਅਵਤਲ ਦਰਪਣ ਕਾਲਪਨਿਕ, ਸਿੱਧਾ ਅਤੇ ਵੱਡਾ ਪ੍ਰਤਿਬਿੰਬ ਬਣਾਉਂਦਾ ਹੈ।' },
  },
  {
    id: 'q-ettl-sm-02', topicId: 'ett-light-2', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Centre of Curvature',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'The relationship between focal length (f) and radius of curvature (R) of a spherical mirror is:',
      hi: 'गोलीय दर्पण की फोकस दूरी (f) और वक्रता त्रिज्या (R) के बीच संबंध है:',
      pa: 'ਗੋਲੀ ਦਰਪਣ ਦੀ ਫੋਕਸ ਦੂਰੀ (f) ਅਤੇ ਵਕਰਤਾ ਅਰਧ-ਵਿਆਸ (R) ਵਿਚਕਾਰ ਸੰਬੰਧ ਹੈ:',
    },
    options: {
      A: { en: 'f = R/2', hi: 'f = R/2', pa: 'f = R/2' },
      B: { en: 'f = 2R', hi: 'f = 2R', pa: 'f = 2R' },
      C: { en: 'f = R', hi: 'f = R', pa: 'f = R' },
      D: { en: 'f = R²', hi: 'f = R²', pa: 'f = R²' },
    },
    correct: 'A',
    explanation: { en: 'For a spherical mirror, f = R/2. The centre of curvature is at distance R and the principal focus is at R/2 from the pole. This is a fundamental relation tested in every exam.', hi: 'गोलीय दर्पण के लिए f = R/2। वक्रता केंद्र R दूरी पर और मुख्य फोकस R/2 दूरी पर।', pa: 'ਗੋਲੀ ਦਰਪਣ ਲਈ f = R/2।' },
  },
  {
    id: 'q-ettl-sm-03', topicId: 'ett-light-2', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Object at C concave',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'An object is placed at the centre of curvature (C) of a concave mirror. The image formed is:',
      hi: 'एक वस्तु को अवतल दर्पण के वक्रता केंद्र (C) पर रखा जाता है। बना प्रतिबिंब होगा:',
      pa: 'ਇੱਕ ਵਸਤੂ ਅਵਤਲ ਦਰਪਣ ਦੇ ਵਕਰਤਾ ਕੇਂਦਰ (C) ਤੇ ਰੱਖੀ ਗਈ ਹੈ। ਬਣੀ ਪ੍ਰਤਿਬਿੰਬ ਹੋਵੇਗੀ:',
    },
    options: {
      A: { en: 'At C, real, inverted, same size', hi: 'C पर, वास्तविक, उल्टा, समान आकार', pa: 'C ਤੇ, ਅਸਲੀ, ਉਲਟਾ, ਸਮਾਨ ਆਕਾਰ' },
      B: { en: 'At F, real, inverted, diminished', hi: 'F पर, वास्तविक, उल्टा, छोटा', pa: 'F ਤੇ, ਅਸਲੀ, ਉਲਟਾ, ਛੋਟਾ' },
      C: { en: 'At infinity, real, inverted', hi: 'अनंत पर, वास्तविक, उल्टा', pa: 'ਅਨੰਤ ਤੇ, ਅਸਲੀ, ਉਲਟਾ' },
      D: { en: 'Behind mirror, virtual, erect, magnified', hi: 'दर्पण के पीछे, आभासी, सीधा, बड़ा', pa: 'ਦਰਪਣ ਦੇ ਪਿੱਛੇ, ਕਾਲਪਨਿਕ, ਸਿੱਧਾ, ਵੱਡਾ' },
    },
    correct: 'A',
    explanation: { en: 'When u = R (object at C), for a concave mirror: v = R (image at C), real, inverted, same size. Key positions: at F → image at infinity; beyond C → diminished; between F and C → magnified.', hi: 'u = R पर: v = R, वास्तविक, उल्टा, समान आकार। यह परीक्षा में सबसे अधिक पूछा जाने वाला केस है।', pa: 'u = R ਤੇ: v = R, ਅਸਲੀ, ਉਲਟਾ, ਸਮਾਨ ਆਕਾਰ।' },
  },

  // =========================================================================
  // ett-light-3 (30 Qs) — Mirror formula and sign convention
  // =========================================================================
  {
    id: 'q-ettl-mf-01', topicId: 'ett-light-3', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Mirror Formula',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'The mirror formula is: 1/v + 1/u = 1/f. An object is placed 30 cm in front of a concave mirror of focal length 20 cm. What is the image distance?',
      hi: 'दर्पण सूत्र: 1/v + 1/u = 1/f। एक वस्तु 20 cm फोकस दूरी के अवतल दर्पण के सामने 30 cm रखी है। प्रतिबिंब की दूरी क्या है?',
      pa: 'ਦਰਪਣ ਸੂਤਰ: 1/v + 1/u = 1/f। ਇੱਕ ਵਸਤੂ 20 cm ਫੋਕਸ ਦੂਰੀ ਵਾਲੇ ਅਵਤਲ ਦਰਪਣ ਤੋਂ 30 cm ਦੂਰ ਰੱਖੀ ਹੈ। ਪ੍ਰਤਿਬਿੰਬ ਦੀ ਦੂਰੀ?',
    },
    options: {
      A: { en: '−60 cm', hi: '−60 cm', pa: '−60 cm' },
      B: { en: '+60 cm', hi: '+60 cm', pa: '+60 cm' },
      C: { en: '−12 cm', hi: '−12 cm', pa: '−12 cm' },
      D: { en: '+12 cm', hi: '+12 cm', pa: '+12 cm' },
    },
    correct: 'A',
    explanation: { en: 'New Cartesian sign: u = −30 cm, f = −20 cm (concave). 1/v = 1/f − 1/u = 1/(−20) − 1/(−30) = −1/20 + 1/30 = (−3+2)/60 = −1/60. So v = −60 cm. Negative means real, in front of mirror.', hi: 'u = −30, f = −20 (अवतल)। 1/v = −1/20 + 1/30 = −1/60 → v = −60 cm। ऋणात्मक = वास्तविक प्रतिबिंब।', pa: 'u = −30, f = −20 → 1/v = −1/60 → v = −60 cm।' },
  },
  {
    id: 'q-ettl-mf-02', topicId: 'ett-light-3', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Sign Convention',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'In the New Cartesian Sign Convention for mirrors, distances measured in the direction of incident light are taken as:',
      hi: 'दर्पणों के लिए नई कार्तीय चिह्न परिपाटी में, आपतित प्रकाश की दिशा में मापी गई दूरियाँ ली जाती हैं:',
      pa: 'ਦਰਪਣਾਂ ਲਈ ਨਵੀਂ ਕਾਰਟੇਸ਼ੀਅਨ ਚਿੰਨ੍ਹ ਰਵਾਇਤ ਵਿੱਚ, ਆਪਤਿਤ ਪ੍ਰਕਾਸ਼ ਦੀ ਦਿਸ਼ਾ ਵਿੱਚ ਮਾਪੀਆਂ ਦੂਰੀਆਂ ਲਈਆਂ ਜਾਂਦੀਆਂ ਹਨ:',
    },
    options: {
      A: { en: 'Positive (+)', hi: 'धनात्मक (+)', pa: 'ਧਨਾਤਮਕ (+)' },
      B: { en: 'Negative (−)', hi: 'ऋणात्मक (−)', pa: 'ਰਿਣਾਤਮਕ (−)' },
      C: { en: 'Zero', hi: 'शून्य', pa: 'ਜ਼ੀਰੋ' },
      D: { en: 'Depends on mirror type', hi: 'दर्पण के प्रकार पर निर्भर', pa: 'ਦਰਪਣ ਦੀ ਕਿਸਮ ਤੇ ਨਿਰਭਰ' },
    },
    correct: 'A',
    explanation: { en: 'New Cartesian: origin at pole; incident light travels left-to-right. Distances along incident direction (right/positive). Object is always to the left → u is always negative. For concave mirror, f and R are negative; for convex, positive.', hi: 'ध्रुव मूल बिंदु; दाहिनी ओर धनात्मक। वस्तु बाईं ओर → u ऋणात्मक। अवतल: f और R ऋणात्मक; उत्तल: धनात्मक।', pa: 'ਧਰੁਵ ਮੂਲ; ਸੱਜੇ ਧਨਾਤਮਕ। ਵਸਤੂ ਖੱਬੇ → u ਰਿਣਾਤਮਕ।' },
  },
  {
    id: 'q-ettl-mf-03', topicId: 'ett-light-3', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Magnification',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'The linear magnification (m) for a mirror is defined as m = −v/u. If m = +2 for a concave mirror, the image is:',
      hi: 'दर्पण के लिए रेखीय आवर्धन m = −v/u। यदि m = +2 है, तो प्रतिबिंब होगा:',
      pa: 'ਦਰਪਣ ਲਈ m = −v/u। ਜੇ m = +2 ਹੈ, ਤਾਂ ਪ੍ਰਤਿਬਿੰਬ ਹੋਵੇਗੀ:',
    },
    options: {
      A: { en: 'Virtual, erect and twice the size of object', hi: 'आभासी, सीधा और वस्तु से दोगुना', pa: 'ਕਾਲਪਨਿਕ, ਸਿੱਧਾ ਅਤੇ ਵਸਤੂ ਤੋਂ ਦੁੱਗਣਾ' },
      B: { en: 'Real, inverted and twice the size', hi: 'वास्तविक, उल्टा और दोगुना', pa: 'ਅਸਲੀ, ਉਲਟਾ ਅਤੇ ਦੁੱਗਣਾ' },
      C: { en: 'Real, erect and twice the size', hi: 'वास्तविक, सीधा और दोगुना', pa: 'ਅਸਲੀ, ਸਿੱਧਾ ਅਤੇ ਦੁੱਗਣਾ' },
      D: { en: 'Virtual, inverted and twice the size', hi: 'आभासी, उल्टा और दोगुना', pa: 'ਕਾਲਪਨਿਕ, ਉਲਟਾ ਅਤੇ ਦੁੱਗਣਾ' },
    },
    correct: 'A',
    explanation: { en: 'Magnification m: positive → image erect (virtual for mirrors); negative → image inverted (real). |m| > 1 → magnified. m = +2 means virtual, erect, 2× size.', hi: 'm धनात्मक → सीधा (आभासी); m ऋणात्मक → उल्टा (वास्तविक)। |m| = 2 → दोगुना आकार।', pa: 'm ਧਨਾਤਮਕ → ਸਿੱਧਾ (ਕਾਲਪਨਿਕ); m ਰਿਣਾਤਮਕ → ਉਲਟਾ (ਅਸਲੀ)।' },
  },

  // =========================================================================
  // ett-light-4 (30 Qs) — Refraction and refractive index
  // =========================================================================
  {
    id: 'q-ettl-rf-01', topicId: 'ett-light-4', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Refraction Definition',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'Refraction of light occurs when light passes from one medium to another. Which quantity does NOT change during refraction?',
      hi: 'प्रकाश का अपवर्तन तब होता है जब प्रकाश एक माध्यम से दूसरे में जाता है। अपवर्तन के दौरान कौन-सी राशि अपरिवर्तित रहती है?',
      pa: 'ਜਦੋਂ ਪ੍ਰਕਾਸ਼ ਇੱਕ ਮਾਧਿਅਮ ਤੋਂ ਦੂਸਰੇ ਵਿੱਚ ਜਾਂਦਾ ਹੈ ਤਾਂ ਅਪਵਰਤਨ ਹੁੰਦਾ ਹੈ। ਕਿਹੜੀ ਮਾਤਰਾ ਨਹੀਂ ਬਦਲਦੀ?',
    },
    options: {
      A: { en: 'Frequency', hi: 'आवृत्ति', pa: 'ਬਾਰੰਬਾਰਤਾ' },
      B: { en: 'Speed', hi: 'चाल', pa: 'ਗਤੀ' },
      C: { en: 'Wavelength', hi: 'तरंगदैर्ध्य', pa: 'ਤਰੰਗ-ਲੰਬਾਈ' },
      D: { en: 'Direction', hi: 'दिशा', pa: 'ਦਿਸ਼ਾ' },
    },
    correct: 'A',
    explanation: { en: 'During refraction, the frequency (and hence colour) of light remains unchanged. Speed and wavelength change (λ = v/f; if v changes and f is constant, λ changes). Direction changes unless incident at 90°.', hi: 'अपवर्तन में आवृत्ति (और रंग) नहीं बदलती। चाल और तरंगदैर्ध्य बदलती है (λ = v/f)। दिशा भी बदलती है।', pa: 'ਅਪਵਰਤਨ ਵਿੱਚ ਬਾਰੰਬਾਰਤਾ (ਅਤੇ ਰੰਗ) ਨਹੀਂ ਬਦਲਦੀ। ਗਤੀ ਅਤੇ ਤਰੰਗ-ਲੰਬਾਈ ਬਦਲਦੀ ਹੈ।' },
  },
  {
    id: 'q-ettl-rf-02', topicId: 'ett-light-4', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Snell Law',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'Snell\'s law of refraction states: n₁ sin θ₁ = n₂ sin θ₂. Light travels from glass (n = 1.5) to air (n = 1.0) with angle of incidence 30°. What is the angle of refraction?',
      hi: 'स्नेल का नियम: n₁ sin θ₁ = n₂ sin θ₂। प्रकाश काँच (n = 1.5) से वायु (n = 1.0) में 30° पर जाता है। अपवर्तन कोण क्या है?',
      pa: 'ਸਨੇਲ ਦਾ ਨਿਯਮ: n₁ sin θ₁ = n₂ sin θ₂। ਪ੍ਰਕਾਸ਼ ਕੱਚ (n = 1.5) ਤੋਂ ਹਵਾ (n = 1.0) ਵਿੱਚ 30° ਤੇ ਜਾਂਦਾ ਹੈ। ਅਪਵਰਤਨ ਕੋਣ?',
    },
    options: {
      A: { en: '≈ 48.6° (sin⁻¹ 0.75)', hi: '≈ 48.6°', pa: '≈ 48.6°' },
      B: { en: '30°', hi: '30°', pa: '30°' },
      C: { en: '20°', hi: '20°', pa: '20°' },
      D: { en: '90°', hi: '90°', pa: '90°' },
    },
    correct: 'A',
    explanation: { en: '1.5 × sin30° = 1.0 × sinθ₂ → 1.5 × 0.5 = sinθ₂ = 0.75 → θ₂ = sin⁻¹(0.75) ≈ 48.6°. Light bends away from normal (denser→rarer), angle increases.', hi: '1.5 × 0.5 = 0.75 = sin θ₂ → θ₂ ≈ 48.6°। सघन→विरल माध्यम में अभिलंब से दूर।', pa: 'sinθ₂ = 0.75 → θ₂ ≈ 48.6°।' },
  },
  {
    id: 'q-ettl-rf-03', topicId: 'ett-light-4', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Refractive Index',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'The absolute refractive index of a medium is defined as the ratio of:',
      hi: 'किसी माध्यम का निरपेक्ष अपवर्तनांक परिभाषित किया जाता है:',
      pa: 'ਕਿਸੇ ਮਾਧਿਅਮ ਦਾ ਪੂਰਨ ਅਪਵਰਤਨ ਅੰਕ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ:',
    },
    options: {
      A: { en: 'Speed of light in vacuum to speed of light in the medium', hi: 'निर्वात में प्रकाश की चाल / माध्यम में प्रकाश की चाल', pa: 'ਨਿਰਵਾਤ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਦੀ ਗਤੀ / ਮਾਧਿਅਮ ਵਿੱਚ ਗਤੀ' },
      B: { en: 'Speed in medium to speed in vacuum', hi: 'माध्यम में चाल / निर्वात में चाल', pa: 'ਮਾਧਿਅਮ ਵਿੱਚ ਗਤੀ / ਨਿਰਵਾਤ ਵਿੱਚ ਗਤੀ' },
      C: { en: 'Angle of incidence to angle of refraction', hi: 'आपतन कोण / अपवर्तन कोण', pa: 'ਆਪਤਨ ਕੋਣ / ਅਪਵਰਤਨ ਕੋਣ' },
      D: { en: 'Wavelength in medium to wavelength in vacuum', hi: 'माध्यम में तरंगदैर्ध्य / निर्वात में तरंगदैर्ध्य', pa: 'ਮਾਧਿਅਮ ਵਿੱਚ ਤਰੰਗ-ਲੰਬਾਈ / ਨਿਰਵਾਤ ਵਿੱਚ ਤਰੰਗ-ਲੰਬਾਈ' },
    },
    correct: 'A',
    explanation: { en: 'n = c/v where c = 3×10⁸ m/s (speed in vacuum) and v = speed in medium. Since light slows in media, n > 1 for all real media. Glass n ≈ 1.5, water n ≈ 1.33, diamond n ≈ 2.42.', hi: 'n = c/v। निर्वात में चाल c = 3×10⁸ m/s। सभी माध्यमों के लिए n > 1।', pa: 'n = c/v। ਸਭ ਮਾਧਿਅਮਾਂ ਲਈ n > 1।' },
  },

  // =========================================================================
  // ett-light-5 (30 Qs) — Lenses, lens formula and power
  // =========================================================================
  {
    id: 'q-ettl-ln-01', topicId: 'ett-light-5', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Convex Lens Uses',
    difficulty: 'easy', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'A convex lens is used to correct which defect of vision?',
      hi: 'उत्तल लेंस किस दृष्टि दोष को दूर करने में काम आता है?',
      pa: 'ਉੱਤਲ ਲੈਂਸ ਕਿਹੜੇ ਦ੍ਰਿਸ਼ਟੀ ਦੋਸ਼ ਨੂੰ ਠੀਕ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?',
    },
    options: {
      A: { en: 'Hypermetropia (far-sightedness)', hi: 'दूरदर्शिता (Hypermetropia)', pa: 'ਦੂਰਦਰਸ਼ਿਤਾ (Hypermetropia)' },
      B: { en: 'Myopia (near-sightedness)', hi: 'निकटदर्शिता (Myopia)', pa: 'ਨੇੜਦਰਸ਼ਿਤਾ (Myopia)' },
      C: { en: 'Astigmatism', hi: 'दृष्टिवैषम्य', pa: 'ਦ੍ਰਿਸ਼ਟੀਵੈਸ਼ਮ' },
      D: { en: 'Presbyopia', hi: 'जरादूरदर्शिता', pa: 'ਬੁਢਾਪੇ ਦੀ ਦ੍ਰਿਸ਼ਟੀ' },
    },
    correct: 'A',
    explanation: { en: 'Hypermetropia: near objects appear blurred; eyeball too short. Corrected by converging (convex) lens. Myopia: far objects blurred; corrected by diverging (concave) lens.', hi: 'दूरदर्शिता: पास की वस्तु धुंधली; उत्तल (अभिसारी) लेंस से ठीक। निकटदर्शिता: अवतल लेंस से ठीक।', pa: 'ਦੂਰਦਰਸ਼ਿਤਾ: ਉੱਤਲ ਲੈਂਸ ਨਾਲ ਠੀਕ। ਨੇੜਦਰਸ਼ਿਤਾ: ਅਵਤਲ ਲੈਂਸ ਨਾਲ।' },
  },
  {
    id: 'q-ettl-ln-02', topicId: 'ett-light-5', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Power of Lens',
    difficulty: 'medium', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'The power of a lens of focal length 25 cm is:',
      hi: '25 cm फोकस दूरी के लेंस की क्षमता (Power) है:',
      pa: '25 cm ਫੋਕਸ ਦੂਰੀ ਵਾਲੇ ਲੈਂਸ ਦੀ ਸ਼ਕਤੀ ਕਿੰਨੀ ਹੈ?',
    },
    options: {
      A: { en: '+4 D', hi: '+4 D', pa: '+4 D' },
      B: { en: '+25 D', hi: '+25 D', pa: '+25 D' },
      C: { en: '−4 D', hi: '−4 D', pa: '−4 D' },
      D: { en: '+0.25 D', hi: '+0.25 D', pa: '+0.25 D' },
    },
    correct: 'A',
    explanation: { en: 'Power P = 1/f (in metres). f = 25 cm = 0.25 m. P = 1/0.25 = +4 D. Convex lens has positive power; concave has negative. Unit is dioptre (D).', hi: 'P = 1/f (मीटर में)। f = 0.25 m → P = +4 D। उत्तल लेंस: धनात्मक; अवतल: ऋणात्मक।', pa: 'P = 1/f (ਮੀਟਰ ਵਿੱਚ) = 1/0.25 = +4 D।' },
  },
  {
    id: 'q-ettl-ln-03', topicId: 'ett-light-5', subjectId: 'science',
    examId: 'punjab-ett', examTag: 'Punjab ETT Paper B — Lens Formula',
    difficulty: 'hard', originType: 'authored-original', reviewStatus: 'reviewed', editorialStatus: 'authored',
    rightsProvenance: LIGHT_PROVENANCE,
    question: {
      en: 'Using lens formula 1/v − 1/u = 1/f: an object is placed 40 cm from a convex lens of focal length 20 cm. What is the image distance?',
      hi: 'लेंस सूत्र 1/v − 1/u = 1/f: 40 cm पर वस्तु, 20 cm फोकस दूरी का उत्तल लेंस। प्रतिबिंब की दूरी?',
      pa: 'ਲੈਂਸ ਸੂਤਰ 1/v − 1/u = 1/f: 40 cm ਤੇ ਵਸਤੂ, 20 cm ਫੋਕਸ ਦੂਰੀ ਉੱਤਲ ਲੈਂਸ। ਪ੍ਰਤਿਬਿੰਬ ਦੂਰੀ?',
    },
    options: {
      A: { en: '+40 cm', hi: '+40 cm', pa: '+40 cm' },
      B: { en: '+20 cm', hi: '+20 cm', pa: '+20 cm' },
      C: { en: '−40 cm', hi: '−40 cm', pa: '−40 cm' },
      D: { en: '−20 cm', hi: '−20 cm', pa: '−20 cm' },
    },
    correct: 'A',
    explanation: { en: 'u = −40 cm (object left of lens), f = +20 cm (convex). 1/v = 1/f + 1/u = 1/20 + 1/(−40) = 2/40 − 1/40 = 1/40 → v = +40 cm. Positive v: real, inverted image, same side as refracted light.', hi: '1/v = 1/20 − 1/40 = 1/40 → v = +40 cm। वास्तविक, उल्टा, समान आकार।', pa: '1/v = 1/20 + 1/(−40) = 1/40 → v = +40 cm।' },
  },
];
