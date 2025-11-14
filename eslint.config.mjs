// @ts-check
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import { importX } from 'eslint-plugin-import-x';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import { configs as tseslintConfig } from 'typescript-eslint';

export default defineConfig(
  globalIgnores(['dist', '.astro']),
  eslint.configs.recommended,
  {
    extends: [tseslintConfig.strictTypeChecked],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
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
    plugins: {
      // @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/11543
      'import-x': importX,
    },
    extends: ['import-x/flat/recommended', 'import-x/flat/typescript'],
    rules: {
      'import-x/no-cycle': 'error',
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    extends: [reactPlugin.configs.flat.recommended],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooks.configs.flat['recommended-latest'],
  reactRefresh.configs.vite,
  prettierPlugin,
);
