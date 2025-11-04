import path from "node:path";
import { env, type PrismaConfig } from "prisma/config";

export default {
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: "bunx tsx prisma/seed.ts",
  },
  views: {
    path: path.join("prisma", "views"),
  },
  typedSql: {
    path: path.join("prisma", "queries"),
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
  experimental: {
    adapter: true,
    studio: true,
  },
} satisfies PrismaConfig;
