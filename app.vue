<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { getCategoriesData } from "./API/Products";
const fetchCategories = async () => {
  await getCategoriesData();
};
onMounted(() => {
  fetchCategories();
});
</script>
