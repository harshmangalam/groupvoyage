import { CategoriesDropdown } from "./categories-dropdown";
import { ButtonProps } from "@/components/ui/button";
import { getCategoriesOption } from "@/services/categories";

export async function CategoriesFilter({
  buttonProps,
}: {
  buttonProps?: ButtonProps;
}) {
  const categories = await getCategoriesOption();
  const options = categories.map((l) => ({
    label: l.name.charAt(0).toUpperCase() + l.name.slice(1),
    value: l.slug,
  }));
  return <CategoriesDropdown options={options} buttonProps={buttonProps} />;
}
