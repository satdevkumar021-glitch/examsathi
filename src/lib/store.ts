import { studyStorage } from '@/lib/storage';
import { persist, createJSONStorage } from 'zustand/middleware';
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
  setUser: (user: AppState['user']) => void;
  markTopicComplete: (topicId: string) => void;
}

export const useStore = create<AppState>()(persist((set) => ({
  language: 'hi',
  selectedState: null,
  selectedExam: null,
  selectedSubject: null,
  user: null,
  completedTopics: [],
  setLanguage: (lang) => set({ language: lang }),
  setSelectedExam: (state, exam) => set({ selectedState: state, selectedExam: exam }),
  setUser: (user) => set({ user }),
  markTopicComplete: (topicId) => set((state) => ({ completedTopics: Array.from(new Set([...state.completedTopics, topicId])) })),
}), { name: 'examsathi_preferences', storage: createJSONStorage(() => studyStorage), merge: (persisted, current) => ({ ...current, language: 'hi', completedTopics: [], user: null, selectedExam: null, selectedState: null, ...(persisted as Partial<AppState> || {}) }), partialize: state => ({ language: state.language, completedTopics: state.completedTopics, selectedState: state.selectedState, selectedExam: state.selectedExam }) }));
