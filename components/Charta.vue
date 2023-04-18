<template>
  <section id="charta">
    <div class="content" v-html="charta.Inhalt"></div>
    <a :href="host + charta.PDF?.data?.attributes?.url"><button>PDF</button></a>
  </section>
</template>

<script lang="ts" setup>
import { Charta } from "~/assets/types";

const { findOne } = useStrapi();

const response = await useAsyncData("charta", () =>
  findOne<Charta>("charta", {
    populate: "PDF",
  })
);

const charta = computed(() => {
  return response?.data.value?.data.attributes ?? null;
});

const host = computed(() => {
  if (process.server && process.env.prerender) {
    return "";
  }
  return "http://localhost:1337";
});
</script>

<style lang="scss" scoped>
section {
}
</style>
