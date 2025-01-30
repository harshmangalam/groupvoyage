import { relations } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { uuidv7 } from "uuidv7";
import { groupsTable } from "./groups";

export const locationsTable = sqliteTable("locations", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  country: text("country"),
});

export const locationsRelations = relations(locationsTable, ({ many }) => ({
  groups: many(groupsTable),
}));

export type InsertLocation = typeof locationsTable.$inferInsert;
export type SelectLocation = typeof locationsTable.$inferSelect;
