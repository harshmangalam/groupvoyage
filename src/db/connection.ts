import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from "@/lib/env";
import { drizzle } from "drizzle-orm/libsql";

export const db = drizzle({
  connection: {
    url: TURSO_DATABASE_URL,
    authToken: TURSO_AUTH_TOKEN,
  },
});
