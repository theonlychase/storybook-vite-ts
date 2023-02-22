/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:storybook/recommended',
    '@unocss',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0,
    'vue/no-multiple-template-root': 0,
    // "prettier/prettier": ["error", { "singleQuote": true }],
    // "quotes": ["error", "single"],
    // "@typescript-eslint/no-var-requires": 0,
    // "@typescript-eslint/ban-ts-comment": "off"
  },
};
