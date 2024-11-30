<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <CardLink v-for="link in data" :key="link.id" :data="link" />
    </div>

    <button @click="login">Login with Google</button>
  </div>
</template>

<script setup>
import CardLink from "@/components/card/Link";
import { useSupabase } from "~/composables/useSupabase";

definePageMeta({
  title: "Some Page",
});

const data = [
  {
    id: 1,
    slug: "innovation-link",
    url: "www.google.com",
  },
  {
    id: 2,
    slug: "innovation-link-2",
    url: "https://cdn.dribbble.com/userupload/4273492/file/original-1299e4954416585db18c05d6824b427f.png?resize=1600x1200",
  },
];
const { loginWithGoogle } = useSupabase();

const login = async () => {
  try {
    const data = await loginWithGoogle();
    console.log("Logged in:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>
