import { SYLLABUS_TOPICS } from '@/lib/data/curriculum';
import type { Question } from '@/lib/data/questions';
import { topicIncludes } from '@/lib/data/topic-scope';
export default function QuestionSyllabusScope({ topicId, question, language }: { topicId?: string; question?: Question; language?: 'en' | 'hi' | 'pa' }) {
  if (!topicId) return null;
  const matches = SYLLABUS_TOPICS.filter(entry => topicIncludes(entry.topic.id, topicId)).sort((a,b)=>Number(b.topic.id===topicId)-Number(a.topic.id===topicId));
  return <div className="text-xs text-slate-300 p-2.5 bg-slate-800/90 border border-slate-700/60 rounded-xl my-2 space-y-1.5">
    <div className="flex items-center gap-2 flex-wrap text-[11px]">
      {question?.reviewStatus === 'reviewed' ? (
        <span className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-bold font-mono">
          ✓ REVIEWED PRACTICE ITEM
        </span>
      ) : question?.originType === 'computed-variant' ? (
        <span className="bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-bold font-mono">
          ⚡ COMPUTED NUMERIC VARIANT
        </span>
      ) : (
        <span className="bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-bold font-mono">
          📝 AUTHORED DRAFT (REVIEW PENDING)
        </span>
      )}
      {question?.rightsProvenance && (
        <span className="text-slate-400 text-[10px]">
          Source: {question.rightsProvenance.source}
        </span>
      )}
    </div>
    {question?.source && <p><a className="underline text-indigo-300 hover:text-indigo-200" href={question.source.url} target="_blank" rel="noopener noreferrer">Study reference: {question.source.title} ↗</a></p>}
    {language && question?.availableLanguages && !question.availableLanguages.includes(language) && <p className="text-amber-200">Translation pending. This question is available in {question.availableLanguages.join(', ')}.</p>}
    {language && question?.explanationLanguages && !question.explanationLanguages.includes(language) && <p className="text-amber-200">Explanation translation pending; available in {question.explanationLanguages.join(', ')}.</p>}
    <details className="pt-1 border-t border-slate-700/50">
      <summary className="cursor-pointer text-slate-300 font-medium">Topic: {matches[0]?.topic.name || topicId} · syllabus mapping</summary>
    <p className="text-slate-400 mt-1">Mapped to current preparation outlines; this does not certify a past-paper source.</p>
    <ul className="list-disc pl-4 mt-1 text-slate-400 space-y-0.5">{matches.map((entry,i) => <li key={i}>{entry.exam.name} → {entry.subject.name} → {entry.chapter.name} → {entry.topic.name}</li>)}</ul>
    {!matches.length && <p className="text-slate-400 mt-1">Custom or unmapped topic. Review source notes.</p>}
    </details>
  </div>;
}
