import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  role: text("role").notNull().default("learner"),
  language: text("language").notNull().default("hi"),
  createdAt: integer("created_at").notNull(),
});
export const learnerState = sqliteTable("learner_state", {
  userId: text("user_id").primaryKey(),
  payload: text("payload").notNull().default("{}"),
  updatedAt: integer("updated_at").notNull(),
});
export const lessonRevisions = sqliteTable(
  "lesson_revisions",
  {
    id: text("id").primaryKey(),
    lessonId: text("lesson_id").notNull(),
    authorId: text("author_id").notNull(),
    title: text("title").notNull(),
    payload: text("payload").notNull(),
    status: text("status").notNull().default("draft"),
    reviewerId: text("reviewer_id"),
    createdAt: integer("created_at").notNull(),
    updatedAt: integer("updated_at").notNull(),
  },
  (table) => [
    index("idx_revisions_status").on(table.status),
    index("idx_revisions_author").on(table.authorId),
    index("idx_revisions_updated").on(table.updatedAt),
  ]
);
export const roleGrants = sqliteTable("role_grants", {
  email: text("email").primaryKey(),
  role: text("role").notNull(),
  grantedBy: text("granted_by").notNull(),
  createdAt: integer("created_at").notNull(),
});
export const auditLog = sqliteTable(
  "audit_log",
  {
    id: text("id").primaryKey(),
    actorId: text("actor_id").notNull(),
    action: text("action").notNull(),
    targetId: text("target_id").notNull(),
    createdAt: integer("created_at").notNull(),
  },
  (table) => [
    index("idx_audit_created").on(table.createdAt),
    index("idx_audit_actor").on(table.actorId),
  ]
);
