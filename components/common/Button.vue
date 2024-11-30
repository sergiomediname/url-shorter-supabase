<template>
  <component
    :is="to ? NuxtLink : href ? 'a' : 'button'"
    class="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-[10px] transition-colors duration-200"
    :to="to"
    :href="href"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script setup>
import { NuxtLink } from "#components";

defineProps(["to", "href"]);
</script>
