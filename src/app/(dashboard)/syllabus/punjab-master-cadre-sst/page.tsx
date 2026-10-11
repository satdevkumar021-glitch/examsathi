import Link from 'next/link';
import {
    MASTER_CADRE_TRUST_LEVELS,
    MASTER_CADRE_SST_PATTERNS_BY_YEAR,
    MASTER_CADRE_SST_BLUEPRINT_DOMAINS
} from '@/lib/data/master-cadre-sst-blueprint';
import { getLessonByTopicId } from '@/lib/data/lessons';
import { getTestQuestions } from '@/lib/data/question_bank_engine';

export default function MasterCadreSstBlueprintPage() {
    return (
        <div className="max-w-5xl mx-auto p-5 space-y-6 text-slate-200">
            {/* Header & Breadcrumb */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-teal-300">
                    <Link href="/syllabus" className="underline hover:text-teal-200">
                        ← Back to All Exam Syllabi
                    </Link>
                    <span>•</span>
                    <a
                        href="https://educationrecruitmentboard.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-teal-200"
                    >
                        Official ERB Punjab Portal (educationrecruitmentboard.com) ↗
                    </a>
                </div>
                <h1 className="text-2xl font-bold text-white">
                    Punjab Master Cadre — Social Science (SST): Syllabus Blueprint, Per-Year Pattern & B→I→A Curriculum
                </h1>
                <p className="text-sm text-slate-300 leading-relaxed">
                    Complete trilingual (English · ਪੰਜਾਬੀ · हिंदी) curriculum map for Education Recruitment Board (ERB) Punjab Master Cadre Social Science (Classes 6–10 TGT). Every topic is organized in{' '}
                    <strong className="text-teal-300">Level B (Basic: Class 6–8) → Level I (Intermediate: Class 9–10) → Level A (Advanced: Class 11–12 &amp; Graduation)</strong>{' '}
                    order and paired with a dedicated Topic Mini Mock.
                </p>
            </div>

            {/* Section 0: Trust Levels & Provenance Safeguards */}
            <section className="bg-slate-800/90 border border-amber-500/40 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-base font-bold text-amber-300">
                        🛡️ Trust Levels &amp; Content Provenance Architecture (Read First)
                    </h2>
                    <span className="text-xs bg-amber-950/70 text-amber-200 border border-amber-600/40 px-2.5 py-0.5 rounded-full font-semibold">
                        Zero AI-Invented PYQs Policy
                    </span>
                </div>
                <p className="text-xs text-slate-300">
                    ExamSathi never lets an AI &ldquo;recall&rdquo; old exam questions from memory or fabricate historical topic-weight percentages. Verified past-paper items come only from scanned papers and official answer keys, while all newly authored B→I→A practice questions are transparently marked as <code className="text-teal-300">authored-original</code> with NCERT/PSEB textbook citations.
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-700">
                    <table className="w-full text-xs text-left border-collapse">
                        <thead className="bg-slate-900 text-teal-300 border-b border-slate-700">
                            <tr>
                                <th className="p-2.5 font-bold border-r border-slate-700">Blueprint Section</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Source</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Trust &amp; Verification Rule</th>
                                <th className="p-2.5 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                            {MASTER_CADRE_TRUST_LEVELS.map((row) => (
                                <tr key={row.part}>
                                    <td className="p-2.5 font-semibold text-white border-r border-slate-800">{row.part}</td>
                                    <td className="p-2.5 text-slate-300 border-r border-slate-800">{row.source}</td>
                                    <td className="p-2.5 text-slate-300 border-r border-slate-800">{row.trustGuidance}</td>
                                    <td className="p-2.5">
                                        <span className="inline-block bg-teal-950/80 text-teal-300 border border-teal-600/40 px-2 py-0.5 rounded text-[11px] font-semibold">
                                            {row.statusBadge}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Section 1: Per-Year Exam Pattern Database */}
            <section className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 space-y-3">
                <h2 className="text-base font-bold text-white">
                    📅 Section 1: Exam Pattern Stored Per Recruitment Year (ERB Punjab)
                </h2>
                <p className="text-xs text-slate-300">
                    Because recruitment rules (qualifying Paper-A, subject combinations, and marking schemes) can change across notifications, ExamSathi stores exam pattern metadata per recruitment cycle rather than hard-coding a single static pattern:
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-700">
                    <table className="w-full text-xs text-left border-collapse">
                        <thead className="bg-slate-900 text-indigo-300 border-b border-slate-700">
                            <tr>
                                <th className="p-2.5 font-bold border-r border-slate-700">Recruitment Year / Cycle</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Marks &amp; Duration</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Negative Marking</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">SST Subject Combination Rule</th>
                                <th className="p-2.5 font-bold">Compulsory Punjabi (Paper-A)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                            {MASTER_CADRE_SST_PATTERNS_BY_YEAR.map((pat) => (
                                <tr key={pat.yearCycle}>
                                    <td className="p-2.5 font-semibold text-white border-r border-slate-800">
                                        <div>{pat.yearCycle}</div>
                                        <div className="text-[11px] text-slate-400 font-normal">{pat.notificationPostCode}</div>
                                    </td>
                                    <td className="p-2.5 text-slate-200 border-r border-slate-800">
                                        {pat.totalQuestions} MCQs · {pat.totalMarks} Marks · {pat.durationMinutes} Mins
                                    </td>
                                    <td className="p-2.5 text-emerald-300 font-medium border-r border-slate-800">
                                        {pat.negativeMarking}
                                    </td>
                                    <td className="p-2.5 text-slate-300 border-r border-slate-800">
                                        {pat.subjectCombinationRule}
                                    </td>
                                    <td className="p-2.5 text-slate-300">{pat.qualifyingPaperA}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Sections 2 & 3: Official ERB Syllabus Headings -> Validated B -> I -> A Topic Tree */}
            <section className="space-y-5">
                <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white">
                        📚 Sections 2 &amp; 3: Official ERB Syllabus Headings &amp; B → I → A Topic Tree
                    </h2>
                    <p className="text-xs text-slate-400">
                        Click <strong className="text-teal-300">Read B→I→A Lesson</strong> to study Basic (Class 6–8) → Intermediate (Class 9–10) → Advanced (Class 11–12 / Graduation) notes, tables, worked examples, misconceptions, and flashcards, or launch a <strong className="text-indigo-300">Topic Mini Mock</strong> directly.
                    </p>
                </div>

                {MASTER_CADRE_SST_BLUEPRINT_DOMAINS.map((domain) => (
                    <div
                        key={domain.domainId}
                        className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 space-y-4"
                    >
                        <div className="space-y-2 border-b border-slate-700 pb-3">
                            <h3 className="text-base font-bold text-teal-300">{domain.domainTitle.en}</h3>
                            <p className="text-xs text-slate-300">
                                {domain.domainTitle.pa} · {domain.domainTitle.hi}
                            </p>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                                <span className="text-[11px] font-bold text-amber-300 mr-1">
                                    Official ERB Headings:
                                </span>
                                {domain.officialHeadings.map((h) => (
                                    <span
                                        key={h}
                                        className="text-[11px] bg-slate-900 text-slate-200 border border-slate-700 px-2 py-0.5 rounded-md"
                                    >
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3.5">
                            {domain.topics.map((item) => {
                                const lesson = getLessonByTopicId(item.topicId);
                                const qCount = getTestQuestions({
                                    topicId: item.topicId,
                                    examId: 'punjab-master-cadre-sst',
                                    count: 150
                                }).length;

                                return (
                                    <article
                                        key={item.topicId}
                                        className="bg-slate-900/70 border border-slate-700/80 rounded-xl p-3.5 space-y-2.5"
                                    >
                                        <div className="flex items-start justify-between flex-wrap gap-2">
                                            <div>
                                                <span className="text-[11px] font-semibold text-indigo-300 uppercase tracking-wider">
                                                    Covers Official Heading: {item.officialHeadingCovered}
                                                </span>
                                                <h4 className="text-sm font-bold text-white mt-0.5">
                                                    {lesson ? lesson.title.en : item.topicId}
                                                </h4>
                                                {lesson && (
                                                    <p className="text-xs text-slate-400">
                                                        {lesson.title.pa} · {lesson.title.hi}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs">
                                                <span className="bg-emerald-950/70 text-emerald-300 border border-emerald-600/40 px-2 py-0.5 rounded-full font-semibold">
                                                    {lesson ? 'B→I→A Lesson Ready' : 'Pending'}
                                                </span>
                                                <span className="bg-indigo-950/70 text-indigo-300 border border-indigo-600/40 px-2 py-0.5 rounded-full font-semibold">
                                                    {qCount} MCQs
                                                </span>
                                            </div>
                                        </div>

                                        {/* B -> I -> A Progression */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                                            <div className="bg-slate-800/80 border border-slate-700/70 rounded-lg p-2.5">
                                                <span className="font-bold text-emerald-400 block mb-1">
                                                    [Level B: Basic — Class 6–8]
                                                </span>
                                                <p className="text-slate-300">{item.levelProgression.basic}</p>
                                            </div>
                                            <div className="bg-slate-800/80 border border-slate-700/70 rounded-lg p-2.5">
                                                <span className="font-bold text-amber-400 block mb-1">
                                                    [Level I: Intermediate — Class 9–10]
                                                </span>
                                                <p className="text-slate-300">{item.levelProgression.intermediate}</p>
                                            </div>
                                            <div className="bg-slate-800/80 border border-slate-700/70 rounded-lg p-2.5">
                                                <span className="font-bold text-rose-400 block mb-1">
                                                    [Level A: Advanced — Class 11–12 / Grad]
                                                </span>
                                                <p className="text-slate-300">{item.levelProgression.advanced}</p>
                                            </div>
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold">
                                            <Link
                                                href={`/lesson/${item.topicId}/?exam=punjab-master-cadre-sst`}
                                                className="bg-teal-600/20 hover:bg-teal-600/30 text-teal-300 border border-teal-500/40 px-3 py-1.5 rounded-lg transition"
                                            >
                                                📖 Read B→I→A Deep-Dive Lesson →
                                            </Link>
                                            {qCount > 0 && (
                                                <Link
                                                    href={`/mock-test/topic-${item.topicId}/?exam=punjab-master-cadre-sst&count=${Math.min(10, qCount)}`}
                                                    className="bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 px-3 py-1.5 rounded-lg transition"
                                                >
                                                    🎯 Start {Math.min(10, qCount)}-Q Topic Mini Mock →
                                                </Link>
                                            )}
                                            {qCount >= 20 && (
                                                <Link
                                                    href={`/mock-test/topic-${item.topicId}/?exam=punjab-master-cadre-sst&count=20`}
                                                    className="text-slate-300 hover:text-white underline"
                                                >
                                                    20-Q Practice
                                                </Link>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
