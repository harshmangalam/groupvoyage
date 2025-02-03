import { relations } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { randomUUIDv7 } from "bun";
import { groupsTable } from "./groups";
import { eventsTable } from "./events";

export const locationsTable = sqliteTable("locations", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUIDv7()),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  country: text("country"),
});

export const locationsRelations = relations(locationsTable, ({ many }) => ({
  groups: many(groupsTable),
  events: many(eventsTable),
}));

export type InsertLocation = typeof locationsTable.$inferInsert;
export type SelectLocation = typeof locationsTable.$inferSelect;
