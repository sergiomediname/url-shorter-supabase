<template>
  <nav id="breadcrumbs" aria-label="Breadcrumb">
    <ul>
      <li>
        <NuxtLink to="/" :aria-current="ariaCurrent(-1)">Home</NuxtLink>
      </li>
      <li v-for="(breadcrumb, index) in getBreadcrumbs()" :key="index">
        <NuxtLink :to="breadcrumb.path" :aria-current="ariaCurrent(index)">
          {{ breadcrumb.meta.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const getBreadcrumbs = () => {
  const fullPath = route.path;
  const requestPath = fullPath.startsWith("/")
    ? fullPath.substring(1)
    : fullPath;
  const crumbs = requestPath.split("/");
  const breadcrumbs = [];
  let path = "";
  crumbs.forEach((crumb) => {
    if (crumb) {
      path = `${path}/${crumb}`;
      const breadcrumb = router.getRoutes().find((r) => r.path === path);
      if (breadcrumb) {
        breadcrumbs.push(breadcrumb);
      }
    }
  });
  return breadcrumbs;
};
const ariaCurrent = (index) =>
  index === getBreadcrumbs().length - 1 ? "page" : "false";
</script>
