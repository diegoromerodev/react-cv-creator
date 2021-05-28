module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "google",
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // eslint-disable-next-line prettier/prettier
    "quotes": [2, "double"],
    "object-curly-spacing": [2, "always"],
  },
};
