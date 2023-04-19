<template>
  <section id="konferenz">
    <div class="content" v-html="konferenz?.Inhalt"></div>
    <Newsletter />
  </section>
</template>

<script lang="ts" setup>
import { Konferenz } from "~/assets/types";

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
