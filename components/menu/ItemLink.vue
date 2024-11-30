<template>
  <NuxtLink
    class="w-full inline-flex items-center gap-2 rounded-md px-4 p-2 hover:text-blue-600"
  >
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps(["data"]);
</script>

<style scoped>
.router-link-active {
  @apply bg-blue-600 text-slate-200;
}
</style>
