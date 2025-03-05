// searchParams.ts

import { parseAsString, createSearchParamsCache } from "nuqs/server";

export const searchParams = {
  q: parseAsString.withDefault(""),
  page: parseAsString.withDefault("1"),
};
export const searchParamsCache = createSearchParamsCache(searchParams);
