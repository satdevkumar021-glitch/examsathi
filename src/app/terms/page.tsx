import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | ExamSathi',
  description: 'ExamSathi terms of service and usage guidelines.',
};

export default function Terms() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-slate-100 pb-20">
      <Link href="/dashboard" className="text-teal-400 text-sm mb-4 inline-block hover:underline">← Back to Dashboard</Link>
      <h1 className="text-2xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-slate-400 text-xs mb-6">Last updated: January 2025</p>
      
      <div className="space-y-6 text-slate-300 text-sm">
        <section>
          <h2 className="text-lg font-bold text-white">1. Free Service</h2>
          <p>ExamSathi is and will remain free for all students. We do not charge for any core study features including mock tests, lessons, flip cards, or roadmaps.</p>
        </section>
        
        <section>
          <h2 className="text-lg font-bold text-white">2. Content Accuracy</h2>
          <p>While we strive for accuracy, ExamSathi is not an official government source. Always verify exam patterns, syllabus and results from official recruitment board websites. AI-generated content is clearly labelled and should not be treated as verified until reviewed by a human expert.</p>
        </section>
        
        <section>
          <h2 className="text-lg font-bold text-white">3. Acceptable Use</h2>
          <p>You may use ExamSathi for personal exam preparation only. You may not: copy or redistribute our question bank commercially; attempt to reverse-engineer or scrape the platform; create fake accounts or abuse the demo login system.</p>
        </section>
        
        <section>
          <h2 className="text-lg font-bold text-white">4. Advertisements</h2>
          <p>ExamSathi displays Google AdSense advertisements on some pages to support the platform&apos;s free operation. Advertisements are never shown during live mock tests.</p>
        </section>
        
        <section>
          <h2 className="text-lg font-bold text-white">5. Limitation of Liability</h2>
          <p>ExamSathi is provided &apos;as is&apos;. We are not liable for any loss resulting from reliance on content, technical issues, or exam results.</p>
        </section>
        
        <section>
          <h2 className="text-lg font-bold text-white">6. Contact</h2>
          <p>Questions about these terms: <a href="mailto:contact@examsathi.in" className="text-teal-400 hover:underline">contact@examsathi.in</a></p>
        </section>
      </div>
    </div>
  );
}
