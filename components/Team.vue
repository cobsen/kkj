<template>
  <section id="team">
    <h1 ref="$headline">Das Team</h1>
    <div v-for="member in members">
      {{ member.attributes.Name }}<br />
      {{ member.attributes.Beschreibung }}<br />

      <img
        :src="
          'http://localhost:1337' +
          member.attributes.Bild?.data?.attributes?.formats.thumbnail.url
        "
      />
    </div>
    <div v-for="partner in partners">
      {{ partner.attributes.Name }}<br />
      {{ partner.attributes.Beschreibung }}<br />

      <img
        :src="
          'http://localhost:1337' +
          partner.attributes.Logo?.data?.attributes?.formats.thumbnail.url
        "
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Partner, Teammitglied } from "~/assets/types";
import { computed } from "vue";
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const $headline = ref(null);

const { stop } = useIntersectionObserver(
  $headline,
  ([{ isIntersecting }], observerElement) => {
    console.debug("team", isIntersecting);
  }
);

const { find } = useStrapi();

const response2 = await find<Partner>("partners", {
  populate: "Logo",
});
const response = await find<Teammitglied>("teammitglieder", {
  populate: "Bild",
});

const members = computed(() => {
  return response?.data ?? [];
});

const partners = computed(() => {
  return response2?.data ?? [];
});
</script>

<style lang="scss" scoped>
section {
  min-height: 80vh;
  background: $team;
}
</style>
