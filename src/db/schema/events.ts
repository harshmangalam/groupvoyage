import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { uuidv7 } from "uuidv7";
import { locationsTable } from "./locations";
import { relations } from "drizzle-orm";
import { groupsTable } from "./groups";

export const eventsTable = sqliteTable("events", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  title: text("title").notNull().unique(),
  slug: text("slug").notNull().unique(),
  durations: text("durations"),
  details: text("details"),
  price: integer("price"),
  locationId: text("location_id")
    .references(() => locationsTable.id, { onDelete: "cascade" })
    .notNull(),
  groupId: text("group_id")
    .references(() => groupsTable.id, { onDelete: "cascade" })
    .notNull(),
  posterUrls: text("poster_urls", { mode: "json" }),
  meta: text("meta", { mode: "json" }),
  itinerary: text("itinerary", { mode: "json" }),
  includes: text("includes", { mode: "json" }),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
  isArchived: integer("is_archived", { mode: "boolean" }).default(false),
});
export const eventsRelations = relations(eventsTable, ({ one }) => ({
  location: one(locationsTable, {
    fields: [eventsTable.locationId],
    references: [locationsTable.id],
  }),
  group: one(groupsTable, {
    fields: [eventsTable.groupId],
    references: [groupsTable.id],
  }),
}));

export type InsertEvent = typeof eventsTable.$inferInsert;
export type SelectEvent = typeof eventsTable.$inferSelect;
