import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // Ensure compatibility with traditional ESLint configurations.
  baseDirectory: import.meta.dirname, // For Node.js v20.11.0+.
});

const eslintConfig = [
  ...compat.config({
    extends: ['next'], // Use Next.js ESLint rules.
    rules: {
      'react/no-unescaped-entities': 'off', // Disable unescaped entities rule.
      '@next/next/no-page-custom-font': 'off', // Allow custom fonts in pages.
    },
  }),
];

export default eslintConfig;
