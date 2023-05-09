<template>
  <section>
    <img src="~/public/kkj.svg" alt="" />
    <div class="content" v-html="konferenz?.Inhalt" />
    <div class="content" v-html="konferenz?.Programm" />
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
  .content {

    p:first-of-type {
      color: red;
    }
  }
}
</style>
