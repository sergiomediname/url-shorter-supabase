<template>
  <div class="flex flex-col gap-2">
    <label :for="uniqueId"><slot name="label" /></label>
    <slot />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";

const uniqueId = ref(`group-${Math.random().toString(36).substring(2, 10)}`);

provide("uniqueId", uniqueId);
</script>
