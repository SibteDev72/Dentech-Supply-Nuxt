<template>
  <div
    class="mt-[96px] lg:mt-[192px] w-full min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-192px)] flex flex-col justify-center items-center"
  >
    <p v-if="productData" class="text-lg font-extrabold">
      {{ productData.title }}
    </p>
    <p v-if="productData" class="text-sm font-bold">
      id: {{ productData.price }}
    </p>
    <p v-if="productData" class="text-sm font-bold">
      Price: {{ productData.price }}Rs
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
import type { ProductItem } from "~/types/Products";
import { getProductDetails } from "~/API/Products";

const productData = ref<ProductItem>();

const fetchProductDetails = async (productID: number) => {
  const data = await getProductDetails(productID);
  if (data) {
    productData.value = data;
    console.log(productData.value.title);
  }
};

onMounted(() => {
  fetchProductDetails(route.params.productId);
});
</script>
