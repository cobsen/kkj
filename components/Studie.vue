<template>
  <section id="studie" class="divided">
    <div class="content" v-html="studie.Inhalt"></div>
    <a :href="host + studie.PDF?.data?.attributes?.url"><button>PDF</button></a>
    <pre>{{ studie.PDF?.data?.attributes }}</pre>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { Studie } from "~/assets/types";

const { findOne } = useStrapi();

const response = await useAsyncData("studie", () =>
  findOne<Studie>("studie", {
    populate: "PDF",
  })
);

const studie = computed(() => {
  return response?.data.value?.data.attributes ?? null;
});

const host = computed(() => {
  if (process.server && process.env.prerender) {
    return "";
  }
  return "http://localhost:1337";
});

const $headline = ref(null);

const { stop } = useIntersectionObserver(
  $headline,
  ([{ isIntersecting }], observerElement) => {
    console.debug("studie", isIntersecting);
  }
);
</script>

<style lang="scss" scoped>
section {
}
</style>
