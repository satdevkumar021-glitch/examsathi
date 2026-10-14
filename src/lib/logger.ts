/**
 * Structured log sanitizer with automatic masking.
 * Enforces Part 3A.4 item 6 & Part 3B Case 4:
 * Never log passwords, tokens, answer keys or unmasked personal data.
 */

const SENSITIVE_KEYS = new Set([
  'password',
  'passwd',
  'secret',
  'token',
  'accesstoken',
  'refreshtoken',
  'authorization',
  'auth',
  'cookie',
  'correct',
  'answer',
  'answers',
  'answerkey',
  'solution',
  'creditcard',
  'cardnumber',
  'cvv',
  'pin',
]);

/** Masks email: "harpreet.singh@gmail.com" -> "h***@gmail.com" */
export function maskEmail(email: string): string {
  if (!email || typeof email !== 'string') return '';
  const parts = email.split('@');
  if (parts.length !== 2) return '***';
  const name = parts[0];
  const domain = parts[1];
  const maskedName = name.length > 1 ? `${name[0]}***` : '***';
  return `${maskedName}@${domain}`;
}

/** Masks phone: "+919876543210" -> "******10" */
export function maskPhone(phone: string): string {
  if (!phone || typeof phone !== 'string') return '';
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 4) return '***';
  const last2 = digits.slice(-2);
  return `******${last2}`;
}

/** Recursively sanitizes any payload, redacting secrets and masking personal info */
export function sanitizeLogData(data: unknown): unknown {
  if (data === null || data === undefined) return data;
  if (typeof data === 'string') {
    // Check if it's an email
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data)) return maskEmail(data);
    // Check if it looks like a JWT or bearer token
    if (/^Bearer\s+[a-zA-Z0-9\-_.]+/i.test(data) || /^eyJ[a-zA-Z0-9\-_.]+\.[a-zA-Z0-9\-_.]+/.test(data)) {
      return '[REDACTED_TOKEN]';
    }
    return data;
  }
  if (typeof data === 'number' || typeof data === 'boolean') return data;
  if (Array.isArray(data)) return data.map(sanitizeLogData);
  if (typeof data === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      const lower = key.toLowerCase().replace(/[^a-z]/g, '');
      if (SENSITIVE_KEYS.has(lower)) {
        out[key] = '[REDACTED]';
      } else if (lower.includes('email') && typeof value === 'string') {
        out[key] = maskEmail(value);
      } else if ((lower.includes('phone') || lower.includes('mobile')) && typeof value === 'string') {
        out[key] = maskPhone(value);
      } else {
        out[key] = sanitizeLogData(value);
      }
    }
    return out;
  }
  return '[COMPLEX_DATA]';
}

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export interface StructuredLog {
  timestamp: string;
  level: LogLevel;
  event: string;
  data?: unknown;
}

export const logger = {
  format(level: LogLevel, event: string, data?: unknown): StructuredLog {
    return {
      timestamp: new Date().toISOString(),
      level,
      event,
      data: sanitizeLogData(data),
    };
  },
  info(event: string, data?: unknown): void {
    const log = this.format('info', event, data);
    console.info(JSON.stringify(log));
  },
  warn(event: string, data?: unknown): void {
    const log = this.format('warn', event, data);
    console.warn(JSON.stringify(log));
  },
  error(event: string, data?: unknown): void {
    const log = this.format('error', event, data);
    console.error(JSON.stringify(log));
  },
  debug(event: string, data?: unknown): void {
    if (process.env.NODE_ENV !== 'production') {
      const log = this.format('debug', event, data);
      console.debug(JSON.stringify(log));
    }
  },
};
