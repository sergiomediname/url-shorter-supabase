<template>
  <div class="w-full max-w-[60%] mx-auto">
    <form
      class="flex flex-col gap-6"
      @submit.prevent="create({ link: dataNewLink })"
    >
      <CommonInputGroup>
        <template #label>Url</template>
        <CommonInputForm
          v-model="dataNewLink.url"
          :data="{
            type: 'url',
            name: 'url',
            placeholder: 'https://www.google.es',
          }"
        />
      </CommonInputGroup>

      <CommonInputGroup>
        <template #label>Short url</template>
        <CommonInputForm
          v-model="dataNewLink.slug"
          :data="{
            type: 'text',
            name: 'slug',
            placeholder: 'Ex.: awesome-short-url',
          }"
        />
      </CommonInputGroup>

      <CommonButton>Create</CommonButton>
    </form>
  </div>
</template>

<script setup>
import { useLink } from "@/composables/useLink.js";

definePageMeta({
  title: "Create new Link",
});

const { create } = useLink();

const dataNewLink = ref({
  url: "https://dribbble.com/shots/20357757-Shortie-Link-Shortener-Dashboard",
  slug: "dribbble",
});
</script>
