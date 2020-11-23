export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  router: {
    base: '/app/'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Astronomia",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        re: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
