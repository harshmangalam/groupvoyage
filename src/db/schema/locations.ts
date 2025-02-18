import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { eventsTable } from "./events";
import { groupsToLocationsTable } from "./groups-to-locations";

export const locationsTable = sqliteTable("locations", {
  id: integer("id").primaryKey(),
  city: text("city").notNull(),
  slug: text("slug").notNull().unique(),
  country: text("country").notNull(),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

export const locationsRelations = relations(locationsTable, ({ many }) => ({
  groupsToLocations: many(groupsToLocationsTable),
  events: many(eventsTable),
}));

export type InsertLocation = typeof locationsTable.$inferInsert;
export type SelectLocation = typeof locationsTable.$inferSelect;
