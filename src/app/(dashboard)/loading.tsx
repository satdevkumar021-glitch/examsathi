export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="flex flex-col items-center justify-center gap-3 p-10 text-center text-slate-300">
      <div aria-hidden="true" className="h-8 w-8 animate-spin rounded-full border-2 border-slate-600 border-t-teal-400 motion-reduce:animate-none" />
      <p className="text-sm">Loading… / लोड हो रहा है… / ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ…</p>
    </div>
  );
}
