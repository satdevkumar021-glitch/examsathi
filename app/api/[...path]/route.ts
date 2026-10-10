import { currentUser } from "../../../lib/access";
import { database } from "../../../lib/database";
import { readContent } from "../../../lib/content";
import { validateLesson } from "../../../lib/validation";
type SRCard = { cardKey: string; due: number; interval: number; ease: number };
export const dynamic = "force-dynamic";
const response = (data: unknown, status = 200) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
export async function GET(request: Request) {
  try {
    const p = new URL(request.url).pathname;
    if (p === "/api/content") return response(await readContent());
    const u = await currentUser();
    if (!u) return response({ error: "Sign in to continue." }, 401);
    const db = database();
    if (p === "/api/state") {
      const row = await db
        .prepare(
          "SELECT payload,updated_at FROM learner_state WHERE user_id = ?",
        )
        .bind(u.userId)
        .first<{ payload: string; updated_at: number }>();
      return response({
        user: u,
        state: row
          ? JSON.parse(row.payload)
          : { notes: {}, done: [], favorites: [], attempts: [] },
      });
    }
    if (p === "/api/admin") {
      if (!["teacher", "admin"].includes(u.role))
        return response({ error: "Teacher access required." }, 403);
      const rows =
        u.role === "admin"
          ? await db
              .prepare(
                "SELECT * FROM lesson_revisions ORDER BY updated_at DESC",
              )
              .all()
          : await db
              .prepare(
                "SELECT * FROM lesson_revisions WHERE author_id = ? ORDER BY updated_at DESC",
              )
              .bind(u.userId)
              .all();
      const grants =
        u.role === "admin"
          ? (await db.prepare("SELECT email,role FROM role_grants").all())
              .results
          : [];
      return response({ revisions: rows.results, grants });
    }
    // R-10: Data export (DPDP Act 2023)
    if (p === "/api/account/export") {
      const row = await db
        .prepare("SELECT payload, updated_at FROM learner_state WHERE user_id = ?")
        .bind(u.userId)
        .first<{ payload: string; updated_at: number }>();
      const state = row ? JSON.parse(row.payload) : { notes: {}, done: [], favorites: [], attempts: [] };
      const exportData = {
        exported_at: new Date().toISOString(),
        user: { userId: u.userId, email: u.email, displayName: u.displayName, role: u.role },
        study_state: state,
      };
      return new Response(JSON.stringify(exportData, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Content-Disposition": `attachment; filename="exam-saathi-export-${u.userId.slice(0, 8)}.json"`,
          "Cache-Control": "no-store",
        },
      });
    }
    return response({ error: "Unknown endpoint" }, 404);
  } catch (e) {
    console.error("Study API load failed", e);
    return response(
      {
        error:
          "Storage unavailable. Please try again; your unsaved draft remains on screen.",
      },
      503,
    );
  }
}
export async function POST(request: Request) {
  try {
    const url = new URL(request.url),
      origin = request.headers.get("origin");
    if (!origin || origin !== url.origin)
      return response({ error: "Invalid request origin." }, 403);
    if (!request.headers.get("content-type")?.includes("application/json"))
      return response({ error: "JSON required" }, 415);
    // Read body first, then enforce size — never trust Content-Length header alone (R-09)
    const bodyText = await request.text();
    if (bodyText.length > 600_000)
      return response({ error: "Request too large" }, 413);
    const b = JSON.parse(bodyText),
      u = await currentUser();
    if (!u) return response({ error: "Sign in to continue." }, 401);
    const db = database(),
      now = Date.now(),
      p = url.pathname;
    if (p === "/api/state") {
      if (!b || typeof b !== "object" || Array.isArray(b))
        return response({ error: "Invalid update" }, 400);
      const row = await db
        .prepare(
          "SELECT payload,updated_at FROM learner_state WHERE user_id = ?",
        )
        .bind(u.userId)
        .first<{ payload: string; updated_at: number }>();
      const s = row
        ? JSON.parse(row.payload)
        : { notes: {}, done: [], favorites: [], attempts: [] };
      if (b.action === "import") {
        if (
          !b.notes ||
          typeof b.notes !== "object" ||
          Array.isArray(b.notes) ||
          Object.keys(b.notes).length > 200 ||
          Object.entries(b.notes).some(
            ([k, v]) =>
              k.length > 120 || typeof v !== "string" || v.length > 20000,
          )
        )
          return response({ error: "Invalid notes import" }, 400);
        s.notes = { ...b.notes, ...s.notes };
        if (
          Array.isArray(b.done) &&
          b.done.length < 500 &&
          b.done.every((x: unknown) => typeof x === "string")
        )
          s.done = [...new Set([...(s.done || []), ...b.done])];
      } else if (b.action === "note") {
        if (
          typeof b.lessonId !== "string" ||
          typeof b.text !== "string" ||
          b.text.length > 20000
        )
          return response({ error: "Invalid note" }, 400);
        s.notes = { ...s.notes, [b.lessonId]: b.text };
      } else if (b.action === "favorite") {
        if (typeof b.id !== "string" || b.id.length > 500)
          return response({ error: "Invalid favourite" }, 400);
        s.favorites = s.favorites || [];
        s.favorites = b.enabled
          ? [...new Set([...s.favorites, b.id])]
          : s.favorites.filter((id: string) => id !== b.id);
      } else if (b.action === "done") {
        if (typeof b.lessonId !== "string")
          return response({ error: "Invalid lesson" }, 400);
        s.done = [...new Set([...(s.done || []), b.lessonId])];
      } else if (b.action === "sr") {
        // Spaced repetition card rating
        if (
          typeof b.cardKey !== "string" ||
          b.cardKey.length > 200 ||
          ![1, 3, 7].includes(b.ease) ||
          typeof b.nextInterval !== "number" ||
          typeof b.due !== "number"
        )
          return response({ error: "Invalid SR rating" }, 400);
        const srCards: SRCard[] = s.srCards || [];
        const idx = srCards.findIndex((c: SRCard) => c.cardKey === b.cardKey);
        const updated: SRCard = { cardKey: b.cardKey, due: b.due, interval: b.nextInterval, ease: b.ease };
        if (idx >= 0) srCards[idx] = updated;
        else srCards.unshift(updated);
        s.srCards = srCards.slice(0, 1000);
      } else if (b.action === "attempt") {
        const content = await readContent(),
          questions = new Map(
            content.lessons.flatMap((l) =>
              l.questions.map((q) => [`${l.id}:${q.id}`, q] as const),
            ),
          );
        if (!Array.isArray(b.answers) || b.answers.length > 100)
          return response({ error: "Invalid attempt" }, 400);
        const seen = new Set();
        let correct = 0;
        for (const a of b.answers) {
          const q = questions.get(a.questionId);
          if (
            !q ||
            seen.has(a.questionId) ||
            !Number.isInteger(a.answer) ||
            a.answer < -1 ||
            a.answer > 3
          )
            return response({ error: "Invalid answer" }, 400);
          seen.add(a.questionId);
          if (q.answerIndex === a.answer) correct++;
        }
        s.attempts = [
          {
            id: crypto.randomUUID(),
            at: now,
            total: b.answers.length,
            correct,
          },
          ...(s.attempts || []),
        ].slice(0, 100);
      } else return response({ error: "Unknown action" }, 400);
      const revision = Math.max(now, (row?.updated_at || 0) + 1);
      const written = row
        ? await db
            .prepare(
              "UPDATE learner_state SET payload=?,updated_at=? WHERE user_id=? AND updated_at=?",
            )
            .bind(JSON.stringify(s), revision, u.userId, row.updated_at)
            .run()
        : await db
            .prepare(
              "INSERT INTO learner_state (user_id,payload,updated_at) VALUES (?,?,?) ON CONFLICT(user_id) DO NOTHING",
            )
            .bind(u.userId, JSON.stringify(s), revision)
            .run();
      if (!written.meta.changes)
        return response(
          {
            error:
              "Your account changed in another window. Reload, then retry; keep your unsaved note.",
          },
          409,
        );
      return response({ state: s });
    }
    if (!["teacher", "admin"].includes(u.role))
      return response({ error: "Teacher access required" }, 403);
    if (p === "/api/admin/draft") {
      try {
        validateLesson(b.lesson);
      } catch (e) {
        return response({ error: (e as Error).message }, 400);
      }
      const id = b.revisionId || crypto.randomUUID();
      if (b.revisionId) {
        const r = await db
          .prepare("SELECT author_id,status FROM lesson_revisions WHERE id = ?")
          .bind(id)
          .first<{ author_id: string; status: string }>();
        if (
          !r ||
          r.status === "published" ||
          (r.status === "review" && u.role !== "admin") ||
          (r.author_id !== u.userId && u.role !== "admin")
        )
          return response(
            { error: "Draft cannot be edited while in review or published" },
            403,
          );
        await db
          .prepare(
            "UPDATE lesson_revisions SET lesson_id=?,title=?,payload=?,status='draft',updated_at=? WHERE id=?",
          )
          .bind(
            b.lesson.id,
            b.lesson.title.hi,
            JSON.stringify(b.lesson),
            now,
            id,
          )
          .run();
      } else
        await db
          .prepare(
            "INSERT INTO lesson_revisions (id,lesson_id,author_id,title,payload,status,created_at,updated_at) VALUES (?,?,?,?,?,?,?,?)",
          )
          .bind(
            id,
            b.lesson.id,
            u.userId,
            b.lesson.title.hi,
            JSON.stringify(b.lesson),
            "draft",
            now,
            now,
          )
          .run();
      return response({ id, status: "draft" });
    }
    if (p === "/api/admin/review") {
      const r = await db
        .prepare("SELECT * FROM lesson_revisions WHERE id = ?")
        .bind(b.id)
        .first<{ author_id: string; status: string; payload: string }>();
      if (!r) return response({ error: "Revision not found" }, 404);
      if (b.action === "submit") {
        if (
          (r.author_id !== u.userId && u.role !== "admin") ||
          r.status === "published"
        )
          return response({ error: "Cannot submit revision" }, 403);
        await db
          .prepare(
            "UPDATE lesson_revisions SET status='review',updated_at=? WHERE id=?",
          )
          .bind(now, b.id)
          .run();
      } else {
        if (u.role !== "admin")
          return response({ error: "Admin review required" }, 403);
        if (r.status !== "review")
          return response({ error: "Submit for review first" }, 409);
        if (!["publish", "return"].includes(b.action))
          return response({ error: "Invalid review action" }, 400);
        if (b.action === "publish") validateLesson(JSON.parse(r.payload));
        await db.batch([
          db
            .prepare(
              "UPDATE lesson_revisions SET status=?,reviewer_id=?,updated_at=? WHERE id=?",
            )
            .bind(
              b.action === "publish" ? "published" : "draft",
              u.userId,
              now,
              b.id,
            ),
          db
            .prepare(
              "INSERT INTO audit_log (id,actor_id,action,target_id,created_at) VALUES (?,?,?,?,?)",
            )
            .bind(crypto.randomUUID(), u.userId, b.action, b.id, now),
        ]);
      }
      return response({ ok: true });
    }
    if (p === "/api/admin/role") {
      if (u.role !== "admin")
        return response({ error: "Admin access required" }, 403);
      if (
        typeof b.email !== "string" ||
        !/^\S+@\S+\.\S+$/.test(b.email) ||
        !["teacher", "learner"].includes(b.role)
      )
        return response(
          { error: "Valid email and teacher/learner role required" },
          400,
        );
      const email = b.email.toLowerCase();
      const { env: cfEnv } = await import("cloudflare:workers");
      const ownerEmail = ((cfEnv as Record<string, unknown>).OWNER_EMAIL as string | undefined)?.toLowerCase() ?? "";
      if (ownerEmail && email === ownerEmail)
        return response({ error: "Owner role cannot be changed" }, 400);
      await db.batch([
        db
          .prepare(
            "INSERT INTO role_grants (email,role,granted_by,created_at) VALUES (?,?,?,?) ON CONFLICT(email) DO UPDATE SET role=excluded.role,granted_by=excluded.granted_by,created_at=excluded.created_at",
          )
          .bind(email, b.role, u.userId, now),
        db
          .prepare(
            "INSERT INTO audit_log (id,actor_id,action,target_id,created_at) VALUES (?,?,?,?,?)",
          )
          .bind(crypto.randomUUID(), u.userId, "grant-role", email, now),
      ]);
      return response({ ok: true });
    }
    return response({ error: "Unknown endpoint" }, 404);
  } catch (e) {
    if (e instanceof SyntaxError)
      return response({ error: "Invalid JSON" }, 400);
    const message = e instanceof Error ? e.message : "";
    if (
      message.startsWith("Lesson") ||
      message.includes("required") ||
      message.includes("must") ||
      message.includes("question") ||
      message.includes("Resources")
    )
      return response({ error: message }, 400);
    console.error("Study API save failed", e);
    return response(
      { error: "Could not save. Please retry; keep your draft." },
      503,
    );
  }
}

// R-10: Account deletion (DPDP Act 2023)
export async function DELETE(request: Request) {
  try {
    const p = new URL(request.url).pathname;
    if (p !== "/api/account/delete")
      return Response.json({ error: "Unknown endpoint" }, { status: 404 });
    const u = await currentUser();
    if (!u) return Response.json({ error: "Sign in to continue." }, { status: 401 });
    const db = database();
    // Delete all user data: state blob, user record, role grant (if any)
    await db.batch([
      db.prepare("DELETE FROM learner_state WHERE user_id = ?").bind(u.userId),
      db.prepare("DELETE FROM users WHERE id = ?").bind(u.userId),
      db.prepare("DELETE FROM role_grants WHERE email = ?").bind(u.email),
    ]);
    // Log the deletion for audit
    await db
      .prepare("INSERT INTO audit_log (id,actor_id,action,target_id,created_at) VALUES (?,?,?,?,?)")
      .bind(crypto.randomUUID(), u.userId, "account-deleted", u.userId, Date.now())
      .run();
    return Response.json({ ok: true, message: "Your account and all study data have been deleted." }, {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    });
  } catch (e) {
    console.error("Account deletion failed", e);
    return Response.json({ error: "Could not delete account. Please try again." }, { status: 503 });
  }
}
