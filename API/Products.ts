import { GET } from "./Fetch";
import {
  categoriesMapper,
  productMapper,
  getNumberOfPages,
} from "~/utils/helperFunction";
import {
  getProductsUrl,
  getProductDetailsUrl,
  getNewProductsUrl,
  getCategoriesUrl,
} from "~/utils/getApis";

export const getCategoriesData = async () => {
  // let source = "http://localhost:3000/";
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
  // let source = "http://localhost:3000/";
  let source = "https://dentech-supply.vercel.app/";
  let api_url: string = getNewProductsUrl(source, itemsPerPage);
  try {
    const apiResponse = await GET(api_url);
    if (apiResponse) {
      const productData = productMapper(apiResponse.data);
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
  minPrice: number,
  maxPrice: number,
  itemsPerPage: number,
  sortBy: string,
  selectedCategoryId: number
) => {
  // let source = "http://localhost:3000/";
  let source = "https://dentech-supply.vercel.app/";
  let api_url: string = getProductsUrl(
    source,
    minPrice,
    maxPrice,
    currentPage,
    itemsPerPage,
    sortBy,
    selectedCategoryId
  );
  try {
    const apiResponse = await GET(api_url);
    if (apiResponse) {
      getNumberOfPages(apiResponse.totalProducts, itemsPerPage);
      const productData = productMapper(apiResponse.data);
      if (productData) {
        return productData;
      }
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
export const getProductDetails = async (productId: number) => {
  // let source = "http://localhost:3000/";
  let source = "https://dentech-supply.vercel.app/";
  let api_url: string = getProductDetailsUrl(source, productId);
  try {
    const apiResponse = await GET(api_url);
    if (apiResponse) {
      const productData = productMapper(apiResponse.data);
      if (productData) {
        return productData;
      }
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
