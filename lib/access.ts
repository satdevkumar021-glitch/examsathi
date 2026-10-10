import { getChatGPTUser } from "../app/chatgpt-auth";
import { database } from "./database";
import { env } from "cloudflare:workers";
export async function currentUser() {
  const identity = await getChatGPTUser();
  if (!identity) return null;
  const db = database(),
    now = Date.now(),
    email = identity.email.toLowerCase();
  const grant = await db
    .prepare("SELECT role FROM role_grants WHERE email = ?")
    .bind(email)
    .first<{ role: string }>();
  // Bootstrap: site owner gets admin via OWNER_EMAIL env var (set in Cloudflare dashboard).
  // No hardcoded fallback — if the var is unset, owner gets learner role until it is configured.
  const ownerEmail = ((env as Record<string, unknown>).OWNER_EMAIL as string | undefined)?.toLowerCase() ?? "";
  const role = (ownerEmail && email === ownerEmail) ? "admin" : grant?.role || "learner";
  
  // Only write to users table if record is missing or attributes changed
  const existing = await db
    .prepare("SELECT role, name, email FROM users WHERE id = ?")
    .bind(identity.userId)
    .first<{ role: string; name: string; email: string }>();

  if (!existing || existing.role !== role || existing.name !== identity.displayName || existing.email !== email) {
    await db
      .prepare(
        "INSERT INTO users (id,email,name,role,created_at) VALUES (?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET email=excluded.email,name=excluded.name,role=excluded.role",
      )
      .bind(identity.userId, email, identity.displayName, role, now)
      .run();
  }
  return { ...identity, role };
}
