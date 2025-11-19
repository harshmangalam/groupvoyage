import * as v from "valibot";

export const SignupSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty("Name is required")),
  email: v.pipe(v.string(), v.email("Please enter a valid email address.")),
  password: v.pipe(
    v.string(),
    v.minLength(8, "Password must be at least 8 characters long.")
  ),
});

export type SignupData = v.InferOutput<typeof SignupSchema>;
