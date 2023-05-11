<template>
    <section>
        <div>
            <img src="../src/logo.svg" alt="" />
            <VueMarkdown :source="angemeldet" />
        </div>
    </section>
</template>
  
<script lang="ts" setup>
import { Angemeldet } from "~/assets/types";
import VueMarkdown from 'vue-markdown-render'

const { findOne } = useStrapi();

const response = await useAsyncData("angemeldet", () =>
    findOne<Angemeldet>("angemeldet")
);

const angemeldet = computed(() => {
    return response?.data.value?.data.attributes.Inhalt ?? "";
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
  