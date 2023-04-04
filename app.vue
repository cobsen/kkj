<template>
  <div id="main">
    <Navigation />

    <Konferenz />
    <Charta />
    <Studie />
    <Blog />
    <Team />
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
</script>

<style lang="scss">
#main {
  max-width: 1440px;
}

section {
  padding: 64px;
  box-sizing: border-box;
  margin-left: 300px;
  .content {
    white-space: pre-wrap;
  }
}
body {
  font-family: "Space Grotesk", sans-serif;
  background: rgba(#cedef2, 1);
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
