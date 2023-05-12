<template>
  <section>
    <BlogPost :post="post.attributes" :id="post.id" v-for="post in blogposts" />
  </section>
</template>

<script lang="ts" setup>
import { Blogeintrag } from "~/assets/types";
import { computed } from "vue";

const { find } = useStrapi();

const response = await useAsyncData("blogeintrags", () =>
  find<Blogeintrag>("blogeintrags", {
    populate: ["Media", "InlineBilder"],
    sort: 'rank'
  })
);

const blogposts = computed(() => {
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
