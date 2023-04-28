<template>
  <section class="divided">
    <div class="members">
      <div v-for="member in members" class="member">
        <nuxt-img
          :modifiers="{
            resize: '200x200',
          }"
          :src="
            'https://kkj-backend.perspective-daily.de' +
            member.attributes.Bild?.data?.attributes?.url
          "
          alt=""
        />
        <h4>{{ member.attributes.Name }}</h4>
        <div>
          {{ member.attributes.Beschreibung }}
        </div>
      </div>
    </div>

    <div class="partners">
      <div v-for="partner in partners" class="partner">
        <nuxt-img
          :modifiers="{
            w: '200',
          }"
          :src="
            'https://kkj-backend.perspective-daily.de' +
            partner.attributes.Logo?.data?.attributes?.url
          "
          alt=""
        />
        <h4>{{ partner.attributes.Name }}</h4>
        <div>{{ partner.attributes.Beschreibung }}</div>
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
  margin: 48px 0;
  .member {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "image description"
      "name description";
    grid-gap: 16px 48px;
    margin-bottom: 64px;
    padding-bottom: 48px;
    img {
      grid-area: image;
      border-radius: 1337px;
      justify-self: center;
    }
    h4 {
      grid-area: name;
      margin: 0;
      text-align: center;
    }
    & > div {
      grid-area: description;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #fff;
    }
    @include breakpoint(mobile) {
      grid-template-columns: auto;
      grid-template-areas:
        "image"
        "name"
        "description";
      &:nth-child(2n) {
        grid-template-areas:
          "image"
          "name"
          "description";
      }
    }
  }
}

.partners {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  .partner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
