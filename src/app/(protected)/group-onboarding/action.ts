"use server";
import * as z from "zod";

import { redirect } from "next/navigation";
import {
  GroupActionState,
  GroupFormSchema,
  groupFormSchema,
} from "./definitions";

export async function onboardNewGroup(
  _initialState: GroupActionState,
  formData: FormData
): Promise<GroupActionState> {
  const form = Object.fromEntries(formData) as unknown as GroupFormSchema;

  const parsedForm = groupFormSchema.safeParse(form);
  if (!parsedForm.success) {
    // If validation fails, return the form data and field errors
    return {
      formData: form,
      fieldErrors: z.treeifyError(parsedForm.error).properties,
    };
  }

  console.log("form", form);
  redirect("/");
}
