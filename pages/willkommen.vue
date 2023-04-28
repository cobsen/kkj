<template>
  <section>
    <div>
      <img src="../src/logo.svg" />
      <div v-html="willkommen"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Willkommen } from "~/assets/types";

const { findOne } = useStrapi();

const response = await useAsyncData("willkommen", () =>
  findOne<Willkommen>("willkommen")
);

const willkommen = computed(() => {
  return response?.data.value?.data.attributes.Inhalt ?? "";
});
</script>

<style lang="scss" scoped>
section {
  div {
    width: 80vw;
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
    img {
      margin-bottom: 48px;
    }
  }
}
</style>
