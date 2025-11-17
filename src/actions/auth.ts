"use server";

import { auth } from "@/lib/auth";
import { logger } from "@/lib/logger";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutUser() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
    redirect("/");
  } catch (error) {
    logger.error(error);
  }
}
