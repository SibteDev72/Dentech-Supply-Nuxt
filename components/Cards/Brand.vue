<template>
  <div class="flex flex-row items-center justify-center">
    <img
      class="w-[180px] sm:w-[150px] md:w-[130px] rounded-lg"
      :src="`/new/brands/${props.data.icon}`"
    />
  </div>
</template>

<script setup lang="ts">
import type { BrandItem } from "~/types/Products";

const props = defineProps<{
  data: BrandItem;
}>();
</script>
