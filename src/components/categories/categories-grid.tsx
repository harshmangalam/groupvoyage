import { CategoryCard } from "./category-card";
import { getCategoryList } from "@/services/categories";

export async function CategoriesGrid() {
  const categoriesResp = await getCategoryList({
    take: 8,
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {categoriesResp.categories.map((category) => (
        <CategoryCard
          category={category}
          eventCount={category._count.events}
          key={category.id}
        />
      ))}
    </div>
  );
}
