<template>
  <section id="konferenz">
    <h1>Konferenz</h1>
    <div class="content" v-html="konferenz.Inhalt"></div>
  </section>
</template>

<script lang="ts" setup>
import { Konferenz } from "~/assets/types";

const { findOne } = useStrapi();

const response = await findOne<Konferenz>("konferenz");

const konferenz = computed(() => {
  return response?.data.attributes ?? null;
});
</script>

<style lang="scss" scoped>
section {
  min-height: 80vh;
  background: $konferenz;
}
</style>
