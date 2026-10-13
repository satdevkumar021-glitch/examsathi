// Theme preference: 'system' follows the OS, 'light' and 'dark' are explicit. Stored per device, not per account.
export type ThemeChoice = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';
export const THEME_KEY = 'examsathi_theme';

export const isThemeChoice = (value: unknown): value is ThemeChoice => value === 'system' || value === 'light' || value === 'dark';

export function resolveTheme(choice: ThemeChoice, systemPrefersDark: boolean): ResolvedTheme {
  return choice === 'system' ? (systemPrefersDark ? 'dark' : 'light') : choice;
}

export function readThemeChoice(): ThemeChoice {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    return isThemeChoice(stored) ? stored : 'system';
  } catch { return 'system'; }
}

export function applyTheme(choice: ThemeChoice) {
  const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const resolved = resolveTheme(choice, dark);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.classList.toggle('dark', resolved === 'dark');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', resolved === 'dark' ? '#0f172a' : '#f1f5f9');
}

export function saveThemeChoice(choice: ThemeChoice) {
  try { window.localStorage.setItem(THEME_KEY, choice); } catch { /* private mode: still applies for this visit */ }
  applyTheme(choice);
}

/**
 * Runs before first paint (inlined in <head>) so a light-theme learner never sees a dark flash.
 * Kept dependency-free and tiny; it mirrors resolveTheme/applyTheme.
 */
export const THEME_BOOT_SCRIPT = `(function(){try{var c=localStorage.getItem('${THEME_KEY}');if(c!=='light'&&c!=='dark')c='system';var d=c==='system'?matchMedia('(prefers-color-scheme: dark)').matches:c==='dark';var e=document.documentElement;e.dataset.theme=d?'dark':'light';e.classList.toggle('dark',d);}catch(_){document.documentElement.dataset.theme='dark';}})();`;
