export interface Flashcard {
  id?: string;
  q: { hi: string; pa: string; en: string };
  a: { hi: string; pa: string; en: string };
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface VideoResource {
  title: string;
  channel: string;
  youtubeId: string;
  language: 'hi' | 'pa' | 'en';
  views: string;
  duration: string;
  tags: string[];
}

export interface BookReference {
  title: string;
  author: string;
  chapters: string;
  type?: 'ncert' | 'state-board' | 'standard';
}

export interface Lesson {
  id: string;
  topicId: string;
  subjectId: string;
  category: 'history' | 'polity' | 'geography' | 'economy' | 'science' | 'clerk' | 'language' | 'math' | 'pedagogy' | 'patwari' | 'police' | 'rajasthan';
  title: { hi: string; pa: string; en: string };
  examRelevance: string;
  estimatedTime: string;
  content: { hi: string; pa: string; en: string };
  summary: { hi: string; pa: string; en: string };
  keyNotes: { hi: string[]; pa: string[]; en: string[] };
  flashcards: Flashcard[];
  videos: VideoResource[];
  bookRefs: BookReference[];
}
