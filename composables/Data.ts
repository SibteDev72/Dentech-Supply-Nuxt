import type { CategoryItem } from "~/types/Products";
export const useCategories = () =>
  useState<CategoryItem[]>("category", () => []);
export const useItemsPerPage = () => useState<number>("itemsPerPage", () => 6);
export const useSotingValue = () =>
  useState<string>("sotingValue", () => "date");
export const useSelectedCategoryID = () =>
  useState<number>("selectedCategoryID", () => 28);
export const useNumberOfPages = () =>
  useState<number>("numberOfPages", () => 2);
