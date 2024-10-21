import type { CategoryItem } from "~/types/Products";
export const useCategories = () =>
  useState<CategoryItem[]>("category", () => []);
