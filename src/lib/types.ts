import { getEventList, getTrendingEventList } from "@/actions/event";
import { getGroupList } from "@/actions/group";
import { getLocations, getLocationsOption } from "@/actions/location";

export type GroupMetaType = {
  membersCount: number;
  source: string;
};

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type T_GroupCard = Awaited<ReturnType<typeof getGroupList>>[number];

export type T_EventCard = Awaited<ReturnType<typeof getEventList>>[number];

export type T_FeaturedEvent = Awaited<
  ReturnType<typeof getTrendingEventList>
>[number];

export type T_LocationWithCount = Awaited<
  ReturnType<typeof getLocations>
>[number];

export type T_LocationOption = Awaited<
  ReturnType<typeof getLocationsOption>
>[number];
