<template>
  <section>
    <VueMarkdown class="content" :source="konferenz?.Inhalt" />
    <Newsletter />
  </section>
</template>

<script lang="ts" setup>
import { Konferenz } from "~/assets/types";
import VueMarkdown from 'vue-markdown-render'

const { findOne } = useStrapi();

const response = await useAsyncData("konferenz", () =>
  findOne<Konferenz>("konferenz")
);

const konferenz = computed(() => {
  return response?.data.value?.data.attributes ?? null;
});
</script>

<style lang="scss" scoped>
section {
}
</style>
