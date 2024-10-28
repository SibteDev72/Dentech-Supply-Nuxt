<template>
  <div>
    <div class="flex flex-row w-full">
      <label class="px-2 font-bold text-sm">{{ props.label }}:</label>
      <select class="px-2 font-bold text-sm" @change="onChangeHandler">
        <option v-for="(opt, index) in props.options" :key="index" :value="opt">
          {{ opt }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: "" },
  options: { type: Array<String>, default: () => [""] },
});
const emits = defineEmits(["update-method"]);

const onChangeHandler = (event: Event) => {
  const selectedValue = (event.target as HTMLSelectElement).value;
  emits("update-method", selectedValue);
};
</script>
