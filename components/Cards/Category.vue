<template>
  <NuxtLink
    :to="{
      name: 'Shop-category-subCategory',
      params: { category: `${props.data.slug}` },
      query: { id: props.data.id },
    }"
    class="flex flex-row items-center shadow-xl"
  >
    <img class="w-[80px] rounded-lg" :src="`${props.data.imgSrc}`" />
    <p class="font-primary font-extrabold text-[12px] md:text-sm ml-2 md:ml-4">
      {{ props.data.title }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { CategoryItem } from "~/types/Products";
const props = defineProps<{
  data: CategoryItem;
}>();
</script>
