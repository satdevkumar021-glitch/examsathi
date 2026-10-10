export interface Flashcard {
  id?: string;
  q: { hi: string; pa: string; en: string };
  a: { hi: string; pa: string; en: string };
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface VideoResource {
  title: string;
  channel: string;
  youtubeId?: string;
  url?: string;
  language: 'hi' | 'pa' | 'en' | string;
  views?: string;
  duration?: string;
  tags?: string[];
}

export interface BookReference {
  title: string;
  author: string;
  chapters: string;
  type?: 'ncert' | 'state-board' | 'standard';
}

export interface DocumentResource {
  title: string;
  url: string;
  language: string;
  type?: 'syllabus' | 'textbook' | 'nios' | 'notes' | 'official' | string;
  fileSize?: string;
}

export interface SyllabusReference {
  title: string;
  url: string;
  examName?: string;
  department?: string;
  body?: string;
  verifiedOn?: string;
}

export interface LessonSection {
  heading: { hi: string; pa: string; en: string };
  text: { hi: string; pa: string; en: string };
  bulletPoints?: { hi: string[]; pa: string[]; en: string[] };
}

export interface Lesson {
  /** Long explanation cards must not become automatic multiple-choice questions. */
  practiceSource?: 'authored-only';
  availableLanguages?: readonly ('en' | 'hi' | 'pa')[];
  coverageStatus?: 'foundation' | 'complete';
  editorialStatus?: 'authored' | 'reviewed';
  id: string;
  topicId: string;
  subjectId: string;
  category: 'history' | 'polity' | 'geography' | 'economy' | 'science' | 'clerk' | 'language' | 'math' | 'pedagogy' | 'patwari' | 'police' | 'rajasthan' | 'general';
  title: { hi: string; pa: string; en: string };
  examRelevance: string;
  estimatedTime: string;
  content: { hi: string; pa: string; en: string };
  summary: { hi: string; pa: string; en: string };
  keyNotes: { hi: string[]; pa: string[]; en: string[] };
  flashcards: Flashcard[];
  videos: VideoResource[];
  bookRefs: BookReference[];
  documents?: DocumentResource[];
  syllabusReference?: SyllabusReference;
  sources?: Array<{ title: string; url: string }>;
  sections?: LessonSection[];
}
