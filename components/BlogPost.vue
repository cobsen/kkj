<template>
  <div class="blogpost">
    <h3>{{ post.Titel }}</h3>
    <div class="date">{{ post.datum }}</div>

    <nuxt-img
      format="avif"
      :src="'https://kkj-backend.perspective-daily.de' + media.attributes?.url"
      v-for="media in post.Media?.data"
    />
    <div ref="$content" class="content" v-html="props.post.Inhalt"></div>
    <div class="showmore" @click="showFullPost()" v-if="!showAll">
      <img src="../src/blog.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Blogeintrag } from "~/assets/types";
import { snip, unsnip } from "js-snip";

const props = defineProps({
  post: { type: Object as PropType<Blogeintrag>, required: true },
});

const showAll = ref(false);

const $content = ref<HTMLElement | null>(null);

onMounted(() => {
  snip($content.value, { lines: 12, midWord: false }, (newState, oldState) => {
    if (!newState.hasEllipsis) showFullPost();
  });
});

function showFullPost() {
  showAll.value = true;
  unsnip($content.value);
}
</script>

<style lang="scss" scoped>
.blogpost {
  padding-bottom: 32px;
  &:not(:last-child) {
    border-bottom: 1px solid #fff;
  }
}

img {
  max-width: 80%;
  display: block;
  margin: 0 auto 12px;
}
h3 {
  margin-bottom: 8px;
}
.date {
  font-size: 16px;
  margin-bottom: 24px;
}
.showmore {
  img {
    max-width: 80%;
    display: block;
    margin: 32px auto 0;
    cursor: pointer;
  }
}
</style>
