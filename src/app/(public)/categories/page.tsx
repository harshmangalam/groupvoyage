import type React from "react";
import { CategoryCard } from "@/components/categories/category-card";
import { getCategoryList } from "@/actions/categories";
import { PageSection } from "@/components/page-section";
import SearchInput from "@/components/search-input";
import { SortCategories } from "./sort-categories";

export default async function CategoriesPage({
  searchParams,
}: PageProps<"/categories">) {
  const { q, sort } = await searchParams;
  const categoriesResp = await getCategoryList({
    search: q as string,
    sort: sort as string,
  });
  return (
    <div className="px-4 max-w-7xl mx-auto mb-8">
      <PageSection
        label={<span>Explore Categories</span>}
        others={
          <div className="flex items-center gap-4">
            <div className="max-w-md w-full">
              <SearchInput />
            </div>
            <SortCategories />
          </div>
        }
      ></PageSection>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categoriesResp.categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            eventCount={category._count.events}
          />
        ))}

        {categoriesResp.categories.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-8">
            No categories found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
