import type { Lesson } from "./types";
function tri(v: unknown) {
  return (
    !!v &&
    typeof v === "object" &&
    ["hi", "pa", "en"].every(
      (k) =>
        typeof (v as Record<string, unknown>)[k] === "string" &&
        String((v as Record<string, unknown>)[k]).trim().length > 0,
    )
  );
}
export function validateLesson(v: unknown): asserts v is Lesson {
  const l = v as Lesson;
  if (
    !l ||
    !/^[a-z0-9][a-z0-9-]{1,90}$/.test(l.id) ||
    !tri(l.title) ||
    typeof l.subject !== "string" ||
    typeof l.unit !== "string"
  )
    throw Error(
      "Lesson ID, subject, unit and title in all three languages are required.",
    );
  if (
    !Array.isArray(l.sections) ||
    l.sections.length < 2 ||
    l.sections.some((s) => !tri(s.heading) || !tri(s.text))
  )
    throw Error(
      "At least two complete sections in Hindi, Punjabi and English are required.",
    );
  if (
    !tri(l.summary) ||
    !Array.isArray(l.keypoints) ||
    !l.keypoints.length ||
    l.keypoints.some((k) => !tri(k))
  )
    throw Error("Summary and keypoints must be complete in all languages.");
  if (
    !Array.isArray(l.questions) ||
    l.questions.some(
      (q) =>
        !q.id ||
        !tri(q.prompt) ||
        !tri(q.explanation) ||
        !Array.isArray(q.options) ||
        q.options.length !== 4 ||
        q.options.some((o) => !tri(o)) ||
        !Number.isInteger(q.answerIndex) ||
        q.answerIndex < 0 ||
        q.answerIndex > 3,
    )
  )
    throw Error(
      "Each question needs four options, a valid answer and explanation in all languages.",
    );
  if (new Set(l.questions.map((q) => q.id)).size !== l.questions.length)
    throw Error("Question IDs must be unique within a lesson.");
  if (
    l.questions.some((q) =>
      (["hi", "pa", "en"] as const).some(
        (lang) => new Set(q.options.map((o) => o[lang].trim())).size !== 4,
      ),
    )
  )
    throw Error("Each question must have four distinct options in each language.");
  if (
    !Array.isArray(l.flashcards) ||
    l.flashcards.some((f) => !tri(f.question) || !tri(f.answer))
  )
    throw Error("Flashcards must be complete in all languages.");
  if (!Array.isArray(l.sources) || !l.sources.length)
    throw Error("At least one source is required.");
  for (const r of [...l.sources, ...(l.videos || []), ...(l.documents || [])]) {
    if (!r || typeof r.title !== "string" || !r.title.trim())
      throw Error("Resource titles are required.");
    try {
      const u = new URL(r.url);
      if (u.protocol !== "https:") throw Error();
    } catch {
      throw Error("Resources need valid HTTPS URLs.");
    }
  }
  if (JSON.stringify(l).length > 500000)
    throw Error("This lesson is too large. Split it into smaller lessons.");
}
