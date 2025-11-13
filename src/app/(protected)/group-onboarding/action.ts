"use server";
import * as z from "zod";

import { redirect } from "next/navigation";
import { GroupActionState, groupFormSchema } from "./definitions";

export async function onboardNewGroup(
  _initialState: GroupActionState,
  formData: FormData
): Promise<GroupActionState> {
  const raw = Object.fromEntries(formData);
  const locations = formData.getAll("locations");
  const posterUrls = formData.getAll("posterUrls");

  const form = {
    ...raw,
    locations,
    posterUrls,
  };
  const parsedForm = groupFormSchema.safeParse(form);
  if (!parsedForm.success) {
    return {
      formData: form,
      fieldErrors: z.treeifyError(parsedForm.error).properties,
    };
  }

  redirect("/");
}
