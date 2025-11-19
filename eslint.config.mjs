// @ts-check
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import { configs as astroConfig } from 'eslint-plugin-astro';
// import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import { configs as tseslintConfig } from 'typescript-eslint';

const allJsTsFiles = '**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}';

export default defineConfig(
  globalIgnores(['dist', '.astro']),
  eslint.configs.recommended,
  tseslintConfig.strictTypeChecked,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    ignores: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  // {
  //   extends: [
  //     importPlugin.flatConfigs.recommended,
  //     importPlugin.flatConfigs.typescript,
  //   ],
  //   settings: {
  //     'import/resolver': {
  //       typescript: true,
  //       node: true,
  //     },
  //   },
  //   rules: {
  //     'import/no-cycle': 'error',
  //     'import/order': [
  //       'error',
  //       {
  //         groups: [
  //           'builtin',
  //           'external',
  //           'internal',
  //           'parent',
  //           'sibling',
  //           'index',
  //           'object',
  //         ],
  //         'newlines-between': 'always',
  //         alphabetize: { order: 'asc', caseInsensitive: true },
  //       },
  //     ],
  //   },
  // },
  {
    files: [allJsTsFiles],
    ...reactPlugin.configs.flat['recommended'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: [allJsTsFiles],
    ...reactPlugin.configs.flat['jsx-runtime'],
  },
  reactHooks.configs.flat['recommended-latest'],
  reactRefresh.configs.vite,
  {
    files: ['**/*.astro'],
    extends: [astroConfig['flat/recommended']],
    languageOptions: {
      parserOptions: {
        project: true,
        projectService: false,
      },
    },
  },
  prettierPlugin,
);
