/* eslint-disable */
module.exports = {
  env: { browser: true, es6: true, jest: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  globals: { __DEV__: "readonly" },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react-hooks"],
  rules: {
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unescaped-entities": 0,
    "react/no-children-prop": "off",
    "react/prop-types": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-empty-interface": "error",
    "no-console": "warn",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-native",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "@typescript-eslint/no-var-requires": 0,
    "react-hooks/rules-of-hooks": "error",
  },
  settings: { react: { version: "detect" } },
  overrides: [
    {
      // Test files only
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
