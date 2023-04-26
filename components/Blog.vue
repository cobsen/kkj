<template>
  <section id="blog" class="divided">
    <BlogPost :post="post.attributes" v-for="post in blogposts" />
  </section>
</template>

<script lang="ts" setup>
import { Blogeintrag } from "~/assets/types";
import { computed } from "vue";

const { find } = useStrapi();

const response = await useAsyncData("blogeintrags", () =>
  find<Blogeintrag>("blogeintrags", {
    populate: "Media",
  })
);

const blogposts = computed(() => {
  return response?.data.value?.data ?? [];
});
</script>

<style lang="scss" scoped>
section {
}
</style>
