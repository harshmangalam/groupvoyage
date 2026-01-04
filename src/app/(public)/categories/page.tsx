import { CategoryCard } from "@/components/categories/category-card";
import { getCategoryList } from "@/services/categories";
import { PageSection } from "@/components/page-section";
import SearchInput from "@/components/search-input";
import { SortCategories } from "./sort-categories";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Empty from "@/components/empty";
import { CategoriesSkeleton } from "@/components/categories/categories-skeleton";

export default async function CategoriesPage({
  searchParams,
}: PageProps<"/categories">) {
  return (
    <div className="px-4 max-w-7xl mx-auto mb-8">
      <PageSection
        label={<span>Explore Categories</span>}
        others={
          <div className="flex items-center gap-4">
            <div className="max-w-md w-full">
              <Suspense fallback={<Skeleton className="h-9 w-32 rounded-md" />}>
                <SearchInput />
              </Suspense>
            </div>
            <Suspense
              fallback={<Skeleton className="h-9 max-w-52 w-full rounded-md" />}
            >
              <SortCategories />
            </Suspense>
          </div>
        }
      />
      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoriesWrapper searchParamsPromise={searchParams} />
      </Suspense>
    </div>
  );
}
async function CategoriesWrapper({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { q, sort } = await searchParamsPromise;

  const categoriesResp = await getCategoryList({
    search: q as string,
    sort: sort as string,
  });

  if (!categoriesResp.categories.length)
    return <Empty showHome={false} showSearch={false} title={"Categories"} />;
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {categoriesResp.categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          eventCount={category._count.events}
        />
      ))}
    </div>
  );
}
