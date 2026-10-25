/** @type {import("stylelint").Config} */
export default {
  plugins: ["stylelint-plugin-logical-css", "stylelint-use-nesting"],
  rules: {
    "csstools/use-nesting": "always",
  },
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html/svelte",
    "stylelint-config-alphabetical-order",
    "stylelint-plugin-logical-css/configs/recommended",
  ],
};
