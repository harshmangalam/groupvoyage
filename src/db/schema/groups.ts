import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { randomUUIDv7 } from "bun";
import { locationsTable } from "./locations";
import { relations, sql } from "drizzle-orm";
import { eventsTable } from "./events";

export const groupsTable = sqliteTable("groups", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUIDv7()),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  details: text("details"),
  locationId: text("location_id")
    .references(() => locationsTable.id, { onDelete: "cascade" })
    .notNull(),
  posterUrl: text("poster_url"),
  organizer: text("organizer"),
  socialLinks: text("social_links", { mode: "json" }),
  contacts: text("contacts", { mode: "json" }),
  meta: text("meta", { mode: "json" }),
  source: text("source"),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

export const groupsRelations = relations(groupsTable, ({ one, many }) => ({
  location: one(locationsTable, {
    fields: [groupsTable.locationId],
    references: [locationsTable.id],
  }),
  events: many(eventsTable),
}));

export type InsertGroup = typeof groupsTable.$inferInsert;
export type SelectGroup = typeof groupsTable.$inferSelect;
