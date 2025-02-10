"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createGroup(formData: FormData) {
  const data = Object.entries(formData);
  console.log(data);

  revalidatePath("/superadmin/groups");
  redirect("/superadmin/groups");
}
