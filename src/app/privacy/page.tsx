import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | ExamSathi',
  description: 'ExamSathi privacy policy — how we collect, use and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-slate-100 pb-20">
      <Link href="/dashboard" className="text-teal-400 text-sm mb-4 inline-block hover:underline">← Back to Dashboard</Link>
      <h1 className="text-2xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-slate-400 text-xs mb-6">Last updated: January 2025 | Effective: January 2025</p>
      
      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-slate-300">
        <section>
          <h2 className="text-lg font-bold text-white">1. About ExamSathi</h2>
          <p>ExamSathi (परीक्षा साथी) is a free exam preparation platform for students in India. We are not affiliated with any government body. All content is provided for educational purposes.</p>
        </section>
        
        <section>
          <h2 className="text-lg font-bold text-white">2. Data We Collect</h2>
          <p><strong>When you use as a guest:</strong> No personal data is collected. Study progress is stored only in your browser&apos;s localStorage and never sent to our servers.</p>
          <p><strong>When you create an account (via Supabase Auth):</strong> We collect your email address, display name, and optional phone number. Your password is never stored by us — it is handled by Supabase&apos;s secure auth service.</p>
          <p><strong>Usage data:</strong> We may collect anonymised usage analytics (pages visited, features used) to improve the platform. This data is never sold.</p>
        </section>
        
        <section>
          <h2 className="text-lg font-bold text-white">3. Cookies and Advertising</h2>
          <p>ExamSathi uses Google AdSense to display advertisements on lesson and result pages. Google may use cookies to show relevant ads based on your browsing history. You can opt out of personalised ads at <a href="https://adssettings.google.com" className="text-teal-400 hover:underline" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.</p>
          <p>We never show ads inside live mock tests or on login/registration pages.</p>
        </section>
        
        <section>
          <h2 className="text-lg font-bold text-white">4. India DPDP Act Compliance</h2>
          <p>In compliance with India&apos;s Digital Personal Data Protection Act, 2023:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>We collect only data necessary to provide the service.</li>
            <li>You can request deletion of your account and all associated data by emailing us.</li>
            <li>We do not knowingly collect data from users under 13 years of age.</li>
            <li>You can export your study data from your Profile page.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-lg font-bold text-white">5. Contact</h2>
          <p>For privacy concerns, data deletion requests, or questions: <a href="https://github.com/satdevkumar021-glitch/examsathi/issues" className="text-teal-400 hover:underline">Contact the project maintainer</a></p>
        </section>
      </div>
    </div>
  );
}
