import { prisma } from "@/lib/db";
import { Prisma } from "../../prisma/generated/client";
import { PrismaClientKnownRequestError } from "../../prisma/generated/client/runtime/library";

export async function createGroup(data: Prisma.GroupCreateInput) {
  try {
    const group = await prisma.group.create({
      data,
    });

    return { success: true, group };
  } catch (err: any) {
    // Prisma unique constraint violation
    if (err?.code === "P2002") {
      const target = err.meta?.target;

      if (Array.isArray(target)) {
        if (target.includes("name")) {
          return { success: false, message: "Name already exists." };
        }
        if (target.includes("slug")) {
          return { success: false, message: "Slug already exists." };
        }
      }

      return { success: false, message: "Duplicate field." };
    }

    // Other unexpected errors
    return { success: false, message: "Unexpected server error.", error: err };
  }
}
