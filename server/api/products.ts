import WooCommerceRestApi, {
  WooRestApiEndpoint,
} from "woocommerce-rest-ts-api";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const api = new WooCommerceRestApi({
    url: config.WC_URL as string,
    consumerKey: config.WC_CONSUMER_KEY as string,
    consumerSecret: config.WC_CONSUMER_SECRET as string,
    version: config.WC_API_VERSION === "wc/v3" ? "wc/v3" : "wc/v3",
  });

  const {
    type,
    currentPage,
    minPrice,
    maxPrice,
    itemsPerPage,
    sortBy,
    selectedCategoryId,
    productId,
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
    } else if (type === "productDetails") {
      res = await api.get(
        `products/${productId}` as unknown as WooRestApiEndpoint
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
