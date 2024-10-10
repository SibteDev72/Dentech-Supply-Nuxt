<template>
  <div class="flex flex-col items-center h-fit w-full py-6">
    <div
      class="flex flex-col justify-center items-center w-full min-h-[155px] sm:min-h-[180px] lg:min-h-[240px] bg-bgPrimary shadow-lg px-2 sm:px-4 md:px-6"
    >
      <img
        class="w-6 sm:w-8 lg:w-12"
        :src="`/new/icons/${props.data.imgSrc}`"
      />
      <p
        class="w-14 sm:w-16 lg:w-20 leading-3 mt-2 text-[12px] sm:text-[15px] lg:text-lg text-center font-extrabold"
      >
        {{ props.data.title }}
      </p>
      <p
        class="mt-5 text-[10px] sm:text-[12px] lg:text-sm leading-3 text-center text-textSecondary"
      >
        {{ props.data.text }}
      </p>
    </div>
    <button
      class="mt-[-10px] lg:mt-[-15px] flex flex-row items-center gap-4 shadow-black shadow-sm font-extrabold px-4 text-[10px] lg:text-sm py-1 rounded-full bg-bgPrimary"
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
