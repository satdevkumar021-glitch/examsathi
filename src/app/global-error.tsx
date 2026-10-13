'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

// Replaces the root layout when it fails, so it needs its own <html>/<body> and inline styles
// (global CSS is not loaded here).
export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => { Sentry.captureException(error); }, [error]);
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f172a', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: 24 }}>
        <div role="alert">
          <h1 style={{ fontSize: 20, margin: '0 0 8px' }}>ExamSathi could not load</h1>
          <p style={{ fontSize: 14, margin: '0 0 16px', color: '#cbd5e1' }}>
            कुछ गड़बड़ हो गई। / ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ।
          </p>
          {error.digest && <p style={{ fontSize: 12, color: '#94a3b8' }}>Reference: {error.digest}</p>}
          <button type="button" onClick={() => retry()} style={{ minHeight: 44, padding: '0 20px', borderRadius: 12, border: 0, background: '#0d9488', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            Try again / फिर कोशिश करें
          </button>
        </div>
      </body>
    </html>
  );
}
