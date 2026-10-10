export type Lang = "hi" | "pa" | "en";
export type Text3 = { hi: string; pa: string; en: string };
export type Question = {
  id: string;
  prompt: Text3;
  options: Text3[];
  answerIndex: number;
  explanation: Text3;
  originType?: "official_pyq" | "model_practice";
  pyqYear?: number | string;
  pyqExam?: string;
  reviewedBy?: string;
  verified?: boolean;
};
export type Lesson = {
  id: string;
  subject: string;
  unit: string;
  title: Text3;
  sections: { heading: Text3; text: Text3 }[];
  keypoints: Text3[];
  summary: Text3;
  flashcards: { question: Text3; answer: Text3 }[];
  questions: Question[];
  sources: { title: string; url: string }[];
  videos?: {
    title: string;
    url: string;
    language?: string;
    provider?: string;
  }[];
  documents?: { title: string; url: string; language?: string }[];
  syllabusTopics?: string[];
  level?: string;
};
