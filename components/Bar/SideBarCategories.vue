<template>
  <div class="w-full h-fit flex flex-col shadow-lg bg-bgPrimary pb-[10rem]">
    <NuxtLink
      v-for="(category, index) in categoriesData"
      :key="index"
      :to="{ name: 'Shop-category', params: { category: category.title } }"
      :class="`flex flex-col border-b-2 border-borderSecondary font-bold text-md ${
        route.params.category === category.title &&
        'bg-bgColor3 text-textColor5'
      }`"
    >
      <div class="px-1 py-3 flex flex-row justify-between">
        <p>{{ category.title }}</p>
        <button
          :class="`transition-all duration-300 ${
            subCategoryStatus === true &&
            route.params.category === category.title &&
            'rotate-180 '
          }`"
          @click="
            () => {
              subCategoryStatus = !subCategoryStatus;
            }
          "
          v-if="category.subCategory"
        >
          v
        </button>
      </div>
      <div
        v-if="
          subCategoryStatus === true && route.params.category === category.title
        "
        v-for="(subCategory, index) in category.subCategory"
        :key="index"
        class="flex flex-col px-1 py-3 bg-bgPrimary text-textPrimary"
      >
        <p>{{ subCategory.title }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { CategoryItem } from "~/types/Products";
import { categories } from "~/constant/data";
const categoriesData: CategoryItem[] = categories;
const route = useRoute();
const subCategoryStatus = ref<boolean>(false);
</script>
