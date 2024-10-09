<template>
  <div
    id="home"
    class="mt-[192px] w-full min-h-[calc(100vh-192px)] flex flex-col"
  >
    <section
      :style="`background-image: url('${imgSrc}')`"
      class="px-8 py-6 bg-cover h-[calc(100vh-192px)] flex flex-col justify-between"
    >
      <p class="w-[40vw] mt-6 text-textColor5 text-5xl font-extrabold">
        Dental materials of highest quality
      </p>
      <p class="w-[40vw] mt-10 text-textColor5 text-sm">
        At Dentech Supply, we’re passionate about elevating oral health. Whether
        you’re a seasoned dentist, a dental student, or a dental enthusiast,
        we’ve got your back. Explore our extensive range of high-quality dental
        supplies, from cutting-edge instruments to comfortable patient chairs.
      </p>
      <div class="mt-6 flex flex-row text-center">
        <button
          class="px-10 text-lg py-1 rounded-full text-textColor5 bg-buttonSecondary"
        >
          Call us
        </button>
      </div>
      <div class="self-center w-fit mt-4 flex flex-row gap-2 items-center">
        <div
          @click="
            () => {
              currentPos = index;
              imgSrc = urls[currentPos];
            }
          "
          v-for="(url, index) in urls"
          :key="index"
          :class="`rounded-full cursor-pointer w-[10px] h-[10px]  ${
            currentPos === index
              ? 'bg-bgColor3 scale-150 transition-all duration-300 '
              : 'bg-bgPrimary'
          }`"
        />
      </div>
    </section>
    <section class="px-[4rem] py-[3rem] flex flex-col gap-8">
      <div class="flex flex-row justify-between">
        <p class="text-3xl font-extrabold">New Products</p>
        <button
          class="flex flex-row items-center gap-4 shadow-lg font-extrabold px-4 text-sm py-2 rounded-full bg-buttonPrimary border-2 border-borderPrimary"
        >
          See more <img class="" src="/new/icons/forwardArrow.png" />
        </button>
      </div>
      <article class="grid grid-cols-4 gap-4">
        <CardsNewProduct
          v-for="(item, index) in newProducts"
          :key="index"
          :data="item"
        />
      </article>
    </section>
    <section
      class="bg-cover bg-[url('/new/images/servicesPoster.png')] min-h-[calc(100vh-70px)] flex flex-col justify-center gap-12 px-10"
    >
      <p class="text-textColor5 text-2xl font-bold">
        Advantages of working with General Dental
      </p>
      <article class="grid grid-cols-4 gap-6">
        <CardsService
          v-for="(item, index) in services"
          :key="index"
          :data="item"
        />
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { newProducts, services } from "~/constant/data";
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
  }, 8000);
});
</script>
