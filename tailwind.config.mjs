/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lightp: "#6C3EB0",
        medp: "#4b15a2",
        darkp: "#121222",
        amethyst: "#9054A4",
        bone: "#ECE2D0",
        boneDark: "#D8CFBD",
      },
    },
  },
  plugins: [],
};
