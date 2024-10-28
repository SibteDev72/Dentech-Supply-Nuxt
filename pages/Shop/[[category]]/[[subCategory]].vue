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
        <BarMenu />
        <article class="grid grid-cols-2 lg:grid-cols-3 gap-2">
          <CardsProduct
            v-if="ProductData.length > 0"
            v-for="(item, index) in ProductData"
            :key="index"
            :data="item"
          />
        </article>
        <!-- <Paggination class="self-center" /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductItem } from "~/types/Products";
import { getProductsData } from "~/API/Products";

const itemsPerPage = useItemsPerPage();
const sotingValue = useSotingValue();
const selectedCategoryID = useSelectedCategoryID();
const ProductData = ref<ProductItem[]>([]);
const route = useRoute();

const fetchProducts = async (categoryID: number) => {
  const data = await getProductsData(
    1,
    itemsPerPage.value,
    sotingValue.value,
    categoryID
  );
  if (data) {
    ProductData.value = data;
  }
};

const getIdFromParams = (params: any) => {
  let id;
  if (!params.subCategory) {
    const match = params.category.match(/Id=(\d+)/);
    id = match ? parseInt(match[1], 10) : 0;
  } else {
    const match = params.subCategory.match(/Id=(\d+)/);
    id = match ? parseInt(match[1], 10) : 0;
  }
  return id;
};

watch(
  [() => itemsPerPage.value, () => sotingValue.value],
  ([newItemsPerPage, newSortingValue]) => {
    if (newItemsPerPage || newSortingValue) {
      fetchProducts(selectedCategoryID.value);
    }
  }
);

onMounted(() => {
  selectedCategoryID.value = getIdFromParams(route.params);
  fetchProducts(selectedCategoryID.value);
});
</script>
