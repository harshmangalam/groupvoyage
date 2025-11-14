"use server";
import * as z from "zod";

import { redirect } from "next/navigation";
import { GroupActionState, groupFormSchema } from "./definitions";
import slugify from "slugify";
import { ERROR_MSG } from "@/lib/constants";
import { logger } from "@/lib/logger";
import { createGroup } from "@/services/group";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function onboardNewGroup(
  _initialState: GroupActionState,
  formData: FormData
): Promise<GroupActionState> {
  const raw = Object.fromEntries(formData);
  const locations = formData.getAll("locations");
  const posterUrls = formData.getAll("posterUrls");

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/signin");
  }

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

  try {
    const groupResp = await createGroup({
      ...parsedForm.data,
      locations: {
        connect: parsedForm.data.locations.map((location) => ({
          slug: location,
        })),
      },
      slug: slugify(parsedForm.data.name, { lower: true }),
      owner: {
        connect: {
          id: session?.user.id,
        },
      },
    });

    if (!groupResp.success) {
      return {
        error: groupResp.message,
        formData: form,
      };
    }
  } catch (error) {
    logger.error(error);
    return {
      formData: form,
      error: ERROR_MSG.internalServerError,
    };
  }

  redirect("/");
}
