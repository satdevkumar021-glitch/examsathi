import { env } from "cloudflare:workers";
export function database() {
  if (!env.DB) throw new Error("Study storage is temporarily unavailable.");
  return env.DB;
}
