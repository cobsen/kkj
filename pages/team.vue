<template>
    <section>
        <h1>Das Team</h1>
        <div class="members">
            <div v-for="member in members" class="member">
                <nuxt-img :modifiers="{
                    resize: '200x200',
                }" :src="'https://kkj-backend.perspective-daily.de' +
    member.attributes.Bild?.data?.attributes?.url
    " alt="" width="200" height="200" />
                <div class="name">
                    {{ member.attributes.Name }} <br />
                    <span>{{ member.attributes.Org }}</span>
                </div>
                <div>
                    {{ member.attributes.Beschreibung }}
                </div>
            </div>
        </div>

        <h1>Unsere Partner</h1>
        <div class="partners">
            <div v-for="partner in partners" class="partner">
                <nuxt-img :modifiers="{
                    w: '200'
                }" :src="'https://kkj-backend.perspective-daily.de' +
    partner.attributes.Logo?.data?.attributes?.url
    " alt="" width="200" />
                <h4>{{ partner.attributes.Name }}</h4>
                <div>{{ partner.attributes.Beschreibung }}</div>
            </div>
        </div>

        <h1>Unser Sponsor</h1>
        <div class="partners">
            <div v-for="partner in sponsors" class="partner">
                <nuxt-img :modifiers="{
                    w: '200'
                }" :src="'https://kkj-backend.perspective-daily.de' +
    partner.attributes.Logo?.data?.attributes?.url
    " alt="" width="200" />
                <h4>{{ partner.attributes.Name }}</h4>
                <div>{{ partner.attributes.Beschreibung }}</div>
            </div>
        </div>

        <h1>Wir danken für die Unterstützung von</h1>
        <div class="partners">
            <div v-for="partner in kooppartners" class="partner">
                <nuxt-img :modifiers="{
                    w: '200'
                }" :src="'https://kkj-backend.perspective-daily.de' +
    partner.attributes.Logo?.data?.attributes?.url
    " alt="" width="200" />
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

const response = await useAsyncData("teammitglieder", () =>
    find<Teammitglied>("teammitglieder", {
        populate: "Bild",
        sort: 'rank'
    })
);

const response2 = await useAsyncData("partners", () =>
    find<Partner>("partners", {
        populate: "Logo",
        sort: 'rank'
    })
);

const response3 = await useAsyncData("sponsors", () =>
    find<Sponsor>("sponsors", {
        populate: "Logo",
        sort: 'rank'
    })
);

const members = computed(() => {
    return response?.data.value?.data ?? [];
});

const partners = computed(() => {
    return response2?.data.value?.data ?? [];
});

const sponsors = computed(() => {
    return response3?.data.value?.data.filter((item) => item.attributes.Art === 'Sponsor') ?? [];
});

const kooppartners = computed(() => {
    return response3?.data.value?.data.filter((item) => item.attributes.Art === 'Kooperationspartner') ?? [];
});


</script>
  
<style lang="scss" scoped>
h1 {
    text-align: center;
}

.members {
    margin: 48px auto;
    max-width: 80%;

    .member {
        display: grid;
        grid-template-columns: 240px auto;
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

        .name {
            grid-area: name;
            margin: 0;
            text-align: center;
            font-weight: 600;

            span {
                font-weight: normal;
            }
        }

        &>div {
            grid-area: description;
        }

        &:not(:last-child) {
            border-bottom: 1px solid #fff;
        }


        @include breakpoint(mobile) {
            margin-right: 0;
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
    max-width: 80%;
    margin: 0 auto;

    .partner {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 64px;
        padding-bottom: 48px;

        &:not(:last-child) {
            border-bottom: 1px solid #fff;
        }

        img {
            border-radius: 0;
        }
    }
}
</style>
  