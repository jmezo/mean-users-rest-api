module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  env: {
    node: true,
  },
  rules: {
    'new-cap': 0,
    'require-jsdoc': false,
  },
};
