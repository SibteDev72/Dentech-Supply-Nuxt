<template>
  <div class="flex flex-col items-center h-fit w-full">
    <div
      class="flex flex-col justify-center items-center w-full min-h-[40vh] bg-white shadow-lg px-6"
    >
      <img class="w-12" :src="`/new/icons/${props.data.imgSrc}`" />
      <p class="w-20 leading-5 mt-2 text-lg text-center font-extrabold">
        {{ props.data.title }}
      </p>
      <p class="mt-5 text-sm leading-4 text-center text-[#B5B5B5]">
        {{ props.data.text }}
      </p>
    </div>
    <button
      class="mt-[-20px] flex flex-row items-center gap-4 shadow-black shadow-sm font-extrabold px-4 text-sm py-2 rounded-full bg-white"
    >
      More Details <img class="" src="/new/icons/forwardArrow.png" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ServiceItem } from "~/types/Services";

const props = defineProps<{
  data: ServiceItem;
}>();
</script>
