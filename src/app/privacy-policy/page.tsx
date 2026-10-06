import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | ExamSathi',
  description: 'ExamSathi Privacy Policy detailing data protection, cookie policy, Google AdSense compliance, and candidate privacy rights under DPDP Act 2023.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">Privacy Policy (गोपनीयता नीति)</h1>
          <p className="text-xs text-slate-400">Effective Date: October 2026 • Compliant with DPDP Act 2023</p>
        </div>
      </div>

      <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-4 text-xs text-slate-300 leading-relaxed">
        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">1. Introduction & Our Commitment</h2>
          <p>
            ExamSathi (&ldquo;परीक्षा साथी&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an open, non-profit educational initiative dedicated to providing 100% free, high-fidelity competitive examination preparation for students across India. We strictly respect your personal privacy and comply with the Digital Personal Data Protection Act 2023 (DPDP Act) and international data protection standards.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">2. Information We Collect</h2>
          <p>
            We adhere to minimal data collection principles. To access the platform as a guest, no sensitive personal information is mandatory:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Account Data:</strong> Name, optional phone number/email, and study state preferences when you register.</li>
            <li><strong>Learning Progress:</strong> Completed topics, quiz attempts, FSRS card review intervals, and Pomodoro focus desk hours stored securely in your browser session or encrypted database.</li>
            <li><strong>No Payment Details:</strong> ExamSathi is 100% free; we never ask for or store credit cards, UPI PINs, or banking credentials.</li>
          </ul>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">3. Google AdSense & Third-Party Cookies</h2>
          <p>
            To fund server hosting, bandwidth, and educational content maintenance, ExamSathi may display non-intrusive advertisements served by Google AdSense:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve ads based on prior visits to our site or other websites.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">Google Ads Settings</a>.</li>
            <li>Alternatively, you can opt out of third-party vendor cookies by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">www.aboutads.info</a>.</li>
          </ul>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">4. User Notes & AI Generation Privacy</h2>
          <p>
            When you upload or paste syllabus notes into the AI generator, your text is processed in-memory with strict zero-retention policies. We do not use candidate notes to train or fine-tune public machine learning models.
          </p>
        </section>

        <section className="space-y-1.5">
          <h2 className="text-sm font-bold text-white">5. Contact Our Data Protection Officer</h2>
          <p>
            For privacy inquiries, data rectification, or account deletion requests, reach out directly to our team at: <strong className="text-white">privacy@examsathi.in</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
