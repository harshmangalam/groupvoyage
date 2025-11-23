// lib/prisma.ts (or wherever you're defining it)
import { PrismaClient } from "../../prisma/generated/client/client";

const prismaGlobal = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prismaClient = prismaGlobal.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prismaClient;
}

export const prisma = prismaClient;
