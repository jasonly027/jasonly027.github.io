// @ts-check

/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
