import { getEventDetails, getEventList } from "@/actions/event";
import { getGroupList } from "@/actions/group";
import { getLocations, getLocationsOption } from "@/actions/location";
import { Prisma } from "../../prisma/generated/client";
import { DURATIONS } from "./constants";

export type GroupMetaType = {
  membersCount: number;
  whatsappGroup: string;
};

export type EventMetaType = {
  originalPrice: number;
  groupSize: string;
  highlights: string[];
};
export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type T_GroupCard = Awaited<ReturnType<typeof getGroupList>>[number];

export type T_Events = Awaited<ReturnType<typeof getEventList>>;
export type T_Event_Details = Awaited<ReturnType<typeof getEventDetails>>;
export type T_EventCard = T_Events["events"][number];

export type T_LocationWithCount = Awaited<
  ReturnType<typeof getLocations>
>[number];

export type T_LocationOption = Awaited<
  ReturnType<typeof getLocationsOption>
>[number];

export type DurationMap = {
  label: string;
  value: string;
};

export type T_DropdownOption = { label: string; value: string };
export type T_Group = Prisma.GroupGetPayload<{}>;

export type T_InstagramProfile = Prisma.InstagramProfileGetPayload<{}>;
export type T_Location = Prisma.LocationGetPayload<{}>;
export type DurationFilter = (typeof DURATIONS)[number]["value"];
