import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | ExamSathi',
  description: 'Contact ExamSathi team for questions, content issues, or feedback.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-slate-100 pb-20">
      <Link href="/dashboard" className="text-teal-400 text-sm mb-4 inline-block hover:underline">← Back to Dashboard</Link>
      <h1 className="text-2xl font-bold text-white mb-2">Contact Us</h1>
      <p className="text-slate-400 text-sm mb-8">We would love to hear from you.</p>

      <div className="space-y-4">
        <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700">
          <h2 className="text-white font-bold mb-3">📧 Email</h2>
          <a href="mailto:contact@examsathi.in" className="text-teal-400 hover:underline text-sm">
            contact@examsathi.in
          </a>
          <p className="text-slate-400 text-xs mt-1">For general questions, partnerships, and feedback.</p>
        </div>

        <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700">
          <h2 className="text-white font-bold mb-3">🐛 Report a Bug or Content Error</h2>
          <p className="text-slate-300 text-sm mb-2">Found a wrong answer or a technical issue?</p>
          <a href="mailto:content@examsathi.in?subject=Content Error Report" className="text-teal-400 hover:underline text-sm">
            content@examsathi.in
          </a>
          <p className="text-slate-400 text-xs mt-1">Please include: question ID (if applicable), the error you found, and the correct information with a source link.</p>
        </div>

        <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700">
          <h2 className="text-white font-bold mb-3">💡 Suggest a Feature</h2>
          <p className="text-slate-300 text-sm mb-2">Have an idea that would help students?</p>
          <a href="mailto:feedback@examsathi.in?subject=Feature Suggestion" className="text-teal-400 hover:underline text-sm">
            feedback@examsathi.in
          </a>
        </div>

        <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700">
          <h2 className="text-white font-bold mb-3">🔗 GitHub</h2>
          <a href="https://github.com/satdevkumar021-glitch/examsathi" className="text-teal-400 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
            github.com/satdevkumar021-glitch/examsathi
          </a>
          <p className="text-slate-400 text-xs mt-1">Open-source contributions and issue reports are welcome.</p>
        </div>

        <p className="text-xs text-slate-500 text-center mt-4">
          ExamSathi is a community project. We are a small team and may take 2-3 days to respond.
        </p>
      </div>

      <div className="flex gap-4 justify-center mt-6 text-xs text-slate-500">
        <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
        <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
        <Link href="/about" className="hover:text-slate-400">About</Link>
      </div>
    </div>
  );
}
