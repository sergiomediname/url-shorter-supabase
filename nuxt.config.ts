// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/fonts", "@prisma/nuxt", "@nuxt/eslint"],
  fonts: {
    families: [{ name: "Roboto", provider: "google" }],
  },
  prisma: {
    installStudio: false,
  },
  features: {
    devLogs: false
    // or 'silent' to allow you to handle yourself with dev:ssr-logs hook
  },
  runtimeConfig: {
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
    public: {
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      SUPABASE_URL: process.env.SUPABASE_URL
    }
  }
});
