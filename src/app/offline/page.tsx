export const metadata = {
  title: 'Offline | ExamSathi',
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-slate-100 text-center">
      <div className="text-6xl mb-4">📚</div>
      <h1 className="text-2xl font-bold text-white mb-2">You are offline</h1>
      <p className="text-slate-400 text-sm max-w-xs mb-6">
        No internet connection. Previously visited lessons and pages are still available from cache.
      </p>
      <a
        href="/dashboard"
        className="bg-teal-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm hover:bg-teal-400 transition"
      >
        Go to Dashboard
      </a>
      <p className="text-xs text-slate-500 mt-4">
        Mock tests started offline will sync automatically when you reconnect.
      </p>
    </div>
  );
}
