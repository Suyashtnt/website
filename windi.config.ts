import { defineConfig, transform } from "windicss/helpers";
export default defineConfig({
  theme: {
    ripple: (theme) => ({
      colors: theme("colors"),
      darken: 0.15,
      modifierTransition: "background 0.5s",
    }),
  },
  plugins: [
    transform("tailwindcss-ripple")(),
    require("@windicss/plugin-question-mark"),
  ],
});
