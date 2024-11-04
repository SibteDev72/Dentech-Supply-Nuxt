<template>
  <div
    class="mt-[96px] lg:mt-[192px] w-full h-fit py-8 flex flex-col gap-[6rem] px-6 md:px-8 lg:px-[4rem]"
  >
    <SkeletonProduct v-if="!!loadingProduct" />
    <SkeletonRelatedProducts v-if="!!loadingProduct" />
    <section v-if="productData" class="flex flex-col lg:flex-row gap-4">
      <section class="w-full lg:w-[30%] flex flex-col gap-8">
        <img
          :src="`${currentProductImg.src}`"
          class="self-center w-full transition-all duration-300"
        />
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
            :class="`w-[100px] shadow-sm cursor-pointer transition-all duration-300 ${
              img.id === currentProductImg.id
                ? 'shadow-bgColor3'
                : 'shadow-black'
            }`"
          />
        </div>
      </section>
      <section class="w-full lg:w-[70%] flex flex-col gap-4">
        <p class="text-lg lg:text-xl font-extrabold">{{ productData.title }}</p>
        <p class="text-sm lg:text-lg text-textColor4 font-extrabold">
          Rs{{ productData.price }}.00
        </p>
        <p class="text-sm lg:text-lg font-bold">
          Description: {{ productData.description }}
        </p>
        <Counter @update:counterValue="handleCounter" :title="'Quantity'" />
        <div class="flex flex-row items-center gap-1">
          <button
            class="bg-buttonSecondary text-textColor5 font-bold text-xs lg:text-lg px-12 lg:px-16 rounded-full shadow-lg py-2"
          >
            Add to cart
          </button>
          <img src="/new/icons/fav.png" class="w-14 lg:w-16" />
          <p class="text-sm lg:text-lg text-textColor4 font-bold">
            Add to Favorites
          </p>
        </div>
      </section>
    </section>
    <section v-if="relatedProductData.length > 0" class="hidden lg:flex">
      <SlidersSlider
        :data="{
          name: 'Related Product',
          variant: 'relatedProduct',
          length: relatedProductData.length,
        }"
      >
        <CardsProduct
          class="keen-slider__slide"
          v-for="(item, index) in relatedProductData"
          :key="index"
          :data="item"
        />
      </SlidersSlider>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
import type { ProductItem } from "~/types/Products";
import { getProductDetails, getRelatedProducts } from "~/API/Products";

const productData = ref<ProductItem>();
const relatedProductData = ref<ProductItem[]>([]);
const currentProductImg = ref();
const counterValue = ref<number>(1);
const loadingProduct = ref<boolean>();
const loadingRelatedProduct = ref<boolean>();

const fetchRelatedProductDetails = async (categoryID: number) => {
  loadingRelatedProduct.value = true;
  const data = await getRelatedProducts(categoryID);
  if (data) {
    //@ts-ignore
    relatedProductData.value = data.filter(
      (item: ProductItem) => item.id !== productData.value?.id
    );
    loadingRelatedProduct.value = false;
  }
};

const fetchProductDetails = async (productID: number) => {
  loadingProduct.value = true;
  const data = await getProductDetails(productID);
  if (data) {
    //@ts-ignore
    productData.value = data;
    loadingProduct.value = false;
    //@ts-ignore
    currentProductImg.value = productData.value.imgSrc[0];
    if (productData.value?.categories[0].id) {
      fetchRelatedProductDetails(productData.value.categories[0].id);
    }
  }
};

const handleCounter = (value: number) => {
  counterValue.value = value;
};

onMounted(() => {
  // @ts-ignore
  fetchProductDetails(route.params.productId);
});
</script>
