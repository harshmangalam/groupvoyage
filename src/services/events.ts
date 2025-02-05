"use server";

import { db } from "@/db/connection";
import { eventsTable, groupsTable, locationsTable } from "@/db/schema";
import { eq, SQL, sql } from "drizzle-orm";

type GetEventsFilters = {
  locationId?: string;
  locationSlug?: string;
  groupId?: string;
  groupSlug?: string;
  limit?: number;
  offset?: number;
};

export async function getEvents({
  locationId,
  locationSlug,
  groupId,
  groupSlug,
  limit = 50,
  offset = 0,
}: GetEventsFilters) {
  const prepared = db.query.eventsTable
    .findMany({
      where: (events, { eq, inArray }) => {
        if (locationId) {
          return eq(events.locationId, sql.placeholder("locationId"));
        }
        if (locationSlug) {
          return inArray(
            events.locationId,
            db
              .select({ id: locationsTable.id })
              .from(locationsTable)
              .where(eq(locationsTable.slug, sql.placeholder("locationSlug")))
          );
        }
      },
      limit: sql.placeholder("limit"),
      offset: sql.placeholder("offset"),
      columns: {
        id: true,
        slug: true,
        posterUrls: true,
        title: true,
        durations: true,
        price: true,
      },
      with: {
        group: {
          columns: {
            slug: true,
            name: true,
          },
        },
        location: {
          columns: {
            slug: true,
            name: true,
          },
        },
      },
      orderBy: (groups, { desc }) =>
        desc(
          db
            .select({ count: sql<number>`COUNT(*)` })
            .from(eventsTable)
            .where(eq(eventsTable.groupId, groups.id))
        ),
    })
    .prepare();

  const events = await prepared.execute({
    locationId: locationId || null,
    locationSlug: locationSlug || null,
    groupId: groupId || null,
    groupSlug: groupSlug || null,
    limit,
    offset,
  });

  return events;
}

export async function getEventDetails({
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

  const event = await db.query.eventsTable.findFirst({
    where: (_, { or }) => or(...filters),
    columns: {
      createdAt: false,
    },
    with: {
      location: true,
      group: true,
    },
  });
  return event;
}

export type GetEventsType = Awaited<ReturnType<typeof getEvents>>[number];
