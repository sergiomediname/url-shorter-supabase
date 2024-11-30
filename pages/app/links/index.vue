<template>
  <div>
    <div class="text-right mb-8">
      <CommonButton to="/app/links/create">Create Link</CommonButton>
    </div>
    <div>
      <div v-if="links.length == 0" class="flex items-center justify-center">
        <CommonLoader />
      </div>
      <div v-else-if="!links.success">No tenemos resultados</div>
      <div v-else-if="links.success && links.data.length == 0">
        No tienes links creados
      </div>
      <div v-else>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CardLink v-for="link in links.data" :key="link.id" :data="link" />
        </div>
        <div class="mt-6 flex gap-4">
          <button
            v-for="page in links.total_pages"
            :key="page"
            class="border border-slate-300 rounded-sm aspect-square px-3"
            :class="links.current_page == page ? 'bg-blue-200' : 'bg-slate-100'"
            @click="getAll({ page })"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLink } from "@/composables/useLink.js";

definePageMeta({
  title: "My links",
});

const { getAll, links } = useLink();

onMounted(() => {
  getAll({ page: 1 });
});
</script>
