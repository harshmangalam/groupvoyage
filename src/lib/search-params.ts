// searchParams.ts

import { parseAsString, createSearchParamsCache } from "nuqs/server";

export const searchParams = {
  q: parseAsString.withDefault(""),
};

export const searchParamsCache = createSearchParamsCache(searchParams);
