import { T_Category } from "@/lib/types";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowRightIcon } from "lucide-react";

export function CategoryCard({
  category,
  eventCount,
}: {
  category: Partial<T_Category>;
  eventCount: number;
}) {
  return (
    <Link
      key={category.id}
      href={`/categories/${category.slug}`}
      className="group block"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">
            {category.name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">{`${eventCount} events`}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-end pt-0">
          <ArrowRightIcon className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
          <span className="sr-only">
            View events in {category.name} category
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
