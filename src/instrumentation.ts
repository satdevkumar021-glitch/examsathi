import * as Sentry from '@sentry/nextjs';

// Error reporting is off unless SENTRY_DSN is set, so local runs and tests send nothing.
export function register() {
  const dsn = process.env.SENTRY_DSN;
  if (!dsn) return;
  Sentry.init({
    dsn,
    environment: process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV,
    tracesSampleRate: Number(process.env.SENTRY_TRACES_SAMPLE_RATE ?? 0.05),
    // Students' answers and profiles must not leave the server through error reports.
    dataCollection: {
      userInfo: false,
      cookies: false,
      httpBodies: [],
      urlQueryParams: false,
      stackFrameVariables: false,
    },
  });
}

// Reports uncaught errors from server components, route handlers and server actions.
export const onRequestError = Sentry.captureRequestError;
