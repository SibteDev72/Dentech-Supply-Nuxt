<template>
  <div class="w-full flex flex-col">
    <section class="flex flex-row justify-between mb-4">
      <div class="flex flex-row items-center space-x-2">
        <p class="text-lg lg:text-3xl font-extrabold">{{ props.data.name }}</p>
        <ChevronLeftIcon
          v-if="props.data.variant === 'category'"
          @click="sliderInstance?.prev()"
          class="hidden cursor-pointer bg-buttonSecondary p-3 md:flex flex-col justify-center items-center w-10 lg:w-12 h-10 lg:h-12 rounded-[100%] shadow-xl text-textColor5"
        />
        <ChevronRightIcon
          v-if="props.data.variant === 'category'"
          @click="sliderInstance?.next()"
          class="hidden cursor-pointer bg-buttonSecondary p-3 md:flex flex-col justify-center items-center w-10 lg:w-12 h-10 lg:h-12 rounded-[100%] shadow-xl text-textColor5"
        />
      </div>
      <button
        v-if="props.data.variant !== 'relatedProduct'"
        @click="
          () => {
            router.push(
              `${
                props.data.variant === 'brand'
                  ? '/brands'
                  : '/Shop/equipment_Id=28'
              }`
            );
          }
        "
        class="hidden group w-fit h-fit md:flex flex-row items-center gap-4 shadow-black shadow-sm font-extrabold px-4 py-2 text-sm rounded-full bg-bgPrimary hover:bg-buttonHover hover:text-textColor5 transition-all duration-300"
      >
        view all {{ props.data.variant === "brand" ? "brands" : "categories" }}
        <ArrowRightIcon
          class="w-4 text-textColor4 group-hover:text-textColor5"
        />
      </button>
    </section>

    <section class="relative">
      <ChevronLeftIcon
        v-if="
          props.data.length >= 4 &&
          (props.data.variant === 'brand' ||
            props.data.variant === 'relatedProduct')
        "
        @click="sliderInstance?.prev()"
        class="z-50 cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-[-30px] hidden bg-buttonSecondary md:flex flex-col justify-center items-center p-3 w-10 lg:w-12 h-10 lg:h-12 rounded-[100%] shadow-xl text-textColor5"
      />

      <article
        ref="sliderRef"
        :class="`keen-slider p-2 ${
          props.data.variant === 'brand' && 'shadow-xl'
        }`"
      >
        <slot />
      </article>
      <ChevronRightIcon
        v-if="
          props.data.length >= 4 &&
          (props.data.variant === 'brand' ||
            props.data.variant === 'relatedProduct')
        "
        @click="sliderInstance?.next()"
        class="z-50 cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[-30px] hidden bg-buttonSecondary md:flex flex-col justify-center p-3 items-center w-10 lg:w-12 h-10 lg:h-12 rounded-[100%] shadow-xl text-textColor5"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import type { KeenSliderInstance } from "keen-slider";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/solid";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const props = defineProps<{
  data: { name: string; variant: string; length: number };
}>();
const router = useRouter();

const sliderRef = ref<HTMLElement | null>(null);
let sliderInstance: KeenSliderInstance | null = null;

onMounted(() => {
  if (sliderRef.value) {
    sliderInstance = new KeenSlider(sliderRef.value, {
      breakpoints: {
        "(min-width: 300px) and (max-width: 639px)": {
          slides: {
            perView: props.data.variant === "category" ? 1.7 : 1.05,
            spacing: 10,
          },
        },
        "(min-width: 640px) and (max-width: 767px)": {
          slides: {
            perView: props.data.variant === "category" ? 2.05 : 3.05,
            spacing: 10,
          },
        },
        "(min-width: 768px) and (max-width: 1023px)": {
          slides: {
            perView: props.data.variant === "category" ? 3.05 : 3.05,
            spacing: 10,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView:
              props.data.variant === "category"
                ? 3.05
                : props.data.variant === "relatedProduct"
                ? props.data.length >= 4
                  ? 4.05
                  : props.data.length >= 2
                  ? 2.05
                  : 1.05
                : 5.05,
            spacing: 10,
          },
        },
      },
      loop: false,
      mode: "snap",
    });
  }
});
</script>
