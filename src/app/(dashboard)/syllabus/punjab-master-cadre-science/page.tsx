import Link from 'next/link';
import {
    MASTER_CADRE_SCIENCE_TRUST_LEVELS,
    MASTER_CADRE_SCIENCE_RED_FLAGS,
    MASTER_CADRE_SCIENCE_HEADING_PROXY,
    MASTER_CADRE_SCIENCE_PATTERNS_BY_AD,
    MASTER_CADRE_SCIENCE_UNITS_AND_CONSTANTS,
    MASTER_CADRE_SCIENCE_FORMULA_CARDS,
    MASTER_CADRE_SCIENCE_BLUEPRINT_DOMAINS,
    MASTER_CADRE_SCIENCE_TEACHING_ITEMS_CHECK,
    MASTER_CADRE_SCIENCE_STUDENT_STRATEGY
} from '@/lib/data/master-cadre-science-blueprint';
import { getLessonByTopicId } from '@/lib/data/lessons';
import { getTestQuestions } from '@/lib/data/question_bank_engine';

export default function MasterCadreScienceBlueprintPage() {
    const sampleJsonRecord = {
        exam: 'Punjab Master Cadre',
        subject: 'Science',
        year: 2026,
        mode: 'CBT',
        questions: 150,
        marks: 150,
        minutes: 150,
        negative_marking: 0,
        branch_weights: 'unknown - derive from past papers',
        source: 'https://educationrecruitmentboard.com/',
        verified: false
    };

    return (
        <div className="max-w-5xl mx-auto p-5 space-y-6 text-slate-200">
            {/* Header & Breadcrumb */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-teal-300 flex-wrap">
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
                        Official ERB Punjab Portal ↗
                    </a>
                    <span>•</span>
                    <a
                        href="https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-teal-200"
                    >
                        Archived ERB 2022 Science Syllabus PDF ↗
                    </a>
                </div>
                <h1 className="text-2xl font-bold text-white">
                    🔬 Punjab Master Cadre — Science: 64-Heading Blueprint, Red-Flag Audit &amp; B→I→H→G(/P) Curriculum
                </h1>
                <p className="text-sm text-slate-300 leading-relaxed">
                    Complete trilingual (English · ਪੰਜਾਬੀ · हिंदी) curriculum map for Education Recruitment Board (ERB) Punjab Master Cadre Science (Physics, Physical/Inorganic/Organic Chemistry, Botany, Zoology &amp; Lab Foundation for Classes 6–10 TGT). Every topic is structured upward from{' '}
                    <strong className="text-teal-300">
                        Level B (Class 6–8) → Level I (Class 9–10) → Level H (Class 11–12) → Level G (B.Sc. Graduation) → Level P (Flagged Postgraduate)
                    </strong>{' '}
                    and paired with code-verified numerical &amp; reaction Topic Mini Mocks.
                </p>
            </div>

            {/* Section 0A: Trust Levels Table */}
            <section className="bg-slate-800/90 border border-amber-500/40 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-base font-bold text-amber-300">
                        🛡️ Trust Levels &amp; Scientific Accuracy Safeguards (Read First)
                    </h2>
                    <span className="text-xs bg-amber-950/70 text-amber-200 border border-amber-600/40 px-2.5 py-0.5 rounded-full font-semibold">
                        Code-Verified Numericals · Zero Invented PYQs
                    </span>
                </div>
                <p className="text-xs text-slate-300">
                    ExamSathi never lets an AI recall old exam questions from memory or invent branch weightage percentages. All numerical practice items are verified by executable code, and all newly authored B→I→H→G/P questions are tagged as <code className="text-teal-300">authored-original</code> with NCERT/PSEB/B.Sc. textbook provenance.
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-700">
                    <table className="w-full text-xs text-left border-collapse">
                        <thead className="bg-slate-900 text-teal-300 border-b border-slate-700">
                            <tr>
                                <th className="p-2.5 font-bold border-r border-slate-700">Blueprint Part</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Source</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Trust &amp; Verification Guidance</th>
                                <th className="p-2.5 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                            {MASTER_CADRE_SCIENCE_TRUST_LEVELS.map((row) => (
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

            {/* Section 0B: 5 Gaps and Red Flags Resolved */}
            <section className="bg-slate-800/90 border border-rose-500/40 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-base font-bold text-rose-300">
                        🚩 5 Critical Syllabus Gaps &amp; Red Flags (Resolved in ExamSathi)
                    </h2>
                    <span className="text-xs bg-rose-950/80 text-rose-200 border border-rose-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                        M.Sc. Depth &amp; PSSSB Advt. 04/2023 Copy Warning
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {MASTER_CADRE_SCIENCE_RED_FLAGS.map((rf) => (
                        <div
                            key={rf.id}
                            className="bg-slate-900/80 border border-slate-700 rounded-xl p-3.5 space-y-2"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="text-xs font-bold text-white">{rf.title.en}</h3>
                                <span
                                    className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase shrink-0 ${
                                        rf.severity === 'critical'
                                            ? 'bg-rose-950 text-rose-300 border border-rose-600/40'
                                            : rf.severity === 'high'
                                              ? 'bg-amber-950 text-amber-300 border border-amber-600/40'
                                              : 'bg-teal-950 text-teal-300 border border-teal-600/40'
                                    }`}
                                >
                                    {rf.severity}
                                </span>
                            </div>
                            <p className="text-[11px] text-amber-200/90">{rf.title.pa}</p>
                            <p className="text-xs text-slate-300">{rf.warningDetail.en}</p>
                            <div className="bg-emerald-950/40 border border-emerald-600/30 rounded-lg p-2 text-[11px] text-emerald-200">
                                <strong className="text-emerald-300">How ExamSathi Resolves This:</strong> {rf.resolutionInApp.en}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 1 & 8.6: Per-Advertisement Pattern Store */}
            <section className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-base font-bold text-white">
                        📅 Section 1 &amp; 8.6: Exam Pattern Stored Per Advertisement (No Negative Marking)
                    </h2>
                    <span className="text-xs bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                        150 MCQs · 150 Mins · 0 Negative Marking → Attempt All 150!
                    </span>
                </div>
                <p className="text-xs text-slate-300">
                    Because patterns and subject-combination rules can change between recruitments, ExamSathi stores the pattern per advertisement rather than hard-coding one:
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-700">
                    <table className="w-full text-xs text-left border-collapse">
                        <thead className="bg-slate-900 text-indigo-300 border-b border-slate-700">
                            <tr>
                                <th className="p-2.5 font-bold border-r border-slate-700">Year &amp; Advertisement</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Mode, Questions &amp; Time</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Negative Marking</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Branch Weights &amp; Combination Rule</th>
                                <th className="p-2.5 font-bold">Verified Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                            {MASTER_CADRE_SCIENCE_PATTERNS_BY_AD.map((pat) => (
                                <tr key={`${pat.year}-${pat.advertisementRef}`}>
                                    <td className="p-2.5 font-semibold text-white border-r border-slate-800">
                                        <div>{pat.year} — {pat.subject}</div>
                                        <div className="text-[11px] text-slate-400 font-normal">{pat.advertisementRef}</div>
                                    </td>
                                    <td className="p-2.5 text-slate-200 border-r border-slate-800">
                                        {pat.mode} · {pat.questions} MCQs · {pat.marks} Marks · {pat.minutes} Mins
                                    </td>
                                    <td className="p-2.5 text-emerald-300 font-semibold border-r border-slate-800">
                                        {pat.negative_marking} (No Penalty)
                                    </td>
                                    <td className="p-2.5 text-slate-300 border-r border-slate-800 space-y-1">
                                        <div><strong>Weights:</strong> {pat.branch_weights}</div>
                                        <div className="text-[11px] text-slate-400">{pat.subjectCombinationRule}</div>
                                    </td>
                                    <td className="p-2.5">
                                        {pat.verified ? (
                                            <span className="inline-block bg-emerald-950 text-emerald-300 border border-emerald-600/40 px-2 py-0.5 rounded text-[11px] font-semibold">
                                                Official Archived
                                            </span>
                                        ) : (
                                            <span className="inline-block bg-amber-950 text-amber-300 border border-amber-600/40 px-2 py-0.5 rounded text-[11px] font-semibold">
                                                Verify Official PDF
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <details className="bg-slate-900/90 border border-slate-700 rounded-xl p-3 text-xs">
                    <summary className="cursor-pointer font-semibold text-teal-300">
                        View Section 8.6 Per-Advertisement JSON Schema Record
                    </summary>
                    <pre className="mt-2 p-2.5 bg-slate-950 rounded-lg text-slate-200 overflow-x-auto text-[11px]">
                        {JSON.stringify(sampleJsonRecord, null, 2)}
                    </pre>
                </details>
            </section>

            {/* Section 4: Heading-Count Planning Proxy vs Exam Weightage */}
            <section className="bg-slate-800/90 border border-indigo-500/40 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-base font-bold text-indigo-300">
                        📊 Section 4: Syllabus Heading-Count Proxy (64 Total Headings — NOT Exam Weightage!)
                    </h2>
                    <span className="text-xs bg-indigo-950 text-indigo-200 border border-indigo-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                        Content Breadth Proxy Only
                    </span>
                </div>
                <p className="text-xs text-slate-300">
                    Until question-by-question past-paper tagging is finalized for a given advertisement, this table shows the share of the <strong>64 reported syllabus headings</strong> across branches.{' '}
                    <strong className="text-amber-300">
                        Warning: This is NOT exam weightage—it is only a proxy for how many syllabus headings are listed.
                    </strong>{' '}
                    In ERB 2022/2020 notifications, each chosen subject (e.g., Physics, Chemistry, Biology/Maths) carried an equal <strong>50 marks (50 MCQs)</strong> out of 150.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {MASTER_CADRE_SCIENCE_HEADING_PROXY.map((row) => (
                        <div
                            key={row.branch}
                            className="bg-slate-900/80 border border-slate-700 rounded-xl p-3.5 space-y-2"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white">{row.branch}</span>
                                <span className="text-sm font-extrabold text-teal-300">
                                    {row.headingCount}/{row.totalHeadings} ({row.proxySharePercent}%)
                                </span>
                            </div>
                            <div className="text-[11px] text-amber-200">{row.branchPa}</div>
                            <p className="text-[11px] text-slate-300">{row.subBranchBreakdown}</p>
                            <p className="text-[11px] text-rose-300/90 bg-rose-950/40 border border-rose-700/30 rounded p-2">
                                ⚠️ {row.cautionNote}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2 & 3: Complete 64-Heading Validated Syllabus Tree & B→I→H→G(/P) Modules */}
            <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-lg font-bold text-white">
                        📚 Sections 2 &amp; 3: Validated 64-Heading Topic Tree (Level B → I → H → G → P)
                    </h2>
                    <div className="flex items-center gap-1.5 text-[11px] flex-wrap">
                        <span className="bg-emerald-950 text-emerald-300 border border-emerald-600/40 px-2 py-0.5 rounded font-semibold">
                            B = Class 6–8
                        </span>
                        <span className="bg-teal-950 text-teal-300 border border-teal-600/40 px-2 py-0.5 rounded font-semibold">
                            I = Class 9–10 (Teaching Level)
                        </span>
                        <span className="bg-indigo-950 text-indigo-300 border border-indigo-600/40 px-2 py-0.5 rounded font-semibold">
                            H = Class 11–12
                        </span>
                        <span className="bg-purple-950 text-purple-300 border border-purple-600/40 px-2 py-0.5 rounded font-semibold">
                            G = B.Sc. Graduation
                        </span>
                        <span className="bg-rose-950 text-rose-300 border border-rose-600/40 px-2 py-0.5 rounded font-semibold">
                            P = M.Sc. Postgraduate [Flagged]
                        </span>
                    </div>
                </div>

                {MASTER_CADRE_SCIENCE_BLUEPRINT_DOMAINS.map((domain) => (
                    <section
                        key={domain.domainId}
                        className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 space-y-4"
                    >
                        <div className="space-y-1 border-b border-slate-700 pb-3">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <h3 className="text-base font-bold text-teal-300">{domain.domainTitle.en}</h3>
                                <span className="text-xs bg-slate-900 text-slate-300 border border-slate-700 px-2.5 py-0.5 rounded-full">
                                    {domain.officialHeadingCount} Official Heading{domain.officialHeadingCount > 1 ? 's' : ''}
                                </span>
                            </div>
                            <p className="text-xs text-amber-200">{domain.domainTitle.pa}</p>
                            <p className="text-xs text-slate-400">{domain.domainTitle.hi}</p>
                            <div className="pt-2 flex flex-wrap gap-1.5">
                                {domain.officialHeadings.map((heading) => (
                                    <span
                                        key={heading}
                                        className="text-[11px] bg-slate-900/90 text-slate-200 border border-slate-700 px-2 py-0.5 rounded-md"
                                    >
                                        • {heading}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {domain.topics.map((item) => {
                                const lesson = getLessonByTopicId(item.topicId);
                                const scopedQuestions = getTestQuestions({
                                    examId: 'punjab-master-cadre-science',
                                    topicId: item.topicId,
                                    count: 100
                                });

                                return (
                                    <div
                                        key={item.topicId}
                                        className="bg-slate-900/80 border border-slate-700/90 rounded-xl p-4 space-y-3"
                                    >
                                        <div className="flex items-start justify-between flex-wrap gap-2">
                                            <div className="space-y-0.5">
                                                <div className="flex items-center gap-1.5 flex-wrap">
                                                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">
                                                        Covers: {item.officialHeadingsCovered}
                                                    </span>
                                                    {item.levelBadges.map((b) => (
                                                        <span
                                                            key={b}
                                                            className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                                                                b === 'P'
                                                                    ? 'bg-rose-950 text-rose-300 border border-rose-600/40'
                                                                    : 'bg-slate-800 text-teal-300 border border-slate-700'
                                                            }`}
                                                        >
                                                            Level {b}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h4 className="text-sm font-bold text-white">
                                                    {lesson?.title.en || item.topicId}
                                                </h4>
                                                {lesson?.title.pa && (
                                                    <p className="text-xs text-amber-200/90">{lesson.title.pa}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="text-[11px] bg-emerald-950/80 text-emerald-300 border border-emerald-600/40 px-2 py-0.5 rounded font-semibold">
                                                    {scopedQuestions.length} Scoped MCQs
                                                </span>
                                                <Link
                                                    href={`/lesson/${item.topicId}?exam=punjab-master-cadre-science`}
                                                    className="text-xs bg-teal-600 hover:bg-teal-500 text-white font-semibold px-3 py-1.5 rounded-lg transition"
                                                >
                                                    📖 Read B→I→H→G Lesson
                                                </Link>
                                                <Link
                                                    href={`/mock-test/custom?exam=punjab-master-cadre-science&subject=${domain.subjectRouteId}&topic=${item.topicId}`}
                                                    className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-3 py-1.5 rounded-lg transition"
                                                >
                                                    🎯 Topic Mini Mock
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                                            <div className="bg-slate-800/70 border border-emerald-500/30 rounded-lg p-2.5">
                                                <div className="font-bold text-emerald-300 mb-1">
                                                    🟢 Level B &amp; I (Class 6–10 View)
                                                </div>
                                                <p className="text-slate-300">{item.levelProgression.foundationBI}</p>
                                            </div>
                                            <div className="bg-slate-800/70 border border-indigo-500/30 rounded-lg p-2.5">
                                                <div className="font-bold text-indigo-300 mb-1">
                                                    🔵 Level H (Class 11–12 Core)
                                                </div>
                                                <p className="text-slate-300">{item.levelProgression.higherSecondaryH}</p>
                                            </div>
                                            <div className="bg-slate-800/70 border border-purple-500/30 rounded-lg p-2.5">
                                                <div className="font-bold text-purple-300 mb-1">
                                                    🟣 Level G (B.Sc. Graduation)
                                                </div>
                                                <p className="text-slate-300">{item.levelProgression.graduationG}</p>
                                            </div>
                                            <div className="bg-slate-800/70 border border-rose-500/30 rounded-lg p-2.5">
                                                <div className="font-bold text-rose-300 mb-1">
                                                    🔴 Level P (Postgrad / Red-Flag Check)
                                                </div>
                                                <p className="text-slate-300">
                                                    {item.levelProgression.postgradPFlag ||
                                                        'No M.Sc.-only extension needed; Class 11–12 & B.Sc. Graduation depth covers 100% of this unit.'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

            {/* Section 7: SI Units, Fundamental Constants & Formula/Reaction Flip Cards */}
            <section className="bg-slate-800/90 border border-teal-500/40 rounded-2xl p-4 space-y-4">
                <h2 className="text-base font-bold text-teal-300">
                    ⚗️ Section 7 Science Tools: SI Constants Sheet &amp; High-Yield Formula / Reaction Flip Cards
                </h2>
                <div className="overflow-x-auto rounded-xl border border-slate-700">
                    <table className="w-full text-xs text-left border-collapse">
                        <thead className="bg-slate-900 text-teal-300 border-b border-slate-700">
                            <tr>
                                <th className="p-2.5 font-bold border-r border-slate-700">Symbol</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Constant / Quantity (EN · PA · HI)</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">Standard Value</th>
                                <th className="p-2.5 font-bold border-r border-slate-700">SI Unit</th>
                                <th className="p-2.5 font-bold">Branch</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                            {MASTER_CADRE_SCIENCE_UNITS_AND_CONSTANTS.map((c) => (
                                <tr key={c.symbol}>
                                    <td className="p-2.5 font-mono font-bold text-amber-300 border-r border-slate-800">
                                        {c.symbol}
                                    </td>
                                    <td className="p-2.5 border-r border-slate-800">
                                        <div className="font-semibold text-white">{c.name.en}</div>
                                        <div className="text-[11px] text-slate-400">
                                            {c.name.pa} · {c.name.hi}
                                        </div>
                                    </td>
                                    <td className="p-2.5 font-mono text-emerald-300 border-r border-slate-800">{c.value}</td>
                                    <td className="p-2.5 font-mono text-slate-200 border-r border-slate-800">{c.siUnit}</td>
                                    <td className="p-2.5 text-slate-300">{c.branch}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white">
                        ⚡ Sample Formula, Named Reaction &amp; Biological Pathway Cards (25+ More Inside Each Lesson)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {MASTER_CADRE_SCIENCE_FORMULA_CARDS.map((card) => (
                            <div
                                key={card.id}
                                className="bg-slate-900/90 border border-slate-700 rounded-xl p-3.5 space-y-2 text-xs"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-teal-300">{card.branch}</span>
                                    <span className="bg-slate-800 text-amber-300 border border-slate-700 px-2 py-0.5 rounded text-[10px] font-bold">
                                        Level {card.levelTag}
                                    </span>
                                </div>
                                <div className="font-semibold text-white">{card.front.en}</div>
                                <div className="text-[11px] text-amber-200">{card.front.pa}</div>
                                <div className="p-2.5 bg-slate-800/80 rounded-lg text-slate-200 font-mono text-[11px]">
                                    {card.back.en}
                                </div>
                                <div className="text-[11px] text-emerald-300">
                                    💡 <strong>Exam Tip:</strong> {card.examTip.en}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3.4 & 6: Teaching Items Check & Student Strategy */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 space-y-3">
                    <h2 className="text-sm font-bold text-amber-300">
                        🔍 Section 3.4: Teaching-Related Items Audit Status
                    </h2>
                    <div className="space-y-2.5 text-xs">
                        {MASTER_CADRE_SCIENCE_TEACHING_ITEMS_CHECK.map((row) => (
                            <div
                                key={row.item}
                                className="bg-slate-900/70 border border-slate-700 rounded-xl p-3 space-y-1"
                            >
                                <div className="font-semibold text-white">{row.item}</div>
                                <div className="text-[11px] text-teal-300 font-semibold">{row.status}</div>
                                <p className="text-[11px] text-slate-300">{row.note}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 space-y-3">
                    <h2 className="text-sm font-bold text-emerald-300">
                        🎯 Section 6: Student Strategy for a 150-MCQ Zero-Penalty Science Paper
                    </h2>
                    <div className="space-y-2.5 text-xs">
                        {MASTER_CADRE_SCIENCE_STUDENT_STRATEGY.map((st) => (
                            <div
                                key={st.step}
                                className="bg-slate-900/70 border border-slate-700 rounded-xl p-3 space-y-1"
                            >
                                <div className="font-semibold text-white">
                                    {st.step}. {st.title.en}
                                </div>
                                <div className="text-[11px] text-amber-200">{st.title.pa}</div>
                                <p className="text-[11px] text-slate-300">{st.detail.en}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
