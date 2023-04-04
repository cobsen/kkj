<template>
  <section id="studie">
    <h1 ref="$headline">Studie</h1>
    <div class="content" v-html="studie.Inhalt"></div>
    <pre>{{ studie.PDF?.data?.attributes }}</pre>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { Studie } from "~/assets/types";

const { findOne } = useStrapi();

const response = await findOne<Studie>("studie", {
  populate: "PDF",
});

const studie = computed(() => {
  return response?.data.attributes ?? null;
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
  min-height: 80vh;
  background: $studie;
}
</style>
