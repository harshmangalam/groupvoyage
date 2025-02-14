"use server";
import { db } from "@/db/connection";
import { groupsTable, InsertGroup } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createGroup(formData: FormData) {
  const formObject = Object.fromEntries(
    formData.entries()
  ) as unknown as InsertGroup;

  await db
    .insert(groupsTable)
    .values({ ...formObject })
    .onConflictDoNothing();

  revalidatePath("/superadmin/groups");
  redirect("/superadmin/groups");
}
