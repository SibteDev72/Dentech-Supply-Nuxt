<template>
  <div
    class="relative w-full min-h-[270px] sm:min-h-[320px] lg:min-h-[480px] shadow-xl flex flex-col py-6 justify-between items-center px-6 group"
  >
    <div class="relative flex flex-col gap-4 items-center">
      <p
        v-if="props.data.id >= 7 && props.data.id <= 12"
        class="absolute text-[10px] sm:text-sm px-4 py-1 font-bold top-0 left-0 text-textColor5 bg-bgColor3"
      >
        New
      </p>
      <img
        class="mt-5 w-[108px] h-auto sm:w-[10rem] lg:w-[20rem]"
        :src="`/new/images/${props.data.imgSrc}`"
      />
      <p class="text-textSecondary text-[8px] sm:text-sm lg:text-md">
        Artical :{{ props.data.artical }}
      </p>
      <p class="text-[8px] sm:text-sm lg:text-lg font-extrabold text-center">
        {{ props.data.title }} {{ props.data.id }}
      </p>
    </div>
    <button
      class="mt-2 px-6 shadow-lg text-[10px] sm:text-sm lg:text-md py-1 border-2 border-borderPrimary rounded-full hover:text-textColor5 hover:bg-buttonHover transition-colors duration-300"
    >
      Into Basket
    </button>
    <button
      class="absolute top-28 md:top-32 flex flex-row items-center gap-4 shadow-black shadow-sm font-extrabold px-4 text-[12px] sm:text-sm py-1 rounded-full bg-bgPrimary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
