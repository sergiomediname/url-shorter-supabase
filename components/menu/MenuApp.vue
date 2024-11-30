<template>
  <div class="flex flex-col gap-1 h-full">
    <ItemLink to="/app/"><IconDashboard stroke="2" />Dashboard</ItemLink>
    <ItemLink to="/app/links/"><IconLink stroke="2" />Links</ItemLink>
    <ItemLink><IconSettings />Settings</ItemLink>
    <ItemLink class="mt-auto"><IconLogout />Log out</ItemLink>
  </div>
</template>

<script setup>
import ItemLink from "@/components/menu/ItemLink";

import {
  IconDashboard,
  IconLink,
  IconSettings,
  IconLogout,
} from "@tabler/icons-vue";
</script>
