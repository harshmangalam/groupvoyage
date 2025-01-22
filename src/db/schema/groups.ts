import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v4 } from "uuid";

export const groupsTabe = sqliteTable("groups", {
  id: text()
    .primaryKey()
    .$defaultFn(() => v4()),
  name: text().notNull().unique(),
  details: text(),
  posterUrl: text(),
  meta: text({ mode: "json" }),
});
