import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { uuidv7 } from "uuidv7";
import { groupsTable } from "./groups";
import { eventsTable } from "./events";

export const locationsTable = sqliteTable("locations", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  city: text("city").notNull(),
  slug: text("slug").notNull().unique(),
  country: text("country").notNull(),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

export const locationsRelations = relations(locationsTable, ({ many }) => ({
  groups: many(groupsTable),
  events: many(eventsTable),
}));

export type InsertLocation = typeof locationsTable.$inferInsert;
export type SelectLocation = typeof locationsTable.$inferSelect;
