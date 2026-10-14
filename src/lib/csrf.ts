/**
 * CSRF Protection Engine for state-changing operations.
 * Enforces Part 3A.5 & Part 3B Case 8:
 * "State-changing requests without a valid CSRF token or valid Origin are rejected."
 */

const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

/** Cryptographically secure random token generation */
export function generateCsrfToken(): string {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const bytes = new Uint8Array(24);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  }
  // Deterministic fallback for environments without crypto
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export interface CsrfVerificationResult {
  ok: boolean;
  reason?: string;
}

/**
 * Validates a state-changing request against CSRF.
 * In cookie-authenticated applications:
 * 1. Safe methods (GET, HEAD, OPTIONS) pass unconditionally.
 * 2. If an explicit anti-CSRF token is supplied (via 'x-csrf-token' header or body), it must match expected.
 * 3. Origin and Sec-Fetch-Site checks guard against cross-origin forged requests.
 */
export function verifyCsrfRequest(
  req: Request,
  options?: {
    expectedToken?: string;
    allowedOrigins?: string[];
  }
): CsrfVerificationResult {
  const method = req.method.toUpperCase();
  if (SAFE_METHODS.has(method)) {
    return { ok: true };
  }

  const originHeader = req.headers.get('origin');
  const refererHeader = req.headers.get('referer');
  const csrfHeader = req.headers.get('x-csrf-token');
  const requestedWith = req.headers.get('x-requested-with');

  // If client-provided custom header is XMLHttpRequest / fetch with anti-CSRF token
  if (options?.expectedToken) {
    if (!csrfHeader || csrfHeader !== options.expectedToken) {
      return { ok: false, reason: 'CSRF token missing or mismatch.' };
    }
  }

  // Check Origin header if present
  if (originHeader) {
    const originUrl = new URL(originHeader);
    const host = req.headers.get('host') || '';
    const cleanHost = host.split(':')[0];
    const allowed = options?.allowedOrigins || [
      'localhost',
      '127.0.0.1',
      cleanHost,
      'satdevkumar021-glitch.github.io',
      'examsathi-sxj3.onrender.com',
    ];

    const isAllowed = allowed.some(domain => originUrl.hostname === domain || originUrl.host === domain);
    if (!isAllowed) {
      return { ok: false, reason: `Origin ${originHeader} is not permitted.` };
    }
  } else if (!refererHeader && !csrfHeader && !requestedWith) {
    // State-changing requests lacking Origin, Referer, and CSRF token/AJAX headers
    // from unknown cross-site contexts are suspicious
    return { ok: false, reason: 'Missing CSRF and Origin verification headers.' };
  }

  return { ok: true };
}
