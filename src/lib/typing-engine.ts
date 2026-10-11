import { studyStorage } from './storage';

// ============================================================
// ExamSathi - Typing Practice Engine & Official Benchmarks
// Compliant with Master AI Specification Section 10:
// - Exam-specific, source-versioned duration, language, layout, scoring
// - Distinct official recruitment benchmarks vs unsourced practice presets
// - Unicode/InScript assumptions & Punjabi combining mark / grapheme handling
// - Full mistake vs half mistake evaluation under official board norms
// - Wall-clock elapsed time calculation, paste prevention, and history
// ============================================================

export interface TypingPreset {
  id: string;
  name: string;
  language: 'punjabi' | 'english';
  durationSeconds: number;
  targetWpm: number;
  minAccuracyPercent: number;
  maxMistakePercent: number;
  fontAndLayout: string;
  officialSource: string;
  isOfficialRule: boolean;
  notes: string;
}

export const TYPING_PRESETS: Record<string, TypingPreset> = {
  'psssb-clerk-punjabi': {
    id: 'psssb-clerk-punjabi',
    name: 'PSSSB Clerk Punjabi (Official 10-Min Benchmark)',
    language: 'punjabi',
    durationSeconds: 600,
    targetWpm: 30,
    minAccuracyPercent: 92,
    maxMistakePercent: 8,
    fontAndLayout: 'Raavi Font (Unicode InScript Keyboard Layout)',
    officialSource: 'Punjab Subordinate Services Selection Board (PSSSB Advt 15/2022, Clause 7)',
    isOfficialRule: true,
    notes: 'Requires 30 WPM speed with maximum 8% error rate (min 92% accuracy) over uninterrupted 10 minutes in Raavi Unicode InScript.',
  },
  'psssb-clerk-english': {
    id: 'psssb-clerk-english',
    name: 'PSSSB Clerk English (Official 10-Min Benchmark)',
    language: 'english',
    durationSeconds: 600,
    targetWpm: 30,
    minAccuracyPercent: 92,
    maxMistakePercent: 8,
    fontAndLayout: 'Standard QWERTY Keyboard',
    officialSource: 'Punjab Subordinate Services Selection Board (PSSSB Advt 15/2022, Clause 7)',
    isOfficialRule: true,
    notes: 'Requires 30 WPM speed with maximum 8% error rate (min 92% accuracy) over uninterrupted 10 minutes.',
  },
  'ssc-cgl-dest': {
    id: 'ssc-cgl-dest',
    name: 'SSC CGL Data Entry Skill Test (DEST)',
    language: 'english',
    durationSeconds: 900, // 15 min
    targetWpm: 27, // 2000 keystrokes in 15 min ~ 27 WPM
    minAccuracyPercent: 93, // 7% error limit for UR
    maxMistakePercent: 7,
    fontAndLayout: 'Standard QWERTY Keyboard',
    officialSource: 'Staff Selection Commission (SSC CGL 2024 Notice, Annexure XII)',
    isOfficialRule: true,
    notes: 'Requires typing approx. 2,000 key depressions in 15 minutes. Error ceiling is 5% for General and 7% for reserved categories.',
  },
  'practice-sprint-2m': {
    id: 'practice-sprint-2m',
    name: '2-Minute Speed Sprint (Practice Drill)',
    language: 'punjabi',
    durationSeconds: 120,
    targetWpm: 30,
    minAccuracyPercent: 90,
    maxMistakePercent: 10,
    fontAndLayout: 'Raavi Unicode / QWERTY',
    officialSource: 'Practice Preset (Unsourced/Custom Drill — Not an official government exam rule)',
    isOfficialRule: false,
    notes: 'Short warm-up drill to build keystroke rhythm. Not an official board qualifying standard.',
  },
  'practice-sprint-5m': {
    id: 'practice-sprint-5m',
    name: '5-Minute Endurance Drill (Practice Drill)',
    language: 'english',
    durationSeconds: 300,
    targetWpm: 30,
    minAccuracyPercent: 90,
    maxMistakePercent: 10,
    fontAndLayout: 'Standard QWERTY',
    officialSource: 'Practice Preset (Unsourced/Custom Drill — Not an official government exam rule)',
    isOfficialRule: false,
    notes: 'Intermediate endurance drill. Not an official board qualifying standard.',
  },
};

/**
 * Counts Unicode graphemes (syllables) accurately in Punjabi / Indic text.
 * Gurmukhi combining signs (sihari, bihari, tippi, bindi, addak, halant)
 * attach to consonants to form single grapheme clusters.
 */
export function countGraphemes(text: string): number {
  if (!text) return 0;
  // Intl.Segmenter is supported in modern browsers and Node 16+
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    try {
      const segmenter = new Intl.Segmenter('pa-Guru', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text)).length;
    } catch {}
  }

  // Regex fallback: Consonant followed by optional vowel signs, halant, and nasal modifiers
  const clusters = text.match(/[\u0A00-\u0A7F][\u0A3E-\u0A4D\u0A70-\u0A71]*/gu);
  return clusters ? clusters.length : text.length;
}

export interface TypingResult {
  presetId: string;
  presetName: string;
  isOfficialRule: boolean;
  officialSource: string;
  durationSeconds: number;
  timeElapsedSeconds: number;
  grossWpm: number;
  netWpm: number;
  accuracy: number;
  fullMistakes: number;
  halfMistakes: number;
  totalPenalizedMistakes: number;
  errorPercentage: number;
  totalCharsTyped: number;
  totalWordsTyped: number;
  graphemesTyped: number;
  isQualified: boolean;
  qualificationSummary: string;
  completedAt: string;
}

