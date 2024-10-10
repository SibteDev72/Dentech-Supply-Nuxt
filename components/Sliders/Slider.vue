<template>
  <div class="w-full flex flex-col">
    <section class="flex flex-row justify-between mb-4">
      <div class="flex flex-row items-center space-x-2">
        <p class="text-lg lg:text-3xl font-extrabold">{{ props.data.name }}</p>
        <button
          v-if="props.data.variant === 'category'"
          @click="sliderInstance?.prev()"
          class="hidden bg-buttonSecondary md:flex flex-col justify-center items-center w-10 lg:w-12 h-10 lg:h-12 rounded-[100%] shadow-xl text-textColor5"
        >
          <
        </button>
        <button
          v-if="props.data.variant === 'category'"
          @click="sliderInstance?.next()"
          class="hidden bg-buttonSecondary md:flex flex-col justify-center items-center w-10 lg:w-12 h-10 lg:h-12 rounded-[100%] shadow-xl text-textColor5"
        >
          >
        </button>
      </div>
      <button
        class="hidden w-fit h-fit md:flex flex-row items-center gap-4 shadow-black shadow-sm font-extrabold px-4 py-2 text-sm rounded-full bg-bgPrimary"
      >
        view all {{ props.data.variant === "brand" ? "brands" : "categories" }}
        <img class="" src="/new/icons/forwardArrow.png" />
      </button>
    </section>

    <section class="relative">
      <button
        v-if="props.data.variant === 'brand'"
        @click="sliderInstance?.prev()"
        class="z-50 absolute top-1/2 transform -translate-y-1/2 left-[-30px] hidden bg-buttonSecondary md:flex flex-col justify-center items-center w-10 lg:w-12 h-10 lg:h-12 rounded-[100%] shadow-xl text-textColor5"
      >
        <
      </button>
      <article
        ref="sliderRef"
        :class="`keen-slider p-2 ${
          props.data.variant === 'brand' && 'shadow-xl'
        }`"
      >
        <slot />
      </article>
      <button
        v-if="props.data.variant === 'brand'"
        @click="sliderInstance?.next()"
        class="z-50 absolute top-1/2 transform -translate-y-1/2 right-[-30px] hidden bg-buttonSecondary md:flex flex-col justify-center items-center w-10 lg:w-12 h-10 lg:h-12 rounded-[100%] shadow-xl text-textColor5"
      >
        >
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { KeenSliderInstance } from "keen-slider";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const props = defineProps<{
  data: { name: string; variant: string };
}>();

const sliderRef = ref<HTMLElement | null>(null);
let sliderInstance: KeenSliderInstance | null = null;

onMounted(() => {
  if (sliderRef.value) {
    sliderInstance = new KeenSlider(sliderRef.value, {
      breakpoints: {
        "(min-width: 300px) and (max-width: 639px)": {
          slides: {
            perView: props.data.variant === "category" ? 1.7 : 1,
            spacing: 10,
          },
        },
        "(min-width: 640px) and (max-width: 767px)": {
          slides: {
            perView: props.data.variant === "category" ? 2 : 3,
            spacing: 10,
          },
        },
        "(min-width: 768px) and (max-width: 1023px)": {
          slides: {
            perView: props.data.variant === "category" ? 3 : 3,
            spacing: 10,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: props.data.variant === "category" ? 3 : 5,
            spacing: 10,
          },
        },
      },
      loop: true,
      mode: "snap",
    });
  }
});
</script>
