import { SYLLABUS_TOPICS } from '@/lib/data/curriculum';
import type { Question } from '@/lib/data/questions';
import { topicIncludes } from '@/lib/data/topic-scope';
export default function QuestionSyllabusScope({ topicId, question, language }: { topicId?: string; question?: Question; language?: 'en' | 'hi' | 'pa' }) {
  if (!topicId) return null;
  const matches = SYLLABUS_TOPICS.filter(entry => topicIncludes(entry.topic.id, topicId)).sort((a,b)=>Number(b.topic.id===topicId)-Number(a.topic.id===topicId));
  return <div className="text-xs text-slate-300 p-2 bg-slate-800 rounded-lg my-2">
    {question?.editorialStatus === 'authored' && <p className="text-amber-200">{question.originType === 'computed-variant' ? 'Computed practice variant; independent editorial review pending.' : 'Original foundation question; independent editorial review pending.'}</p>}
    {question?.source && <a className="underline" href={question.source.url} target="_blank" rel="noopener noreferrer">Study reference: {question.source.title} ↗</a>}
    {language && question?.availableLanguages && !question.availableLanguages.includes(language) && <p className="text-amber-200">Translation pending. This question is available in {question.availableLanguages.join(', ')}.</p>}
    {language && question?.explanationLanguages && !question.explanationLanguages.includes(language) && <p className="text-amber-200">Explanation translation pending; available in {question.explanationLanguages.join(', ')}.</p>}
    <details>
      <summary className="cursor-pointer">Topic: {matches[0]?.topic.name || topicId} · syllabus mapping</summary>
    <p className="text-slate-400">Mapped to current preparation outlines; this does not certify a past-paper source.</p>
    <ul className="list-disc pl-4">{matches.map((entry,i) => <li key={i}>{entry.exam.name} → {entry.subject.name} → {entry.chapter.name} → {entry.topic.name}</li>)}</ul>
    {!matches.length && <p>Custom or unmapped topic. Review source notes.</p>}
    </details>
  </div>;
}
