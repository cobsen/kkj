<template>
  <section>
    <img src="~/public/kkj.svg" alt="" />
    <div class="content" v-html="displayContent" />

    <div class="image-dummy">
      <nuxt-img format="avif" :src="'https://kkj-backend.perspective-daily.de' + media.attributes?.url"
        v-for="media in konferenz?.InlineBilder?.data" alt="" />
    </div>

    <div class="showmore" @click="showFullPost()" v-if="!showAll">
      <img src="../src/blog.svg" alt="rest des intros anzeigen" />
    </div>
    <Newsletter />
  </section>
</template>

<script lang="ts" setup>
import { Konferenz } from "~/assets/types";

const { findOne } = useStrapi();

const response = await useAsyncData("konferenz", () =>
  findOne<Konferenz>("konferenz", {
    populate: "InlineBilder",
  })
);

const konferenz = computed(() => {
  return response?.data.value?.data.attributes ?? null;
});


const showAll = ref(false);


onMounted(() => {
  if (konferenz.value && konferenz.value?.Inhalt?.search('<hr>') === -1) showAll.value = true;
});

function showFullPost() {
  showAll.value = true;
}

const displayContent = computed(() => {
  if (showAll.value) return konferenz.value?.Inhalt?.replace('<hr>', '')
  return konferenz.value?.Inhalt?.split('<hr>')[0]
})
</script>

<style lang="scss" scoped>
section {
  .content {}

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
}
</style>
