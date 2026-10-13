'use client';
import { useEffect, useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { loadQualityReport, type QualityItem, type QualityReportResponse } from '@/lib/quality-client';
import type { FlagKind } from '@/lib/question-quality';

const LABEL: Record<FlagKind, { text: string; hint: string; tone: string }> = {
  'key-suspect': { text: 'Check the answer key', hint: 'Strong learners pick a different option than the key.', tone: 'bg-rose-700 text-white' },
  'negative-discrimination': { text: 'Stronger learners do worse', hint: 'Better learners miss it more often than weaker ones. The wording may mislead.', tone: 'bg-rose-700 text-white' },
  'too-hard': { text: 'Almost nobody gets it', hint: 'Under 15% correct. Check the key and the wording.', tone: 'bg-amber-700 text-white' },
  'difficulty-mismatch': { text: 'Difficulty label looks wrong', hint: 'Marked easy but mostly missed, or marked hard but mostly right.', tone: 'bg-amber-700 text-white' },
  'too-easy': { text: 'Everybody gets it', hint: 'Over 97% correct. It teaches little and can be retired or made harder.', tone: 'bg-slate-600 text-white' },
};

const pct = (v: number) => `${Math.round(v * 100)}%`;

function Row({ item }: { item: QualityItem }) {
  const max = Math.max(1, ...Object.values(item.counts));
  return (
    <li className="space-y-2 rounded-xl border border-slate-700 bg-slate-800 p-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {item.flags.map(f => <span key={f} className={`rounded-full px-2 py-0.5 text-xs font-bold ${LABEL[f].tone}`}>{LABEL[f].text}</span>)}
        <span className="ml-auto font-mono text-xs text-slate-400">{item.id}</span>
      </div>
      <p className="text-[11px] text-slate-300">{item.flags.map(f => LABEL[f].hint).join(' ')}</p>
      <p className="text-[11px] text-slate-300">
        {item.n} answers · {pct(item.pCorrect)} correct · labelled {item.declaredDifficulty} · topic {item.topicId.replace(/-/g, ' ')}
        {item.discrimination !== null && <> · separates strong from weak: {item.discrimination.toFixed(2)}</>}
      </p>
      <div className="grid grid-cols-4 gap-2" role="img" aria-label={`Answers by option: ${(['A', 'B', 'C', 'D'] as const).map(l => `${l} ${item.counts[l]}`).join(', ')}. Key is ${item.key}.`}>
        {(['A', 'B', 'C', 'D'] as const).map(l => (
          <div key={l} className="text-center">
            <div className="flex h-12 items-end rounded bg-slate-900">
              <div className={`w-full rounded ${l === item.key ? 'bg-emerald-600' : 'bg-slate-500'}`} style={{ height: `${Math.max(4, (item.counts[l] / max) * 100)}%` }} />
            </div>
            <p className="mt-1 text-xs font-bold text-slate-300">{l}{l === item.key ? ' (key)' : ''}</p>
            <p className="text-xs text-slate-400">all {item.counts[l]} · top {item.upperCounts[l]}</p>
          </div>
        ))}
      </div>
    </li>
  );
}

/** Reviewer/superadmin view of questions that need attention, from real learner answers. */
export default function QualityPanel() {
  const [data, setData] = useState<QualityReportResponse | null>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    let live = true;
    loadQualityReport().then(d => { if (live) setData(d); }).catch(e => { if (live) setError(e instanceof Error ? e.message : 'Could not load the report.'); });
    return () => { live = false; };
  }, []);

  if (error) return <div role="alert" className="rounded-xl border border-rose-500/50 bg-rose-950/80 p-3.5 text-xs text-rose-200">{error}</div>;
  if (!data) return <p role="status" className="text-xs text-slate-300">Loading the report…</p>;
  const { report } = data;
  return (
    <div className="space-y-4">
      <div>
        <h2 className="flex items-center gap-2 text-sm font-bold text-white"><AlertTriangle size={16} className="text-amber-400" aria-hidden="true" /> Question quality</h2>
        <p className="text-[11px] text-slate-300">
          From the last {data.attemptsAnalysed} stored attempts. A question needs at least {data.minAnswers} answers before it can be flagged.
          Nothing here changes a question: a reviewer decides.
        </p>
      </div>
      <p className="text-xs text-slate-200">{report.analysed} questions analysed, {report.flagged} need a look.</p>
      {report.items.length === 0 ? (
        <p className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-xs text-slate-300">
          {report.analysed === 0 ? 'No stored attempts yet. Flags appear once signed-in learners have taken tests.' : 'Nothing is flagged. Questions with enough answers all look healthy.'}
        </p>
      ) : <ul className="space-y-3">{report.items.map(item => <Row key={item.id} item={item} />)}</ul>}
    </div>
  );
}
