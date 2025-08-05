import type React from "react";
import { CategoryCard } from "@/components/categories/category-card";
import { getCategoryList } from "@/actions/categories";
import { CategoryHeader } from "./category-header";

export default async function CategoriesPage({ searchParams }) {
  const { q, sort } = await searchParams;
  const categoriesResp = await getCategoryList({ search: q, sort });
  console.log(categoriesResp.pagination);
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <CategoryHeader count={categoriesResp.categories.length} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoriesResp.categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            eventCount={category._count.events}
          />
        ))}
      </div>
    </div>
  );
}
