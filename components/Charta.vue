<template>
  <section class="divided">
    <VueMarkdown class="content" :source="charta?.Inhalt" />

    <PdfButton
      :url="charta.PDF?.data?.attributes?.url"
      label="hier geht es zum PDF"
      v-if="charta?.PDF?.data?.attributes?.url"
    />
  </section>
</template>

<script lang="ts" setup>
import { Charta } from "~/assets/types";
import VueMarkdown from 'vue-markdown-render'

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
