import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
      component: () => import("~/app.vue").then((r) => r.default || r),
    },
    {
      name: "konferenz",
      path: "/#konferenz",
      component: () => import("~/app.vue").then((r) => r.default || r),
    },
    {
      name: "charta",
      path: "/#charta",
      component: () => import("~/app.vue").then((r) => r.default || r),
    },
    {
      name: "studie",
      path: "/#studie",
      component: () => import("~/app.vue").then((r) => r.default || r),
    },
    {
      name: "blog",
      path: "/#blog",
      component: () => import("~/app.vue").then((r) => r.default || r),
    },
    {
      name: "team",
      path: "/#team",
      component: () => import("~/app.vue").then((r) => r.default || r),
    },
    {
      name: "impressum",
      path: "/impressum-kontakt",
      component: () => import("~/app.vue").then((r) => r.default || r),
    },
    {
      name: "datenschutz",
      path: "/datenschutz",
      component: () => import("~/app.vue").then((r) => r.default || r),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.path === "/" || to.fullPath === from.fullPath)
      return { el: "#" + to.name?.toString() };
    return { el: "#" + to.name?.toString(), behavior: "smooth" };
  },
};
