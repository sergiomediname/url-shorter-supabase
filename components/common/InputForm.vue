<template>
  <input
    v-bind="data"
    :id="uniqueId"
    v-model="inputValue"
    class="border border-slate-300 rounded-[10px] px-4 py-3 outline-none"
  />
</template>

<script setup>
import { ref, inject, watch } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const uniqueId = inject("uniqueId");

const inputValue = ref(props.modelValue);

watch(inputValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>
