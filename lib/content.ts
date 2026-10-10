import initial from "../content/lessons.json";
import catalog from "../content/catalog.json";
import syllabus from "../content/syllabus.json";
import type { Lesson } from "./types";
import { database } from "./database";
export async function readContent() {
  const map = new Map((initial as Lesson[]).map((l) => [l.id, l]));
  const rows = await database()
    .prepare(
      "SELECT payload FROM lesson_revisions WHERE status = 'published' ORDER BY updated_at ASC",
    )
    .all<{ payload: string }>();
  for (const row of rows.results) {
    const l = JSON.parse(row.payload);
    map.set(l.id, l);
  }
  return { lessons: [...map.values()], catalog, syllabus };
}
