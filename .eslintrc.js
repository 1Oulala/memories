module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'jsx-a11y/label-has-associated-control': 'off',
    'no-console': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
  },
};
