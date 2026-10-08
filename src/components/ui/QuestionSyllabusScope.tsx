import { SYLLABUS_TOPICS } from '@/lib/data/curriculum';
import { TOPIC_ALIASES } from '@/lib/data/lessons';
export default function QuestionSyllabusScope({ topicId }: { topicId?: string }) {
  if (!topicId) return null;
  const canonical = (id: string) => TOPIC_ALIASES[id] || id;
  const matches = SYLLABUS_TOPICS.filter(entry => canonical(entry.topic.id) === canonical(topicId));
  return <details className="text-xs text-slate-300 p-2 bg-slate-800 rounded-lg my-2">
    <summary className="cursor-pointer">Topic: {matches[0]?.topic.name || topicId} · syllabus mapping</summary>
    <p className="text-slate-400">Mapped to current preparation outlines; this does not certify a past-paper source.</p>
    <ul className="list-disc pl-4">{matches.map((entry,i) => <li key={i}>{entry.exam.name} → {entry.subject.name} → {entry.chapter.name} → {entry.topic.name}</li>)}</ul>
    {!matches.length && <p>Custom or unmapped topic. Review source notes.</p>}
  </details>;
}
