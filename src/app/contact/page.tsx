import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare, AlertCircle, Code2, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Errata Support',
  description: 'Contact ExamSathi editorial team, submit syllabus feedback, report question errata, or get help with your free account.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">Contact & Support (संपर्क करें)</h1>
          <p className="text-xs text-slate-400">Editorial Inquiries • Errata Reports • Student Feedback</p>
        </div>
      </div>

      <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-4 text-xs text-slate-300 leading-relaxed">
        <div className="p-4 bg-slate-900/80 border border-slate-700/80 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
            <Mail size={16} />
            <h3>Direct Email Contact</h3>
          </div>
          <p className="text-slate-300 text-xs">
            For general feedback, inquiries, or support:
          </p>
          <a href="mailto:support@examsathi.in" className="font-mono text-teal-300 text-xs bg-slate-800 p-2 rounded border border-slate-700 inline-block hover:underline">
            support@examsathi.in
          </a>
        </div>

        <div className="p-4 bg-amber-950/40 border border-amber-500/40 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <AlertCircle size={16} />
            <h3>Report Question Errata / Discrepancy</h3>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Found an issue with a question or answer key? Please email us at <a href="mailto:content@examsathi.in" className="text-amber-300 underline">content@examsathi.in</a> with:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300 text-[11px]">
            <li>Question ID or Topic Name</li>
            <li>Observed error & correct option</li>
            <li>Authoritative reference source (NCERT Chapter, PSEB Gazette, or Official Board Key)</li>
          </ul>
          <p className="text-[10px] text-amber-400">
            Our educator review panel resolves and updates verified errata within 48 hours.
          </p>
        </div>

        <div className="p-4 bg-blue-950/40 border border-blue-500/40 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
            <Lightbulb size={16} />
            <h3>Suggest a Feature</h3>
          </div>
          <p className="text-slate-300 text-xs">
            Have an idea to make studying easier for students? Let us know at <a href="mailto:feedback@examsathi.in" className="text-blue-300 underline">feedback@examsathi.in</a>.
          </p>
        </div>

        <div className="p-4 bg-slate-900/60 border border-slate-700/60 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
            <Code2 size={16} />
            <h3>Open Source & Repository</h3>
          </div>
          <p className="text-slate-300 text-xs">
            Contribute questions, fixes, or view code on GitHub:
          </p>
          <a href="https://github.com/satdevkumar021-glitch/examsathi" target="_blank" rel="noopener noreferrer" className="text-indigo-300 underline font-mono text-xs">
            github.com/satdevkumar021-glitch/examsathi
          </a>
        </div>

        <div className="flex gap-4 pt-3 border-t border-slate-700/80 text-xs justify-center text-slate-400">
          <Link href="/privacy/" className="hover:text-teal-400">Privacy Policy</Link>
          <Link href="/terms/" className="hover:text-teal-400">Terms of Service</Link>
          <Link href="/about/" className="hover:text-teal-400">About ExamSathi</Link>
        </div>
      </div>
    </div>
  );
}
