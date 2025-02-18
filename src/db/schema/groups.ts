import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { eventsTable } from "./events";
import { groupsToLocationsTable } from "./groups-to-locations";

export const groupsTable = sqliteTable("groups", {
  id: integer("id").primaryKey(),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  details: text("details"),
  posterUrl: text("poster_url"),
  instagram: text("instagram"),
  phone: text("phone"),
  email: text("email"),
  address: text("address"),
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

export const groupsRelations = relations(groupsTable, ({ many }) => ({
  groupsToLocations: many(groupsToLocationsTable),
  groupsToEvents: many(eventsTable),
}));

export type InsertGroup = typeof groupsTable.$inferInsert;
export type SelectGroup = typeof groupsTable.$inferSelect;
