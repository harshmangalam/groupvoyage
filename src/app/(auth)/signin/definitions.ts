import * as v from "valibot";

export const LoginSchema = v.object({
  email: v.pipe(v.string(), v.email("Please enter a valid email address.")),
  password: v.pipe(v.string(), v.nonEmpty("Password must not be empty")),
});

export type LoginData = v.InferOutput<typeof LoginSchema>;
