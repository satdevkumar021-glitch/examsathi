import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service & Disclaimer',
  description: 'ExamSathi Terms of Service governing free access, educational content use, and disclaimers of official government affiliation.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">Terms of Service (सेवा की शर्तें)</h1>
          <p className="text-xs text-slate-400">Last Revised: October 2026</p>
        </div>
      </div>

      <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-4 text-xs text-slate-300 leading-relaxed">
        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">1. Nature of the Platform &amp; Disclaimer</h2>
          <p>
            ExamSathi is an independent, free educational technology platform designed to assist candidates with competitive exam preparation. ExamSathi is NOT an official agency of any state government, central government body, PSSSB, PPSC, HSSC, RPSC, or SSC. Official notifications, admit cards, and results must always be verified on the respective official government portals.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">2. Free Access &amp; Non-Commercial Use</h2>
          <p>
            All study notes, flashcard sets, past year question archives, and CBT tests on ExamSathi are provided free of cost for personal, non-commercial educational study. Redistribution, commercial resale, or bulk scraping of questions without explicit attribution is strictly prohibited.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">3. Content Accuracy &amp; Errata Protocol</h2>
          <p>
            While every question, syllabus module, and answer key is curated from official gazettes and standard textbooks (NCERT, PSEB, BSEH), typographical errors or syllabus revisions by exam boards may occur. If you discover a discrepancy, please use our Errata Report feature to alert our editorial team.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">4. Advertisements &amp; Operations</h2>
          <p>
            ExamSathi may display clean educational advertisements on informative pages to cover server and hosting costs. Advertisements are strictly prohibited and never displayed during live CBT mock tests or focused study sessions.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">5. Limitation of Liability</h2>
          <p>
            ExamSathi is provided &apos;as is&apos;. We are not liable for any loss resulting from reliance on content, technical interruptions, or individual exam results.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">6. Inquiries</h2>
          <p>
            Questions regarding these terms: <a href="mailto:contact@examsathi.in" className="text-teal-400 hover:underline">contact@examsathi.in</a>
          </p>
        </section>

        <div className="flex gap-4 pt-3 border-t border-slate-700/80 text-xs justify-center text-slate-400">
          <Link href="/privacy/" className="hover:text-teal-400">Privacy Policy</Link>
          <Link href="/about/" className="hover:text-teal-400">About Us</Link>
          <Link href="/contact/" className="hover:text-teal-400">Contact</Link>
        </div>
      </div>
    </div>
  );
}
