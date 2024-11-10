/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        darkp: "#121222",
        lightp: "#44355B",
        oldRose: "#AC7B7D",
        bone: "#ECE2D0",
      },
    },
  },
  plugins: [],
};
