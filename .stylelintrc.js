module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-styled-components",
    "stylelint-config-prettier",
  ],
  overrides: [
    {
      files: ["**/*.ts{,x}"],
      customSyntax: "@stylelint/postcss-css-in-js",
      rules: {
        /** Unexpected unknown function "${" を防ぐ手段がないため */
        "function-no-unknown": null,
      },
    },
  ],
};
