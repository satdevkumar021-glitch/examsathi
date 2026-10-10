const ACCOUNT_KEY = 'examsathi:active-account';
export const STORAGE_EVENT = 'examsathi:storage';

export function setStorageAccount(id: string | null): void {
  if (typeof window === 'undefined') return;
  const next = id || 'guest';
  if (window.localStorage.getItem(ACCOUNT_KEY) === next) return;
  window.localStorage.setItem(ACCOUNT_KEY, next);
  window.dispatchEvent(new Event(STORAGE_EVENT));
}

function scopeKey(key: string): string {
  const account = window.localStorage.getItem(ACCOUNT_KEY) || 'guest';
  return `examsathi:${account}:${key}`;
}

export const studyStorage = {
  getItem(key: string): string | null {
    if (typeof window === 'undefined') return null;
    const storage = window.localStorage;
    const scoped = scopeKey(key);
    const current = storage.getItem(scoped);
    if (current !== null) return current;
    // Legacy unscoped records belong to the device's guest vault, never a new account.
    if ((storage.getItem(ACCOUNT_KEY) || 'guest') === 'guest') {
      const legacy = storage.getItem(key);
      if (legacy !== null) { storage.setItem(scoped, legacy); return legacy; }
    }
    return null;
  },
  setItem(key: string, value: string): void {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(scopeKey(key), value);
    window.dispatchEvent(new Event(STORAGE_EVENT));
  },
  removeItem(key: string): void {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(scopeKey(key));
    // Avoid resurrecting a removed legacy guest record.
    if ((window.localStorage.getItem(ACCOUNT_KEY) || 'guest') === 'guest') {
      window.localStorage.removeItem(key);
    }
    window.dispatchEvent(new Event(STORAGE_EVENT));
  },
};
