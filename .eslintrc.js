module.exports = {
  // Specifies the ESLint parser
  parser: "babel-eslint",
  root: true, // Make sure eslint picks up the config at the root of the directory
  extends: [
    "plugin:react/recommended",
    "plugin:eslint/recommended",
    "prettier/eslint",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: ["eslint", "react", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: "module",
  },
  rules: {
    // needed for NextJS's jsx without react import
    "react/react-in-jsx-scope": "off",
  },
  globals: { React: "writable" },
};
