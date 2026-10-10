import { publicPath } from '@/lib/paths';
export const metadata = {
  title: 'Offline | ExamSathi',
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-slate-100 text-center">
      <div className="text-6xl mb-4">📚</div>
      <h1 className="text-2xl font-bold text-white mb-2">You are offline</h1>
      <p className="text-slate-400 text-sm max-w-xs mb-6">
        No internet connection. Your saved study records remain on this browser. Reconnect to open pages.
      </p>
      <a
        href={publicPath('/dashboard/')}
        className="bg-teal-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm hover:bg-teal-400 transition"
      >
        Go to Dashboard
      </a>
      <p className="text-xs text-slate-500 mt-4">
        Study data does not sync automatically. Download a backup from your profile.
      </p>
    </div>
  );
}
