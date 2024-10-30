<template>
  <article class="grid grid-cols-2 lg:grid-cols-3 gap-2">
    <div
      v-for="() in number"
      class="w-full min-h-[270px] sm:min-h-[320px] lg:min-h-[480px] bg-slate-700 animate-pulse"
    />
  </article>
</template>

<script setup lang="ts">
let number: number[] = [1, 2, 3, 4, 5, 6];
</script>
