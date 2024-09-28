<template>
  <div
    :style="`background-image: url('${imgSrc}')`"
    class="mt-[192px] py-4 bg-cover w-full h-[calc(100vh-192px)] flex flex-col justify-end items-center"
  >
    <div class="mt-4 flex flex-row gap-2 justify-center items-center">
      <div
        @click="
          () => {
            currentPos = index;
            imgSrc = urls[currentPos];
          }
        "
        v-for="(url, index) in urls"
        :key="index"
        :class="`rounded-full cursor-pointer ${
          currentPos === index
            ? 'bg-[#3EBBA4] w-[14px] h-[14px]'
            : 'bg-white w-[10px] h-[10px]'
        }`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const urls = ref([
  "/new/images/slider-pic-1.png",
  "/new/images/slider-pic-2.png",
  "/new/images/slider-pic-3.png",
  "/new/images/slider-pic-4.png",
]);
const currentPos = ref<number>(0);
const imgSrc = ref<string>(urls.value[currentPos.value]);

watch(
  () => currentPos.value,
  (newValue) => {
    if (newValue > urls.value.length - 1) {
      currentPos.value = 0;
      imgSrc.value = urls.value[currentPos.value];
    }
  },
  { deep: true, immediate: true }
);

onMounted(() => {
  setInterval(() => {
    currentPos.value += 1;
    imgSrc.value = urls.value[currentPos.value];
  }, 10000);
});
</script>
