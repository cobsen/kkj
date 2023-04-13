<template>
  <section id="team">
    <div class="members">
      <div v-for="member in members" class="member">
        <nuxt-img
          :modifiers="{
            resize: '200x200',
          }"
          :src="
            'http://localhost:1337' +
            member.attributes.Bild?.data?.attributes?.url
          "
        />
        <h4>{{ member.attributes.Name }}</h4>
        <div>
          {{ member.attributes.Beschreibung }}
        </div>
      </div>
    </div>

    <div class="partners">
      <div v-for="partner in partners">
        <nuxt-img
          :src="
            'http://localhost:1337' +
            partner.attributes.Logo?.data?.attributes?.formats.thumbnail.url
          "
        />
        <h4>{{ partner.attributes.Name }}</h4>
        {{ partner.attributes.Beschreibung }}<br />
      </div>
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

const response2 = await useAsyncData("partners", () =>
  find<Partner>("partners", {
    populate: "Logo",
  })
);
const response = await useAsyncData("teammitglieder", () =>
  find<Teammitglied>("teammitglieder", {
    populate: "Bild",
  })
);

const members = computed(() => {
  return response?.data.value?.data ?? [];
});

const partners = computed(() => {
  return response2?.data.value?.data ?? [];
});
</script>

<style lang="scss" scoped>
section {
}
.members {
  margin-bottom: 48px;
  .member {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "image description"
      "name description";
    grid-gap: 16px 48px;
    margin-bottom: 24px;
    &:nth-child(2n) {
      grid-template-areas:
        "description image "
        "description name ";
    }
    img {
      grid-area: image;
      border-radius: 1337px;
    }
    h4 {
      grid-area: name;
      margin: 0;
      text-align: center;
    }
    & > div {
      grid-area: description;
    }
  }
}
.partners {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;
}
</style>
