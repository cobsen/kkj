import { useScroll } from "@vueuse/core";

const { isScrolling } = useScroll(document);

export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  console.debug("fghsdklögjhfsdkfgjsdjklgf");
});
