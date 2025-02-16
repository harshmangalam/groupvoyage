import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { uuidv7 } from "uuidv7";
import { locationsTable } from "./locations";
import { relations } from "drizzle-orm";
import { eventsTable } from "./events";

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
  instagram: text("instagram"),
  phone: text("phone"),
  meta: text("meta", { mode: "json" }),
  source: text("source"),
  active: integer("active", { mode: "boolean" }).default(true),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
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
