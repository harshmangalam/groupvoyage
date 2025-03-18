import { prisma } from "@/lib/db";
import { cache } from "react";

export const getInstagramProfileList = cache(
  async ({
    locationSlug,
    take,
    skip,
    search,
  }: {
    locationSlug?: string;
    take?: number;
    skip?: number;
    search?: string;
  }) => {
    const filter: Record<string, unknown> = {};
    if (search) {
      filter.username = { search: search.replace(/[^a-zA-Z]/g, "") };
      filter.name = { search: search.replace(/[^a-zA-Z]/g, "") };
    }

    if (locationSlug) {
      filter.locations = {
        some: {
          slug: locationSlug,
        },
      };
    }
    return prisma.instagramProfile.findMany({
      where: {
        ...filter,
      },
      take,
      skip,
    });
  }
);
