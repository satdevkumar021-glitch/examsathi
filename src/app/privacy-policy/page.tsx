import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | ExamSathi',
  description: 'How ExamSathi handles browser study data, accounts, optional cloud backups and cloud AI requests.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3">
        <Link href="/" aria-label="Back to home" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-white">Privacy Policy (गोपनीयता नीति)</h1>
          <p className="text-xs text-slate-400">Last updated: 11 October 2026</p>
        </div>
      </div>

      <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-5 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-bold text-white">1. Browser study data</h2>
          <p>ExamSathi is an exam preparation service. Guest study does not require an account. Progress, saved questions and study notes are stored in this browser. Browser storage is not an encrypted private vault: someone with access to your browser profile may be able to read it. Clearing browser data can remove these records.</p>
          <p>Signing in does not automatically upload your notes or progress. Hosting services may receive ordinary request information, such as your IP address, when you access the site.</p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-white">2. Accounts and optional cloud backups</h2>
          <p>Account authentication is handled through Supabase. Registration sends your email, password, display name, selected study preferences and any optional phone number you provide to the authentication service.</p>
          <p>Cloud backups are manual. Selecting the upload checkbox and saving to cloud sends the study records included in your backup, including saved notes and progress, to your Supabase account and replaces its previous backup. Restoring a cloud backup replaces study records on this device. Signing out does not erase the browser&apos;s saved study vault.</p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-white">3. Documents and local recall</h2>
          <p>Document text extraction and OCR run in your browser. OCR may download runtime and language assets, but document pixels are processed locally. Review the extracted text before generating questions. Local source recall uses your text on this device without sending it to the cloud AI provider.</p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-white">4. Optional cloud AI</h2>
          <p>When cloud AI is available and you choose it, pressing Generate sends the reviewed study text through the ExamSathi server to Google Gemini to create draft questions. This includes the text you submit, not just the selected exam label. Do not submit sensitive, confidential or personal information; choose local recall for private notes.</p>
          <p>Google&apos;s processing depends on the provider account, billing arrangement, region and applicable terms. Under unpaid-service terms, submitted content and responses may be used to improve Google products and reviewed by people. Paid-service terms differ and can still permit limited logging. ExamSathi does not promise zero retention or a universal exclusion from model improvement. Read the <a href="https://ai.google.dev/gemini-api/terms" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">Gemini API terms</a> before choosing cloud AI.</p>
          <p lang="hi">क्लाउड AI चुनकर Generate दबाने पर आपका जाँचा हुआ अध्ययन पाठ Google Gemini को भेजा जाता है। डेटा का उपयोग और संग्रहण प्रदाता की लागू शर्तों पर निर्भर है। निजी या संवेदनशील नोट्स के लिए स्थानीय अभ्यास चुनें।</p>
          <p lang="pa">ਕਲਾਉਡ AI ਚੁਣ ਕੇ Generate ਦਬਾਉਣ ਉੱਤੇ ਤੁਹਾਡਾ ਜਾਂਚਿਆ ਹੋਇਆ ਅਧਿਐਨ ਪਾਠ Google Gemini ਨੂੰ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ। ਡਾਟੇ ਦੀ ਵਰਤੋਂ ਅਤੇ ਸਟੋਰੇਜ ਪ੍ਰਦਾਤਾ ਦੀਆਂ ਲਾਗੂ ਸ਼ਰਤਾਂ ਉੱਤੇ ਨਿਰਭਰ ਹਨ। ਨਿੱਜੀ ਜਾਂ ਸੰਵੇਦਨਸ਼ੀਲ ਨੋਟਸ ਲਈ ਸਥਾਨਕ ਅਭਿਆਸ ਚੁਣੋ।</p>
          <p>Cloud AI questions are drafts that need your review. Saving or backing up generated questions may also save their source excerpts.</p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-white">5. Cookies and third parties</h2>
          <p>Authentication uses browser session storage or cookies. If advertising is enabled on a deployment, advertising providers may process request information and use cookies under their own policies. You can review Google&apos;s advertising preferences at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">Google Ads Settings</a>.</p>
        </section>

        <section className="space-y-2">
          <h2 className="font-bold text-white">6. Export, deletion and contact</h2>
          <p>You can download a study backup from Profile. Downloaded backups may contain personal notes; keep them private. Removing local browser data does not delete a cloud backup or provider-held data, and signing out does not delete your account.</p>
          <p>For questions about your data or requests for account or cloud-data deletion, <Link href="/contact/" className="text-teal-400 underline">contact the maintainer</Link>. Do not post passwords, access tokens or private documents in public issue trackers. Provider-held data is subject to the provider&apos;s applicable terms and deletion processes.</p>
        </section>
      </div>
    </div>
  );
}
