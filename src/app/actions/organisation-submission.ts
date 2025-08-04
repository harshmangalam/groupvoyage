"use server";

import { prisma } from "@/lib/db";
import { z } from "zod";

// Define the Zod schema for validation
const formSchema = z.object({
  websiteURL: z
    .string()
    .url({ message: "Invalid URL format." })
    .min(1, { message: "Website URL is required." }),
  locations: z
    .string()
    .min(1, { message: "At least one starting location is required." })
    .transform((val) =>
      val
        .split(",")
        .map((loc) => loc.trim())
        .filter(Boolean)
    ),
});

type FormState = {
  message: string;
  errors?: {
    websiteURL?: string[];
    locations?: string[];
  };
};

export async function submitTravelGroup(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawFormData = {
    websiteURL: formData.get("websiteURL"),
    locations: formData.get("locations"),
  };

  // Validate form data with Zod
  const validatedFields = formSchema.safeParse(rawFormData);

  // If validation fails, return errors
  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      message: "Validation failed.",
      errors: {
        websiteURL: fieldErrors.websiteURL,
        locations: fieldErrors.locations,
      },
    };
  }

  const validatedData = validatedFields.data;

  try {
    await prisma.organiserSubmission.upsert({
      where: { websiteURL: validatedData.websiteURL },
      create: {
        ...validatedData,
      },
      update: {
        ...validatedData,
      },
    });
    return { message: "Travel group submitted successfully for review!" };
  } catch (error) {
    console.error("Database error:", error);
    return {
      message: "Failed to submit travel group. Please try again later.",
    };
  }
}
