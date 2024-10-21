<template>
  <div class="w-full h-fit flex flex-col shadow-lg bg-bgPrimary pb-[10rem]">
    <NuxtLink
      v-for="(category, index) in categories"
      :key="index"
      :to="{
        name: 'Shop-category-subCategory',
        params: { category: category.slug },
      }"
      :class="`flex flex-col border-b-[1px] border-borderSecondary font-bold text-md ${
        route.params.category === category.slug &&
        'bg-bgColor3 text-textColor5 shadow-md shadow-bgColor3'
      }`"
    >
      <div class="px-1 py-3 flex flex-row justify-between">
        <p>{{ category.title }}</p>
        <ChevronDownIcon
          :class="`w-5 text-textColor4 ${
            route.params.category === category.slug && 'text-textColor5'
          } transition-all duration-300 ${
            subCategoryStatus === true &&
            route.params.category === category.slug &&
            'rotate-180'
          }`"
          @click="
            () => {
              subCategoryStatus = !subCategoryStatus;
            }
          "
          v-if="
            category.subCategory?.length !== 0 &&
            route.params.category === category.slug
          "
        />
      </div>

      <transition
        name="dropdown"
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[200px]"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="opacity-100 max-h-[200px]"
        leave-to-class="opacity-0 max-h-0"
      >
        <div
          v-show="
            subCategoryStatus === true &&
            route.params.category === category.slug
          "
        >
          <NuxtLink
            v-for="(subCategory, index) in category.subCategory"
            :key="index"
            :to="{
              name: 'Shop-category-subCategory',
              params: {
                category: category.slug,
                subCategory: subCategory.slug,
              },
            }"
            :class="`flex flex-col px-1 py-3 bg-bgPrimary text-textPrimary`"
          >
            <p
              :class="`${
                route.params.subCategory === subCategory.slug &&
                'text-textColor4'
              }`"
            >
              {{ subCategory.title }}
            </p>
          </NuxtLink>
        </div>
      </transition>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
const categories = useCategories();
const route = useRoute();
const subCategoryStatus = ref<boolean>(true);
</script>
