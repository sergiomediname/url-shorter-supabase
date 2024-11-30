<template>
  <div class="w-full max-w-[60%] mx-auto">
    <form class="flex flex-col gap-6">
      <CommonInputGroup>
        <template #label>Url</template>
        <CommonInputForm
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
definePageMeta({
  title: "Edit Link",
});
</script>
