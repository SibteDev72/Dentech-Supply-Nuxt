<template>
  <div class="flex flex-row items-center shadow-xl">
    <img
      class="w-[138px] rounded-lg"
      :src="`/new/images/${props.data.imgSrc}`"
    />
    <p class="font-primary font-extrabold text-lg ml-4">
      {{ props.data.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { CategoryItem } from "~/types/Products";
const props = defineProps<{
  data: CategoryItem;
}>();
</script>
