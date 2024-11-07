<template>
  <div
    class="mt-[96px] lg:mt-[192px] w-full min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-192px)] flex flex-col"
  >
    <section
      :style="`background-image: url('${imgSrc}')`"
      class="px-8 py-3 bg-cover h-[170px] flex flex-col justify-between sm:h-[250px] md:h-[300px] lg:min-h-[calc(100vh-192px)]"
    >
      <p
        class="w-[40vw] mt-8 text-textColor5 text-md font-extrabold md:text-2xl lg:text-4xl lg:mt-[5rem]"
      >
        Dental materials of highest quality
      </p>
      <p
        class="hidden md:flex w-[80vw] mt-3 text-textColor5 text-sm lg:text-lg lg:w-[50vw] xl:text-sm"
      >
        At Dentech Supply, we’re passionate about elevating oral health. Whether
        you’re a seasoned dentist, a dental student, or a dental enthusiast,
        we’ve got your back. Explore our extensive range of high-quality dental
        supplies, from cutting-edge instruments to comfortable patient chairs.
      </p>
      <!-- <div class="hidden md:flex flex-row text-center lg:pb-[6rem]">
        <button
          class="px-10 text-sm py-1 rounded-full text-textColor5 bg-buttonSecondary"
        >
          Call us
        </button>
      </div> -->
      <div class="self-center w-fit flex flex-row gap-1 md:gap-2 items-center">
        <div
          @click="
            () => {
              currentPos = index;
              imgSrc = urls[currentPos];
            }
          "
          v-for="(url, index) in urls"
          :key="index"
          :class="`rounded-full cursor-pointer w-[5px] h-[5px] md:w-[10px] md:h-[10px]  ${
            currentPos === index
              ? 'bg-bgColor3 scale-125 md:scale-150 transition-all duration-300 '
              : 'bg-bgPrimary'
          }`"
        />
      </div>
    </section>
    <section class="px-6 md:px-8 lg:px-[4rem] py-[3rem] flex flex-col gap-8">
      <div class="flex flex-row justify-between">
        <p class="text-lg lg:text-3xl font-extrabold">New Products</p>
        <button
          @click="
            () => {
              router.push({ path: '/Shop/equipment', query: { id: 28 } });
            }
          "
          class="group flex flex-row items-center gap-4 shadow-lg font-extrabold px-4 py-1 text-sm md:py-2 rounded-full bg-buttonPrimary border-2 border-borderPrimary hover:text-textColor5 hover:bg-buttonHover transition-all duration-300"
        >
          See more
          <ArrowRightIcon
            class="w-4 text-textColor4 group-hover:text-textColor5"
          />
        </button>
      </div>
      <article
        class="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4"
      >
        <CardsProduct
          v-if="newProductData.length > 0"
          v-for="(item, index) in newProductData"
          :key="index"
          :data="item"
        />
      </article>
    </section>
    <section
      class="bg-cover bg-[url('/new/images/servicesPoster.png')] w-full min-h-[250px] md:min-h-[600px] lg:min-h-[calc(100vh-70px)] flex flex-col justify-center px-6 md:px-8 lg:px-[4rem]"
    >
      <p class="hidden md:flex text-textColor5 text-2xl font-bold">
        Advantages of working with General Dental
      </p>

      <article
        class="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4"
      >
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
import type { ProductItem } from "~/types/Products";
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import { services } from "~/constant/data";
import { getNewProductsData } from "~/API/Products";
const router = useRouter();
const urls = ref([
  "/new/images/slider-pic-1.png",
  "/new/images/slider-pic-2.png",
  "/new/images/slider-pic-3.png",
  "/new/images/slider-pic-4.png",
]);
const currentPos = ref<number>(0);
const newProductData = ref<ProductItem[]>([]);
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

const fetchNewProducts = async () => {
  const data = await getNewProductsData(4);
  if (data) {
    //@ts-ignore
    newProductData.value = data;
  }
};
onMounted(() => {
  fetchNewProducts();
  setInterval(() => {
    currentPos.value += 1;
    imgSrc.value = urls.value[currentPos.value];
  }, 8000);
});
</script>
