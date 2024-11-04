<template>
  <div class="hidden w-full lg:grid grid-cols-4 gap-2">
    <div
      class="w-full h-[25rem] animate-pulse rounded-md bg-slate-700"
      v-for="index in box"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
const box: number[] = [1, 2, 3, 4];
</script>
