import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  ALLOWED_COLLABORATORS: z.string().optional(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(parsedEnv.error.issues);
  throw new Error("Missing env variables");
}

export const env = parsedEnv.data;
