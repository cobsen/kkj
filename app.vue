<template>
  <div id="main">
    <Navigation />
    <OverlayScrollbarsComponent
      defer
      :options="{ scrollbars: { autoHide: 'move' } }"
      :events="{ scroll: foo }"
    >
      <div id="content">
        <div>
          <img class="stripes" src="~/public/logo02-01.svg" />
          <div class="label">
            <img src="~/public/logo01-01.svg" />
          </div>
        </div>
        <Konferenz />
        <div><div class="label">Charta</div></div>
        <Charta />
        <div><div class="label">Studie</div></div>
        <Studie />
        <div>
          <div class="label">Blog &<br />Newsletter</div>
        </div>
        <Blog />
        <div><div class="label">Team</div></div>
        <Team />
      </div>
    </OverlayScrollbarsComponent>
  </div>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Team from "./components/Team.vue";
import Konferenz from "./components/Konferenz.vue";
import Charta from "./components/Charta.vue";
import Blog from "./components/Blog.vue";
import Studie from "./components/Studie.vue";
import "@fontsource/space-grotesk";
import "overlayscrollbars/overlayscrollbars.css";
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentRef,
} from "overlayscrollbars-vue";
import { ref, onMounted } from "vue";

const body = ref<HTMLBodyElement | null>(null);

onMounted(() => {
  body.value = document.getElementsByTagName("body")[0];
});

function foo(_instance: OverlayScrollbarsComponentRef, scroll: Event) {
  if (body.value)
    body.value.style.backgroundSize = 100 + scroll.target?.scrollTop / 50 + "%";
}
</script>

<style lang="scss">
#main {
  max-width: 1440px;
  padding: 48px 64px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
}

#content {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 24px;
  & > :first-child {
    position: relative;
  }
}

.label {
  font-size: 48px;
  line-height: 1;
  text-align: right;
  position: sticky;
  top: 0px;
}

.stripes {
  position: absolute;
  top: 0;
  left: 0;
}

section {
  box-sizing: border-box;
  &:before {
    content: " ";
    display: block;
    margin: 23px 0;
    background: $main;
    height: 3px;
    background-clip: content-box;
  }
  .content {
    white-space: pre-wrap;
    padding: 0 8px;
    column-count: 2;
    column-gap: 24px;
  }
}
body {
  font-family: "Space Grotesk", sans-serif;
  color: $main;
  background: rgba(#cedef2, 1);
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.09);
  background: repeating-linear-gradient(
    105deg,
    rgba(#cedef2, 1),
    rgba(#cedef2, 1),
    rgba(#f8b993, 1),
    rgba(#f8b993, 1),
    rgba(#f7a9a0, 1),
    rgba(#f7a9a0, 1),
    rgba(#9ef2db, 1),
    rgba(#9ef2db, 1),
    rgba(#4a97fa, 1),
    rgba(#4a97fa, 1),
    rgba(#cedef2, 1),
    rgba(#cedef2, 1) 200vh
  );
  background-position-x: 100vw;
  background-position-y: 100vh;
}
.os-scrollbar {
  margin: 32px 0;
}
</style>
