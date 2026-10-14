// Client-safe question types. The question bank itself lives server-side only.
export interface DistractorExplanation {
  hi?: string;
  pa?: string;
  en?: string;
}

export interface PYQMetadata {
  examBoard: string;
  notificationRef: string;
  paper: string;
  year?: number;
  shift?: string;
  questionNumber?: number;
  answerKeyStatus: 'official-final-key' | 'provisional-key' | 'editorial-verified';
}

export interface RightsProvenance {
  source: string;
  accessType: 'public-recruitment' | 'educational-original' | 'fair-use-curriculum';
  verifiedBy: string;
  verifiedDate: string;
}

export interface Question {
  id: string;
  topicId: string;
  subjectId: string;
  examId?: string; // e.g. 'master-cadre-sst', 'ett-punjab', 'clerk-psssb', 'police-punjab', 'patwari-punjab', 'reet-l2', 'ctet-p2'
  examTag: string; // e.g., 'Punjab Master Cadre 2022', 'PSSSB Clerk 2023', 'Punjab ETT Cadre 5994'
  topicName?: { hi: string; pa?: string; en: string };
  subtopic?: { hi: string; pa?: string; en: string };
  learningObjective?: string;
  conceptGroupId?: string;
  deepConceptNote?: { hi: string; pa?: string; en: string };
  question: { hi: string; pa?: string; en: string };
  options: {
    A: { hi: string; pa?: string; en: string };
    B: { hi: string; pa?: string; en: string };
    C: { hi: string; pa?: string; en: string };
    D: { hi: string; pa?: string; en: string };
  };
  distractorExplanations?: {
    A?: DistractorExplanation;
    B?: DistractorExplanation;
    C?: DistractorExplanation;
    D?: DistractorExplanation;
  };
  correct: 'A' | 'B' | 'C' | 'D';
  explanation: { hi: string; pa?: string; en: string };
  thought?: { hi: string; pa?: string; en: string }; // Strategic Examiner Insight & Elimination Technique
  difficulty: 'easy' | 'medium' | 'hard';
  year?: number;
  originType?: 'verified-pyq' | 'authored-original' | 'computed-variant';
  pyqMetadata?: PYQMetadata;
  rightsProvenance?: RightsProvenance;
  reviewStatus?: 'reviewed' | 'draft' | 'under-audit';
  availableLanguages?: readonly ('en' | 'hi' | 'pa')[];
  explanationLanguages?: readonly ('en' | 'hi' | 'pa')[];
  editorialStatus?: 'authored' | 'reviewed';
  source?: { title: string; url: string };
}

/** Fields that reveal the answer. They are only ever sent after an explicit server reveal or a submission. */
export type RevealedFields = 'correct' | 'explanation' | 'thought' | 'deepConceptNote' | 'distractorExplanations';

/** What the browser receives before an answer is revealed. */
export type PublicQuestion = Omit<Question, RevealedFields>;

/** Answer material for one question, returned by the reveal API or a submission. */
export type QuestionReveal = Pick<Question, 'correct' | 'explanation'> & Partial<Pick<Question, 'thought' | 'deepConceptNote' | 'distractorExplanations'>>;

/** A question as the UI renders it: public fields, plus answer material once revealed. */
export type ReviewedQuestion = PublicQuestion & Partial<QuestionReveal>;
