import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { uuidv7 } from "uuidv7";
import { locationsTable } from "./locations";
import { relations, sql } from "drizzle-orm";

export const groupsTable = sqliteTable("groups", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  details: text("details"),
  locationId: text("location_id")
    .references(() => locationsTable.id, { onDelete: "cascade" })
    .notNull(),
  posterUrl: text("poster_url"),
  organizer: text("organizer"),
  meta: text("meta", { mode: "json" }),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

export const groupsRelations = relations(groupsTable, ({ one }) => ({
  location: one(locationsTable, {
    fields: [groupsTable.locationId],
    references: [locationsTable.id],
  }),
}));

export type InsertGroup = typeof groupsTable.$inferInsert;
export type SelectGroup = typeof groupsTable.$inferSelect;
