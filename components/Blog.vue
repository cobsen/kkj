<template>
  <section id="blog">
    <div v-for="post in blogposts">
      <h3>{{ post.attributes.Titel }}</h3>
      <div class="content" v-html="post.attributes.Inhalt"></div>

      <img
        :src="'http://localhost:1337' + media.attributes?.formats.large.url"
        v-for="media in post.attributes.Media?.data"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Blogeintrag } from "~/assets/types";
import { computed } from "vue";

const { find } = useStrapi();

const response = await find<Blogeintrag>("blogeintrags", {
  populate: "Media",
});

const blogposts = computed(() => {
  return response?.data ?? [];
});
</script>

<style lang="scss" scoped>
section {
  img {
    max-width: 100%;
  }
}
</style>
