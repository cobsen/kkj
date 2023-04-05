<template>
  <section id="charta">
    <div class="content" v-html="charta.Inhalt"></div>
    <pre>{{ charta.PDF?.data?.attributes }}</pre>
  </section>
</template>

<script lang="ts" setup>
import { Charta } from "~/assets/types";

const { findOne } = useStrapi();

const response = await findOne<Charta>("charta", {
  populate: "PDF",
});

const charta = computed(() => {
  return response?.data.attributes ?? null;
});
</script>

<style lang="scss" scoped>
section {
}
</style>
