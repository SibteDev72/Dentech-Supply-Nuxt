<template>
  <div
    class="mt-[96px] lg:mt-[192px] w-full h-fit py-8 px-6 md:px-8 lg:px-[4rem] grid grid-cols-2 lg:grid-cols-4 gap-8"
  >
    <CardsBrand
      class="shadow-md shadow-black"
      v-for="(item, index) in brands"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script setup lang="ts">
import { brands } from "~/constant/data";
</script>