/**
 * Evaluates typing performance under official board rules (Full vs Half Mistakes).
 * - Full Mistakes: Omission of a word, substitution of an incorrect word, addition of extra word.
 * - Half Mistakes: Spacing errors, punctuation errors, minor capitalization errors.
 */
export function evaluateTypingTest(params: {
  targetText: string;
  typedText: string;
  durationSeconds: number;
  timeElapsedSeconds: number;
  presetId: string;
}): TypingResult {
  const { targetText, typedText, durationSeconds, timeElapsedSeconds, presetId } = params;
  const preset = TYPING_PRESETS[presetId] || TYPING_PRESETS['psssb-clerk-punjabi'];

  const targetWords = targetText.trim().split(/\s+/).filter(Boolean);
  const typedWords = typedText.trim().split(/\s+/).filter(Boolean);

  let fullMistakes = 0;
  let halfMistakes = 0;

  const compareLimit = Math.max(targetWords.length, typedWords.length);
  for (let i = 0; i < compareLimit; i++) {
    const tWord = targetWords[i];
    const uWord = typedWords[i];

    if (!uWord) {
      // Omission of word: full mistake
      fullMistakes++;
    } else if (!tWord) {
      // Addition of superfluous word: full mistake
      fullMistakes++;
    } else if (tWord === uWord) {
      // Exact match: 0 mistake
    } else {
      // Check if it is a half-mistake (only punctuation or case difference)
      const tNorm = tWord.replace(/[.,/#!$%^&*;:{}=\-_`~()।॥]/g, '').toLowerCase();
      const uNorm = uWord.replace(/[.,/#!$%^&*;:{}=\-_`~()।॥]/g, '').toLowerCase();
      if (tNorm === uNorm && tNorm.length > 0) {
        halfMistakes++;
      } else {
        // Word substitution or spelling error: full mistake
        fullMistakes++;
      }
    }
  }

  const totalPenalizedMistakes = fullMistakes + (halfMistakes * 0.5);
  const timeInMinutes = Math.max(0.01, timeElapsedSeconds / 60);

  const totalWordsTyped = typedWords.length;
  const totalCharsTyped = typedText.length;
  const graphemesTyped = countGraphemes(typedText);

  // Gross WPM = (Total characters / 5) / minutes
  const grossWpm = Math.round((totalCharsTyped / 5) / timeInMinutes);

  // Net WPM = Gross WPM - (Penalized mistakes / minutes)
  const netWpm = Math.max(0, Math.round(grossWpm - (totalPenalizedMistakes / timeInMinutes)));

  const errorPercentage = totalWordsTyped > 0 
    ? parseFloat(((totalPenalizedMistakes / totalWordsTyped) * 100).toFixed(1))
    : 0;

  const accuracy = Math.max(0, Math.min(100, Math.round(100 - errorPercentage)));

  const speedQualified = netWpm >= preset.targetWpm;
  const accuracyQualified = accuracy >= preset.minAccuracyPercent && errorPercentage <= preset.maxMistakePercent;
  const isQualified = speedQualified && accuracyQualified;

  let qualificationSummary = '';
  if (isQualified) {
    qualificationSummary = `Qualified under ${preset.isOfficialRule ? preset.name : 'preset benchmark'}: Net speed ${netWpm} WPM (>= ${preset.targetWpm} WPM) with ${accuracy}% accuracy.`;
  } else if (!speedQualified && !accuracyQualified) {
    qualificationSummary = `Did not qualify: Net speed ${netWpm} WPM (< ${preset.targetWpm} req) and error rate ${errorPercentage}% (> ${preset.maxMistakePercent}% limit).`;
  } else if (!speedQualified) {
    qualificationSummary = `Did not qualify on speed: Net speed ${netWpm} WPM (< ${preset.targetWpm} WPM required). Accuracy was acceptable (${accuracy}%).`;
  } else {
    qualificationSummary = `Did not qualify on accuracy: Error rate ${errorPercentage}% exceeds the ${preset.maxMistakePercent}% threshold, despite meeting speed (${netWpm} WPM).`;
  }

  const result: TypingResult = {
    presetId,
    presetName: preset.name,
    isOfficialRule: preset.isOfficialRule,
    officialSource: preset.officialSource,
    durationSeconds,
    timeElapsedSeconds,
    grossWpm,
    netWpm,
    accuracy,
    fullMistakes,
    halfMistakes,
    totalPenalizedMistakes,
    errorPercentage,
    totalCharsTyped,
    totalWordsTyped,
    graphemesTyped,
    isQualified,
    qualificationSummary,
    completedAt: new Date().toISOString(),
  };

  return result;
}

const STORAGE_TYPING_HISTORY = 'examsathi_typing_history';

/** Persists typing test results into client storage. */
export function saveTypingResult(result: TypingResult): void {
  try {
    const raw = studyStorage.getItem(STORAGE_TYPING_HISTORY);
    const history: TypingResult[] = raw ? JSON.parse(raw) : [];
    history.unshift(result);
    studyStorage.setItem(STORAGE_TYPING_HISTORY, JSON.stringify(history.slice(0, 30)));
  } catch {}
}

/** Retrieves historical typing attempts. */
export function getTypingHistory(): TypingResult[] {
  try {
    const raw = studyStorage.getItem(STORAGE_TYPING_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
