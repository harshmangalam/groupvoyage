import { Prisma } from "@prisma/client";
export type GroupMetaType = {
  membersCount: number;
  source: string;
};

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type T_GroupCard = Prisma.GroupGetPayload<{
  select: {
    id: true;
    slug: true;
    name: true;
    posterUrl: true;
    locations: {
      select: {
        id: true;
        city: true;
        slug: true;
      };
    };
    _count: {
      select: {
        events: true;
      };
    };
  };
}>;

export type T_EventCard = Prisma.EventGetPayload<{
  include: {
    group: true;
    location: true;
  };
}>;
