"use server";
import { db } from "@/db/connection";
import { groupsTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createGroup(formData: FormData) {
  const formObject = Object.fromEntries(formData.entries()) as unknown as any;

  console.log(formObject);
  const isActive = formObject.active === "on";
  await db
    .insert(groupsTable)
    .values({ ...formObject, active: isActive })
    .onConflictDoNothing();

  revalidatePath("/superadmin/groups");
  redirect("/superadmin/groups");
}

export async function getGroupsOption() {
  const groups = await db.query.groupsTable.findMany({
    columns: {
      id: true,
      name: true,
      slug: true,
    },
    where(fields, operators) {
      return operators.eq(fields.active, true);
    },
  });

  return groups;
}
