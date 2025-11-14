import { z } from "zod";

export const initialGroupFormState = {
  name: "",
  details: "",
  instagram: "",
  phone: "",
  email: "",
  source: "",
  posterUrls: [],
  locations: [],
};

export const groupFormSchema = z.object({
  name: z.string().nonempty("Group name is required"),
  details: z.string().optional(),
  instagram: z.string().optional(),
  phone: z
    .string()
    .nonempty("Phone is required")
    .trim()
    .regex(/^(?:\+91|91|0)?[6-9]\d{9}$/, "Invalid Indian phone number format"),
  email: z
    .email("Invalid email address")
    .nonempty("Email is required")
    .toLowerCase()
    .trim(),

  source: z.url().optional().or(z.literal("")),
  posterUrls: z.array(z.url("Invalid link")).optional(),
  locations: z.array(z.string()).min(1, "Select at least 1 location"),
});

export type GroupFormSchema = z.infer<typeof groupFormSchema>;

export type GroupActionState = {
  formData?: Record<string, any>;
  fieldErrors?: {};
  error?: string;
};
