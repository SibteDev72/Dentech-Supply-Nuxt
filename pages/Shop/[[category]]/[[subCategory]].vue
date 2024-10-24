<template>
  <div
    class="text-textPrimary px-6 md:px-8 lg:px-[4rem] flex flex-col mt-[96px] lg:mt-[192px] w-full min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-192px)]"
  >
    <div class="flex flex-col py-8">
      <p class="text-3xl font-extrabold">New products</p>
    </div>
    <div class="flex flex-row gap-6">
      <div class="hidden lg:flex w-[25%]">
        <BarSideBarCategories />
      </div>
      <div class="w-full lg:w-[75%] flex flex-col gap-[2rem]">
        <div class="lg:hidden flex flex-row justify-between items-center">
          <div class="flex flex-row items-center gap-4">
            <button>Filter</button>
            <p class="text-sm capitalize text-textColor4">
              {{ selectedCategory }}
            </p>
          </div>
          <div class="flex flex-row items-center gap-4">
            <button>Filter</button>
            <p class="text-sm capitalize text-textColor4">
              {{ selectedCategory }}
            </p>
          </div>
        </div>
        <div
          class="hidden lg:flex flex-row justify-between items-center w-full h-fit bg-bgPrimary shadow-lg rounded-full"
        >
          <span
            class="bg-bgColor3 capitalize rounded-full text-textColor5 font-bold px-[5rem] py-[1rem]"
          >
            {{ selectedCategory }}
          </span>
        </div>
        <article class="grid grid-cols-2 lg:grid-cols-3 gap-2">
          <CardsProduct
            v-if="ProductData.length > 0"
            v-for="(item, index) in ProductData"
            :key="index"
            :data="item"
          />
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductItem } from "~/types/Products";
import { getProductsData } from "~/API/Products";

const route = useRoute();
const categories = useCategories();
const selectedCategory = ref<string>("");
const ProductData = ref<ProductItem[]>([]);

const fetchProducts = async () => {
  const data = await getProductsData(2, 10, "date", 28);
  if (data) {
    ProductData.value = data;
  }
};

onMounted(async () => {
  fetchProducts();
  categories.value.map((category) => {
    if (`${category.slug}&trackId=${category.id}` === route.params.category) {
      selectedCategory.value = category.title;
    }
  });
});
</script>
