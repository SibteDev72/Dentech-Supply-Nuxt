<template>
  <div class="flex flex-row gap-2 text-sm">
    <p class="text-textPrimary" v-for="(number, index) in number" :key="index">
      {{ number }}
    </p>
  </div>
</template>

<script setup lang="ts">
const numberOfPages = useNumberOfPages();
let number: number[];
watch(
  () => numberOfPages.value,
  (newValue) => {
    if (newValue === 1) {
      number = [1];
    } else if (newValue === 2) {
      number = [1, 2];
    } else {
      number = Array.from({ length: newValue }, (_, i) => i + 1);
    }
  }
);
</script>
