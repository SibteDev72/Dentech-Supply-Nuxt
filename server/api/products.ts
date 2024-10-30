import WooCommerceRestApi, {
  WooRestApiEndpoint,
} from "woocommerce-rest-ts-api";

export default defineEventHandler(async (event) => {
  const api = new WooCommerceRestApi({
    url: "https://dentechsupply.com",
    consumerKey: "ck_7900770a51ec9881df3a6243c4e4fc7603dae92f",
    consumerSecret: "cs_7c84d92e6d36607e8d1b4929a4cc6faeb5e1bc3b",
    version: "wc/v3",
  });

  const {
    type,
    currentPage,
    minPrice,
    maxPrice,
    itemsPerPage,
    sortBy,
    selectedCategoryId,
  } = getQuery(event);

  try {
    let res;
    if (type === "categories") {
      res = await api.get(
        "products/categories?per_page=100" as unknown as WooRestApiEndpoint
      );
    } else if (type === "newProducts") {
      res = await api.get(
        `products?per_page=${itemsPerPage}&&orderby=${sortBy}` as unknown as WooRestApiEndpoint
      );
    } else if (type === "allProducts") {
      res = await api.get(
        `products?page=${currentPage}&&min_price=${minPrice}&&max_price=${maxPrice}&&per_page=${itemsPerPage}&&orderby=${sortBy}&&category=${selectedCategoryId}` as unknown as WooRestApiEndpoint
      );
    }
    return { data: res.data, totalProducts: res.headers["x-wp-total"] };
  } catch (error) {
    console.error("WooCommerce API error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to fetch ${
        type === "categories" ? "categories" : "products"
      } from WooCommerce`,
    });
  }
});
