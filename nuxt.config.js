export default {
  mode: "universal",

  head: {
    title: "Chakra UI Vue Starter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Chakra UI Vue integration with Nuxt starter",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  modules: [
    "@chakra-ui/nuxt", // register the chakra nuxt package
    "@nuxtjs/emotion", // register the emotion package which is being used by chakra-ui-vue
    // Doc: https://http.nuxtjs.org
  ],
};
