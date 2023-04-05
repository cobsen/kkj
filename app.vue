<template>
  <div id="main">
    <Navigation />
    <OverlayScrollbarsComponent defer>
      <div id="content">
        <div><div class="label">Konferenz</div></div>
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
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
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
}

.label {
  font-size: 48px;
  line-height: 1;
  text-align: right;
  position: sticky;
  top: 0px;
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
}
body::-webkit-scrollbar {
  width: 6px;
  height: auto;
}
body::-webkit-scrollbar-thumb {
  background: red;
}
body::-webkit-scrollbar-track {
  background: yellow;
}
</style>
