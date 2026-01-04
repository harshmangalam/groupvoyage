import { getCategoryList } from "@/services/categories";

export async function CategoriesLinks() {
  const categories = await getCategoryList({ take: 6 });
  return (
    <>
      {categories.categories.map((link) => (
        <a
          target="_blank"
          key={link.name}
          href={`/trips?categories=${link.slug}`}
          className="text-sm text-muted-foreground hover:underline capitalize"
        >
          {link.name}
        </a>
      ))}
    </>
  );
}
