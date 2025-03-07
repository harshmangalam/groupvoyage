// searchParams.ts

import { parseAsString, createSearchParamsCache } from "nuqs/server";

export const searchParams = {
  q: parseAsString.withDefault(""),
  locations: parseAsString.withDefault(""),
  viewMode: parseAsString.withDefault("list"),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
