import { GET } from "./Fetch";
import { categoriesMapper } from "~/utils/helperFunction";

export const getCategoriesData = async () => {
  // let api_url: string = "/api/products?type=categories";
  let api_url: string =
    "https://dentech-supply.vercel.app/api/products?type=categories";
  try {
    const apiResponse = await GET(api_url);
    if (apiResponse) {
      const response = apiResponse.filter(
        (res: any) => res.name !== "Uncategorized"
      );
      categoriesMapper(response);
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
