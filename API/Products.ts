import { GET } from "./Fetch";
import { categoriesMapper, productsMapper } from "~/utils/helperFunction";
import {
  getProductsUrl,
  getNewProductsUrl,
  getCategoriesUrl,
} from "~/utils/getApis";

export const getCategoriesData = async () => {
  // let source = "/";
  let source = "https://dentech-supply.vercel.app/";
  let api_url: string = getCategoriesUrl(source);
  try {
    const apiResponse = await GET(api_url);
    if (apiResponse) {
      const response = apiResponse.data.filter(
        (res: any) => res.name !== "Uncategorized"
      );
      categoriesMapper(response);
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
export const getNewProductsData = async (itemsPerPage: number) => {
  // let source = "/";
  let source = "https://dentech-supply.vercel.app/";
  let api_url: string = getNewProductsUrl(source, itemsPerPage);
  try {
    const apiResponse = await GET(api_url);
    if (apiResponse) {
      const productData = productsMapper(apiResponse.data);
      if (productData) {
        return productData;
      }
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
export const getProductsData = async (
  currentPage: number,
  itemsPerPage: number,
  sortBy: string,
  selectedCategoryId: number
) => {
  // let source = "/";
  let source = "https://dentech-supply.vercel.app/";
  let api_url: string = getProductsUrl(
    source,
    currentPage,
    itemsPerPage,
    sortBy,
    selectedCategoryId
  );
  try {
    const apiResponse = await GET(api_url);
    if (apiResponse) {
      const productData = productsMapper(apiResponse.data);
      if (productData) {
        return productData;
      }
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
