import { studyStorage } from '@/lib/storage';
// ============================================================
// ExamSathi - local study profile (favourites, bookmarks, XP, library time).
// This is NOT authentication: sign-in is Supabase (see hooks/useAuth.ts). The profile is stored per
// account in studyStorage and holds only what the learner has actually earned on this device.
// ============================================================

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  targetExam: string;
  state: string;
  streak: number;
  xp: number;
  libraryHours: number;
  librarySeconds?: number;
  favoriteQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  joinedDate: string;
}

const DEFAULT_USER: AuthUser = {
  id: 'usr-default',
  name: 'Aspirant',
  email: '',
  phone: '',
  targetExam: 'master-cadre-sst',
  state: 'punjab',
  streak: 0,
  xp: 0,
  libraryHours: 0,
  favoriteQuestionIds: [],
  bookmarkedQuestionIds: [],
  joinedDate: 'New Member',
};

const STORAGE_KEY = 'examsathi_auth_user';

export function getStoredUser(): AuthUser {
  if (typeof window === 'undefined') return { ...DEFAULT_USER, favoriteQuestionIds: [], bookmarkedQuestionIds: [] };
  try {
    const raw = studyStorage.getItem(STORAGE_KEY);
    if (raw) {
      const value = JSON.parse(raw);
      return { ...DEFAULT_USER, ...value,
        favoriteQuestionIds: Array.isArray(value.favoriteQuestionIds) ? value.favoriteQuestionIds : [],
        bookmarkedQuestionIds: Array.isArray(value.bookmarkedQuestionIds) ? value.bookmarkedQuestionIds : [],
      };
    }
  } catch {}
  return { ...DEFAULT_USER, favoriteQuestionIds: [], bookmarkedQuestionIds: [] };
}

export function saveUserSession(user: AuthUser): void {
  if (typeof window === 'undefined') return;
  try {
    studyStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch {}
}

export function logoutUser(): void {
  if (typeof window === 'undefined') return;
  try {
    studyStorage.removeItem(STORAGE_KEY);
  } catch {}
}

// ============================================================
// FAVORITES & BOOKMARKS HELPERS
// ============================================================

export function toggleFavoriteQuestion(questionId: string): boolean {
  const user = getStoredUser();
  const index = user.favoriteQuestionIds.indexOf(questionId);
  let isFav = false;

  if (index >= 0) {
    user.favoriteQuestionIds.splice(index, 1);
    isFav = false;
  } else {
    user.favoriteQuestionIds.push(questionId);
    isFav = true;
  }

  saveUserSession(user);
  return isFav;
}

export function toggleBookmarkQuestion(questionId: string): boolean {
  const user = getStoredUser();
  const index = user.bookmarkedQuestionIds.indexOf(questionId);
  let isBookmarked = false;

  if (index >= 0) {
    user.bookmarkedQuestionIds.splice(index, 1);
    isBookmarked = false;
  } else {
    user.bookmarkedQuestionIds.push(questionId);
    isBookmarked = true;
  }

  saveUserSession(user);
  return isBookmarked;
}

export function isQuestionFavorite(questionId: string): boolean {
  const user = getStoredUser();
  return user.favoriteQuestionIds.includes(questionId);
}

export function isQuestionBookmarked(questionId: string): boolean {
  const user = getStoredUser();
  return user.bookmarkedQuestionIds.includes(questionId);
}
