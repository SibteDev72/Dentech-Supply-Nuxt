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

  const { type } = getQuery(event);

  try {
    let res;
    if (type === "categories") {
      res = await api.get(
        "products/categories?per_page=100" as unknown as WooRestApiEndpoint
      );
    } else {
      res = await api.get("products");
    }

    return res.data;
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
