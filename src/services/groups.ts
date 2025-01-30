"use server";

import { db } from "@/db/connection";
import { groupsTable } from "@/db/schema";
import { eq, SQL, sql } from "drizzle-orm";

type GetGroupsFilters = {
  locationId: string;
  limit?: number;
  offset?: number;
};

export async function getGroups({
  locationId,
  limit = 50,
  offset = 0,
}: GetGroupsFilters) {
  const prepared = db.query.groupsTable
    .findMany({
      where: (groups, { eq }) => {
        return eq(groups.locationId, sql.placeholder("locationId"));
      },
      limit: sql.placeholder("limit"),
      offset: sql.placeholder("offset"),
      columns: {
        id: true,
        slug: true,
        meta: true,
        posterUrl: true,
        name: true,
      },
      with: {
        location: {
          columns: {
            name: true,
            id: true,
            slug: true,
            country: true,
          },
        },
      },
    })
    .prepare();

  const groups = await prepared.execute({
    locationId,
    limit,
    offset,
  });

  return groups;
}

export async function getGroupDetails({
  slug,
  id,
}: {
  slug?: string;
  id?: string;
}) {
  if (!slug && !id) return null;
  const filters: SQL[] = [];

  if (slug) {
    filters.push(eq(groupsTable.slug, slug));
  }
  if (id) {
    filters.push(eq(groupsTable.id, id));
  }

  const group = await db.query.groupsTable.findFirst({
    where: (_, { or }) => or(...filters),
    columns: {
      createdAt: false,
      updateAt: false,
    },
    with: {
      location: true,
    },
  });
  return group;
}

export type GetGroupsType = Awaited<ReturnType<typeof getGroups>>[number];
