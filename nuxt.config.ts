import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Dentech Supply Nuxt",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/new/icons/logo.png",
        },
      ],
    },
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    WC_URL: process.env.WC_URL,
    WC_CONSUMER_KEY: process.env.WC_CONSUMER_KEY,
    WC_CONSUMER_SECRET: process.env.WC_CONSUMER_SECRET,
    WC_API_VERSION: process.env.WC_API_VERSION,
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-04-03",
});
