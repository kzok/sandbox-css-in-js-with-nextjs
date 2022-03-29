module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["next/core-web-vitals", "eslint:recommended"],
  plugins: [],
  rules: {
    /** シンタックスrハイライトで打ち間違いかどうかわかるので不要 */
    "react/no-unescaped-entities": "off",
  },
  overrides: [
    // TypeScript 向けの設定
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: {},
    },
  ],
};
