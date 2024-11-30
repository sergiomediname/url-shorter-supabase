<template>
  <div class="grid content-layout">
    <header class="header-layout px-6 py-6 border-b border-slate-300">
      URL SHORTENER
    </header>
    <section class="menu-layout border-r border-slate-300 px-6 py-10">
      <MenuApp />
    </section>
    <main class="main-layout px-6">
      <div class="max-w-[1000px] mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import MenuApp from "@/components/menu/MenuApp";
</script>

<style>
.content-layout {
  height: 100vh;
  grid-template-areas: "menu header" "menu content";
  grid-template-columns: 240px minmax(0, 1fr);
  grid-template-rows: 90px minmax(0, 1fr);
}
.menu-layout {
  grid-area: menu;
}
.header-layout {
  grid-area: header;
}
.main-layout {
  grid-area: content;
}
</style>
