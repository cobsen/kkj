<template>
  <section>
    <BlogPost :post="post.attributes" :id="route.params.id" :single="true" />
  </section>
</template>

<script lang="ts" setup>
import { Blogeintrag } from "~/assets/types";
import { computed } from "vue";

const route = useRoute();
const { findOne } = useStrapi();

const response = await useAsyncData("blogeintrags", () =>
  findOne<Blogeintrag>("blogeintrags", route.params.id, {
    populate: ["Media", "InlineBilder"],
  })
);

const post = computed(() => {
  return response?.data.value?.data ?? [];
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
