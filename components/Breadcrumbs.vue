<template>
  <div class="capitalize flex flex-row items-center gap-3">
    <p
      v-for="(link, index) in breadcrumbs"
      :key="index"
      :class="`capitalize cursor-pointer text-sm ${
        link.path === path.fullPath ? 'text-textColor4' : 'text-textPrimary'
      }`"
      @click="
        () => {
          router.push(link.path);
        }
      "
    >
      {{ link.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { getBreadcrumbs } from "~/utils/helperFunction";
const router = useRouter();
const path = useRoute();
const breadcrumbs = useBreadcrumbs();

router.beforeEach((to, from) => {
  let currentRoute;
  let previousRoute;
  currentRoute = to;
  previousRoute = from;
  if (currentRoute.name === "Shop-category-subCategory") {
    getBreadcrumbs(
      previousRoute.name,
      currentRoute.name,
      previousRoute.params,
      currentRoute.params,
      currentRoute.query.id,
      previousRoute.query.id,
      "shop"
    );
  } else if (currentRoute.name === "Product-product") {
    getBreadcrumbs(
      previousRoute.name,
      currentRoute.name,
      previousRoute.params,
      currentRoute.params,
      currentRoute.query.id,
      previousRoute.query.id,
      "product"
    );
  }
});
</script>
