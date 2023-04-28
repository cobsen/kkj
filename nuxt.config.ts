// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/strapi", "@nuxt/image-edge"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      htmlAttrs: {
        lang: "de",
      },
    },
  },
  strapi: {
    // Options
    url: "https://kkj-backend.perspective-daily.de",
  },
  css: ["normalize.css/normalize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/_vars.scss"; @import "@/assets/_mixins.scss";',
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
      baseURL: "https://kkj-backend.perspective-daily.de",
    },

    staticFilename: "[publicPath]/images/[name]-[hash][ext]",
    domains: ["https://kkj-backend.perspective-daily.de/"],
    dir: "static",
  },
});
