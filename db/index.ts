/**
 * NOTE: This project uses the raw Cloudflare D1 binding (lib/database.ts) for
 * all runtime queries. The Drizzle ORM instance below is intentionally kept
 * only to support `drizzle-kit generate` for migration SQL output.
 * Do NOT call getDb() in application code — use database() from lib/database.ts.
 */
import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export function getDb() {
  if (!env.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. This function is for migration tooling only."
    );
  }
  return drizzle(env.DB, { schema });
}
