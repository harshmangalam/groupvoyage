import { getEventList } from "@/actions/event";
import { getGroupList } from "@/actions/group";
export type GroupMetaType = {
  membersCount: number;
  source: string;
};

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type T_GroupCard = Awaited<ReturnType<typeof getGroupList>>[number];

export type T_EventCard = Awaited<ReturnType<typeof getEventList>>[number];
