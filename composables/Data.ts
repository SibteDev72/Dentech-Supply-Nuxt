import type { CategoryItem } from "~/types/Products";
export const useCategories = () =>
  useState<CategoryItem[]>("category", () => []);
export const useItemsPerPage = () => useState<number>("itemsPerPage", () => 6);
export const useSotingValue = () =>
  useState<string>("sotingValue", () => "date");
export const useSelectedCategoryID = () =>
  useState<number>("selectedCategoryID", () => 28);
export const usePagesArray = () => useState<number[]>("pagesArray", () => [1]);
export const useActivePage = () => useState<number>("activePage", () => 1);
interface fiter {
  min: number;
  max: number;
}
export const useFiteredRange = () =>
  useState<fiter>("fiteredRange", () => ({ min: 1000, max: 3000 }));
