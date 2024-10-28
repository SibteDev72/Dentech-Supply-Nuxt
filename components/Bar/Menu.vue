<template>
  <!-- <div class="lg:hidden flex flex-row justify-between items-center">
    <div class="flex flex-row items-center gap-4">
      <button>Filter</button>
      <p class="text-sm capitalize text-textColor4">
        {{ selectedCategory }}
      </p>
    </div>
    <div class="flex flex-row items-center gap-4">
      <button>Filter</button>
      <p class="text-sm capitalize text-textColor4">
        {{ selectedCategory }}
      </p>
    </div>
  </div> -->
  <div
    class="hidden lg:flex flex-row justify-between items-center w-full h-fit bg-bgPrimary shadow-lg rounded-full"
  >
    <span
      class="bg-bgColor3 capitalize rounded-full text-textColor5 font-bold px-[5rem] py-[1rem]"
    >
      {{ selectedCategory }}
    </span>
    <div class="flex flex-row gap-2 mr-4">
      <InputsDropdown
        :label="'Show'"
        :options="['6', '9', '12', '15', '18']"
        @update-method="handleShowItems"
      />
      <InputsDropdown
        :label="'Default sorting'"
        :options="['date', 'title', 'price']"
        @update-method="handleSorting"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const categories = useCategories();
const itemsPerPage = useItemsPerPage();
const sotingValue = useSotingValue();
const selectedCategory = ref<string>("");

const handleShowItems = (value: string) => {
  itemsPerPage.value = parseInt(value, 10);
};

const handleSorting = (value: string) => {
  sotingValue.value = value;
};

onMounted(() => {
  (itemsPerPage.value = 6), (sotingValue.value = "date");
  categories.value.map((category) => {
    if (`${category.slug}_Id=${category.id}` === route.params.category) {
      selectedCategory.value = category.title;
    }
  });
});
</script>
