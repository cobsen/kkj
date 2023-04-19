// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/strapi", "@nuxt/image-edge"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  strapi: {
    // Options
  },
  css: ["normalize.css/normalize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/_vars.scss";',
        },
      },
    },
  },
  target: "static",
  experimental: {
    payloadExtraction: true,
  },
  generate: {
    routes: ["/"],
  },
  buildModules: ["@nuxt/image-edge"],
  image: {
    strapi: {
      baseURL: "http://localhost:1337/",
    },

    staticFilename: "[publicPath]/images/[name]-[hash][ext]",
    domains: ["localhost", "localhost:1337"],
    dir: "static",
  },
});
