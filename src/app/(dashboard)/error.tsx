'use client';

import Link from 'next/link';

// Wraps the page inside the dashboard layout, so the navigation and account state stay usable.
export default function DashboardError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <div role="alert" className="flex flex-col items-center gap-4 p-8 text-center text-slate-200">
      <h1 className="text-lg font-bold">Something went wrong</h1>
      <p className="text-sm text-slate-300">
        कुछ गड़बड़ हो गई। / ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ।
      </p>
      {error.digest && <p className="text-xs text-slate-400">Reference: {error.digest}</p>}
      <div className="flex flex-wrap justify-center gap-3">
        <button type="button" onClick={() => retry()} className="min-h-11 rounded-xl bg-teal-600 px-5 text-sm font-bold text-white hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300">
          Try again / फिर कोशिश करें
        </button>
        <Link href="/dashboard" className="inline-flex min-h-11 items-center rounded-xl border border-slate-600 px-5 text-sm font-semibold text-slate-100 hover:bg-slate-800">
          Home / होम
        </Link>
      </div>
    </div>
  );
}
