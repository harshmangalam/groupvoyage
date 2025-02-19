"use server";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createGroup(formData: FormData) {
  const formObject = Object.fromEntries(formData.entries()) as unknown as any;
  const isActive = formObject.active === "on";
  await prisma.group.create({
    data: {
      ...formObject,
      active: isActive,
      locations: {
        connect: {
          id: formObject.locationId,
        },
      },
    },
  });

  revalidatePath("/superadmin/groups");
}

export async function getGroupsOption() {
  const groups = await prisma.group.findMany({
    where: {
      active: true,
    },
    select: {
      name: true,
      slug: true,
      id: true,
    },
  });

  return groups;
}
