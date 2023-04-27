<template>
  <section class="divided">
    <div class="content" v-html="charta.Inhalt"></div>

    <PdfButton
      :url="charta.PDF?.data?.attributes?.url"
      label="hier geht es zum PDF"
      v-if="charta?.PDF?.data"
    />
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
  return "https://kkj-backend.perspective-daily.de";
});
</script>

<style lang="scss" scoped>
section {
}
</style>
