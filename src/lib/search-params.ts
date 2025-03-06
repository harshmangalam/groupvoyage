// searchParams.ts

import { parseAsString, createSearchParamsCache } from "nuqs/server";

export const searchParamsParsers = {
  q: parseAsString.withDefault("").withOptions({
    shallow: false,
  }),
};
