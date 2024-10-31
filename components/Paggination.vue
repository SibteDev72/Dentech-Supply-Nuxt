<template>
  <div class="w-fit flex flex-row gap-3 items-center text-sm">
    <ChevronLeftIcon
      v-if="activePage !== 1"
      @click="
        () => {
          activePage = activePage - 1;
        }
      "
      class="w-5 text-textSecondary cursor-pointer"
    />
    <p
      v-for="(page, index) in pagesArray"
      :key="index"
      @click="
        () => {
          activePage = page;
        }
      "
      :class="`cursor-pointer text-textSecondary ${
        page === activePage &&
        'w-10 h-10 flex flex-col items-center justify-center bg-bgColor3 text-white rounded-[100%] transition-all duration-300'
      }`"
    >
      {{ page }}
    </p>
    <ChevronRightIcon
      v-if="activePage !== pagesArray.length"
      @click="
        () => {
          activePage = activePage + 1;
        }
      "
      class="w-5 text-textSecondary cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
const pagesArray = usePagesArray();
const activePage = useActivePage();
</script>
