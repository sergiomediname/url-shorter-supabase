/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./nuxt.config.ts",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
      },
      fontSize: {
        body: ["1rem", "1.5"],
      },
    },
  },
  plugins: [],
};
