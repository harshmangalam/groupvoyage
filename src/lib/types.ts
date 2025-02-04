export type GroupMetaType = {
  membersCount: number;
  source: string;
};

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;
