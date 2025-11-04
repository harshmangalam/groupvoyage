import { prisma } from "@/lib/db";
import { cache } from "react";

type GetDestinationsParams = {
  take?: number;
  skip?: number;
  search?: string;
  sort?: "asc" | "desc" | string;
};
export const getCategoryList = cache(
  async (params: GetDestinationsParams = {}) => {
    const { take, skip = 0, search = "", sort } = params;

    const shouldPaginate = typeof take === "number";

    const whereClause = {
      ...(search && { name: { search: search.replace(/[^a-zA-Z]/g, "") } }),
    };

    const categories = await prisma.category.findMany({
      where: whereClause,
      select: {
        _count: {
          select: {
            events: true,
          },
        },
        name: true,
        slug: true,
        id: true,
      },
      orderBy:
        sort === "asc" || sort === "desc"
          ? [{ name: sort }]
          : [{ events: { _count: "desc" } }],
      ...(shouldPaginate && {
        skip,
        take,
      }),
    });

    const totalCount = await prisma.category.count({ where: whereClause });

    return {
      categories,
      pagination: shouldPaginate
        ? {
            totalCount,
            totalPages: Math.ceil(totalCount / take),
            currentPage: Math.floor(skip / take) + 1,
            hasNextPage: skip + take < totalCount,
            hasPreviousPage: skip > 0,
          }
        : null,
    };
  }
);

export const getCategoriesOption = cache(async () => {
  return prisma.category.findMany({
    select: {
      name: true,
      slug: true,
    },
    orderBy: [{ events: { _count: "desc" } }, { events: { _count: "desc" } }],
  });
});
