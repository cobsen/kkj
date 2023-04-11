<template>
  <section v-html="impressum"></section>
</template>

<script lang="ts" setup>
import { Impressum } from "~/assets/types";

const { findOne } = useStrapi();

const response = await useAsyncData("impressum", () =>
  findOne<Impressum>("impressum", {
    populate: "PDF",
  })
);

const impressum = computed(() => {
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
}
</style>
