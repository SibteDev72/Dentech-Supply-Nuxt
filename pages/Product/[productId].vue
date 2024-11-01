<template>
  <div
    v-if="productData"
    class="mt-[96px] lg:mt-[192px] px-4 w-full h-fit py-[5rem] flex flex-col lg:flex-row gap-4"
  >
    <div class="w-full lg:w-[30%] flex flex-col gap-8">
      <img :src="`${currentProductImg.src}`" class="self-center w-full" />
      <div class="hidden w-full lg:flex flex-row justify-center gap-2">
        <img
          @click="
            () => {
              currentProductImg = img;
            }
          "
          v-for="(img, index) in productData.imgSrc"
          :src="`${img.src}`"
          :key="index"
          :class="`w-[100px] shadow-sm cursor-pointer ${
            img.id === currentProductImg.id ? 'shadow-bgColor3' : 'shadow-black'
          }`"
        />
      </div>
    </div>
    <div class="w-full lg:w-[70%] flex flex-col gap-2">
      <p class="text-lg lg:text-xl font-extrabold">{{ productData.title }}</p>
      <p class="text-sm lg:text-lg text-textColor4 font-extrabold">
        Rs{{ productData.price }}.00
      </p>
      <p class="text-sm lg:text-lg font-bold">
        Description: {{ productData.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
import type { ProductItem } from "~/types/Products";
import { getProductDetails } from "~/API/Products";

const productData = ref<ProductItem>();
const currentProductImg = ref();

const fetchProductDetails = async (productID: number) => {
  const data = await getProductDetails(productID);
  if (data) {
    //@ts-ignore
    productData.value = data;
    //@ts-ignore
    currentProductImg.value = productData.value.imgSrc[0];
  }
};

onMounted(() => {
  //@ts-ignore
  fetchProductDetails(route.params.productId);
});
</script>
