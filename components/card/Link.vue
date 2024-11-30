<template>
  <div class="px-6 py-4 border border-slate-300 rounded-md">
    <header class="flex items-start justify-between gap-6 flex-col md:flex-row">
      <div class="overflow-hidden max-w-full">
        <div class="text-[18px] font-bold">
          <span class="text-blue-600">short</span>.link/{{ data.slug }}
        </div>
        <div
          class="mt-1 text-[14px] leading-[1.3] text-slate-500 text-ellipsis overflow-hidden whitespace-nowrap"
        >
          {{ data.url }}
        </div>
      </div>
      <div class="flex items-center gap-2">
        <NuxtLink
          to="/app/links/12/edit"
          class="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-slate-200 py-1.5 px-4 md:p-1.5 rounded"
        >
          <IconEdit stroke="2" class="w-4 h-4" />
          <span class="md:hidden">Edit</span>
        </NuxtLink>
        <button
          class="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-slate-200 py-1.5 px-4 md:p-1.5 rounded"
        >
          <IconCopy stroke="2" class="w-4 h-4" />
          <span class="md:hidden">Copy</span>
        </button>
      </div>
    </header>

    <footer
      class="text-[12px] pt-4 mt-6 border-t border-slate-300 text-slate-500"
    >
      <div class="flex items-center gap-1">
        <!-- <IconClock stroke="2" class="w-3.5 h-3.5" />02 Dec 2022 12:06 -->
        <IconClock stroke="2" class="w-3.5 h-3.5" /><span>{{
          data.createdAt
        }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { IconEdit, IconCopy, IconClock } from "@tabler/icons-vue";

interface LinkData {
  id: number; // Tipo ajustado según tu estructura de datos
  slug: string;
  url: string;
  createdAt: string; // Puede ser Date si ya está parseado
}

defineProps<{
  data: LinkData;
}>();
</script>
