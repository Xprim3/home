import vue from 'eslint-plugin-vue';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  // Vue files
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslintParser,
        ecmaVersion: 2021,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: { vue },
    rules: {
      ...vue.configs['flat/recommended'].rules,
    },
  },
  // TypeScript files
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      ...tseslint.configs['recommended'].rules,
    },
  },
  // Common rules
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
