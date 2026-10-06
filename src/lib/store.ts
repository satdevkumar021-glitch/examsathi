import { create } from 'zustand';

interface AppState {
  language: 'hi' | 'pa' | 'en';
  selectedState: string | null;
  selectedExam: string | null;
  selectedSubject: string | null;
  user: { name: string; streak: number; xp: number } | null;
  completedTopics: string[];
  setLanguage: (lang: 'hi' | 'pa' | 'en') => void;
  setSelectedExam: (state: string, exam: string) => void;
  setUser: (user: any) => void;
  markTopicComplete: (topicId: string) => void;
}

export const useStore = create<AppState>((set) => ({
  language: 'hi',
  selectedState: null,
  selectedExam: null,
  selectedSubject: null,
  user: null,
  completedTopics: ['ancient-india'],
  setLanguage: (lang) => set({ language: lang }),
  setSelectedExam: (state, exam) => set({ selectedState: state, selectedExam: exam }),
  setUser: (user) => set({ user }),
  markTopicComplete: (topicId) => set((state) => ({ completedTopics: [...state.completedTopics, topicId] })),
}));
