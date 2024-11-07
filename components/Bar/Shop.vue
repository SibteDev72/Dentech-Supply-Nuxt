<template>
  <div class="lg:hidden flex flex-row justify-between items-center my-2 py-3">
    <div class="flex flex-row items-center gap-2">
      <img
        @click="
          () => {
            navStatus = !navStatus;
          }
        "
        src="/public/new/icons/categoryToggle.png"
        class="w-5"
      />
      <p class="text-sm font-bold capitalize text-textColor4">
        {{ selectedCategory }}
      </p>
    </div>
    <div
      :class="`fixed pt-[4rem] overflow-y-auto z-[300] left-0 top-0 w-[60vw] h-screen bg-bgSecondary transition-all duration-300 ease-in-out lg:hidden ${
        !!navStatus ? 'translate-x-[0vw]' : 'translate-x-[-60vw]'
      }`"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="absolute top-6 right-3 w-6"
        @click="
          () => {
            navStatus = !navStatus;
          }
        "
      >
        <path
          fill-rule="evenodd"
          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>

      <BarSideBarCategories />
    </div>
    <div class="flex flex-row gap-2 mr-4">
      <InputsDropdown
        :label="'Show'"
        :variant="'Mobile'"
        :options="['6', '9', '12', '15', '18']"
        @update-method="handleShowItems"
      />
      <InputsDropdown
        :label="'Sort by'"
        :variant="'Mobile'"
        :options="['date', 'title', 'price']"
        @update-method="handleSorting"
      />
    </div>
  </div>
  <div
    class="hidden lg:flex flex-row justify-between items-center w-full h-fit bg-bgPrimary shadow-lg rounded-full"
  >
    <span
      v-if="selectedCategory !== ''"
      class="bg-bgColor3 capitalize rounded-full text-textColor5 font-bold px-[5rem] py-[1rem]"
    >
      {{ selectedCategory }}
    </span>
    <div class="flex flex-row gap-2 mr-4">
      <InputsDropdown
        :label="'Show'"
        :variant="'Desktop'"
        :options="['6', '9', '12', '15', '18']"
        @update-method="handleShowItems"
      />
      <InputsDropdown
        :label="'Sort by'"
        :variant="'Desktop'"
        :options="['date', 'title', 'price']"
        @update-method="handleSorting"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CursorArrowRaysIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
const categories = useCategories();
const itemsPerPage = useItemsPerPage();
const sotingValue = useSotingValue();
const selectedCategory = ref<string>("");
const navStatus = ref<boolean>(false);

const handleShowItems = (value: string) => {
  itemsPerPage.value = parseInt(value, 10);
};

const handleSorting = (value: string) => {
  sotingValue.value = value;
};

onMounted(() => {
  (itemsPerPage.value = 6), (sotingValue.value = "date");
  categories.value.map((category) => {
    if (`${category.slug}` === route.params.category) {
      selectedCategory.value = category.title;
    }
  });
});
</script>
