import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  /*
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
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
    console.debug("1", to);
    console.debug("2", from);
    console.debug("3", "#" + to.name?.toString());
    if (to.path === "/" || to.fullPath === from.fullPath)
      return { el: "#" + to.name?.toString() };
    return { el: "#" + to.name?.toString(), behavior: "smooth" };
  },
*/
};
