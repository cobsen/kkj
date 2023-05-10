<template>
    <section class="divided">
        <div class="content" v-html="programm?.Inhalt" />

        <PdfButton :url="programm.PDF?.data?.attributes?.url" :label="programm.Button"
            v-if="programm?.PDF?.data?.attributes?.url && programm?.Button" />
    </section>
</template>
  
<script lang="ts" setup>
import { Programm } from "~/assets/types";

const { findOne } = useStrapi();

const response = await useAsyncData("programm", () =>
    findOne<Programm>("programm", {
        populate: "PDF",
    })
);

const programm = computed(() => {
    return response?.data.value?.data.attributes ?? null;
});

const host = computed(() => {
    if (process.server && process.env.prerender) {
        return "";
    }
    return "https://kkj-backend.perspective-daily.de";
});
</script>
  
<style lang="scss" scoped>
section {}
</style>
  