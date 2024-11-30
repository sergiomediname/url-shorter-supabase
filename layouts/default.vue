<template>
  <div
    class="grid content-layout h-screen text-slate-800 font-roboto text-body"
  >
    <header
      class="flex items-center justify-between header-layout px-6 py-6 border-b border-slate-300"
    >
      <div class="flex items-center gap-2">
        <button @click="$router.back()"><IconChevronLeft /></button>
        <!-- <CommonBreadcrumbs /> -->
        <div class="text-[20px] font-bold">
          {{ route.meta.title }}
        </div>
      </div>

      <div class="flex items-center gap-4">
        <AccountUserAvatar />
        <button class="lg:hidden" @click="toggleMenu">
          <IconMenu2 />
        </button>
      </div>
    </header>
    <section
      class="menu-layout border-r border-slate-300 px-6 py-10 w-[240px] h-full bg-white lg:static lg:translate-x-0 fixed top-0 left-0 ease-in-out duration-300"
      :class="isOpenMenu ? 'translate-x-0' : '-translate-x-full'"
    >
      <MenuApp />
    </section>
    <main class="main-layout px-6 py-8">
      <div class="max-w-[1200px] mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import { IconMenu2, IconChevronLeft } from "@tabler/icons-vue";
import MenuApp from "@/components/menu/MenuApp";
const route = useRoute();
const router = useRouter();

useHead({
  meta: [{ property: "og:title", content: `App Name - ${route.meta.title}` }],
});

const isOpenMenu = ref(false);
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
};
</script>

<style>
.content-layout {
  grid-template-areas: "header" "content";
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr);
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

@media (min-width: 992px) {
  .content-layout {
    grid-template-areas: "menu header" "menu content";
    grid-template-columns: 240px minmax(0, 1fr);
  }
}
</style>
