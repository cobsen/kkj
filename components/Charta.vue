<template>
  <section class="divided">
    <div class="content" v-html="charta?.Inhalt" />

    <div class="showmore" @click="showFullPost()" v-if="!showAll">
      <img src="../src/blog.svg" alt="rest des intros anzeigen" />
    </div>
    <template v-else>
      <PdfButton :url="charta.PDF?.data?.attributes?.url" :label="charta.Button"
        v-if="charta?.PDF?.data?.attributes?.url" />
    </template>
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

const showAll = ref(false);

function showFullPost() {
  showAll.value = true;
}
</script>

<style lang="scss" scoped>
section {}

.showmore {
  img {
    max-width: 80%;
    display: block;
    margin: 32px auto 0;
    cursor: pointer;
  }
}
</style>
