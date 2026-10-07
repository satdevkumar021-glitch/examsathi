import { studyStorage } from '@/lib/storage';
// ============================================================
// ExamSathi - Client-Side Authentication, Session & Vault Manager
// Supports Sign-Up, Login, Demo 1-Click Login, Forgot Password,
// Favorites (⭐), Bookmarks (🔖), and Personal Study Vault
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

export function registerUser(payload: {
  name: string;
  email: string;
  phone?: string;
  password?: string;
  targetExam?: string;
  state?: string;
}): AuthUser {
  const newUser: AuthUser = {
    id: `usr-${Date.now()}`,
    name: payload.name || 'Candidate',
    email: payload.email || 'candidate@examsathi.in',
    phone: payload.phone || '',
    targetExam: payload.targetExam || 'ett-punjab',
    state: payload.state || 'punjab',
    streak: 1,
    xp: 100,
    libraryHours: 0,
    favoriteQuestionIds: [],
    bookmarkedQuestionIds: [],
    joinedDate: new Date().toLocaleDateString('en-IN', { month: 'short', year: 'numeric' }),
  };

  saveUserSession(newUser);

  return newUser;
}

export function loginUser(_identifier: string, _password?: string): AuthUser {
  throw new Error('Account login is unavailable on this static site. Use guest or demo access.');
}

export function instantDemoLogin(role: 'ett' | 'clerk' | 'master-cadre' = 'ett'): AuthUser {
  const demoUsers: Record<string, Partial<AuthUser>> = {
    ett: {
      name: 'Gurpreet Singh (ETT Aspirant)',
      email: 'gurpreet.ett@examsathi.in',
      targetExam: 'ett-punjab',
      state: 'punjab',
      streak: 18,
      xp: 680,
      libraryHours: 24.5,
    },
    clerk: {
      name: 'Harpreet Kaur (PSSSB Clerk Prep)',
      email: 'harpreet.clerk@examsathi.in',
      targetExam: 'clerk-psssb',
      state: 'punjab',
      streak: 22,
      xp: 820,
      libraryHours: 31.0,
    },
    'master-cadre': {
      name: 'Simranjit Kaur (Master Cadre SST)',
      email: 'simran.sst@examsathi.in',
      targetExam: 'master-cadre-sst',
      state: 'punjab',
      streak: 28,
      xp: 1250,
      libraryHours: 42.0,
    },
  };

  const selected = demoUsers[role] || demoUsers.ett;
  const user: AuthUser = {
    ...DEFAULT_USER,
    ...selected,
    id: `demo-${role}`,
  };

  saveUserSession(user);
  return user;
}

export function requestPasswordReset(_identifier: string): { otp: string; success: boolean } {
  return { otp: '', success: false };
}

export function verifyAndResetPassword(_otp: string, _password: string): boolean {
  return false;
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
