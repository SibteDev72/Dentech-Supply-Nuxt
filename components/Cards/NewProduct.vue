<template>
  <div
    class="relative w-full min-h-[38vw] shadow-xl flex flex-col py-8 justify-between items-center px-6 group"
  >
    <div class="relative flex flex-col gap-4 items-center">
      <p
        class="absolute px-4 py-1 font-bold top-0 left-0 text-textColor5 bg-bgColor3"
      >
        New
      </p>
      <img class="w-[20rem]" :src="`/new/images/${props.data.imgSrc}`" />
      <p class="text-textSecondary text-md">
        Artical :{{ props.data.artical }}
      </p>
      <p class="text-lg font-extrabold text-center">
        {{ props.data.title }}
      </p>
    </div>
    <button
      class="px-6 shadow-lg text-md py-1 border-2 border-borderPrimary rounded-full hover:text-textColor5 hover:bg-buttonHover transition-colors duration-300"
    >
      Into Basket
    </button>
    <button
      class="absolute top-32 flex flex-row items-center gap-4 shadow-black shadow-sm font-extrabold px-4 text-sm py-2 rounded-full bg-bgPrimary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      More Details <img src="/new/icons/forwardArrow.png" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ProductItem } from "~/types/Products";

const props = defineProps<{
  data: ProductItem;
}>();
</script>
