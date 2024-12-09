<template>
  <div
    class="text-textPrimary py-8 px-6 md:px-8 lg:px-[4rem] flex flex-col mt-[96px] lg:mt-[192px] w-full h-fit"
  >
    <div class="hidden lg:flex flex-col gap-2 py-8">
      <Breadcrumbs />
      <p class="text-3xl font-extrabold">New products</p>
    </div>
    <div class="flex flex-row gap-6">
      <div class="hidden lg:flex w-[25%]">
        <BarSideBarCategories />
      </div>
      <div class="w-full lg:w-[75%] flex flex-col gap-2 lg:gap-8">
        <BarShop />
        <SkeletonShop v-if="loading === true" />
        <article class="grid grid-cols-2 lg:grid-cols-3 gap-2">
          <CardsProduct
            v-if="ProductData.length > 0 && loading === false"
            v-for="(item, index) in ProductData"
            :key="index"
            :data="item"
          />
        </article>
        <Paggination class="self-center" />
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
const activePage = useActivePage();
const fiteredRange = useFiteredRange();
const route = useRoute();
const ProductData = ref<ProductItem[]>([]);
const loading = ref<boolean>(true);

const fetchProducts = async (categoryID: number) => {
  loading.value = true;
  const data = await getProductsData(
    activePage.value,
    fiteredRange.value.min,
    fiteredRange.value.max,
    itemsPerPage.value,
    sotingValue.value,
    categoryID
  );
  if (data) {
    loading.value = false;
    //@ts-ignore
    ProductData.value = data;
  }
};

watch(
  [
    () => fiteredRange.value.min,
    () => fiteredRange.value.max,
    () => activePage.value,
    () => itemsPerPage.value,
    () => sotingValue.value,
  ],
  ([
    newFiteredRangeMin,
    newFiteredRangeMax,
    newActivePage,
    newItemsPerPage,
    newSortingValue,
  ]) => {
    if (
      newFiteredRangeMin ||
      newFiteredRangeMax ||
      newActivePage ||
      newItemsPerPage ||
      newSortingValue
    ) {
      fetchProducts(selectedCategoryID.value);
    }
  }
);

onMounted(() => {
  selectedCategoryID.value = parseInt(route.query.id as string, 10) || 0;
  fetchProducts(selectedCategoryID.value);
});
</script>
