import Link from 'next/link';

export const metadata = {
  title: 'About ExamSathi | Free Exam Preparation India',
  description: 'About ExamSathi — a free, AI-driven exam preparation platform for Punjab, Rajasthan, Haryana and Central government exam aspirants.',
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-slate-100 pb-20">
      <Link href="/dashboard" className="text-teal-400 text-sm mb-4 inline-block hover:underline">← Back to Dashboard</Link>
      <h1 className="text-2xl font-bold text-white mb-2">About ExamSathi</h1>
      <p className="text-slate-400 text-xs mb-6">परीक्षा साथी — Your Free Exam Preparation Companion</p>
      
      <div className="space-y-5 text-slate-300 text-sm">
        <p>ExamSathi is a free, open exam preparation platform built for students preparing for government exams in Punjab, Rajasthan, Haryana and across India. Our mission is simple: give every student — regardless of their financial situation — access to high-quality study material.</p>
        
        <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
          <h2 className="text-white font-bold mb-2">What we offer</h2>
          <ul className="space-y-1 text-sm">
            <li>✅ Topic-wise study notes for Punjab Master Cadre, ETT, PSSSB Clerk, Police and more</li>
            <li>✅ CBT mock tests following the exact official exam pattern</li>
            <li>✅ Flip cards with spaced repetition for long-term retention</li>
            <li>✅ Study roadmap with daily targets</li>
            <li>✅ Virtual library with Pomodoro focus timer</li>
            <li>✅ Punjabi (Raavi) typing practice</li>
            <li>✅ Available in Hindi, Punjabi (Gurmukhi) and English</li>
          </ul>
        </div>
        
        <p>Content is contributed by educators and subject matter experts, and verified against official NCERT, PSEB, CBSE and state board sources. AI-generated content is clearly labelled as unverified until reviewed.</p>
        
        <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700">
          <h2 className="text-white font-bold mb-2">Exam coverage</h2>
          <p className="text-xs text-slate-400">Punjab: Master Cadre, Lecturer Cadre, ETT, PSTET, PSSSB Clerk/Patwari, Punjab Police</p>
          <p className="text-xs text-slate-400 mt-1">Rajasthan: REET Level 1 & 2, Rajasthan Police, RSMSSB exams</p>
          <p className="text-xs text-slate-400 mt-1">Haryana: HTET, Haryana Police</p>
          <p className="text-xs text-slate-400 mt-1">Central: SSC CGL/CHSL/MTS, CTET, UGC NET, Army Agniveer</p>
        </div>
        
        <p className="text-xs text-slate-400">ExamSathi is not affiliated with any recruitment board or government body. Always check official websites for exam dates, admit cards and results.</p>
        
        <div className="flex gap-3 flex-wrap">
          <Link href="/privacy" className="text-teal-400 text-xs hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-teal-400 text-xs hover:underline">Terms of Service</Link>
          <a href="mailto:contact@examsathi.in" className="text-teal-400 text-xs hover:underline">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
