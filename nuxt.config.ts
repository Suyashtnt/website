import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: ["nuxt-windicss"],
  meta: {
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        name: "description",
        content:
          "Welcome To TNT MAN INC. The place where the most random stuff is mashed together into this monstrocity of a website",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
  },
});
