<template>
  <div class="blogpost">

    <NuxtLink :to="`/nachrichten/${id}`" class="headline">
      <h3>{{ post.Titel }}</h3>
    </NuxtLink>
    <div class="date">{{ date }}</div>

    <nuxt-img format="avif" :src="'https://kkj-backend.perspective-daily.de' + media.attributes?.url"
      v-for="media in post?.Media?.data" alt="" />

    <div ref="$content" class="content" v-html="displayContent" />

    <div class="showmore" @click="showFullPost()" v-if="!showAll">
      <img src="../src/blog.svg" alt="rest des blogposts anzeigen" />
    </div>

    <div class="image-dummy">
      <nuxt-img format="avif" :src="'https://kkj-backend.perspective-daily.de' + media.attributes?.url"
        v-for="media in post?.InlineBilder?.data" alt="" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { Blogeintrag } from "~/assets/types";

const props = defineProps({
  post: { type: Object as PropType<Blogeintrag>, required: true },
  single: { type: Boolean, default: false },
  id: { type: [Number, String], required: true },
});

const showAll = ref(false);

const $content = ref<HTMLElement | null>(null);

onMounted(() => {
  if (props.single || props.post.Inhalt?.search('<hr>') === -1) showAll.value = true;
});

function showFullPost() {
  showAll.value = true;
}

const displayContent = computed(() => {
  if (!props.post) return ''
  if (props.single || showAll.value) return props.post.Inhalt?.replace('<hr>', '')
  return props.post.Inhalt?.split('<hr>')[0]
})

const date = computed(() => {
  if (!props.post?.datum) return ''
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  const date = new Date(props.post.datum);
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`
})
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

a {
  color: #fff;
}

h3 {
  margin-bottom: 8px;
  color: #fff;
  text-decoration: none;
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

.image-dummy {
  height: 0;
  width: 0;
  overflow: hidden;
}

a.headline:after {
  display: none;
}
</style>
