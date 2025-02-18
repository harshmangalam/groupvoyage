import { integer, primaryKey, sqliteTable } from "drizzle-orm/sqlite-core";
import { groupsTable } from "./groups";
import { locationsTable } from "./locations";
import { relations } from "drizzle-orm";

export const groupsToLocationsTable = sqliteTable(
  "groups_to_locations",
  {
    groupId: integer("group_id")
      .notNull()
      .references(() => groupsTable.id),
    locationId: integer("location_id")
      .notNull()
      .references(() => locationsTable.id),
  },
  (t) => [primaryKey({ columns: [t.groupId, t.locationId] })]
);

export const groupsToLocationsRelations = relations(
  groupsToLocationsTable,
  ({ one }) => ({
    location: one(locationsTable, {
      fields: [groupsToLocationsTable.locationId],
      references: [locationsTable.id],
    }),
    group: one(groupsTable, {
      fields: [groupsToLocationsTable.groupId],
      references: [groupsTable.id],
    }),
  })
);
