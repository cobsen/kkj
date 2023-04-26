<template>
  <section v-html="datenschutz"></section>
</template>

<script lang="ts" setup>
import { Datenschutz } from "~/assets/types";

const { findOne } = useStrapi();

const response = await useAsyncData("datenschutz", () =>
  findOne<Datenschutz>("datenschutz", {
    populate: "PDF",
  })
);

const datenschutz = computed(() => {
  return response?.data.value?.data.attributes.Inhalt ?? "";
});
</script>

<style lang="scss" scoped>
section {
  column-count: 3;
  column-gap: 24px;
  &:before {
    display: none;
  }
  @include breakpoint(tablet) {
    column-count: 2;
  }
  @include breakpoint(mobile) {
    column-count: 1;
  }
}
</style>
