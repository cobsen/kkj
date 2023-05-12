<template>
  <section class="divided">
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
  const posts = response?.data.value?.data ?? [];

  return posts.slice(0, 5)
});
</script>

<style lang="scss" scoped>
section {}
</style>
