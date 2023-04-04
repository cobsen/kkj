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
import "@fontsource/antonio";
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
  background: rgb(0, 212, 255);
  background: repeating-linear-gradient(
    105deg,
    rgba(0, 212, 255, 1),
    rgba(50, 212, 52, 1),
    rgba(50, 212, 52, 1),
    rgba(200, 6, 137, 1),
    rgba(200, 6, 137, 1),
    rgba(0, 212, 255, 1) 100vh
  );
  font-family: "Antonio", sans-serif;
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
